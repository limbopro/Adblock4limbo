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

// ruleset: tur-0

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
const argsList = [["style","#episode"],["data-money","div[data-money]"],["data-href","span[data-href^=\"https://ensonhaber.me/\"]"],["placeholder","input[id=\"search-textbox\"]"],["data-front","#tv-spoox2"],["href","a[href^=\"https://www.haber7.com/advertorial/\"].headline-slider-item"],["href",".slick-dots > li > a[href^=\"https://www.haber7.com/advertorial/\"]"],["loading","iframe[loading=\"lazy\"]"],["data-time",".video-skip[data-time]"]];
const hostnamesMap = new Map([["asyadiziizle.com",0],["hdsinemax.com",1],["siyahfilmizle.*",1],["elzemfilm.org",1],["sinepal.*",1],["dizipal1.cloud",1],["dizipal2.cloud",1],["dizipal3.cloud",1],["dizipal4.cloud",1],["dizipal5.cloud",1],["dizipal6.cloud",1],["dizipal7.cloud",1],["dizipal8.cloud",1],["dizipal9.cloud",1],["dizipal10.cloud",1],["dizipal11.cloud",1],["dizipal12.cloud",1],["dizipal13.cloud",1],["dizipal14.cloud",1],["dizipal15.cloud",1],["dizipal16.cloud",1],["dizipal17.cloud",1],["dizipal18.cloud",1],["dizipal19.cloud",1],["dizipal20.cloud",1],["dizipal21.cloud",1],["dizipal22.cloud",1],["dizipal23.cloud",1],["dizipal24.cloud",1],["dizipal25.cloud",1],["dizipal26.cloud",1],["dizipal27.cloud",1],["dizipal28.cloud",1],["dizipal29.cloud",1],["dizipal30.cloud",1],["dizipal31.cloud",1],["dizipal32.cloud",1],["dizipal33.cloud",1],["dizipal34.cloud",1],["dizipal35.cloud",1],["dizipal36.cloud",1],["dizipal37.cloud",1],["dizipal38.cloud",1],["dizipal39.cloud",1],["dizipal40.cloud",1],["dizipal41.cloud",1],["dizipal42.cloud",1],["dizipal43.cloud",1],["dizipal44.cloud",1],["dizipal45.cloud",1],["dizipal46.cloud",1],["dizipal47.cloud",1],["dizipal48.cloud",1],["dizipal49.cloud",1],["dizipal50.cloud",1],["dizipal51.cloud",1],["dizipal52.cloud",1],["dizipal53.cloud",1],["dizipal54.cloud",1],["dizipal55.cloud",1],["dizipal56.cloud",1],["dizipal57.cloud",1],["dizipal58.cloud",1],["dizipal59.cloud",1],["dizipal60.cloud",1],["dizipal61.cloud",1],["dizipal62.cloud",1],["dizipal63.cloud",1],["dizipal64.cloud",1],["dizipal65.cloud",1],["dizipal66.cloud",1],["dizipal67.cloud",1],["dizipal68.cloud",1],["dizipal69.cloud",1],["dizipal70.cloud",1],["dizipal71.cloud",1],["dizipal72.cloud",1],["dizipal73.cloud",1],["dizipal74.cloud",1],["dizipal75.cloud",1],["dizipal76.cloud",1],["dizipal77.cloud",1],["dizipal78.cloud",1],["dizipal79.cloud",1],["dizipal80.cloud",1],["dizipal81.cloud",1],["dizipal82.cloud",1],["dizipal83.cloud",1],["dizipal84.cloud",1],["dizipal85.cloud",1],["dizipal86.cloud",1],["dizipal87.cloud",1],["dizipal88.cloud",1],["dizipal89.cloud",1],["dizipal90.cloud",1],["dizipal91.cloud",1],["dizipal92.cloud",1],["dizipal93.cloud",1],["dizipal94.cloud",1],["dizipal95.cloud",1],["dizipal96.cloud",1],["dizipal97.cloud",1],["dizipal98.cloud",1],["dizipal99.cloud",1],["dizipal100.cloud",1],["dizipal101.cloud",1],["dizipal102.cloud",1],["dizipal103.cloud",1],["dizipal104.cloud",1],["dizipal105.cloud",1],["dizipal106.cloud",1],["dizipal107.cloud",1],["dizipal108.cloud",1],["dizipal109.cloud",1],["dizipal110.cloud",1],["dizipal111.cloud",1],["dizipal112.cloud",1],["dizipal113.cloud",1],["dizipal114.cloud",1],["dizipal115.cloud",1],["dizipal116.cloud",1],["dizipal117.cloud",1],["dizipal118.cloud",1],["dizipal119.cloud",1],["dizipal120.cloud",1],["dizipal121.cloud",1],["dizipal122.cloud",1],["dizipal123.cloud",1],["dizipal124.cloud",1],["dizipal125.cloud",1],["dizipal126.cloud",1],["dizipal127.cloud",1],["dizipal128.cloud",1],["dizipal129.cloud",1],["dizipal130.cloud",1],["dizipal131.cloud",1],["dizipal132.cloud",1],["dizipal133.cloud",1],["dizipal134.cloud",1],["dizipal135.cloud",1],["dizipal136.cloud",1],["dizipal137.cloud",1],["dizipal138.cloud",1],["dizipal139.cloud",1],["dizipal140.cloud",1],["dizipal141.cloud",1],["dizipal142.cloud",1],["dizipal143.cloud",1],["dizipal144.cloud",1],["dizipal145.cloud",1],["dizipal146.cloud",1],["dizipal147.cloud",1],["dizipal148.cloud",1],["dizipal149.cloud",1],["dizipal150.cloud",1],["dizipal151.cloud",1],["dizipal152.cloud",1],["dizipal153.cloud",1],["dizipal154.cloud",1],["dizipal155.cloud",1],["dizipal156.cloud",1],["dizipal157.cloud",1],["dizipal158.cloud",1],["dizipal159.cloud",1],["dizipal160.cloud",1],["dizipal161.cloud",1],["dizipal162.cloud",1],["dizipal163.cloud",1],["dizipal164.cloud",1],["dizipal165.cloud",1],["dizipal166.cloud",1],["dizipal167.cloud",1],["dizipal168.cloud",1],["dizipal169.cloud",1],["dizipal170.cloud",1],["dizipal171.cloud",1],["dizipal172.cloud",1],["dizipal173.cloud",1],["dizipal174.cloud",1],["dizipal175.cloud",1],["dizipal176.cloud",1],["dizipal177.cloud",1],["dizipal178.cloud",1],["dizipal179.cloud",1],["dizipal180.cloud",1],["dizipal181.cloud",1],["dizipal182.cloud",1],["dizipal183.cloud",1],["dizipal184.cloud",1],["dizipal185.cloud",1],["dizipal186.cloud",1],["dizipal187.cloud",1],["dizipal188.cloud",1],["dizipal189.cloud",1],["dizipal190.cloud",1],["dizipal191.cloud",1],["dizipal192.cloud",1],["dizipal193.cloud",1],["dizipal194.cloud",1],["dizipal195.cloud",1],["dizipal196.cloud",1],["dizipal197.cloud",1],["dizipal198.cloud",1],["dizipal199.cloud",1],["dizipal200.cloud",1],["ensonhaber.com",2],["eksisozluk.com",3],["izlekolik.org",4],["haber7.com",[5,6]],["yabancidizi.*",7],["inattvhd188.xyz",8],["inattvhd189.xyz",8],["inattvhd190.xyz",8],["inattvhd191.xyz",8],["inattvhd192.xyz",8],["inattvhd193.xyz",8],["inattvhd194.xyz",8],["inattvhd195.xyz",8],["inattvhd196.xyz",8],["inattvhd197.xyz",8],["inattvhd198.xyz",8],["inattvhd199.xyz",8],["inattvhd200.xyz",8],["inattvhd201.xyz",8],["inattvhd202.xyz",8],["inattvhd203.xyz",8],["inattvhd204.xyz",8],["inattvhd205.xyz",8],["inattvhd206.xyz",8],["inattvhd207.xyz",8],["inattvhd208.xyz",8],["inattvhd209.xyz",8],["inattvhd210.xyz",8],["inattvhd211.xyz",8],["inattvhd212.xyz",8],["inattvhd213.xyz",8],["inattvhd214.xyz",8],["inattvhd215.xyz",8],["inattvhd216.xyz",8],["inattvhd217.xyz",8],["inattvhd218.xyz",8],["inattvhd219.xyz",8],["inattvhd220.xyz",8],["inattvhd221.xyz",8]]);
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
