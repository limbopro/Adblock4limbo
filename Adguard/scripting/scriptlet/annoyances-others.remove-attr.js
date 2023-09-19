/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
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

/* jshint esversion:11 */
/* global cloneInto */

'use strict';

// ruleset: annoyances-others

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_removeAttr = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["style",".cnx-content-wrapper.cnx-float-transition"],["class","#videoFloat[class^=\"VideoFloat_videofloat-floating__\"]"],["style",".Body--Mobile .ContentItem .RichContent--unescapable > .RichContent-inner[style^=\"max-height:\"]"],["onCopy|onContextmenu","body"],["disabled","#captcha_container + button.btn"],["disabled","#getlink"],["oncontextmenu"],["disabled",".body-page .card-body button.btn-primary.btn-block"],["disabled","#wait1button"],["disabled","#gotolink"],["href","a[href].unlock-step-link.check"],["style",".js-dailymotion"],["disabled","#wcGetLink"],["style|oncontextmenu","body"],["autoplay","video"],["disabled","button#downloadf[disabled]"],["disabled","#downloadbtn"],["style|oncontextmenu",".body[itemprop]"],["disabled","button"],["disabled","button[onclick=\"fun2()\"]"],["disabled",".unlock-button"],["onclick",".rebrand_article_content_block > div[align=\"center\"] > a.big_img,a.resize-image"],["oncontextmenu|onselectstart|ondragstart","body"],["oncontextmenu","div[oncontextmenu]"],["oncontextmenu|onselectstart",".lyricBody"],["data-contextmenu"],["oncontextmenu|onselectstart|ondragstart|onmousedown|unselectable",".noselect"],["oncontextmenu|onselectstart|ondragstart|onmousedown|unselectable",".page-content"],["onselectstart","body"],["oncontextmenu|onselectstart|ondragstart",".inner"],["oncontextmenu|onselectstart|ondragstart","#novel_inner_wrap"],["oncontextmenu|onselectstart|ondragstart","article"],["oncontextmenu|onselectstart|ondragstart","#novel_area"],["oncontextmenu|onselectstart|ondragstart",".content"],["oncontextmenu|onselectstart|ondragstart",".document_img"],["oncontextmenu","body"],["onselectstart|ondragstart|oncontextmenu","img[class=\"_images\"]"],["onselectstart|ondragstart|oncontextmenu|onpaste|oncopy","body"],["oncontextmenu|onselectstart","body"],["oncopy|oncontextmenu","body"],["oncontextmenu|onselectstart|onselect|oncopy|ondragstart|ondrag|onbeforeprint","body"],["oncontextmenu|onkeydown|onmousedown","body"],["oncontextmenu|onkeydown","body"],["oncontextmenu",".img-container > img[oncontextmenu]"],["onselectstart|ondragstart|unselectable","#rescontent"],["data-protect","body[data-protect]"],["oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart","body"],["onmousedown|onselectstart|ondragstart","body"],["onmousedown|onselectstart|ondragstart",".post-body[ondragstart][onmousedown][onselectstart]"],["oncontextmenu","[oncontextmenu]"],["ondragstart","[ondragstart]"],["onselectstart","[onselectstart]"],["onmousedown","img[onmousedown]"],["oncopy|onselectstart","body"],["oncopy","body"]];

const hostnamesMap = new Map([["accuweather.com",0],["tuttosport.com",1],["zhihu.com",2],["brightdays.jp",3],["bloginkz.com",4],["finsurances.co",5],["bestopbook.info",5],["tv-asahi.co.jp",6],["bstlar.com",7],["examtadka.com",8],["djxmaza.in",8],["adzz.in",9],["proappapk.com",9],["sub2unlock.com",10],["linkgenie.me",10],["xatakamovil.com",11],["teknopaid.xyz",12],["musixmatch.com",13],["bonus-tv.ru",14],["thizissam.in",15],["apkadmin.com",16],["lostfilmtv5.site",17],["lostfilm.pro",17],["lostfilmtv.site",17],["lostfilm.uno",17],["lostfilm.run",17],["lostfilm.today",17],["lostfilm.tv",17],["karyawan.co.id",18],["upbbom.com",18],["uppoom.com",18],["uploadmoon.com",18],["sub4unlock.com",19],["rekonise.com",20],["www.ixbt.com",21],["j-lyric.net",22],["comic.naver.com",22],["thewordcracker.com",22],["hankooki.com",22],["dbr.donga.com",22],["uwayapply.com",22],["gukjenews.com",22],["edujin.co.kr",22],["venturesquare.net",22],["spooncast.net",22],["rdsong.com",22],["slist.kr",22],["3dpchip.com",22],["lover91.net",22],["dragonball-tube.com",22],["onepiece-tube.com",22],["fairytail-tube.org",22],["baho.com.tr",22],["wholehk.com",22],["siyasetcafe.com",22],["webtv.dothome.co.kr",22],["outdoornews.co.kr",22],["novel.naver.com",22],["eskisehirekspres.net",22],["afrikalyrics.com",23],["utaten.com",24],["front.wemakeprice.com",25],["author.today",[26,27]],["yodu.org",28],["linovelib.com",28],["utorrentgamesps2.blogspot.com",28],["bomtoon.com",[29,30,31,32,33,34]],["seriesgratis.biz",35],["texture-packs.com",35],["liveworksheets.com",35],["tokyo-sports.co.jp",35],["news.dwango.jp",35],["hunterfansub.com",35],["webtoons.com",36],["tistory.com",37],["globaledu.jp",38],["mhwg.org",38],["biyografi.info",38],["seiya-saiga.com",38],["korona.co.jp",39],["bdb.com.pl",40],["ainamulyana.blogspot.com",41],["texte.work",42],["lectortmo.com",43],["quotev.com",44],["orangespotlight.com",45],["as-selection.net",46],["gembel9.xyz",46],["gembelcit.net",46],["poisonous-raspberry-fields.blogspot.com",[47,48]],["runningnews.gr",[49,50,51,52]],["7lafa.com",53],["bobfilm.online",54]]);

const entitiesMap = new Map([]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function removeAttr(
    token = '',
    selector = '',
    behavior = ''
) {
    if ( typeof token !== 'string' ) { return; }
    if ( token === '' ) { return; }
    const tokens = token.split(/\s*\|\s*/);
    if ( selector === '' ) {
        selector = `[${tokens.join('],[')}]`;
    }
    let timer;
    const rmattr = ( ) => {
        timer = undefined;
        try {
            const nodes = document.querySelectorAll(selector);
            for ( const node of nodes ) {
                for ( const attr of tokens ) {
                    node.removeAttribute(attr);
                }
            }
        } catch(ex) {
        }
    };
    const mutationHandler = mutations => {
        if ( timer !== undefined ) { return; }
        let skip = true;
        for ( let i = 0; i < mutations.length && skip; i++ ) {
            const { type, addedNodes, removedNodes } = mutations[i];
            if ( type === 'attributes' ) { skip = false; }
            for ( let j = 0; j < addedNodes.length && skip; j++ ) {
                if ( addedNodes[j].nodeType === 1 ) { skip = false; break; }
            }
            for ( let j = 0; j < removedNodes.length && skip; j++ ) {
                if ( removedNodes[j].nodeType === 1 ) { skip = false; break; }
            }
        }
        if ( skip ) { return; }
        timer = self.requestIdleCallback(rmattr, { timeout: 17 });
    };
    const start = ( ) => {
        rmattr();
        if ( /\bstay\b/.test(behavior) === false ) { return; }
        const observer = new MutationObserver(mutationHandler);
        observer.observe(document, {
            attributes: true,
            attributeFilter: tokens,
            childList: true,
            subtree: true,
        });
    };
    runAt(( ) => {
        start();
    }, /\bcomplete\b/.test(behavior) ? 'idle' : 'interactive');
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1,
            'interactive': 2, 'end': 2, '2': 2,
            'complete': 3, 'idle': 3, '3': 3,
        };
        const tokens = Array.isArray(state) ? state : [ state ];
        for ( const token of tokens ) {
            const prop = `${token}`;
            if ( targets.hasOwnProperty(prop) === false ) { continue; }
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
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
    }
    const self = globalThis;
    const safe = {
        'Error': self.Error,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'jsonParse': self.JSON.parse.bind(self.JSON),
        'jsonStringify': self.JSON.stringify.bind(self.JSON),
        'log': console.log.bind(console),
        uboLog(...args) {
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
            }
            const expect = (options.canNegate === true && pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    pattern,
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            return {
                pattern,
                re: new this.RegExp(pattern.replace(
                    /[.*+?^${}()|[\]\\]/g, '\\$&'),
                    options.flags
                ),
                expect,
            };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            return this.RegExp_test.call(details.re, haystack) === details.expect;
        },
        patternToRegex(pattern, flags = undefined) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
            }
            try {
                return new RegExp(match[1], match[2] || flags);
            }
            catch(ex) {
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
            return Object.fromEntries(entries);
        },
    };
    scriptletGlobals.set('safeSelf', safe);
    return safe;
}

/******************************************************************************/

const hnParts = [];
try { hnParts.push(...document.location.hostname.split('.')); }
catch(ex) { }
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { removeAttr(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

// Inject code

// https://bugzilla.mozilla.org/show_bug.cgi?id=1736575
//   'MAIN' world not yet supported in Firefox, so we inject the code into
//   'MAIN' ourself when environment in Firefox.

// Not Firefox
if ( typeof wrappedJSObject !== 'object' ) {
    return uBOL_removeAttr();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_removeAttr = cloneInto([
            [ '(', uBOL_removeAttr.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_removeAttr);
        url = page.URL.createObjectURL(blob);
        const doc = page.document;
        script = doc.createElement('script');
        script.async = false;
        script.src = url;
        (doc.head || doc.documentElement || doc).append(script);
    } catch (ex) {
        console.error(ex);
    }
    if ( url ) {
        if ( script ) { script.remove(); }
        page.URL.revokeObjectURL(url);
    }
    delete page.uBOL_removeAttr;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
