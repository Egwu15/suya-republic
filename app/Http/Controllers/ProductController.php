<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $limit = $request->input('limit', 30);
        $page = $request->input('page', 1);
        $selectedCategory = $request->input('selectedCategory');

        $products = $selectedCategory != null
            ? Product::where('category_id', $selectedCategory)->paginate()
            : Product::paginate($limit);

        $categories = Category::paginate($limit);

        return inertia()->render('Menu/menu', [
            'products' => $products,
            'categories' => $categories,
            'page' => $page,
            'limit' => $limit,
            'total' => $products->total(),
        ]);
    }
}
