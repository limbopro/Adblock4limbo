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

const argsList = [["document.oncontextmenu"],["oncontextmenu"],["document.onselectstart"],["hasAdblock"],["getSelection"],["__cmpGdprAppliesGlobally"],["disableSelection"],["uxGuid"],["blazemedia_adBlock"],["addLink"],["abde"],["onbeforeunload"],["fuckAdBlock"],["_sp_._networkListenerData"],["ABDSettings"],["intsFequencyCap"],["Date.prototype.toUTCString"],["document.onmousedown"],["oSpPOptions"],["a1lck"],["document.ondragstart"],["plusonet"],["document.documentElement.oncopy"],["mdp_appender"],["can_i_run_ads"],["disableselect"],["_sp_.mms.startMsg"],["RL.licenseman.init"],["abStyle"],["ga_ExitPopup3339"],["document.onkeydown"],["alert"],["alerte_declanchee"],["ABD"],["document.body.setAttribute"],["adBlockDetected"],["adtoniq"],["disable_copy"],["locdau"],["document.body.oncopy"],["onload"],["HTMLIFrameElement"],["tjQuery"],["disable_hot_keys"],["nd_shtml"],["canRunAds"],["clickNS"],["_0xfff1"],["admrlWpJsonP"],["document.oncopy"],["document.onclick"],["document.onkeypress"],["disableEnterKey"],["document.write"],["shortcut"],["append_link"],["carbonLoaded"],["initAdBlockerPanel"],["cpp_loc"],["nocontextmenu"],["_0x1a4c"],["addCopyright"],["copy_div_id"],["LBF.define"],["b2a"],["debugchange"],["devtoolsDetector"],["nocontext"],["contentprotector"],["kan_vars.adblock"],["sneakerGoogleTag"],["wccp_pro_iscontenteditable"],["devtoolsDetector.addListener"],["googletag"],["openOverlaySignup"],["googletag.cmd"],["checkDevTools"],["document.body.onselectstart"],["nitroAds"],["FuckAdBlock"]];

const hostnamesMap = new Map([["mimaletadepeliculas.blogspot.com",0],["megapastes.com",[0,2]],["programegratuitepc.com",[0,6]],["digitalsynopsis.com",[0,6]],["gaypornmasters.com",0],["knshow.com",0],["malybelgrad.pl",0],["demolandia.net",0],["statelibrary.us",0],["coag.pl",0],["quicksleeper.pl",0],["m4ufree.tv",0],["lexlog.pl",[0,2,17]],["mainframestechhelp.com",0],["gamershit.altervista.org",0],["gagetmatome.com",0],["virpe.com",0],["feel-the-darkness.rocks",[0,6,17]],["bricksrus.com",0],["jacquieetmichel.net",0],["ahzaa.net",0],["karyawanesia.com",0],["langitmovie.com",0],["oceanof-games.com",[0,2,6,30]],["ponselharian.com",[0,2,6]],["holakikou.com",[0,6]],["hotpornfile.org",[0,2,30,51]],["e-sushi.fr",0],["evasion-online.com",0],["exclusifvoyages.com",0],["payeer-gift.ru",0],["pcso-lottoresults.com",0],["iovivoatenerife.it",[0,6]],["tritinia.com",[0,37]],["battle-one.com",[0,6]],["wjx.cn",[0,2,60]],["wjx.top",[0,2,60]],["masuit.com",0],["book.zongheng.com",0],["ciweimao.com",0],["360doc.com",0],["dushu.qq.com",[0,2,49]],["qiangwaikan.com",[0,6]],["7fyd.com",0],["unikampus.net",0],["atlas-geografic.net",0],["filmpornoitaliano.org",[0,2,17]],["cafe.naver.com",[0,2,20]],["cinemakottaga.top",0],["ytv.co.jp",0],["flashplayer.org.ua",[0,6,30]],["canale.live",0],["rightnonel.com",[0,6,17]],["viafarmaciaonline.it",0],["postcourier.com.pg",[0,67]],["freestreams-live1.tv",0],["verselemzes.hu",[0,2,20,30,51]],["icourse163.org",[0,49]],["dngz.net",[0,30]],["cine.to",1],["filmesonlinex.co",2],["badzjeszczelepszy.pl",[2,17,29]],["hebrew4christians.com",2],["techieway.blogspot.com",2],["69translations.blogspot.com",[2,17,50]],["cyberspace.world",2],["dailynewsview.com",2],["youmath.it",2],["operatorsekolahdbn.com",2],["brownsboys.com",2],["wings.io",3],["dicionariocriativo.com.br",4],["bloombergquint.com",4],["bibliacatolica.com.br",4],["mongri.net",4],["al.com",5],["allkpop.com",5],["calendarpedia.co.uk",5],["ccn.com",5],["cleveland.com",5],["comicsands.com",5],["duffelblog.com",5],["gamepur.com",5],["gamerevolution.com",5],["interestingengineering.com",5],["keengamer.com",5],["listenonrepeat.com",5],["mandatory.com",5],["mlive.com",5],["musicfeeds.com.au",5],["newatlas.com",5],["pgatour.com",5],["readlightnovel.org",5],["secondnexus.com",5],["sevenforums.com",5],["sport24.co.za",5],["superherohype.com",5],["thefashionspot.com",5],["theodysseyonline.com",5],["totalbeauty.com",5],["westernjournal.com",5],["cinemablend.com",5],["windows101tricks.com",5],["gay69.stream",6],["raccontivietati.com",6],["neyrologos.gr",6],["ggeguide.com",6],["elizabeth-mitchell.org",6],["blasianluvforever.com",6],["autophorie.de",6],["fruit01.xyz",6],["experciencia.com",6],["ifdreamscametrue.com",6],["juegosdetiempolibre.org",6],["naijagists.com",6],["chessimprover.com",6],["diaforetiko.gr",6],["tchadcarriere.com",6],["shaamtv.com",6],["totemat.pl",6],["wawlist.com",6],["cristelageorgescu.ro",[6,30,49]],["ilovevaldinon.it",6],["dialectsarchive.com",6],["sportsnet.ca",7],["punto-informatico.it",8],["emol.com",9],["springfieldspringfield.co.uk",9],["infomoney.com.br",9],["otvfoco.com.br",9],["portalportuario.cl",9],["adevarul.ro",9],["city-data.com",9],["mixmods.com.br",10],["deezer.com",11],["gota.io",12],["xnxx.com",12],["greenocktelegraph.co.uk",13],["med1.de",13],["tomsguide.com",13],["loudersound.com",13],["pushsquare.com",13],["allafinedelpalo.it",14],["heypoorplayer.com",14],["economictimes.indiatimes.com",15],["fin24.com",16],["djelfa.info",17],["motogon.ru",18],["ctrl.blog",19],["satcesc.com",20],["descargasnsn.com",21],["priberam.org",22],["tunovelaligera.com",23],["zdnet.de",24],["chimica-online.it",25],["blog.kwick.de",[25,30]],["texte.work",25],["neowin.net",26],["laptopmag.com",26],["livescience.com",26],["digitalcameraworld.com",26],["guitarworld.com",26],["musicradar.com",26],["keighleynews.co.uk",26],["creativebloq.com",26],["t3.com",26],["recantodasletras.com.br",27],["lesoir.be",28],["yusepjaelani.blogspot.com",30],["ideaberita.com",30],["my-code4you.blogspot.com",30],["polagriparts.pl",30],["followmikewynn.com",30],["dreamlandresort.com",31],["live.b-c-e.us",31],["tecmundo.net",31],["disheye.com",31],["impotsurlerevenu.org",32],["insidermonkey.com",33],["kurosave.com",34],["gamebanana.com",35],["trojmiasto.pl",35],["poedb.tw",35],["good-football.org",35],["theregister.co.uk",36],["doranobi-fansub.id",37],["opportunitydesk.org",37],["jootc.com",[37,43]],["selfstudyanthro.com",37],["relet365.com",37],["wikibious.com",37],["koreanaddict.net",37],["generationamiga.com",37],["psihologiadeazi.ro",[37,67]],["flinsetyadi.com",37],["projektowanie-wnetrz-online.pl",37],["easyayurveda.com",[37,43,67,71]],["sharktankblog.com",[37,43,67,71]],["m4uhd.net",38],["quotev.com",39],["maxstream.video",40],["renditepassive.net",40],["52bdys.com",40],["earth.com",41],["digitaltrends.com",41],["nwherald.com",41],["lalawin.com",42],["ufret.jp",44],["motortrader.com.my",45],["2219.net",46],["upstream.to",47],["progameguides.com",48],["jpnn.com",49],["farm-ro.desigusxpro.com",49],["accgroup.vn",49],["deccanherald.com",49],["ndtvprofit.com",49],["empregoestagios.com",52],["elektrikmen.com",52],["hitproversion.com",52],["jobskaro.com",52],["appd.at",52],["apk1s.com",52],["audiobookcup.com",52],["geeksoncoffee.com",52],["elijahwood.altervista.org",53],["vinaurl.blogspot.com",54],["comprerural.com",55],["cssreference.io",56],["revistavanityfair.es",57],["toppremiumpro.com",58],["androidtvbox.eu",59],["dollarvr.com",59],["newsme.gr",59],["imooc.com",61],["commandlinux.com",62],["hongxiu.com",63],["readnovel.com",63],["c4ddownload.com",64],["the-scorpions.com",64],["lethalpanda.com",64],["animatedshows.to",65],["miraculous.to",65],["phimdinhcao.com",66],["beastx.top",66],["chillx.top",66],["playerx.stream",66],["phimlongtieng.net",66],["rubystm.com",66],["revenue.land",67],["sertracen.com.pa",67],["pitesti24.ro",67],["samsungtechwin.com",67],["cours-de-droit.net",67],["iptv4best.com",67],["blogvisaodemercado.pt",67],["kapitalis.com",67],["tiempo.hn",67],["winmeen.com",67],["ibps.in",67],["visse.com.br",67],["javsubtitle.co",67],["learninsta.com",67],["licensekeys.org",67],["mediahiburan.my",67],["tipssehatcantik.com",67],["anime-drama.jp",67],["jbjbgame.com",67],["viatasisanatate.com",67],["ziarulargesul.ro",67],["globaldefensecorp.com",67],["gossipnextdoor.com",67],["coffeeapps.ir",67],["media.framu.world",67],["immobiliaremia.com",67],["colegiosconcertados.info",67],["bigdatauni.com",67],["riwyat.com",67],["rukim.id",67],["visefierbinti.ro",67],["cyberkrafttraining.com",67],["theaircurrent.com",67],["ncert-solutions.com",67],["ncertsolutions.guru",67],["nocturnetls.net",67],["clockks.com",67],["ananda-yoga.ro",67],["poolpiscina.com",67],["infodifesa.it",67],["getective.com",67],["flashdumpfiles.com",67],["formatatmak.com",67],["drkrok.com",67],["alphagirlreviews.com",67],["kitchennovel.com",67],["voxvalachorum.ro",67],["cracksone.com",67],["day-hoc.org",67],["onlineonderdelenshop.nl",67],["primicia.com.ve",67],["tech-recipes.com",67],["afrikmag.com",67],["maduras.vip",67],["aprendeinglessila.com",67],["kicknews.today",67],["koalasplayground.com",67],["hellokpop.com",67],["hayatbilgileri.com",67],["moneyexcel.com",67],["placementstore.com",67],["neuroteam-metz.de",67],["codedosa.com",67],["liveyourmaths.com",67],["newspao.gr",67],["ieltsliz.com",67],["programasvirtualespc.net",67],["tempatwisataseru.com",67],["wikiofcelebs.com",67],["jornaljoca.com.br",67],["arcanescans.com",67],["filmzone.com",67],["hiraethtranslation.com",67],["kaystls.site",67],["home.novel-gate.com",67],["yhocdata.com",68],["iskandinavya.com",69],["sneakernews.com",70],["forplayx.ink",72],["aboutchromebooks.com",73],["ancient.eu",73],["comingsoon.net",73],["daysoftheyear.com",73],["edn.com",73],["gearjunkie.com",73],["harvardmagazine.com",73],["lgbtqnation.com",73],["majorgeeks.com",73],["mangainn.net",73],["medievalists.net",73],["sherdog.com",73],["sidereel.com",73],["statesman.com",73],["winhelponline.com",73],["edurev.in",74],["decider.com",75],["nypost.com",75],["pagesix.com",75],["librospreuniversitariospdf.blogspot.com",76],["ncrtsolutions.in",77],["d4armory.io",78],["helldivers.io",78],["lcpdfr.com",79]]);

const entitiesMap = new Map([["desbloqueador",0],["voirfilms",[0,2]],["anisubindo",[0,30]],["tabonitobrasil",6],["fmovies",20],["wstream",40],["animedao",66]]);

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
        safe.String_fromCharCode(Date.now() % 26 + 97) +
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
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
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
