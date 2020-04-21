<template>
    <div>
        <el-row class="main"
                type="flex"
                justify="center"
                v-loading="_.isEmpty(post)"
                element-loading-text="拼命加载中"
                element-loading-spinner="el-icon-loading">
            <el-col :span="16">
                <article-info-header :title="post.title"
                                     :image="post.image?$Helpers.imgUrl(post.image):'https://random.52ecy.cn/randbg.php'"
                                     :excerpt="post.excerpt"
                                     :published_at="$Helpers.dateFormat('YYYY-mm-dd', post.published_at)"
                                     :view_num="post.view_num?$Helpers.viewDisplay(post.view_num):0">
                </article-info-header>

                <el-divider></el-divider>
                <div class="post-card is-hover-alpha">
                    <div id="artcle-content">
                        <div v-if="isMIVLoading"
                             v-loading="!_.isEmpty(post) && isMIVLoading"
                             style="margin-top: 10px"></div>
                        <article-markdown :content="String(post.body?post.body:'（/▽＼）看不见我')"
                                          :url="url"
                                          @handleMarkdownItVue="handleMarkdownItVue"></article-markdown>

                        <p>&nbsp;</p>

                        <transition name="fade">
                            <share v-if="showShare"
                                   :config="shareConfig"></share>
                        </transition>

                        <hitokoto></hitokoto>
                    </div>
                    <el-card id="statement"
                             shadow="never"
                             :body-style="{ padding: '0px' }">
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
import { mapActions, mapGetters } from 'vuex'
import articleInfoHeader from '../components/article-info-header'
const articleMarkdown = () => import('../components/article-markdown')
const Share = () => import(/* webpackChunkName: "vue-social-share" */ 'vue-social-share')
import hitokoto from '../components/hitokoto'
export default {
    name: 'articles', // 因为和article标记同名故改为复数形式
    data() {
        return {
            post: {},
            isMIVLoading: true,
            showShare: false,
        }
    },
    computed: {
        ...mapGetters({
            isVisited: 'visit/isExists',
            blog: 'info/getBlog',
        }),
        url: function () {
            return `${ this.blog.address }/#${ this.$Helpers.articleUrl(this.post.slug) }`
        },
        shareConfig: function () {
            return Object.assign({
                url: this.url, // 网址，默认使用 window.location.href
                source: this.blog.address, // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
                title: this.post.title, // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
                // image: '', // 图片, 默认取网页中第一个img标签
                description: this.post.excerpt, // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
                sites: ['qzone', 'qq', 'weibo', 'wechat', 'douban'], // 启用的站点
                // disabled: ['google', 'facebook', 'twitter'], // 禁用的站点
                wechatQrcodeTitle: '微信扫一扫：分享', // 微信二维码提示文字
                wechatQrcodeHelper: '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>'
            }, this.post.image ? { image: this.$Helpers.imgUrl(this.post.image) } : {})
        }
    },
    components: {
        articleInfoHeader,
        articleMarkdown,
        hitokoto,
        Share
    },
    created() {
        this.getDetail()
    },
    destroyed() {
        $('#prism').remove()
    },
    methods: {
        ...mapActions({
            pushSlug: 'visit/PUSH_SLUG',
        }),
        getDetail: function () {
            const slug = this.$route.params.slug

            // 发起请求
            let list_r = this.$HttpAPI.getDetail({
                slug: slug,
                view_first: !this.isVisited(slug)
            }, this)

            // 设置已读标记
            this.pushSlug({
                slug: slug
            })

            list_r.then(res => {
                if (!this._.isEmpty(res)) {
                    this.post = res.data.data
                    setTimeout(() => (this.showShare = true), 1)
                    setTimeout(() => {
                        script = document.createElement('script')
                        script.dataset.localSrc = "/vendor/prism/prism.js"
                        script.type = 'text/javascript'
                        script.src = 'https://cdn.jsdelivr.net/gh/Elu-Thingol/EluBlog@1.0.2/public/vendor/prism/prism.js'
                        script.id = 'prism'
                        script.onerror = errorload
                        $('head').append(script)
                        // document.getElementsByTagName('head')[0].appendChild(script)
                    }, 500)
                }
            })
        },
        handleMarkdownItVue: function () {
            this.isMIVLoading = false
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

/* 渐隐渐现 */
.fade-enter {
    opacity: 0;
}
.fade-enter-active {
    transition: opacity 3s;
}
.fade-leave-to {
    opacity: 0;
}
.fade-leave-active {
    transition: opacity 3s;
}
</style>
