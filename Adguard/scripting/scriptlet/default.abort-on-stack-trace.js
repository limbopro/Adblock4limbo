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

const argsList = [["Math","onerror"],["Math.random","/injectedScript.*inlineScript/"],["Math.random","/(?=.*onerror)(?=^(?!.*(https)))/"],["Math.random","/injectedScript|blob/"],["String.prototype.charCodeAt","ai_"],["onload","inlineScript"],["document.getElementById","adsBlocked"],["navigator.userAgent","exopop.browser.is"],["document.cookie","https"],["atob","_0x"],["String.fromCharCode","stackDepth:3"],["Math.round","inlineScript"],["document.createElement","inlineScript"],["jQuery","removeDLElements"],["atob","inlineScript"],["Math","inlineScript"],["document.getElementById","onLoadEvent"],["Object","mark"],["document.addEventListener","blocker"],["Math.random","inlineScript"],["console.log","/blob|injectedScript/"],["setTimeout","onload"],["encodeURIComponent","inlineScript"],["document.createElement","_0x"],["navigator","FingerprintJS"],["localStorage","/https:\\/\\/x?1337x\\.[a-z]+\\/\\S+\\.js/"],["onload","/https:\\/\\/x?1337x\\.[a-z]+\\/\\S+\\.js/"],["document.getElementsByTagName","adsBlocked"],["setTimeout","adsBlocked"],["fetch","HTMLDocument"],["Object.defineProperty","https"],["document.getElementById","/(?=^(?!.*(orchestrate|cloudflare)))/"],["Object","Pop"],["String.prototype.charCodeAt","inlineScript"],["document.querySelector","suaads"],["navigator.userAgent","checkBrowser"],["$","/(?=^(?!.*(https)))/"],["$ado","/ado/i"],["document.createElement","app.js"],["Math","showModal"],["Math.random","t.pt"],["Math.random","stackDepth:4"],["String.prototype.charCodeAt","_0x"],["Math.random","/\\st\\.[a-zA-Z]*\\s/"],["Object","/(?=^(?!.*(https)))/"],["Object","inlineScript"],["Math.random","/\\st\\.[a-zA-Z]*\\sinlineScript/"],["XMLHttpRequest","/inlineScript|stackDepth:1/"],["XMLHttpRequest","inlineScript"],["Math.random",""],["jQuery","ai_adb"],["JSON.parse","computed"],["XMLHttpRequest","onreadystatechange"],["localStorage","inlineScript"],["_pop","_init"],["Math.floor",""],["Math.floor","randStr"],["Math.round","onload"],["Math","ai_"],["document.createElement","make_rand_div"],["_pop"],["localStorage","stackDepth:1"],["foreverJQ","/document.createElement|stackDepth:2/"],["Math",""],["Math.random","computed"],["$","inlineScript"],["Math","https"],["setTimeout","ads"],["Element.prototype.matches","litespeed"],["HTMLSelectElement","Object"],["String.prototype.charCodeAt","https"],["fetch","inlineScript"],["console","onload"],["document.createElement","onerror"],["fetch","https"],["document.getElementById","disable"],["XMLHttpRequest","injectedScript"],["Math","_0x"],["onload","/app.js"],["document.createElement","create_ad"],["document.createElement","/^(?!.*(jquery|setDocument|inlineScript|gstatic|google|root|cgi).*)/"],["document.createElement","/(?=^(?!.*(https)))/"],["document.createElement","/(?=^(?!.*(http)))/"],["Object","webpack"],["String.prototype.charCodeAt","/(?=^(?!.*(https|Object)))/"],["Date.now","afScript"],["document.querySelectorAll","/(?=^(?!.*(https|Parse|Image)))/"],["document.body.appendChild"],["$","openAdsModal"],["btoa","/https|stackDepth:3/"],["document.createElement","notify"],["document.addEventListener","litespeed"],["HTMLIFrameElement","inlineScript"],["parseInt","adsBlocked"],["document.querySelectorAll","/(?=^(?!.*(https|injectedScript)))/"],["document.querySelector","showModal"],["atob","/zefoy\\.com\\S+:3:1/"],["document.querySelector","/showModal|chooseAction|doAction|callbackAdsBlocked/"],["setTimeout","dontask"],["Object.getPrototypeOf","plugins"],["document.createElement","adsBlocked"],["Error","/stackDepth:1\\s/"],["localStorage","tryShowVideoAdAsync"],["localStorage","window.onload"],["decodeURIComponent","autoptimize"],["String.prototype.charCodeAt","$"],["document.createElement","detect"],["onload","bodyElement.removeChild"],["setTimeout","data"],["document.createElement","createDecoy"],["document.createElement","eval"],["document.querySelector","/(?!\\bjquery\\b)/"],["document.querySelector","/^((?!jquery|wpdiscuz|recaptcha|cssHas|orchestrate).)*$/"],["btoa","send"],["history.replaceState","injectedScript"],["Math.sqrt","update"],["History","/(^(?!.*(Function|HTMLDocument).*))/"]];

const hostnamesMap = new Map([["dcdirtylaundry.com",0],["ipatriot.com",0],["newser.com",0],["politicalcowboy.com",0],["telexplorer.com.ar",1],["designbump.com",2],["thedesigninspiration.com",2],["appteka.store",3],["iptvbin.com",4],["gaypornmasters.com",4],["gaypornwave.com",4],["scubidu.eu",4],["amyscans.com",4],["thesukan.net",4],["jootc.com",4],["gaydelicious.com",4],["dramahd.me",4],["exbulletin.com",4],["game-owl.com",4],["javnow.net",4],["world4.eu",4],["gadgetguideonline.com",4],["therootdroid.com",4],["lazytranslations.com",4],["mettablog.com",4],["webdeyazilim.com",4],["freebulksmsonline.com",4],["buydekhke.com",4],["isekaisubs.web.id",4],["javhoho.com",4],["udoyoshi.com",4],["adrianoluis.net",4],["altevolkstrachten.de",4],["animecast.net",4],["armyranger.com",4],["articletz.com",4],["boxylucha.com",4],["chibchat.com",4],["descargasmix.xyz",4],["duniailkom.com",4],["enciclopediaonline.com",4],["entano.jp",4],["eyalo.com",4],["fosslovers.com",4],["fotopixel.es",4],["hairstylesthatwork.com",4],["hello-e1.com",4],["ichberlin.com",4],["ireez.com",4],["keepkoding.com",4],["latribunadeautomocion.es",4],["linemarlin.com",4],["lumpiastudio.com",4],["miaandme.org",4],["mobility.com.ng",4],["mygardening411.com",4],["newstvonline.com",4],["organismes.org",4],["papagiovannipaoloii.altervista.org",4],["playlists.rocks",4],["relatosdesexo.xxx",4],["rencah.com",4],["riverdesdelatribuna.com.ar",4],["sarkarinaukry.com",4],["seamanmemories.com",4],["socialmediaverve.com",4],["theorie-musik.de",4],["topperpoint.com",4],["travel-the-states.com",4],["vozz.vn",4],["ilifehacks.com",4],["gamingsym.in",4],["riotbits.com",4],["burakgoc.com",4],["systopedia.com",4],["googledrivelinks.com",4],["lacuevadeguns.com",5],["japscan.lol",5],["magesypro.pro",6],["filmi7.net",6],["trancehost.com",6],["arenascan.com",6],["resetscan.com",6],["geniussolutions.co",6],["portable4pc.com",6],["superpsx.com",6],["sampledrive.in",6],["magicgameworld.com",6],["e-player-stream.app",6],["bethaniebu.com",6],["pussyspace.com",7],["pussyspace.net",7],["zootube1.com",8],["camwhorescloud.com",11],["readytechflip.com",11],["clifnewz.online",12],["cryptonor.xyz",12],["emurom.net",13],["watchkobestreams.info",14],["imgdawgknuttz.com",14],["uhdgames.xyz",14],["gameshdlive.net",14],["pcgamez-download.com",15],["fifaultimateteam.it",15],["mlsbd.shop",15],["songspk2.info",15],["gametop.com",16],["artribune.com",17],["elamigosedition.com",18],["chicksonright.com",19],["moneyversed.com",19],["hentaispark.com",19],["coloredmanga.com",19],["laksa19.github.io",20],["fontyukle.net",21],["programmiedovetrovarli.it",22],["biopills.net",22],["animesuge.to",23],["zxi.mytechroad.com",27],["savegame.pro",27],["cybermania.ws",27],["karanpc.com",27],["xerifetech.com",27],["iconmonstr.com",27],["donghuaworld.com",27],["zealtyro.com",27],["idlixofficials.com",[27,111]],["idlixplus.com",[27,111]],["idlixplus.net",[27,111]],["idlixofficial.co",[27,111]],["idlixofficial.net",[27,111]],["postermockup.com",28],["forexwikitrading.com",28],["romfree.net",28],["mockupplanet.com",28],["graphicuv.com",28],["kisahdunia.com",28],["freedownloadvideo.net",28],["firmwarex.net",28],["filmisub.cc",28],["hscprojects.com",28],["graphicgoogle.com",28],["freemockupzone.com",28],["lulacloud.com",30],["limiteddollqjc.shop",31],["olympicstreams.ru",32],["claplivehdplay.ru",33],["lewblivehdplay.ru",33],["qqwebplay.xyz",33],["quest4play.xyz",33],["topembed.pw",33],["weblivehdplay.ru",33],["suaurl.com",34],["laweducationinfo.com",35],["savemoneyinfo.com",35],["worldaffairinfo.com",35],["godstoryinfo.com",35],["successstoryinfo.com",35],["cxissuegk.com",35],["learnmarketinfo.com",35],["bhugolinfo.com",35],["armypowerinfo.com",35],["rsadnetworkinfo.com",35],["rsinsuranceinfo.com",35],["rsfinanceinfo.com",35],["rsgamer.app",35],["rssoftwareinfo.com",35],["rshostinginfo.com",35],["rseducationinfo.com",35],["myuploadedpremium.de",36],["freewebcart.com",39],["hentaisea.com",41],["cablegratis.online",43],["kmo.to",43],["onifile.com",43],["oxanime.com",43],["pewgame.com",43],["piraproxy.app",43],["severeporn.com",43],["sexphimhd.net",43],["updatesmovie.xyz",43],["voirseries.io",43],["shahiid-anime.net",44],["goku.sx",45],["bitfly.io",46],["unblocked.name",49],["vibehubs.com",50],["traveldesearch.com",52],["thethothub.com",53],["anonymz.com",54],["naijaray.com.ng",55],["deutschsex.mobi",56],["1milf.com",56],["influencersgonewild.com",57],["freeiphone.fr",58],["pcbeta.com",59],["notformembersonly.com",60],["donpelis.com",61],["4everproxy.com",62],["dirproxy.com",63],["fapguru.com",65],["pornpapa.com",65],["videojav.com",65],["toxicwap.us",66],["dvdgayonline.com",67],["cctvwiki.com",67],["freepornsex.net",67],["cinepiroca.com",67],["dvd-flix.com",67],["sonixgvn.net",67],["xozilla.xxx",69],["dragontranslation.com",70],["yt5s.com",70],["downloadfreecourse.com",71],["publicflashing.me",72],["sanet.st",73],["dlhd.sx",73],["shorttrick.in",74],["exey.app",75],["vumoo.vip",76],["boombj.com",77],["stream.bunkr.ru",77],["jav.re",78],["coromon.wiki.gg",79],["dropmms.com",80],["sexemix.com",81],["links4u.co",[82,83]],["edoujin.net",84],["alexsports.click",85],["pahaplayers.click",85],["imageupscaler.com",86],["picyield.com",87],["snaptik.app",88],["manhwalist.com",89],["nilesoft.org",90],["smgplaza.com",91],["novinky.cz",92],["tuxnews.it",93],["emperorscan.com",94],["makotoichikawa.net",94],["telephone-soudan.com",94],["comedyshow.to",95],["zefoy.com",96],["gamedrive.org",97],["sexvideos.host",98],["corrector.app",99],["dailytechinfo.me",100],["jeniusplay.com",100],["cgaa.org",101],["screenflash.io",102],["streamporn.co.uk",103],["teknisitv.com",104],["paylaterin.com",104],["tgx.rs",105],["thestar.com",106],["earnhub.net",107],["gplastra.com",108],["qiwi.gg",109],["veev.to",110],["idlixofficialx.net",112],["tweakers.net",113],["www.lenovo.com",114],["deviantart.com",115],["cadenadial.com",116]]);

const entitiesMap = new Map([["pasend",4],["magesy",6],["kissjav",9],["hdvid",10],["123moviess",12],["thefmovies",15],["doujindesu",19],["1337x",[23,24,25,26]],["x1337x",[24,25,26]],["an1me",27],["mhdsports",29],["mhdtvmax",29],["sms24",[37,38]],["shorttey",40],["wawacity",42],["filmypur",43],["nuroflix",43],["pelis28",43],["pelisplusgo",43],["pelisplusxd",43],["repelisgoo",43],["repelisgooo",43],["repelisgt",43],["repelisxd",43],["theproxy",43],["tvply",43],["vidlox",43],["watchfree",43],["songspk",44],["isaimini",45],["pelisplus",46],["pelisplus2",46],["moviespapa",47],["kuttymovies",48],["speedostream",51],["thothub",53],["uproxy2",55],["mp3juices",64],["gotxx",68],["mmsbee",68],["hdmoviefair",73],["movierulzhd",82],["torrentgalaxy",105]]);

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
    const token = getRandomToken();
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

function getRandomToken() {
    const safe = safeSelf();
    return safe.String_fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
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
