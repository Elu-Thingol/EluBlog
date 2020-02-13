<template>
    <div class="archive">
        <div class="count">{{this.$route.params.name || $t('header.archive')}}：234{{$t('archive.article')}}</div>
        <el-timeline>
            <el-timeline-item
                class="timeline-item"
                v-for="(activity, index) in activities"
                :key="index"
                :color="activity.color"
                :timestamp="activity.timestamp"
                placement="top"
            >
                <div
                    class="line-item"
                    @mouseover="hoverLine(activity)"
                    @mouseout="leaveLine(activity)"
                >
                    <router-link
                        to="/article"
                        tag="span"
                    >{{activity.content}}</router-link>
                </div>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
export default {
    name: 'archive',
    data() {
        return {
            activities: [{
                content: 'springBoot整合Redis',
                timestamp: '2018-04-15',
                color: "#E4E7ED"
            }, {
                content: 'Activiti工作流',
                timestamp: '2018-04-13',
                color: "#E4E7ED"
            }, {
                content: 'Vue路由',
                timestamp: '2018-04-11',
                color: "#E4E7ED"
            }]
        };
    },
    methods: {
        hoverLine: function (activity) {
            activity.color = "#409eff"
            console.log(1);

        },
        leaveLine: function (activity) {
            activity.color = "#E4E7ED"
        }
    }
}
</script>

<style scoped>
.line-item {
    display: inline-block;
}

.line-item:hover {
    cursor: pointer;
    color: #409eff;
}

.count {
    margin-bottom: 20px;
    font-size: 20px;
    color: #e6a23c;
}
</style>
