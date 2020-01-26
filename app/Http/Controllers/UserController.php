<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public static function getUser(Request $request)
    {
        $user_ip = $request->getClientIp();
        $user_agent = $request->userAgent();

        $user = User::query()
            ->where('user_ip', '=', $user_ip)
            ->where('user_agent', '=', $user_agent)->first();

        if ($user) {
            return $user;
        }

        $user = UserController::store($request);

        return $user;
    }


    public static function store(Request $request)
    {
        $user = new User();
        $user->user_ip = $request->getClientIp();
        $user->user_agent = $request->userAgent();
        $user->save();

        return $user;
    }
}
