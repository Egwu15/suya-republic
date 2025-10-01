<?php
return [
    'stripe' => [
        'publicKey' => env('VITE_STRIPE_PUBLIC_KEY'),
        'secretKey' => env('STRIPE_SECRET_KEY'),
    ]
];
