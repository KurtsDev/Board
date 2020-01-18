<?php

use Illuminate\Http\Request;

Route::get('/initListMessage', 'BoardController@initListMessage');

Route::get('/initListCity', 'BoardController@initListCity');

Route::post('/store', 'BoardController@store');

