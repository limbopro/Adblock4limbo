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

const argsList = [["DOMContentLoaded","admiral"],["error","admiral"],["load","theModal"],["load","XV.ad_block"],["DOMContentLoaded","adsBlocked"],["load","Dislike intrusive ads"],["load","adblock_whitelist"],["DOMContentLoaded","replaceAdsWithFallbackImages"],["np.detect"],["load",".offsetHeight == 0"],["load","adBlock"],["/load|error/",".head.removeChild("],["prepare-exit-modal","=>"],["mouseout","relatedTarget"],["DOMContentLoaded","InactivityPopin"],["load","openExitPopup"],["scroll","scrollTop())+n-i>o/2"],["click","interstitial"],["mouseleave","scribd_ad"],["mouseleave"],["popstate","addEventProcessor"],["scroll","eventHandle.elem"],["wheel"],["scroll","documentElement.scrollTop"],["scroll","_onscroll"],["mouseout","#modalSair"],["scroll","showPopup"],["scroll",".open()"],["mouseout","event.dispatch.apply"],["ww-open-overlay","scrollTop"],["load","setVideoTop"],["load","newsletter"],["scroll","t.attemptLoad"],["load","event.dispatch.apply"],["/^(contextmenu|copy)$/"],["blur"],["copy"],["contextmenu"],["/^(?:contextmenu|copy|selectstart)$/"],["/^(?:contextmenu|copy)$/","preventDefault"],["/^(?:contextmenu|keydown)$/"],["mouseout"],["scroll"],["DOMContentLoaded",".js-popup-adblock"],["/^(contextmenu|keydown)$/"],["/^(?:contextmenu|copy|keydown)$/"],["mouseout","pop"],["/^(?:keyup|keydown)$/"],["keydown"],["keydown","disable_in_input"],["keydown","preventDefault"],["/contextmenu|keydown|keyup|copy/"],["message","data"],["copy","getSelection"],["","t.preventDefault"],["copy","replaceCopiedText"],["/^(contextmenu|copy|dragstart|selectstart)$/"],["","ads"],["/contextmenu|selectstart|copy/"],["/contextmenu|copy|keydown/"],["/contextmenu|select|copy/"],["contextmenu","a"],["/^(mouseout|mouseleave)$/"],["/contextmenu|selectstart/"],["dragstart|keydown/"],["/contextmenu|keydown|dragstart/"],["","_0x"],["contextmenu","preventDefault"],["copy","preventDefault"],["","adtoniq"],["/^(?:contextmenu|copy|keydown|mousedown)$/"],["/contextmenu|keydown/"],["devtoolschange"],["/contextmenu|copy/"],["","mdp"],["/blur|mousedown|mouseenter|mouseleave/"],["/contextmenu|cut|copy|paste/"],["/contextmenu|mousedown/"],["visibilitychange","pagehide"],["/contextmenu|copy|selectstart/"],["","0x"],["/^(?:contextmenu|dragstart|selectstart)$/"],["/^(?:contextmenu|copy)$/"],["/dragstart|keyup|keydown/"],["/keyup|keydown/","wpcc"],["/contextmenu|cut|copy|keydown/"],["","undefined"],["/contextmenu|selectstart|copy|dragstart/"],["/copy|dragstart/"],["/copy|contextmenu/"],["error"],["dragstart"],["","AdB"],["selectionchange","quill.emitter"],["/contextmenu|selectstart|select|copy|dragstart/"],["load","adLazy"],["copy","jQuery!==\"undefined\""],["copy","[native code]"],["selectstart"],["/^(?:copy|paste)$/","undefined"],["/copy|keydown/"],["/copy|cut|selectstart/"],["/keydown|keyup/","keyCode"],["keydown","disabledEvent"],["","Key"],["/copy|cut|paste|selectstart/"],["/contextmenu|dragstart|keydown/","event.dispatch.apply"],["beforepaste"],["","keyCode"],["DOMContentLoaded","rprw"],["","key"],["","ctrlKey"],["contextmenu","event.triggered"],["copy","pagelink"],["/keydown|mousedown/"],["copy","Source"],["","login"],["/contextmenu|copy|drag|dragstart/"],["/contextmenu|keydown|keypress|copy/"],["","blockFuckingEverything"],["mouseout","openLayer"],["/contextmenu|keydown/","preventDefault"],["mousedown","dispatch"],["/contextmenu|mousedown/","return\"undefined\""],["DOMContentLoaded","ready"],["keydown","disabledKeys"],["DOMContentLoaded","load"],["contextmenu","_0x"],["keydown","keyCode"],["contextmenu","undefined"],["/contextmenu|keyup|keydown/"],["mouseout","cookie"],["DOMContentLoaded","ads"],["rocket-DOMContentLoaded","bind(document)"],["mouseout","innerHeight"],["/^(contextmenu|mousedown|keydown)$/","preventDefault"]];

const hostnamesMap = new Map([["gamerevolution.com",0],["onmsft.com",0],["cbssports.com",1],["visualcapitalist.com",1],["news8000.com",1],["kxly.com",1],["thethings.com",1],["koamnewsnow.com",1],["gfinityesports.com",1],["dualshockers.com",1],["insider-gaming.com",1],["thenerdstash.com",1],["pocketnow.com",1],["ktvz.com",1],["247sports.com",1],["movieweb.com",1],["realclearpolitics.com",1],["givemesport.com",1],["xda-developers.com",1],["collider.com",1],["pocket-lint.com",1],["hotcars.com",1],["topspeed.com",1],["thegamer.com",1],["makeuseof.com",1],["screenrant.com",1],["androidpolice.com",1],["cbr.com",1],["forx.mazen-ve3.com",2],["xenvn.com",3],["mysb555.com",4],["timeanddate.com",[5,24]],["slideshare.net",[6,18]],["warcraftlogs.com",7],["nwdb.info",8],["explorecams.com",8],["tiermaker.com",8],["freeforumzone.com",9],["megogo.sport",10],["megogo.ru",10],["ynet.co.il",11],["infobae.com",11],["abcnyheter.no",11],["sme.sk",11],["yourdictionary.com",11],["foxnews.com",11],["retailmenot.com",12],["later.com",13],["actu.orange.fr",14],["financer.com",15],["blog.csdn.net",[16,68]],["boyfriendtv.com",17],["milenio.com",[19,36]],["jakiwniosek.pl",19],["hikakaku.com",20],["wacul-ai.com",21],["qodeinteractive.com",22],["digitalvidya.com",22],["bbc.co.uk",23],["imovelguide.com.br",25],["facebook.com",26],["facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd.onion",26],["cnyfertility.com",27],["da-direkt.de",28],["westwing.de",29],["tv.golfnetwork.co.jp",30],["posterxxl.de",31],["bijutsutecho.com",32],["try-it.jp",33],["s0urce.io",34],["filefox.cc",35],["uol.com.br",36],["gazetadopovo.com.br",36],["indiatimes.com",36],["odiario.com",36],["otempo.com.br",36],["estadao.com.br",36],["bacaan.id",36],["ofuxico.com.br",36],["pentruea.com",36],["ciberduvidas.iscte-iul.pt",36],["globo.com",36],["citas.in",36],["blitzrechner.de",36],["emailfake.com",36],["lyrical-nonsense.com",36],["mediafax.ro",36],["economica.net",36],["polsatnews.pl",36],["novagente.pt",36],["arlinadzgn.com",36],["nowcoder.com",36],["libertatea.ro",36],["erinsakura.com",36],["yuque.com",36],["deepl.com",36],["digi24.ro",36],["onna.kr",36],["ziare.com",36],["agrointel.ro",36],["skyozora.com",36],["veneto.info",36],["transinfo.pl",36],["peliculas24.me",37],["roztoczanskipn.pl",37],["economictimes.indiatimes.com",[37,41]],["dzwignice.info",37],["script-stack.com",[37,74]],["mio.to",37],["husseinezzat.com",[37,48]],["taxo-acc.pl",37],["portalwrc.pl",37],["lublin.eu",37],["onlystream.tv",37],["dddance.party",37],["kapiert.de",37],["hitcena.pl",37],["tv-asahi.co.jp",37],["digitalfernsehen.de",37],["suzylu.co.uk",37],["music.apple.com",37],["skidrowcodex.net",37],["ds2play.com",37],["vsco.co",37],["nationalgeographic.com",37],["festival-cannes.com",37],["strcloud.in",37],["ufret.jp",37],["thenekodark.com",37],["artesacro.org",37],["poli-vsp.ru",37],["polyvsp.ru",37],["ananweb.jp",37],["daimangajiten.com",37],["digital.lasegunda.com",37],["hibiki-radio.jp",37],["garyfeinbergphotography.com",37],["clubulbebelusilor.ro",37],["gplinks.co",37],["ifdreamscametrue.com",37],["marksandspencer.com",37],["stowarzyszenie-impuls.eu",37],["viveretenerife.com",37],["oferty.dsautomobiles.pl",37],["wzamrani.com",37],["citroen.pl",37],["peugeot.pl",37],["wirtualnyspac3r.pl",37],["antena3.com",37],["lasexta.com",37],["pashplus.jp",37],["upvideo.to",37],["kpopsea.com",37],["cnki.net",37],["wpchen.net",37],["hongxiu.com",37],["readnovel.com",37],["uihtm.com",37],["uslsoftware.com",37],["rule34hentai.net",37],["cloudemb.com",37],["news24.jp",37],["gaminplay.com",37],["njjzxl.net",37],["voe.sx",[37,102]],["voe-unblock.com",[37,102]],["scrolller.com",37],["cocomanga.com",37],["nusantararom.org",[37,108]],["virpe.cc",37],["pobre.tv",[37,108]],["ukrainashop.com",37],["celtadigital.com",37],["matzoo.pl",37],["asia2tv.cn",37],["labs.j-novel.club",37],["turbo1.co",37],["futbollatam.com",37],["read.amazon.com",37],["box-manga.com",37],["the-masters-voice.com",37],["hemas.pl",37],["accgroup.vn",37],["btvnovinite.bg",37],["allcryptoz.net",37],["crewbase.net",37],["crewus.net",37],["shinbhu.net",37],["shinchu.net",37],["thumb8.net",37],["thumb9.net",37],["topcryptoz.net",37],["uniqueten.net",37],["ultraten.net",37],["cloudcomputingtopics.net",37],["bianity.net",37],["coinsparty.com",37],["postype.com",37],["lofter.com",[37,116]],["hentaihaven.xxx",37],["espn.com",37],["4media.com",37],["przegladpiaseczynski.pl",37],["freewaysintl.com",37],["cool-etv.net",37],["j91.asia",37],["sgd.de",37],["gaz.com.br",37],["dicasfinanceirasbr.com",37],["dicasdevalor.net",37],["dicasdefinancas.net",37],["mangaschan.net",37],["sssscanlator.com",37],["nightscans.net",37],["cypherscans.xyz",37],["twitchemotes.com",37],["smartkhabrinews.com",37],["streamvid.net",37],["knshow.com",38],["jusbrasil.com.br",39],["promobit.com.br",41],["techjunkie.com",41],["zerohedge.com",41],["1mg.com",41],["khou.com",41],["10tv.com",41],["artsy.net",42],["boards.net",42],["freeforums.net",42],["proboards.com",42],["tastycookery.com",43],["animeshouse.net",44],["free-mp3-download.net",44],["tepat.id",44],["techsupportall.com",45],["lugarcerto.com.br",46],["satcesc.com",47],["animatedshows.to",47],["miraculous.to",[47,67]],["jootc.com",48],["hikarinoakari.com",48],["operatorsekolahdbn.com",48],["wawlist.com",48],["statelibrary.us",49],["bigulnews.tv",51],["500ish.com",52],["artplusmarketing.com",52],["atrium.co",52],["backchannel.com",52],["backstage.1blocker.com",52],["badootech.badoo.com",52],["bitcointechtalk.com",52],["blog.bitsrc.io",52],["bitwarden.com",52],["blog.coinbase.com",52],["blog.confiant.com",52],["blog.devcolor.org",52],["blog.growthhackers.com",52],["blog.hiri.com",52],["blog.ltse.com",52],["blog.statebox.org",52],["blog.twitch.tv",52],["blog.waffle.io",52],["bluerockpublicradio.com",52],["bolt.io",52],["boomsupersonic.com",52],["bradfieldcs.com",52],["brightthemag.com",52],["broadcast.listennotes.com",52],["checkio.org",52],["citizen428.net",52],["coach.me",52],["codeburst.io",52],["dave-bailey.com",52],["discordapp.com",52],["doist.com",52],["doit-intl.com",52],["dotandline.net",52],["doublepulsar.com",52],["economist.com",52],["electricliterature.com",52],["elidourado.com",52],["esciencecenter.nl",52],["faun.pub",52],["fossa.io",52],["freecodecamp.org",52],["fritz.ai",52],["getadblock.com",52],["levelup.gitconnected.com",52],["greylock.com",52],["headmelted.com",52],["helium.com",52],["howwegettonext.com",52],["iheart.com",52],["injusticetoday.com",52],["insightdatascience.com",52],["iota.org",52],["itnext.io",52],["itsyourturnblog.com",52],["jupyter.org",52],["keepingstock.net",52],["kiwi.com",52],["learngoprogramming.com",52],["learningbyshipping.com",52],["ledwards.com",52],["legalist.com",52],["logrocket.com",52],["mapbox.com",52],["medium.com",52],["melmagazine.com",52],["mondaynote.com",52],["newco.co",52],["news.smugmug.com",52],["nyulocal.com",52],["ofdollarsanddata.com",52],["okmeter.io",52],["open.nytimes.com",52],["javascript.plainenglish.io",52],["postlight.com",52],["prototypr.io",52],["rainway.io",52],["sagefy.org",52],["signalvnoise.com",52],["slack.engineering",52],["slackhq.com",52],["springboard.com",52],["standardnotes.org",52],["startupsventurecapital.com",52],["stoplight.io",52],["tech.buzzfeed.com",52],["theabacus.io",52],["theawl.com",52],["thebigroundtable.com",52],["thebillfold.com",52],["thebolditalic.com",52],["thecontrol.co",52],["theringer.com",52],["thinkprogress.org",52],["thriveglobal.com",52],["timeline.com",52],["towardsdatascience.com",52],["udacity.com",52],["unpatent.co",52],["usejournal.com",52],["uxdesign.cc",52],["uxplanet.org",52],["warisboring.com",52],["wearemel.com",52],["whatahowler.com",52],["x.company",52],["news.chosun.com",53],["androidweblog.com",54],["cronista.com",55],["fcportables.com",56],["venea.net",57],["uta-net.com",58],["downloadtutorials.net",[58,74]],["blog.naver.com",58],["myschool-eng.com",59],["orangespotlight.com",60],["th-world.com",[60,80]],["itvn.pl",61],["itvnextra.pl",61],["kuchniaplus.pl",61],["miniminiplus.pl",61],["player.pl",61],["ttv.pl",61],["tvn.pl",61],["tvn24.pl",61],["tvn24bis.pl",61],["tvn7.pl",61],["tvnfabula.pl",61],["tvnstyle.pl",61],["tvnturbo.pl",61],["x-link.pl",61],["x-news.pl",61],["kickante.com.br",19],["thestar.com.my",19],["corriereadriatico.it",19],["ilsole24ore.com",19],["scribd.com",62],["thehouseofportable.com",63],["ntvspor.net",63],["book.zhulang.com",63],["tadu.com",63],["selfstudyhistory.com",64],["lokercirebon.com",65],["avdelphi.com",66],["maxstream.video",67],["wpb.shueisha.co.jp",67],["tiktok.com",[67,78]],["vedantu.com",67],["zsti.zsti.civ.pl",67],["kathleenmemberhistory.com",[67,103]],["nonesnanking.com",[67,103]],["prefulfilloverdoor.com",[67,103]],["phenomenalityuniform.com",[67,103]],["nectareousoverelate.com",[67,103]],["timberwoodanotia.com",[67,103]],["strawberriesporail.com",[67,103]],["valeronevijao.com",[67,103]],["cigarlessarefy.com",[67,103]],["figeterpiazine.com",[67,103]],["yodelswartlike.com",[67,103]],["generatesnitrosate.com",[67,103]],["crownmakermacaronicism.com",[67,103]],["chromotypic.com",[67,103]],["gamoneinterrupted.com",[67,103]],["metagnathtuggers.com",[67,103]],["wolfdyslectic.com",[67,103]],["rationalityaloelike.com",[67,103]],["sizyreelingly.com",[67,103]],["simpulumlamerop.com",[67,103]],["urochsunloath.com",[67,103]],["monorhinouscassaba.com",[67,103]],["counterclockwisejacky.com",[67,103]],["35volitantplimsoles5.com",[67,103]],["scatch176duplicities.com",[67,103]],["antecoxalbobbing1010.com",[67,103]],["boonlessbestselling244.com",[67,103]],["cyamidpulverulence530.com",[67,103]],["guidon40hyporadius9.com",[67,103]],["449unceremoniousnasoseptal.com",[67,103]],["19turanosephantasia.com",[67,103]],["30sensualizeexpression.com",[67,103]],["321naturelikefurfuroid.com",[67,103]],["745mingiestblissfully.com",[67,103]],["availedsmallest.com",[67,103]],["greaseball6eventual20.com",[67,103]],["toxitabellaeatrebates306.com",[67,103]],["20demidistance9elongations.com",[67,103]],["audaciousdefaulthouse.com",[67,103]],["fittingcentermondaysunday.com",[67,103]],["fraudclatterflyingcar.com",[67,103]],["launchreliantcleaverriver.com",[67,103]],["matriculant401merited.com",[67,103]],["realfinanceblogcenter.com",[67,103]],["reputationsheriffkennethsand.com",[67,103]],["telyn610zoanthropy.com",[67,103]],["tubelessceliolymph.com",[67,103]],["tummulerviolableness.com",[67,103]],["un-block-voe.net",[67,103]],["v-o-e-unblock.com",[67,103]],["voe-un-block.com",[67,103]],["voeun-block.net",[67,103]],["voeunbl0ck.com",[67,103]],["voeunblck.com",[67,103]],["voeunblk.com",[67,103]],["voeunblock3.com",[67,103]],["audiotools.pro",67],["magesy.blog",67],["magesypro.pro",67],["audioztools.com",67],["www.ntv.co.jp",67],["faptiti.com",67],["wormate.io",67],["selfstudys.com",67],["adslink.pw",67],["jpopsingles.eu",67],["vinstartheme.com",[67,125]],["leakedzone.com",[67,128]],["fjordd.com",67],["seriesperu.com",67],["alphapolis.co.jp",68],["juejin.cn",68],["sweetslyrics.com",68],["thegatewaypundit.com",69],["thegearhunt.com",70],["jfdb.jp",71],["loginhit.com.ng",71],["charbelnemnom.com",71],["bphimmoi.net",71],["goodhub.xyz",71],["edailybuzz.com",73],["zhihu.com",73],["qidian.com",73],["invado.pl",73],["webnovel.com",73],["bajecnavareska.sk",74],["lunas.pro",74],["onlinefreecourse.net",74],["pisr.org",74],["uplod.net",74],["thewpclub.net",74],["thememazing.com",74],["themebanks.com",74],["mesquitaonline.com",74],["skandynawiainfo.pl",74],["onlinecoursebay.com",74],["magnet-novels.com",75],["dreamsfriend.com",76],["trakteer.id",77],["699pic.com",77],["kutub3lpdf.com",79],["sklep-agroland.pl",81],["polagriparts.pl",82],["nordkorea-info.de",83],["geotips.net",84],["hardcoregames.ca",85],["lataifas.ro",86],["daotranslate.com",86],["toppremiumpro.com",87],["wattpad.com",88],["starbene.it",89],["fauxid.com",90],["androidtvbox.eu",91],["nicematin.com",92],["bilibili.com",93],["yamibo.com",94],["fimfiction.net",95],["moegirl.org.cn",96],["bbs.mihoyo.com",97],["peekme.cc",98],["ihbarweb.org.tr",99],["baixedetudo.net.br",100],["gardenia.net",101],["wpking.in",104],["hollywoodmask.com",105],["mbalib.com",105],["wenku.baidu.com",106],["mooc.chaoxing.com",107],["www-daftarharga.blogspot.com",108],["realpython.com",109],["linkmate.xyz",110],["cristelageorgescu.ro",111],["novelpia.com",112],["privivkainfo.ru",113],["frameboxxindore.com",113],["descargatepelis.com",114],["vercalendario.info",115],["zipcode.com.ng",115],["poipiku.com",117],["postcourier.com.pg",118],["gmx.co.uk",120],["gmx.com",120],["likey.me",121],["wallpaperaccess.com",122],["shortform.com",123],["joysound.com",124],["colors.sonicthehedgehog.com",126],["senpa.io",127],["txori.com",127],["comikey.com",129],["translate.goog",130],["oreilly.com",131],["alfred.camera",132],["wrosinski.pl",133],["wtsp.com",134],["starzunion.com",135]]);

const entitiesMap = new Map([["mangaku",37],["dood",37],["streamtape",37],["asiatv",37],["bg-gledai",37],["descarga-animex",40],["tabonitobrasil",50],["anisubindo",50],["wstream",67],["voe-unblock",[67,103]],["pobre",[67,119]],["bmovies",72]]);

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
                if ( matchesBoth ) { return; }
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
