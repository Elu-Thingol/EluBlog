<?php

use App\Model\Friend;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFriendsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('friends', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('label')->comment('前端展示标签');
            $table->string('nickname')->comment('昵称');
            $table->string('email')->comment('联系邮箱');
            $table->string('bloglink')->comment('博客链接');
            $table->text('notes')->comment('备注');
            $table->enum('status', Friend::$statuses)->default(Friend::STATUS_PENDING)->comment('审核状态');
            $table->softDeletes()->comment("软删除");
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
        Schema::dropIfExists('friends');
    }
}
