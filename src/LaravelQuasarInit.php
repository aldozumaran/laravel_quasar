<?php

namespace Mz2p\LaravelQuasarInit;

use Illuminate\Support\Facades\Route;

class LaravelQuasarInit
{
    public function routes()
    {
        Route::group([
            'prefix' => 'auth',
            'middleware' => ['api'],
            'namespace' => '\Mz2p\LaravelQuasarInit\Http\Controllers'
        ], function () {
            Route::post('login', 'AuthController@login');
            Route::post('logout', 'AuthController@logout');
            Route::get('refresh', 'AuthController@refresh');
            Route::get('user', 'AuthController@me');
            Route::post('payload', 'AuthController@payload');
        });
    }
}
