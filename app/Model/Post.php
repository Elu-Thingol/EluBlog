<?php

namespace App\Model;

use TCG\Voyager\Facades\Voyager;
use TCG\Voyager\Traits\Resizable;
use Illuminate\Support\Facades\Auth;
use TCG\Voyager\Traits\Translatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use Translatable,
        Resizable,
        SoftDeletes;

    /**
     * Statuses.
     */
    const STATUS_PUBLISHED = 'PUBLISHED'; //已发布
    const STATUS_DRAFT = 'DRAFT'; //草稿
    const STATUS_PENDING = 'PENDING'; //挂起

    // protected $translatable = ['title', 'excerpt', 'body', 'slug'];
    protected $translatable = ['title', 'excerpt', 'body'];

    /**
     * List of statuses.
     *
     * @var array
     */
    public static $statuses = [self::STATUS_PUBLISHED, self::STATUS_DRAFT, self::STATUS_PENDING];

    public function tags()
    {
        /**
         * 一篇文章关联多个标签
         * @return \Illuminate\Database\Eloquent\Relations\belongsToMany
         */
        return $this->belongsToMany(Tag::class, PostTag::class);
    }

    public function tagList()
    {
        /**
         * 获取标签集合
         * @return static
         */
        return $this->tags()
            ->select('name');
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
