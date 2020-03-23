<template>
    <div>
        <el-row
            class="main"
            type="flex"
            justify="center"
            v-loading="_.isEmpty(post)"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
        >
            <el-col :span="16">
                <div
                    id="artcle-info"
                    class="is-hover-shadow"
                >
                    <h2 class="text-center"><strong>{{post.title}}</strong></h2>
                    <!-- 描述：文章信息 -->
                    <img
                        :src="post.image?$Helpers.imgUrl(post.image):'https://random.52ecy.cn/randbg.php'"
                        class="blur"
                    >
                    <div class="cover"></div>
                    <div class="text-center timeAndView">
                        <span class="article-time">
                            <i class="el-icon-time"></i>
                            发表于：<span>{{$Helpers.dateFormat("YYYY-mm-dd", post.published_date)}}</span>
                        </span>
                        &nbsp;|&nbsp;
                        <span class="article-views">
                            <i class="el-icon-view"></i>
                            阅读量：<span>{{post.view_num}}</span>万
                        </span>
                    </div>
                    <p class="abstract">
                        前言：{{post.excerpt}}
                    </p>
                </div>
                <div class="post-card is-hover-shadow">
                    <!-- <hr /> -->
                    <div id="artcle-content">
                        <markdown-it-vue
                            id="markdown-it-vue"
                            class="md-body"
                            :content="String(post.body?post.body:'（/▽＼）看不见我')"
                        />

                        <p>&nbsp;</p>

                        <p><span style="color:#3399ea;"><em>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 向上的路并不拥挤，到多数人选择了安逸！--洛九</em></span></p>
                    </div>
                    <div id="statement">
                        <div class="item">{{$t('article.author')}}：洛九</div>
                        <div class="item">{{$t('article.originalLink')}}：<a :href="url">{{url}}</a></div>
                        <div class="item">{{$t('article.copyright')}}：本博客所有文章除特别声明外,转载请注明出处!</div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'
export default {
    name: 'articles', // 因为和article标记同名故改为复数形式
    data() {
        return {
            url: document.URL, //  获取当前页地址
            post: Object
        }
    },
    components: {
        MarkdownItVue
    },
    created() {
        this.getDetail();
        $('#artcle-info').css("background-image", 'white');
    },
    mounted() {
        document.getElementById('markdown-it-vue').addEventListener('copy', this.setClipboardText, false);
    },
    methods: {
        getDetail: function () {
            // 发起请求
            let list_r = this.$HttpAPI.getDetail(this.$route.params.slug)
            list_r.then(res => {
                if (!this._.isEmpty(res)) {
                    this.post = res.data.data;
                    console.log(this.post);
                }
            })
        },
        /*拷贝内容添加声明*/
        setClipboardText: function (event) {
            event.preventDefault();
            var url = document.URL;
            var node = document.createElement("div");
            node.appendChild(
                window
                    .getSelection()
                    .getRangeAt(0)
                    .cloneContents()
            );
            var htmlData =
                "<div>" +
                node.innerHTML +
                `<br/><br/>${this.$t('article.author')}：洛九<br/>` +
                `${this.$t('article.originalLink')}：${this.url}<br/>` +
                `${this.$t('article.copyright')}：本博客所有文章除特别声明外,转载请注明出处!<br/><br/>` +
                "</div>";
            var textData =
                window.getSelection().getRangeAt(0) +
                `\n\n${this.$t('article.author')}：洛九\n` +
                `${this.$t('article.originalLink')}：${this.url}\n` +
                `${this.$t('article.copyright')}：本博客所有文章除特别声明外,转载请注明出处!\n\n`;
            if (event.clipboardData) {
                event.clipboardData.setData("text/html", htmlData);
                event.clipboardData.setData("text/plain", textData);
            } else if (window.clipboardData) {
                return window.clipboardData.setData("text", textData);
            }
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
    filter: blur(2px);
    -webkit-filter: blur(10px); /* Chrome, Opera */
}

/*半透明黑色蒙版，圆角，动画等修饰*/
#artcle-info {
    margin-bottom: 50px;
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

.post-card {
    padding: 20px;
    border: 1px solid #ebeef5;
    background-color: #fff7;
    transition: 0.3s;
    border-radius: 4px;
    overflow: hidden;
}

.is-hover-shadow:hover {
    box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0), 0 2px 12px 0 rgba(0, 0, 0, 0.1) !important;
}

pre.has {
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.8);
}

img.has {
    width: 100%;
}

#statement {
    border-left: 3px solid #f56c6c;
    padding: 20px;
    background-color: #ebeef5;
}
</style>
