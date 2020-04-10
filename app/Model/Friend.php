<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;

class Friend extends Model
{
    use SoftDeletes;

    /**
     * Statuses.
     */
    const STATUS_APPROVED = 'APPROVED'; //已批准
    const STATUS_NOTPASSED = 'NOTPASSED'; //已驳斥
    const STATUS_PENDING = 'PENDING'; //正挂起

    /**
     * List of statuses.
     *
     * @var array
     */
    public static $statuses = [self::STATUS_APPROVED, self::STATUS_NOTPASSED, self::STATUS_PENDING];

    /**
     * Scope a query to only published scopes.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeApproved(Builder $query)
    {
        return $query->where('status', '=', static::STATUS_APPROVED);
    }
}
