<?php

namespace App\Http\Controllers;

use Cart;
use App\Models\User;
use App\Models\Brand;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;

class ShopController extends Controller
{
        public function index(Request $request)
        {
            $page = $request->query("page") ?? 1;
            $size = $request->query("size") ?? 12;
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
        
            $products = Product::where('categorie_product', 'VET')
                ->orderBy('created_at', 'DESC')
                ->orderBy($o_column, $o_order);
        
            $prange = $request->query("prange");
            if (!$prange || !strpos($prange, ',')) {
                $from = 0;
                $to = 500;
            } else {
                list($from, $to) = explode(",", $prange);
            }
        
            $products = $products->whereBetween('regular_price', array($from, $to));
        
            $q_brands = $request->query("brands");
            if (!$q_brands || $q_brands === "-1") {
                $q_brands = "-1";
            }
        
            if ($q_brands !== "-1") {
                $products = $products->where('brand_id', $q_brands);
            }
        
            $q_categories = $request->query("categories");
            if (!$q_categories || $q_categories === "-1") {
                $q_categories = "-1";
            }
        
            if ($q_categories !== "-1") {
                $products = $products->where('category_id', $q_categories);
            }
        
            $products = $products->paginate($size);
        
            $brandIds = Product::where('categorie_product', 'VET')->distinct()->pluck('brand_id');
            $brands = Brand::whereIn('id', $brandIds)->orderBy('name', 'ASC')->get();
        
            $gategorieIds = Product::where('categorie_product', 'VET')->distinct()->pluck('category_id');
            $categories = Category::whereIn('id', $gategorieIds)->orderBy('name', 'ASC')->get();
        
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
                'to' => $to
            ]);
        }
        
        
        
        
        

    public function shopInformatique(Request $request)
    {       
        $page = $request->query("page");
        $size = $request->query("size");
        if(!$page)
                $page = 1;
        if(!$size)
                $size = 12;
        $order = $request->query("order");
        if(!$order)
        $order = -1;
        $o_column = "";
        $o_order = "";
        switch($order)
        {
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
        $brandIds = Product::where('categorie_product', 'INF')->distinct()->pluck('brand_id');
        $brands = Brand::whereIn('id', $brandIds)->orderBy('name','ASC')->get();    
        $q_brands = $request->query("brands");
        
        $gategorieIds = Product::where('categorie_product', 'VET')->distinct()->pluck('category_id');
        $categories = Category::whereIn('id', $gategorieIds)->orderBy('name','ASC')->get();
        $q_categories = $request->query("categories");  
        $prange = $request->query("prange");
        if(!$prange)
            $prange = "0,500";
        $from  = explode(",",$prange)[0];
        $to  = explode(",",$prange)[1];
        $products = Product::where('categorie_product', 'INF')->where(function($query) use($q_brands){
                                $query->whereIn('brand_id',explode(',',$q_brands))->orWhereRaw("'".$q_brands."'=''");
                            })
                            ->where(function($query) use($q_categories){
                                $query->whereIn('category_id',explode(',',$q_categories))->orWhereRaw("'".$q_categories."'=''");
                            })
                            ->whereBetween('regular_price',array($from,$to))
                    ->orderBy('created_at','DESC')->orderBy($o_column,$o_order)->paginate($size);

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
                        'to' => $to
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

    // public function getCartAndWishlistCount()
    // {
    //     $cartCount = Cart::instance("cart")->Content()->count();
    //     $wishlistcount = Cart::instance("wishlist")->Content()->count();
    //     return response()->json(['status'=>200,'cartCount'=>$cartCount,'wishlistCount'=>$wishlistcount]);
    // }

}