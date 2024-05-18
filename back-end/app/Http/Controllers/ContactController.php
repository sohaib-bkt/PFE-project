<?php

namespace App\Http\Controllers;

use App\Models\contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:15',
            'commentaire' => 'required|string'
        ]);

        // Store the contact form data in the database
        $contact = new contact();
        $contact->nom = $validatedData['nom'];
        $contact->prenom = $validatedData['prenom'];
        $contact->email = $validatedData['email'];
        $contact->phone = $validatedData['phone'];
        $contact->commentaire = $validatedData['commentaire'];
        $contact->save();

        return response()->json(['message' => 'Contact form submitted successfully!'], 200);
    }

    public function get()
    {
        $contacts = Contact::all();
        return response()->json($contacts);
    }
    public function read(Request $request)
    {
        $request->validate([
            'id' => 'required|integer',
        ]);
    
        $contact = Contact::find($request->id);
    
        if (!$contact) {
            return response()->json(['message' => 'Contact not found'], 404);
        }
    
        $contact->read = 1;
        $contact->save();
    
        return response()->json(['message' => 'Contact marked as read', 'contact' => $contact]);
    }
    public function clearReadMessages()
{
    try {
        Contact::where('read', 1)->delete();
        return response()->json(['message' => 'Read messages cleared']);
    } catch (\Exception $e) {
        return response()->json(['message' => 'Error clearing read messages'], 500);
    }
}

    
}
