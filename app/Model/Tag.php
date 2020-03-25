<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tag extends Model
{
    use SoftDeletes;

    public function posts()
    {
        /**
         * 一个标签关联多篇文章
         * @return \Illuminate\Database\Eloquent\Relations\belongsToMany
         */
        return $this->belongsToMany(Post::class, PostTag::class)->published();
    }
}
