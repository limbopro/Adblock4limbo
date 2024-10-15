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
/* global cloneInto */

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_noSetIntervalIf = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["fireEvent","500"],["header_menu_abvs","10000"],["adb"],["nrWrapper"],["debug"],["/0x|google|ecoded|==/"],["document.readyState"],["readyState"],["_0x"],["()","500"],["adblockerModal","1000"],["user=null","1000"],["_checkBait"],["()","5000"],["_$","12345"],[".append","1000"],["visibility","1000"],["onAdVideoStart"],["/_0x|debug/"],["complete","50"],[".submit"],["0x"],["adblocker"],["visibility"],["iframe"],["/^/"],["adsbygoogle"],["innerHTML"],["/0x|sandCheck/"],["a0b"],["daadb"],["/_0x|dtaf/"],["pop"],["detector"],["height"],["adblock"],["debugger"],["clearInterval(i)","1000"],["length","1000"],["document.getElementById","10000"],["!display"],["afStorage"],["ads"],["Click"],["href"],["goog"],["show"],["offsetHeight"],[".hide"],["onerror"],["verificarLargura"],["location"],["AB.html"],["analytics.initialized"],["banner"],["blogherads"],["setInterval"]];

const hostnamesMap = new Map([["tvtoday.de",0],["vaughn.live",1],["economictimes.indiatimes.com",2],["nolive.me",4],["thedigitalfix.com",4],["shemalez.com",6],["tubepornclassic.com",[6,19]],["frprn.com",7],["xsanime.com",8],["javfull.net",8],["f2movies.to",8],["rtxkeeda.com",8],["ipalibrary.me",[8,47]],["ipacrack.com",8],["king-shoot.io",8],["fembed.com",9],["hulkshare.com",10],["faucetcrypto.com",11],["giveawayoftheday.com",12],["uploadbox.io",13],["megafile.io",13],["myjest.com",14],["4shared.com",15],["programasvirtualespc.net",16],["kimochi.info",16],["sombex.com",16],["forex-trnd.com",16],["vidlii.com",16],["watchtvseries.video",16],["cheatsquad.gg",16],["verteleseriesonline.com",16],["akbardwi.my.id",16],["hdmp4mania1.net",16],["arabnaar.com",16],["sukidesuost.info",16],["ricettafitness.com",16],["freenote.biz",16],["womenreality.com",16],["portable4pc.com",16],["localizaagencia.com",16],["themes-dl.com",16],["anomize.xyz",16],["casos-aislados.com",16],["freeomovie.to",16],["myviptuto.com",16],["novelasligera.com",16],["hightqualityshop.com",16],["rahim-soft.com",16],["dayoftheweek.org",16],["freedeepweb.blogspot.com",16],["text2voice.org",16],["lookimg.com",16],["graphicdesignresources.net",16],["veryfiles.com",16],["aemenstore.com",16],["byboe.com",16],["cazzette.com",16],["dataf.pro",16],["hookeaudio.com",16],["jncojeans.com",16],["kiemlua.com",16],["kingsleynyc.com",16],["lucidcam.com",16],["marharo.com",16],["medcpu.com",16],["nguyenvanbao.com",16],["nousdecor.com",16],["pennbookcenter.com",16],["restorbio.com",16],["staaker.com",16],["thegoneapp.com",16],["uebnews.online",16],["necksdesign.com",16],["larvelfaucet.com",16],["quicasting.it",16],["ihaxk.com",16],["iptunnels.com",16],["appsfullversion.com",16],["davidgalaxia.com",16],["anonymous-links.com",16],["planet-streaming1.com",16],["unionmanga.xyz",16],["vviruslove.com",16],["unity3diy.blogspot.com",16],["hakie.net",16],["checkfiletype.com",16],["santoinferninho.com",16],["gurl.pw",16],["sociadrive.com",16],["angeloyeo.github.io",16],["csgo-ranks.com",16],["royalkom.com",16],["super-ethanol.com",16],["surf-trx.com",16],["samapkstore.com",16],["satoshiquiz.com",16],["shortenbuddy.com",16],["adeth.cc",16],["submitclimb.com",16],["softairbay.com",16],["swift4claim.com",16],["best-shopme.com",16],["tw-hkt.blogspot.com",16],["hugo3c.tw",16],["androidtunado.com.br",16],["midiextreme.com",16],["tellygossips.net",16],["newsiqra.com",16],["dota2freaks.com",16],["how2pc.com",16],["weviral.org",16],["alltechnerd.com",16],["shoppinglys.blogspot.com",16],["komiktap.in",16],["adobezii.com",16],["8tm.net",16],["afasiaarchzine.com",16],["getpczone.com",16],["secretsdeepweb.blogspot.com",16],["kiwiexploits.com",16],["freemiumaccounts.net",16],["jaysndees.com",16],["mailocal2.xyz",16],["tqanime.com",16],["devcourseweb.com",16],["anime-saikou.com",16],["donghuanosekai.com",16],["1shorten.com",16],["publicananker.com",16],["rodjulian.com",16],["jagoanssh.com",16],["pcso-lottoresults.com",16],["todoseriales1.blogspot.com",16],["cryptslice.com",16],["omgexploits.com",16],["nusantaraproject.my.id",16],["crazyblog.in",16],["short-zero.com",16],["cubehosting.me",16],["gifans.com",16],["fluttercampus.com",16],["xanimehub.com",16],["goldenmanga.top",16],["bshopme.site",16],["watchdoge.xyz",16],["clk.asia",16],["imperialstudy.com",16],["skincarie.com",16],["fztvseries.mobi",16],["khsm.io",16],["crunchyroll.com",17],["extremereportbot.com",18],["multiup.io",20],["multiup.org",20],["multiup.eu",20],["mangalist.org",21],["javcl.com",21],["goalup.live",21],["gats.io",21],["oxl.one",21],["sbplay1.com",21],["sbvideo.net",21],["embedsb.com",21],["freereceivesms.com",21],["plhqtvhay.xyz",21],["live.dragaoconnect.net",21],["techmuzz.com",22],["lecourrier-du-soir.com",24],["zhlednito.cz",25],["girlsofdesire.org",25],["thgss.com",26],["soninow.com",26],["moviemakeronline.com",26],["premid.app",27],["work.ink",29],["007stockchat.com",30],["stockhideout.com",30],["radio.zone",30],["openculture.com",30],["clapway.com",30],["kawarthanow.com",30],["rollstroll.com",30],["dragontea.ink",31],["javsek.net",32],["mavenarts.in",32],["ticketmaster.sg",33],["vrcmods.com",34],["advertisertape.com",35],["gettapeads.com",35],["streamnoads.com",35],["tapeadsenjoyer.com",35],["tapeadvertisement.com",35],["tapeantiads.com",35],["tapeblocker.com",35],["tapelovesads.org",35],["tapenoads.com",35],["tapewithadblock.org",35],["watchadsontape.com",35],["beverfood.com",35],["gamezop.com",36],["laptrinhx.com",37],["freemc.host",38],["sunhope.it",39],["1cloudfile.com",40],["luckydice.net",41],["erofound.com",42],["newscon.org",42],["fastconverter.net",43],["canale.live",44],["molotov.tv",45],["igay69.com",46],["davescomputertips.com",46],["ios.codevn.net",47],["wheelofgold.com",49],["shortlinks.tech",50],["chat.nrj.fr",51],["tchatche.com",52],["dvm360.com",53],["freshplaza.com",54],["hortidaily.com",54],["knowyourmeme.com",55],["businessinsider.com",56]]);

const entitiesMap = new Map([["finanzen",3],["mylink",5],["my1ink",5],["myl1nk",5],["myli3k",5],["gogoanimetv",8],["streameast",16],["thestreameast",16],["getfreecourses",16],["freetutorials",16],["bg-gledai",16],["link1s",16],["pasend",16],["shortzzy",16],["fzm",16],["fzmovies",16],["akwam",16],["videovard",21],["rmcmv",23],["vidsrc",28],["sushiscan",30],["adblockeronstape",35],["adblockplustape",35],["adblockstreamtape",35],["adblockstrtape",35],["adblockstrtech",35],["adblocktape",35],["antiadtape",35],["noblocktape",35],["stapadblockuser",35],["stape",35],["strcloud",35],["streamadblocker",35],["streamadblockplus",35],["streamta",35],["streamtape",35],["streamtapeadblockuser",35],["strtape",35],["strtapeadblock",35],["strtapeadblocker",35],["strtpe",35],["oxy",48]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function noSetIntervalIf(
    needle = '',
    delay = ''
) {
    if ( typeof needle !== 'string' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('prevent-setInterval', needle, delay);
    const needleNot = needle.charAt(0) === '!';
    if ( needleNot ) { needle = needle.slice(1); }
    if ( delay === '' ) { delay = undefined; }
    let delayNot = false;
    if ( delay !== undefined ) {
        delayNot = delay.charAt(0) === '!';
        if ( delayNot ) { delay = delay.slice(1); }
        delay = parseInt(delay, 10);
    }
    const reNeedle = safe.patternToRegex(needle);
    proxyApplyFn('setInterval', function setInterval(context) {
        const { callArgs } = context;
        const a = callArgs[0] instanceof Function
            ? String(safe.Function_toString(callArgs[0]))
            : String(callArgs[0]);
        const b = callArgs[1];
        if ( needle === '' && delay === undefined ) {
            safe.uboLog(logPrefix, `Called:\n${a}\n${b}`);
            return context.reflect();
        }
        let defuse;
        if ( needle !== '' ) {
            defuse = reNeedle.test(a) !== needleNot;
        }
        if ( defuse !== false && delay !== undefined ) {
            defuse = (b === delay || isNaN(b) && isNaN(delay) ) !== delayNot;
        }
        if ( defuse ) {
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
    const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
    let bcBuffer = [];
    safe.logLevel = scriptletGlobals.logLevel || 1;
    let lastLogType = '';
    let lastLogText = '';
    let lastLogTime = 0;
    safe.sendToLogger = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( text === lastLogText && type === lastLogType ) {
            if ( (Date.now() - lastLogTime) < 5000 ) { return; }
        }
        lastLogType = type;
        lastLogText = text;
        lastLogTime = Date.now();
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
    try { noSetIntervalIf(...argsList[i]); }
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
    return uBOL_noSetIntervalIf();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_noSetIntervalIf = cloneInto([
            [ '(', uBOL_noSetIntervalIf.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_noSetIntervalIf);
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
    delete page.uBOL_noSetIntervalIf;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
