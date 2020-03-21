<template>
    <div>
        <el-row
            class="main"
            type="flex"
            justify="center"
        >
            <el-col :span="16">
                <div id="artcle-info">
                    <h2 class="text-center"><strong>{{post.title}}</strong></h2>
                    <!-- 描述：文章信息 -->
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
                <hr />
                <div id="artcle-content">

                    <markdown-it-vue
                        id="markdown-it-vue"
                        class="md-body"
                        :content="String(post.body)"
                    />

                    <p>&nbsp;</p>

                    <p><span style="color:#3399ea;"><em>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 向上的路并不拥挤，到多数人选择了安逸！--洛九</em></span></p>
                </div>
                <div id="statement">
                    <div class="item">{{$t('article.author')}}：洛九</div>
                    <div class="item">{{$t('article.originalLink')}}：<a :href="url">{{url}}</a></div>
                    <div class="item">{{$t('article.copyright')}}：本博客所有文章除特别声明外,转载请注明出处!</div>
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
    padding: 20px;
    background-image: url(../../images/vue.jpg);
    margin-bottom: 40px;
}

#artcle-info .abstract {
    color: #ffffff;
    border-left: 3px solid #f56c6c;
    padding: 10px;
    background-color: rgba(126, 129, 135, 0.3);
}

#artcle-info .timeAndView {
    padding: 20px;
    line-height: 30px;
    font-size: 16px;
    color: #ffffff;
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
