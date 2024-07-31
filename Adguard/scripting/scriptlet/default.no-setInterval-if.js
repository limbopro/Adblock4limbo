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

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_noSetIntervalIf = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["fireEvent","500"],["header_menu_abvs","10000"],["adb"],["nrWrapper"],["break"],["debug"],["/0x|google|ecoded|==/"],["document.readyState"],["readyState"],["_0x"],["()","500"],["adblockerModal","1000"],["user=null","1000"],["_checkBait"],["()","5000"],["_$","12345"],[".append","1000"],["visibility","1000"],["onAdVideoStart"],["/_0x|debug/"],["complete","50"],[".submit"],["0x"],["adblocker"],["visibility"],["iframe"],["/^/"],["adsbygoogle"],["length"],["innerHTML"],["/0x|sandCheck/"],["a0b"],["daadb"],["/_0x|dtaf/"],["height"],["adblock"],["debugger"],["clearInterval(i)","1000"],["length","1000"],["document.getElementById","10000"],["Adblocker"],["!display"],["afStorage"],["ads"],["Click"],["href"],["goog"],["show"],["offsetHeight"],[".hide"],["onerror"],["verificarLargura"],["location"],["AB.html"],["analytics.initialized"],["banner"],["blogherads"],["setInterval"]];

const hostnamesMap = new Map([["tvtoday.de",0],["vaughn.live",1],["economictimes.indiatimes.com",2],["mcloud.bz",4],["vidstream.pro",4],["nolive.me",5],["thedigitalfix.com",5],["shemalez.com",7],["tubepornclassic.com",[7,20]],["frprn.com",8],["xsanime.com",9],["javfull.net",9],["f2movies.to",9],["rtxkeeda.com",9],["ipalibrary.me",[9,48]],["ipacrack.com",9],["king-shoot.io",9],["fembed.com",10],["hulkshare.com",11],["faucetcrypto.com",12],["giveawayoftheday.com",13],["uploadbox.io",14],["megafile.io",14],["myjest.com",15],["4shared.com",16],["programasvirtualespc.net",17],["kimochi.info",17],["sombex.com",17],["forex-trnd.com",17],["vidlii.com",17],["watchtvseries.video",17],["cheatsquad.gg",17],["verteleseriesonline.com",17],["akbardwi.my.id",17],["hdmp4mania1.net",17],["arabnaar.com",17],["sukidesuost.info",17],["ricettafitness.com",17],["freenote.biz",17],["womenreality.com",17],["portable4pc.com",17],["localizaagencia.com",17],["downloaderzone.com",17],["themes-dl.com",17],["freegetdownloader.com",17],["oncam.me",17],["anomize.xyz",17],["casos-aislados.com",17],["freeomovie.to",17],["myviptuto.com",17],["novelasligera.com",17],["hightqualityshop.com",17],["mondainai.moe",17],["rahim-soft.com",17],["dayoftheweek.org",17],["freedeepweb.blogspot.com",17],["text2voice.org",17],["lookimg.com",17],["graphicdesignresources.net",17],["veryfiles.com",17],["aemenstore.com",17],["byboe.com",17],["cazzette.com",17],["dataf.pro",17],["hookeaudio.com",17],["jncojeans.com",17],["kiemlua.com",17],["kingsleynyc.com",17],["lucidcam.com",17],["marharo.com",17],["medcpu.com",17],["nguyenvanbao.com",17],["nousdecor.com",17],["pennbookcenter.com",17],["restorbio.com",17],["staaker.com",17],["thegoneapp.com",17],["uebnews.online",17],["necksdesign.com",17],["larvelfaucet.com",17],["quicasting.it",17],["ihaxk.com",17],["iptunnels.com",17],["appsfullversion.com",17],["davidgalaxia.com",17],["anonymous-links.com",17],["planet-streaming1.com",17],["unionmanga.xyz",17],["vviruslove.com",17],["unity3diy.blogspot.com",17],["hakie.net",17],["checkfiletype.com",17],["santoinferninho.com",17],["gurl.pw",17],["sociadrive.com",17],["angeloyeo.github.io",17],["csgo-ranks.com",17],["royalkom.com",17],["super-ethanol.com",17],["surf-trx.com",17],["samapkstore.com",17],["satoshiquiz.com",17],["shortenbuddy.com",17],["adeth.cc",17],["submitclimb.com",17],["softairbay.com",17],["swift4claim.com",17],["best-shopme.com",17],["tw-hkt.blogspot.com",17],["hugo3c.tw",17],["androidtunado.com.br",17],["midiextreme.com",17],["tellygossips.net",17],["newsiqra.com",17],["dota2freaks.com",17],["how2pc.com",17],["weviral.org",17],["alltechnerd.com",17],["shoppinglys.blogspot.com",17],["komiktap.in",17],["adobezii.com",17],["8tm.net",17],["afasiaarchzine.com",17],["getpczone.com",17],["secretsdeepweb.blogspot.com",17],["kiwiexploits.com",17],["freemiumaccounts.net",17],["jaysndees.com",17],["paidtomoney.com",17],["doctor-groups.com",17],["mailocal2.xyz",17],["tqanime.com",17],["devcourseweb.com",17],["anime-saikou.com",17],["donghuanosekai.com",17],["1shorten.com",17],["publicananker.com",17],["rodjulian.com",17],["jagoanssh.com",17],["pcso-lottoresults.com",17],["coinurl.net",17],["todoseriales1.blogspot.com",17],["cryptslice.com",17],["omgexploits.com",17],["nusantaraproject.my.id",17],["crazyblog.in",17],["short-zero.com",17],["cubehosting.me",17],["gifans.com",17],["xanimehub.com",17],["goldenmanga.top",17],["bshopme.site",17],["watchdoge.xyz",17],["clk.asia",17],["imperialstudy.com",17],["skincarie.com",17],["fztvseries.mobi",17],["khsm.io",17],["crunchyroll.com",18],["extremereportbot.com",19],["multiup.io",21],["multiup.org",21],["multiup.eu",21],["mangalist.org",22],["javcl.com",22],["goalup.live",22],["gats.io",22],["oxl.one",22],["sbplay1.com",22],["sbvideo.net",22],["embedsb.com",22],["freereceivesms.com",22],["plhqtvhay.xyz",22],["live.dragaoconnect.net",22],["techmuzz.com",23],["lecourrier-du-soir.com",25],["zhlednito.cz",26],["girlsofdesire.org",26],["thgss.com",27],["soninow.com",27],["moviemakeronline.com",27],["pstream.net",28],["premid.app",29],["work.ink",31],["007stockchat.com",32],["stockhideout.com",32],["radio.zone",32],["openculture.com",32],["clapway.com",32],["kawarthanow.com",32],["rollstroll.com",32],["dragontea.ink",33],["vrcmods.com",34],["gettapeads.com",35],["streamnoads.com",35],["tapeadsenjoyer.com",35],["tapeadvertisement.com",35],["tapeantiads.com",35],["tapeblocker.com",35],["tapelovesads.org",35],["tapenoads.com",35],["tapewithadblock.org",35],["beverfood.com",35],["gamezop.com",36],["laptrinhx.com",37],["freemc.host",38],["sunhope.it",39],["schoolcheats.net",40],["1cloudfile.com",41],["luckydice.net",42],["erofound.com",43],["newscon.org",43],["fastconverter.net",44],["canale.live",45],["molotov.tv",46],["igay69.com",47],["davescomputertips.com",47],["ios.codevn.net",48],["wheelofgold.com",50],["shortlinks.tech",51],["chat.nrj.fr",52],["tchatche.com",53],["dvm360.com",54],["freshplaza.com",55],["hortidaily.com",55],["knowyourmeme.com",56],["businessinsider.com",57]]);

const entitiesMap = new Map([["finanzen",3],["mylink",6],["my1ink",6],["myl1nk",6],["myli3k",6],["gogoanimetv",9],["streameast",17],["thestreameast",17],["getfreecourses",17],["freetutorials",17],["bg-gledai",17],["link1s",17],["pasend",17],["shortzzy",17],["fzm",17],["fzmovies",17],["akwam",17],["videovard",22],["rmcmv",24],["vidsrc",30],["sushiscan",32],["adblockeronstape",35],["adblockplustape",35],["adblockstreamtape",35],["adblockstrtape",35],["adblockstrtech",35],["adblocktape",35],["antiadtape",35],["noblocktape",35],["stapadblockuser",35],["stape",35],["strcloud",35],["streamadblocker",35],["streamadblockplus",35],["streamta",35],["streamtape",35],["streamtapeadblockuser",35],["strtape",35],["strtapeadblock",35],["strtapeadblocker",35],["strtpe",35],["oxy",49]]);

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
    self.setInterval = new Proxy(self.setInterval, {
        apply: function(target, thisArg, args) {
            const a = args[0] instanceof Function
                ? String(safe.Function_toString(args[0]))
                : String(args[0]);
            const b = args[1];
            if ( needle === '' && delay === undefined ) {
                safe.uboLog(logPrefix, `Called:\n${a}\n${b}`);
                return Reflect.apply(target, thisArg, args);
            }
            let defuse;
            if ( needle !== '' ) {
                defuse = reNeedle.test(a) !== needleNot;
            }
            if ( defuse !== false && delay !== undefined ) {
                defuse = (b === delay || isNaN(b) && isNaN(delay) ) !== delayNot;
            }
            if ( defuse ) {
                args[0] = function(){};
                safe.uboLog(logPrefix, `Prevented:\n${a}\n${b}`);
            }
            return Reflect.apply(target, thisArg, args);
        },
        get(target, prop, receiver) {
            if ( prop === 'toString' ) {
                return target.toString.bind(target);
            }
            return Reflect.get(target, prop, receiver);
        },
    });
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
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
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
