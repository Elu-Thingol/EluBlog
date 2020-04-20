/* jshint esversion: 6 */

const mix = require("laravel-mix");
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
            "@": path.resolve("resources/assets/sass")
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

    .sass("resources/sass/app.scss", "public/css", {
        sassOptions: {
            precision: 8,
            outputStyle: "compressed"
        }
    })
    .sass("resources/sass/prism.scss", "public/css", {
        sassOptions: {
            precision: 8,
            outputStyle: "compressed"
        }
    })
    .sass("resources/sass/markdown-it-vue.scss", "public/css", {
        sassOptions: {
            precision: 8,
            outputStyle: "compressed"
        }
    })

    .copy("resources/js/app-mouse-heart.js", "public/js/app-heart.js")
    .copy("resources/js/prism.js", "public/js/prism.js")
    .copy("resources/images/szgotop.gif", "public/images/szgotop.gif")

    .version();
