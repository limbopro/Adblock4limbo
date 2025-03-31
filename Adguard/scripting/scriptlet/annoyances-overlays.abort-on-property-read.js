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

// ruleset: annoyances-overlays

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
const argsList = [["pum_popups"],["document.oncontextmenu"],["oncontextmenu"],["document.onselectstart"],["getSelection"],["disableSelection"],["document.onkeydown"],["uxGuid"],["blazemedia_adBlock"],["abde"],["fuckAdBlock"],["_sp_._networkListenerData"],["ABDSettings"],["intsFequencyCap"],["Date.prototype.toUTCString"],["can_i_run_ads"],["__cmpGdprAppliesGlobally"],["_sp_.mms.startMsg"],["abStyle"],["ABD"],["adBlockDetected"],["adtoniq"],["canRunAds"],["HTMLIFrameElement"],["admrlWpJsonP"],["carbonLoaded"],["initAdBlockerPanel"],["b2a"],["onload"],["sneakerGoogleTag"],["googletag"],["googletag.cmd"],["nitroAds"],["FuckAdBlock"],["addLink"],["onbeforeunload"],["document.onmousedown"],["oSpPOptions"],["a1lck"],["document.ondragstart"],["document.documentElement.oncopy"],["disableselect"],["RL.licenseman.init"],["ga_ExitPopup3339"],["alert"],["alerte_declanchee"],["document.body.setAttribute"],["disable_copy"],["locdau"],["document.body.oncopy"],["tjQuery"],["disable_hot_keys"],["nd_shtml"],["clickNS"],["_0xfff1"],["document.oncopy"],["document.onclick"],["document.onkeypress"],["disableEnterKey"],["shortcut"],["append_link"],["cpp_loc"],["nocontextmenu"],["_0x1a4c"],["addCopyright"],["copy_div_id"],["LBF.define"],["debugchange"],["devtoolsDetector"],["nocontext"],["contentprotector"],["kan_vars.adblock"],["wccp_pro_iscontenteditable"],["devtoolsDetector.addListener"],["openOverlaySignup"],["checkDevTools"],["document.body.onselectstart"]];
const hostnamesMap = new Map([["filhub.gr",0],["mimaletadepeliculas.blogspot.com",1],["desbloqueador.*",1],["megapastes.com",[1,3]],["programegratuitepc.com",[1,5]],["digitalsynopsis.com",[1,5]],["gaypornmasters.com",1],["voirfilms.*",[1,3]],["knshow.com",1],["malybelgrad.pl",1],["demolandia.net",1],["statelibrary.us",1],["coag.pl",1],["quicksleeper.pl",1],["lexlog.pl",[1,3,36]],["mainframestechhelp.com",1],["gamershit.altervista.org",1],["gagetmatome.com",1],["anisubindo.*",[1,6]],["virpe.com",1],["feel-the-darkness.rocks",[1,5,36]],["bricksrus.com",1],["jacquieetmichel.net",1],["ahzaa.net",1],["karyawanesia.com",1],["langitmovie.com",1],["ponselharian.com",[1,3,5]],["holakikou.com",[1,5]],["hotpornfile.org",[1,3,6,57]],["e-sushi.fr",1],["evasion-online.com",1],["exclusifvoyages.com",1],["payeer-gift.ru",1],["pcso-lottoresults.com",1],["iovivoatenerife.it",[1,5]],["tritinia.com",[1,47]],["battle-one.com",[1,5]],["wjx.cn",[1,3,63]],["wjx.top",[1,3,63]],["masuit.com",1],["book.zongheng.com",1],["ciweimao.com",1],["360doc.com",1],["dushu.qq.com",[1,3,55]],["qiangwaikan.com",[1,5]],["7fyd.com",1],["unikampus.net",1],["atlas-geografic.net",1],["filmpornoitaliano.org",[1,3,36]],["cafe.naver.com",[1,3,39]],["cinemakottaga.top",1],["ytv.co.jp",1],["flashplayer.org.ua",[1,5,6]],["canale.live",1],["rightnonel.com",[1,5,36]],["viafarmaciaonline.it",1],["postcourier.com.pg",[1,69]],["freestreams-live1.tv",1],["verselemzes.hu",[1,3,6,39,57]],["icourse163.org",[1,55]],["dngz.net",[1,6]],["pngitem.com",1],["cine.to",2],["filmesonlinex.co",3],["badzjeszczelepszy.pl",[3,36,43]],["oceanof-games.com",[3,5,6]],["techieway.blogspot.com",3],["69translations.blogspot.com",[3,36,56]],["cyberspace.world",3],["dailynewsview.com",3],["youmath.it",3],["operatorsekolahdbn.com",3],["brownsboys.com",3],["dicionariocriativo.com.br",4],["bloombergquint.com",4],["bibliacatolica.com.br",4],["mongri.net",4],["gay69.stream",5],["tabonitobrasil.*",5],["raccontivietati.com",5],["neyrologos.gr",5],["ggeguide.com",5],["elizabeth-mitchell.org",5],["blasianluvforever.com",5],["autophorie.de",5],["fruit01.xyz",5],["experciencia.com",5],["ifdreamscametrue.com",5],["juegosdetiempolibre.org",5],["naijagists.com",5],["chessimprover.com",5],["diaforetiko.gr",5],["tchadcarriere.com",5],["shaamtv.com",5],["totemat.pl",5],["wawlist.com",5],["cristelageorgescu.ro",[5,6,55]],["ilovevaldinon.it",5],["dialectsarchive.com",5],["xn-----0b4asja8cbew2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e7qri.xn--1ck2e1b",6],["blog.kwick.de",[6,41]],["yusepjaelani.blogspot.com",6],["ideaberita.com",6],["my-code4you.blogspot.com",6],["polagriparts.pl",6],["followmikewynn.com",6],["sportsnet.ca",7],["punto-informatico.it",8],["mixmods.com.br",9],["gota.io",10],["xnxx.com",10],["greenocktelegraph.co.uk",11],["med1.de",11],["tomsguide.com",11],["loudersound.com",11],["pushsquare.com",11],["allafinedelpalo.it",12],["heypoorplayer.com",12],["economictimes.indiatimes.com",13],["fin24.com",14],["zdnet.de",15],["cinemablend.com",16],["windows101tricks.com",16],["neowin.net",17],["laptopmag.com",17],["livescience.com",17],["digitalcameraworld.com",17],["guitarworld.com",17],["musicradar.com",17],["keighleynews.co.uk",17],["creativebloq.com",17],["t3.com",17],["lesoir.be",18],["insidermonkey.com",19],["gamebanana.com",20],["trojmiasto.pl",20],["poedb.tw",20],["good-football.org",20],["theregister.co.uk",21],["motortrader.com.my",22],["nwherald.com",23],["earth.com",23],["digitaltrends.com",23],["progameguides.com",24],["cssreference.io",25],["revistavanityfair.es",26],["c4ddownload.com",27],["the-scorpions.com",27],["lethalpanda.com",27],["52bdys.com",28],["maxstream.video",28],["wstream.*",28],["renditepassive.net",28],["sneakernews.com",29],["aboutchromebooks.com",30],["ancient.eu",30],["comingsoon.net",30],["daysoftheyear.com",30],["edn.com",30],["gearjunkie.com",30],["harvardmagazine.com",30],["lgbtqnation.com",30],["majorgeeks.com",30],["mangainn.net",30],["medievalists.net",30],["sherdog.com",30],["sidereel.com",30],["statesman.com",30],["winhelponline.com",30],["decider.com",31],["nypost.com",31],["pagesix.com",31],["d4armory.io",32],["helldivers.io",32],["lcpdfr.com",33],["emol.com",34],["springfieldspringfield.co.uk",34],["infomoney.com.br",34],["otvfoco.com.br",34],["portalportuario.cl",34],["adevarul.ro",34],["city-data.com",34],["deezer.com",35],["djelfa.info",36],["motogon.ru",37],["ctrl.blog",38],["satcesc.com",39],["fmovies.*",39],["priberam.org",40],["chimica-online.it",41],["texte.work",41],["recantodasletras.com.br",42],["dreamlandresort.com",44],["live.b-c-e.us",44],["tecmundo.net",44],["disheye.com",44],["impotsurlerevenu.org",45],["kurosave.com",46],["doranobi-fansub.id",47],["opportunitydesk.org",47],["jootc.com",[47,51]],["selfstudyanthro.com",47],["relet365.com",47],["wikibious.com",47],["generationamiga.com",47],["psihologiadeazi.ro",[47,69]],["flinsetyadi.com",47],["projektowanie-wnetrz-online.pl",47],["easyayurveda.com",[47,51,69,72]],["sharktankblog.com",[47,51,69,72]],["m4uhd.net",48],["quotev.com",49],["lalawin.com",50],["ufret.jp",52],["2219.net",53],["upstream.to",54],["jpnn.com",55],["farm-ro.desigusxpro.com",55],["accgroup.vn",55],["deccanherald.com",55],["ndtvprofit.com",55],["empregoestagios.com",58],["elektrikmen.com",58],["hitproversion.com",58],["jobskaro.com",58],["appd.at",58],["apk1s.com",58],["audiobookcup.com",58],["geeksoncoffee.com",58],["vinaurl.blogspot.com",59],["comprerural.com",60],["toppremiumpro.com",61],["androidtvbox.eu",62],["dollarvr.com",62],["newsme.gr",62],["imooc.com",64],["commandlinux.com",65],["hongxiu.com",66],["readnovel.com",66],["animatedshows.to",67],["miraculous.to",67],["phimdinhcao.com",68],["beastx.top",68],["chillx.top",68],["playerx.stream",68],["phimlongtieng.net",68],["animedao.*",68],["rubystm.com",68],["rubyvid.com",68],["revenue.land",69],["celebzcircle.com",69],["sertracen.com.pa",69],["pitesti24.ro",69],["samsungtechwin.com",69],["cours-de-droit.net",69],["iptv4best.com",69],["blogvisaodemercado.pt",69],["kapitalis.com",69],["tiempo.hn",69],["winmeen.com",69],["ibps.in",69],["visse.com.br",69],["javsubtitle.co",69],["learninsta.com",69],["licensekeys.org",69],["mediahiburan.my",69],["tipssehatcantik.com",69],["anime-drama.jp",69],["jbjbgame.com",69],["viatasisanatate.com",69],["ziarulargesul.ro",69],["globaldefensecorp.com",69],["gossipnextdoor.com",69],["coffeeapps.ir",69],["media.framu.world",69],["immobiliaremia.com",69],["colegiosconcertados.info",69],["bigdatauni.com",69],["riwyat.com",69],["rukim.id",69],["visefierbinti.ro",69],["cyberkrafttraining.com",69],["theaircurrent.com",69],["ncert-solutions.com",69],["ncertsolutions.guru",69],["nocturnetls.net",69],["clockks.com",69],["ananda-yoga.ro",69],["poolpiscina.com",69],["infodifesa.it",69],["getective.com",69],["flashdumpfiles.com",69],["formatatmak.com",69],["drkrok.com",69],["alphagirlreviews.com",69],["kitchennovel.com",69],["voxvalachorum.ro",69],["cracksone.com",69],["day-hoc.org",69],["onlineonderdelenshop.nl",69],["primicia.com.ve",69],["tech-recipes.com",69],["afrikmag.com",69],["maduras.vip",69],["aprendeinglessila.com",69],["kicknews.today",69],["koalasplayground.com",69],["hellokpop.com",69],["hayatbilgileri.com",69],["moneyexcel.com",69],["placementstore.com",69],["neuroteam-metz.de",69],["codedosa.com",69],["liveyourmaths.com",69],["newspao.gr",69],["ieltsliz.com",69],["programasvirtualespc.net",69],["tempatwisataseru.com",69],["wikiofcelebs.com",69],["jornaljoca.com.br",69],["arcanescans.com",69],["filmzone.com",69],["hiraethtranslation.com",69],["kaystls.site",69],["home.novel-gate.com",69],["plural.jor.br",69],["evreporter.com",69],["sinhasannews.com",69],["viewsofgreece.gr",69],["rozbor-dila.cz",69],["kritichno.bg",69],["csiplearninghub.com",69],["medeberiya.site",69],["yhocdata.com",70],["iskandinavya.com",71],["forplayx.ink",73],["edurev.in",74],["librospreuniversitariospdf.blogspot.com",75],["ncrtsolutions.in",76]]);
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
