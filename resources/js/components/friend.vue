<template>
    <div class="friend">
        <el-card shadow="hover"
                 v-loading="_.isEmpty(friends)"
                 class="box-card">
            <div slot="header"
                 class="d-flex align-items-center">
                <img class="card-icon"
                     src="../../images/lianjie.png" />
                <span>{{$t('friend.friend')}}</span>
                <el-button class="ml-auto"
                           style="padding: 3px 0"
                           type="text">
                    <router-link to="/apply"
                                 tag="span">{{$t('friend.exchange')}}</router-link>
                </el-button>
            </div>
            <el-collapse v-model="activeName"
                         accordion>
                <div v-for="(friend, index) in friends.data"
                     :key="index"
                     class="collapse-item"
                     @mouseover="hoverItem(friend.nickname)"
                     @mouseout="leaveItem(friend.nickname)">
                    <el-collapse-item :name="friend.nickname">
                        <template slot="title">
                            <el-link :underline="false"
                                     :href="$Helpers.trueUrl(friend.bloglink)"
                                     icon="el-icon-link"
                                     target="_blank">{{friend.label.trim()?friend.label:`${friend.nickname}的小站`}}</el-link>
                        </template>
                        <div style="padding:0 1.5em 0 1.5em;color:#909399;">{{friend.notes}}</div>
                    </el-collapse-item>
                </div>
            </el-collapse>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'friend',
    data() {
        return {
            activeName: '',
            friends: [],
            dialogVisible: false
        }
    },
    created() {
        this.getFriends()
    },
    methods: {
        getFriends: function () {
            // 发起请求
            let list_r = this.$HttpAPI.getFriends(this)
            list_r.then(res => {
                if (!this._.isEmpty(res)) {
                    this.friends = res.data
                }
            })
        },
        hoverItem: function (name) {
            this.activeName = name
        },
        leaveItem: function (name) {
            this.activeName = ''
        }
    }
}
</script>

<style scoped>
.box-card .item a {
    text-decoration: none;
    /*color: #F56C6C;*/
}
.box-card span {
    font-weight: bold;
}
.card-icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
.el-collapse {
    border-top: 0;
}
.el-collapse-item:last-child {
    margin-bottom: 0;
}

.collapse-item:last-child {
    margin-bottom: -1px;
}
</style>

<style>
.collapse-item:last-child > .el-collapse-item > div > div {
    border-bottom: 0;
}
</style>
