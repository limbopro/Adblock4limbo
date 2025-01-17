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

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_removeNodeText = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["script","DisplayAcceptableAdIfAdblocked"],["script","adslotFilledByCriteo"],["script","/==undefined.*body/"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","/adbl/i"],["script","Reflect"],["script","document.write"],["script","deblocker"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","exdynsrv"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|ad block|alert/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","popUnderUrl"],["script","Adblock"],["script","alert"],["script","/adb/i"],["script","/ABDetected|navigator.brave|fetch/"],["script","/bypass.php"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script",";break;case $."],["script","adb_detected"],["script","window.open"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","/decodeURIComponent\\(escape|fairAdblock/"],["script","/event\\.keyCode|DisableDevtool/"],["script","/WebAssembly|forceunder/"],["script","popundersPerIP"],["script","wpadmngr.com"],["script","/adb|offsetWidth/i"],["script","contextmenu"],["script","/adblock|var Data.*];/"],["script","replace"],["script",";}}};break;case $."],["script","globalThis;break;case"],["script","{delete window["],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","charCodeAt"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","popunder"],["script","googlesyndication"],["script","blockAdBlock"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","error-report.com"],["script","KCgpPT57bGV0IGU"],["script","adShield"],["script","Ad-Shield"],["script","adrecover.com"],["script","html-load.com"],["script","AreLoaded"],["script","AdblockRegixFinder"],["script","/adScript|adsBlocked/"],["script","serve"],["script","?metric=transit.counter&key=fail_redirect&tags="],["script","/pushAdTag|link_click|getAds/"],["script","/ConsoleBan|alert|AdBlocker/"],["script","runPop"],["style","body:not(.ownlist)"],["script","mdpDeblocker"],["script","alert","condition","adblock"],["script","/ai_|googletag|adb/"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","AdBlock"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","insertAdjacentHTML"],["script","popUnder"],["script","adb"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","zfgloaded"],["script","ai_adb"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","app_checkext"],["script","clientHeight"],["script","await"],["script","!window.adngin"],["script","axios"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","\"\").split(\",\")[4]"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","Symbol.iterator"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","detectAdBlock"],["script","AaDetector"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","/document\\.head\\.appendChild|window\\.open/"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","detect"],["script","fetch"],["script","document.createTextNode"],["script","/h=decodeURIComponent|popundersPerIP|adserverDomain/"],["script","/shown_at|WebAssembly/"],["script","style"],["script","shown_at"],["script","adsSrc"],["script","/adblock|popunder|openedPop|WebAssembly/"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["script","window.warn"],["script","adBlock"],["script","adBlockDetected"],["script","/fetch|adb/i"],["script","location"],["script","adblockimg"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/pop1stp|detectAdBlock/"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","displayAdsV3"],["script","adblocker"],["script","break;case"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adserverDomain|\\);break;case /"],["script","initializeInterstitial"],["script","popupBackground"],["script","Math.floor"],["script","m9-ad-modal"],["script","Anzeige"],["script","blocking"],["script","adBlockNotice"],["script","advads"],["script","document.cookie"],["script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"],["script","/_0x|brave|onerror/"],["script","kmtAdsData"],["script","wpadmngr"],["script","navigator.userAgent"],["script","WebAssembly"],["script","checkAdBlock"],["script","detectedAdblock"],["script","setADBFlag"],["script","/h=decodeURIComponent|popundersPerIP|wpadmngr|popMagic/"],["script","/wpadmngr|adserverDomain/"],["script","/account_ad_blocker|tmaAB/"],["script","ads_block"],["script","var Data"],["script","==\"]"],["script","ads-blocked"],["script","#adbd"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","adBlockEnabled"],["script","/b5rh0rt|\\;\\}\\}catch\\(_/"],["script","/[a-zA-Z0-9]{10","20}\\; \\} \\}/"],["script","\"data-adm-url\""],["script","NREUM"]];

const hostnamesMap = new Map([["alpin.de",0],["boersennews.de",0],["chefkoch.de",0],["chip.de",0],["clever-tanken.de",0],["desired.de",0],["donnerwetter.de",0],["fanfiktion.de",0],["focus.de",0],["formel1.de",0],["frustfrei-lernen.de",0],["gewinnspiele.tv",0],["giga.de",0],["gut-erklaert.de",0],["kino.de",0],["messen.de",0],["nickles.de",0],["nordbayern.de",0],["spielfilm.de",0],["teltarif.de",[0,1]],["unsere-helden.com",0],["weltfussball.at",0],["watson.de",0],["moviepilot.de",[0,5]],["mactechnews.de",0],["sport1.de",0],["welt.de",0],["aupetitparieur.com",2],["allthingsvegas.com",2],["100percentfedup.com",2],["beforeitsnews.com",2],["concomber.com",2],["conservativebrief.com",2],["conservativefiringline.com",2],["dailylol.com",2],["funnyand.com",2],["letocard.fr",2],["mamieastuce.com",2],["meilleurpronostic.fr",2],["patriotnationpress.com",2],["toptenz.net",2],["vitamiiin.com",2],["writerscafe.org",2],["populist.press",2],["dailytruthreport.com",2],["livinggospeldaily.com",2],["first-names-meanings.com",2],["welovetrump.com",2],["thehayride.com",2],["thelibertydaily.com",2],["thepoke.co.uk",2],["thepolitistick.com",2],["theblacksphere.net",2],["shark-tank.com",2],["naturalblaze.com",2],["greatamericanrepublic.com",2],["dailysurge.com",2],["truthlion.com",2],["flagandcross.com",2],["westword.com",2],["republicbrief.com",2],["freedomfirstnetwork.com",2],["phoenixnewtimes.com",2],["designbump.com",2],["clashdaily.com",2],["madworldnews.com",2],["reviveusa.com",2],["sonsoflibertymedia.com",2],["thedesigninspiration.com",2],["videogamesblogger.com",2],["protrumpnews.com",2],["thepalmierireport.com",2],["kresy.pl",2],["thepatriotjournal.com",2],["gellerreport.com",2],["thegatewaypundit.com",2],["wltreport.com",2],["miaminewtimes.com",2],["politicalsignal.com",2],["rightwingnews.com",2],["bigleaguepolitics.com",2],["comicallyincorrect.com",2],["web.de",3],["skidrowreloaded.com",[4,15]],["embedsports.me",[4,64]],["embedstream.me",[4,14,15,60,64]],["jumbtv.com",[4,64]],["reliabletv.me",[4,64]],["topembed.pw",[4,62,201]],["crackstreamer.net",4],["methstreamer.com",4],["rnbastreams.com",4],["1stream.eu",4],["4kwebplay.xyz",4],["antennasports.ru",4],["buffsports.me",[4,60]],["buffstreams.app",4],["claplivehdplay.ru",[4,201]],["cracksports.me",[4,14]],["euro2024direct.ru",4],["ext.to",4],["eztv.tf",4],["eztvx.to",4],["kenitv.me",[4,14,15]],["lewblivehdplay.ru",[4,201]],["mlbbite.net",4],["mlbstreams.ai",4],["qatarstreams.me",[4,14]],["qqwebplay.xyz",[4,201]],["soccerworldcup.me",[4,14]],["topstreams.info",4],["totalsportek.to",4],["viwlivehdplay.ru",4],["vidco.pro",[4,60]],["streamingnow.mov",[4,54]],["cinedesi.in",6],["intro-hd.net",6],["monacomatin.mc",6],["nodo313.net",6],["hesgoal-tv.io",6],["hesgoal-vip.io",6],["yts.mx",8],["magesypro.com",9],["pinsystem.co.uk",9],["elrellano.com",9],["tinyppt.com",9],["veganab.co",9],["camdigest.com",9],["learnmany.in",9],["amanguides.com",[9,35]],["highkeyfinance.com",[9,35]],["appkamods.com",9],["techacode.com",9],["djqunjab.in",9],["downfile.site",9],["expertvn.com",9],["trangchu.news",9],["3dmodelshare.org",9],["nulleb.com",9],["asiaon.top",9],["coursesghar.com",9],["thecustomrom.com",9],["snlookup.com",9],["bingotingo.com",9],["ghior.com",9],["3dmili.com",9],["karanpc.com",9],["plc247.com",9],["apkdelisi.net",9],["javindo.eu.org",9],["chindohot.site",9],["freepasses.org",9],["tomarnarede.pt",9],["basketballbuzz.ca",9],["dribbblegraphics.com",9],["kemiox.com",9],["checkersmenu.us",9],["teksnologi.com",9],["bharathwick.com",9],["descargaspcpro.net",9],["dx-tv.com",9],["rt3dmodels.com",9],["plc4me.com",9],["blisseyhusbands.com",9],["madaradex.org",9],["trigonevo.com",9],["franceprefecture.fr",9],["jazbaat.in",9],["aipebel.com",9],["audiotools.blog",9],["embdproxy.xyz",9],["upornia.com",11],["germancarforum.com",13],["cybercityhelp.in",13],["innateblogger.com",13],["streamnoads.com",[14,15,53,60]],["bowfile.com",14],["cloudvideo.tv",[14,60]],["coloredmanga.com",14],["exeo.app",14],["hiphopa.net",[14,15]],["megaup.net",14],["olympicstreams.co",[14,60]],["tv247.us",[14,15]],["uploadhaven.com",14],["userscloud.com",[14,60]],["mlbbox.me",14],["neodrive.xyz",14],["mdfx9dc8n.net",15],["mdzsmutpcvykb.net",15],["mixdrop21.net",15],["mixdropjmk.pw",15],["141jav.com",15],["1bit.space",15],["1bitspace.com",15],["345movies.com",15],["3dporndude.com",15],["4archive.org",15],["4horlover.com",15],["560pmovie.com",15],["85tube.com",15],["85videos.com",15],["acefile.co",15],["actusports.eu",15],["adclickersbot.com",15],["adricami.com",15],["adslink.pw",15],["adultstvlive.com",15],["adz7short.space",15],["aeblender.com",15],["ahdafnews.blogspot.com",15],["ak47sports.com",15],["akuma.moe",15],["allplayer.tk",15],["amateurblog.tv",15],["androidadult.com",[15,224]],["anhsexjav.xyz",15],["anidl.org",15],["anime-loads.org",15],["animeblkom.net",15],["animefire.plus",15],["animelek.me",15],["animespire.net",15],["animestotais.xyz",15],["animeyt.es",15],["anroll.net",15],["anymoviess.xyz",15],["aotonline.org",15],["asenshu.com",15],["asialiveaction.com",15],["asianclipdedhd.net",15],["askim-bg.com",15],["asumsikedaishop.com",15],["avcrempie.com",15],["avseesee.com",15],["gettapeads.com",[15,53]],["backfirstwo.com",15],["bajarjuegospcgratis.com",15],["balkanportal.net",15],["balkanteka.net",15],["bdnewszh.com",[15,60]],["belowporn.com",15],["bestgirlsexy.com",15],["bestnhl.com",15],["bestporn4free.com",15],["bestporncomix.com",15],["bet36.es",15],["bikinitryon.net",15],["birdurls.com",15],["bitsearch.to",15],["blackcockadventure.com",15],["blackcockchurch.org",15],["blackporncrazy.com",15],["blizzboygames.net",15],["blizzpaste.com",15],["blkom.com",15],["blog-peliculas.com",15],["blogtrabalhista.com",15],["bobsvagene.club",15],["bolly4umovies.click",15],["bonusharian.pro",15],["brilian-news.id",15],["brupload.net",15],["bucitana.com",15],["camchickscaps.com",15],["camgirlcum.com",15],["camgirls.casa",15],["cashurl.in",15],["castingx.net",15],["ccurl.net",[15,60]],["celebrity-leaks.net",15],["cgpelis.net",15],["charexempire.com",15],["choosingnothing.com",15],["clasico.tv",15],["clik.pw",15],["coin-free.com",[15,32]],["coins100s.fun",15],["comicsmanics.com",15],["compucalitv.com",15],["coolcast2.com",15],["cosplaytab.com",15],["countylocalnews.com",15],["cpmlink.net",15],["crackstreamshd.click",15],["crespomods.com",15],["crisanimex.com",15],["crunchyscan.fr",15],["cuevana3.fan",15],["cuevana3hd.com",15],["cumception.com",15],["cutpaid.com",15],["dailyuploads.net",15],["datawav.club",15],["daughtertraining.com",15],["deepgoretube.site",15],["deltabit.co",15],["deporte-libre.top",15],["depvailon.com",15],["derleta.com",15],["desivdo.com",15],["desixx.net",15],["detikkebumen.com",15],["deutschepornos.me",15],["diasoft.xyz",15],["directupload.net",15],["diskusscan.com",15],["dixva.com",15],["doctormalay.com",15],["dofusports.xyz",15],["dogemate.com",15],["doods.cam",15],["doodskin.lat",15],["downloadrips.com",15],["downvod.com",15],["dphunters.mom",15],["dragontranslation.com",15],["dvdfullestrenos.com",15],["ebookbb.com",15],["ebookhunter.net",15],["egyanime.com",15],["egygost.com",15],["egyshare.cc",15],["ekasiwap.com",15],["electro-torrent.pl",15],["elil.cc",15],["eplayer.click",15],["erovoice.us",15],["eroxxx.us",15],["estrenosdoramas.net",15],["everia.club",15],["everythinginherenet.blogspot.com",15],["extrafreetv.com",15],["extremotvplay.com",15],["fapinporn.com",15],["fapptime.com",15],["fashionblog.tv",15],["fastreams.live",15],["faucethero.com",15],["fembed.com",15],["femdom-joi.com",15],["fileone.tv",15],["film1k.com",15],["filmeonline2023.net",15],["filmesonlinex.org",15],["filmesonlinexhd.biz",[15,60]],["filmovitica.com",15],["filmymaza.blogspot.com",15],["filthy.family",15],["fixfinder.click",15],["flostreams.xyz",15],["flyfaucet.com",15],["footyhunter.lol",15],["forex-trnd.com",15],["forumchat.club",15],["forumlovers.club",15],["freemoviesonline.biz",15],["freeomovie.co.in",15],["freeomovie.to",15],["freeporncomic.net",15],["freepornhdonlinegay.com",15],["freeproxy.io",15],["freeuse.me",15],["freeusexporn.com",15],["fsicomics.com",15],["gamepcfull.com",15],["gameronix.com",15],["gamesfullx.com",15],["gameshdlive.net",15],["gamesmountain.com",15],["gamesrepacks.com",15],["gamingguru.fr",15],["gamovideo.com",15],["garota.cf",15],["gaydelicious.com",15],["gaypornmasters.com",15],["gaysex69.net",15],["gemstreams.com",15],["get-to.link",15],["girlscanner.org",15],["giurgiuveanul.ro",15],["gledajcrtace.xyz",15],["gocast2.com",15],["gomo.to",15],["gostosa.cf",15],["gtlink.co",15],["gwiazdypornosow.pl",15],["haho.moe",15],["hatsukimanga.com",15],["hayhd.net",15],["hdsaprevodom.com",15],["hdstreamss.club",15],["hentais.tube",15],["hentaistream.co",15],["hentaitk.net",15],["hentaitube.online",15],["hentaiworld.tv",15],["hesgoal.tv",15],["hexupload.net",15],["hhkungfu.tv",15],["highlanderhelp.com",15],["hindimean.com",15],["hindimovies.to",[15,60]],["hiperdex.com",15],["hispasexy.org",15],["hitprn.com",15],["hoca4u.com",15],["hollymoviehd.cc",15],["hoodsite.com",15],["hopepaste.download",15],["hornylips.com",15],["hotgranny.live",15],["hotmama.live",15],["hqcelebcorner.net",15],["huren.best",15],["hwnaturkya.com",[15,60]],["hxfile.co",[15,60]],["igfap.com",15],["iklandb.com",15],["illink.net",15],["imgkings.com",15],["imgsex.xyz",15],["imx.to",15],["influencersgonewild.org",15],["infosgj.free.fr",15],["investnewsbrazil.com",15],["itdmusics.com",15],["itsuseful.site",15],["itunesfre.com",15],["iwatchfriendsonline.net",[15,118]],["jackstreams.com",15],["jatimupdate24.com",15],["jav-fun.cc",15],["jav-noni.cc",15],["jav-scvp.com",15],["javcl.com",15],["javf.net",15],["javhay.net",15],["javhoho.com",15],["javhun.com",15],["javleak.com",15],["javporn.best",15],["javsek.net",15],["javsex.to",15],["javtiful.com",[15,29]],["jimdofree.com",15],["jiofiles.org",15],["jorpetz.com",15],["jp-films.com",15],["jpop80ss3.blogspot.com",15],["jpopsingles.eu",[15,177]],["kantotflix.net",15],["kantotinyo.com",15],["kaoskrew.org",15],["kaplog.com",15],["keralatvbox.com",15],["kickassanimes.io",15],["kimochi.info",15],["kimochi.tv",15],["kinemania.tv",15],["konstantinova.net",15],["koora-online.live",15],["kunmanga.com",15],["kutmoney.com",15],["kwithsub.com",15],["manga-oni.com",15],["mangaboat.com",15],["mangagenki.me",15],["mangahere.onl",15],["mangaweb.xyz",15],["mangoporn.net",15],["manhwahentai.me",15],["masahub.com",15],["masahub.net",15],["maturegrannyfuck.com",15],["mdy48tn97.com",15],["mediapemersatubangsa.com",15],["mega-mkv.com",15],["megapastes.com",15],["megapornpics.com",15],["messitv.net",15],["meusanimes.net",15],["milfmoza.com",15],["milfzr.com",15],["millionscast.com",15],["mimaletamusical.blogspot.com",15],["mitly.us",15],["mkv-pastes.com",15],["monaskuliner.ac.id",15],["moredesi.com",15],["movgotv.net",15],["movi.pk",15],["movieswbb.com",15],["moviewatch.com.pk",15],["mp4upload.com",15],["mrskin.live",15],["multicanaistv.com",15],["mundowuxia.com",15],["myeasymusic.ir",15],["myonvideo.com",15],["myyouporn.com",15],["narutoget.info",15],["naughtypiss.com",15],["nerdiess.com",15],["new-fs.eu",15],["newtorrentgame.com",15],["nflstreams.me",15],["niaomea.me",[15,60]],["nicekkk.com",15],["nicesss.com",15],["nlegs.com",15],["nolive.me",[15,60]],["notformembersonly.com",15],["novamovie.net",15],["novelpdf.xyz",15],["novelssites.com",[15,60]],["novelup.top",15],["nsfwr34.com",15],["nu6i-bg-net.com",15],["nudebabesin3d.com",15],["nukedfans.com",15],["nuoga.eu",15],["nzbstars.com",15],["ohjav.com",15],["ojearnovelas.com",15],["okanime.xyz",15],["olarixas.xyz",15],["oldbox.cloud",15],["olweb.tv",15],["olympicstreams.me",15],["on9.stream",15],["onepiece-mangaonline.com",15],["onifile.com",15],["onionstream.live",15],["onlinesaprevodom.net",15],["onlyfullporn.video",15],["onplustv.live",15],["originporn.com",15],["ovagames.com",15],["ovamusic.com",15],["packsporn.com",15],["pahaplayers.click",15],["palimas.org",15],["pandafiles.com",15],["password69.com",15],["pastemytxt.com",15],["payskip.org",15],["peeplink.in",15],["peliculasmx.net",15],["pervertgirlsvideos.com",15],["pervyvideos.com",15],["phim12h.com",15],["picdollar.com",15],["pickteenz.com",15],["pics4you.net",15],["picsxxxporn.com",15],["pinayscandalz.com",15],["pinkueiga.net",15],["piratefast.xyz",15],["piratehaven.xyz",15],["pirateiro.com",15],["pirlotvonline.org",15],["playtube.co.za",15],["plugintorrent.com",15],["pmvzone.com",15],["porndish.com",15],["pornez.net",15],["pornfetishbdsm.com",15],["pornfits.com",15],["pornhd720p.com",15],["pornobr.club",15],["pornobr.ninja",15],["pornodominicano.net",15],["pornofaps.com",15],["pornoflux.com",15],["pornotorrent.com.br",15],["pornredit.com",15],["pornstarsyfamosas.es",15],["pornstreams.co",15],["porntn.com",15],["pornxbit.com",15],["pornxday.com",15],["portaldasnovinhas.shop",15],["portugues-fcr.blogspot.com",15],["poscitesch.com",[15,60]],["poseyoung.com",15],["pover.org",15],["proxyninja.org",15],["pubfilmz.com",15],["publicsexamateurs.com",15],["punanihub.com",15],["putlocker5movies.org",15],["pxxbay.com",15],["r18.best",15],["ragnaru.net",15],["rapbeh.net",15],["rapelust.com",15],["rapload.org",15],["read-onepiece.net",15],["retro-fucking.com",15],["retrotv.org",15],["robaldowns.com",15],["rockdilla.com",15],["rojadirectatvenvivo.com",15],["rojitadirecta.blogspot.com",15],["romancetv.site",15],["rsoccerlink.site",15],["rule34.club",15],["rule34hentai.net",15],["rumahbokep-id.com",15],["safego.cc",15],["sakurafile.com",15],["satoshi-win.xyz",15],["scat.gold",15],["scatfap.com",15],["scatkings.com",15],["scnlog.me",15],["scripts-webmasters.net",15],["serie-turche.com",15],["serijefilmovi.com",15],["sexcomics.me",15],["sexdicted.com",15],["sexgay18.com",15],["sexofilm.co",15],["sextgem.com",15],["sextubebbw.com",15],["sgpics.net",15],["shadowrangers.live",15],["shahee4u.cam",15],["shahiid-anime.net",15],["shemale6.com",15],["shinden.pl",15],["short.es",15],["showmanga.blog.fc2.com",15],["shrt10.com",15],["shurt.pw",15],["sideplusleaks.net",15],["silverblog.tv",15],["silverpic.com",15],["sinhalasub.life",15],["sinsitio.site",15],["sinvida.me",15],["skidrowcpy.com",15],["skidrowfull.com",15],["slut.mom",15],["smallencode.me",15],["smoner.com",15],["smplace.com",15],["soccerinhd.com",[15,60]],["socceron.name",15],["softairbay.com",15],["sokobj.com",15],["songsio.com",15],["souexatasmais.com",15],["sportbar.live",15],["sportstream1.cfd",15],["srt.am",15],["srts.me",15],["stbemuiptv.com",15],["stockingfetishvideo.com",15],["stream.crichd.vip",15],["stream.lc",15],["stream25.xyz",15],["streambee.to",15],["streamcenter.pro",15],["streamers.watch",15],["streamgo.to",15],["streamkiste.tv",15],["streamoupload.xyz",15],["streamservicehd.click",15],["streamvid.net",[15,24]],["subtitleporn.com",15],["subtitles.cam",15],["suicidepics.com",15],["supertelevisionhd.com",15],["supexfeeds.com",15],["swiftload.io",15],["swzz.xyz",15],["sxnaar.com",15],["tabooporns.com",15],["taboosex.club",15],["tapeantiads.com",[15,53]],["tapeblocker.com",[15,53]],["tapenoads.com",[15,53]],["tapewithadblock.org",[15,53,231]],["teamos.xyz",15],["teen-wave.com",15],["teenporncrazy.com",15],["telegramgroups.xyz",15],["telenovelasweb.com",15],["tensei-shitara-slime-datta-ken.com",15],["tfp.is",15],["tgo-tv.co",[15,60]],["thaihotmodels.com",15],["theblueclit.com",15],["thebussybandit.com",15],["thedaddy.to",[15,199]],["theicongenerator.com",15],["thelastdisaster.vip",15],["thepiratebay0.org",15],["thepiratebay10.info",15],["thesexcloud.com",15],["thothub.today",15],["tightsexteens.com",15],["tojav.net",15],["tokyoblog.tv",15],["top16.net",15],["topvideosgay.com",15],["torrage.info",15],["torrents.vip",15],["torrsexvid.com",15],["tpb-proxy.xyz",15],["trannyteca.com",15],["trendytalker.com",15],["tumanga.net",15],["turbogvideos.com",15],["turbovid.me",15],["turkishseriestv.org",15],["turksub24.net",15],["tutele.sx",15],["tvglobe.me",15],["tvpclive.com",15],["tvs-widget.com",15],["tvseries.video",15],["ucptt.com",15],["ufaucet.online",15],["ufcfight.online",15],["ultrahorny.com",15],["ultraten.net",15],["unblockweb.me",15],["underhentai.net",15],["uniqueten.net",15],["upbaam.com",15],["upstream.to",15],["valeriabelen.com",15],["verdragonball.online",15],["vfxmed.com",15],["video.az",15],["videostreaming.rocks",15],["videowood.tv",15],["vidorg.net",15],["vidtapes.com",15],["vidz7.com",15],["vikistream.com",15],["vikv.net",15],["virpe.cc",15],["visifilmai.org",15],["viveseries.com",15],["vladrustov.sx",15],["volokit2.com",[15,199]],["vstorrent.org",15],["w-hentai.com",15],["watchbrooklynnine-nine.com",15],["watchelementaryonline.com",15],["watchjavidol.com",15],["watchkobestreams.info",15],["watchlostonline.net",15],["watchmonkonline.com",15],["watchrulesofengagementonline.com",15],["watchthekingofqueens.com",15],["webcamrips.com",15],["wincest.xyz",15],["wolverdon.fun",15],["wordcounter.icu",15],["worldmovies.store",15],["worldstreams.click",15],["wpdeployit.com",15],["wqstreams.tk",15],["wwwsct.com",15],["xanimeporn.com",15],["xblog.tv",15],["xn--verseriesespaollatino-obc.online",15],["xn--xvideos-espaol-1nb.com",15],["xpornium.net",15],["xsober.com",15],["xvip.lat",15],["xxgasm.com",15],["xxvideoss.org",15],["xxx18.uno",15],["xxxdominicana.com",15],["xxxfree.watch",15],["xxxmax.net",15],["xxxwebdlxxx.top",15],["xxxxvideo.uno",15],["y2b.wiki",15],["yabai.si",15],["yadixv.com",15],["yayanimes.net",15],["yeshd.net",15],["yodbox.com",15],["youjax.com",15],["yourdailypornvideos.ws",15],["yourupload.com",15],["ytstv.me",15],["zerion.cc",15],["zerocoin.top",15],["zitss.xyz",15],["zpaste.net",15],["zplayer.live",15],["1337x.ninjaproxy1.com",15],["y2tube.pro",15],["freeshot.live",15],["fastreams.com",15],["redittsports.com",15],["sky-sports.store",15],["streamsoccer.site",15],["tntsports.store",15],["wowstreams.co",15],["zdsptv.com",15],["faucet.ovh",16],["oko.sh",[17,44,45]],["variety.com",18],["gameskinny.com",18],["deadline.com",18],["washingtonpost.com",19],["bigbtc.win",20],["cryptofun.space",20],["gosexpod.com",21],["sexo5k.com",22],["truyen-hentai.com",22],["theshedend.com",24],["zeroupload.com",24],["securenetsystems.net",24],["miniwebtool.com",24],["bchtechnologies.com",24],["eracast.cc",24],["spiegel.de",25],["jacquieetmichel.net",26],["hausbau-forum.de",27],["althub.club",27],["kiemlua.com",27],["appnee.com",28],["tea-coffee.net",30],["spatsify.com",30],["newedutopics.com",30],["getviralreach.in",30],["edukaroo.com",30],["funkeypagali.com",30],["careersides.com",30],["nayisahara.com",30],["wikifilmia.com",30],["infinityskull.com",30],["viewmyknowledge.com",30],["iisfvirtual.in",30],["starxinvestor.com",30],["jkssbalerts.com",30],["kenzo-flowertag.com",31],["mdn.lol",31],["btcbitco.in",32],["btcsatoshi.net",32],["cempakajaya.com",32],["crypto4yu.com",32],["gainl.ink",32],["manofadan.com",32],["readbitcoin.org",32],["wiour.com",32],["tremamnon.com",32],["btc25.org",32],["bitsmagic.fun",32],["ourcoincash.xyz",32],["blog.cryptowidgets.net",33],["blog.insurancegold.in",33],["blog.wiki-topia.com",33],["blog.coinsvalue.net",33],["blog.cookinguide.net",33],["blog.freeoseocheck.com",33],["aylink.co",34],["sugarona.com",35],["nishankhatri.xyz",35],["cety.app",36],["exe-urls.com",36],["exego.app",36],["cutlink.net",36],["cutsy.net",36],["cutyurls.com",36],["cutty.app",36],["cutnet.net",36],["tinys.click",37],["answerpython.com",37],["formyanime.com",37],["gsm-solution.com",37],["h-donghua.com",37],["hindisubbedacademy.com",37],["linksdramas2.blogspot.com",37],["pkgovjobz.com",37],["ripexbooster.xyz",37],["serial4.com",37],["serial412.blogspot.com",37],["sigmalinks.in",37],["tutorgaming.com",37],["everydaytechvams.com",37],["dipsnp.com",37],["cccam4sat.com",37],["zeemoontv-24.blogspot.com",37],["stitichsports.com",37],["aiimgvlog.fun",38],["appsbull.com",39],["diudemy.com",39],["maqal360.com",39],["mphealth.online",39],["makefreecallsonline.com",39],["androjungle.com",39],["bookszone.in",39],["drakescans.com",39],["shortix.co",39],["msonglyrics.com",39],["app-sorteos.com",39],["bokugents.com",39],["client.pylexnodes.net",39],["btvplus.bg",39],["blog24.me",[40,41]],["coingraph.us",42],["impact24.us",42],["iconicblogger.com",43],["auto-crypto.click",43],["tvi.la",[44,45]],["iir.la",[44,45]],["tii.la",[44,45]],["ckk.ai",[44,45]],["oei.la",[44,45]],["lnbz.la",[44,45]],["oii.la",[44,45,62]],["tpi.li",[44,45]],["smutty.com",46],["e-sushi.fr",46],["freeadultcomix.com",46],["down.dataaps.com",46],["filmweb.pl",46],["safetxt.net",46],["premiumporn.org",46],["atglinks.com",47],["kbconlinegame.com",48],["hamrojaagir.com",48],["odijob.com",48],["blogesque.net",49],["bookbucketlyst.com",49],["explorosity.net",49],["optimizepics.com",49],["torovalley.net",49],["travize.net",49],["trekcheck.net",49],["metoza.net",49],["techlike.net",49],["snaplessons.net",49],["atravan.net",49],["transoa.net",49],["techmize.net",49],["crenue.net",49],["simana.online",50],["fooak.com",50],["joktop.com",50],["evernia.site",50],["falpus.com",50],["indiamaja.com",51],["newshuta.in",51],["celebzcircle.com",51],["bi-girl.net",51],["hentaiseason.com",51],["hoodtrendspredict.com",51],["marcialhub.xyz",51],["osteusfilmestuga.online",51],["ragnarokscanlation.opchapters.com",51],["sampledrive.org",51],["tojimangas.com",51],["tvappapk.com",51],["twobluescans.com",[51,95]],["varnascan.xyz",51],["financemonk.net",52],["advertisertape.com",53],["tapeadsenjoyer.com",[53,60]],["tapeadvertisement.com",53],["tapelovesads.org",53],["watchadsontape.com",53],["neymartv.net",54],["streamhd247.info",54],["hindimoviestv.com",54],["nowlive1.me",54],["buzter.xyz",54],["valhallas.click",54],["cuervotv.me",[54,60]],["aliezstream.pro",54],["daddy-stream.xyz",54],["instream.pro",54],["mylivestream.pro",54],["powerover.online",54],["sportea.link",54],["sportsurge.stream",54],["ufckhabib.com",54],["ustream.pro",54],["papa4k.online",54],["animeshqip.site",54],["apkship.shop",54],["buzter.pro",54],["enjoysports.bond",54],["filedot.to",54],["foreverquote.xyz",54],["hdstream.one",54],["kingstreamz.site",54],["live.fastsports.store",54],["livesnow.me",54],["livesports4u.pw",54],["masterpro.click",54],["nuxhallas.click",54],["papahd.info",54],["rgshows.me",54],["sportmargin.live",54],["sportmargin.online",54],["sportsloverz.xyz",54],["sportzlive.shop",54],["supertipzz.online",54],["totalfhdsport.xyz",54],["ultrastreamlinks.xyz",54],["usgate.xyz",54],["webmaal.cfd",54],["wizistreamz.xyz",54],["worldstreamz.shop",54],["g-porno.com",54],["g-streaming.com",54],["giga-streaming.com",54],["educ4m.com",54],["fromwatch.com",54],["visualnewshub.com",54],["rahim-soft.com",55],["x-video.tube",55],["rubystm.com",55],["rubyvid.com",55],["streamruby.com",55],["poophd.cc",55],["windowsreport.com",55],["hyundaitucson.info",56],["exambd.net",57],["cgtips.org",58],["emuenzen.de",59],["adsh.cc",60],["afilmyhouse.blogspot.com",60],["ak.sv",60],["animesultra.com",60],["api.webs.moe",60],["apkmody.io",60],["attvideo.com",60],["backfirstwo.site",[60,146]],["crazyblog.in",60],["divicast.com",60],["dlhd.so",60],["embed.meomeo.pw",60],["filmeserialeonline.org",60],["flexyhit.com",60],["foreverwallpapers.com",60],["french-streams.cc",60],["fslinks.org",60],["hdtoday.to",60],["hinatasoul.com",60],["igg-games.com",60],["infinityscans.net",[60,233]],["mangareader.to",60],["membed.net",60],["mgnetu.com",60],["mp3juice.info",60],["mp3juices.cc",60],["myflixerz.to",60],["nowmetv.net",60],["nowsportstv.com",60],["nxbrew.com",60],["oii.io",60],["paidshitforfree.com",60],["pepperlive.info",60],["playertv.net",60],["putlocker68.com",60],["roystream.com",60],["rssing.com",60],["s.to",60],["share.filesh.site",60],["sharkfish.xyz",60],["skidrowcodex.net",60],["smartermuver.com",60],["sports-stream.site",60],["stream4free.live",60],["tamilmobilemovies.in",60],["thewatchseries.live",60],["tnmusic.in",60],["travelplanspro.com",60],["tusfiles.com",60],["tutlehd4.com",60],["twstalker.com",60],["vid-guard.com",60],["vidsaver.net",60],["vidspeeds.com",60],["viralitytoday.com",60],["voiranime.stream",60],["watchdoctorwhoonline.com",60],["watchserie.online",60],["webhostingpost.com",60],["woxikon.in",60],["www-y2mate.com",60],["ylink.bid",60],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",60],["buffshub.stream",62],["cinego.tv",62],["ev01.to",62],["fstream365.com",62],["lulustream.com",62],["minoplres.xyz",62],["mostream.us",62],["s3embtaku.pro",62],["sflix2.to",62],["sportshub.stream",62],["topcinema.cam",62],["animesaturn.cx",62],["hunterscomics.com",62],["unblocked.id",65],["listendata.com",66],["7xm.xyz",66],["fastupload.io",66],["azmath.info",66],["wouterplanet.com",67],["androidacy.com",68],["pillowcase.su",69],["veryfreeporn.com",70],["theporngod.com",70],["besthdgayporn.com",71],["drivenime.com",71],["javup.org",71],["shemaleup.net",71],["freeroms.com",72],["soap2day-online.com",72],["andhrafriends.com",72],["beatsnoop.com",73],["fetchpik.com",73],["hackerranksolution.in",73],["camsrip.com",73],["help.sakarnewz.com",73],["austiblox.net",75],["btcbunch.com",76],["teachoo.com",77],["automobile-catalog.com",[78,79,83]],["motorbikecatalog.com",[78,79,83]],["topstarnews.net",78],["islamicfinder.org",78],["secure-signup.net",78],["dramabeans.com",78],["manta.com",78],["tportal.hr",78],["tvtropes.org",78],["wouldurather.io",78],["convertcase.net",78],["interfootball.co.kr",79],["a-ha.io",79],["cboard.net",79],["jjang0u.com",79],["joongdo.co.kr",79],["viva100.com",79],["gamingdeputy.com",79],["thesaurus.net",79],["alle-tests.nl",79],["maketecheasier.com",79],["allthekingz.com",79],["tweaksforgeeks.com",79],["m.inven.co.kr",79],["mlbpark.donga.com",79],["meconomynews.com",79],["brandbrief.co.kr",79],["motorgraph.com",79],["worldhistory.org",80],["lovelive-petitsoku.com",81],["pravda.com.ua",81],["ap7am.com",82],["cinema.com.my",82],["dolldivine.com",82],["giornalone.it",82],["iplocation.net",82],["jutarnji.hr",82],["mediaindonesia.com",82],["nmplus.hk",82],["slobodnadalmacija.hr",82],["allthetests.com",83],["apkmirror.com",[83,172]],["autoby.jp",83],["blog.esuteru.com",83],["blog.livedoor.jp",83],["carscoops.com",83],["crosswordsolver.com",83],["cruciverba.it",83],["daily.co.jp",83],["dnevno.hr",83],["dziennik.pl",83],["ff14net.2chblog.jp",83],["forsal.pl",83],["freemcserver.net",83],["game8.jp",83],["gazetaprawna.pl",83],["globalrph.com",83],["golf-live.at",83],["heureka.cz",83],["horairesdouverture24.fr",83],["indiatimes.com",83],["itainews.com",83],["j-cast.com",83],["j-town.net",83],["javatpoint.com",83],["jin115.com",83],["kreuzwortraetsel.de",83],["kurashiru.com",83],["lacuarta.com",83],["laleggepertutti.it",83],["mamastar.jp",83],["meeco.kr",83],["mirrored.to",83],["modhub.us",83],["motscroises.fr",83],["news4vip.livedoor.biz",83],["nyitvatartas24.hu",83],["oeffnungszeitenbuch.de",83],["onecall2ch.com",83],["oraridiapertura24.it",83],["palabr.as",83],["persoenlich.com",83],["petitfute.com",83],["powerpyx.com",83],["rabitsokuhou.2chblog.jp",83],["raetsel-hilfe.de",83],["rostercon.com",83],["sourceforge.net",83],["suzusoku.blog.jp",83],["syosetu.com",83],["talkwithstranger.com",83],["the-crossword-solver.com",83],["thestockmarketwatch.com",83],["trilltrill.jp",83],["tvtv.ca",83],["tvtv.us",83],["verkaufsoffener-sonntag.com",83],["webdesignledger.com",83],["wetteronline.de",83],["wfmz.com",83],["winfuture.de",83],["word-grabber.com",83],["wort-suchen.de",83],["yugioh-starlight.com",83],["yutura.net",83],["zagreb.info",83],["mafiatown.pl",84],["bitcotasks.com",85],["hilites.today",86],["udvl.com",87],["www.chip.de",[88,89,234]],["topsporter.net",90],["sportshub.to",90],["streamcheck.link",91],["myanimelist.net",92],["unofficialtwrp.com",93],["codec.kyiv.ua",93],["kimcilonlyofc.com",93],["bitcosite.com",94],["bitzite.com",94],["hacoos.com",97],["watchhentai.net",98],["hes-goals.io",98],["pkbiosfix.com",98],["casi3.xyz",98],["bondagevalley.cc",99],["zefoy.com",100],["mailgen.biz",101],["tempinbox.xyz",101],["vidello.net",102],["newscon.org",103],["yunjiema.top",103],["pcgeeks-games.com",103],["resizer.myct.jp",104],["gametohkenranbu.sakuraweb.com",105],["jisakuhibi.jp",106],["rank1-media.com",106],["lifematome.blog",107],["fm.sekkaku.net",108],["free-avx.jp",109],["dvdrev.com",110],["betweenjpandkr.blog",111],["nft-media.net",112],["ghacks.net",113],["leak.sx",114],["paste.bin.sx",114],["pornleaks.in",114],["songspk2.info",115],["truyentranhfull.net",116],["fcportables.com",116],["repack-games.com",116],["ibooks.to",116],["blog.tangwudi.com",116],["zoechip.com",117],["nohost.one",117],["vidbinge.com",117],["nectareousoverelate.com",119],["khoaiphim.com",120],["haafedk2.com",121],["fordownloader.com",121],["jovemnerd.com.br",122],["totalcsgo.com",123],["vivamax.asia",124],["manysex.com",125],["gaminginfos.com",126],["tinxahoivn.com",127],["automoto.it",128],["codelivly.com",129],["lordchannel.com",130],["client.falixnodes.net",131],["novelhall.com",132],["abc17news.com",133],["bailiwickexpress.com",133],["barnsleychronicle.com",133],["chaptercheats.com",133],["commercialobserver.com",133],["competentedigitale.ro",133],["freeconvert.com",133],["imgur.com",133],["kion546.com",133],["liveandletsfly.com",133],["lizzieinlace.com",133],["localnews8.com",133],["lonestarlive.com",133],["madeeveryday.com",133],["maidenhead-advertiser.co.uk",133],["makeuseof.com",133],["mardomreport.net",133],["melangery.com",133],["milestomemories.com",133],["modernmom.com",133],["momtastic.com",133],["mostlymorgan.com",133],["motherwellmag.com",133],["movieweb.com",133],["muddybootsanddiamonds.com",133],["musicfeeds.com.au",133],["mylifefromhome.com",133],["nationalreview.com",133],["neoskosmos.com",133],["nordot.app",133],["nothingbutnewcastle.com",133],["nsjonline.com",133],["oakvillenews.org",133],["observer.com",133],["ourlittlesliceofheaven.com",133],["palachinkablog.com",133],["patheos.com",133],["pinkonthecheek.com",133],["politicususa.com",133],["predic.ro",133],["puckermom.com",133],["qtoptens.com",133],["realgm.com",133],["reelmama.com",133],["robbreport.com",133],["royalmailchat.co.uk",133],["samchui.com",133],["sandrarose.com",133],["screenrant.com",133],["sherdog.com",133],["sidereel.com",133],["silive.com",133],["simpleflying.com",133],["sloughexpress.co.uk",133],["spacenews.com",133],["sportsgamblingpodcast.com",133],["spotofteadesigns.com",133],["stacysrandomthoughts.com",133],["ssnewstelegram.com",133],["superherohype.com",133],["tablelifeblog.com",133],["thebeautysection.com",133],["thecelticblog.com",133],["thecurvyfashionista.com",133],["thefashionspot.com",133],["thegamer.com",133],["thegamescabin.com",133],["thenerdyme.com",133],["thenonconsumeradvocate.com",133],["theprudentgarden.com",133],["thethings.com",133],["timesnews.net",133],["topspeed.com",133],["toyotaklub.org.pl",133],["travelingformiles.com",133],["tutsnode.org",133],["viralviralvideos.com",133],["wannacomewith.com",133],["wimp.com",[133,135]],["windsorexpress.co.uk",133],["woojr.com",133],["worldoftravelswithkids.com",133],["worldsurfleague.com",133],["xda-developers.com",133],["adoredbyalex.com",133],["agrodigital.com",[133,135]],["al.com",[133,135]],["aliontherunblog.com",[133,135]],["allaboutthetea.com",[133,135]],["allmovie.com",[133,135]],["allmusic.com",[133,135]],["allthingsthrifty.com",[133,135]],["amessagewithabottle.com",[133,135]],["androidpolice.com",133],["antyradio.pl",133],["artforum.com",[133,135]],["artnews.com",[133,135]],["awkward.com",[133,135]],["awkwardmom.com",[133,135]],["becomingpeculiar.com",133],["bethcakes.com",[133,135]],["blogher.com",[133,135]],["bluegraygal.com",[133,135]],["briefeguru.de",[133,135]],["carmagazine.co.uk",133],["cattime.com",133],["cbr.com",133],["cleveland.com",[133,135]],["collider.com",133],["comingsoon.net",133],["crafty.house",133],["dailyvoice.com",[133,135]],["decider.com",[133,135]],["didyouknowfacts.com",[133,135]],["dogtime.com",[133,135]],["dualshockers.com",133],["dustyoldthing.com",133],["faithhub.net",133],["femestella.com",[133,135]],["footwearnews.com",[133,135]],["frogsandsnailsandpuppydogtail.com",[133,135]],["fsm-media.com",133],["funtasticlife.com",[133,135]],["fwmadebycarli.com",[133,135]],["gamerant.com",133],["gfinityesports.com",133],["givemesport.com",133],["gulflive.com",[133,135]],["helloflo.com",133],["homeglowdesign.com",[133,135]],["honeygirlsworld.com",[133,135]],["hotcars.com",133],["howtogeek.com",133],["insider-gaming.com",133],["insurancejournal.com",133],["jasminemaria.com",[133,135]],["lehighvalleylive.com",[133,135]],["lettyskitchen.com",[133,135]],["lifeinleggings.com",[133,135]],["masslive.com",[133,135,235]],["mlive.com",[133,135]],["nj.com",[133,135]],["oregonlive.com",[133,135]],["pagesix.com",[133,135,235]],["pennlive.com",[133,135,235]],["sheknows.com",[133,135]],["syracuse.com",[133,135,235]],["tvline.com",[133,135]],["cheatsheet.com",134],["pwinsider.com",134],["baeldung.com",134],["mensjournal.com",134],["15min.lt",135],["247sports.com",[135,235]],["betweenenglandandiowa.com",135],["bgr.com",135],["blu-ray.com",135],["brobible.com",135],["cagesideseats.com",135],["cbsnews.com",[135,235]],["cbssports.com",[135,235]],["celiacandthebeast.com",135],["dailykos.com",135],["eater.com",135],["eldiariony.com",135],["free-power-point-templates.com",135],["golfdigest.com",135],["ibtimes.co.in",135],["inc.com",135],["indiewire.com",[135,235]],["inquisitr.com",135],["intouchweekly.com",135],["kcrg.com",135],["kentucky.com",135],["knowyourmeme.com",135],["last.fm",135],["lifeandstylemag.com",135],["mandatory.com",135],["nationalpost.com",135],["nbcsports.com",135],["news.com.au",135],["ninersnation.com",135],["nypost.com",[135,235]],["playstationlifestyle.net",135],["rollingstone.com",135],["sbnation.com",135],["sneakernews.com",135],["sport-fm.gr",135],["stylecaster.com",135],["tastingtable.com",135],["thecw.com",135],["thedailymeal.com",135],["theflowspace.com",135],["themarysue.com",135],["torontosun.com",135],["usmagazine.com",135],["wallup.net",135],["worldstar.com",135],["worldstarhiphop.com",135],["yourcountdown.to",135],["bagi.co.in",136],["keran.co",136],["biblestudytools.com",137],["christianheadlines.com",137],["ibelieve.com",137],["kuponigo.com",138],["kimcilonly.site",139],["kimcilonly.link",139],["cryptoearns.com",140],["inxxx.com",141],["ipaspot.app",142],["embedwish.com",143],["filelions.live",143],["leakslove.net",143],["jenismac.com",144],["vxetable.cn",145],["jewelavid.com",146],["nizarstream.com",146],["snapwordz.com",147],["toolxox.com",147],["rl6mans.com",147],["idol69.net",147],["plumbersforums.net",148],["123movies57.online",149],["gulio.site",150],["mediaset.es",151],["updatewallah.in",151],["izlekolik.net",152],["donghuaworld.com",153],["letsdopuzzles.com",154],["rediff.com",155],["dzapk.com",156],["darknessporn.com",157],["familyporner.com",157],["freepublicporn.com",157],["pisshamster.com",157],["punishworld.com",157],["xanimu.com",157],["pig69.com",158],["cosplay18.pics",158],["sexwebvideo.com",158],["sexwebvideo.net",158],["tainio-mania.online",159],["javhdo.net",160],["eroticmoviesonline.me",161],["teleclub.xyz",162],["ecamrips.com",163],["showcamrips.com",163],["tucinehd.com",164],["9animetv.to",165],["qiwi.gg",166],["jornadaperfecta.com",167],["loseart.com",168],["sousou-no-frieren.com",169],["unite-guide.com",170],["thebullspen.com",171],["streambucket.net",173],["nontongo.win",173],["player.smashy.stream",174],["player.smashystream.com",174],["hentaihere.com",174],["cineb.rs",176],["123animehub.cc",176],["hiraethtranslation.com",177],["d0000d.com",178],["d000d.com",178],["d0o0d.com",178],["do0od.com",178],["doods.pro",178],["dooodster.com",178],["ds2play.com",178],["ds2video.com",178],["xfreehd.com",179],["freethesaurus.com",180],["thefreedictionary.com",180],["dexterclearance.com",181],["x86.co.kr",182],["onlyfaucet.com",183],["x-x-x.tube",184],["visionpapers.org",185],["fdownloader.net",186],["thehackernews.com",187],["mielec.pl",188],["treasl.com",189],["mrbenne.com",190],["cnpics.org",191],["ovabee.com",191],["porn4f.com",191],["cnxx.me",191],["ai18.pics",191],["sportsonline.si",192],["fiuxy2.co",193],["animeunity.to",194],["tokopedia.com",195],["remixsearch.net",196],["remixsearch.es",196],["onlineweb.tools",196],["sharing.wtf",196],["2024tv.ru",197],["xnxxcom.xyz",198],["sportsurge.net",199],["joyousplay.xyz",199],["quest4play.xyz",[199,201]],["generalpill.net",199],["moneycontrol.com",200],["cookiewebplay.xyz",201],["ilovetoplay.xyz",201],["streamcaster.live",201],["weblivehdplay.ru",201],["oaaxpgp3.xyz",202],["m9.news",203],["callofwar.com",204],["secondhandsongs.com",205],["nudezzers.org",206],["3rooodnews.net",207],["xxxbfvideo.net",208],["filmy4wap.co.in",209],["filmy4waps.org",209],["gameshop4u.com",210],["regenzi.site",210],["handirect.fr",211],["animefenix.tv",212],["fsiblog3.club",213],["kamababa.desi",213],["atlasstudiousa.com",214],["getfiles.co.uk",215],["genelify.com",216],["dhtpre.com",217],["xbaaz.com",218],["lineupexperts.com",220],["fearmp4.ru",221],["siamblockchain.com",222],["sportnews.to",223],["thesciencetoday.com",223],["ghbrisk.com",225],["botcomics.com",226],["cefirates.com",226],["chandlerorchards.com",226],["comicleaks.com",226],["marketdata.app",226],["monumentmetals.com",226],["tapmyback.com",226],["ping.gg",226],["revistaferramental.com.br",226],["hawpar.com",226],["alpacafinance.org",[226,227]],["nookgaming.com",226],["enkeleksamen.no",226],["kvest.ee",226],["creatordrop.com",226],["panpots.com",226],["cybernetman.com",226],["bitdomain.biz",226],["gerardbosch.xyz",226],["fort-shop.kiev.ua",226],["accuretawealth.com",226],["resourceya.com",226],["tracktheta.com",226],["camberlion.com",226],["replai.io",226],["trybawaryjny.pl",226],["segops.madisonspecs.com",226],["stresshelden-coaching.de",226],["controlconceptsusa.com",226],["ryaktive.com",226],["tip.etip-staging.etip.io",226],["tt.live",227],["future-fortune.com",227],["adventuretix.com",227],["bolighub.dk",227],["panprices.com",228],["intercity.technology",228],["freelancer.taxmachine.be",228],["adria.gg",228],["fjlaboratories.com",228],["emanualonline.com",228],["abhijith.page",228],["helpmonks.com",228],["dataunlocker.com",229],["proboards.com",230],["winclassic.net",230],["pandadoc.com",232],["infinityscans.xyz",233],["infinityscans.org",233],["abema.tv",236]]);

const entitiesMap = new Map([["wawacity",4],["720pstream",[4,60]],["vidsrc",[4,14,60]],["extreme-down",4],["flix-wave",4],["mixdrop",[4,15]],["sanet",4],["sportshd",4],["userupload",6],["pahe",[7,15,62]],["soap2day",7],["reset-scans",9],["poplinks",[9,39]],["mhdsports",9],["mhdsportstv",9],["mhdtvsports",9],["mhdtvworld",9],["mhdtvmax",9],["mhdstream",9],["hqq",10],["waaw",10],["pixhost",12],["viprow",[14,15,60]],["bluemediadownload",14],["bluemediafile",14],["bluemedialink",14],["bluemediastorage",14],["bluemediaurls",14],["urlbluemedia",14],["cloudvideotv",[14,60]],["123-movies",15],["123movieshd",15],["123movieshub",15],["123moviesme",15],["1337x",[15,175]],["1stream",15],["1tamilmv",15],["2ddl",15],["2umovies",15],["3hiidude",15],["4stream",15],["5movies",15],["7hitmovies",15],["9xmovie",15],["aagmaal",[15,60]],["adblockeronstape",[15,53]],["adblockeronstreamtape",15],["adblockplustape",[15,53]],["adblockstreamtape",[15,53]],["adblockstrtape",[15,53]],["adblockstrtech",[15,53]],["adblocktape",[15,53]],["adcorto",15],["alexsports",15],["alexsportss",15],["alexsportz",15],["animepahe",15],["animesanka",15],["animixplay",15],["aniplay",15],["antiadtape",[15,53]],["asianclub",15],["ask4movie",15],["atomixhq",[15,60]],["atomohd",15],["beinmatch",[15,23]],["bhaai",15],["blurayufr",15],["buffstreams",15],["canalesportivo",15],["clickndownload",15],["clicknupload",15],["daddylive",[15,60]],["daddylivehd",[15,60]],["ddrmovies",15],["desiremovies",15],["devlib",15],["divxtotal",15],["divxtotal1",15],["dlhd",15],["dvdplay",[15,60]],["elixx",15],["enjoy4k",15],["estrenosflix",15],["estrenosflux",15],["estrenosgo",15],["f1stream",15],["fbstream",15],["file4go",15],["filmyzilla",[15,60]],["findav",15],["findporn",15],["flixmaza",15],["flizmovies",15],["freetvsports",15],["fullymaza",15],["g3g",15],["gotxx",15],["grantorrent",15],["hdmoviesfair",[15,60]],["hdmoviesflix",15],["hiidudemoviez",15],["imgsen",15],["imgsto",15],["incest",15],["incestflix",15],["itopmusic",15],["javmost",15],["keeplinks",15],["keepvid",15],["keralahd",15],["khatrimazaful",15],["khatrimazafull",15],["mangovideo",15],["masaporn",15],["miniurl",15],["mirrorace",15],["mixdroop",15],["mkvcage",15],["mlbstream",15],["mlsbd",15],["mmsbee",15],["motogpstream",15],["movieplex",15],["movierulzlink",15],["movies123",15],["moviesflix",15],["moviesmeta",15],["moviessources",15],["moviesverse",15],["moviezwaphd",15],["mrunblock",15],["nbastream",15],["newmovierulz",15],["nflstream",15],["nhlstream",15],["noblocktape",[15,53]],["nocensor",15],["onlyfams",15],["ouo",15],["pctfenix",[15,60]],["pctnew",[15,60]],["peliculas24",15],["pelisplus",15],["piratebay",15],["plyjam",15],["plylive",15],["plyvdo",15],["pornhoarder",[15,219]],["prbay",15],["projectfreetv",15],["proxybit",15],["psarips",15],["racaty",15],["remaxhd",15],["rintor",15],["rnbxclusive",15],["rnbxclusive0",15],["rnbxclusive1",15],["rojadirecta",15],["rojadirectaenvivo",15],["rugbystreams",15],["sadisflix",15],["safetxt",15],["shadowrangers",15],["shahi4u",15],["shahid4u1",15],["shahid4uu",15],["shavetape",15],["shortearn",15],["shorten",15],["shorttey",15],["shortzzy",15],["skymovieshd",15],["socceronline",[15,60]],["softarchive",15],["sports-stream",15],["sporttuna",15],["sshhaa",15],["stapadblockuser",[15,53]],["stape",[15,53]],["stapewithadblock",15],["starmusiq",15],["strcloud",[15,53]],["streamadblocker",[15,53,60]],["streamadblockplus",[15,53]],["streamcdn",15],["streamhub",15],["streamsport",15],["streamta",[15,53]],["streamtape",[15,53]],["streamtapeadblockuser",[15,53]],["strikeout",15],["strtape",[15,53]],["strtapeadblock",[15,53]],["strtapeadblocker",[15,53]],["strtapewithadblock",15],["strtpe",[15,53]],["swatchseries",15],["tabooflix",15],["tennisstreams",15],["themoviesflix",15],["thepiratebay",15],["tmearn",15],["toonanime",15],["torlock",15],["tormalayalam",15],["torrentz2eu",15],["tutelehd",15],["tvply",15],["u4m",15],["ufcstream",15],["unblocknow",15],["uploadbuzz",15],["usagoals",15],["vexmoviex",15],["vidclouds",15],["vidlox",15],["vipbox",[15,60]],["vipboxtv",[15,60]],["vipleague",15],["watch-series",15],["watchseries",15],["xclusivejams",15],["xmoviesforyou",15],["youdbox",15],["ytmp3eu",15],["yts-subs",15],["yts",15],["zooqle",15],["dutchycorp",16],["mydverse",37],["shrinke",46],["shrinkme",46],["livecamrips",46],["stfly",49],["stly",49],["ftuapps",51],["showflix",51],["dropgalaxy",52],["bollyflix",54],["daddylive1",54],["esportivos",54],["poscitechs",54],["nekopoi",55],["123movies",60],["123moviesla",60],["123movieweb",60],["2embed",60],["9xmovies",60],["adshort",60],["allmovieshub",60],["asianplay",60],["atishmkv",60],["bflix",60],["cricstream",60],["crictime",60],["dood",[60,178]],["dooood",[60,178]],["extramovies",60],["faselhd",60],["faselhds",60],["filemoon",60],["filmy",60],["filmyhit",60],["filmywap",60],["fmovies",60],["gdplayer",60],["goku",60],["gomovies",60],["gowatchseries",60],["hdfungamezz",60],["hindilinks4u",60],["hurawatch",60],["jalshamoviezhd",60],["livecricket",60],["mhdsport",60],["mkvcinemas",[60,176]],["movies2watch",60],["moviespapa",60],["mp4moviez",60],["mydownloadtube",60],["nuroflix",60],["o2tvseries",60],["o2tvseriesz",60],["pirlotv",60],["poscitech",60],["primewire",60],["redecanais",60],["serienstream",60],["sflix",60],["shahed4u",60],["shaheed4u",60],["speedostream",60],["sportcast",60],["sportskart",60],["streamingcommunity",[60,62,74]],["tamilarasan",60],["tamilfreemp3songs",60],["tamilprinthd",60],["torrentdosfilmes",60],["tubemate",60],["uploadrar",60],["uqload",60],["vidcloud9",60],["vido",60],["vidoo",60],["vudeo",60],["vumoo",60],["watchomovies",[60,72]],["yesmovies",60],["kickassanime",61],["11xmovies",62],["fzmovies",62],["linkz",62],["myflixer",62],["prmovies",62],["streamblasters",62],["filecrypt",62],["kickass",63],["cine-calidad",70],["woxikon",83],["teluguflix",96],["actvid",117],["torrentdownload",176],["doodstream",178]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function removeNodeText(
    nodeName,
    includes,
    ...extraArgs
) {
    replaceNodeTextFn(nodeName, '', '', 'includes', includes || '', ...extraArgs);
}

function replaceNodeTextFn(
    nodeName = '',
    pattern = '',
    replacement = ''
) {
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('replace-node-text.fn', ...Array.from(arguments));
    const reNodeName = safe.patternToRegex(nodeName, 'i', true);
    const rePattern = safe.patternToRegex(pattern, 'gms');
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    const reIncludes = extraArgs.includes || extraArgs.condition
        ? safe.patternToRegex(extraArgs.includes || extraArgs.condition, 'ms')
        : null;
    const reExcludes = extraArgs.excludes
        ? safe.patternToRegex(extraArgs.excludes, 'ms')
        : null;
    const stop = (takeRecord = true) => {
        if ( takeRecord ) {
            handleMutations(observer.takeRecords());
        }
        observer.disconnect();
        if ( safe.logLevel > 1 ) {
            safe.uboLog(logPrefix, 'Quitting');
        }
    };
    const textContentFactory = (( ) => {
        const out = { createScript: s => s };
        const { trustedTypes: tt } = self;
        if ( tt instanceof Object ) {
            if ( typeof tt.getPropertyType === 'function' ) {
                if ( tt.getPropertyType('script', 'textContent') === 'TrustedScript' ) {
                    return tt.createPolicy(getRandomToken(), out);
                }
            }
        }
        return out;
    })();
    let sedCount = extraArgs.sedCount || 0;
    const handleNode = node => {
        const before = node.textContent;
        if ( reIncludes ) {
            reIncludes.lastIndex = 0;
            if ( safe.RegExp_test.call(reIncludes, before) === false ) { return true; }
        }
        if ( reExcludes ) {
            reExcludes.lastIndex = 0;
            if ( safe.RegExp_test.call(reExcludes, before) ) { return true; }
        }
        rePattern.lastIndex = 0;
        if ( safe.RegExp_test.call(rePattern, before) === false ) { return true; }
        rePattern.lastIndex = 0;
        const after = pattern !== ''
            ? before.replace(rePattern, replacement)
            : replacement;
        node.textContent = node.nodeName === 'SCRIPT'
            ? textContentFactory.createScript(after)
            : after;
        if ( safe.logLevel > 1 ) {
            safe.uboLog(logPrefix, `Text before:\n${before.trim()}`);
        }
        safe.uboLog(logPrefix, `Text after:\n${after.trim()}`);
        return sedCount === 0 || (sedCount -= 1) !== 0;
    };
    const handleMutations = mutations => {
        for ( const mutation of mutations ) {
            for ( const node of mutation.addedNodes ) {
                if ( reNodeName.test(node.nodeName) === false ) { continue; }
                if ( handleNode(node) ) { continue; }
                stop(false); return;
            }
        }
    };
    const observer = new MutationObserver(handleMutations);
    observer.observe(document, { childList: true, subtree: true });
    if ( document.documentElement ) {
        const treeWalker = document.createTreeWalker(
            document.documentElement,
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT
        );
        let count = 0;
        for (;;) {
            const node = treeWalker.nextNode();
            count += 1;
            if ( node === null ) { break; }
            if ( reNodeName.test(node.nodeName) === false ) { continue; }
            if ( node === document.currentScript ) { continue; }
            if ( handleNode(node) ) { continue; }
            stop(); break;
        }
        safe.uboLog(logPrefix, `${count} nodes present before installing mutation observer`);
    }
    if ( extraArgs.stay ) { return; }
    runAt(( ) => {
        const quitAfter = extraArgs.quitAfter || 0;
        if ( quitAfter !== 0 ) {
            setTimeout(( ) => { stop(); }, quitAfter);
        } else {
            stop();
        }
    }, 'interactive');
}

function getRandomToken() {
    const safe = safeSelf();
    return safe.String_fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1, 'asap': 1,
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
        'Object_defineProperties': Object.defineProperties.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String_fromCharCode': String.fromCharCode,
        'String_split': String.prototype.split,
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
            catch {
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
    } catch {
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            safe.log(`uBO ${text}`);
        };
    }
    return safe;
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
    try { removeNodeText(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_removeNodeText();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
