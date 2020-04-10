<?php

use Illuminate\Database\Seeder;

class ELU_2020_04_10_214648_PermissionsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('permissions')->delete();
        
        \DB::table('permissions')->insert(array (
            0 => 
            array (
                'id' => 1,
                'key' => 'browse_admin',
                'table_name' => NULL,
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            1 => 
            array (
                'id' => 2,
                'key' => 'browse_bread',
                'table_name' => NULL,
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            2 => 
            array (
                'id' => 3,
                'key' => 'browse_database',
                'table_name' => NULL,
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            3 => 
            array (
                'id' => 4,
                'key' => 'browse_media',
                'table_name' => NULL,
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            4 => 
            array (
                'id' => 5,
                'key' => 'browse_compass',
                'table_name' => NULL,
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            5 => 
            array (
                'id' => 6,
                'key' => 'browse_menus',
                'table_name' => 'menus',
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            6 => 
            array (
                'id' => 7,
                'key' => 'read_menus',
                'table_name' => 'menus',
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            7 => 
            array (
                'id' => 8,
                'key' => 'edit_menus',
                'table_name' => 'menus',
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            8 => 
            array (
                'id' => 9,
                'key' => 'add_menus',
                'table_name' => 'menus',
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            9 => 
            array (
                'id' => 10,
                'key' => 'delete_menus',
                'table_name' => 'menus',
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            10 => 
            array (
                'id' => 11,
                'key' => 'browse_roles',
                'table_name' => 'roles',
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            11 => 
            array (
                'id' => 12,
                'key' => 'read_roles',
                'table_name' => 'roles',
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            12 => 
            array (
                'id' => 13,
                'key' => 'edit_roles',
                'table_name' => 'roles',
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            13 => 
            array (
                'id' => 14,
                'key' => 'add_roles',
                'table_name' => 'roles',
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            14 => 
            array (
                'id' => 15,
                'key' => 'delete_roles',
                'table_name' => 'roles',
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            15 => 
            array (
                'id' => 16,
                'key' => 'browse_users',
                'table_name' => 'users',
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            16 => 
            array (
                'id' => 17,
                'key' => 'read_users',
                'table_name' => 'users',
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            17 => 
            array (
                'id' => 18,
                'key' => 'edit_users',
                'table_name' => 'users',
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            18 => 
            array (
                'id' => 19,
                'key' => 'add_users',
                'table_name' => 'users',
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            19 => 
            array (
                'id' => 20,
                'key' => 'delete_users',
                'table_name' => 'users',
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            20 => 
            array (
                'id' => 21,
                'key' => 'browse_settings',
                'table_name' => 'settings',
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            21 => 
            array (
                'id' => 22,
                'key' => 'read_settings',
                'table_name' => 'settings',
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            22 => 
            array (
                'id' => 23,
                'key' => 'edit_settings',
                'table_name' => 'settings',
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            23 => 
            array (
                'id' => 24,
                'key' => 'add_settings',
                'table_name' => 'settings',
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            24 => 
            array (
                'id' => 25,
                'key' => 'delete_settings',
                'table_name' => 'settings',
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            25 => 
            array (
                'id' => 26,
                'key' => 'browse_hooks',
                'table_name' => NULL,
                'created_at' => '2020-02-12 16:13:22',
                'updated_at' => '2020-02-12 16:13:22',
            ),
            26 => 
            array (
                'id' => 27,
                'key' => 'browse_permissions',
                'table_name' => 'permissions',
                'created_at' => '2020-02-13 01:20:09',
                'updated_at' => '2020-02-13 01:20:09',
            ),
            27 => 
            array (
                'id' => 28,
                'key' => 'read_permissions',
                'table_name' => 'permissions',
                'created_at' => '2020-02-13 01:20:09',
                'updated_at' => '2020-02-13 01:20:09',
            ),
            28 => 
            array (
                'id' => 29,
                'key' => 'edit_permissions',
                'table_name' => 'permissions',
                'created_at' => '2020-02-13 01:20:09',
                'updated_at' => '2020-02-13 01:20:09',
            ),
            29 => 
            array (
                'id' => 30,
                'key' => 'add_permissions',
                'table_name' => 'permissions',
                'created_at' => '2020-02-13 01:20:09',
                'updated_at' => '2020-02-13 01:20:09',
            ),
            30 => 
            array (
                'id' => 31,
                'key' => 'delete_permissions',
                'table_name' => 'permissions',
                'created_at' => '2020-02-13 01:20:09',
                'updated_at' => '2020-02-13 01:20:09',
            ),
            31 => 
            array (
                'id' => 47,
                'key' => 'browse_posts',
                'table_name' => 'posts',
                'created_at' => '2020-02-29 17:55:45',
                'updated_at' => '2020-02-29 17:55:45',
            ),
            32 => 
            array (
                'id' => 48,
                'key' => 'read_posts',
                'table_name' => 'posts',
                'created_at' => '2020-02-29 17:55:45',
                'updated_at' => '2020-02-29 17:55:45',
            ),
            33 => 
            array (
                'id' => 49,
                'key' => 'edit_posts',
                'table_name' => 'posts',
                'created_at' => '2020-02-29 17:55:45',
                'updated_at' => '2020-02-29 17:55:45',
            ),
            34 => 
            array (
                'id' => 50,
                'key' => 'add_posts',
                'table_name' => 'posts',
                'created_at' => '2020-02-29 17:55:45',
                'updated_at' => '2020-02-29 17:55:45',
            ),
            35 => 
            array (
                'id' => 51,
                'key' => 'delete_posts',
                'table_name' => 'posts',
                'created_at' => '2020-02-29 17:55:45',
                'updated_at' => '2020-02-29 17:55:45',
            ),
            36 => 
            array (
                'id' => 52,
                'key' => 'browse_tags',
                'table_name' => 'tags',
                'created_at' => '2020-02-29 18:38:54',
                'updated_at' => '2020-02-29 18:38:54',
            ),
            37 => 
            array (
                'id' => 53,
                'key' => 'read_tags',
                'table_name' => 'tags',
                'created_at' => '2020-02-29 18:38:54',
                'updated_at' => '2020-02-29 18:38:54',
            ),
            38 => 
            array (
                'id' => 54,
                'key' => 'edit_tags',
                'table_name' => 'tags',
                'created_at' => '2020-02-29 18:38:54',
                'updated_at' => '2020-02-29 18:38:54',
            ),
            39 => 
            array (
                'id' => 55,
                'key' => 'add_tags',
                'table_name' => 'tags',
                'created_at' => '2020-02-29 18:38:54',
                'updated_at' => '2020-02-29 18:38:54',
            ),
            40 => 
            array (
                'id' => 56,
                'key' => 'delete_tags',
                'table_name' => 'tags',
                'created_at' => '2020-02-29 18:38:54',
                'updated_at' => '2020-02-29 18:38:54',
            ),
            41 => 
            array (
                'id' => 67,
                'key' => 'browse_post_tags',
                'table_name' => 'post_tags',
                'created_at' => '2020-03-02 12:53:45',
                'updated_at' => '2020-03-02 12:53:45',
            ),
            42 => 
            array (
                'id' => 68,
                'key' => 'read_post_tags',
                'table_name' => 'post_tags',
                'created_at' => '2020-03-02 12:53:45',
                'updated_at' => '2020-03-02 12:53:45',
            ),
            43 => 
            array (
                'id' => 69,
                'key' => 'edit_post_tags',
                'table_name' => 'post_tags',
                'created_at' => '2020-03-02 12:53:45',
                'updated_at' => '2020-03-02 12:53:45',
            ),
            44 => 
            array (
                'id' => 70,
                'key' => 'add_post_tags',
                'table_name' => 'post_tags',
                'created_at' => '2020-03-02 12:53:45',
                'updated_at' => '2020-03-02 12:53:45',
            ),
            45 => 
            array (
                'id' => 71,
                'key' => 'delete_post_tags',
                'table_name' => 'post_tags',
                'created_at' => '2020-03-02 12:53:45',
                'updated_at' => '2020-03-02 12:53:45',
            ),
            46 => 
            array (
                'id' => 72,
                'key' => 'browse_friends',
                'table_name' => 'friends',
                'created_at' => '2020-04-07 13:50:16',
                'updated_at' => '2020-04-07 13:50:16',
            ),
            47 => 
            array (
                'id' => 73,
                'key' => 'read_friends',
                'table_name' => 'friends',
                'created_at' => '2020-04-07 13:50:16',
                'updated_at' => '2020-04-07 13:50:16',
            ),
            48 => 
            array (
                'id' => 74,
                'key' => 'edit_friends',
                'table_name' => 'friends',
                'created_at' => '2020-04-07 13:50:16',
                'updated_at' => '2020-04-07 13:50:16',
            ),
            49 => 
            array (
                'id' => 75,
                'key' => 'add_friends',
                'table_name' => 'friends',
                'created_at' => '2020-04-07 13:50:16',
                'updated_at' => '2020-04-07 13:50:16',
            ),
            50 => 
            array (
                'id' => 76,
                'key' => 'delete_friends',
                'table_name' => 'friends',
                'created_at' => '2020-04-07 13:50:16',
                'updated_at' => '2020-04-07 13:50:16',
            ),
            51 => 
            array (
                'id' => 77,
                'key' => 'browse_feedback',
                'table_name' => 'feedback',
                'created_at' => '2020-04-07 14:07:52',
                'updated_at' => '2020-04-07 14:07:52',
            ),
            52 => 
            array (
                'id' => 78,
                'key' => 'read_feedback',
                'table_name' => 'feedback',
                'created_at' => '2020-04-07 14:07:52',
                'updated_at' => '2020-04-07 14:07:52',
            ),
            53 => 
            array (
                'id' => 79,
                'key' => 'edit_feedback',
                'table_name' => 'feedback',
                'created_at' => '2020-04-07 14:07:52',
                'updated_at' => '2020-04-07 14:07:52',
            ),
            54 => 
            array (
                'id' => 80,
                'key' => 'add_feedback',
                'table_name' => 'feedback',
                'created_at' => '2020-04-07 14:07:52',
                'updated_at' => '2020-04-07 14:07:52',
            ),
            55 => 
            array (
                'id' => 81,
                'key' => 'delete_feedback',
                'table_name' => 'feedback',
                'created_at' => '2020-04-07 14:07:52',
                'updated_at' => '2020-04-07 14:07:52',
            ),
        ));
        
        
    }
}