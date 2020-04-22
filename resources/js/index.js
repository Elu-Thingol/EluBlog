// For chunk.js path
let jsPath;
const scripts = Array.prototype.slice.call(document.scripts).reverse();

scripts.some(script => {
    if (script.getAttribute("jspathanchor") === "true") {
        jsPath = script
            .getAttribute("src")
            .replace(/js\/app\.js(\?(t|dd_cache)=.+)?$/, "");
        return true;
    }
    return false;
});

if (!!jsPath) {
    __webpack_public_path__ = jsPath;
}
