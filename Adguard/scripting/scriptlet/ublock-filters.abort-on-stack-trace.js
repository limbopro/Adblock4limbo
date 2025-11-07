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

// ruleset: ublock-filters

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
const argsList = [["document.createElement","createAdblockWarning"],["History","/(^(?!.*(Function|HTMLDocument).*))/"],["String.prototype.charCodeAt","ai_"],["onload","inlineScript"],["navigator.userAgent","pushiserve"],["document.createElement","rollexzone"],["document.querySelector","detect"],["document.cookie","https"],["String.fromCharCode","stackDepth:3"],["Math.round","inlineScript"],["document.createElement","inlineScript"],["atob","inlineScript"],["Math","inlineScript"],["document.getElementById","onLoadEvent"],["Object","mark"],["XMLHttpRequest.prototype.open","svonm.com"],["console.log","/blob|injectedScript/"],["encodeURIComponent","inlineScript"],["setTimeout","adsBlocked"],["document.querySelector","suaads"],["navigator.userAgent","checkBrowser"],["document.getElementById","adsBlocked"],["document.getElementsByTagName","adsBlocked"],["document.getElementById","fairAdblock"],["Math","onerror"],["Math.random","/injectedScript.*inlineScript/"],["Math.random","/(?=.*onerror)(?=^(?!.*(https)))/"],["Math.random","/injectedScript|blob/"],["document.createElement","loadNeverBlock"],["Math.random","/\\st\\.[a-zA-Z]*\\s/"],["Object","/(?=^(?!.*(https)))/"],["Math.random","/\\st\\.[a-zA-Z]*\\sinlineScript/"],["XMLHttpRequest","/inlineScript|stackDepth:1/"],["btoa","/https|stackDepth:3/"],["document.getElementsByTagName","_createCatchAllDiv"],["document.querySelectorAll","/(?=^(?!.*(https|injectedScript)))/"],["HTMLElement.prototype.click","_0x"],["document.createElement","openNewTab"],["setTimeout","onload"],["document.createElement","createAgeModal"],["$","/(?=^(?!.*(https)))/"],["$ado","/ado/i"],["document.createElement","app.js"],["Math","showModal"],["Math.random","t.pt"],["EventTarget.prototype.addEventListener","/(?=^(?!.*(challenge-platform|jquery|challenges\\.cloudflare\\.com|jwplayer)))/"],["Math.random",""],["jQuery","ai_adb"],["JSON.parse","computed"],["localStorage","inlineScript"],["_pop","_init"],["Math.floor",""],["Math.floor","randStr"],["Math.round","onload"],["Math","ai_"],["document.createElement","make_rand_div"],["_pop"],["foreverJQ","/document.createElement|stackDepth:2/"],["Math",""],["Math.random","computed"],["$","inlineScript"],["Math","https"],["setTimeout","ads"],["Math.random","inlineScript"],["Element.prototype.matches","litespeed"],["HTMLSelectElement","Object"],["String.prototype.charCodeAt","https"],["fetch","inlineScript"],["console","onload"],["document.createElement","onerror"],["fetch","https"],["Math","_0x"],["onload","/app.js"],["document.createElement","create_ad"],["String.prototype.charCodeAt","/(?=^(?!.*(jquery|turnstile|challenge-platform)))/"],["document.createElement","/(?=^(?!.*(https)))/"],["document.createElement","/(?=^(?!.*(http)))/"],["document.querySelectorAll","/(?=^(?!.*(https|Parse|Image)))/"],["document.body.appendChild"],["$","openAdsModal"],["document.createElement","notify"],["document.addEventListener","litespeed"],["HTMLIFrameElement","inlineScript"],["parseInt","adsBlocked"],["atob","/zefoy\\.com\\S+:3:1/"],["document.querySelector","/showModal|chooseAction|doAction|callbackAdsBlocked/"],["setTimeout","dontask"],["atob","eval"],["Object.getPrototypeOf","plugins"],["Error","/stackDepth:1\\s/"],["localStorage","tryShowVideoAdAsync"],["document.createElement","adsBlocked"],["decodeURIComponent","autoptimize"],["String.prototype.charCodeAt","$"],["document.createElement","detect"],["onload","bodyElement.removeChild"],["setTimeout","data"],["document.querySelector","/(?=^(?!.*(cdn-cgi)))/"],["document.createElement","createDecoy"],["atob","injectedScript"],["jQuery","removeDLElements"],["document.createElement","pda"],["document.addEventListener","blocker"],["fetch","HTMLDocument"],["Object.defineProperty","https"],["document.getElementById","/(?=^(?!.*(orchestrate|cloudflare)))/"],["document.createElement","yes.onclick"],["document.createElement","createInvisibleTrigger"],["document.getElementById","inlineScript"],["clearTimeout","/\\b[a-z] inlineScript:/"],["document.readyState","drama-online"],["document.createElement","Object.init"],["document.createElement","onload"],["XMLHttpRequest","/(?=^(?!.*(_next)))/"],["Array.prototype.includes","adblockTrigger"],["atob","/HTMLDocument|blob/"],["Math.floor","_insertDirectAdLink"],["btoa","send"],["window.screen.height","setTimeout"],["Math.sqrt","update"]];
const hostnamesMap = new Map([["cdn.bg-gledai.video",0],["cdn.gledaitv.fan",0],["cdn.gledaitv.live",0],["cadenadial.com",1],["iptvbin.com",2],["gaypornmasters.com",2],["gaypornwave.com",2],["scubidu.eu",2],["amyscans.com",2],["thesukan.net",2],["adrianoluis.net",2],["animecast.net",2],["armyranger.com",2],["articletz.com",2],["bibliopanda.com",2],["boxylucha.com",2],["chibchat.com",2],["duniailkom.com",2],["enciclopediaonline.com",2],["entano.jp",2],["eyalo.com",2],["fosslovers.com",2],["fotopixel.es",2],["hairstylesthatwork.com",2],["ichberlin.com",2],["ireez.com",2],["keepkoding.com",2],["latribunadeautomocion.es",2],["linemarlin.com",2],["lumpiastudio.com",2],["miaandme.org",2],["mobility.com.ng",2],["mygardening411.com",2],["newstvonline.com",2],["organismes.org",2],["papagiovannipaoloii.altervista.org",2],["rencah.com",2],["riverdesdelatribuna.com.ar",2],["sakpot.com",2],["sarkarinaukry.com",2],["seamanmemories.com",2],["socialmediaverve.com",2],["swatalk.com",2],["theorie-musik.de",2],["topperpoint.com",2],["torascripts.org",2],["travel-the-states.com",2],["vozz.vn",2],["jootc.com",2],["gaydelicious.com",2],["exbulletin.com",2],["game-owl.com",2],["world4.eu",2],["gadgetguideonline.com",2],["lazytranslations.com",2],["mettablog.com",2],["webdeyazilim.com",2],["freebulksmsonline.com",2],["buydekhke.com",2],["isekaisubs.web.id",2],["javhoho.com",2],["udoyoshi.com",2],["ilifehacks.com",2],["gamingsym.in",2],["riotbits.com",2],["burakgoc.com",2],["googledrivelinks.com",2],["lacuevadeguns.com",3],["pussyspace.com",[4,5]],["pussyspace.net",[4,5]],["videos.porndig.com",6],["zootube1.com",7],["hdvid.*",8],["camwhorescloud.com",9],["123moviess.*",10],["cryptonor.xyz",10],["watchkobestreams.info",11],["imgdawgknuttz.com",11],["thefmovies.*",12],["pcgamez-download.com",12],["fifaultimateteam.it",12],["gametop.com",13],["artribune.com",14],["giga.de",15],["laksa19.github.io",16],["programmiedovetrovarli.it",17],["biopills.net",17],["graphicuv.com",18],["kisahdunia.com",18],["firmwarex.net",18],["filmisub.cc",18],["hscprojects.com",18],["graphicgoogle.com",18],["freemockupzone.com",18],["postermockup.com",18],["forexwikitrading.com",18],["mockupplanet.com",18],["suaurl.com",19],["laweducationinfo.com",20],["savemoneyinfo.com",20],["worldaffairinfo.com",20],["godstoryinfo.com",20],["successstoryinfo.com",20],["cxissuegk.com",20],["learnmarketinfo.com",20],["bhugolinfo.com",20],["armypowerinfo.com",20],["rsgamer.app",20],["phonereviewinfo.com",20],["makeincomeinfo.com",20],["gknutshell.com",20],["vichitrainfo.com",20],["workproductivityinfo.com",20],["dopomininfo.com",20],["hostingdetailer.com",20],["fitnesssguide.com",20],["tradingfact4u.com",20],["cryptofactss.com",20],["softwaredetail.com",20],["artoffocas.com",20],["insurancesfact.com",20],["travellingdetail.com",20],["geniussolutions.co",21],["skillheadlines.in",21],["portable4pc.com",21],["superpsx.com",21],["loadx.ws",21],["magicgameworld.com",21],["filmi7.net",21],["trancehost.com",21],["arenascan.com",21],["mtcremix.com",22],["classicoder.com",22],["iconmonstr.com",22],["cybermania.ws",22],["karanpc.com",22],["an1me.*",22],["xerifetech.com",22],["donghuaworld.com",22],["zealtyro.com",22],["zxi.mytechroad.com",22],["savegame.pro",22],["drivers.plus",22],["vgames.fun",23],["hentaiseason.com",23],["showflix.*",23],["dcdirtylaundry.com",24],["ipatriot.com",24],["newser.com",24],["telexplorer.com.ar",25],["designbump.com",26],["thedesigninspiration.com",26],["appteka.store",27],["pornhub-sexfilme.net",28],["pornojenny.net",28],["pornoleon.com",28],["filmypur.*",29],["kmo.to",29],["nuroflix.*",29],["onifile.com",29],["oxanime.com",29],["pelis28.*",29],["pelisplusgo.*",29],["pelisplusxd.*",29],["pewgame.com",29],["piraproxy.app",29],["repelisgoo.*",29],["repelisgooo.*",29],["repelisgt.*",29],["repelisxd.*",29],["severeporn.com",29],["sexphimhd.net",29],["theproxy.*",29],["tvply.*",29],["vidlox.*",29],["voirseries.io",29],["watchfree.*",29],["songspk.*",30],["shahiid-anime.net",30],["bitfly.io",31],["pelisplus.*",31],["pelisplus2.*",31],["moviespapa.*",32],["manhwalist.com",33],["nekolink.site",34],["emperorscan.com",35],["makotoichikawa.net",35],["telephone-soudan.com",35],["abysscdn.com",36],["fullfreeimage.com",36],["hihihaha1.xyz",36],["hihihaha2.xyz",36],["hydraxcdn.biz",36],["imagelovers.com",36],["player-cdn.com",36],["playermeow.com",36],["playhydrax.com",36],["rufiiguta.com",36],["turtleviplay.xyz",37],["fontyukle.net",38],["streamobs.net",39],["myuploadedpremium.de",40],["sms24.*",[41,42]],["freewebcart.com",43],["shorttey.*",44],["xcloud.*",45],["unblocked.name",46],["vibehubs.com",47],["speedostream.*",48],["thothub.*",49],["thethothub.com",49],["anonymz.com",50],["naijaray.com.ng",51],["uproxy2.*",51],["deutschsex.mobi",52],["1milf.com",52],["influencersgonewild.com",53],["freeiphone.fr",54],["pcbeta.com",55],["notformembersonly.com",56],["4everproxy.com",57],["dirproxy.com",58],["mp3juices.*",59],["fapguru.com",60],["pornpapa.com",60],["videojav.com",60],["toxicwap.us",61],["dvdgayonline.com",62],["cctvwiki.com",62],["freepornsex.net",62],["cinepiroca.com",62],["dvd-flix.com",62],["sonixgvn.net",62],["chicksonright.com",63],["coloredmanga.com",63],["gotxx.*",64],["mmsbee.*",64],["xozilla.xxx",65],["dragontranslation.com",66],["yt5s.com",66],["aniwave.uk",66],["downloadfreecourse.com",67],["publicflashing.me",68],["sanet.st",69],["dlhd.sx",69],["hdmoviefair.*",69],["shorttrick.in",70],["boombj.com",71],["stream.bunkr.ru",71],["jav.re",72],["coromon.wiki.gg",73],["filepress.*",74],["sexemix.com",75],["movierulzhd.*",76],["imageupscaler.com",77],["picyield.com",78],["snaptik.app",79],["nilesoft.org",80],["smgplaza.com",81],["novinky.cz",82],["tuxnews.it",83],["zefoy.com",84],["gamedrive.org",85],["sexvideos.host",86],["fapdrop.com",87],["corrector.app",88],["cgaa.org",89],["screenflash.io",90],["jeniusplay.com",91],["teknisitv.com",92],["paylaterin.com",92],["torrentgalaxy.*",93],["thestar.com",94],["earnhub.net",95],["gplastra.com",96],["cimanow.cc",97],["qiwi.gg",98],["jpopsingles.eu",99],["emurom.net",100],["im9.eu",101],["elamigosedition.com",102],["mhdsports.*",103],["mhdtvmax.*",103],["lulacloud.com",104],["limiteddollqjc.shop",105],["javfc2.xyz",106],["vidlink.pro",107],["secondhandsongs.com",108],["xbaaz.com",109],["drama-online.tv",110],["porno-365.*",111],["vidfast.pro",[112,113]],["moviemaniak.com",114],["gaypornhot.com",115],["asiaflix.net",116],["tweakers.net",117],["perplexity.ai",118],["deviantart.com",119]]);
const exceptionsMap = new Map([["xcloud.eu",[45]],["xcloud.host",[45]]]);
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
