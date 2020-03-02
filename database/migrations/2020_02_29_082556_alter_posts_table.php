<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->dropColumn('top');
            $table->dropColumn('view');
            $table->dropColumn('word');
            $table->dropColumn('dor');
            $table->string('seo_title')->nullable()->comment('SEO标题');
            $table->text('meta_description')->nullable()->comment('页面描述');
            $table->text('meta_keywords')->nullable()->comment('页面关键字');
            $table->boolean('featured')->default(0)->comment('特色');
            $table->text('excerpt')->nullable()->comment('文章摘要')->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->boolean('top')->default(false)->comment('置顶标志');
            $table->integer('view')->default(0)->comment('文章阅读数');
            $table->integer('word')->default(0)->comment('文章字数');
            $table->integer('dor')->default(0)->comment('文章阅读时长 (Duration of reading)');
            $table->dropColumn('seo_title');
            $table->dropColumn('meta_description');
            $table->dropColumn('meta_keywords');
            $table->dropColumn('featured');
            $table->text('excerpt')->comment('文章摘要')->change();
        });
    }
}
