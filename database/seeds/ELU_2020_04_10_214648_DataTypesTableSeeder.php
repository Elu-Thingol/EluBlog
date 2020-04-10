<?php

use Illuminate\Database\Seeder;

class ELU_2020_04_10_214648_DataTypesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('data_types')->delete();
        
        \DB::table('data_types')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'users',
                'slug' => 'users',
                'display_name_singular' => 'User',
                'display_name_plural' => 'Users',
                'icon' => 'voyager-person',
                'model_name' => 'TCG\\Voyager\\Models\\User',
                'policy_name' => 'TCG\\Voyager\\Policies\\UserPolicy',
                'controller' => 'TCG\\Voyager\\Http\\Controllers\\VoyagerUserController',
                'description' => '',
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => NULL,
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'menus',
                'slug' => 'menus',
                'display_name_singular' => 'Menu',
                'display_name_plural' => 'Menus',
                'icon' => 'voyager-list',
                'model_name' => 'TCG\\Voyager\\Models\\Menu',
                'policy_name' => NULL,
                'controller' => '',
                'description' => '',
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => NULL,
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'roles',
                'slug' => 'roles',
                'display_name_singular' => 'Role',
                'display_name_plural' => 'Roles',
                'icon' => 'voyager-lock',
                'model_name' => 'TCG\\Voyager\\Models\\Role',
                'policy_name' => NULL,
                'controller' => '',
                'description' => '',
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => NULL,
                'created_at' => '2020-02-12 16:13:21',
                'updated_at' => '2020-02-12 16:13:21',
            ),
            3 => 
            array (
                'id' => 6,
                'name' => 'permissions',
                'slug' => 'permissions',
                'display_name_singular' => 'Permission',
                'display_name_plural' => 'Permissions',
                'icon' => 'voyager-lock',
                'model_name' => 'TCG\\Voyager\\Models\\Permission',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => '{"order_column":null,"order_display_column":null,"order_direction":"asc","default_search_key":null,"scope":null}',
                'created_at' => '2020-02-13 01:20:09',
                'updated_at' => '2020-02-13 01:26:03',
            ),
            4 => 
            array (
                'id' => 12,
                'name' => 'posts',
                'slug' => 'posts',
                'display_name_singular' => 'Post',
                'display_name_plural' => 'Posts',
                'icon' => 'voyager-news',
                'model_name' => 'App\\Model\\Post',
                'policy_name' => NULL,
                'controller' => 'App\\Admin\\Controllers\\VoyagerPostController',
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 1,
                'details' => '{"order_column":"published_at","order_display_column":"title","order_direction":"desc","default_search_key":"title","scope":null}',
                'created_at' => '2020-02-29 17:55:45',
                'updated_at' => '2020-04-10 11:12:57',
            ),
            5 => 
            array (
                'id' => 13,
                'name' => 'tags',
                'slug' => 'tags',
                'display_name_singular' => 'Tag',
                'display_name_plural' => 'Tags',
                'icon' => 'voyager-tag',
                'model_name' => 'App\\Model\\Tag',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => '{"order_column":null,"order_display_column":null,"order_direction":"asc","default_search_key":null,"scope":null}',
                'created_at' => '2020-02-29 18:38:54',
                'updated_at' => '2020-04-07 14:02:11',
            ),
            6 => 
            array (
                'id' => 17,
                'name' => 'post_tags',
                'slug' => 'post-tags',
                'display_name_singular' => 'Post Tag',
                'display_name_plural' => 'Post Tags',
                'icon' => NULL,
                'model_name' => 'App\\Model\\PostTag',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => '{"order_column":null,"order_display_column":null,"order_direction":"asc","default_search_key":null,"scope":null}',
                'created_at' => '2020-03-02 12:53:45',
                'updated_at' => '2020-04-07 14:02:32',
            ),
            7 => 
            array (
                'id' => 18,
                'name' => 'friends',
                'slug' => 'friends',
                'display_name_singular' => 'Friend',
                'display_name_plural' => 'Friends',
                'icon' => 'voyager-beer',
                'model_name' => 'App\\Model\\Friend',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => '{"order_column":"status","order_display_column":"nickname","order_direction":"asc","default_search_key":"nickname","scope":null}',
                'created_at' => '2020-04-07 13:50:16',
                'updated_at' => '2020-04-08 12:39:29',
            ),
            8 => 
            array (
                'id' => 19,
                'name' => 'feedback',
                'slug' => 'feedback',
                'display_name_singular' => 'Feedback',
                'display_name_plural' => 'Feedback',
                'icon' => 'voyager-bubble',
                'model_name' => 'App\\Model\\Feedback',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'details' => '{"order_column":"created_at","order_display_column":"content","order_direction":"asc","default_search_key":"content","scope":null}',
                'created_at' => '2020-04-07 14:07:52',
                'updated_at' => '2020-04-07 14:42:02',
            ),
        ));
        
        
    }
}