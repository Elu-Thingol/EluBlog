<template>
    <div>
        <el-row class="main"
                type="flex"
                justify="center"
                v-loading="_.isEmpty(post) || isMIVLoading"
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
                        <router-view :content="String(post.body?post.body:'（/▽＼）看不见我')"
                                     :url="url"
                                     @handleMarkdownItVue="handleMarkdownItVue"></router-view>

                        <p>&nbsp;</p>

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
import hitokoto from '../components/hitokoto'
export default {
    name: 'articles', // 因为和article标记同名故改为复数形式
    data() {
        return {
            post: {},
            isMIVLoading: true
        }
    },
    computed: {
        ...mapGetters({
            isVisited: 'visit/isExists',
        }),
        url: () => (this.$route.fullPath)
    },
    components: {
        articleInfoHeader,
        hitokoto
    },
    beforeRouteEnter: (to, from, next) => {
        next(vm => {
            if (vm.$route.name === 'article') {
                vm.$router.push(`${ vm.$route.path }/markdown`)
            }
        })
    },
    created() {
        var vm = this
        window.articleBack = false
        window.addEventListener('popstate', function () {         // 监听回退按钮
            if (window.articleBack) {
                window.articleBack = false
                vm.$router.go(-1)    // 在回退时进行某种操作。
            }
        }, false)
        this.getDetail()
    },
    methods: {
        ...mapActions({
            pushSlug: 'visit/PUSH_SLUG',
        }),
        getDetail: function () {
            // 发起请求
            let list_r = this.$HttpAPI.getDetail(
                this.$route.params.slug,
                !this.isVisited(this.$route.params.slug)
            )
            this.pushSlug({
                slug: this.$route.params.slug
            }) // 设置已读标记

            list_r.then(res => {
                if (!this._.isEmpty(res)) {
                    this.post = res.data.data
                    console.log(this.post)
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
</style>
