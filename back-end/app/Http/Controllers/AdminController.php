<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Report;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use GuzzleHttp\Psr7\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function getAllUsers()
    {
        $users = User::all(['id', 'name', 'email', 'utype']);
        return response()->json(['users' => $users]);
    }

    public function getAllProducts()
    {
        $products = Product::all();        
        return response()->json(['products' => $products]);
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
    public function getProduct($id){
        $product = Product::find($id);
        $user = User::find($product->user_id);
        return response()->json(['product' => $product , 'user' => $user]);
    }


    public function rejectProduct( $id){
        $product = Product::find($id);
        $product->update(['featured' => 'rejected']);
        return response()->json(['message' => 'Product rejected successfully']);
    }
    public function acceptProduct( $id){
        $product = Product::find($id);
        $product->update(['featured' => 'accepted']);
        return response()->json(['message' => 'Product accepted successfully']);
    }
    public function getPendingProducts(){
        $products = Product::where('featured', 'pending')->get();
        return response()->json(['products' => $products]);
    }


public function storeCategories(Request $request)
{

    $validatedData = $request->validate([
        'name' => 'required|string|max:255',
        'parent_category' => 'required',
    ]);

    $slug = Str::slug($validatedData['name']);
    $name = $validatedData['name'];
    $parent_category = $validatedData['parent_category'];
    

    $existingCategory = Category::where('slug', $slug)->first();
    if ($existingCategory) {
 
        $name .= Str::random(5);
   
        $slug = Str::slug($name);
    }

    $category = Category::create([
        'name' => $name,
        'slug' => $slug,
        'parent_category' => $parent_category
    ]);

    return response()->json(['message' => 'Category created successfully', 'category' => $category]);
}

    
    public function storeProducts(Request $request)
    {
       
    $validatedData = $request->validate([
        
        'category_name' => 'required|string',
        'category' => 'required|string',
        'name' => 'required|string',
        'description' => 'required|string',
        'regular_price' => 'required|numeric',
        'image' => 'required|image',
        'images.*' => 'required|image',
        'specification' => 'required|array',
        'specification.*.attribute' => 'required|string',
        'specification.*.value' => 'required|string',
    ]);
    $categorie_id = Category::where('slug', $validatedData['category'])->value('id');

    $product = new Product();

    $product->user_id = 2;
    $product->featured = 'accepted';
    $product->categorie_product = $validatedData['category_name'];
    $product->category_id = $categorie_id;
    $product->name = $validatedData['name'];
    $product->description = $validatedData['description'];
    $product->regular_price = $validatedData['regular_price'];
    $product->specification = json_encode($validatedData['specification']);
 

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

    $slug = Str::slug($validatedData['name']);
    $existingSlug = Product::where('slug', $slug)->exists();
    if ($existingSlug) {
        $slug .= '-' . uniqid();
    }

    $product->slug = $slug;

    $product->save();

    return response()->json(['message' => 'Product stored successfully'], 200);

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
    
    public function deleteProduct($id)
    {
        $product = Product::find($id);
        if ($product) {
            $product->delete();
            return response()->json(['message' => 'Product deleted successfully.']);
        } else {
            return response()->json(['message' => 'Product not found.']);
        }
    }

    public function deleteRejectedProducts(){

        $products = Product::where('featured', 'rejected')->get();
        foreach ($products as $product) {
            $product->delete();
        }
        return response()->json(['message' => 'Rejected products deleted successfully.']);

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
            'parent_category' => 'required',
        ]);


        $categorie->update([
            'name' => $validatedData['name'],
            'parent_category' => $validatedData['parent_category'],
        ]);

        return response()->json(['message' => 'Category updated successfully.', 'category' => $categorie]);
    }
    
    public function editProducts($id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['message' => 'Product not found.']);
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

    public function getReports()
    {
        $abuseReports = Report::all();

        foreach ($abuseReports as $abuseReport) {
            $abuseReport->reported = User::find($abuseReport->id_reported);
            $abuseReport->reporter = User::find($abuseReport->id_reporter);
        }

        return response()->json($abuseReports);
    }

    public function updateStatus( $id)
    {
        $abuseReport = Report::findOrFail($id);

        $abuseReport->status = true; 

        $abuseReport->save();

        return response()->json(['message' => 'Abuse report status updated successfully']);
    }

    public function clearResolvedReports()
    {
        Report::where('status', true)->delete();

        return response()->json(['message' => 'Resolved abuse reports cleared successfully']);
    }

    public function datacharts(){

        $data = User::select('id', 'created_at')->get()->groupBy(function ($data) {
            return Carbon::parse($data->created_at)->format('M');
        });

        $months = [];
        $monthCount = [];

        foreach ($data as $month => $values) {
            $months[] = $month; 
            $monthCount[] = count($values);
        }

        $user = count(User::all());
        $product = count(Product::all());
        $report = count(Report::all());
        $pending = count(Product::where('featured', 'pending')->get());

        if($report > 0){
            $totalReports = Report::count(); // Total number of reports
        
            $reportTrue = Report::where('status', 'true')->count(); 
            $reportFalse = Report::where('status', 'false')->count(); 
        
            $reportTruePercentage = ($reportTrue / $totalReports) * 100; 
            $reportFalsePercentage = ($reportFalse / $totalReports) * 100; 
        } else {
            $reportTrue = 0;
            $reportFalse = 0;
            $reportTruePercentage = 0; 
            $reportFalsePercentage = 0; 
        }
        
        $data = [
            'user' => $user,
            'product' => $product,
            'report' => $report,
            'pending' => $pending,
            'months' => $months,
            'monthCount' => $monthCount,
            'reportTrue' => $reportTrue,
            'reportFalse' => $reportFalse,
            'reportTruePercentage' => $reportTruePercentage,
            'reportFalsePercentage' => $reportFalsePercentage
        ];
        return response()->json($data);

    }
    

}

