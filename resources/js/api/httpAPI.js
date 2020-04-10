/* jshint esversion: 6 */

const BASE_URL = `${window.blog_address}/api/v1`;

axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
axios.defaults.timeout = 10000;
axios.defaults.dataType = "json";
axios.defaults.async = true;
axios.defaults.crossDomain = true;
axios.defaults.cache = false;

export default {
    // 用户名、密码验证
    verifyUser: function(username, password) {
        return axios.post(`${BASE_URL}/verifyUser`, {
            username: username,
            password: password
        });
    },

    // 请求封装
    iWanted: function(settings) {
        return axios(
            Object.assign(
                {
                    method: "get",
                    url: `${this.BASE_URL}`
                },
                settings
            )
        ).catch(e => {
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

            if (e.config.vm)
                e.config.vm.$notify.error({
                    title: "GET 请求失败",
                    message: `资源 [${e.config.url}] 请求失败，更多详情查看控制台···`,
                    offset: 60,
                    showClose: false
                });
        });
    },

    // 请求封装
    iPushed: function(settings) {
        return axios(
            Object.assign(
                {
                    method: "post",
                    url: `${this.BASE_URL}`,
                    transformRequest: [
                        function(data) {
                            // Do whatever you want to transform the data
                            let ret = "";
                            for (let it in data) {
                                ret +=
                                    encodeURIComponent(it) +
                                    "=" +
                                    encodeURIComponent(data[it]) +
                                    "&";
                            }
                            return ret;
                        }
                    ]
                },
                settings
            )
        ).catch(e => {
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

            if (e.config.vm)
                e.config.vm.$notify.error({
                    title: "POST 提交失败",
                    message: `资源 [${e.config.url}] 提交失败，更多详情查看控制台···`,
                    offset: 60,
                    showClose: false
                });
        });
    },

    // 请求文章列表数据
    getPosts: function(payload, vm = null) {
        return this.iWanted({
            url: `/posts`,
            params: payload,
            vm: vm
        });
    },

    // 请求时间线数据
    getTimeline: function(vm = null) {
        return this.iWanted({
            url: `/posts/timeline`,
            vm: vm
        });
    },

    // 请求文章详细数据
    getDetail: function({ slug, view_first }, vm = null) {
        return this.iWanted({
            url: `/posts/${slug}${view_first ? "?view_first=1" : ""}`,
            vm: vm
        });
    },

    // 请求标签列表数据
    getTags: function(vm = null) {
        return this.iWanted({
            url: `/tags`,
            vm: vm
        });
    },

    // 请求标签列表数据
    getByTag: function({ name }, vm = null) {
        return this.iWanted({
            url: `/tags/${name}`,
            vm: vm
        });
    },

    getFriends: function(vm = null) {
        return this.iWanted({
            url: `/friends`,
            vm: vm
        });
    },

    postFriends: function(payload, vm = null) {
        return this.iPushed({
            url: `/friends`,
            data: payload,
            vm: vm
        });
    },

    postFeedback: function(payload, vm = null) {
        return this.iPushed({
            url: `/feedback`,
            data: payload,
            vm: vm
        });
    },

    getInfos: function(vm = null) {
        return this.iWanted({
            url: `/infos`,
            vm: vm
        });
    }
};
