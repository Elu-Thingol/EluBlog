<template>
    <div class="apply">
        <el-row class="main"
                type="flex"
                justify="center">
            <el-col :span="16">
                <h5 class="title"><i class="el-icon-circle-plus-outline"></i>{{$t('apply.process')}}</h5>
                <el-divider></el-divider>
                <el-card shadow="hover">
                    <el-steps align-center
                              :active="currStep">
                        <el-step :title="$t('apply.step1')"
                                 description="首先接入本博客站点"></el-step>
                        <el-step :title="$t('apply.step2')"
                                 description="提交您的站点信息"></el-step>
                        <el-step :title="$t('apply.step3')"
                                 description="等待审核，邮件通知"></el-step>
                    </el-steps>
                    <div class="stepContent"
                         v-if="currStep === 1"
                         v-loading="_.isEmpty(blog)"
                         element-loading-text="拼命加载中"
                         element-loading-spinner="el-icon-loading">
                        <div class="statement">
                            <div class="item">
                                <span style='float:left;width:4.2em'>{{$t('apply.blogLink')}}</span>：{{_.isEmpty(blog)?'':$Helpers.urlTail(blog.address)}}
                            </div>
                            <div class="item">
                                <span style='float:left;width:4.2em'>{{$t('apply.nickName')}}</span>：{{_.isEmpty(blog)?'':blog.personal.nickname}}
                            </div>
                            <div class="item">
                                <span style='float:left;width:4.2em'>{{$t('apply.introduction')}}</span>：{{_.isEmpty(blog)?'':blog.introduction}}
                            </div>
                        </div>

                    </div>
                    <div class="stepContent"
                         v-if="currStep === 2">
                        <el-form label-position="right"
                                 :rules="rules"
                                 label-width="80px"
                                 ref="formLabelAlign"
                                 :model="formLabelAlign">
                            <el-form-item :label="$t('apply.nickName')"
                                          prop="name">
                                <el-input v-model="formLabelAlign.name"></el-input>
                            </el-form-item>
                            <el-form-item :label="$t('apply.email')"
                                          prop="email">
                                <el-input v-model="formLabelAlign.email"></el-input>
                            </el-form-item>
                            <el-form-item :label="$t('apply.blogLink')"
                                          prop="blogLink">
                                <el-input v-model="formLabelAlign.blogLink"></el-input>
                            </el-form-item>
                            <el-form-item :label="$t('apply.notes')"
                                          prop="notes">
                                <el-input type="textarea"
                                          v-model="formLabelAlign.notes"></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="stepContent"
                         v-if="currStep === 3">
                        <p class="tips">
                            <i class="el-icon-success"
                               style="color: #409EFF;font-size: 30px;"></i><br /> 感谢您对本站的信赖，审核成功后我将以邮件的方式通知您。
                        </p>
                    </div>
                    <el-row type="flex"
                            class="btn-tool"
                            justify="space-around">
                        <el-button icon="el-icon-circle-close-outline"
                                   v-if="currStep === 2"
                                   @click="lastStep">{{$t('apply.process')}}</el-button>
                        <el-button type="primary"
                                   icon="el-icon-circle-check-outline"
                                   @click="nextStep"
                                   v-if="currStep !== 3">{{$t('apply.next')}}</el-button>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'apply',
    data() {
        return {
            currStep: 1,
            formLabelAlign: {
                name: '',
                email: '',
                blogLink: '',
                notes: ''
            },
            rules: {
                name: [{
                    required: true,
                    message: '请输入您的昵称',
                    trigger: 'blur'
                }],
                email: [{
                    required: true,
                    message: '请输入邮箱地址',
                    trigger: 'blur'
                },
                {
                    type: 'email',
                    message: '请输入正确的邮箱地址',
                    trigger: ['blur', 'change']
                }
                ],
                blogLink: [{
                    required: true,
                    message: '请输入博客',
                    trigger: 'blur'
                }],
                notes: [{
                    required: false,
                    message: '请输入额外备注',
                    trigger: 'blur'
                }]
            }
        }
    },
    computed: {
        ...mapGetters({
            blog: 'info/getBlog',
        }),
    },
    methods: {
        submitForm: function (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$confirm('即将提交信息, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$HttpAPI.postFriends(this.formLabelAlign, this).then(res => {
                            this.$message({
                                type: 'info',
                                message: '正在提交'
                            })

                            if (0 === res.data.code) {
                                this.$notify({
                                    title: '提交成功',
                                    message: '您所填写的信息已提交成功',
                                    type: 'success',
                                    offset: 60,
                                    showClose: false
                                })

                                this.currStep++
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
                            message: '已取消提交'
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
        nextStep: function () {
            if (this.currStep === 2) {
                this.submitForm('formLabelAlign')
            } else {
                this.currStep++
            }
        },
        lastStep: function () {
            this.currStep--
        }
    }
}
</script>

<style scoped>
.title {
    margin-top: 40px;
}

.statement {
    padding: 20px;
    background-color: #ebeef5;
    margin-top: 20px;
}

.stepContent {
    margin: 30px 0;
}

.stepContent .tips {
    font-size: 18px;
    text-align: center;
}
</style>
