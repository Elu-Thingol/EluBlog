<template>
    <div class="archive">
        <div class="count">{{this.$route.params.name || $t('header.archive')}}：{{count}} {{$t('archive.article')}}</div>
        <el-tabs tab-position="left"
                 v-loading="_.isEmpty(activities.data)"
                 element-loading-text="拼命加载中"
                 element-loading-spinner="el-icon-loading">
            <el-tab-pane v-if="_.isEmpty(activities.data)"></el-tab-pane>
            <el-tab-pane v-else-if="this.$route.name === 'tag'"
                         label="NO GROUP">
                <el-timeline>
                    <el-timeline-item v-for="(activity, index) in activities.data.post_list"
                                      :key="index"
                                      :color="activity.color"
                                      :timestamp="activity.published_at"
                                      placement="top"
                                      class="timeline-item">
                        <div class="line-item"
                             @mouseover="hoverLine(activity)"
                             @mouseout="leaveLine(activity)">
                            <router-link :to="$Helpers.articleUrl(+activity.slug)"
                                         tag="span">
                                {{activity.title}}
                            </router-link>
                        </div>
                    </el-timeline-item>
                </el-timeline>
            </el-tab-pane>
            <el-tab-pane v-else
                         v-for="(year, index) in years"
                         :key="index">
                <div slot="label">{{year.key}} <small>({{year.count}})</small></div>
                <el-timeline>
                    <el-timeline-item v-for="(activity, index) in activities.data[year.key]"
                                      :key="index"
                                      :color="activity.color"
                                      :timestamp="activity.published_at"
                                      placement="top"
                                      class="timeline-item">
                        <div class="line-item"
                             @mouseover="hoverLine(activity)"
                             @mouseout="leaveLine(activity)">
                            <router-link :to="$Helpers.articleUrl(+activity.slug)"
                                         tag="span">
                                {{activity.title}}
                            </router-link>
                        </div>
                    </el-timeline-item>
                </el-timeline>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    name: 'archive',
    data() {
        return {
            years: [],
            count: 0,
            activities: { data: {} }
        }
    },
    created() {
        if (this.$route.name === 'tag') {
            this.getByTag(this.$route.params.name)
        } else {
            this.getTimeline()
        }
    },
    methods: {
        getTimeline: function () {
            // 发起请求
            let list_r = this.$HttpAPI.getTimeline()
            list_r.then(res => {
                if (!this._.isEmpty(res)) {
                    this.activities = res.data
                    Object.keys(this.activities.data).sort((a, b) => { return b - a }).map(key => {
                        let count = this.activities.data[key].length
                        this.count += count
                        this.years.push({ key: key, count: count })
                    })
                    console.log(this.years)
                    console.log(this.activities.data)
                }
            })
        },
        getByTag: function (name) {
            // 发起请求
            let list_r = this.$HttpAPI.getByTag(name)
            list_r.then(res => {
                if (!this._.isEmpty(res)) {
                    this.activities = res.data
                    this.count = this.activities.data.post_list.length
                    console.log(this.activities.data)
                }
            })
        },
        hoverLine: function (activity) {
            if (!activity.first) {
                activity.first = true
                this.$set(activity, "color", "#409eff")
            }
            activity.color = "#409eff"
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
