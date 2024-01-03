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

// ruleset: rus-0

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_abortCurrentScript = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["$","1xbet"],["$","append"],["$","contextmenu"],["$","divWrapper"],["$","get"],["$","init_x_place"],["$","mainContainer"],["$","showPopupextra"],["JSON.parse"],["JSON.parse","atob"],["Math.floor","adregain_wall"],["Object.defineProperty","rcBuf"],["String.fromCharCode","var _0x"],["XMLHttpRequest","document.querySelectorAll"],["__require","/clickunder/"],["addEventListener","DOMContentLoaded"],["atob","void"],["clickExplorer"],["decodeURIComponent","/63cc63/"],["decodeURIComponent","fromCharCode"],["disableSelection","reEnable"],["document.addEventListener","adsBlocked"],["document.createElement"],["document.createElement","/ru-n4p|ua-n4p|загрузка.../"],["document.createElement","Detected"],["document.createElement","ExternalChromePop"],["document.createElement","Math.random"],["document.createElement","atob"],["document.createElement","delete window"],["document.createElement","redtram"],["document.getElementsByTagName","unselectable"],["document.oncontextmenu"],["document.onkeydown"],["encodeURIComponent","rcBuf"],["fetch"],["fuckAdBlock","undefined"],["jQuery","backgroundImage"],["redram","/загрузка.../"],["setInterval","Math.random"],["setInterval","reload"],["setTimeout","adblockwarn"],["window.onload","_uWnd"],["Math.floor","AdSense"],["document.getElementById","composedPath"],["document.getElementsByTagName","AMSP.loadAsset"],["document.querySelectorAll","popMagic"],["$","blockWarnClass"],["$","mimicTopClass"],["dispatchEvent","zoomdecorate"]];

const hostnamesMap = new Map([["shaiba.kz",0],["budport.com.ua",1],["asn.in.ua",2],["penzainform.ru",3],["l2top.ru",4],["tut.by",5],["conversion.im",6],["bez-smenki.ru",7],["freescreens.ru",8],["imgbase.ru",8],["imgcach.ru",8],["imgclick.ru",8],["payforpic.ru",8],["picclick.ru",8],["picclock.ru",8],["picforall.ru",8],["fenglish.site",9],["mp3spy.cc",9],["electric-house.ru",10],["euro-football.ru",10],["forums.rusmedserv.com",10],["liveresult.ru",10],["smolensk-auto.ru",10],["smolensk-auto.site",10],["stroi-help.ru",10],["agroreview.com",[11,33]],["dc-marvel.org",12],["gidonline.eu",12],["filmisub.com",[13,19]],["kinofen.net",[13,19]],["gdespaces.com",14],["gdespaces.net",14],["google-cloud.services",14],["spac.me",14],["spac.run",14],["spac.wtf",14],["spac1.com",14],["spac1.info",14],["spac1.me",14],["spac1.net",14],["spac1.org",14],["spac1.ru",14],["spaces-blogs.com",14],["spaces.im",14],["spcs-files.xyz",14],["spcs.bio",14],["spcs.global",14],["spcs.life",14],["spcs.me",14],["spcs.network",14],["spcs.news",14],["spcs.pro",14],["spcs.pub",14],["spcs.reviews",14],["spcs.social",14],["strip2.in",14],["strip2.xxx",14],["usersporn.com",14],["fastpic.org",[15,26]],["allboxing.ru",16],["pravvest.ru",17],["daz3d.ru",18],["my-expert.ru",[20,30,31]],["mod-wot.ru",21],["krolik.biz",22],["1news.com.ua",23],["365news.biz",23],["4mama.ua",23],["4studio.com.ua",23],["7days-ua.com",23],["agroter.com.ua",23],["alter-science.info",23],["apnews.com.ua",23],["argumentiru.com",23],["asiaplustj.info",23],["autotema.org.ua",23],["autotheme.info",23],["avtodream.org",23],["beauty.ua",23],["begemot-media.com",23],["begemot.media",23],["chas.cv.ua",23],["cheline.com.ua",23],["cikavosti.com",23],["ck.ua",23],["cn.ua",23],["comments.ua",23],["cvnews.cv.ua",23],["day.kyiv.ua",23],["depo.ua",23],["dv-gazeta.info",23],["dyvys.info",23],["economistua.com",23],["edinstvennaya.ua",23],["ekovolga.com",23],["expert.in.ua",23],["fedpress.ru",23],["firtka.if.ua",23],["forpost.media",23],["fraza.com",23],["gazeta1.com",23],["glavnoe.ua",23],["glavnoe24.ru",23],["glavpost.ua",23],["golosinfo.com.ua",23],["gorodkiev.com.ua",23],["grad.ua",23],["greenpost.ua",23],["ifnews.org.ua",23],["inforpost.com",23],["inkorr.com",23],["itechua.com",23],["kh.ua",23],["khersonline.net",23],["kolizhanka.com.ua",23],["kop.net.ua",23],["kr.ua",23],["krymr.com",23],["kurskcity.ru",23],["liga.net",23],["lvnews.org.ua",23],["mega-music.pro",23],["mi100.info",23],["mind.ua",23],["moirebenok.ua",23],["mycompplus.ru",23],["nakanune.ru",23],["narodna-pravda.ua",23],["nashbryansk.ru",23],["news24today.info",23],["newsua.one",23],["ngp-ua.info",23],["nnews.com.ua",23],["novavlada.info",23],["novynarnia.com",23],["np.pl.ua",23],["odessa-life.od.ua",23],["ogo.ua",23],["oukr.info",23],["panoptikon.org",23],["pg11.ru",23],["pik.net.ua",23],["pingvin.pro",23],["pl.com.ua",23],["planetanovosti.com",23],["podpricelom.com.ua",23],["politnavigator.net",23],["poltava365.com",23],["portal.lviv.ua",23],["pravdatutnews.com",23],["prm.ua",23],["procherk.info",23],["profootball.ua",23],["promin.cv.ua",23],["radiosvoboda.org",23],["ratel.kz",23],["real-vin.com",23],["reporter.ua",23],["risu.ua",23],["rivne.media",23],["rivnenews.com.ua",23],["rusjev.net",23],["russianshowbiz.info",23],["rv.ua",23],["rvnews.rv.ua",23],["showdream.org",23],["sport-kr.com.ua",23],["strana.news",23],["strana.today",23],["sud.ua",23],["te.ua",23],["telekritika.ua",23],["tenews.org.ua",23],["theageoffootball.com",23],["treebuna.info",23],["tverigrad.ru",23],["tverisport.ru",23],["tvoymalysh.com.ua",23],["uainfo.org",23],["uanews.org.ua",23],["uatv.ua",23],["ukranews.com",23],["ukrrain.com",23],["unn.com.ua",23],["vchaspik.ua",23],["versii.if.ua",23],["viva.ua",23],["vlast.kz",23],["vnn24.ru",23],["volnorez.com.ua",23],["volyninfa.com.ua",23],["volyninfo.com",23],["volynpost.com",23],["volynua.com",23],["vsviti.com.ua",23],["westnews.info",23],["womo.ua",23],["wworld.com.ua",23],["zbirna.com",23],["zp.ua",23],["crast.net",24],["rutor.in",25],["kaztorka.org",26],["kg-portal.ru",26],["nnm-club.lib",[26,38]],["nnm-club.me",[26,38]],["nnmclub.ro",[26,38]],["nnmclub.to",[26,38]],["shanson320.ru",27],["vesti.ua",27],["lrepacks.net",28],["transkarpatia.net",29],["brigadtv.ru",31],["castle-serial.ru",31],["ehlita.ru",31],["gameout.ru",31],["itevonklass.ru",31],["izmailovtv.xyz",31],["karateltv.ru",31],["lyucifer.tv",31],["m-z.tv",31],["pokazuha.ru",31],["samomdele.tv",31],["saske.tv",31],["sorvigolovatv.ru",31],["taynyeistiny.ru",31],["transformator220.ru",31],["stalker-mods.clan.su",32],["stalker-mods.su",32],["ritsatv.ru",34],["gwss.ru",35],["hardwareluxx.ru",36],["marieclaire.ua",37],["24boxing.com.ua",39],["bilshe.com",39],["businessua.com",39],["f1analytic.com",39],["football-ukraine.com",39],["footballgazeta.com",39],["footballtransfer.com.ua",39],["glianec.com",39],["nashamama.com",39],["sportanalytic.com",39],["stravy.net",39],["zdorovia.com.ua",39],["livesport.ws",40],["techmusic.ru",41],["dmod.cc",42],["draug.ru",42],["modsforwot.ru",42],["skam.online",43],["pornopuk.com",45],["huyamba.tv",45],["piratam.net",45],["piratca.net",45],["porn720.biz",45],["sexitorrent.com",45],["sextor.org",45],["domahatv.com",45],["torrent-pirat.com",45],["xtorrent.net",45],["rapidzona.tv",45],["xxxrip.net",45],["xxxtor.com",45],["hentai-share.one",45],["minigames.mail.ru",46],["mmminigames.mail.ru",47],["afisha.ru",48],["autorambler.ru",48],["championat.com",48],["eda.ru",48],["gazeta.ru",48],["lenta.ru",48],["letidor.ru",48],["moslenta.ru",48],["motor.ru",48],["passion.ru",48],["quto.ru",48],["rambler.ru",48],["wmj.ru",48]]);

const entitiesMap = new Map([["hdrezka",44],["rezka",44],["pornoakt",45]]);

const exceptionsMap = new Map([["new.fastpic.org",[15,26]]]);

/******************************************************************************/

function abortCurrentScript(...args) {
    runAtHtmlElementFn(( ) => {
        abortCurrentScriptCore(...args);
    });
}

function abortCurrentScriptCore(
    target = '',
    needle = '',
    context = ''
) {
    if ( typeof target !== 'string' ) { return; }
    if ( target === '' ) { return; }
    const safe = safeSelf();
    const reNeedle = safe.patternToRegex(needle);
    const reContext = safe.patternToRegex(context);
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    const thisScript = document.currentScript;
    const chain = target.split('.');
    let owner = window;
    let prop;
    for (;;) {
        prop = chain.shift();
        if ( chain.length === 0 ) { break; }
        if ( prop in owner === false ) { break; }
        owner = owner[prop];
        if ( owner instanceof Object === false ) { return; }
    }
    let value;
    let desc = Object.getOwnPropertyDescriptor(owner, prop);
    if (
        desc instanceof Object === false ||
        desc.get instanceof Function === false
    ) {
        value = owner[prop];
        desc = undefined;
    }
    const log = shouldLog(extraArgs);
    const debug = shouldDebug(extraArgs);
    const exceptionToken = getExceptionToken();
    const scriptTexts = new WeakMap();
    const getScriptText = elem => {
        let text = elem.textContent;
        if ( text.trim() !== '' ) { return text; }
        if ( scriptTexts.has(elem) ) { return scriptTexts.get(elem); }
        const [ , mime, content ] =
            /^data:([^,]*),(.+)$/.exec(elem.src.trim()) ||
            [ '', '', '' ];
        try {
            switch ( true ) {
            case mime.endsWith(';base64'):
                text = self.atob(content);
                break;
            default:
                text = self.decodeURIComponent(content);
                break;
            }
        } catch(ex) {
        }
        scriptTexts.set(elem, text);
        return text;
    };
    const validate = ( ) => {
        const e = document.currentScript;
        if ( e instanceof HTMLScriptElement === false ) { return; }
        if ( e === thisScript ) { return; }
        if ( context !== '' && reContext.test(e.src) === false ) {
            if ( debug === 'nomatch' || debug === 'all' ) { debugger; }  // jshint ignore: line
            return;
        }
        if ( log && e.src !== '' ) { safe.uboLog(`matched src: ${e.src}`); }
        const scriptText = getScriptText(e);
        if ( reNeedle.test(scriptText) === false ) {
            if ( debug === 'nomatch' || debug === 'all' ) { debugger; }  // jshint ignore: line
            return;
        }
        if ( log ) { safe.uboLog(`matched script text: ${scriptText}`); }
        if ( debug === 'match' || debug === 'all' ) { debugger; }  // jshint ignore: line
        throw new ReferenceError(exceptionToken);
    };
    if ( debug === 'install' ) { debugger; }  // jshint ignore: line
    try {
        Object.defineProperty(owner, prop, {
            get: function() {
                validate();
                return desc instanceof Object
                    ? desc.get.call(owner)
                    : value;
            },
            set: function(a) {
                validate();
                if ( desc instanceof Object ) {
                    desc.set.call(owner, a);
                } else {
                    value = a;
                }
            }
        });
    } catch(ex) {
        if ( log ) { safe.uboLog(ex); }
    }
}

function runAtHtmlElementFn(fn) {
    if ( document.documentElement ) {
        fn();
        return;
    }
    const observer = new MutationObserver(( ) => {
        observer.disconnect();
        fn();
    });
    observer.observe(document, { childList: true });
}

function getExceptionToken() {
    const safe = safeSelf();
    const token =
        String.fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
    const oe = self.onerror;
    self.onerror = function(msg, ...args) {
        if ( typeof msg === 'string' && msg.includes(token) ) { return true; }
        if ( oe instanceof Function ) {
            return oe.call(this, msg, ...args);
        }
    }.bind();
    return token;
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

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.debug;
}

function shouldLog(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.log;
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
    try { abortCurrentScript(...argsList[i]); }
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
    return uBOL_abortCurrentScript();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_abortCurrentScript = cloneInto([
            [ '(', uBOL_abortCurrentScript.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_abortCurrentScript);
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
    delete page.uBOL_abortCurrentScript;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
