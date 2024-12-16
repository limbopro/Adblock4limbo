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

const argsList = [["script","DisplayAcceptableAdIfAdblocked"],["script","/==undefined.*body/"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","/adbl/i"],["script","Reflect"],["script","document.write"],["script","deblocker"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","exdynsrv"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|ad block|alert/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","popUnderUrl"],["script","Adblock"],["script","alert"],["script","/adb/i"],["script","document.createTextNode"],["script","/h=decodeURIComponent|popundersPerIP|adserverDomain/"],["script","/shown_at|WebAssembly/"],["script","style"],["script","shown_at"],["script","adsSrc"],["script","ai_adb"],["script","/adblock|popunder|openedPop|WebAssembly/"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["script","window.warn"],["script","adBlock"],["script","wpadmngr.com"],["script","adBlockDetected"],["script","/fetch|adb/i"],["script","window.open"],["script","location"],["script","adblockimg"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","googlesyndication"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/pop1stp|detectAdBlock/"],["script","popundersPerIP"],["script","popunder"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","catch"],["script","displayAdsV3"],["script",";}}};break;case $."],["script","adblocker"],["script","break;case"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adserverDomain|\\);break;case /"],["script","initializeInterstitial"],["script","popupBackground"],["script","mdpDeblocker"],["script","Math.floor"],["script","m9-ad-modal"],["script","detectAdBlock"],["script","antiAdBlockerHandler"],["script","Anzeige"],["script","blocking"],["script","adBlockNotice"],["script","HTMLAllCollection"],["script","advads"],["script","document.cookie"],["script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"],["script","/_0x|brave|onerror/"],["script","adb"],["script","kmtAdsData"],["script","wpadmngr"],["script","insertAdjacentHTML"],["script","navigator.userAgent"],["script","adbl"],["script","WebAssembly"],["script","checkAdBlock"],["script","detectedAdblock"],["script","setADBFlag"],["script","/ABDetected|navigator.brave|fetch/"],["script","/bypass.php"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script",";break;case $."],["script","adb_detected"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","/event\\.keyCode|DisableDevtool/"],["script","/WebAssembly|forceunder/"],["script","/adb|offsetWidth/i"],["script","contextmenu"],["script","/adblock|var Data.*];/"],["script","replace"],["script","globalThis;break;case"],["script","{delete window["],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","charCodeAt"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","blockAdBlock"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","error-report.com"],["script","KCgpPT57bGV0IGU"],["script","adShield"],["script","Ad-Shield"],["script","adrecover.com"],["script","html-load.com"],["script",".slice(-2);return decodeURIComponent"],["script","AdblockRegixFinder"],["script","/adScript|adsBlocked/"],["script","serve"],["script","?metric=transit.counter&key=fail_redirect&tags="],["script","/pushAdTag|link_click|getAds/"],["script","/ConsoleBan|alert|AdBlocker/"],["script","runPop"],["style","body:not(.ownlist)"],["script","alert","condition","adblock"],["script","/decodeURIComponent\\(escape|fairAdblock/"],["script","/ai_|googletag|adb/"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","AdBlock"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","zfgloaded"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","app_checkext"],["script","clientHeight"],["script","await"],["script","!window.adngin"],["script","axios"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","\"\").split(\",\")[4]"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","Symbol.iterator"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","AaDetector"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","/document\\.head\\.appendChild|window\\.open/"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","detect"],["script","fetch"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","adBlockEnabled"],["script","/ \\=\\=\\= [0-9]{1","2}\\) \\{ \\}/"],["script","\"data-adm-url\""],["script","NREUM"]];

const hostnamesMap = new Map([["alpin.de",0],["boersennews.de",0],["chefkoch.de",0],["chip.de",0],["clever-tanken.de",0],["desired.de",0],["donnerwetter.de",0],["fanfiktion.de",0],["focus.de",0],["formel1.de",0],["frustfrei-lernen.de",0],["gewinnspiele.tv",0],["giga.de",0],["gut-erklaert.de",0],["kino.de",0],["messen.de",0],["nickles.de",0],["nordbayern.de",0],["spielfilm.de",0],["teltarif.de",0],["unsere-helden.com",0],["weltfussball.at",0],["watson.de",0],["moviepilot.de",[0,4]],["mactechnews.de",0],["sport1.de",0],["welt.de",0],["aupetitparieur.com",1],["allthingsvegas.com",1],["100percentfedup.com",1],["beforeitsnews.com",1],["concomber.com",1],["conservativebrief.com",1],["conservativefiringline.com",1],["dailylol.com",1],["funnyand.com",1],["letocard.fr",1],["mamieastuce.com",1],["meilleurpronostic.fr",1],["patriotnationpress.com",1],["toptenz.net",1],["vitamiiin.com",1],["writerscafe.org",1],["populist.press",1],["dailytruthreport.com",1],["livinggospeldaily.com",1],["first-names-meanings.com",1],["welovetrump.com",1],["thehayride.com",1],["thelibertydaily.com",1],["thepoke.co.uk",1],["thepolitistick.com",1],["theblacksphere.net",1],["shark-tank.com",1],["naturalblaze.com",1],["greatamericanrepublic.com",1],["dailysurge.com",1],["truthlion.com",1],["flagandcross.com",1],["westword.com",1],["republicbrief.com",1],["freedomfirstnetwork.com",1],["phoenixnewtimes.com",1],["designbump.com",1],["clashdaily.com",1],["madworldnews.com",1],["reviveusa.com",1],["sonsoflibertymedia.com",1],["thedesigninspiration.com",1],["videogamesblogger.com",1],["protrumpnews.com",1],["thepalmierireport.com",1],["kresy.pl",1],["thepatriotjournal.com",1],["gellerreport.com",1],["thegatewaypundit.com",1],["wltreport.com",1],["miaminewtimes.com",1],["politicalsignal.com",1],["rightwingnews.com",1],["bigleaguepolitics.com",1],["comicallyincorrect.com",1],["web.de",2],["skidrowreloaded.com",[3,14]],["1stream.eu",3],["4kwebplay.xyz",3],["antennasports.ru",3],["buffsports.me",[3,60]],["buffstreams.app",3],["claplivehdplay.ru",[3,66]],["cracksports.me",[3,13]],["euro2024direct.ru",3],["ext.to",3],["eztv.tf",3],["eztvx.to",3],["kenitv.me",[3,13,14]],["lewblivehdplay.ru",[3,66]],["mlbbite.net",3],["mlbstreams.ai",3],["qatarstreams.me",[3,13]],["qqwebplay.xyz",[3,66]],["rnbastreams.com",3],["soccerworldcup.me",[3,13]],["topstreams.info",3],["totalsportek.to",3],["viwlivehdplay.ru",3],["vidco.pro",[3,60]],["embedsports.me",[3,117]],["embedstream.me",[3,13,14,60,117]],["jumbtv.com",[3,117]],["reliabletv.me",[3,117]],["topembed.pw",[3,66,115]],["crackstreamer.net",3],["methstreamer.com",3],["hesgoal-tv.io",5],["hesgoal-vip.io",5],["intro-hd.net",5],["monacomatin.mc",5],["nodo313.net",5],["yts.mx",7],["magesypro.com",8],["pinsystem.co.uk",8],["elrellano.com",8],["tinyppt.com",8],["bharathwick.com",8],["descargaspcpro.net",8],["dx-tv.com",8],["rt3dmodels.com",8],["plc4me.com",8],["blisseyhusbands.com",8],["madaradex.org",8],["trigonevo.com",8],["franceprefecture.fr",8],["jazbaat.in",8],["aipebel.com",8],["audiotools.blog",8],["embdproxy.xyz",8],["veganab.co",8],["camdigest.com",8],["learnmany.in",8],["amanguides.com",[8,95]],["highkeyfinance.com",[8,95]],["appkamods.com",8],["techacode.com",8],["djqunjab.in",8],["downfile.site",8],["expertvn.com",8],["trangchu.news",8],["3dmodelshare.org",8],["nulleb.com",8],["asiaon.top",8],["coursesghar.com",8],["thecustomrom.com",8],["snlookup.com",8],["bingotingo.com",8],["ghior.com",8],["3dmili.com",8],["karanpc.com",8],["plc247.com",8],["apkdelisi.net",8],["javindo.eu.org",8],["chindohot.site",8],["freepasses.org",8],["tomarnarede.pt",8],["basketballbuzz.ca",8],["dribbblegraphics.com",8],["kemiox.com",8],["checkersmenu.us",8],["teksnologi.com",8],["upornia.com",10],["germancarforum.com",12],["innateblogger.com",12],["cybercityhelp.in",12],["mlbbox.me",13],["neodrive.xyz",13],["streamnoads.com",[13,14,60,109]],["bowfile.com",13],["cloudvideo.tv",[13,60]],["coloredmanga.com",13],["exeo.app",13],["hiphopa.net",[13,14]],["megaup.net",13],["olympicstreams.co",[13,60]],["tv247.us",[13,14]],["uploadhaven.com",13],["userscloud.com",[13,60]],["mdfx9dc8n.net",14],["mdzsmutpcvykb.net",14],["mixdrop21.net",14],["mixdropjmk.pw",14],["1337x.ninjaproxy1.com",14],["y2tube.pro",14],["freeshot.live",14],["fastreams.com",14],["redittsports.com",14],["sky-sports.store",14],["streamsoccer.site",14],["tntsports.store",14],["wowstreams.co",14],["zdsptv.com",14],["141jav.com",14],["1bit.space",14],["1bitspace.com",14],["345movies.com",14],["3dporndude.com",14],["4archive.org",14],["4horlover.com",14],["560pmovie.com",14],["60fps.xyz",14],["85tube.com",14],["85videos.com",14],["aazzz.xyz",14],["acefile.co",14],["actusports.eu",14],["adclickersbot.com",14],["adricami.com",14],["adslink.pw",14],["adultstvlive.com",14],["adz7short.space",14],["aeblender.com",14],["ahdafnews.blogspot.com",14],["ak47sports.com",14],["akuma.moe",14],["allplayer.tk",14],["allstreaming.online",14],["amadoras.cf",14],["amadorasdanet.shop",14],["amateurblog.tv",14],["androidadult.com",14],["anhsexjav.xyz",14],["anidl.org",14],["anime-loads.org",14],["animeblkom.net",14],["animefire.plus",14],["animelek.me",14],["animespire.net",14],["animestotais.xyz",14],["animeyt.es",14],["anroll.net",14],["anymoviess.xyz",14],["aotonline.org",14],["asenshu.com",14],["asialiveaction.com",14],["asianclipdedhd.net",14],["askim-bg.com",14],["asumsikedaishop.com",14],["avcrempie.com",14],["avseesee.com",14],["gettapeads.com",[14,109]],["backfirstwo.com",14],["bajarjuegospcgratis.com",14],["balkanportal.net",14],["balkanteka.net",14],["bdnewszh.com",[14,60]],["belowporn.com",14],["bestclaimtrx.xyz",14],["bestgirlsexy.com",14],["bestnhl.com",14],["bestporn4free.com",14],["bestporncomix.com",14],["bet36.es",14],["bikinitryon.net",14],["birdurls.com",14],["bitsearch.to",14],["blackcockadventure.com",14],["blackcockchurch.org",14],["blackporncrazy.com",14],["blizzboygames.net",14],["blizzpaste.com",14],["blkom.com",14],["blog-peliculas.com",14],["blogtrabalhista.com",14],["bobsvagene.club",14],["bolly4umovies.click",14],["bonusharian.pro",14],["brilian-news.id",14],["brupload.net",14],["bucitana.com",14],["cablegratis.online",14],["camchickscaps.com",14],["camgirlcum.com",14],["camgirls.casa",14],["cashurl.in",14],["castingx.net",14],["ccurl.net",[14,60]],["celebrity-leaks.net",14],["cgpelis.net",14],["charexempire.com",14],["choosingnothing.com",14],["clasico.tv",14],["clik.pw",14],["coin-free.com",[14,92]],["coins100s.fun",14],["comicsmanics.com",14],["compucalitv.com",14],["coolcast2.com",14],["cosplaytab.com",14],["countylocalnews.com",14],["cpmlink.net",14],["crackstreamshd.click",14],["crespomods.com",14],["crisanimex.com",14],["crunchyscan.fr",14],["cuevana3.fan",14],["cuevana3hd.com",14],["cumception.com",14],["cutpaid.com",14],["cypherscans.xyz",[14,60]],["dailyuploads.net",14],["datawav.club",14],["daughtertraining.com",14],["deepgoretube.site",14],["deltabit.co",14],["deporte-libre.top",14],["depvailon.com",14],["derleta.com",14],["desivdo.com",14],["desixx.net",14],["detikkebumen.com",14],["deutschepornos.me",14],["diasoft.xyz",14],["directupload.net",14],["diskusscan.com",14],["dixva.com",14],["doctormalay.com",14],["dofusports.xyz",14],["dogemate.com",14],["doods.cam",14],["doodskin.lat",14],["downloadrips.com",14],["downvod.com",14],["dphunters.mom",14],["dragontranslation.com",14],["duddes.xyz",14],["dvdfullestrenos.com",14],["easylinks.in",14],["ebookbb.com",14],["ebookhunter.net",14],["egyanime.com",14],["egygost.com",14],["egyshare.cc",14],["ekasiwap.com",14],["electro-torrent.pl",14],["elil.cc",14],["embed4u.xyz",14],["eplayer.click",14],["erovoice.us",14],["eroxxx.us",14],["estrenosdoramas.net",14],["everia.club",14],["everythinginherenet.blogspot.com",14],["extrafreetv.com",14],["extremotvplay.com",14],["fapinporn.com",14],["fapptime.com",14],["fashionblog.tv",14],["fastreams.live",14],["faucethero.com",14],["fembed.com",14],["femdom-joi.com",14],["fileone.tv",14],["film1k.com",14],["filmeonline2023.net",14],["filmesonlinex.org",14],["filmesonlinexhd.biz",[14,60]],["filmovitica.com",14],["filmymaza.blogspot.com",14],["filthy.family",14],["firstmovies.to",14],["fixfinder.click",14],["flostreams.xyz",14],["flyfaucet.com",14],["footyhunter.lol",14],["footyhunter3.xyz",[14,60]],["forex-golds.com",14],["forex-trnd.com",14],["forumchat.club",14],["forumlovers.club",14],["freemoviesonline.biz",14],["freeomovie.co.in",14],["freeomovie.to",14],["freeporncomic.net",14],["freepornhdonlinegay.com",14],["freeproxy.io",14],["freeuse.me",14],["freeusexporn.com",14],["fsicomics.com",14],["gambarbogel.xyz",14],["gamepcfull.com",14],["gameronix.com",14],["gamesfullx.com",14],["gameshdlive.net",14],["gameshdlive.xyz",14],["gamesmountain.com",14],["gamesrepacks.com",14],["gamingguru.fr",14],["gamovideo.com",14],["garota.cf",14],["gaydelicious.com",14],["gaypornmasters.com",14],["gaysex69.net",14],["gemstreams.com",14],["get-to.link",14],["girlscanner.org",14],["giurgiuveanul.ro",14],["gledajcrtace.xyz",14],["gocast2.com",14],["gomo.to",14],["gostosa.cf",14],["gtlink.co",14],["gwiazdypornosow.pl",14],["haho.moe",14],["hatsukimanga.com",14],["hayhd.net",14],["hdsaprevodom.com",14],["hdstreamss.club",14],["hentais.tube",14],["hentaistream.co",14],["hentaitk.net",14],["hentaitube.online",14],["hentaiworld.tv",14],["hesgoal.tv",14],["hexupload.net",14],["hhkungfu.tv",14],["highlanderhelp.com",14],["hindimean.com",14],["hindimovies.to",[14,60]],["hiperdex.com",14],["hispasexy.org",14],["hitprn.com",14],["hoca4u.com",14],["hollymoviehd.cc",14],["hoodsite.com",14],["hopepaste.download",14],["hornylips.com",14],["hotgranny.live",14],["hotmama.live",14],["hqcelebcorner.net",14],["huren.best",14],["hwnaturkya.com",[14,60]],["hxfile.co",[14,60]],["igfap.com",14],["ihdstreams.xyz",14],["iklandb.com",14],["illink.net",14],["imgkings.com",14],["imgsex.xyz",14],["imx.to",14],["influencersgonewild.org",14],["infosgj.free.fr",14],["investnewsbrazil.com",14],["itdmusics.com",14],["itsuseful.site",14],["itunesfre.com",14],["iwatchfriendsonline.net",[14,165]],["jackstreams.com",14],["jatimupdate24.com",14],["jav-fun.cc",14],["jav-noni.cc",14],["jav-scvp.com",14],["javcl.com",14],["javf.net",14],["javhay.net",14],["javhoho.com",14],["javhun.com",14],["javleak.com",14],["javporn.best",14],["javsek.net",14],["javsex.to",14],["javtiful.com",[14,28]],["jimdofree.com",14],["jiofiles.org",14],["jorpetz.com",14],["journalyc.online",14],["jp-films.com",14],["jpop80ss3.blogspot.com",14],["jpopsingles.eu",[14,34]],["kantotflix.net",14],["kantotinyo.com",14],["kaoskrew.org",14],["kaplog.com",14],["keralatvbox.com",14],["kickassanimes.io",14],["kimochi.info",14],["kimochi.tv",14],["kinemania.tv",14],["konstantinova.net",14],["koora-online.live",14],["kunmanga.com",14],["kutmoney.com",14],["kwithsub.com",14],["ladangreceh.xyz",14],["lat69.me",14],["latinblog.tv",14],["latinomegahd.net",14],["lazyfaucet.com",14],["leechpremium.link",14],["legendas.dev",14],["legendei.net",14],["lightdlmovies.blogspot.com",14],["lighterlegend.com",14],["linclik.com",14],["linkebr.com",14],["linkrex.net",14],["links.worldfree4u-lol.online",14],["linksfy.co",14],["lody.ink",14],["lovesomecommunity.com",14],["lulu.st",14],["lulustream.com",[14,115]],["luluvdo.com",14],["luzcameraeacao.shop",14],["manga-oni.com",14],["mangaboat.com",14],["mangagenki.me",14],["mangahere.onl",14],["mangaweb.xyz",14],["mangoporn.net",14],["manhwahentai.me",14],["masahub.com",14],["masahub.net",14],["maturegrannyfuck.com",14],["mdy48tn97.com",14],["mediapemersatubangsa.com",14],["mega-mkv.com",14],["megapastes.com",14],["megapornpics.com",14],["messitv.net",14],["meusanimes.net",14],["milfmoza.com",14],["milfzr.com",14],["millionscast.com",14],["mimaletamusical.blogspot.com",14],["mitly.us",14],["mkv-pastes.com",14],["modb.xyz",14],["monaskuliner.ac.id",14],["moredesi.com",14],["movgotv.net",14],["movi.pk",14],["movierr.online",14],["movieswbb.com",14],["moviewatch.com.pk",14],["mp4upload.com",14],["mrskin.live",14],["multicanaistv.com",14],["mundowuxia.com",14],["myeasymusic.ir",14],["myonvideo.com",14],["myyouporn.com",14],["narutoget.info",14],["naughtypiss.com",14],["nerdiess.com",14],["new-fs.eu",14],["newtorrentgame.com",14],["nflstreams.me",14],["niaomea.me",[14,60]],["nicekkk.com",14],["nicesss.com",14],["nlegs.com",14],["nolive.me",[14,60]],["notformembersonly.com",14],["novamovie.net",14],["novelpdf.xyz",14],["novelssites.com",[14,60]],["novelup.top",14],["nsfwr34.com",14],["nu6i-bg-net.com",14],["nudebabesin3d.com",14],["nukedfans.com",14],["nuoga.eu",14],["nzbstars.com",14],["ohjav.com",14],["ojearnovelas.com",14],["okanime.xyz",14],["olarixas.xyz",14],["oldbox.cloud",14],["olweb.tv",14],["olympicstreams.me",14],["on9.stream",14],["oncast.xyz",14],["onepiece-mangaonline.com",14],["onifile.com",14],["onionstream.live",14],["onlinesaprevodom.net",14],["onlyfullporn.video",14],["onplustv.live",14],["originporn.com",14],["ovagames.com",14],["ovamusic.com",14],["owllink.net",14],["packsporn.com",14],["pahaplayers.click",14],["palimas.org",14],["pandafiles.com",14],["papahd.club",14],["papahd1.xyz",14],["password69.com",14],["pastemytxt.com",14],["payskip.org",14],["peeplink.in",14],["peliculasmx.net",14],["pervertgirlsvideos.com",14],["pervyvideos.com",14],["phim12h.com",14],["picdollar.com",14],["pickteenz.com",14],["pics4you.net",14],["picsxxxporn.com",14],["pinayscandalz.com",14],["pinkueiga.net",14],["piratefast.xyz",14],["piratehaven.xyz",14],["pirateiro.com",14],["pirlotvonline.org",14],["playtube.co.za",14],["plugintorrent.com",14],["pmvzone.com",14],["porndish.com",14],["pornez.net",14],["pornfetishbdsm.com",14],["pornfits.com",14],["pornhd720p.com",14],["pornobr.club",14],["pornobr.ninja",14],["pornodominicano.net",14],["pornofaps.com",14],["pornoflux.com",14],["pornotorrent.com.br",14],["pornredit.com",14],["pornstarsyfamosas.es",14],["pornstreams.co",14],["porntn.com",14],["pornxbit.com",14],["pornxday.com",14],["portaldasnovinhas.shop",14],["portugues-fcr.blogspot.com",14],["poscishd.online",14],["poscitesch.com",[14,60]],["poseyoung.com",14],["pover.org",14],["proxyninja.org",14],["pubfilmz.com",14],["publicsexamateurs.com",14],["punanihub.com",14],["putlocker5movies.org",14],["pxxbay.com",14],["r18.best",14],["ragnaru.net",14],["rapbeh.net",14],["rapelust.com",14],["rapload.org",14],["read-onepiece.net",14],["retro-fucking.com",14],["retrotv.org",14],["robaldowns.com",14],["rockdilla.com",14],["rojadirectatvenvivo.com",14],["rojitadirecta.blogspot.com",14],["romancetv.site",14],["rsoccerlink.site",14],["rule34.club",14],["rule34hentai.net",14],["rumahbokep-id.com",14],["safego.cc",14],["safestream.cc",14],["sakurafile.com",14],["satoshi-win.xyz",14],["scat.gold",14],["scatfap.com",14],["scatkings.com",14],["scnlog.me",14],["scripts-webmasters.net",14],["serie-turche.com",14],["serijefilmovi.com",14],["sexcomics.me",14],["sexdicted.com",14],["sexgay18.com",14],["sexofilm.co",14],["sextgem.com",14],["sextubebbw.com",14],["sgpics.net",14],["shadowrangers.live",14],["shahee4u.cam",14],["shahiid-anime.net",14],["shemale6.com",14],["shinden.pl",14],["short.es",14],["showmanga.blog.fc2.com",14],["shrt10.com",14],["shurt.pw",14],["sideplusleaks.net",14],["silverblog.tv",14],["silverpic.com",14],["sinhalasub.life",14],["sinsitio.site",14],["sinvida.me",14],["skidrowcpy.com",14],["skidrowfull.com",14],["slut.mom",14],["smallencode.me",14],["smoner.com",14],["smplace.com",14],["soccerinhd.com",[14,60]],["socceron.name",14],["softairbay.com",14],["sokobj.com",14],["songsio.com",14],["souexatasmais.com",14],["sportbar.live",14],["sportea.online",14],["sportskart.xyz",14],["sportstream1.cfd",14],["srt.am",14],["srts.me",14],["stakes100.xyz",14],["stbemuiptv.com",14],["stockingfetishvideo.com",14],["stream.crichd.vip",14],["stream.lc",14],["stream25.xyz",14],["streambee.to",14],["streamcenter.pro",14],["streamers.watch",14],["streamgo.to",14],["streamkiste.tv",14],["streamoporn.xyz",14],["streamoupload.xyz",14],["streamservicehd.click",14],["streamvid.net",[14,23]],["subtitleporn.com",14],["subtitles.cam",14],["suicidepics.com",14],["supertelevisionhd.com",14],["supexfeeds.com",14],["swiftload.io",14],["swzz.xyz",14],["sxnaar.com",14],["tabooporns.com",14],["taboosex.club",14],["tapeantiads.com",[14,109]],["tapeblocker.com",[14,109]],["tapenoads.com",[14,109]],["tapewithadblock.org",[14,109,222]],["teamos.xyz",14],["teen-wave.com",14],["teenporncrazy.com",14],["telegramgroups.xyz",14],["telenovelasweb.com",14],["tensei-shitara-slime-datta-ken.com",14],["tfp.is",14],["tgo-tv.co",[14,60]],["thaihotmodels.com",14],["theblueclit.com",14],["thebussybandit.com",14],["thedaddy.to",[14,64]],["theicongenerator.com",14],["thelastdisaster.vip",14],["thepiratebay0.org",14],["thepiratebay10.info",14],["thesexcloud.com",14],["thothub.today",14],["tightsexteens.com",14],["tojav.net",14],["tokyoblog.tv",14],["tonnestreamz.xyz",14],["top16.net",14],["topvideosgay.com",14],["torrage.info",14],["torrents.vip",14],["torrsexvid.com",14],["tpb-proxy.xyz",14],["trannyteca.com",14],["trendytalker.com",14],["tumanga.net",14],["turbogvideos.com",14],["turbovid.me",14],["turkishseriestv.org",14],["turksub24.net",14],["tutele.sx",14],["tutelehd3.xyz",14],["tvglobe.me",14],["tvpclive.com",14],["tvs-widget.com",14],["tvseries.video",14],["ucptt.com",14],["ufaucet.online",14],["ufcfight.online",14],["uhdgames.xyz",14],["ultrahorny.com",14],["ultraten.net",14],["unblockweb.me",14],["underhentai.net",14],["uniqueten.net",14],["upbaam.com",14],["upstream.to",14],["valeriabelen.com",14],["verdragonball.online",14],["vfxmed.com",14],["video.az",14],["videostreaming.rocks",14],["videowood.tv",14],["vidorg.net",14],["vidtapes.com",14],["vidz7.com",14],["vikistream.com",14],["vikv.net",14],["virpe.cc",14],["visifilmai.org",14],["viveseries.com",14],["vladrustov.sx",14],["volokit2.com",[14,64]],["vstorrent.org",14],["w-hentai.com",14],["watchaccordingtojimonline.com",14],["watchbrooklynnine-nine.com",14],["watchdowntonabbeyonline.com",14],["watchelementaryonline.com",14],["watcheronline.net",14],["watchgleeonline.com",14],["watchhowimetyourmother.online",14],["watchkobestreams.info",14],["watchlostonline.net",14],["watchlouieonline.com",14],["watchjavidol.com",14],["watchmadmenonline.com",14],["watchmonkonline.com",14],["watchonceuponatimeonline.com",14],["watchparksandrecreation.net",14],["watchprettylittleliarsonline.com",14],["watchrulesofengagementonline.com",14],["watchthekingofqueens.com",14],["watchthemiddleonline.com",14],["watchtvchh.xyz",14],["webcamrips.com",14],["wickedspot.org",14],["wincest.xyz",14],["witanime.best",14],["wolverdon.fun",14],["wolverdonx.com",14],["wordcounter.icu",14],["worldcupstream.pm",14],["worldmovies.store",14],["worldstreams.click",14],["wpdeployit.com",14],["wqstreams.tk",14],["wwwsct.com",14],["xanimeporn.com",14],["xblog.tv",14],["xn--verseriesespaollatino-obc.online",14],["xn--xvideos-espaol-1nb.com",14],["xpornium.net",14],["xsober.com",14],["xvip.lat",14],["xxgasm.com",14],["xxvideoss.org",14],["xxx18.uno",14],["xxxdominicana.com",14],["xxxfree.watch",14],["xxxmax.net",14],["xxxwebdlxxx.top",14],["xxxxvideo.uno",14],["y2b.wiki",14],["yabai.si",14],["yadixv.com",14],["yayanimes.net",14],["yeshd.net",14],["yodbox.com",14],["youjax.com",14],["youpits.xyz",14],["yourdailypornvideos.ws",14],["yourupload.com",14],["ytstv.me",14],["ytstvmovies.co",14],["ytstvmovies.xyz",14],["ytsyify.co",14],["ytsyifymovie.com",14],["zerion.cc",14],["zerocoin.top",14],["zitss.xyz",14],["zpaste.net",14],["zplayer.live",14],["faucet.ovh",15],["oko.sh",[16,102,103]],["variety.com",17],["gameskinny.com",17],["deadline.com",17],["washingtonpost.com",18],["bigbtc.win",19],["cryptofun.space",19],["gosexpod.com",20],["sexo5k.com",21],["truyen-hentai.com",21],["theshedend.com",23],["eracast.cc",23],["zeroupload.com",23],["securenetsystems.net",23],["miniwebtool.com",23],["bchtechnologies.com",23],["spiegel.de",24],["jacquieetmichel.net",25],["hausbau-forum.de",26],["kiemlua.com",26],["appnee.com",27],["apkmirror.com",[29,129]],["streambucket.net",30],["nontongo.win",30],["player.smashy.stream",31],["player.smashystream.com",31],["cineb.rs",33],["hiraethtranslation.com",34],["fcportables.com",35],["repack-games.com",35],["pawastreams.info",35],["ibooks.to",35],["truyentranhfull.net",35],["d0000d.com",36],["d000d.com",36],["d0o0d.com",36],["do0od.com",36],["doods.pro",36],["ds2play.com",36],["ds2video.com",36],["xfreehd.com",37],["freethesaurus.com",38],["thefreedictionary.com",38],["dexterclearance.com",39],["x-video.tube",40],["streamruby.com",40],["poophd.cc",40],["rahim-soft.com",40],["x86.co.kr",41],["onlyfaucet.com",42],["safetxt.net",43],["smutty.com",43],["e-sushi.fr",43],["freeadultcomix.com",43],["down.dataaps.com",43],["filmweb.pl",43],["x-x-x.tube",44],["visionpapers.org",45],["fdownloader.net",46],["thehackernews.com",47],["mielec.pl",48],["camsrip.com",49],["help.sakarnewz.com",49],["beatsnoop.com",49],["fetchpik.com",49],["hackerranksolution.in",49],["treasl.com",50],["mrbenne.com",51],["cnpics.org",52],["ovabee.com",52],["porn4f.com",52],["cnxx.me",52],["ai18.pics",52],["cuervotv.me",[53,60]],["aliezstream.pro",53],["daddy-stream.xyz",53],["instream.pro",53],["mylivestream.pro",53],["powerover.online",53],["sportea.link",53],["sportsurge.stream",53],["ufckhabib.com",53],["ustream.pro",53],["papa4k.online",53],["animeshqip.site",53],["apkship.shop",53],["buzter.pro",53],["enjoysports.bond",53],["filedot.to",53],["foreverquote.xyz",53],["hdstream.one",53],["kingstreamz.site",53],["live.fastsports.store",53],["livesnow.me",53],["livesports4u.pw",53],["masterpro.click",53],["nuxhallas.click",53],["papahd.info",53],["rgshows.me",53],["sportmargin.live",53],["sportmargin.online",53],["sportsloverz.xyz",53],["sportzlive.shop",53],["supertipzz.online",53],["totalfhdsport.xyz",53],["ultrastreamlinks.xyz",53],["usgate.xyz",53],["webmaal.cfd",53],["wizistreamz.xyz",53],["worldstreamz.shop",53],["g-porno.com",53],["g-streaming.com",53],["giga-streaming.com",53],["educ4m.com",53],["fromwatch.com",53],["visualnewshub.com",53],["neymartv.net",53],["streamhd247.info",53],["hindimoviestv.com",53],["nowlive1.me",53],["buzter.xyz",53],["gamehdlive.online",53],["hdfungamezz.xyz",53],["kingstreamz.lol",53],["masterpro.club",53],["papahd.co",53],["sportos.co",53],["valhallas.click",53],["andhrafriends.com",54],["freeroms.com",54],["soap2day-online.com",54],["sportsonline.si",55],["fiuxy2.co",56],["animeunity.to",57],["auto-crypto.click",58],["iconicblogger.com",58],["tokopedia.com",59],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",60],["adsh.cc",60],["afilmyhouse.blogspot.com",60],["ak.sv",60],["animesultra.com",60],["api.webs.moe",60],["apkmody.io",60],["attvideo.com",60],["backfirstwo.site",[60,193]],["crazyblog.in",60],["divicast.com",60],["dlhd.so",60],["embed.meomeo.pw",60],["filmeserialeonline.org",60],["flexyhit.com",60],["foreverwallpapers.com",60],["french-streams.cc",60],["fslinks.org",60],["hdtoday.to",60],["hinatasoul.com",60],["igg-games.com",60],["infinityscans.net",60],["infinityscans.xyz",60],["mangareader.to",60],["membed.net",60],["mgnetu.com",60],["mp3juice.info",60],["mp3juices.cc",60],["myflixerz.to",60],["nowmetv.net",60],["nowsportstv.com",60],["nxbrew.com",60],["oii.io",60],["paidshitforfree.com",60],["pepperlive.info",60],["playertv.net",60],["putlocker68.com",60],["roystream.com",60],["rssing.com",60],["s.to",60],["share.filesh.site",60],["sharkfish.xyz",60],["skidrowcodex.net",60],["smartermuver.com",60],["sports-stream.site",60],["stream4free.live",60],["tamilmobilemovies.in",60],["tapeadsenjoyer.com",[60,109]],["thewatchseries.live",60],["tnmusic.in",60],["travelplanspro.com",60],["tusfiles.com",60],["tutlehd4.com",60],["twstalker.com",60],["vid-guard.com",60],["video-leech.xyz",60],["vidsaver.net",60],["vidspeeds.com",60],["viralitytoday.com",60],["voiranime.stream",60],["watchdoctorwhoonline.com",60],["watchserie.online",60],["webhostingpost.com",60],["woxikon.in",60],["www-y2mate.com",60],["ylink.bid",60],["ytix.xyz",60],["remixsearch.net",61],["remixsearch.es",61],["onlineweb.tools",61],["sharing.wtf",61],["2024tv.ru",62],["xnxxcom.xyz",63],["sportsurge.net",64],["joyousplay.xyz",64],["quest4play.xyz",[64,66]],["generalpill.net",64],["moneycontrol.com",65],["cookiewebplay.xyz",66],["ilovetoplay.xyz",66],["streamcaster.live",66],["weblivehdplay.ru",66],["codec.kyiv.ua",67],["kimcilonlyofc.com",67],["unofficialtwrp.com",67],["oaaxpgp3.xyz",68],["m9.news",69],["sexwebvideo.com",70],["sexwebvideo.net",70],["pig69.com",70],["cosplay18.pics",70],["zeemoontv-24.blogspot.com",71],["stitichsports.com",71],["tinys.click",71],["answerpython.com",71],["formyanime.com",71],["gsm-solution.com",71],["h-donghua.com",71],["hindisubbedacademy.com",71],["linksdramas2.blogspot.com",71],["pkgovjobz.com",71],["ripexbooster.xyz",71],["serial4.com",71],["serial412.blogspot.com",71],["sigmalinks.in",71],["tutorgaming.com",71],["everydaytechvams.com",71],["dipsnp.com",71],["cccam4sat.com",71],["callofwar.com",72],["secondhandsongs.com",73],["nudezzers.org",74],["nohost.one",75],["zoechip.com",75],["3rooodnews.net",76],["xxxbfvideo.net",77],["filmy4wap.co.in",78],["gameshop4u.com",79],["regenzi.site",79],["pcgeeks-games.com",80],["newscon.org",80],["yunjiema.top",80],["handirect.fr",81],["animefenix.tv",82],["tempinbox.xyz",83],["mailgen.biz",83],["fsiblog3.club",84],["kamababa.desi",84],["updatewallah.in",85],["mediaset.es",85],["atlasstudiousa.com",86],["getfiles.co.uk",87],["genelify.com",88],["dhtpre.com",89],["tea-coffee.net",90],["spatsify.com",90],["newedutopics.com",90],["getviralreach.in",90],["edukaroo.com",90],["funkeypagali.com",90],["careersides.com",90],["nayisahara.com",90],["wikifilmia.com",90],["infinityskull.com",90],["viewmyknowledge.com",90],["iisfvirtual.in",90],["starxinvestor.com",90],["jkssbalerts.com",90],["kenzo-flowertag.com",91],["mdn.lol",91],["btcbitco.in",92],["btcsatoshi.net",92],["cempakajaya.com",92],["crypto4yu.com",92],["gainl.ink",92],["manofadan.com",92],["readbitcoin.org",92],["wiour.com",92],["kienthucrangmieng.com",92],["tremamnon.com",92],["btc25.org",92],["bitsmagic.fun",92],["ourcoincash.xyz",92],["hynews.biz",92],["blog.cryptowidgets.net",93],["blog.insurancegold.in",93],["blog.wiki-topia.com",93],["blog.coinsvalue.net",93],["blog.cookinguide.net",93],["blog.freeoseocheck.com",93],["aylink.co",94],["sugarona.com",95],["nishankhatri.xyz",95],["cety.app",96],["exego.app",96],["cutlink.net",96],["cutsy.net",96],["cutyurls.com",96],["cutty.app",96],["cutnet.net",96],["aiimgvlog.fun",97],["appsbull.com",98],["diudemy.com",98],["maqal360.com",98],["mphealth.online",98],["makefreecallsonline.com",98],["androjungle.com",98],["bookszone.in",98],["drakescans.com",98],["shortix.co",98],["msonglyrics.com",98],["app-sorteos.com",98],["bokugents.com",98],["client.pylexnodes.net",98],["btvplus.bg",98],["blog24.me",[99,100]],["coingraph.us",101],["impact24.us",101],["tvi.la",[102,103]],["iir.la",[102,103]],["tii.la",[102,103]],["ckk.ai",[102,103]],["oei.la",[102,103]],["lnbz.la",[102,103]],["oii.la",[102,103]],["tpi.li",[102,103]],["atglinks.com",104],["kbconlinegame.com",105],["hamrojaagir.com",105],["odijob.com",105],["blogesque.net",106],["bookbucketlyst.com",106],["explorosity.net",106],["optimizepics.com",106],["torovalley.net",106],["travize.net",106],["trekcheck.net",106],["metoza.net",106],["techlike.net",106],["snaplessons.net",106],["atravan.net",106],["transoa.net",106],["techmize.net",106],["crenue.net",106],["simana.online",107],["fooak.com",107],["joktop.com",107],["evernia.site",107],["falpus.com",107],["financemonk.net",108],["advertisertape.com",109],["tapeadvertisement.com",109],["tapelovesads.org",109],["watchadsontape.com",109],["hyundaitucson.info",110],["exambd.net",111],["cgtips.org",112],["emuenzen.de",113],["buffshub.stream",115],["cinego.tv",115],["ev01.to",115],["fstream365.com",115],["minoplres.xyz",115],["mostream.us",115],["s3embtaku.pro",115],["sportshub.stream",115],["topcinema.cam",115],["unblocked.id",118],["listendata.com",119],["7xm.xyz",119],["fastupload.io",119],["azmath.info",119],["wouterplanet.com",120],["androidacy.com",121],["pillowcase.su",122],["veryfreeporn.com",123],["theporngod.com",123],["besthdgayporn.com",124],["drivenime.com",124],["javup.org",124],["shemaleup.net",124],["austiblox.net",126],["btcbunch.com",127],["teachoo.com",128],["automobile-catalog.com",[129,130]],["motorbikecatalog.com",[129,130]],["blog.esuteru.com",129],["blog.livedoor.jp",129],["itainews.com",129],["jin115.com",129],["allthetests.com",129],["javatpoint.com",129],["globalrph.com",129],["carscoops.com",129],["crosswordsolver.com",129],["cruciverba.it",129],["dnevno.hr",129],["dziennik.pl",[129,135]],["ff14net.2chblog.jp",129],["heureka.cz",129],["indiatimes.com",129],["lacuarta.com",[129,134]],["laleggepertutti.it",129],["meeco.kr",129],["mirrored.to",129],["motscroises.fr",129],["news4vip.livedoor.biz",129],["oeffnungszeitenbuch.de",129],["onecall2ch.com",129],["oraridiapertura24.it",129],["palabr.as",129],["petitfute.com",129],["rabitsokuhou.2chblog.jp",129],["rostercon.com",129],["slashdot.org",129],["sourceforge.net",129],["suzusoku.blog.jp",129],["the-crossword-solver.com",129],["thestockmarketwatch.com",129],["wfmz.com",129],["word-grabber.com",129],["wort-suchen.de",129],["yutura.net",129],["zagreb.info",129],["freemcserver.net",129],["golf-live.at",129],["kreuzwortraetsel.de",129],["raetsel-hilfe.de",129],["verkaufsoffener-sonntag.com",129],["horairesdouverture24.fr",129],["nyitvatartas24.hu",129],["modhub.us",129],["yugioh-starlight.com",129],["winfuture.de",129],["talkwithstranger.com",129],["topstarnews.net",129],["islamicfinder.org",129],["secure-signup.net",129],["dramabeans.com",129],["manta.com",129],["tportal.hr",129],["tvtropes.org",129],["wouldurather.io",129],["convertcase.net",129],["interfootball.co.kr",130],["a-ha.io",130],["cboard.net",130],["jjang0u.com",130],["joongdo.co.kr",130],["viva100.com",130],["gamingdeputy.com",130],["thesaurus.net",130],["alle-tests.nl",130],["maketecheasier.com",130],["allthekingz.com",130],["tweaksforgeeks.com",130],["m.inven.co.kr",130],["mlbpark.donga.com",130],["meconomynews.com",130],["brandbrief.co.kr",130],["motorgraph.com",130],["worldhistory.org",131],["lovelive-petitsoku.com",132],["pravda.com.ua",132],["cinema.com.my",133],["dolldivine.com",133],["jutarnji.hr",133],["slobodnadalmacija.hr",133],["persoenlich.com",134],["syosetu.com",134],["autoby.jp",135],["powerpyx.com",135],["webdesignledger.com",135],["wetteronline.de",135],["bitcotasks.com",136],["hilites.today",137],["udvl.com",138],["www.chip.de",[139,140,224]],["topsporter.net",141],["sportshub.to",141],["streamcheck.link",142],["myanimelist.net",143],["bitcosite.com",144],["bitzite.com",144],["celebzcircle.com",145],["bi-girl.net",145],["hentaiseason.com",145],["hoodtrendspredict.com",145],["osteusfilmestuga.online",145],["ragnarokscanlation.opchapters.com",145],["tvappapk.com",145],["twobluescans.com",[145,146]],["varnascan.xyz",145],["hacoos.com",148],["watchhentai.net",149],["hes-goals.io",149],["pkbiosfix.com",149],["casi3.xyz",149],["bondagevalley.cc",150],["zefoy.com",151],["vidello.net",152],["resizer.myct.jp",153],["gametohkenranbu.sakuraweb.com",154],["jisakuhibi.jp",155],["rank1-media.com",155],["lifematome.blog",156],["fm.sekkaku.net",157],["free-avx.jp",158],["dvdrev.com",159],["betweenjpandkr.blog",160],["nft-media.net",161],["ghacks.net",162],["leak.sx",163],["paste.bin.sx",163],["pornleaks.in",163],["songspk2.info",164],["nectareousoverelate.com",166],["khoaiphim.com",167],["haafedk2.com",168],["fordownloader.com",168],["jovemnerd.com.br",169],["totalcsgo.com",170],["vivamax.asia",171],["manysex.com",172],["gaminginfos.com",173],["tinxahoivn.com",174],["automoto.it",175],["codelivly.com",176],["lordchannel.com",177],["client.falixnodes.net",178],["novelhall.com",179],["abc17news.com",180],["bailiwickexpress.com",180],["barnsleychronicle.com",180],["chaptercheats.com",180],["commercialobserver.com",180],["competentedigitale.ro",180],["freeconvert.com",180],["hotcars.com",180],["howtogeek.com",180],["imgur.com",180],["insider-gaming.com",180],["insurancejournal.com",180],["jasminemaria.com",180],["kion546.com",180],["lehighvalleylive.com",180],["lettyskitchen.com",180],["lifeinleggings.com",180],["liveandletsfly.com",180],["lizzieinlace.com",180],["localnews8.com",180],["lonestarlive.com",180],["madeeveryday.com",180],["maidenhead-advertiser.co.uk",180],["makeuseof.com",180],["mardomreport.net",180],["melangery.com",180],["milestomemories.com",180],["modernmom.com",180],["momtastic.com",180],["mostlymorgan.com",180],["motherwellmag.com",180],["movieweb.com",180],["muddybootsanddiamonds.com",180],["musicfeeds.com.au",180],["mylifefromhome.com",180],["nationalreview.com",180],["neoskosmos.com",180],["nordot.app",180],["nothingbutnewcastle.com",180],["nsjonline.com",180],["oakvillenews.org",180],["observer.com",180],["ourlittlesliceofheaven.com",180],["palachinkablog.com",180],["patheos.com",180],["pinkonthecheek.com",180],["politicususa.com",180],["predic.ro",180],["puckermom.com",180],["qtoptens.com",180],["realgm.com",180],["reelmama.com",180],["robbreport.com",180],["royalmailchat.co.uk",180],["samchui.com",180],["sandrarose.com",180],["screenrant.com",180],["sherdog.com",180],["sidereel.com",180],["silive.com",180],["simpleflying.com",180],["sloughexpress.co.uk",180],["spacenews.com",180],["sportsgamblingpodcast.com",180],["spotofteadesigns.com",180],["stacysrandomthoughts.com",180],["ssnewstelegram.com",180],["superherohype.com",180],["tablelifeblog.com",180],["thebeautysection.com",180],["thecelticblog.com",180],["thecurvyfashionista.com",180],["thefashionspot.com",180],["thegamer.com",180],["thegamescabin.com",180],["thenerdyme.com",180],["thenonconsumeradvocate.com",180],["theprudentgarden.com",180],["thethings.com",180],["timesnews.net",180],["topspeed.com",180],["toyotaklub.org.pl",180],["travelingformiles.com",180],["tutsnode.org",180],["viralviralvideos.com",180],["wannacomewith.com",180],["wimp.com",[180,182]],["windsorexpress.co.uk",180],["woojr.com",180],["worldoftravelswithkids.com",180],["worldsurfleague.com",180],["xda-developers.com",180],["adoredbyalex.com",180],["agrodigital.com",[180,182]],["al.com",[180,182]],["aliontherunblog.com",[180,182]],["allaboutthetea.com",[180,182]],["allmovie.com",[180,182]],["allmusic.com",[180,182]],["allthingsthrifty.com",[180,182]],["amessagewithabottle.com",[180,182]],["androidpolice.com",180],["antyradio.pl",180],["artforum.com",[180,182]],["artnews.com",[180,182]],["awkward.com",[180,182]],["awkwardmom.com",[180,182]],["becomingpeculiar.com",180],["bethcakes.com",[180,182]],["blogher.com",[180,182]],["bluegraygal.com",[180,182]],["briefeguru.de",[180,182]],["carmagazine.co.uk",180],["cattime.com",180],["cbr.com",180],["cleveland.com",[180,182]],["collider.com",180],["comingsoon.net",180],["crafty.house",180],["dailyvoice.com",[180,182]],["decider.com",[180,182]],["didyouknowfacts.com",[180,182]],["dogtime.com",[180,182]],["dualshockers.com",180],["dustyoldthing.com",180],["faithhub.net",180],["femestella.com",[180,182]],["footwearnews.com",[180,182]],["frogsandsnailsandpuppydogtail.com",[180,182]],["fsm-media.com",180],["funtasticlife.com",[180,182]],["fwmadebycarli.com",[180,182]],["gamerant.com",180],["gfinityesports.com",180],["givemesport.com",180],["gulflive.com",[180,182]],["helloflo.com",180],["homeglowdesign.com",[180,182]],["honeygirlsworld.com",[180,182]],["masslive.com",[180,182,225]],["mlive.com",[180,182]],["nj.com",[180,182]],["oregonlive.com",[180,182]],["pagesix.com",[180,182,225]],["pennlive.com",[180,182,225]],["sheknows.com",[180,182]],["syracuse.com",[180,182,225]],["tvline.com",[180,182]],["cheatsheet.com",181],["pwinsider.com",181],["baeldung.com",181],["mensjournal.com",181],["15min.lt",182],["247sports.com",[182,225]],["betweenenglandandiowa.com",182],["bgr.com",182],["blu-ray.com",182],["brobible.com",182],["cbsnews.com",[182,225]],["cbssports.com",[182,225]],["celiacandthebeast.com",182],["dailykos.com",182],["eater.com",182],["eldiariony.com",182],["free-power-point-templates.com",182],["golfdigest.com",182],["ibtimes.co.in",182],["inc.com",182],["indiewire.com",[182,225]],["inquisitr.com",182],["intouchweekly.com",182],["kcrg.com",182],["kentucky.com",182],["knowyourmeme.com",182],["last.fm",182],["lifeandstylemag.com",182],["mandatory.com",182],["nbcsports.com",182],["news.com.au",182],["nypost.com",[182,225]],["rollingstone.com",182],["sbnation.com",182],["sneakernews.com",182],["sport-fm.gr",182],["stylecaster.com",182],["tastingtable.com",182],["thecw.com",182],["thedailymeal.com",182],["theflowspace.com",182],["themarysue.com",182],["usmagazine.com",182],["wallup.net",182],["yourcountdown.to",182],["bagi.co.in",183],["keran.co",183],["biblestudytools.com",184],["christianheadlines.com",184],["ibelieve.com",184],["kuponigo.com",185],["kimcilonly.site",186],["kimcilonly.link",186],["cryptoearns.com",187],["inxxx.com",188],["ipaspot.app",189],["embedwish.com",190],["filelions.live",190],["leakslove.net",190],["jenismac.com",191],["vxetable.cn",192],["jewelavid.com",193],["nizarstream.com",193],["snapwordz.com",194],["toolxox.com",194],["rl6mans.com",194],["idol69.net",194],["plumbersforums.net",195],["123movies57.online",196],["gulio.site",197],["izlekolik.net",198],["donghuaworld.com",199],["letsdopuzzles.com",200],["rediff.com",201],["dzapk.com",202],["darknessporn.com",203],["familyporner.com",203],["freepublicporn.com",203],["pisshamster.com",203],["punishworld.com",203],["xanimu.com",203],["tainio-mania.online",204],["javhdo.net",205],["eroticmoviesonline.me",206],["teleclub.xyz",207],["ecamrips.com",208],["showcamrips.com",208],["tucinehd.com",209],["9animetv.to",210],["qiwi.gg",211],["jornadaperfecta.com",212],["loseart.com",213],["sousou-no-frieren.com",214],["unite-guide.com",215],["thebullspen.com",216],["botcomics.com",217],["cefirates.com",217],["chandlerorchards.com",217],["comicleaks.com",217],["marketdata.app",217],["monumentmetals.com",217],["tapmyback.com",217],["ping.gg",217],["revistaferramental.com.br",217],["hawpar.com",217],["alpacafinance.org",[217,218]],["nookgaming.com",217],["enkeleksamen.no",217],["kvest.ee",217],["creatordrop.com",217],["panpots.com",217],["cybernetman.com",217],["bitdomain.biz",217],["gerardbosch.xyz",217],["fort-shop.kiev.ua",217],["accuretawealth.com",217],["resourceya.com",217],["tracktheta.com",217],["camberlion.com",217],["replai.io",217],["trybawaryjny.pl",217],["segops.madisonspecs.com",217],["tt.live",218],["future-fortune.com",218],["adventuretix.com",218],["bolighub.dk",218],["panprices.com",219],["intercity.technology",219],["freelancer.taxmachine.be",219],["adria.gg",219],["fjlaboratories.com",219],["emanualonline.com",219],["abhijith.page",219],["helpmonks.com",219],["dataunlocker.com",220],["proboards.com",221],["winclassic.net",221],["pandadoc.com",223],["abema.tv",226]]);

const entitiesMap = new Map([["vidsrc",[3,13,60]],["flix-wave",3],["mixdrop",[3,14]],["sanet",3],["sportshd",3],["wawacity",3],["720pstream",[3,60]],["userupload",5],["pahe",[6,14]],["soap2day",6],["mhdsports",8],["mhdsportstv",8],["mhdtvsports",8],["mhdtvworld",8],["mhdtvmax",8],["mhdstream",8],["reset-scans",8],["poplinks",[8,98]],["hqq",9],["waaw",9],["pixhost",11],["viprow",[13,14,60]],["bluemediadownload",13],["bluemediafile",13],["bluemedialink",13],["bluemediastorage",13],["bluemediaurls",13],["urlbluemedia",13],["cloudvideotv",[13,60]],["123-movies",14],["123movieshd",14],["123movieshub",14],["123moviesme",14],["1337x",[14,32]],["1stream",14],["1tamilmv",14],["2ddl",14],["2umovies",14],["3hiidude",14],["4stream",14],["5movies",14],["7hitmovies",14],["9xmovie",14],["9xlinks",14],["aagmaal",[14,60]],["adblockeronstape",[14,109]],["adblockeronstreamtape",14],["adblockplustape",[14,109]],["adblockstreamtape",[14,109]],["adblockstrtape",[14,109]],["adblockstrtech",[14,109]],["adblocktape",[14,109]],["adcorto",14],["alexsports",14],["alexsportss",14],["alexsportz",14],["animepahe",14],["animesanka",14],["animixplay",14],["aniplay",14],["antiadtape",[14,109]],["asianclub",14],["ask4movie",14],["atomixhq",[14,60]],["atomohd",14],["beinmatch",[14,22]],["bhaai",14],["blurayufr",14],["buffstreams",14],["canalesportivo",14],["clickndownload",14],["clicknupload",14],["daddylive",[14,60]],["daddylivehd",[14,60]],["ddrmovies",14],["desiremovies",14],["devlib",14],["divxtotal",14],["divxtotal1",14],["dlhd",14],["dvdplay",[14,60]],["elixx",14],["enjoy4k",14],["estrenosflix",14],["estrenosflux",14],["estrenosgo",14],["f1stream",14],["fbstream",14],["file4go",14],["filmymeet",14],["filmyzilla",[14,60]],["findav",14],["findporn",14],["flixmaza",14],["flizmovies",14],["freetvsports",14],["fullymaza",14],["g3g",14],["gotxx",14],["grantorrent",14],["hdmoviesfair",[14,60]],["hdmoviesflix",14],["hiidudemoviez",14],["imgsen",14],["imgsto",14],["incest",14],["incestflix",14],["itopmusic",14],["javmost",14],["keeplinks",14],["keepvid",14],["keralahd",14],["khatrimazaful",14],["khatrimazafull",14],["leechall",14],["linkshorts",14],["mangovideo",14],["masaporn",14],["miniurl",14],["mirrorace",14],["mixdroop",14],["mkvcage",14],["mlbstream",14],["mlsbd",14],["mmsbee",14],["motogpstream",14],["movieplex",14],["movierulzlink",14],["movies123",14],["moviesflix",14],["moviesmeta",14],["moviessources",14],["moviesverse",14],["moviezwaphd",14],["mrunblock",14],["nbastream",14],["newmovierulz",14],["nflstream",14],["nhlstream",14],["noblocktape",[14,109]],["nocensor",14],["onlyfams",14],["ouo",14],["pctfenix",[14,60]],["pctnew",[14,60]],["peliculas24",14],["pelisplus",14],["piratebay",14],["plyjam",14],["plylive",14],["plyvdo",14],["pornhoarder",14],["prbay",14],["projectfreetv",14],["proxybit",14],["psarips",14],["racaty",14],["remaxhd",14],["rintor",14],["rnbxclusive",14],["rnbxclusive0",14],["rnbxclusive1",14],["rojadirecta",14],["rojadirectaenvivo",14],["rugbystreams",14],["sadisflix",14],["safetxt",14],["shadowrangers",14],["shahi4u",14],["shahid4u1",14],["shahid4uu",14],["shavetape",14],["shortearn",14],["shorten",14],["shorttey",14],["shortzzy",14],["skymovieshd",14],["socceronline",[14,60]],["softarchive",14],["sports-stream",14],["sporttuna",14],["sshhaa",14],["stapadblockuser",[14,109]],["stape",[14,109]],["stapewithadblock",14],["starmusiq",14],["strcloud",[14,109]],["streamadblocker",[14,60,109]],["streamadblockplus",[14,109]],["streamcdn",14],["streamhub",14],["streamsport",14],["streamta",[14,109]],["streamtape",[14,109]],["streamtapeadblockuser",[14,109]],["strikeout",14],["strtape",[14,109]],["strtapeadblock",[14,109]],["strtapeadblocker",[14,109]],["strtapewithadblock",14],["strtpe",[14,109]],["swatchseries",14],["tabooflix",14],["tennisstreams",14],["themoviesflix",14],["thepiratebay",14],["thisav",14],["tmearn",14],["toonanime",14],["torlock",14],["tormalayalam",14],["torrentz2eu",14],["tutelehd",14],["tvply",14],["u4m",14],["ufcstream",14],["unblocknow",14],["uploadbuzz",14],["usagoals",14],["vexmoviex",14],["vidclouds",14],["vidlox",14],["vipbox",[14,60]],["vipboxtv",[14,60]],["vipleague",14],["watch-series",14],["watchseries",14],["xclusivejams",14],["xmoviesforyou",14],["youdbox",14],["ytmp3eu",14],["yts-subs",14],["yts",14],["zooqle",14],["dutchycorp",15],["torrentdownload",33],["mkvcinemas",[33,60]],["dood",[36,60]],["doodstream",36],["dooood",[36,60]],["nekopoi",40],["livecamrips",43],["shrinke",43],["shrinkme",43],["daddylive1",53],["esportivos",53],["poscitechs",53],["bollyflix",53],["watchomovies",[54,60]],["123movies",60],["123moviesla",60],["123movieweb",60],["2embed",60],["9xmovies",60],["adshort",60],["allmovieshub",60],["asianplay",60],["atishmkv",60],["bflix",60],["cricstream",60],["crictime",60],["databasegdriveplayer",60],["extramovies",60],["faselhd",60],["faselhds",60],["filemoon",60],["filmy",60],["filmyhit",60],["filmywap",60],["fmovies",60],["gdplayer",60],["goku",60],["gomovies",60],["gowatchseries",60],["hdfungamezz",60],["hindilinks4u",60],["hurawatch",60],["jalshamoviezhd",60],["livecricket",60],["mhdsport",60],["movies2watch",60],["moviespapa",60],["mp4moviez",60],["mydownloadtube",60],["nuroflix",60],["o2tvseries",60],["o2tvseriesz",60],["pirlotv",60],["poscitech",60],["primewire",60],["redecanais",60],["serienstream",60],["sflix",60],["shahed4u",60],["shaheed4u",60],["speedostream",60],["sportcast",60],["sportskart",60],["streamingcommunity",[60,115,125]],["tamilarasan",60],["tamilfreemp3songs",60],["tamilprinthd",60],["torrentdosfilmes",60],["tubemate",60],["uploadrar",60],["uqload",60],["vidcloud9",60],["vido",60],["vidoo",60],["vudeo",60],["vumoo",60],["yesmovies",60],["mydverse",71],["actvid",75],["stfly",106],["stly",106],["dropgalaxy",108],["kickassanime",114],["11xmovies",115],["fzmovies",115],["prmovies",115],["streamblasters",115],["kickass",116],["cine-calidad",123],["woxikon",129],["ftuapps",145],["showflix",145],["teluguflix",147]]);

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
