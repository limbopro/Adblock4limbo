// ==UserScript==
// @name         Adblock4limbo
// @namespace    https://greasyfork.org/zh-CN/scripts/443290-adblock4limbo-adsremoveproject
// @version      0.1.36
// @license      CC BY-NC-SA 4.0
// @description  毒奶去广告计划油猴脚本版；通过 JavaScript 移除Pornhub/搜索引擎内容农场结果清除/低端影视/Jable/哔滴影视等视频网站上的视频广告和图片广告，保持界面清爽干净无打扰！
// @author       limbopro
// @match        https://ddrk.me/*
// @match        https://jable.tv/*
// @match        https://www.btbdys.com/*
// @match        https://cn.pornhub.com/*
// @match        https://missav.com/*
// @match        https://18comic.org/*
// @match        https://18comic.vip/*
// @match        https://www.google.com/search*
// @match        https://www.google.com.hk/search*
// @match        https://www.bing.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=limbopro.com
// @run-at       document-end
// @grant        none
// ==/UserScript==

// 一些常量
const script_url = [
    "https://limbopro.com/Adguard/Adblock4limbo.function.js"
]
script_url.forEach(javascript_dynamicAppend)

function values() {
    var adsDomain = [
        "pornhub.com",
        "missav",
        "18comic",
        "ddrk.me",
        "jable.tv",
        "www.btbdys.com",
        "google.com",
        "www.bing.com"
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
        case 'pornhub.com':
            pornhub_interstitialPass();
            pornhub_adsRemove();
            css_dynamicAppend(pornhub_css(), 0)
            button_dynamicAppend("div.videoSubscribeButton", "跳过广告", "video_delayPlay(1000)", "position:relative;")
            break;
        case 'missav':
            button_dynamicAppend(".items-start", "禁止暂停", "video_loopPlay()", "position:fixed;");
            cloudflare_recaptchaPass();
            break;
        case '18comic':
            css_dynamicAppend(_18comic_css(), 0)
            _18comic_adsRemove();
            break;
        case 'ddrk.me':
            css_dynamicAppend(ddrk_css(), 500)
            break;
        case 'jable.tv':
            css_dynamicAppend(jable_css(), 0)
            jable_adsRemove();
            cloudflare_recaptchaPass();
            button_dynamicAppend("div.my-3", "点此获取M3U8文件", "regexpx.forEach(m3u8_tempt)", "position:absolute; right:0px;");
            video_delayPlay(1000);
            break;
        case 'www.btbdys.com':
            css_dynamicAppend(btbdys_css(), 0);
            css_dynamicAppend(btbdys_css_delay(), 500);
            videoAds_accelerateSkip();
            hrefAttribute_set();
            break;
        case 'google.com':
            contentFarm_adsRemove();
            break;
        case 'www.bing.com':
            contentFarm_adsRemove();
            break;
        default:
            console.log("Catch Nothing!")
    }
}

adsDomain_switch(values()) // 动手吧

// 无数函数及方法的组合使脚本更灵活
// 移除带广告脚本

function pornhub_adsRemove() {
    var i;
    var script = document.getElementsByTagName("script");
    for (i = 0; i < script.length; i++) {
        if (script[i].src.indexOf("ads_batch") !== -1) {
            script[i].remove()
        }
        if (script[i].innerHTML.indexOf("ads_batch") !== -1) {
            script[i].remove()
        }
    }
}

// 移除网站上的图片广告
function pornhub_css() {
    var newstyle = ".topAdContainter,div.topAdContainter,.adContainer.clearfix,.adContainer,div#adSpot,a[href*=\"ads\"]," +
        ".video-wrapper > #player + [class],.underplayerAd,.realsex,.adsbytrafficjunky,.adLink," +
        "div.bottomNav a.noImage," +
        "#pb_template,#main-container > .abovePlayer,.sponsor-text," +
        ".video-wrapper > div#player~div[class$=\" hd clear\"],#hd-rightColVideoPage > .clearfix:first-child," +
        ".playerFlvContainer > div#pb_template[style],a[href*='livehd']," +
        "[href*='premium_signup?type=PremiumBtn'] {display:none !important;}" +
        ".mgp_container .mgp_optionsMenu.mgp_level3 .mgp_subPage>.mgp_content{opacity:0;pointer-events:auto;transform:translate(-260px, 0) !important}" +
        ".mgp_preRollSkipButton {z-index:8;position:absolute;padding:10px 25px;background:rgba(0,0,0,.55)}"; // 样式文本
    return newstyle;
}

// 自动跳过 interstitial 插页式广告
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
function _18comic_css() {
    const newstyle =
        ".modal-backdrop," +
        "[data-height*='90']," +
        "div[data-height='250'][data-width='300']," +
        "a[href^='http']:not([href*='18comic.']) > img ," +
        "#adsbox ," +
        "a[target='_blank'][rel*='nofollow'] > img[src*='.gif'] ," +
        "#guide-modal ," +
        "iframe[width='300'][height='250'] ," +
        ".modal-body > ul.pop-list," +
        ".adsbyexoclick," +
        "div[data-group^='skyscraper_']," +
        ".bot-per," +
        ".top-a2db," +
        "a[href*='.taobao.com']," +
        "div[data-height='264'][data-width='956']," +
        "div[style^='position: fixed; top:']," +
        ".bot-per.visible-xs.visible-sm  {display: none !important;}"
    return newstyle;
}

// 隐藏广告样式
function ddrk_css() {
    const newstyle = ".entry { padding: 0px !important ; margin: 0%;}" +
        "[id*='afc_sidebar'], #iaujwnefhw, #fkasjgf, #sajdhfbjwhe, [href*='kst'],[href*='###']{" +
        "visibility: hidden !important;" +
        "width: 1px !important;" +
        "height:1px !important; " +
        "opacity:0 !important;" +
        "cursor: pointer;" +
        "pointer-events:none !important;" +
        "z-index: -999;" +
        "}"
    return newstyle;
}

// 隐藏广告样式
function jable_css() {
    const newstyle = "iframe," +
        "div[class*=\"exo\"], " +
        ".exo-native-widget-outer-container," +
        //"div[class*=\"col-6 col-sm-4 col-lg-3\"]," +
        "a[target*=\"_blank\"]," +
        "a[href*=\"trwl1\"]," +
        "div[data-width=\"300\"]," +
        "div.text-center.mb-e-30," +
        "div[data-width*=\"300\"]," +
        "div[style*=\"300px\"]," +
        "section[class*=\"justify\"]," +
        "iframe[width=\"728\"][height=\"90\"]," +
        "#site-content > div.container > section.pb-3.pb-e-lg-40.text-center," +
        ".text-center > a[target=\"_blank\"] > img," +
        "a[href*=\"?banner=\"]," +
        "[class*=\"root--\"]," +
        ".badge," +
        "a[href=\"http://uus52.com/\"] {display:none !important;} "
    return newstyle;
}

// 设置 cookie
function jable_adsRemove() { // Cookie 设定及注入
    document.cookie = "ts_popunder=1";

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

// Cloudflare recaptcha 绕过
function cloudflare_recaptchaPass() {
    var title = document.title;
    var key = "Attention";
    var key_2 = "Cloudflare";
    var values = title.search(key);
    var values_2 = title.search(key_2);
    var failed = "0";
    if (values >= failed || values_2 >= failed) {
        window.location.reload();
    }
}

/* 循环播放 */
function video_loopPlay() {
    setInterval(function () {
        var ele = ["video[preload='none'],video#player"];
        var ele_catch = document.querySelector(ele);
        ele_catch.play()
    }, 1000)
}

/* 延后播放 */
function video_delayPlay(time) {
    setTimeout(function () {
        var ele = ["video[preload='none'],video#player"];
        var ele_catch = document.querySelector(ele);
        ele_catch.play()
    }, time)
}

// 禁止新页面跳转
function hrefAttribute_set() {
    var href = document.querySelectorAll("a");
    var i;
    for (i = 0; i < href.length; i++) {
        href[i].target = "_self";
    }
}

// 隐藏广告样式
function btbdys_css() {
    const newstyle = "#ad-index," +
        ".ayx[style^=\"position: fixed;bottom\"]," +
        ".ayx[style=\"display:block;\"]," +
        "#adsbox  {display:none !important;}" +
        "div.page-wrapper {overflow-x:hidden !important;}"
    return newstyle;
}

/* 延迟1秒中清除广告元素以避免bde4反屏蔽检测 */
function btbdys_css_delay() {
    const newstyle = ".ayx[style^=\"position: fixed;bottom\"]," +
        "#ad-index,#adsbox," +
        ".ayx[style=\"display:block;\"]," +
        ".ayx[style^=\"position: fixed;bottom\"]," +
        "a[target*=_new] {display:none !important;}";
    return newstyle;
}

// 在页面插入按钮
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
    here[0].appendChild(button);
}

// 动态创建引用外部js JavaScript
function javascript_dynamicAppend(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script)
}

// 动态创建引用外部css Cascading Style Sheets
function css_dynamicAppend(newstyle, time) {
    setTimeout(() => {
        var creatcss = document.createElement("style");
        creatcss.innerHTML = newstyle;
        document.getElementsByTagName('head')[0].appendChild(creatcss)
    }, time);
}

/* 视频页广告加速跳过 */
function videoAds_accelerateSkip() {
    // Based on uAssets
    // License: https://github.com/uBlockOrigin/uAssets/blob/master/LICENSE
    //  nano-setTimeout-booster.js
    var z = window.setInterval,
        needle = '{{1}}',
        delay = parseInt('{{2}}', 10),
        boost = parseFloat('{{3}}');
    if (needle === '' || needle === '{{1}}') { needle = '.?'; }
    else if (needle.charAt(0) === '/' && needle.slice(-1) === '/') { needle = needle.slice(1, -1); }
    else { needle = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
    needle = new RegExp(needle);
    if (isNaN(delay) || !isFinite(delay)) { delay = 1000; }
    if (isNaN(boost) || !isFinite(boost)) { boost = 0.05; }
    if (boost < 0.02) { boost = 0.02; } if (boost > 50) { boost = 50; }
    window.setInterval = function (a, b) {
        if (b === delay && needle.test(a.toString())) { b *= boost; }
        return z.apply(this, arguments);
    }.bind(window);
};

// 内容农场清除
function contentFarm_adsRemove() {
    var javascript = document.createElement("script");
    javascript.src = 'https://limbopro.com/Adguard/contentFarm/contentFarm.js';
    document.body.appendChild(javascript);
}