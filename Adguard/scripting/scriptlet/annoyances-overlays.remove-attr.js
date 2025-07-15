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

// ruleset: annoyances-overlays

// Important!
// Isolate from global scope

// Start of local scope
(function uBOL_removeAttr() {

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
const argsList = [["oncontextmenu"],["oncopy"],["onselectstart"],["oncontextmenu|oncopy|ondragstart|onselect|onselectstart","body","complete"],["oncontextmenu|ondragstart|onselectstart"],["oncontextmenu|ondragstart|onselectstart|onkeydown"],["oncontextmenu|onselectstart"],["oncontextmenu|onselectstart|ondragstart"],["oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart"],["oncontextmenu|onselectstart|onselect|oncopy"],["oncontextmenu|onkeydown|onmousedown"],["oncontextmenu|onselectstart|ondragstart|oncopy|oncut|onpaste|onbeforecopy"],["onselectstart|ondragstart"],["oncontextmenu","body","complete"],["oncontextmenu|onCopy"],["oncontextmenu|onmousedown|onselectstart"],["oncontextmenu|ondragstart|onselectstart|onkeydown|onmousedown"],["oncontextmenu|onkeydown"],["onkeydown"],["ondragstart|onselectstart"],["ondrop|ondragstart"],["onselectstart|ondragstart|oncontextmenu","div.story_text","complete"],["oncontextmenu|ondragstart"],["onmousemove|ondragstart|onselectstart|oncontextmenu","body"],["oncontextmenu","body"],["onselectstart|ondragstart|onmousedown|onkeydown|oncontextmenu","body"],["oncontextmenu|onselectstart|ondragstart|onclick"],["style","div#novelBoby","stay"],["oncontextmenu|onMouseDown|style"],["ondragstart|oncontextmenu"],["onContextMenu","body"],["onkeydown|oncontextmenu","body"],["oncontextmenu|oncopy"],["oncontextmenu|onselectstart|style","#body_game"],["oncontextmenu|onselectstart|onselect|ondragstart|ondrag","body"],["oncontextmenu|ondragstart|onselectstart","body"],["oncontextmenu|onselectstart|onmousedown","body"],["oncopy|oncontextmenu|onselectstart|onselect|ondragstart|ondrag|onbeforeprint|onafterprint","body"],["oncontextmenu|onselectstart","body"],["oncontextmenu|onDragStart|onSelectStart"],["oncontextmenu|ondragstart|onselectstart|onkeydown|oncopy|oncut"],["oncopy|oncontextmenu","body"],["oncontextmenu|ondragstart|oncopy|oncut",".select-none","stay"],["oncontextmenu|ondragstart|onselectstart|onselect|oncopy|onbeforecopy|onkeydown|onunload"],["oncontextmenu|onDragStart|onselectstart"],["oncontextmenu|onkeydown|onselectstart","body"],["oncopy|oncontextmenu|oncut|onpaste","input"],["oncontextmenu|oncopy|onselectstart"],["onbeforecopy|oncontextmenu|oncopy|ondragstart|onmouseup|onselect|onselectstart"],["oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart|style","body"],["style","body[style=\"user-select: none;\"]","stay"],["oncopy|oncut|onselectstart|style|unselectable","body","stay"],["oncontextmenu|onselectstart|oncut|oncopy"],["oncontextmenu|ondragstart|onselect"],["onpaste","#tr_mesaj > td > .text-input.validate\\[required\\]"],["oncontextmenu|onkeydown|onselectstart"],["oncontextmenu|ondragstart|ondrop|onselectstart","[oncontextmenu]","complete"],["oncontextmenu","#VdoPlayerDiv"],["oncontextmenu","a#download_link","stay"],["oncontextmenu","html"],["oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart|onselect|oncopy|onbeforecopy|onmouseup"],["onContextmenu|onMouseDown|onSelectStart"],["oncontextmenu|onmousedown|onselectstart",".all-lyrics"],["oncontextmenu|ondragstart|onselectstart","body","complete"],["oncontextmenu","img[oncontextmenu=\"return false;\"]","stay"],["onselectstart","body"],["onclick","[onclick=\"myFunction()\"]"],["oncontextmenu","[oncontextmenu=\"return false;\"]"],["oncontextmenu|ondragstart","","complete"],["oncontextmenu|ondragstart|onselectstart|onload|onblur"],["oncopy|oncut"],["onselectstart","html[onselectstart]"],["oncontextmenu|oncopy|oncut","[id^=\"chapter\"]","complete"],["oncontextmenu|oncopy|onselectstart","body","complete"],["onselectstart|oncopy","body","complete"],["onselectstart","","stay"]];
const hostnamesMap = new Map([["pelispedia.*",0],["nulled.life",0],["liveonsat.com",0],["ligowiec.net",0],["radio5.com.pl",0],["romet.pl",0],["sat-charts.eu",0],["trentino.pl",0],["pcpobierz.pl",0],["animeunity.it",0],["megawypas.com",0],["meteo.org.pl",0],["banglainsider.com",0],["listatv.pl",0],["megatube.xxx",0],["elektro-plast.com.pl",0],["adnan-tech.com",0],["nzbstars.com",0],["nogizaka46.com",0],["suedkurier.de",0],["utamap.com",0],["hienzo.com",0],["debeste.de",0],["courseware.cemc.uwaterloo.ca",0],["sekai-kabuka.com",0],["daum.net",0],["fraudnavi.com",0],["zdravenportal.eu",0],["wasza-farma.pl",0],["goalup.live",0],["promotor-poz.kylos.pl",0],["img999.com",0],["wattpad.com",0],["articlesmania.me",0],["aepos.ap.gov.in",0],["mocah.org",0],["matzoo.pl",0],["warning.or.kr",0],["terramirabilis.ro",0],["smartkhabrinews.com",0],["sportsupa.com",0],["hoca4u.com",0],["4kwebplay.xyz",0],["qqwebplay.xyz",0],["lewblivehdplay.ru",0],["claplivehdplay.ru",0],["tutlehd4.com",0],["ebc.com.br",1],["pandurul.ro",1],["livetennis.it",2],["djelfa.info",2],["virpe.com",2],["seoul.cs.land.to",2],["utorrentgamesps2.blogspot.com",2],["book.zongheng.com",2],["shumilou.com",2],["virpe.cc",2],["skionline.*",3],["singingdalong.blogspot.com",4],["neobux.com",4],["dba-oracle.com",4],["giromarilia.com.br",4],["northumberland-walks.co.uk",4],["foodviva.com",4],["shushan.zhangyue.net",4],["elahmad.com",4],["epitesti.ro",4],["uwayapply.com",4],["apornstories.com",5],["j-lyric.net",6],["utaten.com",6],["as-selection.net",6],["tohkaishimpo.com",6],["iwanichi.co.jp",6],["runningnews.gr",7],["mainframegurukul.com",7],["clasicotas.org",7],["nostracasa.com.br",7],["enjoytaiwan.co.kr",7],["tercihiniyap.net",7],["gukjenews.com",7],["ohli365.vip",7],["insurance-corporate.blogspot.com",8],["gezimanya.com",9],["cepuluh.com",10],["tekloggers.com",10],["theitaliantimes.it",11],["hebrew4christians.com",12],["musixmatch.com",13],["wouterplanet.com",13],["hansa-online.de",13],["wasserstoff-leitprojekte.de",13],["ryuryuko.blog90.fc2.com",14],["mdpr.jp",15],["japan-academy-prize.jp",15],["citpekalongan.com",16],["atribuna.com.br",17],["vinaurl.*",18],["newsforbolly.org",18],["coinurl.net",18],["diariodoiguacu.com.br",19],["metropoliaztm.pl",20],["quotev.com",21],["nekopoi.web.id",22],["sopot.net",23],["tv-asahi.co.jp",24],["erovideoseek.com",24],["katosatoshi.jp",24],["kuroko-analyze.com",24],["gats.io",24],["promotor.pl",24],["bikesell.co.kr",24],["news.dwango.jp",24],["urbharat.xyz",24],["miraculous.to",24],["cdn.gamemonetize.com",24],["aztravels.net",24],["downfile.site",24],["memangbau.com",24],["trangchu.news",24],["umk.co.jp",24],["streamservicehd.click",24],["eplayer.click",24],["olacast.live",24],["kamerabudaya.com",25],["visaonoticias.com",26],["alphapolis.co.jp",27],["money-sense.club",28],["kanjukulive.com",29],["radichubu.jp",30],["texte.work",31],["railf.jp",32],["spectank.jp",32],["mhwg.org",33],["anauk.net",34],["bonobono.com",35],["rdsong.com",35],["poplinks.idolmaster-official.jp",36],["bdb.com.pl",37],["kijyomatome-ch.com",38],["globaledu.jp",38],["loveplay123.com",39],["th-world.com",40],["korona.co.jp",41],["novelism.jp",42],["myhtebooks.com",43],["pixnet.net",44],["foxaholic.com",45],["auth.alipay.com",46],["30edu.com.cn",47],["doc.mbalib.com",48],["perangkatguruku.com",49],["naaree.com",50],["gardenia.net",51],["c315.cn",52],["uemeds.cn",53],["pttws.ptt.gov.tr",54],["leeyiding.com",55],["novelpia.com",56],["veblr.com",57],["thememypc.net",58],["ask4movie.*",59],["gakki.me",60],["tunegate.me",61],["oricon.co.jp",62],["lover93.net",63],["fantasytagtree.com",64],["selfstudys.com",65],["myfreemp3juices.cc",66],["welovemanga.one",67],["animefire.plus",68],["mrbenne.com",69],["xossipy.com",70],["esscctv.com",71],["foxteller.com",72],["blindhelp.net",73],["smalley.com",74],["ofertecatalog.ro",75]]);
const exceptionsMap = new Map([]);
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
    try { removeAttr(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
