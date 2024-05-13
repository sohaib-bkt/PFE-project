<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function update(Request $request, $id){
        $user = User::find($id);
        $user->update($request->all());
        return response()->json($user);
    }

    public function getUser($id){
        $user = User::find($id);
        return response()->json($user);
    }

    public function getUserProducts($id){
        $products = Product::where('user_id', $id)->where('featured', 'accepted')->get();
        $user = User::find($id);
        return response()->json(['products' => $products, 'user' => $user]);
    }
    public function changePassword(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $request->validate([
            'oldPassword' => 'required',
            'newPassword' => 'required|min:6|different:oldPassword',
        ]);

        if (!Hash::check($request->oldPassword, $user->password)) {
            return response()->json(['message' => 'Incorrect old password'], 400);
        }

        $user->update([
            'password' => Hash::make($request->newPassword),
        ]);

        return response()->json(['message' => 'Password changed successfully']);
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|numeric',
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
        $categorie_id = Category::where('name', $validatedData['category'])->value('id');

        $product = new Product();

        $product->user_id = $validatedData['user_id'];
        $product->featured = 'pending';
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

    public function contactUsStore(Request $request)
        {
            $validatedData = $request->validate([
                'nom' => 'required|string|max:255',
                'prenom' => 'required|string|max:255',
                'email' => 'required|email',
                'phone' => 'required|string|max:255',
                'commentaire' => 'required|string',
            ]);
        
            $contact = [
                'nom' => $request->nom,
                'prenom' => $request->prenom,
                'email' => $request->email,
                'phone' => $request->phone,
                'commentaire' => $request->commentaire,
            ];
        
            Mail::send('email-template', $contact, function($message) use ($contact) {
                $message->from($contact['email'])
                        ->to('bourhanelahmadi@gmail.com')
                        ->subject('Nouveau message de ' . $contact['nom'] . ' ' . $contact['prenom']);
            });
        
            return redirect()->route('app.contactus')->with('success', 'Contact details sent successfully');
        }
}
