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

const argsList = [["$","1xbet"],["$","append"],["$","contextmenu"],["$","divWrapper"],["$","get"],["$","init_x_place"],["$","mainContainer"],["$","showPopupextra"],["AdContaine","minHeight"],["JSON.parse"],["JSON.parse","atob"],["Math.floor","adregain_wall"],["Math.random"],["Object.defineProperty","rcBuf"],["String.fromCharCode","var _0x"],["XMLHttpRequest","document.querySelectorAll"],["XMLHttpRequest","llasalbbubrrl"],["__require","/clickunder/"],["addEventListener","DOMContentLoaded"],["atob","void"],["clickExplorer"],["decodeURIComponent","/63cc63/"],["decodeURIComponent","fromCharCode"],["disableSelection","reEnable"],["document.addEventListener","adsBlocked"],["document.createElement"],["document.createElement","/ru-n4p|ua-n4p|загрузка.../"],["document.createElement","Detected"],["document.createElement","ExternalChromePop"],["document.createElement","Math.random"],["document.createElement","atob"],["document.createElement","delete window"],["document.createElement","redtram"],["document.getElementsByTagName","unselectable"],["document.oncontextmenu"],["document.onkeydown"],["encodeURIComponent","rcBuf"],["fetch"],["fuckAdBlock","undefined"],["jQuery","backgroundImage"],["redram","/загрузка.../"],["setInterval","Math.random"],["setInterval","reload"],["setTimeout","adblockwarn"],["window.onload","_uWnd"],["Math.floor","AdSense"],["document.getElementById","composedPath"],["document.getElementsByTagName","AMSP.loadAsset"],["document.querySelectorAll","popMagic"],["$","blockWarnClass"],["$","mimicTopClass"],["dispatchEvent","zoomdecorate"]];

const hostnamesMap = new Map([["shaiba.kz",0],["budport.com.ua",1],["asn.in.ua",2],["penzainform.ru",3],["l2top.ru",4],["tut.by",5],["conversion.im",6],["bez-smenki.ru",7],["pikabu.ru",[8,16]],["freescreens.ru",9],["imgbase.ru",9],["imgcach.ru",9],["imgclick.ru",9],["payforpic.ru",9],["picclick.ru",9],["picclock.ru",9],["picforall.ru",9],["fenglish.site",10],["mp3spy.cc",10],["electric-house.ru",11],["euro-football.ru",11],["forums.rusmedserv.com",11],["liveresult.ru",11],["smolensk-auto.ru",11],["smolensk-auto.site",11],["stroi-help.ru",11],["tenews.org.ua",[12,26]],["agroreview.com",[13,36]],["dc-marvel.org",14],["gidonline.eu",14],["filmisub.com",[15,22]],["kinofen.net",[15,22]],["gdespaces.com",17],["gdespaces.net",17],["google-cloud.services",17],["spac.me",17],["spac.run",17],["spac.wtf",17],["spac1.com",17],["spac1.info",17],["spac1.me",17],["spac1.net",17],["spac1.org",17],["spac1.ru",17],["spaces-blogs.com",17],["spaces.im",17],["spcs-files.xyz",17],["spcs.bio",17],["spcs.global",17],["spcs.life",17],["spcs.me",17],["spcs.network",17],["spcs.news",17],["spcs.pro",17],["spcs.pub",17],["spcs.reviews",17],["spcs.social",17],["strip2.in",17],["strip2.xxx",17],["usersporn.com",17],["fastpic.org",[18,29]],["allboxing.ru",19],["pravvest.ru",20],["daz3d.ru",21],["my-expert.ru",[23,33,34]],["mod-wot.ru",24],["krolik.biz",25],["1news.com.ua",26],["365news.biz",26],["4mama.ua",26],["4studio.com.ua",26],["7days-ua.com",26],["agroter.com.ua",26],["alter-science.info",26],["apnews.com.ua",26],["argumentiru.com",26],["asiaplustj.info",26],["autotema.org.ua",26],["autotheme.info",26],["avtodream.org",26],["beauty.ua",26],["begemot-media.com",26],["begemot.media",26],["chas.cv.ua",26],["cheline.com.ua",26],["cikavosti.com",26],["ck.ua",26],["cn.ua",26],["comments.ua",26],["cvnews.cv.ua",26],["day.kyiv.ua",26],["depo.ua",26],["dv-gazeta.info",26],["dyvys.info",26],["economistua.com",26],["edinstvennaya.ua",26],["ekovolga.com",26],["expert.in.ua",26],["fedpress.ru",26],["firtka.if.ua",26],["forpost.media",26],["fraza.com",26],["gazeta1.com",26],["glavnoe.ua",26],["glavnoe24.ru",26],["glavpost.ua",26],["golosinfo.com.ua",26],["gorodkiev.com.ua",26],["gov.ua",26],["grad.ua",26],["greenpost.ua",26],["ifnews.org.ua",26],["inforpost.com",26],["inkorr.com",26],["itechua.com",26],["kh.ua",26],["khersonline.net",26],["kolizhanka.com.ua",26],["kop.net.ua",26],["kr.ua",26],["krymr.com",26],["kurskcity.ru",26],["liga.net",26],["lvnews.org.ua",26],["mega-music.pro",26],["mi100.info",26],["mind.ua",26],["moirebenok.ua",26],["mycompplus.ru",26],["nakanune.ru",26],["narodna-pravda.ua",26],["nashbryansk.ru",26],["news24today.info",26],["newsua.one",26],["ngp-ua.info",26],["nnews.com.ua",26],["novavlada.info",26],["novynarnia.com",26],["np.pl.ua",26],["odessa-life.od.ua",26],["ogo.ua",26],["oukr.info",26],["panoptikon.org",26],["pg11.ru",26],["pik.net.ua",26],["pingvin.pro",26],["pl.com.ua",26],["planetanovosti.com",26],["podpricelom.com.ua",26],["politnavigator.net",26],["poltava365.com",26],["portal.lviv.ua",26],["pravdatutnews.com",26],["prm.ua",26],["procherk.info",26],["profootball.ua",26],["promin.cv.ua",26],["radiosvoboda.org",26],["ratel.kz",26],["real-vin.com",26],["reporter.ua",26],["risu.ua",26],["rivne.media",26],["rivnenews.com.ua",26],["rusjev.net",26],["russianshowbiz.info",26],["rv.ua",26],["rvnews.rv.ua",26],["showdream.org",26],["sport-kr.com.ua",26],["strana.news",26],["strana.today",26],["sud.ua",26],["te.ua",26],["telekritika.ua",26],["theageoffootball.com",26],["treebuna.info",26],["tverigrad.ru",26],["tverisport.ru",26],["tvoymalysh.com.ua",26],["uainfo.org",26],["uanews.org.ua",26],["uatv.ua",26],["ukranews.com",26],["ukrrain.com",26],["unn.com.ua",26],["vchaspik.ua",26],["versii.if.ua",26],["viva.ua",26],["vlast.kz",26],["vnn24.ru",26],["volnorez.com.ua",26],["volyninfa.com.ua",26],["volyninfo.com",26],["volynpost.com",26],["volynua.com",26],["vsviti.com.ua",26],["westnews.info",26],["womo.ua",26],["wworld.com.ua",26],["zbirna.com",26],["zp.ua",26],["crast.net",27],["rutor.in",28],["kaztorka.org",29],["kg-portal.ru",29],["nnm-club.lib",[29,41]],["nnm-club.me",[29,41]],["nnmclub.ro",[29,41]],["nnmclub.to",[29,41]],["shanson320.ru",30],["vesti.ua",30],["lrepacks.net",31],["transkarpatia.net",32],["brigadtv.ru",34],["castle-serial.ru",34],["ehlita.ru",34],["gameout.ru",34],["itevonklass.ru",34],["izmailovtv.xyz",34],["karateltv.ru",34],["lyucifer.tv",34],["m-z.tv",34],["pokazuha.ru",34],["samomdele.tv",34],["saske.tv",34],["sorvigolovatv.ru",34],["taynyeistiny.ru",34],["transformator220.ru",34],["stalker-mods.clan.su",35],["stalker-mods.su",35],["ritsatv.ru",37],["gwss.ru",38],["hardwareluxx.ru",39],["marieclaire.ua",40],["24boxing.com.ua",42],["bilshe.com",42],["businessua.com",42],["f1analytic.com",42],["football-ukraine.com",42],["footballgazeta.com",42],["footballtransfer.com.ua",42],["glianec.com",42],["nashamama.com",42],["sportanalytic.com",42],["stravy.net",42],["zdorovia.com.ua",42],["livesport.ws",43],["techmusic.ru",44],["dmod.cc",45],["draug.ru",45],["modsforwot.ru",45],["skam.online",46],["pornopuk.com",48],["huyamba.tv",48],["piratam.net",48],["piratca.net",48],["porn720.biz",48],["sexitorrent.com",48],["sextor.org",48],["domahatv.com",48],["torrent-pirat.com",48],["xtorrent.net",48],["rapidzona.tv",48],["xxxrip.net",48],["xxxtor.com",48],["hentai-share.one",48],["minigames.mail.ru",49],["mmminigames.mail.ru",50],["afisha.ru",51],["autorambler.ru",51],["championat.com",51],["eda.ru",51],["gazeta.ru",51],["lenta.ru",51],["letidor.ru",51],["moslenta.ru",51],["motor.ru",51],["passion.ru",51],["quto.ru",51],["rambler.ru",51],["wmj.ru",51]]);

const entitiesMap = new Map([["hdrezka",47],["rezka",47],["pornoakt",48]]);

const exceptionsMap = new Map([["new.fastpic.org",[18,29]]]);

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
