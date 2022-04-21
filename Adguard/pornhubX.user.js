// ==UserScript==
// @name         Pornhub 广告移除（图片广告及视频广告）
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @license GNU GPLv3
// @description  通过 JavaScript 移除Pornhub 上的视频广告和图片广告，保持界面清爽干净无打扰！
// @author       limbopro
// @match        https://cn.pornhub.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pornhub.com
// @run-at document-end
// @grant        none
// ==/UserScript==

// 移除带广告脚本
function pornhub_scriptAds() {
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

// 移除图片广告
//setTimeout(()=>{
var newstyle = ".topAdContainter,div.topAdContainter,.adContainer.clearfix,.adContainer,div#adSpot,a[href*=\"ads\"]," +
    ".video-wrapper > #player + [class],.underplayerAd,.realsex,.adsbytrafficjunky,.adLink," +
    "#pb_template,#main-container > .abovePlayer,.sponsor-text," +
    ".video-wrapper > div#player~div[class$=\" hd clear\"],#hd-rightColVideoPage > .clearfix:first-child," +
    ".playerFlvContainer > div#pb_template[style],a[href*='livehd']," +
    "[href*='premium_signup?type=PremiumBtn'] {display:none !important;}" +
    ".mgp_container .mgp_optionsMenu.mgp_level3 .mgp_subPage>.mgp_content{opacity:0;pointer-events:auto;transform:translate(-260px, 0) !important}" +
    ".mgp_preRollSkipButton {z-index:8;position:absolute;padding:10px 25px;background:rgba(0,0,0,.55)}"; // 样式文本
var creatcss = document.createElement("style"); // 新建style tag
creatcss.innerHTML = newstyle; // 插入样式文本
document.getElementsByTagName('head')[0].appendChild(creatcss) // 追加新Style至第一个 head 标签后
//},500);

// 自动跳过interstitial
function ele_skip() {
    const ele_skip = "[onclick*='clearModalCookie']"
    const exist = document.querySelectorAll(ele_skip);
    if (document.querySelectorAll(ele_skip).length > 0) {
        const href = exist[1].href;
        window.location = href;
    }
}

pornhub_scriptAds()
setTimeout(function () {
    ele_skip()
}, 500);