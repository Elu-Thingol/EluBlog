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
                <artcle-info-header
                    :title="post.title"
                    :image="post.image?$Helpers.imgUrl(post.image):'https://random.52ecy.cn/randbg.php'"
                    :excerpt="post.excerpt"
                    :published_at="$Helpers.dateFormat('YYYY-mm-dd', post.published_at)"
                    :view_num="post.view_num"
                >
                </artcle-info-header>

                <el-divider></el-divider>

                <div class="post-card is-hover-alpha">
                    <div id="artcle-content">
                        <markdown-it-vue
                            id="markdown-it-vue"
                            class="md-body"
                            :content="String(post.body?post.body:'（/▽＼）看不见我')"
                        />

                        <p>&nbsp;</p>

                        <hitokoto></hitokoto>
                    </div>
                    <el-card
                        id="statement"
                        shadow="never"
                        :body-style="{ padding: '0px' }"
                    >
                        <div class="item">{{$t('article.author')}}：洛九</div>
                        <div class="item">{{$t('article.originalLink')}}：<a :href="url">{{url}}</a></div>
                        <div class="item">{{$t('article.copyright')}}：本博客所有文章除特别声明外,转载请注明出处!</div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'
import ArtcleInfoHeader from '../components/artcle-info-header'
import Hitokoto from '../components/hitokoto'
export default {
    name: 'articles', // 因为和article标记同名故改为复数形式
    data() {
        return {
            url: document.URL, //  获取当前页地址
            post: {}
        }
    },
    components: {
        MarkdownItVue,
        ArtcleInfoHeader,
        Hitokoto
    },
    created() {
        this.getDetail();
    },
    mounted() {
        document.getElementById('markdown-it-vue').addEventListener('copy', this.setClipboardText, false);
    },
    methods: {
        getDetail: function () {
            // 发起请求
            let list_r = this.$HttpAPI.getDetail(this.$route.params.slug, this.$store.getters.isFirst)
            this.$store.commit('unsetFirst'); // 设置已读标记
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
.post-card {
    padding: 20px;
    border: 1px solid #ebeef5;
    background-color: #fff7;
    transition: 0.3s;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.03);
    overflow: hidden;
}

.is-hover-alpha:hover {
    background-color: #fffc !important;
}

#statement {
    border-left: 3px solid #f56c6c;
    padding: 20px;
    background-color: #ebeef5;
}
</style>
