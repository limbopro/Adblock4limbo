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

// ruleset: annoyances-others

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_nanoSetTimeoutBooster = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["counter","","0.02"],["window.location.href","*","0.001"],["countDown","*","0.001"],["show()","*","0.001"],["DOWNLOAD","*","0.001"],["Download","*","0.001"],["div_form"],["value","*","0.02"],["value","*","0.001"],["e(t-1)","*","0.001"],["window.location.href","*","0.02"],["counter","*","0.02"],["download_loading","*","0.02"],["autoload-wait","*","0.02"],["content","*","0.02"],["/HideTimerID|clsname/","*","0.02"],["countdowntimer","*","0.02"],["updateClock","","0.02"],["seconds","*","0.02"],["myTimer","*","0.02"],["goLink(","3000"],["get-link","*","0.02"],["getlink","*","0.02"],["download","*","0.02"],["/Please wait|myTime--/","*","0.02"],["updateClock","*","0.02"],["/_0x|gotoo/","*","0.02"],["status.innerHTML","*","0.02"],["document[_0x","*","0.02"],["countDown","","0.02"],["#counter","","0.02"],["count","","0.02"],["#download-loading","*","0.02"],["Tick","","0.02"],["submit","5000","0.02"],["wpsafe","*","0.02"],["_0x","*","0.02"],["redirect","4000","0.02"],["tick","1000"],["grecaptcha","*","0.02"],["run()","","0.02"],["#proceed","*","0.02"],["timer","1000","0.02"],["/waiting|\\.classList\\.remove|gotoo/","*","0.02"],["seconds","","0.02"],["countdown()","","0.02"],["TheLink","","0.02"],["st2","","0.02"],["startTimer","*","0.02"],["goVideoJS","*","0.02"],["Please wait","*","0.02"],["showText","*","0.02"],["checkclick","*","0.02"],["getlink","*","0.001"],["/gotoo|pop-button|stickyadin/","*","0.02"],["#download_ad_addon","10000","0.02"],["$('.skip-btn').","*","0.02"],["download_file","","0.02"],["waitting_download","","0.02"],["CountBack","990","0.02"],["timeUpdater","","0.02"],["btn","3000","0.02"],["clsname","5000","0.02"],["#download","10000","0.02"],["#download","11000","0.02"],["/get-link","5000","0.02"],["fade","5000","0.02"],["timer_end","20000","0.02"],["disabled","","0.02"],["gotoo","22000","0.02"],["gotoo","17000","0.02"],["download link","","0.02"],["link","1100","0.02"],["tick","1000","0.02"],["countdown","1400","0.02"],["updateinfo","1000","0.02"],["count--","1000","0.02"],["window.location.href","10000","0.02"],["params.redirect","5000","0.02"],["timers","","0.02"],["timers","4000","0.02"],["doRedirect","3000","0.02"],["timer--","","0.02"],["timers","1500","0.02"],["var _0x","","0.02"],[".eg-manually-get","7000","0.02"],["downloadbtn","","0.02"],["link_button","","0.02"],["#get_btn","","0.02"],["counter","2000","0.02"],["adFreePopup","15000","0.02"],["go_url","15000","0.3"],["window.location.href=t,clearTimeout","10000"],["adpop-content-left","","0.02"],["#ad .timer","","0.02"],["setSeconds","","0.02"],["updateReloj","","0.02"],["countdown","","0.02"],["dlcntdwn","","0.02"],["tick()","","0.02"],["startCountdown","","0.02"],["contador","","0.02"],["/action-downloadFile?"],["#freebtn","","0.02"],["download()"]];

const hostnamesMap = new Map([["noblocktape.com",0],["antiadtape.com",0],["tapewithadblock.org",0],["adblockstrtape.link",0],["adblockstrtech.link",0],["stape.fun",0],["strcloud.link",0],["moviessoul.com",0],["thecustomrom.com",1],["streamvid.net",2],["1fichier.com",3],["pling.com",5],["maqal360.com",6],["diudemy.com",6],["hotmediahub.com",[7,8]],["terabox.fun",7],["easymc.io",9],["iggtech.com",10],["ipamod.com",10],["apkmody.fun",12],["apkmody.io",12],["vsthemes.org",13],["comohoy.com",14],["indilinks.xyz",15],["blogtechh.com",16],["coins-town.com",17],["upapk.io",18],["bakenor.com",19],["prod.danawa.com",20],["blogmado.com",21],["vavada5com.com",22],["financerites.in",22],["financerites.com",22],["apkmaza.co",23],["bakeput.com",24],["bakemain.com",24],["bakeleft.com",24],["link-descarga.site",25],["kinemaster.cc",26],["zertalious.xyz",27],["hashhackers.com",28],["katdrive.net",28],["newsongs.co.in",28],["course-downloader.com",29],["123lnk.xyz",29],["universalfreecourse.com",29],["freenulledworld.com",29],["downloadfreecourse.com",29],["aapks.com",29],["pvpcorme.com",29],["dosya.co",29],["ishort.xyz",29],["fmoviesdl.com",30],["solotakus-tv.ml",30],["uncensored-hentai.com",30],["curimovie.com",30],["malzero.xyz",31],["modyolo.com",32],["uploadmaza.com",33],["uptomega.me",33],["dlfiles.online",33],["hubfiles.ws",33],["romsget.io",34],["romsgames.net",34],["mcrypto.club",35],["spantechie.com",36],["imgadult.com",37],["imgdrive.net",37],["imgtaxi.com",37],["imgwallet.com",37],["uploadrar.com",38],["steampiay.cc",39],["pouvideo.cc",39],["pomvideo.cc",39],["top1iq.com",40],["downfile.site",41],["memangbau.com",41],["trangchu.news",41],["techacode.com",41],["azmath.info",41],["freetp.org",42],["online-fix.me",42],["technoashwath.com",43],["uploadflix.org",44],["uploadbaz.me",44],["downloadr.in",45],["freetraderdownload.com.br",45],["appofmirror.com",45],["egyshare.cc",46],["samfirms.com",48],["4shared.com",49],["themehits.com",51],["atlai.club",52],["yogablogfit.com",53],["vocalley.com",53],["howifx.com",53],["enit.in",53],["skincarie.com",53],["imperialstudy.com",53],["techymedies.com",54],["noltrt.com",55],["getthot.com",56],["videezy.com",57],["fdocuments.in",58],["tgsup.group",59],["kutub3lpdf.com",59],["movie4k.dev",60],["itscybertech.com",61],["newzflix.xyz",62],["moviesfi.net",[63,64]],["shareappscrack.com",65],["policiesforyou.com",66],["gamemodding.com",67],["mixdrop.sx",68],["moddedguru.com",[69,70]],["upvideo.to",71],["techoow.com",72],["sama-share.com",73],["zeefiles.download",73],["apkdone.com",74],["jptorrent.org",75],["pinsystem.co.uk",76],["gamefront.com",77],["render-state.to",78],["respuestadetarea.com",79],["asistente-de-estudio.com",79],["edurespuestas.com",80],["c.newsnow.co.uk",81],["pentafaucet.com",82],["getitall.top",82],["ihomeworkhelper.com",83],["hdfull.lv",84],["emulatorgames.net",85],["desiupload.co",86],["bdupload.asia",86],["indishare.org",86],["onlinefreecourse.net",86],["uploadking.net",86],["w4files.ws",87],["easylinks.in",88],["novafusion.pl",89],["surfline.com",90],["catcut.net",91],["apkshki.com",92],["pngitem.com",93],["world-sms.org",94],["pulsemens.com",95],["verteleseriesonline.com",96],["hentaisd.tv",96],["memoriadatv.com",97],["filehorse.com",98],["filerio.in",99],["worldofmods.com",99],["subdowns.com",100],["tudogamesbr.com",101],["videouroki.net",102],["katfile.com",103],["coolrom.com.au",104],["freeroms.com",104]]);

const entitiesMap = new Map([["shavetape",0],["adblockstreamtape",0],["streamtape",0],["mixdroop",4],["flixhub",11],["premiumebooks",47],["mixdrop",50]]);

const exceptionsMap = new Map([]);

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
