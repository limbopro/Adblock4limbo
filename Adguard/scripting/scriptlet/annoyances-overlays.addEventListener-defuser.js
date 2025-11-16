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

// ruleset: annoyances-overlays

// Important!
// Isolate from global scope

// Start of local scope
(function uBOL_addEventListenerDefuser() {

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
        if ( targetSelector === 'window' ) { return elem === window; }
        if ( targetSelector === 'document' ) { return elem === document; }
        if ( elem && elem.matches && elem.matches(targetSelector) ) { return true; }
        const elems = Array.from(document.querySelectorAll(targetSelector));
        return elems.includes(elem);
    };
    const elementDetails = elem => {
        if ( elem instanceof Window ) { return 'window'; }
        if ( elem instanceof Document ) { return 'document'; }
        if ( elem instanceof Element === false ) { return '?'; }
        const parts = [];
        // https://github.com/uBlockOrigin/uAssets/discussions/17907#discussioncomment-9871079
        const id = String(elem.id);
        if ( id !== '' ) { parts.push(`#${CSS.escape(id)}`); }
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
            debugger; // eslint-disable-line no-debugger
        }
        if ( matchesBoth && targetSelector !== undefined ) {
            if ( elementMatches(thisArg) === false ) { return false; }
        }
        return matchesBoth;
    };
    const proxyFn = function(context) {
        const { callArgs, thisArg } = context;
        let t, h;
        try {
            t = String(callArgs[0]);
            if ( typeof callArgs[1] === 'function' ) {
                h = String(safe.Function_toString(callArgs[1]));
            } else if ( typeof callArgs[1] === 'object' && callArgs[1] !== null ) {
                if ( typeof callArgs[1].handleEvent === 'function' ) {
                    h = String(safe.Function_toString(callArgs[1].handleEvent));
                }
            } else {
                h = String(callArgs[1]);
            }
        } catch {
        }
        if ( type === '' && pattern === '' ) {
            safe.uboLog(logPrefix, `Called: ${t}\n${h}\n${elementDetails(thisArg)}`);
        } else if ( shouldPrevent(thisArg, t, h) ) {
            return safe.uboLog(logPrefix, `Prevented: ${t}\n${h}\n${elementDetails(thisArg)}`);
        }
        return context.reflect();
    };
    runAt(( ) => {
        proxyApplyFn('EventTarget.prototype.addEventListener', proxyFn);
        proxyApplyFn('document.addEventListener', proxyFn);
    }, extraArgs.runAt);
}

function proxyApplyFn(
    target = '',
    handler = ''
) {
    let context = globalThis;
    let prop = target;
    for (;;) {
        const pos = prop.indexOf('.');
        if ( pos === -1 ) { break; }
        context = context[prop.slice(0, pos)];
        if ( context instanceof Object === false ) { return; }
        prop = prop.slice(pos+1);
    }
    const fn = context[prop];
    if ( typeof fn !== 'function' ) { return; }
    if ( proxyApplyFn.CtorContext === undefined ) {
        proxyApplyFn.ctorContexts = [];
        proxyApplyFn.CtorContext = class {
            constructor(...args) {
                this.init(...args);
            }
            init(callFn, callArgs) {
                this.callFn = callFn;
                this.callArgs = callArgs;
                return this;
            }
            reflect() {
                const r = Reflect.construct(this.callFn, this.callArgs);
                this.callFn = this.callArgs = this.private = undefined;
                proxyApplyFn.ctorContexts.push(this);
                return r;
            }
            static factory(...args) {
                return proxyApplyFn.ctorContexts.length !== 0
                    ? proxyApplyFn.ctorContexts.pop().init(...args)
                    : new proxyApplyFn.CtorContext(...args);
            }
        };
        proxyApplyFn.applyContexts = [];
        proxyApplyFn.ApplyContext = class {
            constructor(...args) {
                this.init(...args);
            }
            init(callFn, thisArg, callArgs) {
                this.callFn = callFn;
                this.thisArg = thisArg;
                this.callArgs = callArgs;
                return this;
            }
            reflect() {
                const r = Reflect.apply(this.callFn, this.thisArg, this.callArgs);
                this.callFn = this.thisArg = this.callArgs = this.private = undefined;
                proxyApplyFn.applyContexts.push(this);
                return r;
            }
            static factory(...args) {
                return proxyApplyFn.applyContexts.length !== 0
                    ? proxyApplyFn.applyContexts.pop().init(...args)
                    : new proxyApplyFn.ApplyContext(...args);
            }
        };
        proxyApplyFn.isCtor = new Map();
    }
    if ( proxyApplyFn.isCtor.has(target) === false ) {
        proxyApplyFn.isCtor.set(target, fn.prototype?.constructor === fn);
    }
    const fnStr = fn.toString();
    const toString = (function toString() { return fnStr; }).bind(null);
    const proxyDetails = {
        apply(target, thisArg, args) {
            return handler(proxyApplyFn.ApplyContext.factory(target, thisArg, args));
        },
        get(target, prop) {
            if ( prop === 'toString' ) { return toString; }
            return Reflect.get(target, prop);
        },
    };
    if ( proxyApplyFn.isCtor.get(target) ) {
        proxyDetails.construct = function(target, args) {
            return handler(proxyApplyFn.CtorContext.factory(target, args));
        };
    }
    context[prop] = new Proxy(fn, proxyDetails);
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

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.canDebug && details.debug;
}

/******************************************************************************/

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [["scroll"],["/^(mouseout|mouseleave)$/"],["/^(contextmenu|copy)$/"],["/contextmenu|copy|cut|key/","","elements","document"],["keydown","123"],["keydown","key"],["/copy|selectstart/","return"],["contextmenu","/preventDefault|pointerType/"],["load","adblock"],["blur"],["copy"],["contextmenu"],["/^(?:contextmenu|copy|selectstart)$/"],["/^(?:contextmenu|copy)$/","preventDefault"],["/^(?:contextmenu|keydown)$/"],["/^(?:contextmenu|copy|keydown)$/"],["mouseout","pop"],["/^(?:keyup|keydown)$/"],["keydown"],["keydown","disable_in_input"],["keydown","preventDefault"],["/contextmenu|keydown|keyup|copy/"],["visibilitychange","/bgmobile|\\{\\w\\.\\w+\\(\\)\\}/"],["copy","getSelection"],["","t.preventDefault"],["copy","replaceCopiedText"],["/^(contextmenu|copy|dragstart|selectstart)$/"],["","ads"],["/contextmenu|selectstart|copy/"],["/contextmenu|copy|keydown/"],["/contextmenu|select|copy/"],["/^(contextmenu|keydown)$/"],["contextmenu","a"],["mouseleave"],["/contextmenu|selectstart/"],["dragstart|keydown/"],["/contextmenu|keydown|dragstart/"],["","_0x"],["contextmenu","preventDefault"],["copy","preventDefault"],["","adtoniq"],["/^(?:contextmenu|copy|keydown|mousedown)$/"],["/contextmenu|keydown/"],["devtoolschange"],["/contextmenu|copy/"],["","mdp"],["/contextmenu|cut|copy|paste/"],["/contextmenu|mousedown/"],["mouseout"],["/contextmenu|copy|selectstart/"],["","0x"],["/^(?:contextmenu|dragstart|selectstart)$/"],["/^(?:contextmenu|copy)$/"],["/dragstart|keyup|keydown/"],["/keyup|keydown/","wpcc"],["/contextmenu|cut|copy|keydown/"],["","undefined"],["/contextmenu|selectstart|copy|dragstart/"],["/copy|dragstart/"],["/copy|contextmenu/"],["error"],["dragstart"],["","AdB"],["selectionchange","quill.emitter"],["/contextmenu|selectstart|select|copy|dragstart/"],["load","adLazy"],["copy","jQuery!==\"undefined\""],["selectstart"],["/^(?:copy|paste)$/","undefined"],["/copy|keydown/"],["/copy|cut|selectstart/"],["/keydown|keyup/","keyCode"],["keydown","disabledEvent"],["/copy|cut|paste|selectstart/"],["/contextmenu|dragstart|keydown/","event.dispatch.apply"],["beforepaste"],["","keyCode"],["DOMContentLoaded","rprw"],["","key"],["","ctrlKey"],["copy","pagelink"],["/keydown|mousedown/"],["copy","Source"],["mouseleave","scribd_ad"],["/contextmenu|copy|drag|dragstart/"],["mousedown","","elements",".entry-content"],["/contextmenu|keydown|keypress|copy/"],["","blockFuckingEverything"],["mouseout","openLayer"],["/contextmenu|keydown/","preventDefault"],["mousedown","dispatch"],["/contextmenu|mousedown/","return\"undefined\""],["DOMContentLoaded","ready"],["keydown","disabledKeys"],["DOMContentLoaded","load"],["contextmenu","_0x"],["keydown","keyCode"],["contextmenu","undefined"],["contextmenu","[native code]"],["/contextmenu|keyup|keydown/"],["mouseout","cookie"],["DOMContentLoaded","ads"],["rocket-DOMContentLoaded","bind(document)"],["mouseout","innerHeight"],["/^(contextmenu|mousedown|keydown)$/","preventDefault"],["error","browser-plugin"],["/select|copy|contextmenu/"],["/cut|copy|paste|contextmenu/"],["mousedown","undefined","elements","body"],["afterKeydown"],["keydown","void"],["copy","void"],["load","ad-wrap"],["/contextmenu|selectstart|dragstart/"],["copy","","elements","#__next"],["DOMContentLoaded","style.display"],["copy","clipboardData"],["visibilitychange","dispatch"],["copy","linkPrefixMessage"],["selectionchange",".html"],["contextmenu","return\"undefined\""],["keydown","/^function\\(.*\\|\\|.*}$/"],["mousedown","function(t)"]];
const hostnamesMap = new Map([["nationalgeographic.com",[0,11]],["medium.com",0],["artsy.net",0],["boards.net",0],["freeforums.net",0],["proboards.com",0],["inverse.com",1],["todaysparent.com",1],["straitstimes.com",1],["dlnews.com",1],["zaui.com",1],["worldpopulationreview.com",1],["interestingengineering.com",1],["scribd.com",1],["s0urce.io",2],["webnoveltranslations.com",3],["bitcine.app",4],["cineby.app",4],["tv.verizon.com",4],["vidsrc.*",4],["embed.su",4],["sussytoons.*",4],["hotleak.vip",[4,38]],["hotleaks.tv",[4,38]],["topfaps.com",[4,38]],["world-novel.fr",[5,6,7]],["magesyrevolution.com",8],["filefox.cc",9],["uol.com.br",10],["gazetadopovo.com.br",10],["indiatimes.com",10],["odiario.com",10],["otempo.com.br",10],["estadao.com.br",10],["ofuxico.com.br",10],["pentruea.com",10],["ciberduvidas.iscte-iul.pt",10],["globo.com",10],["citas.in",10],["blitzrechner.de",10],["emailfake.com",10],["lyrical-nonsense.com",10],["mediafax.ro",10],["economica.net",10],["polsatnews.pl",10],["novagente.pt",10],["arlinadzgn.com",10],["bilibili.com",[10,63]],["nowcoder.com",10],["libertatea.ro",10],["erinsakura.com",10],["yuque.com",10],["deepl.com",10],["digi24.ro",10],["onna.kr",10],["ziare.com",10],["agrointel.ro",10],["milenio.com",10],["veneto.info",10],["edurev.in",10],["transinfo.pl",10],["news.17173.com",10],["chowhound.com",10],["explore.com",10],["foodie.com",10],["foodrepublic.com",10],["glam.com",10],["grunge.com",10],["healthdigest.com",10],["housedigest.com",10],["looper.com",10],["mashed.com",10],["moneydigest.com",10],["nickiswift.com",10],["outdoorguide.com",10],["slashfilm.com",10],["slashgear.com",10],["tastingtable.com",10],["thedailymeal.com",10],["thelist.com",10],["women.com",10],["wrestlinginc.com",10],["abril.com.br",10],["sarthaks.com",10],["delfi.lt",10],["pendulumedu.com",10],["bloomberglinea.com",10],["bloomberglinea.com.br",10],["peliculas24.me",11],["roztoczanskipn.pl",11],["economictimes.indiatimes.com",11],["dzwignice.info",11],["script-stack.com",[11,45]],["mio.to",11],["husseinezzat.com",[11,18]],["taxo-acc.pl",11],["portalwrc.pl",11],["lublin.eu",11],["mangaku.*",11],["dddance.party",11],["kapiert.de",11],["hitcena.pl",11],["tv-asahi.co.jp",11],["digitalfernsehen.de",11],["suzylu.co.uk",11],["music.apple.com",11],["skidrowcodex.net",11],["dood.*",11],["ds2play.com",11],["ds2video.com",11],["d0o0d.com",11],["vsco.co",11],["festival-cannes.com",11],["strcloud.in",11],["streamtape.*",11],["ufret.jp",11],["thenekodark.com",11],["artesacro.org",11],["poli-vsp.ru",11],["polyvsp.ru",11],["ananweb.jp",11],["daimangajiten.com",11],["digital.lasegunda.com",11],["hibiki-radio.jp",11],["garyfeinbergphotography.com",11],["clubulbebelusilor.ro",11],["gplinks.co",11],["ifdreamscametrue.com",11],["marksandspencer.com",11],["asiatv.*",11],["stowarzyszenie-impuls.eu",11],["viveretenerife.com",11],["oferty.dsautomobiles.pl",11],["wzamrani.com",11],["citroen.pl",11],["peugeot.pl",11],["wirtualnyspac3r.pl",11],["antena3.com",11],["lasexta.com",11],["pashplus.jp",11],["kpopsea.com",11],["cnki.net",11],["wpchen.net",11],["hongxiu.com",11],["readnovel.com",11],["uihtm.com",11],["uslsoftware.com",11],["rule34hentai.net",11],["news24.jp",11],["gaminplay.com",11],["njjzxl.net",11],["voe.sx",[11,71]],["voe-unblock.com",[11,71]],["scrolller.com",11],["cocomanga.com",11],["nusantararom.org",[11,76]],["virpe.cc",11],["ukrainashop.com",11],["celtadigital.com",11],["matzoo.pl",11],["asia2tv.com",11],["labs.j-novel.club",11],["turbo1.co",11],["futbollatam.com",11],["read.amazon.com",11],["box-manga.com",11],["the-masters-voice.com",11],["hemas.pl",11],["accgroup.vn",11],["btvnovinite.bg",11],["allcryptoz.net",11],["crewbase.net",11],["crewus.net",11],["shinbhu.net",11],["shinchu.net",11],["topcryptoz.net",11],["uniqueten.net",11],["ultraten.net",11],["cloudcomputingtopics.net",11],["bianity.net",11],["coinsparty.com",11],["postype.com",11],["lofter.com",11],["hentaihaven.xxx",11],["espn.com",11],["4media.com",11],["przegladpiaseczynski.pl",11],["freewaysintl.com",11],["cool-etv.net",11],["j91.asia",11],["sgd.de",11],["bg-gledai.*",11],["dicasfinanceirasbr.com",11],["dicasdevalor.net",11],["dicasdefinancas.net",11],["guiasaude.info",11],["felizemforma.com",11],["financasdeouro.com",11],["mangaschan.net",11],["sssscanlator.com",11],["cypherscans.xyz",11],["twitchemotes.com",11],["smartkhabrinews.com",11],["streamvid.net",11],["mkv-pastes.com",11],["ipphone-warehouse.com",[11,109,110,111]],["freewatchtv.top",11],["gdplayertv.*",11],["mixstreams.top",11],["tvfreemium.top",11],["duracell.de",11],["all4pets.com.pl",11],["knshow.com",12],["jusbrasil.com.br",13],["descarga-animex.*",14],["techsupportall.com",15],["lugarcerto.com.br",16],["satcesc.com",17],["miraculous.to",[17,38]],["jootc.com",18],["operatorsekolahdbn.com",18],["wawlist.com",18],["teachoo.com",18],["statelibrary.us",19],["tabonitobrasil.*",20],["anisubindo.*",20],["bigulnews.tv",21],["m.youtube.com",22],["news.chosun.com",23],["androidweblog.com",24],["cronista.com",25],["fcportables.com",26],["venea.net",27],["uta-net.com",28],["downloadtutorials.net",[28,45]],["blog.naver.com",28],["myschool-eng.com",29],["orangespotlight.com",30],["th-world.com",[30,50]],["tepat.id",31],["itvn.pl",32],["itvnextra.pl",32],["kuchniaplus.pl",32],["miniminiplus.pl",32],["player.pl",32],["ttv.pl",32],["tvn.pl",32],["tvn24.pl",32],["tvn24bis.pl",32],["tvn7.pl",32],["tvnfabula.pl",32],["tvnstyle.pl",32],["tvnturbo.pl",32],["x-link.pl",32],["x-news.pl",32],["kickante.com.br",33],["thestar.com.my",33],["corriereadriatico.it",33],["ilsole24ore.com",33],["thehouseofportable.com",34],["ntvspor.net",34],["book.zhulang.com",34],["tadu.com",34],["selfstudyhistory.com",35],["lokercirebon.com",36],["avdelphi.com",37],["maxstream.video",38],["wstream.*",38],["wpb.shueisha.co.jp",38],["tiktok.com",38],["vedantu.com",38],["zsti.zsti.civ.pl",38],["kathleenmemberhistory.com",[38,72]],["nonesnanking.com",[38,72]],["phenomenalityuniform.com",[38,72]],["valeronevijao.com",[38,72]],["figeterpiazine.com",[38,72]],["yodelswartlike.com",[38,72]],["generatesnitrosate.com",[38,72]],["gamoneinterrupted.com",[38,72]],["metagnathtuggers.com",[38,72]],["wolfdyslectic.com",[38,72]],["rationalityaloelike.com",[38,72]],["sizyreelingly.com",[38,72]],["urochsunloath.com",[38,72]],["monorhinouscassaba.com",[38,72]],["boonlessbestselling244.com",[38,72]],["cyamidpulverulence530.com",[38,72]],["guidon40hyporadius9.com",[38,72]],["30sensualizeexpression.com",[38,72]],["greaseball6eventual20.com",[38,72]],["toxitabellaeatrebates306.com",[38,72]],["20demidistance9elongations.com",[38,72]],["audaciousdefaulthouse.com",[38,72]],["fittingcentermondaysunday.com",[38,72]],["launchreliantcleaverriver.com",[38,72]],["matriculant401merited.com",[38,72]],["realfinanceblogcenter.com",[38,72]],["telyn610zoanthropy.com",[38,72]],["un-block-voe.net",[38,72]],["v-o-e-unblock.com",[38,72]],["voe-un-block.com",[38,72]],["voe-unblock.*",[38,72]],["voeun-block.net",[38,72]],["voeunbl0ck.com",[38,72]],["voeunblck.com",[38,72]],["voeunblk.com",[38,72]],["voeunblock3.com",[38,72]],["audiotools.pro",38],["magesy.blog",38],["www.ntv.co.jp",38],["faptiti.com",38],["wormate.io",38],["pobre.*",[38,87]],["selfstudys.com",38],["adslink.pw",38],["jpopsingles.eu",38],["vinstartheme.com",[38,93]],["leakedzone.com",[38,96]],["fjordd.com",38],["seriesperu.com",38],["zippyupload.com",38],["3xyaoi.com",38],["foxteller.com",[38,119]],["alphapolis.co.jp",39],["blog.csdn.net",39],["juejin.cn",39],["sweetslyrics.com",39],["thegatewaypundit.com",40],["thegearhunt.com",41],["jfdb.jp",42],["loginhit.com.ng",42],["charbelnemnom.com",42],["bphimmoi.net",42],["goodhub.xyz",42],["thotsbay.tv",42],["topperlearning.com",42],["bmovies.*",43],["edailybuzz.com",44],["zhihu.com",44],["qidian.com",44],["invado.pl",44],["webnovel.com",44],["skuola.net",44],["marriedbiography.com",44],["lunas.pro",45],["onlinefreecourse.net",45],["pisr.org",45],["uplod.net",45],["thewpclub.net",45],["thememazing.com",45],["themebanks.com",45],["mesquitaonline.com",45],["skandynawiainfo.pl",45],["onlinecoursebay.com",45],["dreamsfriend.com",46],["trakteer.id",47],["699pic.com",47],["promobit.com.br",48],["techjunkie.com",48],["zerohedge.com",48],["1mg.com",48],["khou.com",48],["10tv.com",48],["kutub3lpdf.com",49],["sklep-agroland.pl",51],["polagriparts.pl",52],["nordkorea-info.de",53],["geotips.net",54],["hardcoregames.ca",55],["lataifas.ro",56],["daotranslate.*",56],["toppremiumpro.com",57],["wattpad.com",58],["starbene.it",59],["fauxid.com",60],["androidtvbox.eu",61],["nicematin.com",62],["yamibo.com",64],["fimfiction.net",65],["moegirl.org.cn",66],["peekme.cc",67],["ihbarweb.org.tr",68],["baixedetudo.net.br",69],["gardenia.net",70],["hollywoodmask.com",73],["mbalib.com",73],["wenku.baidu.com",74],["mooc.chaoxing.com",75],["www-daftarharga.blogspot.com",76],["realpython.com",77],["linkmate.xyz",78],["cristelageorgescu.ro",79],["privivkainfo.ru",80],["frameboxxindore.com",80],["descargatepelis.com",81],["vercalendario.info",82],["zipcode.com.ng",82],["slideshare.net",83],["poipiku.com",84],["jnews5.com",85],["postcourier.com.pg",86],["gmx.co.uk",88],["gmx.com",88],["likey.me",89],["broflix.cc",89],["bestcam.tv",89],["wallpaperaccess.com",90],["shortform.com",91],["joysound.com",92],["colors.sonicthehedgehog.com",94],["senpa.io",95],["txori.com",95],["mangareader.to",95],["comikey.com",97],["saikaiscans.net",98],["translate.goog",99],["oreilly.com",100],["alfred.camera",101],["wrosinski.pl",102],["wtsp.com",103],["starzunion.com",104],["lowcygier.pl",105],["studiestoday.com",106],["studyrankers.com",107],["bharatavani.in",107],["bongdaplus.vn",108],["timeanddate.com",112],["naver.com",113],["leetcode.cn",114],["unknowncheats.me",115],["cnblogs.com",116],["cnn.com",117],["kentucky.com",118],["francis-bacon.com",120],["anikai.to",121],["animekai.*",121],["anigo.to",121],["sflix.fi",121],["yflix.to",121],["auto-doc.*",122],["autodoc.*",122],["autodoc24.*",122],["topautoosat.fi",122],["autoteiledirekt.de",122],["autoczescionline24.pl",122],["tuttoautoricambi.it",122],["onlinecarparts.co.uk",122],["autoalkatreszek24.hu",122],["autodielyonline24.sk",122],["reservdelar24.se",122],["pecasauto24.pt",122],["reservedeler24.co.no",122],["piecesauto24.lu",122],["rezervesdalas24.lv",122],["besteonderdelen.nl",122],["recambioscoche.es",122],["antallaktikaexartimata.gr",122],["piecesauto.fr",122],["teile-direkt.ch",122]]);
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
    try { addEventListenerDefuser(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
