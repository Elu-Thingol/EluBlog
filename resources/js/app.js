require('./bootstrap');

import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import VueRouter from "vue-router";
import routes from "./routes";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/display.css";
import fHeader from "./components/f-header";
import fFooter from "./components/f-footer";
import i18n from "./i18n/i18n";

import "../sass/style.scss";
import "../sass/siyuan.scss";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.component("f-header", fHeader);
Vue.component("f-footer", fFooter);

Object.defineProperty(Vue.prototype, "_", { value: lodash });

//Vue.use(ElementUI, {
//i18n: (key, value) => i18n.t(key, value)
//})

const router = new VueRouter({
    // mode: "history",
    routes
});

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount("#app");
