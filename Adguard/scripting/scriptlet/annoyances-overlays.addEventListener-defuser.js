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
const uBOL_addEventListenerDefuser = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["DOMContentLoaded","admiral"],["error","admiral"],["np.detect","detail.blocking"],["load","theModal"],["load","XV.ad_block"],["DOMContentLoaded","adsBlocked"],["load","Dislike intrusive ads"],["load","adblock_whitelist"],["DOMContentLoaded","replaceAdsWithFallbackImages"],["np.detect"],["load",".offsetHeight == 0"],["load","adBlock"],["/load|error/",".head.removeChild("],["savvy_popup_in_dom","setTimeout"],["prepare-exit-modal","=>"],["mouseout","relatedTarget"],["DOMContentLoaded","InactivityPopin"],["load","openExitPopup"],["scroll","scrollTop())+n-i>o/2"],["click","interstitial"],["mouseleave","scribd_ad"],["mouseleave"],["popstate","addEventProcessor"],["scroll","eventHandle.elem"],["wheel"],["scroll","documentElement.scrollTop"],["scroll","_onscroll"],["mouseout","#modalSair"],["scroll","showPopup"],["scroll",".open()"],["mouseout","event.dispatch.apply"],["ww-open-overlay","scrollTop"],["load","setVideoTop"],["load","newsletter"],["scroll","t.attemptLoad"],["load","event.dispatch.apply"],["/^(contextmenu|copy)$/"],["blur"],["copy"],["contextmenu"],["/^(?:contextmenu|copy|selectstart)$/"],["/^(?:contextmenu|copy)$/","preventDefault"],["/^(?:contextmenu|keydown)$/"],["mouseout"],["scroll"],["DOMContentLoaded",".js-popup-adblock"],["/^(contextmenu|keydown)$/"],["keydown"],["/^(?:contextmenu|copy|keydown)$/"],["mouseout","pop"],["/^(?:keyup|keydown)$/"],["keydown","disable_in_input"],["keydown","preventDefault"],["/contextmenu|keydown|keyup|copy/"],["copy","getSelection"],["","t.preventDefault"],["copy","replaceCopiedText"],["/^(contextmenu|copy|dragstart|selectstart)$/"],["","ads"],["/contextmenu|selectstart|copy/"],["/contextmenu|copy|keydown/"],["/contextmenu|select|copy/"],["contextmenu","a"],["/^(mouseout|mouseleave)$/"],["/contextmenu|selectstart/"],["dragstart|keydown/"],["/contextmenu|keydown|dragstart/"],["","_0x"],["contextmenu","preventDefault"],["copy","preventDefault"],["","adtoniq"],["/^(?:contextmenu|copy|keydown|mousedown)$/"],["/contextmenu|keydown/"],["devtoolschange"],["/contextmenu|copy/"],["","mdp"],["/blur|mousedown|mouseenter|mouseleave/"],["/contextmenu|cut|copy|paste/"],["/contextmenu|mousedown/"],["/contextmenu|copy|selectstart/"],["","0x"],["/^(?:contextmenu|dragstart|selectstart)$/"],["/^(?:contextmenu|copy)$/"],["/dragstart|keyup|keydown/"],["/keyup|keydown/","wpcc"],["/contextmenu|cut|copy|keydown/"],["","undefined"],["/contextmenu|selectstart|copy|dragstart/"],["/copy|dragstart/"],["/copy|contextmenu/"],["error"],["dragstart"],["","AdB"],["selectionchange","quill.emitter"],["/contextmenu|selectstart|select|copy|dragstart/"],["load","adLazy"],["copy","jQuery!==\"undefined\""],["copy","[native code]"],["selectstart"],["/^(?:copy|paste)$/","undefined"],["/copy|keydown/"],["/copy|cut|selectstart/"],["/keydown|keyup/","keyCode"],["keydown","disabledEvent"],["","Key"],["/copy|cut|paste|selectstart/"],["/contextmenu|dragstart|keydown/","event.dispatch.apply"],["beforepaste"],["","keyCode"],["DOMContentLoaded","rprw"],["","key"],["","ctrlKey"],["contextmenu","event.triggered"],["copy","pagelink"],["/keydown|mousedown/"],["copy","Source"],["","login"],["/contextmenu|copy|drag|dragstart/"],["/contextmenu|keydown|keypress|copy/"],["","blockFuckingEverything"],["mouseout","openLayer"],["/contextmenu|keydown/","preventDefault"],["mousedown","dispatch"],["/contextmenu|mousedown/","return\"undefined\""],["DOMContentLoaded","ready"],["keydown","disabledKeys"],["DOMContentLoaded","load"],["contextmenu","_0x"],["keydown","keyCode"],["contextmenu","undefined"],["contextmenu","[native code]"],["/contextmenu|keyup|keydown/"],["mouseout","cookie"],["DOMContentLoaded","ads"],["rocket-DOMContentLoaded","bind(document)"],["mouseout","innerHeight"],["/^(contextmenu|mousedown|keydown)$/","preventDefault"],["error","browser-plugin"],["/contextmenu|devtoolschange/"],["/select|copy|contextmenu/"],["/cut|copy|paste|contextmenu/"]];

const hostnamesMap = new Map([["gamerevolution.com",0],["onmsft.com",0],["mlive.com",1],["nbcsports.com",1],["cbssports.com",1],["visualcapitalist.com",1],["news8000.com",1],["kxly.com",1],["thethings.com",1],["koamnewsnow.com",1],["gfinityesports.com",1],["dualshockers.com",1],["insider-gaming.com",1],["thenerdstash.com",1],["pocketnow.com",1],["ktvz.com",1],["247sports.com",1],["movieweb.com",1],["realclearpolitics.com",1],["givemesport.com",1],["xda-developers.com",1],["collider.com",1],["pocket-lint.com",1],["hotcars.com",1],["topspeed.com",1],["thegamer.com",1],["makeuseof.com",1],["screenrant.com",1],["androidpolice.com",1],["cbr.com",1],["twitchmetrics.net",2],["forx.mazen-ve3.com",3],["xenvn.com",4],["mysb555.com",5],["timeanddate.com",[6,26]],["slideshare.net",[7,20]],["warcraftlogs.com",8],["nwdb.info",9],["explorecams.com",9],["tiermaker.com",9],["freeforumzone.com",10],["megogo.sport",11],["megogo.ru",11],["ynet.co.il",12],["infobae.com",12],["abcnyheter.no",12],["sme.sk",12],["yourdictionary.com",12],["foxnews.com",12],["privacysavvy.com",13],["retailmenot.com",14],["later.com",15],["actu.orange.fr",16],["financer.com",17],["blog.csdn.net",[18,69]],["boyfriendtv.com",19],["milenio.com",[21,38]],["jakiwniosek.pl",21],["hikakaku.com",22],["wacul-ai.com",23],["qodeinteractive.com",24],["digitalvidya.com",24],["bbc.co.uk",25],["imovelguide.com.br",27],["facebook.com",28],["facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd.onion",28],["cnyfertility.com",29],["da-direkt.de",30],["westwing.de",31],["tv.golfnetwork.co.jp",32],["posterxxl.de",33],["bijutsutecho.com",34],["try-it.jp",35],["s0urce.io",36],["filefox.cc",37],["uol.com.br",38],["gazetadopovo.com.br",38],["indiatimes.com",38],["odiario.com",38],["otempo.com.br",38],["estadao.com.br",38],["bacaan.id",38],["ofuxico.com.br",38],["pentruea.com",38],["ciberduvidas.iscte-iul.pt",38],["globo.com",38],["citas.in",38],["blitzrechner.de",38],["emailfake.com",38],["lyrical-nonsense.com",38],["mediafax.ro",38],["economica.net",38],["polsatnews.pl",38],["novagente.pt",38],["arlinadzgn.com",38],["nowcoder.com",38],["libertatea.ro",38],["erinsakura.com",38],["yuque.com",38],["deepl.com",38],["digi24.ro",38],["onna.kr",38],["ziare.com",38],["agrointel.ro",38],["skyozora.com",38],["veneto.info",38],["edurev.in",38],["transinfo.pl",38],["news.17173.com",38],["chowhound.com",38],["explore.com",38],["foodie.com",38],["foodrepublic.com",38],["glam.com",38],["grunge.com",38],["healthdigest.com",38],["housedigest.com",38],["looper.com",38],["mashed.com",38],["moneydigest.com",38],["nickiswift.com",38],["outdoorguide.com",38],["slashfilm.com",38],["slashgear.com",38],["tastingtable.com",38],["thedailymeal.com",38],["thelist.com",38],["women.com",38],["wrestlinginc.com",38],["abril.com.br",38],["sarthaks.com",38],["delfi.lt",38],["pendulumedu.com",38],["peliculas24.me",39],["roztoczanskipn.pl",39],["economictimes.indiatimes.com",[39,43]],["dzwignice.info",39],["script-stack.com",[39,75]],["mio.to",39],["husseinezzat.com",[39,47]],["taxo-acc.pl",39],["portalwrc.pl",39],["lublin.eu",39],["onlystream.tv",39],["dddance.party",39],["kapiert.de",39],["hitcena.pl",39],["tv-asahi.co.jp",39],["digitalfernsehen.de",39],["suzylu.co.uk",39],["music.apple.com",39],["skidrowcodex.net",39],["ds2play.com",39],["ds2video.com",39],["d0o0d.com",39],["vsco.co",39],["nationalgeographic.com",39],["festival-cannes.com",39],["strcloud.in",39],["ufret.jp",39],["thenekodark.com",39],["artesacro.org",39],["poli-vsp.ru",39],["polyvsp.ru",39],["ananweb.jp",39],["daimangajiten.com",39],["digital.lasegunda.com",39],["hibiki-radio.jp",39],["garyfeinbergphotography.com",39],["clubulbebelusilor.ro",39],["gplinks.co",39],["ifdreamscametrue.com",39],["marksandspencer.com",39],["stowarzyszenie-impuls.eu",39],["viveretenerife.com",39],["oferty.dsautomobiles.pl",39],["wzamrani.com",39],["citroen.pl",39],["peugeot.pl",39],["wirtualnyspac3r.pl",39],["antena3.com",39],["lasexta.com",39],["pashplus.jp",39],["upvideo.to",39],["kpopsea.com",39],["cnki.net",39],["wpchen.net",39],["hongxiu.com",39],["readnovel.com",39],["uihtm.com",39],["uslsoftware.com",39],["rule34hentai.net",39],["cloudemb.com",39],["news24.jp",39],["gaminplay.com",39],["njjzxl.net",39],["voe.sx",[39,102]],["voe-unblock.com",[39,102]],["scrolller.com",39],["cocomanga.com",39],["nusantararom.org",[39,108]],["virpe.cc",39],["pobre.tv",[39,108]],["ukrainashop.com",39],["celtadigital.com",39],["matzoo.pl",39],["asia2tv.cn",39],["labs.j-novel.club",39],["turbo1.co",39],["futbollatam.com",39],["read.amazon.com",39],["box-manga.com",39],["the-masters-voice.com",39],["hemas.pl",39],["accgroup.vn",39],["btvnovinite.bg",39],["allcryptoz.net",39],["crewbase.net",39],["crewus.net",39],["shinbhu.net",39],["shinchu.net",39],["thumb8.net",39],["thumb9.net",39],["topcryptoz.net",39],["uniqueten.net",39],["ultraten.net",39],["cloudcomputingtopics.net",39],["bianity.net",39],["coinsparty.com",39],["postype.com",39],["lofter.com",[39,116]],["hentaihaven.xxx",39],["espn.com",39],["4media.com",39],["przegladpiaseczynski.pl",39],["freewaysintl.com",39],["cool-etv.net",39],["j91.asia",39],["sgd.de",39],["dicasfinanceirasbr.com",39],["dicasdevalor.net",39],["dicasdefinancas.net",39],["guiasaude.info",39],["felizemforma.com",39],["financasdeouro.com",39],["mangaschan.net",39],["sssscanlator.com",39],["nightscans.net",39],["cypherscans.xyz",39],["twitchemotes.com",39],["smartkhabrinews.com",39],["streamvid.net",39],["mkv-pastes.com",39],["knshow.com",40],["jusbrasil.com.br",41],["promobit.com.br",43],["techjunkie.com",43],["zerohedge.com",43],["1mg.com",43],["khou.com",43],["10tv.com",43],["artsy.net",44],["boards.net",44],["freeforums.net",44],["proboards.com",44],["tastycookery.com",45],["animeshouse.net",46],["free-mp3-download.net",46],["tepat.id",46],["olhonaviagem.com",47],["jootc.com",47],["hikarinoakari.com",47],["operatorsekolahdbn.com",47],["wawlist.com",47],["teachoo.com",47],["techsupportall.com",48],["lugarcerto.com.br",49],["satcesc.com",50],["animatedshows.to",50],["miraculous.to",[50,68]],["statelibrary.us",51],["bigulnews.tv",53],["news.chosun.com",54],["androidweblog.com",55],["cronista.com",56],["fcportables.com",57],["venea.net",58],["uta-net.com",59],["downloadtutorials.net",[59,75]],["blog.naver.com",59],["myschool-eng.com",60],["orangespotlight.com",61],["th-world.com",[61,80]],["itvn.pl",62],["itvnextra.pl",62],["kuchniaplus.pl",62],["miniminiplus.pl",62],["player.pl",62],["ttv.pl",62],["tvn.pl",62],["tvn24.pl",62],["tvn24bis.pl",62],["tvn7.pl",62],["tvnfabula.pl",62],["tvnstyle.pl",62],["tvnturbo.pl",62],["x-link.pl",62],["x-news.pl",62],["kickante.com.br",21],["thestar.com.my",21],["corriereadriatico.it",21],["ilsole24ore.com",21],["scribd.com",63],["thehouseofportable.com",64],["ntvspor.net",64],["book.zhulang.com",64],["tadu.com",64],["selfstudyhistory.com",65],["lokercirebon.com",66],["avdelphi.com",67],["maxstream.video",68],["wpb.shueisha.co.jp",68],["tiktok.com",68],["vedantu.com",68],["zsti.zsti.civ.pl",68],["kathleenmemberhistory.com",[68,103]],["nonesnanking.com",[68,103]],["prefulfilloverdoor.com",[68,103]],["phenomenalityuniform.com",[68,103]],["nectareousoverelate.com",[68,103]],["timberwoodanotia.com",[68,103]],["strawberriesporail.com",[68,103]],["valeronevijao.com",[68,103]],["cigarlessarefy.com",[68,103]],["figeterpiazine.com",[68,103]],["yodelswartlike.com",[68,103]],["generatesnitrosate.com",[68,103]],["crownmakermacaronicism.com",[68,103]],["chromotypic.com",[68,103]],["gamoneinterrupted.com",[68,103]],["metagnathtuggers.com",[68,103]],["wolfdyslectic.com",[68,103]],["rationalityaloelike.com",[68,103]],["sizyreelingly.com",[68,103]],["simpulumlamerop.com",[68,103]],["urochsunloath.com",[68,103]],["monorhinouscassaba.com",[68,103]],["counterclockwisejacky.com",[68,103]],["35volitantplimsoles5.com",[68,103]],["scatch176duplicities.com",[68,103]],["antecoxalbobbing1010.com",[68,103]],["boonlessbestselling244.com",[68,103]],["cyamidpulverulence530.com",[68,103]],["guidon40hyporadius9.com",[68,103]],["449unceremoniousnasoseptal.com",[68,103]],["19turanosephantasia.com",[68,103]],["30sensualizeexpression.com",[68,103]],["321naturelikefurfuroid.com",[68,103]],["745mingiestblissfully.com",[68,103]],["availedsmallest.com",[68,103]],["greaseball6eventual20.com",[68,103]],["toxitabellaeatrebates306.com",[68,103]],["20demidistance9elongations.com",[68,103]],["audaciousdefaulthouse.com",[68,103]],["fittingcentermondaysunday.com",[68,103]],["fraudclatterflyingcar.com",[68,103]],["launchreliantcleaverriver.com",[68,103]],["matriculant401merited.com",[68,103]],["realfinanceblogcenter.com",[68,103]],["reputationsheriffkennethsand.com",[68,103]],["telyn610zoanthropy.com",[68,103]],["tubelessceliolymph.com",[68,103]],["tummulerviolableness.com",[68,103]],["un-block-voe.net",[68,103]],["v-o-e-unblock.com",[68,103]],["voe-un-block.com",[68,103]],["voeun-block.net",[68,103]],["voeunbl0ck.com",[68,103]],["voeunblck.com",[68,103]],["voeunblk.com",[68,103]],["voeunblock3.com",[68,103]],["audiotools.pro",68],["magesy.blog",68],["magesypro.pro",68],["audioztools.com",68],["www.ntv.co.jp",68],["faptiti.com",68],["wormate.io",68],["selfstudys.com",68],["adslink.pw",68],["jpopsingles.eu",68],["vinstartheme.com",[68,125]],["leakedzone.com",[68,128]],["fjordd.com",68],["seriesperu.com",68],["zippyupload.com",68],["alphapolis.co.jp",69],["juejin.cn",69],["sweetslyrics.com",69],["thegatewaypundit.com",70],["thegearhunt.com",71],["jfdb.jp",72],["loginhit.com.ng",72],["charbelnemnom.com",72],["bphimmoi.net",72],["goodhub.xyz",72],["thotsbay.tv",72],["edailybuzz.com",74],["zhihu.com",74],["qidian.com",74],["invado.pl",74],["webnovel.com",74],["bajecnavareska.sk",75],["lunas.pro",75],["onlinefreecourse.net",75],["pisr.org",75],["uplod.net",75],["thewpclub.net",75],["thememazing.com",75],["themebanks.com",75],["mesquitaonline.com",75],["skandynawiainfo.pl",75],["onlinecoursebay.com",75],["magnet-novels.com",76],["dreamsfriend.com",77],["trakteer.id",78],["699pic.com",78],["kutub3lpdf.com",79],["sklep-agroland.pl",81],["polagriparts.pl",82],["nordkorea-info.de",83],["geotips.net",84],["hardcoregames.ca",85],["lataifas.ro",86],["daotranslate.com",86],["toppremiumpro.com",87],["wattpad.com",88],["starbene.it",89],["fauxid.com",90],["androidtvbox.eu",91],["nicematin.com",92],["bilibili.com",93],["yamibo.com",94],["fimfiction.net",95],["moegirl.org.cn",96],["bbs.mihoyo.com",97],["peekme.cc",98],["ihbarweb.org.tr",99],["baixedetudo.net.br",100],["gardenia.net",101],["wpking.in",104],["hollywoodmask.com",105],["mbalib.com",105],["wenku.baidu.com",106],["mooc.chaoxing.com",107],["www-daftarharga.blogspot.com",108],["realpython.com",109],["linkmate.xyz",110],["cristelageorgescu.ro",111],["novelpia.com",112],["privivkainfo.ru",113],["frameboxxindore.com",113],["descargatepelis.com",114],["vercalendario.info",115],["zipcode.com.ng",115],["poipiku.com",117],["postcourier.com.pg",118],["gmx.co.uk",120],["gmx.com",120],["likey.me",121],["wallpaperaccess.com",122],["shortform.com",123],["joysound.com",124],["colors.sonicthehedgehog.com",126],["senpa.io",127],["txori.com",127],["braflix.app",128],["comikey.com",129],["saikaiscans.net",130],["translate.goog",131],["oreilly.com",132],["alfred.camera",133],["wrosinski.pl",134],["wtsp.com",135],["starzunion.com",136],["lowcygier.pl",137],["rsadnetworkinfo.com",138],["rsinsuranceinfo.com",138],["rsfinanceinfo.com",138],["rsgamer.app",138],["rssoftwareinfo.com",138],["rshostinginfo.com",138],["rseducationinfo.com",138],["studiestoday.com",139],["studyrankers.com",140],["bharatavani.in",140]]);

const entitiesMap = new Map([["mangaku",39],["dood",39],["streamtape",39],["asiatv",39],["bg-gledai",39],["descarga-animex",42],["tabonitobrasil",52],["anisubindo",52],["wstream",68],["voe-unblock",[68,103]],["pobre",[68,119]],["bmovies",73]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function addEventListenerDefuser(
    type = '',
    pattern = ''
) {
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('prevent-addEventListener', type, pattern);
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 2);
    const reType = safe.patternToRegex(type, undefined, true);
    const rePattern = safe.patternToRegex(pattern);
    const debug = shouldDebug(extraArgs);
    const targetSelector = extraArgs.elements || undefined;
    const shouldPrevent = (thisArg, type, handler) => {
        if ( targetSelector !== undefined ) {
            const elems = Array.from(document.querySelectorAll(targetSelector));
            if ( elems.includes(thisArg) === false ) { return false; }
        }
        const matchesType = safe.RegExp_test.call(reType, type);
        const matchesHandler = safe.RegExp_test.call(rePattern, handler);
        const matchesEither = matchesType || matchesHandler;
        const matchesBoth = matchesType && matchesHandler;
        if ( debug === 1 && matchesBoth || debug === 2 && matchesEither ) {
            debugger; // jshint ignore:line
        }
        return matchesBoth;
    };
    const trapEddEventListeners = ( ) => {
        const eventListenerHandler = {
            apply: function(target, thisArg, args) {
                let t, h;
                try {
                    t = String(args[0]);
                    h = args[1] instanceof Function
                        ? String(safe.Function_toString(args[1]))
                        : String(args[1]);
                } catch(ex) {
                }
                if ( type === '' && pattern === '' ) {
                    safe.uboLog(logPrefix, `Called: ${t}\n${h}`);
                } else if ( shouldPrevent(thisArg, t, h) ) {
                    return safe.uboLog(logPrefix, `Prevented: ${t}\n${h}`);
                }
                return Reflect.apply(target, thisArg, args);
            },
            get(target, prop, receiver) {
                if ( prop === 'toString' ) {
                    return target.toString.bind(target);
                }
                return Reflect.get(target, prop, receiver);
            },
        };
        self.EventTarget.prototype.addEventListener = new Proxy(
            self.EventTarget.prototype.addEventListener,
            eventListenerHandler
        );
    };
    runAt(( ) => {
        trapEddEventListeners();
    }, extraArgs.runAt);
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1,
            'interactive': 2, 'end': 2, '2': 2,
            'complete': 3, 'idle': 3, '3': 3,
        };
        const tokens = Array.isArray(state) ? state : [ state ];
        for ( const token of tokens ) {
            const prop = `${token}`;
            if ( targets.hasOwnProperty(prop) === false ) { continue; }
            return targets[prop];
        }
        return 0;
    };
    const runAt = intFromReadyState(when);
    if ( intFromReadyState(document.readyState) >= runAt ) {
        fn(); return;
    }
    const onStateChange = ( ) => {
        if ( intFromReadyState(document.readyState) < runAt ) { return; }
        fn();
        safe.removeEventListener.apply(document, args);
    };
    const safe = safeSelf();
    const args = [ 'readystatechange', onStateChange, { capture: true } ];
    safe.addEventListener.apply(document, args);
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

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.canDebug && details.debug;
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
    try { addEventListenerDefuser(...argsList[i]); }
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
    return uBOL_addEventListenerDefuser();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_addEventListenerDefuser = cloneInto([
            [ '(', uBOL_addEventListenerDefuser.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_addEventListenerDefuser);
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
    delete page.uBOL_addEventListenerDefuser;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
