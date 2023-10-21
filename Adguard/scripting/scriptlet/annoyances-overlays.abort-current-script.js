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

const argsList = [["$","advBlock"],["$","showAd"],["document.createElement","googletag"],["document.createElement","/admiral|String\\.fromCharCode\\(97,( )*?100,( )*?109,( )*?105,( )*?114,( )*?97,( )*?108\\)|a%64%6d%69%72%61%6c/"],["window.document.getElementById","s65c"],["getComputedStyle","adsbygoogle"],["setTimeout","none"],["onload","adsbygoogle"],["document.getElementById","').style.display='block';"],["RegExp","AdvBot"],["$","AdBlock"],["$","!document.getElementById(btoa"],["navigator.userAgent","AdBlockOn"],["document.write","ag_adBlockerDetected"],["document.createElement","adblockInfo"],["document.getElementById","blocking = true"],["document.addEventListener","adjs"],["$","can_show_ads"],["EventTarget.prototype.addEventListener","adblockalert_status"],["_lcpdfr","renderedAnnoyance"],["document.getElementById","ad blocker"],["document.createElement","pagead2.googlesyndication.com"],["document.addEventListener","/abisuq/"],["onload","ad.offsetWidth"],["atob","-10000px"],["document.getElementById",".style.display"],["document.getElementById","flex"],["document.getElementById","adblock"],["document.getElementById",".style.display="],["$","ad"],["$","Please disable \"ad blocker\""],["$","Adblock"],["document.getElementById","adback"],["document.querySelector","getBoundingClientRect"],["EventTarget.prototype.addEventListener","window.getComputedStyle"],["document.getElementById","/window\\.onclick/"],["document.getElementById","/!document\\.getElementById[\\s\\S]*?innerHTML[\\s\\S]*?insertBefore/"],["jQuery","donateBoxId"],["$popup","magnificPopup"],["$","#mod-popup"],["jQuery","covid19_modal"],["$","#saveBig"],["$","modal_newsletter"],["$","FBF.modalWindow.show"],["askPermission",""],["jQuery","surveyCookieName"],["DS_Popup_1"],["$","#myModal"],["document.onselectstart"],["document.oncontextmenu"],["$","contextmenu"],["disableselect","reEnable"],["$","hidden"],["document.getElementById","advert-tester"],["document.oncopy"],["jQuery","#sign-up-popup"],["jQuery","overlay"],["document.onkeydown"],["document.getElementById","ad-blocker"],["document.getElementById",".ab_detected"],["jQuery","tweaker"],["jQuery","undefined"],["jQuery","ads"],["document.getElementById","block"],["document.addEventListener","alert"],["document.ondragstart","document.oncontextmenu"],["jQuery","document"],["document.getElementById","tester"],["document.getElementById","undefined"],["jQuery","restriction"],["document.oncontextmenu","document.onselectstart"],["message","clickIE"],["preventSelection"],["jQuery","contextmenu"],["jQuery","Drupal"],["$","blur"],["reEnable","killcopy"],["$","load"],["document.addEventListener","copy"],["document.getElementsByTagName","null"],["eval","abd"],["jQuery","ai_adb"],["document.getElementById","none"],["$","undefined"],["document.addEventListener"],["document.oncontextmenu","key"],["addEventListener","which"],["window.addEventListener","ctrlKey"],["document.createElement","adblock"],["document.getElementById","banner"],["document.getElementById","dataLayer"],["jQuery","disable_hot_keys"],["onload"],["$","offsetHeight"],["disableSelection"],["jQuery","ai_check"],["onload","contextmenu"],["document.ondragstart"],["$","copy"],["document.getElementById","adblockerdetected"],["$","juicyads"],["$","showEmailNewsletterModal"],["$","btoa"],["disableSelection","reEnable"],["$",".height"],["eval","isNaN"],["document.addEventListener","contribute"],["addEventListener","ctrlKey"],["setTimeout","newsletterPopup"],["window.oncontextmenu"],["document.onmousedown"],["event","stopPropagation"],["soclInit"],["onload","setTimeout"],["document.addEventListener","preventDefault"],["setTimeout","offsetHeight"],["disable_copy"],["disable_hot_keys"],["jQuery","copy"],["addEventListener","adsbygoogle.length"],["check","debugger"],["document.addEventListener","document.onselectstart"],["matchMedia"],["$","adBlock"],["jQuery","keydown"],["jQuery","oncontextmenu"],["String.prototype.charCodeAt","ai_"],["jQuery","preventDefault"],["$","/getScript|error:/"],["addEventListener","keydown"],["nocontextmenu"],["document.getElementById","cookie"],["document.getElementById","isMoz"],["console.clear"],["oncontextmenu","keydown"],["document.oncontextmenu","nocontextmenu"],["document.onselectstart","disableselect"],["document.querySelector","adblock"],["$","fade"],["jQuery","stopPropagation"],["update_visit_count"],["$","test"],["$","Promise"],["showAdblockerModal"],["stopPrntScr"],["$","keydown"],["console.log","devtools"],["setInterval","playAlert"],["console.clear","contextmenu"],["devtoolsDetector"],["shortcut"],["console.log","document.referer"],["document.addEventListener","onkeydown"],["disableEnterKey"],["document.getElementsByTagName","unselectable"],["document.onkeypress"],["document.addEventListener","contextmenu"],["wccp_pro_iscontenteditable"],["document.body.oncontextmenu"],["nocontext"],["runPageBugger"],["eval","contextmenu"],["ab_tests"],["jQuery","userAgent"],["reEnable"],["jQuery","wccp_pro"],["clear_body_at_all_for_extentions"],["RegExp","googlebot"],["globalThis","DisableDevtool"],["document.querySelectorAll","adblock"],["checkAdblockBait"],["RegExp","debugger"],["oncontextmenu"],["navigator","devtools"],["setInterval","stateObject"],["setTimeout","debugger"],["jQuery","keyCode"],["$","debugger"],["jQuery","devtool"],["RegExp","contextmenu"],["AudiosL10n"],["document.createElement","admiral"],["document.getElementsByTagName","admiral"],["jQuery","adsbygoogle"]];

const hostnamesMap = new Map([["minigames.mail.ru",0],["mmminigames.mail.ru",1],["stealthoptional.com",2],["pcguide.com",2],["qtoptens.com",2],["mangasee123.com",2],["howtogeek.com",3],["247sports.com",3],["sporcle.com",3],["fresnobee.com",3],["fajnegotowanie.pl",3],["esportstales.com",3],["tiger-algebra.com",3],["blackenterprise.com",3],["crooksandliars.com",3],["cmacapps.com",3],["cwtv.com",3],["feral-heart.com",3],["gamerevolution.com",3],["gktoday.in",3],["informazionefiscale.it",3],["inquirer.net",[3,181]],["interestingengineering.com",3],["leitesculinaria.com",3],["nofilmschool.com",[3,181]],["obsev.com",3],["pleated-jeans.com",3],["post-gazette.com",3],["practicalclinicalskills.com",3],["ranker.com",3],["sanfoundry.com",3],["simpleflying.com",3],["thegatewaypundit.com",3],["timelessleaf.com",3],["viraliq.com",3],["winhelponline.com",3],["turk-debrid.net",4],["steamcollector.com",[5,169]],["gohatori.com",6],["chaynikam.info",7],["winiso.pl",8],["8muses.com",9],["allmusic.com",10],["babiato.co",11],["rangerboard.com",11],["multics.eu",11],["smokingmeatforums.com",[11,102]],["blackhatworld.com",12],["derivative-calculator.net",13],["ebookdz.com",14],["flightsim.to",15],["givee.club",16],["gputracker.eu",17],["ispot.tv",18],["lcpdfr.com",[19,10]],["liveonsat.com",20],["tt1069.com",20],["lowcygier.pl",21],["mangacanblog.com",22],["oglaszamy24.pl",23],["oneman.gr",24],["picmix.com",25],["pixiz.com",26],["portfolio.hu",27],["rocket-league.com",28],["rutab.net",29],["savevideo.me",30],["sharree.com",[31,104]],["techobest.com",32],["textstudio.co",33],["topbestalternatives.com",34],["topbusiness24.ru",35],["mydomsam.ru",35],["hubuhu.ru",35],["moysadinfo.ru",35],["mybusinessplus.ru",35],["dukand.ru",35],["mydizayn.ru",35],["polzadom.ru",35],["umnodachnik.ru",35],["delnyesovety.ru",35],["soverhenie.ru",35],["mirinteresa.ru",35],["uskorit.ru",35],["dskyar.ru",35],["biscand.ru",35],["smartid24.ru",35],["stroysaminfo.ru",35],["topsovety.ru",35],["sotsvetiya.ru",35],["imdaily.ru",35],["turizmnaok.ru",35],["zdorovyobrazzhizni.ru",35],["kinomann.ru",35],["techinfolife.ru",35],["dommoysad.ru",35],["rteinfo.ru",35],["psisovety.ru",35],["kvilit.ru",35],["speshit.ru",35],["ollss.ru",35],["notebookcheck-hu.com",36],["notebookcheck-tr.com",36],["notebookcheck-ru.com",36],["palestinechronicle.com",37],["granadadigital.es",38],["shopxp.com.br",39],["staradvertiser.com",40],["iprovpn.com",41],["universalfreecourse.com",42],["downloadfreecourse.com",42],["firsatbufirsat.com",43],["liga.net",44],["developer.nvidia.com",45],["loksado.com",46],["training.javatpoint.com",47],["mimaletadepeliculas.blogspot.com",48],["clk.sh",[48,49]],["shrinkearn.com",[48,49]],["luoghidavedere.it",48],["practicetestgeeks.com",[48,49]],["gagetmatome.com",48],["verdadeiroolhar.pt",48],["librospreuniversitariospdf.blogspot.com",[48,50,57,92]],["mt-milcom.blogspot.com",[48,49]],["interviewgig.com",48],["artesacro.org",48],["dailynewsview.com",48],["dailynews.us.com",48],["e-sushi.fr",48],["evasion-online.com",48],["exclusifvoyages.com",48],["f1fastlap.blogspot.com",[48,49]],["naukridisha.in",48],["nydailyquote.com",48],["ouasafat.com",48],["reflectim.fr",[48,49]],["top.howfn.com",48],["kangmartho.com",48],["gnt24365.net",[48,49]],["tvstreampf.xyz",[48,97]],["pvstreams.com",[48,49,57,73]],["7misr4day.com",[48,49]],["fmhikayeleri.com",49],["tinyppt.com",49],["hindi-gk.com",49],["androidmtk.com",49],["badayak.com",49],["runningnews.gr",[49,51]],["kirannewsagency.com",49],["starsunfolded.com",49],["satcesc.com",49],["them4ufree.info",49],["baattv.com",49],["psychologiazycia.com",[49,51]],["tunovelaligera.com",[49,78]],["yeane.org",49],["mtbtutoriales.com",49],["answersafrica.com",49],["felico.pl",49],["legionprogramas.org",49],["serwis-zamkow.com",49],["hebrew4christians.com",49],["jpopsingles.eu",[49,57]],["ghanatvon.com",49],["kusonime.com",[49,57,86]],["otakudesu.org",[49,87]],["idmod.xyz",49],["indcit.com",49],["androidmakale.com",49],["mongri.net",49],["download.ipeenk.com",49],["doranobi-fansub.id",[49,91]],["alexeiportableapp.blogspot.com",49],["oparana.com.br",49],["lolle21.com",49],["mangaid.click",49],["manianomikata.com",49],["tfp.is",49],["dassen-azara4.com",49],["pentruea.com",49],["neyrologos.gr",49],["freerapidleechlist.blogspot.com",49],["ggeguide.com",49],["tanya-tanya.com",[49,103]],["lalawin.com",49],["audioreview.m1001.coreserver.jp",[49,103]],["seikatsu-hyakka.com",49],["elizabeth-mitchell.org",[49,107]],["blasianluvforever.com",49],["movieston.com",[49,73]],["deseneledublate.com",49],["eduardo-monica.com",49],["fmzm.xyz",49],["j-island.net",49],["msubplix.com",49],["upstream.to",49],["ilclubdellericette.it",49],["daum.net",49],["newsforbolly.org",49],["cablegratis.online",49],["dztechphone.com",49],["funivie.org",49],["goodbakery.ru",[49,73]],["ifdreamscametrue.com",[49,118]],["juegosdetiempolibre.org",49],["musicindustryhowto.com",[49,84,97]],["sdelatotoplenie.ru",[49,54]],["sachonthi.com",49],["zdravenportal.eu",[49,121]],["thezealots.org",49],["deportealdia.live",49],["hulnews.top",49],["truyenbanquyen.com",49],["globaledu.jp",49],["lataifas.ro",[49,125]],["blisseyhusband.in",[49,73]],["openfinanza.it",[49,97]],["followmikewynn.com",49],["starbene.it",49],["bimiacg.net",49],["diaforetiko.gr",49],["tchadcarriere.com",49],["info-beihilfe.de",49],["zgywyd.cn",49],["mercenaryenrollment.com",49],["wawlist.com",[49,57]],["cristelageorgescu.ro",49],["crunchyscan.fr",49],["www-daftarharga.blogspot.com",49],["koszalincity.pl",[49,57]],["theghostinmymachine.com",49],["ilovevaldinon.it",49],["aileen-novel.online",[49,117]],["bumigemilang.com",[49,117]],["bingotingo.com",49],["stream.bunkr.is",49],["blueraindrops.com",49],["sekaikomik.live",49],["privivkainfo.ru",49],["apps2app.com",49],["bestjavporn.com",49],["mm9841.cc",49],["myoplay.club",49],["bpcj.or.jp",49],["cdramalove.com",49],["outidesigoto.com",49],["xemphimaz.com",49],["gourmetscans.net",[49,157]],["awebstories.com",49],["zgbk.com",49],["clujust.ro",[49,97]],["stockpokeronline.com",49],["indianhealthyrecipes.com",[49,57]],["stiridinromania.ro",49],["kooora4lives.net",49],["kooora4livs.com",49],["ferroviando.com.br",[49,164,165,166]],["counciloflove.com",[49,164,165,166]],["infokik.com",[49,164,165,166]],["kulinarnastronamocy.pl",[49,164,165,166]],["jafekri.com",[49,164,165,166]],["paidiatreio.gr",[49,78]],["workhouses.org.uk",49],["dollarvr.com",[49,97]],["newsme.gr",[49,97]],["daily-tohoku.news",[49,94]],["descopera.ro",49],["velicu.eu",49],["arenavalceana.ro",[49,73]],["firmwarefile.com",49],["asianexpress.co.uk",49],["best4hack.blogspot.com",49],["certificationexamanswers.890m.com",49],["cookhero.gr",49],["creative-chemistry.org.uk",49],["deutschaj.com",49],["divineyogaschool.blogspot.com",49],["fabioambrosi.it",49],["flory4all.com",49],["fv2freegifts.org",49],["geniusjw.com",49],["ideas0419.com",49],["jeyran.net",49],["ktm2day.com",49],["letsdownloads.com",49],["limametti.com",49],["luyenthithukhoa.vn",49],["otakukan.com",49],["ribbelmonster.de",49],["untitle.org",49],["uptimeside.webnode.gr",49],["usmleexperiences.review",49],["zoommastory.com",49],["urbanbrush.net",49],["audiotools.in",49],["raindropteamfan.com",49],["manhwahentai.me",49],["ph.ontools.net",49],["scarysymptoms.com",[49,157]],["musicallyvideos.com",49],["evz.ro",50],["visionias.net",50],["safetxt.net",50],["javbest.xyz",50],["javbix.com",50],["javgrab.com",50],["goalup.live",50],["hatsukimanga.com",50],["47news.jp",50],["japanxxxmovie.com",50],["sexpox.com",50],["ibomma.pw",50],["aepos.ap.gov.in",50],["ssphim.net",[50,57]],["10000recipe.com",50],["mcocguideblog.com",51],["singingdalong.blogspot.com",51],["tecnotutoshd.net",51],["multifilemirror.com",52],["eca-anime.net",53],["braziljournal.com",54],["nekopoi.web.id",54],["world4.eu",[54,116,117]],["flyertalk.com",10],["searchenginewatch.com",55],["oggiscuola.com",56],["sabishiidesu.com",57],["banglainsider.com",[57,76]],["animesanka.com",57],["lendagames.com",57],["vinaurl.blogspot.com",[57,122]],["utorrentgamesps2.blogspot.com",57],["articlesmania.me",57],["aksensei.com",57],["dropgalaxy.com",57],["allcryptoz.net",57],["crewbase.net",57],["crewus.net",57],["shinbhu.net",57],["shinchu.net",57],["thumb8.net",57],["thumb9.net",57],["topcryptoz.net",57],["uniqueten.net",57],["ultraten.net",57],["krunkercentral.com",57],["desijugar.net",57],["adslink.pw",57],["genesistls.com",[57,97]],["senpaiediciones.com",[57,97]],["procrackerz.org",[57,97]],["kashmirobserver.net",58],["cathouseonthekings.com",59],["winaero.com",60],["centrumher.eu",61],["japancamerahunter.com",62],["airlinercafe.com",62],["thegraillords.net",63],["worldscientific.com",63],["videohelp.com",63],["upsrtconline.co.in",64],["qualityfilehosting.com",65],["booksmedicos.org",66],["forum.politz.com.br",67],["siliconinvestor.com",68],["space-engineers.de",68],["coffeeforums.co.uk",68],["anime2you.de",68],["majorgeeks.com",68],["jobsbotswana.info",69],["npnews24.com",70],["fordogtrainers.pl",[71,72]],["polskacanada.com",73],["fantricks.com",73],["blog.kwick.de",73],["selfstudyhistory.com",[73,97]],["yeuphimmoik.com",73],["repack-games.com",73],["delicateseliterare.ro",73],["wpplugins.tips",73],["verselemzes.hu",[73,176]],["sqlserveregitimleri.com",73],["gezimanya.com",74],["athletic.net",75],["playonlinux.com",77],["bitblokes.de",79],["bold.dk",80],["pureinfotech.com",81],["almasdarnews.com",81],["casertace.net",81],["civildigital.com",81],["lesmoutonsenrages.fr",81],["venusarchives.com",81],["verpornocomic.com",81],["balticlivecam.com",82],["molineuxmix.co.uk",83],["yaledailynews.com",83],["canondrivers.org",[84,85]],["forum.nlmod.net",88],["includehelp.com",89],["u.gg",90],["routenote.com",92],["themosvagas.com.br",[92,129]],["mt07-forum.de",93],["auto-treff.com",93],["telefon-treff.de",93],["dodge-forum.eu",93],["altranotizia.it",94],["hearthstone-decks.net",95],["full-anime.fr",27],["nonton78.com",96],["sbfast.com",96],["vupload.com",96],["opportunitydesk.org",97],["selfstudyanthro.com",97],["renditepassive.net",97],["androidtvbox.eu",97],["flinsetyadi.com",[97,103]],["rawneix.in",[97,153,154]],["the-masters-voice.com",[97,103]],["activationkeys.co",97],["pandurul.ro",98],["masrawy.com",99],["milfzr.com",100],["phrasemix.com",101],["pitesti24.ro",103],["samsungtechwin.com",103],["cours-de-droit.net",103],["iptv4best.com",103],["blogvisaodemercado.pt",103],["kapitalis.com",103],["tiempo.hn",103],["winmeen.com",103],["ibps.in",103],["visse.com.br",103],["javsubtitle.co",103],["licensekeys.org",103],["mediahiburan.my",103],["tipssehatcantik.com",103],["anime-drama.jp",103],["jbjbgame.com",103],["viatasisanatate.com",103],["ziarulargesul.ro",103],["globaldefensecorp.com",103],["gossipnextdoor.com",103],["coffeeapps.ir",103],["media.framu.world",103],["immobiliaremia.com",103],["colegiosconcertados.info",103],["bigdatauni.com",103],["rukim.id",103],["visefierbinti.ro",103],["cyberkrafttraining.com",103],["theaircurrent.com",103],["nocturnetls.net",103],["clockks.com",103],["ananda-yoga.ro",103],["poolpiscina.com",103],["infodifesa.it",103],["getective.com",103],["formatatmak.com",103],["drkrok.com",103],["alphagirlreviews.com",103],["kitchennovel.com",103],["voxvalachorum.ro",103],["cracksone.com",103],["day-hoc.org",103],["onlineonderdelenshop.nl",103],["primicia.com.ve",103],["tech-recipes.com",103],["postcourier.com.pg",103],["afrikmag.com",103],["maduras.vip",103],["aprendeinglessila.com",103],["kicknews.today",103],["koalasplayground.com",103],["hellokpop.com",103],["hayatbilgileri.com",103],["moneyexcel.com",103],["placementstore.com",103],["neuroteam-metz.de",103],["codedosa.com",103],["liveyourmaths.com",103],["newspao.gr",103],["ieltsliz.com",103],["programasvirtualespc.net",103],["tempatwisataseru.com",103],["moneyguru.co",104],["abola.pt",31],["unixhow.com",105],["wikihow.com",106],["analizy.pl",108],["phimmedia.info",109],["zeeebatch.blogspot.com",110],["sokolow-mlp.pl",110],["japan-fans.com",110],["ohmygirl.ml",111],["cissamagazine.com.br",112],["phoronix.com",113],["observatoriodocinema.uol.com.br",114],["salidzini.lv",115],["portalcriatividade.com.br",[116,159]],["kitguru.net",119],["lvturbo.com",120],["sbbrisk.com",120],["sbface.com",120],["sbspeed.com",120],["streamsb.net",120],["itscybertech.com",120],["whatfontis.com",123],["tritinia.com",124],["sportnews.to",[124,132]],["psihologiadeazi.ro",124],["dubznetwork.com",[124,155]],["lowkeytech.com",126],["ubuntudde.com",126],["techsini.com",127],["allmovie.com",128],["sidereel.com",128],["appofmirror.com",130],["developpez.com",131],["scatch176duplicities.com",133],["voe-unblock.com",133],["phimdinhcao.com",134],["picallow.com",135],["freestreams-live1.com",135],["links.extralinks.casa",136],["ssuathletics.com",137],["titulky.com",138],["dongphimmoiz.com",139],["investorvillage.com",140],["grandoldteam.com",141],["gamingsinners.com",141],["elitepvpers.com",142],["geeksforgeeks.org",143],["acupoffrench.com",144],["novelza.com",144],["novelpia.com",[145,146,147]],["viewsb.com",148],["dizipal210.com",[148,149]],["dizipal211.com",[148,149]],["dizipal222.com",[148,149]],["dizipal223.com",[148,149]],["dizipal229.com",[148,149]],["dizipal232.com",[148,149]],["dizipal233.com",[148,149]],["dizipal234.com",[148,149]],["dizipal235.com",[148,149]],["dizipal236.com",[148,149]],["dizipal237.com",[148,149]],["dizipal238.com",[148,149]],["dizipal239.com",[148,149]],["dizipal240.com",[148,149]],["dizipal241.com",[148,149]],["dizipal242.com",[148,149]],["dizipal243.com",[148,149]],["dizipal244.com",[148,149]],["dizipal246.com",[148,149]],["dizipal247.com",[148,149]],["dizipal248.com",[148,149]],["dizipal249.com",[148,149]],["nsfwzone.xyz",148],["dlmovies.link",148],["top1iq.com",150],["unlimitedfiles.xyz",151],["aztravels.net",152],["downfile.site",152],["memangbau.com",152],["trangchu.news",152],["revenue.land",153],["eplayer.click",155],["olacast.live",155],["ntuplay.xyz",155],["fucktube4k.com",156],["knightnoscanlation.com",156],["maxstream.video",158],["smokelearned.net",160],["nhentaihaven.org",161],["slideshare.net",162],["hidemywp.co",163],["bolugundem.com",164],["memoryhackers.org",167],["turkbettv154.com",168],["mgsm.pl",170],["camcaps.to",171],["vtplayer.net",171],["phimlongtieng.net",[172,173,174,175]],["weakstream.org",177],["jk-market.com",178],["vtbe.net",179],["film4e.com",180],["zamundatv.com",180],["boston.com",181],["britannica.com",181],["cattime.com",181],["dogtime.com",181],["download.mokeedev.com",181],["freep.com",181],["ijr.com",181],["knowyourmeme.com",181],["nationalreview.com",181],["order-order.com",181],["savvytime.com",181],["techlicious.com",181],["technicpack.net",181],["thedraftnetwork.com",181],["wrestlezone.com",181],["xda-developers.com",181],["legacy.com",182],["cyanlabs.net",183]]);

const entitiesMap = new Map([["notebookcheck",36],["marapcana",49],["europixhd",[49,57]],["topeuropix",[49,57]],["dramacute",[49,94]],["depedlps",49],["mangatoon",49],["123movies",[49,103]],["gomovies",49],["fmovies",[49,103]],["otakudesu",49],["yoyofilmeys",49],["mangaku",50],["dramaqu",50],["tvzingvn",96],["zingtvhd",96],["zingvntv",96],["sbflix",96]]);

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
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
    }
    const self = globalThis;
    const safe = {
        'Array_from': Array.from,
        'Error': self.Error,
        'Math_floor': Math.floor,
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
        'JSON_parse': self.JSON.parse.bind(self.JSON),
        'JSON_stringify': self.JSON.stringify.bind(self.JSON),
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
