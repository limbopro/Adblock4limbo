// ==UserScript==
// @name         Adblock4limbo
// @namespace    https://greasyfork.org/zh-CN/scripts/443290-adblock4limbo-adsremoveproject
// @version      0.1.60
// @license      CC BY-NC-SA 4.0
// @description  毒奶去广告计划油猴脚本版；通过 JavaScript 移除Pornhub/搜索引擎（Bing/Google）内容农场结果清除/低端影视（可避免PC端10秒广告倒计时）/独播库/ibvio/Jable（包含M3U8文件提取）/MissAv（禁止离开激活窗口视频自动暂停播放）/禁漫天堂/紳士漫畫/91porn/哔滴影视（加速跳过视频广告/避免反查）/555电影网（o8tv）等视频网站上的视频广告和图片广告，保持界面清爽干净无打扰！其他：优化PC端未登录状态访问知乎浏览体验（动态移除登录窗口/永远不会跳转至首页登录页面）；
// @author       limbopro
// @match        https://ddrk.me/*
// @match        https://jable.tv/*
// @match        https://www.btbdys.com/*
// @match        https://cn.pornhub.com/*
// @match        https://www.pornhub.com/*
// @match        https://missav.com/*
// @match        https://91porn.com/*
// @match        https://avple.tv/*
// @match        https://18comic.org/*
// @match        https://www.5dy5.cc/*
// @match        https://www.5dy6.cc/*
// @match        https://www.5dy7.cc/*
// @match        https://www.5dy8.cc/*
// @match        https://www.o8tv.com/*
// @match        https://o8tv.com/*
// @match        https://www.wnacg.com/*
// @match        https://www.wnacg.org/*
// @match        https://w.duboku.io/*
// @match        https://www.duboku.tv/*
// @match        https://www.libvio.com/*
// @match        https://www.tvn.cc/*
// @match        https://m.tvn.cc/*
// @match        https://www.google.com/search*
// @match        https://www.google.com.hk/search*
// @match        https://www.bing.com/*
// @match        https://zhuanlan.zhihu.com/*
// @match        https://www.zhihu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=limbopro.com
// @run-at       document-end
// @grant        none
// ==/UserScript==

//// 有使用 QuantumultX 和 surge 等代理工具的用户
// 请参阅 https://limbopro.com/archives/12904.html 配置去广告分流
/// 一起用 香喷喷

// 一些常量
const imax = {
    js: {
        functionx: "https://limbopro.com/Adguard/Adblock4limbo.function.js", // 全局js
        duboku: "https://limbopro.com/Adguard/duboku.js", // 独播库
        avple: "https://limbopro.com/Adguard/avple.js", // avple
        contentFarm: "https://limbopro.com/Adguard/contentFarm/contentFarm.js", // 内容农场
    },
    css: {
        globalcss: "https://limbopro.com/CSS/Adblock4limbo.user.css", // 全局
        libvio: ".hidden-log ,a[target=\"_blank\"] > .img-responsive ,.advertise ,#adsbox ,.t-img-box ,.inner-advertise ,.advertise  {display: none! important;}", // libvio
        goole: "#tvcap,[data-text-ad] {display:none !important}", // 谷歌搜索广告
        avple: "#adsbox,.asg-overlay,.jss20,.jss13,iframe,span[class*=MuiSkeleton-root],.jss16 ,.MuiSkeleton-pulse.jss12.MuiSkeleton-rect.MuiSkeleton-root,[id*=KnvW],img[src*=\".gif\"],iframe[data-width] {display: none! important;}", // avple
        btbdys: ".ayx[style^=\"position\: fixed;bottom\"],#ad-index,#adsbox,.ayx[style=\"display:block;\"],.ayx[style^=\"position: fixed;bottom\"],a[target*=_new] {display:none !important;}", // 哔滴影视
        ddrk: "a[href*=\"/kst6632.com/\"] { pointer-events: none !important; } a[href*=\"/kst6632.com/\"] > img { width: 1px !important; } a[onclick^=\"ClickobayST();\"] {display: none !important} a[href=\"###\"] img:not(#trk_hcaptcha):not([src^=\"https://captcha.su.baidu.com\"]) {display: none !important} a[href^=\"javascript\"] img:not(#trk_hcaptcha):not([src^=\"https://captcha.su.baidu.com\"]) {display: none !important}",
        jable: "div.asg-interstitial,div.asg-interstitial__mask,iframe,div[class*=\"exo\"], .exo-native-widget-outer-container,a[target*=\"_blank\"],a[href*=\"trwl1\"],div[data-width=\"300\"],div.text-center.mb-e-30,div[data-width*=\"300\"],div[style*=\"300px\"],section[class*=\"justify\"],iframe[width=\"728\"][height=\"90\"],#site-content > div.container > section.pb-3.pb-e-lg-40.text-center,.text-center > a[target=\"_blank\"] > img,a[href*=\"\?banner=\"],[class*=\"root--\"],.badge,a[href=\"http\:\/\/uus52\.com/\"] {display :none!important; pointer-events: none!important;}", // Jable.tv
        test: "div,img {display: none!important}",
        comic_18: "[target='_blank'],.modal-backdrop,[data-height*='90'],div[data-height='250'][data-width='300'],a[href^='http']:not([href*='18comic.']) > img ,#adsbox ,a[target='_blank'][rel*='nofollow'] > img[src*='.gif'] ,#guide-modal ,iframe[width='300'][height='250'] ,.modal-body > ul.pop-list,.adsbyexoclick,div[data-group^='skyscraper_'],.bot-per,.top-a2db,a[href*='.taobao.com'],div[data-height='264'][data-width='956'],div[style^='position: fixed; top:'],.bot-per.visible-xs.visible-sm  {display: none!important; pointer-events: none!important;}", // 555电影网
        dy555: ".playtop.col-pd,a[href*=\"?channelCode=\"] > img[src*=\".com:\"],#adsbox,div.myui-panel.myui-panel-bg.clearfix.wapad {display:none !important}", // 555影院
        wnacg: "div > img[src*='gif'],div.sh,div > a[target='_blank'] > img {display:none!important}", // 绅士漫画
        missav: "div.under_player,div[style=\"width: 300px; height: 250px;\"] {display:none!important}", //  MissAV
        porn91: "iframe,img.ad_img {display:none!important}", // 91porn
        pornhubx: "[rel*='noopener nofollow'],a[href^=\"http://ads.trafficjunky.net/\"],.topAdContainter,.adsbytrafficjunky,.ad-link,a[target='_blank']" // pornhub
    }
}

//tagName_appendChild("link", imax.css.globalcss, "head"); // css 外部引用 标签 <link>
//tagName_appendChild("script", imax.js.functionx, "body"); // js 外部引用 标签 <script>

function values() {
    var adsDomain = [
        "pornhub",
        "missav",
        "91porn",
        "avple",
        "18comic",
        "wnacg",
        "ddrk",
        "jable",
        "btbdys",
        "google",
        "bing",
        "duboku",
        "libvio",
        "tvn",
        "www.5dy",
        "o8tv",
        "zhihu"
    ]

    var url = document.location.href;
    console.log("URL : " + url); // 看看当前 URL
    var i;
    for (i = 0; i < adsDomain.length; i++) {
        if (url.indexOf(adsDomain[i]) !== -1) {
            var values = adsDomain[i]; // 释放参数值
            console.log("Catch it : " + values) // 看看控制台输出了个啥
        }
    }
    return values;
}

function adsDomain_switch(x) { // 匹配参数值 执行相应函数
    switch (x) {
        case 'pornhub':
            pornhub_interstitialPass();
            ele_adsRemove(imax.css.pornhubx, 0)
            tag_adsRemove("script", "ads_batch");
            break;
        case 'missav':
            cloudflare_captchaBypass();
            css_adsRemove(imax.css.missav);
            tagName_appendChild("script", imax.js.functionx, "body"); // js 外部引用 标签 <script>
            button_dynamicAppend("div.justify-between.items-start", "视频不要停！", "video_loopPlay()", "position:fixed;")
            break;
        case '91porn':
            cloudflare_captchaBypass();
            css_adsRemove(imax.css.porn91);
            break;
        case 'avple':
            cloudflare_captchaBypass();
            css_adsRemove(imax.css.avple);
            tagName_appendChild("script", imax.js.avple, "body")
            break;
        case '18comic':
            css_adsRemove(imax.css.comic_18)
            _18comic_adsRemove();
            break;
        case 'www.5dy':
            css_adsRemove(imax.css.dy555);
            break;
        case 'o8tv':
            css_adsRemove(imax.css.dy555);
            break;
        case 'wnacg':
            css_adsRemove(imax.css.wnacg);
            break;
        case 'ddrk':
            css_adsRemove(imax.css.ddrk);
            ele_adsRemove("#sajdhfbjwhe,#kasjbgih", 0)
            break;
        case 'duboku':
            tagName_appendChild("script", imax.js.duboku, "body")
            break;
        case 'libvio':
            css_adsRemove(imax.css.libvio)
            break;
        case 'tvn':
            break;
        case 'jable':
            cloudflare_captchaBypass();
            css_adsRemove(imax.css.jable);
            jable_adsRemove();
            tagName_appendChild("script", imax.js.functionx, "body"); // js 外部引用 标签 <script>
            button_dynamicAppend("div.my-3", "点此获取M3U8文件", "repeat_regex.forEach(m3u8_tempt)", "position:absolute; right:0px;");
            video_delayPlay(1000);
            break;
        case 'btbdys':
            css_adsRemove(imax.css.btbdys, 500);
            videoAds_accelerateSkip(0.1);
            hrefAttribute_set();
            break;
        case 'google':
            js_adsRemove(imax.js.contentFarm);
            css_adsRemove(imax.css.goole);
            var goole_selector = "h3,#bres,[class*='AuVD wHYlTd mnr-c']";
            setAttribute_after(goole_selector);
            break;
        case 'bing':
            js_adsRemove(imax.js.contentFarm);
            break;
        case 'zhihu':
            var selector_zhihu = "[class='Button Modal-closeButton Button--plain']";
            loop_removeButton(selector_zhihu, 10);
            skipLoggin();
            href_attributeSet(1000,10);
            break;
        default:
            console.log("Catch Nothing!")
    }
}

adsDomain_switch(values()) // 动手吧

// 无数函数及方法的组合使脚本更灵活

// 自动跳过 pornhub interstitial 插页式广告
function pornhub_interstitialPass() {
    const ele_skip = "[onclick*='clearModalCookie']"
    const exist = document.querySelectorAll(ele_skip);
    if (document.querySelectorAll(ele_skip).length > 0) {
        const href = exist[1].href;
        window.location = href;
    }
}

// 设置 cookie // 18comic Javascript
function _18comic_adsRemove() {
    document.cookie = "cover=1";
    document.cookie = "shunt=1";
    document.cookie = "guide=1";
}

// 隐藏广告样式
function ele_adsRemove(selector, time) {
    var i;
    setTimeout(() => {
        var href_blank = document.querySelectorAll(selector)
        for (i = 0; i < href_blank.length; i++) {
            href_blank[i].remove()
        }
    }, time)
}

// 设置 cookie 并移除特定元素
function jable_adsRemove() { // Cookie 设定及注入
    document.cookie = "ts_popunder=1";
    document.cookie = "kt_tcookie=1";
    document.cookie = "asgsc262182=2";
    var adsDomain = [
        'r.trwl1.com',
        'r.www.com'
    ];

    var i, l;
    for (l = 0; l < adsDomain.length; l++) {
        var css_sel = "a[href*='" + adsDomain[l] + "']";
        var css_catch = [".video-img-box.mb-e-20,.col-6.col-sm-4.col-lg-3"];
        var huge = document.querySelectorAll(css_catch);
        for (i = 0; i < huge.length; i++) {
            if (huge[i].querySelectorAll(css_sel).length > 0) {
                huge[i].style.display = "none";
            }
        }
    }
}

// 移除 某个 tag标签
function tag_adsRemove(tagname, keyword) {
    var i;
    var tag = document.getElementsByTagName(tagname);
    for (i = 0; i < tag.length; i++) {
        if (tag[i].src.indexOf(keyword) !== -1) {
            tag[i].remove()
        }
        if (tag[i].innerHTML.indexOf(keyword) !== -1) {
            tag[i].remove()
        }
    }
}

// 在页面动态插入按钮并赋予 onclick 属性
function button_dynamicAppend(ele, text, onclick, position) {
    var button = document.createElement("button");
    button.innerHTML = text;
    button.setAttribute("onclick", onclick);
    var button_style_values = position + "padding: 6px 6px 6px 6px; display: inline-block; " +
        "font-size: 15px; color:white; z-index:114154; border-right: 6px solid #38a3fd !important; " +
        "border-left: #292f33 !important; border-top: #292f33 !important; " +
        "border-bottom: #292f33 !important; background: black; " +
        "border-radius: 0px 0px 0px 0px; margin-bottom: 10px; " +
        "font-weight: 800 !important; " +
        "text-align: right !important;"
    button.setAttribute("style", button_style_values);
    var here = document.querySelectorAll(ele);
    if (here.length > 0) {
        here[0].appendChild(button);
        console.log("按钮已添加；")
    }
}

// Cloudflare recaptcha 绕过
function cloudflare_captchaBypass() {
    var title = document.title;
    if (title.search("Cloudflare") >= 0 || title.search("Attention") >= 0) {
        window.location.reload();
        console.log("captchaBypass done;")
    };
}

/* 循环播放 */
function video_loopPlay() {
    setInterval(function () {
        var ele = ["video[preload='none'],video#player"];
        var ele_catch = document.querySelectorAll(ele);
        if (ele_catch.length > 0) {
            ele_catch[0].play();
            ele_catch[1].play();
            console.log("视频已开启循环播放；")
        }
    }, 1000)
}

/* 延后播放 */
function video_delayPlay(time) {
    setTimeout(function () {
        var ele = ["video[preload='none'],video#player"];
        var ele_catch = document.querySelector(ele);
        if (ele_catch) {
            ele_catch.play()
            console.log("视频已延后播放；")
        }
    }, time)
}

/* 添加监听器 */
function addListener(selector, func) {
    var ele = document.querySelectorAll(selector);
    for (let index = 0; index < ele.length; index++) {
        ele[index].addEventListener("click", func);
        console.log("监听器添加中...")
    }
}

/* 添加属性 */
function setAttribute_after(x) {
    var index;
    var ele = document.querySelectorAll(x)
    for (index = 0; index < ele.length; index++) {
        ele[index].setAttribute("onclick", "contentFarm_AdsRemove_Auto()");
        console.log("属性设置中...");
    }
}

/* 低端影视是否显示图像 */
function cheat() {
    var ele = document.getElementById("holyx");
    ele.innerHTML = imax.css.ddrk_cheat;
    setTimeout(() => {
        ele.innerHTML = imax.css.ddrk_hidden;
        console.log("正在切换剧集；")
    }, 150);
}

// 禁止新页面跳转
function hrefAttribute_set() {
    var href = document.querySelectorAll("a");
    var i;
    if (href.length > 0) {
        console.log("新标签页打开链接已被禁止；")
        for (i = 0; i < href.length; i++) {
            href[i].target = "_self";
        }
    }
}


function href_attributeSet(time,times) {
    var initCount = 0;
    var loop_href = setInterval(() => {
        setTimeout(() => {
            var href = document.querySelectorAll("a");
            var i;
            for (i = 0; i < href.length; i++) {
                if (href[i].target == "_blank") {
                    href[i].setAttribute("target", "_self")
                }
            }
            initCount += 1;
            if (initCount == times) {
                clearInterval(loop_href);
                console.log("清除循环 loop_href")
            }
        }, time)
    }, time)
}

// 动态创建引用外部js JavaScript
function js_adsRemove(url) {
    var script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
    console.log("JavaScript脚本新增完毕！");
}

// 动态创建并引用外部资源 外部样式表 外部脚本
function tagName_appendChild(tagname, url, where) {
    var eleCreate = document.createElement(tagname);
    if (tagname == "script") {
        eleCreate.src = url;
    } else if (tagname == "link") {
        eleCreate.href = url;
    }
    if (where == "body") {
        document.body.appendChild(eleCreate);
    } else if (where == "head") {
        document.head.appendChild(eleCreate);
    }
}

// 动态创建引用内部资源 内嵌式样式 内嵌式脚本
function css_adsRemove(newstyle, time, id) {
    setTimeout(() => {
        var creatcss = document.createElement("style");
        creatcss.id = id;
        creatcss.innerHTML = newstyle;
        document.getElementsByTagName('head')[0].appendChild(creatcss)
        console.log("CSS样式新增完毕！");
    }, time);
}

// 循环模拟模拟点击
function loop_removeButton(selector, times) {
    var initCount = 0;
    var loop = setInterval(() => {
        var ele = document.querySelectorAll(selector);
        if (ele.length > 0) {
            ele[0].click()
        }
        initCount += 1;
        if (initCount == times) {
            clearInterval(loop);
            console.log("清除循环 loop")
        }
    }, 500)
}

// 知乎循环跳转绕过登录页
function skipLoggin() { // 跳转至热门话题 Explore
    var url = document.location.href;
    var explore = "https://www.zhihu.com/explore";
    var hotTopic = "https://www.zhihu.com/knowledge-plan/hot-question/hot/";
    var reg = /^https:\/\/www.zhihu.com\/signin.*/gi;
    if (url.search(reg) !== -1) {
        window.location = hotTopic;
    }
}

/* 视频页广告加速跳过 */
function videoAds_accelerateSkip(fasterx) {
    // https://github.com/gorhill/uBlock/wiki
    /// nano-setInterval-booster.js
    /// alias nano-sib.js
    let needleArg = '{{1}}';
    if (needleArg === '{{1}}') { needleArg = ''; }
    let delayArg = '{{2}}';
    if (delayArg === '{{2}}') { delayArg = ''; }
    let boostArg = '{{3}}';
    if (boostArg === '{{3}}') { boostArg = ''; }
    if (needleArg === '') {
        needleArg = '.?';
    } else if (needleArg.charAt(0) === '/' && needleArg.slice(-1) === '/') {
        needleArg = needleArg.slice(1, -1);
    } else {
        needleArg = needleArg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    const reNeedle = new RegExp(needleArg);
    let delay = delayArg !== '*' ? parseInt(delayArg, 10) : -1;
    if (isNaN(delay) || isFinite(delay) === false) { delay = 1000; }
    let boost = parseFloat(boostArg);
    boost = isNaN(boost) === false && isFinite(boost)
        ? Math.min(Math.max(boost, fasterx), 50)
        : fasterx;
    self.setInterval = new Proxy(self.setInterval, {
        apply: function (target, thisArg, args) {
            const [a, b] = args;
            if (
                (delay === -1 || b === delay) &&
                reNeedle.test(a.toString())
            ) {
                args[1] = b * boost;
            }
            return target.apply(thisArg, args);
        }
    });
};

// overridePropertyRead 覆盖属性读取
/// https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#set-constant