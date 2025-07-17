<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Purchase;
use Illuminate\Http\Request;
use App\Models\Product;
use \Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;
use App\Mail\SaleReceipt;
use Illuminate\Support\Facades\Mail;
use Stripe\Exception\ApiErrorException;
use Stripe\PaymentIntent;
use Stripe\Stripe;


class CartController extends Controller
{


    public function index()
    {
        return Inertia::render('Cart/cart', ['cartAdded' => false, 'products' => []]);
    }

    public function checkout()
    {
        return Inertia::render('Checkout/checkout');
    }


    public function create(Request $request)
    {
        $productIds = $request->input('product_ids', []);
        $products = Product::whereIn('id', $productIds)->get();
        return Inertia::render('Cart/cart', ['cartAdded' => true, 'products' => $products]);
    }

    public function processPaymentSquare(Request $request)
    {

        $request->validate([
            'billingDetails.firstName' => 'required|string|max:60',
            'billingDetails.lastName' => 'required|string|max:60',
            'billingDetails.email' => 'required|email|max:100',
            'billingDetails.phone' => 'required|string|max:30',
            'billingDetails.notes' => 'string|max:300',
            'totalCents' => 'required|numeric|min:0',
            'products' => 'required|array',
            'nonce' => 'required|string',
        ]);


        $user = Auth::user(); // Retrieve the logged-in user
        $nonce = $request->input('nonce');

        $billingDetails = $request->input('billingDetails');
        $totalCents = $request->input('totalCents');
        $products = $request->input('products');
        $accessToken = env('SQUARE_ACCESS_TOKEN');
        $environment = env('SQUARE_ENVIRONMENT') === 'production' ? 'https://connect.squareup.com' : 'https://connect.squareupsandbox.com';

        $url = $environment . '/v2/payments';
        $productOrderId = uniqid('SU-');



        // Prepare the payment data
        $body = [
            'source_id' => $nonce,
            'idempotency_key' => $productOrderId,
            'amount_money' => [
                'amount' => $totalCents,
                'currency' => 'GBP',
            ],
            'reference_id' => $productOrderId,
            'buyer_email_address' => $billingDetails['email']
        ];


        //check if price match the db
        $productIds = array_column($products, 'id');

        /** @var Product $productsModel */
        $productsModel = Product::findMany([$productIds])->keyBy('id');
        $totalPrice = 0;


        foreach ($products as $product) {
            $productModel = $productsModel->get($product['id']);

            if (!$productModel) {
                return Redirect::back()->withErrors(['product_detail' => 'Invalid product added'])->withInput();
            }

            if ($productModel->price !== $product['price']) {

                return Redirect::back()->withErrors([
                    'product_detail' => "Price mismatch for product: {$productModel->name}"
                ])->withInput();
            }

            $totalPrice += $product['price'] * $product['quantity'];
        }


        if ($totalPrice != $totalCents / 100) {
            return Redirect::back()->withErrors(provider: ['product_detail' => 'Total price mismatch'])->withInput();
        }


        // Make the HTTP request to Square's API
        $response = Http::withToken($accessToken)->post($url, $body);

        $isAuthenticated = !($user == null);
        $createdAt = now();
        $updatedAt = $createdAt;

        $orderId = Order::insertGetId([
            'external_order_id' => $productOrderId,
            'user_id' =>  $isAuthenticated ?  $user->id : null,
            'status' => 'pending',
            'payment_status' => 'Pending',
            'email' => $billingDetails['email'],
            'name' => $billingDetails['firstName'] . ' ' . $billingDetails['lastName'],
            'is_guest' => !$isAuthenticated,
            'note' => $billingDetails['note'],
            'total' => $totalCents / 100,
            'created_at' => $createdAt,
            'updated_at' => $updatedAt,
        ]);

        //Save products


        foreach ($products as $product) {

            OrderItem::insert([
                'order_id' => $orderId,
                'product_id' => $product['id'],
                'variance_option' => $product['variance_id'],
                'price' => $product['price'] / 100,
                'quantity' => $product['quantity'],
                'created_at' => $createdAt,
                'updated_at' => $updatedAt,
            ]);
        }

        if ($response->successful()) {

            $order = Order::find($orderId);
            $order->update(['payment_status' => 'Successful']);

            $data = [
                'email' => $billingDetails['email'],
                'name' => $billingDetails['firstName'] . ' ' . $billingDetails['lastName'],
                'date' => $createdAt,
                'orderNo' => $productOrderId,
                'total' => "£{$totalPrice}",
                'products' => $products,

            ];
            defer(fn() => Purchase::recordPurchase($billingDetails['email'], $totalPrice));
            defer(fn() => Mail::send(new SaleReceipt($data)));
        } else {
            $order = Order::find($orderId);
            $order->update(['payment_status' => 'Failed']);
            $errorMessage = $response->json('errors') ?? 'Payment failed. Please try again.';


            return Redirect::back()->withErrors(['payment' => $errorMessage])->withInput();
        }
    }

    /**
     * @throws ApiErrorException
     */
    public function processPaymentStripe(Request $request)
    {

        $request->validate([
            'billingDetails.firstName' => 'required|string|max:60',
            'billingDetails.lastName' => 'required|string|max:60',
            'billingDetails.email' => 'required|email|max:100',
            'billingDetails.phone' => 'required|string|max:30',
            'billingDetails.notes' => 'string|max:300',
            'totalCents' => 'required|numeric|min:0',
            'products' => 'required|array',
            'paymentIntentId' => 'required|string',
        ]);


        Stripe::setApiKey(env('STRIPE_SECRET_KEY'));

        $billingDetails = $request->input('billingDetails');
        $totalCents = $request->input('totalCents');
        $products = $request->input('products');
        $paymentIntentId = $request->input('paymentIntentId');


        //check if price match the db
        $productIds = array_column($products, 'id');

        /** @var Product $productsModel */
        $productsModel = Product::findMany([$productIds])->keyBy('id');
        $totalPrice = 0;


        foreach ($products as $product) {
            $productModel = $productsModel->get($product['id']);

            if (!$productModel) {
                return Redirect::back()->withErrors(['product_error' => 'Invalid product added'])->withInput();
            }

            if ($productModel->price !== $product['price']) {

                return Redirect::back()->withErrors([
                    'product_error' => "Price mismatch for product: {$productModel->name}"
                ])->withInput();
            }

            $totalPrice += $product['price'] * $product['quantity'];
        }


        if ($totalPrice != $totalCents / 100) {
            return Redirect::back()->withErrors(provider: ['product_error' => 'Total price mismatch'])->withInput();
        }



        // Confirm the payment
        $intent = PaymentIntent::retrieve($paymentIntentId);

        if ($intent->status !== 'succeeded') {
            return back()->withErrors(['payment' => 'Payment was not successful'])->withInput();
        }

        $user = Auth::user();
        $productOrderId = uniqid('ST-');


        $createdAt = now();
        $updatedAt = $createdAt;

        $orderId = Order::insertGetId([
            'external_order_id' => $productOrderId,
            'user_id' => $user?->id,
            'status' => 'pending',
            'payment_status' => 'Successful',
            'email' => $billingDetails['email'],
            'name' => $billingDetails['firstName'] . ' ' . $billingDetails['lastName'],
            'is_guest' => $user === null,
            'note' => $billingDetails['note'],
            'total' => $totalCents / 100,
            'created_at' => $createdAt,
            'updated_at' => $updatedAt,
        ]);

        //Save products


        foreach ($products as $product) {

            OrderItem::insert([
                'order_id' => $orderId,
                'product_id' => $product['id'],
                'variance_option' => $product['variance_id'],
                'price' => $product['price'] / 100,
                'quantity' => $product['quantity'],
                'created_at' => $createdAt,
                'updated_at' => $updatedAt,
            ]);
        }



        $data = [
            'email' => $billingDetails['email'],
            'name' => $billingDetails['firstName'] . ' ' . $billingDetails['lastName'],
            'date' => $createdAt,
            'orderNo' => $productOrderId,
            'total' => "£{$totalPrice}",
            'products' => $products,
        ];
        defer(fn() => Purchase::recordPurchase($billingDetails['email'], $totalPrice));
        defer(fn() => Mail::send(new SaleReceipt($data)));



        $receipt = [
            'name'=>$data['name'],
            'email'=> $data['email'],
            'orderNo'=> $data['orderNo'],
            'total'=> $data['total'],
        ];

        return Inertia::render('Receipt/receipt', compact('receipt'));
    }

    /**
     * @throws ApiErrorException
     */
    public function createPaymentIntent(Request $request)
    {
        Stripe::setApiKey(env('STRIPE_SECRET_KEY'));

        $amount = $request->input('amount');
        $intent = PaymentIntent::create([
            'amount' => $amount,
            'currency' => 'GBP',
        ]);

        return response()->json(['clientSecret' => $intent->client_secret]);
    }

}
