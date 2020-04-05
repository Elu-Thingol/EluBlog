<template>
    <div class="app">
        <!-- <f-header :class="{'navBarWrap':navBarFixed}" ></f-header> -->
        <f-header class="navBarWrap"></f-header>
        <el-row type="flex"
                justify="center"
                id="content">
            <!-- <el-col :xs="20" :md="20" :style="{'minHeight':minHeight+'px'}" > -->
            <el-col :xs="20"
                    :md="20">
                <transition :name="transitionName">
                    <keep-alive include="list, detail">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </el-col>
        </el-row>
        <f-footer></f-footer>
    </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
    name: 'app',
    data() {
        return {
            // 吸顶导航 现用css样式实现
            /*             minHeight: 0,
                        navBarFixed: false, */
            transitionName: "" // 切页动画
        }
    },
    components: {
    },
    created() {
        this.infoInit()
    },
    methods: {
        ...mapActions({
            infoInit: 'info/INFO_INIT'
        })
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
    },
    watch: {
        '$route': function () {
            // 切页动画
            if (window.$isBack != null) {
                this.transitionName = window.$isBack ? 'slide-right' : 'slide-left'
            }
        }
    }
}
</script>

<style scoped>
.app {
    font-family: 'microsoft yahei';
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

/* 切页动画 */
.router-view {
    position: absolute;
    top: 0;
    width: 100%;
    transition: all 0.3s ease;
}

.slide-left-enter,
.slide-right-leave-active {
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
}
</style>
