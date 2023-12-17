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

const argsList = [["","10000"],["_0x","*"],["grecaptcha.ready","*"],["tick","1000"],["redirect","4000"],[],["dlw","40000"],["seconds"],["ez","*","0.02"],["/.?/","4000"],["run"],["disabled"],["","","0"],["tick"],["","","0.02"],["CountBack","990"],["notification_state","12000"],["/SplashScreen|BannerAd/"],["startDownload","8000"],["countdown","1000","0.02"],["/.?/","","0.02"],["contador","*","0.001"],["","10000","0"],["downloadbtn"],["counter"],["readyToVote","12000"],["","7000","0"],["download","1100"],["countDown"],["countdown","10000"],["animation"],[".fadeIn()","3000"],["load_ads"],["adFreePopup","15000","0.02"],["_0x","15000"],["location.href","8000"],["aTagChange","12000"],["window.location.href","*"],["downloadBtn","*"],["getlink","*","0.001"],["isScrexed","5000"],["() => n(t)","*"],["st2"],["subentry","4000"],["/__ez|window.location.href/","*"],["countdown"],["location.href","18000"],["show","4000"],["download_loading","*"],["submit","5000"],["fa-unlock","3000"],["setinteracted","2000"],["waiting","5000"],["document[_0x","*"],["[native code]","5000"],["shortenbl"],["enbll"],["adBlockerCountdown","*","0.02"],["value","*"],["shortConfig","15000"],["gotoo","*"],["","30000","0.02"],["redirectpage","13500"],["countdown","","0.02"],["decodeURL","*"],["(!1)","*"],["","*","0.1"],["bFired","*"],["div_form"],["setC"],["-1","*","0.001"],["/outboundLink/"],["isPeriodic","*"],["/EzoIvent|TDELAY/","5000"],["b()","3000"],["ads","*"]];

const hostnamesMap = new Map([["spiele.bild.de",0],["gamefront.com",0],["moviepilot.de",1],["uploadrar.com",3],["imgadult.com",4],["imgdrive.net",4],["imgtaxi.com",4],["imgwallet.com",4],["zupload.me",5],["techmyntra.net",5],["globalbesthosting.com",5],["srt.am",5],["themeslide.com",5],["katfile.com",5],["hubfiles.ws",5],["ausfile.com",5],["siriusfiles.com",5],["juegoviejo.com",5],["uploadever.com",5],["4share.vn",5],["lnk2.cc",5],["modagamers.com",5],["sofwaremania.blogspot.com",5],["memoriadatv.com",5],["uploadraja.com",5],["dosya.co",5],["clipartmax.com",5],["jptorrent.org",5],["quizlet.com",5],["sourceforge.net",5],["redload.co",5],["juegos.eleconomista.es",5],["1fichier.com",6],["indi-share.com",7],["megaupto.com",7],["uploadflix.org",7],["onuploads.com",7],["playretrogames.com",8],["gsm1x.xyz",10],["top1iq.com",10],["youku.com",12],["acessarlink.online",12],["subdowns.com",12],["files.im",13],["dokumen.tips",14],["file.magiclen.org",14],["so1.asia",14],["streamvid.net",14],["lewdzone.com",15],["onlyhgames.com",15],["direct-link.net",16],["link-to.net",16],["gamearter.com",17],["updown.link",18],["dvdgayonline.com",19],["tudogamesbr.com",20],["investnewsbrazil.com",21],["subsvip.com",22],["uploadking.net",23],["adblockplustape.com",24],["streamnoads.com",24],["tapeantiads.com",24],["tapeblocker.com",24],["tapenoads.com",24],["tapewithadblock.org",24],["top.gg",25],["emulatorgames.net",26],["actionviewphotography.com",27],["exporntoons.net",27],["mat6tube.com",27],["noodlemagazine.com",27],["tyler-brown.com",27],["ukdevilz.com",27],["aapks.com",28],["mcrypto.club",29],["codingnepalweb.com",30],["maxstream.video",31],["embed.nana2play.com",32],["surfline.com",33],["mgnet.xyz",34],["1bitspace.com",35],["ytsubme.com",36],["thecustomrom.com",37],["enit.in",38],["healthfirstweb.com",39],["vocalley.com",39],["yogablogfit.com",39],["howifx.com",39],["en.financerites.com",39],["quizack.com",40],["media.cms.nova.cz",41],["premiumebooks.xyz",[42,43]],["yhocdata.com",44],["downloadr.in",45],["downloadudemy.com",45],["icongnghe.com",46],["uploadcloud.pro",47],["romsgames.net",49],["romsget.io",49],["sub1s.com",50],["mboost.me",51],["bloggertheme.xyz",52],["hashhackers.com",53],["katdrive.net",53],["newsongs.co.in",53],["atresplayer.com",54],["takez.co",[55,56]],["redketchup.io",57],["fansonlinehub.com",58],["hotmediahub.com",58],["terabox.fun",58],["teralink.me",58],["terashare.me",58],["teraearn.com",58],["gyanitheme.com",[60,61]],["dktechnicalmate.com",62],["20sfvn.com",63],["hi888.today",63],["oto5s.com",63],["w88.limo",63],["tralhasvarias.blogspot.com",64],["intercelestial.com",66],["thestar.com",67],["appsbull.com",68],["diudemy.com",68],["maqal360.com",68],["present.rssing.com",69],["infidrive.net",70],["cyclingnews.com",71],["watcho.com",72],["neurotray.com",73],["theonion.com",[74,75]]]);

const entitiesMap = new Map([["slreamplay",2],["pouvideo",2],["povvideo",2],["povw1deo",2],["povwideo",2],["powv1deo",2],["powvibeo",2],["powvideo",2],["powvldeo",2],["bdupload",5],["desiupload",5],["9xupload",5],["grantorrent",5],["grantorrents",5],["hdfull",5],["pelispedia",5],["uptomega",7],["imgrock",9],["mixdrop",11],["mixdrp",11],["zeefiles",13],["adblockeronstape",24],["adblocktape",24],["antiadtape",24],["noblocktape",24],["shavetape",24],["stapadblockuser",24],["strcloud",24],["streamadblockplus",24],["streamta",24],["streamtape",24],["streamtapeadblockuser",24],["strtape",24],["strtapeadblock",24],["adblockeronstreamtape",24],["financerites",38],["apkmody",48],["writedroid",59],["empire-stream",65],["empire-streaming",65]]);

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
