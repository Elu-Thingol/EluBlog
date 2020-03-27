<template>
    <div class="tag">
        <el-card
            shadow="hover"
            v-loading="_.isEmpty(tags)"
            class="box-card"
        >
            <div
                slot="header"
                class="d-flex align-items-center"
            >
                <img
                    class="card-icon"
                    src="../../images/biaoqian.png"
                />
                <span>{{$t('tag.tag')}}</span>
            </div>
            <div class="text item">
                <el-tag
                    v-for="(tag, index) in tags.data"
                    :key="index"
                    size="mini"
                    class="tag-item"
                    @click="redirectTag(tag.name)"
                >{{tag.name}}[{{tag.posts_count}}]</el-tag>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'tag',
    data() {
        return {
            tags: []
        }
    },
    created() {
        this.getTags()
    },
    methods: {
        getTags: function () {
            // 发起请求
            let list_r = this.$HttpAPI.getTags()
            list_r.then(res => {
                if (!this._.isEmpty(res)) {
                    this.tags = res.data;
                    console.log(this.tags.data);
                }
            })
        },
        redirectTag: function (name) {
            this.$router.push({
                name: 'tag',
                params: {
                    'name': name
                }
            });
        }
    }
}
</script>

<style scoped>
.box-card .item:hover {
    color: #409eff;
    cursor: pointer;
}

.box-card span {
    font-weight: bold;
}

.card-icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}

.tag-item {
    margin-right: 6px;
    margin-bottom: 2px;
}
</style>
