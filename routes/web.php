<?php

use Illuminate\Support\Facades\Route;
use Laravel\Sanctum\Http\Controllers\CsrfCookieController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\API\SecretController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});

//Auth::routes();

//Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('secrets', [SecretController::class,'index'])->middleware('auth:api');


Route::get('/{any}', function () {          // For Practice
    return view('layouts.app');
})->where('any', '.*');
//Route::get('/{any}', [HomeController::class, 'index'])->where('any', '.*');
//Route::get('/{any}', function ($any) {          // For Practice
//    return view('layouts.app');
//})->where('any', '.*');
