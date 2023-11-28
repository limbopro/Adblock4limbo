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

const argsList = [["Math","onerror"],["Math.random","/injectedScript.*inlineScript/"],["Math.random","/(?=.*onerror)(?=^(?!.*(https)))/"],["open","setPopUnder"],["document.createElement","_0x"],["String.prototype.charCodeAt","ai_"],["onload","inlineScript"],["document.getElementById","adsBlocked"],["navigator.userAgent","exopop.browser.is"],["document.cookie","https"],["atob","_0x"],["String.fromCharCode","stackDepth:3"],["Math.round","inlineScript"],["document.createElement","inlineScript"],["jQuery","blockDLElements"],["Math","inlineScript"],["document.getElementById","onLoadEvent"],["Object","inlineScript"],["Object","mark"],["document.addEventListener","blocker"],["console.log","stackDepth:2"],["setTimeout","onload"],["encodeURIComponent","inlineScript"],["$","/(?=^(?!.*(https)))/"],["$ado","/ado/i"],["document.createElement","app.js"],["Math","showModal"],["Math.random","t.pt"],["Math.random","stackDepth:4"],["String.prototype.charCodeAt","_0x"],["Math.random","/\\st\\.[a-zA-Z]*\\s/"],["Object","/(?=^(?!.*(https)))/"],["Math.random","/\\st\\.[a-zA-Z]*\\sinlineScript/"],["XMLHttpRequest","rocket"],["XMLHttpRequest","/inlineScript|stackDepth:1/"],["XMLHttpRequest","inlineScript"],["String.prototype.charAt","$0"],["Object.prototype.hasOwnProperty","/(?=^(?!.*(Array|Object|facebook|google)))/"],["document.getElementsByTagName","adsBlocked"],["Math.random",""],["jQuery","ai_adb"],["JSON.parse","computed"],["XMLHttpRequest","onreadystatechange"],["localStorage","inlineScript"],["_pop","_init"],["Math.floor",""],["Math.floor","randStr"],["Math.round","onload"],["Math","ai_"],["document.createElement","make_rand_div"],["_pop"],["localStorage","stackDepth:1"],["Math.floor","_0x"],["foreverJQ","/document.createElement|stackDepth:2/"],["Math",""],["Math.random","computed"],["$","inlineScript"],["Math","https"],["setTimeout","ads"],["Math.random","inlineScript"],["Element.prototype.matches","litespeed"],["HTMLSelectElement","Object"],["String.prototype.charCodeAt","https"],["fetch","inlineScript"],["console","onload"],["document.getElementById","disable"],["XMLHttpRequest","injectedScript"],["Math","_0x"],["onload","/app.js"],["document.createElement","create_ad"],["document.createElement","/^(?!.*(jquery|setDocument|inlineScript|gstatic|google|root|cgi).*)/"],["document.createElement","/(?=^(?!.*(https)))/"],["document.createElement","/(?=^(?!.*(http)))/"],["Object","webpack"],["String.prototype.charCodeAt","/(?=^(?!.*(https|Object)))/"],["atob","inlineScript"],["Date.now","afScript"],["document.querySelectorAll","/(?=^(?!.*(https|Parse|Image)))/"],["document.body.appendChild"],["$","openAdsModal"],["btoa","/https|stackDepth:3/"],["setTimeout","adsBlocked"],["document.createElement","notify"],["document.addEventListener","litespeed"],["HTMLIFrameElement","inlineScript"],["jQuery","window.onload"],["document.querySelectorAll","/(?=^(?!.*(https|injectedScript)))/"],["document.querySelector","showModal"],["atob","/zefoy\\.com\\S+:3:1/"],["setTimeout","dontask"],["Object.getPrototypeOf","plugins"],["document.createElement","adsBlocked"],["Error","/stackDepth:1\\s/"],["localStorage","window.onload"],["document.querySelector","suaads"],["decodeURIComponent","autoptimize"],["String.prototype.charCodeAt","$"],["document.createElement","detect"],["setTimeout","data"],["btoa","send"],["history.replaceState","injectedScript"],["Math.sqrt","update"],["History","/(^(?!.*(Function|HTMLDocument).*))/"]];

const hostnamesMap = new Map([["dcdirtylaundry.com",0],["ipatriot.com",0],["newser.com",0],["politicalcowboy.com",0],["telexplorer.com.ar",1],["designbump.com",2],["thedesigninspiration.com",2],["beta.imagefap.com",3],["animesuge.to",4],["iptvbin.com",5],["gaypornmasters.com",5],["gaypornwave.com",5],["scubidu.eu",5],["amyscans.com",5],["thesukan.net",5],["jootc.com",5],["gaydelicious.com",5],["dramahd.me",5],["exbulletin.com",5],["game-owl.com",5],["javnow.net",5],["world4.eu",5],["atakanyavuz.com",5],["gadgetguideonline.com",5],["therootdroid.com",5],["lazytranslations.com",5],["mettablog.com",5],["webdeyazilim.com",5],["freebulksmsonline.com",5],["buydekhke.com",5],["isekaisubs.web.id",5],["javhoho.com",5],["udoyoshi.com",5],["adrianoluis.net",5],["altevolkstrachten.de",5],["animecast.net",5],["armyranger.com",5],["articletz.com",5],["boxylucha.com",5],["chibchat.com",5],["descargasmix.xyz",5],["duniailkom.com",5],["enciclopediaonline.com",5],["entano.jp",5],["eyalo.com",5],["fosslovers.com",5],["fotopixel.es",5],["hairstylesthatwork.com",5],["hello-e1.com",5],["ichberlin.com",5],["ireez.com",5],["keepkoding.com",5],["latribunadeautomocion.es",5],["linemarlin.com",5],["lumpiastudio.com",5],["miaandme.org",5],["mobility.com.ng",5],["mygardening411.com",5],["newstvonline.com",5],["organismes.org",5],["papagiovannipaoloii.altervista.org",5],["playlists.rocks",5],["relatosdesexo.xxx",5],["rencah.com",5],["riverdesdelatribuna.com.ar",5],["sarkarinaukry.com",5],["seamanmemories.com",5],["socialmediaverve.com",5],["theorie-musik.de",5],["topperpoint.com",5],["travel-the-states.com",5],["vozz.vn",5],["ilifehacks.com",5],["gamingsym.in",5],["riotbits.com",5],["burakgoc.com",5],["systopedia.com",5],["googledrivelinks.com",5],["lacuevadeguns.com",6],["magesypro.pro",7],["portable4pc.com",7],["magicgameworld.com",7],["e-player-stream.app",7],["bethaniebu.com",7],["pussyspace.com",8],["pussyspace.net",8],["zootube1.com",9],["tojav.net",10],["camwhorescloud.com",12],["cryptonor.xyz",13],["emurom.net",14],["pcgamez-download.com",15],["fifaultimateteam.it",15],["mlsbd.shop",15],["songspk2.info",15],["gametop.com",16],["animecurse.cz",17],["getintopcd.com",17],["artribune.com",18],["elamigosedition.com",19],["laksa19.github.io",20],["fontyukle.net",21],["programmiedovetrovarli.it",22],["biopills.net",22],["myuploadedpremium.de",23],["freewebcart.com",26],["hentaisea.com",28],["cablegratis.online",30],["kmo.to",30],["onifile.com",30],["oxanime.com",30],["pewgame.com",30],["piraproxy.app",30],["sexphimhd.net",30],["updatesmovie.xyz",30],["voirseries.io",30],["exego.app",31],["foot2live.cc",31],["criptologico.com",31],["foreverwallpapers.com",31],["hotstar.news",31],["mcrypto.club",31],["olympicstreams.me",31],["tnmusic.in",31],["webcric.com",31],["webseriesclub.com",31],["yourtehzeeb.com",31],["shahiid-anime.net",31],["bitfly.io",32],["taxielcima.live",33],["moviesda8.com",36],["vidbox.online",36],["mangareader.site",37],["cybermania.ws",38],["iconmonstr.com",38],["idlixplus.net",38],["unblocked.name",39],["nyaa.unblocked.id",39],["vibehubs.com",40],["egynow.cam",41],["traveldesearch.com",42],["thethothub.com",43],["anonymz.com",44],["naijaray.com.ng",45],["deutschsex.mobi",46],["1milf.com",46],["influencersgonewild.com",47],["freeiphone.fr",48],["pcbeta.com",49],["notformembersonly.com",50],["donpelis.com",51],["1cloudfile.com",52],["4everproxy.com",53],["dirproxy.com",54],["fapguru.com",56],["pornpapa.com",56],["videojav.com",56],["toxicwap.us",57],["dvdgayonline.com",58],["cctvwiki.com",58],["daotranslate.com",58],["freepornsex.net",58],["chicksonright.com",59],["moneyversed.com",59],["hentaispark.com",59],["coloredmanga.com",59],["xozilla.xxx",61],["dragontranslation.com",62],["yt5s.com",62],["downloadfreecourse.com",63],["publicflashing.me",64],["exey.app",65],["vumoo.vip",66],["boombj.com",67],["stream.bunkr.ru",67],["jav.re",68],["coromon.wiki.gg",69],["dropmms.com",70],["sexemix.com",71],["links4u.co",[72,73]],["edoujin.net",74],["uhdgames.xyz",75],["alexsports.click",76],["pahaplayers.click",76],["imageupscaler.com",77],["picyield.com",78],["snaptik.app",79],["manhwalist.com",80],["graphicuv.com",81],["nilesoft.org",82],["smgplaza.com",83],["novinky.cz",84],["yesmangas1.com",85],["emperorscan.com",86],["telephone-soudan.com",86],["comedyshow.to",87],["zefoy.com",88],["sexvideos.host",89],["corrector.app",90],["dailytechinfo.me",91],["jeniusplay.com",91],["cgaa.org",92],["streamporn.co.uk",93],["suaurl.com",94],["teknisitv.com",95],["paylaterin.com",95],["torrentgalaxy.to",96],["thestar.com",97],["gplastra.com",98],["tweakers.net",99],["www.lenovo.com",100],["deviantart.com",101],["cadenadial.com",102]]);

const entitiesMap = new Map([["1337x",4],["pasend",5],["magesy",7],["kissjav",10],["hdvid",11],["123moviess",13],["thefmovies",15],["isaimini",17],["sms24",[24,25]],["shorttey",27],["wawacity",29],["extralinks",30],["filmypur",30],["nuroflix",30],["pelis28",30],["pelisplusgo",30],["pelisplusxd",30],["repelisgoo",30],["repelisgooo",30],["repelisgt",30],["repelisxd",30],["theproxy",30],["tvply",30],["vidlox",30],["watchfree",30],["buffstreams",31],["filmyworld",31],["moviesda1",31],["moviesda",31],["sockshare1",31],["songspk",31],["speedostream",[31,41]],["t20cric",31],["zone-telechargement",31],["pelisplus",32],["pelisplus2",32],["moviespapa",34],["kuttymovies",35],["mhdtvworld",38],["an1me",38],["thothub",43],["uproxy2",45],["mp3juices",55],["gotxx",60],["mmsbee",60],["movierulzhd",72]]);

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
    const safe = safeSelf();
    const token =
        String.fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
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
        'Array_from': Array.from,
        'Error': self.Error,
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
        'Math_floor': Math.floor,
        'Math_max': Math.max,
        'Math_min': Math.min,
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

const targetWorld = 'MAIN';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
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
