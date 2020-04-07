(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-article-markdown-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/article-markdown.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/article-markdown.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var markdown_it_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! markdown-it-vue */ "./node_modules/markdown-it-vue/dist/markdown-it-vue.umd.min.js");
/* harmony import */ var markdown_it_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(markdown_it_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var markdown_it_vue_dist_markdown_it_vue_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! markdown-it-vue/dist/markdown-it-vue.css */ "./node_modules/markdown-it-vue/dist/markdown-it-vue.css");
/* harmony import */ var markdown_it_vue_dist_markdown_it_vue_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(markdown_it_vue_dist_markdown_it_vue_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "articles-markdown",
  // 因为和article标记同名故改为复数形式
  props: {
    // 所有的搜索组件
    content: {
      type: String,
      "default": '（/▽＼）看不见我'
    },
    url: {
      type: String,
      "default": '--- LINK ---'
    }
  },
  components: {
    MarkdownItVue: markdown_it_vue__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  mounted: function mounted() {
    document.getElementById('markdown-it-vue').addEventListener('copy', this.setClipboardText, false);
    this.handleMarkdownItVue();
  },
  methods: {
    /*拷贝内容添加声明*/
    setClipboardText: function setClipboardText(event) {
      event.preventDefault();
      var url = document.URL;
      var node = document.createElement('div');
      node.appendChild(window.getSelection().getRangeAt(0).cloneContents());
      var htmlData = '<div>' + node.innerHTML + "<br/><br/>".concat(this.$t('article.author'), "\uFF1A\u6D1B\u4E5D<br/>") + "".concat(this.$t('article.originalLink'), "\uFF1A").concat(this.url, "<br/>") + "".concat(this.$t('article.copyright'), "\uFF1A\u672C\u535A\u5BA2\u6240\u6709\u6587\u7AE0\u9664\u7279\u522B\u58F0\u660E\u5916,\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904!<br/><br/>") + '</div>';
      var textData = window.getSelection().getRangeAt(0) + "\n\n".concat(this.$t('article.author'), "\uFF1A\u6D1B\u4E5D\n") + "".concat(this.$t('article.originalLink'), "\uFF1A").concat(this.url, "\n") + "".concat(this.$t('article.copyright'), "\uFF1A\u672C\u535A\u5BA2\u6240\u6709\u6587\u7AE0\u9664\u7279\u522B\u58F0\u660E\u5916,\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904!\n\n");

      if (event.clipboardData) {
        event.clipboardData.setData('text/html', htmlData);
        event.clipboardData.setData('text/plain', textData);
      } else if (window.clipboardData) {
        return window.clipboardData.setData('text', textData);
      }
    },
    handleMarkdownItVue: function handleMarkdownItVue() {
      this.$emit("handleMarkdownItVue");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/article-markdown.vue?vue&type=template&id=a718399e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/article-markdown.vue?vue&type=template&id=a718399e& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("markdown-it-vue", {
        staticClass: "md-body",
        attrs: { id: "markdown-it-vue", content: _vm.content }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/article-markdown.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/article-markdown.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _article_markdown_vue_vue_type_template_id_a718399e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-markdown.vue?vue&type=template&id=a718399e& */ "./resources/js/components/article-markdown.vue?vue&type=template&id=a718399e&");
/* harmony import */ var _article_markdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-markdown.vue?vue&type=script&lang=js& */ "./resources/js/components/article-markdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _article_markdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _article_markdown_vue_vue_type_template_id_a718399e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _article_markdown_vue_vue_type_template_id_a718399e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/article-markdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/article-markdown.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/article-markdown.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_article_markdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/babel-loader/lib??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./article-markdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/article-markdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_article_markdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/article-markdown.vue?vue&type=template&id=a718399e&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/article-markdown.vue?vue&type=template&id=a718399e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_article_markdown_vue_vue_type_template_id_a718399e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./article-markdown.vue?vue&type=template&id=a718399e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/article-markdown.vue?vue&type=template&id=a718399e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_article_markdown_vue_vue_type_template_id_a718399e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_article_markdown_vue_vue_type_template_id_a718399e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);