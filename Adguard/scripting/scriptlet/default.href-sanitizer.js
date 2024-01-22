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

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_hrefSanitizer = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["a[href^=\"https://azrom.net/\"][href*=\"?url=\"]","?url"],["a[href^=\"/p/download.html?ntlruby=\"]","?ntlruby"],["a[href^=\"https://www.adtival.network/\"][href*=\"&url=\"]","?url"],["a[href^=\"//duckduckgo.com/l/?uddg=\"]","?uddg"],["a[href^=\"https://androidauth.wpengine.com/wp-json/api/advanced_redirect?ref=\"]","?ref"],["a[href^=\"https://app.adjust.com/\"][href*=\"?redirect=\"]","?redirect"],["a[href^=\"https://www.dpbolvw.net/click-\"][href*=\"?url=\"]","?url"],["a[href^=\"https://greenmangaming.sjv.io/c/\"][href*=\"?u=\"]","?u"],["a[href^=\"https://go.skimresources.com/\"][href*=\"&url=http\"]","?url"],["a[href^=\"https://click.linksynergy.com/deeplink?id=\"][href*=\"&murl=\"]","?murl"],["a[href*=\"?\"][href*=\"&url=http]","?url"],["a[href*=\"?\"][href*=\"&u=http\"]","?u"],["a[href^=\"/vp/player/to/?u=http\"], a[href^=\"/vp/download/goto/?u=http\"]","?u"],["a[href^=\"https://drivevideo.xyz/link?link=http\"]","?link"],["a[href^=\"http://go.redirectingat.com\"][href*=\"&url=\"]","?url"],["a[href^=\"https://app.adjust.com/\"][href*=\"?fallback=http\"]","?fallback"],["a[href^=\"https://go.redirectingat.com?url=http\"]","?url"],["a[href^=\"/check.php?\"][href*=\"&url=http\"]","?url"],["a[href^=\"https://click.linksynergy.com/deeplink?id=\"][href*=\"&murl=http\"]","?murl"],["a[href^=\"https://disq.us/url?url=\"][title^=\"http\"]","[title]"],["a[href^=\"https://disq.us/?url=http\"]","?url"],["a[href^=\"https://steamcommunity.com/linkfilter/?url=http\"]","?url"],["a[href^=\"https://steamcommunity.com/linkfilter/?u=http\"]","?u"],["a[href^=\"https://colab.research.google.com/corgiredirector?site=http\"]","?site"],["a[href^=\"https://shop-links.co/link/?\"][href*=\"&url=http\"]","?url"],["a[href^=\"http://www.jdoqocy.com/click-\"][href*=\"?URL=http\"]","?URL"],["a[href^=\"https://track.adtraction.com/t/t?\"][href*=\"&url=http\"]","?url"],["a[href^=\"https://metager.org/partner/r?link=http\"]","?link"],["a[href*=\"https://www.chollometro.com/visit/\"][title^=\"https://\"]","[title]"],["a[href*=\"https://www.dealabs.com/visit/\"][title^=\"https://\"]","[title]"],["a[href*=\"https://www.hotukdeals.com/visit/\"][title^=\"https://\"]","[title]"],["a[href*=\"https://www.mydealz.de/visit/\"][title^=\"https://\"]","[title]"],["a[href*=\"https://nl.pepper.com/visit/\"][title^=\"https://\"]","[title]"],["a[href*=\"https://www.pepper.it/visit/\"][title^=\"https://\"]","[title]"],["a[href*=\"https://www.pepper.pl/visit/\"][title^=\"https://\"]","[title]"],["a[href*=\"https://www.pepper.ru/visit/\"][title^=\"https://\"]","[title]"],["a[href*=\"https://www.preisjaeger.at/visit/\"][title^=\"https://\"]","[title]"],["a[href*=\"https://www.promodescuentos.com/visit/\"][title^=\"https://\"]","[title]"],["a[href*=\"https://www.pelando.com.br/api/redirect?url=\"]","?url"]];

const hostnamesMap = new Map([["azrom.net",0],["taisachonthi.com",1],["kazefuri.net",2],["lite.duckduckgo.com",3],["androidauthority.com",4],["mozilla.org",5],["pcgamingwiki.com",[6,7]],["starstyle.com",8],["insidehook.com",[9,10,11]],["nowinstock.net",[9,11,14]],["fap18.net",12],["xxxmom.net",12],["fuck55.net",12],["gofucker.com",12],["sexu.tv",12],["vid123.net",12],["babe8.net",12],["beeg.porn",12],["losporn.org",13],["streamporn.li",13],["pandamovies.org",13],["bananamovies.org",13],["xopenload.net",13],["adultdvdparadise.com",13],["speedporn.net",13],["mangoporn.net",13],["pandamovie.info",13],["mangoporn.co",13],["mangoparody.com",13],["xxxscenes.net",13],["pornkino.cc",13],["watchxxxfree.pw",13],["pandamovie.in",13],["speedporn.pw",13],["watchfreexxx.net",13],["youwatchporn.com",13],["watchpornfree.info",13],["pandamovies.me",13],["xtapes.me",13],["netflixporno.net",13],["pornwish.org",13],["freeomovie.info",13],["fullxxxmovies.me",13],["watchpornx.com",13],["xxxparodyhd.net",13],["xxxstream.me",13],["pornwatch.ws",13],["xopenload.pw",13],["onstreams.net",13],["playpornfree.xyz",13],["pandamovies.pw",13],["streamporn.pw",13],["xopenload.me",13],["paypal.com",15],["elotrolado.net",16],["tube188.com",17],["tomshardware.com",18],["disqus.com",[19,20]],["steamcommunity.com",[21,22]],["colab.research.google.com",23],["xda-developers.com",24],["isthereanydeal.com",[25,26]],["metager.org",27],["chollometro.com",28],["dealabs.com",29],["hotukdeals.com",30],["mydealz.de",31],["nl.pepper.com",32],["pepper.it",33],["pepper.pl",34],["pepper.ru",35],["preisjaeger.at",36],["promodescuentos.com",37],["pelando.com.br",38]]);

const entitiesMap = new Map([]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function hrefSanitizer(
    selector = '',
    source = ''
) {
    if ( typeof selector !== 'string' ) { return; }
    if ( selector === '' ) { return; }
    if ( source === '' ) { source = 'text'; }
    const sanitizeCopycats = (href, text) => {
        let elems = [];
        try {
            elems = document.querySelectorAll(`a[href="${href}"`);
        }
        catch(ex) {
        }
        for ( const elem of elems ) {
            elem.setAttribute('href', text);
        }
    };
    const validateURL = text => {
        if ( text === '' ) { return ''; }
        if ( /[^\x21-\x7e]/.test(text) ) { return ''; }
        try {
            const url = new URL(text, document.location);
            return url.href;
        } catch(ex) {
        }
        return '';
    };
    const extractText = (elem, source) => {
        if ( /^\[.*\]$/.test(source) ) {
            return elem.getAttribute(source.slice(1,-1).trim()) || '';
        }
        if ( source.startsWith('?') ) {
            try {
                const url = new URL(elem.href, document.location);
                return url.searchParams.get(source.slice(1)) || '';
            } catch(x) {
            }
            return '';
        }
        if ( source === 'text' ) {
            return elem.textContent
                .replace(/^[^\x21-\x7e]+/, '') // remove leading invalid characters
                .replace(/[^\x21-\x7e]+$/, '') // remove trailing invalid characters
                ;
        }
        return '';
    };
    const sanitize = ( ) => {
        let elems = [];
        try {
            elems = document.querySelectorAll(selector);
        }
        catch(ex) {
            return false;
        }
        for ( const elem of elems ) {
            if ( elem.localName !== 'a' ) { continue; }
            if ( elem.hasAttribute('href') === false ) { continue; }
            const href = elem.getAttribute('href');
            const text = extractText(elem, source);
            const hrefAfter = validateURL(text);
            if ( hrefAfter === '' ) { continue; }
            if ( hrefAfter === href ) { continue; }
            elem.setAttribute('href', hrefAfter);
            sanitizeCopycats(href, hrefAfter);
        }
        return true;
    };
    let observer, timer;
    const onDomChanged = mutations => {
        if ( timer !== undefined ) { return; }
        let shouldSanitize = false;
        for ( const mutation of mutations ) {
            if ( mutation.addedNodes.length === 0 ) { continue; }
            for ( const node of mutation.addedNodes ) {
                if ( node.nodeType !== 1 ) { continue; }
                shouldSanitize = true;
                break;
            }
            if ( shouldSanitize ) { break; }
        }
        if ( shouldSanitize === false ) { return; }
        timer = self.requestAnimationFrame(( ) => {
            timer = undefined;
            sanitize();
        });
    };
    const start = ( ) => {
        if ( sanitize() === false ) { return; }
        observer = new MutationObserver(onDomChanged);
        observer.observe(document.body, {
            subtree: true,
            childList: true,
        });
    };
    runAt(( ) => { start(); }, 'interactive');
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
    try { hrefSanitizer(...argsList[i]); }
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

const targetWorld = 'ISOLATED';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_hrefSanitizer();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_hrefSanitizer = cloneInto([
            [ '(', uBOL_hrefSanitizer.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_hrefSanitizer);
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
    delete page.uBOL_hrefSanitizer;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
