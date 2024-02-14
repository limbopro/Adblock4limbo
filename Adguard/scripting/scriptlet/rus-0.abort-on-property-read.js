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

const argsList = [["ABNS"],["AdbBanner"],["CTRManager.host3"],["ClickUndercookie"],["Date.prototype.toUTCString"],["Groups.showDisclaimer"],["Light.Popup"],["MarketFeed"],["Object.prototype.AdfoxXhrRequestPrepared"],["Object.prototype.Metrika"],["Object.prototype.YA_TURBO_PAGES"],["Object.prototype._getBanner"],["Object.prototype._isAutostartQueueSet"],["Object.prototype.bannerOptions"],["Object.prototype.brandingBlock"],["Object.prototype.direct"],["Object.prototype.fakeDetect"],["Object.prototype.getAdUsageStorage"],["Object.prototype.initOnPlay"],["Object.prototype.isApplySticky"],["Object.prototype.loadBanner"],["Object.prototype.render"],["Object.prototype.scriptsViaXhr"],["Object.prototype.yaContextCb"],["PUM.getPopup"],["SIN.AdsLoader"],["TotemToolsObject"],["WebSocket"],["XMLHttpRequest"],["Ya"],["__vasActiveTestIds"],["a_urls"],["aab"],["abl"],["adblock_availability_check"],["adcashMacros"],["admiral"],["ads"],["advFirstClickOpenNewTab"],["advanced_ads_ready"],["anOptions"],["antiadblockCallback"],["app_vars.force_disable_adblock"],["atob"],["bannersBillboard"],["bdy"],["blocked_action"],["cardinals"],["clickNS4"],["console.clear"],["createAds"],["creepyVideo"],["disable_copy"],["disable_hot_keys"],["document.addEventListener"],["document.body.oncopy"],["document.getElementById","mdl_adb"],["document.oncontextmenu"],["document.oncopy"],["document.ondragend"],["document.ondragstart"],["document.ondrop"],["document.onkeydown"],["document.onpaste"],["document.onselectstart"],["eaglePlayerPlugins.autoplay_position"],["echelon"],["forTheFreeVideo.css"],["fpm_attr"],["getSelection"],["get_ya_browser"],["goTolink"],["helpUsImproveSite"],["initsnow"],["kav_cn"],["lftrght"],["m205"],["mdpDeBlocker"],["move_string"],["myatu_bgm"],["nocontext"],["onload"],["open"],["preventSelection"],["scrollw"],["setsnow"],["sparkle"],["stopPrntScr"],["t364_initPopup"],["target_script"],["td_ad_background_click_target"],["tingle"],["tnAdditionalParams"],["unSelect"],["updateDownloadLinks"],["utarget_script"],["video.preroll"],["vpb"],["web_script"],["weekCallbacks"],["window.alert"],["window.block"],["yaContextCb"],["zfgformats"],["bc_blocks"],["globalAuthLoginPopupCounter"],["u_global_data"]];

const hostnamesMap = new Map([["liveball.cc",0],["liveball.uno",0],["htmlweb.ru",1],["fapreactor.com",2],["joyreactor.cc",2],["pornreactor.cc",2],["reactor.cc",2],["anifap.com",3],["anipoisk.org",3],["anitokyo.tv",3],["hcdn.online",3],["kinofilm.co",3],["comedy-radio.ru",[4,30]],["radioromantika.ru",[4,30]],["relax-fm.ru",[4,30]],["rg.ru",[4,102]],["sm.news",[4,29,32,83]],["ura.news",[4,102]],["veseloeradio.ru",[4,30]],["www.e1.ru",[4,14]],["vk.com",5],["vk.ru",5],["rutor.org",6],["ya.ru",7],["drive2.ru",[8,23]],["liveinternet.ru",[9,10]],["yap.ru",9],["yaplakal.com",9],["lena-miro.ru",11],["levik.blog",11],["livejournal.com",11],["olegmakarenko.ru",11],["periskop.su",11],["shakko.ru",11],["shiro-kino.ru",11],["vadimrazumov.ru",11],["rbc.ru",[12,19]],["www.kinopoisk.ru",13],["gorodrabot.by",15],["gorodrabot.ru",15],["fishki.net",16],["reshu.by",17],["reshuent.kz",17],["reshuolymp.ru",17],["sdamgia.ru",17],["gdespaces.com",18],["gdespaces.net",18],["google-cloud.services",18],["spac.me",18],["spac.run",18],["spac.wtf",18],["spac1.com",18],["spac1.info",18],["spac1.me",18],["spac1.net",18],["spac1.org",18],["spac1.ru",18],["spaces-blogs.com",18],["spaces.im",18],["spcs-files.xyz",18],["spcs.bio",18],["spcs.global",18],["spcs.life",18],["spcs.me",18],["spcs.network",18],["spcs.news",18],["spcs.pro",18],["spcs.pub",18],["spcs.reviews",18],["spcs.social",18],["strip2.in",18],["strip2.xxx",18],["usersporn.com",18],["e1.ru",20],["nova.rambler.ru",20],["pikabu.ru",[20,29]],["24smi.org",21],["gismeteo.by",22],["gismeteo.kz",22],["gismeteo.md",22],["gismeteo.ru",22],["razlozhi.ru",23],["f1comp.ru",24],["tagaev.com",24],["times.zt.ua",24],["sinoptik.ua",[25,97]],["porngames.su",26],["rintor.info",26],["rintor.net",26],["castle-tv.com",27],["100popugaev.ru",28],["coderlessons.com",28],["fixx.one",28],["its-kids.ru",28],["molitvy.guru",28],["nizhny.ru",28],["pro100hobbi.ru",28],["publy.ru",28],["samelectric.ru",28],["svadba.expert",28],["tehnobzor.ru",[28,77]],["vibir.ru",28],["3dnews.kz",29],["3dnews.ru",29],["avtovzglyad.ru",29],["baby.ru",29],["dni.ru",29],["mamba.ru",29],["pogoda.onliner.by",29],["selflib.me",29],["sports.ru",[29,41]],["tech.onliner.by",29],["www.goha.ru",29],["forum.overclockers.ua",31],["kufar.by",32],["bstudy.net",33],["ozlib.com",33],["studbooks.net",33],["studme.org",33],["studref.com",33],["studwood.net",33],["vuzlit.com",33],["xstud.org",33],["vgtimes.ru",34],["upload.ee",35],["footboom.com",[36,66]],["footboom.kz",[36,66]],["electric-house.ru",37],["stroi-help.ru",37],["freehat.cc",[38,82]],["agroreview.com",39],["amazinghis.ru",40],["moj-pes.ru",40],["shrlink.top",42],["friends.in.ua",[43,54]],["gidonline.eu",[43,89]],["vprognoze.ru",44],["terrikon.com",45],["medicina.ua",46],["overclockers.ru",47],["zaruba.fun",48],["fm-app.ru",49],["ritsatv.ru",49],["tvapp.su",49],["yootv.ru",49],["vesti.ua",50],["gazeta.ru",[51,65,71]],["kolizhanka.com.ua",[52,53,80]],["gra-prestoliv.in.ua",54],["simpsonsua.tv",54],["pravvest.ru",55],["dclans.ru",56],["animevost.org",57],["animevost.site",57],["animevost.top",57],["doefiratv.info",57],["payeer-gift.ru",57],["sinema.top",57],["smotret-anime-365.ru",57],["turkish-tv-series.ru",[57,62,69]],["ufchgu.ru",57],["vost.pw",57],["xn--b1aew.xn--p1ai",[57,58,59,60,61,63,64]],["my-expert.ru",60],["kinozapas.co",67],["livesx.online",67],["xn--80aikhbrhr.xn--j1amh",67],["7ogorod.ru",68],["autonevod.ru",68],["shtrafsud.ru",68],["tophallclub.ru",68],["zazloo.ru",68],["championat.com",69],["doramy.club",69],["musify.club",70],["dota2.ru",72],["elitesnooker.com",73],["astrakhan.ru",74],["myjane.ru",74],["omskpress.ru",74],["tambovnet.org",74],["daz3d.ru",75],["studizba.com",76],["asteriatm.ru",77],["sudya-dredd.ru",[77,87]],["anime-chan.me",[78,86]],["city.ogo.ua",79],["it-actual.ru",81],["hlamer.ru",82],["lostpix.com",82],["otfilm.ru",82],["potokcdn.com",82],["prostoporno.help",82],["saltday.ru",82],["uploadimagex.com",82],["wowskill.ru",82],["xittv.net",82],["zab.ru",84],["tapochek.net",[85,98]],["bryansknovosti.ru",87],["novozybkov.su",87],["moremania.info",88],["kinogo.eu",89],["1informer.com",90],["fainaidea.com",90],["itech.co.ua",90],["mediasat.info",90],["root-nation.com",90],["fssp.gov.ru",91],["liveforums.ru",92],["onlineclass.space",93],["nsportal.ru",94],["animekun.ru",95],["doramakun.ru",95],["vestivrn.ru",96],["www.ukr.net",97],["4studio.com.ua",99],["cikavosti.com",99],["dialogs.org.ua",99],["fakty.ua",99],["gorodkiev.com.ua",99],["informator.ua",99],["kriminal.tv",99],["pingvin.pro",99],["technoportal.com.ua",99],["u-news.com.ua",99],["uanews.org.ua",99],["versii.if.ua",99],["volynpost.com",99],["bombardir.ru",100],["comp-service.kiev.ua",100],["softportal.com",101],["80-e.ru",102],["doramatv.live",102],["examenpdd.com",102],["animedia.tv",103],["animedub.ru",103],["vsetut.su",103],["ok.ru",105],["3dn.ru",106],["a-point.info",106],["addfiles.ru",106],["akkordam.ru",106],["all-for-kompa.ru",106],["asia-tv.su",106],["at.ua",106],["autosimgames.ru",106],["chernobyl-soul.com",106],["clan.su",106],["cliphq.ru",106],["coop-lands.ru",106],["db-energo.ru",106],["devdrivers.ru",106],["do.am",106],["dtva-it-rus.gq",106],["elegos.ru",106],["elektronika56.ru",106],["elektrosat.ru",106],["fon-ki.com",106],["for-gsm.ru",106],["free-dream.ru",106],["ftechedu.ru",106],["fukushima-news.ru",106],["gals.md",106],["gamesdendy.ru",106],["giginfo.ru",106],["gloria-cedric.ru",106],["goldformat.ru",106],["greenflash.su",106],["hero-empire.com",106],["igrul-ka.ru",106],["jetvis.ru",106],["krasnickij.ru",106],["krolmen.ru",106],["megaclips.net",106],["mod-rus.ru",106],["mow-portal.ru",106],["moy.su",106],["mp3songs.ru",106],["mp4android.ru",106],["my1.ru",106],["narod.ru",106],["newgames.com.ua",106],["novospasskoe-city.ru",106],["obschestvo-9999.gq",106],["omsimclub.ru",106],["online-supernatural.ru",106],["onlinestargate.ru",106],["only-paper.ru",106],["others.name",106],["pidru4nik.com",106],["pkrc.ru",106],["play-force.ru",106],["pohoronnoe-byuro.com",106],["pokatushki-pmr.ru",106],["pro-zakupki.ru",106],["project-ss.ru",106],["psxworld.ru",106],["radiodom.org",106],["rocketdockfree.ru",106],["sdr-deluxe.com",106],["skidrowcrack.ru",106],["soft-game.net",106],["stalker-gsc.ru",106],["stalker-zone.info",106],["stalkermods.ru",106],["svadbatomsk.ru",106],["techmusic.ru",106],["tes-game.ru",106],["torfiles.ru",106],["torm-egan.ru",106],["torrent-file.top",106],["ucoz.club",106],["ucoz.com",106],["ucoz.net",106],["ucoz.org",106],["ucoz.ru",106],["ucoz.ua",106],["usite.pro",106],["vodopads.ru",106],["vsthouse.ru",106],["warcraftda.ru",106],["xakevsoft.ru",106],["xn--80aeshkkbdj.xn--p1ai",106],["yaminecraft.ru",106],["zona-stalkera.ru",106]]);

const entitiesMap = new Map([["porno365",104]]);

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
