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
/* global cloneInto */

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

const argsList = [["script","DisplayAcceptableAdIfAdblocked"],["script","/==undefined.*body/"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","Reflect"],["script","document.write"],["script","deblocker"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","exdynsrv"],["script","/adb/i"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|adblock/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","Adblock"],["script","alert"],["script","document.createTextNode"],["script","style"],["script","shown_at"],["script","adsSrc"],["script","ai_adb"],["script","/adblock|popunder/"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|adestt01_c/"],["script","/fetch|adb/i"],["script","window.open"],["script","adblockimg"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","googlesyndication"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/pop1stp|detectAdBlock/"],["script","popundersPerIP"],["script","popunder"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","catch"],["script","displayAdsV3"],["script",";}}};break;case $."],["script","adblocker"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","initializeInterstitial"],["script","/adbl/i"],["script","mdpDeblocker"],["script","Math.floor"],["script","m9-ad-modal"],["script","detectAdBlock"],["script","antiAdBlockerHandler"],["script","wpadmngr.com"],["script","Anzeige"],["script","blocking"],["script","adBlockNotice"],["script","HTMLAllCollection"],["script","advads"],["script","/ABDetected|navigator.brave|fetch/"],["script","/bypass.php"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script",";break;case $."],["script","adb_detected"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","/event\\.keyCode|DisableDevtool/"],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","charCodeAt"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","error-report.com"],["script","KCgpPT57bGV0IGU"],["script","adShield"],["script","Ad-Shield"],["script","adrecover.com"],["script","AdblockRegixFinder"],["script","serve"],["script","/\\.length > 0\\) \\{  \\}/"],["script","/ConsoleBan|alert|AdBlocker/"],["script","adComm"],["script","runPop"],["style","body:not(.ownlist)"],["script","alert","condition","adblock"],["script","adb"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","zfgloaded"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/modal|popupads/"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","app_checkext"],["script","clientHeight"],["script","await"],["script","pop.target"],["script","!window.adngin"],["script","axios"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","\"\").split(\",\")[4]"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","AdBlock"],["script","Symbol.iterator"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","AaDetector"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","document.head.appendChild"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","detect"],["script","fetch"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","adBlockEnabled"],["script","='/0'"],["script","});}}}())));function"],["script","platformVersion"],["script","/nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|illegal/"],["script","\"data-adm-url\""],["script","NREUM"]];

const hostnamesMap = new Map([["alpin.de",0],["boersennews.de",0],["chefkoch.de",0],["chip.de",0],["clever-tanken.de",0],["desired.de",0],["donnerwetter.de",0],["fanfiktion.de",0],["focus.de",0],["formel1.de",0],["frustfrei-lernen.de",0],["gewinnspiele.tv",0],["giga.de",0],["gut-erklaert.de",0],["kino.de",0],["messen.de",0],["nickles.de",0],["nordbayern.de",0],["spielfilm.de",0],["teltarif.de",0],["unsere-helden.com",0],["weltfussball.at",0],["watson.de",0],["moviepilot.de",[0,4]],["mactechnews.de",0],["sport1.de",0],["aupetitparieur.com",1],["allthingsvegas.com",1],["100percentfedup.com",1],["beforeitsnews.com",1],["concomber.com",1],["conservativebrief.com",1],["conservativefiringline.com",1],["dailylol.com",1],["funnyand.com",1],["letocard.fr",1],["mamieastuce.com",1],["meilleurpronostic.fr",1],["patriotnationpress.com",1],["toptenz.net",1],["vitamiiin.com",1],["writerscafe.org",1],["populist.press",1],["dailytruthreport.com",1],["livinggospeldaily.com",1],["first-names-meanings.com",1],["welovetrump.com",1],["thehayride.com",1],["thelibertydaily.com",1],["thepoke.co.uk",1],["thepolitistick.com",1],["theblacksphere.net",1],["shark-tank.com",1],["naturalblaze.com",1],["greatamericanrepublic.com",1],["dailysurge.com",1],["truthlion.com",1],["flagandcross.com",1],["westword.com",1],["republicbrief.com",1],["freedomfirstnetwork.com",1],["phoenixnewtimes.com",1],["designbump.com",1],["clashdaily.com",1],["madworldnews.com",1],["reviveusa.com",1],["sonsoflibertymedia.com",1],["thedesigninspiration.com",1],["videogamesblogger.com",1],["protrumpnews.com",1],["thepalmierireport.com",1],["kresy.pl",1],["thepatriotjournal.com",1],["gellerreport.com",1],["thegatewaypundit.com",1],["wltreport.com",1],["miaminewtimes.com",1],["politicalsignal.com",1],["rightwingnews.com",1],["bigleaguepolitics.com",1],["comicallyincorrect.com",1],["web.de",2],["skidrowreloaded.com",[3,14]],["1stream.eu",3],["4kwebplay.xyz",3],["antennasports.ru",3],["buffsports.me",[3,51]],["buffstreams.app",3],["claplivehdplay.ru",3],["cracksports.me",[3,13]],["euro2024direct.ru",3],["ext.to",3],["eztv.tf",3],["eztvx.to",3],["kenitv.me",[3,13,14]],["lewblivehdplay.ru",3],["mlbbite.net",3],["mlbstreams.ai",3],["qatarstreams.me",[3,13]],["qqwebplay.xyz",3],["rnbastreams.com",3],["soccerworldcup.me",[3,13]],["topstreams.info",3],["totalsportek.to",3],["viwlivehdplay.ru",3],["sportsurge.net",3],["vidco.pro",[3,51]],["embedstream.me",[3,13,14,51]],["jumbtv.com",[3,87]],["topembed.pw",3],["crackstreamer.net",3],["methstreamer.com",3],["yts.mx",6],["magesypro.com",7],["pinsystem.co.uk",7],["elrellano.com",7],["tinyppt.com",7],["bharathwick.com",7],["descargaspcpro.net",7],["dx-tv.com",7],["rt3dmodels.com",7],["plc4me.com",7],["blisseyhusbands.com",7],["madaradex.org",7],["trigonevo.com",7],["franceprefecture.fr",7],["jazbaat.in",7],["aipebel.com",7],["audiotools.blog",7],["veganab.co",7],["camdigest.com",7],["learnmany.in",7],["amanguides.com",[7,72]],["highkeyfinance.com",[7,72]],["appkamods.com",7],["techacode.com",7],["djqunjab.in",7],["downfile.site",7],["expertvn.com",7],["trangchu.news",7],["3dmodelshare.org",7],["nulleb.com",7],["asiaon.top",7],["coursesghar.com",7],["thecustomrom.com",7],["snlookup.com",7],["bingotingo.com",7],["ghior.com",7],["3dmili.com",7],["karanpc.com",7],["plc247.com",7],["apkdelisi.net",7],["javindo.eu.org",7],["chindohot.site",7],["freepasses.org",7],["tomarnarede.pt",7],["basketballbuzz.ca",7],["dribbblegraphics.com",7],["kemiox.com",7],["checkersmenu.us",7],["teksnologi.com",7],["upornia.com",9],["eporner.com",11],["javtiful.com",[11,14]],["germancarforum.com",12],["innateblogger.com",12],["cybercityhelp.in",12],["mlbbox.me",13],["streamnoads.com",[13,14,51]],["bowfile.com",13],["cloudvideo.tv",[13,51]],["coloredmanga.com",13],["exeo.app",13],["hiphopa.net",[13,14]],["megaup.net",13],["olympicstreams.co",[13,51]],["tv247.us",[13,14]],["uploadhaven.com",13],["userscloud.com",[13,51]],["mdfx9dc8n.net",14],["mdzsmutpcvykb.net",14],["mixdrop21.net",14],["mixdropjmk.pw",14],["y2tube.pro",14],["fastreams.com",14],["redittsports.com",14],["sky-sports.store",14],["streamsoccer.site",14],["tntsports.store",14],["wowstreams.co",14],["123movies4u.site",14],["1337xporn.com",14],["141jav.com",14],["1bit.space",14],["1bitspace.com",14],["38dh2.top",14],["3dporndude.com",14],["4archive.org",14],["4horlover.com",14],["560pmovie.com",14],["60fps.xyz",14],["85tube.com",14],["85videos.com",14],["8xlinks.click",14],["a2zcrackworld.com",14],["aazzz.xyz",14],["acefile.co",14],["actusports.eu",14],["adclickersbot.com",14],["adricami.com",14],["adslink.pw",14],["adultstvlive.com",14],["adz7short.space",14],["aeblender.com",14],["ahdafnews.blogspot.com",14],["ak47sports.com",14],["akuma.moe",14],["allplayer.tk",14],["allstreaming.online",14],["amadoras.cf",14],["amadorasdanet.shop",14],["amateurblog.tv",14],["androidadult.com",14],["anhsexjav.xyz",14],["anidl.org",14],["anime-loads.org",14],["animeblkom.net",14],["animefire.plus",14],["animelek.me",14],["animespire.net",14],["animestotais.xyz",14],["animeyt.es",14],["anroll.net",14],["anymoviess.xyz",14],["aotonline.org",14],["asenshu.com",14],["asialiveaction.com",14],["asianclipdedhd.net",14],["askim-bg.com",14],["asumsikedaishop.com",14],["avcrempie.com",14],["avseesee.com",14],["gettapeads.com",14],["backfirstwo.com",14],["bajarjuegospcgratis.com",14],["balkanportal.net",14],["balkanteka.net",14],["bdnewszh.com",[14,51]],["belowporn.com",14],["bestclaimtrx.xyz",14],["bestgirlsexy.com",14],["bestnhl.com",14],["bestporn4free.com",14],["bestporncomix.com",14],["bet36.es",14],["bikinitryon.net",14],["birdurls.com",14],["bitsearch.to",14],["blackcockadventure.com",14],["blackcockchurch.org",14],["blackporncrazy.com",14],["blizzboygames.net",14],["blizzpaste.com",14],["blkom.com",14],["blog-peliculas.com",14],["blogtrabalhista.com",14],["bobsvagene.club",14],["bolly4umovies.click",14],["bonusharian.pro",14],["brilian-news.id",14],["brupload.net",14],["bucitana.com",14],["cablegratis.online",14],["camchickscaps.com",14],["camgirlcum.com",14],["camgirls.casa",14],["cashurl.in",14],["castingx.net",14],["ccurl.net",[14,51]],["celebrity-leaks.net",14],["cgpelis.net",14],["charexempire.com",14],["choosingnothing.com",14],["clasico.tv",14],["clik.pw",14],["coin-free.com",[14,69]],["coins100s.fun",14],["comicsmanics.com",14],["compucalitv.com",14],["coolcast2.com",14],["cosplaytab.com",14],["countylocalnews.com",14],["cpmlink.net",14],["crackstreamshd.click",14],["crespomods.com",14],["crisanimex.com",14],["crunchyscan.fr",14],["cuevana3.fan",14],["cuevana3hd.com",14],["cumception.com",14],["cutpaid.com",14],["cypherscans.xyz",[14,51]],["dailyuploads.net",14],["datawav.club",14],["daughtertraining.com",14],["deepgoretube.site",14],["deltabit.co",14],["deporte-libre.top",14],["depvailon.com",14],["derleta.com",14],["desivdo.com",14],["desixx.net",14],["detikkebumen.com",14],["deutschepornos.me",14],["diasoft.xyz",14],["directupload.net",14],["diskusscan.com",14],["dixva.com",14],["doctormalay.com",14],["dofusports.xyz",14],["dogemate.com",14],["doods.cam",14],["doodskin.lat",14],["downloadrips.com",14],["downvod.com",14],["dphunters.mom",14],["dragontranslation.com",14],["duddes.xyz",14],["dvdfullestrenos.com",14],["easylinks.in",14],["ebookbb.com",14],["ebookhunter.net",14],["egyanime.com",14],["egygost.com",14],["egyshare.cc",14],["ekasiwap.com",14],["electro-torrent.pl",14],["elil.cc",14],["embed4u.xyz",14],["eplayer.click",14],["erovoice.us",14],["eroxxx.us",14],["estrenosdoramas.net",14],["everia.club",14],["everythinginherenet.blogspot.com",14],["extrafreetv.com",14],["extremotvplay.com",14],["fapinporn.com",14],["fapptime.com",14],["fashionblog.tv",14],["fastreams.live",14],["faucethero.com",14],["fembed.com",14],["femdom-joi.com",14],["fileone.tv",14],["film1k.com",14],["filmeonline2023.net",14],["filmesonlinex.org",14],["filmesonlinexhd.biz",[14,51]],["filmovitica.com",14],["filmymaza.blogspot.com",14],["filthy.family",14],["firstmovies.to",14],["fixfinder.click",14],["flostreams.xyz",14],["flyfaucet.com",14],["footyhunter.lol",14],["footyhunter3.xyz",[14,51]],["forex-golds.com",14],["forex-trnd.com",14],["forumchat.club",14],["forumlovers.club",14],["freemoviesonline.biz",14],["freeomovie.co.in",14],["freeomovie.to",14],["freeporncomic.net",14],["freepornhdonlinegay.com",14],["freeproxy.io",14],["freeuse.me",14],["freeusexporn.com",14],["fsicomics.com",14],["gambarbogel.xyz",14],["gamepcfull.com",14],["gameronix.com",14],["gamesfullx.com",14],["gameshdlive.net",14],["gameshdlive.xyz",14],["gamesmountain.com",14],["gamesrepacks.com",14],["gamingguru.fr",14],["gamovideo.com",14],["garota.cf",14],["gaydelicious.com",14],["gaypornmasters.com",14],["gaysex69.net",14],["gemstreams.com",14],["get-to.link",14],["girlscanner.org",14],["giurgiuveanul.ro",14],["gledajcrtace.xyz",14],["gocast2.com",14],["gomo.to",14],["gostosa.cf",14],["gtlink.co",14],["gwiazdypornosow.pl",14],["haho.moe",14],["hatsukimanga.com",14],["hayhd.net",14],["hdsaprevodom.com",14],["hdstreamss.club",14],["hentais.tube",14],["hentaistream.co",14],["hentaitk.net",14],["hentaitube.online",14],["hentaiworld.tv",14],["hesgoal.tv",14],["hexupload.net",14],["hhkungfu.tv",14],["highlanderhelp.com",14],["hindimean.com",14],["hindimovies.to",[14,51]],["hiperdex.com",14],["hispasexy.org",14],["hitprn.com",14],["hoca4u.com",14],["hollymoviehd.cc",14],["hoodsite.com",14],["hopepaste.download",14],["hornylips.com",14],["hotgranny.live",14],["hotmama.live",14],["hqcelebcorner.net",14],["huren.best",14],["hwnaturkya.com",[14,51]],["hxfile.co",[14,51]],["igfap.com",14],["ihdstreams.xyz",14],["iklandb.com",14],["illink.net",14],["imgkings.com",14],["imgsex.xyz",14],["imx.to",14],["influencersgonewild.org",14],["infosgj.free.fr",14],["investnewsbrazil.com",14],["itdmusics.com",14],["itsuseful.site",14],["itunesfre.com",14],["iwatchfriendsonline.net",[14,129]],["jackstreams.com",14],["jatimupdate24.com",14],["jav-fun.cc",14],["jav-noni.cc",14],["jav-scvp.com",14],["javcl.com",14],["javf.net",14],["javhay.net",14],["javhoho.com",14],["javhun.com",14],["javleak.com",14],["javporn.best",14],["javsex.to",14],["jimdofree.com",14],["jiofiles.org",14],["jorpetz.com",14],["journalyc.online",14],["jp-films.com",14],["jpop80ss3.blogspot.com",14],["jpopsingles.eu",[14,30]],["kantotflix.net",14],["kantotinyo.com",14],["kaoskrew.org",14],["kaplog.com",14],["keralatvbox.com",14],["kickassanimes.io",14],["kimochi.info",14],["kimochi.tv",14],["kinemania.tv",14],["konstantinova.net",14],["koora-online.live",14],["kunmanga.com",14],["kutmoney.com",14],["kwithsub.com",14],["ladangreceh.xyz",14],["lat69.me",14],["latinblog.tv",14],["latinomegahd.net",14],["lazyfaucet.com",14],["leechpremium.link",14],["legendas.dev",14],["legendei.net",14],["lightdlmovies.blogspot.com",14],["lighterlegend.com",14],["linclik.com",14],["linkebr.com",14],["linkrex.net",14],["links.worldfree4u-lol.online",14],["linksfy.co",14],["lody.ink",14],["lovesomecommunity.com",14],["lulu.st",14],["lulustream.com",[14,51]],["luluvdo.com",[14,51]],["luzcameraeacao.shop",14],["manga-oni.com",14],["mangaboat.com",14],["mangagenki.me",14],["mangahere.onl",14],["mangaweb.xyz",14],["mangoporn.net",14],["manhwahentai.me",14],["masahub.com",14],["masahub.net",14],["maturegrannyfuck.com",14],["mdy48tn97.com",14],["mediapemersatubangsa.com",14],["mega-mkv.com",14],["megapastes.com",14],["megapornpics.com",14],["messitv.net",14],["meusanimes.net",14],["milfmoza.com",14],["milfzr.com",14],["millionscast.com",14],["mimaletamusical.blogspot.com",14],["mitly.us",14],["mkv-pastes.com",14],["modb.xyz",14],["monaskuliner.ac.id",14],["moredesi.com",14],["movgotv.net",14],["movi.pk",14],["movierr.online",14],["movieswbb.com",14],["moviewatch.com.pk",14],["mp4upload.com",14],["mrskin.live",14],["multicanaistv.com",14],["mundowuxia.com",14],["myeasymusic.ir",14],["myonvideo.com",14],["myyouporn.com",14],["narutoget.info",14],["naughtypiss.com",14],["nerdiess.com",14],["new-fs.eu",14],["newtorrentgame.com",14],["nflstreams.me",14],["niaomea.me",[14,51]],["nicekkk.com",14],["nicesss.com",14],["nlegs.com",14],["nolive.me",[14,51]],["notformembersonly.com",14],["novamovie.net",14],["novelpdf.xyz",14],["novelssites.com",[14,51]],["novelup.top",14],["nsfwr34.com",14],["nu6i-bg-net.com",14],["nudebabesin3d.com",14],["nukedfans.com",14],["nuoga.eu",14],["nzbstars.com",14],["ohjav.com",14],["ojearnovelas.com",14],["okanime.xyz",14],["olarixas.xyz",14],["oldbox.cloud",14],["olweb.tv",14],["olympicstreams.me",14],["on9.stream",14],["oncast.xyz",14],["onepiece-mangaonline.com",14],["onifile.com",14],["onionstream.live",14],["onlinesaprevodom.net",14],["onlyfullporn.video",14],["onplustv.live",14],["originporn.com",14],["ovagames.com",14],["ovamusic.com",14],["owllink.net",14],["packsporn.com",14],["pahaplayers.click",14],["palimas.org",14],["pandafiles.com",14],["papahd.club",14],["papahd1.xyz",14],["password69.com",14],["pastemytxt.com",14],["payskip.org",14],["peeplink.in",14],["peliculasmx.net",14],["pervertgirlsvideos.com",14],["pervyvideos.com",14],["phim12h.com",14],["picdollar.com",14],["pickteenz.com",14],["pics4you.net",14],["picsxxxporn.com",14],["pinayscandalz.com",14],["pinkueiga.net",14],["piratefast.xyz",14],["piratehaven.xyz",14],["pirateiro.com",14],["pirlotvonline.org",14],["playtube.co.za",14],["plugintorrent.com",14],["pmvzone.com",14],["porndish.com",14],["pornez.net",14],["pornfetishbdsm.com",14],["pornfits.com",14],["pornhd720p.com",14],["pornobr.club",14],["pornobr.ninja",14],["pornodominicano.net",14],["pornofaps.com",14],["pornoflux.com",14],["pornotorrent.com.br",14],["pornredit.com",14],["pornstarsyfamosas.es",14],["pornstreams.co",14],["porntn.com",14],["pornxbit.com",14],["pornxday.com",14],["portaldasnovinhas.shop",14],["portugues-fcr.blogspot.com",14],["poscishd.online",14],["poscitesch.com",[14,51]],["poseyoung.com",14],["pover.org",14],["proxyninja.org",14],["pubfilmz.com",14],["publicsexamateurs.com",14],["punanihub.com",14],["putlocker5movies.org",14],["pxxbay.com",14],["r18.best",14],["ragnaru.net",14],["rapbeh.net",14],["rapelust.com",14],["rapload.org",14],["read-onepiece.net",14],["retro-fucking.com",14],["retrotv.org",14],["robaldowns.com",14],["rockdilla.com",14],["rojadirectatvenvivo.com",14],["rojitadirecta.blogspot.com",14],["romancetv.site",14],["rsoccerlink.site",14],["rule34.club",14],["rule34hentai.net",14],["rumahbokep-id.com",14],["safego.cc",14],["safestream.cc",14],["sakurafile.com",14],["satoshi-win.xyz",14],["scat.gold",14],["scatfap.com",14],["scatkings.com",14],["scnlog.me",14],["scripts-webmasters.net",14],["serie-turche.com",14],["serijefilmovi.com",14],["sexcomics.me",14],["sexdicted.com",14],["sexgay18.com",14],["sexofilm.co",14],["sextgem.com",14],["sextubebbw.com",14],["sgpics.net",14],["shadowrangers.live",14],["shahee4u.cam",14],["shahiid-anime.net",14],["shemale6.com",14],["shinden.pl",14],["short.es",14],["showmanga.blog.fc2.com",14],["shrt10.com",14],["shurt.pw",14],["sideplusleaks.net",14],["silverblog.tv",14],["silverpic.com",14],["sinhalasub.life",14],["sinsitio.site",14],["sinvida.me",14],["skidrowcpy.com",14],["skidrowfull.com",14],["slut.mom",14],["smallencode.me",14],["smoner.com",14],["smplace.com",14],["soccerinhd.com",[14,51]],["socceron.name",14],["softairbay.com",14],["sokobj.com",14],["songsio.com",14],["souexatasmais.com",14],["sportbar.live",14],["sportea.online",14],["sportskart.xyz",14],["sportstream1.cfd",14],["sporttuna.site",14],["srt.am",14],["srts.me",14],["stakes100.xyz",14],["stbemuiptv.com",14],["stockingfetishvideo.com",14],["stream.crichd.vip",14],["stream.lc",14],["stream25.xyz",14],["streambee.to",14],["streamcenter.pro",14],["streamers.watch",14],["streamgo.to",14],["streamkiste.tv",14],["streamoporn.xyz",14],["streamoupload.xyz",14],["streamservicehd.click",14],["streamvid.net",[14,23]],["subtitleporn.com",14],["subtitles.cam",14],["suicidepics.com",14],["supertelevisionhd.com",14],["supexfeeds.com",14],["swiftload.io",14],["swzz.xyz",14],["sxnaar.com",14],["tabooporns.com",14],["taboosex.club",14],["tapeantiads.com",14],["tapeblocker.com",14],["tapenoads.com",14],["tapewithadblock.org",[14,190]],["teamos.xyz",14],["teen-wave.com",14],["teenporncrazy.com",14],["telegramgroups.xyz",14],["telenovelasweb.com",14],["tensei-shitara-slime-datta-ken.com",14],["tfp.is",14],["tgo-tv.co",[14,51]],["thaihotmodels.com",14],["theblueclit.com",14],["thebussybandit.com",14],["thedaddy.to",14],["theicongenerator.com",14],["thelastdisaster.vip",14],["thepiratebay0.org",14],["thepiratebay10.info",14],["thesexcloud.com",14],["thothub.today",14],["tightsexteens.com",14],["tojav.net",14],["tokyoblog.tv",14],["tonnestreamz.xyz",14],["top16.net",14],["topvideosgay.com",14],["torrage.info",14],["torrents.vip",14],["torrsexvid.com",14],["tpb-proxy.xyz",14],["trannyteca.com",14],["trendytalker.com",14],["tumanga.net",14],["turbogvideos.com",14],["turbovid.me",14],["turkishseriestv.org",14],["turksub24.net",14],["tutele.sx",14],["tutelehd3.xyz",14],["tvglobe.me",14],["tvpclive.com",14],["tvs-widget.com",14],["tvseries.video",14],["ucptt.com",14],["ufaucet.online",14],["ufcfight.online",14],["uhdgames.xyz",14],["ultrahorny.com",14],["ultraten.net",14],["unblockweb.me",14],["underhentai.net",14],["uniqueten.net",14],["upbaam.com",14],["upstream.to",14],["valeriabelen.com",14],["verdragonball.online",14],["vfxmed.com",14],["video.az",14],["videostreaming.rocks",14],["videowood.tv",14],["vidorg.net",14],["vidtapes.com",14],["vidz7.com",14],["vikistream.com",14],["vikv.net",14],["virpe.cc",14],["visifilmai.org",14],["viveseries.com",14],["vladrustov.sx",14],["volokit2.com",14],["vstorrent.org",14],["w-hentai.com",14],["watchaccordingtojimonline.com",14],["watchbrooklynnine-nine.com",14],["watchdowntonabbeyonline.com",14],["watchelementaryonline.com",14],["watcheronline.net",14],["watchgleeonline.com",14],["watchhowimetyourmother.online",14],["watchkobestreams.info",14],["watchlostonline.net",14],["watchlouieonline.com",14],["watchjavidol.com",14],["watchmadmenonline.com",14],["watchmonkonline.com",14],["watchonceuponatimeonline.com",14],["watchparksandrecreation.net",14],["watchprettylittleliarsonline.com",14],["watchrulesofengagementonline.com",14],["watchthekingofqueens.com",14],["watchthemiddleonline.com",14],["watchtvchh.xyz",14],["webcamrips.com",14],["wickedspot.org",14],["wincest.xyz",14],["witanime.best",14],["wolverdon.fun",14],["wolverdonx.com",14],["wordcounter.icu",14],["worldcupstream.pm",14],["worldmovies.store",14],["worldstreams.click",14],["wpdeployit.com",14],["wqstreams.tk",14],["wwwsct.com",14],["xanimeporn.com",14],["xblog.tv",14],["xn--verseriesespaollatino-obc.online",14],["xn--xvideos-espaol-1nb.com",14],["xpornium.net",14],["xsober.com",14],["xvip.lat",14],["xxgasm.com",14],["xxvideoss.org",14],["xxx18.uno",14],["xxxdominicana.com",14],["xxxfree.watch",14],["xxxmax.net",14],["xxxwebdlxxx.top",14],["xxxxvideo.uno",14],["y2b.wiki",14],["yabai.si",14],["yadixv.com",14],["yayanimes.net",14],["yeshd.net",14],["yodbox.com",14],["youjax.com",14],["youpits.xyz",14],["yourdailypornvideos.ws",14],["yourupload.com",14],["ytstv.me",14],["ytstvmovies.co",14],["ytstvmovies.xyz",14],["ytsyify.co",14],["ytsyifymovie.com",14],["zerion.cc",14],["zerocoin.top",14],["zitss.xyz",14],["zpaste.net",14],["zplayer.live",14],["faucet.ovh",15],["oko.sh",[16,79,80]],["variety.com",17],["gameskinny.com",17],["deadline.com",17],["washingtonpost.com",18],["bigbtc.win",19],["cryptofun.space",19],["gosexpod.com",20],["sexo5k.com",21],["truyen-hentai.com",21],["theshedend.com",23],["eracast.cc",23],["zeroupload.com",23],["securenetsystems.net",23],["miniwebtool.com",23],["bchtechnologies.com",23],["spiegel.de",24],["hausbau-forum.de",25],["kiemlua.com",25],["appnee.com",26],["apkmirror.com",27],["cineb.rs",29],["hiraethtranslation.com",30],["fcportables.com",31],["repack-games.com",31],["pawastreams.info",31],["truyentranhfull.net",31],["d0000d.com",32],["d000d.com",32],["d0o0d.com",32],["do0od.com",32],["doods.pro",32],["ds2play.com",32],["ds2video.com",32],["xfreehd.com",[33,195]],["onlyfaucet.com",34],["smutty.com",35],["freeadultcomix.com",35],["down.dataaps.com",35],["filmweb.pl",35],["visionpapers.org",36],["fdownloader.net",37],["thehackernews.com",38],["mielec.pl",39],["camsrip.com",40],["help.sakarnewz.com",40],["beatsnoop.com",40],["fetchpik.com",40],["hackerranksolution.in",40],["treasl.com",41],["mrbenne.com",42],["cnpics.org",43],["ovabee.com",43],["porn4f.com",43],["cnxx.me",43],["ai18.pics",43],["cuervotv.me",[44,51]],["aliezstream.pro",44],["daddy-stream.xyz",44],["instream.pro",44],["mylivestream.pro",44],["powerover.online",44],["sportea.link",44],["sportsurge.stream",44],["ufckhabib.com",44],["ustream.pro",44],["papa4k.online",44],["nontongo.win",44],["g-porno.com",44],["g-streaming.com",44],["giga-streaming.com",44],["educ4m.com",44],["fromwatch.com",44],["visualnewshub.com",44],["streamhd247.info",44],["nowlive1.me",44],["buzter.xyz",44],["gamehdlive.online",44],["hdfungamezz.xyz",44],["kingstreamz.lol",44],["masterpro.club",44],["papahd.co",44],["sportos.co",44],["valhallas.click",44],["andhrafriends.com",45],["freeroms.com",45],["soap2day-online.com",45],["sportsonline.si",46],["fiuxy2.co",47],["animeunity.to",48],["auto-crypto.click",49],["iconicblogger.com",49],["tokopedia.com",50],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",51],["adsh.cc",51],["afilmyhouse.blogspot.com",51],["ak.sv",51],["animesultra.com",51],["api.webs.moe",51],["apkmody.io",51],["attvideo.com",51],["backfirstwo.site",[51,159]],["crazyblog.in",51],["divicast.com",51],["dlhd.so",51],["embed.meomeo.pw",51],["filmeserialeonline.org",51],["flexyhit.com",51],["foreverwallpapers.com",51],["french-streams.cc",51],["fslinks.org",51],["fstream365.com",51],["hdtoday.to",51],["hinatasoul.com",51],["igg-games.com",51],["infinityscans.net",[51,194]],["infinityscans.xyz",[51,194]],["mangareader.to",51],["membed.net",51],["mgnetu.com",51],["mp3juice.info",51],["mp3juices.cc",51],["myflixerz.to",51],["nowmetv.net",51],["nowsportstv.com",51],["nxbrew.com",51],["oii.io",51],["paidshitforfree.com",51],["pepperlive.info",51],["playertv.net",51],["putlocker68.com",51],["roystream.com",51],["rssing.com",51],["s.to",51],["share.filesh.site",51],["sharkfish.xyz",51],["skidrowcodex.net",51],["sports-stream.site",51],["stream4free.live",51],["streamed.su",51],["tamilmobilemovies.in",51],["tapeadsenjoyer.com",51],["thewatchseries.live",51],["tnmusic.in",51],["travelplanspro.com",51],["tusfiles.com",51],["tutlehd4.com",51],["twstalker.com",51],["vid-guard.com",51],["video-leech.xyz",51],["vidsaver.net",51],["vidspeeds.com",51],["viralitytoday.com",51],["voiranime.stream",51],["watchdoctorwhoonline.com",51],["watchserie.online",51],["webhostingpost.com",51],["woxikon.in",51],["www-y2mate.com",51],["ylink.bid",51],["ytix.xyz",51],["remixsearch.net",52],["remixsearch.es",52],["onlineweb.tools",52],["sharing.wtf",52],["xnxxcom.xyz",53],["moneycontrol.com",54],["hesgoal-tv.io",55],["hesgoal-vip.io",55],["intro-hd.net",55],["monacomatin.mc",55],["nodo313.net",55],["codec.kyiv.ua",56],["unofficialtwrp.com",56],["oaaxpgp3.xyz",57],["m9.news",58],["sexwebvideo.com",59],["sexwebvideo.net",59],["pig69.com",59],["cosplay18.pics",59],["zeemoontv-24.blogspot.com",60],["stitichsports.com",60],["tinys.click",60],["answerpython.com",60],["gsm-solution.com",60],["h-donghua.com",60],["hindisubbedacademy.com",60],["linksdramas2.blogspot.com",60],["pkgovjobz.com",60],["ripexbooster.xyz",60],["serial4.com",60],["serial412.blogspot.com",60],["sigmalinks.in",60],["tutorgaming.com",60],["everydaytechvams.com",60],["dipsnp.com",60],["cccam4sat.com",60],["x-video.tube",61],["rahim-soft.com",61],["callofwar.com",62],["secondhandsongs.com",63],["nudezzers.org",64],["nohost.one",65],["zoechip.com",65],["3rooodnews.net",66],["tea-coffee.net",67],["spatsify.com",67],["newedutopics.com",67],["getviralreach.in",67],["edukaroo.com",67],["funkeypagali.com",67],["careersides.com",67],["nayisahara.com",67],["wikifilmia.com",67],["infinityskull.com",67],["viewmyknowledge.com",67],["iisfvirtual.in",67],["starxinvestor.com",67],["jkssbalerts.com",67],["kenzo-flowertag.com",68],["mdn.lol",68],["btcbitco.in",69],["btcsatoshi.net",69],["cempakajaya.com",69],["crypto4yu.com",69],["gainl.ink",69],["manofadan.com",69],["readbitcoin.org",69],["wiour.com",69],["kienthucrangmieng.com",69],["tremamnon.com",69],["btc25.org",69],["tron-free.com",69],["bitsmagic.fun",69],["ourcoincash.xyz",69],["hynews.biz",69],["blog.cryptowidgets.net",70],["blog.insurancegold.in",70],["blog.wiki-topia.com",70],["blog.coinsvalue.net",70],["blog.cookinguide.net",70],["blog.freeoseocheck.com",70],["aylink.co",71],["sugarona.com",72],["nishankhatri.xyz",72],["cety.app",73],["exego.app",73],["cutlink.net",73],["cutsy.net",73],["cutyurls.com",73],["cutty.app",73],["cutnet.net",73],["aiimgvlog.fun",74],["appsbull.com",75],["diudemy.com",75],["maqal360.com",75],["mphealth.online",75],["makefreecallsonline.com",75],["androjungle.com",75],["bookszone.in",75],["drakescans.com",75],["shortix.co",75],["msonglyrics.com",75],["app-sorteos.com",75],["bokugents.com",75],["client.pylexnodes.net",75],["btvplus.bg",75],["blog24.me",[76,77]],["coingraph.us",78],["impact24.us",78],["tvi.la",[79,80]],["iir.la",[79,80]],["tii.la",[79,80]],["ckk.ai",[79,80]],["oei.la",[79,80]],["lnbz.la",[79,80]],["oii.la",[79,80]],["tpi.li",[79,80]],["atglinks.com",81],["kbconlinegame.com",82],["hamrojaagir.com",82],["odijob.com",82],["blogesque.net",83],["bookbucketlyst.com",83],["explorosity.net",83],["optimizepics.com",83],["torovalley.net",83],["travize.net",83],["trekcheck.net",83],["metoza.net",83],["techlike.net",83],["snaplessons.net",83],["atravan.net",83],["transoa.net",83],["techmize.net",83],["crenue.net",83],["simana.online",84],["fooak.com",84],["joktop.com",84],["evernia.site",84],["financemonk.net",85],["unblocked.id",88],["listendata.com",89],["7xm.xyz",89],["fastupload.io",89],["azmath.info",89],["wouterplanet.com",90],["androidacy.com",91],["pillowcase.su",92],["veryfreeporn.com",93],["theporngod.com",93],["besthdgayporn.com",94],["drivenime.com",94],["javup.org",94],["shemaleup.net",94],["austiblox.net",95],["btcbunch.com",96],["teachoo.com",97],["automobile-catalog.com",[98,99]],["motorbikecatalog.com",[98,99]],["blog.esuteru.com",98],["blog.livedoor.jp",98],["itainews.com",98],["jin115.com",98],["allthetests.com",98],["javatpoint.com",98],["globalrph.com",98],["carscoops.com",98],["crosswordsolver.com",98],["cruciverba.it",98],["ff14net.2chblog.jp",98],["heureka.cz",98],["indiatimes.com",98],["laleggepertutti.it",98],["meeco.kr",98],["motscroises.fr",98],["news4vip.livedoor.biz",98],["oeffnungszeitenbuch.de",98],["onecall2ch.com",98],["oraridiapertura24.it",98],["palabr.as",98],["rabitsokuhou.2chblog.jp",98],["suzusoku.blog.jp",98],["the-crossword-solver.com",98],["thestockmarketwatch.com",98],["word-grabber.com",98],["wort-suchen.de",98],["freemcserver.net",98],["golf-live.at",98],["kreuzwortraetsel.de",98],["raetsel-hilfe.de",98],["verkaufsoffener-sonntag.com",98],["horairesdouverture24.fr",98],["nyitvatartas24.hu",98],["modhub.us",98],["yugioh-starlight.com",98],["winfuture.de",98],["topstarnews.net",98],["islamicfinder.org",98],["secure-signup.net",98],["dramabeans.com",98],["manta.com",98],["talkwithstranger.com",98],["tportal.hr",98],["tvtropes.org",98],["wouldurather.io",98],["interfootball.co.kr",99],["a-ha.io",99],["cboard.net",99],["jjang0u.com",99],["joongdo.co.kr",99],["viva100.com",99],["gamingdeputy.com",99],["thesaurus.net",99],["alle-tests.nl",99],["maketecheasier.com",99],["allthekingz.com",99],["tweaksforgeeks.com",99],["m.inven.co.kr",99],["mlbpark.donga.com",99],["meconomynews.com",99],["brandbrief.co.kr",99],["motorgraph.com",99],["worldhistory.org",100],["lovelive-petitsoku.com",101],["pravda.com.ua",101],["slobodnadalmacija.hr",102],["bitcotasks.com",103],["udvl.com",104],["www.chip.de",105],["topsporter.net",106],["sportshub.to",106],["seznam.cz",107],["streamcheck.link",108],["myanimelist.net",109],["bitcosite.com",110],["bitzite.com",110],["easymc.io",111],["newscon.org",111],["yunjiema.top",111],["hacoos.com",113],["bondagevalley.cc",114],["zefoy.com",115],["vidello.net",116],["resizer.myct.jp",117],["gametohkenranbu.sakuraweb.com",118],["jisakuhibi.jp",119],["rank1-media.com",119],["lifematome.blog",120],["fm.sekkaku.net",121],["free-avx.jp",122],["dvdrev.com",123],["betweenjpandkr.blog",124],["nft-media.net",125],["ghacks.net",126],["leak.sx",127],["paste.bin.sx",127],["pornleaks.in",127],["songspk2.info",128],["nectareousoverelate.com",130],["khoaiphim.com",131],["haafedk2.com",132],["fordownloader.com",132],["jovemnerd.com.br",133],["nicomanga.com",134],["totalcsgo.com",135],["vivamax.asia",136],["manysex.com",137],["gaminginfos.com",138],["tinxahoivn.com",139],["automoto.it",140],["codelivly.com",141],["lordchannel.com",142],["touguatize.monster",143],["client.falixnodes.net",144],["novelhall.com",145],["abc17news.com",146],["bailiwickexpress.com",146],["barnsleychronicle.com",146],["chaptercheats.com",146],["commercialobserver.com",146],["competentedigitale.ro",146],["dogtime.com",146],["dustyoldthing.com",146],["faithhub.net",146],["femestella.com",146],["footwearnews.com",146],["freeconvert.com",146],["frogsandsnailsandpuppydogtail.com",146],["fsm-media.com",146],["funtasticlife.com",146],["fwmadebycarli.com",146],["gamerant.com",146],["gfinityesports.com",146],["givemesport.com",146],["gulflive.com",146],["helloflo.com",146],["homeglowdesign.com",146],["honeygirlsworld.com",146],["hotcars.com",146],["howtogeek.com",146],["imgur.com",146],["insider-gaming.com",146],["insurancejournal.com",146],["jasminemaria.com",146],["kion546.com",146],["lehighvalleylive.com",146],["lettyskitchen.com",146],["lifeinleggings.com",146],["liveandletsfly.com",146],["lizzieinlace.com",146],["localnews8.com",146],["lonestarlive.com",146],["madeeveryday.com",146],["maidenhead-advertiser.co.uk",146],["makeuseof.com",146],["mardomreport.net",146],["melangery.com",146],["milestomemories.com",146],["modernmom.com",146],["momtastic.com",146],["mostlymorgan.com",146],["motherwellmag.com",146],["movieweb.com",146],["muddybootsanddiamonds.com",146],["musicfeeds.com.au",146],["mylifefromhome.com",146],["nationalreview.com",146],["neoskosmos.com",146],["nordot.app",146],["nothingbutnewcastle.com",146],["nsjonline.com",146],["oakvillenews.org",146],["observer.com",146],["ourlittlesliceofheaven.com",146],["palachinkablog.com",146],["patheos.com",146],["pinkonthecheek.com",146],["politicususa.com",146],["predic.ro",146],["puckermom.com",146],["qtoptens.com",146],["realgm.com",146],["reelmama.com",146],["robbreport.com",146],["royalmailchat.co.uk",146],["samchui.com",146],["sandrarose.com",146],["screenrant.com",146],["sherdog.com",146],["sidereel.com",146],["silive.com",146],["simpleflying.com",146],["sloughexpress.co.uk",146],["spacenews.com",146],["sportsgamblingpodcast.com",146],["spotofteadesigns.com",146],["stacysrandomthoughts.com",146],["ssnewstelegram.com",146],["superherohype.com",146],["tablelifeblog.com",146],["thebeautysection.com",146],["thecelticblog.com",146],["thecurvyfashionista.com",146],["thefashionspot.com",146],["thegamer.com",146],["thegamescabin.com",146],["thenerdyme.com",146],["thenonconsumeradvocate.com",146],["theprudentgarden.com",146],["thethings.com",146],["timesnews.net",146],["topspeed.com",146],["toyotaklub.org.pl",146],["travelingformiles.com",146],["tutsnode.org",146],["viralviralvideos.com",146],["wannacomewith.com",146],["wimp.com",[146,148]],["windsorexpress.co.uk",146],["woojr.com",146],["worldoftravelswithkids.com",146],["worldsurfleague.com",146],["xda-developers.com",146],["adoredbyalex.com",146],["agrodigital.com",[146,148]],["al.com",[146,148]],["aliontherunblog.com",[146,148]],["allaboutthetea.com",[146,148]],["allmovie.com",[146,148]],["allmusic.com",[146,148]],["allthingsthrifty.com",[146,148]],["amessagewithabottle.com",[146,148]],["androidpolice.com",146],["antyradio.pl",146],["artforum.com",[146,148]],["artnews.com",[146,148]],["awkward.com",[146,148]],["awkwardmom.com",[146,148]],["becomingpeculiar.com",146],["bethcakes.com",[146,148]],["blogher.com",[146,148]],["bluegraygal.com",[146,148]],["briefeguru.de",[146,148]],["carmagazine.co.uk",146],["cattime.com",146],["cbr.com",146],["cleveland.com",[146,148]],["collider.com",146],["comingsoon.net",146],["crafty.house",146],["dailyvoice.com",[146,148]],["decider.com",[146,148]],["didyouknowfacts.com",[146,148]],["dualshockers.com",146],["masslive.com",[146,148,196]],["mlive.com",[146,148]],["nj.com",[146,148]],["oregonlive.com",[146,148]],["pagesix.com",[146,148,196]],["pennlive.com",[146,148,196]],["sheknows.com",[146,148]],["syracuse.com",[146,148,196]],["tvline.com",[146,148]],["cheatsheet.com",147],["pwinsider.com",147],["baeldung.com",147],["mensjournal.com",147],["247sports.com",[148,196]],["betweenenglandandiowa.com",148],["bgr.com",148],["blu-ray.com",148],["cbsnews.com",[148,196]],["cbssports.com",[148,196]],["celiacandthebeast.com",148],["dailykos.com",148],["eater.com",148],["eldiariony.com",148],["free-power-point-templates.com",148],["inc.com",148],["indiewire.com",[148,196]],["inquisitr.com",148],["kentucky.com",148],["knowyourmeme.com",148],["last.fm",148],["mandatory.com",148],["nbcsports.com",148],["news.com.au",148],["nypost.com",[148,196]],["rollingstone.com",148],["sbnation.com",148],["sneakernews.com",148],["sport-fm.gr",148],["stylecaster.com",148],["themarysue.com",148],["usmagazine.com",148],["bagi.co.in",149],["keran.co",149],["biblestudytools.com",150],["christianheadlines.com",150],["ibelieve.com",150],["kuponigo.com",151],["kimcilonly.site",152],["kimcilonly.link",152],["cryptoearns.com",153],["inxxx.com",154],["ipaspot.app",155],["embedwish.com",156],["filelions.live",156],["leakslove.net",156],["jenismac.com",157],["vxetable.cn",158],["jewelavid.com",159],["nizarstream.com",159],["snapwordz.com",160],["toolxox.com",160],["rl6mans.com",160],["idol69.net",160],["plumbersforums.net",161],["123movies57.online",162],["gulio.site",163],["mediaset.es",164],["izlekolik.net",165],["donghuaworld.com",166],["letsdopuzzles.com",167],["hes-goals.io",168],["pkbiosfix.com",168],["casi3.xyz",168],["rediff.com",169],["dzapk.com",170],["darknessporn.com",171],["familyporner.com",171],["freepublicporn.com",171],["pisshamster.com",171],["punishworld.com",171],["xanimu.com",171],["tainio-mania.online",172],["javhdo.net",173],["eroticmoviesonline.me",174],["teleclub.xyz",175],["ecamrips.com",176],["showcamrips.com",176],["tucinehd.com",177],["9animetv.to",178],["qiwi.gg",179],["jornadaperfecta.com",180],["loseart.com",181],["sousou-no-frieren.com",182],["unite-guide.com",183],["thebullspen.com",184],["botcomics.com",185],["cefirates.com",185],["chandlerorchards.com",185],["comicleaks.com",185],["marketdata.app",185],["monumentmetals.com",185],["tapmyback.com",185],["ping.gg",185],["revistaferramental.com.br",185],["hawpar.com",185],["alpacafinance.org",[185,186]],["nookgaming.com",185],["enkeleksamen.no",185],["kvest.ee",185],["creatordrop.com",185],["panpots.com",185],["cybernetman.com",185],["bitdomain.biz",185],["gerardbosch.xyz",185],["fort-shop.kiev.ua",185],["accuretawealth.com",185],["resourceya.com",185],["tracktheta.com",185],["camberlion.com",185],["replai.io",185],["trybawaryjny.pl",185],["segops.madisonspecs.com",185],["tt.live",186],["future-fortune.com",186],["adventuretix.com",186],["bolighub.dk",186],["panprices.com",187],["intercity.technology",187],["freelancer.taxmachine.be",187],["adria.gg",187],["fjlaboratories.com",187],["emanualonline.com",187],["abhijith.page",187],["helpmonks.com",187],["dataunlocker.com",188],["proboards.com",189],["winclassic.net",189],["pandadoc.com",191],["japscan.lol",[192,193]],["abema.tv",197]]);

const entitiesMap = new Map([["vidsrc",[3,13,51]],["mixdrop",[3,14]],["sanet",3],["wawacity",3],["720pstream",[3,51]],["pahe",[5,14]],["soap2day",5],["mhdsports",7],["mhdsportstv",7],["mhdtvsports",7],["mhdtvworld",7],["mhdtvmax",7],["mhdstream",7],["reset-scans",7],["poplinks",[7,75]],["hqq",8],["waaw",8],["pixhost",10],["viprow",[13,14,51]],["bluemediadownload",13],["bluemediafile",13],["bluemedialink",13],["bluemediastorage",13],["bluemediaurls",13],["urlbluemedia",13],["cloudvideotv",[13,51]],["123-movies",14],["123movieshd",14],["123movieshub",14],["123moviesme",14],["1337x",[14,28]],["1stream",14],["1tamilmv",14],["2ddl",14],["2umovies",14],["3hiidude",14],["4stream",14],["5movies",14],["7hitmovies",14],["9xmovie",14],["9xlinks",14],["aagmaal",[14,51]],["adblockeronstape",14],["adblockeronstreamtape",14],["adblockplustape",14],["adblockstreamtape",14],["adblockstrtape",14],["adblockstrtech",14],["adblocktape",14],["adcorto",14],["alexsports",14],["alexsportss",14],["alexsportz",14],["animepahe",14],["animesanka",14],["animixplay",14],["aniplay",14],["antiadtape",14],["asianclub",14],["ask4movie",14],["atomixhq",[14,51]],["atomohd",14],["beinmatch",[14,22]],["bhaai",14],["blurayufr",14],["buffstreams",14],["canalesportivo",14],["clickndownload",14],["clicknupload",14],["daddylive",[14,51]],["daddylivehd",[14,51]],["ddrmovies",14],["desiremovies",14],["devlib",14],["divxtotal",14],["divxtotal1",14],["dlhd",14],["dvdplay",[14,51]],["elixx",14],["enjoy4k",14],["estrenosflix",14],["estrenosflux",14],["estrenosgo",14],["f1stream",14],["fbstream",14],["file4go",14],["filmymeet",14],["filmyzilla",[14,51]],["findav",14],["findporn",14],["flixmaza",14],["flizmovies",14],["freetvsports",14],["fullymaza",14],["g3g",14],["gotxx",14],["grantorrent",14],["hdmoviesfair",[14,51]],["hdmoviesflix",14],["hiidudemoviez",14],["imgsen",14],["imgsto",14],["incest",14],["incestflix",14],["itopmusic",14],["javmost",14],["keeplinks",14],["keepvid",14],["keralahd",14],["khatrimazaful",14],["khatrimazafull",14],["leechall",14],["linkshorts",14],["mangovideo",14],["masaporn",14],["miniurl",14],["mirrorace",14],["mixdroop",14],["mkvcage",14],["mlbstream",14],["mlsbd",14],["mmsbee",14],["motogpstream",14],["movieplex",14],["movierulzlink",14],["movies123",14],["moviesflix",14],["moviesmeta",14],["moviessources",14],["moviesverse",14],["moviezwaphd",14],["mrunblock",14],["nbastream",14],["newmovierulz",14],["nflstream",14],["nhlstream",14],["noblocktape",14],["nocensor",14],["onlyfams",14],["ouo",14],["pctfenix",[14,51]],["pctnew",[14,51]],["peliculas24",14],["pelisplus",14],["piratebay",14],["plyjam",14],["plylive",14],["plyvdo",14],["pornhoarder",14],["prbay",14],["projectfreetv",14],["proxybit",14],["psarips",14],["racaty",14],["remaxhd",14],["rintor",14],["rnbxclusive",14],["rnbxclusive0",14],["rnbxclusive1",14],["rojadirecta",14],["rojadirectaenvivo",14],["rugbystreams",14],["sadisflix",14],["safetxt",14],["shadowrangers",14],["shahi4u",14],["shahid4u1",14],["shahid4uu",14],["shavetape",14],["shortearn",14],["shorten",14],["shorttey",14],["shortzzy",14],["skymovieshd",14],["socceronline",[14,51]],["softarchive",14],["sports-stream",14],["sshhaa",14],["stapadblockuser",14],["stape",14],["stapewithadblock",14],["starmusiq",14],["strcloud",14],["streamadblocker",[14,51]],["streamadblockplus",14],["streamcdn",14],["streamhub",14],["streamsport",14],["streamta",14],["streamtape",14],["streamtapeadblockuser",14],["strikeout",14],["strtape",14],["strtapeadblock",14],["strtapeadblocker",14],["strtapewithadblock",14],["strtpe",14],["swatchseries",14],["tabooflix",14],["tennisstreams",14],["themoviesflix",14],["thepiratebay",14],["thisav",14],["tmearn",14],["toonanime",14],["torlock",14],["tormalayalam",14],["torrentz2eu",14],["tutelehd",14],["tvply",14],["u4m",14],["ufcstream",14],["unblocknow",14],["uploadbuzz",14],["usagoals",14],["vexmoviex",14],["vidclouds",14],["vidlox",14],["vipbox",[14,51]],["vipboxtv",[14,51]],["vipleague",14],["watch-series",14],["watchseries",14],["xclusivejams",14],["xmoviesforyou",14],["youdbox",14],["ytmp3eu",14],["yts-subs",14],["yts",14],["zooqle",14],["dutchycorp",15],["torrentdownload",29],["mkvcinemas",[29,51]],["dood",[32,51]],["doodstream",32],["dooood",[32,51]],["livecamrips",35],["shrinke",35],["shrinkme",35],["daddylive1",44],["esportivos",44],["poscitechs",44],["bollyflix",44],["watchomovies",[45,51]],["123movies",51],["123moviesla",51],["123movieweb",51],["2embed",51],["9xmovies",51],["adshort",51],["allmovieshub",51],["asianplay",51],["atishmkv",51],["cricstream",51],["crictime",51],["databasegdriveplayer",51],["extramovies",51],["faselhd",51],["faselhds",51],["filemoon",51],["filmy",51],["filmyhit",51],["filmywap",51],["fmovies",51],["gdplayer",51],["gdriveplayer",51],["goku",51],["gomovies",51],["gowatchseries",51],["hdfungamezz",51],["hindilinks4u",51],["hurawatch",51],["jalshamoviezhd",51],["livecricket",51],["mhdsport",51],["movies2watch",51],["moviespapa",51],["mp4moviez",51],["mydownloadtube",51],["nuroflix",51],["o2tvseries",51],["o2tvseriesz",51],["pirlotv",51],["poscitech",51],["primewire",51],["redecanais",51],["serienstream",51],["sflix",51],["shahed4u",51],["shaheed4u",51],["speedostream",51],["sportcast",51],["sportskart",51],["streamingcommunity",51],["tamilarasan",51],["tamilfreemp3songs",51],["tamilprinthd",51],["torrentdosfilmes",51],["tubemate",51],["uploadrar",51],["uqload",51],["vidcloud9",51],["vido",51],["vidoo",51],["vudeo",51],["vumoo",51],["yesmovies",51],["mydverse",60],["actvid",65],["stfly",83],["stly",83],["dropgalaxy",85],["kickass",86],["cine-calidad",93],["woxikon",98],["teluguflix",112]]);

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

// Inject code

// https://bugzilla.mozilla.org/show_bug.cgi?id=1736575
//   'MAIN' world not yet supported in Firefox, so we inject the code into
//   'MAIN' ourself when environment in Firefox.

const targetWorld = 'ISOLATED';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_removeNodeText();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_removeNodeText = cloneInto([
            [ '(', uBOL_removeNodeText.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_removeNodeText);
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
    delete page.uBOL_removeNodeText;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
