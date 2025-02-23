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
const uBOL_adjustSetTimeout = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["","10000"],["_0x","*"],["grecaptcha.ready","*"],["redirect","4000"],[],["dlw","40000"],["seconds"],["ez","*","0.02"],["/.?/","4000"],["run"],["disabled"],["","","0"],["tick"],["","","0.02"],["notification_state","12000"],["/SplashScreen|BannerAd/"],["countdown","1000","0.02"],["/.?/","","0.02"],["contador","*","0.001"],["","10000","0"],["downloadBtn","*"],["getlink","*","0.001"],["gotoo","*"],["value","*"],["/\\$\\('|ai-close/","*","0.001"],["div_form"],["","*","0.1"],["shortenbl"],["enbll"],["","1000"],["getElementById","*","0.001"],["downloadbtn"],["counter"],["readyToVote","12000"],["","7000","0"],["download","1100"],["countDown"],["countdown","10000"],["animation"],[".fadeIn()","3000"],["load_ads"],["_0x","15000"],["location.href","8000"],["aTagChange","12000"],["window.location.href","*"],["isScrexed","5000"],["() => n(t)","*"],["/__ez|window.location.href/","*"],["adFreePopup","15000","0.02"],["countdown"],["remaining","1000","0.001"],["show","4000"],["download_loading","*"],["submit","5000"],["fa-unlock","3000"],["setinteracted","2000"],["[native code]","5000"],["shortConfig","15000"],["redirectpage","13500","0.001"],["countdown","","0.02"],["decodeURL","*"],["(!1)","*"],["bFired","*"],["setC"],["-1","*","0.001"],["total","1000","0.001"],["countdown","*","0.001"],["tick","1000","0.001"],["startDownload","8000"],["0x","*"],["countdown","*"],["download","1000","0.001"],["count"],["","10000","0.001"],["CountBack","990"],["/outboundLink/"],["t++","500"],["isPeriodic","*"],["native code","15000","0.001"],["(null)","5000","0.001"],["/EzoIvent|TDELAY/","5000"],["b()","3000"],["ads","*"],["readyPromise","5000","0.001"],["taboola timeout","*","0.001"],["clearInterval(run)","5000","0.001"],["/TDELAY|EzoIvent/","*","0.001"],["isPeriodic","2200","0.001"],["isPeriodic","2300","0.001"],["[native code]","3000","0.001"],["i||(e(),i=!0)","2500","0.001"],["adConfig","*","0.001"],["[native code]","17000","0.001"]];

const hostnamesMap = new Map([["spiele.bild.de",0],["gamefront.com",0],["moviepilot.de",1],["imgadult.com",3],["imgdrive.net",3],["imgtaxi.com",3],["imgwallet.com",3],["techmyntra.net",4],["globalbesthosting.com",4],["srt.am",4],["themeslide.com",4],["hubfiles.ws",4],["ausfile.com",4],["siriusfiles.com",4],["juegoviejo.com",4],["4share.vn",4],["lnk2.cc",4],["modagamers.com",4],["sofwaremania.blogspot.com",4],["memoriadatv.com",4],["dosya.co",4],["clipartmax.com",4],["jptorrent.org",4],["quizlet.com",4],["sourceforge.net",4],["juegos.eleconomista.es",4],["katfile.com",4],["1fichier.com",5],["indi-share.com",6],["megaupto.com",6],["onuploads.com",6],["playretrogames.com",7],["gsm1x.xyz",9],["top1iq.com",9],["youku.com",11],["files.im",12],["dokumen.tips",13],["file.magiclen.org",13],["so1.asia",13],["streamvid.net",13],["direct-link.net",14],["link-to.net",14],["gamearter.com",15],["dvdgayonline.com",16],["tudogamesbr.com",17],["investnewsbrazil.com",18],["subsvip.com",19],["enit.in",20],["junkyponk.com",21],["healthfirstweb.com",21],["vocalley.com",21],["yogablogfit.com",21],["howifx.com",21],["en.financerites.com",21],["mythvista.com",21],["livenewsflix.com",21],["cureclues.com",21],["apekite.com",21],["hipsonyc.com",22],["theforyou.in",22],["gyanitheme.com",22],["hostadviser.net",22],["bloggingaro.com",22],["fansonlinehub.com",23],["hotmediahub.com",23],["terabox.fun",23],["teralink.me",23],["terashare.me",23],["teraearn.com",23],["rawlazy.si",24],["appsbull.com",25],["diudemy.com",25],["maqal360.com",25],["intercelestial.com",26],["takez.co",[27,28]],["webzeni.com",29],["mooonten.com",30],["msic.site",30],["fx-22.com",30],["gold-24.net",30],["forexrw7.com",30],["uploadking.net",31],["advertisertape.com",32],["gettapeads.com",32],["streamnoads.com",32],["tapeadsenjoyer.com",32],["tapeadvertisement.com",32],["tapeantiads.com",32],["tapeblocker.com",32],["tapelovesads.org",32],["tapenoads.com",32],["tapewithadblock.org",32],["watchadsontape.com",32],["top.gg",33],["emulatorgames.net",34],["actionviewphotography.com",35],["exporntoons.net",35],["noodlemagazine.com",35],["whatisareverseauction.com",35],["sibtok.com",35],["ukdevilz.com",35],["tyler-brown.com",35],["aapks.com",36],["mcrypto.club",37],["codingnepalweb.com",38],["maxstream.video",39],["embed.nana2play.com",40],["mgnet.xyz",41],["1bitspace.com",42],["ytsubme.com",43],["thecustomrom.com",44],["quizack.com",45],["media.cms.nova.cz",46],["yhocdata.com",47],["surfline.com",48],["downloadr.in",49],["downloadudemy.com",49],["xubster.com",50],["uploadcloud.pro",51],["romsgames.net",53],["romsget.io",53],["sub1s.com",54],["mboost.me",55],["atresplayer.com",56],["dktechnicalmate.com",58],["indiakablog.com",58],["recipahi.com",58],["20sfvn.com",59],["hi888.today",59],["oto5s.com",59],["w88.limo",59],["tralhasvarias.blogspot.com",60],["thestar.com",62],["present.rssing.com",63],["infidrive.net",64],["sethphat.com",65],["theapkfolder.com",66],["dfast.app",66],["upapk.io",67],["updown.link",68],["thehouseofportable.com",69],["an1.com",70],["voltupload.com",71],["pimpandhost.com",72],["101soundboards.com",73],["lewdzone.com",74],["cyclingnews.com",75],["abcya.com",76],["watcho.com",77],["dailypost.co.uk",[78,79]],["dailystar.co.uk",[78,79]],["mirror.co.uk",[78,79]],["neurotray.com",80],["theonion.com",[81,82]],["20min.ch",83],["13tv.co.il",[84,85]],["tierlists.com",86],["wunderground.com",[87,88]],["standard.co.uk",[89,90]],["gameplayneo.com",91],["www.youtube.com",92]]);

const entitiesMap = new Map([["slreamplay",2],["pouvideo",2],["povvideo",2],["povw1deo",2],["povwideo",2],["powv1deo",2],["powvibeo",2],["powvideo",2],["powvldeo",2],["bdupload",4],["9xupload",4],["grantorrent",4],["grantorrents",4],["hdfull",4],["pelispedia",4],["uptomega",6],["imgrock",8],["mixdrop",10],["mixdrp",10],["zeefiles",12],["financerites",20],["adblockeronstape",32],["adblockplustape",32],["adblocktape",32],["antiadtape",32],["noblocktape",32],["shavetape",32],["stapadblockuser",32],["strcloud",32],["streamadblockplus",32],["streamta",32],["streamtape",32],["streamtapeadblockuser",32],["strtape",32],["strtapeadblock",32],["adblockeronstreamtape",32],["mat6tube",35],["apkmody",52],["writedroid",57],["empire-anime",61],["empire-stream",61],["empire-streaming",61],["empire-streamz",61]]);

const exceptionsMap = new Map([]);

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
    try { adjustSetTimeout(...argsList[i]); }
    catch { }
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_adjustSetTimeout();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
