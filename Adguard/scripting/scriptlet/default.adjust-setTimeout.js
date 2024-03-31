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
const uBOL_adjustSetTimeout = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["","10000"],["_0x","*"],["grecaptcha.ready","*"],["redirect","4000"],[],["dlw","40000"],["seconds"],["ez","*","0.02"],["/.?/","4000"],["run"],["disabled"],["","","0"],["tick"],["","","0.02"],["CountBack","990"],["notification_state","12000"],["/SplashScreen|BannerAd/"],["countdown","1000","0.02"],["/.?/","","0.02"],["contador","*","0.001"],["","10000","0"],["startDownload","8000"],["countdown","*"],["downloadBtn","*"],["getlink","*","0.001"],["gotoo","*"],["value","*"],["/\\$\\('|ai-close/","*","0.001"],["div_form"],["","*","0.1"],["shortenbl"],["enbll"],["downloadbtn"],["counter"],["readyToVote","12000"],["","7000","0"],["download","1100"],["countDown"],["countdown","10000"],["animation"],[".fadeIn()","3000"],["load_ads"],["_0x","15000"],["location.href","8000"],["aTagChange","12000"],["window.location.href","*"],["isScrexed","5000"],["() => n(t)","*"],["st2"],["subentry","4000"],["/__ez|window.location.href/","*"],["adFreePopup","15000","0.02"],["countdown"],["remaining","1000","0.001"],["show","4000"],["download_loading","*"],["submit","5000"],["fa-unlock","3000"],["setinteracted","2000"],["waiting","5000"],["[native code]","5000"],["adBlockerCountdown","*","0.02"],["shortConfig","15000"],["redirectpage","13500","0.001"],["countdown","","0.02"],["decodeURL","*"],["(!1)","*"],["bFired","*"],["setC"],["-1","*","0.001"],["total","1000","0.001"],["countdown","*","0.001"],["tick","1000","0.001"],["/outboundLink/"],["isPeriodic","*"],["/EzoIvent|TDELAY/","5000"],["b()","3000"],["ads","*"],["readyPromise","5000","0.001"]];

const hostnamesMap = new Map([["spiele.bild.de",0],["gamefront.com",0],["moviepilot.de",1],["imgadult.com",3],["imgdrive.net",3],["imgtaxi.com",3],["imgwallet.com",3],["zupload.me",4],["techmyntra.net",4],["globalbesthosting.com",4],["srt.am",4],["themeslide.com",4],["katfile.com",4],["hubfiles.ws",4],["ausfile.com",4],["siriusfiles.com",4],["juegoviejo.com",4],["4share.vn",4],["lnk2.cc",4],["modagamers.com",4],["sofwaremania.blogspot.com",4],["memoriadatv.com",4],["dosya.co",4],["clipartmax.com",4],["jptorrent.org",4],["quizlet.com",4],["sourceforge.net",4],["redload.co",4],["juegos.eleconomista.es",4],["1fichier.com",5],["indi-share.com",6],["megaupto.com",6],["onuploads.com",6],["playretrogames.com",7],["gsm1x.xyz",9],["top1iq.com",9],["youku.com",11],["acessarlink.online",11],["subdowns.com",11],["files.im",12],["dokumen.tips",13],["file.magiclen.org",13],["so1.asia",13],["streamvid.net",13],["lewdzone.com",14],["onlyhgames.com",14],["direct-link.net",15],["link-to.net",15],["gamearter.com",16],["dvdgayonline.com",17],["tudogamesbr.com",18],["investnewsbrazil.com",19],["subsvip.com",20],["updown.link",21],["an1.com",22],["enit.in",23],["junkyponk.com",24],["healthfirstweb.com",24],["vocalley.com",24],["yogablogfit.com",24],["howifx.com",24],["en.financerites.com",24],["mythvista.com",24],["gyanitheme.com",25],["hipsonyc.com",25],["fansonlinehub.com",26],["hotmediahub.com",26],["terabox.fun",26],["teralink.me",26],["terashare.me",26],["teraearn.com",26],["rawlazy.si",27],["appsbull.com",28],["diudemy.com",28],["maqal360.com",28],["intercelestial.com",29],["takez.co",[30,31]],["uploadking.net",32],["gettapeads.com",33],["streamnoads.com",33],["tapeadsenjoyer.com",33],["tapeantiads.com",33],["tapeblocker.com",33],["tapelovesads.org",33],["tapenoads.com",33],["tapewithadblock.org",33],["top.gg",34],["emulatorgames.net",35],["actionviewphotography.com",36],["exporntoons.net",36],["mat6tube.com",36],["noodlemagazine.com",36],["tyler-brown.com",36],["ukdevilz.com",36],["aapks.com",37],["mcrypto.club",38],["codingnepalweb.com",39],["maxstream.video",40],["maxlinks.online",40],["embed.nana2play.com",41],["mgnet.xyz",42],["1bitspace.com",43],["ytsubme.com",44],["thecustomrom.com",45],["quizack.com",46],["media.cms.nova.cz",47],["premiumebooks.xyz",[48,49]],["yhocdata.com",50],["surfline.com",51],["downloadr.in",52],["downloadudemy.com",52],["xubster.com",53],["uploadcloud.pro",54],["romsgames.net",56],["romsget.io",56],["sub1s.com",57],["mboost.me",58],["bloggertheme.xyz",59],["atresplayer.com",60],["redketchup.io",61],["dktechnicalmate.com",63],["indiakablog.com",63],["recipahi.com",63],["20sfvn.com",64],["hi888.today",64],["oto5s.com",64],["w88.limo",64],["tralhasvarias.blogspot.com",65],["thestar.com",67],["present.rssing.com",68],["infidrive.net",69],["sethphat.com",70],["theapkfolder.com",71],["dfast.app",71],["upapk.io",72],["cyclingnews.com",73],["watcho.com",74],["neurotray.com",75],["theonion.com",[76,77]],["20min.ch",78]]);

const entitiesMap = new Map([["slreamplay",2],["pouvideo",2],["povvideo",2],["povw1deo",2],["povwideo",2],["powv1deo",2],["powvibeo",2],["powvideo",2],["powvldeo",2],["bdupload",4],["desiupload",4],["9xupload",4],["grantorrent",4],["grantorrents",4],["hdfull",4],["pelispedia",4],["uptomega",6],["imgrock",8],["mixdrop",10],["mixdrp",10],["zeefiles",12],["financerites",23],["adblockeronstape",33],["adblockplustape",33],["adblocktape",33],["antiadtape",33],["noblocktape",33],["shavetape",33],["stapadblockuser",33],["strcloud",33],["streamadblockplus",33],["streamta",33],["streamtape",33],["streamtapeadblockuser",33],["strtape",33],["strtapeadblock",33],["adblockeronstreamtape",33],["apkmody",55],["writedroid",62],["empire-stream",66],["empire-streaming",66]]);

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
    try { adjustSetTimeout(...argsList[i]); }
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
    return uBOL_adjustSetTimeout();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_adjustSetTimeout = cloneInto([
            [ '(', uBOL_adjustSetTimeout.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_adjustSetTimeout);
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
    delete page.uBOL_adjustSetTimeout;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
