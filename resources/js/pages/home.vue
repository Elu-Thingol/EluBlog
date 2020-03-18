<template>
    <div class="home">
        <el-row
            id="artList"
            type="flex"
            justify="space-around"
        >
            <el-col :span="16">

                <el-row
                    v-for="(post, index) in posts.data"
                    :key="index"
                    class="art-item"
                >
                    <el-card shadow="hover">
                        <h5>
                            <router-link
                                :to="'/article/'+post.slug"
                                tag="span"
                                class="art-title"
                            >{{post.title}}</router-link>
                        </h5>
                        <el-row class="art-info d-flex align-items-center justify-content-start">
                            <div class="art-time">
                                <i class="el-icon-time"></i>：{{post.created_at}}
                            </div>
                            <div class="d-flex align-items-center">
                                <img
                                    class="tag"
                                    src="../../images/tag.png"
                                />：
                                <el-tag
                                    v-if="post.tag.length==0"
                                    size="mini"
                                    style="margin-right: 4px;"
                                >无标签</el-tag>
                                <el-tag
                                    v-else
                                    v-for="(tag, index) in post.tag"
                                    :key="index"
                                    size="mini"
                                    style="margin-right: 4px;"
                                >{{tag.name}}</el-tag>
                            </div>
                        </el-row>
                        <el-row class="art-body">
                            <div class="side-img hidden-sm-and-down">
                                <img
                                    class="art-banner"
                                    :src="'/storage/' + post.image"
                                />
                            </div>
                            <div class="side-abstract">
                                <div class="art-abstract">{{post.excerpt}}</div>
                                <div class="art-more">
                                    <router-link
                                        :to="'/article/'+post.slug"
                                        tag="span"
                                    >
                                        <el-button plain>{{$t('home.readMore')}}</el-button>
                                    </router-link>
                                    <div class="view">
                                        <i class="el-icon-view"></i> {{post.view_num?post.view_num:0}}
                                    </div>
                                </div>
                            </div>
                        </el-row>
                    </el-card>
                    <img
                        v-show="post.featured"
                        class="star"
                        src="../../images/star.png"
                    />
                </el-row>

                <div class="block pagination">
                    <el-pagination
                        background
                        :current-page="currentPage"
                        :page-sizes="[5, 10, 20, 50, 100]"
                        :page-size="pagesize"
                        :total="posts.total"
                        layout="total, sizes, prev, pager, next, jumper"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                    ></el-pagination>
                </div>
            </el-col>
            <el-col
                :span="6"
                class="hidden-sm-and-down"
                id="side"
            >
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
import HttpAPI from '../api/httpAPI';
import friend from '../components/friend'
import tag from '../components/tag'
export default {
    name: 'home',
    data() {
        return {
            posts: [],
            currentPage: 1, //  el-pagination 初始页
            pagesize: 5 //  el-pagination 每页的数据
        }
    },
    components: {
        friend,
        tag
    },
    created() {
        this.getPostList()
    },
    methods: {
        getPostList: function () {
            // 发起请求
            let list_r = HttpAPI.getList({
                page: this.currentPage,
                per_page: this.pagesize
            })
            list_r.then(res => {
                if (!this._.isEmpty(res)) {
                    this.posts = res.data.data;
                    console.log(this.posts.data);
                }
            })
        },
        // size-change	pageSize 改变时会触发	每页条数size
        // current-change	currentPage 改变时会触发	当前页currentPage
        handleSizeChange: function (size) {
            this.pagesize = size
            console.log(this.pagesize)
            this.getPostList() // 每页下拉显示数据
        },
        handleCurrentChange: function (currentPage) {
            this.currentPage = currentPage
            console.log(this.currentPage)
            this.getPostList() // 点击第几页
        },
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
