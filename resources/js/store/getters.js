/* jshint esversion: 6 */

const getters = {
    //实时监听state值的变化(最新状态)
    isLogined: ({ username }) => username !== "",

    getTags: ({ tags }) => tags,
    getSearchDialogVisible: ({ searchDialogVisible }) => !!searchDialogVisible,
    getFriendTimeRemaining: ({ friendSubmitTime }) => () =>
        friendSubmitTime ? _.now() - friendSubmitTime : null,
    getFeedbackTimeRemaining: ({ feedbackSubmitTime }) => () =>
        feedbackSubmitTime ? _.now() - feedbackSubmitTime : null,

    canFriendSubmit: (state, { getFriendTimeRemaining }) => () =>
        getFriendTimeRemaining()
            ? 24 < getFriendTimeRemaining() / (1000 * 60 * 60)
            : true,
    canFeedbackSubmit: (state, { getFeedbackTimeRemaining }) => () =>
        getFeedbackTimeRemaining()
            ? 300 < getFeedbackTimeRemaining() / 1000
            : true
};

export default getters;
