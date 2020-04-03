<?php

Route::group([

    'middleware' => 'api',

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me'); 
    Route::post('avatar/{id}', 'AuthController@avatar'); 
    Route::get('tech/{id}', 'TechController@getTech');
    Route::post('tech', 'TechController@store');
    Route::post('comment', 'comments@postCom');
    Route::get('comment', 'comments@getCom');
    }
);
