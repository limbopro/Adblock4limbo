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

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["scroll","#sticky-video"],["openFloatingPlayer","FloatingPlayer"],["wheel","preventDefault"],["scroll","floatingPlayerEventHandler"],["resize","floatingPlayerEventHandler"],["scroll","getBoundingClientRect"],["scroll","window.history.pushState"],["contextmenu","preventDefault"],["DOMContentLoaded","adlinkfly_api_token"],["blur","counter"],["scroll","return\"undefined\"!=typeof"],["blur","event.dispatch.apply"],["scroll","/function\\([a-z]?\\){return\"undefined\"/"],["contextmenu"],["dragstart"],["keydown"],["/^(?:contextmenu|copy)$/","preventDefault"],["contextmenu","undefined"],["copy"],["copy","event.dispatch.apply"],["mousedown"],["selectstart"],["contextmenu","[native code]"],["copy","pagelink"],["copy","nocopas"],["/^(?:contextmenu|copy|cut)$/","nrWrapper"],["/keydown|contextmenu/"],["copy","event"],["copy","bypassEventsInProxies"],["copy","event.clipboardData.setData"],["/contextmenu|copy/"],["/^(?:contextmenu|copy|cut)$/","preventDefault"],["/^(?:contextmenu|copy)$/","event.dispatch.apply"],["/^(?:contextmenu|copy)$/"],["keydown","metaKey"],["/contextmenu|selectstart/","event.dispatch.apply"],["copy","window.alert"],["/^key/","wpccpDisable"],["contextmenu","event.dispatch.apply"],["/copy|selectstart|contextmenu/","preventDefault"],["/contextmenu|selectstart|dragstart|copy|cut|keydown|keyup/","preventDefault"],["/keydown|cut|copy|paste/","event.dispatch.apply"],["copy","clipboardData"],["/contextmenu|copy|selectionchange|mousedown/","native code"],["load","addEvent("],["copy","addLink"],["/contextmenu|dragstart|keydown|keyup|keypress/","/event\\.dispatch\\.apply|trackEvent/"],["/selectstart|dragstart|keydown/","preventDefault"]];

const hostnamesMap = new Map([["reuters.com",0],["abczdrowie.pl",1],["dobreprogramy.pl",1],["wp.pl",1],["pudelek.pl",1],["pysznosci.pl",1],["jastrzabpost.pl",1],["money.pl",1],["o2.pl",1],["www.wp.pl",2],["m.interia.pl",[3,4]],["m.lenta.ru",5],["lenta.ru",6],["datasciencelearner.com",7],["dizipal700.com",7],["dizipal701.com",7],["dizipal702.com",7],["dizipal703.com",7],["dizipal704.com",7],["dizipal705.com",7],["dizipal706.com",7],["dizipal707.com",7],["dizipal709.com",7],["dizipal710.com",7],["dizipal711.com",7],["dizipal712.com",7],["dizipal713.com",7],["dizipal714.com",7],["dizipal715.com",7],["dizipal716.com",7],["dizipal717.com",7],["dizipal718.com",7],["dizipal719.com",7],["dizipal720.com",7],["dizipal721.com",7],["dizipal722.com",7],["dizipal723.com",7],["dizipal724.com",7],["dizipal725.com",7],["dizipal726.com",7],["dizipal727.com",7],["dizipal728.com",7],["dizipal730.com",7],["dizipal731.com",7],["dizipal732.com",7],["dizipal733.com",7],["dizipal734.com",7],["dizipal735.com",7],["dizipal736.com",7],["dizipal737.com",7],["dizipal738.com",7],["dizipal739.com",7],["dizipal740.com",7],["dizipal741.com",7],["dizipal743.com",7],["dizipal745.com",7],["dizipal755.com",7],["my.pcloud.com",7],["blisseyhusband.in",7],["kapiert.de",7],["verdragonball.online",7],["melongmovie.site",8],["vebma.com",9],["pinloker.com",9],["sekilastekno.com",9],["mein-schoener-garten.de",10],["gocmod.com",11],["me.fo",12],["sharonwhiledemocratic.com",13],["jayservicestuff.com",13],["sandrataxeight.com",13],["markstyleall.com",13],["d0000d.com",13],["morganoperationface.com",13],["johntryopen.com",13],["do0od.com",13],["edwardarriveoften.com",13],["paulkitchendark.com",13],["stevenimaginelittle.com",13],["ds2play.com",13],["doods.pro",13],["dooood.com",13],["dood.yt",13],["dood.re",13],["dood.wf",13],["dood.la",13],["dood.pm",13],["dood.so",13],["dood.to",13],["dood.watch",13],["dood.ws",13],["guiasaude.info",13],["gaz.com.br",13],["relevantmagazine.com",13],["fakazaduo.com",13],["gimy.app",13],["ruyashoujo.com",13],["nhk.or.jp",13],["mangabtt.com",13],["careet.net",13],["contents.premium.naver.com",[13,20]],["r114.com",[13,14,21]],["app.kartra.com",13],["box-manga.com",13],["leouve.com.br",13],["comico.jp",13],["tappytoon.com",13],["toonnbook.nate.com",13],["tapas.io",13],["kakaowebtoon.com",[13,14]],["lapandilladelarejilla.es",13],["lezhinus.com",13],["lezhin.com",13],["grafolio.naver.com",13],["webtoon.kakao.com",13],["page.kakao.com",[13,14]],["tiktok.com",15],["pastepvp.org",16],["repack-games.com",17],["hk01.com",18],["economia.uol.com.br",19],["123pan.com",22],["ufchgu.ru",23],["mi-faq.ru",23],["top10mais.org",24],["recantodasletras.com.br",25],["readcomiconline.li",26],["nusantararom.org",26],["estadao.com.br",27],["atribuna.com.br",27],["braziljournal.com",27],["revistapesquisa.fapesp.br",27],["migalhas.com.br",27],["tweaktown.com",28],["opovo.com.br",29],["brasilescola.uol.com.br",29],["forbes.com.br",29],["abril.com.br",29],["noticiasdlb.com",30],["melodelaa.link",31],["read.qidian.com",32],["invado.pl",32],["ogznet.com",33],["solidfile.net",34],["downloadtutorials.net",34],["moboreader.net",35],["leg.br",36],["gamefinity.id",37],["pashplus.jp",38],["digitalfernsehen.de",38],["mundodonghua.com",38],["ukrainianwall.com",39],["informatykit.it",40],["osomatsusan.hatenablog.com",40],["kutub3lpdf.com",40],["nullslide.com",40],["ifdreamscametrue.com",41],["cq.ru",42],["reinodekovel.com",42],["babelnovel.com",43],["cafe.daum.net",44],["emailfake.com",45],["omgkpop.top",46],["software-on.com",47]]);

const entitiesMap = new Map([["camcaps",13],["streamtape",38],["strcloud",38]]);

const exceptionsMap = new Map([["1login.wp.pl",[1]],["pilot.wp.pl",[1]]]);

/******************************************************************************/

function addEventListenerDefuser(
    type = '',
    pattern = ''
) {
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 2);
    const logPrefix = safe.makeLogPrefix('prevent-addEventListener', type, pattern);
    const reType = safe.patternToRegex(type, undefined, true);
    const rePattern = safe.patternToRegex(pattern);
    const debug = shouldDebug(extraArgs);
    const targetSelector = extraArgs.elements || undefined;
    const elementMatches = elem => {
        if ( elem && elem.matches && elem.matches(targetSelector) ) { return true; }
        const elems = Array.from(document.querySelectorAll(targetSelector));
        return elems.includes(elem);
    };
    const elementDetails = elem => {
        if ( elem instanceof Window ) { return 'window'; }
        if ( elem instanceof Document ) { return 'document'; }
        if ( elem instanceof Element === false ) { return '?'; }
        const parts = [];
        if ( elem.id !== '' ) { parts.push(`#${CSS.escape(elem.id)}`); }
        for ( let i = 0; i < elem.classList.length; i++ ) {
            parts.push(`.${CSS.escape(elem.classList.item(i))}`);
        }
        for ( let i = 0; i < elem.attributes.length; i++ ) {
            const attr = elem.attributes.item(i);
            if ( attr.name === 'id' ) { continue; }
            if ( attr.name === 'class' ) { continue; }
            parts.push(`[${CSS.escape(attr.name)}="${attr.value}"]`);
        }
        return parts.join('');
    };
    const shouldPrevent = (thisArg, type, handler) => {
        const matchesType = safe.RegExp_test.call(reType, type);
        const matchesHandler = safe.RegExp_test.call(rePattern, handler);
        const matchesEither = matchesType || matchesHandler;
        const matchesBoth = matchesType && matchesHandler;
        if ( debug === 1 && matchesBoth || debug === 2 && matchesEither ) {
            debugger; // jshint ignore:line
        }
        if ( matchesBoth && targetSelector !== undefined ) {
            if ( elementMatches(thisArg) === false ) { return false; }
        }
        return matchesBoth;
    };
    const trapEddEventListeners = ( ) => {
        const eventListenerHandler = {
            apply: function(target, thisArg, args) {
                let t, h;
                try {
                    t = String(args[0]);
                    if ( typeof args[1] === 'function' ) {
                        h = String(safe.Function_toString(args[1]));
                    } else if ( typeof args[1] === 'object' && args[1] !== null ) {
                        if ( typeof args[1].handleEvent === 'function' ) {
                            h = String(safe.Function_toString(args[1].handleEvent));
                        }
                    } else {
                        h = String(args[1]);
                    }
                } catch(ex) {
                }
                if ( type === '' && pattern === '' ) {
                    safe.uboLog(logPrefix, `Called: ${t}\n${h}\n${elementDetails(thisArg)}`);
                } else if ( shouldPrevent(thisArg, t, h) ) {
                    return safe.uboLog(logPrefix, `Prevented: ${t}\n${h}\n${elementDetails(thisArg)}`);
                }
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
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
    let bcBuffer = [];
    safe.logLevel = scriptletGlobals.logLevel || 1;
    safe.sendToLogger = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
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
    return safe;
}

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.canDebug && details.debug;
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
