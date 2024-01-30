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

const argsList = [["script","AdDefend"],["script","/getAdUnitPath|\\.then\\(eval\\)|DisplayAcceptableAdIfAdblocked|,eval\\)\\)\\)\\;|\\.join\\(\\'\\'\\)\\}\\;/"],["script","/==undefined.*body/"],["script","style"],["script","Promise"],["script","Number.isSafeInteger"],["script","Reflect"],["script","document.write"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","deblocker"],["script","exdynsrv"],["script","/adb/i"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/document\\.createElement|\\.banner-in/"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|adblock/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","alert"],["script","/adblock|popunder/"],["script","fetch"],["script","window.open"],["script",";break;case $."],["script","googlesyndication"],["script","queue.addFile"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","/window\\.open|window\\.location\\.href|document\\.addEventListener|\\$\\(document\\)\\.ready.*show/"],["script","AdbModel"],["script","antiAdBlockerHandler"],["script","onerror"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script","adb_detected"],["script","Adblock"],["script","break;case $."],["style","text-decoration"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","charCodeAt"],["script","checkifscript"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","popunder"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","KCgpPT57bGV0IGU"],["script","error-report.com"],["script","serve"],["script","/ConsoleBan|alert|AdBlocker/"],["script","adb"],["script","await fetch"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/^Advertisement$/"],["script","navigator.brave"],["script","zfgloaded"],["script","ai_adb"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/modal|popupads/"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","ad_block"],["script","app_checkext"],["script","shown_at"],["script","clientHeight"],["script","/url_key|adHtml/"],["script","pop.target"],["script","showadblock"],["script","axios"],["script","ad block"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","AaDetector"],["script","AdBlock"],["script","Symbol.iterator"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","detectAdBlock"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","document.head.appendChild"],["script","Number"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","constructor"],["script","/adbl/i"],["script","detect"],["script","btnHtml"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","vglnk"],["script","/RegExp\\(\\'/","condition","RegExp"],["script",".slice(0, -1); }"],["script","(Math.PI).toFixed(10).slice(0, -1);"],["script","AdblockRegixFinder"],["script","/(?<=if\\((\\s){0,}!window\\.(\\s){0,}[shouldExist\\d+]{1,}\\) {)([^;]+)/gms"],["script","/document\\[`(.+?)`\\]\\.innerHTML = window\\..*;/gms"],["script","/document.*.innerHTML =window\\..*;/gms"],["script","NREUM"]];

const hostnamesMap = new Map([["giga.de",0],["kino.de",0],["teltarif.de",1],["aupetitparieur.com",2],["allthingsvegas.com",2],["100percentfedup.com",2],["beforeitsnews.com",2],["concomber.com",2],["conservativebrief.com",2],["conservativefiringline.com",2],["dailylol.com",2],["funnyand.com",2],["letocard.fr",2],["mamieastuce.com",2],["meilleurpronostic.fr",2],["patriotnationpress.com",2],["toptenz.net",2],["vitamiiin.com",2],["writerscafe.org",2],["populist.press",2],["dailytruthreport.com",2],["livinggospeldaily.com",2],["first-names-meanings.com",2],["welovetrump.com",2],["thehayride.com",2],["thelibertydaily.com",2],["thepoke.co.uk",2],["thepolitistick.com",2],["theblacksphere.net",2],["shark-tank.com",2],["naturalblaze.com",2],["greatamericanrepublic.com",2],["dailysurge.com",2],["truthlion.com",2],["flagandcross.com",2],["westword.com",2],["republicbrief.com",2],["freedomfirstnetwork.com",2],["phoenixnewtimes.com",2],["designbump.com",2],["clashdaily.com",2],["madworldnews.com",2],["reviveusa.com",2],["sonsoflibertymedia.com",2],["thedesigninspiration.com",2],["videogamesblogger.com",2],["protrumpnews.com",2],["thepalmierireport.com",2],["kresy.pl",2],["thepatriotjournal.com",2],["gellerreport.com",2],["thegatewaypundit.com",2],["wltreport.com",2],["miaminewtimes.com",2],["politicalsignal.com",2],["rightwingnews.com",2],["bigleaguepolitics.com",2],["comicallyincorrect.com",2],["moviepilot.de",4],["yts.mx",7],["upornia.com",9],["pinsystem.co.uk",10],["tinyppt.com",10],["downfile.site",10],["expertvn.com",10],["trangchu.news",10],["bharathwick.com",10],["descargaspcpro.net",10],["dx-tv.com",10],["rt3dmodels.com",10],["plc4me.com",10],["blisseyhusbands.com",10],["mhdsportstv.com",10],["madaradex.org",10],["learnmany.in",10],["loaninsurehub.com",10],["appkamods.com",10],["techacode.com",10],["3dmodelshare.org",10],["nulleb.com",10],["reset-scans.us",10],["coursesghar.com",10],["thecustomrom.com",10],["bingotingo.com",10],["ghior.com",10],["3dmili.com",10],["karanpc.com",10],["plc247.com",10],["hiraethtranslation.com",10],["javindo.eu.org",10],["chindohot.site",10],["freepasses.org",10],["tomarnarede.pt",10],["basketballbuzz.ca",10],["dribbblegraphics.com",10],["kemiox.com",10],["checkersmenu.us",10],["teksnologi.com",10],["dollareuro.live",10],["eporner.com",12],["germancarforum.com",13],["cybercityhelp.in",13],["sinvida.me",[14,15]],["streamnoads.com",[14,15,43]],["bowfile.com",14],["cloudvideo.tv",[14,43]],["coloredmanga.com",14],["embedstream.me",[14,15,43]],["exeo.app",14],["hiphopa.net",[14,15]],["megaup.net",14],["tv247.us",[14,15]],["uploadhaven.com",14],["userscloud.com",[14,43]],["mdfx9dc8n.net",15],["mdzsmutpcvykb.net",15],["123movies4u.site",15],["1337xporn.com",15],["141jav.com",15],["1bit.space",15],["1bitspace.com",15],["38dh2.top",15],["3dporndude.com",15],["4archive.org",15],["4horlover.com",15],["560pmovie.com",15],["60fps.xyz",15],["85tube.com",15],["85videos.com",15],["8xlinks.click",15],["a2zcrackworld.com",15],["aazzz.xyz",15],["acefile.co",15],["actusports.eu",15],["adblockplustape.com",15],["adclickersbot.com",15],["adricami.com",15],["adslink.pw",15],["adultstvlive.com",15],["adz7short.space",15],["aeblender.com",15],["ahdafnews.blogspot.com",15],["ak47sports.com",15],["akuma.moe",15],["allplayer.tk",15],["allstreaming.online",15],["amadoras.cf",15],["amadorasdanet.shop",15],["amateurblog.tv",15],["androidadult.com",15],["anhsexjav.xyz",15],["anidl.org",15],["anime-loads.org",15],["animeblkom.net",15],["animefire.net",15],["animelek.me",15],["animeshouse.net",15],["animespire.net",15],["animestotais.xyz",15],["animeyt.es",15],["anroll.net",15],["anymoviess.xyz",15],["aotonline.org",15],["asenshu.com",15],["asialiveaction.com",15],["asianclipdedhd.net",15],["askim-bg.com",15],["asumsikedaishop.com",15],["avcrempie.com",15],["avseesee.com",15],["backfirstwo.com",15],["bajarjuegospcgratis.com",15],["balkanportal.net",15],["balkanteka.net",15],["bdnewszh.com",[15,43]],["belowporn.com",15],["bestclaimtrx.xyz",15],["bestgirlsexy.com",15],["bestnhl.com",15],["bestporn4free.com",15],["bestporncomix.com",15],["bet36.es",15],["bikinitryon.net",15],["birdurls.com",15],["bitsearch.to",15],["blackcockadventure.com",15],["blackcockchurch.org",15],["blackporncrazy.com",15],["blizzboygames.net",15],["blizzpaste.com",15],["blkom.com",15],["blog-peliculas.com",15],["blogtrabalhista.com",15],["blurayufr.xyz",15],["bobsvagene.club",15],["bolly4umovies.click",15],["bonusharian.pro",15],["brilian-news.id",15],["brupload.net",15],["bucitana.com",15],["cablegratis.online",15],["camchickscaps.com",15],["camgirlcum.com",15],["camgirls.casa",15],["cashurl.in",15],["castingx.net",15],["ccurl.net",[15,43]],["celebrity-leaks.net",15],["cgpelis.net",15],["charexempire.com",15],["clasico.tv",15],["clik.pw",15],["coin-free.com",[15,32]],["coins100s.fun",15],["comicsmanics.com",15],["compucalitv.com",15],["coolcast2.com",15],["cosplaytab.com",15],["countylocalnews.com",15],["cpmlink.net",15],["crackstreamshd.click",15],["crespomods.com",15],["crisanimex.com",15],["crunchyscan.fr",15],["cuevana3.fan",15],["cuevana3hd.com",15],["cumception.com",15],["curvaweb.com",15],["cutpaid.com",15],["datawav.club",15],["daughtertraining.com",15],["deepgoretube.site",15],["deltabit.co",15],["depvailon.com",15],["derleta.com",15],["desivdo.com",15],["desixx.net",15],["detikkebumen.com",15],["deutschepornos.me",15],["diasoft.xyz",15],["directupload.net",15],["diskusscan.com",15],["dixva.com",15],["dlhd.sx",15],["doctormalay.com",15],["dofusports.xyz",15],["dogemate.com",15],["doods.cam",15],["doodskin.lat",15],["downloadrips.com",15],["downvod.com",15],["dphunters.mom",15],["dragontranslation.com",15],["duddes.xyz",15],["dvdfullestrenos.com",15],["ebookbb.com",15],["ebookhunter.net",15],["egyanime.com",15],["egygost.com",15],["egyshare.cc",15],["ekasiwap.com",15],["electro-torrent.pl",15],["elil.cc",15],["embed4u.xyz",15],["eplayer.click",15],["erovoice.us",15],["eroxxx.us",15],["estrenosdoramas.net",15],["everia.club",15],["everythinginherenet.blogspot.com",15],["extrafreetv.com",15],["extremotvplay.com",15],["fapinporn.com",15],["fapptime.com",15],["fashionblog.tv",15],["fastreams.live",15],["faucethero.com",15],["fembed.com",15],["femdom-joi.com",15],["fileone.tv",15],["film1k.com",15],["filmeonline2023.net",15],["filmesonlinex.org",15],["filmesonlinexhd.biz",[15,43]],["filmovi.ws",[15,43]],["filmovitica.com",15],["filmymaza.blogspot.com",15],["filthy.family",15],["fixfinder.click",15],["flostreams.xyz",15],["flyfaucet.com",15],["footyhunter.lol",15],["footyhunter3.xyz",[15,43]],["forex-golds.com",15],["forex-trnd.com",15],["forumchat.club",15],["forumlovers.club",15],["freemoviesonline.biz",15],["freeomovie.co.in",15],["freeomovie.to",15],["freeporncomic.net",15],["freepornhdonlinegay.com",15],["freeproxy.io",15],["freeuse.me",15],["freeusexporn.com",15],["fsicomics.com",15],["gambarbogel.xyz",15],["gamepcfull.com",15],["gameronix.com",15],["gamesfullx.com",15],["gameshdlive.net",15],["gameshdlive.xyz",[15,43]],["gamesmountain.com",15],["gamesrepacks.com",15],["gamingguru.fr",15],["gamovideo.com",15],["garota.cf",15],["gaydelicious.com",15],["gaypornmasters.com",15],["gaysex69.net",15],["gemstreams.com",15],["get-to.link",15],["girlscanner.org",15],["giurgiuveanul.ro",15],["gledajcrtace.xyz",15],["gocast2.com",15],["gomo.to",15],["gostosa.cf",15],["gtlink.co",15],["gwiazdypornosow.pl",15],["haho.moe",15],["hatsukimanga.com",15],["hayhd.net",15],["hdsaprevodom.com",15],["hdstreamss.club",15],["hentais.tube",15],["hentaistream.co",15],["hentaitk.net",15],["hentaitube.online",15],["hentaiworld.tv",15],["hesgoal.tv",15],["hexupload.net",15],["hhkungfu.tv",15],["highlanderhelp.com",15],["hindimean.com",15],["hindimovies.to",[15,43]],["hiperdex.com",15],["hispasexy.org",15],["hitomi.la",15],["hitprn.com",15],["hoca4u.com",15],["hollymoviehd.cc",15],["hoodsite.com",15],["hopepaste.download",15],["hornylips.com",15],["hotgranny.live",15],["hotmama.live",15],["hqcelebcorner.net",15],["huren.best",15],["hwnaturkya.com",[15,43]],["hxfile.co",[15,43]],["igfap.com",15],["ihdstreams.xyz",15],["iklandb.com",15],["illink.net",15],["imgkings.com",15],["imgsex.xyz",15],["imx.to",15],["influencersgonewild.org",15],["infosgj.free.fr",15],["investnewsbrazil.com",15],["itdmusics.com",15],["itopmusic.org",15],["itsuseful.site",15],["itunesfre.com",15],["iwatchfriendsonline.net",[15,79]],["jackstreams.com",15],["jatimupdate24.com",15],["javcl.com",15],["javf.net",15],["javhay.net",15],["javhoho.com",15],["javhun.com",15],["javleak.com",15],["javporn.best",15],["javsex.to",15],["javtiful.com",15],["jimdofree.com",15],["jiofiles.org",15],["jorpetz.com",15],["journalyc.online",15],["jp-films.com",15],["jpop80ss3.blogspot.com",15],["jpopsingles.eu",15],["kantotflix.net",15],["kantotinyo.com",15],["kaoskrew.org",15],["kaplog.com",15],["keralatvbox.com",15],["kimochi.info",15],["kimochi.tv",15],["kinemania.tv",15],["konstantinova.net",15],["koora-online.live",15],["kunmanga.com",15],["kutmoney.com",15],["kwithsub.com",15],["ladangreceh.xyz",15],["lat69.me",15],["latinblog.tv",15],["latinomegahd.net",15],["lazyfaucet.com",15],["leechpremium.link",15],["legendas.dev",15],["legendei.net",15],["lightdlmovies.blogspot.com",15],["lighterlegend.com",15],["linclik.com",15],["linkebr.com",15],["linkrex.net",15],["links.worldfree4u-lol.online",15],["linksfy.co",15],["lody.ink",15],["lovesomecommunity.com",15],["lulustream.com",[15,43]],["luluvdo.com",[15,43]],["luzcameraeacao.shop",15],["manga-oni.com",15],["mangaboat.com",15],["mangagenki.me",15],["mangahere.onl",15],["mangaweb.xyz",15],["mangoporn.net",15],["manhwahentai.me",15],["masahub.com",15],["masahub.net",15],["maturegrannyfuck.com",15],["mdy48tn97.com",15],["mediapemersatubangsa.com",15],["mega-mkv.com",15],["megapastes.com",15],["megapornpics.com",15],["messitv.net",15],["meusanimes.net",15],["milfmoza.com",15],["milfzr.com",15],["millionscast.com",15],["mimaletamusical.blogspot.com",15],["mitly.us",15],["mkv-pastes.com",15],["modb.xyz",15],["monaskuliner.ac.id",15],["moredesi.com",15],["movgotv.net",15],["movi.pk",15],["movieswbb.com",15],["moviewatch.com.pk",[15,43]],["mp4upload.com",15],["mrskin.live",15],["multicanaistv.com",15],["mundowuxia.com",15],["myeasymusic.ir",15],["myonvideo.com",15],["myyouporn.com",15],["narutoget.info",15],["naughtypiss.com",15],["nerdiess.com",15],["new-fs.eu",15],["newtorrentgame.com",15],["nflstreams.me",15],["niaomea.me",[15,43]],["nicekkk.com",15],["nicesss.com",15],["nolive.me",[15,43]],["nopay.info",15],["nopay2.info",[15,120]],["notformembersonly.com",15],["novamovie.net",15],["novelpdf.xyz",15],["novelssites.com",[15,43]],["novelup.top",15],["nsfwr34.com",15],["nu6i-bg-net.com",15],["nudebabesin3d.com",15],["nukedfans.com",15],["nuoga.eu",15],["nzbstars.com",15],["ohjav.com",15],["ojearnovelas.com",15],["okanime.xyz",15],["olarixas.xyz",15],["oldbox.cloud",15],["olweb.tv",15],["olympicstreams.me",15],["on9.stream",15],["oncast.xyz",15],["onepiece-mangaonline.com",15],["onifile.com",15],["onionstream.live",15],["onlinesaprevodom.net",15],["onlyfullporn.video",15],["onplustv.live",15],["originporn.com",15],["ovagames.com",15],["ovamusic.com",15],["owllink.net",15],["packsporn.com",15],["pahaplayers.click",15],["palimas.org",15],["pandafiles.com",15],["papahd.club",15],["papahd1.xyz",15],["password69.com",15],["paste3.org",15],["pastemytxt.com",15],["payskip.org",15],["peeplink.in",15],["peliculasmx.net",15],["pervertgirlsvideos.com",15],["pervyvideos.com",15],["phim12h.com",15],["picdollar.com",15],["pickteenz.com",15],["pics4you.net",15],["picsxxxporn.com",15],["pinayscandalz.com",15],["pinkueiga.net",15],["piratefast.xyz",15],["piratehaven.xyz",15],["pirateiro.com",15],["pirlotvonline.org",15],["playtube.co.za",15],["plugintorrent.com",15],["pmvzone.com",15],["porndish.com",15],["pornez.net",15],["pornfetishbdsm.com",15],["pornfits.com",15],["pornhd720p.com",15],["pornobr.club",15],["pornobr.ninja",15],["pornodominicano.net",15],["pornofaps.com",15],["pornoflux.com",15],["pornotorrent.com.br",15],["pornredit.com",15],["pornstarsyfamosas.es",15],["pornstreams.co",15],["porntn.com",15],["pornxbit.com",15],["pornxday.com",15],["portaldasnovinhas.shop",15],["portugues-fcr.blogspot.com",15],["poscishd.online",15],["poscitesch.com",[15,43]],["poseyoung.com",15],["pover.org",15],["proxyninja.org",15],["pubfilmz.com",15],["publicsexamateurs.com",15],["punanihub.com",15],["putlocker5movies.org",15],["pxxbay.com",15],["r18.best",15],["ragnaru.net",15],["rapbeh.net",15],["rapelust.com",15],["rapload.org",15],["read-onepiece.net",15],["retro-fucking.com",15],["retrotv.org",15],["robaldowns.com",15],["rockdilla.com",15],["rojadirectatvenvivo.com",15],["rojitadirecta.blogspot.com",15],["romancetv.site",15],["rule34.club",15],["rule34hentai.net",15],["rumahbokep-id.com",15],["safego.cc",15],["sakurafile.com",15],["satoshi-win.xyz",15],["scat.gold",15],["scatfap.com",15],["scatkings.com",15],["scnlog.me",15],["scripts-webmasters.net",15],["serie-turche.com",15],["serijefilmovi.com",15],["sexcomics.me",15],["sexdicted.com",15],["sexgay18.com",15],["sexofilm.co",15],["sextgem.com",15],["sextubebbw.com",15],["sgpics.net",15],["shadowrangers.live",15],["shahee4u.cam",15],["shahiid-anime.net",15],["shemale6.com",15],["shinden.pl",15],["short.es",15],["showmanga.blog.fc2.com",15],["shrt10.com",15],["shurt.pw",15],["sideplusleaks.net",15],["silverblog.tv",15],["silverpic.com",15],["sinhalasub.life",15],["sinsitio.site",15],["skidrowcpy.com",15],["skidrowfull.com",15],["skidrowreloaded.com",15],["slut.mom",15],["smallencode.me",15],["smoner.com",15],["smplace.com",15],["soccerinhd.com",15],["socceron.name",15],["softairbay.com",15],["sokobj.com",15],["songsio.com",15],["souexatasmais.com",15],["sportbar.live",15],["sportea.online",15],["sportskart.xyz",15],["sportstream1.cfd",15],["srt.am",15],["srts.me",15],["stakes100.xyz",15],["stbemuiptv.com",15],["stockingfetishvideo.com",15],["stream.lc",15],["stream25.xyz",15],["streambee.to",15],["streamcenter.pro",15],["streamers.watch",15],["streamgo.to",15],["streamkiste.tv",15],["streamoporn.xyz",15],["streamoupload.xyz",15],["streamservicehd.click",15],["streamvid.net",[15,23]],["subtitleporn.com",15],["subtitles.cam",15],["suicidepics.com",15],["supertelevisionhd.com",15],["supexfeeds.com",15],["swzz.xyz",15],["sxnaar.com",15],["tabooporns.com",15],["taboosex.club",15],["tapeantiads.com",15],["tapeblocker.com",15],["tapenoads.com",15],["tapewithadblock.org",[15,142]],["teamos.xyz",15],["teen-wave.com",15],["teenporncrazy.com",15],["telegramgroups.xyz",15],["telenovelasweb.com",15],["tensei-shitara-slime-datta-ken.com",15],["tfp.is",15],["tgo-tv.co",[15,43]],["thaihotmodels.com",15],["theblueclit.com",15],["thebussybandit.com",15],["theicongenerator.com",15],["thelastdisaster.vip",15],["thepiratebay0.org",15],["thepiratebay10.info",15],["thesexcloud.com",15],["thothub.today",15],["tightsexteens.com",15],["tojav.net",15],["tokyoblog.tv",15],["tonnestreamz.xyz",15],["top16.net",15],["topvideosgay.com",15],["torrage.info",15],["torrents.vip",15],["torrsexvid.com",15],["tpb-proxy.xyz",15],["trannyteca.com",15],["trendytalker.com",15],["tumanga.net",15],["turbogvideos.com",15],["turbovid.me",15],["turkishseriestv.org",15],["turksub24.net",15],["tutele.sx",15],["tutelehd3.xyz",15],["tvglobe.me",15],["tvpclive.com",15],["tvs-widget.com",15],["tvseries.video",15],["ucptt.com",15],["ufaucet.online",15],["ufcfight.online",15],["uhdgames.xyz",15],["ultrahorny.com",15],["ultraten.net",15],["unblockweb.me",15],["underhentai.net",15],["uniqueten.net",15],["upbaam.com",15],["upstream.to",15],["valeriabelen.com",15],["verdragonball.online",15],["vfxmed.com",15],["video.az",15],["videostreaming.rocks",15],["videowood.tv",15],["vidorg.net",15],["vidtapes.com",15],["vidz7.com",15],["vikistream.com",15],["vikv.net",15],["virpe.cc",15],["visifilmai.org",15],["viveseries.com",15],["vladrustov.sx",15],["volokit2.com",15],["vstorrent.org",15],["w-hentai.com",15],["watchaccordingtojimonline.com",15],["watchbrooklynnine-nine.com",15],["watchdowntonabbeyonline.com",15],["watchelementaryonline.com",15],["watcheronline.net",15],["watchgleeonline.com",15],["watchjavidol.com",15],["watchkobestreams.info",15],["watchlostonline.net",15],["watchlouieonline.com",15],["watchmonkonline.com",15],["watchparksandrecreation.net",15],["watchprettylittleliarsonline.com",15],["watchrulesofengagementonline.com",15],["watchthekingofqueens.com",15],["watchthemiddleonline.com",15],["watchtvchh.xyz",15],["webcamrips.com",15],["wickedspot.org",15],["wincest.xyz",15],["witanime.best",15],["wolverdonx.com",15],["wordcounter.icu",15],["worldcupstream.pm",15],["worldmovies.store",15],["worldstreams.click",15],["wpdeployit.com",15],["wqstreams.tk",15],["wwwsct.com",15],["xanimeporn.com",15],["xblog.tv",15],["xn--verseriesespaollatino-obc.online",15],["xn--xvideos-espaol-1nb.com",15],["xpornium.net",15],["xsober.com",15],["xvip.lat",15],["xxgasm.com",15],["xxvideoss.org",15],["xxx18.uno",15],["xxxdominicana.com",15],["xxxfree.watch",15],["xxxmax.net",15],["xxxwebdlxxx.top",15],["xxxxvideo.uno",15],["y2b.wiki",15],["yabai.si",15],["yadixv.com",15],["yayanimes.net",15],["yeshd.net",15],["yodbox.com",15],["youjax.com",15],["youpits.xyz",15],["yourdailypornvideos.ws",15],["yourupload.com",15],["ytstv.me",15],["ytstvmovies.co",15],["ytstvmovies.xyz",15],["ytsyify.co",15],["ytsyifymovie.com",15],["zerion.cc",15],["zerocoin.top",15],["zitss.xyz",15],["zpaste.net",15],["zplayer.live",15],["oko.sh",17],["washingtonpost.com",18],["bigbtc.win",19],["cryptofun.space",19],["gosexpod.com",20],["sexo5k.com",21],["truyen-hentai.com",21],["theshedend.com",23],["rsadnetworkinfo.com",23],["rsinsuranceinfo.com",23],["rsfinanceinfo.com",23],["rsgamer.app",23],["rssoftwareinfo.com",23],["rshostinginfo.com",23],["rseducationinfo.com",23],["zeroupload.com",23],["securenetsystems.net",23],["miniwebtool.com",23],["bchtechnologies.com",23],["spiegel.de",24],["appnee.com",25],["d0o0d.com",26],["do0od.com",26],["doods.pro",26],["ds2play.com",26],["ds2video.com",26],["onlyfaucet.com",27],["claimclicks.com",27],["thebullspen.com",27],["livecamrips.com",28],["smutty.com",28],["down.dataaps.com",28],["filmweb.pl",28],["infinityscans.xyz",29],["infinityscans.net",29],["iisfvirtual.in",30],["starxinvestor.com",30],["beatsnoop.com",30],["fetchpik.com",30],["hackerranksolution.in",30],["webhostingpost.com",[31,43]],["tophostingapp.com",31],["digitalmarktrend.com",31],["btcbitco.in",32],["btcsatoshi.net",32],["cempakajaya.com",32],["crypto4yu.com",32],["gainl.ink",32],["manofadan.com",32],["readbitcoin.org",32],["wiour.com",32],["kienthucrangmieng.com",32],["tremamnon.com",32],["btc25.org",32],["tron-free.com",32],["bitsmagic.fun",32],["ourcoincash.xyz",32],["hynews.biz",32],["blog.cryptowidgets.net",33],["blog.insurancegold.in",33],["blog.wiki-topia.com",33],["blog.coinsvalue.net",33],["blog.cookinguide.net",33],["blog.freeoseocheck.com",33],["aylink.co",34],["suaurl.com",35],["sugarona.com",36],["nishankhatri.xyz",36],["highkeyfinance.com",36],["amanguides.com",36],["tinys.click",37],["answerpython.com",37],["gsm-solution.com",37],["h-donghua.com",37],["hindisubbedacademy.com",37],["pkgovjobz.com",37],["ripexbooster.xyz",37],["serial4.com",37],["serial412.blogspot.com",37],["sigmalinks.in",37],["tutorgaming.com",37],["appsbull.com",38],["diudemy.com",38],["maqal360.com",38],["mphealth.online",38],["makefreecallsonline.com",38],["androjungle.com",38],["bookszone.in",38],["drakescans.com",38],["shortix.co",38],["msonglyrics.com",38],["app-sorteos.com",38],["bokugents.com",38],["btvplus.bg",38],["coingraph.us",39],["impact24.us",39],["iconicblogger.com",40],["tii.la",41],["kiemlua.com",42],["123moviefree4u.com",43],["194.163.183.129",43],["6movies.net",43],["adsh.cc",43],["afilmyhouse.blogspot.com",43],["ak.sv",43],["animefenix.com",43],["animefrenzy.net",43],["animeshouse.info",43],["animesultra.com",43],["api.webs.moe",43],["apkmody.io",43],["atglinks.com",43],["attvideo.com",43],["avimobilemovies.net",43],["backfirstwo.site",[43,111]],["cinema.cimatna.com",43],["crazyblog.in",43],["dembed1.com",43],["dembed2.com",43],["divicast.com",43],["egynow.cam",43],["embed.meomeo.pw",43],["fanproj.net",43],["filebox.click",43],["filmeserialeonline.org",43],["filmyzilla2021.xyz",43],["filmyzilla2022.com",43],["filmyzillafullmovie.waystohunt.info",43],["flexyhit.com",43],["foreverwallpapers.com",43],["french-streams.cc",43],["fslinks.org",43],["fstream365.com",43],["gdrivez.xyz",43],["hinatasoul.com",43],["hitmovies4u.com",43],["hotstar.news",43],["isaidub3.co",43],["membed.net",43],["mgnetu.com",43],["moviesdanet.com",43],["moviewatchonline.com.pk",43],["mp3juice.info",43],["mp3juices.cc",43],["neomovies.net",43],["newsrade.com",43],["nollyverse.com",43],["oii.io",43],["pepperlive.info",43],["playertv.net",43],["putlocker68.com",43],["s.to",43],["sharkfish.xyz",43],["skidrowcodex.net",43],["sports-stream.site",43],["stream4free.live",43],["tamilmobilemovies.in",43],["thewatchseries.live",43],["tnmusic.in",43],["travelplanspro.com",43],["tusfiles.com",43],["unlimitmovies.com",43],["uploadflix.org",43],["vid-guard.com",43],["vidsaver.net",43],["vidspeeds.com",43],["viralitytoday.com",43],["voiranime.stream",43],["watchdoctorwhoonline.com",43],["webseriesclub.com",43],["ylink.bid",43],["ytix.xyz",43],["unblocked.id",45],["listendata.com",46],["7xm.xyz",46],["fastupload.io",46],["azmath.info",46],["wouterplanet.com",47],["androidacy.com",48],["jytechs.in",49],["djxmaza.in",49],["miuiflash.com",49],["thecubexguide.com",49],["veryfreeporn.com",50],["besthdgayporn.com",51],["freeroms.com",52],["soap2day-online.com",52],["austiblox.net",53],["btcbunch.com",54],["teachoo.com",55],["genshinlab.com",56],["fourfourtwo.co.kr",56],["interfootball.co.kr",56],["a-ha.io",56],["cboard.net",56],["mobilitytv.co.kr",56],["mememedia.co.kr",56],["newautopost.co.kr",56],["tvreport.co.kr",56],["tenbizt.com",56],["jjang0u.com",56],["joongdo.co.kr",56],["viva100.com",56],["thephoblographer.com",56],["newdaily.co.kr",56],["dogdrip.net",56],["golf-live.at",56],["gamingdeputy.com",56],["thesaurus.net",56],["tweaksforgeeks.com",56],["alle-tests.nl",56],["apkmirror.com",56],["dotkeypress.kr",56],["viewcash.co.kr",56],["tripplus.co.kr",56],["enterdiary.com",56],["mtodayauto.com",56],["hotplacehunter.co.kr",56],["mystylezip.com",56],["majorgeeks.com",56],["poro.gg",56],["maple.gg",56],["lolchess.gg",56],["dak.gg",56],["meconomynews.com",56],["brandbrief.co.kr",56],["dfast.kr",56],["youtu.co",56],["mlbpark.donga.com",56],["capress.kr",56],["carandmore.co.kr",56],["maxmovie.kr",56],["motorgraph.com",56],["newsbell.co.kr",56],["tminews.co.kr",56],["thehousemagazine.kr",56],["hardreset.info",56],["metabattle.com",56],["maketecheasier.com",56],["motorbikecatalog.com",56],["heraldcorp.com",56],["allthetests.com",57],["issuya.com",57],["topstarnews.net",57],["udvl.com",58],["topsporter.net",59],["sportshub.to",59],["easymc.io",60],["yunjiema.top",60],["hacoos.com",61],["bondagevalley.cc",62],["zefoy.com",63],["vidello.net",64],["resizer.myct.jp",65],["gametohkenranbu.sakuraweb.com",66],["jisakuhibi.jp",67],["rank1-media.com",67],["lifematome.blog",68],["fm.sekkaku.net",69],["free-avx.jp",70],["dvdrev.com",71],["betweenjpandkr.blog",72],["nft-media.net",73],["ghacks.net",74],["leak.sx",75],["pornleaks.in",75],["songspk2.info",76],["truyentranhfull.net",77],["nectareousoverelate.com",80],["khoaiphim.com",81],["haafedk2.com",82],["fordownloader.com",82],["jovemnerd.com.br",83],["nicomanga.com",84],["totalcsgo.com",85],["vivamax.asia",86],["manysex.com",87],["gaminginfos.com",88],["tinxahoivn.com",89],["forums-fastunlock.com",90],["automoto.it",91],["sekaikomik.bio",92],["codelivly.com",93],["ophim.vip",94],["touguatize.monster",95],["client.falixnodes.net",96],["novelhall.com",97],["hes-goal.net",98],["abc17news.com",99],["adoredbyalex.com",99],["agrodigital.com",99],["al.com",99],["allaboutthetea.com",99],["allmovie.com",99],["allmusic.com",99],["allthingsthrifty.com",99],["androidpolice.com",99],["antyradio.pl",99],["artforum.com",99],["artnews.com",99],["avherald.com",99],["awkward.com",99],["awkwardmom.com",99],["bailiwickexpress.com",99],["barnsleychronicle.com",99],["becomingpeculiar.com",99],["blogher.com",99],["briefeguru.de",99],["carmagazine.co.uk",99],["cattime.com",99],["cbr.com",99],["cbssports.com",99],["chaptercheats.com",99],["cleveland.com",99],["collider.com",99],["comingsoon.net",99],["commercialobserver.com",99],["competentedigitale.ro",99],["crafty.house",99],["dailyvoice.com",99],["decider.com",99],["didyouknowfacts.com",99],["dogtime.com",99],["dualshockers.com",99],["dustyoldthing.com",99],["faithhub.net",99],["femestella.com",99],["footwearnews.com",99],["freeconvert.com",99],["frogsandsnailsandpuppydogtail.com",99],["gamerant.com",99],["gfinityesports.com",99],["givemesport.com",99],["gulflive.com",99],["helloflo.com",99],["howtogeek.com",99],["insider-gaming.com",99],["insurancejournal.com",99],["jasminemaria.com",99],["kion546.com",99],["lehighvalleylive.com",99],["lettyskitchen.com",99],["liveandletsfly.com",99],["lizzieinlace.com",99],["localnews8.com",99],["lonestarlive.com",99],["madeeveryday.com",99],["maidenhead-advertiser.co.uk",99],["makeuseof.com",99],["mardomreport.net",99],["masslive.com",99],["milestomemories.com",99],["mlive.com",99],["modernmom.com",99],["momtastic.com",99],["mostlymorgan.com",99],["movieweb.com",99],["musicfeeds.com.au",99],["nationalreview.com",99],["nj.com",99],["nordot.app",99],["nothingbutnewcastle.com",99],["nsjonline.com",99],["nypost.com",99],["oakvillenews.org",99],["observer.com",99],["oregonlive.com",99],["pagesix.com",99],["pennlive.com",99],["pinkonthecheek.com",99],["puckermom.com",99],["qtoptens.com",99],["realgm.com",99],["robbreport.com",99],["samchui.com",99],["sandrarose.com",99],["screenrant.com",99],["sheknows.com",99],["sherdog.com",99],["sidereel.com",99],["silive.com",99],["simpleflying.com",99],["spacenews.com",99],["superherohype.com",99],["syracuse.com",99],["thecelticblog.com",99],["thecurvyfashionista.com",99],["thefashionspot.com",99],["thegamer.com",99],["thegamescabin.com",99],["thenonconsumeradvocate.com",99],["timesnews.net",99],["toyotaklub.org.pl",99],["travelingformiles.com",99],["tutsnode.org",99],["tvline.com",99],["viralviralvideos.com",99],["wimp.com",99],["woojr.com",99],["xda-developers.com",99],["cheatsheet.com",100],["pwinsider.com",100],["bagi.co.in",101],["keran.co",101],["biblestudytools.com",102],["christianheadlines.com",102],["ibelieve.com",102],["kuponigo.com",103],["kimcilonly.site",104],["kimcilonly.link",104],["cryptoearns.com",105],["inxxx.com",106],["ipaspot.app",107],["embedwish.com",108],["filelions.live",108],["leakslove.net",108],["jenismac.com",109],["vxetable.cn",110],["jewelavid.com",111],["nizarstream.com",111],["snapwordz.com",112],["toolxox.com",112],["rl6mans.com",112],["idol69.net",112],["plumbersforums.net",113],["123movies57.online",114],["gulio.site",115],["mediaset.es",116],["izlekolik.net",117],["donghuaworld.com",118],["letsdopuzzles.com",119],["tainio-mania.online",120],["hes-goals.io",121],["pkbiosfix.com",121],["casi3.xyz",121],["rediff.com",122],["dzapk.com",123],["darknessporn.com",124],["familyporner.com",124],["freepublicporn.com",124],["pisshamster.com",124],["punishworld.com",124],["xanimu.com",124],["pig69.com",125],["cosplay18.pics",125],["javhdo.net",126],["eroticmoviesonline.me",127],["teleclub.xyz",128],["ecamrips.com",129],["showcamrips.com",129],["9animetv.to",130],["jornadaperfecta.com",131],["loseart.com",132],["sousou-no-frieren.com",133],["veev.to",134],["intro-hd.net",135],["monacomatin.mc",135],["nodo313.net",135],["unite-guide.com",136],["appimagehub.com",137],["gnome-look.org",137],["store.kde.org",137],["linux-apps.com",137],["opendesktop.org",137],["pling.com",137],["xfce-look.org",137],["botcomics.com",138],["cefirates.com",138],["chandlerorchards.com",138],["comicleaks.com",138],["marketdata.app",138],["monumentmetals.com",138],["tapmyback.com",138],["ping.gg",138],["revistaferramental.com.br",138],["hawpar.com",138],["alpacafinance.org",[138,139]],["nookgaming.com",138],["enkeleksamen.no",138],["kvest.ee",138],["creatordrop.com",138],["panpots.com",138],["cybernetman.com",138],["bitdomain.biz",138],["gerardbosch.xyz",138],["fort-shop.kiev.ua",138],["accuretawealth.com",138],["resourceya.com",138],["tracktheta.com",138],["tt.live",139],["future-fortune.com",139],["abhijith.page",139],["madrigalmaps.com",139],["adventuretix.com",139],["panprices.com",140],["intercity.technology",140],["freelancer.taxmachine.be",140],["adria.gg",140],["fjlaboratories.com",140],["proboards.com",141],["winclassic.net",141],["www.chip.de",[143,144]],["bitcotasks.com",145],["perchance.org",[146,147,148]],["abema.tv",149]]);

const entitiesMap = new Map([["1337x",[3,15]],["kimcartoon",5],["pahe",[6,15]],["soap2day",6],["hqq",8],["waaw",8],["teluguflix",10],["pixhost",11],["viprow",[14,15,43]],["cloudvideotv",[14,43]],["vidsrc",[14,43]],["123-movies",15],["123movieshd",15],["123movieshub",15],["123moviesme",15],["1stream",15],["1tamilmv",15],["2ddl",15],["2umovies",15],["3hiidude",15],["4stream",15],["5movies",15],["7hitmovies",15],["9xmovie",15],["aagmaal",[15,43]],["adblockeronstape",15],["adblockeronstreamtape",15],["adblockstreamtape",15],["adblockstrtape",15],["adblockstrtech",15],["adblocktape",15],["adcorto",15],["alexsports",15],["alexsportss",15],["alexsportz",15],["animepahe",15],["animesanka",15],["animixplay",15],["aniplay",15],["antiadtape",15],["asianclub",15],["ask4movie",15],["atomixhq",[15,43]],["atomohd",15],["beinmatch",[15,22]],["bhaai",15],["buffstreams",15],["canalesportivo",15],["clickndownload",15],["clicknupload",15],["crackstreams",[15,43]],["daddylive",[15,43]],["daddylivehd",[15,43]],["desiremovies",15],["devlib",15],["divxtotal",15],["divxtotal1",15],["dvdplay",[15,43]],["elixx",15],["enjoy4k",15],["estrenosflix",15],["estrenosflux",15],["estrenosgo",15],["f1stream",15],["fbstream",15],["file4go",15],["filmyzilla",[15,43]],["findav",15],["findporn",15],["flixmaza",15],["flizmovies",15],["freetvsports",15],["fullymaza",15],["g3g",15],["gotxx",15],["grantorrent",15],["hdmoviesfair",[15,43]],["hdmoviesflix",15],["hiidudemoviez",15],["imgsen",15],["imgsto",15],["incest",15],["incestflix",15],["javmost",15],["keeplinks",15],["keepvid",15],["keralahd",15],["khatrimazaful",15],["khatrimazafull",15],["leechall",15],["linkshorts",15],["mangovideo",15],["masaporn",15],["miniurl",15],["mirrorace",15],["mixdroop",15],["mixdrop",15],["mkvcage",15],["mlbstream",15],["mlsbd",15],["mmsbee",15],["motogpstream",15],["movieplex",15],["movierulzlink",15],["movies123",15],["moviesflix",15],["moviesmeta",[15,43]],["moviessources",15],["moviesverse",15],["moviezwaphd",15],["mrunblock",15],["nbastream",15],["newmovierulz",15],["nflstream",15],["nhlstream",15],["noblocktape",15],["nocensor",15],["onlyfams",15],["ouo",15],["pctfenix",[15,43]],["pctnew",[15,43]],["peliculas24",15],["pelisplus",15],["piratebay",15],["plyjam",15],["plylive",15],["plyvdo",15],["pornhoarder",15],["prbay",15],["projectfreetv",15],["proxybit",15],["psarips",15],["racaty",15],["remaxhd",15],["rintor",15],["rnbxclusive",15],["rnbxclusive0",15],["rnbxclusive1",15],["rojadirecta",15],["rojadirectaenvivo",15],["rugbystreams",15],["safetxt",15],["shadowrangers",15],["shahi4u",15],["shahid4u1",15],["shahid4uu",15],["shavetape",15],["shortearn",15],["shorten",15],["shorttey",15],["shortzzy",15],["skymovieshd",15],["socceronline",15],["softarchive",15],["sports-stream",15],["sshhaa",15],["stapadblockuser",15],["stape",15],["stapewithadblock",15],["starmusiq",15],["strcloud",15],["streamadblocker",[15,43]],["streamadblockplus",15],["streamcdn",15],["streamhub",15],["streamsport",15],["streamta",15],["streamtape",15],["streamtapeadblockuser",15],["strikeout",15],["strtape",15],["strtapeadblock",15],["strtapeadblocker",15],["strtapewithadblock",15],["strtpe",15],["swatchseries",15],["tabooflix",15],["tennisstreams",15],["themoviesflix",15],["thepiratebay",15],["thisav",15],["tmearn",15],["toonanime",15],["torlock",15],["tormalayalam",15],["torrentz2eu",15],["tutelehd",15],["tvply",15],["u4m",15],["ufcstream",15],["unblocknow",15],["uploadbuzz",15],["usagoals",15],["vexmoviex",15],["vidclouds",15],["vidlox",15],["vipbox",[15,43]],["vipboxtv",[15,43]],["vipleague",15],["watch-series",15],["watchseries",15],["xclusivejams",15],["xmoviesforyou",15],["youdbox",15],["ytmp3eu",15],["yts-subs",15],["yts",15],["zooqle",15],["dutchycorp",16],["dood",[26,43]],["doodstream",26],["dooood",[26,43]],["shrinke",28],["shrinkme",28],["mydverse",37],["poplinks",38],["123movies",43],["123moviesla",43],["123movieweb",43],["2embed",43],["4hiidude",43],["720pstream",43],["9xmovies",43],["adshort",43],["allmovieshub",43],["asianplay",43],["atishmkv",43],["cricstream",43],["crictime",43],["databasegdriveplayer",43],["dloader",43],["easylinks",43],["extralinks",43],["extramovies",43],["faselhd",43],["filemoon",43],["filmy",43],["filmyhit",43],["filmywap",43],["fmovies",43],["fsapi",43],["gdplayer",43],["gdriveplayer",43],["goload",43],["gomoviefree",43],["gomovies",43],["gowatchseries",43],["hdmoviz",43],["hindilinks4u",43],["hurawatch",43],["isaidub",43],["isaidubhd",43],["jalshamoviezhd",43],["jiorockers",43],["linkshub",43],["linksme",43],["livecricket",43],["madrasdub",43],["mkvcinemas",43],["mobilemovies",43],["movies2watch",43],["moviesda1",43],["moviespapa",43],["mp4moviez",43],["mydownloadtube",43],["nsw2u",43],["nuroflix",43],["o2tvseries",43],["o2tvseriesz",43],["pirlotv",43],["poscitech",43],["primewire",43],["serienstream",43],["sflix",43],["shahed4u",43],["shaheed4u",43],["speedostream",43],["sportcast",43],["sportskart",43],["streamingcommunity",43],["tamilarasan",43],["tamilfreemp3songs",43],["tamilprinthd",43],["torrentdosfilmes",43],["uploadrar",43],["uqload",43],["vidcloud9",43],["vido",43],["vidoo",43],["vudeo",43],["vumoo",43],["watchomovies",[43,52]],["yesmovies",43],["kickass",44],["cine-calidad",50],["actvid",78]]);

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
