(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"8M/n":function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,"\n.title[data-v-b5a0a866] {\r\n    margin-top: 40px;\n}\n.statement[data-v-b5a0a866] {\r\n    padding: 20px;\r\n    background-color: #ebeef5;\r\n    margin-top: 20px;\n}\n.stepContent[data-v-b5a0a866] {\r\n    margin: 30px 0;\n}\n.stepContent .tips[data-v-b5a0a866] {\r\n    font-size: 18px;\r\n    text-align: center;\n}\r\n",""])},"H/EY":function(e,t,n){"use strict";n.r(t);var i=n("WIBD");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={name:"apply",data:function(){return{currStep:1,isFormDisabled:!1,formLabelAlign:{name:"",email:"",blogLink:"",notes:""},rules:{name:[{required:!0,message:"请输入您的昵称",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],blogLink:[{required:!0,message:"请输入博客",trigger:"blur"}],notes:[{required:!1,message:"请输入额外备注",trigger:"blur"}]}}},computed:s({},Object(i.mapGetters)({blog:"info/getBlog",canSubmit:"canFriendSubmit",getTimeRemaining:"getFriendTimeRemaining"})),created:function(){this.runInterval()},destroyed:function(){clearInterval(this.interval)},methods:s({},Object(i.mapActions)({setSubmitTime:"SET_FRIEND_SUBMIT_TIME"}),{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return t.$notify({title:"提交拦截",message:"请检查填写的信息是否完备",type:"warning",offset:60,showClose:!1}),!1;t.$confirm("即将提交信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$HttpAPI.postFriends(t.formLabelAlign,t).then((function(e){0===e.data.code?(t.$notify({title:"提交成功",message:"您所填写的信息已提交成功",type:"success",offset:60,showClose:!1}),t.setSubmitTime(),t.runInterval(),t.currStep++):(t.$notify({title:"提交失败",message:"您所填写的信息未能提交成功",type:"warning",offset:60,showClose:!1}),console.info(e.data.code),console.info(e.data.message),console.info(e.data.data))}))})).catch((function(){t.$message({type:"info",message:"您已取消提交"})}))}))},nextStep:function(){2===this.currStep?this.submitForm("formLabelAlign"):this.currStep++},lastStep:function(){this.currStep--},runInterval:function(){var e=this;e.isFormDisabled=!e.canSubmit(),e.interval=setInterval((function(){e.isFormDisabled=!e.canSubmit(),e.canSubmit()&&clearInterval(e.interval)}),6e4)},handleTip:function(){if(this.isFormDisabled&&2===this.currStep){var e=this.$createElement;this.$notify({title:"动作拦截",message:e("div",[e("p","24小时内不允许重复申请"),e("p","请您在 ".concat(this._.ceil(24-this.getTimeRemaining()/36e5)," 小时后再试"))]),type:"warning",offset:60,showClose:!1})}}})},o=(n("QYrj"),n("KHd+")),c=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"apply"},[n("el-row",{staticClass:"main",attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:16}},[n("h5",{staticClass:"title"},[n("i",{staticClass:"el-icon-circle-plus-outline"}),e._v(e._s(e.$t("apply.process")))]),e._v(" "),n("el-divider"),e._v(" "),n("el-card",{attrs:{shadow:"hover"},nativeOn:{click:function(t){return e.handleTip(t)}}},[n("el-steps",{attrs:{"align-center":"",active:e.currStep}},[n("el-step",{attrs:{title:e.$t("apply.step1"),description:"首先接入本博客站点"}}),e._v(" "),n("el-step",{attrs:{title:e.$t("apply.step2"),description:"提交您的站点信息"}}),e._v(" "),n("el-step",{attrs:{title:e.$t("apply.step3"),description:"等待审核，邮件通知"}})],1),e._v(" "),1===e.currStep?n("div",{directives:[{name:"loading",rawName:"v-loading",value:e._.isEmpty(e.blog),expression:"_.isEmpty(blog)"}],staticClass:"stepContent",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}},[n("div",{staticClass:"statement"},[n("div",{staticClass:"item"},[n("span",{staticStyle:{float:"left",width:"4.2em"}},[e._v(e._s(e.$t("apply.blogLink")))]),e._v("："+e._s(e._.isEmpty(e.blog)?"":e.$Helpers.urlTail(e.blog.address))+"\n                        ")]),e._v(" "),n("div",{staticClass:"item"},[n("span",{staticStyle:{float:"left",width:"4.2em"}},[e._v(e._s(e.$t("apply.nickName")))]),e._v("："+e._s(e._.isEmpty(e.blog)?"":e.blog.personal.nickname)+"\n                        ")]),e._v(" "),n("div",{staticClass:"item"},[n("span",{staticStyle:{float:"left",width:"4.2em"}},[e._v(e._s(e.$t("apply.introduction")))]),e._v("："+e._s(e._.isEmpty(e.blog)?"":e.blog.introduction)+"\n                        ")])])]):e._e(),e._v(" "),2===e.currStep?n("div",{staticClass:"stepContent"},[n("el-form",{ref:"formLabelAlign",attrs:{"label-position":"right",rules:e.rules,"label-width":"80px",model:e.formLabelAlign,disabled:e.isFormDisabled}},[n("el-form-item",{attrs:{label:e.$t("apply.nickName"),prop:"name"}},[n("el-input",{model:{value:e.formLabelAlign.name,callback:function(t){e.$set(e.formLabelAlign,"name",t)},expression:"formLabelAlign.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:e.$t("apply.email"),prop:"email"}},[n("el-input",{model:{value:e.formLabelAlign.email,callback:function(t){e.$set(e.formLabelAlign,"email",t)},expression:"formLabelAlign.email"}})],1),e._v(" "),n("el-form-item",{attrs:{label:e.$t("apply.blogLink"),prop:"blogLink"}},[n("el-input",{model:{value:e.formLabelAlign.blogLink,callback:function(t){e.$set(e.formLabelAlign,"blogLink",t)},expression:"formLabelAlign.blogLink"}})],1),e._v(" "),n("el-form-item",{attrs:{label:e.$t("apply.notes"),prop:"notes"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.formLabelAlign.notes,callback:function(t){e.$set(e.formLabelAlign,"notes",t)},expression:"formLabelAlign.notes"}})],1)],1)],1):e._e(),e._v(" "),3===e.currStep?n("div",{staticClass:"stepContent"},[n("p",{staticClass:"tips"},[n("i",{staticClass:"el-icon-success",staticStyle:{color:"#409EFF","font-size":"30px"}}),n("br"),e._v(" 感谢您对本站的信赖，审核成功后我将以邮件的方式通知您。\n                    ")])]):e._e(),e._v(" "),n("el-row",{staticClass:"btn-tool",attrs:{type:"flex",justify:"space-around"}},[2===e.currStep?n("el-button",{attrs:{icon:"el-icon-circle-close-outline"},on:{click:e.lastStep}},[e._v(e._s(e.$t("apply.process")))]):e._e(),e._v(" "),3!==e.currStep?n("el-button",{attrs:{type:"primary",icon:"el-icon-circle-check-outline",disabled:2===e.currStep&&e.isFormDisabled},on:{click:e.nextStep}},[e._v(e._s(e.$t("apply.next")))]):e._e()],1)],1)],1)],1)],1)}),[],!1,null,"b5a0a866",null);t.default=c.exports},QYrj:function(e,t,n){"use strict";var i=n("gsvE");n.n(i).a},gsvE:function(e,t,n){var i=n("8M/n");"string"==typeof i&&(i=[[e.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,a);i.locals&&(e.exports=i.locals)}}]);