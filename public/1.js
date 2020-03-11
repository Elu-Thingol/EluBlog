(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/helpers.js":
/*!*********************************!*\
  !*** ./resources/js/helpers.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* jshint esversion: 6 */
window._ = window.lodash = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
window.$ = window.jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
/* harmony default export */ __webpack_exports__["default"] = ({
  initJQV: function initJQV(jqs) {
    /**
     * 校验文本是否为空
     * tips：提示信息
     * 使用方法：jqs("#id").validate("提示文本");
     */
    jqs.fn.validate = function (tips) {
      if (jqs(this).val() == "" || jqs.trim(jqs(this).val()).length == 0) {
        alert(tips + "不能为空！");
        throw SyntaxError(); //如果验证不通过，则不执行后面
      }
    };
    /**
     * 向服务器发送slug进行验证
     * 或者获取新的slug
     * 使用方法：jqs("#id").validate_slug("标题");
     */


    jqs.fn.validate_slug = function (title) {
      console.log(this);
      console.log(jqs(this).val());
      slug = jqs(this).val();
      jqs.ajax({
        type: "GET",
        url: "/api/v1/posts/slug",
        cache: false,
        data: "title=" + title + "&slug=" + slug,
        //传参
        dataType: "json",
        //返回值类型
        context: this,
        success: function success(msg) {
          if (msg.data.reset === 1) {
            jqs(this).val(msg.data.slug);
          }
        }
      });
    };

    console.log("???!!!@@@");
  }
});

/***/ })

}]);