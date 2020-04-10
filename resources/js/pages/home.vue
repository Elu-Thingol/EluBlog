<template>
    <div class="home">
        <el-row id="artList"
                type="flex"
                justify="space-around">
            <el-col :span="16"
                    v-loading="_.isEmpty(posts.data)"
                    element-loading-text="拼命加载中"
                    element-loading-spinner="el-icon-loading">
                <el-dialog title="搜索文章"
                           :visible.sync="searchDialogVisible"
                           width="800px">
                    <search-form :searchForm="search_form"
                                 :listQuery="list_query"
                                 :importanceOptions="importance_options"
                                 @handleFilter="handleFilter"
                                 @handleClean="handleClean">
                    </search-form>
                </el-dialog>

                <el-row v-for="(post, index) in posts.data.data"
                        :key="index"
                        class="art-item">
                    <el-card shadow="hover">
                        <h5>
                            <router-link :to="$Helpers.articleUrl(post.slug)"
                                         tag="span"
                                         class="art-title">{{post.title}}</router-link>
                        </h5>
                        <el-row class="art-info d-flex align-items-center justify-content-start">
                            <div class="art-time">
                                <i class="el-icon-time"></i>：{{$Helpers.dateFormat("YYYY-mm-dd", post.published_at)}}
                            </div>
                            <div class="d-flex align-items-center">
                                <img class="tag"
                                     src="../../images/tag.png" />：
                                <el-tag v-if="post.tag_list.length==0"
                                        size="mini"
                                        style="margin-right: 4px;">无标签</el-tag>
                                <el-tag v-else
                                        v-for="(tag, index) in post.tag_list"
                                        :key="index"
                                        size="mini"
                                        style="margin-right: 4px;">{{tag.name}}</el-tag>
                            </div>
                        </el-row>
                        <el-row class="art-body">
                            <div class="side-img hidden-sm-and-down">
                                <img class="art-banner"
                                     :src="post.image?$Helpers.imgUrl(post.image):'https://random.52ecy.cn/randbg.php'" />
                            </div>
                            <div class="side-abstract">
                                <div class="art-abstract">{{post.excerpt}}</div>
                                <div class="art-more">
                                    <router-link :to="$Helpers.articleUrl(post.slug)"
                                                 tag="span">
                                        <el-button plain>{{$t('home.readMore')}}</el-button>
                                    </router-link>
                                    <div class="view">
                                        <i class="el-icon-view"></i> {{post.view_num?$Helpers.viewDisplay(post.view_num):0}}
                                    </div>
                                </div>
                            </div>
                        </el-row>
                    </el-card>
                    <img v-show="post.featured"
                         class="star"
                         src="../../images/star.png" />
                </el-row>

                <div class="block pagination">
                    <el-pagination background
                                   :current-page="currentPage"
                                   :page-sizes="[5, 10, 20, 50, 100]"
                                   :page-size="pagesize"
                                   :total="posts.data.total"
                                   layout="total, sizes, prev, pager, next, jumper"
                                   @size-change="handleSizeChange"
                                   @current-change="handleCurrentChange"></el-pagination>
                </div>
            </el-col>
            <el-col :span="6"
                    class="hidden-sm-and-down"
                    id="side">
                <div class="item">
                    <tag></tag>
                </div>
                <div class="item">
                    <friend></friend>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import friend from '../components/friend'
import tag from '../components/tag'
import searchForm from '../components/search-form'
export default {
    name: 'home',
    data() {
        return {
            posts: { data: [] },
            currentPage: 1, //  el-pagination 初始页
            pagesize: 5,//  el-pagination 每页的数据
            // 所有的搜索组件
            search_form: [
                {
                    type: 'Input'
                }, {
                    type: 'select'
                }, {
                    type: 'SearchBtn'
                }, {
                    type: 'CleanBtn'
                }
            ],
            //双向数据绑定
            list_query: {
                title: '',
                importance: ''
            }
        }
    },
    computed: {
        ...mapGetters({
            site: 'info/getSite',
            blog: 'info/getBlog',
            importance_options: 'getTags', // 下拉选择器
            getSearch: 'getSearchDialogVisible' // 搜索框显示
        }),
        searchDialogVisible: {
            set: function (value) {
                this.setSearch({ show: value })
            },

            get: function () {
                return this.getSearch
            }
        }
    },
    components: {
        friend,
        tag,
        searchForm
    },
    created() {
        this.getPosts()
        console.log(this.site)
        console.log(this.blog)
    },
    mounted() {
        var vm = this
        document.onkeyup = function (e) {
            let key = window.event.keyCode
            // 释放 “\” 键盘显示搜索框
            if (key == 220) {
                vm.setSearch({ show: true })
            }
        }
    },
    methods: {
        ...mapActions({
            setSearch: 'SET_SEARCH_DIALOG_VISIBLE'
        }),
        demo() {
            console.log('demo')
        },
        getPosts: function () {
            // 发起请求
            let list_r = this.$HttpAPI.getPosts({
                page: this.currentPage,
                per_page: this.pagesize
            }, this)
            list_r.then(res => {
                if (!this._.isEmpty(res)) {
                    this.posts = res.data
                    console.log(this.posts.data.data)
                }
            })
        },
        getPostsWithSearch: function () {
            // 发起请求
            let list_r = this.$HttpAPI.getPosts({
                page: this.currentPage,
                per_page: this.pagesize,
                key_words: this.list_query.title,
                tag: this.list_query.importance
            }, this)
            list_r.then(res => {
                if (!this._.isEmpty(res)) {
                    this.posts = res.data
                    console.log(this.posts.data.data)
                }
            })
        },
        // size-change	pageSize 改变时会触发	每页条数size
        // current-change	currentPage 改变时会触发	当前页currentPage
        handleSizeChange: function (size) {
            this.pagesize = size
            console.log(this.pagesize) // 每页下拉显示数据
        },
        handleCurrentChange: function (currentPage) {
            this.currentPage = currentPage
            console.log(this.currentPage) // 点击第几页
        },
        handleFilter: function () {
            this.setSearch({ show: false })
            this.$message({
                message: `设置关键字为“${ this.list_query.title }”,标签为“${ this.list_query.importance }”，正在搜索符合条件的文章···`,
                center: true
            })
            this.getPostsWithSearch()
        },
        handleClean: function () {
            this.list_query.title = ''
            this.list_query.importance = ''
            this.setSearch({ show: false })
            this.$message({
                message: '已清除搜索选项~',
                center: true,
                type: 'success'
            })
            this.getPosts()
        }
    },
    watch: {
        // 监控成员的变化，并自动执行下面的函数
        pagesize: function (val, oldVal) {
            this.getPosts()
        },
        currentPage: function (val, oldVal) {
            this.getPosts()
        }
    }
}
</script>

<style scoped>
#side .item {
    margin-bottom: 30px;
}

.art-item {
    margin-bottom: 30px;
    position: relative;
}

.art-item .star {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 0;
    right: 0;
}

img.tag {
    width: 16px;
    height: 16px;
}

.art-title {
    border-left: 3px solid #f56c6c;
    padding-left: 5px;
    cursor: pointer;
}

.art-title:hover {
    padding-left: 10px;
    color: #409eff;
}

.art-time {
    margin-right: 20px;
}

.art-body {
    display: flex;
    padding: 10px 0;
}

.side-img {
    height: 150px;
    width: 270px;
    overflow: hidden;
    margin-right: 10px;
}

img.art-banner {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.6s;
}

img.art-banner:hover {
    transform: scale(1.4);
}

.side-abstract {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.art-abstract {
    flex: 1;
    color: #aaa;
}

.art-more {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.art-more .view {
    color: #aaa;
}
h5 {
    font-size: 18px;
}
/* .pagination {
    background-color: #f9f9f9;
} */
</style>
