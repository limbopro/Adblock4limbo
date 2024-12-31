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

const argsList = [["script","DisplayAcceptableAdIfAdblocked"],["script","adslotFilledByCriteo"],["script","/==undefined.*body/"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","/adbl/i"],["script","Reflect"],["script","document.write"],["script","deblocker"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","exdynsrv"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|ad block|alert/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","popUnderUrl"],["script","Adblock"],["script","alert"],["script","/adb/i"],["script","/ABDetected|navigator.brave|fetch/"],["script","/bypass.php"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script",";break;case $."],["script","adb_detected"],["script","window.open"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","/event\\.keyCode|DisableDevtool/"],["script","/WebAssembly|forceunder/"],["script","popundersPerIP"],["script","wpadmngr.com"],["script","/adb|offsetWidth/i"],["script","contextmenu"],["script","/adblock|var Data.*];/"],["script","replace"],["script",";}}};break;case $."],["script","globalThis;break;case"],["script","{delete window["],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","charCodeAt"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","popunder"],["script","googlesyndication"],["script","blockAdBlock"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","error-report.com"],["script","KCgpPT57bGV0IGU"],["script","adShield"],["script","Ad-Shield"],["script","adrecover.com"],["script","html-load.com"],["script",".slice(-2);return decodeURIComponent"],["script","AdblockRegixFinder"],["script","/adScript|adsBlocked/"],["script","serve"],["script","?metric=transit.counter&key=fail_redirect&tags="],["script","/pushAdTag|link_click|getAds/"],["script","/ConsoleBan|alert|AdBlocker/"],["script","runPop"],["style","body:not(.ownlist)"],["script","mdpDeblocker"],["script","alert","condition","adblock"],["script","/decodeURIComponent\\(escape|fairAdblock/"],["script","/ai_|googletag|adb/"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","AdBlock"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","insertAdjacentHTML"],["script","popUnder"],["script","adb"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","zfgloaded"],["script","ai_adb"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","app_checkext"],["script","clientHeight"],["script","await"],["script","!window.adngin"],["script","axios"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","\"\").split(\",\")[4]"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","Symbol.iterator"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","detectAdBlock"],["script","AaDetector"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","/document\\.head\\.appendChild|window\\.open/"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","detect"],["script","fetch"],["script","document.createTextNode"],["script","/h=decodeURIComponent|popundersPerIP|adserverDomain/"],["script","/shown_at|WebAssembly/"],["script","style"],["script","shown_at"],["script","adsSrc"],["script","/adblock|popunder|openedPop|WebAssembly/"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["script","window.warn"],["script","adBlock"],["script","adBlockDetected"],["script","/fetch|adb/i"],["script","location"],["script","adblockimg"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/pop1stp|detectAdBlock/"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","displayAdsV3"],["script","adblocker"],["script","break;case"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adserverDomain|\\);break;case /"],["script","initializeInterstitial"],["script","popupBackground"],["script","Math.floor"],["script","m9-ad-modal"],["script","Anzeige"],["script","blocking"],["script","adBlockNotice"],["script","advads"],["script","document.cookie"],["script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"],["script","/_0x|brave|onerror/"],["script","kmtAdsData"],["script","wpadmngr"],["script","navigator.userAgent"],["script","WebAssembly"],["script","checkAdBlock"],["script","detectedAdblock"],["script","setADBFlag"],["script","/h=decodeURIComponent|popundersPerIP|wpadmngr|popMagic/"],["script","/wpadmngr|adserverDomain/"],["script","/account_ad_blocker|tmaAB/"],["script","ads_block"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","adBlockEnabled"],["script","/b5rh0rt|\\;\\}\\}catch\\(_/"],["script","/ \\=\\=\\= [0-9]{1","2}\\) \\{ \\}/"],["script","\"data-adm-url\""],["script","NREUM"]];

const hostnamesMap = new Map([["alpin.de",0],["boersennews.de",0],["chefkoch.de",0],["chip.de",0],["clever-tanken.de",0],["desired.de",0],["donnerwetter.de",0],["fanfiktion.de",0],["focus.de",0],["formel1.de",0],["frustfrei-lernen.de",0],["gewinnspiele.tv",0],["giga.de",0],["gut-erklaert.de",0],["kino.de",0],["messen.de",0],["nickles.de",0],["nordbayern.de",0],["spielfilm.de",0],["teltarif.de",[0,1]],["unsere-helden.com",0],["weltfussball.at",0],["watson.de",0],["moviepilot.de",[0,5]],["mactechnews.de",0],["sport1.de",0],["welt.de",0],["aupetitparieur.com",2],["allthingsvegas.com",2],["100percentfedup.com",2],["beforeitsnews.com",2],["concomber.com",2],["conservativebrief.com",2],["conservativefiringline.com",2],["dailylol.com",2],["funnyand.com",2],["letocard.fr",2],["mamieastuce.com",2],["meilleurpronostic.fr",2],["patriotnationpress.com",2],["toptenz.net",2],["vitamiiin.com",2],["writerscafe.org",2],["populist.press",2],["dailytruthreport.com",2],["livinggospeldaily.com",2],["first-names-meanings.com",2],["welovetrump.com",2],["thehayride.com",2],["thelibertydaily.com",2],["thepoke.co.uk",2],["thepolitistick.com",2],["theblacksphere.net",2],["shark-tank.com",2],["naturalblaze.com",2],["greatamericanrepublic.com",2],["dailysurge.com",2],["truthlion.com",2],["flagandcross.com",2],["westword.com",2],["republicbrief.com",2],["freedomfirstnetwork.com",2],["phoenixnewtimes.com",2],["designbump.com",2],["clashdaily.com",2],["madworldnews.com",2],["reviveusa.com",2],["sonsoflibertymedia.com",2],["thedesigninspiration.com",2],["videogamesblogger.com",2],["protrumpnews.com",2],["thepalmierireport.com",2],["kresy.pl",2],["thepatriotjournal.com",2],["gellerreport.com",2],["thegatewaypundit.com",2],["wltreport.com",2],["miaminewtimes.com",2],["politicalsignal.com",2],["rightwingnews.com",2],["bigleaguepolitics.com",2],["comicallyincorrect.com",2],["web.de",3],["skidrowreloaded.com",[4,15]],["embedsports.me",[4,63]],["embedstream.me",[4,14,15,59,63]],["jumbtv.com",[4,63]],["reliabletv.me",[4,63]],["topembed.pw",[4,61,201]],["crackstreamer.net",4],["methstreamer.com",4],["rnbastreams.com",4],["1stream.eu",4],["4kwebplay.xyz",4],["antennasports.ru",4],["buffsports.me",[4,59]],["buffstreams.app",4],["claplivehdplay.ru",[4,201]],["cracksports.me",[4,14]],["euro2024direct.ru",4],["ext.to",4],["eztv.tf",4],["eztvx.to",4],["kenitv.me",[4,14,15]],["lewblivehdplay.ru",[4,201]],["mlbbite.net",4],["mlbstreams.ai",4],["qatarstreams.me",[4,14]],["qqwebplay.xyz",[4,201]],["soccerworldcup.me",[4,14]],["topstreams.info",4],["totalsportek.to",4],["viwlivehdplay.ru",4],["vidco.pro",[4,59]],["cinedesi.in",6],["intro-hd.net",6],["monacomatin.mc",6],["nodo313.net",6],["hesgoal-tv.io",6],["hesgoal-vip.io",6],["yts.mx",8],["magesypro.com",9],["pinsystem.co.uk",9],["elrellano.com",9],["tinyppt.com",9],["veganab.co",9],["camdigest.com",9],["learnmany.in",9],["amanguides.com",[9,35]],["highkeyfinance.com",[9,35]],["appkamods.com",9],["techacode.com",9],["djqunjab.in",9],["downfile.site",9],["expertvn.com",9],["trangchu.news",9],["3dmodelshare.org",9],["nulleb.com",9],["asiaon.top",9],["coursesghar.com",9],["thecustomrom.com",9],["snlookup.com",9],["bingotingo.com",9],["ghior.com",9],["3dmili.com",9],["karanpc.com",9],["plc247.com",9],["apkdelisi.net",9],["javindo.eu.org",9],["chindohot.site",9],["freepasses.org",9],["tomarnarede.pt",9],["basketballbuzz.ca",9],["dribbblegraphics.com",9],["kemiox.com",9],["checkersmenu.us",9],["teksnologi.com",9],["bharathwick.com",9],["descargaspcpro.net",9],["dx-tv.com",9],["rt3dmodels.com",9],["plc4me.com",9],["blisseyhusbands.com",9],["madaradex.org",9],["trigonevo.com",9],["franceprefecture.fr",9],["jazbaat.in",9],["aipebel.com",9],["audiotools.blog",9],["embdproxy.xyz",9],["upornia.com",11],["germancarforum.com",13],["cybercityhelp.in",13],["innateblogger.com",13],["streamnoads.com",[14,15,52,59]],["bowfile.com",14],["cloudvideo.tv",[14,59]],["coloredmanga.com",14],["exeo.app",14],["hiphopa.net",[14,15]],["megaup.net",14],["olympicstreams.co",[14,59]],["tv247.us",[14,15]],["uploadhaven.com",14],["userscloud.com",[14,59]],["mlbbox.me",14],["neodrive.xyz",14],["mdfx9dc8n.net",15],["mdzsmutpcvykb.net",15],["mixdrop21.net",15],["mixdropjmk.pw",15],["141jav.com",15],["1bit.space",15],["1bitspace.com",15],["345movies.com",15],["3dporndude.com",15],["4archive.org",15],["4horlover.com",15],["560pmovie.com",15],["60fps.xyz",15],["85tube.com",15],["85videos.com",15],["aazzz.xyz",15],["acefile.co",15],["actusports.eu",15],["adclickersbot.com",15],["adricami.com",15],["adslink.pw",15],["adultstvlive.com",15],["adz7short.space",15],["aeblender.com",15],["ahdafnews.blogspot.com",15],["ak47sports.com",15],["akuma.moe",15],["allplayer.tk",15],["allstreaming.online",15],["amadoras.cf",15],["amadorasdanet.shop",15],["amateurblog.tv",15],["androidadult.com",15],["anhsexjav.xyz",15],["anidl.org",15],["anime-loads.org",15],["animeblkom.net",15],["animefire.plus",15],["animelek.me",15],["animespire.net",15],["animestotais.xyz",15],["animeyt.es",15],["anroll.net",15],["anymoviess.xyz",15],["aotonline.org",15],["asenshu.com",15],["asialiveaction.com",15],["asianclipdedhd.net",15],["askim-bg.com",15],["asumsikedaishop.com",15],["avcrempie.com",15],["avseesee.com",15],["gettapeads.com",[15,52]],["backfirstwo.com",15],["bajarjuegospcgratis.com",15],["balkanportal.net",15],["balkanteka.net",15],["bdnewszh.com",[15,59]],["belowporn.com",15],["bestclaimtrx.xyz",15],["bestgirlsexy.com",15],["bestnhl.com",15],["bestporn4free.com",15],["bestporncomix.com",15],["bet36.es",15],["bikinitryon.net",15],["birdurls.com",15],["bitsearch.to",15],["blackcockadventure.com",15],["blackcockchurch.org",15],["blackporncrazy.com",15],["blizzboygames.net",15],["blizzpaste.com",15],["blkom.com",15],["blog-peliculas.com",15],["blogtrabalhista.com",15],["bobsvagene.club",15],["bolly4umovies.click",15],["bonusharian.pro",15],["brilian-news.id",15],["brupload.net",15],["bucitana.com",15],["cablegratis.online",15],["camchickscaps.com",15],["camgirlcum.com",15],["camgirls.casa",15],["cashurl.in",15],["castingx.net",15],["ccurl.net",[15,59]],["celebrity-leaks.net",15],["cgpelis.net",15],["charexempire.com",15],["choosingnothing.com",15],["clasico.tv",15],["clik.pw",15],["coin-free.com",[15,32]],["coins100s.fun",15],["comicsmanics.com",15],["compucalitv.com",15],["coolcast2.com",15],["cosplaytab.com",15],["countylocalnews.com",15],["cpmlink.net",15],["crackstreamshd.click",15],["crespomods.com",15],["crisanimex.com",15],["crunchyscan.fr",15],["cuevana3.fan",15],["cuevana3hd.com",15],["cumception.com",15],["cutpaid.com",15],["cypherscans.xyz",[15,59]],["dailyuploads.net",15],["datawav.club",15],["daughtertraining.com",15],["deepgoretube.site",15],["deltabit.co",15],["deporte-libre.top",15],["depvailon.com",15],["derleta.com",15],["desivdo.com",15],["desixx.net",15],["detikkebumen.com",15],["deutschepornos.me",15],["diasoft.xyz",15],["directupload.net",15],["diskusscan.com",15],["dixva.com",15],["doctormalay.com",15],["dofusports.xyz",15],["dogemate.com",15],["doods.cam",15],["doodskin.lat",15],["downloadrips.com",15],["downvod.com",15],["dphunters.mom",15],["dragontranslation.com",15],["duddes.xyz",15],["dvdfullestrenos.com",15],["easylinks.in",15],["ebookbb.com",15],["ebookhunter.net",15],["egyanime.com",15],["egygost.com",15],["egyshare.cc",15],["ekasiwap.com",15],["electro-torrent.pl",15],["elil.cc",15],["embed4u.xyz",15],["eplayer.click",15],["erovoice.us",15],["eroxxx.us",15],["estrenosdoramas.net",15],["everia.club",15],["everythinginherenet.blogspot.com",15],["extrafreetv.com",15],["extremotvplay.com",15],["fapinporn.com",15],["fapptime.com",15],["fashionblog.tv",15],["fastreams.live",15],["faucethero.com",15],["fembed.com",15],["femdom-joi.com",15],["fileone.tv",15],["film1k.com",15],["filmeonline2023.net",15],["filmesonlinex.org",15],["filmesonlinexhd.biz",[15,59]],["filmovitica.com",15],["filmymaza.blogspot.com",15],["filthy.family",15],["firstmovies.to",15],["fixfinder.click",15],["flostreams.xyz",15],["flyfaucet.com",15],["footyhunter.lol",15],["footyhunter3.xyz",[15,59]],["forex-trnd.com",15],["forumchat.club",15],["forumlovers.club",15],["freemoviesonline.biz",15],["freeomovie.co.in",15],["freeomovie.to",15],["freeporncomic.net",15],["freepornhdonlinegay.com",15],["freeproxy.io",15],["freeuse.me",15],["freeusexporn.com",15],["fsicomics.com",15],["gambarbogel.xyz",15],["gamepcfull.com",15],["gameronix.com",15],["gamesfullx.com",15],["gameshdlive.net",15],["gameshdlive.xyz",15],["gamesmountain.com",15],["gamesrepacks.com",15],["gamingguru.fr",15],["gamovideo.com",15],["garota.cf",15],["gaydelicious.com",15],["gaypornmasters.com",15],["gaysex69.net",15],["gemstreams.com",15],["get-to.link",15],["girlscanner.org",15],["giurgiuveanul.ro",15],["gledajcrtace.xyz",15],["gocast2.com",15],["gomo.to",15],["gostosa.cf",15],["gtlink.co",15],["gwiazdypornosow.pl",15],["haho.moe",15],["hatsukimanga.com",15],["hayhd.net",15],["hdsaprevodom.com",15],["hdstreamss.club",15],["hentais.tube",15],["hentaistream.co",15],["hentaitk.net",15],["hentaitube.online",15],["hentaiworld.tv",15],["hesgoal.tv",15],["hexupload.net",15],["hhkungfu.tv",15],["highlanderhelp.com",15],["hindimean.com",15],["hindimovies.to",[15,59]],["hiperdex.com",15],["hispasexy.org",15],["hitprn.com",15],["hoca4u.com",15],["hollymoviehd.cc",15],["hoodsite.com",15],["hopepaste.download",15],["hornylips.com",15],["hotgranny.live",15],["hotmama.live",15],["hqcelebcorner.net",15],["huren.best",15],["hwnaturkya.com",[15,59]],["hxfile.co",[15,59]],["igfap.com",15],["ihdstreams.xyz",15],["iklandb.com",15],["illink.net",15],["imgkings.com",15],["imgsex.xyz",15],["imx.to",15],["influencersgonewild.org",15],["infosgj.free.fr",15],["investnewsbrazil.com",15],["itdmusics.com",15],["itsuseful.site",15],["itunesfre.com",15],["iwatchfriendsonline.net",[15,118]],["jackstreams.com",15],["jatimupdate24.com",15],["jav-fun.cc",15],["jav-noni.cc",15],["jav-scvp.com",15],["javcl.com",15],["javf.net",15],["javhay.net",15],["javhoho.com",15],["javhun.com",15],["javleak.com",15],["javporn.best",15],["javsek.net",15],["javsex.to",15],["javtiful.com",[15,29]],["jimdofree.com",15],["jiofiles.org",15],["jorpetz.com",15],["journalyc.online",15],["jp-films.com",15],["jpop80ss3.blogspot.com",15],["jpopsingles.eu",[15,177]],["kantotflix.net",15],["kantotinyo.com",15],["kaoskrew.org",15],["kaplog.com",15],["keralatvbox.com",15],["kickassanimes.io",15],["kimochi.info",15],["kimochi.tv",15],["kinemania.tv",15],["konstantinova.net",15],["koora-online.live",15],["kunmanga.com",15],["kutmoney.com",15],["kwithsub.com",15],["ladangreceh.xyz",15],["lat69.me",15],["latinblog.tv",15],["latinomegahd.net",15],["lazyfaucet.com",15],["leechpremium.link",15],["legendas.dev",15],["legendei.net",15],["lightdlmovies.blogspot.com",15],["lighterlegend.com",15],["linclik.com",15],["linkebr.com",15],["linkrex.net",15],["links.worldfree4u-lol.online",15],["linksfy.co",15],["lody.ink",15],["lovesomecommunity.com",15],["lulu.st",15],["lulustream.com",[15,61]],["luluvdo.com",15],["luzcameraeacao.shop",15],["manga-oni.com",15],["mangaboat.com",15],["mangagenki.me",15],["mangahere.onl",15],["mangaweb.xyz",15],["mangoporn.net",15],["manhwahentai.me",15],["masahub.com",15],["masahub.net",15],["maturegrannyfuck.com",15],["mdy48tn97.com",15],["mediapemersatubangsa.com",15],["mega-mkv.com",15],["megapastes.com",15],["megapornpics.com",15],["messitv.net",15],["meusanimes.net",15],["milfmoza.com",15],["milfzr.com",15],["millionscast.com",15],["mimaletamusical.blogspot.com",15],["mitly.us",15],["mkv-pastes.com",15],["modb.xyz",15],["monaskuliner.ac.id",15],["moredesi.com",15],["movgotv.net",15],["movi.pk",15],["movierr.online",15],["movieswbb.com",15],["moviewatch.com.pk",15],["mp4upload.com",15],["mrskin.live",15],["multicanaistv.com",15],["mundowuxia.com",15],["myeasymusic.ir",15],["myonvideo.com",15],["myyouporn.com",15],["narutoget.info",15],["naughtypiss.com",15],["nerdiess.com",15],["new-fs.eu",15],["newtorrentgame.com",15],["nflstreams.me",15],["niaomea.me",[15,59]],["nicekkk.com",15],["nicesss.com",15],["nlegs.com",15],["nolive.me",[15,59]],["notformembersonly.com",15],["novamovie.net",15],["novelpdf.xyz",15],["novelssites.com",[15,59]],["novelup.top",15],["nsfwr34.com",15],["nu6i-bg-net.com",15],["nudebabesin3d.com",15],["nukedfans.com",15],["nuoga.eu",15],["nzbstars.com",15],["ohjav.com",15],["ojearnovelas.com",15],["okanime.xyz",15],["olarixas.xyz",15],["oldbox.cloud",15],["olweb.tv",15],["olympicstreams.me",15],["on9.stream",15],["oncast.xyz",15],["onepiece-mangaonline.com",15],["onifile.com",15],["onionstream.live",15],["onlinesaprevodom.net",15],["onlyfullporn.video",15],["onplustv.live",15],["originporn.com",15],["ovagames.com",15],["ovamusic.com",15],["packsporn.com",15],["pahaplayers.click",15],["palimas.org",15],["pandafiles.com",15],["papahd.club",15],["papahd1.xyz",15],["password69.com",15],["pastemytxt.com",15],["payskip.org",15],["peeplink.in",15],["peliculasmx.net",15],["pervertgirlsvideos.com",15],["pervyvideos.com",15],["phim12h.com",15],["picdollar.com",15],["pickteenz.com",15],["pics4you.net",15],["picsxxxporn.com",15],["pinayscandalz.com",15],["pinkueiga.net",15],["piratefast.xyz",15],["piratehaven.xyz",15],["pirateiro.com",15],["pirlotvonline.org",15],["playtube.co.za",15],["plugintorrent.com",15],["pmvzone.com",15],["porndish.com",15],["pornez.net",15],["pornfetishbdsm.com",15],["pornfits.com",15],["pornhd720p.com",15],["pornobr.club",15],["pornobr.ninja",15],["pornodominicano.net",15],["pornofaps.com",15],["pornoflux.com",15],["pornotorrent.com.br",15],["pornredit.com",15],["pornstarsyfamosas.es",15],["pornstreams.co",15],["porntn.com",15],["pornxbit.com",15],["pornxday.com",15],["portaldasnovinhas.shop",15],["portugues-fcr.blogspot.com",15],["poscishd.online",15],["poscitesch.com",[15,59]],["poseyoung.com",15],["pover.org",15],["proxyninja.org",15],["pubfilmz.com",15],["publicsexamateurs.com",15],["punanihub.com",15],["putlocker5movies.org",15],["pxxbay.com",15],["r18.best",15],["ragnaru.net",15],["rapbeh.net",15],["rapelust.com",15],["rapload.org",15],["read-onepiece.net",15],["retro-fucking.com",15],["retrotv.org",15],["robaldowns.com",15],["rockdilla.com",15],["rojadirectatvenvivo.com",15],["rojitadirecta.blogspot.com",15],["romancetv.site",15],["rsoccerlink.site",15],["rule34.club",15],["rule34hentai.net",15],["rumahbokep-id.com",15],["safego.cc",15],["safestream.cc",15],["sakurafile.com",15],["satoshi-win.xyz",15],["scat.gold",15],["scatfap.com",15],["scatkings.com",15],["scnlog.me",15],["scripts-webmasters.net",15],["serie-turche.com",15],["serijefilmovi.com",15],["sexcomics.me",15],["sexdicted.com",15],["sexgay18.com",15],["sexofilm.co",15],["sextgem.com",15],["sextubebbw.com",15],["sgpics.net",15],["shadowrangers.live",15],["shahee4u.cam",15],["shahiid-anime.net",15],["shemale6.com",15],["shinden.pl",15],["short.es",15],["showmanga.blog.fc2.com",15],["shrt10.com",15],["shurt.pw",15],["sideplusleaks.net",15],["silverblog.tv",15],["silverpic.com",15],["sinhalasub.life",15],["sinsitio.site",15],["sinvida.me",15],["skidrowcpy.com",15],["skidrowfull.com",15],["slut.mom",15],["smallencode.me",15],["smoner.com",15],["smplace.com",15],["soccerinhd.com",[15,59]],["socceron.name",15],["softairbay.com",15],["sokobj.com",15],["songsio.com",15],["souexatasmais.com",15],["sportbar.live",15],["sportea.online",15],["sportskart.xyz",15],["sportstream1.cfd",15],["srt.am",15],["srts.me",15],["stakes100.xyz",15],["stbemuiptv.com",15],["stockingfetishvideo.com",15],["stream.crichd.vip",15],["stream.lc",15],["stream25.xyz",15],["streambee.to",15],["streamcenter.pro",15],["streamers.watch",15],["streamgo.to",15],["streamkiste.tv",15],["streamoporn.xyz",15],["streamoupload.xyz",15],["streamservicehd.click",15],["streamvid.net",[15,24]],["subtitleporn.com",15],["subtitles.cam",15],["suicidepics.com",15],["supertelevisionhd.com",15],["supexfeeds.com",15],["swiftload.io",15],["swzz.xyz",15],["sxnaar.com",15],["tabooporns.com",15],["taboosex.club",15],["tapeantiads.com",[15,52]],["tapeblocker.com",[15,52]],["tapenoads.com",[15,52]],["tapewithadblock.org",[15,52,227]],["teamos.xyz",15],["teen-wave.com",15],["teenporncrazy.com",15],["telegramgroups.xyz",15],["telenovelasweb.com",15],["tensei-shitara-slime-datta-ken.com",15],["tfp.is",15],["tgo-tv.co",[15,59]],["thaihotmodels.com",15],["theblueclit.com",15],["thebussybandit.com",15],["thedaddy.to",[15,199]],["theicongenerator.com",15],["thelastdisaster.vip",15],["thepiratebay0.org",15],["thepiratebay10.info",15],["thesexcloud.com",15],["thothub.today",15],["tightsexteens.com",15],["tojav.net",15],["tokyoblog.tv",15],["tonnestreamz.xyz",15],["top16.net",15],["topvideosgay.com",15],["torrage.info",15],["torrents.vip",15],["torrsexvid.com",15],["tpb-proxy.xyz",15],["trannyteca.com",15],["trendytalker.com",15],["tumanga.net",15],["turbogvideos.com",15],["turbovid.me",15],["turkishseriestv.org",15],["turksub24.net",15],["tutele.sx",15],["tutelehd3.xyz",15],["tvglobe.me",15],["tvpclive.com",15],["tvs-widget.com",15],["tvseries.video",15],["ucptt.com",15],["ufaucet.online",15],["ufcfight.online",15],["uhdgames.xyz",15],["ultrahorny.com",15],["ultraten.net",15],["unblockweb.me",15],["underhentai.net",15],["uniqueten.net",15],["upbaam.com",15],["upstream.to",15],["valeriabelen.com",15],["verdragonball.online",15],["vfxmed.com",15],["video.az",15],["videostreaming.rocks",15],["videowood.tv",15],["vidorg.net",15],["vidtapes.com",15],["vidz7.com",15],["vikistream.com",15],["vikv.net",15],["virpe.cc",15],["visifilmai.org",15],["viveseries.com",15],["vladrustov.sx",15],["volokit2.com",[15,199]],["vstorrent.org",15],["w-hentai.com",15],["watchaccordingtojimonline.com",15],["watchbrooklynnine-nine.com",15],["watchdowntonabbeyonline.com",15],["watchelementaryonline.com",15],["watcheronline.net",15],["watchgleeonline.com",15],["watchhowimetyourmother.online",15],["watchkobestreams.info",15],["watchlostonline.net",15],["watchlouieonline.com",15],["watchjavidol.com",15],["watchmadmenonline.com",15],["watchmonkonline.com",15],["watchonceuponatimeonline.com",15],["watchparksandrecreation.net",15],["watchprettylittleliarsonline.com",15],["watchrulesofengagementonline.com",15],["watchthekingofqueens.com",15],["watchthemiddleonline.com",15],["watchtvchh.xyz",15],["webcamrips.com",15],["wickedspot.org",15],["wincest.xyz",15],["witanime.best",15],["wolverdon.fun",15],["wolverdonx.com",15],["wordcounter.icu",15],["worldcupstream.pm",15],["worldmovies.store",15],["worldstreams.click",15],["wpdeployit.com",15],["wqstreams.tk",15],["wwwsct.com",15],["xanimeporn.com",15],["xblog.tv",15],["xn--verseriesespaollatino-obc.online",15],["xn--xvideos-espaol-1nb.com",15],["xpornium.net",15],["xsober.com",15],["xvip.lat",15],["xxgasm.com",15],["xxvideoss.org",15],["xxx18.uno",15],["xxxdominicana.com",15],["xxxfree.watch",15],["xxxmax.net",15],["xxxwebdlxxx.top",15],["xxxxvideo.uno",15],["y2b.wiki",15],["yabai.si",15],["yadixv.com",15],["yayanimes.net",15],["yeshd.net",15],["yodbox.com",15],["youjax.com",15],["youpits.xyz",15],["yourdailypornvideos.ws",15],["yourupload.com",15],["ytstv.me",15],["ytstvmovies.co",15],["ytstvmovies.xyz",15],["ytsyify.co",15],["ytsyifymovie.com",15],["zerion.cc",15],["zerocoin.top",15],["zitss.xyz",15],["zpaste.net",15],["zplayer.live",15],["1337x.ninjaproxy1.com",15],["y2tube.pro",15],["freeshot.live",15],["fastreams.com",15],["redittsports.com",15],["sky-sports.store",15],["streamsoccer.site",15],["tntsports.store",15],["wowstreams.co",15],["zdsptv.com",15],["faucet.ovh",16],["oko.sh",[17,44,45]],["variety.com",18],["gameskinny.com",18],["deadline.com",18],["washingtonpost.com",19],["bigbtc.win",20],["cryptofun.space",20],["gosexpod.com",21],["sexo5k.com",22],["truyen-hentai.com",22],["theshedend.com",24],["zeroupload.com",24],["securenetsystems.net",24],["miniwebtool.com",24],["bchtechnologies.com",24],["eracast.cc",24],["spiegel.de",25],["jacquieetmichel.net",26],["hausbau-forum.de",27],["kiemlua.com",27],["appnee.com",28],["tea-coffee.net",30],["spatsify.com",30],["newedutopics.com",30],["getviralreach.in",30],["edukaroo.com",30],["funkeypagali.com",30],["careersides.com",30],["nayisahara.com",30],["wikifilmia.com",30],["infinityskull.com",30],["viewmyknowledge.com",30],["iisfvirtual.in",30],["starxinvestor.com",30],["jkssbalerts.com",30],["kenzo-flowertag.com",31],["mdn.lol",31],["btcbitco.in",32],["btcsatoshi.net",32],["cempakajaya.com",32],["crypto4yu.com",32],["gainl.ink",32],["manofadan.com",32],["readbitcoin.org",32],["wiour.com",32],["tremamnon.com",32],["btc25.org",32],["bitsmagic.fun",32],["ourcoincash.xyz",32],["hynews.biz",32],["blog.cryptowidgets.net",33],["blog.insurancegold.in",33],["blog.wiki-topia.com",33],["blog.coinsvalue.net",33],["blog.cookinguide.net",33],["blog.freeoseocheck.com",33],["aylink.co",34],["sugarona.com",35],["nishankhatri.xyz",35],["cety.app",36],["exe-urls.com",36],["exego.app",36],["cutlink.net",36],["cutsy.net",36],["cutyurls.com",36],["cutty.app",36],["cutnet.net",36],["tinys.click",37],["answerpython.com",37],["formyanime.com",37],["gsm-solution.com",37],["h-donghua.com",37],["hindisubbedacademy.com",37],["linksdramas2.blogspot.com",37],["pkgovjobz.com",37],["ripexbooster.xyz",37],["serial4.com",37],["serial412.blogspot.com",37],["sigmalinks.in",37],["tutorgaming.com",37],["everydaytechvams.com",37],["dipsnp.com",37],["cccam4sat.com",37],["zeemoontv-24.blogspot.com",37],["stitichsports.com",37],["aiimgvlog.fun",38],["appsbull.com",39],["diudemy.com",39],["maqal360.com",39],["mphealth.online",39],["makefreecallsonline.com",39],["androjungle.com",39],["bookszone.in",39],["drakescans.com",39],["shortix.co",39],["msonglyrics.com",39],["app-sorteos.com",39],["bokugents.com",39],["client.pylexnodes.net",39],["btvplus.bg",39],["blog24.me",[40,41]],["coingraph.us",42],["impact24.us",42],["iconicblogger.com",43],["auto-crypto.click",43],["tvi.la",[44,45]],["iir.la",[44,45]],["tii.la",[44,45]],["ckk.ai",[44,45]],["oei.la",[44,45]],["lnbz.la",[44,45]],["oii.la",[44,45]],["tpi.li",[44,45]],["smutty.com",46],["e-sushi.fr",46],["freeadultcomix.com",46],["down.dataaps.com",46],["filmweb.pl",46],["safetxt.net",46],["atglinks.com",47],["kbconlinegame.com",48],["hamrojaagir.com",48],["odijob.com",48],["blogesque.net",49],["bookbucketlyst.com",49],["explorosity.net",49],["optimizepics.com",49],["torovalley.net",49],["travize.net",49],["trekcheck.net",49],["metoza.net",49],["techlike.net",49],["snaplessons.net",49],["atravan.net",49],["transoa.net",49],["techmize.net",49],["crenue.net",49],["simana.online",50],["fooak.com",50],["joktop.com",50],["evernia.site",50],["falpus.com",50],["financemonk.net",51],["advertisertape.com",52],["tapeadsenjoyer.com",[52,59]],["tapeadvertisement.com",52],["tapelovesads.org",52],["watchadsontape.com",52],["neymartv.net",53],["streamhd247.info",53],["hindimoviestv.com",53],["nowlive1.me",53],["buzter.xyz",53],["gamehdlive.online",53],["hdfungamezz.xyz",53],["kingstreamz.lol",53],["masterpro.club",53],["papahd.co",53],["sportos.co",53],["valhallas.click",53],["cuervotv.me",[53,59]],["aliezstream.pro",53],["daddy-stream.xyz",53],["instream.pro",53],["mylivestream.pro",53],["powerover.online",53],["sportea.link",53],["sportsurge.stream",53],["ufckhabib.com",53],["ustream.pro",53],["papa4k.online",53],["animeshqip.site",53],["apkship.shop",53],["buzter.pro",53],["enjoysports.bond",53],["filedot.to",53],["foreverquote.xyz",53],["hdstream.one",53],["kingstreamz.site",53],["live.fastsports.store",53],["livesnow.me",53],["livesports4u.pw",53],["masterpro.click",53],["nuxhallas.click",53],["papahd.info",53],["rgshows.me",53],["sportmargin.live",53],["sportmargin.online",53],["sportsloverz.xyz",53],["sportzlive.shop",53],["supertipzz.online",53],["totalfhdsport.xyz",53],["ultrastreamlinks.xyz",53],["usgate.xyz",53],["webmaal.cfd",53],["wizistreamz.xyz",53],["worldstreamz.shop",53],["g-porno.com",53],["g-streaming.com",53],["giga-streaming.com",53],["educ4m.com",53],["fromwatch.com",53],["visualnewshub.com",53],["rahim-soft.com",54],["x-video.tube",54],["rubystm.com",54],["streamruby.com",54],["poophd.cc",54],["hyundaitucson.info",55],["exambd.net",56],["cgtips.org",57],["emuenzen.de",58],["adsh.cc",59],["afilmyhouse.blogspot.com",59],["ak.sv",59],["animesultra.com",59],["api.webs.moe",59],["apkmody.io",59],["attvideo.com",59],["backfirstwo.site",[59,146]],["crazyblog.in",59],["divicast.com",59],["dlhd.so",59],["embed.meomeo.pw",59],["filmeserialeonline.org",59],["flexyhit.com",59],["foreverwallpapers.com",59],["french-streams.cc",59],["fslinks.org",59],["hdtoday.to",59],["hinatasoul.com",59],["igg-games.com",59],["infinityscans.net",[59,229]],["infinityscans.xyz",[59,229]],["mangareader.to",59],["membed.net",59],["mgnetu.com",59],["mp3juice.info",59],["mp3juices.cc",59],["myflixerz.to",59],["nowmetv.net",59],["nowsportstv.com",59],["nxbrew.com",59],["oii.io",59],["paidshitforfree.com",59],["pepperlive.info",59],["playertv.net",59],["putlocker68.com",59],["roystream.com",59],["rssing.com",59],["s.to",59],["share.filesh.site",59],["sharkfish.xyz",59],["skidrowcodex.net",59],["smartermuver.com",59],["sports-stream.site",59],["stream4free.live",59],["tamilmobilemovies.in",59],["thewatchseries.live",59],["tnmusic.in",59],["travelplanspro.com",59],["tusfiles.com",59],["tutlehd4.com",59],["twstalker.com",59],["vid-guard.com",59],["video-leech.xyz",59],["vidsaver.net",59],["vidspeeds.com",59],["viralitytoday.com",59],["voiranime.stream",59],["watchdoctorwhoonline.com",59],["watchserie.online",59],["webhostingpost.com",59],["woxikon.in",59],["www-y2mate.com",59],["ylink.bid",59],["ytix.xyz",59],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",59],["buffshub.stream",61],["cinego.tv",61],["ev01.to",61],["fstream365.com",61],["minoplres.xyz",61],["mostream.us",61],["s3embtaku.pro",61],["sflix2.to",61],["sportshub.stream",61],["topcinema.cam",61],["unblocked.id",64],["listendata.com",65],["7xm.xyz",65],["fastupload.io",65],["azmath.info",65],["wouterplanet.com",66],["androidacy.com",67],["pillowcase.su",68],["veryfreeporn.com",69],["theporngod.com",69],["besthdgayporn.com",70],["drivenime.com",70],["javup.org",70],["shemaleup.net",70],["freeroms.com",71],["soap2day-online.com",71],["andhrafriends.com",71],["beatsnoop.com",72],["fetchpik.com",72],["hackerranksolution.in",72],["camsrip.com",72],["help.sakarnewz.com",72],["austiblox.net",74],["btcbunch.com",75],["teachoo.com",76],["automobile-catalog.com",[77,78]],["motorbikecatalog.com",[77,78]],["apkmirror.com",[77,172]],["blog.esuteru.com",77],["blog.livedoor.jp",77],["itainews.com",77],["jin115.com",77],["allthetests.com",77],["javatpoint.com",77],["globalrph.com",77],["carscoops.com",77],["crosswordsolver.com",77],["cruciverba.it",77],["dnevno.hr",77],["dziennik.pl",[77,83]],["ff14net.2chblog.jp",77],["heureka.cz",77],["indiatimes.com",77],["lacuarta.com",[77,82]],["laleggepertutti.it",77],["meeco.kr",77],["mirrored.to",77],["motscroises.fr",77],["news4vip.livedoor.biz",77],["oeffnungszeitenbuch.de",77],["onecall2ch.com",77],["oraridiapertura24.it",77],["palabr.as",77],["petitfute.com",77],["rabitsokuhou.2chblog.jp",77],["rostercon.com",77],["slashdot.org",77],["sourceforge.net",77],["suzusoku.blog.jp",77],["the-crossword-solver.com",77],["thestockmarketwatch.com",77],["wfmz.com",77],["word-grabber.com",77],["wort-suchen.de",77],["yutura.net",77],["zagreb.info",77],["freemcserver.net",77],["golf-live.at",77],["kreuzwortraetsel.de",77],["raetsel-hilfe.de",77],["verkaufsoffener-sonntag.com",77],["horairesdouverture24.fr",77],["nyitvatartas24.hu",77],["modhub.us",77],["yugioh-starlight.com",77],["winfuture.de",77],["talkwithstranger.com",77],["topstarnews.net",77],["islamicfinder.org",77],["secure-signup.net",77],["dramabeans.com",77],["manta.com",77],["tportal.hr",77],["tvtropes.org",77],["wouldurather.io",77],["convertcase.net",77],["interfootball.co.kr",78],["a-ha.io",78],["cboard.net",78],["jjang0u.com",78],["joongdo.co.kr",78],["viva100.com",78],["gamingdeputy.com",78],["thesaurus.net",78],["alle-tests.nl",78],["maketecheasier.com",78],["allthekingz.com",78],["tweaksforgeeks.com",78],["m.inven.co.kr",78],["mlbpark.donga.com",78],["meconomynews.com",78],["brandbrief.co.kr",78],["motorgraph.com",78],["worldhistory.org",79],["lovelive-petitsoku.com",80],["pravda.com.ua",80],["ap7am.com",81],["cinema.com.my",81],["dolldivine.com",81],["giornalone.it",81],["iplocation.net",81],["jutarnji.hr",81],["mediaindonesia.com",81],["slobodnadalmacija.hr",81],["game8.jp",82],["persoenlich.com",82],["syosetu.com",82],["autoby.jp",83],["daily.co.jp",83],["j-town.net",83],["mamastar.jp",83],["powerpyx.com",83],["webdesignledger.com",83],["wetteronline.de",83],["bitcotasks.com",84],["hilites.today",85],["udvl.com",86],["www.chip.de",[87,88,230]],["topsporter.net",89],["sportshub.to",89],["streamcheck.link",90],["myanimelist.net",91],["unofficialtwrp.com",92],["codec.kyiv.ua",92],["kimcilonlyofc.com",92],["bitcosite.com",93],["bitzite.com",93],["celebzcircle.com",94],["bi-girl.net",94],["hentaiseason.com",94],["hoodtrendspredict.com",94],["marcialhub.xyz",94],["osteusfilmestuga.online",94],["ragnarokscanlation.opchapters.com",94],["sampledrive.org",94],["tojimangas.com",94],["tvappapk.com",94],["twobluescans.com",[94,95]],["varnascan.xyz",94],["hacoos.com",97],["watchhentai.net",98],["hes-goals.io",98],["pkbiosfix.com",98],["casi3.xyz",98],["bondagevalley.cc",99],["zefoy.com",100],["mailgen.biz",101],["tempinbox.xyz",101],["vidello.net",102],["newscon.org",103],["yunjiema.top",103],["pcgeeks-games.com",103],["resizer.myct.jp",104],["gametohkenranbu.sakuraweb.com",105],["jisakuhibi.jp",106],["rank1-media.com",106],["lifematome.blog",107],["fm.sekkaku.net",108],["free-avx.jp",109],["dvdrev.com",110],["betweenjpandkr.blog",111],["nft-media.net",112],["ghacks.net",113],["leak.sx",114],["paste.bin.sx",114],["pornleaks.in",114],["songspk2.info",115],["truyentranhfull.net",116],["fcportables.com",116],["repack-games.com",116],["pawastreams.info",116],["ibooks.to",116],["blog.tangwudi.com",116],["zoechip.com",117],["nohost.one",117],["nectareousoverelate.com",119],["khoaiphim.com",120],["haafedk2.com",121],["fordownloader.com",121],["jovemnerd.com.br",122],["totalcsgo.com",123],["vivamax.asia",124],["manysex.com",125],["gaminginfos.com",126],["tinxahoivn.com",127],["automoto.it",128],["codelivly.com",129],["lordchannel.com",130],["client.falixnodes.net",131],["novelhall.com",132],["abc17news.com",133],["bailiwickexpress.com",133],["barnsleychronicle.com",133],["chaptercheats.com",133],["commercialobserver.com",133],["competentedigitale.ro",133],["freeconvert.com",133],["imgur.com",133],["kion546.com",133],["lehighvalleylive.com",133],["lettyskitchen.com",133],["lifeinleggings.com",133],["liveandletsfly.com",133],["lizzieinlace.com",133],["localnews8.com",133],["lonestarlive.com",133],["madeeveryday.com",133],["maidenhead-advertiser.co.uk",133],["makeuseof.com",133],["mardomreport.net",133],["melangery.com",133],["milestomemories.com",133],["modernmom.com",133],["momtastic.com",133],["mostlymorgan.com",133],["motherwellmag.com",133],["movieweb.com",133],["muddybootsanddiamonds.com",133],["musicfeeds.com.au",133],["mylifefromhome.com",133],["nationalreview.com",133],["neoskosmos.com",133],["nordot.app",133],["nothingbutnewcastle.com",133],["nsjonline.com",133],["oakvillenews.org",133],["observer.com",133],["ourlittlesliceofheaven.com",133],["palachinkablog.com",133],["patheos.com",133],["pinkonthecheek.com",133],["politicususa.com",133],["predic.ro",133],["puckermom.com",133],["qtoptens.com",133],["realgm.com",133],["reelmama.com",133],["robbreport.com",133],["royalmailchat.co.uk",133],["samchui.com",133],["sandrarose.com",133],["screenrant.com",133],["sherdog.com",133],["sidereel.com",133],["silive.com",133],["simpleflying.com",133],["sloughexpress.co.uk",133],["spacenews.com",133],["sportsgamblingpodcast.com",133],["spotofteadesigns.com",133],["stacysrandomthoughts.com",133],["ssnewstelegram.com",133],["superherohype.com",133],["tablelifeblog.com",133],["thebeautysection.com",133],["thecelticblog.com",133],["thecurvyfashionista.com",133],["thefashionspot.com",133],["thegamer.com",133],["thegamescabin.com",133],["thenerdyme.com",133],["thenonconsumeradvocate.com",133],["theprudentgarden.com",133],["thethings.com",133],["timesnews.net",133],["topspeed.com",133],["toyotaklub.org.pl",133],["travelingformiles.com",133],["tutsnode.org",133],["viralviralvideos.com",133],["wannacomewith.com",133],["wimp.com",[133,135]],["windsorexpress.co.uk",133],["woojr.com",133],["worldoftravelswithkids.com",133],["worldsurfleague.com",133],["xda-developers.com",133],["adoredbyalex.com",133],["agrodigital.com",[133,135]],["al.com",[133,135]],["aliontherunblog.com",[133,135]],["allaboutthetea.com",[133,135]],["allmovie.com",[133,135]],["allmusic.com",[133,135]],["allthingsthrifty.com",[133,135]],["amessagewithabottle.com",[133,135]],["androidpolice.com",133],["antyradio.pl",133],["artforum.com",[133,135]],["artnews.com",[133,135]],["awkward.com",[133,135]],["awkwardmom.com",[133,135]],["becomingpeculiar.com",133],["bethcakes.com",[133,135]],["blogher.com",[133,135]],["bluegraygal.com",[133,135]],["briefeguru.de",[133,135]],["carmagazine.co.uk",133],["cattime.com",133],["cbr.com",133],["cleveland.com",[133,135]],["collider.com",133],["comingsoon.net",133],["crafty.house",133],["dailyvoice.com",[133,135]],["decider.com",[133,135]],["didyouknowfacts.com",[133,135]],["dogtime.com",[133,135]],["dualshockers.com",133],["dustyoldthing.com",133],["faithhub.net",133],["femestella.com",[133,135]],["footwearnews.com",[133,135]],["frogsandsnailsandpuppydogtail.com",[133,135]],["fsm-media.com",133],["funtasticlife.com",[133,135]],["fwmadebycarli.com",[133,135]],["gamerant.com",133],["gfinityesports.com",133],["givemesport.com",133],["gulflive.com",[133,135]],["helloflo.com",133],["homeglowdesign.com",[133,135]],["honeygirlsworld.com",[133,135]],["hotcars.com",133],["howtogeek.com",133],["insider-gaming.com",133],["insurancejournal.com",133],["jasminemaria.com",[133,135]],["masslive.com",[133,135,231]],["mlive.com",[133,135]],["nj.com",[133,135]],["oregonlive.com",[133,135]],["pagesix.com",[133,135,231]],["pennlive.com",[133,135,231]],["sheknows.com",[133,135]],["syracuse.com",[133,135,231]],["tvline.com",[133,135]],["cheatsheet.com",134],["pwinsider.com",134],["baeldung.com",134],["mensjournal.com",134],["15min.lt",135],["247sports.com",[135,231]],["betweenenglandandiowa.com",135],["bgr.com",135],["blu-ray.com",135],["brobible.com",135],["cagesideseats.com",135],["cbsnews.com",[135,231]],["cbssports.com",[135,231]],["celiacandthebeast.com",135],["dailykos.com",135],["eater.com",135],["eldiariony.com",135],["free-power-point-templates.com",135],["golfdigest.com",135],["ibtimes.co.in",135],["inc.com",135],["indiewire.com",[135,231]],["inquisitr.com",135],["intouchweekly.com",135],["kcrg.com",135],["kentucky.com",135],["knowyourmeme.com",135],["last.fm",135],["lifeandstylemag.com",135],["mandatory.com",135],["nbcsports.com",135],["news.com.au",135],["nypost.com",[135,231]],["rollingstone.com",135],["sbnation.com",135],["sneakernews.com",135],["sport-fm.gr",135],["stylecaster.com",135],["tastingtable.com",135],["thecw.com",135],["thedailymeal.com",135],["theflowspace.com",135],["themarysue.com",135],["torontosun.com",135],["usmagazine.com",135],["wallup.net",135],["yourcountdown.to",135],["bagi.co.in",136],["keran.co",136],["biblestudytools.com",137],["christianheadlines.com",137],["ibelieve.com",137],["kuponigo.com",138],["kimcilonly.site",139],["kimcilonly.link",139],["cryptoearns.com",140],["inxxx.com",141],["ipaspot.app",142],["embedwish.com",143],["filelions.live",143],["leakslove.net",143],["jenismac.com",144],["vxetable.cn",145],["jewelavid.com",146],["nizarstream.com",146],["snapwordz.com",147],["toolxox.com",147],["rl6mans.com",147],["idol69.net",147],["plumbersforums.net",148],["123movies57.online",149],["gulio.site",150],["mediaset.es",151],["updatewallah.in",151],["izlekolik.net",152],["donghuaworld.com",153],["letsdopuzzles.com",154],["rediff.com",155],["dzapk.com",156],["darknessporn.com",157],["familyporner.com",157],["freepublicporn.com",157],["pisshamster.com",157],["punishworld.com",157],["xanimu.com",157],["pig69.com",158],["cosplay18.pics",158],["sexwebvideo.com",158],["sexwebvideo.net",158],["tainio-mania.online",159],["javhdo.net",160],["eroticmoviesonline.me",161],["teleclub.xyz",162],["ecamrips.com",163],["showcamrips.com",163],["tucinehd.com",164],["9animetv.to",165],["qiwi.gg",166],["jornadaperfecta.com",167],["loseart.com",168],["sousou-no-frieren.com",169],["unite-guide.com",170],["thebullspen.com",171],["streambucket.net",173],["nontongo.win",173],["player.smashy.stream",174],["player.smashystream.com",174],["cineb.rs",176],["123animehub.cc",176],["hiraethtranslation.com",177],["d0000d.com",178],["d000d.com",178],["d0o0d.com",178],["do0od.com",178],["doods.pro",178],["ds2play.com",178],["ds2video.com",178],["xfreehd.com",179],["freethesaurus.com",180],["thefreedictionary.com",180],["dexterclearance.com",181],["x86.co.kr",182],["onlyfaucet.com",183],["x-x-x.tube",184],["visionpapers.org",185],["fdownloader.net",186],["thehackernews.com",187],["mielec.pl",188],["treasl.com",189],["mrbenne.com",190],["cnpics.org",191],["ovabee.com",191],["porn4f.com",191],["cnxx.me",191],["ai18.pics",191],["sportsonline.si",192],["fiuxy2.co",193],["animeunity.to",194],["tokopedia.com",195],["remixsearch.net",196],["remixsearch.es",196],["onlineweb.tools",196],["sharing.wtf",196],["2024tv.ru",197],["xnxxcom.xyz",198],["sportsurge.net",199],["joyousplay.xyz",199],["quest4play.xyz",[199,201]],["generalpill.net",199],["moneycontrol.com",200],["cookiewebplay.xyz",201],["ilovetoplay.xyz",201],["streamcaster.live",201],["weblivehdplay.ru",201],["oaaxpgp3.xyz",202],["m9.news",203],["callofwar.com",204],["secondhandsongs.com",205],["nudezzers.org",206],["3rooodnews.net",207],["xxxbfvideo.net",208],["filmy4wap.co.in",209],["filmy4waps.org",209],["gameshop4u.com",210],["regenzi.site",210],["handirect.fr",211],["animefenix.tv",212],["fsiblog3.club",213],["kamababa.desi",213],["atlasstudiousa.com",214],["getfiles.co.uk",215],["genelify.com",216],["dhtpre.com",217],["xbaaz.com",218],["lineupexperts.com",220],["fearmp4.ru",221],["botcomics.com",222],["cefirates.com",222],["chandlerorchards.com",222],["comicleaks.com",222],["marketdata.app",222],["monumentmetals.com",222],["tapmyback.com",222],["ping.gg",222],["revistaferramental.com.br",222],["hawpar.com",222],["alpacafinance.org",[222,223]],["nookgaming.com",222],["enkeleksamen.no",222],["kvest.ee",222],["creatordrop.com",222],["panpots.com",222],["cybernetman.com",222],["bitdomain.biz",222],["gerardbosch.xyz",222],["fort-shop.kiev.ua",222],["accuretawealth.com",222],["resourceya.com",222],["tracktheta.com",222],["camberlion.com",222],["replai.io",222],["trybawaryjny.pl",222],["segops.madisonspecs.com",222],["tt.live",223],["future-fortune.com",223],["adventuretix.com",223],["bolighub.dk",223],["panprices.com",224],["intercity.technology",224],["freelancer.taxmachine.be",224],["adria.gg",224],["fjlaboratories.com",224],["emanualonline.com",224],["abhijith.page",224],["helpmonks.com",224],["dataunlocker.com",225],["proboards.com",226],["winclassic.net",226],["pandadoc.com",228],["infinityscans.org",229],["abema.tv",232]]);

const entitiesMap = new Map([["wawacity",4],["720pstream",[4,59]],["vidsrc",[4,14,59]],["extreme-down",4],["flix-wave",4],["mixdrop",[4,15]],["sanet",4],["sportshd",4],["userupload",6],["pahe",[7,15]],["soap2day",7],["reset-scans",9],["poplinks",[9,39]],["mhdsports",9],["mhdsportstv",9],["mhdtvsports",9],["mhdtvworld",9],["mhdtvmax",9],["mhdstream",9],["hqq",10],["waaw",10],["pixhost",12],["viprow",[14,15,59]],["bluemediadownload",14],["bluemediafile",14],["bluemedialink",14],["bluemediastorage",14],["bluemediaurls",14],["urlbluemedia",14],["cloudvideotv",[14,59]],["123-movies",15],["123movieshd",15],["123movieshub",15],["123moviesme",15],["1337x",[15,175]],["1stream",15],["1tamilmv",15],["2ddl",15],["2umovies",15],["3hiidude",15],["4stream",15],["5movies",15],["7hitmovies",15],["9xmovie",15],["9xlinks",15],["aagmaal",[15,59]],["adblockeronstape",[15,52]],["adblockeronstreamtape",15],["adblockplustape",[15,52]],["adblockstreamtape",[15,52]],["adblockstrtape",[15,52]],["adblockstrtech",[15,52]],["adblocktape",[15,52]],["adcorto",15],["alexsports",15],["alexsportss",15],["alexsportz",15],["animepahe",15],["animesanka",15],["animixplay",15],["aniplay",15],["antiadtape",[15,52]],["asianclub",15],["ask4movie",15],["atomixhq",[15,59]],["atomohd",15],["beinmatch",[15,23]],["bhaai",15],["blurayufr",15],["buffstreams",15],["canalesportivo",15],["clickndownload",15],["clicknupload",15],["daddylive",[15,59]],["daddylivehd",[15,59]],["ddrmovies",15],["desiremovies",15],["devlib",15],["divxtotal",15],["divxtotal1",15],["dlhd",15],["dvdplay",[15,59]],["elixx",15],["enjoy4k",15],["estrenosflix",15],["estrenosflux",15],["estrenosgo",15],["f1stream",15],["fbstream",15],["file4go",15],["filmymeet",15],["filmyzilla",[15,59]],["findav",15],["findporn",15],["flixmaza",15],["flizmovies",15],["freetvsports",15],["fullymaza",15],["g3g",15],["gotxx",15],["grantorrent",15],["hdmoviesfair",[15,59]],["hdmoviesflix",15],["hiidudemoviez",15],["imgsen",15],["imgsto",15],["incest",15],["incestflix",15],["itopmusic",15],["javmost",15],["keeplinks",15],["keepvid",15],["keralahd",15],["khatrimazaful",15],["khatrimazafull",15],["leechall",15],["linkshorts",15],["mangovideo",15],["masaporn",15],["miniurl",15],["mirrorace",15],["mixdroop",15],["mkvcage",15],["mlbstream",15],["mlsbd",15],["mmsbee",15],["motogpstream",15],["movieplex",15],["movierulzlink",15],["movies123",15],["moviesflix",15],["moviesmeta",15],["moviessources",15],["moviesverse",15],["moviezwaphd",15],["mrunblock",15],["nbastream",15],["newmovierulz",15],["nflstream",15],["nhlstream",15],["noblocktape",[15,52]],["nocensor",15],["onlyfams",15],["ouo",15],["pctfenix",[15,59]],["pctnew",[15,59]],["peliculas24",15],["pelisplus",15],["piratebay",15],["plyjam",15],["plylive",15],["plyvdo",15],["pornhoarder",[15,219]],["prbay",15],["projectfreetv",15],["proxybit",15],["psarips",15],["racaty",15],["remaxhd",15],["rintor",15],["rnbxclusive",15],["rnbxclusive0",15],["rnbxclusive1",15],["rojadirecta",15],["rojadirectaenvivo",15],["rugbystreams",15],["sadisflix",15],["safetxt",15],["shadowrangers",15],["shahi4u",15],["shahid4u1",15],["shahid4uu",15],["shavetape",15],["shortearn",15],["shorten",15],["shorttey",15],["shortzzy",15],["skymovieshd",15],["socceronline",[15,59]],["softarchive",15],["sports-stream",15],["sporttuna",15],["sshhaa",15],["stapadblockuser",[15,52]],["stape",[15,52]],["stapewithadblock",15],["starmusiq",15],["strcloud",[15,52]],["streamadblocker",[15,52,59]],["streamadblockplus",[15,52]],["streamcdn",15],["streamhub",15],["streamsport",15],["streamta",[15,52]],["streamtape",[15,52]],["streamtapeadblockuser",[15,52]],["strikeout",15],["strtape",[15,52]],["strtapeadblock",[15,52]],["strtapeadblocker",[15,52]],["strtapewithadblock",15],["strtpe",[15,52]],["swatchseries",15],["tabooflix",15],["tennisstreams",15],["themoviesflix",15],["thepiratebay",15],["thisav",15],["tmearn",15],["toonanime",15],["torlock",15],["tormalayalam",15],["torrentz2eu",15],["tutelehd",15],["tvply",15],["u4m",15],["ufcstream",15],["unblocknow",15],["uploadbuzz",15],["usagoals",15],["vexmoviex",15],["vidclouds",15],["vidlox",15],["vipbox",[15,59]],["vipboxtv",[15,59]],["vipleague",15],["watch-series",15],["watchseries",15],["xclusivejams",15],["xmoviesforyou",15],["youdbox",15],["ytmp3eu",15],["yts-subs",15],["yts",15],["zooqle",15],["dutchycorp",16],["mydverse",37],["shrinke",46],["shrinkme",46],["livecamrips",46],["stfly",49],["stly",49],["dropgalaxy",51],["bollyflix",53],["daddylive1",53],["esportivos",53],["poscitechs",53],["nekopoi",54],["123movies",59],["123moviesla",59],["123movieweb",59],["2embed",59],["9xmovies",59],["adshort",59],["allmovieshub",59],["asianplay",59],["atishmkv",59],["bflix",59],["cricstream",59],["crictime",59],["dood",[59,178]],["dooood",[59,178]],["extramovies",59],["faselhd",59],["faselhds",59],["filemoon",59],["filmy",59],["filmyhit",59],["filmywap",59],["fmovies",59],["gdplayer",59],["goku",59],["gomovies",59],["gowatchseries",59],["hdfungamezz",59],["hindilinks4u",59],["hurawatch",59],["jalshamoviezhd",59],["livecricket",59],["mhdsport",59],["mkvcinemas",[59,176]],["movies2watch",59],["moviespapa",59],["mp4moviez",59],["mydownloadtube",59],["nuroflix",59],["o2tvseries",59],["o2tvseriesz",59],["pirlotv",59],["poscitech",59],["primewire",59],["redecanais",59],["serienstream",59],["sflix",59],["shahed4u",59],["shaheed4u",59],["speedostream",59],["sportcast",59],["sportskart",59],["streamingcommunity",[59,61,73]],["tamilarasan",59],["tamilfreemp3songs",59],["tamilprinthd",59],["torrentdosfilmes",59],["tubemate",59],["uploadrar",59],["uqload",59],["vidcloud9",59],["vido",59],["vidoo",59],["vudeo",59],["vumoo",59],["watchomovies",[59,71]],["yesmovies",59],["kickassanime",60],["11xmovies",61],["fzmovies",61],["linkz",61],["prmovies",61],["streamblasters",61],["kickass",62],["cine-calidad",69],["woxikon",77],["ftuapps",94],["showflix",94],["teluguflix",96],["actvid",117],["torrentdownload",176],["doodstream",178]]);

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
