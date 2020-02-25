<template>
    <div class="app">
        <!-- <f-header :class="{'navBarWrap':navBarFixed}" ></f-header> -->
        <f-header class="navBarWrap"></f-header>
        <el-row
            type="flex"
            justify="center"
            id="content"
        >
            <!-- <el-col :xs="20" :md="20" :style="{'minHeight':minHeight+'px'}" > -->
            <el-col
                :xs="20"
                :md="20"
            >
                <router-view></router-view>
            </el-col>
        </el-row>
        <f-footer></f-footer>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            // 吸顶导航 现用css样式实现
            /*             minHeight: 0,
                        navBarFixed: false, */
        }
    },
    components: {
    },
    methods: {
        // 吸顶导航 现用css样式实现
        /*         watchScroll() {
                    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                    //  当滚动超过 50 时，实现吸顶效果
                    if (scrollTop > 50) {
                        this.navBarFixed = true
                    } else {
                        this.navBarFixed = false
                    }
                } */
    },
    mounted() {
        // 吸顶导航 现用css样式实现
        /*         let that = this
                that.minHeight = document.documentElement.clientHeight
                window.addEventListener('scroll', that.watchScroll)
                window.onresize = function () {
                    that.minHeight = document.documentElement.clientHeight
                } */
    }
}
</script>

<style scoped>
.app {
    font-family: "microsoft yahei";
}
#content {
    /* background-color: #f9f9f9; */
    padding: 30px 0;
}
/* 吸顶导航 现用css样式实现 */
.navBarWrap {
    /* position: fixed; */
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 999;
    width: 100%;
}
</style>
