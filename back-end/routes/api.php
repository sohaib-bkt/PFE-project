<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\WishlistController;
use App\Http\Controllers\ShopController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/products', [ShopController::class, 'index']);
Route::get('/products/{slug}', [ShopController::class, 'productDetails']);
Route::get('/info', [ShopController::class, 'shopInformatique']);



Route::post('/wishlist/add', [WishlistController::class, 'addProductToWishlist']);
Route::get('/wishlist', [WishlistController::class, 'getWishlistedProducts']);
Route::delete('/wishlist/remove', [WishlistController::class, 'removeProductFromWishlist']);
Route::delete('/wishlist/clear', [WishlistController::class, 'clearWishlist']);

