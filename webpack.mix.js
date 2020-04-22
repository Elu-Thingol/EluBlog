/* jshint esversion: 6 */

const mix = require("laravel-mix");
const path = require("path");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//     .BundleAnalyzerPlugin;

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

mix.webpackConfig({
    output: {
        chunkFilename: "js/[name].js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules(?!\/foundation-sites)|bower_components/,
                use: [
                    {
                        loader: "babel-loader",
                        options: Config.babel()
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            "@": path.resolve("resources/sass")
        }
    },
    // plugins: [new BundleAnalyzerPlugin()]
    externals: {
        vue: "Vue",
        vuex: "Vuex",
        "vue-i18n": "VueI18n",
        "vue-router": "VueRouter",
        "element-ui": "Element",
        "markdown-it-vue": '"markdown-it-vue"',
        lodash: "_",
        jquery: "jQuery",
        axios: "axios"
    }
})

    .js("resources/js/app.js", "public/js")
    .babel(
        ["resources/js/app-background-fish.js", "resources/js/app-szgotop.js"],
        "public/js/app-other.js"
    )

    .sass("resources/sass/app.scss", "public/css")
    .sass("resources/sass/prism.scss", "public/vendor/prism")
    .sass(
        "resources/sass/markdown-it-vue.scss",
        "public/vendor/markdown-it-vue@1.1.3/dist"
    )

    .copy(
        "resources/sass/element-ui@2.13.0_theme-chalk_index.scss",
        "public/vendor/element-ui/2.13.0/theme-chalk/index.css"
    )
    .copy(
        "resources/sass/social-share.js@1.0.16_css_share.min.scss",
        "public/vendor/social-share.js/1.0.16/css/share.min.css"
    )
    .copy("resources/js/app-mouse-heart.js", "public/js/app-heart.js")
    .copy("resources/js/prism.js", "public/vendor/prism/prism.js")
    .copy("resources/images/szgotop.gif", "public/images/szgotop.gif")
    .copy("public/js", "public/vendor/app/js")

    .options({
        processCssUrls: false
    })
    
    .version();
