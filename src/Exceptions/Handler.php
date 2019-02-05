<?php

namespace Mz2p\LaravelQuasarInit\Exceptions;

use Exception;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        if ($exception instanceof TokenInvalidException){
            return response()->json(['error' => 'Token is Invalid'], 401);
        }
        elseif ($exception instanceof TokenExpiredException){
            return response()->json(['error' => 'Token is expired'], 401);
        }
        elseif ($exception instanceof JWTException){
            //dd(JWTException);
            return response()->json(['error' => 'Token error'], 401);
        }
        elseif ($exception instanceof QueryException){
            return response()->json(
                [
                    'error' => $exception->getMessage(),
                ], 500);
        }
        return parent::render($request, $exception);
    }
}
