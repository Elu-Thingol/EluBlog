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
        $sortby = $request->query('sortby', 'published_at');
        $order = $request->get('order', 'desc');

        $data = Post::with('tagList')
            ->published()
            ->orderBy('featured', 'desc')
            ->orderBy($sortby, $order)
            ->paginate($per_page, [
                'id',
                'title',
                'image', 'excerpt',
                'slug',
                'published_at',
                'featured',
                'view_num'
            ], 'page', $page);

        return $this->success($data);
    }

    public function getTimeline(Request $request)
    {
        $data = Post::selectRaw("id, title, slug, published_at, YEAR(published_at) as year")
            ->published()
            ->orderBy('published_at', 'desc')
            ->get()
            ->groupBy('year');

        return $this->success($data);
    }

    public function getBySlug(Request $request, $slug)
    {
        $view_first = $request->get('view_first', '0');

        $data = Post::where('slug', $slug)
            ->with('tagList')
            ->published()
            ->first([
                'id',
                'title',
                'image',
                'excerpt',
                'body',
                'slug',
                'published_at',
                'seo_title',
                'meta_description',
                'meta_keywords',
                'featured',
                'view_num'
            ]);

        if ($view_first == '1') {
            $data->view_num++;
            $data->save();
        }

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
