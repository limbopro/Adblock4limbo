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

const argsList = [["$","1xbet"],["$","append"],["$","contextmenu"],["$","divWrapper"],["$","get"],["$","init_x_place"],["$","mainContainer"],["$","showPopupextra"],["JSON.parse"],["JSON.parse","atob"],["Math.floor","adregain_wall"],["Math.random"],["Object.defineProperty","rcBuf"],["String.fromCharCode","var _0x"],["XMLHttpRequest","document.querySelectorAll"],["XMLHttpRequest","llasalbbubrrl"],["__require","/clickunder/"],["addEventListener","DOMContentLoaded"],["atob","void"],["clickExplorer"],["decodeURIComponent","/63cc63/"],["decodeURIComponent","fromCharCode"],["disableSelection","reEnable"],["document.addEventListener","adsBlocked"],["document.createElement"],["document.createElement","/ru-n4p|ua-n4p|загрузка.../"],["document.createElement","Detected"],["document.createElement","ExternalChromePop"],["document.createElement","Math.random"],["document.createElement","atob"],["document.createElement","delete window"],["document.createElement","redtram"],["document.getElementsByTagName","unselectable"],["document.oncontextmenu"],["document.onkeydown"],["encodeURIComponent","rcBuf"],["fetch"],["fuckAdBlock","undefined"],["jQuery","backgroundImage"],["redram","/загрузка.../"],["setInterval","Math.random"],["setInterval","reload"],["setTimeout","adblockwarn"],["window.onload","_uWnd"],["Math.floor","AdSense"],["document.getElementById","composedPath"],["document.getElementsByTagName","AMSP.loadAsset"],["document.querySelectorAll","popMagic"],["$","blockWarnClass"],["$","mimicTopClass"],["dispatchEvent","zoomdecorate"]];

const hostnamesMap = new Map([["shaiba.kz",0],["budport.com.ua",1],["asn.in.ua",2],["penzainform.ru",3],["l2top.ru",4],["tut.by",5],["conversion.im",6],["bez-smenki.ru",7],["freescreens.ru",8],["imgbase.ru",8],["imgcach.ru",8],["imgclick.ru",8],["payforpic.ru",8],["picclick.ru",8],["picclock.ru",8],["picforall.ru",8],["fenglish.site",9],["mp3spy.cc",9],["electric-house.ru",10],["euro-football.ru",10],["forums.rusmedserv.com",10],["liveresult.ru",10],["smolensk-auto.ru",10],["smolensk-auto.site",10],["stroi-help.ru",10],["tenews.org.ua",[11,25]],["agroreview.com",[12,35]],["dc-marvel.org",13],["gidonline.eu",13],["filmisub.com",[14,21]],["kinofen.net",[14,21]],["pikabu.ru",15],["gdespaces.com",16],["gdespaces.net",16],["google-cloud.services",16],["spac.me",16],["spac.run",16],["spac.wtf",16],["spac1.com",16],["spac1.info",16],["spac1.me",16],["spac1.net",16],["spac1.org",16],["spac1.ru",16],["spaces-blogs.com",16],["spaces.im",16],["spcs-files.xyz",16],["spcs.bio",16],["spcs.global",16],["spcs.life",16],["spcs.me",16],["spcs.network",16],["spcs.news",16],["spcs.pro",16],["spcs.pub",16],["spcs.reviews",16],["spcs.social",16],["strip2.in",16],["strip2.xxx",16],["usersporn.com",16],["fastpic.org",[17,28]],["allboxing.ru",18],["pravvest.ru",19],["daz3d.ru",20],["my-expert.ru",[22,32,33]],["mod-wot.ru",23],["krolik.biz",24],["1news.com.ua",25],["365news.biz",25],["4mama.ua",25],["4studio.com.ua",25],["7days-ua.com",25],["agroter.com.ua",25],["alter-science.info",25],["apnews.com.ua",25],["argumentiru.com",25],["asiaplustj.info",25],["autotema.org.ua",25],["autotheme.info",25],["avtodream.org",25],["beauty.ua",25],["begemot-media.com",25],["begemot.media",25],["chas.cv.ua",25],["cheline.com.ua",25],["cikavosti.com",25],["ck.ua",25],["cn.ua",25],["comments.ua",25],["cvnews.cv.ua",25],["day.kyiv.ua",25],["depo.ua",25],["dv-gazeta.info",25],["dyvys.info",25],["economistua.com",25],["edinstvennaya.ua",25],["ekovolga.com",25],["expert.in.ua",25],["fedpress.ru",25],["firtka.if.ua",25],["forpost.media",25],["fraza.com",25],["gazeta1.com",25],["glavnoe.ua",25],["glavnoe24.ru",25],["glavpost.ua",25],["golosinfo.com.ua",25],["gorodkiev.com.ua",25],["gov.ua",25],["grad.ua",25],["greenpost.ua",25],["ifnews.org.ua",25],["inforpost.com",25],["inkorr.com",25],["itechua.com",25],["kh.ua",25],["khersonline.net",25],["kolizhanka.com.ua",25],["kop.net.ua",25],["kr.ua",25],["krymr.com",25],["kurskcity.ru",25],["liga.net",25],["lvnews.org.ua",25],["mega-music.pro",25],["mi100.info",25],["mind.ua",25],["moirebenok.ua",25],["mycompplus.ru",25],["nakanune.ru",25],["narodna-pravda.ua",25],["nashbryansk.ru",25],["news24today.info",25],["newsua.one",25],["ngp-ua.info",25],["nnews.com.ua",25],["novavlada.info",25],["novynarnia.com",25],["np.pl.ua",25],["odessa-life.od.ua",25],["ogo.ua",25],["oukr.info",25],["panoptikon.org",25],["pg11.ru",25],["pik.net.ua",25],["pingvin.pro",25],["pl.com.ua",25],["planetanovosti.com",25],["podpricelom.com.ua",25],["politnavigator.net",25],["poltava365.com",25],["portal.lviv.ua",25],["pravdatutnews.com",25],["prm.ua",25],["procherk.info",25],["profootball.ua",25],["promin.cv.ua",25],["radiosvoboda.org",25],["ratel.kz",25],["real-vin.com",25],["reporter.ua",25],["risu.ua",25],["rivne.media",25],["rivnenews.com.ua",25],["rusjev.net",25],["russianshowbiz.info",25],["rv.ua",25],["rvnews.rv.ua",25],["showdream.org",25],["sport-kr.com.ua",25],["strana.news",25],["strana.today",25],["sud.ua",25],["te.ua",25],["telekritika.ua",25],["theageoffootball.com",25],["treebuna.info",25],["tverigrad.ru",25],["tverisport.ru",25],["tvoymalysh.com.ua",25],["uainfo.org",25],["uanews.org.ua",25],["uatv.ua",25],["ukranews.com",25],["ukrrain.com",25],["unn.com.ua",25],["vchaspik.ua",25],["versii.if.ua",25],["viva.ua",25],["vlast.kz",25],["vnn24.ru",25],["volnorez.com.ua",25],["volyninfa.com.ua",25],["volyninfo.com",25],["volynpost.com",25],["volynua.com",25],["vsviti.com.ua",25],["westnews.info",25],["womo.ua",25],["wworld.com.ua",25],["zbirna.com",25],["zp.ua",25],["crast.net",26],["rutor.in",27],["kaztorka.org",28],["kg-portal.ru",28],["nnm-club.lib",[28,40]],["nnm-club.me",[28,40]],["nnmclub.ro",[28,40]],["nnmclub.to",[28,40]],["shanson320.ru",29],["vesti.ua",29],["lrepacks.net",30],["transkarpatia.net",31],["brigadtv.ru",33],["castle-serial.ru",33],["ehlita.ru",33],["gameout.ru",33],["itevonklass.ru",33],["izmailovtv.xyz",33],["karateltv.ru",33],["lyucifer.tv",33],["m-z.tv",33],["pokazuha.ru",33],["samomdele.tv",33],["saske.tv",33],["sorvigolovatv.ru",33],["taynyeistiny.ru",33],["transformator220.ru",33],["stalker-mods.clan.su",34],["stalker-mods.su",34],["ritsatv.ru",36],["gwss.ru",37],["hardwareluxx.ru",38],["marieclaire.ua",39],["24boxing.com.ua",41],["bilshe.com",41],["businessua.com",41],["f1analytic.com",41],["football-ukraine.com",41],["footballgazeta.com",41],["footballtransfer.com.ua",41],["glianec.com",41],["nashamama.com",41],["sportanalytic.com",41],["stravy.net",41],["zdorovia.com.ua",41],["livesport.ws",42],["techmusic.ru",43],["dmod.cc",44],["draug.ru",44],["modsforwot.ru",44],["skam.online",45],["pornopuk.com",47],["huyamba.tv",47],["piratam.net",47],["piratca.net",47],["porn720.biz",47],["sexitorrent.com",47],["sextor.org",47],["domahatv.com",47],["torrent-pirat.com",47],["xtorrent.net",47],["rapidzona.tv",47],["xxxrip.net",47],["xxxtor.com",47],["hentai-share.one",47],["minigames.mail.ru",48],["mmminigames.mail.ru",49],["afisha.ru",50],["autorambler.ru",50],["championat.com",50],["eda.ru",50],["gazeta.ru",50],["lenta.ru",50],["letidor.ru",50],["moslenta.ru",50],["motor.ru",50],["passion.ru",50],["quto.ru",50],["rambler.ru",50],["wmj.ru",50]]);

const entitiesMap = new Map([["hdrezka",46],["rezka",46],["pornoakt",47]]);

const exceptionsMap = new Map([["new.fastpic.org",[17,28]]]);

/******************************************************************************/

function abortCurrentScript(...args) {
    runAtHtmlElement(( ) => {
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

function runAtHtmlElement(fn) {
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
    const token =
        String.fromCharCode(Date.now() % 26 + 97) +
        Math.floor(Math.random() * 982451653 + 982451653).toString(36);
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

// Not Firefox
if ( typeof wrappedJSObject !== 'object' ) {
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
