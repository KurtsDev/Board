<?php

namespace App\Http\Controllers;

use App\City;
use App\Events\NewMessage;
use App\Message;
use Illuminate\Http\Request;

class BoardController extends Controller
{
   function index() {
       return view('index');
   }

   function initListMessage(Request $request) {
       $cityId = $request->get('cityId');
       $city = City::find($cityId);
       $message = $city->messages;
       return $message;
   }

   function initListCity() {
       $city = City::all();
       return $city;
   }

   function store(Request $request) {
       $message = new Message($request->all());
       $message->save();
       NewMessage::dispatch($message);

   }


}
