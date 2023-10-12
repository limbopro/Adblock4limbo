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
const uBOL_adjustSetTimeout = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["","10000"],["_0x","*"],["grecaptcha.ready","*"],["redirect","4000"],[],["dlw","40000"],["timeUpdater","","0"],["seconds"],["ez","*","0.02"],["/.?/","4000"],["run"],["disabled"],["","","0"],["tick"],["","","0.02"],["CountBack","990"],["notification_state","12000"],["getlink","*"],["/SplashScreen|BannerAd/"],["startDownload","8000"],["countdown","1000","0.02"],["/.?/","","0.02"],["","10000","0"],["downloadbtn"],["counter"],["readyToVote","12000"],["","7000","0"],["timer--"],["download","1100"],["countDown"],["countdown","10000"],["animation"],[".fadeIn()","3000"],["load_ads"],["adFreePopup","15000","0.02"],["_0x","15000"],["location.href","8000"],["aTagChange","12000"],["window.location.href","*"],["isScrexed","5000"],["() => n(t)","*"],["st2"],["subentry","4000"],["/__ez|window.location.href/","*"],["countdown"],["location.href","18000"],["show","4000"],["download_loading","*"],["submit","5000"],["fa-unlock","3000"],["setinteracted","2000"],["waiting","5000"],["finalButton","*"],["modalTimer","1500"],["[native code]"],["recurseMyFunction"],["myCount"],["downloadBtn","*"],["document[_0x","*"],["[native code]","5000"],["","3000"],["shortenbl"],["enbll"],["adBlockerCountdown","*","0.02"],["shortConfig","15000"],["gotoo","*"],["","30000","0.02"],["redirectpage","13500"],["countdown","","0.02"],["decodeURL","*"],["value","*"],["(!1)","*"],["","*","0.1"],["bFired","*"],["[native code]","20000"],["document.link.submit","*","0.02"],["","*","0.02"],["atualizar","*","0.02"],["player","*","0.02"],["div_form"],["setC"],["/outboundLink/"],["isPeriodic","*"],["/EzoIvent|TDELAY/","5000"],["b()","3000"],["ads","*"]];

const hostnamesMap = new Map([["spiele.bild.de",0],["gamefront.com",0],["moviepilot.de",1],["imgadult.com",3],["imgdrive.net",3],["imgtaxi.com",3],["imgwallet.com",3],["zupload.me",4],["techmyntra.net",4],["globalbesthosting.com",4],["srt.am",4],["themeslide.com",4],["katfile.com",4],["hubfiles.ws",4],["ausfile.com",4],["siriusfiles.com",4],["juegoviejo.com",4],["uploadever.com",4],["4share.vn",4],["lnk2.cc",4],["modagamers.com",4],["sofwaremania.blogspot.com",4],["memoriadatv.com",4],["uploadraja.com",4],["dosya.co",4],["clipartmax.com",4],["jptorrent.org",4],["quizlet.com",4],["sourceforge.net",4],["redload.co",4],["juegos.eleconomista.es",4],["1fichier.com",5],["movie4k.dev",6],["indi-share.com",7],["megaupto.com",7],["uploadflix.org",7],["onuploads.com",7],["playretrogames.com",8],["gsm1x.xyz",10],["top1iq.com",10],["youku.com",12],["acessarlink.online",12],["subdowns.com",12],["files.im",13],["dokumen.tips",14],["file.magiclen.org",14],["so1.asia",14],["streamvid.net",14],["lewdzone.com",15],["onlyhgames.com",15],["direct-link.net",16],["link-to.net",16],["howifx.com",17],["yogablogfit.com",17],["vocalley.com",17],["gamearter.com",18],["updown.link",19],["dvdgayonline.com",20],["tudogamesbr.com",21],["subsvip.com",22],["uploadking.net",23],["adblockplustape.com",24],["tapeblocker.com",24],["tapewithadblock.org",24],["top.gg",25],["emulatorgames.net",26],["getitall.top",27],["actionviewphotography.com",28],["exporntoons.net",28],["mat6tube.com",28],["noodlemagazine.com",28],["tyler-brown.com",28],["ukdevilz.com",28],["aapks.com",29],["123lnk.xyz",29],["mcrypto.club",30],["codingnepalweb.com",31],["maxstream.video",32],["embed.nana2play.com",33],["surfline.com",34],["mgnet.xyz",35],["1bitspace.com",36],["ytsubme.com",37],["thecustomrom.com",38],["quizack.com",39],["media.cms.nova.cz",40],["premiumebooks.xyz",[41,42]],["yhocdata.com",43],["downloadr.in",44],["downloadudemy.com",44],["icongnghe.com",45],["uploadcloud.pro",46],["romsgames.net",48],["romsget.io",48],["sub1s.com",49],["mboost.me",50],["bloggertheme.xyz",51],["referus.in",[52,53]],["baketax.com",[54,55,56]],["enit.in",57],["skincarie.com",57],["hashhackers.com",58],["katdrive.net",58],["newsongs.co.in",58],["atresplayer.com",59],["edunc.xyz",60],["newstvhindi.in",60],["takez.co",[61,62]],["redketchup.io",63],["gyanitheme.com",[65,66]],["dktechnicalmate.com",67],["20sfvn.com",68],["hi888.today",68],["oto5s.com",68],["w88.limo",68],["tralhasvarias.blogspot.com",69],["hotmediahub.com",70],["terabox.fun",70],["intercelestial.com",72],["thestar.com",73],["france.tv",74],["bolsadevalores.club",75],["sabornutritivo.com",76],["usandoapp.com",77],["fazercurriculo.online",77],["guiacripto.online",78],["appsbull.com",79],["diudemy.com",79],["maqal360.com",79],["present.rssing.com",80],["cyclingnews.com",81],["watcho.com",82],["neurotray.com",83],["theonion.com",[84,85]]]);

const entitiesMap = new Map([["slreamplay",2],["pouvideo",2],["povvideo",2],["povw1deo",2],["povwideo",2],["powv1deo",2],["powvibeo",2],["powvideo",2],["powvldeo",2],["bdupload",4],["desiupload",4],["9xupload",4],["grantorrent",4],["grantorrents",4],["uploadrar",4],["hdfull",4],["pelispedia",4],["uptomega",7],["imgrock",9],["mixdrop",11],["mixdrp",11],["zeefiles",13],["adblockeronstape",24],["adblocktape",24],["antiadtape",24],["noblocktape",24],["shavetape",24],["stapadblockuser",24],["strcloud",24],["streamadblockplus",24],["streamta",24],["streamtape",24],["streamtapeadblockuser",24],["strtape",24],["strtapeadblock",24],["adblockeronstreamtape",24],["apkmody",47],["financerites",57],["writedroid",64],["empire-stream",71],["empire-streaming",71]]);

const exceptionsMap = new Map([["blog.sabornutritivo.com",[76]]]);

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
        'Error': self.Error,
        'Math_floor': Math.floor,
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

// Not Firefox
if ( typeof wrappedJSObject !== 'object' ) {
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
