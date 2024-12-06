<?php

namespace App\Http\Controllers;

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
        $user = Auth::user(); // Retrieve the logged-in user
        $nonce = $request->input('nonce');
        $totalCents = $request->input('totalCents');
        $products = $request->input('products'); // Retrieve the products array
        $accessToken = env('SQUARE_ACCESS_TOKEN');
        $environment = env('SQUARE_ENVIRONMENT') === 'production' ? 'https://connect.squareup.com' : 'https://connect.squareupsandbox.com';

        $url = $environment . '/v2/payments';

        // Prepare the payment data
        $body = [
            'source_id' => $nonce,
            'idempotency_key' => uniqid(), // Ensure uniqueness for the payment request
            'amount_money' => [
                'amount' => $totalCents, // Amount in cents
                'currency' => 'USD', // Adjust currency if needed
            ],
        ];

        // Make the HTTP request to Square's API
        $response = Http::withToken($accessToken)->post($url, $body);

        if ($response->successful()) {
            // Save the order details
            $orderId = uniqid();

            // Save the order in the database
            $order = \DB::table('orders')->insertGetId([
                'order_id' => $orderId,
                'user_id' => $user->id,
                'total_price' => $totalCents / 100, // Convert cents to dollars
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            // Save the ordered products
            foreach ($products as $product) {
                \DB::table('order_products')->insert([
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
