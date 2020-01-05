<?php

namespace App\Http\Controllers;

use App\Events\NewMessage;
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

   function store(Request $request) {

       $message = new Message($request->all());
       $message->save();
       event(New NewMessage($message));

   }


}
