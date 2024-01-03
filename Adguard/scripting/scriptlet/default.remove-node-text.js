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

const argsList = [["script","AdDefend"],["script","/getAdUnitPath|\\.then\\(eval\\)|DisplayAcceptableAdIfAdblocked|,eval\\)\\)\\)\\;|\\.join\\(\\'\\'\\)\\}\\;/"],["script","/==undefined.*body/"],["script","style"],["script","Promise"],["script","Number.isSafeInteger"],["script","/style:last-of-type|:empty|APKM\\..+?\\.innerHTML/"],["script","Reflect"],["script","document.write"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","deblocker"],["script","exdynsrv"],["script","/adb/i"],["script","FingerprintJS"],["script","/check_if_blocking|XMLHttpRequest|adkiller/"],["script","popundersPerIP"],["script","/document\\.createElement|\\.banner-in/"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|adblock/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","alert"],["script","/adblock|popunder/"],["script","googlesyndication"],["#text","AD:"],["script","queue.addFile"],["script","htmls"],["script","toast"],["script","/window\\.open|window\\.location\\.href|document\\.addEventListener|\\$\\(document\\)\\.ready.*show/"],["script","AdbModel"],["script","antiAdBlockerHandler"],["script","onerror"],["script","AdBlock"],["script","window.open"],["script","Adblock"],["script","break;case $."],["style","text-decoration"],["script","push"],["script","clicky"],["script","charCodeAt"],["script","checkifscript"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","popunder"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","KCgpPT57bGV0IGU"],["script","/ConsoleBan|alert|AdBlocker/"],["script","AdBlocker"],["script","fetch"],["script","adb_detected"],["script","adb"],["script","await fetch"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/^Advertisement$/"],["script","navigator.brave"],["script","zfgloaded"],["script","ai_adb"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/modal|popupads/"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","ad_block"],["script","app_checkext"],["script","shown_at"],["script","clientHeight"],["script","/url_key|adHtml/"],["script","pop.target"],["script","showadblock"],["script","axios"],["script","ad block"],["script","/typeof [a-z]\\.cmd\\.unshift/","condition","cmd.unshift"],["script","admiral"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","AaDetector"],["script","Symbol.iterator"],["script","catch"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","detectAdBlock"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","document.head.appendChild"],["script","Number"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","constructor"],["script","/adbl/i"],["script","detect"],["script","btnHtml"],["script","usingAdPoweredPlugin"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","vglnk"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","$fetch()"],["script",";break;case $."]];

const hostnamesMap = new Map([["giga.de",0],["teltarif.de",1],["aupetitparieur.com",2],["allthingsvegas.com",2],["100percentfedup.com",2],["beforeitsnews.com",2],["concomber.com",2],["conservativebrief.com",2],["conservativefiringline.com",2],["dailylol.com",2],["funnyand.com",2],["letocard.fr",2],["mamieastuce.com",2],["meilleurpronostic.fr",2],["patriotnationpress.com",2],["toptenz.net",2],["vitamiiin.com",2],["writerscafe.org",2],["populist.press",2],["dailytruthreport.com",2],["livinggospeldaily.com",2],["first-names-meanings.com",2],["welovetrump.com",2],["thehayride.com",2],["thelibertydaily.com",2],["thepoke.co.uk",2],["thepolitistick.com",2],["theblacksphere.net",2],["shark-tank.com",2],["naturalblaze.com",2],["greatamericanrepublic.com",2],["dailysurge.com",2],["truthlion.com",2],["flagandcross.com",2],["westword.com",2],["republicbrief.com",2],["freedomfirstnetwork.com",2],["phoenixnewtimes.com",2],["designbump.com",2],["clashdaily.com",2],["madworldnews.com",2],["reviveusa.com",2],["sonsoflibertymedia.com",2],["thedesigninspiration.com",2],["videogamesblogger.com",2],["protrumpnews.com",2],["thepalmierireport.com",2],["kresy.pl",2],["thepatriotjournal.com",2],["gellerreport.com",2],["thegatewaypundit.com",2],["wltreport.com",2],["miaminewtimes.com",2],["politicalsignal.com",2],["rightwingnews.com",2],["bigleaguepolitics.com",2],["comicallyincorrect.com",2],["moviepilot.de",4],["apkmirror.com",[6,52]],["yts.mx",8],["upornia.com",10],["pinsystem.co.uk",11],["tinyppt.com",11],["downfile.site",11],["expertvn.com",11],["trangchu.news",11],["bharathwick.com",11],["learnmany.in",11],["loaninsurehub.com",11],["appkamods.com",11],["3dmodelshare.org",11],["nulleb.com",11],["reset-scans.us",11],["thecustomrom.com",11],["bingotingo.com",11],["ghior.com",11],["3dmili.com",11],["techacode.com",11],["karanpc.com",11],["plc247.com",11],["hiraethtranslation.com",11],["freepasses.org",11],["porninblack.com",11],["tomarnarede.pt",11],["basketballbuzz.ca",11],["dribbblegraphics.com",11],["kemiox.com",11],["checkersmenu.us",11],["teksnologi.com",11],["dollareuro.live",11],["eporner.com",13],["sinvida.me",[14,45]],["streamnoads.com",[14,39,45]],["bowfile.com",14],["cloudvideo.tv",[14,39]],["coloredmanga.com",14],["embedstream.me",[14,39,45]],["exeo.app",14],["hiphopa.net",[14,45]],["megaup.net",14],["tv247.us",[14,45]],["uploadhaven.com",14],["userscloud.com",[14,39]],["searchenginereports.net",15],["mdfx9dc8n.net",[16,45]],["oko.sh",17],["washingtonpost.com",18],["bigbtc.win",19],["cryptofun.space",19],["gosexpod.com",20],["sexo5k.com",21],["truyen-hentai.com",21],["theshedend.com",23],["rsadnetworkinfo.com",23],["rsinsuranceinfo.com",23],["rsfinanceinfo.com",23],["rsgamer.app",23],["rssoftwareinfo.com",23],["rshostinginfo.com",23],["rseducationinfo.com",23],["zeroupload.com",23],["streamvid.net",[23,45]],["securenetsystems.net",23],["miniwebtool.com",23],["bchtechnologies.com",23],["spiegel.de",24],["appnee.com",25],["d0o0d.com",26],["doods.pro",26],["ds2play.com",26],["ds2video.com",26],["iisfvirtual.in",27],["starxinvestor.com",27],["beatsnoop.com",27],["fetchpik.com",27],["hackerranksolution.in",27],["tech24us.com",28],["freethemesy.com",28],["webhostingpost.com",[29,39]],["tophostingapp.com",29],["digitalmarktrend.com",29],["btcbitco.in",30],["btcsatoshi.net",30],["cempakajaya.com",30],["crypto4yu.com",30],["gainl.ink",30],["manofadan.com",30],["readbitcoin.org",30],["wiour.com",30],["kienthucrangmieng.com",30],["coin-free.com",[30,45]],["tremamnon.com",30],["btc25.org",30],["tron-free.com",30],["bitsmagic.fun",30],["ourcoincash.xyz",30],["hynews.biz",30],["aylink.co",31],["suaurl.com",32],["sugarona.com",33],["nishankhatri.xyz",33],["highkeyfinance.com",33],["amanguides.com",33],["tinys.click",34],["answerpython.com",34],["gsm-solution.com",34],["h-donghua.com",34],["hindisubbedacademy.com",34],["pkgovjobz.com",34],["ripexbooster.xyz",34],["serial4.com",34],["serial412.blogspot.com",34],["sigmalinks.in",34],["tutorgaming.com",34],["appsbull.com",35],["diudemy.com",35],["maqal360.com",35],["mphealth.online",35],["makefreecallsonline.com",35],["androjungle.com",35],["bookszone.in",35],["drakescans.com",35],["shortix.co",35],["msonglyrics.com",35],["app-sorteos.com",35],["bokugents.com",35],["btvplus.bg",35],["coingraph.us",36],["bravedown.com",36],["hes-goals.io",36],["pkbiosfix.com",36],["casi3.xyz",36],["smutty.com",37],["down.dataaps.com",37],["filmweb.pl",37],["kiemlua.com",38],["ytlarge.com",38],["123moviefree4u.com",39],["194.163.183.129",39],["6movies.net",39],["adsh.cc",39],["afilmyhouse.blogspot.com",39],["ak.sv",39],["animefenix.com",39],["animefrenzy.net",39],["animeshouse.info",39],["animesultra.com",39],["api.webs.moe",39],["apkmody.io",39],["atglinks.com",39],["attvideo.com",39],["avimobilemovies.net",39],["backfirstwo.site",[39,108]],["bdnewszh.com",[39,45]],["ccurl.net",[39,45]],["cinema.cimatna.com",39],["crazyblog.in",39],["dembed1.com",39],["dembed2.com",39],["divicast.com",39],["egynow.cam",39],["embed.meomeo.pw",39],["fanproj.net",39],["filebox.click",39],["filmeserialeonline.org",39],["filmesonlinexhd.biz",[39,45]],["filmovi.ws",[39,45]],["filmyzilla2021.xyz",39],["filmyzilla2022.com",39],["filmyzillafullmovie.waystohunt.info",39],["flexyhit.com",39],["footyhunter3.xyz",[39,45]],["foreverwallpapers.com",39],["french-streams.cc",39],["fslinks.org",39],["fstream365.com",39],["gameshdlive.xyz",[39,45]],["gdrivez.xyz",39],["hinatasoul.com",39],["hindimovies.to",[39,45]],["hitmovies4u.com",39],["hotstar.news",39],["hwnaturkya.com",[39,45]],["hxfile.co",[39,45]],["isaidub3.co",39],["lulustream.com",[39,45]],["luluvdo.com",[39,45]],["membed.net",39],["mgnetu.com",39],["moviesdanet.com",39],["moviewatch.com.pk",[39,45]],["moviewatchonline.com.pk",39],["mp3juice.info",39],["mp3juices.cc",39],["neomovies.net",39],["newsrade.com",39],["niaomea.me",[39,45]],["nolive.me",[39,45]],["nollyverse.com",39],["novelssites.com",[39,45]],["oii.io",39],["pepperlive.info",39],["playertv.net",39],["poscitesch.com",[39,45]],["putlocker68.com",39],["s.to",39],["sharkfish.xyz",39],["skidrowcodex.net",39],["sports-stream.site",39],["stream4free.live",39],["tamilmobilemovies.in",39],["tgo-tv.co",[39,45]],["thewatchseries.live",39],["tnmusic.in",39],["travelplanspro.com",39],["tusfiles.com",39],["unlimitmovies.com",39],["uploadflix.org",39],["vid-guard.com",39],["vidsaver.net",39],["vidspeeds.com",39],["viralitytoday.com",39],["voiranime.stream",39],["watchdoctorwhoonline.com",39],["webseriesclub.com",39],["ylink.bid",39],["ytix.xyz",39],["unblocked.id",41],["wouterplanet.com",42],["androidacy.com",43],["djxmaza.in",44],["miuiflash.com",44],["thecubexguide.com",44],["123movies4u.site",45],["1337xporn.com",45],["141jav.com",45],["1bit.space",45],["1bitspace.com",45],["38dh2.top",45],["3dporndude.com",45],["4archive.org",45],["4horlover.com",45],["560pmovie.com",45],["60fps.xyz",45],["85tube.com",45],["85videos.com",45],["8xlinks.click",45],["a2zcrackworld.com",45],["aazzz.xyz",45],["acefile.co",45],["actusports.eu",45],["adblockplustape.com",45],["adclickersbot.com",45],["adricami.com",45],["adslink.pw",45],["adultstvlive.com",45],["adz7short.space",45],["aeblender.com",45],["ahdafnews.blogspot.com",45],["ak47sports.com",45],["akuma.moe",45],["allplayer.tk",45],["allstreaming.online",45],["amadoras.cf",45],["amateurblog.tv",45],["androidadult.com",45],["anhsexjav.xyz",45],["anidl.org",45],["anime-loads.org",45],["animeblkom.net",45],["animefire.net",45],["animelek.me",45],["animeshouse.net",45],["animespire.net",45],["animestotais.xyz",45],["animeyt.es",45],["anroll.net",45],["anymoviess.xyz",45],["aotonline.org",45],["asenshu.com",45],["asialiveaction.com",45],["asianclipdedhd.net",45],["askim-bg.com",45],["asumsikedaishop.com",45],["avcrempie.com",45],["avseesee.com",45],["backfirstwo.com",45],["bajarjuegospcgratis.com",45],["balkanportal.net",45],["balkanteka.net",45],["belowporn.com",45],["bestclaimtrx.xyz",45],["bestgirlsexy.com",45],["bestnhl.com",45],["bestporn4free.com",45],["bestporncomix.com",45],["bet36.es",45],["bikinitryon.net",45],["birdurls.com",45],["bitsearch.to",45],["blackcockadventure.com",45],["blackcockchurch.org",45],["blackporncrazy.com",45],["blizzboygames.net",45],["blizzpaste.com",45],["blkom.com",45],["blog-peliculas.com",45],["blogtrabalhista.com",45],["blurayufr.xyz",45],["bobsvagene.club",45],["bolly4umovies.click",45],["bonusharian.pro",45],["brilian-news.id",45],["brupload.net",45],["bucitana.com",45],["cablegratis.online",45],["camchickscaps.com",45],["camgirlcum.com",45],["camgirls.casa",45],["cashurl.in",45],["castingx.net",45],["celebrity-leaks.net",45],["cgpelis.net",45],["charexempire.com",45],["clasico.tv",45],["clik.pw",45],["coins100s.fun",45],["comicsmanics.com",45],["compucalitv.com",45],["coolcast2.com",45],["cosplaytab.com",45],["countylocalnews.com",45],["cpmlink.net",45],["crackstreamshd.click",45],["crespomods.com",45],["crisanimex.com",45],["crunchyscan.fr",45],["cuevana3.fan",45],["cuevana3hd.com",45],["cumception.com",45],["curvaweb.com",45],["cutpaid.com",45],["datawav.club",45],["daughtertraining.com",45],["deepgoretube.site",45],["deltabit.co",45],["depvailon.com",45],["derleta.com",45],["desivdo.com",45],["desixx.net",45],["detikkebumen.com",45],["deutschepornos.me",45],["diasoft.xyz",45],["directupload.net",45],["diskusscan.com",45],["dixva.com",45],["dlhd.sx",45],["doctormalay.com",45],["dofusports.xyz",45],["dogemate.com",45],["doods.cam",45],["downloadrips.com",45],["downvod.com",45],["dphunters.mom",45],["dragontranslation.com",45],["duddes.xyz",45],["dvdfullestrenos.com",45],["ebookbb.com",45],["ebookhunter.net",45],["egyanime.com",45],["egygost.com",45],["egyshare.cc",45],["ekasiwap.com",45],["electro-torrent.pl",45],["elil.cc",45],["embed4u.xyz",45],["eplayer.click",45],["erovoice.us",45],["eroxxx.us",45],["estrenosdoramas.net",45],["everia.club",45],["extrafreetv.com",45],["extremotvplay.com",45],["eyeshot.live",45],["fapinporn.com",45],["fapptime.com",45],["fashionblog.tv",45],["fastreams.live",45],["faucethero.com",45],["fembed.com",45],["femdom-joi.com",45],["fileone.tv",45],["film1k.com",45],["filmeonline2023.net",45],["filmesonlinex.org",45],["filmovitica.com",45],["filmymaza.blogspot.com",45],["filthy.family",45],["fixfinder.click",45],["flostreams.xyz",45],["flyfaucet.com",45],["footyhunter.lol",45],["forex-golds.com",45],["forex-trnd.com",45],["forumchat.club",45],["forumlovers.club",45],["freemoviesonline.biz",45],["freeomovie.co.in",45],["freeomovie.to",45],["freeporncomic.net",45],["freepornhdonlinegay.com",45],["freeproxy.io",45],["freeuse.me",45],["freeusexporn.com",45],["fsicomics.com",45],["fullymaza.lat",45],["gambarbogel.xyz",45],["gamepcfull.com",45],["gameronix.com",45],["gamesfullx.com",45],["gameshdlive.net",45],["gamesmountain.com",45],["gamesrepacks.com",45],["gamingguru.fr",45],["gamovideo.com",45],["garota.cf",45],["gaydelicious.com",45],["gaypornmasters.com",45],["gaysex69.net",45],["gemstreams.com",45],["get-to.link",45],["girlscanner.org",45],["giurgiuveanul.ro",45],["gledajcrtace.xyz",45],["gocast2.com",45],["gomo.to",45],["gostosa.cf",45],["gtlink.co",45],["gwiazdypornosow.pl",45],["haho.moe",45],["hatsukimanga.com",45],["hayhd.net",45],["hdsaprevodom.com",45],["hdstreamss.club",45],["hentais.tube",45],["hentaistream.co",45],["hentaitk.net",45],["hentaitube.online",45],["hentaiworld.tv",45],["hesgoal.tv",45],["hexupload.net",45],["hhkungfu.tv",45],["highlanderhelp.com",45],["hindimean.com",45],["hiperdex.com",45],["hispasexy.org",45],["hitomi.la",45],["hitprn.com",45],["hoca4u.com",45],["hollymoviehd.cc",45],["hoodsite.com",45],["hopepaste.download",45],["hornylips.com",45],["hotgranny.live",45],["hotmama.live",45],["hqcelebcorner.net",45],["huren.best",45],["igfap.com",45],["ihdstreams.xyz",45],["iklandb.com",45],["illink.net",45],["imgkings.com",45],["imgsex.xyz",45],["imx.to",45],["influencersgonewild.org",45],["infosgj.free.fr",45],["investnewsbrazil.com",45],["itdmusics.com",45],["itopmusic.org",45],["itunesfre.com",45],["iwatchfriendsonline.net",[45,76]],["iwatchtheoffice.com",45],["jackstreams.com",45],["jatimupdate24.com",45],["javcl.com",45],["javf.net",45],["javhay.net",45],["javhoho.com",45],["javhun.com",45],["javleak.com",45],["javporn.best",45],["javsex.to",45],["javtiful.com",45],["jimdofree.com",45],["jiofiles.org",45],["jorpetz.com",45],["journalyc.online",45],["jp-films.com",45],["jpop80ss3.blogspot.com",45],["jpopsingles.eu",45],["kantotflix.net",45],["kantotinyo.com",45],["kaoskrew.org",45],["kaplog.com",45],["keralatvbox.com",45],["kimochi.info",45],["kimochi.tv",45],["kinemania.tv",45],["konstantinova.net",45],["koora-online.live",45],["kunmanga.com",45],["kutmoney.com",45],["kwithsub.com",45],["ladangreceh.xyz",45],["lat69.me",45],["latinblog.tv",45],["latinomegahd.net",45],["lazyfaucet.com",45],["leechpremium.link",45],["legendas.dev",45],["legendei.net",45],["lightdlmovies.blogspot.com",45],["lighterlegend.com",45],["linclik.com",45],["linkebr.com",45],["linkrex.net",45],["links.worldfree4u-lol.online",45],["linksfy.co",45],["lody.ink",45],["lovesomecommunity.com",45],["luzcameraeacao.shop",45],["manga-oni.com",45],["mangaboat.com",45],["mangagenki.me",45],["mangahere.onl",45],["mangaweb.xyz",45],["mangoporn.net",45],["manhwahentai.me",45],["masahub.com",45],["masahub.net",45],["masaporn.xyz",45],["maturegrannyfuck.com",45],["mdy48tn97.com",45],["mediapemersatubangsa.com",45],["mega-mkv.com",45],["megapastes.com",45],["megapornpics.com",45],["messitv.net",45],["meusanimes.net",45],["milfmoza.com",45],["milfzr.com",45],["millionscast.com",45],["mimaletamusical.blogspot.com",45],["mitly.us",45],["mkv-pastes.com",45],["modb.xyz",45],["monaskuliner.ac.id",45],["moredesi.com",45],["movgotv.net",45],["movi.pk",45],["movieswbb.com",45],["mp4upload.com",45],["mrskin.live",45],["multicanaistv.com",45],["mundowuxia.com",45],["myeasymusic.ir",45],["myonvideo.com",45],["myyouporn.com",45],["narutoget.info",45],["naughtypiss.com",45],["nerdiess.com",45],["new-fs.eu",45],["newtorrentgame.com",45],["nflstreams.me",45],["nicekkk.com",45],["nicesss.com",45],["nopay.info",45],["nopay2.info",[45,117]],["notformembersonly.com",45],["novamovie.net",45],["novelpdf.xyz",45],["nozomi.la",45],["nsfwr34.com",45],["nu6i-bg-net.com",45],["nudebabesin3d.com",45],["nukedfans.com",45],["nuoga.eu",45],["nzbstars.com",45],["ohjav.com",45],["ojearnovelas.com",45],["okanime.xyz",45],["olarixas.xyz",45],["oldbox.cloud",45],["olweb.tv",45],["olympicstreams.me",45],["on9.stream",45],["oncast.xyz",45],["onepiece-mangaonline.com",45],["onifile.com",45],["onionstream.live",45],["onlinesaprevodom.net",45],["onlyfullporn.video",45],["onplustv.live",45],["originporn.com",45],["ovagames.com",45],["ovamusic.com",45],["owllink.net",45],["packsporn.com",45],["pahaplayers.click",45],["palimas.org",45],["pandafiles.com",45],["papahd.club",45],["papahd1.xyz",45],["password69.com",45],["paste3.org",45],["pastemytxt.com",45],["payskip.org",45],["peeplink.in",45],["peliculasmx.net",45],["pervertgirlsvideos.com",45],["pervyvideos.com",45],["phim12h.com",45],["picdollar.com",45],["pickteenz.com",45],["pics4you.net",45],["picsxxxporn.com",45],["pinayscandalz.com",45],["piratefast.xyz",45],["piratehaven.xyz",45],["pirateiro.com",45],["pirlotvonline.org",45],["playtube.co.za",45],["plugintorrent.com",45],["pmvzone.com",45],["porndish.com",45],["pornez.net",45],["pornfetishbdsm.com",45],["pornfits.com",45],["pornhd720p.com",45],["pornobr.club",45],["pornobr.ninja",45],["pornodominicano.net",45],["pornofaps.com",45],["pornoflux.com",45],["pornotorrent.com.br",45],["pornredit.com",45],["pornstarsyfamosas.es",45],["pornstreams.co",45],["porntn.com",45],["pornxbit.com",45],["pornxday.com",45],["portugues-fcr.blogspot.com",45],["poscishd.online",45],["poseyoung.com",45],["pover.org",45],["proxyninja.org",45],["pubfilmz.com",45],["publicsexamateurs.com",45],["punanihub.com",45],["putlocker5movies.org",45],["pxxbay.com",45],["r18.best",45],["ragnaru.net",45],["rapbeh.net",45],["rapelust.com",45],["rapload.org",45],["read-onepiece.net",45],["retro-fucking.com",45],["retrotv.org",45],["rockdilla.com",45],["rojadirectatvenvivo.com",45],["rojitadirecta.blogspot.com",45],["romancetv.site",45],["rule34.club",45],["rule34hentai.net",45],["rumahbokep-id.com",45],["safego.cc",45],["sakurafile.com",45],["satoshi-win.xyz",45],["scat.gold",45],["scatfap.com",45],["scatkings.com",45],["scnlog.me",45],["scripts-webmasters.net",45],["serie-turche.com",45],["serijefilmovi.com",45],["sexcomics.me",45],["sexdicted.com",45],["sexgay18.com",45],["sexofilm.co",45],["sextgem.com",45],["sextubebbw.com",45],["sgpics.net",45],["shadowrangers.live",45],["shahee4u.cam",45],["shahiid-anime.net",45],["shemale6.com",45],["shinden.pl",45],["short.es",45],["showmanga.blog.fc2.com",45],["shrt10.com",45],["shurt.pw",45],["sideplusleaks.net",45],["silverblog.tv",45],["silverpic.com",45],["sinhalasub.life",45],["sinsitio.site",45],["skidrowcpy.com",45],["skidrowfull.com",45],["skidrowreloaded.com",45],["slut.mom",45],["smallencode.me",45],["smoner.com",45],["smplace.com",45],["soccerinhd.com",45],["socceron.name",45],["softairbay.com",45],["sokobj.com",45],["songsio.com",45],["souexatasmais.com",45],["sportbar.live",45],["sportea.online",45],["sportskart.xyz",45],["sportstream1.cfd",45],["srt.am",45],["srts.me",45],["stakes100.xyz",45],["stbemuiptv.com",45],["stockingfetishvideo.com",45],["stream.lc",45],["stream25.xyz",45],["streambee.to",45],["streamcenter.pro",45],["streamers.watch",45],["streamgo.to",45],["streamkiste.tv",45],["streamoupload.xyz",45],["streamservicehd.click",45],["subtitleporn.com",45],["subtitles.cam",45],["suicidepics.com",45],["supertelevisionhd.com",45],["supexfeeds.com",45],["swzz.xyz",45],["sxnaar.com",45],["tabooporns.com",45],["taboosex.club",45],["tapeantiads.com",45],["tapeblocker.com",45],["tapenoads.com",45],["tapewithadblock.org",[45,140]],["teamos.xyz",45],["teen-wave.com",45],["teenporncrazy.com",45],["telegramgroups.xyz",45],["telenovelasweb.com",45],["tensei-shitara-slime-datta-ken.com",45],["tfp.is",45],["thaihotmodels.com",45],["theblueclit.com",45],["thebussybandit.com",45],["theicongenerator.com",45],["thelastdisaster.vip",45],["thepiratebay0.org",45],["thepiratebay10.info",45],["thesexcloud.com",45],["thothub.today",45],["tightsexteens.com",45],["tojav.net",45],["tokyoblog.tv",45],["tonnestreamz.xyz",45],["top16.net",45],["topvideosgay.com",45],["torrage.info",45],["torrents.vip",45],["torrsexvid.com",45],["tpb-proxy.xyz",45],["trannyteca.com",45],["trendytalker.com",45],["tumanga.net",45],["turbogvideos.com",45],["turbovid.me",45],["turkishseriestv.org",45],["turksub24.net",45],["tutele.sx",45],["tutelehd3.xyz",45],["tvglobe.me",45],["tvpclive.com",45],["tvs-widget.com",45],["tvseries.video",45],["ucptt.com",45],["ufaucet.online",45],["ufcfight.online",45],["uhdgames.xyz",45],["ultrahorny.com",45],["ultraten.net",45],["unblockweb.me",45],["underhentai.net",45],["uniqueten.net",45],["upbaam.com",45],["upstream.to",45],["valeriabelen.com",45],["verdragonball.online",45],["vfxmed.com",45],["video.az",45],["videostreaming.rocks",45],["videowood.tv",45],["vidorg.net",45],["vidtapes.com",45],["vidz7.com",45],["vikistream.com",45],["vikv.net",45],["virpe.cc",45],["visifilmai.org",45],["viveseries.com",45],["vladrustov.sx",45],["volokit2.com",45],["vstorrent.org",45],["vstplugs.com",45],["w-hentai.com",45],["watchaccordingtojimonline.com",45],["watchbrooklynnine-nine.com",45],["watchdowntonabbeyonline.com",45],["watchelementaryonline.com",45],["watcheronline.net",45],["watchgleeonline.com",45],["watchjavidol.com",45],["watchkobestreams.info",45],["watchlostonline.net",45],["watchlouieonline.com",45],["watchmonkonline.com",45],["watchparksandrecreation.net",45],["watchprettylittleliarsonline.com",45],["watchrulesofengagementonline.com",45],["watchthekingofqueens.com",45],["watchthemiddleonline.com",45],["watchtvchh.xyz",45],["webcamrips.com",45],["wickedspot.org",45],["wincest.xyz",45],["witanime.best",45],["wolverdonx.com",45],["wordcounter.icu",45],["worldcupstream.pm",45],["worldmovies.store",45],["worldstreams.click",45],["wpdeployit.com",45],["wqstreams.tk",45],["wwwsct.com",45],["xanimeporn.com",45],["xblog.tv",45],["xn--verseriesespaollatino-obc.online",45],["xn--xvideos-espaol-1nb.com",45],["xpornium.net",45],["xsober.com",45],["xvip.lat",45],["xxgasm.com",45],["xxvideoss.org",45],["xxx18.uno",45],["xxxdominicana.com",45],["xxxfree.watch",45],["xxxwebdlxxx.top",45],["xxxxvideo.uno",45],["yabai.si",45],["yadixv.com",45],["yayanimes.net",45],["yeshd.net",45],["yodbox.com",45],["youjax.com",45],["youpits.xyz",45],["yourdailypornvideos.ws",45],["yourupload.com",45],["ytstv.me",45],["ytstvmovies.co",45],["ytstvmovies.xyz",45],["ytsyify.co",45],["ytsyifymovie.com",45],["zerion.cc",45],["zerocoin.top",45],["zitss.xyz",45],["zpaste.net",45],["zplayer.live",45],["veryfreeporn.com",46],["besthdgayporn.com",47],["freeroms.com",48],["soap2day-online.com",48],["austiblox.net",49],["btcbunch.com",50],["teachoo.com",51],["genshinlab.com",52],["fourfourtwo.co.kr",52],["interfootball.co.kr",52],["a-ha.io",52],["cboard.net",52],["mobilitytv.co.kr",52],["mememedia.co.kr",52],["newautopost.co.kr",52],["tvreport.co.kr",52],["tenbizt.com",52],["jjang0u.com",52],["joongdo.co.kr",52],["viva100.com",52],["thephoblographer.com",52],["newdaily.co.kr",52],["dogdrip.net",52],["golf-live.at",52],["gamingdeputy.com",52],["thesaurus.net",52],["dotkeypress.kr",52],["viewcash.co.kr",52],["tripplus.co.kr",52],["enterdiary.com",52],["mtodayauto.com",52],["hotplacehunter.co.kr",52],["mystylezip.com",52],["majorgeeks.com",52],["poro.gg",52],["maple.gg",52],["lolchess.gg",52],["dak.gg",52],["meconomynews.com",52],["brandbrief.co.kr",52],["dfast.kr",52],["youtu.co",52],["mlbpark.donga.com",52],["capress.kr",52],["carandmore.co.kr",52],["maxmovie.kr",52],["motorgraph.com",52],["newsbell.co.kr",52],["tminews.co.kr",52],["thehousemagazine.kr",52],["hardreset.info",52],["metabattle.com",52],["maketecheasier.com",52],["topsporter.net",53],["sportshub.to",53],["7xm.xyz",54],["fastupload.io",54],["azmath.info",54],["claimclicks.com",55],["thebullspen.com",55],["tii.la",56],["easymc.io",57],["yunjiema.top",57],["hacoos.com",58],["bondagevalley.cc",59],["zefoy.com",60],["vidello.net",61],["resizer.myct.jp",62],["gametohkenranbu.sakuraweb.com",63],["jisakuhibi.jp",64],["rank1-media.com",64],["lifematome.blog",65],["fm.sekkaku.net",66],["free-avx.jp",67],["dvdrev.com",68],["betweenjpandkr.blog",69],["nft-media.net",70],["ghacks.net",71],["leak.sx",72],["pornleaks.in",72],["songspk2.info",73],["truyentranhfull.net",74],["nectareousoverelate.com",77],["khoaiphim.com",78],["haafedk2.com",79],["fordownloader.com",79],["jovemnerd.com.br",80],["nicomanga.com",81],["totalcsgo.com",82],["vivamax.asia",83],["manysex.com",84],["gaminginfos.com",85],["tinxahoivn.com",86],["forums-fastunlock.com",87],["automoto.it",88],["sekaikomik.bio",89],["codelivly.com",90],["ophim.vip",91],["touguatize.monster",92],["client.falixnodes.net",93],["novelhall.com",94],["hes-goal.net",95],["al.com",96],["allmusic.com",96],["androidpolice.com",96],["calculator-online.net",96],["cattime.com",96],["cbr.com",96],["cbssports.com",96],["chaptercheats.com",96],["cleveland.com",96],["collider.com",96],["comingsoon.net",96],["dogtime.com",96],["dualshockers.com",96],["freeconvert.com",96],["gamerant.com",96],["gfinityesports.com",96],["givemesport.com",96],["howtogeek.com",96],["insider-gaming.com",96],["liveandletsfly.com",96],["makeuseof.com",96],["milestomemories.com",96],["mlive.com",96],["momtastic.com",96],["movieweb.com",96],["musicfeeds.com.au",96],["nationalreview.com",96],["nj.com",96],["nordot.app",96],["nypost.com",96],["oregonlive.com",96],["pagesix.com",96],["qtoptens.com",96],["realgm.com",96],["screenrant.com",96],["sheknows.com",96],["sherdog.com",96],["sidereel.com",96],["superherohype.com",96],["thefashionspot.com",96],["thegamer.com",96],["timesnews.net",96],["tvline.com",96],["wimp.com",96],["xda-developers.com",96],["cheatsheet.com",97],["pwinsider.com",97],["bagi.co.in",98],["keran.co",98],["biblestudytools.com",99],["christianheadlines.com",99],["ibelieve.com",99],["kuponigo.com",100],["kimcilonly.site",101],["kimcilonly.link",101],["cryptoearns.com",102],["inxxx.com",103],["ipaspot.app",104],["embedwish.com",105],["filelions.live",105],["leakslove.net",105],["jenismac.com",106],["vxetable.cn",107],["jewelavid.com",108],["nizarstream.com",108],["snapwordz.com",109],["toolxox.com",109],["rl6mans.com",109],["idol69.net",109],["plumbersforums.net",110],["123movies800.online",111],["gulio.site",112],["mediaset.es",113],["izlekolik.net",114],["donghuaworld.com",115],["letsdopuzzles.com",116],["tainio-mania.online",117],["rediff.com",118],["iconicblogger.com",119],["dzapk.com",120],["darknessporn.com",121],["familyporner.com",121],["freepublicporn.com",121],["pisshamster.com",121],["punishworld.com",121],["xanimu.com",121],["pig69.com",122],["cosplay18.pics",122],["javhdo.net",123],["eroticmoviesonline.me",124],["teleclub.xyz",125],["ecamrips.com",126],["showcamrips.com",126],["9animetv.to",127],["jornadaperfecta.com",128],["loseart.com",129],["sousou-no-frieren.com",130],["veev.to",131],["intro-hd.net",132],["monacomatin.mc",132],["nodo313.net",132],["unite-guide.com",133],["appimagehub.com",134],["gnome-look.org",134],["store.kde.org",134],["linux-apps.com",134],["opendesktop.org",134],["pling.com",134],["xfce-look.org",134],["perchance.org",135],["botcomics.com",136],["cefirates.com",136],["chandlerorchards.com",136],["comicleaks.com",136],["marketdata.app",136],["monumentmetals.com",136],["tapmyback.com",136],["ping.gg",136],["revistaferramental.com.br",136],["hawpar.com",136],["alpacafinance.org",[136,137]],["nookgaming.com",136],["enkeleksamen.no",136],["kvest.ee",136],["creatordrop.com",136],["panpots.com",136],["cybernetman.com",136],["bitdomain.biz",136],["gerardbosch.xyz",136],["fort-shop.kiev.ua",136],["accuretawealth.com",136],["resourceya.com",136],["tracktheta.com",136],["tt.live",137],["future-fortune.com",137],["abhijith.page",137],["madrigalmaps.com",137],["adventuretix.com",137],["panprices.com",138],["intercity.technology",138],["freelancer.taxmachine.be",138],["adria.gg",138],["fjlaboratories.com",138],["proboards.com",139],["winclassic.net",139],["infinityscans.xyz",[141,142]]]);

const entitiesMap = new Map([["1337x",[3,45]],["kimcartoon",5],["pahe",[7,45]],["soap2day",7],["hqq",9],["waaw",9],["teluguflix",11],["pixhost",12],["viprow",[14,39,45]],["cloudvideotv",[14,39]],["vidsrc",[14,39]],["beinmatch",[22,45]],["dood",[26,39]],["doodstream",26],["dooood",[26,39]],["mydverse",34],["poplinks",35],["shrinke",37],["shrinkme",37],["123movies",39],["123moviesla",39],["123movieweb",39],["2embed",39],["4hiidude",39],["720pstream",39],["9xmovies",39],["aagmaal",[39,45]],["adshort",39],["allmovieshub",39],["asianplay",39],["atishmkv",39],["atomixhq",[39,45]],["crackstreams",[39,45]],["cricstream",39],["crictime",39],["daddylive",[39,45]],["daddylivehd",[39,45]],["databasegdriveplayer",39],["dloader",39],["dropgalaxy",39],["dvdplay",[39,45]],["easylinks",39],["extralinks",39],["extramovies",39],["faselhd",39],["filemoon",39],["filmy",39],["filmyhit",39],["filmywap",39],["filmyzilla",[39,45]],["fmovies",39],["fsapi",39],["gdplayer",39],["gdriveplayer",39],["goload",39],["gomoviefree",39],["gomovies",39],["gowatchseries",39],["hdmoviesfair",[39,45]],["hdmoviz",39],["hindilinks4u",39],["hurawatch",39],["isaidub",39],["isaidubhd",39],["jalshamoviezhd",39],["jiorockers",39],["linkshub",39],["linksme",39],["livecricket",39],["madrasdub",39],["mkvcinemas",39],["mobilemovies",39],["movies2watch",39],["moviesda1",39],["moviesmeta",[39,45]],["moviespapa",39],["mp4moviez",39],["mydownloadtube",39],["nsw2u",39],["nuroflix",39],["o2tvseries",39],["o2tvseriesz",39],["pctfenix",[39,45]],["pctnew",[39,45]],["pirlotv",39],["poscitech",39],["primewire",39],["serienstream",39],["sflix",39],["shahed4u",39],["shaheed4u",39],["speedostream",39],["sportcast",39],["sportskart",39],["streamadblocker",[39,45]],["streamingcommunity",39],["tamilarasan",39],["tamilfreemp3songs",39],["tamilprinthd",39],["torrentdosfilmes",39],["uploadrar",39],["uqload",39],["vidcloud9",39],["vido",39],["vidoo",39],["vipbox",[39,45]],["vipboxtv",[39,45]],["vudeo",39],["vumoo",39],["watchomovies",[39,48]],["yesmovies",39],["kickass",40],["123-movies",45],["123movieshd",45],["123movieshub",45],["123moviesme",45],["1stream",45],["1tamilmv",45],["2ddl",45],["2umovies",45],["3hiidude",45],["4stream",45],["5movies",45],["7hitmovies",45],["9xmovie",45],["adblockeronstape",45],["adblockeronstreamtape",45],["adblockstreamtape",45],["adblockstrtape",45],["adblockstrtech",45],["adblocktape",45],["adcorto",45],["alexsports",45],["alexsportss",45],["alexsportz",45],["animepahe",45],["animesanka",45],["animixplay",45],["aniplay",45],["antiadtape",45],["asianclub",45],["ask4movie",45],["atomohd",45],["bhaai",45],["buffstreams",45],["canalesportivo",45],["clickndownload",45],["clicknupload",45],["desiremovies",45],["devlib",45],["divxtotal",45],["divxtotal1",45],["elixx",45],["enjoy4k",45],["estrenosflix",45],["estrenosflux",45],["estrenosgo",45],["f1stream",45],["fbstream",45],["file4go",45],["findav",45],["findporn",45],["flixmaza",45],["flizmovies",45],["freetvsports",45],["g3g",45],["gotxx",45],["grantorrent",45],["hdmoviesflix",45],["hiidudemoviez",45],["imgsen",45],["imgsto",45],["incest",45],["incestflix",45],["javmost",45],["keeplinks",45],["keepvid",45],["keralahd",45],["khatrimazaful",45],["khatrimazafull",45],["leechall",45],["linkshorts",45],["mangovideo",45],["miniurl",45],["mirrorace",45],["mixdroop",45],["mixdrop",45],["mkvcage",45],["mlbstream",45],["mlsbd",45],["mmsbee",45],["motogpstream",45],["movieplex",45],["movierulzlink",45],["movies123",45],["moviesflix",45],["moviessources",45],["moviesverse",45],["moviezwaphd",45],["mrunblock",45],["nbastream",45],["newmovierulz",45],["nflstream",45],["nhlstream",45],["noblocktape",45],["nocensor",45],["onlyfams",45],["ouo",45],["peliculas24",45],["pelisplus",45],["piratebay",45],["plyjam",45],["plylive",45],["plyvdo",45],["pornhoarder",45],["prbay",45],["projectfreetv",45],["proxybit",45],["psarips",45],["racaty",45],["remaxhd",45],["rintor",45],["rnbxclusive",45],["rnbxclusive0",45],["rnbxclusive1",45],["rojadirecta",45],["rojadirectaenvivo",45],["rugbystreams",45],["safetxt",45],["shadowrangers",45],["shahi4u",45],["shahid4uu",45],["shavetape",45],["shortearn",45],["shorten",45],["shorttey",45],["shortzzy",45],["skymovieshd",45],["socceronline",45],["softarchive",45],["sports-stream",45],["sshhaa",45],["stapadblockuser",45],["stape",45],["stapewithadblock",45],["starmusiq",45],["strcloud",45],["streamadblockplus",45],["streamcdn",45],["streamhub",45],["streamsport",45],["streamta",45],["streamtape",45],["streamtapeadblockuser",45],["strikeout",45],["strtape",45],["strtapeadblock",45],["strtapeadblocker",45],["strtapewithadblock",45],["strtpe",45],["swatchseries",45],["tabooflix",45],["tennisstreams",45],["themoviesflix",45],["thepiratebay",45],["thisav",45],["tmearn",45],["toonanime",45],["torlock",45],["tormalayalam",45],["torrentz2eu",45],["tutelehd",45],["tvply",45],["u4m",45],["ufcstream",45],["unblocknow",45],["uploadbuzz",45],["usagoals",45],["vexmoviex",45],["vidclouds",45],["vidlox",45],["vipleague",45],["watch-series",45],["watchseries",45],["xclusivejams",45],["xmoviesforyou",45],["youdbox",45],["ytmp3eu",45],["yts-subs",45],["yts",45],["zooqle",45],["cine-calidad",46],["actvid",75]]);

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
        'Object_defineProperty': Object.defineProperty.bind(Object),
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
                    re: new this.RegExp(pattern.replace(
                        /[.*+?^${}()|[\]\\]/g, '\\$&'),
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
                const reStr = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
            return Object.fromEntries(entries);
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
