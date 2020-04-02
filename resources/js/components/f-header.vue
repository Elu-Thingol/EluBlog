<template>
    <div>
        <el-menu :default-active="activeIndex()"
                 class="d-flex"
                 mode="horizontal"
                 router
                 type="flex"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b">
            <el-menu-item class="mr-auto">
                <transition name="el-fade-in-linear">
                    <router-link to="/home"
                                 tag="span">
                        {{_.isEmpty(site)?'':site.title}}
                    </router-link>
                </transition>
            </el-menu-item>
            <el-menu-item index="/home">{{$t("header.home")}}</el-menu-item>
            <el-menu-item index="/archive">{{$t("header.archive")}}</el-menu-item>
            <el-menu-item index="/about">{{$t("header.about")}}</el-menu-item>
            <el-submenu index="/home">
                <template slot="title">{{$t("header.language")}}</template>
                <el-menu-item @click="toggleLang('zh')">{{$t("header.chinaese")}}</el-menu-item>
                <el-menu-item @click="toggleLang('en')">{{$t("header.english")}}</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'f-header',
    data() {
        return {
            defaultIndex: '/home'
        }
    },
    computed: {
        ...mapGetters({
            site: 'info/getSite',
        }),
    },
    methods: {
        activeIndex: function () {
            let index = this.$route.path
            if (["/home", "/archive", "/about"].indexOf(index) === -1) {
                index = this.defaultIndex
            }
            return index
        },
        toggleLang: function (lang) {
            if (lang === 'zh') {
                localStorage.setItem('locale', 'zh')
                this.$i18n.locale = localStorage.getItem('locale')
                this.$message({
                    message: '切换为中文！',
                    type: 'success'
                })
            } else if (lang === 'en') {
                localStorage.setItem('locale', 'en')
                this.$i18n.locale = localStorage.getItem('locale')
                this.$message({
                    message: 'Switch to English!',
                    type: 'success'
                })
            }
        }
    }
}
</script>

<style scoped>
/* .el-menu {
    background-color: #555;
    color: #ddd;
} */
.el-menu-item.is-active {
    /* color: #fff; */
    color: #fff;
}
</style>
