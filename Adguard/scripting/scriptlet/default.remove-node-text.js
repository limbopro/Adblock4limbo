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

const argsList = [["script","DisplayAcceptableAdIfAdblocked"],["script","/==undefined.*body/"],["script","Promise"],["script","Number.isSafeInteger"],["script","Reflect"],["script","document.write"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","deblocker"],["script","exdynsrv"],["script","/adb/i"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/document\\.createElement|\\.banner-in/"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|adblock/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","alert"],["script","/adblock|popunder/"],["script","'.ains'"],["script","style"],["script","/fetch|adb/i"],["script","window.open"],["script","throw Error","condition","/^\\s*\\(?function.*\\);\\}\\}\\(\\)\\)\\);/"],["script",";break;case $."],["script","zaraz"],["script","shown_at"],["script","adblockimg"],["script","showAd"],["script","document.createElement(\"script\")"],["script","googlesyndication"],["script","justDetectAdblock"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/bypass.php"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","AdbModel"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script","adb_detected"],["script","Adblock"],["script",";}}};break;case $."],["style","text-decoration"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","charCodeAt"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","popunder"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","KCgpPT57bGV0IGU"],["script","error-report.com"],["script","adShield"],["script","AdblockRegixFinder"],["script","serve"],["script",".slice(0, -1); }"],["script","(Math.PI).toFixed(10).slice(0, -1);"],["script","/ConsoleBan|alert|AdBlocker/"],["script","runPop"],["script","mdpDeblocker"],["script","alert","condition","adblock"],["script","adb"],["script","await fetch"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","zfgloaded"],["script","ai_adb"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/modal|popupads/"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","ad_block"],["script","app_checkext"],["script","clientHeight"],["script","/url_key|adHtml/"],["script","pop.target"],["script","/showadblock|_0x/"],["script","axios"],["script","ad block"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","AaDetector"],["script","AdBlock"],["script","Symbol.iterator"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","detectAdBlock"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","document.head.appendChild"],["script","Number"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","popundersPerIP"],["script","/adbl/i"],["script","detect"],["script","fetch"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","vglnk"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","NREUM"]];

const hostnamesMap = new Map([["alpin.de",0],["boersennews.de",0],["chefkoch.de",0],["chip.de",0],["clever-tanken.de",0],["desired.de",0],["donnerwetter.de",0],["fanfiktion.de",0],["focus.de",0],["formel1.de",0],["frustfrei-lernen.de",0],["gewinnspiele.tv",0],["giga.de",0],["gut-erklaert.de",0],["kino.de",0],["messen.de",0],["nickles.de",0],["nordbayern.de",0],["spielfilm.de",0],["teltarif.de",0],["unsere-helden.com",0],["weltfussball.at",0],["aupetitparieur.com",1],["allthingsvegas.com",1],["100percentfedup.com",1],["beforeitsnews.com",1],["concomber.com",1],["conservativebrief.com",1],["conservativefiringline.com",1],["dailylol.com",1],["funnyand.com",1],["letocard.fr",1],["mamieastuce.com",1],["meilleurpronostic.fr",1],["patriotnationpress.com",1],["toptenz.net",1],["vitamiiin.com",1],["writerscafe.org",1],["populist.press",1],["dailytruthreport.com",1],["livinggospeldaily.com",1],["first-names-meanings.com",1],["welovetrump.com",1],["thehayride.com",1],["thelibertydaily.com",1],["thepoke.co.uk",1],["thepolitistick.com",1],["theblacksphere.net",1],["shark-tank.com",1],["naturalblaze.com",1],["greatamericanrepublic.com",1],["dailysurge.com",1],["truthlion.com",1],["flagandcross.com",1],["westword.com",1],["republicbrief.com",1],["freedomfirstnetwork.com",1],["phoenixnewtimes.com",1],["designbump.com",1],["clashdaily.com",1],["madworldnews.com",1],["reviveusa.com",1],["sonsoflibertymedia.com",1],["thedesigninspiration.com",1],["videogamesblogger.com",1],["protrumpnews.com",1],["thepalmierireport.com",1],["kresy.pl",1],["thepatriotjournal.com",1],["gellerreport.com",1],["thegatewaypundit.com",1],["wltreport.com",1],["miaminewtimes.com",1],["politicalsignal.com",1],["rightwingnews.com",1],["bigleaguepolitics.com",1],["comicallyincorrect.com",1],["moviepilot.de",2],["yts.mx",5],["upornia.com",7],["pinsystem.co.uk",8],["elrellano.com",8],["tinyppt.com",8],["downfile.site",8],["expertvn.com",8],["trangchu.news",8],["bharathwick.com",8],["descargaspcpro.net",8],["dx-tv.com",8],["rt3dmodels.com",8],["plc4me.com",8],["blisseyhusbands.com",8],["madaradex.org",8],["franceprefecture.fr",8],["uiiumovies.net",8],["jazbaat.in",8],["learnmany.in",8],["amanguides.com",[8,44]],["highkeyfinance.com",[8,44]],["appkamods.com",8],["techacode.com",8],["djqunjab.in",8],["3dmodelshare.org",8],["nulleb.com",8],["asiaon.top",8],["coursesghar.com",8],["thecustomrom.com",8],["snlookup.com",8],["bingotingo.com",8],["ghior.com",8],["3dmili.com",8],["karanpc.com",8],["plc247.com",8],["hiraethtranslation.com",8],["apkdelisi.net",8],["javindo.eu.org",8],["chindohot.site",8],["freepasses.org",8],["tomarnarede.pt",8],["basketballbuzz.ca",8],["dribbblegraphics.com",8],["kemiox.com",8],["checkersmenu.us",8],["teksnologi.com",8],["dollareuro.live",8],["eporner.com",10],["germancarforum.com",11],["cybercityhelp.in",11],["streamnoads.com",[12,13,54]],["bowfile.com",12],["cloudvideo.tv",[12,54]],["coloredmanga.com",12],["embedstream.me",[12,13,54]],["exeo.app",12],["hiphopa.net",[12,13]],["megaup.net",12],["tv247.us",[12,13]],["uploadhaven.com",12],["userscloud.com",[12,54]],["mdfx9dc8n.net",13],["mdzsmutpcvykb.net",13],["mixdrop21.net",13],["mixdropjmk.pw",13],["y2tube.pro",13],["123movies4u.site",13],["1337xporn.com",13],["141jav.com",13],["1bit.space",13],["1bitspace.com",13],["38dh2.top",13],["3dporndude.com",13],["4archive.org",13],["4horlover.com",13],["560pmovie.com",13],["60fps.xyz",13],["85tube.com",13],["85videos.com",13],["8xlinks.click",13],["a2zcrackworld.com",13],["aazzz.xyz",13],["acefile.co",13],["actusports.eu",13],["adclickersbot.com",13],["adricami.com",13],["adslink.pw",13],["adultstvlive.com",13],["adz7short.space",13],["aeblender.com",13],["ahdafnews.blogspot.com",13],["ak47sports.com",13],["akuma.moe",13],["allplayer.tk",13],["allstreaming.online",13],["amadoras.cf",13],["amadorasdanet.shop",13],["amateurblog.tv",13],["androidadult.com",13],["anhsexjav.xyz",13],["anidl.org",13],["anime-loads.org",13],["animeblkom.net",13],["animefire.plus",13],["animelek.me",13],["animeshouse.net",13],["animespire.net",13],["animestotais.xyz",13],["animeyt.es",13],["anroll.net",13],["anymoviess.xyz",13],["aotonline.org",13],["asenshu.com",13],["asialiveaction.com",13],["asianclipdedhd.net",13],["askim-bg.com",13],["asumsikedaishop.com",13],["avcrempie.com",13],["avseesee.com",13],["gettapeads.com",13],["backfirstwo.com",13],["bajarjuegospcgratis.com",13],["balkanportal.net",13],["balkanteka.net",13],["bdnewszh.com",[13,54]],["belowporn.com",13],["bestclaimtrx.xyz",13],["bestgirlsexy.com",13],["bestnhl.com",13],["bestporn4free.com",13],["bestporncomix.com",13],["bet36.es",13],["bikinitryon.net",13],["birdurls.com",13],["bitsearch.to",13],["blackcockadventure.com",13],["blackcockchurch.org",13],["blackporncrazy.com",13],["blizzboygames.net",13],["blizzpaste.com",13],["blkom.com",13],["blog-peliculas.com",13],["blogtrabalhista.com",13],["blurayufr.xyz",13],["bobsvagene.club",13],["bolly4umovies.click",13],["bonusharian.pro",13],["brilian-news.id",13],["brupload.net",13],["bucitana.com",13],["cablegratis.online",13],["camchickscaps.com",13],["camgirlcum.com",13],["camgirls.casa",13],["cashurl.in",13],["castingx.net",13],["ccurl.net",[13,54]],["celebrity-leaks.net",13],["cgpelis.net",13],["charexempire.com",13],["clasico.tv",13],["clik.pw",13],["coin-free.com",[13,41]],["coins100s.fun",13],["comicsmanics.com",13],["compucalitv.com",13],["coolcast2.com",13],["cosplaytab.com",13],["countylocalnews.com",13],["cpmlink.net",13],["crackstreamshd.click",13],["crespomods.com",13],["crisanimex.com",13],["crunchyscan.fr",13],["cuevana3.fan",13],["cuevana3hd.com",13],["cumception.com",13],["curvaweb.com",13],["cutpaid.com",13],["cypherscans.xyz",[13,54]],["datawav.club",13],["daughtertraining.com",13],["deepgoretube.site",13],["deltabit.co",13],["depvailon.com",13],["derleta.com",13],["desivdo.com",13],["desixx.net",13],["detikkebumen.com",13],["deutschepornos.me",13],["diasoft.xyz",13],["directupload.net",13],["diskusscan.com",13],["dixva.com",13],["dlhd.sx",13],["doctormalay.com",13],["dofusports.xyz",13],["dogemate.com",13],["doods.cam",13],["doodskin.lat",13],["downloadrips.com",13],["downvod.com",13],["dphunters.mom",13],["dragontranslation.com",13],["duddes.xyz",13],["dvdfullestrenos.com",13],["easylinks.in",13],["ebookbb.com",13],["ebookhunter.net",13],["egyanime.com",13],["egygost.com",13],["egyshare.cc",13],["ekasiwap.com",13],["electro-torrent.pl",13],["elil.cc",13],["embed4u.xyz",13],["eplayer.click",13],["erovoice.us",13],["eroxxx.us",13],["estrenosdoramas.net",13],["everia.club",13],["everythinginherenet.blogspot.com",13],["extrafreetv.com",13],["extremotvplay.com",13],["fapinporn.com",13],["fapptime.com",13],["fashionblog.tv",13],["fastreams.live",13],["faucethero.com",13],["fembed.com",13],["femdom-joi.com",13],["fileone.tv",13],["film1k.com",13],["filmeonline2023.net",13],["filmesonlinex.org",13],["filmesonlinexhd.biz",[13,54]],["filmovitica.com",13],["filmymaza.blogspot.com",13],["filthy.family",13],["firstmovies.to",13],["fixfinder.click",13],["flostreams.xyz",13],["flyfaucet.com",13],["footyhunter.lol",13],["footyhunter3.xyz",[13,54]],["forex-golds.com",13],["forex-trnd.com",13],["forumchat.club",13],["forumlovers.club",13],["freemoviesonline.biz",13],["freeomovie.co.in",13],["freeomovie.to",13],["freeporncomic.net",13],["freepornhdonlinegay.com",13],["freeproxy.io",13],["freeuse.me",13],["freeusexporn.com",13],["fsicomics.com",13],["gambarbogel.xyz",13],["gamepcfull.com",13],["gameronix.com",13],["gamesfullx.com",13],["gameshdlive.net",13],["gameshdlive.xyz",13],["gamesmountain.com",13],["gamesrepacks.com",13],["gamingguru.fr",13],["gamovideo.com",13],["garota.cf",13],["gaydelicious.com",13],["gaypornmasters.com",13],["gaysex69.net",13],["gemstreams.com",13],["get-to.link",13],["girlscanner.org",13],["giurgiuveanul.ro",13],["gledajcrtace.xyz",13],["gocast2.com",13],["gomo.to",13],["gostosa.cf",13],["gtlink.co",13],["gwiazdypornosow.pl",13],["haho.moe",13],["hatsukimanga.com",13],["hayhd.net",13],["hdsaprevodom.com",13],["hdstreamss.club",13],["hentais.tube",13],["hentaistream.co",13],["hentaitk.net",13],["hentaitube.online",13],["hentaiworld.tv",13],["hesgoal.tv",13],["hexupload.net",13],["hhkungfu.tv",13],["highlanderhelp.com",13],["hindimean.com",13],["hindimovies.to",[13,54]],["hiperdex.com",13],["hispasexy.org",13],["hitomi.la",13],["hitprn.com",13],["hoca4u.com",13],["hollymoviehd.cc",13],["hoodsite.com",13],["hopepaste.download",13],["hornylips.com",13],["hotgranny.live",13],["hotmama.live",13],["hqcelebcorner.net",13],["huren.best",13],["hwnaturkya.com",[13,54]],["hxfile.co",[13,54]],["igfap.com",13],["ihdstreams.xyz",13],["iklandb.com",13],["illink.net",13],["imgkings.com",13],["imgsex.xyz",13],["imx.to",13],["influencersgonewild.org",13],["infosgj.free.fr",13],["investnewsbrazil.com",13],["itdmusics.com",13],["itsuseful.site",13],["itunesfre.com",13],["iwatchfriendsonline.net",[13,96]],["jackstreams.com",13],["jatimupdate24.com",13],["jav-scvp.com",13],["javcl.com",13],["javf.net",13],["javhay.net",13],["javhoho.com",13],["javhun.com",13],["javleak.com",13],["javporn.best",13],["javsex.to",13],["javtiful.com",13],["jimdofree.com",13],["jiofiles.org",13],["jorpetz.com",13],["journalyc.online",13],["jp-films.com",13],["jpop80ss3.blogspot.com",13],["jpopsingles.eu",13],["kantotflix.net",13],["kantotinyo.com",13],["kaoskrew.org",13],["kaplog.com",13],["keralatvbox.com",13],["kickassanimes.io",13],["kimochi.info",13],["kimochi.tv",13],["kinemania.tv",13],["konstantinova.net",13],["koora-online.live",13],["kunmanga.com",13],["kutmoney.com",13],["kwithsub.com",13],["ladangreceh.xyz",13],["lat69.me",13],["latinblog.tv",13],["latinomegahd.net",13],["lazyfaucet.com",13],["leechpremium.link",13],["legendas.dev",13],["legendei.net",13],["lightdlmovies.blogspot.com",13],["lighterlegend.com",13],["linclik.com",13],["linkebr.com",13],["linkrex.net",13],["links.worldfree4u-lol.online",13],["linksfy.co",13],["lody.ink",13],["lovesomecommunity.com",13],["lulustream.com",[13,54]],["luluvdo.com",[13,54]],["luzcameraeacao.shop",13],["manga-oni.com",13],["mangaboat.com",13],["mangagenki.me",13],["mangahere.onl",13],["mangaweb.xyz",13],["mangoporn.net",13],["manhwahentai.me",13],["masahub.com",13],["masahub.net",13],["maturegrannyfuck.com",13],["mdy48tn97.com",13],["mediapemersatubangsa.com",13],["mega-mkv.com",13],["megapastes.com",13],["megapornpics.com",13],["messitv.net",13],["meusanimes.net",13],["milfmoza.com",13],["milfzr.com",13],["millionscast.com",13],["mimaletamusical.blogspot.com",13],["mitly.us",13],["mkv-pastes.com",13],["modb.xyz",13],["monaskuliner.ac.id",13],["moredesi.com",13],["movgotv.net",13],["movi.pk",13],["movieswbb.com",13],["moviewatch.com.pk",13],["mp4upload.com",13],["mrskin.live",13],["multicanaistv.com",13],["mundowuxia.com",13],["myeasymusic.ir",13],["myonvideo.com",13],["myyouporn.com",13],["narutoget.info",13],["naughtypiss.com",13],["nerdiess.com",13],["new-fs.eu",13],["newtorrentgame.com",13],["nflstreams.me",13],["niaomea.me",[13,54]],["nicekkk.com",13],["nicesss.com",13],["nlegs.com",13],["nolive.me",[13,54]],["nopay.info",13],["nopay2.info",[13,136]],["notformembersonly.com",13],["novamovie.net",13],["novelpdf.xyz",13],["novelssites.com",[13,54]],["novelup.top",13],["nsfwr34.com",13],["nu6i-bg-net.com",13],["nudebabesin3d.com",13],["nukedfans.com",13],["nuoga.eu",13],["nzbstars.com",13],["ohjav.com",13],["ojearnovelas.com",13],["okanime.xyz",13],["olarixas.xyz",13],["oldbox.cloud",13],["olweb.tv",13],["olympicstreams.me",13],["on9.stream",13],["oncast.xyz",13],["onepiece-mangaonline.com",13],["onifile.com",13],["onionstream.live",13],["onlinesaprevodom.net",13],["onlyfullporn.video",13],["onplustv.live",13],["originporn.com",13],["ovagames.com",13],["ovamusic.com",13],["owllink.net",13],["packsporn.com",13],["pahaplayers.click",13],["palimas.org",13],["pandafiles.com",13],["papahd.club",13],["papahd1.xyz",13],["password69.com",13],["pastemytxt.com",13],["payskip.org",13],["peeplink.in",13],["peliculasmx.net",13],["pervertgirlsvideos.com",13],["pervyvideos.com",13],["phim12h.com",13],["picdollar.com",13],["pickteenz.com",13],["pics4you.net",13],["picsxxxporn.com",13],["pinayscandalz.com",13],["pinkueiga.net",13],["piratefast.xyz",13],["piratehaven.xyz",13],["pirateiro.com",13],["pirlotvonline.org",13],["playtube.co.za",13],["plugintorrent.com",13],["pmvzone.com",13],["porndish.com",13],["pornez.net",13],["pornfetishbdsm.com",13],["pornfits.com",13],["pornhd720p.com",13],["pornobr.club",13],["pornobr.ninja",13],["pornodominicano.net",13],["pornofaps.com",13],["pornoflux.com",13],["pornotorrent.com.br",13],["pornredit.com",13],["pornstarsyfamosas.es",13],["pornstreams.co",13],["porntn.com",13],["pornxbit.com",13],["pornxday.com",13],["portaldasnovinhas.shop",13],["portugues-fcr.blogspot.com",13],["poscishd.online",13],["poscitesch.com",[13,54]],["poseyoung.com",13],["pover.org",13],["proxyninja.org",13],["pubfilmz.com",13],["publicsexamateurs.com",13],["punanihub.com",13],["putlocker5movies.org",13],["pxxbay.com",13],["r18.best",13],["ragnaru.net",13],["rapbeh.net",13],["rapelust.com",13],["rapload.org",13],["read-onepiece.net",13],["retro-fucking.com",13],["retrotv.org",13],["robaldowns.com",13],["rockdilla.com",13],["rojadirectatvenvivo.com",13],["rojitadirecta.blogspot.com",13],["romancetv.site",13],["rule34.club",13],["rule34hentai.net",13],["rumahbokep-id.com",13],["safego.cc",13],["sakurafile.com",13],["satoshi-win.xyz",13],["scat.gold",13],["scatfap.com",13],["scatkings.com",13],["scnlog.me",13],["scripts-webmasters.net",13],["serie-turche.com",13],["serijefilmovi.com",13],["sexcomics.me",13],["sexdicted.com",13],["sexgay18.com",13],["sexofilm.co",13],["sextgem.com",13],["sextubebbw.com",13],["sgpics.net",13],["shadowrangers.live",13],["shahee4u.cam",13],["shahiid-anime.net",13],["shemale6.com",13],["shinden.pl",13],["short.es",13],["showmanga.blog.fc2.com",13],["shrt10.com",13],["shurt.pw",13],["sideplusleaks.net",13],["silverblog.tv",13],["silverpic.com",13],["sinhalasub.life",13],["sinsitio.site",13],["sinvida.me",13],["skidrowcpy.com",13],["skidrowfull.com",13],["skidrowreloaded.com",13],["slut.mom",13],["smallencode.me",13],["smoner.com",13],["smplace.com",13],["soccerinhd.com",13],["socceron.name",13],["softairbay.com",13],["sokobj.com",13],["songsio.com",13],["souexatasmais.com",13],["sportbar.live",13],["sportea.online",13],["sportskart.xyz",13],["sportstream1.cfd",13],["sporttuna.site",13],["srt.am",13],["srts.me",13],["stakes100.xyz",13],["stbemuiptv.com",13],["stockingfetishvideo.com",13],["stream.crichd.vip",13],["stream.lc",13],["stream25.xyz",13],["streambee.to",13],["streamcenter.pro",13],["streamers.watch",13],["streamgo.to",13],["streamkiste.tv",13],["streamoporn.xyz",13],["streamoupload.xyz",13],["streamservicehd.click",13],["streamvid.net",[13,21]],["subtitleporn.com",13],["subtitles.cam",13],["suicidepics.com",13],["supertelevisionhd.com",13],["supexfeeds.com",13],["swzz.xyz",13],["sxnaar.com",13],["tabooporns.com",13],["taboosex.club",13],["tapeantiads.com",13],["tapeblocker.com",13],["tapenoads.com",13],["tapewithadblock.org",[13,158]],["teamos.xyz",13],["teen-wave.com",13],["teenporncrazy.com",13],["telegramgroups.xyz",13],["telenovelasweb.com",13],["tensei-shitara-slime-datta-ken.com",13],["tfp.is",13],["tgo-tv.co",[13,54]],["thaihotmodels.com",13],["theblueclit.com",13],["thebussybandit.com",13],["theicongenerator.com",13],["thelastdisaster.vip",13],["thepiratebay0.org",13],["thepiratebay10.info",13],["thesexcloud.com",13],["thothub.today",13],["tightsexteens.com",13],["tojav.net",13],["tokyoblog.tv",13],["tonnestreamz.xyz",13],["top16.net",13],["topvideosgay.com",13],["torrage.info",13],["torrents.vip",13],["torrsexvid.com",13],["tpb-proxy.xyz",13],["trannyteca.com",13],["trendytalker.com",13],["tumanga.net",13],["turbogvideos.com",13],["turbovid.me",13],["turkishseriestv.org",13],["turksub24.net",13],["tutele.sx",13],["tutelehd3.xyz",13],["tvglobe.me",13],["tvpclive.com",13],["tvs-widget.com",13],["tvseries.video",13],["ucptt.com",13],["ufaucet.online",13],["ufcfight.online",13],["uhdgames.xyz",13],["ultrahorny.com",13],["ultraten.net",13],["unblockweb.me",13],["underhentai.net",13],["uniqueten.net",13],["upbaam.com",13],["upstream.to",13],["valeriabelen.com",13],["verdragonball.online",13],["vfxmed.com",13],["video.az",13],["videostreaming.rocks",13],["videowood.tv",13],["vidorg.net",13],["vidtapes.com",13],["vidz7.com",13],["vikistream.com",13],["vikv.net",13],["virpe.cc",13],["visifilmai.org",13],["viveseries.com",13],["vladrustov.sx",13],["volokit2.com",13],["vstorrent.org",13],["w-hentai.com",13],["watchaccordingtojimonline.com",13],["watchbrooklynnine-nine.com",13],["watchdowntonabbeyonline.com",13],["watchelementaryonline.com",13],["watcheronline.net",13],["watchgleeonline.com",13],["watchhowimetyourmother.online",13],["watchkobestreams.info",13],["watchlostonline.net",13],["watchlouieonline.com",13],["watchmadmenonline.com",13],["watchmonkonline.com",13],["watchonceuponatimeonline.com",13],["watchparksandrecreation.net",13],["watchprettylittleliarsonline.com",13],["watchrulesofengagementonline.com",13],["watchthekingofqueens.com",13],["watchthemiddleonline.com",13],["watchtvchh.xyz",13],["webcamrips.com",13],["wickedspot.org",13],["wincest.xyz",13],["witanime.best",13],["wolverdon.fun",13],["wolverdonx.com",13],["wordcounter.icu",13],["worldcupstream.pm",13],["worldmovies.store",13],["worldstreams.click",13],["wpdeployit.com",13],["wqstreams.tk",13],["wwwsct.com",13],["xanimeporn.com",13],["xblog.tv",13],["xn--verseriesespaollatino-obc.online",13],["xn--xvideos-espaol-1nb.com",13],["xpornium.net",13],["xsober.com",13],["xvip.lat",13],["xxgasm.com",13],["xxvideoss.org",13],["xxx18.uno",13],["xxxdominicana.com",13],["xxxfree.watch",13],["xxxmax.net",13],["xxxwebdlxxx.top",13],["xxxxvideo.uno",13],["y2b.wiki",13],["yabai.si",13],["yadixv.com",13],["yayanimes.net",13],["yeshd.net",13],["yodbox.com",13],["youjax.com",13],["youpits.xyz",13],["yourdailypornvideos.ws",13],["yourupload.com",13],["ytstv.me",13],["ytstvmovies.co",13],["ytstvmovies.xyz",13],["ytsyify.co",13],["ytsyifymovie.com",13],["zerion.cc",13],["zerocoin.top",13],["zitss.xyz",13],["zpaste.net",13],["zplayer.live",13],["faucet.ovh",14],["oko.sh",15],["washingtonpost.com",16],["bigbtc.win",17],["cryptofun.space",17],["gosexpod.com",18],["sexo5k.com",19],["truyen-hentai.com",19],["theshedend.com",21],["rsadnetworkinfo.com",21],["rsinsuranceinfo.com",21],["rsfinanceinfo.com",21],["rsgamer.app",21],["rssoftwareinfo.com",21],["rshostinginfo.com",21],["rseducationinfo.com",21],["zeroupload.com",21],["securenetsystems.net",21],["miniwebtool.com",21],["bchtechnologies.com",21],["spiegel.de",22],["appnee.com",23],["d0000d.com",24],["d000d.com",24],["d0o0d.com",24],["do0od.com",24],["doods.pro",24],["ds2play.com",24],["ds2video.com",24],["apkmirror.com",[25,66]],["onlyfaucet.com",27],["livecamrips.com",28],["smutty.com",28],["freeadultcomix.com",28],["down.dataaps.com",28],["filmweb.pl",28],["infinityscans.xyz",[29,30]],["infinityscans.net",[29,30]],["j8jp.com",31],["musichq.pe",32],["sekaikomik.bio",32],["visionpapers.org",33],["fdownloader.net",34],["mielec.pl",35],["camsrip.com",36],["iisfvirtual.in",36],["starxinvestor.com",36],["beatsnoop.com",36],["fetchpik.com",36],["hackerranksolution.in",36],["stfly.xyz",37],["treasl.com",38],["mrbenne.com",39],["kenzo-flowertag.com",40],["mdn.lol",40],["btcbitco.in",41],["btcsatoshi.net",41],["cempakajaya.com",41],["crypto4yu.com",41],["gainl.ink",41],["manofadan.com",41],["readbitcoin.org",41],["wiour.com",41],["kienthucrangmieng.com",41],["tremamnon.com",41],["btc25.org",41],["tron-free.com",41],["bitsmagic.fun",41],["ourcoincash.xyz",41],["hynews.biz",41],["blog.cryptowidgets.net",42],["blog.insurancegold.in",42],["blog.wiki-topia.com",42],["blog.coinsvalue.net",42],["blog.cookinguide.net",42],["blog.freeoseocheck.com",42],["aylink.co",43],["sugarona.com",44],["nishankhatri.xyz",44],["tinys.click",45],["answerpython.com",45],["gsm-solution.com",45],["h-donghua.com",45],["hindisubbedacademy.com",45],["pkgovjobz.com",45],["ripexbooster.xyz",45],["serial4.com",45],["serial412.blogspot.com",45],["sigmalinks.in",45],["tutorgaming.com",45],["aiimgvlog.fun",46],["appsbull.com",47],["diudemy.com",47],["maqal360.com",47],["mphealth.online",47],["makefreecallsonline.com",47],["androjungle.com",47],["bookszone.in",47],["drakescans.com",47],["shortix.co",47],["msonglyrics.com",47],["app-sorteos.com",47],["bokugents.com",47],["client.pylexnodes.net",47],["btvplus.bg",47],["blog24.me",[48,49]],["coingraph.us",50],["impact24.us",50],["iconicblogger.com",51],["tii.la",52],["kiemlua.com",53],["6movies.net",54],["adsh.cc",54],["afilmyhouse.blogspot.com",54],["ak.sv",54],["animesultra.com",54],["api.webs.moe",54],["apkmody.io",54],["atglinks.com",54],["attvideo.com",54],["backfirstwo.site",[54,127]],["crazyblog.in",54],["divicast.com",54],["embed.meomeo.pw",54],["filmeserialeonline.org",54],["flexyhit.com",54],["foreverwallpapers.com",54],["french-streams.cc",54],["fslinks.org",54],["fstream365.com",54],["hdtoday.to",54],["hinatasoul.com",54],["icelz.newsrade.com",54],["igg-games.com",54],["membed.net",54],["mgnetu.com",54],["movie4kto.net",54],["mp3juice.info",54],["mp3juices.cc",54],["myflixerz.to",54],["oii.io",54],["paidshitforfree.com",54],["pepperlive.info",54],["playertv.net",54],["putlocker68.com",54],["rssing.com",54],["s.to",54],["share.filesh.site",54],["sharkfish.xyz",54],["skidrowcodex.net",54],["sports-stream.site",54],["stream4free.live",54],["tamilmobilemovies.in",54],["tapeadsenjoyer.com",54],["thewatchseries.live",54],["tnmusic.in",54],["travelplanspro.com",54],["tusfiles.com",54],["vid-guard.com",54],["vidsaver.net",54],["vidspeeds.com",54],["viralitytoday.com",54],["voiranime.stream",54],["watchdoctorwhoonline.com",54],["webhostingpost.com",54],["woxikon.in",54],["ylink.bid",54],["ytix.xyz",54],["unblocked.id",56],["listendata.com",57],["7xm.xyz",57],["fastupload.io",57],["azmath.info",57],["wouterplanet.com",58],["androidacy.com",59],["veryfreeporn.com",60],["besthdgayporn.com",61],["drivenime.com",61],["javup.org",61],["shemaleup.net",61],["freeroms.com",62],["soap2day-online.com",62],["austiblox.net",63],["btcbunch.com",64],["teachoo.com",65],["genshinlab.com",66],["fourfourtwo.co.kr",66],["interfootball.co.kr",66],["a-ha.io",66],["cboard.net",66],["jjang0u.com",66],["joongdo.co.kr",66],["viva100.com",66],["thephoblographer.com",66],["newdaily.co.kr",66],["gamingdeputy.com",66],["thesaurus.net",66],["tweaksforgeeks.com",66],["alle-tests.nl",66],["maketecheasier.com",66],["automobile-catalog.com",66],["motorbikecatalog.com",66],["meconomynews.com",66],["brandbrief.co.kr",66],["mlbpark.donga.com",66],["motorgraph.com",66],["heraldcorp.com",66],["allthetests.com",67],["javatpoint.com",67],["issuya.com",67],["topstarnews.net",67],["worldhistory.org",68],["bitcotasks.com",69],["udvl.com",70],["www.chip.de",[71,72]],["topsporter.net",73],["sportshub.to",73],["streamcheck.link",74],["unofficialtwrp.com",75],["bitcosite.com",76],["bitzite.com",76],["easymc.io",77],["yunjiema.top",77],["hacoos.com",78],["bondagevalley.cc",79],["zefoy.com",80],["vidello.net",81],["resizer.myct.jp",82],["gametohkenranbu.sakuraweb.com",83],["jisakuhibi.jp",84],["rank1-media.com",84],["lifematome.blog",85],["fm.sekkaku.net",86],["free-avx.jp",87],["dvdrev.com",88],["betweenjpandkr.blog",89],["nft-media.net",90],["ghacks.net",91],["leak.sx",92],["paste.bin.sx",92],["pornleaks.in",92],["songspk2.info",93],["truyentranhfull.net",94],["nectareousoverelate.com",97],["khoaiphim.com",98],["haafedk2.com",99],["fordownloader.com",99],["jovemnerd.com.br",100],["nicomanga.com",101],["totalcsgo.com",102],["vivamax.asia",103],["manysex.com",104],["gaminginfos.com",105],["tinxahoivn.com",106],["forums-fastunlock.com",107],["automoto.it",108],["codelivly.com",109],["ophim.vip",110],["touguatize.monster",111],["client.falixnodes.net",112],["novelhall.com",113],["hes-goal.net",114],["abc17news.com",115],["adoredbyalex.com",115],["agrodigital.com",115],["al.com",115],["aliontherunblog.com",115],["allaboutthetea.com",115],["allmovie.com",115],["allmusic.com",115],["allthingsthrifty.com",115],["amessagewithabottle.com",115],["androidpolice.com",115],["antyradio.pl",115],["artforum.com",115],["artnews.com",115],["avherald.com",115],["awkward.com",115],["awkwardmom.com",115],["bailiwickexpress.com",115],["barnsleychronicle.com",115],["becomingpeculiar.com",115],["bethcakes.com",115],["betweenenglandandiowa.com",115],["blogher.com",115],["bluegraygal.com",115],["briefeguru.de",115],["carmagazine.co.uk",115],["cattime.com",115],["cbr.com",115],["cbssports.com",115],["celiacandthebeast.com",115],["chaptercheats.com",115],["cleveland.com",115],["collider.com",115],["comingsoon.net",115],["commercialobserver.com",115],["competentedigitale.ro",115],["crafty.house",115],["dailyvoice.com",115],["decider.com",115],["didyouknowfacts.com",115],["dogtime.com",115],["dualshockers.com",115],["dustyoldthing.com",115],["faithhub.net",115],["femestella.com",115],["footwearnews.com",115],["freeconvert.com",115],["frogsandsnailsandpuppydogtail.com",115],["fsm-media.com",115],["funtasticlife.com",115],["fwmadebycarli.com",115],["gamerant.com",115],["gfinityesports.com",115],["givemesport.com",115],["gulflive.com",115],["helloflo.com",115],["homeglowdesign.com",115],["honeygirlsworld.com",115],["hotcars.com",115],["howtogeek.com",115],["insider-gaming.com",115],["insurancejournal.com",115],["jasminemaria.com",115],["kion546.com",115],["lehighvalleylive.com",115],["lettyskitchen.com",115],["lifeinleggings.com",115],["liveandletsfly.com",115],["lizzieinlace.com",115],["localnews8.com",115],["lonestarlive.com",115],["madeeveryday.com",115],["maidenhead-advertiser.co.uk",115],["makeuseof.com",115],["mardomreport.net",115],["masslive.com",115],["melangery.com",115],["milestomemories.com",115],["mlive.com",115],["modernmom.com",115],["momtastic.com",115],["mostlymorgan.com",115],["motherwellmag.com",115],["movieweb.com",115],["muddybootsanddiamonds.com",115],["musicfeeds.com.au",115],["mylifefromhome.com",115],["nationalreview.com",115],["neoskosmos.com",115],["nj.com",115],["nordot.app",115],["nothingbutnewcastle.com",115],["nsjonline.com",115],["nypost.com",115],["oakvillenews.org",115],["observer.com",115],["oregonlive.com",115],["ourlittlesliceofheaven.com",115],["pagesix.com",115],["palachinkablog.com",115],["pennlive.com",115],["pinkonthecheek.com",115],["politicususa.com",115],["predic.ro",115],["puckermom.com",115],["qtoptens.com",115],["realgm.com",115],["reelmama.com",115],["robbreport.com",115],["royalmailchat.co.uk",115],["samchui.com",115],["sandrarose.com",115],["screenrant.com",115],["sheknows.com",115],["sherdog.com",115],["sidereel.com",115],["silive.com",115],["simpleflying.com",115],["sloughexpress.co.uk",115],["spacenews.com",115],["sportsgamblingpodcast.com",115],["spotofteadesigns.com",115],["stacysrandomthoughts.com",115],["ssnewstelegram.com",115],["superherohype.com",115],["syracuse.com",115],["tablelifeblog.com",115],["thebeautysection.com",115],["thecelticblog.com",115],["thecurvyfashionista.com",115],["thefashionspot.com",115],["thegamer.com",115],["thegamescabin.com",115],["thenerdyme.com",115],["thenonconsumeradvocate.com",115],["theprudentgarden.com",115],["thethings.com",115],["timesnews.net",115],["topspeed.com",115],["toyotaklub.org.pl",115],["travelingformiles.com",115],["tutsnode.org",115],["tvline.com",115],["viralviralvideos.com",115],["wannacomewith.com",115],["wimp.com",115],["windsorexpress.co.uk",115],["woojr.com",115],["worldoftravelswithkids.com",115],["xda-developers.com",115],["cheatsheet.com",116],["pwinsider.com",116],["baeldung.com",116],["bagi.co.in",117],["keran.co",117],["biblestudytools.com",118],["christianheadlines.com",118],["ibelieve.com",118],["kuponigo.com",119],["kimcilonly.site",120],["kimcilonly.link",120],["cryptoearns.com",121],["inxxx.com",122],["ipaspot.app",123],["embedwish.com",124],["filelions.live",124],["leakslove.net",124],["jenismac.com",125],["vxetable.cn",126],["jewelavid.com",127],["nizarstream.com",127],["snapwordz.com",128],["toolxox.com",128],["rl6mans.com",128],["idol69.net",128],["plumbersforums.net",129],["123movies57.online",130],["gulio.site",131],["mediaset.es",132],["izlekolik.net",133],["donghuaworld.com",134],["letsdopuzzles.com",135],["tainio-mania.online",136],["hes-goals.io",137],["pkbiosfix.com",137],["casi3.xyz",137],["rediff.com",138],["dzapk.com",139],["darknessporn.com",140],["familyporner.com",140],["freepublicporn.com",140],["pisshamster.com",140],["punishworld.com",140],["xanimu.com",140],["pig69.com",141],["cosplay18.pics",141],["javhdo.net",142],["eroticmoviesonline.me",143],["teleclub.xyz",144],["ecamrips.com",145],["showcamrips.com",145],["9animetv.to",146],["jornadaperfecta.com",147],["loseart.com",148],["sousou-no-frieren.com",149],["veev.to",150],["intro-hd.net",151],["monacomatin.mc",151],["nodo313.net",151],["unite-guide.com",152],["thebullspen.com",153],["botcomics.com",154],["cefirates.com",154],["chandlerorchards.com",154],["comicleaks.com",154],["marketdata.app",154],["monumentmetals.com",154],["tapmyback.com",154],["ping.gg",154],["revistaferramental.com.br",154],["hawpar.com",154],["alpacafinance.org",[154,155]],["nookgaming.com",154],["enkeleksamen.no",154],["kvest.ee",154],["creatordrop.com",154],["panpots.com",154],["cybernetman.com",154],["bitdomain.biz",154],["gerardbosch.xyz",154],["fort-shop.kiev.ua",154],["accuretawealth.com",154],["resourceya.com",154],["tracktheta.com",154],["camberlion.com",154],["tt.live",155],["future-fortune.com",155],["abhijith.page",155],["madrigalmaps.com",155],["adventuretix.com",155],["panprices.com",156],["intercity.technology",156],["freelancer.taxmachine.be",156],["adria.gg",156],["fjlaboratories.com",156],["emanualonline.com",156],["proboards.com",157],["winclassic.net",157],["abema.tv",159]]);

const entitiesMap = new Map([["kimcartoon",3],["pahe",[4,13]],["soap2day",4],["hqq",6],["waaw",6],["mhdsports",8],["mhdsportstv",8],["mhdtvsports",8],["mhdtvworld",8],["mhdtvmax",8],["mhdstream",8],["reset-scans",8],["teluguflix",8],["poplinks",[8,47]],["pixhost",9],["viprow",[12,13,54]],["cloudvideotv",[12,54]],["vidsrc",[12,54]],["123-movies",13],["123movieshd",13],["123movieshub",13],["123moviesme",13],["1337x",[13,26]],["1stream",13],["1tamilmv",13],["2ddl",13],["2umovies",13],["3hiidude",13],["4stream",13],["5movies",13],["7hitmovies",13],["9xmovie",13],["aagmaal",[13,54]],["adblockeronstape",13],["adblockeronstreamtape",13],["adblockplustape",13],["adblockstreamtape",13],["adblockstrtape",13],["adblockstrtech",13],["adblocktape",13],["adcorto",13],["alexsports",13],["alexsportss",13],["alexsportz",13],["animepahe",13],["animesanka",13],["animixplay",13],["aniplay",13],["antiadtape",13],["asianclub",13],["ask4movie",13],["atomixhq",[13,54]],["atomohd",13],["beinmatch",[13,20]],["bhaai",13],["buffstreams",13],["canalesportivo",13],["clickndownload",13],["clicknupload",13],["daddylive",[13,54]],["daddylivehd",[13,54]],["desiremovies",13],["devlib",13],["divxtotal",13],["divxtotal1",13],["dvdplay",[13,54]],["elixx",13],["enjoy4k",13],["estrenosflix",13],["estrenosflux",13],["estrenosgo",13],["f1stream",13],["fbstream",13],["file4go",13],["filmyzilla",[13,54]],["findav",13],["findporn",13],["flixmaza",13],["flizmovies",13],["freetvsports",13],["fullymaza",13],["g3g",13],["gotxx",13],["grantorrent",13],["hdmoviesfair",[13,54]],["hdmoviesflix",13],["hiidudemoviez",13],["imgsen",13],["imgsto",13],["incest",13],["incestflix",13],["itopmusic",13],["javmost",13],["keeplinks",13],["keepvid",13],["keralahd",13],["khatrimazaful",13],["khatrimazafull",13],["leechall",13],["linkshorts",13],["mangovideo",13],["masaporn",13],["miniurl",13],["mirrorace",13],["mixdroop",13],["mixdrop",13],["mkvcage",13],["mlbstream",13],["mlsbd",13],["mmsbee",13],["motogpstream",13],["movieplex",13],["movierulzlink",13],["movies123",13],["moviesflix",13],["moviesmeta",13],["moviessources",13],["moviesverse",13],["moviezwaphd",13],["mrunblock",13],["nbastream",13],["newmovierulz",13],["nflstream",13],["nhlstream",13],["noblocktape",13],["nocensor",13],["onlyfams",13],["ouo",13],["pctfenix",[13,54]],["pctnew",[13,54]],["peliculas24",13],["pelisplus",13],["piratebay",13],["plyjam",13],["plylive",13],["plyvdo",13],["pornhoarder",13],["prbay",13],["projectfreetv",13],["proxybit",13],["psarips",13],["racaty",13],["remaxhd",13],["rintor",13],["rnbxclusive",13],["rnbxclusive0",13],["rnbxclusive1",13],["rojadirecta",13],["rojadirectaenvivo",13],["rugbystreams",13],["sadisflix",13],["safetxt",13],["shadowrangers",13],["shahi4u",13],["shahid4u1",13],["shahid4uu",13],["shavetape",13],["shortearn",13],["shorten",13],["shorttey",13],["shortzzy",13],["skymovieshd",13],["socceronline",[13,54]],["softarchive",13],["sports-stream",13],["sshhaa",13],["stapadblockuser",13],["stape",13],["stapewithadblock",13],["starmusiq",13],["strcloud",13],["streamadblocker",[13,54]],["streamadblockplus",13],["streamcdn",13],["streamhub",13],["streamsport",13],["streamta",13],["streamtape",13],["streamtapeadblockuser",13],["strikeout",13],["strtape",13],["strtapeadblock",13],["strtapeadblocker",13],["strtapewithadblock",13],["strtpe",13],["swatchseries",13],["tabooflix",13],["tennisstreams",13],["themoviesflix",13],["thepiratebay",13],["thisav",13],["tmearn",13],["toonanime",13],["torlock",13],["tormalayalam",13],["torrentz2eu",13],["tutelehd",13],["tvply",13],["u4m",13],["ufcstream",13],["unblocknow",13],["uploadbuzz",13],["usagoals",13],["vexmoviex",13],["vidclouds",13],["vidlox",13],["vipbox",[13,54]],["vipboxtv",[13,54]],["vipleague",13],["watch-series",13],["watchseries",13],["xclusivejams",13],["xmoviesforyou",13],["youdbox",13],["ytmp3eu",13],["yts-subs",13],["yts",13],["zooqle",13],["dutchycorp",14],["dood",[24,54]],["doodstream",24],["dooood",[24,54]],["shrinke",28],["shrinkme",28],["mydverse",45],["123movies",54],["123moviesla",54],["123movieweb",54],["2embed",54],["720pstream",54],["9xmovies",54],["adshort",54],["allmovieshub",54],["asianplay",54],["atishmkv",54],["cricstream",54],["crictime",54],["databasegdriveplayer",54],["extramovies",54],["faselhd",54],["filemoon",54],["filmy",54],["filmyhit",54],["filmywap",54],["fmovies",54],["gdplayer",54],["gdriveplayer",54],["goku",54],["gomovies",54],["gowatchseries",54],["hindilinks4u",54],["hurawatch",54],["jalshamoviezhd",54],["livecricket",54],["mkvcinemas",54],["movies2watch",54],["moviespapa",54],["mp4moviez",54],["mydownloadtube",54],["nsw2u",54],["nuroflix",54],["o2tvseries",54],["o2tvseriesz",54],["pirlotv",54],["poscitech",54],["primewire",54],["serienstream",54],["sflix",54],["shahed4u",54],["shaheed4u",54],["speedostream",54],["sportcast",54],["sportskart",54],["streamingcommunity",54],["tamilarasan",54],["tamilfreemp3songs",54],["tamilprinthd",54],["torrentdosfilmes",54],["uploadrar",54],["uqload",54],["vidcloud9",54],["vido",54],["vidoo",54],["vudeo",54],["vumoo",54],["watchomovies",[54,62]],["yesmovies",54],["kickass",55],["cine-calidad",60],["actvid",95]]);

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
