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

const argsList = [["script","DisplayAcceptableAdIfAdblocked"],["script","/==undefined.*body/"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","Reflect"],["script","document.write"],["script","deblocker"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","exdynsrv"],["script","/adb/i"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|ad block|alert/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","popUnderUrl"],["script","Adblock"],["script","alert"],["script","document.createTextNode"],["script","/shown_at|WebAssembly/"],["script","style"],["script","shown_at"],["script","adsSrc"],["script","ai_adb"],["script","/adblock|popunder|openedPop|WebAssembly/"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["script","window.warn"],["script","adBlock"],["script","/fetch|adb/i"],["script","window.open"],["script","adblockimg"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","googlesyndication"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/pop1stp|detectAdBlock/"],["script","popundersPerIP"],["script","popunder"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","catch"],["script","displayAdsV3"],["script",";}}};break;case $."],["script","adblocker"],["script","break;case"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adserverDomain|\\);break;case /"],["script","initializeInterstitial"],["script","/adbl/i"],["script","popupBackground"],["script","mdpDeblocker"],["script","Math.floor"],["script","m9-ad-modal"],["script","detectAdBlock"],["script","antiAdBlockerHandler"],["script","wpadmngr.com"],["script","Anzeige"],["script","blocking"],["script","adBlockNotice"],["script","HTMLAllCollection"],["script","advads"],["script","document.cookie"],["script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"],["script","/_0x|brave|onerror/"],["script","adb"],["script","kmtAdsData"],["script","wpadmngr"],["script","insertAdjacentHTML"],["script","navigator.userAgent"],["script","adbl"],["script","/ABDetected|navigator.brave|fetch/"],["script","/bypass.php"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script",";break;case $."],["script","adb_detected"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","/event\\.keyCode|DisableDevtool/"],["script","/adblock|var Data.*];/"],["script","replace"],["script","{delete window["],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","charCodeAt"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","error-report.com"],["script","KCgpPT57bGV0IGU"],["script","adShield"],["script","Ad-Shield"],["script","adrecover.com"],["script","html-load.com"],["script","AdblockRegixFinder"],["script","/adScript|adsBlocked/"],["script","serve"],["script","/\\] \\+ 1\\) \\}\\}\\)\\;/"],["script","/ConsoleBan|alert|AdBlocker/"],["script","runPop"],["style","body:not(.ownlist)"],["script","alert","condition","adblock"],["script","decodeURIComponent(escape"],["script","/ai_|googletag|adb/"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","zfgloaded"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","app_checkext"],["script","clientHeight"],["script","await"],["script","pop.target"],["script","!window.adngin"],["script","axios"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","\"\").split(\",\")[4]"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","AdBlock"],["script","Symbol.iterator"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","AaDetector"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","/document\\.head\\.appendChild|window\\.open/"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","detect"],["script","fetch"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","adBlockEnabled"],["script","/catch.+catch/"],["script","\"data-adm-url\""],["script","NREUM"]];

const hostnamesMap = new Map([["alpin.de",0],["boersennews.de",0],["chefkoch.de",0],["chip.de",0],["clever-tanken.de",0],["desired.de",0],["donnerwetter.de",0],["fanfiktion.de",0],["focus.de",0],["formel1.de",0],["frustfrei-lernen.de",0],["gewinnspiele.tv",0],["giga.de",0],["gut-erklaert.de",0],["kino.de",0],["messen.de",0],["nickles.de",0],["nordbayern.de",0],["spielfilm.de",0],["teltarif.de",0],["unsere-helden.com",0],["weltfussball.at",0],["watson.de",0],["moviepilot.de",[0,4]],["mactechnews.de",0],["sport1.de",0],["welt.de",0],["aupetitparieur.com",1],["allthingsvegas.com",1],["100percentfedup.com",1],["beforeitsnews.com",1],["concomber.com",1],["conservativebrief.com",1],["conservativefiringline.com",1],["dailylol.com",1],["funnyand.com",1],["letocard.fr",1],["mamieastuce.com",1],["meilleurpronostic.fr",1],["patriotnationpress.com",1],["toptenz.net",1],["vitamiiin.com",1],["writerscafe.org",1],["populist.press",1],["dailytruthreport.com",1],["livinggospeldaily.com",1],["first-names-meanings.com",1],["welovetrump.com",1],["thehayride.com",1],["thelibertydaily.com",1],["thepoke.co.uk",1],["thepolitistick.com",1],["theblacksphere.net",1],["shark-tank.com",1],["naturalblaze.com",1],["greatamericanrepublic.com",1],["dailysurge.com",1],["truthlion.com",1],["flagandcross.com",1],["westword.com",1],["republicbrief.com",1],["freedomfirstnetwork.com",1],["phoenixnewtimes.com",1],["designbump.com",1],["clashdaily.com",1],["madworldnews.com",1],["reviveusa.com",1],["sonsoflibertymedia.com",1],["thedesigninspiration.com",1],["videogamesblogger.com",1],["protrumpnews.com",1],["thepalmierireport.com",1],["kresy.pl",1],["thepatriotjournal.com",1],["gellerreport.com",1],["thegatewaypundit.com",1],["wltreport.com",1],["miaminewtimes.com",1],["politicalsignal.com",1],["rightwingnews.com",1],["bigleaguepolitics.com",1],["comicallyincorrect.com",1],["web.de",2],["skidrowreloaded.com",[3,14]],["1stream.eu",3],["4kwebplay.xyz",3],["antennasports.ru",3],["buffsports.me",[3,55]],["buffstreams.app",3],["claplivehdplay.ru",[3,62]],["cracksports.me",[3,13]],["euro2024direct.ru",3],["ext.to",3],["eztv.tf",3],["eztvx.to",3],["kenitv.me",[3,13,14]],["lewblivehdplay.ru",[3,62]],["mlbbite.net",3],["mlbstreams.ai",3],["qatarstreams.me",[3,13]],["qqwebplay.xyz",[3,62]],["rnbastreams.com",3],["soccerworldcup.me",[3,13]],["topstreams.info",3],["totalsportek.to",3],["viwlivehdplay.ru",3],["vidco.pro",[3,55]],["embedsports.me",[3,106]],["embedstream.me",[3,13,14,55,106]],["jumbtv.com",[3,106]],["reliabletv.me",[3,106]],["topembed.pw",[3,62,104]],["crackstreamer.net",3],["methstreamer.com",3],["yts.mx",6],["magesypro.com",7],["pinsystem.co.uk",7],["elrellano.com",7],["tinyppt.com",7],["bharathwick.com",7],["descargaspcpro.net",7],["dx-tv.com",7],["rt3dmodels.com",7],["plc4me.com",7],["blisseyhusbands.com",7],["madaradex.org",7],["trigonevo.com",7],["franceprefecture.fr",7],["jazbaat.in",7],["aipebel.com",7],["audiotools.blog",7],["veganab.co",7],["camdigest.com",7],["learnmany.in",7],["amanguides.com",[7,88]],["highkeyfinance.com",[7,88]],["appkamods.com",7],["techacode.com",7],["djqunjab.in",7],["downfile.site",7],["expertvn.com",7],["trangchu.news",7],["3dmodelshare.org",7],["nulleb.com",7],["asiaon.top",7],["coursesghar.com",7],["thecustomrom.com",7],["snlookup.com",7],["bingotingo.com",7],["ghior.com",7],["3dmili.com",7],["karanpc.com",7],["plc247.com",7],["apkdelisi.net",7],["javindo.eu.org",7],["chindohot.site",7],["freepasses.org",7],["tomarnarede.pt",7],["basketballbuzz.ca",7],["dribbblegraphics.com",7],["kemiox.com",7],["checkersmenu.us",7],["teksnologi.com",7],["upornia.com",9],["eporner.com",11],["javtiful.com",[11,14]],["germancarforum.com",12],["innateblogger.com",12],["cybercityhelp.in",12],["mlbbox.me",13],["streamnoads.com",[13,14,55]],["bowfile.com",13],["cloudvideo.tv",[13,55]],["coloredmanga.com",13],["exeo.app",13],["hiphopa.net",[13,14]],["megaup.net",13],["olympicstreams.co",[13,55]],["tv247.us",[13,14]],["uploadhaven.com",13],["userscloud.com",[13,55]],["mdfx9dc8n.net",14],["mdzsmutpcvykb.net",14],["mixdrop21.net",14],["mixdropjmk.pw",14],["1337x.ninjaproxy1.com",14],["y2tube.pro",14],["fastreams.com",14],["redittsports.com",14],["sky-sports.store",14],["streamsoccer.site",14],["tntsports.store",14],["wowstreams.co",14],["zdsptv.com",14],["141jav.com",14],["1bit.space",14],["1bitspace.com",14],["3dporndude.com",14],["4archive.org",14],["4horlover.com",14],["560pmovie.com",14],["60fps.xyz",14],["85tube.com",14],["85videos.com",14],["aazzz.xyz",14],["acefile.co",14],["actusports.eu",14],["adclickersbot.com",14],["adricami.com",14],["adslink.pw",14],["adultstvlive.com",14],["adz7short.space",14],["aeblender.com",14],["ahdafnews.blogspot.com",14],["ak47sports.com",14],["akuma.moe",14],["allplayer.tk",14],["allstreaming.online",14],["amadoras.cf",14],["amadorasdanet.shop",14],["amateurblog.tv",14],["androidadult.com",14],["anhsexjav.xyz",14],["anidl.org",14],["anime-loads.org",14],["animeblkom.net",14],["animefire.plus",14],["animelek.me",14],["animespire.net",14],["animestotais.xyz",14],["animeyt.es",14],["anroll.net",14],["anymoviess.xyz",14],["aotonline.org",14],["asenshu.com",14],["asialiveaction.com",14],["asianclipdedhd.net",14],["askim-bg.com",14],["asumsikedaishop.com",14],["avcrempie.com",14],["avseesee.com",14],["gettapeads.com",14],["backfirstwo.com",14],["bajarjuegospcgratis.com",14],["balkanportal.net",14],["balkanteka.net",14],["bdnewszh.com",[14,55]],["belowporn.com",14],["bestclaimtrx.xyz",14],["bestgirlsexy.com",14],["bestnhl.com",14],["bestporn4free.com",14],["bestporncomix.com",14],["bet36.es",14],["bikinitryon.net",14],["birdurls.com",14],["bitsearch.to",14],["blackcockadventure.com",14],["blackcockchurch.org",14],["blackporncrazy.com",14],["blizzboygames.net",14],["blizzpaste.com",14],["blkom.com",14],["blog-peliculas.com",14],["blogtrabalhista.com",14],["bobsvagene.club",14],["bolly4umovies.click",14],["bonusharian.pro",14],["brilian-news.id",14],["brupload.net",14],["bucitana.com",14],["cablegratis.online",14],["camchickscaps.com",14],["camgirlcum.com",14],["camgirls.casa",14],["cashurl.in",14],["castingx.net",14],["ccurl.net",[14,55]],["celebrity-leaks.net",14],["cgpelis.net",14],["charexempire.com",14],["choosingnothing.com",14],["clasico.tv",14],["clik.pw",14],["coin-free.com",[14,85]],["coins100s.fun",14],["comicsmanics.com",14],["compucalitv.com",14],["coolcast2.com",14],["cosplaytab.com",14],["countylocalnews.com",14],["cpmlink.net",14],["crackstreamshd.click",14],["crespomods.com",14],["crisanimex.com",14],["crunchyscan.fr",14],["cuevana3.fan",14],["cuevana3hd.com",14],["cumception.com",14],["cutpaid.com",14],["cypherscans.xyz",[14,55]],["dailyuploads.net",14],["datawav.club",14],["daughtertraining.com",14],["deepgoretube.site",14],["deltabit.co",14],["deporte-libre.top",14],["depvailon.com",14],["derleta.com",14],["desivdo.com",14],["desixx.net",14],["detikkebumen.com",14],["deutschepornos.me",14],["diasoft.xyz",14],["directupload.net",14],["diskusscan.com",14],["dixva.com",14],["doctormalay.com",14],["dofusports.xyz",14],["dogemate.com",14],["doods.cam",14],["doodskin.lat",14],["downloadrips.com",14],["downvod.com",14],["dphunters.mom",14],["dragontranslation.com",14],["duddes.xyz",14],["dvdfullestrenos.com",14],["easylinks.in",14],["ebookbb.com",14],["ebookhunter.net",14],["egyanime.com",14],["egygost.com",14],["egyshare.cc",14],["ekasiwap.com",14],["electro-torrent.pl",14],["elil.cc",14],["embed4u.xyz",14],["eplayer.click",14],["erovoice.us",14],["eroxxx.us",14],["estrenosdoramas.net",14],["everia.club",14],["everythinginherenet.blogspot.com",14],["extrafreetv.com",14],["extremotvplay.com",14],["fapinporn.com",14],["fapptime.com",14],["fashionblog.tv",14],["fastreams.live",14],["faucethero.com",14],["fembed.com",14],["femdom-joi.com",14],["fileone.tv",14],["film1k.com",14],["filmeonline2023.net",14],["filmesonlinex.org",14],["filmesonlinexhd.biz",[14,55]],["filmovitica.com",14],["filmymaza.blogspot.com",14],["filthy.family",14],["firstmovies.to",14],["fixfinder.click",14],["flostreams.xyz",14],["flyfaucet.com",14],["footyhunter.lol",14],["footyhunter3.xyz",[14,55]],["forex-golds.com",14],["forex-trnd.com",14],["forumchat.club",14],["forumlovers.club",14],["freemoviesonline.biz",14],["freeomovie.co.in",14],["freeomovie.to",14],["freeporncomic.net",14],["freepornhdonlinegay.com",14],["freeproxy.io",14],["freeuse.me",14],["freeusexporn.com",14],["fsicomics.com",14],["gambarbogel.xyz",14],["gamepcfull.com",14],["gameronix.com",14],["gamesfullx.com",14],["gameshdlive.net",14],["gameshdlive.xyz",14],["gamesmountain.com",14],["gamesrepacks.com",14],["gamingguru.fr",14],["gamovideo.com",14],["garota.cf",14],["gaydelicious.com",14],["gaypornmasters.com",14],["gaysex69.net",14],["gemstreams.com",14],["get-to.link",14],["girlscanner.org",14],["giurgiuveanul.ro",14],["gledajcrtace.xyz",14],["gocast2.com",14],["gomo.to",14],["gostosa.cf",14],["gtlink.co",14],["gwiazdypornosow.pl",14],["haho.moe",14],["hatsukimanga.com",14],["hayhd.net",14],["hdsaprevodom.com",14],["hdstreamss.club",14],["hentais.tube",14],["hentaistream.co",14],["hentaitk.net",14],["hentaitube.online",14],["hentaiworld.tv",14],["hesgoal.tv",14],["hexupload.net",14],["hhkungfu.tv",14],["highlanderhelp.com",14],["hindimean.com",14],["hindimovies.to",[14,55]],["hiperdex.com",14],["hispasexy.org",14],["hitprn.com",14],["hoca4u.com",14],["hollymoviehd.cc",14],["hoodsite.com",14],["hopepaste.download",14],["hornylips.com",14],["hotgranny.live",14],["hotmama.live",14],["hqcelebcorner.net",14],["huren.best",14],["hwnaturkya.com",[14,55]],["hxfile.co",[14,55]],["igfap.com",14],["ihdstreams.xyz",14],["iklandb.com",14],["illink.net",14],["imgkings.com",14],["imgsex.xyz",14],["imx.to",14],["influencersgonewild.org",14],["infosgj.free.fr",14],["investnewsbrazil.com",14],["itdmusics.com",14],["itsuseful.site",14],["itunesfre.com",14],["iwatchfriendsonline.net",[14,150]],["jackstreams.com",14],["jatimupdate24.com",14],["jav-fun.cc",14],["jav-noni.cc",14],["jav-scvp.com",14],["javcl.com",14],["javf.net",14],["javhay.net",14],["javhoho.com",14],["javhun.com",14],["javleak.com",14],["javporn.best",14],["javsek.net",14],["javsex.to",14],["jimdofree.com",14],["jiofiles.org",14],["jorpetz.com",14],["journalyc.online",14],["jp-films.com",14],["jpop80ss3.blogspot.com",14],["jpopsingles.eu",[14,32]],["kantotflix.net",14],["kantotinyo.com",14],["kaoskrew.org",14],["kaplog.com",14],["keralatvbox.com",14],["kickassanimes.io",14],["kimochi.info",14],["kimochi.tv",14],["kinemania.tv",14],["konstantinova.net",14],["koora-online.live",14],["kunmanga.com",14],["kutmoney.com",14],["kwithsub.com",14],["ladangreceh.xyz",14],["lat69.me",14],["latinblog.tv",14],["latinomegahd.net",14],["lazyfaucet.com",14],["leechpremium.link",14],["legendas.dev",14],["legendei.net",14],["lightdlmovies.blogspot.com",14],["lighterlegend.com",14],["linclik.com",14],["linkebr.com",14],["linkrex.net",14],["links.worldfree4u-lol.online",14],["linksfy.co",14],["lody.ink",14],["lovesomecommunity.com",14],["lulu.st",14],["lulustream.com",[14,55,104]],["luluvdo.com",[14,55]],["luzcameraeacao.shop",14],["manga-oni.com",14],["mangaboat.com",14],["mangagenki.me",14],["mangahere.onl",14],["mangaweb.xyz",14],["mangoporn.net",14],["manhwahentai.me",14],["masahub.com",14],["masahub.net",14],["maturegrannyfuck.com",14],["mdy48tn97.com",14],["mediapemersatubangsa.com",14],["mega-mkv.com",14],["megapastes.com",14],["megapornpics.com",14],["messitv.net",14],["meusanimes.net",14],["milfmoza.com",14],["milfzr.com",14],["millionscast.com",14],["mimaletamusical.blogspot.com",14],["mitly.us",14],["mkv-pastes.com",14],["modb.xyz",14],["monaskuliner.ac.id",14],["moredesi.com",14],["movgotv.net",14],["movi.pk",14],["movierr.online",14],["movieswbb.com",14],["moviewatch.com.pk",14],["mp4upload.com",14],["mrskin.live",14],["multicanaistv.com",14],["mundowuxia.com",14],["myeasymusic.ir",14],["myonvideo.com",14],["myyouporn.com",14],["narutoget.info",14],["naughtypiss.com",14],["nerdiess.com",14],["new-fs.eu",14],["newtorrentgame.com",14],["nflstreams.me",14],["niaomea.me",[14,55]],["nicekkk.com",14],["nicesss.com",14],["nlegs.com",14],["nolive.me",[14,55]],["notformembersonly.com",14],["novamovie.net",14],["novelpdf.xyz",14],["novelssites.com",[14,55]],["novelup.top",14],["nsfwr34.com",14],["nu6i-bg-net.com",14],["nudebabesin3d.com",14],["nukedfans.com",14],["nuoga.eu",14],["nzbstars.com",14],["ohjav.com",14],["ojearnovelas.com",14],["okanime.xyz",14],["olarixas.xyz",14],["oldbox.cloud",14],["olweb.tv",14],["olympicstreams.me",14],["on9.stream",14],["oncast.xyz",14],["onepiece-mangaonline.com",14],["onifile.com",14],["onionstream.live",14],["onlinesaprevodom.net",14],["onlyfullporn.video",14],["onplustv.live",14],["originporn.com",14],["ovagames.com",14],["ovamusic.com",14],["owllink.net",14],["packsporn.com",14],["pahaplayers.click",14],["palimas.org",14],["pandafiles.com",14],["papahd.club",14],["papahd1.xyz",14],["password69.com",14],["pastemytxt.com",14],["payskip.org",14],["peeplink.in",14],["peliculasmx.net",14],["pervertgirlsvideos.com",14],["pervyvideos.com",14],["phim12h.com",14],["picdollar.com",14],["pickteenz.com",14],["pics4you.net",14],["picsxxxporn.com",14],["pinayscandalz.com",14],["pinkueiga.net",14],["piratefast.xyz",14],["piratehaven.xyz",14],["pirateiro.com",14],["pirlotvonline.org",14],["playtube.co.za",14],["plugintorrent.com",14],["pmvzone.com",14],["porndish.com",14],["pornez.net",14],["pornfetishbdsm.com",14],["pornfits.com",14],["pornhd720p.com",14],["pornobr.club",14],["pornobr.ninja",14],["pornodominicano.net",14],["pornofaps.com",14],["pornoflux.com",14],["pornotorrent.com.br",14],["pornredit.com",14],["pornstarsyfamosas.es",14],["pornstreams.co",14],["porntn.com",14],["pornxbit.com",14],["pornxday.com",14],["portaldasnovinhas.shop",14],["portugues-fcr.blogspot.com",14],["poscishd.online",14],["poscitesch.com",[14,55]],["poseyoung.com",14],["pover.org",14],["proxyninja.org",14],["pubfilmz.com",14],["publicsexamateurs.com",14],["punanihub.com",14],["putlocker5movies.org",14],["pxxbay.com",14],["r18.best",14],["ragnaru.net",14],["rapbeh.net",14],["rapelust.com",14],["rapload.org",14],["read-onepiece.net",14],["retro-fucking.com",14],["retrotv.org",14],["robaldowns.com",14],["rockdilla.com",14],["rojadirectatvenvivo.com",14],["rojitadirecta.blogspot.com",14],["romancetv.site",14],["rsoccerlink.site",14],["rule34.club",14],["rule34hentai.net",14],["rumahbokep-id.com",14],["safego.cc",14],["safestream.cc",14],["sakurafile.com",14],["satoshi-win.xyz",14],["scat.gold",14],["scatfap.com",14],["scatkings.com",14],["scnlog.me",14],["scripts-webmasters.net",14],["serie-turche.com",14],["serijefilmovi.com",14],["sexcomics.me",14],["sexdicted.com",14],["sexgay18.com",14],["sexofilm.co",14],["sextgem.com",14],["sextubebbw.com",14],["sgpics.net",14],["shadowrangers.live",14],["shahee4u.cam",14],["shahiid-anime.net",14],["shemale6.com",14],["shinden.pl",14],["short.es",14],["showmanga.blog.fc2.com",14],["shrt10.com",14],["shurt.pw",14],["sideplusleaks.net",14],["silverblog.tv",14],["silverpic.com",14],["sinhalasub.life",14],["sinsitio.site",14],["sinvida.me",14],["skidrowcpy.com",14],["skidrowfull.com",14],["slut.mom",14],["smallencode.me",14],["smoner.com",14],["smplace.com",14],["soccerinhd.com",[14,55]],["socceron.name",14],["softairbay.com",14],["sokobj.com",14],["songsio.com",14],["souexatasmais.com",14],["sportbar.live",14],["sportea.online",14],["sportskart.xyz",14],["sportstream1.cfd",14],["srt.am",14],["srts.me",14],["stakes100.xyz",14],["stbemuiptv.com",14],["stockingfetishvideo.com",14],["stream.crichd.vip",14],["stream.lc",14],["stream25.xyz",14],["streambee.to",14],["streamcenter.pro",14],["streamers.watch",14],["streamgo.to",14],["streamkiste.tv",14],["streamoporn.xyz",14],["streamoupload.xyz",14],["streamservicehd.click",14],["streamvid.net",[14,23]],["subtitleporn.com",14],["subtitles.cam",14],["suicidepics.com",14],["supertelevisionhd.com",14],["supexfeeds.com",14],["swiftload.io",14],["swzz.xyz",14],["sxnaar.com",14],["tabooporns.com",14],["taboosex.club",14],["tapeantiads.com",14],["tapeblocker.com",14],["tapenoads.com",14],["tapewithadblock.org",[14,209]],["teamos.xyz",14],["teen-wave.com",14],["teenporncrazy.com",14],["telegramgroups.xyz",14],["telenovelasweb.com",14],["tensei-shitara-slime-datta-ken.com",14],["tfp.is",14],["tgo-tv.co",[14,55]],["thaihotmodels.com",14],["theblueclit.com",14],["thebussybandit.com",14],["thedaddy.to",[14,59]],["theicongenerator.com",14],["thelastdisaster.vip",14],["thepiratebay0.org",14],["thepiratebay10.info",14],["thesexcloud.com",14],["thothub.today",14],["tightsexteens.com",14],["tojav.net",14],["tokyoblog.tv",14],["tonnestreamz.xyz",14],["top16.net",14],["topvideosgay.com",14],["torrage.info",14],["torrents.vip",14],["torrsexvid.com",14],["tpb-proxy.xyz",14],["trannyteca.com",14],["trendytalker.com",14],["tumanga.net",14],["turbogvideos.com",14],["turbovid.me",14],["turkishseriestv.org",14],["turksub24.net",14],["tutele.sx",14],["tutelehd3.xyz",14],["tvglobe.me",14],["tvpclive.com",14],["tvs-widget.com",14],["tvseries.video",14],["ucptt.com",14],["ufaucet.online",14],["ufcfight.online",14],["uhdgames.xyz",14],["ultrahorny.com",14],["ultraten.net",14],["unblockweb.me",14],["underhentai.net",14],["uniqueten.net",14],["upbaam.com",14],["upstream.to",14],["valeriabelen.com",14],["verdragonball.online",14],["vfxmed.com",14],["video.az",14],["videostreaming.rocks",14],["videowood.tv",14],["vidorg.net",14],["vidtapes.com",14],["vidz7.com",14],["vikistream.com",14],["vikv.net",14],["virpe.cc",14],["visifilmai.org",14],["viveseries.com",14],["vladrustov.sx",14],["volokit2.com",[14,59]],["vstorrent.org",14],["w-hentai.com",14],["watchaccordingtojimonline.com",14],["watchbrooklynnine-nine.com",14],["watchdowntonabbeyonline.com",14],["watchelementaryonline.com",14],["watcheronline.net",14],["watchgleeonline.com",14],["watchhowimetyourmother.online",14],["watchkobestreams.info",14],["watchlostonline.net",14],["watchlouieonline.com",14],["watchjavidol.com",14],["watchmadmenonline.com",14],["watchmonkonline.com",14],["watchonceuponatimeonline.com",14],["watchparksandrecreation.net",14],["watchprettylittleliarsonline.com",14],["watchrulesofengagementonline.com",14],["watchthekingofqueens.com",14],["watchthemiddleonline.com",14],["watchtvchh.xyz",14],["webcamrips.com",14],["wickedspot.org",14],["wincest.xyz",14],["witanime.best",14],["wolverdon.fun",14],["wolverdonx.com",14],["wordcounter.icu",14],["worldcupstream.pm",14],["worldmovies.store",14],["worldstreams.click",14],["wpdeployit.com",14],["wqstreams.tk",14],["wwwsct.com",14],["xanimeporn.com",14],["xblog.tv",14],["xn--verseriesespaollatino-obc.online",14],["xn--xvideos-espaol-1nb.com",14],["xpornium.net",14],["xsober.com",14],["xvip.lat",14],["xxgasm.com",14],["xxvideoss.org",14],["xxx18.uno",14],["xxxdominicana.com",14],["xxxfree.watch",14],["xxxmax.net",14],["xxxwebdlxxx.top",14],["xxxxvideo.uno",14],["y2b.wiki",14],["yabai.si",14],["yadixv.com",14],["yayanimes.net",14],["yeshd.net",14],["yodbox.com",14],["youjax.com",14],["youpits.xyz",14],["yourdailypornvideos.ws",14],["yourupload.com",14],["ytstv.me",14],["ytstvmovies.co",14],["ytstvmovies.xyz",14],["ytsyify.co",14],["ytsyifymovie.com",14],["zerion.cc",14],["zerocoin.top",14],["zitss.xyz",14],["zpaste.net",14],["zplayer.live",14],["faucet.ovh",15],["oko.sh",[16,95,96]],["variety.com",17],["gameskinny.com",17],["deadline.com",17],["washingtonpost.com",18],["bigbtc.win",19],["cryptofun.space",19],["gosexpod.com",20],["sexo5k.com",21],["truyen-hentai.com",21],["theshedend.com",23],["eracast.cc",23],["zeroupload.com",23],["securenetsystems.net",23],["miniwebtool.com",23],["bchtechnologies.com",23],["spiegel.de",24],["jacquieetmichel.net",25],["hausbau-forum.de",26],["kiemlua.com",26],["appnee.com",27],["apkmirror.com",[28,117]],["smashystream.com",29],["cineb.rs",31],["hiraethtranslation.com",32],["fcportables.com",33],["repack-games.com",33],["pawastreams.info",33],["truyentranhfull.net",33],["d0000d.com",34],["d000d.com",34],["d0o0d.com",34],["do0od.com",34],["doods.pro",34],["ds2play.com",34],["ds2video.com",34],["xfreehd.com",35],["freethesaurus.com",36],["thefreedictionary.com",36],["dexterclearance.com",37],["onlyfaucet.com",38],["smutty.com",39],["e-sushi.fr",39],["freeadultcomix.com",39],["down.dataaps.com",39],["filmweb.pl",39],["visionpapers.org",40],["fdownloader.net",41],["thehackernews.com",42],["mielec.pl",43],["camsrip.com",44],["help.sakarnewz.com",44],["beatsnoop.com",44],["fetchpik.com",44],["hackerranksolution.in",44],["treasl.com",45],["mrbenne.com",46],["cnpics.org",47],["ovabee.com",47],["porn4f.com",47],["cnxx.me",47],["ai18.pics",47],["cuervotv.me",[48,55]],["aliezstream.pro",48],["daddy-stream.xyz",48],["instream.pro",48],["mylivestream.pro",48],["powerover.online",48],["sportea.link",48],["sportsurge.stream",48],["ufckhabib.com",48],["ustream.pro",48],["papa4k.online",48],["animeshqip.site",48],["apkship.shop",48],["buzter.pro",48],["enjoysports.bond",48],["filedot.to",48],["foreverquote.xyz",48],["hdstream.one",48],["kingstreamz.site",48],["live.fastsports.store",48],["livesnow.me",48],["livesports4u.pw",48],["masterpro.click",48],["nuxhallas.click",48],["papahd.info",48],["rgshows.me",48],["sportmargin.live",48],["sportmargin.online",48],["sportsloverz.xyz",48],["sportzlive.shop",48],["supertipzz.online",48],["totalfhdsport.xyz",48],["ultrastreamlinks.xyz",48],["usgate.xyz",48],["webmaal.cfd",48],["wizistreamz.xyz",48],["worldstreamz.shop",48],["nontongo.win",48],["g-porno.com",48],["g-streaming.com",48],["giga-streaming.com",48],["educ4m.com",48],["fromwatch.com",48],["visualnewshub.com",48],["neymartv.net",48],["streamhd247.info",48],["hindimoviestv.com",48],["nowlive1.me",48],["buzter.xyz",48],["gamehdlive.online",48],["hdfungamezz.xyz",48],["kingstreamz.lol",48],["masterpro.club",48],["papahd.co",48],["sportos.co",48],["valhallas.click",48],["andhrafriends.com",49],["freeroms.com",49],["soap2day-online.com",49],["sportsonline.si",50],["fiuxy2.co",51],["animeunity.to",52],["auto-crypto.click",53],["iconicblogger.com",53],["tokopedia.com",54],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",55],["adsh.cc",55],["afilmyhouse.blogspot.com",55],["ak.sv",55],["animesultra.com",55],["api.webs.moe",55],["apkmody.io",55],["attvideo.com",55],["backfirstwo.site",[55,179]],["crazyblog.in",55],["divicast.com",55],["dlhd.so",55],["embed.meomeo.pw",55],["filmeserialeonline.org",55],["flexyhit.com",55],["foreverwallpapers.com",55],["french-streams.cc",55],["fslinks.org",55],["hdtoday.to",55],["hinatasoul.com",55],["igg-games.com",55],["infinityscans.net",55],["infinityscans.xyz",55],["mangareader.to",55],["membed.net",55],["mgnetu.com",55],["mp3juice.info",55],["mp3juices.cc",55],["myflixerz.to",55],["nowmetv.net",55],["nowsportstv.com",55],["nxbrew.com",55],["oii.io",55],["paidshitforfree.com",55],["pepperlive.info",55],["playertv.net",55],["putlocker68.com",55],["roystream.com",55],["rssing.com",55],["s.to",55],["share.filesh.site",55],["sharkfish.xyz",55],["skidrowcodex.net",55],["smartermuver.com",55],["sports-stream.site",55],["stream4free.live",55],["tamilmobilemovies.in",55],["tapeadsenjoyer.com",55],["thewatchseries.live",55],["tnmusic.in",55],["travelplanspro.com",55],["tusfiles.com",55],["tutlehd4.com",55],["twstalker.com",55],["vid-guard.com",55],["video-leech.xyz",55],["vidsaver.net",55],["vidspeeds.com",55],["viralitytoday.com",55],["voiranime.stream",55],["watchdoctorwhoonline.com",55],["watchserie.online",55],["webhostingpost.com",55],["woxikon.in",55],["www-y2mate.com",55],["ylink.bid",55],["ytix.xyz",55],["remixsearch.net",56],["remixsearch.es",56],["onlineweb.tools",56],["sharing.wtf",56],["2024tv.ru",57],["xnxxcom.xyz",58],["sportsurge.net",59],["joyousplay.xyz",59],["quest4play.xyz",[59,62]],["generalpill.net",59],["moneycontrol.com",60],["hesgoal-tv.io",61],["hesgoal-vip.io",61],["intro-hd.net",61],["monacomatin.mc",61],["nodo313.net",61],["cookiewebplay.xyz",62],["ilovetoplay.xyz",62],["streamcaster.live",62],["weblivehdplay.ru",62],["codec.kyiv.ua",63],["kimcilonlyofc.com",63],["unofficialtwrp.com",63],["oaaxpgp3.xyz",64],["m9.news",65],["sexwebvideo.com",66],["sexwebvideo.net",66],["pig69.com",66],["cosplay18.pics",66],["zeemoontv-24.blogspot.com",67],["stitichsports.com",67],["tinys.click",67],["answerpython.com",67],["formyanime.com",67],["gsm-solution.com",67],["h-donghua.com",67],["hindisubbedacademy.com",67],["linksdramas2.blogspot.com",67],["pkgovjobz.com",67],["ripexbooster.xyz",67],["serial4.com",67],["serial412.blogspot.com",67],["sigmalinks.in",67],["tutorgaming.com",67],["everydaytechvams.com",67],["dipsnp.com",67],["cccam4sat.com",67],["x-video.tube",68],["rahim-soft.com",68],["callofwar.com",69],["secondhandsongs.com",70],["nudezzers.org",71],["nohost.one",72],["zoechip.com",72],["3rooodnews.net",73],["xxxbfvideo.net",74],["filmy4wap.co.in",75],["gameshop4u.com",76],["regenzi.site",76],["pcgeeks-games.com",77],["easymc.io",77],["newscon.org",77],["yunjiema.top",77],["handirect.fr",78],["animefenix.tv",79],["tempinbox.xyz",80],["mailgen.biz",80],["fsiblog3.club",81],["kamababa.desi",81],["updatewallah.in",82],["mediaset.es",82],["tea-coffee.net",83],["spatsify.com",83],["newedutopics.com",83],["getviralreach.in",83],["edukaroo.com",83],["funkeypagali.com",83],["careersides.com",83],["nayisahara.com",83],["wikifilmia.com",83],["infinityskull.com",83],["viewmyknowledge.com",83],["iisfvirtual.in",83],["starxinvestor.com",83],["jkssbalerts.com",83],["kenzo-flowertag.com",84],["mdn.lol",84],["btcbitco.in",85],["btcsatoshi.net",85],["cempakajaya.com",85],["crypto4yu.com",85],["gainl.ink",85],["manofadan.com",85],["readbitcoin.org",85],["wiour.com",85],["kienthucrangmieng.com",85],["tremamnon.com",85],["btc25.org",85],["tron-free.com",85],["bitsmagic.fun",85],["ourcoincash.xyz",85],["hynews.biz",85],["blog.cryptowidgets.net",86],["blog.insurancegold.in",86],["blog.wiki-topia.com",86],["blog.coinsvalue.net",86],["blog.cookinguide.net",86],["blog.freeoseocheck.com",86],["aylink.co",87],["sugarona.com",88],["nishankhatri.xyz",88],["cety.app",89],["exego.app",89],["cutlink.net",89],["cutsy.net",89],["cutyurls.com",89],["cutty.app",89],["cutnet.net",89],["aiimgvlog.fun",90],["appsbull.com",91],["diudemy.com",91],["maqal360.com",91],["mphealth.online",91],["makefreecallsonline.com",91],["androjungle.com",91],["bookszone.in",91],["drakescans.com",91],["shortix.co",91],["msonglyrics.com",91],["app-sorteos.com",91],["bokugents.com",91],["client.pylexnodes.net",91],["btvplus.bg",91],["blog24.me",[92,93]],["coingraph.us",94],["impact24.us",94],["tvi.la",[95,96]],["iir.la",[95,96]],["tii.la",[95,96]],["ckk.ai",[95,96]],["oei.la",[95,96]],["lnbz.la",[95,96]],["oii.la",[95,96]],["tpi.li",[95,96]],["atglinks.com",97],["kbconlinegame.com",98],["hamrojaagir.com",98],["odijob.com",98],["blogesque.net",99],["bookbucketlyst.com",99],["explorosity.net",99],["optimizepics.com",99],["torovalley.net",99],["travize.net",99],["trekcheck.net",99],["metoza.net",99],["techlike.net",99],["snaplessons.net",99],["atravan.net",99],["transoa.net",99],["techmize.net",99],["crenue.net",99],["simana.online",100],["fooak.com",100],["joktop.com",100],["evernia.site",100],["falpus.com",100],["financemonk.net",101],["cgtips.org",102],["emuenzen.de",103],["buffshub.stream",104],["cinego.tv",104],["fstream365.com",104],["sportshub.stream",104],["topcinema.cam",104],["unblocked.id",107],["listendata.com",108],["7xm.xyz",108],["fastupload.io",108],["azmath.info",108],["wouterplanet.com",109],["androidacy.com",110],["pillowcase.su",111],["veryfreeporn.com",112],["theporngod.com",112],["besthdgayporn.com",113],["drivenime.com",113],["javup.org",113],["shemaleup.net",113],["austiblox.net",114],["btcbunch.com",115],["teachoo.com",116],["automobile-catalog.com",[117,118]],["motorbikecatalog.com",[117,118]],["blog.esuteru.com",117],["blog.livedoor.jp",117],["itainews.com",117],["jin115.com",117],["allthetests.com",117],["javatpoint.com",117],["globalrph.com",117],["carscoops.com",117],["crosswordsolver.com",117],["cruciverba.it",117],["dnevno.hr",117],["ff14net.2chblog.jp",117],["heureka.cz",117],["indiatimes.com",117],["laleggepertutti.it",117],["meeco.kr",117],["mirrored.to",117],["motscroises.fr",117],["news4vip.livedoor.biz",117],["oeffnungszeitenbuch.de",117],["onecall2ch.com",117],["oraridiapertura24.it",117],["palabr.as",117],["petitfute.com",117],["rabitsokuhou.2chblog.jp",117],["rostercon.com",117],["sourceforge.net",117],["suzusoku.blog.jp",117],["the-crossword-solver.com",117],["thestockmarketwatch.com",117],["wfmz.com",117],["word-grabber.com",117],["wort-suchen.de",117],["yutura.net",117],["zagreb.info",117],["freemcserver.net",117],["golf-live.at",117],["kreuzwortraetsel.de",117],["raetsel-hilfe.de",117],["verkaufsoffener-sonntag.com",117],["horairesdouverture24.fr",117],["nyitvatartas24.hu",117],["modhub.us",117],["yugioh-starlight.com",117],["winfuture.de",117],["talkwithstranger.com",117],["topstarnews.net",117],["islamicfinder.org",117],["secure-signup.net",117],["dramabeans.com",117],["manta.com",117],["tportal.hr",117],["tvtropes.org",117],["wouldurather.io",117],["convertcase.net",117],["interfootball.co.kr",118],["a-ha.io",118],["cboard.net",118],["jjang0u.com",118],["joongdo.co.kr",118],["viva100.com",118],["gamingdeputy.com",118],["thesaurus.net",118],["alle-tests.nl",118],["maketecheasier.com",118],["allthekingz.com",118],["tweaksforgeeks.com",118],["m.inven.co.kr",118],["mlbpark.donga.com",118],["meconomynews.com",118],["brandbrief.co.kr",118],["motorgraph.com",118],["worldhistory.org",119],["lovelive-petitsoku.com",120],["pravda.com.ua",120],["jutarnji.hr",121],["slobodnadalmacija.hr",121],["persoenlich.com",122],["bitcotasks.com",123],["hilites.today",124],["udvl.com",125],["www.chip.de",126],["topsporter.net",127],["sportshub.to",127],["streamcheck.link",128],["myanimelist.net",129],["bitcosite.com",130],["bitzite.com",130],["hentaiseason.com",131],["hoodtrendspredict.com",131],["osteusfilmestuga.online",131],["tvappapk.com",131],["twobluescans.com",[131,132]],["hacoos.com",134],["bondagevalley.cc",135],["zefoy.com",136],["vidello.net",137],["resizer.myct.jp",138],["gametohkenranbu.sakuraweb.com",139],["jisakuhibi.jp",140],["rank1-media.com",140],["lifematome.blog",141],["fm.sekkaku.net",142],["free-avx.jp",143],["dvdrev.com",144],["betweenjpandkr.blog",145],["nft-media.net",146],["ghacks.net",147],["leak.sx",148],["paste.bin.sx",148],["pornleaks.in",148],["songspk2.info",149],["nectareousoverelate.com",151],["khoaiphim.com",152],["haafedk2.com",153],["fordownloader.com",153],["jovemnerd.com.br",154],["totalcsgo.com",155],["vivamax.asia",156],["manysex.com",157],["gaminginfos.com",158],["tinxahoivn.com",159],["automoto.it",160],["codelivly.com",161],["lordchannel.com",162],["touguatize.monster",163],["client.falixnodes.net",164],["novelhall.com",165],["abc17news.com",166],["bailiwickexpress.com",166],["barnsleychronicle.com",166],["chaptercheats.com",166],["commercialobserver.com",166],["competentedigitale.ro",166],["freeconvert.com",166],["fsm-media.com",166],["funtasticlife.com",166],["fwmadebycarli.com",166],["gamerant.com",166],["gfinityesports.com",166],["givemesport.com",166],["gulflive.com",166],["helloflo.com",166],["homeglowdesign.com",166],["honeygirlsworld.com",166],["hotcars.com",166],["howtogeek.com",166],["imgur.com",166],["insider-gaming.com",166],["insurancejournal.com",166],["jasminemaria.com",166],["kion546.com",166],["lehighvalleylive.com",166],["lettyskitchen.com",166],["lifeinleggings.com",166],["liveandletsfly.com",166],["lizzieinlace.com",166],["localnews8.com",166],["lonestarlive.com",166],["madeeveryday.com",166],["maidenhead-advertiser.co.uk",166],["makeuseof.com",166],["mardomreport.net",166],["melangery.com",166],["milestomemories.com",166],["modernmom.com",166],["momtastic.com",166],["mostlymorgan.com",166],["motherwellmag.com",166],["movieweb.com",166],["muddybootsanddiamonds.com",166],["musicfeeds.com.au",166],["mylifefromhome.com",166],["nationalreview.com",166],["neoskosmos.com",166],["nordot.app",166],["nothingbutnewcastle.com",166],["nsjonline.com",166],["oakvillenews.org",166],["observer.com",166],["ourlittlesliceofheaven.com",166],["palachinkablog.com",166],["patheos.com",166],["pinkonthecheek.com",166],["politicususa.com",166],["predic.ro",166],["puckermom.com",166],["qtoptens.com",166],["realgm.com",166],["reelmama.com",166],["robbreport.com",166],["royalmailchat.co.uk",166],["samchui.com",166],["sandrarose.com",166],["screenrant.com",166],["sherdog.com",166],["sidereel.com",166],["silive.com",166],["simpleflying.com",166],["sloughexpress.co.uk",166],["spacenews.com",166],["sportsgamblingpodcast.com",166],["spotofteadesigns.com",166],["stacysrandomthoughts.com",166],["ssnewstelegram.com",166],["superherohype.com",166],["tablelifeblog.com",166],["thebeautysection.com",166],["thecelticblog.com",166],["thecurvyfashionista.com",166],["thefashionspot.com",166],["thegamer.com",166],["thegamescabin.com",166],["thenerdyme.com",166],["thenonconsumeradvocate.com",166],["theprudentgarden.com",166],["thethings.com",166],["timesnews.net",166],["topspeed.com",166],["toyotaklub.org.pl",166],["travelingformiles.com",166],["tutsnode.org",166],["viralviralvideos.com",166],["wannacomewith.com",166],["wimp.com",[166,168]],["windsorexpress.co.uk",166],["woojr.com",166],["worldoftravelswithkids.com",166],["worldsurfleague.com",166],["xda-developers.com",166],["adoredbyalex.com",166],["agrodigital.com",[166,168]],["al.com",[166,168]],["aliontherunblog.com",[166,168]],["allaboutthetea.com",[166,168]],["allmovie.com",[166,168]],["allmusic.com",[166,168]],["allthingsthrifty.com",[166,168]],["amessagewithabottle.com",[166,168]],["androidpolice.com",166],["antyradio.pl",166],["artforum.com",[166,168]],["artnews.com",[166,168]],["awkward.com",[166,168]],["awkwardmom.com",[166,168]],["becomingpeculiar.com",166],["bethcakes.com",[166,168]],["blogher.com",[166,168]],["bluegraygal.com",[166,168]],["briefeguru.de",[166,168]],["carmagazine.co.uk",166],["cattime.com",166],["cbr.com",166],["cleveland.com",[166,168]],["collider.com",166],["comingsoon.net",166],["crafty.house",166],["dailyvoice.com",[166,168]],["decider.com",[166,168]],["didyouknowfacts.com",[166,168]],["dogtime.com",[166,168]],["dualshockers.com",166],["dustyoldthing.com",166],["faithhub.net",166],["femestella.com",[166,168]],["footwearnews.com",[166,168]],["frogsandsnailsandpuppydogtail.com",[166,168]],["masslive.com",[166,168,212]],["mlive.com",[166,168]],["nj.com",[166,168]],["oregonlive.com",[166,168]],["pagesix.com",[166,168,212]],["pennlive.com",[166,168,212]],["sheknows.com",[166,168]],["syracuse.com",[166,168,212]],["tvline.com",[166,168]],["cheatsheet.com",167],["pwinsider.com",167],["baeldung.com",167],["mensjournal.com",167],["247sports.com",[168,212]],["betweenenglandandiowa.com",168],["bgr.com",168],["blu-ray.com",168],["brobible.com",168],["cbsnews.com",[168,212]],["cbssports.com",[168,212]],["celiacandthebeast.com",168],["dailykos.com",168],["eater.com",168],["eldiariony.com",168],["free-power-point-templates.com",168],["inc.com",168],["indiewire.com",[168,212]],["inquisitr.com",168],["intouchweekly.com",168],["kcrg.com",168],["kentucky.com",168],["knowyourmeme.com",168],["last.fm",168],["lifeandstylemag.com",168],["mandatory.com",168],["nbcsports.com",168],["news.com.au",168],["nypost.com",[168,212]],["rollingstone.com",168],["sbnation.com",168],["sneakernews.com",168],["sport-fm.gr",168],["stylecaster.com",168],["tastingtable.com",168],["thecw.com",168],["themarysue.com",168],["usmagazine.com",168],["yourcountdown.to",168],["bagi.co.in",169],["keran.co",169],["biblestudytools.com",170],["christianheadlines.com",170],["ibelieve.com",170],["kuponigo.com",171],["kimcilonly.site",172],["kimcilonly.link",172],["cryptoearns.com",173],["inxxx.com",174],["ipaspot.app",175],["embedwish.com",176],["filelions.live",176],["leakslove.net",176],["jenismac.com",177],["vxetable.cn",178],["jewelavid.com",179],["nizarstream.com",179],["snapwordz.com",180],["toolxox.com",180],["rl6mans.com",180],["idol69.net",180],["plumbersforums.net",181],["123movies57.online",182],["gulio.site",183],["izlekolik.net",184],["donghuaworld.com",185],["letsdopuzzles.com",186],["hes-goals.io",187],["pkbiosfix.com",187],["casi3.xyz",187],["rediff.com",188],["dzapk.com",189],["darknessporn.com",190],["familyporner.com",190],["freepublicporn.com",190],["pisshamster.com",190],["punishworld.com",190],["xanimu.com",190],["tainio-mania.online",191],["javhdo.net",192],["eroticmoviesonline.me",193],["teleclub.xyz",194],["ecamrips.com",195],["showcamrips.com",195],["tucinehd.com",196],["9animetv.to",197],["qiwi.gg",198],["jornadaperfecta.com",199],["loseart.com",200],["sousou-no-frieren.com",201],["unite-guide.com",202],["thebullspen.com",203],["botcomics.com",204],["cefirates.com",204],["chandlerorchards.com",204],["comicleaks.com",204],["marketdata.app",204],["monumentmetals.com",204],["tapmyback.com",204],["ping.gg",204],["revistaferramental.com.br",204],["hawpar.com",204],["alpacafinance.org",[204,205]],["nookgaming.com",204],["enkeleksamen.no",204],["kvest.ee",204],["creatordrop.com",204],["panpots.com",204],["cybernetman.com",204],["bitdomain.biz",204],["gerardbosch.xyz",204],["fort-shop.kiev.ua",204],["accuretawealth.com",204],["resourceya.com",204],["tracktheta.com",204],["camberlion.com",204],["replai.io",204],["trybawaryjny.pl",204],["segops.madisonspecs.com",204],["tt.live",205],["future-fortune.com",205],["adventuretix.com",205],["bolighub.dk",205],["panprices.com",206],["intercity.technology",206],["freelancer.taxmachine.be",206],["adria.gg",206],["fjlaboratories.com",206],["emanualonline.com",206],["abhijith.page",206],["helpmonks.com",206],["dataunlocker.com",207],["proboards.com",208],["winclassic.net",208],["pandadoc.com",210],["wiki.yjsnpi.nu",211],["abema.tv",213]]);

const entitiesMap = new Map([["vidsrc",[3,13,55]],["flix-wave",3],["mixdrop",[3,14]],["sanet",3],["sportshd",3],["wawacity",3],["720pstream",[3,55]],["pahe",[5,14]],["soap2day",5],["mhdsports",7],["mhdsportstv",7],["mhdtvsports",7],["mhdtvworld",7],["mhdtvmax",7],["mhdstream",7],["reset-scans",7],["poplinks",[7,91]],["hqq",8],["waaw",8],["pixhost",10],["viprow",[13,14,55]],["bluemediadownload",13],["bluemediafile",13],["bluemedialink",13],["bluemediastorage",13],["bluemediaurls",13],["urlbluemedia",13],["cloudvideotv",[13,55]],["123-movies",14],["123movieshd",14],["123movieshub",14],["123moviesme",14],["1337x",[14,30]],["1stream",14],["1tamilmv",14],["2ddl",14],["2umovies",14],["3hiidude",14],["4stream",14],["5movies",14],["7hitmovies",14],["9xmovie",14],["9xlinks",14],["aagmaal",[14,55]],["adblockeronstape",14],["adblockeronstreamtape",14],["adblockplustape",14],["adblockstreamtape",14],["adblockstrtape",14],["adblockstrtech",14],["adblocktape",14],["adcorto",14],["alexsports",14],["alexsportss",14],["alexsportz",14],["animepahe",14],["animesanka",14],["animixplay",14],["aniplay",14],["antiadtape",14],["asianclub",14],["ask4movie",14],["atomixhq",[14,55]],["atomohd",14],["beinmatch",[14,22]],["bhaai",14],["blurayufr",14],["buffstreams",14],["canalesportivo",14],["clickndownload",14],["clicknupload",14],["daddylive",[14,55]],["daddylivehd",[14,55]],["ddrmovies",14],["desiremovies",14],["devlib",14],["divxtotal",14],["divxtotal1",14],["dlhd",14],["dvdplay",[14,55]],["elixx",14],["enjoy4k",14],["estrenosflix",14],["estrenosflux",14],["estrenosgo",14],["f1stream",14],["fbstream",14],["file4go",14],["filmymeet",14],["filmyzilla",[14,55]],["findav",14],["findporn",14],["flixmaza",14],["flizmovies",14],["freetvsports",14],["fullymaza",14],["g3g",14],["gotxx",14],["grantorrent",14],["hdmoviesfair",[14,55]],["hdmoviesflix",14],["hiidudemoviez",14],["imgsen",14],["imgsto",14],["incest",14],["incestflix",14],["itopmusic",14],["javmost",14],["keeplinks",14],["keepvid",14],["keralahd",14],["khatrimazaful",14],["khatrimazafull",14],["leechall",14],["linkshorts",14],["mangovideo",14],["masaporn",14],["miniurl",14],["mirrorace",14],["mixdroop",14],["mkvcage",14],["mlbstream",14],["mlsbd",14],["mmsbee",14],["motogpstream",14],["movieplex",14],["movierulzlink",14],["movies123",14],["moviesflix",14],["moviesmeta",14],["moviessources",14],["moviesverse",14],["moviezwaphd",14],["mrunblock",14],["nbastream",14],["newmovierulz",14],["nflstream",14],["nhlstream",14],["noblocktape",14],["nocensor",14],["onlyfams",14],["ouo",14],["pctfenix",[14,55]],["pctnew",[14,55]],["peliculas24",14],["pelisplus",14],["piratebay",14],["plyjam",14],["plylive",14],["plyvdo",14],["pornhoarder",14],["prbay",14],["projectfreetv",14],["proxybit",14],["psarips",14],["racaty",14],["remaxhd",14],["rintor",14],["rnbxclusive",14],["rnbxclusive0",14],["rnbxclusive1",14],["rojadirecta",14],["rojadirectaenvivo",14],["rugbystreams",14],["sadisflix",14],["safetxt",14],["shadowrangers",14],["shahi4u",14],["shahid4u1",14],["shahid4uu",14],["shavetape",14],["shortearn",14],["shorten",14],["shorttey",14],["shortzzy",14],["skymovieshd",14],["socceronline",[14,55]],["softarchive",14],["sports-stream",14],["sporttuna",14],["sshhaa",14],["stapadblockuser",14],["stape",14],["stapewithadblock",14],["starmusiq",14],["strcloud",14],["streamadblocker",[14,55]],["streamadblockplus",14],["streamcdn",14],["streamhub",14],["streamsport",14],["streamta",14],["streamtape",14],["streamtapeadblockuser",14],["strikeout",14],["strtape",14],["strtapeadblock",14],["strtapeadblocker",14],["strtapewithadblock",14],["strtpe",14],["swatchseries",14],["tabooflix",14],["tennisstreams",14],["themoviesflix",14],["thepiratebay",14],["thisav",14],["tmearn",14],["toonanime",14],["torlock",14],["tormalayalam",14],["torrentz2eu",14],["tutelehd",14],["tvply",14],["u4m",14],["ufcstream",14],["unblocknow",14],["uploadbuzz",14],["usagoals",14],["vexmoviex",14],["vidclouds",14],["vidlox",14],["vipbox",[14,55]],["vipboxtv",[14,55]],["vipleague",14],["watch-series",14],["watchseries",14],["xclusivejams",14],["xmoviesforyou",14],["youdbox",14],["ytmp3eu",14],["yts-subs",14],["yts",14],["zooqle",14],["dutchycorp",15],["torrentdownload",31],["mkvcinemas",[31,55]],["dood",[34,55]],["doodstream",34],["dooood",[34,55]],["livecamrips",39],["shrinke",39],["shrinkme",39],["daddylive1",48],["esportivos",48],["poscitechs",48],["bollyflix",48],["watchomovies",[49,55]],["123movies",55],["123moviesla",55],["123movieweb",55],["2embed",55],["9xmovies",55],["adshort",55],["allmovieshub",55],["asianplay",55],["atishmkv",55],["bflix",55],["cricstream",55],["crictime",55],["databasegdriveplayer",55],["extramovies",55],["faselhd",55],["faselhds",55],["filemoon",55],["filmy",55],["filmyhit",55],["filmywap",55],["fmovies",55],["gdplayer",55],["goku",55],["gomovies",55],["gowatchseries",55],["hdfungamezz",55],["hindilinks4u",55],["hurawatch",55],["jalshamoviezhd",55],["livecricket",55],["mhdsport",55],["movies2watch",55],["moviespapa",55],["mp4moviez",55],["mydownloadtube",55],["nuroflix",55],["o2tvseries",55],["o2tvseriesz",55],["pirlotv",55],["poscitech",55],["primewire",55],["redecanais",55],["serienstream",55],["sflix",55],["shahed4u",55],["shaheed4u",55],["speedostream",55],["sportcast",55],["sportskart",55],["streamingcommunity",55],["tamilarasan",55],["tamilfreemp3songs",55],["tamilprinthd",55],["torrentdosfilmes",55],["tubemate",55],["uploadrar",55],["uqload",55],["vidcloud9",55],["vido",55],["vidoo",55],["vudeo",55],["vumoo",55],["yesmovies",55],["mydverse",67],["actvid",72],["stfly",99],["stly",99],["dropgalaxy",101],["11xmovies",104],["streamblasters",104],["kickass",105],["cine-calidad",112],["woxikon",117],["ftuapps",131],["showflix",131],["teluguflix",133]]);

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
