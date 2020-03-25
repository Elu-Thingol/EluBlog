<?php

namespace App\Http\Controllers\API\v1;

use App\Model\Tag;
use Illuminate\Http\Request;

class TagController extends BaseController
{
    public function index(Request $request)
    {
        $data = Tag::withCount('posts')
            ->get();

        return $this->success($data);
    }

    public function getByTag(Request $request, $tag)
    {
        $data = Tag::where('name', $tag)
            ->with('posts')
            ->get();

        return $this->success($data);
    }
}
