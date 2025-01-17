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

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_setLocalStorageItem = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["lastRedirect","true"],["PageCount","$remove$"],["a_render","true"],["adf_plays","2"],["email","true"],["adDisplayed","$remove$"],["forcefeaturetoggle.enable_ad_block_detect","false"],["adWatched","true"],["adshield-analytics-uuid","$remove$"],["/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["/_fa_dXVpZA==$/","$remove$"],["/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"],["segmentDeviceId","$remove$"],["/optimizely_data|tealium_timing/","$remove$"],["IIElevenLabsDubbingResult","$remove$"],["didomi_token","$remove$"],["browser-ids","$remove$"],["fdx_enable_new_detail_page","true"]];

const hostnamesMap = new Map([["exambd.net",0],["jetpunk.com",1],["bravedown.com",2],["adultdeepfakes.com",3],["freewsad.com",4],["hdfilmcehennemi2.cx",5],["tradingview.com",6],["gputrends.net",7],["loawa.com",[8,9,10,11,12,13]],["ygosu.com",[8,9,10,11,12,13]],["sportalkorea.com",[8,9,10,11,12,13]],["edaily.co.kr",[8,9,10,11,12,13]],["economist.co.kr",[8,9,10,11,12,13]],["etoday.co.kr",[8,9,10,11,12,13]],["isplus.com",[8,9,10,11,12,13]],["hometownstation.com",[8,9,10,11,12,13]],["honkailab.com",[8,9,10,11,12,13]],["thestockmarketwatch.com",[8,9,10,11,12,13]],["issuya.com",[8,9,10,11,12,13]],["worldhistory.org",[8,9,10,11,12,13]],["etnews.com",[8,9,10,11,12,13]],["iusm.co.kr",[8,9,10,11,12,13]],["dogdrip.net",[8,9,10,11,12,13]],["etoland.co.kr",[8,9,10,11,12,13]],["picrew.me",[8,9,10,11,12,13]],["text-compare.com",[8,9,10,11,12,13]],["fntimes.com",[8,9,10,11,12,13]],["javatpoint.com",[8,9,10,11,12,13]],["lamire.jp",[8,9,10,11,12,13]],["bamgosu.site",[8,9,10,11,12,13]],["allthekingz.com",[8,9,10,11,12,13]],["automobile-catalog.com",[8,9,10,11,12,13]],["maketecheasier.com",[8,9,10,11,12,13]],["thesaurus.net",[8,9,10,11,12,13]],["wfmz.com",[8,9,10,11,12,13]],["thestar.co.uk",[8,9,10,11,12,13]],["yorkshirepost.co.uk",[8,9,10,11,12,13]],["mydaily.co.kr",[8,9,10,11,12,13]],["raenonx.cc",[8,9,10,11,12,13]],["ndtvprofit.com",[8,9,10,11,12,13]],["badmouth1.com",[8,9,10,11,12,13]],["logicieleducatif.fr",[8,9,10,11,12,13]],["taxguru.in",[8,9,10,11,12,13]],["islamicfinder.org",[8,9,10,11,12,13]],["aikatu.jp",[8,9,10,11,12,13]],["secure-signup.net",[8,9,10,11,12,13]],["globalrph.com",[8,9,10,11,12,13]],["sportsrec.com",[8,9,10,11,12,13]],["reportera.co.kr",[8,9,10,11,12,13]],["flatpanelshd.com",[8,9,10,11,12,13]],["videogamemods.com",[8,9,10,11,12,13]],["adintrend.tv",[8,9,10,11,12,13]],["ark-unity.com",[8,9,10,11,12,13]],["cool-style.com.tw",[8,9,10,11,12,13]],["dziennik.pl",[8,9,10,11,12,13]],["eurointegration.com.ua",[8,9,10,11,12,13]],["winfuture.de",[8,9,10,11,12,13]],["freemcserver.net",[8,9,10,11,12,13]],["pravda.com.ua",[8,9,10,11,12,13]],["infinityfree.com",[8,9,10,11,12,13]],["wort-suchen.de",[8,9,10,11,12,13]],["word-grabber.com",[8,9,10,11,12,13]],["palabr.as",[8,9,10,11,12,13]],["motscroises.fr",[8,9,10,11,12,13]],["cruciverba.it",[8,9,10,11,12,13]],["dramabeans.com",[8,9,10,11,12,13]],["mynet.com",[8,9,10,11,12,13]],["sportsseoul.com",[8,9,10,11,12,13]],["smsonline.cloud",[8,9,10,11,12,13]],["meeco.kr",[8,9,10,11,12,13]],["heureka.cz",[8,9,10,11,12,13]],["slobodnadalmacija.hr",[8,9,10,11,12,13]],["ap7am.com",[8,9,10,11,12,13]],["autoby.jp",[8,9,10,11,12,13]],["bg-mania.jp",[8,9,10,11,12,13]],["cinema.com.my",[8,9,10,11,12,13]],["crosswordsolver.com",[8,9,10,11,12,13]],["daily.co.jp",[8,9,10,11,12,13]],["demotywatory.pl",[8,9,10,11,12,13]],["dnevno.hr",[8,9,10,11,12,13]],["dolldivine.com",[8,9,10,11,12,13]],["economictimes.com",[8,9,10,11,12,13]],["forsal.pl",[8,9,10,11,12,13]],["gazetaprawna.pl",[8,9,10,11,12,13]],["giornalone.it",[8,9,10,11,12,13]],["gloria.hr",[8,9,10,11,12,13]],["iplocation.net",[8,9,10,11,12,13]],["j-cast.com",[8,9,10,11,12,13]],["j-town.net",[8,9,10,11,12,13]],["joemonster.org",[8,9,10,11,12,13]],["jutarnji.hr",[8,9,10,11,12,13]],["lacuarta.com",[8,9,10,11,12,13]],["laleggepertutti.it",[8,9,10,11,12,13]],["lovelive-petitsoku.com",[8,9,10,11,12,13]],["mamastar.jp",[8,9,10,11,12,13]],["manta.com",[8,9,10,11,12,13]],["mediaindonesia.com",[8,9,10,11,12,13]],["mirrored.to",[8,9,10,11,12,13]],["missyusa.com",[8,9,10,11,12,13]],["mistrzowie.org",[8,9,10,11,12,13]],["mlbpark.donga.com",[8,9,10,11,12,13]],["netzwelt.de",[8,9,10,11,12,13]],["nmplus.hk",[8,9,10,11,12,13]],["oeffnungszeitenbuch.de",[8,9,10,11,12,13]],["ondemandkorea.com",[8,9,10,11,12,13]],["oradesibiu.ro",[8,9,10,11,12,13]],["oraridiapertura24.it",[8,9,10,11,12,13]],["persoenlich.com",[8,9,10,11,12,13]],["petitfute.com",[8,9,10,11,12,13]],["powerpyx.com",[8,9,10,11,12,13]],["rabitsokuhou.2chblog.jp",[8,9,10,11,12,13]],["rostercon.com",[8,9,10,11,12,13]],["slashdot.org",[8,9,10,11,12,13]],["sourceforge.net",[8,9,10,11,12,13]],["suzusoku.blog.jp",[8,9,10,11,12,13]],["talkwithstranger.com",[8,9,10,11,12,13]],["the-crossword-solver.com",[8,9,10,11,12,13]],["tportal.hr",[8,9,10,11,12,13]],["tvtv.ca",[8,9,10,11,12,13]],["tvtv.us",[8,9,10,11,12,13]],["webdesignledger.com",[8,9,10,11,12,13]],["wouldurather.io",[8,9,10,11,12,13]],["yutura.net",[8,9,10,11,12,13]],["zagreb.info",[8,9,10,11,12,13]],["golf-live.at",[8,9,10,11,12,13]],["motherlyvisions.com",[8,9,10,11,12,13]],["w.grapps.me",[8,9,10,11,12,13]],["pressian.com",[8,9,10,11,12,13]],["kreuzwortraetsel.de",[8,9,10,11,12,13]],["verkaufsoffener-sonntag.com",[8,9,10,11,12,13]],["raetsel-hilfe.de",[8,9,10,11,12,13]],["horairesdouverture24.fr",[8,9,10,11,12,13]],["nyitvatartas24.hu",[8,9,10,11,12,13]],["convertcase.net",[8,9,10,11,12,13]],["mindbodygreen.com",14],["1und1.de",15],["elevenlabs.io",16],["tv5mondeplus.com",17],["visible.com",18],["fedex.com",19]]);

const entitiesMap = new Map([["woxikon",[8,9,10,11,12,13]]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function setLocalStorageItem(key = '', value = '') {
    setLocalStorageItemFn('local', false, key, value);
}

function setLocalStorageItemFn(
    which = 'local',
    trusted = false,
    key = '',
    value = '',
) {
    if ( key === '' ) { return; }

    // For increased compatibility with AdGuard
    if ( value === 'emptyArr' ) {
        value = '[]';
    } else if ( value === 'emptyObj' ) {
        value = '{}';
    }

    const trustedValues = [
        '',
        'undefined', 'null',
        '{}', '[]', '""',
        '$remove$',
        ...getSafeCookieValuesFn(),
    ];

    if ( trusted ) {
        if ( value.includes('$now$') ) {
            value = value.replaceAll('$now$', Date.now());
        }
        if ( value.includes('$currentDate$') ) {
            value = value.replaceAll('$currentDate$', `${Date()}`);
        }
        if ( value.includes('$currentISODate$') ) {
            value = value.replaceAll('$currentISODate$', (new Date()).toISOString());
        }
    } else {
        const normalized = value.toLowerCase();
        const match = /^("?)(.+)\1$/.exec(normalized);
        const unquoted = match && match[2] || normalized;
        if ( trustedValues.includes(unquoted) === false ) {
            if ( /^-?\d+$/.test(unquoted) === false ) { return; }
            const n = parseInt(unquoted, 10) || 0;
            if ( n < -32767 || n > 32767 ) { return; }
        }
    }

    try {
        const storage = self[`${which}Storage`];
        if ( value === '$remove$' ) {
            const safe = safeSelf();
            const pattern = safe.patternToRegex(key, undefined, true );
            const toRemove = [];
            for ( let i = 0, n = storage.length; i < n; i++ ) {
                const key = storage.key(i);
                if ( pattern.test(key) ) { toRemove.push(key); }
            }
            for ( const key of toRemove ) {
                storage.removeItem(key);
            }
        } else {
            storage.setItem(key, `${value}`);
        }
    } catch {
    }
}

function getSafeCookieValuesFn() {
    return [
        'accept', 'reject',
        'accepted', 'rejected', 'notaccepted',
        'allow', 'disallow', 'deny',
        'allowed', 'denied',
        'approved', 'disapproved',
        'checked', 'unchecked',
        'dismiss', 'dismissed',
        'enable', 'disable',
        'enabled', 'disabled',
        'essential', 'nonessential',
        'forbidden', 'forever',
        'hide', 'hidden',
        'necessary', 'required',
        'ok',
        'on', 'off',
        'true', 't', 'false', 'f',
        'yes', 'y', 'no', 'n',
        'all', 'none', 'functional',
        'granted', 'done',
        'decline', 'declined',
    ];
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
    try { setLocalStorageItem(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_setLocalStorageItem();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
