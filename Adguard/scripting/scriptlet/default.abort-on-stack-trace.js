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
const uBOL_abortOnStackTrace = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["Math","onerror"],["Math.random","injectedScript"],["Math.random","/injectedScript.*inlineScript/"],["Math.random","/(?=.*onerror)(?=^(?!.*(https)))/"],["open","setPopUnder"],["document.createElement","_0x"],["String.prototype.charCodeAt","ai_"],["onload","inlineScript"],["document.getElementById","adsBlocked"],["navigator.userAgent","exopop.browser.is"],["Math.random","stackDepth:4"],["Math.random","inlineScript"],["Math","inlineScript"],["document.cookie","https"],["Math","/(?=^(?!.*(api|jquery|inlineScript|form|Progress)))/"],["atob","_0x"],["String.fromCharCode","stackDepth:3"],["Math.round","inlineScript"],["document.createElement","inlineScript"],["jQuery","blockDLElements"],["document.getElementById","onLoadEvent"],["Object","inlineScript"],["Object","mark"],["document.addEventListener","blocker"],["console.log","stackDepth:2"],["String.prototype.charCodeAt","https"],["encodeURIComponent","inlineScript"],["$","/(?=^(?!.*(https)))/"],["$ado","ado"],["document.createElement","app.js"],["Math","showModal"],["EventTarget.prototype.addEventListener","stackDepth:3"],["Math.random","t.pt"],["String.prototype.charCodeAt","_0x"],["Math.random","/\\st\\.[a-zA-Z]*\\s/"],["Object","/(?=^(?!.*(https)))/"],["Math.random","/\\st\\.[a-zA-Z]*\\sinlineScript/"],["XMLHttpRequest","rocket"],["XMLHttpRequest","/inlineScript|stackDepth:1/"],["XMLHttpRequest","inlineScript"],["Object.prototype.hasOwnProperty","/(?=^(?!.*(Array|Object|facebook|google)))/"],["Math.random",""],["jQuery","ai_adb"],["JSON.parse","computed"],["XMLHttpRequest","onreadystatechange"],["localStorage","inlineScript"],["_pop","_init"],["Math.floor","/computed|\\$\\./"],["Math.floor",""],["Math.floor","randStr"],["Math.round","onload"],["$",":1:1"],["Math","ai_"],["document.createElement","make_rand_div"],["_pop"],["localStorage","stackDepth:1"],["Math.floor","_0x"],["foreverJQ","/document.createElement|stackDepth:2/"],["Math",""],["Math.random","computed"],["$","inlineScript"],["Math","https"],["Element.prototype.matches","litespeed"],["HTMLSelectElement","Object"],["fetch","inlineScript"],["console","onload"],["document.getElementById","disable"],["XMLHttpRequest","injectedScript"],["Math","_0x"],["onload","/app.js"],["document.createElement","create_ad"],["document.createElement","/^(?!.*(jquery|setDocument|inlineScript|gstatic|google|root|cgi).*)/"],["document.createElement","/(?=^(?!.*(https)))/"],["document.createElement","/(?=^(?!.*(http)))/"],["Object","webpack"],["String.prototype.charCodeAt","/(?=^(?!.*(https|Object)))/"],["atob","inlineScript"],["Date.now","afScript"],["document.querySelectorAll","/(?=^(?!.*(https|Parse|Image)))/"],["document.body.appendChild"],["$","openAdsModal"],["btoa","/https|stackDepth:3/"],["document.createElement","notify"],["document.addEventListener","litespeed"],["HTMLIFrameElement","inlineScript"],["jQuery","window.onload"],["document.querySelectorAll","/(?=^(?!.*(https|injectedScript)))/"],["document.getElementById","fairAdblock"],["document.getElementsByTagName","adsBlocked"],["document.querySelector","showModal"],["atob","/zefoy\\.com\\S+:3:1/"],["setTimeout","dontask"],["setTimeout","adsBlocked"],["Object.getPrototypeOf","plugins"],["document.createElement","adsBlocked"],["Error","/stackDepth:1\\s/"],["localStorage","window.onload"],["document.querySelector","suaads"],["decodeURIComponent","autoptimize"],["String.prototype.charCodeAt","$"],["document.createElement","detect"],["Promise","https"],["atob"],["btoa","send"],["Math.floor","injectedScript"],["Math.sqrt","update"],["History","/(^(?!.*(Function|HTMLDocument).*))/"]];

const hostnamesMap = new Map([["dcdirtylaundry.com",0],["ipatriot.com",0],["newser.com",0],["politicalcowboy.com",0],["aupetitparieur.com",1],["allthingsvegas.com",1],["100percentfedup.com",1],["aidersonprochain.com",1],["beforeitsnews.com",1],["concomber.com",1],["conservativebrief.com",1],["conservativefiringline.com",1],["dailylol.com",1],["funnyand.com",1],["letocard.fr",1],["mamieastuce.com",1],["meilleurpronostic.fr",1],["patriotnationpress.com",1],["toptenz.net",1],["vitamiiin.com",1],["writerscafe.org",1],["populist.press",1],["dailytruthreport.com",1],["livinggospeldaily.com",1],["first-names-meanings.com",1],["welovetrump.com",1],["thehayride.com",1],["thelibertydaily.com",1],["thepoke.co.uk",1],["thepolitistick.com",1],["theblacksphere.net",1],["shark-tank.com",1],["naturalblaze.com",1],["greatamericanrepublic.com",1],["dailysurge.com",1],["truthlion.com",1],["flagandcross.com",1],["westword.com",1],["republicbrief.com",1],["freedomfirstnetwork.com",1],["phoenixnewtimes.com",1],["clashdaily.com",1],["madworldnews.com",1],["reviveusa.com",1],["sonsoflibertymedia.com",1],["videogamesblogger.com",1],["topminceur.fr",1],["lovezin.fr",1],["protrumpnews.com",1],["thepalmierireport.com",1],["kresy.pl",1],["thepatriotjournal.com",1],["gellerreport.com",1],["thegatewaypundit.com",1],["wltreport.com",1],["miaminewtimes.com",1],["politicalsignal.com",1],["rightwingnews.com",1],["bigleaguepolitics.com",1],["comicallyincorrect.com",1],["baomay01.com",1],["telexplorer.com.ar",2],["designbump.com",3],["thedesigninspiration.com",3],["beta.imagefap.com",4],["animesuge.to",5],["iptvbin.com",6],["gaypornmasters.com",6],["gaypornwave.com",6],["scubidu.eu",6],["amyscans.com",6],["thesukan.net",6],["jootc.com",6],["gaydelicious.com",6],["dramahd.me",6],["exbulletin.com",6],["game-owl.com",6],["javnow.net",6],["world4.eu",6],["atakanyavuz.com",6],["gadgetguideonline.com",6],["therootdroid.com",6],["lazytranslations.com",6],["icttipsandtricks.nl",6],["mettablog.com",6],["webdeyazilim.com",6],["freebulksmsonline.com",6],["buydekhke.com",6],["isekaisubs.web.id",6],["javhoho.com",6],["udoyoshi.com",6],["adrianoluis.net",6],["altevolkstrachten.de",6],["animecast.net",6],["armyranger.com",6],["articletz.com",6],["boxylucha.com",6],["chibchat.com",6],["descargasmix.xyz",6],["duniailkom.com",6],["enciclopediaonline.com",6],["entano.jp",6],["eyalo.com",6],["fosslovers.com",6],["fotopixel.es",6],["hairstylesthatwork.com",6],["hello-e1.com",6],["ichberlin.com",6],["ireez.com",6],["keepkoding.com",6],["latribunadeautomocion.es",6],["linemarlin.com",6],["lumpiastudio.com",6],["miaandme.org",6],["mobility.com.ng",6],["mygardening411.com",6],["newstvonline.com",6],["organismes.org",6],["papagiovannipaoloii.altervista.org",6],["playlists.rocks",6],["relatosdesexo.xxx",6],["rencah.com",6],["riverdesdelatribuna.com.ar",6],["sarkarinaukry.com",6],["seamanmemories.com",6],["socialmediaverve.com",6],["theorie-musik.de",6],["topperpoint.com",6],["travel-the-states.com",6],["vozz.vn",6],["ilifehacks.com",6],["gamingsym.in",6],["riotbits.com",6],["burakgoc.com",6],["pawastreams.live",6],["systopedia.com",6],["googledrivelinks.com",6],["lacuevadeguns.com",7],["magesypro.pro",8],["magicgameworld.com",8],["e-player-stream.app",8],["bethaniebu.com",8],["pussyspace.com",9],["pussyspace.net",9],["gamcore.com",10],["69games.xxx",[10,11]],["hentaisea.com",10],["porcore.com",11],["chicksonright.com",11],["moneyversed.com",11],["hentaispark.com",11],["coloredmanga.com",11],["pcgamez-download.com",12],["fifaultimateteam.it",12],["mlsbd.shop",12],["songspk2.info",12],["zootube1.com",13],["uploadbank.com",14],["tojav.net",15],["camwhorescloud.com",17],["cryptonor.xyz",18],["emurom.net",19],["gametop.com",20],["animecurse.cz",21],["getintopcd.com",21],["artribune.com",22],["elamigosedition.com",23],["laksa19.github.io",24],["mynewsmedia.co",25],["dragontranslation.com",25],["yt5s.com",25],["programmiedovetrovarli.it",26],["biopills.net",26],["myuploadedpremium.de",27],["freewebcart.com",30],["voe.sx",31],["housecardsummerbutton.com",31],["bigclatterhomesguideservice.com",31],["uptodatefinishconference.com",31],["uptodatefinishconferenceroom.com",31],["tinycat-voe-fashion.com",31],["cablegratis.online",34],["kmo.to",34],["onifile.com",34],["oxanime.com",34],["pewgame.com",34],["piraproxy.app",34],["sexphimhd.net",34],["updatesmovie.xyz",34],["voirseries.io",34],["exego.app",35],["foot2live.cc",35],["criptologico.com",35],["foreverwallpapers.com",35],["hotstar.news",35],["mcrypto.club",35],["olympicstreams.me",35],["tnmusic.in",35],["webcric.com",35],["webseriesclub.com",35],["yourtehzeeb.com",35],["shahiid-anime.net",35],["adfoc.us",36],["bitfly.io",36],["taxielcima.live",37],["mangareader.site",40],["unblocked.name",41],["nyaa.unblocked.id",41],["vibehubs.com",42],["egynow.cam",43],["traveldesearch.com",44],["thethothub.com",45],["anonymz.com",46],["sabishare.com",47],["naijaray.com.ng",48],["deutschsex.mobi",49],["1milf.com",49],["influencersgonewild.com",50],["naturalnews.com",51],["freeiphone.fr",52],["pcbeta.com",53],["notformembersonly.com",54],["donpelis.com",55],["1cloudfile.com",56],["4everproxy.com",57],["dirproxy.com",58],["fapguru.com",60],["pornpapa.com",60],["videojav.com",60],["toxicwap.us",61],["xozilla.xxx",63],["downloadfreecourse.com",64],["publicflashing.me",65],["exey.app",66],["vumoo.vip",67],["boombj.com",68],["stream.bunkr.ru",68],["jav.re",69],["coromon.wiki.gg",70],["dropmms.com",71],["sexemix.com",72],["links4u.co",[73,74]],["edoujin.net",75],["uhdgames.xyz",76],["alexsports.click",77],["pahaplayers.click",77],["imageupscaler.com",78],["picyield.com",79],["snaptik.app",80],["manhwalist.com",81],["nilesoft.org",82],["smgplaza.com",83],["novinky.cz",84],["yesmangas1.com",85],["emperorscan.com",86],["telephone-soudan.com",86],["38.242.194.12",87],["bi-girl.net",87],["medeberiyaa.com",87],["shinobijawi.id",87],["snbc13.com",87],["iconmonstr.com",88],["comedyshow.to",89],["zefoy.com",90],["sexvideos.host",91],["portalizpro.com",92],["corrector.app",93],["dailytechinfo.me",94],["jeniusplay.com",94],["cgaa.org",95],["streamporn.co.uk",96],["suaurl.com",97],["teknisitv.com",98],["paylaterin.com",98],["torrentgalaxy.to",99],["thestar.com",100],["anichin.top",101],["mundowebtoon.com",102],["goldenmanga.top",102],["tweakers.net",103],["fjlaboratories.com",104],["stoic.ai",104],["deviantart.com",105],["cadenadial.com",106]]);

const entitiesMap = new Map([["1337x",5],["pasend",6],["magesy",8],["cliver",12],["thefmovies",12],["kissjav",15],["hdvid",16],["123moviess",18],["isaimini",21],["sms24",[28,29]],["shorttey",32],["wawacity",33],["extralinks",34],["filmypur",34],["nuroflix",34],["pelis28",34],["pelisplusgo",34],["pelisplusxd",34],["repelisgoo",34],["repelisgooo",34],["repelisgt",34],["repelisxd",34],["theproxy",34],["tvply",34],["vidlox",34],["watchfree",34],["buffstreams",35],["dl-protect",35],["filmyworld",35],["moviesda1",35],["moviesda",35],["sockshare1",35],["songspk",35],["speedostream",[35,43]],["t20cric",35],["zone-telechargement",35],["pelisplus",36],["pelisplus2",36],["moviespapa",38],["kuttymovies",39],["thothub",45],["uproxy2",48],["mp3juices",59],["gotxx",62],["mmsbee",62],["movierulzhd",73]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function abortOnStackTrace(
    chain = '',
    needle = ''
) {
    if ( typeof chain !== 'string' ) { return; }
    const safe = safeSelf();
    const needleDetails = safe.initPattern(needle, { canNegate: true });
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 2);
    const makeProxy = function(owner, chain) {
        const pos = chain.indexOf('.');
        if ( pos === -1 ) {
            let v = owner[chain];
            Object.defineProperty(owner, chain, {
                get: function() {
                    if ( matchesStackTrace(needleDetails, extraArgs.log) ) {
                        throw new ReferenceError(getExceptionToken());
                    }
                    return v;
                },
                set: function(a) {
                    if ( matchesStackTrace(needleDetails, extraArgs.log) ) {
                        throw new ReferenceError(getExceptionToken());
                    }
                    v = a;
                },
            });
            return;
        }
        const prop = chain.slice(0, pos);
        let v = owner[prop];
        chain = chain.slice(pos + 1);
        if ( v ) {
            makeProxy(v, chain);
            return;
        }
        const desc = Object.getOwnPropertyDescriptor(owner, prop);
        if ( desc && desc.set !== undefined ) { return; }
        Object.defineProperty(owner, prop, {
            get: function() { return v; },
            set: function(a) {
                v = a;
                if ( a instanceof Object ) {
                    makeProxy(a, chain);
                }
            }
        });
    };
    const owner = window;
    makeProxy(owner, chain);
}

function getExceptionToken() {
    const token =
        String.fromCharCode(Date.now() % 26 + 97) +
        Math.floor(Math.random() * 982451653 + 982451653).toString(36);
    const oe = self.onerror;
    self.onerror = function(msg, ...args) {
        if ( typeof msg === 'string' && msg.includes(token) ) { return true; }
        if ( oe instanceof Function ) {
            return oe.call(this, msg, ...args);
        }
    }.bind();
    return token;
}

function matchesStackTrace(
    needleDetails,
    logLevel = 0
) {
    const safe = safeSelf();
    const exceptionToken = getExceptionToken();
    const error = new safe.Error(exceptionToken);
    const docURL = new URL(self.location.href);
    docURL.hash = '';
    // Normalize stack trace
    const reLine = /(.*?@)?(\S+)(:\d+):\d+\)?$/;
    const lines = [];
    for ( let line of error.stack.split(/[\n\r]+/) ) {
        if ( line.includes(exceptionToken) ) { continue; }
        line = line.trim();
        const match = safe.RegExp_exec.call(reLine, line);
        if ( match === null ) { continue; }
        let url = match[2];
        if ( url.startsWith('(') ) { url = url.slice(1); }
        if ( url === docURL.href ) {
            url = 'inlineScript';
        } else if ( url.startsWith('<anonymous>') ) {
            url = 'injectedScript';
        }
        let fn = match[1] !== undefined
            ? match[1].slice(0, -1)
            : line.slice(0, match.index).trim();
        if ( fn.startsWith('at') ) { fn = fn.slice(2).trim(); }
        let rowcol = match[3];
        lines.push(' ' + `${fn} ${url}${rowcol}:1`.trim());
    }
    lines[0] = `stackDepth:${lines.length-1}`;
    const stack = lines.join('\t');
    const r = safe.testPattern(needleDetails, stack);
    if (
        logLevel === 1 ||
        logLevel === 2 && r ||
        logLevel === 3 && !r
    ) {
        safe.uboLog(stack.replace(/\t/g, '\n'));
    }
    return r;
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
    try { abortOnStackTrace(...argsList[i]); }
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
    return uBOL_abortOnStackTrace();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_abortOnStackTrace = cloneInto([
            [ '(', uBOL_abortOnStackTrace.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_abortOnStackTrace);
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
    delete page.uBOL_abortOnStackTrace;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
