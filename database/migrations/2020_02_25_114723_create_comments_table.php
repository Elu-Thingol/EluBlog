<?php

use App\Model\Comment;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCommentsTable extends Migration
{
    const STATUS_ACTIVE = 'ACTIVE'; //活跃的
    const STATUS_INACTIVE = 'INACTIVE'; //不活跃的

    public static $statuses = [self::STATUS_ACTIVE, self::STATUS_INACTIVE];

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id')->comment('用户ID');
            $table->integer('post_id')->comment('文章ID');
            $table->integer('parent_id')->nullable()->comment('父评论ID');
            $table->text('content')->comment('内容');
            $table->string('ip', 191)->comment('IP地址');
            $table->enum('status', self::$statuses)->default(self::STATUS_INACTIVE)->comment('状态');
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
        Schema::dropIfExists('comments');
    }
}
