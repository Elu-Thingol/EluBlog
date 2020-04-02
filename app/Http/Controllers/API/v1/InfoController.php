<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class InfoController extends BaseController
{
    public function index(Request $request)
    {
        $data = [
            'site' => [
                'title' => setting('site.title'),
                'description' => setting('site.description')
            ],
            'blog' => [
                'address' => setting('blog.address'),
                'introduction' => setting('blog.introduction'),
                'personal' => [
                    'nickname' => setting('blog.personal_nickname'),
                    'motto' => setting('blog.personal_motto'),
                ],
                'contact' => [
                    'email' => setting('blog.contact_email'),
                    'qq' => setting('blog.contact_qq'),
                    'github' => setting('blog.contact_github'),
                ],
                'info' => [
                    'blog_source' => json_decode(setting('blog.info_blog_source')),
                    'technology' => setting('blog.info_technology'),
                    'other' => setting('blog.info_other')
                ]
            ]
        ];

        return $this->success($data);
    }
}
