<?php
Route::group([
    'prefix' => 'api/auth',
    'middleware' => ['api'],
    'namespace' => config('laravel_quasar.namespace')
], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::get('refresh', 'AuthController@refresh');
    Route::get('user', 'AuthController@me');
    Route::post('payload', 'AuthController@payload');
});
