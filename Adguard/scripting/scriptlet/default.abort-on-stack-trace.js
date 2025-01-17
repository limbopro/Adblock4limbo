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

const argsList = [["Math","onerror"],["Math.random","/injectedScript.*inlineScript/"],["Math.random","/(?=.*onerror)(?=^(?!.*(https)))/"],["Math.random","/injectedScript|blob/"],["String.prototype.charCodeAt","ai_"],["onload","inlineScript"],["navigator.userAgent","exopop.browser.is"],["document.querySelector","detect"],["document.cookie","https"],["atob","_0x"],["String.fromCharCode","stackDepth:3"],["Math.round","inlineScript"],["document.createElement","inlineScript"],["atob","inlineScript"],["Math","inlineScript"],["document.getElementById","onLoadEvent"],["Object","mark"],["Math.random","inlineScript"],["console.log","/blob|injectedScript/"],["setTimeout","onload"],["encodeURIComponent","inlineScript"],["setTimeout","adsBlocked"],["document.querySelector","suaads"],["navigator.userAgent","checkBrowser"],["document.getElementById","adsBlocked"],["document.getElementsByTagName","adsBlocked"],["$","/(?=^(?!.*(https)))/"],["$ado","/ado/i"],["document.createElement","app.js"],["Math","showModal"],["Math.random","t.pt"],["Math.random","stackDepth:4"],["String.prototype.charCodeAt","_0x"],["EventTarget.prototype.addEventListener","/(?=^(?!.*(challenge-platform|jquery|challenges\\.cloudflare\\.com|jwplayer)))/"],["Math.random","/\\st\\.[a-zA-Z]*\\s/"],["Object","/(?=^(?!.*(https)))/"],["Object","inlineScript"],["Math.random","/\\st\\.[a-zA-Z]*\\sinlineScript/"],["XMLHttpRequest","/inlineScript|stackDepth:1/"],["XMLHttpRequest","inlineScript"],["Math.random","/(?=^(?!.*(/akismet-frontend\\.js|gstatic|jquery/)))/"],["Math.random",""],["jQuery","ai_adb"],["JSON.parse","computed"],["XMLHttpRequest","onreadystatechange"],["localStorage","inlineScript"],["_pop","_init"],["Math.floor",""],["Math.floor","randStr"],["Math.round","onload"],["Math","ai_"],["document.createElement","make_rand_div"],["_pop"],["localStorage","stackDepth:1"],["foreverJQ","/document.createElement|stackDepth:2/"],["Math",""],["Math.random","computed"],["$","inlineScript"],["Math","https"],["setTimeout","ads"],["Element.prototype.matches","litespeed"],["HTMLSelectElement","Object"],["String.prototype.charCodeAt","https"],["fetch","inlineScript"],["console","onload"],["document.createElement","onerror"],["fetch","https"],["document.getElementById","disable"],["Math","_0x"],["onload","/app.js"],["document.createElement","create_ad"],["document.createElement","/^(?!.*(jquery|setDocument|inlineScript|gstatic|google|root|cgi).*)/"],["document.createElement","/(?=^(?!.*(https)))/"],["document.createElement","/(?=^(?!.*(http)))/"],["Object","webpack"],["String.prototype.charCodeAt","/(?=^(?!.*(https|Object)))/"],["Date.now","afScript"],["document.querySelectorAll","/(?=^(?!.*(https|Parse|Image)))/"],["document.body.appendChild"],["$","openAdsModal"],["btoa","/https|stackDepth:3/"],["DOMTokenList.prototype.add","inlineScript"],["document.createElement","notify"],["document.addEventListener","litespeed"],["HTMLIFrameElement","inlineScript"],["parseInt","adsBlocked"],["document.querySelectorAll","/(?=^(?!.*(https|injectedScript)))/"],["document.getElementById","fairAdblock"],["document.querySelector","showModal"],["atob","/zefoy\\.com\\S+:3:1/"],["document.querySelector","/showModal|chooseAction|doAction|callbackAdsBlocked/"],["setTimeout","dontask"],["Object.getPrototypeOf","plugins"],["document.createElement","adsBlocked"],["Error","/stackDepth:1\\s/"],["localStorage","tryShowVideoAdAsync"],["localStorage","window.onload"],["decodeURIComponent","autoptimize"],["String.prototype.charCodeAt","$"],["document.createElement","detect"],["onload","bodyElement.removeChild"],["setTimeout","data"],["document.createElement","createDecoy"],["document.querySelector","/(?!\\bjquery\\b)/"],["document.querySelector","/^((?!jquery|wpdiscuz|recaptcha|cssHas|orchestrate|inlineScript).)*$/"],["document.createElement","_0x"],["navigator","FingerprintJS"],["localStorage","/https:\\/\\/x?1337x\\.[a-z]+\\/\\S+\\.js/"],["onload","/https:\\/\\/x?1337x\\.[a-z]+\\/\\S+\\.js/"],["HTMLElement.prototype.click","_0x"],["atob","injectedScript"],["jQuery","removeDLElements"],["document.createElement","pda"],["document.addEventListener","blocker"],["fetch","HTMLDocument"],["Object.defineProperty","https"],["document.createElement","openNewTab"],["document.getElementById","/(?=^(?!.*(orchestrate|cloudflare)))/"],["Object","Pop"],["document.createElement","yes.onclick"],["document.getElementById","inlineScript"],["clearTimeout","/\\b[a-z] inlineScript:/"],["btoa","send"],["window.screen.height","setTimeout"],["Math.sqrt","update"],["History","/(^(?!.*(Function|HTMLDocument).*))/"]];

const hostnamesMap = new Map([["dcdirtylaundry.com",0],["ipatriot.com",0],["newser.com",0],["politicalcowboy.com",0],["telexplorer.com.ar",1],["designbump.com",2],["thedesigninspiration.com",2],["appteka.store",3],["iptvbin.com",4],["gaypornmasters.com",4],["gaypornwave.com",4],["scubidu.eu",4],["amyscans.com",4],["thesukan.net",4],["jootc.com",4],["gaydelicious.com",4],["dramahd.me",4],["exbulletin.com",4],["game-owl.com",4],["javnow.net",4],["world4.eu",4],["gadgetguideonline.com",4],["therootdroid.com",4],["lazytranslations.com",4],["mettablog.com",4],["webdeyazilim.com",4],["freebulksmsonline.com",4],["buydekhke.com",4],["isekaisubs.web.id",4],["javhoho.com",4],["udoyoshi.com",4],["adrianoluis.net",4],["altevolkstrachten.de",4],["animecast.net",4],["armyranger.com",4],["articletz.com",4],["boxylucha.com",4],["chibchat.com",4],["duniailkom.com",4],["enciclopediaonline.com",4],["entano.jp",4],["eyalo.com",4],["fosslovers.com",4],["fotopixel.es",4],["hairstylesthatwork.com",4],["hello-e1.com",4],["ichberlin.com",4],["ireez.com",4],["keepkoding.com",4],["latribunadeautomocion.es",4],["linemarlin.com",4],["lumpiastudio.com",4],["miaandme.org",4],["mobility.com.ng",4],["mygardening411.com",4],["newstvonline.com",4],["organismes.org",4],["papagiovannipaoloii.altervista.org",4],["playlists.rocks",4],["relatosdesexo.xxx",4],["rencah.com",4],["riverdesdelatribuna.com.ar",4],["sarkarinaukry.com",4],["seamanmemories.com",4],["socialmediaverve.com",4],["theorie-musik.de",4],["topperpoint.com",4],["travel-the-states.com",4],["vozz.vn",4],["ilifehacks.com",4],["gamingsym.in",4],["riotbits.com",4],["burakgoc.com",4],["systopedia.com",4],["googledrivelinks.com",4],["lacuevadeguns.com",5],["pussyspace.com",6],["pussyspace.net",6],["videos.porndig.com",7],["zootube1.com",8],["camwhorescloud.com",11],["readytechflip.com",11],["cryptonor.xyz",12],["clifnewz.online",12],["watchkobestreams.info",13],["imgdawgknuttz.com",13],["gameshdlive.net",13],["pcgamez-download.com",14],["fifaultimateteam.it",14],["mlsbd.shop",14],["songspk2.info",14],["gametop.com",15],["artribune.com",16],["chicksonright.com",17],["moneyversed.com",17],["hentaispark.com",17],["coloredmanga.com",17],["laksa19.github.io",18],["fontyukle.net",19],["programmiedovetrovarli.it",20],["biopills.net",20],["graphicuv.com",21],["kisahdunia.com",21],["freedownloadvideo.net",21],["firmwarex.net",21],["filmisub.cc",21],["hscprojects.com",21],["graphicgoogle.com",21],["freemockupzone.com",21],["postermockup.com",21],["forexwikitrading.com",21],["romfree.net",21],["mockupplanet.com",21],["suaurl.com",22],["laweducationinfo.com",23],["savemoneyinfo.com",23],["worldaffairinfo.com",23],["godstoryinfo.com",23],["successstoryinfo.com",23],["cxissuegk.com",23],["learnmarketinfo.com",23],["bhugolinfo.com",23],["armypowerinfo.com",23],["rsadnetworkinfo.com",23],["rsinsuranceinfo.com",23],["rsfinanceinfo.com",23],["rsgamer.app",23],["rssoftwareinfo.com",23],["rshostinginfo.com",23],["rseducationinfo.com",23],["phonereviewinfo.com",23],["makeincomeinfo.com",23],["gknutshell.com",23],["vichitrainfo.com",23],["workproductivityinfo.com",23],["dopomininfo.com",23],["hostingdetailer.com",23],["fitnesssguide.com",23],["tradingfact4u.com",23],["cryptofactss.com",23],["softwaredetail.com",23],["artoffocas.com",23],["insurancesfact.com",23],["travellingdetail.com",23],["geniussolutions.co",24],["skillheadlines.in",24],["portable4pc.com",24],["superpsx.com",24],["sampledrive.in",24],["magicgameworld.com",24],["e-player-stream.app",24],["bethaniebu.com",24],["filmi7.net",24],["trancehost.com",24],["arenascan.com",24],["resetscan.com",24],["mtcremix.com",25],["cybermania.ws",[25,40]],["karanpc.com",25],["xerifetech.com",25],["iconmonstr.com",25],["donghuaworld.com",25],["zealtyro.com",25],["idlixofficials.com",[25,103]],["idlixplus.com",[25,103]],["idlixplus.net",[25,103]],["idlixofficial.co",[25,103]],["idlixofficial.net",[25,103]],["zxi.mytechroad.com",25],["savegame.pro",25],["drivers.plus",25],["myuploadedpremium.de",26],["freewebcart.com",29],["hentaisea.com",31],["kmo.to",34],["onifile.com",34],["oxanime.com",34],["pewgame.com",34],["piraproxy.app",34],["severeporn.com",34],["sexphimhd.net",34],["voirseries.io",34],["shahiid-anime.net",35],["goku.sx",36],["bitfly.io",37],["unblocked.name",41],["vibehubs.com",42],["traveldesearch.com",44],["thethothub.com",45],["anonymz.com",46],["naijaray.com.ng",47],["deutschsex.mobi",48],["1milf.com",48],["influencersgonewild.com",49],["freeiphone.fr",50],["pcbeta.com",51],["notformembersonly.com",52],["donpelis.com",53],["4everproxy.com",54],["dirproxy.com",55],["fapguru.com",57],["pornpapa.com",57],["videojav.com",57],["toxicwap.us",58],["dvdgayonline.com",59],["cctvwiki.com",59],["freepornsex.net",59],["cinepiroca.com",59],["dvd-flix.com",59],["sonixgvn.net",59],["xozilla.xxx",61],["dragontranslation.com",62],["yt5s.com",62],["downloadfreecourse.com",63],["publicflashing.me",64],["sanet.st",65],["dlhd.sx",65],["shorttrick.in",66],["exey.app",67],["boombj.com",68],["stream.bunkr.ru",68],["jav.re",69],["coromon.wiki.gg",70],["dropmms.com",71],["sexemix.com",72],["links4u.co",[73,74]],["edoujin.net",75],["pahaplayers.click",76],["imageupscaler.com",77],["picyield.com",78],["snaptik.app",79],["manhwalist.com",80],["sportnews.to",81],["sportshub.to",81],["nilesoft.org",82],["smgplaza.com",83],["novinky.cz",84],["tuxnews.it",85],["emperorscan.com",86],["makotoichikawa.net",86],["telephone-soudan.com",86],["hentaiseason.com",87],["comedyshow.to",88],["zefoy.com",89],["gamedrive.org",90],["sexvideos.host",91],["corrector.app",92],["dailytechinfo.me",93],["jeniusplay.com",93],["cgaa.org",94],["screenflash.io",95],["streamporn.co.uk",96],["teknisitv.com",97],["paylaterin.com",97],["tgx.rs",98],["thestar.com",99],["earnhub.net",100],["gplastra.com",101],["qiwi.gg",102],["idlixofficialx.net",104],["abysscdn.com",109],["hihihaha1.xyz",109],["hihihaha2.xyz",109],["player-cdn.com",109],["playhydrax.com",109],["jpopsingles.eu",110],["emurom.net",111],["im9.eu",112],["elamigosedition.com",113],["lulacloud.com",115],["turtleviplay.xyz",116],["limiteddollqjc.shop",117],["olympicstreams.ru",118],["javfc2.xyz",119],["secondhandsongs.com",120],["xbaaz.com",121],["tweakers.net",122],["perplexity.ai",123],["deviantart.com",124],["cadenadial.com",125]]);

const entitiesMap = new Map([["kissjav",9],["hdvid",10],["123moviess",12],["thefmovies",14],["doujindesu",17],["an1me",25],["sms24",[27,28]],["shorttey",30],["wawacity",32],["xcloud",33],["filmypur",34],["nuroflix",34],["pelis28",34],["pelisplusgo",34],["pelisplusxd",34],["repelisgoo",34],["repelisgooo",34],["repelisgt",34],["repelisxd",34],["theproxy",34],["tvply",34],["vidlox",34],["watchfree",34],["songspk",35],["isaimini",36],["pelisplus",37],["pelisplus2",37],["moviespapa",38],["kuttymovies",39],["speedostream",43],["thothub",45],["uproxy2",47],["mp3juices",56],["gotxx",60],["mmsbee",60],["hdmoviefair",65],["movierulzhd",73],["showflix",87],["torrentgalaxy",98],["1337x",[105,106,107,108]],["x1337x",[106,107,108]],["mhdsports",114],["mhdtvmax",114]]);

const exceptionsMap = new Map([["xcloud.host",[33]]]);

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
