/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
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

const argsList = [["Object.prototype.YaAdtuneFeedbackType"],["Object.prototype.renderDirect"],["Object.prototype.RenderMarks"],["Object.prototype.RtbLoadDone"],["Object.prototype.RtbBlockRenderStart"],["Object.prototype.storage"],["Object.prototype.DataLoaded"],["Object.prototype.getAdditionalBanners"],["Object.prototype.Rtb"],["Object.prototype.AdChosen"],["mdpDeBlockerDestroyer"],["ai_run_scripts"],["_sp_.mms.startMsg"],["anOptions"],["antiadblockCallback"],["eazy_ad_unblocker_dialog_opener"],["adbd"],["ad_block_test"],["window.adblockDiv"],["adsBlocked"],["cX"],["FuckAdBlock"],["adbh"],["closeBlockerModal"],["adBlockDetected"],["adsbygoogle"],["GoogleContributor"],["isAdBlockActive"],["setNptTechAdblockerCookie"],["ad_nodes"],["globalAuthLoginPopupCounter"],["show30SecSingupPopupFlag"],["Object.prototype.video_player_floating"],["notifyMe"],["webPushPublicKey"],["document.oncontextmenu"],["oncontextmenu"],["document.onselectstart"],["_sp_._networkListenerData"],["hasAdblock"],["getSelection"],["__cmpGdprAppliesGlobally"],["app_vars.force_disable_adblock"],["disableSelection"],["uxGuid"],["ads"],["blazemedia_adBlock"],["addLink"],["abde"],["onbeforeunload"],["fuckAdBlock"],["ABDSettings"],["intsFequencyCap"],["document.ondragstart"],["document.onmousedown"],["Date.prototype.toUTCString"],["oSpPOptions"],["a1lck"],["plusonet"],["document.documentElement.oncopy"],["mdp_appender"],["can_i_run_ads"],["bizpanda"],["disableselect"],["RL.licenseman.init"],["abStyle"],["ga_ExitPopup3339"],["document.onkeydown"],["alert"],["alerte_declanchee"],["ABD"],["document.body.setAttribute"],["adtoniq"],["disable_copy"],["locdau"],["document.body.oncopy"],["onload"],["HTMLIFrameElement"],["tjQuery"],["disable_hot_keys"],["nd_shtml"],["canRunAds"],["clickNS"],["_0xfff1"],["admrlWpJsonP"],["document.oncopy"],["document.onclick"],["document.onkeypress"],["disableEnterKey"],["document.write"],["shortcut"],["append_link"],["carbonLoaded"],["initAdBlockerPanel"],["cpp_loc"],["nocontextmenu"],["_0x1a4c"],["addCopyright"],["copy_div_id"],["LBF.define"],["b2a"],["debugchange"],["devtoolsDetector"],["nocontext"],["contentprotector"],["kan_vars.adblock"],["onAdScriptFailure"],["sneakerGoogleTag"],["wccp_pro_iscontenteditable"],["devtoolsDetector.addListener"],["googletag"],["openOverlaySignup"]];

const hostnamesMap = new Map([["comedy-radio.ru",1],["relax-fm.ru",1],["irecommend.ru",1],["auto.ru",2],["sm.news",2],["amedia.online",2],["sdamgia.ru",2],["otzovik.com",[3,4]],["liveinternet.ru",[5,6]],["gismeteo.ru",7],["gismeteo.by",7],["gismeteo.md",7],["gismeteo.kz",7],["kakprosto.ru",8],["drive2.ru",9],["texture-packs.com",10],["virtualpiano.net",11],["apkmos.com",11],["cee-trust.org",11],["udemydl.com",11],["cyclingnews.com",12],["pcgamer.com",12],["eurogamer.pt",12],["bikeperfect.com",12],["loudersound.com",[12,38]],["guitarworld.com",12],["creativebloq.com",12],["musicradar.com",12],["fosspost.org",13],["portalvirtualreality.ru",13],["pingvin.pro",13],["bonobono.com",13],["curbsideclassic.com",13],["wpgutenberg.top",13],["3dmodelshare.org",13],["turkishfoodchef.com",13],["itechua.com",13],["blowxtube.com",13],["orhanbhr.com",13],["testosterontr.com",13],["criptomonedaseico.com",13],["downloadsachmienphi.com",13],["fimico.de",13],["manhuaplus.com",13],["canyoublockit.com",13],["freeallcourse.com",13],["congressoemfoco.uol.com.br",13],["dogalvadi.com",13],["kompukter.ru",13],["paragezegeni.com",13],["gatevidyalay.com",13],["corgit.xyz",13],["freefincal.com",13],["dsogaming.com",13],["bordoklavyeli.net",13],["newonce.net",13],["gpcoder.com",13],["androidexplained.com",13],["borodavsem.ru",13],["czechavfree.com",13],["karaokes.com.ar",13],["kulturalnemedia.pl",13],["magazeta.com",13],["mur.tv",13],["o365info.com",13],["proswift.ru",13],["sovetolog.com",13],["tehnobzor.ru",13],["thelongdark.ru",13],["thewindowsclub.thewindowsclubco.netdna-cdn.com",13],["xiaomitech.net",13],["sports.ru",14],["ruyashoujo.com",15],["askdifference.com",16],["cartoonbrew.com",17],["gamemag.ru",18],["germancarforum.com",19],["unknowncheats.me",19],["lavoz.com.ar",20],["lcpdfr.com",21],["moregameslike.com",22],["parasportontario.ca",23],["macapp.org.cn",24],["picmix.com",24],["poedb.tw",24],["seo-visit.com",25],["sme.sk",26],["yenigolcuk.com",27],["hedefgazetesi.com.tr",27],["eldedemokrasi.com",27],["afyonhaberturk.com",27],["nehaberankara.com",27],["mansetburdur.com",27],["bolgesellig.com",27],["telgrafgazetesi.com",27],["burokratika.com",27],["balikesirartihaber.com",27],["ajansbalikligol.com",27],["karar67.com",27],["gazetemalatya.com",27],["vansesigazetesi.com",27],["kocaelisabah.com",27],["antalyadanhaberler.com",27],["aydinyeniufuk.com.tr",27],["yerelvanhaber.com",27],["a2teker.com",27],["kibrishakikat.com",27],["izmirtime35.com",27],["sancakplus.com",27],["marasfisilti.com",27],["burdurgazetesi.com",27],["zeytinburnuhaber.org",27],["denizli20haber.com",27],["akdenizdeyeniyuzyil.net",27],["ulakci.com",27],["egegundem.com.tr",27],["isdunyasindakadin.com",27],["haberimizvar.net",27],["weather.com",[28,38]],["vsthouse.ru",29],["primpogoda.ru",29],["gitjournal.tech",29],["ok.ru",30],["capital.com",31],["cableav.tv",32],["indiatoday.in",33],["filmweb.pl",34],["mimaletadepeliculas.blogspot.com",35],["megapastes.com",[35,37]],["programegratuitepc.com",[35,43]],["digitalsynopsis.com",[35,43]],["gaypornmasters.com",35],["knshow.com",35],["malybelgrad.pl",35],["descargacineclasico.com",[35,37,53,54]],["demolandia.net",35],["statelibrary.us",35],["coag.pl",35],["quicksleeper.pl",35],["m4ufree.tv",35],["lexlog.pl",[35,37,54]],["mainframestechhelp.com",35],["gamershit.altervista.org",35],["gagetmatome.com",35],["virpe.com",35],["feel-the-darkness.rocks",[35,43,54]],["bricksrus.com",35],["jacquieetmichel.net",35],["ahzaa.net",35],["karyawanesia.com",35],["langitmovie.com",35],["oceanof-games.com",[35,37,43,67]],["ponselharian.com",[35,37,43]],["holakikou.com",[35,43]],["hotpornfile.org",[35,37,67,87]],["e-sushi.fr",35],["evasion-online.com",35],["exclusifvoyages.com",35],["payeer-gift.ru",35],["pcso-lottoresults.com",35],["iovivoatenerife.it",[35,43]],["tritinia.com",[35,73]],["battle-one.com",[35,43]],["wjx.cn",[35,37,96]],["masuit.com",35],["book.zongheng.com",35],["ciweimao.com",35],["360doc.com",35],["dushu.qq.com",[35,37,85]],["qiangwaikan.com",[35,43]],["7fyd.com",35],["unikampus.net",35],["atlas-geografic.net",35],["filmpornoitaliano.org",[35,37,54]],["cafe.naver.com",[35,37,53]],["cinemakottaga.top",35],["ytv.co.jp",35],["flashplayer.org.ua",[35,43,67]],["canale.live",35],["rightnonel.com",[35,43,54]],["viafarmaciaonline.it",35],["postcourier.com.pg",[35,103]],["freestreams-live1.tv",35],["saikai.com.br",35],["verselemzes.hu",[35,37,53,67,87]],["cine.to",36],["filmesonlinex.co",37],["badzjeszczelepszy.pl",[37,54,66]],["hebrew4christians.com",37],["techieway.blogspot.com",37],["69translations.blogspot.com",[37,54,86]],["cyberspace.world",37],["dailynewsview.com",37],["youmath.it",37],["operatorsekolahdbn.com",37],["brownsboys.com",37],["greenocktelegraph.co.uk",38],["med1.de",38],["tomsguide.com",38],["pushsquare.com",38],["wings.io",39],["dicionariocriativo.com.br",40],["bloombergquint.com",40],["bibliacatolica.com.br",40],["mongri.net",40],["al.com",41],["allkpop.com",41],["calendarpedia.co.uk",41],["ccn.com",41],["cleveland.com",41],["comicsands.com",41],["duffelblog.com",41],["gamepur.com",41],["gamerevolution.com",41],["interestingengineering.com",41],["keengamer.com",41],["listenonrepeat.com",41],["mandatory.com",41],["mlive.com",41],["musicfeeds.com.au",41],["newatlas.com",41],["pgatour.com",41],["readlightnovel.org",41],["secondnexus.com",41],["sevenforums.com",41],["sport24.co.za",41],["superherohype.com",41],["thefashionspot.com",41],["theodysseyonline.com",41],["totalbeauty.com",41],["westernjournal.com",41],["cinemablend.com",41],["windows101tricks.com",41],["skip.li",42],["gay69.stream",43],["raccontivietati.com",43],["neyrologos.gr",43],["ggeguide.com",43],["elizabeth-mitchell.org",43],["blasianluvforever.com",43],["autophorie.de",43],["fruit01.xyz",43],["experciencia.com",43],["ifdreamscametrue.com",43],["juegosdetiempolibre.org",43],["naijagists.com",43],["chessimprover.com",43],["diaforetiko.gr",43],["tchadcarriere.com",43],["shaamtv.com",43],["totemat.pl",43],["wawlist.com",43],["cristelageorgescu.ro",[43,67,85]],["ilovevaldinon.it",43],["dialectsarchive.com",43],["sportsnet.ca",44],["gisclub.tv",45],["punto-informatico.it",46],["emol.com",47],["springfieldspringfield.co.uk",47],["infomoney.com.br",47],["otvfoco.com.br",47],["portalportuario.cl",47],["adevarul.ro",47],["city-data.com",47],["mixmods.com.br",48],["deezer.com",49],["gota.io",50],["xnxx.com",50],["allafinedelpalo.it",51],["heypoorplayer.com",51],["economictimes.indiatimes.com",52],["satcesc.com",53],["djelfa.info",54],["fin24.com",55],["stocktwits.com",55],["motogon.ru",56],["ctrl.blog",57],["descargasnsn.com",58],["priberam.org",59],["tunovelaligera.com",60],["zdnet.de",61],["putlockerfun.com",62],["chimica-online.it",63],["blog.kwick.de",[63,67]],["texte.work",63],["neowin.net",12],["laptopmag.com",12],["livescience.com",12],["digitalcameraworld.com",12],["keighleynews.co.uk",12],["t3.com",12],["recantodasletras.com.br",64],["lesoir.be",65],["yusepjaelani.blogspot.com",67],["ideaberita.com",67],["my-code4you.blogspot.com",67],["polagriparts.pl",67],["followmikewynn.com",67],["dreamlandresort.com",68],["live.b-c-e.us",68],["tecmundo.net",68],["disheye.com",68],["impotsurlerevenu.org",69],["insidermonkey.com",70],["kurosave.com",71],["gamebanana.com",24],["trojmiasto.pl",24],["good-football.org",24],["theregister.co.uk",72],["doranobi-fansub.id",73],["opportunitydesk.org",73],["jootc.com",[73,79]],["selfstudyanthro.com",73],["relet365.com",73],["wikibious.com",73],["koreanaddict.net",73],["generationamiga.com",73],["psihologiadeazi.ro",[73,103]],["flinsetyadi.com",73],["projektowanie-wnetrz-online.pl",73],["easyayurveda.com",[73,79,103,108]],["sharktankblog.com",[73,79,103,108]],["m4uhd.net",74],["quotev.com",75],["maxstream.video",76],["renditepassive.net",76],["52bdys.com",76],["earth.com",77],["digitaltrends.com",77],["nwherald.com",77],["lalawin.com",78],["ufret.jp",80],["motortrader.com.my",81],["2219.net",82],["upstream.to",83],["progameguides.com",84],["jpnn.com",85],["farm-ro.desigusxpro.com",85],["accgroup.vn",85],["empregoestagios.com",88],["elektrikmen.com",88],["hitproversion.com",88],["jobskaro.com",88],["appd.at",88],["apk1s.com",88],["audiobookcup.com",88],["elijahwood.altervista.org",89],["vinaurl.blogspot.com",90],["comprerural.com",91],["cssreference.io",92],["revistavanityfair.es",93],["toppremiumpro.com",94],["androidtvbox.eu",95],["dollarvr.com",95],["newsme.gr",95],["seffafbelediyecilik.com",27],["imooc.com",97],["commandlinux.com",98],["hongxiu.com",99],["readnovel.com",99],["c4ddownload.com",100],["the-scorpions.com",100],["animatedshows.to",101],["miraculous.to",101],["phimdinhcao.com",102],["beastx.top",102],["chillx.top",102],["playerx.stream",102],["phimlongtieng.net",102],["revenue.land",103],["pitesti24.ro",103],["samsungtechwin.com",103],["cours-de-droit.net",103],["iptv4best.com",103],["blogvisaodemercado.pt",103],["kapitalis.com",103],["tiempo.hn",103],["winmeen.com",103],["ibps.in",103],["visse.com.br",103],["javsubtitle.co",103],["licensekeys.org",103],["mediahiburan.my",103],["tipssehatcantik.com",103],["anime-drama.jp",103],["jbjbgame.com",103],["viatasisanatate.com",103],["ziarulargesul.ro",103],["globaldefensecorp.com",103],["gossipnextdoor.com",103],["coffeeapps.ir",103],["media.framu.world",103],["immobiliaremia.com",103],["colegiosconcertados.info",103],["bigdatauni.com",103],["rukim.id",103],["visefierbinti.ro",103],["cyberkrafttraining.com",103],["theaircurrent.com",103],["nocturnetls.net",103],["clockks.com",103],["ananda-yoga.ro",103],["poolpiscina.com",103],["infodifesa.it",103],["getective.com",103],["formatatmak.com",103],["drkrok.com",103],["alphagirlreviews.com",103],["kitchennovel.com",103],["voxvalachorum.ro",103],["cracksone.com",103],["day-hoc.org",103],["onlineonderdelenshop.nl",103],["primicia.com.ve",103],["tech-recipes.com",103],["afrikmag.com",103],["maduras.vip",103],["aprendeinglessila.com",103],["kicknews.today",103],["koalasplayground.com",103],["hellokpop.com",103],["hayatbilgileri.com",103],["moneyexcel.com",103],["placementstore.com",103],["neuroteam-metz.de",103],["codedosa.com",103],["liveyourmaths.com",103],["newspao.gr",103],["ieltsliz.com",103],["programasvirtualespc.net",103],["tempatwisataseru.com",103],["yhocdata.com",104],["iskandinavya.com",105],["warcraftlogs.com",106],["sneakernews.com",107],["forplayx.ink",109],["aboutchromebooks.com",110],["ancient.eu",110],["comingsoon.net",110],["daysoftheyear.com",110],["dotesports.com",110],["edn.com",110],["gearjunkie.com",110],["harvardmagazine.com",110],["lgbtqnation.com",110],["majorgeeks.com",110],["mangainn.net",110],["medievalists.net",110],["sherdog.com",110],["statesman.com",110],["tvguide.com",110],["winhelponline.com",110],["edurev.in",111]]);

const entitiesMap = new Map([["docviewer.yandex",0],["tv.yandex",1],["desbloqueador",35],["voirfilms",[35,37]],["anisubindo",[35,67]],["tabonitobrasil",43],["fmovies",53],["wstream",76]]);

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
    const token =
        String.fromCharCode(Date.now() % 26 + 97) +
        Math.floor(Math.random() * 982451653 + 982451653).toString(36);
    const oe = self.onerror;
    self.onerror = function(msg, ...args) {
        if ( typeof msg === 'string' && msg.includes(token) ) { return true; }
        if ( oe instanceof Function ) {
            return oe.call(this, msg, ...args);
        }
    }.bind();
    return token;
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

// Not Firefox
if ( typeof wrappedJSObject !== 'object' ) {
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
