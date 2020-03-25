/* jshint esversion: 6 */

export default {
    // 基础路径
    BASE_URL: "http://elu.blog.io/api/v1",

    // 用户名、密码验证
    verifyUser: function(username, password) {
        return axios.post(`${this.BASE_URL}/verifyUser`, {
            username: username,
            password: password
        });
    },

    // 请求文章列表数据
    getPosts: function(settings) {
        var defaultSetting = {
            page: 1,
            per_page: 20
        };
        $.extend(defaultSetting, settings);
        return axios({
            method: "get",
            url: `${this.BASE_URL}/posts`,
            params: {
                page: defaultSetting.page,
                per_page: defaultSetting.per_page
            },
            dataType: "json",
            crossDomain: true,
            cache: false
        }).catch(e => {
            if (e.response) {
                //请求已发出，服务器返回状态码不是2xx。
                console.info(e.response.data);
                console.info(e.response.status);
                console.info(e.response.headers);
            } else if (e.request) {
                // 请求已发出，但没有收到响应
                // e.request 在浏览器里是一个XMLHttpRequest实例，
                // 在node中是一个http.ClientRequest实例
                console.info(e.request);
            } else {
                //发送请求时异常，捕捉到错误
                console.info("error", e.message);
            }
            console.info(e.config);
        });
    },

    getDetail: function(slug) {
        return axios({
            method: "get",
            url: `${this.BASE_URL}/posts/details/${slug}`,
            dataType: "json",
            crossDomain: true,
            cache: false
        }).catch(e => {
            if (e.response) {
                //请求已发出，服务器返回状态码不是2xx。
                console.info(e.response.data);
                console.info(e.response.status);
                console.info(e.response.headers);
            } else if (e.request) {
                // 请求已发出，但没有收到响应
                // e.request 在浏览器里是一个XMLHttpRequest实例，
                // 在node中是一个http.ClientRequest实例
                console.info(e.request);
            } else {
                //发送请求时异常，捕捉到错误
                console.info("error", e.message);
            }
            console.info(e.config);
        });
    },

    // 请求文章列表数据
    getTags: function() {
        return axios({
            method: "get",
            url: `${this.BASE_URL}/tags`,
            dataType: "json",
            crossDomain: true,
            cache: false
        }).catch(e => {
            if (e.response) {
                //请求已发出，服务器返回状态码不是2xx。
                console.info(e.response.data);
                console.info(e.response.status);
                console.info(e.response.headers);
            } else if (e.request) {
                // 请求已发出，但没有收到响应
                // e.request 在浏览器里是一个XMLHttpRequest实例，
                // 在node中是一个http.ClientRequest实例
                console.info(e.request);
            } else {
                //发送请求时异常，捕捉到错误
                console.info("error", e.message);
            }
            console.info(e.config);
        });
    }
};
