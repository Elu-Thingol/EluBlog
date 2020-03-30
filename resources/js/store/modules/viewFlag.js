/* jshint esversion: 6 */

const viewFlag = {
    state: {
        view_flag: true
    },
    getters: {
        isFirst: function(state) {
            return state.view_flag;
        }
    },
    mutations: {
        unsetFirst: function(state) {
            state.view_flag = false;
        }
    }
};

export default viewFlag;
