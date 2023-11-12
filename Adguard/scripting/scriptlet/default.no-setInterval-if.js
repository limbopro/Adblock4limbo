/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
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

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["fireEvent","500"],["abvsLowerThirdVisible"],["adb"],["nrWrapper"],["break"],["debug"],["/devtools|0x/"],["/0x|google|ecoded|==/"],["readyState"],["_0x"],["()","500"],["visibility","1000"],["adblockerModal","1000"],["user=null","1000"],["_checkBait"],["ads"],["()","5000"],["_$","12345"],[".append","1000"],["AdBlock"],["onAdVideoStart"],["/_0x|debug/"],["complete","50"],["document.readyState"],[".submit"],["0x"],["adblocker"],["visibility"],["iframe"],["a0b"],["/^/"],["adsbygoogle"],["length"],["innerHTML"],["height"],["adblock"],["debugger"],["atob"],["DevToolsOpen"],["clearInterval(i)","1000"],["length","1000"],["document.getElementById","10000"],["daadb"],["Adblocker"],["afStorage"],["Click"],["href"],["atob","1000"],[".hide"],["goog"],["show"],["offsetHeight"],["onerror"],["verificarLargura"],["location"],["AB.html"],["analytics.initialized"],["banner"],["blogherads"],["setInterval"]];

const hostnamesMap = new Map([["tvtoday.de",0],["vaughn.live",1],["economictimes.indiatimes.com",2],["artunnel57.com",2],["mcloud.bz",4],["vidstream.pro",4],["nolive.me",5],["thedigitalfix.com",5],["frprn.com",8],["xsanime.com",9],["javfull.net",9],["f2movies.to",9],["rtxkeeda.com",9],["ipalibrary.me",[9,51]],["ipacrack.com",9],["fembed.com",10],["o2tvseries.com",11],["hackyouriphone.org",11],["leonardolatella.it",11],["pluslive.live",11],["shareappscrack.com",11],["sopasti.com",11],["zone-telechargement2.net",11],["programasvirtualespc.net",11],["kimochi.info",11],["sombex.com",11],["cheatsquad.gg",11],["forex-trnd.com",11],["vidlii.com",11],["fontyukle.net",11],["zuketcreation.net",11],["watchtvseries.video",11],["linkshrnk.com",11],["verteleseriesonline.com",11],["akbardwi.my.id",11],["hdmp4mania1.net",11],["arabnaar.com",11],["sukidesuost.info",11],["ricettafitness.com",11],["freenote.biz",11],["womenreality.com",11],["portable4pc.com",11],["localizaagencia.com",11],["downloaderzone.com",11],["themes-dl.com",11],["freegetdownloader.com",11],["oncam.me",11],["anomize.xyz",11],["casos-aislados.com",11],["freeomovie.to",11],["myviptuto.com",11],["novelasligera.com",11],["hightqualityshop.com",11],["mondainai.moe",11],["rahim-soft.com",11],["faucethub.top",11],["dayoftheweek.org",11],["utorrentgamesps2.blogspot.com",11],["vstplugs.com",11],["freedeepweb.blogspot.com",11],["text2voice.org",11],["lookimg.com",11],["graphicdesignresources.net",11],["veryfiles.com",11],["aemenstore.com",11],["byboe.com",11],["cazzette.com",11],["dataf.pro",11],["hookeaudio.com",11],["jncojeans.com",11],["kiemlua.com",11],["kingsleynyc.com",11],["lucidcam.com",11],["marharo.com",11],["medcpu.com",11],["nguyenvanbao.com",11],["nousdecor.com",11],["pennbookcenter.com",11],["restorbio.com",11],["staaker.com",11],["thegoneapp.com",11],["uebnews.online",11],["necksdesign.com",11],["bioskopkaca21.com",11],["larvelfaucet.com",11],["quicasting.it",11],["ihaxk.com",11],["iptunnels.com",11],["appsfullversion.com",11],["davidgalaxia.com",11],["anonymous-links.com",11],["planet-streaming1.com",11],["unionmanga.xyz",11],["vviruslove.com",11],["koreanaddict.net",11],["unity3diy.blogspot.com",11],["hakie.net",11],["checkfiletype.com",11],["santoinferninho.com",11],["gurl.pw",11],["webzews.com",11],["sociadrive.com",11],["blowxtube.com",11],["adltc.cc",11],["angeloyeo.github.io",11],["csgo-ranks.com",11],["royalkom.com",11],["super-ethanol.com",11],["surf-trx.com",11],["samapkstore.com",11],["satoshiquiz.com",11],["shortenbuddy.com",11],["adeth.cc",11],["submitclimb.com",11],["addoge.cc",11],["softairbay.com",11],["swift4claim.com",11],["best-shopme.com",11],["tw-hkt.blogspot.com",11],["hugo3c.tw",11],["androidtunado.com.br",11],["midiextreme.com",11],["tellygossips.net",11],["newsiqra.com",11],["dota2freaks.com",11],["how2pc.com",11],["weviral.org",11],["alltechnerd.com",11],["shoppinglys.blogspot.com",11],["fxlap.com",11],["komiktap.in",11],["janusnotes.com",11],["adobezii.com",11],["8tm.net",11],["afasiaarchzine.com",11],["lolowall.com",11],["getpczone.com",11],["secretsdeepweb.blogspot.com",11],["kiwiexploits.com",11],["tecnomusic-evolution.com",11],["freemiumaccounts.net",11],["jaysndees.com",11],["paidtomoney.com",11],["doctor-groups.com",11],["mailocal2.xyz",11],["tqanime.com",11],["devcourseweb.com",11],["anime-saikou.com",11],["donghuanosekai.com",11],["1shorten.com",11],["publicananker.com",11],["rodjulian.com",11],["jagoanssh.com",11],["clickscoin.com",11],["dogeclick.net",11],["pcso-lottoresults.com",11],["coinurl.net",11],["todoseriales1.blogspot.com",11],["cryptslice.com",11],["omgexploits.com",11],["nusantaraproject.my.id",11],["crazyblog.in",11],["short-zero.com",11],["cubehosting.me",11],["gifans.com",11],["shortlink.prz.pw",11],["xanimehub.com",11],["goldenmanga.top",11],["bshopme.site",11],["melodelaa.link",11],["watchdoge.xyz",11],["clk.asia",11],["imperialstudy.com",11],["skincarie.com",11],["fztvseries.mobi",11],["lecturel.com",11],["khsm.io",11],["hulkshare.com",12],["faucetcrypto.com",13],["giveawayoftheday.com",14],["duplichecker.com",15],["plagiarismchecker.co",15],["plagiarismdetector.net",15],["searchenginereports.net",15],["smallseotools.com",15],["erofound.com",15],["newscon.org",15],["uploadbox.io",16],["megafile.io",16],["myjest.com",17],["4shared.com",18],["mad4wheels.com",19],["crunchyroll.com",20],["extremereportbot.com",21],["tubepornclassic.com",[22,23]],["shemalez.com",23],["multiup.io",24],["multiup.org",24],["multiup.eu",24],["mangalist.org",25],["javcl.com",25],["goalup.live",25],["gats.io",25],["upvideo.to",25],["oxl.one",25],["sbplay1.com",25],["sbvideo.net",25],["embedsb.com",25],["streamlare.com",25],["freereceivesms.com",25],["plhqtvhay.xyz",25],["himovies.to",25],["live.dragaoconnect.net",25],["techmuzz.com",26],["lecourrier-du-soir.com",28],["work.ink",29],["zhlednito.cz",30],["thgss.com",31],["moviemakeronline.com",31],["pstream.net",32],["premid.app",33],["vrcmods.com",34],["adblockplustape.com",35],["streamnoads.com",35],["tapeblocker.com",35],["tapenoads.com",35],["tapewithadblock.org",35],["gamezop.com",36],["lewdninja.com",37],["lewd.ninja",37],["ngelmat.net",38],["laptrinhx.com",39],["freemc.host",40],["sunhope.it",41],["openculture.com",42],["clapway.com",42],["schoolcheats.net",43],["luckydice.net",44],["fastconverter.net",45],["canale.live",46],["mdn.lol",47],["oxy.st",48],["molotov.tv",49],["igay69.com",50],["davescomputertips.com",50],["wheelofgold.com",52],["shortlinks.tech",53],["chat.nrj.fr",54],["tchatche.com",55],["dvm360.com",56],["freshplaza.com",57],["hortidaily.com",57],["knowyourmeme.com",58],["businessinsider.com",59]]);

const entitiesMap = new Map([["finanzen",3],["vidsrc",6],["mylink",7],["my1ink",7],["myl1nk",7],["myli3k",7],["gogoanimetv",9],["file-upload",11],["claimdoge",11],["freecourselab",11],["seriehd",11],["streameast",11],["thestreameast",11],["getfreecourses",11],["freetutorials",11],["vstx",11],["bg-gledai",11],["link1s",11],["pasend",11],["shortzzy",11],["fzm",11],["fzmovies",11],["akwam",11],["videovard",25],["rmcmv",27],["adblockeronstape",35],["adblockstreamtape",35],["adblockstrtape",35],["adblockstrtech",35],["adblocktape",35],["antiadtape",35],["noblocktape",35],["stapadblockuser",35],["stape",35],["strcloud",35],["streamadblocker",35],["streamadblockplus",35],["streamta",35],["streamtape",35],["streamtapeadblockuser",35],["strtape",35],["strtapeadblock",35],["strtapeadblocker",35],["strtpe",35],["sushiscan",42]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function noSetIntervalIf(
    needle = '',
    delay = ''
) {
    if ( typeof needle !== 'string' ) { return; }
    const safe = safeSelf();
    const needleNot = needle.charAt(0) === '!';
    if ( needleNot ) { needle = needle.slice(1); }
    if ( delay === '' ) { delay = undefined; }
    let delayNot = false;
    if ( delay !== undefined ) {
        delayNot = delay.charAt(0) === '!';
        if ( delayNot ) { delay = delay.slice(1); }
        delay = parseInt(delay, 10);
    }
    const log = needleNot === false && needle === '' && delay === undefined
        ? console.log
        : undefined;
    const reNeedle = safe.patternToRegex(needle);
    self.setInterval = new Proxy(self.setInterval, {
        apply: function(target, thisArg, args) {
            const a = args[0] instanceof Function
                ? String(safe.Function_toString(args[0]))
                : String(args[0]);
            const b = args[1];
            if ( log !== undefined ) {
                log('uBO: setInterval("%s", %s)', a, b);
            } else {
                let defuse;
                if ( needle !== '' ) {
                    defuse = reNeedle.test(a) !== needleNot;
                }
                if ( defuse !== false && delay !== undefined ) {
                    defuse = (b === delay || isNaN(b) && isNaN(delay) ) !== delayNot;
                }
                if ( defuse ) {
                    args[0] = function(){};
                }
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
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
    }
    const self = globalThis;
    const safe = {
        'Array_from': Array.from,
        'Error': self.Error,
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
        'Math_floor': Math.floor,
        'Math_random': Math.random,
        'Object_defineProperty': Object.defineProperty.bind(Object),
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
        uboLog(...args) {
            if ( scriptletGlobals.has('canDebug') === false ) { return; }
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
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
                    pattern,
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            return {
                pattern,
                re: new this.RegExp(pattern.replace(
                    /[.*+?^${}()|[\]\\]/g, '\\$&'),
                    options.flags
                ),
                expect,
            };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            return this.RegExp_test.call(details.re, haystack) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
            return Object.fromEntries(entries);
        },
    };
    scriptletGlobals.set('safeSelf', safe);
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
