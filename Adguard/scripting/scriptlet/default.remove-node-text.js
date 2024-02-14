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

const argsList = [["script","AdDefend"],["script","/getAdUnitPath|\\.then\\(eval\\)|DisplayAcceptableAdIfAdblocked|,eval\\)\\)\\)\\;|\\.join\\(\\'\\'\\)\\}\\;/"],["script","/==undefined.*body/"],["script","style"],["script","Promise"],["script","Number.isSafeInteger"],["script","Reflect"],["script","document.write"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","deblocker"],["script","exdynsrv"],["script","/adb/i"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/document\\.createElement|\\.banner-in/"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|adblock/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","alert"],["script","/adblock|popunder/"],["script","fetch"],["script","window.open"],["script",";break;case $."],["script","zaraz"],["script","shown_at"],["script","googlesyndication"],["script","queue.addFile"],["script","/bypass.php"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","AdbModel"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script","adb_detected"],["script","Adblock"],["script","break;case $."],["style","text-decoration"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","charCodeAt"],["script","checkifscript"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","popunder"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","KCgpPT57bGV0IGU"],["script","error-report.com"],["script","AdblockRegixFinder"],["script","serve"],["script",".slice(0, -1); }"],["script","(Math.PI).toFixed(10).slice(0, -1);"],["script","/ConsoleBan|alert|AdBlocker/"],["script","alert","condition","adblock"],["script","adb"],["script","await fetch"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/^Advertisement$/"],["script","navigator.brave"],["script","zfgloaded"],["script","ai_adb"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/modal|popupads/"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","ad_block"],["script","app_checkext"],["script","clientHeight"],["script","/url_key|adHtml/"],["script","pop.target"],["script","showadblock"],["script","axios"],["script","ad block"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","AaDetector"],["script","AdBlock"],["script","Symbol.iterator"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","detectAdBlock"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","document.head.appendChild"],["script","Number"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","constructor"],["script","/adbl/i"],["script","detect"],["script","btnHtml"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","vglnk"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","/\"body\"|\"bo\"\\+\"dy\"|\"bod\"\\+\"y\"|\"b\"\\+\"od\"\\+\"y\"|\"b\"\\+\"od\"\\+\"y\"|\"b\"[\\s\\S]{0,}\\+[\\s\\S]{0,}\"od\"[\\s\\S]{0,}\\+[\\s\\S]{0,}\"y\"|\"b\"[\\s\\S]{0,}\"o\"[\\s\\S]{0,}\"d\"[\\s\\S]{0,}\"y\"[\\s\\S]{0,}|`b[\\s\\S]{0,}`o[\\s\\S]{0,}`d[\\s\\S]{0,}`y[\\s\\S]{0,}|b\\$|u006f|document\\.body;|\\[\"document\"\\]|\\[[\\s\\S]{0,}\"document\"|`\\$\\{\\s*\"|mddd4ff4ded34344|\"riot\"|\"setTimeout\"|\"setT\"\\+\"imeout\"|\"r\"\\+\"iot\"|\"docu\"\\+\"ment\"|window\\s*\\.\\s*riot|\\!window\\.a_z3q3sZ1|`\\+`|`rep|\\[`re|re`|\\}r\\$/g"],["script","throw Error","condition","/^\\s*\\(?function.*\\);\\}\\}\\(\\)\\)\\);/"],["script","NREUM"]];

const hostnamesMap = new Map([["giga.de",0],["kino.de",0],["teltarif.de",1],["aupetitparieur.com",2],["allthingsvegas.com",2],["100percentfedup.com",2],["beforeitsnews.com",2],["concomber.com",2],["conservativebrief.com",2],["conservativefiringline.com",2],["dailylol.com",2],["funnyand.com",2],["letocard.fr",2],["mamieastuce.com",2],["meilleurpronostic.fr",2],["patriotnationpress.com",2],["toptenz.net",2],["vitamiiin.com",2],["writerscafe.org",2],["populist.press",2],["dailytruthreport.com",2],["livinggospeldaily.com",2],["first-names-meanings.com",2],["welovetrump.com",2],["thehayride.com",2],["thelibertydaily.com",2],["thepoke.co.uk",2],["thepolitistick.com",2],["theblacksphere.net",2],["shark-tank.com",2],["naturalblaze.com",2],["greatamericanrepublic.com",2],["dailysurge.com",2],["truthlion.com",2],["flagandcross.com",2],["westword.com",2],["republicbrief.com",2],["freedomfirstnetwork.com",2],["phoenixnewtimes.com",2],["designbump.com",2],["clashdaily.com",2],["madworldnews.com",2],["reviveusa.com",2],["sonsoflibertymedia.com",2],["thedesigninspiration.com",2],["videogamesblogger.com",2],["protrumpnews.com",2],["thepalmierireport.com",2],["kresy.pl",2],["thepatriotjournal.com",2],["gellerreport.com",2],["thegatewaypundit.com",2],["wltreport.com",2],["miaminewtimes.com",2],["politicalsignal.com",2],["rightwingnews.com",2],["bigleaguepolitics.com",2],["comicallyincorrect.com",2],["moviepilot.de",4],["yts.mx",7],["upornia.com",9],["pinsystem.co.uk",10],["elrellano.com",10],["tinyppt.com",10],["downfile.site",10],["expertvn.com",10],["trangchu.news",10],["bharathwick.com",10],["descargaspcpro.net",10],["dx-tv.com",10],["rt3dmodels.com",10],["plc4me.com",10],["blisseyhusbands.com",10],["madaradex.org",10],["franceprefecture.fr",10],["learnmany.in",10],["loaninsurehub.com",10],["appkamods.com",10],["techacode.com",10],["3dmodelshare.org",10],["nulleb.com",10],["asiaon.top",10],["reset-scans.us",10],["coursesghar.com",10],["thecustomrom.com",10],["snlookup.com",10],["bingotingo.com",10],["ghior.com",10],["3dmili.com",10],["karanpc.com",10],["plc247.com",10],["hiraethtranslation.com",10],["apkdelisi.net",10],["javindo.eu.org",10],["chindohot.site",10],["freepasses.org",10],["tomarnarede.pt",10],["basketballbuzz.ca",10],["dribbblegraphics.com",10],["kemiox.com",10],["checkersmenu.us",10],["teksnologi.com",10],["dollareuro.live",10],["eporner.com",12],["germancarforum.com",13],["cybercityhelp.in",13],["sinvida.me",[14,15]],["streamnoads.com",[14,15,48]],["bowfile.com",14],["cloudvideo.tv",[14,48]],["coloredmanga.com",14],["embedstream.me",[14,15,48]],["exeo.app",14],["hiphopa.net",[14,15]],["megaup.net",14],["tv247.us",[14,15]],["uploadhaven.com",14],["userscloud.com",[14,48]],["mdfx9dc8n.net",15],["mdzsmutpcvykb.net",15],["mixdrop21.net",15],["mixdropjmk.pw",15],["123movies4u.site",15],["1337xporn.com",15],["141jav.com",15],["1bit.space",15],["1bitspace.com",15],["38dh2.top",15],["3dporndude.com",15],["4archive.org",15],["4horlover.com",15],["560pmovie.com",15],["60fps.xyz",15],["85tube.com",15],["85videos.com",15],["8xlinks.click",15],["a2zcrackworld.com",15],["aazzz.xyz",15],["acefile.co",15],["actusports.eu",15],["adblockplustape.com",15],["adclickersbot.com",15],["adricami.com",15],["adslink.pw",15],["adultstvlive.com",15],["adz7short.space",15],["aeblender.com",15],["ahdafnews.blogspot.com",15],["ak47sports.com",15],["akuma.moe",15],["allplayer.tk",15],["allstreaming.online",15],["amadoras.cf",15],["amadorasdanet.shop",15],["amateurblog.tv",15],["androidadult.com",15],["anhsexjav.xyz",15],["anidl.org",15],["anime-loads.org",15],["animeblkom.net",15],["animefire.net",15],["animelek.me",15],["animeshouse.net",15],["animespire.net",15],["animestotais.xyz",15],["animeyt.es",15],["anroll.net",15],["anymoviess.xyz",15],["aotonline.org",15],["asenshu.com",15],["asialiveaction.com",15],["asianclipdedhd.net",15],["askim-bg.com",15],["asumsikedaishop.com",15],["avcrempie.com",15],["avseesee.com",15],["backfirstwo.com",15],["bajarjuegospcgratis.com",15],["balkanportal.net",15],["balkanteka.net",15],["bdnewszh.com",[15,48]],["belowporn.com",15],["bestclaimtrx.xyz",15],["bestgirlsexy.com",15],["bestnhl.com",15],["bestporn4free.com",15],["bestporncomix.com",15],["bet36.es",15],["bikinitryon.net",15],["birdurls.com",15],["bitsearch.to",15],["blackcockadventure.com",15],["blackcockchurch.org",15],["blackporncrazy.com",15],["blizzboygames.net",15],["blizzpaste.com",15],["blkom.com",15],["blog-peliculas.com",15],["blogtrabalhista.com",15],["blurayufr.xyz",15],["bobsvagene.club",15],["bolly4umovies.click",15],["bonusharian.pro",15],["brilian-news.id",15],["brupload.net",15],["bucitana.com",15],["cablegratis.online",15],["camchickscaps.com",15],["camgirlcum.com",15],["camgirls.casa",15],["cashurl.in",15],["castingx.net",15],["ccurl.net",[15,48]],["celebrity-leaks.net",15],["cgpelis.net",15],["charexempire.com",15],["clasico.tv",15],["clik.pw",15],["coin-free.com",[15,35]],["coins100s.fun",15],["comicsmanics.com",15],["compucalitv.com",15],["coolcast2.com",15],["cosplaytab.com",15],["countylocalnews.com",15],["cpmlink.net",15],["crackstreamshd.click",15],["crespomods.com",15],["crisanimex.com",15],["crunchyscan.fr",15],["cuevana3.fan",15],["cuevana3hd.com",15],["cumception.com",15],["curvaweb.com",15],["cutpaid.com",15],["datawav.club",15],["daughtertraining.com",15],["deepgoretube.site",15],["deltabit.co",15],["depvailon.com",15],["derleta.com",15],["desivdo.com",15],["desixx.net",15],["detikkebumen.com",15],["deutschepornos.me",15],["diasoft.xyz",15],["directupload.net",15],["diskusscan.com",15],["dixva.com",15],["dlhd.sx",15],["doctormalay.com",15],["dofusports.xyz",15],["dogemate.com",15],["doods.cam",15],["doodskin.lat",15],["downloadrips.com",15],["downvod.com",15],["dphunters.mom",15],["dragontranslation.com",15],["duddes.xyz",15],["dvdfullestrenos.com",15],["ebookbb.com",15],["ebookhunter.net",15],["egyanime.com",15],["egygost.com",15],["egyshare.cc",15],["ekasiwap.com",15],["electro-torrent.pl",15],["elil.cc",15],["embed4u.xyz",15],["eplayer.click",15],["erovoice.us",15],["eroxxx.us",15],["estrenosdoramas.net",15],["everia.club",15],["everythinginherenet.blogspot.com",15],["extrafreetv.com",15],["extremotvplay.com",15],["fapinporn.com",15],["fapptime.com",15],["fashionblog.tv",15],["fastreams.live",15],["faucethero.com",15],["fembed.com",15],["femdom-joi.com",15],["fileone.tv",15],["film1k.com",15],["filmeonline2023.net",15],["filmesonlinex.org",15],["filmesonlinexhd.biz",[15,48]],["filmovi.ws",[15,48]],["filmovitica.com",15],["filmymaza.blogspot.com",15],["filthy.family",15],["firstmovies.to",15],["fixfinder.click",15],["flostreams.xyz",15],["flyfaucet.com",15],["footyhunter.lol",15],["footyhunter3.xyz",[15,48]],["forex-golds.com",15],["forex-trnd.com",15],["forumchat.club",15],["forumlovers.club",15],["freemoviesonline.biz",15],["freeomovie.co.in",15],["freeomovie.to",15],["freeporncomic.net",15],["freepornhdonlinegay.com",15],["freeproxy.io",15],["freeuse.me",15],["freeusexporn.com",15],["fsicomics.com",15],["gambarbogel.xyz",15],["gamepcfull.com",15],["gameronix.com",15],["gamesfullx.com",15],["gameshdlive.net",15],["gameshdlive.xyz",[15,48]],["gamesmountain.com",15],["gamesrepacks.com",15],["gamingguru.fr",15],["gamovideo.com",15],["garota.cf",15],["gaydelicious.com",15],["gaypornmasters.com",15],["gaysex69.net",15],["gemstreams.com",15],["get-to.link",15],["girlscanner.org",15],["giurgiuveanul.ro",15],["gledajcrtace.xyz",15],["gocast2.com",15],["gomo.to",15],["gostosa.cf",15],["gtlink.co",15],["gwiazdypornosow.pl",15],["haho.moe",15],["hatsukimanga.com",15],["hayhd.net",15],["hdsaprevodom.com",15],["hdstreamss.club",15],["hentais.tube",15],["hentaistream.co",15],["hentaitk.net",15],["hentaitube.online",15],["hentaiworld.tv",15],["hesgoal.tv",15],["hexupload.net",15],["hhkungfu.tv",15],["highlanderhelp.com",15],["hindimean.com",15],["hindimovies.to",[15,48]],["hiperdex.com",15],["hispasexy.org",15],["hitomi.la",15],["hitprn.com",15],["hoca4u.com",15],["hollymoviehd.cc",15],["hoodsite.com",15],["hopepaste.download",15],["hornylips.com",15],["hotgranny.live",15],["hotmama.live",15],["hqcelebcorner.net",15],["huren.best",15],["hwnaturkya.com",[15,48]],["hxfile.co",[15,48]],["igfap.com",15],["ihdstreams.xyz",15],["iklandb.com",15],["illink.net",15],["imgkings.com",15],["imgsex.xyz",15],["imx.to",15],["influencersgonewild.org",15],["infosgj.free.fr",15],["investnewsbrazil.com",15],["itdmusics.com",15],["itsuseful.site",15],["itunesfre.com",15],["iwatchfriendsonline.net",[15,88]],["jackstreams.com",15],["jatimupdate24.com",15],["javcl.com",15],["javf.net",15],["javhay.net",15],["javhoho.com",15],["javhun.com",15],["javleak.com",15],["javporn.best",15],["javsex.to",15],["javtiful.com",15],["jimdofree.com",15],["jiofiles.org",15],["jorpetz.com",15],["journalyc.online",15],["jp-films.com",15],["jpop80ss3.blogspot.com",15],["jpopsingles.eu",15],["kantotflix.net",15],["kantotinyo.com",15],["kaoskrew.org",15],["kaplog.com",15],["keralatvbox.com",15],["kimochi.info",15],["kimochi.tv",15],["kinemania.tv",15],["konstantinova.net",15],["koora-online.live",15],["kunmanga.com",15],["kutmoney.com",15],["kwithsub.com",15],["ladangreceh.xyz",15],["lat69.me",15],["latinblog.tv",15],["latinomegahd.net",15],["lazyfaucet.com",15],["leechpremium.link",15],["legendas.dev",15],["legendei.net",15],["lightdlmovies.blogspot.com",15],["lighterlegend.com",15],["linclik.com",15],["linkebr.com",15],["linkrex.net",15],["links.worldfree4u-lol.online",15],["linksfy.co",15],["lody.ink",15],["lovesomecommunity.com",15],["lulustream.com",[15,48]],["luluvdo.com",[15,48]],["luzcameraeacao.shop",15],["manga-oni.com",15],["mangaboat.com",15],["mangagenki.me",15],["mangahere.onl",15],["mangaweb.xyz",15],["mangoporn.net",15],["manhwahentai.me",15],["masahub.com",15],["masahub.net",15],["maturegrannyfuck.com",15],["mdy48tn97.com",15],["mediapemersatubangsa.com",15],["mega-mkv.com",15],["megapastes.com",15],["megapornpics.com",15],["messitv.net",15],["meusanimes.net",15],["milfmoza.com",15],["milfzr.com",15],["millionscast.com",15],["mimaletamusical.blogspot.com",15],["mitly.us",15],["mkv-pastes.com",15],["modb.xyz",15],["monaskuliner.ac.id",15],["moredesi.com",15],["movgotv.net",15],["movi.pk",15],["movieswbb.com",15],["moviewatch.com.pk",[15,48]],["mp4upload.com",15],["mrskin.live",15],["multicanaistv.com",15],["mundowuxia.com",15],["myeasymusic.ir",15],["myonvideo.com",15],["myyouporn.com",15],["narutoget.info",15],["naughtypiss.com",15],["nerdiess.com",15],["new-fs.eu",15],["newtorrentgame.com",15],["nflstreams.me",15],["niaomea.me",[15,48]],["nicekkk.com",15],["nicesss.com",15],["nlegs.com",15],["nolive.me",[15,48]],["nopay.info",15],["nopay2.info",[15,128]],["notformembersonly.com",15],["novamovie.net",15],["novelpdf.xyz",15],["novelssites.com",[15,48]],["novelup.top",15],["nsfwr34.com",15],["nu6i-bg-net.com",15],["nudebabesin3d.com",15],["nukedfans.com",15],["nuoga.eu",15],["nzbstars.com",15],["ohjav.com",15],["ojearnovelas.com",15],["okanime.xyz",15],["olarixas.xyz",15],["oldbox.cloud",15],["olweb.tv",15],["olympicstreams.me",15],["on9.stream",15],["oncast.xyz",15],["onepiece-mangaonline.com",15],["onifile.com",15],["onionstream.live",15],["onlinesaprevodom.net",15],["onlyfullporn.video",15],["onplustv.live",15],["originporn.com",15],["ovagames.com",15],["ovamusic.com",15],["owllink.net",15],["packsporn.com",15],["pahaplayers.click",15],["palimas.org",15],["pandafiles.com",15],["papahd.club",15],["papahd1.xyz",15],["password69.com",15],["paste3.org",15],["pastemytxt.com",15],["payskip.org",15],["peeplink.in",15],["peliculasmx.net",15],["pervertgirlsvideos.com",15],["pervyvideos.com",15],["phim12h.com",15],["picdollar.com",15],["pickteenz.com",15],["pics4you.net",15],["picsxxxporn.com",15],["pinayscandalz.com",15],["pinkueiga.net",15],["piratefast.xyz",15],["piratehaven.xyz",15],["pirateiro.com",15],["pirlotvonline.org",15],["playtube.co.za",15],["plugintorrent.com",15],["pmvzone.com",15],["porndish.com",15],["pornez.net",15],["pornfetishbdsm.com",15],["pornfits.com",15],["pornhd720p.com",15],["pornobr.club",15],["pornobr.ninja",15],["pornodominicano.net",15],["pornofaps.com",15],["pornoflux.com",15],["pornotorrent.com.br",15],["pornredit.com",15],["pornstarsyfamosas.es",15],["pornstreams.co",15],["porntn.com",15],["pornxbit.com",15],["pornxday.com",15],["portaldasnovinhas.shop",15],["portugues-fcr.blogspot.com",15],["poscishd.online",15],["poscitesch.com",[15,48]],["poseyoung.com",15],["pover.org",15],["proxyninja.org",15],["pubfilmz.com",15],["publicsexamateurs.com",15],["punanihub.com",15],["putlocker5movies.org",15],["pxxbay.com",15],["r18.best",15],["ragnaru.net",15],["rapbeh.net",15],["rapelust.com",15],["rapload.org",15],["read-onepiece.net",15],["retro-fucking.com",15],["retrotv.org",15],["robaldowns.com",15],["rockdilla.com",15],["rojadirectatvenvivo.com",15],["rojitadirecta.blogspot.com",15],["romancetv.site",15],["rule34.club",15],["rule34hentai.net",15],["rumahbokep-id.com",15],["safego.cc",15],["sakurafile.com",15],["satoshi-win.xyz",15],["scat.gold",15],["scatfap.com",15],["scatkings.com",15],["scnlog.me",15],["scripts-webmasters.net",15],["serie-turche.com",15],["serijefilmovi.com",15],["sexcomics.me",15],["sexdicted.com",15],["sexgay18.com",15],["sexofilm.co",15],["sextgem.com",15],["sextubebbw.com",15],["sgpics.net",15],["shadowrangers.live",15],["shahee4u.cam",15],["shahiid-anime.net",15],["shemale6.com",15],["shinden.pl",15],["short.es",15],["showmanga.blog.fc2.com",15],["shrt10.com",15],["shurt.pw",15],["sideplusleaks.net",15],["silverblog.tv",15],["silverpic.com",15],["sinhalasub.life",15],["sinsitio.site",15],["skidrowcpy.com",15],["skidrowfull.com",15],["skidrowreloaded.com",15],["slut.mom",15],["smallencode.me",15],["smoner.com",15],["smplace.com",15],["soccerinhd.com",15],["socceron.name",15],["softairbay.com",15],["sokobj.com",15],["songsio.com",15],["souexatasmais.com",15],["sportbar.live",15],["sportea.online",15],["sportskart.xyz",15],["sportstream1.cfd",15],["srt.am",15],["srts.me",15],["stakes100.xyz",15],["stbemuiptv.com",15],["stockingfetishvideo.com",15],["stream.crichd.vip",15],["stream.lc",15],["stream25.xyz",15],["streambee.to",15],["streamcenter.pro",15],["streamers.watch",15],["streamgo.to",15],["streamkiste.tv",15],["streamoporn.xyz",15],["streamoupload.xyz",15],["streamservicehd.click",15],["streamvid.net",[15,23]],["subtitleporn.com",15],["subtitles.cam",15],["suicidepics.com",15],["supertelevisionhd.com",15],["supexfeeds.com",15],["swzz.xyz",15],["sxnaar.com",15],["tabooporns.com",15],["taboosex.club",15],["tapeantiads.com",15],["tapeblocker.com",15],["tapenoads.com",15],["tapewithadblock.org",[15,150]],["teamos.xyz",15],["teen-wave.com",15],["teenporncrazy.com",15],["telegramgroups.xyz",15],["telenovelasweb.com",15],["tensei-shitara-slime-datta-ken.com",15],["tfp.is",15],["tgo-tv.co",[15,48]],["thaihotmodels.com",15],["theblueclit.com",15],["thebussybandit.com",15],["theicongenerator.com",15],["thelastdisaster.vip",15],["thepiratebay0.org",15],["thepiratebay10.info",15],["thesexcloud.com",15],["thothub.today",15],["tightsexteens.com",15],["tojav.net",15],["tokyoblog.tv",15],["tonnestreamz.xyz",15],["top16.net",15],["topvideosgay.com",15],["torrage.info",15],["torrents.vip",15],["torrsexvid.com",15],["tpb-proxy.xyz",15],["trannyteca.com",15],["trendytalker.com",15],["tumanga.net",15],["turbogvideos.com",15],["turbovid.me",15],["turkishseriestv.org",15],["turksub24.net",15],["tutele.sx",15],["tutelehd3.xyz",15],["tvglobe.me",15],["tvpclive.com",15],["tvs-widget.com",15],["tvseries.video",15],["ucptt.com",15],["ufaucet.online",15],["ufcfight.online",15],["uhdgames.xyz",15],["ultrahorny.com",15],["ultraten.net",15],["unblockweb.me",15],["underhentai.net",15],["uniqueten.net",15],["upbaam.com",15],["upstream.to",15],["valeriabelen.com",15],["verdragonball.online",15],["vfxmed.com",15],["video.az",15],["videostreaming.rocks",15],["videowood.tv",15],["vidorg.net",15],["vidtapes.com",15],["vidz7.com",15],["vikistream.com",15],["vikv.net",15],["virpe.cc",15],["visifilmai.org",15],["viveseries.com",15],["vladrustov.sx",15],["volokit2.com",15],["vstorrent.org",15],["w-hentai.com",15],["watchaccordingtojimonline.com",15],["watchbrooklynnine-nine.com",15],["watchdowntonabbeyonline.com",15],["watchelementaryonline.com",15],["watcheronline.net",15],["watchgleeonline.com",15],["watchjavidol.com",15],["watchkobestreams.info",15],["watchlostonline.net",15],["watchlouieonline.com",15],["watchmonkonline.com",15],["watchparksandrecreation.net",15],["watchprettylittleliarsonline.com",15],["watchrulesofengagementonline.com",15],["watchthekingofqueens.com",15],["watchthemiddleonline.com",15],["watchtvchh.xyz",15],["webcamrips.com",15],["wickedspot.org",15],["wincest.xyz",15],["witanime.best",15],["wolverdon.fun",15],["wolverdonx.com",15],["wordcounter.icu",15],["worldcupstream.pm",15],["worldmovies.store",15],["worldstreams.click",15],["wpdeployit.com",15],["wqstreams.tk",15],["wwwsct.com",15],["xanimeporn.com",15],["xblog.tv",15],["xn--verseriesespaollatino-obc.online",15],["xn--xvideos-espaol-1nb.com",15],["xpornium.net",15],["xsober.com",15],["xvip.lat",15],["xxgasm.com",15],["xxvideoss.org",15],["xxx18.uno",15],["xxxdominicana.com",15],["xxxfree.watch",15],["xxxmax.net",15],["xxxwebdlxxx.top",15],["xxxxvideo.uno",15],["y2b.wiki",15],["yabai.si",15],["yadixv.com",15],["yayanimes.net",15],["yeshd.net",15],["yodbox.com",15],["youjax.com",15],["youpits.xyz",15],["yourdailypornvideos.ws",15],["yourupload.com",15],["ytstv.me",15],["ytstvmovies.co",15],["ytstvmovies.xyz",15],["ytsyify.co",15],["ytsyifymovie.com",15],["zerion.cc",15],["zerocoin.top",15],["zitss.xyz",15],["zpaste.net",15],["zplayer.live",15],["faucet.ovh",16],["oko.sh",17],["washingtonpost.com",18],["bigbtc.win",19],["cryptofun.space",19],["gosexpod.com",20],["sexo5k.com",21],["truyen-hentai.com",21],["theshedend.com",23],["rsadnetworkinfo.com",23],["rsinsuranceinfo.com",23],["rsfinanceinfo.com",23],["rsgamer.app",23],["rssoftwareinfo.com",23],["rshostinginfo.com",23],["rseducationinfo.com",23],["zeroupload.com",23],["securenetsystems.net",23],["miniwebtool.com",23],["bchtechnologies.com",23],["spiegel.de",24],["appnee.com",25],["d0000d.com",26],["d0o0d.com",26],["do0od.com",26],["doods.pro",26],["ds2play.com",26],["ds2video.com",26],["onlyfaucet.com",27],["thebullspen.com",27],["livecamrips.com",28],["smutty.com",28],["down.dataaps.com",28],["filmweb.pl",28],["infinityscans.xyz",[29,152]],["infinityscans.net",[29,152]],["j8jp.com",30],["musichq.pe",31],["sekaikomik.bio",31],["iisfvirtual.in",32],["starxinvestor.com",32],["beatsnoop.com",32],["fetchpik.com",32],["hackerranksolution.in",32],["webhostingpost.com",[33,48]],["tophostingapp.com",33],["digitalmarktrend.com",33],["kenzo-flowertag.com",34],["mdn.lol",34],["btcbitco.in",35],["btcsatoshi.net",35],["cempakajaya.com",35],["crypto4yu.com",35],["gainl.ink",35],["manofadan.com",35],["readbitcoin.org",35],["wiour.com",35],["kienthucrangmieng.com",35],["tremamnon.com",35],["btc25.org",35],["tron-free.com",35],["bitsmagic.fun",35],["ourcoincash.xyz",35],["hynews.biz",35],["blog.cryptowidgets.net",36],["blog.insurancegold.in",36],["blog.wiki-topia.com",36],["blog.coinsvalue.net",36],["blog.cookinguide.net",36],["blog.freeoseocheck.com",36],["aylink.co",37],["sugarona.com",38],["nishankhatri.xyz",38],["highkeyfinance.com",38],["amanguides.com",38],["tinys.click",39],["answerpython.com",39],["gsm-solution.com",39],["h-donghua.com",39],["hindisubbedacademy.com",39],["pkgovjobz.com",39],["ripexbooster.xyz",39],["serial4.com",39],["serial412.blogspot.com",39],["sigmalinks.in",39],["tutorgaming.com",39],["aiimgvlog.fun",40],["appsbull.com",41],["diudemy.com",41],["maqal360.com",41],["mphealth.online",41],["makefreecallsonline.com",41],["androjungle.com",41],["bookszone.in",41],["drakescans.com",41],["shortix.co",41],["msonglyrics.com",41],["app-sorteos.com",41],["bokugents.com",41],["btvplus.bg",41],["blog24.me",[42,43]],["coingraph.us",44],["impact24.us",44],["iconicblogger.com",45],["tii.la",46],["kiemlua.com",47],["123moviefree4u.com",48],["194.163.183.129",48],["6movies.net",48],["adsh.cc",48],["afilmyhouse.blogspot.com",48],["ak.sv",48],["animefenix.com",48],["animefrenzy.net",48],["animeshouse.info",48],["animesultra.com",48],["api.webs.moe",48],["apkmody.io",48],["atglinks.com",48],["attvideo.com",48],["avimobilemovies.net",48],["backfirstwo.site",[48,119]],["cinema.cimatna.com",48],["crazyblog.in",48],["dembed1.com",48],["dembed2.com",48],["divicast.com",48],["egynow.cam",48],["embed.meomeo.pw",48],["fanproj.net",48],["filebox.click",48],["filmeserialeonline.org",48],["filmyzilla2021.xyz",48],["filmyzilla2022.com",48],["filmyzillafullmovie.waystohunt.info",48],["flexyhit.com",48],["foreverwallpapers.com",48],["french-streams.cc",48],["fslinks.org",48],["fstream365.com",48],["gdrivez.xyz",48],["hinatasoul.com",48],["hitmovies4u.com",48],["hotstar.news",48],["isaidub3.co",48],["membed.net",48],["mgnetu.com",48],["mhdtvsports.me",48],["moviesdanet.com",48],["moviewatchonline.com.pk",48],["mp3juice.info",48],["mp3juices.cc",48],["neomovies.net",48],["newsrade.com",48],["nollyverse.com",48],["oii.io",48],["pepperlive.info",48],["playertv.net",48],["putlocker68.com",48],["s.to",48],["sharkfish.xyz",48],["skidrowcodex.net",48],["sports-stream.site",48],["stream4free.live",48],["tamilmobilemovies.in",48],["thewatchseries.live",48],["tnmusic.in",48],["travelplanspro.com",48],["tusfiles.com",48],["unlimitmovies.com",48],["uploadflix.org",48],["vid-guard.com",48],["vidsaver.net",48],["vidspeeds.com",48],["viralitytoday.com",48],["voiranime.stream",48],["watchdoctorwhoonline.com",48],["webseriesclub.com",48],["ylink.bid",48],["ytix.xyz",48],["unblocked.id",50],["listendata.com",51],["7xm.xyz",51],["fastupload.io",51],["azmath.info",51],["wouterplanet.com",52],["androidacy.com",53],["jytechs.in",54],["djxmaza.in",54],["miuiflash.com",54],["thecubexguide.com",54],["veryfreeporn.com",55],["besthdgayporn.com",56],["drivenime.com",56],["freeroms.com",57],["soap2day-online.com",57],["austiblox.net",58],["btcbunch.com",59],["teachoo.com",60],["genshinlab.com",61],["fourfourtwo.co.kr",61],["interfootball.co.kr",61],["a-ha.io",61],["cboard.net",61],["mobilitytv.co.kr",61],["mememedia.co.kr",61],["newautopost.co.kr",61],["tvreport.co.kr",61],["tenbizt.com",61],["jjang0u.com",61],["joongdo.co.kr",61],["viva100.com",61],["thephoblographer.com",61],["newdaily.co.kr",61],["dogdrip.net",61],["golf-live.at",61],["gamingdeputy.com",61],["thesaurus.net",61],["tweaksforgeeks.com",61],["alle-tests.nl",61],["apkmirror.com",61],["dotkeypress.kr",61],["viewcash.co.kr",61],["tripplus.co.kr",61],["enterdiary.com",61],["mtodayauto.com",61],["hotplacehunter.co.kr",61],["mystylezip.com",61],["majorgeeks.com",61],["meconomynews.com",61],["brandbrief.co.kr",61],["dfast.kr",61],["youtu.co",61],["mlbpark.donga.com",61],["capress.kr",61],["carandmore.co.kr",61],["maxmovie.kr",61],["motorgraph.com",61],["newsbell.co.kr",61],["tminews.co.kr",61],["thehousemagazine.kr",61],["hardreset.info",61],["metabattle.com",61],["maketecheasier.com",61],["motorbikecatalog.com",61],["heraldcorp.com",61],["allthetests.com",62],["issuya.com",62],["topstarnews.net",62],["bitcotasks.com",63],["udvl.com",64],["www.chip.de",[65,66]],["topsporter.net",67],["sportshub.to",67],["bitcosite.com",68],["bitzite.com",68],["easymc.io",69],["yunjiema.top",69],["hacoos.com",70],["bondagevalley.cc",71],["zefoy.com",72],["vidello.net",73],["resizer.myct.jp",74],["gametohkenranbu.sakuraweb.com",75],["jisakuhibi.jp",76],["rank1-media.com",76],["lifematome.blog",77],["fm.sekkaku.net",78],["free-avx.jp",79],["dvdrev.com",80],["betweenjpandkr.blog",81],["nft-media.net",82],["ghacks.net",83],["leak.sx",84],["pornleaks.in",84],["songspk2.info",85],["truyentranhfull.net",86],["nectareousoverelate.com",89],["khoaiphim.com",90],["haafedk2.com",91],["fordownloader.com",91],["jovemnerd.com.br",92],["nicomanga.com",93],["totalcsgo.com",94],["vivamax.asia",95],["manysex.com",96],["gaminginfos.com",97],["tinxahoivn.com",98],["forums-fastunlock.com",99],["automoto.it",100],["codelivly.com",101],["ophim.vip",102],["touguatize.monster",103],["client.falixnodes.net",104],["novelhall.com",105],["hes-goal.net",106],["abc17news.com",107],["adoredbyalex.com",107],["agrodigital.com",107],["al.com",107],["aliontherunblog.com",107],["allaboutthetea.com",107],["allmovie.com",107],["allmusic.com",107],["allthingsthrifty.com",107],["amessagewithabottle.com",107],["androidpolice.com",107],["antyradio.pl",107],["artforum.com",107],["artnews.com",107],["avherald.com",107],["awkward.com",107],["awkwardmom.com",107],["bailiwickexpress.com",107],["barnsleychronicle.com",107],["becomingpeculiar.com",107],["bethcakes.com",107],["betweenenglandandiowa.com",107],["blogher.com",107],["bluegraygal.com",107],["briefeguru.de",107],["carmagazine.co.uk",107],["cattime.com",107],["cbr.com",107],["cbssports.com",107],["celiacandthebeast.com",107],["chaptercheats.com",107],["cleveland.com",107],["collider.com",107],["comingsoon.net",107],["commercialobserver.com",107],["competentedigitale.ro",107],["crafty.house",107],["dailyvoice.com",107],["decider.com",107],["didyouknowfacts.com",107],["dogtime.com",107],["dualshockers.com",107],["dustyoldthing.com",107],["faithhub.net",107],["femestella.com",107],["footwearnews.com",107],["freeconvert.com",107],["frogsandsnailsandpuppydogtail.com",107],["fsm-media.com",107],["funtasticlife.com",107],["fwmadebycarli.com",107],["gamerant.com",107],["gfinityesports.com",107],["givemesport.com",107],["gulflive.com",107],["helloflo.com",107],["homeglowdesign.com",107],["honeygirlsworld.com",107],["howtogeek.com",107],["insider-gaming.com",107],["insurancejournal.com",107],["jasminemaria.com",107],["kion546.com",107],["lehighvalleylive.com",107],["lettyskitchen.com",107],["lifeinleggings.com",107],["liveandletsfly.com",107],["lizzieinlace.com",107],["localnews8.com",107],["lonestarlive.com",107],["madeeveryday.com",107],["maidenhead-advertiser.co.uk",107],["makeuseof.com",107],["mardomreport.net",107],["masslive.com",107],["melangery.com",107],["milestomemories.com",107],["mlive.com",107],["modernmom.com",107],["momtastic.com",107],["mostlymorgan.com",107],["motherwellmag.com",107],["movieweb.com",107],["muddybootsanddiamonds.com",107],["musicfeeds.com.au",107],["mylifefromhome.com",107],["nationalreview.com",107],["neoskosmos.com",107],["nj.com",107],["nordot.app",107],["nothingbutnewcastle.com",107],["nsjonline.com",107],["nypost.com",107],["oakvillenews.org",107],["observer.com",107],["oregonlive.com",107],["ourlittlesliceofheaven.com",107],["pagesix.com",107],["palachinkablog.com",107],["pennlive.com",107],["pinkonthecheek.com",107],["politicususa.com",107],["predic.ro",107],["puckermom.com",107],["qtoptens.com",107],["realgm.com",107],["reelmama.com",107],["robbreport.com",107],["royalmailchat.co.uk",107],["samchui.com",107],["sandrarose.com",107],["screenrant.com",107],["sheknows.com",107],["sherdog.com",107],["sidereel.com",107],["silive.com",107],["simpleflying.com",107],["sloughexpress.co.uk",107],["spacenews.com",107],["sportsgamblingpodcast.com",107],["spotofteadesigns.com",107],["stacysrandomthoughts.com",107],["ssnewstelegram.com",107],["superherohype.com",107],["syracuse.com",107],["tablelifeblog.com",107],["thebeautysection.com",107],["thecelticblog.com",107],["thecurvyfashionista.com",107],["thefashionspot.com",107],["thegamer.com",107],["thegamescabin.com",107],["thenerdyme.com",107],["thenonconsumeradvocate.com",107],["theprudentgarden.com",107],["timesnews.net",107],["toyotaklub.org.pl",107],["travelingformiles.com",107],["tutsnode.org",107],["tvline.com",107],["viralviralvideos.com",107],["wannacomewith.com",107],["wimp.com",107],["windsorexpress.co.uk",107],["woojr.com",107],["worldoftravelswithkids.com",107],["xda-developers.com",107],["cheatsheet.com",108],["pwinsider.com",108],["baeldung.com",108],["bagi.co.in",109],["keran.co",109],["biblestudytools.com",110],["christianheadlines.com",110],["ibelieve.com",110],["kuponigo.com",111],["kimcilonly.site",112],["kimcilonly.link",112],["cryptoearns.com",113],["inxxx.com",114],["ipaspot.app",115],["embedwish.com",116],["filelions.live",116],["leakslove.net",116],["jenismac.com",117],["vxetable.cn",118],["jewelavid.com",119],["nizarstream.com",119],["snapwordz.com",120],["toolxox.com",120],["rl6mans.com",120],["idol69.net",120],["plumbersforums.net",121],["123movies57.online",122],["gulio.site",123],["mediaset.es",124],["izlekolik.net",125],["donghuaworld.com",126],["letsdopuzzles.com",127],["tainio-mania.online",128],["hes-goals.io",129],["pkbiosfix.com",129],["casi3.xyz",129],["rediff.com",130],["dzapk.com",131],["darknessporn.com",132],["familyporner.com",132],["freepublicporn.com",132],["pisshamster.com",132],["punishworld.com",132],["xanimu.com",132],["pig69.com",133],["cosplay18.pics",133],["javhdo.net",134],["eroticmoviesonline.me",135],["teleclub.xyz",136],["ecamrips.com",137],["showcamrips.com",137],["9animetv.to",138],["jornadaperfecta.com",139],["loseart.com",140],["sousou-no-frieren.com",141],["veev.to",142],["intro-hd.net",143],["monacomatin.mc",143],["nodo313.net",143],["unite-guide.com",144],["appimagehub.com",145],["gnome-look.org",145],["store.kde.org",145],["linux-apps.com",145],["opendesktop.org",145],["pling.com",145],["xfce-look.org",145],["botcomics.com",146],["cefirates.com",146],["chandlerorchards.com",146],["comicleaks.com",146],["marketdata.app",146],["monumentmetals.com",146],["tapmyback.com",146],["ping.gg",146],["revistaferramental.com.br",146],["hawpar.com",146],["alpacafinance.org",[146,147]],["nookgaming.com",146],["enkeleksamen.no",146],["kvest.ee",146],["creatordrop.com",146],["panpots.com",146],["cybernetman.com",146],["bitdomain.biz",146],["gerardbosch.xyz",146],["fort-shop.kiev.ua",146],["accuretawealth.com",146],["resourceya.com",146],["tracktheta.com",146],["tt.live",147],["future-fortune.com",147],["abhijith.page",147],["madrigalmaps.com",147],["adventuretix.com",147],["panprices.com",148],["intercity.technology",148],["freelancer.taxmachine.be",148],["adria.gg",148],["fjlaboratories.com",148],["proboards.com",149],["winclassic.net",149],["perchance.org",151],["abema.tv",153]]);

const entitiesMap = new Map([["1337x",[3,15]],["kimcartoon",5],["pahe",[6,15]],["soap2day",6],["hqq",8],["waaw",8],["mhdsportstv",10],["mhdtvsports",10],["mhdtvworld",10],["mhdtvmax",10],["teluguflix",10],["pixhost",11],["viprow",[14,15,48]],["cloudvideotv",[14,48]],["vidsrc",[14,48]],["123-movies",15],["123movieshd",15],["123movieshub",15],["123moviesme",15],["1stream",15],["1tamilmv",15],["2ddl",15],["2umovies",15],["3hiidude",15],["4stream",15],["5movies",15],["7hitmovies",15],["9xmovie",15],["aagmaal",[15,48]],["adblockeronstape",15],["adblockeronstreamtape",15],["adblockstreamtape",15],["adblockstrtape",15],["adblockstrtech",15],["adblocktape",15],["adcorto",15],["alexsports",15],["alexsportss",15],["alexsportz",15],["animepahe",15],["animesanka",15],["animixplay",15],["aniplay",15],["antiadtape",15],["asianclub",15],["ask4movie",15],["atomixhq",[15,48]],["atomohd",15],["beinmatch",[15,22]],["bhaai",15],["buffstreams",15],["canalesportivo",15],["clickndownload",15],["clicknupload",15],["crackstreams",[15,48]],["daddylive",[15,48]],["daddylivehd",[15,48]],["desiremovies",15],["devlib",15],["divxtotal",15],["divxtotal1",15],["dvdplay",[15,48]],["elixx",15],["enjoy4k",15],["estrenosflix",15],["estrenosflux",15],["estrenosgo",15],["f1stream",15],["fbstream",15],["file4go",15],["filmyzilla",[15,48]],["findav",15],["findporn",15],["flixmaza",15],["flizmovies",15],["freetvsports",15],["fullymaza",15],["g3g",15],["gotxx",15],["grantorrent",15],["hdmoviesfair",[15,48]],["hdmoviesflix",15],["hiidudemoviez",15],["imgsen",15],["imgsto",15],["incest",15],["incestflix",15],["itopmusic",15],["javmost",15],["keeplinks",15],["keepvid",15],["keralahd",15],["khatrimazaful",15],["khatrimazafull",15],["leechall",15],["linkshorts",15],["mangovideo",15],["masaporn",15],["miniurl",15],["mirrorace",15],["mixdroop",15],["mixdrop",15],["mkvcage",15],["mlbstream",15],["mlsbd",15],["mmsbee",15],["motogpstream",15],["movieplex",15],["movierulzlink",15],["movies123",15],["moviesflix",15],["moviesmeta",[15,48]],["moviessources",15],["moviesverse",15],["moviezwaphd",15],["mrunblock",15],["nbastream",15],["newmovierulz",15],["nflstream",15],["nhlstream",15],["noblocktape",15],["nocensor",15],["onlyfams",15],["ouo",15],["pctfenix",[15,48]],["pctnew",[15,48]],["peliculas24",15],["pelisplus",15],["piratebay",15],["plyjam",15],["plylive",15],["plyvdo",15],["pornhoarder",15],["prbay",15],["projectfreetv",15],["proxybit",15],["psarips",15],["racaty",15],["remaxhd",15],["rintor",15],["rnbxclusive",15],["rnbxclusive0",15],["rnbxclusive1",15],["rojadirecta",15],["rojadirectaenvivo",15],["rugbystreams",15],["safetxt",15],["shadowrangers",15],["shahi4u",15],["shahid4u1",15],["shahid4uu",15],["shavetape",15],["shortearn",15],["shorten",15],["shorttey",15],["shortzzy",15],["skymovieshd",15],["socceronline",15],["softarchive",15],["sports-stream",15],["sshhaa",15],["stapadblockuser",15],["stape",15],["stapewithadblock",15],["starmusiq",15],["strcloud",15],["streamadblocker",[15,48]],["streamadblockplus",15],["streamcdn",15],["streamhub",15],["streamsport",15],["streamta",15],["streamtape",15],["streamtapeadblockuser",15],["strikeout",15],["strtape",15],["strtapeadblock",15],["strtapeadblocker",15],["strtapewithadblock",15],["strtpe",15],["swatchseries",15],["tabooflix",15],["tennisstreams",15],["themoviesflix",15],["thepiratebay",15],["thisav",15],["tmearn",15],["toonanime",15],["torlock",15],["tormalayalam",15],["torrentz2eu",15],["tutelehd",15],["tvply",15],["u4m",15],["ufcstream",15],["unblocknow",15],["uploadbuzz",15],["usagoals",15],["vexmoviex",15],["vidclouds",15],["vidlox",15],["vipbox",[15,48]],["vipboxtv",[15,48]],["vipleague",15],["watch-series",15],["watchseries",15],["xclusivejams",15],["xmoviesforyou",15],["youdbox",15],["ytmp3eu",15],["yts-subs",15],["yts",15],["zooqle",15],["dutchycorp",16],["dood",[26,48]],["doodstream",26],["dooood",[26,48]],["shrinke",28],["shrinkme",28],["mydverse",39],["poplinks",41],["123movies",48],["123moviesla",48],["123movieweb",48],["2embed",48],["4hiidude",48],["720pstream",48],["9xmovies",48],["adshort",48],["allmovieshub",48],["asianplay",48],["atishmkv",48],["cricstream",48],["crictime",48],["databasegdriveplayer",48],["dloader",48],["easylinks",48],["extralinks",48],["extramovies",48],["faselhd",48],["filemoon",48],["filmy",48],["filmyhit",48],["filmywap",48],["fmovies",48],["fsapi",48],["gdplayer",48],["gdriveplayer",48],["goload",48],["gomoviefree",48],["gomovies",48],["gowatchseries",48],["hdmoviz",48],["hindilinks4u",48],["hurawatch",48],["isaidub",48],["isaidubhd",48],["jalshamoviezhd",48],["jiorockers",48],["linkshub",48],["linksme",48],["livecricket",48],["madrasdub",48],["mkvcinemas",48],["mobilemovies",48],["movies2watch",48],["moviesda1",48],["moviespapa",48],["mp4moviez",48],["mydownloadtube",48],["nsw2u",48],["nuroflix",48],["o2tvseries",48],["o2tvseriesz",48],["pirlotv",48],["poscitech",48],["primewire",48],["serienstream",48],["sflix",48],["shahed4u",48],["shaheed4u",48],["speedostream",48],["sportcast",48],["sportskart",48],["streamingcommunity",48],["tamilarasan",48],["tamilfreemp3songs",48],["tamilprinthd",48],["torrentdosfilmes",48],["uploadrar",48],["uqload",48],["vidcloud9",48],["vido",48],["vidoo",48],["vudeo",48],["vumoo",48],["watchomovies",[48,57]],["yesmovies",48],["kickass",49],["cine-calidad",55],["actvid",87]]);

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
