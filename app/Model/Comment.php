<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    /**
     * Statuses.
     */
    const STATUS_ACTIVE = 'ACTIVE'; //活跃的
    const STATUS_INACTIVE = 'INACTIVE'; //不活跃的

    /**
     * List of statuses.
     *
     * @var array
     */
    public static $statuses = [self::STATUS_ACTIVE, self::STATUS_INACTIVE];

    protected $fillable = ['parent_id', 'post_id', 'body', 'ip'];

    /**
     * 这个评论的所属用户
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function owner()
    {
        return $this->belongsTo(OauthUser::class, 'user_id', 'openid');
    }

    /**
     * 这个评论的子评论
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function replies()
    {
        return $this->hasMany(comment::class, 'parent_id');
    }

    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
