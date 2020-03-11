<?php

namespace App\Http\Controllers\API\v1;

use Illuminate\Http\Request;

class PostController extends BaseController
{
    public function list(Request $request)
    {
        $posts = Post::where('email', '=', Input::get('email'));

        $data = [
            "page" => $request->get('page', 1),
            "per_page" => $request->input('per_page', 20),
            "featured" => $request->query('featured', 1),
            "sortby" => $request->query('sortby', 'date'),
            "order" => $request->get('order', 'asc'),
        ];

        return $this->success($data);
    }

    public function getBySlug(Request $request, $slug)
    {
        $data = [
            "slug" => $slug,
        ];

        return $this->success($data);
    }

    public function getSlug(Request $request)
    {
        $offset = 0;
        $title = $request->input('title', 'title');
        $o_slug = $request->input('slug');
        $slug = strval(uright(crc32($title), 0) + $offset);

        $data = [
            "slug" => $slug,
            "original" => $title,
            "offset" => $offset,
            "reset" => 0,
        ];

        if ($slug != $o_slug) {
            # 查找数据库o_slug存在则删除并添加新记录
            # 验证slug 存在则offset+1产生新slug重新验证
            $data["reset"] = 1;
        }

        return $this->success($data);
    }
}
