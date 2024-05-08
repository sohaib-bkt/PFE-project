<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Product;
use App\Models\Category;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AdminController extends Controller
{
    public function getAllUsers()
    {
        $users = User::all(['id', 'name', 'email', 'utype']);
        return response()->json(['users' => $users]);
    }

    public function getAllProducts(Request $request)
    {
        $page = $request->query("page", 1);
        $size = $request->query("size", 12);
        $order = $request->query("order", -1);

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

        $categories = Category::orderBy("name", "ASC")->get();
        $q_categories = $request->query("categories", "");
        $prange = $request->query("prange", "0,500");
        $from = explode(",", $prange)[0];
        $to = explode(",", $prange)[1];

        $products = Product::where(function ($query) use ($q_categories) {
            $query->whereIn('category_id', explode(',', $q_categories))->orWhereRaw("'" . $q_categories . "'=''");
        })
            ->whereBetween('regular_price', array($from, $to))
            ->orderBy('created_at', 'DESC')->orderBy($o_column, $o_order)->paginate($size);

        return response()->json([
            'products' => $products,
            'page' => $page,
            'size' => $size,
            'order' => $order,
            'categories' => $categories,
            'q_categories' => $q_categories,
            'from' => $from,
            'to' => $to
        ]);
    }

    public function getAllCategories()
    {
        $categories = Category::all();
        return response()->json(['categories' => $categories]);
    }

    public function addUser(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => 'required|min:8',
            'phone' => 'required|string',
            'address' => 'nullable|string',
            'utype' => 'nullable|string|in:USR,admin',
            'city' => 'nullable|string',
            'country' => 'nullable|string',
        ]);

        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
            'phone' => $validatedData['phone'],
            'address' => $validatedData['address'],
            'utype' => $validatedData['utype'] ?? 'USR',
            'city' => $validatedData['city'],
            'remember_token' => Str::random(10),
            'country' => $validatedData['country'],

        ]);

        return response()->json(['message' => 'User created successfully', 'user' => $user]);
    }



public function storeCategories(Request $request)
{

    $validatedData = $request->validate([
        'name' => 'required|string|max:255',
    ]);

    $slug = Str::slug($validatedData['name']);
    $name = $validatedData['name'];

    $existingCategory = Category::where('slug', $slug)->first();
    if ($existingCategory) {
 
        $name .= Str::random(5);
   
        $slug = Str::slug($name);
    }

    $category = Category::create([
        'name' => $name,
        'slug' => $slug
    ]);

    return response()->json(['message' => 'Category created successfully', 'category' => $category]);
}

    
    public function storeProducts(Request $request)
    {
        // Validate incoming data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:products,slug',
            'short_description' => 'nullable|string',
            'description' => 'nullable|string',
            'regular_price' => 'required|numeric',
            'stock_status' => 'required|string',
            'featured' => 'nullable|boolean',
            'category_id' => 'required|exists:categories,id',
            'categorie_product' => 'nullable|string',
            'user_id' => 'required|exists:users,id',
            'split_input' => 'required|array',
            'split_input.*.attribute' => 'required|string|max:255',
            'split_input.*.value' => 'required|string|max:255'
        ]);
    
        $validatedData['user_id'] = Auth::id();
        $product = Product::create($validatedData);
    
        // Process images (similar to the existing code)
        // ...
    
        // Process specifications (similar to the existing code)
        // ...
    
        return response()->json(['message' => 'Product created successfully.', 'product' => $product], Response::HTTP_CREATED);
    }
    
    public function deleteUsers($id)
    {
        $user = User::find($id);
        if ($user) {
            $user->delete();
            return response()->json(['message' => 'User deleted successfully.']);
        } else {
            return response()->json(['message' => 'User not found.']);
        }
    }
    
    public function deleteCategories($id)
    {
        $category = Category::find($id);
        if ($category) {
            $category->delete();
            return response()->json(['message' => 'Category deleted successfully.']);
        } else {
            return response()->json(['message' => 'Category not found.']);
        }
    }
    
    public function deleteProducts($id)
    {
        $product = Product::find($id);
        if ($product) {
            $product->delete();
            return response()->json(['message' => 'Product deleted successfully.']);
        } else {
            return response()->json(['message' => 'Product not found.'], Response::HTTP_NOT_FOUND);
        }
    }
    
    public function updateUsers(Request $request, $id)
    {
        $user = User::find($id);
    
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->phone = $request->input('phone');
        $user->address = $request->input('address');
        $user->city = $request->input('city');
        $user->country = $request->input('country');
        $user->state = $request->input('state');
        $user->zip = $request->input('zip');
        $user->utype = $request->input('utype');
    
        if($request->filled('password')) {
            $password = $request->input('password');
            $passwordConfirmation = $request->input('password_confirmation');
    
            if($password === $passwordConfirmation) {
                $user->password = bcrypt($password);
            } else {
                return back()->withErrors(['password' => 'Password and confirmation do not match.']);
            }
        }
    
        $user->save();
    
        return response()->json(['message' => 'User updated successfully.', 'user' => $user]);
    }
    
    public function updateCategories(Request $request, $id)
    {
        $categorie = Category::findOrFail($id); 

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
        ]);


        $categorie->update([
            'name' => $validatedData['name'],
        ]);

        return response()->json(['message' => 'Category updated successfully.', 'category' => $categorie]);
    }
    
    public function editProducts($id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['message' => 'Product not found.'], Response::HTTP_NOT_FOUND);
        }
    
        // Return product data for editing
        return response()->json(['product' => $product]);
    }
    
    public function verifyProduct(Request $request, Product $product)
    {
        $validated = $request->validate([
            'featured' => 'required|in:0,1',
        ]);
    
        $product->featured = $validated['featured'];
        $product->save();
    
        return response()->json(['message' => 'Product verification updated successfully.', 'product' => $product]);
    }
    public function getCategory($id){

        $category = Category::find($id);
        return response()->json(['category' => $category]);
    }
    

}

