<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('HomePage/index');
});
Route::get('/menu', [ProductController::class, 'index'])->name('menu');
Route::get('/cartItems', [ProductController::class, 'index'])->name('menu');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::post('/cart', [CartController::class, 'create']);
Route::get('/cart', [CartController::class, 'index']);
Route::get(
    '/checkout',
    [CartController::class, 'checkOut']
);



Route::post('/submitContact', [ContactController::class, 'create']);


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


// ------------------frontOnlyPages-------------
Route::get('/menu2', function () {
    return Inertia::render('Menu2/menu2');
});
Route::get('/order-online', function () {
    return Inertia::render('OrderOnline/orderOnline');
});
Route::get('/signup', function () {
    return Inertia::render('Signup/signup');
});
Route::get('/login', function () {
    return Inertia::render('Auth/Login');
});

Route::get('/cart', function () {
    return Inertia::render('Cart/cart');
});
Route::get('/contact', function () {
    return Inertia::render('Contact/contact');
});
Route::get('/about', function () {
    return Inertia::render('About/about');
});
Route::get('/product', function () {
    return Inertia::render('Product/product');
});

// Route::get('/checkout', [CheckoutController::class, 'index'])->name('Checkout');

require __DIR__ . '/auth.php';
