<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="洛九,洛九的博客,Elu,Elu的博客,Elu's Blog" />
    <meta name="description" content="{{setting('site.description')}}" />

    <title>{{setting('site.title')}} - {{setting('site.description')}}</title>
    <link rel="icon" type="image/x-icon" href="storage/{{setting('site.logo')}}">

    <link href="https://cdn.bootcss.com/element-ui/2.13.0/theme-chalk/index.css" rel="stylesheet">
    <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css" />
</head>

<body>
    <noscript>
        <strong>We're sorry but Elu's Blog doesn't work properly without JavaScript enabled. Please enable it to
            continue.</strong>
    </noscript>

    <div id="app"></div>
    <div id="jsi-flying-fish-container" class="container"></div>
    <div class="back-to-top cd-top faa-float animated cd-is-visible" style="top: -999px;"></div>

    <script>
        var blog_address = "{{setting('blog.address')}}";
    </script>
    <script src="https://cdn.bootcss.com/lodash.js/4.17.15/lodash.min.js"></script>
    <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdn.bootcss.com/axios/0.19.2/axios.min.js"></script>
    <script src="https://cdn.bootcss.com/vue/2.6.11/vue.min.js"></script>
    <script src="https://cdn.bootcss.com/vuex/3.1.3/vuex.min.js"></script>
    <script src="https://cdn.bootcss.com/vue-i18n/8.16.0/vue-i18n.min.js"></script>
    <script src="https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js"></script>
    <script src="https://cdn.bootcss.com/element-ui/2.13.0/index.js"></script>
    <script src="https://cdn.bootcss.com/element-ui/2.13.0/locale/zh-CN.min.js"></script>
    <script type="text/javascript" src="{{mix('js/app.js')}}"></script>
    <script type="text/javascript" src="{{mix('js/app-other.js')}}"></script>
</body>

</html>
