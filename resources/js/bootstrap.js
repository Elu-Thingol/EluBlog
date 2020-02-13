/* jshint esversion: 6 */

window._ = window.lodash = require("lodash");

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require("axios");

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });


import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import VueRouter from "vue-router";
import routes from "./routes";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/display.css";
import "../sass/style.scss";
import fHeader from "./components/f-header";
import fFooter from "./components/f-footer";
import i18n from "./i18n/i18n";

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
