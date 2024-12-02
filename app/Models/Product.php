<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\VarianceOptions;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'price',
        'status',
        'category_id',
        'variance_id',
        'product_image',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    
    public function variance()
    {
        return $this->belongsTo(Variance::class);
    }

    public function varianceOptions()
{
    return $this->hasManyThrough(VarianceOptions::class, Variance::class);
}
}
