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

const argsList = [["","10000"],["_0x","*"],["grecaptcha.ready","*"],["tick","1000"],["redirect","4000"],[],["dlw","40000"],["timeUpdater","","0"],["seconds"],["ez","*","0.02"],["/.?/","4000"],["run"],["disabled"],["","","0"],["tick"],["","","0.02"],["CountBack","990"],["notification_state","12000"],["getlink","*"],["/SplashScreen|BannerAd/"],["startDownload","8000"],["countdown","1000","0.02"],["/.?/","","0.02"],["","10000","0"],["downloadbtn"],["counter"],["readyToVote","12000"],["","7000","0"],["download","1100"],["countDown"],["countdown","10000"],["animation"],[".fadeIn()","3000"],["load_ads"],["adFreePopup","15000","0.02"],["_0x","15000"],["location.href","8000"],["aTagChange","12000"],["window.location.href","*"],["downloadBtn","*"],["getlink","*","0.02"],["isScrexed","5000"],["() => n(t)","*"],["st2"],["subentry","4000"],["/__ez|window.location.href/","*"],["countdown"],["location.href","18000"],["show","4000"],["download_loading","*"],["submit","5000"],["fa-unlock","3000"],["setinteracted","2000"],["waiting","5000"],["document[_0x","*"],["[native code]","5000"],["shortenbl"],["enbll"],["adBlockerCountdown","*","0.02"],["value","*"],["shortConfig","15000"],["gotoo","*"],["","30000","0.02"],["redirectpage","13500"],["countdown","","0.02"],["decodeURL","*"],["(!1)","*"],["","*","0.1"],["bFired","*"],["div_form"],["setC"],["/outboundLink/"],["isPeriodic","*"],["/EzoIvent|TDELAY/","5000"],["b()","3000"],["ads","*"]];

const hostnamesMap = new Map([["spiele.bild.de",0],["gamefront.com",0],["moviepilot.de",1],["uploadrar.com",3],["imgadult.com",4],["imgdrive.net",4],["imgtaxi.com",4],["imgwallet.com",4],["zupload.me",5],["techmyntra.net",5],["globalbesthosting.com",5],["srt.am",5],["themeslide.com",5],["katfile.com",5],["hubfiles.ws",5],["ausfile.com",5],["siriusfiles.com",5],["juegoviejo.com",5],["uploadever.com",5],["4share.vn",5],["lnk2.cc",5],["modagamers.com",5],["sofwaremania.blogspot.com",5],["memoriadatv.com",5],["uploadraja.com",5],["dosya.co",5],["clipartmax.com",5],["jptorrent.org",5],["quizlet.com",5],["sourceforge.net",5],["redload.co",5],["juegos.eleconomista.es",5],["1fichier.com",6],["movie4k.dev",7],["indi-share.com",8],["megaupto.com",8],["uploadflix.org",8],["onuploads.com",8],["playretrogames.com",9],["gsm1x.xyz",11],["top1iq.com",11],["youku.com",13],["acessarlink.online",13],["subdowns.com",13],["files.im",14],["dokumen.tips",15],["file.magiclen.org",15],["so1.asia",15],["streamvid.net",15],["lewdzone.com",16],["onlyhgames.com",16],["direct-link.net",17],["link-to.net",17],["howifx.com",[18,40]],["yogablogfit.com",[18,40]],["gamearter.com",19],["updown.link",20],["dvdgayonline.com",21],["tudogamesbr.com",22],["subsvip.com",23],["uploadking.net",24],["adblockplustape.com",25],["streamnoads.com",25],["tapeblocker.com",25],["tapenoads.com",25],["tapewithadblock.org",25],["top.gg",26],["emulatorgames.net",27],["actionviewphotography.com",28],["exporntoons.net",28],["mat6tube.com",28],["noodlemagazine.com",28],["tyler-brown.com",28],["ukdevilz.com",28],["aapks.com",29],["123lnk.xyz",29],["mcrypto.club",30],["codingnepalweb.com",31],["maxstream.video",32],["embed.nana2play.com",33],["surfline.com",34],["mgnet.xyz",35],["1bitspace.com",36],["ytsubme.com",37],["thecustomrom.com",38],["enit.in",39],["healthfirstweb.com",40],["vocalley.com",40],["en.financerites.com",40],["quizack.com",41],["media.cms.nova.cz",42],["premiumebooks.xyz",[43,44]],["yhocdata.com",45],["downloadr.in",46],["downloadudemy.com",46],["icongnghe.com",47],["uploadcloud.pro",48],["romsgames.net",50],["romsget.io",50],["sub1s.com",51],["mboost.me",52],["bloggertheme.xyz",53],["hashhackers.com",54],["katdrive.net",54],["newsongs.co.in",54],["atresplayer.com",55],["takez.co",[56,57]],["redketchup.io",58],["fansonlinehub.com",59],["hotmediahub.com",59],["terabox.fun",59],["gyanitheme.com",[61,62]],["dktechnicalmate.com",63],["20sfvn.com",64],["hi888.today",64],["oto5s.com",64],["w88.limo",64],["tralhasvarias.blogspot.com",65],["intercelestial.com",67],["thestar.com",68],["appsbull.com",69],["diudemy.com",69],["maqal360.com",69],["present.rssing.com",70],["cyclingnews.com",71],["watcho.com",72],["neurotray.com",73],["theonion.com",[74,75]]]);

const entitiesMap = new Map([["slreamplay",2],["pouvideo",2],["povvideo",2],["povw1deo",2],["povwideo",2],["powv1deo",2],["powvibeo",2],["powvideo",2],["powvldeo",2],["bdupload",5],["desiupload",5],["9xupload",5],["grantorrent",5],["grantorrents",5],["hdfull",5],["pelispedia",5],["uptomega",8],["imgrock",10],["mixdrop",12],["mixdrp",12],["zeefiles",14],["adblockeronstape",25],["adblocktape",25],["antiadtape",25],["noblocktape",25],["shavetape",25],["stapadblockuser",25],["strcloud",25],["streamadblockplus",25],["streamta",25],["streamtape",25],["streamtapeadblockuser",25],["strtape",25],["strtapeadblock",25],["adblockeronstreamtape",25],["financerites",39],["apkmody",49],["writedroid",60],["empire-stream",66],["empire-streaming",66]]);

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
        'Object_defineProperty': Object.defineProperty.bind(Object),
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
                    pattern,
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            return {
                pattern,
                re: new this.RegExp(pattern.replace(
                    /[.*+?^${}()|[\]\\]/g, '\\$&'),
                    options.flags
                ),
                expect,
            };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            return this.RegExp_test.call(details.re, haystack) === details.expect;
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
            return Object.fromEntries(entries);
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
