<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReceiptMail extends Model
{
    use HasFactory;

    protected $fillable = [
        'payment_intent_id',
        'email',
        'status',
    ];
}
