<!-- 文章信息 -->
<template>
    <div
        id="artcle-info"
        class="is-hover-shadow"
    >
        <h2 class="text-center"><strong>{{title}}</strong></h2>
        <!-- 描述：文章信息 -->
        <img
            :src="image"
            class="blur"
        >
        <div class="cover"></div>
        <div class="text-center timeAndView">
            <span class="article-time">
                <i class="el-icon-time"></i>
                发表于：<span>{{published_at}}</span>
            </span>
            &nbsp;|&nbsp;
            <span class="article-views">
                <i class="el-icon-view"></i>
                阅读量：<span>{{view_num}}</span>万
            </span>
        </div>
        <p class="abstract">
            前言：{{excerpt}}
        </p>
    </div>
</template>

<script>
export default {
    name: 'artcle-info-header',
    props: {
        title:{
            type: String,
            default: '我是标题'
            // require: true // 必填
        },
        image:{
            type: String,
            default: 'https://random.52ecy.cn/randbg.php'
            // require: true // 必填
        },
        excerpt:{
            type: String,
            default: '简单说明一下···'
            // require: true // 必填
        },
        published_at:{
            type: String,
            default: '发布日期'
            // require: true // 必填
        },
        view_num:{
            type: Number,
            default: 0
            // require: true // 必填
        }
    }
}
</script>

<style scoped>
#artcle-info {
    position: relative;
    padding: 20px;
    margin-bottom: 40px;
    overflow-y: hidden;
    overflow-x: hidden;
}

#artcle-info .text-center {
    /* color: #5ca1f0ee; */
    font-size: 2 em;
    color: #fffe;
    text-shadow: #000a 1px 1px 1px;
}

.blur {
    position: absolute;
    z-index: -999;
    top: -5%;
    left: -5%;
    right: -5%;
    width: 110%;
    height: 110%;
    object-fit: cover;
    filter: blur(10px);
    -webkit-filter: blur(10px); /* Chrome, Opera */
}

/*半透明黑色蒙版，圆角，内阴影，动画等修饰*/
#artcle-info {
    /* margin-bottom: 50px; */
    border-radius: 2px;
    box-shadow: inset 1px 1px 5px 0 rgba(0, 0, 0, 0.3), 0 0 0 0 rgba(0, 0, 0, 0);
    background-color: rgba(0, 0, 0, 0.075);
    transition: 0.3s;
}

#artcle-info .abstract {
    color: #ffffff;
    border-left: 3px solid #f56c6c;
    padding: 10px;
    background-color: rgba(126, 129, 135, 0.3);
}

#artcle-info .timeAndView {
    /* padding: 20px; */
    padding-bottom: 20px;
    line-height: 30px;
    font-size: 16px;
    color: #ffffff;
}

.is-hover-shadow:hover {
    box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0), 0 2px 12px 0 rgba(0, 0, 0, 0.1) !important;
}
</style>
