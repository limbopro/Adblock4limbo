// ==UserScript==
// @name         Adblock4limbo.[github]
// @namespace    https://github.com/limbopro/Adblock4limbo/raw/main/Adguard/Adblock4limbo.user.js
// @version      0.2025.10.07
// @license      CC BY-NC-SA 4.0
// @description  毒奶去网页广告计划用户脚本 For Quantumult X & Surge & Shadowrocket & Loon & Stash & 油猴 ；1.新增页面右下角导航；2.通过 JavaScript 移除特定网站网页广告 —— 搜索引擎（Bing/Google）广告及内容农场结果清除/低端影视/欧乐影院/iyf爱壹帆/哔滴影视/Pornhub/Javbus/Supjav/Jable(支持抓取M3U8链接)/MissAv/91porn(支持视频下载)/hitomi/紳士漫畫/禁漫天堂/等视频&ACG&小说&漫画网站上的弹窗广告&视频广告&Gif图片广告等，保持网页清爽干净无打扰！ P.S. 欢迎提交issue
// @author       limbopro

/**
 * ---------------------------
 * 毒奶去网页广告计划
 * Author: limbopro
 * 使用教程：https://limbopro.com/archives/12904.html
 * 联系博主：https://t.me/limboprobot
 * 电报群组：https://t.me/Adblock4limbo
 * FAQ：https://t.me/Adblock4limbo/21 常见问题与回答
 * Github：https://github.com/limbopro/Adblock4limbo
 * ---------------------------
 */

/* 新增反馈&导航按钮&成人保护模式&页面锁（见页面右下角）

// **【导航】使用指南（PC/Mac）**
/// 按教程安装好油猴脚本
/// 访问任意网站（绝大多数网站）
/// 1.1 当页面右下角【导航按钮】消失后，1秒内连续按2次 ESC键 可唤出【导航页面】；
/// 1.2 当页面右下角出现【导航按钮】时，此时只需再按一次 ESC键 可唤出【导航页面】；
/// 1.3 当处于导航页面时，按ESC键 或点击空白处 可退出【导航页面】；
/// 1.4 当处于导航页面时，按G键 或 空格键 可快速唤出【搜索框】，可快速进行搜索操作（同时会退出导航页面）；
/// 1.5 当处于导航页面时，按C键 可快速唤出【网页聊天】框，可快速提建议或反馈问题；
/// 1.6 快速 【按3次ESC键】 可**快速开启页面锁🔒**（需设置锁屏密码🔑/仅对当前访问网站生效/如忘记密码可清除浏览器cookie）

// **【导航】使用指南（iOS）**
/// 按教程配置好相应重写/去广告分流
/// 访问【目前在维护的网站目录】里的（绝大多数）网站
/// 1.1 ～～当页面右下角导航按钮消失后，点击页面右侧1/3空白处即可唤出【导航按钮】；～～
/// 1.2 当页面右下角出现导航按钮时，点击按钮即可唤出【导航页面】；
/// 1.3 页面空白处1秒内连续点击4次及以上亦可唤出【导航页面】；
/// 1.4 上下滑动页面亦可唤出【导航按钮】；

// **【导航】使用指南（PC/Mac/iOS）**
/// **成人保护模式**
/// 仅针对部分主要成人网站生效
/// 当你浏览成人网站时，切换到别的应用或页面再返回时，网站页面将被模糊
/// 可在 导航 - **反馈/建议/功能设置//** 开启或关闭成人保护模式(ON/OFF)；

// **如何【全局隐藏/禁用右下角导航按钮以及成人保护模式（iOS）】**
/// iOS QX/Stash/Surge/等用户
/// 1.添加主机名， **limbopro.com**
/// 2.添加重写， **匹配的url** 填写正则表达式 **Adblock4limbo.user.js** ，类型选择 **response-body/http-response**
/// 3.**匹配的body**处 填写正则表达式 **daohangMode|adultMode** ，**替换**处 填写 **off**
/// 4.daohangMode 代表导航，adultMode 代表成人保护模式，你可以都关闭或只关闭其一

// **如何【全局隐藏/禁用右下角导航按钮以及成人保护模式/使导航功能失效（PC/Mac）】**
/// PC/Mac 油猴用户...
/// 进入 Tampermonkey 管理面板 - 找到 **Adblock4limbo.[github]**
/// 找到 daohang_build()  大概在 210 多行
/// 然后将 daohangMode/adultMode 的值修改成 false 即可
/// 或直接注释掉 daohang_build() 即可（注释后将无法快捷唤起导航详情页，导航功能失效）

/// ! 隐藏页面右下角导航🧭按钮🔘不影响PC/Mac端快捷键使用，移动端仍可1秒内连续点击页面空白处4次及以上唤出【导航页面】；

*/

// @match        https://m.baidu.com/*
// @match        https://www.baidu.com/*
// @match        https://zhidao.baidu.com/*
// @match        https://ddrk.me/*
// @match        https://ddys.tv/*
// @match        https://ddys.pro/*
// @match        https://ddys.art/*
// @match        https://ddys2.me/*
// @match        https://ddys.mov/*
// @match        https://jable.tv/*
// @match        https://cupfoxapp.tv/*
// @match        https://www.dmmiku.com/*
// @match        https://bf.bfdm.xyz/*
// @match        https://cnys.tv/*
// @match        https://m.iyf.tv/*
// @match        https://www.iyf.tv/*
// @match        https://en.jable.tv/*
// @match        https://*.jable.tv/*
// @match        https://www.btbdys.com/*
// @match        https://www.bdys01.com/*
// @match        https://www.bdys02.com/*
// @match        https://www.bdys03.com/*
// @match        https://www.bdys10.com/*
// @match        https://www.52bdys.com/*
// @match        https://cn.pornhub.com/*
// @match        https://www.pornhub.com/*
// @match        https://t66y.com/*
// @match        https://www.dmm.co.jp/*
// @match        https://*.dmm.co.jp/*
// @match        https://missav.com/*
// @match        https://missav.ai/*
// @match        https://missav.ws/*
// @match        https://bi-girl.net/*
// @match        https://op.gg/*
// @match        https://t1229.btc760.com/*
// @match        https://91porn.com/*
// @match        https://91porna.com/*
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
// @match        https://555dyx1.com/*
// @match        https://555dyx3.com/*
// @match        https://555dyx4.com/*
// @match        https://555dyx5.com/*
// @match        https://o8tv.com/*
// @match        https://www.wnacg.com/*
// @match        https://www.wnacg.org/*
// @match        https://manhuapica.com/*
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
// @match        https://www.google.com/search*
// @match        https://www.google.com.hk/search*
// @match        https://www.bing.com/search?q=*
// @match        https://cn.bing.com/search?q=*
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
// @match        https://www.javbus.com/*
// @match        https://jav.land/*
// @match        https://cn1.91short.com/*
// @match        https://xiaobaotv.net/*
// @match        https://xiaobaotv.com/*
// @match        https://xiaoxintv.net/*
// @match        https://xiaoxintv.com/*
// @match        https://javday.tv/*
// @match        https://www.xvideos.com/*
// @match        https://4hu.tv/*
// @match        https://www.4hu.tv/*
// @match        https://netflav.com/*
// @match        https://javplayer.me/*
// @match        https://netflav5.com/*
// @match        https://filemoon.sx/*
// @match        https://emturbovid.com/*
// @match        https://netflavns1.com/*
// @match        https://fc2stream.tv/*
// @match        https://mmsw02.com/*
// @match        https://embedrise.com/*
// @match        https://mmfl02.com/*
// @match        https://netflavns2.com/*
// @match        https://supjav.com/*
// @match        https://hanime1.me/*
// @match        https://wangdoc.com/*
// @match        https://developer.mozilla.org/*
// @match        https://zh.javascript.info/*
// @match        https://deerchao.cn/*
// @match        https://gimy.ai/*
// @match        https://www.olevod.tv/*
// @match        https://www.olevod.com/*
// @match        https://www.olevod.one/*
// @match        https://t.me/*
// @match        https://hitomi.la/*
// @match        https://tameikegoro.jp/*
// @match        https://njav.tv/*
// @match        https://www.ntdm9.com/*
// @match        https://www.novel543.com/*
// @match        https://www.hltv.org/*
// @match        https://m.diyibanzhu.me/*
// @match        https://www.javlibrary.com/cn/?v=*
// @match        https://play.huaren.live/*
// @match        https://huaren.live/*
// @match        https://rouman5.com/*
// @match        https://rou.video/*
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

var imax = {
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
        jable: "body {overflow-x:hidden;} div.site-content {overflow-x:hidden!important;} div.text-center > a[target=_blank], li[class*='nav-item'] >  a[target=_blank], div.asg-interstitial, div.asg-interstitial__mask, iframe, div[class*=\"exo\"], .exo-native-widget-outer-container, a[href*=\"trwl1\"], div[data-width=\"300\"], div.text-center.mb-e-30, div[data-width*=\"300\"], div[style*=\"300px\"], section[class*=\"justify\"], iframe[width=\"728\"][height=\"90\"], #site-content > div.container > section.pb-3.pb-e-lg-40.text-center, a[href*=\"\?banner=\"],[class*=\"root--\"],.badge,a[href=\"http\:\/\/uus52\.com/\"] {display :none !important; pointer-events: none !important;}", // Jable.tv
        test: "*, div,img {display: none !important}",
        tvn: "img[src*='gif'], iframe {display:none !important; pointer-events:none important;}",
        comic_18: "div.div2_sticky2, p > a[target=_blank], div.modal-body > a[target=_blank], li[class*='pop'] > a[target=_blank], li[class*='top'] > a[target=_blank], .modal-backdrop,[data-height*='90'],div[data-height='250'][data-width='300'],a[href^='http']:not([href*='18comic.']) > img ,#adsbox ,a[target='_blank'][rel*='nofollow'] > img[src*='.gif'] ,#guide-modal ,iframe[width='300'][height='250'] ,.modal-body > ul.pop-list,.adsbyexoclick,div[data-group^='skyscraper_'],.bot-per,.top-a2db,a[href*='.taobao.com'],div[data-height='264'][data-width='956'],div[style^='position: fixed; top:'],.bot-per.visible-xs.visible-sm  {display: none !important; pointer-events: none !important;}", // 555电影网
        dy555: "div.module {z-index:1!important} div.popup.popup-tips.none.popupShow, a[target=\"_blank\"] img,.playtop.col-pd,a[href*=\"?channelCode=\"] > img[src*=\".com:\"],#adsbox,div.myui-panel.myui-panel-bg.clearfix.wapad {display:none !important}", // 555影院
        wnacg: "div > img[src*='gif'],div.sh,div > a[target='_blank'] > img {display:none !important}", // 绅士漫画
        manhuapicanone: "li[class*=lindex],.row.alert,.my-insert-flag,[role=alert],img[src*=gif] {display:none !important; pointer-events: none !important;} ", // 嗶咔picacg免費網頁版
        manhuapicaheight: "/*li[class*=lindex],*/.row.alert,.my-insert-flag,[role=alert],img[src*=gif] {height:0px !important} ", // 嗶咔picacg免費網頁版
        dmm: "",
        missav: "a[href^='https://theporndude.com'],a[href*='mycomic'],a[href*=myavlive],[href*='bit.ly'],[href*='bit.ly'][target=_blank], a[href*='/vip'],img[src*='.gif'], iframe,#a[href*='//bit.ly/'],div[style*='z-index: 1001'],ul.space-y-2.mb-4.ml-4.list-disc.text-nord14,div.space-y-5.mb-5,div.under_player,div[style=\"width: 300px; height: 250px;\"] {display:none !important; pointer-events:none important;} body{overflow-x:hidden;}", //  MissAV
        bigirl: 'div#container + div, h4.adblock_title,div.adblock_subtitle,[class^=\'adblock\'],div[class^=\'ad_\'], .toppage_av {display:none !important; pointer-events: none !important;}', // https://bi-girl.net/
        opgg: ".AdSense,  div[data-ad], tr.ad, #banner-container, section[class*='md:hidden'] {display:none !important; pointer-events: none !important;}",
        btc760: ".ad_img,.ad_img,#ad_headerbanner {display:none !important; pointer-events: none !important;}", // btc760
        porna91: ".modal-backdrop.in,.dx-banner-item,.ad-dialog,a.checkNum[target='_blank']:not([href*='91porna.com']),li.flex.mr-6,div.text-mini.mb-3,a[href*='cloudfront'], div.filters, div.filters > div#videobox, div.row > div.col.col-24 { min-height: 0px !important; display:none !important;pointer-events:none important;}", // 91porna
        porn91: ".copysuccess {background:green !important;color:white !important;} br, .ad_img,.preroll-blocker, img[href*='.gif'] {display:none !important; pointer-events: none !important;}", // 91porn
        zhihuAds: "div.css-1izy64v,[class='Card AppBanner'],.Footer,.Banner-link,div.Pc-word {display:none !important; pointer-events: none !important;}",
        pornhubx: ".topAdContainter, a[href*='ads'], div.adContainer.clearfix.noBottom, .adContainer.clearfix.middleVideoAdContainer, div.adContainer.clearfix.noBottom, a[href*='fuck'][target='_blank'], [data-href][target='_blank'],iframe, a.ad#link, #header.hasAdAlert {grid-template-rows:60px 40px 0px !important} div.hd.clear, div > img[data-title][srcset], #js-networkBar,div#abAlert, .adsbytrafficjunky, #pb_template, .sponsor-text, #adsbox, .abAlertShown, .abAlertInner, #main-container > .abovePlayer, [rel*='noopener nofollow'],a[href^=\"http://ads.trafficjunky.net/\"], .topAdContainter,.adsbytrafficjunky,.ad-link  {height:0px !important; display:none !important; pointer-events:none;}", // pornhub
        t66y: "div.tips[style*='auto'],div[class*=ftad-item] {height:0px !important; display:none !important; pointer-events:none;}", // pornhub
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
        javland: "img[src*='.gif'], a[href^=\"https://go.rmhfrtnd.com/\"] {display:none !important; pointer-events: none !important;}",  // jav.land
        _4hu: ".couplet-left, body[ontouchstart] > div[id^='content_'][style='display: block;'], div.row.col2 > dl, #btmBox, img[src*=gif],.col5 > dl#randomBox, script[src$=\"/base.js\"] + #couplet, body[ontouchstart] > #topBox,.wrap + #btmBox,.search + #midBox {opacity:0% !important; pointer-events: none !important; height: 0px !important}",
        // {opacity:0% !important; pointer-events: none !important; height: 0px !important}
        netflav: "iframe[src*=xlv],.ads_video_overlay_mobile, div.widget-container, a[href*=\"register\"][target=\"_blank\"],div.ads_video_close_button,div.ads_video_overlay_mobile,div.footer_root,div.ads_head_banner_container {display:none !important;}",
        supjav: '#pop, .div_pop, #pop.div_pop, .movv-ad, #adsbox, div.right, div.movv-ad.ad_3_3, div.movv-ad.ad_3_2, .movv-ad, .adsbyexoclick, #adsbox, .adsbyexoclick  {display:none !important; pointer-events: none !important;}',
        hitomi: ".container > div[class$=\"content\"] > div[class]:has(> script) {display:none !important; pointer-events: none !important;}",
        hanime1: "span.scaled-exoclick, iframe, #close-mobile-ad-btn, #bottom-ads, div[style*=\"width: 310px; height: 282px;\"] {display:none !important; pointer-events: none !important;}",
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
        novel543: "iframe, div#adfoot, div.px-3.py-3, #adfoot, .gadBlock {height:0px; display:none !important; pointer-events: none !important;}"
        //button_common: "padding: 6px 6px 6px 6px; display: inline-block; color: white;z-index: 114154 !important; border-right: 6px solid #38a3fd; border-left: #292f33 !important; border-top: #292f33 !important; border-bottom: #292f33 !important; background: #2563eb; border-radius: 0px 0px 0px 0px; font-weight: 800 !important; text-align: right !important;" // 按钮/输入框通用样式
    },
    function: {
    }
}

css_adsRemove(imax.css.othercss, 0, 'othercss') // 引用全局样式

function values() {
    var adsDomain = [
        "pornhub",
        "t66y",
        'dmm.co.jp',
        "missav",
        "bi-girl",
        "op.gg",
        "t1229.btc760.com",
        "91porna",
        "91porn.",
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
            pornhub_interstitialPass();
            //tag_adsRemove("script", "ads_batch");
            const custom_style_values_pb = "right: 0px !important; padding: 0 !important; position: relative !important;"
            css_adsRemove(imax.css.pornhubx, 500, "pornhubX");

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
                ele_dynamicAppend("div.ratingInfo, div.categoryRow.ratingDetails.sectionPadding", "href", "如何下载视频？", cssText, "https://limbopro.com/archives/M3U8-Downloader.html", "download_pornhub", 2, "a")
                if (document.getElementById("download_pornhub")) {
                    document.getElementById("download_pornhub").style = "display: inline !important;";
                    document.getElementById("download_pornhub").target = "_blank !important;";
                }
            }, 3000)


            pornhub_sidebar_ads();
            break;

        case 't66y':
            css_adsRemove(imax.css.t66y);
            break;

        case '91porna':
            //cloudflare_captchaBypass();
            css_adsRemove(imax.css.porna91);
            //_91porn_videoplay_ads();

            // 播放页空白

            document.querySelectorAll("br").forEach((x) => {
                if (x.clientHeight = 0) {
                    x.remove()
                }
            })

            break;

        case 't1229.btc760.com':
            css_adsRemove(imax.css.btc760);
            break;
        case '91porn.':
            //cloudflare_captchaBypass();
            css_adsRemove(imax.css.porn91);

            let url91 = document.location.href;
            if (url91.indexOf('view_') !== -1) {
                let play = setInterval(() => {
                    if (document.querySelector('div.preroll-skip-button') !== null) {
                        document.querySelector('div.preroll-skip-button').click();
                    } else {
                        clearInterval(play);
                    }
                }, 1000)
            }

            setTimeout(() => {
                _91porn_dl()
            }, 2500)

            //css_adsRemove(imax.css.porna91);
            //_91porn_videoplay_ads();

            // 播放页空白
            /*
            document.querySelectorAll("br").forEach((x) => {
                if (x.clientHeight = 0) {
                    x.remove()
                }
            })
            */

            break;
        case 'avple':
            //cloudflare_captchaBypass();
            css_adsRemove(imax.css.avple);
            third_party_fileX("script", imax.js.avple, "body")
            break;
        case '18comic':
            css_adsRemove(imax.css.comic_18);
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
            css_adsRemove(imax.css.dy555, 0, "555dy")
            document.querySelectorAll('.popup-btn.close-pop')[0].click(); //模拟点击
            break;
        case 'wnacg':
            css_adsRemove(imax.css.wnacg);
            break;
        case 'manhuapica':


            if (window.location.href.replace('https://manhuapica.com/') == 'undefined' || window.location.href.replace('https://manhuapica.com/#') == 'undefined' || window.location.href.replace('https://manhuapica.com/?vflush') !== window.location.href) {
                css_adsRemove(imax.css.manhuapicanone);

                setTimeout(() => {
                    if (document.querySelector('.btn.btn-outline-primary')) {
                        document.querySelector('.btn.btn-outline-primary').click()
                    }
                }, 3000)

            } else {
                css_adsRemove(imax.css.manhuapicaheight);
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
            css_adsRemove(imax.css.baidu_zhidao, 500, 'fuckbaidu')
            setTimeout(() => {
                css_adsRemove(imax.css.baidu_zhidao, 500, 'fuckbaidu')
            }, 1500)
            break;
        case 'www.baidu.com':
            console.log('Got u! baidu.com')
            let regex = /https?:\/\/(www|m)\.baidu\.com\/(from=|s\?)/gi
            window.location.href.search(regex) !== -1
            if (window.location.href.search(regex) !== -1) {
                css_adsRemove(imax.css.baidu_search);
                console.log('移除搜索结果广告🪧...')
            } else {
                adsDomain_switch("zhidao")
                css_adsRemove(imax.css.baidu_index);
                console.log('移首页广告🪧...')
            }
            break;
        case 'ddys':
            //css_adsRemove(imax.css.ddrk);
            css_adsRemove(imax.css.ddrk2);

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
            third_party_fileX("script", imax.js.duboku, "body")
            break;
        case 'libvio':
            css_adsRemove(imax.css.libvio)
            break;
        case 'nbys':
            css_adsRemove(imax.css.nivod);
            break;
        case 'ntdm9':
            css_adsRemove(imax.css.ntdm9);
            const a = document.getElementsByClassName("yammohxz_b");
            addEventListener_defuser("touchend"); // 打断监听器

            for (i = 0; i < a.length; i++) {
                a[i].style = "display: none !important; z-index:-114154; display:block; width:0vw; height:0";
            }

            break;
        case 'tvn':
            css_adsRemove(imax.css.tvn)
            break;
        case 'jable': // 2333
            console.log("IT'S JABLE");

            window.onload = function () {

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
            css_adsRemove(imax.css.jable);
            jable_adsRemove();
            const url_jable = document.location.href;
            const reg_videos = /^https:\/\/jable\.tv\/videos/gi;
            if (url_jable.search(reg_videos) !== -1 && document.querySelector('#avCodeCopy') === null) {

                setTimeout(() => {
                    let cssText = "margin-left: 5px; margin-top: 5px; position: static; font-size: smaller !important; background: #2563eb !important; margin-right: 5px; padding: 6px 6px 6px 6px; display: inline-block; color: white; border-right: 6px solid #38a3fd; border-left: #292f33 !important; border-top: #292f33 !important; border-bottom: #292f33 !important; background: #2563eb; border-radius: 0px 0px 0px 0px; font-weight: 800 !important; text-align: right !important;"
                    let cssText2 = "width:72px; margin-left: 5px; margin-top: 5px; position: static; font-size: smaller !important; background: #2563eb !important; margin-right: 5px; padding: 6px 6px 6px 6px; display: inline-block; color: white; border-right: 6px solid #38a3fd; border-left: #292f33 !important; border-top: #292f33 !important; border-bottom: #292f33 !important; background: #2563eb; border-radius: 0px 0px 0px 0px; font-weight: 800 !important; text-align: right !important;"
                    ele_dynamicAppend("div.header-left > h6", "onclick", "code", cssText2, "", "avCodeCopy", 13, "input");
                    ele_dynamicAppend("div.header-left > h6", "onclick", "复制番号", cssText, "", "copyavCode", 14, "button");
                    ele_dynamicAppend("div.header-left > h6", "onclick", "", cssText, "", "copy", 15, "input");
                    ele_dynamicAppend("div.header-left > h6", "onclick", "复制M3U8文件地址", cssText, "", "jablex", 16, "button")
                    ele_dynamicAppend("div.header-left > h6", "onclick", "如何下载视频？", cssText, "window.open(\"https://limbopro.com/archives/M3U8-Downloader.html\", \"_blank\")", "how", 17, "button");
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

                    document.querySelector('#copyavCode').innerHTML = '复制成功!'
                    document.querySelector('#copyavCode').setAttribute('class', 'jable_css')
                    setTimeout(() => {
                        document.querySelector('#copyavCode').innerHTML = '复制番号'
                        document.querySelector('#copyavCode').className = ''
                    }, 1500)
                    //}, 0)
                }

                setTimeout(() => { repeat_regex.forEach(m3u8_tempt) }, 4000);
            }


            break;
        case 'bdys':
            css_adsRemove(imax.css.btbdys, 0, "siwtch_button");
            css_adsRemove(imax.css.switch, 0, "switch_class")
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
            css_adsRemove(imax.css.google);
            var userAgent = navigator.userAgent.toLowerCase();
            if (/\b(mobile)\b/i.test(userAgent)) {
                js_adsRemove(imax.js.contentFarm);
                console.log("getYou") // 手机用户 特别是苹果用户会正常加载内容农场脚本
            } else {
                js_adsRemove(imax.js.contentFarm);
                console.log("PC端") // 啥也不做
            }
            //var goole_selector = "h3,#bres,[class*='AuVD wHYlTd mnr-c']";
            //setAttribute_after(goole_selector, "contentFarm_AdsRemove_Auto()");
            break;
        case 'bing':
            js_adsRemove(imax.js.contentFarm);
            break;

        case 'hltv':
            css_adsRemove(imax.css.hltv);
            noWindowOpenIf(); // no-window-open-if
            break;

        case 'nivod': // nbys 泥巴影视
            css_adsRemove(imax.css.nivod);
            hrefAttribute_set();
            setConstant('detailParams.is_ad_play', 'false'); // 泥巴影视PC版播放页视频广告加速
            evaldataPrune(); // 泥巴影视移动版播放页视频广告加速
            css_adsRemove(imax.css.nbys); // 网页图片广告
            setInterval(() => {
                remove_parentElement_by_child('view.nut-swiper-item.slider-item', "img[src*='1a732eeb1adb']");
                remove_parentElement_by_child('view.nut-swiper-item.slider-item', "img[src*='49e8abd32d13']");
                remove_parentElement_by_child('.qy20-h-carousel__ul', "span[style*='d92ea585-0']");
                remove_parentElement_by_child("li.qy20-h-carousel__li", "span[style*='0891']");
                remove_parentElement_by_child("li.qy20-h-carousel__li", "span[style*='1a2d']");
            }, 2000)
            break;
        case '91short':
            css_adsRemove(imax.css._91short);

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
            css_adsRemove(imax.css.cupfoxapp, 100, 'fuckcupfoxapp');
            break;
        case 'dmmiku':
            css_adsRemove(imax.css.dmmiku, 100, 'fuckdmmiku');
            window_open_defuser();
            //addEventListener_defuser();
            break;
        case 'bfdm':
            css_adsRemove(imax.css.bfdm, 100, 'fuckdmmiku');
            break;
        case 'iyf':

            css_adsRemove(imax.css.iyf, 100, 'fuckiyf');
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
            css_adsRemove(imax.css.cnys, 0, 'cnys')

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
            css_adsRemove(imax.css.javday, 0, 'javday')
            break;
        case 'xvideos':

            setInterval(() => {
                if (!document.getElementById('xvideos_t')) {
                    css_adsRemove(imax.css.xvideos, 100, "xvideos_t");
                    noWindowOpenIf();
                } else {
                    noWindowOpenIf();
                }
            }, 1000)

            break;
        case 'javbus':
            css_adsRemove(imax.css.javbus, 0, "javbus");

            function javbus() { // 在番号详情页追加在线预览链接
                setTimeout(() => {
                    let father = 'div.col-md-3.info';
                    let code = window.location.pathname.replace('/', '')
                    let url = window.location.href
                    let regx = /[a-zA-Z]{2,6}\-\d{2,5}/i


                    if (url.search(regx) !== -1) {
                        setTimeout(() => {
                            tmd(father, code, '在线预览: ')
                        }, 1000)
                    } else {
                        console.log('当前网站不不匹配')
                    }
                }, 2000)
            }

            javbus()

            break;
        case 'jav.land': // 444
            css_adsRemove(imax.css.javland, 0, "javland");

            function jav() {
                if (document.querySelectorAll('td[width="80%"]')[1] !== null) {
                    let code = document.querySelectorAll('td[width="80%"]')[1].textContent


                    // 在番号详情页追加在线预览链接
                    function tmd_land(parentsSelector, code, textContent) {

                        function otherSearch() {
                            // 试试其他搜索：

                            let parentElement = document.querySelectorAll(parentsSelector)[0]

                            let p1 = document.createElement('p')
                            p1.id = 'p1'
                            p1.style = 'height:fit-content; margin:10px 0px 0px 0px; border-left:6px solid #38a3fd; font-size:14px; border-radius:  4px !important;box-shadow: rgb(151, 151, 151) 0px 0px 0px 0px inset; /*inset 0px 0px 15px 3px #979797;*/ background:#10141f; color:chocolate; padding:0px 0px 0px 0px;word-break:break-all;border-radius:0px 0px 0px 0px'

                            let p2 = document.createElement('p')
                            p2.style = 'background:black; padding-left:6px;font-weight:inherit; padding:6px; word-break:break-all;font-size:inherit;border-radius:0px'
                            p2.id = 'p2'


                            p1.appendChild(p2)
                            parentElement.insertBefore(p1, parentElement.childNodes[2])

                            let span = document.createElement('span')
                            span.style = 'font-weight:bolder;font-size:medium;color:bisque;'
                            span.textContent = textContent
                            p2.appendChild(span)

                            function aAdd2Parent(siteName, url, codeSlect) {
                                let a = document.createElement('a')
                                let lable = document.createElement('label')
                                lable.style = 'font-weight:inherit;display:inline-block;max-width:100%;margin-right:10px;'
                                a.href = url + codeSlect
                                a.textContent = siteName
                                a.target = '_blank'
                                a.style = 'color:inherit;/*text-decoration:revert !important;*/ font-weight:inherit'
                                lable.appendChild(a)
                                p2.appendChild(lable)
                            }

                            aAdd2Parent('MissAV[720P]', 'https://missav.com/search', '/' + code)
                            aAdd2Parent('Jable[HD]', 'https://jable.tv/search', '/' + code + '/')
                            aAdd2Parent('Supjav[ultraHD]', 'https://supjav.com/?s=', code)
                            aAdd2Parent('番号搜索[聚合]', 'https://limbopro.com/btsearch.html#gsc.tab=0&gsc.q=', code + "&gsc.sort=")
                            aAdd2Parent('谷歌搜索🔍', 'https://www.google.com/search?q=', code)
                            aAdd2Parent('Javbus📖', 'https://www.javbus.com/search/', code + '&type=&parent=ce')
                            console.log('已生成在线预览链接🔗')
                        }
                        otherSearch()
                    }

                    setTimeout(() => {
                        tmd_land('.col-md-6.col-sm-12.col-xs-12', code, '在线预览: ');
                    }, 100)
                }
            }

            jav();

            break;
        case "4hu":
            css_adsRemove(imax.css._4hu);
            hrefAttribute_set();
            break;
        case "netflav":
            window_open_defuser(); // 打断 window.open 施法
            css_adsRemove(imax.css.netflav, 0, "4hu");
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
            css_adsRemove(imax.css.js_common, 50, 'common');
            break;
        case "netflavns2":
            window_open_defuser(); // 打断 window.open 施法
            break;
        case "fc2stream":
            window_open_defuser(); // 打断 window.open 施法
            abort_on_property_read('__Y');
            break;
        case "javplayer":
            adsDomain_switch("fc2stream")
            break;
        case "supjav":
            css_adsRemove(imax.css.supjav, 0, "superjav");
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

            noWindowOpenIf('window.open')
            noWindowOpenIf('touchend')

            break;
        case "njav":
            css_adsRemove(imax.css.njav, 0, 'njav');
            js_adsRemove(uBlockOrigin.setconstant);
            js_adsRemove(uBlockOrigin.nowindowopenif);
            noWindowOpenIf('window.open')
            noWindowOpenIf('touchend')
            window_open_defuser(); // 打断 window.open 施法
            break;

        case "hitomi":
            css_adsRemove(imax.css.hitomi);
            window_open_defuser();
            abort_on_property_read();
            js_adsRemove(uBlockOrigin.addEventListenerdefuser);
            addEventListener_defuser();
            js_adsRemove(uBlockOrigin.noevalif);
            break;

        case "hanime1":
            css_adsRemove(imax.css.hanime1);
            const div = document.querySelectorAll('div.hidden-xs.hidden-sm')
            // PC 端div元素广告移除
            for (i = 0; i < div.length; i++) {
                if (div[i].querySelectorAll('iframe').length > 0) {
                    div[i].style = "display: none !important;";
                }
            }

            /*
            let ads = document.querySelectorAll('div.hidden-sm.hidden-md');
            for (i = 0; i < ads.length; i++) {
                if (ads[i].querySelectorAll("a[href*='abs']")) {
                    ads[i].remove();
                }
            }
            */

            break;

        case "javlibrary":

            async function onPageLoad() {
                await waitForPageLoad();
                console.log('网页所有元素已加载完毕');
                // 在此执行你的代码

                css_adsRemove(imax.css.javlibrary)
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
                    css_adsRemove(imax.css.javlibrary);
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
                        let father = 'div#video_info'
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
            css_adsRemove(imax.css.zhihuAds, 100, "hloyx");
            indexLogin();
            addListener("div.TopNavBar-tab-d8yaD", () => { indexLogin() });
            break;
        case 'olevod':
            css_adsRemove(imax.css.olevod, 0, 'fuckolevod');
            setTimeout(() => {
                onAdsHide()
            }, 500)
            break;

        case 'play.huaren.live':

            //setConstant('ConFig.config.ads', '{}'); // huaren影视PC版播放页视频广告加速
            css_adsRemove(imax.css.huaren_live, 200, 'huaren');
            ConFig.config.ads = {};

            break;

        case 'huaren.live':
            css_adsRemove(imax.css.huaren_live, 200, 'huaren');
            //noWindowOpenIf();
            break;

        case 'rouman':
            css_adsRemove(imax.css.rouman, 100, 'roumanx');

            setTimeout(() => {
                document.querySelectorAll("div[class*='modalCloseButton']")[0].click()
            }, 500)
            break;

        case 'rou.video':
            css_adsRemove(imax.css.rouvideo, 100, 'roumanx');
            css_adsRemove(imax.css.rouvideo, 500, 'roumanx');
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
            css_adsRemove(imax.css.novel543, 100, 'novel543x');
            break;

        case 'diyibanzhu':
            css_adsRemove(imax.css.diyibanzhu, 100, 'novel543x');
            window_open_defuser(); // 打断 window.open 施法
            break;

        case 'bi-girl': // bigirl
            css_adsRemove(imax.css.bigirl, 500, 'bigirl')
            js_adsRemove(uBlockOrigin.noevalif);
            break;

        case 'op.gg': // op.gg
            css_adsRemove(imax.css.opgg, 500, 'bigirl')
            js_adsRemove(uBlockOrigin.noevalif);
            break;

        case 'dmm.co.jp':

            // 在番号详情页追加在线预览链接
            window.addEventListener('load', function () {

                setTimeout(() => {

                    function tmd_dmm(parentsSelector, code, textContent) {
                        function otherSearch() {
                            // 试试其他搜索：
                            let parentElement = document.querySelectorAll(parentsSelector)[0]
                            let p1 = document.createElement('p')
                            p1.id = 'p1'
                            p1.style = 'height:fit-content; margin:10px 0px 0px 0px; border-left:6px solid #38a3fd; font-size:14px; border-radius:  4px !important;box-shadow: rgb(151, 151, 151) 0px 0px 0px 0px inset; /*inset 0px 0px 15px 3px #979797;*/ background:#10141f; color:chocolate; padding:0px 0px 0px 0px;word-break:break-all;border-radius:0px 0px 0px 0px'

                            let p2 = document.createElement('p')
                            p2.style = 'background:black; padding-left:6px;font-weight:inherit; padding:6px; word-break:break-all;font-size:inherit;border-radius:0px'
                            p2.id = 'p2'


                            p1.appendChild(p2)
                            //parentElement.insertBefore(p1, parentElement.childNodes[2])
                            parentElement.appendChild(p1)

                            let span = document.createElement('span')
                            span.style = 'font-weight:bolder;font-size:medium;color:bisque;'
                            span.textContent = textContent
                            p2.appendChild(span)

                            function aAdd2Parent(siteName, url, codeSlect) {
                                let a = document.createElement('a')
                                let lable = document.createElement('label')
                                lable.style = 'font-weight:inherit;display:inline-block;max-width:100%;margin-right:10px;'
                                a.href = url + codeSlect
                                a.textContent = siteName
                                a.target = '_blank'
                                a.style = 'color:inherit;/*text-decoration:revert !important;*/ font-weight:inherit'
                                lable.appendChild(a)
                                p2.appendChild(lable)
                            }

                            aAdd2Parent('MissAV[720P]', 'https://missav.ws/search', '/' + code)
                            aAdd2Parent('Jable[HD]', 'https://jable.tv/search', '/' + code + '/')
                            aAdd2Parent('Supjav[ultraHD]', 'https://supjav.com/?s=', code)
                            aAdd2Parent('番号搜索[聚合]', 'https://limbopro.com/btsearch.html#gsc.tab=0&gsc.q=', code + "&gsc.sort=")
                            aAdd2Parent('谷歌搜索🔍', 'https://www.google.com/search?q=', code)
                            aAdd2Parent('Javbus📖', 'https://www.javbus.com/search/', code + '&type=&parent=ce')
                            //aAdd2Parent('DMM🇯🇵', 'https://video.dmm.co.jp/av/list/?key=', dmm)

                            console.log('已生成在线预览链接🔗')
                        }

                        setTimeout(() => { otherSearch() }, 1500); // 等待页面加载完成

                    }

                    // 在工口漫画详情页追加在线预览链接
                    function tmd_dmm_doujin(parentsSelector, h1, textContent) {
                        function otherSearch() {

                            // 试试其他搜索：
                            let parentElement = document.querySelectorAll(parentsSelector)[0]
                            let p1 = document.createElement('p')
                            p1.id = 'p1'
                            p1.style = 'height:fit-content; margin:10px 0px 0px 0px; border-left:6px solid #38a3fd; font-size:14px; border-radius:  4px !important;box-shadow: rgb(151, 151, 151) 0px 0px 0px 0px inset; /*inset 0px 0px 15px 3px #979797;*/ background:#10141f; color:chocolate; padding:0px 0px 0px 0px;word-break:break-all;border-radius:0px 0px 0px 0px'

                            let p2 = document.createElement('p')
                            p2.style = 'background:black; padding-left:6px;font-weight:inherit; padding:6px; word-break:break-all;font-size:inherit;border-radius:0px'
                            p2.id = 'p2'


                            p1.appendChild(p2)
                            //parentElement.insertBefore(p1, parentElement.childNodes[2])
                            parentElement.appendChild(p1)

                            let span = document.createElement('span')
                            span.style = 'font-weight:bolder;font-size:medium;color:bisque;'
                            span.textContent = textContent
                            p2.appendChild(span)

                            function aAdd2Parent(siteName, url, h1Slect) {
                                let a = document.createElement('a')
                                let lable = document.createElement('label')
                                lable.style = 'font-weight:inherit;display:inline-block;max-width:100%;margin-right:10px;'
                                a.href = url + h1Slect
                                a.textContent = siteName
                                a.target = '_blank'
                                a.style = 'color:inherit;/*text-decoration:revert !important;*/ font-weight:inherit'
                                lable.appendChild(a)
                                p2.appendChild(lable)
                            }
                            aAdd2Parent('Hitomi[HD]', 'https://www.google.com/search?q=', "site:hitomi.la" + " " + h1)
                            aAdd2Parent('禁漫天堂[HD]', 'https://www.google.com/search?q=', "site:18comic.vip" + " " + h1)
                            aAdd2Parent('绅士漫画[HD]', 'https://www.google.com/search?q=', "site:www.wnacg.com" + " " + h1)
                            aAdd2Parent('Google🔍', 'https://www.google.com/search?q=', "免费" + " " + h1)

                            console.log('已生成在线预览链接🔗')
                        }

                        setTimeout(() => { otherSearch() }, 1500); // 等待页面加载完成
                    }

                    // dmm.co.jp

                    function isMobile() {
                        // 判断是否为移动设备
                        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    }


                    function code_dmm() {

                        // 1. すべての<th>要素を取得します
                        const thElements = document.querySelectorAll('th');
                        let bangou = null; // 番号を格納する変数

                        // 2. <th>要素をループして目的のテキストを探します
                        for (const th of thElements) {
                            if (th.textContent.includes('メーカー品番：')) {
                                // 3. 目的の<th>を見つけたら、その隣の要素(<td>)を取得します
                                const tdElement = th.nextElementSibling;

                                // 4. <td>要素が存在すれば、その中のテキストを取得します
                                if (tdElement) {
                                    bangou = tdElement.textContent.trim(); // .trim()で前後の余白を削除
                                    break; // 目的の要素を見つけたらループを終了
                                }
                            }
                        }

                        // 5. 結果をコンソールに出力します
                        console.log(bangou); // "HZGD-082"

                        if (bangou !== null) {
                            return bangou;
                        } else if (bangou == null) {
                            var url = window.location.href;
                            console.log("当前URL:" + url);
                            // 使用正则表达式从URL中提取cid参数
                            const match = url.match(/id=([^/&?]+)/);
                            let cid = match ? match[1] : null;
                            if (!cid) return null;
                            // 删除开头的全部数字
                            cid = cid.replace(/^\d+/, '');
                            let code_dmm = cid.replace(/0{2}/, '-');
                            // 如果 code_dmm 中没有横杠，则在第一个数字前添加横杠
                            if (!code_dmm.includes('-')) {
                                code_dmm = code_dmm.replace(/(\D*)(\d+)/, '$1-$2');
                            }
                            // 如果 code_dmm 中没有横杠，则在第一个数字前添加横杠
                            console.log(code_dmm);
                            console.log(cid);
                            return code_dmm;
                        }

                    } code_dmm();


                    if (!code_dmm() == false) {
                        var url = window.location.href;

                        if (isMobile()) {
                            // 如果是手机端，执行手机端相关函数
                            if (document.querySelector('h1 > span') !== null && (url.includes('/content/') || url.includes("dightal"))) { // https://www.dmm.co.jp/content/
                                try {

                                    if (document.querySelector('#p1') == null) {
                                        console.log('开始生成在线预览链接...')
                                        tmd_dmm('h1 > span', code_dmm(), '在其他站点播放：');
                                    }

                                } catch (e) {
                                    console.error('Error in tmd_dmm:', e);
                                }
                            } else if (document.querySelector('h1') !== null && url.includes('/monthly/')) { // https://www.dmm.co.jp/monthly/
                                try {
                                    tmd_dmm('h1', code_dmm(), '在其他站点播放：');
                                } catch (e) {
                                    console.error('Error in tmd_dmm:', e);
                                }
                            } else if (document.querySelector('h1') !== null && url.includes('/doujin/')) { // https://www.dmm.co.jp/dc/doujin/
                                // 获取标题
                                const h1 = document.querySelector('h1');
                                const text = Array.from(h1.childNodes)
                                    .filter(node => node.nodeType === Node.TEXT_NODE)
                                    .map(node => node.textContent.trim())
                                    .join('');
                                console.log(text);

                                try {
                                    if (document.querySelector('#p1') == null) {
                                        console.log('开始生成在线预览链接...')
                                        tmd_dmm_doujin('h1', text, '在其他站点观看：');
                                    }
                                } catch (e) {
                                    console.error('Error in tmd_dmm_doujin:', e);
                                }
                            }

                        } else {

                            var url = window.location.href;
                            console.log("PC端")
                            console.log("URL:" + url)
                            // 如果是PC端，执行PC端相关函数
                            if (url.includes('/content/') || url.includes("dightal")) { // https://www.dmm.co.jp/content/ 动画
                                console.log("content")
                                try {
                                    console.log('/content/ div.box-sampleInfo');

                                    if (document.querySelector('#p1') == null) {
                                        console.log('开始生成在线预览链接...')
                                        tmd_dmm('h1', code_dmm(), '在其他站点播放：');
                                    }

                                } catch (e) {
                                    console.error('/content/ Error in tmd_dmm:', e);
                                }
                            } else if (url.includes('/monthly/')) { // https://www.dmm.co.jp/monthly/ 动画
                                console.log("monthly")
                                try {
                                    console.log('/content/ div.bx-detail-player-sampleMovie');
                                    if (document.querySelector('#p1') == null) {
                                        console.log('开始生成在线预览链接...')
                                        tmd_dmm('div.bx-detail-player-sampleMovie', code_dmm(), '在其他站点播放：');
                                    }
                                } catch (e) {
                                    console.error('/monthly/ Error in tmd_dmm:', e);
                                }
                            } else if (url.includes('/doujin/')) { //https://www.dmm.co.jp/dc/doujin/ 同人

                                // 获取标题

                                const h1 = document.querySelector('h1.productTitle__txt');
                                const text = Array.from(h1.childNodes)
                                    .filter(node => node.nodeType === Node.TEXT_NODE)
                                    .map(node => node.textContent.trim())
                                    .join('');
                                console.log(text);

                                try {
                                    console.log('/doujin/ div.m-productPreview');
                                    if (document.querySelector('#p1') == null) {
                                        console.log('开始生成在线预览链接...')
                                        tmd_dmm_doujin('div.m-productPreview', text, '在其他站点观看：');
                                    }
                                } catch (e) {
                                    console.error('/doujin/ Error in tmd_dmm:', e);
                                }
                            }


                        }


                    }

                }, 2500); // 等待页面加载完成

            });

            break;


        case 'missav':

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
                            tmd('span.font-medium', code, '在其他站点播放：');
                        }
                        console.log("生成在其他站点播放链接🔗");
                    }
                }, 2000)

            }()

            css_adsRemove(imax.css.missav, 100, 'missavx');
            window_open_defuser(); // 打断 window.open 施法
            var ua_missav = navigator.userAgent.toLowerCase();
            var mobile_missav = "mobile";
            //cloudflare_captchaBypass();

            setTimeout(() => {
                let cssText = "font-size: smaller !important; background: #2563eb !important; left: 0px; top: 110px; margin-right: 5px; margin-top: 5px;" + "padding: 6px 6px 6px 6px; display: inline-block; color: white;z-index: 114154 !important; border-right: 6px solid #38a3fd; border-left: #292f33 !important; border-top: #292f33 !important; border-bottom: #292f33 !important; background: #2563eb; border-radius: 0px 0px 0px 0px; font-weight: 800 !important; text-align: right !important;"
                if (ua_missav.indexOf(mobile_missav) === -1) {

                    if (document.querySelector('div.mt-4') !== null && document.querySelector('div.mt-4').querySelector('h1') !== null && document.querySelector('#how') === null) {
                        ele_dynamicAppend("div.mt-4", "onclick", "离开页面视频继续播放", cssText, "", "missavX", 2, "button");
                        ele_dynamicAppend("div.mt-4", "onclick", "暂停", cssText, "", "missavP", 3, "button");
                        ele_dynamicAppend("div.mt-4", "href", "如何下载视频?", cssText, "https://limbopro.com/archives/M3U8-Downloader.html", "how", 4, "a");
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

                } else if (ua_missav.indexOf(mobile_missav) > -1 && document.querySelector('#missavFullScreen') === null) {
                    ele_dynamicAppend("div.mt-4", "onclick", "免广告播放", cssText, "video_Play()", "missavX", 0, "button");
                    ele_dynamicAppend("div.mt-4", "onclick", "进入全屏", cssText, "fullscreen()", "missavFullScreen", 2, "button");
                    ele_dynamicAppend("div.mt-4", "onclick", "暂停", cssText, "video_pause()", "missavPause", 1, "button");
                    ele_dynamicAppend("div.mt-4", "href", "如何下载视频", cssText, "https://limbopro.com/archives/M3U8-Downloader.html", "how", 4, "a");
                    // 添加监听器

                    if (document.getElementById("how") !== null) {
                        document.getElementById("how").target = "_blank";
                    }

                    addListenerById("missavX", () => { video_Play() }, 1000);
                    addListenerById("missavFullScreen", () => { fullscreen() }, 1000);
                    addListenerById("missavPause", () => { video_pause() }, 1000);
                }
            }, 3000)

            document.querySelectorAll('div.grid').forEach(
                (x) => {
                    if (x.querySelector('img[src*="mio.jpg"]')) { // 移除 missav 播放页广告
                        x.style = 'display:none !important;'
                    }
                }
            )

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
        } else if (window.location.href.toLowerCase().indexOf('91porn.') !== -1) {
            console.log('SO DO NOTING.')
        } else {
            let daohang = setInterval(() => {
                if (!((document.querySelector("button#x4Home")) && (document.querySelector("script[src*='Adblock4limbo.function.js']")))) {
                    third_party_fileX("script", imax.js.functionx, "body"); // js 外部引用 标签 <script>
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
            button_alert.textContent = '如何下载视频?'
            button_alert.id = 'alertDownload'

            button_alert.addEventListener('click', (() => {
                alert(' 1.复制视频下载地址；2.iOS用户推荐使用名叫 "Documents" 的 app 下载视频，打开 Documents app -> 浏览器 - 粘贴视频下载地址；Android 暂无建议；')
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
