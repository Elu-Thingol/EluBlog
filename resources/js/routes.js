import home from "./pages/home";
// import about from "./pages/about";
// import article from "./pages/article";
// import archive from "./pages/archive";
// import apply from "./pages/apply";
function loadView(dir, view) {
    // 注释不要去掉，对应上面 webpack 编译后的文件名
    return () =>
        import(
            /* webpackChunkName: "[request]" */ "./" + dir + "/" + view + ".vue"
        );
}

const routes = [
    {
        path: "/",
        component: home
    },
    {
        path: "/home",
        name: "home",
        component: home
    },
    {
        path: "/about",
        name: "about",
        component: loadView("pages", "about")
    },
    {
        path: "/archive",
        name: "archive",
        component: loadView("pages", "archive")
    },
    {
        path: "/tag/:name",
        name: "tag",
        component: loadView("pages", "archive")
    },
    {
        path: "/article/:slug",
        name: "article",
        component: loadView("pages", "article"),
        children: [
            {
                path: "markdown",
                name: "article-markdown",
                component: loadView("pages", "article-markdown")
            }
        ]
    },
    {
        path: "/apply",
        name: "apply",
        component: loadView("pages", "apply")
    },
    {
        path: "*",
        redirect: "/"
    }
];
export default routes;
