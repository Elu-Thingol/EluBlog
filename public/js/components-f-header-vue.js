(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-f-header-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/f-header.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--13-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/f-header.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "vuex");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} //
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
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'f-header',
  data: function data() {
    return {
      defaultIndex: '/home'
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    site: 'info/getSite'
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    setSearch: 'SET_SEARCH_DIALOG_VISIBLE'
  }), {
    activeIndex: function activeIndex() {
      var index = this.$route.path;

      if (["/home", "/archive", "/about"].indexOf(index) === -1) {
        index = this.defaultIndex;
      }

      return index;
    },
    toggleLang: function toggleLang(lang) {
      if (lang === 'zh') {
        localStorage.setItem('locale', 'zh');
        this.$i18n.locale = localStorage.getItem('locale');
        this.$message({
          message: '切换为中文！',
          type: 'success'
        });
      } else if (lang === 'en') {
        localStorage.setItem('locale', 'en');
        this.$i18n.locale = localStorage.getItem('locale');
        this.$message({
          message: 'Switch to English!',
          type: 'success'
        });
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/f-header.vue?vue&type=style&index=0&id=798435c2&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/f-header.vue?vue&type=style&index=0&id=798435c2&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* .el-menu {\r\n    background-color: #555;\r\n    color: #ddd;\r\n} */\n.el-menu-item.is-active[data-v-798435c2] {\r\n    /* color: #fff; */\r\n    color: #fff;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/f-header.vue?vue&type=style&index=0&id=798435c2&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/f-header.vue?vue&type=style&index=0&id=798435c2&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/vue-loader/lib??vue-loader-options!./f-header.vue?vue&type=style&index=0&id=798435c2&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/f-header.vue?vue&type=style&index=0&id=798435c2&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/f-header.vue?vue&type=template&id=798435c2&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/f-header.vue?vue&type=template&id=798435c2&scoped=true& ***!
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
  return _c(
    "div",
    [
      _c(
        "el-menu",
        {
          staticClass: "d-flex",
          attrs: {
            "default-active": _vm.activeIndex(),
            mode: "horizontal",
            router: "",
            type: "flex",
            "background-color": "#545c64",
            "text-color": "#fff",
            "active-text-color": "#ffd04b"
          }
        },
        [
          _c(
            "el-menu-item",
            { staticClass: "mr-auto" },
            [
              _c(
                "transition",
                { attrs: { name: "el-fade-in-linear" } },
                [
                  _c("router-link", { attrs: { to: "/home", tag: "span" } }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm._.isEmpty(_vm.site) ? "" : _vm.site.title) +
                        "\n                "
                    )
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-menu-item",
            [
              _c("el-button", {
                attrs: { type: "text", icon: "el-icon-search" },
                on: {
                  click: function($event) {
                    return _vm.setSearch({ show: true })
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("el-menu-item", { attrs: { index: "/home" } }, [
            _vm._v(_vm._s(_vm.$t("header.home")))
          ]),
          _vm._v(" "),
          _c("el-menu-item", { attrs: { index: "/archive" } }, [
            _vm._v(_vm._s(_vm.$t("header.archive")))
          ]),
          _vm._v(" "),
          _c("el-menu-item", { attrs: { index: "/about" } }, [
            _vm._v(_vm._s(_vm.$t("header.about")))
          ]),
          _vm._v(" "),
          _c(
            "el-submenu",
            { attrs: { index: "/home" } },
            [
              _c("template", { slot: "title" }, [
                _vm._v(_vm._s(_vm.$t("header.language")))
              ]),
              _vm._v(" "),
              _c(
                "el-menu-item",
                {
                  on: {
                    click: function($event) {
                      return _vm.toggleLang("zh")
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("header.chinaese")))]
              ),
              _vm._v(" "),
              _c(
                "el-menu-item",
                {
                  on: {
                    click: function($event) {
                      return _vm.toggleLang("en")
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("header.english")))]
              )
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/f-header.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/f-header.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _f_header_vue_vue_type_template_id_798435c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./f-header.vue?vue&type=template&id=798435c2&scoped=true& */ "./resources/js/components/f-header.vue?vue&type=template&id=798435c2&scoped=true&");
/* harmony import */ var _f_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./f-header.vue?vue&type=script&lang=js& */ "./resources/js/components/f-header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _f_header_vue_vue_type_style_index_0_id_798435c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./f-header.vue?vue&type=style&index=0&id=798435c2&scoped=true&lang=css& */ "./resources/js/components/f-header.vue?vue&type=style&index=0&id=798435c2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _f_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _f_header_vue_vue_type_template_id_798435c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _f_header_vue_vue_type_template_id_798435c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "798435c2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/f-header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/f-header.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/f-header.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_vue_loader_lib_index_js_vue_loader_options_f_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/babel-loader/lib??ref--13-0!../../../node_modules/vue-loader/lib??vue-loader-options!./f-header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/f-header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_vue_loader_lib_index_js_vue_loader_options_f_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/f-header.vue?vue&type=style&index=0&id=798435c2&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/f-header.vue?vue&type=style&index=0&id=798435c2&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_f_header_vue_vue_type_style_index_0_id_798435c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--8-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/vue-loader/lib??vue-loader-options!./f-header.vue?vue&type=style&index=0&id=798435c2&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/f-header.vue?vue&type=style&index=0&id=798435c2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_f_header_vue_vue_type_style_index_0_id_798435c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_f_header_vue_vue_type_style_index_0_id_798435c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_f_header_vue_vue_type_style_index_0_id_798435c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_f_header_vue_vue_type_style_index_0_id_798435c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_f_header_vue_vue_type_style_index_0_id_798435c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/f-header.vue?vue&type=template&id=798435c2&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/f-header.vue?vue&type=template&id=798435c2&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_f_header_vue_vue_type_template_id_798435c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./f-header.vue?vue&type=template&id=798435c2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/f-header.vue?vue&type=template&id=798435c2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_f_header_vue_vue_type_template_id_798435c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_f_header_vue_vue_type_template_id_798435c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);