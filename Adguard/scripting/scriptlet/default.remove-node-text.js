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

const argsList = [["script","DisplayAcceptableAdIfAdblocked"],["script","/==undefined.*body/"],["script","\"Anzeige\""],["script","Promise"],["script","Reflect"],["script","document.write"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","deblocker"],["script","exdynsrv"],["script","/adb/i"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/document\\.createElement|\\.banner-in/"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|adblock/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","Adblock"],["script","alert"],["script","/adblock|popunder/"],["script","document.createTextNode"],["script","style"],["script","Number.isSafeInteger"],["script","shown_at"],["script","/fetch|adb/i"],["script","window.open"],["script",";break;case $."],["script","zaraz"],["script","adblockimg"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","googlesyndication"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/pop1stp|detectAdBlock/"],["script","popundersPerIP"],["script","popunder"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","adserverDomain"],["script","Popup"],["script","catch"],["script","displayAdsV3"],["script",";}}};break;case $."],["script","adblocker"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/-Ads-close|preventDefault|ai-debug|b2a|split|reload/"],["script","ai_adb"],["script","/bypass.php"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","AdbModel"],["script","popup"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","adb_detected"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","openPopup"],["style","text-decoration"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","charCodeAt"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","KCgpPT57bGV0IGU"],["script","error-report.com"],["script","adShield"],["script","AdblockRegixFinder"],["script","serve"],["script","/\\.pop\\(\\); \\}|AdSlot created|Created AdSlot|\\.length % 2; \\}/"],["script","/ConsoleBan|alert|AdBlocker/"],["script","runPop"],["script","mdpDeblocker"],["script","alert","condition","adblock"],["script","adb"],["script","await fetch"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","zfgloaded"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/modal|popupads/"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","ad_block"],["script","app_checkext"],["script","clientHeight"],["script","/url_key|adHtml/"],["script","pop.target"],["script","/detectAdBlock|_0x|appelislekker|'\\/func'/"],["script","axios"],["script","ad block"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","AaDetector"],["script","AdBlock"],["script","Symbol.iterator"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","detectAdBlock"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","document.head.appendChild"],["script","adsPlay"],["script","Number"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","/adbl/i"],["script","detect"],["script","fetch"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","vglnk"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","_0x"],["script","NREUM"]];

const hostnamesMap = new Map([["alpin.de",0],["boersennews.de",0],["chefkoch.de",0],["chip.de",0],["clever-tanken.de",0],["desired.de",0],["donnerwetter.de",0],["fanfiktion.de",0],["focus.de",0],["formel1.de",0],["frustfrei-lernen.de",0],["gewinnspiele.tv",0],["giga.de",0],["gut-erklaert.de",0],["kino.de",0],["messen.de",0],["nickles.de",0],["nordbayern.de",0],["spielfilm.de",0],["teltarif.de",0],["unsere-helden.com",0],["weltfussball.at",0],["watson.de",0],["moviepilot.de",[0,3]],["aupetitparieur.com",1],["allthingsvegas.com",1],["100percentfedup.com",1],["beforeitsnews.com",1],["concomber.com",1],["conservativebrief.com",1],["conservativefiringline.com",1],["dailylol.com",1],["funnyand.com",1],["letocard.fr",1],["mamieastuce.com",1],["meilleurpronostic.fr",1],["patriotnationpress.com",1],["toptenz.net",1],["vitamiiin.com",1],["writerscafe.org",1],["populist.press",1],["dailytruthreport.com",1],["livinggospeldaily.com",1],["first-names-meanings.com",1],["welovetrump.com",1],["thehayride.com",1],["thelibertydaily.com",1],["thepoke.co.uk",1],["thepolitistick.com",1],["theblacksphere.net",1],["shark-tank.com",1],["naturalblaze.com",1],["greatamericanrepublic.com",1],["dailysurge.com",1],["truthlion.com",1],["flagandcross.com",1],["westword.com",1],["republicbrief.com",1],["freedomfirstnetwork.com",1],["phoenixnewtimes.com",1],["designbump.com",1],["clashdaily.com",1],["madworldnews.com",1],["reviveusa.com",1],["sonsoflibertymedia.com",1],["thedesigninspiration.com",1],["videogamesblogger.com",1],["protrumpnews.com",1],["thepalmierireport.com",1],["kresy.pl",1],["thepatriotjournal.com",1],["gellerreport.com",1],["thegatewaypundit.com",1],["wltreport.com",1],["miaminewtimes.com",1],["politicalsignal.com",1],["rightwingnews.com",1],["bigleaguepolitics.com",1],["comicallyincorrect.com",1],["web.de",2],["yts.mx",5],["upornia.com",7],["pinsystem.co.uk",8],["elrellano.com",8],["tinyppt.com",8],["bharathwick.com",8],["descargaspcpro.net",8],["dx-tv.com",8],["rt3dmodels.com",8],["plc4me.com",8],["blisseyhusbands.com",8],["madaradex.org",8],["trigonevo.com",8],["franceprefecture.fr",8],["uiiumovies.net",8],["jazbaat.in",8],["aipebel.com",8],["veganab.co",8],["camdigest.com",8],["learnmany.in",8],["amanguides.com",[8,59]],["highkeyfinance.com",[8,59]],["appkamods.com",8],["techacode.com",8],["djqunjab.in",8],["downfile.site",8],["expertvn.com",8],["trangchu.news",8],["3dmodelshare.org",8],["nulleb.com",8],["asiaon.top",8],["coursesghar.com",8],["thecustomrom.com",8],["snlookup.com",8],["bingotingo.com",8],["ghior.com",8],["3dmili.com",8],["karanpc.com",8],["plc247.com",8],["hiraethtranslation.com",8],["apkdelisi.net",8],["javindo.eu.org",8],["chindohot.site",8],["freepasses.org",8],["tomarnarede.pt",8],["basketballbuzz.ca",8],["dribbblegraphics.com",8],["kemiox.com",8],["checkersmenu.us",8],["teksnologi.com",8],["dollareuro.live",8],["eporner.com",10],["kisscartoon.se",10],["kc.linksgen.com",10],["germancarforum.com",11],["innateblogger.com",11],["cybercityhelp.in",11],["streamnoads.com",[12,13,50]],["bowfile.com",12],["cloudvideo.tv",[12,50]],["coloredmanga.com",12],["embedstream.me",[12,13,50]],["exeo.app",12],["hiphopa.net",[12,13]],["megaup.net",12],["tv247.us",[12,13]],["uploadhaven.com",12],["userscloud.com",[12,50]],["mdfx9dc8n.net",13],["mdzsmutpcvykb.net",13],["mixdrop21.net",13],["mixdropjmk.pw",13],["y2tube.pro",13],["123movies4u.site",13],["1337xporn.com",13],["141jav.com",13],["1bit.space",13],["1bitspace.com",13],["38dh2.top",13],["3dporndude.com",13],["4archive.org",13],["4horlover.com",13],["560pmovie.com",13],["60fps.xyz",13],["85tube.com",13],["85videos.com",13],["8xlinks.click",13],["a2zcrackworld.com",13],["aazzz.xyz",13],["acefile.co",13],["actusports.eu",13],["adclickersbot.com",13],["adricami.com",13],["adslink.pw",13],["adultstvlive.com",13],["adz7short.space",13],["aeblender.com",13],["ahdafnews.blogspot.com",13],["ak47sports.com",13],["akuma.moe",13],["allplayer.tk",13],["allstreaming.online",13],["amadoras.cf",13],["amadorasdanet.shop",13],["amateurblog.tv",13],["androidadult.com",13],["anhsexjav.xyz",13],["anidl.org",13],["anime-loads.org",13],["animeblkom.net",13],["animefire.plus",13],["animelek.me",13],["animespire.net",13],["animestotais.xyz",13],["animeyt.es",13],["anroll.net",13],["anymoviess.xyz",13],["aotonline.org",13],["asenshu.com",13],["asialiveaction.com",13],["asianclipdedhd.net",13],["askim-bg.com",13],["asumsikedaishop.com",13],["avcrempie.com",13],["avseesee.com",13],["gettapeads.com",13],["backfirstwo.com",13],["bajarjuegospcgratis.com",13],["balkanportal.net",13],["balkanteka.net",13],["bdnewszh.com",[13,50]],["belowporn.com",13],["bestclaimtrx.xyz",13],["bestgirlsexy.com",13],["bestnhl.com",13],["bestporn4free.com",13],["bestporncomix.com",13],["bet36.es",13],["bikinitryon.net",13],["birdurls.com",13],["bitsearch.to",13],["blackcockadventure.com",13],["blackcockchurch.org",13],["blackporncrazy.com",13],["blizzboygames.net",13],["blizzpaste.com",13],["blkom.com",13],["blog-peliculas.com",13],["blogtrabalhista.com",13],["blurayufr.xyz",13],["bobsvagene.club",13],["bolly4umovies.click",13],["bonusharian.pro",13],["brilian-news.id",13],["brupload.net",13],["bucitana.com",13],["cablegratis.online",13],["camchickscaps.com",13],["camgirlcum.com",13],["camgirls.casa",13],["cashurl.in",13],["castingx.net",13],["ccurl.net",[13,50]],["celebrity-leaks.net",13],["cgpelis.net",13],["charexempire.com",13],["clasico.tv",13],["clik.pw",13],["coin-free.com",[13,56]],["coins100s.fun",13],["comicsmanics.com",13],["compucalitv.com",13],["coolcast2.com",13],["cosplaytab.com",13],["countylocalnews.com",13],["cpmlink.net",13],["crackstreamshd.click",13],["crespomods.com",13],["crisanimex.com",13],["crunchyscan.fr",13],["cuevana3.fan",13],["cuevana3hd.com",13],["cumception.com",13],["curvaweb.com",13],["cutpaid.com",13],["cypherscans.xyz",[13,50]],["datawav.club",13],["daughtertraining.com",13],["deepgoretube.site",13],["deltabit.co",13],["depvailon.com",13],["derleta.com",13],["desivdo.com",13],["desixx.net",13],["detikkebumen.com",13],["deutschepornos.me",13],["diasoft.xyz",13],["directupload.net",13],["diskusscan.com",13],["dixva.com",13],["doctormalay.com",13],["dofusports.xyz",13],["dogemate.com",13],["doods.cam",13],["doodskin.lat",13],["downloadrips.com",13],["downvod.com",13],["dphunters.mom",13],["dragontranslation.com",13],["duddes.xyz",13],["dvdfullestrenos.com",13],["easylinks.in",13],["ebookbb.com",13],["ebookhunter.net",13],["egyanime.com",13],["egygost.com",13],["egyshare.cc",13],["ekasiwap.com",13],["electro-torrent.pl",13],["elil.cc",13],["embed4u.xyz",13],["eplayer.click",13],["erovoice.us",13],["eroxxx.us",13],["estrenosdoramas.net",13],["everia.club",13],["everythinginherenet.blogspot.com",13],["extrafreetv.com",13],["extremotvplay.com",13],["fapinporn.com",13],["fapptime.com",13],["fashionblog.tv",13],["fastreams.live",13],["faucethero.com",13],["fembed.com",13],["femdom-joi.com",13],["fileone.tv",13],["film1k.com",13],["filmeonline2023.net",13],["filmesonlinex.org",13],["filmesonlinexhd.biz",[13,50]],["filmovitica.com",13],["filmymaza.blogspot.com",13],["filthy.family",13],["firstmovies.to",13],["fixfinder.click",13],["flostreams.xyz",13],["flyfaucet.com",13],["footyhunter.lol",13],["footyhunter3.xyz",[13,50]],["forex-golds.com",13],["forex-trnd.com",13],["forumchat.club",13],["forumlovers.club",13],["freemoviesonline.biz",13],["freeomovie.co.in",13],["freeomovie.to",13],["freeporncomic.net",13],["freepornhdonlinegay.com",13],["freeproxy.io",13],["freeuse.me",13],["freeusexporn.com",13],["fsicomics.com",13],["gambarbogel.xyz",13],["gamepcfull.com",13],["gameronix.com",13],["gamesfullx.com",13],["gameshdlive.net",13],["gameshdlive.xyz",13],["gamesmountain.com",13],["gamesrepacks.com",13],["gamingguru.fr",13],["gamovideo.com",13],["garota.cf",13],["gaydelicious.com",13],["gaypornmasters.com",13],["gaysex69.net",13],["gemstreams.com",13],["get-to.link",13],["girlscanner.org",13],["giurgiuveanul.ro",13],["gledajcrtace.xyz",13],["gocast2.com",13],["gomo.to",13],["gostosa.cf",13],["gtlink.co",13],["gwiazdypornosow.pl",13],["haho.moe",13],["hatsukimanga.com",13],["hayhd.net",13],["hdsaprevodom.com",13],["hdstreamss.club",13],["hentais.tube",13],["hentaistream.co",13],["hentaitk.net",13],["hentaitube.online",13],["hentaiworld.tv",13],["hesgoal.tv",13],["hexupload.net",13],["hhkungfu.tv",13],["highlanderhelp.com",13],["hindimean.com",13],["hindimovies.to",[13,50]],["hiperdex.com",13],["hispasexy.org",13],["hitprn.com",13],["hoca4u.com",13],["hollymoviehd.cc",13],["hoodsite.com",13],["hopepaste.download",13],["hornylips.com",13],["hotgranny.live",13],["hotmama.live",13],["hqcelebcorner.net",13],["huren.best",13],["hwnaturkya.com",[13,50]],["hxfile.co",[13,50]],["igfap.com",13],["ihdstreams.xyz",13],["iklandb.com",13],["illink.net",13],["imgkings.com",13],["imgsex.xyz",13],["imx.to",13],["influencersgonewild.org",13],["infosgj.free.fr",13],["investnewsbrazil.com",13],["itdmusics.com",13],["itsuseful.site",13],["itunesfre.com",13],["iwatchfriendsonline.net",[13,111]],["jackstreams.com",13],["jatimupdate24.com",13],["jav-fun.cc",13],["jav-scvp.com",13],["javcl.com",13],["javf.net",13],["javhay.net",13],["javhoho.com",13],["javhun.com",13],["javleak.com",13],["javporn.best",13],["javsex.to",13],["javtiful.com",13],["jimdofree.com",13],["jiofiles.org",13],["jorpetz.com",13],["journalyc.online",13],["jp-films.com",13],["jpop80ss3.blogspot.com",13],["jpopsingles.eu",13],["kantotflix.net",13],["kantotinyo.com",13],["kaoskrew.org",13],["kaplog.com",13],["keralatvbox.com",13],["kickassanimes.io",13],["kimochi.info",13],["kimochi.tv",13],["kinemania.tv",13],["konstantinova.net",13],["koora-online.live",13],["kunmanga.com",13],["kutmoney.com",13],["kwithsub.com",13],["ladangreceh.xyz",13],["lat69.me",13],["latinblog.tv",13],["latinomegahd.net",13],["lazyfaucet.com",13],["leechpremium.link",13],["legendas.dev",13],["legendei.net",13],["lightdlmovies.blogspot.com",13],["lighterlegend.com",13],["linclik.com",13],["linkebr.com",13],["linkrex.net",13],["links.worldfree4u-lol.online",13],["linksfy.co",13],["lody.ink",13],["lovesomecommunity.com",13],["lulustream.com",[13,50]],["luluvdo.com",[13,50]],["luzcameraeacao.shop",13],["manga-oni.com",13],["mangaboat.com",13],["mangagenki.me",13],["mangahere.onl",13],["mangaweb.xyz",13],["mangoporn.net",13],["manhwahentai.me",13],["masahub.com",13],["masahub.net",13],["maturegrannyfuck.com",13],["mdy48tn97.com",13],["mediapemersatubangsa.com",13],["mega-mkv.com",13],["megapastes.com",13],["megapornpics.com",13],["messitv.net",13],["meusanimes.net",13],["milfmoza.com",13],["milfzr.com",13],["millionscast.com",13],["mimaletamusical.blogspot.com",13],["mitly.us",13],["mkv-pastes.com",13],["modb.xyz",13],["monaskuliner.ac.id",13],["moredesi.com",13],["movgotv.net",13],["movi.pk",13],["movierr.online",13],["movieswbb.com",13],["moviewatch.com.pk",13],["mp4upload.com",13],["mrskin.live",13],["multicanaistv.com",13],["mundowuxia.com",13],["myeasymusic.ir",13],["myonvideo.com",13],["myyouporn.com",13],["narutoget.info",13],["naughtypiss.com",13],["nerdiess.com",13],["new-fs.eu",13],["newtorrentgame.com",13],["nflstreams.me",13],["niaomea.me",[13,50]],["nicekkk.com",13],["nicesss.com",13],["nlegs.com",13],["nolive.me",[13,50]],["nopay.info",13],["nopay2.info",[13,151]],["notformembersonly.com",13],["novamovie.net",13],["novelpdf.xyz",13],["novelssites.com",[13,50]],["novelup.top",13],["nsfwr34.com",13],["nu6i-bg-net.com",13],["nudebabesin3d.com",13],["nukedfans.com",13],["nuoga.eu",13],["nzbstars.com",13],["ohjav.com",13],["ojearnovelas.com",13],["okanime.xyz",13],["olarixas.xyz",13],["oldbox.cloud",13],["olweb.tv",13],["olympicstreams.me",13],["on9.stream",13],["oncast.xyz",13],["onepiece-mangaonline.com",13],["onifile.com",13],["onionstream.live",13],["onlinesaprevodom.net",13],["onlyfullporn.video",13],["onplustv.live",13],["originporn.com",13],["ovagames.com",13],["ovamusic.com",13],["owllink.net",13],["packsporn.com",13],["pahaplayers.click",13],["palimas.org",13],["pandafiles.com",13],["papahd.club",13],["papahd1.xyz",13],["password69.com",13],["pastemytxt.com",13],["payskip.org",13],["peeplink.in",13],["peliculasmx.net",13],["pervertgirlsvideos.com",13],["pervyvideos.com",13],["phim12h.com",13],["picdollar.com",13],["pickteenz.com",13],["pics4you.net",13],["picsxxxporn.com",13],["pinayscandalz.com",13],["pinkueiga.net",13],["piratefast.xyz",13],["piratehaven.xyz",13],["pirateiro.com",13],["pirlotvonline.org",13],["playtube.co.za",13],["plugintorrent.com",13],["pmvzone.com",13],["porndish.com",13],["pornez.net",13],["pornfetishbdsm.com",13],["pornfits.com",13],["pornhd720p.com",13],["pornobr.club",13],["pornobr.ninja",13],["pornodominicano.net",13],["pornofaps.com",13],["pornoflux.com",13],["pornotorrent.com.br",13],["pornredit.com",13],["pornstarsyfamosas.es",13],["pornstreams.co",13],["porntn.com",13],["pornxbit.com",13],["pornxday.com",13],["portaldasnovinhas.shop",13],["portugues-fcr.blogspot.com",13],["poscishd.online",13],["poscitesch.com",[13,50]],["poseyoung.com",13],["pover.org",13],["proxyninja.org",13],["pubfilmz.com",13],["publicsexamateurs.com",13],["punanihub.com",13],["putlocker5movies.org",13],["pxxbay.com",13],["r18.best",13],["ragnaru.net",13],["rapbeh.net",13],["rapelust.com",13],["rapload.org",13],["read-onepiece.net",13],["retro-fucking.com",13],["retrotv.org",13],["robaldowns.com",13],["rockdilla.com",13],["rojadirectatvenvivo.com",13],["rojitadirecta.blogspot.com",13],["romancetv.site",13],["rule34.club",13],["rule34hentai.net",13],["rumahbokep-id.com",13],["safego.cc",13],["sakurafile.com",13],["satoshi-win.xyz",13],["scat.gold",13],["scatfap.com",13],["scatkings.com",13],["scnlog.me",13],["scripts-webmasters.net",13],["serie-turche.com",13],["serijefilmovi.com",13],["sexcomics.me",13],["sexdicted.com",13],["sexgay18.com",13],["sexofilm.co",13],["sextgem.com",13],["sextubebbw.com",13],["sgpics.net",13],["shadowrangers.live",13],["shahee4u.cam",13],["shahiid-anime.net",13],["shemale6.com",13],["shinden.pl",13],["short.es",13],["showmanga.blog.fc2.com",13],["shrt10.com",13],["shurt.pw",13],["sideplusleaks.net",13],["silverblog.tv",13],["silverpic.com",13],["sinhalasub.life",13],["sinsitio.site",13],["sinvida.me",13],["skidrowcpy.com",13],["skidrowfull.com",13],["skidrowreloaded.com",13],["slut.mom",13],["smallencode.me",13],["smoner.com",13],["smplace.com",13],["soccerinhd.com",13],["socceron.name",13],["softairbay.com",13],["sokobj.com",13],["songsio.com",13],["souexatasmais.com",13],["sportbar.live",13],["sportea.online",13],["sportskart.xyz",13],["sportstream1.cfd",13],["sporttuna.site",13],["srt.am",13],["srts.me",13],["stakes100.xyz",13],["stbemuiptv.com",13],["stockingfetishvideo.com",13],["stream.crichd.vip",13],["stream.lc",13],["stream25.xyz",13],["streambee.to",13],["streamcenter.pro",13],["streamers.watch",13],["streamgo.to",13],["streamkiste.tv",13],["streamoporn.xyz",13],["streamoupload.xyz",13],["streamservicehd.click",13],["streamvid.net",[13,21]],["subtitleporn.com",13],["subtitles.cam",13],["suicidepics.com",13],["supertelevisionhd.com",13],["supexfeeds.com",13],["swzz.xyz",13],["sxnaar.com",13],["tabooporns.com",13],["taboosex.club",13],["tapeantiads.com",13],["tapeblocker.com",13],["tapenoads.com",13],["tapewithadblock.org",[13,172]],["teamos.xyz",13],["teen-wave.com",13],["teenporncrazy.com",13],["telegramgroups.xyz",13],["telenovelasweb.com",13],["tensei-shitara-slime-datta-ken.com",13],["tfp.is",13],["tgo-tv.co",[13,50]],["thaihotmodels.com",13],["theblueclit.com",13],["thebussybandit.com",13],["theicongenerator.com",13],["thelastdisaster.vip",13],["thepiratebay0.org",13],["thepiratebay10.info",13],["thesexcloud.com",13],["thothub.today",13],["tightsexteens.com",13],["tojav.net",13],["tokyoblog.tv",13],["tonnestreamz.xyz",13],["top16.net",13],["topvideosgay.com",13],["torrage.info",13],["torrents.vip",13],["torrsexvid.com",13],["tpb-proxy.xyz",13],["trannyteca.com",13],["trendytalker.com",13],["tumanga.net",13],["turbogvideos.com",13],["turbovid.me",13],["turkishseriestv.org",13],["turksub24.net",13],["tutele.sx",13],["tutelehd3.xyz",13],["tvglobe.me",13],["tvpclive.com",13],["tvs-widget.com",13],["tvseries.video",13],["ucptt.com",13],["ufaucet.online",13],["ufcfight.online",13],["uhdgames.xyz",13],["ultrahorny.com",13],["ultraten.net",13],["unblockweb.me",13],["underhentai.net",13],["uniqueten.net",13],["upbaam.com",13],["upstream.to",13],["valeriabelen.com",13],["verdragonball.online",13],["vfxmed.com",13],["video.az",13],["videostreaming.rocks",13],["videowood.tv",13],["vidorg.net",13],["vidtapes.com",13],["vidz7.com",13],["vikistream.com",13],["vikv.net",13],["virpe.cc",13],["visifilmai.org",13],["viveseries.com",13],["vladrustov.sx",13],["volokit2.com",13],["vstorrent.org",13],["w-hentai.com",13],["watchaccordingtojimonline.com",13],["watchbrooklynnine-nine.com",13],["watchdowntonabbeyonline.com",13],["watchelementaryonline.com",13],["watcheronline.net",13],["watchgleeonline.com",13],["watchhowimetyourmother.online",13],["watchkobestreams.info",13],["watchlostonline.net",13],["watchlouieonline.com",13],["watchjavidol.com",13],["watchmadmenonline.com",13],["watchmonkonline.com",13],["watchonceuponatimeonline.com",13],["watchparksandrecreation.net",13],["watchprettylittleliarsonline.com",13],["watchrulesofengagementonline.com",13],["watchthekingofqueens.com",13],["watchthemiddleonline.com",13],["watchtvchh.xyz",13],["webcamrips.com",13],["wickedspot.org",13],["wincest.xyz",13],["witanime.best",13],["wolverdon.fun",13],["wolverdonx.com",13],["wordcounter.icu",13],["worldcupstream.pm",13],["worldmovies.store",13],["worldstreams.click",13],["wpdeployit.com",13],["wqstreams.tk",13],["wwwsct.com",13],["xanimeporn.com",13],["xblog.tv",13],["xn--verseriesespaollatino-obc.online",13],["xn--xvideos-espaol-1nb.com",13],["xpornium.net",13],["xsober.com",13],["xvip.lat",13],["xxgasm.com",13],["xxvideoss.org",13],["xxx18.uno",13],["xxxdominicana.com",13],["xxxfree.watch",13],["xxxmax.net",13],["xxxwebdlxxx.top",13],["xxxxvideo.uno",13],["y2b.wiki",13],["yabai.si",13],["yadixv.com",13],["yayanimes.net",13],["yeshd.net",13],["yodbox.com",13],["youjax.com",13],["youpits.xyz",13],["yourdailypornvideos.ws",13],["yourupload.com",13],["ytstv.me",13],["ytstvmovies.co",13],["ytstvmovies.xyz",13],["ytsyify.co",13],["ytsyifymovie.com",13],["zerion.cc",13],["zerocoin.top",13],["zitss.xyz",13],["zpaste.net",13],["zplayer.live",13],["faucet.ovh",14],["oko.sh",[15,32,67]],["washingtonpost.com",16],["bigbtc.win",17],["cryptofun.space",17],["gosexpod.com",18],["sexo5k.com",19],["truyen-hentai.com",19],["theshedend.com",21],["zeroupload.com",21],["securenetsystems.net",21],["miniwebtool.com",21],["bchtechnologies.com",21],["spiegel.de",22],["hausbau-forum.de",23],["kiemlua.com",23],["appnee.com",24],["d0000d.com",25],["d000d.com",25],["d0o0d.com",25],["do0od.com",25],["doods.pro",25],["ds2play.com",25],["ds2video.com",25],["apkmirror.com",26],["musichq.pe",29],["sekaikomik.bio",29],["onlyfaucet.com",30],["livecamrips.com",31],["smutty.com",31],["freeadultcomix.com",31],["down.dataaps.com",31],["filmweb.pl",31],["infinityscans.xyz",32],["infinityscans.net",32],["tii.la",[32,67]],["ckk.ai",[32,67]],["oei.la",[32,67]],["lnbz.la",[32,67]],["j8jp.com",33],["visionpapers.org",34],["fdownloader.net",35],["thehackernews.com",36],["mielec.pl",37],["camsrip.com",38],["beatsnoop.com",38],["fetchpik.com",38],["hackerranksolution.in",38],["treasl.com",39],["mrbenne.com",40],["cnpics.org",41],["ovabee.com",41],["porn4f.com",41],["cnxx.me",41],["ai18.pics",41],["cuervotv.me",[42,50]],["aliezstream.pro",42],["daddy-stream.xyz",42],["instream.pro",42],["mylivestream.pro",42],["powerover.online",42],["sportea.link",42],["sportsurge.stream",42],["ufckhabib.com",42],["ustream.pro",42],["papa4k.online",42],["streamhd247.info",42],["nowlive1.me",42],["buzter.xyz",42],["gamehdlive.online",42],["hdfungamezz.xyz",42],["kingstreamz.lol",42],["masterpro.club",42],["papahd.co",42],["sportos.co",42],["valhallas.click",42],["veev.to",42],["andhrafriends.com",43],["freeroms.com",43],["soap2day-online.com",43],["sportsonline.si",44],["fiuxy2.co",45],["rnbastreams.com",46],["4kwebplay.xyz",46],["qqwebplay.xyz",46],["totalsportek.to",46],["eztvx.to",46],["topstreams.info",46],["lewblivehdplay.ru",46],["claplivehdplay.ru",46],["viwlivehdplay.ru",46],["antennasports.ru",46],["buffstreams.app",46],["1stream.eu",46],["crackstreamer.net",46],["methstreamer.com",46],["animeunity.to",47],["auto-crypto.click",48],["iconicblogger.com",48],["tokopedia.com",49],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",50],["6movies.net",50],["adsh.cc",50],["afilmyhouse.blogspot.com",50],["ak.sv",50],["animesultra.com",50],["api.webs.moe",50],["apkmody.io",50],["attvideo.com",50],["backfirstwo.site",[50,142]],["buffsports.me",50],["crazyblog.in",50],["divicast.com",50],["dlhd.so",50],["embed.meomeo.pw",50],["filmeserialeonline.org",50],["flexyhit.com",50],["foreverwallpapers.com",50],["french-streams.cc",50],["fslinks.org",50],["fstream365.com",50],["hdtoday.to",50],["hinatasoul.com",50],["icelz.newsrade.com",50],["igg-games.com",50],["membed.net",50],["mgnetu.com",50],["movie4kto.net",50],["mp3juice.info",50],["mp3juices.cc",50],["myflixerz.to",50],["nxbrew.com",50],["oii.io",50],["paidshitforfree.com",50],["pepperlive.info",50],["playertv.net",50],["putlocker68.com",50],["roystream.com",50],["rssing.com",50],["s.to",50],["share.filesh.site",50],["sharkfish.xyz",50],["skidrowcodex.net",50],["sports-stream.site",50],["stream4free.live",50],["tamilmobilemovies.in",50],["tapeadsenjoyer.com",50],["thewatchseries.live",50],["tnmusic.in",50],["travelplanspro.com",50],["tusfiles.com",50],["tutlehd4.com",50],["twstalker.com",50],["vid-guard.com",50],["vidco.pro",50],["video-leech.xyz",50],["vidsaver.net",50],["vidspeeds.com",50],["viralitytoday.com",50],["voiranime.stream",50],["watchdoctorwhoonline.com",50],["watchserie.online",50],["webhostingpost.com",50],["woxikon.in",50],["www-y2mate.com",50],["ylink.bid",50],["ytix.xyz",50],["remixsearch.net",51],["remixsearch.es",51],["onlineweb.tools",51],["sharing.wtf",51],["xnxxcom.xyz",52],["moonplusnews.com",[53,54]],["loanoffering.in",[53,54]],["truyentranhfull.net",54],["kenzo-flowertag.com",55],["mdn.lol",55],["btcbitco.in",56],["btcsatoshi.net",56],["cempakajaya.com",56],["crypto4yu.com",56],["gainl.ink",56],["manofadan.com",56],["readbitcoin.org",56],["wiour.com",56],["kienthucrangmieng.com",56],["tremamnon.com",56],["btc25.org",56],["tron-free.com",56],["bitsmagic.fun",56],["ourcoincash.xyz",56],["hynews.biz",56],["blog.cryptowidgets.net",57],["blog.insurancegold.in",57],["blog.wiki-topia.com",57],["blog.coinsvalue.net",57],["blog.cookinguide.net",57],["blog.freeoseocheck.com",57],["aylink.co",58],["sugarona.com",59],["nishankhatri.xyz",59],["cety.app",60],["exego.app",60],["cutlink.net",60],["cutsy.net",60],["cutyurls.com",60],["cutty.app",60],["cutnet.net",60],["javhdo.net",60],["tinys.click",61],["answerpython.com",61],["gsm-solution.com",61],["h-donghua.com",61],["hindisubbedacademy.com",61],["pkgovjobz.com",61],["ripexbooster.xyz",61],["serial4.com",61],["serial412.blogspot.com",61],["sigmalinks.in",61],["tutorgaming.com",61],["everydaytechvams.com",61],["dipsnp.com",61],["aiimgvlog.fun",62],["appsbull.com",63],["diudemy.com",63],["maqal360.com",63],["mphealth.online",63],["makefreecallsonline.com",63],["androjungle.com",63],["bookszone.in",63],["drakescans.com",63],["shortix.co",63],["msonglyrics.com",63],["app-sorteos.com",63],["bokugents.com",63],["client.pylexnodes.net",63],["btvplus.bg",63],["blog24.me",[64,65]],["coingraph.us",66],["impact24.us",66],["atglinks.com",68],["hamrojaagir.com",69],["odijob.com",69],["blogesque.net",70],["explorosity.net",70],["optimizepics.com",70],["torovalley.net",70],["simana.online",71],["unblocked.id",73],["listendata.com",74],["7xm.xyz",74],["fastupload.io",74],["azmath.info",74],["wouterplanet.com",75],["androidacy.com",76],["pillowcase.su",77],["veryfreeporn.com",78],["theporngod.com",78],["besthdgayporn.com",79],["drivenime.com",79],["javup.org",79],["shemaleup.net",79],["austiblox.net",80],["btcbunch.com",81],["teachoo.com",82],["interfootball.co.kr",83],["a-ha.io",83],["cboard.net",83],["jjang0u.com",83],["joongdo.co.kr",83],["viva100.com",83],["thephoblographer.com",83],["gamingdeputy.com",83],["thesaurus.net",83],["alle-tests.nl",83],["maketecheasier.com",83],["automobile-catalog.com",83],["allthekingz.com",83],["motorbikecatalog.com",83],["meconomynews.com",83],["brandbrief.co.kr",83],["motorgraph.com",83],["allthetests.com",84],["javatpoint.com",84],["globalrph.com",84],["carscoops.com",84],["issuya.com",84],["topstarnews.net",84],["islamicfinder.org",84],["secure-signup.net",84],["worldhistory.org",85],["bitcotasks.com",86],["udvl.com",87],["www.chip.de",88],["topsporter.net",89],["sportshub.to",89],["streamcheck.link",90],["unofficialtwrp.com",91],["bitcosite.com",92],["bitzite.com",92],["easymc.io",93],["yunjiema.top",93],["hacoos.com",94],["bondagevalley.cc",95],["zefoy.com",96],["vidello.net",97],["resizer.myct.jp",98],["gametohkenranbu.sakuraweb.com",99],["jisakuhibi.jp",100],["rank1-media.com",100],["lifematome.blog",101],["fm.sekkaku.net",102],["free-avx.jp",103],["dvdrev.com",104],["betweenjpandkr.blog",105],["nft-media.net",106],["ghacks.net",107],["leak.sx",108],["paste.bin.sx",108],["pornleaks.in",108],["songspk2.info",109],["zoechip.com",110],["nectareousoverelate.com",112],["khoaiphim.com",113],["haafedk2.com",114],["fordownloader.com",114],["jovemnerd.com.br",115],["nicomanga.com",116],["totalcsgo.com",117],["vivamax.asia",118],["manysex.com",119],["gaminginfos.com",120],["tinxahoivn.com",121],["forums-fastunlock.com",122],["automoto.it",123],["codelivly.com",124],["ophim.vip",125],["touguatize.monster",126],["client.falixnodes.net",127],["novelhall.com",128],["hes-goal.net",129],["abc17news.com",130],["adoredbyalex.com",130],["agrodigital.com",130],["al.com",130],["aliontherunblog.com",130],["allaboutthetea.com",130],["allmovie.com",130],["allmusic.com",130],["allthingsthrifty.com",130],["amessagewithabottle.com",130],["androidpolice.com",130],["antyradio.pl",130],["artforum.com",130],["artnews.com",130],["awkward.com",130],["awkwardmom.com",130],["bailiwickexpress.com",130],["barnsleychronicle.com",130],["becomingpeculiar.com",130],["bethcakes.com",130],["betweenenglandandiowa.com",130],["blogher.com",130],["bluegraygal.com",130],["briefeguru.de",130],["carmagazine.co.uk",130],["cattime.com",130],["cbr.com",130],["cbssports.com",130],["celiacandthebeast.com",130],["chaptercheats.com",130],["cleveland.com",130],["collider.com",130],["comingsoon.net",130],["commercialobserver.com",130],["competentedigitale.ro",130],["crafty.house",130],["dailyvoice.com",130],["decider.com",130],["didyouknowfacts.com",130],["dogtime.com",130],["dualshockers.com",130],["dustyoldthing.com",130],["faithhub.net",130],["femestella.com",130],["footwearnews.com",130],["freeconvert.com",130],["frogsandsnailsandpuppydogtail.com",130],["fsm-media.com",130],["funtasticlife.com",130],["fwmadebycarli.com",130],["gamerant.com",130],["gfinityesports.com",130],["givemesport.com",130],["gulflive.com",130],["helloflo.com",130],["homeglowdesign.com",130],["honeygirlsworld.com",130],["hotcars.com",130],["howtogeek.com",130],["insider-gaming.com",130],["insurancejournal.com",130],["jasminemaria.com",130],["kion546.com",130],["lehighvalleylive.com",130],["lettyskitchen.com",130],["lifeinleggings.com",130],["liveandletsfly.com",130],["lizzieinlace.com",130],["localnews8.com",130],["lonestarlive.com",130],["madeeveryday.com",130],["maidenhead-advertiser.co.uk",130],["makeuseof.com",130],["mardomreport.net",130],["masslive.com",130],["melangery.com",130],["milestomemories.com",130],["mlive.com",130],["modernmom.com",130],["momtastic.com",130],["mostlymorgan.com",130],["motherwellmag.com",130],["movieweb.com",130],["muddybootsanddiamonds.com",130],["musicfeeds.com.au",130],["mylifefromhome.com",130],["nationalreview.com",130],["neoskosmos.com",130],["nj.com",130],["nordot.app",130],["nothingbutnewcastle.com",130],["nsjonline.com",130],["nypost.com",130],["oakvillenews.org",130],["observer.com",130],["oregonlive.com",130],["ourlittlesliceofheaven.com",130],["pagesix.com",130],["palachinkablog.com",130],["pennlive.com",130],["pinkonthecheek.com",130],["politicususa.com",130],["predic.ro",130],["puckermom.com",130],["qtoptens.com",130],["realgm.com",130],["reelmama.com",130],["robbreport.com",130],["royalmailchat.co.uk",130],["samchui.com",130],["sandrarose.com",130],["screenrant.com",130],["sheknows.com",130],["sherdog.com",130],["sidereel.com",130],["silive.com",130],["simpleflying.com",130],["sloughexpress.co.uk",130],["spacenews.com",130],["sportsgamblingpodcast.com",130],["spotofteadesigns.com",130],["stacysrandomthoughts.com",130],["ssnewstelegram.com",130],["superherohype.com",130],["syracuse.com",130],["tablelifeblog.com",130],["thebeautysection.com",130],["thecelticblog.com",130],["thecurvyfashionista.com",130],["thefashionspot.com",130],["thegamer.com",130],["thegamescabin.com",130],["thenerdyme.com",130],["thenonconsumeradvocate.com",130],["theprudentgarden.com",130],["thethings.com",130],["timesnews.net",130],["topspeed.com",130],["toyotaklub.org.pl",130],["travelingformiles.com",130],["tutsnode.org",130],["tvline.com",130],["viralviralvideos.com",130],["wannacomewith.com",130],["wimp.com",130],["windsorexpress.co.uk",130],["woojr.com",130],["worldoftravelswithkids.com",130],["xda-developers.com",130],["cheatsheet.com",131],["pwinsider.com",131],["baeldung.com",131],["bagi.co.in",132],["keran.co",132],["biblestudytools.com",133],["christianheadlines.com",133],["ibelieve.com",133],["kuponigo.com",134],["kimcilonly.site",135],["kimcilonly.link",135],["cryptoearns.com",136],["inxxx.com",137],["ipaspot.app",138],["embedwish.com",139],["filelions.live",139],["leakslove.net",139],["jenismac.com",140],["vxetable.cn",141],["jewelavid.com",142],["nizarstream.com",142],["snapwordz.com",143],["toolxox.com",143],["rl6mans.com",143],["idol69.net",143],["plumbersforums.net",144],["123movies57.online",145],["gulio.site",146],["mediaset.es",147],["izlekolik.net",148],["donghuaworld.com",149],["letsdopuzzles.com",150],["tainio-mania.online",151],["hes-goals.io",152],["pkbiosfix.com",152],["casi3.xyz",152],["rediff.com",153],["dzapk.com",154],["darknessporn.com",155],["familyporner.com",155],["freepublicporn.com",155],["pisshamster.com",155],["punishworld.com",155],["xanimu.com",155],["pig69.com",156],["cosplay18.pics",156],["eroticmoviesonline.me",157],["teleclub.xyz",158],["ecamrips.com",159],["showcamrips.com",159],["9animetv.to",161],["jornadaperfecta.com",162],["loseart.com",163],["sousou-no-frieren.com",164],["intro-hd.net",165],["monacomatin.mc",165],["nodo313.net",165],["unite-guide.com",166],["thebullspen.com",167],["botcomics.com",168],["cefirates.com",168],["chandlerorchards.com",168],["comicleaks.com",168],["marketdata.app",168],["monumentmetals.com",168],["tapmyback.com",168],["ping.gg",168],["revistaferramental.com.br",168],["hawpar.com",168],["alpacafinance.org",[168,169]],["nookgaming.com",168],["enkeleksamen.no",168],["kvest.ee",168],["creatordrop.com",168],["panpots.com",168],["cybernetman.com",168],["bitdomain.biz",168],["gerardbosch.xyz",168],["fort-shop.kiev.ua",168],["accuretawealth.com",168],["resourceya.com",168],["tracktheta.com",168],["camberlion.com",168],["replai.io",168],["trybawaryjny.pl",168],["tt.live",169],["future-fortune.com",169],["abhijith.page",169],["madrigalmaps.com",169],["adventuretix.com",169],["bolighub.dk",169],["panprices.com",170],["intercity.technology",170],["freelancer.taxmachine.be",170],["adria.gg",170],["fjlaboratories.com",170],["emanualonline.com",170],["proboards.com",171],["winclassic.net",171],["japscan.lol",173],["abema.tv",174]]);

const entitiesMap = new Map([["pahe",[4,13]],["soap2day",4],["hqq",6],["waaw",6],["mhdsports",8],["mhdsportstv",8],["mhdtvsports",8],["mhdtvworld",8],["mhdtvmax",8],["mhdstream",8],["reset-scans",8],["teluguflix",8],["poplinks",[8,63]],["pixhost",9],["kimcartoon",[10,28]],["viprow",[12,13,50]],["bluemediadownload",12],["bluemediafile",12],["bluemedialink",12],["bluemediastorage",12],["bluemediaurls",12],["urlbluemedia",12],["cloudvideotv",[12,50]],["vidsrc",[12,50]],["123-movies",13],["123movieshd",13],["123movieshub",13],["123moviesme",13],["1337x",[13,27]],["1stream",13],["1tamilmv",13],["2ddl",13],["2umovies",13],["3hiidude",13],["4stream",13],["5movies",13],["7hitmovies",13],["9xmovie",13],["9xlinks",13],["aagmaal",[13,50]],["adblockeronstape",13],["adblockeronstreamtape",13],["adblockplustape",13],["adblockstreamtape",13],["adblockstrtape",13],["adblockstrtech",13],["adblocktape",13],["adcorto",13],["alexsports",13],["alexsportss",13],["alexsportz",13],["animepahe",13],["animesanka",13],["animixplay",13],["aniplay",13],["antiadtape",13],["asianclub",13],["ask4movie",13],["atomixhq",[13,50]],["atomohd",13],["beinmatch",[13,20]],["bhaai",13],["buffstreams",13],["canalesportivo",13],["clickndownload",13],["clicknupload",13],["daddylive",[13,50]],["daddylivehd",[13,50]],["ddrmovies",13],["desiremovies",13],["devlib",13],["divxtotal",13],["divxtotal1",13],["dlhd",13],["dvdplay",[13,50]],["elixx",13],["enjoy4k",13],["estrenosflix",13],["estrenosflux",13],["estrenosgo",13],["f1stream",13],["fbstream",13],["file4go",13],["filmymeet",13],["filmyzilla",[13,50]],["findav",13],["findporn",13],["flixmaza",13],["flizmovies",13],["freetvsports",13],["fullymaza",13],["g3g",13],["gotxx",13],["grantorrent",13],["hdmoviesfair",[13,50]],["hdmoviesflix",13],["hiidudemoviez",13],["imgsen",13],["imgsto",13],["incest",13],["incestflix",13],["itopmusic",13],["javmost",13],["keeplinks",13],["keepvid",13],["keralahd",13],["khatrimazaful",13],["khatrimazafull",13],["leechall",13],["linkshorts",13],["mangovideo",13],["masaporn",13],["miniurl",13],["mirrorace",13],["mixdroop",13],["mixdrop",[13,46]],["mkvcage",13],["mlbstream",13],["mlsbd",13],["mmsbee",13],["motogpstream",13],["movieplex",13],["movierulzlink",13],["movies123",13],["moviesflix",13],["moviesmeta",13],["moviessources",13],["moviesverse",13],["moviezwaphd",13],["mrunblock",13],["nbastream",13],["newmovierulz",13],["nflstream",13],["nhlstream",13],["noblocktape",13],["nocensor",13],["onlyfams",13],["ouo",13],["pctfenix",[13,50]],["pctnew",[13,50]],["peliculas24",13],["pelisplus",13],["piratebay",13],["plyjam",13],["plylive",13],["plyvdo",13],["pornhoarder",13],["prbay",13],["projectfreetv",13],["proxybit",13],["psarips",13],["racaty",13],["remaxhd",13],["rintor",13],["rnbxclusive",13],["rnbxclusive0",13],["rnbxclusive1",13],["rojadirecta",13],["rojadirectaenvivo",13],["rugbystreams",13],["sadisflix",13],["safetxt",13],["shadowrangers",13],["shahi4u",13],["shahid4u1",13],["shahid4uu",13],["shavetape",13],["shortearn",13],["shorten",13],["shorttey",13],["shortzzy",13],["skymovieshd",13],["socceronline",[13,50]],["softarchive",13],["sports-stream",13],["sshhaa",13],["stapadblockuser",13],["stape",13],["stapewithadblock",13],["starmusiq",13],["strcloud",13],["streamadblocker",[13,50]],["streamadblockplus",13],["streamcdn",13],["streamhub",13],["streamsport",13],["streamta",13],["streamtape",13],["streamtapeadblockuser",13],["strikeout",13],["strtape",13],["strtapeadblock",13],["strtapeadblocker",13],["strtapewithadblock",13],["strtpe",13],["swatchseries",13],["tabooflix",13],["tennisstreams",13],["themoviesflix",13],["thepiratebay",13],["thisav",13],["tmearn",13],["toonanime",13],["torlock",13],["tormalayalam",13],["torrentz2eu",13],["tutelehd",13],["tvply",13],["u4m",13],["ufcstream",13],["unblocknow",13],["uploadbuzz",13],["usagoals",13],["vexmoviex",13],["vidclouds",13],["vidlox",13],["vipbox",[13,50]],["vipboxtv",[13,50]],["vipleague",13],["watch-series",13],["watchseries",13],["xclusivejams",13],["xmoviesforyou",13],["youdbox",13],["ytmp3eu",13],["yts-subs",13],["yts",13],["zooqle",13],["dutchycorp",14],["dood",[25,50]],["doodstream",25],["dooood",[25,50]],["torrentdownload",29],["shrinke",31],["shrinkme",31],["daddylive1",42],["esportivos",42],["poscitechs",42],["watchomovies",[43,50]],["wawacity",46],["123movies",50],["123moviesla",50],["123movieweb",50],["2embed",50],["720pstream",50],["9xmovies",50],["adshort",50],["allmovieshub",50],["asianplay",50],["atishmkv",50],["cricstream",50],["crictime",50],["databasegdriveplayer",50],["extramovies",50],["faselhd",50],["faselhds",50],["filemoon",50],["filmy",50],["filmyhit",50],["filmywap",50],["fmovies",50],["gdplayer",50],["gdriveplayer",50],["goku",50],["gomovies",50],["gowatchseries",50],["hdfungamezz",50],["hindilinks4u",50],["hurawatch",50],["jalshamoviezhd",50],["livecricket",50],["mhdsport",50],["mkvcinemas",50],["movies2watch",50],["moviespapa",50],["mp4moviez",50],["mydownloadtube",50],["nsw2u",50],["nuroflix",50],["o2tvseries",50],["o2tvseriesz",50],["pirlotv",50],["poscitech",50],["primewire",50],["redecanais",50],["serienstream",50],["sflix",50],["shahed4u",50],["shaheed4u",50],["speedostream",50],["sportcast",50],["sportskart",50],["streamingcommunity",50],["tamilarasan",50],["tamilfreemp3songs",50],["tamilprinthd",50],["torrentdosfilmes",50],["tubemate",50],["uploadrar",50],["uqload",50],["vidcloud9",50],["vido",50],["vidoo",50],["vudeo",50],["vumoo",50],["yesmovies",50],["mydverse",61],["stfly",70],["stly",70],["kickass",72],["cine-calidad",78],["actvid",110],["lk21official",160],["nontondrama",160]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function removeNodeText(
    nodeName,
    condition,
    ...extraArgs
) {
    replaceNodeTextFn(nodeName, '', '', 'condition', condition || '', ...extraArgs);
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
    const reCondition = safe.patternToRegex(extraArgs.condition || '', 'ms');
    const stop = (takeRecord = true) => {
        if ( takeRecord ) {
            handleMutations(observer.takeRecords());
        }
        observer.disconnect();
        if ( safe.logLevel > 1 ) {
            safe.uboLog(logPrefix, 'Quitting');
        }
    };
    let sedCount = extraArgs.sedCount || 0;
    const handleNode = node => {
        const before = node.textContent;
        reCondition.lastIndex = 0;
        if ( safe.RegExp_test.call(reCondition, before) === false ) { return true; }
        rePattern.lastIndex = 0;
        if ( safe.RegExp_test.call(rePattern, before) === false ) { return true; }
        rePattern.lastIndex = 0;
        const after = pattern !== ''
            ? before.replace(rePattern, replacement)
            : replacement;
        node.textContent = after;
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

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1,
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
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
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
