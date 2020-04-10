<?php

namespace App\Http\Controllers\API\v1;

use App\Model\Friend;
use Illuminate\Http\Request;

class FriendController extends BaseController
{
    public function index(Request $request)
    {
        $data = Friend::approved()->get();

        return $this->success($data);
    }

    public function store(Request $request)
    {

        $data = [
            "name" => $request->input("name", ""),
            "email" => $request->input("email", ""),
            "blogLink" => $request->input("blogLink", ""),
            "notes" => $request->input("notes", "")
        ];

        if (!$data["name"]) {
            return $this->error("423", $data, "The name is null.");
        } else if (!$data["email"]) {
            return $this->error("424", $data, "The email is null.");
        } else if (!$data["blogLink"]) {
            return $this->error("425", $data, "The blogLink is null.");
        } else if (!$data["notes"]) {
            $data["notes"] = "更无一句闲言语";
        }



        $new_data = new Friend;
        $new_data->label = $data["name"] . "的小站"; // 前端展示标签
        $new_data->nickname = $data["name"]; // 昵称
        $new_data->email = $data["email"]; // 联系邮箱
        $new_data->bloglink = $data["blogLink"]; // 博客链接
        $new_data->notes = $data["notes"]; // 备注
        $new_data->status = Friend::STATUS_PENDING; // 审核状态
        $new_data->save();

        return $this->success($new_data);
    }
}
