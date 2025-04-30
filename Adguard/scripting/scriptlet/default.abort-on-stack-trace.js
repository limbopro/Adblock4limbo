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

// ruleset: default

// Important!
// Isolate from global scope

// Start of local scope
(function uBOL_abortOnStackTrace() {

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
                        throw new ReferenceError(getExceptionTokenFn());
                    }
                    return v;
                },
                set: function(a) {
                    const log = safe.logLevel > 1 ? 'all' : 'match';
                    if ( matchesStackTraceFn(needleDetails, log) ) {
                        throw new ReferenceError(getExceptionTokenFn());
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

function getExceptionTokenFn() {
    const token = getRandomTokenFn();
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
    const exceptionToken = getExceptionTokenFn();
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
        'Object_hasOwn': Object.hasOwn.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String': self.String,
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

function getRandomTokenFn() {
    const safe = safeSelf();
    return safe.String_fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
}

/******************************************************************************/

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [["String.prototype.charCodeAt","ai_"],["onload","inlineScript"],["navigator.userAgent","pushiserve"],["document.createElement","rollexzone"],["document.querySelector","detect"],["document.cookie","https"],["String.fromCharCode","stackDepth:3"],["Math.round","inlineScript"],["document.createElement","inlineScript"],["atob","inlineScript"],["Math","inlineScript"],["document.getElementById","onLoadEvent"],["Object","mark"],["console.log","/blob|injectedScript/"],["setTimeout","onload"],["encodeURIComponent","inlineScript"],["setTimeout","adsBlocked"],["document.querySelector","suaads"],["navigator.userAgent","checkBrowser"],["document.getElementById","adsBlocked"],["document.getElementsByTagName","adsBlocked"],["Math","onerror"],["Math.random","/injectedScript.*inlineScript/"],["Math.random","/(?=.*onerror)(?=^(?!.*(https)))/"],["Math.random","/injectedScript|blob/"],["Math.random","/\\st\\.[a-zA-Z]*\\s/"],["Object","/(?=^(?!.*(https)))/"],["Object","inlineScript"],["Math.random","/\\st\\.[a-zA-Z]*\\sinlineScript/"],["XMLHttpRequest","/inlineScript|stackDepth:1/"],["XMLHttpRequest","inlineScript"],["document.querySelectorAll","/(?=^(?!.*(https|injectedScript)))/"],["document.getElementById","fairAdblock"],["$","/(?=^(?!.*(https)))/"],["$ado","/ado/i"],["document.createElement","app.js"],["Math","showModal"],["Math.random","t.pt"],["String.prototype.charCodeAt","_0x"],["EventTarget.prototype.addEventListener","/(?=^(?!.*(challenge-platform|jquery|challenges\\.cloudflare\\.com|jwplayer)))/"],["Math.random","/(?=^(?!.*(/akismet-frontend\\.js|gstatic|jquery/)))/"],["Math.random",""],["jQuery","ai_adb"],["JSON.parse","computed"],["localStorage","inlineScript"],["_pop","_init"],["Math.floor",""],["Math.floor","randStr"],["Math.round","onload"],["Math","ai_"],["document.createElement","make_rand_div"],["_pop"],["localStorage","stackDepth:1"],["foreverJQ","/document.createElement|stackDepth:2/"],["Math",""],["Math.random","computed"],["$","inlineScript"],["Math","https"],["setTimeout","ads"],["Math.random","inlineScript"],["Element.prototype.matches","litespeed"],["HTMLSelectElement","Object"],["String.prototype.charCodeAt","https"],["fetch","inlineScript"],["console","onload"],["document.createElement","onerror"],["fetch","https"],["document.getElementById","disable"],["Math","_0x"],["onload","/app.js"],["document.createElement","create_ad"],["String.prototype.charCodeAt","/(?=^(?!.*(jquery|turnstile|challenge-platform)))/"],["document.createElement","/(?=^(?!.*(https)))/"],["document.createElement","/(?=^(?!.*(http)))/"],["Date.now","afScript"],["document.querySelectorAll","/(?=^(?!.*(https|Parse|Image)))/"],["document.body.appendChild"],["$","openAdsModal"],["btoa","/https|stackDepth:3/"],["document.createElement","notify"],["document.addEventListener","litespeed"],["HTMLIFrameElement","inlineScript"],["parseInt","adsBlocked"],["document.querySelector","showModal"],["atob","/zefoy\\.com\\S+:3:1/"],["document.querySelector","/showModal|chooseAction|doAction|callbackAdsBlocked/"],["setTimeout","dontask"],["Object.getPrototypeOf","plugins"],["Error","/stackDepth:1\\s/"],["localStorage","tryShowVideoAdAsync"],["localStorage","window.onload"],["document.createElement","adsBlocked"],["decodeURIComponent","autoptimize"],["String.prototype.charCodeAt","$"],["document.createElement","detect"],["onload","bodyElement.removeChild"],["setTimeout","data"],["document.querySelector","/(?=^(?!.*(cdn-cgi)))/"],["document.createElement","createDecoy"],["document.createElement","_0x"],["navigator","FingerprintJS"],["localStorage","/https:\\/\\/x?1337x\\.[a-z]+\\/\\S+\\.js/"],["onload","/https:\\/\\/x?1337x\\.[a-z]+\\/\\S+\\.js/"],["HTMLElement.prototype.click","_0x"],["atob","injectedScript"],["jQuery","removeDLElements"],["document.createElement","pda"],["document.addEventListener","blocker"],["fetch","HTMLDocument"],["Object.defineProperty","https"],["document.createElement","openNewTab"],["document.getElementById","/(?=^(?!.*(orchestrate|cloudflare)))/"],["Object","Pop"],["document.createElement","yes.onclick"],["document.getElementById","inlineScript"],["clearTimeout","/\\b[a-z] inlineScript:/"],["document.readyState","drama-online"],["document.createElement","Object.init"],["document.createElement","onload"],["XMLHttpRequest","/(?=^(?!.*(_next)))/"],["Array.prototype.includes","adblockTrigger"],["btoa","send"],["window.screen.height","setTimeout"],["Math.sqrt","update"],["History","/(^(?!.*(Function|HTMLDocument).*))/"],["Array.from","/_tick|[0-9A-Za-z]{8,}\\/< https:\\/\\/pvpoke-re\\.com\\/[0-9A-Za-z]{8,}\\.js\\?v=/"]];
const hostnamesMap = new Map([["iptvbin.com",0],["gaypornmasters.com",0],["gaypornwave.com",0],["scubidu.eu",0],["amyscans.com",0],["thesukan.net",0],["adrianoluis.net",0],["altevolkstrachten.de",0],["animecast.net",0],["armyranger.com",0],["articletz.com",0],["boxylucha.com",0],["chibchat.com",0],["duniailkom.com",0],["enciclopediaonline.com",0],["entano.jp",0],["eyalo.com",0],["fosslovers.com",0],["fotopixel.es",0],["hairstylesthatwork.com",0],["hello-e1.com",0],["ichberlin.com",0],["ireez.com",0],["keepkoding.com",0],["latribunadeautomocion.es",0],["linemarlin.com",0],["lumpiastudio.com",0],["miaandme.org",0],["mobility.com.ng",0],["mygardening411.com",0],["newstvonline.com",0],["organismes.org",0],["papagiovannipaoloii.altervista.org",0],["playlists.rocks",0],["relatosdesexo.xxx",0],["rencah.com",0],["riverdesdelatribuna.com.ar",0],["sarkarinaukry.com",0],["seamanmemories.com",0],["socialmediaverve.com",0],["theorie-musik.de",0],["topperpoint.com",0],["travel-the-states.com",0],["vozz.vn",0],["jootc.com",0],["gaydelicious.com",0],["exbulletin.com",0],["game-owl.com",0],["javnow.net",0],["world4.eu",0],["gadgetguideonline.com",0],["therootdroid.com",0],["lazytranslations.com",0],["mettablog.com",0],["webdeyazilim.com",0],["freebulksmsonline.com",0],["buydekhke.com",0],["isekaisubs.web.id",0],["javhoho.com",0],["udoyoshi.com",0],["ilifehacks.com",0],["gamingsym.in",0],["riotbits.com",0],["burakgoc.com",0],["systopedia.com",0],["googledrivelinks.com",0],["lacuevadeguns.com",1],["pussyspace.com",[2,3]],["pussyspace.net",[2,3]],["videos.porndig.com",4],["zootube1.com",5],["hdvid.*",6],["camwhorescloud.com",7],["readytechflip.com",7],["123moviess.*",8],["cryptonor.xyz",8],["watchkobestreams.info",9],["imgdawgknuttz.com",9],["gameshdlive.net",9],["thefmovies.*",10],["pcgamez-download.com",10],["fifaultimateteam.it",10],["gametop.com",11],["artribune.com",12],["laksa19.github.io",13],["fontyukle.net",14],["programmiedovetrovarli.it",15],["biopills.net",15],["graphicuv.com",16],["kisahdunia.com",16],["freedownloadvideo.net",16],["firmwarex.net",16],["filmisub.cc",16],["hscprojects.com",16],["graphicgoogle.com",16],["freemockupzone.com",16],["postermockup.com",16],["forexwikitrading.com",16],["mockupplanet.com",16],["tojimanhwas.com",16],["suaurl.com",17],["laweducationinfo.com",18],["savemoneyinfo.com",18],["worldaffairinfo.com",18],["godstoryinfo.com",18],["successstoryinfo.com",18],["cxissuegk.com",18],["learnmarketinfo.com",18],["bhugolinfo.com",18],["armypowerinfo.com",18],["rsadnetworkinfo.com",18],["rsinsuranceinfo.com",18],["rsfinanceinfo.com",18],["rsgamer.app",18],["rssoftwareinfo.com",18],["rshostinginfo.com",18],["rseducationinfo.com",18],["phonereviewinfo.com",18],["makeincomeinfo.com",18],["gknutshell.com",18],["vichitrainfo.com",18],["workproductivityinfo.com",18],["dopomininfo.com",18],["hostingdetailer.com",18],["fitnesssguide.com",18],["tradingfact4u.com",18],["cryptofactss.com",18],["softwaredetail.com",18],["artoffocas.com",18],["insurancesfact.com",18],["travellingdetail.com",18],["geniussolutions.co",19],["skillheadlines.in",19],["portable4pc.com",19],["superpsx.com",19],["sampledrive.in",19],["magicgameworld.com",19],["e-player-stream.app",19],["bethaniebu.com",19],["filmi7.net",19],["trancehost.com",19],["arenascan.com",19],["resetscan.com",19],["mtcremix.com",20],["classicoder.com",20],["iconmonstr.com",20],["cybermania.ws",[20,40]],["karanpc.com",20],["an1me.*",20],["xerifetech.com",20],["donghuaworld.com",20],["zealtyro.com",20],["zxi.mytechroad.com",20],["savegame.pro",20],["drivers.plus",20],["dcdirtylaundry.com",21],["ipatriot.com",21],["newser.com",21],["telexplorer.com.ar",22],["designbump.com",23],["thedesigninspiration.com",23],["appteka.store",24],["filmypur.*",25],["kmo.to",25],["nuroflix.*",25],["onifile.com",25],["oxanime.com",25],["pelis28.*",25],["pelisplusgo.*",25],["pelisplusxd.*",25],["pewgame.com",25],["piraproxy.app",25],["repelisgoo.*",25],["repelisgooo.*",25],["repelisgt.*",25],["repelisxd.*",25],["severeporn.com",25],["sexphimhd.net",25],["theproxy.*",25],["tvply.*",25],["vidlox.*",25],["voirseries.io",25],["watchfree.*",25],["songspk.*",26],["shahiid-anime.net",26],["isaimini.*",27],["goku.sx",27],["bitfly.io",28],["pelisplus.*",28],["pelisplus2.*",28],["moviespapa.*",29],["kuttymovies.*",30],["emperorscan.com",31],["makotoichikawa.net",31],["telephone-soudan.com",31],["hentaiseason.com",32],["showflix.*",32],["myuploadedpremium.de",33],["sms24.*",[34,35]],["freewebcart.com",36],["shorttey.*",37],["wawacity.*",38],["xcloud.*",39],["unblocked.name",41],["vibehubs.com",42],["speedostream.*",43],["thothub.*",44],["thethothub.com",44],["anonymz.com",45],["naijaray.com.ng",46],["uproxy2.*",46],["deutschsex.mobi",47],["1milf.com",47],["influencersgonewild.com",48],["freeiphone.fr",49],["pcbeta.com",50],["notformembersonly.com",51],["donpelis.com",52],["4everproxy.com",53],["dirproxy.com",54],["mp3juices.*",55],["fapguru.com",56],["pornpapa.com",56],["videojav.com",56],["toxicwap.us",57],["dvdgayonline.com",58],["cctvwiki.com",58],["freepornsex.net",58],["cinepiroca.com",58],["dvd-flix.com",58],["sonixgvn.net",58],["chicksonright.com",59],["coloredmanga.com",59],["gotxx.*",60],["mmsbee.*",60],["xozilla.xxx",61],["dragontranslation.com",62],["yt5s.com",62],["aniwave.uk",62],["downloadfreecourse.com",63],["publicflashing.me",64],["sanet.st",65],["dlhd.sx",65],["hdmoviefair.*",65],["shorttrick.in",66],["exey.app",67],["boombj.com",68],["stream.bunkr.ru",68],["jav.re",69],["coromon.wiki.gg",70],["filepress.*",71],["sexemix.com",72],["movierulzhd.*",73],["pahaplayers.click",74],["imageupscaler.com",75],["picyield.com",76],["snaptik.app",77],["manhwalist.com",78],["nilesoft.org",79],["smgplaza.com",80],["novinky.cz",81],["tuxnews.it",82],["comedyshow.to",83],["zefoy.com",84],["gamedrive.org",85],["sexvideos.host",86],["corrector.app",87],["cgaa.org",88],["screenflash.io",89],["streamporn.co.uk",90],["jeniusplay.com",91],["teknisitv.com",92],["paylaterin.com",92],["torrentgalaxy.*",93],["thestar.com",94],["earnhub.net",95],["gplastra.com",96],["cimanow.cc",97],["freex2line.online",97],["qiwi.gg",98],["1337x.*",[99,100,101,102]],["x1337x.*",[100,101,102]],["abysscdn.com",103],["fullfreeimage.com",103],["hihihaha1.xyz",103],["hihihaha2.xyz",103],["hydraxcdn.biz",103],["imagelovers.com",103],["player-cdn.com",103],["playhydrax.com",103],["rufiiguta.com",103],["jpopsingles.eu",104],["emurom.net",105],["im9.eu",106],["elamigosedition.com",107],["mhdsports.*",108],["mhdtvmax.*",108],["lulacloud.com",109],["turtleviplay.xyz",110],["limiteddollqjc.shop",111],["olympicstreams.ru",112],["javfc2.xyz",113],["secondhandsongs.com",114],["xbaaz.com",115],["drama-online.tv",116],["porno-365.*",117],["vidfast.pro",[118,119]],["moviemaniak.com",120],["tweakers.net",121],["perplexity.ai",122],["deviantart.com",123],["cadenadial.com",124],["pvpoke-re.com",125]]);
const exceptionsMap = new Map([["xcloud.eu",[39]],["xcloud.host",[39]]]);
const hasEntities = true;
const hasAncestors = false;

const collectArgIndices = (hn, map, out) => {
    let argsIndices = map.get(hn);
    if ( argsIndices === undefined ) { return; }
    if ( typeof argsIndices !== 'number' ) {
        for ( const argsIndex of argsIndices ) {
            out.add(argsIndex);
        }
    } else {
        out.add(argsIndices);
    }
};

const indicesFromHostname = (hostname, suffix = '') => {
    const hnParts = hostname.split('.');
    const hnpartslen = hnParts.length;
    if ( hnpartslen === 0 ) { return; }
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = `${hnParts.slice(i).join('.')}${suffix}`;
        collectArgIndices(hn, hostnamesMap, todoIndices);
        collectArgIndices(hn, exceptionsMap, tonotdoIndices);
    }
    if ( hasEntities ) {
        const n = hnpartslen - 1;
        for ( let i = 0; i < n; i++ ) {
            for ( let j = n; j > i; j-- ) {
                const en = `${hnParts.slice(i,j).join('.')}.*${suffix}`;
                collectArgIndices(en, hostnamesMap, todoIndices);
                collectArgIndices(en, exceptionsMap, tonotdoIndices);
            }
        }
    }
};

const entries = (( ) => {
    const docloc = document.location;
    const origins = [ docloc.origin ];
    if ( docloc.ancestorOrigins ) {
        origins.push(...docloc.ancestorOrigins);
    }
    return origins.map((origin, i) => {
        const beg = origin.lastIndexOf('://');
        if ( beg === -1 ) { return; }
        const hn = origin.slice(beg+3)
        const end = hn.indexOf(':');
        return { hn: end === -1 ? hn : hn.slice(0, end), i };
    }).filter(a => a !== undefined);
})();
if ( entries.length === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = new Set();

indicesFromHostname(entries[0].hn);
if ( hasAncestors ) {
    for ( const entry of entries ) {
        if ( entry.i === 0 ) { continue; }
        indicesFromHostname(entry.hn, '>>');
    }
}

// Apply scriplets
for ( const i of todoIndices ) {
    if ( tonotdoIndices.has(i) ) { continue; }
    try { abortOnStackTrace(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
