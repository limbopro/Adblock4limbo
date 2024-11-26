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

// ruleset: annoyances-overlays

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_abortOnPropertyRead = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["document.oncontextmenu"],["oncontextmenu"],["document.onselectstart"],["getSelection"],["disableSelection"],["uxGuid"],["blazemedia_adBlock"],["addLink"],["abde"],["onbeforeunload"],["fuckAdBlock"],["_sp_._networkListenerData"],["ABDSettings"],["intsFequencyCap"],["Date.prototype.toUTCString"],["document.onmousedown"],["oSpPOptions"],["a1lck"],["document.ondragstart"],["document.documentElement.oncopy"],["mdp_appender"],["can_i_run_ads"],["__cmpGdprAppliesGlobally"],["disableselect"],["_sp_.mms.startMsg"],["RL.licenseman.init"],["abStyle"],["ga_ExitPopup3339"],["document.onkeydown"],["alert"],["alerte_declanchee"],["ABD"],["document.body.setAttribute"],["adBlockDetected"],["adtoniq"],["disable_copy"],["locdau"],["document.body.oncopy"],["onload"],["HTMLIFrameElement"],["tjQuery"],["disable_hot_keys"],["nd_shtml"],["canRunAds"],["clickNS"],["_0xfff1"],["admrlWpJsonP"],["document.oncopy"],["document.onclick"],["document.onkeypress"],["disableEnterKey"],["shortcut"],["append_link"],["carbonLoaded"],["initAdBlockerPanel"],["cpp_loc"],["nocontextmenu"],["_0x1a4c"],["addCopyright"],["copy_div_id"],["LBF.define"],["b2a"],["debugchange"],["devtoolsDetector"],["nocontext"],["contentprotector"],["kan_vars.adblock"],["sneakerGoogleTag"],["wccp_pro_iscontenteditable"],["devtoolsDetector.addListener"],["googletag"],["openOverlaySignup"],["googletag.cmd"],["checkDevTools"],["document.body.onselectstart"],["nitroAds"],["FuckAdBlock"]];

const hostnamesMap = new Map([["mimaletadepeliculas.blogspot.com",0],["megapastes.com",[0,2]],["programegratuitepc.com",[0,4]],["digitalsynopsis.com",[0,4]],["gaypornmasters.com",0],["knshow.com",0],["malybelgrad.pl",0],["demolandia.net",0],["statelibrary.us",0],["coag.pl",0],["quicksleeper.pl",0],["m4ufree.tv",0],["lexlog.pl",[0,2,15]],["mainframestechhelp.com",0],["gamershit.altervista.org",0],["gagetmatome.com",0],["virpe.com",0],["feel-the-darkness.rocks",[0,4,15]],["bricksrus.com",0],["jacquieetmichel.net",0],["ahzaa.net",0],["karyawanesia.com",0],["langitmovie.com",0],["ponselharian.com",[0,2,4]],["holakikou.com",[0,4]],["hotpornfile.org",[0,2,28,49]],["e-sushi.fr",0],["evasion-online.com",0],["exclusifvoyages.com",0],["payeer-gift.ru",0],["pcso-lottoresults.com",0],["iovivoatenerife.it",[0,4]],["tritinia.com",[0,35]],["battle-one.com",[0,4]],["wjx.cn",[0,2,57]],["wjx.top",[0,2,57]],["masuit.com",0],["book.zongheng.com",0],["ciweimao.com",0],["360doc.com",0],["dushu.qq.com",[0,2,47]],["qiangwaikan.com",[0,4]],["7fyd.com",0],["unikampus.net",0],["atlas-geografic.net",0],["filmpornoitaliano.org",[0,2,15]],["cafe.naver.com",[0,2,18]],["cinemakottaga.top",0],["ytv.co.jp",0],["flashplayer.org.ua",[0,4,28]],["canale.live",0],["rightnonel.com",[0,4,15]],["viafarmaciaonline.it",0],["postcourier.com.pg",[0,64]],["freestreams-live1.tv",0],["verselemzes.hu",[0,2,18,28,49]],["icourse163.org",[0,47]],["dngz.net",[0,28]],["cine.to",1],["filmesonlinex.co",2],["badzjeszczelepszy.pl",[2,15,27]],["oceanof-games.com",[2,4,28]],["techieway.blogspot.com",2],["69translations.blogspot.com",[2,15,48]],["cyberspace.world",2],["dailynewsview.com",2],["youmath.it",2],["operatorsekolahdbn.com",2],["brownsboys.com",2],["dicionariocriativo.com.br",3],["bloombergquint.com",3],["bibliacatolica.com.br",3],["mongri.net",3],["gay69.stream",4],["raccontivietati.com",4],["neyrologos.gr",4],["ggeguide.com",4],["elizabeth-mitchell.org",4],["blasianluvforever.com",4],["autophorie.de",4],["fruit01.xyz",4],["experciencia.com",4],["ifdreamscametrue.com",4],["juegosdetiempolibre.org",4],["naijagists.com",4],["chessimprover.com",4],["diaforetiko.gr",4],["tchadcarriere.com",4],["shaamtv.com",4],["totemat.pl",4],["wawlist.com",4],["cristelageorgescu.ro",[4,28,47]],["ilovevaldinon.it",4],["dialectsarchive.com",4],["sportsnet.ca",5],["punto-informatico.it",6],["emol.com",7],["springfieldspringfield.co.uk",7],["infomoney.com.br",7],["otvfoco.com.br",7],["portalportuario.cl",7],["adevarul.ro",7],["city-data.com",7],["mixmods.com.br",8],["deezer.com",9],["gota.io",10],["xnxx.com",10],["greenocktelegraph.co.uk",11],["med1.de",11],["tomsguide.com",11],["loudersound.com",11],["pushsquare.com",11],["allafinedelpalo.it",12],["heypoorplayer.com",12],["economictimes.indiatimes.com",13],["fin24.com",14],["djelfa.info",15],["motogon.ru",16],["ctrl.blog",17],["satcesc.com",18],["priberam.org",19],["tunovelaligera.com",20],["zdnet.de",21],["cinemablend.com",22],["windows101tricks.com",22],["chimica-online.it",23],["blog.kwick.de",[23,28]],["texte.work",23],["neowin.net",24],["laptopmag.com",24],["livescience.com",24],["digitalcameraworld.com",24],["guitarworld.com",24],["musicradar.com",24],["keighleynews.co.uk",24],["creativebloq.com",24],["t3.com",24],["recantodasletras.com.br",25],["lesoir.be",26],["yusepjaelani.blogspot.com",28],["ideaberita.com",28],["my-code4you.blogspot.com",28],["polagriparts.pl",28],["followmikewynn.com",28],["dreamlandresort.com",29],["live.b-c-e.us",29],["tecmundo.net",29],["disheye.com",29],["impotsurlerevenu.org",30],["insidermonkey.com",31],["kurosave.com",32],["gamebanana.com",33],["trojmiasto.pl",33],["poedb.tw",33],["good-football.org",33],["theregister.co.uk",34],["doranobi-fansub.id",35],["opportunitydesk.org",35],["jootc.com",[35,41]],["selfstudyanthro.com",35],["relet365.com",35],["wikibious.com",35],["koreanaddict.net",35],["generationamiga.com",35],["psihologiadeazi.ro",[35,64]],["flinsetyadi.com",35],["projektowanie-wnetrz-online.pl",35],["easyayurveda.com",[35,41,64,68]],["sharktankblog.com",[35,41,64,68]],["m4uhd.net",36],["quotev.com",37],["maxstream.video",38],["renditepassive.net",38],["52bdys.com",38],["earth.com",39],["digitaltrends.com",39],["nwherald.com",39],["lalawin.com",40],["ufret.jp",42],["motortrader.com.my",43],["2219.net",44],["upstream.to",45],["progameguides.com",46],["jpnn.com",47],["farm-ro.desigusxpro.com",47],["accgroup.vn",47],["deccanherald.com",47],["ndtvprofit.com",47],["empregoestagios.com",50],["elektrikmen.com",50],["hitproversion.com",50],["jobskaro.com",50],["appd.at",50],["apk1s.com",50],["audiobookcup.com",50],["geeksoncoffee.com",50],["vinaurl.blogspot.com",51],["comprerural.com",52],["cssreference.io",53],["revistavanityfair.es",54],["toppremiumpro.com",55],["androidtvbox.eu",56],["dollarvr.com",56],["newsme.gr",56],["imooc.com",58],["commandlinux.com",59],["hongxiu.com",60],["readnovel.com",60],["c4ddownload.com",61],["the-scorpions.com",61],["lethalpanda.com",61],["animatedshows.to",62],["miraculous.to",62],["phimdinhcao.com",63],["beastx.top",63],["chillx.top",63],["playerx.stream",63],["phimlongtieng.net",63],["rubystm.com",63],["rubyvid.com",63],["revenue.land",64],["sertracen.com.pa",64],["pitesti24.ro",64],["samsungtechwin.com",64],["cours-de-droit.net",64],["iptv4best.com",64],["blogvisaodemercado.pt",64],["kapitalis.com",64],["tiempo.hn",64],["winmeen.com",64],["ibps.in",64],["visse.com.br",64],["javsubtitle.co",64],["learninsta.com",64],["licensekeys.org",64],["mediahiburan.my",64],["tipssehatcantik.com",64],["anime-drama.jp",64],["jbjbgame.com",64],["viatasisanatate.com",64],["ziarulargesul.ro",64],["globaldefensecorp.com",64],["gossipnextdoor.com",64],["coffeeapps.ir",64],["media.framu.world",64],["immobiliaremia.com",64],["colegiosconcertados.info",64],["bigdatauni.com",64],["riwyat.com",64],["rukim.id",64],["visefierbinti.ro",64],["cyberkrafttraining.com",64],["theaircurrent.com",64],["ncert-solutions.com",64],["ncertsolutions.guru",64],["nocturnetls.net",64],["clockks.com",64],["ananda-yoga.ro",64],["poolpiscina.com",64],["infodifesa.it",64],["getective.com",64],["flashdumpfiles.com",64],["formatatmak.com",64],["drkrok.com",64],["alphagirlreviews.com",64],["kitchennovel.com",64],["voxvalachorum.ro",64],["cracksone.com",64],["day-hoc.org",64],["onlineonderdelenshop.nl",64],["primicia.com.ve",64],["tech-recipes.com",64],["afrikmag.com",64],["maduras.vip",64],["aprendeinglessila.com",64],["kicknews.today",64],["koalasplayground.com",64],["hellokpop.com",64],["hayatbilgileri.com",64],["moneyexcel.com",64],["placementstore.com",64],["neuroteam-metz.de",64],["codedosa.com",64],["liveyourmaths.com",64],["newspao.gr",64],["ieltsliz.com",64],["programasvirtualespc.net",64],["tempatwisataseru.com",64],["wikiofcelebs.com",64],["jornaljoca.com.br",64],["arcanescans.com",64],["filmzone.com",64],["hiraethtranslation.com",64],["kaystls.site",64],["home.novel-gate.com",64],["plural.jor.br",64],["evreporter.com",64],["sinhasannews.com",64],["viewsofgreece.gr",64],["yhocdata.com",65],["iskandinavya.com",66],["sneakernews.com",67],["forplayx.ink",69],["aboutchromebooks.com",70],["ancient.eu",70],["comingsoon.net",70],["daysoftheyear.com",70],["edn.com",70],["gearjunkie.com",70],["harvardmagazine.com",70],["lgbtqnation.com",70],["majorgeeks.com",70],["mangainn.net",70],["medievalists.net",70],["sherdog.com",70],["sidereel.com",70],["statesman.com",70],["winhelponline.com",70],["edurev.in",71],["decider.com",72],["nypost.com",72],["pagesix.com",72],["librospreuniversitariospdf.blogspot.com",73],["ncrtsolutions.in",74],["d4armory.io",75],["helldivers.io",75],["lcpdfr.com",76]]);

const entitiesMap = new Map([["desbloqueador",0],["voirfilms",[0,2]],["anisubindo",[0,28]],["tabonitobrasil",4],["fmovies",18],["wstream",38],["animedao",63]]);

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

uBOL_abortOnPropertyRead();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
