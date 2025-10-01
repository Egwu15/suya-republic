<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Mail\ContactMail;
use App\Mail\SaleReceipt;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [ProductController::class, 'home'])->name('home');
Route::get('/menu', [ProductController::class, 'index'])->name('menu');
Route::get('/cartItems', [ProductController::class, 'index'])->name('cartItems');


// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::post('/cart', [CartController::class, 'create']);
Route::get('/cart', [CartController::class, 'index']);
Route::post('/process-payment', [CartController::class, 'processPaymentStripe'])->name('process-payment');;
Route::post('/create-payment-intent', [CartController::class, 'createPaymentIntent'])->name('create-payment-intent');
// Stripe Payment Element checkout page (client-side Stripe Elements)
Route::get('/stripe/checkout', [CartController::class, 'stripeCheckout'])->name('payment.stripe.checkout');
// Stripe redirect/callback after payment confirmation
Route::get('/stripe/callback', [CartController::class, 'stripeCallback'])->name('payment.stripe.callback');
Route::get(   '/checkout',    [CartController::class, 'checkOut'])->name('checkout');
//Route::get('/link', function () {
//    return \Illuminate\Support\Facades\Artisan::call('storage:link');
//});


Route::post('/submitContact', [ContactController::class, 'create']);


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route::get('/checkMail', function () {
     // return View('mail.receipt');
//     $data = [
//         'name' => "named named",
//         'email' => 'egwutedd@gmail.com',
//         'subject' => 'email Subject',
//         'message' => 'This is the message a long one Hello, I would like to know more about the suya spice and how it can be delivered to my location in London.'
//
//     ];

//     $data = [
//         'email' => 'egwutedd@gmail.com',
//         'name' => 'ted Ewgt',
//         'date' => date('Y-m-d'),
//         'orderNo' => '232ea',
//         'total' => "£300",
//         'products' => [],
//     ];
//
//     defer(fn() => Mail::send(new SaleReceipt($data)));
//     return 'success';
//   return (new ContactMail($data))->render();
// });



// ------------------frontOnlyPages-------------
Route::get('/spices', [ProductController::class, 'international']);
Route::get(
    '/.well-known/apple-developer-merchantid-domain-association',
    function () {
        $filePath = storage_path('/apple-developer-merchantid-domain-association');
        return  response()->download($filePath);
    }
);
Route::get('/order-online', function () {
    return Inertia::render('OrderOnline/orderOnline');
});

Route::get('/signup', function () {
    return Inertia::render('Signup/signup');
});
Route::get('/login', function () {
    return Inertia::render('Auth/Login');
});
Route::get('/reset', function () {
    return Inertia::render('Auth/ResetPassword');
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
