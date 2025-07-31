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
const argsList = [["scroll"],["/^(mouseout|mouseleave)$/"],["/^(contextmenu|copy)$/"],["blur"],["copy"],["contextmenu"],["/^(?:contextmenu|copy|selectstart)$/"],["/^(?:contextmenu|copy)$/","preventDefault"],["/^(?:contextmenu|keydown)$/"],["/^(?:contextmenu|copy|keydown)$/"],["mouseout","pop"],["/^(?:keyup|keydown)$/"],["keydown"],["keydown","disable_in_input"],["keydown","preventDefault"],["/contextmenu|keydown|keyup|copy/"],["visibilitychange","/bgmobile|\\{\\w\\.\\w+\\(\\)\\}/"],["copy","getSelection"],["","t.preventDefault"],["copy","replaceCopiedText"],["/^(contextmenu|copy|dragstart|selectstart)$/"],["","ads"],["/contextmenu|selectstart|copy/"],["/contextmenu|copy|keydown/"],["/contextmenu|select|copy/"],["/^(contextmenu|keydown)$/"],["contextmenu","a"],["mouseleave"],["/contextmenu|selectstart/"],["dragstart|keydown/"],["/contextmenu|keydown|dragstart/"],["","_0x"],["contextmenu","preventDefault"],["copy","preventDefault"],["","adtoniq"],["/^(?:contextmenu|copy|keydown|mousedown)$/"],["/contextmenu|keydown/"],["devtoolschange"],["/contextmenu|copy/"],["","mdp"],["/contextmenu|cut|copy|paste/"],["/contextmenu|mousedown/"],["mouseout"],["/contextmenu|copy|selectstart/"],["","0x"],["/^(?:contextmenu|dragstart|selectstart)$/"],["/^(?:contextmenu|copy)$/"],["/dragstart|keyup|keydown/"],["/keyup|keydown/","wpcc"],["/contextmenu|cut|copy|keydown/"],["","undefined"],["/contextmenu|selectstart|copy|dragstart/"],["/copy|dragstart/"],["/copy|contextmenu/"],["error"],["dragstart"],["","AdB"],["selectionchange","quill.emitter"],["/contextmenu|selectstart|select|copy|dragstart/"],["load","adLazy"],["copy","jQuery!==\"undefined\""],["selectstart"],["/^(?:copy|paste)$/","undefined"],["/copy|keydown/"],["/copy|cut|selectstart/"],["/keydown|keyup/","keyCode"],["keydown","disabledEvent"],["/copy|cut|paste|selectstart/"],["/contextmenu|dragstart|keydown/","event.dispatch.apply"],["beforepaste"],["","keyCode"],["DOMContentLoaded","rprw"],["","key"],["","ctrlKey"],["copy","pagelink"],["/keydown|mousedown/"],["copy","Source"],["mouseleave","scribd_ad"],["/contextmenu|copy|drag|dragstart/"],["mousedown","","elements",".entry-content"],["/contextmenu|keydown|keypress|copy/"],["","blockFuckingEverything"],["mouseout","openLayer"],["/contextmenu|keydown/","preventDefault"],["mousedown","dispatch"],["/contextmenu|mousedown/","return\"undefined\""],["DOMContentLoaded","ready"],["keydown","disabledKeys"],["DOMContentLoaded","load"],["contextmenu","_0x"],["keydown","keyCode"],["contextmenu","undefined"],["contextmenu","[native code]"],["/contextmenu|keyup|keydown/"],["mouseout","cookie"],["DOMContentLoaded","ads"],["rocket-DOMContentLoaded","bind(document)"],["mouseout","innerHeight"],["/^(contextmenu|mousedown|keydown)$/","preventDefault"],["error","browser-plugin"],["/select|copy|contextmenu/"],["/cut|copy|paste|contextmenu/"],["keydown","123"],["mousedown","undefined","elements","body"],["afterKeydown"],["keydown","void"],["copy","void"],["load","ad-wrap"],["/contextmenu|selectstart|dragstart/"],["copy","","elements","#__next"],["DOMContentLoaded","style.display"],["copy","clipboardData"],["visibilitychange","dispatch"],["copy","linkPrefixMessage"],["selectionchange",".html"],["contextmenu","return\"undefined\""],["keydown","||"],["mousedown","function(t)"]];
const hostnamesMap = new Map([["nationalgeographic.com",[0,5]],["medium.com",0],["artsy.net",0],["boards.net",0],["freeforums.net",0],["proboards.com",0],["todaysparent.com",1],["straitstimes.com",1],["dlnews.com",1],["zaui.com",1],["worldpopulationreview.com",1],["scribd.com",1],["s0urce.io",2],["filefox.cc",3],["uol.com.br",4],["gazetadopovo.com.br",4],["indiatimes.com",4],["odiario.com",4],["otempo.com.br",4],["estadao.com.br",4],["ofuxico.com.br",4],["pentruea.com",4],["ciberduvidas.iscte-iul.pt",4],["globo.com",4],["citas.in",4],["blitzrechner.de",4],["emailfake.com",4],["lyrical-nonsense.com",4],["mediafax.ro",4],["economica.net",4],["polsatnews.pl",4],["novagente.pt",4],["arlinadzgn.com",4],["bilibili.com",[4,57]],["nowcoder.com",4],["libertatea.ro",4],["erinsakura.com",4],["yuque.com",4],["deepl.com",4],["digi24.ro",4],["onna.kr",4],["ziare.com",4],["agrointel.ro",4],["milenio.com",4],["veneto.info",4],["edurev.in",4],["transinfo.pl",4],["news.17173.com",4],["chowhound.com",4],["explore.com",4],["foodie.com",4],["foodrepublic.com",4],["glam.com",4],["grunge.com",4],["healthdigest.com",4],["housedigest.com",4],["looper.com",4],["mashed.com",4],["moneydigest.com",4],["nickiswift.com",4],["outdoorguide.com",4],["slashfilm.com",4],["slashgear.com",4],["tastingtable.com",4],["thedailymeal.com",4],["thelist.com",4],["women.com",4],["wrestlinginc.com",4],["abril.com.br",4],["sarthaks.com",4],["delfi.lt",4],["pendulumedu.com",4],["bloomberglinea.com",4],["bloomberglinea.com.br",4],["peliculas24.me",5],["roztoczanskipn.pl",5],["economictimes.indiatimes.com",5],["dzwignice.info",5],["script-stack.com",[5,39]],["mio.to",5],["husseinezzat.com",[5,12]],["taxo-acc.pl",5],["portalwrc.pl",5],["lublin.eu",5],["mangaku.*",5],["dddance.party",5],["kapiert.de",5],["hitcena.pl",5],["tv-asahi.co.jp",5],["digitalfernsehen.de",5],["suzylu.co.uk",5],["music.apple.com",5],["skidrowcodex.net",5],["dood.*",5],["ds2play.com",5],["ds2video.com",5],["d0o0d.com",5],["vsco.co",5],["festival-cannes.com",5],["strcloud.in",5],["streamtape.*",5],["ufret.jp",5],["thenekodark.com",5],["artesacro.org",5],["poli-vsp.ru",5],["polyvsp.ru",5],["ananweb.jp",5],["daimangajiten.com",5],["digital.lasegunda.com",5],["hibiki-radio.jp",5],["garyfeinbergphotography.com",5],["clubulbebelusilor.ro",5],["gplinks.co",5],["ifdreamscametrue.com",5],["marksandspencer.com",5],["asiatv.*",5],["stowarzyszenie-impuls.eu",5],["viveretenerife.com",5],["oferty.dsautomobiles.pl",5],["wzamrani.com",5],["citroen.pl",5],["peugeot.pl",5],["wirtualnyspac3r.pl",5],["antena3.com",5],["lasexta.com",5],["pashplus.jp",5],["kpopsea.com",5],["cnki.net",5],["wpchen.net",5],["hongxiu.com",5],["readnovel.com",5],["uihtm.com",5],["uslsoftware.com",5],["rule34hentai.net",5],["news24.jp",5],["gaminplay.com",5],["njjzxl.net",5],["voe.sx",[5,65]],["voe-unblock.com",[5,65]],["scrolller.com",5],["cocomanga.com",5],["nusantararom.org",[5,70]],["virpe.cc",5],["ukrainashop.com",5],["celtadigital.com",5],["matzoo.pl",5],["asia2tv.com",5],["labs.j-novel.club",5],["turbo1.co",5],["futbollatam.com",5],["read.amazon.com",5],["box-manga.com",5],["the-masters-voice.com",5],["hemas.pl",5],["accgroup.vn",5],["btvnovinite.bg",5],["allcryptoz.net",5],["crewbase.net",5],["crewus.net",5],["shinbhu.net",5],["shinchu.net",5],["topcryptoz.net",5],["uniqueten.net",5],["ultraten.net",5],["cloudcomputingtopics.net",5],["bianity.net",5],["coinsparty.com",5],["postype.com",5],["lofter.com",5],["hentaihaven.xxx",5],["espn.com",5],["4media.com",5],["przegladpiaseczynski.pl",5],["freewaysintl.com",5],["cool-etv.net",5],["j91.asia",5],["sgd.de",5],["bg-gledai.*",5],["dicasfinanceirasbr.com",5],["dicasdevalor.net",5],["dicasdefinancas.net",5],["guiasaude.info",5],["felizemforma.com",5],["financasdeouro.com",5],["mangaschan.net",5],["sssscanlator.com",5],["cypherscans.xyz",5],["twitchemotes.com",5],["smartkhabrinews.com",5],["streamvid.net",5],["mkv-pastes.com",5],["ipphone-warehouse.com",[5,104,105,106]],["freewatchtv.top",5],["gdplayertv.*",5],["mixstreams.top",5],["tvfreemium.top",5],["duracell.de",5],["all4pets.com.pl",5],["knshow.com",6],["jusbrasil.com.br",7],["descarga-animex.*",8],["techsupportall.com",9],["lugarcerto.com.br",10],["satcesc.com",11],["miraculous.to",[11,32]],["jootc.com",12],["operatorsekolahdbn.com",12],["wawlist.com",12],["teachoo.com",12],["statelibrary.us",13],["tabonitobrasil.*",14],["anisubindo.*",14],["bigulnews.tv",15],["m.youtube.com",16],["news.chosun.com",17],["androidweblog.com",18],["cronista.com",19],["fcportables.com",20],["venea.net",21],["uta-net.com",22],["downloadtutorials.net",[22,39]],["blog.naver.com",22],["myschool-eng.com",23],["orangespotlight.com",24],["th-world.com",[24,44]],["tepat.id",25],["itvn.pl",26],["itvnextra.pl",26],["kuchniaplus.pl",26],["miniminiplus.pl",26],["player.pl",26],["ttv.pl",26],["tvn.pl",26],["tvn24.pl",26],["tvn24bis.pl",26],["tvn7.pl",26],["tvnfabula.pl",26],["tvnstyle.pl",26],["tvnturbo.pl",26],["x-link.pl",26],["x-news.pl",26],["kickante.com.br",27],["thestar.com.my",27],["corriereadriatico.it",27],["ilsole24ore.com",27],["thehouseofportable.com",28],["ntvspor.net",28],["book.zhulang.com",28],["tadu.com",28],["selfstudyhistory.com",29],["lokercirebon.com",30],["avdelphi.com",31],["maxstream.video",32],["wstream.*",32],["wpb.shueisha.co.jp",32],["tiktok.com",32],["vedantu.com",32],["zsti.zsti.civ.pl",32],["kathleenmemberhistory.com",[32,66]],["nonesnanking.com",[32,66]],["phenomenalityuniform.com",[32,66]],["valeronevijao.com",[32,66]],["figeterpiazine.com",[32,66]],["yodelswartlike.com",[32,66]],["generatesnitrosate.com",[32,66]],["gamoneinterrupted.com",[32,66]],["metagnathtuggers.com",[32,66]],["wolfdyslectic.com",[32,66]],["rationalityaloelike.com",[32,66]],["sizyreelingly.com",[32,66]],["urochsunloath.com",[32,66]],["monorhinouscassaba.com",[32,66]],["boonlessbestselling244.com",[32,66]],["cyamidpulverulence530.com",[32,66]],["guidon40hyporadius9.com",[32,66]],["30sensualizeexpression.com",[32,66]],["greaseball6eventual20.com",[32,66]],["toxitabellaeatrebates306.com",[32,66]],["20demidistance9elongations.com",[32,66]],["audaciousdefaulthouse.com",[32,66]],["fittingcentermondaysunday.com",[32,66]],["launchreliantcleaverriver.com",[32,66]],["matriculant401merited.com",[32,66]],["realfinanceblogcenter.com",[32,66]],["telyn610zoanthropy.com",[32,66]],["un-block-voe.net",[32,66]],["v-o-e-unblock.com",[32,66]],["voe-un-block.com",[32,66]],["voe-unblock.*",[32,66]],["voeun-block.net",[32,66]],["voeunbl0ck.com",[32,66]],["voeunblck.com",[32,66]],["voeunblk.com",[32,66]],["voeunblock3.com",[32,66]],["audiotools.pro",32],["magesy.blog",32],["www.ntv.co.jp",32],["faptiti.com",32],["wormate.io",32],["pobre.*",[32,81]],["selfstudys.com",32],["adslink.pw",32],["jpopsingles.eu",32],["vinstartheme.com",[32,87]],["leakedzone.com",[32,90]],["fjordd.com",32],["seriesperu.com",32],["zippyupload.com",32],["3xyaoi.com",32],["hotleak.vip",[32,102]],["hotleaks.tv",[32,102]],["topfaps.com",[32,102]],["foxteller.com",[32,114]],["alphapolis.co.jp",33],["blog.csdn.net",33],["juejin.cn",33],["sweetslyrics.com",33],["thegatewaypundit.com",34],["thegearhunt.com",35],["jfdb.jp",36],["loginhit.com.ng",36],["charbelnemnom.com",36],["bphimmoi.net",36],["goodhub.xyz",36],["thotsbay.tv",36],["topperlearning.com",36],["bmovies.*",37],["edailybuzz.com",38],["zhihu.com",38],["qidian.com",38],["invado.pl",38],["webnovel.com",38],["skuola.net",38],["marriedbiography.com",38],["lunas.pro",39],["onlinefreecourse.net",39],["pisr.org",39],["uplod.net",39],["thewpclub.net",39],["thememazing.com",39],["themebanks.com",39],["mesquitaonline.com",39],["skandynawiainfo.pl",39],["onlinecoursebay.com",39],["dreamsfriend.com",40],["trakteer.id",41],["699pic.com",41],["promobit.com.br",42],["techjunkie.com",42],["zerohedge.com",42],["1mg.com",42],["khou.com",42],["10tv.com",42],["kutub3lpdf.com",43],["sklep-agroland.pl",45],["polagriparts.pl",46],["nordkorea-info.de",47],["geotips.net",48],["hardcoregames.ca",49],["lataifas.ro",50],["daotranslate.*",50],["toppremiumpro.com",51],["wattpad.com",52],["starbene.it",53],["fauxid.com",54],["androidtvbox.eu",55],["nicematin.com",56],["yamibo.com",58],["fimfiction.net",59],["moegirl.org.cn",60],["peekme.cc",61],["ihbarweb.org.tr",62],["baixedetudo.net.br",63],["gardenia.net",64],["hollywoodmask.com",67],["mbalib.com",67],["wenku.baidu.com",68],["mooc.chaoxing.com",69],["www-daftarharga.blogspot.com",70],["realpython.com",71],["linkmate.xyz",72],["cristelageorgescu.ro",73],["privivkainfo.ru",74],["frameboxxindore.com",74],["descargatepelis.com",75],["vercalendario.info",76],["zipcode.com.ng",76],["slideshare.net",77],["poipiku.com",78],["jnews5.com",79],["postcourier.com.pg",80],["gmx.co.uk",82],["gmx.com",82],["likey.me",83],["broflix.cc",83],["bestcam.tv",83],["wallpaperaccess.com",84],["shortform.com",85],["joysound.com",86],["colors.sonicthehedgehog.com",88],["senpa.io",89],["txori.com",89],["mangareader.to",89],["comikey.com",91],["saikaiscans.net",92],["translate.goog",93],["oreilly.com",94],["alfred.camera",95],["wrosinski.pl",96],["wtsp.com",97],["starzunion.com",98],["lowcygier.pl",99],["studiestoday.com",100],["studyrankers.com",101],["bharatavani.in",101],["vidsrc.*",102],["embed.su",102],["bitcine.app",102],["cineby.app",102],["tv.verizon.com",102],["sussytoons.*",102],["bongdaplus.vn",103],["timeanddate.com",107],["naver.com",108],["leetcode.cn",109],["unknowncheats.me",110],["cnblogs.com",111],["cnn.com",112],["kentucky.com",113],["francis-bacon.com",115],["animekai.*",116],["anigo.to",116],["auto-doc.*",117],["autodoc.*",117],["autodoc24.*",117],["topautoosat.fi",117],["autoteiledirekt.de",117],["autoczescionline24.pl",117],["tuttoautoricambi.it",117],["onlinecarparts.co.uk",117],["autoalkatreszek24.hu",117],["autodielyonline24.sk",117],["reservdelar24.se",117],["pecasauto24.pt",117],["reservedeler24.co.no",117],["piecesauto24.lu",117],["rezervesdalas24.lv",117],["besteonderdelen.nl",117],["recambioscoche.es",117],["antallaktikaexartimata.gr",117],["piecesauto.fr",117],["teile-direkt.ch",117]]);
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
