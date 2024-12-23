<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use App\Models\Contact;
use App\Mail\ContactMail;

class ContactController extends Controller
{
    public function create(Request $request)
    {

        $validatedData = $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|max:1000',
            'subject' => 'max:300'
        ]);

        Contact::create($validatedData);
        defer(fn() =>  Mail::to('egwutedd@gmail.com')->send(new ContactMail($validatedData)));
    }
}
