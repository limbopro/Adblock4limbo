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

// ruleset: annoyances-others

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_abortOnPropertyRead = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["videoIds"],["Object.prototype.autoplay_position"],["Object.prototype.videoAdvertisingMode"],["DisableDevtool"],["disable_copy"],["getSelection"],["disableSelection"],["clipboard_addLink"],["addCopy"],["wccp_pro_iscontenteditable"],["drag_off"],["UnGrabber"],["ready"],["sccopytext"],["contentprotector"],["wp_copy"],["disableselect"],["document.oncontextmenu"],["nocontext"],["clickIE4"],["copyToClipboard"],["disable_copy_ie"],["disable_hot_keys"],["mousedwn"],["stopPrntScr"],["addMultiEventListener"],["addLink"],["mousehandler"]];

const hostnamesMap = new Map([["marriedgames.com.br",0],["media.eagleplatform.com",1],["dailymail.co.uk",2],["dizipub1.com",3],["dizipub2.com",3],["dizipub3.com",3],["dizipub4.com",3],["dizipub5.com",3],["dizipub6.com",3],["dizipub7.com",3],["dizipub8.com",3],["dizipub9.com",3],["dizipub10.com",3],["pabrikarang.com",4],["novatoscans.top",4],["senpaiediciones.com",4],["truelovejapan.com",4],["neo-blood.co.jp",4],["machow2.com",4],["rawneix.in",4],["mangacrab.com",4],["metalnaveia66.com",4],["bollywoodhindi.in",4],["kdramasurdu.net",4],["theturtleislandnews.com",4],["audiotools.in",4],["audiobookcup.com",4],["lapandilladelarejilla.es",4],["7misr4day.com",4],["michaelemad.com",4],["lazytranslations.com",4],["wartaterkini.news",4],["foxaholic.com",4],["koreanaddict.net",4],["jstranslations1.com",4],["baltasar5010purohentai.com",4],["clockks.com",4],["iptv4best.com",4],["reinodekovel.com",4],["elektrikmen.com",4],["world4.eu",4],["activationkeys.co",4],["samuraiscan.com",4],["digitalsynopsis.com",[4,20]],["easyayurveda.com",[4,9,18,22]],["tunovelaligera.com",[4,21,22]],["fakazaduo.com",5],["sports-g.com",5],["chungnamilbo.co.kr",5],["jejusori.net",5],["incheonilbo.com",5],["ggilbo.com",5],["newsnjoy.or.kr",5],["mediaus.co.kr",5],["lec.co.kr",5],["spotvnews.co.kr",5],["ibric.org",5],["footballist.co.kr",5],["hankooki.com",5],["gametoc.hankyung.com",5],["digitaltoday.co.kr",5],["globale.co.kr",5],["veritas-a.com",5],["shinailbo.co.kr",5],["ksilbo.co.kr",5],["health.chosun.com",5],["gukjenews.com",5],["seoulfn.com",5],["labortoday.co.kr",5],["aitimes.kr",5],["salgoonews.com",5],["postshare.co.kr",5],["rbc.ru",5],["epnc.co.kr",5],["wolyo.co.kr",5],["hinfomax.co.kr",5],["outdoornews.co.kr",5],["anekdoty.ru",5],["championat.com",5],["bloombergquint.com",5],["bigcinema-online.net",5],["bigcinema-tv.club",5],["gidonline-kino.club",5],["kinogo-2017.com",5],["kinogo-720.club",5],["kinogoonline.club",5],["season-var.net",5],["topcinema.tv",5],["kino-kingdom.com",5],["hd-kinogo.co",5],["skidrowreloaded.com",[6,19]],["allaboutshaving.kr",6],["allturkserials.com",6],["victorytale.com",6],["osomatsusan.hatenablog.com",6],["iembra2or.com",[6,18]],["battle-one.com",[6,17]],["terbit21.online",6],["wizardsubs.com",[6,18]],["audio-sound-premium.com",6],["sysnettechsolutions.com",6],["mustafabukulmez.com",[6,19]],["ifdreamscametrue.com",6],["e-marineeducation.com",6],["waktusehat.xyz",[6,23]],["viralogic.xyz",[6,23]],["anisubindo.video",6],["portalwrc.pl",6],["lyrsense.com",7],["braziljournal.com",8],["humoruniv.com",10],["nullpress.net",11],["plantaomaringa.com",12],["blisseyhusband.in",[13,14]],["nubng.com",14],["blitzrechner.de",15],["theasianparent.com",16],["tutoganga.blogspot.com",16],["texte.work",16],["procrackerz.org",18],["clujust.ro",22],["secondlifetranslations.com",22],["kusonime.com",23],["exlyrics.com",24],["moviesrush.one",24],["skidrowcodex.net",24],["ahstudios.net",25],["crunchyscan.fr",25],["picallow.com",25],["thecustomrom.com",25],["muharebetarihi.com",25],["psycabi.net",26],["hatauzmani.com",27],["kurosave.com",27]]);

const entitiesMap = new Map([]);

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
        'Math_max': Math.max,
        'Math_min': Math.min,
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
