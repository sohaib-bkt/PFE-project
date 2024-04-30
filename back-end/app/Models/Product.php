<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 
        'slug',        
        'description', 
        'regular_price', 
        'sale_price',      
        'featured', 
        'image', 
        'images', 
        'category_id', 
        'brand_id', 
        'categorie_product',
        'user_id'];

    public function category()
    {
        return $this->belongsTo(Category::class,'category_id');
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class,'brand_id');
    }

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
