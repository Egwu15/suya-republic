<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VarianceOptions extends Model
{
    use HasFactory;
    protected $fillable = [
        'variance_id',
        'name'
    ];

    public function variance()
    {
        return $this->belongsTo(Variance::class);
    } 
}
