<?php

namespace App\Http\Controllers;

use App\City;
use App\Events\NewMessage;
use App\Http\Requests\CreateMessageRequest;
use App\Message;
use Illuminate\Http\Request;

class BoardMessageController extends Controller
{
    public function index(Request $request)
    {
        $cityId = $request->get('cityId');
        $city = City::find($cityId);

        return $city->messages;

    }

    public function store(CreateMessageRequest $request)
    {
        $message = new Message($request->all());

        $user = UserController::getUser($request);

        $message->user_id = $user->id;

        $nextMessageTime = $this->messageNextDate($request);

        if ($nextMessageTime) {

            $rules['created_at_valid'] = 'date|after:' . $nextMessageTime;
            $this->validate($request, $rules);
        }

        $message->save();

        NewMessage::dispatch($message);
    }


    public function messageNextDate(Request $request)
    {

        $user = UserController::getUser($request);

        $lastUserMessage = Message::query()->where('user_id', '=', $user->id)->latest()->first();

        if ($lastUserMessage) {
            return $lastUserMessage->created_at->addMinutes(1);
        } else {

            return '1990.01.01 00:00';
        }

    }


}
