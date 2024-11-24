<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('HomePage/index');
});
Route::get('/menu', [ProductController::class, 'index'])->name('menu');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


// ------------------frontOnlyPages-------------
Route::get('/menu2', function(){
    return Inertia::render('Menu2/menu2');
});
Route::get('/orderOnline', function(){
    return Inertia::render('OrderOnline/orderOnline');
});
Route::get('/signup', function(){
    return Inertia::render('Signup/signup');
});
Route::get('/login', function(){
    return Inertia::render('Auth/login');
});
Route::get('/checkout', function(){
    return Inertia::render('Checkout/checkout');
});
Route::get('/cart', function(){
    return Inertia::render('Cart/cart');
});
// Route::get('/checkout', [CheckoutController::class, 'index'])->name('Checkout');

require __DIR__ . '/auth.php';
