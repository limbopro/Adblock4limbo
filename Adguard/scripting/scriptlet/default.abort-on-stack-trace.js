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

/* eslint-disable indent */

// ruleset: default

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_abortOnStackTrace = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["Math","onerror"],["Math.random","/injectedScript.*inlineScript/"],["Math.random","/(?=.*onerror)(?=^(?!.*(https)))/"],["Math.random","/injectedScript|blob/"],["String.prototype.charCodeAt","ai_"],["onload","inlineScript"],["navigator.userAgent","exopop.browser.is"],["document.querySelector","detect"],["document.cookie","https"],["String.fromCharCode","stackDepth:3"],["Math.round","inlineScript"],["document.createElement","inlineScript"],["atob","inlineScript"],["Math","inlineScript"],["document.getElementById","onLoadEvent"],["Object","mark"],["Math.random","inlineScript"],["console.log","/blob|injectedScript/"],["setTimeout","onload"],["encodeURIComponent","inlineScript"],["setTimeout","adsBlocked"],["document.querySelector","suaads"],["navigator.userAgent","checkBrowser"],["document.getElementById","adsBlocked"],["document.getElementsByTagName","adsBlocked"],["$","/(?=^(?!.*(https)))/"],["$ado","/ado/i"],["document.createElement","app.js"],["Math","showModal"],["Math.random","t.pt"],["Math.random","stackDepth:4"],["String.prototype.charCodeAt","_0x"],["EventTarget.prototype.addEventListener","/(?=^(?!.*(challenge-platform|jquery|challenges\\.cloudflare\\.com|jwplayer)))/"],["Math.random","/\\st\\.[a-zA-Z]*\\s/"],["Object","/(?=^(?!.*(https)))/"],["Object","inlineScript"],["Math.random","/\\st\\.[a-zA-Z]*\\sinlineScript/"],["XMLHttpRequest","/inlineScript|stackDepth:1/"],["XMLHttpRequest","inlineScript"],["Math.random","/(?=^(?!.*(/akismet-frontend\\.js|gstatic|jquery/)))/"],["Math.random",""],["jQuery","ai_adb"],["JSON.parse","computed"],["XMLHttpRequest","onreadystatechange"],["localStorage","inlineScript"],["_pop","_init"],["Math.floor",""],["Math.floor","randStr"],["Math.round","onload"],["Math","ai_"],["document.createElement","make_rand_div"],["_pop"],["localStorage","stackDepth:1"],["foreverJQ","/document.createElement|stackDepth:2/"],["Math",""],["Math.random","computed"],["$","inlineScript"],["Math","https"],["setTimeout","ads"],["Element.prototype.matches","litespeed"],["HTMLSelectElement","Object"],["String.prototype.charCodeAt","https"],["fetch","inlineScript"],["console","onload"],["document.createElement","onerror"],["fetch","https"],["document.getElementById","disable"],["Math","_0x"],["onload","/app.js"],["document.createElement","create_ad"],["document.createElement","/^(?!.*(jquery|setDocument|inlineScript|gstatic|google|root|cgi).*)/"],["document.createElement","/(?=^(?!.*(https)))/"],["document.createElement","/(?=^(?!.*(http)))/"],["Object","webpack"],["String.prototype.charCodeAt","/(?=^(?!.*(https|Object)))/"],["Date.now","afScript"],["document.querySelectorAll","/(?=^(?!.*(https|Parse|Image)))/"],["document.body.appendChild"],["$","openAdsModal"],["btoa","/https|stackDepth:3/"],["DOMTokenList.prototype.add","inlineScript"],["document.createElement","notify"],["document.addEventListener","litespeed"],["HTMLIFrameElement","inlineScript"],["parseInt","adsBlocked"],["document.querySelectorAll","/(?=^(?!.*(https|injectedScript)))/"],["document.getElementById","fairAdblock"],["document.querySelector","showModal"],["atob","/zefoy\\.com\\S+:3:1/"],["document.querySelector","/showModal|chooseAction|doAction|callbackAdsBlocked/"],["setTimeout","dontask"],["Object.getPrototypeOf","plugins"],["Error","/stackDepth:1\\s/"],["localStorage","tryShowVideoAdAsync"],["localStorage","window.onload"],["document.createElement","adsBlocked"],["decodeURIComponent","autoptimize"],["String.prototype.charCodeAt","$"],["document.createElement","detect"],["onload","bodyElement.removeChild"],["setTimeout","data"],["document.createElement","createDecoy"],["document.createElement","_0x"],["navigator","FingerprintJS"],["localStorage","/https:\\/\\/x?1337x\\.[a-z]+\\/\\S+\\.js/"],["onload","/https:\\/\\/x?1337x\\.[a-z]+\\/\\S+\\.js/"],["HTMLElement.prototype.click","_0x"],["atob","injectedScript"],["jQuery","removeDLElements"],["document.createElement","pda"],["document.addEventListener","blocker"],["fetch","HTMLDocument"],["Object.defineProperty","https"],["document.createElement","openNewTab"],["document.getElementById","/(?=^(?!.*(orchestrate|cloudflare)))/"],["Object","Pop"],["document.createElement","yes.onclick"],["document.getElementById","inlineScript"],["clearTimeout","/\\b[a-z] inlineScript:/"],["btoa","send"],["window.screen.height","setTimeout"],["Math.sqrt","update"],["History","/(^(?!.*(Function|HTMLDocument).*))/"]];

const hostnamesMap = new Map([["dcdirtylaundry.com",0],["ipatriot.com",0],["newser.com",0],["politicalcowboy.com",0],["telexplorer.com.ar",1],["designbump.com",2],["thedesigninspiration.com",2],["appteka.store",3],["iptvbin.com",4],["gaypornmasters.com",4],["gaypornwave.com",4],["scubidu.eu",4],["amyscans.com",4],["thesukan.net",4],["jootc.com",4],["gaydelicious.com",4],["dramahd.me",4],["exbulletin.com",4],["game-owl.com",4],["javnow.net",4],["world4.eu",4],["gadgetguideonline.com",4],["therootdroid.com",4],["lazytranslations.com",4],["mettablog.com",4],["webdeyazilim.com",4],["freebulksmsonline.com",4],["buydekhke.com",4],["isekaisubs.web.id",4],["javhoho.com",4],["udoyoshi.com",4],["adrianoluis.net",4],["altevolkstrachten.de",4],["animecast.net",4],["armyranger.com",4],["articletz.com",4],["boxylucha.com",4],["chibchat.com",4],["duniailkom.com",4],["enciclopediaonline.com",4],["entano.jp",4],["eyalo.com",4],["fosslovers.com",4],["fotopixel.es",4],["hairstylesthatwork.com",4],["hello-e1.com",4],["ichberlin.com",4],["ireez.com",4],["keepkoding.com",4],["latribunadeautomocion.es",4],["linemarlin.com",4],["lumpiastudio.com",4],["miaandme.org",4],["mobility.com.ng",4],["mygardening411.com",4],["newstvonline.com",4],["organismes.org",4],["papagiovannipaoloii.altervista.org",4],["playlists.rocks",4],["relatosdesexo.xxx",4],["rencah.com",4],["riverdesdelatribuna.com.ar",4],["sarkarinaukry.com",4],["seamanmemories.com",4],["socialmediaverve.com",4],["theorie-musik.de",4],["topperpoint.com",4],["travel-the-states.com",4],["vozz.vn",4],["ilifehacks.com",4],["gamingsym.in",4],["riotbits.com",4],["burakgoc.com",4],["systopedia.com",4],["googledrivelinks.com",4],["lacuevadeguns.com",5],["pussyspace.com",6],["pussyspace.net",6],["videos.porndig.com",7],["zootube1.com",8],["camwhorescloud.com",10],["readytechflip.com",10],["cryptonor.xyz",11],["watchkobestreams.info",12],["imgdawgknuttz.com",12],["gameshdlive.net",12],["pcgamez-download.com",13],["fifaultimateteam.it",13],["mlsbd.shop",13],["gametop.com",14],["artribune.com",15],["chicksonright.com",16],["moneyversed.com",16],["hentaispark.com",16],["coloredmanga.com",16],["laksa19.github.io",17],["fontyukle.net",18],["programmiedovetrovarli.it",19],["biopills.net",19],["graphicuv.com",20],["kisahdunia.com",20],["freedownloadvideo.net",20],["firmwarex.net",20],["filmisub.cc",20],["hscprojects.com",20],["graphicgoogle.com",20],["freemockupzone.com",20],["postermockup.com",20],["forexwikitrading.com",20],["romfree.net",20],["mockupplanet.com",20],["suaurl.com",21],["laweducationinfo.com",22],["savemoneyinfo.com",22],["worldaffairinfo.com",22],["godstoryinfo.com",22],["successstoryinfo.com",22],["cxissuegk.com",22],["learnmarketinfo.com",22],["bhugolinfo.com",22],["armypowerinfo.com",22],["rsadnetworkinfo.com",22],["rsinsuranceinfo.com",22],["rsfinanceinfo.com",22],["rsgamer.app",22],["rssoftwareinfo.com",22],["rshostinginfo.com",22],["rseducationinfo.com",22],["phonereviewinfo.com",22],["makeincomeinfo.com",22],["gknutshell.com",22],["vichitrainfo.com",22],["workproductivityinfo.com",22],["dopomininfo.com",22],["hostingdetailer.com",22],["fitnesssguide.com",22],["tradingfact4u.com",22],["cryptofactss.com",22],["softwaredetail.com",22],["artoffocas.com",22],["insurancesfact.com",22],["travellingdetail.com",22],["geniussolutions.co",23],["skillheadlines.in",23],["portable4pc.com",23],["superpsx.com",23],["sampledrive.in",23],["magicgameworld.com",23],["e-player-stream.app",23],["bethaniebu.com",23],["filmi7.net",23],["trancehost.com",23],["arenascan.com",23],["resetscan.com",23],["mtcremix.com",24],["cybermania.ws",[24,39]],["karanpc.com",24],["xerifetech.com",24],["iconmonstr.com",24],["donghuaworld.com",24],["zealtyro.com",24],["zxi.mytechroad.com",24],["savegame.pro",24],["drivers.plus",24],["myuploadedpremium.de",25],["freewebcart.com",28],["hentaisea.com",30],["kmo.to",33],["onifile.com",33],["oxanime.com",33],["pewgame.com",33],["piraproxy.app",33],["severeporn.com",33],["sexphimhd.net",33],["voirseries.io",33],["shahiid-anime.net",34],["goku.sx",35],["bitfly.io",36],["unblocked.name",40],["vibehubs.com",41],["traveldesearch.com",43],["thethothub.com",44],["anonymz.com",45],["naijaray.com.ng",46],["deutschsex.mobi",47],["1milf.com",47],["influencersgonewild.com",48],["freeiphone.fr",49],["pcbeta.com",50],["notformembersonly.com",51],["donpelis.com",52],["4everproxy.com",53],["dirproxy.com",54],["fapguru.com",56],["pornpapa.com",56],["videojav.com",56],["toxicwap.us",57],["dvdgayonline.com",58],["cctvwiki.com",58],["freepornsex.net",58],["cinepiroca.com",58],["dvd-flix.com",58],["sonixgvn.net",58],["xozilla.xxx",60],["dragontranslation.com",61],["yt5s.com",61],["downloadfreecourse.com",62],["publicflashing.me",63],["sanet.st",64],["dlhd.sx",64],["shorttrick.in",65],["exey.app",66],["boombj.com",67],["stream.bunkr.ru",67],["jav.re",68],["coromon.wiki.gg",69],["dropmms.com",70],["sexemix.com",71],["links4u.co",[72,73]],["edoujin.net",74],["pahaplayers.click",75],["imageupscaler.com",76],["picyield.com",77],["snaptik.app",78],["manhwalist.com",79],["sportnews.to",80],["sportshub.to",80],["nilesoft.org",81],["smgplaza.com",82],["novinky.cz",83],["tuxnews.it",84],["emperorscan.com",85],["makotoichikawa.net",85],["telephone-soudan.com",85],["hentaiseason.com",86],["comedyshow.to",87],["zefoy.com",88],["gamedrive.org",89],["sexvideos.host",90],["corrector.app",91],["cgaa.org",92],["screenflash.io",93],["streamporn.co.uk",94],["jeniusplay.com",95],["teknisitv.com",96],["paylaterin.com",96],["tgx.rs",97],["thestar.com",98],["earnhub.net",99],["gplastra.com",100],["qiwi.gg",101],["abysscdn.com",106],["fullfreeimage.com",106],["hihihaha1.xyz",106],["hihihaha2.xyz",106],["imagelovers.com",106],["player-cdn.com",106],["playhydrax.com",106],["rufiiguta.com",106],["jpopsingles.eu",107],["emurom.net",108],["im9.eu",109],["elamigosedition.com",110],["lulacloud.com",112],["turtleviplay.xyz",113],["limiteddollqjc.shop",114],["olympicstreams.ru",115],["javfc2.xyz",116],["secondhandsongs.com",117],["xbaaz.com",118],["tweakers.net",119],["perplexity.ai",120],["deviantart.com",121],["cadenadial.com",122]]);

const entitiesMap = new Map([["hdvid",9],["123moviess",11],["thefmovies",13],["doujindesu",16],["an1me",24],["sms24",[26,27]],["shorttey",29],["wawacity",31],["xcloud",32],["filmypur",33],["nuroflix",33],["pelis28",33],["pelisplusgo",33],["pelisplusxd",33],["repelisgoo",33],["repelisgooo",33],["repelisgt",33],["repelisxd",33],["theproxy",33],["tvply",33],["vidlox",33],["watchfree",33],["songspk",34],["isaimini",35],["pelisplus",36],["pelisplus2",36],["moviespapa",37],["kuttymovies",38],["speedostream",42],["thothub",44],["uproxy2",46],["mp3juices",55],["gotxx",59],["mmsbee",59],["hdmoviefair",64],["movierulzhd",72],["showflix",86],["torrentgalaxy",97],["1337x",[102,103,104,105]],["x1337x",[103,104,105]],["mhdsports",111],["mhdtvmax",111]]);

const exceptionsMap = new Map([["xcloud.eu",[32]],["xcloud.host",[32]]]);

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
                    const log = safe.logLevel > 1 ? 'all' : 'match';
                    if ( matchesStackTraceFn(needleDetails, log) ) {
                        throw new ReferenceError(getExceptionToken());
                    }
                    return v;
                },
                set: function(a) {
                    const log = safe.logLevel > 1 ? 'all' : 'match';
                    if ( matchesStackTraceFn(needleDetails, log) ) {
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

function matchesStackTraceFn(
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
    for ( let line of safe.String_split.call(error.stack, /[\n\r]+/) ) {
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
        'String_split': String.prototype.split,
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
                return { matchAll: true, expect: true };
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
            catch {
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
    safe.logLevel = scriptletGlobals.logLevel || 1;
    let lastLogType = '';
    let lastLogText = '';
    let lastLogTime = 0;
    safe.toLogText = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( text === lastLogText && type === lastLogType ) {
            if ( (Date.now() - lastLogTime) < 5000 ) { return; }
        }
        lastLogType = type;
        lastLogText = text;
        lastLogTime = Date.now();
        return text;
    };
    try {
        const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
        let bcBuffer = [];
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
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
    } catch {
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            safe.log(`uBO ${text}`);
        };
    }
    return safe;
}

function getRandomToken() {
    const safe = safeSelf();
    return safe.String_fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
}

/******************************************************************************/

const hnParts = [];
try {
    let origin = document.location.origin;
    if ( origin === 'null' ) {
        const origins = document.location.ancestorOrigins;
        for ( let i = 0; i < origins.length; i++ ) {
            origin = origins[i];
            if ( origin !== 'null' ) { break; }
        }
    }
    const pos = origin.lastIndexOf('://');
    if ( pos === -1 ) { return; }
    hnParts.push(...origin.slice(pos+3).split('.'));
} catch {
}
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
    catch { }
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_abortOnStackTrace();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
