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

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_removeAttr = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["oncontextmenu"],["onmousedown|onselectstart","#kol_content","complete"],["oncopy"],["onselectstart"],["oncontextmenu|oncopy|ondragstart|onselect|onselectstart","body","complete"],["oncontextmenu|ondragstart|onselectstart"],["oncontextmenu|ondragstart|onselectstart|onkeydown"],["oncontextmenu|onselectstart"],["oncontextmenu|onselectstart|ondragstart"],["oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart"],["oncontextmenu|onselectstart|onselect|oncopy"],["oncontextmenu|onkeydown|onmousedown"],["oncontextmenu|onselectstart|ondragstart|oncopy|oncut|onpaste|onbeforecopy"],["onselectstart|ondragstart"],["oncontextmenu","body","complete"],["oncontextmenu|onCopy"],["oncontextmenu|onmousedown|onselectstart"],["oncontextmenu|ondragstart|onselectstart|onkeydown|onmousedown"],["oncontextmenu|onkeydown"],["onkeydown"],["ondragstart|onselectstart"],["ondrop|ondragstart"],["onselectstart|ondragstart|oncontextmenu","div.story_text","complete"],["oncontextmenu|ondragstart"],["onmousemove|ondragstart|onselectstart|oncontextmenu","body"],["oncontextmenu","body"],["onselectstart|ondragstart|onmousedown|onkeydown|oncontextmenu","body"],["oncontextmenu|onselectstart|ondragstart|onclick"],["style","div#novelBoby","stay"],["oncontextmenu|onMouseDown|style"],["ondragstart|oncontextmenu"],["onContextMenu","body"],["onkeydown|oncontextmenu","body"],["oncontextmenu|oncopy"],["oncontextmenu|onselectstart|style","#body_game"],["oncontextmenu|onselectstart|onselect|ondragstart|ondrag","body"],["oncontextmenu|ondragstart|onselectstart","body"],["oncontextmenu|onselectstart|onmousedown","body"],["oncopy|oncontextmenu|onselectstart|onselect|ondragstart|ondrag|onbeforeprint|onafterprint","body"],["oncontextmenu|onselectstart","body"],["oncontextmenu|onDragStart|onSelectStart"],["oncontextmenu|ondragstart|onselectstart|onkeydown|oncopy|oncut"],["oncopy|oncontextmenu","body"],["oncontextmenu|ondragstart|oncopy|oncut",".select-none","stay"],["oncontextmenu|ondragstart|onselectstart|onselect|oncopy|onbeforecopy|onkeydown|onunload"],["oncontextmenu|onDragStart|onselectstart"],["onselectstart|oncontextmenu","body"],["oncontextmenu|onkeydown|onselectstart","body"],["oncopy|oncontextmenu|oncut|onpaste","input"],["oncontextmenu|oncopy|onselectstart"],["onbeforecopy|oncontextmenu|oncopy|ondragstart|onmouseup|onselect|onselectstart"],["oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart|style","body"],["style","body[style=\"user-select: none;\"]","stay"],["oncopy|oncut|onselectstart|style|unselectable","body","stay"],["oncontextmenu|onselectstart|oncut|oncopy"],["oncontextmenu|ondragstart|onselect"],["onpaste","#tr_mesaj > td > .text-input.validate\\[required\\]"],["oncontextmenu|onkeydown|onselectstart"],["oncontextmenu","#VdoPlayerDiv"],["oncontextmenu","a#download_link","stay"],["oncontextmenu","html"],["oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart|onselect|oncopy|onbeforecopy|onmouseup"],["onContextmenu|onMouseDown|onSelectStart"],["oncontextmenu|onmousedown|onselectstart",".all-lyrics"],["oncontextmenu|ondragstart|onselectstart","body","complete"],["oncontextmenu","img[oncontextmenu=\"return false;\"]","stay"],["onselectstart","body"],["onclick","[onclick=\"myFunction()\"]"],["oncontextmenu","[oncontextmenu=\"return false;\"]"],["oncontextmenu|ondragstart","","complete"],["oncontextmenu|ondragstart|onselectstart|onload|onblur"],["oncopy|oncut"],["onselectstart","html[onselectstart]"],["oncontextmenu|oncopy|oncut","[id^=\"chapter\"]","complete"],["oncontextmenu|oncopy|onselectstart","body","complete"],["onselectstart|oncopy","body","complete"]];

const hostnamesMap = new Map([["nulled.life",0],["liveonsat.com",0],["ligowiec.net",0],["radio5.com.pl",0],["romet.pl",0],["sat-charts.eu",0],["trentino.pl",0],["pcpobierz.pl",0],["animeunity.it",0],["megawypas.com",0],["meteo.org.pl",0],["banglainsider.com",0],["listatv.pl",0],["megatube.xxx",0],["elektro-plast.com.pl",0],["adnan-tech.com",0],["nzbstars.com",0],["nogizaka46.com",0],["suedkurier.de",0],["utamap.com",0],["hienzo.com",0],["debeste.de",0],["courseware.cemc.uwaterloo.ca",0],["sekai-kabuka.com",0],["daum.net",0],["fraudnavi.com",0],["zdravenportal.eu",0],["wasza-farma.pl",0],["goalup.live",0],["promotor-poz.kylos.pl",0],["img999.com",0],["wattpad.com",0],["articlesmania.me",0],["aksensei.com",0],["aepos.ap.gov.in",0],["mocah.org",0],["matzoo.pl",0],["warning.or.kr",0],["terramirabilis.ro",0],["smartkhabrinews.com",0],["sportsupa.com",0],["hoca4u.com",0],["4kwebplay.xyz",0],["qqwebplay.xyz",0],["lewblivehdplay.ru",0],["claplivehdplay.ru",0],["tutlehd4.com",0],["viwlivehdplay.ru",0],["kolnovel.org",1],["ebc.com.br",2],["pandurul.ro",2],["livetennis.it",3],["djelfa.info",3],["virpe.com",3],["seoul.cs.land.to",3],["utorrentgamesps2.blogspot.com",3],["book.zongheng.com",3],["shumilou.com",3],["virpe.cc",3],["singingdalong.blogspot.com",5],["neobux.com",5],["dba-oracle.com",5],["giromarilia.com.br",5],["northumberland-walks.co.uk",5],["foodviva.com",5],["shushan.zhangyue.net",5],["elahmad.com",5],["novelpia.com",5],["epitesti.ro",5],["uwayapply.com",5],["apornstories.com",6],["filmesonlinex.co",6],["j-lyric.net",7],["utaten.com",7],["as-selection.net",7],["tohkaishimpo.com",7],["iwanichi.co.jp",7],["runningnews.gr",8],["mainframegurukul.com",8],["clasicotas.org",8],["nostracasa.com.br",8],["enjoytaiwan.co.kr",8],["tercihiniyap.net",8],["gukjenews.com",8],["ohli365.vip",8],["insurance-corporate.blogspot.com",9],["gezimanya.com",10],["cepuluh.com",11],["tekloggers.com",11],["theitaliantimes.it",12],["hebrew4christians.com",13],["musixmatch.com",14],["wouterplanet.com",14],["hansa-online.de",14],["ryuryuko.blog90.fc2.com",15],["mdpr.jp",16],["japan-academy-prize.jp",16],["citpekalongan.com",17],["atribuna.com.br",18],["newsforbolly.org",19],["coinurl.net",19],["diariodoiguacu.com.br",20],["metropoliaztm.pl",21],["quotev.com",22],["nekopoi.web.id",23],["sopot.net",24],["tv-asahi.co.jp",25],["erovideoseek.com",25],["kyonyuquest.com",25],["katosatoshi.jp",25],["kuroko-analyze.com",25],["gats.io",25],["promotor.pl",25],["bikesell.co.kr",25],["news.dwango.jp",25],["urbharat.xyz",25],["animatedshows.to",25],["miraculous.to",25],["cdn.gamemonetize.com",25],["aztravels.net",25],["downfile.site",25],["memangbau.com",25],["trangchu.news",25],["umk.co.jp",25],["streamservicehd.click",25],["eplayer.click",25],["olacast.live",25],["kamerabudaya.com",26],["visaonoticias.com",27],["alphapolis.co.jp",28],["money-sense.club",29],["kanjukulive.com",30],["radichubu.jp",31],["texte.work",32],["railf.jp",33],["spectank.jp",33],["mhwg.org",34],["anauk.net",35],["bonobono.com",36],["rdsong.com",36],["poplinks.idolmaster-official.jp",37],["bdb.com.pl",38],["kijyomatome-ch.com",39],["globaledu.jp",39],["loveplay123.com",40],["th-world.com",41],["korona.co.jp",42],["novelism.jp",43],["myhtebooks.com",44],["pixnet.net",45],["apk1s.com",46],["foxaholic.com",47],["auth.alipay.com",48],["30edu.com.cn",49],["doc.mbalib.com",50],["perangkatguruku.com",51],["naaree.com",52],["gardenia.net",53],["c315.cn",54],["uemeds.cn",55],["pttws.ptt.gov.tr",56],["leeyiding.com",57],["veblr.com",58],["thememypc.net",59],["gakki.me",61],["tunegate.me",62],["oricon.co.jp",63],["lover93.net",64],["fantasytagtree.com",65],["selfstudys.com",66],["myfreemp3juices.cc",67],["welovemanga.one",68],["animefire.plus",69],["mrbenne.com",70],["xossipy.com",71],["esscctv.com",72],["foxteller.com",73],["blindhelp.net",74],["smalley.com",75]]);

const entitiesMap = new Map([["pelispedia",0],["skionline",4],["vinaurl",19],["ask4movie",60]]);

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
    const tokens = safe.String_split.call(rawToken, /\s*\|\s*/);
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
        } catch {
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
    runAt(( ) => { start(); }, safe.String_split.call(behavior, /\s+/));
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
} catch {
}
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
    catch { }
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
