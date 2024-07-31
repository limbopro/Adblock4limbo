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

const argsList = [["ABNS"],["AdbBanner"],["CTRManager.host3"],["ClickUndercookie"],["Date.prototype.toUTCString"],["Groups.showDisclaimer"],["Light.Popup"],["MarketFeed"],["Object.prototype.AdfoxXhrRequestPrepared"],["Object.prototype.Metrika"],["Object.prototype.YA_TURBO_PAGES"],["Object.prototype._getBanner"],["Object.prototype._isAutostartQueueSet"],["Object.prototype.bannerOptions"],["Object.prototype.direct"],["Object.prototype.fakeDetect"],["Object.prototype.getAdUsageStorage"],["Object.prototype.initOnPlay"],["Object.prototype.isApplySticky"],["Object.prototype.loadBanner"],["Object.prototype.render"],["Object.prototype.scriptsViaXhr"],["Object.prototype.yaContextCb"],["PUM.getPopup"],["SIN.AdsLoader"],["TotemToolsObject"],["WebSocket"],["XMLHttpRequest"],["Ya"],["__vasActiveTestIds"],["a_urls"],["aab"],["abl"],["adblock_availability_check"],["adcashMacros"],["admiral"],["ads"],["advFirstClickOpenNewTab"],["advanced_ads_ready"],["anOptions"],["antiadblockCallback"],["app_vars.force_disable_adblock"],["atob"],["bannersBillboard"],["bdy"],["blocked_action"],["clickNS4"],["console.clear"],["disable_copy"],["disable_hot_keys"],["document.addEventListener"],["document.body.oncopy"],["document.getElementById","mdl_adb"],["document.oncontextmenu"],["document.oncopy"],["document.ondragend"],["document.ondragstart"],["document.ondrop"],["document.onkeydown"],["document.onpaste"],["document.onselectstart"],["eaglePlayerPlugins.autoplay_position"],["echelon"],["forTheFreeVideo.css"],["fpm_attr"],["getSelection"],["get_ya_browser"],["goTolink"],["helpUsImproveSite"],["initsnow"],["kav_cn"],["lftrght"],["localStorage"],["m205"],["mdpDeBlocker"],["move_string"],["myatu_bgm"],["nocontext"],["onload"],["open"],["preventSelection"],["scrollw"],["setsnow"],["sparkle"],["stopPrntScr"],["t364_initPopup"],["target_script"],["td_ad_background_click_target"],["tingle"],["tnAdditionalParams"],["unSelect"],["updateDownloadLinks"],["utarget_script"],["video.preroll"],["vpb"],["web_script"],["weekCallbacks"],["window.alert"],["window.block"],["wrapper.addEventListener"],["yaContextCb"],["zfgformats"],["bc_blocks"],["globalAuthLoginPopupCounter"],["u_global_data"]];

const hostnamesMap = new Map([["liveball.cc",0],["liveball.uno",0],["htmlweb.ru",1],["fapreactor.com",2],["joyreactor.cc",2],["pornreactor.cc",2],["reactor.cc",2],["anifap.com",3],["anipoisk.org",3],["anitokyo.org",3],["anitokyo.tv",3],["hcdn.online",3],["kinofilm.co",3],["comedy-radio.ru",[4,29]],["radioromantika.ru",[4,29]],["relax-fm.ru",[4,29]],["rg.ru",[4,100]],["sm.news",[4,28,31,80]],["ura.news",[4,100]],["veseloeradio.ru",[4,29]],["www.e1.ru",4],["vk.com",5],["vk.ru",5],["rutor.org",6],["ya.ru",7],["drive2.ru",[8,22]],["liveinternet.ru",[9,10]],["yap.ru",9],["yaplakal.com",9],["lena-miro.ru",11],["levik.blog",11],["livejournal.com",11],["olegmakarenko.ru",11],["periskop.su",11],["shakko.ru",11],["shiro-kino.ru",11],["vadimrazumov.ru",11],["rbc.ru",[12,18]],["www.kinopoisk.ru",13],["gorodrabot.by",14],["gorodrabot.ru",14],["fishki.net",15],["reshu.by",16],["reshuent.kz",16],["reshuolymp.ru",16],["sdamgia.ru",16],["gdespaces.com",17],["gdespaces.net",17],["google-cloud.services",17],["spac.me",17],["spac.run",17],["spac.wtf",17],["spac1.com",17],["spac1.info",17],["spac1.me",17],["spac1.net",17],["spac1.org",17],["spac1.ru",17],["spaces-blogs.com",17],["spaces.im",17],["spcs-files.xyz",17],["spcs.bio",17],["spcs.global",17],["spcs.life",17],["spcs.me",17],["spcs.network",17],["spcs.news",17],["spcs.pro",17],["spcs.pub",17],["spcs.reviews",17],["spcs.social",17],["strip2.in",17],["strip2.xxx",17],["usersporn.com",17],["e1.ru",19],["nova.rambler.ru",19],["pikabu.ru",[19,28]],["24smi.org",20],["gismeteo.by",21],["gismeteo.kz",21],["gismeteo.ru",21],["razlozhi.ru",22],["f1comp.ru",23],["tagaev.com",23],["times.zt.ua",23],["sinoptik.ua",[24,94]],["porngames.su",25],["rintor.info",25],["rintor.net",25],["castle-tv.com",26],["100popugaev.ru",27],["coderlessons.com",27],["fixx.one",27],["its-kids.ru",27],["molitvy.guru",27],["nizhny.ru",27],["pro100hobbi.ru",27],["publy.ru",27],["samelectric.ru",27],["svadba.expert",27],["tehnobzor.ru",[27,74]],["vibir.ru",27],["3dnews.kz",28],["3dnews.ru",28],["avtovzglyad.ru",28],["baby.ru",28],["dni.ru",28],["mamba.ru",28],["pogoda.onliner.by",28],["selflib.me",28],["sports.ru",[28,40]],["tech.onliner.by",28],["www.goha.ru",28],["forum.overclockers.ua",30],["kufar.by",31],["bstudy.net",32],["ozlib.com",32],["studbooks.net",32],["studme.org",32],["studref.com",32],["studwood.net",32],["vuzlit.com",32],["xstud.org",32],["vgtimes.ru",33],["upload.ee",34],["footboom.com",[35,62]],["footboom.kz",[35,62]],["electric-house.ru",36],["freehat.cc",[37,79]],["agroreview.com",38],["amazinghis.ru",39],["moj-pes.ru",39],["shrlink.top",41],["friends.in.ua",[42,50]],["gidonline.eu",[42,86]],["vprognoze.ru",43],["terrikon.com",44],["medicina.ua",45],["zaruba.fun",46],["fm-app.ru",47],["ritsatv.ru",47],["tvapp.su",47],["yootv.ru",47],["kolizhanka.com.ua",[48,49,77]],["gra-prestoliv.in.ua",50],["simpsonsua.tv",50],["pravvest.ru",51],["dclans.ru",52],["animevost.org",53],["animevost.site",53],["animevost.top",53],["doefiratv.info",53],["payeer-gift.ru",53],["smotret-anime-365.ru",53],["turkish-tv-series.ru",[53,58,65]],["ufchgu.ru",53],["vost.pw",53],["xn--b1aew.xn--p1ai",[53,54,55,56,57,59,60]],["my-expert.ru",56],["gazeta.ru",[61,67]],["kinozapas.co",63],["livesx.online",63],["xn--80aikhbrhr.xn--j1amh",63],["7ogorod.ru",64],["autonevod.ru",64],["shtrafsud.ru",64],["tophallclub.ru",64],["zazloo.ru",64],["championat.com",65],["doramy.club",65],["musify.club",66],["dota2.ru",68],["elitesnooker.com",69],["astrakhan.ru",70],["myjane.ru",70],["omskpress.ru",70],["tambovnet.org",70],["daz3d.ru",71],["dorama.land",72],["doramaland.me",72],["players.com.ua",72],["studizba.com",73],["asteriatm.ru",74],["sudya-dredd.ru",[74,84]],["anime-chan.me",[75,83]],["city.ogo.ua",76],["it-actual.ru",78],["hlamer.ru",79],["lostpix.com",79],["potokcdn.com",79],["prostoporno.help",79],["saltday.ru",79],["uploadimagex.com",79],["wowskill.ru",79],["xittv.net",79],["zab.ru",81],["tapochek.net",[82,95]],["bryansknovosti.ru",84],["novozybkov.su",84],["moremania.info",85],["kinogo.eu",86],["1informer.com",87],["fainaidea.com",87],["itech.co.ua",87],["mediasat.info",87],["root-nation.com",87],["fssp.gov.ru",88],["liveforums.ru",89],["onlineclass.space",90],["nsportal.ru",91],["animekun.ru",92],["doramakun.ru",92],["vestivrn.ru",93],["www.ukr.net",94],["4studio.com.ua",96],["cikavosti.com",96],["dialogs.org.ua",96],["fakty.ua",96],["gorodkiev.com.ua",96],["informator.ua",96],["kriminal.tv",96],["pingvin.pro",96],["technoportal.com.ua",96],["u-news.com.ua",96],["uanews.org.ua",96],["volynpost.com",96],["bombardir.ru",97],["comp-service.kiev.ua",97],["inforesist.org",97],["softportal.com",98],["tornado.3dn.ru",99],["80-e.ru",100],["doramatv.live",100],["examenpdd.com",100],["animedia.tv",101],["animedub.ru",101],["vsetut.su",101],["ok.ru",103],["3dn.ru",104],["a-point.info",104],["addfiles.ru",104],["akkordam.ru",104],["all-for-kompa.ru",104],["asia-tv.su",104],["at.ua",104],["autosimgames.ru",104],["clan.su",104],["db-energo.ru",104],["devdrivers.ru",104],["do.am",104],["elegos.ru",104],["elektronika56.ru",104],["elektrosat.ru",104],["fon-ki.com",104],["for-gsm.ru",104],["free-dream.ru",104],["ftechedu.ru",104],["fukushima-news.ru",104],["gals.md",104],["gloria-cedric.ru",104],["goldformat.ru",104],["greenflash.su",104],["igrul-ka.ru",104],["krasnickij.ru",104],["krolmen.ru",104],["megaclips.net",104],["mow-portal.ru",104],["moy.su",104],["my1.ru",104],["narod.ru",104],["newgames.com.ua",104],["novospasskoe-city.ru",104],["omsimclub.ru",104],["online-supernatural.ru",104],["only-paper.ru",104],["others.name",104],["pidru4nik.com",104],["pkrc.ru",104],["play-force.ru",104],["pohoronnoe-byuro.com",104],["pokatushki-pmr.ru",104],["pro-zakupki.ru",104],["project-ss.ru",104],["psxworld.ru",104],["radiodom.org",104],["rocketdockfree.ru",104],["sdr-deluxe.com",104],["soft-game.net",104],["stalker-gsc.ru",104],["stalker-zone.info",104],["stalkermods.ru",104],["svadbatomsk.ru",104],["techmusic.ru",104],["tes-game.ru",104],["torfiles.ru",104],["ucoz.club",104],["ucoz.com",104],["ucoz.net",104],["ucoz.org",104],["ucoz.ru",104],["ucoz.ua",104],["usite.pro",104],["vodopads.ru",104],["vsthouse.ru",104],["xakevsoft.ru",104],["xn--80aeshkkbdj.xn--p1ai",104],["yaminecraft.ru",104],["zona-stalkera.ru",104]]);

const entitiesMap = new Map([["porno365",102]]);

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
        safe.String_fromCharCode(Date.now() % 26 + 97) +
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
        'Object_defineProperties': Object.defineProperties.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String_fromCharCode': String.fromCharCode,
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
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
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
