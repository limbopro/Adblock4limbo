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

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["","10000"],["_0x","*"],["grecaptcha.ready","*"],["tick","1000"],["redirect","4000"],[],["dlw","40000"],["seconds"],["ez","*","0.02"],["/.?/","4000"],["run"],["disabled"],["","","0"],["tick"],["","","0.02"],["CountBack","990"],["notification_state","12000"],["/SplashScreen|BannerAd/"],["startDownload","8000"],["countdown","1000","0.02"],["/.?/","","0.02"],["contador","*","0.001"],["","10000","0"],["countdown","*"],["downloadBtn","*"],["getlink","*","0.001"],["gotoo","*"],["value","*"],["/\\$\\('|ai-close/","*","0.001"],["div_form"],["","*","0.1"],["shortenbl"],["enbll"],["downloadbtn"],["counter"],["readyToVote","12000"],["","7000","0"],["download","1100"],["countDown"],["countdown","10000"],["animation"],[".fadeIn()","3000"],["load_ads"],["adFreePopup","15000","0.02"],["_0x","15000"],["location.href","8000"],["aTagChange","12000"],["window.location.href","*"],["isScrexed","5000"],["() => n(t)","*"],["st2"],["subentry","4000"],["/__ez|window.location.href/","*"],["countdown"],["location.href","18000"],["remaining","1000","0.001"],["show","4000"],["download_loading","*"],["submit","5000"],["fa-unlock","3000"],["setinteracted","2000"],["waiting","5000"],["document[_0x","*"],["[native code]","5000"],["adBlockerCountdown","*","0.02"],["shortConfig","15000"],["redirectpage","13500","0.001"],["countdown","","0.02"],["decodeURL","*"],["(!1)","*"],["bFired","*"],["setC"],["-1","*","0.001"],["total","1000","0.001"],["countdown","*","0.001"],["tick","1000","0.001"],["/outboundLink/"],["isPeriodic","*"],["/EzoIvent|TDELAY/","5000"],["b()","3000"],["ads","*"]];

const hostnamesMap = new Map([["spiele.bild.de",0],["gamefront.com",0],["moviepilot.de",1],["uploadrar.com",3],["imgadult.com",4],["imgdrive.net",4],["imgtaxi.com",4],["imgwallet.com",4],["zupload.me",5],["techmyntra.net",5],["globalbesthosting.com",5],["srt.am",5],["themeslide.com",5],["katfile.com",5],["hubfiles.ws",5],["ausfile.com",5],["siriusfiles.com",5],["juegoviejo.com",5],["uploadever.com",5],["4share.vn",5],["lnk2.cc",5],["modagamers.com",5],["sofwaremania.blogspot.com",5],["memoriadatv.com",5],["uploadraja.com",5],["dosya.co",5],["clipartmax.com",5],["jptorrent.org",5],["quizlet.com",5],["sourceforge.net",5],["redload.co",5],["juegos.eleconomista.es",5],["1fichier.com",6],["indi-share.com",7],["megaupto.com",7],["uploadflix.org",7],["onuploads.com",7],["playretrogames.com",8],["gsm1x.xyz",10],["top1iq.com",10],["youku.com",12],["acessarlink.online",12],["subdowns.com",12],["files.im",13],["dokumen.tips",14],["file.magiclen.org",14],["so1.asia",14],["streamvid.net",14],["lewdzone.com",15],["onlyhgames.com",15],["direct-link.net",16],["link-to.net",16],["gamearter.com",17],["updown.link",18],["dvdgayonline.com",19],["tudogamesbr.com",20],["investnewsbrazil.com",21],["subsvip.com",22],["an1.com",23],["enit.in",24],["junkyponk.com",25],["healthfirstweb.com",25],["vocalley.com",25],["yogablogfit.com",25],["howifx.com",25],["en.financerites.com",25],["gyanitheme.com",26],["hipsonyc.com",26],["fansonlinehub.com",27],["hotmediahub.com",27],["terabox.fun",27],["teralink.me",27],["terashare.me",27],["teraearn.com",27],["rawlazy.si",28],["appsbull.com",29],["diudemy.com",29],["maqal360.com",29],["intercelestial.com",30],["takez.co",[31,32]],["uploadking.net",33],["adblockplustape.com",34],["streamnoads.com",34],["tapeantiads.com",34],["tapeblocker.com",34],["tapenoads.com",34],["tapewithadblock.org",34],["top.gg",35],["emulatorgames.net",36],["actionviewphotography.com",37],["exporntoons.net",37],["mat6tube.com",37],["noodlemagazine.com",37],["tyler-brown.com",37],["ukdevilz.com",37],["aapks.com",38],["mcrypto.club",39],["codingnepalweb.com",40],["maxstream.video",41],["maxlinks.online",41],["embed.nana2play.com",42],["surfline.com",43],["mgnet.xyz",44],["1bitspace.com",45],["ytsubme.com",46],["thecustomrom.com",47],["quizack.com",48],["media.cms.nova.cz",49],["premiumebooks.xyz",[50,51]],["yhocdata.com",52],["downloadr.in",53],["downloadudemy.com",53],["icongnghe.com",54],["xubster.com",55],["uploadcloud.pro",56],["romsgames.net",58],["romsget.io",58],["sub1s.com",59],["mboost.me",60],["bloggertheme.xyz",61],["hashhackers.com",62],["katdrive.net",62],["newsongs.co.in",62],["atresplayer.com",63],["redketchup.io",64],["dktechnicalmate.com",66],["20sfvn.com",67],["hi888.today",67],["oto5s.com",67],["w88.limo",67],["tralhasvarias.blogspot.com",68],["thestar.com",70],["present.rssing.com",71],["infidrive.net",72],["sethphat.com",73],["theapkfolder.com",74],["dfast.app",74],["upapk.io",75],["cyclingnews.com",76],["watcho.com",77],["neurotray.com",78],["theonion.com",[79,80]]]);

const entitiesMap = new Map([["slreamplay",2],["pouvideo",2],["povvideo",2],["povw1deo",2],["povwideo",2],["powv1deo",2],["powvibeo",2],["powvideo",2],["powvldeo",2],["bdupload",5],["desiupload",5],["9xupload",5],["grantorrent",5],["grantorrents",5],["hdfull",5],["pelispedia",5],["uptomega",7],["imgrock",9],["mixdrop",11],["mixdrp",11],["zeefiles",13],["financerites",24],["adblockeronstape",34],["adblocktape",34],["antiadtape",34],["noblocktape",34],["shavetape",34],["stapadblockuser",34],["strcloud",34],["streamadblockplus",34],["streamta",34],["streamtape",34],["streamtapeadblockuser",34],["strtape",34],["strtapeadblock",34],["adblockeronstreamtape",34],["apkmody",57],["writedroid",65],["empire-stream",69],["empire-streaming",69]]);

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
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
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
        uboLog(...args) {
            if ( scriptletGlobals.has('canDebug') === false ) { return; }
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
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
                    re: new this.RegExp(pattern.replace(
                        /[.*+?^${}()|[\]\\]/g, '\\$&'),
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
                const reStr = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
    scriptletGlobals.set('safeSelf', safe);
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
