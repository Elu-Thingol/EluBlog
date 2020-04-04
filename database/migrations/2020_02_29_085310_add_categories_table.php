<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('categories', function (Blueprint $table) {
            $table->bigInteger('parent_id')->unsigned()->nullable()->default(null)->comment('父分类ID');
            $table->foreign('parent_id')->references('id')->on('categories')->onUpdate('cascade')->onDelete('set null');
            $table->bigInteger('order')->default(1);
            $table->dropColumn('slug');
            $table->string('slug')->unique()->comment('URL别名');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('categories', function (Blueprint $table) {
            $table->dropForeign('categories_parent_id_foreign');
            $table->dropColumn('parent_id');
            $table->dropColumn('order');
            $table->dropColumn('slug');
            $table->string('slug')->unique()->comment('分类标识符(路径)');
        });
    }
}
