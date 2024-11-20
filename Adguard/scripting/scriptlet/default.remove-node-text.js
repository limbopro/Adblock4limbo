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

const argsList = [["script","DisplayAcceptableAdIfAdblocked"],["script","/==undefined.*body/"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","Reflect"],["script","document.write"],["script","deblocker"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","exdynsrv"],["script","/adb/i"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|adblock/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","popUnderUrl"],["script","Adblock"],["script","alert"],["script","document.createTextNode"],["script","/shown_at|WebAssembly/"],["script","style"],["script","shown_at"],["script","adsSrc"],["script","ai_adb"],["script","/adblock|popunder|openedPop|WebAssembly/"],["script","window.warn"],["script","/fetch|adb/i"],["script","window.open"],["script","adblockimg"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","googlesyndication"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/pop1stp|detectAdBlock/"],["script","popundersPerIP"],["script","popunder"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","catch"],["script","displayAdsV3"],["script",";}}};break;case $."],["script","adblocker"],["script","break;case"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adserverDomain|\\);break;case /"],["script","initializeInterstitial"],["script","/adbl/i"],["script","popupBackground"],["script","mdpDeblocker"],["script","Math.floor"],["script","m9-ad-modal"],["script","detectAdBlock"],["script","antiAdBlockerHandler"],["script","wpadmngr.com"],["script","Anzeige"],["script","blocking"],["script","adBlockNotice"],["script","HTMLAllCollection"],["script","advads"],["script","document.cookie"],["script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"],["script","/_0x|brave|onerror/"],["script","adb"],["script","/ABDetected|navigator.brave|fetch/"],["script","/bypass.php"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script",";break;case $."],["script","adb_detected"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","/event\\.keyCode|DisableDevtool/"],["script","/adblock|var Data.*];/"],["script","replace"],["script","{delete window["],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","charCodeAt"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","error-report.com"],["script","KCgpPT57bGV0IGU"],["script","adShield"],["script","Ad-Shield"],["script","adrecover.com"],["script","AdblockRegixFinder"],["script","/adScript|adsBlocked/"],["script","serve"],["script","/\\.length > 0\\) \\{  \\}/"],["script","/ConsoleBan|alert|AdBlocker/"],["script","runPop"],["style","body:not(.ownlist)"],["script","alert","condition","adblock"],["script","decodeURIComponent(escape"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","zfgloaded"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/modal|popupads/"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","app_checkext"],["script","clientHeight"],["script","await"],["script","pop.target"],["script","!window.adngin"],["script","axios"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","\"\").split(\",\")[4]"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","AdBlock"],["script","Symbol.iterator"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","AaDetector"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","document.head.appendChild"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","detect"],["script","fetch"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","adBlockEnabled"],["script","exception'"],["script","/catch.+catch/"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["script","selectRandomProduct"],["script","\"data-adm-url\""],["script","NREUM"]];

const hostnamesMap = new Map([["alpin.de",0],["boersennews.de",0],["chefkoch.de",0],["chip.de",0],["clever-tanken.de",0],["desired.de",0],["donnerwetter.de",0],["fanfiktion.de",0],["focus.de",0],["formel1.de",0],["frustfrei-lernen.de",0],["gewinnspiele.tv",0],["giga.de",0],["gut-erklaert.de",0],["kino.de",0],["messen.de",0],["nickles.de",0],["nordbayern.de",0],["spielfilm.de",0],["teltarif.de",0],["unsere-helden.com",0],["weltfussball.at",0],["watson.de",0],["moviepilot.de",[0,4]],["mactechnews.de",0],["sport1.de",0],["aupetitparieur.com",1],["allthingsvegas.com",1],["100percentfedup.com",1],["beforeitsnews.com",1],["concomber.com",1],["conservativebrief.com",1],["conservativefiringline.com",1],["dailylol.com",1],["funnyand.com",1],["letocard.fr",1],["mamieastuce.com",1],["meilleurpronostic.fr",1],["patriotnationpress.com",1],["toptenz.net",1],["vitamiiin.com",1],["writerscafe.org",1],["populist.press",1],["dailytruthreport.com",1],["livinggospeldaily.com",1],["first-names-meanings.com",1],["welovetrump.com",1],["thehayride.com",1],["thelibertydaily.com",1],["thepoke.co.uk",1],["thepolitistick.com",1],["theblacksphere.net",1],["shark-tank.com",1],["naturalblaze.com",1],["greatamericanrepublic.com",1],["dailysurge.com",1],["truthlion.com",1],["flagandcross.com",1],["westword.com",1],["republicbrief.com",1],["freedomfirstnetwork.com",1],["phoenixnewtimes.com",1],["designbump.com",1],["clashdaily.com",1],["madworldnews.com",1],["reviveusa.com",1],["sonsoflibertymedia.com",1],["thedesigninspiration.com",1],["videogamesblogger.com",1],["protrumpnews.com",1],["thepalmierireport.com",1],["kresy.pl",1],["thepatriotjournal.com",1],["gellerreport.com",1],["thegatewaypundit.com",1],["wltreport.com",1],["miaminewtimes.com",1],["politicalsignal.com",1],["rightwingnews.com",1],["bigleaguepolitics.com",1],["comicallyincorrect.com",1],["web.de",2],["skidrowreloaded.com",[3,14]],["1stream.eu",3],["4kwebplay.xyz",3],["antennasports.ru",3],["buffsports.me",[3,53]],["buffstreams.app",3],["claplivehdplay.ru",[3,60]],["cracksports.me",[3,13]],["euro2024direct.ru",3],["ext.to",3],["eztv.tf",3],["eztvx.to",3],["kenitv.me",[3,13,14]],["lewblivehdplay.ru",[3,60]],["mlbbite.net",3],["mlbstreams.ai",3],["qatarstreams.me",[3,13]],["qqwebplay.xyz",[3,60]],["rnbastreams.com",3],["soccerworldcup.me",[3,13]],["topstreams.info",3],["totalsportek.to",3],["viwlivehdplay.ru",3],["vidco.pro",[3,53]],["embedsports.me",[3,99]],["embedstream.me",[3,13,14,53,99]],["jumbtv.com",[3,99]],["reliabletv.me",[3,99]],["topembed.pw",[3,60,97]],["crackstreamer.net",3],["methstreamer.com",3],["yts.mx",6],["magesypro.com",7],["pinsystem.co.uk",7],["elrellano.com",7],["tinyppt.com",7],["bharathwick.com",7],["descargaspcpro.net",7],["dx-tv.com",7],["rt3dmodels.com",7],["plc4me.com",7],["blisseyhusbands.com",7],["madaradex.org",7],["trigonevo.com",7],["franceprefecture.fr",7],["jazbaat.in",7],["aipebel.com",7],["audiotools.blog",7],["veganab.co",7],["camdigest.com",7],["learnmany.in",7],["amanguides.com",[7,81]],["highkeyfinance.com",[7,81]],["appkamods.com",7],["techacode.com",7],["djqunjab.in",7],["downfile.site",7],["expertvn.com",7],["trangchu.news",7],["3dmodelshare.org",7],["nulleb.com",7],["asiaon.top",7],["coursesghar.com",7],["thecustomrom.com",7],["snlookup.com",7],["bingotingo.com",7],["ghior.com",7],["3dmili.com",7],["karanpc.com",7],["plc247.com",7],["apkdelisi.net",7],["javindo.eu.org",7],["chindohot.site",7],["freepasses.org",7],["tomarnarede.pt",7],["basketballbuzz.ca",7],["dribbblegraphics.com",7],["kemiox.com",7],["checkersmenu.us",7],["teksnologi.com",7],["upornia.com",9],["eporner.com",11],["javtiful.com",[11,14]],["germancarforum.com",12],["innateblogger.com",12],["cybercityhelp.in",12],["mlbbox.me",13],["streamnoads.com",[13,14,53]],["bowfile.com",13],["cloudvideo.tv",[13,53]],["coloredmanga.com",13],["exeo.app",13],["hiphopa.net",[13,14]],["megaup.net",13],["olympicstreams.co",[13,53]],["tv247.us",[13,14]],["uploadhaven.com",13],["userscloud.com",[13,53]],["mdfx9dc8n.net",14],["mdzsmutpcvykb.net",14],["mixdrop21.net",14],["mixdropjmk.pw",14],["1337x.ninjaproxy1.com",14],["y2tube.pro",14],["fastreams.com",14],["redittsports.com",14],["sky-sports.store",14],["streamsoccer.site",14],["tntsports.store",14],["wowstreams.co",14],["123movies4u.site",14],["1337xporn.com",14],["141jav.com",14],["1bit.space",14],["1bitspace.com",14],["38dh2.top",14],["3dporndude.com",14],["4archive.org",14],["4horlover.com",14],["560pmovie.com",14],["60fps.xyz",14],["85tube.com",14],["85videos.com",14],["8xlinks.click",14],["a2zcrackworld.com",14],["aazzz.xyz",14],["acefile.co",14],["actusports.eu",14],["adclickersbot.com",14],["adricami.com",14],["adslink.pw",14],["adultstvlive.com",14],["adz7short.space",14],["aeblender.com",14],["ahdafnews.blogspot.com",14],["ak47sports.com",14],["akuma.moe",14],["allplayer.tk",14],["allstreaming.online",14],["amadoras.cf",14],["amadorasdanet.shop",14],["amateurblog.tv",14],["androidadult.com",14],["anhsexjav.xyz",14],["anidl.org",14],["anime-loads.org",14],["animeblkom.net",14],["animefire.plus",14],["animelek.me",14],["animespire.net",14],["animestotais.xyz",14],["animeyt.es",14],["anroll.net",14],["anymoviess.xyz",14],["aotonline.org",14],["asenshu.com",14],["asialiveaction.com",14],["asianclipdedhd.net",14],["askim-bg.com",14],["asumsikedaishop.com",14],["avcrempie.com",14],["avseesee.com",14],["gettapeads.com",14],["backfirstwo.com",14],["bajarjuegospcgratis.com",14],["balkanportal.net",14],["balkanteka.net",14],["bdnewszh.com",[14,53]],["belowporn.com",14],["bestclaimtrx.xyz",14],["bestgirlsexy.com",14],["bestnhl.com",14],["bestporn4free.com",14],["bestporncomix.com",14],["bet36.es",14],["bikinitryon.net",14],["birdurls.com",14],["bitsearch.to",14],["blackcockadventure.com",14],["blackcockchurch.org",14],["blackporncrazy.com",14],["blizzboygames.net",14],["blizzpaste.com",14],["blkom.com",14],["blog-peliculas.com",14],["blogtrabalhista.com",14],["bobsvagene.club",14],["bolly4umovies.click",14],["bonusharian.pro",14],["brilian-news.id",14],["brupload.net",14],["bucitana.com",14],["cablegratis.online",14],["camchickscaps.com",14],["camgirlcum.com",14],["camgirls.casa",14],["cashurl.in",14],["castingx.net",14],["ccurl.net",[14,53]],["celebrity-leaks.net",14],["cgpelis.net",14],["charexempire.com",14],["choosingnothing.com",14],["clasico.tv",14],["clik.pw",14],["coin-free.com",[14,78]],["coins100s.fun",14],["comicsmanics.com",14],["compucalitv.com",14],["coolcast2.com",14],["cosplaytab.com",14],["countylocalnews.com",14],["cpmlink.net",14],["crackstreamshd.click",14],["crespomods.com",14],["crisanimex.com",14],["crunchyscan.fr",14],["cuevana3.fan",14],["cuevana3hd.com",14],["cumception.com",14],["cutpaid.com",14],["cypherscans.xyz",[14,53]],["dailyuploads.net",14],["datawav.club",14],["daughtertraining.com",14],["deepgoretube.site",14],["deltabit.co",14],["deporte-libre.top",14],["depvailon.com",14],["derleta.com",14],["desivdo.com",14],["desixx.net",14],["detikkebumen.com",14],["deutschepornos.me",14],["diasoft.xyz",14],["directupload.net",14],["diskusscan.com",14],["dixva.com",14],["doctormalay.com",14],["dofusports.xyz",14],["dogemate.com",14],["doods.cam",14],["doodskin.lat",14],["downloadrips.com",14],["downvod.com",14],["dphunters.mom",14],["dragontranslation.com",14],["duddes.xyz",14],["dvdfullestrenos.com",14],["easylinks.in",14],["ebookbb.com",14],["ebookhunter.net",14],["egyanime.com",14],["egygost.com",14],["egyshare.cc",14],["ekasiwap.com",14],["electro-torrent.pl",14],["elil.cc",14],["embed4u.xyz",14],["eplayer.click",14],["erovoice.us",14],["eroxxx.us",14],["estrenosdoramas.net",14],["everia.club",14],["everythinginherenet.blogspot.com",14],["extrafreetv.com",14],["extremotvplay.com",14],["fapinporn.com",14],["fapptime.com",14],["fashionblog.tv",14],["fastreams.live",14],["faucethero.com",14],["fembed.com",14],["femdom-joi.com",14],["fileone.tv",14],["film1k.com",14],["filmeonline2023.net",14],["filmesonlinex.org",14],["filmesonlinexhd.biz",[14,53]],["filmovitica.com",14],["filmymaza.blogspot.com",14],["filthy.family",14],["firstmovies.to",14],["fixfinder.click",14],["flostreams.xyz",14],["flyfaucet.com",14],["footyhunter.lol",14],["footyhunter3.xyz",[14,53]],["forex-golds.com",14],["forex-trnd.com",14],["forumchat.club",14],["forumlovers.club",14],["freemoviesonline.biz",14],["freeomovie.co.in",14],["freeomovie.to",14],["freeporncomic.net",14],["freepornhdonlinegay.com",14],["freeproxy.io",14],["freeuse.me",14],["freeusexporn.com",14],["fsicomics.com",14],["gambarbogel.xyz",14],["gamepcfull.com",14],["gameronix.com",14],["gamesfullx.com",14],["gameshdlive.net",14],["gameshdlive.xyz",14],["gamesmountain.com",14],["gamesrepacks.com",14],["gamingguru.fr",14],["gamovideo.com",14],["garota.cf",14],["gaydelicious.com",14],["gaypornmasters.com",14],["gaysex69.net",14],["gemstreams.com",14],["get-to.link",14],["girlscanner.org",14],["giurgiuveanul.ro",14],["gledajcrtace.xyz",14],["gocast2.com",14],["gomo.to",14],["gostosa.cf",14],["gtlink.co",14],["gwiazdypornosow.pl",14],["haho.moe",14],["hatsukimanga.com",14],["hayhd.net",14],["hdsaprevodom.com",14],["hdstreamss.club",14],["hentais.tube",14],["hentaistream.co",14],["hentaitk.net",14],["hentaitube.online",14],["hentaiworld.tv",14],["hesgoal.tv",14],["hexupload.net",14],["hhkungfu.tv",14],["highlanderhelp.com",14],["hindimean.com",14],["hindimovies.to",[14,53]],["hiperdex.com",14],["hispasexy.org",14],["hitprn.com",14],["hoca4u.com",14],["hollymoviehd.cc",14],["hoodsite.com",14],["hopepaste.download",14],["hornylips.com",14],["hotgranny.live",14],["hotmama.live",14],["hqcelebcorner.net",14],["huren.best",14],["hwnaturkya.com",[14,53]],["hxfile.co",[14,53]],["igfap.com",14],["ihdstreams.xyz",14],["iklandb.com",14],["illink.net",14],["imgkings.com",14],["imgsex.xyz",14],["imx.to",14],["influencersgonewild.org",14],["infosgj.free.fr",14],["investnewsbrazil.com",14],["itdmusics.com",14],["itsuseful.site",14],["itunesfre.com",14],["iwatchfriendsonline.net",[14,141]],["jackstreams.com",14],["jatimupdate24.com",14],["jav-fun.cc",14],["jav-noni.cc",14],["jav-scvp.com",14],["javcl.com",14],["javf.net",14],["javhay.net",14],["javhoho.com",14],["javhun.com",14],["javleak.com",14],["javporn.best",14],["javsex.to",14],["jimdofree.com",14],["jiofiles.org",14],["jorpetz.com",14],["journalyc.online",14],["jp-films.com",14],["jpop80ss3.blogspot.com",14],["jpopsingles.eu",[14,32]],["kantotflix.net",14],["kantotinyo.com",14],["kaoskrew.org",14],["kaplog.com",14],["keralatvbox.com",14],["kickassanimes.io",14],["kimochi.info",14],["kimochi.tv",14],["kinemania.tv",14],["konstantinova.net",14],["koora-online.live",14],["kunmanga.com",14],["kutmoney.com",14],["kwithsub.com",14],["ladangreceh.xyz",14],["lat69.me",14],["latinblog.tv",14],["latinomegahd.net",14],["lazyfaucet.com",14],["leechpremium.link",14],["legendas.dev",14],["legendei.net",14],["lightdlmovies.blogspot.com",14],["lighterlegend.com",14],["linclik.com",14],["linkebr.com",14],["linkrex.net",14],["links.worldfree4u-lol.online",14],["linksfy.co",14],["lody.ink",14],["lovesomecommunity.com",14],["lulu.st",14],["lulustream.com",[14,53,97]],["luluvdo.com",[14,53]],["luzcameraeacao.shop",14],["manga-oni.com",14],["mangaboat.com",14],["mangagenki.me",14],["mangahere.onl",14],["mangaweb.xyz",14],["mangoporn.net",14],["manhwahentai.me",14],["masahub.com",14],["masahub.net",14],["maturegrannyfuck.com",14],["mdy48tn97.com",14],["mediapemersatubangsa.com",14],["mega-mkv.com",14],["megapastes.com",14],["megapornpics.com",14],["messitv.net",14],["meusanimes.net",14],["milfmoza.com",14],["milfzr.com",14],["millionscast.com",14],["mimaletamusical.blogspot.com",14],["mitly.us",14],["mkv-pastes.com",14],["modb.xyz",14],["monaskuliner.ac.id",14],["moredesi.com",14],["movgotv.net",14],["movi.pk",14],["movierr.online",14],["movieswbb.com",14],["moviewatch.com.pk",14],["mp4upload.com",14],["mrskin.live",14],["multicanaistv.com",14],["mundowuxia.com",14],["myeasymusic.ir",14],["myonvideo.com",14],["myyouporn.com",14],["narutoget.info",14],["naughtypiss.com",14],["nerdiess.com",14],["new-fs.eu",14],["newtorrentgame.com",14],["nflstreams.me",14],["niaomea.me",[14,53]],["nicekkk.com",14],["nicesss.com",14],["nlegs.com",14],["nolive.me",[14,53]],["notformembersonly.com",14],["novamovie.net",14],["novelpdf.xyz",14],["novelssites.com",[14,53]],["novelup.top",14],["nsfwr34.com",14],["nu6i-bg-net.com",14],["nudebabesin3d.com",14],["nukedfans.com",14],["nuoga.eu",14],["nzbstars.com",14],["ohjav.com",14],["ojearnovelas.com",14],["okanime.xyz",14],["olarixas.xyz",14],["oldbox.cloud",14],["olweb.tv",14],["olympicstreams.me",14],["on9.stream",14],["oncast.xyz",14],["onepiece-mangaonline.com",14],["onifile.com",14],["onionstream.live",14],["onlinesaprevodom.net",14],["onlyfullporn.video",14],["onplustv.live",14],["originporn.com",14],["ovagames.com",14],["ovamusic.com",14],["owllink.net",14],["packsporn.com",14],["pahaplayers.click",14],["palimas.org",14],["pandafiles.com",14],["papahd.club",14],["papahd1.xyz",14],["password69.com",14],["pastemytxt.com",14],["payskip.org",14],["peeplink.in",14],["peliculasmx.net",14],["pervertgirlsvideos.com",14],["pervyvideos.com",14],["phim12h.com",14],["picdollar.com",14],["pickteenz.com",14],["pics4you.net",14],["picsxxxporn.com",14],["pinayscandalz.com",14],["pinkueiga.net",14],["piratefast.xyz",14],["piratehaven.xyz",14],["pirateiro.com",14],["pirlotvonline.org",14],["playtube.co.za",14],["plugintorrent.com",14],["pmvzone.com",14],["porndish.com",14],["pornez.net",14],["pornfetishbdsm.com",14],["pornfits.com",14],["pornhd720p.com",14],["pornobr.club",14],["pornobr.ninja",14],["pornodominicano.net",14],["pornofaps.com",14],["pornoflux.com",14],["pornotorrent.com.br",14],["pornredit.com",14],["pornstarsyfamosas.es",14],["pornstreams.co",14],["porntn.com",14],["pornxbit.com",14],["pornxday.com",14],["portaldasnovinhas.shop",14],["portugues-fcr.blogspot.com",14],["poscishd.online",14],["poscitesch.com",[14,53]],["poseyoung.com",14],["pover.org",14],["proxyninja.org",14],["pubfilmz.com",14],["publicsexamateurs.com",14],["punanihub.com",14],["putlocker5movies.org",14],["pxxbay.com",14],["r18.best",14],["ragnaru.net",14],["rapbeh.net",14],["rapelust.com",14],["rapload.org",14],["read-onepiece.net",14],["retro-fucking.com",14],["retrotv.org",14],["robaldowns.com",14],["rockdilla.com",14],["rojadirectatvenvivo.com",14],["rojitadirecta.blogspot.com",14],["romancetv.site",14],["rsoccerlink.site",14],["rule34.club",14],["rule34hentai.net",14],["rumahbokep-id.com",14],["safego.cc",14],["safestream.cc",14],["sakurafile.com",14],["satoshi-win.xyz",14],["scat.gold",14],["scatfap.com",14],["scatkings.com",14],["scnlog.me",14],["scripts-webmasters.net",14],["serie-turche.com",14],["serijefilmovi.com",14],["sexcomics.me",14],["sexdicted.com",14],["sexgay18.com",14],["sexofilm.co",14],["sextgem.com",14],["sextubebbw.com",14],["sgpics.net",14],["shadowrangers.live",14],["shahee4u.cam",14],["shahiid-anime.net",14],["shemale6.com",14],["shinden.pl",14],["short.es",14],["showmanga.blog.fc2.com",14],["shrt10.com",14],["shurt.pw",14],["sideplusleaks.net",14],["silverblog.tv",14],["silverpic.com",14],["sinhalasub.life",14],["sinsitio.site",14],["sinvida.me",14],["skidrowcpy.com",14],["skidrowfull.com",14],["slut.mom",14],["smallencode.me",14],["smoner.com",14],["smplace.com",14],["soccerinhd.com",[14,53]],["socceron.name",14],["softairbay.com",14],["sokobj.com",14],["songsio.com",14],["souexatasmais.com",14],["sportbar.live",14],["sportea.online",14],["sportskart.xyz",14],["sportstream1.cfd",14],["srt.am",14],["srts.me",14],["stakes100.xyz",14],["stbemuiptv.com",14],["stockingfetishvideo.com",14],["stream.crichd.vip",14],["stream.lc",14],["stream25.xyz",14],["streambee.to",14],["streamcenter.pro",14],["streamers.watch",14],["streamgo.to",14],["streamkiste.tv",14],["streamoporn.xyz",14],["streamoupload.xyz",14],["streamservicehd.click",14],["streamvid.net",[14,23]],["subtitleporn.com",14],["subtitles.cam",14],["suicidepics.com",14],["supertelevisionhd.com",14],["supexfeeds.com",14],["swiftload.io",14],["swzz.xyz",14],["sxnaar.com",14],["tabooporns.com",14],["taboosex.club",14],["tapeantiads.com",14],["tapeblocker.com",14],["tapenoads.com",14],["tapewithadblock.org",[14,202]],["teamos.xyz",14],["teen-wave.com",14],["teenporncrazy.com",14],["telegramgroups.xyz",14],["telenovelasweb.com",14],["tensei-shitara-slime-datta-ken.com",14],["tfp.is",14],["tgo-tv.co",[14,53]],["thaihotmodels.com",14],["theblueclit.com",14],["thebussybandit.com",14],["thedaddy.to",[14,57]],["theicongenerator.com",14],["thelastdisaster.vip",14],["thepiratebay0.org",14],["thepiratebay10.info",14],["thesexcloud.com",14],["thothub.today",14],["tightsexteens.com",14],["tojav.net",14],["tokyoblog.tv",14],["tonnestreamz.xyz",14],["top16.net",14],["topvideosgay.com",14],["torrage.info",14],["torrents.vip",14],["torrsexvid.com",14],["tpb-proxy.xyz",14],["trannyteca.com",14],["trendytalker.com",14],["tumanga.net",14],["turbogvideos.com",14],["turbovid.me",14],["turkishseriestv.org",14],["turksub24.net",14],["tutele.sx",14],["tutelehd3.xyz",14],["tvglobe.me",14],["tvpclive.com",14],["tvs-widget.com",14],["tvseries.video",14],["ucptt.com",14],["ufaucet.online",14],["ufcfight.online",14],["uhdgames.xyz",14],["ultrahorny.com",14],["ultraten.net",14],["unblockweb.me",14],["underhentai.net",14],["uniqueten.net",14],["upbaam.com",14],["upstream.to",14],["valeriabelen.com",14],["verdragonball.online",14],["vfxmed.com",14],["video.az",14],["videostreaming.rocks",14],["videowood.tv",14],["vidorg.net",14],["vidtapes.com",14],["vidz7.com",14],["vikistream.com",14],["vikv.net",14],["virpe.cc",14],["visifilmai.org",14],["viveseries.com",14],["vladrustov.sx",14],["volokit2.com",[14,57]],["vstorrent.org",14],["w-hentai.com",14],["watchaccordingtojimonline.com",14],["watchbrooklynnine-nine.com",14],["watchdowntonabbeyonline.com",14],["watchelementaryonline.com",14],["watcheronline.net",14],["watchgleeonline.com",14],["watchhowimetyourmother.online",14],["watchkobestreams.info",14],["watchlostonline.net",14],["watchlouieonline.com",14],["watchjavidol.com",14],["watchmadmenonline.com",14],["watchmonkonline.com",14],["watchonceuponatimeonline.com",14],["watchparksandrecreation.net",14],["watchprettylittleliarsonline.com",14],["watchrulesofengagementonline.com",14],["watchthekingofqueens.com",14],["watchthemiddleonline.com",14],["watchtvchh.xyz",14],["webcamrips.com",14],["wickedspot.org",14],["wincest.xyz",14],["witanime.best",14],["wolverdon.fun",14],["wolverdonx.com",14],["wordcounter.icu",14],["worldcupstream.pm",14],["worldmovies.store",14],["worldstreams.click",14],["wpdeployit.com",14],["wqstreams.tk",14],["wwwsct.com",14],["xanimeporn.com",14],["xblog.tv",14],["xn--verseriesespaollatino-obc.online",14],["xn--xvideos-espaol-1nb.com",14],["xpornium.net",14],["xsober.com",14],["xvip.lat",14],["xxgasm.com",14],["xxvideoss.org",14],["xxx18.uno",14],["xxxdominicana.com",14],["xxxfree.watch",14],["xxxmax.net",14],["xxxwebdlxxx.top",14],["xxxxvideo.uno",14],["y2b.wiki",14],["yabai.si",14],["yadixv.com",14],["yayanimes.net",14],["yeshd.net",14],["yodbox.com",14],["youjax.com",14],["youpits.xyz",14],["yourdailypornvideos.ws",14],["yourupload.com",14],["ytstv.me",14],["ytstvmovies.co",14],["ytstvmovies.xyz",14],["ytsyify.co",14],["ytsyifymovie.com",14],["zerion.cc",14],["zerocoin.top",14],["zitss.xyz",14],["zpaste.net",14],["zplayer.live",14],["faucet.ovh",15],["oko.sh",[16,88,89]],["variety.com",17],["gameskinny.com",17],["deadline.com",17],["washingtonpost.com",18],["bigbtc.win",19],["cryptofun.space",19],["gosexpod.com",20],["sexo5k.com",21],["truyen-hentai.com",21],["theshedend.com",23],["eracast.cc",23],["zeroupload.com",23],["securenetsystems.net",23],["miniwebtool.com",23],["bchtechnologies.com",23],["spiegel.de",24],["jacquieetmichel.net",25],["hausbau-forum.de",26],["kiemlua.com",26],["appnee.com",27],["apkmirror.com",[28,110]],["smashystream.com",29],["cineb.rs",31],["hiraethtranslation.com",32],["fcportables.com",33],["repack-games.com",33],["pawastreams.info",33],["truyentranhfull.net",33],["d0000d.com",34],["d000d.com",34],["d0o0d.com",34],["do0od.com",34],["doods.pro",34],["ds2play.com",34],["ds2video.com",34],["freethesaurus.com",35],["thefreedictionary.com",35],["onlyfaucet.com",36],["smutty.com",37],["e-sushi.fr",37],["freeadultcomix.com",37],["down.dataaps.com",37],["filmweb.pl",37],["visionpapers.org",38],["fdownloader.net",39],["thehackernews.com",40],["mielec.pl",41],["camsrip.com",42],["help.sakarnewz.com",42],["beatsnoop.com",42],["fetchpik.com",42],["hackerranksolution.in",42],["treasl.com",43],["mrbenne.com",44],["cnpics.org",45],["ovabee.com",45],["porn4f.com",45],["cnxx.me",45],["ai18.pics",45],["cuervotv.me",[46,53]],["aliezstream.pro",46],["daddy-stream.xyz",46],["instream.pro",46],["mylivestream.pro",46],["powerover.online",46],["sportea.link",46],["sportsurge.stream",46],["ufckhabib.com",46],["ustream.pro",46],["papa4k.online",46],["nontongo.win",46],["g-porno.com",46],["g-streaming.com",46],["giga-streaming.com",46],["educ4m.com",46],["fromwatch.com",46],["visualnewshub.com",46],["rgshows.me",46],["streamhd247.info",46],["nowlive1.me",46],["buzter.xyz",46],["gamehdlive.online",46],["hdfungamezz.xyz",46],["kingstreamz.lol",46],["masterpro.club",46],["papahd.co",46],["sportos.co",46],["valhallas.click",46],["andhrafriends.com",47],["freeroms.com",47],["soap2day-online.com",47],["sportsonline.si",48],["fiuxy2.co",49],["animeunity.to",50],["auto-crypto.click",51],["iconicblogger.com",51],["tokopedia.com",52],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",53],["adsh.cc",53],["afilmyhouse.blogspot.com",53],["ak.sv",53],["animesultra.com",53],["api.webs.moe",53],["apkmody.io",53],["attvideo.com",53],["backfirstwo.site",[53,171]],["crazyblog.in",53],["divicast.com",53],["dlhd.so",53],["embed.meomeo.pw",53],["filmeserialeonline.org",53],["flexyhit.com",53],["foreverwallpapers.com",53],["french-streams.cc",53],["fslinks.org",53],["fstream365.com",53],["hdtoday.to",53],["hinatasoul.com",53],["igg-games.com",53],["infinityscans.net",53],["infinityscans.xyz",53],["mangareader.to",53],["membed.net",53],["mgnetu.com",53],["mp3juice.info",53],["mp3juices.cc",53],["myflixerz.to",53],["nowmetv.net",53],["nowsportstv.com",53],["nxbrew.com",53],["oii.io",53],["paidshitforfree.com",53],["pepperlive.info",53],["playertv.net",53],["putlocker68.com",53],["roystream.com",53],["rssing.com",53],["s.to",53],["share.filesh.site",53],["sharkfish.xyz",53],["skidrowcodex.net",53],["smartermuver.com",53],["sports-stream.site",53],["stream4free.live",53],["streamed.su",53],["tamilmobilemovies.in",53],["tapeadsenjoyer.com",53],["thewatchseries.live",53],["tnmusic.in",53],["travelplanspro.com",53],["tusfiles.com",53],["tutlehd4.com",53],["twstalker.com",53],["vid-guard.com",53],["video-leech.xyz",53],["vidsaver.net",53],["vidspeeds.com",53],["viralitytoday.com",53],["voiranime.stream",53],["watchdoctorwhoonline.com",53],["watchserie.online",53],["webhostingpost.com",53],["woxikon.in",53],["www-y2mate.com",53],["ylink.bid",53],["ytix.xyz",53],["remixsearch.net",54],["remixsearch.es",54],["onlineweb.tools",54],["sharing.wtf",54],["2024tv.ru",55],["xnxxcom.xyz",56],["sportsurge.net",57],["joyousplay.xyz",57],["quest4play.xyz",[57,60]],["generalpill.net",57],["moneycontrol.com",58],["hesgoal-tv.io",59],["hesgoal-vip.io",59],["intro-hd.net",59],["monacomatin.mc",59],["nodo313.net",59],["cookiewebplay.xyz",60],["ilovetoplay.xyz",60],["streamcaster.live",60],["weblivehdplay.ru",60],["codec.kyiv.ua",61],["kimcilonlyofc.com",61],["unofficialtwrp.com",61],["oaaxpgp3.xyz",62],["m9.news",63],["sexwebvideo.com",64],["sexwebvideo.net",64],["pig69.com",64],["cosplay18.pics",64],["zeemoontv-24.blogspot.com",65],["stitichsports.com",65],["tinys.click",65],["answerpython.com",65],["gsm-solution.com",65],["h-donghua.com",65],["hindisubbedacademy.com",65],["linksdramas2.blogspot.com",65],["pkgovjobz.com",65],["ripexbooster.xyz",65],["serial4.com",65],["serial412.blogspot.com",65],["sigmalinks.in",65],["tutorgaming.com",65],["everydaytechvams.com",65],["dipsnp.com",65],["cccam4sat.com",65],["x-video.tube",66],["rahim-soft.com",66],["callofwar.com",67],["secondhandsongs.com",68],["nudezzers.org",69],["nohost.one",70],["zoechip.com",70],["3rooodnews.net",71],["xxxbfvideo.net",72],["filmy4wap.co.in",73],["gameshop4u.com",74],["regenzi.site",74],["pcgeeks-games.com",75],["easymc.io",75],["newscon.org",75],["yunjiema.top",75],["tea-coffee.net",76],["spatsify.com",76],["newedutopics.com",76],["getviralreach.in",76],["edukaroo.com",76],["funkeypagali.com",76],["careersides.com",76],["nayisahara.com",76],["wikifilmia.com",76],["infinityskull.com",76],["viewmyknowledge.com",76],["iisfvirtual.in",76],["starxinvestor.com",76],["jkssbalerts.com",76],["kenzo-flowertag.com",77],["mdn.lol",77],["btcbitco.in",78],["btcsatoshi.net",78],["cempakajaya.com",78],["crypto4yu.com",78],["gainl.ink",78],["manofadan.com",78],["readbitcoin.org",78],["wiour.com",78],["kienthucrangmieng.com",78],["tremamnon.com",78],["btc25.org",78],["tron-free.com",78],["bitsmagic.fun",78],["ourcoincash.xyz",78],["hynews.biz",78],["blog.cryptowidgets.net",79],["blog.insurancegold.in",79],["blog.wiki-topia.com",79],["blog.coinsvalue.net",79],["blog.cookinguide.net",79],["blog.freeoseocheck.com",79],["aylink.co",80],["sugarona.com",81],["nishankhatri.xyz",81],["cety.app",82],["exego.app",82],["cutlink.net",82],["cutsy.net",82],["cutyurls.com",82],["cutty.app",82],["cutnet.net",82],["aiimgvlog.fun",83],["appsbull.com",84],["diudemy.com",84],["maqal360.com",84],["mphealth.online",84],["makefreecallsonline.com",84],["androjungle.com",84],["bookszone.in",84],["drakescans.com",84],["shortix.co",84],["msonglyrics.com",84],["app-sorteos.com",84],["bokugents.com",84],["client.pylexnodes.net",84],["btvplus.bg",84],["blog24.me",[85,86]],["coingraph.us",87],["impact24.us",87],["tvi.la",[88,89]],["iir.la",[88,89]],["tii.la",[88,89]],["ckk.ai",[88,89]],["oei.la",[88,89]],["lnbz.la",[88,89]],["oii.la",[88,89]],["tpi.li",[88,89]],["atglinks.com",90],["kbconlinegame.com",91],["hamrojaagir.com",91],["odijob.com",91],["blogesque.net",92],["bookbucketlyst.com",92],["explorosity.net",92],["optimizepics.com",92],["torovalley.net",92],["travize.net",92],["trekcheck.net",92],["metoza.net",92],["techlike.net",92],["snaplessons.net",92],["atravan.net",92],["transoa.net",92],["techmize.net",92],["crenue.net",92],["simana.online",93],["fooak.com",93],["joktop.com",93],["evernia.site",93],["falpus.com",93],["financemonk.net",94],["cgtips.org",95],["emuenzen.de",96],["buffshub.stream",97],["cinego.tv",97],["sportshub.stream",97],["topcinema.cam",97],["unblocked.id",100],["listendata.com",101],["7xm.xyz",101],["fastupload.io",101],["azmath.info",101],["wouterplanet.com",102],["androidacy.com",103],["pillowcase.su",104],["veryfreeporn.com",105],["theporngod.com",105],["besthdgayporn.com",106],["drivenime.com",106],["javup.org",106],["shemaleup.net",106],["austiblox.net",107],["btcbunch.com",108],["teachoo.com",109],["automobile-catalog.com",[110,111]],["motorbikecatalog.com",[110,111]],["blog.esuteru.com",110],["blog.livedoor.jp",[110,207]],["itainews.com",110],["jin115.com",110],["allthetests.com",110],["javatpoint.com",110],["globalrph.com",110],["carscoops.com",110],["crosswordsolver.com",110],["cruciverba.it",110],["ff14net.2chblog.jp",110],["heureka.cz",110],["indiatimes.com",110],["laleggepertutti.it",110],["meeco.kr",110],["mirrored.to",110],["motscroises.fr",110],["news4vip.livedoor.biz",110],["oeffnungszeitenbuch.de",110],["onecall2ch.com",110],["oraridiapertura24.it",110],["palabr.as",110],["petitfute.com",110],["rabitsokuhou.2chblog.jp",110],["rostercon.com",110],["sourceforge.net",110],["suzusoku.blog.jp",110],["the-crossword-solver.com",110],["thestockmarketwatch.com",110],["wfmz.com",110],["word-grabber.com",110],["wort-suchen.de",110],["freemcserver.net",110],["golf-live.at",110],["kreuzwortraetsel.de",110],["raetsel-hilfe.de",110],["verkaufsoffener-sonntag.com",110],["horairesdouverture24.fr",110],["nyitvatartas24.hu",110],["modhub.us",110],["yugioh-starlight.com",110],["winfuture.de",110],["talkwithstranger.com",110],["topstarnews.net",110],["islamicfinder.org",110],["secure-signup.net",110],["dramabeans.com",110],["manta.com",110],["tportal.hr",110],["tvtropes.org",110],["wouldurather.io",110],["convertcase.net",110],["interfootball.co.kr",111],["a-ha.io",111],["cboard.net",111],["jjang0u.com",111],["joongdo.co.kr",111],["viva100.com",111],["gamingdeputy.com",111],["thesaurus.net",111],["alle-tests.nl",111],["maketecheasier.com",111],["allthekingz.com",111],["tweaksforgeeks.com",111],["m.inven.co.kr",111],["mlbpark.donga.com",111],["meconomynews.com",111],["brandbrief.co.kr",111],["motorgraph.com",111],["worldhistory.org",112],["lovelive-petitsoku.com",113],["pravda.com.ua",113],["slobodnadalmacija.hr",114],["bitcotasks.com",115],["hilites.today",116],["udvl.com",117],["www.chip.de",118],["topsporter.net",119],["sportshub.to",119],["streamcheck.link",120],["myanimelist.net",121],["bitcosite.com",122],["bitzite.com",122],["hentaiseason.com",123],["twobluescans.com",123],["hacoos.com",125],["bondagevalley.cc",126],["zefoy.com",127],["vidello.net",128],["resizer.myct.jp",129],["gametohkenranbu.sakuraweb.com",130],["jisakuhibi.jp",131],["rank1-media.com",131],["lifematome.blog",132],["fm.sekkaku.net",133],["free-avx.jp",134],["dvdrev.com",135],["betweenjpandkr.blog",136],["nft-media.net",137],["ghacks.net",138],["leak.sx",139],["paste.bin.sx",139],["pornleaks.in",139],["songspk2.info",140],["nectareousoverelate.com",142],["khoaiphim.com",143],["haafedk2.com",144],["fordownloader.com",144],["jovemnerd.com.br",145],["nicomanga.com",146],["totalcsgo.com",147],["vivamax.asia",148],["manysex.com",149],["gaminginfos.com",150],["tinxahoivn.com",151],["automoto.it",152],["codelivly.com",153],["lordchannel.com",154],["touguatize.monster",155],["client.falixnodes.net",156],["novelhall.com",157],["abc17news.com",158],["bailiwickexpress.com",158],["barnsleychronicle.com",158],["chaptercheats.com",158],["commercialobserver.com",158],["competentedigitale.ro",158],["footwearnews.com",158],["freeconvert.com",158],["frogsandsnailsandpuppydogtail.com",158],["fsm-media.com",158],["funtasticlife.com",158],["fwmadebycarli.com",158],["gamerant.com",158],["gfinityesports.com",158],["givemesport.com",158],["gulflive.com",158],["helloflo.com",158],["homeglowdesign.com",158],["honeygirlsworld.com",158],["hotcars.com",158],["howtogeek.com",158],["imgur.com",158],["insider-gaming.com",158],["insurancejournal.com",158],["jasminemaria.com",158],["kion546.com",158],["lehighvalleylive.com",158],["lettyskitchen.com",158],["lifeinleggings.com",158],["liveandletsfly.com",158],["lizzieinlace.com",158],["localnews8.com",158],["lonestarlive.com",158],["madeeveryday.com",158],["maidenhead-advertiser.co.uk",158],["makeuseof.com",158],["mardomreport.net",158],["melangery.com",158],["milestomemories.com",158],["modernmom.com",158],["momtastic.com",158],["mostlymorgan.com",158],["motherwellmag.com",158],["movieweb.com",158],["muddybootsanddiamonds.com",158],["musicfeeds.com.au",158],["mylifefromhome.com",158],["nationalreview.com",158],["neoskosmos.com",158],["nordot.app",158],["nothingbutnewcastle.com",158],["nsjonline.com",158],["oakvillenews.org",158],["observer.com",158],["ourlittlesliceofheaven.com",158],["palachinkablog.com",158],["patheos.com",158],["pinkonthecheek.com",158],["politicususa.com",158],["predic.ro",158],["puckermom.com",158],["qtoptens.com",158],["realgm.com",158],["reelmama.com",158],["robbreport.com",158],["royalmailchat.co.uk",158],["samchui.com",158],["sandrarose.com",158],["screenrant.com",158],["sherdog.com",158],["sidereel.com",158],["silive.com",158],["simpleflying.com",158],["sloughexpress.co.uk",158],["spacenews.com",158],["sportsgamblingpodcast.com",158],["spotofteadesigns.com",158],["stacysrandomthoughts.com",158],["ssnewstelegram.com",158],["superherohype.com",158],["tablelifeblog.com",158],["thebeautysection.com",158],["thecelticblog.com",158],["thecurvyfashionista.com",158],["thefashionspot.com",158],["thegamer.com",158],["thegamescabin.com",158],["thenerdyme.com",158],["thenonconsumeradvocate.com",158],["theprudentgarden.com",158],["thethings.com",158],["timesnews.net",158],["topspeed.com",158],["toyotaklub.org.pl",158],["travelingformiles.com",158],["tutsnode.org",158],["viralviralvideos.com",158],["wannacomewith.com",158],["wimp.com",[158,160]],["windsorexpress.co.uk",158],["woojr.com",158],["worldoftravelswithkids.com",158],["worldsurfleague.com",158],["xda-developers.com",158],["adoredbyalex.com",158],["agrodigital.com",[158,160]],["al.com",[158,160]],["aliontherunblog.com",[158,160]],["allaboutthetea.com",[158,160]],["allmovie.com",[158,160]],["allmusic.com",[158,160]],["allthingsthrifty.com",[158,160]],["amessagewithabottle.com",[158,160]],["androidpolice.com",158],["antyradio.pl",158],["artforum.com",[158,160]],["artnews.com",[158,160]],["awkward.com",[158,160]],["awkwardmom.com",[158,160]],["becomingpeculiar.com",158],["bethcakes.com",[158,160]],["blogher.com",[158,160]],["bluegraygal.com",[158,160]],["briefeguru.de",[158,160]],["carmagazine.co.uk",158],["cattime.com",158],["cbr.com",158],["cleveland.com",[158,160]],["collider.com",158],["comingsoon.net",158],["crafty.house",158],["dailyvoice.com",[158,160]],["decider.com",[158,160]],["didyouknowfacts.com",[158,160]],["dogtime.com",[158,160]],["dualshockers.com",158],["dustyoldthing.com",158],["faithhub.net",158],["femestella.com",[158,160]],["masslive.com",[158,160,208]],["mlive.com",[158,160]],["nj.com",[158,160]],["oregonlive.com",[158,160]],["pagesix.com",[158,160,208]],["pennlive.com",[158,160,208]],["sheknows.com",[158,160]],["syracuse.com",[158,160,208]],["tvline.com",[158,160]],["cheatsheet.com",159],["pwinsider.com",159],["baeldung.com",159],["mensjournal.com",159],["247sports.com",[160,208]],["betweenenglandandiowa.com",160],["bgr.com",160],["blu-ray.com",160],["brobible.com",160],["cbsnews.com",[160,208]],["cbssports.com",[160,208]],["celiacandthebeast.com",160],["dailykos.com",160],["eater.com",160],["eldiariony.com",160],["free-power-point-templates.com",160],["inc.com",160],["indiewire.com",[160,208]],["inquisitr.com",160],["kcrg.com",160],["kentucky.com",160],["knowyourmeme.com",160],["last.fm",160],["mandatory.com",160],["nbcsports.com",160],["news.com.au",160],["nypost.com",[160,208]],["rollingstone.com",160],["sbnation.com",160],["sneakernews.com",160],["sport-fm.gr",160],["stylecaster.com",160],["themarysue.com",160],["usmagazine.com",160],["yourcountdown.to",160],["bagi.co.in",161],["keran.co",161],["biblestudytools.com",162],["christianheadlines.com",162],["ibelieve.com",162],["kuponigo.com",163],["kimcilonly.site",164],["kimcilonly.link",164],["cryptoearns.com",165],["inxxx.com",166],["ipaspot.app",167],["embedwish.com",168],["filelions.live",168],["leakslove.net",168],["jenismac.com",169],["vxetable.cn",170],["jewelavid.com",171],["nizarstream.com",171],["snapwordz.com",172],["toolxox.com",172],["rl6mans.com",172],["idol69.net",172],["plumbersforums.net",173],["123movies57.online",174],["gulio.site",175],["mediaset.es",176],["izlekolik.net",177],["donghuaworld.com",178],["letsdopuzzles.com",179],["hes-goals.io",180],["pkbiosfix.com",180],["casi3.xyz",180],["rediff.com",181],["dzapk.com",182],["darknessporn.com",183],["familyporner.com",183],["freepublicporn.com",183],["pisshamster.com",183],["punishworld.com",183],["xanimu.com",183],["tainio-mania.online",184],["javhdo.net",185],["eroticmoviesonline.me",186],["teleclub.xyz",187],["ecamrips.com",188],["showcamrips.com",188],["tucinehd.com",189],["9animetv.to",190],["qiwi.gg",191],["jornadaperfecta.com",192],["loseart.com",193],["sousou-no-frieren.com",194],["unite-guide.com",195],["thebullspen.com",196],["botcomics.com",197],["cefirates.com",197],["chandlerorchards.com",197],["comicleaks.com",197],["marketdata.app",197],["monumentmetals.com",197],["tapmyback.com",197],["ping.gg",197],["revistaferramental.com.br",197],["hawpar.com",197],["alpacafinance.org",[197,198]],["nookgaming.com",197],["enkeleksamen.no",197],["kvest.ee",197],["creatordrop.com",197],["panpots.com",197],["cybernetman.com",197],["bitdomain.biz",197],["gerardbosch.xyz",197],["fort-shop.kiev.ua",197],["accuretawealth.com",197],["resourceya.com",197],["tracktheta.com",197],["camberlion.com",197],["replai.io",197],["trybawaryjny.pl",197],["segops.madisonspecs.com",197],["tt.live",198],["future-fortune.com",198],["adventuretix.com",198],["bolighub.dk",198],["panprices.com",199],["intercity.technology",199],["freelancer.taxmachine.be",199],["adria.gg",199],["fjlaboratories.com",199],["emanualonline.com",199],["abhijith.page",199],["helpmonks.com",199],["dataunlocker.com",200],["proboards.com",201],["winclassic.net",201],["pandadoc.com",203],["japscan.lol",204],["wiki.yjsnpi.nu",205],["xfreehd.com",206],["abema.tv",209]]);

const entitiesMap = new Map([["vidsrc",[3,13,53]],["mixdrop",[3,14]],["sanet",3],["wawacity",3],["720pstream",[3,53]],["pahe",[5,14]],["soap2day",5],["mhdsports",7],["mhdsportstv",7],["mhdtvsports",7],["mhdtvworld",7],["mhdtvmax",7],["mhdstream",7],["reset-scans",7],["poplinks",[7,84]],["hqq",8],["waaw",8],["pixhost",10],["viprow",[13,14,53]],["bluemediadownload",13],["bluemediafile",13],["bluemedialink",13],["bluemediastorage",13],["bluemediaurls",13],["urlbluemedia",13],["cloudvideotv",[13,53]],["123-movies",14],["123movieshd",14],["123movieshub",14],["123moviesme",14],["1337x",[14,30]],["1stream",14],["1tamilmv",14],["2ddl",14],["2umovies",14],["3hiidude",14],["4stream",14],["5movies",14],["7hitmovies",14],["9xmovie",14],["9xlinks",14],["aagmaal",[14,53]],["adblockeronstape",14],["adblockeronstreamtape",14],["adblockplustape",14],["adblockstreamtape",14],["adblockstrtape",14],["adblockstrtech",14],["adblocktape",14],["adcorto",14],["alexsports",14],["alexsportss",14],["alexsportz",14],["animepahe",14],["animesanka",14],["animixplay",14],["aniplay",14],["antiadtape",14],["asianclub",14],["ask4movie",14],["atomixhq",[14,53]],["atomohd",14],["beinmatch",[14,22]],["bhaai",14],["blurayufr",14],["buffstreams",14],["canalesportivo",14],["clickndownload",14],["clicknupload",14],["daddylive",[14,53]],["daddylivehd",[14,53]],["ddrmovies",14],["desiremovies",14],["devlib",14],["divxtotal",14],["divxtotal1",14],["dlhd",14],["dvdplay",[14,53]],["elixx",14],["enjoy4k",14],["estrenosflix",14],["estrenosflux",14],["estrenosgo",14],["f1stream",14],["fbstream",14],["file4go",14],["filmymeet",14],["filmyzilla",[14,53]],["findav",14],["findporn",14],["flixmaza",14],["flizmovies",14],["freetvsports",14],["fullymaza",14],["g3g",14],["gotxx",14],["grantorrent",14],["hdmoviesfair",[14,53]],["hdmoviesflix",14],["hiidudemoviez",14],["imgsen",14],["imgsto",14],["incest",14],["incestflix",14],["itopmusic",14],["javmost",14],["keeplinks",14],["keepvid",14],["keralahd",14],["khatrimazaful",14],["khatrimazafull",14],["leechall",14],["linkshorts",14],["mangovideo",14],["masaporn",14],["miniurl",14],["mirrorace",14],["mixdroop",14],["mkvcage",14],["mlbstream",14],["mlsbd",14],["mmsbee",14],["motogpstream",14],["movieplex",14],["movierulzlink",14],["movies123",14],["moviesflix",14],["moviesmeta",14],["moviessources",14],["moviesverse",14],["moviezwaphd",14],["mrunblock",14],["nbastream",14],["newmovierulz",14],["nflstream",14],["nhlstream",14],["noblocktape",14],["nocensor",14],["onlyfams",14],["ouo",14],["pctfenix",[14,53]],["pctnew",[14,53]],["peliculas24",14],["pelisplus",14],["piratebay",14],["plyjam",14],["plylive",14],["plyvdo",14],["pornhoarder",14],["prbay",14],["projectfreetv",14],["proxybit",14],["psarips",14],["racaty",14],["remaxhd",14],["rintor",14],["rnbxclusive",14],["rnbxclusive0",14],["rnbxclusive1",14],["rojadirecta",14],["rojadirectaenvivo",14],["rugbystreams",14],["sadisflix",14],["safetxt",14],["shadowrangers",14],["shahi4u",14],["shahid4u1",14],["shahid4uu",14],["shavetape",14],["shortearn",14],["shorten",14],["shorttey",14],["shortzzy",14],["skymovieshd",14],["socceronline",[14,53]],["softarchive",14],["sports-stream",14],["sporttuna",14],["sshhaa",14],["stapadblockuser",14],["stape",14],["stapewithadblock",14],["starmusiq",14],["strcloud",14],["streamadblocker",[14,53]],["streamadblockplus",14],["streamcdn",14],["streamhub",14],["streamsport",14],["streamta",14],["streamtape",14],["streamtapeadblockuser",14],["strikeout",14],["strtape",14],["strtapeadblock",14],["strtapeadblocker",14],["strtapewithadblock",14],["strtpe",14],["swatchseries",14],["tabooflix",14],["tennisstreams",14],["themoviesflix",14],["thepiratebay",14],["thisav",14],["tmearn",14],["toonanime",14],["torlock",14],["tormalayalam",14],["torrentz2eu",14],["tutelehd",14],["tvply",14],["u4m",14],["ufcstream",14],["unblocknow",14],["uploadbuzz",14],["usagoals",14],["vexmoviex",14],["vidclouds",14],["vidlox",14],["vipbox",[14,53]],["vipboxtv",[14,53]],["vipleague",14],["watch-series",14],["watchseries",14],["xclusivejams",14],["xmoviesforyou",14],["youdbox",14],["ytmp3eu",14],["yts-subs",14],["yts",14],["zooqle",14],["dutchycorp",15],["torrentdownload",31],["mkvcinemas",[31,53]],["dood",[34,53]],["doodstream",34],["dooood",[34,53]],["livecamrips",37],["shrinke",37],["shrinkme",37],["daddylive1",46],["esportivos",46],["poscitechs",46],["bollyflix",46],["watchomovies",[47,53]],["123movies",53],["123moviesla",53],["123movieweb",53],["2embed",53],["9xmovies",53],["adshort",53],["allmovieshub",53],["asianplay",53],["atishmkv",53],["bflix",53],["cricstream",53],["crictime",53],["databasegdriveplayer",53],["extramovies",53],["faselhd",53],["faselhds",53],["filemoon",53],["filmy",53],["filmyhit",53],["filmywap",53],["fmovies",53],["gdplayer",53],["goku",53],["gomovies",53],["gowatchseries",53],["hdfungamezz",53],["hindilinks4u",53],["hurawatch",53],["jalshamoviezhd",53],["livecricket",53],["mhdsport",53],["movies2watch",53],["moviespapa",53],["mp4moviez",53],["mydownloadtube",53],["nuroflix",53],["o2tvseries",53],["o2tvseriesz",53],["pirlotv",53],["poscitech",53],["primewire",53],["redecanais",53],["serienstream",53],["sflix",53],["shahed4u",53],["shaheed4u",53],["speedostream",53],["sportcast",53],["sportskart",53],["streamingcommunity",53],["tamilarasan",53],["tamilfreemp3songs",53],["tamilprinthd",53],["torrentdosfilmes",53],["tubemate",53],["uploadrar",53],["uqload",53],["vidcloud9",53],["vido",53],["vidoo",53],["vudeo",53],["vumoo",53],["yesmovies",53],["mydverse",65],["actvid",70],["stfly",92],["stly",92],["dropgalaxy",94],["11xmovies",97],["streamblasters",97],["kickass",98],["cine-calidad",105],["woxikon",110],["ftuapps",123],["teluguflix",124]]);

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
