<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="洛九,洛九的博客,Elu,Elu的博客,Elu's Blog" />
    <meta name="description" content="{{setting('site.description')}}" />

    <title>{{setting('site.title')}} - {{setting('site.description')}}</title>

    <link rel="icon" type="image/x-icon" href="storage/{{setting('site.logo')}}">

    <script>
        var blog_address = "{{setting('blog.address')}}";
        
        function errorload(elem) { //cdn错误
            if (elem.getAttribute('data-errorTimes') == 1) { 
                elem.onerror = null; // 执行完onerror事件后，置οnerrοr=null 来清除onerror事件。
                return;
            }
            elem.setAttribute('data-errorTimes', 1);
            var _src = elem.getAttribute('data-localSrc');
            if (elem.tagName === "SCRIPT") {loadScript(_src, elem)}
            if (elem.tagName === "LINK") {loadLink(_src, elem)}
        }
    
        function loadScript(_src, prevEl) { //引入本地js
            var _el = document.createElement('script');
            _el.src = _src;
            if (prevEl) {
                prevEl.parentNode.insertBefore(_el, prevEl.nextSibling);
            } else {
                document.body.appendChild(_el);
            }
        }
    
        function loadLink(_src, prevEl) { //引入本地css
            var _el = document.createElement('link');
            _el.href = _src;
            _el.rel = "stylesheet";
            _el.type = "text/css";
            if (prevEl) {
                prevEl.parentNode.insertBefore(_el, prevEl.nextSibling);
            } else {
                document.body.appendChild(_el);
            }
        }
    </script>

    <link data-localSrc="{{mix('vendor/element-ui/2.13.0/theme-chalk/index.css')}}"
        href="//cdn.bootcss.com/element-ui/2.13.0/theme-chalk/index.css" rel="stylesheet" type="text/css"
        onerror="errorload(this)" />
    <link data-localSrc="{{mix('vendor/social-share.js/1.0.16/css/share.min.css')}}"
        href="//cdn.bootcss.com/social-share.js/1.0.16/css/share.min.css" rel="stylesheet" type="text/css"
        onerror="errorload(this)" />
    <link data-localSrc="{{mix('css/app.css')}}"
        href="//cdn.jsdelivr.net/gh/Elu-Thingol/EluBlog@1.0.5/public{{mix('css/app.css')}}" rel="stylesheet" type="text/css"
        onerror="errorload(this)" />
    <link data-localSrc="{{mix('vendor/markdown-it-vue@1.1.3/dist/markdown-it-vue.css')}}"
        href="//cdn.jsdelivr.net/gh/Elu-Thingol/EluBlog@1.0.5/public/vendor/markdown-it-vue@1.1.3/dist/markdown-it-vue.css"
        rel="stylesheet" type="text/css" onerror="errorload(this)" />
    <link data-localSrc="{{mix('vendor/prism/prism.css')}}"
        href="//cdn.jsdelivr.net/gh/Elu-Thingol/EluBlog@1.0.5/public/vendor/prism/prism.css" rel="stylesheet"
        type="text/css" onerror="errorload(this)" />

    <style>
        #live2dcanvas {
            border: 0 !important;
        }

        #live2d-widget {
            z-index: 400 !important;
        }

        #loader-wrapper .loader-section {
            background: #6e6e6e;
            -webkit-animation: Gradient 15s ease infinite;
            -moz-animation: Gradient 15s ease infinite;
            animation: Gradient 15s ease infinite;
        }

        @-webkit-keyframes Gradient {
            0% {
                background-color: #6e6e6e;
            }

            25% {
                background-color: #161616;
            }

            50% {
                background-color: #6e6e6e;
            }

            75% {
                background-color: #c7c7c7;
            }

            100% {
                background-color: #6e6e6e;
            }
        }

        @-moz-keyframes Gradient {
            0% {
                background-color: #6e6e6e;
            }

            25% {
                background-color: #161616;
            }

            50% {
                background-color: #6e6e6e;
            }

            75% {
                background-color: #c7c7c7;
            }

            100% {
                background-color: #6e6e6e;
            }
        }

        @keyframes Gradient {
            0% {
                background-color: #6e6e6e;
            }

            25% {
                background-color: #161616;
            }

            50% {
                background-color: #6e6e6e;
            }

            75% {
                background-color: #c7c7c7;
            }

            100% {
                background-color: #6e6e6e;
            }
        }
    </style>
</head>

<body>
    <noscript>
        <strong>We're sorry but Elu's Blog doesn't work properly without JavaScript enabled. Please enable it to
            continue.</strong>
    </noscript>

    <div id="app">
        <div id="loader-wrapper">
            <div id="loader"></div>
            <div class="loader-section section-left"></div>
            <div class="loader-section section-right"></div>
            <div class="load_title">正在加载 <strong>Elu's Blog</strong> 请耐心等待
                <br>
                <span>V1.0</span>
            </div>
        </div>
    </div>

    <div id="jsi-flying-fish-container" class="container"></div>
    <div class="back-to-top cd-top faa-float animated cd-is-visible" style="top: -999px;"></div>
</body>

<script data-localSrc="{{mix('vendor/lodash.js/4.17.15/lodash.min.js')}}" type="text/javascript"
    src="//cdn.bootcss.com/lodash.js/4.17.15/lodash.min.js" onerror="errorload(this)"></script>
<script data-localSrc="{{mix('vendor/jquery/3.4.1/jquery.min.js')}}" type="text/javascript"
    src="//cdn.bootcss.com/jquery/3.4.1/jquery.min.js" onerror="errorload(this)"></script>
<script data-localSrc="{{mix('vendor/axios/0.19.2/axios.min.js')}}" type="text/javascript"
    src="//cdn.bootcss.com/axios/0.19.2/axios.min.js" onerror="errorload(this)"></script>
<script data-localSrc="{{mix('vendor/vue/2.6.11/vue.min.js')}}" type="text/javascript"
    src="//cdn.bootcss.com/vue/2.6.11/vue.min.js" onerror="errorload(this)"></script>
<script data-localSrc="{{mix('vendor/vuex/3.1.3/vuex.min.js')}}" type="text/javascript"
    src="//cdn.bootcss.com/vuex/3.1.3/vuex.min.js" onerror="errorload(this)"></script>
<script data-localSrc="{{mix('vendor/vue-i18n/8.16.0/vue-i18n.min.js')}}" type="text/javascript"
    src="//cdn.bootcss.com/vue-i18n/8.16.0/vue-i18n.min.js" onerror="errorload(this)"></script>
<script data-localSrc="{{mix('vendor/vue-router/3.1.3/vue-router.min.js')}}" type="text/javascript"
    src="//cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js" onerror="errorload(this)"></script>
<script data-localSrc="{{mix('vendor/element-ui/2.13.0/index.js')}}" type="text/javascript"
    src="//cdn.bootcss.com/element-ui/2.13.0/index.js" onerror="errorload(this)"></script>
<script data-localSrc="{{mix('vendor/element-ui/2.13.0/locale/zh-CN.min.js')}}" type="text/javascript"
    src="//cdn.bootcss.com/element-ui/2.13.0/locale/zh-CN.min.js" onerror="errorload(this)"></script>
<script data-localSrc="{{mix('vendor/markdown-it-vue@1.1.3/dist/markdown-it-vue.umd.js')}}" type="text/javascript"
    src="//cdn.jsdelivr.net/gh/Elu-Thingol/markdown-it-vue@1.1.3/dist/markdown-it-vue.umd.js" onerror="errorload(this)">
</script>
<script data-localSrc="{{mix('js/app.js')}}" type="text/javascript"
    src="//cdn.jsdelivr.net/gh/Elu-Thingol/EluBlog@1.0.5/public/vendor/app{{mix('js/app.js')}}" jspathanchor="true"
    onerror="errorload(this)"></script>
<script data-localSrc="{{mix('js/app-heart.js')}}" type="text/javascript"
    src="//cdn.jsdelivr.net/gh/Elu-Thingol/EluBlog@1.0.5/public/vendor/app{{mix('js/app-heart.js')}}" onerror="errorload(this)">
</script>
<script data-localSrc="{{mix('js/app-other.js')}}" type="text/javascript"
    src="//cdn.jsdelivr.net/gh/Elu-Thingol/EluBlog@1.0.5/public/vendor/app{{mix('js/app-other.js')}}" onerror="errorload(this)">
</script>
<script data-localSrc="{{mix('vendor/live2dw/lib/L2Dwidget.min.js')}}" type="text/javascript"
    src="//cdn.jsdelivr.net/gh/Elu-Thingol/EluBlog@1.0.5/public/vendor/live2dw/lib/L2Dwidget.min.js"
    onerror="errorload(this)"></script>
<script data-localSrc="{{mix('vendor/live2dw/lib/L2Dwidget.0.min.js')}}" type="text/javascript"
    src="//cdn.jsdelivr.net/gh/Elu-Thingol/EluBlog@1.0.5/public/vendor/live2dw/lib/L2Dwidget.0.min.js"
    onerror="errorload(this)">
</script>
<script>
    L2Dwidget.init({
            pluginRootPath: "vendor/live2dw/",
            pluginJsPath: "lib/",
            pluginModelPath: "assets/",
            tagMode: false,
            debug: false,
            model: { 
                jsonPath: "vendor/live2dw/assets/hijiki.model.json" 
            },
            display: { 
                superSample: 2,
                position: "right", 
                width: 200, height: 400,
                hOffset: 100,
                vOffset: -55 
            },
            mobile: { 
                show: true 
            },
            log: false
        })
</script>

</html>
