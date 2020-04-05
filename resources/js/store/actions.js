/* jshint esversion: 6 */

import types from "./mutation-types";

const actions = {
    [types.SET_TAGS]: function({ commit }, payload) {
        commit(types.SET_TAGS, payload);
    },

    [types.SET_SEARCH_DIALOG_VISIBLE]: function({ commit }, { show }) {
        commit(
            !!show
                ? types.SHOW_SEARCH_DIALOG_VISIBLE
                : types.HIDE_SEARCH_DIALOG_VISIBLE
        );
    }
};

export default actions;
