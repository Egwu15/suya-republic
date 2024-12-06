<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use App\Models\Product;
use \Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class CartController extends Controller
{


    public function index()
    {
        return Inertia::render('Cart/cart', ['cartAdded' => false, 'products' => []]);
    }

    public function checkout()
    {
        $squareAppId = env("SQUARE_APP_KEY");
        $squareLocationId = env('SQUARE_LOCATION_ID');
        return Inertia::render('Checkout/checkout', ['squareAppId' => $squareAppId, 'squareLocationId' => $squareLocationId]);
    }


    public function create(Request $request)
    {
        $productIds = $request->input('product_ids', []);
        $products = Product::whereIn('id', $productIds)->get();
        return Inertia::render('Cart/cart', ['cartAdded' => true, 'products' => $products]);
    }

    public function processPayment(Request $request)
    {
        dd($request);
        $user = Auth::user(); // Retrieve the logged-in user
        $nonce = $request->input('nonce');
        $totalCents = $request->input('totalCents');
        $products = $request->input('products'); // Retrieve the products array
        $accessToken = env('SQUARE_ACCESS_TOKEN');
        $environment = env('SQUARE_ENVIRONMENT') === 'production' ? 'https://connect.squareup.com' : 'https://connect.squareupsandbox.com';

        $url = $environment . '/v2/payments';
        $orderId = uniqid('su-');
        // Prepare the payment data
        $body = [
            'source_id' => $nonce,
            'idempotency_key' => $orderId, // Ensure uniqueness for the payment request
            'amount_money' => [
                'amount' => $totalCents, // Amount in cents
                'currency' => 'EUR', // Adjust currency if needed
            ],
        ];

        // Make the HTTP request to Square's API
        $response = Http::withToken($accessToken)->post($url, $body);
        $isAuthenticated = $user == null ? true : false;
        if ($response->successful()) {
            // Save the order details


            // Save the order in the database
            $order = Order::insertGetId([
                'external_order_id' => $orderId,
                'user_id' =>  $isAuthenticated ?  $user->id : null,
                'status' => 'pending',
                'email' => 'none@none.com',
                'name' => 'user name',
                'is_guest' => true,
                'note' => 'add notes',
                'total' => $totalCents * 100,
            ]);

            // Save the ordered products
            foreach ($products as $product) {

                OrderItem::insert([
                    'order_id' => $orderId,
                    'product_id' => $product['id'],
                    'name' => $product['name'],
                    'price_cents' => $product['priceCents'],
                    'quantity' => $product['quantity'],
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }

            return redirect()->route('products.index')->with('success', 'Payment successful!');
        } else {
            // Handle the error
            $errorMessage = $response->json('errors') ?? 'An unexpected error occurred.';
            return back()->withErrors($errorMessage);
        }
    }
}
