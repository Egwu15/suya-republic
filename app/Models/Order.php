<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{

    use HasFactory;

    protected $fillable = [
        'external_order_id',
        'user_id',
        'is_guest',
        'email',
        'name',
        'phone_number',
        'status',
        'total',
        'payment_status',
        'note',
    ];

    public function orderItem(): Order|HasMany
    {
        return $this->hasMany(OrderItem::class);
    }
}
