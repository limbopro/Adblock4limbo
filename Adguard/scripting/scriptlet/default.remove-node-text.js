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

const argsList = [["script","DisplayAcceptableAdIfAdblocked"],["script","/==undefined.*body/"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","Reflect"],["script","document.write"],["script","deblocker"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","exdynsrv"],["script","/adb/i"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|ad block|alert/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","popUnderUrl"],["script","Adblock"],["script","alert"],["script","document.createTextNode"],["script","/h=decodeURIComponent|popundersPerIP|adserverDomain/"],["script","/shown_at|WebAssembly/"],["script","style"],["script","shown_at"],["script","adsSrc"],["script","ai_adb"],["script","/adblock|popunder|openedPop|WebAssembly/"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["script","window.warn"],["script","adBlock"],["script","wpadmngr.com"],["script","/fetch|adb/i"],["script","window.open"],["script","adblockimg"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","googlesyndication"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/pop1stp|detectAdBlock/"],["script","popundersPerIP"],["script","popunder"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","catch"],["script","displayAdsV3"],["script",";}}};break;case $."],["script","adblocker"],["script","break;case"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adserverDomain|\\);break;case /"],["script","initializeInterstitial"],["script","/adbl/i"],["script","popupBackground"],["script","mdpDeblocker"],["script","Math.floor"],["script","m9-ad-modal"],["script","detectAdBlock"],["script","antiAdBlockerHandler"],["script","Anzeige"],["script","blocking"],["script","adBlockNotice"],["script","HTMLAllCollection"],["script","advads"],["script","document.cookie"],["script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"],["script","/_0x|brave|onerror/"],["script","adb"],["script","kmtAdsData"],["script","wpadmngr"],["script","insertAdjacentHTML"],["script","navigator.userAgent"],["script","adbl"],["script","pre_roll_url"],["script","WebAssembly"],["script","/ABDetected|navigator.brave|fetch/"],["script","/bypass.php"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script",";break;case $."],["script","adb_detected"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","/event\\.keyCode|DisableDevtool/"],["script","/WebAssembly|forceunder/"],["script","/adblock|var Data.*];/"],["script","replace"],["script","globalThis;break;case"],["script","{delete window["],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","charCodeAt"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","blockAdBlock"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","error-report.com"],["script","KCgpPT57bGV0IGU"],["script","adShield"],["script","Ad-Shield"],["script","adrecover.com"],["script","html-load.com"],["script","AdblockRegixFinder"],["script","/adScript|adsBlocked/"],["script","serve"],["script","/\\+\\+\\) \\{  \\} \\}/"],["script","?metric=transit.counter&key=fail_redirect&tags="],["script","/ConsoleBan|alert|AdBlocker/"],["script","runPop"],["style","body:not(.ownlist)"],["script","alert","condition","adblock"],["script","decodeURIComponent(escape"],["script","/ai_|googletag|adb/"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","zfgloaded"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","app_checkext"],["script","clientHeight"],["script","await"],["script","pop.target"],["script","!window.adngin"],["script","axios"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","\"\").split(\",\")[4]"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","AdBlock"],["script","Symbol.iterator"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","AaDetector"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","/document\\.head\\.appendChild|window\\.open/"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","detect"],["script","fetch"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","adBlockEnabled"],["script","\"data-adm-url\""],["script","NREUM"]];

const hostnamesMap = new Map([["alpin.de",0],["boersennews.de",0],["chefkoch.de",0],["chip.de",0],["clever-tanken.de",0],["desired.de",0],["donnerwetter.de",0],["fanfiktion.de",0],["focus.de",0],["formel1.de",0],["frustfrei-lernen.de",0],["gewinnspiele.tv",0],["giga.de",0],["gut-erklaert.de",0],["kino.de",0],["messen.de",0],["nickles.de",0],["nordbayern.de",0],["spielfilm.de",0],["teltarif.de",0],["unsere-helden.com",0],["weltfussball.at",0],["watson.de",0],["moviepilot.de",[0,4]],["mactechnews.de",0],["sport1.de",0],["welt.de",0],["aupetitparieur.com",1],["allthingsvegas.com",1],["100percentfedup.com",1],["beforeitsnews.com",1],["concomber.com",1],["conservativebrief.com",1],["conservativefiringline.com",1],["dailylol.com",1],["funnyand.com",1],["letocard.fr",1],["mamieastuce.com",1],["meilleurpronostic.fr",1],["patriotnationpress.com",1],["toptenz.net",1],["vitamiiin.com",1],["writerscafe.org",1],["populist.press",1],["dailytruthreport.com",1],["livinggospeldaily.com",1],["first-names-meanings.com",1],["welovetrump.com",1],["thehayride.com",1],["thelibertydaily.com",1],["thepoke.co.uk",1],["thepolitistick.com",1],["theblacksphere.net",1],["shark-tank.com",1],["naturalblaze.com",1],["greatamericanrepublic.com",1],["dailysurge.com",1],["truthlion.com",1],["flagandcross.com",1],["westword.com",1],["republicbrief.com",1],["freedomfirstnetwork.com",1],["phoenixnewtimes.com",1],["designbump.com",1],["clashdaily.com",1],["madworldnews.com",1],["reviveusa.com",1],["sonsoflibertymedia.com",1],["thedesigninspiration.com",1],["videogamesblogger.com",1],["protrumpnews.com",1],["thepalmierireport.com",1],["kresy.pl",1],["thepatriotjournal.com",1],["gellerreport.com",1],["thegatewaypundit.com",1],["wltreport.com",1],["miaminewtimes.com",1],["politicalsignal.com",1],["rightwingnews.com",1],["bigleaguepolitics.com",1],["comicallyincorrect.com",1],["web.de",2],["skidrowreloaded.com",[3,14]],["1stream.eu",3],["4kwebplay.xyz",3],["antennasports.ru",3],["buffsports.me",[3,57]],["buffstreams.app",3],["claplivehdplay.ru",[3,64]],["cracksports.me",[3,13]],["euro2024direct.ru",3],["ext.to",3],["eztv.tf",3],["eztvx.to",3],["kenitv.me",[3,13,14]],["lewblivehdplay.ru",[3,64]],["mlbbite.net",3],["mlbstreams.ai",3],["qatarstreams.me",[3,13]],["qqwebplay.xyz",[3,64]],["rnbastreams.com",3],["soccerworldcup.me",[3,13]],["topstreams.info",3],["totalsportek.to",3],["viwlivehdplay.ru",3],["vidco.pro",[3,57]],["embedsports.me",[3,111]],["embedstream.me",[3,13,14,57,111]],["jumbtv.com",[3,111]],["reliabletv.me",[3,111]],["topembed.pw",[3,64,109]],["crackstreamer.net",3],["methstreamer.com",3],["yts.mx",6],["magesypro.com",7],["pinsystem.co.uk",7],["elrellano.com",7],["tinyppt.com",7],["bharathwick.com",7],["descargaspcpro.net",7],["dx-tv.com",7],["rt3dmodels.com",7],["plc4me.com",7],["blisseyhusbands.com",7],["madaradex.org",7],["trigonevo.com",7],["franceprefecture.fr",7],["jazbaat.in",7],["aipebel.com",7],["audiotools.blog",7],["veganab.co",7],["camdigest.com",7],["learnmany.in",7],["amanguides.com",[7,91]],["highkeyfinance.com",[7,91]],["appkamods.com",7],["techacode.com",7],["djqunjab.in",7],["downfile.site",7],["expertvn.com",7],["trangchu.news",7],["3dmodelshare.org",7],["nulleb.com",7],["asiaon.top",7],["coursesghar.com",7],["thecustomrom.com",7],["snlookup.com",7],["bingotingo.com",7],["ghior.com",7],["3dmili.com",7],["karanpc.com",7],["plc247.com",7],["apkdelisi.net",7],["javindo.eu.org",7],["chindohot.site",7],["freepasses.org",7],["tomarnarede.pt",7],["basketballbuzz.ca",7],["dribbblegraphics.com",7],["kemiox.com",7],["checkersmenu.us",7],["teksnologi.com",7],["upornia.com",9],["eporner.com",11],["javtiful.com",[11,14]],["germancarforum.com",12],["innateblogger.com",12],["cybercityhelp.in",12],["mlbbox.me",13],["streamnoads.com",[13,14,57,105]],["bowfile.com",13],["cloudvideo.tv",[13,57]],["coloredmanga.com",13],["exeo.app",13],["hiphopa.net",[13,14]],["megaup.net",13],["olympicstreams.co",[13,57]],["tv247.us",[13,14]],["uploadhaven.com",13],["userscloud.com",[13,57]],["mdfx9dc8n.net",14],["mdzsmutpcvykb.net",14],["mixdrop21.net",14],["mixdropjmk.pw",14],["1337x.ninjaproxy1.com",14],["y2tube.pro",14],["fastreams.com",14],["redittsports.com",14],["sky-sports.store",14],["streamsoccer.site",14],["tntsports.store",14],["wowstreams.co",14],["zdsptv.com",14],["141jav.com",14],["1bit.space",14],["1bitspace.com",14],["3dporndude.com",14],["4archive.org",14],["4horlover.com",14],["560pmovie.com",14],["60fps.xyz",14],["85tube.com",14],["85videos.com",14],["aazzz.xyz",14],["acefile.co",14],["actusports.eu",14],["adclickersbot.com",14],["adricami.com",14],["adslink.pw",14],["adultstvlive.com",14],["adz7short.space",14],["aeblender.com",14],["ahdafnews.blogspot.com",14],["ak47sports.com",14],["akuma.moe",14],["allplayer.tk",14],["allstreaming.online",14],["amadoras.cf",14],["amadorasdanet.shop",14],["amateurblog.tv",14],["androidadult.com",14],["anhsexjav.xyz",14],["anidl.org",14],["anime-loads.org",14],["animeblkom.net",14],["animefire.plus",14],["animelek.me",14],["animespire.net",14],["animestotais.xyz",14],["animeyt.es",14],["anroll.net",14],["anymoviess.xyz",14],["aotonline.org",14],["asenshu.com",14],["asialiveaction.com",14],["asianclipdedhd.net",14],["askim-bg.com",14],["asumsikedaishop.com",14],["avcrempie.com",14],["avseesee.com",14],["gettapeads.com",[14,105]],["backfirstwo.com",14],["bajarjuegospcgratis.com",14],["balkanportal.net",14],["balkanteka.net",14],["bdnewszh.com",[14,57]],["belowporn.com",14],["bestclaimtrx.xyz",14],["bestgirlsexy.com",14],["bestnhl.com",14],["bestporn4free.com",14],["bestporncomix.com",14],["bet36.es",14],["bikinitryon.net",14],["birdurls.com",14],["bitsearch.to",14],["blackcockadventure.com",14],["blackcockchurch.org",14],["blackporncrazy.com",14],["blizzboygames.net",14],["blizzpaste.com",14],["blkom.com",14],["blog-peliculas.com",14],["blogtrabalhista.com",14],["bobsvagene.club",14],["bolly4umovies.click",14],["bonusharian.pro",14],["brilian-news.id",14],["brupload.net",14],["bucitana.com",14],["cablegratis.online",14],["camchickscaps.com",14],["camgirlcum.com",14],["camgirls.casa",14],["cashurl.in",14],["castingx.net",14],["ccurl.net",[14,57]],["celebrity-leaks.net",14],["cgpelis.net",14],["charexempire.com",14],["choosingnothing.com",14],["clasico.tv",14],["clik.pw",14],["coin-free.com",[14,88]],["coins100s.fun",14],["comicsmanics.com",14],["compucalitv.com",14],["coolcast2.com",14],["cosplaytab.com",14],["countylocalnews.com",14],["cpmlink.net",14],["crackstreamshd.click",14],["crespomods.com",14],["crisanimex.com",14],["crunchyscan.fr",14],["cuevana3.fan",14],["cuevana3hd.com",14],["cumception.com",14],["cutpaid.com",14],["cypherscans.xyz",[14,57]],["dailyuploads.net",14],["datawav.club",14],["daughtertraining.com",14],["deepgoretube.site",14],["deltabit.co",14],["deporte-libre.top",14],["depvailon.com",14],["derleta.com",14],["desivdo.com",14],["desixx.net",14],["detikkebumen.com",14],["deutschepornos.me",14],["diasoft.xyz",14],["directupload.net",14],["diskusscan.com",14],["dixva.com",14],["doctormalay.com",14],["dofusports.xyz",14],["dogemate.com",14],["doods.cam",14],["doodskin.lat",14],["downloadrips.com",14],["downvod.com",14],["dphunters.mom",14],["dragontranslation.com",14],["duddes.xyz",14],["dvdfullestrenos.com",14],["easylinks.in",14],["ebookbb.com",14],["ebookhunter.net",14],["egyanime.com",14],["egygost.com",14],["egyshare.cc",14],["ekasiwap.com",14],["electro-torrent.pl",14],["elil.cc",14],["embed4u.xyz",14],["eplayer.click",14],["erovoice.us",14],["eroxxx.us",14],["estrenosdoramas.net",14],["everia.club",14],["everythinginherenet.blogspot.com",14],["extrafreetv.com",14],["extremotvplay.com",14],["fapinporn.com",14],["fapptime.com",14],["fashionblog.tv",14],["fastreams.live",14],["faucethero.com",14],["fembed.com",14],["femdom-joi.com",14],["fileone.tv",14],["film1k.com",14],["filmeonline2023.net",14],["filmesonlinex.org",14],["filmesonlinexhd.biz",[14,57]],["filmovitica.com",14],["filmymaza.blogspot.com",14],["filthy.family",14],["firstmovies.to",14],["fixfinder.click",14],["flostreams.xyz",14],["flyfaucet.com",14],["footyhunter.lol",14],["footyhunter3.xyz",[14,57]],["forex-golds.com",14],["forex-trnd.com",14],["forumchat.club",14],["forumlovers.club",14],["freemoviesonline.biz",14],["freeomovie.co.in",14],["freeomovie.to",14],["freeporncomic.net",14],["freepornhdonlinegay.com",14],["freeproxy.io",14],["freeuse.me",14],["freeusexporn.com",14],["fsicomics.com",14],["gambarbogel.xyz",14],["gamepcfull.com",14],["gameronix.com",14],["gamesfullx.com",14],["gameshdlive.net",14],["gameshdlive.xyz",14],["gamesmountain.com",14],["gamesrepacks.com",14],["gamingguru.fr",14],["gamovideo.com",14],["garota.cf",14],["gaydelicious.com",14],["gaypornmasters.com",14],["gaysex69.net",14],["gemstreams.com",14],["get-to.link",14],["girlscanner.org",14],["giurgiuveanul.ro",14],["gledajcrtace.xyz",14],["gocast2.com",14],["gomo.to",14],["gostosa.cf",14],["gtlink.co",14],["gwiazdypornosow.pl",14],["haho.moe",14],["hatsukimanga.com",14],["hayhd.net",14],["hdsaprevodom.com",14],["hdstreamss.club",14],["hentais.tube",14],["hentaistream.co",14],["hentaitk.net",14],["hentaitube.online",14],["hentaiworld.tv",14],["hesgoal.tv",14],["hexupload.net",14],["hhkungfu.tv",14],["highlanderhelp.com",14],["hindimean.com",14],["hindimovies.to",[14,57]],["hiperdex.com",14],["hispasexy.org",14],["hitprn.com",14],["hoca4u.com",14],["hollymoviehd.cc",14],["hoodsite.com",14],["hopepaste.download",14],["hornylips.com",14],["hotgranny.live",14],["hotmama.live",14],["hqcelebcorner.net",14],["huren.best",14],["hwnaturkya.com",[14,57]],["hxfile.co",[14,57]],["igfap.com",14],["ihdstreams.xyz",14],["iklandb.com",14],["illink.net",14],["imgkings.com",14],["imgsex.xyz",14],["imx.to",14],["influencersgonewild.org",14],["infosgj.free.fr",14],["investnewsbrazil.com",14],["itdmusics.com",14],["itsuseful.site",14],["itunesfre.com",14],["iwatchfriendsonline.net",[14,157]],["jackstreams.com",14],["jatimupdate24.com",14],["jav-fun.cc",14],["jav-noni.cc",14],["jav-scvp.com",14],["javcl.com",14],["javf.net",14],["javhay.net",14],["javhoho.com",14],["javhun.com",14],["javleak.com",14],["javporn.best",14],["javsek.net",14],["javsex.to",14],["jimdofree.com",14],["jiofiles.org",14],["jorpetz.com",14],["journalyc.online",14],["jp-films.com",14],["jpop80ss3.blogspot.com",14],["jpopsingles.eu",[14,33]],["kantotflix.net",14],["kantotinyo.com",14],["kaoskrew.org",14],["kaplog.com",14],["keralatvbox.com",14],["kickassanimes.io",14],["kimochi.info",14],["kimochi.tv",14],["kinemania.tv",14],["konstantinova.net",14],["koora-online.live",14],["kunmanga.com",14],["kutmoney.com",14],["kwithsub.com",14],["ladangreceh.xyz",14],["lat69.me",14],["latinblog.tv",14],["latinomegahd.net",14],["lazyfaucet.com",14],["leechpremium.link",14],["legendas.dev",14],["legendei.net",14],["lightdlmovies.blogspot.com",14],["lighterlegend.com",14],["linclik.com",14],["linkebr.com",14],["linkrex.net",14],["links.worldfree4u-lol.online",14],["linksfy.co",14],["lody.ink",14],["lovesomecommunity.com",14],["lulu.st",14],["lulustream.com",[14,57,109]],["luluvdo.com",[14,57]],["luzcameraeacao.shop",14],["manga-oni.com",14],["mangaboat.com",14],["mangagenki.me",14],["mangahere.onl",14],["mangaweb.xyz",14],["mangoporn.net",14],["manhwahentai.me",14],["masahub.com",14],["masahub.net",14],["maturegrannyfuck.com",14],["mdy48tn97.com",14],["mediapemersatubangsa.com",14],["mega-mkv.com",14],["megapastes.com",14],["megapornpics.com",14],["messitv.net",14],["meusanimes.net",14],["milfmoza.com",14],["milfzr.com",14],["millionscast.com",14],["mimaletamusical.blogspot.com",14],["mitly.us",14],["mkv-pastes.com",14],["modb.xyz",14],["monaskuliner.ac.id",14],["moredesi.com",14],["movgotv.net",14],["movi.pk",14],["movierr.online",14],["movieswbb.com",14],["moviewatch.com.pk",14],["mp4upload.com",14],["mrskin.live",14],["multicanaistv.com",14],["mundowuxia.com",14],["myeasymusic.ir",14],["myonvideo.com",14],["myyouporn.com",14],["narutoget.info",14],["naughtypiss.com",14],["nerdiess.com",14],["new-fs.eu",14],["newtorrentgame.com",14],["nflstreams.me",14],["niaomea.me",[14,57]],["nicekkk.com",14],["nicesss.com",14],["nlegs.com",14],["nolive.me",[14,57]],["notformembersonly.com",14],["novamovie.net",14],["novelpdf.xyz",14],["novelssites.com",[14,57]],["novelup.top",14],["nsfwr34.com",14],["nu6i-bg-net.com",14],["nudebabesin3d.com",14],["nukedfans.com",14],["nuoga.eu",14],["nzbstars.com",14],["ohjav.com",14],["ojearnovelas.com",14],["okanime.xyz",14],["olarixas.xyz",14],["oldbox.cloud",14],["olweb.tv",14],["olympicstreams.me",14],["on9.stream",14],["oncast.xyz",14],["onepiece-mangaonline.com",14],["onifile.com",14],["onionstream.live",14],["onlinesaprevodom.net",14],["onlyfullporn.video",14],["onplustv.live",14],["originporn.com",14],["ovagames.com",14],["ovamusic.com",14],["owllink.net",14],["packsporn.com",14],["pahaplayers.click",14],["palimas.org",14],["pandafiles.com",14],["papahd.club",14],["papahd1.xyz",14],["password69.com",14],["pastemytxt.com",14],["payskip.org",14],["peeplink.in",14],["peliculasmx.net",14],["pervertgirlsvideos.com",14],["pervyvideos.com",14],["phim12h.com",14],["picdollar.com",14],["pickteenz.com",14],["pics4you.net",14],["picsxxxporn.com",14],["pinayscandalz.com",14],["pinkueiga.net",14],["piratefast.xyz",14],["piratehaven.xyz",14],["pirateiro.com",14],["pirlotvonline.org",14],["playtube.co.za",14],["plugintorrent.com",14],["pmvzone.com",14],["porndish.com",14],["pornez.net",14],["pornfetishbdsm.com",14],["pornfits.com",14],["pornhd720p.com",14],["pornobr.club",14],["pornobr.ninja",14],["pornodominicano.net",14],["pornofaps.com",14],["pornoflux.com",14],["pornotorrent.com.br",14],["pornredit.com",14],["pornstarsyfamosas.es",14],["pornstreams.co",14],["porntn.com",14],["pornxbit.com",14],["pornxday.com",14],["portaldasnovinhas.shop",14],["portugues-fcr.blogspot.com",14],["poscishd.online",14],["poscitesch.com",[14,57]],["poseyoung.com",14],["pover.org",14],["proxyninja.org",14],["pubfilmz.com",14],["publicsexamateurs.com",14],["punanihub.com",14],["putlocker5movies.org",14],["pxxbay.com",14],["r18.best",14],["ragnaru.net",14],["rapbeh.net",14],["rapelust.com",14],["rapload.org",14],["read-onepiece.net",14],["retro-fucking.com",14],["retrotv.org",14],["robaldowns.com",14],["rockdilla.com",14],["rojadirectatvenvivo.com",14],["rojitadirecta.blogspot.com",14],["romancetv.site",14],["rsoccerlink.site",14],["rule34.club",14],["rule34hentai.net",14],["rumahbokep-id.com",14],["safego.cc",14],["safestream.cc",14],["sakurafile.com",14],["satoshi-win.xyz",14],["scat.gold",14],["scatfap.com",14],["scatkings.com",14],["scnlog.me",14],["scripts-webmasters.net",14],["serie-turche.com",14],["serijefilmovi.com",14],["sexcomics.me",14],["sexdicted.com",14],["sexgay18.com",14],["sexofilm.co",14],["sextgem.com",14],["sextubebbw.com",14],["sgpics.net",14],["shadowrangers.live",14],["shahee4u.cam",14],["shahiid-anime.net",14],["shemale6.com",14],["shinden.pl",14],["short.es",14],["showmanga.blog.fc2.com",14],["shrt10.com",14],["shurt.pw",14],["sideplusleaks.net",14],["silverblog.tv",14],["silverpic.com",14],["sinhalasub.life",14],["sinsitio.site",14],["sinvida.me",14],["skidrowcpy.com",14],["skidrowfull.com",14],["slut.mom",14],["smallencode.me",14],["smoner.com",14],["smplace.com",14],["soccerinhd.com",[14,57]],["socceron.name",14],["softairbay.com",14],["sokobj.com",14],["songsio.com",14],["souexatasmais.com",14],["sportbar.live",14],["sportea.online",14],["sportskart.xyz",14],["sportstream1.cfd",14],["srt.am",14],["srts.me",14],["stakes100.xyz",14],["stbemuiptv.com",14],["stockingfetishvideo.com",14],["stream.crichd.vip",14],["stream.lc",14],["stream25.xyz",14],["streambee.to",14],["streamcenter.pro",14],["streamers.watch",14],["streamgo.to",14],["streamkiste.tv",14],["streamoporn.xyz",14],["streamoupload.xyz",14],["streamservicehd.click",14],["streamvid.net",[14,23]],["subtitleporn.com",14],["subtitles.cam",14],["suicidepics.com",14],["supertelevisionhd.com",14],["supexfeeds.com",14],["swiftload.io",14],["swzz.xyz",14],["sxnaar.com",14],["tabooporns.com",14],["taboosex.club",14],["tapeantiads.com",[14,105]],["tapeblocker.com",[14,105]],["tapenoads.com",[14,105]],["tapewithadblock.org",[14,105,216]],["teamos.xyz",14],["teen-wave.com",14],["teenporncrazy.com",14],["telegramgroups.xyz",14],["telenovelasweb.com",14],["tensei-shitara-slime-datta-ken.com",14],["tfp.is",14],["tgo-tv.co",[14,57]],["thaihotmodels.com",14],["theblueclit.com",14],["thebussybandit.com",14],["thedaddy.to",[14,61]],["theicongenerator.com",14],["thelastdisaster.vip",14],["thepiratebay0.org",14],["thepiratebay10.info",14],["thesexcloud.com",14],["thothub.today",14],["tightsexteens.com",14],["tojav.net",14],["tokyoblog.tv",14],["tonnestreamz.xyz",14],["top16.net",14],["topvideosgay.com",14],["torrage.info",14],["torrents.vip",14],["torrsexvid.com",14],["tpb-proxy.xyz",14],["trannyteca.com",14],["trendytalker.com",14],["tumanga.net",14],["turbogvideos.com",14],["turbovid.me",14],["turkishseriestv.org",14],["turksub24.net",14],["tutele.sx",14],["tutelehd3.xyz",14],["tvglobe.me",14],["tvpclive.com",14],["tvs-widget.com",14],["tvseries.video",14],["ucptt.com",14],["ufaucet.online",14],["ufcfight.online",14],["uhdgames.xyz",14],["ultrahorny.com",14],["ultraten.net",14],["unblockweb.me",14],["underhentai.net",14],["uniqueten.net",14],["upbaam.com",14],["upstream.to",14],["valeriabelen.com",14],["verdragonball.online",14],["vfxmed.com",14],["video.az",14],["videostreaming.rocks",14],["videowood.tv",14],["vidorg.net",14],["vidtapes.com",14],["vidz7.com",14],["vikistream.com",14],["vikv.net",14],["virpe.cc",14],["visifilmai.org",14],["viveseries.com",14],["vladrustov.sx",14],["volokit2.com",[14,61]],["vstorrent.org",14],["w-hentai.com",14],["watchaccordingtojimonline.com",14],["watchbrooklynnine-nine.com",14],["watchdowntonabbeyonline.com",14],["watchelementaryonline.com",14],["watcheronline.net",14],["watchgleeonline.com",14],["watchhowimetyourmother.online",14],["watchkobestreams.info",14],["watchlostonline.net",14],["watchlouieonline.com",14],["watchjavidol.com",14],["watchmadmenonline.com",14],["watchmonkonline.com",14],["watchonceuponatimeonline.com",14],["watchparksandrecreation.net",14],["watchprettylittleliarsonline.com",14],["watchrulesofengagementonline.com",14],["watchthekingofqueens.com",14],["watchthemiddleonline.com",14],["watchtvchh.xyz",14],["webcamrips.com",14],["wickedspot.org",14],["wincest.xyz",14],["witanime.best",14],["wolverdon.fun",14],["wolverdonx.com",14],["wordcounter.icu",14],["worldcupstream.pm",14],["worldmovies.store",14],["worldstreams.click",14],["wpdeployit.com",14],["wqstreams.tk",14],["wwwsct.com",14],["xanimeporn.com",14],["xblog.tv",14],["xn--verseriesespaollatino-obc.online",14],["xn--xvideos-espaol-1nb.com",14],["xpornium.net",14],["xsober.com",14],["xvip.lat",14],["xxgasm.com",14],["xxvideoss.org",14],["xxx18.uno",14],["xxxdominicana.com",14],["xxxfree.watch",14],["xxxmax.net",14],["xxxwebdlxxx.top",14],["xxxxvideo.uno",14],["y2b.wiki",14],["yabai.si",14],["yadixv.com",14],["yayanimes.net",14],["yeshd.net",14],["yodbox.com",14],["youjax.com",14],["youpits.xyz",14],["yourdailypornvideos.ws",14],["yourupload.com",14],["ytstv.me",14],["ytstvmovies.co",14],["ytstvmovies.xyz",14],["ytsyify.co",14],["ytsyifymovie.com",14],["zerion.cc",14],["zerocoin.top",14],["zitss.xyz",14],["zpaste.net",14],["zplayer.live",14],["faucet.ovh",15],["oko.sh",[16,98,99]],["variety.com",17],["gameskinny.com",17],["deadline.com",17],["washingtonpost.com",18],["bigbtc.win",19],["cryptofun.space",19],["gosexpod.com",20],["sexo5k.com",21],["truyen-hentai.com",21],["theshedend.com",23],["eracast.cc",23],["zeroupload.com",23],["securenetsystems.net",23],["miniwebtool.com",23],["bchtechnologies.com",23],["spiegel.de",24],["jacquieetmichel.net",25],["hausbau-forum.de",26],["kiemlua.com",26],["appnee.com",27],["apkmirror.com",[28,123]],["streambucket.net",29],["player.smashy.stream",30],["player.smashystream.com",30],["cineb.rs",32],["hiraethtranslation.com",33],["fcportables.com",34],["repack-games.com",34],["pawastreams.info",34],["truyentranhfull.net",34],["d0000d.com",35],["d000d.com",35],["d0o0d.com",35],["do0od.com",35],["doods.pro",35],["ds2play.com",35],["ds2video.com",35],["xfreehd.com",36],["freethesaurus.com",37],["thefreedictionary.com",37],["dexterclearance.com",38],["x-video.tube",39],["streamruby.com",39],["rahim-soft.com",39],["onlyfaucet.com",40],["safetxt.net",41],["smutty.com",41],["e-sushi.fr",41],["freeadultcomix.com",41],["down.dataaps.com",41],["filmweb.pl",41],["visionpapers.org",42],["fdownloader.net",43],["thehackernews.com",44],["mielec.pl",45],["camsrip.com",46],["help.sakarnewz.com",46],["beatsnoop.com",46],["fetchpik.com",46],["hackerranksolution.in",46],["treasl.com",47],["mrbenne.com",48],["cnpics.org",49],["ovabee.com",49],["porn4f.com",49],["cnxx.me",49],["ai18.pics",49],["cuervotv.me",[50,57]],["aliezstream.pro",50],["daddy-stream.xyz",50],["instream.pro",50],["mylivestream.pro",50],["powerover.online",50],["sportea.link",50],["sportsurge.stream",50],["ufckhabib.com",50],["ustream.pro",50],["papa4k.online",50],["animeshqip.site",50],["apkship.shop",50],["buzter.pro",50],["enjoysports.bond",50],["filedot.to",50],["foreverquote.xyz",50],["hdstream.one",50],["kingstreamz.site",50],["live.fastsports.store",50],["livesnow.me",50],["livesports4u.pw",50],["masterpro.click",50],["nuxhallas.click",50],["papahd.info",50],["rgshows.me",50],["sportmargin.live",50],["sportmargin.online",50],["sportsloverz.xyz",50],["sportzlive.shop",50],["supertipzz.online",50],["totalfhdsport.xyz",50],["ultrastreamlinks.xyz",50],["usgate.xyz",50],["webmaal.cfd",50],["wizistreamz.xyz",50],["worldstreamz.shop",50],["nontongo.win",50],["g-porno.com",50],["g-streaming.com",50],["giga-streaming.com",50],["educ4m.com",50],["fromwatch.com",50],["visualnewshub.com",50],["neymartv.net",50],["streamhd247.info",50],["hindimoviestv.com",50],["nowlive1.me",50],["buzter.xyz",50],["gamehdlive.online",50],["hdfungamezz.xyz",50],["kingstreamz.lol",50],["masterpro.club",50],["papahd.co",50],["sportos.co",50],["valhallas.click",50],["andhrafriends.com",51],["freeroms.com",51],["soap2day-online.com",51],["sportsonline.si",52],["fiuxy2.co",53],["animeunity.to",54],["auto-crypto.click",55],["iconicblogger.com",55],["tokopedia.com",56],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",57],["adsh.cc",57],["afilmyhouse.blogspot.com",57],["ak.sv",57],["animesultra.com",57],["api.webs.moe",57],["apkmody.io",57],["attvideo.com",57],["backfirstwo.site",[57,186]],["crazyblog.in",57],["divicast.com",57],["dlhd.so",57],["embed.meomeo.pw",57],["filmeserialeonline.org",57],["flexyhit.com",57],["foreverwallpapers.com",57],["french-streams.cc",57],["fslinks.org",57],["hdtoday.to",57],["hinatasoul.com",57],["igg-games.com",57],["infinityscans.net",57],["infinityscans.xyz",57],["mangareader.to",57],["membed.net",57],["mgnetu.com",57],["mp3juice.info",57],["mp3juices.cc",57],["myflixerz.to",57],["nowmetv.net",57],["nowsportstv.com",57],["nxbrew.com",57],["oii.io",57],["paidshitforfree.com",57],["pepperlive.info",57],["playertv.net",57],["putlocker68.com",57],["roystream.com",57],["rssing.com",57],["s.to",57],["share.filesh.site",57],["sharkfish.xyz",57],["skidrowcodex.net",57],["smartermuver.com",57],["sports-stream.site",57],["stream4free.live",57],["tamilmobilemovies.in",57],["tapeadsenjoyer.com",[57,105]],["thewatchseries.live",57],["tnmusic.in",57],["travelplanspro.com",57],["tusfiles.com",57],["tutlehd4.com",57],["twstalker.com",57],["vid-guard.com",57],["video-leech.xyz",57],["vidsaver.net",57],["vidspeeds.com",57],["viralitytoday.com",57],["voiranime.stream",57],["watchdoctorwhoonline.com",57],["watchserie.online",57],["webhostingpost.com",57],["woxikon.in",57],["www-y2mate.com",57],["ylink.bid",57],["ytix.xyz",57],["remixsearch.net",58],["remixsearch.es",58],["onlineweb.tools",58],["sharing.wtf",58],["2024tv.ru",59],["xnxxcom.xyz",60],["sportsurge.net",61],["joyousplay.xyz",61],["quest4play.xyz",[61,64]],["generalpill.net",61],["moneycontrol.com",62],["hesgoal-tv.io",63],["hesgoal-vip.io",63],["intro-hd.net",63],["monacomatin.mc",63],["nodo313.net",63],["cookiewebplay.xyz",64],["ilovetoplay.xyz",64],["streamcaster.live",64],["weblivehdplay.ru",64],["codec.kyiv.ua",65],["kimcilonlyofc.com",65],["unofficialtwrp.com",65],["oaaxpgp3.xyz",66],["m9.news",67],["sexwebvideo.com",68],["sexwebvideo.net",68],["pig69.com",68],["cosplay18.pics",68],["zeemoontv-24.blogspot.com",69],["stitichsports.com",69],["tinys.click",69],["answerpython.com",69],["formyanime.com",69],["gsm-solution.com",69],["h-donghua.com",69],["hindisubbedacademy.com",69],["linksdramas2.blogspot.com",69],["pkgovjobz.com",69],["ripexbooster.xyz",69],["serial4.com",69],["serial412.blogspot.com",69],["sigmalinks.in",69],["tutorgaming.com",69],["everydaytechvams.com",69],["dipsnp.com",69],["cccam4sat.com",69],["callofwar.com",70],["secondhandsongs.com",71],["nudezzers.org",72],["nohost.one",73],["zoechip.com",73],["3rooodnews.net",74],["xxxbfvideo.net",75],["filmy4wap.co.in",76],["gameshop4u.com",77],["regenzi.site",77],["pcgeeks-games.com",78],["easymc.io",78],["newscon.org",78],["yunjiema.top",78],["handirect.fr",79],["animefenix.tv",80],["tempinbox.xyz",81],["mailgen.biz",81],["fsiblog3.club",82],["kamababa.desi",82],["updatewallah.in",83],["mediaset.es",83],["bestcam.tv",84],["atlasstudiousa.com",85],["tea-coffee.net",86],["spatsify.com",86],["newedutopics.com",86],["getviralreach.in",86],["edukaroo.com",86],["funkeypagali.com",86],["careersides.com",86],["nayisahara.com",86],["wikifilmia.com",86],["infinityskull.com",86],["viewmyknowledge.com",86],["iisfvirtual.in",86],["starxinvestor.com",86],["jkssbalerts.com",86],["kenzo-flowertag.com",87],["mdn.lol",87],["btcbitco.in",88],["btcsatoshi.net",88],["cempakajaya.com",88],["crypto4yu.com",88],["gainl.ink",88],["manofadan.com",88],["readbitcoin.org",88],["wiour.com",88],["kienthucrangmieng.com",88],["tremamnon.com",88],["btc25.org",88],["tron-free.com",88],["bitsmagic.fun",88],["ourcoincash.xyz",88],["hynews.biz",88],["blog.cryptowidgets.net",89],["blog.insurancegold.in",89],["blog.wiki-topia.com",89],["blog.coinsvalue.net",89],["blog.cookinguide.net",89],["blog.freeoseocheck.com",89],["aylink.co",90],["sugarona.com",91],["nishankhatri.xyz",91],["cety.app",92],["exego.app",92],["cutlink.net",92],["cutsy.net",92],["cutyurls.com",92],["cutty.app",92],["cutnet.net",92],["aiimgvlog.fun",93],["appsbull.com",94],["diudemy.com",94],["maqal360.com",94],["mphealth.online",94],["makefreecallsonline.com",94],["androjungle.com",94],["bookszone.in",94],["drakescans.com",94],["shortix.co",94],["msonglyrics.com",94],["app-sorteos.com",94],["bokugents.com",94],["client.pylexnodes.net",94],["btvplus.bg",94],["blog24.me",[95,96]],["coingraph.us",97],["impact24.us",97],["tvi.la",[98,99]],["iir.la",[98,99]],["tii.la",[98,99]],["ckk.ai",[98,99]],["oei.la",[98,99]],["lnbz.la",[98,99]],["oii.la",[98,99]],["tpi.li",[98,99]],["atglinks.com",100],["kbconlinegame.com",101],["hamrojaagir.com",101],["odijob.com",101],["blogesque.net",102],["bookbucketlyst.com",102],["explorosity.net",102],["optimizepics.com",102],["torovalley.net",102],["travize.net",102],["trekcheck.net",102],["metoza.net",102],["techlike.net",102],["snaplessons.net",102],["atravan.net",102],["transoa.net",102],["techmize.net",102],["crenue.net",102],["simana.online",103],["fooak.com",103],["joktop.com",103],["evernia.site",103],["falpus.com",103],["financemonk.net",104],["advertisertape.com",105],["tapeadvertisement.com",105],["tapelovesads.org",105],["watchadsontape.com",105],["cgtips.org",106],["emuenzen.de",107],["buffshub.stream",109],["cinego.tv",109],["fstream365.com",109],["mostream.us",109],["sportshub.stream",109],["topcinema.cam",109],["unblocked.id",112],["listendata.com",113],["7xm.xyz",113],["fastupload.io",113],["azmath.info",113],["wouterplanet.com",114],["androidacy.com",115],["pillowcase.su",116],["veryfreeporn.com",117],["theporngod.com",117],["besthdgayporn.com",118],["drivenime.com",118],["javup.org",118],["shemaleup.net",118],["austiblox.net",120],["btcbunch.com",121],["teachoo.com",122],["automobile-catalog.com",[123,124]],["motorbikecatalog.com",[123,124]],["blog.esuteru.com",123],["blog.livedoor.jp",123],["itainews.com",123],["jin115.com",123],["allthetests.com",123],["javatpoint.com",123],["globalrph.com",123],["carscoops.com",123],["crosswordsolver.com",123],["cruciverba.it",123],["dnevno.hr",123],["ff14net.2chblog.jp",123],["heureka.cz",123],["indiatimes.com",123],["laleggepertutti.it",123],["meeco.kr",123],["mirrored.to",123],["motscroises.fr",123],["news4vip.livedoor.biz",123],["oeffnungszeitenbuch.de",123],["onecall2ch.com",123],["oraridiapertura24.it",123],["palabr.as",123],["petitfute.com",123],["rabitsokuhou.2chblog.jp",123],["rostercon.com",123],["slashdot.org",123],["sourceforge.net",123],["suzusoku.blog.jp",123],["the-crossword-solver.com",123],["thestockmarketwatch.com",123],["wfmz.com",123],["word-grabber.com",123],["wort-suchen.de",123],["yutura.net",123],["zagreb.info",123],["freemcserver.net",123],["golf-live.at",123],["kreuzwortraetsel.de",123],["raetsel-hilfe.de",123],["verkaufsoffener-sonntag.com",123],["horairesdouverture24.fr",123],["nyitvatartas24.hu",123],["modhub.us",123],["yugioh-starlight.com",123],["winfuture.de",123],["talkwithstranger.com",123],["topstarnews.net",123],["islamicfinder.org",123],["secure-signup.net",123],["dramabeans.com",123],["manta.com",123],["tportal.hr",123],["tvtropes.org",123],["wouldurather.io",123],["convertcase.net",123],["interfootball.co.kr",124],["a-ha.io",124],["cboard.net",124],["jjang0u.com",124],["joongdo.co.kr",124],["viva100.com",124],["gamingdeputy.com",124],["thesaurus.net",124],["alle-tests.nl",124],["maketecheasier.com",124],["allthekingz.com",124],["tweaksforgeeks.com",124],["m.inven.co.kr",124],["mlbpark.donga.com",124],["meconomynews.com",124],["brandbrief.co.kr",124],["motorgraph.com",124],["worldhistory.org",125],["lovelive-petitsoku.com",126],["pravda.com.ua",126],["jutarnji.hr",127],["slobodnadalmacija.hr",127],["persoenlich.com",128],["bitcotasks.com",129],["hilites.today",130],["udvl.com",131],["www.chip.de",[132,133]],["topsporter.net",134],["sportshub.to",134],["streamcheck.link",135],["myanimelist.net",136],["bitcosite.com",137],["bitzite.com",137],["hentaiseason.com",138],["hoodtrendspredict.com",138],["osteusfilmestuga.online",138],["tvappapk.com",138],["twobluescans.com",[138,139]],["varnascan.xyz",138],["hacoos.com",141],["bondagevalley.cc",142],["zefoy.com",143],["vidello.net",144],["resizer.myct.jp",145],["gametohkenranbu.sakuraweb.com",146],["jisakuhibi.jp",147],["rank1-media.com",147],["lifematome.blog",148],["fm.sekkaku.net",149],["free-avx.jp",150],["dvdrev.com",151],["betweenjpandkr.blog",152],["nft-media.net",153],["ghacks.net",154],["leak.sx",155],["paste.bin.sx",155],["pornleaks.in",155],["songspk2.info",156],["nectareousoverelate.com",158],["khoaiphim.com",159],["haafedk2.com",160],["fordownloader.com",160],["jovemnerd.com.br",161],["totalcsgo.com",162],["vivamax.asia",163],["manysex.com",164],["gaminginfos.com",165],["tinxahoivn.com",166],["automoto.it",167],["codelivly.com",168],["lordchannel.com",169],["touguatize.monster",170],["client.falixnodes.net",171],["novelhall.com",172],["abc17news.com",173],["bailiwickexpress.com",173],["barnsleychronicle.com",173],["chaptercheats.com",173],["commercialobserver.com",173],["competentedigitale.ro",173],["freeconvert.com",173],["helloflo.com",173],["homeglowdesign.com",173],["honeygirlsworld.com",173],["hotcars.com",173],["howtogeek.com",173],["imgur.com",173],["insider-gaming.com",173],["insurancejournal.com",173],["jasminemaria.com",173],["kion546.com",173],["lehighvalleylive.com",173],["lettyskitchen.com",173],["lifeinleggings.com",173],["liveandletsfly.com",173],["lizzieinlace.com",173],["localnews8.com",173],["lonestarlive.com",173],["madeeveryday.com",173],["maidenhead-advertiser.co.uk",173],["makeuseof.com",173],["mardomreport.net",173],["melangery.com",173],["milestomemories.com",173],["modernmom.com",173],["momtastic.com",173],["mostlymorgan.com",173],["motherwellmag.com",173],["movieweb.com",173],["muddybootsanddiamonds.com",173],["musicfeeds.com.au",173],["mylifefromhome.com",173],["nationalreview.com",173],["neoskosmos.com",173],["nordot.app",173],["nothingbutnewcastle.com",173],["nsjonline.com",173],["oakvillenews.org",173],["observer.com",173],["ourlittlesliceofheaven.com",173],["palachinkablog.com",173],["patheos.com",173],["pinkonthecheek.com",173],["politicususa.com",173],["predic.ro",173],["puckermom.com",173],["qtoptens.com",173],["realgm.com",173],["reelmama.com",173],["robbreport.com",173],["royalmailchat.co.uk",173],["samchui.com",173],["sandrarose.com",173],["screenrant.com",173],["sherdog.com",173],["sidereel.com",173],["silive.com",173],["simpleflying.com",173],["sloughexpress.co.uk",173],["spacenews.com",173],["sportsgamblingpodcast.com",173],["spotofteadesigns.com",173],["stacysrandomthoughts.com",173],["ssnewstelegram.com",173],["superherohype.com",173],["tablelifeblog.com",173],["thebeautysection.com",173],["thecelticblog.com",173],["thecurvyfashionista.com",173],["thefashionspot.com",173],["thegamer.com",173],["thegamescabin.com",173],["thenerdyme.com",173],["thenonconsumeradvocate.com",173],["theprudentgarden.com",173],["thethings.com",173],["timesnews.net",173],["topspeed.com",173],["toyotaklub.org.pl",173],["travelingformiles.com",173],["tutsnode.org",173],["viralviralvideos.com",173],["wannacomewith.com",173],["wimp.com",[173,175]],["windsorexpress.co.uk",173],["woojr.com",173],["worldoftravelswithkids.com",173],["worldsurfleague.com",173],["xda-developers.com",173],["adoredbyalex.com",173],["agrodigital.com",[173,175]],["al.com",[173,175]],["aliontherunblog.com",[173,175]],["allaboutthetea.com",[173,175]],["allmovie.com",[173,175]],["allmusic.com",[173,175]],["allthingsthrifty.com",[173,175]],["amessagewithabottle.com",[173,175]],["androidpolice.com",173],["antyradio.pl",173],["artforum.com",[173,175]],["artnews.com",[173,175]],["awkward.com",[173,175]],["awkwardmom.com",[173,175]],["becomingpeculiar.com",173],["bethcakes.com",[173,175]],["blogher.com",[173,175]],["bluegraygal.com",[173,175]],["briefeguru.de",[173,175]],["carmagazine.co.uk",173],["cattime.com",173],["cbr.com",173],["cleveland.com",[173,175]],["collider.com",173],["comingsoon.net",173],["crafty.house",173],["dailyvoice.com",[173,175]],["decider.com",[173,175]],["didyouknowfacts.com",[173,175]],["dogtime.com",[173,175]],["dualshockers.com",173],["dustyoldthing.com",173],["faithhub.net",173],["femestella.com",[173,175]],["footwearnews.com",[173,175]],["frogsandsnailsandpuppydogtail.com",[173,175]],["fsm-media.com",173],["funtasticlife.com",[173,175]],["fwmadebycarli.com",[173,175]],["gamerant.com",173],["gfinityesports.com",173],["givemesport.com",173],["gulflive.com",[173,175]],["masslive.com",[173,175,218]],["mlive.com",[173,175]],["nj.com",[173,175]],["oregonlive.com",[173,175]],["pagesix.com",[173,175,218]],["pennlive.com",[173,175,218]],["sheknows.com",[173,175]],["syracuse.com",[173,175,218]],["tvline.com",[173,175]],["cheatsheet.com",174],["pwinsider.com",174],["baeldung.com",174],["mensjournal.com",174],["247sports.com",[175,218]],["betweenenglandandiowa.com",175],["bgr.com",175],["blu-ray.com",175],["brobible.com",175],["cbsnews.com",[175,218]],["cbssports.com",[175,218]],["celiacandthebeast.com",175],["dailykos.com",175],["eater.com",175],["eldiariony.com",175],["free-power-point-templates.com",175],["inc.com",175],["indiewire.com",[175,218]],["inquisitr.com",175],["intouchweekly.com",175],["kcrg.com",175],["kentucky.com",175],["knowyourmeme.com",175],["last.fm",175],["lifeandstylemag.com",175],["mandatory.com",175],["nbcsports.com",175],["news.com.au",175],["nypost.com",[175,218]],["rollingstone.com",175],["sbnation.com",175],["sneakernews.com",175],["sport-fm.gr",175],["stylecaster.com",175],["tastingtable.com",175],["thecw.com",175],["thedailymeal.com",175],["themarysue.com",175],["usmagazine.com",175],["wallup.net",175],["yourcountdown.to",175],["bagi.co.in",176],["keran.co",176],["biblestudytools.com",177],["christianheadlines.com",177],["ibelieve.com",177],["kuponigo.com",178],["kimcilonly.site",179],["kimcilonly.link",179],["cryptoearns.com",180],["inxxx.com",181],["ipaspot.app",182],["embedwish.com",183],["filelions.live",183],["leakslove.net",183],["jenismac.com",184],["vxetable.cn",185],["jewelavid.com",186],["nizarstream.com",186],["snapwordz.com",187],["toolxox.com",187],["rl6mans.com",187],["idol69.net",187],["plumbersforums.net",188],["123movies57.online",189],["gulio.site",190],["izlekolik.net",191],["donghuaworld.com",192],["letsdopuzzles.com",193],["hes-goals.io",194],["pkbiosfix.com",194],["casi3.xyz",194],["rediff.com",195],["dzapk.com",196],["darknessporn.com",197],["familyporner.com",197],["freepublicporn.com",197],["pisshamster.com",197],["punishworld.com",197],["xanimu.com",197],["tainio-mania.online",198],["javhdo.net",199],["eroticmoviesonline.me",200],["teleclub.xyz",201],["ecamrips.com",202],["showcamrips.com",202],["tucinehd.com",203],["9animetv.to",204],["qiwi.gg",205],["jornadaperfecta.com",206],["loseart.com",207],["sousou-no-frieren.com",208],["unite-guide.com",209],["thebullspen.com",210],["botcomics.com",211],["cefirates.com",211],["chandlerorchards.com",211],["comicleaks.com",211],["marketdata.app",211],["monumentmetals.com",211],["tapmyback.com",211],["ping.gg",211],["revistaferramental.com.br",211],["hawpar.com",211],["alpacafinance.org",[211,212]],["nookgaming.com",211],["enkeleksamen.no",211],["kvest.ee",211],["creatordrop.com",211],["panpots.com",211],["cybernetman.com",211],["bitdomain.biz",211],["gerardbosch.xyz",211],["fort-shop.kiev.ua",211],["accuretawealth.com",211],["resourceya.com",211],["tracktheta.com",211],["camberlion.com",211],["replai.io",211],["trybawaryjny.pl",211],["segops.madisonspecs.com",211],["tt.live",212],["future-fortune.com",212],["adventuretix.com",212],["bolighub.dk",212],["panprices.com",213],["intercity.technology",213],["freelancer.taxmachine.be",213],["adria.gg",213],["fjlaboratories.com",213],["emanualonline.com",213],["abhijith.page",213],["helpmonks.com",213],["dataunlocker.com",214],["proboards.com",215],["winclassic.net",215],["pandadoc.com",217],["abema.tv",219]]);

const entitiesMap = new Map([["vidsrc",[3,13,57]],["flix-wave",3],["mixdrop",[3,14]],["sanet",3],["sportshd",3],["wawacity",3],["720pstream",[3,57]],["pahe",[5,14]],["soap2day",5],["mhdsports",7],["mhdsportstv",7],["mhdtvsports",7],["mhdtvworld",7],["mhdtvmax",7],["mhdstream",7],["reset-scans",7],["poplinks",[7,94]],["hqq",8],["waaw",8],["pixhost",10],["viprow",[13,14,57]],["bluemediadownload",13],["bluemediafile",13],["bluemedialink",13],["bluemediastorage",13],["bluemediaurls",13],["urlbluemedia",13],["cloudvideotv",[13,57]],["123-movies",14],["123movieshd",14],["123movieshub",14],["123moviesme",14],["1337x",[14,31]],["1stream",14],["1tamilmv",14],["2ddl",14],["2umovies",14],["3hiidude",14],["4stream",14],["5movies",14],["7hitmovies",14],["9xmovie",14],["9xlinks",14],["aagmaal",[14,57]],["adblockeronstape",[14,105]],["adblockeronstreamtape",14],["adblockplustape",[14,105]],["adblockstreamtape",[14,105]],["adblockstrtape",[14,105]],["adblockstrtech",[14,105]],["adblocktape",[14,105]],["adcorto",14],["alexsports",14],["alexsportss",14],["alexsportz",14],["animepahe",14],["animesanka",14],["animixplay",14],["aniplay",14],["antiadtape",[14,105]],["asianclub",14],["ask4movie",14],["atomixhq",[14,57]],["atomohd",14],["beinmatch",[14,22]],["bhaai",14],["blurayufr",14],["buffstreams",14],["canalesportivo",14],["clickndownload",14],["clicknupload",14],["daddylive",[14,57]],["daddylivehd",[14,57]],["ddrmovies",14],["desiremovies",14],["devlib",14],["divxtotal",14],["divxtotal1",14],["dlhd",14],["dvdplay",[14,57]],["elixx",14],["enjoy4k",14],["estrenosflix",14],["estrenosflux",14],["estrenosgo",14],["f1stream",14],["fbstream",14],["file4go",14],["filmymeet",14],["filmyzilla",[14,57]],["findav",14],["findporn",14],["flixmaza",14],["flizmovies",14],["freetvsports",14],["fullymaza",14],["g3g",14],["gotxx",14],["grantorrent",14],["hdmoviesfair",[14,57]],["hdmoviesflix",14],["hiidudemoviez",14],["imgsen",14],["imgsto",14],["incest",14],["incestflix",14],["itopmusic",14],["javmost",14],["keeplinks",14],["keepvid",14],["keralahd",14],["khatrimazaful",14],["khatrimazafull",14],["leechall",14],["linkshorts",14],["mangovideo",14],["masaporn",14],["miniurl",14],["mirrorace",14],["mixdroop",14],["mkvcage",14],["mlbstream",14],["mlsbd",14],["mmsbee",14],["motogpstream",14],["movieplex",14],["movierulzlink",14],["movies123",14],["moviesflix",14],["moviesmeta",14],["moviessources",14],["moviesverse",14],["moviezwaphd",14],["mrunblock",14],["nbastream",14],["newmovierulz",14],["nflstream",14],["nhlstream",14],["noblocktape",[14,105]],["nocensor",14],["onlyfams",14],["ouo",14],["pctfenix",[14,57]],["pctnew",[14,57]],["peliculas24",14],["pelisplus",14],["piratebay",14],["plyjam",14],["plylive",14],["plyvdo",14],["pornhoarder",14],["prbay",14],["projectfreetv",14],["proxybit",14],["psarips",14],["racaty",14],["remaxhd",14],["rintor",14],["rnbxclusive",14],["rnbxclusive0",14],["rnbxclusive1",14],["rojadirecta",14],["rojadirectaenvivo",14],["rugbystreams",14],["sadisflix",14],["safetxt",14],["shadowrangers",14],["shahi4u",14],["shahid4u1",14],["shahid4uu",14],["shavetape",14],["shortearn",14],["shorten",14],["shorttey",14],["shortzzy",14],["skymovieshd",14],["socceronline",[14,57]],["softarchive",14],["sports-stream",14],["sporttuna",14],["sshhaa",14],["stapadblockuser",[14,105]],["stape",[14,105]],["stapewithadblock",14],["starmusiq",14],["strcloud",[14,105]],["streamadblocker",[14,57,105]],["streamadblockplus",[14,105]],["streamcdn",14],["streamhub",14],["streamsport",14],["streamta",[14,105]],["streamtape",[14,105]],["streamtapeadblockuser",[14,105]],["strikeout",14],["strtape",[14,105]],["strtapeadblock",[14,105]],["strtapeadblocker",[14,105]],["strtapewithadblock",14],["strtpe",[14,105]],["swatchseries",14],["tabooflix",14],["tennisstreams",14],["themoviesflix",14],["thepiratebay",14],["thisav",14],["tmearn",14],["toonanime",14],["torlock",14],["tormalayalam",14],["torrentz2eu",14],["tutelehd",14],["tvply",14],["u4m",14],["ufcstream",14],["unblocknow",14],["uploadbuzz",14],["usagoals",14],["vexmoviex",14],["vidclouds",14],["vidlox",14],["vipbox",[14,57]],["vipboxtv",[14,57]],["vipleague",14],["watch-series",14],["watchseries",14],["xclusivejams",14],["xmoviesforyou",14],["youdbox",14],["ytmp3eu",14],["yts-subs",14],["yts",14],["zooqle",14],["dutchycorp",15],["torrentdownload",32],["mkvcinemas",[32,57]],["dood",[35,57]],["doodstream",35],["dooood",[35,57]],["nekopoi",39],["livecamrips",41],["shrinke",41],["shrinkme",41],["daddylive1",50],["esportivos",50],["poscitechs",50],["bollyflix",50],["watchomovies",[51,57]],["123movies",57],["123moviesla",57],["123movieweb",57],["2embed",57],["9xmovies",57],["adshort",57],["allmovieshub",57],["asianplay",57],["atishmkv",57],["bflix",57],["cricstream",57],["crictime",57],["databasegdriveplayer",57],["extramovies",57],["faselhd",57],["faselhds",57],["filemoon",57],["filmy",57],["filmyhit",57],["filmywap",57],["fmovies",57],["gdplayer",57],["goku",57],["gomovies",57],["gowatchseries",57],["hdfungamezz",57],["hindilinks4u",57],["hurawatch",57],["jalshamoviezhd",57],["livecricket",57],["mhdsport",57],["movies2watch",57],["moviespapa",57],["mp4moviez",57],["mydownloadtube",57],["nuroflix",57],["o2tvseries",57],["o2tvseriesz",57],["pirlotv",57],["poscitech",57],["primewire",57],["redecanais",57],["serienstream",57],["sflix",57],["shahed4u",57],["shaheed4u",57],["speedostream",57],["sportcast",57],["sportskart",57],["streamingcommunity",[57,119]],["tamilarasan",57],["tamilfreemp3songs",57],["tamilprinthd",57],["torrentdosfilmes",57],["tubemate",57],["uploadrar",57],["uqload",57],["vidcloud9",57],["vido",57],["vidoo",57],["vudeo",57],["vumoo",57],["yesmovies",57],["mydverse",69],["actvid",73],["stfly",102],["stly",102],["dropgalaxy",104],["kickassanime",108],["11xmovies",109],["streamblasters",109],["kickass",110],["cine-calidad",117],["woxikon",123],["ftuapps",138],["showflix",138],["teluguflix",140]]);

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
