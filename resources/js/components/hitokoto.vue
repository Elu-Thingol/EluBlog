<!-- Hitokoto - 一言 -->
<template>
    <div class="hitokoto">
        <p
            v-if="!_.isEmpty(hitokoto)"
            style="text-align:right;"
        >
            <span style="color:#3399ea;padding-right:5em;"><em>{{hitokoto.hitokoto}}</em></span>
            <br />
            <span style="color:#9EA19F;padding-right:1em;"><em>
                <small v-if="!_.isEmpty(hitokoto.from)">—— 《{{hitokoto.from}}》{{hitokoto.from_who}}</small>
                <small v-else-if="!_.isEmpty(hitokoto.from_who)">—— {{hitokoto.from_who}}</small>
                <small v-else></small>
                </em></span>
        </p>
        <p
            v-else
            style="text-align:right;"
        >
            <span style="color:#3399ea;padding-right:5em;"><em>If you can't win the game, change the rules.</em></span>
            <br />
            <span style="color:#9EA19F;padding-right:1em;"><em><small>—— 《Leann》</small></em></span>
        </p>
    </div>
</template>

<script>
export default {
    name: 'hitokoto',
    data() {
        return {
            hitokoto: {}
        }
    },
    created() {
        this.getHitokoto();
    },
    methods: {
        getHitokoto: function () {
            // 定义请求
            var settings = {
                method: "get",
                url: `https://v1.hitokoto.cn`,
                params: {
                    encode: "json",
                    charset: "utf-8"
                },
                dataType: "json",
                crossDomain: true,
                cache: false
            };

            // 发起请求
            axios(settings)
                .catch(e => {
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
                })
                .then(res => {
                    if (!this._.isEmpty(res)) {
                        this.hitokoto = res.data;
                    }
                })
        }
    }
}
</script>

<style scoped>
</style>
