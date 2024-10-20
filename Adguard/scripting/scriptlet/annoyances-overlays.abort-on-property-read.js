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

const argsList = [["document.oncontextmenu"],["oncontextmenu"],["document.onselectstart"],["getSelection"],["disableSelection"],["hasAdblock"],["__cmpGdprAppliesGlobally"],["uxGuid"],["blazemedia_adBlock"],["addLink"],["abde"],["onbeforeunload"],["fuckAdBlock"],["_sp_._networkListenerData"],["ABDSettings"],["intsFequencyCap"],["Date.prototype.toUTCString"],["document.onmousedown"],["oSpPOptions"],["a1lck"],["document.ondragstart"],["document.documentElement.oncopy"],["mdp_appender"],["can_i_run_ads"],["disableselect"],["_sp_.mms.startMsg"],["RL.licenseman.init"],["abStyle"],["ga_ExitPopup3339"],["document.onkeydown"],["alert"],["alerte_declanchee"],["ABD"],["document.body.setAttribute"],["adBlockDetected"],["adtoniq"],["disable_copy"],["locdau"],["document.body.oncopy"],["onload"],["HTMLIFrameElement"],["tjQuery"],["disable_hot_keys"],["nd_shtml"],["canRunAds"],["clickNS"],["_0xfff1"],["admrlWpJsonP"],["document.oncopy"],["document.onclick"],["document.onkeypress"],["disableEnterKey"],["document.write"],["shortcut"],["append_link"],["carbonLoaded"],["initAdBlockerPanel"],["cpp_loc"],["nocontextmenu"],["_0x1a4c"],["addCopyright"],["copy_div_id"],["LBF.define"],["b2a"],["debugchange"],["devtoolsDetector"],["nocontext"],["contentprotector"],["kan_vars.adblock"],["sneakerGoogleTag"],["wccp_pro_iscontenteditable"],["devtoolsDetector.addListener"],["googletag"],["openOverlaySignup"],["googletag.cmd"],["checkDevTools"],["document.body.onselectstart"],["nitroAds"],["FuckAdBlock"]];

const hostnamesMap = new Map([["mimaletadepeliculas.blogspot.com",0],["megapastes.com",[0,2]],["programegratuitepc.com",[0,4]],["digitalsynopsis.com",[0,4]],["gaypornmasters.com",0],["knshow.com",0],["malybelgrad.pl",0],["demolandia.net",0],["statelibrary.us",0],["coag.pl",0],["quicksleeper.pl",0],["m4ufree.tv",0],["lexlog.pl",[0,2,17]],["mainframestechhelp.com",0],["gamershit.altervista.org",0],["gagetmatome.com",0],["virpe.com",0],["feel-the-darkness.rocks",[0,4,17]],["bricksrus.com",0],["jacquieetmichel.net",0],["ahzaa.net",0],["karyawanesia.com",0],["langitmovie.com",0],["oceanof-games.com",[0,2,4,29]],["ponselharian.com",[0,2,4]],["holakikou.com",[0,4]],["hotpornfile.org",[0,2,29,50]],["e-sushi.fr",0],["evasion-online.com",0],["exclusifvoyages.com",0],["payeer-gift.ru",0],["pcso-lottoresults.com",0],["iovivoatenerife.it",[0,4]],["tritinia.com",[0,36]],["battle-one.com",[0,4]],["wjx.cn",[0,2,59]],["wjx.top",[0,2,59]],["masuit.com",0],["book.zongheng.com",0],["ciweimao.com",0],["360doc.com",0],["dushu.qq.com",[0,2,48]],["qiangwaikan.com",[0,4]],["7fyd.com",0],["unikampus.net",0],["atlas-geografic.net",0],["filmpornoitaliano.org",[0,2,17]],["cafe.naver.com",[0,2,20]],["cinemakottaga.top",0],["ytv.co.jp",0],["flashplayer.org.ua",[0,4,29]],["canale.live",0],["rightnonel.com",[0,4,17]],["viafarmaciaonline.it",0],["postcourier.com.pg",[0,66]],["freestreams-live1.tv",0],["verselemzes.hu",[0,2,20,29,50]],["icourse163.org",[0,48]],["dngz.net",[0,29]],["cine.to",1],["filmesonlinex.co",2],["badzjeszczelepszy.pl",[2,17,28]],["hebrew4christians.com",2],["techieway.blogspot.com",2],["69translations.blogspot.com",[2,17,49]],["cyberspace.world",2],["dailynewsview.com",2],["youmath.it",2],["operatorsekolahdbn.com",2],["brownsboys.com",2],["dicionariocriativo.com.br",3],["bloombergquint.com",3],["bibliacatolica.com.br",3],["mongri.net",3],["gay69.stream",4],["raccontivietati.com",4],["neyrologos.gr",4],["ggeguide.com",4],["elizabeth-mitchell.org",4],["blasianluvforever.com",4],["autophorie.de",4],["fruit01.xyz",4],["experciencia.com",4],["ifdreamscametrue.com",4],["juegosdetiempolibre.org",4],["naijagists.com",4],["chessimprover.com",4],["diaforetiko.gr",4],["tchadcarriere.com",4],["shaamtv.com",4],["totemat.pl",4],["wawlist.com",4],["cristelageorgescu.ro",[4,29,48]],["ilovevaldinon.it",4],["dialectsarchive.com",4],["wings.io",5],["al.com",6],["allkpop.com",6],["calendarpedia.co.uk",6],["ccn.com",6],["cleveland.com",6],["comicsands.com",6],["duffelblog.com",6],["gamepur.com",6],["gamerevolution.com",6],["interestingengineering.com",6],["keengamer.com",6],["listenonrepeat.com",6],["mandatory.com",6],["mlive.com",6],["musicfeeds.com.au",6],["newatlas.com",6],["pgatour.com",6],["readlightnovel.org",6],["secondnexus.com",6],["sevenforums.com",6],["sport24.co.za",6],["superherohype.com",6],["thefashionspot.com",6],["theodysseyonline.com",6],["totalbeauty.com",6],["westernjournal.com",6],["cinemablend.com",6],["windows101tricks.com",6],["sportsnet.ca",7],["punto-informatico.it",8],["emol.com",9],["springfieldspringfield.co.uk",9],["infomoney.com.br",9],["otvfoco.com.br",9],["portalportuario.cl",9],["adevarul.ro",9],["city-data.com",9],["mixmods.com.br",10],["deezer.com",11],["gota.io",12],["xnxx.com",12],["greenocktelegraph.co.uk",13],["med1.de",13],["tomsguide.com",13],["loudersound.com",13],["pushsquare.com",13],["allafinedelpalo.it",14],["heypoorplayer.com",14],["economictimes.indiatimes.com",15],["fin24.com",16],["djelfa.info",17],["motogon.ru",18],["ctrl.blog",19],["satcesc.com",20],["priberam.org",21],["tunovelaligera.com",22],["zdnet.de",23],["chimica-online.it",24],["blog.kwick.de",[24,29]],["texte.work",24],["neowin.net",25],["laptopmag.com",25],["livescience.com",25],["digitalcameraworld.com",25],["guitarworld.com",25],["musicradar.com",25],["keighleynews.co.uk",25],["creativebloq.com",25],["t3.com",25],["recantodasletras.com.br",26],["lesoir.be",27],["yusepjaelani.blogspot.com",29],["ideaberita.com",29],["my-code4you.blogspot.com",29],["polagriparts.pl",29],["followmikewynn.com",29],["dreamlandresort.com",30],["live.b-c-e.us",30],["tecmundo.net",30],["disheye.com",30],["impotsurlerevenu.org",31],["insidermonkey.com",32],["kurosave.com",33],["gamebanana.com",34],["trojmiasto.pl",34],["poedb.tw",34],["good-football.org",34],["theregister.co.uk",35],["doranobi-fansub.id",36],["opportunitydesk.org",36],["jootc.com",[36,42]],["selfstudyanthro.com",36],["relet365.com",36],["wikibious.com",36],["koreanaddict.net",36],["generationamiga.com",36],["psihologiadeazi.ro",[36,66]],["flinsetyadi.com",36],["projektowanie-wnetrz-online.pl",36],["easyayurveda.com",[36,42,66,70]],["sharktankblog.com",[36,42,66,70]],["m4uhd.net",37],["quotev.com",38],["maxstream.video",39],["renditepassive.net",39],["52bdys.com",39],["earth.com",40],["digitaltrends.com",40],["nwherald.com",40],["lalawin.com",41],["ufret.jp",43],["motortrader.com.my",44],["2219.net",45],["upstream.to",46],["progameguides.com",47],["jpnn.com",48],["farm-ro.desigusxpro.com",48],["accgroup.vn",48],["deccanherald.com",48],["ndtvprofit.com",48],["empregoestagios.com",51],["elektrikmen.com",51],["hitproversion.com",51],["jobskaro.com",51],["appd.at",51],["apk1s.com",51],["audiobookcup.com",51],["geeksoncoffee.com",51],["elijahwood.altervista.org",52],["vinaurl.blogspot.com",53],["comprerural.com",54],["cssreference.io",55],["revistavanityfair.es",56],["toppremiumpro.com",57],["androidtvbox.eu",58],["dollarvr.com",58],["newsme.gr",58],["imooc.com",60],["commandlinux.com",61],["hongxiu.com",62],["readnovel.com",62],["c4ddownload.com",63],["the-scorpions.com",63],["lethalpanda.com",63],["animatedshows.to",64],["miraculous.to",64],["phimdinhcao.com",65],["beastx.top",65],["chillx.top",65],["playerx.stream",65],["phimlongtieng.net",65],["rubystm.com",65],["rubyvid.com",65],["revenue.land",66],["sertracen.com.pa",66],["pitesti24.ro",66],["samsungtechwin.com",66],["cours-de-droit.net",66],["iptv4best.com",66],["blogvisaodemercado.pt",66],["kapitalis.com",66],["tiempo.hn",66],["winmeen.com",66],["ibps.in",66],["visse.com.br",66],["javsubtitle.co",66],["learninsta.com",66],["licensekeys.org",66],["mediahiburan.my",66],["tipssehatcantik.com",66],["anime-drama.jp",66],["jbjbgame.com",66],["viatasisanatate.com",66],["ziarulargesul.ro",66],["globaldefensecorp.com",66],["gossipnextdoor.com",66],["coffeeapps.ir",66],["media.framu.world",66],["immobiliaremia.com",66],["colegiosconcertados.info",66],["bigdatauni.com",66],["riwyat.com",66],["rukim.id",66],["visefierbinti.ro",66],["cyberkrafttraining.com",66],["theaircurrent.com",66],["ncert-solutions.com",66],["ncertsolutions.guru",66],["nocturnetls.net",66],["clockks.com",66],["ananda-yoga.ro",66],["poolpiscina.com",66],["infodifesa.it",66],["getective.com",66],["flashdumpfiles.com",66],["formatatmak.com",66],["drkrok.com",66],["alphagirlreviews.com",66],["kitchennovel.com",66],["voxvalachorum.ro",66],["cracksone.com",66],["day-hoc.org",66],["onlineonderdelenshop.nl",66],["primicia.com.ve",66],["tech-recipes.com",66],["afrikmag.com",66],["maduras.vip",66],["aprendeinglessila.com",66],["kicknews.today",66],["koalasplayground.com",66],["hellokpop.com",66],["hayatbilgileri.com",66],["moneyexcel.com",66],["placementstore.com",66],["neuroteam-metz.de",66],["codedosa.com",66],["liveyourmaths.com",66],["newspao.gr",66],["ieltsliz.com",66],["programasvirtualespc.net",66],["tempatwisataseru.com",66],["wikiofcelebs.com",66],["jornaljoca.com.br",66],["arcanescans.com",66],["filmzone.com",66],["hiraethtranslation.com",66],["kaystls.site",66],["home.novel-gate.com",66],["plural.jor.br",66],["evreporter.com",66],["sinhasannews.com",66],["yhocdata.com",67],["iskandinavya.com",68],["sneakernews.com",69],["forplayx.ink",71],["aboutchromebooks.com",72],["ancient.eu",72],["comingsoon.net",72],["daysoftheyear.com",72],["edn.com",72],["gearjunkie.com",72],["harvardmagazine.com",72],["lgbtqnation.com",72],["majorgeeks.com",72],["mangainn.net",72],["medievalists.net",72],["sherdog.com",72],["sidereel.com",72],["statesman.com",72],["winhelponline.com",72],["edurev.in",73],["decider.com",74],["nypost.com",74],["pagesix.com",74],["librospreuniversitariospdf.blogspot.com",75],["ncrtsolutions.in",76],["d4armory.io",77],["helldivers.io",77],["lcpdfr.com",78]]);

const entitiesMap = new Map([["desbloqueador",0],["voirfilms",[0,2]],["anisubindo",[0,29]],["tabonitobrasil",4],["fmovies",20],["wstream",39],["animedao",65]]);

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
