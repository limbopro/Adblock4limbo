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

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["Object.prototype.YaAdtuneFeedbackType"],["Object.prototype.renderDirect"],["Object.prototype.RenderMarks"],["Object.prototype.RtbLoadDone"],["Object.prototype.RtbBlockRenderStart"],["Object.prototype.storage"],["Object.prototype.DataLoaded"],["Object.prototype.getAdditionalBanners"],["Object.prototype.Rtb"],["Object.prototype.AdChosen"],["mdpDeBlockerDestroyer"],["ai_run_scripts"],["_sp_.mms.startMsg"],["anOptions"],["antiadblockCallback"],["eazy_ad_unblocker_dialog_opener"],["adbd"],["ad_block_test"],["window.adblockDiv"],["adsBlocked"],["cX"],["FuckAdBlock"],["adbh"],["closeBlockerModal"],["adBlockDetected"],["adsbygoogle"],["GoogleContributor"],["isAdBlockActive"],["setNptTechAdblockerCookie"],["ad_nodes"],["globalAuthLoginPopupCounter"],["show30SecSingupPopupFlag"],["Object.prototype.video_player_floating"],["notifyMe"],["webPushPublicKey"],["document.oncontextmenu"],["oncontextmenu"],["document.onselectstart"],["_sp_._networkListenerData"],["hasAdblock"],["getSelection"],["__cmpGdprAppliesGlobally"],["disableSelection"],["uxGuid"],["blazemedia_adBlock"],["addLink"],["abde"],["onbeforeunload"],["fuckAdBlock"],["ABDSettings"],["intsFequencyCap"],["Date.prototype.toUTCString"],["document.onmousedown"],["oSpPOptions"],["a1lck"],["document.ondragstart"],["plusonet"],["document.documentElement.oncopy"],["mdp_appender"],["can_i_run_ads"],["bizpanda"],["disableselect"],["RL.licenseman.init"],["abStyle"],["ga_ExitPopup3339"],["document.onkeydown"],["alert"],["alerte_declanchee"],["ABD"],["document.body.setAttribute"],["adtoniq"],["disable_copy"],["locdau"],["document.body.oncopy"],["onload"],["HTMLIFrameElement"],["tjQuery"],["disable_hot_keys"],["nd_shtml"],["canRunAds"],["clickNS"],["_0xfff1"],["admrlWpJsonP"],["document.oncopy"],["document.onclick"],["document.onkeypress"],["disableEnterKey"],["document.write"],["shortcut"],["append_link"],["carbonLoaded"],["initAdBlockerPanel"],["cpp_loc"],["nocontextmenu"],["_0x1a4c"],["addCopyright"],["copy_div_id"],["LBF.define"],["b2a"],["debugchange"],["devtoolsDetector"],["nocontext"],["contentprotector"],["kan_vars.adblock"],["onAdScriptFailure"],["sneakerGoogleTag"],["wccp_pro_iscontenteditable"],["devtoolsDetector.addListener"],["googletag"],["openOverlaySignup"],["googletag.cmd"]];

const hostnamesMap = new Map([["comedy-radio.ru",1],["relax-fm.ru",1],["irecommend.ru",1],["auto.ru",2],["sm.news",2],["amedia.online",2],["sdamgia.ru",2],["otzovik.com",[3,4]],["liveinternet.ru",[5,6]],["gismeteo.ru",7],["gismeteo.by",7],["gismeteo.md",7],["gismeteo.kz",7],["kakprosto.ru",8],["drive2.ru",9],["texture-packs.com",10],["virtualpiano.net",11],["apkmos.com",11],["cee-trust.org",11],["udemydl.com",11],["cyclingnews.com",12],["pcgamer.com",12],["eurogamer.pt",12],["bikeperfect.com",12],["loudersound.com",[12,38]],["guitarworld.com",12],["creativebloq.com",12],["musicradar.com",12],["fosspost.org",13],["portalvirtualreality.ru",13],["pingvin.pro",13],["bonobono.com",13],["curbsideclassic.com",13],["wpgutenberg.top",13],["3dmodelshare.org",13],["turkishfoodchef.com",13],["itechua.com",13],["blowxtube.com",13],["orhanbhr.com",13],["testosterontr.com",13],["criptomonedaseico.com",13],["downloadsachmienphi.com",13],["fimico.de",13],["manhuaplus.com",13],["canyoublockit.com",13],["freeallcourse.com",13],["congressoemfoco.uol.com.br",13],["dogalvadi.com",13],["kompukter.ru",13],["paragezegeni.com",13],["gatevidyalay.com",13],["corgit.xyz",13],["freefincal.com",13],["dsogaming.com",13],["bordoklavyeli.net",13],["newonce.net",13],["gpcoder.com",13],["androidexplained.com",13],["borodavsem.ru",13],["czechavfree.com",13],["karaokes.com.ar",13],["kulturalnemedia.pl",13],["magazeta.com",13],["mur.tv",13],["o365info.com",13],["proswift.ru",13],["sovetolog.com",13],["tehnobzor.ru",13],["thelongdark.ru",13],["thewindowsclub.thewindowsclubco.netdna-cdn.com",13],["xiaomitech.net",13],["sports.ru",14],["ruyashoujo.com",15],["askdifference.com",16],["cartoonbrew.com",17],["gamemag.ru",18],["germancarforum.com",19],["unknowncheats.me",19],["lavoz.com.ar",20],["lcpdfr.com",21],["moregameslike.com",22],["parasportontario.ca",23],["macapp.org.cn",24],["picmix.com",24],["poedb.tw",24],["seo-visit.com",25],["sme.sk",26],["yenigolcuk.com",27],["hedefgazetesi.com.tr",27],["eldedemokrasi.com",27],["afyonhaberturk.com",27],["nehaberankara.com",27],["mansetburdur.com",27],["bolgesellig.com",27],["telgrafgazetesi.com",27],["burokratika.com",27],["balikesirartihaber.com",27],["ajansbalikligol.com",27],["karar67.com",27],["gazetemalatya.com",27],["vansesigazetesi.com",27],["kocaelisabah.com",27],["antalyadanhaberler.com",27],["aydinyeniufuk.com.tr",27],["yerelvanhaber.com",27],["a2teker.com",27],["kibrishakikat.com",27],["izmirtime35.com",27],["sancakplus.com",27],["marasfisilti.com",27],["burdurgazetesi.com",27],["zeytinburnuhaber.org",27],["denizli20haber.com",27],["akdenizdeyeniyuzyil.net",27],["ulakci.com",27],["egegundem.com.tr",27],["isdunyasindakadin.com",27],["haberimizvar.net",27],["weather.com",[28,38]],["vsthouse.ru",29],["primpogoda.ru",29],["gitjournal.tech",29],["ok.ru",30],["capital.com",31],["cableav.tv",32],["indiatoday.in",33],["filmweb.pl",34],["mimaletadepeliculas.blogspot.com",35],["megapastes.com",[35,37]],["programegratuitepc.com",[35,42]],["digitalsynopsis.com",[35,42]],["gaypornmasters.com",35],["knshow.com",35],["malybelgrad.pl",35],["demolandia.net",35],["statelibrary.us",35],["coag.pl",35],["quicksleeper.pl",35],["m4ufree.tv",35],["lexlog.pl",[35,37,52]],["mainframestechhelp.com",35],["gamershit.altervista.org",35],["gagetmatome.com",35],["virpe.com",35],["feel-the-darkness.rocks",[35,42,52]],["bricksrus.com",35],["jacquieetmichel.net",35],["ahzaa.net",35],["karyawanesia.com",35],["langitmovie.com",35],["oceanof-games.com",[35,37,42,65]],["ponselharian.com",[35,37,42]],["holakikou.com",[35,42]],["hotpornfile.org",[35,37,65,85]],["e-sushi.fr",35],["evasion-online.com",35],["exclusifvoyages.com",35],["payeer-gift.ru",35],["pcso-lottoresults.com",35],["iovivoatenerife.it",[35,42]],["tritinia.com",[35,71]],["battle-one.com",[35,42]],["wjx.cn",[35,37,94]],["masuit.com",35],["book.zongheng.com",35],["ciweimao.com",35],["360doc.com",35],["dushu.qq.com",[35,37,83]],["qiangwaikan.com",[35,42]],["7fyd.com",35],["unikampus.net",35],["atlas-geografic.net",35],["filmpornoitaliano.org",[35,37,52]],["cafe.naver.com",[35,37,55]],["cinemakottaga.top",35],["ytv.co.jp",35],["flashplayer.org.ua",[35,42,65]],["canale.live",35],["rightnonel.com",[35,42,52]],["viafarmaciaonline.it",35],["postcourier.com.pg",[35,101]],["freestreams-live1.tv",35],["saikai.com.br",35],["verselemzes.hu",[35,37,55,65,85]],["icourse163.org",[35,83]],["cine.to",36],["filmesonlinex.co",37],["badzjeszczelepszy.pl",[37,52,64]],["hebrew4christians.com",37],["techieway.blogspot.com",37],["69translations.blogspot.com",[37,52,84]],["cyberspace.world",37],["dailynewsview.com",37],["youmath.it",37],["operatorsekolahdbn.com",37],["brownsboys.com",37],["greenocktelegraph.co.uk",38],["med1.de",38],["tomsguide.com",38],["pushsquare.com",38],["wings.io",39],["dicionariocriativo.com.br",40],["bloombergquint.com",40],["bibliacatolica.com.br",40],["mongri.net",40],["al.com",41],["allkpop.com",41],["calendarpedia.co.uk",41],["ccn.com",41],["cleveland.com",41],["comicsands.com",41],["duffelblog.com",41],["gamepur.com",41],["gamerevolution.com",41],["interestingengineering.com",41],["keengamer.com",41],["listenonrepeat.com",41],["mandatory.com",41],["mlive.com",41],["musicfeeds.com.au",41],["newatlas.com",41],["pgatour.com",41],["readlightnovel.org",41],["secondnexus.com",41],["sevenforums.com",41],["sport24.co.za",41],["superherohype.com",41],["thefashionspot.com",41],["theodysseyonline.com",41],["totalbeauty.com",41],["westernjournal.com",41],["cinemablend.com",41],["windows101tricks.com",41],["gay69.stream",42],["raccontivietati.com",42],["neyrologos.gr",42],["ggeguide.com",42],["elizabeth-mitchell.org",42],["blasianluvforever.com",42],["autophorie.de",42],["fruit01.xyz",42],["experciencia.com",42],["ifdreamscametrue.com",42],["juegosdetiempolibre.org",42],["naijagists.com",42],["chessimprover.com",42],["diaforetiko.gr",42],["tchadcarriere.com",42],["shaamtv.com",42],["totemat.pl",42],["wawlist.com",42],["cristelageorgescu.ro",[42,65,83]],["ilovevaldinon.it",42],["dialectsarchive.com",42],["sportsnet.ca",43],["punto-informatico.it",44],["emol.com",45],["springfieldspringfield.co.uk",45],["infomoney.com.br",45],["otvfoco.com.br",45],["portalportuario.cl",45],["adevarul.ro",45],["city-data.com",45],["mixmods.com.br",46],["deezer.com",47],["gota.io",48],["xnxx.com",48],["allafinedelpalo.it",49],["heypoorplayer.com",49],["economictimes.indiatimes.com",50],["fin24.com",51],["stocktwits.com",51],["djelfa.info",52],["motogon.ru",53],["ctrl.blog",54],["satcesc.com",55],["descargasnsn.com",56],["priberam.org",57],["tunovelaligera.com",58],["zdnet.de",59],["putlockerfun.com",60],["chimica-online.it",61],["blog.kwick.de",[61,65]],["texte.work",61],["neowin.net",12],["laptopmag.com",12],["livescience.com",12],["digitalcameraworld.com",12],["keighleynews.co.uk",12],["t3.com",12],["recantodasletras.com.br",62],["lesoir.be",63],["yusepjaelani.blogspot.com",65],["ideaberita.com",65],["my-code4you.blogspot.com",65],["polagriparts.pl",65],["followmikewynn.com",65],["dreamlandresort.com",66],["live.b-c-e.us",66],["tecmundo.net",66],["disheye.com",66],["impotsurlerevenu.org",67],["insidermonkey.com",68],["kurosave.com",69],["gamebanana.com",24],["trojmiasto.pl",24],["good-football.org",24],["theregister.co.uk",70],["doranobi-fansub.id",71],["opportunitydesk.org",71],["jootc.com",[71,77]],["selfstudyanthro.com",71],["relet365.com",71],["wikibious.com",71],["koreanaddict.net",71],["generationamiga.com",71],["psihologiadeazi.ro",[71,101]],["flinsetyadi.com",71],["projektowanie-wnetrz-online.pl",71],["easyayurveda.com",[71,77,101,106]],["sharktankblog.com",[71,77,101,106]],["m4uhd.net",72],["quotev.com",73],["maxstream.video",74],["renditepassive.net",74],["52bdys.com",74],["earth.com",75],["digitaltrends.com",75],["nwherald.com",75],["lalawin.com",76],["ufret.jp",78],["motortrader.com.my",79],["2219.net",80],["upstream.to",81],["progameguides.com",82],["jpnn.com",83],["farm-ro.desigusxpro.com",83],["accgroup.vn",83],["deccanherald.com",83],["empregoestagios.com",86],["elektrikmen.com",86],["hitproversion.com",86],["jobskaro.com",86],["appd.at",86],["apk1s.com",86],["audiobookcup.com",86],["elijahwood.altervista.org",87],["vinaurl.blogspot.com",88],["comprerural.com",89],["cssreference.io",90],["revistavanityfair.es",91],["toppremiumpro.com",92],["androidtvbox.eu",93],["dollarvr.com",93],["newsme.gr",93],["imooc.com",95],["commandlinux.com",96],["hongxiu.com",97],["readnovel.com",97],["c4ddownload.com",98],["the-scorpions.com",98],["lethalpanda.com",98],["animatedshows.to",99],["miraculous.to",99],["phimdinhcao.com",100],["beastx.top",100],["chillx.top",100],["playerx.stream",100],["phimlongtieng.net",100],["revenue.land",101],["pitesti24.ro",101],["samsungtechwin.com",101],["cours-de-droit.net",101],["iptv4best.com",101],["blogvisaodemercado.pt",101],["kapitalis.com",101],["tiempo.hn",101],["winmeen.com",101],["ibps.in",101],["visse.com.br",101],["javsubtitle.co",101],["licensekeys.org",101],["mediahiburan.my",101],["tipssehatcantik.com",101],["anime-drama.jp",101],["jbjbgame.com",101],["viatasisanatate.com",101],["ziarulargesul.ro",101],["globaldefensecorp.com",101],["gossipnextdoor.com",101],["coffeeapps.ir",101],["media.framu.world",101],["immobiliaremia.com",101],["colegiosconcertados.info",101],["bigdatauni.com",101],["rukim.id",101],["visefierbinti.ro",101],["cyberkrafttraining.com",101],["theaircurrent.com",101],["nocturnetls.net",101],["clockks.com",101],["ananda-yoga.ro",101],["poolpiscina.com",101],["infodifesa.it",101],["getective.com",101],["formatatmak.com",101],["drkrok.com",101],["alphagirlreviews.com",101],["kitchennovel.com",101],["voxvalachorum.ro",101],["cracksone.com",101],["day-hoc.org",101],["onlineonderdelenshop.nl",101],["primicia.com.ve",101],["tech-recipes.com",101],["afrikmag.com",101],["maduras.vip",101],["aprendeinglessila.com",101],["kicknews.today",101],["koalasplayground.com",101],["hellokpop.com",101],["hayatbilgileri.com",101],["moneyexcel.com",101],["placementstore.com",101],["neuroteam-metz.de",101],["codedosa.com",101],["liveyourmaths.com",101],["newspao.gr",101],["ieltsliz.com",101],["programasvirtualespc.net",101],["tempatwisataseru.com",101],["wikiofcelebs.com",101],["jornaljoca.com.br",101],["arcanescans.com",101],["yhocdata.com",102],["iskandinavya.com",103],["warcraftlogs.com",104],["sneakernews.com",105],["forplayx.ink",107],["aboutchromebooks.com",108],["ancient.eu",108],["comingsoon.net",108],["daysoftheyear.com",108],["dotesports.com",108],["edn.com",108],["gearjunkie.com",108],["harvardmagazine.com",108],["lgbtqnation.com",108],["majorgeeks.com",108],["mangainn.net",108],["medievalists.net",108],["sherdog.com",108],["sidereel.com",108],["statesman.com",108],["tvguide.com",108],["winhelponline.com",108],["edurev.in",109],["decider.com",110],["nypost.com",110],["pagesix.com",110]]);

const entitiesMap = new Map([["docviewer.yandex",0],["tv.yandex",1],["desbloqueador",35],["voirfilms",[35,37]],["anisubindo",[35,65]],["tabonitobrasil",42],["fmovies",55],["wstream",74]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function abortOnPropertyRead(
    chain = ''
) {
    if ( typeof chain !== 'string' ) { return; }
    if ( chain === '' ) { return; }
    const exceptionToken = getExceptionToken();
    const abort = function() {
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
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
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
        'Object_defineProperty': Object.defineProperty.bind(Object),
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
        uboLog(...args) {
            if ( scriptletGlobals.has('canDebug') === false ) { return; }
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
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
                    pattern,
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            return {
                pattern,
                re: new this.RegExp(pattern.replace(
                    /[.*+?^${}()|[\]\\]/g, '\\$&'),
                    options.flags
                ),
                expect,
            };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            return this.RegExp_test.call(details.re, haystack) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
            return Object.fromEntries(entries);
        },
    };
    scriptletGlobals.set('safeSelf', safe);
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
