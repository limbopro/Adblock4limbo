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

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_removeNodeText = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["script","DisplayAcceptableAdIfAdblocked"],["script","adslotFilledByCriteo"],["script","/==undefined.*body/"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","popunder"],["script","/adbl/i"],["script","Reflect"],["script","document.write"],["script","deblocker"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","exdynsrv"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","/\\badblock\\b/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","popUnderUrl"],["script","Adblock"],["script","/adb/i"],["script","/ABDetected|navigator.brave|fetch/"],["script","/bypass.php"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script",";break;case $."],["script","adb_detected"],["script","window.open"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","/decodeURIComponent\\(escape|fairAdblock/"],["script","/event\\.keyCode|DisableDevtool/"],["script","/adsbygoogle|detectAdBlock/"],["script","/WebAssembly|forceunder/"],["script","/isAdBlocked|popUnderUrl/"],["script","popundersPerIP"],["script","wpadmngr.com"],["script","/adb|offsetWidth/i"],["script","contextmenu"],["script","/adblock|var Data.*];/"],["script","var Data"],["script","replace"],["script",";}}};break;case $."],["script","globalThis;break;case"],["script","{delete window["],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","charCodeAt"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","googlesyndication"],["script","blockAdBlock"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","brave"],["script","error-report.com"],["script","KCgpPT57bGV0IGU"],["script","adShield"],["script","Ad-Shield"],["script",".xyz/script/"],["script","adrecover.com"],["script","html-load.com"],["script","AreLoaded"],["script","AdblockRegixFinder"],["script","/adScript|adsBlocked/"],["script","serve"],["script","?metric=transit.counter&key=fail_redirect&tags="],["script","/pushAdTag|link_click|getAds/"],["script","/\\', [0-9]{5}\\)\\]\\; \\}/"],["script","/\\\",\\\"clickp\\\"\\:\\\"[0-9]{1,2}\\\"/"],["script","/ConsoleBan|alert|AdBlocker/"],["script","runPop"],["style","body:not(.ownlist)"],["script","mdpDeblocker"],["script","alert","condition","adblock"],["script","/ai_|googletag|adb/"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","AdBlock"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","insertAdjacentHTML"],["script","popUnder"],["script","adb"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","ai_adb"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","app_checkext"],["script","clientHeight"],["script","await"],["script","Object.keys(window.adngin).length"],["script","axios"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","'').split(',')[4]"],["script","\"\").split(\",\")[4]"],["script","/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\",\"\\)\\[4\\]|\\.localStorage\\)\\.getItem\\(\"/"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","Symbol.iterator"],["script","ai_cookie"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","detectAdBlock"],["script","AaDetector"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","/document\\.head\\.appendChild|window\\.open/"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","detect"],["script","fetch"],["script","/hasAdblock|detect/"],["script","document.createTextNode"],["script","/h=decodeURIComponent|popundersPerIP|adserverDomain/"],["script","/shown_at|WebAssembly/"],["script","style"],["script","shown_at"],["script","adsSrc"],["script","/adblock|popunder|openedPop|WebAssembly/"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["script","window.warn"],["script","adBlock"],["script","adBlockDetected"],["script","/fetch|adb/i"],["script","location"],["script","adblockimg"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/pop1stp|detectAdBlock/"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","displayAdsV3"],["script","adblocker"],["script","break;case"],["h2","/creeperhost/i"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adserverDomain|\\);break;case /"],["script","initializeInterstitial"],["script","popupBackground"],["script","Math.floor"],["script","m9-ad-modal"],["script","Anzeige"],["script","blocking"],["script","adBlockNotice"],["script","LieDetector"],["script","advads"],["script","document.cookie"],["script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"],["script","/_0x|brave|onerror/"],["script","MutationObserver"],["script","kmtAdsData"],["script","wpadmngr"],["script","navigator.userAgent"],["script","WebAssembly"],["script","checkAdBlock"],["script","detectedAdblock"],["script","setADBFlag"],["script","/h=decodeURIComponent|popundersPerIP|wpadmngr|popMagic/"],["script","/wpadmngr|adserverDomain/"],["script","/account_ad_blocker|tmaAB/"],["script","ads_block"],["script","/adserverDomain|delete window|FingerprintJS/"],["script","return a.split"],["script","==\"]"],["script","ads-blocked"],["script","#adbd"],["script","AdBl"],["script","/adblock|Cuba|noadb/i"],["script","/adserverDomain|ai_cookie/"],["script","/adsBlocked|\"popundersPerIP\"/"],["script","ab.php"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","adBlockEnabled"],["script","\"data-adm-url\""],["script","NREUM"]];

const hostnamesMap = new Map([["alpin.de",0],["boersennews.de",0],["chefkoch.de",0],["chip.de",0],["clever-tanken.de",0],["desired.de",0],["donnerwetter.de",0],["fanfiktion.de",0],["focus.de",0],["formel1.de",0],["frustfrei-lernen.de",0],["gewinnspiele.tv",0],["giga.de",0],["gut-erklaert.de",0],["kino.de",0],["messen.de",0],["nickles.de",0],["nordbayern.de",0],["spielfilm.de",0],["teltarif.de",[0,1]],["unsere-helden.com",0],["weltfussball.at",0],["watson.de",0],["moviepilot.de",[0,5]],["mactechnews.de",0],["sport1.de",0],["welt.de",0],["sport.de",0],["allthingsvegas.com",2],["100percentfedup.com",2],["beforeitsnews.com",2],["concomber.com",2],["conservativebrief.com",2],["conservativefiringline.com",2],["dailylol.com",2],["funnyand.com",2],["letocard.fr",2],["mamieastuce.com",2],["meilleurpronostic.fr",2],["patriotnationpress.com",2],["toptenz.net",2],["vitamiiin.com",2],["writerscafe.org",2],["populist.press",2],["dailytruthreport.com",2],["livinggospeldaily.com",2],["first-names-meanings.com",2],["welovetrump.com",2],["thehayride.com",2],["thelibertydaily.com",2],["thepoke.co.uk",2],["thepolitistick.com",2],["theblacksphere.net",2],["shark-tank.com",2],["naturalblaze.com",2],["greatamericanrepublic.com",2],["dailysurge.com",2],["truthlion.com",2],["flagandcross.com",2],["westword.com",2],["republicbrief.com",2],["freedomfirstnetwork.com",2],["phoenixnewtimes.com",2],["designbump.com",2],["clashdaily.com",2],["madworldnews.com",2],["reviveusa.com",2],["sonsoflibertymedia.com",2],["thedesigninspiration.com",2],["videogamesblogger.com",2],["protrumpnews.com",2],["thepalmierireport.com",2],["kresy.pl",2],["thepatriotjournal.com",2],["gellerreport.com",2],["thegatewaypundit.com",2],["wltreport.com",2],["miaminewtimes.com",2],["politicalsignal.com",2],["rightwingnews.com",2],["bigleaguepolitics.com",2],["comicallyincorrect.com",2],["web.de",3],["skidrowreloaded.com",[4,16]],["embedsports.me",[4,66]],["embedstream.me",[4,15,16,62,66]],["jumbtv.com",[4,66]],["reliabletv.me",[4,66]],["topembed.pw",[4,64,209]],["crackstreamer.net",4],["methstreamer.com",4],["rnbastreams.com",4],["1stream.eu",4],["4kwebplay.xyz",4],["antennasports.ru",4],["buffsports.me",[4,62]],["buffstreams.app",4],["claplivehdplay.ru",[4,209]],["cracksports.me",[4,15]],["euro2024direct.ru",4],["ext.to",4],["eztv.tf",4],["eztvx.to",4],["kenitv.me",[4,15,16]],["lewblivehdplay.ru",[4,209]],["mlbbite.net",4],["mlbstreams.ai",4],["qatarstreams.me",[4,15]],["qqwebplay.xyz",[4,209]],["soccerworldcup.me",[4,15]],["topstreams.info",4],["totalsportek.to",4],["viwlivehdplay.ru",4],["vidco.pro",[4,62]],["streamingnow.mov",[4,55]],["723qrh1p.fun",6],["freeroms.com",6],["soap2day-online.com",6],["andhrafriends.com",6],["cinedesi.in",7],["intro-hd.net",7],["monacomatin.mc",7],["nodo313.net",7],["hesgoal-tv.io",7],["hesgoal-vip.io",7],["earn.punjabworks.com",7],["mahajobwala.in",7],["solewe.com",7],["yts.mx",9],["magesypro.com",10],["pinsystem.co.uk",10],["elrellano.com",10],["tinyppt.com",10],["veganab.co",10],["camdigest.com",10],["learnmany.in",10],["amanguides.com",[10,34]],["highkeyfinance.com",[10,34]],["appkamods.com",10],["techacode.com",10],["djqunjab.in",10],["downfile.site",10],["expertvn.com",10],["trangchu.news",10],["3dmodelshare.org",10],["nulleb.com",10],["asiaon.top",10],["coursesghar.com",10],["thecustomrom.com",10],["snlookup.com",10],["bingotingo.com",10],["ghior.com",10],["3dmili.com",10],["karanpc.com",10],["plc247.com",10],["apkdelisi.net",10],["freepasses.org",10],["tomarnarede.pt",10],["basketballbuzz.ca",10],["dribbblegraphics.com",10],["kemiox.com",10],["teksnologi.com",10],["bharathwick.com",10],["descargaspcpro.net",10],["dx-tv.com",10],["rt3dmodels.com",10],["plc4me.com",10],["blisseyhusbands.com",10],["madaradex.org",10],["trigonevo.com",10],["franceprefecture.fr",10],["jazbaat.in",10],["aipebel.com",10],["audiotools.blog",10],["embdproxy.xyz",10],["upornia.com",12],["germancarforum.com",14],["cybercityhelp.in",14],["innateblogger.com",14],["omeuemprego.online",14],["streamnoads.com",[15,16,53,62]],["bowfile.com",15],["cloudvideo.tv",[15,62]],["coloredmanga.com",15],["exeo.app",15],["hiphopa.net",[15,16]],["megaup.net",15],["olympicstreams.co",[15,62]],["tv247.us",[15,16]],["uploadhaven.com",15],["userscloud.com",[15,62]],["mlbbox.me",15],["vikingf1le.us.to",15],["neodrive.xyz",15],["mdfx9dc8n.net",16],["mdzsmutpcvykb.net",16],["mixdrop21.net",16],["mixdropjmk.pw",16],["141jav.com",16],["1bit.space",16],["1bitspace.com",16],["345movies.com",16],["3dporndude.com",16],["4archive.org",16],["4horlover.com",16],["560pmovie.com",16],["85tube.com",16],["85videos.com",16],["acefile.co",16],["actusports.eu",16],["adclickersbot.com",16],["adricami.com",16],["adslink.pw",16],["adultstvlive.com",16],["adz7short.space",16],["aeblender.com",16],["ahdafnews.blogspot.com",16],["ak47sports.com",16],["akuma.moe",16],["allplayer.tk",16],["amateurblog.tv",16],["androidadult.com",[16,235]],["anhsexjav.xyz",16],["anidl.org",16],["anime-loads.org",16],["animeblkom.net",16],["animefire.plus",16],["animelek.me",16],["animespire.net",16],["animestotais.xyz",16],["animeyt.es",16],["anroll.net",16],["anymoviess.xyz",16],["aotonline.org",16],["asenshu.com",16],["asialiveaction.com",16],["asianclipdedhd.net",16],["askim-bg.com",16],["asumsikedaishop.com",16],["avcrempie.com",16],["avseesee.com",16],["gettapeads.com",[16,53]],["backfirstwo.com",16],["bajarjuegospcgratis.com",16],["balkanportal.net",16],["balkanteka.net",16],["bdnewszh.com",[16,62]],["belowporn.com",16],["bestgirlsexy.com",16],["bestnhl.com",16],["bestporn4free.com",16],["bestporncomix.com",16],["bet36.es",16],["bikinitryon.net",16],["birdurls.com",16],["bitsearch.to",16],["blackcockadventure.com",16],["blackcockchurch.org",16],["blackporncrazy.com",16],["blizzboygames.net",16],["blizzpaste.com",16],["blkom.com",16],["blog-peliculas.com",16],["blogtrabalhista.com",16],["bobsvagene.club",16],["bolly4umovies.click",16],["bonusharian.pro",16],["brilian-news.id",16],["brupload.net",16],["bucitana.com",16],["camchickscaps.com",16],["camgirlcum.com",16],["camgirls.casa",16],["cashurl.in",16],["castingx.net",16],["ccurl.net",[16,62]],["celebrity-leaks.net",16],["cgpelis.net",16],["charexempire.com",16],["choosingnothing.com",16],["clasico.tv",16],["clik.pw",16],["coin-free.com",[16,31]],["coins100s.fun",16],["comicsmanics.com",16],["compucalitv.com",16],["coolcast2.com",16],["cosplaytab.com",16],["countylocalnews.com",16],["cpmlink.net",16],["crackstreamshd.click",16],["crespomods.com",16],["crisanimex.com",16],["crunchyscan.fr",16],["cuevana3.fan",16],["cuevana3hd.com",16],["cumception.com",16],["cutpaid.com",16],["dailyuploads.net",16],["datawav.club",16],["daughtertraining.com",16],["deepgoretube.site",16],["deltabit.co",16],["deporte-libre.top",16],["depvailon.com",16],["derleta.com",16],["desivdo.com",16],["desixx.net",16],["detikkebumen.com",16],["deutschepornos.me",16],["diasoft.xyz",16],["directupload.net",16],["diskusscan.com",16],["dixva.com",16],["doctormalay.com",16],["dofusports.xyz",16],["dogemate.com",16],["doods.cam",16],["doodskin.lat",16],["downloadrips.com",16],["downvod.com",16],["dphunters.mom",16],["dragontranslation.com",16],["dvdfullestrenos.com",16],["ebookbb.com",16],["ebookhunter.net",16],["egyanime.com",16],["egygost.com",16],["egyshare.cc",16],["ekasiwap.com",16],["electro-torrent.pl",16],["elil.cc",16],["eplayer.click",16],["erovoice.us",16],["eroxxx.us",16],["estrenosdoramas.net",16],["everia.club",16],["everythinginherenet.blogspot.com",16],["extrafreetv.com",16],["extremotvplay.com",16],["fapinporn.com",16],["fapptime.com",16],["fashionblog.tv",16],["fastreams.live",16],["faucethero.com",16],["fembed.com",16],["femdom-joi.com",16],["fileone.tv",16],["film1k.com",16],["filmeonline2023.net",16],["filmesonlinex.org",16],["filmesonlinexhd.biz",[16,62]],["filmovitica.com",16],["filmymaza.blogspot.com",16],["filthy.family",16],["fixfinder.click",16],["flostreams.xyz",16],["flyfaucet.com",16],["footyhunter.lol",16],["forex-trnd.com",16],["forumchat.club",16],["forumlovers.club",16],["freemoviesonline.biz",16],["freeomovie.co.in",16],["freeomovie.to",16],["freeporncomic.net",16],["freepornhdonlinegay.com",16],["freeproxy.io",16],["freeuse.me",16],["freeusexporn.com",16],["fsharetv.cc",16],["fsicomics.com",16],["galinhasamurai.com",16],["gamepcfull.com",16],["gameronix.com",16],["gamesfullx.com",16],["gameshdlive.net",16],["gamesmountain.com",16],["gamesrepacks.com",16],["gamingguru.fr",16],["gamovideo.com",16],["garota.cf",16],["gaydelicious.com",16],["gaypornmasters.com",16],["gaysex69.net",16],["gemstreams.com",16],["get-to.link",16],["girlscanner.org",16],["giurgiuveanul.ro",16],["gledajcrtace.xyz",16],["gocast2.com",16],["gomo.to",16],["gostosa.cf",16],["gtlink.co",16],["gwiazdypornosow.pl",16],["haho.moe",16],["hatsukimanga.com",16],["hayhd.net",16],["hdsaprevodom.com",16],["hdstreamss.club",16],["hentais.tube",16],["hentaistream.co",16],["hentaitk.net",16],["hentaitube.online",16],["hentaiworld.tv",16],["hesgoal.tv",16],["hexupload.net",16],["hhkungfu.tv",16],["highlanderhelp.com",16],["hindimean.com",16],["hindimovies.to",[16,62]],["hiperdex.com",16],["hispasexy.org",16],["hitprn.com",16],["hoca4u.com",16],["hollymoviehd.cc",16],["hoodsite.com",16],["hopepaste.download",16],["hornylips.com",16],["hotgranny.live",16],["hotmama.live",16],["hqcelebcorner.net",16],["huren.best",16],["hwnaturkya.com",[16,62]],["hxfile.co",[16,62]],["igfap.com",16],["iklandb.com",16],["illink.net",16],["imgkings.com",16],["imgsex.xyz",16],["imx.to",16],["influencersgonewild.org",16],["infosgj.free.fr",16],["investnewsbrazil.com",16],["itdmusics.com",16],["itsuseful.site",16],["itunesfre.com",16],["iwatchfriendsonline.net",[16,122]],["jackstreams.com",16],["jatimupdate24.com",16],["jav-fun.cc",16],["jav-noni.cc",16],["jav-scvp.com",16],["javcl.com",16],["javf.net",16],["javhay.net",16],["javhoho.com",16],["javhun.com",16],["javleak.com",16],["javporn.best",16],["javsek.net",16],["javsex.to",16],["javtiful.com",[16,28]],["jimdofree.com",16],["jiofiles.org",16],["jorpetz.com",16],["jp-films.com",16],["jpop80ss3.blogspot.com",16],["jpopsingles.eu",[16,184]],["kantotflix.net",16],["kantotinyo.com",16],["kaoskrew.org",16],["kaplog.com",16],["keralatvbox.com",16],["kickassanimes.io",16],["kimochi.info",16],["kimochi.tv",16],["kinemania.tv",16],["konstantinova.net",16],["koora-online.live",16],["kunmanga.com",16],["kutmoney.com",16],["kwithsub.com",16],["lat69.me",16],["latinblog.tv",16],["latinomegahd.net",16],["leechpremium.link",16],["legendas.dev",16],["legendei.net",16],["lightdlmovies.blogspot.com",16],["lighterlegend.com",16],["linclik.com",16],["linkebr.com",16],["linkrex.net",16],["lulu.st",16],["lulustream.com",[16,64]],["luluvdo.com",16],["manga-oni.com",16],["mangaboat.com",16],["mangagenki.me",16],["mangahere.onl",16],["mangaweb.xyz",16],["mangoporn.net",16],["manhwahentai.me",16],["masahub.com",16],["masahub.net",16],["maturegrannyfuck.com",16],["mdy48tn97.com",16],["mediapemersatubangsa.com",16],["mega-mkv.com",16],["megapastes.com",16],["megapornpics.com",16],["messitv.net",16],["meusanimes.net",16],["milfmoza.com",16],["milfzr.com",16],["millionscast.com",16],["mimaletamusical.blogspot.com",16],["mitly.us",16],["mkv-pastes.com",16],["monaskuliner.ac.id",16],["moredesi.com",16],["movgotv.net",16],["movi.pk",16],["movieswbb.com",16],["moviewatch.com.pk",16],["mp4upload.com",16],["mrskin.live",16],["multicanaistv.com",16],["mundowuxia.com",16],["myeasymusic.ir",16],["myonvideo.com",16],["myyouporn.com",16],["narutoget.info",16],["naughtypiss.com",16],["nerdiess.com",16],["new-fs.eu",16],["newtorrentgame.com",16],["nflstreams.me",16],["niaomea.me",[16,62]],["nicekkk.com",16],["nicesss.com",16],["nlegs.com",16],["nolive.me",[16,62]],["notformembersonly.com",16],["novamovie.net",16],["novelpdf.xyz",16],["novelssites.com",[16,62]],["novelup.top",16],["nsfwr34.com",16],["nu6i-bg-net.com",16],["nudebabesin3d.com",16],["nukedfans.com",16],["nuoga.eu",16],["nzbstars.com",16],["o2tvseries.com",16],["ohjav.com",16],["ojearnovelas.com",16],["okanime.xyz",16],["olweb.tv",16],["on9.stream",16],["onepiece-mangaonline.com",16],["onifile.com",16],["onionstream.live",16],["onlinesaprevodom.net",16],["onlyfullporn.video",16],["onplustv.live",16],["originporn.com",16],["ovagames.com",16],["ovamusic.com",16],["packsporn.com",16],["pahaplayers.click",16],["palimas.org",16],["pandafiles.com",16],["password69.com",16],["pastemytxt.com",16],["payskip.org",16],["peeplink.in",16],["peliculasmx.net",16],["pervertgirlsvideos.com",16],["pervyvideos.com",16],["phim12h.com",16],["picdollar.com",16],["pickteenz.com",16],["picsxxxporn.com",16],["pinayscandalz.com",16],["pinkueiga.net",16],["piratefast.xyz",16],["piratehaven.xyz",16],["pirateiro.com",16],["pirlotvonline.org",16],["playtube.co.za",16],["plugintorrent.com",16],["pmvzone.com",16],["porndish.com",16],["pornez.net",16],["pornfetishbdsm.com",16],["pornfits.com",16],["pornhd720p.com",16],["pornobr.club",16],["pornobr.ninja",16],["pornodominicano.net",16],["pornofaps.com",16],["pornoflux.com",16],["pornotorrent.com.br",16],["pornredit.com",16],["pornstarsyfamosas.es",16],["pornstreams.co",16],["porntn.com",16],["pornxbit.com",16],["pornxday.com",16],["portaldasnovinhas.shop",16],["portugues-fcr.blogspot.com",16],["poscitesch.com",[16,62]],["poseyoung.com",16],["pover.org",16],["proxyninja.org",16],["pubfilmz.com",16],["publicsexamateurs.com",16],["punanihub.com",16],["putlocker5movies.org",16],["pxxbay.com",16],["r18.best",16],["ragnaru.net",16],["rapbeh.net",16],["rapelust.com",16],["rapload.org",16],["read-onepiece.net",16],["retro-fucking.com",16],["retrotv.org",16],["robaldowns.com",16],["rockdilla.com",16],["rojadirectatvenvivo.com",16],["rojitadirecta.blogspot.com",16],["romancetv.site",16],["rsoccerlink.site",16],["rule34.club",16],["rule34hentai.net",16],["rumahbokep-id.com",16],["safego.cc",16],["sakurafile.com",16],["satoshi-win.xyz",16],["scat.gold",16],["scatfap.com",16],["scatkings.com",16],["scnlog.me",16],["scripts-webmasters.net",16],["serie-turche.com",16],["serijefilmovi.com",16],["sexcomics.me",16],["sexdicted.com",16],["sexgay18.com",16],["sexofilm.co",16],["sextgem.com",16],["sextubebbw.com",16],["sgpics.net",16],["shadowrangers.live",16],["shahee4u.cam",16],["shahiid-anime.net",16],["shemale6.com",16],["shinden.pl",16],["short.es",16],["showmanga.blog.fc2.com",16],["shrt10.com",16],["shurt.pw",16],["sideplusleaks.net",16],["silverblog.tv",16],["silverpic.com",16],["sinhalasub.life",16],["sinsitio.site",16],["sinvida.me",16],["skidrowcpy.com",16],["skidrowfull.com",16],["slut.mom",16],["smallencode.me",16],["smoner.com",16],["smplace.com",16],["soccerinhd.com",[16,62]],["socceron.name",16],["softairbay.com",16],["sokobj.com",16],["songsio.com",16],["souexatasmais.com",16],["sportbar.live",16],["sportstream1.cfd",16],["srt.am",16],["srts.me",16],["stbemuiptv.com",16],["stockingfetishvideo.com",16],["stream.crichd.vip",16],["stream.lc",16],["stream25.xyz",16],["streambee.to",16],["streamcenter.pro",16],["streamers.watch",16],["streamgo.to",16],["streamkiste.tv",16],["streamoupload.xyz",16],["streamservicehd.click",16],["streamvid.net",[16,24]],["subtitleporn.com",16],["subtitles.cam",16],["suicidepics.com",16],["supertelevisionhd.com",16],["supexfeeds.com",16],["swiftload.io",16],["swipebreed.net",16],["swzz.xyz",16],["sxnaar.com",16],["tabooporns.com",16],["taboosex.club",16],["tapeantiads.com",[16,53]],["tapeblocker.com",[16,53]],["tapenoads.com",[16,53]],["tapewithadblock.org",[16,53,247]],["teamos.xyz",16],["teen-wave.com",16],["teenporncrazy.com",16],["telegramgroups.xyz",16],["telenovelasweb.com",16],["tensei-shitara-slime-datta-ken.com",16],["tfp.is",16],["tgo-tv.co",[16,62]],["thaihotmodels.com",16],["theblueclit.com",16],["thebussybandit.com",16],["thedaddy.to",[16,207]],["theicongenerator.com",16],["thelastdisaster.vip",16],["thepiratebay0.org",16],["thepiratebay10.info",16],["thesexcloud.com",16],["thothub.today",16],["tightsexteens.com",16],["tojav.net",16],["tokyoblog.tv",16],["top16.net",16],["topvideosgay.com",16],["torrage.info",16],["torrents.vip",16],["torrsexvid.com",16],["tpb-proxy.xyz",16],["trannyteca.com",16],["trendytalker.com",16],["tumanga.net",16],["turbogvideos.com",16],["turbovid.me",16],["turkishseriestv.org",16],["turksub24.net",16],["tutele.sx",16],["tvglobe.me",16],["tvpclive.com",16],["tvs-widget.com",16],["tvseries.video",16],["ucptt.com",16],["ufaucet.online",16],["ufcfight.online",16],["ultrahorny.com",16],["ultraten.net",16],["unblockweb.me",16],["underhentai.net",16],["uniqueten.net",16],["upbaam.com",16],["upstream.to",16],["valeriabelen.com",16],["verdragonball.online",16],["vfxmed.com",16],["video.az",16],["videostreaming.rocks",16],["videowood.tv",16],["vidorg.net",16],["vidtapes.com",16],["vidz7.com",16],["vikistream.com",16],["vikv.net",16],["virpe.cc",16],["visifilmai.org",16],["viveseries.com",16],["vladrustov.sx",16],["volokit2.com",[16,207]],["vstorrent.org",16],["w-hentai.com",16],["watchbrooklynnine-nine.com",16],["watchelementaryonline.com",16],["watchjavidol.com",16],["watchkobestreams.info",16],["watchlostonline.net",16],["watchmonkonline.com",16],["watchrulesofengagementonline.com",16],["watchthekingofqueens.com",16],["webcamrips.com",16],["wincest.xyz",16],["wolverdon.fun",16],["wordcounter.icu",16],["worldmovies.store",16],["worldstreams.click",16],["wpdeployit.com",16],["wqstreams.tk",16],["wwwsct.com",16],["xanimeporn.com",16],["xblog.tv",16],["xn--verseriesespaollatino-obc.online",16],["xn--xvideos-espaol-1nb.com",16],["xpornium.net",16],["xsober.com",16],["xvip.lat",16],["xxgasm.com",16],["xxvideoss.org",16],["xxx18.uno",16],["xxxdominicana.com",16],["xxxfree.watch",16],["xxxmax.net",16],["xxxwebdlxxx.top",16],["xxxxvideo.uno",16],["y2b.wiki",16],["yabai.si",16],["yadixv.com",16],["yayanimes.net",16],["yeshd.net",16],["yodbox.com",16],["youjax.com",16],["yourdailypornvideos.ws",16],["yourupload.com",16],["ytstv.me",16],["zerion.cc",16],["zerocoin.top",16],["zitss.xyz",16],["zpaste.net",16],["1337x.ninjaproxy1.com",16],["y2tube.pro",16],["freeshot.live",16],["fastreams.com",16],["redittsports.com",16],["sky-sports.store",16],["streamsoccer.site",16],["tntsports.store",16],["wowstreams.co",16],["zdsptv.com",16],["tuktukcinma.com",16],["faucet.ovh",17],["oko.sh",[18,43,44]],["variety.com",19],["gameskinny.com",19],["deadline.com",19],["washingtonpost.com",20],["gosexpod.com",21],["sexo5k.com",22],["truyen-hentai.com",22],["theshedend.com",24],["zeroupload.com",24],["securenetsystems.net",24],["miniwebtool.com",24],["bchtechnologies.com",24],["eracast.cc",24],["flatai.org",24],["spiegel.de",25],["jacquieetmichel.net",26],["hausbau-forum.de",27],["althub.club",27],["kiemlua.com",27],["nxbrew.net",28],["tea-coffee.net",29],["spatsify.com",29],["newedutopics.com",29],["getviralreach.in",29],["edukaroo.com",29],["funkeypagali.com",29],["careersides.com",29],["nayisahara.com",29],["wikifilmia.com",29],["infinityskull.com",29],["viewmyknowledge.com",29],["iisfvirtual.in",29],["starxinvestor.com",29],["jkssbalerts.com",29],["kenzo-flowertag.com",30],["mdn.lol",30],["btcbitco.in",31],["btcsatoshi.net",31],["cempakajaya.com",31],["crypto4yu.com",31],["gainl.ink",31],["manofadan.com",31],["readbitcoin.org",31],["wiour.com",31],["tremamnon.com",31],["bitsmagic.fun",31],["ourcoincash.xyz",31],["blog.cryptowidgets.net",32],["blog.insurancegold.in",32],["blog.wiki-topia.com",32],["blog.coinsvalue.net",32],["blog.cookinguide.net",32],["blog.freeoseocheck.com",32],["aylink.co",33],["sugarona.com",34],["nishankhatri.xyz",34],["cety.app",35],["exe-urls.com",35],["exego.app",35],["cutlink.net",35],["cutsy.net",35],["cutyurls.com",35],["cutty.app",35],["cutnet.net",35],["jixo.online",35],["tinys.click",36],["diendancauduong.com",36],["answerpython.com",36],["formyanime.com",36],["gsm-solution.com",36],["h-donghua.com",36],["hindisubbedacademy.com",36],["linksdramas2.blogspot.com",36],["pkgovjobz.com",36],["ripexbooster.xyz",36],["serial4.com",36],["serial412.blogspot.com",36],["sigmalinks.in",36],["tutorgaming.com",36],["everydaytechvams.com",36],["dipsnp.com",36],["cccam4sat.com",36],["zeemoontv-24.blogspot.com",36],["stitichsports.com",36],["aiimgvlog.fun",37],["appsbull.com",38],["diudemy.com",38],["maqal360.com",38],["mphealth.online",38],["makefreecallsonline.com",38],["androjungle.com",38],["bookszone.in",38],["drakescans.com",38],["shortix.co",38],["msonglyrics.com",38],["app-sorteos.com",38],["bokugents.com",38],["client.pylexnodes.net",38],["btvplus.bg",38],["blog24.me",[39,40]],["coingraph.us",41],["impact24.us",41],["iconicblogger.com",42],["auto-crypto.click",42],["tvi.la",[43,44]],["iir.la",[43,44]],["tii.la",[43,44]],["ckk.ai",[43,44]],["oei.la",[43,44]],["lnbz.la",[43,44]],["oii.la",[43,44,64]],["tpi.li",[43,44]],["smutty.com",45],["e-sushi.fr",45],["freeadultcomix.com",45],["down.dataaps.com",45],["filmweb.pl",45],["safetxt.net",45],["filespayouts.com",45],["atglinks.com",46],["kbconlinegame.com",47],["hamrojaagir.com",47],["odijob.com",47],["blogesque.net",48],["bookbucketlyst.com",48],["explorosity.net",48],["optimizepics.com",48],["torovalley.net",48],["travize.net",48],["trekcheck.net",48],["metoza.net",48],["techlike.net",48],["snaplessons.net",48],["atravan.net",48],["transoa.net",48],["techmize.net",48],["crenue.net",48],["simana.online",49],["fooak.com",49],["joktop.com",49],["evernia.site",49],["falpus.com",49],["indiamaja.com",50],["newshuta.in",50],["celebzcircle.com",50],["bi-girl.net",50],["hentaiseason.com",50],["hoodtrendspredict.com",50],["marcialhub.xyz",50],["odiadance.com",50],["osteusfilmestuga.online",50],["ragnarokscanlation.opchapters.com",50],["sampledrive.org",50],["swordalada.org",50],["tojimangas.com",50],["tvappapk.com",50],["twobluescans.com",[50,100]],["varnascan.xyz",50],["financemonk.net",51],["mastkhabre.com",52],["advertisertape.com",53],["tapeadsenjoyer.com",[53,62]],["tapeadvertisement.com",53],["tapelovesads.org",53],["watchadsontape.com",53],["vosfemmes.com",54],["voyeurfrance.net",54],["neymartv.net",55],["streamhd247.info",55],["hindimoviestv.com",55],["buzter.xyz",55],["valhallas.click",55],["cuervotv.me",[55,62]],["aliezstream.pro",55],["daddy-stream.xyz",55],["instream.pro",55],["mylivestream.pro",55],["powerover.online",55],["sportea.link",55],["sportsurge.stream",55],["ufckhabib.com",55],["ustream.pro",55],["animeshqip.site",55],["apkship.shop",55],["buzter.pro",55],["enjoysports.bond",55],["filedot.to",55],["foreverquote.xyz",55],["hdstream.one",55],["kingstreamz.site",55],["live.fastsports.store",55],["livesnow.me",55],["livesports4u.pw",55],["masterpro.click",55],["nuxhallas.click",55],["papahd.info",55],["rgshows.me",55],["sportmargin.live",55],["sportmargin.online",55],["sportsloverz.xyz",55],["sportzlive.shop",55],["supertipzz.online",55],["totalfhdsport.xyz",55],["ultrastreamlinks.xyz",55],["usgate.xyz",55],["webmaal.cfd",55],["wizistreamz.xyz",55],["worldstreamz.shop",55],["g-porno.com",55],["g-streaming.com",55],["educ4m.com",55],["fromwatch.com",55],["visualnewshub.com",55],["bigwarp.io",55],["animeshqip.org",55],["uns.bio",55],["reshare.pm",55],["rahim-soft.com",56],["x-video.tube",56],["rubystm.com",56],["rubyvid.com",56],["streamruby.com",56],["poophd.cc",56],["windowsreport.com",56],["fuckflix.click",56],["hyundaitucson.info",57],["exambd.net",58],["cgtips.org",59],["freewebcart.com",60],["siamblockchain.com",60],["emuenzen.de",61],["adsh.cc",62],["afilmyhouse.blogspot.com",62],["ak.sv",62],["animesultra.com",62],["api.webs.moe",62],["apkmody.io",62],["attvideo.com",62],["backfirstwo.site",[62,152]],["crazyblog.in",62],["divicast.com",62],["dlhd.so",62],["embed.meomeo.pw",62],["filmeserialeonline.org",62],["flexyhit.com",62],["foreverwallpapers.com",62],["french-streams.cc",62],["fslinks.org",62],["hdtoday.to",62],["hinatasoul.com",62],["igg-games.com",62],["infinityscans.net",62],["mangareader.to",62],["membed.net",62],["mgnetu.com",62],["mp3juice.info",62],["mp3juices.cc",62],["myflixerz.to",62],["nowmetv.net",62],["nowsportstv.com",62],["nxbrew.com",62],["oii.io",62],["paidshitforfree.com",62],["pepperlive.info",62],["playertv.net",62],["putlocker68.com",62],["roystream.com",62],["rssing.com",62],["s.to",62],["share.filesh.site",62],["sharkfish.xyz",62],["skidrowcodex.net",62],["smartermuver.com",62],["sports-stream.site",62],["stream4free.live",62],["tamilmobilemovies.in",62],["thewatchseries.live",62],["tnmusic.in",62],["travelplanspro.com",62],["tusfiles.com",62],["tutlehd4.com",62],["twstalker.com",62],["vid-guard.com",62],["vidsaver.net",62],["vidspeeds.com",62],["viralitytoday.com",62],["voiranime.stream",62],["watchdoctorwhoonline.com",62],["watchserie.online",62],["webhostingpost.com",62],["woxikon.in",62],["www-y2mate.com",62],["ylink.bid",62],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",62],["buffshub.stream",64],["cinego.tv",64],["ev01.to",64],["fstream365.com",64],["minoplres.xyz",64],["mostream.us",64],["readcomiconline.li",64],["s3embtaku.pro",64],["sflix2.to",64],["sportshub.stream",64],["topcinema.cam",64],["zonatmo.com",64],["animesaturn.cx",64],["hunterscomics.com",64],["unblocked.id",67],["listendata.com",68],["7xm.xyz",68],["fastupload.io",68],["azmath.info",68],["wouterplanet.com",69],["androidacy.com",70],["pillowcase.su",71],["veryfreeporn.com",72],["theporngod.com",72],["besthdgayporn.com",73],["drivenime.com",73],["erothots1.com",73],["javup.org",73],["shemaleup.net",73],["transflix.net",73],["beatsnoop.com",74],["fetchpik.com",74],["hackerranksolution.in",74],["camsrip.com",74],["help.sakarnewz.com",74],["austiblox.net",76],["btcbunch.com",77],["teachoo.com",[78,79]],["automobile-catalog.com",[80,81,86]],["motorbikecatalog.com",[80,81,86]],["topstarnews.net",80],["islamicfinder.org",80],["secure-signup.net",80],["dramabeans.com",80],["manta.com",80],["tportal.hr",80],["tvtropes.org",80],["wouldurather.io",80],["convertcase.net",80],["nana-press.com",80],["interfootball.co.kr",81],["a-ha.io",81],["cboard.net",81],["jjang0u.com",81],["joongdo.co.kr",81],["viva100.com",81],["gamingdeputy.com",81],["thesaurus.net",81],["alle-tests.nl",81],["maketecheasier.com",81],["allthekingz.com",81],["tweaksforgeeks.com",81],["m.inven.co.kr",81],["mlbpark.donga.com",81],["meconomynews.com",81],["brandbrief.co.kr",81],["motorgraph.com",81],["worldhistory.org",82],["bleepingcomputer.com",83],["lovelive-petitsoku.com",83],["pravda.com.ua",83],["mariowiki.com",84],["ap7am.com",85],["cinema.com.my",85],["dolldivine.com",85],["giornalone.it",85],["iplocation.net",85],["jamaicaobserver.com",85],["jawapos.com",85],["jutarnji.hr",85],["kompasiana.com",85],["mediaindonesia.com",85],["nmplus.hk",85],["slobodnadalmacija.hr",85],["upmedia.mg",85],["allthetests.com",86],["animanch.com",86],["aniroleplay.com",86],["apkmirror.com",[86,179]],["autoby.jp",86],["autofrage.net",86],["carscoops.com",86],["computerfrage.net",86],["crosswordsolver.com",86],["cruciverba.it",86],["daily.co.jp",86],["dailydot.com",86],["dnevno.hr",86],["dziennik.pl",86],["forsal.pl",86],["freemcserver.net",86],["game8.jp",86],["gazetaprawna.pl",86],["globalrph.com",86],["golf-live.at",86],["heureka.cz",86],["horairesdouverture24.fr",86],["indiatimes.com",86],["infor.pl",86],["j-cast.com",86],["j-town.net",86],["jablickar.cz",86],["javatpoint.com",86],["kreuzwortraetsel.de",86],["kurashiru.com",86],["kyoteibiyori.com",86],["lacuarta.com",86],["laleggepertutti.it",86],["livenewschat.eu",86],["mamastar.jp",86],["mirrored.to",86],["modhub.us",86],["motscroises.fr",86],["nyitvatartas24.hu",86],["oeffnungszeitenbuch.de",86],["onecall2ch.com",86],["oraridiapertura24.it",86],["palabr.as",86],["persoenlich.com",86],["petitfute.com",86],["powerpyx.com",86],["quefaire.be",86],["raetsel-hilfe.de",86],["roleplayer.me",86],["rostercon.com",86],["samsungmagazine.eu",86],["slashdot.org",86],["sourceforge.net",86],["syosetu.com",86],["talkwithstranger.com",86],["the-crossword-solver.com",86],["thestockmarketwatch.com",86],["transparentcalifornia.com",86],["transparentnevada.com",86],["trilltrill.jp",86],["tvtv.ca",86],["tvtv.us",86],["verkaufsoffener-sonntag.com",86],["watchdocumentaries.com",86],["webdesignledger.com",86],["wetteronline.de",86],["wfmz.com",86],["winfuture.de",86],["word-grabber.com",86],["wort-suchen.de",86],["yugioh-starlight.com",86],["yutura.net",86],["zagreb.info",86],["2chblog.jp",86],["2monkeys.jp",86],["46matome.net",86],["alfalfalfa.com",86],["all-nationz.com",86],["anihatsu.com",86],["aqua2ch.net",86],["blog.esuteru.com",86],["blog.livedoor.jp",86],["blog.jp",86],["choco0202.work",86],["danseisama.com",86],["dareda.net",86],["digital-thread.com",86],["doorblog.jp",86],["exawarosu.net",86],["fgochaldeas.com",86],["gekiyaku.com",86],["golog.jp",86],["heartlife-matome.com",86],["liblo.jp",86],["fesoku.net",86],["fiveslot777.com",86],["gamejksokuhou.com",86],["girlsreport.net",86],["girlsvip-matome.com",86],["grasoku.com",86],["gundamlog.com",86],["honyaku-channel.net",86],["ikarishintou.com",86],["imas-cg.net",86],["imihu.net",86],["inutomo11.com",86],["itainews.com",86],["jin115.com",86],["jisaka.com",86],["jnews1.com",86],["jyoseisama.com",86],["keyakizaka46matomemory.net",86],["kidan-m.com",86],["kijoden.com",86],["kijolariat.net",86],["kijolifehack.com",86],["kijomatomelog.com",86],["kijyokatu.com",86],["kijyomatome.com",86],["kijyomatome-ch.com",86],["kijyomita.com",86],["kirarafan.com",86],["kitimama-matome.net",86],["kitizawa.com",86],["konoyubitomare.jp",86],["kotaro269.com",86],["kyousoku.net",86],["ldblog.jp",86],["livedoor.biz",86],["livedoor.blog",86],["matomeblade.com",86],["matomelotte.com",86],["matometemitatta.com",86],["mojomojo-licarca.com",86],["nandemo-uketori.com",86],["netatama.net",86],["news-buzz1.com",86],["norisoku.com",86],["npb-news.com",86],["ocsoku.com",86],["okusama-kijyo.com",86],["onihimechan.com",86],["orusoku.com",86],["otoko-honne.com",86],["oumaga-times.com",86],["outdoormatome.com",86],["pachinkopachisro.com",86],["paranormal-ch.com",86],["recosoku.com",86],["saikyo-jump.com",86],["shuraba-matome.com",86],["ske48matome.net",86],["squallchannel.com",86],["sukattojapan.com",86],["sumaburayasan.com",86],["uwakich.com",86],["uwakitaiken.com",86],["vipnews.jp",86],["vtubernews.jp",86],["watarukiti.com",86],["mafiatown.pl",87],["bitcotasks.com",88],["hilites.today",89],["udvl.com",90],["www.chip.de",[91,92,93,94]],["topsporter.net",95],["sportshub.to",95],["streamcheck.link",96],["myanimelist.net",97],["unofficialtwrp.com",98],["codec.kyiv.ua",98],["kimcilonlyofc.com",98],["bitcosite.com",99],["bitzite.com",99],["hacoos.com",102],["watchhentai.net",103],["hes-goals.io",103],["pkbiosfix.com",103],["casi3.xyz",103],["bondagevalley.cc",104],["zefoy.com",105],["mailgen.biz",106],["tempinbox.xyz",106],["vidello.net",107],["newscon.org",108],["yunjiema.top",108],["pcgeeks-games.com",108],["resizer.myct.jp",109],["gametohkenranbu.sakuraweb.com",110],["jisakuhibi.jp",111],["rank1-media.com",111],["lifematome.blog",112],["fm.sekkaku.net",113],["free-avx.jp",114],["dvdrev.com",115],["betweenjpandkr.blog",116],["nft-media.net",117],["ghacks.net",118],["leak.sx",119],["paste.bin.sx",119],["pornleaks.in",119],["truyentranhfull.net",120],["fcportables.com",120],["repack-games.com",120],["ibooks.to",120],["blog.tangwudi.com",120],["filecatchers.com",120],["zoechip.com",121],["nohost.one",121],["vidbinge.com",121],["nectareousoverelate.com",123],["khoaiphim.com",124],["haafedk2.com",125],["fordownloader.com",125],["jovemnerd.com.br",126],["totalcsgo.com",127],["vivamax.asia",128],["manysex.com",129],["gaminginfos.com",130],["tinxahoivn.com",131],["automoto.it",132],["codelivly.com",133],["lordchannel.com",134],["client.falixnodes.net",135],["novelhall.com",136],["madeeveryday.com",137],["maidenhead-advertiser.co.uk",137],["mardomreport.net",137],["melangery.com",137],["milestomemories.com",137],["modernmom.com",137],["momtastic.com",137],["mostlymorgan.com",137],["motherwellmag.com",137],["muddybootsanddiamonds.com",137],["musicfeeds.com.au",137],["mylifefromhome.com",137],["nationalreview.com",137],["nordot.app",137],["oakvillenews.org",137],["observer.com",137],["ourlittlesliceofheaven.com",137],["palachinkablog.com",137],["patheos.com",137],["pinkonthecheek.com",137],["politicususa.com",137],["predic.ro",137],["puckermom.com",137],["qtoptens.com",137],["realgm.com",137],["reelmama.com",137],["robbreport.com",137],["royalmailchat.co.uk",137],["samchui.com",137],["sandrarose.com",137],["sherdog.com",137],["sidereel.com",137],["silive.com",137],["simpleflying.com",137],["sloughexpress.co.uk",137],["spacenews.com",137],["sportsgamblingpodcast.com",137],["spotofteadesigns.com",137],["stacysrandomthoughts.com",137],["ssnewstelegram.com",137],["superherohype.com",[137,140]],["tablelifeblog.com",137],["thebeautysection.com",137],["thecelticblog.com",137],["thecurvyfashionista.com",137],["thefashionspot.com",137],["thegamescabin.com",137],["thenerdyme.com",137],["thenonconsumeradvocate.com",137],["theprudentgarden.com",137],["thethings.com",137],["timesnews.net",137],["topspeed.com",137],["toyotaklub.org.pl",137],["travelingformiles.com",137],["tutsnode.org",137],["viralviralvideos.com",137],["wannacomewith.com",137],["wimp.com",[137,140]],["windsorexpress.co.uk",137],["woojr.com",137],["worldoftravelswithkids.com",137],["worldsurfleague.com",137],["abc17news.com",[137,140]],["adoredbyalex.com",137],["agrodigital.com",[137,140]],["al.com",[137,140]],["aliontherunblog.com",[137,140]],["allaboutthetea.com",[137,140]],["allmovie.com",[137,140]],["allmusic.com",[137,140]],["allthingsthrifty.com",[137,140]],["amessagewithabottle.com",[137,140]],["androidpolice.com",137],["antyradio.pl",137],["artforum.com",[137,140]],["artnews.com",[137,140]],["awkward.com",[137,140]],["awkwardmom.com",[137,140]],["bailiwickexpress.com",137],["barnsleychronicle.com",[137,141]],["becomingpeculiar.com",137],["bethcakes.com",[137,141]],["blogher.com",[137,141]],["bluegraygal.com",[137,141]],["briefeguru.de",[137,141]],["carmagazine.co.uk",137],["cattime.com",137],["cbr.com",137],["chaptercheats.com",[137,141]],["cleveland.com",[137,141]],["collider.com",137],["comingsoon.net",137],["commercialobserver.com",[137,141]],["competentedigitale.ro",[137,141]],["crafty.house",137],["dailyvoice.com",[137,141]],["decider.com",[137,141]],["didyouknowfacts.com",[137,141]],["dogtime.com",[137,141]],["dualshockers.com",137],["dustyoldthing.com",137],["faithhub.net",137],["femestella.com",[137,141]],["footwearnews.com",[137,141]],["freeconvert.com",[137,141]],["frogsandsnailsandpuppydogtail.com",[137,141]],["fsm-media.com",137],["funtasticlife.com",[137,141]],["fwmadebycarli.com",[137,141]],["gamerant.com",137],["gfinityesports.com",137],["givemesport.com",137],["gulflive.com",[137,141]],["helloflo.com",137],["homeglowdesign.com",[137,141]],["honeygirlsworld.com",[137,141]],["hotcars.com",137],["howtogeek.com",137],["insider-gaming.com",137],["insurancejournal.com",137],["jasminemaria.com",[137,141]],["kion546.com",[137,141]],["lehighvalleylive.com",[137,141]],["lettyskitchen.com",[137,141]],["lifeinleggings.com",[137,141]],["liveandletsfly.com",137],["lizzieinlace.com",[137,141]],["localnews8.com",[137,141]],["lonestarlive.com",[137,141]],["makeuseof.com",137],["masslive.com",[137,141,249]],["mlive.com",[137,141]],["movieweb.com",137],["nj.com",[137,141]],["nothingbutnewcastle.com",[137,141]],["nsjonline.com",[137,141]],["oregonlive.com",[137,140]],["pagesix.com",[137,140,249]],["pennlive.com",[137,140,249]],["screenrant.com",137],["sheknows.com",[137,140]],["syracuse.com",[137,140,249]],["thegamer.com",137],["tvline.com",[137,140]],["cheatsheet.com",138],["pwinsider.com",138],["baeldung.com",138],["mensjournal.com",138],["c-span.org",139],["15min.lt",140],["247sports.com",[140,249]],["playstationlifestyle.net",140],["rollingstone.com",140],["sbnation.com",140],["sneakernews.com",140],["sport-fm.gr",140],["stylecaster.com",140],["tastingtable.com",140],["thecw.com",140],["thedailymeal.com",140],["theflowspace.com",140],["themarysue.com",140],["torontosun.com",140],["usmagazine.com",140],["wallup.net",140],["worldstar.com",140],["worldstarhiphop.com",140],["yourcountdown.to",140],["barcablaugranes.com",141],["betweenenglandandiowa.com",141],["bgr.com",141],["blazersedge.com",141],["blu-ray.com",141],["brobible.com",141],["cagesideseats.com",141],["cbsnews.com",[141,249]],["cbssports.com",[141,249]],["celiacandthebeast.com",141],["clickondetroit.com",141],["dailykos.com",141],["eater.com",141],["eldiariony.com",141],["fark.com",141],["free-power-point-templates.com",141],["golfdigest.com",141],["ibtimes.co.in",141],["imgur.com",141],["indiewire.com",[141,249]],["intouchweekly.com",141],["knowyourmeme.com",141],["last.fm",141],["lifeandstylemag.com",141],["mandatory.com",141],["nationalpost.com",141],["nbcsports.com",141],["news.com.au",141],["ninersnation.com",141],["nypost.com",[141,249]],["bagi.co.in",142],["keran.co",142],["biblestudytools.com",143],["christianheadlines.com",143],["ibelieve.com",143],["kuponigo.com",144],["kimcilonly.site",145],["kimcilonly.link",145],["cryptoearns.com",146],["inxxx.com",147],["bemyhole.com",147],["ipaspot.app",148],["embedwish.com",149],["filelions.live",149],["leakslove.net",149],["jenismac.com",150],["vxetable.cn",151],["jewelavid.com",152],["nizarstream.com",152],["snapwordz.com",153],["toolxox.com",153],["rl6mans.com",153],["idol69.net",153],["plumbersforums.net",154],["gulio.site",155],["mediaset.es",156],["updatewallah.in",156],["izlekolik.net",157],["donghuaworld.com",158],["letsdopuzzles.com",159],["rediff.com",160],["igay69.com",161],["dzapk.com",162],["darknessporn.com",163],["familyporner.com",163],["freepublicporn.com",163],["pisshamster.com",163],["punishworld.com",163],["xanimu.com",163],["pig69.com",164],["cosplay18.pics",164],["sexwebvideo.com",164],["sexwebvideo.net",164],["tainio-mania.online",165],["javhdo.net",166],["eroticmoviesonline.me",167],["teleclub.xyz",168],["ecamrips.com",169],["showcamrips.com",169],["tucinehd.com",170],["9animetv.to",171],["qiwi.gg",172],["jornadaperfecta.com",173],["loseart.com",174],["sousou-no-frieren.com",175],["unite-guide.com",176],["thebullspen.com",177],["receitasdaora.online",178],["streambucket.net",180],["nontongo.win",180],["player.smashy.stream",181],["player.smashystream.com",181],["hentaihere.com",181],["cineb.rs",183],["123animehub.cc",183],["tukipasti.com",183],["cataz.to",183],["hiraethtranslation.com",184],["d0000d.com",185],["d000d.com",185],["d0o0d.com",185],["do0od.com",185],["doods.pro",185],["dooodster.com",185],["ds2play.com",185],["ds2video.com",185],["xfreehd.com",186],["freethesaurus.com",187],["thefreedictionary.com",187],["dexterclearance.com",188],["x86.co.kr",189],["onlyfaucet.com",190],["x-x-x.tube",191],["visionpapers.org",192],["fdownloader.net",193],["thehackernews.com",194],["mielec.pl",195],["treasl.com",196],["mrbenne.com",197],["cnpics.org",198],["ovabee.com",198],["porn4f.com",198],["cnxx.me",198],["ai18.pics",198],["sportsonline.si",199],["fiuxy2.co",200],["animeunity.to",201],["tokopedia.com",202],["remixsearch.net",203],["remixsearch.es",203],["onlineweb.tools",203],["sharing.wtf",203],["2024tv.ru",204],["modrinth.com",205],["curseforge.com",205],["xnxxcom.xyz",206],["sportsurge.net",207],["joyousplay.xyz",207],["quest4play.xyz",[207,209]],["generalpill.net",207],["moneycontrol.com",208],["cookiewebplay.xyz",209],["ilovetoplay.xyz",209],["streamcaster.live",209],["weblivehdplay.ru",209],["oaaxpgp3.xyz",210],["m9.news",211],["callofwar.com",212],["secondhandsongs.com",213],["nudezzers.org",214],["send.cm",215],["send.now",215],["3rooodnews.net",216],["xxxbfvideo.net",217],["filmy4wap.co.in",218],["filmy4waps.org",218],["gameshop4u.com",219],["regenzi.site",219],["historicaerials.com",220],["handirect.fr",221],["animefenix.tv",222],["fsiblog3.club",223],["kamababa.desi",223],["atlasstudiousa.com",224],["getfiles.co.uk",225],["genelify.com",226],["dhtpre.com",227],["xbaaz.com",228],["lineupexperts.com",230],["fearmp4.ru",231],["m.shuhaige.net",233],["thesciencetoday.com",234],["ghbrisk.com",236],["iplayerhls.com",236],["bacasitus.com",237],["katoikos.world",237],["abstream.to",238],["pawastreams.pro",239],["rebajagratis.com",240],["tv.latinlucha.es",240],["fetcheveryone.com",241],["botcomics.com",242],["cefirates.com",242],["chandlerorchards.com",242],["comicleaks.com",242],["marketdata.app",242],["monumentmetals.com",242],["tapmyback.com",242],["ping.gg",242],["revistaferramental.com.br",242],["hawpar.com",242],["alpacafinance.org",[242,243]],["nookgaming.com",242],["enkeleksamen.no",242],["kvest.ee",242],["creatordrop.com",242],["panpots.com",242],["cybernetman.com",242],["bitdomain.biz",242],["gerardbosch.xyz",242],["fort-shop.kiev.ua",242],["accuretawealth.com",242],["resourceya.com",242],["tracktheta.com",242],["camberlion.com",242],["replai.io",242],["trybawaryjny.pl",242],["segops.madisonspecs.com",242],["stresshelden-coaching.de",242],["controlconceptsusa.com",242],["ryaktive.com",242],["tip.etip-staging.etip.io",242],["tt.live",243],["future-fortune.com",243],["adventuretix.com",243],["bolighub.dk",243],["panprices.com",244],["intercity.technology",244],["freelancer.taxmachine.be",244],["adria.gg",244],["fjlaboratories.com",244],["emanualonline.com",244],["abhijith.page",244],["helpmonks.com",244],["dataunlocker.com",245],["proboards.com",246],["winclassic.net",246],["pandadoc.com",248],["abema.tv",250]]);

const entitiesMap = new Map([["wawacity",4],["720pstream",[4,62]],["vidsrc",[4,15,62]],["extreme-down",4],["flix-wave",4],["mixdrop",[4,16]],["sanet",4],["sportshd",4],["watchomovies",[6,62]],["userupload",7],["pahe",[8,16,64]],["soap2day",8],["reset-scans",10],["poplinks",[10,38]],["mhdsports",10],["mhdsportstv",10],["mhdtvsports",10],["mhdtvworld",10],["mhdtvmax",10],["mhdstream",10],["hqq",11],["waaw",11],["pixhost",13],["viprow",[15,16,62]],["bluemediadownload",15],["bluemediafile",15],["bluemedialink",15],["bluemediastorage",15],["bluemediaurls",15],["urlbluemedia",15],["cloudvideotv",[15,62]],["123-movies",16],["123movieshd",16],["123movieshub",16],["123moviesme",16],["1337x",[16,182]],["1stream",16],["1tamilmv",16],["2ddl",16],["2umovies",16],["3hiidude",16],["4stream",16],["5movies",16],["7hitmovies",16],["9xmovie",16],["aagmaal",[16,62]],["adblockeronstape",[16,53]],["adblockeronstreamtape",16],["adblockplustape",[16,53]],["adblockstreamtape",[16,53]],["adblockstrtape",[16,53]],["adblockstrtech",[16,53]],["adblocktape",[16,53]],["adcorto",16],["alexsports",16],["alexsportss",16],["alexsportz",16],["animepahe",16],["animesanka",16],["animixplay",16],["aniplay",16],["antiadtape",[16,53]],["asianclub",16],["ask4movie",16],["atomixhq",[16,62]],["atomohd",16],["beinmatch",[16,23]],["bhaai",16],["blurayufr",16],["buffstreams",16],["canalesportivo",16],["clickndownload",16],["clicknupload",16],["daddylive",[16,62,207]],["daddylivehd",[16,62]],["ddrmovies",16],["desiremovies",16],["devlib",16],["divxtotal",16],["divxtotal1",16],["dlhd",16],["dvdplay",[16,62]],["elixx",16],["enjoy4k",16],["estrenosflix",16],["estrenosflux",16],["estrenosgo",16],["f1stream",16],["fbstream",16],["file4go",16],["filmyzilla",[16,62]],["findav",16],["findporn",16],["flixmaza",16],["flizmovies",16],["freetvsports",16],["fullymaza",16],["g3g",16],["gotxx",16],["grantorrent",16],["hdmoviesfair",[16,62]],["hdmoviesflix",16],["hiidudemoviez",16],["imgsen",16],["imgsto",16],["incest",16],["incestflix",16],["itopmusic",16],["javmost",16],["keeplinks",16],["keepvid",16],["keralahd",16],["khatrimazaful",16],["khatrimazafull",16],["leechall",16],["linkshorts",16],["mangovideo",16],["masaporn",16],["miniurl",16],["mirrorace",16],["mixdroop",16],["mkvcage",16],["mlbstream",16],["mlsbd",16],["mmsbee",16],["motogpstream",16],["movieplex",16],["movierulzlink",16],["movies123",16],["moviesflix",16],["moviesmeta",16],["moviessources",16],["moviesverse",16],["moviezwaphd",16],["mrunblock",16],["nbastream",16],["newmovierulz",16],["nflstream",16],["nhlstream",16],["noblocktape",[16,53]],["nocensor",16],["onlyfams",16],["ouo",16],["pctfenix",[16,62]],["pctnew",[16,62]],["peliculas24",16],["pelisplus",16],["piratebay",16],["plyjam",16],["plylive",16],["plyvdo",16],["pornhoarder",[16,229]],["prbay",16],["projectfreetv",16],["proxybit",16],["psarips",16],["racaty",16],["remaxhd",16],["rintor",16],["rnbxclusive",16],["rnbxclusive0",16],["rnbxclusive1",16],["rojadirecta",16],["rojadirectaenvivo",16],["rugbystreams",16],["sadisflix",16],["safetxt",16],["shadowrangers",16],["shahi4u",16],["shahid4u1",16],["shahid4uu",16],["shavetape",16],["shortearn",16],["shorten",16],["shorttey",16],["shortzzy",16],["skymovieshd",16],["socceronline",[16,62]],["softarchive",16],["sports-stream",16],["sporttuna",16],["sshhaa",16],["stapadblockuser",[16,53]],["stape",[16,53]],["stapewithadblock",16],["starmusiq",16],["strcloud",[16,53]],["streamadblocker",[16,53,62]],["streamadblockplus",[16,53]],["streamcdn",16],["streamhub",16],["streamsport",16],["streamta",[16,53]],["streamtape",[16,53]],["streamtapeadblockuser",[16,53]],["strikeout",[16,64]],["strtape",[16,53]],["strtapeadblock",[16,53]],["strtapeadblocker",[16,53]],["strtapewithadblock",16],["strtpe",[16,53]],["swatchseries",16],["tabooflix",16],["tennisstreams",16],["themoviesflix",16],["thepiratebay",16],["tmearn",16],["toonanime",16],["torlock",16],["tormalayalam",16],["torrentz2eu",16],["tutelehd",16],["tvply",16],["u4m",16],["ufcstream",16],["unblocknow",16],["uploadbuzz",16],["usagoals",16],["vexmoviex",16],["vidclouds",16],["vidlox",16],["vipbox",[16,62]],["vipboxtv",[16,62]],["vipleague",16],["watch-series",16],["watchseries",16],["xclusivejams",16],["xmoviesforyou",16],["youdbox",16],["ytmp3eu",16],["yts-subs",16],["yts",16],["zooqle",16],["dutchycorp",17],["mydverse",36],["shrinke",45],["shrinkme",45],["livecamrips",45],["stfly",48],["stly",48],["ftuapps",50],["showflix",50],["dropgalaxy",51],["bollyflix",55],["daddylive1",55],["esportivos",55],["poscitechs",55],["nekopoi",56],["123movies",62],["123moviesla",62],["123movieweb",62],["2embed",62],["9xmovies",62],["adshort",62],["allmovieshub",62],["asianplay",62],["atishmkv",62],["bflix",62],["cricstream",62],["crictime",62],["dood",[62,185]],["dooood",[62,185]],["extramovies",62],["faselhd",62],["faselhds",62],["filemoon",62],["filmy",62],["filmyhit",62],["filmywap",62],["fmovies",62],["gdplayer",62],["goku",62],["gomovies",62],["gowatchseries",62],["hdfungamezz",62],["hindilinks4u",62],["hurawatch",62],["jalshamoviezhd",62],["livecricket",62],["mhdsport",62],["mkvcinemas",[62,183]],["movies2watch",62],["moviespapa",62],["mp4moviez",62],["mydownloadtube",62],["nuroflix",62],["o2tvseries",62],["o2tvseriesz",62],["pirlotv",62],["poscitech",62],["primewire",62],["redecanais",62],["serienstream",62],["sflix",62],["shahed4u",62],["shaheed4u",62],["speedostream",62],["sportcast",62],["sportskart",62],["streamingcommunity",[62,64,75]],["tamilarasan",62],["tamilfreemp3songs",62],["tamilprinthd",62],["torrentdosfilmes",62],["tubemate",62],["uploadrar",62],["uqload",62],["vidcloud9",62],["vido",62],["vidoo",62],["vudeo",62],["vumoo",62],["yesmovies",62],["kickassanime",63],["11xmovies",64],["fzmovies",64],["linkz",64],["myflixer",64],["prmovies",64],["streamblasters",64],["filecrypt",64],["kickass",65],["cine-calidad",72],["woxikon",86],["teluguflix",101],["actvid",121],["torrentdownload",183],["doodstream",185],["fbstreams",232]]);

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
} catch {
}
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
    catch { }
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
