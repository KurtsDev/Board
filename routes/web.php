<?php

Route::get('/{any}', 'BoardController@index')->where('any', '.*');


