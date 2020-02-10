<?php

namespace App\Http\Controllers;

use App\Events\ChatMessage;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function chatMessageSubmit(Request $request)
    {
        $chatMessage = $request->get('textChat');
        dd($chatMessage);

        ChatMessage::dispatch($chatMessage);

    }

}
