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

const argsList = [["Object.prototype.YaAdtuneFeedbackType"],["Object.prototype.renderDirect"],["Object.prototype.RenderMarks"],["Object.prototype.RtbLoadDone"],["Object.prototype.RtbBlockRenderStart"],["Object.prototype.storage"],["Object.prototype.DataLoaded"],["Object.prototype.getAdditionalBanners"],["Object.prototype.Rtb"],["Object.prototype.AdChosen"],["mdpDeBlockerDestroyer"],["ai_run_scripts"],["_sp_.mms.startMsg"],["anOptions"],["adBlockFunction"],["antiadblockCallback"],["eazy_ad_unblocker_dialog_opener"],["adbd"],["ad_block_test"],["window.adblockDiv"],["adsBlocked"],["cX"],["FuckAdBlock"],["adbh"],["closeBlockerModal"],["adBlockDetected"],["adsbygoogle"],["GoogleContributor"],["isAdBlockActive"],["setNptTechAdblockerCookie"],["ad_nodes"],["globalAuthLoginPopupCounter"],["show30SecSingupPopupFlag"],["Object.prototype.video_player_floating"],["notifyMe"],["webPushPublicKey"],["document.oncontextmenu"],["oncontextmenu"],["document.onselectstart"],["_sp_._networkListenerData"],["hasAdblock"],["getSelection"],["__cmpGdprAppliesGlobally"],["disableSelection"],["uxGuid"],["blazemedia_adBlock"],["addLink"],["abde"],["onbeforeunload"],["fuckAdBlock"],["ABDSettings"],["intsFequencyCap"],["Date.prototype.toUTCString"],["document.onmousedown"],["oSpPOptions"],["a1lck"],["document.ondragstart"],["plusonet"],["document.documentElement.oncopy"],["mdp_appender"],["can_i_run_ads"],["bizpanda"],["disableselect"],["RL.licenseman.init"],["abStyle"],["ga_ExitPopup3339"],["document.onkeydown"],["alert"],["alerte_declanchee"],["ABD"],["document.body.setAttribute"],["adtoniq"],["disable_copy"],["locdau"],["document.body.oncopy"],["onload"],["HTMLIFrameElement"],["tjQuery"],["disable_hot_keys"],["nd_shtml"],["canRunAds"],["clickNS"],["_0xfff1"],["admrlWpJsonP"],["document.oncopy"],["document.onclick"],["document.onkeypress"],["disableEnterKey"],["document.write"],["shortcut"],["append_link"],["carbonLoaded"],["initAdBlockerPanel"],["cpp_loc"],["nocontextmenu"],["_0x1a4c"],["addCopyright"],["copy_div_id"],["LBF.define"],["b2a"],["debugchange"],["devtoolsDetector"],["nocontext"],["contentprotector"],["kan_vars.adblock"],["onAdScriptFailure"],["sneakerGoogleTag"],["wccp_pro_iscontenteditable"],["devtoolsDetector.addListener"],["googletag"],["openOverlaySignup"],["googletag.cmd"]];

const hostnamesMap = new Map([["comedy-radio.ru",1],["relax-fm.ru",1],["irecommend.ru",1],["auto.ru",2],["sm.news",2],["amedia.online",2],["sdamgia.ru",2],["otzovik.com",[3,4]],["liveinternet.ru",[5,6]],["gismeteo.ru",7],["gismeteo.by",7],["gismeteo.md",7],["gismeteo.kz",7],["kakprosto.ru",8],["drive2.ru",9],["texture-packs.com",10],["virtualpiano.net",11],["apkmos.com",11],["cee-trust.org",11],["udemydl.com",11],["cyclingnews.com",12],["pcgamer.com",12],["eurogamer.pt",12],["bikeperfect.com",12],["loudersound.com",[12,39]],["guitarworld.com",12],["creativebloq.com",12],["musicradar.com",12],["fosspost.org",13],["portalvirtualreality.ru",13],["pingvin.pro",13],["bonobono.com",13],["curbsideclassic.com",13],["wpgutenberg.top",13],["3dmodelshare.org",13],["turkishfoodchef.com",13],["itechua.com",13],["blowxtube.com",13],["orhanbhr.com",13],["testosterontr.com",13],["criptomonedaseico.com",13],["downloadsachmienphi.com",13],["fimico.de",13],["manhuaplus.com",13],["canyoublockit.com",13],["freeallcourse.com",13],["congressoemfoco.uol.com.br",13],["dogalvadi.com",13],["kompukter.ru",13],["paragezegeni.com",13],["gatevidyalay.com",13],["corgit.xyz",13],["freefincal.com",13],["dsogaming.com",13],["bordoklavyeli.net",13],["newonce.net",13],["gpcoder.com",13],["androidexplained.com",13],["borodavsem.ru",13],["czechavfree.com",13],["karaokes.com.ar",13],["kulturalnemedia.pl",13],["magazeta.com",13],["mur.tv",13],["o365info.com",13],["proswift.ru",13],["sovetolog.com",13],["tehnobzor.ru",13],["thelongdark.ru",13],["thewindowsclub.thewindowsclubco.netdna-cdn.com",13],["xiaomitech.net",13],["phoneky.com",14],["sports.ru",15],["ruyashoujo.com",16],["askdifference.com",17],["cartoonbrew.com",18],["gamemag.ru",19],["germancarforum.com",20],["unknowncheats.me",20],["lavoz.com.ar",21],["lcpdfr.com",22],["moregameslike.com",23],["parasportontario.ca",24],["macapp.org.cn",25],["picmix.com",25],["poedb.tw",25],["seo-visit.com",26],["sme.sk",27],["yenigolcuk.com",28],["hedefgazetesi.com.tr",28],["eldedemokrasi.com",28],["afyonhaberturk.com",28],["nehaberankara.com",28],["mansetburdur.com",28],["bolgesellig.com",28],["telgrafgazetesi.com",28],["burokratika.com",28],["balikesirartihaber.com",28],["ajansbalikligol.com",28],["karar67.com",28],["gazetemalatya.com",28],["vansesigazetesi.com",28],["kocaelisabah.com",28],["antalyadanhaberler.com",28],["aydinyeniufuk.com.tr",28],["yerelvanhaber.com",28],["a2teker.com",28],["kibrishakikat.com",28],["izmirtime35.com",28],["sancakplus.com",28],["marasfisilti.com",28],["burdurgazetesi.com",28],["zeytinburnuhaber.org",28],["denizli20haber.com",28],["akdenizdeyeniyuzyil.net",28],["ulakci.com",28],["egegundem.com.tr",28],["isdunyasindakadin.com",28],["haberimizvar.net",28],["weather.com",[29,39]],["vsthouse.ru",30],["primpogoda.ru",30],["gitjournal.tech",30],["ok.ru",31],["capital.com",32],["cableav.tv",33],["indiatoday.in",34],["filmweb.pl",35],["mimaletadepeliculas.blogspot.com",36],["megapastes.com",[36,38]],["programegratuitepc.com",[36,43]],["digitalsynopsis.com",[36,43]],["gaypornmasters.com",36],["knshow.com",36],["malybelgrad.pl",36],["demolandia.net",36],["statelibrary.us",36],["coag.pl",36],["quicksleeper.pl",36],["m4ufree.tv",36],["lexlog.pl",[36,38,53]],["mainframestechhelp.com",36],["gamershit.altervista.org",36],["gagetmatome.com",36],["virpe.com",36],["feel-the-darkness.rocks",[36,43,53]],["bricksrus.com",36],["jacquieetmichel.net",36],["ahzaa.net",36],["karyawanesia.com",36],["langitmovie.com",36],["oceanof-games.com",[36,38,43,66]],["ponselharian.com",[36,38,43]],["holakikou.com",[36,43]],["hotpornfile.org",[36,38,66,86]],["e-sushi.fr",36],["evasion-online.com",36],["exclusifvoyages.com",36],["payeer-gift.ru",36],["pcso-lottoresults.com",36],["iovivoatenerife.it",[36,43]],["tritinia.com",[36,72]],["battle-one.com",[36,43]],["wjx.cn",[36,38,95]],["wjx.top",[36,38,95]],["masuit.com",36],["book.zongheng.com",36],["ciweimao.com",36],["360doc.com",36],["dushu.qq.com",[36,38,84]],["qiangwaikan.com",[36,43]],["7fyd.com",36],["unikampus.net",36],["atlas-geografic.net",36],["filmpornoitaliano.org",[36,38,53]],["cafe.naver.com",[36,38,56]],["cinemakottaga.top",36],["ytv.co.jp",36],["flashplayer.org.ua",[36,43,66]],["canale.live",36],["rightnonel.com",[36,43,53]],["viafarmaciaonline.it",36],["postcourier.com.pg",[36,102]],["freestreams-live1.tv",36],["verselemzes.hu",[36,38,56,66,86]],["icourse163.org",[36,84]],["cine.to",37],["filmesonlinex.co",38],["badzjeszczelepszy.pl",[38,53,65]],["hebrew4christians.com",38],["techieway.blogspot.com",38],["69translations.blogspot.com",[38,53,85]],["cyberspace.world",38],["dailynewsview.com",38],["youmath.it",38],["operatorsekolahdbn.com",38],["brownsboys.com",38],["greenocktelegraph.co.uk",39],["med1.de",39],["tomsguide.com",39],["pushsquare.com",39],["wings.io",40],["dicionariocriativo.com.br",41],["bloombergquint.com",41],["bibliacatolica.com.br",41],["mongri.net",41],["al.com",42],["allkpop.com",42],["calendarpedia.co.uk",42],["ccn.com",42],["cleveland.com",42],["comicsands.com",42],["duffelblog.com",42],["gamepur.com",42],["gamerevolution.com",42],["interestingengineering.com",42],["keengamer.com",42],["listenonrepeat.com",42],["mandatory.com",42],["mlive.com",42],["musicfeeds.com.au",42],["newatlas.com",42],["pgatour.com",42],["readlightnovel.org",42],["secondnexus.com",42],["sevenforums.com",42],["sport24.co.za",42],["superherohype.com",42],["thefashionspot.com",42],["theodysseyonline.com",42],["totalbeauty.com",42],["westernjournal.com",42],["cinemablend.com",42],["windows101tricks.com",42],["gay69.stream",43],["raccontivietati.com",43],["neyrologos.gr",43],["ggeguide.com",43],["elizabeth-mitchell.org",43],["blasianluvforever.com",43],["autophorie.de",43],["fruit01.xyz",43],["experciencia.com",43],["ifdreamscametrue.com",43],["juegosdetiempolibre.org",43],["naijagists.com",43],["chessimprover.com",43],["diaforetiko.gr",43],["tchadcarriere.com",43],["shaamtv.com",43],["totemat.pl",43],["wawlist.com",43],["cristelageorgescu.ro",[43,66,84]],["ilovevaldinon.it",43],["dialectsarchive.com",43],["sportsnet.ca",44],["punto-informatico.it",45],["emol.com",46],["springfieldspringfield.co.uk",46],["infomoney.com.br",46],["otvfoco.com.br",46],["portalportuario.cl",46],["adevarul.ro",46],["city-data.com",46],["mixmods.com.br",47],["deezer.com",48],["gota.io",49],["xnxx.com",49],["allafinedelpalo.it",50],["heypoorplayer.com",50],["economictimes.indiatimes.com",51],["fin24.com",52],["stocktwits.com",52],["djelfa.info",53],["motogon.ru",54],["ctrl.blog",55],["satcesc.com",56],["descargasnsn.com",57],["priberam.org",58],["tunovelaligera.com",59],["zdnet.de",60],["putlockerfun.com",61],["chimica-online.it",62],["blog.kwick.de",[62,66]],["texte.work",62],["neowin.net",12],["laptopmag.com",12],["livescience.com",12],["digitalcameraworld.com",12],["keighleynews.co.uk",12],["t3.com",12],["recantodasletras.com.br",63],["lesoir.be",64],["yusepjaelani.blogspot.com",66],["ideaberita.com",66],["my-code4you.blogspot.com",66],["polagriparts.pl",66],["followmikewynn.com",66],["dreamlandresort.com",67],["live.b-c-e.us",67],["tecmundo.net",67],["disheye.com",67],["impotsurlerevenu.org",68],["insidermonkey.com",69],["kurosave.com",70],["gamebanana.com",25],["trojmiasto.pl",25],["good-football.org",25],["theregister.co.uk",71],["doranobi-fansub.id",72],["opportunitydesk.org",72],["jootc.com",[72,78]],["selfstudyanthro.com",72],["relet365.com",72],["wikibious.com",72],["koreanaddict.net",72],["generationamiga.com",72],["psihologiadeazi.ro",[72,102]],["flinsetyadi.com",72],["projektowanie-wnetrz-online.pl",72],["easyayurveda.com",[72,78,102,107]],["sharktankblog.com",[72,78,102,107]],["m4uhd.net",73],["quotev.com",74],["maxstream.video",75],["renditepassive.net",75],["52bdys.com",75],["earth.com",76],["digitaltrends.com",76],["nwherald.com",76],["lalawin.com",77],["ufret.jp",79],["motortrader.com.my",80],["2219.net",81],["upstream.to",82],["progameguides.com",83],["jpnn.com",84],["farm-ro.desigusxpro.com",84],["accgroup.vn",84],["deccanherald.com",84],["ndtvprofit.com",84],["empregoestagios.com",87],["elektrikmen.com",87],["hitproversion.com",87],["jobskaro.com",87],["appd.at",87],["apk1s.com",87],["audiobookcup.com",87],["elijahwood.altervista.org",88],["vinaurl.blogspot.com",89],["comprerural.com",90],["cssreference.io",91],["revistavanityfair.es",92],["toppremiumpro.com",93],["androidtvbox.eu",94],["dollarvr.com",94],["newsme.gr",94],["imooc.com",96],["commandlinux.com",97],["hongxiu.com",98],["readnovel.com",98],["c4ddownload.com",99],["the-scorpions.com",99],["lethalpanda.com",99],["animatedshows.to",100],["miraculous.to",100],["phimdinhcao.com",101],["beastx.top",101],["chillx.top",101],["playerx.stream",101],["phimlongtieng.net",101],["revenue.land",102],["pitesti24.ro",102],["samsungtechwin.com",102],["cours-de-droit.net",102],["iptv4best.com",102],["blogvisaodemercado.pt",102],["kapitalis.com",102],["tiempo.hn",102],["winmeen.com",102],["ibps.in",102],["visse.com.br",102],["javsubtitle.co",102],["licensekeys.org",102],["mediahiburan.my",102],["tipssehatcantik.com",102],["anime-drama.jp",102],["jbjbgame.com",102],["viatasisanatate.com",102],["ziarulargesul.ro",102],["globaldefensecorp.com",102],["gossipnextdoor.com",102],["coffeeapps.ir",102],["media.framu.world",102],["immobiliaremia.com",102],["colegiosconcertados.info",102],["bigdatauni.com",102],["rukim.id",102],["visefierbinti.ro",102],["cyberkrafttraining.com",102],["theaircurrent.com",102],["nocturnetls.net",102],["clockks.com",102],["ananda-yoga.ro",102],["poolpiscina.com",102],["infodifesa.it",102],["getective.com",102],["formatatmak.com",102],["drkrok.com",102],["alphagirlreviews.com",102],["kitchennovel.com",102],["voxvalachorum.ro",102],["cracksone.com",102],["day-hoc.org",102],["onlineonderdelenshop.nl",102],["primicia.com.ve",102],["tech-recipes.com",102],["afrikmag.com",102],["maduras.vip",102],["aprendeinglessila.com",102],["kicknews.today",102],["koalasplayground.com",102],["hellokpop.com",102],["hayatbilgileri.com",102],["moneyexcel.com",102],["placementstore.com",102],["neuroteam-metz.de",102],["codedosa.com",102],["liveyourmaths.com",102],["newspao.gr",102],["ieltsliz.com",102],["programasvirtualespc.net",102],["tempatwisataseru.com",102],["wikiofcelebs.com",102],["jornaljoca.com.br",102],["arcanescans.com",102],["filmzone.com",102],["yhocdata.com",103],["iskandinavya.com",104],["warcraftlogs.com",105],["sneakernews.com",106],["forplayx.ink",108],["aboutchromebooks.com",109],["ancient.eu",109],["comingsoon.net",109],["daysoftheyear.com",109],["dotesports.com",109],["edn.com",109],["gearjunkie.com",109],["harvardmagazine.com",109],["lgbtqnation.com",109],["majorgeeks.com",109],["mangainn.net",109],["medievalists.net",109],["sherdog.com",109],["sidereel.com",109],["statesman.com",109],["tvguide.com",109],["winhelponline.com",109],["edurev.in",110],["decider.com",111],["nypost.com",111],["pagesix.com",111]]);

const entitiesMap = new Map([["docviewer.yandex",0],["tv.yandex",1],["desbloqueador",36],["voirfilms",[36,38]],["anisubindo",[36,66]],["tabonitobrasil",43],["fmovies",56],["wstream",75]]);

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
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            if ( options.flags !== undefined ) {
                return {
                    re: new this.RegExp(pattern.replace(
                        /[.*+?^${}()|[\]\\]/g, '\\$&'),
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
