<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    /**
     * Statuses.
     */
    const STATUS_PUBLISHED = 'PUBLISHED'; //已发布
    const STATUS_DRAFT = 'DRAFT'; //草稿
    const STATUS_PENDING = 'PENDING'; //挂起

    /**T
     * List of statuses.
     *
     * @var array
     */
    public static $statuses = [self::STATUS_PUBLISHED, self::STATUS_DRAFT, self::STATUS_PENDING];


    /**
     * 一篇文章有一个分类
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function category()
    {
        return $this->hasOne(Category::class);
    }
/*     public function index()
    {
        // 获取文章按照创建时间倒叙并分页，每页显示6条
        $posts = Post::with('category:id,name')->latest()->paginate(6);
        return view('web.index', compact('posts'));
    } */

    /**
     * 一篇文章有多个评论
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    /**
     * 获取这篇文章的评论以parent_id来分组
     * @return static
     */
    public function getComments()
    {
        return $this->comments()->with('owner')->get()->groupBy('parent_id');
    }
}
