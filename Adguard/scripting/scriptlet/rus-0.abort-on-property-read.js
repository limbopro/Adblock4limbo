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

/* eslint-disable indent */
/* global cloneInto */

// ruleset: rus-0

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_abortOnPropertyRead = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["ABNS"],["AdbBanner"],["CTRManager.host3"],["ClickUndercookie"],["Date.prototype.toUTCString"],["Groups.showDisclaimer"],["Light.Popup"],["MarketFeed"],["Object.prototype.AdfoxXhrRequestPrepared"],["Object.prototype.Metrika"],["Object.prototype.YA_TURBO_PAGES"],["Object.prototype._getBanner"],["Object.prototype._isAutostartQueueSet"],["Object.prototype.bannerOptions"],["Object.prototype.direct"],["Object.prototype.fakeDetect"],["Object.prototype.getAdUsageStorage"],["Object.prototype.initOnPlay"],["Object.prototype.isApplySticky"],["Object.prototype.loadBanner"],["Object.prototype.render"],["Object.prototype.scriptsViaXhr"],["Object.prototype.yaContextCb"],["PUM.getPopup"],["Radish"],["SIN.AdsLoader"],["TotemToolsObject"],["WebSocket"],["XMLHttpRequest"],["Ya"],["__vasActiveTestIds"],["a_urls"],["aab"],["abl"],["adblock_availability_check"],["adcashMacros"],["admiral"],["ads"],["advFirstClickOpenNewTab"],["advanced_ads_ready"],["anOptions"],["antiadblockCallback"],["app_vars.force_disable_adblock"],["as_retry"],["atob"],["bannersBillboard"],["bdy"],["blocked_action"],["clickNS4"],["console.clear"],["disable_copy"],["disable_hot_keys"],["document.addEventListener"],["document.body.oncopy"],["document.getElementById","mdl_adb"],["document.oncontextmenu"],["document.oncopy"],["document.ondragend"],["document.ondragstart"],["document.ondrop"],["document.onkeydown"],["document.onpaste"],["document.onselectstart"],["eaglePlayerPlugins.autoplay_position"],["echelon"],["forTheFreeVideo.css"],["fpm_attr"],["getSelection"],["get_ya_browser"],["goTolink"],["helpUsImproveSite"],["initsnow"],["kav_cn"],["lftrght"],["localStorage"],["m205"],["mdpDeBlocker"],["move_string"],["myatu_bgm"],["nocontext"],["onload"],["open"],["preventSelection"],["scrollw"],["setsnow"],["sparkle"],["stopPrntScr"],["t364_initPopup"],["target_script"],["td_ad_background_click_target"],["tingle"],["tnAdditionalParams"],["unSelect"],["updateDownloadLinks"],["utarget_script"],["video.preroll"],["vpb"],["web_script"],["weekCallbacks"],["window.alert"],["window.block"],["wrapper.addEventListener"],["yaContextCb"],["zfgformats"],["bc_blocks"],["globalAuthLoginPopupCounter"],["u_global_data"]];

const hostnamesMap = new Map([["liveball.cc",0],["liveball.uno",0],["htmlweb.ru",1],["fapreactor.com",2],["joyreactor.cc",2],["pornreactor.cc",2],["reactor.cc",2],["anifap.com",3],["anipoisk.org",3],["anitokyo.org",3],["anitokyo.tv",3],["hcdn.online",3],["kinofilm.co",3],["comedy-radio.ru",[4,30]],["radioromantika.ru",[4,30]],["relax-fm.ru",[4,30]],["rg.ru",[4,102]],["sm.news",[4,29,32,82]],["ura.news",[4,102]],["veseloeradio.ru",[4,30]],["www.e1.ru",4],["vk.com",5],["vk.ru",5],["rutor.org",6],["ya.ru",7],["drive2.ru",[8,22]],["liveinternet.ru",[9,10]],["yap.ru",9],["yaplakal.com",9],["lena-miro.ru",11],["levik.blog",11],["livejournal.com",11],["olegmakarenko.ru",11],["periskop.su",11],["shakko.ru",11],["shiro-kino.ru",11],["vadimrazumov.ru",11],["rbc.ru",[12,18]],["www.kinopoisk.ru",13],["gorodrabot.by",14],["gorodrabot.ru",14],["fishki.net",15],["reshu.by",16],["reshuent.kz",16],["reshuolymp.ru",16],["sdamgia.ru",16],["gdespaces.com",17],["gdespaces.net",17],["google-cloud.services",17],["spac.me",17],["spac.run",17],["spac.wtf",17],["spac1.com",17],["spac1.info",17],["spac1.me",17],["spac1.net",17],["spac1.org",17],["spac1.ru",17],["spaces-blogs.com",17],["spaces.im",17],["spcs-files.xyz",17],["spcs.bio",17],["spcs.global",17],["spcs.life",17],["spcs.me",17],["spcs.network",17],["spcs.news",17],["spcs.pro",17],["spcs.pub",17],["spcs.reviews",17],["spcs.social",17],["strip2.in",17],["strip2.xxx",17],["usersporn.com",17],["e1.ru",19],["nova.rambler.ru",19],["pikabu.ru",[19,29]],["24smi.org",20],["gismeteo.by",21],["gismeteo.kz",21],["gismeteo.ru",21],["razlozhi.ru",22],["f1comp.ru",23],["tagaev.com",23],["times.zt.ua",23],["gencit.info",24],["sinoptik.ua",[25,96]],["porngames.su",26],["rintor.info",26],["rintor.net",26],["castle-tv.com",27],["100popugaev.ru",28],["coderlessons.com",28],["fixx.one",28],["its-kids.ru",28],["molitvy.guru",28],["nizhny.ru",28],["pro100hobbi.ru",28],["publy.ru",28],["samelectric.ru",28],["svadba.expert",28],["tehnobzor.ru",[28,76]],["vibir.ru",28],["3dnews.kz",29],["3dnews.ru",29],["avtovzglyad.ru",29],["baby.ru",29],["cont.ws",29],["dni.ru",29],["mamba.ru",29],["pogoda.onliner.by",29],["selflib.me",29],["sports.ru",[29,41]],["tech.onliner.by",29],["www.goha.ru",29],["forum.overclockers.ua",31],["kufar.by",32],["bstudy.net",33],["ozlib.com",33],["studbooks.net",33],["studme.org",33],["studref.com",33],["studwood.net",33],["vuzlit.com",33],["xstud.org",33],["vgtimes.ru",34],["upload.ee",35],["footboom.com",[36,64]],["footboom.kz",[36,64]],["electric-house.ru",37],["freehat.cc",[38,81]],["agroreview.com",39],["amazinghis.ru",40],["moj-pes.ru",40],["shrlink.top",42],["eurointegration.com.ua",43],["pravda.com.ua",43],["friends.in.ua",[44,52]],["gidonline.eu",[44,88]],["vprognoze.ru",45],["terrikon.com",46],["medicina.ua",47],["zaruba.fun",48],["fm-app.ru",49],["ritsatv.ru",49],["tvapp.su",49],["yootv.ru",49],["kolizhanka.com.ua",[50,51,79]],["gra-prestoliv.in.ua",52],["simpsonsua.tv",52],["pravvest.ru",53],["dclans.ru",54],["animevost.org",55],["animevost.site",55],["animevost.top",55],["doefiratv.info",55],["payeer-gift.ru",55],["smotret-anime-365.ru",55],["turkish-tv-series.ru",[55,60,67]],["ufchgu.ru",55],["vost.pw",55],["xn--b1aew.xn--p1ai",[55,56,57,58,59,61,62]],["my-expert.ru",58],["gazeta.ru",[63,69]],["kinozapas.co",65],["livesx.online",65],["xn--80aikhbrhr.xn--j1amh",65],["7ogorod.ru",66],["autonevod.ru",66],["shtrafsud.ru",66],["tophallclub.ru",66],["zazloo.ru",66],["championat.com",67],["doramy.club",67],["musify.club",68],["dota2.ru",70],["elitesnooker.com",71],["astrakhan.ru",72],["myjane.ru",72],["omskpress.ru",72],["tambovnet.org",72],["daz3d.ru",73],["dorama.land",74],["doramaland.me",74],["players.com.ua",74],["studizba.com",75],["asteriatm.ru",76],["sudya-dredd.ru",[76,86]],["anime-chan.me",[77,85]],["city.ogo.ua",78],["it-actual.ru",80],["hlamer.ru",81],["lostpix.com",81],["potokcdn.com",81],["prostoporno.help",81],["saltday.ru",81],["uploadimagex.com",81],["wowskill.ru",81],["xittv.net",81],["zab.ru",83],["tapochek.net",[84,97]],["bryansknovosti.ru",86],["novozybkov.su",86],["moremania.info",87],["kinogo.eu",88],["1informer.com",89],["fainaidea.com",89],["itech.co.ua",89],["mediasat.info",89],["root-nation.com",89],["fssp.gov.ru",90],["liveforums.ru",91],["onlineclass.space",92],["nsportal.ru",93],["animekun.ru",94],["doramakun.ru",94],["vestivrn.ru",95],["www.ukr.net",96],["4studio.com.ua",98],["cikavosti.com",98],["dialogs.org.ua",98],["fakty.ua",98],["gorodkiev.com.ua",98],["informator.ua",98],["kriminal.tv",98],["pingvin.pro",98],["technoportal.com.ua",98],["u-news.com.ua",98],["uanews.org.ua",98],["volynpost.com",98],["bombardir.ru",99],["comp-service.kiev.ua",99],["inforesist.org",99],["www.xcom-shop.ru",99],["softportal.com",100],["tornado.3dn.ru",101],["80-e.ru",102],["doramatv.live",102],["examenpdd.com",102],["animedia.tv",103],["animedub.ru",103],["vsetut.su",103],["ok.ru",105],["3dn.ru",106],["a-point.info",106],["addfiles.ru",106],["akkordam.ru",106],["all-for-kompa.ru",106],["asia-tv.su",106],["at.ua",106],["autosimgames.ru",106],["clan.su",106],["db-energo.ru",106],["devdrivers.ru",106],["do.am",106],["elegos.ru",106],["elektronika56.ru",106],["elektrosat.ru",106],["fon-ki.com",106],["for-gsm.ru",106],["free-dream.ru",106],["ftechedu.ru",106],["fukushima-news.ru",106],["gals.md",106],["gloria-cedric.ru",106],["goldformat.ru",106],["greenflash.su",106],["igrul-ka.ru",106],["krasnickij.ru",106],["krolmen.ru",106],["megaclips.net",106],["mow-portal.ru",106],["moy.su",106],["my1.ru",106],["narod.ru",106],["newgames.com.ua",106],["novospasskoe-city.ru",106],["omsimclub.ru",106],["online-supernatural.ru",106],["only-paper.ru",106],["others.name",106],["pidru4nik.com",106],["pkrc.ru",106],["play-force.ru",106],["pohoronnoe-byuro.com",106],["pokatushki-pmr.ru",106],["pro-zakupki.ru",106],["project-ss.ru",106],["psxworld.ru",106],["radiodom.org",106],["rocketdockfree.ru",106],["sdr-deluxe.com",106],["soft-game.net",106],["stalker-gsc.ru",106],["stalker-zone.info",106],["stalkermods.ru",106],["svadbatomsk.ru",106],["techmusic.ru",106],["tes-game.ru",106],["torfiles.ru",106],["ucoz.club",106],["ucoz.com",106],["ucoz.net",106],["ucoz.org",106],["ucoz.ru",106],["ucoz.ua",106],["usite.pro",106],["vodopads.ru",106],["vsthouse.ru",106],["xakevsoft.ru",106],["xn--80aeshkkbdj.xn--p1ai",106],["yaminecraft.ru",106],["zona-stalkera.ru",106]]);

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
    const token = getRandomToken();
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
                return { matchAll: true, expect: true };
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
        offIdle(id) {
            if ( self.requestIdleCallback ) {
                return self.cancelIdleCallback(id);
            }
            return self.cancelAnimationFrame(id);
        }
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

function getRandomToken() {
    const safe = safeSelf();
    return safe.String_fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
}

/******************************************************************************/

const hnParts = [];
try {
    let origin = document.location.origin;
    if ( origin === 'null' ) {
        const origins = document.location.ancestorOrigins;
        for ( let i = 0; i < origins.length; i++ ) {
            origin = origins[i];
            if ( origin !== 'null' ) { break; }
        }
    }
    const pos = origin.lastIndexOf('://');
    if ( pos === -1 ) { return; }
    hnParts.push(...origin.slice(pos+3).split('.'));
}
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
