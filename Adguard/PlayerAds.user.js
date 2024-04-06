// ==UserScript==
// @name         PlayerAds
// @namespace    https://github.com/limbopro/Adblock4limbo/raw/main/Adguard/PlayerAds.user.js
// @version      0.0.0.1
// @license      CC BY-NC-SA 4.0
// @description  利用 window_open_defuser() ，禁止成人站播放页弹窗广告；
// @author       limbopro
// @match        https://ddrk.me/*
// @match        https://ddys.tv/*
// @match        https://ddys.pro/*
// @match        https://ddys.art/*
// @match        https://ddys2.me/*
// @match        https://ddys.mov/*
// @match        https://jable.tv/*
// @match        https://cnys.tv/*
// @match        https://en.jable.tv/*
// @match        https://*.jable.tv/*
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
// @match        https://555dyx1.com/*
// @match        https://555dyx3.com/*
// @match        https://555dyx4.com/*
// @match        https://555dyx5.com/*
// @match        https://o8tv.com/*
// @match        https://www.wnacg.com/*
// @match        https://www.wnacg.org/*
// @match        https://w.duboku.io/*
// @match        https://www.duboku.tv/*
// @match        https://www.libvio.com/*
// @match        https://www.libvio.pro/*
// @match        https://www.libvio.top/*
// @match        https://www.libvio.me/*
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
// @match        https://www.nivod4.tv/*
// @match        https://www.nivod8.tv/*
// @match        https://m.nivod4.tv/*
// @match        https://m.nivod8.tv/*
// @match        https://www.javbus.com/*
// @match        https://cn1.91short.com/*
// @match        https://xiaobaotv.net/*
// @match        https://javday.tv/*
// @match        https://www.xvideos.com/*
// @match        https://4hu.tv/*
// @match        https://netflav.com/*
// @match        https://netflav5.com/*
// @match        https://filemoon.sx/*
// @match        https://emturbovid.com/*
// @match        https://netflavns1.com/*
// @match        https://fc2stream.tv/*
// @match        https://embedrise.com/*
// @match        https://mmfl02.com/*
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
// @match        https://tameikegoro.jp/
// @match        https://njav.tv/
// @match        https://www.ntdm9.com/
// @match        https://www.javlibrary.com/*
// @match        https://rouman5.com/*
// @exclude      https://limbopro.com/*
// @exclude      https://limbopro.com/*
// @exclude      https://venus-av.com/*
// @exclude      https://developer.mozilla.org/
// @exclude      https://www.youtube.com/*
// @exclude      https://www.xvideos.com/*
// @match        https://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=limbopro.com
// @run-at       document-end
// @grant        none
// ==/UserScript==

/**
 * ---------------------------
 * Author: limbopro
 * View: https://limbopro.com/archives/12904.html
 * 电报群组：https://t.me/Adblock4limbo
 * FAQ：https://t.me/Adblock4limbo/21 常见问题与回答
 * Github：https://github.com/limbopro/Adblock4limbo
 * ---------------------------
 */

/**
 * 为网页增加导航按钮，将位于页面右下角呈现；
 * 如需取消该按钮，请将如上调用代码注释；
*/

window_open_defuser(); // 打断 window.open 施法

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