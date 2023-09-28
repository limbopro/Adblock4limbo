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
const uBOL_abortCurrentScript = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["$","advBlock"],["$","showAd"],["document.createElement","googletag"],["document.createElement","/admiral|String\\.fromCharCode\\(97,( )*?100,( )*?109,( )*?105,( )*?114,( )*?97,( )*?108\\)/"],["window.document.getElementById","s65c"],["getComputedStyle","adsbygoogle"],["setTimeout","none"],["onload","adsbygoogle"],["document.getElementById","').style.display='block';"],["RegExp","AdvBot"],["$","AdBlock"],["$","!document.getElementById(btoa"],["navigator.userAgent","AdBlockOn"],["document.write","ag_adBlockerDetected"],["document.createElement","adblockInfo"],["document.getElementById","blocking = true"],["document.addEventListener","adjs"],["$","can_show_ads"],["EventTarget.prototype.addEventListener","adblockalert_status"],["_lcpdfr","renderedAnnoyance"],["document.getElementById","ad blocker"],["document.createElement","pagead2.googlesyndication.com"],["document.addEventListener","/abisuq/"],["onload","ad.offsetWidth"],["atob","-10000px"],["document.getElementById",".style.display"],["document.getElementById","flex"],["document.getElementById","adblock"],["document.getElementById",".style.display="],["$","ad"],["$","Please disable \"ad blocker\""],["$","Adblock"],["document.getElementById","adback"],["document.querySelector","getBoundingClientRect"],["EventTarget.prototype.addEventListener","window.getComputedStyle"],["document.getElementById","/window\\.onclick/"],["document.getElementById","/!document\\.getElementById[\\s\\S]*?innerHTML[\\s\\S]*?insertBefore/"],["jQuery","donateBoxId"],["$popup","magnificPopup"],["$","#mod-popup"],["jQuery","covid19_modal"],["$","#saveBig"],["$","modal_newsletter"],["$","FBF.modalWindow.show"],["askPermission",""],["jQuery","surveyCookieName"],["DS_Popup_1"],["$","#myModal"],["document.onselectstart"],["document.oncontextmenu"],["$","contextmenu"],["disableselect","reEnable"],["$","hidden"],["$","adblock"],["document.getElementById","advert-tester"],["$","copyHolder"],["jQuery","#sign-up-popup"],["jQuery","overlay"],["document.onkeydown"],["document.getElementById","ad-blocker"],["document.getElementById",".ab_detected"],["jQuery","tweaker"],["jQuery","undefined"],["jQuery","ads"],["document.getElementById","block"],["document.addEventListener","alert"],["document.ondragstart","document.oncontextmenu"],["jQuery","document"],["document.getElementById","tester"],["document.getElementById","undefined"],["jQuery","restriction"],["document.oncontextmenu","document.onselectstart"],["message","clickIE"],["preventSelection"],["jQuery","contextmenu"],["jQuery","Drupal"],["$","blur"],["reEnable","killcopy"],["$","load"],["document.addEventListener","copy"],["document.getElementsByTagName","null"],["eval","abd"],["jQuery","ai_adb"],["document.getElementById","none"],["$","undefined"],["document.addEventListener"],["document.oncontextmenu","key"],["addEventListener","which"],["window.addEventListener","ctrlKey"],["document.createElement","adblock"],["document.getElementById","banner"],["document.getElementById","dataLayer"],["jQuery","disable_hot_keys"],["onload"],["document.oncopy"],["$","offsetHeight"],["disableSelection"],["jQuery","ai_check"],["onload","contextmenu"],["document.ondragstart"],["$","copy"],["document.getElementById","adblockerdetected"],["$","juicyads"],["$","showEmailNewsletterModal"],["$","btoa"],["disableSelection","reEnable"],["$",".height"],["eval","isNaN"],["document.addEventListener","contribute"],["addEventListener","ctrlKey"],["setTimeout","newsletterPopup"],["window.oncontextmenu"],["document.onmousedown"],["event","stopPropagation"],["soclInit"],["onload","setTimeout"],["document.addEventListener","preventDefault"],["setTimeout","offsetHeight"],["disable_copy"],["disable_hot_keys"],["jQuery","copy"],["addEventListener","adsbygoogle.length"],["check","debugger"],["document.addEventListener","document.onselectstart"],["matchMedia"],["$","adBlock"],["jQuery","keydown"],["jQuery","oncontextmenu"],["String.prototype.charCodeAt","ai_"],["jQuery","preventDefault"],["$","/getScript|error:/"],["addEventListener","keydown"],["nocontextmenu"],["document.getElementById","cookie"],["document.getElementById","isMoz"],["console.clear"],["oncontextmenu","keydown"],["document.oncontextmenu","nocontextmenu"],["document.onselectstart","disableselect"],["document.querySelector","adblock"],["$","fade"],["jQuery","stopPropagation"],["update_visit_count"],["$","test"],["$","Promise"],["showAdblockerModal"],["stopPrntScr"],["$","keydown"],["console.log","devtools"],["setInterval","playAlert"],["console.clear","contextmenu"],["devtoolsDetector"],["shortcut"],["console.log","document.referer"],["document.addEventListener","onkeydown"],["disableEnterKey"],["document.getElementsByTagName","unselectable"],["document.onkeypress"],["document.addEventListener","contextmenu"],["wccp_pro_iscontenteditable"],["document.body.oncontextmenu"],["nocontext"],["runPageBugger"],["eval","contextmenu"],["ab_tests"],["jQuery","userAgent"],["reEnable"],["jQuery","wccp_pro"],["clear_body_at_all_for_extentions"],["RegExp","googlebot"],["globalThis","DisableDevtool"],["document.querySelectorAll","adblock"],["checkAdblockBait"],["RegExp","debugger"],["oncontextmenu"],["navigator","devtools"],["setInterval","stateObject"],["setTimeout","debugger"],["jQuery","keyCode"],["$","debugger"],["jQuery","devtool"],["RegExp","contextmenu"],["AudiosL10n"],["document.createElement","admiral"],["document.getElementsByTagName","admiral"]];

const hostnamesMap = new Map([["minigames.mail.ru",0],["mmminigames.mail.ru",1],["stealthoptional.com",2],["gamerant.com",2],["pcguide.com",2],["qtoptens.com",2],["mangasee123.com",2],["247sports.com",3],["sporcle.com",3],["fresnobee.com",3],["fajnegotowanie.pl",3],["esportstales.com",3],["tiger-algebra.com",3],["blackenterprise.com",3],["crooksandliars.com",3],["cmacapps.com",3],["cwtv.com",3],["feral-heart.com",3],["gamerevolution.com",3],["gktoday.in",3],["informazionefiscale.it",3],["inquirer.net",[3,183]],["interestingengineering.com",3],["leitesculinaria.com",3],["nofilmschool.com",[3,183]],["obsev.com",3],["pleated-jeans.com",3],["post-gazette.com",3],["practicalclinicalskills.com",3],["ranker.com",3],["sanfoundry.com",3],["simpleflying.com",3],["thegatewaypundit.com",3],["timelessleaf.com",3],["viraliq.com",3],["winhelponline.com",3],["turk-debrid.net",4],["steamcollector.com",[5,171]],["gohatori.com",6],["chaynikam.info",7],["winiso.pl",8],["8muses.com",9],["allmusic.com",10],["babiato.co",11],["rangerboard.com",11],["multics.eu",11],["smokingmeatforums.com",[11,104]],["blackhatworld.com",12],["derivative-calculator.net",13],["ebookdz.com",14],["flightsim.to",15],["givee.club",16],["gputracker.eu",17],["ispot.tv",18],["lcpdfr.com",[19,10]],["liveonsat.com",20],["tt1069.com",20],["lowcygier.pl",21],["mangacanblog.com",22],["oglaszamy24.pl",23],["oneman.gr",24],["picmix.com",25],["pixiz.com",26],["portfolio.hu",27],["rocket-league.com",28],["rutab.net",29],["savevideo.me",30],["sharree.com",[31,106]],["techobest.com",32],["textstudio.co",33],["topbestalternatives.com",34],["topbusiness24.ru",35],["mydomsam.ru",35],["hubuhu.ru",35],["moysadinfo.ru",35],["mybusinessplus.ru",35],["dukand.ru",35],["mydizayn.ru",35],["polzadom.ru",35],["umnodachnik.ru",35],["delnyesovety.ru",35],["soverhenie.ru",35],["mirinteresa.ru",35],["uskorit.ru",35],["dskyar.ru",35],["biscand.ru",35],["smartid24.ru",35],["stroysaminfo.ru",35],["topsovety.ru",35],["sotsvetiya.ru",35],["imdaily.ru",35],["turizmnaok.ru",35],["zdorovyobrazzhizni.ru",35],["kinomann.ru",35],["techinfolife.ru",35],["dommoysad.ru",35],["rteinfo.ru",35],["psisovety.ru",35],["kvilit.ru",35],["speshit.ru",35],["ollss.ru",35],["notebookcheck-hu.com",36],["notebookcheck-tr.com",36],["notebookcheck-ru.com",36],["palestinechronicle.com",37],["granadadigital.es",38],["shopxp.com.br",39],["staradvertiser.com",40],["iprovpn.com",41],["universalfreecourse.com",42],["downloadfreecourse.com",42],["firsatbufirsat.com",43],["liga.net",44],["developer.nvidia.com",45],["loksado.com",46],["training.javatpoint.com",47],["mimaletadepeliculas.blogspot.com",48],["clk.sh",[48,49]],["shrinkearn.com",[48,49]],["luoghidavedere.it",48],["practicetestgeeks.com",[48,49]],["gagetmatome.com",48],["verdadeiroolhar.pt",48],["librospreuniversitariospdf.blogspot.com",[48,50,58,93]],["mt-milcom.blogspot.com",[48,49]],["interviewgig.com",48],["artesacro.org",48],["dailynewsview.com",48],["dailynews.us.com",48],["e-sushi.fr",48],["evasion-online.com",48],["exclusifvoyages.com",48],["f1fastlap.blogspot.com",[48,49]],["naukridisha.in",48],["nydailyquote.com",48],["ouasafat.com",48],["reflectim.fr",[48,49]],["top.howfn.com",48],["kangmartho.com",48],["gnt24365.net",[48,49]],["tvstreampf.xyz",[48,99]],["pvstreams.com",[48,49,58,74]],["7misr4day.com",[48,49]],["fmhikayeleri.com",49],["tinyppt.com",49],["hindi-gk.com",49],["androidmtk.com",49],["badayak.com",49],["runningnews.gr",[49,51]],["kirannewsagency.com",49],["starsunfolded.com",49],["satcesc.com",49],["them4ufree.info",49],["baattv.com",49],["psychologiazycia.com",[49,51]],["tunovelaligera.com",[49,79]],["yeane.org",49],["mtbtutoriales.com",49],["answersafrica.com",49],["felico.pl",49],["legionprogramas.org",49],["serwis-zamkow.com",49],["hebrew4christians.com",49],["jpopsingles.eu",[49,58]],["ghanatvon.com",49],["kusonime.com",[49,58,87]],["otakudesu.org",[49,88]],["idmod.xyz",49],["indcit.com",49],["androidmakale.com",49],["mongri.net",49],["download.ipeenk.com",49],["doranobi-fansub.id",[49,92]],["alexeiportableapp.blogspot.com",49],["oparana.com.br",49],["lolle21.com",49],["mangaid.click",49],["manianomikata.com",49],["tfp.is",49],["dassen-azara4.com",49],["pentruea.com",49],["neyrologos.gr",49],["freerapidleechlist.blogspot.com",49],["ggeguide.com",49],["tanya-tanya.com",[49,105]],["lalawin.com",49],["audioreview.m1001.coreserver.jp",[49,105]],["seikatsu-hyakka.com",49],["elizabeth-mitchell.org",[49,109]],["blasianluvforever.com",49],["movieston.com",[49,74]],["deseneledublate.com",49],["eduardo-monica.com",49],["fmzm.xyz",49],["j-island.net",49],["msubplix.com",49],["upstream.to",49],["ilclubdellericette.it",49],["daum.net",49],["newsforbolly.org",49],["cablegratis.online",49],["dztechphone.com",49],["funivie.org",49],["goodbakery.ru",[49,74]],["ifdreamscametrue.com",[49,120]],["juegosdetiempolibre.org",49],["musicindustryhowto.com",[49,85,99]],["sdelatotoplenie.ru",[49,94]],["sachonthi.com",49],["zdravenportal.eu",[49,123]],["thezealots.org",49],["deportealdia.live",49],["hulnews.top",49],["truyenbanquyen.com",49],["globaledu.jp",49],["lataifas.ro",[49,127]],["blisseyhusband.in",[49,74]],["openfinanza.it",[49,99]],["followmikewynn.com",49],["starbene.it",49],["bimiacg.net",49],["diaforetiko.gr",49],["tchadcarriere.com",49],["info-beihilfe.de",49],["zgywyd.cn",49],["mercenaryenrollment.com",49],["wawlist.com",[49,58]],["cristelageorgescu.ro",49],["crunchyscan.fr",49],["www-daftarharga.blogspot.com",49],["koszalincity.pl",[49,58]],["theghostinmymachine.com",49],["ilovevaldinon.it",49],["aileen-novel.online",[49,119]],["bumigemilang.com",[49,119]],["bingotingo.com",49],["stream.bunkr.is",49],["blueraindrops.com",49],["sekaikomik.live",49],["privivkainfo.ru",49],["apps2app.com",49],["bestjavporn.com",49],["mm9841.cc",49],["myoplay.club",49],["bpcj.or.jp",49],["cdramalove.com",49],["outidesigoto.com",49],["xemphimaz.com",49],["gourmetscans.net",[49,159]],["awebstories.com",49],["zgbk.com",49],["clujust.ro",[49,99]],["stockpokeronline.com",49],["indianhealthyrecipes.com",[49,58]],["stiridinromania.ro",49],["kooora4lives.net",49],["kooora4livs.com",49],["ferroviando.com.br",[49,166,167,168]],["counciloflove.com",[49,166,167,168]],["infokik.com",[49,166,167,168]],["kulinarnastronamocy.pl",[49,166,167,168]],["jafekri.com",[49,166,167,168]],["paidiatreio.gr",[49,79]],["workhouses.org.uk",49],["dollarvr.com",[49,99]],["newsme.gr",[49,99]],["daily-tohoku.news",[49,96]],["descopera.ro",49],["velicu.eu",49],["arenavalceana.ro",[49,74]],["firmwarefile.com",49],["asianexpress.co.uk",49],["best4hack.blogspot.com",49],["certificationexamanswers.890m.com",49],["cookhero.gr",49],["creative-chemistry.org.uk",49],["deutschaj.com",49],["divineyogaschool.blogspot.com",49],["fabioambrosi.it",49],["flory4all.com",49],["fv2freegifts.org",49],["geniusjw.com",49],["ideas0419.com",49],["jeyran.net",49],["ktm2day.com",49],["letsdownloads.com",49],["limametti.com",49],["luyenthithukhoa.vn",49],["otakukan.com",49],["ribbelmonster.de",49],["untitle.org",49],["uptimeside.webnode.gr",49],["usmleexperiences.review",49],["zoommastory.com",49],["urbanbrush.net",49],["audiotools.in",49],["raindropteamfan.com",49],["manhwahentai.me",49],["ph.ontools.net",49],["scarysymptoms.com",[49,159]],["musicallyvideos.com",49],["evz.ro",50],["visionias.net",50],["safetxt.net",50],["javbest.xyz",50],["javbix.com",50],["javgrab.com",50],["goalup.live",50],["hatsukimanga.com",50],["47news.jp",50],["japanxxxmovie.com",50],["sexpox.com",50],["ibomma.pw",50],["aepos.ap.gov.in",50],["ssphim.net",[50,58]],["10000recipe.com",50],["mcocguideblog.com",51],["singingdalong.blogspot.com",51],["tecnotutoshd.net",51],["multifilemirror.com",52],["opensubtitles.org",53],["eca-anime.net",54],["braziljournal.com",55],["flyertalk.com",10],["searchenginewatch.com",56],["oggiscuola.com",57],["sabishiidesu.com",58],["banglainsider.com",[58,77]],["animesanka.com",58],["lendagames.com",58],["vinaurl.blogspot.com",[58,124]],["utorrentgamesps2.blogspot.com",58],["articlesmania.me",58],["aksensei.com",58],["dropgalaxy.com",58],["allcryptoz.net",58],["crewbase.net",58],["crewus.net",58],["shinbhu.net",58],["shinchu.net",58],["thumb8.net",58],["thumb9.net",58],["topcryptoz.net",58],["uniqueten.net",58],["ultraten.net",58],["krunkercentral.com",58],["desijugar.net",58],["adslink.pw",58],["genesistls.com",[58,99]],["senpaiediciones.com",[58,99]],["procrackerz.org",[58,99]],["kashmirobserver.net",59],["cathouseonthekings.com",60],["winaero.com",61],["centrumher.eu",62],["japancamerahunter.com",63],["airlinercafe.com",63],["thegraillords.net",64],["worldscientific.com",64],["videohelp.com",64],["upsrtconline.co.in",65],["qualityfilehosting.com",66],["booksmedicos.org",67],["forum.politz.com.br",68],["siliconinvestor.com",69],["space-engineers.de",69],["coffeeforums.co.uk",69],["anime2you.de",69],["majorgeeks.com",69],["jobsbotswana.info",70],["npnews24.com",71],["fordogtrainers.pl",[72,73]],["polskacanada.com",74],["fantricks.com",74],["blog.kwick.de",74],["selfstudyhistory.com",[74,99]],["yeuphimmoik.com",74],["repack-games.com",74],["delicateseliterare.ro",74],["wpplugins.tips",74],["verselemzes.hu",[74,178]],["sqlserveregitimleri.com",74],["gezimanya.com",75],["athletic.net",76],["playonlinux.com",78],["bitblokes.de",80],["bold.dk",81],["pureinfotech.com",82],["almasdarnews.com",82],["casertace.net",82],["civildigital.com",82],["lesmoutonsenrages.fr",82],["venusarchives.com",82],["verpornocomic.com",82],["balticlivecam.com",83],["molineuxmix.co.uk",84],["yaledailynews.com",84],["canondrivers.org",[85,86]],["forum.nlmod.net",89],["includehelp.com",90],["u.gg",91],["routenote.com",93],["themosvagas.com.br",[93,131]],["nekopoi.web.id",94],["world4.eu",[94,118,119]],["mt07-forum.de",95],["auto-treff.com",95],["telefon-treff.de",95],["dodge-forum.eu",95],["altranotizia.it",96],["hearthstone-decks.net",97],["full-anime.fr",27],["nonton78.com",98],["sbfast.com",98],["vupload.com",98],["opportunitydesk.org",99],["selfstudyanthro.com",99],["renditepassive.net",99],["androidtvbox.eu",99],["flinsetyadi.com",[99,105]],["rawneix.in",[99,155,156]],["the-masters-voice.com",[99,105]],["activationkeys.co",99],["pandurul.ro",100],["masrawy.com",101],["milfzr.com",102],["phrasemix.com",103],["pitesti24.ro",105],["samsungtechwin.com",105],["cours-de-droit.net",105],["iptv4best.com",105],["blogvisaodemercado.pt",105],["kapitalis.com",105],["tiempo.hn",105],["winmeen.com",105],["ibps.in",105],["visse.com.br",105],["javsubtitle.co",105],["licensekeys.org",105],["mediahiburan.my",105],["tipssehatcantik.com",105],["anime-drama.jp",105],["jbjbgame.com",105],["viatasisanatate.com",105],["ziarulargesul.ro",105],["globaldefensecorp.com",105],["gossipnextdoor.com",105],["coffeeapps.ir",105],["media.framu.world",105],["immobiliaremia.com",105],["colegiosconcertados.info",105],["bigdatauni.com",105],["rukim.id",105],["visefierbinti.ro",105],["cyberkrafttraining.com",105],["theaircurrent.com",105],["nocturnetls.net",105],["clockks.com",105],["ananda-yoga.ro",105],["poolpiscina.com",105],["infodifesa.it",105],["getective.com",105],["formatatmak.com",105],["drkrok.com",105],["alphagirlreviews.com",105],["kitchennovel.com",105],["voxvalachorum.ro",105],["cracksone.com",105],["day-hoc.org",105],["onlineonderdelenshop.nl",105],["primicia.com.ve",105],["tech-recipes.com",105],["postcourier.com.pg",105],["afrikmag.com",105],["maduras.vip",105],["aprendeinglessila.com",105],["kicknews.today",105],["koalasplayground.com",105],["hellokpop.com",105],["hayatbilgileri.com",105],["moneyexcel.com",105],["placementstore.com",105],["neuroteam-metz.de",105],["codedosa.com",105],["liveyourmaths.com",105],["newspao.gr",105],["ieltsliz.com",105],["programasvirtualespc.net",105],["tempatwisataseru.com",105],["moneyguru.co",106],["abola.pt",31],["unixhow.com",107],["wikihow.com",108],["analizy.pl",110],["phimmedia.info",111],["zeeebatch.blogspot.com",112],["sokolow-mlp.pl",112],["japan-fans.com",112],["ohmygirl.ml",113],["cissamagazine.com.br",114],["phoronix.com",115],["observatoriodocinema.uol.com.br",116],["salidzini.lv",117],["portalcriatividade.com.br",[118,161]],["kitguru.net",121],["lvturbo.com",122],["sbbrisk.com",122],["sbface.com",122],["sbspeed.com",122],["streamsb.net",122],["itscybertech.com",122],["whatfontis.com",125],["tritinia.com",126],["sportnews.to",[126,134]],["psihologiadeazi.ro",126],["dubznetwork.com",[126,157]],["lowkeytech.com",128],["ubuntudde.com",128],["techsini.com",129],["allmovie.com",130],["sidereel.com",130],["appofmirror.com",132],["developpez.com",133],["scatch176duplicities.com",135],["voe-unblock.com",135],["phimdinhcao.com",136],["picallow.com",137],["freestreams-live1.com",137],["links.extralinks.casa",138],["ssuathletics.com",139],["titulky.com",140],["dongphimmoiz.com",141],["investorvillage.com",142],["grandoldteam.com",143],["gamingsinners.com",143],["elitepvpers.com",144],["geeksforgeeks.org",145],["acupoffrench.com",146],["novelza.com",146],["novelpia.com",[147,148,149]],["viewsb.com",150],["dizipal210.com",[150,151]],["dizipal211.com",[150,151]],["dizipal222.com",[150,151]],["dizipal223.com",[150,151]],["dizipal229.com",[150,151]],["dizipal232.com",[150,151]],["dizipal233.com",[150,151]],["dizipal234.com",[150,151]],["dizipal235.com",[150,151]],["dizipal236.com",[150,151]],["dizipal237.com",[150,151]],["dizipal238.com",[150,151]],["dizipal239.com",[150,151]],["dizipal240.com",[150,151]],["dizipal241.com",[150,151]],["dizipal242.com",[150,151]],["dizipal243.com",[150,151]],["dizipal244.com",[150,151]],["dizipal246.com",[150,151]],["dizipal247.com",[150,151]],["dizipal248.com",[150,151]],["dizipal249.com",[150,151]],["nsfwzone.xyz",150],["dlmovies.link",150],["top1iq.com",152],["unlimitedfiles.xyz",153],["aztravels.net",154],["downfile.site",154],["memangbau.com",154],["trangchu.news",154],["revenue.land",155],["eplayer.click",157],["olacast.live",157],["ntuplay.xyz",157],["fucktube4k.com",158],["knightnoscanlation.com",158],["maxstream.video",160],["smokelearned.net",162],["nhentaihaven.org",163],["slideshare.net",164],["hidemywp.co",165],["bolugundem.com",166],["memoryhackers.org",169],["turkbettv154.com",170],["mgsm.pl",172],["camcaps.to",173],["vtplayer.net",173],["phimlongtieng.net",[174,175,176,177]],["weakstream.org",179],["jk-market.com",180],["vtbe.net",181],["film4e.com",182],["zamundatv.com",182],["boston.com",183],["britannica.com",183],["cattime.com",183],["dogtime.com",183],["download.mokeedev.com",183],["freep.com",183],["ijr.com",183],["knowyourmeme.com",183],["nationalreview.com",183],["order-order.com",183],["savvytime.com",183],["techlicious.com",183],["technicpack.net",183],["thedraftnetwork.com",183],["wrestlezone.com",183],["xda-developers.com",183],["legacy.com",184]]);

const entitiesMap = new Map([["notebookcheck",36],["marapcana",49],["europixhd",[49,58]],["topeuropix",[49,58]],["dramacute",[49,96]],["depedlps",49],["mangatoon",49],["123movies",[49,105]],["gomovies",49],["fmovies",[49,105]],["otakudesu",49],["yoyofilmeys",49],["mangaku",50],["dramaqu",50],["tvzingvn",98],["zingtvhd",98],["zingvntv",98],["sbflix",98]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function abortCurrentScript(...args) {
    runAtHtmlElement(( ) => {
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
    const log = shouldLog(extraArgs);
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
            if ( debug === 'nomatch' || debug === 'all' ) { debugger; }  // jshint ignore: line
            return;
        }
        if ( log && e.src !== '' ) { safe.uboLog(`matched src: ${e.src}`); }
        const scriptText = getScriptText(e);
        if ( reNeedle.test(scriptText) === false ) {
            if ( debug === 'nomatch' || debug === 'all' ) { debugger; }  // jshint ignore: line
            return;
        }
        if ( log ) { safe.uboLog(`matched script text: ${scriptText}`); }
        if ( debug === 'match' || debug === 'all' ) { debugger; }  // jshint ignore: line
        throw new ReferenceError(exceptionToken);
    };
    if ( debug === 'install' ) { debugger; }  // jshint ignore: line
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
        if ( log ) { safe.uboLog(ex); }
    }
}

function runAtHtmlElement(fn) {
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

function safeSelf() {
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
    }
    const self = globalThis;
    const safe = {
        'Error': self.Error,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'jsonParse': self.JSON.parse.bind(self.JSON),
        'jsonStringify': self.JSON.stringify.bind(self.JSON),
        'log': console.log.bind(console),
        uboLog(...args) {
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
            }
            const expect = (options.canNegate === true && pattern.startsWith('!') === false);
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
        patternToRegex(pattern, flags = undefined) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
            }
            try {
                return new RegExp(match[1], match[2] || flags);
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

// Not Firefox
if ( typeof wrappedJSObject !== 'object' ) {
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
