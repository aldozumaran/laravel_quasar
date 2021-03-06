<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>

# Laravel & Quasar JWT Auth

### Backend
* Quasar 0.17 - branch 1.0
* Quasar 1.0 - branch master 

    composer require aldozumaran/laravel-quasar-init
    
    php artisan vendor:publish --provider="Mz2p\LaravelQuasarInit\LaravelQuasarInitServiceProvider"
    
    php artisan jwt:secret

Edit app/Exceptions/Handler.php
 
    <?php
    namespace App\Exceptions; 
    use Mz2p\LaravelQuasarInit\Exceptions\Handler as ExceptionHandler;

    class Handler extends ExceptionHandler 
    { 
    }

Add middleware in app/Http/Kernel.php

    'jwt' => \Mz2p\LaravelQuasarInit\Http\Middleware\JWT::class,

Change auth api driver

    'guards' => [
        'api' => [
            'driver' => 'jwt',
            'provider' => 'users',
        ],
    ],
    
Add in routes/api.php

    LaravelQuasar::routes();    
    
Edit User model:
    
    <?php
    
    namespace App;
    
    use Mz2p\LaravelQuasarInit\Models\User as JwtUser;
    
    class User extends JwtUser
    {
    }
    
And run server
    
    php artisan serve
    
        
### Frontend
    cd resources/modules/admin
    npm install
    quasar dev

### License

This package is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
