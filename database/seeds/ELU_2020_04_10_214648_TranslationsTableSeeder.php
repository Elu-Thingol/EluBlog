<?php

use Illuminate\Database\Seeder;

class ELU_2020_04_10_214648_TranslationsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('translations')->delete();
        
        \DB::table('translations')->insert(array (
            0 => 
            array (
                'id' => 1,
                'table_name' => 'menu_items',
                'column_name' => 'title',
                'foreign_key' => 18,
                'locale' => 'en',
                'value' => '数据库管理',
                'created_at' => '2020-02-13 01:11:56',
                'updated_at' => '2020-02-13 01:11:56',
            ),
            1 => 
            array (
                'id' => 2,
                'table_name' => 'menu_items',
                'column_name' => 'title',
                'foreign_key' => 24,
                'locale' => 'en',
                'value' => '权限',
                'created_at' => '2020-02-13 01:22:22',
                'updated_at' => '2020-02-13 01:22:22',
            ),
            2 => 
            array (
                'id' => 3,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 22,
                'locale' => 'en',
                'value' => 'Id',
                'created_at' => '2020-02-13 01:26:03',
                'updated_at' => '2020-02-13 01:26:03',
            ),
            3 => 
            array (
                'id' => 4,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 23,
                'locale' => 'en',
                'value' => 'Key',
                'created_at' => '2020-02-13 01:26:03',
                'updated_at' => '2020-02-13 01:26:03',
            ),
            4 => 
            array (
                'id' => 5,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 24,
                'locale' => 'en',
                'value' => 'Table Name',
                'created_at' => '2020-02-13 01:26:03',
                'updated_at' => '2020-02-13 01:26:03',
            ),
            5 => 
            array (
                'id' => 6,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 25,
                'locale' => 'en',
                'value' => 'Created At',
                'created_at' => '2020-02-13 01:26:03',
                'updated_at' => '2020-02-13 01:26:03',
            ),
            6 => 
            array (
                'id' => 7,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 26,
                'locale' => 'en',
                'value' => 'Updated At',
                'created_at' => '2020-02-13 01:26:03',
                'updated_at' => '2020-02-13 01:26:03',
            ),
            7 => 
            array (
                'id' => 8,
                'table_name' => 'data_types',
                'column_name' => 'display_name_singular',
                'foreign_key' => 6,
                'locale' => 'en',
                'value' => 'Permission',
                'created_at' => '2020-02-13 01:26:04',
                'updated_at' => '2020-02-13 01:26:04',
            ),
            8 => 
            array (
                'id' => 9,
                'table_name' => 'data_types',
                'column_name' => 'display_name_plural',
                'foreign_key' => 6,
                'locale' => 'en',
                'value' => 'Permissions',
                'created_at' => '2020-02-13 01:26:04',
                'updated_at' => '2020-02-13 01:26:04',
            ),
            9 => 
            array (
                'id' => 10,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 64,
                'locale' => 'en',
                'value' => 'Id',
                'created_at' => '2020-02-29 17:57:14',
                'updated_at' => '2020-02-29 17:57:14',
            ),
            10 => 
            array (
                'id' => 11,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 65,
                'locale' => 'en',
                'value' => 'Author Id',
                'created_at' => '2020-02-29 17:57:14',
                'updated_at' => '2020-02-29 17:57:14',
            ),
            11 => 
            array (
                'id' => 12,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 66,
                'locale' => 'en',
                'value' => 'Category Id',
                'created_at' => '2020-02-29 17:57:14',
                'updated_at' => '2020-02-29 17:57:14',
            ),
            12 => 
            array (
                'id' => 13,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 67,
                'locale' => 'en',
                'value' => 'Title',
                'created_at' => '2020-02-29 17:57:14',
                'updated_at' => '2020-02-29 17:57:14',
            ),
            13 => 
            array (
                'id' => 14,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 68,
                'locale' => 'en',
                'value' => 'Image',
                'created_at' => '2020-02-29 17:57:14',
                'updated_at' => '2020-02-29 17:57:14',
            ),
            14 => 
            array (
                'id' => 15,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 69,
                'locale' => 'en',
                'value' => 'Excerpt',
                'created_at' => '2020-02-29 17:57:14',
                'updated_at' => '2020-02-29 17:57:14',
            ),
            15 => 
            array (
                'id' => 16,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 70,
                'locale' => 'en',
                'value' => 'Body',
                'created_at' => '2020-02-29 17:57:14',
                'updated_at' => '2020-02-29 17:57:14',
            ),
            16 => 
            array (
                'id' => 17,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 71,
                'locale' => 'en',
                'value' => 'Slug',
                'created_at' => '2020-02-29 17:57:15',
                'updated_at' => '2020-02-29 17:57:15',
            ),
            17 => 
            array (
                'id' => 18,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 72,
                'locale' => 'en',
                'value' => 'Status',
                'created_at' => '2020-02-29 17:57:15',
                'updated_at' => '2020-02-29 17:57:15',
            ),
            18 => 
            array (
                'id' => 19,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 73,
                'locale' => 'en',
                'value' => 'Created At',
                'created_at' => '2020-02-29 17:57:15',
                'updated_at' => '2020-02-29 17:57:15',
            ),
            19 => 
            array (
                'id' => 20,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 74,
                'locale' => 'en',
                'value' => 'Updated At',
                'created_at' => '2020-02-29 17:57:15',
                'updated_at' => '2020-02-29 17:57:15',
            ),
            20 => 
            array (
                'id' => 21,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 75,
                'locale' => 'en',
                'value' => 'Published Date',
                'created_at' => '2020-02-29 17:57:15',
                'updated_at' => '2020-02-29 17:57:15',
            ),
            21 => 
            array (
                'id' => 22,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 76,
                'locale' => 'en',
                'value' => 'Seo Title',
                'created_at' => '2020-02-29 17:57:15',
                'updated_at' => '2020-02-29 17:57:15',
            ),
            22 => 
            array (
                'id' => 23,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 77,
                'locale' => 'en',
                'value' => 'Meta Description',
                'created_at' => '2020-02-29 17:57:15',
                'updated_at' => '2020-02-29 17:57:15',
            ),
            23 => 
            array (
                'id' => 24,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 78,
                'locale' => 'en',
                'value' => 'Meta Keywords',
                'created_at' => '2020-02-29 17:57:15',
                'updated_at' => '2020-02-29 17:57:15',
            ),
            24 => 
            array (
                'id' => 25,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 79,
                'locale' => 'en',
                'value' => 'Featured',
                'created_at' => '2020-02-29 17:57:15',
                'updated_at' => '2020-02-29 17:57:15',
            ),
            25 => 
            array (
                'id' => 26,
                'table_name' => 'data_types',
                'column_name' => 'display_name_singular',
                'foreign_key' => 12,
                'locale' => 'en',
                'value' => 'Post',
                'created_at' => '2020-02-29 17:57:15',
                'updated_at' => '2020-02-29 17:57:15',
            ),
            26 => 
            array (
                'id' => 27,
                'table_name' => 'data_types',
                'column_name' => 'display_name_plural',
                'foreign_key' => 12,
                'locale' => 'en',
                'value' => 'Posts',
                'created_at' => '2020-02-29 17:57:15',
                'updated_at' => '2020-02-29 17:57:15',
            ),
            27 => 
            array (
                'id' => 28,
                'table_name' => 'menu_items',
                'column_name' => 'title',
                'foreign_key' => 29,
                'locale' => 'en',
                'value' => '博客管理',
                'created_at' => '2020-02-29 18:23:08',
                'updated_at' => '2020-02-29 18:23:08',
            ),
            28 => 
            array (
                'id' => 29,
                'table_name' => 'menu_items',
                'column_name' => 'title',
                'foreign_key' => 33,
                'locale' => 'en',
                'value' => '标签',
                'created_at' => '2020-02-29 18:42:20',
                'updated_at' => '2020-02-29 18:42:20',
            ),
            29 => 
            array (
                'id' => 30,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 90,
                'locale' => 'en',
                'value' => 'post_tags',
                'created_at' => '2020-02-29 18:51:43',
                'updated_at' => '2020-02-29 18:51:43',
            ),
            30 => 
            array (
                'id' => 32,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 91,
                'locale' => 'en',
                'value' => 'Id',
                'created_at' => '2020-02-29 19:01:08',
                'updated_at' => '2020-02-29 19:01:08',
            ),
            31 => 
            array (
                'id' => 33,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 92,
                'locale' => 'en',
                'value' => 'Name',
                'created_at' => '2020-02-29 19:01:08',
                'updated_at' => '2020-02-29 19:01:08',
            ),
            32 => 
            array (
                'id' => 34,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 93,
                'locale' => 'en',
                'value' => 'Created At',
                'created_at' => '2020-02-29 19:01:08',
                'updated_at' => '2020-02-29 19:01:08',
            ),
            33 => 
            array (
                'id' => 35,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 94,
                'locale' => 'en',
                'value' => 'Updated At',
                'created_at' => '2020-02-29 19:01:08',
                'updated_at' => '2020-02-29 19:01:08',
            ),
            34 => 
            array (
                'id' => 36,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 95,
                'locale' => 'en',
                'value' => 'Parent Id',
                'created_at' => '2020-02-29 19:01:08',
                'updated_at' => '2020-02-29 19:01:08',
            ),
            35 => 
            array (
                'id' => 37,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 96,
                'locale' => 'en',
                'value' => 'Order',
                'created_at' => '2020-02-29 19:01:08',
                'updated_at' => '2020-02-29 19:01:08',
            ),
            36 => 
            array (
                'id' => 38,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 97,
                'locale' => 'en',
                'value' => 'Slug',
                'created_at' => '2020-02-29 19:01:08',
                'updated_at' => '2020-02-29 19:01:08',
            ),
            37 => 
            array (
                'id' => 41,
                'table_name' => 'posts',
                'column_name' => 'title',
                'foreign_key' => 1,
                'locale' => 'en',
                'value' => 'aa',
                'created_at' => '2020-02-29 21:27:17',
                'updated_at' => '2020-02-29 21:27:17',
            ),
            38 => 
            array (
                'id' => 42,
                'table_name' => 'posts',
                'column_name' => 'excerpt',
                'foreign_key' => 1,
                'locale' => 'en',
                'value' => 'aa',
                'created_at' => '2020-02-29 21:27:17',
                'updated_at' => '2020-02-29 21:27:17',
            ),
            39 => 
            array (
                'id' => 43,
                'table_name' => 'posts',
                'column_name' => 'body',
                'foreign_key' => 1,
                'locale' => 'en',
                'value' => 'aa',
                'created_at' => '2020-02-29 21:27:17',
                'updated_at' => '2020-02-29 21:27:17',
            ),
            40 => 
            array (
                'id' => 44,
                'table_name' => 'posts',
                'column_name' => 'slug',
                'foreign_key' => 1,
                'locale' => 'en',
                'value' => 'aa',
                'created_at' => '2020-02-29 21:27:17',
                'updated_at' => '2020-02-29 21:27:17',
            ),
            41 => 
            array (
                'id' => 45,
                'table_name' => 'posts',
                'column_name' => 'title',
                'foreign_key' => 2,
                'locale' => 'en',
                'value' => 'aaa',
                'created_at' => '2020-02-29 21:56:46',
                'updated_at' => '2020-02-29 21:56:46',
            ),
            42 => 
            array (
                'id' => 46,
                'table_name' => 'posts',
                'column_name' => 'excerpt',
                'foreign_key' => 2,
                'locale' => 'en',
                'value' => 'aaaa',
                'created_at' => '2020-02-29 21:56:46',
                'updated_at' => '2020-02-29 21:56:46',
            ),
            43 => 
            array (
                'id' => 47,
                'table_name' => 'posts',
                'column_name' => 'body',
                'foreign_key' => 2,
                'locale' => 'en',
                'value' => 'aaaaaaa',
                'created_at' => '2020-02-29 21:56:46',
                'updated_at' => '2020-02-29 21:56:46',
            ),
            44 => 
            array (
                'id' => 48,
                'table_name' => 'posts',
                'column_name' => 'slug',
                'foreign_key' => 2,
                'locale' => 'en',
                'value' => 'aaaa',
                'created_at' => '2020-02-29 21:56:46',
                'updated_at' => '2020-02-29 21:56:46',
            ),
            45 => 
            array (
                'id' => 49,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 98,
                'locale' => 'en',
                'value' => 'Id',
                'created_at' => '2020-03-02 12:59:03',
                'updated_at' => '2020-03-02 12:59:03',
            ),
            46 => 
            array (
                'id' => 50,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 99,
                'locale' => 'en',
                'value' => 'Post Id',
                'created_at' => '2020-03-02 12:59:03',
                'updated_at' => '2020-03-02 12:59:03',
            ),
            47 => 
            array (
                'id' => 51,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 100,
                'locale' => 'en',
                'value' => 'Tag Id',
                'created_at' => '2020-03-02 12:59:03',
                'updated_at' => '2020-03-02 12:59:03',
            ),
            48 => 
            array (
                'id' => 52,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 101,
                'locale' => 'en',
                'value' => 'Created At',
                'created_at' => '2020-03-02 12:59:03',
                'updated_at' => '2020-03-02 12:59:03',
            ),
            49 => 
            array (
                'id' => 53,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 102,
                'locale' => 'en',
                'value' => 'Updated At',
                'created_at' => '2020-03-02 12:59:03',
                'updated_at' => '2020-03-02 12:59:03',
            ),
            50 => 
            array (
                'id' => 54,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 103,
                'locale' => 'en',
                'value' => 'posts',
                'created_at' => '2020-03-02 12:59:03',
                'updated_at' => '2020-03-02 12:59:03',
            ),
            51 => 
            array (
                'id' => 55,
                'table_name' => 'data_types',
                'column_name' => 'display_name_singular',
                'foreign_key' => 17,
                'locale' => 'en',
                'value' => 'Post Tag',
                'created_at' => '2020-03-02 12:59:03',
                'updated_at' => '2020-03-02 12:59:03',
            ),
            52 => 
            array (
                'id' => 56,
                'table_name' => 'data_types',
                'column_name' => 'display_name_plural',
                'foreign_key' => 17,
                'locale' => 'en',
                'value' => 'Post Tags',
                'created_at' => '2020-03-02 12:59:03',
                'updated_at' => '2020-03-02 12:59:03',
            ),
            53 => 
            array (
                'id' => 57,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 104,
                'locale' => 'en',
                'value' => 'tags',
                'created_at' => '2020-03-02 13:08:50',
                'updated_at' => '2020-03-02 13:08:50',
            ),
            54 => 
            array (
                'id' => 58,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 105,
                'locale' => 'en',
                'value' => 'posts',
                'created_at' => '2020-03-02 13:12:55',
                'updated_at' => '2020-03-02 13:12:55',
            ),
            55 => 
            array (
                'id' => 59,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 106,
                'locale' => 'en',
                'value' => 'categories',
                'created_at' => '2020-03-02 13:15:35',
                'updated_at' => '2020-03-02 13:15:35',
            ),
            56 => 
            array (
                'id' => 60,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 107,
                'locale' => 'en',
                'value' => 'tags',
                'created_at' => '2020-03-02 13:15:35',
                'updated_at' => '2020-03-02 13:15:35',
            ),
            57 => 
            array (
                'id' => 61,
                'table_name' => 'posts',
                'column_name' => 'title',
                'foreign_key' => 3,
                'locale' => 'en',
                'value' => '窝窝头',
                'created_at' => '2020-03-07 15:11:08',
                'updated_at' => '2020-03-07 15:11:08',
            ),
            58 => 
            array (
                'id' => 62,
                'table_name' => 'posts',
                'column_name' => 'excerpt',
                'foreign_key' => 3,
                'locale' => 'en',
                'value' => '嘿嘿',
                'created_at' => '2020-03-07 15:11:08',
                'updated_at' => '2020-03-07 15:11:08',
            ),
            59 => 
            array (
                'id' => 63,
                'table_name' => 'posts',
                'column_name' => 'body',
                'foreign_key' => 3,
                'locale' => 'en',
                'value' => '一块钱四个',
                'created_at' => '2020-03-07 15:11:08',
                'updated_at' => '2020-03-07 15:11:08',
            ),
            60 => 
            array (
                'id' => 64,
                'table_name' => 'posts',
                'column_name' => 'slug',
                'foreign_key' => 3,
                'locale' => 'en',
                'value' => '3665730931',
                'created_at' => '2020-03-07 15:11:08',
                'updated_at' => '2020-03-07 15:11:08',
            ),
            61 => 
            array (
                'id' => 65,
                'table_name' => 'categories',
                'column_name' => 'slug',
                'foreign_key' => 2,
                'locale' => 'en',
                'value' => 'wwt',
                'created_at' => '2020-03-07 15:13:21',
                'updated_at' => '2020-03-07 15:13:21',
            ),
            62 => 
            array (
                'id' => 66,
                'table_name' => 'categories',
                'column_name' => 'name',
                'foreign_key' => 2,
                'locale' => 'en',
                'value' => '窝窝头',
                'created_at' => '2020-03-07 15:13:21',
                'updated_at' => '2020-03-07 15:13:21',
            ),
            63 => 
            array (
                'id' => 67,
                'table_name' => 'categories',
                'column_name' => 'slug',
                'foreign_key' => 1,
                'locale' => 'en',
                'value' => 'hahahello',
                'created_at' => '2020-03-07 15:13:58',
                'updated_at' => '2020-03-07 15:13:58',
            ),
            64 => 
            array (
                'id' => 68,
                'table_name' => 'categories',
                'column_name' => 'name',
                'foreign_key' => 1,
                'locale' => 'en',
                'value' => 'hahahello',
                'created_at' => '2020-03-07 15:13:58',
                'updated_at' => '2020-03-07 15:13:58',
            ),
            65 => 
            array (
                'id' => 69,
                'table_name' => 'posts',
                'column_name' => 'title',
                'foreign_key' => 4,
                'locale' => 'en',
                'value' => 'dd',
                'created_at' => '2020-03-17 12:09:40',
                'updated_at' => '2020-03-17 12:09:40',
            ),
            66 => 
            array (
                'id' => 70,
                'table_name' => 'posts',
                'column_name' => 'excerpt',
                'foreign_key' => 4,
                'locale' => 'en',
                'value' => 'dd',
                'created_at' => '2020-03-17 12:09:40',
                'updated_at' => '2020-03-17 12:09:40',
            ),
            67 => 
            array (
                'id' => 71,
                'table_name' => 'posts',
                'column_name' => 'body',
                'foreign_key' => 4,
                'locale' => 'en',
                'value' => 'ss',
                'created_at' => '2020-03-17 12:09:40',
                'updated_at' => '2020-03-17 12:09:40',
            ),
            68 => 
            array (
                'id' => 72,
                'table_name' => 'posts',
                'column_name' => 'slug',
                'foreign_key' => 4,
                'locale' => 'en',
                'value' => '177674525',
                'created_at' => '2020-03-17 12:28:15',
                'updated_at' => '2020-03-17 12:28:15',
            ),
            69 => 
            array (
                'id' => 73,
                'table_name' => 'posts',
                'column_name' => 'title',
                'foreign_key' => 7,
                'locale' => 'en',
                'value' => 'qqq',
                'created_at' => '2020-03-17 12:32:10',
                'updated_at' => '2020-03-17 12:32:10',
            ),
            70 => 
            array (
                'id' => 74,
                'table_name' => 'posts',
                'column_name' => 'excerpt',
                'foreign_key' => 7,
                'locale' => 'en',
                'value' => 'qqq',
                'created_at' => '2020-03-17 12:32:10',
                'updated_at' => '2020-03-17 12:32:10',
            ),
            71 => 
            array (
                'id' => 75,
                'table_name' => 'posts',
                'column_name' => 'body',
                'foreign_key' => 7,
                'locale' => 'en',
                'value' => 'qqq',
                'created_at' => '2020-03-17 12:32:10',
                'updated_at' => '2020-03-17 12:32:10',
            ),
            72 => 
            array (
                'id' => 76,
                'table_name' => 'posts',
                'column_name' => 'slug',
                'foreign_key' => 7,
                'locale' => 'en',
                'value' => '3142898281',
                'created_at' => '2020-03-17 12:32:10',
                'updated_at' => '2020-03-17 12:32:10',
            ),
            73 => 
            array (
                'id' => 77,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 108,
                'locale' => 'en',
                'value' => 'View Number',
                'created_at' => '2020-03-18 05:40:53',
                'updated_at' => '2020-03-18 05:40:53',
            ),
            74 => 
            array (
                'id' => 78,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 109,
                'locale' => 'en',
                'value' => 'Deleted At',
                'created_at' => '2020-03-19 13:57:49',
                'updated_at' => '2020-03-19 13:57:49',
            ),
            75 => 
            array (
                'id' => 79,
                'table_name' => 'posts',
                'column_name' => 'title',
                'foreign_key' => 9,
                'locale' => 'en',
                'value' => '第八季第一期',
                'created_at' => '2020-03-19 14:03:04',
                'updated_at' => '2020-03-19 14:03:04',
            ),
            76 => 
            array (
                'id' => 80,
                'table_name' => 'posts',
                'column_name' => 'excerpt',
                'foreign_key' => 9,
                'locale' => 'en',
                'value' => '共青团“青年大学习”第八季第一期的答案汇总。',
                'created_at' => '2020-03-19 14:03:04',
                'updated_at' => '2020-03-19 14:03:04',
            ),
            77 => 
            array (
                'id' => 81,
                'table_name' => 'posts',
                'column_name' => 'body',
                'foreign_key' => 9,
                'locale' => 'en',
                'value' => '# 答案

-----

## 视频

1. A B C D
2. D
3. A B C

## 课后习题

1. 乙类
2. A D
3. C
4. D
5. B
6. A
7. A B C
8. c
9. B
10. A  

<!--more-->

# 测试

-----

## TODO

- [ ] 未勾选
- [x] 已勾选

## Pictures

![测试图片](http://elu.blog.io/storage/posts/March2020/image-1584626463507.jpg)

## 有序列表嵌套

1. 前湖后湖水
1. 前胡
1. 通胡
2. 初夏半夏凉
1. 半夏
3. 夜阑乡梦破
1. 兰香
1. 通兰
4. 一雁度衡阳
1. 杜衡
1. 通杜',
                'created_at' => '2020-03-19 14:03:04',
                'updated_at' => '2020-03-19 14:03:04',
            ),
            78 => 
            array (
                'id' => 82,
                'table_name' => 'posts',
                'column_name' => 'title',
                'foreign_key' => 8,
                'locale' => 'en',
                'value' => 'qqq',
                'created_at' => '2020-03-26 07:17:40',
                'updated_at' => '2020-03-26 07:17:40',
            ),
            79 => 
            array (
                'id' => 83,
                'table_name' => 'posts',
                'column_name' => 'excerpt',
                'foreign_key' => 8,
                'locale' => 'en',
                'value' => 'qqq',
                'created_at' => '2020-03-26 07:17:40',
                'updated_at' => '2020-03-26 07:17:40',
            ),
            80 => 
            array (
                'id' => 84,
                'table_name' => 'posts',
                'column_name' => 'body',
                'foreign_key' => 8,
                'locale' => 'en',
                'value' => 'qqq',
                'created_at' => '2020-03-26 07:17:40',
                'updated_at' => '2020-03-26 07:17:40',
            ),
            81 => 
            array (
                'id' => 85,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 110,
                'locale' => 'en',
                'value' => 'Published At',
                'created_at' => '2020-03-30 05:32:44',
                'updated_at' => '2020-03-30 05:32:44',
            ),
            82 => 
            array (
                'id' => 86,
                'table_name' => 'posts',
                'column_name' => 'title',
                'foreign_key' => 10,
                'locale' => 'en',
                'value' => '水水水水水水水水水',
                'created_at' => '2020-03-30 05:34:08',
                'updated_at' => '2020-03-30 05:34:08',
            ),
            83 => 
            array (
                'id' => 87,
                'table_name' => 'posts',
                'column_name' => 'excerpt',
                'foreign_key' => 10,
                'locale' => 'en',
                'value' => '啥啥啥',
                'created_at' => '2020-03-30 05:34:08',
                'updated_at' => '2020-03-30 05:34:08',
            ),
            84 => 
            array (
                'id' => 88,
                'table_name' => 'posts',
                'column_name' => 'body',
                'foreign_key' => 10,
                'locale' => 'en',
                'value' => '顶顶顶顶顶',
                'created_at' => '2020-03-30 05:34:08',
                'updated_at' => '2020-03-30 05:34:08',
            ),
            85 => 
            array (
                'id' => 107,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 111,
                'locale' => 'en',
                'value' => 'Id',
                'created_at' => '2020-04-07 13:58:50',
                'updated_at' => '2020-04-07 13:58:50',
            ),
            86 => 
            array (
                'id' => 108,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 112,
                'locale' => 'en',
                'value' => 'Nickname',
                'created_at' => '2020-04-07 13:58:50',
                'updated_at' => '2020-04-07 13:58:50',
            ),
            87 => 
            array (
                'id' => 109,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 113,
                'locale' => 'en',
                'value' => 'Email',
                'created_at' => '2020-04-07 13:58:50',
                'updated_at' => '2020-04-07 13:58:50',
            ),
            88 => 
            array (
                'id' => 110,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 114,
                'locale' => 'en',
                'value' => 'Bloglink',
                'created_at' => '2020-04-07 13:58:50',
                'updated_at' => '2020-04-07 13:58:50',
            ),
            89 => 
            array (
                'id' => 111,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 115,
                'locale' => 'en',
                'value' => 'Notes',
                'created_at' => '2020-04-07 13:58:50',
                'updated_at' => '2020-04-07 13:58:50',
            ),
            90 => 
            array (
                'id' => 112,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 116,
                'locale' => 'en',
                'value' => 'Status',
                'created_at' => '2020-04-07 13:58:50',
                'updated_at' => '2020-04-07 13:58:50',
            ),
            91 => 
            array (
                'id' => 113,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 117,
                'locale' => 'en',
                'value' => 'Created At',
                'created_at' => '2020-04-07 13:58:50',
                'updated_at' => '2020-04-07 13:58:50',
            ),
            92 => 
            array (
                'id' => 114,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 118,
                'locale' => 'en',
                'value' => 'Updated At',
                'created_at' => '2020-04-07 13:58:50',
                'updated_at' => '2020-04-07 13:58:50',
            ),
            93 => 
            array (
                'id' => 115,
                'table_name' => 'data_types',
                'column_name' => 'display_name_singular',
                'foreign_key' => 18,
                'locale' => 'en',
                'value' => 'Friend',
                'created_at' => '2020-04-07 13:58:50',
                'updated_at' => '2020-04-07 13:58:50',
            ),
            94 => 
            array (
                'id' => 116,
                'table_name' => 'data_types',
                'column_name' => 'display_name_plural',
                'foreign_key' => 18,
                'locale' => 'en',
                'value' => 'Friends',
                'created_at' => '2020-04-07 13:58:50',
                'updated_at' => '2020-04-07 13:58:50',
            ),
            95 => 
            array (
                'id' => 117,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 80,
                'locale' => 'en',
                'value' => 'Id',
                'created_at' => '2020-04-07 14:02:11',
                'updated_at' => '2020-04-07 14:02:11',
            ),
            96 => 
            array (
                'id' => 118,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 81,
                'locale' => 'en',
                'value' => 'Name',
                'created_at' => '2020-04-07 14:02:11',
                'updated_at' => '2020-04-07 14:02:11',
            ),
            97 => 
            array (
                'id' => 119,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 82,
                'locale' => 'en',
                'value' => 'Created At',
                'created_at' => '2020-04-07 14:02:11',
                'updated_at' => '2020-04-07 14:02:11',
            ),
            98 => 
            array (
                'id' => 120,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 83,
                'locale' => 'en',
                'value' => 'Updated At',
                'created_at' => '2020-04-07 14:02:11',
                'updated_at' => '2020-04-07 14:02:11',
            ),
            99 => 
            array (
                'id' => 121,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 84,
                'locale' => 'en',
                'value' => 'Deleted At',
                'created_at' => '2020-04-07 14:02:11',
                'updated_at' => '2020-04-07 14:02:11',
            ),
            100 => 
            array (
                'id' => 122,
                'table_name' => 'data_types',
                'column_name' => 'display_name_singular',
                'foreign_key' => 13,
                'locale' => 'en',
                'value' => 'Tag',
                'created_at' => '2020-04-07 14:02:11',
                'updated_at' => '2020-04-07 14:02:11',
            ),
            101 => 
            array (
                'id' => 123,
                'table_name' => 'data_types',
                'column_name' => 'display_name_plural',
                'foreign_key' => 13,
                'locale' => 'en',
                'value' => 'Tags',
                'created_at' => '2020-04-07 14:02:11',
                'updated_at' => '2020-04-07 14:02:11',
            ),
            102 => 
            array (
                'id' => 124,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 119,
                'locale' => 'en',
                'value' => 'Deleted At',
                'created_at' => '2020-04-07 14:02:52',
                'updated_at' => '2020-04-07 14:02:52',
            ),
            103 => 
            array (
                'id' => 125,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 120,
                'locale' => 'en',
                'value' => 'Id',
                'created_at' => '2020-04-07 14:09:15',
                'updated_at' => '2020-04-07 14:09:15',
            ),
            104 => 
            array (
                'id' => 126,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 121,
                'locale' => 'en',
                'value' => '称谓',
                'created_at' => '2020-04-07 14:09:15',
                'updated_at' => '2020-04-07 14:09:15',
            ),
            105 => 
            array (
                'id' => 127,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 122,
                'locale' => 'en',
                'value' => '邮箱',
                'created_at' => '2020-04-07 14:09:15',
                'updated_at' => '2020-04-07 14:09:15',
            ),
            106 => 
            array (
                'id' => 128,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 123,
                'locale' => 'en',
                'value' => '留言内容',
                'created_at' => '2020-04-07 14:09:15',
                'updated_at' => '2020-04-07 14:09:15',
            ),
            107 => 
            array (
                'id' => 129,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 124,
                'locale' => 'en',
                'value' => 'Deleted At',
                'created_at' => '2020-04-07 14:09:15',
                'updated_at' => '2020-04-07 14:09:15',
            ),
            108 => 
            array (
                'id' => 130,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 125,
                'locale' => 'en',
                'value' => 'Created At',
                'created_at' => '2020-04-07 14:09:15',
                'updated_at' => '2020-04-07 14:09:15',
            ),
            109 => 
            array (
                'id' => 131,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 126,
                'locale' => 'en',
                'value' => 'Updated At',
                'created_at' => '2020-04-07 14:09:15',
                'updated_at' => '2020-04-07 14:09:15',
            ),
            110 => 
            array (
                'id' => 132,
                'table_name' => 'data_types',
                'column_name' => 'display_name_singular',
                'foreign_key' => 19,
                'locale' => 'en',
                'value' => 'Feedback',
                'created_at' => '2020-04-07 14:09:15',
                'updated_at' => '2020-04-07 14:09:15',
            ),
            111 => 
            array (
                'id' => 133,
                'table_name' => 'data_types',
                'column_name' => 'display_name_plural',
                'foreign_key' => 19,
                'locale' => 'en',
                'value' => 'Feedback',
                'created_at' => '2020-04-07 14:09:15',
                'updated_at' => '2020-04-07 14:09:15',
            ),
            112 => 
            array (
                'id' => 134,
                'table_name' => 'menu_items',
                'column_name' => 'title',
                'foreign_key' => 34,
                'locale' => 'en',
                'value' => '评论',
                'created_at' => '2020-04-07 14:10:06',
                'updated_at' => '2020-04-07 14:10:06',
            ),
            113 => 
            array (
                'id' => 135,
                'table_name' => 'menu_items',
                'column_name' => 'title',
                'foreign_key' => 41,
                'locale' => 'en',
                'value' => '友链',
                'created_at' => '2020-04-07 14:12:40',
                'updated_at' => '2020-04-07 14:12:40',
            ),
            114 => 
            array (
                'id' => 136,
                'table_name' => 'data_rows',
                'column_name' => 'display_name',
                'foreign_key' => 128,
                'locale' => 'en',
                'value' => '展示标签',
                'created_at' => '2020-04-08 12:39:30',
                'updated_at' => '2020-04-08 12:39:30',
            ),
            115 => 
            array (
                'id' => 137,
                'table_name' => 'posts',
                'column_name' => 'title',
                'foreign_key' => 23,
                'locale' => 'en',
                'value' => 's',
                'created_at' => '2020-04-10 12:07:49',
                'updated_at' => '2020-04-10 12:07:49',
            ),
            116 => 
            array (
                'id' => 138,
                'table_name' => 'posts',
                'column_name' => 'title',
                'foreign_key' => 20,
                'locale' => 'en',
                'value' => '谔谔',
                'created_at' => '2020-04-10 16:46:19',
                'updated_at' => '2020-04-10 16:46:19',
            ),
        ));
        
        
    }
}