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

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["DOMContentLoaded","admiral"],["error","admiral"],["load","theModal"],["load","XV.ad_block"],["DOMContentLoaded","adsBlocked"],["load","Dislike intrusive ads"],["load","adblock_whitelist"],["DOMContentLoaded","replaceAdsWithFallbackImages"],["np.detect"],["load",".offsetHeight == 0"],["load","adBlock"],["/load|error/",".head.removeChild("],["savvy_popup_in_dom","setTimeout"],["prepare-exit-modal","=>"],["mouseout","relatedTarget"],["DOMContentLoaded","InactivityPopin"],["load","openExitPopup"],["scroll","scrollTop())+n-i>o/2"],["click","interstitial"],["mouseleave","scribd_ad"],["mouseleave"],["popstate","addEventProcessor"],["scroll","eventHandle.elem"],["wheel"],["scroll","documentElement.scrollTop"],["scroll","_onscroll"],["mouseout","#modalSair"],["scroll","showPopup"],["scroll",".open()"],["mouseout","event.dispatch.apply"],["ww-open-overlay","scrollTop"],["load","setVideoTop"],["load","newsletter"],["scroll","t.attemptLoad"],["load","event.dispatch.apply"],["/^(contextmenu|copy)$/"],["blur"],["copy"],["contextmenu"],["/^(?:contextmenu|copy|selectstart)$/"],["/^(?:contextmenu|copy)$/","preventDefault"],["/^(?:contextmenu|keydown)$/"],["mouseout"],["scroll"],["DOMContentLoaded",".js-popup-adblock"],["/^(contextmenu|keydown)$/"],["keydown"],["/^(?:contextmenu|copy|keydown)$/"],["mouseout","pop"],["/^(?:keyup|keydown)$/"],["keydown","disable_in_input"],["keydown","preventDefault"],["/contextmenu|keydown|keyup|copy/"],["copy","getSelection"],["","t.preventDefault"],["copy","replaceCopiedText"],["/^(contextmenu|copy|dragstart|selectstart)$/"],["","ads"],["/contextmenu|selectstart|copy/"],["/contextmenu|copy|keydown/"],["/contextmenu|select|copy/"],["contextmenu","a"],["/^(mouseout|mouseleave)$/"],["/contextmenu|selectstart/"],["dragstart|keydown/"],["/contextmenu|keydown|dragstart/"],["","_0x"],["contextmenu","preventDefault"],["copy","preventDefault"],["","adtoniq"],["/^(?:contextmenu|copy|keydown|mousedown)$/"],["/contextmenu|keydown/"],["devtoolschange"],["/contextmenu|copy/"],["","mdp"],["/blur|mousedown|mouseenter|mouseleave/"],["/contextmenu|cut|copy|paste/"],["/contextmenu|mousedown/"],["visibilitychange","pagehide"],["/contextmenu|copy|selectstart/"],["","0x"],["/^(?:contextmenu|dragstart|selectstart)$/"],["/^(?:contextmenu|copy)$/"],["/dragstart|keyup|keydown/"],["/keyup|keydown/","wpcc"],["/contextmenu|cut|copy|keydown/"],["","undefined"],["/contextmenu|selectstart|copy|dragstart/"],["/copy|dragstart/"],["/copy|contextmenu/"],["error"],["dragstart"],["","AdB"],["selectionchange","quill.emitter"],["/contextmenu|selectstart|select|copy|dragstart/"],["load","adLazy"],["copy","jQuery!==\"undefined\""],["copy","[native code]"],["selectstart"],["/^(?:copy|paste)$/","undefined"],["/copy|keydown/"],["/copy|cut|selectstart/"],["/keydown|keyup/","keyCode"],["keydown","disabledEvent"],["","Key"],["/copy|cut|paste|selectstart/"],["/contextmenu|dragstart|keydown/","event.dispatch.apply"],["beforepaste"],["","keyCode"],["DOMContentLoaded","rprw"],["","key"],["","ctrlKey"],["contextmenu","event.triggered"],["copy","pagelink"],["/keydown|mousedown/"],["copy","Source"],["","login"],["/contextmenu|copy|drag|dragstart/"],["/contextmenu|keydown|keypress|copy/"],["","blockFuckingEverything"],["mouseout","openLayer"],["/contextmenu|keydown/","preventDefault"],["mousedown","dispatch"],["/contextmenu|mousedown/","return\"undefined\""],["DOMContentLoaded","ready"],["keydown","disabledKeys"],["DOMContentLoaded","load"],["contextmenu","_0x"],["keydown","keyCode"],["contextmenu","undefined"],["contextmenu","[native code]"],["/contextmenu|keyup|keydown/"],["mouseout","cookie"],["DOMContentLoaded","ads"],["rocket-DOMContentLoaded","bind(document)"],["mouseout","innerHeight"],["/^(contextmenu|mousedown|keydown)$/","preventDefault"],["error","browser-plugin"],["/contextmenu|devtoolschange/"]];

const hostnamesMap = new Map([["cbssports.com",[0,1]],["gamerevolution.com",0],["onmsft.com",0],["nbcsports.com",1],["visualcapitalist.com",1],["news8000.com",1],["kxly.com",1],["thethings.com",1],["koamnewsnow.com",1],["gfinityesports.com",1],["dualshockers.com",1],["insider-gaming.com",1],["thenerdstash.com",1],["pocketnow.com",1],["ktvz.com",1],["247sports.com",1],["movieweb.com",1],["realclearpolitics.com",1],["givemesport.com",1],["xda-developers.com",1],["collider.com",1],["pocket-lint.com",1],["hotcars.com",1],["topspeed.com",1],["thegamer.com",1],["makeuseof.com",1],["screenrant.com",1],["androidpolice.com",1],["cbr.com",1],["forx.mazen-ve3.com",2],["xenvn.com",3],["mysb555.com",4],["timeanddate.com",[5,25]],["slideshare.net",[6,19]],["warcraftlogs.com",7],["nwdb.info",8],["explorecams.com",8],["tiermaker.com",8],["freeforumzone.com",9],["megogo.sport",10],["megogo.ru",10],["ynet.co.il",11],["infobae.com",11],["abcnyheter.no",11],["sme.sk",11],["yourdictionary.com",11],["foxnews.com",11],["privacysavvy.com",12],["retailmenot.com",13],["later.com",14],["actu.orange.fr",15],["financer.com",16],["blog.csdn.net",[17,68]],["boyfriendtv.com",18],["milenio.com",[20,37]],["jakiwniosek.pl",20],["hikakaku.com",21],["wacul-ai.com",22],["qodeinteractive.com",23],["digitalvidya.com",23],["bbc.co.uk",24],["imovelguide.com.br",26],["facebook.com",27],["facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd.onion",27],["cnyfertility.com",28],["da-direkt.de",29],["westwing.de",30],["tv.golfnetwork.co.jp",31],["posterxxl.de",32],["bijutsutecho.com",33],["try-it.jp",34],["s0urce.io",35],["filefox.cc",36],["uol.com.br",37],["gazetadopovo.com.br",37],["indiatimes.com",37],["odiario.com",37],["otempo.com.br",37],["estadao.com.br",37],["bacaan.id",37],["ofuxico.com.br",37],["pentruea.com",37],["ciberduvidas.iscte-iul.pt",37],["globo.com",37],["citas.in",37],["blitzrechner.de",37],["emailfake.com",37],["lyrical-nonsense.com",37],["mediafax.ro",37],["economica.net",37],["polsatnews.pl",37],["novagente.pt",37],["arlinadzgn.com",37],["nowcoder.com",37],["libertatea.ro",37],["erinsakura.com",37],["yuque.com",37],["deepl.com",37],["digi24.ro",37],["onna.kr",37],["ziare.com",37],["agrointel.ro",37],["skyozora.com",37],["veneto.info",37],["transinfo.pl",37],["news.17173.com",37],["chowhound.com",37],["explore.com",37],["foodie.com",37],["foodrepublic.com",37],["glam.com",37],["grunge.com",37],["healthdigest.com",37],["housedigest.com",37],["looper.com",37],["mashed.com",37],["moneydigest.com",37],["nickiswift.com",37],["outdoorguide.com",37],["slashfilm.com",37],["slashgear.com",37],["tastingtable.com",37],["thedailymeal.com",37],["thelist.com",37],["women.com",37],["wrestlinginc.com",37],["peliculas24.me",38],["roztoczanskipn.pl",38],["economictimes.indiatimes.com",[38,42]],["dzwignice.info",38],["script-stack.com",[38,74]],["mio.to",38],["husseinezzat.com",[38,46]],["taxo-acc.pl",38],["portalwrc.pl",38],["lublin.eu",38],["onlystream.tv",38],["dddance.party",38],["kapiert.de",38],["hitcena.pl",38],["tv-asahi.co.jp",38],["digitalfernsehen.de",38],["suzylu.co.uk",38],["music.apple.com",38],["skidrowcodex.net",38],["ds2play.com",38],["ds2video.com",38],["d0o0d.com",38],["vsco.co",38],["nationalgeographic.com",38],["festival-cannes.com",38],["strcloud.in",38],["ufret.jp",38],["thenekodark.com",38],["artesacro.org",38],["poli-vsp.ru",38],["polyvsp.ru",38],["ananweb.jp",38],["daimangajiten.com",38],["digital.lasegunda.com",38],["hibiki-radio.jp",38],["garyfeinbergphotography.com",38],["clubulbebelusilor.ro",38],["gplinks.co",38],["ifdreamscametrue.com",38],["marksandspencer.com",38],["stowarzyszenie-impuls.eu",38],["viveretenerife.com",38],["oferty.dsautomobiles.pl",38],["wzamrani.com",38],["citroen.pl",38],["peugeot.pl",38],["wirtualnyspac3r.pl",38],["antena3.com",38],["lasexta.com",38],["pashplus.jp",38],["upvideo.to",38],["kpopsea.com",38],["cnki.net",38],["wpchen.net",38],["hongxiu.com",38],["readnovel.com",38],["uihtm.com",38],["uslsoftware.com",38],["rule34hentai.net",38],["cloudemb.com",38],["news24.jp",38],["gaminplay.com",38],["njjzxl.net",38],["voe.sx",[38,102]],["voe-unblock.com",[38,102]],["scrolller.com",38],["cocomanga.com",38],["nusantararom.org",[38,108]],["virpe.cc",38],["pobre.tv",[38,108]],["ukrainashop.com",38],["celtadigital.com",38],["matzoo.pl",38],["asia2tv.cn",38],["labs.j-novel.club",38],["turbo1.co",38],["futbollatam.com",38],["read.amazon.com",38],["box-manga.com",38],["the-masters-voice.com",38],["hemas.pl",38],["accgroup.vn",38],["btvnovinite.bg",38],["allcryptoz.net",38],["crewbase.net",38],["crewus.net",38],["shinbhu.net",38],["shinchu.net",38],["thumb8.net",38],["thumb9.net",38],["topcryptoz.net",38],["uniqueten.net",38],["ultraten.net",38],["cloudcomputingtopics.net",38],["bianity.net",38],["coinsparty.com",38],["postype.com",38],["lofter.com",[38,116]],["hentaihaven.xxx",38],["espn.com",38],["4media.com",38],["przegladpiaseczynski.pl",38],["freewaysintl.com",38],["cool-etv.net",38],["j91.asia",38],["sgd.de",38],["gaz.com.br",38],["dicasfinanceirasbr.com",38],["dicasdevalor.net",38],["dicasdefinancas.net",38],["guiasaude.info",38],["felizemforma.com",38],["financasdeouro.com",38],["mangaschan.net",38],["sssscanlator.com",38],["nightscans.net",38],["cypherscans.xyz",38],["twitchemotes.com",38],["smartkhabrinews.com",38],["streamvid.net",38],["knshow.com",39],["jusbrasil.com.br",40],["promobit.com.br",42],["techjunkie.com",42],["zerohedge.com",42],["1mg.com",42],["khou.com",42],["10tv.com",42],["artsy.net",43],["boards.net",43],["freeforums.net",43],["proboards.com",43],["tastycookery.com",44],["animeshouse.net",45],["free-mp3-download.net",45],["tepat.id",45],["olhonaviagem.com",46],["jootc.com",46],["hikarinoakari.com",46],["operatorsekolahdbn.com",46],["wawlist.com",46],["techsupportall.com",47],["lugarcerto.com.br",48],["satcesc.com",49],["animatedshows.to",49],["miraculous.to",[49,67]],["statelibrary.us",50],["bigulnews.tv",52],["news.chosun.com",53],["androidweblog.com",54],["cronista.com",55],["fcportables.com",56],["venea.net",57],["uta-net.com",58],["downloadtutorials.net",[58,74]],["blog.naver.com",58],["myschool-eng.com",59],["orangespotlight.com",60],["th-world.com",[60,80]],["itvn.pl",61],["itvnextra.pl",61],["kuchniaplus.pl",61],["miniminiplus.pl",61],["player.pl",61],["ttv.pl",61],["tvn.pl",61],["tvn24.pl",61],["tvn24bis.pl",61],["tvn7.pl",61],["tvnfabula.pl",61],["tvnstyle.pl",61],["tvnturbo.pl",61],["x-link.pl",61],["x-news.pl",61],["kickante.com.br",20],["thestar.com.my",20],["corriereadriatico.it",20],["ilsole24ore.com",20],["scribd.com",62],["thehouseofportable.com",63],["ntvspor.net",63],["book.zhulang.com",63],["tadu.com",63],["selfstudyhistory.com",64],["lokercirebon.com",65],["avdelphi.com",66],["maxstream.video",67],["wpb.shueisha.co.jp",67],["tiktok.com",[67,78]],["vedantu.com",67],["zsti.zsti.civ.pl",67],["kathleenmemberhistory.com",[67,103]],["nonesnanking.com",[67,103]],["prefulfilloverdoor.com",[67,103]],["phenomenalityuniform.com",[67,103]],["nectareousoverelate.com",[67,103]],["timberwoodanotia.com",[67,103]],["strawberriesporail.com",[67,103]],["valeronevijao.com",[67,103]],["cigarlessarefy.com",[67,103]],["figeterpiazine.com",[67,103]],["yodelswartlike.com",[67,103]],["generatesnitrosate.com",[67,103]],["crownmakermacaronicism.com",[67,103]],["chromotypic.com",[67,103]],["gamoneinterrupted.com",[67,103]],["metagnathtuggers.com",[67,103]],["wolfdyslectic.com",[67,103]],["rationalityaloelike.com",[67,103]],["sizyreelingly.com",[67,103]],["simpulumlamerop.com",[67,103]],["urochsunloath.com",[67,103]],["monorhinouscassaba.com",[67,103]],["counterclockwisejacky.com",[67,103]],["35volitantplimsoles5.com",[67,103]],["scatch176duplicities.com",[67,103]],["antecoxalbobbing1010.com",[67,103]],["boonlessbestselling244.com",[67,103]],["cyamidpulverulence530.com",[67,103]],["guidon40hyporadius9.com",[67,103]],["449unceremoniousnasoseptal.com",[67,103]],["19turanosephantasia.com",[67,103]],["30sensualizeexpression.com",[67,103]],["321naturelikefurfuroid.com",[67,103]],["745mingiestblissfully.com",[67,103]],["availedsmallest.com",[67,103]],["greaseball6eventual20.com",[67,103]],["toxitabellaeatrebates306.com",[67,103]],["20demidistance9elongations.com",[67,103]],["audaciousdefaulthouse.com",[67,103]],["fittingcentermondaysunday.com",[67,103]],["fraudclatterflyingcar.com",[67,103]],["launchreliantcleaverriver.com",[67,103]],["matriculant401merited.com",[67,103]],["realfinanceblogcenter.com",[67,103]],["reputationsheriffkennethsand.com",[67,103]],["telyn610zoanthropy.com",[67,103]],["tubelessceliolymph.com",[67,103]],["tummulerviolableness.com",[67,103]],["un-block-voe.net",[67,103]],["v-o-e-unblock.com",[67,103]],["voe-un-block.com",[67,103]],["voeun-block.net",[67,103]],["voeunbl0ck.com",[67,103]],["voeunblck.com",[67,103]],["voeunblk.com",[67,103]],["voeunblock3.com",[67,103]],["audiotools.pro",67],["magesy.blog",67],["magesypro.pro",67],["audioztools.com",67],["www.ntv.co.jp",67],["faptiti.com",67],["wormate.io",67],["selfstudys.com",67],["adslink.pw",67],["jpopsingles.eu",67],["vinstartheme.com",[67,125]],["leakedzone.com",[67,128]],["fjordd.com",67],["seriesperu.com",67],["zippyupload.com",67],["alphapolis.co.jp",68],["juejin.cn",68],["sweetslyrics.com",68],["thegatewaypundit.com",69],["thegearhunt.com",70],["jfdb.jp",71],["loginhit.com.ng",71],["charbelnemnom.com",71],["bphimmoi.net",71],["goodhub.xyz",71],["edailybuzz.com",73],["zhihu.com",73],["qidian.com",73],["invado.pl",73],["webnovel.com",73],["bajecnavareska.sk",74],["lunas.pro",74],["onlinefreecourse.net",74],["pisr.org",74],["uplod.net",74],["thewpclub.net",74],["thememazing.com",74],["themebanks.com",74],["mesquitaonline.com",74],["skandynawiainfo.pl",74],["onlinecoursebay.com",74],["magnet-novels.com",75],["dreamsfriend.com",76],["trakteer.id",77],["699pic.com",77],["kutub3lpdf.com",79],["sklep-agroland.pl",81],["polagriparts.pl",82],["nordkorea-info.de",83],["geotips.net",84],["hardcoregames.ca",85],["lataifas.ro",86],["daotranslate.com",86],["toppremiumpro.com",87],["wattpad.com",88],["starbene.it",89],["fauxid.com",90],["androidtvbox.eu",91],["nicematin.com",92],["bilibili.com",93],["yamibo.com",94],["fimfiction.net",95],["moegirl.org.cn",96],["bbs.mihoyo.com",97],["peekme.cc",98],["ihbarweb.org.tr",99],["baixedetudo.net.br",100],["gardenia.net",101],["wpking.in",104],["hollywoodmask.com",105],["mbalib.com",105],["wenku.baidu.com",106],["mooc.chaoxing.com",107],["www-daftarharga.blogspot.com",108],["realpython.com",109],["linkmate.xyz",110],["cristelageorgescu.ro",111],["novelpia.com",112],["privivkainfo.ru",113],["frameboxxindore.com",113],["descargatepelis.com",114],["vercalendario.info",115],["zipcode.com.ng",115],["poipiku.com",117],["postcourier.com.pg",118],["gmx.co.uk",120],["gmx.com",120],["likey.me",121],["wallpaperaccess.com",122],["shortform.com",123],["joysound.com",124],["colors.sonicthehedgehog.com",126],["senpa.io",127],["txori.com",127],["braflix.app",128],["comikey.com",129],["saikaiscans.net",130],["translate.goog",131],["oreilly.com",132],["alfred.camera",133],["wrosinski.pl",134],["wtsp.com",135],["starzunion.com",136],["lowcygier.pl",137],["rsadnetworkinfo.com",138],["rsinsuranceinfo.com",138],["rsfinanceinfo.com",138],["rsgamer.app",138],["rssoftwareinfo.com",138],["rshostinginfo.com",138],["rseducationinfo.com",138]]);

const entitiesMap = new Map([["mangaku",38],["dood",38],["streamtape",38],["asiatv",38],["bg-gledai",38],["descarga-animex",41],["tabonitobrasil",51],["anisubindo",51],["wstream",67],["voe-unblock",[67,103]],["pobre",[67,119]],["bmovies",72]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function addEventListenerDefuser(
    type = '',
    pattern = ''
) {
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 2);
    const reType = safe.patternToRegex(type, undefined, true);
    const rePattern = safe.patternToRegex(pattern);
    const log = shouldLog(extraArgs);
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
        if ( log === 1 && matchesBoth || log === 2 && matchesEither || log === 3 ) {
            safe.uboLog(`addEventListener('${type}', ${handler})`);
        }
        if ( debug === 1 && matchesBoth || debug === 2 && matchesEither ) {
            debugger; // jshint ignore:line
        }
        return matchesBoth;
    };
    const trapEddEventListeners = ( ) => {
        const eventListenerHandler = {
            apply: function(target, thisArg, args) {
                let type, handler;
                try {
                    type = String(args[0]);
                    handler = args[1] instanceof Function
                        ? String(safe.Function_toString(args[1]))
                        : String(args[1]);
                } catch(ex) {
                }
                if ( shouldPrevent(thisArg, type, handler) ) { return; }
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
            return this.Object_fromEntries(entries);
        },
    };
    scriptletGlobals.set('safeSelf', safe);
    return safe;
}

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.debug;
}

function shouldLog(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.log;
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
