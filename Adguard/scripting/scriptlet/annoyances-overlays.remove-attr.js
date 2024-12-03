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

/* eslint-disable indent */

// ruleset: annoyances-overlays

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_removeAttr = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["oncontextmenu"],["oncopy"],["onselectstart"],["oncontextmenu|ondragstart|onselectstart"],["oncontextmenu|ondragstart|onselectstart|onkeydown"],["oncontextmenu|onselectstart"],["oncontextmenu|onselectstart|ondragstart"],["oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart"],["oncontextmenu|onselectstart|onselect|oncopy"],["oncontextmenu|onkeydown|onmousedown"],["oncontextmenu|onselectstart|ondragstart|oncopy|oncut|onpaste|onbeforecopy"],["onselectstart|ondragstart"],["oncontextmenu","body","complete"],["oncontextmenu|onCopy"],["oncontextmenu|onmousedown|onselectstart"],["oncontextmenu|ondragstart|onselectstart|onkeydown|onmousedown"],["oncontextmenu|onkeydown"],["onkeydown"],["ondragstart|onselectstart"],["ondrop|ondragstart"],["onselectstart|ondragstart|oncontextmenu"],["oncontextmenu|ondragstart"],["onmousemove|ondragstart|onselectstart|oncontextmenu","body"],["oncontextmenu","body"],["onselectstart|ondragstart|onmousedown|onkeydown|oncontextmenu","body"],["oncontextmenu|onselectstart|ondragstart|onclick"],["style","div#novelBoby","stay"],["oncontextmenu|onMouseDown|style"],["ondragstart|oncontextmenu"],["onContextMenu","body"],["onkeydown|oncontextmenu","body"],["oncontextmenu|oncopy"],["oncontextmenu|onselectstart|style","#body_game"],["oncontextmenu|onselectstart|onselect|ondragstart|ondrag","body"],["oncontextmenu|ondragstart|onselectstart","body"],["oncontextmenu|onselectstart|onmousedown","body"],["oncopy|oncontextmenu|onselectstart|onselect|ondragstart|ondrag|onbeforeprint|onafterprint","body"],["oncontextmenu|onselectstart","body"],["oncontextmenu|onDragStart|onSelectStart"],["oncontextmenu|ondragstart|onselectstart|onkeydown|oncopy|oncut"],["oncopy|oncontextmenu","body"],["oncontextmenu|ondragstart|oncopy|oncut",".select-none","stay"],["oncontextmenu|ondragstart|onselectstart|onselect|oncopy|onbeforecopy|onkeydown|onunload"],["oncontextmenu|onDragStart|onselectstart"],["onselectstart|oncontextmenu","body"],["oncontextmenu|onkeydown|onselectstart","body"],["oncopy|oncontextmenu|oncut|onpaste","input"],["oncontextmenu|oncopy|onselectstart"],["onbeforecopy|oncontextmenu|oncopy|ondragstart|onmouseup|onselect|onselectstart"],["oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart|style","body"],["style","body[style=\"user-select: none;\"]","stay"],["oncopy|oncut|onselectstart|style|unselectable","body","stay"],["oncontextmenu|onselectstart|oncut|oncopy"],["oncontextmenu|ondragstart|onselect"],["onpaste","#tr_mesaj > td > .text-input.validate\\[required\\]"],["oncontextmenu|onkeydown|onselectstart"],["oncontextmenu","#VdoPlayerDiv"],["oncontextmenu","a#download_link","stay"],["oncontextmenu","html"],["oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart|onselect|oncopy|onbeforecopy|onmouseup"],["onContextmenu|onMouseDown|onSelectStart"],["oncontextmenu|onmousedown|onselectstart",".all-lyrics"],["oncontextmenu|ondragstart|onselectstart","body","complete"],["oncontextmenu","img[oncontextmenu=\"return false;\"]","stay"],["onselectstart","body"],["onclick","[onclick=\"myFunction()\"]"],["oncontextmenu","[oncontextmenu=\"return false;\"]"],["oncontextmenu|ondragstart","","complete"],["oncontextmenu|ondragstart|onselectstart|onload|onblur"],["oncopy|oncut"],["onselectstart","html[onselectstart]"]];

const hostnamesMap = new Map([["nulled.life",0],["liveonsat.com",0],["ligowiec.net",0],["radio5.com.pl",0],["romet.pl",0],["sat-charts.eu",0],["skionline.pl",0],["trentino.pl",0],["pcpobierz.pl",0],["animeunity.it",0],["megawypas.com",0],["meteo.org.pl",0],["banglainsider.com",0],["listatv.pl",0],["megatube.xxx",0],["elektro-plast.com.pl",0],["adnan-tech.com",0],["nzbstars.com",0],["nogizaka46.com",0],["suedkurier.de",0],["utamap.com",0],["hienzo.com",0],["debeste.de",0],["courseware.cemc.uwaterloo.ca",0],["sekai-kabuka.com",0],["daum.net",0],["fraudnavi.com",0],["zdravenportal.eu",0],["wasza-farma.pl",0],["wouterplanet.com",0],["goalup.live",0],["promotor-poz.kylos.pl",0],["img999.com",0],["wattpad.com",0],["articlesmania.me",0],["aksensei.com",0],["aepos.ap.gov.in",0],["mocah.org",0],["matzoo.pl",0],["warning.or.kr",0],["terramirabilis.ro",0],["smartkhabrinews.com",0],["sportsupa.com",0],["hoca4u.com",0],["4kwebplay.xyz",0],["qqwebplay.xyz",0],["lewblivehdplay.ru",0],["claplivehdplay.ru",0],["tutlehd4.com",0],["viwlivehdplay.ru",0],["ebc.com.br",1],["pandurul.ro",1],["livetennis.it",2],["djelfa.info",2],["virpe.com",2],["seoul.cs.land.to",2],["utorrentgamesps2.blogspot.com",2],["book.zongheng.com",2],["shumilou.com",2],["virpe.cc",2],["singingdalong.blogspot.com",3],["neobux.com",3],["dba-oracle.com",3],["giromarilia.com.br",3],["northumberland-walks.co.uk",3],["foodviva.com",3],["shushan.zhangyue.net",3],["elahmad.com",3],["novelpia.com",3],["epitesti.ro",3],["uwayapply.com",3],["apornstories.com",4],["filmesonlinex.co",4],["j-lyric.net",5],["utaten.com",5],["as-selection.net",5],["tohkaishimpo.com",5],["iwanichi.co.jp",5],["runningnews.gr",6],["mainframegurukul.com",6],["clasicotas.org",6],["nostracasa.com.br",6],["enjoytaiwan.co.kr",6],["tercihiniyap.net",6],["gukjenews.com",6],["ohli365.vip",6],["insurance-corporate.blogspot.com",7],["gezimanya.com",8],["cepuluh.com",9],["tekloggers.com",9],["theitaliantimes.it",10],["hebrew4christians.com",11],["musixmatch.com",12],["hansa-online.de",12],["ryuryuko.blog90.fc2.com",13],["mdpr.jp",14],["japan-academy-prize.jp",14],["citpekalongan.com",15],["atribuna.com.br",16],["newsforbolly.org",17],["coinurl.net",17],["diariodoiguacu.com.br",18],["metropoliaztm.pl",19],["quotev.com",20],["nekopoi.web.id",21],["sopot.net",22],["tv-asahi.co.jp",23],["erovideoseek.com",23],["kyonyuquest.com",23],["katosatoshi.jp",23],["techoreels.com",23],["kuroko-analyze.com",23],["gats.io",23],["promotor.pl",23],["bikesell.co.kr",23],["news.dwango.jp",23],["urbharat.xyz",23],["animatedshows.to",23],["miraculous.to",23],["cdn.gamemonetize.com",23],["aztravels.net",23],["downfile.site",23],["memangbau.com",23],["trangchu.news",23],["umk.co.jp",23],["streamservicehd.click",23],["eplayer.click",23],["olacast.live",23],["kamerabudaya.com",24],["visaonoticias.com",25],["alphapolis.co.jp",26],["money-sense.club",27],["kanjukulive.com",28],["radichubu.jp",29],["texte.work",30],["railf.jp",31],["spectank.jp",31],["mhwg.org",32],["anauk.net",33],["bonobono.com",34],["rdsong.com",34],["poplinks.idolmaster-official.jp",35],["bdb.com.pl",36],["kijyomatome-ch.com",37],["globaledu.jp",37],["loveplay123.com",38],["th-world.com",39],["korona.co.jp",40],["novelism.jp",41],["myhtebooks.com",42],["pixnet.net",43],["apk1s.com",44],["foxaholic.com",45],["auth.alipay.com",46],["30edu.com.cn",47],["doc.mbalib.com",48],["perangkatguruku.com",49],["naaree.com",50],["gardenia.net",51],["c315.cn",52],["uemeds.cn",53],["pttws.ptt.gov.tr",54],["leeyiding.com",55],["veblr.com",56],["thememypc.net",57],["gakki.me",59],["tunegate.me",60],["oricon.co.jp",61],["lover93.net",62],["fantasytagtree.com",63],["selfstudys.com",64],["myfreemp3juices.cc",65],["welovemanga.one",66],["animefire.plus",67],["mrbenne.com",68],["xossipy.com",69],["esscctv.com",70]]);

const entitiesMap = new Map([["pelispedia",0],["vinaurl",17],["ask4movie",58]]);

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
    const asap = /\basap\b/.test(behavior);
    let timerId;
    const rmattrAsync = ( ) => {
        if ( timerId !== undefined ) { return; }
        timerId = safe.onIdle(( ) => {
            timerId = undefined;
            rmattr();
        }, { timeout: 17 });
    };
    const rmattr = ( ) => {
        if ( timerId !== undefined ) {
            safe.offIdle(timerId);
            timerId = undefined;
        }
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
        if ( timerId !== undefined ) { return; }
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
        asap ? rmattr() : rmattrAsync();
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
    runAt(( ) => { start(); }, behavior.split(/\s+/));
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
        'Object_defineProperties': Object.defineProperties.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String_fromCharCode': String.fromCharCode,
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
    } catch(_) {
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            safe.log(`uBO ${text}`);
        };
    }
    return safe;
}

/******************************************************************************/

const hnParts = [];
try {
    let origin = document.location.origin;
    if ( origin === 'null' ) {
        const origins = document.location.ancestorOrigins;
        for ( let i = 0; i < origins.length; i++ ) {
            origin = origins[i];
            if ( origin !== 'null' ) { break; }
        }
    }
    const pos = origin.lastIndexOf('://');
    if ( pos === -1 ) { return; }
    hnParts.push(...origin.slice(pos+3).split('.'));
}
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

uBOL_removeAttr();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
