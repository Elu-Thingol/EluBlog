<?php

namespace App\Http\Controllers\API\v1;

use App\Model\Post;
use Illuminate\Http\Request;
use Symfony\Component\Console\Input\Input;

class PostController extends BaseController
{
    public function index(Request $request)
    {
        $page = $request->get('page', 1);
        $per_page = $request->input('per_page', 20);
        $sortby = $request->query('sortby', 'published_date');
        $order = $request->get('order', 'desc');

        $data = Post::with('tags')
            ->published()
            ->orderBy('featured', 'desc')
            ->orderBy($sortby, $order)
            ->paginate($per_page, '*', 'page', $page);

        return $this->success($data);
    }

    public function getBySlug(Request $request, $slug)
    {
        $data = Post::where('slug', $slug)
            ->with('tags')
            ->published()
            ->first();

        $data->view_num++;
        $data->save();

        return $this->success($data);
    }

    public function getSlug(Request $request)
    {
        $title = $request->input('title', 'title');
        $slug = strval(uright(crc32($title), 0));
        
        // 去重验证
        while (Post::where('slug', $slug)->exists()) {
            $slug++;
        }
        

        $data = [
            "slug" => $slug,
            "original" => $title,
        ];


        return $this->success($data);
    }
}
