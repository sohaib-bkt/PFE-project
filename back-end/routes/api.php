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
Route::get('/clothes', [ShopController::class, 'getClothes']);
Route::get('/inf', [ShopController::class, 'getInfo']);
Route::get('/info', [ShopController::class, 'shopInformatique']);
Route::get('detail/{id}', [ShopController::class, 'detail']);
Route::put('/update/{id}', [ShopController::class, 'update']);
Route::put('/update/{id}/changePassword', [ShopController::class, 'changePassword']);




Route::post('/wishlist/add', [WishlistController::class, 'addProductToWishlist']);
Route::get('/wishlist', [WishlistController::class, 'getWishlistedProducts']);
Route::delete('/wishlist/remove', [WishlistController::class, 'removeProductFromWishlist']);
Route::delete('/wishlist/clear', [WishlistController::class, 'clearWishlist']);

