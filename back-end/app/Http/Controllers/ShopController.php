<?php

namespace App\Http\Controllers;

use App\Models\Report;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

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

            $products = $products->where('featured', 'accepted')->paginate($size);


            $categories = Category::where('parent_category', 'VET')->orderBy('name', 'ASC')->get();

            return response()->json([
                'products' => $products,
                'page' => $page,
                'size' => $size,
                'order' => $order,
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

        $products = $products->where('featured', 'accepted')->paginate($size);



        $categories = Category::where('parent_category', 'INF')->orderBy('name', 'ASC')->get();

        return response()->json([
            'products' => $products,
            'page' => $page,
            'size' => $size,
            'order' => $order,
            'categories' => $categories,
            'q_categories' => $q_categories,
            'from' => $from,
            'to' => $to,
            'searchTerm' => $searchTerm
        ]);
    }
    public function updateProduct(Request $request)
{

    $validatedData = $request->validate([
        'user_id' => 'required|numeric',
        'category_name' => 'required|string',
        'category' => 'required|string',
        'name' => 'required|string',
        'description' => 'required|string',
        'regular_price' => 'required|numeric',
        'image' => 'nullable|image',
        'images.*' => 'nullable|image',
        'specification' => 'nullable|array',
        'specification.*.attribute' => 'nullable|string',
        'specification.*.value' => 'nullable|string',
    ]);

    $categorie_id = Category::where('name', $validatedData['category'])->value('id');

    $product = Product::findOrFail($request->input('id'));

    $product->user_id = $validatedData['user_id'];
    $product->categorie_product = $validatedData['category_name'];
    $product->category_id = $categorie_id;
    $product->name = $validatedData['name'];
    $product->description = $validatedData['description'];
    $product->regular_price = $validatedData['regular_price'];
    $product->specification = json_encode($validatedData['specification']);
    $product->featured = 'pending';

    if ($request->hasFile('image')) {
        $imagePath = $request->file('image')->store('images/products');
        $product->image = basename($imagePath);
    }

    if ($request->hasFile('images')) {
        $additionalImages = [];
        foreach ($request->file('images') as $image) {
            $imagePath = $image->store('images/products');
            $additionalImages[] = basename($imagePath);
        }
        $product->images = json_encode($additionalImages);
    }

    if ($product->name !== $validatedData['name']) {
        $slug = Str::slug($validatedData['name']);
        $existingSlug = Product::where('slug', $slug)->exists();
        if ($existingSlug) {
            $slug .= '-' . uniqid();
        }
        $product->slug = $slug;
    }

    // Save the updated product
    $product->save();

    // Return a success response
    return response()->json(['message' => 'Product updated successfully'], 200);
}

public function detail($slug){
        $product = Product::where('slug', $slug)->first();
        $category = Category::where('id', $product->category_id)->first();
        $product->category_name = $category->name;
        return response()->json($product);
    }


    public function getClothes(){
        $clothes = Product::where('categorie_product', 'VET')->where('featured', 'accepted')->take(6)->get();
        return response()->json($clothes);
    }
    public function getInfo(){
        $clothes = Product::where('categorie_product', 'INF')->where('featured', 'accepted')->take(6)->get();
        return response()->json($clothes);
    }
    public function getLatestProducts(){
        $products = Product::latest()->where('featured', 'accepted')->take(6)->get();
        return response()->json($products);
    }

    public function getCategories(){
        $INF = Category::where('parent_category', 'INF')->orderBy('name', 'ASC')->get();
        $VET = Category::where('parent_category', 'VET')->orderBy('name', 'ASC')->get();
        return response()->json(['INF' => $INF, 'VET' => $VET]);
    }
    public function getImage($image)
{
    $path = storage_path('app/images/products/' . $image);

    if (!file_exists($path)) {
        abort(404);
    }

    $file = file_get_contents($path);
    $type = mime_content_type($path);

    return response($file, 200)->header('Content-Type', $type);
}

    public function productCount(Request $request){
        $userId = $request->query('userId');
        $pending = Product::where('featured', 'pending')->where('user_id', $userId)->count();
        $approved = Product::where('featured', 'accepted')->where('user_id', $userId)->count();
        $rejected = Product::where('featured', 'rejected')->where('user_id', $userId)->count();

        return response()->json(['pending' => $pending, 'approved' => $approved, 'rejected' => $rejected]);
    }

    public function getAccepted(Request $request){
        $userId = $request->query('userId');
        $products = Product::where('featured', 'accepted')->where('user_id', $userId)->get();
        return response()->json($products);
    }

    public function getRejected(Request $request){
        $userId = $request->query('userId');
        $products = Product::where('featured', 'rejected')->where('user_id', $userId)->get();
        return response()->json($products);
    }

    public function getPending(Request $request){
        $userId = $request->query('userId');
        $products = Product::where('featured', 'pending')->where('user_id', $userId)->get();
        return response()->json($products);
    }

    public function deleteAnnonce($id){
        $product = Product::find($id);
        $product->delete();
        return response()->json($product);
    }


    public function storReport(Request $request){

        $id_reporter = $request->input('id_reporter');
        $id_reported = $request->input('id_reported');
        $id_product = $request->input('productId');
        $message = $request->input('message');

        $report = Report::create([
            'id_reporter' => $id_reporter,
            'id_reported' => $id_reported,
            'id_product' => $id_product,
            'message' => $message,
            'status' => false
        ]);

        $report->save();

        return response()->json(['message' => 'Report has been submitted successfully']);
    }

}
