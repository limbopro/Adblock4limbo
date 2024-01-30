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
const uBOL_abortOnPropertyRead = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["ABNS"],["AdbBanner"],["CTRManager.host3"],["ClickUndercookie"],["Date.prototype.toUTCString"],["Groups.showDisclaimer"],["Light.Popup"],["Object.prototype.AdfoxXhrRequestPrepared"],["Object.prototype.Metrika"],["Object.prototype.YA_TURBO_PAGES"],["Object.prototype._getBanner"],["Object.prototype._isAutostartQueueSet"],["Object.prototype.bannerOptions"],["Object.prototype.brandingBlock"],["Object.prototype.direct"],["Object.prototype.fakeDetect"],["Object.prototype.getAdUsageStorage"],["Object.prototype.initOnPlay"],["Object.prototype.isApplySticky"],["Object.prototype.loadBanner"],["Object.prototype.render"],["Object.prototype.scriptsViaXhr"],["Object.prototype.yaContextCb"],["PUM.getPopup"],["SIN.AdsLoader"],["TotemToolsObject"],["WebSocket"],["XMLHttpRequest"],["Ya"],["__vasActiveTestIds"],["a_urls"],["aab"],["abl"],["adblock_availability_check"],["adcashMacros"],["admiral"],["ads"],["advFirstClickOpenNewTab"],["advanced_ads_ready"],["anOptions"],["antiadblockCallback"],["app_vars.force_disable_adblock"],["atob"],["bannersBillboard"],["bdy"],["blocked_action"],["cardinals"],["clickNS4"],["console.clear"],["createAds"],["creepyVideo"],["disable_copy"],["disable_hot_keys"],["document.addEventListener"],["document.body.oncopy"],["document.getElementById","mdl_adb"],["document.oncontextmenu"],["document.oncopy"],["document.ondragend"],["document.ondragstart"],["document.ondrop"],["document.onkeydown"],["document.onpaste"],["document.onselectstart"],["eaglePlayerPlugins.autoplay_position"],["echelon"],["forTheFreeVideo.css"],["fpm_attr"],["getSelection"],["get_ya_browser"],["goTolink"],["helpUsImproveSite"],["initsnow"],["kav_cn"],["lftrght"],["m205"],["mdpDeBlocker"],["move_string"],["myatu_bgm"],["nocontext"],["onload"],["open"],["preventSelection"],["scrollw"],["setsnow"],["sparkle"],["stopPrntScr"],["t364_initPopup"],["target_script"],["td_ad_background_click_target"],["tingle"],["tnAdditionalParams"],["unSelect"],["updateDownloadLinks"],["utarget_script"],["video.preroll"],["vpb"],["web_script"],["weekCallbacks"],["window.alert"],["window.block"],["yaContextCb"],["zfgformats"],["bc_blocks"],["globalAuthLoginPopupCounter"],["u_global_data"]];

const hostnamesMap = new Map([["liveball.cc",0],["liveball.uno",0],["htmlweb.ru",1],["fapreactor.com",2],["joyreactor.cc",2],["pornreactor.cc",2],["reactor.cc",2],["anifap.com",3],["anipoisk.org",3],["anitokyo.tv",3],["hcdn.online",3],["kinofilm.co",3],["comedy-radio.ru",[4,29]],["radioromantika.ru",[4,29]],["relax-fm.ru",[4,29]],["rg.ru",[4,101]],["sm.news",[4,28,31,82]],["ura.news",[4,101]],["veseloeradio.ru",[4,29]],["www.e1.ru",[4,13]],["vk.com",5],["vk.ru",5],["rutor.org",6],["drive2.ru",[7,22]],["liveinternet.ru",[8,9]],["yap.ru",8],["yaplakal.com",8],["lena-miro.ru",10],["levik.blog",10],["livejournal.com",10],["olegmakarenko.ru",10],["periskop.su",10],["shakko.ru",10],["shiro-kino.ru",10],["vadimrazumov.ru",10],["rbc.ru",[11,18]],["www.kinopoisk.ru",12],["gorodrabot.by",14],["gorodrabot.ru",14],["fishki.net",15],["reshu.by",16],["reshuent.kz",16],["reshuolymp.ru",16],["sdamgia.ru",16],["gdespaces.com",17],["gdespaces.net",17],["google-cloud.services",17],["spac.me",17],["spac.run",17],["spac.wtf",17],["spac1.com",17],["spac1.info",17],["spac1.me",17],["spac1.net",17],["spac1.org",17],["spac1.ru",17],["spaces-blogs.com",17],["spaces.im",17],["spcs-files.xyz",17],["spcs.bio",17],["spcs.global",17],["spcs.life",17],["spcs.me",17],["spcs.network",17],["spcs.news",17],["spcs.pro",17],["spcs.pub",17],["spcs.reviews",17],["spcs.social",17],["strip2.in",17],["strip2.xxx",17],["usersporn.com",17],["e1.ru",19],["nova.rambler.ru",19],["pikabu.ru",[19,28]],["24smi.org",20],["gismeteo.by",21],["gismeteo.kz",21],["gismeteo.md",21],["gismeteo.ru",21],["razlozhi.ru",22],["f1comp.ru",23],["tagaev.com",23],["times.zt.ua",23],["sinoptik.ua",[24,96]],["porngames.su",25],["rintor.info",25],["rintor.net",25],["castle-tv.com",26],["100popugaev.ru",27],["coderlessons.com",27],["fixx.one",27],["its-kids.ru",27],["molitvy.guru",27],["nizhny.ru",27],["pro100hobbi.ru",27],["publy.ru",27],["samelectric.ru",27],["svadba.expert",27],["tehnobzor.ru",[27,76]],["vibir.ru",27],["3dnews.kz",28],["3dnews.ru",28],["avtovzglyad.ru",28],["baby.ru",28],["dni.ru",28],["mamba.ru",28],["pogoda.onliner.by",28],["selflib.me",28],["sports.ru",[28,40]],["tech.onliner.by",28],["www.goha.ru",28],["forum.overclockers.ua",30],["kufar.by",31],["bstudy.net",32],["ozlib.com",32],["studbooks.net",32],["studme.org",32],["studref.com",32],["studwood.net",32],["vuzlit.com",32],["xstud.org",32],["vgtimes.ru",33],["upload.ee",34],["footboom.com",[35,65]],["footboom.kz",[35,65]],["electric-house.ru",36],["stroi-help.ru",36],["freehat.cc",[37,81]],["agroreview.com",38],["amazinghis.ru",39],["moj-pes.ru",39],["shrlink.top",41],["friends.in.ua",[42,53]],["gidonline.eu",[42,88]],["vprognoze.ru",43],["terrikon.com",44],["medicina.ua",45],["overclockers.ru",46],["zaruba.fun",47],["ritsatv.ru",48],["vesti.ua",49],["gazeta.ru",[50,64,70]],["kolizhanka.com.ua",[51,52,79]],["gra-prestoliv.in.ua",53],["simpsonsua.tv",53],["pravvest.ru",54],["dclans.ru",55],["animevost.org",56],["animevost.site",56],["animevost.top",56],["doefiratv.info",56],["payeer-gift.ru",56],["sinema.top",56],["smotret-anime-365.ru",56],["turkish-tv-series.ru",[56,61,68]],["ufchgu.ru",56],["vost.pw",56],["xn--b1aew.xn--p1ai",[56,57,58,59,60,62,63]],["my-expert.ru",59],["kinozapas.co",66],["livesx.online",66],["xn--80aikhbrhr.xn--j1amh",66],["7ogorod.ru",67],["autonevod.ru",67],["shtrafsud.ru",67],["tophallclub.ru",67],["zazloo.ru",67],["championat.com",68],["doramy.club",68],["musify.club",69],["dota2.ru",71],["elitesnooker.com",72],["astrakhan.ru",73],["myjane.ru",73],["omskpress.ru",73],["tambovnet.org",73],["daz3d.ru",74],["studizba.com",75],["asteriatm.ru",76],["sudya-dredd.ru",[76,86]],["anime-chan.me",[77,85]],["city.ogo.ua",78],["it-actual.ru",80],["dofilms.ru",81],["hlamer.ru",81],["lostpix.com",81],["potokcdn.com",81],["prostoporno.help",81],["saltday.ru",81],["uploadimagex.com",81],["wowskill.ru",81],["xittv.net",81],["zab.ru",83],["tapochek.net",[84,97]],["bryansknovosti.ru",86],["novozybkov.su",86],["moremania.info",87],["kinogo.eu",88],["1informer.com",89],["fainaidea.com",89],["itech.co.ua",89],["mediasat.info",89],["root-nation.com",89],["fssp.gov.ru",90],["liveforums.ru",91],["onlineclass.space",92],["nsportal.ru",93],["animekun.ru",94],["doramakun.ru",94],["vestivrn.ru",95],["www.ukr.net",96],["4studio.com.ua",98],["cikavosti.com",98],["dialogs.org.ua",98],["fakty.ua",98],["gorodkiev.com.ua",98],["informator.ua",98],["kriminal.tv",98],["pingvin.pro",98],["technoportal.com.ua",98],["u-news.com.ua",98],["uanews.org.ua",98],["versii.if.ua",98],["volynpost.com",98],["bombardir.ru",99],["comp-service.kiev.ua",99],["softportal.com",100],["80-e.ru",101],["doramatv.live",101],["examenpdd.com",101],["animedia.tv",102],["animedub.ru",102],["vsetut.su",102],["ok.ru",104],["3dn.ru",105],["a-point.info",105],["addfiles.ru",105],["akkordam.ru",105],["all-for-kompa.ru",105],["asia-tv.su",105],["at.ua",105],["autosimgames.ru",105],["chernobyl-soul.com",105],["clan.su",105],["cliphq.ru",105],["coop-lands.ru",105],["db-energo.ru",105],["devdrivers.ru",105],["do.am",105],["dtva-it-rus.gq",105],["elegos.ru",105],["elektronika56.ru",105],["elektrosat.ru",105],["fon-ki.com",105],["for-gsm.ru",105],["free-dream.ru",105],["ftechedu.ru",105],["fukushima-news.ru",105],["gals.md",105],["gamesdendy.ru",105],["giginfo.ru",105],["gloria-cedric.ru",105],["goldformat.ru",105],["greenflash.su",105],["hero-empire.com",105],["igrul-ka.ru",105],["jetvis.ru",105],["krasnickij.ru",105],["krolmen.ru",105],["megaclips.net",105],["mod-rus.ru",105],["mow-portal.ru",105],["moy.su",105],["mp3songs.ru",105],["mp4android.ru",105],["my1.ru",105],["narod.ru",105],["newgames.com.ua",105],["novospasskoe-city.ru",105],["obschestvo-9999.gq",105],["omsimclub.ru",105],["online-supernatural.ru",105],["onlinestargate.ru",105],["only-paper.ru",105],["others.name",105],["pidru4nik.com",105],["pkrc.ru",105],["play-force.ru",105],["pohoronnoe-byuro.com",105],["pokatushki-pmr.ru",105],["pro-zakupki.ru",105],["project-ss.ru",105],["psxworld.ru",105],["radiodom.org",105],["rocketdockfree.ru",105],["sdr-deluxe.com",105],["skidrowcrack.ru",105],["soft-game.net",105],["stalker-gsc.ru",105],["stalker-zone.info",105],["stalkermods.ru",105],["svadbatomsk.ru",105],["techmusic.ru",105],["tes-game.ru",105],["torfiles.ru",105],["torm-egan.ru",105],["torrent-file.top",105],["ucoz.club",105],["ucoz.com",105],["ucoz.net",105],["ucoz.org",105],["ucoz.ru",105],["ucoz.ua",105],["usite.pro",105],["vodopads.ru",105],["vsthouse.ru",105],["warcraftda.ru",105],["xakevsoft.ru",105],["xn--80aeshkkbdj.xn--p1ai",105],["yaminecraft.ru",105],["zona-stalkera.ru",105]]);

const entitiesMap = new Map([["porno365",103]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function abortOnPropertyRead(
    chain = ''
) {
    if ( typeof chain !== 'string' ) { return; }
    if ( chain === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('abort-on-property-read', chain);
    const exceptionToken = getExceptionToken();
    const abort = function() {
        safe.uboLog(logPrefix, 'Aborted');
        throw new ReferenceError(exceptionToken);
    };
    const makeProxy = function(owner, chain) {
        const pos = chain.indexOf('.');
        if ( pos === -1 ) {
            const desc = Object.getOwnPropertyDescriptor(owner, chain);
            if ( !desc || desc.get !== abort ) {
                Object.defineProperty(owner, chain, {
                    get: abort,
                    set: function(){}
                });
            }
            return;
        }
        const prop = chain.slice(0, pos);
        let v = owner[prop];
        chain = chain.slice(pos + 1);
        if ( v ) {
            makeProxy(v, chain);
            return;
        }
        const desc = Object.getOwnPropertyDescriptor(owner, prop);
        if ( desc && desc.set !== undefined ) { return; }
        Object.defineProperty(owner, prop, {
            get: function() { return v; },
            set: function(a) {
                v = a;
                if ( a instanceof Object ) {
                    makeProxy(a, chain);
                }
            }
        });
    };
    const owner = window;
    makeProxy(owner, chain);
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
    try { abortOnPropertyRead(...argsList[i]); }
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
    return uBOL_abortOnPropertyRead();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_abortOnPropertyRead = cloneInto([
            [ '(', uBOL_abortOnPropertyRead.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_abortOnPropertyRead);
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
    delete page.uBOL_abortOnPropertyRead;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
