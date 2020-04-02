/* jshint esversion: 6 */

import HttpAPI from "../../api/httpAPI";

const types = {
    INFO_INIT: "INFO_INIT"
};

const viewFlag = {
    namespaced: true,
    state: {
        site: {},
        blog: {}
    },
    getters: {
        getSite: function(state) {
            return state.site;
        },
        getBlog: function(state) {
            return state.blog;
        }
    },
    mutations: {
        [types.INFO_INIT]: function(state) {
            // 发起请求
            let list_r = HttpAPI.getInfos();
            list_r.then(res => {
                if (!_.isEmpty(res)) {
                    state.site = res.data.data.site;
                    state.blog = res.data.data.blog;
                }
            });
        }
    },
    actions: {
        [types.INFO_INIT]: function({ commit, getters }) {
            if (_.isEmpty(getters.getSite) || _.isEmpty(getters.getBlog)) {
                commit(types.INFO_INIT);
            }
        }
    }
};

export default viewFlag;
