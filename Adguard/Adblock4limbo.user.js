// ==UserScript==
// @name         Adblock4limbo
// @namespace    https://greasyfork.org/zh-CN/scripts/443290-adblock4limbo-adsremoveproject
// @version      0.1.95
// @license      CC BY-NC-SA 4.0
// @description  毒奶去广告计划油猴脚本版；通过 JavaScript 移除Pornhub/搜索引擎（Bing/Google）内容农场结果清除/低端影视（可避免PC端10秒广告倒计时）/独播库/ibvio/Jable（包含M3U8文件提取）/MissAv（禁止离开激活窗口视频自动暂停播放）/禁漫天堂/紳士漫畫/91porn/哔滴影视（加速跳过视频广告/避免反查）/555电影网（o8tv）等视频网站上的视频广告和图片广告，保持界面清爽干净无打扰！其他：优化PC端未登录状态访问知乎浏览体验（动态移除登录窗口/永远不会跳转至首页登录页面）；
// @author       limbopro
// @match        https://ddrk.me/*
// @match        https://ddys.tv/*
// @match        https://ddys.art/*
// @match        https://ddys2.me/*
// @match        https://jable.tv/*
// @match        https://www.btbdys.com/*
// @match        https://www.bdys01.com/*
// @match        https://cn.pornhub.com/*
// @match        https://www.pornhub.com/*
// @match        https://missav.com/*
// @match        https://91porn.com/*
// @match        https://avple.tv/*
// @match        https://18comic.org/*
// @match        https://18comic.vip/*
// @match        https://www.5dy5.cc/*
// @match        https://www.5dy6.cc/*
// @match        https://www.5dy7.cc/*
// @match        https://www.5dy8.cc/*
// @match        https://www.o8tv.com/*
// @match        https://www.555dd5.com/*
// @match        https://www.555dd6.com/*
// @match        https://www.555dd7.com/*
// @match        https://www.555dd8.com/*
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
// @match        https://www.instagram.com/*
// @match        https://www.nbys.tv/*
// @match        https://www.ttsp.tv/*
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
        // functionx: "https://limbopro.com/Adguard/Adblock4limbo.function.js", // 全局js
        //duboku: "https://limbopro.com/Adguard/duboku.js", // 独播库
        //avple: "https://limbopro.com/Adguard/avple.js", // avple
        //contentFarm: "https://limbopro.com/Adguard/contentFarm.js", // 内容农场
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
        dy555: "a[target=\"_blank\"] img,.playtop.col-pd,a[href*=\"?channelCode=\"] > img[src*=\".com:\"],#adsbox,div.myui-panel.myui-panel-bg.clearfix.wapad {display:none !important}", // 555影院
        wnacg: "div > img[src*='gif'],div.sh,div > a[target='_blank'] > img {display:none!important}", // 绅士漫画
        missav: "img[src*='.gif'], iframe,#a[href*='//bit.ly/'],div[style*='z-index: 1001'],ul.space-y-2.mb-4.ml-4.list-disc.text-nord14,div.space-y-5.mb-5,div.under_player,div[style=\"width: 300px; height: 250px;\"] {display:none!important; pointer-events:none;}", //  MissAV
        porn91: "iframe,img.ad_img {display:none!important}", // 91porn
        zhihuAds: "div.css-1izy64v,[class='Card AppBanner'],.Footer,.Banner-link,div.Pc-word {display:none ! important; pointer-events: none !important;}",
        pornhubx: "[rel*='noopener nofollow'],a[href^=\"http://ads.trafficjunky.net/\"],.topAdContainter,.adsbytrafficjunky,.ad-link,a[target='_blank']", // pornhub
        instagram: "div._aagw {display:none!important}", // 网页版Instagram不能复制图片的问题
        ttsp: "div#playad1,a[href*=\"8616.tech\"],.play_list_adbox,#adsbox,.ads_all > .ads_w,.ads_box,.right_ads {display:none!important}",
        nbys: "#adltop {display:none!important}" // 泥巴影视视频左上角水印贴片
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
        "ddys",
        "jable",
        "bdys",
        "google",
        "bing",
        "duboku",
        "libvio",
        "tvn",
        "www.5dy",
        "www.555dd",
        "o8tv",
        "instagram",
        "ttsp",
        "nbys",
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
            //let url = document.location.href;
            var ua_missav = navigator.userAgent.toLowerCase();
            var mobile_missav = "mobile";
            cloudflare_captchaBypass();
            css_adsRemove(imax.css.missav);
            tagName_appendChild("script", imax.js.functionx, "body"); // js 外部引用 标签 <script>
            if (ua_missav.indexOf(mobile_missav) === -1) {
                button_dynamicAppend("div[class*=px-3]", "离开页面视频继续播放", "video_loopPlay()", "position:fixed; top:60px;", "missavX", 2);
                button_dynamicAppend("div[class*=px-3]", "下载视频", "window.open(\"https://limbopro.com/archives/M3U8-Downloader.html\", \"_blank\")", "background: red !important; position:fixed; top:100px; border-right: 6px solid #ffc107 !important;", "how", 3);
                // 添加监听器
                addListenerById("missavX", () => { video_loopPlay() });
            } else if (ua_missav.indexOf(mobile_missav) > -1) {
                button_dynamicAppend("div[class*=px-3]", "免广告播放", "video_Play()", "position:fixed; top:60px;", "missavX", 2);
                button_dynamicAppend("div[class*=px-3]", "进入全屏", "fullscreen()", "position:fixed; top:100px;", "missavFullScreen", 3);
                button_dynamicAppend("div[class*=px-3]", "暂停", "video_pause()", "position:fixed; top:140px;", "missavPause", 4);
                button_dynamicAppend("div[class*=px-3]", "下载视频", "window.open(\"https://limbopro.com/archives/M3U8-Downloader.html\", \"_blank\")", "background: red !important; position:fixed; border-right: 6px solid #ffc107 !important;", "how", 3);
                // 添加监听器
                addListenerById("missavX", () => { video_Play() });
                addListenerById("missavFullScreen", () => { fullscreen() });
                addListenerById("missavPause", () => { video_pause() });
            }
            //missAv_adsRemove();
            break;
        case '91porn':
            cloudflare_captchaBypass();
            css_adsRemove(imax.css.porn91);
            break;
        case 'avple':
            cloudflare_captchaBypass();
            css_adsRemove(imax.css.avple);
            //tagName_appendChild("script", imax.js.avple, "body")

            // Cookie 设定及注入
            function current() {

                var d = new Date(),
                    ear = d.getFullYear(); //获取当前年份 
                onth = d.getMonth(); //获取当前月份（0——11） 
                atex = d.getDate(); //获取当前日期（1——31） 

                if (d.getHours() < 10) {
                    ours = "0" + d.getHours()
                }
                else {
                    ours = d.getHours(); //获取当前时间（0——23） 
                }

                inutes = d.getMinutes(); //获取当前分钟（0——59）
                //str += d.getSeconds() + '00'; //获取当前秒钟（0——59）
                return ear + "-" + onth + "-" + atex + "%2" + ours + "%3A" + inutes + "%3A" + "01";
            }

            let strx = "CFWztgFirstShowTime_2899_Cookie = ";
            let timex = current();
            let total = strx + timex;
            document.cookie = total;

            break;
        case '18comic':
            css_adsRemove(imax.css.comic_18);
            button_dynamicRemove("#chk_cover", 200);
            _18comic_adsRemove();
            break;
        case 'www.5dy':
            css_adsRemove(imax.css.dy555);
            break;
        case 'o8tv':
            css_adsRemove(imax.css.dy555);
            break;
        case 'www.555dd':
            css_adsRemove(imax.css.dy555);
            break;
        case 'wnacg':
            css_adsRemove(imax.css.wnacg);
            break;
        case 'ddys':
            css_adsRemove(imax.css.ddrk);
            //ele_adsRemove("#sajdhfbjwhe,#kasjbgih,.hthb-row", 0)
            ele_adsRemove("#sajdhfbjwhe,#kasjbgih", 0)
            break;
        case 'duboku':
            tagName_appendChild("script", imax.js.duboku, "body")
            break;
        case 'libvio':
            css_adsRemove(imax.css.libvio)
            break;
        case 'nbys':
            css_adsRemove(imax.css.nbys)
            break;
        case 'tvn':
            break;
        case 'jable':
            var ua = navigator.userAgent.toLowerCase();
            var mobile = "mobile";
            cloudflare_captchaBypass();
            css_adsRemove(imax.css.jable);
            jable_adsRemove();
            //tagName_appendChild("script", imax.js.functionx, "body"); // js 外部引用 标签 <script>

            if (ua.indexOf(mobile) === -1) {
                button_dynamicAppend("div.my-3", "点此获取M3U8文件", "", "position:absolute; right:92px;", "jablex", 1);
                button_dynamicAppend("div.my-3", "下载视频", "window.open(\"https://limbopro.com/archives/M3U8-Downloader.html\", \"_blank\")", "background: red !important; position:absolute; right:0px; border-right: 6px solid #ffc107 !important;", "how", 2);
            } else if (ua.indexOf(mobile) > -1) {
                //button_dynamicAppend("div.my-3", "点此获取M3U8文件", "repeat_regex.forEach(m3u8_tempt)", "position:absolute; right:92px;", "jablex", 1);
                button_dynamicAppend("div.my-3", "下载视频", "window.open(\"https://limbopro.com/archives/M3U8-Downloader.html\", \"_blank\")", "background: purple !important; position:absolute; right:0px; border-right: 6px solid #ffc107 !important;", "how", 2);
            }

            // 添加监听器
            addListenerById("jablex", () => { repeat_regex.forEach(m3u8_tempt) });

            video_delayPlay(1000);
            break;
        case 'bdys':
            css_adsRemove(imax.css.btbdys, 500);
            videoAds_accelerateSkip(0.1);
            hrefAttribute_set();
            break;
        case 'instagram':
            // 解除 Instagram 桌面浏览器版禁用右键复制图片
            css_adsRemove(imax.css.instagram);
            break;
        case 'ttsp':
            css_adsRemove(imax.css.ttsp);

            break;
        case 'google':
            js_adsRemove(imax.js.contentFarm);
            css_adsRemove(imax.css.goole);
            contentFarm_AdsRemove_Auto();
            var goole_selector = "h3,#bres,[class*='AuVD wHYlTd mnr-c']";
            setAttribute_after(goole_selector, "contentFarm_AdsRemove_Auto()");
            break;
        case 'bing':
            js_adsRemove(imax.js.contentFarm);
            contentFarm_AdsRemove_Auto();
            break;
        case 'zhihu':
            var zhihu_id = "zhihux"
            button_dynamicRemove("[class='Button Modal-closeButton Button--plain']", 10);
            //button_dynamicAppend("header[role='banner']", "清理中! ♻️", "undefined", "position:fixed; right:0px;", zhihu_id, 3);
            css_adsRemove(imax.css.zhihuAds, 100, "hloyx");
            indexLogin();
            addListener("div.TopNavBar-tab-d8yaD", () => { indexLogin() });

            /*
            window.onload = href_attributeSet(500, zhihu_id);
            window.onload = addListener("a[class*='css-'],button[class='Button ContentItem-action Button--plain Button--withIcon Button--withLabel']", () => { href_attributeSet(500, zhihu_id) });
            // 循环判定整个页面 scrollHeight 是否变化
            var body_scrollHeightCheck = setInterval(() => {
                var body_scrollHeight_then = document.body.scrollHeight;
                setTimeout(() => {
                    var body_scrollHeight_now = document.body.scrollHeight;
                    if (body_scrollHeight_now > body_scrollHeight_then) {
                        href_attributeSet(500, zhihu_id);
                    }
                }, 500);
            }, 500);
            // 循环判定评论框是否存在且 scrollHeight 是否有变化
            var comment_scrollHeightCheck = setInterval(() => {
                let comment = document.querySelectorAll("div.CommentListV2");
                if (comment.length > 0) {
                    var comment_scrollHeight_then = comment[0].scrollHeight;
                    setTimeout(() => {
                        var comment_scrollHeight_now = comment[0].scrollHeight;
                        if (comment_scrollHeight_now > comment_scrollHeight_then) {
                            href_attributeSet(500, zhihu_id);
                        }
                    }, 500)
                }
            }, 500)
            */

            break;
        default:
            console.log("Catch Nothing!");
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

// 设置 cookie // missAv Javascript
function missAv_adsRemove() {
    document.cookie = "_gat_UA-177787578-7; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

// 设置 Cookie // 任意
function set_cookie(name, value) {
    document.cookie = name + '=' + value + '; Path=/;';
}

// 隐藏广告样式
function ele_adsRemove(selector, time) {
    var i;
    setTimeout(() => {
        var href_blank = document.querySelectorAll(selector)
        for (i = 0; i < href_blank.length; i++) {
            href_blank[i].remove();
            href_blank[i].style = "display:none ! important; pointer-events: none;"
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
function button_dynamicAppend(ele, text, onclick, position, id, array) {
    var button = document.createElement("button");
    button.innerHTML = text;
    button.setAttribute("onclick", onclick);
    button.setAttribute("id", id);
    var button_style_values = position + "padding: 6px 6px 6px 6px; display: inline-block; " +
        "font-size: 15px; color:white; z-index:114154; border-right: 6px solid #38a3fd; " +
        "border-left: #292f33 !important; border-top: #292f33 !important; " +
        "border-bottom: #292f33 !important; background: black; " +
        "border-radius: 0px 0px 0px 0px; margin-bottom: 10px; " +
        "font-weight: 800 !important; " +
        "text-align: right !important;"
    button.setAttribute("style", button_style_values);
    var here = document.querySelectorAll(ele);
    if (here.length > 0) {
        here[0].insertBefore(button, here[0].childNodes[array])
        //here[0].appendChild(button);
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

/* 播放 */
function window_play() {
    window.player.play()
}

/* 播放 */
function video_Play() {
    //setInterval(function () {
    var ele = ["video[preload='none'],video#player"];
    var ele_catch = document.querySelectorAll(ele);
    if (ele_catch.length > 0) {
        ele_catch[0].play();
        ele_catch[1].play();
        console.log("视频已开始播放；")
    }
    //}, 1000)
}

/* 全屏 */
function fullscreen() {
    const fullScreen = document.querySelector('button[data-plyr=\'fullscreen\']');
    fullScreen.click()
    //fullScreen.requestFullscreen();
    //const fullScreen = document.querySelector('div.plyr__video-wrapper');
    //fullScreen.requestFullscreen();
}

/* 全屏 */
function fullscreen_backup() {
    //setInterval(function () {
    var ele = [".plyr--fullscreen-enabled [data-plyr=fullscreen]"];
    var ele_catch = document.querySelectorAll(ele);
    if (ele_catch.length > 0) {
        ele_catch[0].click();
        //ele_catch[1].click();
        console.log("视频已全屏；")
    }
    //}, 1000)
}

/* 暂停 */
function window_pause() {
    window.player.pause()
}

/* 暂停 */
function video_pause() {
    //setInterval(function () {
    var ele = ["video[preload='none'],video#player"];
    var ele_catch = document.querySelectorAll(ele);
    if (ele_catch.length > 0) {
        ele_catch[0].pause();
        ele_catch[1].pause();
        console.log("视频已暂停；")
    }
    //}, 1000)
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

/* 添加监听器 bySelector*/
function addListener(selector, funx) {
    setTimeout(() => {
        var ele = document.querySelectorAll(selector);
        for (let index = 0; index < ele.length; index++) {
            ele[index].addEventListener("click", funx, false)
        }
    }, 1000)
}

/* 添加监听器 byID */
function addListenerById(id, funx) {
    setTimeout(() => {
        var ele = document.getElementById(id);
        ele.addEventListener("click", funx, false)
    }, 1000)
}


function loopq() {
    alert("Got it!")
}

/* 添加属性 */
function setAttribute_after(x, y) {
    var index;
    var ele = document.querySelectorAll(x)
    for (index = 0; index < ele.length; index++) {
        ele[index].setAttribute("onclick", y);
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

// 禁止新页面跳转另一种实现 循环
function href_attributeSet(time, id) {
    document.getElementById(id).style.background = "black";
    document.getElementById(id).innerHTML = "清理中! ♻️";
    setTimeout(() => {
        // 监控页面是否有新的 button
        let selector = "button[class*='Button PaginationButton']";
        let ele_button = document.querySelectorAll(selector);
        if (ele_button.length > 0) {
            window.onload = addListener(selector, () => { href_attributeSet(time, id) });
        }
        let times = 0;
        let loop = setInterval(() => {
            // 修改属性
            times += 1;
            let href = document.querySelectorAll("a");
            let i;
            for (i = 0; i < href.length; i++) {
                if (href[i].target == "_blank") {
                    href[i].setAttribute("target", "_self");
                }
            }
            let href_Length = document.querySelectorAll("a[target='_blank']").length;
            if (href_Length === 0 && times >= 2) {
                clearInterval(loop);
                if (document.getElementById(id)) {
                    document.getElementById(id).innerHTML = "100%! ♻️";
                    document.getElementById(id).style.background = "green";
                    console.log("循环第" + times + "遍；")
                    console.log("清理完毕!");
                }
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
function css_adsRemove(newstyle, delaytime, id) {
    setTimeout(() => {
        var creatcss = document.createElement("style");
        creatcss.id = id;
        creatcss.innerHTML = newstyle;
        document.getElementsByTagName('head')[0].appendChild(creatcss)
        console.log("CSS样式新增完毕！");
    }, delaytime);
}

// 循环模拟模拟点击
function button_dynamicRemove(selector, times) {
    var initCount = 0;
    var loop = setInterval(() => {
        var ele = document.querySelectorAll(selector);
        if (ele.length > 0) {
            ele[0].click()
        }
        initCount += 1;
        if (initCount == times) {
            clearInterval(loop);
        }
    }, 0)
}

// 知乎循环跳转绕过登录页
function indexLogin() { // 跳转至热门话题 Explore 或 随机
    let url = document.location.href;
    let cssSelector = "a[href='//www.zhihu.com/'],a[href='//www.zhihu.com'],a[href='https://www.zhihu.com']";
    let rewrite_url = "https://www.zhihu.com/knowledge-plan/hot-question/hot/0/hour";
    let reg = /^https:\/\/www.zhihu.com\/signin/gi;
    if (url.search(reg) !== -1) {
        window.location = rewrite_url;
    }

    setTimeout(() => { // 延时执行函数优化
        var ele = document.querySelectorAll(cssSelector)
        if (ele.length > 0) {
            let i;
            for (i = 0; i < ele.length; i++) {
                ele[i].href = rewrite_url;
            }
        }
    }, 300);

    /*
    var url = document.location.href;
    var url_list = [
        "https://www.zhihu.com/knowledge-plan/hot-question/hot/",
    ]
    var rand = Math.floor(Math.random() * url_list.length);
    var url_random = url_list[rand];
    var reg = /^https:\/\/www.zhihu.com\/signin/gi;
    if (url.search(reg) !== -1) {
        window.location = url_random;
    }
    */
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

var repeat_regex = ["https:?\/\/.*?hls.*?\.m3u8", "https:?\/\/.*?phncdn.*?hls.*?\.m3u8"]

function m3u8_tempt(x) {
    var i, url_result; var url_regex = new RegExp(x, "gi")
    var ele = ["script", "a"]
    var ele_catch = document.querySelectorAll(ele)
    for (i = 0; i < ele_catch.length; i++) {
        while ((url_result = url_regex.exec(ele_catch[i].innerHTML)) != null) {
            console.log("Catch it")
            alert(url_result)
        }
    }
}


// Google 内容农场 // 

/*
Written by limbopro
https://limbopro.com/archives/block-contentfarm.html
https://t.me/Adblock4limbo
There are 1798 content farm domains in total until now.
Last updated at 28/1月/2023/00:00
*/


/*
Google TxT Ads block 
*/

function contentFarm_AdsRemove_Auto() {

    //var ads_cssSelectors = [
    //"[data-text-ad]",
    //"#tvcap"
    //];

    //var ads_List = document.querySelectorAll( ads_cssSelectors );
    //if (ads_List.length >0) {
    //for (xyz = 0; xyz < ads_List.length; xyz++){
    //ads_List[xyz].style.display = "none";
    //}
    //}


    /* 
    var ads_cssSelectors = ["[data-text-ad],#tvcap"];
    var ads_List = document.querySelectorAll( ads_cssSelectors );
    var ads_Block;
    for (ads_Block = 0; ads_Block < ads_List.length; ads_Block++){
    ads_List[ads_Block].style.display = "none";
    }
    */

    /*
    content farm domains list.
    */


    var ads_host = [
        "005i.com",
        "01-123.com",
        "01-800.cn",
        "021sensor.com",
        "021shfx.com",
        "024ksm.com",
        "025pc.cn",
        "029jiakang.com",
        "029soho.com",
        "03157.com",
        "0370hz.com",
        "045ddd.com",
        "0537.ru",
        "054wan.com",
        "0551.us",
        "069.net",
        "071040.yageo.tech",
        "0734gougou.com",
        "0752173.com",
        "079.254560.top",
        "0818hj.com",
        "086wl.com",
        "0931safe.com",
        "0937673.info",
        "0a3q.com",
        "0xzx.com",
        "100860.com",
        "101fashion.com.tw",
        "10241314.com",
        "1024dns.com",
        "103.hk",
        "10615.com.cn",
        "1141.net",
        "114saige.com",
        "123.125.114.18",
        "1233win.com",
        "123boma.com",
        "125135.com",
        "128ic.com",
        "136.la",
        "137997.com",
        "14oo.cc",
        "151.com.tw",
        "1515u.com",
        "15211104249.com",
        "15300.cn",
        "1587555.com",
        "15meili.com",
        "163081.com",
        "1666yl.com",
        "16885518.com",
        "168town.com",
        "173-fc.com",
        "17dotaba.com",
        "17xuexi.org",
        "18-21nakedgirls.com",
        "187801.com",
        "18caiba.com",
        "19kaifu.com",
        "1mpi.com",
        "1pyy.com",
        "1r1g.cn",
        "1r1g.com",
        "1wfd.com",
        "20122011.org",
        "209353.com",
        "218127.com",
        "218405.com",
        "218406.com",
        "218434.com",
        "218435.com",
        "218462.com",
        "218471.com",
        "218475.com",
        "218495.com",
        "218573.com",
        "218624.com",
        "218643.com",
        "218695.com",
        "218747.com",
        "218849.com",
        "231127.com",
        "231395.com",
        "231715.com",
        "231727.com",
        "23cpc.com",
        "23scg.cn",
        "25065.net",
        "252yy.net",
        "26531.loan",
        "268363.com",
        "268583.com",
        "268732.com",
        "293wallace.com",
        "2996299.com",
        "2a2d75.dcmir4f.com",
        "2iik.com",
        "2y1m.com",
        "30333.loan",
        "31379266.com",
        "3137com.com",
        "32xyj.pw",
        "356ae.com",
        "360adsolutions.com",
        "360du.net.cn",
        "373415.com",
        "373524.com",
        "38953h.cn",
        "392623.com",
        "3b9ab.com",
        "3enfv3an.com",
        "3jwz.com",
        "3li.cc",
        "3o32.com",
        "3rxing.org",
        "3ssq8z.bmspzs.pw",
        "3v4.net",
        "400839.com",
        "4382.loan",
        "4563.org",
        "4659866.com",
        "4743.loan",
        "4910.com",
        "4blc.com",
        "4c94.cn",
        "4k8k.xyz",
        "4pee.com",
        "4r8.nfjhn.com",
        "507q96.cn",
        "51bbo.com",
        "51dongshi.com",
        "51qutuanjian.com",
        "51rujing.net",
        "51store.alloutofangst.com",
        "51ttxue.com",
        "51xmz.com",
        "520bdy.com",
        "52fuqu.com",
        "52youguan.com",
        "5403.net",
        "5467.com",
        "55118885.com",
        "5634111.com",
        "567516.com",
        "56weiyu.com",
        "5730.net",
        "57c69d.bb6zz.com",
        "57zhuan.cn",
        "58pan.cn",
        "591522.com",
        "59177.net",
        "5a3q.com",
        "5axxw.com",
        "5azy.com",
        "5eso.com",
        "5ibook.net",
        "5k33i.cn",
        "5pk.ah.2j0.iyu.y7.l99.m.7d6y.com",
        "611fu.com",
        "626927.com",
        "626978.com",
        "635sc.com",
        "65at.cc",
        "666so.cn",
        "686232.com",
        "68suan.com",
        "68xi.com",
        "693585.com",
        "6ke89.cn",
        "70ol.com",
        "710dnuv.com",
        "732722.com",
        "7465hy.com",
        "75q.net",
        "75yy.com",
        "77tui.cn",
        "793985.com",
        "7dianying.com",
        "7gt80.com",
        "807z8.cn",
        "81819.download",
        "818497.39164.com",
        "81age.com",
        "842504.com",
        "850310.com",
        "8558.me",
        "86699796.com",
        "8671555.com",
        "86clouds.com",
        "87nmg.com",
        "8801w.com",
        "888777.xyz",
        "8923.download",
        "8ld8.com",
        "8lk.com",
        "8play6.net",
        "8sou.net",
        "9000wy.info",
        "901209.com",
        "91096762.k201.opensrs.cn",
        "9154555.com",
        "91ai.net",
        "91cheap.net",
        "91xfb.com",
        "92yeyu.com",
        "9672800.win",
        "9744.cc",
        "98248.loan",
        "993113.cn",
        "999kaopu.com",
        "99mingpian.com",
        "9wxs.com",
        "9yyu.com",
        "a1fz.com",
        "a372.cn",
        "aaiv.net",
        "aasou.cc",
        "abadisurvey.com",
        "abcsou.cc",
        "abdwap.work",
        "abks.hfges.top",
        "ac590.com",
        "acehfoto.com",
        "actorsfit.com",
        "adwithaglobal.com",
        "aeo.com.cn",
        "aew-sdn.com",
        "ahafm.com",
        "ahaqsyfj.com",
        "ahm7.com",
        "ahmudan.com",
        "ai46.com",
        "aibu8w.com",
        "aidehouse.com",
        "aimees.cn",
        "airsatddt.com",
        "aisouwen.com",
        "alia.xlhad.top",
        "alisousou.com",
        "aliziarealestate.com",
        "allside.news",
        "allweblink.com",
        "almtlakes.org",
        "ambkct.com",
        "ameliapharm.com",
        "amxpj000.com",
        "amxpj25.com",
        "amzalborz.com",
        "anderson-machineries.com",
        "andorra-euro.com",
        "angiefans.com",
        "anhuilife.com",
        "anibalgobernador.com",
        "anipi.org",
        "anitadreamhotel.com",
        "anlon.com.tw",
        "answer-id.com",
        "answiz.com",
        "antarcticshop.com",
        "anticaitaliacomano.it",
        "anysafer.com",
        "anysearch.cc",
        "aosae.com",
        "appleglitz.com",
        "aptvgo.com",
        "archtek.com.tw",
        "art2008.net",
        "artwebradio.com",
        "ask.todgo.com",
        "askaic.com",
        "asp.cx",
        "asspunk.iteye.com",
        "atamaldives.net",
        "atwhcb.com",
        "austrade-ch.com",
        "ayhbte168.com",
        "ayqqszx.com",
        "b7xe.com",
        "baba100.com",
        "baidle.com",
        "baidu.com.024women.com",
        "baidu.com.27f8d94bd0b249a6a9168b1e26efbee7.kaweiso.com",
        "baidu.com.s.2fjc5sedmhi5enihkmsurq7smzl5kzvwx2aehaa8ollo7miojqwlkkzobt0w2.e6b885e5bfae899d.zhulhua.com.cn",
        "baidu.com.se",
        "baidu.com.swd1rsv_spt1rsv_iqid.1234on.com",
        "baidu.com.txzer.com",
        "baidu.fileso.com",
        "baidu.mx",
        "baidu.seo-taiwan.com",
        "baiduer.com.cn",
        "baiduwangpan.cn",
        "bainei.com",
        "baishengyl82.date",
        "bajieyou.com",
        "banmashuo.com",
        "baojiabao.com",
        "barcode-label.com.cn",
        "basoso.com",
        "bbbabc.cc",
        "bbs.pcbeta.ex1.ipv6.xjklmy.com",
        "bbsmax.com",
        "bcajw.com",
        "bccrwp.org",
        "bdqxgw.com",
        "bdw365.com",
        "becreativeblog.com",
        "bellevuewatourism.com",
        "beqve.cn",
        "besetsod.com",
        "bestpdm.com",
        "bg8399.com",
        "bhjck.com",
        "bhjingrui.com",
        "biabu.com.cn",
        "big-tits-and-round-asses.com",
        "bigdatabuy.com",
        "bigeunion.com",
        "bikerschallenge.com",
        "biogogreen.com",
        "bjhering.com",
        "bjhongxiangyuyu.com",
        "bjqcjh.com",
        "bjrailwayhotel.com",
        "bjsczs.cn",
        "bjsjzycb.com",
        "bkcmt.com",
        "blog.jiecaoba.cn",
        "bluefly.com.tw",
        "bmhjq.net",
        "bmlu.com.cn",
        "bntuan.com",
        "boadt8.co",
        "boboad.com",
        "bocaipingji.26my.com",
        "bolangwan.com",
        "bollyinside.com",
        "bongnao.cn",
        "bookstack.cn",
        "boruizhi.net",
        "boschgl.com",
        "bridgeportmilitaryacademy.net",
        "brlbarel.com",
        "brunetvip.com",
        "bstcy.com",
        "btwmch.com",
        "buaq.net",
        "bubuko.com",
        "bushini.de",
        "business-web-sites-hosting.com",
        "buylun.com",
        "buzzhollowrailroad.com",
        "bv2ex.com",
        "bvjpsb.net",
        "bxlac.com",
        "bynss.com",
        "bypidenver.com",
        "bzwyl.com",
        "ca88-com.net",
        "caao.net",
        "cadfanholidays.co.uk",
        "cafegatto.com",
        "caihonggang.com",
        "caijing114.com",
        "cameron-a-reviews.com",
        "cancer0086.com",
        "candle86.com",
        "cashlendup.net",
        "cbbxk.com",
        "ccqczzy.com",
        "cdbao.ex5.ipv6.xjklmy.com",
        "cdbgp.com",
        "cdmana.com",
        "cencelli.it",
        "ceping.info",
        "cesdnet.com",
        "cfpsf.com",
        "cgshw.net",
        "chacalanghanoi.com",
        "chagzh.com",
        "changhe-china.com",
        "chaojiss.com",
        "chaosou.cc",
        "chaoyue.link",
        "check4herpes.com",
        "chengzi1058.com",
        "chenyuhi.com",
        "chezaiyi.cn",
        "chihome.com.tw",
        "chihovet.com.tw",
        "chika-web.net",
        "china-jianzhu.com",
        "china-nzgys.com",
        "chinadmd.com",
        "chinapentapur.com",
        "chineseinla.com",
        "chowdera.com",
        "chromes.cn",
        "ciawe.com",
        "cihangyuan.com",
        "city1.cn",
        "cjsoso.com",
        "ckshishang.com",
        "classicalguitarandbeyond.com",
        "cll99.com",
        "cnaijiaren.com",
        "cnto411.com",
        "cnzzcdn.com",
        "codeantenna.com",
        "codebug.vip",
        "codejzy.com",
        "codenong.com",
        "coder.work",
        "codercto.com",
        "codertw.com",
        "codycn.com",
        "com.sinoextruder.net.cn",
        "compozi.com",
        "conceptcar.ee",
        "coolroofcoating.net",
        "copyan.com",
        "could2.com",
        "courhub.com",
        "coutinhoadvogados.com",
        "cqsscai3188.com",
        "cqxhfgz.com",
        "cscec7bjt.com",
        "ctcea.org",
        "ctocio.com.cn",
        "ctyyn.com",
        "cubeproductions.net",
        "cuoshuo.com",
        "custompatches4u.com",
        "cxjygj.com",
        "cxybb.com",
        "cxymm.net",
        "cxyzjd.com",
        "cy-hl.com",
        "cybei.com",
        "cybermedicine2000.com",
        "cyclesurfstudio.com",
        "cyhs888.com",
        "cyhtzd.com",
        "czmuhe.com",
        "czsfj.cn",
        "czsjsb.com",
        "da-quan.net",
        "dacongyun.com",
        "dafx.cc",
        "daidaigou.org",
        "daigoupiggy.com",
        "daimajiaoliu.com",
        "dainifei.info",
        "daizhiduo.com",
        "dajobrinkman.net",
        "damingweb.com",
        "dancerspointewinchester.com",
        "daokeyou.top",
        "dauphinislandcondos.com",
        "daxuesou.com",
        "daydaynews.cc",
        "dc120.com.cn",
        "dcxhnj.com",
        "ddcode.net",
        "ddhyl.cn",
        "ddoca.com",
        "ddxinwen.com",
        "deal4investments.com",
        "debugcn.com",
        "derenlease.com",
        "desertstreams-surprise.com",
        "dflag.pw",
        "dgbx888.com",
        "dghuigao.com",
        "dglangan.com",
        "dglnfk.com",
        "dgscjd.com",
        "dgso.cn",
        "dgth88.com",
        "dgwaves.com",
        "dgweiliangboli.com",
        "diaochezulingongsi.com",
        "diaosizhainan.com",
        "differentsplit.com",
        "dingfu68.com",
        "dingjisc.com",
        "diningtagtw.com",
        "disnnai.com.tw",
        "djyz007.com",
        "dlcswm.com",
        "dljinhaian.com",
        "dlpzj.com",
        "dlyswlkj.com",
        "docway.net",
        "doczj.com",
        "donglian640.com",
        "dongnanshan.com",
        "dongxzs.com",
        "doo.me",
        "doreenbabycare.com",
        "dovov.com",
        "dpwatch8.com",
        "dqzdhw.com",
        "dtybnh.com",
        "duanzh.com",
        "duanzhihu.com",
        "duboot.com",
        "dunstanhardcastle.com",
        "duoduohelp.com",
        "duonao.cc",
        "dushiliangpin.com",
        "dxxc.com",
        "dy1633.com",
        "dy1991.com",
        "dyzdy.cn",
        "e-kunye.com",
        "eagle-pkg.buzz",
        "eamimi.com",
        "easyzc.com",
        "eatash.com",
        "eayzer.com",
        "ebook123.cc",
        "ec-n.net",
        "ecvss.org",
        "ed2ks.com",
        "edwardianjewellery.com",
        "eeq8.com",
        "eferrit.com",
        "efwm.qswrj.download",
        "egfoem.com",
        "ek162.com",
        "ekyah.link",
        "enchantedauction.com",
        "energietarieven-vergelijken.com",
        "entertainment14.net",
        "eooele.com",
        "eqisou.net",
        "eqisz.com",
        "erdie826.com",
        "esame.cn",
        "eshidai.com",
        "esihui.com",
        "eskere.club",
        "estherboesche.com",
        "exemm.com",
        "exoplanetmagazine.com",
        "expressionssurat.com",
        "exthe247.com",
        "f0536.com",
        "f0579.com",
        "f0760.com",
        "f2qu.com",
        "fafa42.bb6zz.com",
        "fags.vdeaj.top",
        "faithfilledapparel.com",
        "fangbianyouyu.com",
        "farsportswheels.com",
        "fastso.cn",
        "fatie.me",
        "fbws.razot.top",
        "fcaweb.de",
        "feihongxuexiao.com",
        "feijiangpack.com",
        "fenglangty.com",
        "fense5.com",
        "feqn.top",
        "ffbc57.d071.com",
        "fgjrkh0769.com",
        "fgmnr.com",
        "fhkyg.cricket",
        "finanziata.buzz",
        "findapk.cn",
        "findeen.co.uk",
        "findeen.com",
        "fiscusseamlessguttering.com",
        "fjaxlzy.com",
        "fjbnc.com",
        "fjyy.ncznx.top",
        "floridamotocrosstracks.com",
        "flyzyblog.com",
        "flyzyblog.net",
        "fnk.seqe.org.cn",
        "forenose.com",
        "forum.vi-mm.eu",
        "freax.be",
        "free-lunwen.com",
        "free699.com",
        "freyachina.com",
        "friga.de",
        "fromstressedtocentered.com",
        "frong.net",
        "fsyingxin.com",
        "fundaciondaniloperez.com",
        "funnywed.com",
        "furniturelowe.com",
        "fuwuqiceping.com",
        "fuyimokuai.com",
        "fuyingdq.com",
        "fuzadu.com",
        "fwqzdm.com",
        "fwtd.cn",
        "fy6m.com",
        "fydqw.com",
        "fzjk.kxhsm.top",
        "gaaf.klvgb.loan",
        "gadgetarq.com",
        "gadgetstroop.com",
        "gaiwen.com",
        "galacticnewsone.com",
        "gametalk.site",
        "gaojiq.cn",
        "gapemill.com",
        "gbfgg.cn",
        "gd12121.com",
        "gdbgp.com",
        "gdcmendhar.com",
        "gdzyt007.com",
        "geek-share.com",
        "geiso.cn",
        "geistlich-key2success.com",
        "generacodice.com",
        "getit01.com",
        "getool.com",
        "gfsoso.zj005.com",
        "gfsousou.cn",
        "gfsstp.com",
        "ggc-asia.com",
        "gglzw.com",
        "ggsloreleykoelnde.com",
        "ghosttrainbuilder.com",
        "gionee.com",
        "giters.com",
        "github-wiki-see.page",
        "githubhelp.com",
        "githubmemory.com",
        "gitmemory.cn",
        "gitmemory.com",
        "gjfs.com.cn",
        "gkgjws.com",
        "glassessalecp.com",
        "glorynice.buzz",
        "gmgushangke.com",
        "gogonews.cc",
        "googleui.com",
        "googqi.com",
        "gouma.org",
        "gouo.cn",
        "graphenstone-china.com",
        "grcamerada.com",
        "greenengineeringgroup.com",
        "greentravelnwanders.co",
        "grinstreet.ru",
        "gsmxm.com",
        "gsmy791.com",
        "gtzlbj.com",
        "guangdongecu.com",
        "guangzhouecu.com",
        "gufen138.com",
        "guidedbirding.com",
        "guilinshouji.com",
        "guiyangjia.com",
        "gujisc.com",
        "gushiciku.cn",
        "gxqxd.com",
        "gxy995.com",
        "gz-has.com",
        "gz3288.com",
        "gzcardiacsurg.com",
        "gzdxdjk.com",
        "gzguanghan.com",
        "gzgxzsj.com",
        "gzlcsx.com",
        "gzxijiya.com",
        "haier188.us",
        "haiyuesm.com",
        "hang365.com",
        "hangyexia.com",
        "hanlefang.net",
        "hao123.0554.us",
        "hao136.com",
        "hao4k.cn",
        "hao8.net",
        "haohuolife.com",
        "haokuaisou.cc",
        "haoqu.org",
        "haorizs.com",
        "haoxp123.com",
        "haoyar.com",
        "haoyiwuliu.com",
        "happyjyjt.com",
        "harmonyteck.com",
        "hayaliicraat.com",
        "hbbslkj.com",
        "hbhuiran.com",
        "hblp.cn",
        "hbzfgs.com",
        "hcoj.uonwt.download",
        "hd800.net",
        "hdgangqiu.com",
        "hdnkm.com",
        "hebergementwebs.com",
        "hebfanghuom.com",
        "heciao.com.tw",
        "hedo188.com",
        "help315.com.cn",
        "henankuai328.bid",
        "herokuapp.com",
        "herpesoutbreaktreatment-reviews.com",
        "hezu6pro.cn",
        "hfiphone.com",
        "hfxxgang.com",
        "hgfzf.cn",
        "hgmfy.cn",
        "hgqbq.cn",
        "hhhtjtb.com.cn",
        "hicaopan.com",
        "hiegong.com",
        "highdesertboutiquevendors.com",
        "hipstacowboys.com",
        "hitalk.site",
        "hitechglitz.com",
        "hjjyimeipeixun.com",
        "hjtoysco.cn",
        "hk.kuaiso.com",
        "hkhvd.com",
        "hkprimus.com",
        "hkskylove.com",
        "hljunzilan.com",
        "hmgzj.cn",
        "hnblooddisease.com",
        "hnkj21.com",
        "hnsmpf.com",
        "hntece.com",
        "hnxel.com",
        "homeliva.com",
        "homewanchai.com",
        "honerint.com",
        "honghuahui.app",
        "hongkongxzm.com",
        "hongsheng1998.com",
        "hoosoo.cc",
        "horecapolis.info",
        "hostzxw.com",
        "hotbak.net",
        "howsou.com",
        "howtoip.com",
        "hq396.com",
        "hscrystal.buzz",
        "hssjw.cn",
        "hsxlmj.com",
        "htdzzk.com.cn",
        "huangheidc.com",
        "huangjinqihuo.com",
        "huankangfc.com",
        "huanqiao406.com",
        "huanyuxumu.com",
        "huaweicloud.com/s",
        "huayeshuzi.com",
        "hubin148.com",
        "huo123.cc",
        "hwtzlc.com",
        "hxfldsz.com",
        "hy8899.cc",
        "hyacinthking.com",
        "hycp063.com",
        "hyyl186.com",
        "hz-xin.com",
        "hzbgp.com",
        "hzreader.com",
        "i3baby.com",
        "i4k.xyz",
        "iaac.com.cn",
        "ibnsales.com",
        "icanopen.com",
        "icareemr.com",
        "icb2011.com",
        "icmat.net",
        "icoosky.com",
        "igarden365.com",
        "ijinfa.cn",
        "ik4.es",
        "ikue.info",
        "imadebrand.com",
        "image.haosou.com",
        "immo-logis.net",
        "inf.news",
        "innofthedovedallas.com",
        "insideabritishmumskitchen.com",
        "insitedesigns.net",
        "insurancefindersonline.com",
        "intowuzhen.com",
        "io04.com",
        "iolstl.com",
        "ipfsdrop.com",
        "ironbuffalocomics.com",
        "iso22000certification.com",
        "issueexplorer.com",
        "istartips.com",
        "it-swarm.cn",
        "it1352.com",
        "it880880.com",
        "itdaan.com",
        "itectec.com",
        "iter01.com",
        "itigic.com",
        "itranslater.com",
        "itread01.com",
        "its203.com",
        "its304.com",
        "its401.com",
        "its404.com",
        "itw01.com",
        "iuham.com",
        "iy80.com",
        "iyangzhi.com",
        "izlax.cn",
        "j1o.net",
        "jalsys.com",
        "javaer101.com",
        "javaroad.cn",
        "javashuo.com",
        "jayunqi.com",
        "jbkzn.com",
        "jbshy.com",
        "jbsmzx.com",
        "jbstilwellauthor.com",
        "jccreate.com",
        "jcodecraeer.com",
        "ji9.org",
        "jiajufenxiao.com",
        "jiajvhuishou.com",
        "jiankang.pai-hang-bang.cn",
        "jianshewang.net",
        "jiayicaiyin.com",
        "jiayujiancai.com",
        "jimengli.com",
        "jinbei.com",
        "jingyufu.com",
        "jingzhunqy.com",
        "jinhua888.cn",
        "jinmeiguan.com",
        "jinmeiss.com",
        "jiuto.cn",
        "jiuwei.kuaiso.com",
        "jixiangfang.ws",
        "jiyifa.com",
        "jjj.gra-bnoqp.mianfeiwenku.com",
        "jk.zhihu.la",
        "jkyeg.com",
        "jlytgs.com",
        "jmjiedai.com",
        "jms88bwq.com",
        "jmydtc.com",
        "jn-job.com",
        "jnhf888.com",
        "jnhxkt.com",
        "jnluhongjs.com",
        "joecomp.com",
        "jollyny.com",
        "jonf.info",
        "jordanoliveira.com",
        "joyk.com",
        "jpzdz.com",
        "jrjohnny.net",
        "jrq.cn",
        "js83188.com",
        "jsgaoxin.com",
        "jshyjj.com",
        "jskf999.com",
        "jslzx.com",
        "jsnongnong.com",
        "jsso.cc",
        "jssou.cc",
        "jswyhq.com",
        "jun365.net",
        "jusoso.com",
        "jxsfgg.com",
        "jxshyzhx.com",
        "jxyxtx.com",
        "jy7cyn.com",
        "jzhyfrp.com",
        "jzxfz.com",
        "k0w0m.com",
        "k3m8dr.cn",
        "k5uc.com",
        "kabaresta.com",
        "kaicen.cn",
        "kaifa99.com",
        "kaitianqi.com",
        "kanduanxin.com",
        "kaoyu.org",
        "kathymorganvoice.com",
        "kbck.tzrui.top",
        "kedack.com",
        "kerrismn.com",
        "kf115.com",
        "kinlawswelcomegrill.com",
        "kissiya.com",
        "kjdzd.com",
        "kk159p.cn",
        "kknews.cc",
        "www.kknews.app",
        "kkth.xj.cn",
        "kliwei.com",
        "kljfgj.com",
        "ksou.cc",
        "ksxianglu.com",
        "kuaidi.ping-jia.net",
        "kuaidichaxun.com.cn",
        "kuaisan9588.cc",
        "kuaiso.hk",
        "kuaisounews.com",
        "kuaisusou.cc",
        "kubh.lkcpz.download",
        "kusearch.cc",
        "kushalinfra.com",
        "kushibar.com.tw",
        "kutu66.com",
        "kvkft.com",
        "kxwo.com",
        "kxxzz.com",
        "kyotohana.com",
        "l3x3.cn",
        "ladobleo.com",
        "ladresse-auxerre-cpaimmo.com",
        "lady513.com",
        "lamigoclub.com.tw",
        "lanfox.cc",
        "langbookpublishing.com",
        "lanzhouyangsheng.com",
        "lawpert.com",
        "lawpingsew.com",
        "lbbaptist.com",
        "lcjkgc.cn",
        "ldzx.me",
        "leaktiff.com",
        "leewaynyc.net",
        "lemonbiscuitcrumbs.com",
        "leosem.com",
        "leyunad.com",
        "lfkz.ucvst.top",
        "lhckds.com",
        "li36b.com",
        "lighteningtikes.com",
        "lightfly.com.cn",
        "likecs.com",
        "likeji.net",
        "linksou.cc",
        "linksure.cn",
        "linqq.net",
        "lisaxie.com",
        "live1234.com.cn",
        "liwuxian.com",
        "ljkqj.loan",
        "lkjfglass.com",
        "lkmheatlock.com",
        "lldn.net",
        "llzdhb.com",
        "lmubbs.com",
        "lnbird.com",
        "locvps.xyz",
        "lollmold.com",
        "loltftpro.com",
        "lomoo.com",
        "longtengkaibo.com",
        "looksearch.cc",
        "lopshire.net",
        "lotterychina.cn",
        "lppxin.com",
        "lrgjg.com",
        "lsmoody.com",
        "lsxyy.net",
        "lubianfeng.com",
        "luntan88.com",
        "lunwenbsw.com",
        "lushanwenku.com",
        "luton-china.com",
        "luxury-condos-miami.com",
        "lvse.com",
        "lvv2.com",
        "lvyou5.net",
        "lwesedu.com",
        "lxway.com",
        "lxway.net",
        "ly-sz1y.com",
        "lychengnuo.com",
        "lyy57.cn",
        "lzbxgmjj.com",
        "lzf2012.usa10.sethost.cn",
        "m7v.org",
        "machbbs.com",
        "machididi.com",
        "mai520.cn",
        "mamicode.com",
        "mammothlakescrib.com",
        "manongjc.com",
        "manuals.plus",
        "manyanu.com",
        "manyushijia.com",
        "manze.com",
        "maoxinda.com",
        "marriedgames.com.br",
        "mauriziofontana.ch",
        "mch5k.com",
        "mcp-one.com",
        "mdeditor.tw",
        "mdlpg.com",
        "mdlps.com",
        "mdlpt.com",
        "mdobs.com",
        "me348i.cn",
        "meirongbala.com",
        "meixiaqu.com",
        "mememanga.com",
        "mendingtheline.com",
        "mensconsignment.com",
        "meteko.com.tw",
        "mi-invitacion.com",
        "mianfeiwendang.com",
        "middermacon18.com",
        "millermall.com.tw",
        "mimeplay.club",
        "minimidimaxidress.com",
        "misterzeng.com",
        "mitchsmotorcycles.com",
        "mittagongmultimedia.com",
        "mjjcpu.com",
        "mobilephoneslive.com",
        "moe.am",
        "mofish.work",
        "moktime.com",
        "montepozuelo.com",
        "moshizhinan.com",
        "mosuo.com.cn",
        "mosuo.net",
        "mouldu.com",
        "movervip.com",
        "movgod.com",
        "mp3-land.com",
        "mqjnni.co",
        "mrcwebapps.com",
        "mrslevin.com",
        "msldg.com",
        "mt-v.com",
        "mtgrupovega.com",
        "mthmq.com",
        "mtsdb.com",
        "mtsou.com",
        "mtzdyyey.com",
        "mushihua.org",
        "mx185.com",
        "mxgroup.ru",
        "mxtube.net",
        "my-olli.com",
        "mybootic.com",
        "myqianfengdq.com",
        "n8jv.com",
        "nabba-ua.com",
        "nanmuxuan.com",
        "naotan020.com",
        "nas-portal.com",
        "natashaenglehardt.com",
        "nbdig.com",
        "nbyoho.com",
        "ncgtw.com",
        "ncshanhe.com",
        "nenjiaren.com",
        "neon-pet.com",
        "neuf.tv",
        "newbedev.com",
        "newcastle.net.cn",
        "news.yszx2a.com",
        "newtoday.cc",
        "nexteer.cc",
        "nicesou.cc",
        "nimasou.me",
        "ninisanj.com",
        "niostack.com",
        "niubb.net",
        "niul.net",
        "njballoonmfg.com",
        "njrbk.com",
        "njxhmbj.com",
        "njyyjsxx.com",
        "nmdx-crystal.com.cn",
        "nmhjw.cn",
        "nong.09086.cn",
        "nongyetai.com",
        "notesearch.cc",
        "noticiarmoz.com",
        "notwiki.cn",
        "novascotiascott.com",
        "nrgmmu.net",
        "ntustsg.com",
        "nutritiontheatre.com",
        "nwuja.com",
        "nxtoten.com",
        "nyp655.com",
        "o2onlyone.net",
        "oartheir.com",
        "obnseo.com",
        "odeleading.com",
        "odf-ts.com",
        "odkeji.com",
        "offblastsoftworks.com",
        "ofstack.com",
        "ogtracker.net",
        "ohoneyjade.com",
        "oikm.net",
        "okzixun.net",
        "oliobonamini.com",
        "omatomeloanhikaku.com",
        "omniwise.com.tw",
        "oneho.cn",
        "onlineschoolsmontana.com",
        "ooxy.esgpm.top",
        "optima-ski.com",
        "ose.cc",
        "osetc.com",
        "ost-us.com",
        "ostack.cn",
        "otrjobmatch.com",
        "oudebaosw.com",
        "ouiot.com",
        "outshine.cn",
        "ouyiyule8.com",
        "ov333.com",
        "owlapps.net",
        "p8ce.com",
        "pabj.net",
        "padiran-restaurant.com",
        "pai-hang-bang.com",
        "palicaishi.com",
        "pan.haoii123.com",
        "pan.yini.me",
        "panzhongjiaoliu.com",
        "parkous.com",
        "paruze.com",
        "pcok100.com",
        "peiyige.com",
        "penzai.com",
        "persarea.com",
        "pervalkoje.lt",
        "pexim.vn",
        "photoplayhouse.com",
        "pianshen.com",
        "pigfun.cn",
        "pinxia.cc",
        "pitalitobicentenario.com",
        "pjmrw.cn",
        "pjszy.com",
        "pktl.net",
        "planetarium-list.com",
        "platinumpro-online.com",
        "play-track.com",
        "pledz.cn",
        "pmyx.net",
        "pny555.com",
        "portlockgalleries.com",
        "ppfocus.com",
        "pretagteam.com",
        "print-ireland.com",
        "products212.com",
        "programmer.help",
        "programmerall.com",
        "programminghunter.com",
        "projectservers.net",
        "psgy.qqabf.download",
        "puataiwan.com",
        "pukatiyu.com",
        "pybyb.com",
        "pythonmana.com",
        "pzft.xekjn.top",
        "q2xaea.aqzlmy.pw",
        "q578.com",
        "q5j.org",
        "q8ab.com",
        "qastack.cn",
        "qcuao.top",
        "qdjjldaigou.com",
        "qhmnls.com",
        "qiain.com",
        "qiandaohutrip.cn",
        "qianzhaopeng.com",
        "qimei888.com",
        "qioa.pw",
        "qiongbaba.net",
        "qiongling.com",
        "qiongwengc.cn",
        "qiuxiami.com",
        "qiuzhi5.com",
        "qiyerz.com",
        "qljjgw.com",
        "qmvdy.com",
        "qmxys.com",
        "qqcaipu.com",
        "qqshouyou.com",
        "qqzhix.com",
        "qqzxzq.me",
        "qslcg.com",
        "qslcz.com",
        "qu02.com",
        "quanbuso.com",
        "quantumafrica4.com",
        "qubaidu.cn",
        "qubian.cn",
        "quweiso.com",
        "quyn95.com",
        "qxrsy.com",
        "qyqstore.com",
        "raisingjane.net",
        "rattaprofid.ee",
        "rb9q.com",
        "rcxtw.cn",
        "re2n9p.fmtywj.pw",
        "read01.com",
        "read678.com",
        "reallifetucson.com",
        "refertheme.com",
        "relcare.com.cn",
        "renniboix.loan",
        "renrengou1.com",
        "repingke.com",
        "repoarchive.com",
        "rezhishi.net",
        "rickyljonesphotography.com",
        "rightwithgod.net",
        "rjqyl.com",
        "rkgpc.date",
        "rmljlt.com",
        "robertbissett.com",
        "robertmwagner.com",
        "rockero.com.py",
        "ronzhuan.com",
        "royaloakblean.com",
        "rtmj.net",
        "ruonu.com",
        "rxpnb.fun",
        "ry8zx.com",
        "rzki.gibmk.download",
        "s0898.com",
        "sadyr.party",
        "saerim.net",
        "salon-diana.net",
        "samsungtime.com",
        "sanwenba.com",
        "saojiejie.023mp.net",
        "saopaulocalling.org",
        "saryagash-tour.com",
        "sbskf.com",
        "scftzs.com",
        "scptol.com",
        "scw68.com",
        "sdbeta_com.sx11xuan561.review",
        "sdcaifeng.com",
        "sdcgzk.com",
        "sdcnjt.com",
        "sdfymy777.com",
        "sdhuawen.com",
        "sdlhw.com.cn",
        "sdrb.net",
        "sdss.cn",
        "sdwanbo.com",
        "sdzbyzjx.com",
        "sdzwhmw.com",
        "search.discuz.qq.com",
        "sebastianyepesdesign.com",
        "secnews.gr",
        "seedsbuddy.com",
        "seemk.com",
        "semei6.fun",
        "semicolonworld.com",
        "seraragame.com",
        "sgsou.cc",
        "sh-caco3.com",
        "sh-jieao.com",
        "shangdixinxi.com",
        "shangmayuan.com",
        "shantiyogatupelo.com",
        "shanyouwang.com",
        "shatangju.net",
        "shcg.cn",
        "shcml.com",
        "shdisheng.cn",
        "shen-zhan.com",
        "shengqian001.com",
        "shengyijixie.com",
        "shenso.wang",
        "shhkhb.com",
        "shiai4444.com",
        "shifangwusheng.com",
        "shikin-support.buzz",
        "shkxsy.cn",
        "shouji211.com",
        "shsjing.com",
        "shtianbao.com",
        "shuangsan.cn",
        "shuobaico.com",
        "shuzhiduo.com",
        "shve.org",
        "shxy888.com",
        "shzewang.com",
        "si-jou.com.tw",
        "sijintuan.com",
        "simonmarketingagency.com",
        "simplesend.com",
        "singletorino.it",
        "sirdesmonddesilvaqc.com",
        "sitevalue.net",
        "sj.itdqs.com",
        "sj55.org",
        "sjsp168.com",
        "sjwebster.net",
        "sjzdsy.com",
        "sjzeyhl.com",
        "sk2.net",
        "skmacau.com",
        "skrask.com",
        "skyline-pallc.com",
        "sl800.cn",
        "slandail.net",
        "slavadesigns.com",
        "slgjg.com",
        "smallbizdiary.com",
        "smf7.com",
        "smtp.ns2.mywindowsolution.com",
        "snplw.cn",
        "so.100lw.com",
        "so.365vsh.com",
        "so.520meiyuan.com",
        "so.7coder.com",
        "so.81282.com",
        "so.812dj.com",
        "so.alc360.com",
        "so.anggang.com",
        "so.ciliba.com",
        "so.cokcn.cn",
        "so.cyweb.cn",
        "so.dedeadmin.com",
        "so.edczg.cn",
        "so.gnsoso.com",
        "so.haowen.org",
        "so.lcxzs.cn",
        "so.lkeshangpc.cn",
        "so.nalc.com.cn",
        "so.nshidai.net",
        "so.sanlou.net",
        "so.shenbojiawangbs.com",
        "so.ttywx.com",
        "so.tz365.cn",
        "so.v3v4.com",
        "so.vineken.com",
        "so.vjiangyin.net",
        "so.xiaohuihui.net",
        "so.xn--vhq2kx24m.com",
        "so.xy123.cc",
        "so.yunfei89.com",
        "so.zanhuangwang.com",
        "so.znqnet.com",
        "soba123.com",
        "sodocs.net",
        "soinside.com",
        "sokuer.com",
        "sokutu.com",
        "somjj.com",
        "sonanone.com",
        "sosnboutique.com",
        "sotop.org",
        "sou-deng.com",
        "sou.linmingyao.cn",
        "sou.sfe8.com",
        "soudiy.com",
        "soumoye.com",
        "sounote.cc",
        "souzhuang.cn",
        "soydemac.com",
        "specialty-tire.com",
        "speed.m.baidu.com",
        "spudgreenlake.com",
        "sqwudong.com",
        "sr-sc.com",
        "ssgwy.com",
        "sshkz.com",
        "ssjxhy.com",
        "stacknoob.com",
        "stackoom.com",
        "stackoverrun.com",
        "standfordiabetes.com",
        "starbytecomputers.com",
        "steamcuba.com",
        "stellavingzeinternational.com",
        "storewes.com",
        "subversionromance.com",
        "sugarfree-photo.com",
        "sulianqi.cn",
        "sundaeshoes.com",
        "sunnews.cc",
        "sunnews.site",
        "supermobileqa.com",
        "suxa.org",
        "svwlx.cn",
        "sweattheplay.com",
        "swiftbn.com",
        "sya66.com",
        "sycwsdp.com",
        "sync-computers.com",
        "systemcity.cn",
        "szaksd.com",
        "szbgp.com",
        "sznovalux.com",
        "szredsafe.com",
        "t-salon.cc",
        "t38g.com",
        "takecare.com.tw",
        "takedown.icu",
        "talleralcubo.com",
        "tanghtine.com",
        "taofx.cc",
        "taozx.cn",
        "taptapdashonline.com",
        "tarinaka.com",
        "tauferer-ahrntal.eu",
        "tbbee.cc",
        "tceic.com",
        "tdjgw.com",
        "teamumwelt.buzz",
        "technoglitz.com",
        "techwrestler.com",
        "teentube18.org",
        "telanganatopnews.com",
        "tenjiao.net",
        "texanatrailslodge.com",
        "tg9.com",
        "thaigraphicdesign.com",
        "thebowhuntersjournal.com",
        "thecluelesscrafter.com",
        "thefreesummit.com",
        "thegentlemensboxinggym.com",
        "thelatinoartproject.com",
        "thelittlestrawberryfarm.com",
        "themortgagebeyondnetwork.com",
        "therejunction.com",
        "theupsstoredc.net",
        "thinbug.com",
        "tianman602.com",
        "tigresounds.com",
        "tihaofree.com",
        "tinystm.org",
        "tipsandtricks.tech",
        "tititi.cc",
        "tixixuexi.com",
        "tizuh.cn",
        "tjjltx.com",
        "tjqncj.com",
        "tjwhyt.com",
        "tjydhz.com",
        "tl80.cn",
        "tlpoe.com",
        "tmjd.27mai.com",
        "tokyominer.com",
        "tomatoesweb.com",
        "toms2013.com",
        "tongfengqu.com",
        "tongso.com",
        "tool.jqhnt.com.cn",
        "topbester.com",
        "topitinfo.com",
        "topsensemd.com",
        "tpiorg.com",
        "tpofy.com",
        "tpst.com.cn",
        "tracksfree.com",
        "tremplin-numerique.org",
        "trendsshop.cn",
        "triboulet.it",
        "trik-tips.com",
        "trsl.me",
        "trust1688.com",
        "tsns.xyz",
        "tspweb.com",
        "tttiii.cc",
        "tujour.com",
        "tuokehj.com",
        "tvkrimpenerwaard.nl",
        "tw511.com",
        "twgjy.com",
        "twgreatdaily.com",
        "twypage.com",
        "txcj188.com",
        "txeendx.buzz",
        "txjingyi.com",
        "tyniu.com",
        "tysjky.com",
        "tzboli.com",
        "u158q5.cn",
        "u2ws.com",
        "u88sz.com",
        "uberalift.com",
        "ubid4it.org",
        "ujoy.net",
        "universalusbinstallerdownload.com",
        "uomgb.com",
        "uqseo.com",
        "usechinavpn.com",
        "usku.xawqr.accountant",
        "uslos.com",
        "uwenku.com",
        "v1ex.com",
        "v6lr.adnfn.link",
        "valuesfootprint.com",
        "vcaaz.com",
        "vehicletagtw.com",
        "verycd9.com",
        "vfbp.vqyew.loan",
        "vhnaea8.com",
        "vickarsgroup.com",
        "video10216-gov.top",
        "video12326-gov.top",
        "video12366-gov.top",
        "video12996-gov.top",
        "video14536-gov.top",
        "video14626-gov.top",
        "video16086-gov.top",
        "video16106-gov.top",
        "video18786-gov.top",
        "video6556-gov.top",
        "video8496-gov.top",
        "video91.com",
        "viltd.com",
        "visionaras.com",
        "vk-c.net",
        "vnlr.tduaz.top",
        "voidcn.com",
        "vonkalm.com",
        "voorp.com",
        "vpsak.com",
        "vpsmm.com",
        "vpsmr.com",
        "vpsurl.com",
        "vxiang1.com",
        "w-yue.com",
        "walkthetalkblog.com",
        "wallpaper-photos.com",
        "wangshuai.net",
        "wantubizhi.com",
        "wanzi163.com",
        "waterstaiwan.com.tw",
        "ways2u.com",
        "wd.haosou.com",
        "web.mybnb.tw",
        "weblogographic.com",
        "webplus.org.cn",
        "websetnet.net",
        "weiaizu.com",
        "weibaoju.com",
        "weibo5i.com",
        "weiboroom.com",
        "weimeiba.com",
        "weimeicun.com",
        "weivb.com",
        "weixineda.com",
        "weixingon.com",
        "wenda123.org",
        "wenku1.com",
        "wenshanok.com",
        "wenshuw.com",
        "wenyanet.com",
        "westsectionclub.com",
        "whitneytembelis.com",
        "whjjms.com",
        "whldl.com",
        "whysw88.com",
        "wienfm.com",
        "wikioi.com",
        "windowsfront.com",
        "windowsnoticias.com",
        "windrimbuilding.com",
        "wispypages.com",
        "wj-o3.com",
        "wjxwlr.cn",
        "wkee.net",
        "wldbs.com",
        "wldci.com",
        "wntzx.cn",
        "wodekuandai.com",
        "woniuidc.com",
        "workhard.guru",
        "woso.cn",
        "wowoka.com",
        "wpwfg.cn",
        "wsearch.cc",
        "wtsearch.cc",
        "wui5.com",
        "wuji8.com",
        "wumeiyoupin.com",
        "wwtw.yeane.top",
        "www-54197.com",
        "www.youchuang365.com",
        "www3.udpdu.com",
        "wxhgfl.com",
        "wyel.okqqz.top",
        "wywqw.net",
        "wzfbydq.com",
        "wznk.net",
        "x3mr.cn",
        "x77ba.com",
        "xablgt.cn",
        "xahaihongbz.com",
        "xalssy.com.cn",
        "xaxem.com",
        "xaylqh.com",
        "xayyzsgc.com",
        "xdjwm.com",
        "xdrn.net",
        "xgcs98.com",
        "xianfanglei.com",
        "xianjinghn.com",
        "xiaobaike.net",
        "xiaobenzi.com",
        "xiaohui482.com",
        "xiaosou.cc",
        "xiaozhishi.net",
        "xieetuuy.com",
        "xilr.uwudk.top",
        "xima.org",
        "xindd.cc",
        "xinfuq.cn",
        "xinfx.cc",
        "xinguge.cn",
        "xinhexinli.com",
        "xiroou.com",
        "xjdpg.cn",
        "xjguke.com.cn",
        "xjlmst.com",
        "xkyn.com",
        "xlfz.ybswv.top",
        "xmaustar.com",
        "xmtx88.com",
        "xmyt88.com",
        "xrbi.net",
        "xs.zhihu.la",
        "xshdkj.com",
        "xtoolsoft.com",
        "xuehua.us",
        "xuie.pw",
        "xuyich.com",
        "xxwmm.com",
        "xz4h.com.cn",
        "xzhetdq.com",
        "xzzflower.com",
        "yamamah.net",
        "yanapozarin.com",
        "yanzuoguang.com",
        "yao51.com",
        "yataitextile.com",
        "yaxuntx.com",
        "ybkhw.cn",
        "ycltgy.com",
        "ycluomen.com",
        "ycrlt.com",
        "ydxyw.cn",
        "yeeed.com",
        "yesterdaysapples.com",
        "yfstone.net",
        "yfytw.com",
        "yibinyd.com",
        "yichao77.com",
        "yidiansousuo.com",
        "yiemu.com",
        "yifx.cc",
        "yingyuwen.com",
        "yinweiaihuoguo.com",
        "yinxiu266.com",
        "yinyan.org",
        "yiper.cn",
        "yirenkeji.com",
        "yisearch.cc",
        "yiyou3.com",
        "yjebh.com",
        "yjhxw.cn",
        "yjjchine.com",
        "yjsou.cn",
        "ykn559.com",
        "ykyongzhen.com",
        "ymeid.com",
        "yngymy.com",
        "ynrjw.com",
        "yogacorepower.com",
        "yon.hk",
        "yoneihan.com",
        "yougaowang.com",
        "youxizhinancn.com",
        "youyelishi.com",
        "yqkk.ynzmb.loan",
        "yqso.cn",
        "yqtg178.com",
        "yqzxdq.com",
        "ys2344.com",
        "ysboss.cn",
        "ysou.cc",
        "ysou.pw",
        "yteh.xpwqq.download",
        "ytmushroom.com",
        "ytswx.com",
        "yu72.com",
        "yuanmacha.com",
        "yuccaglobalgroup.com",
        "yuediqu.com",
        "yues.org",
        "yuffz.com",
        "yulindown.com",
        "yundongfang.com",
        "yutongsh.com",
        "yw168.cn",
        "ywzvx.top",
        "yxgjgc.com",
        "yxjcfjzz.com",
        "yxjdcc.com",
        "yxlchbz.com",
        "yysit.com",
        "yytflm.com",
        "yzyczxx.com",
        "z7yule.cn",
        "zalou.cn",
        "zambj.com",
        "zbqy.net",
        "zbz2.com",
        "zbzhanheng.com",
        "zcblsw.com",
        "zcndt.cn",
        "zdes-film.com",
        "ze3.234665.top",
        "zeqa.mygqi.top",
        "zftmw.com",
        "zgbjzn.com",
        "zggqyl.com",
        "zgnzwzzgys.com",
        "zgscxly.com",
        "zhaihai.com",
        "zhajun.com",
        "zhangjingchu.org",
        "zhangshengrong.com",
        "zhanso.cn",
        "zhaochq.com",
        "zhaofupo8.com",
        "zhaozhuji.com",
        "zhenchuyuan.com",
        "zhengwangsuye.com",
        "zhenhesaun.com",
        "zhihu.la",
        "zhihujingxuan.com",
        "zhipanyou.com",
        "zhizhusou.com",
        "zhongguogongyi.com",
        "zhongrunzx.com",
        "zhuangshi.hui-chao.com",
        "zhuaniphone.com",
        "zhuantiyi.com",
        "zhuoyuelunwenwang.com",
        "zibolongmoo.com",
        "zihonggong.com",
        "zijl.cn",
        "zipaijingpin.cc",
        "zipperjob.cn",
        "zircondentalcraft.com",
        "zixundingzhi.com",
        "zjlianteng.com",
        "zjqlct.com",
        "zlq09.com",
        "zmtests.com",
        "zodiacthefest.com",
        "zpcsg.cn",
        "zpgm.net",
        "zpzyp.com",
        "zrxhn.com",
        "zrzwpa.com",
        "zuiyese.com",
        "zvazx.link",
        "zx001.com.cn",
        "zxbx.awejp.top",
        "zxsou.cc",
        "zxsy5.com",
        "zyldjd.com",
        "zymseo.com",
        "zyqct.com",
        "zz759.com",
        "zzhesheng.com",
        "zzjwcf.com",
        "zzyyo.com",
        "114.55.26.126",
        "118.193.38.103",
        "159.138.37.243",
        "23.95.222.127",
        "39.108.60.68",
        "47.241.89.120",
        "cloud.tencent.com/developer/ask",
        "cloud.tencent.com/developer/information",
        "support.huaweicloud.com/topic",
        "www.cnpython.com/qa",
        "www.huaweicloud.com/theme",

        "zditect.com",
        "whatthefuck.wtf"
        //"csdn.net"
    ];

    var search_results_css = [
        "li.b_algo", // bing 搜索结果样式
        ".mnr-c.xpd.O9g5cc.uUPGi", // Google 富文本搜索结果 style
        "div[data-sokoban-grid]", // 通用
        "div.g", // Google PC 搜索结果样式
        "div[class='g'][data-hveid]", // 这是谷歌PC端搜索结果页的 style
        "div[class='mnr-c g'][data-hveid]", // 这是谷歌手机端搜索结果页的 style
        "div[class][data-sokoban-container]"// 最后一个选择器也不需要逗号结尾
    ]

    var i, x;
    setTimeout(() => {
        for (i = 0; i < ads_host.length; i++) {
            var ads_host_css = "[href*='" + ads_host[i] + "']";
            var huge = document.querySelectorAll(search_results_css);
            for (x = 0; x < huge.length; x++) {
                if (huge[x].querySelectorAll(ads_host_css).length) {
                    huge[x].remove();
                }
            }
        }
    }, 500);

    timecount += 1;
    console.log("循环第" + timecount + "次")
    if (timecount === 1) {
        clearInterval(id);
        console.log("循环结束！")
    }
}

var timecount = 0;
var id = setInterval(contentFarm_AdsRemove_Auto, 1000);