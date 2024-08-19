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

/* jshint esversion:11 */
/* global cloneInto */

'use strict';

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_removeNodeText = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["script","DisplayAcceptableAdIfAdblocked"],["script","/==undefined.*body/"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","Reflect"],["script","document.write"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","deblocker"],["script","exdynsrv"],["script","/adb/i"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|adblock/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","Adblock"],["script","alert"],["script","/adblock|popunder/"],["script","document.createTextNode"],["script","style"],["script","shown_at"],["script","adsSrc"],["script","/fetch|adb/i"],["script","window.open"],["script","adblockimg"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","googlesyndication"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/pop1stp|detectAdBlock/"],["script","popundersPerIP"],["script","popunder"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","catch"],["script","displayAdsV3"],["script",";}}};break;case $."],["script","adblocker"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","admiral"],["script","/adm|adb/i"],["script","initializeInterstitial"],["script","ai_adb"],["script","/adbl/i"],["script","/-Ads-close|preventDefault|ai-debug|b2a|split|reload/"],["script","/bypass.php"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","AdbModel"],["script","popup"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script",";break;case $."],["script","adb_detected"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","openPopup"],["style","text-decoration"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","charCodeAt"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","KCgpPT57bGV0IGU"],["script","error-report.com"],["script","adShield"],["script","AdblockRegixFinder"],["script","serve"],["script","/\\.pop\\(\\); \\}|AdSlot created|Created AdSlot|\\.length % 2; \\}/"],["script","/ConsoleBan|alert|AdBlocker/"],["script","runPop"],["script","mdpDeblocker"],["script","alert","condition","adblock"],["script","adb"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","zfgloaded"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/modal|popupads/"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","ad_block"],["script","app_checkext"],["script","clientHeight"],["script","/url_key|adHtml/"],["script","pop.target"],["script","axios"],["script","ad block"],["script","\"v4ac1eiZr0\""],["script","\"data-adm-url\""],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","AaDetector"],["script","AdBlock"],["script","Symbol.iterator"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","detectAdBlock"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","document.head.appendChild"],["script","adsPlay"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","detect"],["script","fetch"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","vglnk"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","/event\\.keyCode|DisableDevtool/"],["script","/detectAdBlock|\\(typeof [a-z]{10","25} \\=\\=\\=? (\"undefined\"|\"function\")\\)|_0x|'\\/func'/"],["script","NREUM"]];

const hostnamesMap = new Map([["alpin.de",0],["boersennews.de",0],["chefkoch.de",0],["chip.de",0],["clever-tanken.de",0],["desired.de",0],["donnerwetter.de",0],["fanfiktion.de",0],["focus.de",0],["formel1.de",0],["frustfrei-lernen.de",0],["gewinnspiele.tv",0],["giga.de",0],["gut-erklaert.de",0],["kino.de",0],["messen.de",0],["nickles.de",0],["nordbayern.de",0],["spielfilm.de",0],["teltarif.de",0],["unsere-helden.com",0],["weltfussball.at",0],["watson.de",0],["moviepilot.de",[0,4]],["aupetitparieur.com",1],["allthingsvegas.com",1],["100percentfedup.com",1],["beforeitsnews.com",1],["concomber.com",1],["conservativebrief.com",1],["conservativefiringline.com",1],["dailylol.com",1],["funnyand.com",1],["letocard.fr",1],["mamieastuce.com",1],["meilleurpronostic.fr",1],["patriotnationpress.com",1],["toptenz.net",1],["vitamiiin.com",1],["writerscafe.org",1],["populist.press",1],["dailytruthreport.com",1],["livinggospeldaily.com",1],["first-names-meanings.com",1],["welovetrump.com",1],["thehayride.com",1],["thelibertydaily.com",1],["thepoke.co.uk",1],["thepolitistick.com",1],["theblacksphere.net",1],["shark-tank.com",1],["naturalblaze.com",1],["greatamericanrepublic.com",1],["dailysurge.com",1],["truthlion.com",1],["flagandcross.com",1],["westword.com",1],["republicbrief.com",1],["freedomfirstnetwork.com",1],["phoenixnewtimes.com",1],["designbump.com",1],["clashdaily.com",1],["madworldnews.com",1],["reviveusa.com",1],["sonsoflibertymedia.com",1],["thedesigninspiration.com",1],["videogamesblogger.com",1],["protrumpnews.com",1],["thepalmierireport.com",1],["kresy.pl",1],["thepatriotjournal.com",1],["gellerreport.com",1],["thegatewaypundit.com",1],["wltreport.com",1],["miaminewtimes.com",1],["politicalsignal.com",1],["rightwingnews.com",1],["bigleaguepolitics.com",1],["comicallyincorrect.com",1],["web.de",2],["skidrowreloaded.com",[3,14]],["1stream.eu",3],["4kwebplay.xyz",3],["antennasports.ru",3],["buffsports.me",[3,49]],["buffstreams.app",3],["claplivehdplay.ru",3],["cracksports.me",[3,13]],["ext.to",3],["eztv.tf",3],["eztvx.to",3],["kenitv.me",[3,13]],["lewblivehdplay.ru",3],["mlbbite.net",3],["mlbstreams.ai",3],["qatarstreams.me",[3,13]],["qqwebplay.xyz",3],["rnbastreams.com",3],["soccerworldcup.me",[3,13]],["topstreams.info",3],["totalsportek.to",3],["viwlivehdplay.ru",3],["topembed.pw",3],["crackstreamer.net",3],["methstreamer.com",3],["yts.mx",6],["upornia.com",8],["pinsystem.co.uk",9],["elrellano.com",9],["tinyppt.com",9],["bharathwick.com",9],["descargaspcpro.net",9],["dx-tv.com",9],["rt3dmodels.com",9],["plc4me.com",9],["blisseyhusbands.com",9],["madaradex.org",9],["trigonevo.com",9],["franceprefecture.fr",9],["jazbaat.in",9],["aipebel.com",9],["veganab.co",9],["camdigest.com",9],["learnmany.in",9],["amanguides.com",[9,62]],["highkeyfinance.com",[9,62]],["appkamods.com",9],["techacode.com",9],["djqunjab.in",9],["downfile.site",9],["expertvn.com",9],["trangchu.news",9],["3dmodelshare.org",9],["nulleb.com",9],["asiaon.top",9],["coursesghar.com",9],["thecustomrom.com",9],["snlookup.com",9],["bingotingo.com",9],["ghior.com",9],["3dmili.com",9],["karanpc.com",9],["plc247.com",9],["apkdelisi.net",9],["javindo.eu.org",9],["chindohot.site",9],["freepasses.org",9],["tomarnarede.pt",9],["basketballbuzz.ca",9],["dribbblegraphics.com",9],["kemiox.com",9],["checkersmenu.us",9],["teksnologi.com",9],["dollareuro.live",9],["eporner.com",11],["javtiful.com",[11,14]],["germancarforum.com",12],["innateblogger.com",12],["cybercityhelp.in",12],["streamnoads.com",[13,14,49]],["bowfile.com",13],["cloudvideo.tv",[13,49]],["coloredmanga.com",13],["embedstream.me",[13,14,49]],["exeo.app",13],["hiphopa.net",[13,14]],["megaup.net",13],["olympicstreams.co",[13,49]],["tv247.us",[13,14]],["uploadhaven.com",13],["userscloud.com",[13,49]],["mdfx9dc8n.net",14],["mdzsmutpcvykb.net",14],["mixdrop21.net",14],["mixdropjmk.pw",14],["y2tube.pro",14],["fastreams.com",14],["redittsports.com",14],["sky-sports.store",14],["streamsoccer.site",14],["tntsports.store",14],["wowstreams.co",14],["123movies4u.site",14],["1337xporn.com",14],["141jav.com",14],["1bit.space",14],["1bitspace.com",14],["38dh2.top",14],["3dporndude.com",14],["4archive.org",14],["4horlover.com",14],["560pmovie.com",14],["60fps.xyz",14],["85tube.com",14],["85videos.com",14],["8xlinks.click",14],["a2zcrackworld.com",14],["aazzz.xyz",14],["acefile.co",14],["actusports.eu",14],["adclickersbot.com",14],["adricami.com",14],["adslink.pw",14],["adultstvlive.com",14],["adz7short.space",14],["aeblender.com",14],["ahdafnews.blogspot.com",14],["ak47sports.com",14],["akuma.moe",14],["allplayer.tk",14],["allstreaming.online",14],["amadoras.cf",14],["amadorasdanet.shop",14],["amateurblog.tv",14],["androidadult.com",14],["anhsexjav.xyz",14],["anidl.org",14],["anime-loads.org",14],["animeblkom.net",14],["animefire.plus",14],["animelek.me",14],["animespire.net",14],["animestotais.xyz",14],["animeyt.es",14],["anroll.net",14],["anymoviess.xyz",14],["aotonline.org",14],["asenshu.com",14],["asialiveaction.com",14],["asianclipdedhd.net",14],["askim-bg.com",14],["asumsikedaishop.com",14],["avcrempie.com",14],["avseesee.com",14],["gettapeads.com",14],["backfirstwo.com",14],["bajarjuegospcgratis.com",14],["balkanportal.net",14],["balkanteka.net",14],["bdnewszh.com",[14,49]],["belowporn.com",14],["bestclaimtrx.xyz",14],["bestgirlsexy.com",14],["bestnhl.com",14],["bestporn4free.com",14],["bestporncomix.com",14],["bet36.es",14],["bikinitryon.net",14],["birdurls.com",14],["bitsearch.to",14],["blackcockadventure.com",14],["blackcockchurch.org",14],["blackporncrazy.com",14],["blizzboygames.net",14],["blizzpaste.com",14],["blkom.com",14],["blog-peliculas.com",14],["blogtrabalhista.com",14],["blurayufr.xyz",14],["bobsvagene.club",14],["bolly4umovies.click",14],["bonusharian.pro",14],["brilian-news.id",14],["brupload.net",14],["bucitana.com",14],["cablegratis.online",14],["camchickscaps.com",14],["camgirlcum.com",14],["camgirls.casa",14],["cashurl.in",14],["castingx.net",14],["ccurl.net",[14,49]],["celebrity-leaks.net",14],["cgpelis.net",14],["charexempire.com",14],["choosingnothing.com",14],["clasico.tv",14],["clik.pw",14],["coin-free.com",[14,59]],["coins100s.fun",14],["comicsmanics.com",14],["compucalitv.com",14],["coolcast2.com",14],["cosplaytab.com",14],["countylocalnews.com",14],["cpmlink.net",14],["crackstreamshd.click",14],["crespomods.com",14],["crisanimex.com",14],["crunchyscan.fr",14],["cuevana3.fan",14],["cuevana3hd.com",14],["cumception.com",14],["curvaweb.com",14],["cutpaid.com",14],["cypherscans.xyz",[14,49]],["datawav.club",14],["daughtertraining.com",14],["deepgoretube.site",14],["deltabit.co",14],["depvailon.com",14],["derleta.com",14],["desivdo.com",14],["desixx.net",14],["detikkebumen.com",14],["deutschepornos.me",14],["diasoft.xyz",14],["directupload.net",14],["diskusscan.com",14],["dixva.com",14],["doctormalay.com",14],["dofusports.xyz",14],["dogemate.com",14],["doods.cam",14],["doodskin.lat",14],["downloadrips.com",14],["downvod.com",14],["dphunters.mom",14],["dragontranslation.com",14],["duddes.xyz",14],["dvdfullestrenos.com",14],["easylinks.in",14],["ebookbb.com",14],["ebookhunter.net",14],["egyanime.com",14],["egygost.com",14],["egyshare.cc",14],["ekasiwap.com",14],["electro-torrent.pl",14],["elil.cc",14],["embed4u.xyz",14],["eplayer.click",14],["erovoice.us",14],["eroxxx.us",14],["estrenosdoramas.net",14],["everia.club",14],["everythinginherenet.blogspot.com",14],["extrafreetv.com",14],["extremotvplay.com",14],["fapinporn.com",14],["fapptime.com",14],["fashionblog.tv",14],["fastreams.live",14],["faucethero.com",14],["fembed.com",14],["femdom-joi.com",14],["fileone.tv",14],["film1k.com",14],["filmeonline2023.net",14],["filmesonlinex.org",14],["filmesonlinexhd.biz",[14,49]],["filmovitica.com",14],["filmymaza.blogspot.com",14],["filthy.family",14],["firstmovies.to",14],["fixfinder.click",14],["flostreams.xyz",14],["flyfaucet.com",14],["footyhunter.lol",14],["footyhunter3.xyz",[14,49]],["forex-golds.com",14],["forex-trnd.com",14],["forumchat.club",14],["forumlovers.club",14],["freemoviesonline.biz",14],["freeomovie.co.in",14],["freeomovie.to",14],["freeporncomic.net",14],["freepornhdonlinegay.com",14],["freeproxy.io",14],["freeuse.me",14],["freeusexporn.com",14],["fsicomics.com",14],["gambarbogel.xyz",14],["gamepcfull.com",14],["gameronix.com",14],["gamesfullx.com",14],["gameshdlive.net",14],["gameshdlive.xyz",14],["gamesmountain.com",14],["gamesrepacks.com",14],["gamingguru.fr",14],["gamovideo.com",14],["garota.cf",14],["gaydelicious.com",14],["gaypornmasters.com",14],["gaysex69.net",14],["gemstreams.com",14],["get-to.link",14],["girlscanner.org",14],["giurgiuveanul.ro",14],["gledajcrtace.xyz",14],["gocast2.com",14],["gomo.to",14],["gostosa.cf",14],["gtlink.co",14],["gwiazdypornosow.pl",14],["haho.moe",14],["hatsukimanga.com",14],["hayhd.net",14],["hdsaprevodom.com",14],["hdstreamss.club",14],["hentais.tube",14],["hentaistream.co",14],["hentaitk.net",14],["hentaitube.online",14],["hentaiworld.tv",14],["hesgoal.tv",14],["hexupload.net",14],["hhkungfu.tv",14],["highlanderhelp.com",14],["hindimean.com",14],["hindimovies.to",[14,49]],["hiperdex.com",14],["hispasexy.org",14],["hitprn.com",14],["hoca4u.com",14],["hollymoviehd.cc",14],["hoodsite.com",14],["hopepaste.download",14],["hornylips.com",14],["hotgranny.live",14],["hotmama.live",14],["hqcelebcorner.net",14],["huren.best",14],["hwnaturkya.com",[14,49]],["hxfile.co",[14,49]],["igfap.com",14],["ihdstreams.xyz",14],["iklandb.com",14],["illink.net",14],["imgkings.com",14],["imgsex.xyz",14],["imx.to",14],["influencersgonewild.org",14],["infosgj.free.fr",14],["investnewsbrazil.com",14],["itdmusics.com",14],["itsuseful.site",14],["itunesfre.com",14],["iwatchfriendsonline.net",[14,116]],["jackstreams.com",14],["jatimupdate24.com",14],["jav-fun.cc",14],["jav-scvp.com",14],["javcl.com",14],["javf.net",14],["javhay.net",14],["javhoho.com",14],["javhun.com",14],["javleak.com",14],["javporn.best",14],["javsex.to",14],["jimdofree.com",14],["jiofiles.org",14],["jorpetz.com",14],["journalyc.online",14],["jp-films.com",14],["jpop80ss3.blogspot.com",14],["jpopsingles.eu",[14,31]],["kantotflix.net",14],["kantotinyo.com",14],["kaoskrew.org",14],["kaplog.com",14],["keralatvbox.com",14],["kickassanimes.io",14],["kimochi.info",14],["kimochi.tv",14],["kinemania.tv",14],["konstantinova.net",14],["koora-online.live",14],["kunmanga.com",14],["kutmoney.com",14],["kwithsub.com",14],["ladangreceh.xyz",14],["lat69.me",14],["latinblog.tv",14],["latinomegahd.net",14],["lazyfaucet.com",14],["leechpremium.link",14],["legendas.dev",14],["legendei.net",14],["lightdlmovies.blogspot.com",14],["lighterlegend.com",14],["linclik.com",14],["linkebr.com",14],["linkrex.net",14],["links.worldfree4u-lol.online",14],["linksfy.co",14],["lody.ink",14],["lovesomecommunity.com",14],["lulustream.com",[14,49]],["luluvdo.com",[14,49]],["luzcameraeacao.shop",14],["manga-oni.com",14],["mangaboat.com",14],["mangagenki.me",14],["mangahere.onl",14],["mangaweb.xyz",14],["mangoporn.net",14],["manhwahentai.me",14],["masahub.com",14],["masahub.net",14],["maturegrannyfuck.com",14],["mdy48tn97.com",14],["mediapemersatubangsa.com",14],["mega-mkv.com",14],["megapastes.com",14],["megapornpics.com",14],["messitv.net",14],["meusanimes.net",14],["milfmoza.com",14],["milfzr.com",14],["millionscast.com",14],["mimaletamusical.blogspot.com",14],["mitly.us",14],["mkv-pastes.com",14],["modb.xyz",14],["monaskuliner.ac.id",14],["moredesi.com",14],["movgotv.net",14],["movi.pk",14],["movierr.online",14],["movieswbb.com",14],["moviewatch.com.pk",14],["mp4upload.com",14],["mrskin.live",14],["multicanaistv.com",14],["mundowuxia.com",14],["myeasymusic.ir",14],["myonvideo.com",14],["myyouporn.com",14],["narutoget.info",14],["naughtypiss.com",14],["nerdiess.com",14],["new-fs.eu",14],["newtorrentgame.com",14],["nflstreams.me",14],["niaomea.me",[14,49]],["nicekkk.com",14],["nicesss.com",14],["nlegs.com",14],["nolive.me",[14,49]],["nopay.info",14],["nopay2.info",[14,155]],["notformembersonly.com",14],["novamovie.net",14],["novelpdf.xyz",14],["novelssites.com",[14,49]],["novelup.top",14],["nsfwr34.com",14],["nu6i-bg-net.com",14],["nudebabesin3d.com",14],["nukedfans.com",14],["nuoga.eu",14],["nzbstars.com",14],["ohjav.com",14],["ojearnovelas.com",14],["okanime.xyz",14],["olarixas.xyz",14],["oldbox.cloud",14],["olweb.tv",14],["olympicstreams.me",14],["on9.stream",14],["oncast.xyz",14],["onepiece-mangaonline.com",14],["onifile.com",14],["onionstream.live",14],["onlinesaprevodom.net",14],["onlyfullporn.video",14],["onplustv.live",14],["originporn.com",14],["ovagames.com",14],["ovamusic.com",14],["owllink.net",14],["packsporn.com",14],["pahaplayers.click",14],["palimas.org",14],["pandafiles.com",14],["papahd.club",14],["papahd1.xyz",14],["password69.com",14],["pastemytxt.com",14],["payskip.org",14],["peeplink.in",14],["peliculasmx.net",14],["pervertgirlsvideos.com",14],["pervyvideos.com",14],["phim12h.com",14],["picdollar.com",14],["pickteenz.com",14],["pics4you.net",14],["picsxxxporn.com",14],["pinayscandalz.com",14],["pinkueiga.net",14],["piratefast.xyz",14],["piratehaven.xyz",14],["pirateiro.com",14],["pirlotvonline.org",14],["playtube.co.za",14],["plugintorrent.com",14],["pmvzone.com",14],["porndish.com",14],["pornez.net",14],["pornfetishbdsm.com",14],["pornfits.com",14],["pornhd720p.com",14],["pornobr.club",14],["pornobr.ninja",14],["pornodominicano.net",14],["pornofaps.com",14],["pornoflux.com",14],["pornotorrent.com.br",14],["pornredit.com",14],["pornstarsyfamosas.es",14],["pornstreams.co",14],["porntn.com",14],["pornxbit.com",14],["pornxday.com",14],["portaldasnovinhas.shop",14],["portugues-fcr.blogspot.com",14],["poscishd.online",14],["poscitesch.com",[14,49]],["poseyoung.com",14],["pover.org",14],["proxyninja.org",14],["pubfilmz.com",14],["publicsexamateurs.com",14],["punanihub.com",14],["putlocker5movies.org",14],["pxxbay.com",14],["r18.best",14],["ragnaru.net",14],["rapbeh.net",14],["rapelust.com",14],["rapload.org",14],["read-onepiece.net",14],["retro-fucking.com",14],["retrotv.org",14],["robaldowns.com",14],["rockdilla.com",14],["rojadirectatvenvivo.com",14],["rojitadirecta.blogspot.com",14],["romancetv.site",14],["rule34.club",14],["rule34hentai.net",14],["rumahbokep-id.com",14],["safego.cc",14],["safestream.cc",14],["sakurafile.com",14],["satoshi-win.xyz",14],["scat.gold",14],["scatfap.com",14],["scatkings.com",14],["scnlog.me",14],["scripts-webmasters.net",14],["serie-turche.com",14],["serijefilmovi.com",14],["sexcomics.me",14],["sexdicted.com",14],["sexgay18.com",14],["sexofilm.co",14],["sextgem.com",14],["sextubebbw.com",14],["sgpics.net",14],["shadowrangers.live",14],["shahee4u.cam",14],["shahiid-anime.net",14],["shemale6.com",14],["shinden.pl",14],["short.es",14],["showmanga.blog.fc2.com",14],["shrt10.com",14],["shurt.pw",14],["sideplusleaks.net",14],["silverblog.tv",14],["silverpic.com",14],["sinhalasub.life",14],["sinsitio.site",14],["sinvida.me",14],["skidrowcpy.com",14],["skidrowfull.com",14],["slut.mom",14],["smallencode.me",14],["smoner.com",14],["smplace.com",14],["soccerinhd.com",[14,49]],["socceron.name",14],["softairbay.com",14],["sokobj.com",14],["songsio.com",14],["souexatasmais.com",14],["sportbar.live",14],["sportea.online",14],["sportskart.xyz",14],["sportstream1.cfd",14],["sporttuna.site",14],["srt.am",14],["srts.me",14],["stakes100.xyz",14],["stbemuiptv.com",14],["stockingfetishvideo.com",14],["stream.crichd.vip",14],["stream.lc",14],["stream25.xyz",14],["streambee.to",14],["streamcenter.pro",14],["streamers.watch",14],["streamgo.to",14],["streamkiste.tv",14],["streamoporn.xyz",14],["streamoupload.xyz",14],["streamservicehd.click",14],["streamvid.net",[14,23]],["subtitleporn.com",14],["subtitles.cam",14],["suicidepics.com",14],["supertelevisionhd.com",14],["supexfeeds.com",14],["swzz.xyz",14],["sxnaar.com",14],["tabooporns.com",14],["taboosex.club",14],["tapeantiads.com",14],["tapeblocker.com",14],["tapenoads.com",14],["tapewithadblock.org",[14,177]],["teamos.xyz",14],["teen-wave.com",14],["teenporncrazy.com",14],["telegramgroups.xyz",14],["telenovelasweb.com",14],["tensei-shitara-slime-datta-ken.com",14],["tfp.is",14],["tgo-tv.co",[14,49]],["thaihotmodels.com",14],["theblueclit.com",14],["thebussybandit.com",14],["theicongenerator.com",14],["thelastdisaster.vip",14],["thepiratebay0.org",14],["thepiratebay10.info",14],["thesexcloud.com",14],["thothub.today",14],["tightsexteens.com",14],["tojav.net",14],["tokyoblog.tv",14],["tonnestreamz.xyz",14],["top16.net",14],["topvideosgay.com",14],["torrage.info",14],["torrents.vip",14],["torrsexvid.com",14],["tpb-proxy.xyz",14],["trannyteca.com",14],["trendytalker.com",14],["tumanga.net",14],["turbogvideos.com",14],["turbovid.me",14],["turkishseriestv.org",14],["turksub24.net",14],["tutele.sx",14],["tutelehd3.xyz",14],["tvglobe.me",14],["tvpclive.com",14],["tvs-widget.com",14],["tvseries.video",14],["ucptt.com",14],["ufaucet.online",14],["ufcfight.online",14],["uhdgames.xyz",14],["ultrahorny.com",14],["ultraten.net",14],["unblockweb.me",14],["underhentai.net",14],["uniqueten.net",14],["upbaam.com",14],["upstream.to",14],["valeriabelen.com",14],["verdragonball.online",14],["vfxmed.com",14],["video.az",14],["videostreaming.rocks",14],["videowood.tv",14],["vidorg.net",14],["vidtapes.com",14],["vidz7.com",14],["vikistream.com",14],["vikv.net",14],["virpe.cc",14],["visifilmai.org",14],["viveseries.com",14],["vladrustov.sx",14],["volokit2.com",14],["vstorrent.org",14],["w-hentai.com",14],["watchaccordingtojimonline.com",14],["watchbrooklynnine-nine.com",14],["watchdowntonabbeyonline.com",14],["watchelementaryonline.com",14],["watcheronline.net",14],["watchgleeonline.com",14],["watchhowimetyourmother.online",14],["watchkobestreams.info",14],["watchlostonline.net",14],["watchlouieonline.com",14],["watchjavidol.com",14],["watchmadmenonline.com",14],["watchmonkonline.com",14],["watchonceuponatimeonline.com",14],["watchparksandrecreation.net",14],["watchprettylittleliarsonline.com",14],["watchrulesofengagementonline.com",14],["watchthekingofqueens.com",14],["watchthemiddleonline.com",14],["watchtvchh.xyz",14],["webcamrips.com",14],["wickedspot.org",14],["wincest.xyz",14],["witanime.best",14],["wolverdon.fun",14],["wolverdonx.com",14],["wordcounter.icu",14],["worldcupstream.pm",14],["worldmovies.store",14],["worldstreams.click",14],["wpdeployit.com",14],["wqstreams.tk",14],["wwwsct.com",14],["xanimeporn.com",14],["xblog.tv",14],["xn--verseriesespaollatino-obc.online",14],["xn--xvideos-espaol-1nb.com",14],["xpornium.net",14],["xsober.com",14],["xvip.lat",14],["xxgasm.com",14],["xxvideoss.org",14],["xxx18.uno",14],["xxxdominicana.com",14],["xxxfree.watch",14],["xxxmax.net",14],["xxxwebdlxxx.top",14],["xxxxvideo.uno",14],["y2b.wiki",14],["yabai.si",14],["yadixv.com",14],["yayanimes.net",14],["yeshd.net",14],["yodbox.com",14],["youjax.com",14],["youpits.xyz",14],["yourdailypornvideos.ws",14],["yourupload.com",14],["ytstv.me",14],["ytstvmovies.co",14],["ytstvmovies.xyz",14],["ytsyify.co",14],["ytsyifymovie.com",14],["zerion.cc",14],["zerocoin.top",14],["zitss.xyz",14],["zpaste.net",14],["zplayer.live",14],["faucet.ovh",15],["oko.sh",[16,70,71]],["variety.com",17],["washingtonpost.com",18],["bigbtc.win",19],["cryptofun.space",19],["gosexpod.com",20],["sexo5k.com",21],["truyen-hentai.com",21],["theshedend.com",23],["zeroupload.com",23],["securenetsystems.net",23],["miniwebtool.com",23],["bchtechnologies.com",23],["spiegel.de",24],["hausbau-forum.de",25],["kiemlua.com",25],["appnee.com",26],["d0000d.com",27],["d000d.com",27],["d0o0d.com",27],["do0od.com",27],["doods.pro",27],["ds2play.com",27],["ds2video.com",27],["apkmirror.com",28],["musichq.pe",30],["sekaikomik.bio",30],["hiraethtranslation.com",31],["onlyfaucet.com",32],["livecamrips.com",33],["smutty.com",33],["freeadultcomix.com",33],["down.dataaps.com",33],["filmweb.pl",33],["visionpapers.org",34],["fdownloader.net",35],["thehackernews.com",36],["mielec.pl",37],["camsrip.com",38],["beatsnoop.com",38],["fetchpik.com",38],["hackerranksolution.in",38],["treasl.com",39],["mrbenne.com",40],["cnpics.org",41],["ovabee.com",41],["porn4f.com",41],["cnxx.me",41],["ai18.pics",41],["cuervotv.me",[42,49]],["aliezstream.pro",42],["daddy-stream.xyz",42],["instream.pro",42],["mylivestream.pro",42],["powerover.online",42],["sportea.link",42],["sportsurge.stream",42],["ufckhabib.com",42],["ustream.pro",42],["papa4k.online",42],["streamhd247.info",42],["nowlive1.me",42],["buzter.xyz",42],["gamehdlive.online",42],["hdfungamezz.xyz",42],["kingstreamz.lol",42],["masterpro.club",42],["papahd.co",42],["sportos.co",42],["valhallas.click",42],["andhrafriends.com",43],["freeroms.com",43],["soap2day-online.com",43],["sportsonline.si",44],["fiuxy2.co",45],["animeunity.to",46],["auto-crypto.click",47],["iconicblogger.com",47],["tokopedia.com",48],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",49],["6movies.net",49],["adsh.cc",49],["afilmyhouse.blogspot.com",49],["ak.sv",49],["animesultra.com",49],["api.webs.moe",49],["apkmody.io",49],["attvideo.com",49],["backfirstwo.site",[49,146]],["crazyblog.in",49],["divicast.com",49],["dlhd.so",49],["embed.meomeo.pw",49],["filmeserialeonline.org",49],["flexyhit.com",49],["foreverwallpapers.com",49],["french-streams.cc",49],["fslinks.org",49],["fstream365.com",49],["hdtoday.to",49],["hinatasoul.com",49],["igg-games.com",49],["infinityscans.net",49],["infinityscans.xyz",49],["membed.net",49],["mgnetu.com",49],["movie4kto.net",49],["mp3juice.info",49],["mp3juices.cc",49],["myflixerz.to",49],["nowmetv.net",49],["nowsportstv.com",49],["nxbrew.com",49],["oii.io",49],["paidshitforfree.com",49],["pepperlive.info",49],["playertv.net",49],["putlocker68.com",49],["roystream.com",49],["rssing.com",49],["s.to",49],["share.filesh.site",49],["sharkfish.xyz",49],["skidrowcodex.net",49],["sports-stream.site",49],["stream4free.live",49],["streamed.su",49],["tamilmobilemovies.in",49],["tapeadsenjoyer.com",49],["thewatchseries.live",49],["tnmusic.in",49],["travelplanspro.com",49],["tusfiles.com",49],["tutlehd4.com",49],["twstalker.com",49],["vid-guard.com",49],["vidco.pro",49],["video-leech.xyz",49],["vidsaver.net",49],["vidspeeds.com",49],["viralitytoday.com",49],["voiranime.stream",49],["watchdoctorwhoonline.com",49],["watchserie.online",49],["webhostingpost.com",49],["woxikon.in",49],["www-y2mate.com",49],["ylink.bid",49],["ytix.xyz",49],["remixsearch.net",50],["remixsearch.es",50],["onlineweb.tools",50],["sharing.wtf",50],["xnxxcom.xyz",51],["al.com",[52,134]],["cleveland.com",[52,134]],["mlive.com",[52,134]],["nj.com",[52,134]],["oregonlive.com",[52,134]],["cheatsheet.com",52],["pwinsider.com",52],["baeldung.com",52],["tvline.com",[53,134]],["moneycontrol.com",54],["repack-games.com",55],["pawastreams.info",55],["moonplusnews.com",[55,57]],["loanoffering.in",[55,57]],["truyentranhfull.net",55],["hesgoal-tv.io",56],["hesgoal-vip.io",56],["intro-hd.net",56],["monacomatin.mc",56],["nodo313.net",56],["kenzo-flowertag.com",58],["mdn.lol",58],["btcbitco.in",59],["btcsatoshi.net",59],["cempakajaya.com",59],["crypto4yu.com",59],["gainl.ink",59],["manofadan.com",59],["readbitcoin.org",59],["wiour.com",59],["kienthucrangmieng.com",59],["tremamnon.com",59],["btc25.org",59],["tron-free.com",59],["bitsmagic.fun",59],["ourcoincash.xyz",59],["hynews.biz",59],["blog.cryptowidgets.net",60],["blog.insurancegold.in",60],["blog.wiki-topia.com",60],["blog.coinsvalue.net",60],["blog.cookinguide.net",60],["blog.freeoseocheck.com",60],["aylink.co",61],["sugarona.com",62],["nishankhatri.xyz",62],["cety.app",63],["exego.app",63],["cutlink.net",63],["cutsy.net",63],["cutyurls.com",63],["cutty.app",63],["cutnet.net",63],["javhdo.net",63],["tinys.click",64],["answerpython.com",64],["gsm-solution.com",64],["h-donghua.com",64],["hindisubbedacademy.com",64],["pkgovjobz.com",64],["ripexbooster.xyz",64],["serial4.com",64],["serial412.blogspot.com",64],["sigmalinks.in",64],["tutorgaming.com",64],["everydaytechvams.com",64],["dipsnp.com",64],["cccam4sat.com",64],["aiimgvlog.fun",65],["appsbull.com",66],["diudemy.com",66],["maqal360.com",66],["mphealth.online",66],["makefreecallsonline.com",66],["androjungle.com",66],["bookszone.in",66],["drakescans.com",66],["shortix.co",66],["msonglyrics.com",66],["app-sorteos.com",66],["bokugents.com",66],["client.pylexnodes.net",66],["btvplus.bg",66],["blog24.me",[67,68]],["coingraph.us",69],["impact24.us",69],["tvi.la",[70,71]],["iir.la",[70,71]],["tii.la",[70,71]],["ckk.ai",[70,71]],["oei.la",[70,71]],["lnbz.la",[70,71]],["atglinks.com",72],["kbconlinegame.com",73],["hamrojaagir.com",73],["odijob.com",73],["blogesque.net",74],["bookbucketlyst.com",74],["explorosity.net",74],["optimizepics.com",74],["torovalley.net",74],["simana.online",75],["fooak.com",75],["unblocked.id",77],["listendata.com",78],["7xm.xyz",78],["fastupload.io",78],["azmath.info",78],["wouterplanet.com",79],["androidacy.com",80],["pillowcase.su",81],["veryfreeporn.com",82],["theporngod.com",82],["besthdgayporn.com",83],["drivenime.com",83],["javup.org",83],["shemaleup.net",83],["austiblox.net",84],["btcbunch.com",85],["teachoo.com",86],["interfootball.co.kr",87],["a-ha.io",87],["cboard.net",87],["jjang0u.com",87],["joongdo.co.kr",87],["viva100.com",87],["thephoblographer.com",87],["gamingdeputy.com",87],["thesaurus.net",87],["alle-tests.nl",87],["maketecheasier.com",87],["automobile-catalog.com",87],["allthekingz.com",87],["motorbikecatalog.com",87],["tweaksforgeeks.com",87],["m.inven.co.kr",87],["meconomynews.com",87],["brandbrief.co.kr",87],["motorgraph.com",87],["allthetests.com",88],["javatpoint.com",88],["globalrph.com",88],["carscoops.com",88],["indiatimes.com",88],["issuya.com",88],["topstarnews.net",88],["islamicfinder.org",88],["secure-signup.net",88],["worldhistory.org",89],["bitcotasks.com",90],["udvl.com",91],["www.chip.de",92],["topsporter.net",93],["sportshub.to",93],["streamcheck.link",94],["unofficialtwrp.com",95],["bitcosite.com",96],["bitzite.com",96],["easymc.io",97],["yunjiema.top",97],["hacoos.com",99],["bondagevalley.cc",100],["zefoy.com",101],["vidello.net",102],["resizer.myct.jp",103],["gametohkenranbu.sakuraweb.com",104],["jisakuhibi.jp",105],["rank1-media.com",105],["lifematome.blog",106],["fm.sekkaku.net",107],["free-avx.jp",108],["dvdrev.com",109],["betweenjpandkr.blog",110],["nft-media.net",111],["ghacks.net",112],["leak.sx",113],["paste.bin.sx",113],["pornleaks.in",113],["songspk2.info",114],["zoechip.com",115],["nectareousoverelate.com",117],["khoaiphim.com",118],["haafedk2.com",119],["fordownloader.com",119],["jovemnerd.com.br",120],["nicomanga.com",121],["totalcsgo.com",122],["vivamax.asia",123],["manysex.com",124],["gaminginfos.com",125],["tinxahoivn.com",126],["forums-fastunlock.com",127],["automoto.it",128],["codelivly.com",129],["ophim.vip",130],["touguatize.monster",131],["novelhall.com",132],["hes-goal.net",133],["abc17news.com",134],["adoredbyalex.com",134],["agrodigital.com",134],["aliontherunblog.com",134],["allaboutthetea.com",134],["allmovie.com",134],["allmusic.com",134],["allthingsthrifty.com",134],["amessagewithabottle.com",134],["androidpolice.com",134],["antyradio.pl",134],["artforum.com",134],["artnews.com",134],["awkward.com",134],["awkwardmom.com",134],["bailiwickexpress.com",134],["barnsleychronicle.com",134],["becomingpeculiar.com",134],["bethcakes.com",134],["betweenenglandandiowa.com",134],["blogher.com",134],["bluegraygal.com",134],["briefeguru.de",134],["carmagazine.co.uk",134],["cattime.com",134],["cbr.com",134],["celiacandthebeast.com",134],["chaptercheats.com",134],["collider.com",134],["comingsoon.net",134],["commercialobserver.com",134],["competentedigitale.ro",134],["crafty.house",134],["dailyvoice.com",134],["decider.com",134],["didyouknowfacts.com",134],["dogtime.com",134],["dualshockers.com",134],["dustyoldthing.com",134],["faithhub.net",134],["femestella.com",134],["footwearnews.com",134],["freeconvert.com",134],["frogsandsnailsandpuppydogtail.com",134],["fsm-media.com",134],["funtasticlife.com",134],["fwmadebycarli.com",134],["gamerant.com",134],["gfinityesports.com",134],["givemesport.com",134],["gulflive.com",134],["helloflo.com",134],["homeglowdesign.com",134],["honeygirlsworld.com",134],["hotcars.com",134],["howtogeek.com",134],["insider-gaming.com",134],["insurancejournal.com",134],["jasminemaria.com",134],["kion546.com",134],["lehighvalleylive.com",134],["lettyskitchen.com",134],["lifeinleggings.com",134],["liveandletsfly.com",134],["lizzieinlace.com",134],["localnews8.com",134],["lonestarlive.com",134],["madeeveryday.com",134],["maidenhead-advertiser.co.uk",134],["makeuseof.com",134],["mardomreport.net",134],["melangery.com",134],["milestomemories.com",134],["modernmom.com",134],["momtastic.com",134],["mostlymorgan.com",134],["motherwellmag.com",134],["movieweb.com",134],["muddybootsanddiamonds.com",134],["musicfeeds.com.au",134],["mylifefromhome.com",134],["nationalreview.com",134],["neoskosmos.com",134],["nordot.app",134],["nothingbutnewcastle.com",134],["nsjonline.com",134],["oakvillenews.org",134],["observer.com",134],["ourlittlesliceofheaven.com",134],["palachinkablog.com",134],["pinkonthecheek.com",134],["politicususa.com",134],["predic.ro",134],["puckermom.com",134],["qtoptens.com",134],["realgm.com",134],["reelmama.com",134],["robbreport.com",134],["royalmailchat.co.uk",134],["samchui.com",134],["sandrarose.com",134],["screenrant.com",134],["sheknows.com",134],["sherdog.com",134],["sidereel.com",134],["silive.com",134],["simpleflying.com",134],["sloughexpress.co.uk",134],["spacenews.com",134],["sportsgamblingpodcast.com",134],["spotofteadesigns.com",134],["stacysrandomthoughts.com",134],["ssnewstelegram.com",134],["superherohype.com",134],["tablelifeblog.com",134],["thebeautysection.com",134],["thecelticblog.com",134],["thecurvyfashionista.com",134],["thefashionspot.com",134],["thegamer.com",134],["thegamescabin.com",134],["thenerdyme.com",134],["thenonconsumeradvocate.com",134],["theprudentgarden.com",134],["thethings.com",134],["timesnews.net",134],["topspeed.com",134],["toyotaklub.org.pl",134],["travelingformiles.com",134],["tutsnode.org",134],["viralviralvideos.com",134],["wannacomewith.com",134],["wimp.com",134],["windsorexpress.co.uk",134],["woojr.com",134],["worldoftravelswithkids.com",134],["xda-developers.com",134],["masslive.com",[134,135]],["pagesix.com",[134,135]],["pennlive.com",[134,135]],["syracuse.com",[134,135]],["247sports.com",135],["cbsnews.com",135],["cbssports.com",135],["indiewire.com",135],["nypost.com",135],["bagi.co.in",136],["keran.co",136],["biblestudytools.com",137],["christianheadlines.com",137],["ibelieve.com",137],["kuponigo.com",138],["kimcilonly.site",139],["kimcilonly.link",139],["cryptoearns.com",140],["inxxx.com",141],["ipaspot.app",142],["embedwish.com",143],["filelions.live",143],["leakslove.net",143],["jenismac.com",144],["vxetable.cn",145],["jewelavid.com",146],["nizarstream.com",146],["snapwordz.com",147],["toolxox.com",147],["rl6mans.com",147],["idol69.net",147],["plumbersforums.net",148],["123movies57.online",149],["gulio.site",150],["mediaset.es",151],["izlekolik.net",152],["donghuaworld.com",153],["letsdopuzzles.com",154],["tainio-mania.online",155],["hes-goals.io",156],["pkbiosfix.com",156],["casi3.xyz",156],["rediff.com",157],["dzapk.com",158],["darknessporn.com",159],["familyporner.com",159],["freepublicporn.com",159],["pisshamster.com",159],["punishworld.com",159],["xanimu.com",159],["pig69.com",160],["cosplay18.pics",160],["eroticmoviesonline.me",161],["teleclub.xyz",162],["ecamrips.com",163],["showcamrips.com",163],["tucinehd.com",165],["9animetv.to",166],["qiwi.gg",167],["jornadaperfecta.com",168],["loseart.com",169],["sousou-no-frieren.com",170],["unite-guide.com",171],["thebullspen.com",172],["botcomics.com",173],["cefirates.com",173],["chandlerorchards.com",173],["comicleaks.com",173],["marketdata.app",173],["monumentmetals.com",173],["tapmyback.com",173],["ping.gg",173],["revistaferramental.com.br",173],["hawpar.com",173],["alpacafinance.org",[173,174]],["nookgaming.com",173],["enkeleksamen.no",173],["kvest.ee",173],["creatordrop.com",173],["panpots.com",173],["cybernetman.com",173],["bitdomain.biz",173],["gerardbosch.xyz",173],["fort-shop.kiev.ua",173],["accuretawealth.com",173],["resourceya.com",173],["tracktheta.com",173],["camberlion.com",173],["replai.io",173],["trybawaryjny.pl",173],["tt.live",174],["future-fortune.com",174],["abhijith.page",174],["madrigalmaps.com",174],["adventuretix.com",174],["bolighub.dk",174],["panprices.com",175],["intercity.technology",175],["freelancer.taxmachine.be",175],["adria.gg",175],["fjlaboratories.com",175],["emanualonline.com",175],["proboards.com",176],["winclassic.net",176],["financemonk.net",178],["client.falixnodes.net",179],["abema.tv",180]]);

const entitiesMap = new Map([["mixdrop",[3,14]],["wawacity",3],["pahe",[5,14]],["soap2day",5],["hqq",7],["waaw",7],["mhdsports",9],["mhdsportstv",9],["mhdtvsports",9],["mhdtvworld",9],["mhdtvmax",9],["mhdstream",9],["reset-scans",9],["poplinks",[9,66]],["pixhost",10],["viprow",[13,14,49]],["bluemediadownload",13],["bluemediafile",13],["bluemedialink",13],["bluemediastorage",13],["bluemediaurls",13],["urlbluemedia",13],["cloudvideotv",[13,49]],["vidsrc",[13,49]],["123-movies",14],["123movieshd",14],["123movieshub",14],["123moviesme",14],["1337x",[14,29]],["1stream",14],["1tamilmv",14],["2ddl",14],["2umovies",14],["3hiidude",14],["4stream",14],["5movies",14],["7hitmovies",14],["9xmovie",14],["9xlinks",14],["aagmaal",[14,49]],["adblockeronstape",14],["adblockeronstreamtape",14],["adblockplustape",14],["adblockstreamtape",14],["adblockstrtape",14],["adblockstrtech",14],["adblocktape",14],["adcorto",14],["alexsports",14],["alexsportss",14],["alexsportz",14],["animepahe",14],["animesanka",14],["animixplay",14],["aniplay",14],["antiadtape",14],["asianclub",14],["ask4movie",14],["atomixhq",[14,49]],["atomohd",14],["beinmatch",[14,22]],["bhaai",14],["buffstreams",14],["canalesportivo",14],["clickndownload",14],["clicknupload",14],["daddylive",[14,49]],["daddylivehd",[14,49]],["ddrmovies",14],["desiremovies",14],["devlib",14],["divxtotal",14],["divxtotal1",14],["dlhd",14],["dvdplay",[14,49]],["elixx",14],["enjoy4k",14],["estrenosflix",14],["estrenosflux",14],["estrenosgo",14],["f1stream",14],["fbstream",14],["file4go",14],["filmymeet",14],["filmyzilla",[14,49]],["findav",14],["findporn",14],["flixmaza",14],["flizmovies",14],["freetvsports",14],["fullymaza",14],["g3g",14],["gotxx",14],["grantorrent",14],["hdmoviesfair",[14,49]],["hdmoviesflix",14],["hiidudemoviez",14],["imgsen",14],["imgsto",14],["incest",14],["incestflix",14],["itopmusic",14],["javmost",14],["keeplinks",14],["keepvid",14],["keralahd",14],["khatrimazaful",14],["khatrimazafull",14],["leechall",14],["linkshorts",14],["mangovideo",14],["masaporn",14],["miniurl",14],["mirrorace",14],["mixdroop",14],["mkvcage",14],["mlbstream",14],["mlsbd",14],["mmsbee",14],["motogpstream",14],["movieplex",14],["movierulzlink",14],["movies123",14],["moviesflix",14],["moviesmeta",14],["moviessources",14],["moviesverse",14],["moviezwaphd",14],["mrunblock",14],["nbastream",14],["newmovierulz",14],["nflstream",14],["nhlstream",14],["noblocktape",14],["nocensor",14],["onlyfams",14],["ouo",14],["pctfenix",[14,49]],["pctnew",[14,49]],["peliculas24",14],["pelisplus",14],["piratebay",14],["plyjam",14],["plylive",14],["plyvdo",14],["pornhoarder",14],["prbay",14],["projectfreetv",14],["proxybit",14],["psarips",14],["racaty",14],["remaxhd",14],["rintor",14],["rnbxclusive",14],["rnbxclusive0",14],["rnbxclusive1",14],["rojadirecta",14],["rojadirectaenvivo",14],["rugbystreams",14],["sadisflix",14],["safetxt",14],["shadowrangers",14],["shahi4u",14],["shahid4u1",14],["shahid4uu",14],["shavetape",14],["shortearn",14],["shorten",14],["shorttey",14],["shortzzy",14],["skymovieshd",14],["socceronline",[14,49]],["softarchive",14],["sports-stream",14],["sshhaa",14],["stapadblockuser",14],["stape",14],["stapewithadblock",14],["starmusiq",14],["strcloud",14],["streamadblocker",[14,49]],["streamadblockplus",14],["streamcdn",14],["streamhub",14],["streamsport",14],["streamta",14],["streamtape",14],["streamtapeadblockuser",14],["strikeout",14],["strtape",14],["strtapeadblock",14],["strtapeadblocker",14],["strtapewithadblock",14],["strtpe",14],["swatchseries",14],["tabooflix",14],["tennisstreams",14],["themoviesflix",14],["thepiratebay",14],["thisav",14],["tmearn",14],["toonanime",14],["torlock",14],["tormalayalam",14],["torrentz2eu",14],["tutelehd",14],["tvply",14],["u4m",14],["ufcstream",14],["unblocknow",14],["uploadbuzz",14],["usagoals",14],["vexmoviex",14],["vidclouds",14],["vidlox",14],["vipbox",[14,49]],["vipboxtv",[14,49]],["vipleague",14],["watch-series",14],["watchseries",14],["xclusivejams",14],["xmoviesforyou",14],["youdbox",14],["ytmp3eu",14],["yts-subs",14],["yts",14],["zooqle",14],["dutchycorp",15],["dood",[27,49]],["doodstream",27],["dooood",[27,49]],["torrentdownload",30],["shrinke",33],["shrinkme",33],["daddylive1",42],["esportivos",42],["poscitechs",42],["bollyflix",42],["watchomovies",[43,49]],["123movies",49],["123moviesla",49],["123movieweb",49],["2embed",49],["720pstream",49],["9xmovies",49],["adshort",49],["allmovieshub",49],["asianplay",49],["atishmkv",49],["cricstream",49],["crictime",49],["databasegdriveplayer",49],["extramovies",49],["faselhd",49],["faselhds",49],["filemoon",49],["filmy",49],["filmyhit",49],["filmywap",49],["fmovies",49],["gdplayer",49],["gdriveplayer",49],["goku",49],["gomovies",49],["gowatchseries",49],["hdfungamezz",49],["hindilinks4u",49],["hurawatch",49],["jalshamoviezhd",49],["livecricket",49],["mhdsport",49],["mkvcinemas",49],["movies2watch",49],["moviespapa",49],["mp4moviez",49],["mydownloadtube",49],["nsw2u",49],["nuroflix",49],["o2tvseries",49],["o2tvseriesz",49],["pirlotv",49],["poscitech",49],["primewire",49],["redecanais",49],["serienstream",49],["sflix",49],["shahed4u",49],["shaheed4u",49],["speedostream",49],["sportcast",49],["sportskart",49],["streamingcommunity",49],["tamilarasan",49],["tamilfreemp3songs",49],["tamilprinthd",49],["torrentdosfilmes",49],["tubemate",49],["uploadrar",49],["uqload",49],["vidcloud9",49],["vido",49],["vidoo",49],["vudeo",49],["vumoo",49],["yesmovies",49],["mydverse",64],["stfly",74],["stly",74],["kickass",76],["cine-calidad",82],["teluguflix",98],["actvid",115],["lk21official",164],["nontondrama",164],["dropgalaxy",178]]);

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
                return { matchAll: true };
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
    safe.sendToLogger = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
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
try { hnParts.push(...document.location.hostname.split('.')); }
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
