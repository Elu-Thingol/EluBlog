<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="洛九,洛九的博客,Elu,Elu的博客,Elu's Blog" />
    <meta name="description" content="{{setting('site.description')}}" />

    <title>{{setting('site.title')}} - {{setting('site.description')}}</title>
    <link rel="icon" type="image/x-icon" href="storage/{{setting('site.logo')}}">

    <link href="https://cdn.bootcss.com/element-ui/2.13.0/theme-chalk/index.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.bootcss.com/social-share.js/1.0.16/css/share.min.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.jsdelivr.net/npm/markdown-it-vue@1.0.11/dist/markdown-it-vue.css" rel="stylesheet" type="text/css" />
    <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css" />

    <style>
        #live2dcanvas {
            border: 0 !important;
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

    <script>
        var blog_address = "{{setting('blog.address')}}";
    </script>
    <script type="text/javascript" src="https://cdn.bootcss.com/lodash.js/4.17.15/lodash.min.js"></script>
    <script type="text/javascript" src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdn.bootcss.com/axios/0.19.2/axios.min.js"></script>
    <script type="text/javascript" src="https://cdn.bootcss.com/vue/2.6.11/vue.min.js"></script>
    <script type="text/javascript" src="https://cdn.bootcss.com/vuex/3.1.3/vuex.min.js"></script>
    <script type="text/javascript" src="https://cdn.bootcss.com/vue-i18n/8.16.0/vue-i18n.min.js"></script>
    <script type="text/javascript" src="https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js"></script>
    <script type="text/javascript" src="https://cdn.bootcss.com/element-ui/2.13.0/index.js"></script>
    <script type="text/javascript" src="https://cdn.bootcss.com/element-ui/2.13.0/locale/zh-CN.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/markdown-it-vue@1.0.11/dist/markdown-it-vue.umd.min.js"></script>
    <script type="text/javascript" src="{{mix('js/app.js')}}"></script>
    <script type="text/javascript" src="{{mix('js/app-heart.js')}}"></script>
    <script type="text/javascript" src="{{mix('js/app-other.js')}}"></script>
    <script type="text/javascript" src="{{mix('vendor/live2dw/lib/L2Dwidget.min.js')}}"></script>
    <script type="text/javascript" src="{{mix('vendor/live2dw/lib/L2Dwidget.0.min.js')}}"></script>
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
                position: "left", 
                width: 200, height: 400,
                hOffset: 10,
                vOffset: -55 
            },
            mobile: { 
                show: true 
            },
            log: false
        })
    </script>
</body>

</html>
