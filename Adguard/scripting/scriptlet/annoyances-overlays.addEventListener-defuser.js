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

const argsList = [["DOMContentLoaded","admiral"],["error","admiral"],["np.detect","detail.blocking"],["load","theModal"],["load","XV.ad_block"],["DOMContentLoaded","adsBlocked"],["load","Dislike intrusive ads"],["load","adblock_whitelist"],["DOMContentLoaded","replaceAdsWithFallbackImages"],["np.detect"],["load",".offsetHeight == 0"],["load","adBlock"],["/load|error/",".head.removeChild("],["DOMContentLoaded","firstLoad"],["savvy_popup_in_dom","setTimeout"],["prepare-exit-modal","=>"],["mouseout","relatedTarget"],["DOMContentLoaded","InactivityPopin"],["load","openExitPopup"],["scroll","scrollTop())+n-i>o/2"],["click","interstitial"],["mouseleave","scribd_ad"],["mouseleave"],["popstate","addEventProcessor"],["scroll","eventHandle.elem"],["wheel"],["scroll","documentElement.scrollTop"],["scroll","_onscroll"],["mouseout","#modalSair"],["scroll","showPopup"],["scroll",".open()"],["mouseout","event.dispatch.apply"],["ww-open-overlay","scrollTop"],["load","setVideoTop"],["load","newsletter"],["scroll","t.attemptLoad"],["load","event.dispatch.apply"],["/^(contextmenu|copy)$/"],["blur"],["copy"],["contextmenu"],["/^(?:contextmenu|copy|selectstart)$/"],["/^(?:contextmenu|copy)$/","preventDefault"],["/^(?:contextmenu|keydown)$/"],["mouseout"],["scroll"],["DOMContentLoaded",".js-popup-adblock"],["/^(contextmenu|keydown)$/"],["keydown"],["/^(?:contextmenu|copy|keydown)$/"],["mouseout","pop"],["/^(?:keyup|keydown)$/"],["keydown","disable_in_input"],["keydown","preventDefault"],["/contextmenu|keydown|keyup|copy/"],["copy","getSelection"],["","t.preventDefault"],["copy","replaceCopiedText"],["/^(contextmenu|copy|dragstart|selectstart)$/"],["","ads"],["/contextmenu|selectstart|copy/"],["/contextmenu|copy|keydown/"],["/contextmenu|select|copy/"],["contextmenu","a"],["/^(mouseout|mouseleave)$/"],["/contextmenu|selectstart/"],["dragstart|keydown/"],["/contextmenu|keydown|dragstart/"],["","_0x"],["contextmenu","preventDefault"],["copy","preventDefault"],["","adtoniq"],["/^(?:contextmenu|copy|keydown|mousedown)$/"],["/contextmenu|keydown/"],["devtoolschange"],["/contextmenu|copy/"],["","mdp"],["/blur|mousedown|mouseenter|mouseleave/"],["/contextmenu|cut|copy|paste/"],["/contextmenu|mousedown/"],["/contextmenu|copy|selectstart/"],["","0x"],["/^(?:contextmenu|dragstart|selectstart)$/"],["/^(?:contextmenu|copy)$/"],["/dragstart|keyup|keydown/"],["/keyup|keydown/","wpcc"],["/contextmenu|cut|copy|keydown/"],["","undefined"],["/contextmenu|selectstart|copy|dragstart/"],["/copy|dragstart/"],["/copy|contextmenu/"],["error"],["dragstart"],["","AdB"],["selectionchange","quill.emitter"],["/contextmenu|selectstart|select|copy|dragstart/"],["load","adLazy"],["copy","jQuery!==\"undefined\""],["copy","[native code]"],["selectstart"],["/^(?:copy|paste)$/","undefined"],["/copy|keydown/"],["/copy|cut|selectstart/"],["/keydown|keyup/","keyCode"],["keydown","disabledEvent"],["","Key"],["/copy|cut|paste|selectstart/"],["/contextmenu|dragstart|keydown/","event.dispatch.apply"],["beforepaste"],["","keyCode"],["DOMContentLoaded","rprw"],["","key"],["","ctrlKey"],["contextmenu","event.triggered"],["copy","pagelink"],["/keydown|mousedown/"],["copy","Source"],["","login"],["/contextmenu|copy|drag|dragstart/"],["/contextmenu|keydown|keypress|copy/"],["","blockFuckingEverything"],["mouseout","openLayer"],["/contextmenu|keydown/","preventDefault"],["mousedown","dispatch"],["/contextmenu|mousedown/","return\"undefined\""],["DOMContentLoaded","ready"],["keydown","disabledKeys"],["DOMContentLoaded","load"],["contextmenu","_0x"],["keydown","keyCode"],["contextmenu","undefined"],["contextmenu","[native code]"],["/contextmenu|keyup|keydown/"],["mouseout","cookie"],["DOMContentLoaded","ads"],["rocket-DOMContentLoaded","bind(document)"],["mouseout","innerHeight"],["/^(contextmenu|mousedown|keydown)$/","preventDefault"],["error","browser-plugin"],["/contextmenu|devtoolschange/"],["/select|copy|contextmenu/"],["/cut|copy|paste|contextmenu/"]];

const hostnamesMap = new Map([["gamerevolution.com",0],["onmsft.com",0],["mlive.com",1],["nbcsports.com",1],["cbssports.com",1],["visualcapitalist.com",1],["news8000.com",1],["kxly.com",1],["thethings.com",1],["koamnewsnow.com",1],["gfinityesports.com",1],["dualshockers.com",1],["insider-gaming.com",1],["thenerdstash.com",1],["pocketnow.com",1],["ktvz.com",1],["247sports.com",1],["movieweb.com",1],["realclearpolitics.com",1],["givemesport.com",1],["xda-developers.com",1],["collider.com",1],["pocket-lint.com",1],["hotcars.com",1],["topspeed.com",1],["thegamer.com",1],["makeuseof.com",1],["screenrant.com",1],["androidpolice.com",1],["cbr.com",1],["twitchmetrics.net",2],["forx.mazen-ve3.com",3],["xenvn.com",4],["mysb555.com",5],["timeanddate.com",[6,27]],["slideshare.net",[7,21]],["warcraftlogs.com",8],["nwdb.info",9],["explorecams.com",9],["tiermaker.com",9],["freeforumzone.com",10],["megogo.sport",11],["megogo.ru",11],["ynet.co.il",12],["infobae.com",12],["abcnyheter.no",12],["sme.sk",12],["yourdictionary.com",12],["foxnews.com",12],["fox4kc.com",13],["privacysavvy.com",14],["retailmenot.com",15],["later.com",16],["actu.orange.fr",17],["financer.com",18],["blog.csdn.net",[19,70]],["boyfriendtv.com",20],["milenio.com",[22,39]],["jakiwniosek.pl",22],["hikakaku.com",23],["wacul-ai.com",24],["qodeinteractive.com",25],["digitalvidya.com",25],["bbc.co.uk",26],["imovelguide.com.br",28],["facebook.com",29],["facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd.onion",29],["cnyfertility.com",30],["da-direkt.de",31],["westwing.de",32],["tv.golfnetwork.co.jp",33],["posterxxl.de",34],["bijutsutecho.com",35],["try-it.jp",36],["s0urce.io",37],["filefox.cc",38],["uol.com.br",39],["gazetadopovo.com.br",39],["indiatimes.com",39],["odiario.com",39],["otempo.com.br",39],["estadao.com.br",39],["bacaan.id",39],["ofuxico.com.br",39],["pentruea.com",39],["ciberduvidas.iscte-iul.pt",39],["globo.com",39],["citas.in",39],["blitzrechner.de",39],["emailfake.com",39],["lyrical-nonsense.com",39],["mediafax.ro",39],["economica.net",39],["polsatnews.pl",39],["novagente.pt",39],["arlinadzgn.com",39],["nowcoder.com",39],["libertatea.ro",39],["erinsakura.com",39],["yuque.com",39],["deepl.com",39],["digi24.ro",39],["onna.kr",39],["ziare.com",39],["agrointel.ro",39],["skyozora.com",39],["veneto.info",39],["edurev.in",39],["transinfo.pl",39],["news.17173.com",39],["chowhound.com",39],["explore.com",39],["foodie.com",39],["foodrepublic.com",39],["glam.com",39],["grunge.com",39],["healthdigest.com",39],["housedigest.com",39],["looper.com",39],["mashed.com",39],["moneydigest.com",39],["nickiswift.com",39],["outdoorguide.com",39],["slashfilm.com",39],["slashgear.com",39],["tastingtable.com",39],["thedailymeal.com",39],["thelist.com",39],["women.com",39],["wrestlinginc.com",39],["abril.com.br",39],["sarthaks.com",39],["delfi.lt",39],["pendulumedu.com",39],["peliculas24.me",40],["roztoczanskipn.pl",40],["economictimes.indiatimes.com",[40,44]],["dzwignice.info",40],["script-stack.com",[40,76]],["mio.to",40],["husseinezzat.com",[40,48]],["taxo-acc.pl",40],["portalwrc.pl",40],["lublin.eu",40],["onlystream.tv",40],["dddance.party",40],["kapiert.de",40],["hitcena.pl",40],["tv-asahi.co.jp",40],["digitalfernsehen.de",40],["suzylu.co.uk",40],["music.apple.com",40],["skidrowcodex.net",40],["ds2play.com",40],["ds2video.com",40],["d0o0d.com",40],["vsco.co",40],["nationalgeographic.com",40],["festival-cannes.com",40],["strcloud.in",40],["ufret.jp",40],["thenekodark.com",40],["artesacro.org",40],["poli-vsp.ru",40],["polyvsp.ru",40],["ananweb.jp",40],["daimangajiten.com",40],["digital.lasegunda.com",40],["hibiki-radio.jp",40],["garyfeinbergphotography.com",40],["clubulbebelusilor.ro",40],["gplinks.co",40],["ifdreamscametrue.com",40],["marksandspencer.com",40],["stowarzyszenie-impuls.eu",40],["viveretenerife.com",40],["oferty.dsautomobiles.pl",40],["wzamrani.com",40],["citroen.pl",40],["peugeot.pl",40],["wirtualnyspac3r.pl",40],["antena3.com",40],["lasexta.com",40],["pashplus.jp",40],["upvideo.to",40],["kpopsea.com",40],["cnki.net",40],["wpchen.net",40],["hongxiu.com",40],["readnovel.com",40],["uihtm.com",40],["uslsoftware.com",40],["rule34hentai.net",40],["cloudemb.com",40],["news24.jp",40],["gaminplay.com",40],["njjzxl.net",40],["voe.sx",[40,103]],["voe-unblock.com",[40,103]],["scrolller.com",40],["cocomanga.com",40],["nusantararom.org",[40,109]],["virpe.cc",40],["pobre.tv",[40,109]],["ukrainashop.com",40],["celtadigital.com",40],["matzoo.pl",40],["asia2tv.cn",40],["labs.j-novel.club",40],["turbo1.co",40],["futbollatam.com",40],["read.amazon.com",40],["box-manga.com",40],["the-masters-voice.com",40],["hemas.pl",40],["accgroup.vn",40],["btvnovinite.bg",40],["allcryptoz.net",40],["crewbase.net",40],["crewus.net",40],["shinbhu.net",40],["shinchu.net",40],["thumb8.net",40],["thumb9.net",40],["topcryptoz.net",40],["uniqueten.net",40],["ultraten.net",40],["cloudcomputingtopics.net",40],["bianity.net",40],["coinsparty.com",40],["postype.com",40],["lofter.com",[40,117]],["hentaihaven.xxx",40],["espn.com",40],["4media.com",40],["przegladpiaseczynski.pl",40],["freewaysintl.com",40],["cool-etv.net",40],["j91.asia",40],["sgd.de",40],["dicasfinanceirasbr.com",40],["dicasdevalor.net",40],["dicasdefinancas.net",40],["guiasaude.info",40],["felizemforma.com",40],["financasdeouro.com",40],["mangaschan.net",40],["sssscanlator.com",40],["nightscans.net",40],["cypherscans.xyz",40],["twitchemotes.com",40],["smartkhabrinews.com",40],["streamvid.net",40],["mkv-pastes.com",40],["knshow.com",41],["jusbrasil.com.br",42],["promobit.com.br",44],["techjunkie.com",44],["zerohedge.com",44],["1mg.com",44],["khou.com",44],["10tv.com",44],["artsy.net",45],["boards.net",45],["freeforums.net",45],["proboards.com",45],["tastycookery.com",46],["animeshouse.net",47],["free-mp3-download.net",47],["tepat.id",47],["olhonaviagem.com",48],["jootc.com",48],["hikarinoakari.com",48],["operatorsekolahdbn.com",48],["wawlist.com",48],["teachoo.com",48],["techsupportall.com",49],["lugarcerto.com.br",50],["satcesc.com",51],["animatedshows.to",51],["miraculous.to",[51,69]],["statelibrary.us",52],["bigulnews.tv",54],["news.chosun.com",55],["androidweblog.com",56],["cronista.com",57],["fcportables.com",58],["venea.net",59],["uta-net.com",60],["downloadtutorials.net",[60,76]],["blog.naver.com",60],["myschool-eng.com",61],["orangespotlight.com",62],["th-world.com",[62,81]],["itvn.pl",63],["itvnextra.pl",63],["kuchniaplus.pl",63],["miniminiplus.pl",63],["player.pl",63],["ttv.pl",63],["tvn.pl",63],["tvn24.pl",63],["tvn24bis.pl",63],["tvn7.pl",63],["tvnfabula.pl",63],["tvnstyle.pl",63],["tvnturbo.pl",63],["x-link.pl",63],["x-news.pl",63],["kickante.com.br",22],["thestar.com.my",22],["corriereadriatico.it",22],["ilsole24ore.com",22],["scribd.com",64],["thehouseofportable.com",65],["ntvspor.net",65],["book.zhulang.com",65],["tadu.com",65],["selfstudyhistory.com",66],["lokercirebon.com",67],["avdelphi.com",68],["maxstream.video",69],["wpb.shueisha.co.jp",69],["tiktok.com",69],["vedantu.com",69],["zsti.zsti.civ.pl",69],["kathleenmemberhistory.com",[69,104]],["nonesnanking.com",[69,104]],["prefulfilloverdoor.com",[69,104]],["phenomenalityuniform.com",[69,104]],["nectareousoverelate.com",[69,104]],["timberwoodanotia.com",[69,104]],["strawberriesporail.com",[69,104]],["valeronevijao.com",[69,104]],["cigarlessarefy.com",[69,104]],["figeterpiazine.com",[69,104]],["yodelswartlike.com",[69,104]],["generatesnitrosate.com",[69,104]],["crownmakermacaronicism.com",[69,104]],["chromotypic.com",[69,104]],["gamoneinterrupted.com",[69,104]],["metagnathtuggers.com",[69,104]],["wolfdyslectic.com",[69,104]],["rationalityaloelike.com",[69,104]],["sizyreelingly.com",[69,104]],["simpulumlamerop.com",[69,104]],["urochsunloath.com",[69,104]],["monorhinouscassaba.com",[69,104]],["counterclockwisejacky.com",[69,104]],["35volitantplimsoles5.com",[69,104]],["scatch176duplicities.com",[69,104]],["antecoxalbobbing1010.com",[69,104]],["boonlessbestselling244.com",[69,104]],["cyamidpulverulence530.com",[69,104]],["guidon40hyporadius9.com",[69,104]],["449unceremoniousnasoseptal.com",[69,104]],["19turanosephantasia.com",[69,104]],["30sensualizeexpression.com",[69,104]],["321naturelikefurfuroid.com",[69,104]],["745mingiestblissfully.com",[69,104]],["availedsmallest.com",[69,104]],["greaseball6eventual20.com",[69,104]],["toxitabellaeatrebates306.com",[69,104]],["20demidistance9elongations.com",[69,104]],["audaciousdefaulthouse.com",[69,104]],["fittingcentermondaysunday.com",[69,104]],["fraudclatterflyingcar.com",[69,104]],["launchreliantcleaverriver.com",[69,104]],["matriculant401merited.com",[69,104]],["realfinanceblogcenter.com",[69,104]],["reputationsheriffkennethsand.com",[69,104]],["telyn610zoanthropy.com",[69,104]],["tubelessceliolymph.com",[69,104]],["tummulerviolableness.com",[69,104]],["un-block-voe.net",[69,104]],["v-o-e-unblock.com",[69,104]],["voe-un-block.com",[69,104]],["voeun-block.net",[69,104]],["voeunbl0ck.com",[69,104]],["voeunblck.com",[69,104]],["voeunblk.com",[69,104]],["voeunblock3.com",[69,104]],["audiotools.pro",69],["magesy.blog",69],["magesypro.pro",69],["audioztools.com",69],["www.ntv.co.jp",69],["faptiti.com",69],["wormate.io",69],["selfstudys.com",69],["adslink.pw",69],["jpopsingles.eu",69],["vinstartheme.com",[69,126]],["leakedzone.com",[69,129]],["fjordd.com",69],["seriesperu.com",69],["zippyupload.com",69],["alphapolis.co.jp",70],["juejin.cn",70],["sweetslyrics.com",70],["thegatewaypundit.com",71],["thegearhunt.com",72],["jfdb.jp",73],["loginhit.com.ng",73],["charbelnemnom.com",73],["bphimmoi.net",73],["goodhub.xyz",73],["thotsbay.tv",73],["edailybuzz.com",75],["zhihu.com",75],["qidian.com",75],["invado.pl",75],["webnovel.com",75],["bajecnavareska.sk",76],["lunas.pro",76],["onlinefreecourse.net",76],["pisr.org",76],["uplod.net",76],["thewpclub.net",76],["thememazing.com",76],["themebanks.com",76],["mesquitaonline.com",76],["skandynawiainfo.pl",76],["onlinecoursebay.com",76],["magnet-novels.com",77],["dreamsfriend.com",78],["trakteer.id",79],["699pic.com",79],["kutub3lpdf.com",80],["sklep-agroland.pl",82],["polagriparts.pl",83],["nordkorea-info.de",84],["geotips.net",85],["hardcoregames.ca",86],["lataifas.ro",87],["daotranslate.com",87],["toppremiumpro.com",88],["wattpad.com",89],["starbene.it",90],["fauxid.com",91],["androidtvbox.eu",92],["nicematin.com",93],["bilibili.com",94],["yamibo.com",95],["fimfiction.net",96],["moegirl.org.cn",97],["bbs.mihoyo.com",98],["peekme.cc",99],["ihbarweb.org.tr",100],["baixedetudo.net.br",101],["gardenia.net",102],["wpking.in",105],["hollywoodmask.com",106],["mbalib.com",106],["wenku.baidu.com",107],["mooc.chaoxing.com",108],["www-daftarharga.blogspot.com",109],["realpython.com",110],["linkmate.xyz",111],["cristelageorgescu.ro",112],["novelpia.com",113],["privivkainfo.ru",114],["frameboxxindore.com",114],["descargatepelis.com",115],["vercalendario.info",116],["zipcode.com.ng",116],["poipiku.com",118],["postcourier.com.pg",119],["gmx.co.uk",121],["gmx.com",121],["likey.me",122],["wallpaperaccess.com",123],["shortform.com",124],["joysound.com",125],["colors.sonicthehedgehog.com",127],["senpa.io",128],["txori.com",128],["braflix.app",129],["comikey.com",130],["saikaiscans.net",131],["translate.goog",132],["oreilly.com",133],["alfred.camera",134],["wrosinski.pl",135],["wtsp.com",136],["starzunion.com",137],["lowcygier.pl",138],["rsadnetworkinfo.com",139],["rsinsuranceinfo.com",139],["rsfinanceinfo.com",139],["rsgamer.app",139],["rssoftwareinfo.com",139],["rshostinginfo.com",139],["rseducationinfo.com",139],["studiestoday.com",140],["studyrankers.com",141],["bharatavani.in",141]]);

const entitiesMap = new Map([["mangaku",40],["dood",40],["streamtape",40],["asiatv",40],["bg-gledai",40],["descarga-animex",43],["tabonitobrasil",53],["anisubindo",53],["wstream",69],["voe-unblock",[69,104]],["pobre",[69,120]],["bmovies",74]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function addEventListenerDefuser(
    type = '',
    pattern = ''
) {
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 2);
    const logPrefix = safe.makeLogPrefix('prevent-addEventListener', type, pattern);
    const reType = safe.patternToRegex(type, undefined, true);
    const rePattern = safe.patternToRegex(pattern);
    const debug = shouldDebug(extraArgs);
    const targetSelector = extraArgs.elements || undefined;
    const elementMatches = elem => {
        if ( elem && elem.matches && elem.matches(targetSelector) ) { return true; }
        const elems = Array.from(document.querySelectorAll(targetSelector));
        return elems.includes(elem);
    };
    const elementDetails = elem => {
        if ( elem instanceof Window ) { return 'window'; }
        if ( elem instanceof Document ) { return 'document'; }
        if ( elem instanceof Element === false ) { return '?'; }
        const parts = [];
        if ( elem.id !== '' ) { parts.push(`#${CSS.escape(elem.id)}`); }
        for ( let i = 0; i < elem.classList.length; i++ ) {
            parts.push(`.${CSS.escape(elem.classList.item(i))}`);
        }
        for ( let i = 0; i < elem.attributes.length; i++ ) {
            const attr = elem.attributes.item(i);
            if ( attr.name === 'id' ) { continue; }
            if ( attr.name === 'class' ) { continue; }
            parts.push(`[${CSS.escape(attr.name)}="${attr.value}"]`);
        }
        return parts.join('');
    };
    const shouldPrevent = (thisArg, type, handler) => {
        const matchesType = safe.RegExp_test.call(reType, type);
        const matchesHandler = safe.RegExp_test.call(rePattern, handler);
        const matchesEither = matchesType || matchesHandler;
        const matchesBoth = matchesType && matchesHandler;
        if ( debug === 1 && matchesBoth || debug === 2 && matchesEither ) {
            debugger; // jshint ignore:line
        }
        if ( matchesBoth && targetSelector !== undefined ) {
            if ( elementMatches(thisArg) === false ) { return false; }
        }
        return matchesBoth;
    };
    const trapEddEventListeners = ( ) => {
        const eventListenerHandler = {
            apply: function(target, thisArg, args) {
                let t, h;
                try {
                    t = String(args[0]);
                    if ( typeof args[1] === 'function' ) {
                        h = String(safe.Function_toString(args[1]));
                    } else if ( typeof args[1] === 'object' && args[1] !== null ) {
                        if ( typeof args[1].handleEvent === 'function' ) {
                            h = String(safe.Function_toString(args[1].handleEvent));
                        }
                    } else {
                        h = String(args[1]);
                    }
                } catch(ex) {
                }
                if ( type === '' && pattern === '' ) {
                    safe.uboLog(logPrefix, `Called: ${t}\n${h}\n${elementDetails(thisArg)}`);
                } else if ( shouldPrevent(thisArg, t, h) ) {
                    return safe.uboLog(logPrefix, `Prevented: ${t}\n${h}\n${elementDetails(thisArg)}`);
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
