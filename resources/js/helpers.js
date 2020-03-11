window._ = window.lodash = require("lodash");
window.$ = window.jquery = require("jquery");
window.axios = require("axios");

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
/**
 * 校验文本是否为空
 * tips：提示信息
 * 使用方法：$("#id").validate("提示文本");
 */
$.fn.validate = function(tips) {
    if ($(this).val() == "" || $.trim($(this).val()).length == 0) {
        alert(tips + "不能为空！");
        throw SyntaxError(); //如果验证不通过，则不执行后面
    }
};

/**
 * 向服务器发送slug进行验证
 * 或者获取新的slug
 * 使用方法：$("#id").validate_slug("标题");
 */
$.fn.validate_slug = function(title) {
    slug = $(this).val();
    $.ajax({
        type: "GET",
        url: "/api/v1/posts/slug",
        cache: false,
        data: "title=" + title + "&slug=" + slug, //传参
        dataType: "json", //返回值类型
        context: this,
        success: function(msg) {
            if (msg.data.reset === 1) {
                $(this).val(msg.data.slug);
            }
        }
    });
};
