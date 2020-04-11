/* jshint esversion: 6 */

import types from "./mutation-types";

const mutations = {
    [types.SET_USERNAME]: function(state, payload) {
        state.username = payload.username;
    },

    [types.SET_TAGS]: function(state, { tags }) {
        state.tags = tags;
    },

    [types.SHOW_SEARCH_DIALOG_VISIBLE]: function(state) {
        state.searchDialogVisible = true;
    },
    [types.HIDE_SEARCH_DIALOG_VISIBLE]: function(state) {
        state.searchDialogVisible = false;
    },

    [types.SET_FRIEND_SUBMIT_TIME]: function(state) {
        state.friendSubmitTime = _.now();
    },
    [types.SET_FEEDBACK_SUBMIT_TIME]: function(state) {
        state.feedbackSubmitTime = _.now();
    }
};

export default mutations;
