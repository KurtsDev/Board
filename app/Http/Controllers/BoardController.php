<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateMessageRequest;
use App\Message;
use Illuminate\Http\Request;

class BoardController extends Controller
{
   function index() {
       return view('index');
   }

   function getMessage() {
       $message = Message::all();
       return $message;
   }

   function store(CreateMessageRequest $request) {

       $message = new Message($request->all());
       $message->save();
   }
}
