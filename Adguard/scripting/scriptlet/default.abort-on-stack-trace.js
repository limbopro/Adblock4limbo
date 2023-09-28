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

const argsList = [["Math","onerror"],["Math.random","injectedScript"],["Math.random","/injectedScript.*inlineScript/"],["Math.random","/(?=.*onerror)(?=^(?!.*(https)))/"],["open","setPopUnder"],["document.createElement","_0x"],["String.prototype.charCodeAt","ai_"],["onload","inlineScript"],["document.getElementById","adsBlocked"],["navigator.userAgent","exopop.browser.is"],["document.cookie","https"],["Math","/(?=^(?!.*(api|jquery|inlineScript|form|Progress)))/"],["atob","_0x"],["String.fromCharCode","stackDepth:3"],["Math.round","inlineScript"],["document.createElement","inlineScript"],["jQuery","blockDLElements"],["Math","inlineScript"],["document.getElementById","onLoadEvent"],["Object","inlineScript"],["Object","mark"],["document.addEventListener","blocker"],["console.log","stackDepth:2"],["String.prototype.charCodeAt","https"],["encodeURIComponent","inlineScript"],["$","/(?=^(?!.*(https)))/"],["$ado","/ado/i"],["document.createElement","app.js"],["Math","showModal"],["Math.random","t.pt"],["Math.random","stackDepth:4"],["String.prototype.charCodeAt","_0x"],["Math.random","/\\st\\.[a-zA-Z]*\\s/"],["Object","/(?=^(?!.*(https)))/"],["Math.random","/\\st\\.[a-zA-Z]*\\sinlineScript/"],["XMLHttpRequest","rocket"],["XMLHttpRequest","/inlineScript|stackDepth:1/"],["XMLHttpRequest","inlineScript"],["String.prototype.charAt","$0"],["Object.prototype.hasOwnProperty","/(?=^(?!.*(Array|Object|facebook|google)))/"],["document.getElementsByTagName","adsBlocked"],["Math.random",""],["jQuery","ai_adb"],["JSON.parse","computed"],["XMLHttpRequest","onreadystatechange"],["localStorage","inlineScript"],["_pop","_init"],["Math.floor",""],["Math.floor","randStr"],["Math.round","onload"],["Math","ai_"],["document.createElement","make_rand_div"],["_pop"],["localStorage","stackDepth:1"],["Math.floor","_0x"],["foreverJQ","/document.createElement|stackDepth:2/"],["Math",""],["Math.random","computed"],["$","inlineScript"],["Math","https"],["Math.random","inlineScript"],["Element.prototype.matches","litespeed"],["HTMLSelectElement","Object"],["fetch","inlineScript"],["console","onload"],["document.getElementById","disable"],["XMLHttpRequest","injectedScript"],["Math","_0x"],["onload","/app.js"],["document.createElement","create_ad"],["document.createElement","/^(?!.*(jquery|setDocument|inlineScript|gstatic|google|root|cgi).*)/"],["document.createElement","/(?=^(?!.*(https)))/"],["document.createElement","/(?=^(?!.*(http)))/"],["Object","webpack"],["String.prototype.charCodeAt","/(?=^(?!.*(https|Object)))/"],["atob","inlineScript"],["Date.now","afScript"],["document.querySelectorAll","/(?=^(?!.*(https|Parse|Image)))/"],["document.body.appendChild"],["$","openAdsModal"],["btoa","/https|stackDepth:3/"],["document.createElement","notify"],["document.addEventListener","litespeed"],["HTMLIFrameElement","inlineScript"],["jQuery","window.onload"],["document.querySelectorAll","/(?=^(?!.*(https|injectedScript)))/"],["document.querySelector","showModal"],["atob","/zefoy\\.com\\S+:3:1/"],["setTimeout","dontask"],["setTimeout","adsBlocked"],["Object.getPrototypeOf","plugins"],["document.createElement","adsBlocked"],["Error","/stackDepth:1\\s/"],["localStorage","window.onload"],["document.querySelector","suaads"],["decodeURIComponent","autoptimize"],["String.prototype.charCodeAt","$"],["document.createElement","detect"],["Promise","https"],["btoa","send"],["Math.floor","injectedScript"],["Math.sqrt","update"],["History","/(^(?!.*(Function|HTMLDocument).*))/"]];

const hostnamesMap = new Map([["dcdirtylaundry.com",0],["ipatriot.com",0],["newser.com",0],["politicalcowboy.com",0],["aupetitparieur.com",1],["allthingsvegas.com",1],["beforeitsnews.com",1],["concomber.com",1],["conservativebrief.com",1],["conservativefiringline.com",1],["dailylol.com",1],["funnyand.com",1],["letocard.fr",1],["mamieastuce.com",1],["meilleurpronostic.fr",1],["patriotnationpress.com",1],["toptenz.net",1],["vitamiiin.com",1],["writerscafe.org",1],["populist.press",1],["dailytruthreport.com",1],["livinggospeldaily.com",1],["first-names-meanings.com",1],["welovetrump.com",1],["thehayride.com",1],["thelibertydaily.com",1],["thepoke.co.uk",1],["thepolitistick.com",1],["theblacksphere.net",1],["shark-tank.com",1],["naturalblaze.com",1],["greatamericanrepublic.com",1],["dailysurge.com",1],["truthlion.com",1],["flagandcross.com",1],["westword.com",1],["republicbrief.com",1],["freedomfirstnetwork.com",1],["phoenixnewtimes.com",1],["clashdaily.com",1],["madworldnews.com",1],["reviveusa.com",1],["sonsoflibertymedia.com",1],["videogamesblogger.com",1],["topminceur.fr",1],["lovezin.fr",1],["protrumpnews.com",1],["thepalmierireport.com",1],["kresy.pl",1],["thepatriotjournal.com",1],["gellerreport.com",1],["wltreport.com",1],["miaminewtimes.com",1],["politicalsignal.com",1],["rightwingnews.com",1],["bigleaguepolitics.com",1],["comicallyincorrect.com",1],["baomay01.com",1],["telexplorer.com.ar",2],["designbump.com",3],["thedesigninspiration.com",3],["beta.imagefap.com",4],["animesuge.to",5],["iptvbin.com",6],["gaypornmasters.com",6],["gaypornwave.com",6],["scubidu.eu",6],["amyscans.com",6],["thesukan.net",6],["jootc.com",6],["gaydelicious.com",6],["dramahd.me",6],["exbulletin.com",6],["game-owl.com",6],["javnow.net",6],["world4.eu",6],["atakanyavuz.com",6],["gadgetguideonline.com",6],["therootdroid.com",6],["lazytranslations.com",6],["icttipsandtricks.nl",6],["mettablog.com",6],["webdeyazilim.com",6],["freebulksmsonline.com",6],["buydekhke.com",6],["isekaisubs.web.id",6],["javhoho.com",6],["udoyoshi.com",6],["adrianoluis.net",6],["altevolkstrachten.de",6],["animecast.net",6],["armyranger.com",6],["articletz.com",6],["boxylucha.com",6],["chibchat.com",6],["descargasmix.xyz",6],["duniailkom.com",6],["enciclopediaonline.com",6],["entano.jp",6],["eyalo.com",6],["fosslovers.com",6],["fotopixel.es",6],["hairstylesthatwork.com",6],["hello-e1.com",6],["ichberlin.com",6],["ireez.com",6],["keepkoding.com",6],["latribunadeautomocion.es",6],["linemarlin.com",6],["lumpiastudio.com",6],["miaandme.org",6],["mobility.com.ng",6],["mygardening411.com",6],["newstvonline.com",6],["organismes.org",6],["papagiovannipaoloii.altervista.org",6],["playlists.rocks",6],["relatosdesexo.xxx",6],["rencah.com",6],["riverdesdelatribuna.com.ar",6],["sarkarinaukry.com",6],["seamanmemories.com",6],["socialmediaverve.com",6],["theorie-musik.de",6],["topperpoint.com",6],["travel-the-states.com",6],["vozz.vn",6],["ilifehacks.com",6],["gamingsym.in",6],["riotbits.com",6],["burakgoc.com",6],["pawastreams.live",6],["systopedia.com",6],["googledrivelinks.com",6],["lacuevadeguns.com",7],["magesypro.pro",8],["magicgameworld.com",8],["e-player-stream.app",8],["bethaniebu.com",8],["pussyspace.com",9],["pussyspace.net",9],["zootube1.com",10],["uploadbank.com",11],["tojav.net",12],["camwhorescloud.com",14],["cryptonor.xyz",15],["emurom.net",16],["pcgamez-download.com",17],["fifaultimateteam.it",17],["mlsbd.shop",17],["songspk2.info",17],["gametop.com",18],["animecurse.cz",19],["getintopcd.com",19],["artribune.com",20],["elamigosedition.com",21],["laksa19.github.io",22],["mynewsmedia.co",23],["dragontranslation.com",23],["yt5s.com",23],["programmiedovetrovarli.it",24],["biopills.net",24],["myuploadedpremium.de",25],["freewebcart.com",28],["hentaisea.com",30],["cablegratis.online",32],["kmo.to",32],["onifile.com",32],["oxanime.com",32],["pewgame.com",32],["piraproxy.app",32],["sexphimhd.net",32],["updatesmovie.xyz",32],["voirseries.io",32],["exego.app",33],["foot2live.cc",33],["criptologico.com",33],["foreverwallpapers.com",33],["hotstar.news",33],["mcrypto.club",33],["olympicstreams.me",33],["tnmusic.in",33],["webcric.com",33],["webseriesclub.com",33],["yourtehzeeb.com",33],["shahiid-anime.net",33],["adfoc.us",34],["bitfly.io",34],["taxielcima.live",35],["moviesda8.com",38],["vidbox.online",38],["mangareader.site",39],["cybermania.ws",40],["iconmonstr.com",40],["idlixplus.net",40],["unblocked.name",41],["nyaa.unblocked.id",41],["vibehubs.com",42],["egynow.cam",43],["traveldesearch.com",44],["thethothub.com",45],["anonymz.com",46],["naijaray.com.ng",47],["deutschsex.mobi",48],["1milf.com",48],["influencersgonewild.com",49],["freeiphone.fr",50],["pcbeta.com",51],["notformembersonly.com",52],["donpelis.com",53],["1cloudfile.com",54],["4everproxy.com",55],["dirproxy.com",56],["fapguru.com",58],["pornpapa.com",58],["videojav.com",58],["toxicwap.us",59],["chicksonright.com",60],["moneyversed.com",60],["hentaispark.com",60],["coloredmanga.com",60],["xozilla.xxx",62],["downloadfreecourse.com",63],["publicflashing.me",64],["exey.app",65],["vumoo.vip",66],["boombj.com",67],["stream.bunkr.ru",67],["jav.re",68],["coromon.wiki.gg",69],["dropmms.com",70],["sexemix.com",71],["links4u.co",[72,73]],["edoujin.net",74],["uhdgames.xyz",75],["alexsports.click",76],["pahaplayers.click",76],["imageupscaler.com",77],["picyield.com",78],["snaptik.app",79],["manhwalist.com",80],["nilesoft.org",81],["smgplaza.com",82],["novinky.cz",83],["yesmangas1.com",84],["emperorscan.com",85],["telephone-soudan.com",85],["comedyshow.to",86],["zefoy.com",87],["sexvideos.host",88],["portalizpro.com",89],["corrector.app",90],["dailytechinfo.me",91],["jeniusplay.com",91],["cgaa.org",92],["streamporn.co.uk",93],["suaurl.com",94],["teknisitv.com",95],["paylaterin.com",95],["torrentgalaxy.to",96],["thestar.com",97],["anichin.top",98],["tweakers.net",99],["fjlaboratories.com",100],["stoic.ai",100],["deviantart.com",101],["cadenadial.com",102]]);

const entitiesMap = new Map([["1337x",5],["pasend",6],["magesy",8],["kissjav",12],["hdvid",13],["123moviess",15],["thefmovies",17],["isaimini",19],["sms24",[26,27]],["shorttey",29],["wawacity",31],["extralinks",32],["filmypur",32],["nuroflix",32],["pelis28",32],["pelisplusgo",32],["pelisplusxd",32],["repelisgoo",32],["repelisgooo",32],["repelisgt",32],["repelisxd",32],["theproxy",32],["tvply",32],["vidlox",32],["watchfree",32],["buffstreams",33],["filmyworld",33],["moviesda1",33],["moviesda",33],["sockshare1",33],["songspk",33],["speedostream",[33,43]],["t20cric",33],["zone-telechargement",33],["pelisplus",34],["pelisplus2",34],["moviespapa",36],["kuttymovies",37],["mhdtvworld",40],["thothub",45],["uproxy2",47],["mp3juices",57],["gotxx",61],["mmsbee",61],["movierulzhd",72]]);

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
