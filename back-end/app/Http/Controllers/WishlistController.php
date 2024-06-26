<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Gloudemans\Shoppingcart\Facades\Cart;

class WishlistController extends Controller
{
    public function addProductToWishlist(Request $request)
    {
        $product = Product::find($request->id);
    
        // Check if the product is already in the wishlist
        $wishlist = Cart::instance('wishlist')->content();
        $existingProduct = $wishlist->where('id', $product->id)->first();
    
        if ($existingProduct) {
            return response()->json(['status' => 409, 'message' => 'Error! Product is already in your wishlist.']);
        }
    
        Cart::instance('wishlist')->add($product->id, $product->name, 1, $product->regular_price)->associate('App\Models\Product');
        return response()->json(['status' => 200, 'message' => 'Success! Item successfully added to your wishlist.']);
    }
    

    public function getWishlistedProducts()
    {
        $items = Cart::instance("wishlist")->content();
        return response()->json(['items' => $items]);
    }
    public function countWishlist()
    {
        $count = Cart::instance("wishlist")->count();
        return response()->json(['count' => $count]);
    }
    

    public function removeProductFromWishlist(Request $request)
    {
        $rowId = $request->rowId;
        Cart::instance("wishlist")->remove($rowId);
        return response()->json(['message' => 'Item removed from wishlist.']);
    }

    public function clearWishlist()
    {
        Cart::instance("wishlist")->destroy();
        return response()->json(['message' => 'Wishlist cleared.']);
    }

}

