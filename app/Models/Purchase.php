<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'purchase_count',
        'total_spent',
    ];

    protected $casts = [
        'last_purchase' => 'datetime',
    ];

    public static function recordPurchase($email, $amount)
    {
        return static::updateOrCreate(
            ['email' => $email],
            [
                'purchase_count' => static::where('email', $email)->increment('purchase_count'),
                'total_spent' => static::where('email', $email)->increment('total_spent', $amount),
                'last_purchase' => now(),
            ]
        );
    }

    public static function getTotalSpent($email)
    {
        return static::where('email', $email)->first()->total_spent ?? 0;
    }
}
