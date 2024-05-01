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
Route::get('/latest', [ShopController::class, 'getLatestProducts']);
Route::get('/info', [ShopController::class, 'shopInformatique']);
Route::get('detail/{slug}', [ShopController::class, 'detail']);
Route::put('/update/{id}', [ShopController::class, 'update']);
Route::post('/user/StoreProduct', [ShopController::class, 'store']);
Route::get('/product/count' ,[ShopController::class, 'productCount']);
Route::get('/product/getaccepted', [ShopController::class, 'getAccepted']);
Route::get('/product/getrejected', [ShopController::class, 'getRejected']);
Route::get('/product/getpending', [ShopController::class, 'getPending']);
Route::get('/product/deleteAnnonce/{id}', [ShopController::class, 'deleteAnnonce']);


Route::put('/update/{id}/changePassword', [ShopController::class, 'changePassword']);




Route::post('/wishlist/add', [WishlistController::class, 'addProductToWishlist']);
Route::get('/wishlist', [WishlistController::class, 'getWishlistedProducts']);
Route::delete('/wishlist/remove', [WishlistController::class, 'removeProductFromWishlist']);
Route::delete('/wishlist/clear', [WishlistController::class, 'clearWishlist']);
Route::get('/wishlist/count', [WishlistController::class, 'countWishlist']);

