<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $limit = $request->input('limit', 50);
        $page = $request->input('page', 1);
        $selectedCategory = $request->input('selectedCategory');

        $products = $selectedCategory != null
            ? Product::with(['variance.options'])
            ->where('category_id', $selectedCategory)
            ->where('is_international', false)
            ->paginate()

            : Product::with(['variance.options'])
            ->where('is_international', false)
            ->paginate($limit);

        $categories = Category::paginate($limit);


        return inertia()->render('Menu/menu', [
            'products' => $products,
            'categories' => $categories,
            'page' => $page,
            'limit' => $limit,
            'total' => $products->total(),
        ]);
    }

    public function international(Request $request)
    {
        $products =  Product::with(['variance.options'])
            ->where('is_international', true)->get();
       
        return inertia()->render('InternationalMenu/InternationalMenu', ['products' => $products]);
    }
}
