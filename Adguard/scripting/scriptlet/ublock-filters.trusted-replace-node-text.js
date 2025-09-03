/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock

*/

// ruleset: ublock-filters

// Important!
// Isolate from global scope

// Start of local scope
(function uBOL_replaceNodeText() {

/******************************************************************************/

function replaceNodeText(
    nodeName,
    pattern,
    replacement,
    ...extraArgs
) {
    replaceNodeTextFn(nodeName, pattern, replacement, ...extraArgs);
}

function replaceNodeTextFn(
    nodeName = '',
    pattern = '',
    replacement = ''
) {
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('replace-node-text.fn', ...Array.from(arguments));
    const reNodeName = safe.patternToRegex(nodeName, 'i', true);
    const rePattern = safe.patternToRegex(pattern, 'gms');
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    const reIncludes = extraArgs.includes || extraArgs.condition
        ? safe.patternToRegex(extraArgs.includes || extraArgs.condition, 'ms')
        : null;
    const reExcludes = extraArgs.excludes
        ? safe.patternToRegex(extraArgs.excludes, 'ms')
        : null;
    const stop = (takeRecord = true) => {
        if ( takeRecord ) {
            handleMutations(observer.takeRecords());
        }
        observer.disconnect();
        if ( safe.logLevel > 1 ) {
            safe.uboLog(logPrefix, 'Quitting');
        }
    };
    const textContentFactory = (( ) => {
        const out = { createScript: s => s };
        const { trustedTypes: tt } = self;
        if ( tt instanceof Object ) {
            if ( typeof tt.getPropertyType === 'function' ) {
                if ( tt.getPropertyType('script', 'textContent') === 'TrustedScript' ) {
                    return tt.createPolicy(getRandomTokenFn(), out);
                }
            }
        }
        return out;
    })();
    let sedCount = extraArgs.sedCount || 0;
    const handleNode = node => {
        const before = node.textContent;
        if ( reIncludes ) {
            reIncludes.lastIndex = 0;
            if ( safe.RegExp_test.call(reIncludes, before) === false ) { return true; }
        }
        if ( reExcludes ) {
            reExcludes.lastIndex = 0;
            if ( safe.RegExp_test.call(reExcludes, before) ) { return true; }
        }
        rePattern.lastIndex = 0;
        if ( safe.RegExp_test.call(rePattern, before) === false ) { return true; }
        rePattern.lastIndex = 0;
        const after = pattern !== ''
            ? before.replace(rePattern, replacement)
            : replacement;
        node.textContent = node.nodeName === 'SCRIPT'
            ? textContentFactory.createScript(after)
            : after;
        if ( safe.logLevel > 1 ) {
            safe.uboLog(logPrefix, `Text before:\n${before.trim()}`);
        }
        safe.uboLog(logPrefix, `Text after:\n${after.trim()}`);
        return sedCount === 0 || (sedCount -= 1) !== 0;
    };
    const handleMutations = mutations => {
        for ( const mutation of mutations ) {
            for ( const node of mutation.addedNodes ) {
                if ( reNodeName.test(node.nodeName) === false ) { continue; }
                if ( handleNode(node) ) { continue; }
                stop(false); return;
            }
        }
    };
    const observer = new MutationObserver(handleMutations);
    observer.observe(document, { childList: true, subtree: true });
    if ( document.documentElement ) {
        const treeWalker = document.createTreeWalker(
            document.documentElement,
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT
        );
        let count = 0;
        for (;;) {
            const node = treeWalker.nextNode();
            count += 1;
            if ( node === null ) { break; }
            if ( reNodeName.test(node.nodeName) === false ) { continue; }
            if ( node === document.currentScript ) { continue; }
            if ( handleNode(node) ) { continue; }
            stop(); break;
        }
        safe.uboLog(logPrefix, `${count} nodes present before installing mutation observer`);
    }
    if ( extraArgs.stay ) { return; }
    runAt(( ) => {
        const quitAfter = extraArgs.quitAfter || 0;
        if ( quitAfter !== 0 ) {
            setTimeout(( ) => { stop(); }, quitAfter);
        } else {
            stop();
        }
    }, 'interactive');
}

function getRandomTokenFn() {
    const safe = safeSelf();
    return safe.String_fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1, 'asap': 1,
            'interactive': 2, 'end': 2, '2': 2,
            'complete': 3, 'idle': 3, '3': 3,
        };
        const tokens = Array.isArray(state) ? state : [ state ];
        for ( const token of tokens ) {
            const prop = `${token}`;
            if ( Object.hasOwn(targets, prop) === false ) { continue; }
            return targets[prop];
        }
        return 0;
    };
    const runAt = intFromReadyState(when);
    if ( intFromReadyState(document.readyState) >= runAt ) {
        fn(); return;
    }
    const onStateChange = ( ) => {
        if ( intFromReadyState(document.readyState) < runAt ) { return; }
        fn();
        safe.removeEventListener.apply(document, args);
    };
    const safe = safeSelf();
    const args = [ 'readystatechange', onStateChange, { capture: true } ];
    safe.addEventListener.apply(document, args);
}

function safeSelf() {
    if ( scriptletGlobals.safeSelf ) {
        return scriptletGlobals.safeSelf;
    }
    const self = globalThis;
    const safe = {
        'Array_from': Array.from,
        'Error': self.Error,
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
        'Math_floor': Math.floor,
        'Math_max': Math.max,
        'Math_min': Math.min,
        'Math_random': Math.random,
        'Object': Object,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'Object_defineProperties': Object.defineProperties.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'Object_hasOwn': Object.hasOwn.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String': self.String,
        'String_fromCharCode': String.fromCharCode,
        'String_split': String.prototype.split,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'JSON': self.JSON,
        'JSON_parseFn': self.JSON.parse,
        'JSON_stringifyFn': self.JSON.stringify,
        'JSON_parse': (...args) => safe.JSON_parseFn.call(safe.JSON, ...args),
        'JSON_stringify': (...args) => safe.JSON_stringifyFn.call(safe.JSON, ...args),
        'log': console.log.bind(console),
        // Properties
        logLevel: 0,
        // Methods
        makeLogPrefix(...args) {
            return this.sendToLogger && `[${args.join(' \u205D ')}]` || '';
        },
        uboLog(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('info', ...args);
            
        },
        uboErr(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('error', ...args);
        },
        escapeRegexChars(s) {
            return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true, expect: true };
            }
            const expect = (options.canNegate !== true || pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            if ( options.flags !== undefined ) {
                return {
                    re: new this.RegExp(this.escapeRegexChars(pattern),
                        options.flags
                    ),
                    expect,
                };
            }
            return { pattern, expect };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            if ( details.re ) {
                return this.RegExp_test.call(details.re, haystack) === details.expect;
            }
            return haystack.includes(details.pattern) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = this.escapeRegexChars(pattern);
                return new RegExp(verbatim ? `^${reStr}$` : reStr, flags);
            }
            try {
                return new RegExp(match[1], match[2] || undefined);
            }
            catch {
            }
            return /^/;
        },
        getExtraArgs(args, offset = 0) {
            const entries = args.slice(offset).reduce((out, v, i, a) => {
                if ( (i & 1) === 0 ) {
                    const rawValue = a[i+1];
                    const value = /^\d+$/.test(rawValue)
                        ? parseInt(rawValue, 10)
                        : rawValue;
                    out.push([ a[i], value ]);
                }
                return out;
            }, []);
            return this.Object_fromEntries(entries);
        },
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
        },
        offIdle(id) {
            if ( self.requestIdleCallback ) {
                return self.cancelIdleCallback(id);
            }
            return self.cancelAnimationFrame(id);
        }
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    safe.logLevel = scriptletGlobals.logLevel || 1;
    let lastLogType = '';
    let lastLogText = '';
    let lastLogTime = 0;
    safe.toLogText = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( text === lastLogText && type === lastLogType ) {
            if ( (Date.now() - lastLogTime) < 5000 ) { return; }
        }
        lastLogType = type;
        lastLogText = text;
        lastLogTime = Date.now();
        return text;
    };
    try {
        const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
        let bcBuffer = [];
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            if ( bcBuffer === undefined ) {
                return bc.postMessage({ what: 'messageToLogger', type, text });
            }
            bcBuffer.push({ type, text });
        };
        bc.onmessage = ev => {
            const msg = ev.data;
            switch ( msg ) {
            case 'iamready!':
                if ( bcBuffer === undefined ) { break; }
                bcBuffer.forEach(({ type, text }) =>
                    bc.postMessage({ what: 'messageToLogger', type, text })
                );
                bcBuffer = undefined;
                break;
            case 'setScriptletLogLevelToOne':
                safe.logLevel = 1;
                break;
            case 'setScriptletLogLevelToTwo':
                safe.logLevel = 2;
                break;
            }
        };
        bc.postMessage('areyouready?');
    } catch {
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            safe.log(`uBO ${text}`);
        };
    }
    return safe;
}

/******************************************************************************/

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [["script","(function serverContract()","(()=>{if(\"YOUTUBE_PREMIUM_LOGO\"===ytInitialData?.topbar?.desktopTopbarRenderer?.logo?.topbarLogoRenderer?.iconImage?.iconType||location.href.startsWith(\"https://www.youtube.com/tv#/\")||location.href.startsWith(\"https://www.youtube.com/embed/\"))return;document.addEventListener(\"DOMContentLoaded\",(function(){const t=()=>{const t=document.getElementById(\"movie_player\");if(!t)return;if(!t.getStatsForNerds?.()?.debug_info?.startsWith?.(\"SSAP, AD\"))return;const e=t.getProgressState?.();e&&e.duration>0&&(e.loaded<e.duration||e.duration-e.current>1)&&t.seekTo?.(e.duration)};t(),new MutationObserver((()=>{t()})).observe(document,{childList:!0,subtree:!0})}));const t={apply:(t,e,o)=>{const n=o[0];return\"function\"==typeof n&&n.toString().includes(\"onAbnormalityDetected\")&&(o[0]=function(){}),Reflect.apply(t,e,o)}};window.Promise.prototype.then=new Proxy(window.Promise.prototype.then,t);const e={construct:(t,e,o)=>{const n=e[0],r=e[1]?.body;return n?.includes(\"youtubei\")&&r?.includes('\"contentPlaybackContext\":{')&&!r?.includes(\"youtube.com/shorts/\")&&(r.includes('\"params\":\"')?e[1].body=r.replace('\"params\":\"','\"params\":\"yAEB'):e[1].body=r.replace('\"contentCheckOk\":false','\"contentCheckOk\":false,\"params\":\"yAEB\"')),Reflect.construct(t,e,o)}};window.Request=new Proxy(window.Request,e)})();(function serverContract()","sedCount","1"],["script","'G-1B4LC0KT6C');","'G-1B4LC0KT6C'); localStorage.setItem(\"tuna\", \"dW5kZWZpbmVk\"); localStorage.setItem(\"sausage\", \"ZmFsc2U=\"); window.setTimeout(function(){fuckYouUblockAndJobcenterTycoon(false)},200);"],["script","_w.keyMap=","(()=>{const e={apply:(e,t,n)=>{let o=Reflect.apply(e,t,n);return o instanceof HTMLIFrameElement&&!o.src&&o.contentWindow&&(o.contentWindow.document.body.getElementsByTagName=window.document.body.getElementsByTagName,o.contentWindow.MutationObserver=void 0),o}};HTMLBodyElement.prototype.appendChild=new Proxy(HTMLBodyElement.prototype.appendChild,e);const t={apply:(e,t,n)=>(t instanceof HTMLLIElement&&\"b_algo\"===t?.classList?.value&&\"a\"===n?.[0]&&setTimeout((()=>{t.style.display=\"none\"}),100),Reflect.apply(e,t,n))};HTMLBodyElement.prototype.getElementsByTagName=new Proxy(HTMLBodyElement.prototype.getElementsByTagName,t)})();_w.keyMap="],["script","//tele();","telek3();"],["script","/!\\(Object\\.values.*?return false;/g"],["script","/[a-z]+\\(\\) &&/","!0&&"],["script","window.location.href = '/hello';"],["script","/googletag.*?enableServices\\(\\)\\;/s"],["script","/googletag\\.pubads\\(\\).*rewardedSlot\\)\\;\\s+\\}\\)\\;/s"],["script","(function($)","(function(){const a=document.createElement(\"div\");document.documentElement.appendChild(a),setTimeout(()=>{a&&a.remove()},100)})(); (function($)"],["script","/window\\.dataLayer.+?(location\\.replace\\(\\S+?\\)).*/","$1"],["script","WB.defer","window.wbads={public:{getDailymotionAdsParamsForScript:function(a,b){b(\"\")},setTargetingOnPosition:function(a,b){return}}};WB.defer","condition","wbads.public.setTargetingOnPosition"],["script","var ISMLIB","!function(){const o={apply:(o,n,r)=>(new Error).stack.includes(\"refreshad\")?0:Reflect.apply(o,n,r)};window.Math.floor=new Proxy(window.Math.floor,o)}();var ISMLIB"],["script","gtag != null","false"],["script","\"adBlockWallEnabled\":true","\"adBlockWallEnabled\":false"],["script","/vastURL:.*?',/","vastURL: '',"],["script","/url:.*?',/","url: '',"],["script","a.onerror","xxx"],["script","/\\$.*embed.*.appendTo.*;/","","condition","appendTo"],["script","setInterval"],["script","/'globalConfig':.*?\",\\s};var exportz/s","};var exportz"],["script","/\\\"homad\\\",/"],["script","/\\\"homad\\\":\\{\\\"state\\\":\\\"enabled\\\"\\}/","\"homad\":{\"state\":\"disabled\"}"],["script","useAdBlockDefend: true","useAdBlockDefend: false"],["script","/if \\([a-z0-9]{10} === [a-z0-9]{10}/","if(true"],["script","/false;/gm","true;","condition","isSubscribed"],["script","('t_modal')","('go_d2')"],["script","/window\\.location\\.href\\s*=\\s*\"intent:\\/\\/([^#]+)#Intent;[^\"]*\"/gm","window.location.href = \"https://$1\""],["script","Android/","false/","stay","1"],["script","alert","false"],["script","2000","10"],["script","/\\d{2}00/gms","10","condition","/timer|count|getElementById/gms"],["script","/^window\\.location\\.href.*\\'$/gms","","condition","buoy"],["script","/1000|100|6|30|40/gm","1","condition","/timerSeconds|counter/"],["script","getlink.removeClass('hidden');","gotolink.removeClass('hidden');"],["script","stopCountdown();","resumeCountdown();"],["script","/initialTimeSeconds = \\d+/","initialTimeSeconds = 7"],["script","/10|20/","0","condition","/countdownSeconds|wpsafelinkCount/"],["script","/1000|1700|5000/gm","10","condition","/countdownSeconds|wpsafelinkCount/"],["script","/^([^{])/","document.addEventListener('DOMContentLoaded',()=>{const i=document.createElement('iframe');i.style='height:0;width:0;border:0';i.id='aswift_0';document.body.appendChild(i);i.focus();const f=document.createElement('div');f.id='9JJFp';document.body.appendChild(f);});$1","sedCount","2"],["script","/window\\.location.*?;/"],["script","typeof cdo == 'undefined' || document.querySelector('div.textads.banner-ads.banner_ads.ad-unit.ad-zone.ad-space.adsbox') == undefined","false"],["script","/window\\.location\\.href='.*';/","","condition","openLink"],["script","'IFRAME'","'BODY'"],["script","timeLeft = duration","timeLeft = 1"],["script",";return;","","condition","_0x"],["script","/return Array[^;]+/","return true"],["script","return!![]","return![]"],["script","/\\d{4}/gm","10","condition","count"],["script","/getElementById\\('.*'\\).*'block';/gm","getElementById('btn6').style.display = 'block';","condition","count"],["script","3000)","10)"],["script","isadblock = 1;","isadblock = 0;"],["script","\"#sdl\"","\"#dln\""],["script","event.message);","event.message); /*start*/ !function(){\"use strict\";let t={log:window.console.log.bind(console),getPropertyValue:CSSStyleDeclaration.prototype.getPropertyValue,setAttribute:Element.prototype.setAttribute,getAttribute:Element.prototype.getAttribute,appendChild:Element.prototype.appendChild,remove:Element.prototype.remove,cloneNode:Element.prototype.cloneNode,Element_attributes:Object.getOwnPropertyDescriptor(Element.prototype,\"attributes\").get,Array_splice:Array.prototype.splice,Array_join:Array.prototype.join,createElement:document.createElement,getComputedStyle:window.getComputedStyle,Reflect:Reflect,Proxy:Proxy,crypto:window.crypto,Uint8Array:Uint8Array,Object_defineProperty:Object.defineProperty.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),String_replace:String.prototype.replace},e=t.crypto.getRandomValues.bind(t.crypto),r=function(e,r,l){return\"toString\"===r?e.toString.bind(e):t.Reflect.get(e,r,l)},l=function(r){let o=function(t){return t.toString(16).padStart(2,\"0\")},p=new t.Uint8Array((r||40)/2);e(p);let n=t.String_replace.call(t.Array_join.call(Array.from(p,o),\"\"),/^\\d+/g,\"\");return n.length<3?l(r):n},o=l(15);window.MutationObserver=new t.Proxy(window.MutationObserver,{construct:function(e,r){let l=r[0],p=function(e,r){for(let p=e.length,n=p-1;n>=0;--n){let c=e[n];if(\"childList\"===c.type&&c.addedNodes.length>0){let i=c.addedNodes;for(let a=0,y=i.length;a<y;++a){let u=i[a];if(u.localName===o){t.Array_splice.call(e,n,1);break}}}}0!==e.length&&l(e,r)};r[0]=p;let n=t.Reflect.construct(e,r);return n},get:r}),window.getComputedStyle=new t.Proxy(window.getComputedStyle,{apply(e,l,p){let n=t.Reflect.apply(e,l,p);if(\"none\"===t.getPropertyValue.call(n,\"clip-path\"))return n;let c=p[0],i=t.createElement.call(document,o);t.setAttribute.call(i,\"class\",t.getAttribute.call(c,\"class\")),t.setAttribute.call(i,\"id\",t.getAttribute.call(c,\"id\")),t.setAttribute.call(i,\"style\",t.getAttribute.call(c,\"style\")),t.appendChild.call(document.body,i);let a=t.getPropertyValue.call(t.getComputedStyle.call(window,i),\"clip-path\");return t.remove.call(i),t.Object_defineProperty(n,\"clipPath\",{get:(()=>a).bind(null)}),n.getPropertyValue=new t.Proxy(n.getPropertyValue,{apply:(e,r,l)=>\"clip-path\"!==l[0]?t.Reflect.apply(e,r,l):a,get:r}),n},get:r})}(); document.currentScript.textContent=document.currentScript.textContent.replace(/\\/\\*start\\*\\/(.*)\\/\\*end\\*\\//g,\"\");/*end*/"],["script","/\\.cloudfront\\.net|window\\.open/g","false"],["script","/element\\.contains\\(document\\.activeElement\\)|document\\.hidden && !timeCounted/g","true"],["script","!seen && ad","false"],["script","window.location.href","temp","includes","linkToOpen"],["script","(isAdsenseBlocked)","(false)"],["script","/#Intent.*?end/"],["script","intent","https"],["script","!isAdTriggered","false"],["script","900","100"],["script","3000","10","condition","getElementById"],["script","/.*adConfig.*frequency_period.*/","(async () => {const a=location.href;if(!a.includes(\"/download?link=\"))return;const b=new URL(a),c=b.searchParams.get(\"link\");try{location.assign(`${location.protocol}//${c}`)}catch(a){}} )();"],["script","break;case $."],["script","/^/","(()=>{window.admiral=function(d,a,b){if(\"function\"==typeof b)try{b({})}catch(a){}}})();","sedCount","1"],["script","window.googletag =","/*start*/(function(){let link=document.createElement(\"link\");link.rel=\"stylesheet\";link.href=\"/common/css/etoday.css\";document.head.appendChild(link)})();document.currentScript.textContent=document.currentScript.textContent.replace(/\\/\\*start\\*\\/(.*)\\/\\*end\\*\\//g,\"\");/*end*/window.googletag ="],["script","window.dataLayer =","/*start*/(function(){let link=document.createElement(\"link\");link.rel=\"stylesheet\";link.href=\"/css_renew/pc/common.css\";document.head.appendChild(link)})();document.currentScript.textContent=document.currentScript.textContent.replace(/\\/\\*start\\*\\/(.*)\\/\\*end\\*\\//g,\"\");/*end*/window.dataLayer ="],["script","_paq.push","/*start*/(function(){let link=document.createElement(\"link\");link.rel=\"stylesheet\";link.href=\"/css/pc/ecn_common.min.css\";document.head.appendChild(link)})();document.currentScript.textContent=document.currentScript.textContent.replace(/\\/\\*start\\*\\/(.*)\\/\\*end\\*\\//g,\"\");/*end*/_paq.push"],["script","window.dataLayer =","/*start*/(function(){let link=document.createElement(\"link\");link.rel=\"stylesheet\";link.href=\"/wp-content/themes/hts_v2/style.css\";document.head.appendChild(link)})();document.currentScript.textContent=document.currentScript.textContent.replace(/\\/\\*start\\*\\/(.*)\\/\\*end\\*\\//g,\"\");/*end*/window.dataLayer ="],["script","window.dataLayer =","/*start*/(function(){let link=document.createElement(\"link\");link.rel=\"stylesheet\";link.href=\"/_css/css.css\";document.head.appendChild(link)})();document.currentScript.textContent=document.currentScript.textContent.replace(/\\/\\*start\\*\\/(.*)\\/\\*end\\*\\//g,\"\");/*end*/window.dataLayer ="],["script","var _paq =","/*start*/(function(){let link=document.createElement(\"link\");link.rel=\"stylesheet\";link.href=\"/Content/css/style.css\";document.head.appendChild(link)})();document.currentScript.textContent=document.currentScript.textContent.replace(/\\/\\*start\\*\\/(.*)\\/\\*end\\*\\//g,\"\");/*end*/var _paq =","sedCount","1"],["script","var localize =","/*start*/(function(){document.querySelectorAll(\"script[wp-data]\").forEach(element=>{const html=new DOMParser().parseFromString(atob(element.getAttribute(\"wp-data\")),\"text/html\");html.querySelectorAll(\"link:not([as])\").forEach(linkEl=>{element.after(linkEl)});element.parentElement.removeChild(element);})})();document.currentScript.textContent=document.currentScript.textContent.replace(/\\/\\*start\\*\\/(.*)\\/\\*end\\*\\//g,\"\");/*end*/var localize =","sedCount","1"],["script","/^.+/gms","!function(){var e=Object.getOwnPropertyDescriptor(Element.prototype,\"innerHTML\").set;Object.defineProperty(Element.prototype,\"innerHTML\",{set:function(t){return t.includes(\"html-load.com\")?e.call(this,\"\"):e.call(this,t)}})}();","condition","html-load.com"],["script","(isNoAds)","(true)"],["script","/openNewTab\\(\".*?\"\\)/g","null"],["script","let playerType","window.addEventListener(\"load\",()=>{if(typeof playMovie===\"function\"){playMovie()}});let playerType"],["script","window.lazyLoadOptions =","if(typeof ilk_part_getir===\"function\"){ilk_part_getir()}window.lazyLoadOptions =","sedCount","1"],["script","popactive","nopop"],["script","/manageAds\\(video_urls\\[activeItem\\], video_seconds\\[activeItem\\], ad_urls\\[activeItem],true\\);/","playVideo();","condition","playAdd"],["script","skipButton.innerText !==","\"\" ==="],["script","var controlBar =","skipButton.click();var controlBar =","sedCount","1"],["script","vastTag","v"],["script","/protect_block.*?,/"],["script","/window.open.*/gms","window.open(url, \"_self\");}"],["script","/window\\.location\\.href.*?;/"],["script","/\\(window\\.show[^\\)]+\\)/","(true)","condition","classList.add"],["script","(isAdblock)","(false)"],["style","visibility: visible !important;","display: none !important;"],["script","currentTime = 1500 * 2","currentTime = 0"],["script","/^.+/s","navigator.serviceWorker.getRegistrations().then((registrations=>{for(const registration of registrations){if(registration.scope.includes(\"streamingcommunity.computer\")){registration.unregister()}}}));","condition","swDidInit"],["script","\"adsDisabled\":false","\"adsDisabled\":true"],["style","::after{content:\" \";display:table;box-sizing:border-box}","{display: none !important;}","condition","text-decoration:none;vertical-align:middle"],["script","?30:0","?0:0"],["script","({});","({}); function showHideElements(t,e){$(t).hide(),$(e).show()}function disableBtnclc(){let t=document.querySelector(\".submit-captcha\");t.disabled=!0,t.innerHTML=\"Loading...\"}function refreshButton(){$(\".refresh-capthca-btn\").addClass(\"disabled\")}function copyInput(){let t=document.querySelectorAll(\".copy-input\");t.forEach(t=>{navigator.clipboard.writeText(t.value)}),Materialize.toast(\"Copied!\",2e3)}function imgOnError(){$(\".ua-check\").html(window.atob(\"PGRpdiBjbGFzcz0idGV4dC1kYW5nZXIgZm9udC13ZWlnaHQtYm9sZCBoNSBtdC0xIj5DYXB0Y2hhIGltYWdlIGZhaWxlZCB0byBsb2FkLjxicj48YSBvbmNsaWNrPSJsb2NhdGlvbi5yZWxvYWQoKSIgc3R5bGU9ImNvbG9yOiM2MjcwZGE7Y3Vyc29yOnBvaW50ZXIiIGNsYXNzPSJ0ZXh0LWRlY29yYXRpb25lLW5vbmUiPlBsZWFzZSByZWZyZXNoIHRoZSBwYWdlLiA8aSBjbGFzcz0iZmEgZmEtcmVmcmVzaCI+PC9pPjwvYT48L2Rpdj4=\"))}$(window).on(\"load\",function(){$(\"body\").addClass(\"loaded\")}),window.history.replaceState&&window.history.replaceState(null,null,window.location.href),$(\".remove-spaces\").on(\"input\",function(){this.value=this.value.replace(/\\s/g,\"\")}),$(document).on(\"click\",\"#toast-container .toast\",function(){$(this).fadeOut(function(){$(this).remove()})}),$(\".tktemizle\").on(\"input propertychange\",function(){let t=$(this).val().match(\"access_token=(.*?)&\");t&&$(\".tktemizle\").val(t[1])}),$(document).ready(function(){let t=[{button:$(\".t-followers-button\"),menu:$(\".t-followers-menu\")},{button:$(\".t-hearts-button\"),menu:$(\".t-hearts-menu\")},{button:$(\".t-chearts-button\"),menu:$(\".t-chearts-menu\")},{button:$(\".t-views-button\"),menu:$(\".t-views-menu\")},{button:$(\".t-shares-button\"),menu:$(\".t-shares-menu\")},{button:$(\".t-favorites-button\"),menu:$(\".t-favorites-menu\")},{button:$(\".t-livestream-button\"),menu:$(\".t-livestream-menu\")},{button:$(\".ig-followers-button\"),menu:$(\".ig-followers-menu\")},{button:$(\".ig-likes-button\"),menu:$(\".ig-likes-menu\")}];$.each(t,function(t,e){e.button.click(function(){$(\".colsmenu\").addClass(\"nonec\"),e.menu.removeClass(\"nonec\")})})});"],["script","/devtoolsDetector\\.launch\\(\\)\\;/"],["script","//$('#btn_download').click();","$('#btn_download').click();","sedCount","1"],["script","/reymit_ads_for_categories\\.length>0|reymit_ads_for_streams\\.length>0/g","false"],["script","/data: \\[.*\\],/","data: [],","condition","ads_num"],["script","/for\\s*\\(\\s*(const|let|var).*?\\)\\;return\\;\\}_/g","_","condition","attribute"],["script","adv_","","condition","flashvars"],["script","typeof window.loadthree","typeof window.loadthree === true"],["script","(window.loadthree","(window.loadthree === undefined || true || window.googlescriptloaded"],["script","/if \\(api && url\\).+/s","window.location.href = url","condition","quick-link"],["script","= getSetTimeout()","= function newTimeout(func, timer) {func()}"],["script","IFRAME","BODY"],["script","(hasBlocker)","(false)"],["P","/\\.[^.]+(1Password password manager|download 1Password)[^.]+/"],["script","startTime: '5'","startTime: '0'"],["script","/(function downloadHD\\(obj\\) {)[\\s\\S]*?(datahref.*)[\\s\\S]*?(window.location.href = datahref;)[\\s\\S]*/","$1$2$3}"],["script","buton.setAttribute","location.href=urldes;buton.setAttribute"],["script","clickCount === numberOfAdsBeforeCopy","numberOfAdsBeforeCopy >= clickCount"],["script","/if\\(.&&.\\.target\\)/","if(false)"],["script","document.getElementById('choralplayer_reference_script')","!document.getElementById('choralplayer_reference_script')"],["script","(document.hasFocus())","(false)"],["script","popunder","","condition","popunder","stay","1"],["script","(adEnable)","(true)"],["script","\"}};","\"}}; jQuery(document).ready(function(t){let e=document.createElement(\"link\");e.setAttribute(\"rel\",\"stylesheet\"),e.setAttribute(\"media\",\"all\"),e.setAttribute(\"href\",\"https://dragontea.ink/wp-content/cache/autoptimize/css/autoptimize_5bd1c33b717b78702e18c3923e8fa4f0.css\"),document.head.appendChild(e),t(\".dmpvazRKNzBib1IxNjh0T0cwUUUxekEyY3F6Wm5QYzJDWGZqdXFnRzZ0TT0nuobc\").parent().prev().prev().prev();var a=1,n=16,r=11,i=\"08\",g=\"\",c=\"\",d=0,o=2,p=3,s=0,h=100;s++,s*=2,h/=2,h/=2;var $=3,u=20;function b(){let e=t(\".entry-header.header\"),a=parseInt(e.attr(\"data-id\"));return a}function m(t,e,a,n,r){return CryptoJSAesJson.decrypt(t,e+a+n+r)}function f(t,e){return CryptoJSAesJson.decrypt(t,e)}function l(t,e){return parseInt(t.toString()+e.toString())}function k(t,e,a){return t.toString()+e.toString()+a.toString()}$*=2,u=u-2-2,i=\"03\",o++,r++,n=n/4-2,a++,a*=4,n++,n++,n++,a-=5,r++,i=\"07\",t(\".reading-content .page-break img\").each(function(){var e,g=t(this),c=f(g.attr(\"id\").toString(),(e=parseInt((b()+l(r,i))*a-t(\".reading-content .page-break img\").length),e=l(2*n+1,e)).toString());g.attr(\"id\",c)}),r=0,n=0,a=0,i=0,t(\".reading-content .page-break img\").each(function(){var e=t(this),a=parseInt(e.attr(\"id\").replace(/image-(\\d+)[a-z]+/i,\"$1\"));t(\".reading-content .page-break\").eq(a).append(e)}),t(\".reading-content .page-break img\").each(function(){var e=t(this).attr(\"id\");g+=e.substr(-1),t(this).attr(\"id\",e.slice(0,-1))}),d++,$++,$++,u/=4,u*=2,o*=2,p-=3,p++,t(\".reading-content .page-break img\").each(function(){var e,a=t(this),n=f(a.attr(\"dta\").toString(),(e=parseInt((b()+l($,u))*(2*d)-t(\".reading-content .page-break img\").length-(4*d+1)),e=k(2*o+p+p+1,g,e)).toString());a.attr(\"dta\",n)}),d=0,$=0,u=0,o=0,p=0,t(\".reading-content .page-break img\").each(function(){var e=t(this).attr(\"dta\").substr(-2);c+=e,t(this).removeAttr(\"dta\")}),s*=s,s++,h-=25,h++,h++,t(\".reading-content .page-break img\").each(function(){var e=t(this),a=f(e.attr(\"data-src\").toString(),(b(),k(b()+4*s,c,t(\".reading-content .page-break img\").length*(2*h))).toString());e.attr(\"data-src\",a)}),s=0,h=0,t(\".reading-content .page-break img\").each(function(){t(this).addClass(\"wp-manga-chapter-img img-responsive lazyload effect-fade\")}),_0xabe6x4d=!0});"],["script","scri12pts && ifra2mes && coo1kies","true"],["script","(scri12pts && ifra2mes)","(true)"],["script","/catch[\\s\\S]*?}/","","condition","fetch"],["script","/(function playVideo\\(\\) \\{[\\s\\S]*?\\.remove\\(\\);[\\s\\S]*?\\})/","$1 playVideo();"],["script","video_urls.length != activeItem","!1"],["script","var _Hasync","jfun_show_TV();var _Hasync"],["script","window._taboola =","(()=>{const e={apply:(e,o,l)=>o.closest(\"body > video[src^=\\\"blob:\\\"]\")===o?Promise.resolve(!0):Reflect.apply(e,o,l)};HTMLVideoElement.prototype.play=new Proxy(HTMLVideoElement.prototype.play,e)})();window._taboola ="],["script","/window.open.*;/"],["script","!seen","false"],["script","/if.*Disable.*?;/g","","condition","blocker"],["script","this.ads.length > this.ads_start","1==2"],["script","/\\$\\(['\"]\\.play-overlay['\"]\\)\\.click.+/s","document.getElementById(\"mainvideo\").src=srclink;player.currentTrack=0;})})","condition","srclink"],["script","const ad_slot_","(()=>{window.addEventListener(\"load\",(()=>{document.querySelectorAll(\"ins.adsbygoogle\").forEach((element=>element.dataset.adsbygoogleStatus=\"done\"))}))})();const ad_slot_","sedCount","1"],["script","window.dataLayer =","(()=>{const time=parseInt(document.querySelector(\"meta[http-equiv=\\\"refresh\\\"]\").content.split(\";\")[0])*1000+1000;setTimeout(()=>{document.body.innerHTML=document.body.innerHTML},time)})();window.dataLayer =","sedCount","1"],["script","(self.__next_f=","[\"timeupdate\",\"durationchange\",\"ended\",\"enterpictureinpicture\",\"leavepictureinpicture\",\"loadeddata\",\"loadedmetadata\",\"loadstart\",\"pause\",\"play\",\"playing\",\"ratechange\",\"resize\",\"seeked\",\"seeking\",\"suspend\",\"volumechange\",\"waiting\"].forEach((e=>{window.addEventListener(e,(()=>{const e=document.getElementById(\"player\"),t=document.querySelector(\".plyr__time\");e.src.startsWith(\"https://i.imgur.com\")&&\"none\"===window.getComputedStyle(t).display&&(e.src=\"https://cdn.plyr.io/static/blank.mp4\",e.paused&&e.plyr.play())}))}));(self.__next_f=","sedCount","1"],["script","/  function [a-zA-Z]{1,2}\\([a-zA-Z]{1,2},[a-zA-Z]{1,2}\\).*?\\(\\)\\{return [a-zA-Z]{1,2}\\;\\}\\;return [a-zA-Z]{1,2}\\(\\)\\;\\}/"],["script","/\\}\\)\\;\\s+\\(function\\(\\)\\{var .*?\\)\\;\\}\\)\\(\\)\\;\\s+\\$\\(\\\"\\#reportChapte/","}); $(\"#reportChapte"],["style","{height:370px;}","{height:70px;}"],["script","vid.vast","//vid.vast"],["script","/(function reklamla\\([^)]+\\) {)/","$1rekgecyen(0);"],["script","'G-1B4LC0KT6C');","'G-1B4LC0KT6C'); window.setTimeout(function(){blockPing()},200);"],["script","popunder","p"],["script","preroll_timer_current == 0 && preroll_player_called == false","true"],["script","/^var \\w+=\\[.+/","(()=>{let e=[];document.addEventListener(\"DOMContentLoaded\",(()=>{const t=document.querySelector(\"body script\").textContent.match(/\"] = '(.*?)'/g);if(!t)return;t.forEach((t=>{const r=t.replace(/.*'(.*?)'/,\"$1\");e.push(r)}));const r=document.querySelector('.dl_button[href*=\"preview\"]').href.split(\"?\")[1];e.includes(r)&&(e=e.filter((e=>e!==r)));document.querySelectorAll(\".dl_button[href]\").forEach((t=>{t.target=\"_blank\";let r=t.cloneNode(!0);r.href=t.href.replace(/\\?.*/,`?${e[0]}`),t.after(r);let o=t.cloneNode(!0);o.href=t.href.replace(/\\?.*/,`?${e[1]}`),t.after(o)}))}))})();","sedCount","1"],["script","/vastSource.*?,/","vastSource:'',"],["script","/window.location.href[^?]+this[^?]+;/"],["script","/function _.*JSON.*}}/gms","function checkName(){const a = document.querySelector(\".monsters .button_wrapper .button\");const b = document.querySelector(\"#nick\");const c = \"/?from_land=1&nick=\";a.addEventListener(\"click\", function () {document.location.href = c + b.value;}); } checkName();"],["script","/document.body.appendChild.*;/"],["script","window.location.replace(urlRandom);",""],["script","/window\\.location\\.replace\\([^)]+\\);?/g"],["script","!document.getElementById","document.getElementById"],["script","window.dataLayer =","(()=>{document.querySelectorAll(`form:has(> input[value$=\".mp3\"])`).forEach(el=>{let url=el.querySelector(\"input\").getAttribute(\"value\");el.setAttribute(\"action\",url)})})();window.dataLayer =","sedCount","1"],["script",",availableAds:[",",availableAds:[],noAds:[","sedCount","1"],["script","function OptanonWrapper() {}","/*start*/(()=>{const o={apply:(o,t,e)=>(\"ads\"===e[0]&&\"object\"==typeof t&&null!==t&&(t.ads=()=>{}),Reflect.apply(o,t,e))};window.Object.prototype.hasOwnProperty=new Proxy(window.Object.prototype.hasOwnProperty,o)})();document.currentScript.textContent=document.currentScript.textContent.replace(/\\/\\*start\\*\\/(.*)\\/\\*end\\*\\//g,\"\");/*end*/function OptanonWrapper() {}"]];
const hostnamesMap = new Map([["www.youtube.com",0],["panel.freemcserver.net",[1,139]],["bing.com",2],["nontonx.com",[3,4,5]],["client.falixnodes.net",[6,7,8,102,103]],["9to5google.com",9],["9to5mac.com",9],["api.dock.agacad.com",10],["ozap.com",11],["jprime.jp",12],["dragonnest.com",13],["bild.de",14],["ashemaletube.*",[15,16]],["pornblade.com",17],["pornfelix.com",17],["jizzbunker.com",18],["multiup.io",19],["player.buffed.de",20],["player.gamezone.de",20],["player.gamesaktuell.de",20],["player.pcgames.de",20],["player.videogameszone.de",20],["player.pcgameshardware.de",20],["giga.de",21],["kino.de",21],["spieletipps.de",21],["desired.de",21],["t-online.de",22],["sport.de",23],["forum.release-apk.com",24],["tech8s.net",[25,26]],["drop.carbikenation.com",[25,26]],["linkss.rcccn.in",[25,26]],["link.djbassking.live",[25,26]],["tech5s.co",[25,26]],["game5s.com",[25,26]],["adrinolinks.com",27],["link.vipurl.in",27],["nanolinks.in",27],["publicearn.*",[28,29,30]],["pubgaimassist.com",[31,32,33,34]],["gyanitheme.com",[31,32,33,34]],["tech.trendingword.com",[31,32,33,34]],["blog.potterworld.co",[31,32,33,34]],["hipsonyc.com",[31,32,33,34]],["tech.pubghighdamage.com",[31,32,33,34]],["blog.itijobalert.in",[31,32,33,34]],["techkhulasha.com",[31,32,33,34]],["jobzhub.store",[35,36]],["fitdynamos.com",[35,36]],["labgame.io",[35,36]],["m.jobinmeghalaya.in",[37,38]],["starkroboticsfrc.com",39],["sinonimos.de",39],["antonimos.de",39],["quesignifi.ca",39],["tiktokrealtime.com",39],["tiktokcounter.net",39],["tpayr.xyz",39],["poqzn.xyz",39],["ashrfd.xyz",39],["rezsx.xyz",39],["tryzt.xyz",39],["ashrff.xyz",39],["rezst.xyz",39],["dawenet.com",39],["erzar.xyz",39],["waezm.xyz",39],["waezg.xyz",39],["blackwoodacademy.org",39],["cryptednews.space",39],["vivuq.com",39],["swgop.com",39],["vbnmll.com",39],["telcoinfo.online",39],["dshytb.com",39],["aylink.co",40],["cpmlink.pro",40],["suaurl.com",41],["mamahawa.com",42],["bitzite.com",43],["appsbull.com",43],["diudemy.com",43],["maqal360.com",43],["advertisingexcel.com",43],["allcryptoz.net",43],["batmanfactor.com",43],["beautifulfashionnailart.com",43],["crewbase.net",43],["crewus.net",43],["documentaryplanet.xyz",43],["gametechreviewer.com",43],["midebalonu.net",43],["misterio.ro",43],["phineypet.com",43],["seory.xyz",43],["shinbhu.net",43],["shinchu.net",43],["substitutefor.com",43],["talkforfitness.com",43],["thefitbrit.co.uk",43],["thumb8.net",43],["thumb9.net",43],["topcryptoz.net",43],["uniqueten.net",43],["ultraten.net",43],["exactpay.online",43],["headlinerpost.com",44],["drinkspartner.com",44],["apcvpc.com",44],["posterify.net",44],["manishclasses.in",44],["www.apkmoddone.com",[45,46]],["dl.apkmoddone.com",47],["phongroblox.com",47],["mahitimanch.in",[48,49]],["5ghindi.in",[48,49]],["inshorturl.com",50],["rfiql.com",[51,52]],["gujjukhabar.in",[51,52]],["smartfeecalculator.com",[51,52]],["djxmaza.in",[51,52]],["thecubexguide.com",[51,52]],["jytechs.in",[51,52]],["dropgalaxy.*",[53,54]],["financemonk.net",[53,54]],["dailytech-news.eu",55],["fuckingfast.co",56],["xdl.my.id",57],["in91vip.win",58],["arolinks.com",[59,60]],["vplink.in",[59,60]],["rslinks.net",[59,60]],["fastt.gg",61],["3dsfree.org",62],["thegadgetking.in",63],["jpvhub.com",64],["aagmaal.*",65],["247sports.com",66],["etoday.co.kr",67],["isplus.com",68],["economist.co.kr",69],["hometownstation.com",70],["sportalkorea.com",71],["m.edaily.co.kr",72],["honkailab.com",73],["lifehacker.jp",74],["playhydrax.com",75],["emturbovid.com",76],["findjav.com",76],["javggvideo.xyz",76],["mmtv01.xyz",76],["stbturbo.xyz",76],["trailerhg.xyz",76],["turboplayers.xyz",76],["turbovidhls.com",76],["steamseries88.com",77],["filmizle.*",78],["filmizletv.*",78],["filmizleplus.*",78],["fullhdfilm.*",78],["fullhdfilmizle.*",78],["gofilmizle.com",78],["hdfilmcehennemi.*",78],["hdfilmizlesene.*",78],["hdfilmsitesi.*",78],["sine5.dev",78],["sinezy.org",78],["asyaanimeleri.pw",79],["dizipal1101.com",80],["dizipal1102.com",80],["dizipal1103.com",80],["dizipal1104.com",80],["dizipal1105.com",80],["dizipal1106.com",80],["dizipal1107.com",80],["dizipal1108.com",80],["dizipal1109.com",80],["dizipal1110.com",80],["dizipal1111.com",80],["dizipal1112.com",80],["dizipal1113.com",80],["dizipal1114.com",80],["dizipal1115.com",80],["dizipal1116.com",80],["dizipal1117.com",80],["dizipal1118.com",80],["dizipal1119.com",80],["dizipal1120.com",80],["dizipal1121.com",80],["dizipal1122.com",80],["dizipal1123.com",80],["dizipal1124.com",80],["dizipal1125.com",80],["dizipal1126.com",80],["dizipal1127.com",80],["dizipal1128.com",80],["dizipal1129.com",80],["dizipal1130.com",80],["dizipal1131.com",80],["dizipal1132.com",80],["dizipal1133.com",80],["dizipal1134.com",80],["dizipal1135.com",80],["dizipal1136.com",80],["dizipal1137.com",80],["dizipal1138.com",80],["dizipal1139.com",80],["dizipal1140.com",80],["dizipal1141.com",80],["dizipal1142.com",80],["dizipal1143.com",80],["dizipal1144.com",80],["dizipal1145.com",80],["dizipal1146.com",80],["dizipal1147.com",80],["dizipal1148.com",80],["dizipal1149.com",80],["dizipal1150.com",80],["dizipal1151.com",80],["dizipal1152.com",80],["dizipal1153.com",80],["dizipal1154.com",80],["dizipal1155.com",80],["dizipal1156.com",80],["dizipal1157.com",80],["dizipal1158.com",80],["dizipal1159.com",80],["dizipal1160.com",80],["dizipal1161.com",80],["dizipal1162.com",80],["dizipal1163.com",80],["dizipal1164.com",80],["dizipal1165.com",80],["dizipal1166.com",80],["dizipal1167.com",80],["dizipal1168.com",80],["dizipal1169.com",80],["dizipal1170.com",80],["dizipal1171.com",80],["dizipal1172.com",80],["dizipal1173.com",80],["dizipal1174.com",80],["dizipal1175.com",80],["dizipal1176.com",80],["dizipal1177.com",80],["dizipal1178.com",80],["dizipal1179.com",80],["dizipal1180.com",80],["dizipal1181.com",80],["dizipal1182.com",80],["dizipal1183.com",80],["dizipal1184.com",80],["dizipal1185.com",80],["dizipal1186.com",80],["dizipal1187.com",80],["dizipal1188.com",80],["dizipal1189.com",80],["dizipal1190.com",80],["dizipal1191.com",80],["dizipal1192.com",80],["dizipal1193.com",80],["dizipal1194.com",80],["dizipal1195.com",80],["dizipal1196.com",80],["dizipal1197.com",80],["dizipal1198.com",80],["dizipal1199.com",80],["dizipal1200.com",80],["dizipal1201.com",80],["dizipal1202.com",80],["dizipal1203.com",80],["dizipal1204.com",80],["dizipal1205.com",80],["dizipal1206.com",80],["dizipal1207.com",80],["dizipal1208.com",80],["dizipal1209.com",80],["dizipal1210.com",80],["dizipal1211.com",80],["dizipal1212.com",80],["dizipal1213.com",80],["dizipal1214.com",80],["dizipal1215.com",80],["dizipal1216.com",80],["dizipal1217.com",80],["dizipal1218.com",80],["dizipal1219.com",80],["dizipal1220.com",80],["dizipal1221.com",80],["dizipal1222.com",80],["dizipal1223.com",80],["dizipal1224.com",80],["dizipal1225.com",80],["dizipal1226.com",80],["dizipal1227.com",80],["dizipal1228.com",80],["dizipal1229.com",80],["dizipal1230.com",80],["dizipal1231.com",80],["dizipal1232.com",80],["dizipal1233.com",80],["dizipal1234.com",80],["dizipal1235.com",80],["dizipal1236.com",80],["dizipal1237.com",80],["dizipal1238.com",80],["dizipal1239.com",80],["dizipal1240.com",80],["dizipal1241.com",80],["dizipal1242.com",80],["dizipal1243.com",80],["dizipal1244.com",80],["dizipal1245.com",80],["dizipal1246.com",80],["dizipal1247.com",80],["dizipal1248.com",80],["dizipal1249.com",80],["dizipal1250.com",80],["canlikolik.my",[81,82]],["eroasmr.com",83],["bussyhunter.com",84],["xcloud.*",85],["xfile.*",86],["anime4u.pro",86],["kusonime.com",87],["codingnepalweb.com",88],["demonoid.is",89],["freebie-ac.jp",90],["streamingcommunity.*",91],["derstandard.at",92],["derstandard.de",92],["www.chip.de",93],["redketchup.io",94],["zefoy.com",95],["idoitmyself.xyz",96],["uploadboy.com",97],["reymit.ir",98],["empire-anime.*",99],["empire-stream.*",99],["empire-streaming.*",99],["empire-streamz.*",99],["download.megaup.net",100],["adultdeepfakes.com",101],["linkshortify.com",104],["nexusmods.com",105],["comidacaseira.me",106],["tvbanywherena.com",107],["haveibeenpwned.com",108],["trainerscity.com",109],["tikmate.app",110],["sonixgvn.net",111],["paste-drop.com",112],["filext.com",113],["choralia.net",114],["kiddyearner.com",115],["colourxh.site",116],["fullxh.com",116],["galleryxh.site",116],["megaxh.com",116],["movingxh.world",116],["seexh.com",116],["unlockxh4.com",116],["valuexh.life",116],["xhaccess.com",116],["xhadult2.com",116],["xhadult3.com",116],["xhadult4.com",116],["xhadult5.com",116],["xhamster.*",116],["xhamster1.*",116],["xhamster10.*",116],["xhamster11.*",116],["xhamster12.*",116],["xhamster13.*",116],["xhamster14.*",116],["xhamster15.*",116],["xhamster16.*",116],["xhamster17.*",116],["xhamster18.*",116],["xhamster19.*",116],["xhamster20.*",116],["xhamster2.*",116],["xhamster3.*",116],["xhamster4.*",116],["xhamster42.*",116],["xhamster46.com",116],["xhamster5.*",116],["xhamster7.*",116],["xhamster8.*",116],["xhamsterporno.mx",116],["xhbig.com",116],["xhbranch5.com",116],["xhchannel.com",116],["xhdate.world",116],["xhlease.world",116],["xhmoon5.com",116],["xhofficial.com",116],["xhopen.com",116],["xhplanet1.com",116],["xhplanet2.com",116],["xhreal2.com",116],["xhreal3.com",116],["xhspot.com",116],["xhtotal.com",116],["xhtree.com",116],["xhvictory.com",116],["xhwebsite.com",116],["xhwebsite2.com",116],["xhwebsite5.com",116],["xhwide1.com",116],["xhwide2.com",116],["xhwide5.com",116],["katfile.com",117],["dragontea.ink",118],["perchance.org",[119,120]],["cheater.ninja",121],["dizikral.com",[122,123]],["dizikral1.pro",122],["dizikral2.pro",122],["7mmtv.sx",124],["barstoolsports.com",125],["filmi7.net",126],["hidan.co",127],["hidan.sh",127],["authenticateme.xyz",128],["filmizlehdizle.com",129],["fullfilmizlesene.net",129],["strcloud.in",130],["streamta.site",130],["streamtape.*",130],["tapepops.com",130],["watchadsontape.com",130],["tempmail.ninja",131],["filmy4wap.co.in",132],["filmy4waps.org",132],["filiser.eu",133],["wishflix.cc",133],["zalukaj.io",133],["infinityscans.xyz",[134,135]],["infinityscans.net",[134,135]],["infinityscans.org",[134,135]],["abs-cbn.com",136],["cdn.tiesraides.lv",137],["filmizleplus.cc",138],["nhentai.net",140],["indianporngirl10.com",141],["exploader.net",142],["lewdgames.to",143],["flixhouse.com",144],["eatcells.com",145],["ripplehub.site",146],["1337x.fyi",147],["1337x.pro",147],["magnetdl.*",148],["dynamix.top",149],["pendujatt.com.se",150],["ditjesendatjes.nl",151],["tv.onefootball.com",152]]);
const exceptionsMap = new Map([["xcloud.eu",[85]],["xcloud.host",[85]]]);
const hasEntities = true;
const hasAncestors = false;

const collectArgIndices = (hn, map, out) => {
    let argsIndices = map.get(hn);
    if ( argsIndices === undefined ) { return; }
    if ( typeof argsIndices !== 'number' ) {
        for ( const argsIndex of argsIndices ) {
            out.add(argsIndex);
        }
    } else {
        out.add(argsIndices);
    }
};

const indicesFromHostname = (hostname, suffix = '') => {
    const hnParts = hostname.split('.');
    const hnpartslen = hnParts.length;
    if ( hnpartslen === 0 ) { return; }
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = `${hnParts.slice(i).join('.')}${suffix}`;
        collectArgIndices(hn, hostnamesMap, todoIndices);
        collectArgIndices(hn, exceptionsMap, tonotdoIndices);
    }
    if ( hasEntities ) {
        const n = hnpartslen - 1;
        for ( let i = 0; i < n; i++ ) {
            for ( let j = n; j > i; j-- ) {
                const en = `${hnParts.slice(i,j).join('.')}.*${suffix}`;
                collectArgIndices(en, hostnamesMap, todoIndices);
                collectArgIndices(en, exceptionsMap, tonotdoIndices);
            }
        }
    }
};

const entries = (( ) => {
    const docloc = document.location;
    const origins = [ docloc.origin ];
    if ( docloc.ancestorOrigins ) {
        origins.push(...docloc.ancestorOrigins);
    }
    return origins.map((origin, i) => {
        const beg = origin.lastIndexOf('://');
        if ( beg === -1 ) { return; }
        const hn = origin.slice(beg+3)
        const end = hn.indexOf(':');
        return { hn: end === -1 ? hn : hn.slice(0, end), i };
    }).filter(a => a !== undefined);
})();
if ( entries.length === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = new Set();

indicesFromHostname(entries[0].hn);
if ( hasAncestors ) {
    for ( const entry of entries ) {
        if ( entry.i === 0 ) { continue; }
        indicesFromHostname(entry.hn, '>>');
    }
}

// Apply scriplets
for ( const i of todoIndices ) {
    if ( tonotdoIndices.has(i) ) { continue; }
    try { replaceNodeText(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
