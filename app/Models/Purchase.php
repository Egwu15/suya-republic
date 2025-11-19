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
        'last_purchase'
    ];

    protected $casts = [
        'last_purchase' => 'datetime',
    ];

    public static function recordPurchase($email, $amount): Model|Purchase
    {
        $record = static::firstOrCreate(
            ['email' => $email],
            ['purchase_count' => 0, 'total_spent' => 0]
        );

        $record->increment('purchase_count');
        $record->increment('total_spent', $amount);
        $record->update(['last_purchase' => now()]);

        return $record;
    }

    public static function getTotalSpent($email)
    {
        return static::where('email', $email)->first()->total_spent ?? 0;
    }
}
