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

const argsList = [["fireEvent","500"],["header_menu_abvs","10000"],["adb"],["nrWrapper"],["break"],["debug"],["/devtools|0x/"],["/0x|google|ecoded|==/"],["document.readyState"],["readyState"],["_0x"],["()","500"],["adblockerModal","1000"],["user=null","1000"],["_checkBait"],["()","5000"],["_$","12345"],[".append","1000"],["visibility","1000"],["onAdVideoStart"],["/_0x|debug/"],["complete","50"],[".submit"],["0x"],["adblocker"],["visibility"],["iframe"],["a0b"],["/^/"],["adsbygoogle"],["length"],["innerHTML"],["daadb"],["height"],["adblock"],["debugger"],["atob"],["clearInterval(i)","1000"],["length","1000"],["document.getElementById","10000"],["Adblocker"],["!display"],["afStorage"],["ads"],["Click"],["href"],["goog"],["show"],["offsetHeight"],[".hide"],["onerror"],["verificarLargura"],["location"],["AB.html"],["analytics.initialized"],["banner"],["blogherads"],["setInterval"]];

const hostnamesMap = new Map([["tvtoday.de",0],["vaughn.live",1],["economictimes.indiatimes.com",2],["mcloud.bz",4],["vidstream.pro",4],["nolive.me",5],["thedigitalfix.com",5],["shemalez.com",8],["tubepornclassic.com",[8,21]],["frprn.com",9],["dragontea.ink",10],["xsanime.com",10],["javfull.net",10],["f2movies.to",10],["rtxkeeda.com",10],["ipalibrary.me",[10,48]],["ipacrack.com",10],["king-shoot.io",10],["fembed.com",11],["hulkshare.com",12],["faucetcrypto.com",13],["giveawayoftheday.com",14],["uploadbox.io",15],["megafile.io",15],["myjest.com",16],["4shared.com",17],["programasvirtualespc.net",18],["kimochi.info",18],["sombex.com",18],["cheatsquad.gg",18],["forex-trnd.com",18],["vidlii.com",18],["zuketcreation.net",18],["watchtvseries.video",18],["verteleseriesonline.com",18],["akbardwi.my.id",18],["hdmp4mania1.net",18],["arabnaar.com",18],["sukidesuost.info",18],["ricettafitness.com",18],["freenote.biz",18],["womenreality.com",18],["portable4pc.com",18],["localizaagencia.com",18],["downloaderzone.com",18],["themes-dl.com",18],["freegetdownloader.com",18],["oncam.me",18],["anomize.xyz",18],["casos-aislados.com",18],["freeomovie.to",18],["myviptuto.com",18],["novelasligera.com",18],["hightqualityshop.com",18],["mondainai.moe",18],["rahim-soft.com",18],["dayoftheweek.org",18],["freedeepweb.blogspot.com",18],["text2voice.org",18],["lookimg.com",18],["graphicdesignresources.net",18],["veryfiles.com",18],["aemenstore.com",18],["byboe.com",18],["cazzette.com",18],["dataf.pro",18],["hookeaudio.com",18],["jncojeans.com",18],["kiemlua.com",18],["kingsleynyc.com",18],["lucidcam.com",18],["marharo.com",18],["medcpu.com",18],["nguyenvanbao.com",18],["nousdecor.com",18],["pennbookcenter.com",18],["restorbio.com",18],["staaker.com",18],["thegoneapp.com",18],["uebnews.online",18],["necksdesign.com",18],["larvelfaucet.com",18],["quicasting.it",18],["ihaxk.com",18],["iptunnels.com",18],["appsfullversion.com",18],["davidgalaxia.com",18],["anonymous-links.com",18],["planet-streaming1.com",18],["unionmanga.xyz",18],["vviruslove.com",18],["unity3diy.blogspot.com",18],["hakie.net",18],["checkfiletype.com",18],["santoinferninho.com",18],["gurl.pw",18],["sociadrive.com",18],["angeloyeo.github.io",18],["csgo-ranks.com",18],["royalkom.com",18],["super-ethanol.com",18],["surf-trx.com",18],["samapkstore.com",18],["satoshiquiz.com",18],["shortenbuddy.com",18],["adeth.cc",18],["submitclimb.com",18],["softairbay.com",18],["swift4claim.com",18],["best-shopme.com",18],["tw-hkt.blogspot.com",18],["hugo3c.tw",18],["androidtunado.com.br",18],["midiextreme.com",18],["tellygossips.net",18],["newsiqra.com",18],["dota2freaks.com",18],["how2pc.com",18],["weviral.org",18],["alltechnerd.com",18],["shoppinglys.blogspot.com",18],["komiktap.in",18],["adobezii.com",18],["8tm.net",18],["afasiaarchzine.com",18],["getpczone.com",18],["secretsdeepweb.blogspot.com",18],["kiwiexploits.com",18],["freemiumaccounts.net",18],["jaysndees.com",18],["paidtomoney.com",18],["doctor-groups.com",18],["mailocal2.xyz",18],["tqanime.com",18],["devcourseweb.com",18],["anime-saikou.com",18],["donghuanosekai.com",18],["1shorten.com",18],["publicananker.com",18],["rodjulian.com",18],["jagoanssh.com",18],["pcso-lottoresults.com",18],["coinurl.net",18],["todoseriales1.blogspot.com",18],["cryptslice.com",18],["omgexploits.com",18],["nusantaraproject.my.id",18],["crazyblog.in",18],["short-zero.com",18],["cubehosting.me",18],["gifans.com",18],["xanimehub.com",18],["goldenmanga.top",18],["bshopme.site",18],["watchdoge.xyz",18],["clk.asia",18],["imperialstudy.com",18],["skincarie.com",18],["fztvseries.mobi",18],["lecturel.com",18],["khsm.io",18],["crunchyroll.com",19],["extremereportbot.com",20],["multiup.io",22],["multiup.org",22],["multiup.eu",22],["mangalist.org",23],["javcl.com",23],["goalup.live",23],["gats.io",23],["oxl.one",23],["sbplay1.com",23],["sbvideo.net",23],["embedsb.com",23],["streamlare.com",23],["freereceivesms.com",23],["plhqtvhay.xyz",23],["live.dragaoconnect.net",23],["techmuzz.com",24],["lecourrier-du-soir.com",26],["work.ink",27],["zhlednito.cz",28],["thgss.com",29],["soninow.com",29],["moviemakeronline.com",29],["pstream.net",30],["premid.app",31],["007stockchat.com",32],["stockhideout.com",32],["radio.zone",32],["openculture.com",32],["clapway.com",32],["kawarthanow.com",32],["rollstroll.com",32],["vrcmods.com",33],["gettapeads.com",34],["streamnoads.com",34],["tapeadsenjoyer.com",34],["tapeantiads.com",34],["tapeblocker.com",34],["tapenoads.com",34],["tapewithadblock.org",34],["beverfood.com",34],["gamezop.com",35],["lewdninja.com",36],["lewd.ninja",36],["laptrinhx.com",37],["freemc.host",38],["sunhope.it",39],["schoolcheats.net",40],["1cloudfile.com",41],["luckydice.net",42],["erofound.com",43],["newscon.org",43],["fastconverter.net",44],["canale.live",45],["molotov.tv",46],["igay69.com",47],["davescomputertips.com",47],["ios.codevn.net",48],["wheelofgold.com",50],["shortlinks.tech",51],["chat.nrj.fr",52],["tchatche.com",53],["dvm360.com",54],["freshplaza.com",55],["hortidaily.com",55],["knowyourmeme.com",56],["businessinsider.com",57]]);

const entitiesMap = new Map([["finanzen",3],["vidsrc",6],["mylink",7],["my1ink",7],["myl1nk",7],["myli3k",7],["gogoanimetv",10],["streameast",18],["thestreameast",18],["getfreecourses",18],["freetutorials",18],["bg-gledai",18],["link1s",18],["pasend",18],["shortzzy",18],["fzm",18],["fzmovies",18],["akwam",18],["videovard",23],["rmcmv",25],["sushiscan",32],["adblockeronstape",34],["adblockplustape",34],["adblockstreamtape",34],["adblockstrtape",34],["adblockstrtech",34],["adblocktape",34],["antiadtape",34],["noblocktape",34],["stapadblockuser",34],["stape",34],["strcloud",34],["streamadblocker",34],["streamadblockplus",34],["streamta",34],["streamtape",34],["streamtapeadblockuser",34],["strtape",34],["strtapeadblock",34],["strtapeadblocker",34],["strtpe",34],["oxy",49]]);

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
