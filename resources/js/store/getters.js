/* jshint esversion: 6 */

const getters = {
    //实时监听state值的变化(最新状态)
    isLogined: function(state) {
        return state.username !== "";
    },
    getTags: state => state.tags,
    getSearchDialogVisible: state => !!state.searchDialogVisible
};

export default getters;
