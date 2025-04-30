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
const argsList = [["setInterval"],["fireEvent","500"],["header_menu_abvs","10000"],["adb"],["/0x|google|ecoded|==/"],["readyState"],["_0x"],["adblockerModal","1000"],["user=null","1000"],["_checkBait"],["()","5000"],["_$","12345"],[".append","1000"],["visibility","1000"],["onAdVideoStart"],["/_0x|debug/"],["complete","50"],["document.readyState"],[".submit"],["0x"],["adblocker"],["visibility"],["iframe"],["adsbygoogle"],["innerHTML"],["/^/"],["height"],["adblock"],["debugger"],["clearInterval(i)","1000"],["document.getElementById","10000"],["daadb"],["!display"],["afStorage"],["debug"],["ads"],["Click"],["href"],["goog"],["offsetHeight"],[".hide"],["onerror"],["location"],["location[_0x"],["show"],["AB.html"],["analytics.initialized"],["banner"],["/0x|sandCheck/"],["a0b"],["/_0x|dtaf/"],["NitroAds"],["pop"],["detector"],["blogherads"]];
const hostnamesMap = new Map([["businessinsider.com",0],["tvtoday.de",1],["vaughn.live",2],["economictimes.indiatimes.com",3],["mylink.*",4],["my1ink.*",4],["myl1nk.*",4],["myli3k.*",4],["frprn.com",5],["gogoanimetv.*",6],["xsanime.com",6],["javfull.net",6],["f2movies.to",6],["ipacrack.com",6],["king-shoot.io",6],["hulkshare.com",7],["faucetcrypto.com",8],["giveawayoftheday.com",9],["uploadbox.io",10],["megafile.io",10],["myjest.com",11],["4shared.com",12],["streameast.*",13],["thestreameast.*",13],["getfreecourses.*",13],["sombex.com",13],["forex-trnd.com",13],["vidlii.com",13],["verteleseriesonline.com",13],["akbardwi.my.id",13],["bg-gledai.*",13],["arabnaar.com",13],["sukidesuost.info",13],["ricettafitness.com",13],["freenote.biz",13],["womenreality.com",13],["portable4pc.com",13],["localizaagencia.com",13],["themes-dl.com",13],["anomize.xyz",13],["casos-aislados.com",13],["freeomovie.to",13],["myviptuto.com",13],["novelasligera.com",13],["hightqualityshop.com",13],["rahim-soft.com",13],["dayoftheweek.org",13],["text2voice.org",13],["lookimg.com",13],["graphicdesignresources.net",13],["veryfiles.com",13],["aemenstore.com",13],["byboe.com",13],["cazzette.com",13],["dataf.pro",13],["hookeaudio.com",13],["jncojeans.com",13],["kiemlua.com",13],["kingsleynyc.com",13],["link1s.*",13],["lucidcam.com",13],["marharo.com",13],["medcpu.com",13],["nguyenvanbao.com",13],["nousdecor.com",13],["pennbookcenter.com",13],["restorbio.com",13],["staaker.com",13],["necksdesign.com",13],["larvelfaucet.com",13],["quicasting.it",13],["iptunnels.com",13],["appsfullversion.com",13],["davidgalaxia.com",13],["anonymous-links.com",13],["planet-streaming1.com",13],["unionmanga.xyz",13],["vviruslove.com",13],["unity3diy.blogspot.com",13],["checkfiletype.com",13],["santoinferninho.com",13],["sociadrive.com",13],["angeloyeo.github.io",13],["csgo-ranks.com",13],["royalkom.com",13],["super-ethanol.com",13],["surf-trx.com",13],["samapkstore.com",13],["shortenbuddy.com",13],["adeth.cc",13],["submitclimb.com",13],["swift4claim.com",13],["best-shopme.com",13],["tw-hkt.blogspot.com",13],["hugo3c.tw",13],["shortzzy.*",13],["androidtunado.com.br",13],["midiextreme.com",13],["tellygossips.net",13],["newsiqra.com",13],["dota2freaks.com",13],["how2pc.com",13],["weviral.org",13],["alltechnerd.com",13],["shoppinglys.blogspot.com",13],["fzm.*",13],["fzmovies.*",13],["komiktap.in",13],["adobezii.com",13],["8tm.net",13],["afasiaarchzine.com",13],["getpczone.com",13],["secretsdeepweb.blogspot.com",13],["kiwiexploits.com",13],["jaysndees.com",13],["mailocal2.xyz",13],["tqanime.com",13],["devcourseweb.com",13],["anime-saikou.com",13],["donghuanosekai.com",13],["jagoanssh.com",13],["pcso-lottoresults.com",13],["todoseriales1.blogspot.com",13],["cryptslice.com",13],["omgexploits.com",13],["nusantaraproject.my.id",13],["crazyblog.in",13],["short-zero.com",13],["akwam.*",13],["gifans.com",13],["xanimehub.com",13],["goldenmanga.top",13],["bshopme.site",13],["clk.asia",13],["imperialstudy.com",13],["skincarie.com",13],["khsm.io",13],["cheatsquad.gg",13],["crunchyroll.com",14],["extremereportbot.com",15],["tubepornclassic.com",[16,17]],["shemalez.com",17],["multiup.io",18],["multiup.org",18],["multiup.eu",18],["mangalist.org",19],["javcl.com",19],["gats.io",19],["videovard.*",19],["embedsb.com",19],["freereceivesms.com",19],["live.dragaoconnect.net",19],["techmuzz.com",20],["rmcmv.*",21],["lecourrier-du-soir.com",22],["thgss.com",23],["moviemakeronline.com",23],["soninow.com",23],["premid.app",24],["zhlednito.cz",25],["girlsofdesire.org",25],["vrcmods.com",26],["adblockeronstape.*",27],["adblockplustape.*",27],["adblockstreamtape.*",27],["adblockstrtape.*",27],["adblockstrtech.*",27],["adblocktape.*",27],["advertisertape.com",27],["antiadtape.*",27],["gettapeads.com",27],["noblocktape.*",27],["stapadblockuser.*",27],["stape.*",27],["strcloud.*",27],["streamadblocker.*",27],["streamadblockplus.*",27],["streamnoads.com",27],["streamta.*",27],["streamtape.*",27],["streamtapeadblockuser.*",27],["strtape.*",27],["strtapeadblock.*",27],["strtapeadblocker.*",27],["strtpe.*",27],["tapeadsenjoyer.com",27],["tapeadvertisement.com",27],["tapeantiads.com",27],["tapeblocker.com",27],["tapelovesads.org",27],["tapenoads.com",27],["tapewithadblock.org",27],["watchadsontape.com",27],["beverfood.com",27],["gamezop.com",28],["laptrinhx.com",29],["sunhope.it",30],["openculture.com",31],["sushiscan.*",31],["clapway.com",31],["kawarthanow.com",31],["rollstroll.com",31],["007stockchat.com",31],["stockhideout.com",31],["radio.zone",31],["1cloudfile.com",32],["luckydice.net",33],["thedigitalfix.com",34],["nolive.me",34],["erofound.com",35],["newscon.org",35],["animedb.in",35],["fastconverter.net",36],["canale.live",37],["molotov.tv",38],["ios.codevn.net",39],["oxy.*",40],["wheelofgold.com",41],["chat.nrj.fr",42],["rekidai-info.github.io",43],["davescomputertips.com",44],["chat.tchatche.com",45],["dvm360.com",46],["freshplaza.com",47],["hortidaily.com",47],["vidsrc.*",48],["work.ink",49],["dragontea.ink",50],["th.gl",51],["javsek.net",52],["ticketmaster.sg",53],["knowyourmeme.com",54]]);
const exceptionsMap = new Map([["oxy.edu",[40]]]);
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
