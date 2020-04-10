<?php

namespace App\Http\Controllers\API\v1;

use App\Model\Feedback;
use Illuminate\Http\Request;

class FeedbackController extends BaseController
{
    public function store(Request $request)
    {
        $data = [
            "name" => $request->input("name", ""),
            "email" => $request->input("email", ""),
            "content" => $request->input("content", ""),
        ];

        if (!$data["name"]) {
            return $this->error("426", $data, "The name is null.");
        } else if (!$data["email"]) {
            return $this->error("427", $data, "The email is null.");
        } else if (!$data["content"]) {
            return $this->error("428", $data, "The content is null.");
        }

        $new_data = new Feedback;
        $new_data->name = $data["name"]; // 称谓
        $new_data->email = $data["email"]; // 邮箱
        $new_data->content = $data["content"]; // 内容
        $new_data->save();

        return $this->success($new_data);
    }
}
