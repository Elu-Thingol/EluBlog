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
            "timestamp" => Carbon::now()->timestamp
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

    public function index(Request $request)
    {
        $data = [
            "获取全部文章" => route("posts.index", ["page" => 1, "per_page" => 20]),
            "结果排序" => route("posts.index", ["sortby" => "title", "order" => "asc_or_desc"]),
            "获取文章时间线" => route("posts.timeline.index"),
            "根据slug获取文章" => route("posts.show", ["slug" => "slug"]),
            "生成新的文章slug并校验" => route("posts.slug.show", ["title" => "title"]),

            "获取全部标签" => route("tags.index"),
            "获取标签下文章" => route("tags.show", ["tag" => "tag"]),

            "提交用户留言" => route("feedback.store"),

            "获取友链列表" => route("friends.index"),
            "提交友链申请" => route("friends.store"),

            "相关信息" => route("infos.index"),
        ];

        return $this->success($data);
    }
}
