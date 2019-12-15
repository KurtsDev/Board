<?php

use Illuminate\Http\Request;

Route::get('/getMessage', 'BoardController@getMessage');

Route::post('/store', 'BoardController@store');
