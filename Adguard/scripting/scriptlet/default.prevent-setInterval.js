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

/* eslint-disable indent */

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_preventSetInterval = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["fireEvent","500"],["header_menu_abvs","10000"],["adb"],["nrWrapper"],["debug"],["/0x|google|ecoded|==/"],["document.readyState"],["readyState"],["_0x"],["adblockerModal","1000"],["user=null","1000"],["_checkBait"],["()","5000"],["_$","12345"],[".append","1000"],["visibility","1000"],["onAdVideoStart"],["/_0x|debug/"],["complete","50"],[".submit"],["0x"],["adblocker"],["visibility"],["iframe"],["/^/"],["adsbygoogle"],["innerHTML"],["/0x|sandCheck/"],["a0b"],["daadb"],["/_0x|dtaf/"],["pop"],["detector"],["ads"],["height"],["adblock"],["debugger"],["clearInterval(i)","1000"],["document.getElementById","10000"],["!display"],["afStorage"],["Click"],["href"],["goog"],["show"],["offsetHeight"],[".hide"],["onerror"],["verificarLargura"],["location"],["AB.html"],["analytics.initialized"],["banner"],["blogherads"],["setInterval"]];

const hostnamesMap = new Map([["tvtoday.de",0],["vaughn.live",1],["economictimes.indiatimes.com",2],["nolive.me",4],["thedigitalfix.com",4],["shemalez.com",6],["tubepornclassic.com",[6,18]],["frprn.com",7],["xsanime.com",8],["javfull.net",8],["f2movies.to",8],["ipacrack.com",8],["king-shoot.io",8],["hulkshare.com",9],["faucetcrypto.com",10],["giveawayoftheday.com",11],["uploadbox.io",12],["megafile.io",12],["myjest.com",13],["4shared.com",14],["programasvirtualespc.net",15],["kimochi.info",15],["sombex.com",15],["forex-trnd.com",15],["vidlii.com",15],["watchtvseries.video",15],["cheatsquad.gg",15],["verteleseriesonline.com",15],["akbardwi.my.id",15],["hdmp4mania1.net",15],["arabnaar.com",15],["sukidesuost.info",15],["ricettafitness.com",15],["freenote.biz",15],["womenreality.com",15],["portable4pc.com",15],["localizaagencia.com",15],["themes-dl.com",15],["anomize.xyz",15],["casos-aislados.com",15],["freeomovie.to",15],["myviptuto.com",15],["novelasligera.com",15],["hightqualityshop.com",15],["rahim-soft.com",15],["dayoftheweek.org",15],["text2voice.org",15],["lookimg.com",15],["graphicdesignresources.net",15],["veryfiles.com",15],["aemenstore.com",15],["byboe.com",15],["cazzette.com",15],["dataf.pro",15],["hookeaudio.com",15],["jncojeans.com",15],["kiemlua.com",15],["kingsleynyc.com",15],["lucidcam.com",15],["marharo.com",15],["medcpu.com",15],["nguyenvanbao.com",15],["nousdecor.com",15],["pennbookcenter.com",15],["restorbio.com",15],["staaker.com",15],["thegoneapp.com",15],["uebnews.online",15],["necksdesign.com",15],["larvelfaucet.com",15],["quicasting.it",15],["ihaxk.com",15],["iptunnels.com",15],["appsfullversion.com",15],["davidgalaxia.com",15],["anonymous-links.com",15],["planet-streaming1.com",15],["unionmanga.xyz",15],["vviruslove.com",15],["unity3diy.blogspot.com",15],["hakie.net",15],["checkfiletype.com",15],["santoinferninho.com",15],["sociadrive.com",15],["angeloyeo.github.io",15],["csgo-ranks.com",15],["royalkom.com",15],["super-ethanol.com",15],["surf-trx.com",15],["samapkstore.com",15],["shortenbuddy.com",15],["adeth.cc",15],["submitclimb.com",15],["swift4claim.com",15],["best-shopme.com",15],["tw-hkt.blogspot.com",15],["hugo3c.tw",15],["androidtunado.com.br",15],["midiextreme.com",15],["tellygossips.net",15],["newsiqra.com",15],["dota2freaks.com",15],["how2pc.com",15],["weviral.org",15],["alltechnerd.com",15],["shoppinglys.blogspot.com",15],["komiktap.in",15],["adobezii.com",15],["8tm.net",15],["afasiaarchzine.com",15],["getpczone.com",15],["secretsdeepweb.blogspot.com",15],["kiwiexploits.com",15],["freemiumaccounts.net",15],["jaysndees.com",15],["mailocal2.xyz",15],["tqanime.com",15],["devcourseweb.com",15],["anime-saikou.com",15],["donghuanosekai.com",15],["jagoanssh.com",15],["pcso-lottoresults.com",15],["todoseriales1.blogspot.com",15],["cryptslice.com",15],["omgexploits.com",15],["nusantaraproject.my.id",15],["crazyblog.in",15],["short-zero.com",15],["gifans.com",15],["fluttercampus.com",15],["xanimehub.com",15],["goldenmanga.top",15],["bshopme.site",15],["watchdoge.xyz",15],["clk.asia",15],["imperialstudy.com",15],["skincarie.com",15],["fztvseries.mobi",15],["khsm.io",15],["crunchyroll.com",16],["extremereportbot.com",17],["multiup.io",19],["multiup.org",19],["multiup.eu",19],["mangalist.org",20],["javcl.com",20],["gats.io",20],["embedsb.com",20],["freereceivesms.com",20],["plhqtvhay.xyz",20],["live.dragaoconnect.net",20],["techmuzz.com",21],["lecourrier-du-soir.com",23],["zhlednito.cz",24],["girlsofdesire.org",24],["thgss.com",25],["soninow.com",25],["moviemakeronline.com",25],["premid.app",26],["work.ink",28],["007stockchat.com",29],["stockhideout.com",29],["radio.zone",29],["openculture.com",29],["clapway.com",29],["kawarthanow.com",29],["rollstroll.com",29],["dragontea.ink",30],["javsek.net",31],["mavenarts.in",31],["ticketmaster.sg",32],["animedb.in",33],["erofound.com",33],["newscon.org",33],["vrcmods.com",34],["advertisertape.com",35],["gettapeads.com",35],["streamnoads.com",35],["tapeadsenjoyer.com",35],["tapeadvertisement.com",35],["tapeantiads.com",35],["tapeblocker.com",35],["tapelovesads.org",35],["tapenoads.com",35],["tapewithadblock.org",35],["watchadsontape.com",35],["beverfood.com",35],["gamezop.com",36],["laptrinhx.com",37],["sunhope.it",38],["1cloudfile.com",39],["luckydice.net",40],["fastconverter.net",41],["canale.live",42],["molotov.tv",43],["igay69.com",44],["davescomputertips.com",44],["ios.codevn.net",45],["wheelofgold.com",47],["shortlinks.tech",48],["chat.nrj.fr",49],["tchatche.com",50],["dvm360.com",51],["freshplaza.com",52],["hortidaily.com",52],["knowyourmeme.com",53],["businessinsider.com",54]]);

const entitiesMap = new Map([["finanzen",3],["mylink",5],["my1ink",5],["myl1nk",5],["myli3k",5],["gogoanimetv",8],["streameast",15],["thestreameast",15],["getfreecourses",15],["bg-gledai",15],["link1s",15],["shortzzy",15],["fzm",15],["fzmovies",15],["akwam",15],["videovard",20],["rmcmv",22],["vidsrc",27],["sushiscan",29],["adblockeronstape",35],["adblockplustape",35],["adblockstreamtape",35],["adblockstrtape",35],["adblockstrtech",35],["adblocktape",35],["antiadtape",35],["noblocktape",35],["stapadblockuser",35],["stape",35],["strcloud",35],["streamadblocker",35],["streamadblockplus",35],["streamta",35],["streamtape",35],["streamtapeadblockuser",35],["strtape",35],["strtapeadblock",35],["strtapeadblocker",35],["strtpe",35],["oxy",46]]);

const exceptionsMap = new Map([]);

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
            ? String(safe.Function_toString(callArgs[0]))
            : String(callArgs[0]);
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
                this.callFn = this.callArgs = undefined;
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
                this.callFn = this.thisArg = this.callArgs = undefined;
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
            this.max = parseInt(s.slice(1), 10) || Number.MAX_SAFE_INTEGER;
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
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String_fromCharCode': String.fromCharCode,
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
    } catch(_) {
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            safe.log(`uBO ${text}`);
        };
    }
    return safe;
}

/******************************************************************************/

const hnParts = [];
try {
    let origin = document.location.origin;
    if ( origin === 'null' ) {
        const origins = document.location.ancestorOrigins;
        for ( let i = 0; i < origins.length; i++ ) {
            origin = origins[i];
            if ( origin !== 'null' ) { break; }
        }
    }
    const pos = origin.lastIndexOf('://');
    if ( pos === -1 ) { return; }
    hnParts.push(...origin.slice(pos+3).split('.'));
}
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
    try { preventSetInterval(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_preventSetInterval();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
