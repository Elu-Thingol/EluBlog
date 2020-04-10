<template>
    <div>
        <el-form inline>
            <el-form-item v-for="item in searchForm"
                          :label="item.label"
                          :key="item.prop">
                <!-- 输入框 -->
                <el-input v-model="listQuery.title"
                          placeholder="请输入搜索内容"
                          prefix-icon="el-icon-search"
                          clearable
                          style="width: 400px"
                          class="filter-item"
                          @keyup.enter.native="handleFilter"
                          v-if="item.type==='Input'" />
                <!-- 下拉选择器 -->
                <el-select v-model="listQuery.importance"
                           filterable
                           placeholder="标签筛选"
                           clearable
                           style="width: 120px"
                           class="filter-item"
                           v-if="item.type==='select'">
                    <el-option v-for="item in importanceOptions"
                               :key="item"
                               :label="item"
                               :value="item" />
                </el-select>
                <!-- 搜索按钮 -->
                <el-button style="margin-left: 5px;"
                           class="filter-item"
                           type="primary"
                           icon="el-icon-search"
                           @click="handleFilter"
                           v-if="item.type==='SearchBtn'">搜索</el-button>
                <!-- 清除按钮 -->
                <el-popconfirm title="要清除搜索吗？"
                               confirmButtonText='好的'
                               cancelButtonText='不用了'
                               icon="el-icon-info"
                               iconColor="red"
                               @onConfirm="handleClean">
                    <el-button slot="reference"
                               class="filter-item"
                               type="danger"
                               icon="el-icon-circle-close"
                               v-if="item.type==='CleanBtn'">清除</el-button>
                </el-popconfirm>
                <!-- 导出表格 -->
                <el-button class="filter-item"
                           type="primary"
                           icon="el-icon-download"
                           @click="handleDownload"
                           v-if="item.type==='downloadBtn'">导出</el-button>
                <!-- 添加 -->
                <el-button class="filter-item"
                           style="margin-left: 10px;"
                           type="primary"
                           icon="el-icon-edit"
                           @click="handleCreate"
                           v-if="item.type==='addBtn'">添加</el-button>
                <!-- 新建公告 -->
                <el-button class="filter-item"
                           style="margin-left: 10px;"
                           type="primary"
                           icon="el-icon-circle-plus-outline"
                           @click="handleNew"
                           v-if="item.type==='NewBtn'">新建公告</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    name: 'search-form',
    props: {
        // 所有的搜索组件
        searchForm: {
            type: Array,
            default: () => []
        },
        //双向数据绑定
        listQuery: {
            type: Object,
            default: () => { }
        },
        // 下拉选择器
        importanceOptions: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {}
    },
    methods: {
        // 搜索按钮传给父组件
        handleFilter() {
            this.$emit("handleFilter")
        },
        handleClean() {
            this.$emit("handleClean")
        },
        // 导出表格
        handleDownload() {
            this.$emit("handleDownload")
        },
        // 添加
        handleCreate() {
            this.$emit("handleCreate")
        },
        // 新建公告
        handleNew() {
            this.$emit("handleNew")
        }
    }
};
</script>
