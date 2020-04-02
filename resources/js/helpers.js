/* jshint esversion: 6 */

export default {
    BASE_URL: `${window.blog_address}`,
    dateFormat: function(fmt, date) {
        let ret;
        date = new Date(date);
        const opt = {
            "Y+": date.getFullYear().toString(), // 年
            "m+": (date.getMonth() + 1).toString(), // 月
            "d+": date.getDate().toString(), // 日
            "H+": date.getHours().toString(), // 时
            "M+": date.getMinutes().toString(), // 分
            "S+": date.getSeconds().toString() // 秒
            // 有其他格式化字符需求可以继续添加，必须转化成字符串
        };
        for (let k in opt) {
            ret = new RegExp("(" + k + ")").exec(fmt);
            if (ret) {
                fmt = fmt.replace(
                    ret[1],
                    ret[1].length == 1
                        ? opt[k]
                        : opt[k].padStart(ret[1].length, "0")
                );
            }
        }
        return fmt;
    },
    imgUrl: function(path) {
        return `${this.BASE_URL}/storage/${String(path)
            .replace(/\\/g, "/")
            .replace(/^\//, "")}`;
    },
    urlTail: function(path) {
        return String(path)
            .replace(/$/g, "/")
            .replace(/\/+$/, "/");
    },
    viewDisplay: function(num) {
        return (n => (n > 9999 ? String(Math.floor(n / 10000)) + "万" : n))(
            parseInt(num)
        );
    }
};
