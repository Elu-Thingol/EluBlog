/* jshint esversion: 6 */
import bullshit from './bullshitGenerator';

export default {
    // 基础路径
    BASE_URL: "http://elu.blog.io/api",

    // 用户名、密码验证
    verifyUser: function(username, password) {
        return axios.post(this.BASE_URL + "/verifyUser", {
            username: username,
            password: password
        });
    },

    // 请求文章列表数据
    getList: function() {
        return axios.get(this.BASE_URL + "/getList");
    },

    getPostList: function(num) {
        return bullshit.getPosts(num);
    },

    getDetail: function(id) {
        return axios.get(this.BASE_URL + "/getDetail/" + id);
    }
};
