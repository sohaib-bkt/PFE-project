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
        'featured', 
        'image', 
        'images', 
        'category_id', 
        'categorie_product',
        'specification',
        'user_id'];

    public function category()
    {
        return $this->belongsTo(Category::class,'category_id');
    }

   

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
