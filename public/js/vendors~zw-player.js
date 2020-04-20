(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~zw-player"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/zw-player/player.css?vue&type=style&index=0&id=9d425874&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/zw-player/player.css?vue&type=style&index=0&id=9d425874&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*[data-v-9d425874]{\r\n    padding: 0px;\r\n    margin: 0px;\r\n    text-decoration: none;\r\n    font-family: Consolas,'\\5FAE\\8F6F\\96C5\\9ED1';\r\n    box-sizing: border-box;\n}\n.bbox[data-v-9d425874]{\r\n    width: 300px;\r\n    height: 300px;\r\n    border-radius: 5px;\r\n    position: fixed;\r\n    z-index: 500;\r\n    bottom: 50px;\r\n    right: 30px;\n}\n.box[data-v-9d425874]{\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    background-size: 100% 100%;\r\n    border-radius: 5px;\r\n    transition: all .5s;\r\n    opacity: 0;\n}\n.music_shlter[data-v-9d425874]{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    -webkit-filter: blur(15px);\r\n            filter: blur(15px);\r\n    background-size: 100% 100%;\r\n    transition: all .5s;\r\n    z-index: 99;\r\n    opacity: 0;\n}\n.music_shlter_2[data-v-9d425874]{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    -webkit-filter: blur(5px);\r\n            filter: blur(5px);\r\n    background-size: 100% 100%;\r\n    transition: all .5s;\r\n    opacity: 0;\n}\n.music_dis[data-v-9d425874]{\r\n    width: 100%;\r\n    height: 240px;\r\n    position: relative;\n}\n.dis_list[data-v-9d425874]{\r\n    position: absolute;\r\n    right:10px;\r\n    top: 10px;\r\n    width: 40px;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    font-size: 12px;\r\n    color: white;\n}\n.pan[data-v-9d425874]{\r\n    width: 100px;\r\n    height: 100px;\r\n    background-size: 100% 100%;\r\n    position: absolute;\r\n    left: 200px;\r\n    top: 200px;\r\n    padding: 16px;\r\n    -webkit-animation: pan-data-v-9d425874 10s linear infinite;\r\n            animation: pan-data-v-9d425874 10s linear infinite;\r\n    z-index: 103;\r\n    transition: all .5s;\r\n    cursor: pointer;\r\n    border-radius: 100%;\n}\n.pan[data-v-9d425874]:hover{\r\n    box-shadow: 0px 0px 10px rgb(100,100,100);\r\n    opacity: 1;\n}\n.pan_c[data-v-9d425874]{\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 100%;\n}\n.music_title[data-v-9d425874]{\r\n    width: 100%;\r\n    height: 40px;\r\n    text-align: center;\r\n    color: white;\r\n    line-height: 60px;\r\n    font-size: 15px;\n}\n.music_intro[data-v-9d425874]{\r\n    width: 100%;\r\n    height: 40px;\r\n    text-align: center;\r\n    color: rgba(255,255,255,0.6);\r\n    line-height: 30px;\r\n    font-size: 12px;\n}\n.music_words_box[data-v-9d425874]{\r\n    width: 100%;\r\n    height: auto;\r\n    position: absolute;\r\n    top: 0px;\r\n    transition: all .5s;\n}\n.music_words[data-v-9d425874]{\r\n    width: 80%;\r\n    height: 160px;\r\n    margin: auto;\r\n    color: rgba(255,255,255,0.6);\r\n    text-align: center;\r\n    overflow: hidden;\r\n    position: relative;\n}\n.music_words li[data-v-9d425874]{\r\n    list-style: none;\r\n    font-size: 12px;\r\n    margin-top: 5px;\r\n    min-height: 18px;\n}\n.control_box[data-v-9d425874]{\r\n    width: 90%;\r\n    height: 60px;\r\n    position: relative;\r\n    margin: auto;\n}\n.control_button[data-v-9d425874]{\r\n    width: 14px;\r\n    height: 14px;\r\n    position: absolute;\r\n    left: 20px;\r\n    bottom: 15px;\n}\n.control_icon[data-v-9d425874]{\r\n    height: 100%;\r\n    cursor: pointer;\n}\n.progress[data-v-9d425874]{\r\n    width: 150px;\r\n    height: 4px;\r\n    border-radius: 10px;\r\n    background-color: rgb(194,194,196);\r\n    cursor: pointer;\r\n    margin-top: 18px;\r\n    position: absolute;\r\n    left: 0px;\r\n    right: 0px;\r\n    margin: auto;\r\n    bottom: 20px;\n}\n.progress_c[data-v-9d425874]{\r\n    width: 50%;\r\n    height: 100%;\r\n    background-color: rgb(232,60,60);\r\n    transition: all .2s;\r\n    position: relative;\r\n    border-radius: 10px;\r\n    max-width: 100%;\n}\n.progress_circle[data-v-9d425874]{\r\n    position: absolute;\r\n    width: 15px;\r\n    height: 15px;\r\n    right: -7.5px;\r\n    top: -5.5px;\r\n    background-color: white;\r\n    border: 1px solid rgb(220,220,220);\r\n    border-radius: 100%;\n}\n.progress_circle_c[data-v-9d425874]{\r\n    width: 5px;\r\n    height: 5px;\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    bottom: 0px;\r\n    right: 0px;\r\n    margin: auto;\r\n    background-color: rgb(232,60,60);\r\n    border-radius: 100%;\n}\n.word_highlight[data-v-9d425874]{\r\n    color: white;\n}\n.pan_active[data-v-9d425874]{\r\n    width: 40px;\r\n    height: 40px;\r\n    background-size: 100% 100%;\r\n    position: absolute;\r\n    left: 10px;\r\n    top: 10px;\r\n    padding: 6px;\r\n    opacity: 0.8;\r\n    z-index: 103;\n}\n.box_active[data-v-9d425874]{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-size: 100% 100%;\r\n    border-radius: 5px;\r\n    overflow: unset;\r\n    /* older safari/Chrome browsers */\r\n    -webkit-opacity: 1;\r\n    /* Netscape and Older than Firefox 0.9 */\r\n    -moz-opacity: 1;\r\n    /* Safari 1.x (pre WebKit!) 老式khtml内核的Safari浏览器*/\r\n    -khtml-opacity: 1;\r\n    /* IE9 + etc...modern browsers */\r\n    opacity: 1;\r\n    /* IE 4-9 */\r\n    filter:alpha(opacity=100);\r\n    /*This works in IE 8 & 9 too*/\r\n    -ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\r\n    /*IE4-IE9*/\r\n    filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n}\n.shlter_active[data-v-9d425874]{\r\n    opacity: 1;\r\n    z-index: unset;\n}\n.dis_list-enter[data-v-9d425874],.dis_list-leave-to[data-v-9d425874]{\r\n    opacity: 0;\n}\n.list_box[data-v-9d425874]{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    background: -webkit-radial-gradient(center, ellipse cover, #353138 0%,#1a181c 100%);\r\n    z-index: 499;\r\n    transition: all .5s;\n}\n.music_alert-enter[data-v-9d425874],.music_alert-leave-to[data-v-9d425874]{\r\n    transform: translateY(-30px);\r\n    opacity: 0;\n}\n.music_alert[data-v-9d425874]{\r\n    position: absolute;\r\n    top: 30px;\r\n    left: 0px;\r\n    right: 0px;\r\n    margin: auto;\r\n    padding: 10px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    width: 200px;\r\n    height: auto;\r\n    border-radius: 2px;\r\n    background-color: white;\r\n    text-align: center;\r\n    transition: all .5s;\r\n    color: black;\r\n    font-size: 12px;\n}\n.list_close[data-v-9d425874]{\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 20px;\r\n    width: 40px;\r\n    height: 40px;\r\n    text-align: center;\r\n    line-height: 40px;\r\n    color: rgba(225,225,225,0.9);\r\n    cursor: pointer;\r\n    font-size: 20px;\n}\n.music_list[data-v-9d425874]{\r\n    width: 1200px;\r\n    height: 840px;\r\n    position: absolute;\r\n    left: 0px;\r\n    right: 0px;\r\n    bottom: 50px;\r\n    margin: auto;\r\n    border-radius: 5px;\n}\n.list_l[data-v-9d425874]{\r\n    width: 950px;\r\n    height: 100%;\r\n    float: left;\r\n    padding: 50px;\r\n    box-sizing: border-box;\r\n    position: relative;\n}\n.list_title[data-v-9d425874]{\r\n    width: 100%;\r\n    height: 40px;\r\n    color: white;\r\n    position: relative;\n}\n.music_state[data-v-9d425874]{\r\n    width: 15px;\r\n    margin-left: 40px;\r\n    cursor: pointer;\n}\n.music_search_box[data-v-9d425874]{\r\n    position: absolute;\r\n    right: 0px;\r\n    top: 0px;\r\n    width: 250px;\r\n    height: 25px;\r\n    z-index: 500;\n}\n.music_search[data-v-9d425874]{\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 0px;\r\n    outline: none;\r\n    background-color: rgba(225,225,225,0.9);\r\n    border-radius: 2px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    font-size: 12px;\n}\n.search_list[data-v-9d425874]{\r\n    width: 100%;\r\n    height: auto;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    top: 28px;\r\n    background-color: rgba(255,255,255,0.9);\r\n    border-radius: 2px;\r\n    transition: all .5s;\n}\n.search_list li[data-v-9d425874]{\r\n    width: 100%;\r\n    height: 25px;\r\n    line-height: 25px;\r\n    color: rgba(26,24,28,0.8);\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    cursor: pointer;\r\n    transition: all .5s;\r\n    font-size: 12px;\n}\n.search_list li[data-v-9d425874]:hover{\r\n    background-color: rgba(200,200,200)\n}\n.music_search_name[data-v-9d425874]{\r\n    width: 55%;\r\n    float: left;\r\n    height: 100%;\r\n    overflow: hidden;\n}\n.music_search_ar[data-v-9d425874]{\r\n    margin-left: 5%;\r\n    width: 40%;\r\n    float: left;\r\n    height: 100%;\r\n    overflow: hidden;\n}\n.music_search-enter-active[data-v-9d425874],\r\n.music_search-enter[data-v-9d425874],.music_search-leave-to[data-v-9d425874]{\r\n    opacity: 0;\n}\n.list[data-v-9d425874]{\r\n    width: 100%;\r\n    height: 620px;\r\n    list-style: none;\n}\n.music_ul_title[data-v-9d425874]{\r\n    width: 100%;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    border-radius: 2px;\r\n    border: 0px;\n}\n.list li[data-v-9d425874]{\r\n    width: 100%;\r\n    height: 60px;\r\n    line-height: 60px;\r\n    border-bottom: 1px solid rgba(150,150,150,0.1);\r\n    transition: all .5s;\r\n    position: relative;\n}\n.this_music_shlter[data-v-9d425874]{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    z-index: -1;\r\n    background-color: rgba(26,24,28,0.5);\n}\n.list li[data-v-9d425874]:hover{\r\n    background-color: rgba(26,24,28,0.3);\n}\n.list li span[data-v-9d425874],.music_ul_title span[data-v-9d425874]{\r\n    display: block;\r\n    width: 200px;\r\n    height: 100%;\r\n    margin-left: 20px;\r\n    color: rgba(225,225,225,0.8);\r\n    font-size: 12px;\r\n    float: left;\r\n    overflow: hidden;\n}\n.music_button[data-v-9d425874]{\r\n    width: 150px;\r\n    height: 60px;\r\n    position: absolute;\r\n    right: 0px;\r\n    transition: all .5s;\n}\n.list_play[data-v-9d425874]{\r\n    width: 28px;\r\n    height: 28px;\r\n    background-size: 100% 100%;\r\n    margin-top: 16px;\r\n    cursor: pointer;\r\n    opacity: 0.5;\r\n    transition: all .5s;\r\n    float: left;\r\n    margin-left: 10px;\n}\n.list_play[data-v-9d425874]:first-child{\r\n    margin-left: 0px;\n}\n.list_play[data-v-9d425874]:hover{\r\n    opacity: 1;\n}\n.list_button-enter[data-v-9d425874],.list_button-leave-to[data-v-9d425874]{\r\n    opacity: 0;\n}\n.list_page[data-v-9d425874]{\r\n    width: 100%;\r\n    height: 40px;\r\n    position: relative;\n}\n.page_last[data-v-9d425874]{\r\n    position: absolute;\r\n    left: 0px;\r\n    width: 40px;\r\n    height: 40px;\r\n    text-align: center;\r\n    line-height: 40px;\r\n    font-size: 15px;\r\n    cursor: pointer;\r\n    color: white;\r\n    -moz-user-select:none; /*火狐*/\r\n    -webkit-user-select:none; /*webkit浏览器*/\r\n    -ms-user-select:none; /*IE10*/\r\n    user-select:none;\n}\n.page_next[data-v-9d425874]{\r\n    position: absolute;\r\n    right: 0px;\r\n    width: 40px;\r\n    height: 40px;\r\n    text-align: center;\r\n    line-height: 40px;\r\n    font-size: 15px;\r\n    cursor: pointer;\r\n    color: white;\r\n    -moz-user-select:none; /*火狐*/\r\n    -webkit-user-select:none; /*webkit浏览器*/\r\n    -ms-user-select:none; /*IE10*/\r\n    user-select:none;\n}\n.list_r[data-v-9d425874]{\r\n    width: 250px;\r\n    height: 100%;\r\n    float: left;\r\n    position: relative;\n}\n.music_list_bg[data-v-9d425874]{\r\n    width: 170px;\r\n    display: block;\r\n    margin-top: 90px;\r\n    -moz-user-select:none; /*火狐*/\r\n    -webkit-user-select:none; /*webkit浏览器*/\r\n    -ms-user-select:none; /*IE10*/\r\n    user-select:none;\n}\n.music_list_shlter[data-v-9d425874]{\r\n    width: 200px;\r\n    height: 170px;\r\n    background-size: 100% 100%;\r\n    position: absolute;\r\n    top: 90px;\r\n    left: 0px;\n}\n.music_type[data-v-9d425874]{\r\n    width: 120px;\r\n    height: auto;\r\n    overflow: hidden;\r\n    list-style: none;\r\n    position: absolute;\r\n    left: -120px;\r\n    top: 90px;\n}\n.music_type li[data-v-9d425874]{\r\n    width: 100%;\r\n    height: 35px;\r\n    border: 1px solid rgba(225,225,225,0.6);\r\n    color: rgba(225,225,225,0.6);\r\n    line-height: 35px;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n    border-radius: 3px;\r\n    margin-top: 20px;\r\n    cursor: pointer;\r\n    transition: all .5s;\r\n    font-size: 12px;\n}\n.music_type li[data-v-9d425874]:first-child{\r\n    margin-top: 0px;\n}\n.music_type li[data-v-9d425874]:hover{\r\n    border: 1px solid rgba(225,225,225,1);\r\n    color: rgba(225,225,225,1);\n}\n.type_active[data-v-9d425874]{\r\n    border: 1px solid rgba(225,225,225,1) !important;\r\n    color: rgba(225,225,225,1) !important;\n}\n@-webkit-keyframes pan-data-v-9d425874{\n0%{\r\n        transform: rotate(0deg);\n}\n100%{\r\n        transform: rotate(360deg);\n}\n}\n@keyframes pan-data-v-9d425874{\n0%{\r\n        transform: rotate(0deg);\n}\n100%{\r\n        transform: rotate(360deg);\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/zw-player/playermobile.css?vue&type=style&index=1&id=9d425874&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/zw-player/playermobile.css?vue&type=style&index=1&id=9d425874&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/zw-player/player.css?vue&type=style&index=0&id=9d425874&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/zw-player/player.css?vue&type=style&index=0&id=9d425874&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../css-loader??ref--8-1!../vue-loader/lib/loaders/stylePostLoader.js!../postcss-loader/src??ref--8-2!./player.css?vue&type=style&index=0&id=9d425874&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/zw-player/player.css?vue&type=style&index=0&id=9d425874&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/zw-player/playermobile.css?vue&type=style&index=1&id=9d425874&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/zw-player/playermobile.css?vue&type=style&index=1&id=9d425874&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../css-loader??ref--8-1!../vue-loader/lib/loaders/stylePostLoader.js!../postcss-loader/src??ref--8-2!./playermobile.css?vue&type=style&index=1&id=9d425874&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/zw-player/playermobile.css?vue&type=style&index=1&id=9d425874&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/zw-player/player.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/zw-player/player.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_music__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/music */ "./node_modules/zw-player/api/music.js");
/* harmony import */ var _img_pan_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/pan.png */ "./node_modules/zw-player/img/pan.png");
/* harmony import */ var _img_pan_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_pan_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_play_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/play.png */ "./node_modules/zw-player/img/play.png");
/* harmony import */ var _img_play_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_play_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_pause_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/pause.png */ "./node_modules/zw-player/img/pause.png");
/* harmony import */ var _img_pause_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_pause_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_add_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/add.png */ "./node_modules/zw-player/img/add.png");
/* harmony import */ var _img_add_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_add_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_list_pan_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/list_pan.png */ "./node_modules/zw-player/img/list_pan.png");
/* harmony import */ var _img_list_pan_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_list_pan_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_list_play_hover_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/list_play_hover.png */ "./node_modules/zw-player/img/list_play_hover.png");
/* harmony import */ var _img_list_play_hover_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_list_play_hover_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_state_0_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/state_0.png */ "./node_modules/zw-player/img/state_0.png");
/* harmony import */ var _img_state_0_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_state_0_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_state_1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/state_1.png */ "./node_modules/zw-player/img/state_1.png");
/* harmony import */ var _img_state_1_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_state_1_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
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
    name:'Player',
    data() {
        return {
            o:0,
            top:0,
            pan: (_img_pan_png__WEBPACK_IMPORTED_MODULE_1___default()),
            play: (_img_play_png__WEBPACK_IMPORTED_MODULE_2___default()),
            pause: (_img_pause_png__WEBPACK_IMPORTED_MODULE_3___default()),
            add: (_img_add_png__WEBPACK_IMPORTED_MODULE_4___default()),
            shlter: (_img_list_pan_png__WEBPACK_IMPORTED_MODULE_5___default()),
            listPlay: (_img_list_play_hover_png__WEBPACK_IMPORTED_MODULE_6___default()),
            state0: (_img_state_0_png__WEBPACK_IMPORTED_MODULE_7___default()),
            state1: (_img_state_1_png__WEBPACK_IMPORTED_MODULE_8___default()),
            playState:true,
            playIcon:_img_pause_png__WEBPACK_IMPORTED_MODULE_3___default.a,
            musicImg:'',
            musicUrl:'',
            musicWords:[],
            musicTitle:'',
            musicName:'',
            wordsTime:[],
            wordsTop:0,
            wordIndex:0,
            currentProgress:'0%',
            musicList:[],
            myMusicList:[],   //存储在本地   可以开始判断有没有 让用户一开始就听这个列表
            thisMusicIndex:1,
            disActive:false,
            listIsDis:false,
            listButtonActiveIndex:-1,
            thisListPage:1,
            musicTypeList:[
                {name:'热歌榜',id:1},
                {name:'新歌榜',id:0},
                {name:'飙升榜',id:3},
                {name:'嘻哈榜',id:18},
                {name:'My Songs',id:-1}
            ],
            thisMusicType:-1,
            notPlay:[],
            musicState:0, //0列表循环  1单曲循环
            musicStateButton:_img_state_1_png__WEBPACK_IMPORTED_MODULE_8___default.a,
            musicSearchVal:'',
            musicSearchList:[],
            musicAlertVal:'',
            musicAlertState:false,
            musicAlertTimer:''
        }
    },
    mounted() {
        this.Player();
        
        
    },
    created() {
        this._getMusicType(1);
        this.DisAuthorInfo();//禁删~感谢配合
    },
    computed: {
        thisMusicList(){
            return [...this.musicList].splice((this.thisListPage-1)*10,10);  //分页
        },
        
    },
    watch: {
        musicSearchVal(){
            if(this.musicSearchVal==''){
                this.musicSearchList=[];
            }else{
                Object(_api_music__WEBPACK_IMPORTED_MODULE_0__["getSearchSuggest"])(this.musicSearchVal).then((res)=>{
                    if(res.data.result.songs==undefined){
                        this.musicSearchList=[];
                    }else{
                        this.musicSearchList=res.data.result.songs;
                    }
                })
            }
        }
    },
    methods: {
        //禁删~感谢配合
        DisAuthorInfo(){
            console.log("%c音乐播放器作者----仲威，博客地址：https://blogme.top", "background-color:rgb(30,30,30);border-radius:4px;font-size:12px;padding:4px;color:rgb(220,208,129);");
        },
        MusicAlert(val){
            this.musicAlertState=true;
            this.musicAlertVal=val;
            clearTimeout(this.musicAlertTimer);
            this.musicAlertTimer=setTimeout(()=>{
                this.musicAlertState=false;
                this.musicAlertVal='';
            },2000);
        },
        ListAdd(obj){
            Object(_api_music__WEBPACK_IMPORTED_MODULE_0__["getMusicInfo"])(obj.id).then((res)=>{
                this.musicSearchVal='';
                if(this.myMusicList.length==0){
                    this.myMusicList=[res.data.songs[0]];
                    this._getMusicType(-1);
                    //第一次搜索直接播放
                }else{
                    this.myMusicList.push(res.data.songs[0]);
                    //提示已经添加进去
                    
                }
                this.MusicAlert('添加成功');
            })
        },
        MusicStateChange(){
            if(this.musicState==0){
                this.musicState=1;
                this.musicStateButton=this.state0;
                this.MusicAlert('已切换为单曲循环模式');
            }else{
                this.musicState=0;
                this.musicStateButton=this.state1;
                this.MusicAlert('已切换为列表循环模式');
            }
        },
        DisList(){
            this.listIsDis=this.listIsDis ? false : true;
        },
        ListChange(isLast){
            if(isLast){
                this.thisListPage--;
            }else{
                this.thisListPage++;
            }
        },
        ListPlay(id){   
            if(this.thisMusicIndex!=id){
                this.thisMusicIndex=id>this.musicList.length-1 ? 0 : id;
                this._getInfo();
                this.top=0;
                this.o=0;
                this.wordIndex=0;
                this.wordsTop=0;
                this.currentProgress='0%';
                if(!this.playState){
                    jquery__WEBPACK_IMPORTED_MODULE_9___default()('.control_icon').click();
                }
            }
        },
        ButtonActive(id){
            this.listButtonActiveIndex=id;
        },
        DisActive(){
            this.disActive=this.disActive ? false : true;
        },
        _getMusicType(id){
            if(this.thisMusicType!=id){
                this.notPlay=[];
                if(id==-1){
                    if(this.myMusicList.length!=0){
                        this.musicList=this.myMusicList;
                        this.thisMusicType=id;
                        this.thisMusicIndex=0;
                        this.thisListPage=1;
                        this._getInfo();
                        this.top=0;
                        this.o=0;
                        this.wordIndex=0;
                        this.wordsTop=0;
                        this.currentProgress='0%';
                        if(!this.playState){
                            jquery__WEBPACK_IMPORTED_MODULE_9___default()('.control_icon').click();
                        }
                    }else{//自定义库没有歌曲 提示需要搜索才可以添加
                        this.MusicAlert('没有歌曲,需要自己添加');
                    }
                    
                }else{
                    Object(_api_music__WEBPACK_IMPORTED_MODULE_0__["getHotMusic"])(id).then((res)=>{
                        this.musicList=res.data.playlist.tracks.splice(0,200);
                        this.thisMusicType=id;
                        this.thisMusicIndex=0;
                        this.thisListPage=1;
                        this._getInfo();
                        this.top=0;
                        this.o=0;
                        this.wordIndex=0;
                        this.wordsTop=0;
                        this.currentProgress='0%';
                        if(!this.playState){
                            jquery__WEBPACK_IMPORTED_MODULE_9___default()('.control_icon').click();
                        }
                    })
                }
            }
        },
        _getInfo(){
            Object(_api_music__WEBPACK_IMPORTED_MODULE_0__["getMusicUrl"])(this.musicList[this.thisMusicIndex].id).then((res)=>{
                if(res.data.data[0].url==null || res.data.data[0].url=='' || res.data.data[0].url==undefined){
                    if(this.notPlay.length!=this.musicList.length){

                        let nextIndex=this.thisMusicIndex+1;
                        if(this.notPlay.indexOf(this.thisMusicIndex)==-1){
                            this.notPlay.push(this.thisMusicIndex);
                        }
                        this.MusicAlert(`${this.musicList[this.thisMusicIndex].name}因为一些原因不能播放`);
                        this.ListPlay(nextIndex);//寻找下一首歌  直到找到
                        
                        //提示这首歌不能放
                    }else{
                        //遍历完没有找到
                        console.log('not');
                        this.MusicAlert('此列表所有歌都不能播放');
                    }
                }else{
                    this.musicUrl=res.data.data[0].url.replace('http://','https://');
                    this.musicImg=this.musicList[this.thisMusicIndex].al.picUrl.replace('http://','https://')+'?param=300y300';
                    this.musicTitle=this.musicList[this.thisMusicIndex].name;
                    let name_arr=[];
                    this.musicList[this.thisMusicIndex].ar.forEach((i)=>{
                        name_arr.push(i.name);
                    })
                    this.musicName=name_arr.join('/');
                    Object(_api_music__WEBPACK_IMPORTED_MODULE_0__["getWords"])(this.musicList[this.thisMusicIndex].id).then((res)=>{
                        if(!res.data.nolyric){
                            let info=this.Cut(res.data.lrc.lyric);
                            this.musicWords=info.wordArr;
                            this.wordsTime=info.timeArr;  
                        }
                    })
                }
            })
        },
        Ltrim(s){
            return s.replace(/(^\s*)/g, "");
        },
        Rtrim(s){
            return s.replace(/(\s*$)/g, "");
        },
        //歌词截取函数
        Cut(str){
            let timeArr=[];
            let wordArr=[];
            timeArr=str.split('[');
            timeArr.splice(0,1);
            for(let i=0;i<timeArr.length;i++){
                let cut=timeArr[i].split(']');
                let time=cut[0].split('.')[0].split(':');
                timeArr[i]=Number.parseInt(time[0])*60+Number.parseInt(time[1]);
                timeArr[i]=isNaN(timeArr[i]) ? 0 : timeArr[i]; //处理NaN
                wordArr[i]=this.Rtrim(this.Ltrim(cut[1]));
            }
            return {timeArr:timeArr,wordArr:wordArr}
        },
        Player(){
            let self=this;
            let player=jquery__WEBPACK_IMPORTED_MODULE_9___default()('#music')[0];
            let playerTimer=setInterval(timer,1000);
            //定时器函数
            jquery__WEBPACK_IMPORTED_MODULE_9___default()('body').on('click',()=>{
                player.play();
                jquery__WEBPACK_IMPORTED_MODULE_9___default()('body').unbind('click');
                
            })
            function timer(){
                self.currentProgress=`${(player.currentTime/player.duration)*100}%`
                //接着这里写歌词滚动
                if(player.currentTime>=self.wordsTime[self.o+1]){
                    self.top+=Number.parseInt(jquery__WEBPACK_IMPORTED_MODULE_9___default()('.music_word').eq(self.o).height()+Number.parseInt(jquery__WEBPACK_IMPORTED_MODULE_9___default()('.music_word').eq(self.o).css('marginTop')));
                    if(self.top>=jquery__WEBPACK_IMPORTED_MODULE_9___default()('.music_words').height()/2-11){  //开始滚动的高度
                        self.wordsTop+=-Number.parseInt(jquery__WEBPACK_IMPORTED_MODULE_9___default()('.music_word').eq(self.o).height()+Number.parseInt(jquery__WEBPACK_IMPORTED_MODULE_9___default()('.music_word').eq(self.o).css('marginTop')));
                    }
                    self.wordIndex=self.o+1;
                    self.o++;
                }
                if(player.currentTime>=player.duration){    //切歌
                    if(self.musicList.length!=1){  //只有一首歌  重复播放
                        if(self.musicState==0)
                        {
                            self.thisMusicIndex=self.thisMusicIndex>=self.musicList.length-1 ? 0 : self.thisMusicIndex+1;
                            self._getInfo();
                        }
                    }
                    player.play();
                    self.top=0;
                    self.o=0;
                    self.wordIndex=0;
                    self.wordsTop=0;
                    self.currentProgress='0%';
                }
            }
            //进度条控制
            jquery__WEBPACK_IMPORTED_MODULE_9___default()('.progress').on('mousedown',(ev)=>{
                let e=ev||event;
                let pro=((e.clientX-jquery__WEBPACK_IMPORTED_MODULE_9___default()('.progress').offset().left)/jquery__WEBPACK_IMPORTED_MODULE_9___default()('.progress').width())
                clearInterval(playerTimer);
                this.currentProgress=`${pro*100}%`
                jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).on('mousemove',(ev)=>{
                    let e=ev||event;
                    pro=((e.clientX-jquery__WEBPACK_IMPORTED_MODULE_9___default()('.progress').offset().left)/jquery__WEBPACK_IMPORTED_MODULE_9___default()('.progress').width())
                    this.currentProgress=`${pro*100}%`
                })
                jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).on('mouseup',()=>{
                    player.currentTime=player.duration*pro;
                    let c_arr=[...this.wordsTime];
                    c_arr.push(player.currentTime);
                    c_arr.sort((l,r)=>{
                        return l-r
                    });
                    let now_o=c_arr.indexOf(player.currentTime)-1;
                    let diff_h=0;
                    if(this.o<now_o){
                        for(let i=this.o;i<now_o;i++){
                            diff_h+=-Number.parseInt(jquery__WEBPACK_IMPORTED_MODULE_9___default()('.music_word').eq(i).height()+Number.parseInt(jquery__WEBPACK_IMPORTED_MODULE_9___default()('.music_word').eq(i).css('marginTop')))
                        }
                    }else{
                        for(let i=now_o;i<this.o;i++){
                            diff_h+=Number.parseInt(jquery__WEBPACK_IMPORTED_MODULE_9___default()('.music_word').eq(i).height()+Number.parseInt(jquery__WEBPACK_IMPORTED_MODULE_9___default()('.music_word').eq(i).css('marginTop')))
                        }
                    }
                    this.wordsTop+=diff_h;
                    self.wordIndex=this.o=now_o;
                    clearInterval(playerTimer);
                    playerTimer=setInterval(timer,1000);
                    this.playState=true;
                    this.playIcon=this.pause;
                    if(player.currentTime>=player.duration){
                        this.top=0;
                        this.o=0;
                        this.wordIndex=0;
                        this.wordsTop=0;
                        this.currentProgress='0%';
                    }
                    player.play();
                    jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).unbind('mousemove');
                    jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).unbind('mouseup');
                })
            })
            //播放暂停按钮控制
            jquery__WEBPACK_IMPORTED_MODULE_9___default()('.control_icon').on('click',()=>{
                if(this.playState){
                    player.pause();
                    this.playState=false;
                    this.playIcon=this.play;
                    clearInterval(playerTimer);
                }else{
                    player.play();
                    this.playState=true;
                    this.playIcon=this.pause;
                    clearInterval(playerTimer);
                    playerTimer=setInterval(timer,1000);
                }
            });
        },
        Contorl(){
            let player=jquery__WEBPACK_IMPORTED_MODULE_9___default()('#music')[0];
            player.currentTime=100;
        }
    },
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/zw-player/player.vue?vue&type=template&id=9d425874&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/zw-player/player.vue?vue&type=template&id=9d425874&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
      _c("transition", { attrs: { name: "dis_list" } }, [
        _vm.listIsDis
          ? _c(
              "div",
              { staticClass: "list_box" },
              [
                _c("transition", { attrs: { name: "music_alert" } }, [
                  _vm.musicAlertState
                    ? _c("span", { staticClass: "music_alert" }, [
                        _vm._v(_vm._s(_vm.musicAlertVal))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "list_close", on: { click: _vm.DisList } },
                  [_vm._v("x")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "music_list" }, [
                  _c("div", { staticClass: "list_l" }, [
                    _c(
                      "ul",
                      { staticClass: "music_type" },
                      _vm._l(_vm.musicTypeList, function(item) {
                        return _c(
                          "li",
                          {
                            class: {
                              type_active: item.id == _vm.thisMusicType
                            },
                            on: {
                              click: function($event) {
                                return _vm._getMusicType(item.id)
                              }
                            }
                          },
                          [_vm._v(_vm._s(item.name))]
                        )
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "list_title" }, [
                      _c("span", { staticStyle: { "font-size": "14px" } }, [
                        _vm._v("歌曲列表")
                      ]),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "music_state",
                        attrs: { src: _vm.musicStateButton, alt: "" },
                        on: { click: _vm.MusicStateChange }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "music_search_box" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.musicSearchVal,
                                expression: "musicSearchVal"
                              }
                            ],
                            staticClass: "music_search",
                            attrs: { type: "text", placeholder: "搜索歌曲" },
                            domProps: { value: _vm.musicSearchVal },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.musicSearchVal = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "transition",
                            { attrs: { name: "music_search" } },
                            [
                              _vm.musicSearchVal != ""
                                ? _c(
                                    "ul",
                                    { staticClass: "search_list" },
                                    _vm._l(_vm.musicSearchList, function(item) {
                                      return _c(
                                        "li",
                                        {
                                          on: {
                                            click: function($event) {
                                              return _vm.ListAdd(item)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass: "music_search_name"
                                            },
                                            [_vm._v(_vm._s(item.name))]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "music_search_ar" },
                                            [
                                              _vm._v(
                                                _vm._s(item.artists[0].name)
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    }),
                                    0
                                  )
                                : _vm._e()
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "music_ul_title" }, [
                      _c("span", [_vm._v("歌曲")]),
                      _c("span", [_vm._v("歌手")]),
                      _c("span", [_vm._v("专辑")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "list" },
                      _vm._l(_vm.thisMusicList, function(item, index) {
                        return _c(
                          "li",
                          {
                            on: {
                              mouseover: function($event) {
                                return _vm.ButtonActive(index)
                              },
                              dblclick: function($event) {
                                _vm.ListPlay(
                                  (_vm.thisListPage - 1) * 10 + index
                                )
                              }
                            }
                          },
                          [
                            (_vm.thisListPage - 1) * 10 + index ==
                            _vm.thisMusicIndex
                              ? _c("div", { staticClass: "this_music_shlter" })
                              : _vm._e(),
                            _vm._v(" "),
                            _c("span", [_vm._v(_vm._s(item.name))]),
                            _c("span", [_vm._v(_vm._s(item.ar[0].name))]),
                            _c("span", [_vm._v(_vm._s(item.al.name))]),
                            _vm._v(" "),
                            _c(
                              "transition",
                              { attrs: { name: "list_button" } },
                              [
                                _vm.listButtonActiveIndex == index
                                  ? _c("div", { staticClass: "music_button" }, [
                                      _c("div", {
                                        staticClass: "list_play",
                                        style: {
                                          backgroundImage:
                                            "url(" + _vm.listPlay + ")"
                                        },
                                        attrs: { title: "播放这首歌" },
                                        on: {
                                          click: function($event) {
                                            _vm.ListPlay(
                                              (_vm.thisListPage - 1) * 10 +
                                                index
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.thisMusicType != -1
                                        ? _c("div", {
                                            staticClass: "list_play",
                                            style: {
                                              backgroundImage:
                                                "url(" + _vm.add + ")"
                                            },
                                            attrs: { title: "添加到 My Songs" },
                                            on: {
                                              click: function($event) {
                                                return _vm.ListAdd(item)
                                              }
                                            }
                                          })
                                        : _vm._e()
                                    ])
                                  : _vm._e()
                              ]
                            )
                          ],
                          1
                        )
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "list_page" }, [
                      _vm.thisListPage != 1
                        ? _c(
                            "div",
                            {
                              staticClass: "page_last",
                              on: {
                                click: function($event) {
                                  return _vm.ListChange(true)
                                }
                              }
                            },
                            [_vm._v("<")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.thisListPage != Math.ceil(_vm.musicList.length / 10)
                        ? _c(
                            "div",
                            {
                              staticClass: "page_next",
                              on: {
                                click: function($event) {
                                  return _vm.ListChange(false)
                                }
                              }
                            },
                            [_vm._v(">")]
                          )
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "list_r" }, [
                    _c("img", {
                      staticClass: "music_list_bg",
                      attrs: { src: _vm.musicImg }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "music_list_shlter",
                      style: { backgroundImage: "url(" + _vm.shlter + ")" }
                    })
                  ])
                ])
              ],
              1
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bbox" }, [
        _c(
          "div",
          {
            staticClass: "pan",
            class: { pan_active: _vm.disActive },
            style: { backgroundImage: "url(" + _vm.pan + ")" },
            on: { click: _vm.DisActive }
          },
          [
            _c("img", {
              staticClass: "pan_c",
              attrs: { src: _vm.musicImg, alt: "" }
            })
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "box",
            class: { box_active: _vm.disActive },
            style: { backgroundImage: "url(" + _vm.musicImg + ")" },
            on: { dblclick: _vm.DisList }
          },
          [
            _c("div", {
              staticClass: "music_shlter_2",
              class: { shlter_active: _vm.disActive },
              style: { backgroundImage: "url(" + _vm.musicImg + ")" }
            }),
            _vm._v(" "),
            _c("div", {
              staticClass: "music_shlter",
              class: { shlter_active: _vm.disActive },
              style: { backgroundImage: "url(" + _vm.musicImg + ")" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "music_dis" }, [
              _c(
                "div",
                { staticClass: "dis_list", on: { click: _vm.DisList } },
                [_vm._v("···")]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "music_title" }, [
                _vm._v(_vm._s(_vm.musicTitle))
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "music_intro" }, [
                _vm._v("歌手: " + _vm._s(_vm.musicName))
              ]),
              _vm._v(" "),
              _c("ul", { staticClass: "music_words" }, [
                _c(
                  "div",
                  {
                    staticClass: "music_words_box",
                    style: { top: _vm.wordsTop + "px" }
                  },
                  _vm._l(_vm.musicWords, function(item, index) {
                    return _c(
                      "li",
                      {
                        staticClass: "music_word",
                        class: { word_highlight: _vm.wordIndex == index }
                      },
                      [_vm._v(_vm._s(item))]
                    )
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "control_box" }, [
              _c("div", { staticClass: "control_button" }, [
                _c("img", {
                  staticClass: "control_icon",
                  attrs: { src: _vm.playIcon, alt: "" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "progress" }, [
                _c(
                  "div",
                  {
                    staticClass: "progress_c",
                    style: { width: _vm.currentProgress }
                  },
                  [_vm._m(0)]
                )
              ])
            ]),
            _vm._v(" "),
            _c("video", {
              attrs: {
                id: "music",
                autoplay: "autoplay",
                src: _vm.musicUrl,
                name: "media"
              }
            })
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "progress_circle" }, [
      _c("div", { staticClass: "progress_circle_c" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/zw-player/api/music.js":
/*!*********************************************!*\
  !*** ./node_modules/zw-player/api/music.js ***!
  \*********************************************/
/*! exports provided: getWords, getMusicInfo, getMusicUrl, getHotMusic, getSearchSuggest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWords", function() { return getWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMusicInfo", function() { return getMusicInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMusicUrl", function() { return getMusicUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHotMusic", function() { return getHotMusic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchSuggest", function() { return getSearchSuggest; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

//获取歌词
const getWords=(id)=>{
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://blogme.top:3000/lyric?id=${id}`);
}
//获取歌曲详情
const getMusicInfo=(id)=>{
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://blogme.top:3000/song/detail?ids=${id}`);
}
//获取歌曲url
const getMusicUrl=(id)=>{
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://blogme.top:3000/song/url?id=${id}`);   
}
//获取热门歌曲
const getHotMusic=(id)=>{
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://blogme.top:3000/top/list?idx=${id}`);
}
//获取搜索建议
const getSearchSuggest=(key)=>{
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://blogme.top:3000/search/suggest?keywords=${key}`)
}

/***/ }),

/***/ "./node_modules/zw-player/img/add.png":
/*!********************************************!*\
  !*** ./node_modules/zw-player/img/add.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/zw-player/add.png?4bb794d694f126d7dab8e2a4ab0f43c2";

/***/ }),

/***/ "./node_modules/zw-player/img/list_pan.png":
/*!*************************************************!*\
  !*** ./node_modules/zw-player/img/list_pan.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/zw-player/list_pan.png?5f2b578612f8d3ba72b61d6aa22bd44a";

/***/ }),

/***/ "./node_modules/zw-player/img/list_play_hover.png":
/*!********************************************************!*\
  !*** ./node_modules/zw-player/img/list_play_hover.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/zw-player/list_play_hover.png?3641c377b56290fe26b8b7fb1217f925";

/***/ }),

/***/ "./node_modules/zw-player/img/pan.png":
/*!********************************************!*\
  !*** ./node_modules/zw-player/img/pan.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/zw-player/pan.png?07613e229a93d4e819835f6c46a5bbc9";

/***/ }),

/***/ "./node_modules/zw-player/img/pause.png":
/*!**********************************************!*\
  !*** ./node_modules/zw-player/img/pause.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/zw-player/pause.png?745d6312cf5c7e1540e661beb086fffa";

/***/ }),

/***/ "./node_modules/zw-player/img/play.png":
/*!*********************************************!*\
  !*** ./node_modules/zw-player/img/play.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/zw-player/play.png?c63354d3ff9a9f85de7f2d03d8794f51";

/***/ }),

/***/ "./node_modules/zw-player/img/state_0.png":
/*!************************************************!*\
  !*** ./node_modules/zw-player/img/state_0.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/zw-player/state_0.png?6f5c49c753c89b2261ae1ae9fb50d985";

/***/ }),

/***/ "./node_modules/zw-player/img/state_1.png":
/*!************************************************!*\
  !*** ./node_modules/zw-player/img/state_1.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/zw-player/state_1.png?fc72486897eb2394c5d5cb7b66df8b59";

/***/ }),

/***/ "./node_modules/zw-player/player.css?vue&type=style&index=0&id=9d425874&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./node_modules/zw-player/player.css?vue&type=style&index=0&id=9d425874&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_8_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_2_player_css_vue_type_style_index_0_id_9d425874_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../style-loader!../css-loader??ref--8-1!../vue-loader/lib/loaders/stylePostLoader.js!../postcss-loader/src??ref--8-2!./player.css?vue&type=style&index=0&id=9d425874&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/zw-player/player.css?vue&type=style&index=0&id=9d425874&scoped=true&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_8_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_2_player_css_vue_type_style_index_0_id_9d425874_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_8_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_2_player_css_vue_type_style_index_0_id_9d425874_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_8_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_2_player_css_vue_type_style_index_0_id_9d425874_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_8_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_2_player_css_vue_type_style_index_0_id_9d425874_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_style_loader_index_js_css_loader_index_js_ref_8_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_2_player_css_vue_type_style_index_0_id_9d425874_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/zw-player/player.vue":
/*!*******************************************!*\
  !*** ./node_modules/zw-player/player.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player_vue_vue_type_template_id_9d425874_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.vue?vue&type=template&id=9d425874&scoped=true& */ "./node_modules/zw-player/player.vue?vue&type=template&id=9d425874&scoped=true&");
/* harmony import */ var _player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.vue?vue&type=script&lang=js& */ "./node_modules/zw-player/player.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _player_css_vue_type_style_index_0_id_9d425874_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.css?vue&type=style&index=0&id=9d425874&scoped=true&lang=css& */ "./node_modules/zw-player/player.css?vue&type=style&index=0&id=9d425874&scoped=true&lang=css&");
/* harmony import */ var _playermobile_css_vue_type_style_index_1_id_9d425874_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playermobile.css?vue&type=style&index=1&id=9d425874&scoped=true&lang=css& */ "./node_modules/zw-player/playermobile.css?vue&type=style&index=1&id=9d425874&scoped=true&lang=css&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _player_vue_vue_type_template_id_9d425874_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _player_vue_vue_type_template_id_9d425874_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9d425874",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/zw-player/player.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/zw-player/player.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./node_modules/zw-player/player.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib??vue-loader-options!./player.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/zw-player/player.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/zw-player/player.vue?vue&type=template&id=9d425874&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./node_modules/zw-player/player.vue?vue&type=template&id=9d425874&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_template_id_9d425874_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../vue-loader/lib??vue-loader-options!./player.vue?vue&type=template&id=9d425874&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/zw-player/player.vue?vue&type=template&id=9d425874&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_template_id_9d425874_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_template_id_9d425874_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/zw-player/playermobile.css?vue&type=style&index=1&id=9d425874&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/zw-player/playermobile.css?vue&type=style&index=1&id=9d425874&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_8_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_2_playermobile_css_vue_type_style_index_1_id_9d425874_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../style-loader!../css-loader??ref--8-1!../vue-loader/lib/loaders/stylePostLoader.js!../postcss-loader/src??ref--8-2!./playermobile.css?vue&type=style&index=1&id=9d425874&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/zw-player/playermobile.css?vue&type=style&index=1&id=9d425874&scoped=true&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_8_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_2_playermobile_css_vue_type_style_index_1_id_9d425874_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_8_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_2_playermobile_css_vue_type_style_index_1_id_9d425874_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_8_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_2_playermobile_css_vue_type_style_index_1_id_9d425874_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_8_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_2_playermobile_css_vue_type_style_index_1_id_9d425874_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_style_loader_index_js_css_loader_index_js_ref_8_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_2_playermobile_css_vue_type_style_index_1_id_9d425874_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);