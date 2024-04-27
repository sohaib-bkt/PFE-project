<?php

namespace App\Http\Controllers;

use Cart;
use App\Models\User;
use App\Models\Brand;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ShopController extends Controller
{
        public function index(Request $request)
        {
            $page = $request->query("page") ?? 1;
            $size = $request->query("size") ?? 8;
            $order = $request->query("order") ?? -1;
            $o_column = "";
            $o_order = "";
            switch ($order) {
                case 1:
                    $o_column = "created_at";
                    $o_order = "DESC";
                    break;
                case 2:
                    $o_column = "created_at";
                    $o_order = "ASC";
                    break;
                case 3:
                    $o_column = "regular_price";
                    $o_order = "ASC";
                    break;
                case 4:
                    $o_column = "regular_price";
                    $o_order = "DESC";
                    break;
                default:
                    $o_column = "id";
                    $o_order = "DESC";
            }
        
            $prange = $request->query("prange");
            if (!$prange || !strpos($prange, ',')) {
                $from = 0;
                $to = 500;
            } else {
                list($from, $to) = explode(",", $prange);
            }
        
            $products = Product::where('categorie_product', 'VET')
                ->whereBetween('regular_price', array($from, $to));
        
            $q_brands = $request->query("brands");
            if ($q_brands && $q_brands !== "-1") {
                $products->where('brand_id', $q_brands);
            }
        
            $q_categories = $request->query("categories");
            if ($q_categories && $q_categories !== "-1") {
                $products->where('category_id', $q_categories);
            }
        
            $searchTerm = $request->query("search");
            if ($searchTerm) {
                $products->where('name', 'LIKE', "%{$searchTerm}%");
            }
        
            // Apply sorting
            $products->orderBy($o_column, $o_order);
        
            $products = $products->paginate($size);
        
            $brandIds = Product::where('categorie_product', 'VET')->distinct()->pluck('brand_id');
            $brands = Brand::whereIn('id', $brandIds)->orderBy('name', 'ASC')->get();
        
            $categoryIds = Product::where('categorie_product', 'VET')->distinct()->pluck('category_id');
            $categories = Category::whereIn('id', $categoryIds)->orderBy('name', 'ASC')->get();
        
            return response()->json([
                'products' => $products,
                'page' => $page,
                'size' => $size,
                'order' => $order,
                'brands' => $brands,
                'q_brands' => $q_brands,
                'categories' => $categories,
                'q_categories' => $q_categories,
                'from' => $from,
                'to' => $to,
                'searchTerm' => $searchTerm
            ]);
        }
        
        
        
        
        

    public function shopInformatique(Request $request)
    {
        $page = $request->query("page") ?? 1;
        $size = $request->query("size") ?? 8;
        $order = $request->query("order") ?? -1;
        $o_column = "";
        $o_order = "";
        switch ($order) {
            case 1:
                $o_column = "created_at";
                $o_order = "DESC";
                break;
            case 2:
                $o_column = "created_at";
                $o_order = "ASC";
                break;
            case 3:
                $o_column = "regular_price";
                $o_order = "ASC";
                break;
            case 4:
                $o_column = "regular_price";
                $o_order = "DESC";
                break;
            default:
                $o_column = "id";
                $o_order = "DESC";
        }
    
        $prange = $request->query("prange");
        if (!$prange || !strpos($prange, ',')) {
            $from = 0;
            $to = 500;
        } else {
            list($from, $to) = explode(",", $prange);
        }
    
        $products = Product::where('categorie_product', 'INF')
            ->whereBetween('regular_price', array($from, $to));
    
        $q_brands = $request->query("brands");
        if ($q_brands && $q_brands !== "-1") {
            $products->where('brand_id', $q_brands);
        }
    
        $q_categories = $request->query("categories");
        if ($q_categories && $q_categories !== "-1") {
            $products->where('category_id', $q_categories);
        }
    
        $searchTerm = $request->query("search");
        if ($searchTerm) {
            $products->where('name', 'LIKE', "%{$searchTerm}%");
        }
    
        // Apply sorting
        $products->orderBy($o_column, $o_order);
    
        $products = $products->paginate($size);
    
        $brandIds = Product::where('categorie_product', 'INF')->distinct()->pluck('brand_id');
        $brands = Brand::whereIn('id', $brandIds)->orderBy('name', 'ASC')->get();
    
        $categoryIds = Product::where('categorie_product', 'INF')->distinct()->pluck('category_id');
        $categories = Category::whereIn('id', $categoryIds)->orderBy('name', 'ASC')->get();
    
        return response()->json([
            'products' => $products,
            'page' => $page,
            'size' => $size,
            'order' => $order,
            'brands' => $brands,
            'q_brands' => $q_brands,
            'categories' => $categories,
            'q_categories' => $q_categories,
            'from' => $from,
            'to' => $to,
            'searchTerm' => $searchTerm
        ]);
    }
    public function productDetails($slug)
{
    $product = Product::where('slug', $slug)->first();
    $rproducts = Product::where('slug', "!=", $slug)->inRandomOrder()->take(8)->get();


    $userId = $product->user_id;
    $user = User::find($userId);
    $phoneNumber = $user->phone;

    return response()->json([
        'product' => $product,
        'rproducts' => $rproducts,
        'phoneNumber' => $phoneNumber
    ]);
}
public function detail($id){
    $product = Product::find($id);
    return response()->json($product);
}
public function update(Request $request, $id){
    $user = User::find($id);
    $user->update($request->all());
    return response()->json($user);
}
public function changePassword(Request $request, $id)
    {
        $user = User::findOrFail($id);

        // Validate the request
        $request->validate([
            'oldPassword' => 'required',
            'newPassword' => 'required|min:6|different:oldPassword',
        ]);

        // Verify the old password
        if (!Hash::check($request->oldPassword, $user->password)) {
            return response()->json(['message' => 'Incorrect old password'], 400);
        }

        // Update the user's password
        $user->update([
            'password' => Hash::make($request->newPassword),
        ]);

        return response()->json(['message' => 'Password changed successfully']);
    }

    public function getClothes(){
        $clothes = Product::where('categorie_product', 'VET')->take(6)->get();
        return response()->json($clothes);
    }
    public function getInfo(){
        $clothes = Product::where('categorie_product', 'INF')->take(6)->get();
        return response()->json($clothes);
    }
    public function getLatestProducts(){
        $products = Product::latest()->take(6)->get();
        return response()->json($products);
    }
    // public function getCartAndWishlistCount()
    // {
    //     $cartCount = Cart::instance("cart")->Content()->count();
    //     $wishlistcount = Cart::instance("wishlist")->Content()->count();
    //     return response()->json(['status'=>200,'cartCount'=>$cartCount,'wishlistCount'=>$wishlistcount]);
    // }

}