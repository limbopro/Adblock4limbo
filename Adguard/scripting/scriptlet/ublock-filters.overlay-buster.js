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

// ruleset: ublock-filters

// Important!
// Isolate from global scope

// Start of local scope
(function uBOL_overlayBuster() {

/******************************************************************************/

function overlayBuster(allFrames) {
    if ( allFrames === '' && window !== window.top ) { return; }
    var tstart;
    var ttl = 30000;
    var delay = 0;
    var delayStep = 50;
    var buster = function() {
        var docEl = document.documentElement,
            bodyEl = document.body,
            vw = Math.min(docEl.clientWidth, window.innerWidth),
            vh = Math.min(docEl.clientHeight, window.innerHeight),
            tol = Math.min(vw, vh) * 0.05,
            el = document.elementFromPoint(vw/2, vh/2),
            style, rect;
        for (;;) {
            if ( el === null || el.parentNode === null || el === bodyEl ) {
                break;
            }
            style = window.getComputedStyle(el);
            if ( parseInt(style.zIndex, 10) >= 1000 || style.position === 'fixed' ) {
                rect = el.getBoundingClientRect();
                if ( rect.left <= tol && rect.top <= tol && (vw - rect.right) <= tol && (vh - rect.bottom) < tol ) {
                    el.parentNode.removeChild(el);
                    tstart = Date.now();
                    el = document.elementFromPoint(vw/2, vh/2);
                    bodyEl.style.setProperty('overflow', 'auto', 'important');
                    docEl.style.setProperty('overflow', 'auto', 'important');
                    continue;
                }
            }
            el = el.parentNode;
        }
        if ( (Date.now() - tstart) < ttl ) {
            delay = Math.min(delay + delayStep, 1000);
            setTimeout(buster, delay);
        }
    };
    var domReady = function(ev) {
        if ( ev ) {
            document.removeEventListener(ev.type, domReady);
        }
        tstart = Date.now();
        setTimeout(buster, delay);
    };
    if ( document.readyState === 'loading' ) {
        document.addEventListener('DOMContentLoaded', domReady);
    } else {
        domReady();
    }
}

/******************************************************************************/

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [[]];
const hostnamesMap = new Map([["freex2line.online",0]]);
const exceptionsMap = new Map([]);
const hasEntities = false;
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
    try { overlayBuster(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
