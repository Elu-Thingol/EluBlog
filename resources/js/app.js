/* jshint esversion: 6 */

require("./bootstrap");

import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import VueRouter from "vue-router";
import MarkdownItVue from "markdown-it-vue";
import routes from "./routes";
// import "element-ui/lib/theme-chalk/index.css";
// import "element-ui/lib/theme-chalk/display.css";
// import fHeader from "./components/f-header";
// import fFooter from "./components/f-footer";
import i18n from "./i18n/i18n";
import store from "./store";
import HttpAPI from "./api/httpAPI";
import Helpers from "./helpers";

import "../sass/style.scss";
import "../sass/siyuan.scss";

const ZwPlayer = () =>
    import(/* webpackChunkName: "zw-player" */ "zw-player");

Vue.config.productionTip = false;
// Vue.use(ElementUI);
// Vue.use(VueRouter);

function loadView(dir, view) {
    // 注释不要去掉，对应上面 webpack 编译后的文件名
    return () =>
        import(
            /* webpackChunkName: "[request]" */ "./" + dir + "/" + view + ".vue"
        );
}

Vue.component("f-header", loadView("components", "f-header"));
Vue.component("f-footer", loadView("components", "f-footer"));
Vue.component("zw-player", ZwPlayer);


// Vue.config.keyCodes = {
//     v: 86,
//     f1: 112,
//     // camelCase 不可用
//     mediaPlayPause: 179,
//     // 取而代之的是 kebab-case 且用双引号括起来
//     "media-play-pause": 179,
//     up: [38, 87],
//     leader: 220
// };

Object.defineProperty(Vue.prototype, "_", { value: lodash });
Object.defineProperty(Vue.prototype, "$HttpAPI", { value: HttpAPI });
Object.defineProperty(Vue.prototype, "$Helpers", { value: Helpers });

//Vue.use(ElementUI, {
//i18n: (key, value) => i18n.t(key, value)
//})

const router = new VueRouter({
    // mode: "history",
    routes
});

new Vue({
    el: "#app",
    router,
    i18n,
    store,
    render: h => h(App)
});
