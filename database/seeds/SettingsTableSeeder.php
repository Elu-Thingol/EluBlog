<?php

use Illuminate\Database\Seeder;

class SettingsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('settings')->delete();
        
        \DB::table('settings')->insert(array (
            0 => 
            array (
                'id' => 1,
                'key' => 'site.title',
                'display_name' => 'Site Title',
                'value' => '洛九小筑',
                'details' => '',
                'type' => 'text',
                'order' => 1,
                'group' => 'Site',
            ),
            1 => 
            array (
                'id' => 2,
                'key' => 'site.description',
                'display_name' => 'Site Description',
                'value' => '洛九的个人博客网站，分享技术，相互学习。',
                'details' => '',
                'type' => 'text',
                'order' => 2,
                'group' => 'Site',
            ),
            2 => 
            array (
                'id' => 3,
                'key' => 'site.logo',
                'display_name' => 'Site Logo',
                'value' => 'settings/February2020/amiMnMc6OgNdZngw5FND.png',
                'details' => '',
                'type' => 'image',
                'order' => 3,
                'group' => 'Site',
            ),
            3 => 
            array (
                'id' => 4,
                'key' => 'site.google_analytics_tracking_id',
                'display_name' => 'Google Analytics Tracking ID',
                'value' => NULL,
                'details' => '',
                'type' => 'text',
                'order' => 4,
                'group' => 'Site',
            ),
            4 => 
            array (
                'id' => 5,
                'key' => 'admin.bg_image',
                'display_name' => 'Admin Background Image',
                'value' => '',
                'details' => '',
                'type' => 'image',
                'order' => 5,
                'group' => 'Admin',
            ),
            5 => 
            array (
                'id' => 6,
                'key' => 'admin.title',
                'display_name' => 'Admin Title',
                'value' => '一夜梧桐飘',
                'details' => '',
                'type' => 'text',
                'order' => 1,
                'group' => 'Admin',
            ),
            6 => 
            array (
                'id' => 7,
                'key' => 'admin.description',
                'display_name' => 'Admin Description',
                'value' => 'Welcome to Voyager. The Missing Admin for Laravel',
                'details' => '',
                'type' => 'text',
                'order' => 2,
                'group' => 'Admin',
            ),
            7 => 
            array (
                'id' => 8,
                'key' => 'admin.loader',
                'display_name' => 'Admin Loader',
                'value' => '',
                'details' => '',
                'type' => 'image',
                'order' => 3,
                'group' => 'Admin',
            ),
            8 => 
            array (
                'id' => 9,
                'key' => 'admin.icon_image',
                'display_name' => 'Admin Icon Image',
                'value' => '',
                'details' => '',
                'type' => 'image',
                'order' => 4,
                'group' => 'Admin',
            ),
            9 => 
            array (
                'id' => 10,
                'key' => 'admin.google_analytics_client_id',
            'display_name' => 'Google Analytics Client ID (used for admin dashboard)',
                'value' => NULL,
                'details' => '',
                'type' => 'text',
                'order' => 1,
                'group' => 'Admin',
            ),
            10 => 
            array (
                'id' => 28,
                'key' => 'blog.address',
                'display_name' => '博客地址',
                'value' => 'http://elu.blog.io',
                'details' => NULL,
                'type' => 'text',
                'order' => 6,
                'group' => 'Blog',
            ),
            11 => 
            array (
                'id' => 29,
                'key' => 'blog.introduction',
                'display_name' => '博客简介',
                'value' => '向上的路并不拥挤，而大多数人选择了安逸。',
                'details' => NULL,
                'type' => 'text_area',
                'order' => 11,
                'group' => 'Blog',
            ),
            12 => 
            array (
                'id' => 30,
                'key' => 'blog.personal_nickname',
                'display_name' => '昵称',
                'value' => '洛九',
                'details' => NULL,
                'type' => 'text',
                'order' => 14,
                'group' => 'Blog',
            ),
            13 => 
            array (
                'id' => 31,
                'key' => 'blog.personal_motto',
                'display_name' => '座右铭',
                'value' => '岂曰无衣？与子同袍。',
                'details' => NULL,
                'type' => 'text',
                'order' => 15,
                'group' => 'Blog',
            ),
            14 => 
            array (
                'id' => 32,
                'key' => 'blog.contact_email',
                'display_name' => '电邮',
                'value' => 'eluthingol@vip.qq.com',
                'details' => NULL,
                'type' => 'text',
                'order' => 16,
                'group' => 'Blog',
            ),
            15 => 
            array (
                'id' => 33,
                'key' => 'blog.contact_qq',
                'display_name' => 'QQ',
                'value' => '371611050',
                'details' => NULL,
                'type' => 'text',
                'order' => 17,
                'group' => 'Blog',
            ),
            16 => 
            array (
                'id' => 34,
                'key' => 'blog.contact_github',
                'display_name' => 'Github',
                'value' => 'https://github.com/Elu-Thingol',
                'details' => NULL,
                'type' => 'text',
                'order' => 18,
                'group' => 'Blog',
            ),
            17 => 
            array (
                'id' => 35,
                'key' => 'blog.info_blog_source',
                'display_name' => '博客开源',
                'value' => '[
{
"img": {
"alt": "码云",
"src": "../../images/mayun.png"
},
"url": "https://gitee.com/fengziy/Fblog"
}
]',
                'details' => NULL,
                'type' => 'code_editor',
                'order' => 19,
                'group' => 'Blog',
            ),
            18 => 
            array (
                'id' => 36,
                'key' => 'blog.info_technology',
                'display_name' => '涉及技术',
                'value' => 'Vue、Vue-Router、Element-ui、Vue-i18n',
                'details' => NULL,
                'type' => 'text',
                'order' => 20,
                'group' => 'Blog',
            ),
            19 => 
            array (
                'id' => 37,
                'key' => 'blog.info_other',
                'display_name' => '其他信息',
                'value' => '百度分享、点击爱心特效、复制追加版权信息',
                'details' => NULL,
                'type' => 'text',
                'order' => 21,
                'group' => 'Blog',
            ),
        ));
        
        
    }
}