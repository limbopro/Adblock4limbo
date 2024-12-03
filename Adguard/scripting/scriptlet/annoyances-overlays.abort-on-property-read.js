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

const argsList = [["document.oncontextmenu"],["oncontextmenu"],["document.onselectstart"],["getSelection"],["disableSelection"],["uxGuid"],["blazemedia_adBlock"],["addLink"],["abde"],["onbeforeunload"],["fuckAdBlock"],["_sp_._networkListenerData"],["ABDSettings"],["intsFequencyCap"],["Date.prototype.toUTCString"],["document.onmousedown"],["oSpPOptions"],["a1lck"],["document.ondragstart"],["document.documentElement.oncopy"],["can_i_run_ads"],["__cmpGdprAppliesGlobally"],["disableselect"],["_sp_.mms.startMsg"],["RL.licenseman.init"],["abStyle"],["ga_ExitPopup3339"],["document.onkeydown"],["alert"],["alerte_declanchee"],["ABD"],["document.body.setAttribute"],["adBlockDetected"],["adtoniq"],["disable_copy"],["locdau"],["document.body.oncopy"],["onload"],["HTMLIFrameElement"],["tjQuery"],["disable_hot_keys"],["nd_shtml"],["canRunAds"],["clickNS"],["_0xfff1"],["admrlWpJsonP"],["document.oncopy"],["document.onclick"],["document.onkeypress"],["disableEnterKey"],["shortcut"],["append_link"],["carbonLoaded"],["initAdBlockerPanel"],["cpp_loc"],["nocontextmenu"],["_0x1a4c"],["addCopyright"],["copy_div_id"],["LBF.define"],["b2a"],["debugchange"],["devtoolsDetector"],["nocontext"],["contentprotector"],["kan_vars.adblock"],["sneakerGoogleTag"],["wccp_pro_iscontenteditable"],["devtoolsDetector.addListener"],["googletag"],["openOverlaySignup"],["googletag.cmd"],["checkDevTools"],["document.body.onselectstart"],["nitroAds"],["FuckAdBlock"]];

const hostnamesMap = new Map([["mimaletadepeliculas.blogspot.com",0],["megapastes.com",[0,2]],["programegratuitepc.com",[0,4]],["digitalsynopsis.com",[0,4]],["gaypornmasters.com",0],["knshow.com",0],["malybelgrad.pl",0],["demolandia.net",0],["statelibrary.us",0],["coag.pl",0],["quicksleeper.pl",0],["lexlog.pl",[0,2,15]],["mainframestechhelp.com",0],["gamershit.altervista.org",0],["gagetmatome.com",0],["virpe.com",0],["feel-the-darkness.rocks",[0,4,15]],["bricksrus.com",0],["jacquieetmichel.net",0],["ahzaa.net",0],["karyawanesia.com",0],["langitmovie.com",0],["ponselharian.com",[0,2,4]],["holakikou.com",[0,4]],["hotpornfile.org",[0,2,27,48]],["e-sushi.fr",0],["evasion-online.com",0],["exclusifvoyages.com",0],["payeer-gift.ru",0],["pcso-lottoresults.com",0],["iovivoatenerife.it",[0,4]],["tritinia.com",[0,34]],["battle-one.com",[0,4]],["wjx.cn",[0,2,56]],["wjx.top",[0,2,56]],["masuit.com",0],["book.zongheng.com",0],["ciweimao.com",0],["360doc.com",0],["dushu.qq.com",[0,2,46]],["qiangwaikan.com",[0,4]],["7fyd.com",0],["unikampus.net",0],["atlas-geografic.net",0],["filmpornoitaliano.org",[0,2,15]],["cafe.naver.com",[0,2,18]],["cinemakottaga.top",0],["ytv.co.jp",0],["flashplayer.org.ua",[0,4,27]],["canale.live",0],["rightnonel.com",[0,4,15]],["viafarmaciaonline.it",0],["postcourier.com.pg",[0,63]],["freestreams-live1.tv",0],["verselemzes.hu",[0,2,18,27,48]],["icourse163.org",[0,46]],["dngz.net",[0,27]],["cine.to",1],["filmesonlinex.co",2],["badzjeszczelepszy.pl",[2,15,26]],["oceanof-games.com",[2,4,27]],["techieway.blogspot.com",2],["69translations.blogspot.com",[2,15,47]],["cyberspace.world",2],["dailynewsview.com",2],["youmath.it",2],["operatorsekolahdbn.com",2],["brownsboys.com",2],["dicionariocriativo.com.br",3],["bloombergquint.com",3],["bibliacatolica.com.br",3],["mongri.net",3],["gay69.stream",4],["raccontivietati.com",4],["neyrologos.gr",4],["ggeguide.com",4],["elizabeth-mitchell.org",4],["blasianluvforever.com",4],["autophorie.de",4],["fruit01.xyz",4],["experciencia.com",4],["ifdreamscametrue.com",4],["juegosdetiempolibre.org",4],["naijagists.com",4],["chessimprover.com",4],["diaforetiko.gr",4],["tchadcarriere.com",4],["shaamtv.com",4],["totemat.pl",4],["wawlist.com",4],["cristelageorgescu.ro",[4,27,46]],["ilovevaldinon.it",4],["dialectsarchive.com",4],["sportsnet.ca",5],["punto-informatico.it",6],["emol.com",7],["springfieldspringfield.co.uk",7],["infomoney.com.br",7],["otvfoco.com.br",7],["portalportuario.cl",7],["adevarul.ro",7],["city-data.com",7],["mixmods.com.br",8],["deezer.com",9],["gota.io",10],["xnxx.com",10],["greenocktelegraph.co.uk",11],["med1.de",11],["tomsguide.com",11],["loudersound.com",11],["pushsquare.com",11],["allafinedelpalo.it",12],["heypoorplayer.com",12],["economictimes.indiatimes.com",13],["fin24.com",14],["djelfa.info",15],["motogon.ru",16],["ctrl.blog",17],["satcesc.com",18],["priberam.org",19],["zdnet.de",20],["cinemablend.com",21],["windows101tricks.com",21],["chimica-online.it",22],["blog.kwick.de",[22,27]],["texte.work",22],["neowin.net",23],["laptopmag.com",23],["livescience.com",23],["digitalcameraworld.com",23],["guitarworld.com",23],["musicradar.com",23],["keighleynews.co.uk",23],["creativebloq.com",23],["t3.com",23],["recantodasletras.com.br",24],["lesoir.be",25],["yusepjaelani.blogspot.com",27],["ideaberita.com",27],["my-code4you.blogspot.com",27],["polagriparts.pl",27],["followmikewynn.com",27],["dreamlandresort.com",28],["live.b-c-e.us",28],["tecmundo.net",28],["disheye.com",28],["impotsurlerevenu.org",29],["insidermonkey.com",30],["kurosave.com",31],["gamebanana.com",32],["trojmiasto.pl",32],["poedb.tw",32],["good-football.org",32],["theregister.co.uk",33],["doranobi-fansub.id",34],["opportunitydesk.org",34],["jootc.com",[34,40]],["selfstudyanthro.com",34],["relet365.com",34],["wikibious.com",34],["generationamiga.com",34],["psihologiadeazi.ro",[34,63]],["flinsetyadi.com",34],["projektowanie-wnetrz-online.pl",34],["easyayurveda.com",[34,40,63,67]],["sharktankblog.com",[34,40,63,67]],["m4uhd.net",35],["quotev.com",36],["maxstream.video",37],["renditepassive.net",37],["52bdys.com",37],["earth.com",38],["digitaltrends.com",38],["nwherald.com",38],["lalawin.com",39],["ufret.jp",41],["motortrader.com.my",42],["2219.net",43],["upstream.to",44],["progameguides.com",45],["jpnn.com",46],["farm-ro.desigusxpro.com",46],["accgroup.vn",46],["deccanherald.com",46],["ndtvprofit.com",46],["empregoestagios.com",49],["elektrikmen.com",49],["hitproversion.com",49],["jobskaro.com",49],["appd.at",49],["apk1s.com",49],["audiobookcup.com",49],["geeksoncoffee.com",49],["vinaurl.blogspot.com",50],["comprerural.com",51],["cssreference.io",52],["revistavanityfair.es",53],["toppremiumpro.com",54],["androidtvbox.eu",55],["dollarvr.com",55],["newsme.gr",55],["imooc.com",57],["commandlinux.com",58],["hongxiu.com",59],["readnovel.com",59],["c4ddownload.com",60],["the-scorpions.com",60],["lethalpanda.com",60],["animatedshows.to",61],["miraculous.to",61],["phimdinhcao.com",62],["beastx.top",62],["chillx.top",62],["playerx.stream",62],["phimlongtieng.net",62],["rubystm.com",62],["rubyvid.com",62],["revenue.land",63],["sertracen.com.pa",63],["pitesti24.ro",63],["samsungtechwin.com",63],["cours-de-droit.net",63],["iptv4best.com",63],["blogvisaodemercado.pt",63],["kapitalis.com",63],["tiempo.hn",63],["winmeen.com",63],["ibps.in",63],["visse.com.br",63],["javsubtitle.co",63],["learninsta.com",63],["licensekeys.org",63],["mediahiburan.my",63],["tipssehatcantik.com",63],["anime-drama.jp",63],["jbjbgame.com",63],["viatasisanatate.com",63],["ziarulargesul.ro",63],["globaldefensecorp.com",63],["gossipnextdoor.com",63],["coffeeapps.ir",63],["media.framu.world",63],["immobiliaremia.com",63],["colegiosconcertados.info",63],["bigdatauni.com",63],["riwyat.com",63],["rukim.id",63],["visefierbinti.ro",63],["cyberkrafttraining.com",63],["theaircurrent.com",63],["ncert-solutions.com",63],["ncertsolutions.guru",63],["nocturnetls.net",63],["clockks.com",63],["ananda-yoga.ro",63],["poolpiscina.com",63],["infodifesa.it",63],["getective.com",63],["flashdumpfiles.com",63],["formatatmak.com",63],["drkrok.com",63],["alphagirlreviews.com",63],["kitchennovel.com",63],["voxvalachorum.ro",63],["cracksone.com",63],["day-hoc.org",63],["onlineonderdelenshop.nl",63],["primicia.com.ve",63],["tech-recipes.com",63],["afrikmag.com",63],["maduras.vip",63],["aprendeinglessila.com",63],["kicknews.today",63],["koalasplayground.com",63],["hellokpop.com",63],["hayatbilgileri.com",63],["moneyexcel.com",63],["placementstore.com",63],["neuroteam-metz.de",63],["codedosa.com",63],["liveyourmaths.com",63],["newspao.gr",63],["ieltsliz.com",63],["programasvirtualespc.net",63],["tempatwisataseru.com",63],["wikiofcelebs.com",63],["jornaljoca.com.br",63],["arcanescans.com",63],["filmzone.com",63],["hiraethtranslation.com",63],["kaystls.site",63],["home.novel-gate.com",63],["plural.jor.br",63],["evreporter.com",63],["sinhasannews.com",63],["viewsofgreece.gr",63],["rozbor-dila.cz",63],["yhocdata.com",64],["iskandinavya.com",65],["sneakernews.com",66],["forplayx.ink",68],["aboutchromebooks.com",69],["ancient.eu",69],["comingsoon.net",69],["daysoftheyear.com",69],["edn.com",69],["gearjunkie.com",69],["harvardmagazine.com",69],["lgbtqnation.com",69],["majorgeeks.com",69],["mangainn.net",69],["medievalists.net",69],["sherdog.com",69],["sidereel.com",69],["statesman.com",69],["winhelponline.com",69],["edurev.in",70],["decider.com",71],["nypost.com",71],["pagesix.com",71],["librospreuniversitariospdf.blogspot.com",72],["ncrtsolutions.in",73],["d4armory.io",74],["helldivers.io",74],["lcpdfr.com",75]]);

const entitiesMap = new Map([["desbloqueador",0],["voirfilms",[0,2]],["anisubindo",[0,27]],["tabonitobrasil",4],["fmovies",18],["wstream",37],["animedao",62]]);

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
