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
(function uBOL_preventSetInterval() {

/******************************************************************************/

function preventSetInterval(
    needleRaw = '',
    delayRaw = ''
) {
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('prevent-setInterval', needleRaw, delayRaw);
    const needleNot = needleRaw.charAt(0) === '!';
    const reNeedle = safe.patternToRegex(needleNot ? needleRaw.slice(1) : needleRaw);
    const range = new RangeParser(delayRaw);
    proxyApplyFn('setInterval', function(context) {
        const { callArgs } = context;
        const a = callArgs[0] instanceof Function
            ? safe.String(safe.Function_toString(callArgs[0]))
            : safe.String(callArgs[0]);
        const b = callArgs[1];
        if ( needleRaw === '' && range.unbound() ) {
            safe.uboLog(logPrefix, `Called:\n${a}\n${b}`);
            return context.reflect();
        }
        if ( reNeedle.test(a) !== needleNot && range.test(b) ) {
            callArgs[0] = function(){};
            safe.uboLog(logPrefix, `Prevented:\n${a}\n${b}`);
        }
        return context.reflect();
    });
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

class RangeParser {
    constructor(s) {
        this.not = s.charAt(0) === '!';
        if ( this.not ) { s = s.slice(1); }
        if ( s === '' ) { return; }
        const pos = s.indexOf('-');
        if ( pos !== 0 ) {
            this.min = this.max = parseInt(s, 10) || 0;
        }
        if ( pos !== -1 ) {
            this.max = parseInt(s.slice(pos + 1), 10) || Number.MAX_SAFE_INTEGER;
        }
    }
    unbound() {
        return this.min === undefined && this.max === undefined;
    }
    test(v) {
        const n = Math.min(Math.max(Number(v) || 0, 0), Number.MAX_SAFE_INTEGER);
        if ( this.min === this.max ) {
            return (this.min === undefined || n === this.min) !== this.not;
        }
        if ( this.min === undefined ) {
            return (n <= this.max) !== this.not;
        }
        if ( this.max === undefined ) {
            return (n >= this.min) !== this.not;
        }
        return (n >= this.min && n <= this.max) !== this.not;
    }
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
const argsList = [["await"],["/1===|\\?void|&&/"],["setInterval"],["fireEvent","500"],["header_menu_abvs","10000"],["adb"],["/0x|google|ecoded|==/"],["readyState"],["_0x"],["adblockerModal","1000"],["user=null","1000"],["_checkBait"],["()","5000"],["_$","12345"],[".append","1000"],["visibility","1000"],["onAdVideoStart"],["/_0x|debug/"],["complete","50"],["document.readyState"],[".submit"],["0x"],["adblocker"],["visibility"],["iframe"],["adsbygoogle"],["innerHTML"],["?key="],["notifyExec"],["/^/"],["height"],["adblock"],["debugger"],[".offsetHeight"],["clearInterval(i)","1000"],["document.getElementById","10000"],["daadb"],["!display"],["afStorage"],["debug"],["ads"],["Click"],["childNodes"],["goog"],["offsetHeight"],[".hide"],["onerror"],["show"],["AB.html"],["analytics.initialized"],["banner"],["/0x|sandCheck/"],["a0b"],["/_0x|dtaf/"],["pop"],["detector"],["aclib"],["/adex|loadAds|adCollapsedCount|ad-?block/i"],["/adb/i"],["EFFECTIVE_APPS_GCB_BLOCKED_MESSAGE"],["blogherads"]];
const hostnamesMap = new Map([["cdn.gledaitv.*",0],["th.gl",1],["businessinsider.com",2],["tvtoday.de",3],["vaughn.live",4],["economictimes.indiatimes.com",5],["mylink.*",6],["my1ink.*",6],["myl1nk.*",6],["myli3k.*",6],["frprn.com",7],["gogoanimetv.*",8],["xsanime.com",8],["javfull.net",8],["f2movies.to",8],["ipacrack.com",8],["hulkshare.com",9],["faucetcrypto.com",10],["giveawayoftheday.com",11],["uploadbox.io",12],["megafile.io",12],["myjest.com",13],["4shared.com",14],["streameast.*",15],["thestreameast.*",15],["getfreecourses.*",15],["sombex.com",15],["forex-trnd.com",15],["vidlii.com",15],["verteleseriesonline.com",15],["sukidesuost.info",15],["ricettafitness.com",15],["freenote.biz",15],["womenreality.com",15],["portable4pc.com",15],["localizaagencia.com",15],["themes-dl.com",15],["anomize.xyz",15],["casos-aislados.com",15],["freeomovie.to",15],["myviptuto.com",15],["novelasligera.com",15],["rahim-soft.com",15],["dayoftheweek.org",15],["lookimg.com",15],["aemenstore.com",15],["cazzette.com",15],["jncojeans.com",15],["kiemlua.com",15],["kingsleynyc.com",15],["link1s.*",15],["lucidcam.com",15],["medcpu.com",15],["nguyenvanbao.com",15],["nousdecor.com",15],["pennbookcenter.com",15],["restorbio.com",15],["staaker.com",15],["necksdesign.com",15],["larvelfaucet.com",15],["quicasting.it",15],["iptunnels.com",15],["appsfullversion.com",15],["davidgalaxia.com",15],["anonymous-links.com",15],["planet-streaming1.com",15],["unionmanga.xyz",15],["vviruslove.com",15],["unity3diy.blogspot.com",15],["checkfiletype.com",15],["santoinferninho.com",15],["angeloyeo.github.io",15],["csgo-ranks.com",15],["royalkom.com",15],["super-ethanol.com",15],["surf-trx.com",15],["samapkstore.com",15],["shortenbuddy.com",15],["adeth.cc",15],["swift4claim.com",15],["best-shopme.com",15],["tw-hkt.blogspot.com",15],["hugo3c.tw",15],["shortzzy.*",15],["androidtunado.com.br",15],["newsiqra.com",15],["dota2freaks.com",15],["how2pc.com",15],["weviral.org",15],["alltechnerd.com",15],["shoppinglys.blogspot.com",15],["fzm.*",15],["fzmovies.*",15],["komiktap.in",15],["8tm.net",15],["afasiaarchzine.com",15],["getpczone.com",15],["jaysndees.com",15],["mailocal2.xyz",15],["tqanime.com",15],["anime-saikou.com",15],["donghuanosekai.com",15],["jagoanssh.com",15],["pcso-lottoresults.com",15],["todoseriales1.blogspot.com",15],["omgexploits.com",15],["crazyblog.in",15],["short-zero.com",15],["akwam.*",15],["gifans.com",15],["xanimehub.com",15],["clk.asia",15],["imperialstudy.com",15],["skincarie.com",15],["khsm.io",15],["bg-gledai.*",15],["cheatsquad.gg",15],["crunchyroll.com",16],["extremereportbot.com",17],["tubepornclassic.com",[18,19]],["multiup.io",20],["multiup.org",20],["multiup.eu",20],["mangalist.org",21],["javcl.com",21],["gats.io",21],["videovard.*",21],["freereceivesms.com",21],["live.dragaoconnect.net",21],["techmuzz.com",22],["rmcmv.*",23],["lecourrier-du-soir.com",24],["thgss.com",25],["moviemakeronline.com",25],["soninow.com",25],["premid.app",26],["fileguard.cc",27],["thegadgetking.in",28],["zhlednito.cz",29],["girlsofdesire.org",29],["vrcmods.com",30],["adblockeronstape.*",31],["adblockplustape.*",31],["adblockstreamtape.*",31],["adblockstrtape.*",31],["adblockstrtech.*",31],["adblocktape.*",31],["advertisertape.com",31],["antiadtape.*",31],["gettapeads.com",31],["noblocktape.*",31],["stapadblockuser.*",31],["stape.*",31],["strcloud.*",31],["streamadblocker.*",31],["streamadblockplus.*",31],["streamnoads.com",31],["streamta.*",31],["streamtape.*",31],["streamtapeadblockuser.*",31],["strtape.*",31],["strtapeadblock.*",31],["strtapeadblocker.*",31],["strtpe.*",31],["tapeadsenjoyer.com",31],["tapeadvertisement.com",31],["tapeantiads.com",31],["tapeblocker.com",31],["tapelovesads.org",31],["tapenoads.com",31],["tapepops.com",31],["tapewithadblock.org",31],["watchadsontape.com",31],["gamezop.com",32],["filmoviplex.com",32],["beverfood.com",33],["laptrinhx.com",34],["sunhope.it",35],["openculture.com",36],["sushiscan.*",36],["clapway.com",36],["kawarthanow.com",36],["rollstroll.com",36],["007stockchat.com",36],["stockhideout.com",36],["radio.zone",36],["1cloudfile.com",37],["luckydice.net",38],["thedigitalfix.com",39],["erofound.com",40],["newscon.org",40],["animedb.in",40],["fastconverter.net",41],["expresskaszubski.pl",42],["gniewkowo.eu",42],["molotov.tv",43],["ios.codevn.net",44],["oxy.*",45],["wheelofgold.com",46],["davescomputertips.com",47],["chat.tchatche.com",48],["dvm360.com",49],["freshplaza.com",50],["hortidaily.com",50],["vidsrc.*",51],["work.ink",52],["dragontea.ink",53],["javsek.net",54],["ticketmaster.sg",55],["vidlink.pro",56],["servustv.com",57],["bilinovel.com",58],["policesecurity.com",59],["knowyourmeme.com",60]]);
const exceptionsMap = new Map([["oxy.edu",[45]]]);
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
    try { preventSetInterval(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
