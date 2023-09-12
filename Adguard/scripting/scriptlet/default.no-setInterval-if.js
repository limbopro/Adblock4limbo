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

const argsList = [["fireEvent","500"],["abvsLowerThirdVisible"],["nrWrapper"],["break"],["debug"],["/devtools|0x/"],["/0x|google|ecoded|==/"],["readyState"],["_0x"],["()","500"],["visibility","1000"],["adblockerModal","1000"],["user=null","1000"],["_checkBait"],["ads"],["()","5000"],["_$","12345"],[".append","1000"],["AdBlock"],["onAdVideoStart"],["/_0x|debug/"],["complete","50"],["document.readyState"],[".submit"],["0x"],["adblocker"],["visibility"],["iframe"],["a0b"],["/^/"],["adsbygoogle"],["length"],["innerHTML"],["height"],["adblock"],["debugger"],["DevToolsOpen"],["clearInterval(i)","1000"],["length","1000"],["document.getElementById","10000"],["daadb"],["Adblocker"],["afStorage"],["adb"],["Click"],["console"],["href"],["atob","1000"],[".hide"],["goog"],["show"],["offsetHeight"],["onerror"],["verificarLargura"],["location"],["AB.html"],["analytics.initialized"],["blogherads"],["setInterval"]];

const hostnamesMap = new Map([["tvtoday.de",0],["vaughn.live",1],["mcloud.to",3],["vidstream.pro",3],["nolive.me",4],["thedigitalfix.com",4],["frprn.com",7],["xsanime.com",8],["javfull.net",8],["f2movies.to",8],["jaanmusic.in",8],["rtxkeeda.com",8],["ipalibrary.me",[8,51]],["ipacrack.com",8],["fembed.com",9],["o2tvseries.com",10],["hackyouriphone.org",10],["leonardolatella.it",10],["pluslive.live",10],["shareappscrack.com",10],["sopasti.com",10],["zone-telechargement2.net",10],["programasvirtualespc.net",10],["kimochi.info",10],["sombex.com",10],["shrinkurl.org",10],["cheatsquad.gg",10],["forex-trnd.com",10],["vidlii.com",10],["fontyukle.net",10],["wplink.online",10],["zuketcreation.net",10],["watchtvseries.video",10],["linkshrnk.com",10],["verteleseriesonline.com",10],["akbardwi.my.id",10],["hdmp4mania1.net",10],["arabnaar.com",10],["sukidesuost.info",10],["ricettafitness.com",10],["freenote.biz",10],["womenreality.com",10],["portable4pc.com",10],["localizaagencia.com",10],["downloaderzone.com",10],["themes-dl.com",10],["freegetdownloader.com",10],["oncam.me",10],["anomize.xyz",10],["casos-aislados.com",10],["freeomovie.to",10],["myviptuto.com",10],["novelasligera.com",10],["hightqualityshop.com",10],["mondainai.moe",10],["rahim-soft.com",10],["faucethub.top",10],["dayoftheweek.org",10],["utorrentgamesps2.blogspot.com",10],["vstplugs.com",10],["freedeepweb.blogspot.com",10],["text2voice.org",10],["lookimg.com",10],["graphicdesignresources.net",10],["veryfiles.com",10],["aemenstore.com",10],["alogum.com",10],["anhdep24.com",10],["byboe.com",10],["cazzette.com",10],["dataf.pro",10],["hookeaudio.com",10],["jncojeans.com",10],["kiemlua.com",10],["kingsleynyc.com",10],["lucidcam.com",10],["marharo.com",10],["medcpu.com",10],["nguyenvanbao.com",10],["nousdecor.com",10],["pennbookcenter.com",10],["restorbio.com",10],["staaker.com",10],["thegoneapp.com",10],["uebnews.online",10],["necksdesign.com",10],["bioskopkaca21.com",10],["larvelfaucet.com",10],["quicasting.it",10],["ihaxk.com",10],["iptunnels.com",10],["appsfullversion.com",10],["davidgalaxia.com",10],["anonymous-links.com",10],["planet-streaming1.com",10],["unionmanga.xyz",10],["vviruslove.com",10],["koreanaddict.net",10],["unity3diy.blogspot.com",10],["hakie.net",10],["checkfiletype.com",10],["santoinferninho.com",10],["gurl.pw",10],["webzews.com",10],["sociadrive.com",10],["blowxtube.com",10],["adltc.cc",10],["angeloyeo.github.io",10],["csgo-ranks.com",10],["royalkom.com",10],["super-ethanol.com",10],["surf-trx.com",10],["samapkstore.com",10],["satoshiquiz.com",10],["shortenbuddy.com",10],["adeth.cc",10],["submitclimb.com",10],["addoge.cc",10],["softairbay.com",10],["swift4claim.com",10],["best-shopme.com",10],["tw-hkt.blogspot.com",10],["hugo3c.tw",10],["androidtunado.com.br",10],["midiextreme.com",10],["tellygossips.net",10],["newsiqra.com",10],["dota2freaks.com",10],["how2pc.com",10],["weviral.org",10],["alltechnerd.com",10],["shoppinglys.blogspot.com",10],["fxlap.com",10],["komiktap.in",10],["janusnotes.com",10],["adobezii.com",10],["8tm.net",10],["afasiaarchzine.com",10],["ashort1a.xyz",10],["lolowall.com",10],["getpczone.com",10],["secretsdeepweb.blogspot.com",10],["kiwiexploits.com",10],["tecnomusic-evolution.com",10],["freemiumaccounts.net",10],["jaysndees.com",10],["paidtomoney.com",10],["doctor-groups.com",10],["mailocal2.xyz",10],["tqanime.com",10],["devcourseweb.com",10],["anime-saikou.com",10],["donghuanosekai.com",10],["1shorten.com",10],["publicananker.com",10],["rodjulian.com",10],["jagoanssh.com",10],["clickscoin.com",10],["dogeclick.net",10],["pcso-lottoresults.com",10],["coinurl.net",10],["ltc24.com",10],["todoseriales1.blogspot.com",10],["cryptslice.com",10],["crypto-faucet.xyz",10],["omgexploits.com",10],["nusantaraproject.my.id",10],["crazyblog.in",10],["cblinks.xyz",10],["galaxycrypto.net",10],["short-zero.com",10],["cubehosting.me",10],["gifans.com",10],["shortlink.prz.pw",10],["xanimehub.com",10],["goldenmanga.top",10],["bshopme.site",10],["melodelaa.link",10],["watchdoge.xyz",10],["clk.asia",10],["imperialstudy.com",10],["skincarie.com",10],["techmart4u.in",10],["urlfiles.com",10],["fztvseries.mobi",10],["lecturel.com",10],["khsm.io",10],["hulkshare.com",11],["faucetcrypto.com",12],["giveawayoftheday.com",13],["duplichecker.com",14],["plagiarismchecker.co",14],["plagiarismdetector.net",14],["searchenginereports.net",14],["smallseotools.com",14],["erofound.com",14],["newscon.org",14],["uploadbox.io",15],["megafile.io",15],["myjest.com",16],["4shared.com",17],["mad4wheels.com",18],["crunchyroll.com",19],["extremereportbot.com",20],["tubepornclassic.com",[21,22]],["shemalez.com",22],["mangalist.org",24],["javcl.com",24],["goalup.live",24],["gats.io",24],["upvideo.to",24],["oxl.one",24],["sbplay1.com",24],["sbvideo.net",24],["embedsb.com",24],["streamlare.com",24],["freereceivesms.com",24],["plhqtvhay.xyz",24],["himovies.to",24],["live.dragaoconnect.net",24],["techmuzz.com",25],["lecourrier-du-soir.com",27],["work.ink",28],["zhlednito.cz",29],["thgss.com",30],["moviemakeronline.com",30],["pstream.net",31],["premid.app",32],["vrcmods.com",33],["adblockplustape.com",34],["tapewithadblock.org",34],["gamezop.com",35],["ngelmat.net",36],["laptrinhx.com",37],["freemc.host",38],["sunhope.it",39],["openculture.com",40],["schoolcheats.net",41],["luckydice.net",42],["radiowereld.nl",43],["artunnel57.com",43],["fastconverter.net",44],["allcryptoz.net",45],["crewbase.net",45],["crewus.net",45],["shinbhu.net",45],["shinchu.net",45],["thumb8.net",45],["thumb9.net",45],["topcryptoz.net",45],["uniqueten.net",45],["ultraten.net",45],["canale.live",46],["mdn.lol",47],["oxy.st",48],["molotov.tv",49],["igay69.com",50],["davescomputertips.com",50],["wheelofgold.com",52],["shortlinks.tech",53],["chat.nrj.fr",54],["tchatche.com",55],["dvm360.com",56],["knowyourmeme.com",57],["businessinsider.com",58]]);

const entitiesMap = new Map([["finanzen",2],["vidsrc",5],["mylink",6],["my1ink",6],["myl1nk",6],["myli3k",6],["gogoanimetv",8],["file-upload",10],["claimdoge",10],["freecourselab",10],["seriehd",10],["streameast",10],["thestreameast",10],["getfreecourses",10],["freetutorials",10],["vstx",10],["bg-gledai",10],["link1s",10],["pasend",10],["shortzzy",10],["fzm",10],["fzmovies",10],["akwam",10],["multiup",23],["videovard",24],["rmcmv",26],["adblockeronstape",34],["adblockstreamtape",34],["adblockstrtape",34],["adblockstrtech",34],["antiadtape",34],["stapadblockuser",34],["stape",34],["strcloud",34],["streamadblocker",34],["streamadblockplus",34],["streamta",34],["streamtape",34],["streamtapeadblockuser",34],["strtape",34],["strtapeadblock",34],["strtapeadblocker",34],["strtpe",34],["sushiscan",40]]);

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
            const a = String(args[0]);
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
        'Error': self.Error,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'jsonParse': self.JSON.parse.bind(self.JSON),
        'jsonStringify': self.JSON.stringify.bind(self.JSON),
        'log': console.log.bind(console),
        uboLog(...args) {
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
            }
            const expect = (options.canNegate === true && pattern.startsWith('!') === false);
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
        patternToRegex(pattern, flags = undefined) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
            }
            try {
                return new RegExp(match[1], match[2] || flags);
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

// Not Firefox
if ( typeof wrappedJSObject !== 'object' ) {
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
