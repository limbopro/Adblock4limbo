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
const uBOL_abortCurrentScript = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["document.onselectstart"],["$","contextmenu"],["disableselect","reEnable"],["$","hidden"],["document.oncontextmenu"],["document.getElementById","advert-tester"],["document.oncopy"],["$","AdBlock"],["jQuery","#sign-up-popup"],["jQuery","overlay"],["document.onkeydown"],["document.getElementById","ad-blocker"],["document.getElementById",".ab_detected"],["jQuery","tweaker"],["jQuery","undefined"],["jQuery","ads"],["document.getElementById","block"],["document.addEventListener","alert"],["document.ondragstart","document.oncontextmenu"],["jQuery","document"],["document.getElementById","undefined"],["jQuery","restriction"],["document.oncontextmenu","document.onselectstart"],["message","clickIE"],["preventSelection"],["jQuery","contextmenu"],["jQuery","Drupal"],["$","blur"],["reEnable","killcopy"],["$","load"],["document.addEventListener","copy"],["document.getElementsByTagName","null"],["eval","abd"],["jQuery","ai_adb"],["document.getElementById","none"],["$","undefined"],["document.addEventListener"],["document.oncontextmenu","key"],["addEventListener","which"],["window.addEventListener","ctrlKey"],["document.createElement","adblock"],["document.getElementById","banner"],["document.getElementById","dataLayer"],["jQuery","disable_hot_keys"],["onload"],["$","offsetHeight"],["disableSelection"],["jQuery","ai_check"],["document.getElementById","adblock"],["onload","contextmenu"],["document.ondragstart"],["$","copy"],["document.getElementById","adblockerdetected"],["$","juicyads"],["$","showEmailNewsletterModal"],["$","btoa"],["disableSelection","reEnable"],["$",".height"],["$","Adblock"],["eval","isNaN"],["document.addEventListener","contribute"],["addEventListener","ctrlKey"],["setTimeout","newsletterPopup"],["window.oncontextmenu"],["document.onmousedown"],["event","stopPropagation"],["soclInit"],["document.addEventListener","preventDefault"],["setTimeout","offsetHeight"],["disable_copy"],["disable_hot_keys"],["jQuery","copy"],["addEventListener","adsbygoogle.length"],["check","debugger"],["document.addEventListener","document.onselectstart"],["matchMedia"],["$","adBlock"],["jQuery","keydown"],["jQuery","oncontextmenu"],["String.prototype.charCodeAt","ai_"],["jQuery","preventDefault"],["$","/getScript|error:/"],["addEventListener","keydown"],["nocontextmenu"],["document.getElementById","cookie"],["document.getElementById","isMoz"],["console.clear"],["oncontextmenu","keydown"],["document.oncontextmenu","nocontextmenu"],["document.onselectstart","disableselect"],["document.querySelector","adblock"],["$","\"input\""],["jQuery","stopPropagation"],["update_visit_count"],["$","test"],["$","Promise"],["showAdblockerModal"],["stopPrntScr"],["$","keydown"],["console.log","devtools"],["setInterval","playAlert"],["console.clear","contextmenu"],["devtoolsDetector"],["shortcut"],["console.log","document.referer"],["document.addEventListener","onkeydown"],["disableEnterKey"],["document.getElementsByTagName","unselectable"],["document.onkeypress"],["document.addEventListener","contextmenu"],["wccp_pro_iscontenteditable"],["document.body.oncontextmenu"],["attachToDom","ad-fallback"],["nocontext"],["runPageBugger"],["eval","contextmenu"],["ab_tests"],["jQuery","userAgent"],["reEnable"],["jQuery","wccp_pro"],["clear_body_at_all_for_extentions"],["RegExp","googlebot"],["globalThis","DisableDevtool"],["document.querySelectorAll","adblock"],["checkAdblockBait"],["RegExp","debugger"],["oncontextmenu"],["navigator","devtools"],["setInterval","stateObject"],["setTimeout","debugger"],["jQuery","keyCode"],["$","debugger"],["jQuery","devtool"],["RegExp","contextmenu"],["AudiosL10n"],["document.createElement","admiral"],["document.getElementsByTagName","admiral"],["jQuery","hmwp_is_devtool"],["RegExp.prototype.toString",".join(\"\")"],["document.onmousedown","disableclick"],["RegExp","disableRightClick"]];

const hostnamesMap = new Map([["mimaletadepeliculas.blogspot.com",0],["clk.sh",[0,4]],["shrinkearn.com",[0,4]],["luoghidavedere.it",0],["practicetestgeeks.com",[0,4]],["gagetmatome.com",0],["verdadeiroolhar.pt",0],["librospreuniversitariospdf.blogspot.com",[0,1,10,44]],["mt-milcom.blogspot.com",[0,4]],["interviewgig.com",0],["artesacro.org",0],["dailynewsview.com",0],["dailynews.us.com",0],["e-sushi.fr",0],["evasion-online.com",0],["exclusifvoyages.com",0],["f1fastlap.blogspot.com",[0,4]],["naukridisha.in",0],["nydailyquote.com",0],["ouasafat.com",0],["reflectim.fr",[0,4]],["top.howfn.com",0],["kangmartho.com",0],["gnt24365.net",[0,4]],["tvstreampf.xyz",[0,50]],["pvstreams.com",[0,4,10,25]],["7misr4day.com",[0,4]],["evz.ro",1],["visionias.net",1],["safetxt.net",1],["javbest.xyz",1],["javbix.com",1],["javgrab.com",1],["goalup.live",1],["hatsukimanga.com",1],["47news.jp",1],["japanxxxmovie.com",1],["sexpox.com",1],["ibomma.pw",1],["aepos.ap.gov.in",1],["ssphim.net",[1,10]],["10000recipe.com",1],["edurev.in",1],["javjavhd.com",1],["mcocguideblog.com",2],["singingdalong.blogspot.com",2],["runningnews.gr",[2,4]],["tecnotutoshd.net",2],["psychologiazycia.com",[2,4]],["multifilemirror.com",3],["fmhikayeleri.com",4],["tinyppt.com",4],["hindi-gk.com",4],["androidmtk.com",4],["badayak.com",4],["kirannewsagency.com",4],["starsunfolded.com",4],["satcesc.com",4],["them4ufree.info",4],["baattv.com",4],["tunovelaligera.com",[4,30]],["yeane.org",4],["mtbtutoriales.com",4],["answersafrica.com",4],["felico.pl",4],["legionprogramas.org",4],["serwis-zamkow.com",4],["hebrew4christians.com",4],["jpopsingles.eu",[4,10]],["ghanatvon.com",4],["kusonime.com",[4,10,38]],["otakudesu.org",[4,39]],["idmod.xyz",4],["indcit.com",4],["androidmakale.com",4],["mongri.net",4],["download.ipeenk.com",4],["doranobi-fansub.id",[4,43]],["alexeiportableapp.blogspot.com",4],["oparana.com.br",4],["lolle21.com",4],["mangaid.click",4],["manianomikata.com",4],["tfp.is",4],["dassen-azara4.com",4],["pentruea.com",4],["neyrologos.gr",4],["freerapidleechlist.blogspot.com",4],["ggeguide.com",4],["tanya-tanya.com",[4,56]],["lalawin.com",4],["audioreview.m1001.coreserver.jp",[4,56]],["seikatsu-hyakka.com",4],["elizabeth-mitchell.org",[4,61]],["blasianluvforever.com",4],["movieston.com",[4,25]],["eduardo-monica.com",4],["fmzm.xyz",4],["j-island.net",4],["msubplix.com",4],["upstream.to",4],["ilclubdellericette.it",4],["daum.net",4],["newsforbolly.org",4],["cablegratis.online",4],["dztechphone.com",4],["funivie.org",4],["goodbakery.ru",[4,25]],["ifdreamscametrue.com",[4,71]],["juegosdetiempolibre.org",4],["musicindustryhowto.com",[4,36,50]],["sdelatotoplenie.ru",[4,6]],["sachonthi.com",4],["zdravenportal.eu",[4,74]],["thezealots.org",4],["deportealdia.live",4],["hulnews.top",4],["truyenbanquyen.com",[4,118,119,120]],["globaledu.jp",4],["lataifas.ro",[4,78]],["blisseyhusband.in",[4,25]],["openfinanza.it",[4,50]],["followmikewynn.com",4],["starbene.it",4],["bimiacg.net",4],["diaforetiko.gr",4],["tchadcarriere.com",4],["info-beihilfe.de",4],["zgywyd.cn",4],["mercenaryenrollment.com",4],["wawlist.com",[4,10]],["cristelageorgescu.ro",4],["crunchyscan.fr",4],["www-daftarharga.blogspot.com",4],["koszalincity.pl",[4,10]],["theghostinmymachine.com",4],["ilovevaldinon.it",4],["aileen-novel.online",[4,70]],["bumigemilang.com",[4,70]],["bingotingo.com",4],["stream.bunkr.is",4],["blueraindrops.com",4],["sekaikomik.live",4],["privivkainfo.ru",4],["apps2app.com",4],["bestjavporn.com",4],["mm9841.cc",4],["myoplay.club",4],["bpcj.or.jp",4],["cdramalove.com",4],["outidesigoto.com",4],["xemphimaz.com",4],["gourmetscans.net",[4,110]],["awebstories.com",4],["zgbk.com",4],["clujust.ro",[4,50]],["stockpokeronline.com",4],["indianhealthyrecipes.com",[4,10]],["stiridinromania.ro",4],["kooora4lives.net",4],["kooora4livs.com",4],["ferroviando.com.br",[4,118,119,120]],["counciloflove.com",[4,118,119,120]],["infokik.com",[4,118,119,120]],["kulinarnastronamocy.pl",[4,118,119,120]],["jafekri.com",[4,118,119,120]],["ezmanga.net",[4,118,119,120]],["paidiatreio.gr",[4,30]],["workhouses.org.uk",4],["dollarvr.com",[4,50]],["newsme.gr",[4,50]],["daily-tohoku.news",[4,46]],["descopera.ro",4],["velicu.eu",4],["arenavalceana.ro",[4,25]],["firmwarefile.com",4],["asianexpress.co.uk",4],["best4hack.blogspot.com",4],["certificationexamanswers.890m.com",4],["cookhero.gr",4],["creative-chemistry.org.uk",4],["deutschaj.com",4],["divineyogaschool.blogspot.com",4],["fabioambrosi.it",4],["flory4all.com",4],["fv2freegifts.org",4],["geniusjw.com",4],["ideas0419.com",4],["jeyran.net",4],["ktm2day.com",4],["letsdownloads.com",4],["limametti.com",4],["luyenthithukhoa.vn",4],["otakukan.com",4],["ribbelmonster.de",4],["untitle.org",4],["uptimeside.webnode.gr",4],["usmleexperiences.review",4],["zoommastory.com",4],["urbanbrush.net",4],["audiotools.in",4],["raindropteamfan.com",4],["manhwahentai.me",4],["ontools.net",4],["scarysymptoms.com",[4,110]],["musicallyvideos.com",4],["geeksoncoffee.com",4],["guidingliterature.com",[4,50]],["mostrodifirenze.com",4],["3xyaoi.com",4],["eca-anime.net",5],["braziljournal.com",6],["nekopoi.web.id",6],["world4.eu",[6,69,70]],["flyertalk.com",7],["lcpdfr.com",7],["searchenginewatch.com",8],["oggiscuola.com",9],["sabishiidesu.com",10],["banglainsider.com",[10,28]],["animesanka.com",10],["lendagames.com",10],["vinaurl.blogspot.com",[10,75]],["utorrentgamesps2.blogspot.com",10],["articlesmania.me",10],["aksensei.com",10],["allcryptoz.net",10],["crewbase.net",10],["crewus.net",10],["shinbhu.net",10],["shinchu.net",10],["thumb8.net",10],["thumb9.net",10],["topcryptoz.net",10],["uniqueten.net",10],["ultraten.net",10],["krunkercentral.com",10],["desijugar.net",10],["adslink.pw",10],["genesistls.com",[10,50]],["senpaiediciones.com",[10,50]],["guiasaude.info",10],["felizemforma.com",10],["icourse163.org",10],["kashmirobserver.net",11],["cathouseonthekings.com",12],["winaero.com",13],["centrumher.eu",14],["japancamerahunter.com",15],["airlinercafe.com",15],["thegraillords.net",16],["worldscientific.com",16],["videohelp.com",16],["upsrtconline.co.in",17],["qualityfilehosting.com",18],["booksmedicos.org",19],["siliconinvestor.com",20],["space-engineers.de",20],["coffeeforums.co.uk",20],["anime2you.de",20],["majorgeeks.com",20],["jobsbotswana.info",21],["npnews24.com",22],["fordogtrainers.pl",[23,24]],["polskacanada.com",25],["fantricks.com",25],["blog.kwick.de",25],["selfstudyhistory.com",[25,50]],["yeuphimmoik.com",25],["repack-games.com",25],["delicateseliterare.ro",25],["wpplugins.tips",25],["verselemzes.hu",[25,130]],["sqlserveregitimleri.com",25],["gezimanya.com",26],["athletic.net",27],["playonlinux.com",29],["bitblokes.de",31],["bold.dk",32],["pureinfotech.com",33],["almasdarnews.com",33],["casertace.net",33],["civildigital.com",33],["lesmoutonsenrages.fr",33],["venusarchives.com",33],["verpornocomic.com",33],["balticlivecam.com",34],["molineuxmix.co.uk",35],["yaledailynews.com",35],["canondrivers.org",[36,37]],["forum.nlmod.net",40],["includehelp.com",41],["u.gg",42],["routenote.com",44],["themosvagas.com.br",[44,82]],["mt07-forum.de",45],["auto-treff.com",45],["telefon-treff.de",45],["dodge-forum.eu",45],["altranotizia.it",46],["hearthstone-decks.net",47],["full-anime.fr",48],["klsescreener.com",48],["nonton78.com",49],["sbfast.com",49],["vupload.com",49],["opportunitydesk.org",50],["selfstudyanthro.com",50],["renditepassive.net",50],["androidtvbox.eu",50],["flinsetyadi.com",[50,56]],["rawneix.in",[50,106,107]],["the-masters-voice.com",[50,56]],["activationkeys.co",50],["pandurul.ro",51],["masrawy.com",52],["milfzr.com",53],["phrasemix.com",54],["smokingmeatforums.com",55],["sertracen.com.pa",56],["pitesti24.ro",56],["samsungtechwin.com",56],["cours-de-droit.net",56],["iptv4best.com",56],["blogvisaodemercado.pt",56],["kapitalis.com",56],["tiempo.hn",56],["winmeen.com",56],["ibps.in",56],["visse.com.br",56],["javsubtitle.co",56],["learninsta.com",56],["licensekeys.org",56],["mediahiburan.my",56],["tipssehatcantik.com",56],["anime-drama.jp",56],["jbjbgame.com",56],["viatasisanatate.com",56],["ziarulargesul.ro",56],["globaldefensecorp.com",56],["gossipnextdoor.com",56],["coffeeapps.ir",56],["media.framu.world",56],["immobiliaremia.com",56],["colegiosconcertados.info",56],["bigdatauni.com",56],["riwyat.com",56],["rukim.id",56],["visefierbinti.ro",56],["cyberkrafttraining.com",56],["theaircurrent.com",56],["ncert-solutions.com",56],["ncertsolutions.guru",56],["nocturnetls.net",56],["clockks.com",56],["ananda-yoga.ro",56],["poolpiscina.com",56],["infodifesa.it",56],["getective.com",56],["flashdumpfiles.com",56],["formatatmak.com",56],["drkrok.com",56],["alphagirlreviews.com",56],["kitchennovel.com",56],["voxvalachorum.ro",56],["cracksone.com",56],["day-hoc.org",56],["onlineonderdelenshop.nl",56],["primicia.com.ve",56],["tech-recipes.com",56],["postcourier.com.pg",56],["afrikmag.com",56],["maduras.vip",56],["aprendeinglessila.com",56],["kicknews.today",56],["koalasplayground.com",56],["hellokpop.com",56],["hayatbilgileri.com",56],["moneyexcel.com",56],["placementstore.com",56],["neuroteam-metz.de",56],["codedosa.com",56],["liveyourmaths.com",56],["newspao.gr",56],["ieltsliz.com",56],["programasvirtualespc.net",56],["tempatwisataseru.com",56],["wikiofcelebs.com",56],["jornaljoca.com.br",56],["arcanescans.com",56],["filmzone.com",56],["hiraethtranslation.com",56],["kaystls.site",56],["home.novel-gate.com",56],["sharree.com",57],["moneyguru.co",57],["abola.pt",58],["unixhow.com",59],["wikihow.com",60],["analizy.pl",62],["phimmedia.info",63],["zeeebatch.blogspot.com",64],["sokolow-mlp.pl",64],["japan-fans.com",64],["ohmygirl.ml",65],["cissamagazine.com.br",66],["observatoriodocinema.uol.com.br",67],["salidzini.lv",68],["portalcriatividade.com.br",[69,113]],["kitguru.net",72],["lvturbo.com",73],["sbbrisk.com",73],["sbface.com",73],["sbspeed.com",73],["streamsb.net",73],["itscybertech.com",73],["whatfontis.com",76],["tritinia.com",77],["sportnews.to",[77,85]],["psihologiadeazi.ro",77],["dubznetwork.com",[77,108]],["lowkeytech.com",79],["ubuntudde.com",79],["techsini.com",80],["allmovie.com",81],["sidereel.com",81],["appofmirror.com",83],["developpez.com",84],["scatch176duplicities.com",86],["voe-unblock.com",86],["phimdinhcao.com",87],["picallow.com",88],["brooklyneagle.com",88],["links.extralinks.casa",89],["theasianparent.com",89],["ssuathletics.com",90],["titulky.com",91],["dongphimmoiz.com",92],["investorvillage.com",93],["grandoldteam.com",94],["gamingsinners.com",94],["elitepvpers.com",95],["geeksforgeeks.org",96],["acupoffrench.com",97],["novelza.com",97],["novelpia.com",[98,99,100]],["viewsb.com",101],["dizipal210.com",[101,102]],["dizipal211.com",[101,102]],["dizipal222.com",[101,102]],["dizipal223.com",[101,102]],["dizipal229.com",[101,102]],["dizipal232.com",[101,102]],["dizipal233.com",[101,102]],["dizipal234.com",[101,102]],["dizipal235.com",[101,102]],["dizipal236.com",[101,102]],["dizipal237.com",[101,102]],["dizipal238.com",[101,102]],["dizipal239.com",[101,102]],["dizipal240.com",[101,102]],["dizipal241.com",[101,102]],["dizipal242.com",[101,102]],["dizipal243.com",[101,102]],["dizipal244.com",[101,102]],["dizipal246.com",[101,102]],["dizipal247.com",[101,102]],["dizipal248.com",[101,102]],["dizipal249.com",[101,102]],["nsfwzone.xyz",101],["dlmovies.link",101],["top1iq.com",103],["unlimitedfiles.xyz",104],["aztravels.net",105],["downfile.site",105],["memangbau.com",105],["trangchu.news",105],["revenue.land",106],["eplayer.click",108],["olacast.live",108],["ntuplay.xyz",108],["fucktube4k.com",109],["knightnoscanlation.com",109],["blog.cryptowidgets.net",109],["blog.insurancegold.in",109],["blog.wiki-topia.com",109],["blog.coinsvalue.net",109],["blog.cookinguide.net",109],["blog.freeoseocheck.com",109],["maxstream.video",111],["esologs.com",112],["fflogs.com",112],["swtorlogs.com",112],["warcraftlogs.com",112],["smokelearned.net",114],["nhentaihaven.org",115],["slideshare.net",116],["hidemywp.co",117],["memoryhackers.org",121],["turkbettv154.com",122],["steamcollector.com",123],["mgsm.pl",124],["camcaps.to",125],["vtplayer.net",125],["phimlongtieng.net",[126,127,128,129]],["weakstream.org",131],["jk-market.com",132],["vtbe.to",133],["vtube.network",133],["film4e.com",134],["zamundatv.com",134],["boston.com",135],["britannica.com",135],["cattime.com",135],["dogtime.com",135],["download.mokeedev.com",135],["freep.com",135],["ijr.com",135],["inquirer.net",135],["knowyourmeme.com",135],["nationalreview.com",135],["nofilmschool.com",135],["order-order.com",135],["savvytime.com",135],["techlicious.com",135],["technicpack.net",135],["thedraftnetwork.com",135],["wrestlezone.com",135],["xda-developers.com",135],["legacy.com",136],["firescans.xyz",137],["radartest.com",139],["daya-jewelry.com",140]]);

const entitiesMap = new Map([["mangaku",1],["dramaqu",1],["europixhd",[4,10]],["topeuropix",[4,10]],["dramacute",[4,46]],["depedlps",4],["mangatoon",4],["123movies",[4,56]],["gomovies",4],["fmovies",[4,56]],["otakudesu",4],["yoyofilmeys",4],["tvzingvn",49],["zingtvhd",49],["zingvntv",49],["sbflix",49],["vidsrc",138]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function abortCurrentScript(...args) {
    runAtHtmlElementFn(( ) => {
        abortCurrentScriptCore(...args);
    });
}

function abortCurrentScriptCore(
    target = '',
    needle = '',
    context = ''
) {
    if ( typeof target !== 'string' ) { return; }
    if ( target === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('abort-current-script', target, needle, context);
    const reNeedle = safe.patternToRegex(needle);
    const reContext = safe.patternToRegex(context);
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    const thisScript = document.currentScript;
    const chain = target.split('.');
    let owner = window;
    let prop;
    for (;;) {
        prop = chain.shift();
        if ( chain.length === 0 ) { break; }
        if ( prop in owner === false ) { break; }
        owner = owner[prop];
        if ( owner instanceof Object === false ) { return; }
    }
    let value;
    let desc = Object.getOwnPropertyDescriptor(owner, prop);
    if (
        desc instanceof Object === false ||
        desc.get instanceof Function === false
    ) {
        value = owner[prop];
        desc = undefined;
    }
    const debug = shouldDebug(extraArgs);
    const exceptionToken = getExceptionToken();
    const scriptTexts = new WeakMap();
    const getScriptText = elem => {
        let text = elem.textContent;
        if ( text.trim() !== '' ) { return text; }
        if ( scriptTexts.has(elem) ) { return scriptTexts.get(elem); }
        const [ , mime, content ] =
            /^data:([^,]*),(.+)$/.exec(elem.src.trim()) ||
            [ '', '', '' ];
        try {
            switch ( true ) {
            case mime.endsWith(';base64'):
                text = self.atob(content);
                break;
            default:
                text = self.decodeURIComponent(content);
                break;
            }
        } catch(ex) {
        }
        scriptTexts.set(elem, text);
        return text;
    };
    const validate = ( ) => {
        const e = document.currentScript;
        if ( e instanceof HTMLScriptElement === false ) { return; }
        if ( e === thisScript ) { return; }
        if ( context !== '' && reContext.test(e.src) === false ) {
            // eslint-disable-next-line no-debugger
            if ( debug === 'nomatch' || debug === 'all' ) { debugger; }
            return;
        }
        if ( safe.logLevel > 1 && context !== '' ) {
            safe.uboLog(logPrefix, `Matched src\n${e.src}`);
        }
        const scriptText = getScriptText(e);
        if ( reNeedle.test(scriptText) === false ) {
            // eslint-disable-next-line no-debugger
            if ( debug === 'nomatch' || debug === 'all' ) { debugger; }
            return;
        }
        if ( safe.logLevel > 1 ) {
            safe.uboLog(logPrefix, `Matched text\n${scriptText}`);
        }
        // eslint-disable-next-line no-debugger
        if ( debug === 'match' || debug === 'all' ) { debugger; }
        safe.uboLog(logPrefix, 'Aborted');
        throw new ReferenceError(exceptionToken);
    };
    // eslint-disable-next-line no-debugger
    if ( debug === 'install' ) { debugger; }
    try {
        Object.defineProperty(owner, prop, {
            get: function() {
                validate();
                return desc instanceof Object
                    ? desc.get.call(owner)
                    : value;
            },
            set: function(a) {
                validate();
                if ( desc instanceof Object ) {
                    desc.set.call(owner, a);
                } else {
                    value = a;
                }
            }
        });
    } catch(ex) {
        safe.uboErr(logPrefix, `Error: ${ex}`);
    }
}

function runAtHtmlElementFn(fn) {
    if ( document.documentElement ) {
        fn();
        return;
    }
    const observer = new MutationObserver(( ) => {
        observer.disconnect();
        fn();
    });
    observer.observe(document, { childList: true });
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
    try { abortCurrentScript(...argsList[i]); }
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
    return uBOL_abortCurrentScript();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_abortCurrentScript = cloneInto([
            [ '(', uBOL_abortCurrentScript.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_abortCurrentScript);
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
    delete page.uBOL_abortCurrentScript;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
