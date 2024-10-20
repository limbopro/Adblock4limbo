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

const argsList = [["script","DisplayAcceptableAdIfAdblocked"],["script","/==undefined.*body/"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","Reflect"],["script","document.write"],["script","deblocker"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","exdynsrv"],["script","navigator.brave"],["script","/adb/i"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|adblock/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","Adblock"],["script","alert"],["script","document.createTextNode"],["script","style"],["script","shown_at"],["script","adsSrc"],["script","ai_adb"],["script","/adblock|popunder/"],["script","/fetch|adb/i"],["script","window.open"],["script","adblockimg"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","googlesyndication"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/pop1stp|detectAdBlock/"],["script","popundersPerIP"],["script","popunder"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","catch"],["script","displayAdsV3"],["script",";}}};break;case $."],["script","adblocker"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","initializeInterstitial"],["script","/adbl/i"],["script","mdpDeblocker"],["script","Math.floor"],["script","m9-ad-modal"],["script","detectAdBlock"],["script","antiAdBlockerHandler"],["script","wpadmngr.com"],["script","Anzeige"],["script","blocking"],["script","adBlockNotice"],["script","HTMLAllCollection"],["script","/ABDetected|navigator.brave|fetch/"],["script","/bypass.php"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script",";break;case $."],["script","adb_detected"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","/event\\.keyCode|DisableDevtool/"],["style","text-decoration"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","charCodeAt"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","KCgpPT57bGV0IGU"],["script","error-report.com"],["script","adShield"],["script","Ad-Shield"],["script","adrecover.com"],["script","AdblockRegixFinder"],["script","serve"],["script","/, [0-9]{4,5}\\)\\] \\* [4-9]\\; \\}/"],["script","/ConsoleBan|alert|AdBlocker/"],["script","runPop"],["style","body:not(.ownlist)"],["script","alert","condition","adblock"],["script","adb"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","zfgloaded"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/modal|popupads/"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","app_checkext"],["script","clientHeight"],["script","pop.target"],["script","!window.adngin"],["script","axios"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","\"\").split(\",\")[4]"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","AdBlock"],["script","Symbol.iterator"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","AaDetector"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","document.head.appendChild"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","detect"],["script","fetch"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","QioE"],["script","platformVersion"],["script",".className.indexOf"],["script","\"data-adm-url\""],["script","NREUM"]];

const hostnamesMap = new Map([["alpin.de",0],["boersennews.de",0],["chefkoch.de",0],["chip.de",0],["clever-tanken.de",0],["desired.de",0],["donnerwetter.de",0],["fanfiktion.de",0],["focus.de",0],["formel1.de",0],["frustfrei-lernen.de",0],["gewinnspiele.tv",0],["giga.de",0],["gut-erklaert.de",0],["kino.de",0],["messen.de",0],["nickles.de",0],["nordbayern.de",0],["spielfilm.de",0],["teltarif.de",0],["unsere-helden.com",0],["weltfussball.at",0],["watson.de",0],["moviepilot.de",[0,4]],["mactechnews.de",0],["sport1.de",0],["aupetitparieur.com",1],["allthingsvegas.com",1],["100percentfedup.com",1],["beforeitsnews.com",1],["concomber.com",1],["conservativebrief.com",1],["conservativefiringline.com",1],["dailylol.com",1],["funnyand.com",1],["letocard.fr",1],["mamieastuce.com",1],["meilleurpronostic.fr",1],["patriotnationpress.com",1],["toptenz.net",1],["vitamiiin.com",1],["writerscafe.org",1],["populist.press",1],["dailytruthreport.com",1],["livinggospeldaily.com",1],["first-names-meanings.com",1],["welovetrump.com",1],["thehayride.com",1],["thelibertydaily.com",1],["thepoke.co.uk",1],["thepolitistick.com",1],["theblacksphere.net",1],["shark-tank.com",1],["naturalblaze.com",1],["greatamericanrepublic.com",1],["dailysurge.com",1],["truthlion.com",1],["flagandcross.com",1],["westword.com",1],["republicbrief.com",1],["freedomfirstnetwork.com",1],["phoenixnewtimes.com",1],["designbump.com",1],["clashdaily.com",1],["madworldnews.com",1],["reviveusa.com",1],["sonsoflibertymedia.com",1],["thedesigninspiration.com",1],["videogamesblogger.com",1],["protrumpnews.com",1],["thepalmierireport.com",1],["kresy.pl",1],["thepatriotjournal.com",1],["gellerreport.com",1],["thegatewaypundit.com",1],["wltreport.com",1],["miaminewtimes.com",1],["politicalsignal.com",1],["rightwingnews.com",1],["bigleaguepolitics.com",1],["comicallyincorrect.com",1],["web.de",2],["skidrowreloaded.com",[3,15]],["1stream.eu",3],["4kwebplay.xyz",3],["antennasports.ru",3],["buffsports.me",[3,51]],["buffstreams.app",3],["claplivehdplay.ru",3],["cracksports.me",[3,14]],["euro2024direct.ru",3],["ext.to",3],["eztv.tf",3],["eztvx.to",3],["kenitv.me",[3,14,15]],["lewblivehdplay.ru",3],["mlbbite.net",3],["mlbstreams.ai",3],["qatarstreams.me",[3,14]],["qqwebplay.xyz",3],["rnbastreams.com",3],["soccerworldcup.me",[3,14]],["topstreams.info",3],["totalsportek.to",3],["viwlivehdplay.ru",3],["sportsurge.net",3],["vidco.pro",[3,51]],["topembed.pw",3],["crackstreamer.net",3],["methstreamer.com",3],["yts.mx",6],["magesypro.com",7],["pinsystem.co.uk",7],["elrellano.com",7],["tinyppt.com",7],["bharathwick.com",7],["descargaspcpro.net",7],["dx-tv.com",7],["rt3dmodels.com",7],["plc4me.com",7],["blisseyhusbands.com",7],["madaradex.org",7],["trigonevo.com",7],["franceprefecture.fr",7],["jazbaat.in",7],["aipebel.com",7],["audiotools.blog",7],["veganab.co",7],["camdigest.com",7],["learnmany.in",7],["amanguides.com",[7,71]],["highkeyfinance.com",[7,71]],["appkamods.com",7],["techacode.com",7],["djqunjab.in",7],["downfile.site",7],["expertvn.com",7],["trangchu.news",7],["3dmodelshare.org",7],["nulleb.com",7],["asiaon.top",7],["coursesghar.com",7],["thecustomrom.com",7],["snlookup.com",7],["bingotingo.com",7],["ghior.com",7],["3dmili.com",7],["karanpc.com",7],["plc247.com",7],["apkdelisi.net",7],["javindo.eu.org",7],["chindohot.site",7],["freepasses.org",7],["tomarnarede.pt",7],["basketballbuzz.ca",7],["dribbblegraphics.com",7],["kemiox.com",7],["checkersmenu.us",7],["teksnologi.com",7],["upornia.com",9],["xfreehd.com",11],["leak.sx",11],["paste.bin.sx",11],["pornleaks.in",11],["eporner.com",12],["javtiful.com",[12,15]],["germancarforum.com",13],["innateblogger.com",13],["cybercityhelp.in",13],["mlbbox.me",14],["streamnoads.com",[14,15,51]],["bowfile.com",14],["cloudvideo.tv",[14,51]],["coloredmanga.com",14],["embedstream.me",[14,15,51]],["exeo.app",14],["hiphopa.net",[14,15]],["megaup.net",14],["olympicstreams.co",[14,51]],["tv247.us",[14,15]],["uploadhaven.com",14],["userscloud.com",[14,51]],["mdfx9dc8n.net",15],["mdzsmutpcvykb.net",15],["mixdrop21.net",15],["mixdropjmk.pw",15],["y2tube.pro",15],["fastreams.com",15],["redittsports.com",15],["sky-sports.store",15],["streamsoccer.site",15],["tntsports.store",15],["wowstreams.co",15],["123movies4u.site",15],["1337xporn.com",15],["141jav.com",15],["1bit.space",15],["1bitspace.com",15],["38dh2.top",15],["3dporndude.com",15],["4archive.org",15],["4horlover.com",15],["560pmovie.com",15],["60fps.xyz",15],["85tube.com",15],["85videos.com",15],["8xlinks.click",15],["a2zcrackworld.com",15],["aazzz.xyz",15],["acefile.co",15],["actusports.eu",15],["adclickersbot.com",15],["adricami.com",15],["adslink.pw",15],["adultstvlive.com",15],["adz7short.space",15],["aeblender.com",15],["ahdafnews.blogspot.com",15],["ak47sports.com",15],["akuma.moe",15],["allplayer.tk",15],["allstreaming.online",15],["amadoras.cf",15],["amadorasdanet.shop",15],["amateurblog.tv",15],["androidadult.com",15],["anhsexjav.xyz",15],["anidl.org",15],["anime-loads.org",15],["animeblkom.net",15],["animefire.plus",15],["animelek.me",15],["animespire.net",15],["animestotais.xyz",15],["animeyt.es",15],["anroll.net",15],["anymoviess.xyz",15],["aotonline.org",15],["asenshu.com",15],["asialiveaction.com",15],["asianclipdedhd.net",15],["askim-bg.com",15],["asumsikedaishop.com",15],["avcrempie.com",15],["avseesee.com",15],["gettapeads.com",15],["backfirstwo.com",15],["bajarjuegospcgratis.com",15],["balkanportal.net",15],["balkanteka.net",15],["bdnewszh.com",[15,51]],["belowporn.com",15],["bestclaimtrx.xyz",15],["bestgirlsexy.com",15],["bestnhl.com",15],["bestporn4free.com",15],["bestporncomix.com",15],["bet36.es",15],["bikinitryon.net",15],["birdurls.com",15],["bitsearch.to",15],["blackcockadventure.com",15],["blackcockchurch.org",15],["blackporncrazy.com",15],["blizzboygames.net",15],["blizzpaste.com",15],["blkom.com",15],["blog-peliculas.com",15],["blogtrabalhista.com",15],["bobsvagene.club",15],["bolly4umovies.click",15],["bonusharian.pro",15],["brilian-news.id",15],["brupload.net",15],["bucitana.com",15],["cablegratis.online",15],["camchickscaps.com",15],["camgirlcum.com",15],["camgirls.casa",15],["cashurl.in",15],["castingx.net",15],["ccurl.net",[15,51]],["celebrity-leaks.net",15],["cgpelis.net",15],["charexempire.com",15],["choosingnothing.com",15],["clasico.tv",15],["clik.pw",15],["coin-free.com",[15,68]],["coins100s.fun",15],["comicsmanics.com",15],["compucalitv.com",15],["coolcast2.com",15],["cosplaytab.com",15],["countylocalnews.com",15],["cpmlink.net",15],["crackstreamshd.click",15],["crespomods.com",15],["crisanimex.com",15],["crunchyscan.fr",15],["cuevana3.fan",15],["cuevana3hd.com",15],["cumception.com",15],["cutpaid.com",15],["cypherscans.xyz",[15,51]],["dailyuploads.net",15],["datawav.club",15],["daughtertraining.com",15],["deepgoretube.site",15],["deltabit.co",15],["deporte-libre.top",15],["depvailon.com",15],["derleta.com",15],["desivdo.com",15],["desixx.net",15],["detikkebumen.com",15],["deutschepornos.me",15],["diasoft.xyz",15],["directupload.net",15],["diskusscan.com",15],["dixva.com",15],["doctormalay.com",15],["dofusports.xyz",15],["dogemate.com",15],["doods.cam",15],["doodskin.lat",15],["downloadrips.com",15],["downvod.com",15],["dphunters.mom",15],["dragontranslation.com",15],["duddes.xyz",15],["dvdfullestrenos.com",15],["easylinks.in",15],["ebookbb.com",15],["ebookhunter.net",15],["egyanime.com",15],["egygost.com",15],["egyshare.cc",15],["ekasiwap.com",15],["electro-torrent.pl",15],["elil.cc",15],["embed4u.xyz",15],["eplayer.click",15],["erovoice.us",15],["eroxxx.us",15],["estrenosdoramas.net",15],["everia.club",15],["everythinginherenet.blogspot.com",15],["extrafreetv.com",15],["extremotvplay.com",15],["fapinporn.com",15],["fapptime.com",15],["fashionblog.tv",15],["fastreams.live",15],["faucethero.com",15],["fembed.com",15],["femdom-joi.com",15],["fileone.tv",15],["film1k.com",15],["filmeonline2023.net",15],["filmesonlinex.org",15],["filmesonlinexhd.biz",[15,51]],["filmovitica.com",15],["filmymaza.blogspot.com",15],["filthy.family",15],["firstmovies.to",15],["fixfinder.click",15],["flostreams.xyz",15],["flyfaucet.com",15],["footyhunter.lol",15],["footyhunter3.xyz",[15,51]],["forex-golds.com",15],["forex-trnd.com",15],["forumchat.club",15],["forumlovers.club",15],["freemoviesonline.biz",15],["freeomovie.co.in",15],["freeomovie.to",15],["freeporncomic.net",15],["freepornhdonlinegay.com",15],["freeproxy.io",15],["freeuse.me",15],["freeusexporn.com",15],["fsicomics.com",15],["gambarbogel.xyz",15],["gamepcfull.com",15],["gameronix.com",15],["gamesfullx.com",15],["gameshdlive.net",15],["gameshdlive.xyz",15],["gamesmountain.com",15],["gamesrepacks.com",15],["gamingguru.fr",15],["gamovideo.com",15],["garota.cf",15],["gaydelicious.com",15],["gaypornmasters.com",15],["gaysex69.net",15],["gemstreams.com",15],["get-to.link",15],["girlscanner.org",15],["giurgiuveanul.ro",15],["gledajcrtace.xyz",15],["gocast2.com",15],["gomo.to",15],["gostosa.cf",15],["gtlink.co",15],["gwiazdypornosow.pl",15],["haho.moe",15],["hatsukimanga.com",15],["hayhd.net",15],["hdsaprevodom.com",15],["hdstreamss.club",15],["hentais.tube",15],["hentaistream.co",15],["hentaitk.net",15],["hentaitube.online",15],["hentaiworld.tv",15],["hesgoal.tv",15],["hexupload.net",15],["hhkungfu.tv",15],["highlanderhelp.com",15],["hindimean.com",15],["hindimovies.to",[15,51]],["hiperdex.com",15],["hispasexy.org",15],["hitprn.com",15],["hoca4u.com",15],["hollymoviehd.cc",15],["hoodsite.com",15],["hopepaste.download",15],["hornylips.com",15],["hotgranny.live",15],["hotmama.live",15],["hqcelebcorner.net",15],["huren.best",15],["hwnaturkya.com",[15,51]],["hxfile.co",[15,51]],["igfap.com",15],["ihdstreams.xyz",15],["iklandb.com",15],["illink.net",15],["imgkings.com",15],["imgsex.xyz",15],["imx.to",15],["influencersgonewild.org",15],["infosgj.free.fr",15],["investnewsbrazil.com",15],["itdmusics.com",15],["itsuseful.site",15],["itunesfre.com",15],["iwatchfriendsonline.net",[15,125]],["jackstreams.com",15],["jatimupdate24.com",15],["jav-fun.cc",15],["jav-noni.cc",15],["jav-scvp.com",15],["javcl.com",15],["javf.net",15],["javhay.net",15],["javhoho.com",15],["javhun.com",15],["javleak.com",15],["javporn.best",15],["javsex.to",15],["jimdofree.com",15],["jiofiles.org",15],["jorpetz.com",15],["journalyc.online",15],["jp-films.com",15],["jpop80ss3.blogspot.com",15],["jpopsingles.eu",[15,31]],["kantotflix.net",15],["kantotinyo.com",15],["kaoskrew.org",15],["kaplog.com",15],["keralatvbox.com",15],["kickassanimes.io",15],["kimochi.info",15],["kimochi.tv",15],["kinemania.tv",15],["konstantinova.net",15],["koora-online.live",15],["kunmanga.com",15],["kutmoney.com",15],["kwithsub.com",15],["ladangreceh.xyz",15],["lat69.me",15],["latinblog.tv",15],["latinomegahd.net",15],["lazyfaucet.com",15],["leechpremium.link",15],["legendas.dev",15],["legendei.net",15],["lightdlmovies.blogspot.com",15],["lighterlegend.com",15],["linclik.com",15],["linkebr.com",15],["linkrex.net",15],["links.worldfree4u-lol.online",15],["linksfy.co",15],["lody.ink",15],["lovesomecommunity.com",15],["lulu.st",15],["lulustream.com",[15,51]],["luluvdo.com",[15,51]],["luzcameraeacao.shop",15],["manga-oni.com",15],["mangaboat.com",15],["mangagenki.me",15],["mangahere.onl",15],["mangaweb.xyz",15],["mangoporn.net",15],["manhwahentai.me",15],["masahub.com",15],["masahub.net",15],["maturegrannyfuck.com",15],["mdy48tn97.com",15],["mediapemersatubangsa.com",15],["mega-mkv.com",15],["megapastes.com",15],["megapornpics.com",15],["messitv.net",15],["meusanimes.net",15],["milfmoza.com",15],["milfzr.com",15],["millionscast.com",15],["mimaletamusical.blogspot.com",15],["mitly.us",15],["mkv-pastes.com",15],["modb.xyz",15],["monaskuliner.ac.id",15],["moredesi.com",15],["movgotv.net",15],["movi.pk",15],["movierr.online",15],["movieswbb.com",15],["moviewatch.com.pk",15],["mp4upload.com",15],["mrskin.live",15],["multicanaistv.com",15],["mundowuxia.com",15],["myeasymusic.ir",15],["myonvideo.com",15],["myyouporn.com",15],["narutoget.info",15],["naughtypiss.com",15],["nerdiess.com",15],["new-fs.eu",15],["newtorrentgame.com",15],["nflstreams.me",15],["niaomea.me",[15,51]],["nicekkk.com",15],["nicesss.com",15],["nlegs.com",15],["nolive.me",[15,51]],["notformembersonly.com",15],["novamovie.net",15],["novelpdf.xyz",15],["novelssites.com",[15,51]],["novelup.top",15],["nsfwr34.com",15],["nu6i-bg-net.com",15],["nudebabesin3d.com",15],["nukedfans.com",15],["nuoga.eu",15],["nzbstars.com",15],["ohjav.com",15],["ojearnovelas.com",15],["okanime.xyz",15],["olarixas.xyz",15],["oldbox.cloud",15],["olweb.tv",15],["olympicstreams.me",15],["on9.stream",15],["oncast.xyz",15],["onepiece-mangaonline.com",15],["onifile.com",15],["onionstream.live",15],["onlinesaprevodom.net",15],["onlyfullporn.video",15],["onplustv.live",15],["originporn.com",15],["ovagames.com",15],["ovamusic.com",15],["owllink.net",15],["packsporn.com",15],["pahaplayers.click",15],["palimas.org",15],["pandafiles.com",15],["papahd.club",15],["papahd1.xyz",15],["password69.com",15],["pastemytxt.com",15],["payskip.org",15],["peeplink.in",15],["peliculasmx.net",15],["pervertgirlsvideos.com",15],["pervyvideos.com",15],["phim12h.com",15],["picdollar.com",15],["pickteenz.com",15],["pics4you.net",15],["picsxxxporn.com",15],["pinayscandalz.com",15],["pinkueiga.net",15],["piratefast.xyz",15],["piratehaven.xyz",15],["pirateiro.com",15],["pirlotvonline.org",15],["playtube.co.za",15],["plugintorrent.com",15],["pmvzone.com",15],["porndish.com",15],["pornez.net",15],["pornfetishbdsm.com",15],["pornfits.com",15],["pornhd720p.com",15],["pornobr.club",15],["pornobr.ninja",15],["pornodominicano.net",15],["pornofaps.com",15],["pornoflux.com",15],["pornotorrent.com.br",15],["pornredit.com",15],["pornstarsyfamosas.es",15],["pornstreams.co",15],["porntn.com",15],["pornxbit.com",15],["pornxday.com",15],["portaldasnovinhas.shop",15],["portugues-fcr.blogspot.com",15],["poscishd.online",15],["poscitesch.com",[15,51]],["poseyoung.com",15],["pover.org",15],["proxyninja.org",15],["pubfilmz.com",15],["publicsexamateurs.com",15],["punanihub.com",15],["putlocker5movies.org",15],["pxxbay.com",15],["r18.best",15],["ragnaru.net",15],["rapbeh.net",15],["rapelust.com",15],["rapload.org",15],["read-onepiece.net",15],["retro-fucking.com",15],["retrotv.org",15],["robaldowns.com",15],["rockdilla.com",15],["rojadirectatvenvivo.com",15],["rojitadirecta.blogspot.com",15],["romancetv.site",15],["rsoccerlink.site",15],["rule34.club",15],["rule34hentai.net",15],["rumahbokep-id.com",15],["safego.cc",15],["safestream.cc",15],["sakurafile.com",15],["satoshi-win.xyz",15],["scat.gold",15],["scatfap.com",15],["scatkings.com",15],["scnlog.me",15],["scripts-webmasters.net",15],["serie-turche.com",15],["serijefilmovi.com",15],["sexcomics.me",15],["sexdicted.com",15],["sexgay18.com",15],["sexofilm.co",15],["sextgem.com",15],["sextubebbw.com",15],["sgpics.net",15],["shadowrangers.live",15],["shahee4u.cam",15],["shahiid-anime.net",15],["shemale6.com",15],["shinden.pl",15],["short.es",15],["showmanga.blog.fc2.com",15],["shrt10.com",15],["shurt.pw",15],["sideplusleaks.net",15],["silverblog.tv",15],["silverpic.com",15],["sinhalasub.life",15],["sinsitio.site",15],["sinvida.me",15],["skidrowcpy.com",15],["skidrowfull.com",15],["slut.mom",15],["smallencode.me",15],["smoner.com",15],["smplace.com",15],["soccerinhd.com",[15,51]],["socceron.name",15],["softairbay.com",15],["sokobj.com",15],["songsio.com",15],["souexatasmais.com",15],["sportbar.live",15],["sportea.online",15],["sportskart.xyz",15],["sportstream1.cfd",15],["sporttuna.site",15],["srt.am",15],["srts.me",15],["stakes100.xyz",15],["stbemuiptv.com",15],["stockingfetishvideo.com",15],["stream.crichd.vip",15],["stream.lc",15],["stream25.xyz",15],["streambee.to",15],["streamcenter.pro",15],["streamers.watch",15],["streamgo.to",15],["streamkiste.tv",15],["streamoporn.xyz",15],["streamoupload.xyz",15],["streamservicehd.click",15],["streamvid.net",[15,24]],["subtitleporn.com",15],["subtitles.cam",15],["suicidepics.com",15],["supertelevisionhd.com",15],["supexfeeds.com",15],["swiftload.io",15],["swzz.xyz",15],["sxnaar.com",15],["tabooporns.com",15],["taboosex.club",15],["tapeantiads.com",15],["tapeblocker.com",15],["tapenoads.com",15],["tapewithadblock.org",[15,185]],["teamos.xyz",15],["teen-wave.com",15],["teenporncrazy.com",15],["telegramgroups.xyz",15],["telenovelasweb.com",15],["tensei-shitara-slime-datta-ken.com",15],["tfp.is",15],["tgo-tv.co",[15,51]],["thaihotmodels.com",15],["theblueclit.com",15],["thebussybandit.com",15],["theicongenerator.com",15],["thelastdisaster.vip",15],["thepiratebay0.org",15],["thepiratebay10.info",15],["thesexcloud.com",15],["thothub.today",15],["tightsexteens.com",15],["tojav.net",15],["tokyoblog.tv",15],["tonnestreamz.xyz",15],["top16.net",15],["topvideosgay.com",15],["torrage.info",15],["torrents.vip",15],["torrsexvid.com",15],["tpb-proxy.xyz",15],["trannyteca.com",15],["trendytalker.com",15],["tumanga.net",15],["turbogvideos.com",15],["turbovid.me",15],["turkishseriestv.org",15],["turksub24.net",15],["tutele.sx",15],["tutelehd3.xyz",15],["tvglobe.me",15],["tvpclive.com",15],["tvs-widget.com",15],["tvseries.video",15],["ucptt.com",15],["ufaucet.online",15],["ufcfight.online",15],["uhdgames.xyz",15],["ultrahorny.com",15],["ultraten.net",15],["unblockweb.me",15],["underhentai.net",15],["uniqueten.net",15],["upbaam.com",15],["upstream.to",15],["valeriabelen.com",15],["verdragonball.online",15],["vfxmed.com",15],["video.az",15],["videostreaming.rocks",15],["videowood.tv",15],["vidorg.net",15],["vidtapes.com",15],["vidz7.com",15],["vikistream.com",15],["vikv.net",15],["virpe.cc",15],["visifilmai.org",15],["viveseries.com",15],["vladrustov.sx",15],["volokit2.com",15],["vstorrent.org",15],["w-hentai.com",15],["watchaccordingtojimonline.com",15],["watchbrooklynnine-nine.com",15],["watchdowntonabbeyonline.com",15],["watchelementaryonline.com",15],["watcheronline.net",15],["watchgleeonline.com",15],["watchhowimetyourmother.online",15],["watchkobestreams.info",15],["watchlostonline.net",15],["watchlouieonline.com",15],["watchjavidol.com",15],["watchmadmenonline.com",15],["watchmonkonline.com",15],["watchonceuponatimeonline.com",15],["watchparksandrecreation.net",15],["watchprettylittleliarsonline.com",15],["watchrulesofengagementonline.com",15],["watchthekingofqueens.com",15],["watchthemiddleonline.com",15],["watchtvchh.xyz",15],["webcamrips.com",15],["wickedspot.org",15],["wincest.xyz",15],["witanime.best",15],["wolverdon.fun",15],["wolverdonx.com",15],["wordcounter.icu",15],["worldcupstream.pm",15],["worldmovies.store",15],["worldstreams.click",15],["wpdeployit.com",15],["wqstreams.tk",15],["wwwsct.com",15],["xanimeporn.com",15],["xblog.tv",15],["xn--verseriesespaollatino-obc.online",15],["xn--xvideos-espaol-1nb.com",15],["xpornium.net",15],["xsober.com",15],["xvip.lat",15],["xxgasm.com",15],["xxvideoss.org",15],["xxx18.uno",15],["xxxdominicana.com",15],["xxxfree.watch",15],["xxxmax.net",15],["xxxwebdlxxx.top",15],["xxxxvideo.uno",15],["y2b.wiki",15],["yabai.si",15],["yadixv.com",15],["yayanimes.net",15],["yeshd.net",15],["yodbox.com",15],["youjax.com",15],["youpits.xyz",15],["yourdailypornvideos.ws",15],["yourupload.com",15],["ytstv.me",15],["ytstvmovies.co",15],["ytstvmovies.xyz",15],["ytsyify.co",15],["ytsyifymovie.com",15],["zerion.cc",15],["zerocoin.top",15],["zitss.xyz",15],["zpaste.net",15],["zplayer.live",15],["faucet.ovh",16],["oko.sh",[17,78,79]],["variety.com",18],["gameskinny.com",18],["deadline.com",18],["washingtonpost.com",19],["bigbtc.win",20],["cryptofun.space",20],["gosexpod.com",21],["sexo5k.com",22],["truyen-hentai.com",22],["theshedend.com",24],["eracast.cc",24],["zeroupload.com",24],["securenetsystems.net",24],["miniwebtool.com",24],["bchtechnologies.com",24],["spiegel.de",25],["hausbau-forum.de",26],["kiemlua.com",26],["appnee.com",27],["apkmirror.com",28],["cineb.rs",30],["hiraethtranslation.com",31],["fcportables.com",32],["repack-games.com",32],["pawastreams.info",32],["truyentranhfull.net",32],["d0000d.com",33],["d000d.com",33],["d0o0d.com",33],["do0od.com",33],["doods.pro",33],["ds2play.com",33],["ds2video.com",33],["onlyfaucet.com",34],["smutty.com",35],["freeadultcomix.com",35],["down.dataaps.com",35],["filmweb.pl",35],["visionpapers.org",36],["fdownloader.net",37],["thehackernews.com",38],["mielec.pl",39],["camsrip.com",40],["help.sakarnewz.com",40],["beatsnoop.com",40],["fetchpik.com",40],["hackerranksolution.in",40],["treasl.com",41],["mrbenne.com",42],["cnpics.org",43],["ovabee.com",43],["porn4f.com",43],["cnxx.me",43],["ai18.pics",43],["cuervotv.me",[44,51]],["aliezstream.pro",44],["daddy-stream.xyz",44],["instream.pro",44],["mylivestream.pro",44],["powerover.online",44],["sportea.link",44],["sportsurge.stream",44],["ufckhabib.com",44],["ustream.pro",44],["papa4k.online",44],["nontongo.win",44],["g-porno.com",44],["g-streaming.com",44],["giga-streaming.com",44],["educ4m.com",44],["fromwatch.com",44],["visualnewshub.com",44],["streamhd247.info",44],["nowlive1.me",44],["buzter.xyz",44],["gamehdlive.online",44],["hdfungamezz.xyz",44],["kingstreamz.lol",44],["masterpro.club",44],["papahd.co",44],["sportos.co",44],["valhallas.click",44],["andhrafriends.com",45],["freeroms.com",45],["soap2day-online.com",45],["sportsonline.si",46],["fiuxy2.co",47],["animeunity.to",48],["auto-crypto.click",49],["iconicblogger.com",49],["tokopedia.com",50],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",51],["adsh.cc",51],["afilmyhouse.blogspot.com",51],["ak.sv",51],["animesultra.com",51],["api.webs.moe",51],["apkmody.io",51],["attvideo.com",51],["backfirstwo.site",[51,154]],["crazyblog.in",51],["divicast.com",51],["dlhd.so",51],["embed.meomeo.pw",51],["filmeserialeonline.org",51],["flexyhit.com",51],["foreverwallpapers.com",51],["french-streams.cc",51],["fslinks.org",51],["fstream365.com",51],["hdtoday.to",51],["hinatasoul.com",51],["igg-games.com",51],["infinityscans.net",[51,187]],["infinityscans.xyz",[51,187]],["mangareader.to",51],["membed.net",51],["mgnetu.com",51],["mp3juice.info",51],["mp3juices.cc",51],["myflixerz.to",51],["nowmetv.net",51],["nowsportstv.com",51],["nxbrew.com",51],["oii.io",51],["paidshitforfree.com",51],["pepperlive.info",51],["playertv.net",51],["putlocker68.com",51],["roystream.com",51],["rssing.com",51],["s.to",51],["share.filesh.site",51],["sharkfish.xyz",51],["skidrowcodex.net",51],["sports-stream.site",51],["stream4free.live",51],["streamed.su",51],["tamilmobilemovies.in",51],["tapeadsenjoyer.com",51],["thewatchseries.live",51],["tnmusic.in",51],["travelplanspro.com",51],["tusfiles.com",51],["tutlehd4.com",51],["twstalker.com",51],["vid-guard.com",51],["video-leech.xyz",51],["vidsaver.net",51],["vidspeeds.com",51],["viralitytoday.com",51],["voiranime.stream",51],["watchdoctorwhoonline.com",51],["watchserie.online",51],["webhostingpost.com",51],["woxikon.in",51],["www-y2mate.com",51],["ylink.bid",51],["ytix.xyz",51],["remixsearch.net",52],["remixsearch.es",52],["onlineweb.tools",52],["sharing.wtf",52],["xnxxcom.xyz",53],["moneycontrol.com",54],["hesgoal-tv.io",55],["hesgoal-vip.io",55],["intro-hd.net",55],["monacomatin.mc",55],["nodo313.net",55],["codec.kyiv.ua",56],["unofficialtwrp.com",56],["oaaxpgp3.xyz",57],["m9.news",58],["sexwebvideo.com",59],["sexwebvideo.net",59],["pig69.com",59],["cosplay18.pics",59],["zeemoontv-24.blogspot.com",60],["stitichsports.com",60],["tinys.click",60],["answerpython.com",60],["gsm-solution.com",60],["h-donghua.com",60],["hindisubbedacademy.com",60],["linksdramas2.blogspot.com",60],["pkgovjobz.com",60],["ripexbooster.xyz",60],["serial4.com",60],["serial412.blogspot.com",60],["sigmalinks.in",60],["tutorgaming.com",60],["everydaytechvams.com",60],["dipsnp.com",60],["cccam4sat.com",60],["x-video.tube",61],["rahim-soft.com",61],["callofwar.com",62],["secondhandsongs.com",63],["nudezzers.org",64],["nohost.one",65],["zoechip.com",65],["tea-coffee.net",66],["spatsify.com",66],["newedutopics.com",66],["getviralreach.in",66],["edukaroo.com",66],["funkeypagali.com",66],["careersides.com",66],["nayisahara.com",66],["wikifilmia.com",66],["infinityskull.com",66],["viewmyknowledge.com",66],["iisfvirtual.in",66],["starxinvestor.com",66],["jkssbalerts.com",66],["kenzo-flowertag.com",67],["mdn.lol",67],["btcbitco.in",68],["btcsatoshi.net",68],["cempakajaya.com",68],["crypto4yu.com",68],["gainl.ink",68],["manofadan.com",68],["readbitcoin.org",68],["wiour.com",68],["kienthucrangmieng.com",68],["tremamnon.com",68],["btc25.org",68],["tron-free.com",68],["bitsmagic.fun",68],["ourcoincash.xyz",68],["hynews.biz",68],["blog.cryptowidgets.net",69],["blog.insurancegold.in",69],["blog.wiki-topia.com",69],["blog.coinsvalue.net",69],["blog.cookinguide.net",69],["blog.freeoseocheck.com",69],["aylink.co",70],["sugarona.com",71],["nishankhatri.xyz",71],["cety.app",72],["exego.app",72],["cutlink.net",72],["cutsy.net",72],["cutyurls.com",72],["cutty.app",72],["cutnet.net",72],["aiimgvlog.fun",73],["appsbull.com",74],["diudemy.com",74],["maqal360.com",74],["mphealth.online",74],["makefreecallsonline.com",74],["androjungle.com",74],["bookszone.in",74],["drakescans.com",74],["shortix.co",74],["msonglyrics.com",74],["app-sorteos.com",74],["bokugents.com",74],["client.pylexnodes.net",74],["btvplus.bg",74],["blog24.me",[75,76]],["coingraph.us",77],["impact24.us",77],["tvi.la",[78,79]],["iir.la",[78,79]],["tii.la",[78,79]],["ckk.ai",[78,79]],["oei.la",[78,79]],["lnbz.la",[78,79]],["oii.la",[78,79]],["tpi.li",[78,79]],["atglinks.com",80],["kbconlinegame.com",81],["hamrojaagir.com",81],["odijob.com",81],["blogesque.net",82],["bookbucketlyst.com",82],["explorosity.net",82],["optimizepics.com",82],["torovalley.net",82],["travize.net",82],["trekcheck.net",82],["metoza.net",82],["techlike.net",82],["snaplessons.net",82],["atravan.net",82],["transoa.net",82],["techmize.net",82],["crenue.net",82],["simana.online",83],["fooak.com",83],["joktop.com",83],["evernia.site",83],["financemonk.net",84],["unblocked.id",86],["listendata.com",87],["7xm.xyz",87],["fastupload.io",87],["azmath.info",87],["wouterplanet.com",88],["androidacy.com",89],["pillowcase.su",90],["veryfreeporn.com",91],["theporngod.com",91],["besthdgayporn.com",92],["drivenime.com",92],["javup.org",92],["shemaleup.net",92],["austiblox.net",93],["btcbunch.com",94],["teachoo.com",95],["interfootball.co.kr",96],["a-ha.io",96],["cboard.net",96],["jjang0u.com",96],["joongdo.co.kr",96],["viva100.com",96],["gamingdeputy.com",96],["thesaurus.net",96],["alle-tests.nl",96],["maketecheasier.com",96],["automobile-catalog.com",[96,97]],["allthekingz.com",96],["motorbikecatalog.com",[96,97]],["tweaksforgeeks.com",96],["m.inven.co.kr",96],["mlbpark.donga.com",96],["meconomynews.com",96],["brandbrief.co.kr",96],["motorgraph.com",96],["blog.esuteru.com",97],["blog.livedoor.jp",97],["itainews.com",97],["jin115.com",97],["allthetests.com",97],["javatpoint.com",97],["globalrph.com",97],["carscoops.com",97],["crosswordsolver.com",97],["cruciverba.it",97],["ff14net.2chblog.jp",97],["heureka.cz",97],["indiatimes.com",97],["laleggepertutti.it",97],["meeco.kr",97],["motscroises.fr",97],["news4vip.livedoor.biz",97],["oeffnungszeitenbuch.de",97],["onecall2ch.com",97],["oraridiapertura24.it",97],["palabr.as",97],["rabitsokuhou.2chblog.jp",97],["suzusoku.blog.jp",97],["the-crossword-solver.com",97],["thestockmarketwatch.com",97],["word-grabber.com",97],["wort-suchen.de",97],["freemcserver.net",97],["golf-live.at",97],["kreuzwortraetsel.de",97],["raetsel-hilfe.de",97],["verkaufsoffener-sonntag.com",97],["horairesdouverture24.fr",97],["nyitvatartas24.hu",97],["modhub.us",97],["yugioh-starlight.com",97],["winfuture.de",97],["topstarnews.net",97],["islamicfinder.org",97],["secure-signup.net",97],["dramabeans.com",97],["manta.com",97],["tportal.hr",97],["tvtropes.org",97],["wouldurather.io",97],["worldhistory.org",98],["lovelive-petitsoku.com",99],["pravda.com.ua",99],["slobodnadalmacija.hr",100],["bitcotasks.com",101],["udvl.com",102],["www.chip.de",103],["topsporter.net",104],["sportshub.to",104],["streamcheck.link",105],["myanimelist.net",106],["bitcosite.com",107],["bitzite.com",107],["easymc.io",108],["newscon.org",108],["yunjiema.top",108],["hacoos.com",110],["bondagevalley.cc",111],["zefoy.com",112],["vidello.net",113],["resizer.myct.jp",114],["gametohkenranbu.sakuraweb.com",115],["jisakuhibi.jp",116],["rank1-media.com",116],["lifematome.blog",117],["fm.sekkaku.net",118],["free-avx.jp",119],["dvdrev.com",120],["betweenjpandkr.blog",121],["nft-media.net",122],["ghacks.net",123],["songspk2.info",124],["nectareousoverelate.com",126],["khoaiphim.com",127],["haafedk2.com",128],["fordownloader.com",128],["jovemnerd.com.br",129],["nicomanga.com",130],["totalcsgo.com",131],["vivamax.asia",132],["manysex.com",133],["gaminginfos.com",134],["tinxahoivn.com",135],["automoto.it",136],["codelivly.com",137],["touguatize.monster",138],["client.falixnodes.net",139],["novelhall.com",140],["abc17news.com",141],["bailiwickexpress.com",141],["barnsleychronicle.com",141],["chaptercheats.com",141],["commercialobserver.com",141],["competentedigitale.ro",141],["dogtime.com",141],["dustyoldthing.com",141],["faithhub.net",141],["femestella.com",141],["footwearnews.com",141],["freeconvert.com",141],["frogsandsnailsandpuppydogtail.com",141],["fsm-media.com",141],["funtasticlife.com",141],["fwmadebycarli.com",141],["gamerant.com",141],["gfinityesports.com",141],["givemesport.com",141],["gulflive.com",141],["helloflo.com",141],["homeglowdesign.com",141],["honeygirlsworld.com",141],["hotcars.com",141],["howtogeek.com",141],["imgur.com",141],["insider-gaming.com",141],["insurancejournal.com",141],["jasminemaria.com",141],["kion546.com",141],["lehighvalleylive.com",141],["lettyskitchen.com",141],["lifeinleggings.com",141],["liveandletsfly.com",141],["lizzieinlace.com",141],["localnews8.com",141],["lonestarlive.com",141],["madeeveryday.com",141],["maidenhead-advertiser.co.uk",141],["makeuseof.com",141],["mardomreport.net",141],["melangery.com",141],["milestomemories.com",141],["modernmom.com",141],["momtastic.com",141],["mostlymorgan.com",141],["motherwellmag.com",141],["movieweb.com",141],["muddybootsanddiamonds.com",141],["musicfeeds.com.au",141],["mylifefromhome.com",141],["nationalreview.com",141],["neoskosmos.com",141],["nordot.app",141],["nothingbutnewcastle.com",141],["nsjonline.com",141],["oakvillenews.org",141],["observer.com",141],["ourlittlesliceofheaven.com",141],["palachinkablog.com",141],["patheos.com",141],["pinkonthecheek.com",141],["politicususa.com",141],["predic.ro",141],["puckermom.com",141],["qtoptens.com",141],["realgm.com",141],["reelmama.com",141],["robbreport.com",141],["royalmailchat.co.uk",141],["samchui.com",141],["sandrarose.com",141],["screenrant.com",141],["sherdog.com",141],["sidereel.com",141],["silive.com",141],["simpleflying.com",141],["sloughexpress.co.uk",141],["spacenews.com",141],["sportsgamblingpodcast.com",141],["spotofteadesigns.com",141],["stacysrandomthoughts.com",141],["ssnewstelegram.com",141],["superherohype.com",141],["tablelifeblog.com",141],["thebeautysection.com",141],["thecelticblog.com",141],["thecurvyfashionista.com",141],["thefashionspot.com",141],["thegamer.com",141],["thegamescabin.com",141],["thenerdyme.com",141],["thenonconsumeradvocate.com",141],["theprudentgarden.com",141],["thethings.com",141],["timesnews.net",141],["topspeed.com",141],["toyotaklub.org.pl",141],["travelingformiles.com",141],["tutsnode.org",141],["viralviralvideos.com",141],["wannacomewith.com",141],["wimp.com",[141,143]],["windsorexpress.co.uk",141],["woojr.com",141],["worldoftravelswithkids.com",141],["worldsurfleague.com",141],["xda-developers.com",141],["adoredbyalex.com",141],["agrodigital.com",[141,143]],["al.com",[141,143]],["aliontherunblog.com",[141,143]],["allaboutthetea.com",[141,143]],["allmovie.com",[141,143]],["allmusic.com",[141,143]],["allthingsthrifty.com",[141,143]],["amessagewithabottle.com",[141,143]],["androidpolice.com",141],["antyradio.pl",141],["artforum.com",[141,143]],["artnews.com",[141,143]],["awkward.com",[141,143]],["awkwardmom.com",[141,143]],["becomingpeculiar.com",141],["bethcakes.com",[141,143]],["blogher.com",[141,143]],["bluegraygal.com",[141,143]],["briefeguru.de",[141,143]],["carmagazine.co.uk",141],["cattime.com",141],["cbr.com",141],["cleveland.com",[141,143]],["collider.com",141],["comingsoon.net",141],["crafty.house",141],["dailyvoice.com",[141,143]],["decider.com",[141,143]],["didyouknowfacts.com",[141,143]],["dualshockers.com",141],["masslive.com",[141,143,189]],["mlive.com",[141,143]],["nj.com",[141,143]],["oregonlive.com",[141,143]],["pagesix.com",[141,143,189]],["pennlive.com",[141,143,189]],["sheknows.com",[141,143]],["syracuse.com",[141,143,189]],["tvline.com",[141,143]],["cheatsheet.com",142],["pwinsider.com",142],["baeldung.com",142],["mensjournal.com",142],["247sports.com",[143,189]],["betweenenglandandiowa.com",143],["bgr.com",143],["blu-ray.com",143],["cbsnews.com",[143,189]],["cbssports.com",[143,189]],["celiacandthebeast.com",143],["dailykos.com",143],["eater.com",143],["eldiariony.com",143],["free-power-point-templates.com",143],["inc.com",143],["indiewire.com",[143,189]],["inquisitr.com",143],["kentucky.com",143],["knowyourmeme.com",143],["last.fm",143],["mandatory.com",143],["nbcsports.com",143],["news.com.au",143],["nypost.com",[143,189]],["rollingstone.com",143],["sbnation.com",143],["sneakernews.com",143],["sport-fm.gr",143],["stylecaster.com",143],["themarysue.com",143],["usmagazine.com",143],["bagi.co.in",144],["keran.co",144],["biblestudytools.com",145],["christianheadlines.com",145],["ibelieve.com",145],["kuponigo.com",146],["kimcilonly.site",147],["kimcilonly.link",147],["cryptoearns.com",148],["inxxx.com",149],["ipaspot.app",150],["embedwish.com",151],["filelions.live",151],["leakslove.net",151],["jenismac.com",152],["vxetable.cn",153],["jewelavid.com",154],["nizarstream.com",154],["snapwordz.com",155],["toolxox.com",155],["rl6mans.com",155],["idol69.net",155],["plumbersforums.net",156],["123movies57.online",157],["gulio.site",158],["mediaset.es",159],["izlekolik.net",160],["donghuaworld.com",161],["letsdopuzzles.com",162],["hes-goals.io",163],["pkbiosfix.com",163],["casi3.xyz",163],["rediff.com",164],["dzapk.com",165],["darknessporn.com",166],["familyporner.com",166],["freepublicporn.com",166],["pisshamster.com",166],["punishworld.com",166],["xanimu.com",166],["tainio-mania.online",167],["javhdo.net",168],["eroticmoviesonline.me",169],["teleclub.xyz",170],["ecamrips.com",171],["showcamrips.com",171],["tucinehd.com",172],["9animetv.to",173],["qiwi.gg",174],["jornadaperfecta.com",175],["loseart.com",176],["sousou-no-frieren.com",177],["unite-guide.com",178],["thebullspen.com",179],["botcomics.com",180],["cefirates.com",180],["chandlerorchards.com",180],["comicleaks.com",180],["marketdata.app",180],["monumentmetals.com",180],["tapmyback.com",180],["ping.gg",180],["revistaferramental.com.br",180],["hawpar.com",180],["alpacafinance.org",[180,181]],["nookgaming.com",180],["enkeleksamen.no",180],["kvest.ee",180],["creatordrop.com",180],["panpots.com",180],["cybernetman.com",180],["bitdomain.biz",180],["gerardbosch.xyz",180],["fort-shop.kiev.ua",180],["accuretawealth.com",180],["resourceya.com",180],["tracktheta.com",180],["camberlion.com",180],["replai.io",180],["trybawaryjny.pl",180],["segops.madisonspecs.com",180],["tt.live",181],["future-fortune.com",181],["adventuretix.com",181],["bolighub.dk",181],["panprices.com",182],["intercity.technology",182],["freelancer.taxmachine.be",182],["adria.gg",182],["fjlaboratories.com",182],["emanualonline.com",182],["abhijith.page",182],["helpmonks.com",182],["dataunlocker.com",183],["proboards.com",184],["winclassic.net",184],["japscan.lol",186],["1001tracklists.com",188],["abema.tv",190]]);

const entitiesMap = new Map([["vidsrc",[3,14,51]],["mixdrop",[3,15]],["sanet",3],["wawacity",3],["pahe",[5,15]],["soap2day",5],["mhdsports",7],["mhdsportstv",7],["mhdtvsports",7],["mhdtvworld",7],["mhdtvmax",7],["mhdstream",7],["reset-scans",7],["poplinks",[7,74]],["hqq",8],["waaw",8],["pixhost",10],["viprow",[14,15,51]],["bluemediadownload",14],["bluemediafile",14],["bluemedialink",14],["bluemediastorage",14],["bluemediaurls",14],["urlbluemedia",14],["cloudvideotv",[14,51]],["123-movies",15],["123movieshd",15],["123movieshub",15],["123moviesme",15],["1337x",[15,29]],["1stream",15],["1tamilmv",15],["2ddl",15],["2umovies",15],["3hiidude",15],["4stream",15],["5movies",15],["7hitmovies",15],["9xmovie",15],["9xlinks",15],["aagmaal",[15,51]],["adblockeronstape",15],["adblockeronstreamtape",15],["adblockplustape",15],["adblockstreamtape",15],["adblockstrtape",15],["adblockstrtech",15],["adblocktape",15],["adcorto",15],["alexsports",15],["alexsportss",15],["alexsportz",15],["animepahe",15],["animesanka",15],["animixplay",15],["aniplay",15],["antiadtape",15],["asianclub",15],["ask4movie",15],["atomixhq",[15,51]],["atomohd",15],["beinmatch",[15,23]],["bhaai",15],["blurayufr",15],["buffstreams",15],["canalesportivo",15],["clickndownload",15],["clicknupload",15],["daddylive",[15,51]],["daddylivehd",[15,51]],["ddrmovies",15],["desiremovies",15],["devlib",15],["divxtotal",15],["divxtotal1",15],["dlhd",15],["dvdplay",[15,51]],["elixx",15],["enjoy4k",15],["estrenosflix",15],["estrenosflux",15],["estrenosgo",15],["f1stream",15],["fbstream",15],["file4go",15],["filmymeet",15],["filmyzilla",[15,51]],["findav",15],["findporn",15],["flixmaza",15],["flizmovies",15],["freetvsports",15],["fullymaza",15],["g3g",15],["gotxx",15],["grantorrent",15],["hdmoviesfair",[15,51]],["hdmoviesflix",15],["hiidudemoviez",15],["imgsen",15],["imgsto",15],["incest",15],["incestflix",15],["itopmusic",15],["javmost",15],["keeplinks",15],["keepvid",15],["keralahd",15],["khatrimazaful",15],["khatrimazafull",15],["leechall",15],["linkshorts",15],["mangovideo",15],["masaporn",15],["miniurl",15],["mirrorace",15],["mixdroop",15],["mkvcage",15],["mlbstream",15],["mlsbd",15],["mmsbee",15],["motogpstream",15],["movieplex",15],["movierulzlink",15],["movies123",15],["moviesflix",15],["moviesmeta",15],["moviessources",15],["moviesverse",15],["moviezwaphd",15],["mrunblock",15],["nbastream",15],["newmovierulz",15],["nflstream",15],["nhlstream",15],["noblocktape",15],["nocensor",15],["onlyfams",15],["ouo",15],["pctfenix",[15,51]],["pctnew",[15,51]],["peliculas24",15],["pelisplus",15],["piratebay",15],["plyjam",15],["plylive",15],["plyvdo",15],["pornhoarder",15],["prbay",15],["projectfreetv",15],["proxybit",15],["psarips",15],["racaty",15],["remaxhd",15],["rintor",15],["rnbxclusive",15],["rnbxclusive0",15],["rnbxclusive1",15],["rojadirecta",15],["rojadirectaenvivo",15],["rugbystreams",15],["sadisflix",15],["safetxt",15],["shadowrangers",15],["shahi4u",15],["shahid4u1",15],["shahid4uu",15],["shavetape",15],["shortearn",15],["shorten",15],["shorttey",15],["shortzzy",15],["skymovieshd",15],["socceronline",[15,51]],["softarchive",15],["sports-stream",15],["sshhaa",15],["stapadblockuser",15],["stape",15],["stapewithadblock",15],["starmusiq",15],["strcloud",15],["streamadblocker",[15,51]],["streamadblockplus",15],["streamcdn",15],["streamhub",15],["streamsport",15],["streamta",15],["streamtape",15],["streamtapeadblockuser",15],["strikeout",15],["strtape",15],["strtapeadblock",15],["strtapeadblocker",15],["strtapewithadblock",15],["strtpe",15],["swatchseries",15],["tabooflix",15],["tennisstreams",15],["themoviesflix",15],["thepiratebay",15],["thisav",15],["tmearn",15],["toonanime",15],["torlock",15],["tormalayalam",15],["torrentz2eu",15],["tutelehd",15],["tvply",15],["u4m",15],["ufcstream",15],["unblocknow",15],["uploadbuzz",15],["usagoals",15],["vexmoviex",15],["vidclouds",15],["vidlox",15],["vipbox",[15,51]],["vipboxtv",[15,51]],["vipleague",15],["watch-series",15],["watchseries",15],["xclusivejams",15],["xmoviesforyou",15],["youdbox",15],["ytmp3eu",15],["yts-subs",15],["yts",15],["zooqle",15],["dutchycorp",16],["torrentdownload",30],["mkvcinemas",[30,51]],["dood",[33,51]],["doodstream",33],["dooood",[33,51]],["livecamrips",35],["shrinke",35],["shrinkme",35],["daddylive1",44],["esportivos",44],["poscitechs",44],["bollyflix",44],["watchomovies",[45,51]],["123movies",51],["123moviesla",51],["123movieweb",51],["2embed",51],["720pstream",51],["9xmovies",51],["adshort",51],["allmovieshub",51],["asianplay",51],["atishmkv",51],["cricstream",51],["crictime",51],["databasegdriveplayer",51],["extramovies",51],["faselhd",51],["faselhds",51],["filemoon",51],["filmy",51],["filmyhit",51],["filmywap",51],["fmovies",51],["gdplayer",51],["gdriveplayer",51],["goku",51],["gomovies",51],["gowatchseries",51],["hdfungamezz",51],["hindilinks4u",51],["hurawatch",51],["jalshamoviezhd",51],["livecricket",51],["mhdsport",51],["movies2watch",51],["moviespapa",51],["mp4moviez",51],["mydownloadtube",51],["nsw2u",51],["nuroflix",51],["o2tvseries",51],["o2tvseriesz",51],["pirlotv",51],["poscitech",51],["primewire",51],["redecanais",51],["serienstream",51],["sflix",51],["shahed4u",51],["shaheed4u",51],["speedostream",51],["sportcast",51],["sportskart",51],["streamingcommunity",51],["tamilarasan",51],["tamilfreemp3songs",51],["tamilprinthd",51],["torrentdosfilmes",51],["tubemate",51],["uploadrar",51],["uqload",51],["vidcloud9",51],["vido",51],["vidoo",51],["vudeo",51],["vumoo",51],["yesmovies",51],["mydverse",60],["actvid",65],["stfly",82],["stly",82],["dropgalaxy",84],["kickass",85],["cine-calidad",91],["woxikon",97],["teluguflix",109]]);

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
