/* jshint esversion: 6 */

import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
    //要设置的全局访问的state对象
    username: "" //当前登录用户名
};

const getters = {
    //实时监听state值的变化(最新状态)
    isLogined() {
        return state.username !== "";
    }
};

const mutations = {
    setUsername(state, username) {
        state.username = username;
    }
};

const store = new Vuex.Store({
    state,
    getters,
    mutations
});

export default store;
