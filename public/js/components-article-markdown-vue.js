(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{eZq8:function(t,e,n){"use strict";n.r(e);var a=n("SM2P"),i=n.n(a),o=(n("9Bey"),{name:"articles-markdown",props:{content:{type:String,default:"（/▽＼）看不见我"},url:{type:String,default:"--- LINK ---"}},components:{MarkdownItVue:i.a},mounted:function(){document.getElementById("markdown-it-vue").addEventListener("copy",this.setClipboardText,!1),this.handleMarkdownItVue()},methods:{setClipboardText:function(t){t.preventDefault();document.URL;var e=document.createElement("div");e.appendChild(window.getSelection().getRangeAt(0).cloneContents());var n="<div>"+e.innerHTML+"<br/><br/>".concat(this.$t("article.author"),"：洛九<br/>")+"".concat(this.$t("article.originalLink"),"：").concat(this.url,"<br/>")+"".concat(this.$t("article.copyright"),"：本博客所有文章除特别声明外,转载请注明出处!<br/><br/>")+"</div>",a=window.getSelection().getRangeAt(0)+"\n\n".concat(this.$t("article.author"),"：洛九\n")+"".concat(this.$t("article.originalLink"),"：").concat(this.url,"\n")+"".concat(this.$t("article.copyright"),"：本博客所有文章除特别声明外,转载请注明出处!\n\n");if(t.clipboardData)t.clipboardData.setData("text/html",n),t.clipboardData.setData("text/plain",a);else if(window.clipboardData)return window.clipboardData.setData("text",a)},handleMarkdownItVue:function(){this.$emit("handleMarkdownItVue")}}}),r=n("KHd+"),c=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("markdown-it-vue",{staticClass:"md-body",attrs:{id:"markdown-it-vue",content:this.content}})],1)}),[],!1,null,null,null);e.default=c.exports}}]);