<?php

namespace App\Model;

use TCG\Voyager\Facades\Voyager;
use TCG\Voyager\Traits\Resizable;
use Illuminate\Support\Facades\Auth;
use TCG\Voyager\Traits\Translatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Post extends Model
{
    use Translatable,
        Resizable;
        
    /**
     * Statuses.
     */
    const STATUS_PUBLISHED = 'PUBLISHED'; //已发布
    const STATUS_DRAFT = 'DRAFT'; //草稿
    const STATUS_PENDING = 'PENDING'; //挂起

    protected $translatable = ['title', 'excerpt', 'body', 'slug'];

    /**T
     * List of statuses.
     *
     * @var array
     */
    public static $statuses = [self::STATUS_PUBLISHED, self::STATUS_DRAFT, self::STATUS_PENDING];


    /**
     * 一篇文章有一个分类
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
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
    
    public function save(array $options = [])
    {
        // If no author has been assigned, assign the current user's id as the author of the post
        if (!$this->author_id && Auth::user()) {
            $this->author_id = Auth::user()->getKey();
        }

        parent::save();
    }

    public function authorId()
    {
        return $this->belongsTo(Voyager::modelClass('User'), 'author_id', 'id');
    }

    /**
     * Scope a query to only published scopes.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePublished(Builder $query)
    {
        return $query->where('status', '=', static::STATUS_PUBLISHED);
    }

}
