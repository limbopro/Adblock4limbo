/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
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
const uBOL_removeAttr = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["style","#episode"],["data-money","div[data-money]"],["data-href","span[data-href^=\"https://ensonhaber.me/\"]"],["placeholder","input[id=\"search-textbox\"]"]];

const hostnamesMap = new Map([["asyadiziizle.com",0],["dizipal70.cloud",1],["dizipal71.cloud",1],["dizipal72.cloud",1],["dizipal73.cloud",1],["dizipal74.cloud",1],["dizipal75.cloud",1],["dizipal76.cloud",1],["dizipal77.cloud",1],["dizipal78.cloud",1],["dizipal79.cloud",1],["dizipal80.cloud",1],["dizipal81.cloud",1],["dizipal82.cloud",1],["dizipal83.cloud",1],["dizipal84.cloud",1],["dizipal85.cloud",1],["dizipal86.cloud",1],["dizipal87.cloud",1],["dizipal88.cloud",1],["dizipal89.cloud",1],["dizipal90.cloud",1],["dizipal91.cloud",1],["dizipal92.cloud",1],["dizipal93.cloud",1],["dizipal94.cloud",1],["dizipal95.cloud",1],["dizipal96.cloud",1],["dizipal97.cloud",1],["dizipal98.cloud",1],["dizipal99.cloud",1],["dizipal100.cloud",1],["dizipal101.cloud",1],["dizipal102.cloud",1],["dizipal103.cloud",1],["dizipal104.cloud",1],["dizipal105.cloud",1],["dizipal106.cloud",1],["dizipal107.cloud",1],["dizipal108.cloud",1],["dizipal109.cloud",1],["dizipal110.cloud",1],["dizipal111.cloud",1],["dizipal112.cloud",1],["dizipal113.cloud",1],["dizipal114.cloud",1],["dizipal115.cloud",1],["dizipal116.cloud",1],["dizipal117.cloud",1],["dizipal118.cloud",1],["dizipal119.cloud",1],["dizipal120.cloud",1],["dizipal121.cloud",1],["dizipal122.cloud",1],["dizipal123.cloud",1],["dizipal124.cloud",1],["dizipal125.cloud",1],["dizipal126.cloud",1],["dizipal127.cloud",1],["dizipal128.cloud",1],["dizipal129.cloud",1],["dizipal130.cloud",1],["dizipal131.cloud",1],["dizipal132.cloud",1],["dizipal133.cloud",1],["dizipal134.cloud",1],["dizipal135.cloud",1],["dizipal136.cloud",1],["dizipal137.cloud",1],["dizipal138.cloud",1],["dizipal139.cloud",1],["dizipal140.cloud",1],["dizipal141.cloud",1],["dizipal142.cloud",1],["dizipal143.cloud",1],["dizipal144.cloud",1],["dizipal145.cloud",1],["dizipal146.cloud",1],["dizipal147.cloud",1],["dizipal148.cloud",1],["dizipal149.cloud",1],["dizipal150.cloud",1],["dizipal151.cloud",1],["dizipal152.cloud",1],["dizipal153.cloud",1],["dizipal154.cloud",1],["dizipal155.cloud",1],["dizipal156.cloud",1],["dizipal157.cloud",1],["dizipal158.cloud",1],["dizipal159.cloud",1],["dizipal160.cloud",1],["dizipal161.cloud",1],["dizipal162.cloud",1],["dizipal163.cloud",1],["dizipal164.cloud",1],["dizipal165.cloud",1],["dizipal166.cloud",1],["dizipal167.cloud",1],["dizipal168.cloud",1],["dizipal169.cloud",1],["dizipal170.cloud",1],["dizipal171.cloud",1],["dizipal172.cloud",1],["dizipal173.cloud",1],["dizipal174.cloud",1],["dizipal175.cloud",1],["dizipal176.cloud",1],["dizipal177.cloud",1],["dizipal178.cloud",1],["dizipal179.cloud",1],["dizipal180.cloud",1],["dizipal181.cloud",1],["dizipal182.cloud",1],["dizipal183.cloud",1],["dizipal184.cloud",1],["dizipal185.cloud",1],["dizipal186.cloud",1],["dizipal187.cloud",1],["dizipal188.cloud",1],["dizipal189.cloud",1],["dizipal190.cloud",1],["dizipal191.cloud",1],["dizipal192.cloud",1],["dizipal193.cloud",1],["dizipal194.cloud",1],["dizipal195.cloud",1],["dizipal196.cloud",1],["dizipal197.cloud",1],["dizipal198.cloud",1],["dizipal199.cloud",1],["dizipal200.cloud",1],["hdsinemax.com",1],["siyahfilmizle.pro",1],["elzemfilm.org",1],["ensonhaber.com",2],["eksisozluk1923.com",3]]);

const entitiesMap = new Map([["sinepal",1],["hdfilmcehennemi2",1],["hdfilmcehennemi",1]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function removeAttr(
    token = '',
    selector = '',
    behavior = ''
) {
    if ( typeof token !== 'string' ) { return; }
    if ( token === '' ) { return; }
    const tokens = token.split(/\s*\|\s*/);
    if ( selector === '' ) {
        selector = `[${tokens.join('],[')}]`;
    }
    let timer;
    const rmattr = ( ) => {
        timer = undefined;
        try {
            const nodes = document.querySelectorAll(selector);
            for ( const node of nodes ) {
                for ( const attr of tokens ) {
                    node.removeAttribute(attr);
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
        timer = self.requestIdleCallback(rmattr, { timeout: 17 });
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
        'Math_random': Math.random,
        'Object_defineProperty': Object.defineProperty.bind(Object),
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
                    pattern,
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            return {
                pattern,
                re: new this.RegExp(pattern.replace(
                    /[.*+?^${}()|[\]\\]/g, '\\$&'),
                    options.flags
                ),
                expect,
            };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            return this.RegExp_test.call(details.re, haystack) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
            return Object.fromEntries(entries);
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
