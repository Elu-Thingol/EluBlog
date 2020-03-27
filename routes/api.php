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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::middleware('api')->group(function () {
//     Route::get('/user', function () {
//         //
//     });
// });
// Route::group(['prefix' => 'v1'], function () {
// });
Route::get('/v1', 'API\v1\BaseController@index')->name('api.v1.index');
Route::get('/v1/posts', 'API\v1\PostController@index')->name('posts.index');
Route::get('/v1/posts/timeline', 'API\v1\PostController@getTimeline')->name('posts.timeline');
Route::get('/v1/posts/details/{slug}', 'API\v1\PostController@getBySlug')->where('slug', '[0-9]+')->name('posts.get');
Route::get('/v1/posts/slug', 'API\v1\PostController@getSlug')->name('posts.slug');
Route::get('/v1/tags', 'API\v1\TagController@index')->name('tags.index');
Route::get('/v1/tags/{tag}', 'API\v1\TagController@getByTag')->name('tags.get');
Route::get('/v1/comments', function (Request $request) {
    return response()->apiRes(
        [
            "id" => $request->get('id'),
            "page" => $request->get('page'),
            "per_page" => $request->get('per_page'),
        ],
        "This is comments."
    );
})->name('comments');
Route::get('/v1/users', function (Request $request) {
    return response()->apiRes(
        [
            "id" => $request->get('id'),
            "page" => $request->get('page'),
            "per_page" => $request->get('per_page'),
            "featured" => $request->get('featured'),
            "sortby" => $request->get('sortby'),
            "order" => $request->get('order'),
        ],
        "This is users."
    );
})->name('users');
