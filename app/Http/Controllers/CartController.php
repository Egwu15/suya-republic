<?php

namespace App\Http\Controllers;

use App\Mail\SaleReceipt;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use App\Models\Purchase;
use App\Models\ReceiptMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Random\RandomException;
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


        Stripe::setApiKey(config('payment.stripe.secretKey'));

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
        do {
            $productOrderId = 'ST-' . random_int(100000, 999999);
        } while (Order::where('external_order_id', $productOrderId)->exists());


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
            'phone' => $billingDetails['phone'],
            'date' => $createdAt,
            'orderNo' => $productOrderId,
            'total' => "£{$totalPrice}",
            'products' => $products,
        ];

        defer(fn() => Purchase::recordPurchase($billingDetails['email'], $totalPrice));
        defer(fn() => Mail::send(new SaleReceipt($data)));


        $receipt = [
            'name' => $data['name'],
            'email' => $data['email'],
            'orderNo' => $data['orderNo'],
            'total' => $data['total'],
        ];

        return Inertia::render('Receipt/receipt', compact('receipt'));
    }

    /**
     * @throws ApiErrorException
     * @throws RandomException
     */
    public function createPaymentIntent(Request $request)
    {
        Stripe::setApiKey(config('payment.stripe.secretKey'));

        // Validate request BEFORE navigating away to Stripe
        $request->validate([
            'billingDetails.firstName' => 'required|string|max:60',
            'billingDetails.lastName' => 'required|string|max:60',
            'billingDetails.email' => 'required|email|max:100',
            'billingDetails.phone' => 'required|string|max:30|min:10',
            'billingDetails.notes' => 'string|max:300',
            'products' => 'required|array|min:1',
            'amount' => 'required|numeric|min:1',
        ]);

        $amount = $request->input('amount');
        $billingDetails = $request->input('billingDetails');
        $products = $request->input('products');


        // Verify products/prices and total against DB
        $productIds = array_column($products, 'id');
        /** @var Product $productsModel */
        $productsModel = Product::findMany($productIds)->keyBy('id');
        $totalPrice = 0;

        foreach ($products as $product) {
            $productModel = $productsModel->get($product['id']);
            if (!$productModel) {
                return Redirect::back()->withErrors(['product_error' => 'Invalid product added'])->withInput();
            }

            if ((float)$productModel->price !== (float)$product['price']) {
                return Redirect::back()->withErrors([
                    'product_error' => "Price mismatch for product: {$productModel->name}"
                ])->withInput();
            }

            $totalPrice += (float)$product['price'] * ($product['quantity'] ?? 1);
        }

        $totalPrice = round($totalPrice, 2, PHP_ROUND_HALF_DOWN);
        $amount = round((float)$amount, 2, PHP_ROUND_HALF_DOWN);


        if ($totalPrice != $amount) {
            return Redirect::back()->withErrors(['product_error' => 'Total price mismatch'])->withInput();
        }

        // Create a pending order BEFORE redirect so we can update it on success/failure
        $user = Auth::user();
        do {
            $productOrderId = random_int(1000, 999999);
        } while (Order::where('external_order_id', $productOrderId)->exists());
        $createdAt = now();
        $updatedAt = $createdAt;

        $orderId = Order::insertGetId([
            'external_order_id' => $productOrderId,
            'user_id' => $user?->id,
            'status' => 'pending',
            'payment_status' => 'Pending',
            'phone_number' => $billingDetails['phone'],
            'email' => $billingDetails['email'] ?? null,
            'name' => ($billingDetails['firstName'] ?? '') . ' ' . ($billingDetails['lastName'] ?? ''),
            'is_guest' => $user === null,
            'note' => $billingDetails['note'] ?? ($billingDetails['notes'] ?? null),
            'total' => $amount,
            'created_at' => $createdAt,
            'updated_at' => $updatedAt,
        ]);

        foreach ($products as $product) {
            OrderItem::insert([
                'order_id' => $orderId,
                'product_id' => $product['id'],
                'variance_option' => $product['variance_id'] ?? null,
                'price' => $product['price'],
                'quantity' => $product['quantity'] ?? 1,
                'created_at' => $createdAt,
                'updated_at' => $updatedAt,
            ]);
        }

        // Create the PaymentIntent with order metadata
        $purchaserName = [
            'name' => ($billingDetails['firstName'] . ' ' . $billingDetails['lastName']),
            'email' => (string)($billingDetails['email'] ?? ''),
            'phone' => (string)($billingDetails['phone'] ?? ''),
            'order_id' => (string)($orderId),
        ];

        $amountInCents = (int)round($amount * 100, 0, PHP_ROUND_HALF_DOWN);

        $intent = PaymentIntent::create([
            'amount' => $amountInCents,
            'currency' => 'GBP',

            'automatic_payment_methods' => [
                'enabled' => true,
            ],
            'metadata' => $purchaserName,
        ]);

        return Inertia::location("stripe/checkout?cs=" . urldecode($intent->client_secret));
//        stripe/checkout?cs= . $intent->client_secret}
//        return response()->json(['clientSecret' => $intent->client_secret]);
    }

    public function create(Request $request)
    {
        $productIds = $request->input('product_ids', []);
        $products = Product::whereIn('id', $productIds)->get();
        return Inertia::render('Cart/cart', ['cartAdded' => true, 'products' => $products]);
    }

    public function stripeCheckout(Request $request)
    {
        $clientSecret = $request->query('cs');
        $publicKey = config('payment.stripe.publicKey');
        return Inertia::render('Checkout/stripe', [
            'clientSecret' => $clientSecret,
            'publicKey' => $publicKey,
        ]);
    }

    /**
     * Handle redirect back from Stripe after confirmPayment (Payment Element)
     * @throws ApiErrorException
     */
    public function stripeCallback(Request $request)
    {
        Stripe::setApiKey(config('payment.stripe.secretKey'));

        $paymentIntentId = $request->query('payment_intent');
        if (!$paymentIntentId) {
            return Redirect::route('checkout')->withErrors(['payment' => 'Missing payment intent.']);
        }

        if (ReceiptMail::where('payment_intent_id', $paymentIntentId)->exists()) {
            return Redirect::route('checkout')->withErrors(['payment' => 'This payment has already been processed.']);
        }

        $intent = PaymentIntent::retrieve($paymentIntentId);
        $metadata = $intent->metadata ?? [];
        $orderIdMeta = isset($metadata['order_id']) ? (int)$metadata['order_id'] : null;
        $order = Order::with(['orderItem', 'orderItem.product'])->find($orderIdMeta);
        if ($intent->status !== 'succeeded') {
            $order?->update(['payment_status' => 'Failed']);
            return Redirect::route('checkout')->withErrors(['payment' => 'Payment was not successful']);
        }

        // Finalize existing order

        if (!$order) {
            // If order not found, fallback: redirect with error
            return Redirect::route('checkout')->withErrors(['payment' => 'Order not found for this payment.']);
        }

        $order->update(['payment_status' => 'Successful']);

        // Prepare email/receipt data from metadata and order
        $createdAt = $order->created_at;
        $totalPrice = $order->total; // already stored as decimal pounds

//        dd($order);
        $data = [
            'email' => $order->email,
            'name' => $order->name,
            'date' => $createdAt,
            'orderNo' => $order->external_order_id,
            'total' => '£' . $totalPrice,
            'products' => $order->orderItem,
            'phone' => $order->phone_number,
            'subtotal' => $order->total,
            'shipping_note' => 'All orders are to be collected in-store at',
            'store_pickup_address' => '303 Chester Road, Manchester M15 4EY',
            'payment_method' => 'Stripe',
            'note' => $order->note,
        ];

        $receiptMail = ReceiptMail::create([
            'payment_intent_id' => $paymentIntentId,
            'email' => $data['email'],
            'status' => 'pending',
        ]);

        defer(function () use ($data, $totalPrice, $receiptMail) {
            try {
                Purchase::recordPurchase($data['email'], $totalPrice);
                Mail::send(new SaleReceipt($data));

                $receiptMail->update(['status' => 'completed']);
            } catch (\Throwable $e) {
                $receiptMail->update(['status' => 'failed']);
                report($e);
            }
        });

        return Inertia::render('Receipt/receipt', compact('data'));
    }

}
