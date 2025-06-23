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
(function uBOL_adjustSetTimeout() {

/******************************************************************************/

function adjustSetTimeout(
    needleArg = '',
    delayArg = '',
    boostArg = ''
) {
    if ( typeof needleArg !== 'string' ) { return; }
    const safe = safeSelf();
    const reNeedle = safe.patternToRegex(needleArg);
    let delay = delayArg !== '*' ? parseInt(delayArg, 10) : -1;
    if ( isNaN(delay) || isFinite(delay) === false ) { delay = 1000; }
    let boost = parseFloat(boostArg);
    boost = isNaN(boost) === false && isFinite(boost)
        ? Math.min(Math.max(boost, 0.001), 50)
        : 0.05;
    self.setTimeout = new Proxy(self.setTimeout, {
        apply: function(target, thisArg, args) {
            const [ a, b ] = args;
            if (
                (delay === -1 || b === delay) &&
                reNeedle.test(a.toString())
            ) {
                args[1] = b * boost;
            }
            return target.apply(thisArg, args);
        }
    });
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

/******************************************************************************/

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [["[native code]","17000","0.001"],["/outboundLink/"],["t++","500"],["isPeriodic","*"],["native code","15000","0.001"],["(null)","5000","0.001"],["/EzoIvent|TDELAY/","5000"],["b()","3000"],["ads","*"],["readyPromise","5000","0.001"],["taboola timeout","*","0.001"],["clearInterval(run)","5000","0.001"],["/TDELAY|EzoIvent/","*","0.001"],["isPeriodic","2200","0.001"],["isPeriodic","2300","0.001"],["[native code]","3000","0.001"],["i||(e(),i=!0)","2500","0.001"],["adConfig","*","0.001"],["","10000"],["_0x","*"],["grecaptcha.ready","*"],["redirect","4000"],[],["dlw","40000"],["seconds"],["ez","*","0.02"],["/.?/","4000"],["run"],["disabled"],["tick"],["","","0.02"],["/SplashScreen|BannerAd/"],["countdown","1000","0.02"],["contador","*","0.001"],["","10000","0"],["/.?/","*","0.002"],["getlink","*","0.001"],["/.?/","*"],["value","*"],["/\\$\\('|ai-close/","*","0.001"],["div_form"],["","*","0.1"],["getElementById","*","0.001"],["","1000"],["","*","0.02"],["","6000"],["tick","1000"],["downloadbtn"],["counter"],["readyToVote","12000"],["","7000","0"],["download","1100"],["countDown"],["animation"],[".fadeIn()","3000"],["load_ads"],["_0x","15000"],["location.href","8000"],["aTagChange","12000"],["window.location.href","*"],["isScrexed","5000"],["() => n(t)","*"],["/__ez|window.location.href/","*"],["adFreePopup","15000","0.02"],["countdown"],["remaining","1000","0.001"],["show","4000"],["download_loading","*"],["submit","5000"],["fa-unlock","3000"],["setinteracted","2000"],["[native code]","5000"],["shortConfig","15000"],["redirectpage","13500","0.001"],["countdown","","0.02"],["decodeURL","*"],["(!1)","*"],["bFired","*"],["setC"],["-1","*","0.001"],["total","1000","0.001"],["countdown","*","0.001"],["tick","1000","0.001"],["startDownload","8000"],["0x","*"],["countdown","*"],["download","1000","0.001"],["count"],["","10000","0.001"],["CountBack","990"],["","","0"],["remaining","","0.02"]];
const hostnamesMap = new Map([["www.youtube.com",0],["cyclingnews.com",1],["abcya.com",2],["watcho.com",3],["dailypost.co.uk",[4,5]],["dailystar.co.uk",[4,5]],["mirror.co.uk",[4,5]],["neurotray.com",6],["theonion.com",[7,8]],["20min.ch",9],["13tv.co.il",[10,11]],["tierlists.com",12],["wunderground.com",[13,14]],["standard.co.uk",[15,16]],["gameplayneo.com",17],["spiele.bild.de",18],["gamefront.com",18],["moviepilot.de",19],["slreamplay.*",20],["pouvideo.*",20],["povvideo.*",20],["povw1deo.*",20],["povwideo.*",20],["powv1deo.*",20],["powvibeo.*",20],["powvideo.*",20],["powvldeo.*",20],["imgadult.com",21],["imgdrive.net",21],["imgtaxi.com",21],["imgwallet.com",21],["bdupload.*",22],["techmyntra.net",22],["srt.am",22],["themeslide.com",22],["9xupload.*",22],["grantorrent.*",22],["grantorrents.*",22],["ausfile.com",22],["siriusfiles.com",22],["hdfull.*",22],["juegoviejo.com",22],["4share.vn",22],["lnk2.cc",22],["pelispedia.*",22],["modagamers.com",22],["sofwaremania.blogspot.com",22],["memoriadatv.com",22],["dosya.co",22],["clipartmax.com",22],["jptorrent.org",22],["quizlet.com",22],["sourceforge.net",22],["juegos.eleconomista.es",22],["katfile.com",22],["1fichier.com",23],["indi-share.com",24],["uptomega.*",24],["megaupto.com",24],["onuploads.com",24],["playretrogames.com",25],["imgrock.*",26],["gsm1x.xyz",27],["top1iq.com",27],["mixdrop.*",28],["mixdrp.*",28],["zeefiles.*",29],["files.im",29],["datavaults.co",29],["dokumen.tips",30],["file.magiclen.org",30],["so1.asia",30],["streamvid.net",30],["gamearter.com",31],["dvdgayonline.com",32],["investnewsbrazil.com",33],["subsvip.com",34],["shayarias.in",35],["jksb.in",35],["mazakisan.com",35],["grtjobs.in",35],["call-bomber.info",35],["kajernews.com",35],["vyaapaarguru.in",35],["junkyponk.com",36],["healthfirstweb.com",36],["vocalley.com",36],["yogablogfit.com",36],["howifx.com",36],["en.financerites.com",36],["mythvista.com",36],["livenewsflix.com",36],["cureclues.com",36],["apekite.com",36],["gyanitheme.com",37],["fansonlinehub.com",38],["hotmediahub.com",38],["terabox.fun",38],["teralink.me",38],["terashare.me",38],["teraearn.com",38],["rawlazy.si",39],["appsbull.com",40],["diudemy.com",40],["maqal360.com",40],["intercelestial.com",41],["hosttbuzz.com",42],["policiesreview.com",42],["whatgame.xyz",42],["mooonten.com",42],["msic.site",42],["fx-22.com",42],["gold-24.net",42],["forexrw7.com",42],["webzeni.com",43],["rfiql.com",44],["gujjukhabar.in",44],["smartfeecalculator.com",44],["djxmaza.in",44],["thecubexguide.com",44],["jytechs.in",44],["go.shortnest.com",45],["fastt.gg",46],["zmamobile.com",46],["uploadking.net",47],["adblockeronstape.*",48],["adblockplustape.*",48],["adblocktape.*",48],["advertisertape.com",48],["antiadtape.*",48],["gettapeads.com",48],["noblocktape.*",48],["shavetape.*",48],["stapadblockuser.*",48],["strcloud.*",48],["streamadblockplus.*",48],["streamnoads.com",48],["streamta.*",48],["streamtape.*",48],["streamtapeadblockuser.*",48],["strtape.*",48],["strtapeadblock.*",48],["tapeadsenjoyer.com",48],["tapeadvertisement.com",48],["tapeantiads.com",48],["tapeblocker.com",48],["tapelovesads.org",48],["tapenoads.com",48],["tapewithadblock.org",48],["watchadsontape.com",48],["adblockeronstreamtape.*",48],["top.gg",49],["emulatorgames.net",50],["actionviewphotography.com",51],["exporntoons.net",51],["mat6tube.*",51],["noodlemagazine.com",51],["whatisareverseauction.com",51],["sibtok.com",51],["ukdevilz.com",51],["tyler-brown.com",51],["aapks.com",52],["codingnepalweb.com",53],["maxstream.video",54],["embed.nana2play.com",55],["mgnet.xyz",56],["1bitspace.com",57],["ytsubme.com",58],["thecustomrom.com",59],["quizack.com",60],["media.cms.nova.cz",61],["yhocdata.com",62],["surfline.com",63],["downloadr.in",64],["downloadudemy.com",64],["xubster.com",65],["uploadcloud.pro",66],["apkmody.*",67],["romsgames.net",68],["romsget.io",68],["sub1s.com",69],["mboost.me",70],["atresplayer.com",71],["writedroid.*",72],["dktechnicalmate.com",73],["indiakablog.com",73],["recipahi.com",73],["20sfvn.com",74],["hi888.today",74],["oto5s.com",74],["w88.limo",74],["tralhasvarias.blogspot.com",75],["empire-anime.*",76],["empire-streaming.*",76],["empire-anime.com",76],["empire-streamz.fr",76],["empire-stream.*",76],["thestar.com",77],["present.rssing.com",78],["infidrive.net",79],["sethphat.com",80],["theapkfolder.com",81],["dfast.app",81],["upapk.io",82],["updown.link",83],["thehouseofportable.com",84],["an1.com",85],["voltupload.com",86],["pimpandhost.com",87],["101soundboards.com",88],["lewdzone.com",89],["youku.com",90],["transfaze.com",91]]);
const exceptionsMap = new Map([]);
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
    try { adjustSetTimeout(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
