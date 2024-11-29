<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use \Inertia\Inertia;

class CartController extends Controller
{


    public function index()
    {
        return Inertia::render('Cart/cart', ['cartAdded' => false, 'products' => []]);
    }


    public function create(Request $request)
    {
        $productIds = $request->input('product_ids', []);
        $products = Product::whereIn('id', $productIds)->get();
        return Inertia::render('Cart/cart', ['cartAdded' => true, 'products' => $products]);
    }
}
