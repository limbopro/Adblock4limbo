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

const argsList = [["script","DisplayAcceptableAdIfAdblocked"],["script","/==undefined.*body/"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","Reflect"],["script","document.write"],["script","deblocker"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","exdynsrv"],["script","/adb/i"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|adblock/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","Adblock"],["script","alert"],["script","document.createTextNode"],["script","style"],["script","shown_at"],["script","adsSrc"],["script","ai_adb"],["script","/adblock|popunder/"],["script","/fetch|adb/i"],["script","window.open"],["script","adblockimg"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","googlesyndication"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/pop1stp|detectAdBlock/"],["script","popundersPerIP"],["script","popunder"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","catch"],["script","displayAdsV3"],["script",";}}};break;case $."],["script","adblocker"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","initializeInterstitial"],["script","/adbl/i"],["script","mdpDeblocker"],["script","Math.floor"],["script","m9-ad-modal"],["script","detectAdBlock"],["script","antiAdBlockerHandler"],["script","wpadmngr.com"],["script","Anzeige"],["script","blocking"],["script","/ABDetected|navigator.brave|fetch/"],["script","/bypass.php"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script",";break;case $."],["script","adb_detected"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","/event\\.keyCode|DisableDevtool/"],["style","text-decoration"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","charCodeAt"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","KCgpPT57bGV0IGU"],["script","error-report.com"],["script","adShield"],["script","Ad-Shield"],["script","adrecover.com"],["script","AdblockRegixFinder"],["script","serve"],["script","/, [0-9]{4,5}\\)\\] \\* [4-9]\\; \\}/"],["script","/ConsoleBan|alert|AdBlocker/"],["script","runPop"],["style","body:not(.ownlist)"],["script","alert","condition","adblock"],["script","adb"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","zfgloaded"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/modal|popupads/"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","ad_block"],["script","app_checkext"],["script","clientHeight"],["script","/url_key|adHtml/"],["script","pop.target"],["script","!window.adngin"],["script","axios"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","\"\").split(\",\")[4]"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","AdBlock"],["script","Symbol.iterator"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","AaDetector"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","document.head.appendChild"],["script","adsPlay"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","detect"],["script","fetch"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","vglnk"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","Ne'+'Si"],["script",".className.indexOf"],["script","\"data-adm-url\""],["script","NREUM"]];

const hostnamesMap = new Map([["alpin.de",0],["boersennews.de",0],["chefkoch.de",0],["chip.de",0],["clever-tanken.de",0],["desired.de",0],["donnerwetter.de",0],["fanfiktion.de",0],["focus.de",0],["formel1.de",0],["frustfrei-lernen.de",0],["gewinnspiele.tv",0],["giga.de",0],["gut-erklaert.de",0],["kino.de",0],["messen.de",0],["nickles.de",0],["nordbayern.de",0],["spielfilm.de",0],["teltarif.de",0],["unsere-helden.com",0],["weltfussball.at",0],["watson.de",0],["moviepilot.de",[0,4]],["mactechnews.de",0],["sport1.de",0],["aupetitparieur.com",1],["allthingsvegas.com",1],["100percentfedup.com",1],["beforeitsnews.com",1],["concomber.com",1],["conservativebrief.com",1],["conservativefiringline.com",1],["dailylol.com",1],["funnyand.com",1],["letocard.fr",1],["mamieastuce.com",1],["meilleurpronostic.fr",1],["patriotnationpress.com",1],["toptenz.net",1],["vitamiiin.com",1],["writerscafe.org",1],["populist.press",1],["dailytruthreport.com",1],["livinggospeldaily.com",1],["first-names-meanings.com",1],["welovetrump.com",1],["thehayride.com",1],["thelibertydaily.com",1],["thepoke.co.uk",1],["thepolitistick.com",1],["theblacksphere.net",1],["shark-tank.com",1],["naturalblaze.com",1],["greatamericanrepublic.com",1],["dailysurge.com",1],["truthlion.com",1],["flagandcross.com",1],["westword.com",1],["republicbrief.com",1],["freedomfirstnetwork.com",1],["phoenixnewtimes.com",1],["designbump.com",1],["clashdaily.com",1],["madworldnews.com",1],["reviveusa.com",1],["sonsoflibertymedia.com",1],["thedesigninspiration.com",1],["videogamesblogger.com",1],["protrumpnews.com",1],["thepalmierireport.com",1],["kresy.pl",1],["thepatriotjournal.com",1],["gellerreport.com",1],["thegatewaypundit.com",1],["wltreport.com",1],["miaminewtimes.com",1],["politicalsignal.com",1],["rightwingnews.com",1],["bigleaguepolitics.com",1],["comicallyincorrect.com",1],["web.de",2],["skidrowreloaded.com",[3,14]],["1stream.eu",3],["4kwebplay.xyz",3],["antennasports.ru",3],["buffsports.me",[3,50]],["buffstreams.app",3],["claplivehdplay.ru",3],["cracksports.me",[3,13]],["euro2024direct.ru",3],["ext.to",3],["eztv.tf",3],["eztvx.to",3],["kenitv.me",[3,13,14]],["lewblivehdplay.ru",3],["mlbbite.net",3],["mlbstreams.ai",3],["qatarstreams.me",[3,13]],["qqwebplay.xyz",3],["rnbastreams.com",3],["soccerworldcup.me",[3,13]],["topstreams.info",3],["totalsportek.to",3],["viwlivehdplay.ru",3],["sportsurge.net",3],["vidco.pro",[3,50]],["topembed.pw",3],["crackstreamer.net",3],["methstreamer.com",3],["yts.mx",6],["magesypro.com",7],["pinsystem.co.uk",7],["elrellano.com",7],["tinyppt.com",7],["bharathwick.com",7],["descargaspcpro.net",7],["dx-tv.com",7],["rt3dmodels.com",7],["plc4me.com",7],["blisseyhusbands.com",7],["madaradex.org",7],["trigonevo.com",7],["franceprefecture.fr",7],["jazbaat.in",7],["aipebel.com",7],["audiotools.blog",7],["veganab.co",7],["camdigest.com",7],["learnmany.in",7],["amanguides.com",[7,68]],["highkeyfinance.com",[7,68]],["appkamods.com",7],["techacode.com",7],["djqunjab.in",7],["downfile.site",7],["expertvn.com",7],["trangchu.news",7],["3dmodelshare.org",7],["nulleb.com",7],["asiaon.top",7],["coursesghar.com",7],["thecustomrom.com",7],["snlookup.com",7],["bingotingo.com",7],["ghior.com",7],["3dmili.com",7],["karanpc.com",7],["plc247.com",7],["apkdelisi.net",7],["javindo.eu.org",7],["chindohot.site",7],["freepasses.org",7],["tomarnarede.pt",7],["basketballbuzz.ca",7],["dribbblegraphics.com",7],["kemiox.com",7],["checkersmenu.us",7],["teksnologi.com",7],["dollareuro.live",7],["upornia.com",9],["eporner.com",11],["javtiful.com",[11,14]],["germancarforum.com",12],["innateblogger.com",12],["cybercityhelp.in",12],["mlbbox.me",13],["streamnoads.com",[13,14,50]],["bowfile.com",13],["cloudvideo.tv",[13,50]],["coloredmanga.com",13],["embedstream.me",[13,14,50]],["exeo.app",13],["hiphopa.net",[13,14]],["megaup.net",13],["olympicstreams.co",[13,50]],["tv247.us",[13,14]],["uploadhaven.com",13],["userscloud.com",[13,50]],["mdfx9dc8n.net",14],["mdzsmutpcvykb.net",14],["mixdrop21.net",14],["mixdropjmk.pw",14],["y2tube.pro",14],["fastreams.com",14],["redittsports.com",14],["sky-sports.store",14],["streamsoccer.site",14],["tntsports.store",14],["wowstreams.co",14],["123movies4u.site",14],["1337xporn.com",14],["141jav.com",14],["1bit.space",14],["1bitspace.com",14],["38dh2.top",14],["3dporndude.com",14],["4archive.org",14],["4horlover.com",14],["560pmovie.com",14],["60fps.xyz",14],["85tube.com",14],["85videos.com",14],["8xlinks.click",14],["a2zcrackworld.com",14],["aazzz.xyz",14],["acefile.co",14],["actusports.eu",14],["adclickersbot.com",14],["adricami.com",14],["adslink.pw",14],["adultstvlive.com",14],["adz7short.space",14],["aeblender.com",14],["ahdafnews.blogspot.com",14],["ak47sports.com",14],["akuma.moe",14],["allplayer.tk",14],["allstreaming.online",14],["amadoras.cf",14],["amadorasdanet.shop",14],["amateurblog.tv",14],["androidadult.com",14],["anhsexjav.xyz",14],["anidl.org",14],["anime-loads.org",14],["animeblkom.net",14],["animefire.plus",14],["animelek.me",14],["animespire.net",14],["animestotais.xyz",14],["animeyt.es",14],["anroll.net",14],["anymoviess.xyz",14],["aotonline.org",14],["asenshu.com",14],["asialiveaction.com",14],["asianclipdedhd.net",14],["askim-bg.com",14],["asumsikedaishop.com",14],["avcrempie.com",14],["avseesee.com",14],["gettapeads.com",14],["backfirstwo.com",14],["bajarjuegospcgratis.com",14],["balkanportal.net",14],["balkanteka.net",14],["bdnewszh.com",[14,50]],["belowporn.com",14],["bestclaimtrx.xyz",14],["bestgirlsexy.com",14],["bestnhl.com",14],["bestporn4free.com",14],["bestporncomix.com",14],["bet36.es",14],["bikinitryon.net",14],["birdurls.com",14],["bitsearch.to",14],["blackcockadventure.com",14],["blackcockchurch.org",14],["blackporncrazy.com",14],["blizzboygames.net",14],["blizzpaste.com",14],["blkom.com",14],["blog-peliculas.com",14],["blogtrabalhista.com",14],["blurayufr.xyz",14],["bobsvagene.club",14],["bolly4umovies.click",14],["bonusharian.pro",14],["brilian-news.id",14],["brupload.net",14],["bucitana.com",14],["cablegratis.online",14],["camchickscaps.com",14],["camgirlcum.com",14],["camgirls.casa",14],["cashurl.in",14],["castingx.net",14],["ccurl.net",[14,50]],["celebrity-leaks.net",14],["cgpelis.net",14],["charexempire.com",14],["choosingnothing.com",14],["clasico.tv",14],["clik.pw",14],["coin-free.com",[14,65]],["coins100s.fun",14],["comicsmanics.com",14],["compucalitv.com",14],["coolcast2.com",14],["cosplaytab.com",14],["countylocalnews.com",14],["cpmlink.net",14],["crackstreamshd.click",14],["crespomods.com",14],["crisanimex.com",14],["crunchyscan.fr",14],["cuevana3.fan",14],["cuevana3hd.com",14],["cumception.com",14],["cutpaid.com",14],["cypherscans.xyz",[14,50]],["dailyuploads.net",14],["datawav.club",14],["daughtertraining.com",14],["deepgoretube.site",14],["deltabit.co",14],["depvailon.com",14],["derleta.com",14],["desivdo.com",14],["desixx.net",14],["detikkebumen.com",14],["deutschepornos.me",14],["diasoft.xyz",14],["directupload.net",14],["diskusscan.com",14],["dixva.com",14],["doctormalay.com",14],["dofusports.xyz",14],["dogemate.com",14],["doods.cam",14],["doodskin.lat",14],["downloadrips.com",14],["downvod.com",14],["dphunters.mom",14],["dragontranslation.com",14],["duddes.xyz",14],["dvdfullestrenos.com",14],["easylinks.in",14],["ebookbb.com",14],["ebookhunter.net",14],["egyanime.com",14],["egygost.com",14],["egyshare.cc",14],["ekasiwap.com",14],["electro-torrent.pl",14],["elil.cc",14],["embed4u.xyz",14],["eplayer.click",14],["erovoice.us",14],["eroxxx.us",14],["estrenosdoramas.net",14],["everia.club",14],["everythinginherenet.blogspot.com",14],["extrafreetv.com",14],["extremotvplay.com",14],["fapinporn.com",14],["fapptime.com",14],["fashionblog.tv",14],["fastreams.live",14],["faucethero.com",14],["fembed.com",14],["femdom-joi.com",14],["fileone.tv",14],["film1k.com",14],["filmeonline2023.net",14],["filmesonlinex.org",14],["filmesonlinexhd.biz",[14,50]],["filmovitica.com",14],["filmymaza.blogspot.com",14],["filthy.family",14],["firstmovies.to",14],["fixfinder.click",14],["flostreams.xyz",14],["flyfaucet.com",14],["footyhunter.lol",14],["footyhunter3.xyz",[14,50]],["forex-golds.com",14],["forex-trnd.com",14],["forumchat.club",14],["forumlovers.club",14],["freemoviesonline.biz",14],["freeomovie.co.in",14],["freeomovie.to",14],["freeporncomic.net",14],["freepornhdonlinegay.com",14],["freeproxy.io",14],["freeuse.me",14],["freeusexporn.com",14],["fsicomics.com",14],["gambarbogel.xyz",14],["gamepcfull.com",14],["gameronix.com",14],["gamesfullx.com",14],["gameshdlive.net",14],["gameshdlive.xyz",14],["gamesmountain.com",14],["gamesrepacks.com",14],["gamingguru.fr",14],["gamovideo.com",14],["garota.cf",14],["gaydelicious.com",14],["gaypornmasters.com",14],["gaysex69.net",14],["gemstreams.com",14],["get-to.link",14],["girlscanner.org",14],["giurgiuveanul.ro",14],["gledajcrtace.xyz",14],["gocast2.com",14],["gomo.to",14],["gostosa.cf",14],["gtlink.co",14],["gwiazdypornosow.pl",14],["haho.moe",14],["hatsukimanga.com",14],["hayhd.net",14],["hdsaprevodom.com",14],["hdstreamss.club",14],["hentais.tube",14],["hentaistream.co",14],["hentaitk.net",14],["hentaitube.online",14],["hentaiworld.tv",14],["hesgoal.tv",14],["hexupload.net",14],["hhkungfu.tv",14],["highlanderhelp.com",14],["hindimean.com",14],["hindimovies.to",[14,50]],["hiperdex.com",14],["hispasexy.org",14],["hitprn.com",14],["hoca4u.com",14],["hollymoviehd.cc",14],["hoodsite.com",14],["hopepaste.download",14],["hornylips.com",14],["hotgranny.live",14],["hotmama.live",14],["hqcelebcorner.net",14],["huren.best",14],["hwnaturkya.com",[14,50]],["hxfile.co",[14,50]],["igfap.com",14],["ihdstreams.xyz",14],["iklandb.com",14],["illink.net",14],["imgkings.com",14],["imgsex.xyz",14],["imx.to",14],["influencersgonewild.org",14],["infosgj.free.fr",14],["investnewsbrazil.com",14],["itdmusics.com",14],["itsuseful.site",14],["itunesfre.com",14],["iwatchfriendsonline.net",[14,124]],["jackstreams.com",14],["jatimupdate24.com",14],["jav-fun.cc",14],["jav-noni.cc",14],["jav-scvp.com",14],["javcl.com",14],["javf.net",14],["javhay.net",14],["javhoho.com",14],["javhun.com",14],["javleak.com",14],["javporn.best",14],["javsex.to",14],["jimdofree.com",14],["jiofiles.org",14],["jorpetz.com",14],["journalyc.online",14],["jp-films.com",14],["jpop80ss3.blogspot.com",14],["jpopsingles.eu",[14,30]],["kantotflix.net",14],["kantotinyo.com",14],["kaoskrew.org",14],["kaplog.com",14],["keralatvbox.com",14],["kickassanimes.io",14],["kimochi.info",14],["kimochi.tv",14],["kinemania.tv",14],["konstantinova.net",14],["koora-online.live",14],["kunmanga.com",14],["kutmoney.com",14],["kwithsub.com",14],["ladangreceh.xyz",14],["lat69.me",14],["latinblog.tv",14],["latinomegahd.net",14],["lazyfaucet.com",14],["leechpremium.link",14],["legendas.dev",14],["legendei.net",14],["lightdlmovies.blogspot.com",14],["lighterlegend.com",14],["linclik.com",14],["linkebr.com",14],["linkrex.net",14],["links.worldfree4u-lol.online",14],["linksfy.co",14],["lody.ink",14],["lovesomecommunity.com",14],["lulu.st",14],["lulustream.com",[14,50]],["luluvdo.com",[14,50]],["luzcameraeacao.shop",14],["manga-oni.com",14],["mangaboat.com",14],["mangagenki.me",14],["mangahere.onl",14],["mangaweb.xyz",14],["mangoporn.net",14],["manhwahentai.me",14],["masahub.com",14],["masahub.net",14],["maturegrannyfuck.com",14],["mdy48tn97.com",14],["mediapemersatubangsa.com",14],["mega-mkv.com",14],["megapastes.com",14],["megapornpics.com",14],["messitv.net",14],["meusanimes.net",14],["milfmoza.com",14],["milfzr.com",14],["millionscast.com",14],["mimaletamusical.blogspot.com",14],["mitly.us",14],["mkv-pastes.com",14],["modb.xyz",14],["monaskuliner.ac.id",14],["moredesi.com",14],["movgotv.net",14],["movi.pk",14],["movierr.online",14],["movieswbb.com",14],["moviewatch.com.pk",14],["mp4upload.com",14],["mrskin.live",14],["multicanaistv.com",14],["mundowuxia.com",14],["myeasymusic.ir",14],["myonvideo.com",14],["myyouporn.com",14],["narutoget.info",14],["naughtypiss.com",14],["nerdiess.com",14],["new-fs.eu",14],["newtorrentgame.com",14],["nflstreams.me",14],["niaomea.me",[14,50]],["nicekkk.com",14],["nicesss.com",14],["nlegs.com",14],["nolive.me",[14,50]],["notformembersonly.com",14],["novamovie.net",14],["novelpdf.xyz",14],["novelssites.com",[14,50]],["novelup.top",14],["nsfwr34.com",14],["nu6i-bg-net.com",14],["nudebabesin3d.com",14],["nukedfans.com",14],["nuoga.eu",14],["nzbstars.com",14],["ohjav.com",14],["ojearnovelas.com",14],["okanime.xyz",14],["olarixas.xyz",14],["oldbox.cloud",14],["olweb.tv",14],["olympicstreams.me",14],["on9.stream",14],["oncast.xyz",14],["onepiece-mangaonline.com",14],["onifile.com",14],["onionstream.live",14],["onlinesaprevodom.net",14],["onlyfullporn.video",14],["onplustv.live",14],["originporn.com",14],["ovagames.com",14],["ovamusic.com",14],["owllink.net",14],["packsporn.com",14],["pahaplayers.click",14],["palimas.org",14],["pandafiles.com",14],["papahd.club",14],["papahd1.xyz",14],["password69.com",14],["pastemytxt.com",14],["payskip.org",14],["peeplink.in",14],["peliculasmx.net",14],["pervertgirlsvideos.com",14],["pervyvideos.com",14],["phim12h.com",14],["picdollar.com",14],["pickteenz.com",14],["pics4you.net",14],["picsxxxporn.com",14],["pinayscandalz.com",14],["pinkueiga.net",14],["piratefast.xyz",14],["piratehaven.xyz",14],["pirateiro.com",14],["pirlotvonline.org",14],["playtube.co.za",14],["plugintorrent.com",14],["pmvzone.com",14],["porndish.com",14],["pornez.net",14],["pornfetishbdsm.com",14],["pornfits.com",14],["pornhd720p.com",14],["pornobr.club",14],["pornobr.ninja",14],["pornodominicano.net",14],["pornofaps.com",14],["pornoflux.com",14],["pornotorrent.com.br",14],["pornredit.com",14],["pornstarsyfamosas.es",14],["pornstreams.co",14],["porntn.com",14],["pornxbit.com",14],["pornxday.com",14],["portaldasnovinhas.shop",14],["portugues-fcr.blogspot.com",14],["poscishd.online",14],["poscitesch.com",[14,50]],["poseyoung.com",14],["pover.org",14],["proxyninja.org",14],["pubfilmz.com",14],["publicsexamateurs.com",14],["punanihub.com",14],["putlocker5movies.org",14],["pxxbay.com",14],["r18.best",14],["ragnaru.net",14],["rapbeh.net",14],["rapelust.com",14],["rapload.org",14],["read-onepiece.net",14],["retro-fucking.com",14],["retrotv.org",14],["robaldowns.com",14],["rockdilla.com",14],["rojadirectatvenvivo.com",14],["rojitadirecta.blogspot.com",14],["romancetv.site",14],["rsoccerlink.site",14],["rule34.club",14],["rule34hentai.net",14],["rumahbokep-id.com",14],["safego.cc",14],["safestream.cc",14],["sakurafile.com",14],["satoshi-win.xyz",14],["scat.gold",14],["scatfap.com",14],["scatkings.com",14],["scnlog.me",14],["scripts-webmasters.net",14],["serie-turche.com",14],["serijefilmovi.com",14],["sexcomics.me",14],["sexdicted.com",14],["sexgay18.com",14],["sexofilm.co",14],["sextgem.com",14],["sextubebbw.com",14],["sgpics.net",14],["shadowrangers.live",14],["shahee4u.cam",14],["shahiid-anime.net",14],["shemale6.com",14],["shinden.pl",14],["short.es",14],["showmanga.blog.fc2.com",14],["shrt10.com",14],["shurt.pw",14],["sideplusleaks.net",14],["silverblog.tv",14],["silverpic.com",14],["sinhalasub.life",14],["sinsitio.site",14],["sinvida.me",14],["skidrowcpy.com",14],["skidrowfull.com",14],["slut.mom",14],["smallencode.me",14],["smoner.com",14],["smplace.com",14],["soccerinhd.com",[14,50]],["socceron.name",14],["softairbay.com",14],["sokobj.com",14],["songsio.com",14],["souexatasmais.com",14],["sportbar.live",14],["sportea.online",14],["sportskart.xyz",14],["sportstream1.cfd",14],["sporttuna.site",14],["srt.am",14],["srts.me",14],["stakes100.xyz",14],["stbemuiptv.com",14],["stockingfetishvideo.com",14],["stream.crichd.vip",14],["stream.lc",14],["stream25.xyz",14],["streambee.to",14],["streamcenter.pro",14],["streamers.watch",14],["streamgo.to",14],["streamkiste.tv",14],["streamoporn.xyz",14],["streamoupload.xyz",14],["streamservicehd.click",14],["streamvid.net",[14,23]],["subtitleporn.com",14],["subtitles.cam",14],["suicidepics.com",14],["supertelevisionhd.com",14],["supexfeeds.com",14],["swiftload.io",14],["swzz.xyz",14],["sxnaar.com",14],["tabooporns.com",14],["taboosex.club",14],["tapeantiads.com",14],["tapeblocker.com",14],["tapenoads.com",14],["tapewithadblock.org",[14,186]],["teamos.xyz",14],["teen-wave.com",14],["teenporncrazy.com",14],["telegramgroups.xyz",14],["telenovelasweb.com",14],["tensei-shitara-slime-datta-ken.com",14],["tfp.is",14],["tgo-tv.co",[14,50]],["thaihotmodels.com",14],["theblueclit.com",14],["thebussybandit.com",14],["theicongenerator.com",14],["thelastdisaster.vip",14],["thepiratebay0.org",14],["thepiratebay10.info",14],["thesexcloud.com",14],["thothub.today",14],["tightsexteens.com",14],["tojav.net",14],["tokyoblog.tv",14],["tonnestreamz.xyz",14],["top16.net",14],["topvideosgay.com",14],["torrage.info",14],["torrents.vip",14],["torrsexvid.com",14],["tpb-proxy.xyz",14],["trannyteca.com",14],["trendytalker.com",14],["tumanga.net",14],["turbogvideos.com",14],["turbovid.me",14],["turkishseriestv.org",14],["turksub24.net",14],["tutele.sx",14],["tutelehd3.xyz",14],["tvglobe.me",14],["tvpclive.com",14],["tvs-widget.com",14],["tvseries.video",14],["ucptt.com",14],["ufaucet.online",14],["ufcfight.online",14],["uhdgames.xyz",14],["ultrahorny.com",14],["ultraten.net",14],["unblockweb.me",14],["underhentai.net",14],["uniqueten.net",14],["upbaam.com",14],["upstream.to",14],["valeriabelen.com",14],["verdragonball.online",14],["vfxmed.com",14],["video.az",14],["videostreaming.rocks",14],["videowood.tv",14],["vidorg.net",14],["vidtapes.com",14],["vidz7.com",14],["vikistream.com",14],["vikv.net",14],["virpe.cc",14],["visifilmai.org",14],["viveseries.com",14],["vladrustov.sx",14],["volokit2.com",14],["vstorrent.org",14],["w-hentai.com",14],["watchaccordingtojimonline.com",14],["watchbrooklynnine-nine.com",14],["watchdowntonabbeyonline.com",14],["watchelementaryonline.com",14],["watcheronline.net",14],["watchgleeonline.com",14],["watchhowimetyourmother.online",14],["watchkobestreams.info",14],["watchlostonline.net",14],["watchlouieonline.com",14],["watchjavidol.com",14],["watchmadmenonline.com",14],["watchmonkonline.com",14],["watchonceuponatimeonline.com",14],["watchparksandrecreation.net",14],["watchprettylittleliarsonline.com",14],["watchrulesofengagementonline.com",14],["watchthekingofqueens.com",14],["watchthemiddleonline.com",14],["watchtvchh.xyz",14],["webcamrips.com",14],["wickedspot.org",14],["wincest.xyz",14],["witanime.best",14],["wolverdon.fun",14],["wolverdonx.com",14],["wordcounter.icu",14],["worldcupstream.pm",14],["worldmovies.store",14],["worldstreams.click",14],["wpdeployit.com",14],["wqstreams.tk",14],["wwwsct.com",14],["xanimeporn.com",14],["xblog.tv",14],["xn--verseriesespaollatino-obc.online",14],["xn--xvideos-espaol-1nb.com",14],["xpornium.net",14],["xsober.com",14],["xvip.lat",14],["xxgasm.com",14],["xxvideoss.org",14],["xxx18.uno",14],["xxxdominicana.com",14],["xxxfree.watch",14],["xxxmax.net",14],["xxxwebdlxxx.top",14],["xxxxvideo.uno",14],["y2b.wiki",14],["yabai.si",14],["yadixv.com",14],["yayanimes.net",14],["yeshd.net",14],["yodbox.com",14],["youjax.com",14],["youpits.xyz",14],["yourdailypornvideos.ws",14],["yourupload.com",14],["ytstv.me",14],["ytstvmovies.co",14],["ytstvmovies.xyz",14],["ytsyify.co",14],["ytsyifymovie.com",14],["zerion.cc",14],["zerocoin.top",14],["zitss.xyz",14],["zpaste.net",14],["zplayer.live",14],["faucet.ovh",15],["oko.sh",[16,75,76]],["variety.com",17],["gameskinny.com",17],["deadline.com",17],["washingtonpost.com",18],["bigbtc.win",19],["cryptofun.space",19],["gosexpod.com",20],["sexo5k.com",21],["truyen-hentai.com",21],["theshedend.com",23],["eracast.cc",23],["zeroupload.com",23],["securenetsystems.net",23],["miniwebtool.com",23],["bchtechnologies.com",23],["spiegel.de",24],["hausbau-forum.de",25],["kiemlua.com",25],["appnee.com",26],["apkmirror.com",27],["cineb.rs",29],["sekaikomik.bio",29],["hiraethtranslation.com",30],["fcportables.com",31],["repack-games.com",31],["pawastreams.info",31],["truyentranhfull.net",31],["d0000d.com",32],["d000d.com",32],["d0o0d.com",32],["do0od.com",32],["doods.pro",32],["ds2play.com",32],["ds2video.com",32],["onlyfaucet.com",33],["smutty.com",34],["freeadultcomix.com",34],["down.dataaps.com",34],["filmweb.pl",34],["visionpapers.org",35],["fdownloader.net",36],["thehackernews.com",37],["mielec.pl",38],["camsrip.com",39],["help.sakarnewz.com",39],["beatsnoop.com",39],["fetchpik.com",39],["hackerranksolution.in",39],["treasl.com",40],["mrbenne.com",41],["cnpics.org",42],["ovabee.com",42],["porn4f.com",42],["cnxx.me",42],["ai18.pics",42],["cuervotv.me",[43,50]],["aliezstream.pro",43],["daddy-stream.xyz",43],["instream.pro",43],["mylivestream.pro",43],["powerover.online",43],["sportea.link",43],["sportsurge.stream",43],["ufckhabib.com",43],["ustream.pro",43],["papa4k.online",43],["nontongo.win",43],["g-porno.com",43],["g-streaming.com",43],["giga-streaming.com",43],["educ4m.com",43],["fromwatch.com",43],["visualnewshub.com",43],["streamhd247.info",43],["nowlive1.me",43],["buzter.xyz",43],["gamehdlive.online",43],["hdfungamezz.xyz",43],["kingstreamz.lol",43],["masterpro.club",43],["papahd.co",43],["sportos.co",43],["valhallas.click",43],["andhrafriends.com",44],["freeroms.com",44],["soap2day-online.com",44],["sportsonline.si",45],["fiuxy2.co",46],["animeunity.to",47],["auto-crypto.click",48],["iconicblogger.com",48],["tokopedia.com",49],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",50],["adsh.cc",50],["afilmyhouse.blogspot.com",50],["ak.sv",50],["animesultra.com",50],["api.webs.moe",50],["apkmody.io",50],["attvideo.com",50],["backfirstwo.site",[50,155]],["crazyblog.in",50],["divicast.com",50],["dlhd.so",50],["embed.meomeo.pw",50],["filmeserialeonline.org",50],["flexyhit.com",50],["foreverwallpapers.com",50],["french-streams.cc",50],["fslinks.org",50],["fstream365.com",50],["hdtoday.to",50],["hinatasoul.com",50],["igg-games.com",50],["infinityscans.net",50],["infinityscans.xyz",50],["mangareader.to",50],["membed.net",50],["mgnetu.com",50],["mp3juice.info",50],["mp3juices.cc",50],["myflixerz.to",50],["nowmetv.net",50],["nowsportstv.com",50],["nxbrew.com",50],["oii.io",50],["paidshitforfree.com",50],["pepperlive.info",50],["playertv.net",50],["putlocker68.com",50],["roystream.com",50],["rssing.com",50],["s.to",50],["share.filesh.site",50],["sharkfish.xyz",50],["skidrowcodex.net",50],["sports-stream.site",50],["stream4free.live",50],["streamed.su",50],["tamilmobilemovies.in",50],["tapeadsenjoyer.com",50],["thewatchseries.live",50],["tnmusic.in",50],["travelplanspro.com",50],["tusfiles.com",50],["tutlehd4.com",50],["twstalker.com",50],["vid-guard.com",50],["video-leech.xyz",50],["vidsaver.net",50],["vidspeeds.com",50],["viralitytoday.com",50],["voiranime.stream",50],["watchdoctorwhoonline.com",50],["watchserie.online",50],["webhostingpost.com",50],["woxikon.in",50],["www-y2mate.com",50],["ylink.bid",50],["ytix.xyz",50],["remixsearch.net",51],["remixsearch.es",51],["onlineweb.tools",51],["sharing.wtf",51],["xnxxcom.xyz",52],["moneycontrol.com",53],["hesgoal-tv.io",54],["hesgoal-vip.io",54],["intro-hd.net",54],["monacomatin.mc",54],["nodo313.net",54],["codec.kyiv.ua",55],["unofficialtwrp.com",55],["oaaxpgp3.xyz",56],["m9.news",57],["sexwebvideo.com",58],["sexwebvideo.net",58],["pig69.com",58],["cosplay18.pics",58],["zeemoontv-24.blogspot.com",59],["stitichsports.com",59],["tinys.click",59],["answerpython.com",59],["gsm-solution.com",59],["h-donghua.com",59],["hindisubbedacademy.com",59],["linksdramas2.blogspot.com",59],["pkgovjobz.com",59],["ripexbooster.xyz",59],["serial4.com",59],["serial412.blogspot.com",59],["sigmalinks.in",59],["tutorgaming.com",59],["everydaytechvams.com",59],["dipsnp.com",59],["cccam4sat.com",59],["x-video.tube",60],["rahim-soft.com",60],["callofwar.com",61],["secondhandsongs.com",62],["tea-coffee.net",63],["spatsify.com",63],["newedutopics.com",63],["getviralreach.in",63],["edukaroo.com",63],["funkeypagali.com",63],["careersides.com",63],["nayisahara.com",63],["wikifilmia.com",63],["infinityskull.com",63],["viewmyknowledge.com",63],["iisfvirtual.in",63],["starxinvestor.com",63],["jkssbalerts.com",63],["kenzo-flowertag.com",64],["mdn.lol",64],["btcbitco.in",65],["btcsatoshi.net",65],["cempakajaya.com",65],["crypto4yu.com",65],["gainl.ink",65],["manofadan.com",65],["readbitcoin.org",65],["wiour.com",65],["kienthucrangmieng.com",65],["tremamnon.com",65],["btc25.org",65],["tron-free.com",65],["bitsmagic.fun",65],["ourcoincash.xyz",65],["hynews.biz",65],["blog.cryptowidgets.net",66],["blog.insurancegold.in",66],["blog.wiki-topia.com",66],["blog.coinsvalue.net",66],["blog.cookinguide.net",66],["blog.freeoseocheck.com",66],["aylink.co",67],["sugarona.com",68],["nishankhatri.xyz",68],["cety.app",69],["exego.app",69],["cutlink.net",69],["cutsy.net",69],["cutyurls.com",69],["cutty.app",69],["cutnet.net",69],["aiimgvlog.fun",70],["appsbull.com",71],["diudemy.com",71],["maqal360.com",71],["mphealth.online",71],["makefreecallsonline.com",71],["androjungle.com",71],["bookszone.in",71],["drakescans.com",71],["shortix.co",71],["msonglyrics.com",71],["app-sorteos.com",71],["bokugents.com",71],["client.pylexnodes.net",71],["btvplus.bg",71],["blog24.me",[72,73]],["coingraph.us",74],["impact24.us",74],["tvi.la",[75,76]],["iir.la",[75,76]],["tii.la",[75,76]],["ckk.ai",[75,76]],["oei.la",[75,76]],["lnbz.la",[75,76]],["oii.la",[75,76]],["tpi.li",[75,76]],["atglinks.com",77],["kbconlinegame.com",78],["hamrojaagir.com",78],["odijob.com",78],["blogesque.net",79],["bookbucketlyst.com",79],["explorosity.net",79],["optimizepics.com",79],["torovalley.net",79],["travize.net",79],["trekcheck.net",79],["metoza.net",79],["techlike.net",79],["snaplessons.net",79],["atravan.net",79],["transoa.net",79],["techmize.net",79],["crenue.net",79],["simana.online",80],["fooak.com",80],["joktop.com",80],["evernia.site",80],["financemonk.net",81],["unblocked.id",83],["listendata.com",84],["7xm.xyz",84],["fastupload.io",84],["azmath.info",84],["wouterplanet.com",85],["androidacy.com",86],["pillowcase.su",87],["veryfreeporn.com",88],["theporngod.com",88],["besthdgayporn.com",89],["drivenime.com",89],["javup.org",89],["shemaleup.net",89],["austiblox.net",90],["btcbunch.com",91],["teachoo.com",92],["interfootball.co.kr",93],["a-ha.io",93],["cboard.net",93],["jjang0u.com",93],["joongdo.co.kr",93],["viva100.com",93],["gamingdeputy.com",93],["thesaurus.net",93],["alle-tests.nl",93],["maketecheasier.com",93],["automobile-catalog.com",93],["allthekingz.com",93],["motorbikecatalog.com",93],["tweaksforgeeks.com",93],["m.inven.co.kr",93],["mlbpark.donga.com",93],["meconomynews.com",93],["brandbrief.co.kr",93],["motorgraph.com",93],["blog.esuteru.com",94],["blog.livedoor.jp",94],["itainews.com",94],["jin115.com",94],["allthetests.com",94],["javatpoint.com",94],["globalrph.com",94],["carscoops.com",94],["crosswordsolver.com",94],["cruciverba.it",94],["ff14net.2chblog.jp",94],["heureka.cz",94],["indiatimes.com",94],["laleggepertutti.it",94],["meeco.kr",94],["motscroises.fr",94],["news4vip.livedoor.biz",94],["oeffnungszeitenbuch.de",94],["onecall2ch.com",94],["oraridiapertura24.it",94],["palabr.as",94],["rabitsokuhou.2chblog.jp",94],["suzusoku.blog.jp",94],["the-crossword-solver.com",94],["thestockmarketwatch.com",94],["word-grabber.com",94],["wort-suchen.de",94],["freemcserver.net",94],["golf-live.at",94],["kreuzwortraetsel.de",94],["raetsel-hilfe.de",94],["verkaufsoffener-sonntag.com",94],["horairesdouverture24.fr",94],["nyitvatartas24.hu",94],["modhub.us",94],["yugioh-starlight.com",94],["winfuture.de",94],["topstarnews.net",94],["islamicfinder.org",94],["secure-signup.net",94],["dramabeans.com",94],["manta.com",94],["tportal.hr",94],["tvtropes.org",94],["wouldurather.io",94],["worldhistory.org",95],["pravda.com.ua",96],["slobodnadalmacija.hr",97],["bitcotasks.com",98],["udvl.com",99],["www.chip.de",100],["topsporter.net",101],["sportshub.to",101],["streamcheck.link",102],["myanimelist.net",103],["bitcosite.com",104],["bitzite.com",104],["easymc.io",105],["yunjiema.top",105],["hacoos.com",107],["bondagevalley.cc",108],["zefoy.com",109],["vidello.net",110],["resizer.myct.jp",111],["gametohkenranbu.sakuraweb.com",112],["jisakuhibi.jp",113],["rank1-media.com",113],["lifematome.blog",114],["fm.sekkaku.net",115],["free-avx.jp",116],["dvdrev.com",117],["betweenjpandkr.blog",118],["nft-media.net",119],["ghacks.net",120],["leak.sx",121],["paste.bin.sx",121],["pornleaks.in",121],["songspk2.info",122],["zoechip.com",123],["nectareousoverelate.com",125],["khoaiphim.com",126],["haafedk2.com",127],["fordownloader.com",127],["jovemnerd.com.br",128],["nicomanga.com",129],["totalcsgo.com",130],["vivamax.asia",131],["manysex.com",132],["gaminginfos.com",133],["tinxahoivn.com",134],["forums-fastunlock.com",135],["automoto.it",136],["codelivly.com",137],["ophim.vip",138],["touguatize.monster",139],["client.falixnodes.net",140],["novelhall.com",141],["abc17news.com",142],["bailiwickexpress.com",142],["barnsleychronicle.com",142],["chaptercheats.com",142],["commercialobserver.com",142],["competentedigitale.ro",142],["decider.com",142],["didyouknowfacts.com",142],["dogtime.com",142],["dustyoldthing.com",142],["faithhub.net",142],["femestella.com",142],["footwearnews.com",142],["freeconvert.com",142],["frogsandsnailsandpuppydogtail.com",142],["fsm-media.com",142],["funtasticlife.com",142],["fwmadebycarli.com",142],["gamerant.com",142],["gfinityesports.com",142],["givemesport.com",142],["gulflive.com",142],["helloflo.com",142],["homeglowdesign.com",142],["honeygirlsworld.com",142],["hotcars.com",142],["howtogeek.com",142],["imgur.com",142],["insider-gaming.com",142],["insurancejournal.com",142],["jasminemaria.com",142],["kion546.com",142],["lehighvalleylive.com",142],["lettyskitchen.com",142],["lifeinleggings.com",142],["liveandletsfly.com",142],["lizzieinlace.com",142],["localnews8.com",142],["lonestarlive.com",142],["madeeveryday.com",142],["maidenhead-advertiser.co.uk",142],["makeuseof.com",142],["mardomreport.net",142],["melangery.com",142],["milestomemories.com",142],["modernmom.com",142],["momtastic.com",142],["mostlymorgan.com",142],["motherwellmag.com",142],["movieweb.com",142],["muddybootsanddiamonds.com",142],["musicfeeds.com.au",142],["mylifefromhome.com",142],["nationalreview.com",142],["neoskosmos.com",142],["nordot.app",142],["nothingbutnewcastle.com",142],["nsjonline.com",142],["oakvillenews.org",142],["observer.com",142],["ourlittlesliceofheaven.com",142],["palachinkablog.com",142],["patheos.com",142],["pinkonthecheek.com",142],["politicususa.com",142],["predic.ro",142],["puckermom.com",142],["qtoptens.com",142],["realgm.com",142],["reelmama.com",142],["robbreport.com",142],["royalmailchat.co.uk",142],["samchui.com",142],["sandrarose.com",142],["screenrant.com",142],["sherdog.com",142],["sidereel.com",142],["silive.com",142],["simpleflying.com",142],["sloughexpress.co.uk",142],["spacenews.com",142],["sportsgamblingpodcast.com",142],["spotofteadesigns.com",142],["stacysrandomthoughts.com",142],["ssnewstelegram.com",142],["superherohype.com",142],["tablelifeblog.com",142],["thebeautysection.com",142],["thecelticblog.com",142],["thecurvyfashionista.com",142],["thefashionspot.com",142],["thegamer.com",142],["thegamescabin.com",142],["thenerdyme.com",142],["thenonconsumeradvocate.com",142],["theprudentgarden.com",142],["thethings.com",142],["timesnews.net",142],["topspeed.com",142],["toyotaklub.org.pl",142],["travelingformiles.com",142],["tutsnode.org",142],["viralviralvideos.com",142],["wannacomewith.com",142],["wimp.com",[142,144]],["windsorexpress.co.uk",142],["woojr.com",142],["worldoftravelswithkids.com",142],["worldsurfleague.com",142],["xda-developers.com",142],["adoredbyalex.com",142],["agrodigital.com",[142,144]],["al.com",[142,144]],["aliontherunblog.com",[142,144]],["allaboutthetea.com",[142,144]],["allmovie.com",[142,144]],["allmusic.com",[142,144]],["allthingsthrifty.com",[142,144]],["amessagewithabottle.com",[142,144]],["androidpolice.com",142],["antyradio.pl",142],["artforum.com",[142,144]],["artnews.com",[142,144]],["awkward.com",[142,144]],["awkwardmom.com",[142,144]],["becomingpeculiar.com",142],["bethcakes.com",[142,144]],["blogher.com",[142,144]],["bluegraygal.com",[142,144]],["briefeguru.de",[142,144]],["carmagazine.co.uk",142],["cattime.com",142],["cbr.com",142],["cleveland.com",[142,144]],["collider.com",142],["comingsoon.net",142],["crafty.house",142],["dailyvoice.com",[142,144]],["dualshockers.com",142],["masslive.com",[142,144,189]],["mlive.com",[142,144]],["nj.com",[142,144]],["oregonlive.com",[142,144]],["pagesix.com",[142,144,189]],["pennlive.com",[142,144,189]],["sheknows.com",[142,144]],["syracuse.com",[142,144,189]],["tvline.com",[142,144]],["cheatsheet.com",143],["pwinsider.com",143],["baeldung.com",143],["mensjournal.com",143],["247sports.com",[144,189]],["betweenenglandandiowa.com",144],["bgr.com",144],["blu-ray.com",144],["cbsnews.com",[144,189]],["cbssports.com",[144,189]],["celiacandthebeast.com",144],["dailykos.com",144],["eater.com",144],["eldiariony.com",144],["inc.com",144],["indiewire.com",[144,189]],["inquisitr.com",144],["kentucky.com",144],["knowyourmeme.com",144],["last.fm",144],["mandatory.com",144],["nbcsports.com",144],["news.com.au",144],["nypost.com",[144,189]],["rollingstone.com",144],["sbnation.com",144],["sneakernews.com",144],["sport-fm.gr",144],["themarysue.com",144],["usmagazine.com",144],["bagi.co.in",145],["keran.co",145],["biblestudytools.com",146],["christianheadlines.com",146],["ibelieve.com",146],["kuponigo.com",147],["kimcilonly.site",148],["kimcilonly.link",148],["cryptoearns.com",149],["inxxx.com",150],["ipaspot.app",151],["embedwish.com",152],["filelions.live",152],["leakslove.net",152],["jenismac.com",153],["vxetable.cn",154],["jewelavid.com",155],["nizarstream.com",155],["snapwordz.com",156],["toolxox.com",156],["rl6mans.com",156],["idol69.net",156],["plumbersforums.net",157],["123movies57.online",158],["gulio.site",159],["mediaset.es",160],["izlekolik.net",161],["donghuaworld.com",162],["letsdopuzzles.com",163],["hes-goals.io",164],["pkbiosfix.com",164],["casi3.xyz",164],["rediff.com",165],["dzapk.com",166],["darknessporn.com",167],["familyporner.com",167],["freepublicporn.com",167],["pisshamster.com",167],["punishworld.com",167],["xanimu.com",167],["tainio-mania.online",168],["javhdo.net",169],["eroticmoviesonline.me",170],["teleclub.xyz",171],["ecamrips.com",172],["showcamrips.com",172],["tucinehd.com",174],["9animetv.to",175],["qiwi.gg",176],["jornadaperfecta.com",177],["loseart.com",178],["sousou-no-frieren.com",179],["unite-guide.com",180],["thebullspen.com",181],["botcomics.com",182],["cefirates.com",182],["chandlerorchards.com",182],["comicleaks.com",182],["marketdata.app",182],["monumentmetals.com",182],["tapmyback.com",182],["ping.gg",182],["revistaferramental.com.br",182],["hawpar.com",182],["alpacafinance.org",[182,183]],["nookgaming.com",182],["enkeleksamen.no",182],["kvest.ee",182],["creatordrop.com",182],["panpots.com",182],["cybernetman.com",182],["bitdomain.biz",182],["gerardbosch.xyz",182],["fort-shop.kiev.ua",182],["accuretawealth.com",182],["resourceya.com",182],["tracktheta.com",182],["camberlion.com",182],["replai.io",182],["trybawaryjny.pl",182],["tt.live",183],["future-fortune.com",183],["abhijith.page",183],["madrigalmaps.com",183],["adventuretix.com",183],["bolighub.dk",183],["panprices.com",184],["intercity.technology",184],["freelancer.taxmachine.be",184],["adria.gg",184],["fjlaboratories.com",184],["emanualonline.com",184],["proboards.com",185],["winclassic.net",185],["japscan.lol",187],["1001tracklists.com",188],["abema.tv",190]]);

const entitiesMap = new Map([["vidsrc",[3,13,50]],["mixdrop",[3,14]],["sanet",3],["wawacity",3],["pahe",[5,14]],["soap2day",5],["mhdsports",7],["mhdsportstv",7],["mhdtvsports",7],["mhdtvworld",7],["mhdtvmax",7],["mhdstream",7],["reset-scans",7],["poplinks",[7,71]],["hqq",8],["waaw",8],["pixhost",10],["viprow",[13,14,50]],["bluemediadownload",13],["bluemediafile",13],["bluemedialink",13],["bluemediastorage",13],["bluemediaurls",13],["urlbluemedia",13],["cloudvideotv",[13,50]],["123-movies",14],["123movieshd",14],["123movieshub",14],["123moviesme",14],["1337x",[14,28]],["1stream",14],["1tamilmv",14],["2ddl",14],["2umovies",14],["3hiidude",14],["4stream",14],["5movies",14],["7hitmovies",14],["9xmovie",14],["9xlinks",14],["aagmaal",[14,50]],["adblockeronstape",14],["adblockeronstreamtape",14],["adblockplustape",14],["adblockstreamtape",14],["adblockstrtape",14],["adblockstrtech",14],["adblocktape",14],["adcorto",14],["alexsports",14],["alexsportss",14],["alexsportz",14],["animepahe",14],["animesanka",14],["animixplay",14],["aniplay",14],["antiadtape",14],["asianclub",14],["ask4movie",14],["atomixhq",[14,50]],["atomohd",14],["beinmatch",[14,22]],["bhaai",14],["buffstreams",14],["canalesportivo",14],["clickndownload",14],["clicknupload",14],["daddylive",[14,50]],["daddylivehd",[14,50]],["ddrmovies",14],["desiremovies",14],["devlib",14],["divxtotal",14],["divxtotal1",14],["dlhd",14],["dvdplay",[14,50]],["elixx",14],["enjoy4k",14],["estrenosflix",14],["estrenosflux",14],["estrenosgo",14],["f1stream",14],["fbstream",14],["file4go",14],["filmymeet",14],["filmyzilla",[14,50]],["findav",14],["findporn",14],["flixmaza",14],["flizmovies",14],["freetvsports",14],["fullymaza",14],["g3g",14],["gotxx",14],["grantorrent",14],["hdmoviesfair",[14,50]],["hdmoviesflix",14],["hiidudemoviez",14],["imgsen",14],["imgsto",14],["incest",14],["incestflix",14],["itopmusic",14],["javmost",14],["keeplinks",14],["keepvid",14],["keralahd",14],["khatrimazaful",14],["khatrimazafull",14],["leechall",14],["linkshorts",14],["mangovideo",14],["masaporn",14],["miniurl",14],["mirrorace",14],["mixdroop",14],["mkvcage",14],["mlbstream",14],["mlsbd",14],["mmsbee",14],["motogpstream",14],["movieplex",14],["movierulzlink",14],["movies123",14],["moviesflix",14],["moviesmeta",14],["moviessources",14],["moviesverse",14],["moviezwaphd",14],["mrunblock",14],["nbastream",14],["newmovierulz",14],["nflstream",14],["nhlstream",14],["noblocktape",14],["nocensor",14],["onlyfams",14],["ouo",14],["pctfenix",[14,50]],["pctnew",[14,50]],["peliculas24",14],["pelisplus",14],["piratebay",14],["plyjam",14],["plylive",14],["plyvdo",14],["pornhoarder",14],["prbay",14],["projectfreetv",14],["proxybit",14],["psarips",14],["racaty",14],["remaxhd",14],["rintor",14],["rnbxclusive",14],["rnbxclusive0",14],["rnbxclusive1",14],["rojadirecta",14],["rojadirectaenvivo",14],["rugbystreams",14],["sadisflix",14],["safetxt",14],["shadowrangers",14],["shahi4u",14],["shahid4u1",14],["shahid4uu",14],["shavetape",14],["shortearn",14],["shorten",14],["shorttey",14],["shortzzy",14],["skymovieshd",14],["socceronline",[14,50]],["softarchive",14],["sports-stream",14],["sshhaa",14],["stapadblockuser",14],["stape",14],["stapewithadblock",14],["starmusiq",14],["strcloud",14],["streamadblocker",[14,50]],["streamadblockplus",14],["streamcdn",14],["streamhub",14],["streamsport",14],["streamta",14],["streamtape",14],["streamtapeadblockuser",14],["strikeout",14],["strtape",14],["strtapeadblock",14],["strtapeadblocker",14],["strtapewithadblock",14],["strtpe",14],["swatchseries",14],["tabooflix",14],["tennisstreams",14],["themoviesflix",14],["thepiratebay",14],["thisav",14],["tmearn",14],["toonanime",14],["torlock",14],["tormalayalam",14],["torrentz2eu",14],["tutelehd",14],["tvply",14],["u4m",14],["ufcstream",14],["unblocknow",14],["uploadbuzz",14],["usagoals",14],["vexmoviex",14],["vidclouds",14],["vidlox",14],["vipbox",[14,50]],["vipboxtv",[14,50]],["vipleague",14],["watch-series",14],["watchseries",14],["xclusivejams",14],["xmoviesforyou",14],["youdbox",14],["ytmp3eu",14],["yts-subs",14],["yts",14],["zooqle",14],["dutchycorp",15],["torrentdownload",29],["mkvcinemas",[29,50]],["dood",[32,50]],["doodstream",32],["dooood",[32,50]],["livecamrips",34],["shrinke",34],["shrinkme",34],["daddylive1",43],["esportivos",43],["poscitechs",43],["bollyflix",43],["watchomovies",[44,50]],["123movies",50],["123moviesla",50],["123movieweb",50],["2embed",50],["720pstream",50],["9xmovies",50],["adshort",50],["allmovieshub",50],["asianplay",50],["atishmkv",50],["cricstream",50],["crictime",50],["databasegdriveplayer",50],["extramovies",50],["faselhd",50],["faselhds",50],["filemoon",50],["filmy",50],["filmyhit",50],["filmywap",50],["fmovies",50],["gdplayer",50],["gdriveplayer",50],["goku",50],["gomovies",50],["gowatchseries",50],["hdfungamezz",50],["hindilinks4u",50],["hurawatch",50],["jalshamoviezhd",50],["livecricket",50],["mhdsport",50],["movies2watch",50],["moviespapa",50],["mp4moviez",50],["mydownloadtube",50],["nsw2u",50],["nuroflix",50],["o2tvseries",50],["o2tvseriesz",50],["pirlotv",50],["poscitech",50],["primewire",50],["redecanais",50],["serienstream",50],["sflix",50],["shahed4u",50],["shaheed4u",50],["speedostream",50],["sportcast",50],["sportskart",50],["streamingcommunity",50],["tamilarasan",50],["tamilfreemp3songs",50],["tamilprinthd",50],["torrentdosfilmes",50],["tubemate",50],["uploadrar",50],["uqload",50],["vidcloud9",50],["vido",50],["vidoo",50],["vudeo",50],["vumoo",50],["yesmovies",50],["mydverse",59],["stfly",79],["stly",79],["dropgalaxy",81],["kickass",82],["cine-calidad",88],["woxikon",94],["teluguflix",106],["actvid",123],["lk21official",173],["nontondrama",173]]);

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
    const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
    let bcBuffer = [];
    safe.logLevel = scriptletGlobals.logLevel || 1;
    let lastLogType = '';
    let lastLogText = '';
    let lastLogTime = 0;
    safe.sendToLogger = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( text === lastLogText && type === lastLogType ) {
            if ( (Date.now() - lastLogTime) < 5000 ) { return; }
        }
        lastLogType = type;
        lastLogText = text;
        lastLogTime = Date.now();
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
