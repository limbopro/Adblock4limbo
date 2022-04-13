// ==UserScript==
// @name         Adblock4limbo_adsRemoveProject
// @namespace    https://limbopro.com/
// @version      0.1.22
// @license  CC BY-NC-SA 4.0
// @description  毒奶去广告计划油猴脚本版；通过 JavaScript 移除Pornhub/搜索引擎内容农场结果清除/低端影视/Jable/哔滴影视等视频网站上的视频广告和图片广告，保持界面清爽干净无打扰！
// @author       limbopro
// @match        https://ddrk.me/*
// @match        https://jable.tv/*
// @match        https://www.btbdys.com/*
// @match        https://www.google.com/search*
// @match        https://www.google.com.hk/search*
// @match        https://www.bing.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=limbopro.com
// @run-at document-end
// @grant        none
// ==/UserScript==

var ads_host=[
    "pornhub.com",
    "ddrk.me",
    "jable.tv",
    "www.btbdys.com",
    "google.com",
    "www.bing.com"
    ]

    var script_url = "https://limbopro.com/Adguard/Adblock4limbo.function.js"

    var url = document.location.href;
    console.log(url); // 看看当前 URL

    var i;
    for (i=0;i<ads_host.length;i++){
    if (url.indexOf(ads_host[i]) !== -1){
        var values = ads_host[i]; // 释放参数值
        console.log(values) // 看看控制台输出了个啥
        }
    }

    function switch_ads_host(x){ // 匹配参数值 执行相应函数
        switch (x) {
        case 'pornhub.com':
            pornhub_skipAds();
            pornhub_scriptAds();
            pornhub_css_catch();
            //button_m3u8(".underThumbButtons.clearfix,.allActionsContainer");
            //javascript_dynamic_add(script_url);
        break;
        case 'ddrk.me':
            ddrk_css_catch();
        break;
        case 'jable.tv':
            jable_css_catch();
            jable_removeAds();
            cloudflarePass();
            button_m3u8("div.my-3");
            javascript_dynamic_add(script_url);
            video_AutoPlay();
        break;
        case 'www.btbdys.com':
            btbdys_css_catch();
            video_AdsSkip();
            url_blank2self();
            btbdys_delayRemoveAds();
        break;
        case 'google.com':
            contentFarm_AdsRemove(0);
        break;
        case 'www.bing.com':
            //function_loop_custom(contentFarm_AdsRemove,1000)
            contentFarm_AdsRemove(0);
        break;
        default:
        console.log("Catch Nothing!")
        }
    }

    switch_ads_host(values)

    // 无数函数及方法的组合使脚本更灵活
    // 移除带广告脚本

    function pornhub_scriptAds(){
    var i;
    var script = document.getElementsByTagName("script");
    for (i=0; i<script.length; i++){
        if (script[i].src.indexOf("ads_batch") !== -1) {
            script[i].remove()
        }
        if (script[i].innerHTML.indexOf("ads_batch") !== -1){
            script[i].remove()
        }
        }
    }

    // 移除网站上的图片广告
    function pornhub_css_catch(){
    var newstyle=".topAdContainter,div.topAdContainter,.adContainer.clearfix,.adContainer,div#adSpot,a[href*=\"ads\"]," +
    ".video-wrapper > #player + [class],.underplayerAd,.realsex,.adsbytrafficjunky,.adLink," +
    "#pb_template,#main-container > .abovePlayer,.sponsor-text," +
    ".video-wrapper > div#player~div[class$=\" hd clear\"],#hd-rightColVideoPage > .clearfix:first-child," +
    ".playerFlvContainer > div#pb_template[style],a[href*='livehd']," +
    "[href*='premium_signup?type=PremiumBtn'] {display:none !important;}" +
    ".mgp_container .mgp_optionsMenu.mgp_level3 .mgp_subPage>.mgp_content{opacity:0;pointer-events:auto;transform:translate(-260px, 0) !important}" +
    ".mgp_preRollSkipButton {z-index:8;position:absolute;padding:10px 25px;background:rgba(0,0,0,.55)}"; // 样式文本
    var creatcss=document.createElement("style"); // 新建style tag
    creatcss.innerHTML=newstyle; // 插入样式文本
    document.getElementsByTagName('head')[0].appendChild(creatcss) // 追加新Style至第一个 head 标签后
    }

    // 自动跳过 interstitial 插页式广告
    function pornhub_skipAds(){
        const ele_skip = "[onclick*='clearModalCookie']"
        const exist = document.querySelectorAll(ele_skip);
        if (document.querySelectorAll(ele_skip).length > 0){
        const href = exist[1].href;
            window.location = href;
        }
    }

    // 隐藏广告样式
    function ddrk_css_catch(){
        setTimeout(()=>{
        const newstyle = ".entry { padding: 0px !important ; margin: 0%;}"+
        "[id*='afc_sidebar'], #iaujwnefhw, #fkasjgf, #sajdhfbjwhe, [href*='kst'],[href*='###']{"+
        "visibility: hidden !important;"+
        "width: 1px !important;"+
        "height:1px !important; "+
        "opacity:0 !important;"+
        "cursor: pointer;"+
        "pointer-events:none !important;"+
        "z-index: -999;"+
        "}"
        const creatcss = document.createElement("style"); // 新建style tag
    creatcss.innerHTML=newstyle; // 插入样式文本
    document.getElementsByTagName('head')[0].appendChild(creatcss) // 追加新Style至第一个 head 标签后
    },500);
    }

    // 隐藏广告样式
    function jable_css_catch(){
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
        const creatcss = document.createElement("style"); // 新建style tag
        creatcss.innerHTML=newstyle; // 插入样式文本
        document.getElementsByTagName('head')[0].appendChild(creatcss) // 追加新Style至第一个 head 标签后
    }

    // 设置 cookie
    function jable_removeAds(){ // Cookie 设定及注入
    document.cookie = "zone-cap-3403709=1";
    document.cookie = "kt_tcookie=1";
    document.cookie = "ts_popunder=1";
    document.cookie = "cf_chl_prog=b";

    var ads_host = [
        'r.trwl1.com',
        'r.www.com'
    ];

    var i,l;
    for (l = 0; l < ads_host.length; l++) {
    var css_sel = "a[href*='" + ads_host[l] + "']";
    var css_catch = [".video-img-box.mb-e-20,.col-6.col-sm-4.col-lg-3"];
    var huge = document.querySelectorAll( css_catch );
    for (i=0; i< huge.length; i++){
        if (huge[i].querySelectorAll( css_sel ).length > 0) {
        huge[i].style.display = "none";
        }
        }
    }
    }

    // Cloudflare recaptcha 绕过
    function cloudflarePass(){
    var title = document.title;
    var key = "Attention";
    var key_2 = "Cloudflare";
    var values = title.search(key);
    var values_2 = title.search(key_2);
    var failed = "0";
        if ( values >= failed || values_2 >= failed ){
        window.location.reload();
    }
    }

    /* 自动播放 */
    function video_AutoPlay() {
    var first_Ele = ["video[class*='poster'],video[id='player'],video[id='vjsp_html5_api']"];
    var first_Ele_Catch = document.querySelectorAll(first_Ele);
        first_Ele_Catch[0].play()
        setTimeout(function (){
        video_AutoPlay()
        },1000);
    }


    /* 禁止新页面跳转 */
    function url_blank2self(){
    var _blank = document.querySelectorAll("a");
    var i;
    for (i = 0; i < _blank.length; i++) {
        _blank[i].target = "_self";
        }
    }

    // 隐藏广告样式
    function btbdys_css_catch(){
        const newstyle = "#ad-index," +
        ".ayx[style^=\"position: fixed;bottom\"]," +
        ".ayx[style=\"display:block;\"]," +
        "#adsbox  {display:none !important;}" +
        "div.page-wrapper {overflow-x:hidden !important;}"
        const creatcss = document.createElement("style"); // 新建style tag
        creatcss.innerHTML=newstyle; // 插入样式文本
        document.getElementsByTagName('head')[0].appendChild(creatcss) // 追加新Style至第一个 head 标签后
    }

    /* 延迟1秒中清除广告元素以避免bde4反屏蔽检测 */
    function btbdys_delayRemoveAds(){
    setTimeout(()=>{
        const newstyle=".ayx[style^=\"position: fixed;bottom\"]," +
        "#ad-index,#adsbox," +
        ".ayx[style=\"display:block;\"]," +
        ".ayx[style^=\"position: fixed;bottom\"]," +
        "a[target*=_new] {display:none !important;}";
        var creatcss=document.createElement("style");
        creatcss.innerHTML=newstyle;
        document.getElementsByTagName('head')[0].appendChild(creatcss)
        },500);
    }

    // 在页面插入按钮
    function button_m3u8(ele){
        var button = document.createElement("button");
        button.innerHTML = "获取M3U8文件";
        button.setAttribute("onclick","regexpx.forEach(m3u8_tempt)");
        var button_style_values = "position: absolute; right:0px; padding: 6px 6px 6px 6px; display: inline-block; " +
        "font-size: 15px; color:white; z-index:114154; border-right: 6px solid #38a3fd !important; " +
        "border-left: #292f33 !important; border-top: #292f33 !important; " +
        "border-bottom: #292f33 !important; background: black; " +
        "border-radius: 0px 0px 0px 0px; margin-bottom: 10px; " +
        "font-weight: 800 !important; " +
        "text-align: right !important;"
        button.setAttribute("style", button_style_values);
        //var ele = "div.my-3";
        var here = document.querySelectorAll(ele);
        here[0].appendChild(button);
    }

    // 动态创建引用外部js JavaScript

    function javascript_dynamic_add(url){
        var script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script)
    }

    /* 视频页广告加速跳过 */
    function video_AdsSkip() {
        // Based on uAssets
        // License: https://github.com/uBlockOrigin/uAssets/blob/master/LICENSE
        //  nano-setTimeout-booster.js
        var z = window.setInterval,
        needle = '{{1}}',
        delay = parseInt('{{2}}', 10),
        boost = parseFloat('{{3}}');
        if ( needle === '' || needle === '{{1}}' ) {
        needle = '.?';
        } else if ( needle.charAt(0) === '/' && needle.slice(-1) === '/' ) {
        needle = needle.slice(1, -1);
        } else {
        needle = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }
        needle = new RegExp(needle);
        if ( isNaN(delay) || !isFinite(delay) ) {
        delay = 1000;
        }
        if ( isNaN(boost) || !isFinite(boost) ) {
        boost = 0.05;
        }
        if ( boost < 0.02 ) {
        boost = 0.02;
        }
        if ( boost > 50 ) {
        boost = 50;
        }
        window.setInterval = function(a, b) {
        if ( b === delay && needle.test(a.toString()) ) {
            b *= boost;
        }
        return z.apply(this, arguments);
        }.bind(window);
    };

    // 内容农场清除
    function contentFarm_AdsRemove(time){
    setTimeout(()=>{
    var javaScript = document.createElement("script");
    javaScript.src = 'https://limbopro.com/Adguard/contentFarm/contentFarm.js';
    document.body.appendChild(javaScript);

    ///var ads_host_custom = [
    ///"csdn", // 自定义要清除的域名
    ///"kknews"
    ///];

    ///var search_results_css_custom = [
       /// "li.b_algo", // bing 搜索结果样式
       /// "div[data-sokoban-grid]", // 通用
       /// "div[class='g'][data-hveid]", // 这是谷歌PC端搜索结果页的 style
       /// "div[class='mnr-c g'][data-hveid]", // 这是谷歌手机端搜索结果页的 style
       /// "div[class][data-sokoban-container]"// 最后一个选择器也不需要逗号结尾
    ///]

    ///var i,x;
       /// for (i = 0; i < ads_host_custom.length; i++){
        ///var ads_host_custom_css = "[href*='" + ads_host_custom[i] + "']";
        ///var huge_custom = document.querySelectorAll( search_results_css_custom );
        ///for (x = 0; x < huge_custom.length; x++){
           /// if (huge_custom[x].querySelectorAll( ads_host_custom_css ).length > 0){
              ///  huge_custom[x].style.display = "none";
                ///var values = 1;
                ///}
            ///}
       /// }
          
    },time);
    }

// 循环某个函数
// function function_loop_custom(f,t){
// var id = setInterval(f, t);
//    if (values == 0){
//        clearInterval(id);
//    }
// }