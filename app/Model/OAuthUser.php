<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class OAuthUser extends Model
{
    protected $hidden = ['created_at', 'updated_at'];
    protected $table = 'o_auth_users';
    protected $fillable = ['type', 'avatar', 'name', 'openid', 'access_token', 'last_login_ip', 'login_times', 'email', 'is_admin'];
}
