<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\LocationController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::prefix('v1')
            ->scopeBindings()
            ->group(function() {
                Route::resource('users.locations', LocationController::class);
                Route::get('/users/{user}/current', [LocationController::class, 'current']);
                Route::get('/users/{id}', [UserController::class, 'show']);
                
            });