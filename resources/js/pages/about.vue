<template>
    <div class="about">
        <el-row class="main"
                type="flex"
                justify="center"
                v-loading="_.isEmpty(blog)"
                element-loading-text="拼命加载中"
                element-loading-spinner="el-icon-loading">
            <el-col :span="16">
                <h5 class="title"><i class="el-icon-star-on"></i>{{$t('about.aboutMe')}}</h5>
                <el-card class="statement"
                         shadow="never"
                         :body-style="{ padding: '0px' }">
                    <div class="item">{{_.isEmpty(blog)?'昵称':blog.personal.nickname}}</div>
                    <div class="item"><span style='float:left;width:3.5em'>座右铭</span>：{{_.isEmpty(blog)?'':blog.personal.motto}}</div>
                </el-card>
                <el-card class="statement"
                         shadow="never"
                         :body-style="{ padding: '0px' }">
                    <div class="item"><span style='float:left;width:3.5em'>Email</span>：{{_.isEmpty(blog)?'':blog.contact.email}}</div>
                    <div class="item"><span style='float:left;width:3.5em'>QQ</span>：{{_.isEmpty(blog)?'':blog.contact.qq}}</div>
                    <div class="item"><span style='float:left;width:3.5em'>GitHub</span>：<a target="_blank"
                           :href="_.isEmpty(blog)?'#':blog.contact.github">{{_.isEmpty(blog)?'':blog.contact.github}}</a>
                    </div>
                </el-card>
                <h5 class="title"><i class="el-icon-star-on"></i>{{$t('about.aboutBlog')}}</h5>
                <el-card shadow="always">
                    <dl class="dl-blog">
                        <dt>{{$t('about.blogSource')}}</dt>
                        <dd>
                            <a v-for="(item, index) in _.isEmpty(blog)?[]:blog.info.blog_source"
                               :key="index"
                               target="_blank"
                               :href="item.url">
                                <img class="icon"
                                     :src="item.img.src"
                                     :alt="item.img.alt" />
                            </a>
                        </dd>
                        <dt>{{$t('about.technology')}}</dt>
                        <dd>{{_.isEmpty(blog)?'':blog.info.technology}}</dd>
                        <dt>{{$t('about.other')}}</dt>
                        <dd>{{_.isEmpty(blog)?'':blog.info.other}}</dd>
                    </dl>
                </el-card>
                <h5 class="title"><i class="el-icon-star-on"></i>{{$t('about.contactMe')}}</h5>
                <el-card shadow="always"
                         @click.native="handleTip">
                    <el-form label-position="left"
                             :rules="rules"
                             label-width="80px"
                             ref="formLabelAlign"
                             :model="formLabelAlign"
                             :disabled="isFormDisabled"
                             style="margin: 22px 5px 0 5px;">
                        <el-form-item :label="$t('about.yourName')"
                                      prop="name">
                            <el-input v-model="formLabelAlign.name"></el-input>
                        </el-form-item>
                        <el-form-item :label="$t('about.email')"
                                      prop="email">
                            <el-input v-model="formLabelAlign.email"></el-input>
                        </el-form-item>
                        <el-form-item :label="$t('about.content')"
                                      prop="content">
                            <el-input type="textarea"
                                      v-model="formLabelAlign.content"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary"
                                       @click="submitForm('formLabelAlign')">{{$t('about.submit')}}</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'about',
    data() {
        return {
            isFormDisabled: false,
            formLabelAlign: {
                name: '',
                email: '',
                content: ''
            },
            rules: {
                name: [{
                    required: true,
                    message: this.$t('about.nameTip'),
                    trigger: 'blur'
                }],
                email: [{
                    required: true,
                    message: this.$t('about.emailTip1'),
                    trigger: 'blur'
                },
                {
                    type: 'email',
                    message: this.$t('about.emailTip2'),
                    trigger: ['blur', 'change']
                }
                ],
                content: [{
                    required: true,
                    message: this.$t('about.contentTip'),
                    trigger: 'blur'
                }]
            }
        }
    },
    computed: {
        ...mapGetters({
            blog: 'info/getBlog',
            canSubmit: 'canFeedbackSubmit',
            getTimeRemaining: 'getFeedbackTimeRemaining'
        })
    },
    created() {
        this.runInterval()
    },
    destroyed() {
        clearInterval(this.interval)
    },
    methods: {
        ...mapActions({
            setSubmitTime: 'SET_FEEDBACK_SUBMIT_TIME'
        }),
        submitForm: function (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$confirm('即将提交信息, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$HttpAPI.postFeedback(this.formLabelAlign, this).then(res => {
                            if (0 === res.data.code) {
                                this.$notify({
                                    title: '提交成功',
                                    message: '您所填写的信息已提交成功',
                                    type: 'success',
                                    offset: 60,
                                    showClose: false
                                })

                                this.setSubmitTime()
                                this.runInterval()
                                this.formLabelAlign.name = ''
                                this.formLabelAlign.email = ''
                                this.formLabelAlign.content = ''
                            } else {
                                this.$notify({
                                    title: '提交失败',
                                    message: '您所填写的信息未能提交成功',
                                    type: 'warning',
                                    offset: 60,
                                    showClose: false
                                })

                                console.info(res.data.code)
                                console.info(res.data.message)
                                console.info(res.data.data)
                            }
                        })
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '您已取消提交'
                        })
                    })
                } else {
                    this.$notify({
                        title: '提交拦截',
                        message: '请检查填写的信息是否完备',
                        type: 'warning',
                        offset: 60,
                        showClose: false
                    })
                    return false
                }
            })
        },
        runInterval: function () {
            var vm = this
            vm.isFormDisabled = !vm.canSubmit()
            vm.interval = setInterval(function () {
                vm.isFormDisabled = !vm.canSubmit()
                if (vm.canSubmit()) {
                    clearInterval(vm.interval)
                    return
                }
            }, 500)
        },
        handleTip: function () {
            if (this.isFormDisabled) {
                const h = this.$createElement

                this.$notify({
                    title: '动作拦截',
                    message: h('div',
                        [
                            h('p', '300秒内不允许重复留言'),
                            h('p', `请您在 ${ this._.ceil(300 - this.getTimeRemaining() / 1000) } 秒后再试`)
                        ]),
                    type: 'warning',
                    offset: 60,
                    showClose: false
                })
            }
        }
    }
}
</script>

<style scoped>
.dl-blog dd {
    margin-left: 30px;
}

.dl-blog .icon {
    width: 20px;
    height: 20px;
}

.title {
    margin-top: 40px;
}

.statement {
    border-left: 3px solid #f56c6c;
    padding: 20px;
    background-color: #ebeef5;
    margin-top: 20px;
}
</style>
