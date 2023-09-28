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
const uBOL_removeAttr = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["style","#over"],["data-id|data-p","[data-id],[data-p]","stay"],["checked","input#chkIsAdd"],["checked","#addon"],["onclick"],["href|target","a[href=\"https://imgprime.com/view.php\"][target=\"_blank\"]","complete"],["href","a[href=\"https://vpn-choice.com\"]"],["src","iframe#claimAd"],["href","#opfk"],["srcdoc","iframe"],["onmousemove","button"],["onclick","button[id][onclick*=\".html\"]"],["onclick","button[name=\"imgContinue\"][onclick]"],["target","#continuetoimage > [href]"],["href|target","#continuetoimage > [href][onclick], #overlayera > #ajax_load_indicator > #page_effect > [href][onclick]"],["target"],["href","[href*=\"ccbill\"]"],["onclick","[onclick^=\"window.open\"]"],["onclick","[onclick^=\"pop\"]"],["disabled","button[id=\"invisibleCaptchaShortlink\"]"],["onmouseover|onclick|onmouseout",".save-btn.pull-right"],["href","#clickfakeplayer"],["onclick","","stay"],["type","input[value^=\"http\"]"],["oncontextmenu"],["class","div.intAdX"],["class","div[class^=\"img\"][class$=\"ad\"]"],["data-ff-code"],["data-ivad-preroll-adtag","video","stay"],["style","ins","complete"],["href","[href*=\"jump\"]","stay"],["href","a#clickfakeplayer"],["href",".fake_player > [href][target]"],["href",".link"],["href",".fake_player > a[href]"],["target",".clickbutton"],["onclick",".btn-success.get-link","stay"],["disabled",".btn-primary"],["oncontextmenu","body"],["disabled","button"],["data-ppcnt_ads","main[onclick]"],["onClick"],["href","[href^=\"https://aj2218.online/\"]","stay"],["target","#downloadvideo"],["href","[rel^=\"noopener\"]"],["data-item","a[href='']"],["href","a[href][target=\"_blank\"]"],["data-ppcnt_ads|onclick","#main"],["href","a[href*=\"/ads.php\"][target=\"_blank\"]"],["onclick","[onclick*=\"window.open\"]"],["target|href","a[href^=\"//\"]"],["onclick","a[href^=\"magnet:\"][onclick]"],["target","#SafelinkGenerate"],["onclick","a[href][onclick^=\"getFullStory\"]"],["onclick","body"],["onclick",".previewhd > a"],["onclick","a.thumb.mvi-cover"],["href|target","a[href^=\"https://tipstertube.com/bookmaker/\"][target=\"_blank\"]","stay"],["href|target|data-ipshover-target|data-ipshover|data-autolink|rel","a[href^=\"https://thumpertalk.com/link/click/\"][target=\"_blank\"]"],["href","#continue"],["href",".button[href^=\"javascript\"]"],["disabled","input[id=\"button1\"][class=\"btn btn-primary\"][disabled]"],["style","div[style=\"display: none;\"]"],["type","[src*=\"SPOT\"]","asap stay"],["class","div#player"],["href|target|data-onclick","a[id=\"dl\"][data-onclick^=\"window.open\"]","stay"],["href","a#clickfkplayer"],["onclick","a[onclick^=\"setTimeout\"]"],["href",".mvi-cover"],["href",".t-out-span [href*=\"utm_source\"]","stay"],["src",".t-out-span [src*=\".gif\"]","stay"],["disabled",".panel-body > .text-center > button"],["href","[onclick]","stay"],["disabled","#downloadbtn"],["onmousedown",".ob-dynamic-rec-link","stay"],["disabled","a#redirect-btn"],["onclick","form > button"],["href",".unlock-step-link"],["href","[href*=\"discord\"]"],["uk-sticky","header","stay"],["style","body","stay"],["href",".MediaStep","stay"],["disabled","button#myClickButton"],["style","button#finalButton"],["onclick",".btn"],["onmouseover",".g-recaptcha"],["href","[href=\"/bestporn.html\"]"],["disabled","button#getlink"],["disabled","button#gotolink"],["id","#div-gpt-ad-footer"],["id","#div-gpt-ad-pagebottom"],["id","#div-gpt-ad-relatedbottom-1"],["id","#div-gpt-ad-sidebottom"],["disabled",".downloadbtn"],["onclick","#direct_link > a[onclick]"],["disabled",".get-link"],["href","[onclick^=\"pop\"]"],["disabled","#gotolink"],["href",".atas > a[href*=\"/redirect\"][onclick]"],["onload","[onload^=\"window.open\"]"],["onclick","button[onclick^=\"window.open\"]"],["onclick","a[href][onclick^=\"window.open\"]"],["onclick","[type=\"submit\"]"],["href",".MyAd > a[target=\"_blank\"]"],["onclick","a#downloadbtn[onclick^=\"window.open\"]","stay"],["onclick","a[onclick]"],["class|style","div[id^=\"los40_gpt\"]"],["onclick","a[href][onclick^=\"trackOutboundLink\"]"],["data-woman-ex","a[href][data-woman-ex]"],["data-trm-action|data-trm-category|data-trm-label",".trm_event","stay"]];

const hostnamesMap = new Map([["freeplayervideo.com",0],["nazarickol.com",0],["player-cdn.com",0],["mcloud.to",1],["vidplay.site",1],["vidstream.pro",1],["dailyuploads.net",2],["userupload.net",3],["bs.to",4],["payskip.org",4],["dozarte.com",4],["goalup.live",4],["pornoborshch.com",4],["imgprime.com",5],["magnetdl.com",6],["magnetdl.org",6],["moondoge.co.in",7],["igg-games.com",9],["newscon.org",9],["22pixx.xyz",[12,13,14]],["wowescape.com",15],["games2rule.com",15],["games4king.com",15],["sexykittenporn.com",16],["errotica-archives.com",16],["shon.xyz",17],["go.fire-link.net",17],["megaurl.in",18],["megafly.in",18],["donpelis.com",18],["noweconomy.live",19],["elil.cc",20],["amyscans.com",21],["dvdgayonline.com",21],["supergoku.com",21],["streampourvous.com",21],["openloading.com",21],["thewatchseries.live",21],["dvdgayporn.com",21],["latinohentai.com",21],["hdmovie20.com",21],["vumoo.cc",21],["gum-gum-stream.com",21],["cinefunhd.com",21],["eegybest.xyz",21],["animesgratis.org",21],["filerio.in",22],["fastconverter.net",22],["xxx-image.com",24],["1001tracklists.com",[25,26]],["opensubtitles.org",27],["desired.de",28],["forum.release-apk.com",29],["work.ink",30],["premiumstream.live",33],["verepeliculas.com",34],["newsonthegotoday.com",35],["satoshi-win.xyz",36],["promo-visits.site",37],["coinscap.info",37],["cryptowidgets.net",37],["greenenez.com",37],["insurancegold.in",37],["webfreetools.net",37],["wiki-topia.com",37],["findandfound.ga",38],["apps2app.com",39],["appsmodz.com",39],["note1s.com",39],["paste1s.com",39],["tr.link",40],["notube.net",41],["notube.cc",41],["smutty.com",42],["popimed.com",44],["iseekgirls.com",45],["shrinkme.in",46],["aylink.co",47],["gitizle.vip",47],["shtms.co",47],["tio.ch",48],["ondebaixo.com",51],["ondebaixa.com",51],["ondeeubaixo.org",51],["torrentool.org",51],["egao.in",52],["hindustantimes.com",53],["e-sushi.fr",54],["itsfuck.com",55],["stilltube.com",55],["hitmovies4u.com",56],["123moviefree4u.com",56],["tipstertube.com",57],["thumpertalk.com",58],["adz7short.space",59],["allwpworld.com",61],["maxstream.video",62],["veoplanet.com",63],["blogdatecnologia.net",64],["diariodecasamento.com",64],["eusaudavel.net",64],["modaestiloeafins.com",64],["portalmundocurioso.com",64],["receitasabores.com",64],["turismoeviagem.com",64],["bowfile.com",65],["av01.tv",67],["film01stream.ws",68],["firstpost.com",[69,70]],["so1.asia",71],["methodspoint.com",72],["xubster.com",73],["welt.de",74],["top1iq.com",75],["sh2rt.com",76],["sub1s.com",77],["utopiascans.com",78],["mboost.me",81],["referus.in",[82,83]],["oii.io",84],["mdn.lol",85],["watchanime.video",86],["adzz.in",[87,88,97]],["soranews24.com",[89,90,91,92]],["datanodes.to",93],["mega4upload.com",94],["freebrightsoft.com",95],["javchill.com",96],["proappapk.com",97],["link.idblog.eu.org",98],["jockantv.com",99],["stagatvfiles.com",100],["domaha.tv",101],["xxxrip.net",101],["timestamp.fr",102],["bitzite.com",103],["yt2conv.com",104],["av01.media",105],["los40.com",106],["pioneer.eu",107],["woman.excite.co.jp",108],["demae-can.com",109]]);

const entitiesMap = new Map([["vizcloud",1],["douploads",2],["adbull",4],["burningseries",4],["nextorrent",4],["sportlive",4],["wstream",4],["pelisplus",8],["pelispedia",[8,31,32]],["cine-calidad",8],["vinaurl",10],["filecrypt",11],["mega4up",17],["zeefiles",17],["cinetux",21],["dpstream",21],["allcalidad",21],["pelis28",21],["jetanimes",21],["anxcinema",21],["hdmovie5",21],["pelishouse",21],["hdmovie2",21],["mlwbd",23],["pelispedia24",31],["strcloud",43],["streamtape",43],["streamta",43],["strtape",43],["strtapeadblock",43],["fzm",49],["fzmovies",49],["lite-link",50],["waploaded",60],["onionplay",66],["90phut2",[79,80]]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function removeAttr(
    token = '',
    selector = '',
    behavior = ''
) {
    if ( typeof token !== 'string' ) { return; }
    if ( token === '' ) { return; }
    const tokens = token.split(/\s*\|\s*/);
    if ( selector === '' ) {
        selector = `[${tokens.join('],[')}]`;
    }
    let timer;
    const rmattr = ( ) => {
        timer = undefined;
        try {
            const nodes = document.querySelectorAll(selector);
            for ( const node of nodes ) {
                for ( const attr of tokens ) {
                    node.removeAttribute(attr);
                }
            }
        } catch(ex) {
        }
    };
    const mutationHandler = mutations => {
        if ( timer !== undefined ) { return; }
        let skip = true;
        for ( let i = 0; i < mutations.length && skip; i++ ) {
            const { type, addedNodes, removedNodes } = mutations[i];
            if ( type === 'attributes' ) { skip = false; }
            for ( let j = 0; j < addedNodes.length && skip; j++ ) {
                if ( addedNodes[j].nodeType === 1 ) { skip = false; break; }
            }
            for ( let j = 0; j < removedNodes.length && skip; j++ ) {
                if ( removedNodes[j].nodeType === 1 ) { skip = false; break; }
            }
        }
        if ( skip ) { return; }
        timer = self.requestIdleCallback(rmattr, { timeout: 17 });
    };
    const start = ( ) => {
        rmattr();
        if ( /\bstay\b/.test(behavior) === false ) { return; }
        const observer = new MutationObserver(mutationHandler);
        observer.observe(document, {
            attributes: true,
            attributeFilter: tokens,
            childList: true,
            subtree: true,
        });
    };
    runAt(( ) => {
        start();
    }, /\bcomplete\b/.test(behavior) ? 'idle' : 'interactive');
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1,
            'interactive': 2, 'end': 2, '2': 2,
            'complete': 3, 'idle': 3, '3': 3,
        };
        const tokens = Array.isArray(state) ? state : [ state ];
        for ( const token of tokens ) {
            const prop = `${token}`;
            if ( targets.hasOwnProperty(prop) === false ) { continue; }
            return targets[prop];
        }
        return 0;
    };
    const runAt = intFromReadyState(when);
    if ( intFromReadyState(document.readyState) >= runAt ) {
        fn(); return;
    }
    const onStateChange = ( ) => {
        if ( intFromReadyState(document.readyState) < runAt ) { return; }
        fn();
        safe.removeEventListener.apply(document, args);
    };
    const safe = safeSelf();
    const args = [ 'readystatechange', onStateChange, { capture: true } ];
    safe.addEventListener.apply(document, args);
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
    try { removeAttr(...argsList[i]); }
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
    return uBOL_removeAttr();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_removeAttr = cloneInto([
            [ '(', uBOL_removeAttr.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_removeAttr);
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
    delete page.uBOL_removeAttr;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
