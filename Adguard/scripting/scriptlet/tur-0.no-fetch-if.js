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

// ruleset: tur-0

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_noFetchIf = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["pagead2.googlesyndication.com"],["https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"],["/assets/js/prebid"],["www3.doubleclick.net"],["doubleclick.net"]];

const hostnamesMap = new Map([["dentalilan.com",0],["bafrahaber.com",0],["yazilimfuryasi.com",0],["ogznet.com",0],["discordsunucu.com",0],["boxofficeturkiye.com",0],["nedir.org",0],["puhutv.com",[0,4]],["dizipal1.cloud",0],["dizipal2.cloud",0],["dizipal3.cloud",0],["dizipal4.cloud",0],["dizipal5.cloud",0],["dizipal6.cloud",0],["dizipal7.cloud",0],["dizipal8.cloud",0],["dizipal9.cloud",0],["dizipal10.cloud",0],["dizipal11.cloud",0],["dizipal12.cloud",0],["dizipal13.cloud",0],["dizipal14.cloud",0],["dizipal15.cloud",0],["dizipal16.cloud",0],["dizipal17.cloud",0],["dizipal18.cloud",0],["dizipal19.cloud",0],["dizipal20.cloud",0],["dizipal21.cloud",0],["dizipal22.cloud",0],["dizipal23.cloud",0],["dizipal24.cloud",0],["dizipal25.cloud",0],["dizipal26.cloud",0],["dizipal27.cloud",0],["dizipal28.cloud",0],["dizipal29.cloud",0],["dizipal30.cloud",0],["dizipal31.cloud",0],["dizipal32.cloud",0],["dizipal33.cloud",0],["dizipal34.cloud",0],["dizipal35.cloud",0],["dizipal36.cloud",0],["dizipal37.cloud",0],["dizipal38.cloud",0],["dizipal39.cloud",0],["dizipal40.cloud",0],["dizipal41.cloud",0],["dizipal42.cloud",0],["dizipal43.cloud",0],["dizipal44.cloud",0],["dizipal45.cloud",0],["dizipal46.cloud",0],["dizipal47.cloud",0],["dizipal48.cloud",0],["dizipal49.cloud",0],["dizipal50.cloud",0],["dizipal51.cloud",0],["dizipal52.cloud",0],["dizipal53.cloud",0],["dizipal54.cloud",0],["dizipal55.cloud",0],["dizipal56.cloud",0],["dizipal57.cloud",0],["dizipal58.cloud",0],["dizipal59.cloud",0],["dizipal60.cloud",0],["dizipal61.cloud",0],["dizipal62.cloud",0],["dizipal63.cloud",0],["dizipal64.cloud",0],["dizipal65.cloud",0],["dizipal66.cloud",0],["dizipal67.cloud",0],["dizipal68.cloud",0],["dizipal69.cloud",0],["dizipal70.cloud",0],["dizipal71.cloud",0],["dizipal72.cloud",0],["dizipal73.cloud",0],["dizipal74.cloud",0],["dizipal75.cloud",0],["dizipal76.cloud",0],["dizipal77.cloud",0],["dizipal78.cloud",0],["dizipal79.cloud",0],["dizipal80.cloud",0],["dizipal81.cloud",0],["dizipal82.cloud",0],["dizipal83.cloud",0],["dizipal84.cloud",0],["dizipal85.cloud",0],["dizipal86.cloud",0],["dizipal87.cloud",0],["dizipal88.cloud",0],["dizipal89.cloud",0],["dizipal90.cloud",0],["dizipal91.cloud",0],["dizipal92.cloud",0],["dizipal93.cloud",0],["dizipal94.cloud",0],["dizipal95.cloud",0],["dizipal96.cloud",0],["dizipal97.cloud",0],["dizipal98.cloud",0],["dizipal99.cloud",0],["dizipal100.cloud",0],["dizipal101.cloud",0],["dizipal102.cloud",0],["dizipal103.cloud",0],["dizipal104.cloud",0],["dizipal105.cloud",0],["dizipal106.cloud",0],["dizipal107.cloud",0],["dizipal108.cloud",0],["dizipal109.cloud",0],["dizipal110.cloud",0],["dizipal111.cloud",0],["dizipal112.cloud",0],["dizipal113.cloud",0],["dizipal114.cloud",0],["dizipal115.cloud",0],["dizipal116.cloud",0],["dizipal117.cloud",0],["dizipal118.cloud",0],["dizipal119.cloud",0],["dizipal120.cloud",0],["dizipal121.cloud",0],["dizipal122.cloud",0],["dizipal123.cloud",0],["dizipal124.cloud",0],["dizipal125.cloud",0],["dizipal126.cloud",0],["dizipal127.cloud",0],["dizipal128.cloud",0],["dizipal129.cloud",0],["dizipal130.cloud",0],["dizipal131.cloud",0],["dizipal132.cloud",0],["dizipal133.cloud",0],["dizipal134.cloud",0],["dizipal135.cloud",0],["dizipal136.cloud",0],["dizipal137.cloud",0],["dizipal138.cloud",0],["dizipal139.cloud",0],["dizipal140.cloud",0],["dizipal141.cloud",0],["dizipal142.cloud",0],["dizipal143.cloud",0],["dizipal144.cloud",0],["dizipal145.cloud",0],["dizipal146.cloud",0],["dizipal147.cloud",0],["dizipal148.cloud",0],["dizipal149.cloud",0],["dizipal150.cloud",0],["dizipal151.cloud",0],["dizipal152.cloud",0],["dizipal153.cloud",0],["dizipal154.cloud",0],["dizipal155.cloud",0],["dizipal156.cloud",0],["dizipal157.cloud",0],["dizipal158.cloud",0],["dizipal159.cloud",0],["dizipal160.cloud",0],["dizipal161.cloud",0],["dizipal162.cloud",0],["dizipal163.cloud",0],["dizipal164.cloud",0],["dizipal165.cloud",0],["dizipal166.cloud",0],["dizipal167.cloud",0],["dizipal168.cloud",0],["dizipal169.cloud",0],["dizipal170.cloud",0],["dizipal171.cloud",0],["dizipal172.cloud",0],["dizipal173.cloud",0],["dizipal174.cloud",0],["dizipal175.cloud",0],["dizipal176.cloud",0],["dizipal177.cloud",0],["dizipal178.cloud",0],["dizipal179.cloud",0],["dizipal180.cloud",0],["dizipal181.cloud",0],["dizipal182.cloud",0],["dizipal183.cloud",0],["dizipal184.cloud",0],["dizipal185.cloud",0],["dizipal186.cloud",0],["dizipal187.cloud",0],["dizipal188.cloud",0],["dizipal189.cloud",0],["dizipal190.cloud",0],["dizipal191.cloud",0],["dizipal192.cloud",0],["dizipal193.cloud",0],["dizipal194.cloud",0],["dizipal195.cloud",0],["dizipal196.cloud",0],["dizipal197.cloud",0],["dizipal198.cloud",0],["dizipal199.cloud",0],["dizipal200.cloud",0],["dizipal670.com",0],["dizipal671.com",0],["dizipal672.com",0],["dizipal673.com",0],["dizipal674.com",0],["dizipal675.com",0],["dizipal676.com",0],["dizipal677.com",0],["dizipal678.com",0],["dizipal679.com",0],["dizipal680.com",0],["dizipal681.com",0],["dizipal682.com",0],["dizipal683.com",0],["dizipal684.com",0],["dizipal685.com",0],["dizipal700.com",0],["dizipal701.com",0],["dizipal702.com",0],["dizipal703.com",0],["dizipal704.com",0],["dizipal705.com",0],["dizipal706.com",0],["dizipal707.com",0],["dizipal708.com",0],["dizipal709.com",0],["dizipal710.com",0],["dizipal711.com",0],["dizipal712.com",0],["dizipal713.com",0],["dizipal714.com",0],["dizipal715.com",0],["dizipal716.com",0],["dizipal717.com",0],["dizipal718.com",0],["dizipal719.com",0],["dizipal720.com",0],["dizipal721.com",0],["dizipal722.com",0],["dizipal723.com",0],["dizipal724.com",0],["dizipal725.com",0],["dizipal726.com",0],["dizipal727.com",0],["dizipal728.com",0],["dizipal729.com",0],["dizipal730.com",0],["dizipal731.com",0],["dizipal732.com",0],["dizipal733.com",0],["dizipal734.com",0],["dizipal735.com",0],["dizipal736.com",0],["dizipal737.com",0],["dizipal738.com",0],["dizipal739.com",0],["dizipal740.com",0],["dizipal741.com",0],["dizipal742.com",0],["dizipal743.com",0],["dizipal744.com",0],["dizipal745.com",0],["dizipal746.com",0],["dizipal747.com",0],["dizipal748.com",0],["dizipal749.com",0],["dizipal750.com",0],["dizipal751.com",0],["dizipal752.com",0],["dizipal753.com",0],["dizipal754.com",0],["dizipal755.com",0],["dizipal756.com",0],["dizipal757.com",0],["dizipal758.com",0],["dizipal759.com",0],["dizipal760.com",0],["dizipal761.com",0],["dizipal762.com",0],["dizipal763.com",0],["dizipal764.com",0],["dizipal765.com",0],["dizipal766.com",0],["dizipal767.com",0],["dizipal768.com",0],["dizipal769.com",0],["raindropteamfan.com",1],["sozcu.com.tr",2],["bikifi.com",3]]);

const entitiesMap = new Map([]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function noFetchIf(
    propsToMatch = '',
    responseBody = ''
) {
    if ( typeof propsToMatch !== 'string' ) { return; }
    const safe = safeSelf();
    const needles = [];
    for ( const condition of propsToMatch.split(/\s+/) ) {
        if ( condition === '' ) { continue; }
        const pos = condition.indexOf(':');
        let key, value;
        if ( pos !== -1 ) {
            key = condition.slice(0, pos);
            value = condition.slice(pos + 1);
        } else {
            key = 'url';
            value = condition;
        }
        needles.push({ key, re: safe.patternToRegex(value) });
    }
    const log = needles.length === 0 ? console.log.bind(console) : undefined;
    self.fetch = new Proxy(self.fetch, {
        apply: function(target, thisArg, args) {
            const details = args[0] instanceof self.Request
                ? args[0]
                : Object.assign({ url: args[0] }, args[1]);
            let proceed = true;
            try {
                const props = new Map();
                for ( const prop in details ) {
                    let v = details[prop];
                    if ( typeof v !== 'string' ) {
                        try { v = JSON.stringify(v); }
                        catch(ex) { }
                    }
                    if ( typeof v !== 'string' ) { continue; }
                    props.set(prop, v);
                }
                if ( log !== undefined ) {
                    const out = Array.from(props)
                                     .map(a => `${a[0]}:${a[1]}`)
                                     .join(' ');
                    log(`uBO: fetch(${out})`);
                }
                proceed = needles.length === 0;
                for ( const { key, re } of needles ) {
                    if (
                        props.has(key) === false ||
                        re.test(props.get(key)) === false
                    ) {
                        proceed = true;
                        break;
                    }
                }
            } catch(ex) {
            }
            if ( proceed ) {
                return Reflect.apply(target, thisArg, args);
            }
            let responseType = '';
            if ( details.mode === undefined || details.mode === 'cors' ) {
                try {
                    const desURL = new URL(details.url);
                    responseType = desURL.origin !== document.location.origin
                        ? 'cors'
                        : 'basic';
                } catch(_) {
                }
            }
            return generateContentFn(responseBody).then(text => {
                const response = new Response(text, {
                    statusText: 'OK',
                    headers: {
                        'Content-Length': text.length,
                    }
                });
                safe.Object_defineProperty(response, 'url', {
                    value: details.url
                });
                if ( responseType !== '' ) {
                    safe.Object_defineProperty(response, 'type', {
                        value: responseType
                    });
                }
                return response;
            });
        }
    });
}

function generateContentFn(directive) {
    const safe = safeSelf();
    const randomize = len => {
        const chunks = [];
        let textSize = 0;
        do {
            const s = safe.Math_random().toString(36).slice(2);
            chunks.push(s);
            textSize += s.length;
        }
        while ( textSize < len );
        return chunks.join(' ').slice(0, len);
    };
    if ( directive === 'true' ) {
        return Promise.resolve(randomize(10));
    }
    if ( directive === 'emptyObj' ) {
        return Promise.resolve('{}');
    }
    if ( directive === 'emptyArr' ) {
        return Promise.resolve('[]');
    }
    if ( directive === 'emptyStr' ) {
        return Promise.resolve('');
    }
    if ( directive.startsWith('length:') ) {
        const match = /^length:(\d+)(?:-(\d+))?$/.exec(directive);
        if ( match ) {
            const min = parseInt(match[1], 10);
            const extent = safe.Math_max(parseInt(match[2], 10) || 0, min) - min;
            const len = safe.Math_min(min + extent * safe.Math_random(), 500000);
            return Promise.resolve(randomize(len | 0));
        }
    }
    if ( directive.startsWith('war:') && scriptletGlobals.has('warOrigin') ) {
        return new Promise(resolve => {
            const warOrigin = scriptletGlobals.get('warOrigin');
            const warName = directive.slice(4);
            const fullpath = [ warOrigin, '/', warName ];
            const warSecret = scriptletGlobals.get('warSecret');
            if ( warSecret !== undefined ) {
                fullpath.push('?secret=', warSecret);
            }
            const warXHR = new safe.XMLHttpRequest();
            warXHR.responseType = 'text';
            warXHR.onloadend = ev => {
                resolve(ev.target.responseText || '');
            };
            warXHR.open('GET', fullpath.join(''));
            warXHR.send();
        });
    }
    return Promise.resolve('');
}

function safeSelf() {
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
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
        uboLog(...args) {
            if ( scriptletGlobals.has('canDebug') === false ) { return; }
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
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
    try { noFetchIf(...argsList[i]); }
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
    return uBOL_noFetchIf();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_noFetchIf = cloneInto([
            [ '(', uBOL_noFetchIf.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_noFetchIf);
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
    delete page.uBOL_noFetchIf;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
