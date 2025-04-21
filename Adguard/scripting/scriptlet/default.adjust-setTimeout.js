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
const argsList = [["","10000"],["_0x","*"],["grecaptcha.ready","*"],["redirect","4000"],[],["dlw","40000"],["seconds"],["ez","*","0.02"],["/.?/","4000"],["run"],["disabled"],["tick"],["","","0.02"],["/SplashScreen|BannerAd/"],["countdown","1000","0.02"],["contador","*","0.001"],["","10000","0"],["/.?/","*","0.002"],["getlink","*","0.001"],["value","*"],["/\\$\\('|ai-close/","*","0.001"],["div_form"],["","*","0.1"],["shortenbl"],["enbll"],["","1000"],["getElementById","*","0.001"],["","*","0.02"],["","6000"],["downloadbtn"],["counter"],["readyToVote","12000"],["","7000","0"],["download","1100"],["countDown"],["animation"],[".fadeIn()","3000"],["load_ads"],["_0x","15000"],["location.href","8000"],["aTagChange","12000"],["window.location.href","*"],["isScrexed","5000"],["() => n(t)","*"],["/__ez|window.location.href/","*"],["adFreePopup","15000","0.02"],["countdown"],["remaining","1000","0.001"],["show","4000"],["download_loading","*"],["submit","5000"],["fa-unlock","3000"],["setinteracted","2000"],["[native code]","5000"],["shortConfig","15000"],["redirectpage","13500","0.001"],["countdown","","0.02"],["decodeURL","*"],["(!1)","*"],["bFired","*"],["setC"],["-1","*","0.001"],["total","1000","0.001"],["countdown","*","0.001"],["tick","1000","0.001"],["startDownload","8000"],["0x","*"],["countdown","*"],["download","1000","0.001"],["count"],["","10000","0.001"],["CountBack","990"],["","","0"],["remaining","","0.02"],["tick","1000"],["/outboundLink/"],["t++","500"],["isPeriodic","*"],["native code","15000","0.001"],["(null)","5000","0.001"],["/EzoIvent|TDELAY/","5000"],["b()","3000"],["ads","*"],["readyPromise","5000","0.001"],["taboola timeout","*","0.001"],["clearInterval(run)","5000","0.001"],["/TDELAY|EzoIvent/","*","0.001"],["isPeriodic","2200","0.001"],["isPeriodic","2300","0.001"],["[native code]","3000","0.001"],["i||(e(),i=!0)","2500","0.001"],["adConfig","*","0.001"],["[native code]","17000","0.001"]];
const hostnamesMap = new Map([["spiele.bild.de",0],["gamefront.com",0],["moviepilot.de",1],["slreamplay.*",2],["pouvideo.*",2],["povvideo.*",2],["povw1deo.*",2],["povwideo.*",2],["powv1deo.*",2],["powvibeo.*",2],["powvideo.*",2],["powvldeo.*",2],["imgadult.com",3],["imgdrive.net",3],["imgtaxi.com",3],["imgwallet.com",3],["bdupload.*",4],["techmyntra.net",4],["srt.am",4],["themeslide.com",4],["9xupload.*",4],["grantorrent.*",4],["grantorrents.*",4],["ausfile.com",4],["siriusfiles.com",4],["hdfull.*",4],["juegoviejo.com",4],["4share.vn",4],["lnk2.cc",4],["pelispedia.*",4],["modagamers.com",4],["sofwaremania.blogspot.com",4],["memoriadatv.com",4],["dosya.co",4],["clipartmax.com",4],["jptorrent.org",4],["quizlet.com",4],["sourceforge.net",4],["juegos.eleconomista.es",4],["katfile.com",4],["1fichier.com",5],["indi-share.com",6],["uptomega.*",6],["megaupto.com",6],["onuploads.com",6],["playretrogames.com",7],["imgrock.*",8],["gsm1x.xyz",9],["top1iq.com",9],["mixdrop.*",10],["mixdrp.*",10],["zeefiles.*",11],["files.im",11],["datavaults.co",11],["dokumen.tips",12],["file.magiclen.org",12],["so1.asia",12],["streamvid.net",12],["gamearter.com",13],["dvdgayonline.com",14],["investnewsbrazil.com",15],["subsvip.com",16],["grtjobs.in",17],["call-bomber.info",17],["kajernews.com",17],["vyaapaarguru.in",17],["junkyponk.com",18],["healthfirstweb.com",18],["vocalley.com",18],["yogablogfit.com",18],["howifx.com",18],["en.financerites.com",18],["mythvista.com",18],["livenewsflix.com",18],["cureclues.com",18],["apekite.com",18],["fansonlinehub.com",19],["hotmediahub.com",19],["terabox.fun",19],["teralink.me",19],["terashare.me",19],["teraearn.com",19],["rawlazy.si",20],["appsbull.com",21],["diudemy.com",21],["maqal360.com",21],["intercelestial.com",22],["takez.co",[23,24]],["webzeni.com",25],["whatgame.xyz",26],["mooonten.com",26],["msic.site",26],["fx-22.com",26],["gold-24.net",26],["forexrw7.com",26],["rfiql.com",27],["gujjukhabar.in",27],["smartfeecalculator.com",27],["djxmaza.in",27],["thecubexguide.com",27],["jytechs.in",27],["go.shortnest.com",28],["uploadking.net",29],["adblockeronstape.*",30],["adblockplustape.*",30],["adblocktape.*",30],["advertisertape.com",30],["antiadtape.*",30],["gettapeads.com",30],["noblocktape.*",30],["shavetape.*",30],["stapadblockuser.*",30],["strcloud.*",30],["streamadblockplus.*",30],["streamnoads.com",30],["streamta.*",30],["streamtape.*",30],["streamtapeadblockuser.*",30],["strtape.*",30],["strtapeadblock.*",30],["tapeadsenjoyer.com",30],["tapeadvertisement.com",30],["tapeantiads.com",30],["tapeblocker.com",30],["tapelovesads.org",30],["tapenoads.com",30],["tapewithadblock.org",30],["watchadsontape.com",30],["adblockeronstreamtape.*",30],["top.gg",31],["emulatorgames.net",32],["actionviewphotography.com",33],["exporntoons.net",33],["mat6tube.*",33],["noodlemagazine.com",33],["whatisareverseauction.com",33],["sibtok.com",33],["ukdevilz.com",33],["tyler-brown.com",33],["aapks.com",34],["codingnepalweb.com",35],["maxstream.video",36],["embed.nana2play.com",37],["mgnet.xyz",38],["1bitspace.com",39],["ytsubme.com",40],["thecustomrom.com",41],["quizack.com",42],["media.cms.nova.cz",43],["yhocdata.com",44],["surfline.com",45],["downloadr.in",46],["downloadudemy.com",46],["xubster.com",47],["uploadcloud.pro",48],["apkmody.*",49],["romsgames.net",50],["romsget.io",50],["sub1s.com",51],["mboost.me",52],["atresplayer.com",53],["writedroid.*",54],["dktechnicalmate.com",55],["indiakablog.com",55],["recipahi.com",55],["20sfvn.com",56],["hi888.today",56],["oto5s.com",56],["w88.limo",56],["tralhasvarias.blogspot.com",57],["empire-anime.*",58],["empire-streaming.*",58],["empire-anime.com",58],["empire-streamz.fr",58],["empire-stream.*",58],["thestar.com",59],["present.rssing.com",60],["infidrive.net",61],["sethphat.com",62],["theapkfolder.com",63],["dfast.app",63],["upapk.io",64],["updown.link",65],["thehouseofportable.com",66],["an1.com",67],["voltupload.com",68],["pimpandhost.com",69],["101soundboards.com",70],["lewdzone.com",71],["youku.com",72],["transfaze.com",73],["fastt.gg",74],["cyclingnews.com",75],["abcya.com",76],["watcho.com",77],["dailypost.co.uk",[78,79]],["dailystar.co.uk",[78,79]],["mirror.co.uk",[78,79]],["neurotray.com",80],["theonion.com",[81,82]],["20min.ch",83],["13tv.co.il",[84,85]],["tierlists.com",86],["wunderground.com",[87,88]],["standard.co.uk",[89,90]],["gameplayneo.com",91],["www.youtube.com",92]]);
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
