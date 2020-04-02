/* jshint esversion: 6 */

const types = {
    PUSH_SLUG: "PUSH_SLUG"
};

const visitList = {
    namespaced: true,
    state: {
        list: []
    },
    getters: {
        isExists: function(state) {
            return slug => state.list.indexOf(slug) > -1;
        }
    },
    mutations: {
        [types.PUSH_SLUG]: function({ list }, payload) {
            list.push(payload.slug);
        }
    },
    actions: {
        [types.PUSH_SLUG]: function({ commit, getters }, payload) {
            if (!getters.isExists(payload.slug)) {
                commit(types.PUSH_SLUG, payload);
            }
        }
    }
};

export default visitList;
