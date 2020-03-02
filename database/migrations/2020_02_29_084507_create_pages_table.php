<?php

use TCG\Voyager\Models\Page;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Create table for storing roles
        Schema::create('pages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('author_id')->comment('作者ID');
            $table->string('title')->comment('文章标题');
            $table->text('excerpt')->nullable()->comment('文章摘要');
            $table->text('body')->nullable()->comment('文章正文');
            $table->string('image')->nullable()->comment('文章封面');
            $table->string('slug')->unique()->comment('URL别名');
            $table->text('meta_description')->nullable()->comment('页面描述');
            $table->text('meta_keywords')->nullable()->comment('页面关键字');
            $table->enum('status', Page::$statuses)->default(Page::STATUS_INACTIVE)->comment('状态');
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
        Schema::dropIfExists('pages');
    }
}
