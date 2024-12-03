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

/* eslint-disable indent */

// ruleset: annoyances-overlays

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_abortCurrentScript = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["document.onselectstart"],["$","contextmenu"],["disableselect","reEnable"],["document.oncontextmenu"],["document.getElementById","advert-tester"],["document.oncopy"],["$","AdBlock"],["jQuery","#sign-up-popup"],["jQuery","overlay"],["document.onkeydown"],["document.getElementById","ad-blocker"],["document.getElementById",".ab_detected"],["jQuery","tweaker"],["jQuery","undefined"],["jQuery","ads"],["document.getElementById","block"],["document.addEventListener","alert"],["document.ondragstart","document.oncontextmenu"],["jQuery","document"],["document.getElementById","undefined"],["jQuery","restriction"],["document.oncontextmenu","document.onselectstart"],["message","clickIE"],["preventSelection"],["jQuery","contextmenu"],["jQuery","Drupal"],["$","blur"],["reEnable","killcopy"],["$","load"],["document.getElementsByTagName","null"],["eval","abd"],["jQuery","ai_adb"],["document.getElementById","none"],["$","undefined"],["document.addEventListener"],["document.oncontextmenu","key"],["addEventListener","which"],["window.addEventListener","ctrlKey"],["document.createElement","adblock"],["document.getElementById","banner"],["document.getElementById","dataLayer"],["jQuery","disable_hot_keys"],["onload"],["$","offsetHeight"],["disableSelection"],["jQuery","ai_check"],["document.getElementById","adblock"],["onload","contextmenu"],["document.ondragstart"],["$","copy"],["document.getElementById","adblockerdetected"],["$","juicyads"],["$","showEmailNewsletterModal"],["$","btoa"],["disableSelection","reEnable"],["$",".height"],["$","Adblock"],["eval","isNaN"],["document.addEventListener","contribute"],["addEventListener","ctrlKey"],["setTimeout","newsletterPopup"],["document.onmousedown"],["event","stopPropagation"],["soclInit"],["document.addEventListener","preventDefault"],["disable_copy"],["disable_hot_keys"],["jQuery","copy"],["addEventListener","adsbygoogle.length"],["check","debugger"],["document.addEventListener","document.onselectstart"],["matchMedia"],["$","adBlock"],["jQuery","keydown"],["jQuery","oncontextmenu"],["String.prototype.charCodeAt","ai_"],["jQuery","preventDefault"],["$","/getScript|error:/"],["addEventListener","keydown"],["nocontextmenu"],["document.getElementById","cookie"],["document.getElementById","isMoz"],["console.clear"],["oncontextmenu","keydown"],["document.oncontextmenu","nocontextmenu"],["document.onselectstart","disableselect"],["document.querySelector","adblock"],["$","\"input\""],["jQuery","stopPropagation"],["update_visit_count"],["$","test"],["$","Promise"],["showAdblockerModal"],["stopPrntScr"],["$","keydown"],["console.log","devtools"],["setInterval","playAlert"],["console.clear","contextmenu"],["shortcut"],["console.log","document.referer"],["document.addEventListener","onkeydown"],["disableEnterKey"],["document.getElementsByTagName","unselectable"],["document.onkeypress"],["document.addEventListener","contextmenu"],["wccp_pro_iscontenteditable"],["document.body.oncontextmenu"],["attachToDom","ad-fallback"],["nocontext"],["runPageBugger"],["eval","contextmenu"],["ab_tests"],["jQuery","userAgent"],["reEnable"],["jQuery","wccp_pro"],["clear_body_at_all_for_extentions"],["RegExp","googlebot"],["document.querySelectorAll","adblock"],["document.addEventListener","copy"],["checkAdblockBait"],["document.addEventListener","keydown"],["RegExp","debugger"],["oncontextmenu"],["navigator","devtools"],["setInterval","stateObject"],["setTimeout","debugger"],["jQuery","keyCode"],["$","debugger"],["jQuery","devtool"],["RegExp","contextmenu"],["AudiosL10n"],["document.createElement","admiral"],["document.getElementsByTagName","admiral"],["jQuery","hmwp_is_devtool"],["RegExp.prototype.toString",".join(\"\")"],["document.onmousedown","disableclick"],["RegExp","disableRightClick"],["RegExp","console"],["$","devtoolsDetector"],["Object.defineProperty","DisableDevtool"],["addEventListener","ays_tooltip"],["document.onkeydown","disableCTRL"]];

const hostnamesMap = new Map([["mimaletadepeliculas.blogspot.com",0],["clk.sh",[0,3]],["shrinkearn.com",[0,3]],["luoghidavedere.it",0],["practicetestgeeks.com",[0,3]],["gagetmatome.com",0],["verdadeiroolhar.pt",0],["librospreuniversitariospdf.blogspot.com",[0,1,9,42]],["mt-milcom.blogspot.com",[0,3]],["interviewgig.com",0],["artesacro.org",0],["dailynewsview.com",0],["dailynews.us.com",0],["e-sushi.fr",0],["evasion-online.com",0],["exclusifvoyages.com",0],["naukridisha.in",0],["nydailyquote.com",0],["ouasafat.com",0],["reflectim.fr",[0,3]],["top.howfn.com",0],["kangmartho.com",0],["gnt24365.net",[0,3]],["tvstreampf.xyz",[0,48]],["pvstreams.com",[0,3,9,24]],["7misr4day.com",[0,3]],["evz.ro",1],["visionias.net",1],["safetxt.net",1],["javbest.xyz",1],["javbix.com",1],["javgrab.com",1],["goalup.live",1],["hatsukimanga.com",1],["47news.jp",1],["japanxxxmovie.com",1],["sexpox.com",1],["ibomma.pw",1],["aepos.ap.gov.in",1],["ssphim.net",[1,9]],["10000recipe.com",1],["edurev.in",1],["javjavhd.com",1],["mcocguideblog.com",2],["singingdalong.blogspot.com",2],["runningnews.gr",[2,3]],["tecnotutoshd.net",2],["psychologiazycia.com",[2,3]],["fmhikayeleri.com",3],["tinyppt.com",3],["hindi-gk.com",3],["androidmtk.com",3],["badayak.com",3],["kirannewsagency.com",3],["starsunfolded.com",3],["satcesc.com",3],["them4ufree.info",3],["yeane.org",3],["mtbtutoriales.com",3],["answersafrica.com",3],["felico.pl",3],["legionprogramas.org",3],["serwis-zamkow.com",3],["hebrew4christians.com",3],["kusonime.com",[3,9,36]],["otakudesu.org",[3,37]],["androidmakale.com",3],["mongri.net",3],["download.ipeenk.com",3],["doranobi-fansub.id",[3,41]],["alexeiportableapp.blogspot.com",3],["oparana.com.br",3],["lolle21.com",3],["mangaid.click",3],["manianomikata.com",3],["tfp.is",3],["dassen-azara4.com",3],["pentruea.com",3],["neyrologos.gr",3],["freerapidleechlist.blogspot.com",3],["ggeguide.com",3],["tanya-tanya.com",[3,54]],["lalawin.com",3],["audioreview.m1001.coreserver.jp",[3,54]],["seikatsu-hyakka.com",3],["elizabeth-mitchell.org",[3,59]],["blasianluvforever.com",3],["movieston.com",[3,24]],["eduardo-monica.com",3],["msubplix.com",3],["upstream.to",3],["ilclubdellericette.it",3],["daum.net",3],["newsforbolly.org",3],["dztechphone.com",3],["funivie.org",3],["goodbakery.ru",[3,24]],["ifdreamscametrue.com",[3,67]],["juegosdetiempolibre.org",3],["musicindustryhowto.com",[3,34,48]],["sdelatotoplenie.ru",[3,5]],["sachonthi.com",3],["zdravenportal.eu",[3,70]],["thezealots.org",3],["deportealdia.live",3],["hulnews.top",3],["truyenbanquyen.com",[3,113,114,115]],["globaledu.jp",3],["lataifas.ro",[3,74]],["blisseyhusband.in",[3,24]],["openfinanza.it",[3,48]],["followmikewynn.com",3],["starbene.it",3],["bimiacg.net",3],["diaforetiko.gr",3],["tchadcarriere.com",3],["info-beihilfe.de",3],["zgywyd.cn",3],["mercenaryenrollment.com",3],["wawlist.com",[3,9]],["cristelageorgescu.ro",3],["crunchyscan.fr",3],["www-daftarharga.blogspot.com",3],["koszalincity.pl",[3,9]],["theghostinmymachine.com",3],["ilovevaldinon.it",3],["aileen-novel.online",[3,66]],["bumigemilang.com",[3,66]],["bingotingo.com",3],["stream.bunkr.is",3],["blueraindrops.com",3],["sekaikomik.live",3],["privivkainfo.ru",3],["apps2app.com",3],["bestjavporn.com",3],["mm9841.cc",3],["myoplay.club",3],["bpcj.or.jp",3],["cdramalove.com",3],["outidesigoto.com",3],["xemphimaz.com",3],["gourmetscans.net",[3,105]],["awebstories.com",3],["zgbk.com",3],["clujust.ro",[3,48]],["stockpokeronline.com",3],["indianhealthyrecipes.com",[3,9]],["stiridinromania.ro",3],["kooora4lives.net",3],["kooora4livs.com",3],["secondlifetranslations.com",[3,113,114,115]],["ferroviando.com.br",[3,113,114,115]],["counciloflove.com",[3,113,114,115]],["infokik.com",[3,113,114,115]],["kulinarnastronamocy.pl",[3,113,114,115]],["jafekri.com",[3,113,114,115]],["ezmanga.net",[3,113,114,115]],["paidiatreio.gr",[3,118]],["jpopsingles.eu",[3,9,24,120]],["workhouses.org.uk",3],["dollarvr.com",[3,48]],["newsme.gr",[3,48]],["daily-tohoku.news",[3,44]],["descopera.ro",3],["velicu.eu",3],["arenavalceana.ro",[3,24]],["firmwarefile.com",3],["asianexpress.co.uk",3],["best4hack.blogspot.com",3],["certificationexamanswers.890m.com",3],["cookhero.gr",3],["creative-chemistry.org.uk",3],["deutschaj.com",3],["divineyogaschool.blogspot.com",3],["fabioambrosi.it",3],["flory4all.com",3],["fv2freegifts.org",3],["geniusjw.com",3],["ideas0419.com",3],["jeyran.net",3],["ktm2day.com",3],["letsdownloads.com",3],["limametti.com",3],["luyenthithukhoa.vn",3],["otakukan.com",3],["ribbelmonster.de",3],["untitle.org",3],["uptimeside.webnode.gr",3],["usmleexperiences.review",3],["zoommastory.com",3],["urbanbrush.net",3],["audiotools.in",3],["raindropteamfan.com",3],["manhwahentai.me",3],["ontools.net",3],["scarysymptoms.com",[3,105]],["musicallyvideos.com",3],["geeksoncoffee.com",3],["guidingliterature.com",[3,48]],["mostrodifirenze.com",3],["3xyaoi.com",3],["tinyhouse-baluchon.fr",3],["eca-anime.net",4],["braziljournal.com",5],["nekopoi.web.id",5],["world4.eu",[5,65,66]],["flyertalk.com",6],["lcpdfr.com",6],["searchenginewatch.com",7],["oggiscuola.com",8],["sabishiidesu.com",9],["banglainsider.com",[9,27]],["animesanka.com",9],["lendagames.com",9],["vinaurl.blogspot.com",[9,71]],["utorrentgamesps2.blogspot.com",9],["articlesmania.me",9],["aksensei.com",9],["allcryptoz.net",9],["crewbase.net",9],["crewus.net",9],["shinbhu.net",9],["shinchu.net",9],["thumb8.net",9],["thumb9.net",9],["topcryptoz.net",9],["uniqueten.net",9],["ultraten.net",9],["krunkercentral.com",9],["desijugar.net",9],["adslink.pw",9],["genesistls.com",[9,48]],["senpaiediciones.com",[9,48]],["guiasaude.info",9],["felizemforma.com",9],["icourse163.org",9],["kashmirobserver.net",10],["cathouseonthekings.com",11],["winaero.com",12],["centrumher.eu",13],["japancamerahunter.com",14],["airlinercafe.com",14],["thegraillords.net",15],["worldscientific.com",15],["videohelp.com",15],["upsrtconline.co.in",16],["qualityfilehosting.com",17],["booksmedicos.org",18],["siliconinvestor.com",19],["space-engineers.de",19],["coffeeforums.co.uk",19],["anime2you.de",19],["majorgeeks.com",19],["jobsbotswana.info",20],["npnews24.com",21],["fordogtrainers.pl",[22,23]],["polskacanada.com",24],["fantricks.com",24],["blog.kwick.de",24],["selfstudyhistory.com",[24,48]],["yeuphimmoik.com",24],["repack-games.com",24],["delicateseliterare.ro",24],["wpplugins.tips",24],["verselemzes.hu",[24,126]],["sqlserveregitimleri.com",24],["gezimanya.com",25],["athletic.net",26],["playonlinux.com",28],["bitblokes.de",29],["bold.dk",30],["pureinfotech.com",31],["almasdarnews.com",31],["casertace.net",31],["civildigital.com",31],["lesmoutonsenrages.fr",31],["venusarchives.com",31],["verpornocomic.com",31],["balticlivecam.com",32],["molineuxmix.co.uk",33],["yaledailynews.com",33],["canondrivers.org",[34,35]],["forum.nlmod.net",38],["includehelp.com",39],["u.gg",40],["routenote.com",42],["themosvagas.com.br",[42,78]],["mt07-forum.de",43],["auto-treff.com",43],["telefon-treff.de",43],["dodge-forum.eu",43],["altranotizia.it",44],["hearthstone-decks.net",45],["full-anime.fr",46],["klsescreener.com",46],["nonton78.com",47],["sbfast.com",47],["vupload.com",47],["opportunitydesk.org",48],["selfstudyanthro.com",48],["renditepassive.net",48],["androidtvbox.eu",48],["flinsetyadi.com",[48,54]],["rawneix.in",[48,101,102]],["the-masters-voice.com",[48,54]],["activationkeys.co",48],["pandurul.ro",49],["masrawy.com",50],["milfzr.com",51],["phrasemix.com",52],["smokingmeatforums.com",53],["sertracen.com.pa",54],["pitesti24.ro",54],["samsungtechwin.com",54],["cours-de-droit.net",54],["iptv4best.com",54],["blogvisaodemercado.pt",54],["kapitalis.com",54],["tiempo.hn",54],["winmeen.com",54],["ibps.in",54],["visse.com.br",54],["javsubtitle.co",54],["learninsta.com",54],["licensekeys.org",54],["mediahiburan.my",54],["tipssehatcantik.com",54],["anime-drama.jp",54],["jbjbgame.com",54],["viatasisanatate.com",54],["ziarulargesul.ro",54],["globaldefensecorp.com",54],["gossipnextdoor.com",54],["coffeeapps.ir",54],["media.framu.world",54],["immobiliaremia.com",54],["colegiosconcertados.info",54],["bigdatauni.com",54],["riwyat.com",54],["rukim.id",54],["visefierbinti.ro",54],["cyberkrafttraining.com",54],["theaircurrent.com",54],["ncert-solutions.com",54],["ncertsolutions.guru",54],["nocturnetls.net",54],["clockks.com",54],["ananda-yoga.ro",54],["poolpiscina.com",54],["infodifesa.it",54],["getective.com",54],["flashdumpfiles.com",54],["formatatmak.com",54],["drkrok.com",54],["alphagirlreviews.com",54],["kitchennovel.com",54],["voxvalachorum.ro",54],["cracksone.com",54],["day-hoc.org",54],["onlineonderdelenshop.nl",54],["primicia.com.ve",54],["tech-recipes.com",54],["postcourier.com.pg",54],["afrikmag.com",54],["maduras.vip",54],["aprendeinglessila.com",54],["kicknews.today",54],["koalasplayground.com",54],["hellokpop.com",54],["hayatbilgileri.com",54],["moneyexcel.com",54],["placementstore.com",54],["neuroteam-metz.de",54],["codedosa.com",54],["liveyourmaths.com",54],["newspao.gr",54],["ieltsliz.com",54],["programasvirtualespc.net",54],["tempatwisataseru.com",54],["wikiofcelebs.com",54],["jornaljoca.com.br",54],["arcanescans.com",54],["filmzone.com",54],["hiraethtranslation.com",54],["kaystls.site",54],["home.novel-gate.com",54],["plural.jor.br",54],["evreporter.com",54],["sinhasannews.com",54],["viewsofgreece.gr",54],["rozbor-dila.cz",54],["sharree.com",55],["moneyguru.co",55],["abola.pt",56],["unixhow.com",57],["wikihow.com",58],["analizy.pl",60],["zeeebatch.blogspot.com",61],["sokolow-mlp.pl",61],["japan-fans.com",61],["ohmygirl.ml",62],["cissamagazine.com.br",63],["observatoriodocinema.uol.com.br",64],["portalcriatividade.com.br",[65,108]],["kitguru.net",68],["lvturbo.com",69],["sbbrisk.com",69],["sbface.com",69],["sbspeed.com",69],["streamsb.net",69],["itscybertech.com",69],["whatfontis.com",72],["tritinia.com",73],["sportnews.to",[73,81]],["psihologiadeazi.ro",73],["dubznetwork.com",[73,103]],["lowkeytech.com",75],["ubuntudde.com",75],["techsini.com",76],["allmovie.com",77],["sidereel.com",77],["appofmirror.com",79],["developpez.com",80],["scatch176duplicities.com",82],["voe-unblock.com",82],["phimdinhcao.com",83],["picallow.com",84],["brooklyneagle.com",84],["techgyd.com",84],["karsaz-law.com",84],["links.extralinks.casa",85],["theasianparent.com",85],["ssuathletics.com",86],["titulky.com",87],["dongphimmoiz.com",88],["investorvillage.com",89],["grandoldteam.com",90],["gamingsinners.com",90],["elitepvpers.com",91],["geeksforgeeks.org",92],["acupoffrench.com",93],["novelza.com",93],["novelpia.com",[94,95,96]],["viewsb.com",97],["nsfwzone.xyz",97],["dlmovies.link",97],["top1iq.com",98],["unlimitedfiles.xyz",99],["aztravels.net",100],["downfile.site",100],["memangbau.com",100],["trangchu.news",100],["revenue.land",101],["eplayer.click",103],["olacast.live",103],["ntuplay.xyz",103],["fucktube4k.com",104],["knightnoscanlation.com",104],["blog.cryptowidgets.net",104],["blog.insurancegold.in",104],["blog.wiki-topia.com",104],["blog.coinsvalue.net",104],["blog.cookinguide.net",104],["blog.freeoseocheck.com",104],["maxstream.video",106],["esologs.com",107],["fflogs.com",107],["swtorlogs.com",107],["warcraftlogs.com",107],["smokelearned.net",109],["nhentaihaven.org",110],["slideshare.net",111],["hidemywp.co",112],["memoryhackers.org",116],["steamcollector.com",117],["mgsm.pl",119],["camcaps.to",121],["vtplayer.net",121],["phimlongtieng.net",[122,123,124,125]],["weakstream.org",127],["jk-market.com",128],["vtbe.to",129],["vtube.network",129],["film4e.com",130],["zamundatv.com",130],["boston.com",131],["britannica.com",131],["cattime.com",131],["dogtime.com",131],["download.mokeedev.com",131],["freep.com",131],["ijr.com",131],["inquirer.net",131],["knowyourmeme.com",131],["nationalreview.com",131],["nofilmschool.com",131],["order-order.com",131],["savvytime.com",131],["techlicious.com",131],["technicpack.net",131],["thedraftnetwork.com",131],["wrestlezone.com",131],["xda-developers.com",131],["legacy.com",132],["firescans.xyz",133],["radartest.com",135],["daya-jewelry.com",136],["veev.to",137],["anime3s.com",[138,139]],["animet1.net",[138,139]],["japonhentai.com",140],["cyberalert.gr",141]]);

const entitiesMap = new Map([["mangaku",1],["dramaqu",1],["europixhd",[3,9]],["topeuropix",[3,9]],["dramacute",[3,44]],["depedlps",3],["mangatoon",3],["123movies",[3,54]],["gomovies",3],["fmovies",[3,54]],["otakudesu",3],["yoyofilmeys",3],["tvzingvn",47],["zingtvhd",47],["zingvntv",47],["sbflix",47],["vidsrc",134]]);

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
    const token = getRandomToken();
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
                return { matchAll: true, expect: true };
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
        offIdle(id) {
            if ( self.requestIdleCallback ) {
                return self.cancelIdleCallback(id);
            }
            return self.cancelAnimationFrame(id);
        }
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    safe.logLevel = scriptletGlobals.logLevel || 1;
    let lastLogType = '';
    let lastLogText = '';
    let lastLogTime = 0;
    safe.toLogText = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( text === lastLogText && type === lastLogType ) {
            if ( (Date.now() - lastLogTime) < 5000 ) { return; }
        }
        lastLogType = type;
        lastLogText = text;
        lastLogTime = Date.now();
        return text;
    };
    try {
        const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
        let bcBuffer = [];
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
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
    } catch(_) {
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            safe.log(`uBO ${text}`);
        };
    }
    return safe;
}

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.canDebug && details.debug;
}

function getRandomToken() {
    const safe = safeSelf();
    return safe.String_fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
}

/******************************************************************************/

const hnParts = [];
try {
    let origin = document.location.origin;
    if ( origin === 'null' ) {
        const origins = document.location.ancestorOrigins;
        for ( let i = 0; i < origins.length; i++ ) {
            origin = origins[i];
            if ( origin !== 'null' ) { break; }
        }
    }
    const pos = origin.lastIndexOf('://');
    if ( pos === -1 ) { return; }
    hnParts.push(...origin.slice(pos+3).split('.'));
}
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

uBOL_abortCurrentScript();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
