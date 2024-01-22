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

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["script","AdDefend"],["script","/getAdUnitPath|\\.then\\(eval\\)|DisplayAcceptableAdIfAdblocked|,eval\\)\\)\\)\\;|\\.join\\(\\'\\'\\)\\}\\;/"],["script","/==undefined.*body/"],["script","style"],["script","Promise"],["script","Number.isSafeInteger"],["script","/style:last-of-type|:empty|APKM\\..+?\\.innerHTML/"],["script","Reflect"],["script","document.write"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","deblocker"],["script","exdynsrv"],["script","/adb/i"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/check_if_blocking|XMLHttpRequest|adkiller/"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/document\\.createElement|\\.banner-in/"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|adblock/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","alert"],["script","/adblock|popunder/"],["script","fetch"],["script","window.open"],["script","googlesyndication"],["script","queue.addFile"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","/window\\.open|window\\.location\\.href|document\\.addEventListener|\\$\\(document\\)\\.ready.*show/"],["script","AdbModel"],["script","antiAdBlockerHandler"],["script","onerror"],["script","AdBlock"],["script","catch"],["script","adb_detected"],["script","Adblock"],["script","break;case $."],["style","text-decoration"],["script","push"],["script","clicky"],["script","charCodeAt"],["script","checkifscript"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","popunder"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","KCgpPT57bGV0IGU"],["script","error-report.com"],["script","serve"],["script","/ConsoleBan|alert|AdBlocker/"],["script","AdBlocker"],["script","adb"],["script","await fetch"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/^Advertisement$/"],["script","navigator.brave"],["script","zfgloaded"],["script","ai_adb"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/modal|popupads/"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","ad_block"],["script","app_checkext"],["script","shown_at"],["script","clientHeight"],["script","/url_key|adHtml/"],["script","pop.target"],["script","showadblock"],["script","axios"],["script","ad block"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","AaDetector"],["script","Symbol.iterator"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","detectAdBlock"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","document.head.appendChild"],["script","Number"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","constructor"],["script","/adbl/i"],["script","detect"],["script","btnHtml"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","vglnk"],["script","/RegExp\\(\\'/","condition","RegExp"],["script",";break;case $."],["script",".slice(0, -1); }"],["script","(Math.PI).toFixed(10).slice(0, -1);"],["script","AdblockRegixFinder"],["script","/adblock|_0x/i"],["script","NREUM"]];

const hostnamesMap = new Map([["giga.de",0],["kino.de",0],["teltarif.de",1],["aupetitparieur.com",2],["allthingsvegas.com",2],["100percentfedup.com",2],["beforeitsnews.com",2],["concomber.com",2],["conservativebrief.com",2],["conservativefiringline.com",2],["dailylol.com",2],["funnyand.com",2],["letocard.fr",2],["mamieastuce.com",2],["meilleurpronostic.fr",2],["patriotnationpress.com",2],["toptenz.net",2],["vitamiiin.com",2],["writerscafe.org",2],["populist.press",2],["dailytruthreport.com",2],["livinggospeldaily.com",2],["first-names-meanings.com",2],["welovetrump.com",2],["thehayride.com",2],["thelibertydaily.com",2],["thepoke.co.uk",2],["thepolitistick.com",2],["theblacksphere.net",2],["shark-tank.com",2],["naturalblaze.com",2],["greatamericanrepublic.com",2],["dailysurge.com",2],["truthlion.com",2],["flagandcross.com",2],["westword.com",2],["republicbrief.com",2],["freedomfirstnetwork.com",2],["phoenixnewtimes.com",2],["designbump.com",2],["clashdaily.com",2],["madworldnews.com",2],["reviveusa.com",2],["sonsoflibertymedia.com",2],["thedesigninspiration.com",2],["videogamesblogger.com",2],["protrumpnews.com",2],["thepalmierireport.com",2],["kresy.pl",2],["thepatriotjournal.com",2],["gellerreport.com",2],["thegatewaypundit.com",2],["wltreport.com",2],["miaminewtimes.com",2],["politicalsignal.com",2],["rightwingnews.com",2],["bigleaguepolitics.com",2],["comicallyincorrect.com",2],["moviepilot.de",4],["apkmirror.com",[6,55]],["yts.mx",8],["upornia.com",10],["pinsystem.co.uk",11],["tinyppt.com",11],["downfile.site",11],["expertvn.com",11],["trangchu.news",11],["bharathwick.com",11],["descargaspcpro.net",11],["dx-tv.com",11],["rt3dmodels.com",11],["plc4me.com",11],["learnmany.in",11],["loaninsurehub.com",11],["appkamods.com",11],["techacode.com",11],["3dmodelshare.org",11],["nulleb.com",11],["reset-scans.us",11],["thecustomrom.com",11],["bingotingo.com",11],["ghior.com",11],["3dmili.com",11],["karanpc.com",11],["plc247.com",11],["hiraethtranslation.com",11],["javindo.eu.org",11],["chindohot.site",11],["freepasses.org",11],["tomarnarede.pt",11],["basketballbuzz.ca",11],["dribbblegraphics.com",11],["kemiox.com",11],["checkersmenu.us",11],["teksnologi.com",11],["dollareuro.live",11],["eporner.com",13],["germancarforum.com",14],["cybercityhelp.in",14],["sinvida.me",[15,17]],["streamnoads.com",[15,17,43]],["bowfile.com",15],["cloudvideo.tv",[15,43]],["coloredmanga.com",15],["embedstream.me",[15,17,43]],["exeo.app",15],["hiphopa.net",[15,17]],["megaup.net",15],["tv247.us",[15,17]],["uploadhaven.com",15],["userscloud.com",[15,43]],["searchenginereports.net",16],["mdfx9dc8n.net",17],["mdzsmutpcvykb.net",17],["123movies4u.site",17],["1337xporn.com",17],["141jav.com",17],["1bit.space",17],["1bitspace.com",17],["38dh2.top",17],["3dporndude.com",17],["4archive.org",17],["4horlover.com",17],["560pmovie.com",17],["60fps.xyz",17],["85tube.com",17],["85videos.com",17],["8xlinks.click",17],["a2zcrackworld.com",17],["aazzz.xyz",17],["acefile.co",17],["actusports.eu",17],["adblockplustape.com",17],["adclickersbot.com",17],["adricami.com",17],["adslink.pw",17],["adultstvlive.com",17],["adz7short.space",17],["aeblender.com",17],["ahdafnews.blogspot.com",17],["ak47sports.com",17],["akuma.moe",17],["allplayer.tk",17],["allstreaming.online",17],["amadoras.cf",17],["amadorasdanet.shop",17],["amateurblog.tv",17],["androidadult.com",17],["anhsexjav.xyz",17],["anidl.org",17],["anime-loads.org",17],["animeblkom.net",17],["animefire.net",17],["animelek.me",17],["animeshouse.net",17],["animespire.net",17],["animestotais.xyz",17],["animeyt.es",17],["anroll.net",17],["anymoviess.xyz",17],["aotonline.org",17],["asenshu.com",17],["asialiveaction.com",17],["asianclipdedhd.net",17],["askim-bg.com",17],["asumsikedaishop.com",17],["avcrempie.com",17],["avseesee.com",17],["backfirstwo.com",17],["bajarjuegospcgratis.com",17],["balkanportal.net",17],["balkanteka.net",17],["bdnewszh.com",[17,43]],["belowporn.com",17],["bestclaimtrx.xyz",17],["bestgirlsexy.com",17],["bestnhl.com",17],["bestporn4free.com",17],["bestporncomix.com",17],["bet36.es",17],["bikinitryon.net",17],["birdurls.com",17],["bitsearch.to",17],["blackcockadventure.com",17],["blackcockchurch.org",17],["blackporncrazy.com",17],["blizzboygames.net",17],["blizzpaste.com",17],["blkom.com",17],["blog-peliculas.com",17],["blogtrabalhista.com",17],["blurayufr.xyz",17],["bobsvagene.club",17],["bolly4umovies.click",17],["bonusharian.pro",17],["brilian-news.id",17],["brupload.net",17],["bucitana.com",17],["cablegratis.online",17],["camchickscaps.com",17],["camgirlcum.com",17],["camgirls.casa",17],["cashurl.in",17],["castingx.net",17],["ccurl.net",[17,43]],["celebrity-leaks.net",17],["cgpelis.net",17],["charexempire.com",17],["clasico.tv",17],["clik.pw",17],["coin-free.com",[17,32]],["coins100s.fun",17],["comicsmanics.com",17],["compucalitv.com",17],["coolcast2.com",17],["cosplaytab.com",17],["countylocalnews.com",17],["cpmlink.net",17],["crackstreamshd.click",17],["crespomods.com",17],["crisanimex.com",17],["crunchyscan.fr",17],["cuevana3.fan",17],["cuevana3hd.com",17],["cumception.com",17],["curvaweb.com",17],["cutpaid.com",17],["datawav.club",17],["daughtertraining.com",17],["deepgoretube.site",17],["deltabit.co",17],["depvailon.com",17],["derleta.com",17],["desivdo.com",17],["desixx.net",17],["detikkebumen.com",17],["deutschepornos.me",17],["diasoft.xyz",17],["directupload.net",17],["diskusscan.com",17],["dixva.com",17],["dlhd.sx",17],["doctormalay.com",17],["dofusports.xyz",17],["dogemate.com",17],["doods.cam",17],["doodskin.lat",17],["downloadrips.com",17],["downvod.com",17],["dphunters.mom",17],["dragontranslation.com",17],["duddes.xyz",17],["dvdfullestrenos.com",17],["ebookbb.com",17],["ebookhunter.net",17],["egyanime.com",17],["egygost.com",17],["egyshare.cc",17],["ekasiwap.com",17],["electro-torrent.pl",17],["elil.cc",17],["embed4u.xyz",17],["eplayer.click",17],["erovoice.us",17],["eroxxx.us",17],["estrenosdoramas.net",17],["everia.club",17],["everythinginherenet.blogspot.com",17],["extrafreetv.com",17],["extremotvplay.com",17],["fapinporn.com",17],["fapptime.com",17],["fashionblog.tv",17],["fastreams.live",17],["faucethero.com",17],["fembed.com",17],["femdom-joi.com",17],["fileone.tv",17],["film1k.com",17],["filmeonline2023.net",17],["filmesonlinex.org",17],["filmesonlinexhd.biz",[17,43]],["filmovi.ws",[17,43]],["filmovitica.com",17],["filmymaza.blogspot.com",17],["filthy.family",17],["fixfinder.click",17],["flostreams.xyz",17],["flyfaucet.com",17],["footyhunter.lol",17],["footyhunter3.xyz",[17,43]],["forex-golds.com",17],["forex-trnd.com",17],["forumchat.club",17],["forumlovers.club",17],["freemoviesonline.biz",17],["freeomovie.co.in",17],["freeomovie.to",17],["freeporncomic.net",17],["freepornhdonlinegay.com",17],["freeproxy.io",17],["freeuse.me",17],["freeusexporn.com",17],["fsicomics.com",17],["gambarbogel.xyz",17],["gamepcfull.com",17],["gameronix.com",17],["gamesfullx.com",17],["gameshdlive.net",17],["gameshdlive.xyz",[17,43]],["gamesmountain.com",17],["gamesrepacks.com",17],["gamingguru.fr",17],["gamovideo.com",17],["garota.cf",17],["gaydelicious.com",17],["gaypornmasters.com",17],["gaysex69.net",17],["gemstreams.com",17],["get-to.link",17],["girlscanner.org",17],["giurgiuveanul.ro",17],["gledajcrtace.xyz",17],["gocast2.com",17],["gomo.to",17],["gostosa.cf",17],["gtlink.co",17],["gwiazdypornosow.pl",17],["haho.moe",17],["hatsukimanga.com",17],["hayhd.net",17],["hdsaprevodom.com",17],["hdstreamss.club",17],["hentais.tube",17],["hentaistream.co",17],["hentaitk.net",17],["hentaitube.online",17],["hentaiworld.tv",17],["hesgoal.tv",17],["hexupload.net",17],["hhkungfu.tv",17],["highlanderhelp.com",17],["hindimean.com",17],["hindimovies.to",[17,43]],["hiperdex.com",17],["hispasexy.org",17],["hitomi.la",17],["hitprn.com",17],["hoca4u.com",17],["hollymoviehd.cc",17],["hoodsite.com",17],["hopepaste.download",17],["hornylips.com",17],["hotgranny.live",17],["hotmama.live",17],["hqcelebcorner.net",17],["huren.best",17],["hwnaturkya.com",[17,43]],["hxfile.co",[17,43]],["igfap.com",17],["ihdstreams.xyz",17],["iklandb.com",17],["illink.net",17],["imgkings.com",17],["imgsex.xyz",17],["imx.to",17],["influencersgonewild.org",17],["infosgj.free.fr",17],["investnewsbrazil.com",17],["itdmusics.com",17],["itopmusic.org",17],["itsuseful.site",17],["itunesfre.com",17],["iwatchfriendsonline.net",[17,79]],["jackstreams.com",17],["jatimupdate24.com",17],["javcl.com",17],["javf.net",17],["javhay.net",17],["javhoho.com",17],["javhun.com",17],["javleak.com",17],["javporn.best",17],["javsex.to",17],["javtiful.com",17],["jimdofree.com",17],["jiofiles.org",17],["jorpetz.com",17],["journalyc.online",17],["jp-films.com",17],["jpop80ss3.blogspot.com",17],["jpopsingles.eu",17],["kantotflix.net",17],["kantotinyo.com",17],["kaoskrew.org",17],["kaplog.com",17],["keralatvbox.com",17],["kimochi.info",17],["kimochi.tv",17],["kinemania.tv",17],["konstantinova.net",17],["koora-online.live",17],["kunmanga.com",17],["kutmoney.com",17],["kwithsub.com",17],["ladangreceh.xyz",17],["lat69.me",17],["latinblog.tv",17],["latinomegahd.net",17],["lazyfaucet.com",17],["leechpremium.link",17],["legendas.dev",17],["legendei.net",17],["lightdlmovies.blogspot.com",17],["lighterlegend.com",17],["linclik.com",17],["linkebr.com",17],["linkrex.net",17],["links.worldfree4u-lol.online",17],["linksfy.co",17],["lody.ink",17],["lovesomecommunity.com",17],["lulustream.com",[17,43]],["luluvdo.com",[17,43]],["luzcameraeacao.shop",17],["manga-oni.com",17],["mangaboat.com",17],["mangagenki.me",17],["mangahere.onl",17],["mangaweb.xyz",17],["mangoporn.net",17],["manhwahentai.me",17],["masahub.com",17],["masahub.net",17],["maturegrannyfuck.com",17],["mdy48tn97.com",17],["mediapemersatubangsa.com",17],["mega-mkv.com",17],["megapastes.com",17],["megapornpics.com",17],["messitv.net",17],["meusanimes.net",17],["milfmoza.com",17],["milfzr.com",17],["millionscast.com",17],["mimaletamusical.blogspot.com",17],["mitly.us",17],["mkv-pastes.com",17],["modb.xyz",17],["monaskuliner.ac.id",17],["moredesi.com",17],["movgotv.net",17],["movi.pk",17],["movieswbb.com",17],["moviewatch.com.pk",[17,43]],["mp4upload.com",17],["mrskin.live",17],["multicanaistv.com",17],["mundowuxia.com",17],["myeasymusic.ir",17],["myonvideo.com",17],["myyouporn.com",17],["narutoget.info",17],["naughtypiss.com",17],["nerdiess.com",17],["new-fs.eu",17],["newtorrentgame.com",17],["nflstreams.me",17],["niaomea.me",[17,43]],["nicekkk.com",17],["nicesss.com",17],["nolive.me",[17,43]],["nopay.info",17],["nopay2.info",[17,120]],["notformembersonly.com",17],["novamovie.net",17],["novelpdf.xyz",17],["novelssites.com",[17,43]],["novelup.top",17],["nsfwr34.com",17],["nu6i-bg-net.com",17],["nudebabesin3d.com",17],["nukedfans.com",17],["nuoga.eu",17],["nzbstars.com",17],["ohjav.com",17],["ojearnovelas.com",17],["okanime.xyz",17],["olarixas.xyz",17],["oldbox.cloud",17],["olweb.tv",17],["olympicstreams.me",17],["on9.stream",17],["oncast.xyz",17],["onepiece-mangaonline.com",17],["onifile.com",17],["onionstream.live",17],["onlinesaprevodom.net",17],["onlyfullporn.video",17],["onplustv.live",17],["originporn.com",17],["ovagames.com",17],["ovamusic.com",17],["owllink.net",17],["packsporn.com",17],["pahaplayers.click",17],["palimas.org",17],["pandafiles.com",17],["papahd.club",17],["papahd1.xyz",17],["password69.com",17],["paste3.org",17],["pastemytxt.com",17],["payskip.org",17],["peeplink.in",17],["peliculasmx.net",17],["pervertgirlsvideos.com",17],["pervyvideos.com",17],["phim12h.com",17],["picdollar.com",17],["pickteenz.com",17],["pics4you.net",17],["picsxxxporn.com",17],["pinayscandalz.com",17],["pinkueiga.net",17],["piratefast.xyz",17],["piratehaven.xyz",17],["pirateiro.com",17],["pirlotvonline.org",17],["playtube.co.za",17],["plugintorrent.com",17],["pmvzone.com",17],["porndish.com",17],["pornez.net",17],["pornfetishbdsm.com",17],["pornfits.com",17],["pornhd720p.com",17],["pornobr.club",17],["pornobr.ninja",17],["pornodominicano.net",17],["pornofaps.com",17],["pornoflux.com",17],["pornotorrent.com.br",17],["pornredit.com",17],["pornstarsyfamosas.es",17],["pornstreams.co",17],["porntn.com",17],["pornxbit.com",17],["pornxday.com",17],["portaldasnovinhas.shop",17],["portugues-fcr.blogspot.com",17],["poscishd.online",17],["poscitesch.com",[17,43]],["poseyoung.com",17],["pover.org",17],["proxyninja.org",17],["pubfilmz.com",17],["publicsexamateurs.com",17],["punanihub.com",17],["putlocker5movies.org",17],["pxxbay.com",17],["r18.best",17],["ragnaru.net",17],["rapbeh.net",17],["rapelust.com",17],["rapload.org",17],["read-onepiece.net",17],["retro-fucking.com",17],["retrotv.org",17],["robaldowns.com",17],["rockdilla.com",17],["rojadirectatvenvivo.com",17],["rojitadirecta.blogspot.com",17],["romancetv.site",17],["rule34.club",17],["rule34hentai.net",17],["rumahbokep-id.com",17],["safego.cc",17],["sakurafile.com",17],["satoshi-win.xyz",17],["scat.gold",17],["scatfap.com",17],["scatkings.com",17],["scnlog.me",17],["scripts-webmasters.net",17],["serie-turche.com",17],["serijefilmovi.com",17],["sexcomics.me",17],["sexdicted.com",17],["sexgay18.com",17],["sexofilm.co",17],["sextgem.com",17],["sextubebbw.com",17],["sgpics.net",17],["shadowrangers.live",17],["shahee4u.cam",17],["shahiid-anime.net",17],["shemale6.com",17],["shinden.pl",17],["short.es",17],["showmanga.blog.fc2.com",17],["shrt10.com",17],["shurt.pw",17],["sideplusleaks.net",17],["silverblog.tv",17],["silverpic.com",17],["sinhalasub.life",17],["sinsitio.site",17],["skidrowcpy.com",17],["skidrowfull.com",17],["skidrowreloaded.com",17],["slut.mom",17],["smallencode.me",17],["smoner.com",17],["smplace.com",17],["soccerinhd.com",17],["socceron.name",17],["softairbay.com",17],["sokobj.com",17],["songsio.com",17],["souexatasmais.com",17],["sportbar.live",17],["sportea.online",17],["sportskart.xyz",17],["sportstream1.cfd",17],["srt.am",17],["srts.me",17],["stakes100.xyz",17],["stbemuiptv.com",17],["stockingfetishvideo.com",17],["stream.lc",17],["stream25.xyz",17],["streambee.to",17],["streamcenter.pro",17],["streamers.watch",17],["streamgo.to",17],["streamkiste.tv",17],["streamoporn.xyz",17],["streamoupload.xyz",17],["streamservicehd.click",17],["streamvid.net",[17,24]],["subtitleporn.com",17],["subtitles.cam",17],["suicidepics.com",17],["supertelevisionhd.com",17],["supexfeeds.com",17],["swzz.xyz",17],["sxnaar.com",17],["tabooporns.com",17],["taboosex.club",17],["tapeantiads.com",17],["tapeblocker.com",17],["tapenoads.com",17],["tapewithadblock.org",[17,141]],["teamos.xyz",17],["teen-wave.com",17],["teenporncrazy.com",17],["telegramgroups.xyz",17],["telenovelasweb.com",17],["tensei-shitara-slime-datta-ken.com",17],["tfp.is",17],["tgo-tv.co",[17,43]],["thaihotmodels.com",17],["theblueclit.com",17],["thebussybandit.com",17],["theicongenerator.com",17],["thelastdisaster.vip",17],["thepiratebay0.org",17],["thepiratebay10.info",17],["thesexcloud.com",17],["thothub.today",17],["tightsexteens.com",17],["tojav.net",17],["tokyoblog.tv",17],["tonnestreamz.xyz",17],["top16.net",17],["topvideosgay.com",17],["torrage.info",17],["torrents.vip",17],["torrsexvid.com",17],["tpb-proxy.xyz",17],["trannyteca.com",17],["trendytalker.com",17],["tumanga.net",17],["turbogvideos.com",17],["turbovid.me",17],["turkishseriestv.org",17],["turksub24.net",17],["tutele.sx",17],["tutelehd3.xyz",17],["tvglobe.me",17],["tvpclive.com",17],["tvs-widget.com",17],["tvseries.video",17],["ucptt.com",17],["ufaucet.online",17],["ufcfight.online",17],["uhdgames.xyz",17],["ultrahorny.com",17],["ultraten.net",17],["unblockweb.me",17],["underhentai.net",17],["uniqueten.net",17],["upbaam.com",17],["upstream.to",17],["valeriabelen.com",17],["verdragonball.online",17],["vfxmed.com",17],["video.az",17],["videostreaming.rocks",17],["videowood.tv",17],["vidorg.net",17],["vidtapes.com",17],["vidz7.com",17],["vikistream.com",17],["vikv.net",17],["virpe.cc",17],["visifilmai.org",17],["viveseries.com",17],["vladrustov.sx",17],["volokit2.com",17],["vstorrent.org",17],["w-hentai.com",17],["watchaccordingtojimonline.com",17],["watchbrooklynnine-nine.com",17],["watchdowntonabbeyonline.com",17],["watchelementaryonline.com",17],["watcheronline.net",17],["watchgleeonline.com",17],["watchjavidol.com",17],["watchkobestreams.info",17],["watchlostonline.net",17],["watchlouieonline.com",17],["watchmonkonline.com",17],["watchparksandrecreation.net",17],["watchprettylittleliarsonline.com",17],["watchrulesofengagementonline.com",17],["watchthekingofqueens.com",17],["watchthemiddleonline.com",17],["watchtvchh.xyz",17],["webcamrips.com",17],["wickedspot.org",17],["wincest.xyz",17],["witanime.best",17],["wolverdonx.com",17],["wordcounter.icu",17],["worldcupstream.pm",17],["worldmovies.store",17],["worldstreams.click",17],["wpdeployit.com",17],["wqstreams.tk",17],["wwwsct.com",17],["xanimeporn.com",17],["xblog.tv",17],["xn--verseriesespaollatino-obc.online",17],["xn--xvideos-espaol-1nb.com",17],["xpornium.net",17],["xsober.com",17],["xvip.lat",17],["xxgasm.com",17],["xxvideoss.org",17],["xxx18.uno",17],["xxxdominicana.com",17],["xxxfree.watch",17],["xxxmax.net",17],["xxxwebdlxxx.top",17],["xxxxvideo.uno",17],["y2b.wiki",17],["yabai.si",17],["yadixv.com",17],["yayanimes.net",17],["yeshd.net",17],["yodbox.com",17],["youjax.com",17],["youpits.xyz",17],["yourdailypornvideos.ws",17],["yourupload.com",17],["ytstv.me",17],["ytstvmovies.co",17],["ytstvmovies.xyz",17],["ytsyify.co",17],["ytsyifymovie.com",17],["zerion.cc",17],["zerocoin.top",17],["zitss.xyz",17],["zpaste.net",17],["zplayer.live",17],["oko.sh",18],["washingtonpost.com",19],["bigbtc.win",20],["cryptofun.space",20],["gosexpod.com",21],["sexo5k.com",22],["truyen-hentai.com",22],["theshedend.com",24],["rsadnetworkinfo.com",24],["rsinsuranceinfo.com",24],["rsfinanceinfo.com",24],["rsgamer.app",24],["rssoftwareinfo.com",24],["rshostinginfo.com",24],["rseducationinfo.com",24],["zeroupload.com",24],["securenetsystems.net",24],["miniwebtool.com",24],["bchtechnologies.com",24],["spiegel.de",25],["appnee.com",26],["d0o0d.com",27],["do0od.com",27],["doods.pro",27],["ds2play.com",27],["ds2video.com",27],["onlyfaucet.com",28],["claimclicks.com",28],["thebullspen.com",28],["livecamrips.com",29],["smutty.com",29],["down.dataaps.com",29],["filmweb.pl",29],["iisfvirtual.in",30],["starxinvestor.com",30],["beatsnoop.com",30],["fetchpik.com",30],["hackerranksolution.in",30],["webhostingpost.com",[31,43]],["tophostingapp.com",31],["digitalmarktrend.com",31],["btcbitco.in",32],["btcsatoshi.net",32],["cempakajaya.com",32],["crypto4yu.com",32],["gainl.ink",32],["manofadan.com",32],["readbitcoin.org",32],["wiour.com",32],["kienthucrangmieng.com",32],["tremamnon.com",32],["btc25.org",32],["tron-free.com",32],["bitsmagic.fun",32],["ourcoincash.xyz",32],["hynews.biz",32],["blog.cryptowidgets.net",33],["blog.insurancegold.in",33],["blog.wiki-topia.com",33],["blog.coinsvalue.net",33],["blog.cookinguide.net",33],["blog.freeoseocheck.com",33],["aylink.co",34],["suaurl.com",35],["sugarona.com",36],["nishankhatri.xyz",36],["highkeyfinance.com",36],["amanguides.com",36],["tinys.click",37],["answerpython.com",37],["gsm-solution.com",37],["h-donghua.com",37],["hindisubbedacademy.com",37],["pkgovjobz.com",37],["ripexbooster.xyz",37],["serial4.com",37],["serial412.blogspot.com",37],["sigmalinks.in",37],["tutorgaming.com",37],["appsbull.com",38],["diudemy.com",38],["maqal360.com",38],["mphealth.online",38],["makefreecallsonline.com",38],["androjungle.com",38],["bookszone.in",38],["drakescans.com",38],["shortix.co",38],["msonglyrics.com",38],["app-sorteos.com",38],["bokugents.com",38],["btvplus.bg",38],["coingraph.us",39],["hes-goals.io",39],["pkbiosfix.com",39],["casi3.xyz",39],["iconicblogger.com",40],["tii.la",41],["kiemlua.com",42],["123moviefree4u.com",43],["194.163.183.129",43],["6movies.net",43],["adsh.cc",43],["afilmyhouse.blogspot.com",43],["ak.sv",43],["animefenix.com",43],["animefrenzy.net",43],["animeshouse.info",43],["animesultra.com",43],["api.webs.moe",43],["apkmody.io",43],["atglinks.com",43],["attvideo.com",43],["avimobilemovies.net",43],["backfirstwo.site",[43,111]],["cinema.cimatna.com",43],["crazyblog.in",43],["dembed1.com",43],["dembed2.com",43],["divicast.com",43],["egynow.cam",43],["embed.meomeo.pw",43],["fanproj.net",43],["filebox.click",43],["filmeserialeonline.org",43],["filmyzilla2021.xyz",43],["filmyzilla2022.com",43],["filmyzillafullmovie.waystohunt.info",43],["flexyhit.com",43],["foreverwallpapers.com",43],["french-streams.cc",43],["fslinks.org",43],["fstream365.com",43],["gdrivez.xyz",43],["hinatasoul.com",43],["hitmovies4u.com",43],["hotstar.news",43],["isaidub3.co",43],["membed.net",43],["mgnetu.com",43],["moviesdanet.com",43],["moviewatchonline.com.pk",43],["mp3juice.info",43],["mp3juices.cc",43],["neomovies.net",43],["newsrade.com",43],["nollyverse.com",43],["oii.io",43],["pepperlive.info",43],["playertv.net",43],["putlocker68.com",43],["s.to",43],["sharkfish.xyz",43],["skidrowcodex.net",43],["sports-stream.site",43],["stream4free.live",43],["tamilmobilemovies.in",43],["thewatchseries.live",43],["tnmusic.in",43],["travelplanspro.com",43],["tusfiles.com",43],["unlimitmovies.com",43],["uploadflix.org",43],["vid-guard.com",43],["vidsaver.net",43],["vidspeeds.com",43],["viralitytoday.com",43],["voiranime.stream",43],["watchdoctorwhoonline.com",43],["webseriesclub.com",43],["ylink.bid",43],["ytix.xyz",43],["unblocked.id",45],["wouterplanet.com",46],["androidacy.com",47],["djxmaza.in",48],["miuiflash.com",48],["thecubexguide.com",48],["veryfreeporn.com",49],["besthdgayporn.com",50],["freeroms.com",51],["soap2day-online.com",51],["austiblox.net",52],["btcbunch.com",53],["teachoo.com",54],["genshinlab.com",55],["fourfourtwo.co.kr",55],["interfootball.co.kr",55],["a-ha.io",55],["cboard.net",55],["mobilitytv.co.kr",55],["mememedia.co.kr",55],["newautopost.co.kr",55],["tvreport.co.kr",55],["tenbizt.com",55],["jjang0u.com",55],["joongdo.co.kr",55],["viva100.com",55],["thephoblographer.com",55],["newdaily.co.kr",55],["dogdrip.net",55],["golf-live.at",55],["gamingdeputy.com",55],["thesaurus.net",55],["tweaksforgeeks.com",55],["alle-tests.nl",55],["dotkeypress.kr",55],["viewcash.co.kr",55],["tripplus.co.kr",55],["enterdiary.com",55],["mtodayauto.com",55],["hotplacehunter.co.kr",55],["mystylezip.com",55],["majorgeeks.com",55],["poro.gg",55],["maple.gg",55],["lolchess.gg",55],["dak.gg",55],["meconomynews.com",55],["brandbrief.co.kr",55],["dfast.kr",55],["youtu.co",55],["mlbpark.donga.com",55],["capress.kr",55],["carandmore.co.kr",55],["maxmovie.kr",55],["motorgraph.com",55],["newsbell.co.kr",55],["tminews.co.kr",55],["thehousemagazine.kr",55],["hardreset.info",55],["metabattle.com",55],["maketecheasier.com",55],["motorbikecatalog.com",55],["heraldcorp.com",55],["allthetests.com",56],["issuya.com",56],["topstarnews.net",56],["udvl.com",57],["topsporter.net",58],["sportshub.to",58],["7xm.xyz",59],["fastupload.io",59],["azmath.info",59],["easymc.io",60],["yunjiema.top",60],["hacoos.com",61],["bondagevalley.cc",62],["zefoy.com",63],["vidello.net",64],["resizer.myct.jp",65],["gametohkenranbu.sakuraweb.com",66],["jisakuhibi.jp",67],["rank1-media.com",67],["lifematome.blog",68],["fm.sekkaku.net",69],["free-avx.jp",70],["dvdrev.com",71],["betweenjpandkr.blog",72],["nft-media.net",73],["ghacks.net",74],["leak.sx",75],["pornleaks.in",75],["songspk2.info",76],["truyentranhfull.net",77],["nectareousoverelate.com",80],["khoaiphim.com",81],["haafedk2.com",82],["fordownloader.com",82],["jovemnerd.com.br",83],["nicomanga.com",84],["totalcsgo.com",85],["vivamax.asia",86],["manysex.com",87],["gaminginfos.com",88],["tinxahoivn.com",89],["forums-fastunlock.com",90],["automoto.it",91],["sekaikomik.bio",92],["codelivly.com",93],["ophim.vip",94],["touguatize.monster",95],["client.falixnodes.net",96],["novelhall.com",97],["hes-goal.net",98],["abc17news.com",99],["al.com",99],["allaboutthetea.com",99],["allmovie.com",99],["allmusic.com",99],["androidpolice.com",99],["antyradio.pl",99],["artforum.com",99],["artnews.com",99],["avherald.com",99],["awkwardmom.com",99],["bailiwickexpress.com",99],["blogher.com",99],["briefeguru.de",99],["carmagazine.co.uk",99],["cattime.com",99],["cbr.com",99],["cbssports.com",99],["chaptercheats.com",99],["cleveland.com",99],["collider.com",99],["comingsoon.net",99],["commercialobserver.com",99],["competentedigitale.ro",99],["dailyvoice.com",99],["decider.com",99],["didyouknowfacts.com",99],["dogtime.com",99],["dualshockers.com",99],["dustyoldthing.com",99],["femestella.com",99],["footwearnews.com",99],["freeconvert.com",99],["gamerant.com",99],["gfinityesports.com",99],["givemesport.com",99],["gulflive.com",99],["howtogeek.com",99],["insider-gaming.com",99],["insurancejournal.com",99],["kion546.com",99],["lehighvalleylive.com",99],["liveandletsfly.com",99],["localnews8.com",99],["lonestarlive.com",99],["makeuseof.com",99],["mardomreport.net",99],["masslive.com",99],["milestomemories.com",99],["mlive.com",99],["modernmom.com",99],["momtastic.com",99],["movieweb.com",99],["musicfeeds.com.au",99],["nationalreview.com",99],["nj.com",99],["nordot.app",99],["nypost.com",99],["oakvillenews.org",99],["observer.com",99],["oregonlive.com",99],["pagesix.com",99],["pennlive.com",99],["qtoptens.com",99],["realgm.com",99],["robbreport.com",99],["sandrarose.com",99],["screenrant.com",99],["sheknows.com",99],["sherdog.com",99],["sidereel.com",99],["silive.com",99],["simpleflying.com",99],["spacenews.com",99],["superherohype.com",99],["syracuse.com",99],["thecelticblog.com",99],["thecurvyfashionista.com",99],["thefashionspot.com",99],["thegamer.com",99],["thegamescabin.com",99],["timesnews.net",99],["tutsnode.org",99],["tvline.com",99],["viralviralvideos.com",99],["wimp.com",99],["woojr.com",99],["xda-developers.com",99],["cheatsheet.com",100],["pwinsider.com",100],["bagi.co.in",101],["keran.co",101],["biblestudytools.com",102],["christianheadlines.com",102],["ibelieve.com",102],["kuponigo.com",103],["kimcilonly.site",104],["kimcilonly.link",104],["cryptoearns.com",105],["inxxx.com",106],["ipaspot.app",107],["embedwish.com",108],["filelions.live",108],["leakslove.net",108],["jenismac.com",109],["vxetable.cn",110],["jewelavid.com",111],["nizarstream.com",111],["snapwordz.com",112],["toolxox.com",112],["rl6mans.com",112],["idol69.net",112],["plumbersforums.net",113],["123movies57.online",114],["gulio.site",115],["mediaset.es",116],["izlekolik.net",117],["donghuaworld.com",118],["letsdopuzzles.com",119],["tainio-mania.online",120],["rediff.com",121],["dzapk.com",122],["darknessporn.com",123],["familyporner.com",123],["freepublicporn.com",123],["pisshamster.com",123],["punishworld.com",123],["xanimu.com",123],["pig69.com",124],["cosplay18.pics",124],["javhdo.net",125],["eroticmoviesonline.me",126],["teleclub.xyz",127],["ecamrips.com",128],["showcamrips.com",128],["9animetv.to",129],["jornadaperfecta.com",130],["loseart.com",131],["sousou-no-frieren.com",132],["veev.to",133],["intro-hd.net",134],["monacomatin.mc",134],["nodo313.net",134],["unite-guide.com",135],["appimagehub.com",136],["gnome-look.org",136],["store.kde.org",136],["linux-apps.com",136],["opendesktop.org",136],["pling.com",136],["xfce-look.org",136],["botcomics.com",137],["cefirates.com",137],["chandlerorchards.com",137],["comicleaks.com",137],["marketdata.app",137],["monumentmetals.com",137],["tapmyback.com",137],["ping.gg",137],["revistaferramental.com.br",137],["hawpar.com",137],["alpacafinance.org",[137,138]],["nookgaming.com",137],["enkeleksamen.no",137],["kvest.ee",137],["creatordrop.com",137],["panpots.com",137],["cybernetman.com",137],["bitdomain.biz",137],["gerardbosch.xyz",137],["fort-shop.kiev.ua",137],["accuretawealth.com",137],["resourceya.com",137],["tracktheta.com",137],["tt.live",138],["future-fortune.com",138],["abhijith.page",138],["madrigalmaps.com",138],["adventuretix.com",138],["panprices.com",139],["intercity.technology",139],["freelancer.taxmachine.be",139],["adria.gg",139],["fjlaboratories.com",139],["proboards.com",140],["winclassic.net",140],["infinityscans.xyz",142],["infinityscans.net",142],["www.chip.de",[143,144]],["bitcotasks.com",145],["ytlarge.com",146],["abema.tv",147]]);

const entitiesMap = new Map([["1337x",[3,17]],["kimcartoon",5],["pahe",[7,17]],["soap2day",7],["hqq",9],["waaw",9],["teluguflix",11],["pixhost",12],["viprow",[15,17,43]],["cloudvideotv",[15,43]],["vidsrc",[15,43]],["123-movies",17],["123movieshd",17],["123movieshub",17],["123moviesme",17],["1stream",17],["1tamilmv",17],["2ddl",17],["2umovies",17],["3hiidude",17],["4stream",17],["5movies",17],["7hitmovies",17],["9xmovie",17],["aagmaal",[17,43]],["adblockeronstape",17],["adblockeronstreamtape",17],["adblockstreamtape",17],["adblockstrtape",17],["adblockstrtech",17],["adblocktape",17],["adcorto",17],["alexsports",17],["alexsportss",17],["alexsportz",17],["animepahe",17],["animesanka",17],["animixplay",17],["aniplay",17],["antiadtape",17],["asianclub",17],["ask4movie",17],["atomixhq",[17,43]],["atomohd",17],["beinmatch",[17,23]],["bhaai",17],["buffstreams",17],["canalesportivo",17],["clickndownload",17],["clicknupload",17],["crackstreams",[17,43]],["daddylive",[17,43]],["daddylivehd",[17,43]],["desiremovies",17],["devlib",17],["divxtotal",17],["divxtotal1",17],["dvdplay",[17,43]],["elixx",17],["enjoy4k",17],["estrenosflix",17],["estrenosflux",17],["estrenosgo",17],["f1stream",17],["fbstream",17],["file4go",17],["filmyzilla",[17,43]],["findav",17],["findporn",17],["flixmaza",17],["flizmovies",17],["freetvsports",17],["fullymaza",17],["g3g",17],["gotxx",17],["grantorrent",17],["hdmoviesfair",[17,43]],["hdmoviesflix",17],["hiidudemoviez",17],["imgsen",17],["imgsto",17],["incest",17],["incestflix",17],["javmost",17],["keeplinks",17],["keepvid",17],["keralahd",17],["khatrimazaful",17],["khatrimazafull",17],["leechall",17],["linkshorts",17],["mangovideo",17],["masaporn",17],["miniurl",17],["mirrorace",17],["mixdroop",17],["mixdrop",17],["mkvcage",17],["mlbstream",17],["mlsbd",17],["mmsbee",17],["motogpstream",17],["movieplex",17],["movierulzlink",17],["movies123",17],["moviesflix",17],["moviesmeta",[17,43]],["moviessources",17],["moviesverse",17],["moviezwaphd",17],["mrunblock",17],["nbastream",17],["newmovierulz",17],["nflstream",17],["nhlstream",17],["noblocktape",17],["nocensor",17],["onlyfams",17],["ouo",17],["pctfenix",[17,43]],["pctnew",[17,43]],["peliculas24",17],["pelisplus",17],["piratebay",17],["plyjam",17],["plylive",17],["plyvdo",17],["pornhoarder",17],["prbay",17],["projectfreetv",17],["proxybit",17],["psarips",17],["racaty",17],["remaxhd",17],["rintor",17],["rnbxclusive",17],["rnbxclusive0",17],["rnbxclusive1",17],["rojadirecta",17],["rojadirectaenvivo",17],["rugbystreams",17],["safetxt",17],["shadowrangers",17],["shahi4u",17],["shahid4u1",17],["shahid4uu",17],["shavetape",17],["shortearn",17],["shorten",17],["shorttey",17],["shortzzy",17],["skymovieshd",17],["socceronline",17],["softarchive",17],["sports-stream",17],["sshhaa",17],["stapadblockuser",17],["stape",17],["stapewithadblock",17],["starmusiq",17],["strcloud",17],["streamadblocker",[17,43]],["streamadblockplus",17],["streamcdn",17],["streamhub",17],["streamsport",17],["streamta",17],["streamtape",17],["streamtapeadblockuser",17],["strikeout",17],["strtape",17],["strtapeadblock",17],["strtapeadblocker",17],["strtapewithadblock",17],["strtpe",17],["swatchseries",17],["tabooflix",17],["tennisstreams",17],["themoviesflix",17],["thepiratebay",17],["thisav",17],["tmearn",17],["toonanime",17],["torlock",17],["tormalayalam",17],["torrentz2eu",17],["tutelehd",17],["tvply",17],["u4m",17],["ufcstream",17],["unblocknow",17],["uploadbuzz",17],["usagoals",17],["vexmoviex",17],["vidclouds",17],["vidlox",17],["vipbox",[17,43]],["vipboxtv",[17,43]],["vipleague",17],["watch-series",17],["watchseries",17],["xclusivejams",17],["xmoviesforyou",17],["youdbox",17],["ytmp3eu",17],["yts-subs",17],["yts",17],["zooqle",17],["dood",[27,43]],["doodstream",27],["dooood",[27,43]],["shrinke",29],["shrinkme",29],["mydverse",37],["poplinks",38],["123movies",43],["123moviesla",43],["123movieweb",43],["2embed",43],["4hiidude",43],["720pstream",43],["9xmovies",43],["adshort",43],["allmovieshub",43],["asianplay",43],["atishmkv",43],["cricstream",43],["crictime",43],["databasegdriveplayer",43],["dloader",43],["easylinks",43],["extralinks",43],["extramovies",43],["faselhd",43],["filemoon",43],["filmy",43],["filmyhit",43],["filmywap",43],["fmovies",43],["fsapi",43],["gdplayer",43],["gdriveplayer",43],["goload",43],["gomoviefree",43],["gomovies",43],["gowatchseries",43],["hdmoviz",43],["hindilinks4u",43],["hurawatch",43],["isaidub",43],["isaidubhd",43],["jalshamoviezhd",43],["jiorockers",43],["linkshub",43],["linksme",43],["livecricket",43],["madrasdub",43],["mkvcinemas",43],["mobilemovies",43],["movies2watch",43],["moviesda1",43],["moviespapa",43],["mp4moviez",43],["mydownloadtube",43],["nsw2u",43],["nuroflix",43],["o2tvseries",43],["o2tvseriesz",43],["pirlotv",43],["poscitech",43],["primewire",43],["serienstream",43],["sflix",43],["shahed4u",43],["shaheed4u",43],["speedostream",43],["sportcast",43],["sportskart",43],["streamingcommunity",43],["tamilarasan",43],["tamilfreemp3songs",43],["tamilprinthd",43],["torrentdosfilmes",43],["uploadrar",43],["uqload",43],["vidcloud9",43],["vido",43],["vidoo",43],["vudeo",43],["vumoo",43],["watchomovies",[43,51]],["yesmovies",43],["kickass",44],["cine-calidad",49],["actvid",78]]);

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
    const reNodeName = safe.patternToRegex(nodeName, 'i', true);
    const rePattern = safe.patternToRegex(pattern, 'gms');
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    const shouldLog = scriptletGlobals.has('canDebug') && extraArgs.log || 0;
    const reCondition = safe.patternToRegex(extraArgs.condition || '', 'ms');
    const stop = (takeRecord = true) => {
        if ( takeRecord ) {
            handleMutations(observer.takeRecords());
        }
        observer.disconnect();
        if ( shouldLog !== 0 ) {
            safe.uboLog(`replace-node-text-core.fn: quitting "${pattern}" => "${replacement}"`);
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
        if ( shouldLog !== 0 ) {
            safe.uboLog('replace-node-text.fn before:\n', before);
            safe.uboLog('replace-node-text.fn after:\n', after);
        }
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
        if ( shouldLog !== 0 ) {
            safe.uboLog(`replace-node-text-core.fn ${count} nodes present before installing mutation observer`);
        }
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
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
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
        uboLog(...args) {
            if ( scriptletGlobals.has('canDebug') === false ) { return; }
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
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
    scriptletGlobals.set('safeSelf', safe);
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
