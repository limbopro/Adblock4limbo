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
const uBOL_adjustSetTimeout = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["counter","","0.02"],["setC","1000","0.001"],["window.location.href","*","0.001"],["countDown","*","0.001"],["show()","*","0.001"],["DOWNLOAD","*","0.001"],["Download","*","0.001"],["div_form"],["value","*","0.02"],["value","*","0.001"],["e(t-1)","*","0.001"],["window.location.href","*","0.02"],["counter","*","0.02"],["download_loading","*","0.02"],["autoload-wait","*","0.02"],["content","*","0.02"],["/HideTimerID|clsname/","*","0.02"],["countdowntimer","*","0.02"],["updateClock","","0.02"],["seconds","*","0.02"],["myTimer","*","0.02"],["goLink(","3000"],["get-link","*","0.02"],["getlink","*","0.02"],["download","*","0.02"],["/Please wait|myTime--/","*","0.02"],["updateClock","*","0.02"],["/_0x|gotoo/","*","0.02"],["status.innerHTML","*","0.02"],["document[_0x","*","0.02"],["countDown","","0.02"],["#counter","","0.02"],["count","","0.02"],["#download-loading","*","0.02"],["Tick","","0.02"],["submit","5000","0.02"],["wpsafe","*","0.02"],["_0x","*","0.02"],["redirect","4000","0.02"],["tick","1000"],["grecaptcha","*","0.02"],["run()","","0.02"],["#proceed","*","0.02"],["timer","1000","0.02"],["/waiting|\\.classList\\.remove|gotoo/","*","0.02"],["seconds","","0.02"],["countdown()","","0.02"],["TheLink","","0.02"],["st2","","0.02"],["startTimer","*","0.02"],["goVideoJS","*","0.02"],["Please wait","*","0.02"],["showText","*","0.02"],["checkclick","*","0.02"],["getlink","*","0.001"],["/gotoo|pop-button|stickyadin/","*","0.02"],["#download_ad_addon","10000","0.02"],["$('.skip-btn').","*","0.02"],["download_file","","0.02"],["waitting_download","","0.02"],["CountBack","990","0.02"],["timeUpdater","","0.02"],["btn","3000","0.02"],["clsname","5000","0.02"],["#download","10000","0.02"],["#download","11000","0.02"],["/get-link","5000","0.02"],["fade","5000","0.02"],["timer_end","20000","0.02"],["disabled","","0.02"],["gotoo","22000","0.02"],["gotoo","17000","0.02"],["download link","","0.02"],["link","1100","0.02"],["tick","1000","0.02"],["countdown","1400","0.02"],["updateinfo","1000","0.02"],["count--","1000","0.02"],["window.location.href","10000","0.02"],["params.redirect","5000","0.02"],["timers","","0.02"],["timers","4000","0.02"],["doRedirect","3000","0.02"],["timer--","","0.02"],["timers","1500","0.02"],["var _0x","","0.02"],[".eg-manually-get","7000","0.02"],["downloadbtn","","0.02"],["link_button","","0.02"],["#get_btn","","0.02"],["counter","2000","0.02"],["adFreePopup","15000","0.02"],["go_url","15000","0.3"],["window.location.href=t,clearTimeout","10000"],["adpop-content-left","","0.02"],["#ad .timer","","0.02"],["setSeconds","","0.02"],["updateReloj","","0.02"],["countdown","","0.02"],["dlcntdwn","","0.02"],["tick()","","0.02"],["startCountdown","","0.02"],["contador","","0.02"],["/action-downloadFile?"],["#freebtn","","0.02"],["download()"]];

const hostnamesMap = new Map([["noblocktape.com",0],["antiadtape.com",0],["tapewithadblock.org",0],["adblockstrtape.link",0],["adblockstrtech.link",0],["stape.fun",0],["strcloud.link",0],["moviessoul.com",0],["present.rssing.com",1],["thecustomrom.com",2],["streamvid.net",3],["1fichier.com",4],["pling.com",6],["maqal360.com",7],["diudemy.com",7],["hotmediahub.com",[8,9]],["terabox.fun",8],["easymc.io",10],["iggtech.com",11],["ipamod.com",11],["apkmody.fun",13],["apkmody.io",13],["vsthemes.org",14],["comohoy.com",15],["indilinks.xyz",16],["blogtechh.com",17],["coins-town.com",18],["upapk.io",19],["bakenor.com",20],["prod.danawa.com",21],["blogmado.com",22],["vavada5com.com",23],["financerites.in",23],["financerites.com",23],["apkmaza.co",24],["bakeput.com",25],["bakemain.com",25],["bakeleft.com",25],["link-descarga.site",26],["kinemaster.cc",27],["zertalious.xyz",28],["hashhackers.com",29],["katdrive.net",29],["newsongs.co.in",29],["course-downloader.com",30],["123lnk.xyz",30],["universalfreecourse.com",30],["freenulledworld.com",30],["downloadfreecourse.com",30],["aapks.com",30],["pvpcorme.com",30],["dosya.co",30],["ishort.xyz",30],["fmoviesdl.com",31],["solotakus-tv.ml",31],["uncensored-hentai.com",31],["curimovie.com",31],["malzero.xyz",32],["modyolo.com",33],["uploadmaza.com",34],["uptomega.me",34],["dlfiles.online",34],["hubfiles.ws",34],["romsget.io",35],["romsgames.net",35],["mcrypto.club",36],["spantechie.com",37],["imgadult.com",38],["imgdrive.net",38],["imgtaxi.com",38],["imgwallet.com",38],["uploadrar.com",39],["steampiay.cc",40],["pouvideo.cc",40],["pomvideo.cc",40],["top1iq.com",41],["downfile.site",42],["memangbau.com",42],["trangchu.news",42],["techacode.com",42],["azmath.info",42],["freetp.org",43],["online-fix.me",43],["technoashwath.com",44],["uploadflix.org",45],["uploadbaz.me",45],["downloadr.in",46],["freetraderdownload.com.br",46],["appofmirror.com",46],["egyshare.cc",47],["samfirms.com",49],["4shared.com",50],["themehits.com",52],["atlai.club",53],["yogablogfit.com",54],["vocalley.com",54],["howifx.com",54],["enit.in",54],["skincarie.com",54],["imperialstudy.com",54],["techymedies.com",55],["noltrt.com",56],["getthot.com",57],["videezy.com",58],["fdocuments.in",59],["tgsup.group",60],["kutub3lpdf.com",60],["movie4k.dev",61],["itscybertech.com",62],["newzflix.xyz",63],["moviesfi.net",[64,65]],["shareappscrack.com",66],["policiesforyou.com",67],["gamemodding.com",68],["mixdrop.sx",69],["moddedguru.com",[70,71]],["upvideo.to",72],["techoow.com",73],["sama-share.com",74],["zeefiles.download",74],["apkdone.com",75],["jptorrent.org",76],["pinsystem.co.uk",77],["gamefront.com",78],["render-state.to",79],["respuestadetarea.com",80],["asistente-de-estudio.com",80],["edurespuestas.com",81],["c.newsnow.co.uk",82],["pentafaucet.com",83],["getitall.top",83],["ihomeworkhelper.com",84],["hdfull.lv",85],["emulatorgames.net",86],["desiupload.co",87],["bdupload.asia",87],["indishare.org",87],["onlinefreecourse.net",87],["uploadking.net",87],["w4files.ws",88],["easylinks.in",89],["novafusion.pl",90],["surfline.com",91],["catcut.net",92],["apkshki.com",93],["pngitem.com",94],["world-sms.org",95],["pulsemens.com",96],["verteleseriesonline.com",97],["hentaisd.tv",97],["memoriadatv.com",98],["filehorse.com",99],["filerio.in",100],["worldofmods.com",100],["subdowns.com",101],["tudogamesbr.com",102],["videouroki.net",103],["katfile.com",104],["coolrom.com.au",105],["freeroms.com",105]]);

const entitiesMap = new Map([["shavetape",0],["adblockstreamtape",0],["streamtape",0],["mixdroop",5],["flixhub",12],["premiumebooks",48],["mixdrop",51]]);

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
