<?php

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

Route::get('/', 'Web\AppController@getApp');

Route::group(['prefix' => 'fuck'], function () {
    Voyager::routes();
});

/* \Auth::loginUsingId(1); //用户id为1的登录

//显示文章和相应的评论
Route::get('/post/show/{post_id}', function (\App\Post $post) {
    $post->load('comments.owner');
    $comments = $post->getComments();
    $comments['root'] = $comments[$post['id']];
    unset($comments[$post['id']]);
    return view('posts.show', compact('post', 'comments'));
});

//用户进行评论
Route::post('post/{post_id}/comments', function (\App\Post $post) {
    $post->comments()->create([
        'post_id' => $post['id'],
        'body' => request('body'),
        'user_id' => \Auth::id(),
        'parent_id' => request('parent_id', null),
    ]);
    return back();
}); */
