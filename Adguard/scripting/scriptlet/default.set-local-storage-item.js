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

const argsList = [["adDisplayed","$remove$"],["lastRedirect","true"],["PageCount","$remove$"],["a_render","true"],["adf_plays","2"],["email","true"],["adshield-analytics-uuid","$remove$"],["/_fa_dXVpZA==$/","$remove$"],["/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"],["segmentDeviceId","$remove$"],["/optimizely_data|tealium_timing/","$remove$"],["IIElevenLabsDubbingResult","$remove$"],["didomi_token","$remove$"],["fdx_enable_new_detail_page","true"]];

const hostnamesMap = new Map([["hdfilmcehennemi2.cx",0],["exambd.net",1],["jetpunk.com",2],["bravedown.com",3],["adultdeepfakes.com",4],["freewsad.com",5],["loawa.com",[6,7,8,9,10]],["ygosu.com",[6,7,8,9,10]],["sportalkorea.com",[6,7,8,9,10]],["edaily.co.kr",[6,7,8,9,10]],["economist.co.kr",[6,7,8,9,10]],["etoday.co.kr",[6,7,8,9,10]],["isplus.com",[6,7,8,9,10]],["hometownstation.com",[6,7,8,9,10]],["honkailab.com",[6,7,8,9,10]],["thestockmarketwatch.com",[6,7,8,9,10]],["issuya.com",[6,7,8,9,10]],["worldhistory.org",[6,7,8,9,10]],["etnews.com",[6,7,8,9,10]],["iusm.co.kr",[6,7,8,9,10]],["dogdrip.net",[6,7,8,9,10]],["etoland.co.kr",[6,7,8,9,10]],["picrew.me",[6,7,8,9,10]],["text-compare.com",[6,7,8,9,10]],["fntimes.com",[6,7,8,9,10]],["javatpoint.com",[6,7,8,9,10]],["lamire.jp",[6,7,8,9,10]],["bamgosu.site",[6,7,8,9,10]],["allthekingz.com",[6,7,8,9,10]],["automobile-catalog.com",[6,7,8,9,10]],["maketecheasier.com",[6,7,8,9,10]],["thesaurus.net",[6,7,8,9,10]],["wfmz.com",[6,7,8,9,10]],["thestar.co.uk",[6,7,8,9,10]],["yorkshirepost.co.uk",[6,7,8,9,10]],["mydaily.co.kr",[6,7,8,9,10]],["raenonx.cc",[6,7,8,9,10]],["ndtvprofit.com",[6,7,8,9,10]],["badmouth1.com",[6,7,8,9,10]],["logicieleducatif.fr",[6,7,8,9,10]],["taxguru.in",[6,7,8,9,10]],["islamicfinder.org",[6,7,8,9,10]],["aikatu.jp",[6,7,8,9,10]],["secure-signup.net",[6,7,8,9,10]],["globalrph.com",[6,7,8,9,10]],["sportsrec.com",[6,7,8,9,10]],["reportera.co.kr",[6,7,8,9,10]],["flatpanelshd.com",[6,7,8,9,10]],["videogamemods.com",[6,7,8,9,10]],["adintrend.tv",[6,7,8,9,10]],["ark-unity.com",[6,7,8,9,10]],["cool-style.com.tw",[6,7,8,9,10]],["dziennik.pl",[6,7,8,9,10]],["eurointegration.com.ua",[6,7,8,9,10]],["winfuture.de",[6,7,8,9,10]],["freemcserver.net",[6,7,8,9,10]],["pravda.com.ua",[6,7,8,9,10]],["infinityfree.com",[6,7,8,9,10]],["wort-suchen.de",[6,7,8,9,10]],["word-grabber.com",[6,7,8,9,10]],["palabr.as",[6,7,8,9,10]],["motscroises.fr",[6,7,8,9,10]],["cruciverba.it",[6,7,8,9,10]],["dramabeans.com",[6,7,8,9,10]],["mynet.com",[6,7,8,9,10]],["sportsseoul.com",[6,7,8,9,10]],["smsonline.cloud",[6,7,8,9,10]],["meeco.kr",[6,7,8,9,10]],["heureka.cz",[6,7,8,9,10]],["slobodnadalmacija.hr",[6,7,8,9,10]],["cinema.com.my",[6,7,8,9,10]],["crosswordsolver.com",[6,7,8,9,10]],["demotywatory.pl",[6,7,8,9,10]],["dnevno.hr",[6,7,8,9,10]],["dolldivine.com",[6,7,8,9,10]],["economictimes.com",[6,7,8,9,10]],["gloria.hr",[6,7,8,9,10]],["joemonster.org",[6,7,8,9,10]],["jutarnji.hr",[6,7,8,9,10]],["lacuarta.com",[6,7,8,9,10]],["laleggepertutti.it",[6,7,8,9,10]],["lovelive-petitsoku.com",[6,7,8,9,10]],["manta.com",[6,7,8,9,10]],["mirrored.to",[6,7,8,9,10]],["missyusa.com",[6,7,8,9,10]],["mistrzowie.org",[6,7,8,9,10]],["mlbpark.donga.com",[6,7,8,9,10]],["netzwelt.de",[6,7,8,9,10]],["oeffnungszeitenbuch.de",[6,7,8,9,10]],["ondemandkorea.com",[6,7,8,9,10]],["oradesibiu.ro",[6,7,8,9,10]],["oraridiapertura24.it",[6,7,8,9,10]],["persoenlich.com",[6,7,8,9,10]],["petitfute.com",[6,7,8,9,10]],["powerpyx.com",[6,7,8,9,10]],["rabitsokuhou.2chblog.jp",[6,7,8,9,10]],["rostercon.com",[6,7,8,9,10]],["slashdot.org",[6,7,8,9,10]],["sourceforge.net",[6,7,8,9,10]],["suzusoku.blog.jp",[6,7,8,9,10]],["talkwithstranger.com",[6,7,8,9,10]],["the-crossword-solver.com",[6,7,8,9,10]],["tportal.hr",[6,7,8,9,10]],["webdesignledger.com",[6,7,8,9,10]],["wouldurather.io",[6,7,8,9,10]],["yutura.net",[6,7,8,9,10]],["zagreb.info",[6,7,8,9,10]],["golf-live.at",[6,7,8,9,10]],["motherlyvisions.com",[6,7,8,9,10]],["w.grapps.me",[6,7,8,9,10]],["gazetaprawna.pl",[6,7,8,9,10]],["pressian.com",[6,7,8,9,10]],["kreuzwortraetsel.de",[6,7,8,9,10]],["verkaufsoffener-sonntag.com",[6,7,8,9,10]],["raetsel-hilfe.de",[6,7,8,9,10]],["horairesdouverture24.fr",[6,7,8,9,10]],["nyitvatartas24.hu",[6,7,8,9,10]],["convertcase.net",[6,7,8,9,10]],["mindbodygreen.com",11],["1und1.de",12],["elevenlabs.io",13],["tv5mondeplus.com",14],["fedex.com",15]]);

const entitiesMap = new Map([["woxikon",[6,7,8,9,10]]]);

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
