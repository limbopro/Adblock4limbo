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

const argsList = [["script","DisplayAcceptableAdIfAdblocked"],["script","/==undefined.*body/"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","Reflect"],["script","document.write"],["script","deblocker"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","exdynsrv"],["script","/adb/i"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|ad block|alert/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","popUnderUrl"],["script","Adblock"],["script","alert"],["script","document.createTextNode"],["script","/shown_at|WebAssembly/"],["script","style"],["script","shown_at"],["script","adsSrc"],["script","ai_adb"],["script","/adblock|popunder|openedPop|WebAssembly/"],["script","window.warn"],["script","adBlock"],["script","/fetch|adb/i"],["script","window.open"],["script","adblockimg"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","googlesyndication"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/pop1stp|detectAdBlock/"],["script","popundersPerIP"],["script","popunder"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","catch"],["script","displayAdsV3"],["script",";}}};break;case $."],["script","adblocker"],["script","break;case"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adserverDomain|\\);break;case /"],["script","initializeInterstitial"],["script","/adbl/i"],["script","popupBackground"],["script","mdpDeblocker"],["script","Math.floor"],["script","m9-ad-modal"],["script","detectAdBlock"],["script","antiAdBlockerHandler"],["script","wpadmngr.com"],["script","Anzeige"],["script","blocking"],["script","adBlockNotice"],["script","HTMLAllCollection"],["script","advads"],["script","document.cookie"],["script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"],["script","/_0x|brave|onerror/"],["script","adb"],["script","/ABDetected|navigator.brave|fetch/"],["script","/bypass.php"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script",";break;case $."],["script","adb_detected"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","/event\\.keyCode|DisableDevtool/"],["script","/adblock|var Data.*];/"],["script","replace"],["script","{delete window["],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","charCodeAt"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","error-report.com"],["script","KCgpPT57bGV0IGU"],["script","adShield"],["script","Ad-Shield"],["script","adrecover.com"],["script","html-load.com"],["script","AdblockRegixFinder"],["script","/adScript|adsBlocked/"],["script","serve"],["script","/\\.length > 0\\) \\{  \\}/"],["script","/ConsoleBan|alert|AdBlocker/"],["script","runPop"],["style","body:not(.ownlist)"],["script","alert","condition","adblock"],["script","decodeURIComponent(escape"],["script","/ai_|googletag|adb/"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","zfgloaded"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/modal|popupads/"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","app_checkext"],["script","clientHeight"],["script","await"],["script","pop.target"],["script","!window.adngin"],["script","axios"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","\"\").split(\",\")[4]"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","AdBlock"],["script","Symbol.iterator"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","AaDetector"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","document.head.appendChild"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","detect"],["script","fetch"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","adBlockEnabled"],["script","/function\\(Baby|\\+'a'|\\+parseInt|\\+String|log'|fromCharCode'|createElement'|querySel'|\\\\x22return|;\\}\\(\\)\\)\\);\\}\\}\\(\\)\\)\\);/"],["script","/catch.+catch/"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["script","selectRandomProduct"],["script","\"data-adm-url\""],["script","NREUM"]];

const hostnamesMap = new Map([["alpin.de",0],["boersennews.de",0],["chefkoch.de",0],["chip.de",0],["clever-tanken.de",0],["desired.de",0],["donnerwetter.de",0],["fanfiktion.de",0],["focus.de",0],["formel1.de",0],["frustfrei-lernen.de",0],["gewinnspiele.tv",0],["giga.de",0],["gut-erklaert.de",0],["kino.de",0],["messen.de",0],["nickles.de",0],["nordbayern.de",0],["spielfilm.de",0],["teltarif.de",0],["unsere-helden.com",0],["weltfussball.at",0],["watson.de",0],["moviepilot.de",[0,4]],["mactechnews.de",0],["sport1.de",0],["aupetitparieur.com",1],["allthingsvegas.com",1],["100percentfedup.com",1],["beforeitsnews.com",1],["concomber.com",1],["conservativebrief.com",1],["conservativefiringline.com",1],["dailylol.com",1],["funnyand.com",1],["letocard.fr",1],["mamieastuce.com",1],["meilleurpronostic.fr",1],["patriotnationpress.com",1],["toptenz.net",1],["vitamiiin.com",1],["writerscafe.org",1],["populist.press",1],["dailytruthreport.com",1],["livinggospeldaily.com",1],["first-names-meanings.com",1],["welovetrump.com",1],["thehayride.com",1],["thelibertydaily.com",1],["thepoke.co.uk",1],["thepolitistick.com",1],["theblacksphere.net",1],["shark-tank.com",1],["naturalblaze.com",1],["greatamericanrepublic.com",1],["dailysurge.com",1],["truthlion.com",1],["flagandcross.com",1],["westword.com",1],["republicbrief.com",1],["freedomfirstnetwork.com",1],["phoenixnewtimes.com",1],["designbump.com",1],["clashdaily.com",1],["madworldnews.com",1],["reviveusa.com",1],["sonsoflibertymedia.com",1],["thedesigninspiration.com",1],["videogamesblogger.com",1],["protrumpnews.com",1],["thepalmierireport.com",1],["kresy.pl",1],["thepatriotjournal.com",1],["gellerreport.com",1],["thegatewaypundit.com",1],["wltreport.com",1],["miaminewtimes.com",1],["politicalsignal.com",1],["rightwingnews.com",1],["bigleaguepolitics.com",1],["comicallyincorrect.com",1],["web.de",2],["skidrowreloaded.com",[3,14]],["1stream.eu",3],["4kwebplay.xyz",3],["antennasports.ru",3],["buffsports.me",[3,54]],["buffstreams.app",3],["claplivehdplay.ru",[3,61]],["cracksports.me",[3,13]],["euro2024direct.ru",3],["ext.to",3],["eztv.tf",3],["eztvx.to",3],["kenitv.me",[3,13,14]],["lewblivehdplay.ru",[3,61]],["mlbbite.net",3],["mlbstreams.ai",3],["qatarstreams.me",[3,13]],["qqwebplay.xyz",[3,61]],["rnbastreams.com",3],["soccerworldcup.me",[3,13]],["topstreams.info",3],["totalsportek.to",3],["viwlivehdplay.ru",3],["vidco.pro",[3,54]],["embedsports.me",[3,100]],["embedstream.me",[3,13,14,54,100]],["jumbtv.com",[3,100]],["reliabletv.me",[3,100]],["topembed.pw",[3,61,98]],["crackstreamer.net",3],["methstreamer.com",3],["yts.mx",6],["magesypro.com",7],["pinsystem.co.uk",7],["elrellano.com",7],["tinyppt.com",7],["bharathwick.com",7],["descargaspcpro.net",7],["dx-tv.com",7],["rt3dmodels.com",7],["plc4me.com",7],["blisseyhusbands.com",7],["madaradex.org",7],["trigonevo.com",7],["franceprefecture.fr",7],["jazbaat.in",7],["aipebel.com",7],["audiotools.blog",7],["veganab.co",7],["camdigest.com",7],["learnmany.in",7],["amanguides.com",[7,82]],["highkeyfinance.com",[7,82]],["appkamods.com",7],["techacode.com",7],["djqunjab.in",7],["downfile.site",7],["expertvn.com",7],["trangchu.news",7],["3dmodelshare.org",7],["nulleb.com",7],["asiaon.top",7],["coursesghar.com",7],["thecustomrom.com",7],["snlookup.com",7],["bingotingo.com",7],["ghior.com",7],["3dmili.com",7],["karanpc.com",7],["plc247.com",7],["apkdelisi.net",7],["javindo.eu.org",7],["chindohot.site",7],["freepasses.org",7],["tomarnarede.pt",7],["basketballbuzz.ca",7],["dribbblegraphics.com",7],["kemiox.com",7],["checkersmenu.us",7],["teksnologi.com",7],["upornia.com",9],["eporner.com",11],["javtiful.com",[11,14]],["germancarforum.com",12],["innateblogger.com",12],["cybercityhelp.in",12],["mlbbox.me",13],["streamnoads.com",[13,14,54]],["bowfile.com",13],["cloudvideo.tv",[13,54]],["coloredmanga.com",13],["exeo.app",13],["hiphopa.net",[13,14]],["megaup.net",13],["olympicstreams.co",[13,54]],["tv247.us",[13,14]],["uploadhaven.com",13],["userscloud.com",[13,54]],["mdfx9dc8n.net",14],["mdzsmutpcvykb.net",14],["mixdrop21.net",14],["mixdropjmk.pw",14],["1337x.ninjaproxy1.com",14],["y2tube.pro",14],["fastreams.com",14],["redittsports.com",14],["sky-sports.store",14],["streamsoccer.site",14],["tntsports.store",14],["wowstreams.co",14],["141jav.com",14],["1bit.space",14],["1bitspace.com",14],["3dporndude.com",14],["4archive.org",14],["4horlover.com",14],["560pmovie.com",14],["60fps.xyz",14],["85tube.com",14],["85videos.com",14],["aazzz.xyz",14],["acefile.co",14],["actusports.eu",14],["adclickersbot.com",14],["adricami.com",14],["adslink.pw",14],["adultstvlive.com",14],["adz7short.space",14],["aeblender.com",14],["ahdafnews.blogspot.com",14],["ak47sports.com",14],["akuma.moe",14],["allplayer.tk",14],["allstreaming.online",14],["amadoras.cf",14],["amadorasdanet.shop",14],["amateurblog.tv",14],["androidadult.com",14],["anhsexjav.xyz",14],["anidl.org",14],["anime-loads.org",14],["animeblkom.net",14],["animefire.plus",14],["animelek.me",14],["animespire.net",14],["animestotais.xyz",14],["animeyt.es",14],["anroll.net",14],["anymoviess.xyz",14],["aotonline.org",14],["asenshu.com",14],["asialiveaction.com",14],["asianclipdedhd.net",14],["askim-bg.com",14],["asumsikedaishop.com",14],["avcrempie.com",14],["avseesee.com",14],["gettapeads.com",14],["backfirstwo.com",14],["bajarjuegospcgratis.com",14],["balkanportal.net",14],["balkanteka.net",14],["bdnewszh.com",[14,54]],["belowporn.com",14],["bestclaimtrx.xyz",14],["bestgirlsexy.com",14],["bestnhl.com",14],["bestporn4free.com",14],["bestporncomix.com",14],["bet36.es",14],["bikinitryon.net",14],["birdurls.com",14],["bitsearch.to",14],["blackcockadventure.com",14],["blackcockchurch.org",14],["blackporncrazy.com",14],["blizzboygames.net",14],["blizzpaste.com",14],["blkom.com",14],["blog-peliculas.com",14],["blogtrabalhista.com",14],["bobsvagene.club",14],["bolly4umovies.click",14],["bonusharian.pro",14],["brilian-news.id",14],["brupload.net",14],["bucitana.com",14],["cablegratis.online",14],["camchickscaps.com",14],["camgirlcum.com",14],["camgirls.casa",14],["cashurl.in",14],["castingx.net",14],["ccurl.net",[14,54]],["celebrity-leaks.net",14],["cgpelis.net",14],["charexempire.com",14],["choosingnothing.com",14],["clasico.tv",14],["clik.pw",14],["coin-free.com",[14,79]],["coins100s.fun",14],["comicsmanics.com",14],["compucalitv.com",14],["coolcast2.com",14],["cosplaytab.com",14],["countylocalnews.com",14],["cpmlink.net",14],["crackstreamshd.click",14],["crespomods.com",14],["crisanimex.com",14],["crunchyscan.fr",14],["cuevana3.fan",14],["cuevana3hd.com",14],["cumception.com",14],["cutpaid.com",14],["cypherscans.xyz",[14,54]],["dailyuploads.net",14],["datawav.club",14],["daughtertraining.com",14],["deepgoretube.site",14],["deltabit.co",14],["deporte-libre.top",14],["depvailon.com",14],["derleta.com",14],["desivdo.com",14],["desixx.net",14],["detikkebumen.com",14],["deutschepornos.me",14],["diasoft.xyz",14],["directupload.net",14],["diskusscan.com",14],["dixva.com",14],["doctormalay.com",14],["dofusports.xyz",14],["dogemate.com",14],["doods.cam",14],["doodskin.lat",14],["downloadrips.com",14],["downvod.com",14],["dphunters.mom",14],["dragontranslation.com",14],["duddes.xyz",14],["dvdfullestrenos.com",14],["easylinks.in",14],["ebookbb.com",14],["ebookhunter.net",14],["egyanime.com",14],["egygost.com",14],["egyshare.cc",14],["ekasiwap.com",14],["electro-torrent.pl",14],["elil.cc",14],["embed4u.xyz",14],["eplayer.click",14],["erovoice.us",14],["eroxxx.us",14],["estrenosdoramas.net",14],["everia.club",14],["everythinginherenet.blogspot.com",14],["extrafreetv.com",14],["extremotvplay.com",14],["fapinporn.com",14],["fapptime.com",14],["fashionblog.tv",14],["fastreams.live",14],["faucethero.com",14],["fembed.com",14],["femdom-joi.com",14],["fileone.tv",14],["film1k.com",14],["filmeonline2023.net",14],["filmesonlinex.org",14],["filmesonlinexhd.biz",[14,54]],["filmovitica.com",14],["filmymaza.blogspot.com",14],["filthy.family",14],["firstmovies.to",14],["fixfinder.click",14],["flostreams.xyz",14],["flyfaucet.com",14],["footyhunter.lol",14],["footyhunter3.xyz",[14,54]],["forex-golds.com",14],["forex-trnd.com",14],["forumchat.club",14],["forumlovers.club",14],["freemoviesonline.biz",14],["freeomovie.co.in",14],["freeomovie.to",14],["freeporncomic.net",14],["freepornhdonlinegay.com",14],["freeproxy.io",14],["freeuse.me",14],["freeusexporn.com",14],["fsicomics.com",14],["gambarbogel.xyz",14],["gamepcfull.com",14],["gameronix.com",14],["gamesfullx.com",14],["gameshdlive.net",14],["gameshdlive.xyz",14],["gamesmountain.com",14],["gamesrepacks.com",14],["gamingguru.fr",14],["gamovideo.com",14],["garota.cf",14],["gaydelicious.com",14],["gaypornmasters.com",14],["gaysex69.net",14],["gemstreams.com",14],["get-to.link",14],["girlscanner.org",14],["giurgiuveanul.ro",14],["gledajcrtace.xyz",14],["gocast2.com",14],["gomo.to",14],["gostosa.cf",14],["gtlink.co",14],["gwiazdypornosow.pl",14],["haho.moe",14],["hatsukimanga.com",14],["hayhd.net",14],["hdsaprevodom.com",14],["hdstreamss.club",14],["hentais.tube",14],["hentaistream.co",14],["hentaitk.net",14],["hentaitube.online",14],["hentaiworld.tv",14],["hesgoal.tv",14],["hexupload.net",14],["hhkungfu.tv",14],["highlanderhelp.com",14],["hindimean.com",14],["hindimovies.to",[14,54]],["hiperdex.com",14],["hispasexy.org",14],["hitprn.com",14],["hoca4u.com",14],["hollymoviehd.cc",14],["hoodsite.com",14],["hopepaste.download",14],["hornylips.com",14],["hotgranny.live",14],["hotmama.live",14],["hqcelebcorner.net",14],["huren.best",14],["hwnaturkya.com",[14,54]],["hxfile.co",[14,54]],["igfap.com",14],["ihdstreams.xyz",14],["iklandb.com",14],["illink.net",14],["imgkings.com",14],["imgsex.xyz",14],["imx.to",14],["influencersgonewild.org",14],["infosgj.free.fr",14],["investnewsbrazil.com",14],["itdmusics.com",14],["itsuseful.site",14],["itunesfre.com",14],["iwatchfriendsonline.net",[14,144]],["jackstreams.com",14],["jatimupdate24.com",14],["jav-fun.cc",14],["jav-noni.cc",14],["jav-scvp.com",14],["javcl.com",14],["javf.net",14],["javhay.net",14],["javhoho.com",14],["javhun.com",14],["javleak.com",14],["javporn.best",14],["javsex.to",14],["jimdofree.com",14],["jiofiles.org",14],["jorpetz.com",14],["journalyc.online",14],["jp-films.com",14],["jpop80ss3.blogspot.com",14],["jpopsingles.eu",[14,32]],["kantotflix.net",14],["kantotinyo.com",14],["kaoskrew.org",14],["kaplog.com",14],["keralatvbox.com",14],["kickassanimes.io",14],["kimochi.info",14],["kimochi.tv",14],["kinemania.tv",14],["konstantinova.net",14],["koora-online.live",14],["kunmanga.com",14],["kutmoney.com",14],["kwithsub.com",14],["ladangreceh.xyz",14],["lat69.me",14],["latinblog.tv",14],["latinomegahd.net",14],["lazyfaucet.com",14],["leechpremium.link",14],["legendas.dev",14],["legendei.net",14],["lightdlmovies.blogspot.com",14],["lighterlegend.com",14],["linclik.com",14],["linkebr.com",14],["linkrex.net",14],["links.worldfree4u-lol.online",14],["linksfy.co",14],["lody.ink",14],["lovesomecommunity.com",14],["lulu.st",14],["lulustream.com",[14,54,98]],["luluvdo.com",[14,54]],["luzcameraeacao.shop",14],["manga-oni.com",14],["mangaboat.com",14],["mangagenki.me",14],["mangahere.onl",14],["mangaweb.xyz",14],["mangoporn.net",14],["manhwahentai.me",14],["masahub.com",14],["masahub.net",14],["maturegrannyfuck.com",14],["mdy48tn97.com",14],["mediapemersatubangsa.com",14],["mega-mkv.com",14],["megapastes.com",14],["megapornpics.com",14],["messitv.net",14],["meusanimes.net",14],["milfmoza.com",14],["milfzr.com",14],["millionscast.com",14],["mimaletamusical.blogspot.com",14],["mitly.us",14],["mkv-pastes.com",14],["modb.xyz",14],["monaskuliner.ac.id",14],["moredesi.com",14],["movgotv.net",14],["movi.pk",14],["movierr.online",14],["movieswbb.com",14],["moviewatch.com.pk",14],["mp4upload.com",14],["mrskin.live",14],["multicanaistv.com",14],["mundowuxia.com",14],["myeasymusic.ir",14],["myonvideo.com",14],["myyouporn.com",14],["narutoget.info",14],["naughtypiss.com",14],["nerdiess.com",14],["new-fs.eu",14],["newtorrentgame.com",14],["nflstreams.me",14],["niaomea.me",[14,54]],["nicekkk.com",14],["nicesss.com",14],["nlegs.com",14],["nolive.me",[14,54]],["notformembersonly.com",14],["novamovie.net",14],["novelpdf.xyz",14],["novelssites.com",[14,54]],["novelup.top",14],["nsfwr34.com",14],["nu6i-bg-net.com",14],["nudebabesin3d.com",14],["nukedfans.com",14],["nuoga.eu",14],["nzbstars.com",14],["ohjav.com",14],["ojearnovelas.com",14],["okanime.xyz",14],["olarixas.xyz",14],["oldbox.cloud",14],["olweb.tv",14],["olympicstreams.me",14],["on9.stream",14],["oncast.xyz",14],["onepiece-mangaonline.com",14],["onifile.com",14],["onionstream.live",14],["onlinesaprevodom.net",14],["onlyfullporn.video",14],["onplustv.live",14],["originporn.com",14],["ovagames.com",14],["ovamusic.com",14],["owllink.net",14],["packsporn.com",14],["pahaplayers.click",14],["palimas.org",14],["pandafiles.com",14],["papahd.club",14],["papahd1.xyz",14],["password69.com",14],["pastemytxt.com",14],["payskip.org",14],["peeplink.in",14],["peliculasmx.net",14],["pervertgirlsvideos.com",14],["pervyvideos.com",14],["phim12h.com",14],["picdollar.com",14],["pickteenz.com",14],["pics4you.net",14],["picsxxxporn.com",14],["pinayscandalz.com",14],["pinkueiga.net",14],["piratefast.xyz",14],["piratehaven.xyz",14],["pirateiro.com",14],["pirlotvonline.org",14],["playtube.co.za",14],["plugintorrent.com",14],["pmvzone.com",14],["porndish.com",14],["pornez.net",14],["pornfetishbdsm.com",14],["pornfits.com",14],["pornhd720p.com",14],["pornobr.club",14],["pornobr.ninja",14],["pornodominicano.net",14],["pornofaps.com",14],["pornoflux.com",14],["pornotorrent.com.br",14],["pornredit.com",14],["pornstarsyfamosas.es",14],["pornstreams.co",14],["porntn.com",14],["pornxbit.com",14],["pornxday.com",14],["portaldasnovinhas.shop",14],["portugues-fcr.blogspot.com",14],["poscishd.online",14],["poscitesch.com",[14,54]],["poseyoung.com",14],["pover.org",14],["proxyninja.org",14],["pubfilmz.com",14],["publicsexamateurs.com",14],["punanihub.com",14],["putlocker5movies.org",14],["pxxbay.com",14],["r18.best",14],["ragnaru.net",14],["rapbeh.net",14],["rapelust.com",14],["rapload.org",14],["read-onepiece.net",14],["retro-fucking.com",14],["retrotv.org",14],["robaldowns.com",14],["rockdilla.com",14],["rojadirectatvenvivo.com",14],["rojitadirecta.blogspot.com",14],["romancetv.site",14],["rsoccerlink.site",14],["rule34.club",14],["rule34hentai.net",14],["rumahbokep-id.com",14],["safego.cc",14],["safestream.cc",14],["sakurafile.com",14],["satoshi-win.xyz",14],["scat.gold",14],["scatfap.com",14],["scatkings.com",14],["scnlog.me",14],["scripts-webmasters.net",14],["serie-turche.com",14],["serijefilmovi.com",14],["sexcomics.me",14],["sexdicted.com",14],["sexgay18.com",14],["sexofilm.co",14],["sextgem.com",14],["sextubebbw.com",14],["sgpics.net",14],["shadowrangers.live",14],["shahee4u.cam",14],["shahiid-anime.net",14],["shemale6.com",14],["shinden.pl",14],["short.es",14],["showmanga.blog.fc2.com",14],["shrt10.com",14],["shurt.pw",14],["sideplusleaks.net",14],["silverblog.tv",14],["silverpic.com",14],["sinhalasub.life",14],["sinsitio.site",14],["sinvida.me",14],["skidrowcpy.com",14],["skidrowfull.com",14],["slut.mom",14],["smallencode.me",14],["smoner.com",14],["smplace.com",14],["soccerinhd.com",[14,54]],["socceron.name",14],["softairbay.com",14],["sokobj.com",14],["songsio.com",14],["souexatasmais.com",14],["sportbar.live",14],["sportea.online",14],["sportskart.xyz",14],["sportstream1.cfd",14],["srt.am",14],["srts.me",14],["stakes100.xyz",14],["stbemuiptv.com",14],["stockingfetishvideo.com",14],["stream.crichd.vip",14],["stream.lc",14],["stream25.xyz",14],["streambee.to",14],["streamcenter.pro",14],["streamers.watch",14],["streamgo.to",14],["streamkiste.tv",14],["streamoporn.xyz",14],["streamoupload.xyz",14],["streamservicehd.click",14],["streamvid.net",[14,23]],["subtitleporn.com",14],["subtitles.cam",14],["suicidepics.com",14],["supertelevisionhd.com",14],["supexfeeds.com",14],["swiftload.io",14],["swzz.xyz",14],["sxnaar.com",14],["tabooporns.com",14],["taboosex.club",14],["tapeantiads.com",14],["tapeblocker.com",14],["tapenoads.com",14],["tapewithadblock.org",[14,205]],["teamos.xyz",14],["teen-wave.com",14],["teenporncrazy.com",14],["telegramgroups.xyz",14],["telenovelasweb.com",14],["tensei-shitara-slime-datta-ken.com",14],["tfp.is",14],["tgo-tv.co",[14,54]],["thaihotmodels.com",14],["theblueclit.com",14],["thebussybandit.com",14],["thedaddy.to",[14,58]],["theicongenerator.com",14],["thelastdisaster.vip",14],["thepiratebay0.org",14],["thepiratebay10.info",14],["thesexcloud.com",14],["thothub.today",14],["tightsexteens.com",14],["tojav.net",14],["tokyoblog.tv",14],["tonnestreamz.xyz",14],["top16.net",14],["topvideosgay.com",14],["torrage.info",14],["torrents.vip",14],["torrsexvid.com",14],["tpb-proxy.xyz",14],["trannyteca.com",14],["trendytalker.com",14],["tumanga.net",14],["turbogvideos.com",14],["turbovid.me",14],["turkishseriestv.org",14],["turksub24.net",14],["tutele.sx",14],["tutelehd3.xyz",14],["tvglobe.me",14],["tvpclive.com",14],["tvs-widget.com",14],["tvseries.video",14],["ucptt.com",14],["ufaucet.online",14],["ufcfight.online",14],["uhdgames.xyz",14],["ultrahorny.com",14],["ultraten.net",14],["unblockweb.me",14],["underhentai.net",14],["uniqueten.net",14],["upbaam.com",14],["upstream.to",14],["valeriabelen.com",14],["verdragonball.online",14],["vfxmed.com",14],["video.az",14],["videostreaming.rocks",14],["videowood.tv",14],["vidorg.net",14],["vidtapes.com",14],["vidz7.com",14],["vikistream.com",14],["vikv.net",14],["virpe.cc",14],["visifilmai.org",14],["viveseries.com",14],["vladrustov.sx",14],["volokit2.com",[14,58]],["vstorrent.org",14],["w-hentai.com",14],["watchaccordingtojimonline.com",14],["watchbrooklynnine-nine.com",14],["watchdowntonabbeyonline.com",14],["watchelementaryonline.com",14],["watcheronline.net",14],["watchgleeonline.com",14],["watchhowimetyourmother.online",14],["watchkobestreams.info",14],["watchlostonline.net",14],["watchlouieonline.com",14],["watchjavidol.com",14],["watchmadmenonline.com",14],["watchmonkonline.com",14],["watchonceuponatimeonline.com",14],["watchparksandrecreation.net",14],["watchprettylittleliarsonline.com",14],["watchrulesofengagementonline.com",14],["watchthekingofqueens.com",14],["watchthemiddleonline.com",14],["watchtvchh.xyz",14],["webcamrips.com",14],["wickedspot.org",14],["wincest.xyz",14],["witanime.best",14],["wolverdon.fun",14],["wolverdonx.com",14],["wordcounter.icu",14],["worldcupstream.pm",14],["worldmovies.store",14],["worldstreams.click",14],["wpdeployit.com",14],["wqstreams.tk",14],["wwwsct.com",14],["xanimeporn.com",14],["xblog.tv",14],["xn--verseriesespaollatino-obc.online",14],["xn--xvideos-espaol-1nb.com",14],["xpornium.net",14],["xsober.com",14],["xvip.lat",14],["xxgasm.com",14],["xxvideoss.org",14],["xxx18.uno",14],["xxxdominicana.com",14],["xxxfree.watch",14],["xxxmax.net",14],["xxxwebdlxxx.top",14],["xxxxvideo.uno",14],["y2b.wiki",14],["yabai.si",14],["yadixv.com",14],["yayanimes.net",14],["yeshd.net",14],["yodbox.com",14],["youjax.com",14],["youpits.xyz",14],["yourdailypornvideos.ws",14],["yourupload.com",14],["ytstv.me",14],["ytstvmovies.co",14],["ytstvmovies.xyz",14],["ytsyify.co",14],["ytsyifymovie.com",14],["zerion.cc",14],["zerocoin.top",14],["zitss.xyz",14],["zpaste.net",14],["zplayer.live",14],["faucet.ovh",15],["oko.sh",[16,89,90]],["variety.com",17],["gameskinny.com",17],["deadline.com",17],["washingtonpost.com",18],["bigbtc.win",19],["cryptofun.space",19],["gosexpod.com",20],["sexo5k.com",21],["truyen-hentai.com",21],["theshedend.com",23],["eracast.cc",23],["zeroupload.com",23],["securenetsystems.net",23],["miniwebtool.com",23],["bchtechnologies.com",23],["spiegel.de",24],["jacquieetmichel.net",25],["hausbau-forum.de",26],["kiemlua.com",26],["appnee.com",27],["apkmirror.com",[28,111]],["smashystream.com",29],["cineb.rs",31],["hiraethtranslation.com",32],["fcportables.com",33],["repack-games.com",33],["pawastreams.info",33],["truyentranhfull.net",33],["d0000d.com",34],["d000d.com",34],["d0o0d.com",34],["do0od.com",34],["doods.pro",34],["ds2play.com",34],["ds2video.com",34],["freethesaurus.com",35],["thefreedictionary.com",35],["dexterclearance.com",36],["onlyfaucet.com",37],["smutty.com",38],["e-sushi.fr",38],["freeadultcomix.com",38],["down.dataaps.com",38],["filmweb.pl",38],["visionpapers.org",39],["fdownloader.net",40],["thehackernews.com",41],["mielec.pl",42],["camsrip.com",43],["help.sakarnewz.com",43],["beatsnoop.com",43],["fetchpik.com",43],["hackerranksolution.in",43],["treasl.com",44],["mrbenne.com",45],["cnpics.org",46],["ovabee.com",46],["porn4f.com",46],["cnxx.me",46],["ai18.pics",46],["cuervotv.me",[47,54]],["aliezstream.pro",47],["daddy-stream.xyz",47],["instream.pro",47],["mylivestream.pro",47],["powerover.online",47],["sportea.link",47],["sportsurge.stream",47],["ufckhabib.com",47],["ustream.pro",47],["papa4k.online",47],["animeshqip.site",47],["apkship.shop",47],["buzter.pro",47],["enjoysports.bond",47],["filedot.to",47],["foreverquote.xyz",47],["hdstream.one",47],["kingstreamz.site",47],["live.fastsports.store",47],["livesnow.me",47],["livesports4u.pw",47],["masterpro.click",47],["nuxhallas.click",47],["papahd.info",47],["rgshows.me",47],["sportmargin.live",47],["sportmargin.online",47],["sportsloverz.xyz",47],["sportzlive.shop",47],["supertipzz.online",47],["totalfhdsport.xyz",47],["ultrastreamlinks.xyz",47],["usgate.xyz",47],["webmaal.cfd",47],["wizistreamz.xyz",47],["worldstreamz.shop",47],["nontongo.win",47],["g-porno.com",47],["g-streaming.com",47],["giga-streaming.com",47],["educ4m.com",47],["fromwatch.com",47],["visualnewshub.com",47],["neymartv.net",47],["streamhd247.info",47],["hindimoviestv.com",47],["nowlive1.me",47],["buzter.xyz",47],["gamehdlive.online",47],["hdfungamezz.xyz",47],["kingstreamz.lol",47],["masterpro.club",47],["papahd.co",47],["sportos.co",47],["valhallas.click",47],["andhrafriends.com",48],["freeroms.com",48],["soap2day-online.com",48],["sportsonline.si",49],["fiuxy2.co",50],["animeunity.to",51],["auto-crypto.click",52],["iconicblogger.com",52],["tokopedia.com",53],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",54],["adsh.cc",54],["afilmyhouse.blogspot.com",54],["ak.sv",54],["animesultra.com",54],["api.webs.moe",54],["apkmody.io",54],["attvideo.com",54],["backfirstwo.site",[54,174]],["crazyblog.in",54],["divicast.com",54],["dlhd.so",54],["embed.meomeo.pw",54],["filmeserialeonline.org",54],["flexyhit.com",54],["foreverwallpapers.com",54],["french-streams.cc",54],["fslinks.org",54],["hdtoday.to",54],["hinatasoul.com",54],["igg-games.com",54],["infinityscans.net",54],["infinityscans.xyz",54],["mangareader.to",54],["membed.net",54],["mgnetu.com",54],["mp3juice.info",54],["mp3juices.cc",54],["myflixerz.to",54],["nowmetv.net",54],["nowsportstv.com",54],["nxbrew.com",54],["oii.io",54],["paidshitforfree.com",54],["pepperlive.info",54],["playertv.net",54],["putlocker68.com",54],["roystream.com",54],["rssing.com",54],["s.to",54],["share.filesh.site",54],["sharkfish.xyz",54],["skidrowcodex.net",54],["smartermuver.com",54],["sports-stream.site",54],["stream4free.live",54],["tamilmobilemovies.in",54],["tapeadsenjoyer.com",54],["thewatchseries.live",54],["tnmusic.in",54],["travelplanspro.com",54],["tusfiles.com",54],["tutlehd4.com",54],["twstalker.com",54],["vid-guard.com",54],["video-leech.xyz",54],["vidsaver.net",54],["vidspeeds.com",54],["viralitytoday.com",54],["voiranime.stream",54],["watchdoctorwhoonline.com",54],["watchserie.online",54],["webhostingpost.com",54],["woxikon.in",54],["www-y2mate.com",54],["ylink.bid",54],["ytix.xyz",54],["remixsearch.net",55],["remixsearch.es",55],["onlineweb.tools",55],["sharing.wtf",55],["2024tv.ru",56],["xnxxcom.xyz",57],["sportsurge.net",58],["joyousplay.xyz",58],["quest4play.xyz",[58,61]],["generalpill.net",58],["moneycontrol.com",59],["hesgoal-tv.io",60],["hesgoal-vip.io",60],["intro-hd.net",60],["monacomatin.mc",60],["nodo313.net",60],["cookiewebplay.xyz",61],["ilovetoplay.xyz",61],["streamcaster.live",61],["weblivehdplay.ru",61],["codec.kyiv.ua",62],["kimcilonlyofc.com",62],["unofficialtwrp.com",62],["oaaxpgp3.xyz",63],["m9.news",64],["sexwebvideo.com",65],["sexwebvideo.net",65],["pig69.com",65],["cosplay18.pics",65],["zeemoontv-24.blogspot.com",66],["stitichsports.com",66],["tinys.click",66],["answerpython.com",66],["formyanime.com",66],["gsm-solution.com",66],["h-donghua.com",66],["hindisubbedacademy.com",66],["linksdramas2.blogspot.com",66],["pkgovjobz.com",66],["ripexbooster.xyz",66],["serial4.com",66],["serial412.blogspot.com",66],["sigmalinks.in",66],["tutorgaming.com",66],["everydaytechvams.com",66],["dipsnp.com",66],["cccam4sat.com",66],["x-video.tube",67],["rahim-soft.com",67],["callofwar.com",68],["secondhandsongs.com",69],["nudezzers.org",70],["nohost.one",71],["zoechip.com",71],["3rooodnews.net",72],["xxxbfvideo.net",73],["filmy4wap.co.in",74],["gameshop4u.com",75],["regenzi.site",75],["pcgeeks-games.com",76],["easymc.io",76],["newscon.org",76],["yunjiema.top",76],["tea-coffee.net",77],["spatsify.com",77],["newedutopics.com",77],["getviralreach.in",77],["edukaroo.com",77],["funkeypagali.com",77],["careersides.com",77],["nayisahara.com",77],["wikifilmia.com",77],["infinityskull.com",77],["viewmyknowledge.com",77],["iisfvirtual.in",77],["starxinvestor.com",77],["jkssbalerts.com",77],["kenzo-flowertag.com",78],["mdn.lol",78],["btcbitco.in",79],["btcsatoshi.net",79],["cempakajaya.com",79],["crypto4yu.com",79],["gainl.ink",79],["manofadan.com",79],["readbitcoin.org",79],["wiour.com",79],["kienthucrangmieng.com",79],["tremamnon.com",79],["btc25.org",79],["tron-free.com",79],["bitsmagic.fun",79],["ourcoincash.xyz",79],["hynews.biz",79],["blog.cryptowidgets.net",80],["blog.insurancegold.in",80],["blog.wiki-topia.com",80],["blog.coinsvalue.net",80],["blog.cookinguide.net",80],["blog.freeoseocheck.com",80],["aylink.co",81],["sugarona.com",82],["nishankhatri.xyz",82],["cety.app",83],["exego.app",83],["cutlink.net",83],["cutsy.net",83],["cutyurls.com",83],["cutty.app",83],["cutnet.net",83],["aiimgvlog.fun",84],["appsbull.com",85],["diudemy.com",85],["maqal360.com",85],["mphealth.online",85],["makefreecallsonline.com",85],["androjungle.com",85],["bookszone.in",85],["drakescans.com",85],["shortix.co",85],["msonglyrics.com",85],["app-sorteos.com",85],["bokugents.com",85],["client.pylexnodes.net",85],["btvplus.bg",85],["blog24.me",[86,87]],["coingraph.us",88],["impact24.us",88],["tvi.la",[89,90]],["iir.la",[89,90]],["tii.la",[89,90]],["ckk.ai",[89,90]],["oei.la",[89,90]],["lnbz.la",[89,90]],["oii.la",[89,90]],["tpi.li",[89,90]],["atglinks.com",91],["kbconlinegame.com",92],["hamrojaagir.com",92],["odijob.com",92],["blogesque.net",93],["bookbucketlyst.com",93],["explorosity.net",93],["optimizepics.com",93],["torovalley.net",93],["travize.net",93],["trekcheck.net",93],["metoza.net",93],["techlike.net",93],["snaplessons.net",93],["atravan.net",93],["transoa.net",93],["techmize.net",93],["crenue.net",93],["simana.online",94],["fooak.com",94],["joktop.com",94],["evernia.site",94],["falpus.com",94],["financemonk.net",95],["cgtips.org",96],["emuenzen.de",97],["buffshub.stream",98],["cinego.tv",98],["fstream365.com",98],["sportshub.stream",98],["topcinema.cam",98],["unblocked.id",101],["listendata.com",102],["7xm.xyz",102],["fastupload.io",102],["azmath.info",102],["wouterplanet.com",103],["androidacy.com",104],["pillowcase.su",105],["veryfreeporn.com",106],["theporngod.com",106],["besthdgayporn.com",107],["drivenime.com",107],["javup.org",107],["shemaleup.net",107],["austiblox.net",108],["btcbunch.com",109],["teachoo.com",110],["automobile-catalog.com",[111,112]],["motorbikecatalog.com",[111,112]],["blog.esuteru.com",111],["blog.livedoor.jp",[111,210]],["itainews.com",111],["jin115.com",111],["allthetests.com",111],["javatpoint.com",111],["globalrph.com",111],["carscoops.com",111],["crosswordsolver.com",111],["cruciverba.it",111],["dnevno.hr",111],["ff14net.2chblog.jp",111],["heureka.cz",111],["indiatimes.com",111],["laleggepertutti.it",111],["meeco.kr",111],["mirrored.to",111],["motscroises.fr",111],["news4vip.livedoor.biz",111],["oeffnungszeitenbuch.de",111],["onecall2ch.com",111],["oraridiapertura24.it",111],["palabr.as",111],["petitfute.com",111],["rabitsokuhou.2chblog.jp",111],["rostercon.com",111],["sourceforge.net",111],["suzusoku.blog.jp",111],["the-crossword-solver.com",111],["thestockmarketwatch.com",111],["wfmz.com",111],["word-grabber.com",111],["wort-suchen.de",111],["yutura.net",111],["zagreb.info",111],["freemcserver.net",111],["golf-live.at",111],["kreuzwortraetsel.de",111],["raetsel-hilfe.de",111],["verkaufsoffener-sonntag.com",111],["horairesdouverture24.fr",111],["nyitvatartas24.hu",111],["modhub.us",111],["yugioh-starlight.com",111],["winfuture.de",111],["talkwithstranger.com",111],["topstarnews.net",111],["islamicfinder.org",111],["secure-signup.net",111],["dramabeans.com",111],["manta.com",111],["tportal.hr",111],["tvtropes.org",111],["wouldurather.io",111],["convertcase.net",111],["interfootball.co.kr",112],["a-ha.io",112],["cboard.net",112],["jjang0u.com",112],["joongdo.co.kr",112],["viva100.com",112],["gamingdeputy.com",112],["thesaurus.net",112],["alle-tests.nl",112],["maketecheasier.com",112],["allthekingz.com",112],["tweaksforgeeks.com",112],["m.inven.co.kr",112],["mlbpark.donga.com",112],["meconomynews.com",112],["brandbrief.co.kr",112],["motorgraph.com",112],["worldhistory.org",113],["lovelive-petitsoku.com",114],["pravda.com.ua",114],["slobodnadalmacija.hr",115],["persoenlich.com",116],["bitcotasks.com",117],["hilites.today",118],["udvl.com",119],["www.chip.de",120],["topsporter.net",121],["sportshub.to",121],["streamcheck.link",122],["myanimelist.net",123],["bitcosite.com",124],["bitzite.com",124],["hentaiseason.com",125],["twobluescans.com",[125,126]],["hacoos.com",128],["bondagevalley.cc",129],["zefoy.com",130],["vidello.net",131],["resizer.myct.jp",132],["gametohkenranbu.sakuraweb.com",133],["jisakuhibi.jp",134],["rank1-media.com",134],["lifematome.blog",135],["fm.sekkaku.net",136],["free-avx.jp",137],["dvdrev.com",138],["betweenjpandkr.blog",139],["nft-media.net",140],["ghacks.net",141],["leak.sx",142],["paste.bin.sx",142],["pornleaks.in",142],["songspk2.info",143],["nectareousoverelate.com",145],["khoaiphim.com",146],["haafedk2.com",147],["fordownloader.com",147],["jovemnerd.com.br",148],["nicomanga.com",149],["totalcsgo.com",150],["vivamax.asia",151],["manysex.com",152],["gaminginfos.com",153],["tinxahoivn.com",154],["automoto.it",155],["codelivly.com",156],["lordchannel.com",157],["touguatize.monster",158],["client.falixnodes.net",159],["novelhall.com",160],["abc17news.com",161],["bailiwickexpress.com",161],["barnsleychronicle.com",161],["chaptercheats.com",161],["commercialobserver.com",161],["competentedigitale.ro",161],["freeconvert.com",161],["fsm-media.com",161],["funtasticlife.com",161],["fwmadebycarli.com",161],["gamerant.com",161],["gfinityesports.com",161],["givemesport.com",161],["gulflive.com",161],["helloflo.com",161],["homeglowdesign.com",161],["honeygirlsworld.com",161],["hotcars.com",161],["howtogeek.com",161],["imgur.com",161],["insider-gaming.com",161],["insurancejournal.com",161],["jasminemaria.com",161],["kion546.com",161],["lehighvalleylive.com",161],["lettyskitchen.com",161],["lifeinleggings.com",161],["liveandletsfly.com",161],["lizzieinlace.com",161],["localnews8.com",161],["lonestarlive.com",161],["madeeveryday.com",161],["maidenhead-advertiser.co.uk",161],["makeuseof.com",161],["mardomreport.net",161],["melangery.com",161],["milestomemories.com",161],["modernmom.com",161],["momtastic.com",161],["mostlymorgan.com",161],["motherwellmag.com",161],["movieweb.com",161],["muddybootsanddiamonds.com",161],["musicfeeds.com.au",161],["mylifefromhome.com",161],["nationalreview.com",161],["neoskosmos.com",161],["nordot.app",161],["nothingbutnewcastle.com",161],["nsjonline.com",161],["oakvillenews.org",161],["observer.com",161],["ourlittlesliceofheaven.com",161],["palachinkablog.com",161],["patheos.com",161],["pinkonthecheek.com",161],["politicususa.com",161],["predic.ro",161],["puckermom.com",161],["qtoptens.com",161],["realgm.com",161],["reelmama.com",161],["robbreport.com",161],["royalmailchat.co.uk",161],["samchui.com",161],["sandrarose.com",161],["screenrant.com",161],["sherdog.com",161],["sidereel.com",161],["silive.com",161],["simpleflying.com",161],["sloughexpress.co.uk",161],["spacenews.com",161],["sportsgamblingpodcast.com",161],["spotofteadesigns.com",161],["stacysrandomthoughts.com",161],["ssnewstelegram.com",161],["superherohype.com",161],["tablelifeblog.com",161],["thebeautysection.com",161],["thecelticblog.com",161],["thecurvyfashionista.com",161],["thefashionspot.com",161],["thegamer.com",161],["thegamescabin.com",161],["thenerdyme.com",161],["thenonconsumeradvocate.com",161],["theprudentgarden.com",161],["thethings.com",161],["timesnews.net",161],["topspeed.com",161],["toyotaklub.org.pl",161],["travelingformiles.com",161],["tutsnode.org",161],["viralviralvideos.com",161],["wannacomewith.com",161],["wimp.com",[161,163]],["windsorexpress.co.uk",161],["woojr.com",161],["worldoftravelswithkids.com",161],["worldsurfleague.com",161],["xda-developers.com",161],["adoredbyalex.com",161],["agrodigital.com",[161,163]],["al.com",[161,163]],["aliontherunblog.com",[161,163]],["allaboutthetea.com",[161,163]],["allmovie.com",[161,163]],["allmusic.com",[161,163]],["allthingsthrifty.com",[161,163]],["amessagewithabottle.com",[161,163]],["androidpolice.com",161],["antyradio.pl",161],["artforum.com",[161,163]],["artnews.com",[161,163]],["awkward.com",[161,163]],["awkwardmom.com",[161,163]],["becomingpeculiar.com",161],["bethcakes.com",[161,163]],["blogher.com",[161,163]],["bluegraygal.com",[161,163]],["briefeguru.de",[161,163]],["carmagazine.co.uk",161],["cattime.com",161],["cbr.com",161],["cleveland.com",[161,163]],["collider.com",161],["comingsoon.net",161],["crafty.house",161],["dailyvoice.com",[161,163]],["decider.com",[161,163]],["didyouknowfacts.com",[161,163]],["dogtime.com",[161,163]],["dualshockers.com",161],["dustyoldthing.com",161],["faithhub.net",161],["femestella.com",[161,163]],["footwearnews.com",[161,163]],["frogsandsnailsandpuppydogtail.com",[161,163]],["masslive.com",[161,163,211]],["mlive.com",[161,163]],["nj.com",[161,163]],["oregonlive.com",[161,163]],["pagesix.com",[161,163,211]],["pennlive.com",[161,163,211]],["sheknows.com",[161,163]],["syracuse.com",[161,163,211]],["tvline.com",[161,163]],["cheatsheet.com",162],["pwinsider.com",162],["baeldung.com",162],["mensjournal.com",162],["247sports.com",[163,211]],["betweenenglandandiowa.com",163],["bgr.com",163],["blu-ray.com",163],["brobible.com",163],["cbsnews.com",[163,211]],["cbssports.com",[163,211]],["celiacandthebeast.com",163],["dailykos.com",163],["eater.com",163],["eldiariony.com",163],["free-power-point-templates.com",163],["inc.com",163],["indiewire.com",[163,211]],["inquisitr.com",163],["intouchweekly.com",163],["kcrg.com",163],["kentucky.com",163],["knowyourmeme.com",163],["last.fm",163],["lifeandstylemag.com",163],["mandatory.com",163],["nbcsports.com",163],["news.com.au",163],["nypost.com",[163,211]],["rollingstone.com",163],["sbnation.com",163],["sneakernews.com",163],["sport-fm.gr",163],["stylecaster.com",163],["tastingtable.com",163],["themarysue.com",163],["usmagazine.com",163],["yourcountdown.to",163],["bagi.co.in",164],["keran.co",164],["biblestudytools.com",165],["christianheadlines.com",165],["ibelieve.com",165],["kuponigo.com",166],["kimcilonly.site",167],["kimcilonly.link",167],["cryptoearns.com",168],["inxxx.com",169],["ipaspot.app",170],["embedwish.com",171],["filelions.live",171],["leakslove.net",171],["jenismac.com",172],["vxetable.cn",173],["jewelavid.com",174],["nizarstream.com",174],["snapwordz.com",175],["toolxox.com",175],["rl6mans.com",175],["idol69.net",175],["plumbersforums.net",176],["123movies57.online",177],["gulio.site",178],["mediaset.es",179],["izlekolik.net",180],["donghuaworld.com",181],["letsdopuzzles.com",182],["hes-goals.io",183],["pkbiosfix.com",183],["casi3.xyz",183],["rediff.com",184],["dzapk.com",185],["darknessporn.com",186],["familyporner.com",186],["freepublicporn.com",186],["pisshamster.com",186],["punishworld.com",186],["xanimu.com",186],["tainio-mania.online",187],["javhdo.net",188],["eroticmoviesonline.me",189],["teleclub.xyz",190],["ecamrips.com",191],["showcamrips.com",191],["tucinehd.com",192],["9animetv.to",193],["qiwi.gg",194],["jornadaperfecta.com",195],["loseart.com",196],["sousou-no-frieren.com",197],["unite-guide.com",198],["thebullspen.com",199],["botcomics.com",200],["cefirates.com",200],["chandlerorchards.com",200],["comicleaks.com",200],["marketdata.app",200],["monumentmetals.com",200],["tapmyback.com",200],["ping.gg",200],["revistaferramental.com.br",200],["hawpar.com",200],["alpacafinance.org",[200,201]],["nookgaming.com",200],["enkeleksamen.no",200],["kvest.ee",200],["creatordrop.com",200],["panpots.com",200],["cybernetman.com",200],["bitdomain.biz",200],["gerardbosch.xyz",200],["fort-shop.kiev.ua",200],["accuretawealth.com",200],["resourceya.com",200],["tracktheta.com",200],["camberlion.com",200],["replai.io",200],["trybawaryjny.pl",200],["segops.madisonspecs.com",200],["tt.live",201],["future-fortune.com",201],["adventuretix.com",201],["bolighub.dk",201],["panprices.com",202],["intercity.technology",202],["freelancer.taxmachine.be",202],["adria.gg",202],["fjlaboratories.com",202],["emanualonline.com",202],["abhijith.page",202],["helpmonks.com",202],["dataunlocker.com",203],["proboards.com",204],["winclassic.net",204],["pandadoc.com",206],["japscan.lol",207],["wiki.yjsnpi.nu",208],["xfreehd.com",209],["abema.tv",212]]);

const entitiesMap = new Map([["vidsrc",[3,13,54]],["mixdrop",[3,14]],["sanet",3],["sportshd",3],["wawacity",3],["720pstream",[3,54]],["pahe",[5,14]],["soap2day",5],["mhdsports",7],["mhdsportstv",7],["mhdtvsports",7],["mhdtvworld",7],["mhdtvmax",7],["mhdstream",7],["reset-scans",7],["poplinks",[7,85]],["hqq",8],["waaw",8],["pixhost",10],["viprow",[13,14,54]],["bluemediadownload",13],["bluemediafile",13],["bluemedialink",13],["bluemediastorage",13],["bluemediaurls",13],["urlbluemedia",13],["cloudvideotv",[13,54]],["123-movies",14],["123movieshd",14],["123movieshub",14],["123moviesme",14],["1337x",[14,30]],["1stream",14],["1tamilmv",14],["2ddl",14],["2umovies",14],["3hiidude",14],["4stream",14],["5movies",14],["7hitmovies",14],["9xmovie",14],["9xlinks",14],["aagmaal",[14,54]],["adblockeronstape",14],["adblockeronstreamtape",14],["adblockplustape",14],["adblockstreamtape",14],["adblockstrtape",14],["adblockstrtech",14],["adblocktape",14],["adcorto",14],["alexsports",14],["alexsportss",14],["alexsportz",14],["animepahe",14],["animesanka",14],["animixplay",14],["aniplay",14],["antiadtape",14],["asianclub",14],["ask4movie",14],["atomixhq",[14,54]],["atomohd",14],["beinmatch",[14,22]],["bhaai",14],["blurayufr",14],["buffstreams",14],["canalesportivo",14],["clickndownload",14],["clicknupload",14],["daddylive",[14,54]],["daddylivehd",[14,54]],["ddrmovies",14],["desiremovies",14],["devlib",14],["divxtotal",14],["divxtotal1",14],["dlhd",14],["dvdplay",[14,54]],["elixx",14],["enjoy4k",14],["estrenosflix",14],["estrenosflux",14],["estrenosgo",14],["f1stream",14],["fbstream",14],["file4go",14],["filmymeet",14],["filmyzilla",[14,54]],["findav",14],["findporn",14],["flixmaza",14],["flizmovies",14],["freetvsports",14],["fullymaza",14],["g3g",14],["gotxx",14],["grantorrent",14],["hdmoviesfair",[14,54]],["hdmoviesflix",14],["hiidudemoviez",14],["imgsen",14],["imgsto",14],["incest",14],["incestflix",14],["itopmusic",14],["javmost",14],["keeplinks",14],["keepvid",14],["keralahd",14],["khatrimazaful",14],["khatrimazafull",14],["leechall",14],["linkshorts",14],["mangovideo",14],["masaporn",14],["miniurl",14],["mirrorace",14],["mixdroop",14],["mkvcage",14],["mlbstream",14],["mlsbd",14],["mmsbee",14],["motogpstream",14],["movieplex",14],["movierulzlink",14],["movies123",14],["moviesflix",14],["moviesmeta",14],["moviessources",14],["moviesverse",14],["moviezwaphd",14],["mrunblock",14],["nbastream",14],["newmovierulz",14],["nflstream",14],["nhlstream",14],["noblocktape",14],["nocensor",14],["onlyfams",14],["ouo",14],["pctfenix",[14,54]],["pctnew",[14,54]],["peliculas24",14],["pelisplus",14],["piratebay",14],["plyjam",14],["plylive",14],["plyvdo",14],["pornhoarder",14],["prbay",14],["projectfreetv",14],["proxybit",14],["psarips",14],["racaty",14],["remaxhd",14],["rintor",14],["rnbxclusive",14],["rnbxclusive0",14],["rnbxclusive1",14],["rojadirecta",14],["rojadirectaenvivo",14],["rugbystreams",14],["sadisflix",14],["safetxt",14],["shadowrangers",14],["shahi4u",14],["shahid4u1",14],["shahid4uu",14],["shavetape",14],["shortearn",14],["shorten",14],["shorttey",14],["shortzzy",14],["skymovieshd",14],["socceronline",[14,54]],["softarchive",14],["sports-stream",14],["sporttuna",14],["sshhaa",14],["stapadblockuser",14],["stape",14],["stapewithadblock",14],["starmusiq",14],["strcloud",14],["streamadblocker",[14,54]],["streamadblockplus",14],["streamcdn",14],["streamhub",14],["streamsport",14],["streamta",14],["streamtape",14],["streamtapeadblockuser",14],["strikeout",14],["strtape",14],["strtapeadblock",14],["strtapeadblocker",14],["strtapewithadblock",14],["strtpe",14],["swatchseries",14],["tabooflix",14],["tennisstreams",14],["themoviesflix",14],["thepiratebay",14],["thisav",14],["tmearn",14],["toonanime",14],["torlock",14],["tormalayalam",14],["torrentz2eu",14],["tutelehd",14],["tvply",14],["u4m",14],["ufcstream",14],["unblocknow",14],["uploadbuzz",14],["usagoals",14],["vexmoviex",14],["vidclouds",14],["vidlox",14],["vipbox",[14,54]],["vipboxtv",[14,54]],["vipleague",14],["watch-series",14],["watchseries",14],["xclusivejams",14],["xmoviesforyou",14],["youdbox",14],["ytmp3eu",14],["yts-subs",14],["yts",14],["zooqle",14],["dutchycorp",15],["torrentdownload",31],["mkvcinemas",[31,54]],["dood",[34,54]],["doodstream",34],["dooood",[34,54]],["livecamrips",38],["shrinke",38],["shrinkme",38],["daddylive1",47],["esportivos",47],["poscitechs",47],["bollyflix",47],["watchomovies",[48,54]],["123movies",54],["123moviesla",54],["123movieweb",54],["2embed",54],["9xmovies",54],["adshort",54],["allmovieshub",54],["asianplay",54],["atishmkv",54],["bflix",54],["cricstream",54],["crictime",54],["databasegdriveplayer",54],["extramovies",54],["faselhd",54],["faselhds",54],["filemoon",54],["filmy",54],["filmyhit",54],["filmywap",54],["fmovies",54],["gdplayer",54],["goku",54],["gomovies",54],["gowatchseries",54],["hdfungamezz",54],["hindilinks4u",54],["hurawatch",54],["jalshamoviezhd",54],["livecricket",54],["mhdsport",54],["movies2watch",54],["moviespapa",54],["mp4moviez",54],["mydownloadtube",54],["nuroflix",54],["o2tvseries",54],["o2tvseriesz",54],["pirlotv",54],["poscitech",54],["primewire",54],["redecanais",54],["serienstream",54],["sflix",54],["shahed4u",54],["shaheed4u",54],["speedostream",54],["sportcast",54],["sportskart",54],["streamingcommunity",54],["tamilarasan",54],["tamilfreemp3songs",54],["tamilprinthd",54],["torrentdosfilmes",54],["tubemate",54],["uploadrar",54],["uqload",54],["vidcloud9",54],["vido",54],["vidoo",54],["vudeo",54],["vumoo",54],["yesmovies",54],["mydverse",66],["actvid",71],["stfly",93],["stly",93],["dropgalaxy",95],["11xmovies",98],["streamblasters",98],["kickass",99],["cine-calidad",106],["woxikon",111],["ftuapps",125],["showflix",125],["teluguflix",127]]);

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
