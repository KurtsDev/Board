<?php

use Illuminate\Http\Request;

Route::get('/initListMessage', 'BoardMessageController@index');

Route::get('/initListCity', 'CityController@index');





Route::get('/messageNextDate', 'BoardMessageController@messageNextDate');

Route::post('/store', 'BoardMessageController@store');




Route::post('/chatMessageSubmit', 'ChatController@chatMessageSubmit');

