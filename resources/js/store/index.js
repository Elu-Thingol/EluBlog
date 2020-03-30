/* jshint esversion: 6 */

import Vue from "vue";
import Vuex from "vuex";
import createVuexAlong from "vuex-along";
import getters from "./getters";
import mutations from "./mutations";
import viewFlag from "./modules/viewFlag";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        //要设置的全局访问的state对象
        username: "" //当前登录用户名
    },
    getters,
    mutations,
    modules: {
        vf: viewFlag
    },
    plugins: [
        createVuexAlong({
            // 设置保存的集合名字，避免同站点下的多项目数据冲突
            name: "view-flag-vuex-along",
            local: {
                list: ["vf.view_flag"]
                // 过滤模块 ma 数据， 将其他的存入 localStorage
                // isFilter: true // 过滤 list 中的字段而非保存
            },
            session: {
                // 保存模块 ma 中的 a1 到 sessionStorage
                list: ["vf.view_flag"],
                isFilter: true
            }
        })
    ]
});
