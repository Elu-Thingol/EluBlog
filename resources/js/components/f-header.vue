<template>
    <div>
        <el-menu
            :default-active="activeIndex"
            class="d-flex"
            mode="horizontal"
            router
            type="flex"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b" 
        >
            <el-menu-item class="
            mr-auto"
        >洛九小筑</el-menu-item>
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
export default {
    name: 'f-header',
    data() {
        return {
            activeIndex: '/home'
        };
    },
    methods: {
        toggleLang(lang) {
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
