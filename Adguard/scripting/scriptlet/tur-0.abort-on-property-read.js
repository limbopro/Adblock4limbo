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
const uBOL_abortOnPropertyRead = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["detectedAdBlock"],["adblockmesaj"],["detectAdBlock"],["adsBlocked"],["rTargets"],["initPu"],["initAd"],["initPop"],["oV1"],["openPopup"],["pop_status"],["sagAltReklamListesi"],["initDizi"],["check_target"],["wpsite_clickable_data"],["jsPopunder"]];

const hostnamesMap = new Map([["sozcu.com.tr",0],["mangawt.com",1],["gsmturkey.net",1],["vidtekno.com",1],["telegramgruplari.com",2],["kanalmaras.com",3],["r10.net",4],["guneykoresinemasi.com",5],["jetfilmizletv.net",5],["dizipall.org",5],["dizimax2.com",5],["dizimax3.com",5],["dizimax4.com",5],["dizimax5.com",5],["dizimax6.com",5],["dizimax7.com",5],["dizimax8.com",5],["dizimax9.com",5],["dizimax10.com",5],["dizimax11.com",5],["dizimax12.com",5],["dizimax13.com",5],["dizimax14.com",5],["dizimax15.com",5],["dizimax16.com",5],["dizimax17.com",5],["dizimax18.com",5],["yenierotikfilm.xyz",5],["diziday1.com",5],["zipfilmizle.com",5],["bamfilmizle.com",5],["sinemadafilm.com",5],["netflixcehennemi.com",5],["diziizles.com",5],["hdizlefilmleri.com",5],["filmmoduu.com",5],["abifilmizle.org",5],["filmla.org",5],["trfilm.net",5],["dolufilm.org",5],["netflix-izle.com",5],["turkifsaalemi.com",5],["netfilmtvizle.com",5],["kuponuna148.com",5],["kuponuna149.com",5],["kuponuna150.com",5],["kuponuna151.com",5],["kuponuna152.com",5],["kuponuna153.com",5],["kuponuna154.com",5],["kuponuna155.com",5],["kuponuna156.com",5],["kuponuna157.com",5],["kuponuna158.com",5],["kuponuna159.com",5],["kuponuna160.com",5],["kuponuna161.com",5],["kuponuna162.com",5],["kuponuna163.com",5],["kuponuna164.com",5],["kuponuna165.com",5],["kuponuna166.com",5],["kuponuna167.com",5],["kuponuna168.com",5],["kuponuna169.com",5],["kuponuna170.com",5],["supernaturalizle.com",6],["sinemakolik.net",6],["hdsinemax.com",6],["fullhdabifilm.com",6],["bettercallsaulizle.com",6],["superfilmgeldi.net",6],["fullhdfilmizlett1.com",6],["fullhdfilmcibaba2.com",6],["filmsezonu.com",6],["fullhdfilmizleabi.com",6],["hdfreeizle.com",6],["erotikfilmsitesi.net",6],["hdrealfilmizle.com",6],["hdmixfilim.com",[6,10]],["fullhdfilmizlepala.com",6],["fullfilmcidayi4.com",6],["fullfilmcidayi5.com",6],["fullfilmcidayi6.com",6],["fullfilmcidayi7.com",6],["fullfilmcidayi8.com",6],["fullfilmcidayi9.com",6],["fullfilmcidayi10.com",6],["fullfilmcidayi11.com",6],["fullfilmcidayi12.com",6],["fullfilmcidayi13.com",6],["fullfilmcidayi14.com",6],["fullfilmcidayi15.com",6],["fullfilmcidayi16.com",6],["fullfilmcidayi17.com",6],["fullfilmcidayi18.com",6],["fullfilmcidayi19.com",6],["fullfilmcidayi20.com",6],["fullfilmcidayi21.com",6],["fullfilmcidayi22.com",6],["fullfilmcidayi23.com",6],["fullfilmcidayi24.com",6],["fullfilmcidayi25.com",6],["fullfilmcidayi26.com",6],["fullfilmcidayi27.com",6],["fullfilmcidayi28.com",6],["fullfilmcidayi29.com",6],["fullfilmcidayi30.com",6],["dizivex.com",7],["dizimini.com",7],["roketdizi.co",7],["1080hdfilmizle.com",7],["shirl.club",8],["altporno.xyz",8],["ovpvideo.com",8],["afroditscans.com",9],["goodfilmizle.com",11],["diziyou.co",12],["technopat.net",14]]);

const entitiesMap = new Map([["breakingbadizle",5],["diziyo",6],["yabancidiziizlesene",7],["dizisup",7],["torrentarsivi",13],["tranimeizle",15]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function abortOnPropertyRead(
    chain = ''
) {
    if ( typeof chain !== 'string' ) { return; }
    if ( chain === '' ) { return; }
    const exceptionToken = getExceptionToken();
    const abort = function() {
        throw new ReferenceError(exceptionToken);
    };
    const makeProxy = function(owner, chain) {
        const pos = chain.indexOf('.');
        if ( pos === -1 ) {
            const desc = Object.getOwnPropertyDescriptor(owner, chain);
            if ( !desc || desc.get !== abort ) {
                Object.defineProperty(owner, chain, {
                    get: abort,
                    set: function(){}
                });
            }
            return;
        }
        const prop = chain.slice(0, pos);
        let v = owner[prop];
        chain = chain.slice(pos + 1);
        if ( v ) {
            makeProxy(v, chain);
            return;
        }
        const desc = Object.getOwnPropertyDescriptor(owner, prop);
        if ( desc && desc.set !== undefined ) { return; }
        Object.defineProperty(owner, prop, {
            get: function() { return v; },
            set: function(a) {
                v = a;
                if ( a instanceof Object ) {
                    makeProxy(a, chain);
                }
            }
        });
    };
    const owner = window;
    makeProxy(owner, chain);
}

function getExceptionToken() {
    const safe = safeSelf();
    const token =
        String.fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
    const oe = self.onerror;
    self.onerror = function(msg, ...args) {
        if ( typeof msg === 'string' && msg.includes(token) ) { return true; }
        if ( oe instanceof Function ) {
            return oe.call(this, msg, ...args);
        }
    }.bind();
    return token;
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
    try { abortOnPropertyRead(...argsList[i]); }
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
    return uBOL_abortOnPropertyRead();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_abortOnPropertyRead = cloneInto([
            [ '(', uBOL_abortOnPropertyRead.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_abortOnPropertyRead);
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
    delete page.uBOL_abortOnPropertyRead;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
