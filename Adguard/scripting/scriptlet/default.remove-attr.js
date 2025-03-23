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

// ruleset: default

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

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [["onclick"],["href|target","a[href=\"https://imgprime.com/view.php\"][target=\"_blank\"]","complete"],["href","a[href=\"https://vpn-choice.com\"]"],["href","#opfk"],["srcdoc","iframe"],["checked","input#chkIsAdd"],["onmousemove","button"],["onclick","button[name=\"imgContinue\"][onclick]"],["target","#continuetoimage > [href]"],["href|target","#continuetoimage > [href][onclick], #overlayera > #ajax_load_indicator > #page_effect > [href][onclick]"],["target"],["href","[href*=\"ccbill\"]"],["onclick","[onclick^=\"window.open\"]"],["href","#clickfakeplayer"],["onclick","","stay"],["type","input[value^=\"http\"]"],["oncontextmenu"],["data-popunder-url"],["href","a#clickfakeplayer"],["href",".fake_player > [href][target]"],["href",".link"],["target",".clickbutton"],["disabled","button"],["data-ppcnt_ads","main[onclick]"],["disabled","#tp-snp2"],["data-ppcnt_ads|onclick","#main"],["data-ppcnt_ads|onclick","#main[onclick*=\"mainClick\"]","stay"],["onclick",".btn-success.get-link","stay"],["disabled",".btn-primary"],["href",".MyAd > a[target=\"_blank\"]"],["data-ppcnt_ads","","stay"],["onclick","button[onclick^=\"window.open\"]"],["onclick","[onclick^=\"window.open\"]","stay"],["onclick",".btn"],["onclick","[onclick^=\"pop\"]"],["href","[href*=\"survey\"]","stay"],["href","[href^=\"https://aj2218.online/\"]","stay"],["target","#downloadvideo"],["data-item","a[href='']"],["href","a[href*=\"/ads.php\"][target=\"_blank\"]"],["onclick","[onclick*=\"window.open\"]","stay"],["target|href","a[href^=\"//\"]"],["target","#SafelinkGenerate"],["href","[href*=\"nihonjav\"]","stay"],["onclick","a[href][onclick^=\"getFullStory\"]"],["onclick",".previewhd > a"],["href|target|data-ipshover-target|data-ipshover|data-autolink|rel","a[href^=\"https://thumpertalk.com/link/click/\"][target=\"_blank\"]"],["href","#continue"],["href",".button[href^=\"javascript\"]"],["disabled","input[id=\"button1\"][class=\"btn btn-primary\"][disabled]"],["type","[src*=\"SPOT\"]","asap stay"],["class","div#player"],["href|target|data-onclick","a[id=\"dl\"][data-onclick^=\"window.open\"]","stay"],["onclick","a[onclick^=\"setTimeout\"]"],["href",".t-out-span [href*=\"utm_source\"]","stay"],["src",".t-out-span [src*=\".gif\"]","stay"],["disabled",".panel-body > .text-center > button"],["href","[onclick]","stay"],["onmousedown",".ob-dynamic-rec-link","stay"],["disabled","a#redirect-btn"],["href",".unlock-step-link"],["href","[href*=\"discord\"]"],["href",".MediaStep","stay"],["href","[href=\"/bestporn.html\"]"],["disabled","button#getlink"],["disabled","button#gotolink"],["id","#div-gpt-ad-footer"],["id","#div-gpt-ad-pagebottom"],["id","#div-gpt-ad-relatedbottom-1"],["id","#div-gpt-ad-sidebottom"],["disabled",".downloadbtn"],["href","[onclick^=\"pop\"]"],["disabled","#gotolink"],["style","[style*=\"background-image: url\"]","stay"],["href","[href*=\"click?\"]","stay"],["href",".atas > a[href*=\"/redirect\"][onclick]"],["onload","[onload^=\"window.open\"]"],["href","a[href*=\"torrentico.top/sim/go.php\"]"],["onclick","[type=\"submit\"]"],["onclick","a#downloadbtn[onclick^=\"window.open\"]","stay"],["onclick","a[onclick]"],["onclick","a[onclick*=\"window.open\"]"],["style","[style^=\"background\"]","stay"],["href","[target^=\"_\"]","stay"],["href","[target=\"_blank\"]","stay"],["href","[href*=\"jump\"]","stay"],["style","#over"],["oncontextmenu","body"],["onclick","[onclick*=\"_blank\"]","stay"],["onclick","button[onclick*=\"open\"]"],["onclick","button[id][onclick*=\".html\"]"],["data-id|data-p","[data-id],[data-p]","stay"],["onclick","button[onclick^=\"window.open\"]","stay"],["onclick","a[href][onclick^=\"openit\"]","stay"],["onclick|oncontextmenu|onmouseover","a[href][onclick*=\"this.href\"]","stay"],["onclick","a[onclick=\"fire_download_click_tracking();\"]","complete"],["class|style","div[id^=\"los40_gpt\"]"],["data-woman-ex","a[href][data-woman-ex]"],["data-trm-action|data-trm-category|data-trm-label",".trm_event","stay"]];
const hostnamesMap = new Map([["adbull.*",0],["bs.to",0],["burningseries.*",0],["payskip.org",0],["dozarte.com",0],["nextorrent.*",0],["sportlive.*",0],["pornoborshch.com",0],["imgprime.com",1],["magnetdl.com",2],["magnetdl.org",2],["pelisplus.*",3],["pelispedia.*",[3,18,19]],["cine-calidad.*",3],["igg-games.com",4],["crazyvidup.com",4],["douploads.*",5],["vinaurl.*",6],["22pixx.xyz",[7,8,9]],["games2rule.com",10],["games4king.com",10],["sexykittenporn.com",11],["errotica-archives.com",11],["mega4up.*",12],["zeefiles.*",12],["amyscans.com",13],["cinetux.*",13],["dpstream.*",13],["allcalidad.*",13],["pelis28.*",13],["dvdgayonline.com",13],["supergoku.com",13],["jetanimes.*",13],["openloading.com",13],["anxcinema.*",13],["dvdgayporn.com",13],["latinohentai.com",13],["vumoo.cc",13],["pelishouse.*",13],["filerio.in",14],["fastconverter.net",14],["mlwbd.*",15],["xxx-image.com",16],["jacquieetmichel.net",17],["pelispedia24.*",18],["premiumstream.live",20],["newsonthegotoday.com",21],["apps2app.com",22],["appsmodz.com",22],["note1s.com",22],["paste1s.com",22],["tr.link",23],["myprivatejobs.com",24],["wikitraveltips.com",24],["amritadrino.com",24],["gitizle.vip",25],["shtms.co",25],["aylink.co",26],["cpmlink.pro",[26,30]],["satoshi-win.xyz",27],["promo-visits.site",28],["bitzite.com",29],["host-buzz.com",31],["insmyst.com",31],["wp2host.com",31],["blogtechh.com",31],["lnbz.la",31],["techbixby.com",31],["blogmyst.com",31],["stagatvfiles.com",31],["tpi.li",32],["oii.io",33],["megaurl.in",34],["megafly.in",34],["donpelis.com",34],["go.linkify.ru",35],["smutty.com",36],["strcloud.*",37],["streamtape.*",37],["streamta.*",37],["strtape.*",37],["strtapeadblock.*",37],["iseekgirls.com",38],["tio.ch",39],["fzm.*",40],["fzmovies.*",40],["fztvseries.live",40],["mobiletvshows.site",40],["tvseries.in",40],["lite-link.*",41],["egao.in",42],["javtrailers.com",43],["hindustantimes.com",44],["itsfuck.com",45],["stilltube.com",45],["thumpertalk.com",46],["adz7short.space",47],["waploaded.*",48],["allwpworld.com",49],["veoplanet.com",50],["blogdatecnologia.net",51],["diariodecasamento.com",51],["eusaudavel.net",51],["modaestiloeafins.com",51],["portalmundocurioso.com",51],["receitasabores.com",51],["turismoeviagem.com",51],["bowfile.com",52],["av01.tv",53],["firstpost.com",[54,55]],["so1.asia",56],["methodspoint.com",57],["welt.de",58],["top1iq.com",59],["sub1s.com",60],["utopiascans.com",61],["mboost.me",62],["watchanime.video",63],["adzz.in",[64,65,72]],["soranews24.com",[66,67,68,69]],["datanodes.to",70],["javchill.com",71],["proappapk.com",72],["seznamzpravy.cz",[73,74]],["link.idblog.eu.org",75],["jockantv.com",76],["domaha.tv",77],["xxxrip.net",77],["sextor.org",77],["sex-torrent.net",77],["timestamp.fr",78],["yt2conv.com",79],["av01.media",80],["flixtor2.to",81],["karaoketexty.cz",[82,83]],["cimanow.online",84],["work.ink",85],["freeplayervideo.com",86],["nazarickol.com",86],["player-cdn.com",86],["playhydrax.com",86],["18kalebettv.xyz",87],["19kalebettv.xyz",87],["tokuzilla.net",88],["swiftuploads.com",89],["filecrypt.*",90],["vidplay.*",91],["vizcloud.*",91],["loader.fo",[92,93]],["forum.blu-ray.com",94],["videezy.com",95],["los40.com",96],["woman.excite.co.jp",97],["demae-can.com",98]]);
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
