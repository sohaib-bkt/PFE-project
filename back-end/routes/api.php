<?php

use App\Http\Controllers\AdminController;
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
Route::get('images/products/{image}', [ShopController::class, 'getImage']);
Route::get('/product/count' ,[ShopController::class, 'productCount']);
Route::get('/product/getaccepted', [ShopController::class, 'getAccepted']);
Route::get('/product/getrejected', [ShopController::class, 'getRejected']);
Route::get('/product/getpending', [ShopController::class, 'getPending']);
Route::get('/product/deleteAnnonce/{id}', [ShopController::class, 'deleteAnnonce']);
Route::get('user/{id}', [ShopController::class, 'getUser']);
Route::get('/user/{id}/products', [ShopController::class, 'getUserProducts']);

Route::put('/update/{id}/changePassword', [ShopController::class, 'changePassword']);



Route::post('cart/add', [WishlistController::class, 'addProductToWishlist']);
Route::post('/wishlist/add', [WishlistController::class, 'addProductToWishlist']);
Route::get('/wishlist', [WishlistController::class, 'getWishlistedProducts']);
Route::delete('/wishlist/remove', [WishlistController::class, 'removeProductFromWishlist']);
Route::delete('/wishlist/clear', [WishlistController::class, 'clearWishlist']);
Route::get('/wishlist/count', [WishlistController::class, 'countWishlist']);


Route::get('/dashboard/getUsers', [AdminController::class, 'getAllUsers']);
Route::post('/dashboard/addUser', [AdminController::class, 'addUser']);
Route::delete('/dashboard/deleteUser/{id}', [AdminController::class, 'deleteUsers']);

Route::get('/dashboard/getCategories', [AdminController::class, 'getAllCategories']);
Route::get('/dashboard/getCategory/{id}', [AdminController::class, 'getCategory']);
Route::put('/dashboard/updateCategory/{id}', [AdminController::class, 'updateCategories']);
Route::post('/dashboard/addCategory', [AdminController::class, 'storeCategories']);
Route::delete('/dashboard/deleteCategory/{id}', [AdminController::class, 'deleteCategories']);

Route::get('/dashboard/getProducts', [AdminController::class, 'getAllProducts']);
Route::get('/dashboard/getProductById/{id}', [AdminController::class, 'getProduct']);
Route::put('/dashboard/updateProduct/{id}', [AdminController::class, 'updateProduct']);
Route::post('/dashboard/addProduct', [AdminController::class, 'storeProducts']);
Route::delete('/dashboard/deleteProduct/{id}', [AdminController::class, 'deleteProduct']);
Route::delete('/dashboard/deleteRejectedProducts', [AdminController::class, 'deleteRejectedProducts']);