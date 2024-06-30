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

/* jshint esversion:11 */
/* global cloneInto */

'use strict';

// ruleset: annoyances-overlays

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_removeAttr = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["oncontextmenu"],["oncopy"],["onselectstart"],["oncontextmenu|ondragstart|onselectstart"],["oncontextmenu|ondragstart|onselectstart|onkeydown"],["oncontextmenu|onselectstart"],["oncontextmenu|onselectstart|ondragstart"],["oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart"],["oncontextmenu|onselectstart|onselect|oncopy"],["oncontextmenu|onkeydown|onmousedown"],["oncontextmenu|onselectstart|ondragstart|oncopy|oncut|onpaste|onbeforecopy"],["onselectstart|ondragstart"],["oncontextmenu","body","complete"],["oncontextmenu|onCopy"],["oncontextmenu|onmousedown|onselectstart"],["oncontextmenu|ondragstart|onselectstart|onkeydown|onmousedown"],["oncontextmenu|onkeydown"],["onkeydown"],["ondragstart|onselectstart"],["ondrop|ondragstart"],["onselectstart|ondragstart|oncontextmenu"],["oncontextmenu|ondragstart"],["onmousemove|ondragstart|onselectstart|oncontextmenu","body"],["oncontextmenu","body"],["onselectstart|ondragstart|onmousedown|onkeydown|oncontextmenu","body"],["oncontextmenu|onselectstart|ondragstart|onclick"],["style","div#novelBoby","stay"],["oncontextmenu|onMouseDown|style"],["ondragstart|oncontextmenu"],["onContextMenu","body"],["onkeydown|oncontextmenu","body"],["oncontextmenu|oncopy"],["oncontextmenu|onselectstart|ondragstart|oncut|oncopy","div.contentContainer, div.content","stay"],["oncontextmenu|onselectstart|style","#body_game"],["oncontextmenu|oncopy|ontouchstart","body"],["oncontextmenu|onselectstart|onselect|ondragstart|ondrag","body"],["oncontextmenu|ondragstart|onselectstart","body"],["oncontextmenu|onselectstart|onmousedown","body"],["oncopy|oncontextmenu|onselectstart|onselect|ondragstart|ondrag|onbeforeprint|onafterprint","body"],["oncontextmenu|ondragstart|ondrop|onselectstart"],["oncontextmenu|onselectstart","body"],["oncontextmenu|onDragStart|onSelectStart"],["oncontextmenu|ondragstart|onselectstart|onkeydown|oncopy|oncut"],["oncopy|oncontextmenu","body"],["oncontextmenu|ondragstart|oncopy|oncut",".select-none","stay"],["oncontextmenu|ondragstart|onselectstart|onselect|oncopy|onbeforecopy|onkeydown|onunload"],["oncontextmenu|onDragStart|onselectstart"],["onselectstart|oncontextmenu","body"],["oncontextmenu|onkeydown|onselectstart","body"],["oncopy|oncontextmenu|oncut|onpaste","input"],["oncontextmenu|oncopy|onselectstart"],["onbeforecopy|oncontextmenu|oncopy|ondragstart|onmouseup|onselect|onselectstart"],["oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart|style","body"],["style","body[style=\"user-select: none;\"]","stay"],["oncopy|oncut|onselectstart|style|unselectable","body","stay"],["oncontextmenu|onselectstart|oncut|oncopy"],["oncontextmenu|ondragstart|onselect"],["onpaste","#tr_mesaj > td > .text-input.validate\\[required\\]"],["oncontextmenu|onkeydown|onselectstart"],["oncontextmenu","#VdoPlayerDiv"],["oncontextmenu","a#download_link","stay"],["oncontextmenu","html"],["oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart|onselect|oncopy|onbeforecopy|onmouseup"],["onContextmenu|onMouseDown|onSelectStart"],["oncontextmenu|onmousedown|onselectstart",".all-lyrics"],["oncontextmenu|ondragstart|onselectstart","body","complete"],["oncontextmenu","img[oncontextmenu=\"return false;\"]","stay"],["onselectstart","body"],["onclick","[onclick=\"myFunction()\"]"],["oncontextmenu","[oncontextmenu=\"return false;\"]"],["oncontextmenu|ondragstart|onselectstart|onload|onblur"],["oncopy|oncut"]];

const hostnamesMap = new Map([["nulled.life",0],["liveonsat.com",0],["ligowiec.net",0],["radio5.com.pl",0],["romet.pl",0],["sat-charts.eu",0],["skionline.pl",0],["trentino.pl",0],["pcpobierz.pl",0],["animeunity.it",0],["megawypas.com",0],["meteo.org.pl",0],["banglainsider.com",0],["listatv.pl",0],["megatube.xxx",0],["elektro-plast.com.pl",0],["pluspremieres.nz",0],["sp.uta-net.com",0],["adnan-tech.com",0],["nzbstars.com",0],["nogizaka46.com",0],["suedkurier.de",0],["utamap.com",0],["hienzo.com",0],["debeste.de",0],["courseware.cemc.uwaterloo.ca",0],["sekai-kabuka.com",0],["daum.net",0],["fraudnavi.com",0],["zdravenportal.eu",0],["wasza-farma.pl",0],["wouterplanet.com",0],["goalup.live",0],["promotor-poz.kylos.pl",0],["img999.com",0],["wattpad.com",0],["articlesmania.me",0],["aksensei.com",0],["aepos.ap.gov.in",0],["mocah.org",0],["matzoo.pl",0],["warning.or.kr",0],["terramirabilis.ro",0],["smartkhabrinews.com",0],["sportsupa.com",0],["hoca4u.com",0],["4kwebplay.xyz",0],["qqwebplay.xyz",0],["lewblivehdplay.ru",0],["claplivehdplay.ru",0],["tutlehd4.com",0],["viwlivehdplay.ru",0],["ebc.com.br",1],["pandurul.ro",1],["livetennis.it",2],["djelfa.info",2],["virpe.com",2],["seoul.cs.land.to",2],["utorrentgamesps2.blogspot.com",2],["book.zongheng.com",2],["shumilou.com",2],["virpe.cc",2],["singingdalong.blogspot.com",3],["neobux.com",3],["dba-oracle.com",3],["giromarilia.com.br",3],["northumberland-walks.co.uk",3],["foodviva.com",3],["shushan.zhangyue.net",3],["elahmad.com",3],["novelpia.com",3],["epitesti.ro",3],["uwayapply.com",3],["apornstories.com",4],["filmesonlinex.co",4],["j-lyric.net",5],["utaten.com",5],["as-selection.net",5],["tohkaishimpo.com",5],["iwanichi.co.jp",5],["runningnews.gr",6],["zerodot1.gitlab.io",6],["mainframegurukul.com",6],["clasicotas.org",6],["nostracasa.com.br",6],["enjoytaiwan.co.kr",6],["tercihiniyap.net",6],["gukjenews.com",6],["ohli365.vip",6],["insurance-corporate.blogspot.com",7],["gezimanya.com",8],["quadrinhoseroticos.net",8],["cepuluh.com",9],["ke-1.com",9],["tekloggers.com",9],["theitaliantimes.it",10],["hebrew4christians.com",11],["musixmatch.com",12],["ryuryuko.blog90.fc2.com",13],["mdpr.jp",14],["japan-academy-prize.jp",14],["citpekalongan.com",15],["gembel9.xyz",15],["atribuna.com.br",16],["newsforbolly.org",17],["coinurl.net",17],["diariodoiguacu.com.br",18],["metropoliaztm.pl",19],["quotev.com",20],["nekopoi.web.id",21],["animefire.plus",21],["sopot.net",22],["tv-asahi.co.jp",23],["erovideoseek.com",23],["kyonyuquest.com",23],["katosatoshi.jp",23],["techoreels.com",23],["kuroko-analyze.com",23],["gats.io",23],["promotor.pl",23],["bikesell.co.kr",23],["news.dwango.jp",23],["urbharat.xyz",23],["animatedshows.to",23],["miraculous.to",23],["cdn.gamemonetize.com",23],["aztravels.net",23],["downfile.site",23],["memangbau.com",23],["trangchu.news",23],["umk.co.jp",23],["streamservicehd.click",23],["eplayer.click",23],["olacast.live",23],["kamerabudaya.com",24],["visaonoticias.com",25],["alphapolis.co.jp",26],["money-sense.club",27],["kanjukulive.com",28],["radichubu.jp",29],["texte.work",30],["railf.jp",31],["spectank.jp",31],["magnet-novels.com",32],["mhwg.org",33],["j-island.net",34],["anauk.net",35],["bonobono.com",36],["rdsong.com",36],["poplinks.idolmaster-official.jp",37],["bdb.com.pl",38],["cablegratis.online",39],["kijyomatome-ch.com",40],["globaledu.jp",40],["loveplay123.com",41],["th-world.com",42],["korona.co.jp",43],["novelism.jp",44],["myhtebooks.com",45],["pixnet.net",46],["apk1s.com",47],["foxaholic.com",48],["auth.alipay.com",49],["30edu.com.cn",50],["doc.mbalib.com",51],["perangkatguruku.com",52],["naaree.com",53],["gardenia.net",54],["c315.cn",55],["uemeds.cn",56],["pttws.ptt.gov.tr",57],["leeyiding.com",58],["veblr.com",59],["thememypc.net",60],["gakki.me",62],["tunegate.me",63],["oricon.co.jp",64],["lover93.net",65],["fantasytagtree.com",66],["selfstudys.com",67],["myfreemp3juices.cc",68],["welovemanga.one",69],["mrbenne.com",70],["xossipy.com",71]]);

const entitiesMap = new Map([["pelispedia",0],["vinaurl",17],["ask4movie",61]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function removeAttr(
    rawToken = '',
    rawSelector = '',
    behavior = ''
) {
    if ( typeof rawToken !== 'string' ) { return; }
    if ( rawToken === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('remove-attr', rawToken, rawSelector, behavior);
    const tokens = rawToken.split(/\s*\|\s*/);
    const selector = tokens
        .map(a => `${rawSelector}[${CSS.escape(a)}]`)
        .join(',');
    if ( safe.logLevel > 1 ) {
        safe.uboLog(logPrefix, `Target selector:\n\t${selector}`);
    }
    let timer;
    const rmattr = ( ) => {
        timer = undefined;
        try {
            const nodes = document.querySelectorAll(selector);
            for ( const node of nodes ) {
                for ( const attr of tokens ) {
                    if ( node.hasAttribute(attr) === false ) { continue; }
                    node.removeAttribute(attr);
                    safe.uboLog(logPrefix, `Removed attribute '${attr}'`);
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
        timer = safe.onIdle(rmattr, { timeout: 67 });
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
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
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
                return { matchAll: true };
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
            return this.Object_fromEntries(entries);
        },
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
        },
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
    let bcBuffer = [];
    safe.logLevel = scriptletGlobals.logLevel || 1;
    safe.sendToLogger = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
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

const targetWorld = 'MAIN';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
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
