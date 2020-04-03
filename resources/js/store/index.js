/* jshint esversion: 6 */

import Vue from "vue";
import Vuex from "vuex";
import createVuexAlong from "vuex-along";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import modules from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules,
    plugins: [
        createVuexAlong({
            // 设置保存的集合名字，避免同站点下的多项目数据冲突
            name: "blog-visit-vuex-along",
            local: {
                list: ["visit.list"]
                // 过滤模块 ma 数据， 将其他的存入 localStorage
                // isFilter: true // 过滤 list 中的字段而非保存
            }
            // session: {
            //     // 保存模块 ma 中的 a1 到 sessionStorage
            //     list: [""]
            //     // isFilter: true
            // }
        })
    ]
});
