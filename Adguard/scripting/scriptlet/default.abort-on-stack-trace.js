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
const uBOL_abortOnStackTrace = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["Math","onerror"],["Math.random","/injectedScript.*inlineScript/"],["Math.random","/(?=.*onerror)(?=^(?!.*(https)))/"],["String.prototype.charCodeAt","ai_"],["onload","inlineScript"],["document.getElementById","adsBlocked"],["navigator.userAgent","exopop.browser.is"],["document.cookie","https"],["atob","_0x"],["String.fromCharCode","stackDepth:3"],["Math.round","inlineScript"],["document.createElement","inlineScript"],["jQuery","removeDLElements"],["atob","inlineScript"],["Math","inlineScript"],["document.getElementById","onLoadEvent"],["Object","mark"],["document.addEventListener","blocker"],["console.log","/blob|injectedScript/"],["setTimeout","onload"],["encodeURIComponent","inlineScript"],["document.createElement","_0x"],["navigator","FingerprintJS"],["document.getElementsByTagName","adsBlocked"],["setTimeout","adsBlocked"],["fetch","HTMLDocument"],["Object.defineProperty","https"],["document.getElementById","/(?=^(?!.*(orchestrate|cloudflare)))/"],["document.querySelector","suaads"],["$","/(?=^(?!.*(https)))/"],["$ado","/ado/i"],["document.createElement","app.js"],["Math","showModal"],["Math.random","t.pt"],["Math.random","stackDepth:4"],["String.prototype.charCodeAt","_0x"],["Math.random","/\\st\\.[a-zA-Z]*\\s/"],["Object","/(?=^(?!.*(https)))/"],["Object","inlineScript"],["Math.random","/\\st\\.[a-zA-Z]*\\sinlineScript/"],["XMLHttpRequest","/inlineScript|stackDepth:1/"],["XMLHttpRequest","inlineScript"],["Math.random",""],["jQuery","ai_adb"],["JSON.parse","computed"],["XMLHttpRequest","onreadystatechange"],["localStorage","inlineScript"],["_pop","_init"],["Math.floor",""],["Math.floor","randStr"],["Math.round","onload"],["Math","ai_"],["document.createElement","make_rand_div"],["_pop"],["localStorage","stackDepth:1"],["foreverJQ","/document.createElement|stackDepth:2/"],["Math",""],["Math.random","computed"],["$","inlineScript"],["Math","https"],["setTimeout","ads"],["Math.random","inlineScript"],["Element.prototype.matches","litespeed"],["HTMLSelectElement","Object"],["String.prototype.charCodeAt","https"],["fetch","inlineScript"],["console","onload"],["document.createElement","onerror"],["fetch","https"],["document.getElementById","disable"],["XMLHttpRequest","injectedScript"],["Math","_0x"],["onload","/app.js"],["document.createElement","create_ad"],["document.createElement","/^(?!.*(jquery|setDocument|inlineScript|gstatic|google|root|cgi).*)/"],["document.createElement","/(?=^(?!.*(https)))/"],["document.createElement","/(?=^(?!.*(http)))/"],["Object","webpack"],["String.prototype.charCodeAt","/(?=^(?!.*(https|Object)))/"],["Date.now","afScript"],["document.querySelectorAll","/(?=^(?!.*(https|Parse|Image)))/"],["document.body.appendChild"],["$","openAdsModal"],["btoa","/https|stackDepth:3/"],["document.createElement","notify"],["document.addEventListener","litespeed"],["HTMLIFrameElement","inlineScript"],["parseInt","adsBlocked"],["document.querySelectorAll","/(?=^(?!.*(https|injectedScript)))/"],["document.querySelector","showModal"],["atob","/zefoy\\.com\\S+:3:1/"],["document.querySelector","/showModal|chooseAction|doAction|callbackAdsBlocked/"],["setTimeout","dontask"],["Object.getPrototypeOf","plugins"],["document.createElement","adsBlocked"],["Error","/stackDepth:1\\s/"],["localStorage","tryShowVideoAdAsync"],["localStorage","window.onload"],["decodeURIComponent","autoptimize"],["String.prototype.charCodeAt","$"],["document.createElement","detect"],["onload","bodyElement.removeChild"],["setTimeout","data"],["document.createElement","createDecoy"],["document.querySelector","/(?!\\bjquery\\b)/"],["btoa","send"],["history.replaceState","injectedScript"],["Math.sqrt","update"],["History","/(^(?!.*(Function|HTMLDocument).*))/"]];

const hostnamesMap = new Map([["dcdirtylaundry.com",0],["ipatriot.com",0],["newser.com",0],["politicalcowboy.com",0],["telexplorer.com.ar",1],["designbump.com",2],["thedesigninspiration.com",2],["iptvbin.com",3],["gaypornmasters.com",3],["gaypornwave.com",3],["scubidu.eu",3],["amyscans.com",3],["thesukan.net",3],["jootc.com",3],["gaydelicious.com",3],["dramahd.me",3],["exbulletin.com",3],["game-owl.com",3],["javnow.net",3],["world4.eu",3],["gadgetguideonline.com",3],["therootdroid.com",3],["lazytranslations.com",3],["mettablog.com",3],["webdeyazilim.com",3],["freebulksmsonline.com",3],["buydekhke.com",3],["isekaisubs.web.id",3],["javhoho.com",3],["udoyoshi.com",3],["adrianoluis.net",3],["altevolkstrachten.de",3],["animecast.net",3],["armyranger.com",3],["articletz.com",3],["boxylucha.com",3],["chibchat.com",3],["descargasmix.xyz",3],["duniailkom.com",3],["enciclopediaonline.com",3],["entano.jp",3],["eyalo.com",3],["fosslovers.com",3],["fotopixel.es",3],["hairstylesthatwork.com",3],["hello-e1.com",3],["ichberlin.com",3],["ireez.com",3],["keepkoding.com",3],["latribunadeautomocion.es",3],["linemarlin.com",3],["lumpiastudio.com",3],["miaandme.org",3],["mobility.com.ng",3],["mygardening411.com",3],["newstvonline.com",3],["organismes.org",3],["papagiovannipaoloii.altervista.org",3],["playlists.rocks",3],["relatosdesexo.xxx",3],["rencah.com",3],["riverdesdelatribuna.com.ar",3],["sarkarinaukry.com",3],["seamanmemories.com",3],["socialmediaverve.com",3],["theorie-musik.de",3],["topperpoint.com",3],["travel-the-states.com",3],["vozz.vn",3],["ilifehacks.com",3],["gamingsym.in",3],["riotbits.com",3],["burakgoc.com",3],["systopedia.com",3],["googledrivelinks.com",3],["lacuevadeguns.com",4],["japscan.lol",4],["magesypro.pro",5],["filmi7.net",5],["trancehost.com",5],["arenascan.com",5],["geniussolutions.co",5],["portable4pc.com",5],["superpsx.com",5],["sampledrive.in",5],["magicgameworld.com",5],["e-player-stream.app",5],["bethaniebu.com",5],["pussyspace.com",6],["pussyspace.net",6],["zootube1.com",7],["tojav.net",8],["camwhorescloud.com",10],["readytechflip.com",10],["cryptonor.xyz",11],["emurom.net",12],["watchkobestreams.info",13],["imgdawgknuttz.com",13],["uhdgames.xyz",13],["gameshdlive.net",13],["pcgamez-download.com",14],["fifaultimateteam.it",14],["mlsbd.shop",14],["songspk2.info",14],["gametop.com",15],["artribune.com",16],["elamigosedition.com",17],["laksa19.github.io",18],["fontyukle.net",19],["programmiedovetrovarli.it",20],["biopills.net",20],["animesuge.to",21],["zxi.mytechroad.com",23],["savegame.pro",23],["cybermania.ws",23],["karanpc.com",23],["xerifetech.com",23],["iconmonstr.com",23],["zealtyro.com",23],["idlixofficials.com",[23,104]],["idlixplus.com",[23,104]],["idlixplus.net",[23,104]],["idlixofficial.co",[23,104]],["idlixofficial.net",[23,104]],["postermockup.com",24],["forexwikitrading.com",24],["romfree.net",24],["mockupplanet.com",24],["graphicuv.com",24],["kisahdunia.com",24],["freedownloadvideo.net",24],["firmwarex.net",24],["filmisub.cc",24],["hscprojects.com",24],["graphicgoogle.com",24],["freemockupzone.com",24],["lulacloud.com",26],["limiteddollqjc.shop",27],["suaurl.com",28],["myuploadedpremium.de",29],["freewebcart.com",32],["hentaisea.com",34],["cablegratis.online",36],["kmo.to",36],["onifile.com",36],["oxanime.com",36],["pewgame.com",36],["piraproxy.app",36],["sexphimhd.net",36],["updatesmovie.xyz",36],["voirseries.io",36],["shahiid-anime.net",37],["goku.sx",38],["bitfly.io",39],["unblocked.name",42],["vibehubs.com",43],["traveldesearch.com",45],["thethothub.com",46],["anonymz.com",47],["naijaray.com.ng",48],["deutschsex.mobi",49],["1milf.com",49],["influencersgonewild.com",50],["freeiphone.fr",51],["pcbeta.com",52],["notformembersonly.com",53],["donpelis.com",54],["4everproxy.com",55],["dirproxy.com",56],["fapguru.com",58],["pornpapa.com",58],["videojav.com",58],["toxicwap.us",59],["dvdgayonline.com",60],["cctvwiki.com",60],["freepornsex.net",60],["cinepiroca.com",60],["dvd-flix.com",60],["sonixgvn.net",60],["chicksonright.com",61],["moneyversed.com",61],["hentaispark.com",61],["coloredmanga.com",61],["xozilla.xxx",63],["dragontranslation.com",64],["yt5s.com",64],["downloadfreecourse.com",65],["publicflashing.me",66],["sanet.st",67],["dlhd.sx",67],["shorttrick.in",68],["exey.app",69],["vumoo.vip",70],["boombj.com",71],["stream.bunkr.ru",71],["jav.re",72],["coromon.wiki.gg",73],["dropmms.com",74],["sexemix.com",75],["links4u.co",[76,77]],["edoujin.net",78],["alexsports.click",79],["pahaplayers.click",79],["imageupscaler.com",80],["picyield.com",81],["snaptik.app",82],["manhwalist.com",83],["nilesoft.org",84],["smgplaza.com",85],["novinky.cz",86],["tuxnews.it",87],["emperorscan.com",88],["makotoichikawa.net",88],["telephone-soudan.com",88],["comedyshow.to",89],["zefoy.com",90],["gamedrive.org",91],["sexvideos.host",92],["corrector.app",93],["dailytechinfo.me",94],["jeniusplay.com",94],["cgaa.org",95],["screenflash.io",96],["streamporn.co.uk",97],["teknisitv.com",98],["paylaterin.com",98],["tgx.rs",99],["thestar.com",100],["earnhub.net",101],["gplastra.com",102],["qiwi.gg",103],["tweakers.net",105],["www.lenovo.com",106],["deviantart.com",107],["cadenadial.com",108]]);

const entitiesMap = new Map([["pasend",3],["magesy",5],["kissjav",8],["hdvid",9],["123moviess",11],["thefmovies",14],["1337x",[21,22]],["x1337x",22],["an1me",23],["mhdsports",25],["mhdtvmax",25],["sms24",[30,31]],["shorttey",33],["wawacity",35],["filmypur",36],["nuroflix",36],["pelis28",36],["pelisplusgo",36],["pelisplusxd",36],["repelisgoo",36],["repelisgooo",36],["repelisgt",36],["repelisxd",36],["theproxy",36],["tvply",36],["vidlox",36],["watchfree",36],["songspk",37],["isaimini",38],["pelisplus",39],["pelisplus2",39],["moviespapa",40],["kuttymovies",41],["speedostream",44],["thothub",46],["uproxy2",48],["mp3juices",57],["gotxx",62],["mmsbee",62],["hdmoviefair",67],["movierulzhd",76],["torrentgalaxy",99]]);

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
    if ( needle === '' ) { extraArgs.log = 'all'; }
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
    logLevel = ''
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
    const r = needleDetails.matchAll !== true &&
        safe.testPattern(needleDetails, stack);
    if (
        logLevel === 'all' ||
        logLevel === 'match' && r ||
        logLevel === 'nomatch' && !r
    ) {
        safe.uboLog(stack.replace(/\t/g, '\n'));
    }
    return r;
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
