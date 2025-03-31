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

// ruleset: rus-0

// Important!
// Isolate from global scope

// Start of local scope
(function uBOL_abortOnPropertyRead() {

/******************************************************************************/

function abortOnPropertyRead(
    chain = ''
) {
    if ( typeof chain !== 'string' ) { return; }
    if ( chain === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('abort-on-property-read', chain);
    const exceptionToken = getExceptionTokenFn();
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

function getExceptionTokenFn() {
    const token = getRandomTokenFn();
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
        'Object_hasOwn': Object.hasOwn.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String': self.String,
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

function getRandomTokenFn() {
    const safe = safeSelf();
    return safe.String_fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
}

/******************************************************************************/

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [["ABNS"],["AdbBanner"],["CTRManager.host3"],["ClickUndercookie"],["Date.prototype.toUTCString"],["Groups.showDisclaimer"],["Light.Popup"],["Object.prototype.AdfoxXhrRequestPrepared"],["Object.prototype.Metrika"],["Object.prototype.YA_TURBO_PAGES"],["Object.prototype._getBanner"],["Object.prototype._isAutostartQueueSet"],["Object.prototype.bannerOptions"],["Object.prototype.direct"],["Object.prototype.fakeDetect"],["Object.prototype.getAdUsageStorage"],["Object.prototype.initOnPlay"],["Object.prototype.isApplySticky"],["Object.prototype.loadBanner"],["Object.prototype.render"],["Object.prototype.scriptsViaXhr"],["Object.prototype.yaContextCb"],["PUM.getPopup"],["Radish"],["SIN.AdsLoader"],["TotemToolsObject"],["Turbolinks"],["WebSocket"],["XMLHttpRequest"],["Ya"],["_0x1ece"],["__vasActiveTestIds"],["a_urls"],["aab"],["abl"],["adblock_availability_check"],["adcashMacros"],["addLink"],["adjustBackground"],["admiral"],["ads"],["ads_block_check"],["advFirstClickOpenNewTab"],["anOptions"],["antiadblockCallback"],["app_vars.force_disable_adblock"],["as_retry"],["atob"],["bannersBillboard"],["bdy"],["blocked_action"],["clickNS4"],["console.clear"],["disable_copy"],["disable_hot_keys"],["document.addEventListener"],["document.body.oncopy"],["document.getElementById","mdl_adb"],["document.oncontextmenu"],["document.oncopy"],["document.ondragend"],["document.ondragstart"],["document.ondrop"],["document.onkeydown"],["document.onpaste"],["document.onselectstart"],["eaglePlayerPlugins.autoplay_position"],["echelon"],["forTheFreeVideo.css"],["fpm_attr"],["getSelection"],["get_ya_browser"],["goTolink"],["helpUsImproveSite"],["initsnow"],["kav_cn"],["lftrght"],["localStorage"],["m205"],["mdpDeBlocker"],["move_string"],["myatu_bgm"],["nocontext"],["noselect"],["onload"],["open"],["preventSelection"],["scrollw"],["setsnow"],["sparkle"],["stopPrntScr"],["t364_initPopup"],["target_script"],["td_ad_background_click_target"],["tingle"],["tnAdditionalParams"],["unSelect"],["updateDownloadLinks"],["utarget_script"],["video.preroll"],["vpb"],["weekCallbacks"],["window.alert"],["window.block"],["wpsite_clickable_data"],["wrapper.addEventListener"],["yaContextCb"],["zfgformats"],["bc_blocks"],["globalAuthLoginPopupCounter"],["u_global_data"]];
const hostnamesMap = new Map([["liveball.cc",0],["liveball.uno",0],["htmlweb.ru",1],["fapreactor.com",2],["pornreactor.cc",2],["reactor.cc",2],["anifap.com",3],["anipoisk.org",3],["anitokyo.org",3],["anitokyo.tv",3],["hcdn.online",3],["kinofilm.co",3],["comedy-radio.ru",[4,31]],["radioromantika.ru",[4,31]],["relax-fm.ru",[4,31]],["rg.ru",[4,106]],["sm.news",[4,29,33,86]],["ura.news",[4,106]],["veseloeradio.ru",[4,31]],["www.e1.ru",4],["vk.com",5],["vk.ru",5],["rutor.org",6],["drive2.ru",[7,21]],["liveinternet.ru",[8,9]],["yap.ru",8],["yaplakal.com",8],["lena-miro.ru",10],["levik.blog",10],["livejournal.com",10],["olegmakarenko.ru",10],["periskop.su",10],["shakko.ru",10],["shiro-kino.ru",10],["vadimrazumov.ru",10],["rbc.ru",[11,17]],["www.kinopoisk.ru",12],["gorodrabot.by",13],["gorodrabot.ru",13],["fishki.net",14],["reshu.by",15],["reshuent.kz",15],["sdamgia.ru",15],["gdespaces.com",16],["gdespaces.net",16],["google-cloud.services",16],["spac.me",16],["spac.run",16],["spac.wtf",16],["spac1.com",16],["spac1.net",16],["spac1.org",16],["spaces-blogs.com",16],["spaces.im",16],["spcs-files.xyz",16],["spcs.bio",16],["spcs.me",16],["spcs.network",16],["spcs.pro",16],["spcs.reviews",16],["spcs.social",16],["strip2.club",16],["strip2.in",16],["strip2.xxx",16],["usersporn.com",16],["e1.ru",18],["nova.rambler.ru",18],["pikabu.ru",[18,29]],["24smi.org",19],["gismeteo.by",20],["gismeteo.kz",20],["gismeteo.ru",20],["razlozhi.ru",21],["f1comp.ru",22],["tagaev.com",22],["times.zt.ua",22],["gencit.info",23],["sinoptik.ua",[24,100]],["porngames.su",25],["rintor.info",25],["rintor.net",25],["mp3party.net",26],["castle-tv.com",27],["100popugaev.ru",28],["coderlessons.com",28],["fixx.one",28],["its-kids.ru",28],["molitvy.guru",28],["nizhny.ru",28],["pro100hobbi.ru",28],["publy.ru",28],["samelectric.ru",28],["svadba.expert",28],["tehnobzor.ru",[28,79]],["vibir.ru",28],["3dnews.kz",29],["3dnews.ru",29],["avtovzglyad.ru",29],["baby.ru",29],["cont.ws",29],["dni.ru",29],["mamba.ru",29],["pogoda.onliner.by",29],["selflib.me",29],["sports.ru",[29,44]],["tech.onliner.by",29],["www.goha.ru",29],["nnmclub.ro",30],["nnmclub.to",30],["forum.overclockers.ua",32],["kufar.by",33],["bstudy.net",34],["ozlib.com",34],["studbooks.net",34],["studme.org",34],["studref.com",34],["studwood.net",34],["vuzlit.com",34],["xstud.org",34],["vgtimes.ru",35],["upload.ee",36],["versia.ru",37],["bb.lv",38],["footboom.com",[39,67]],["footboom.kz",[39,67]],["electric-house.ru",40],["fearmp4.ru",41],["freehat.cc",[42,85]],["amazinghis.ru",43],["moj-pes.ru",43],["shrlink.top",45],["eurointegration.com.ua",46],["pravda.com.ua",46],["sportanalytic.com",46],["friends.in.ua",[47,55]],["gidonline.eu",[47,92]],["vprognoze.ru",48],["terrikon.com",49],["medicina.ua",50],["zaruba.fun",51],["fm-app.ru",52],["ritsatv.ru",52],["tvapp.su",52],["yootv.ru",52],["kolizhanka.com.ua",[53,54,82]],["gra-prestoliv.in.ua",55],["simpsonsua.tv",55],["pravvest.ru",56],["dclans.ru",57],["animevost.org",58],["animevost.top",58],["doefiratv.info",58],["payeer-gift.ru",58],["smotret-anime-365.ru",58],["turkish-tv-series.ru",[58,63,70]],["ufchgu.ru",58],["vost.pw",58],["xn--b1aew.xn--p1ai",[58,59,60,61,62,64,65]],["my-expert.ru",61],["gazeta.ru",[66,72]],["kinozapas.co",68],["livesx.online",68],["xn--80aikhbrhr.xn--j1amh",68],["7ogorod.ru",69],["autonevod.ru",69],["shtrafsud.ru",69],["tophallclub.ru",69],["zazloo.ru",69],["buhplatforma.com.ua",70],["championat.com",70],["doramy.club",70],["dzplatforma.com.ua",70],["medplatforma.com.ua",70],["oblikbudget.com.ua",70],["oplatforma.com.ua",70],["pro-op.com.ua",70],["prokadry.com.ua",70],["musify.club",71],["dota2.ru",73],["elitesnooker.com",74],["astrakhan.ru",75],["myjane.ru",75],["omskpress.ru",75],["tambovnet.org",75],["daz3d.ru",76],["dorama.land",77],["doramaland.me",77],["players.com.ua",77],["studizba.com",78],["asteriatm.ru",79],["sudya-dredd.ru",[79,90]],["anime-chan.me",[80,89]],["city.ogo.ua",81],["stoigr.org",83],["it-actual.ru",84],["hlamer.ru",85],["lostpix.com",85],["potokcdn.com",85],["prostoporno.help",85],["saltday.ru",85],["uploadimagex.com",85],["wowskill.ru",85],["xittv.net",85],["zab.ru",87],["tapochek.net",88],["bryansknovosti.ru",90],["novozybkov.su",90],["moremania.info",91],["kinogo.eu",92],["1informer.com",93],["fainaidea.com",93],["itech.co.ua",93],["mediasat.info",93],["moika78.ru",93],["root-nation.com",93],["fssp.gov.ru",94],["liveforums.ru",95],["onlineclass.space",96],["nsportal.ru",97],["animekun.ru",98],["doramakun.ru",98],["vestivrn.ru",99],["www.ukr.net",100],["4studio.com.ua",101],["cikavosti.com",101],["dialogs.org.ua",101],["fakty.ua",101],["gorodkiev.com.ua",101],["informator.ua",101],["kriminal.tv",101],["pingvin.pro",101],["technoportal.com.ua",101],["u-news.com.ua",101],["uanews.org.ua",101],["volynpost.com",101],["bombardir.ru",102],["comp-service.kiev.ua",102],["inforesist.org",102],["www.xcom-shop.ru",102],["softportal.com",103],["growhow.in.ua",104],["tornado.3dn.ru",105],["80-e.ru",106],["doramatv.live",106],["examenpdd.com",106],["animedia.tv",107],["animedub.ru",107],["vsetut.su",107],["porno365.*",108],["ok.ru",109],["3dn.ru",110],["a-point.info",110],["addfiles.ru",110],["akkordam.ru",110],["all-for-kompa.ru",110],["asia-tv.su",110],["at.ua",110],["autosimgames.ru",110],["clan.su",110],["db-energo.ru",110],["devdrivers.ru",110],["do.am",110],["elegos.ru",110],["elektronika56.ru",110],["elektrosat.ru",110],["fon-ki.com",110],["for-gsm.ru",110],["free-dream.ru",110],["ftechedu.ru",110],["fukushima-news.ru",110],["gals.md",110],["gloria-cedric.ru",110],["goldformat.ru",110],["greenflash.su",110],["igrul-ka.ru",110],["krasnickij.ru",110],["krolmen.ru",110],["megaclips.net",110],["mow-portal.ru",110],["moy.su",110],["my1.ru",110],["narod.ru",110],["newgames.com.ua",110],["novospasskoe-city.ru",110],["omsimclub.ru",110],["online-supernatural.ru",110],["only-paper.ru",110],["others.name",110],["pidru4nik.com",110],["pkrc.ru",110],["play-force.ru",110],["pohoronnoe-byuro.com",110],["pokatushki-pmr.ru",110],["pro-zakupki.ru",110],["project-ss.ru",110],["psxworld.ru",110],["radiodom.org",110],["rocketdockfree.ru",110],["sdr-deluxe.com",110],["soft-game.net",110],["stalker-gsc.ru",110],["stalker-zone.info",110],["stalkermods.ru",110],["svadbatomsk.ru",110],["techmusic.ru",110],["tes-game.ru",110],["torfiles.ru",110],["ucoz.club",110],["ucoz.com",110],["ucoz.net",110],["ucoz.org",110],["ucoz.ru",110],["ucoz.ua",110],["usite.pro",110],["vodopads.ru",110],["vsthouse.ru",110],["xakevsoft.ru",110],["xn--80aeshkkbdj.xn--p1ai",110],["yaminecraft.ru",110],["zona-stalkera.ru",110]]);
const exceptionsMap = new Map([]);
const hasEntities = true;
const hasAncestors = false;

const collectArgIndices = (hn, map, out) => {
    let argsIndices = map.get(hn);
    if ( argsIndices === undefined ) { return; }
    if ( typeof argsIndices !== 'number' ) {
        for ( const argsIndex of argsIndices ) {
            out.add(argsIndex);
        }
    } else {
        out.add(argsIndices);
    }
};

const indicesFromHostname = (hostname, suffix = '') => {
    const hnParts = hostname.split('.');
    const hnpartslen = hnParts.length;
    if ( hnpartslen === 0 ) { return; }
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = `${hnParts.slice(i).join('.')}${suffix}`;
        collectArgIndices(hn, hostnamesMap, todoIndices);
        collectArgIndices(hn, exceptionsMap, tonotdoIndices);
    }
    if ( hasEntities ) {
        const n = hnpartslen - 1;
        for ( let i = 0; i < n; i++ ) {
            for ( let j = n; j > i; j-- ) {
                const en = `${hnParts.slice(i,j).join('.')}.*${suffix}`;
                collectArgIndices(en, hostnamesMap, todoIndices);
                collectArgIndices(en, exceptionsMap, tonotdoIndices);
            }
        }
    }
};

const entries = (( ) => {
    const docloc = document.location;
    const origins = [ docloc.origin ];
    if ( docloc.ancestorOrigins ) {
        origins.push(...docloc.ancestorOrigins);
    }
    return origins.map((origin, i) => {
        const beg = origin.lastIndexOf('://');
        if ( beg === -1 ) { return; }
        const hn = origin.slice(beg+3)
        const end = hn.indexOf(':');
        return { hn: end === -1 ? hn : hn.slice(0, end), i };
    }).filter(a => a !== undefined);
})();
if ( entries.length === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = new Set();

indicesFromHostname(entries[0].hn);
if ( hasAncestors ) {
    for ( const entry of entries ) {
        if ( entry.i === 0 ) { continue; }
        indicesFromHostname(entry.hn, '>>');
    }
}

// Apply scriplets
for ( const i of todoIndices ) {
    if ( tonotdoIndices.has(i) ) { continue; }
    try { abortOnPropertyRead(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
