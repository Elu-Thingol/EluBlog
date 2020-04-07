(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-hitokoto-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/hitokoto.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/hitokoto.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hitokoto',
  data: function data() {
    return {
      hitokoto: {}
    };
  },
  created: function created() {
    this.getHitokoto();
  },
  methods: {
    getHitokoto: function getHitokoto() {
      var _this = this; // 定义请求


      var settings = {
        method: "get",
        url: "https://v1.hitokoto.cn",
        params: {
          encode: "json",
          charset: "utf-8"
        },
        dataType: "json",
        crossDomain: true,
        cache: false
      }; // 发起请求

      axios(settings)["catch"](function (e) {
        if (e.response) {
          //请求已发出，服务器返回状态码不是2xx。
          console.info(e.response.data);
          console.info(e.response.status);
          console.info(e.response.headers);
        } else if (e.request) {
          // 请求已发出，但没有收到响应
          // e.request 在浏览器里是一个XMLHttpRequest实例，
          // 在node中是一个http.ClientRequest实例
          console.info(e.request);
        } else {
          //发送请求时异常，捕捉到错误
          console.info("error", e.message);
        }

        console.info(e.config);
      }).then(function (res) {
        if (!_this._.isEmpty(res)) {
          _this.hitokoto = res.data;
          console.log(_this.hitokoto);
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/hitokoto.vue?vue&type=template&id=64776fe6&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/hitokoto.vue?vue&type=template&id=64776fe6&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "hitokoto" }, [
    !_vm._.isEmpty(_vm.hitokoto)
      ? _c("p", { staticStyle: { "text-align": "right" } }, [
          _c(
            "span",
            { staticStyle: { color: "#3399ea", "padding-right": "5em" } },
            [_c("em", [_vm._v(_vm._s(_vm.hitokoto.hitokoto))])]
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "span",
            { staticStyle: { color: "#9EA19F", "padding-right": "1em" } },
            [
              _c("em", [
                !_vm._.isEmpty(_vm.hitokoto.from)
                  ? _c("small", [
                      _vm._v(
                        "—— 《" +
                          _vm._s(_vm.hitokoto.from) +
                          "》" +
                          _vm._s(_vm.hitokoto.from_who)
                      )
                    ])
                  : !_vm._.isEmpty(_vm.hitokoto.from_who)
                  ? _c("small", [_vm._v("—— " + _vm._s(_vm.hitokoto.from_who))])
                  : _c("small")
              ])
            ]
          )
        ])
      : _c("p", { staticStyle: { "text-align": "right" } }, [
          _vm._m(0),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _vm._m(1)
        ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      { staticStyle: { color: "#3399ea", "padding-right": "5em" } },
      [_c("em", [_vm._v("If you can't win the game, change the rules.")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      { staticStyle: { color: "#9EA19F", "padding-right": "1em" } },
      [_c("em", [_c("small", [_vm._v("—— 《Leann》")])])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/hitokoto.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/hitokoto.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hitokoto_vue_vue_type_template_id_64776fe6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hitokoto.vue?vue&type=template&id=64776fe6&scoped=true& */ "./resources/js/components/hitokoto.vue?vue&type=template&id=64776fe6&scoped=true&");
/* harmony import */ var _hitokoto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hitokoto.vue?vue&type=script&lang=js& */ "./resources/js/components/hitokoto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _hitokoto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _hitokoto_vue_vue_type_template_id_64776fe6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _hitokoto_vue_vue_type_template_id_64776fe6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "64776fe6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/hitokoto.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/hitokoto.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/hitokoto.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hitokoto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/babel-loader/lib??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./hitokoto.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/hitokoto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hitokoto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/hitokoto.vue?vue&type=template&id=64776fe6&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/hitokoto.vue?vue&type=template&id=64776fe6&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hitokoto_vue_vue_type_template_id_64776fe6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./hitokoto.vue?vue&type=template&id=64776fe6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/hitokoto.vue?vue&type=template&id=64776fe6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hitokoto_vue_vue_type_template_id_64776fe6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hitokoto_vue_vue_type_template_id_64776fe6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);