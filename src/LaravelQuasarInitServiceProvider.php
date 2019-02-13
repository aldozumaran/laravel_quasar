<?php

namespace Mz2p\LaravelQuasarInit;

use Illuminate\Support\ServiceProvider;

class LaravelQuasarInitServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        // Pubblica configurazione LaravelQuasar
       /* $this->publishes([
            __DIR__.'/config/quasar.php' => config_path('laravel_quasar.php'),
        ]);*/
        // Pubblica Framework Quasar
        $this->publishes([
            __DIR__.'/resources/views/quasar/admin1.0' => resource_path('modules/console'),
        ]);

    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('laravel_quasar', function($app) {
            return new LaravelQuasarInit();
        });
    }
}
