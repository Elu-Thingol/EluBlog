<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', 'Auth\UserController@index');

Route::group(['prefix' => 'v1'], function () {
    Route::get('', 'API\v1\BaseController@index')->name('api.v1.index');
    Route::get('/posts', 'API\v1\PostController@index')->name('posts.index');
    Route::get('/posts/timeline', 'API\v1\PostController@timelineIndex')->name('posts.timeline.index');
    Route::get('/posts/{slug}', 'API\v1\PostController@show')->where('slug', '[0-9]+')->name('posts.show');
    Route::get('/posts/slug/{title}', 'API\v1\PostController@slugShow')->name('posts.slug.show');
    Route::get('/tags', 'API\v1\TagController@index')->name('tags.index');
    Route::get('/tags/{tag}', 'API\v1\TagController@show')->name('tags.show');
    Route::post('/feedback', 'API\v1\FeedbackController@store')->name('feedback.store');
    Route::get('/friends', 'API\v1\FriendController@index')->name('friends.index');
    Route::post('/friends', 'API\v1\FriendController@store')->name('friends.store');
    Route::get('/infos', 'API\v1\InfoController@index')->name('infos.index');
});
