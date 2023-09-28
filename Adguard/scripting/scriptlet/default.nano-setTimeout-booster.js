/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
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
const uBOL_nanoSetTimeoutBooster = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["","10000"],["_0x","*"],["grecaptcha.ready","*"],["redirect","4000"],[],["dlw","40000"],["timeUpdater","","0"],["seconds"],["ez","*","0.02"],["/.?/","4000"],["run"],["disabled"],["","","0"],["tick"],["","","0.02"],["CountBack","990"],["notification_state","12000"],["getlink","*"],["/SplashScreen|BannerAd/"],["startDownload","8000"],["countdown","1000","0.02"],["/.?/","","0.02"],["","10000","0"],["downloadbtn"],["counter"],["readyToVote","12000"],["","7000","0"],["timer--"],["download","1100"],["countDown"],["countdown","10000"],["animation"],[".fadeIn()","3000"],["load_ads"],["_0x","15000"],["location.href","8000"],["aTagChange","12000"],["window.location.href","*"],["isScrexed","5000"],["() => n(t)","*"],["st2"],["subentry","4000"],["/__ez|window.location.href/","*"],["countdown"],["location.href","18000"],["show","4000"],["download_loading","*"],["submit","5000"],["fa-unlock","3000"],["setinteracted","2000"],["waiting","5000"],["finalButton","*"],["modalTimer","1500"],["[native code]"],["recurseMyFunction"],["myCount"],["downloadBtn","*"],["document[_0x","*"],["[native code]","5000"],["","3000"],["shortenbl"],["enbll"],["adBlockerCountdown","*","0.02"],["shortConfig","15000"],["gotoo","*"],["","30000","0.02"],["redirectpage","13500"],["countdown","","0.02"],["decodeURL","*"],["value","*"],["(!1)","*"],["","*","0.1"],["bFired","*"],["[native code]","20000"],["document.link.submit","*","0.02"],["","*","0.02"],["atualizar","*","0.02"],["player","*","0.02"],["/outboundLink/"],["isPeriodic","*"],["/EzoIvent|TDELAY/","5000"]];

const hostnamesMap = new Map([["spiele.bild.de",0],["gamefront.com",0],["moviepilot.de",1],["imgadult.com",3],["imgdrive.net",3],["imgtaxi.com",3],["imgwallet.com",3],["zupload.me",4],["techmyntra.net",4],["globalbesthosting.com",4],["srt.am",4],["themeslide.com",4],["katfile.com",4],["hubfiles.ws",4],["ausfile.com",4],["siriusfiles.com",4],["juegoviejo.com",4],["uploadever.com",4],["4share.vn",4],["lnk2.cc",4],["modagamers.com",4],["sofwaremania.blogspot.com",4],["memoriadatv.com",4],["uploadraja.com",4],["dosya.co",4],["clipartmax.com",4],["jptorrent.org",4],["quizlet.com",4],["sourceforge.net",4],["redload.co",4],["juegos.eleconomista.es",4],["1fichier.com",5],["movie4k.dev",6],["indi-share.com",7],["megaupto.com",7],["uploadflix.org",7],["onuploads.com",7],["playretrogames.com",8],["gsm1x.xyz",10],["top1iq.com",10],["youku.com",12],["acessarlink.online",12],["subdowns.com",12],["files.im",13],["dokumen.tips",14],["file.magiclen.org",14],["so1.asia",14],["streamvid.net",14],["lewdzone.com",15],["onlyhgames.com",15],["direct-link.net",16],["link-to.net",16],["howifx.com",17],["yogablogfit.com",17],["vocalley.com",17],["gamearter.com",18],["updown.link",19],["dvdgayonline.com",20],["tudogamesbr.com",21],["subsvip.com",22],["uploadking.net",23],["adblockplustape.com",24],["tapeblocker.com",24],["tapewithadblock.org",24],["top.gg",25],["emulatorgames.net",26],["getitall.top",27],["actionviewphotography.com",28],["exporntoons.net",28],["mat6tube.com",28],["noodlemagazine.com",28],["tyler-brown.com",28],["ukdevilz.com",28],["aapks.com",29],["123lnk.xyz",29],["mcrypto.club",30],["codingnepalweb.com",31],["maxstream.video",32],["embed.nana2play.com",33],["mgnet.xyz",34],["1bitspace.com",35],["ytsubme.com",36],["thecustomrom.com",37],["quizack.com",38],["media.cms.nova.cz",39],["premiumebooks.xyz",[40,41]],["yhocdata.com",42],["downloadr.in",43],["downloadudemy.com",43],["icongnghe.com",44],["uploadcloud.pro",45],["romsgames.net",47],["romsget.io",47],["sub1s.com",48],["mboost.me",49],["bloggertheme.xyz",50],["referus.in",[51,52]],["baketax.com",[53,54,55]],["enit.in",56],["skincarie.com",56],["hashhackers.com",57],["katdrive.net",57],["newsongs.co.in",57],["atresplayer.com",58],["edunc.xyz",59],["newstvhindi.in",59],["takez.co",[60,61]],["redketchup.io",62],["gyanitheme.com",[64,65]],["dktechnicalmate.com",66],["20sfvn.com",67],["hi888.today",67],["oto5s.com",67],["w88.limo",67],["tralhasvarias.blogspot.com",68],["hotmediahub.com",69],["terabox.fun",69],["intercelestial.com",71],["thestar.com",72],["france.tv",73],["bolsadevalores.club",74],["sabornutritivo.com",75],["usandoapp.com",76],["fazercurriculo.online",76],["guiacripto.online",77],["cyclingnews.com",78],["watcho.com",79],["neurotray.com",80]]);

const entitiesMap = new Map([["slreamplay",2],["pouvideo",2],["povvideo",2],["povw1deo",2],["povwideo",2],["powv1deo",2],["powvibeo",2],["powvideo",2],["powvldeo",2],["bdupload",4],["desiupload",4],["9xupload",4],["grantorrent",4],["grantorrents",4],["uploadrar",4],["hdfull",4],["pelispedia",4],["uptomega",7],["imgrock",9],["mixdrop",11],["mixdrp",11],["zeefiles",13],["adblockeronstape",24],["adblocktape",24],["antiadtape",24],["noblocktape",24],["shavetape",24],["stapadblockuser",24],["strcloud",24],["streamadblockplus",24],["streamta",24],["streamtape",24],["streamtapeadblockuser",24],["strtape",24],["strtapeadblock",24],["adblockeronstreamtape",24],["apkmody",46],["financerites",56],["writedroid",63],["empire-stream",70],["empire-streaming",70]]);

const exceptionsMap = new Map([["blog.sabornutritivo.com",[75]]]);

/******************************************************************************/

function nanoSetTimeoutBooster(
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
        'Error': self.Error,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'jsonParse': self.JSON.parse.bind(self.JSON),
        'jsonStringify': self.JSON.stringify.bind(self.JSON),
        'log': console.log.bind(console),
        uboLog(...args) {
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
            }
            const expect = (options.canNegate === true && pattern.startsWith('!') === false);
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
        patternToRegex(pattern, flags = undefined) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
            }
            try {
                return new RegExp(match[1], match[2] || flags);
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
    try { nanoSetTimeoutBooster(...argsList[i]); }
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

// Not Firefox
if ( typeof wrappedJSObject !== 'object' ) {
    return uBOL_nanoSetTimeoutBooster();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_nanoSetTimeoutBooster = cloneInto([
            [ '(', uBOL_nanoSetTimeoutBooster.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_nanoSetTimeoutBooster);
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
    delete page.uBOL_nanoSetTimeoutBooster;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
