<?php

use Illuminate\Http\Request;

Route::get('/getMessage', 'BoardController@getMessage');

Route::post('/store', 'BoardController@store');



Route::post('/newMessage', 'BoardController@newMessage');
