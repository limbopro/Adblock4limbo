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
    if ( fn.prototype?.constructor === fn ) {
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
const argsList = [["scroll"],["/^(mouseout|mouseleave)$/"],["/^(contextmenu|copy)$/"],["devtoolschange"],["blur"],["copy"],["contextmenu"],["/^(?:contextmenu|copy|selectstart)$/"],["/^(?:contextmenu|copy)$/","preventDefault"],["/^(?:contextmenu|keydown)$/"],["DOMContentLoaded",".js-popup-adblock"],["/^(?:contextmenu|copy|keydown)$/"],["mouseout","pop"],["/^(?:keyup|keydown)$/"],["keydown"],["keydown","disable_in_input"],["keydown","preventDefault"],["/contextmenu|keydown|keyup|copy/"],["visibilitychange","/bgmobile|\\{\\w\\.\\w+\\(\\)\\}/"],["copy","getSelection"],["","t.preventDefault"],["copy","replaceCopiedText"],["/^(contextmenu|copy|dragstart|selectstart)$/"],["","ads"],["/contextmenu|selectstart|copy/"],["/contextmenu|copy|keydown/"],["/contextmenu|select|copy/"],["/^(contextmenu|keydown)$/"],["contextmenu","a"],["mouseleave"],["/contextmenu|selectstart/"],["dragstart|keydown/"],["/contextmenu|keydown|dragstart/"],["","_0x"],["contextmenu","preventDefault"],["copy","preventDefault"],["","adtoniq"],["/^(?:contextmenu|copy|keydown|mousedown)$/"],["/contextmenu|keydown/"],["/contextmenu|copy/"],["","mdp"],["/contextmenu|cut|copy|paste/"],["/contextmenu|mousedown/"],["mouseout"],["/contextmenu|copy|selectstart/"],["","0x"],["/^(?:contextmenu|dragstart|selectstart)$/"],["/^(?:contextmenu|copy)$/"],["/dragstart|keyup|keydown/"],["/keyup|keydown/","wpcc"],["/contextmenu|cut|copy|keydown/"],["","undefined"],["/contextmenu|selectstart|copy|dragstart/"],["/copy|dragstart/"],["/copy|contextmenu/"],["error"],["dragstart"],["","AdB"],["selectionchange","quill.emitter"],["/contextmenu|selectstart|select|copy|dragstart/"],["load","adLazy"],["copy","jQuery!==\"undefined\""],["copy","throw"],["selectstart"],["/^(?:copy|paste)$/","undefined"],["/copy|keydown/"],["/copy|cut|selectstart/"],["/keydown|keyup/","keyCode"],["keydown","disabledEvent"],["","Key"],["/copy|cut|paste|selectstart/"],["/contextmenu|dragstart|keydown/","event.dispatch.apply"],["beforepaste"],["","keyCode"],["DOMContentLoaded","rprw"],["","key"],["","ctrlKey"],["copy","pagelink"],["/keydown|mousedown/"],["copy","Source"],["mouseleave","scribd_ad"],["/contextmenu|copy|drag|dragstart/"],["/contextmenu|keydown|keypress|copy/"],["","blockFuckingEverything"],["mouseout","openLayer"],["/contextmenu|keydown/","preventDefault"],["mousedown","dispatch"],["/contextmenu|mousedown/","return\"undefined\""],["DOMContentLoaded","ready"],["keydown","disabledKeys"],["DOMContentLoaded","load"],["contextmenu","_0x"],["keydown","keyCode"],["contextmenu","undefined"],["contextmenu","[native code]"],["/contextmenu|keyup|keydown/"],["mouseout","cookie"],["DOMContentLoaded","ads"],["rocket-DOMContentLoaded","bind(document)"],["mouseout","innerHeight"],["/^(contextmenu|mousedown|keydown)$/","preventDefault"],["error","browser-plugin"],["/select|copy|contextmenu/"],["/cut|copy|paste|contextmenu/"],["keydown","123"],["mousedown","undefined","elements","body"],["afterKeydown"],["keydown","void"],["copy","void"],["load","ad-wrap"],["/contextmenu|selectstart|dragstart/"],["copy","","elements","#__next"],["DOMContentLoaded","style.display"],["copy","clipboardData"],["visibilitychange","dispatch"],["copy","linkPrefixMessage"],["selectionchange",".html"],["contextmenu","return\"undefined\""],["keydown","||"]];
const hostnamesMap = new Map([["nationalgeographic.com",[0,6]],["medium.com",0],["artsy.net",0],["boards.net",0],["freeforums.net",0],["proboards.com",0],["todaysparent.com",1],["straitstimes.com",1],["dlnews.com",1],["zaui.com",1],["worldpopulationreview.com",1],["scribd.com",1],["s0urce.io",2],["streambolt.tv",3],["bmovies.*",3],["filefox.cc",4],["uol.com.br",5],["gazetadopovo.com.br",5],["indiatimes.com",5],["odiario.com",5],["otempo.com.br",5],["estadao.com.br",5],["ofuxico.com.br",5],["pentruea.com",5],["ciberduvidas.iscte-iul.pt",5],["globo.com",5],["citas.in",5],["blitzrechner.de",5],["emailfake.com",5],["lyrical-nonsense.com",5],["mediafax.ro",5],["economica.net",5],["polsatnews.pl",5],["novagente.pt",5],["arlinadzgn.com",5],["bilibili.com",[5,58]],["nowcoder.com",5],["libertatea.ro",5],["erinsakura.com",5],["yuque.com",5],["deepl.com",5],["digi24.ro",5],["onna.kr",5],["ziare.com",5],["agrointel.ro",5],["skyozora.com",5],["milenio.com",5],["veneto.info",5],["edurev.in",5],["transinfo.pl",5],["news.17173.com",5],["chowhound.com",5],["explore.com",5],["foodie.com",5],["foodrepublic.com",5],["glam.com",5],["grunge.com",5],["healthdigest.com",5],["housedigest.com",5],["looper.com",5],["mashed.com",5],["moneydigest.com",5],["nickiswift.com",5],["outdoorguide.com",5],["slashfilm.com",5],["slashgear.com",5],["tastingtable.com",5],["thedailymeal.com",5],["thelist.com",5],["women.com",5],["wrestlinginc.com",5],["abril.com.br",5],["sarthaks.com",5],["delfi.lt",5],["pendulumedu.com",5],["bloomberglinea.com",5],["bloomberglinea.com.br",5],["peliculas24.me",6],["roztoczanskipn.pl",6],["economictimes.indiatimes.com",6],["dzwignice.info",6],["script-stack.com",[6,40]],["mio.to",6],["husseinezzat.com",[6,14]],["taxo-acc.pl",6],["portalwrc.pl",6],["lublin.eu",6],["mangaku.*",6],["dddance.party",6],["kapiert.de",6],["hitcena.pl",6],["tv-asahi.co.jp",6],["digitalfernsehen.de",6],["suzylu.co.uk",6],["music.apple.com",6],["skidrowcodex.net",6],["dood.*",6],["ds2play.com",6],["ds2video.com",6],["d0o0d.com",6],["vsco.co",6],["festival-cannes.com",6],["strcloud.in",6],["streamtape.*",6],["ufret.jp",6],["thenekodark.com",6],["artesacro.org",6],["poli-vsp.ru",6],["polyvsp.ru",6],["ananweb.jp",6],["daimangajiten.com",6],["digital.lasegunda.com",6],["hibiki-radio.jp",6],["garyfeinbergphotography.com",6],["clubulbebelusilor.ro",6],["gplinks.co",6],["ifdreamscametrue.com",6],["marksandspencer.com",6],["asiatv.*",6],["stowarzyszenie-impuls.eu",6],["viveretenerife.com",6],["oferty.dsautomobiles.pl",6],["wzamrani.com",6],["citroen.pl",6],["peugeot.pl",6],["wirtualnyspac3r.pl",6],["antena3.com",6],["lasexta.com",6],["pashplus.jp",6],["upvideo.to",6],["kpopsea.com",6],["cnki.net",6],["wpchen.net",6],["hongxiu.com",6],["readnovel.com",6],["uihtm.com",6],["uslsoftware.com",6],["rule34hentai.net",6],["cloudemb.com",6],["news24.jp",6],["gaminplay.com",6],["njjzxl.net",6],["voe.sx",[6,67]],["voe-unblock.com",[6,67]],["scrolller.com",6],["cocomanga.com",6],["nusantararom.org",[6,73]],["virpe.cc",6],["pobre.tv",[6,73]],["ukrainashop.com",6],["celtadigital.com",6],["matzoo.pl",6],["asia2tv.cn",6],["labs.j-novel.club",6],["turbo1.co",6],["futbollatam.com",6],["read.amazon.com",6],["box-manga.com",6],["the-masters-voice.com",6],["hemas.pl",6],["accgroup.vn",6],["btvnovinite.bg",6],["allcryptoz.net",6],["crewbase.net",6],["crewus.net",6],["shinbhu.net",6],["shinchu.net",6],["thumb8.net",6],["thumb9.net",6],["topcryptoz.net",6],["uniqueten.net",6],["ultraten.net",6],["cloudcomputingtopics.net",6],["bianity.net",6],["coinsparty.com",6],["postype.com",6],["lofter.com",6],["hentaihaven.xxx",6],["espn.com",6],["4media.com",6],["przegladpiaseczynski.pl",6],["freewaysintl.com",6],["cool-etv.net",6],["j91.asia",6],["sgd.de",6],["bg-gledai.*",6],["dicasfinanceirasbr.com",6],["dicasdevalor.net",6],["dicasdefinancas.net",6],["guiasaude.info",6],["felizemforma.com",6],["financasdeouro.com",6],["mangaschan.net",6],["sssscanlator.com",6],["nightscans.net",6],["cypherscans.xyz",6],["twitchemotes.com",6],["smartkhabrinews.com",6],["streamvid.net",6],["mkv-pastes.com",6],["ipphone-warehouse.com",[6,106,107,108]],["freewatchtv.top",6],["gdplayertv.*",6],["mixstreams.top",6],["tvfreemium.top",6],["duracell.de",6],["knshow.com",7],["jusbrasil.com.br",8],["descarga-animex.*",9],["tastycookery.com",10],["techsupportall.com",11],["lugarcerto.com.br",12],["satcesc.com",13],["animatedshows.to",13],["miraculous.to",[13,34]],["jootc.com",14],["operatorsekolahdbn.com",14],["wawlist.com",14],["teachoo.com",14],["statelibrary.us",15],["tabonitobrasil.*",16],["anisubindo.*",16],["bigulnews.tv",17],["m.youtube.com",18],["news.chosun.com",19],["androidweblog.com",20],["cronista.com",21],["fcportables.com",22],["venea.net",23],["uta-net.com",24],["downloadtutorials.net",[24,40]],["blog.naver.com",24],["myschool-eng.com",25],["orangespotlight.com",26],["th-world.com",[26,45]],["tepat.id",27],["itvn.pl",28],["itvnextra.pl",28],["kuchniaplus.pl",28],["miniminiplus.pl",28],["player.pl",28],["ttv.pl",28],["tvn.pl",28],["tvn24.pl",28],["tvn24bis.pl",28],["tvn7.pl",28],["tvnfabula.pl",28],["tvnstyle.pl",28],["tvnturbo.pl",28],["x-link.pl",28],["x-news.pl",28],["kickante.com.br",29],["thestar.com.my",29],["corriereadriatico.it",29],["ilsole24ore.com",29],["thehouseofportable.com",30],["ntvspor.net",30],["book.zhulang.com",30],["tadu.com",30],["selfstudyhistory.com",31],["lokercirebon.com",32],["avdelphi.com",33],["maxstream.video",34],["wstream.*",34],["wpb.shueisha.co.jp",34],["tiktok.com",34],["vedantu.com",34],["zsti.zsti.civ.pl",34],["kathleenmemberhistory.com",[34,68]],["nonesnanking.com",[34,68]],["prefulfilloverdoor.com",[34,68]],["phenomenalityuniform.com",[34,68]],["nectareousoverelate.com",[34,68]],["timberwoodanotia.com",[34,68]],["strawberriesporail.com",[34,68]],["valeronevijao.com",[34,68]],["cigarlessarefy.com",[34,68]],["figeterpiazine.com",[34,68]],["yodelswartlike.com",[34,68]],["generatesnitrosate.com",[34,68]],["crownmakermacaronicism.com",[34,68]],["chromotypic.com",[34,68]],["gamoneinterrupted.com",[34,68]],["metagnathtuggers.com",[34,68]],["wolfdyslectic.com",[34,68]],["rationalityaloelike.com",[34,68]],["sizyreelingly.com",[34,68]],["simpulumlamerop.com",[34,68]],["urochsunloath.com",[34,68]],["monorhinouscassaba.com",[34,68]],["counterclockwisejacky.com",[34,68]],["35volitantplimsoles5.com",[34,68]],["scatch176duplicities.com",[34,68]],["antecoxalbobbing1010.com",[34,68]],["boonlessbestselling244.com",[34,68]],["cyamidpulverulence530.com",[34,68]],["guidon40hyporadius9.com",[34,68]],["449unceremoniousnasoseptal.com",[34,68]],["19turanosephantasia.com",[34,68]],["30sensualizeexpression.com",[34,68]],["321naturelikefurfuroid.com",[34,68]],["745mingiestblissfully.com",[34,68]],["availedsmallest.com",[34,68]],["greaseball6eventual20.com",[34,68]],["toxitabellaeatrebates306.com",[34,68]],["20demidistance9elongations.com",[34,68]],["audaciousdefaulthouse.com",[34,68]],["fittingcentermondaysunday.com",[34,68]],["fraudclatterflyingcar.com",[34,68]],["launchreliantcleaverriver.com",[34,68]],["matriculant401merited.com",[34,68]],["realfinanceblogcenter.com",[34,68]],["reputationsheriffkennethsand.com",[34,68]],["telyn610zoanthropy.com",[34,68]],["tubelessceliolymph.com",[34,68]],["tummulerviolableness.com",[34,68]],["un-block-voe.net",[34,68]],["v-o-e-unblock.com",[34,68]],["voe-un-block.com",[34,68]],["voe-unblock.*",[34,68]],["voeun-block.net",[34,68]],["voeunbl0ck.com",[34,68]],["voeunblck.com",[34,68]],["voeunblk.com",[34,68]],["voeunblock3.com",[34,68]],["audiotools.pro",34],["magesy.blog",34],["magesypro.pro",34],["audioztools.com",34],["www.ntv.co.jp",34],["faptiti.com",34],["wormate.io",34],["pobre.*",[34,83]],["selfstudys.com",34],["adslink.pw",34],["jpopsingles.eu",34],["vinstartheme.com",[34,89]],["leakedzone.com",[34,92]],["fjordd.com",34],["seriesperu.com",34],["zippyupload.com",34],["3xyaoi.com",34],["hotleak.vip",[34,104]],["hotleaks.tv",[34,104]],["topfaps.com",[34,104]],["foxteller.com",[34,116]],["alphapolis.co.jp",35],["blog.csdn.net",35],["juejin.cn",35],["sweetslyrics.com",35],["thegatewaypundit.com",36],["thegearhunt.com",37],["jfdb.jp",38],["loginhit.com.ng",38],["charbelnemnom.com",38],["bphimmoi.net",38],["goodhub.xyz",38],["thotsbay.tv",38],["topperlearning.com",38],["edailybuzz.com",39],["zhihu.com",39],["qidian.com",39],["invado.pl",39],["webnovel.com",39],["skuola.net",39],["marriedbiography.com",39],["bajecnavareska.sk",40],["lunas.pro",40],["onlinefreecourse.net",40],["pisr.org",40],["uplod.net",40],["thewpclub.net",40],["thememazing.com",40],["themebanks.com",40],["mesquitaonline.com",40],["skandynawiainfo.pl",40],["onlinecoursebay.com",40],["dreamsfriend.com",41],["trakteer.id",42],["699pic.com",42],["promobit.com.br",43],["techjunkie.com",43],["zerohedge.com",43],["1mg.com",43],["khou.com",43],["10tv.com",43],["kutub3lpdf.com",44],["sklep-agroland.pl",46],["polagriparts.pl",47],["nordkorea-info.de",48],["geotips.net",49],["hardcoregames.ca",50],["lataifas.ro",51],["daotranslate.*",51],["toppremiumpro.com",52],["wattpad.com",53],["starbene.it",54],["fauxid.com",55],["androidtvbox.eu",56],["nicematin.com",57],["yamibo.com",59],["fimfiction.net",60],["moegirl.org.cn",61],["bbs.mihoyo.com",62],["peekme.cc",63],["ihbarweb.org.tr",64],["baixedetudo.net.br",65],["gardenia.net",66],["wpking.in",69],["hollywoodmask.com",70],["mbalib.com",70],["wenku.baidu.com",71],["mooc.chaoxing.com",72],["www-daftarharga.blogspot.com",73],["realpython.com",74],["linkmate.xyz",75],["cristelageorgescu.ro",76],["privivkainfo.ru",77],["frameboxxindore.com",77],["descargatepelis.com",78],["vercalendario.info",79],["zipcode.com.ng",79],["slideshare.net",80],["poipiku.com",81],["postcourier.com.pg",82],["gmx.co.uk",84],["gmx.com",84],["likey.me",85],["broflix.cc",85],["bestcam.tv",85],["wallpaperaccess.com",86],["shortform.com",87],["joysound.com",88],["colors.sonicthehedgehog.com",90],["senpa.io",91],["txori.com",91],["mangareader.to",91],["comikey.com",93],["saikaiscans.net",94],["translate.goog",95],["oreilly.com",96],["alfred.camera",97],["wrosinski.pl",98],["wtsp.com",99],["starzunion.com",100],["lowcygier.pl",101],["studiestoday.com",102],["studyrankers.com",103],["bharatavani.in",103],["vidsrc.*",104],["embed.su",104],["bitcine.app",104],["cineby.app",104],["tv.verizon.com",104],["sussytoons.*",104],["bongdaplus.vn",105],["timeanddate.com",109],["naver.com",110],["leetcode.cn",111],["unknowncheats.me",112],["cnblogs.com",113],["cnn.com",114],["kentucky.com",115],["francis-bacon.com",117],["animekai.to",118],["animekai.bz",118],["anigo.to",118]]);
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
