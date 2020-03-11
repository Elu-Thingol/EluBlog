<?php

namespace App\Http\Controllers\API\v1;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BaseController extends Controller
{
    //成功返回
    public function success($data, $msg = "ok")
    {
        $this->parseNull($data);
        $result = [
            "code" => 0,
            "msg" => $msg,
            "data" => $data,
            'timestamp' => Carbon::now()->timestamp
        ];
        return response()->json($result, 200);
    }


    //失败返回
    public function error($code = "422", $data = "", $msg = "fail")
    {
        $this->parseNull($data);
        $result = [
            "code" => $code,
            "message" => $msg,
            "data" => $data
        ];
        return response()->json($result, 200);
    }

    // 如果返回的数据中有 null 则那其值修改为空 （安卓和IOS 对null型的数据不友好，会报错）
    private function parseNull(&$data)
    {
        if (is_array($data)) {
            foreach ($data as &$v) {
                $this->parseNull($v);
            }
        } else {
            if (is_null($data)) {
                $data = "";
            }
        }
    }

    public function index()
    {
        $data = [
            "获取全部文章" => route('posts.list', ['page' => 1, 'per_page' => 20, 'feature' => 1]),
            "结果排序" => route('posts.list', ['sortby' => 'name', 'order' => 'asc_or_desc']),
            "根据slug获取文章" => route('posts.get', ['slug' => 'slug']),
            "校验并获取文章slug" => route('posts.slug', ['title' => 'title', 'slug' => 'slug']),

            "获取全部分类" => route('categories'),
            "获取分类下文章" => route('categories', ['id' => 1]),

            "获取全部标签" => route('tags'),
            "获取标签下文章" => route('tags', ['id' => 1]),

            "获取指定文章评论" => route('comments', ['post_id' => 'slug']),

            "注册用户" => route('users'),
            "登录用户" => route('users'),
            "用户认证" => route('users'),
            "修改资料" => route('users'),
            "注销用户" => route('users'),
        ];

        return $this->success($data);
    }
}
