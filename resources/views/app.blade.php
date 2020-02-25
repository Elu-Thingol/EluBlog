<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="洛九,洛九的博客,Elu,Elu的博客,Elu's Blog" />
    <meta name="description" content="{{ setting('site.description') }}" />

    <title>{{ setting('site.title') }} - {{ setting('site.description') }}</title>
    <link rel="icon" type="image/x-icon" href="storage/{{ setting('site.logo') }}">

    <link href="{{ mix('css/app.css') }}" rel="stylesheet" type="text/css" />
</head>

<body>
    <noscript>
        <strong>We're sorry but Elu's Blog doesn't work properly without JavaScript enabled. Please enable it to
            continue.</strong>
    </noscript>

    <div id="app"></div>
    <div id="jsi-flying-fish-container" class="container"></div>
    <div class="back-to-top cd-top faa-float animated cd-is-visible" style="top: -999px;"></div>

    <script type="text/javascript" src="{{ mix('js/app.js') }}"></script>
    <script type="text/javascript" src="{{ mix('js/app-other.js') }}"></script>
</body>

</html>
