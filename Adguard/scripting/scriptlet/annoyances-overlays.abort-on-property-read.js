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
const argsList = [["pum_popups"],["document.oncontextmenu"],["oncontextmenu"],["document.onselectstart"],["getSelection"],["disableSelection"],["document.onkeydown"],["uxGuid"],["blazemedia_adBlock"],["addLink"],["abde"],["onbeforeunload"],["_sp_._networkListenerData"],["ABDSettings"],["intsFequencyCap"],["Date.prototype.toUTCString"],["document.onmousedown"],["oSpPOptions"],["fuckAdBlock"],["a1lck"],["document.ondragstart"],["document.documentElement.oncopy"],["can_i_run_ads"],["__cmpGdprAppliesGlobally"],["disableselect"],["_sp_.mms.startMsg"],["RL.licenseman.init"],["abStyle"],["ga_ExitPopup3339"],["alert"],["alerte_declanchee"],["ABD"],["document.body.setAttribute"],["adBlockDetected"],["adtoniq"],["disable_copy"],["locdau"],["document.body.oncopy"],["onload"],["HTMLIFrameElement"],["tjQuery"],["disable_hot_keys"],["nd_shtml"],["canRunAds"],["clickNS"],["_0xfff1"],["admrlWpJsonP"],["document.oncopy"],["document.onclick"],["document.onkeypress"],["disableEnterKey"],["shortcut"],["append_link"],["carbonLoaded"],["initAdBlockerPanel"],["cpp_loc"],["nocontextmenu"],["_0x1a4c"],["addCopyright"],["copy_div_id"],["LBF.define"],["b2a"],["debugchange"],["devtoolsDetector"],["nocontext"],["contentprotector"],["kan_vars.adblock"],["sneakerGoogleTag"],["wccp_pro_iscontenteditable"],["devtoolsDetector.addListener"],["googletag"],["openOverlaySignup"],["googletag.cmd"],["checkDevTools"],["document.body.onselectstart"],["nitroAds"],["FuckAdBlock"],["PieScriptConfig"]];
const hostnamesMap = new Map([["filhub.gr",0],["mimaletadepeliculas.blogspot.com",1],["desbloqueador.*",1],["megapastes.com",[1,3]],["programegratuitepc.com",[1,5]],["digitalsynopsis.com",[1,5]],["gaypornmasters.com",1],["voirfilms.*",[1,3]],["knshow.com",1],["malybelgrad.pl",1],["demolandia.net",1],["statelibrary.us",1],["coag.pl",1],["quicksleeper.pl",1],["lexlog.pl",[1,3,16]],["mainframestechhelp.com",1],["gamershit.altervista.org",1],["gagetmatome.com",1],["anisubindo.*",[1,6]],["virpe.com",1],["feel-the-darkness.rocks",[1,5,16]],["bricksrus.com",1],["jacquieetmichel.net",1],["ahzaa.net",1],["karyawanesia.com",1],["langitmovie.com",1],["ponselharian.com",[1,3,5]],["holakikou.com",[1,5]],["hotpornfile.org",[1,3,6,49]],["e-sushi.fr",1],["evasion-online.com",1],["exclusifvoyages.com",1],["payeer-gift.ru",1],["pcso-lottoresults.com",1],["iovivoatenerife.it",[1,5]],["tritinia.com",[1,35]],["battle-one.com",[1,5]],["wjx.cn",[1,3,57]],["wjx.top",[1,3,57]],["masuit.com",1],["book.zongheng.com",1],["ciweimao.com",1],["360doc.com",1],["dushu.qq.com",[1,3,47]],["qiangwaikan.com",[1,5]],["7fyd.com",1],["unikampus.net",1],["atlas-geografic.net",1],["filmpornoitaliano.org",[1,3,16]],["cafe.naver.com",[1,3,20]],["cinemakottaga.top",1],["ytv.co.jp",1],["flashplayer.org.ua",[1,5,6]],["canale.live",1],["rightnonel.com",[1,5,16]],["viafarmaciaonline.it",1],["postcourier.com.pg",[1,64]],["freestreams-live1.tv",1],["verselemzes.hu",[1,3,6,20,49]],["icourse163.org",[1,47]],["dngz.net",[1,6]],["pngitem.com",1],["cine.to",2],["filmesonlinex.co",3],["badzjeszczelepszy.pl",[3,16,28]],["oceanof-games.com",[3,5,6]],["techieway.blogspot.com",3],["69translations.blogspot.com",[3,16,48]],["cyberspace.world",3],["dailynewsview.com",3],["youmath.it",3],["operatorsekolahdbn.com",3],["brownsboys.com",3],["dicionariocriativo.com.br",4],["bloombergquint.com",4],["bibliacatolica.com.br",4],["mongri.net",4],["gay69.stream",5],["tabonitobrasil.*",5],["raccontivietati.com",5],["neyrologos.gr",5],["ggeguide.com",5],["elizabeth-mitchell.org",5],["blasianluvforever.com",5],["autophorie.de",5],["fruit01.xyz",5],["experciencia.com",5],["ifdreamscametrue.com",5],["juegosdetiempolibre.org",5],["naijagists.com",5],["chessimprover.com",5],["diaforetiko.gr",5],["tchadcarriere.com",5],["shaamtv.com",5],["totemat.pl",5],["wawlist.com",5],["cristelageorgescu.ro",[5,6,47]],["ilovevaldinon.it",5],["dialectsarchive.com",5],["xn-----0b4asja8cbew2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e7qri.xn--1ck2e1b",6],["blog.kwick.de",[6,24]],["yusepjaelani.blogspot.com",6],["ideaberita.com",6],["my-code4you.blogspot.com",6],["polagriparts.pl",6],["followmikewynn.com",6],["sportsnet.ca",7],["punto-informatico.it",8],["emol.com",9],["springfieldspringfield.co.uk",9],["infomoney.com.br",9],["otvfoco.com.br",9],["portalportuario.cl",9],["adevarul.ro",9],["city-data.com",9],["mixmods.com.br",10],["deezer.com",11],["greenocktelegraph.co.uk",12],["med1.de",12],["tomsguide.com",12],["loudersound.com",12],["pushsquare.com",12],["allafinedelpalo.it",13],["heypoorplayer.com",13],["economictimes.indiatimes.com",14],["fin24.com",15],["djelfa.info",16],["motogon.ru",17],["xnxx.com",18],["ctrl.blog",19],["satcesc.com",20],["fmovies.*",20],["priberam.org",21],["zdnet.de",22],["cinemablend.com",23],["windows101tricks.com",23],["chimica-online.it",24],["texte.work",24],["neowin.net",25],["laptopmag.com",25],["livescience.com",25],["digitalcameraworld.com",25],["guitarworld.com",25],["musicradar.com",25],["keighleynews.co.uk",25],["creativebloq.com",25],["t3.com",25],["recantodasletras.com.br",26],["lesoir.be",27],["dreamlandresort.com",29],["live.b-c-e.us",29],["tecmundo.net",29],["disheye.com",29],["impotsurlerevenu.org",30],["insidermonkey.com",31],["kurosave.com",32],["gamebanana.com",33],["trojmiasto.pl",33],["poedb.tw",33],["good-football.org",33],["theregister.co.uk",34],["doranobi-fansub.id",35],["opportunitydesk.org",35],["jootc.com",[35,41]],["selfstudyanthro.com",35],["relet365.com",35],["wikibious.com",35],["generationamiga.com",35],["psihologiadeazi.ro",[35,64]],["flinsetyadi.com",35],["projektowanie-wnetrz-online.pl",35],["easyayurveda.com",[35,41,64,68]],["sharktankblog.com",[35,41,64,68]],["m4uhd.net",36],["quotev.com",37],["maxstream.video",38],["wstream.*",38],["renditepassive.net",38],["52bdys.com",38],["earth.com",39],["digitaltrends.com",39],["nwherald.com",39],["lalawin.com",40],["ufret.jp",42],["motortrader.com.my",43],["2219.net",44],["upstream.to",45],["progameguides.com",46],["jpnn.com",47],["farm-ro.desigusxpro.com",47],["accgroup.vn",47],["deccanherald.com",47],["ndtvprofit.com",47],["empregoestagios.com",50],["elektrikmen.com",50],["hitproversion.com",50],["jobskaro.com",50],["appd.at",50],["apk1s.com",50],["audiobookcup.com",50],["geeksoncoffee.com",50],["vinaurl.blogspot.com",51],["comprerural.com",52],["cssreference.io",53],["revistavanityfair.es",54],["toppremiumpro.com",55],["androidtvbox.eu",56],["dollarvr.com",56],["newsme.gr",56],["imooc.com",58],["commandlinux.com",59],["hongxiu.com",60],["readnovel.com",60],["c4ddownload.com",61],["the-scorpions.com",61],["lethalpanda.com",61],["animatedshows.to",62],["miraculous.to",62],["phimdinhcao.com",63],["beastx.top",63],["chillx.top",63],["playerx.stream",63],["phimlongtieng.net",63],["animedao.*",63],["rubystm.com",63],["rubyvid.com",63],["revenue.land",64],["jnews5.com",64],["tvshowstars.com",64],["eurooptyk.com.pl",64],["celebzcircle.com",64],["sertracen.com.pa",64],["pitesti24.ro",64],["samsungtechwin.com",64],["cours-de-droit.net",64],["iptv4best.com",64],["blogvisaodemercado.pt",64],["kapitalis.com",64],["tiempo.hn",64],["winmeen.com",64],["ibps.in",64],["visse.com.br",64],["javsubtitle.co",64],["learninsta.com",64],["licensekeys.org",64],["mediahiburan.my",64],["tipssehatcantik.com",64],["anime-drama.jp",64],["jbjbgame.com",64],["viatasisanatate.com",64],["ziarulargesul.ro",64],["globaldefensecorp.com",64],["gossipnextdoor.com",64],["coffeeapps.ir",64],["media.framu.world",64],["immobiliaremia.com",64],["colegiosconcertados.info",64],["bigdatauni.com",64],["riwyat.com",64],["rukim.id",64],["visefierbinti.ro",64],["cyberkrafttraining.com",64],["theaircurrent.com",64],["ncert-solutions.com",64],["ncertsolutions.guru",64],["nocturnetls.net",64],["clockks.com",64],["ananda-yoga.ro",64],["poolpiscina.com",64],["infodifesa.it",64],["getective.com",64],["flashdumpfiles.com",64],["formatatmak.com",64],["drkrok.com",64],["alphagirlreviews.com",64],["kitchennovel.com",64],["voxvalachorum.ro",64],["cracksone.com",64],["day-hoc.org",64],["onlineonderdelenshop.nl",64],["primicia.com.ve",64],["tech-recipes.com",64],["afrikmag.com",64],["maduras.vip",64],["aprendeinglessila.com",64],["kicknews.today",64],["koalasplayground.com",64],["hellokpop.com",64],["hayatbilgileri.com",64],["moneyexcel.com",64],["placementstore.com",64],["neuroteam-metz.de",64],["codedosa.com",64],["liveyourmaths.com",64],["newspao.gr",64],["ieltsliz.com",64],["programasvirtualespc.net",64],["tempatwisataseru.com",64],["wikiofcelebs.com",64],["jornaljoca.com.br",64],["arcanescans.com",64],["filmzone.com",64],["hiraethtranslation.com",64],["kaystls.site",64],["home.novel-gate.com",64],["plural.jor.br",64],["evreporter.com",64],["sinhasannews.com",64],["viewsofgreece.gr",64],["rozbor-dila.cz",64],["kritichno.bg",64],["csiplearninghub.com",64],["medeberiya.site",64],["yhocdata.com",65],["iskandinavya.com",66],["sneakernews.com",67],["forplayx.ink",69],["aboutchromebooks.com",70],["ancient.eu",70],["comingsoon.net",70],["daysoftheyear.com",70],["edn.com",70],["gearjunkie.com",70],["harvardmagazine.com",70],["lgbtqnation.com",70],["majorgeeks.com",70],["mangainn.net",70],["medievalists.net",70],["sherdog.com",70],["sidereel.com",70],["statesman.com",70],["winhelponline.com",70],["edurev.in",71],["decider.com",72],["nypost.com",72],["pagesix.com",72],["librospreuniversitariospdf.blogspot.com",73],["ncrtsolutions.in",74],["d4armory.io",75],["helldivers.io",75],["lcpdfr.com",76],["labreakfastburrito.com",77]]);
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
