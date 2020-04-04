<?php

use Illuminate\Database\Seeder;

class MenusTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('menus')->delete();
        
        \DB::table('menus')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'admin',
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'admin-zh-CN',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}