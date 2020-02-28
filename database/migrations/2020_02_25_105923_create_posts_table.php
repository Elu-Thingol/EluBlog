<?php

use App\Model\Post;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('author_id')->default(0)->comment('作者ID');
            $table->integer('category_id')->default(0)->comment('分类ID');
            $table->string('title')->default('')->comment('文章标题');
            $table->string('image')->nullable()->comment('文章封面');
            $table->text('excerpt')->default('')->comment('文章摘要');
            $table->text('body')->comment('文章正文');
            $table->string('slug')->unique()->comment('文章标识符(路径)');
            $table->enum('status', Post::$statuses)->default(Post::STATUS_DRAFT)->comment('文章状态');
            $table->boolean('top')->default(false)->comment('置顶标志');
            $table->integer('view')->default(0)->comment('文章阅读数');
            $table->integer('word')->default(0)->comment('文章字数');
            $table->integer('dor')->default(0)->comment('文章阅读时长 (Duration of reading)');
            $table->timestamps();
            $table->timestamp('published_date')->nullable()->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
