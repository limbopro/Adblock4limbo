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

const argsList = [["ABNS"],["AdbBanner"],["CTRManager.host3"],["ClickUndercookie"],["Date.prototype.toUTCString"],["Groups.showDisclaimer"],["Light.Popup"],["Object.prototype.AdfoxXhrRequestPrepared"],["Object.prototype.Metrika"],["Object.prototype.YA_TURBO_PAGES"],["Object.prototype._getBanner"],["Object.prototype._isAutostartQueueSet"],["Object.prototype.bannerOptions"],["Object.prototype.direct"],["Object.prototype.fakeDetect"],["Object.prototype.getAdUsageStorage"],["Object.prototype.initOnPlay"],["Object.prototype.isApplySticky"],["Object.prototype.loadBanner"],["Object.prototype.render"],["Object.prototype.scriptsViaXhr"],["Object.prototype.yaContextCb"],["PUM.getPopup"],["Radish"],["SIN.AdsLoader"],["TotemToolsObject"],["WebSocket"],["XMLHttpRequest"],["Ya"],["__vasActiveTestIds"],["a_urls"],["aab"],["abl"],["adblock_availability_check"],["adcashMacros"],["adjustBackground"],["admiral"],["ads"],["advFirstClickOpenNewTab"],["advanced_ads_ready"],["anOptions"],["antiadblockCallback"],["app_vars.force_disable_adblock"],["as_retry"],["atob"],["bannersBillboard"],["bdy"],["blocked_action"],["clickNS4"],["console.clear"],["disable_copy"],["disable_hot_keys"],["document.addEventListener"],["document.body.oncopy"],["document.getElementById","mdl_adb"],["document.oncontextmenu"],["document.oncopy"],["document.ondragend"],["document.ondragstart"],["document.ondrop"],["document.onkeydown"],["document.onpaste"],["document.onselectstart"],["eaglePlayerPlugins.autoplay_position"],["echelon"],["forTheFreeVideo.css"],["fpm_attr"],["getSelection"],["get_ya_browser"],["goTolink"],["helpUsImproveSite"],["initsnow"],["kav_cn"],["lftrght"],["localStorage"],["m205"],["mdpDeBlocker"],["move_string"],["myatu_bgm"],["nocontext"],["onload"],["open"],["preventSelection"],["scrollw"],["setsnow"],["sparkle"],["stopPrntScr"],["t364_initPopup"],["target_script"],["td_ad_background_click_target"],["tingle"],["tnAdditionalParams"],["unSelect"],["updateDownloadLinks"],["utarget_script"],["video.preroll"],["vpb"],["web_script"],["weekCallbacks"],["window.alert"],["window.block"],["wpsite_clickable_data"],["wrapper.addEventListener"],["yaContextCb"],["zfgformats"],["bc_blocks"],["globalAuthLoginPopupCounter"],["u_global_data"]];

const hostnamesMap = new Map([["liveball.cc",0],["liveball.uno",0],["htmlweb.ru",1],["fapreactor.com",2],["joyreactor.cc",2],["pornreactor.cc",2],["reactor.cc",2],["anifap.com",3],["anipoisk.org",3],["anitokyo.org",3],["anitokyo.tv",3],["hcdn.online",3],["kinofilm.co",3],["comedy-radio.ru",[4,29]],["radioromantika.ru",[4,29]],["relax-fm.ru",[4,29]],["rg.ru",[4,103]],["sm.news",[4,28,31,82]],["ura.news",[4,103]],["veseloeradio.ru",[4,29]],["www.e1.ru",4],["vk.com",5],["vk.ru",5],["rutor.org",6],["drive2.ru",[7,21]],["liveinternet.ru",[8,9]],["yap.ru",8],["yaplakal.com",8],["lena-miro.ru",10],["levik.blog",10],["livejournal.com",10],["olegmakarenko.ru",10],["periskop.su",10],["shakko.ru",10],["shiro-kino.ru",10],["vadimrazumov.ru",10],["rbc.ru",[11,17]],["www.kinopoisk.ru",12],["gorodrabot.by",13],["gorodrabot.ru",13],["fishki.net",14],["reshu.by",15],["reshuent.kz",15],["reshuolymp.ru",15],["sdamgia.ru",15],["gdespaces.com",16],["gdespaces.net",16],["google-cloud.services",16],["spac.me",16],["spac.run",16],["spac.wtf",16],["spac1.com",16],["spac1.info",16],["spac1.me",16],["spac1.net",16],["spac1.org",16],["spac1.ru",16],["spaces-blogs.com",16],["spaces.im",16],["spcs-files.xyz",16],["spcs.bio",16],["spcs.global",16],["spcs.life",16],["spcs.me",16],["spcs.network",16],["spcs.news",16],["spcs.pro",16],["spcs.pub",16],["spcs.reviews",16],["spcs.social",16],["strip2.in",16],["strip2.xxx",16],["usersporn.com",16],["e1.ru",18],["nova.rambler.ru",18],["pikabu.ru",[18,28]],["24smi.org",19],["gismeteo.by",20],["gismeteo.kz",20],["gismeteo.ru",20],["razlozhi.ru",21],["f1comp.ru",22],["tagaev.com",22],["times.zt.ua",22],["gencit.info",23],["sinoptik.ua",[24,96]],["porngames.su",25],["rintor.info",25],["rintor.net",25],["castle-tv.com",26],["100popugaev.ru",27],["coderlessons.com",27],["fixx.one",27],["its-kids.ru",27],["molitvy.guru",27],["nizhny.ru",27],["pro100hobbi.ru",27],["publy.ru",27],["samelectric.ru",27],["svadba.expert",27],["tehnobzor.ru",[27,76]],["vibir.ru",27],["3dnews.kz",28],["3dnews.ru",28],["avtovzglyad.ru",28],["baby.ru",28],["cont.ws",28],["dni.ru",28],["mamba.ru",28],["pogoda.onliner.by",28],["selflib.me",28],["sports.ru",[28,41]],["tech.onliner.by",28],["www.goha.ru",28],["forum.overclockers.ua",30],["kufar.by",31],["bstudy.net",32],["ozlib.com",32],["studbooks.net",32],["studme.org",32],["studref.com",32],["studwood.net",32],["vuzlit.com",32],["xstud.org",32],["vgtimes.ru",33],["upload.ee",34],["bb.lv",35],["footboom.com",[36,64]],["footboom.kz",[36,64]],["electric-house.ru",37],["freehat.cc",[38,81]],["agroreview.com",39],["amazinghis.ru",40],["moj-pes.ru",40],["shrlink.top",42],["eurointegration.com.ua",43],["pravda.com.ua",43],["friends.in.ua",[44,52]],["gidonline.eu",[44,88]],["vprognoze.ru",45],["terrikon.com",46],["medicina.ua",47],["zaruba.fun",48],["fm-app.ru",49],["ritsatv.ru",49],["tvapp.su",49],["yootv.ru",49],["kolizhanka.com.ua",[50,51,79]],["gra-prestoliv.in.ua",52],["simpsonsua.tv",52],["pravvest.ru",53],["dclans.ru",54],["animevost.org",55],["animevost.site",55],["animevost.top",55],["doefiratv.info",55],["payeer-gift.ru",55],["smotret-anime-365.ru",55],["turkish-tv-series.ru",[55,60,67]],["ufchgu.ru",55],["vost.pw",55],["xn--b1aew.xn--p1ai",[55,56,57,58,59,61,62]],["my-expert.ru",58],["gazeta.ru",[63,69]],["kinozapas.co",65],["livesx.online",65],["xn--80aikhbrhr.xn--j1amh",65],["7ogorod.ru",66],["autonevod.ru",66],["shtrafsud.ru",66],["tophallclub.ru",66],["zazloo.ru",66],["championat.com",67],["doramy.club",67],["musify.club",68],["dota2.ru",70],["elitesnooker.com",71],["astrakhan.ru",72],["myjane.ru",72],["omskpress.ru",72],["tambovnet.org",72],["daz3d.ru",73],["dorama.land",74],["doramaland.me",74],["players.com.ua",74],["studizba.com",75],["asteriatm.ru",76],["sudya-dredd.ru",[76,86]],["anime-chan.me",[77,85]],["city.ogo.ua",78],["it-actual.ru",80],["hlamer.ru",81],["lostpix.com",81],["potokcdn.com",81],["prostoporno.help",81],["saltday.ru",81],["uploadimagex.com",81],["wowskill.ru",81],["xittv.net",81],["zab.ru",83],["tapochek.net",[84,97]],["bryansknovosti.ru",86],["novozybkov.su",86],["moremania.info",87],["kinogo.eu",88],["1informer.com",89],["fainaidea.com",89],["itech.co.ua",89],["mediasat.info",89],["root-nation.com",89],["fssp.gov.ru",90],["liveforums.ru",91],["onlineclass.space",92],["nsportal.ru",93],["animekun.ru",94],["doramakun.ru",94],["vestivrn.ru",95],["www.ukr.net",96],["4studio.com.ua",98],["cikavosti.com",98],["dialogs.org.ua",98],["fakty.ua",98],["gorodkiev.com.ua",98],["informator.ua",98],["kriminal.tv",98],["pingvin.pro",98],["technoportal.com.ua",98],["u-news.com.ua",98],["uanews.org.ua",98],["volynpost.com",98],["bombardir.ru",99],["comp-service.kiev.ua",99],["inforesist.org",99],["www.xcom-shop.ru",99],["softportal.com",100],["growhow.in.ua",101],["tornado.3dn.ru",102],["80-e.ru",103],["doramatv.live",103],["examenpdd.com",103],["animedia.tv",104],["animedub.ru",104],["vsetut.su",104],["ok.ru",106],["3dn.ru",107],["a-point.info",107],["addfiles.ru",107],["akkordam.ru",107],["all-for-kompa.ru",107],["asia-tv.su",107],["at.ua",107],["autosimgames.ru",107],["clan.su",107],["db-energo.ru",107],["devdrivers.ru",107],["do.am",107],["elegos.ru",107],["elektronika56.ru",107],["elektrosat.ru",107],["fon-ki.com",107],["for-gsm.ru",107],["free-dream.ru",107],["ftechedu.ru",107],["fukushima-news.ru",107],["gals.md",107],["gloria-cedric.ru",107],["goldformat.ru",107],["greenflash.su",107],["igrul-ka.ru",107],["krasnickij.ru",107],["krolmen.ru",107],["megaclips.net",107],["mow-portal.ru",107],["moy.su",107],["my1.ru",107],["narod.ru",107],["newgames.com.ua",107],["novospasskoe-city.ru",107],["omsimclub.ru",107],["online-supernatural.ru",107],["only-paper.ru",107],["others.name",107],["pidru4nik.com",107],["pkrc.ru",107],["play-force.ru",107],["pohoronnoe-byuro.com",107],["pokatushki-pmr.ru",107],["pro-zakupki.ru",107],["project-ss.ru",107],["psxworld.ru",107],["radiodom.org",107],["rocketdockfree.ru",107],["sdr-deluxe.com",107],["soft-game.net",107],["stalker-gsc.ru",107],["stalker-zone.info",107],["stalkermods.ru",107],["svadbatomsk.ru",107],["techmusic.ru",107],["tes-game.ru",107],["torfiles.ru",107],["ucoz.club",107],["ucoz.com",107],["ucoz.net",107],["ucoz.org",107],["ucoz.ru",107],["ucoz.ua",107],["usite.pro",107],["vodopads.ru",107],["vsthouse.ru",107],["xakevsoft.ru",107],["xn--80aeshkkbdj.xn--p1ai",107],["yaminecraft.ru",107],["zona-stalkera.ru",107]]);

const entitiesMap = new Map([["porno365",105]]);

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
    safe.logLevel = scriptletGlobals.logLevel || 1;
    let lastLogType = '';
    let lastLogText = '';
    let lastLogTime = 0;
    safe.toLogText = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( text === lastLogText && type === lastLogType ) {
            if ( (Date.now() - lastLogTime) < 5000 ) { return; }
        }
        lastLogType = type;
        lastLogText = text;
        lastLogTime = Date.now();
        return text;
    };
    try {
        const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
        let bcBuffer = [];
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
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
    } catch(_) {
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            safe.log(`uBO ${text}`);
        };
    }
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
