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

// ruleset: default

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
const argsList = [["fireEvent","500"],["header_menu_abvs","10000"],["adb"],["/0x|google|ecoded|==/"],["readyState"],["_0x"],["adblockerModal","1000"],["user=null","1000"],["_checkBait"],["()","5000"],["_$","12345"],[".append","1000"],["visibility","1000"],["onAdVideoStart"],["/_0x|debug/"],["complete","50"],["document.readyState"],[".submit"],["0x"],["adblocker"],["visibility"],["iframe"],["adsbygoogle"],["innerHTML"],["/^/"],["height"],["adblock"],["debugger"],["clearInterval(i)","1000"],["document.getElementById","10000"],["daadb"],["!display"],["afStorage"],["debug"],["ads"],["Click"],["href"],["goog"],["offsetHeight"],[".hide"],["onerror"],["location"],["location[_0x"],["show"],["AB.html"],["analytics.initialized"],["banner"],["/0x|sandCheck/"],["a0b"],["/_0x|dtaf/"],["NitroAds"],["pop"],["detector"],["blogherads"],["setInterval"]];
const hostnamesMap = new Map([["tvtoday.de",0],["vaughn.live",1],["economictimes.indiatimes.com",2],["mylink.*",3],["my1ink.*",3],["myl1nk.*",3],["myli3k.*",3],["frprn.com",4],["gogoanimetv.*",5],["xsanime.com",5],["javfull.net",5],["f2movies.to",5],["ipacrack.com",5],["king-shoot.io",5],["hulkshare.com",6],["faucetcrypto.com",7],["giveawayoftheday.com",8],["uploadbox.io",9],["megafile.io",9],["myjest.com",10],["4shared.com",11],["streameast.*",12],["thestreameast.*",12],["getfreecourses.*",12],["sombex.com",12],["forex-trnd.com",12],["vidlii.com",12],["verteleseriesonline.com",12],["akbardwi.my.id",12],["bg-gledai.*",12],["arabnaar.com",12],["sukidesuost.info",12],["ricettafitness.com",12],["freenote.biz",12],["womenreality.com",12],["portable4pc.com",12],["localizaagencia.com",12],["themes-dl.com",12],["anomize.xyz",12],["casos-aislados.com",12],["freeomovie.to",12],["myviptuto.com",12],["novelasligera.com",12],["hightqualityshop.com",12],["rahim-soft.com",12],["dayoftheweek.org",12],["text2voice.org",12],["lookimg.com",12],["graphicdesignresources.net",12],["veryfiles.com",12],["aemenstore.com",12],["byboe.com",12],["cazzette.com",12],["dataf.pro",12],["hookeaudio.com",12],["jncojeans.com",12],["kiemlua.com",12],["kingsleynyc.com",12],["link1s.*",12],["lucidcam.com",12],["marharo.com",12],["medcpu.com",12],["nguyenvanbao.com",12],["nousdecor.com",12],["pennbookcenter.com",12],["restorbio.com",12],["staaker.com",12],["necksdesign.com",12],["larvelfaucet.com",12],["quicasting.it",12],["iptunnels.com",12],["appsfullversion.com",12],["davidgalaxia.com",12],["anonymous-links.com",12],["planet-streaming1.com",12],["unionmanga.xyz",12],["vviruslove.com",12],["unity3diy.blogspot.com",12],["checkfiletype.com",12],["santoinferninho.com",12],["sociadrive.com",12],["angeloyeo.github.io",12],["csgo-ranks.com",12],["royalkom.com",12],["super-ethanol.com",12],["surf-trx.com",12],["samapkstore.com",12],["shortenbuddy.com",12],["adeth.cc",12],["submitclimb.com",12],["swift4claim.com",12],["best-shopme.com",12],["tw-hkt.blogspot.com",12],["hugo3c.tw",12],["shortzzy.*",12],["androidtunado.com.br",12],["midiextreme.com",12],["tellygossips.net",12],["newsiqra.com",12],["dota2freaks.com",12],["how2pc.com",12],["weviral.org",12],["alltechnerd.com",12],["shoppinglys.blogspot.com",12],["fzm.*",12],["fzmovies.*",12],["komiktap.in",12],["adobezii.com",12],["8tm.net",12],["afasiaarchzine.com",12],["getpczone.com",12],["secretsdeepweb.blogspot.com",12],["kiwiexploits.com",12],["jaysndees.com",12],["mailocal2.xyz",12],["tqanime.com",12],["devcourseweb.com",12],["anime-saikou.com",12],["donghuanosekai.com",12],["jagoanssh.com",12],["pcso-lottoresults.com",12],["todoseriales1.blogspot.com",12],["cryptslice.com",12],["omgexploits.com",12],["nusantaraproject.my.id",12],["crazyblog.in",12],["short-zero.com",12],["akwam.*",12],["gifans.com",12],["xanimehub.com",12],["goldenmanga.top",12],["bshopme.site",12],["clk.asia",12],["imperialstudy.com",12],["skincarie.com",12],["fztvseries.mobi",12],["khsm.io",12],["cheatsquad.gg",12],["crunchyroll.com",13],["extremereportbot.com",14],["tubepornclassic.com",[15,16]],["shemalez.com",16],["multiup.io",17],["multiup.org",17],["multiup.eu",17],["mangalist.org",18],["javcl.com",18],["gats.io",18],["videovard.*",18],["embedsb.com",18],["freereceivesms.com",18],["live.dragaoconnect.net",18],["techmuzz.com",19],["rmcmv.*",20],["lecourrier-du-soir.com",21],["thgss.com",22],["moviemakeronline.com",22],["soninow.com",22],["premid.app",23],["zhlednito.cz",24],["girlsofdesire.org",24],["cool-web.de",24],["gps-cache.de",24],["web-spiele.de",24],["fun-seiten.de",24],["photo-alben.de",24],["wetter-vorhersage.de",24],["coolsoftware.de",24],["kryptografie.de",24],["cool-domains.de",24],["net-tours.de",24],["such-maschine.de",24],["qul.de",24],["mailtool.de",24],["c-ix.de",24],["softwareengineer.de",24],["net-tools.de",24],["hilfen.de",24],["45er.de",24],["cooldns.de",24],["hardware-entwicklung.de",24],["cool--web-de.translate.goog",24],["gps--cache-de.translate.goog",24],["web--spiele-de.translate.goog",24],["fun--seiten-de.translate.goog",24],["photo--alben-de.translate.goog",24],["wetter--vorhersage-de.translate.goog",24],["coolsoftware-de.translate.goog",24],["kryptografie-de.translate.goog",24],["cool--domains-de.translate.goog",24],["net--tours-de.translate.goog",24],["such--maschine-de.translate.goog",24],["qul-de.translate.goog",24],["mailtool-de.translate.goog",24],["c--ix-de.translate.goog",24],["softwareengineer-de.translate.goog",24],["net--tools-de.translate.goog",24],["hilfen-de.translate.goog",24],["45er-de.translate.goog",24],["cooldns-de.translate.goog",24],["hardware--entwicklung-de.translate.goog",24],["vrcmods.com",25],["adblockeronstape.*",26],["adblockplustape.*",26],["adblockstreamtape.*",26],["adblockstrtape.*",26],["adblockstrtech.*",26],["adblocktape.*",26],["advertisertape.com",26],["antiadtape.*",26],["gettapeads.com",26],["noblocktape.*",26],["stapadblockuser.*",26],["stape.*",26],["strcloud.*",26],["streamadblocker.*",26],["streamadblockplus.*",26],["streamnoads.com",26],["streamta.*",26],["streamtape.*",26],["streamtapeadblockuser.*",26],["strtape.*",26],["strtapeadblock.*",26],["strtapeadblocker.*",26],["strtpe.*",26],["tapeadsenjoyer.com",26],["tapeadvertisement.com",26],["tapeantiads.com",26],["tapeblocker.com",26],["tapelovesads.org",26],["tapenoads.com",26],["tapewithadblock.org",26],["watchadsontape.com",26],["beverfood.com",26],["gamezop.com",27],["laptrinhx.com",28],["sunhope.it",29],["openculture.com",30],["sushiscan.*",30],["clapway.com",30],["kawarthanow.com",30],["rollstroll.com",30],["007stockchat.com",30],["stockhideout.com",30],["radio.zone",30],["1cloudfile.com",31],["luckydice.net",32],["thedigitalfix.com",33],["nolive.me",33],["erofound.com",34],["newscon.org",34],["animedb.in",34],["fastconverter.net",35],["canale.live",36],["molotov.tv",37],["ios.codevn.net",38],["oxy.*",39],["wheelofgold.com",40],["chat.nrj.fr",41],["rekidai-info.github.io",42],["davescomputertips.com",43],["chat.tchatche.com",44],["dvm360.com",45],["freshplaza.com",46],["hortidaily.com",46],["vidsrc.*",47],["work.ink",48],["dragontea.ink",49],["th.gl",50],["javsek.net",51],["ticketmaster.sg",52],["knowyourmeme.com",53],["businessinsider.com",54]]);
const exceptionsMap = new Map([["oxy.edu",[39]]]);
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
