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

// ruleset: annoyances-others

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_addEventListenerDefuser = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["scroll","#sticky-video"],["openFloatingPlayer","FloatingPlayer"],["wheel","preventDefault"],["scroll","floatingPlayerEventHandler"],["resize","floatingPlayerEventHandler"],["scroll","getBoundingClientRect"],["scroll","window.history.pushState"],["DOMContentLoaded","adlinkfly_api_token"],["blur","counter"],["scroll","return\"undefined\"!=typeof"],["blur","event.dispatch.apply"],["scroll","/function\\([a-z]?\\){return\"undefined\"/"],["contextmenu","preventDefault"],["contextmenu"],["dragstart"],["keydown"],["/^(?:contextmenu|copy)$/","preventDefault"],["contextmenu","undefined"],["copy"],["copy","event.dispatch.apply"],["mousedown"],["selectstart"],["contextmenu","[native code]"],["copy","pagelink"],["copy","nocopas"],["/^(?:contextmenu|copy|cut)$/","nrWrapper"],["/keydown|contextmenu/"],["copy","event"],["copy","bypassEventsInProxies"],["copy","event.clipboardData.setData"],["/contextmenu|copy/"],["/^(?:contextmenu|copy|cut)$/","preventDefault"],["/^(?:contextmenu|copy)$/","event.dispatch.apply"],["/^(?:contextmenu|copy)$/"],["keydown","metaKey"],["/contextmenu|selectstart/","event.dispatch.apply"],["copy","window.alert"],["/^key/","wpccpDisable"],["contextmenu","event.dispatch.apply"],["/copy|selectstart|contextmenu/","preventDefault"],["/contextmenu|selectstart|dragstart|copy|cut|keydown|keyup/","preventDefault"],["/keydown|cut|copy|paste/","event.dispatch.apply"],["copy","clipboardData"],["/contextmenu|copy|selectionchange|mousedown/","native code"],["load","addEvent("],["copy","addLink"],["/contextmenu|dragstart|keydown|keyup|keypress/","/event\\.dispatch\\.apply|trackEvent/"],["/selectstart|dragstart|keydown/","preventDefault"]];

const hostnamesMap = new Map([["reuters.com",0],["abczdrowie.pl",1],["dobreprogramy.pl",1],["wp.pl",1],["pudelek.pl",1],["pysznosci.pl",1],["www.wp.pl",2],["m.interia.pl",[3,4]],["m.lenta.ru",5],["lenta.ru",6],["melongmovie.site",7],["vebma.com",8],["pinloker.com",8],["sekilastekno.com",8],["mein-schoener-garten.de",9],["gocmod.com",10],["me.fo",11],["dizipal580.com",12],["dizipal581.com",12],["dizipal582.com",12],["dizipal583.com",12],["dizipal584.com",12],["dizipal585.com",12],["dizipal586.com",12],["dizipal587.com",12],["dizipal588.com",12],["dizipal589.com",12],["dizipal590.com",12],["dizipal591.com",12],["dizipal592.com",12],["dizipal593.com",12],["dizipal594.com",12],["dizipal595.com",12],["dizipal596.com",12],["dizipal597.com",12],["dizipal598.com",12],["dizipal599.com",12],["dizipal600.com",12],["dizipal607.com",12],["dizipal608.com",12],["dizipal609.com",12],["dizipal610.com",12],["dizipal611.com",12],["dizipal612.com",12],["dizipal613.com",12],["dizipal614.com",12],["dizipal615.com",12],["dizipal616.com",12],["dizipal617.com",12],["dizipal618.com",12],["dizipal619.com",12],["dizipal620.com",12],["dizipal621.com",12],["dizipal622.com",12],["dizipal623.com",12],["dizipal624.com",12],["dizipal625.com",12],["dizipal626.com",12],["dizipal627.com",12],["dizipal628.com",12],["dizipal629.com",12],["dizipal630.com",12],["dizipal631.com",12],["dizipal632.com",12],["dizipal633.com",12],["dizipal634.com",12],["dizipal635.com",12],["dizipal636.com",12],["dizipal637.com",12],["dizipal638.com",12],["dizipal639.com",12],["dizipal640.com",12],["dizipal641.com",12],["dizipal642.com",12],["dizipal643.com",12],["dizipal644.com",12],["dizipal645.com",12],["dizipal646.com",12],["dizipal647.com",12],["dizipal648.com",12],["dizipal649.com",12],["dizipal650.com",12],["dizipal651.com",12],["dizipal652.com",12],["dizipal653.com",12],["dizipal654.com",12],["dizipal655.com",12],["dizipal656.com",12],["dizipal657.com",12],["dizipal658.com",12],["dizipal659.com",12],["dizipal660.com",12],["dizipal661.com",12],["dizipal662.com",12],["dizipal663.com",12],["dizipal664.com",12],["dizipal665.com",12],["dizipal666.com",12],["dizipal667.com",12],["dizipal668.com",12],["dizipal669.com",12],["dizipal670.com",12],["dizipal671.com",12],["dizipal672.com",12],["dizipal673.com",12],["dizipal674.com",12],["dizipal675.com",12],["dizipal676.com",12],["dizipal677.com",12],["dizipal678.com",12],["dizipal679.com",12],["dizipal680.com",12],["dizipal681.com",12],["dizipal682.com",12],["dizipal683.com",12],["dizipal684.com",12],["dizipal685.com",12],["dizipal686.com",12],["dizipal687.com",12],["dizipal688.com",12],["dizipal689.com",12],["dizipal690.com",12],["dizipal691.com",12],["dizipal692.com",12],["dizipal693.com",12],["dizipal694.com",12],["dizipal695.com",12],["dizipal696.com",12],["dizipal697.com",12],["dizipal698.com",12],["dizipal699.com",12],["dizipal700.com",12],["my.pcloud.com",12],["blisseyhusband.in",12],["kapiert.de",12],["verdragonball.online",12],["guiasaude.info",13],["gaz.com.br",13],["relevantmagazine.com",13],["fakazaduo.com",13],["gimy.app",13],["ruyashoujo.com",13],["nhk.or.jp",13],["mangabtt.com",13],["careet.net",13],["contents.premium.naver.com",[13,20]],["r114.com",[13,14,21]],["app.kartra.com",13],["box-manga.com",13],["lover91.net",13],["leouve.com.br",13],["comico.jp",13],["tappytoon.com",13],["toonnbook.nate.com",13],["tapas.io",13],["kakaowebtoon.com",[13,14]],["lapandilladelarejilla.es",13],["lezhinus.com",13],["lezhin.com",13],["grafolio.naver.com",13],["webtoon.kakao.com",13],["page.kakao.com",[13,14]],["tiktok.com",15],["pastepvp.org",16],["repack-games.com",17],["hk01.com",18],["economia.uol.com.br",19],["123pan.com",22],["ufchgu.ru",23],["mi-faq.ru",23],["top10mais.org",24],["recantodasletras.com.br",25],["readcomiconline.li",26],["nusantararom.org",26],["estadao.com.br",27],["atribuna.com.br",27],["braziljournal.com",27],["revistapesquisa.fapesp.br",27],["migalhas.com.br",27],["tweaktown.com",28],["opovo.com.br",29],["brasilescola.uol.com.br",29],["forbes.com.br",29],["abril.com.br",29],["noticiasdlb.com",30],["melodelaa.link",31],["read.qidian.com",32],["invado.pl",32],["ogznet.com",33],["solidfile.net",34],["downloadtutorials.net",34],["moboreader.net",35],["leg.br",36],["gamefinity.id",37],["pashplus.jp",38],["digitalfernsehen.de",38],["mundodonghua.com",38],["ukrainianwall.com",39],["informatykit.it",40],["osomatsusan.hatenablog.com",40],["kutub3lpdf.com",40],["nullslide.com",40],["ifdreamscametrue.com",41],["cq.ru",42],["reinodekovel.com",42],["babelnovel.com",43],["cafe.daum.net",44],["ohmygirl.ml",44],["emailfake.com",45],["omgkpop.top",46],["software-on.com",47]]);

const entitiesMap = new Map([["camcaps",13],["streamtape",38],["strcloud",38]]);

const exceptionsMap = new Map([["1login.wp.pl",[1]],["pilot.wp.pl",[1]]]);

/******************************************************************************/

function addEventListenerDefuser(
    type = '',
    pattern = ''
) {
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 2);
    const reType = safe.patternToRegex(type, undefined, true);
    const rePattern = safe.patternToRegex(pattern);
    const log = shouldLog(extraArgs);
    const debug = shouldDebug(extraArgs);
    const trapEddEventListeners = ( ) => {
        const eventListenerHandler = {
            apply: function(target, thisArg, args) {
                let type, handler;
                try {
                    type = String(args[0]);
                    handler = args[1] instanceof Function
                        ? String(safe.Function_toString(args[1]))
                        : String(args[1]);
                } catch(ex) {
                }
                const matchesType = safe.RegExp_test.call(reType, type);
                const matchesHandler = safe.RegExp_test.call(rePattern, handler);
                const matchesEither = matchesType || matchesHandler;
                const matchesBoth = matchesType && matchesHandler;
                if ( log === 1 && matchesBoth || log === 2 && matchesEither || log === 3 ) {
                    safe.uboLog(`addEventListener('${type}', ${handler})`);
                }
                if ( debug === 1 && matchesBoth || debug === 2 && matchesEither ) {
                    debugger; // jshint ignore:line
                }
                if ( matchesBoth ) { return; }
                return Reflect.apply(target, thisArg, args);
            },
            get(target, prop, receiver) {
                if ( prop === 'toString' ) {
                    return target.toString.bind(target);
                }
                return Reflect.get(target, prop, receiver);
            },
        };
        self.EventTarget.prototype.addEventListener = new Proxy(
            self.EventTarget.prototype.addEventListener,
            eventListenerHandler
        );
    };
    runAt(( ) => {
        trapEddEventListeners();
    }, extraArgs.runAt);
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

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.debug;
}

function shouldLog(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.log;
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
    try { addEventListenerDefuser(...argsList[i]); }
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
    return uBOL_addEventListenerDefuser();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_addEventListenerDefuser = cloneInto([
            [ '(', uBOL_addEventListenerDefuser.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_addEventListenerDefuser);
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
    delete page.uBOL_addEventListenerDefuser;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
