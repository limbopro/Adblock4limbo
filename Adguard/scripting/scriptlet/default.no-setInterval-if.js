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

const argsList = [["fireEvent","500"],["header_menu_abvs","10000"],["adb"],["nrWrapper"],["break"],["debug"],["/devtools|0x/"],["/0x|google|ecoded|==/"],["document.readyState"],["readyState"],["_0x"],["()","500"],["visibility","1000"],["adblockerModal","1000"],["user=null","1000"],["_checkBait"],["()","5000"],["_$","12345"],[".append","1000"],["onAdVideoStart"],["/_0x|debug/"],["complete","50"],[".submit"],["0x"],["adblocker"],["visibility"],["iframe"],["a0b"],["/^/"],["adsbygoogle"],["length"],["innerHTML"],["daadb"],["height"],["adblock"],["debugger"],["atob"],["clearInterval(i)","1000"],["length","1000"],["document.getElementById","10000"],["Adblocker"],["!display"],["afStorage"],["ads"],["Click"],["href"],["goog"],["show"],["offsetHeight"],[".hide"],["onerror"],["verificarLargura"],["location"],["AB.html"],["analytics.initialized"],["banner"],["blogherads"],["setInterval"]];

const hostnamesMap = new Map([["tvtoday.de",0],["vaughn.live",1],["economictimes.indiatimes.com",2],["mcloud.bz",4],["vidstream.pro",4],["nolive.me",5],["thedigitalfix.com",5],["shemalez.com",8],["tubepornclassic.com",[8,21]],["frprn.com",9],["xsanime.com",10],["javfull.net",10],["f2movies.to",10],["rtxkeeda.com",10],["ipalibrary.me",[10,48]],["ipacrack.com",10],["king-shoot.io",10],["fembed.com",11],["o2tvseries.com",12],["hackyouriphone.org",12],["pluslive.live",12],["sopasti.com",12],["programasvirtualespc.net",12],["kimochi.info",12],["sombex.com",12],["cheatsquad.gg",12],["forex-trnd.com",12],["vidlii.com",12],["zuketcreation.net",12],["watchtvseries.video",12],["linkshrnk.com",12],["verteleseriesonline.com",12],["akbardwi.my.id",12],["hdmp4mania1.net",12],["arabnaar.com",12],["sukidesuost.info",12],["ricettafitness.com",12],["freenote.biz",12],["womenreality.com",12],["portable4pc.com",12],["localizaagencia.com",12],["downloaderzone.com",12],["themes-dl.com",12],["freegetdownloader.com",12],["oncam.me",12],["anomize.xyz",12],["casos-aislados.com",12],["freeomovie.to",12],["myviptuto.com",12],["novelasligera.com",12],["hightqualityshop.com",12],["mondainai.moe",12],["rahim-soft.com",12],["dayoftheweek.org",12],["freedeepweb.blogspot.com",12],["text2voice.org",12],["lookimg.com",12],["graphicdesignresources.net",12],["veryfiles.com",12],["aemenstore.com",12],["byboe.com",12],["cazzette.com",12],["dataf.pro",12],["hookeaudio.com",12],["jncojeans.com",12],["kiemlua.com",12],["kingsleynyc.com",12],["lucidcam.com",12],["marharo.com",12],["medcpu.com",12],["nguyenvanbao.com",12],["nousdecor.com",12],["pennbookcenter.com",12],["restorbio.com",12],["staaker.com",12],["thegoneapp.com",12],["uebnews.online",12],["necksdesign.com",12],["larvelfaucet.com",12],["quicasting.it",12],["ihaxk.com",12],["iptunnels.com",12],["appsfullversion.com",12],["davidgalaxia.com",12],["anonymous-links.com",12],["planet-streaming1.com",12],["unionmanga.xyz",12],["vviruslove.com",12],["unity3diy.blogspot.com",12],["hakie.net",12],["checkfiletype.com",12],["santoinferninho.com",12],["gurl.pw",12],["sociadrive.com",12],["angeloyeo.github.io",12],["csgo-ranks.com",12],["royalkom.com",12],["super-ethanol.com",12],["surf-trx.com",12],["samapkstore.com",12],["satoshiquiz.com",12],["shortenbuddy.com",12],["adeth.cc",12],["submitclimb.com",12],["softairbay.com",12],["swift4claim.com",12],["best-shopme.com",12],["tw-hkt.blogspot.com",12],["hugo3c.tw",12],["androidtunado.com.br",12],["midiextreme.com",12],["tellygossips.net",12],["newsiqra.com",12],["dota2freaks.com",12],["how2pc.com",12],["weviral.org",12],["alltechnerd.com",12],["shoppinglys.blogspot.com",12],["komiktap.in",12],["adobezii.com",12],["8tm.net",12],["afasiaarchzine.com",12],["getpczone.com",12],["secretsdeepweb.blogspot.com",12],["kiwiexploits.com",12],["freemiumaccounts.net",12],["jaysndees.com",12],["paidtomoney.com",12],["doctor-groups.com",12],["mailocal2.xyz",12],["tqanime.com",12],["devcourseweb.com",12],["anime-saikou.com",12],["donghuanosekai.com",12],["1shorten.com",12],["publicananker.com",12],["rodjulian.com",12],["jagoanssh.com",12],["pcso-lottoresults.com",12],["coinurl.net",12],["todoseriales1.blogspot.com",12],["cryptslice.com",12],["omgexploits.com",12],["nusantaraproject.my.id",12],["crazyblog.in",12],["short-zero.com",12],["cubehosting.me",12],["gifans.com",12],["shortlink.prz.pw",12],["xanimehub.com",12],["goldenmanga.top",12],["bshopme.site",12],["watchdoge.xyz",12],["clk.asia",12],["imperialstudy.com",12],["skincarie.com",12],["fztvseries.mobi",12],["lecturel.com",12],["khsm.io",12],["hulkshare.com",13],["faucetcrypto.com",14],["giveawayoftheday.com",15],["uploadbox.io",16],["megafile.io",16],["myjest.com",17],["4shared.com",18],["crunchyroll.com",19],["extremereportbot.com",20],["multiup.io",22],["multiup.org",22],["multiup.eu",22],["mangalist.org",23],["javcl.com",23],["goalup.live",23],["gats.io",23],["upvideo.to",23],["oxl.one",23],["sbplay1.com",23],["sbvideo.net",23],["embedsb.com",23],["streamlare.com",23],["freereceivesms.com",23],["plhqtvhay.xyz",23],["live.dragaoconnect.net",23],["techmuzz.com",24],["lecourrier-du-soir.com",26],["work.ink",27],["zhlednito.cz",28],["thgss.com",29],["soninow.com",29],["moviemakeronline.com",29],["pstream.net",30],["premid.app",31],["007stockchat.com",32],["stockhideout.com",32],["radio.zone",32],["openculture.com",32],["clapway.com",32],["kawarthanow.com",32],["rollstroll.com",32],["vrcmods.com",33],["adblockplustape.com",34],["streamnoads.com",34],["tapeadsenjoyer.com",34],["tapeantiads.com",34],["tapeblocker.com",34],["tapenoads.com",34],["tapewithadblock.org",34],["beverfood.com",34],["gamezop.com",35],["lewdninja.com",36],["lewd.ninja",36],["laptrinhx.com",37],["freemc.host",38],["sunhope.it",39],["schoolcheats.net",40],["1cloudfile.com",41],["luckydice.net",42],["erofound.com",43],["newscon.org",43],["fastconverter.net",44],["canale.live",45],["molotov.tv",46],["igay69.com",47],["davescomputertips.com",47],["ios.codevn.net",48],["wheelofgold.com",50],["shortlinks.tech",51],["chat.nrj.fr",52],["tchatche.com",53],["dvm360.com",54],["freshplaza.com",55],["hortidaily.com",55],["knowyourmeme.com",56],["businessinsider.com",57]]);

const entitiesMap = new Map([["finanzen",3],["vidsrc",6],["mylink",7],["my1ink",7],["myl1nk",7],["myli3k",7],["gogoanimetv",10],["file-upload",12],["claimdoge",12],["freecourselab",12],["seriehd",12],["streameast",12],["thestreameast",12],["getfreecourses",12],["freetutorials",12],["vstx",12],["bg-gledai",12],["link1s",12],["pasend",12],["shortzzy",12],["fzm",12],["fzmovies",12],["akwam",12],["videovard",23],["rmcmv",25],["sushiscan",32],["adblockeronstape",34],["adblockstreamtape",34],["adblockstrtape",34],["adblockstrtech",34],["adblocktape",34],["antiadtape",34],["noblocktape",34],["stapadblockuser",34],["stape",34],["strcloud",34],["streamadblocker",34],["streamadblockplus",34],["streamta",34],["streamtape",34],["streamtapeadblockuser",34],["strtape",34],["strtapeadblock",34],["strtapeadblocker",34],["strtpe",34],["oxy",49]]);

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
