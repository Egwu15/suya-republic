<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('product_image');
            $table->text('description');
            $table->decimal('price', 10, 2);
            $table->enum('status', ['in_stock', 'sold_out', 'back_order'])->default('in_stock');
            $table->foreignId('category_id')->constrained('categories')->onDelete('cascade');
            $table->foreignId('variance_id')->nullable()->constrained('variances')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
