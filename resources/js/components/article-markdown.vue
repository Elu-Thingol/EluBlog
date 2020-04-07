<template>
    <div>
        <markdown-it-vue id="markdown-it-vue"
                         class="md-body"
                         :content="content" />
    </div>
</template>
<script>
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'
export default {
    name: "articles-markdown", // 因为和article标记同名故改为复数形式
    props: {
        // 所有的搜索组件
        content: {
            type: String,
            default: '（/▽＼）看不见我'
        },
        url: {
            type: String,
            default: '--- LINK ---'
        },
    },
    components: {
        MarkdownItVue: MarkdownItVue
    },
    mounted() {
        document
            .getElementById('markdown-it-vue')
            .addEventListener('copy', this.setClipboardText, false)
        
        this.handleMarkdownItVue()
    },
    methods: {
        /*拷贝内容添加声明*/
        setClipboardText: function (event) {
            event.preventDefault()
            var url = document.URL
            var node = document.createElement('div')
            node.appendChild(
                window
                    .getSelection()
                    .getRangeAt(0)
                    .cloneContents()
            )
            var htmlData =
                '<div>' +
                node.innerHTML +
                `<br/><br/>${ this.$t('article.author') }：洛九<br/>` +
                `${ this.$t('article.originalLink') }：${ this.url }<br/>` +
                `${ this.$t(
                    'article.copyright'
                ) }：本博客所有文章除特别声明外,转载请注明出处!<br/><br/>` +
                '</div>'
            var textData =
                window.getSelection().getRangeAt(0) +
                `\n\n${ this.$t('article.author') }：洛九\n` +
                `${ this.$t('article.originalLink') }：${ this.url }\n` +
                `${ this.$t(
                    'article.copyright'
                ) }：本博客所有文章除特别声明外,转载请注明出处!\n\n`
            if (event.clipboardData) {
                event.clipboardData.setData('text/html', htmlData)
                event.clipboardData.setData('text/plain', textData)
            } else if (window.clipboardData) {
                return window.clipboardData.setData('text', textData)
            }
        },
        handleMarkdownItVue: function () {
            this.$emit("handleMarkdownItVue")
        }
    }
}
</script>
