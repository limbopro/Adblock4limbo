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

const argsList = [["$","advBlock"],["$","showAd"],["document.createElement","/admiral|String\\.fromCharCode\\(97,( )*?100,( )*?109,( )*?105,( )*?114,( )*?97,( )*?108\\)|a%64%6d%69%72%61%6c|adm%69%72%61l|%61%64m%69r%61l|-engaged[\\s\\S]*?googletag[\\s\\S]*?decodeURI/"],["document.createElement","googletag"],["window.document.getElementById","s65c"],["getComputedStyle","adsbygoogle"],["setTimeout","none"],["onload","adsbygoogle"],["document.getElementById","').style.display='block';"],["RegExp","AdvBot"],["$","AdBlock"],["$","!document.getElementById(btoa"],["navigator.userAgent","AdBlockOn"],["document.write","ag_adBlockerDetected"],["document.createElement","adblockInfo"],["document.getElementById","blocking = true"],["document.addEventListener","adjs"],["$","can_show_ads"],["EventTarget.prototype.addEventListener","adblockalert_status"],["_lcpdfr","renderedAnnoyance"],["document.getElementById","ad blocker"],["document.createElement","pagead2.googlesyndication.com"],["document.addEventListener","/abisuq/"],["onload","ad.offsetWidth"],["atob","-10000px"],["document.getElementById",".style.display"],["document.getElementById","flex"],["document.getElementById","adblock"],["document.getElementById",".style.display="],["$","ad"],["$","Please disable \"ad blocker\""],["$","Adblock"],["document.getElementById","adback"],["document.querySelector","getBoundingClientRect"],["EventTarget.prototype.addEventListener","window.getComputedStyle"],["document.getElementById","/window\\.onclick/"],["document.getElementById","/!document\\.getElementById[\\s\\S]*?innerHTML[\\s\\S]*?insertBefore/"],["jQuery","donateBoxId"],["$popup","magnificPopup"],["$","#mod-popup"],["jQuery","covid19_modal"],["$","#saveBig"],["$","modal_newsletter"],["$","FBF.modalWindow.show"],["askPermission",""],["jQuery","surveyCookieName"],["DS_Popup_1"],["$","#myModal"],["document.onselectstart"],["document.oncontextmenu"],["$","contextmenu"],["disableselect","reEnable"],["$","hidden"],["document.getElementById","advert-tester"],["document.oncopy"],["jQuery","#sign-up-popup"],["jQuery","overlay"],["document.onkeydown"],["document.getElementById","ad-blocker"],["document.getElementById",".ab_detected"],["jQuery","tweaker"],["jQuery","undefined"],["jQuery","ads"],["document.getElementById","block"],["document.addEventListener","alert"],["document.ondragstart","document.oncontextmenu"],["jQuery","document"],["document.getElementById","undefined"],["jQuery","restriction"],["document.oncontextmenu","document.onselectstart"],["message","clickIE"],["preventSelection"],["jQuery","contextmenu"],["jQuery","Drupal"],["$","blur"],["reEnable","killcopy"],["$","load"],["document.addEventListener","copy"],["document.getElementsByTagName","null"],["eval","abd"],["jQuery","ai_adb"],["document.getElementById","none"],["$","undefined"],["document.addEventListener"],["document.oncontextmenu","key"],["addEventListener","which"],["window.addEventListener","ctrlKey"],["document.createElement","adblock"],["document.getElementById","banner"],["document.getElementById","dataLayer"],["jQuery","disable_hot_keys"],["onload"],["$","offsetHeight"],["disableSelection"],["jQuery","ai_check"],["onload","contextmenu"],["document.ondragstart"],["$","copy"],["document.getElementById","adblockerdetected"],["$","juicyads"],["$","showEmailNewsletterModal"],["$","btoa"],["disableSelection","reEnable"],["$",".height"],["eval","isNaN"],["document.addEventListener","contribute"],["addEventListener","ctrlKey"],["setTimeout","newsletterPopup"],["window.oncontextmenu"],["document.onmousedown"],["event","stopPropagation"],["soclInit"],["onload","setTimeout"],["document.addEventListener","preventDefault"],["setTimeout","offsetHeight"],["disable_copy"],["disable_hot_keys"],["jQuery","copy"],["addEventListener","adsbygoogle.length"],["check","debugger"],["document.addEventListener","document.onselectstart"],["matchMedia"],["$","adBlock"],["jQuery","keydown"],["jQuery","oncontextmenu"],["String.prototype.charCodeAt","ai_"],["jQuery","preventDefault"],["$","/getScript|error:/"],["addEventListener","keydown"],["nocontextmenu"],["document.getElementById","cookie"],["document.getElementById","isMoz"],["console.clear"],["oncontextmenu","keydown"],["document.oncontextmenu","nocontextmenu"],["document.onselectstart","disableselect"],["document.querySelector","adblock"],["$","fade"],["jQuery","stopPropagation"],["update_visit_count"],["$","test"],["$","Promise"],["showAdblockerModal"],["stopPrntScr"],["$","keydown"],["console.log","devtools"],["setInterval","playAlert"],["console.clear","contextmenu"],["devtoolsDetector"],["shortcut"],["console.log","document.referer"],["document.addEventListener","onkeydown"],["disableEnterKey"],["document.getElementsByTagName","unselectable"],["document.onkeypress"],["document.addEventListener","contextmenu"],["wccp_pro_iscontenteditable"],["document.body.oncontextmenu"],["nocontext"],["runPageBugger"],["eval","contextmenu"],["ab_tests"],["jQuery","userAgent"],["reEnable"],["jQuery","wccp_pro"],["clear_body_at_all_for_extentions"],["RegExp","googlebot"],["globalThis","DisableDevtool"],["document.querySelectorAll","adblock"],["checkAdblockBait"],["RegExp","debugger"],["oncontextmenu"],["navigator","devtools"],["setInterval","stateObject"],["setTimeout","debugger"],["jQuery","keyCode"],["$","debugger"],["jQuery","devtool"],["RegExp","contextmenu"],["AudiosL10n"],["document.createElement","admiral"],["document.getElementsByTagName","admiral"],["jQuery","hmwp_is_devtool"]];

const hostnamesMap = new Map([["minigames.mail.ru",0],["mmminigames.mail.ru",1],["mlive.com",2],["oregonlive.com",2],["localnews8.com",2],["tempumail.com",2],["miamiherald.com",2],["nbcsports.com",2],["touchtapplay.com",2],["realsport101.com",2],["gameskinny.com",2],["attackofthefanboy.com",2],["pcinvasion.com",2],["escapistmagazine.com",2],["destructoid.com",2],["progameguides.com",2],["dotesports.com",2],["thesportster.com",2],["screenrant.com",2],["syracuse.com",2],["allmovie.com",[2,127]],["racinggames.gg",2],["ksdk.com",2],["boredpanda.com",2],["sidereel.com",[2,127]],["primagames.com",2],["antyradio.pl",2],["nypost.com",2],["allmusic.com",[2,10]],["visualcapitalist.com",2],["kxly.com",2],["thethings.com",2],["applevalleynewsnow.com",2],["minecraft-schematics.com",2],["koamnewsnow.com",2],["insider-gaming.com",2],["ktvz.com",2],["movieweb.com",2],["collider.com",2],["pocket-lint.com",2],["hotcars.com",2],["topspeed.com",2],["thegamer.com",2],["makeuseof.com",2],["cbr.com",2],["kare11.com",2],["calculator-online.net",2],["givemesport.com",2],["milestomemories.com",2],["epicstream.com",2],["radiozet.pl",2],["charlieintel.com",2],["momtastic.com",2],["stealthoptional.com",[2,3]],["sherdog.com",2],["timesofisrael.com",2],["gfinityesports.com",2],["teknolojioku.com",2],["siliconera.com",2],["c-span.org",2],["news8000.com",2],["twinfinite.net",2],["pwinsider.com",2],["pastes.io",2],["cheatsheet.com",2],["sportscasting.com",2],["wnd.com",2],["deseret.com",2],["pocketnow.com",2],["10play.com.au",2],["knowyourmeme.com",[2,180]],["titantv.com",2],["hfboards.com",2],["comingsoon.net",2],["playstationlifestyle.net",2],["worldpopulationreview.com",2],["nationalreview.com",[2,180]],["wrestlezone.com",[2,180]],["dualshockers.com",2],["thethaiger.com",2],["worldtravelguide.net",2],["sportskeeda.com",2],["gamerjournalist.com",2],["voetbalzone.nl",2],["theurbanlist.com",2],["golf.com",2],["xda-developers.com",[2,180]],["metv.com",2],["nbcnews.com",2],["wegotthiscovered.com",2],["savvytime.com",[2,180]],["nbcsportsedge.com",2],["haber3.com",2],["androidpolice.com",2],["news.com.au",2],["forums.radioreference.com",2],["boston.com",[2,180]],["reviewgeek.com",2],["technicpack.net",[2,180]],["theblaze.com",2],["morfix.co.il",2],["factinate.com",2],["phonearena.com",2],["stripes.com",2],["weatherbug.com",2],["patheos.com",2],["online-tech-tips.com",2],["digitaltrends.com",2],["helpdeskgeek.com",2],["britannica.com",[2,180]],["superherohype.com",2],["news24.com",2],["pgatour.com",2],["wral.com",2],["gamepur.com",2],["fin24.com",2],["geekzone.co.nz",2],["upi.com",2],["thewindowsclub.com",2],["androidcure.com",2],["secondnexus.com",2],["health24.com",2],["wokesloth.com",2],["sport24.co.za",2],["onmsft.com",2],["cultofmac.com",2],["washingtontimes.com",2],["cleveland.com",2],["howtogeek.com",2],["247sports.com",2],["sporcle.com",2],["fresnobee.com",2],["fajnegotowanie.pl",2],["esportstales.com",2],["tiger-algebra.com",2],["blackenterprise.com",2],["crooksandliars.com",2],["cmacapps.com",2],["cwtv.com",2],["feral-heart.com",2],["gamerevolution.com",2],["gktoday.in",2],["informazionefiscale.it",2],["inquirer.net",[2,180]],["interestingengineering.com",2],["leitesculinaria.com",2],["nofilmschool.com",[2,180]],["obsev.com",2],["pleated-jeans.com",2],["post-gazette.com",2],["practicalclinicalskills.com",2],["ranker.com",2],["sanfoundry.com",2],["simpleflying.com",2],["thegatewaypundit.com",2],["timelessleaf.com",2],["viraliq.com",2],["winhelponline.com",2],["gamerant.com",3],["pcguide.com",3],["qtoptens.com",3],["mangasee123.com",3],["turk-debrid.net",4],["steamcollector.com",[5,168]],["gohatori.com",6],["chaynikam.info",7],["winiso.pl",8],["8muses.com",9],["babiato.co",11],["rangerboard.com",11],["multics.eu",11],["smokingmeatforums.com",[11,101]],["blackhatworld.com",12],["derivative-calculator.net",13],["ebookdz.com",14],["flightsim.to",15],["givee.club",16],["gputracker.eu",17],["ispot.tv",18],["lcpdfr.com",[19,10]],["liveonsat.com",20],["tt1069.com",20],["lowcygier.pl",21],["mangacanblog.com",22],["oglaszamy24.pl",23],["oneman.gr",24],["picmix.com",25],["pixiz.com",26],["portfolio.hu",27],["rocket-league.com",28],["rutab.net",29],["savevideo.me",30],["sharree.com",[31,103]],["techobest.com",32],["textstudio.co",33],["topbestalternatives.com",34],["topbusiness24.ru",35],["mydomsam.ru",35],["hubuhu.ru",35],["moysadinfo.ru",35],["mybusinessplus.ru",35],["dukand.ru",35],["mydizayn.ru",35],["polzadom.ru",35],["umnodachnik.ru",35],["delnyesovety.ru",35],["soverhenie.ru",35],["mirinteresa.ru",35],["uskorit.ru",35],["dskyar.ru",35],["biscand.ru",35],["smartid24.ru",35],["stroysaminfo.ru",35],["topsovety.ru",35],["sotsvetiya.ru",35],["imdaily.ru",35],["turizmnaok.ru",35],["zdorovyobrazzhizni.ru",35],["kinomann.ru",35],["techinfolife.ru",35],["dommoysad.ru",35],["rteinfo.ru",35],["psisovety.ru",35],["kvilit.ru",35],["speshit.ru",35],["ollss.ru",35],["notebookcheck-hu.com",36],["notebookcheck-tr.com",36],["notebookcheck-ru.com",36],["palestinechronicle.com",37],["granadadigital.es",38],["shopxp.com.br",39],["staradvertiser.com",40],["iprovpn.com",41],["universalfreecourse.com",42],["downloadfreecourse.com",42],["firsatbufirsat.com",43],["liga.net",44],["developer.nvidia.com",45],["loksado.com",46],["training.javatpoint.com",47],["mimaletadepeliculas.blogspot.com",48],["clk.sh",[48,49]],["shrinkearn.com",[48,49]],["luoghidavedere.it",48],["practicetestgeeks.com",[48,49]],["gagetmatome.com",48],["verdadeiroolhar.pt",48],["librospreuniversitariospdf.blogspot.com",[48,50,57,91]],["mt-milcom.blogspot.com",[48,49]],["interviewgig.com",48],["artesacro.org",48],["dailynewsview.com",48],["dailynews.us.com",48],["e-sushi.fr",48],["evasion-online.com",48],["exclusifvoyages.com",48],["f1fastlap.blogspot.com",[48,49]],["naukridisha.in",48],["nydailyquote.com",48],["ouasafat.com",48],["reflectim.fr",[48,49]],["top.howfn.com",48],["kangmartho.com",48],["gnt24365.net",[48,49]],["tvstreampf.xyz",[48,96]],["pvstreams.com",[48,49,57,72]],["7misr4day.com",[48,49]],["fmhikayeleri.com",49],["tinyppt.com",49],["hindi-gk.com",49],["androidmtk.com",49],["badayak.com",49],["runningnews.gr",[49,51]],["kirannewsagency.com",49],["starsunfolded.com",49],["satcesc.com",49],["them4ufree.info",49],["baattv.com",49],["psychologiazycia.com",[49,51]],["tunovelaligera.com",[49,77]],["yeane.org",49],["mtbtutoriales.com",49],["answersafrica.com",49],["felico.pl",49],["legionprogramas.org",49],["serwis-zamkow.com",49],["hebrew4christians.com",49],["jpopsingles.eu",[49,57]],["ghanatvon.com",49],["kusonime.com",[49,57,85]],["otakudesu.org",[49,86]],["idmod.xyz",49],["indcit.com",49],["androidmakale.com",49],["mongri.net",49],["download.ipeenk.com",49],["doranobi-fansub.id",[49,90]],["alexeiportableapp.blogspot.com",49],["oparana.com.br",49],["lolle21.com",49],["mangaid.click",49],["manianomikata.com",49],["tfp.is",49],["dassen-azara4.com",49],["pentruea.com",49],["neyrologos.gr",49],["freerapidleechlist.blogspot.com",49],["ggeguide.com",49],["tanya-tanya.com",[49,102]],["lalawin.com",49],["audioreview.m1001.coreserver.jp",[49,102]],["seikatsu-hyakka.com",49],["elizabeth-mitchell.org",[49,106]],["blasianluvforever.com",49],["movieston.com",[49,72]],["eduardo-monica.com",49],["fmzm.xyz",49],["j-island.net",49],["msubplix.com",49],["upstream.to",49],["ilclubdellericette.it",49],["daum.net",49],["newsforbolly.org",49],["cablegratis.online",49],["dztechphone.com",49],["funivie.org",49],["goodbakery.ru",[49,72]],["ifdreamscametrue.com",[49,117]],["juegosdetiempolibre.org",49],["musicindustryhowto.com",[49,83,96]],["sdelatotoplenie.ru",[49,54]],["sachonthi.com",49],["zdravenportal.eu",[49,120]],["thezealots.org",49],["deportealdia.live",49],["hulnews.top",49],["truyenbanquyen.com",49],["globaledu.jp",49],["lataifas.ro",[49,124]],["blisseyhusband.in",[49,72]],["openfinanza.it",[49,96]],["followmikewynn.com",49],["starbene.it",49],["bimiacg.net",49],["diaforetiko.gr",49],["tchadcarriere.com",49],["info-beihilfe.de",49],["zgywyd.cn",49],["mercenaryenrollment.com",49],["wawlist.com",[49,57]],["cristelageorgescu.ro",49],["crunchyscan.fr",49],["www-daftarharga.blogspot.com",49],["koszalincity.pl",[49,57]],["theghostinmymachine.com",49],["ilovevaldinon.it",49],["aileen-novel.online",[49,116]],["bumigemilang.com",[49,116]],["bingotingo.com",49],["stream.bunkr.is",49],["blueraindrops.com",49],["sekaikomik.live",49],["privivkainfo.ru",49],["apps2app.com",49],["bestjavporn.com",49],["mm9841.cc",49],["myoplay.club",49],["bpcj.or.jp",49],["cdramalove.com",49],["outidesigoto.com",49],["xemphimaz.com",49],["gourmetscans.net",[49,156]],["awebstories.com",49],["zgbk.com",49],["clujust.ro",[49,96]],["stockpokeronline.com",49],["indianhealthyrecipes.com",[49,57]],["stiridinromania.ro",49],["kooora4lives.net",49],["kooora4livs.com",49],["ferroviando.com.br",[49,163,164,165]],["counciloflove.com",[49,163,164,165]],["infokik.com",[49,163,164,165]],["kulinarnastronamocy.pl",[49,163,164,165]],["jafekri.com",[49,163,164,165]],["paidiatreio.gr",[49,77]],["workhouses.org.uk",49],["dollarvr.com",[49,96]],["newsme.gr",[49,96]],["daily-tohoku.news",[49,93]],["descopera.ro",49],["velicu.eu",49],["arenavalceana.ro",[49,72]],["firmwarefile.com",49],["asianexpress.co.uk",49],["best4hack.blogspot.com",49],["certificationexamanswers.890m.com",49],["cookhero.gr",49],["creative-chemistry.org.uk",49],["deutschaj.com",49],["divineyogaschool.blogspot.com",49],["fabioambrosi.it",49],["flory4all.com",49],["fv2freegifts.org",49],["geniusjw.com",49],["ideas0419.com",49],["jeyran.net",49],["ktm2day.com",49],["letsdownloads.com",49],["limametti.com",49],["luyenthithukhoa.vn",49],["otakukan.com",49],["ribbelmonster.de",49],["untitle.org",49],["uptimeside.webnode.gr",49],["usmleexperiences.review",49],["zoommastory.com",49],["urbanbrush.net",49],["audiotools.in",49],["raindropteamfan.com",49],["manhwahentai.me",49],["ph.ontools.net",49],["scarysymptoms.com",[49,156]],["musicallyvideos.com",49],["geeksoncoffee.com",49],["guidingliterature.com",[49,96]],["evz.ro",50],["visionias.net",50],["safetxt.net",50],["javbest.xyz",50],["javbix.com",50],["javgrab.com",50],["goalup.live",50],["hatsukimanga.com",50],["47news.jp",50],["japanxxxmovie.com",50],["sexpox.com",50],["ibomma.pw",50],["aepos.ap.gov.in",50],["ssphim.net",[50,57]],["10000recipe.com",50],["edurev.in",50],["mcocguideblog.com",51],["singingdalong.blogspot.com",51],["tecnotutoshd.net",51],["multifilemirror.com",52],["eca-anime.net",53],["braziljournal.com",54],["nekopoi.web.id",54],["world4.eu",[54,115,116]],["flyertalk.com",10],["searchenginewatch.com",55],["oggiscuola.com",56],["sabishiidesu.com",57],["banglainsider.com",[57,75]],["animesanka.com",57],["lendagames.com",57],["vinaurl.blogspot.com",[57,121]],["utorrentgamesps2.blogspot.com",57],["articlesmania.me",57],["aksensei.com",57],["dropgalaxy.com",57],["allcryptoz.net",57],["crewbase.net",57],["crewus.net",57],["shinbhu.net",57],["shinchu.net",57],["thumb8.net",57],["thumb9.net",57],["topcryptoz.net",57],["uniqueten.net",57],["ultraten.net",57],["krunkercentral.com",57],["desijugar.net",57],["adslink.pw",57],["genesistls.com",[57,96]],["senpaiediciones.com",[57,96]],["guiasaude.info",57],["felizemforma.com",57],["icourse163.org",57],["kashmirobserver.net",58],["cathouseonthekings.com",59],["winaero.com",60],["centrumher.eu",61],["japancamerahunter.com",62],["airlinercafe.com",62],["thegraillords.net",63],["worldscientific.com",63],["videohelp.com",63],["upsrtconline.co.in",64],["qualityfilehosting.com",65],["booksmedicos.org",66],["siliconinvestor.com",67],["space-engineers.de",67],["coffeeforums.co.uk",67],["anime2you.de",67],["majorgeeks.com",67],["jobsbotswana.info",68],["npnews24.com",69],["fordogtrainers.pl",[70,71]],["polskacanada.com",72],["fantricks.com",72],["blog.kwick.de",72],["selfstudyhistory.com",[72,96]],["yeuphimmoik.com",72],["repack-games.com",72],["delicateseliterare.ro",72],["wpplugins.tips",72],["verselemzes.hu",[72,175]],["sqlserveregitimleri.com",72],["gezimanya.com",73],["athletic.net",74],["playonlinux.com",76],["bitblokes.de",78],["bold.dk",79],["pureinfotech.com",80],["almasdarnews.com",80],["casertace.net",80],["civildigital.com",80],["lesmoutonsenrages.fr",80],["venusarchives.com",80],["verpornocomic.com",80],["balticlivecam.com",81],["molineuxmix.co.uk",82],["yaledailynews.com",82],["canondrivers.org",[83,84]],["forum.nlmod.net",87],["includehelp.com",88],["u.gg",89],["routenote.com",91],["themosvagas.com.br",[91,128]],["mt07-forum.de",92],["auto-treff.com",92],["telefon-treff.de",92],["dodge-forum.eu",92],["altranotizia.it",93],["hearthstone-decks.net",94],["full-anime.fr",27],["nonton78.com",95],["sbfast.com",95],["vupload.com",95],["opportunitydesk.org",96],["selfstudyanthro.com",96],["renditepassive.net",96],["androidtvbox.eu",96],["flinsetyadi.com",[96,102]],["rawneix.in",[96,152,153]],["the-masters-voice.com",[96,102]],["activationkeys.co",96],["pandurul.ro",97],["masrawy.com",98],["milfzr.com",99],["phrasemix.com",100],["pitesti24.ro",102],["samsungtechwin.com",102],["cours-de-droit.net",102],["iptv4best.com",102],["blogvisaodemercado.pt",102],["kapitalis.com",102],["tiempo.hn",102],["winmeen.com",102],["ibps.in",102],["visse.com.br",102],["javsubtitle.co",102],["learninsta.com",102],["licensekeys.org",102],["mediahiburan.my",102],["tipssehatcantik.com",102],["anime-drama.jp",102],["jbjbgame.com",102],["viatasisanatate.com",102],["ziarulargesul.ro",102],["globaldefensecorp.com",102],["gossipnextdoor.com",102],["coffeeapps.ir",102],["media.framu.world",102],["immobiliaremia.com",102],["colegiosconcertados.info",102],["bigdatauni.com",102],["riwyat.com",102],["rukim.id",102],["visefierbinti.ro",102],["cyberkrafttraining.com",102],["theaircurrent.com",102],["nocturnetls.net",102],["clockks.com",102],["ananda-yoga.ro",102],["poolpiscina.com",102],["infodifesa.it",102],["getective.com",102],["flashdumpfiles.com",102],["formatatmak.com",102],["drkrok.com",102],["alphagirlreviews.com",102],["kitchennovel.com",102],["voxvalachorum.ro",102],["cracksone.com",102],["day-hoc.org",102],["onlineonderdelenshop.nl",102],["primicia.com.ve",102],["tech-recipes.com",102],["postcourier.com.pg",102],["afrikmag.com",102],["maduras.vip",102],["aprendeinglessila.com",102],["kicknews.today",102],["koalasplayground.com",102],["hellokpop.com",102],["hayatbilgileri.com",102],["moneyexcel.com",102],["placementstore.com",102],["neuroteam-metz.de",102],["codedosa.com",102],["liveyourmaths.com",102],["newspao.gr",102],["ieltsliz.com",102],["programasvirtualespc.net",102],["tempatwisataseru.com",102],["wikiofcelebs.com",102],["jornaljoca.com.br",102],["arcanescans.com",102],["filmzone.com",102],["hiraethtranslation.com",102],["kaystls.site",102],["home.novel-gate.com",102],["moneyguru.co",103],["abola.pt",31],["unixhow.com",104],["wikihow.com",105],["analizy.pl",107],["phimmedia.info",108],["zeeebatch.blogspot.com",109],["sokolow-mlp.pl",109],["japan-fans.com",109],["ohmygirl.ml",110],["cissamagazine.com.br",111],["phoronix.com",112],["observatoriodocinema.uol.com.br",113],["salidzini.lv",114],["portalcriatividade.com.br",[115,158]],["kitguru.net",118],["lvturbo.com",119],["sbbrisk.com",119],["sbface.com",119],["sbspeed.com",119],["streamsb.net",119],["itscybertech.com",119],["whatfontis.com",122],["tritinia.com",123],["sportnews.to",[123,131]],["psihologiadeazi.ro",123],["dubznetwork.com",[123,154]],["lowkeytech.com",125],["ubuntudde.com",125],["techsini.com",126],["appofmirror.com",129],["developpez.com",130],["scatch176duplicities.com",132],["voe-unblock.com",132],["phimdinhcao.com",133],["picallow.com",134],["links.extralinks.casa",135],["theasianparent.com",135],["ssuathletics.com",136],["titulky.com",137],["dongphimmoiz.com",138],["investorvillage.com",139],["grandoldteam.com",140],["gamingsinners.com",140],["elitepvpers.com",141],["geeksforgeeks.org",142],["acupoffrench.com",143],["novelza.com",143],["novelpia.com",[144,145,146]],["viewsb.com",147],["dizipal210.com",[147,148]],["dizipal211.com",[147,148]],["dizipal222.com",[147,148]],["dizipal223.com",[147,148]],["dizipal229.com",[147,148]],["dizipal232.com",[147,148]],["dizipal233.com",[147,148]],["dizipal234.com",[147,148]],["dizipal235.com",[147,148]],["dizipal236.com",[147,148]],["dizipal237.com",[147,148]],["dizipal238.com",[147,148]],["dizipal239.com",[147,148]],["dizipal240.com",[147,148]],["dizipal241.com",[147,148]],["dizipal242.com",[147,148]],["dizipal243.com",[147,148]],["dizipal244.com",[147,148]],["dizipal246.com",[147,148]],["dizipal247.com",[147,148]],["dizipal248.com",[147,148]],["dizipal249.com",[147,148]],["nsfwzone.xyz",147],["dlmovies.link",147],["top1iq.com",149],["unlimitedfiles.xyz",150],["aztravels.net",151],["downfile.site",151],["memangbau.com",151],["trangchu.news",151],["revenue.land",152],["eplayer.click",154],["olacast.live",154],["ntuplay.xyz",154],["fucktube4k.com",155],["knightnoscanlation.com",155],["blog.cryptowidgets.net",155],["blog.insurancegold.in",155],["blog.wiki-topia.com",155],["blog.coinsvalue.net",155],["blog.cookinguide.net",155],["blog.freeoseocheck.com",155],["maxstream.video",157],["smokelearned.net",159],["nhentaihaven.org",160],["slideshare.net",161],["hidemywp.co",162],["memoryhackers.org",166],["turkbettv154.com",167],["mgsm.pl",169],["camcaps.to",170],["vtplayer.net",170],["phimlongtieng.net",[171,172,173,174]],["weakstream.org",176],["jk-market.com",177],["vtbe.to",178],["vtube.network",178],["film4e.com",179],["zamundatv.com",179],["cattime.com",180],["dogtime.com",180],["download.mokeedev.com",180],["freep.com",180],["ijr.com",180],["order-order.com",180],["techlicious.com",180],["thedraftnetwork.com",180],["legacy.com",181],["firescans.xyz",182]]);

const entitiesMap = new Map([["notebookcheck",36],["marapcana",49],["europixhd",[49,57]],["topeuropix",[49,57]],["dramacute",[49,93]],["depedlps",49],["mangatoon",49],["123movies",[49,102]],["gomovies",49],["fmovies",[49,102]],["otakudesu",49],["yoyofilmeys",49],["mangaku",50],["dramaqu",50],["tvzingvn",95],["zingtvhd",95],["zingvntv",95],["sbflix",95]]);

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
            if ( debug === 'nomatch' || debug === 'all' ) { debugger; }  // jshint ignore: line
            return;
        }
        if ( safe.logLevel > 1 && context !== '' ) {
            safe.uboLog(logPrefix, `Matched src\n${e.src}`);
        }
        const scriptText = getScriptText(e);
        if ( reNeedle.test(scriptText) === false ) {
            if ( debug === 'nomatch' || debug === 'all' ) { debugger; }  // jshint ignore: line
            return;
        }
        if ( safe.logLevel > 1 ) {
            safe.uboLog(logPrefix, `Matched text\n${scriptText}`);
        }
        if ( debug === 'match' || debug === 'all' ) { debugger; }  // jshint ignore: line
        safe.uboLog(logPrefix, 'Aborted');
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
