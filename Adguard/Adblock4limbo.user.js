// ==UserScript==
// @name         Adblock4limbo.[github]
// @namespace    https://github.com/limbopro/Adblock4limbo/raw/main/Adguard/Adblock4limbo.user.js
// @version      0.2025.12.10
// @license      CC BY-NC-SA 4.0
// @description  毒奶去网页广告计划用户脚本 For Quantumult X & Surge & Shadowrocket & Loon & Stash & 油猴 ；1.新增页面右下角导航；2.通过 JavaScript 移除特定网站网页广告 —— 搜索引擎（Bing/Google）广告及内容农场结果清除/低端影视/欧乐影院/iyf爱壹帆/哔滴影视/Pornhub/Javbus/Supjav/Jable(支持抓取M3U8链接)/MissAv/91porn(支持视频下载)/hitomi/紳士漫畫/禁漫天堂/等视频&ACG&小说&漫画网站上的弹窗广告&视频广告&Gif图片广告等，保持网页清爽干净无打扰！ P.S. 欢迎提交issue
// @author       limbopro

// @match        https://m.baidu.com/*
// @match        https://www.baidu.com/*
// @match        https://zhidao.baidu.com/*
// @match        https://www.google.com/search*
// @match        https://www.google.com.hk/search*
// @match        https://www.bing.com/search?q=*
// @match        https://cn.bing.com/search?q=*
// @match        https://www.btbdys.com/*
// @match        https://www.bdys01.com/*
// @match        https://www.bdys*.com/*
// @match        https://www.52bdys.com/*
// @match        https://ddrk.me/*
// @match        https://ddys.tv/*
// @match        https://ddys.pro/*
// @match        https://ddys.art/*
// @match        https://ddys2.me/*
// @match        https://ddys.mov/*
// @match        https://gimy.ai/*
// @match        https://xiaobaotv.net/*
// @match        https://xiaobaotv.com/*
// @match        https://xiaoxintv.net/*
// @match        https://xiaoxintv.com/*
// @match        https://www.olevod.tv/*
// @match        https://www.olevod.com/*
// @match        https://www.olevod.one/*
// @match        https://m.iyf.tv/*
// @match        https://www.iyf.tv/*
// @match        https://play.huaren.live/*
// @match        https://huaren.live/*
// @match        https://cupfoxapp.tv/*
// @match        https://www.dmmiku.com/*
// @match        https://bf.bfdm.xyz/*
// @match        https://cnys.tv/*
// @match        https://bi-girl.net/*
// @match        https://jable.tv/*
// @match        https://en.jable.tv/*
// @match        https://*.jable.tv/*
// @match        https://missav.com/*
// @match        https://missav.ai/*
// @match        https://missav.ws/*
// @match        https://supjav.com/*
// @match        https://www.javbus.com/*
// @match        https://av.jkforum.net/*
// @match        https://javdb.com/*
// @match        https://jav.land/*
// @match        https://cn1.91short.com/*
// @match        https://javday.tv/*
// @match        https://www.xvideos.com/*
// @match        https://4hu.tv/*
// @match        https://www.4hu.tv/*
// @match        https://netflav.com/*
// @match        https://t66y.com/*
// @match        https://xchina.co/*
// @match        https://www.dmm.co.jp/*
// @match        https://*.dmm.co.jp/*
// @match        https://cn.pornhub.com/*
// @match        https://www.pornhub.com/*
// @match        https://91porn.com/*
// @match        https://91porna.com/*
// @match        https://91porny.com/*
// @match        https://www.91porn.com/*
// @match        https://avple.tv/*
// @match        https://18comic.org/*
// @match        https://18comic.vip/*
// @match        https://hitomi.la/*
// @match        https://www.wnacg.com/*
// @match        https://www.wnacg.org/*
// @match        https://hanime1.me/*
// @match        https://rouman5.com/*
// @match        https://rou.video/*
// @match        https://manhuapica.com/*
// @match        https://op.gg/*
// @match        https://w.duboku.io/*
// @match        https://www.duboku.tv/*
// @match        https://www.libvio.com/*
// @match        https://www.libvio.pro/*
// @match        https://www.libvio.top/*
// @match        https://www.libvio.me/*
// @match        https://www.libvio.fun/*
// @match        https://www.tvn.cc/*
// @match        https://m.tvn.cc/*
// @match        https://wap.tvn.cc/*
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
// @match        https://www.nivod5.com/*
// @match        https://m.nivod5.com/*
// @match        https://www.nivod4.tv/*
// @match        https://www.nivod8.tv/*
// @match        https://www.nivod9.tv/*
// @match        https://m.nivod4.tv/*
// @match        https://m.nivod8.tv/*
// @match        https://m.nivod9.tv/*
// @include      https://m.nivod*.tv/*
// @include      https://www.nivod*.tv/*
// @match        https://javplayer.me/*
// @match        https://netflav5.com/*
// @match        https://filemoon.sx/*
// @match        https://emturbovid.com/*
// @match        https://netflavns1.com/*
// @match        https://turbovidhls.com/*
// @match        https://trailerhg.xyz/*
// @match        https://turboplayers.xyz/*
// @match        https://javggvideo.xyz/*
// @match        https://turtleviplay.xyz/*
// @match        https://findjav.com/*
// @match        https://stbturbo.xyz/*
// @match        https://emturbovid.com/*
// @match        https://fc2stream.tv/*
// @match        https://turbovidhls.com/*
// @match        https://mmsw02.com/*
// @match        https://embedrise.com/*
// @match        https://mmfl02.com/*
// @match        https://netflavns2.com/*
// @match        https://wangdoc.com/*
// @match        https://developer.mozilla.org/*
// @match        https://zh.javascript.info/*
// @match        https://deerchao.cn/*
// @match        https://t.me/*
// @match        https://tameikegoro.jp/*
// @match        https://njav.tv/*
// @match        https://www.ntdm9.com/*
// @match        https://www.novel543.com/*
// @match        https://www.hltv.org/*
// @match        https://m.diyibanzhu.me/*
// @match        https://www.alicesw.com/*
// @match        https://www.javlibrary.com/cn/*
// @match        https://www.javlibrary.com/tw/*
// @match        https://www.javlibrary.com/ja/*
// @match        https://www.javlibrary.com/en/*
// @exclude      https://www.javlibrary.com/cn/
// @exclude      https://www.javlibrary.com/tw/
// @exclude      https://www.javlibrary.com/ja/
// @exclude      https://www.javlibrary.com/en/
// @exclude      https://www.javlibrary.com/
// @match        https://t1229.btc760.com/*
// @match        https://d1skbu98kuldnf.cloudfront.net/*
// @match        https://dnt92ffcqr0xu.cloudfront.net/*
// @exclude      https://x.com/*
// @exclude      https://pan.baidu.com/*
// @exclude      https://twitter.com/*
// @exclude      https://limbopro.com/*
// @exclude      https://venus-av.com/*
// @exclude      https://developer.mozilla.org/
// @exclude      https://www.youtube.com/*
// @exclude      https://www.xvideos.com/*
// @exclude      https://pan.baidu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=limbopro.com
// @run-at       document-end
// @grant        none
// ==/UserScript==


// 为避免不必要的麻烦，Adblock4limbo.user.js 只匹配以上 @match 部分网站；
// 🤔如需在所有网站应用本脚本及其自带“导航功能”，
// ✅建议直接安装导航功能脚本 https://github.com/limbopro/Adblock4limbo/raw/refs/heads/main/Adguard/Adblock4limbo.function.user.js （Adblock4limbo——导航及各类功能函数合集.[github]）
// 🙅不要在上方 // @match https://*/*

/**
 * ---------------------------
 * 毒奶去网页广告计划
 * Author: limbopro
 * 使用教程：https://limbopro.com/archives/12904.html
 * 联系博主：https://t.me/limboprobot
 * 电报群组：https://t.me/Adblock4limbo
 * FAQ：https://t.me/Adblock4limbo/21 常见问题与回答
 * 提交 issue：https://github.com/limbopro/Adblock4limbo/issues 有问题 欢迎提 对于能提出好的建议或意见的用户，我们热烈欢迎，赞赏；
 * 查看 Adblock4limbo.user.js 内容：https://github.com/limbopro/Adblock4limbo/blob/main/Adguard/Adblock4limbo.user.js
 * 安装 Adblock4limbo.user.js 脚本：https://github.com/limbopro/Adblock4limbo/raw/refs/heads/main/Adguard/Adblock4limbo.user.js
 * ---------------------------
 */

/* 使用技巧最后更新于 11.25.2025；
/* 新增反馈&导航按钮&划词搜索&执行JS&成人保护模式
/* 移除特定网站目录（详见 https://github.com/limbopro/Adblock4limbo/blob/main/Adguard/Adblock4limbo.user.js @match 部分）广告/弹窗/
/* 并新增额外特性（提取视频mp4&m3u8地址/在线下载/快进快退10s 1m 10m...）

// **【导航】使用指南（PC/Mac）**
/// 按教程安装好油猴脚本
/// 访问特定网站（详见 Adblock4limbo.user.js @match 部分）
/// 1.1 1秒内连续按2次 ESC键 可唤出【导航页面】；
/// 1.2 当处于导航页面时，按ESC键 或1秒内点击2次导航页的空白处 可退出【导航页面】；

// **【导航】使用指南（iOS）**
/// 按教程配置好相应重写/去广告分流
/// 访问【目前在维护的网站目录】里的（绝大多数）网站
/// 1.1 页面空白处1秒内连续点击4次及以上亦可唤出【导航页面】；

// **【导航】使用指南（PC/Mac/iOS）**
/// **成人保护模式**[开启的情况下，见导航详情页左上角设置部分]
/// 仅针对部分主要成人网站生效
/// 当你浏览成人网站时，切换到别的应用或页面再返回时，网站页面将被模糊
/// 可在 导航 - **反馈/建议/功能设置//** 开启或关闭成人保护模式(ON/OFF)；

// **如何【全局禁用右下角导航功能以及成人保护模式（iOS）】**
/// iOS QX/Stash/Surge/等用户
/// 1.添加主机名， **limbopro.com**
/// 3.全局禁用右下角导航功能以及成人保护模式：添加重写，匹配URL直接填写 Adblock4limbo.function.js ，类型选 reject，即可禁用导航及其附带feature；

// **如何【全局隐藏/禁用右下角导航按钮以及成人保护模式/使导航功能失效（PC/Mac）】**
/// PC/Mac 油猴用户...
/// 进入 Tampermonkey 管理面板 - 找到 **Adblock4limbo.[github]**
/// 1.1找到 daohang_build()  大概在 210 多行
/// 1.2然后将 daohangMode/adultMode 的值修改成 false 即可
/// 1.3或直接注释掉 daohang_build() 即可（注释后将无法快捷唤起导航详情页，导航功能及其附带feature失效）

// **如何卸载毒奶去广告计划**
/// 删除相关引用即可；

/// ! 隐藏页面右下角导航🧭按钮🔘不影响PC/Mac端快捷键使用，移动端仍可1秒内连续点击页面空白处4次及以上唤出【导航页面】；
*/


function checkDOMLoaded() {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        console.log('DOM 已加载');
        // 在此处运行您的代码
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            console.log('DOM 已加载（通过事件触发）');
            // 在此处运行您的代码
        });
    }
}

checkDOMLoaded();

/**
 * 为网页增加导航按钮，将位于页面右下角呈现；
 * 如需取消该按钮，请将如上调用代码注释；
*/


// 是否（默认）显示导航🧭按钮🔘
// 如【不需要显示导航🧭按钮🔘】 可将 cookie 的值从 true 改为 false

settingCookie('daohangMode_global', 'true', '400');
console.log('是否（默认）显示导航🧭按钮🔘：' + getCookie_('daohangMode'))

// 是否（默认）开启成人🔞网站保护模式
// 如【不需要开启成人网站保护模式】 可将 cookie 的值从 true 改为 false
settingCookie('adultMode', 'false', '400');
console.log('是否（默认）开启成人🔞网站保护模式：' + getCookie_('adultMode'))

// 是否开启导航🧭按钮🔘 // 完全开启或禁用导航功能
// 如【不需要开启导航🧭按钮🔘】可直接将 daohang_build() 进行注释
// //daohang_build() 就像这样
// 注释后将【无法快捷唤起导航详情页】且导航功能无法使用
daohang_build();


// 一些常量
/* Start */

var uBlockOrigin = {

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

var js_common = {
    crisp: 'https://limbopro.com/Adguard/crisp.js' // crisp 聊天系统 chat
}

var css_common = {
    //General element hiding rules
    /*如若需同步至 https://greasyfork.org/zh-CN 则需将本常量删除；
     这将导致审核不通过且脚本有被 GreasyFork 管理员 删除的风险；
    */
    gehr: "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/CSS/Adblock4limbo.user.css"
}

// 暂时 third_party_fileX('link', css_common.gehr, 'head'); // 动态引入 ublcok origin 通用去广告样式；
// third_party_fileX("script", js_common.crisp, "head"); // 动态引入 crisp 聊天系统；
// 油猴用户（桌面浏览器用户）可通过 // 注释上述代码来禁用Crisp；
// Qx/Shadrowrocket/Surge/Loon 等代理软件用户可通过添加分流来禁用Crisp；（分流类型选择 host-keyword, crisp, reject）;

/* End */

var adsMax = {
    js: {
        //functionx: "https://greasyfork.org/scripts/477474-functionx4limbo-x/code/functionx4limboX.user.js",
        functionx: "https://limbopro.com/Adguard/Adblock4limbo.function.js", // 全局js
        //duboku: "https://limbopro.com/Adguard/duboku.js", // 独播库
        avple: "https://limbopro.com/Adguard/avple.js", // avple 同步至 Greasy 时需注释
        contentFarm: "https://limbopro.com/Adguard/contentFarm.js", // 内容农场
        //contentFarm: 'https://greasyfork.org/scripts/442253-%E5%B1%8F%E8%94%BD%E5%86%85%E5%AE%B9%E5%86%9C%E5%9C%BA-with-%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC/code/%E5%B1%8F%E8%94%BD%E5%86%85%E5%AE%B9%E5%86%9C%E5%9C%BA%EF%BC%88with%20%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC%EF%BC%89.user.js',
    },
    css: {
        globalcss: "https://limbopro.com/CSS/Adblock4limbo.user.css", // 全局
        othercss: ".jable_css { background: rgb(0, 172, 106) important; border-right:6px solid #28a745 !important;} .fontColor {color:green !important}", // 按钮输入框块等元素类
        libvio: ".container > .t-img-box:first-child, .hidden-log ,a[target=\"_blank\"] > .img-responsive ,.advertise ,#adsbox ,.t-img-box ,.inner-advertise ,.advertise  {display: none! important;}", // libvio
        goole: "#tvcap,[data-text-ad] {display:none !important}", // 谷歌搜索广告
        avple: "#adsbox,.asg-overlay,.jss20,.jss13,iframe,span[class*=MuiSkeleton-root],.jss16 ,.MuiSkeleton-pulse.jss12.MuiSkeleton-rect.MuiSkeleton-root,[id*=KnvW],img[src*=\".gif\"],iframe[data-width] {display: none! important;}", // avple
        btbdys: "div[style*='z-index:999'],.artplayer-plugin-ads, .artplayer-plugin-ads, *#ad-float, a[href*='z2py'], a[href*='dodder'], .ayx[style^=\"position\: fixed;bottom\"],#ad-index,#adsbox,.ayx[style=\"display:block;\"],.ayx[style^=\"position: fixed;bottom\"],a[target*=_new] {display:none !important;}", // 哔滴影视
        switch: ".switch {display:none !important}",
        ddrk: "div#afc_sidebar_2842, div.cfa_popup, div[class*='popup'], #sajdhfbjwhe, #kasjbgih, #fkasjgf, img[src*='bcebos'] {opacity:0% !important; pointer-events: none !important;}",
        baidu_zhidao: "div[class$='-ecom-ads'], div[class*='fc-'][tplid], .wgt-ads {display :none !important; pointer-events: none !important;}",
        baidu_search: "div[style*=fixed],.ec_ad_results {display:none !important;} ", // baidu
        baidu_index: "a[data-tclog] > img, #foot, .recordcode, .index-copyright, div[style*='overflow'], .rn-container, .s-loading-frame.bottom {display:none !important;}",
        ddrk2: "body,div.post-content,a {overflow-x:hidden !important;}", // ddys
        jable: "body {overflow-x:hidden;} div.site-content {overflow-x:hidden!important;} div.text-center > a[target=_blank], li[class*='nav-item'] >  a[target=_blank], div.asg-interstitial, div.asg-interstitial__mask, div[class*=\"exo\"], .exo-native-widget-outer-container, a[href*=\"trwl1\"], div[data-width=\"300\"], div.text-center.mb-e-30, div[data-width*=\"300\"], div[style*=\"300px\"], section[class*=\"justify\"], iframe[width=\"728\"][height=\"90\"], #site-content > div.container > section.pb-3.pb-e-lg-40.text-center, a[href*=\"\?banner=\"],[class*=\"root--\"],.badge,a[href=\"http\:\/\/uus52\.com/\"] {display :none !important; pointer-events: none !important;}", // Jable.tv
        test: "*, div,img {display: none !important}",
        tvn: "img[src*='gif'], iframe {display:none !important; pointer-events:none important;}",
        comic_18: "div.div2_sticky2, p > a[target=_blank], div.modal-body > a[target=_blank], li[class*='pop'] > a[target=_blank], li[class*='top'] > a[target=_blank], .modal-backdrop,[data-height*='90'],div[data-height='250'][data-width='300'],a[href^='http']:not([href*='18comic.']) > img ,#adsbox ,a[target='_blank'][rel*='nofollow'] > img[src*='.gif'] ,#guide-modal ,iframe[width='300'][height='250'] ,.modal-body > ul.pop-list,.adsbyexoclick,div[data-group^='skyscraper_'],.bot-per,.top-a2db,a[href*='.taobao.com'],div[data-height='264'][data-width='956'],div[style^='position: fixed; top:'],.bot-per.visible-xs.visible-sm  {display: none !important; pointer-events: none !important;}", // 555电影网
        dy555: "div.module {z-index:1!important} div.popup.popup-tips.none.popupShow, a[target=\"_blank\"] img,.playtop.col-pd,a[href*=\"?channelCode=\"] > img[src*=\".com:\"],#adsbox,div.myui-panel.myui-panel-bg.clearfix.wapad {display:none !important}", // 555影院
        wnacg: "div > img[src*='gif'],div.sh,div > a[target='_blank'] > img {display:none !important}", // 绅士漫画
        manhuapicanone: "li[class*=lindex],.row.alert,.my-insert-flag,[role=alert],img[src*=gif] {display:none !important; pointer-events: none !important;} ", // 嗶咔picacg免費網頁版
        manhuapicaheight: "/*li[class*=lindex],*/.row.alert,.my-insert-flag,[role=alert],img[src*=gif] {height:0px !important} ", // 嗶咔picacg免費網頁版
        dmm: "",
        /* @media (min-width:640px){.sm\\:hidden{margin:6px 0 0;padding:0;display:flex !important}} */
        missav: "a[href^='https://theporndude.com'],a[href*='mycomic'],a[href*=myavlive],[href*='bit.ly'],[href*='bit.ly'][target=_blank],a[href*='/vip'],img[src*='.gif'],iframe,#a[href*='//bit.ly/'],div[style*='z-index: 1001'],ul.space-y-2.mb-4.ml-4.list-disc.text-nord14,div.space-y-5.mb-5,div.under_player,div[style=\"width: 300px; height: 250px;\"]{display:none !important;pointer-events:none !important}body{overflow-x:hidden}", //  MissAV
        bigirl: 'div#container + div, h4.adblock_title,div.adblock_subtitle,[class^=\'adblock\'],div[class^=\'ad_\'], .toppage_av {display:none !important; pointer-events: none !important;}', // https://bi-girl.net/
        opgg: ".AdSense,  div[data-ad], tr.ad, #banner-container, section[class*='md:hidden'] {display:none !important; pointer-events: none !important;}",
        btc760: ".ad_img,.ad_img,#ad_headerbanner {display:none !important; pointer-events: none !important;}", // btc760
        dnfcloudfront: "div.van-swipe__track,div.swiper-wrapper,div.van-count-down,div[class*=mine-ad],div.van-overlay, div[role=dialog], iframe {display:none !important; pointer-events:none important;}", // cloudfront mdsp
        porny91: "div.row  a[target*='_blank'],[href*='vfrbu1044'], div.coment-bottom, header + #main:nth-child(n+4) .container-fluid.mb-3.p-0,header + #main:nth-child(n+4) > div[id^=\"po-s\"]:not(#po-shd),.row > div.colVideoList:has(> div.video-elem > a[target=\"_blank\"]),.jsv-g1,.fixed-bottom.jsv.jsv-g1 {display:none !important;pointer-events:none important;}", // 91porny
        porna91: ".modal-backdrop.in,.dx-banner-item,.ad-dialog,a.checkNum[target='_blank']:not([href*='91porna.com']),li.flex.mr-6,div.text-mini.mb-3,a[href*='cloudfront'], div.filters, div.filters > div#videobox, div.row > div.col.col-24 { min-height: 0px !important; display:none !important;pointer-events:none important;}", // 91porna
        porn91: ".copysuccess {background:green !important;color:white !important;} br, .ad_img,.preroll-blocker, img[href*='.gif'] {display:none !important; pointer-events: none !important;}", // 91porn
        zhihuAds: "div.css-1izy64v,[class='Card AppBanner'],.Footer,.Banner-link,div.Pc-word {display:none !important; pointer-events: none !important;}",
        pornhubx: ".clearfix.watchpageAd,ins.adsbytrafficjunky,ins.adsbytrafficjunky~.tjLinksWrapper{display:none!important}  div.y20lkk9odsf6bxapqkvaa.clearfix > ins.adsbytrafficjunky[data-spot-id=\"981\"][data-site-id=\"23\"][data-height=\"99px\"][data-width=\"305px\"],.topAdContainter, a[href*='ads'], div.adContainer.clearfix.noBottom, .adContainer.clearfix.middleVideoAdContainer, div.adContainer.clearfix.noBottom, a[href*='fuck'][target='_blank'], [data-href][target='_blank'],iframe, a.ad#link, #header.hasAdAlert {grid-template-rows:60px 40px 0px !important} div.hd.clear, div > img[data-title][srcset], #js-networkBar,div#abAlert, .adsbytrafficjunky, #pb_template, .sponsor-text, #adsbox, .abAlertShown, .abAlertInner, #main-container > .abovePlayer, [rel*='noopener nofollow'],a[href^=\"http://ads.trafficjunky.net/\"], .topAdContainter,.adsbytrafficjunky,.ad-link  {height:0px !important; display:none !important; pointer-events:none;}", // pornhub
        t66y: "div.content-box > div.static-container-4,div.tips[style*='auto'],div[class*=ftad-item] {height:0px !important; display:none !important; pointer-events:none;}", // pornhub
        xchina: "a[target='_blank']:not([href*='limbopro' i]):not([href*='.m3u8' i]):not(.echo *):not(:has(+ .echo)),a[href*='pre'],div.static-container-5,div.static-container-8,div.block-overlay,.push-slider,.push-top-container,.push-bottom {display:none !important; pointer-events: none !important;}",
        instagram: "div._aagw {display:none !important}", // 网页版Instagram不能复制图片的问题
        ttsp: "div#playad1,a[href*=\"8616.tech\"],.play_list_adbox,#adsbox,.ads_all > .ads_w,.ads_box,.right_ads {display:none !important}",
        tz659: "figure, img[src*='mt2.jpg'],img[src*='pf.gif'],[src*='.gif'], iframe {display:none !important}",
        anime: "div[id*=ad] {display:none !important}",
        yhdmp: ".yrtjbmnk_b, .hvitsutz_b {display :none !important; pointer-events: none !important;}", // 樱花动漫
        //nivod: "[style='text-align: center; margin-top: 30px;'], iframe, img[src*=gif], .video-ad, .nav-ads, #adDiv, .v-ad, .ad-text, #video-container + ul[style^=\"width:\"] > li > img {display: none !important; pointer-events:none important;}", // 泥巴影视视频左上角水印贴片 nivod
        nivod: "img[src*='1a732eeb1adb'], img[src*='49e8abd32d13'], span[style*='1a2d'],span[style*='0891'],[style='text-align: center; margin-top: 30px;'],.qy20-h-carousel__li:nth-child(-n+2), .qy20-h-carousel__li:nth-child(-1n+2), span[style*='d92ea585-0'],span[style*='3db8c0fd-218f-491f-b2b0-2057bd401a2d'], iframe, img[src*=gif], .video-ad, .nav-ads, #adDiv, .v-ad, .ad-text, #video-container + ul[style^=\"width:\"] > li > img {display: none !important; pointer-events:none important;}", // 泥巴影视视频左上角水印贴片 nivod
        _91short: "a[href*=lhiefl], a[href*=lol], div.shortcuts-mobile-overlay,div.xtbhkpvx_b,a[href*=cpa],img[src*=gif],#adsbox, div.adm {display:none !important; pointer-events: none !important;}",
        xiaobaotv: "",
        cupfoxapp: ".head_ad {display:none !important; pointer-events: none !important;}",
        dmmiku: " #vodshare, .right_ads, .ads_box, .ads_all > .ads_w {display:none !important; pointer-events: none !important;}",
        bfdm: "#player_pause {display:none !important; pointer-events: none !important;}",
        iyf: "vg-pause-f, div.ad, .ad, .ad_tag, .dabf > .ng-star-inserted, .pggf > .ng-star-inserted {display:none !important; pointer-events: none !important;}",
        hltv: "div.close-container,.presented-by,.mid-container + div[id]:has(> a[href] > img[alt][src]),.kgN8P9bvyb2EqDJR,.mid-container {display:none !important; pointer-events: none !important;}",
        cnys: "div#player_pause, e#time_ad, div.vod-gg, img[src*='b02.gif'], #adsbox, #ADtip, .ec-ad {display:none !important; pointer-events: none !important;}",
        google: "#tvcap, #tads, div.XDZKBc,.jnyxRd.TpRPV {display:none !important}",
        javday: "p[style], p > a {display:none !important; pointer-events: none !important;} ",
        xvideos: ".remove-ads-link, .remove-ads, .adsbyexoclick, #ad-header-mobile, .video-ad, #video-right, #ad-footer {display:none !important; pointer-events: none !important;}", // xvideos
        javbus: "div.row iframe,.ad-item,.ad-box {display:none !important}",
        javdb: "nav.app-desktop-banner,div.moj-content {display:none !important}",
        jkforum: "",
        javland: "img[src*='.gif'], a[href^=\"https://go.rmhfrtnd.com/\"] {display:none !important; pointer-events: none !important;}",  // jav.land
        _4hu: ".couplet-left, body[ontouchstart] > div[id^='content_'][style='display: block;'], div.row.col2 > dl, #btmBox, img[src*=gif],.col5 > dl#randomBox, script[src$=\"/base.js\"] + #couplet, body[ontouchstart] > #topBox,.wrap + #btmBox,.search + #midBox {opacity:0% !important; pointer-events: none !important; height: 0px !important}",
        // {opacity:0% !important; pointer-events: none !important; height: 0px !important}
        netflav: "iframe[src*=xlv],.ads_video_overlay_mobile, div.widget-container, a[href*=\"register\"][target=\"_blank\"],div.ads_video_close_button,div.ads_video_overlay_mobile,div.footer_root,div.ads_head_banner_container {display:none !important;}",
        supjav: '.video-wrap > div.right,#pop, .div_pop, #pop.div_pop, .movv-ad, #adsbox, div.right, div.movv-ad.ad_3_3, div.movv-ad.ad_3_2, .movv-ad, .adsbyexoclick, #adsbox, .adsbyexoclick  {display:none !important; pointer-events: none !important;}',
        hitomi: ".container > div[class$=\"content\"] > div[class]:has(> script) {display:none !important; pointer-events: none !important;}",
        hanime1: ".comics-banner-ads,span.scaled-exoclick, iframe, #close-mobile-ad-btn, #bottom-ads, div[style*=\"width: 310px; height: 282px;\"] {display:none !important; pointer-events: none !important;}",
        javlibrary: ".menutext.whenmobile {top:90px;z-index:114;} a[href*='redirect'] {display:none!important} #toplogo {height:64px} .videothumblist .videos {min-width:auto;}.titlebox.whenmobile{width:250px} #topmenu.whenmobile {height:70px;} .searchbar.whenmobile{right:2px}  div.videothumblist.whenmobile {overflow:scroll!important;overflow-x:hidden!important;} div#rightcolumn.whenmobile {width:300px} #rightcolumn {right:90px} #leftmenu {width:90px; position:fixed;} div#content {width:auto !important} body.main { min-width: auto; width:auto !important} iframe,img[src*='gif'] , td.advsearch {display:none!important;pointer-events: none !important;}",
        douban: "*{display:none!important}",
        olevod: "#adsbox, .ads-bg {display:none!important}",
        ntdm9: "#adsbox, .yammohxz_b {display:none !important; pointer-events: none !important;}",
        njav: "div[style=\"position: absolute; inset: 0px; z-index: 999; display: block;\"],.ad-floating,[src*='.gif'],iframe[width='300px'] {display:none!important}",
        jav_common: ".jw-wrapper > div[style=\"opacity: 0; visibility: hidden; overflow: hidden; display: block; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;\"],div[style^=\"position:fixed;inset:0px;z-index:2147483647;background:black;opacity:0.01\"] {height:0px; display:none !important; pointer-events: none !important;}",
        huaren_live: "[src*='0d463e36ddf0630.jpg'],.ad-tso,.ad-s,#dm-opacity,.ad-txt, .pause-ad, .ad-link:not(.adsbox), .action-ad, img[src*='ads.jpg'] {display:none !important; pointer-events: none !important;}",
        rouman: "div[role='dialog'] {display:none !important; pointer-events: none !important;}",
        rouvideo: "div[style*='pointer-events: none'],.flex.items-center.justify-center.my-2,ins > iframe,a.vast-blocker,.p-2.rounded.text-center,.text-xl.mb-1,[class*='hover:underline'],[style*='overflow: hidden'],[data-advadstrackid] {display:none !important; pointer-events: none !important;}",
        diyibanzhu: "img, #adsbox, .slide-ad {height:0px; display:none !important; pointer-events: none !important;}",
        alicesw: "a[target='_blank'] {height:0px; display:none !important; pointer-events: none !important;}",
        novel543: "iframe, div#adfoot, div.px-3.py-3, #adfoot, .gadBlock {height:0px; display:none !important; pointer-events: none !important;}"
        //button_common: "padding: 6px 6px 6px 6px; display: inline-block; color: white;z-index: 114154 !important; border-right: 6px solid #38a3fd; border-left: #292f33 !important; border-top: #292f33 !important; border-bottom: #292f33 !important; background: #2563eb; border-radius: 0px 0px 0px 0px; font-weight: 800 !important; text-align: right !important;" // 按钮/输入框通用样式
    },
    function: {
    }
}

loadCSS(adsMax.css.globalcss, () => {
    console.log('CSS 已生效');
})

css_adsRemove(adsMax.css.othercss, 0, 'othercss') // 引用全局样式

function values() {
    var adsDomain = [
        "pornhub",
        "t66y",
        "xchina.co",
        'dmm.co.jp',
        "missav",
        "bi-girl",
        "op.gg",
        "t1229.btc760.com",
        "d1skbu98kuldnf.cloudfront.net",
        "dnt92ffcqr0xu.cloudfront.net",
        "91porna.com",
        "91porny.com",
        "91porn.com",
        "avple",
        "18comic",
        "wnacg",
        "manhuapica",
        "zhidao.baidu.com",
        "www.baidu.com",
        "m.baidu.com",
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
        "555dyx",
        "instagram",
        "ttsp",
        "tz659",
        "nbys",
        "anime1",
        "yhpdm",
        "yhdmp",
        "nivod",
        "91short",
        "xiaobaotv",
        "xiaoxintv",
        "cupfoxapp",
        "dmmiku",
        "bfdm",
        "iyf",
        "cnys",
        "javday",
        "xvideos",
        "javbus",
        "javdb",
        "av.jkforum.net",
        "jav.land",
        "4hu",
        "netflav",
        "javplayer",
        "filemoon",
        "embedrise",
        "mmfl02",
        "mmsw02",
        "netflavns2",
        "supjav",
        "hanime1",
        "hitomi",
        "javlibrary",
        "emturbovid",
        'netflavns1',
        "turbovidhls.com",
        "trailerhg.xyz",
        "turboplayers.xyz",
        "javggvideo.xyz",
        "turtleviplay.xyz",
        "findjav.com",
        "stbturbo.xyz",
        "emturbovid.com",
        "turbovidhls.com",
        'fc2stream',
        'douban',
        'twitter',
        'olevod',
        'njav',
        'ntdm9',
        'play.huaren.live',
        'huaren.live',
        'rouman',
        'rou.video',
        'novel543',
        'diyibanzhu',
        'alicesw',
        'hltv',
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

            window.addEventListener('load', function () {

                pornhub_interstitialPass();
                //tag_adsRemove("script", "ads_batch");
                const custom_style_values_pb = "right: 0px !important; padding: 0 !important; position: relative !important;"
                css_adsRemove(adsMax.css.pornhubx, 500, "pornhubX");

                // 页面加载完成后执行
                // 精准选中所有 TJ 广告容器
                document.querySelectorAll('ins.adsbytrafficjunky').forEach(ins => {
                    // 移除整个外层 div（包含随机 class 的那个）
                    const container = /*ins.closest('div.clearfix') ||*/ ins.parentElement;
                    if (container) container.remove();
                });


                setTimeout(() => {
                    let ads_selector = [".topAdContainter", "a[href*='ads']", "a[href*='fuck']", "a[href*='ad']", "div.adContainer.clearfix.noBottom", ".adContainer.clearfix.middleVideoAdContainer"];
                    let ads = setInterval(() => {
                        ads_selector.forEach((x) => { selector_one_by_one(x) })
                        console.log("清理还在继续..." + x)
                        if (document.querySelectorAll(ads_selector).length == 0) {
                            clearInterval(ads)
                            console.log("清理计时器，ads移除完毕...")
                        }
                    }, 1000)
                }, 100)

                let cssText = "font-size: smaller !important; background: #2563eb !important; left: 0px; top: 110px; margin-right: 5px; margin-top: 5px;" + "padding: 6px 6px 6px 6px; display: inline-block; color: white;z-index: 114154 !important; border-right: 6px solid #38a3fd; border-left: #292f33 !important; border-top: #292f33 !important; border-bottom: #292f33 !important; background: #2563eb; border-radius: 0px 0px 0px 0px; font-weight: 800 !important; text-align: right !important;"
                setTimeout(() => {

                    if (document.getElementById('download_pornhub') == null) {
                        ele_dynamicAppend("div.ratingInfo, div.categoryRow.ratingDetails.sectionPadding", "href", "如何下载本视频？", cssText, "https://limbopro.com/archives/M3U8-Downloader.html", "download_pornhub", 2, "a")
                        if (document.getElementById("download_pornhub")) {
                            document.getElementById("download_pornhub").style = "display: inline !important;";
                            document.getElementById("download_pornhub").target = "_blank !important;";
                        }
                    }
                }, 3000)


                pornhub_sidebar_ads();
            });
            break;

        case 't66y':
            css_adsRemove(adsMax.css.t66y);
            break;

        case 'xchina.co':
            css_adsRemove(adsMax.css.xchina);
            window.addEventListener('load', function () {
                // 小说页面广告

                if (document.querySelectorAll('div.fiction-banner')) {
                    document.querySelectorAll('div.fiction-banner').forEach(box => {
                        if (box.querySelector('iframe[src*="magsrv.com"]')) {
                            box.remove();
                        }
                    })
                }

                // 包含 static-container-4 或包含 magsrv.com iframe 的 content-box 都删掉
                if (document.querySelectorAll('.content-box')) {
                    document.querySelectorAll('.content-box').forEach(box => {
                        if (box.querySelector('.static-container-4')) {
                            box.remove();
                        }
                    })
                }

                xchinadl();

            });

            break;

        case '91porna.com':
            //cloudflare_captchaBypass();
            css_adsRemove(adsMax.css.porna91);
            //_91porn_videoplay_ads();

            // 播放页空白

            document.querySelectorAll("br").forEach((x) => {
                if (x.clientHeight = 0) {
                    x.remove()
                }
            })

            break;

        case '91porny.com':

            //cloudflare_captchaBypass();
            css_adsRemove(adsMax.css.porny91);
            //_91porn_videoplay_ads();


            // 播放页空白
            document.querySelectorAll("br").forEach((x) => {
                if (x.clientHeight = 0) {
                    x.remove()
                }
            })



            /**
 * 关闭指定的 Bootstrap 模态框（仅使用官方 API：BS5 / BS4）
 *
 * @param {string} selector - 必需的 CSS 选择器，支持多个用逗号分隔
 *                            示例: '#myModal', '.modal', '#m1, #m2'
 * @returns {void}
 *
 * @example
 * closeBootstrapModal('#loginModal');
 * closeBootstrapModal('.modal.show, #alertModal');
 */
            function closeBootstrapModal(selector) {
                'use strict';

                // 1. 参数校验
                if (typeof selector !== 'string' || !selector.trim()) {
                    console.warn('closeBootstrapModal: 必须提供有效的选择器字符串');
                    return;
                }

                // 2. 解析多个选择器
                const selectors = selector
                    .split(',')
                    .map(s => s.trim())
                    .filter(s => s);

                if (!selectors.length) {
                    console.warn('closeBootstrapModal: 解析后无有效选择器');
                    return;
                }

                // 3. 获取所有匹配元素并去重
                const elements = Array.from(
                    new Set(
                        selectors.flatMap(sel =>
                            Array.from(document.querySelectorAll(sel))
                        )
                    )
                );

                if (!elements.length) {
                    console.log('closeBootstrapModal: 未找到匹配的元素');
                    return;
                }

                // 4. 逐个尝试关闭（仅使用官方 API）
                elements.forEach(modal => {
                    let closed = false;

                    // === Bootstrap 5 原生 API ===
                    if (!closed && typeof bootstrap !== 'undefined' && bootstrap.Modal) {
                        const instance = bootstrap.Modal.getInstance(modal);
                        if (instance) {
                            instance.hide();
                            console.log('Bootstrap 5: instance.hide() 已调用', modal);
                            closed = true;
                        } else {
                            // 尝试创建新实例并关闭（适用于未初始化但结构正确的 modal）
                            try {
                                new bootstrap.Modal(modal).hide();
                                console.log('Bootstrap 5: 新实例 hide() 已调用', modal);
                                closed = true;
                            } catch (e) {
                                console.warn('Bootstrap 5: 创建实例失败', e, modal);
                            }
                        }
                    }

                    // === Bootstrap 4 jQuery API ===
                    if (!closed && typeof $ !== 'undefined' && $.fn.modal) {
                        try {
                            $(modal).modal('hide');
                            console.log('jQuery: modal("hide") 已调用', modal);
                            closed = true;
                        } catch (e) {
                            console.warn('jQuery modal("hide") 失败', e, modal);
                        }
                    }

                    // === 若都失败，仅记录警告 ===
                    if (!closed) {
                        console.warn('closeBootstrapModal: 无法关闭模态框（无可用 Bootstrap API）', modal);
                    }
                });
            }

            // 或者绑定到某个事件
            document.addEventListener('keydown', e => { if (e.key === 'Escape') closeBootstrapModal('.modal.show,div.skip-btn'); });

            setTimeout(() => {
                closeBootstrapModal('.modal.show,div.skip-btn') // 关闭模态框
                _91porny_dl() // 下载按钮
                if (document.querySelector('div.skip-btn.cursor-p')) { // 跳过广告按钮
                    document.querySelector('div.skip-btn.cursor-p').click()
                }
            }, 2000);

            document.addEventListener('DOMContentLoaded', function () {
                this.setTimeout(() => {
                    closeBootstrapModal('.modal.show,div.skip-btn') // 关闭模态框
                    _91porny_dl() // 下载按钮
                    if (document.querySelector('div.skip-btn.cursor-p')) { // 跳过广告按钮
                        document.querySelector('div.skip-btn.cursor-p').click()
                    }
                });
            });

            window.addEventListener('load', function () {
                this.setTimeout(() => {
                    closeBootstrapModal('.modal.show,div.skip-btn') // 关闭模态框
                    _91porny_dl() // 下载按钮
                    if (document.querySelector('div.skip-btn.cursor-p')) { // 跳过广告按钮
                        document.querySelector('div.skip-btn.cursor-p').click()
                    }
                });
            }, 2000);

            break;

        case 't1229.btc760.com':
            css_adsRemove(adsMax.css.btc760);
            break;


        case 'd1skbu98kuldnf.cloudfront.net': //mdsp
        case 'dnt92ffcqr0xu.cloudfront.net': //mdsp

            window.addEventListener('load', function () {
                this.setTimeout(() => {
                    css_adsRemove(adsMax.css.dnfcloudfront);
                });
            }, 2000);

            break;

        case '91porn.com':
            //cloudflare_captchaBypass();
            css_adsRemove(adsMax.css.porn91);

            let url91 = document.location.href;
            if (url91.includes('view_')) {  // 推荐用 includes，更简洁
                const timer = setInterval(() => {
                    const skipBtn = document.querySelector('div.preroll-skip-button');

                    if (skipBtn) {
                        skipBtn.click();
                        clearInterval(timer);  // 点击成功后立即停止轮询
                        console.log('广告已自动跳过');
                    }
                }, 500);  // 500ms 比 1000ms 更灵敏，用户体验更好

                // 可选：设置最长等待时间（如15秒后自动停止，防止死循环）
                setTimeout(() => clearInterval(timer), 15000);
            }

            setTimeout(() => {
                _91porn_dl()
            }, 2500)


            break;
        case 'avple':
            //cloudflare_captchaBypass();
            css_adsRemove(adsMax.css.avple);
            third_party_fileX("script", adsMax.js.avple, "body")
            break;
        case '18comic':
            css_adsRemove(adsMax.css.comic_18);
            button_dynamicRemove("#chk_cover", 200);
            _18comic_adsRemove();
            break;
        case 'www.5dy':
            adsDomain_switch("555dyx")
            break;
        case 'o8tv':
            adsDomain_switch("555dyx")
            break;
        case 'www.555dd':
            adsDomain_switch("555dyx")
            break;
        case "555dyx":


            let www = setInterval(() => {
                if (document.querySelector('video')) {
                    document.querySelector('video').style = 'opacity: 1; filter: contrast(1.01) brightness(1.05) saturate(1.1);'
                    /* if (document.querySelector('video').loop == 'false') {
                         document.querySelector('video').setAttribute('loop', '')
                     }
                     */
                    console.log("画面增强设置成功...")
                    clearInterval(www)
                }
            }, 1000)

            document.querySelectorAll('div.module').forEach((x) => { x.style.zIndex = 1 });
            css_adsRemove(adsMax.css.dy555, 0, "555dy")
            document.querySelectorAll('.popup-btn.close-pop')[0].click(); //模拟点击
            break;
        case 'wnacg':
            css_adsRemove(adsMax.css.wnacg);
            break;
        case 'manhuapica':


            if (window.location.href.replace('https://manhuapica.com/') == 'undefined' || window.location.href.replace('https://manhuapica.com/#') == 'undefined' || window.location.href.replace('https://manhuapica.com/?vflush') !== window.location.href) {
                css_adsRemove(adsMax.css.manhuapicanone);

                setTimeout(() => {
                    if (document.querySelector('.btn.btn-outline-primary')) {
                        document.querySelector('.btn.btn-outline-primary').click()
                    }
                }, 3000)

            } else {
                css_adsRemove(adsMax.css.manhuapicaheight);
            }

            setTimeout(() => {
                var divx = document.createElement('div');
                divx.id = 'adblock4limbox';
                divx.style = 'display:none !important;'
                var body = document.querySelectorAll('body')[0];
                //body.appendChild(divx);
                var child = document.querySelectorAll('img[src*=gif]')
                child.forEach((x) => {
                    divx.appendChild(x);
                })
            }, 1000)

            break;
        case 'zhidao.baidu.com':
            console.log('it\'s zhidao.baidu.com')
            css_adsRemove(adsMax.css.baidu_zhidao, 500, 'fuckbaidu')
            setTimeout(() => {
                css_adsRemove(adsMax.css.baidu_zhidao, 500, 'fuckbaidu')
            }, 1500)
            break;
        case 'www.baidu.com':
            window.addEventListener('load', function () {
                console.log('Got u! baidu.com')
                let regex = /https?:\/\/(www|m)\.baidu\.com\/(from=|s\?)/gi
                window.location.href.search(regex) !== -1
                if (window.location.href.search(regex) !== -1) {
                    css_adsRemove(adsMax.css.baidu_search);
                    console.log('移除搜索结果广告🪧...')
                } else {
                    adsDomain_switch("zhidao")
                    css_adsRemove(adsMax.css.baidu_index);
                    console.log('移首页广告🪧...')
                }
            });
            break;
        case 'ddys':
            //css_adsRemove(adsMax.css.ddrk);
            css_adsRemove(adsMax.css.ddrk2);

            //selector_adsRemove("#sajdhfbjwhe,#kasjbgih,#fkasjgf,img[src*='bcebos']", 0)

            var divx = document.createElement('div');
            divx.id = 'adblock4limbox';
            divx.style = 'display:none;'
            var body = document.querySelectorAll('body')[0];
            //body.appendChild(divx);
            var child = document.querySelectorAll('#sajdhfbjwhe,#kasjbgih,#fkasjgf')
            child.forEach((x) => {
                divx.appendChild(x);
            })

            break;
        case 'duboku':
            third_party_fileX("script", adsMax.js.duboku, "body")
            break;
        case 'libvio':
            css_adsRemove(adsMax.css.libvio)
            break;
        case 'nbys':
            css_adsRemove(adsMax.css.nivod);
            break;
        case 'ntdm9':
            css_adsRemove(adsMax.css.ntdm9);
            const a = document.getElementsByClassName("yammohxz_b");
            addEventListener_defuser("touchend"); // 打断监听器

            for (i = 0; i < a.length; i++) {
                a[i].style = "display: none !important; z-index:-114154; display:block; width:0vw; height:0";
            }

            break;
        case 'tvn':
            css_adsRemove(adsMax.css.tvn)
            break;
        case 'jable': // 2333
            console.log("IT'S JABLE");

            window.onload = function () {


                // 移除广告

                // 找到包含特定跳转链接的 <a> 标签
                const targetLink = document.querySelector('a[href*="9432b3b0-661c-4d05-9552-29757dafc4cb"]');

                // 如果存在，则向上找到外层 col-6 容器并移除
                if (targetLink) {
                    const container = targetLink.closest('.col-6.col-sm-4.col-lg-12');
                    if (container) {
                        container.remove();
                        console.log('广告元素已移除');
                    }
                }

                // 新增快进快退

                (function () {
                    fastForward('#player', 'section.pb-3.pb-e-lg-30');
                })();

                // 快进快退结束


                if (document.location.href.search('search') !== -1) {
                    let regex = /.*\/search\//;
                    let code = window.location.pathname.replace(regex, '').replace('/', '').toLowerCase()
                    setTimeout(() => {
                        tmd('#list_videos_videos_list_search_result > nav', code, '试试其他搜索：');
                    }, 2000)
                    console.log("生成搜索链接🔗");
                }

                if (document.querySelector('.plyr__poster') !== null) { // 在其他站点播放
                    let regex = /.*\/videos\//;
                    let code = window.location.pathname.replace(regex, '').replace('/', '').toLowerCase();
                    setTimeout(() => {

                        if (document.querySelector('#p1') == null) {
                            console.log('开始生成在线预览链接...')
                            tmd('h4', code, '在其他站点播放：');
                        }

                        console.log("生成在其他站点播放链接🔗");
                    }, 3000)
                }

            }()

            // 子域名跳转至主域名 jable.tv
            if (/\b(.*\.)(jable\.tv.*)\b/i.test(window.location.href.toLowerCase())) {
                console.log(window.location.href.toLowerCase())
                let url_jable_rewrite = window.location.href.toLowerCase().replace(/https:\/\/\w{2,3}\./i, "https://")
                console.log(url_jable_rewrite)
                window.location.replace(url_jable_rewrite)
            }

            // 去除首页广告
            if (document.querySelectorAll('div.col-6.col-sm-4.col-lg-3').length > 0) {
                document.querySelectorAll('div.col-6.col-sm-4.col-lg-3').forEach((x) => { // xxx
                    if (x.querySelectorAll("[target='_blank']").length > 0) {
                        x.style = "display: none !important; z-index:-114154; display:block; width:0vw; height:0";
                    }
                })
            }

            //cloudflare_captchaBypass();
            css_adsRemove(adsMax.css.jable);
            jable_adsRemove();
            const url_jable = document.location.href;
            const reg_videos = /^https:\/\/jable\.tv.*\/videos/gi;

            url_jable.search(reg_videos) !== -1 && document.querySelector('#avCodeCopy') === null

            if (url_jable.search(reg_videos) !== -1 && document.querySelector('#avCodeCopy') === null) {

                setTimeout(() => {
                    let cssText = "margin-left: 5px; margin-top: 5px; position: static; font-size: smaller !important; background: #2563eb !important; margin-right: 5px; padding: 6px 6px 6px 6px; display: inline-block; color: white; border-right: 6px solid #38a3fd; border-left: #292f33 !important; border-top: #292f33 !important; border-bottom: #292f33 !important; background: #2563eb; border-radius: 0px 0px 0px 0px; font-weight: 800 !important; text-align: right !important;"
                    let cssText2 = "width:72px; margin-left: 5px; margin-top: 5px; position: static; font-size: smaller !important; background: #2563eb !important; margin-right: 5px; padding: 6px 6px 6px 6px; display: inline-block; color: white; border-right: 6px solid #38a3fd; border-left: #292f33 !important; border-top: #292f33 !important; border-bottom: #292f33 !important; background: #2563eb; border-radius: 0px 0px 0px 0px; font-weight: 800 !important; text-align: right !important;"
                    ele_dynamicAppend("div.header-left > h6", "onclick", "code", cssText2, "", "avCodeCopy", 13, "input");
                    ele_dynamicAppend("div.header-left > h6", "onclick", "复制番号", cssText, "", "copyavCode", 14, "button");
                    ele_dynamicAppend("div.header-left > h6", "onclick", "", cssText, "", "copy", 15, "input");
                    ele_dynamicAppend("div.header-left > h6", "onclick", "复制M3U8文件地址", cssText, "", "jablex", 16, "button")
                    ele_dynamicAppend("div.header-left > h6", "onclick", "在线下载本视频", cssText, "", "onlinedl", 17, "button");
                    ele_dynamicAppend("div.header-left > h6", "onclick", "如何下载本视频？", cssText, "window.open(\"https://limbopro.com/archives/M3U8-Downloader.html\", \"_blank\")", "how", 18, "button");
                    var regex = /[a-zA-Z]{3,5}\-\d{3,5}/i
                    var avCode = document.querySelectorAll('h4')[0].innerText.match(regex)[0]
                    //let avCode = window.location.pathname.replace('/videos/', '').replace('/', '')
                    let input = document.querySelector('#avCodeCopy')
                    input.value = avCode
                    // 添加监听器
                    addListenerById("jablex", () => { copyText("copy", "jablex", "复制M3U8文件地址") }, 0);
                    addListenerById("copyavCode", () => { avCodeCopy() }, 0);
                }, 3000)

                function avCodeCopy() {
                    // 复制工作开始
                    let civ = document.querySelector('#avCodeCopy')
                    civ.select()
                    document.execCommand('copy')
                    // 复制工作结束

                    // 取消文本选中
                    window.getSelection().removeAllRanges();
                    // 移除焦点，防止键盘弹出
                    document.activeElement.blur();

                    document.querySelector('#copyavCode').innerHTML = '复制成功!'
                    document.querySelector('#copyavCode').setAttribute('class', 'jable_css')
                    setTimeout(() => {
                        document.querySelector('#copyavCode').innerHTML = '复制番号'
                        document.querySelector('#copyavCode').className = ''
                    }, 1500)
                    //}, 0)
                }



                setTimeout(() => {

                    repeat_regex.forEach(m3u8_tempt)

                    // online download button script
                    // 获取按钮
                    const button = document.getElementById('onlinedl');

                    // 动态创建样式
                    function createStyles() {
                        const style = document.createElement('style');
                        style.textContent = `
                        /* 遮罩层样式 */
                        .overlay {
                            display: none;
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.5);
                        z-index: 999;
                }

                        /* 悬浮窗样式 */
                        .modal {
                        height: 65%;
                        align-content: center;
                        display: none;
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background-color: white;
                        padding: 30px;
                        border: 2px solid #007bff;
                        border-radius: 10px;
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
                        z-index: 1000;
                        text-align: center;
                        max-width: 400px;
                        width: 90%;
                        animation: modalFadeIn 0.3s ease-out;
                }

                        /* 动画效果 */
                        @keyframes modalFadeIn {
                            from {
                            opacity: 0;
                        transform: translate(-50%, -60%);
                    }
                        to {
                            opacity: 1;
                        transform: translate(-50%, -50%);
                    }
                }

                        .modal h3 {
                            color: #007bff;
                        margin-top: 0;
                        font-size: 1.5em;
                }

                        .modal p {
                            color: #333;
                        font-size: 1.1em;
                        margin: 15px 0;
                }

                        .modal a {
                            display: inline-block;
                        background-color: #007bff;
                        color: white;
                        padding: 12px 24px;
                        text-decoration: none;
                        border-radius: 5px;
                        font-weight: bold;
                        transition: background-color 0.3s;
                        margin-top: 15px;
                }

                        .modal a:hover {
                            background - color: #0056b3;
                        transform: translateY(-2px);
                }

                        .close-btn {
                            background-color: #dc3545;
                        color: white;
                        border: none;
                        padding: 8px 16px;
                        border-radius: 5px;
                        cursor: pointer;
                        margin-top: 10px;
                        font-size: 14px;
                }

                        .close-btn:hover {
                            background-color: #c82333;
                }
                        `;
                        document.head.appendChild(style);
                        return style;
                    }

                    // 动态创建DOM元素
                    function createModalElements() {
                        // 创建遮罩层
                        const overlay = document.createElement('div');
                        overlay.id = 'overlay';
                        overlay.className = 'overlay';

                        // 创建悬浮窗
                        const modal = document.createElement('div');
                        modal.id = 'modal';
                        modal.className = 'modal';
                        modal.innerHTML = `
                        <h3>✅ 已复制M3U8文件地址</h3>
                        <p>1.点击下方按钮<span>跳转到在线解析网站 anyconv</>，<span>2.粘贴M3U8文件地址</>，3.然后点击<span>转换为MP4格式</>进行下载即可！<br><br>(P.S. 需要注意的是，使用在线解析下载长视频(大于128Mb)可能体验不佳或不如App，可查看更多下载方法选择合适的App下载长视频；点击页面上的非弹窗部分关闭本弹窗)</p>
                        <a href="https://anyconv.com/m3u8-to-mp4-converter/" target="_blank">跳转到下载网站 anyconv</a><br>
                        <a href="https://limbopro.com/archives/M3U8-Downloader.html" target="_blank">查看更多下载方法</a>
                        <!-- <br><button class="close-btn" onclick="closeModal()">关闭</button> --!>
                            `;

                        // 添加到页面
                        document.body.appendChild(overlay);
                        document.body.appendChild(modal);

                        return { overlay, modal };
                    }



                    // 执行函数
                    function executeFunction() {
                        document.getElementById('jablex').click()
                        console.log('函数已执行');

                        // 创建样式（只创建一次）
                        if (!document.querySelector('style[data-modal-styles]')) {
                            const style = createStyles();
                            style.setAttribute('data-modal-styles', 'true');
                        }

                        // 创建DOM元素（只创建一次）
                        if (!document.getElementById('modal')) {
                            createModalElements();
                        }

                        // 显示悬浮窗
                        showModal();
                    }

                    // 按钮点击事件
                    button.addEventListener('click', executeFunction);

                    // 点击遮罩层关闭悬浮窗
                    document.addEventListener('click', function (e) {
                        if (e.target.id === 'overlay') {
                            closeModal();
                        }
                    });

                    // ESC键关闭悬浮窗
                    document.addEventListener('keydown', function (e) {
                        if (e.key === 'Escape') {
                            closeModal();
                        }
                    });

                    // 显示悬浮窗
                    function showModal() {
                        const overlay = document.getElementById('overlay');
                        const modal = document.getElementById('modal');
                        if (overlay !== null)
                            overlay.style.display = 'block';
                        if (modal !== null)
                            modal.style.display = 'block';
                    }

                    // 关闭悬浮窗
                    function closeModal() {
                        const overlay = document.getElementById('overlay');
                        const modal = document.getElementById('modal');
                        if (overlay !== null)
                            overlay.style.display = 'none';
                        if (modal !== null)
                            modal.style.display = 'none';
                    }


                }, 4000);

            }


            break;
        case 'bdys':
            css_adsRemove(adsMax.css.btbdys, 0, "siwtch_button");
            css_adsRemove(adsMax.css.switch, 0, "switch_class")
            //videoAds_accelerateSkip(0.1); // 视频广告加速
            //setConstant(); // 视频广告加速
            hrefAttribute_set();

            if (document.querySelectorAll('li[data-increase]')[1] !== null) {
                document.querySelectorAll('li[data-increase]')[1].click()
            }

            var url = document.location.href;
            if (url == "https://www.bdys10.com/" || url == "https://www.bdys03.com/") {
                if (!document.getElementById("bdys")) {
                    ele_dynamicAppend("div.container-xl", "onclick", "隐藏公告", "position:inherit; right:92px;" + "padding: 6px 6px 6px 6px; display: inline-block; color: white;z-index: 114154 !important; border-right: 6px solid #38a3fd; border-left: #292f33 !important; border-top: #292f33 !important; border-bottom: #292f33 !important; background: #2563eb; border-radius: 0px 0px 0px 0px; font-weight: 800 !important; text-align: right !important;", "", "bdys", 1, "button");
                    addListenerById("bdys", () => { notice_hidden("div.col-12") }, 2000);
                }
                if (getCookie_("hidden") == 1) {
                    notice_hidden("div.col-12");
                }
            }
            break;
        case 'instagram':
            // 解除 Instagram 桌面浏览器版禁用右键复制图片
            css_adsRemove(adsMax.css.instagram);
            break;
        case 'ttsp':
            css_adsRemove(adsMax.css.ttsp);
            break;
        case 'tz659':
            css_adsRemove(adsMax.css.tz659);
            //tag_ads_traversal("body", 0)
            break;
        case 'anime1':
            css_adsRemove(adsMax.css.anime);
            break;
        case 'yhdmp':
            css_adsRemove(adsMax.css.yhdmp);
            break;
        case 'yhpdm':
            css_adsRemove(adsMax.css.yhdmp);
            break;
        case 'google':

            window.addEventListener('load', function () {
                css_adsRemove(adsMax.css.google);
                var userAgent = navigator.userAgent.toLowerCase();
                if (/\b(mobile)\b/i.test(userAgent)) {
                    js_adsRemove(adsMax.js.contentFarm);
                    console.log("getYou") // 手机用户 特别是苹果用户会正常加载内容农场脚本
                } else {
                    js_adsRemove(adsMax.js.contentFarm);
                    console.log("PC端") // 啥也不做
                }
            });

            //var goole_selector = "h3,#bres,[class*='AuVD wHYlTd mnr-c']";
            //setAttribute_after(goole_selector, "contentFarm_AdsRemove_Auto()");

            break;
        case 'bing':
            js_adsRemove(adsMax.js.contentFarm);
            break;

        case 'hltv':
            css_adsRemove(adsMax.css.hltv);
            noWindowOpenIf(); // no-window-open-if
            break;

        case 'nivod': // nbys 泥巴影视
            css_adsRemove(adsMax.css.nivod);
            hrefAttribute_set();
            setConstant('detailParams.is_ad_play', 'false'); // 泥巴影视PC版播放页视频广告加速
            evaldataPrune(); // 泥巴影视移动版播放页视频广告加速
            css_adsRemove(adsMax.css.nbys); // 网页图片广告
            setInterval(() => {
                remove_parentElement_by_child('view.nut-swiper-item.slider-item', "img[src*='1a732eeb1adb']");
                remove_parentElement_by_child('view.nut-swiper-item.slider-item', "img[src*='49e8abd32d13']");
                remove_parentElement_by_child('.qy20-h-carousel__ul', "span[style*='d92ea585-0']");
                remove_parentElement_by_child("li.qy20-h-carousel__li", "span[style*='0891']");
                remove_parentElement_by_child("li.qy20-h-carousel__li", "span[style*='1a2d']");
            }, 2000)
            break;
        case '91short':
            css_adsRemove(adsMax.css._91short);

            // 播放页GIF动图广告
            const player_info = document.querySelectorAll("div.player-info,li.nav-menu-item")
            for (i = 0; i < player_info.length; i++) {
                const selector = ['div > a[href][target=_blank]', 'a[href*=kyty]']
                if (player_info[i].querySelectorAll(selector).length >= 1) {
                    player_info[i].style = "display: none !important;";
                }
            }

            // 多余的高
            document.querySelector("div.highlight-box").style = "display: none !important;";
            addEventListener_defuser("touchend"); // 打断监听器
            break;

        case 'xiaobaotv':
            // nothing to do.
            break;
        case 'cupfoxapp':
            css_adsRemove(adsMax.css.cupfoxapp, 100, 'fuckcupfoxapp');
            break;
        case 'dmmiku':
            css_adsRemove(adsMax.css.dmmiku, 100, 'fuckdmmiku');
            window_open_defuser();
            //addEventListener_defuser();
            break;
        case 'bfdm':
            css_adsRemove(adsMax.css.bfdm, 100, 'fuckdmmiku');
            break;
        case 'iyf':

            css_adsRemove(adsMax.css.iyf, 100, 'fuckiyf');
            function iyf_css() {
                setTimeout(() => {
                    let iyf_css = "div.ad, .ad, .ad_tag, .dabf > .ng-star-inserted,vg-pause-f, .pggf > .ng-star-inserted"
                    document.querySelectorAll(iyf_css).forEach((x) => {
                        x.style = 'display:none;height:0px;'
                    })
                }, 1500)
            }

            //iyf_css();

            aopr();

            window.onload = function iyf_hd_switch() {

                if (document.querySelectorAll('li[data-v-7f52b4c5').length !== 0) {
                    document.querySelectorAll('span[data-v-7f52b4c5].leg.relative')[0].click()
                }

                setTimeout(() => {
                    let hd = document.querySelectorAll('li[data-v-7f52b4c5')
                    hd.forEach((x) => {
                        console.log(x.className)
                        if (x.className.search('vip|button') == -1) {
                            if (x.className !== 'active') {
                                x.click()
                                console.log('点击...')
                            }
                            console.log('此前已点击...')
                            if (document.querySelector('.van-overlay').style.display !== 'none'
                            ) {
                                document.querySelector('.van-overlay').click()
                            }
                        }
                    })
                }, 1500)
            }

            // .player-container .play_info
            function index(x, id) {
                if (document.querySelector(x) !== null) {

                    if (document.querySelector('#' + id) == null) {
                        let a = document.createElement('a')
                        a.href = 'https://www.iyf.tv/'
                        a.style = 'position:absolute;right:9px;top:0%;color:aqua;z-index:114154;'
                        a.id = id
                        a.textContent = '返回首页🏠'
                        let parentElement = document.querySelector(x)
                        parentElement.appendChild(a)
                        console.log('生成首页按钮')
                    }

                    if (document.querySelector('#' + id)) {
                        console.log('Got u!')
                    } else {
                        newx();
                    }

                }
            }

            function newx() {
                setTimeout(() => {
                    index('.play_info', 'iyf_index')
                    //index('div.player-container', 'iyf_news')
                }
                    , 1500)
            }

            newx();

            var currentUrl = window.location.href;
            setInterval(function () {
                if (window.location.href !== currentUrl) {
                    console.log('URL发生变化');
                    newx();
                    currentUrl = window.location.href;

                }
            }, 2000);

            videoAds_accelerateSkip(0.1); // 视频广告加速
            setConstant(); // 视频广告加速
            break;

        case 'cnys':
            // nothing to do.
            //videoAds_accelerateSkip(0.1); // 视频广告加速
            //setConstant(); // 视频广告加速
            css_adsRemove(adsMax.css.cnys, 0, 'cnys')

            if (document.querySelectorAll('iframe')[2] !== null && document.querySelectorAll('iframe')[2] !== undefined) {
                document.querySelectorAll('iframe')[2].style = 'opacity:0% !important; pointer-events: none !important;';
                setTimeout(() => {
                    document.querySelectorAll('iframe')[2].style = 'opacity:1 !important; pointer-events: auto !important;';
                    setTimeout(() => {
                        document.querySelectorAll('iframe')[2].contentWindow.document.querySelectorAll('body')[0].querySelectorAll('div#player_pause')[0].style = 'display:none !important';
                        setTimeout(() => {

                            //document.querySelectorAll('iframe')[2].contentWindow.document.querySelectorAll('body')[0].querySelectorAll('button.yzmplayer-icon.yzmplayer-play-icon')[0].click();

                            document.querySelectorAll('iframe')[2].contentWindow.document.querySelectorAll('body')[0].querySelectorAll('button.yzmplayer-icon.yzmplayer-play-icon')[0].addEventListener('touchend', function () {
                                setTimeout(() => {
                                    document.querySelectorAll('iframe')[2].contentWindow.document.querySelectorAll('body')[0].querySelectorAll('div#player_pause')[0].style = 'display:none !important';
                                }, 10);
                            });

                        }, 1000)
                    }, 3000)
                }, 7500)
            }

            //document.querySelectorAll('iframe')[2].contentWindow.document.querySelectorAll('body')[0].querySelectorAll('#ADtip')[0].style = 'display:none';

            break;

        case 'xiaoxintv':
            // nothing to do.
            adsDomain_switch("xiaobaotv")
            break;

        case 'javday':
            // nothing to do.
            css_adsRemove(adsMax.css.javday, 0, 'javday')
            break;
        case 'xvideos':

            setInterval(() => {
                if (!document.getElementById('xvideos_t')) {
                    css_adsRemove(adsMax.css.xvideos, 100, "xvideos_t");
                    noWindowOpenIf();
                } else {
                    noWindowOpenIf();
                }
            }, 1000)

            break;
        case 'javbus':
            css_adsRemove(adsMax.css.javbus, 0, "javbus");

            function javbus() { // 在番号详情页追加在线预览链接
                setTimeout(() => {
                    let father = 'h3';
                    let code = window.location.pathname.replace('/', '')
                    let url = window.location.href
                    let regx = /[a-zA-Z]{2,6}\-\d{2,5}/i

                    if (url.search(regx) !== -1) {
                        setTimeout(() => {
                            tmd(father, code, '在其他站点播放: ')
                        }, 1000)
                    } else {
                        console.log('当前网站不不匹配')
                    }
                }, 2000)
            }

            javbus()
            break;
        case 'javdb':

            css_adsRemove(adsMax.css.javdb, 0, "javdb");
            setTimeout(() => {
                const javCode = document.querySelector('.copy-to-clipboard')?.dataset.clipboardText
                    || document.querySelector('.panel-block.first-block .value')?.textContent.trim();
                console.log(javCode); // NTSU-156

                if (javCode !== null) {
                    tmd_land('h2.title', javCode, '在其他站点播放: ')
                }
            }, 1000)

            break;

        case 'av.jkforum.net':
            css_adsRemove(adsMax.css.jkforum, 0, "jkforum");
            break;

        case 'jav.land': // 444
            css_adsRemove(adsMax.css.javland, 0, "javland");

            function jav() {
                if (document.querySelectorAll('td[width="80%"]')[1] !== null) {
                    let code = document.querySelectorAll('td[width="80%"]')[1].textContent
                    setTimeout(() => {
                        tmd_land('.col-md-6.col-sm-12.col-xs-12', code, '在线预览: ');
                    }, 100)
                }
            }

            jav();

            break;
        case "4hu":
            css_adsRemove(adsMax.css._4hu);
            hrefAttribute_set();
            break;
        case "netflav":
            window_open_defuser(); // 打断 window.open 施法
            css_adsRemove(adsMax.css.netflav, 0, "4hu");
            break;
        case "filemoon":
            window_open_defuser(); // 打断 window.open 施法
            break;
        case "embedrise":
            window_open_defuser(); // 打断 window.open 施法
            break;
        case "mmfl02":
            window_open_defuser(); // 打断 window.open 施法
            break;
        case "mmsw02":
            window_open_defuser(); // 打断 window.open 施法
            break;
        case "emturbovid":
            window_open_defuser(); // 打断 window.open 施法
            break;
        case "netflavns1":
            window_open_defuser(); // 打断 window.open 施法
            css_adsRemove(adsMax.css.js_common, 50, 'common');
            break;
        case "netflavns2":
            window_open_defuser(); // 打断 window.open 施法
            break;
        case "fc2stream":
        case "turbovidhls.com":
        case 'trailerhg.xyz':            // 预告片/镜像站
        case 'turboplayers.xyz':         // Turbo 播放器
        case 'javggvideo.xyz':           // JAV 视频托管
        case 'turtleviplay.xyz':         // Turtle VIPlay
        case 'findjav.com':              // JAV 搜索站
        case 'stbturbo.xyz':             // STB Turbo 视频
        case 'emturbovid.com':           // EM TurboVid
            // 在这里添加你的处理逻辑（如注入 scriptlet）
            window_open_defuser(); // 打断 window.open 施法
            abort_on_property_read('__Y');
            break;
        case "javplayer":
            adsDomain_switch("fc2stream")
            break;
        case "supjav":
            css_adsRemove(adsMax.css.supjav, 0, "superjav");

            window.onload = function () {
                if (document.location.href.search('/?s\=') !== -1) {
                    let regex = /.*\/\?s=/;
                    let code = window.location.href.replace(regex, '').replace('/', '').toLowerCase();
                    setTimeout(() => {
                        tmd('div.archive-title', code, '试试其他搜索：');
                    }, 2000)
                    console.log("生成搜索链接🔗");
                }

                if (document.querySelector('#player-wrap') !== null) { // 在其他站点播放
                    var regex = /[a-zA-Z]{3,5}\-\d{3,5}/i
                    var code = document.querySelectorAll('title')[0].innerText.match(regex)[0]
                    setTimeout(() => {

                        if (document.querySelector('#p1') == null) {
                            console.log('开始生成在线预览链接...')
                            tmd('h1', code, '在其他站点播放：');
                        }

                    }, 2000)
                }

            }()

            //noWindowOpenIf('window.open')
            //noWindowOpenIf('touchend')
            window_open_defuser(); // 打断 window.open 施法

            break;
        case "njav":
            css_adsRemove(adsMax.css.njav, 0, 'njav');
            js_adsRemove(uBlockOrigin.setconstant);
            js_adsRemove(uBlockOrigin.nowindowopenif);
            noWindowOpenIf('window.open')
            noWindowOpenIf('touchend')
            window_open_defuser(); // 打断 window.open 施法
            break;

        case "hitomi":
            css_adsRemove(adsMax.css.hitomi);
            window_open_defuser();
            abort_on_property_read();
            js_adsRemove(uBlockOrigin.addEventListenerdefuser);
            //addEventListener_defuser();
            js_adsRemove(uBlockOrigin.noevalif);
            break;

        case "hanime1":
            css_adsRemove(adsMax.css.hanime1);
            const div = document.querySelectorAll('div.hidden-xs.hidden-sm')
            // PC 端div元素广告移除
            for (i = 0; i < div.length; i++) {
                if (div[i].querySelectorAll('iframe').length > 0) {
                    div[i].style = "display: none !important;";
                }
            }

            break;

        case "javlibrary":

            window.addEventListener('load', function () {


                async function onPageLoad() {
                    await waitForPageLoad();
                    console.log('网页所有元素已加载完毕');
                    // 在此执行你的代码

                    css_adsRemove(adsMax.css.javlibrary)
                    window_open_defuser(); // 打断 window.open 施法
                    abort_on_property_read();
                    js_adsRemove(uBlockOrigin.addEventListenerdefuser);
                    js_adsRemove(uBlockOrigin.noevalif);

                    if (/\b(https:\/\/www.javlibrary.com\/.*?)(\/videoreviews.php)(\?.*)(&mode=2)\b/i.test(window.location.href.toLowerCase())) {
                        console.log(window.location.href.toLowerCase())
                        let url_jav_rewrite = window.location.href.toLowerCase().replace(/(videoreviews.php)/i, '').replace(/(&mode=2)/i, '')
                        console.log(url_jav_rewrite)
                        window.location.replace(url_jav_rewrite)
                    }

                    function javlibrary() {
                        // '#topmenu', 'div.menutext', '.searchbar',
                        css_adsRemove(adsMax.css.javlibrary);
                        var target_ = ['#rightcolumn', '.videothumblist', '.titlebox', '.menutext']

                        if (window.innerWidth < 650) {
                            console.log("现在执行缩小任务")
                            function ifAdd(target) {
                                if (document.querySelectorAll(target)[0]) {
                                    document.querySelectorAll(target)[0].classList.add('whenmobile')
                                }
                            }
                            target_.forEach(ifAdd);
                            if (document.querySelector('div#rightcolumn')) {
                                var parentElement = document.querySelector('div#rightcolumn')
                                if (document.querySelectorAll("td[style='vertical-align: top;']")[1]) {
                                    var child = document.querySelectorAll("td[style='vertical-align: top;']")[1];
                                }
                                if (document.querySelector('div.socialmedia')) {
                                    var insertBeforethisgay = document.querySelector('div.socialmedia');
                                }

                                if ((child) && (parentElement) && (insertBeforethisgay)) {
                                    parentElement.insertBefore(child, insertBeforethisgay)
                                }
                                document.querySelectorAll('td.t>div').forEach((x) => {
                                    x.style.width = 'auto';

                                })
                            }

                            if (document.querySelector('div#video_title')) {
                                document.querySelector('#rightcolumn').style.width = window.innerWidth - 90 + "px"
                                document.querySelector('div#video_favorite_edit').style.width = '250px'
                            }
                        } else {
                            console.log("现在执行扩大任务")
                            if (document.querySelector('div#video_title')) {
                                document.querySelector('#rightcolumn').style.width = window.innerWidth + "px"
                                document.querySelector('div#video_favorite_edit').style.width = 'auto'
                            }
                            function ifRemove(target) {
                                if (document.querySelectorAll(target)[0]) {
                                    document.querySelectorAll(target)[0].classList.remove('whenmobile')
                                }
                            }
                            target_.forEach(ifRemove);
                        }
                    }

                    javlibrary(); // 2333

                    zjpl()
                    function zjpl() {
                        setTimeout(() => { // 最佳评论页 调换位置
                            javlibrary();
                            if (document.querySelectorAll('td.info')[0]) {
                                document.querySelectorAll('td.info').forEach((x) => {
                                    x.style.width = "60px"
                                    x.querySelectorAll('*').forEach((y) => {
                                        //     y.style.width = "60px"
                                    })
                                })

                                var ff = document.querySelectorAll("table.comment > tbody > tr");
                                for (i = 0; i < ff.length; i++) {
                                    ff[i].insertBefore(ff[i].querySelectorAll('td')[1], ff[i].querySelectorAll('td')[0])
                                }
                            }
                        }, 1500)
                    }

                    function javLibrary_links() { // 在番号详情页追加在线预览链接

                        setTimeout(() => {
                            let father = 'div#video_title'
                            //let code = window.location.pathname.replace('/', '')
                            let code = document.querySelectorAll('td.text')[0].textContent

                            let url = window.location.href
                            //let regx = /[a-zA-Z]{3,5}\-\d{3,5}/i
                            let regx = /www\.javlibrary\.com\/cn\/\?v\=jav/i

                            if (url.search(regx) !== -1) {
                                tmd(father, code, '在线预览: ')
                            } else {
                                console.log('当前网站不不匹配')
                            }
                        }, 2000)
                    }

                    javLibrary_links()

                }


                function waitForPageLoad() {
                    return new Promise((resolve) => {
                        if (document.readyState === 'complete') {
                            resolve();
                        } else {
                            window.addEventListener('load', () => resolve(), { once: true });
                        }
                    });
                }

                onPageLoad();

            });

            break;

        case 'douban':
            if (document.querySelectorAll('a.Ims1t')[0]) {
                alert("首页...")
                document.querySelectorAll('a.Ims1t').forEach((x) => { x.href = 'https://movie.douban.com/top250' })
            }
            break;
        case 'zhihu':
            var zhihu_id = "zhihux"
            button_dynamicRemove("[class='Button Modal-closeButton Button--plain']", 10);
            css_adsRemove(adsMax.css.zhihuAds, 100, "hloyx");
            indexLogin();
            addListener("div.TopNavBar-tab-d8yaD", () => { indexLogin() });
            break;
        case 'olevod':
            css_adsRemove(adsMax.css.olevod, 0, 'fuckolevod');
            setTimeout(() => {
                onAdsHide()
            }, 500)
            break;

        case 'play.huaren.live':

            //setConstant('ConFig.config.ads', '{}'); // huaren影视PC版播放页视频广告加速
            css_adsRemove(adsMax.css.huaren_live, 200, 'huaren');
            ConFig.config.ads = {};

            break;

        case 'huaren.live':
            css_adsRemove(adsMax.css.huaren_live, 200, 'huaren');
            //noWindowOpenIf();
            break;

        case 'rouman':
            css_adsRemove(adsMax.css.rouman, 100, 'roumanx');

            setTimeout(() => {
                document.querySelectorAll("div[class*='modalCloseButton']")[0].click()
            }, 500)
            break;

        case 'rou.video':
            css_adsRemove(adsMax.css.rouvideo, 100, 'roumanx');
            css_adsRemove(adsMax.css.rouvideo, 500, 'roumanx');
            window_open_defuser(); // 打断 window.open 施法

            try {
                // 可能会抛出异常的代码
                setTimeout(() => {
                    if (document.querySelector('.modalCloseButton') !== null) {
                        document.querySelector('.modalCloseButton').click()
                    }
                    console.log('模态窗口已关闭');
                }, 1500)

                setTimeout(() => {
                    if (document.querySelector('button.close-button--wsOv0') !== null) {
                        document.querySelector('button.close-button--wsOv0').click()
                    }
                    console.log('模态窗口已关闭');
                }, 1500)

            } catch (error) {
                // 发生异常时执行的代码
                console.error('发生错误:', error);
            } finally {
                // 可选，无论是否发生异常都会执行
                console.log('finally 块总会执行');
            }

            break;

        case 'novel543':
            css_adsRemove(adsMax.css.novel543, 100, 'novel543x');
            break;

        case 'diyibanzhu':
            css_adsRemove(adsMax.css.diyibanzhu, 100, 'diyibanzhu');
            window_open_defuser(); // 打断 window.open 施法
            break;

        case 'alicesw':
            css_adsRemove(adsMax.css.alicesw, 100, 'alicesw');
            break;
        case 'bi-girl': // bigirl
            css_adsRemove(adsMax.css.bigirl, 500, 'bigirl')
            js_adsRemove(uBlockOrigin.noevalif);
            break;

        case 'op.gg': // op.gg
            css_adsRemove(adsMax.css.opgg, 500, 'bigirl')
            js_adsRemove(uBlockOrigin.noevalif);
            break;

        case 'dmm.co.jp':

            // 在番号详情页追加在线预览链接
            // https://video.dmm.co.jp/
            window.addEventListener('load', function () {

                // 在番号详情页追加在线预览链接
                // https://video.dmm.co.jp/

                setTimeout(() => {
                    extractAndGenerateLinks() // 执行函数
                }, 1500); // 等待页面加载完成

                var currentUrl = location.href;
                setInterval(function () {
                    if (currentUrl !== location.href) {
                        console.log('URL 改变了！新 URL:', location.href);
                        currentUrl = location.href;
                        // 执行你的逻辑
                        setTimeout(() => {
                            extractAndGenerateLinks() // 执行函数
                        }, 1500); // 等待页面加载完成
                    }
                }, 2000);  // 每 100ms 检查一次，频率可调整

                function isMobile() {
                    // 判断是否为移动设备
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                }

                function extractCodeFromUrl() {
                    const url = window.location.href;
                    console.log(`当前URL: ${url}`);

                    const match = url.match(/id=([^&#?]+)/);
                    if (!match || !match[1]) {
                        console.warn("URL 中未找到有效的 id 参数");
                        return null;
                    }

                    let idValue = match[1];
                    // 移除前缀（如 h_1100），提取字母和数字部分
                    let cid = idValue.replace(/^(h_\d+)?([a-zA-Z]+)(\d+)$/, '$2$3');
                    if (!cid) {
                        console.warn("处理后的 cid 为空");
                        return null;
                    }

                    // 分离字母和数字
                    const parts = cid.match(/([a-zA-Z]+)(\d+)/);
                    if (!parts) {
                        console.warn("cid 格式不符合预期");
                        return null;
                    }

                    const prefix = parts[1]; // 字母部分
                    const number = parseInt(parts[2], 10); // 转换为整数
                    // 格式化为 3 位数字，补前导零
                    const formattedNumber = number.toString().padStart(3, '0');
                    let code_dmm = `${prefix}-${formattedNumber}`;

                    console.log(`cid: ${cid}`);
                    console.log(`code_dmm: ${code_dmm}`);
                    return code_dmm;
                }


                function extractAndGenerateLinks() { // 番号提取及链接生成

                    console.log("执行 extractAndGenerateLinks() 函数");

                    // 如果 extractCodeFromUrl() 返回 false，直接退出
                    const code = extractCodeFromUrl();
                    if (!code) return;

                    const url = window.location.href;
                    const isMobileDevice = isMobile();
                    const isContentPage = url.includes('/content/') || url.includes('dightal');
                    const isMonthlyPage = url.includes('/monthly/');

                    // 如果 #p1 存在，直接退出
                    if (document.querySelector('#p1')) return;

                    try {
                        let selector;
                        if (isMobileDevice) {
                            selector = isContentPage ? 'h1 > span' : isMonthlyPage ? 'h1' : null;
                        } else {
                            selector = isContentPage ? 'h1' : isMonthlyPage ? 'div.bx-detail-player-sampleMovie' : null;
                            console.log(`${isContentPage ? '/content/' : '/monthly/'} ${selector}`);
                        }

                        if (selector) {
                            console.log('开始生成在线预览链接...');
                            tmd(selector, code, '在其他站点播放：');
                        }
                    } catch (e) {
                        console.error(`Error in ${isMobileDevice ? 'mobile' : 'PC'}:`, e);
                    }
                }

                // 在 DMM 同人页面添加搜索链接

                // 获取 h1 文本（排除 <span> 内容和限定/版本等字眼，增强鲁棒性）
                function getH1Text(selector) {
                    try {
                        const element = document.querySelector(selector);
                        if (!element) {
                            console.warn('No element found with selector:', selector);
                            return '';
                        }

                        function extractText(node) {
                            let text = '';
                            node.childNodes.forEach(child => {
                                if (child.nodeType === Node.TEXT_NODE) {
                                    text += child.textContent.trim();
                                } else if (child.nodeType === Node.ELEMENT_NODE && child.tagName.toLowerCase() !== 'span') {
                                    text += extractText(child);
                                }
                            });
                            return text;
                        }

                        let textContent = extractText(element);
                        if (!textContent) {
                            console.warn('No valid text content found in element with selector:', selector);
                            return '';
                        }

                        // 过滤包含“限定”“版本”等字眼的文本
                        const filterPatterns = [
                            /【[^】]*限定[^】]*】/g, // 匹配如【FANZA限定版】
                            /【[^】]*版[^】]*】/g,   // 匹配如【特别版】
                            /限定版/g,                // 匹配限定版
                            /特別版/g,                // 匹配特别版
                            /版/g                     // 匹配单独的“版”
                        ];

                        filterPatterns.forEach(pattern => {
                            textContent = textContent.replace(pattern, '').trim();
                        });

                        if (!textContent) {
                            console.warn('Text content is empty after filtering:', selector);
                            return '';
                        }

                        return textContent;
                    } catch (error) {
                        console.error('Error extracting text:', error);
                        return '';
                    }
                }

                // 添加搜索链接功能
                function addDmmDoujinSearchLink(parentsSelector, h1Text, linkLabel) {
                    // 检查是否为 DMM 同人页面 URL
                    function isDmmDoujinUrl() {
                        return window.location.href.startsWith('https://www.dmm.co.jp/dc/doujin/');
                    }

                    // 创建并添加搜索链接
                    function createSearchLinks(parentElement, textContent, h1Text) {
                        if (!parentElement) {
                            console.warn(`Parent element not found with selector: ${parentsSelector}`);
                            return;
                        }

                        // 检查是否已存在 ID 为 p1 的元素
                        if (document.getElementById('p1')) {
                            console.log('Search links already exist, skipping.');
                            return;
                        }

                        // 创建 p1 容器
                        const p1 = document.createElement('p');
                        p1.id = 'p1';
                        p1.style.cssText = 'height:fit-content; margin:10px 0px 0px 0px; border-left:6px solid #38a3fd; font-size:14px; border-radius:4px !important; box-shadow:rgb(151, 151, 151) 0px 0px 0px 0px inset; background:#10141f; color:chocolate; padding:0px; word-break:break-all; border-radius:0px';

                        // 创建 p2 容器
                        const p2 = document.createElement('p');
                        p2.id = 'p2';
                        p2.style.cssText = 'background:black; padding-left:6px; font-weight:inherit; padding:6px; word-break:break-all; font-size:inherit; border-radius:0px';

                        p1.appendChild(p2);
                        parentElement.appendChild(p1);

                        // 添加标题
                        const span = document.createElement('span');
                        span.style.cssText = 'font-weight:bolder; font-size:medium; color:bisque;';
                        span.textContent = textContent;
                        p2.appendChild(span);

                        // 添加单个搜索链接
                        function appendSearchLink(siteName, url, query) {
                            const a = document.createElement('a');
                            const label = document.createElement('label');
                            label.style.cssText = 'font-weight:inherit; display:inline-block; max-width:100%; margin-right:10px;';
                            a.href = url + encodeURIComponent(query);
                            a.textContent = siteName;
                            a.target = '_blank';
                            a.style.cssText = 'color:inherit; font-weight:inherit';
                            label.appendChild(a);
                            p2.appendChild(label);
                        }

                        const searchSites = [
                            { name: 'Hitomi[HD]', url: 'https://www.google.com/search?q=', query: `site:hitomi.la ${h1Text}` },
                            { name: '禁漫天堂[HD]', url: 'https://www.google.com/search?q=', query: `site:18comic.vip ${h1Text}` },
                            { name: '绅士漫画[HD]', url: 'https://www.google.com/search?q=', query: `site:www.wnacg.com ${h1Text}` },
                            { name: 'Google🔍', url: 'https://www.google.com/search?q=', query: `${h1Text}` }
                        ];

                        searchSites.forEach(site => appendSearchLink(site.name, site.url, site.query));
                        console.log('Search links generated successfully.');
                    }

                    // 主逻辑：执行搜索链接添加
                    function executeSearch() {
                        if (!isDmmDoujinUrl()) {
                            console.log('This function can only be executed on https://www.dmm.co.jp/dc/doujin/ and its subpages.');
                            return;
                        }

                        const parentElement = document.querySelector(parentsSelector);
                        createSearchLinks(parentElement, linkLabel, h1Text);
                    }

                    // 使用 MutationObserver 检测 DOM 加载
                    function observeDomLoad() {
                        const targetNode = document.body;
                        if (!targetNode) {
                            console.warn('Document body not found.');
                            return;
                        }

                        const observer = new MutationObserver((mutations, obs) => {
                            const parentElement = document.querySelector(parentsSelector);
                            if (parentElement) {
                                executeSearch();
                                obs.disconnect();
                            }
                        });

                        observer.observe(targetNode, {
                            childList: true,
                            subtree: true
                        });

                        // 超时 5 秒后停止观察
                        setTimeout(() => {
                            observer.disconnect();
                            executeSearch();
                        }, 5000);
                    }

                    // 启动观察
                    observeDomLoad();
                }

                // 主逻辑：初始化脚本
                function initDmmSearchLinks() {
                    if (!window.location.href.startsWith('https://www.dmm.co.jp/dc/doujin/')) {
                        console.log('Page is not under https://www.dmm.co.jp/dc/doujin/, script not executed.');
                        return;
                    }

                    // 尝试两种可能的 h1 选择器
                    const selectors = ['h1.productTitle__txt', 'header.detail_header'];
                    let h1Text = '';
                    let selectedSelector = '';

                    for (const selector of selectors) {
                        h1Text = getH1Text(selector);
                        if (h1Text) {
                            selectedSelector = selector;
                            break;
                        }
                    }

                    if (!h1Text) {
                        console.warn('No valid h1 text found with selectors:', selectors.join(', '));
                        return;
                    }

                    addDmmDoujinSearchLink(selectedSelector, h1Text, '试试其他搜索：');
                }

                // 执行脚本
                try {
                    initDmmSearchLinks();
                } catch (error) {
                    console.error('Error initializing DMM search links:', error);
                }

            });

            break;


        case 'missav':

            window.addEventListener('load', function () {

                // 你要追加的 CSS 内容
                const css = `
                @media (min-width: 640px) {
               .sm\\:hidden {
        display: flex !important;
      }
    }
  `
                // 方法 1：使用 <style> 标签（推荐，兼容性好）
                const styleSheet = document.createElement('style');
                styleSheet.textContent = css;
                //document.head.appendChild(styleSheet);

                window.onload = function () {
                    if (document.location.href.search('search') !== -1) {
                        let regex = /.*\/search\//;
                        let code = window.location.pathname.replace(regex, '').replace('/', '').toLowerCase()
                        setTimeout(() => {
                            tmd('h1', code, '试试其他搜索：');
                        }, 2000)
                        console.log("生成搜索链接🔗");
                    }


                    setTimeout(() => {
                        if (document.querySelector('.plyr__poster') !== null) { // 播放页插入其他站点播放链接
                            let code = document.querySelectorAll('span.font-medium')[0].textContent;
                            if (document.querySelector('#p1') == null) {
                                console.log('开始生成在线预览链接...')
                                tmd('h1.text-base', code, '在其他站点播放：');
                            }
                            console.log("生成在其他站点播放链接🔗");
                        }
                    }, 2500)

                }()

                css_adsRemove(adsMax.css.missav, 100, 'missavx');
                window_open_defuser(); // 打断 window.open 施法
                var ua_missav = navigator.userAgent.toLowerCase();
                var mobile_missav = "mobile";
                //cloudflare_captchaBypass();

                setTimeout(() => {

                    // 在浏览器控制台直接运行即可
                    (function () {
                        const videos = document.querySelectorAll('video');
                        for (let video of videos) {
                            if (video.src && video.src.includes('.m3u8')) {
                                console.log('直接 src 是 m3u8:', video.src);
                                //alert(video.src);

                                window.m3u8SRC = video.src // 获取src
                                return video.src; //
                            }

                            // hls.js / video.js / 大部分播放器都会把实例挂在 video.hls 或 video.player 上
                            if (video.hls && video.hls.url) {
                                console.log('hls.js url:', video.hls.url);
                                //alert(video.hls.url);
                                //mp4URL = video.hls.url
                                return video.hls.url;
                            }
                            if (video.hls && typeof video.hls.currentLevel === 'object') {
                                console.log('hls.js url:', video.hls.config.loader.config.url || video.hls.levels[video.hls.currentLevel]?.url);
                            }

                            // 有些站点用的是 xgplayer、dplayer、ckplayer 等
                            if (window.player && player.currentSrc) {
                                console.log('player.currentSrc:', player.currentSrc());
                            }
                            if (window.hls && hls.url) {
                                console.log('全局 hls.url:', hls.url);
                            }
                        }
                    })();

                    var button_download = document.createElement('button')
                    button_download.style = "margin-left: 0px; margin-top: 5px; position: static; font-size: smaller !important; background: #2563eb !important; margin-right: 5px; padding: 6px 6px 6px 6px; display: inline-block; color: white; border-right: 6px solid #38a3fd; border-left: #292f33 !important; border-top: #292f33 !important; border-bottom: #292f33 !important; background: #2563eb; border-radius: 0px 0px 0px 0px; font-weight: 800 !important; text-align: right !important;"

                    /*if (hls.url.indexOf('.mp4') !== -1) {
                        button_download.textContent = '复制视频下载地址'
                    } else {
                        button_download.textContent = '复制M3U8文件地址'
                    }

*/
                    button_download.textContent = '复制M3U8文件地址'

                    button_download.id = 'copyURL'

                    button_download.addEventListener('click', (() => {

                        //alert('wtf')
                        if (window.m3u8SRC) {
                            const textarea = document.createElement('textarea') // 创建 textarea 元素 并将选中内容填充进去
                            textarea.id = 'fuck91porn'
                            document.querySelector('#copyURL').appendChild(textarea)
                            textarea.value = window.m3u8SRC
                            textarea.select();
                            document.execCommand('copy', true); // 执行复制
                            document.querySelector('#copyURL').classList.add('copysuccess')  // 复制成功提醒
                            document.querySelector('#copyURL').textContent = '复制成功'

                            setTimeout(() => { // ↩️按钮恢复原状
                                document.querySelector('#copyURL').classList.remove('copysuccess')
                                document.querySelector('#copyURL').textContent = '复制M3U8文件地址'
                            }, 2500)

                            if (document.getElementById('fuck91porn')) { // 删除刚刚创建的 textarea 元素
                                document.getElementById('ffuck91porn').remove()
                            }
                        } else {
                            alert('未找到视频下载地址！')
                        }
                    }))

                    let cssText = "font-size: smaller !important; background: #2563eb !important; left: 0px; top: 110px; margin-right: 5px; margin-top: 5px;" + "padding: 6px 6px 6px 6px; display: inline-block; color: white;z-index: 114154 !important; border-right: 6px solid #38a3fd; border-left: #292f33 !important; border-top: #292f33 !important; border-bottom: #292f33 !important; background: #2563eb; border-radius: 0px 0px 0px 0px; font-weight: 800 !important; text-align: right !important;"

                    if (ua_missav.indexOf(mobile_missav) === -1) {

                        if (document.querySelector('div.mt-4') !== null && document.querySelector('div.mt-4').querySelector('h1') !== null && document.querySelector('#how') === null) {
                            ele_dynamicAppend("div.mt-4", "onclick", "离开页面视频继续播放", cssText, "", "missavX", 2, "button");
                            ele_dynamicAppend("div.mt-4", "onclick", "暂停", cssText, "", "missavP", 3, "button");
                            document.querySelector('div.mt-4').insertBefore(button_download, document.querySelector('div.mt-4').children[3])
                            ele_dynamicAppend("div.mt-4", "href", "如何下载本视频？", cssText, "https://limbopro.com/archives/M3U8-Downloader.html", "how", 5, "a");
                        }

                        if (document.getElementById("how") !== null) {
                            document.getElementById("how").target = "_blank";
                        }

                        // 添加监听器
                        if (document.getElementById("missavX")) {
                            addListenerById("missavX", () => { video_loopPlay('loop') }, 1000);
                        }

                        if (document.getElementById("missavP")) {
                            addListenerById("missavP", () => { video_loopPlay('pause') }, 1000);
                        }



                        fastForward('[playsinline][data-poster]', 'div.flex-1.order-first > div[x-init]') // 快进快退

                    } else if (ua_missav.indexOf(mobile_missav) > -1 && document.querySelector('#missavFullScreen') === null) {
                        ele_dynamicAppend("div.mt-4", "onclick", "免广告播放", cssText, "video_Play()", "missavX", 0, "button");
                        ele_dynamicAppend("div.mt-4", "onclick", "进入全屏", cssText, "fullscreen()", "missavFullScreen", 2, "button");
                        ele_dynamicAppend("div.mt-4", "onclick", "暂停", cssText, "video_pause()", "missavPause", 1, "button");
                        ele_dynamicAppend("div.mt-4", "href", "如何下载本视频？", cssText, "https://limbopro.com/archives/M3U8-Downloader.html", "how", 4, "a");
                        document.querySelector('div.mt-4').insertBefore(button_download, document.querySelector('div.mt-4').children[3])
                        // 添加监听器

                        if (document.getElementById("how") !== null) {
                            document.getElementById("how").target = "_blank";
                        }

                        addListenerById("missavX", () => { video_Play() }, 1000);
                        addListenerById("missavFullScreen", () => { fullscreen() }, 1000);
                        addListenerById("missavPause", () => { video_pause() }, 1000);
                    }
                }, 3000)


                if (window.innerWidth > 640) {
                    fastForward('[playsinline][data-poster]', 'div.flex-1.order-first > div[x-init]') // 快进快退
                }

                document.querySelectorAll('div.grid').forEach(
                    (x) => {
                        if (x.querySelector('img[src*="mio.jpg"]')) { // 移除 missav 播放页广告
                            x.style = 'display:none !important;'
                        }
                    }
                )

            });

            break;

        default:
            // 修正 case 中 default 的匹配规则  10.25.203
            if (/\b(netflav|missav|jable)\b/i.test(window.location.href.toLowerCase())) {
                if (document.querySelector('video')) {
                    abort_on_property_read('__Y');
                    window_open_defuser(); // 打断 window.open 施法
                }
            }

            console.log("Catch Nothing! DEFAULT!");
        //alert('DEFAULT!CATCH!')
    }
}

adsDomain_switch(values()) // 动手吧


/* Start */
/*如若需同步至 https://greasyfork.org/zh-CN 则需将本常量删除；
这将导致审核不通过且脚本有被 GreasyFork 管理员 删除的风险；
*/

// uBlock Origin 脚本添加
function uBlockOrigin_add() {
    js_adsRemove(uBlockOrigin.chn0abortcurrentscript);
    js_adsRemove(uBlockOrigin.chn0setconstant);
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

/* End */

function daohang_build() { // 如果导航按钮不存在，则引入外部脚本进行创建;
    var ua = navigator.userAgent; // 如果浏览器UA为Bot 则不加载导航...
    if (ua.indexOf("Chrome-Lighthouse") == -1
        && ua.indexOf("Googlebot") == -1
        && ua.indexOf("bot") == -1) {
        var csp_regex = new RegExp(/\b(twitter|xvideos)\b/i);
        //if (!(csp_regex.test(window.location.href.toLowerCase()))) {
        if (csp_regex.test(window.location.href.toLowerCase()) && !(/\b(mobile)\b/i.test(navigator.userAgent.toLowerCase()))) {
            console.log('CSP + PC, SO DO NOTING.')
        } else if (window.location.href.toLowerCase().indexOf('-9-1p-o-r-n') !== -1) { // 符合条件的不引入导航按钮
            console.log('SO DO NOTING.')
        } else {
            let daohang = setInterval(() => {
                if (!((document.querySelector("button#x4Home")) && (document.querySelector("script[src*='Adblock4limbo.function.js']")))) {
                    third_party_fileX("script", adsMax.js.functionx, "body"); // js 外部引用 标签 <script>
                    console.log('functionx.js 首次引用成功，等待生效...')
                    clearInterval(daohang);
                } else if (document.querySelectorAll("button#x4Home").length >= 1) {
                    clearInterval(daohang);
                    console.log('functionx.js 引用成功，等待生效...')
                }
            }, 500);
        }
    }
}





// 按根据父元素是否包含子元素而删除父元素
function remove_parentElement_by_child(parentElement, child) {
    let remove_parentElement_by_child_interval = setInterval(() => {
        if (document.querySelector(parentElement + ">" + child)) {
            document.querySelectorAll(parentElement).forEach((x) => {
                if (x.querySelector(child)) {
                    x.remove();
                    clearInterval(remove_parentElement_by_child_interval);
                }
            })
        }
    }, 1000)
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
            nodelists[i].style = "display: none !important;"
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
            div[x].style = "display: none !important; pointer-events: none !important;"
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

// 在页面动态插入元素并赋予相应元素

function ele_dynamicAppend(selector, attribute, txt, style, func, id, array, tag) {
    let new_ele = document.createElement(tag);
    new_ele.innerHTML = txt;
    new_ele.setAttribute(attribute, func);
    new_ele.setAttribute("id", id);
    new_ele.setAttribute("style", style);
    var here = document.querySelectorAll(selector);
    if (here.length > 0) {
        here[0].insertBefore(new_ele, here[0].childNodes[array])
        //here[0].appendChild(new_ele);
        console.log("按钮已添加")
    }
}


// Cloudflare recaptcha 绕过
function cloudflare_captchaBypass() {
    var title = document.title;
    if (title.search("Cloudflare") !== -1 || title.search("Attention") !== -1) {
        window.location.reload();
        console.log("captchaBypass done;")
    };
}


// missav 广告移除后导致的空白
function div_ad_missav() {
    let div_ad = document.querySelectorAll('div.mx-auto[style]')
    for (i = 0; i < div_ad.length; i++) {
        if (div_ad[i].querySelectorAll('[target=\'_blank\']').length >= 1) {
            div_ad[i].style.height = '0px'
        }
    }
}


function fileDownload(url, download = true) {
    function getFileName(url) {
        const name = url.split('/');
        return name.pop();
    }

    const filename = getFileName(url);
    fetch(url)
        .then(response => {
            return response.blob();
        })
        .then(blob => {
            const blobUrl = window.URL.createObjectURL(blob);
            const tempLink = document.createElement('a');
            tempLink.style.display = 'none';
            tempLink.href = blobUrl;
            if (download) {
                //下载
                tempLink.setAttribute('download', filename);
            } else {
                //预览
                tempLink.setAttribute('target', '_blank');
            }

            document.body.appendChild(tempLink);
            tempLink.click();
            setTimeout(() => {
                URL.revokeObjectURL(blobUrl);
                document.body.removeChild(tempLink);
            }, 500)
        })
}



function _91porny_dl() {

    const element = document.querySelector('div.videoPlayContainer div[data-src]');
    if (element && element.dataset.src) {
        console.log(element.dataset.src);
        // 执行你的逻辑


        {

            var css = document.createElement('style')
            css.innerHTML = '.copysuccess {background:green !important;color:white !important;}'
            css.id = 'porn91'
            document.body.appendChild(css)

            if (document.getElementById('copyURL') == null) {
                var mp4URL = document.querySelector('div.videoPlayContainer  div[data-src]').dataset.src
                var mp4Download = document.createElement('a')
                mp4Download.download = document.title.toString()
                mp4Download.target = '_blank'
                mp4Download.id = 'mp4Download'
                mp4Download.href = mp4URL

                if ((/\b(android|iphone|ipad|ipod)\b/i.test(navigator.userAgent.toLowerCase()))) {
                    mp4Download.textContent = '无广播放'
                } else {
                    mp4Download.textContent = '下载M3U8文件'
                }

                var button_download = document.createElement('button')
                button_download.style = 'font-size:12px; padding:10px; position:static;right:0px;top:216px;border:0px; background:#3286cd;color:white;font-weight:bolder;height:38px;'
                button_download.textContent = '复制本视频的M3U8文件地址'
                button_download.id = 'copyURL'

                var button_alert = document.createElement('button')
                button_alert.style = 'font-size:12px; padding:10px; position:static;right:0px;top:337px;border:0px; background:yellowgreen;color:white;font-weight:bolder;height:38px;'
                button_alert.textContent = '如何下载M3U8视频?'
                button_alert.id = 'alertDownload'

                var button_downloadOnline = document.createElement('button')
                button_downloadOnline.style = 'font-size:12px; padding:10px; position:static;right:0px;top:337px;border:0px; background:rgb(34, 90, 137);color:white;font-weight:bolder;height:38px;'
                button_downloadOnline.textContent = '在线下载本视频'
                button_downloadOnline.id = 'downloadOnline'


                var button_hidden = document.createElement('button')
                button_hidden.style = 'font-size:12px; padding:10px; position:static;right:0px;top:482px;border:0px; background:black;color:white;font-weight:bolder;height:38px;'
                button_hidden.textContent = '隐藏按钮'
                button_hidden.id = 'hiddenButton'

                button_alert.addEventListener('click', (() => {
                    window.open('https://limbopro.com/archives/M3U8-Downloader.html', '_blank')
                }))


                const downloadOnlineurl = 'https://anyconv.com/m3u8-to-mp4-converter/' + "#" + mp4URL

                /* button_downloadOnline.addEventListener('click', (() => {
                    window.open(downloadOnlineurl, '_blank')
                }))*/

                button_hidden.addEventListener('click', (() => {
                    document.getElementById('mp4Download').style.display = 'none'
                    document.getElementById('copyURL').style.display = 'none'
                    document.getElementById('alertDownload').style.display = 'none'
                    document.getElementById('hiddenButton').style.display = 'none'
                }))

                button_download.addEventListener('click', (() => {
                    if (document.querySelector('div.videoPlayContainer  div[data-src]').dataset.src !== null) {
                        const textarea = document.createElement('textarea') // 创建 textarea 元素 并将选中内容填充进去
                        textarea.id = 'fuck91porn'
                        document.querySelector('#copyURL').appendChild(textarea)
                        textarea.value = mp4URL
                        textarea.select();
                        document.execCommand('copy', true); // 执行复制
                        document.querySelector('#copyURL').classList.add('copysuccess')  // 复制成功提醒
                        document.querySelector('#copyURL').textContent = '复制成功'

                        setTimeout(() => { // ↩️按钮恢复原状
                            document.querySelector('#copyURL').classList.remove('copysuccess')
                            document.querySelector('#copyURL').textContent = '复制本视频的M3U8文件地址'
                        }, 2500)

                        if (document.getElementById('fuck91porn')) { // 删除刚刚创建的 textarea 元素
                            document.getElementById('ffuck91porn').remove()
                        }
                    } else {
                        alert('未找到视频下载地址！')
                    }
                }))

                const container_el = document.querySelectorAll('h4.container-title')[0]
                container_el.parentNode.insertBefore(button_download, container_el)
                container_el.parentNode.insertBefore(button_downloadOnline, container_el)
                container_el.parentNode.insertBefore(button_alert, container_el)
            }


            // online download button script
            // 获取按钮
            const button = document.getElementById('downloadOnline');

            // 动态创建样式
            function createStyles() {
                const style = document.createElement('style');
                style.textContent = `
                        /* 遮罩层样式 */
                        .overlay {
                            display: none;
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.5);
                        z-index: 999;
                }

                        /* 悬浮窗样式 */
                        .modal {
                        overflow: auto;
                        height: 75%;
                        align-content: center;
                        display: none;
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background-color: white;
                        padding: 30px;
                        border: 2px solid #007bff;
                        border-radius: 10px;
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
                        z-index: 1000;
                        text-align: center;
                        max-width: 400px;
                        width: 90%;
                        animation: modalFadeIn 0.3s ease-out;
                }

                        /* 动画效果 */
                        @keyframes modalFadeIn {
                            from {
                            opacity: 0;
                        transform: translate(-50%, -60%);
                    }
                        to {
                            opacity: 1;
                        transform: translate(-50%, -50%);
                    }
                }

                        .modal h3 {
                            color: #007bff;
                        margin-top: 0;
                        font-size: 1.5em;
                }

                        .modal p {
                            color: #333;
                        font-size: 1.1em;
                        margin: 15px 0;
                }

                        .modal a {
                            display: inline-block;
                        background-color: #007bff;
                        color: white;
                        padding: 12px 24px;
                        text-decoration: none;
                        border-radius: 5px;
                        font-weight: bold;
                        transition: background-color 0.3s;
                        margin-top: 15px;
                }

                        .modal a:hover {
                            background - color: #0056b3;
                        transform: translateY(-2px);
                }

                        .close-btn {
                            background-color: #dc3545;
                        color: white;
                        border: none;
                        padding: 8px 16px;
                        border-radius: 5px;
                        cursor: pointer;
                        margin-top: 10px;
                        font-size: 14px;
                }

                        .close-btn:hover {
                            background-color: #c82333;
                }
                        `;
                document.head.appendChild(style);
                return style;
            }

            // 动态创建DOM元素
            function createModalElements() {
                // 创建遮罩层
                const overlay = document.createElement('div');
                overlay.id = 'overlay';
                overlay.className = 'overlay';

                // 创建悬浮窗
                const modal = document.createElement('div');
                modal.id = 'modal';
                modal.className = 'modal';
                modal.innerHTML = `
                        <h3>✅ 已复制M3U8文件地址</h3>
                        <p>1.点击下方按钮<span>跳转到在线解析网站 anyconv</>，<span>2.粘贴M3U8文件地址</>，3.然后点击<span>转换为MP4格式</>进行下载即可！<br><br>(P.S. 需要注意的是，使用在线解析下载长视频(大于128Mb)可能体验不佳或不如App，可查看更多下载方法选择合适的App下载长视频；点击页面上的非弹窗部分关闭本弹窗)</p>
                        <a href="https://anyconv.com/m3u8-to-mp4-converter/" target="_blank">跳转到下载网站 anyconv</a><br>
                        <a href="https://limbopro.com/archives/M3U8-Downloader.html" target="_blank">查看更多下载方法</a>
                        <!-- <br><button class="close-btn" onclick="closeModal()">关闭</button> --!>
                            `;

                // 添加到页面
                document.body.appendChild(overlay);
                document.body.appendChild(modal);

                return { overlay, modal };
            }


            // 执行函数
            function executeFunction() {
                document.getElementById('copyURL').click()
                console.log('函数已执行');

                // 创建样式（只创建一次）
                if (!document.querySelector('style[data-modal-styles]')) {
                    const style = createStyles();
                    style.setAttribute('data-modal-styles', 'true');
                }

                // 创建DOM元素（只创建一次）
                if (!document.getElementById('modal')) {
                    createModalElements();
                }

                // 显示悬浮窗
                showModal();
            }

            // 按钮点击事件
            button.addEventListener('click', executeFunction);

            // 点击遮罩层关闭悬浮窗
            document.addEventListener('click', function (e) {
                if (e.target.id === 'overlay') {
                    closeModal();
                }
            });

            // ESC键关闭悬浮窗
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') {
                    closeModal();
                }
            });

            // 显示悬浮窗
            function showModal() {
                const overlay = document.getElementById('overlay');
                const modal = document.getElementById('modal');

                if (overlay !== null)
                    overlay.style.display = 'block';
                if (modal !== null)
                    modal.style.display = 'block';
            }

            // 关闭悬浮窗
            function closeModal() {
                const overlay = document.getElementById('overlay');
                const modal = document.getElementById('modal');

                if (overlay !== null)
                    overlay.style.display = 'none';
                if (modal !== null)
                    modal.style.display = 'none';
            }
        }

    } else {
        console.log('未找到带有 data-src 的元素');
    }
}


function xchinadl() { // 小黄书下载m3u8视频

    if (window.location.href.match('video')) {

        var css = document.createElement('style')
        css.innerHTML = '.copysuccess {background:green !important;color:white !important;}'
        css.id = 'xchina'
        document.body.appendChild(css)

        if (document.getElementById('mp4Download') == null) {

            // 一键把 m3u8 地址保存到 mp4URL，绝不干扰后续代码
            window.mp4URL = null;

            (() => {
                const patterns = [
                    /src\s*[:=]\s*['"](https?:\/\/[^'"]*\.m3u8[^'"]*)['"]/i,
                    /url\s*[:=]\s*['"](https?:\/\/[^'"]*\.m3u8[^'"]*)['"]/i,
                    /loadSource\s*\(\s*['"](https?:\/\/[^'"]*\.m3u8[^'"]*)['"]/i,
                    /(https?:\/\/[^\s'"]*\.m3u8[^\s'"]*)/g
                ];

                for (const s of document.scripts) {
                    if (s.src) continue;
                    const text = s.textContent;
                    for (const reg of patterns) {
                        const match = text.match(reg);
                        if (match) {
                            window.mp4URL = match[1] || match[0];
                            console.log('m3u8 已成功保存 → mp4URL');
                            console.log(window.mp4URL);
                            return; // 这里只是退出函数，不会影响外面
                        }
                    }
                }
                console.log('未找到 m3u8，mp4URL 仍是 null');
            })();

            var mp4Download = document.createElement('button')
            mp4Download.download = document.title.toString()
            mp4Download.id = 'mp4Download'
            mp4Download.style = 'padding:12px; border:0px; background:#14532d;color:white;font-weight:bolder;width:60px;'
            mp4Download.onclick = function () {
                window.open(mp4URL, '_blank');
            }

            if ((/\b(android|iphone|ipad|ipod)\b/i.test(navigator.userAgent.toLowerCase()))) {
                mp4Download.textContent = '无广播放'
            } else {
                mp4Download.textContent = '无广播放'
            }

            // 创建 div 元素
            const myContainer = document.createElement('div');

            // 可选：给 div 添加 id、class、内容等
            myContainer.id = 'myContainer';
            myContainer.style = "position:fixed;right:0px;z-index:114154;display:grid;top:55%;"

            var button_download = document.createElement('button')
            button_download.style = 'padding:12px; border:0px; background:#22c55e;color:white;font-weight:bolder;width:60px;'

            if (mp4URL.indexOf('.mp4') !== -1) {
                button_download.textContent = '复制视频下载地址'
            } else {
                button_download.textContent = '复制M3U8文件地址'
            }

            button_download.id = 'copyURL'

            var button_alert = document.createElement('button')
            button_alert.style = 'padding:12px; border:0px; background:yellowgreen;color:white;font-weight:bolder;width:60px;'
            button_alert.textContent = '如何下载本视频？'
            button_alert.id = 'alertDownload'

            if (mp4URL.indexOf('.mp4') !== -1) {

                button_alert.addEventListener('click', (() => {
                    //alert(' 1.复制视频下载地址；2.iOS用户推荐使用名叫 "Documents" 的 app 下载视频，打开 Documents app -> 浏览器 - 粘贴视频下载地址；Android 暂无建议；桌面浏览器用户在新的标签页打开下载地址，然后右键另存为即可；')
                    confirmndExecute('1.复制视频下载地址；2.iOS用户推荐使用名叫 "Documents" 的 app 下载视频，打开 Documents app -> 浏览器 - 粘贴视频下载地址；Android 暂无建议；桌面浏览器用户在新的标签页打开下载地址，然后右键另存为即可；', (() => {

                    }));
                }))

            } else {
                button_alert.onclick = function () {
                    window.open('https://limbopro.com/archives/M3U8-Downloader.html', '_blank');
                }
            }


            button_download.addEventListener('click', (() => {
                if (document.querySelectorAll('source')[0].src.match('\.mp4') !== null) {
                    const textarea = document.createElement('textarea') // 创建 textarea 元素 并将选中内容填充进去
                    textarea.id = 'fuck91porn'
                    document.querySelector('#copyURL').appendChild(textarea)
                    textarea.value = mp4URL
                    textarea.select();
                    document.execCommand('copy', true); // 执行复制
                    document.querySelector('#copyURL').classList.add('copysuccess')  // 复制成功提醒
                    document.querySelector('#copyURL').textContent = '复制成功'

                    setTimeout(() => { // ↩️按钮恢复原状
                        document.querySelector('#copyURL').classList.remove('copysuccess')
                        document.querySelector('#copyURL').textContent = '复制M3U8文件地址'
                    }, 2500)

                    if (document.getElementById('fuck91porn')) { // 删除刚刚创建的 textarea 元素
                        document.getElementById('ffuck91porn').remove()
                    }
                } else {
                    alert('未找到视频下载地址！')
                }
            }))

            const ele_parent = document.querySelectorAll('div.content-box.player-container')[0]
            myContainer.appendChild(mp4Download)
            myContainer.appendChild(button_download)
            myContainer.appendChild(button_alert)
            ele_parent.parentNode.insertBefore(myContainer, ele_parent)
        }
    }
}

function _91porn_dl() { // 下载视频

    if (window.location.href.match('view_video')) {

        var css = document.createElement('style')
        css.innerHTML = '.copysuccess {background:green !important;color:white !important;}'
        css.id = 'porn91'
        document.body.appendChild(css)

        if (document.getElementById('mp4Download') == null) {
            var mp4URL = document.querySelectorAll('source')[0].src
            var mp4Download = document.createElement('a')
            mp4Download.download = document.title.toString()
            mp4Download.target = '_blank'
            mp4Download.id = 'mp4Download'
            mp4Download.href = mp4URL

            if ((/\b(android|iphone|ipad|ipod)\b/i.test(navigator.userAgent.toLowerCase()))) {
                mp4Download.textContent = '无广播放'
            } else {
                mp4Download.textContent = '下载视频'
            }

            var button_download = document.createElement('button')
            button_download.style = 'padding:12px; position:fixed;right:0px;top:216px;border:0px; background:yellowgreen;color:white;font-weight:bolder;width:60px;'
            button_download.textContent = '复制视频下载地址'
            button_download.id = 'copyURL'

            var button_alert = document.createElement('button')
            button_alert.style = 'padding:12px; position:fixed;right:0px;top:322px;border:0px; background:yellowgreen;color:white;font-weight:bolder;width:60px;'
            button_alert.textContent = '如何下载本视频？'
            button_alert.id = 'alertDownload'

            button_alert.addEventListener('click', (() => {
                //alert(' 1.复制视频下载地址；2.iOS用户推荐使用名叫 "Documents" 的 app 下载视频，打开 Documents app -> 浏览器 - 粘贴视频下载地址；Android 暂无建议；桌面浏览器用户在新的标签页打开下载地址，然后右键另存为即可；')
                confirmndExecute('1.复制视频下载地址；2.iOS用户推荐使用名叫 "Documents" 的 app 下载视频，打开 Documents app -> 浏览器 - 粘贴视频下载地址；Android 暂无建议；桌面浏览器用户在新的标签页打开下载地址，然后右键另存为即可；', (() => {
                }));
            }))

            button_download.addEventListener('click', (() => {
                if (document.querySelectorAll('source')[0].src.match('\.mp4') !== null) {
                    const textarea = document.createElement('textarea') // 创建 textarea 元素 并将选中内容填充进去
                    textarea.id = 'fuck91porn'
                    document.querySelector('#copyURL').appendChild(textarea)
                    textarea.value = mp4URL
                    textarea.select();
                    document.execCommand('copy', true); // 执行复制
                    document.querySelector('#copyURL').classList.add('copysuccess')  // 复制成功提醒
                    document.querySelector('#copyURL').textContent = '复制成功'

                    setTimeout(() => { // ↩️按钮恢复原状
                        document.querySelector('#copyURL').classList.remove('copysuccess')
                        document.querySelector('#copyURL').textContent = '复制视频下载地址'
                    }, 2500)

                    if (document.getElementById('fuck91porn')) { // 删除刚刚创建的 textarea 元素
                        document.getElementById('ffuck91porn').remove()
                    }
                } else {
                    alert('未找到视频下载地址！')
                }
            }))

            mp4Download.style = 'padding:12px; position:fixed;right:0px;top:150px;background:yellowgreen;color:white;font-weight:bolder;width:60px;'
            document.querySelectorAll('#useraction')[0].parentNode.insertBefore(button_alert, document.querySelectorAll('#useraction')[0])
            document.querySelectorAll('#useraction')[0].parentNode.insertBefore(button_download, document.querySelectorAll('#useraction')[0])
            document.querySelectorAll('#useraction')[0].parentNode.insertBefore(mp4Download, document.querySelectorAll('#useraction')[0])
        }
    }
}

/* 循环播放 missAV */

var timer = null;
var timerlist = [];

function video_loopPlay(x) {
    if (x === 'loop') {
        intval = window.setInterval(missAv_playbutton, 1000)
    } else if (x === 'pause') {
        if (intval) {
            timerlist.forEach((item, index) => { // 清理监听事件移除
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
        //console.log("视频已开启循环播放；")
    }
}

// 快进快退 fastForward

// ==UserScript==
// @name         Jable.tv 视频页：单行快进快退（样式分离注入）
// @namespace    http://tampermonkey.net/
// @version      1.8
// @description  样式完全抽离为 <style>，单行平铺面板，插入 section 后，修复连续点击按钮不恢复问题
// @author       @limboprossr
// @match        https://jable.tv/videos/*/
// @match        https://jable.hk/videos/*/
// @grant        none
// @run-at       document-idle
// ==/UserScript==

function fastForward(videowrap, section) { // fastForward()

    'use strict';

    const video = document.querySelector(videowrap);
    if (!video) return;

    if (document.getElementById('jable-skip-panel')) return;

    // === 1. 注入全局 CSS 样式 ===
    const style = document.createElement('style');
    style.id = 'jable-skip-panel-style';
    style.textContent = `
    @media (min-width: 992px) {
      .pb-e-lg-30 {
        padding-bottom: 10px !important;
      }
    }

    #jable-skip-panel {
    touch-action: pan-up pan-down pan-x pan-y manipulation;
    /* 或者直接写死： */
    touch-action: manipulation;
    /* 允许点击+滚动，但彻底禁用双击放大和双指缩放 */
    -webkit-tap-highlight-color: transparent;
      display: flex;
      z-index:114154;
      flex-wrap: inherit;
      justify-content: center;
      gap: 2px;
      padding: 10px 0px 10px 0px;
      /*background: var(--indigo);*/
      border-radius: 0px 0px 0px 0px;
      box-shadow: 0px 8px 14px var(--indigo)
      backdrop-filter: blur(14px);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      user-select: none;
      max-width: 100%;
      width: 100%;
      margin: 0px 0px 10px 0px;
      text-align: center;
    }

    .jable-skip-btn {
    padding:8px 8px 8px 12px;
    font-size:0.75rem;
      /*padding: 2px 0px;*/
      /*font-size: 12.5px;*/
      font-weight: inherit;
      color: #fff;
      border: 1px solid;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.22s ease;
      /*width: 60px;*/
      /*height: 25px;*/
      text-align: center;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      flex: 0 0 auto;
    }

    .jable-skip-btn.forward {
      background: rgba(0, 255, 136, 0.28);
      border-color: #00ff88;
    }

    .jable-skip-btn.backward {
      background: rgba(255, 80, 80, 0.28);
      border-color: #ff6666;
    }

    .jable-skip-btn:hover {
      transform: translateY(-2px) scale(1.06);
      box-shadow: 0 6px 18px rgba(0,0,0,0.5);
    }

    .jable-skip-btn.forward:hover {
      background: rgba(0, 255, 136, 0.42);
      box-shadow: 0 6px 18px rgba(0, 255, 136, 0.5);
    }

    .jable-skip-btn.backward:hover {
      background: rgba(255, 80, 80, 0.42);
      box-shadow: 0 6px 18px rgba(255, 80, 80, 0.5);
    }

    .jable-skip-btn:active {
      /*transform: translateY(0) scale(1.02);*/
    }
  `;
    document.head.appendChild(style);

    // === 2. 创建面板 HTML ===
    const panel = document.createElement('div');
    panel.id = 'jable-skip-panel';

    const actions = [
        { sec: -600, label: '<< 10m', key: 'PageDown', class: 'backward' },
        { sec: -60, label: '< 1m', key: 'ArrowDown', class: 'backward' },
        { sec: -15, label: '< 15s', key: 'ArrowLeft', class: 'backward' },
        { sec: 15, label: '15s >', key: 'ArrowRight', class: 'forward' },
        { sec: 60, label: '1m >', key: 'ArrowUp', class: 'forward' },
        { sec: 600, label: '10m >>', key: 'PageUp', class: 'forward' },
    ];

    actions.forEach(act => {
        const btn = document.createElement('button');
        btn.className = `jable-skip-btn ${act.class}`;
        btn.textContent = act.label;
        btn.dataset.sec = act.sec;
        btn.dataset.origText = act.label; // 预存原始文本
        btn._restoreTimer = null; // 存储恢复定时器

        // 快捷键提示
        if (act.key) {
            const keyName = {
                ArrowLeft: '←', ArrowRight: '→',
                ArrowUp: '↑', ArrowDown: '↓',
                PageUp: 'PageUp', PageDown: 'PageDown'
            }[act.key];
            btn.title = `${act.label}（${keyName}）`;
        } else {
            btn.title = act.label;
        }

        // 点击事件：带防抖恢复逻辑
        btn.onclick = function (e) {
            // 阻止任何可能的冒泡
            e.stopPropagation();
            const delta = parseInt(btn.dataset.sec);
            const newTime = Math.max(0, Math.min(video.currentTime + delta, video.duration));
            video.currentTime = newTime;

            // 清除上一个定时器
            if (btn._restoreTimer) {
                clearTimeout(btn._restoreTimer);
            }

            const orig = btn.dataset.origText;
            /*btn.textContent = '✓';*/

            // 设置新的恢复定时器
            btn._restoreTimer = setTimeout(() => {
                btn.textContent = orig;
                btn._restoreTimer = null;
            }, 400);
        };

        // 键盘快捷键（复用 onclick 逻辑）
        if (act.key) {
            document.addEventListener('keydown', e => {
                if (e.key === act.key && !e.ctrlKey && !e.altKey && !e.shiftKey) {
                    e.preventDefault();
                    btn.click();
                }
            });
        }

        panel.appendChild(btn);
    });

    // === 3. 插入到目标 section 之后 ===
    const targetSection = document.querySelector(section);
    if (targetSection && targetSection.parentNode) {
        targetSection.parentNode.insertBefore(panel, targetSection.nextSibling);
    } else {
        console.warn('未找到目标 section，插入 body 末尾');
        document.body.appendChild(panel);
    }

    console.log('Jable 单行快进快退面板（v1.8 修复连续点击）已加载');

}


// 在番号详情页追加在线预览链接
function tmd_land(parentSelector, code, titleText) {
    const formattedCode = code.replace(/-/g, '00');

    function createSearchLinks() {
        // Creates search links for various platforms

        const parentElement = document.querySelectorAll(parentSelector)[0];

        const container = document.createElement('p'); // 创建容器
        container.id = 'previewContainer';
        container.style = 'margin:10px 0px 10px 0px; border-left:6px solid #38a3fd; font-size:14px; border-radius: 4px !important; box-shadow: rgb(151, 151, 151) 0px 0px 0px 0px inset; background:#10141f; color:chocolate; padding:0px 0px 0px 0px; word-break:break-all; border-radius:0px 0px 0px 0px';

        const content = document.createElement('p'); // 创建内容包装器
        content.style = 'gap:3px; margin-bottom: 0px;display: flex;flex-wrap: wrap;justify-content: flex-start;align-items: center;text-align: left;font-weight: inherit;padding: 6px;word-break: break-all;font-size: inherit;border-radius: 0px;';
        content.id = 'contentWrapper';

        container.appendChild(content); // 追加内容包装器到容器
        parentElement.insertAdjacentElement('afterend', container);

        const title = document.createElement('span'); // 创建标题
        title.style = 'font-weight:bolder; font-size:medium; color:bisque;';
        title.textContent = titleText;
        content.appendChild(title);

        function addLinkToContainer(siteName, baseUrl, searchCode) { // 添加链接到容器
            const link = document.createElement('a');
            const label = document.createElement('label');
            label.style = 'font-weight:inherit; display:inline-block; max-width:100%; margin-right:10px;margin-bottom:0px;';
            link.href = baseUrl + searchCode;
            link.textContent = siteName;
            link.target = '_blank';
            link.style = 'color:inherit; font-weight:inherit';
            label.appendChild(link);
            content.appendChild(label);
        }

        addLinkToContainer('MissAV[720P]', 'https://missav.ws/search', '/' + code); // 添加各个搜索链接
        addLinkToContainer('Jable[HD]', 'https://jable.tv/search', '/' + code + '/');
        addLinkToContainer('Supjav[ultraHD]', 'https://supjav.com/?s=', code);
        addLinkToContainer('番号搜索[聚合]', 'https://limbopro.com/btsearch.html#gsc.tab=0&gsc.q=', code + '&gsc.sort=');
        addLinkToContainer('谷歌搜索🔍', 'https://www.google.com/search?q=', code);
        addLinkToContainer('Javbus📖', 'https://www.javbus.com/search/', code + '&type=&parent=ce');
        addLinkToContainer('DMM🇯🇵', 'https://video.dmm.co.jp/av/list/?key=', formattedCode);
        addLinkToContainer('🔞今晚看什么呢？', 'https://limbopro.com/tools/jwksm/', '');

        console.log('Online preview links generated 🔗');
    }

    if (!document.querySelector('#previewContainer')) {
        console.log('Generating online preview links...');
        createSearchLinks(); // 调用函数创建搜索链接
    }
}

/* 悬浮窗  Start*/

// 1. 注入 CMSNONE 样式
(function () {
    const cmsNoneCSS = `
    .cmsnone {
      z-index: -111;
      display: none !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }
  `;

    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';

    if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText = cmsNoneCSS;
    } else {
        styleElement.appendChild(document.createTextNode(cmsNoneCSS));
    }

    document.head.appendChild(styleElement);
})();

// 后续用于显示：mask_cre.classList.remove('cmsnone');
// 后续用于隐藏：mask_cre.classList.add('cmsnone');

const mask_cre = document.createElement('div');
mask_cre.id = 'confirmMask';
mask_cre.className = 'confirm-mask cmsnone';
mask_cre.innerHTML = `
    <div class="confirm-dialog">
      <div class="confirm-header">确认操作</div>
      <div class="confirm-body"></div>
      <div class="confirm-footer">
        <button class="cancel">取消</button>
        <button class="ok">确认</button>
      </div>
    </div>
  `;

document.body.appendChild(mask_cre);

/* ---------- 自定义弹窗逻辑 ---------- */
const mask = document.getElementById('confirmMask');
const cancel = mask.querySelector('.cancel');
const ok = mask.querySelector('.ok');
const maskText = document.querySelector('div.confirm-body');

let resolvePromise;   // 用于 await 方式（可选）

function showConfirm() {
    mask.classList.remove('cmsnone')
    mask.classList.add('show');

    return new Promise(resolve => {
        resolvePromise = resolve;

        // 点击遮罩关闭（可选）
        mask.onclick = e => {
            if (e.target === mask) closeConfirm(false);
        };
        cancel.onclick = () => closeConfirm(false);
        ok.onclick = () => closeConfirm(true);
    });
}

function closeConfirm(result) {
    mask.classList.remove('show');
    mask.onclick = cancel.onclick = ok.onclick = null;
    resolvePromise(result);
}

/* ---------- 确认后执行原逻辑 ---------- */
async function confirmndExecute(itext = '', fun) {
    // 更新提示文字
    if (itext !== '') {
        maskText.textContent = itext;
    }

    // 弹出确认框
    const confirmed = await showConfirm();
    if (!confirmed) return;   // 用户取消，直接退出

    // 执行传入的回调（若有）
    if (typeof fun === 'function') {
        try {
            await fun();   // 支持同步或异步回调
        } catch (err) {
            console.error('confirmndExecute callback error:', err);
        }
    }
}

// End

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
        if (document.getElementById(id) !== null) {
            var eleById = document.getElementById(id);
            eleById.addEventListener("click", funx, false)
        }
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
    ele.innerHTML = adsMax.css.ddrk_cheat;
    setTimeout(() => {
        ele.innerHTML = adsMax.css.ddrk_hidden;
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



function loadCSS(url, callback) {
    // 避免重复加载
    if (document.querySelector(`link[href="${url}"]`)) {
        callback && callback();
        return;
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    link.type = 'text/css';

    // 可选：添加跨域属性（如果需要）
    // link.crossOrigin = 'anonymous';

    // 加载成功回调
    link.onload = () => {
        console.log('Adblock4limbo CSS 加载成功');
        callback && callback();
    };

    // 加载失败处理
    link.onerror = () => {
        console.error('Adblock4limbo CSS 加载失败:', url);
    };

    document.head.appendChild(link);
}

// 使用
/*
loadCSS('https://limbopro.com/CSS/Adblock4limbo.user.css', () => {
    console.log('CSS 已生效');
});
*/

// 动态创建并引用外部资源 外部样式表 外部脚本
function third_party_fileX(tagname, url, where) {
    var ele_NewX = document.createElement(tagname);
    // script
    if (tagname == "script") {
        ele_NewX.type = "text/javascript";
        ele_NewX.src = url;
        ele_NewX.className = 'async';
        // link
    } else if (tagname == "link") {
        ele_NewX.rel = "stylesheet";
        ele_NewX.type = "text/css";
        ele_NewX.href = url;
    }

    setTimeout(() => {
        if (where == "body" && ele_NewX) {
            if (document.body) {
                document.body.appendChild(ele_NewX);
            }
        } else if (where == "head" && ele_NewX) {
            if (document.head) {
                document.head.appendChild(ele_NewX);
            }
        }
    }, 1000)
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


/// abort-on-property-read.js
/// alias aopr.js
/// https://github.com/gorhill/uBlock/blob/a94df7f3b27080ae2dcb3b914ace39c0c294d2f6/assets/resources/scriptlets.js#L96
function abort_on_property_read() {
    const magic = String.fromCharCode(Date.now() % 26 + 97) +
        Math.floor(Math.random() * 982451653 + 982451653).toString(36);
    const abort = function () {
        throw new ReferenceError(magic);
    };
    const makeProxy = function (owner, chain) {
        const pos = chain.indexOf('.');
        if (pos === -1) {
            const desc = Object.getOwnPropertyDescriptor(owner, chain);
            if (!desc || desc.get !== abort) {
                Object.defineProperty(owner, chain, {
                    get: abort,
                    set: function () { }
                });
            }
            return;
        }
        const prop = chain.slice(0, pos);
        let v = owner[prop];
        chain = chain.slice(pos + 1);
        if (v) {
            makeProxy(v, chain);
            return;
        }
        const desc = Object.getOwnPropertyDescriptor(owner, prop);
        if (desc && desc.set !== undefined) { return; }
        Object.defineProperty(owner, prop, {
            get: function () { return v; },
            set: function (a) {
                v = a;
                if (a instanceof Object) {
                    makeProxy(a, chain);
                }
            }
        });
    };
    const owner = window;
    let chain = '{{1}}';
    makeProxy(owner, chain);
    const oe = window.onerror;
    window.onerror = function (msg, src, line, col, error) {
        if (typeof msg === 'string' && msg.indexOf(magic) !== -1) {
            return true;
        }
        if (oe instanceof Function) {
            return oe(msg, src, line, col, error);
        }
    }.bind();
};

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

function overridePropertyRead(property, value) {
    if (!property) {
        throw new Error("[override-property-read snippet]: " +
            "No property to override.");
    }
    if (typeof value === "undefined") {
        throw new Error("[override-property-read snippet]: " +
            "No value to override with.");
    }

    let cValue;
    let debugLog = (debug ? log : () => { })
        .bind(null, "override-property-read");

    if (value === "false") {
        cValue = false;
    }
    else if (value === "true") {
        cValue = true;
    }
    else if (value === "null") {
        cValue = null;
    }
    else if (value === "noopFunc") {
        cValue = () => { };
    }
    else if (value === "trueFunc") {
        cValue = () => true;
    }
    else if (value === "falseFunc") {
        cValue = () => false;
    }
    else if (/^\d+$/.test(value)) {
        cValue = parseFloat(value);
    }
    else if (value === "") {
        cValue = value;
    }
    else if (value !== "undefined") {
        throw new Error("[override-property-read snippet]: " +
            `Value "${value}" is not valid.`);
    }

    let newGetter = () => {
        debugLog(`${property} override done.`);
        return cValue;
    };

    debugLog(`Overriding ${property}.`);

    wrapPropertyAccess(window, property, { get: newGetter, set() { } });
}

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


function tag_ads_traversal(selector, i) {
    const css_Selctors = document.querySelectorAll(selector)
    css_Selctors[i].style.display = "none";
}

// Get Cookies 获取指定命名的cookie 的值
function getCookie_(cname) {
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


// abort-current-script.js 打断内连函数
function createAbortCurrentScript(target, needle, context) {
    return function () {
        if (target === '' || target === '{{1}}') { return; }
        const reRegexEscape = /[.*+?^${}()|[\]\\]/g;
        const reNeedle = (() => {
            if (needle === '' || needle === '{{2}}') { return /^/; }
            if (/^\/.+\/$/.test(needle)) {
                return new RegExp(needle.slice(1, -1));
            }
            return new RegExp(needle.replace(reRegexEscape, '\\$&'));
        })();
        const reContext = (() => {
            if (context === '' || context === '{{3}}') { return /^$/; }
            if (/^\/.+\/$/.test(context)) {
                return new RegExp(context.slice(1, -1));
            }
            return new RegExp(context.replace(reRegexEscape, '\\$&'));
        })();
        const thisScript = document.currentScript;
        const chain = target.split('.');
        let owner = window;
        let prop;
        for (; ;) {
            prop = chain.shift();
            if (chain.length === 0) { break; }
            owner = owner[prop];
            if (owner instanceof Object === false) { return; }
        }
        let value;
        let desc = Object.getOwnPropertyDescriptor(owner, prop);
        if (
            desc instanceof Object === false ||
            desc.get instanceof Function === false
        ) {
            value = owner[prop];
            desc = undefined;
        }
        const magic = String.fromCharCode(Date.now() % 26 + 97) +
            Math.floor(Math.random() * 982451653 + 982451653).toString(36);
        const scriptTexts = new WeakMap();
        const getScriptText = elem => {
            let text = elem.textContent;
            if (text.trim() !== '') { return text; }
            if (scriptTexts.has(elem)) { return scriptTexts.get(elem); }
            const [, mime, content] =
                /^data:([^,]*),(.+)$/.exec(elem.src.trim()) ||
                ['', '', ''];
            try {
                switch (true) {
                    case mime.endsWith(';base64'):
                        text = self.atob(content);
                        break;
                    default:
                        text = self.decodeURIComponent(content);
                        break;
                }
            } catch (ex) {
            }
            scriptTexts.set(elem, text);
            return text;
        };
        const validate = () => {
            const e = document.currentScript;
            if (e instanceof HTMLScriptElement === false) { return; }
            if (reContext.test(e.src) === false) { return; }
            if (e === thisScript) { return; }
            if (reNeedle.test(getScriptText(e)) === false) { return; }
            throw new ReferenceError(magic);
        };
        Object.defineProperty(owner, prop, {
            get: function () {
                validate();
                return desc instanceof Object
                    ? desc.get.call(owner)
                    : value;
            },
            set: function (a) {
                validate();
                if (desc instanceof Object) {
                    desc.set.call(owner, a);
                } else {
                    value = a;
                }
            }
        });
        const oe = window.onerror;
        window.onerror = function (msg) {
            if (typeof msg === 'string' && msg.includes(magic)) {
                return true;
            }
            if (oe instanceof Function) {
                return oe.apply(this, arguments);
            }
        }.bind();
    };
}

// 用法示例：
// createAbortCurrentScript('window.foo', 'someKeyword', '/inline/')();

/* 广告视频加速 */
/**
 * 高阶函数：设置链式属性为常量，并进行属性劫持
 * @param {string} chain - 目标属性链，如 'navigator.webdriver'
 * @param {*} value - 需要设置的值，可以为常见字符串或直接为目标类型
 */
function setconstantV2(chain, value) {
    let cValue = value;
    const thisScript = document.currentScript;
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
        cValue = function () { };
    } else if (cValue === 'trueFunc') {
        cValue = function () { return true; };
    } else if (cValue === 'falseFunc') {
        cValue = function () { return false; };
    } else if (typeof cValue === 'string' && /^\d+$/.test(cValue)) {
        cValue = parseFloat(cValue);
        if (isNaN(cValue)) { return; }
        if (Math.abs(cValue) > 0x7FFF) { return; }
    }
    // 其它类型直接通过

    let aborted = false;
    const mustAbort = function (v) {
        if (aborted) { return true; }
        aborted =
            (v !== undefined && v !== null) &&
            (cValue !== undefined && cValue !== null) &&
            (typeof v !== typeof cValue);
        return aborted;
    };

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
        Object.defineProperty(owner, prop, {
            configurable,
            get() {
                if (prevGetter !== undefined) {
                    prevGetter();
                }
                return handler.getter();
            },
            set(a) {
                if (prevSetter !== undefined) {
                    prevSetter(a);
                }
                handler.setter(a);
            }
        });
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
        if (v instanceof Object || (typeof v === 'object' && v !== null)) {
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


/*

// 让所有 setInterval 的延时加速 20 倍（即 0.05 倍原时长）
setIntervalBooster();

// 让所有 setTimeout 的延时加速 5 倍
setTimeoutBooster('.?', '*', 0.2);

// 只加速包含 “ad” 关键字的定时器回调
setIntervalBooster('ad', '*', 0.1);

*/

/**
 * setTimeoutBooster - 高阶函数，加速/减速 setTimeout
 * @param {string|RegExp} needle - 代码匹配用正则或字符串（可选，默认匹配全部）
 * @param {number|string} delayMatcher - 延时匹配（可选，默认 1000，* 代表任意）
 * @param {number} boostRatio - 倍速，0.5=快2倍，2=慢2倍（可选，默认 0.05=快20倍）
 */
function setTimeoutBooster(needle = '.?', delayMatcher = 1000, boostRatio = 0.05) {
    let needleArg = needle;
    let delayArg = delayMatcher;
    let boostArg = boostRatio;
    if (needleArg === '') {
        needleArg = '.?';
    } else if (needleArg instanceof RegExp) {
        needleArg = needleArg.source;
    } else if (needleArg.charAt && needleArg.charAt(0) === '/' && needleArg.slice(-1) === '/')
        needleArg = needleArg.slice(1, -1);
    else
        needleArg = needleArg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const reNeedle = new RegExp(needleArg);
    let delay = delayArg !== '*' ? parseInt(delayArg, 10) : -1;
    if (isNaN(delay) || isFinite(delay) === false) delay = 1000;
    let boost = parseFloat(boostArg);
    boost = isNaN(boost) === false && isFinite(boost)
        ? Math.min(Math.max(boost, 0.02), 50)
        : 0.05;
    self.setTimeout = new Proxy(self.setTimeout, {
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
}





/**
 * setIntervalBooster - 高阶函数，加速/减速 setInterval
 * @param {string|RegExp} needle - 代码匹配用正则或字符串（可选，默认匹配全部）
 * @param {number|string} delayMatcher - 延时匹配（可选，默认 1000，* 代表任意）
 * @param {number} boostRatio - 倍速，0.5=快2倍，2=慢2倍（可选，默认 0.05=快20倍）
 */
function setIntervalBooster(needle = '.?', delayMatcher = 1000, boostRatio = 0.05) {
    let needleArg = needle;
    let delayArg = delayMatcher;
    let boostArg = boostRatio;
    if (needleArg === '') {
        needleArg = '.?';
    } else if (needleArg instanceof RegExp) {
        needleArg = needleArg.source;
    } else if (needleArg.charAt && needleArg.charAt(0) === '/' && needleArg.slice(-1) === '/')
        needleArg = needleArg.slice(1, -1);
    else
        needleArg = needleArg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const reNeedle = new RegExp(needleArg);
    let delay = delayArg !== '*' ? parseInt(delayArg, 10) : -1;
    if (isNaN(delay) || isFinite(delay) === false) delay = 1000;
    let boost = parseFloat(boostArg);
    boost = isNaN(boost) === false && isFinite(boost)
        ? Math.min(Math.max(boost, 0.02), 50)
        : 0.05;
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
}

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

document.querySelectorAll('a').forEach((x) => {
    x.innerHTML
})


// noWindowOpenIf
// https://github.com/gorhill/uBlock/wiki/Resources-Library#no-window-open-ifjs-
//noWindowOpenIf()
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


/// noEvalIf
/// https://github.com/gorhill/uBlock/blob/60ed584fc181b5d8dd935d60c32d2592d3674188/src/js/resources/scriptlets.js#L1611

function noEvalIf(
    needle = ''
) {
    if (typeof needle !== 'string') { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('noeval-if', needle);
    const reNeedle = safe.patternToRegex(needle);
    window.eval = new Proxy(window.eval, {  // jshint ignore: line
        apply: function (target, thisArg, args) {
            const a = String(args[0]);
            if (needle !== '' && reNeedle.test(a)) {
                safe.uboLog(logPrefix, 'Prevented:\n', a);
                return;
            }
            if (needle === '' || safe.logLevel > 1) {
                safe.uboLog(logPrefix, 'Not prevented:\n', a);
            }
            return Reflect.apply(target, thisArg, args);
        }
    });
}


/// abort-on-property-read.js
/// alias aopr.js
/// 当脚本尝试读取指定属性时中止脚本
/// https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#abort-on-property-read

function aopr() {
    const magic = String.fromCharCode(Date.now() % 26 + 97) +
        Math.floor(Math.random() * 982451653 + 982451653).toString(36);
    const abort = function () {
        throw new ReferenceError(magic);
    };
    const makeProxy = function (owner, chain) {
        const pos = chain.indexOf('.');
        if (pos === -1) {
            const desc = Object.getOwnPropertyDescriptor(owner, chain);
            if (!desc || desc.get !== abort) {
                Object.defineProperty(owner, chain, {
                    get: abort,
                    set: function () { }
                });
            }
            return;
        }
        const prop = chain.slice(0, pos);
        let v = owner[prop];
        chain = chain.slice(pos + 1);
        if (v) {
            makeProxy(v, chain);
            return;
        }
        const desc = Object.getOwnPropertyDescriptor(owner, prop);
        if (desc && desc.set !== undefined) { return; }
        Object.defineProperty(owner, prop, {
            get: function () { return v; },
            set: function (a) {
                v = a;
                if (a instanceof Object) {
                    makeProxy(a, chain);
                }
            }
        });
    };
    const owner = window;
    let chain = '{{1}}';
    makeProxy(owner, chain);
    const oe = window.onerror;
    window.onerror = function (msg, src, line, col, error) {
        if (typeof msg === 'string' && msg.indexOf(magic) !== -1) {
            return true;
        }
        if (oe instanceof Function) {
            return oe(msg, src, line, col, error);
        }
    }.bind();
};

// 设置 cookie 饼
function settingCookie(cname, cvalue, exdays) { var d = new Date(); d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); var expires = "expires=" + d.toGMTString(); document.cookie = cname + "=" + cvalue + "; path=/;" + expires; }



// 注入 prevent-setTimeout scriptlet
function injectPreventSetTimeout() {
    // 防止重复注入
    if (window.__preventSetTimeoutInjected) return;
    window.__preventSetTimeoutInjected = true;

    const target = 'window.open';
    const hitLog = () => console.log(`%c[Blocked] ${target} via setTimeout`, 'color: #e74c3c; font-weight: bold;');

    // 匹配 window.open 各种写法
    const containsTarget = (str) => {
        if (typeof str !== 'string') return false;
        return /\bwindow\s*\.\s*open\s*\(/.test(str) ||
            /\bwindow\s*\[\s*["']open["']\s*\]\s*\(/.test(str) ||
            /\bwindow\s*\?\.\s*open\s*\(/.test(str);
    };

    const nativeSetTimeout = window.setTimeout;

    window.setTimeout = function (callback, delay, ...args) {
        let code = '';

        // 函数形式
        if (typeof callback === 'function') {
            code = callback.toString();
        }
        // 字符串形式（如 setTimeout("window.open(...)")）
        else if (typeof callback === 'string') {
            code = callback;
        }
        // 其他类型直接放行
        else {
            return nativeSetTimeout.apply(this, arguments);
        }

        // 检查是否包含 window.open
        if (containsTarget(code)) {
            hitLog();
            return; // 静默阻止
        }

        // 正常执行
        return nativeSetTimeout.call(this, callback, delay, ...args);
    };

    console.log('%c[Scriptlet] prevent-setTimeout 已注入，保护当前站点', 'color: #2ecc71; font-weight: bold;');
}