const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.autoload({
//     jquery: ["$", "window.jQuery", "jQuery"] // more than one
// });

mix.js("resources/js/app.js", "public/js").sass(
    "resources/sass/app.scss",
    "public/css"
);

mix.scripts(
    [
        "resources/js/app-baidu-share.js",
        "resources/js/app-mouse-heart.js",
        "resources/js/app-background-fish.js",
        "resources/js/app-szgotop.js"
    ],
    "public/js/app-other.js"
);

mix.version();
