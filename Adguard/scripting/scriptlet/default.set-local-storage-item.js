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

const argsList = [["lastRedirect","true"],["PageCount","$remove$"],["a_render","true"],["adf_plays","2"],["email","true"],["adDisplayed","$remove$"],["adWatched","true"],["adshield-analytics-uuid","$remove$"],["/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["/_fa_dXVpZA==$/","$remove$"],["/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"],["segmentDeviceId","$remove$"],["/optimizely_data|tealium_timing/","$remove$"],["IIElevenLabsDubbingResult","$remove$"],["didomi_token","$remove$"],["browser-ids","$remove$"],["fdx_enable_new_detail_page","true"]];

const hostnamesMap = new Map([["exambd.net",0],["jetpunk.com",1],["bravedown.com",2],["adultdeepfakes.com",3],["freewsad.com",4],["hdfilmcehennemi2.cx",5],["gputrends.net",6],["loawa.com",[7,8,9,10,11,12]],["ygosu.com",[7,8,9,10,11,12]],["sportalkorea.com",[7,8,9,10,11,12]],["edaily.co.kr",[7,8,9,10,11,12]],["economist.co.kr",[7,8,9,10,11,12]],["etoday.co.kr",[7,8,9,10,11,12]],["isplus.com",[7,8,9,10,11,12]],["hometownstation.com",[7,8,9,10,11,12]],["honkailab.com",[7,8,9,10,11,12]],["thestockmarketwatch.com",[7,8,9,10,11,12]],["issuya.com",[7,8,9,10,11,12]],["worldhistory.org",[7,8,9,10,11,12]],["etnews.com",[7,8,9,10,11,12]],["iusm.co.kr",[7,8,9,10,11,12]],["dogdrip.net",[7,8,9,10,11,12]],["etoland.co.kr",[7,8,9,10,11,12]],["picrew.me",[7,8,9,10,11,12]],["text-compare.com",[7,8,9,10,11,12]],["fntimes.com",[7,8,9,10,11,12]],["javatpoint.com",[7,8,9,10,11,12]],["lamire.jp",[7,8,9,10,11,12]],["bamgosu.site",[7,8,9,10,11,12]],["allthekingz.com",[7,8,9,10,11,12]],["automobile-catalog.com",[7,8,9,10,11,12]],["maketecheasier.com",[7,8,9,10,11,12]],["thesaurus.net",[7,8,9,10,11,12]],["wfmz.com",[7,8,9,10,11,12]],["thestar.co.uk",[7,8,9,10,11,12]],["yorkshirepost.co.uk",[7,8,9,10,11,12]],["mydaily.co.kr",[7,8,9,10,11,12]],["raenonx.cc",[7,8,9,10,11,12]],["ndtvprofit.com",[7,8,9,10,11,12]],["badmouth1.com",[7,8,9,10,11,12]],["logicieleducatif.fr",[7,8,9,10,11,12]],["taxguru.in",[7,8,9,10,11,12]],["islamicfinder.org",[7,8,9,10,11,12]],["aikatu.jp",[7,8,9,10,11,12]],["secure-signup.net",[7,8,9,10,11,12]],["globalrph.com",[7,8,9,10,11,12]],["sportsrec.com",[7,8,9,10,11,12]],["reportera.co.kr",[7,8,9,10,11,12]],["flatpanelshd.com",[7,8,9,10,11,12]],["videogamemods.com",[7,8,9,10,11,12]],["adintrend.tv",[7,8,9,10,11,12]],["ark-unity.com",[7,8,9,10,11,12]],["cool-style.com.tw",[7,8,9,10,11,12]],["dziennik.pl",[7,8,9,10,11,12]],["eurointegration.com.ua",[7,8,9,10,11,12]],["winfuture.de",[7,8,9,10,11,12]],["freemcserver.net",[7,8,9,10,11,12]],["pravda.com.ua",[7,8,9,10,11,12]],["infinityfree.com",[7,8,9,10,11,12]],["wort-suchen.de",[7,8,9,10,11,12]],["word-grabber.com",[7,8,9,10,11,12]],["palabr.as",[7,8,9,10,11,12]],["motscroises.fr",[7,8,9,10,11,12]],["cruciverba.it",[7,8,9,10,11,12]],["dramabeans.com",[7,8,9,10,11,12]],["mynet.com",[7,8,9,10,11,12]],["sportsseoul.com",[7,8,9,10,11,12]],["smsonline.cloud",[7,8,9,10,11,12]],["meeco.kr",[7,8,9,10,11,12]],["heureka.cz",[7,8,9,10,11,12]],["slobodnadalmacija.hr",[7,8,9,10,11,12]],["ap7am.com",[7,8,9,10,11,12]],["autoby.jp",[7,8,9,10,11,12]],["bg-mania.jp",[7,8,9,10,11,12]],["cinema.com.my",[7,8,9,10,11,12]],["crosswordsolver.com",[7,8,9,10,11,12]],["daily.co.jp",[7,8,9,10,11,12]],["demotywatory.pl",[7,8,9,10,11,12]],["dnevno.hr",[7,8,9,10,11,12]],["dolldivine.com",[7,8,9,10,11,12]],["economictimes.com",[7,8,9,10,11,12]],["giornalone.it",[7,8,9,10,11,12]],["gloria.hr",[7,8,9,10,11,12]],["iplocation.net",[7,8,9,10,11,12]],["j-town.net",[7,8,9,10,11,12]],["joemonster.org",[7,8,9,10,11,12]],["jutarnji.hr",[7,8,9,10,11,12]],["lacuarta.com",[7,8,9,10,11,12]],["laleggepertutti.it",[7,8,9,10,11,12]],["lovelive-petitsoku.com",[7,8,9,10,11,12]],["mamastar.jp",[7,8,9,10,11,12]],["manta.com",[7,8,9,10,11,12]],["mediaindonesia.com",[7,8,9,10,11,12]],["mirrored.to",[7,8,9,10,11,12]],["missyusa.com",[7,8,9,10,11,12]],["mistrzowie.org",[7,8,9,10,11,12]],["mlbpark.donga.com",[7,8,9,10,11,12]],["netzwelt.de",[7,8,9,10,11,12]],["oeffnungszeitenbuch.de",[7,8,9,10,11,12]],["ondemandkorea.com",[7,8,9,10,11,12]],["oradesibiu.ro",[7,8,9,10,11,12]],["oraridiapertura24.it",[7,8,9,10,11,12]],["persoenlich.com",[7,8,9,10,11,12]],["petitfute.com",[7,8,9,10,11,12]],["powerpyx.com",[7,8,9,10,11,12]],["rabitsokuhou.2chblog.jp",[7,8,9,10,11,12]],["rostercon.com",[7,8,9,10,11,12]],["slashdot.org",[7,8,9,10,11,12]],["sourceforge.net",[7,8,9,10,11,12]],["suzusoku.blog.jp",[7,8,9,10,11,12]],["talkwithstranger.com",[7,8,9,10,11,12]],["the-crossword-solver.com",[7,8,9,10,11,12]],["tportal.hr",[7,8,9,10,11,12]],["webdesignledger.com",[7,8,9,10,11,12]],["wouldurather.io",[7,8,9,10,11,12]],["yutura.net",[7,8,9,10,11,12]],["zagreb.info",[7,8,9,10,11,12]],["golf-live.at",[7,8,9,10,11,12]],["motherlyvisions.com",[7,8,9,10,11,12]],["w.grapps.me",[7,8,9,10,11,12]],["gazetaprawna.pl",[7,8,9,10,11,12]],["pressian.com",[7,8,9,10,11,12]],["kreuzwortraetsel.de",[7,8,9,10,11,12]],["verkaufsoffener-sonntag.com",[7,8,9,10,11,12]],["raetsel-hilfe.de",[7,8,9,10,11,12]],["horairesdouverture24.fr",[7,8,9,10,11,12]],["nyitvatartas24.hu",[7,8,9,10,11,12]],["convertcase.net",[7,8,9,10,11,12]],["mindbodygreen.com",13],["1und1.de",14],["elevenlabs.io",15],["tv5mondeplus.com",16],["visible.com",17],["fedex.com",18]]);

const entitiesMap = new Map([["woxikon",[7,8,9,10,11,12]]]);

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
    } catch(ex) {
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
