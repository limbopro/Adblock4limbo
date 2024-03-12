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

/* jshint esversion:11 */
/* global cloneInto */

'use strict';

// ruleset: annoyances-overlays

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_abortOnPropertyRead = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["document.oncontextmenu"],["oncontextmenu"],["document.onselectstart"],["_sp_._networkListenerData"],["hasAdblock"],["getSelection"],["__cmpGdprAppliesGlobally"],["disableSelection"],["uxGuid"],["blazemedia_adBlock"],["addLink"],["abde"],["onbeforeunload"],["fuckAdBlock"],["ABDSettings"],["intsFequencyCap"],["Date.prototype.toUTCString"],["document.onmousedown"],["oSpPOptions"],["a1lck"],["document.ondragstart"],["plusonet"],["document.documentElement.oncopy"],["mdp_appender"],["can_i_run_ads"],["bizpanda"],["disableselect"],["_sp_.mms.startMsg"],["RL.licenseman.init"],["abStyle"],["ga_ExitPopup3339"],["document.onkeydown"],["alert"],["alerte_declanchee"],["ABD"],["document.body.setAttribute"],["adBlockDetected"],["adtoniq"],["disable_copy"],["locdau"],["document.body.oncopy"],["onload"],["HTMLIFrameElement"],["tjQuery"],["disable_hot_keys"],["nd_shtml"],["canRunAds"],["clickNS"],["_0xfff1"],["admrlWpJsonP"],["document.oncopy"],["document.onclick"],["document.onkeypress"],["disableEnterKey"],["document.write"],["shortcut"],["append_link"],["carbonLoaded"],["initAdBlockerPanel"],["cpp_loc"],["nocontextmenu"],["_0x1a4c"],["addCopyright"],["copy_div_id"],["LBF.define"],["b2a"],["debugchange"],["devtoolsDetector"],["nocontext"],["contentprotector"],["kan_vars.adblock"],["onAdScriptFailure"],["sneakerGoogleTag"],["wccp_pro_iscontenteditable"],["devtoolsDetector.addListener"],["googletag"],["openOverlaySignup"],["googletag.cmd"],["checkDevTools"],["document.body.onselectstart"],["nitroAds"]];

const hostnamesMap = new Map([["mimaletadepeliculas.blogspot.com",0],["megapastes.com",[0,2]],["programegratuitepc.com",[0,7]],["digitalsynopsis.com",[0,7]],["gaypornmasters.com",0],["knshow.com",0],["malybelgrad.pl",0],["demolandia.net",0],["statelibrary.us",0],["coag.pl",0],["quicksleeper.pl",0],["m4ufree.tv",0],["lexlog.pl",[0,2,17]],["mainframestechhelp.com",0],["gamershit.altervista.org",0],["gagetmatome.com",0],["virpe.com",0],["feel-the-darkness.rocks",[0,7,17]],["bricksrus.com",0],["jacquieetmichel.net",0],["ahzaa.net",0],["karyawanesia.com",0],["langitmovie.com",0],["oceanof-games.com",[0,2,7,31]],["ponselharian.com",[0,2,7]],["holakikou.com",[0,7]],["hotpornfile.org",[0,2,31,52]],["e-sushi.fr",0],["evasion-online.com",0],["exclusifvoyages.com",0],["payeer-gift.ru",0],["pcso-lottoresults.com",0],["iovivoatenerife.it",[0,7]],["tritinia.com",[0,38]],["battle-one.com",[0,7]],["wjx.cn",[0,2,61]],["wjx.top",[0,2,61]],["masuit.com",0],["book.zongheng.com",0],["ciweimao.com",0],["360doc.com",0],["dushu.qq.com",[0,2,50]],["qiangwaikan.com",[0,7]],["7fyd.com",0],["unikampus.net",0],["atlas-geografic.net",0],["filmpornoitaliano.org",[0,2,17]],["cafe.naver.com",[0,2,20]],["cinemakottaga.top",0],["ytv.co.jp",0],["flashplayer.org.ua",[0,7,31]],["canale.live",0],["rightnonel.com",[0,7,17]],["viafarmaciaonline.it",0],["postcourier.com.pg",[0,68]],["freestreams-live1.tv",0],["verselemzes.hu",[0,2,20,31,52]],["icourse163.org",[0,50]],["dngz.net",[0,31]],["cine.to",1],["filmesonlinex.co",2],["badzjeszczelepszy.pl",[2,17,30]],["hebrew4christians.com",2],["techieway.blogspot.com",2],["69translations.blogspot.com",[2,17,51]],["cyberspace.world",2],["dailynewsview.com",2],["youmath.it",2],["operatorsekolahdbn.com",2],["brownsboys.com",2],["weather.com",3],["greenocktelegraph.co.uk",3],["med1.de",3],["tomsguide.com",3],["loudersound.com",3],["pushsquare.com",3],["wings.io",4],["dicionariocriativo.com.br",5],["bloombergquint.com",5],["bibliacatolica.com.br",5],["mongri.net",5],["al.com",6],["allkpop.com",6],["calendarpedia.co.uk",6],["ccn.com",6],["cleveland.com",6],["comicsands.com",6],["duffelblog.com",6],["gamepur.com",6],["gamerevolution.com",6],["interestingengineering.com",6],["keengamer.com",6],["listenonrepeat.com",6],["mandatory.com",6],["mlive.com",6],["musicfeeds.com.au",6],["newatlas.com",6],["pgatour.com",6],["readlightnovel.org",6],["secondnexus.com",6],["sevenforums.com",6],["sport24.co.za",6],["superherohype.com",6],["thefashionspot.com",6],["theodysseyonline.com",6],["totalbeauty.com",6],["westernjournal.com",6],["cinemablend.com",6],["windows101tricks.com",6],["gay69.stream",7],["raccontivietati.com",7],["neyrologos.gr",7],["ggeguide.com",7],["elizabeth-mitchell.org",7],["blasianluvforever.com",7],["autophorie.de",7],["fruit01.xyz",7],["experciencia.com",7],["ifdreamscametrue.com",7],["juegosdetiempolibre.org",7],["naijagists.com",7],["chessimprover.com",7],["diaforetiko.gr",7],["tchadcarriere.com",7],["shaamtv.com",7],["totemat.pl",7],["wawlist.com",7],["cristelageorgescu.ro",[7,31,50]],["ilovevaldinon.it",7],["dialectsarchive.com",7],["sportsnet.ca",8],["punto-informatico.it",9],["emol.com",10],["springfieldspringfield.co.uk",10],["infomoney.com.br",10],["otvfoco.com.br",10],["portalportuario.cl",10],["adevarul.ro",10],["city-data.com",10],["mixmods.com.br",11],["deezer.com",12],["gota.io",13],["xnxx.com",13],["allafinedelpalo.it",14],["heypoorplayer.com",14],["economictimes.indiatimes.com",15],["fin24.com",16],["djelfa.info",17],["motogon.ru",18],["ctrl.blog",19],["satcesc.com",20],["descargasnsn.com",21],["priberam.org",22],["tunovelaligera.com",23],["zdnet.de",24],["putlockerfun.com",25],["chimica-online.it",26],["blog.kwick.de",[26,31]],["texte.work",26],["neowin.net",27],["laptopmag.com",27],["livescience.com",27],["digitalcameraworld.com",27],["guitarworld.com",27],["musicradar.com",27],["keighleynews.co.uk",27],["creativebloq.com",27],["t3.com",27],["recantodasletras.com.br",28],["lesoir.be",29],["yusepjaelani.blogspot.com",31],["ideaberita.com",31],["my-code4you.blogspot.com",31],["polagriparts.pl",31],["followmikewynn.com",31],["dreamlandresort.com",32],["live.b-c-e.us",32],["tecmundo.net",32],["disheye.com",32],["impotsurlerevenu.org",33],["insidermonkey.com",34],["kurosave.com",35],["gamebanana.com",36],["trojmiasto.pl",36],["poedb.tw",36],["good-football.org",36],["theregister.co.uk",37],["doranobi-fansub.id",38],["opportunitydesk.org",38],["jootc.com",[38,44]],["selfstudyanthro.com",38],["relet365.com",38],["wikibious.com",38],["koreanaddict.net",38],["generationamiga.com",38],["psihologiadeazi.ro",[38,68]],["flinsetyadi.com",38],["projektowanie-wnetrz-online.pl",38],["easyayurveda.com",[38,44,68,73]],["sharktankblog.com",[38,44,68,73]],["m4uhd.net",39],["quotev.com",40],["maxstream.video",41],["renditepassive.net",41],["52bdys.com",41],["earth.com",42],["digitaltrends.com",42],["nwherald.com",42],["lalawin.com",43],["ufret.jp",45],["motortrader.com.my",46],["2219.net",47],["upstream.to",48],["progameguides.com",49],["jpnn.com",50],["farm-ro.desigusxpro.com",50],["accgroup.vn",50],["deccanherald.com",50],["ndtvprofit.com",50],["empregoestagios.com",53],["elektrikmen.com",53],["hitproversion.com",53],["jobskaro.com",53],["appd.at",53],["apk1s.com",53],["audiobookcup.com",53],["geeksoncoffee.com",53],["elijahwood.altervista.org",54],["vinaurl.blogspot.com",55],["comprerural.com",56],["cssreference.io",57],["revistavanityfair.es",58],["toppremiumpro.com",59],["androidtvbox.eu",60],["dollarvr.com",60],["newsme.gr",60],["imooc.com",62],["commandlinux.com",63],["hongxiu.com",64],["readnovel.com",64],["c4ddownload.com",65],["the-scorpions.com",65],["lethalpanda.com",65],["animatedshows.to",66],["miraculous.to",66],["phimdinhcao.com",67],["beastx.top",67],["chillx.top",67],["playerx.stream",67],["phimlongtieng.net",67],["revenue.land",68],["pitesti24.ro",68],["samsungtechwin.com",68],["cours-de-droit.net",68],["iptv4best.com",68],["blogvisaodemercado.pt",68],["kapitalis.com",68],["tiempo.hn",68],["winmeen.com",68],["ibps.in",68],["visse.com.br",68],["javsubtitle.co",68],["learninsta.com",68],["licensekeys.org",68],["mediahiburan.my",68],["tipssehatcantik.com",68],["anime-drama.jp",68],["jbjbgame.com",68],["viatasisanatate.com",68],["ziarulargesul.ro",68],["globaldefensecorp.com",68],["gossipnextdoor.com",68],["coffeeapps.ir",68],["media.framu.world",68],["immobiliaremia.com",68],["colegiosconcertados.info",68],["bigdatauni.com",68],["riwyat.com",68],["rukim.id",68],["visefierbinti.ro",68],["cyberkrafttraining.com",68],["theaircurrent.com",68],["ncert-solutions.com",68],["ncertsolutions.guru",68],["nocturnetls.net",68],["clockks.com",68],["ananda-yoga.ro",68],["poolpiscina.com",68],["infodifesa.it",68],["getective.com",68],["flashdumpfiles.com",68],["formatatmak.com",68],["drkrok.com",68],["alphagirlreviews.com",68],["kitchennovel.com",68],["voxvalachorum.ro",68],["cracksone.com",68],["day-hoc.org",68],["onlineonderdelenshop.nl",68],["primicia.com.ve",68],["tech-recipes.com",68],["afrikmag.com",68],["maduras.vip",68],["aprendeinglessila.com",68],["kicknews.today",68],["koalasplayground.com",68],["hellokpop.com",68],["hayatbilgileri.com",68],["moneyexcel.com",68],["placementstore.com",68],["neuroteam-metz.de",68],["codedosa.com",68],["liveyourmaths.com",68],["newspao.gr",68],["ieltsliz.com",68],["programasvirtualespc.net",68],["tempatwisataseru.com",68],["wikiofcelebs.com",68],["jornaljoca.com.br",68],["arcanescans.com",68],["filmzone.com",68],["hiraethtranslation.com",68],["kaystls.site",68],["home.novel-gate.com",68],["yhocdata.com",69],["iskandinavya.com",70],["warcraftlogs.com",71],["sneakernews.com",72],["forplayx.ink",74],["aboutchromebooks.com",75],["ancient.eu",75],["comingsoon.net",75],["daysoftheyear.com",75],["edn.com",75],["gearjunkie.com",75],["harvardmagazine.com",75],["lgbtqnation.com",75],["majorgeeks.com",75],["mangainn.net",75],["medievalists.net",75],["sherdog.com",75],["sidereel.com",75],["statesman.com",75],["winhelponline.com",75],["edurev.in",76],["decider.com",77],["nypost.com",77],["pagesix.com",77],["librospreuniversitariospdf.blogspot.com",78],["ncrtsolutions.in",79],["d4armory.io",80],["helldivers.io",80]]);

const entitiesMap = new Map([["desbloqueador",0],["voirfilms",[0,2]],["anisubindo",[0,31]],["tabonitobrasil",7],["fmovies",20],["wstream",41],["animedao",67]]);

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
    const safe = safeSelf();
    const token =
        String.fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
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
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
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
                return { matchAll: true };
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

/******************************************************************************/

const hnParts = [];
try { hnParts.push(...document.location.hostname.split('.')); }
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
