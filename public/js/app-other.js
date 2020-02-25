window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":["qzone","tsina","weixin","tqq","tieba","sqq","isohu","fbook","twi","copy"],"bdPic":"","bdStyle":"0","bdSize":"16"},"slide":{"type":"slide","bdImg":"2","bdPos":"left","bdTop":"110.39999389648438"}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];

!function(e,t,a){function n(){c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),o(),r()}function r(){for(var e=0;e<d.length;e++)d[e].alpha<=0?(t.body.removeChild(d[e].el),d.splice(e,1)):(d[e].y--,d[e].scale+=.004,d[e].alpha-=.013,d[e].el.style.cssText="left:"+d[e].x+"px;top:"+d[e].y+"px;opacity:"+d[e].alpha+";transform:scale("+d[e].scale+","+d[e].scale+") rotate(45deg);background:"+d[e].color+";z-index:99999");requestAnimationFrame(r)}function o(){var t="function"==typeof e.onclick&&e.onclick;e.onclick=function(e){t&&t(),i(e)}}function i(e){var a=t.createElement("div");a.className="heart",d.push({el:a,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1,color:s()}),t.body.appendChild(a)}function c(e){var a=t.createElement("style");a.type="text/css";try{a.appendChild(t.createTextNode(e))}catch(t){a.styleSheet.cssText=e}t.getElementsByTagName("head")[0].appendChild(a)}function s(){return"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}var d=[];e.requestAnimationFrame=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)}}(),n()}(window,document);

/*拷贝内容添加声明*/
function setClipboardText(event) {
    event.preventDefault();
    var url = document.URL;
    var node = document.createElement("div");
    node.appendChild(
        window
            .getSelection()
            .getRangeAt(0)
            .cloneContents()
    );
    var htmlData =
        "<div>" +
        node.innerHTML +
        "<br/><br/>著作权归作者所有。<br/>" +
        "商业转载请联系作者获得授权，非商业转载请注明出处。<br/>" +
        "本文作者：洛九<br/>" +
        `原文连接：${url}<br/><br/>` +
        "</div>";
    var textData =
        window.getSelection().getRangeAt(0) +
        "\n\n著作权归作者所有。\n" +
        "商业转载请联系作者获得授权，非商业转载请注明出处。\n" +
        "本文作者：洛九\n" +
        `原文连接：${url}\n\n`;
    if (event.clipboardData) {
        event.clipboardData.setData("text/html", htmlData);
        event.clipboardData.setData("text/plain", textData);
    } else if (window.clipboardData) {
        return window.clipboardData.setData("text", textData);
    }
}

document.addEventListener("copy", function(e) {
    setClipboardText(e);
});

var RENDERER = {
    POINT_INTERVAL: 5,
    FISH_COUNT: 3,
    MAX_INTERVAL_COUNT: 50,
    INIT_HEIGHT_RATE: 0.5,
    THRESHOLD: 50,

    init: function() {
        this.setParameters();
        this.reconstructMethods();
        this.setup();
        this.bindEvent();
        this.render();
    },
    setParameters: function() {
        this.$window = $(window);
        this.$container = $("#jsi-flying-fish-container");
        this.$canvas = $("<canvas />");
        this.context = this.$canvas
            .appendTo(this.$container)
            .get(0)
            .getContext("2d");
        this.points = [];
        this.fishes = [];
        this.watchIds = [];
    },
    createSurfacePoints: function() {
        var count = Math.round(this.width / this.POINT_INTERVAL);
        this.pointInterval = this.width / (count - 1);
        this.points.push(new SURFACE_POINT(this, 0));

        for (var i = 1; i < count; i++) {
            var point = new SURFACE_POINT(this, i * this.pointInterval),
                previous = this.points[i - 1];

            point.setPreviousPoint(previous);
            previous.setNextPoint(point);
            this.points.push(point);
        }
    },
    reconstructMethods: function() {
        this.watchWindowSize = this.watchWindowSize.bind(this);
        this.jdugeToStopResize = this.jdugeToStopResize.bind(this);
        this.startEpicenter = this.startEpicenter.bind(this);
        this.moveEpicenter = this.moveEpicenter.bind(this);
        this.reverseVertical = this.reverseVertical.bind(this);
        this.render = this.render.bind(this);
    },
    setup: function() {
        this.points.length = 0;
        this.fishes.length = 0;
        this.watchIds.length = 0;
        this.intervalCount = this.MAX_INTERVAL_COUNT;
        this.width = this.$container.width();
        this.height = this.$container.height();
        this.fishCount =
            (((this.FISH_COUNT * this.width) / 500) * this.height) / 500;
        this.$canvas.attr({ width: this.width, height: this.height });
        this.reverse = false;

        this.fishes.push(new FISH(this));
        this.createSurfacePoints();
    },
    watchWindowSize: function() {
        this.clearTimer();
        this.tmpWidth = this.$window.width();
        this.tmpHeight = this.$window.height();
        this.watchIds.push(
            setTimeout(this.jdugeToStopResize, this.WATCH_INTERVAL)
        );
    },
    clearTimer: function() {
        while (this.watchIds.length > 0) {
            clearTimeout(this.watchIds.pop());
        }
    },
    jdugeToStopResize: function() {
        var width = this.$window.width(),
            height = this.$window.height(),
            stopped = width == this.tmpWidth && height == this.tmpHeight;

        this.tmpWidth = width;
        this.tmpHeight = height;

        if (stopped) {
            this.setup();
        }
    },
    bindEvent: function() {
        this.$window.on("resize", this.watchWindowSize);
        this.$container.on("mouseenter", this.startEpicenter);
        this.$container.on("mousemove", this.moveEpicenter);
        this.$container.on("click", this.reverseVertical);
    },
    getAxis: function(event) {
        var offset = this.$container.offset();

        return {
            x: event.clientX - offset.left + this.$window.scrollLeft(),
            y: event.clientY - offset.top + this.$window.scrollTop()
        };
    },
    startEpicenter: function(event) {
        this.axis = this.getAxis(event);
    },
    moveEpicenter: function(event) {
        var axis = this.getAxis(event);

        if (!this.axis) {
            this.axis = axis;
        }
        this.generateEpicenter(axis.x, axis.y, axis.y - this.axis.y);
        this.axis = axis;
    },
    generateEpicenter: function(x, y, velocity) {
        if (
            y < this.height / 2 - this.THRESHOLD ||
            y > this.height / 2 + this.THRESHOLD
        ) {
            return;
        }
        var index = Math.round(x / this.pointInterval);

        if (index < 0 || index >= this.points.length) {
            return;
        }
        this.points[index].interfere(y, velocity);
    },
    reverseVertical: function() {
        this.reverse = !this.reverse;

        for (var i = 0, count = this.fishes.length; i < count; i++) {
            this.fishes[i].reverseVertical();
        }
    },
    controlStatus: function() {
        for (var i = 0, count = this.points.length; i < count; i++) {
            this.points[i].updateSelf();
        }
        for (var i = 0, count = this.points.length; i < count; i++) {
            this.points[i].updateNeighbors();
        }
        if (this.fishes.length < this.fishCount) {
            if (--this.intervalCount == 0) {
                this.intervalCount = this.MAX_INTERVAL_COUNT;
                this.fishes.push(new FISH(this));
            }
        }
    },
    render: function() {
        requestAnimationFrame(this.render);
        this.controlStatus();
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.fillStyle = "hsl(0, 0%, 95%)";

        for (var i = 0, count = this.fishes.length; i < count; i++) {
            this.fishes[i].render(this.context);
        }
        this.context.save();
        this.context.globalCompositeOperation = "xor";
        this.context.beginPath();
        this.context.moveTo(0, this.reverse ? 0 : this.height);

        for (var i = 0, count = this.points.length; i < count; i++) {
            this.points[i].render(this.context);
        }
        this.context.lineTo(this.width, this.reverse ? 0 : this.height);
        this.context.closePath();
        this.context.fill();
        this.context.restore();
    }
};
var SURFACE_POINT = function(renderer, x) {
    this.renderer = renderer;
    this.x = x;
    this.init();
};
SURFACE_POINT.prototype = {
    SPRING_CONSTANT: 0.03,
    SPRING_FRICTION: 0.9,
    WAVE_SPREAD: 0.3,
    ACCELARATION_RATE: 0.01,

    init: function() {
        this.initHeight = this.renderer.height * this.renderer.INIT_HEIGHT_RATE;
        this.height = this.initHeight;
        this.fy = 0;
        this.force = { previous: 0, next: 0 };
    },
    setPreviousPoint: function(previous) {
        this.previous = previous;
    },
    setNextPoint: function(next) {
        this.next = next;
    },
    interfere: function(y, velocity) {
        this.fy =
            this.renderer.height *
            this.ACCELARATION_RATE *
            (this.renderer.height - this.height - y >= 0 ? -1 : 1) *
            Math.abs(velocity);
    },
    updateSelf: function() {
        this.fy += this.SPRING_CONSTANT * (this.initHeight - this.height);
        this.fy *= this.SPRING_FRICTION;
        this.height += this.fy;
    },
    updateNeighbors: function() {
        if (this.previous) {
            this.force.previous =
                this.WAVE_SPREAD * (this.height - this.previous.height);
        }
        if (this.next) {
            this.force.next =
                this.WAVE_SPREAD * (this.height - this.next.height);
        }
    },
    render: function(context) {
        if (this.previous) {
            this.previous.height += this.force.previous;
            this.previous.fy += this.force.previous;
        }
        if (this.next) {
            this.next.height += this.force.next;
            this.next.fy += this.force.next;
        }
        context.lineTo(this.x, this.renderer.height - this.height);
    }
};
var FISH = function(renderer) {
    this.renderer = renderer;
    this.init();
};
FISH.prototype = {
    GRAVITY: 0.4,

    init: function() {
        this.direction = Math.random() < 0.5;
        this.x = this.direction
            ? this.renderer.width + this.renderer.THRESHOLD
            : -this.renderer.THRESHOLD;
        this.previousY = this.y;
        this.vx = this.getRandomValue(4, 10) * (this.direction ? -1 : 1);

        if (this.renderer.reverse) {
            this.y = this.getRandomValue(
                (this.renderer.height * 1) / 10,
                (this.renderer.height * 4) / 10
            );
            this.vy = this.getRandomValue(2, 5);
            this.ay = this.getRandomValue(0.05, 0.2);
        } else {
            this.y = this.getRandomValue(
                (this.renderer.height * 6) / 10,
                (this.renderer.height * 9) / 10
            );
            this.vy = this.getRandomValue(-5, -2);
            this.ay = this.getRandomValue(-0.2, -0.05);
        }
        this.isOut = false;
        this.theta = 0;
        this.phi = 0;
    },
    getRandomValue: function(min, max) {
        return min + (max - min) * Math.random();
    },
    reverseVertical: function() {
        this.isOut = !this.isOut;
        this.ay *= -1;
    },
    controlStatus: function(context) {
        this.previousY = this.y;
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.ay;

        if (this.renderer.reverse) {
            if (
                this.y >
                this.renderer.height * this.renderer.INIT_HEIGHT_RATE
            ) {
                this.vy -= this.GRAVITY;
                this.isOut = true;
            } else {
                if (this.isOut) {
                    this.ay = this.getRandomValue(0.05, 0.2);
                }
                this.isOut = false;
            }
        } else {
            if (
                this.y <
                this.renderer.height * this.renderer.INIT_HEIGHT_RATE
            ) {
                this.vy += this.GRAVITY;
                this.isOut = true;
            } else {
                if (this.isOut) {
                    this.ay = this.getRandomValue(-0.2, -0.05);
                }
                this.isOut = false;
            }
        }
        if (!this.isOut) {
            this.theta += Math.PI / 20;
            this.theta %= Math.PI * 2;
            this.phi += Math.PI / 30;
            this.phi %= Math.PI * 2;
        }
        this.renderer.generateEpicenter(
            this.x + (this.direction ? -1 : 1) * this.renderer.THRESHOLD,
            this.y,
            this.y - this.previousY
        );

        if (
            (this.vx > 0 &&
                this.x > this.renderer.width + this.renderer.THRESHOLD) ||
            (this.vx < 0 && this.x < -this.renderer.THRESHOLD)
        ) {
            this.init();
        }
    },
    render: function(context) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(Math.PI + Math.atan2(this.vy, this.vx));
        context.scale(1, this.direction ? 1 : -1);
        context.beginPath();
        context.moveTo(-30, 0);
        context.bezierCurveTo(-20, 15, 15, 10, 40, 0);
        context.bezierCurveTo(15, -10, -20, -15, -30, 0);
        context.fill();

        context.save();
        context.translate(40, 0);
        context.scale(0.9 + 0.2 * Math.sin(this.theta), 1);
        context.beginPath();
        context.moveTo(0, 0);
        context.quadraticCurveTo(5, 10, 20, 8);
        context.quadraticCurveTo(12, 5, 10, 0);
        context.quadraticCurveTo(12, -5, 20, -8);
        context.quadraticCurveTo(5, -10, 0, 0);
        context.fill();
        context.restore();

        context.save();
        context.translate(-3, 0);
        context.rotate(
            (Math.PI / 3 + (Math.PI / 10) * Math.sin(this.phi)) *
                (this.renderer.reverse ? -1 : 1)
        );

        context.beginPath();

        if (this.renderer.reverse) {
            context.moveTo(5, 0);
            context.bezierCurveTo(10, 10, 10, 30, 0, 40);
            context.bezierCurveTo(-12, 25, -8, 10, 0, 0);
        } else {
            context.moveTo(-5, 0);
            context.bezierCurveTo(-10, -10, -10, -30, 0, -40);
            context.bezierCurveTo(12, -25, 8, -10, 0, 0);
        }
        context.closePath();
        context.fill();
        context.restore();
        context.restore();
        this.controlStatus(context);
    }
};
$(function() {
    RENDERER.init();
});

 $(function() {
        //scroll 事件适用于所有可滚动的元素和 window 对象（浏览器窗口）。
        $(window).scroll(function() {
                var scroHei = $(window).scrollTop();//滚动的高度
                if (scroHei > 500) {
                   $('.back-to-top').css('top','-200px');
                   // $('.back-to-top').fadeIn();
                } else {                                                
                    $('.back-to-top').css('top','-999px');
                    // $('.back-to-top').fadeOut();
                }
            })
            /*点击返回顶部*/
        $('.back-to-top').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 600);
        })
    })


