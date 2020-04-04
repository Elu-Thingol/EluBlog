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
                <el-card shadow="always">
                    <el-form label-position="left"
                             :rules="rules"
                             label-width="80px"
                             ref="formLabelAlign"
                             :model="formLabelAlign">
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
import { mapGetters } from 'vuex'
export default {
    name: 'about',
    data() {
        return {
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
        }),
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!')
                } else {
                    return false
                }
            })
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
