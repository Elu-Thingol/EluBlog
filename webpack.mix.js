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
});

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
