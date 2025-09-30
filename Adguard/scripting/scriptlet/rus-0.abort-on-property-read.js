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
const argsList = [["AdbBanner"],["CTRManager.host3"],["ClickUndercookie"],["Date.prototype.toUTCString"],["Groups.showDisclaimer"],["Light.Popup"],["Object.prototype.AdfoxXhrRequestPrepared"],["Object.prototype.Metrika"],["Object.prototype.YA_TURBO_PAGES"],["Object.prototype._getBanner"],["Object.prototype._isAutostartQueueSet"],["Object.prototype.bannerOptions"],["Object.prototype.direct"],["Object.prototype.fakeDetect"],["Object.prototype.getAdUsageStorage"],["Object.prototype.initOnPlay"],["Object.prototype.isApplySticky"],["Object.prototype.loadBanner"],["Object.prototype.render"],["Object.prototype.scriptsViaXhr"],["Object.prototype.yaContextCb"],["PUM.getPopup"],["Radish"],["RythmFeed"],["SIN.AdsLoader"],["TotemToolsObject"],["WebSocket"],["XMLHttpRequest"],["Ya"],["_0x1ece"],["__vasActiveTestIds"],["a_urls"],["aab"],["abl"],["adblock_availability_check"],["adcashMacros"],["addLink"],["adjustBackground"],["admiral"],["ads"],["ads_block_check"],["advFirstClickOpenNewTab"],["anOptions"],["antiadblockCallback"],["app_vars.force_disable_adblock"],["as_retry"],["atob"],["bannersBillboard"],["bdy"],["blocked_action"],["clickNS4"],["console.clear"],["disable_copy"],["disable_hot_keys"],["document.addEventListener"],["document.body.oncopy"],["document.getElementById","mdl_adb"],["document.oncontextmenu"],["document.oncopy"],["document.ondragend"],["document.ondragstart"],["document.ondrop"],["document.onkeydown"],["document.onpaste"],["document.onselectstart"],["eaglePlayerPlugins.autoplay_position"],["echelon"],["forTheFreeVideo.css"],["fpm_attr"],["getSelection"],["get_ya_browser"],["goTolink"],["helpUsImproveSite"],["initsnow"],["kav_cn"],["lftrght"],["localStorage"],["m205"],["mdpDeBlocker"],["move_string"],["myatu_bgm"],["nocontext"],["noselect"],["onload"],["open"],["preventSelection"],["scrollw"],["setsnow"],["sparkle"],["stopPrntScr"],["t364_initPopup"],["target_script"],["td_ad_background_click_target"],["tingle"],["tnAdditionalParams"],["unSelect"],["updateDownloadLinks"],["utarget_script"],["video.preroll"],["vpb"],["weekCallbacks"],["window.alert"],["window.block"],["wpsite_clickable_data"],["yaContextCb"],["zfgformats"],["ABNS"],["bc_blocks"],["globalAuthLoginPopupCounter"],["u_global_data"]];
const hostnamesMap = new Map([["htmlweb.ru",0],["fapreactor.com",1],["pornreactor.cc",1],["reactor.cc",1],["anifap.com",2],["anifap.xyz",2],["anipoisk.org",2],["anitokyo.tv",2],["hcdn.online",2],["kinofilm.co",2],["comedy-radio.ru",[3,30]],["radioromantika.ru",[3,30]],["relax-fm.ru",[3,30]],["rg.ru",[3,104]],["sm.news",[3,28,32,85]],["ura.news",[3,104]],["veseloeradio.ru",[3,30]],["www.e1.ru",3],["vk.com",4],["vk.ru",4],["rutor.org",5],["drive2.ru",[6,20]],["liveinternet.ru",[7,8]],["yap.ru",7],["yaplakal.com",7],["lena-miro.ru",9],["levik.blog",9],["livejournal.com",9],["olegmakarenko.ru",9],["periskop.su",9],["shakko.ru",9],["shiro-kino.ru",9],["vadimrazumov.ru",9],["rbc.ru",[10,16]],["www.kinopoisk.ru",11],["gorodrabot.by",12],["gorodrabot.ru",12],["fishki.net",13],["auto.ru",14],["reshu.by",14],["reshuent.kz",14],["sdamgia.ru",14],["gdespaces.com",15],["gdespaces.net",15],["google-cloud.services",15],["spac.me",15],["spac.run",15],["spac.wtf",15],["spac1.com",15],["spac1.net",15],["spac1.org",15],["spaces-blogs.com",15],["spaces.im",15],["spcs-files.xyz",15],["spcs.bio",15],["spcs.me",15],["spcs.network",15],["spcs.pro",15],["spcs.reviews",15],["spcs.social",15],["strip2.club",15],["strip2.in",15],["strip2.xxx",15],["usersporn.com",15],["e1.ru",17],["nova.rambler.ru",17],["pikabu.ru",[17,28]],["24smi.org",18],["gismeteo.by",19],["gismeteo.kz",19],["gismeteo.ru",19],["razlozhi.ru",20],["f1comp.ru",21],["tagaev.com",21],["times.zt.ua",21],["gencit.info",22],["ya.ru",23],["sinoptik.ua",[24,99]],["porngames.su",25],["rintor.info",25],["rintor.net",25],["castle-tv.com",26],["100popugaev.ru",27],["coderlessons.com",27],["fixx.one",27],["its-kids.ru",27],["molitvy.guru",27],["nizhny.ru",27],["pro100hobbi.ru",27],["publy.ru",27],["samelectric.ru",27],["svadba.expert",27],["tehnobzor.ru",[27,78]],["vibir.ru",27],["3dnews.ru",28],["avtovzglyad.ru",28],["baby.ru",28],["cont.ws",28],["dni.ru",28],["pogoda.onliner.by",28],["russian7.ru",28],["selflib.me",28],["sports.ru",[28,43]],["tech.onliner.by",28],["www.goha.ru",28],["nnm-club.me",29],["nnmclub.ro",29],["nnmclub.to",29],["forum.overclockers.ua",31],["kufar.by",32],["bstudy.net",33],["ozlib.com",33],["studbooks.net",33],["studme.org",33],["studref.com",33],["studwood.net",33],["vuzlit.com",33],["xstud.org",33],["vgtimes.ru",34],["upload.ee",35],["versia.ru",36],["bb.lv",37],["footboom.com",[38,66]],["footboom.kz",[38,66]],["electric-house.ru",39],["fearmp4.ru",40],["freehat.cc",[41,84]],["amazinghis.ru",42],["moj-pes.ru",42],["shrlink.top",44],["eurointegration.com.ua",45],["pravda.com.ua",45],["sportanalytic.com",45],["friends.in.ua",[46,54]],["gidonline.eu",[46,91]],["vprognoze.ru",47],["terrikon.com",48],["medicina.ua",49],["zaruba.fun",50],["fm-app.ru",51],["ritsatv.ru",51],["tvapp.su",51],["yootv.ru",51],["kolizhanka.com.ua",[52,53,81]],["gra-prestoliv.in.ua",54],["simpsonsua.tv",54],["pravvest.ru",55],["dclans.ru",56],["animevost.org",57],["animevost.top",57],["doefiratv.info",57],["payeer-gift.ru",57],["smotret-anime-365.ru",57],["turkish-tv-series.ru",[57,62,69]],["ufchgu.ru",57],["vost.pw",57],["xn--b1aew.xn--p1ai",[57,58,59,60,61,63,64]],["my-expert.ru",60],["gazeta.ru",[65,71]],["kinozapas.co",67],["livesx.online",67],["xn--80aikhbrhr.xn--j1amh",67],["7ogorod.ru",68],["autonevod.ru",68],["shtrafsud.ru",68],["tophallclub.ru",68],["zazloo.ru",68],["buhplatforma.com.ua",69],["championat.com",69],["doramy.club",69],["dzplatforma.com.ua",69],["medplatforma.com.ua",69],["oblikbudget.com.ua",69],["oplatforma.com.ua",69],["pro-op.com.ua",69],["prokadry.com.ua",69],["musify.club",70],["dota2.ru",72],["elitesnooker.com",73],["astrakhan.ru",74],["myjane.ru",74],["omskpress.ru",74],["tambovnet.org",74],["daz3d.ru",75],["dorama.land",76],["doramaland.plus",76],["players.com.ua",76],["studizba.com",77],["asteriatm.ru",78],["sudya-dredd.ru",[78,89]],["anime-chan.me",[79,88]],["city.ogo.ua",80],["stoigr.org",82],["it-actual.ru",83],["hlamer.ru",84],["lostpix.com",84],["potokcdn.com",84],["prostoporno.help",84],["saltday.ru",84],["uploadimagex.com",84],["wowskill.ru",84],["xittv.net",84],["zab.ru",86],["tapochek.net",[87,106]],["bryansknovosti.ru",89],["novozybkov.su",89],["moremania.info",90],["kinogo.eu",91],["1informer.com",92],["fainaidea.com",92],["itech.co.ua",92],["mediasat.info",92],["moika78.ru",92],["root-nation.com",92],["fssp.gov.ru",93],["liveforums.ru",94],["onlineclass.space",95],["nsportal.ru",96],["animekun.ru",97],["doramakun.ru",97],["vestivrn.ru",98],["www.ukr.net",99],["4studio.com.ua",100],["cikavosti.com",100],["dialogs.org.ua",100],["fakty.ua",100],["gorodkiev.com.ua",100],["informator.ua",100],["kriminal.tv",100],["pingvin.pro",100],["technoportal.com.ua",100],["u-news.com.ua",100],["uanews.org.ua",100],["volynpost.com",100],["bombardir.ru",101],["comp-service.kiev.ua",101],["inforesist.org",101],["www.xcom-shop.ru",101],["softportal.com",102],["growhow.in.ua",103],["80-e.ru",104],["doramatv.live",104],["examenpdd.com",104],["forum.ixbt.com",104],["shadowcore.ru",104],["animedia.tv",105],["animedub.ru",105],["vsetut.su",105],["liveball.*",106],["porno365.*",107],["ok.ru",108],["3dn.ru",109],["a-point.info",109],["addfiles.ru",109],["akkordam.ru",109],["all-for-kompa.ru",109],["asia-tv.su",109],["at.ua",109],["autosimgames.ru",109],["clan.su",109],["db-energo.ru",109],["devdrivers.ru",109],["do.am",109],["elegos.ru",109],["elektronika56.ru",109],["elektrosat.ru",109],["fon-ki.com",109],["for-gsm.ru",109],["free-dream.ru",109],["ftechedu.ru",109],["fukushima-news.ru",109],["gals.md",109],["gloria-cedric.ru",109],["goldformat.ru",109],["greenflash.su",109],["igrul-ka.ru",109],["krasnickij.ru",109],["krolmen.ru",109],["megaclips.net",109],["mow-portal.ru",109],["moy.su",109],["my1.ru",109],["narod.ru",109],["newgames.com.ua",109],["novospasskoe-city.ru",109],["omsimclub.ru",109],["online-supernatural.ru",109],["only-paper.ru",109],["others.name",109],["pidru4nik.com",109],["pkrc.ru",109],["play-force.ru",109],["pohoronnoe-byuro.com",109],["pokatushki-pmr.ru",109],["pro-zakupki.ru",109],["project-ss.ru",109],["psxworld.ru",109],["radiodom.org",109],["rocketdockfree.ru",109],["sdr-deluxe.com",109],["soft-game.net",109],["stalker-gsc.ru",109],["stalker-zone.info",109],["stalkermods.ru",109],["svadbatomsk.ru",109],["techmusic.ru",109],["tes-game.ru",109],["torfiles.ru",109],["ucoz.club",109],["ucoz.com",109],["ucoz.net",109],["ucoz.org",109],["ucoz.ru",109],["ucoz.ua",109],["usite.pro",109],["vodopads.ru",109],["vsthouse.ru",109],["xakevsoft.ru",109],["xn--80aeshkkbdj.xn--p1ai",109],["yaminecraft.ru",109],["zona-stalkera.ru",109]]);
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
