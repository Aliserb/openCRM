<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/register', function () {
    return 'Роут регистрации';
});

Route::get('/auth', function () {
    return 'Роут авторизации';
});