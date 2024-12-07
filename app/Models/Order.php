<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{

    use HasFactory;

    protected $fillable = [
        'external_order_id',
        'user_id',
        'is_guest',
        'email',
        'name',
        'status',
        'total',
        'payment_status',
        'note',
    ];

    public function orderItem()
    {
        return $this->hasMany(OrderItem::class);
    }
}
