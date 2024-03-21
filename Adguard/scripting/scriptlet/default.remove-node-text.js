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

const argsList = [["script","DisplayAcceptableAdIfAdblocked"],["script","/==undefined.*body/"],["script","style"],["script","Promise"],["script","Number.isSafeInteger"],["script","Reflect"],["script","document.write"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","deblocker"],["script","exdynsrv"],["script","/adb/i"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/document\\.createElement|\\.banner-in/"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|adblock/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","alert"],["script","/adblock|popunder/"],["script","'.ains'"],["script","/fetch|adb/i"],["script","window.open"],["script","throw Error","condition","/^\\s*\\(?function.*\\);\\}\\}\\(\\)\\)\\);/"],["script",";break;case $."],["script","zaraz"],["script","shown_at"],["script","adblockimg"],["script","showAd"],["script","document.createElement(\"script\")"],["script","googlesyndication"],["script","justDetectAdblock"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","queue.addFile"],["script","/bypass.php"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","AdbModel"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script","adb_detected"],["script","Adblock"],["script",";}}};break;case $."],["style","text-decoration"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","charCodeAt"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","popunder"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","KCgpPT57bGV0IGU"],["script","error-report.com"],["script","adShield"],["script","AdblockRegixFinder"],["script","serve"],["script",".slice(0, -1); }"],["script","(Math.PI).toFixed(10).slice(0, -1);"],["script","/ConsoleBan|alert|AdBlocker/"],["script","runPop"],["script","mdpDeblocker"],["script","alert","condition","adblock"],["script","adb"],["script","await fetch"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","zfgloaded"],["script","ai_adb"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/modal|popupads/"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","ad_block"],["script","app_checkext"],["script","clientHeight"],["script","/url_key|adHtml/"],["script","pop.target"],["script","/showadblock|_0x/"],["script","axios"],["script","ad block"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","AaDetector"],["script","AdBlock"],["script","Symbol.iterator"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","detectAdBlock"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","document.head.appendChild"],["script","Number"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","constructor"],["script","/adbl/i"],["script","detect"],["script","fetch"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","vglnk"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","NREUM"]];

const hostnamesMap = new Map([["alpin.de",0],["boersennews.de",0],["chefkoch.de",0],["chip.de",0],["clever-tanken.de",0],["desired.de",0],["donnerwetter.de",0],["fanfiktion.de",0],["focus.de",0],["formel1.de",0],["frustfrei-lernen.de",0],["gewinnspiele.tv",0],["giga.de",0],["gut-erklaert.de",0],["kino.de",0],["messen.de",0],["nickles.de",0],["nordbayern.de",0],["spielfilm.de",0],["teltarif.de",0],["unsere-helden.com",0],["weltfussball.at",0],["aupetitparieur.com",1],["allthingsvegas.com",1],["100percentfedup.com",1],["beforeitsnews.com",1],["concomber.com",1],["conservativebrief.com",1],["conservativefiringline.com",1],["dailylol.com",1],["funnyand.com",1],["letocard.fr",1],["mamieastuce.com",1],["meilleurpronostic.fr",1],["patriotnationpress.com",1],["toptenz.net",1],["vitamiiin.com",1],["writerscafe.org",1],["populist.press",1],["dailytruthreport.com",1],["livinggospeldaily.com",1],["first-names-meanings.com",1],["welovetrump.com",1],["thehayride.com",1],["thelibertydaily.com",1],["thepoke.co.uk",1],["thepolitistick.com",1],["theblacksphere.net",1],["shark-tank.com",1],["naturalblaze.com",1],["greatamericanrepublic.com",1],["dailysurge.com",1],["truthlion.com",1],["flagandcross.com",1],["westword.com",1],["republicbrief.com",1],["freedomfirstnetwork.com",1],["phoenixnewtimes.com",1],["designbump.com",1],["clashdaily.com",1],["madworldnews.com",1],["reviveusa.com",1],["sonsoflibertymedia.com",1],["thedesigninspiration.com",1],["videogamesblogger.com",1],["protrumpnews.com",1],["thepalmierireport.com",1],["kresy.pl",1],["thepatriotjournal.com",1],["gellerreport.com",1],["thegatewaypundit.com",1],["wltreport.com",1],["miaminewtimes.com",1],["politicalsignal.com",1],["rightwingnews.com",1],["bigleaguepolitics.com",1],["comicallyincorrect.com",1],["moviepilot.de",3],["yts.mx",6],["upornia.com",8],["pinsystem.co.uk",9],["elrellano.com",9],["tinyppt.com",9],["downfile.site",9],["expertvn.com",9],["trangchu.news",9],["bharathwick.com",9],["descargaspcpro.net",9],["dx-tv.com",9],["rt3dmodels.com",9],["plc4me.com",9],["blisseyhusbands.com",9],["madaradex.org",9],["franceprefecture.fr",9],["uiiumovies.net",9],["jazbaat.in",9],["learnmany.in",9],["loaninsurehub.com",9],["amanguides.com",[9,45]],["highkeyfinance.com",[9,45]],["appkamods.com",9],["techacode.com",9],["djqunjab.in",9],["3dmodelshare.org",9],["nulleb.com",9],["asiaon.top",9],["coursesghar.com",9],["thecustomrom.com",9],["snlookup.com",9],["bingotingo.com",9],["ghior.com",9],["3dmili.com",9],["karanpc.com",9],["plc247.com",9],["hiraethtranslation.com",9],["apkdelisi.net",9],["javindo.eu.org",9],["chindohot.site",9],["freepasses.org",9],["tomarnarede.pt",9],["basketballbuzz.ca",9],["dribbblegraphics.com",9],["kemiox.com",9],["checkersmenu.us",9],["teksnologi.com",9],["dollareuro.live",9],["eporner.com",11],["germancarforum.com",12],["cybercityhelp.in",12],["streamnoads.com",[13,14,55]],["bowfile.com",13],["cloudvideo.tv",[13,55]],["coloredmanga.com",13],["embedstream.me",[13,14,55]],["exeo.app",13],["hiphopa.net",[13,14]],["megaup.net",13],["tv247.us",[13,14]],["uploadhaven.com",13],["userscloud.com",[13,55]],["mdfx9dc8n.net",14],["mdzsmutpcvykb.net",14],["mixdrop21.net",14],["mixdropjmk.pw",14],["y2tube.pro",14],["123movies4u.site",14],["1337xporn.com",14],["141jav.com",14],["1bit.space",14],["1bitspace.com",14],["38dh2.top",14],["3dporndude.com",14],["4archive.org",14],["4horlover.com",14],["560pmovie.com",14],["60fps.xyz",14],["85tube.com",14],["85videos.com",14],["8xlinks.click",14],["a2zcrackworld.com",14],["aazzz.xyz",14],["acefile.co",14],["actusports.eu",14],["adclickersbot.com",14],["adricami.com",14],["adslink.pw",14],["adultstvlive.com",14],["adz7short.space",14],["aeblender.com",14],["ahdafnews.blogspot.com",14],["ak47sports.com",14],["akuma.moe",14],["allplayer.tk",14],["allstreaming.online",14],["amadoras.cf",14],["amadorasdanet.shop",14],["amateurblog.tv",14],["androidadult.com",14],["anhsexjav.xyz",14],["anidl.org",14],["anime-loads.org",14],["animeblkom.net",14],["animefire.plus",14],["animelek.me",14],["animeshouse.net",14],["animespire.net",14],["animestotais.xyz",14],["animeyt.es",14],["anroll.net",14],["anymoviess.xyz",14],["aotonline.org",14],["asenshu.com",14],["asialiveaction.com",14],["asianclipdedhd.net",14],["askim-bg.com",14],["asumsikedaishop.com",14],["avcrempie.com",14],["avseesee.com",14],["gettapeads.com",14],["backfirstwo.com",14],["bajarjuegospcgratis.com",14],["balkanportal.net",14],["balkanteka.net",14],["bdnewszh.com",[14,55]],["belowporn.com",14],["bestclaimtrx.xyz",14],["bestgirlsexy.com",14],["bestnhl.com",14],["bestporn4free.com",14],["bestporncomix.com",14],["bet36.es",14],["bikinitryon.net",14],["birdurls.com",14],["bitsearch.to",14],["blackcockadventure.com",14],["blackcockchurch.org",14],["blackporncrazy.com",14],["blizzboygames.net",14],["blizzpaste.com",14],["blkom.com",14],["blog-peliculas.com",14],["blogtrabalhista.com",14],["blurayufr.xyz",14],["bobsvagene.club",14],["bolly4umovies.click",14],["bonusharian.pro",14],["brilian-news.id",14],["brupload.net",14],["bucitana.com",14],["cablegratis.online",14],["camchickscaps.com",14],["camgirlcum.com",14],["camgirls.casa",14],["cashurl.in",14],["castingx.net",14],["ccurl.net",[14,55]],["celebrity-leaks.net",14],["cgpelis.net",14],["charexempire.com",14],["clasico.tv",14],["clik.pw",14],["coin-free.com",[14,42]],["coins100s.fun",14],["comicsmanics.com",14],["compucalitv.com",14],["coolcast2.com",14],["cosplaytab.com",14],["countylocalnews.com",14],["cpmlink.net",14],["crackstreamshd.click",14],["crespomods.com",14],["crisanimex.com",14],["crunchyscan.fr",14],["cuevana3.fan",14],["cuevana3hd.com",14],["cumception.com",14],["curvaweb.com",14],["cutpaid.com",14],["cypherscans.xyz",[14,55]],["datawav.club",14],["daughtertraining.com",14],["deepgoretube.site",14],["deltabit.co",14],["depvailon.com",14],["derleta.com",14],["desivdo.com",14],["desixx.net",14],["detikkebumen.com",14],["deutschepornos.me",14],["diasoft.xyz",14],["directupload.net",14],["diskusscan.com",14],["dixva.com",14],["dlhd.sx",14],["doctormalay.com",14],["dofusports.xyz",14],["dogemate.com",14],["doods.cam",14],["doodskin.lat",14],["downloadrips.com",14],["downvod.com",14],["dphunters.mom",14],["dragontranslation.com",14],["duddes.xyz",14],["dvdfullestrenos.com",14],["easylinks.in",14],["ebookbb.com",14],["ebookhunter.net",14],["egyanime.com",14],["egygost.com",14],["egyshare.cc",14],["ekasiwap.com",14],["electro-torrent.pl",14],["elil.cc",14],["embed4u.xyz",14],["eplayer.click",14],["erovoice.us",14],["eroxxx.us",14],["estrenosdoramas.net",14],["everia.club",14],["everythinginherenet.blogspot.com",14],["extrafreetv.com",14],["extremotvplay.com",14],["fapinporn.com",14],["fapptime.com",14],["fashionblog.tv",14],["fastreams.live",14],["faucethero.com",14],["fembed.com",14],["femdom-joi.com",14],["fileone.tv",14],["film1k.com",14],["filmeonline2023.net",14],["filmesonlinex.org",14],["filmesonlinexhd.biz",[14,55]],["filmovitica.com",14],["filmymaza.blogspot.com",14],["filthy.family",14],["firstmovies.to",14],["fixfinder.click",14],["flostreams.xyz",14],["flyfaucet.com",14],["footyhunter.lol",14],["footyhunter3.xyz",[14,55]],["forex-golds.com",14],["forex-trnd.com",14],["forumchat.club",14],["forumlovers.club",14],["freemoviesonline.biz",14],["freeomovie.co.in",14],["freeomovie.to",14],["freeporncomic.net",14],["freepornhdonlinegay.com",14],["freeproxy.io",14],["freeuse.me",14],["freeusexporn.com",14],["fsicomics.com",14],["gambarbogel.xyz",14],["gamepcfull.com",14],["gameronix.com",14],["gamesfullx.com",14],["gameshdlive.net",14],["gameshdlive.xyz",14],["gamesmountain.com",14],["gamesrepacks.com",14],["gamingguru.fr",14],["gamovideo.com",14],["garota.cf",14],["gaydelicious.com",14],["gaypornmasters.com",14],["gaysex69.net",14],["gemstreams.com",14],["get-to.link",14],["girlscanner.org",14],["giurgiuveanul.ro",14],["gledajcrtace.xyz",14],["gocast2.com",14],["gomo.to",14],["gostosa.cf",14],["gtlink.co",14],["gwiazdypornosow.pl",14],["haho.moe",14],["hatsukimanga.com",14],["hayhd.net",14],["hdsaprevodom.com",14],["hdstreamss.club",14],["hentais.tube",14],["hentaistream.co",14],["hentaitk.net",14],["hentaitube.online",14],["hentaiworld.tv",14],["hesgoal.tv",14],["hexupload.net",14],["hhkungfu.tv",14],["highlanderhelp.com",14],["hindimean.com",14],["hindimovies.to",[14,55]],["hiperdex.com",14],["hispasexy.org",14],["hitomi.la",14],["hitprn.com",14],["hoca4u.com",14],["hollymoviehd.cc",14],["hoodsite.com",14],["hopepaste.download",14],["hornylips.com",14],["hotgranny.live",14],["hotmama.live",14],["hqcelebcorner.net",14],["huren.best",14],["hwnaturkya.com",[14,55]],["hxfile.co",[14,55]],["igfap.com",14],["ihdstreams.xyz",14],["iklandb.com",14],["illink.net",14],["imgkings.com",14],["imgsex.xyz",14],["imx.to",14],["influencersgonewild.org",14],["infosgj.free.fr",14],["investnewsbrazil.com",14],["itdmusics.com",14],["itsuseful.site",14],["itunesfre.com",14],["iwatchfriendsonline.net",[14,97]],["jackstreams.com",14],["jatimupdate24.com",14],["javcl.com",14],["javf.net",14],["javhay.net",14],["javhoho.com",14],["javhun.com",14],["javleak.com",14],["javporn.best",14],["javsex.to",14],["javtiful.com",14],["jimdofree.com",14],["jiofiles.org",14],["jorpetz.com",14],["journalyc.online",14],["jp-films.com",14],["jpop80ss3.blogspot.com",14],["jpopsingles.eu",14],["kantotflix.net",14],["kantotinyo.com",14],["kaoskrew.org",14],["kaplog.com",14],["keralatvbox.com",14],["kickassanimes.io",14],["kimochi.info",14],["kimochi.tv",14],["kinemania.tv",14],["konstantinova.net",14],["koora-online.live",14],["kunmanga.com",14],["kutmoney.com",14],["kwithsub.com",14],["ladangreceh.xyz",14],["lat69.me",14],["latinblog.tv",14],["latinomegahd.net",14],["lazyfaucet.com",14],["leechpremium.link",14],["legendas.dev",14],["legendei.net",14],["lightdlmovies.blogspot.com",14],["lighterlegend.com",14],["linclik.com",14],["linkebr.com",14],["linkrex.net",14],["links.worldfree4u-lol.online",14],["linksfy.co",14],["lody.ink",14],["lovesomecommunity.com",14],["lulustream.com",[14,55]],["luluvdo.com",[14,55]],["luzcameraeacao.shop",14],["manga-oni.com",14],["mangaboat.com",14],["mangagenki.me",14],["mangahere.onl",14],["mangaweb.xyz",14],["mangoporn.net",14],["manhwahentai.me",14],["masahub.com",14],["masahub.net",14],["maturegrannyfuck.com",14],["mdy48tn97.com",14],["mediapemersatubangsa.com",14],["mega-mkv.com",14],["megapastes.com",14],["megapornpics.com",14],["messitv.net",14],["meusanimes.net",14],["milfmoza.com",14],["milfzr.com",14],["millionscast.com",14],["mimaletamusical.blogspot.com",14],["mitly.us",14],["mkv-pastes.com",14],["modb.xyz",14],["monaskuliner.ac.id",14],["moredesi.com",14],["movgotv.net",14],["movi.pk",14],["movieswbb.com",14],["moviewatch.com.pk",14],["mp4upload.com",14],["mrskin.live",14],["multicanaistv.com",14],["mundowuxia.com",14],["myeasymusic.ir",14],["myonvideo.com",14],["myyouporn.com",14],["narutoget.info",14],["naughtypiss.com",14],["nerdiess.com",14],["new-fs.eu",14],["newtorrentgame.com",14],["nflstreams.me",14],["niaomea.me",[14,55]],["nicekkk.com",14],["nicesss.com",14],["nlegs.com",14],["nolive.me",[14,55]],["nopay.info",14],["nopay2.info",[14,137]],["notformembersonly.com",14],["novamovie.net",14],["novelpdf.xyz",14],["novelssites.com",[14,55]],["novelup.top",14],["nsfwr34.com",14],["nu6i-bg-net.com",14],["nudebabesin3d.com",14],["nukedfans.com",14],["nuoga.eu",14],["nzbstars.com",14],["ohjav.com",14],["ojearnovelas.com",14],["okanime.xyz",14],["olarixas.xyz",14],["oldbox.cloud",14],["olweb.tv",14],["olympicstreams.me",14],["on9.stream",14],["oncast.xyz",14],["onepiece-mangaonline.com",14],["onifile.com",14],["onionstream.live",14],["onlinesaprevodom.net",14],["onlyfullporn.video",14],["onplustv.live",14],["originporn.com",14],["ovagames.com",14],["ovamusic.com",14],["owllink.net",14],["packsporn.com",14],["pahaplayers.click",14],["palimas.org",14],["pandafiles.com",14],["papahd.club",14],["papahd1.xyz",14],["password69.com",14],["paste3.org",14],["pastemytxt.com",14],["payskip.org",14],["peeplink.in",14],["peliculasmx.net",14],["pervertgirlsvideos.com",14],["pervyvideos.com",14],["phim12h.com",14],["picdollar.com",14],["pickteenz.com",14],["pics4you.net",14],["picsxxxporn.com",14],["pinayscandalz.com",14],["pinkueiga.net",14],["piratefast.xyz",14],["piratehaven.xyz",14],["pirateiro.com",14],["pirlotvonline.org",14],["playtube.co.za",14],["plugintorrent.com",14],["pmvzone.com",14],["porndish.com",14],["pornez.net",14],["pornfetishbdsm.com",14],["pornfits.com",14],["pornhd720p.com",14],["pornobr.club",14],["pornobr.ninja",14],["pornodominicano.net",14],["pornofaps.com",14],["pornoflux.com",14],["pornotorrent.com.br",14],["pornredit.com",14],["pornstarsyfamosas.es",14],["pornstreams.co",14],["porntn.com",14],["pornxbit.com",14],["pornxday.com",14],["portaldasnovinhas.shop",14],["portugues-fcr.blogspot.com",14],["poscishd.online",14],["poscitesch.com",[14,55]],["poseyoung.com",14],["pover.org",14],["proxyninja.org",14],["pubfilmz.com",14],["publicsexamateurs.com",14],["punanihub.com",14],["putlocker5movies.org",14],["pxxbay.com",14],["r18.best",14],["ragnaru.net",14],["rapbeh.net",14],["rapelust.com",14],["rapload.org",14],["read-onepiece.net",14],["retro-fucking.com",14],["retrotv.org",14],["robaldowns.com",14],["rockdilla.com",14],["rojadirectatvenvivo.com",14],["rojitadirecta.blogspot.com",14],["romancetv.site",14],["rule34.club",14],["rule34hentai.net",14],["rumahbokep-id.com",14],["safego.cc",14],["sakurafile.com",14],["satoshi-win.xyz",14],["scat.gold",14],["scatfap.com",14],["scatkings.com",14],["scnlog.me",14],["scripts-webmasters.net",14],["serie-turche.com",14],["serijefilmovi.com",14],["sexcomics.me",14],["sexdicted.com",14],["sexgay18.com",14],["sexofilm.co",14],["sextgem.com",14],["sextubebbw.com",14],["sgpics.net",14],["shadowrangers.live",14],["shahee4u.cam",14],["shahiid-anime.net",14],["shemale6.com",14],["shinden.pl",14],["short.es",14],["showmanga.blog.fc2.com",14],["shrt10.com",14],["shurt.pw",14],["sideplusleaks.net",14],["silverblog.tv",14],["silverpic.com",14],["sinhalasub.life",14],["sinsitio.site",14],["sinvida.me",14],["skidrowcpy.com",14],["skidrowfull.com",14],["skidrowreloaded.com",14],["slut.mom",14],["smallencode.me",14],["smoner.com",14],["smplace.com",14],["soccerinhd.com",14],["socceron.name",14],["softairbay.com",14],["sokobj.com",14],["songsio.com",14],["souexatasmais.com",14],["sportbar.live",14],["sportea.online",14],["sportskart.xyz",14],["sportstream1.cfd",14],["sporttuna.site",14],["srt.am",14],["srts.me",14],["stakes100.xyz",14],["stbemuiptv.com",14],["stockingfetishvideo.com",14],["stream.crichd.vip",14],["stream.lc",14],["stream25.xyz",14],["streambee.to",14],["streamcenter.pro",14],["streamers.watch",14],["streamgo.to",14],["streamkiste.tv",14],["streamoporn.xyz",14],["streamoupload.xyz",14],["streamservicehd.click",14],["streamvid.net",[14,22]],["subtitleporn.com",14],["subtitles.cam",14],["suicidepics.com",14],["supertelevisionhd.com",14],["supexfeeds.com",14],["swzz.xyz",14],["sxnaar.com",14],["tabooporns.com",14],["taboosex.club",14],["tapeantiads.com",14],["tapeblocker.com",14],["tapenoads.com",14],["tapewithadblock.org",[14,159]],["teamos.xyz",14],["teen-wave.com",14],["teenporncrazy.com",14],["telegramgroups.xyz",14],["telenovelasweb.com",14],["tensei-shitara-slime-datta-ken.com",14],["tfp.is",14],["tgo-tv.co",[14,55]],["thaihotmodels.com",14],["theblueclit.com",14],["thebussybandit.com",14],["theicongenerator.com",14],["thelastdisaster.vip",14],["thepiratebay0.org",14],["thepiratebay10.info",14],["thesexcloud.com",14],["thothub.today",14],["tightsexteens.com",14],["tojav.net",14],["tokyoblog.tv",14],["tonnestreamz.xyz",14],["top16.net",14],["topvideosgay.com",14],["torrage.info",14],["torrents.vip",14],["torrsexvid.com",14],["tpb-proxy.xyz",14],["trannyteca.com",14],["trendytalker.com",14],["tumanga.net",14],["turbogvideos.com",14],["turbovid.me",14],["turkishseriestv.org",14],["turksub24.net",14],["tutele.sx",14],["tutelehd3.xyz",14],["tvglobe.me",14],["tvpclive.com",14],["tvs-widget.com",14],["tvseries.video",14],["ucptt.com",14],["ufaucet.online",14],["ufcfight.online",14],["uhdgames.xyz",14],["ultrahorny.com",14],["ultraten.net",14],["unblockweb.me",14],["underhentai.net",14],["uniqueten.net",14],["upbaam.com",14],["upstream.to",14],["valeriabelen.com",14],["verdragonball.online",14],["vfxmed.com",14],["video.az",14],["videostreaming.rocks",14],["videowood.tv",14],["vidorg.net",14],["vidtapes.com",14],["vidz7.com",14],["vikistream.com",14],["vikv.net",14],["virpe.cc",14],["visifilmai.org",14],["viveseries.com",14],["vladrustov.sx",14],["volokit2.com",14],["vstorrent.org",14],["w-hentai.com",14],["watchaccordingtojimonline.com",14],["watchbrooklynnine-nine.com",14],["watchdowntonabbeyonline.com",14],["watchelementaryonline.com",14],["watcheronline.net",14],["watchgleeonline.com",14],["watchhowimetyourmother.online",14],["watchjavidol.com",14],["watchkobestreams.info",14],["watchlostonline.net",14],["watchlouieonline.com",14],["watchmadmenonline.com",14],["watchmonkonline.com",14],["watchonceuponatimeonline.com",14],["watchparksandrecreation.net",14],["watchprettylittleliarsonline.com",14],["watchrulesofengagementonline.com",14],["watchthekingofqueens.com",14],["watchthemiddleonline.com",14],["watchtvchh.xyz",14],["webcamrips.com",14],["wickedspot.org",14],["wincest.xyz",14],["witanime.best",14],["wolverdon.fun",14],["wolverdonx.com",14],["wordcounter.icu",14],["worldcupstream.pm",14],["worldmovies.store",14],["worldstreams.click",14],["wpdeployit.com",14],["wqstreams.tk",14],["wwwsct.com",14],["xanimeporn.com",14],["xblog.tv",14],["xn--verseriesespaollatino-obc.online",14],["xn--xvideos-espaol-1nb.com",14],["xpornium.net",14],["xsober.com",14],["xvip.lat",14],["xxgasm.com",14],["xxvideoss.org",14],["xxx18.uno",14],["xxxdominicana.com",14],["xxxfree.watch",14],["xxxmax.net",14],["xxxwebdlxxx.top",14],["xxxxvideo.uno",14],["y2b.wiki",14],["yabai.si",14],["yadixv.com",14],["yayanimes.net",14],["yeshd.net",14],["yodbox.com",14],["youjax.com",14],["youpits.xyz",14],["yourdailypornvideos.ws",14],["yourupload.com",14],["ytstv.me",14],["ytstvmovies.co",14],["ytstvmovies.xyz",14],["ytsyify.co",14],["ytsyifymovie.com",14],["zerion.cc",14],["zerocoin.top",14],["zitss.xyz",14],["zpaste.net",14],["zplayer.live",14],["faucet.ovh",15],["oko.sh",16],["washingtonpost.com",17],["bigbtc.win",18],["cryptofun.space",18],["gosexpod.com",19],["sexo5k.com",20],["truyen-hentai.com",20],["theshedend.com",22],["rsadnetworkinfo.com",22],["rsinsuranceinfo.com",22],["rsfinanceinfo.com",22],["rsgamer.app",22],["rssoftwareinfo.com",22],["rshostinginfo.com",22],["rseducationinfo.com",22],["zeroupload.com",22],["securenetsystems.net",22],["miniwebtool.com",22],["bchtechnologies.com",22],["spiegel.de",23],["appnee.com",24],["d0000d.com",25],["d000d.com",25],["d0o0d.com",25],["do0od.com",25],["doods.pro",25],["ds2play.com",25],["ds2video.com",25],["apkmirror.com",[26,67]],["onlyfaucet.com",27],["livecamrips.com",28],["smutty.com",28],["down.dataaps.com",28],["filmweb.pl",28],["infinityscans.xyz",[29,30]],["infinityscans.net",[29,30]],["j8jp.com",31],["musichq.pe",32],["sekaikomik.bio",32],["visionpapers.org",33],["fdownloader.net",34],["mielec.pl",35],["camsrip.com",36],["iisfvirtual.in",36],["starxinvestor.com",36],["beatsnoop.com",36],["fetchpik.com",36],["hackerranksolution.in",36],["stfly.xyz",37],["treasl.com",38],["mrbenne.com",39],["webhostingpost.com",[40,55]],["tophostingapp.com",40],["digitalmarktrend.com",40],["kenzo-flowertag.com",41],["mdn.lol",41],["btcbitco.in",42],["btcsatoshi.net",42],["cempakajaya.com",42],["crypto4yu.com",42],["gainl.ink",42],["manofadan.com",42],["readbitcoin.org",42],["wiour.com",42],["kienthucrangmieng.com",42],["tremamnon.com",42],["btc25.org",42],["tron-free.com",42],["bitsmagic.fun",42],["ourcoincash.xyz",42],["hynews.biz",42],["blog.cryptowidgets.net",43],["blog.insurancegold.in",43],["blog.wiki-topia.com",43],["blog.coinsvalue.net",43],["blog.cookinguide.net",43],["blog.freeoseocheck.com",43],["aylink.co",44],["sugarona.com",45],["nishankhatri.xyz",45],["tinys.click",46],["answerpython.com",46],["gsm-solution.com",46],["h-donghua.com",46],["hindisubbedacademy.com",46],["pkgovjobz.com",46],["ripexbooster.xyz",46],["serial4.com",46],["serial412.blogspot.com",46],["sigmalinks.in",46],["tutorgaming.com",46],["aiimgvlog.fun",47],["appsbull.com",48],["diudemy.com",48],["maqal360.com",48],["mphealth.online",48],["makefreecallsonline.com",48],["androjungle.com",48],["bookszone.in",48],["drakescans.com",48],["shortix.co",48],["msonglyrics.com",48],["app-sorteos.com",48],["bokugents.com",48],["client.pylexnodes.net",48],["btvplus.bg",48],["blog24.me",[49,50]],["coingraph.us",51],["impact24.us",51],["iconicblogger.com",52],["tii.la",53],["kiemlua.com",54],["6movies.net",55],["adsh.cc",55],["afilmyhouse.blogspot.com",55],["ak.sv",55],["animesultra.com",55],["api.webs.moe",55],["apkmody.io",55],["atglinks.com",55],["attvideo.com",55],["backfirstwo.site",[55,128]],["crazyblog.in",55],["divicast.com",55],["embed.meomeo.pw",55],["filmeserialeonline.org",55],["flexyhit.com",55],["foreverwallpapers.com",55],["french-streams.cc",55],["fslinks.org",55],["fstream365.com",55],["hdtoday.to",55],["hinatasoul.com",55],["igg-games.com",55],["membed.net",55],["mgnetu.com",55],["movie4kto.net",55],["mp3juice.info",55],["mp3juices.cc",55],["myflixerz.to",55],["oii.io",55],["paidshitforfree.com",55],["pepperlive.info",55],["playertv.net",55],["putlocker68.com",55],["s.to",55],["share.filesh.site",55],["sharkfish.xyz",55],["skidrowcodex.net",55],["sports-stream.site",55],["stream4free.live",55],["tamilmobilemovies.in",55],["tapeadsenjoyer.com",55],["thewatchseries.live",55],["tnmusic.in",55],["travelplanspro.com",55],["tusfiles.com",55],["unlimitmovies.com",55],["vid-guard.com",55],["vidsaver.net",55],["vidspeeds.com",55],["viralitytoday.com",55],["voiranime.stream",55],["watchdoctorwhoonline.com",55],["woxikon.in",55],["ylink.bid",55],["ytix.xyz",55],["unblocked.id",57],["listendata.com",58],["7xm.xyz",58],["fastupload.io",58],["azmath.info",58],["wouterplanet.com",59],["androidacy.com",60],["veryfreeporn.com",61],["besthdgayporn.com",62],["drivenime.com",62],["javup.org",62],["shemaleup.net",62],["freeroms.com",63],["soap2day-online.com",63],["veev.to",[63,151]],["austiblox.net",64],["btcbunch.com",65],["teachoo.com",66],["genshinlab.com",67],["fourfourtwo.co.kr",67],["interfootball.co.kr",67],["a-ha.io",67],["cboard.net",67],["jjang0u.com",67],["joongdo.co.kr",67],["viva100.com",67],["thephoblographer.com",67],["newdaily.co.kr",67],["gamingdeputy.com",67],["thesaurus.net",67],["tweaksforgeeks.com",67],["alle-tests.nl",67],["maketecheasier.com",67],["automobile-catalog.com",67],["motorbikecatalog.com",67],["meconomynews.com",67],["brandbrief.co.kr",67],["mlbpark.donga.com",67],["motorgraph.com",67],["heraldcorp.com",67],["allthetests.com",68],["issuya.com",68],["topstarnews.net",68],["worldhistory.org",69],["bitcotasks.com",70],["udvl.com",71],["www.chip.de",[72,73]],["topsporter.net",74],["sportshub.to",74],["streamcheck.link",75],["unofficialtwrp.com",76],["bitcosite.com",77],["bitzite.com",77],["easymc.io",78],["yunjiema.top",78],["hacoos.com",79],["bondagevalley.cc",80],["zefoy.com",81],["vidello.net",82],["resizer.myct.jp",83],["gametohkenranbu.sakuraweb.com",84],["jisakuhibi.jp",85],["rank1-media.com",85],["lifematome.blog",86],["fm.sekkaku.net",87],["free-avx.jp",88],["dvdrev.com",89],["betweenjpandkr.blog",90],["nft-media.net",91],["ghacks.net",92],["leak.sx",93],["paste.bin.sx",93],["pornleaks.in",93],["songspk2.info",94],["truyentranhfull.net",95],["nectareousoverelate.com",98],["khoaiphim.com",99],["haafedk2.com",100],["fordownloader.com",100],["jovemnerd.com.br",101],["nicomanga.com",102],["totalcsgo.com",103],["vivamax.asia",104],["manysex.com",105],["gaminginfos.com",106],["tinxahoivn.com",107],["forums-fastunlock.com",108],["automoto.it",109],["codelivly.com",110],["ophim.vip",111],["touguatize.monster",112],["client.falixnodes.net",113],["novelhall.com",114],["hes-goal.net",115],["abc17news.com",116],["adoredbyalex.com",116],["agrodigital.com",116],["al.com",116],["aliontherunblog.com",116],["allaboutthetea.com",116],["allmovie.com",116],["allmusic.com",116],["allthingsthrifty.com",116],["amessagewithabottle.com",116],["androidpolice.com",116],["antyradio.pl",116],["artforum.com",116],["artnews.com",116],["avherald.com",116],["awkward.com",116],["awkwardmom.com",116],["bailiwickexpress.com",116],["barnsleychronicle.com",116],["becomingpeculiar.com",116],["bethcakes.com",116],["betweenenglandandiowa.com",116],["blogher.com",116],["bluegraygal.com",116],["briefeguru.de",116],["carmagazine.co.uk",116],["cattime.com",116],["cbr.com",116],["cbssports.com",116],["celiacandthebeast.com",116],["chaptercheats.com",116],["cleveland.com",116],["collider.com",116],["comingsoon.net",116],["commercialobserver.com",116],["competentedigitale.ro",116],["crafty.house",116],["dailyvoice.com",116],["decider.com",116],["didyouknowfacts.com",116],["dogtime.com",116],["dualshockers.com",116],["dustyoldthing.com",116],["faithhub.net",116],["femestella.com",116],["footwearnews.com",116],["freeconvert.com",116],["frogsandsnailsandpuppydogtail.com",116],["fsm-media.com",116],["funtasticlife.com",116],["fwmadebycarli.com",116],["gamerant.com",116],["gfinityesports.com",116],["givemesport.com",116],["gulflive.com",116],["helloflo.com",116],["homeglowdesign.com",116],["honeygirlsworld.com",116],["hotcars.com",116],["howtogeek.com",116],["insider-gaming.com",116],["insurancejournal.com",116],["jasminemaria.com",116],["kion546.com",116],["lehighvalleylive.com",116],["lettyskitchen.com",116],["lifeinleggings.com",116],["liveandletsfly.com",116],["lizzieinlace.com",116],["localnews8.com",116],["lonestarlive.com",116],["madeeveryday.com",116],["maidenhead-advertiser.co.uk",116],["makeuseof.com",116],["mardomreport.net",116],["masslive.com",116],["melangery.com",116],["milestomemories.com",116],["mlive.com",116],["modernmom.com",116],["momtastic.com",116],["mostlymorgan.com",116],["motherwellmag.com",116],["movieweb.com",116],["muddybootsanddiamonds.com",116],["musicfeeds.com.au",116],["mylifefromhome.com",116],["nationalreview.com",116],["neoskosmos.com",116],["nj.com",116],["nordot.app",116],["nothingbutnewcastle.com",116],["nsjonline.com",116],["nypost.com",116],["oakvillenews.org",116],["observer.com",116],["oregonlive.com",116],["ourlittlesliceofheaven.com",116],["pagesix.com",116],["palachinkablog.com",116],["pennlive.com",116],["pinkonthecheek.com",116],["politicususa.com",116],["predic.ro",116],["puckermom.com",116],["qtoptens.com",116],["realgm.com",116],["reelmama.com",116],["robbreport.com",116],["royalmailchat.co.uk",116],["samchui.com",116],["sandrarose.com",116],["screenrant.com",116],["sheknows.com",116],["sherdog.com",116],["sidereel.com",116],["silive.com",116],["simpleflying.com",116],["sloughexpress.co.uk",116],["spacenews.com",116],["sportsgamblingpodcast.com",116],["spotofteadesigns.com",116],["stacysrandomthoughts.com",116],["ssnewstelegram.com",116],["superherohype.com",116],["syracuse.com",116],["tablelifeblog.com",116],["thebeautysection.com",116],["thecelticblog.com",116],["thecurvyfashionista.com",116],["thefashionspot.com",116],["thegamer.com",116],["thegamescabin.com",116],["thenerdyme.com",116],["thenonconsumeradvocate.com",116],["theprudentgarden.com",116],["thethings.com",116],["timesnews.net",116],["topspeed.com",116],["toyotaklub.org.pl",116],["travelingformiles.com",116],["tutsnode.org",116],["tvline.com",116],["viralviralvideos.com",116],["wannacomewith.com",116],["wimp.com",116],["windsorexpress.co.uk",116],["woojr.com",116],["worldoftravelswithkids.com",116],["xda-developers.com",116],["cheatsheet.com",117],["pwinsider.com",117],["baeldung.com",117],["bagi.co.in",118],["keran.co",118],["biblestudytools.com",119],["christianheadlines.com",119],["ibelieve.com",119],["kuponigo.com",120],["kimcilonly.site",121],["kimcilonly.link",121],["cryptoearns.com",122],["inxxx.com",123],["ipaspot.app",124],["embedwish.com",125],["filelions.live",125],["leakslove.net",125],["jenismac.com",126],["vxetable.cn",127],["jewelavid.com",128],["nizarstream.com",128],["snapwordz.com",129],["toolxox.com",129],["rl6mans.com",129],["idol69.net",129],["plumbersforums.net",130],["123movies57.online",131],["gulio.site",132],["mediaset.es",133],["izlekolik.net",134],["donghuaworld.com",135],["letsdopuzzles.com",136],["tainio-mania.online",137],["hes-goals.io",138],["pkbiosfix.com",138],["casi3.xyz",138],["rediff.com",139],["dzapk.com",140],["darknessporn.com",141],["familyporner.com",141],["freepublicporn.com",141],["pisshamster.com",141],["punishworld.com",141],["xanimu.com",141],["pig69.com",142],["cosplay18.pics",142],["javhdo.net",143],["eroticmoviesonline.me",144],["teleclub.xyz",145],["ecamrips.com",146],["showcamrips.com",146],["9animetv.to",147],["jornadaperfecta.com",148],["loseart.com",149],["sousou-no-frieren.com",150],["intro-hd.net",152],["monacomatin.mc",152],["nodo313.net",152],["unite-guide.com",153],["thebullspen.com",154],["botcomics.com",155],["cefirates.com",155],["chandlerorchards.com",155],["comicleaks.com",155],["marketdata.app",155],["monumentmetals.com",155],["tapmyback.com",155],["ping.gg",155],["revistaferramental.com.br",155],["hawpar.com",155],["alpacafinance.org",[155,156]],["nookgaming.com",155],["enkeleksamen.no",155],["kvest.ee",155],["creatordrop.com",155],["panpots.com",155],["cybernetman.com",155],["bitdomain.biz",155],["gerardbosch.xyz",155],["fort-shop.kiev.ua",155],["accuretawealth.com",155],["resourceya.com",155],["tracktheta.com",155],["camberlion.com",155],["tt.live",156],["future-fortune.com",156],["abhijith.page",156],["madrigalmaps.com",156],["adventuretix.com",156],["panprices.com",157],["intercity.technology",157],["freelancer.taxmachine.be",157],["adria.gg",157],["fjlaboratories.com",157],["emanualonline.com",157],["proboards.com",158],["winclassic.net",158],["abema.tv",160]]);

const entitiesMap = new Map([["1337x",[2,14]],["kimcartoon",4],["pahe",[5,14]],["soap2day",5],["hqq",7],["waaw",7],["mhdsports",9],["mhdsportstv",9],["mhdtvsports",9],["mhdtvworld",9],["mhdtvmax",9],["reset-scans",9],["teluguflix",9],["poplinks",[9,48]],["pixhost",10],["viprow",[13,14,55]],["cloudvideotv",[13,55]],["vidsrc",[13,55]],["123-movies",14],["123movieshd",14],["123movieshub",14],["123moviesme",14],["1stream",14],["1tamilmv",14],["2ddl",14],["2umovies",14],["3hiidude",14],["4stream",14],["5movies",14],["7hitmovies",14],["9xmovie",14],["aagmaal",[14,55]],["adblockeronstape",14],["adblockeronstreamtape",14],["adblockplustape",14],["adblockstreamtape",14],["adblockstrtape",14],["adblockstrtech",14],["adblocktape",14],["adcorto",14],["alexsports",14],["alexsportss",14],["alexsportz",14],["animepahe",14],["animesanka",14],["animixplay",14],["aniplay",14],["antiadtape",14],["asianclub",14],["ask4movie",14],["atomixhq",[14,55]],["atomohd",14],["beinmatch",[14,21]],["bhaai",14],["buffstreams",14],["canalesportivo",14],["clickndownload",14],["clicknupload",14],["daddylive",[14,55]],["daddylivehd",[14,55]],["desiremovies",14],["devlib",14],["divxtotal",14],["divxtotal1",14],["dvdplay",[14,55]],["elixx",14],["enjoy4k",14],["estrenosflix",14],["estrenosflux",14],["estrenosgo",14],["f1stream",14],["fbstream",14],["file4go",14],["filmyzilla",[14,55]],["findav",14],["findporn",14],["flixmaza",14],["flizmovies",14],["freetvsports",14],["fullymaza",14],["g3g",14],["gotxx",14],["grantorrent",14],["hdmoviesfair",[14,55]],["hdmoviesflix",14],["hiidudemoviez",14],["imgsen",14],["imgsto",14],["incest",14],["incestflix",14],["itopmusic",14],["javmost",14],["keeplinks",14],["keepvid",14],["keralahd",14],["khatrimazaful",14],["khatrimazafull",14],["leechall",14],["linkshorts",14],["mangovideo",14],["masaporn",14],["miniurl",14],["mirrorace",14],["mixdroop",14],["mixdrop",14],["mkvcage",14],["mlbstream",14],["mlsbd",14],["mmsbee",14],["motogpstream",14],["movieplex",14],["movierulzlink",14],["movies123",14],["moviesflix",14],["moviesmeta",14],["moviessources",14],["moviesverse",14],["moviezwaphd",14],["mrunblock",14],["nbastream",14],["newmovierulz",14],["nflstream",14],["nhlstream",14],["noblocktape",14],["nocensor",14],["onlyfams",14],["ouo",14],["pctfenix",[14,55]],["pctnew",[14,55]],["peliculas24",14],["pelisplus",14],["piratebay",14],["plyjam",14],["plylive",14],["plyvdo",14],["pornhoarder",14],["prbay",14],["projectfreetv",14],["proxybit",14],["psarips",14],["racaty",14],["remaxhd",14],["rintor",14],["rnbxclusive",14],["rnbxclusive0",14],["rnbxclusive1",14],["rojadirecta",14],["rojadirectaenvivo",14],["rugbystreams",14],["sadisflix",14],["safetxt",14],["shadowrangers",14],["shahi4u",14],["shahid4u1",14],["shahid4uu",14],["shavetape",14],["shortearn",14],["shorten",14],["shorttey",14],["shortzzy",14],["skymovieshd",14],["socceronline",14],["softarchive",14],["sports-stream",14],["sshhaa",14],["stapadblockuser",14],["stape",14],["stapewithadblock",14],["starmusiq",14],["strcloud",14],["streamadblocker",[14,55]],["streamadblockplus",14],["streamcdn",14],["streamhub",14],["streamsport",14],["streamta",14],["streamtape",14],["streamtapeadblockuser",14],["strikeout",14],["strtape",14],["strtapeadblock",14],["strtapeadblocker",14],["strtapewithadblock",14],["strtpe",14],["swatchseries",14],["tabooflix",14],["tennisstreams",14],["themoviesflix",14],["thepiratebay",14],["thisav",14],["tmearn",14],["toonanime",14],["torlock",14],["tormalayalam",14],["torrentz2eu",14],["tutelehd",14],["tvply",14],["u4m",14],["ufcstream",14],["unblocknow",14],["uploadbuzz",14],["usagoals",14],["vexmoviex",14],["vidclouds",14],["vidlox",14],["vipbox",[14,55]],["vipboxtv",[14,55]],["vipleague",14],["watch-series",14],["watchseries",14],["xclusivejams",14],["xmoviesforyou",14],["youdbox",14],["ytmp3eu",14],["yts-subs",14],["yts",14],["zooqle",14],["dutchycorp",15],["dood",[25,55]],["doodstream",25],["dooood",[25,55]],["shrinke",28],["shrinkme",28],["mydverse",46],["123movies",55],["123moviesla",55],["123movieweb",55],["2embed",55],["720pstream",55],["9xmovies",55],["adshort",55],["allmovieshub",55],["asianplay",55],["atishmkv",55],["cricstream",55],["crictime",55],["databasegdriveplayer",55],["extramovies",55],["faselhd",55],["filemoon",55],["filmy",55],["filmyhit",55],["filmywap",55],["fmovies",55],["gdplayer",55],["gdriveplayer",55],["goku",55],["gomovies",55],["gowatchseries",55],["hindilinks4u",55],["hurawatch",55],["jalshamoviezhd",55],["livecricket",55],["mkvcinemas",55],["movies2watch",55],["moviespapa",55],["mp4moviez",55],["mydownloadtube",55],["nsw2u",55],["nuroflix",55],["o2tvseries",55],["o2tvseriesz",55],["pirlotv",55],["poscitech",55],["primewire",55],["serienstream",55],["sflix",55],["shahed4u",55],["shaheed4u",55],["speedostream",55],["sportcast",55],["sportskart",55],["streamingcommunity",55],["tamilarasan",55],["tamilfreemp3songs",55],["tamilprinthd",55],["torrentdosfilmes",55],["uploadrar",55],["uqload",55],["vidcloud9",55],["vido",55],["vidoo",55],["vudeo",55],["vumoo",55],["watchomovies",[55,63]],["yesmovies",55],["kickass",56],["cine-calidad",61],["actvid",96]]);

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
