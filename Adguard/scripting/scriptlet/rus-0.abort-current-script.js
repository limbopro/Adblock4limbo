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

const argsList = [["$","1xbet"],["$","append"],["$","contextmenu"],["$","divWrapper"],["$","get"],["$","init_x_place"],["$","mainContainer"],["$","showPopupextra"],["JSON.parse"],["JSON.parse","atob"],["Math.floor","adregain_wall"],["Math.random"],["Object.defineProperty","rcBuf"],["String.fromCharCode","var _0x"],["XMLHttpRequest","document.querySelectorAll"],["__require","/clickunder/"],["addEventListener","DOMContentLoaded"],["atob","void"],["clickExplorer"],["decodeURIComponent","/63cc63/"],["decodeURIComponent","fromCharCode"],["disableSelection","reEnable"],["document.addEventListener","adsBlocked"],["document.createElement"],["document.createElement","/ru-n4p|ua-n4p|загрузка.../"],["document.createElement","Detected"],["document.createElement","ExternalChromePop"],["document.createElement","Math.random"],["document.createElement","atob"],["document.createElement","delete window"],["document.createElement","redtram"],["document.getElementsByTagName","unselectable"],["document.oncontextmenu"],["document.onkeydown"],["encodeURIComponent","rcBuf"],["fetch"],["fuckAdBlock","undefined"],["jQuery","backgroundImage"],["redram","/загрузка.../"],["setInterval","Math.random"],["setInterval","reload"],["setTimeout","adblockwarn"],["window.onload","_uWnd"],["Math.floor","AdSense"],["document.getElementById","composedPath"],["document.getElementsByTagName","AMSP.loadAsset"],["document.querySelectorAll","popMagic"],["$","blockWarnClass"],["$","mimicTopClass"],["dispatchEvent","zoomdecorate"]];

const hostnamesMap = new Map([["shaiba.kz",0],["budport.com.ua",1],["asn.in.ua",2],["penzainform.ru",3],["l2top.ru",4],["tut.by",5],["conversion.im",6],["bez-smenki.ru",7],["freescreens.ru",8],["imgbase.ru",8],["imgcach.ru",8],["imgclick.ru",8],["payforpic.ru",8],["picclick.ru",8],["picclock.ru",8],["picforall.ru",8],["fenglish.site",9],["mp3spy.cc",9],["electric-house.ru",10],["euro-football.ru",10],["forums.rusmedserv.com",10],["liveresult.ru",10],["smolensk-auto.ru",10],["smolensk-auto.site",10],["stroi-help.ru",10],["tenews.org.ua",[11,24]],["agroreview.com",[12,34]],["dc-marvel.org",13],["gidonline.eu",13],["filmisub.com",[14,20]],["kinofen.net",[14,20]],["gdespaces.com",15],["gdespaces.net",15],["google-cloud.services",15],["spac.me",15],["spac.run",15],["spac.wtf",15],["spac1.com",15],["spac1.info",15],["spac1.me",15],["spac1.net",15],["spac1.org",15],["spac1.ru",15],["spaces-blogs.com",15],["spaces.im",15],["spcs-files.xyz",15],["spcs.bio",15],["spcs.global",15],["spcs.life",15],["spcs.me",15],["spcs.network",15],["spcs.news",15],["spcs.pro",15],["spcs.pub",15],["spcs.reviews",15],["spcs.social",15],["strip2.in",15],["strip2.xxx",15],["usersporn.com",15],["fastpic.org",[16,27]],["allboxing.ru",17],["pravvest.ru",18],["daz3d.ru",19],["my-expert.ru",[21,31,32]],["mod-wot.ru",22],["krolik.biz",23],["1news.com.ua",24],["365news.biz",24],["4mama.ua",24],["4studio.com.ua",24],["7days-ua.com",24],["agroter.com.ua",24],["alter-science.info",24],["apnews.com.ua",24],["argumentiru.com",24],["asiaplustj.info",24],["autotema.org.ua",24],["autotheme.info",24],["avtodream.org",24],["beauty.ua",24],["begemot-media.com",24],["begemot.media",24],["chas.cv.ua",24],["cheline.com.ua",24],["cikavosti.com",24],["ck.ua",24],["cn.ua",24],["comments.ua",24],["cvnews.cv.ua",24],["day.kyiv.ua",24],["depo.ua",24],["dv-gazeta.info",24],["dyvys.info",24],["economistua.com",24],["edinstvennaya.ua",24],["ekovolga.com",24],["expert.in.ua",24],["fedpress.ru",24],["firtka.if.ua",24],["forpost.media",24],["fraza.com",24],["gazeta1.com",24],["glavnoe.ua",24],["glavnoe24.ru",24],["glavpost.ua",24],["golosinfo.com.ua",24],["gorodkiev.com.ua",24],["grad.ua",24],["greenpost.ua",24],["ifnews.org.ua",24],["inforpost.com",24],["inkorr.com",24],["itechua.com",24],["kh.ua",24],["khersonline.net",24],["kolizhanka.com.ua",24],["kop.net.ua",24],["kr.ua",24],["krymr.com",24],["kurskcity.ru",24],["liga.net",24],["lvnews.org.ua",24],["mega-music.pro",24],["mi100.info",24],["mind.ua",24],["moirebenok.ua",24],["mycompplus.ru",24],["nakanune.ru",24],["narodna-pravda.ua",24],["nashbryansk.ru",24],["news24today.info",24],["newsua.one",24],["ngp-ua.info",24],["nnews.com.ua",24],["novavlada.info",24],["novynarnia.com",24],["np.pl.ua",24],["odessa-life.od.ua",24],["ogo.ua",24],["oukr.info",24],["panoptikon.org",24],["pg11.ru",24],["pik.net.ua",24],["pingvin.pro",24],["pl.com.ua",24],["planetanovosti.com",24],["podpricelom.com.ua",24],["politnavigator.net",24],["poltava365.com",24],["portal.lviv.ua",24],["pravdatutnews.com",24],["prm.ua",24],["procherk.info",24],["profootball.ua",24],["promin.cv.ua",24],["radiosvoboda.org",24],["ratel.kz",24],["real-vin.com",24],["reporter.ua",24],["risu.ua",24],["rivne.media",24],["rivnenews.com.ua",24],["rusjev.net",24],["russianshowbiz.info",24],["rv.ua",24],["rvnews.rv.ua",24],["showdream.org",24],["sport-kr.com.ua",24],["strana.news",24],["strana.today",24],["sud.ua",24],["te.ua",24],["telekritika.ua",24],["theageoffootball.com",24],["treebuna.info",24],["tverigrad.ru",24],["tverisport.ru",24],["tvoymalysh.com.ua",24],["uainfo.org",24],["uanews.org.ua",24],["uatv.ua",24],["ukranews.com",24],["ukrrain.com",24],["unn.com.ua",24],["vchaspik.ua",24],["versii.if.ua",24],["viva.ua",24],["vlast.kz",24],["vnn24.ru",24],["volnorez.com.ua",24],["volyninfa.com.ua",24],["volyninfo.com",24],["volynpost.com",24],["volynua.com",24],["vsviti.com.ua",24],["westnews.info",24],["womo.ua",24],["wworld.com.ua",24],["zbirna.com",24],["zp.ua",24],["crast.net",25],["rutor.in",26],["kaztorka.org",27],["kg-portal.ru",27],["nnm-club.lib",[27,39]],["nnm-club.me",[27,39]],["nnmclub.ro",[27,39]],["nnmclub.to",[27,39]],["shanson320.ru",28],["vesti.ua",28],["lrepacks.net",29],["transkarpatia.net",30],["brigadtv.ru",32],["castle-serial.ru",32],["ehlita.ru",32],["gameout.ru",32],["itevonklass.ru",32],["izmailovtv.xyz",32],["karateltv.ru",32],["lyucifer.tv",32],["m-z.tv",32],["pokazuha.ru",32],["samomdele.tv",32],["saske.tv",32],["sorvigolovatv.ru",32],["taynyeistiny.ru",32],["transformator220.ru",32],["stalker-mods.clan.su",33],["stalker-mods.su",33],["ritsatv.ru",35],["gwss.ru",36],["hardwareluxx.ru",37],["marieclaire.ua",38],["24boxing.com.ua",40],["bilshe.com",40],["businessua.com",40],["f1analytic.com",40],["football-ukraine.com",40],["footballgazeta.com",40],["footballtransfer.com.ua",40],["glianec.com",40],["nashamama.com",40],["sportanalytic.com",40],["stravy.net",40],["zdorovia.com.ua",40],["livesport.ws",41],["techmusic.ru",42],["dmod.cc",43],["draug.ru",43],["modsforwot.ru",43],["skam.online",44],["pornopuk.com",46],["huyamba.tv",46],["piratam.net",46],["piratca.net",46],["porn720.biz",46],["sexitorrent.com",46],["sextor.org",46],["domahatv.com",46],["torrent-pirat.com",46],["xtorrent.net",46],["rapidzona.tv",46],["xxxrip.net",46],["xxxtor.com",46],["hentai-share.one",46],["minigames.mail.ru",47],["mmminigames.mail.ru",48],["afisha.ru",49],["autorambler.ru",49],["championat.com",49],["eda.ru",49],["gazeta.ru",49],["lenta.ru",49],["letidor.ru",49],["moslenta.ru",49],["motor.ru",49],["passion.ru",49],["quto.ru",49],["rambler.ru",49],["wmj.ru",49]]);

const entitiesMap = new Map([["hdrezka",45],["rezka",45],["pornoakt",46]]);

const exceptionsMap = new Map([["new.fastpic.org",[16,27]]]);

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
        'JSON_parse': self.JSON.parse.bind(self.JSON),
        'JSON_stringify': self.JSON.stringify.bind(self.JSON),
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
