<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOAuthUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('o_auth_users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('type', 30);
            $table->string('name', 30);
            $table->string('avatar', 255);
            $table->string('openid', 40)->index();
            $table->string('access_token', 255);
            $table->string('last_login_ip', 16);
            $table->integer('login_times')->default(0);
            $table->string('email', 255);
            $table->tinyInteger('is_admin');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('o_auth_users');
    }
}
