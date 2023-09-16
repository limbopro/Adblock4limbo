// ==UserScript==
// @name         Adblock4limbo.X
// @namespace    https://github.com/limbopro/Adblock4limbo/raw/main/Adguard/Adblock4limbo.user.js
// @version      0.3.6.3
// @license      CC BY-NC-SA 4.0
// @description  毒奶去广告计划油猴版；通过 JavaScript 移除Pornhub/搜索引擎（Bing/Google）广告及内容农场结果清除/泥巴影视/低端影视（可避免PC端10秒广告倒计时）/独播库/ibvio/Jable（包含M3U8文件提取）/MissAv（禁止离开激活窗口视频自动暂停播放）/禁漫天堂/紳士漫畫/91porn/哔滴影视（加速跳过视频广告/避免反查）/555电影网（o8tv）等视频网站上的视频广告和图片广告，保持界面清爽干净无打扰！其他：优化PC端未登录状态访问知乎浏览体验（动态移除登录窗口/永远不会跳转至首页登录页面）；
// @author       limbopro
// @match        https://ddrk.me/*
// @match        https://ddys.tv/*
// @match        https://ddys.pro/*
// @match        https://ddys.art/*
// @match        https://ddys2.me/*
// @match        https://jable.tv/*
// @match        https://www.btbdys.com/*
// @match        https://www.bdys01.com/*
// @match        https://www.bdys02.com/*
// @match        https://www.bdys03.com/*
// @match        https://www.bdys10.com/*
// @match        https://cn.pornhub.com/*
// @match        https://www.pornhub.com/*
// @match        https://missav.com/*
// @match        https://91porn.com/*
// @match        https://www.91porn.com/*
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
// @match        http://www.tz659.com/*
// @match        https://anime1.me/*
// @match        https://m.yhdmp.cc/*
// @match        https://m.yhdmp.com/*
// @match        https://m.yhpdm.com/*
// @match        https://www.nivod4.tv/*
// @match        https://m.nivod4.tv/*
// @match        https://cn1.91short.com/*
// @match        https://xiaobaotv.net/*
// @match        https://javday.tv/*
// @match        https://www.xvideos.com/*
// @match        https://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=limbopro.com
// @require https://greasyfork.org/scripts/442253-%E5%B1%8F%E8%94%BD%E5%86%85%E5%AE%B9%E5%86%9C%E5%9C%BA-with-%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC/code/%E5%B1%8F%E8%94%BD%E5%86%85%E5%AE%B9%E5%86%9C%E5%9C%BA%EF%BC%88with%20%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC%EF%BC%89.user.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

/**
 * ---------------------------
 * Author: limbopro
 * View: https://limbopro.com/archives/12904.html
 * ---------------------------
 */

// 一些常量

/* Start */

const uBlockOrigin = {

    // uBlockOrigin 默认脚本
    // https://github.com/uBlockOrigin/uBOL-home/tree/main/chromium/rulesets/scripting/scriptlet
    // uBO Lite (uBOL), a permission-less MV3 API-based content blocker.
    // uBOL is entirely declarative, meaning there is no need for a permanent uBOL process for the filtering to occur, and CSS/JS injection-based content filtering is performed reliably by the browser itself rather than by the extension. This means that uBOL itself does not consume CPU/memory resources while content blocking is ongoing -- uBOL's service worker process is required only when you interact with the popup panel or the option pages.
    // uBOL does not require broad "read/modify data" permission at install time, hence its limited capabilities out of the box compared to uBlock Origin or other content blockers requiring broad "read/modify data" permissions at install time.

    /*如若需同步至 https://greasyfork.org/zh-CN 则需将本常量删除；
     这将导致审核不通过且脚本有被 GreasyFork 管理员 删除的风险；
    */

    chn0abortcurrentscript: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/chn-0.abort-current-script.js", // chn-0.abort-current-script.js
    chn0setconstant: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/chn-0.set-constant.js", // chn-0.set-constant.js
    abortcurrentscript: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.abort-current-script.js", // abort-current-script
    abortcurrentscript: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.abort-current-script.js", // abort-current-script
    abortcurrentscript: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.abort-current-script.js", // abort-current-script
    abortcurrentscript: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.abort-current-script.js", // abort-current-script
    abortonpropertyread: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.abort-on-property-read.js", // default.abort-on-property-read.js
    abortonpropertywrite: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.abort-on-property-write.js", // default.abort-on-property-write.js
    abortonstacktrace: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.abort-on-stack-trace.js", // abort-on-stack-trace.js
    addEventListenerdefuser: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.addEventListener-defuser.js", // default.addEventListener-defuser.js
    alertbuster: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.alert-buster.js", // default.alert-buster.js
    cookieremover: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.cookie-remover.js", // default.cookie-remover.js
    disablenewtablinks: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.disable-newtab-links.js", // default.disable-newtab-links.js
    evaldataprune: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.evaldata-prune.js", // default.evaldata-prune.js
    jsonprune: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.json-prune.js", // default.json-prune.js
    m3uprune: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.m3u-prune.js", // default.m3u-prune.js
    nanosetIntervalbooster: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.nano-setInterval-booster.js", // default.nano-setInterval-booster.js
    nanosetTimeoutbooster: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.nano-setTimeout-booster.js", // default.nano-setTimeout-booster.js
    noevalif: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.noeval-if.js", // default.noeval-if.js
    nofetchif: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.no-fetch-if.js", // default.no-fetch-if.js
    norequestAnimationFrameif: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.no-requestAnimationFrame-if.js", // default.no-requestAnimationFrame-if.js
    nosetIntervalif: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.no-setInterval-if.js", // default.no-setInterval-if.js
    nosetTimeoutif: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.no-setTimeout-if.js", // default.no-setTimeout-if.js
    nowebrtc: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.nowebrtc.js", // default.nowebrtc.js
    nowindowopenif: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.no-window-open-if.js", // default.no-window-open-if.js
    noxhrif: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.no-xhr-if.js", // default.no-xhr-if.js
    refreshdefuser: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.refresh-defuser.js", // default.refresh-defuser.js
    removeattr: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.remove-attr.js", // default.remove-attr.js
    removeclass: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.remove-class.js", // default.remove-class.js
    removenodetext: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.remove-node-text.js", // default.remove-node-text.js
    replacenodetext: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.replace-node-text.js", // default.replace-node-text.js
    setattr: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.set-attr.js", // default.set-attr.js
    setconstant: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.set-constant.js", // default.set-constant.js
    setcookie: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.set-cookie.js", // default.set-cookie.js
    setlocalstorageitem: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.set-local-storage-item.js", // set-local-storage-item.js
    spoofcss: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.spoof-css.js", // default.spoof-css.js
    trustedsetconstant: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.trusted-set-constant.js", // default.trusted-set-constant.js
    trustedsetcookie: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.trusted-set-cookie.js", // default.trusted-set-cookie.js
    windowcloseif: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.window-close-if.js", // default.window-close-if.js
    xmlprune: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/scripting/scriptlet/default.xml-prune.js", // default.xml-prune.js
}

const css_common = {
    //General element hiding rules
    /*如若需同步至 https://greasyfork.org/zh-CN 则需将本常量删除；
     这将导致审核不通过且脚本有被 GreasyFork 管理员 删除的风险；
    */
    gehr: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/CSS/Adblock4limbo.user.css"
}

tagName_appendChild('link', css_common.gehr, 'head')

/* End */

const imax = {
    js: {
        //functionx: "https://limbopro.com/Adguard/Adblock4limbo.function.js", // 全局js
        //duboku: "https://limbopro.com/Adguard/duboku.js", // 独播库
        //vple: "https://limbopro.com/Adguard/avple.js", // avple
        //contentFarm: "https://limbopro.com/Adguard/contentFarm.js", // 内容农场
        contentFarm: 'https://greasyfork.org/scripts/442253-%E5%B1%8F%E8%94%BD%E5%86%85%E5%AE%B9%E5%86%9C%E5%9C%BA-with-%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC/code/%E5%B1%8F%E8%94%BD%E5%86%85%E5%AE%B9%E5%86%9C%E5%9C%BA%EF%BC%88with%20%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC%EF%BC%89.user.js',
    },
    css: {
        globalcss: "https://limbopro.com/CSS/Adblock4limbo.user.css", // 全局
        libvio: ".hidden-log ,a[target=\"_blank\"] > .img-responsive ,.advertise ,#adsbox ,.t-img-box ,.inner-advertise ,.advertise  {display: none! important;}", // libvio
        goole: "#tvcap,[data-text-ad] {display:none !important}", // 谷歌搜索广告
        avple: "#adsbox,.asg-overlay,.jss20,.jss13,iframe,span[class*=MuiSkeleton-root],.jss16 ,.MuiSkeleton-pulse.jss12.MuiSkeleton-rect.MuiSkeleton-root,[id*=KnvW],img[src*=\".gif\"],iframe[data-width] {display: none! important;}", // avple
        btbdys: "a[href*='z2py'], a[href*='dodder'], .ayx[style^=\"position\: fixed;bottom\"],#ad-index,#adsbox,.ayx[style=\"display:block;\"],.ayx[style^=\"position: fixed;bottom\"],a[target*=_new] {display:none !important;}", // 哔滴影视
        switch: ".switch {display:none !important}",
        ddrk: "#fkasjgf {display: none !important}",
        jable: ".text-center > a[target=\"_blank\"] > img, div.asg-interstitial,div.asg-interstitial__mask,iframe,div[class*=\"exo\"], .exo-native-widget-outer-container,a[target*=\"_blank\"],a[href*=\"trwl1\"],div[data-width=\"300\"],div.text-center.mb-e-30,div[data-width*=\"300\"],div[style*=\"300px\"],section[class*=\"justify\"],iframe[width=\"728\"][height=\"90\"],#site-content > div.container > section.pb-3.pb-e-lg-40.text-center,.text-center > a[target=\"_blank\"] > img,a[href*=\"\?banner=\"],[class*=\"root--\"],.badge,a[href=\"http\:\/\/uus52\.com/\"] {display :none !important; pointer-events: none !important;}", // Jable.tv
        test: "*, div,img {display: none !important}",
        comic_18: "[target='_blank'],.modal-backdrop,[data-height*='90'],div[data-height='250'][data-width='300'],a[href^='http']:not([href*='18comic.']) > img ,#adsbox ,a[target='_blank'][rel*='nofollow'] > img[src*='.gif'] ,#guide-modal ,iframe[width='300'][height='250'] ,.modal-body > ul.pop-list,.adsbyexoclick,div[data-group^='skyscraper_'],.bot-per,.top-a2db,a[href*='.taobao.com'],div[data-height='264'][data-width='956'],div[style^='position: fixed; top:'],.bot-per.visible-xs.visible-sm  {display: none !important; pointer-events: none !important;}", // 555电影网
        dy555: "a[target=\"_blank\"] img,.playtop.col-pd,a[href*=\"?channelCode=\"] > img[src*=\".com:\"],#adsbox,div.myui-panel.myui-panel-bg.clearfix.wapad {display:none !important}", // 555影院
        wnacg: "div > img[src*='gif'],div.sh,div > a[target='_blank'] > img {display:none !important}", // 绅士漫画
        missav: "a[href*='/vip'],img[src*='.gif'], iframe,#a[href*='//bit.ly/'],div[style*='z-index: 1001'],ul.space-y-2.mb-4.ml-4.list-disc.text-nord14,div.space-y-5.mb-5,div.under_player,div[style=\"width: 300px; height: 250px;\"] {display:none !important; pointer-events:none important;}", //  MissAV
        porn91: "br, .ad_img,img[class*=\"ad_img\"], iframe[src*=\"ads\"], img[href*='.gif'] {display:none ! important; pointer-events: none !important;}", // 91porn
        zhihuAds: "div.css-1izy64v,[class='Card AppBanner'],.Footer,.Banner-link,div.Pc-word {display:none ! important; pointer-events: none !important;}",
        pornhubx: "#header.hasAdAlert {grid-template-rows:60px 40px 0px !important} div.hd.clear, div > img[data-title][srcset], #js-networkBar,div#abAlert, .adsbytrafficjunky, #pb_template, .sponsor-text, #adsbox, .abAlertShown, .abAlertInner, #main-container > .abovePlayer, [rel*='noopener nofollow'],a[href^=\"http://ads.trafficjunky.net/\"], .topAdContainter,.adsbytrafficjunky,.ad-link,a[target='_blank'] {height:0px !important; display:none !important; pointer-events:none;}", // pornhub
        instagram: "div._aagw {display:none !important}", // 网页版Instagram不能复制图片的问题
        ttsp: "div#playad1,a[href*=\"8616.tech\"],.play_list_adbox,#adsbox,.ads_all > .ads_w,.ads_box,.right_ads {display:none !important}",
        tz659: "figure, img[src*='mt2.jpg'],img[src*='pf.gif'],[src*='.gif'], iframe {display:none !important}",
        anime: "div[id*=ad] {display:none !important}",
        yhdmp: ".yrtjbmnk_b, .hvitsutz_b {display :none !important; pointer-events: none !important;}", // 樱花动漫
        nivod: "img[src*=gif], .video-ad, .nav-ads, #adDiv, .v-ad, .ad-text, #video-container + ul[style^=\"width:\"] > li > img {display: none !important}", // 泥巴影视视频左上角水印贴片 nivod
        _91short: "a[href*=lhiefl], a[href*=lol], div.shortcuts-mobile-overlay,div.xtbhkpvx_b,a[href*=cpa],img[src*=gif],#adsbox, div.adm {display:none !important; pointer-events: none !important;}",
        xiaobaotv: "",
        javday: "",
        xvideos: "#video-sponsor-links,.videoad-title,.remove-ads-link,.remove-ads,.exo-ad-ins-container,.adsbyexoclick,#video-ad,#ad-footer,.videoad-title {display:none !important; pointer-events: none !important;}", // xvideos 
        button_common: "padding: 6px 6px 6px 6px; display: inline-block; color: white;z-index: 114154 !important; border-right: 6px solid #38a3fd !important; border-left: #292f33 !important; border-top: #292f33 !important; border-bottom: #292f33 !important; background: #2563eb; border-radius: 0px 0px 0px 0px; font-weight: 800 !important; text-align: right !important;" // 按钮/输入框通用样式
    },
    function: {
    }
}

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
        "tz659",
        "nbys",
        "anime1",
        "yhpdm",
        "yhdmp",
        "nivod4",
        "91short",
        "xiaobaotv",
        "javday",
        "xvideos",
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
            css_adsRemove(imax.css.pornhubx, 50, "limbopro");
            tag_adsRemove("script", "ads_batch");
            const custom_style_values_pb = "right: 0px !important; padding: 0 !important; position: relative !important;"
            ele_dynamicAppend("h1.floatLeft,div.title-container.translate", "如何下载视频", custom_style_values_pb + imax.css.button_common, "window.open(\"https://limbopro.com/archives/M3U8-Downloader.html\", \"_blank\")", "download_pornhub", 2, "button")
            pornhub_sidebar_ads();
            break;
        case 'missxav':
            window_open_defuser(); // 打断 window.open 施法
            var ua_missav = navigator.userAgent.toLowerCase();
            var mobile_missav = "mobile";
            cloudflare_captchaBypass();
            css_adsRemove(imax.css.missav);
            //abortCurrentInlineScript('document.createElement','htmlAds');
            tagName_appendChild("script", imax.js.functionx, "body"); // js 外部引用 标签 <script>
            let custom_style_values_miss = "font-size: smaller !important; background: #2563eb !important; left: 0px; top: 110px; margin-right: 5px; margin-top: 5px;";
            if (ua_missav.indexOf(mobile_missav) === -1) {
                ele_dynamicAppend("div.mt-4", "离开页面视频继续播放", custom_style_values_miss + imax.css.button_common, "", "missavX", 2, "button");
                ele_dynamicAppend("div.mt-4", "暂停", custom_style_values_miss + imax.css.button_common, "", "missavP", 3, "button");
                ele_dynamicAppend("div.mt-4", "如何下载视频", custom_style_values_miss + imax.css.button_common, "window.open(\"https://limbopro.com/archives/M3U8-Downloader.html\", \"_blank\")", "how", 4, "button");
                // 添加监听器
                addListenerById("missavX", () => { video_loopPlay('loop') }, 1000);
                addListenerById("missavP", () => { video_loopPlay('pause') }, 1000);
            } else if (ua_missav.indexOf(mobile_missav) > -1) {
                ele_dynamicAppend("div.mt-4", "免广告播放", custom_style_values_miss + imax.css.button_common, "video_Play()", "missavX", 0, "button");
                ele_dynamicAppend("div.mt-4", "进入全屏", custom_style_values_miss + imax.css.button_common, "fullscreen()", "missavFullScreen", 2, "button");
                ele_dynamicAppend("div.mt-4", "暂停", custom_style_values_miss + imax.css.button_common, "video_pause()", "missavPause", 1, "button");
                ele_dynamicAppend("div.mt-4", "如何下载视频", custom_style_values_miss + imax.css.button_common, "window.open(\"https://limbopro.com/archives/M3U8-Downloader.html\", \"_blank\")", "how", 3, "button");
                // 添加监听器
                addListenerById("missavX", () => { video_Play() }, 1000);
                addListenerById("missavFullScreen", () => { fullscreen() }, 1000);
                addListenerById("missavPause", () => { video_pause() }, 1000);
            }
            //missAv_adsRemove();
            break;
        case '91porn':
            cloudflare_captchaBypass();
            css_adsRemove(imax.css.porn91);
            _91porn_videoplay_ads();

            // 播放页空白
            const empty_div = document.querySelectorAll("div");
            for (i = 0; i < empty_div.length; i++) {
                console.log(empty_div[i].querySelectorAll("br").length);
                if (empty_div[i].querySelectorAll('br').length == 6 && empty_div[i].querySelectorAll('a').length === 2) {
                    empty_div[i].style = "display:none ! important;";
                }
            }

            break;
        case 'avple':
            cloudflare_captchaBypass();
            css_adsRemove(imax.css.avple);
            tagName_appendChild("script", imax.js.avple, "body")
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
            selector_adsRemove("#sajdhfbjwhe,#kasjbgih,#fkasjgf,img[src*='bcebos']", 1000)
            break;
        case 'duboku':
            tagName_appendChild("script", imax.js.duboku, "body")
            break;
        case 'libvio':
            css_adsRemove(imax.css.libvio)
            break;
        case 'nbys':
            css_adsRemove(imax.css.nivod)
            break;
        case 'tvn':
            break;
        case 'jable':
            cloudflare_captchaBypass();
            css_adsRemove(imax.css.jable);
            jable_adsRemove();
            const url_jable = document.location.href;
            const reg_videos = /^https:\/\/jable\.tv\/videos/gi;
            const custom_style_values_jb_pc = "margin-left: 5px; margin-top: 5px; position: static; font-size: smaller !important; background: #2563eb !important; margin-right: 5px;";
            if (url_jable.search(reg_videos) !== -1) {
                ele_dynamicAppend("div h4", "复制M3U8文件地址", custom_style_values_jb_pc + "border-right:#dc3545 !important;" + imax.css.button_common, "", "jablex", 3, "button")
                ele_dynamicAppend("div h4", "如何下载视频？", custom_style_values_jb_pc + imax.css.button_common, "window.open(\"https://limbopro.com/archives/M3U8-Downloader.html\", \"_blank\")", "how", 1, "button");
                ele_dynamicAppend("div h4", "", custom_style_values_jb_pc + "background:white !important; color: black! important;" + imax.css.button_common, "", "copy", 2, "input");
                // 添加监听器
                addListenerById("jablex", () => { copyText("copy", "jablex", "复制M3U8文件地址") }, 0);
                video_delayPlay(1000);
                setTimeout(() => { repeat_regex.forEach(m3u8_tempt) }, 1000);
                //addEventListener_defuser("touchend"); // 打断监听器
            }
            else {
                addEventListener_defuser("touchend"); // 打断监听器
            }
            break;
        case 'bdys':
            css_adsRemove(imax.css.btbdys, 0, "siwtch_button");
            css_adsRemove(imax.css.switch, 0, "switch_class")
            videoAds_accelerateSkip(0.1);
            hrefAttribute_set();
            var url = document.location.href;
            if (url == "https://www.bdys10.com/" || url == "https://www.bdys03.com/") {
                if (!document.getElementById("bdys")) {
                    ele_dynamicAppend("div.container-xl", "隐藏公告", "position:inherit; right:92px;" + imax.css.button_common, "", "bdys", 1, "button");
                    addListenerById("bdys", () => { notice_hidden("div.col-12") }, 2000);
                }
                if (getCookie("hidden") == 1) {
                    notice_hidden("div.col-12");
                }
            }
            break;
        case 'instagram':
            // 解除 Instagram 桌面浏览器版禁用右键复制图片
            css_adsRemove(imax.css.instagram);
            break;
        case 'ttsp':
            css_adsRemove(imax.css.ttsp);
            break;
        case 'tz659':
            css_adsRemove(imax.css.tz659);
            //tag_ads_traversal("body", 0)
            break;
        case 'anime1':
            css_adsRemove(imax.css.anime);
            break;
        case 'yhdmp':
            css_adsRemove(imax.css.yhdmp);
            break;
        case 'yhpdm':
            css_adsRemove(imax.css.yhdmp);
            break;
        case 'google':
            js_adsRemove(imax.js.contentFarm);
            css_adsRemove(imax.css.goole);
            var goole_selector = "h3,#bres,[class*='AuVD wHYlTd mnr-c']";
            //setAttribute_after(goole_selector, "contentFarm_AdsRemove_Auto()");
            break;
        case 'bing':
            js_adsRemove(imax.js.contentFarm);
            break;
        case 'nivod4': // nbys 泥巴影视 
            css_adsRemove(imax.css.nivod);
            hrefAttribute_set();
            setConstant('detailParams.is_ad_play', 'false'); // 泥巴影视PC版播放页视频广告加速
            evaldataPrune(); // 泥巴影视移动版播放页视频广告加速
            css_adsRemove(imax.css.nbys); // 网页图片广告
            break;
        case '91short':
            css_adsRemove(imax.css._91short);

            // 播放页GIF动图广告
            const player_info = document.querySelectorAll("div.player-info,li.nav-menu-item")
            for (i = 0; i < player_info.length; i++) {
                const selector = ['div > a[href][target=_blank]', 'a[href*=kyty]']
                if (player_info[i].querySelectorAll(selector).length >= 1) {
                    player_info[i].style = "display:none ! important;";
                }
            }

            // 多余的高
            document.querySelector("div.highlight-box").style = "display:none ! important;";
            addEventListener_defuser("touchend"); // 打断监听器

            break;

        case 'xiaobaotv':
            // nothing to do.
            break;

        case 'javday':
            // nothing to do.
            break;

        case 'xvideos':
            setInterval(() => {
                if (!document.getElementById('xvideos_t')) {
                    css_adsRemove(imax.css.xvideos, 100, "xvideos_t");
                    noWindowOpenIf();
                } else { noWindowOpenIf(); }
            }, 1000)
            break;

        case 'zhihu':
            var zhihu_id = "zhihux"
            button_dynamicRemove("[class='Button Modal-closeButton Button--plain']", 10);
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
            uBlockOrigin_add();
            console.log("Catch Nothing!");
    }
}


adsDomain_switch(values()) // 动手吧

// uBlock Origin 脚本添加
function uBlockOrigin_add() {
    js_adsRemove(uBlockOrigin.chn0abortcurrentscript);
    js_adsRemove(uBlockOrigin.chn0setconstant);
    js_adsRemove(uBlockOrigin.abortcurrentscript);
    js_adsRemove(uBlockOrigin.abortcurrentscript);
    js_adsRemove(uBlockOrigin.abortcurrentscript);
    js_adsRemove(uBlockOrigin.abortcurrentscript);
    js_adsRemove(uBlockOrigin.abortonpropertyread);
    js_adsRemove(uBlockOrigin.abortonpropertywrite);
    js_adsRemove(uBlockOrigin.abortonstacktrace);
    js_adsRemove(uBlockOrigin.addEventListenerdefuser);
    js_adsRemove(uBlockOrigin.alertbuster);
    js_adsRemove(uBlockOrigin.cookieremover);
    js_adsRemove(uBlockOrigin.disablenewtablinks);
    js_adsRemove(uBlockOrigin.evaldataprune);
    js_adsRemove(uBlockOrigin.jsonprune);
    js_adsRemove(uBlockOrigin.m3uprune);
    js_adsRemove(uBlockOrigin.nanosetIntervalbooster);
    js_adsRemove(uBlockOrigin.nanosetTimeoutbooster);
    js_adsRemove(uBlockOrigin.noevalif);
    js_adsRemove(uBlockOrigin.nofetchif);
    js_adsRemove(uBlockOrigin.norequestAnimationFrameif);
    js_adsRemove(uBlockOrigin.nosetIntervalif);
    js_adsRemove(uBlockOrigin.nosetTimeoutif);
    js_adsRemove(uBlockOrigin.nowebrtc);
    js_adsRemove(uBlockOrigin.nowindowopenif);
    js_adsRemove(uBlockOrigin.noxhrif);
    js_adsRemove(uBlockOrigin.refreshdefuser);
    js_adsRemove(uBlockOrigin.removeattr);
    js_adsRemove(uBlockOrigin.removeclass);
    js_adsRemove(uBlockOrigin.removenodetext);
    js_adsRemove(uBlockOrigin.replacenodetext);
    js_adsRemove(uBlockOrigin.setattr);
    js_adsRemove(uBlockOrigin.setconstant);
    js_adsRemove(uBlockOrigin.setcookie);
    js_adsRemove(uBlockOrigin.setlocalstorageitem);
    js_adsRemove(uBlockOrigin.spoofcss);
    js_adsRemove(uBlockOrigin.trustedsetconstant);
    js_adsRemove(uBlockOrigin.trustedsetcookie);
    js_adsRemove(uBlockOrigin.windowcloseif);
    js_adsRemove(uBlockOrigin.xmlprune);
}


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

// 通过CSS选择器隐藏广告样式
function selector_adsRemove(selector, time) {
    var i;
    setTimeout(() => {
        var nodelists = document.querySelectorAll(selector)
        for (i = 0; i < nodelists.length; i++) {
            //nodelists[i].remove();
            nodelists[i].style = "display:none ! important;"
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


    const div = document.querySelectorAll("div.col-6.col-sm-4.col-lg-3, div.col-6.col-sm-4.col-xl-3, div.col-6.col-sm-4.col-lg-12")
    for (x = 0; x < div.length; x++) {
        if (div[x].querySelectorAll("script, a[href*=trackwilltrk]").length >= 1) {
            div[x].style = "display:none ! important;"
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
function ele_dynamicAppend(ele, txt, style, func, id, array, tag) {
    let button = document.createElement(tag);
    button.innerHTML = txt;
    button.setAttribute("onclick", func);
    button.setAttribute("id", id);
    button.setAttribute("style", style);
    var here = document.querySelectorAll(ele);
    if (here.length > 0) {
        here[0].insertBefore(button, here[0].childNodes[array])
        //here[0].appendChild(button);
        console.log("按钮已添加；")
    }
}

// 复制 input 内容
function copyText(id1, id2, Text) { // 复制文本按钮
    let corlor = { // 定义常量
        css: {
            borderRight_copied: "6px solid white",
            borderRight_recover: "6px solid #38a3fd",
            backgroundColor_copied: "#00AC6A",
            backgroundColor_recover: "#2563eb"
        }
    }

    function border_color(ele, value) { // 制作一个循环
        for (let i = 0; i < ele.length; i++) {
            ele[i].style.borderRight = value
        }
    }

    const ele_1 = document.getElementById(id1);
    const ele_2 = document.getElementById(id2);
    const ele_array = [ele_1, ele_2];

    // 复制工作开始
    const input = document.querySelectorAll("input#copy");
    const range = document.createRange(); range.selectNode(input[0]); const selection = window.getSelection();
    if (selection.rangeCount > 0) selection.removeAllRanges(); // 判断光标是否复制其他内容 如有则清除
    selection.addRange(range); document.execCommand('copy');
    // 复制工作结束

    ele_2.innerText = "复制成功！";
    ele_2.style.backgroundColor = corlor.css.backgroundColor_copied;

    border_color(ele_array, corlor.css.borderRight_copied)
    setTimeout(() => {
        ele_2.innerText = Text;
        ele_2.style.backgroundColor = corlor.css.backgroundColor_recover;
        border_color(ele_array, corlor.css.borderRight_recover)
    }, 3000);
}

// Cloudflare recaptcha 绕过
function cloudflare_captchaBypass() {
    var title = document.title;
    if (title.search("Cloudflare") >= 0 || title.search("Attention") >= 0) {
        window.location.reload();
        console.log("captchaBypass done;")
    };
}

/* 循环播放 missAV */

var timer = null;
var timerlist = [];

function video_loopPlay(x) {
    if (x === 'loop') {
        intval = window.setInterval(missAv_playbutton, 1000)
    } else if (x === 'pause') {
        if (intval) {
            timerlist.forEach((item, index) => {
                clearInterval(item);
            })
            video_pause();
        }
    }
}

function missAv_playbutton() {
    timerlist.push(intval);
    var ele_catch = document.querySelectorAll("video[preload='none'],video#player");
    if (ele_catch.length > 0) {
        ele_catch[0].play();
        //ele_catch[1].play();
        console.log("视频已开启循环播放；")
    }
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
function addListenerById(id, funx, time) {
    setTimeout(() => {
        var eleById = document.getElementById(id);
        eleById.addEventListener("click", funx, false)
    }, time)
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
    const ele_New = document.createElement(tagname);
    // script
    if (tagname == "script") {
        ele_New.type = "text/javascript";
        ele_New.src = url;
        ele_New.setAttribute('async', '')
        // link
    } else if (tagname == "link") {
        ele_New.rel = "stylesheet";
        ele_New.type = "text/css";
        ele_New.href = url;
    }
    if (where == "body") {
        document.body.appendChild(ele_New);
    } else if (where == "head") {
        document.head.appendChild(ele_New);
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
    //console.log("视频广告加速")
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

var repeat_regex = ["https:?\/\/.*?hls.*?\.m3u8", "https:?\/\/.*?phncdn.*?hls.*?\.m3u8", "https:?\/\/.*?mushroomtrack.*?\.m3u8"]

function m3u8_tempt(x) {
    var i, url_result; var url_regex = new RegExp(x, "gi")
    var ele = ["script", "a"];
    var ele_catch = document.querySelectorAll(ele);
    for (i = 0; i < ele_catch.length; i++) {
        if ((url_result = url_regex.exec(ele_catch[i].innerHTML)) != null) {
            document.getElementById("copy").value = url_result;
            console.log("Catch it")
        }
    }
}

function pornhub_sidebar_ads() {
    setTimeout(() => {
        var ele_parent = ["div"];
        var ele_children = ["img[data-title][title][srcset]"];
        var ele_attributes = ["class"];
        var i;

        const css_Selctors = document.querySelectorAll(ele_parent);

        for (i = 0; i < css_Selctors.length; i++) {
            if (css_Selctors[i].querySelectorAll(ele_children).length !== 0) {
                if (css_Selctors[i].getAttribute(ele_attributes)) {
                    if (css_Selctors[i].attributes.length == 1) {
                        if (css_Selctors[i].children.length == 2) {
                            console.log(css_Selctors[i])
                            css_Selctors[i].style.display = "none";
                        }
                    }
                }
            }
        }
    }, 500);
}

function _91porn_videoplay_ads() {
    //setTimeout(() => {
    var ele_parent = ["div"];
    var ele_children = ["a[target=\"_blank\"]  > img[src*=\".gif\"]"];
    var i;

    const css_Selctors = document.querySelectorAll(ele_parent);

    for (i = 0; i < css_Selctors.length; i++) {
        if (css_Selctors[i].querySelectorAll(ele_children).length !== 0) {
            if (css_Selctors[i].attributes.length == 0) {
                if (css_Selctors[i].children.length == 9) {
                    console.log(css_Selctors[i])
                    css_Selctors[i].style.display = "none";
                }
            }
        }
    }
    //}, 500);
}

function tag_ads_traversal(selector, i) {
    const css_Selctors = document.querySelectorAll(selector)
    css_Selctors[i].style.display = "none";
}

// Get Cookies 获取指定命名的cookie 的值
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

// 哔滴影视隐藏公告广告
function notice_hidden(selector) { // bdys
    document.querySelector(selector).classList.add("switch") // 隐藏公告
    document.cookie = "hidden=1";
    document.getElementById("bdys").innerHTML = "查看公告";
    addListenerById("bdys", () => { notice_show("div.col-12") }, 2000);
}

// 哔滴影视展示公告
function notice_show(selector) {
    document.querySelector(selector).classList.remove("switch") // 展示公告
    document.cookie = "hidden=0";
    document.getElementById("bdys").innerHTML = "隐藏公告";
    addListenerById("bdys", () => { notice_hidden("div.col-12") }, 2000);
}


// window.open-defuser.js
// https://github.com/gorhill/uBlock/wiki/Resources-Library#windowopen-defuserjs-

function window_open_defuser() {
    'use strict';
    let arg1 = '{{1}}';
    if (arg1 === '{{1}}') { arg1 = ''; }
    let arg2 = '{{2}}';
    if (arg2 === '{{2}}') { arg2 = ''; }
    let arg3 = '{{3}}';
    if (arg3 === '{{3}}') { arg3 = ''; }
    const log = /\blog\b/.test(arg3)
        ? console.log.bind(console)
        : () => { };
    const newSyntax = /^[01]?$/.test(arg1) === false;
    let pattern = '';
    let targetResult = true;
    let autoRemoveAfter = -1;
    if (newSyntax) {
        pattern = arg1;
        if (pattern.startsWith('!')) {
            targetResult = false;
            pattern = pattern.slice(1);
        }
        autoRemoveAfter = parseInt(arg2);
        if (isNaN(autoRemoveAfter)) {
            autoRemoveAfter = -1;
        }
    } else {
        pattern = arg2;
        if (arg1 === '0') {
            targetResult = false;
        }
    }
    if (pattern === '') {
        pattern = '.?';
    } else if (/^\/.+\/$/.test(pattern)) {
        pattern = pattern.slice(1, -1);
    } else {
        pattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    const rePattern = new RegExp(pattern);
    const createDecoy = function (tag, urlProp, url) {
        const decoy = document.createElement(tag);
        decoy[urlProp] = url;
        decoy.style.setProperty('height', '1px', 'important');
        decoy.style.setProperty('position', 'fixed', 'important');
        decoy.style.setProperty('top', '-1px', 'important');
        decoy.style.setProperty('width', '1px', 'important');
        document.body.appendChild(decoy);
        setTimeout(() => decoy.remove(), autoRemoveAfter * 1000);
        return decoy;
    };
    window.open = new Proxy(window.open, {
        apply: function (target, thisArg, args) {
            log('window.open:', ...args);
            const url = args[0];
            if (rePattern.test(url) !== targetResult) {
                return target.apply(thisArg, args);
            }
            if (autoRemoveAfter < 0) { return null; }
            const decoy = /\bobj\b/.test(arg3)
                ? createDecoy('object', 'data', url)
                : createDecoy('iframe', 'src', url);
            let popup = decoy.contentWindow;
            if (typeof popup === 'object' && popup !== null) {
                Object.defineProperty(popup, 'closed', { value: false });
            } else {
                const noopFunc = (function () { }).bind(self);
                popup = new Proxy(self, {
                    get: function (target, prop) {
                        if (prop === 'closed') { return false; }
                        const r = Reflect.get(...arguments);
                        if (typeof r === 'function') { return noopFunc; }
                        return target[prop];
                    },
                    set: function () {
                        return Reflect.set(...arguments);
                    },
                });
            }
            if (/\blog\b/.test(arg3)) {
                popup = new Proxy(popup, {
                    get: function (target, prop) {
                        log('window.open / get', prop, '===', target[prop]);
                        return Reflect.get(...arguments);
                    },
                    set: function (target, prop, value) {
                        log('window.open / set', prop, '=', value);
                        return Reflect.set(...arguments);
                    },
                });
            }
            return popup;
        }
    });
};

/* 广告视频加速 */
function setConstant(
    chain = '',
    cValue = ''
) {
    if (typeof chain !== 'string') { return; }
    if (chain === '') { return; }
    const trappedProp = (() => {
        const pos = chain.lastIndexOf('.');
        if (pos === -1) { return chain; }
        return chain.slice(pos + 1);
    })();
    if (trappedProp === '') { return; }
    const thisScript = document.currentScript;
    const objectDefineProperty = Object.defineProperty.bind(Object);
    const cloakFunc = fn => {
        objectDefineProperty(fn, 'name', { value: trappedProp });
        const proxy = new Proxy(fn, {
            defineProperty(target, prop) {
                if (prop !== 'toString') {
                    return Reflect.deleteProperty(...arguments);
                }
                return true;
            },
            deleteProperty(target, prop) {
                if (prop !== 'toString') {
                    return Reflect.deleteProperty(...arguments);
                }
                return true;
            },
            get(target, prop) {
                if (prop === 'toString') {
                    return function () {
                        return `function ${trappedProp}() { [native code] }`;
                    }.bind(null);
                }
                return Reflect.get(...arguments);
            },
        });
        return proxy;
    };
    if (cValue === 'undefined') {
        cValue = undefined;
    } else if (cValue === 'false') {
        cValue = false;
    } else if (cValue === 'true') {
        cValue = true;
    } else if (cValue === 'null') {
        cValue = null;
    } else if (cValue === "''") {
        cValue = '';
    } else if (cValue === '[]') {
        cValue = [];
    } else if (cValue === '{}') {
        cValue = {};
    } else if (cValue === 'noopFunc') {
        cValue = cloakFunc(function () { });
    } else if (cValue === 'trueFunc') {
        cValue = cloakFunc(function () { return true; });
    } else if (cValue === 'falseFunc') {
        cValue = cloakFunc(function () { return false; });
    } else if (/^\d+$/.test(cValue)) {
        cValue = parseFloat(cValue);
        if (isNaN(cValue)) { return; }
        if (Math.abs(cValue) > 0x7FFF) { return; }
    } else {
        return;
    }
    let aborted = false;
    const mustAbort = function (v) {
        if (aborted) { return true; }
        aborted =
            (v !== undefined && v !== null) &&
            (cValue !== undefined && cValue !== null) &&
            (typeof v !== typeof cValue);
        return aborted;
    };
    // https://github.com/uBlockOrigin/uBlock-issues/issues/156
    //   Support multiple trappers for the same property.
    const trapProp = function (owner, prop, configurable, handler) {
        if (handler.init(owner[prop]) === false) { return; }
        const odesc = Object.getOwnPropertyDescriptor(owner, prop);
        let prevGetter, prevSetter;
        if (odesc instanceof Object) {
            owner[prop] = cValue;
            if (odesc.get instanceof Function) {
                prevGetter = odesc.get;
            }
            if (odesc.set instanceof Function) {
                prevSetter = odesc.set;
            }
        }
        try {
            objectDefineProperty(owner, prop, {
                configurable,
                get() {
                    if (prevGetter !== undefined) {
                        prevGetter();
                    }
                    return handler.getter(); // cValue
                },
                set(a) {
                    if (prevSetter !== undefined) {
                        prevSetter(a);
                    }
                    handler.setter(a);
                }
            });
        } catch (ex) {
        }
    };
    const trapChain = function (owner, chain) {
        const pos = chain.indexOf('.');
        if (pos === -1) {
            trapProp(owner, chain, false, {
                v: undefined,
                init: function (v) {
                    if (mustAbort(v)) { return false; }
                    this.v = v;
                    return true;
                },
                getter: function () {
                    return document.currentScript === thisScript
                        ? this.v
                        : cValue;
                },
                setter: function (a) {
                    if (mustAbort(a) === false) { return; }
                    cValue = a;
                }
            });
            return;
        }
        const prop = chain.slice(0, pos);
        const v = owner[prop];
        chain = chain.slice(pos + 1);
        if (v instanceof Object || typeof v === 'object' && v !== null) {
            trapChain(v, chain);
            return;
        }
        trapProp(owner, prop, true, {
            v: undefined,
            init: function (v) {
                this.v = v;
                return true;
            },
            getter: function () {
                return this.v;
            },
            setter: function (a) {
                this.v = a;
                if (a instanceof Object) {
                    trapChain(a, chain);
                }
            }
        });
    };
    trapChain(window, chain);
}

// 泥巴影视手机版视频播放前20秒广告跳过 nbys nivod4
// https://github.com/AdguardTeam/AdguardFilters/issues/146359

function evaldataPrune() {
    window.eval = new Proxy(eval, {
        apply: (a, b, c) => {
            if (c[0] && c[0].includes("commercial") && c[0].startsWith("(") && c[0].endsWith(")")) { let a = c[0].slice(1).slice(0, -1), b = JSON.parse(a); b.entity?.commercial && (b.entity.commercial = void 0), c[0] = `(${JSON.stringify(b)})` }
            return Reflect.apply(a, b, c)
        }
    })
};

/// abort-current-script.js
/// alias acs.js
/// alias abort-current-inline-script.js
/// alias acis.js

function abortCurrentInlineScript(source, property, search) {
    const searchRegexp = toRegExp(search);
    const rid = randomId();

    const SRC_DATA_MARKER = 'data:text/javascript;base64,';

    const getCurrentScript = () => {
        if ('currentScript' in document) {
            return document.currentScript;
        }
        const scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1];
    };

    const ourScript = getCurrentScript();

    const abort = () => {
        const scriptEl = getCurrentScript();
        if (!scriptEl) {
            return;
        }
        let content = scriptEl.textContent;

        // We are using Node.prototype.textContent property descriptor
        // to get the real script content
        // even when document.currentScript.textContent is replaced.
        // https://github.com/AdguardTeam/Scriptlets/issues/57#issuecomment-593638991

        try {
            const textContentGetter = Object.getOwnPropertyDescriptor(Node.prototype, 'textContent').get;
            content = textContentGetter.call(scriptEl);
        } catch (e) { } // eslint-disable-line no-empty

        // https://github.com/AdguardTeam/Scriptlets/issues/130
        if (content.length === 0
            && typeof scriptEl.src !== 'undefined'
            && scriptEl.src?.startsWith(SRC_DATA_MARKER)) {
            const encodedContent = scriptEl.src.slice(SRC_DATA_MARKER.length);
            content = window.atob(encodedContent);
        }

        if (scriptEl instanceof HTMLScriptElement
            && content.length > 0
            && scriptEl !== ourScript
            && searchRegexp.test(content)) {
            hit(source);
            throw new ReferenceError(rid);
        }
    };

    const setChainPropAccess = (owner, property) => {
        const chainInfo = getPropertyInChain(owner, property);
        let { base } = chainInfo;
        const { prop, chain } = chainInfo;

        // The scriptlet might be executed before the chain property has been created
        // (for instance, document.body before the HTML body was loaded).
        // In this case we're checking whether the base element exists or not
        // and if not, we simply exit without overriding anything.
        // e.g. https://github.com/AdguardTeam/Scriptlets/issues/57#issuecomment-575841092

        if (base instanceof Object === false && base === null) {
            const props = property.split('.');
            const propIndex = props.indexOf(prop);
            const baseName = props[propIndex - 1];

            const message = `The scriptlet had been executed before the ${baseName} was loaded.`;
            logMessage(source, message);
            return;
        }

        if (chain) {
            const setter = (a) => {
                base = a;
                if (a instanceof Object) {
                    setChainPropAccess(a, chain);
                }
            };
            Object.defineProperty(owner, prop, {
                get: () => base,
                set: setter,
            });
            return;
        }

        let currentValue = base[prop];
        let origDescriptor = Object.getOwnPropertyDescriptor(base, prop);
        if (origDescriptor instanceof Object === false
            || origDescriptor.get instanceof Function === false) {
            currentValue = base[prop];
            origDescriptor = undefined;
        }

        const descriptorWrapper = Object.assign(getDescriptorAddon(), {
            currentValue,
            get() {
                if (!this.isAbortingSuspended) {
                    this.isolateCallback(abort);
                }
                if (origDescriptor instanceof Object) {
                    return origDescriptor.get.call(base);
                }
                return this.currentValue;
            },
            set(newValue) {
                if (!this.isAbortingSuspended) {
                    this.isolateCallback(abort);
                }
                if (origDescriptor instanceof Object) {
                    origDescriptor.set.call(base, newValue);
                } else {
                    this.currentValue = newValue;
                }
            },
        });

        setPropertyAccess(base, prop, {
            // Call wrapped getter and setter to keep isAbortingSuspended & isolateCallback values
            get() {
                return descriptorWrapper.get.call(descriptorWrapper);
            },
            set(newValue) {
                descriptorWrapper.set.call(descriptorWrapper, newValue);
            },
        });
    };

    setChainPropAccess(window, property);

    window.onerror = createOnErrorHandler(rid).bind();
}



// https://github.com/gorhill/uBlock/wiki/Resources-Library#addeventlistener-defuserjs-
function addEventListener_defuser() {
    let needle1 = '{{1}}';
    if (needle1 === '' || needle1 === '{{1}}') {
        needle1 = '.?';
    } else if (/^\/.+\/$/.test(needle1)) {
        needle1 = needle1.slice(1, -1);
    } else {
        needle1 = needle1.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    needle1 = new RegExp(needle1);
    let needle2 = '{{2}}';
    if (needle2 === '' || needle2 === '{{2}}') {
        needle2 = '.?';
    } else if (/^\/.+\/$/.test(needle2)) {
        needle2 = needle2.slice(1, -1);
    } else {
        needle2 = needle2.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    needle2 = new RegExp(needle2);
    self.EventTarget.prototype.addEventListener = new Proxy(
        self.EventTarget.prototype.addEventListener,
        {
            apply: function (target, thisArg, args) {
                let type, handler;
                try {
                    type = String(args[0]);
                    handler = String(args[1]);
                } catch (ex) {
                }
                if (
                    needle1.test(type) === false ||
                    needle2.test(handler) === false
                ) {
                    return target.apply(thisArg, args);
                }
            }
        }
    );
};


// noWindowOpenIf
// https://github.com/gorhill/uBlock/wiki/Resources-Library#no-window-open-ifjs-
function noWindowOpenIf(
    pattern = '',
    delay = '',
    decoy = ''
) {
    const safe = safeSelf();
    const targetMatchResult = pattern.startsWith('!') === false;
    if (targetMatchResult === false) {
        pattern = pattern.slice(1);
    }
    const rePattern = safe.patternToRegex(pattern);
    let autoRemoveAfter = parseInt(delay);
    if (isNaN(autoRemoveAfter)) {
        autoRemoveAfter = -1;
    }
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    const logLevel = shouldLog(extraArgs);
    const createDecoy = function (tag, urlProp, url) {
        const decoyElem = document.createElement(tag);
        decoyElem[urlProp] = url;
        decoyElem.style.setProperty('height', '1px', 'important');
        decoyElem.style.setProperty('position', 'fixed', 'important');
        decoyElem.style.setProperty('top', '-1px', 'important');
        decoyElem.style.setProperty('width', '1px', 'important');
        document.body.appendChild(decoyElem);
        setTimeout(() => { decoyElem.remove(); }, autoRemoveAfter * 1000);
        return decoyElem;
    };
    window.open = new Proxy(window.open, {
        apply: function (target, thisArg, args) {
            const haystack = args.join(' ');
            if (logLevel) {
                safe.uboLog('window.open:', haystack);
            }
            if (rePattern.test(haystack) !== targetMatchResult) {
                return Reflect.apply(target, thisArg, args);
            }
            if (autoRemoveAfter < 0) { return null; }
            const decoyElem = decoy === 'obj'
                ? createDecoy('object', 'data', ...args)
                : createDecoy('iframe', 'src', ...args);
            let popup = decoyElem.contentWindow;
            if (typeof popup === 'object' && popup !== null) {
                Object.defineProperty(popup, 'closed', { value: false });
            } else {
                const noopFunc = (function () { }).bind(self);
                popup = new Proxy(self, {
                    get: function (target, prop) {
                        if (prop === 'closed') { return false; }
                        const r = Reflect.get(...arguments);
                        if (typeof r === 'function') { return noopFunc; }
                        return target[prop];
                    },
                    set: function () {
                        return Reflect.set(...arguments);
                    },
                });
            }
            if (logLevel) {
                popup = new Proxy(popup, {
                    get: function (target, prop) {
                        safe.uboLog('window.open / get', prop, '===', target[prop]);
                        return Reflect.get(...arguments);
                    },
                    set: function (target, prop, value) {
                        safe.uboLog('window.open / set', prop, '=', value);
                        return Reflect.set(...arguments);
                    },
                });
            }
            return popup;
        }
    });
}