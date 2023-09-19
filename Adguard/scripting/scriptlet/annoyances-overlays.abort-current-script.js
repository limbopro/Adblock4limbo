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

const argsList = [["$","advBlock"],["$","showAd"],["document.createElement","googletag"],["document.createElement","/admiral|String\\.fromCharCode\\(97,( )*?100,( )*?109,( )*?105,( )*?114,( )*?97,( )*?108\\)/"],["window.document.getElementById","s65c"],["getComputedStyle","adsbygoogle"],["setTimeout","none"],["onload","adsbygoogle"],["document.getElementById","').style.display='block';"],["RegExp","AdvBot"],["$","AdBlock"],["$","!document.getElementById(btoa"],["navigator.userAgent","AdBlockOn"],["document.write","ag_adBlockerDetected"],["document.createElement","adblockInfo"],["document.getElementById","blocking = true"],["document.addEventListener","adjs"],["$","can_show_ads"],["EventTarget.prototype.addEventListener","adblockalert_status"],["_lcpdfr","renderedAnnoyance"],["document.getElementById","ad blocker"],["document.createElement","pagead2.googlesyndication.com"],["document.addEventListener","/abisuq/"],["onload","ad.offsetWidth"],["atob","-10000px"],["document.getElementById",".style.display"],["document.getElementById","flex"],["document.getElementById","adblock"],["document.getElementById",".style.display="],["$","ad"],["$","Please disable \"ad blocker\""],["$","Adblock"],["document.getElementById","adback"],["document.querySelector","getBoundingClientRect"],["EventTarget.prototype.addEventListener","window.getComputedStyle"],["document.getElementById","/window\\.onclick/"],["document.getElementById","/!document\\.getElementById[\\s\\S]*?innerHTML[\\s\\S]*?insertBefore/"],["jQuery","donateBoxId"],["$popup","magnificPopup"],["$","#mod-popup"],["jQuery","covid19_modal"],["$","#saveBig"],["$","modal_newsletter"],["$","FBF.modalWindow.show"],["askPermission",""],["DS_Popup_1"],["$","#myModal"],["document.onselectstart"],["document.oncontextmenu"],["$","contextmenu"],["disableselect","reEnable"],["$","hidden"],["$","adblock"],["document.getElementById","advert-tester"],["$","copyHolder"],["jQuery","#sign-up-popup"],["jQuery","overlay"],["document.onkeydown"],["document.getElementById","ad-blocker"],["document.getElementById",".ab_detected"],["jQuery","tweaker"],["jQuery","undefined"],["jQuery","ads"],["document.getElementById","block"],["document.addEventListener","alert"],["document.ondragstart","document.oncontextmenu"],["jQuery","document"],["document.getElementById","tester"],["document.getElementById","undefined"],["jQuery","restriction"],["document.oncontextmenu","document.onselectstart"],["message","clickIE"],["preventSelection"],["jQuery","contextmenu"],["jQuery","Drupal"],["$","blur"],["reEnable","killcopy"],["$","load"],["document.addEventListener","copy"],["document.getElementsByTagName","null"],["eval","abd"],["jQuery","ai_adb"],["document.getElementById","none"],["$","undefined"],["document.addEventListener"],["document.oncontextmenu","key"],["addEventListener","which"],["window.addEventListener","ctrlKey"],["document.createElement","adblock"],["document.getElementById","banner"],["document.getElementById","dataLayer"],["jQuery","disable_hot_keys"],["onload"],["document.oncopy"],["$","offsetHeight"],["disableSelection"],["jQuery","ai_check"],["onload","contextmenu"],["document.ondragstart"],["$","copy"],["document.getElementById","adblockerdetected"],["$","juicyads"],["$","showEmailNewsletterModal"],["$","btoa"],["disableSelection","reEnable"],["$",".height"],["eval","isNaN"],["document.addEventListener","contribute"],["addEventListener","ctrlKey"],["setTimeout","newsletterPopup"],["window.oncontextmenu"],["document.onmousedown"],["event","stopPropagation"],["soclInit"],["onload","setTimeout"],["document.addEventListener","preventDefault"],["setTimeout","offsetHeight"],["disable_copy"],["disable_hot_keys"],["jQuery","copy"],["addEventListener","adsbygoogle.length"],["check","debugger"],["document.addEventListener","document.onselectstart"],["matchMedia"],["$","adBlock"],["jQuery","keydown"],["jQuery","oncontextmenu"],["String.prototype.charCodeAt","ai_"],["jQuery","preventDefault"],["$","/getScript|error:/"],["addEventListener","keydown"],["nocontextmenu"],["document.getElementById","cookie"],["document.getElementById","isMoz"],["console.clear"],["oncontextmenu","keydown"],["document.oncontextmenu","nocontextmenu"],["document.onselectstart","disableselect"],["document.querySelector","adblock"],["$","fade"],["jQuery","stopPropagation"],["update_visit_count"],["$","test"],["$","Promise"],["showAdblockerModal"],["stopPrntScr"],["$","keydown"],["console.log","devtools"],["setInterval","playAlert"],["console.clear","contextmenu"],["devtoolsDetector"],["shortcut"],["console.log","document.referer"],["document.addEventListener","onkeydown"],["disableEnterKey"],["document.getElementsByTagName","unselectable"],["document.onkeypress"],["document.addEventListener","contextmenu"],["wccp_pro_iscontenteditable"],["document.body.oncontextmenu"],["nocontext"],["runPageBugger"],["eval","contextmenu"],["ab_tests"],["jQuery","userAgent"],["reEnable"],["jQuery","wccp_pro"],["clear_body_at_all_for_extentions"],["RegExp","googlebot"],["globalThis","DisableDevtool"],["document.querySelectorAll","adblock"],["checkAdblockBait"],["RegExp","debugger"],["oncontextmenu"],["navigator","devtools"],["setInterval","stateObject"],["setTimeout","debugger"],["jQuery","keyCode"],["$","debugger"],["jQuery","devtool"],["RegExp","contextmenu"],["AudiosL10n"],["document.createElement","admiral"],["document.getElementsByTagName","admiral"]];

const hostnamesMap = new Map([["minigames.mail.ru",0],["mmminigames.mail.ru",1],["stealthoptional.com",2],["gamerant.com",2],["pcguide.com",2],["qtoptens.com",2],["mangasee123.com",2],["247sports.com",3],["sporcle.com",3],["fresnobee.com",3],["fajnegotowanie.pl",3],["esportstales.com",3],["tiger-algebra.com",3],["blackenterprise.com",3],["crooksandliars.com",3],["cmacapps.com",3],["cwtv.com",3],["feral-heart.com",3],["gamerevolution.com",3],["gktoday.in",3],["informazionefiscale.it",3],["inquirer.net",[3,182]],["interestingengineering.com",3],["leitesculinaria.com",3],["nofilmschool.com",[3,182]],["obsev.com",3],["pleated-jeans.com",3],["post-gazette.com",3],["practicalclinicalskills.com",3],["ranker.com",3],["sanfoundry.com",3],["simpleflying.com",3],["thegatewaypundit.com",3],["timelessleaf.com",3],["viraliq.com",3],["winhelponline.com",3],["turk-debrid.net",4],["steamcollector.com",[5,170]],["gohatori.com",6],["chaynikam.info",7],["winiso.pl",8],["8muses.com",9],["allmusic.com",10],["babiato.co",11],["rangerboard.com",11],["multics.eu",11],["smokingmeatforums.com",[11,103]],["blackhatworld.com",12],["derivative-calculator.net",13],["ebookdz.com",14],["flightsim.to",15],["givee.club",16],["gputracker.eu",17],["ispot.tv",18],["lcpdfr.com",[19,10]],["liveonsat.com",20],["tt1069.com",20],["lowcygier.pl",21],["mangacanblog.com",22],["oglaszamy24.pl",23],["oneman.gr",24],["picmix.com",25],["pixiz.com",26],["portfolio.hu",27],["rocket-league.com",28],["rutab.net",29],["savevideo.me",30],["sharree.com",[31,105]],["techobest.com",32],["textstudio.co",33],["topbestalternatives.com",34],["topbusiness24.ru",35],["mydomsam.ru",35],["hubuhu.ru",35],["moysadinfo.ru",35],["mybusinessplus.ru",35],["dukand.ru",35],["mydizayn.ru",35],["polzadom.ru",35],["umnodachnik.ru",35],["delnyesovety.ru",35],["soverhenie.ru",35],["mirinteresa.ru",35],["uskorit.ru",35],["dskyar.ru",35],["biscand.ru",35],["smartid24.ru",35],["stroysaminfo.ru",35],["topsovety.ru",35],["sotsvetiya.ru",35],["imdaily.ru",35],["turizmnaok.ru",35],["zdorovyobrazzhizni.ru",35],["kinomann.ru",35],["techinfolife.ru",35],["dommoysad.ru",35],["rteinfo.ru",35],["psisovety.ru",35],["kvilit.ru",35],["speshit.ru",35],["ollss.ru",35],["notebookcheck-hu.com",36],["notebookcheck-tr.com",36],["notebookcheck-ru.com",36],["palestinechronicle.com",37],["granadadigital.es",38],["shopxp.com.br",39],["staradvertiser.com",40],["iprovpn.com",41],["universalfreecourse.com",42],["downloadfreecourse.com",42],["firsatbufirsat.com",43],["liga.net",44],["loksado.com",45],["training.javatpoint.com",46],["mimaletadepeliculas.blogspot.com",47],["clk.sh",[47,48]],["shrinkearn.com",[47,48]],["luoghidavedere.it",47],["practicetestgeeks.com",[47,48]],["gagetmatome.com",47],["verdadeiroolhar.pt",47],["librospreuniversitariospdf.blogspot.com",[47,49,57,92]],["mt-milcom.blogspot.com",[47,48]],["interviewgig.com",47],["artesacro.org",47],["dailynewsview.com",47],["dailynews.us.com",47],["e-sushi.fr",47],["evasion-online.com",47],["exclusifvoyages.com",47],["f1fastlap.blogspot.com",[47,48]],["naukridisha.in",47],["nydailyquote.com",47],["ouasafat.com",47],["reflectim.fr",[47,48]],["top.howfn.com",47],["kangmartho.com",47],["gnt24365.net",[47,48]],["tvstreampf.xyz",[47,98]],["pvstreams.com",[47,48,57,73]],["7misr4day.com",[47,48]],["fmhikayeleri.com",48],["tinyppt.com",48],["hindi-gk.com",48],["androidmtk.com",48],["badayak.com",48],["runningnews.gr",[48,50]],["kirannewsagency.com",48],["starsunfolded.com",48],["satcesc.com",48],["them4ufree.info",48],["baattv.com",48],["psychologiazycia.com",[48,50]],["tunovelaligera.com",[48,78]],["yeane.org",48],["mtbtutoriales.com",48],["answersafrica.com",48],["felico.pl",48],["legionprogramas.org",48],["serwis-zamkow.com",48],["hebrew4christians.com",48],["jpopsingles.eu",[48,57]],["ghanatvon.com",48],["kusonime.com",[48,57,86]],["otakudesu.org",[48,87]],["idmod.xyz",48],["indcit.com",48],["androidmakale.com",48],["mongri.net",48],["download.ipeenk.com",48],["doranobi-fansub.id",[48,91]],["alexeiportableapp.blogspot.com",48],["oparana.com.br",48],["lolle21.com",48],["mangaid.click",48],["manianomikata.com",48],["tfp.is",48],["dassen-azara4.com",48],["pentruea.com",48],["neyrologos.gr",48],["freerapidleechlist.blogspot.com",48],["ggeguide.com",48],["tanya-tanya.com",[48,104]],["lalawin.com",48],["audioreview.m1001.coreserver.jp",[48,104]],["seikatsu-hyakka.com",48],["elizabeth-mitchell.org",[48,108]],["blasianluvforever.com",48],["movieston.com",[48,73]],["deseneledublate.com",48],["eduardo-monica.com",48],["fmzm.xyz",48],["j-island.net",48],["msubplix.com",48],["upstream.to",48],["ilclubdellericette.it",48],["daum.net",48],["newsforbolly.org",48],["cablegratis.online",48],["dztechphone.com",48],["funivie.org",48],["goodbakery.ru",[48,73]],["ifdreamscametrue.com",[48,119]],["juegosdetiempolibre.org",48],["musicindustryhowto.com",[48,84,98]],["sdelatotoplenie.ru",[48,93]],["sachonthi.com",48],["zdravenportal.eu",[48,122]],["thezealots.org",48],["deportealdia.live",48],["hulnews.top",48],["truyenbanquyen.com",48],["globaledu.jp",48],["lataifas.ro",[48,126]],["blisseyhusband.in",[48,73]],["openfinanza.it",[48,98]],["followmikewynn.com",48],["starbene.it",48],["bimiacg.net",48],["diaforetiko.gr",48],["tchadcarriere.com",48],["info-beihilfe.de",48],["zgywyd.cn",48],["mercenaryenrollment.com",48],["wawlist.com",[48,57]],["cristelageorgescu.ro",48],["crunchyscan.fr",48],["www-daftarharga.blogspot.com",48],["koszalincity.pl",[48,57]],["theghostinmymachine.com",48],["ilovevaldinon.it",48],["aileen-novel.online",[48,118]],["bumigemilang.com",[48,118]],["bingotingo.com",48],["stream.bunkr.is",48],["blueraindrops.com",48],["sekaikomik.live",48],["privivkainfo.ru",48],["apps2app.com",48],["bestjavporn.com",48],["mm9841.cc",48],["myoplay.club",48],["bpcj.or.jp",48],["cdramalove.com",48],["outidesigoto.com",48],["xemphimaz.com",48],["gourmetscans.net",[48,158]],["awebstories.com",48],["zgbk.com",48],["clujust.ro",[48,98]],["stockpokeronline.com",48],["indianhealthyrecipes.com",[48,57]],["stiridinromania.ro",48],["kooora4lives.net",48],["kooora4livs.com",48],["ferroviando.com.br",[48,165,166,167]],["counciloflove.com",[48,165,166,167]],["infokik.com",[48,165,166,167]],["kulinarnastronamocy.pl",[48,165,166,167]],["jafekri.com",[48,165,166,167]],["paidiatreio.gr",[48,78]],["workhouses.org.uk",48],["dollarvr.com",[48,98]],["newsme.gr",[48,98]],["daily-tohoku.news",[48,95]],["descopera.ro",48],["velicu.eu",48],["arenavalceana.ro",[48,73]],["firmwarefile.com",48],["asianexpress.co.uk",48],["best4hack.blogspot.com",48],["certificationexamanswers.890m.com",48],["cookhero.gr",48],["creative-chemistry.org.uk",48],["deutschaj.com",48],["divineyogaschool.blogspot.com",48],["fabioambrosi.it",48],["flory4all.com",48],["fv2freegifts.org",48],["geniusjw.com",48],["ideas0419.com",48],["jeyran.net",48],["ktm2day.com",48],["letsdownloads.com",48],["limametti.com",48],["luyenthithukhoa.vn",48],["otakukan.com",48],["ribbelmonster.de",48],["untitle.org",48],["uptimeside.webnode.gr",48],["usmleexperiences.review",48],["zoommastory.com",48],["urbanbrush.net",48],["audiotools.in",48],["raindropteamfan.com",48],["manhwahentai.me",48],["ph.ontools.net",48],["scarysymptoms.com",[48,158]],["musicallyvideos.com",48],["evz.ro",49],["visionias.net",49],["safetxt.net",49],["javbest.xyz",49],["javbix.com",49],["javgrab.com",49],["goalup.live",49],["hatsukimanga.com",49],["47news.jp",49],["japanxxxmovie.com",49],["sexpox.com",49],["ibomma.pw",49],["aepos.ap.gov.in",49],["ssphim.net",[49,57]],["10000recipe.com",49],["mcocguideblog.com",50],["singingdalong.blogspot.com",50],["tecnotutoshd.net",50],["multifilemirror.com",51],["opensubtitles.org",52],["eca-anime.net",53],["braziljournal.com",54],["flyertalk.com",10],["searchenginewatch.com",55],["oggiscuola.com",56],["sabishiidesu.com",57],["banglainsider.com",[57,76]],["animesanka.com",57],["lendagames.com",57],["vinaurl.blogspot.com",[57,123]],["utorrentgamesps2.blogspot.com",57],["articlesmania.me",57],["aksensei.com",57],["dropgalaxy.com",57],["allcryptoz.net",57],["crewbase.net",57],["crewus.net",57],["shinbhu.net",57],["shinchu.net",57],["thumb8.net",57],["thumb9.net",57],["topcryptoz.net",57],["uniqueten.net",57],["ultraten.net",57],["krunkercentral.com",57],["desijugar.net",57],["adslink.pw",57],["genesistls.com",[57,98]],["senpaiediciones.com",[57,98]],["procrackerz.org",[57,98]],["kashmirobserver.net",58],["cathouseonthekings.com",59],["winaero.com",60],["centrumher.eu",61],["japancamerahunter.com",62],["airlinercafe.com",62],["thegraillords.net",63],["worldscientific.com",63],["videohelp.com",63],["upsrtconline.co.in",64],["qualityfilehosting.com",65],["booksmedicos.org",66],["forum.politz.com.br",67],["siliconinvestor.com",68],["space-engineers.de",68],["coffeeforums.co.uk",68],["anime2you.de",68],["majorgeeks.com",68],["jobsbotswana.info",69],["npnews24.com",70],["fordogtrainers.pl",[71,72]],["polskacanada.com",73],["fantricks.com",73],["blog.kwick.de",73],["selfstudyhistory.com",[73,98]],["yeuphimmoik.com",73],["repack-games.com",73],["delicateseliterare.ro",73],["wpplugins.tips",73],["verselemzes.hu",[73,177]],["sqlserveregitimleri.com",73],["gezimanya.com",74],["athletic.net",75],["playonlinux.com",77],["bitblokes.de",79],["bold.dk",80],["pureinfotech.com",81],["almasdarnews.com",81],["casertace.net",81],["civildigital.com",81],["lesmoutonsenrages.fr",81],["venusarchives.com",81],["verpornocomic.com",81],["balticlivecam.com",82],["molineuxmix.co.uk",83],["yaledailynews.com",83],["canondrivers.org",[84,85]],["forum.nlmod.net",88],["includehelp.com",89],["u.gg",90],["routenote.com",92],["themosvagas.com.br",[92,130]],["nekopoi.web.id",93],["world4.eu",[93,117,118]],["mt07-forum.de",94],["auto-treff.com",94],["telefon-treff.de",94],["dodge-forum.eu",94],["altranotizia.it",95],["hearthstone-decks.net",96],["full-anime.fr",27],["nonton78.com",97],["sbfast.com",97],["vupload.com",97],["opportunitydesk.org",98],["selfstudyanthro.com",98],["renditepassive.net",98],["androidtvbox.eu",98],["flinsetyadi.com",[98,104]],["rawneix.in",[98,154,155]],["the-masters-voice.com",[98,104]],["activationkeys.co",98],["pandurul.ro",99],["masrawy.com",100],["milfzr.com",101],["phrasemix.com",102],["pitesti24.ro",104],["samsungtechwin.com",104],["cours-de-droit.net",104],["iptv4best.com",104],["blogvisaodemercado.pt",104],["kapitalis.com",104],["tiempo.hn",104],["winmeen.com",104],["ibps.in",104],["visse.com.br",104],["javsubtitle.co",104],["licensekeys.org",104],["mediahiburan.my",104],["tipssehatcantik.com",104],["anime-drama.jp",104],["jbjbgame.com",104],["viatasisanatate.com",104],["ziarulargesul.ro",104],["globaldefensecorp.com",104],["gossipnextdoor.com",104],["coffeeapps.ir",104],["media.framu.world",104],["immobiliaremia.com",104],["colegiosconcertados.info",104],["bigdatauni.com",104],["rukim.id",104],["visefierbinti.ro",104],["cyberkrafttraining.com",104],["theaircurrent.com",104],["nocturnetls.net",104],["clockks.com",104],["ananda-yoga.ro",104],["poolpiscina.com",104],["infodifesa.it",104],["getective.com",104],["formatatmak.com",104],["drkrok.com",104],["alphagirlreviews.com",104],["kitchennovel.com",104],["voxvalachorum.ro",104],["cracksone.com",104],["day-hoc.org",104],["onlineonderdelenshop.nl",104],["primicia.com.ve",104],["tech-recipes.com",104],["postcourier.com.pg",104],["afrikmag.com",104],["maduras.vip",104],["aprendeinglessila.com",104],["kicknews.today",104],["koalasplayground.com",104],["hellokpop.com",104],["hayatbilgileri.com",104],["moneyexcel.com",104],["placementstore.com",104],["neuroteam-metz.de",104],["codedosa.com",104],["liveyourmaths.com",104],["newspao.gr",104],["ieltsliz.com",104],["programasvirtualespc.net",104],["tempatwisataseru.com",104],["moneyguru.co",105],["abola.pt",31],["unixhow.com",106],["wikihow.com",107],["analizy.pl",109],["phimmedia.info",110],["zeeebatch.blogspot.com",111],["sokolow-mlp.pl",111],["japan-fans.com",111],["ohmygirl.ml",112],["cissamagazine.com.br",113],["phoronix.com",114],["observatoriodocinema.uol.com.br",115],["salidzini.lv",116],["portalcriatividade.com.br",[117,160]],["kitguru.net",120],["lvturbo.com",121],["sbbrisk.com",121],["sbface.com",121],["sbspeed.com",121],["streamsb.net",121],["itscybertech.com",121],["whatfontis.com",124],["tritinia.com",125],["sportnews.to",[125,133]],["psihologiadeazi.ro",125],["dubznetwork.com",[125,156]],["lowkeytech.com",127],["ubuntudde.com",127],["techsini.com",128],["allmovie.com",129],["sidereel.com",129],["appofmirror.com",131],["developpez.com",132],["scatch176duplicities.com",134],["voe-unblock.com",134],["phimdinhcao.com",135],["picallow.com",136],["freestreams-live1.com",136],["links.extralinks.casa",137],["ssuathletics.com",138],["titulky.com",139],["dongphimmoiz.com",140],["investorvillage.com",141],["grandoldteam.com",142],["gamingsinners.com",142],["elitepvpers.com",143],["geeksforgeeks.org",144],["acupoffrench.com",145],["novelza.com",145],["novelpia.com",[146,147,148]],["viewsb.com",149],["dizipal210.com",[149,150]],["dizipal211.com",[149,150]],["dizipal222.com",[149,150]],["dizipal223.com",[149,150]],["dizipal229.com",[149,150]],["dizipal232.com",[149,150]],["dizipal233.com",[149,150]],["dizipal234.com",[149,150]],["dizipal235.com",[149,150]],["dizipal236.com",[149,150]],["dizipal237.com",[149,150]],["dizipal238.com",[149,150]],["dizipal239.com",[149,150]],["dizipal240.com",[149,150]],["dizipal241.com",[149,150]],["dizipal242.com",[149,150]],["dizipal243.com",[149,150]],["dizipal244.com",[149,150]],["dizipal246.com",[149,150]],["dizipal247.com",[149,150]],["dizipal248.com",[149,150]],["dizipal249.com",[149,150]],["nsfwzone.xyz",149],["dlmovies.link",149],["top1iq.com",151],["unlimitedfiles.xyz",152],["aztravels.net",153],["downfile.site",153],["memangbau.com",153],["trangchu.news",153],["revenue.land",154],["eplayer.click",156],["olacast.live",156],["ntuplay.xyz",156],["fucktube4k.com",157],["knightnoscanlation.com",157],["maxstream.video",159],["smokelearned.net",161],["nhentaihaven.org",162],["slideshare.net",163],["hidemywp.co",164],["bolugundem.com",165],["memoryhackers.org",168],["turkbettv154.com",169],["mgsm.pl",171],["camcaps.to",172],["vtplayer.net",172],["phimlongtieng.net",[173,174,175,176]],["weakstream.org",178],["jk-market.com",179],["vtbe.net",180],["film4e.com",181],["zamundatv.com",181],["boston.com",182],["britannica.com",182],["cattime.com",182],["dogtime.com",182],["download.mokeedev.com",182],["freep.com",182],["ijr.com",182],["knowyourmeme.com",182],["nationalreview.com",182],["order-order.com",182],["savvytime.com",182],["techlicious.com",182],["technicpack.net",182],["thedraftnetwork.com",182],["wrestlezone.com",182],["xda-developers.com",182],["legacy.com",183]]);

const entitiesMap = new Map([["notebookcheck",36],["marapcana",48],["europixhd",[48,57]],["topeuropix",[48,57]],["dramacute",[48,95]],["depedlps",48],["mangatoon",48],["123movies",[48,104]],["gomovies",48],["fmovies",[48,104]],["otakudesu",48],["yoyofilmeys",48],["mangaku",49],["dramaqu",49],["tvzingvn",97],["zingtvhd",97],["zingvntv",97],["sbflix",97]]);

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
