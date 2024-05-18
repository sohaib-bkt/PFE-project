<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\WishlistController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\UserController;
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
Route::get('images/products/{image}', [ShopController::class, 'getImage']);
Route::get('/product/count' ,[ShopController::class, 'productCount']);
Route::get('/product/getaccepted', [ShopController::class, 'getAccepted']);
Route::get('/product/getrejected', [ShopController::class, 'getRejected']);
Route::get('/product/getpending', [ShopController::class, 'getPending']);
Route::get('/product/deleteAnnonce/{id}', [ShopController::class, 'deleteAnnonce']);
Route::get('/product/getcategories', [ShopController::class, 'getCategories']);
Route::post('/product/report_abuse' , [ShopController::class, 'storReport']);

Route::put('/update/{id}', [UserController::class, 'update']);
Route::get('user/{id}', [UserController::class, 'getUser']);
Route::get('/user/{id}/products', [UserController::class, 'getUserProducts']);
Route::put('/update/{id}/changePassword', [UserController::class, 'changePassword']);
Route::post('/user/StoreProduct', [UserController::class, 'store']);



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
Route::get('/dashboard/rejectProduct/{id}', [AdminController::class, 'rejectProduct']);
Route::get('/dashboard/approveProduct/{id}', [AdminController::class, 'acceptProduct']);
Route::get('/dashboard/getPendingProducts', [AdminController::class, 'getPendingProducts']);
Route::get('/dashboard/getdatacharts', [AdminController::class, 'datacharts']);


Route::get('/abuse-reports', [AdminController::class, 'getReports']);
Route::put('/abuse-reports/{id}/resolve', [AdminController::class, 'updateStatus']);
Route::delete('/abuse-reports/clear-resolved', [AdminController::class, 'clearResolvedReports']);

Route::post('/contact/store', [ContactController::class, 'store']);
Route::get('/contact/get', [ContactController::class, 'get']);
Route::patch('/contact/read' , [ContactController::class, 'read']);
Route::delete('/contact/clear-read' , [ContactController::class, 'clearReadMessages']);
