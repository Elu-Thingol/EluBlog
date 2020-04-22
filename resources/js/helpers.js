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
    checkUrl: function(sUrl) {
        var sRegex =
            "^(((https|http|ftp|rtsp|mms)?:)?//)" +
            "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" + //ftp的user@
            "(([0-9]{1,3}.){3}[0-9]{1,3}" + // IP形式的URL- 199.194.52.184
            "|" + // 允许IP和DOMAIN（域名）
            "([0-9a-z_!~*'()-]+.)*" + // 域名- www.
            "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]." + // 二级域名
            "[a-z]{2,6})" + // first level domain- .com or .museum
            "(:[0-9]{1,4})?" + // 端口- :80
            "((/?)|" + // a slash isn't required if there is no file name
            "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
        var re = new RegExp(sRegex);
        //re.test()
        if (re.test(sUrl)) {
            return true;
        }
        return false;
    },
    imgUrl: function(path) {
        return `${this.BASE_URL}/storage/${String(path)
            .replace(/\\/g, "/")
            .replace(/^\//, "")}`;
    },
    articleUrl: function(slug) {
        return `/article/${String(slug)}`;
    },
    urlTail: function(path) {
        return String(path)
            .replace(/$/g, "/")
            .replace(/\/+$/, "/");
    },
    trueUrl: function(sUrl) {
        var sRegex = "^(https|http|ftp|rtsp|mms)?(:)?(/+)?";
        var re = new RegExp(sRegex);
        var result = re.exec(sUrl);

        if (!result[1] || !result[2] || !result[3]) {
            if (!!result[2]) {
                if (!!result[3]) {
                    sUrl.replace(result[2] + result[3], "//");
                } else {
                    sUrl.replace(result[2], "//");
                }
            } else if (!!result[3]) {
                sUrl.replace(result[3], "//");
            } else {
                sUrl = "//" + sUrl;
            }
        }
        return this.checkUrl(sUrl) ? sUrl : '#';
    },
    viewDisplay: function(num) {
        return (n => (n > 9999 ? String(Math.floor(n / 10000)) + "万" : n))(
            parseInt(num)
        );
    }
};
