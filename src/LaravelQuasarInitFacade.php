<?php

namespace Mz2p\LaravelQuasarInit;

use \Illuminate\Support\Facades\Facade;

class LaravelQuasarInitFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'laravel_quasar';
    }
}
