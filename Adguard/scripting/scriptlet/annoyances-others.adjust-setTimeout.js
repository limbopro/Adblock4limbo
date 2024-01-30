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

// ruleset: annoyances-others

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_adjustSetTimeout = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["Taplytics","*","0.001"],["counter","","0.02"],["letgo","*","0.001"],["-1","*","0.001"],["tick","","0.02"],["setC","1000","0.001"],["window.location.href","*","0.001"],["countDown","*","0.001"],["show()","*","0.001"],["DOWNLOAD","*","0.001"],["Download","*","0.001"],["div_form"],["value","*","0.001"],["e(t-1)","*","0.001"],["window.location.href","*","0.02"],["counter","*","0.02"],["download_loading","*","0.02"],["autoload-wait","*","0.02"],["content","*","0.02"],["/HideTimerID|clsname/","*","0.02"],["countdowntimer","*","0.02"],["updateClock","","0.02"],["seconds","*","0.02"],["myTimer","*","0.02"],["goLink(","3000"],["get-link","*","0.02"],["getlink","*","0.02"],["download","*","0.02"],["/Please wait|myTime--/","*","0.02"],["updateClock","*","0.02"],["/_0x|gotoo/","*","0.02"],["status.innerHTML","*","0.02"],["document[_0x","*","0.02"],["countDown","","0.02"],["#counter","","0.02"],["count","","0.02"],["#download-loading","*","0.02"],["Tick","","0.02"],["submit","5000","0.02"],["wpsafe","*","0.02"],["_0x","*","0.02"],["redirect","4000","0.02"],["tick","1000"],["grecaptcha","*","0.02"],["run()","","0.02"],["#proceed","*","0.02"],["timer","1000","0.02"],["/waiting|\\.classList\\.remove|gotoo/","*","0.02"],["seconds","","0.02"],["countdown()","","0.02"],["TheLink","","0.02"],["st2","","0.02"],["startTimer","*","0.02"],["goVideoJS","*","0.02"],["Please wait","*","0.02"],["showText","*","0.02"],["checkclick","*","0.02"],["getlink","*","0.001"],["/gotoo|pop-button|stickyadin/","*","0.02"],["#download_ad_addon","10000","0.02"],["$('.skip-btn').","*","0.02"],["download_file","","0.02"],["waitting_download","","0.02"],["CountBack","990","0.02"],["timeUpdater","","0.02"],["btn","3000","0.02"],["clsname","5000","0.02"],["#download","10000","0.02"],["#download","11000","0.02"],["/get-link","5000","0.02"],["fade","5000","0.02"],["timer_end","20000","0.02"],["disabled","","0.02"],["gotoo","22000","0.02"],["gotoo","17000","0.02"],["download link","","0.02"],["tick","1000","0.02"],["countdown","1400","0.02"],["updateinfo","1000","0.02"],["count--","1000","0.02"],["window.location.href","10000","0.02"],["params.redirect","5000","0.02"],["timers","","0.02"],["timers","4000","0.02"],["doRedirect","3000","0.02"],["timer--","","0.02"],["timers","1500","0.02"],["var _0x","","0.02"],[".eg-manually-get","7000","0.02"],["downloadbtn","","0.02"],["link_button","","0.02"],["#get_btn","","0.02"],["counter","2000","0.02"],["adFreePopup","15000","0.02"],["go_url","15000","0.3"],["window.location.href=t,clearTimeout","10000"],["adpop-content-left","","0.02"],["#ad .timer","","0.02"],["setSeconds","","0.02"],["updateReloj","","0.02"],["countdown","","0.02"],["dlcntdwn","","0.02"],["tick()","","0.02"],["startCountdown","","0.02"],["contador","","0.02"],["/action-downloadFile?"],["#freebtn","","0.02"],["download()"]];

const hostnamesMap = new Map([["foxnews.com",0],["noblocktape.com",1],["antiadtape.com",1],["tapewithadblock.org",1],["adblockstrtape.link",1],["adblockstrtech.link",1],["stape.fun",1],["strcloud.link",1],["moviessoul.com",1],["infidrive.net",3],["file-upload.com",4],["present.rssing.com",5],["thecustomrom.com",6],["streamvid.net",7],["1fichier.com",8],["pling.com",10],["maqal360.com",11],["diudemy.com",11],["fansonlinehub.com",12],["teralink.me",12],["teraearn.com",12],["terashare.me",12],["hotmediahub.com",12],["terabox.fun",12],["easymc.io",13],["iggtech.com",14],["ipamod.com",14],["apkmody.fun",16],["apkmody.io",16],["vsthemes.org",17],["comohoy.com",18],["indilinks.xyz",19],["blogtechh.com",20],["coins-town.com",21],["upapk.io",22],["bakenor.com",23],["prod.danawa.com",24],["blogmado.com",25],["vavada5com.com",26],["financerites.in",26],["financerites.com",26],["apkmaza.co",27],["bakeput.com",28],["bakemain.com",28],["bakeleft.com",28],["link-descarga.site",29],["kinemaster.cc",30],["zertalious.xyz",31],["hashhackers.com",32],["katdrive.net",32],["newsongs.co.in",32],["course-downloader.com",33],["123lnk.xyz",33],["universalfreecourse.com",33],["freenulledworld.com",33],["downloadfreecourse.com",33],["aapks.com",33],["pvpcorme.com",33],["dosya.co",33],["ishort.xyz",33],["fmoviesdl.com",34],["solotakus-tv.ml",34],["uncensored-hentai.com",34],["curimovie.com",34],["malzero.xyz",35],["modyolo.com",36],["uploadmaza.com",37],["uptomega.me",37],["dlfiles.online",37],["hubfiles.ws",37],["romsget.io",38],["romsgames.net",38],["mcrypto.club",39],["spantechie.com",40],["imgadult.com",41],["imgdrive.net",41],["imgtaxi.com",41],["imgwallet.com",41],["uploadrar.com",42],["steampiay.cc",43],["pouvideo.cc",43],["pomvideo.cc",43],["top1iq.com",44],["downfile.site",45],["memangbau.com",45],["trangchu.news",45],["techacode.com",45],["azmath.info",45],["freetp.org",46],["online-fix.me",46],["technoashwath.com",47],["uploadflix.org",48],["uploadbaz.me",48],["downloadr.in",49],["freetraderdownload.com.br",49],["appofmirror.com",49],["egyshare.cc",50],["samfirms.com",52],["4shared.com",53],["mdzsmutpcvykb.net",54],["mdfx9dc8n.net",54],["themehits.com",55],["atlai.club",56],["healthfirstweb.com",57],["yogablogfit.com",57],["vocalley.com",57],["howifx.com",57],["enit.in",57],["skincarie.com",57],["imperialstudy.com",57],["techymedies.com",58],["noltrt.com",59],["getthot.com",60],["videezy.com",61],["fdocuments.in",62],["tgsup.group",63],["kutub3lpdf.com",63],["movie4k.dev",64],["itscybertech.com",65],["newzflix.xyz",66],["moviesfi.net",[67,68]],["shareappscrack.com",69],["policiesforyou.com",70],["gamemodding.com",71],["mixdrop.sx",72],["moddedguru.com",[73,74]],["upvideo.to",75],["sama-share.com",76],["zeefiles.download",76],["apkdone.com",77],["jptorrent.org",78],["pinsystem.co.uk",79],["gamefront.com",80],["render-state.to",81],["respuestadetarea.com",82],["asistente-de-estudio.com",82],["edurespuestas.com",83],["c.newsnow.co.uk",84],["pentafaucet.com",85],["getitall.top",85],["ihomeworkhelper.com",86],["hdfull.lv",87],["emulatorgames.net",88],["desiupload.co",89],["bdupload.asia",89],["indishare.org",89],["onlinefreecourse.net",89],["uploadking.net",89],["w4files.ws",90],["easylinks.in",91],["novafusion.pl",92],["surfline.com",93],["catcut.net",94],["apkshki.com",95],["pngitem.com",96],["world-sms.org",97],["pulsemens.com",98],["verteleseriesonline.com",99],["hentaisd.tv",99],["memoriadatv.com",100],["filehorse.com",101],["filerio.in",102],["worldofmods.com",102],["subdowns.com",103],["tudogamesbr.com",104],["videouroki.net",105],["katfile.com",106],["coolrom.com.au",107],["freeroms.com",107]]);

const entitiesMap = new Map([["shavetape",1],["adblockstreamtape",1],["streamtape",1],["stre4mplay",2],["streampiay",2],["stemplay",2],["steamplay",2],["steanplay",2],["streamp1ay",2],["streanplay",2],["mixdroop",9],["flixhub",15],["premiumebooks",51],["mixdrop",54]]);

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
