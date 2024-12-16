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

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_abortOnStackTrace = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["Math","onerror"],["Math.random","/injectedScript.*inlineScript/"],["Math.random","/(?=.*onerror)(?=^(?!.*(https)))/"],["Math.random","/injectedScript|blob/"],["String.prototype.charCodeAt","ai_"],["onload","inlineScript"],["navigator.userAgent","exopop.browser.is"],["document.cookie","https"],["atob","_0x"],["String.fromCharCode","stackDepth:3"],["Math.round","inlineScript"],["document.createElement","inlineScript"],["atob","inlineScript"],["Math","inlineScript"],["document.getElementById","onLoadEvent"],["Object","mark"],["Math.random","inlineScript"],["console.log","/blob|injectedScript/"],["setTimeout","onload"],["encodeURIComponent","inlineScript"],["document.createElement","_0x"],["navigator","FingerprintJS"],["localStorage","/https:\\/\\/x?1337x\\.[a-z]+\\/\\S+\\.js/"],["onload","/https:\\/\\/x?1337x\\.[a-z]+\\/\\S+\\.js/"],["HTMLElement.prototype.click","_0x"],["atob","injectedScript"],["jQuery","removeDLElements"],["document.createElement","pda"],["document.addEventListener","blocker"],["document.getElementsByTagName","adsBlocked"],["setTimeout","adsBlocked"],["fetch","HTMLDocument"],["Object.defineProperty","https"],["document.createElement","openNewTab"],["document.getElementById","adsBlocked"],["document.getElementById","/(?=^(?!.*(orchestrate|cloudflare)))/"],["Object","Pop"],["document.createElement","yes.onclick"],["document.getElementById","inlineScript"],["document.querySelector","suaads"],["navigator.userAgent","checkBrowser"],["$","/(?=^(?!.*(https)))/"],["$ado","/ado/i"],["document.createElement","app.js"],["Math","showModal"],["Math.random","t.pt"],["Math.random","stackDepth:4"],["String.prototype.charCodeAt","_0x"],["EventTarget.prototype.addEventListener","/(?=^(?!.*(challenge-platform|jquery|challenges\\.cloudflare\\.com|jwplayer)))/"],["Math.random","/\\st\\.[a-zA-Z]*\\s/"],["Object","/(?=^(?!.*(https)))/"],["Object","inlineScript"],["Math.random","/\\st\\.[a-zA-Z]*\\sinlineScript/"],["XMLHttpRequest","/inlineScript|stackDepth:1/"],["XMLHttpRequest","inlineScript"],["Math.random","/(?=^(?!.*(/akismet-frontend\\.js|gstatic|jquery/)))/"],["Math.random",""],["jQuery","ai_adb"],["JSON.parse","computed"],["XMLHttpRequest","onreadystatechange"],["localStorage","inlineScript"],["_pop","_init"],["Math.floor",""],["Math.floor","randStr"],["Math.round","onload"],["Math","ai_"],["document.createElement","make_rand_div"],["_pop"],["localStorage","stackDepth:1"],["foreverJQ","/document.createElement|stackDepth:2/"],["Math",""],["Math.random","computed"],["$","inlineScript"],["Math","https"],["setTimeout","ads"],["Element.prototype.matches","litespeed"],["HTMLSelectElement","Object"],["String.prototype.charCodeAt","https"],["fetch","inlineScript"],["console","onload"],["document.createElement","onerror"],["fetch","https"],["document.getElementById","disable"],["Math","_0x"],["onload","/app.js"],["document.createElement","create_ad"],["document.createElement","/^(?!.*(jquery|setDocument|inlineScript|gstatic|google|root|cgi).*)/"],["document.createElement","/(?=^(?!.*(https)))/"],["document.createElement","/(?=^(?!.*(http)))/"],["Object","webpack"],["String.prototype.charCodeAt","/(?=^(?!.*(https|Object)))/"],["Date.now","afScript"],["document.querySelectorAll","/(?=^(?!.*(https|Parse|Image)))/"],["document.body.appendChild"],["$","openAdsModal"],["btoa","/https|stackDepth:3/"],["document.createElement","notify"],["document.addEventListener","litespeed"],["HTMLIFrameElement","inlineScript"],["parseInt","adsBlocked"],["document.querySelectorAll","/(?=^(?!.*(https|injectedScript)))/"],["document.getElementById","fairAdblock"],["document.querySelector","showModal"],["atob","/zefoy\\.com\\S+:3:1/"],["document.querySelector","/showModal|chooseAction|doAction|callbackAdsBlocked/"],["setTimeout","dontask"],["Object.getPrototypeOf","plugins"],["document.createElement","adsBlocked"],["Error","/stackDepth:1\\s/"],["localStorage","tryShowVideoAdAsync"],["localStorage","window.onload"],["decodeURIComponent","autoptimize"],["String.prototype.charCodeAt","$"],["document.createElement","detect"],["onload","bodyElement.removeChild"],["setTimeout","data"],["document.createElement","createDecoy"],["document.querySelector","/(?!\\bjquery\\b)/"],["document.querySelector","/^((?!jquery|wpdiscuz|recaptcha|cssHas|orchestrate|inlineScript).)*$/"],["btoa","send"],["window.screen.height","setTimeout"],["Math.sqrt","update"],["History","/(^(?!.*(Function|HTMLDocument).*))/"],["fetch",".js?"]];

const hostnamesMap = new Map([["dcdirtylaundry.com",0],["ipatriot.com",0],["newser.com",0],["politicalcowboy.com",0],["telexplorer.com.ar",1],["designbump.com",2],["thedesigninspiration.com",2],["appteka.store",3],["iptvbin.com",4],["gaypornmasters.com",4],["gaypornwave.com",4],["scubidu.eu",4],["amyscans.com",4],["thesukan.net",4],["jootc.com",4],["gaydelicious.com",4],["dramahd.me",4],["exbulletin.com",4],["game-owl.com",4],["javnow.net",4],["world4.eu",4],["gadgetguideonline.com",4],["therootdroid.com",4],["lazytranslations.com",4],["mettablog.com",4],["webdeyazilim.com",4],["freebulksmsonline.com",4],["buydekhke.com",4],["isekaisubs.web.id",4],["javhoho.com",4],["udoyoshi.com",4],["adrianoluis.net",4],["altevolkstrachten.de",4],["animecast.net",4],["armyranger.com",4],["articletz.com",4],["boxylucha.com",4],["chibchat.com",4],["descargasmix.xyz",4],["duniailkom.com",4],["enciclopediaonline.com",4],["entano.jp",4],["eyalo.com",4],["fosslovers.com",4],["fotopixel.es",4],["hairstylesthatwork.com",4],["hello-e1.com",4],["ichberlin.com",4],["ireez.com",4],["keepkoding.com",4],["latribunadeautomocion.es",4],["linemarlin.com",4],["lumpiastudio.com",4],["miaandme.org",4],["mobility.com.ng",4],["mygardening411.com",4],["newstvonline.com",4],["organismes.org",4],["papagiovannipaoloii.altervista.org",4],["playlists.rocks",4],["relatosdesexo.xxx",4],["rencah.com",4],["riverdesdelatribuna.com.ar",4],["sarkarinaukry.com",4],["seamanmemories.com",4],["socialmediaverve.com",4],["theorie-musik.de",4],["topperpoint.com",4],["travel-the-states.com",4],["vozz.vn",4],["ilifehacks.com",4],["gamingsym.in",4],["riotbits.com",4],["burakgoc.com",4],["systopedia.com",4],["googledrivelinks.com",4],["lacuevadeguns.com",5],["japscan.lol",5],["pussyspace.com",6],["pussyspace.net",6],["zootube1.com",7],["camwhorescloud.com",10],["readytechflip.com",10],["clifnewz.online",11],["cryptonor.xyz",11],["watchkobestreams.info",12],["imgdawgknuttz.com",12],["uhdgames.xyz",12],["gameshdlive.net",12],["pcgamez-download.com",13],["fifaultimateteam.it",13],["mlsbd.shop",13],["songspk2.info",13],["gametop.com",14],["artribune.com",15],["chicksonright.com",16],["moneyversed.com",16],["hentaispark.com",16],["coloredmanga.com",16],["laksa19.github.io",17],["fontyukle.net",18],["programmiedovetrovarli.it",19],["biopills.net",19],["abysscdn.com",24],["hihihaha1.xyz",24],["hihihaha2.xyz",24],["player-cdn.com",24],["playhydrax.com",24],["jpopsingles.eu",25],["emurom.net",26],["im9.eu",27],["elamigosedition.com",28],["zxi.mytechroad.com",29],["savegame.pro",29],["drivers.plus",29],["mtcremix.com",29],["cybermania.ws",[29,55]],["karanpc.com",29],["xerifetech.com",29],["iconmonstr.com",29],["donghuaworld.com",29],["zealtyro.com",29],["idlixofficials.com",[29,117]],["idlixplus.com",[29,117]],["idlixplus.net",[29,117]],["idlixofficial.co",[29,117]],["idlixofficial.net",[29,117]],["postermockup.com",30],["forexwikitrading.com",30],["romfree.net",30],["mockupplanet.com",30],["graphicuv.com",30],["kisahdunia.com",30],["freedownloadvideo.net",30],["firmwarex.net",30],["filmisub.cc",30],["hscprojects.com",30],["graphicgoogle.com",30],["freemockupzone.com",30],["lulacloud.com",32],["turtleviplay.xyz",33],["filmi7.net",34],["trancehost.com",34],["arenascan.com",34],["resetscan.com",34],["geniussolutions.co",34],["skillheadlines.in",34],["portable4pc.com",34],["superpsx.com",34],["sampledrive.in",34],["magicgameworld.com",34],["e-player-stream.app",34],["bethaniebu.com",34],["limiteddollqjc.shop",35],["olympicstreams.ru",36],["javfc2.xyz",37],["secondhandsongs.com",38],["suaurl.com",39],["laweducationinfo.com",40],["savemoneyinfo.com",40],["worldaffairinfo.com",40],["godstoryinfo.com",40],["successstoryinfo.com",40],["cxissuegk.com",40],["learnmarketinfo.com",40],["bhugolinfo.com",40],["armypowerinfo.com",40],["rsadnetworkinfo.com",40],["rsinsuranceinfo.com",40],["rsfinanceinfo.com",40],["rsgamer.app",40],["rssoftwareinfo.com",40],["rshostinginfo.com",40],["rseducationinfo.com",40],["phonereviewinfo.com",40],["makeincomeinfo.com",40],["gknutshell.com",40],["vichitrainfo.com",40],["workproductivityinfo.com",40],["dopomininfo.com",40],["hostingdetailer.com",40],["fitnesssguide.com",40],["tradingfact4u.com",40],["cryptofactss.com",40],["softwaredetail.com",40],["artoffocas.com",40],["insurancesfact.com",40],["myuploadedpremium.de",41],["freewebcart.com",44],["hentaisea.com",46],["cablegratis.online",49],["kmo.to",49],["onifile.com",49],["oxanime.com",49],["pewgame.com",49],["piraproxy.app",49],["severeporn.com",49],["sexphimhd.net",49],["updatesmovie.xyz",49],["voirseries.io",49],["shahiid-anime.net",50],["goku.sx",51],["bitfly.io",52],["unblocked.name",56],["vibehubs.com",57],["traveldesearch.com",59],["thethothub.com",60],["anonymz.com",61],["naijaray.com.ng",62],["deutschsex.mobi",63],["1milf.com",63],["influencersgonewild.com",64],["freeiphone.fr",65],["pcbeta.com",66],["notformembersonly.com",67],["donpelis.com",68],["4everproxy.com",69],["dirproxy.com",70],["fapguru.com",72],["pornpapa.com",72],["videojav.com",72],["toxicwap.us",73],["dvdgayonline.com",74],["cctvwiki.com",74],["freepornsex.net",74],["cinepiroca.com",74],["dvd-flix.com",74],["sonixgvn.net",74],["xozilla.xxx",76],["dragontranslation.com",77],["yt5s.com",77],["downloadfreecourse.com",78],["publicflashing.me",79],["sanet.st",80],["dlhd.sx",80],["shorttrick.in",81],["exey.app",82],["boombj.com",83],["stream.bunkr.ru",83],["jav.re",84],["coromon.wiki.gg",85],["dropmms.com",86],["sexemix.com",87],["links4u.co",[88,89]],["edoujin.net",90],["alexsports.click",91],["pahaplayers.click",91],["imageupscaler.com",92],["picyield.com",93],["snaptik.app",94],["manhwalist.com",95],["nilesoft.org",96],["smgplaza.com",97],["novinky.cz",98],["tuxnews.it",99],["emperorscan.com",100],["makotoichikawa.net",100],["telephone-soudan.com",100],["hentaiseason.com",101],["comedyshow.to",102],["zefoy.com",103],["gamedrive.org",104],["sexvideos.host",105],["corrector.app",106],["dailytechinfo.me",107],["jeniusplay.com",107],["cgaa.org",108],["screenflash.io",109],["streamporn.co.uk",110],["teknisitv.com",111],["paylaterin.com",111],["tgx.rs",112],["thestar.com",113],["earnhub.net",114],["gplastra.com",115],["qiwi.gg",116],["idlixofficialx.net",118],["tweakers.net",119],["perplexity.ai",120],["deviantart.com",121],["cadenadial.com",122],["cursomecanet.com",123]]);

const entitiesMap = new Map([["kissjav",8],["hdvid",9],["123moviess",11],["thefmovies",13],["doujindesu",16],["1337x",[20,21,22,23]],["x1337x",[21,22,23]],["an1me",29],["mhdsports",31],["mhdtvmax",31],["sms24",[42,43]],["shorttey",45],["wawacity",47],["xcloud",48],["filmypur",49],["nuroflix",49],["pelis28",49],["pelisplusgo",49],["pelisplusxd",49],["repelisgoo",49],["repelisgooo",49],["repelisgt",49],["repelisxd",49],["theproxy",49],["tvply",49],["vidlox",49],["watchfree",49],["songspk",50],["isaimini",51],["pelisplus",52],["pelisplus2",52],["moviespapa",53],["kuttymovies",54],["speedostream",58],["thothub",60],["uproxy2",62],["mp3juices",71],["gotxx",75],["mmsbee",75],["hdmoviefair",80],["movierulzhd",88],["showflix",101],["torrentgalaxy",112]]);

const exceptionsMap = new Map([["xcloud.host",[48]]]);

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
                    if ( matchesStackTraceFn(needleDetails, extraArgs.log) ) {
                        throw new ReferenceError(getExceptionToken());
                    }
                    return v;
                },
                set: function(a) {
                    if ( matchesStackTraceFn(needleDetails, extraArgs.log) ) {
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
    } catch(_) {
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
}
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

uBOL_abortOnStackTrace();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
