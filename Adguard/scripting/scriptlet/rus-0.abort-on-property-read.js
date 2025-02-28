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

// ruleset: rus-0

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_abortOnPropertyRead = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["ABNS"],["AdbBanner"],["CTRManager.host3"],["ClickUndercookie"],["Date.prototype.toUTCString"],["Groups.showDisclaimer"],["Light.Popup"],["Object.prototype.AdfoxXhrRequestPrepared"],["Object.prototype.Metrika"],["Object.prototype.YA_TURBO_PAGES"],["Object.prototype._getBanner"],["Object.prototype._isAutostartQueueSet"],["Object.prototype.bannerOptions"],["Object.prototype.direct"],["Object.prototype.fakeDetect"],["Object.prototype.getAdUsageStorage"],["Object.prototype.initOnPlay"],["Object.prototype.isApplySticky"],["Object.prototype.loadBanner"],["Object.prototype.marketFeedMix"],["Object.prototype.render"],["Object.prototype.scriptsViaXhr"],["Object.prototype.yaContextCb"],["PUM.getPopup"],["Radish"],["SIN.AdsLoader"],["TotemToolsObject"],["WebSocket"],["XMLHttpRequest"],["Ya"],["_0x1ece"],["__vasActiveTestIds"],["a_urls"],["aab"],["abl"],["adblock_availability_check"],["adcashMacros"],["addLink"],["adjustBackground"],["admiral"],["ads"],["ads_block_check"],["advFirstClickOpenNewTab"],["advanced_ads_ready"],["anOptions"],["antiadblockCallback"],["app_vars.force_disable_adblock"],["as_retry"],["atob"],["bannersBillboard"],["bdy"],["blocked_action"],["clickNS4"],["console.clear"],["disable_copy"],["disable_hot_keys"],["document.addEventListener"],["document.body.oncopy"],["document.getElementById","mdl_adb"],["document.oncontextmenu"],["document.oncopy"],["document.ondragend"],["document.ondragstart"],["document.ondrop"],["document.onkeydown"],["document.onpaste"],["document.onselectstart"],["eaglePlayerPlugins.autoplay_position"],["echelon"],["forTheFreeVideo.css"],["fpm_attr"],["getSelection"],["get_ya_browser"],["goTolink"],["helpUsImproveSite"],["initsnow"],["kav_cn"],["lftrght"],["localStorage"],["m205"],["mdpDeBlocker"],["move_string"],["myatu_bgm"],["nocontext"],["noselect"],["onload"],["open"],["preventSelection"],["scrollw"],["setsnow"],["sparkle"],["stopPrntScr"],["t364_initPopup"],["target_script"],["td_ad_background_click_target"],["tingle"],["tnAdditionalParams"],["unSelect"],["updateDownloadLinks"],["utarget_script"],["video.preroll"],["vpb"],["web_script"],["weekCallbacks"],["window.alert"],["window.block"],["wpsite_clickable_data"],["wrapper.addEventListener"],["yaContextCb"],["zfgformats"],["bc_blocks"],["globalAuthLoginPopupCounter"],["u_global_data"]];

const hostnamesMap = new Map([["liveball.cc",0],["liveball.uno",0],["htmlweb.ru",1],["fapreactor.com",2],["pornreactor.cc",2],["reactor.cc",2],["anifap.com",3],["anipoisk.org",3],["anitokyo.org",3],["anitokyo.tv",3],["hcdn.online",3],["kinofilm.co",3],["comedy-radio.ru",[4,31]],["radioromantika.ru",[4,31]],["relax-fm.ru",[4,31]],["rg.ru",[4,108]],["sm.news",[4,29,33,87]],["ura.news",[4,108]],["veseloeradio.ru",[4,31]],["www.e1.ru",4],["vk.com",5],["vk.ru",5],["rutor.org",6],["drive2.ru",[7,22]],["liveinternet.ru",[8,9]],["yap.ru",8],["yaplakal.com",8],["lena-miro.ru",10],["levik.blog",10],["livejournal.com",10],["olegmakarenko.ru",10],["periskop.su",10],["shakko.ru",10],["shiro-kino.ru",10],["vadimrazumov.ru",10],["rbc.ru",[11,17]],["www.kinopoisk.ru",12],["gorodrabot.by",13],["gorodrabot.ru",13],["fishki.net",14],["reshu.by",15],["reshuent.kz",15],["reshuolymp.ru",15],["sdamgia.ru",15],["gdespaces.com",16],["gdespaces.net",16],["google-cloud.services",16],["spac.me",16],["spac.run",16],["spac.wtf",16],["spac1.com",16],["spac1.info",16],["spac1.me",16],["spac1.net",16],["spac1.org",16],["spac1.ru",16],["spaces-blogs.com",16],["spaces.im",16],["spcs-files.xyz",16],["spcs.bio",16],["spcs.global",16],["spcs.life",16],["spcs.me",16],["spcs.network",16],["spcs.news",16],["spcs.pro",16],["spcs.pub",16],["spcs.reviews",16],["spcs.social",16],["strip2.in",16],["strip2.xxx",16],["usersporn.com",16],["e1.ru",18],["nova.rambler.ru",18],["pikabu.ru",[18,29]],["ya.ru",19],["24smi.org",20],["gismeteo.by",21],["gismeteo.kz",21],["gismeteo.ru",21],["razlozhi.ru",22],["f1comp.ru",23],["tagaev.com",23],["times.zt.ua",23],["gencit.info",24],["sinoptik.ua",[25,101]],["porngames.su",26],["rintor.info",26],["rintor.net",26],["castle-tv.com",27],["100popugaev.ru",28],["coderlessons.com",28],["fixx.one",28],["its-kids.ru",28],["molitvy.guru",28],["nizhny.ru",28],["pro100hobbi.ru",28],["publy.ru",28],["samelectric.ru",28],["svadba.expert",28],["tehnobzor.ru",[28,80]],["vibir.ru",28],["3dnews.kz",29],["3dnews.ru",29],["avtovzglyad.ru",29],["baby.ru",29],["cont.ws",29],["dni.ru",29],["mamba.ru",29],["pogoda.onliner.by",29],["selflib.me",29],["sports.ru",[29,45]],["tech.onliner.by",29],["www.goha.ru",29],["nnmclub.ro",30],["nnmclub.to",30],["forum.overclockers.ua",32],["kufar.by",33],["bstudy.net",34],["ozlib.com",34],["studbooks.net",34],["studme.org",34],["studref.com",34],["studwood.net",34],["vuzlit.com",34],["xstud.org",34],["vgtimes.ru",35],["upload.ee",36],["versia.ru",37],["bb.lv",38],["footboom.com",[39,68]],["footboom.kz",[39,68]],["electric-house.ru",40],["fearmp4.ru",41],["freehat.cc",[42,86]],["agroreview.com",43],["amazinghis.ru",44],["moj-pes.ru",44],["shrlink.top",46],["eurointegration.com.ua",47],["pravda.com.ua",47],["friends.in.ua",[48,56]],["gidonline.eu",[48,93]],["vprognoze.ru",49],["terrikon.com",50],["medicina.ua",51],["zaruba.fun",52],["fm-app.ru",53],["ritsatv.ru",53],["tvapp.su",53],["yootv.ru",53],["kolizhanka.com.ua",[54,55,83]],["gra-prestoliv.in.ua",56],["simpsonsua.tv",56],["pravvest.ru",57],["dclans.ru",58],["animevost.org",59],["animevost.site",59],["animevost.top",59],["doefiratv.info",59],["payeer-gift.ru",59],["smotret-anime-365.ru",59],["turkish-tv-series.ru",[59,64,71]],["ufchgu.ru",59],["vost.pw",59],["xn--b1aew.xn--p1ai",[59,60,61,62,63,65,66]],["my-expert.ru",62],["gazeta.ru",[67,73]],["kinozapas.co",69],["livesx.online",69],["xn--80aikhbrhr.xn--j1amh",69],["7ogorod.ru",70],["autonevod.ru",70],["shtrafsud.ru",70],["tophallclub.ru",70],["zazloo.ru",70],["buhplatforma.com.ua",71],["championat.com",71],["doramy.club",71],["dzplatforma.com.ua",71],["medplatforma.com.ua",71],["oblikbudget.com.ua",71],["oplatforma.com.ua",71],["pro-op.com.ua",71],["prokadry.com.ua",71],["musify.club",72],["dota2.ru",74],["elitesnooker.com",75],["astrakhan.ru",76],["myjane.ru",76],["omskpress.ru",76],["tambovnet.org",76],["daz3d.ru",77],["dorama.land",78],["doramaland.me",78],["players.com.ua",78],["studizba.com",79],["asteriatm.ru",80],["sudya-dredd.ru",[80,91]],["anime-chan.me",[81,90]],["city.ogo.ua",82],["stoigr.org",84],["it-actual.ru",85],["hlamer.ru",86],["lostpix.com",86],["potokcdn.com",86],["prostoporno.help",86],["saltday.ru",86],["uploadimagex.com",86],["wowskill.ru",86],["xittv.net",86],["zab.ru",88],["tapochek.net",[89,102]],["bryansknovosti.ru",91],["novozybkov.su",91],["moremania.info",92],["kinogo.eu",93],["1informer.com",94],["fainaidea.com",94],["itech.co.ua",94],["mediasat.info",94],["moika78.ru",94],["root-nation.com",94],["fssp.gov.ru",95],["liveforums.ru",96],["onlineclass.space",97],["nsportal.ru",98],["animekun.ru",99],["doramakun.ru",99],["vestivrn.ru",100],["www.ukr.net",101],["4studio.com.ua",103],["cikavosti.com",103],["dialogs.org.ua",103],["fakty.ua",103],["gorodkiev.com.ua",103],["informator.ua",103],["kriminal.tv",103],["pingvin.pro",103],["technoportal.com.ua",103],["u-news.com.ua",103],["uanews.org.ua",103],["volynpost.com",103],["bombardir.ru",104],["comp-service.kiev.ua",104],["inforesist.org",104],["www.xcom-shop.ru",104],["softportal.com",105],["growhow.in.ua",106],["tornado.3dn.ru",107],["80-e.ru",108],["doramatv.live",108],["examenpdd.com",108],["animedia.tv",109],["animedub.ru",109],["vsetut.su",109],["ok.ru",111],["3dn.ru",112],["a-point.info",112],["addfiles.ru",112],["akkordam.ru",112],["all-for-kompa.ru",112],["asia-tv.su",112],["at.ua",112],["autosimgames.ru",112],["clan.su",112],["db-energo.ru",112],["devdrivers.ru",112],["do.am",112],["elegos.ru",112],["elektronika56.ru",112],["elektrosat.ru",112],["fon-ki.com",112],["for-gsm.ru",112],["free-dream.ru",112],["ftechedu.ru",112],["fukushima-news.ru",112],["gals.md",112],["gloria-cedric.ru",112],["goldformat.ru",112],["greenflash.su",112],["igrul-ka.ru",112],["krasnickij.ru",112],["krolmen.ru",112],["megaclips.net",112],["mow-portal.ru",112],["moy.su",112],["my1.ru",112],["narod.ru",112],["newgames.com.ua",112],["novospasskoe-city.ru",112],["omsimclub.ru",112],["online-supernatural.ru",112],["only-paper.ru",112],["others.name",112],["pidru4nik.com",112],["pkrc.ru",112],["play-force.ru",112],["pohoronnoe-byuro.com",112],["pokatushki-pmr.ru",112],["pro-zakupki.ru",112],["project-ss.ru",112],["psxworld.ru",112],["radiodom.org",112],["rocketdockfree.ru",112],["sdr-deluxe.com",112],["soft-game.net",112],["stalker-gsc.ru",112],["stalker-zone.info",112],["stalkermods.ru",112],["svadbatomsk.ru",112],["techmusic.ru",112],["tes-game.ru",112],["torfiles.ru",112],["ucoz.club",112],["ucoz.com",112],["ucoz.net",112],["ucoz.org",112],["ucoz.ru",112],["ucoz.ua",112],["usite.pro",112],["vodopads.ru",112],["vsthouse.ru",112],["xakevsoft.ru",112],["xn--80aeshkkbdj.xn--p1ai",112],["yaminecraft.ru",112],["zona-stalkera.ru",112]]);

const entitiesMap = new Map([["porno365",110]]);

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
        'String_split': String.prototype.split,
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
            catch {
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
    } catch {
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
} catch {
}
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
    catch { }
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_abortOnPropertyRead();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
