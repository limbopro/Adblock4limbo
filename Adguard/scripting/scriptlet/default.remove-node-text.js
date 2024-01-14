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

const argsList = [["script","AdDefend"],["script","/getAdUnitPath|\\.then\\(eval\\)|DisplayAcceptableAdIfAdblocked|,eval\\)\\)\\)\\;|\\.join\\(\\'\\'\\)\\}\\;/"],["script","/==undefined.*body/"],["script","style"],["script","Promise"],["script","Number.isSafeInteger"],["script","/style:last-of-type|:empty|APKM\\..+?\\.innerHTML/"],["script","Reflect"],["script","document.write"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","deblocker"],["script","exdynsrv"],["script","AdsBlocked"],["script","/adb/i"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/check_if_blocking|XMLHttpRequest|adkiller/"],["script","popundersPerIP"],["script","/document\\.createElement|\\.banner-in/"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|adblock/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","alert"],["script","/adblock|popunder/"],["script","fetch"],["script","googlesyndication"],["#text","AD:"],["script","queue.addFile"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","/window\\.open|window\\.location\\.href|document\\.addEventListener|\\$\\(document\\)\\.ready.*show/"],["script","AdbModel"],["script","antiAdBlockerHandler"],["script","onerror"],["script","AdBlock"],["script","window.open"],["script","Adblock"],["script","break;case $."],["style","text-decoration"],["script","push"],["script","clicky"],["script","charCodeAt"],["script","checkifscript"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","popunder"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","KCgpPT57bGV0IGU"],["script","/ConsoleBan|alert|AdBlocker/"],["script","AdBlocker"],["script","adb_detected"],["script","adb"],["script","await fetch"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/^Advertisement$/"],["script","navigator.brave"],["script","zfgloaded"],["script","ai_adb"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/modal|popupads/"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","ad_block"],["script","app_checkext"],["script","shown_at"],["script","clientHeight"],["script","/url_key|adHtml/"],["script","pop.target"],["script","showadblock"],["script","axios"],["script","ad block"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","AaDetector"],["script","Symbol.iterator"],["script","catch"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","detectAdBlock"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","document.head.appendChild"],["script","Number"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","constructor"],["script","/adbl/i"],["script","detect"],["script","btnHtml"],["script","/Adblock|_0x/i"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","error-report.com"],["script","vglnk"],["script","/RegExp\\(\\'/","condition","RegExp"],["script",";break;case $."],["script","AdblockRegixFinder"],["script","\"reload\""],["script","NREUM"]];

const hostnamesMap = new Map([["giga.de",0],["teltarif.de",1],["aupetitparieur.com",2],["allthingsvegas.com",2],["100percentfedup.com",2],["beforeitsnews.com",2],["concomber.com",2],["conservativebrief.com",2],["conservativefiringline.com",2],["dailylol.com",2],["funnyand.com",2],["letocard.fr",2],["mamieastuce.com",2],["meilleurpronostic.fr",2],["patriotnationpress.com",2],["toptenz.net",2],["vitamiiin.com",2],["writerscafe.org",2],["populist.press",2],["dailytruthreport.com",2],["livinggospeldaily.com",2],["first-names-meanings.com",2],["welovetrump.com",2],["thehayride.com",2],["thelibertydaily.com",2],["thepoke.co.uk",2],["thepolitistick.com",2],["theblacksphere.net",2],["shark-tank.com",2],["naturalblaze.com",2],["greatamericanrepublic.com",2],["dailysurge.com",2],["truthlion.com",2],["flagandcross.com",2],["westword.com",2],["republicbrief.com",2],["freedomfirstnetwork.com",2],["phoenixnewtimes.com",2],["designbump.com",2],["clashdaily.com",2],["madworldnews.com",2],["reviveusa.com",2],["sonsoflibertymedia.com",2],["thedesigninspiration.com",2],["videogamesblogger.com",2],["protrumpnews.com",2],["thepalmierireport.com",2],["kresy.pl",2],["thepatriotjournal.com",2],["gellerreport.com",2],["thegatewaypundit.com",2],["wltreport.com",2],["miaminewtimes.com",2],["politicalsignal.com",2],["rightwingnews.com",2],["bigleaguepolitics.com",2],["comicallyincorrect.com",2],["moviepilot.de",4],["apkmirror.com",[6,56]],["yts.mx",8],["upornia.com",10],["pinsystem.co.uk",11],["tinyppt.com",11],["downfile.site",11],["expertvn.com",11],["trangchu.news",11],["bharathwick.com",11],["descargaspcpro.net",11],["dx-tv.com",11],["learnmany.in",11],["loaninsurehub.com",11],["appkamods.com",11],["3dmodelshare.org",11],["nulleb.com",11],["reset-scans.us",11],["thecustomrom.com",11],["bingotingo.com",11],["ghior.com",11],["3dmili.com",11],["techacode.com",11],["karanpc.com",11],["plc247.com",11],["hiraethtranslation.com",11],["freepasses.org",11],["porninblack.com",11],["tomarnarede.pt",11],["basketballbuzz.ca",11],["dribbblegraphics.com",11],["kemiox.com",11],["checkersmenu.us",11],["teksnologi.com",11],["dollareuro.live",11],["next-episode.net",13],["eporner.com",14],["germancarforum.com",15],["sinvida.me",[16,49]],["streamnoads.com",[16,43,49]],["bowfile.com",16],["cloudvideo.tv",[16,43]],["coloredmanga.com",16],["embedstream.me",[16,43,49]],["exeo.app",16],["hiphopa.net",[16,49]],["megaup.net",16],["tv247.us",[16,49]],["uploadhaven.com",16],["userscloud.com",[16,43]],["searchenginereports.net",17],["mdfx9dc8n.net",[18,49]],["oko.sh",19],["washingtonpost.com",20],["bigbtc.win",21],["cryptofun.space",21],["gosexpod.com",22],["sexo5k.com",23],["truyen-hentai.com",23],["theshedend.com",25],["rsadnetworkinfo.com",25],["rsinsuranceinfo.com",25],["rsfinanceinfo.com",25],["rsgamer.app",25],["rssoftwareinfo.com",25],["rshostinginfo.com",25],["rseducationinfo.com",25],["zeroupload.com",25],["streamvid.net",[25,49]],["securenetsystems.net",25],["miniwebtool.com",25],["bchtechnologies.com",25],["spiegel.de",26],["appnee.com",27],["d0o0d.com",28],["do0od.com",28],["doods.pro",28],["ds2play.com",28],["ds2video.com",28],["onlyfaucet.com",29],["claimclicks.com",29],["thebullspen.com",29],["iisfvirtual.in",30],["starxinvestor.com",30],["beatsnoop.com",30],["fetchpik.com",30],["hackerranksolution.in",30],["tech24us.com",31],["freethemesy.com",31],["webhostingpost.com",[32,43]],["tophostingapp.com",32],["digitalmarktrend.com",32],["btcbitco.in",33],["btcsatoshi.net",33],["cempakajaya.com",33],["crypto4yu.com",33],["gainl.ink",33],["manofadan.com",33],["readbitcoin.org",33],["wiour.com",33],["kienthucrangmieng.com",33],["coin-free.com",[33,49]],["tremamnon.com",33],["btc25.org",33],["tron-free.com",33],["bitsmagic.fun",33],["ourcoincash.xyz",33],["hynews.biz",33],["blog.cryptowidgets.net",34],["blog.insurancegold.in",34],["blog.wiki-topia.com",34],["carsmania.net",34],["carstopia.net",34],["coinsvalue.net",34],["cookinguide.net",34],["freeoseocheck.com",34],["makeupguide.net",34],["aylink.co",35],["suaurl.com",36],["sugarona.com",37],["nishankhatri.xyz",37],["highkeyfinance.com",37],["amanguides.com",37],["tinys.click",38],["answerpython.com",38],["gsm-solution.com",38],["h-donghua.com",38],["hindisubbedacademy.com",38],["pkgovjobz.com",38],["ripexbooster.xyz",38],["serial4.com",38],["serial412.blogspot.com",38],["sigmalinks.in",38],["tutorgaming.com",38],["appsbull.com",39],["diudemy.com",39],["maqal360.com",39],["mphealth.online",39],["makefreecallsonline.com",39],["androjungle.com",39],["bookszone.in",39],["drakescans.com",39],["shortix.co",39],["msonglyrics.com",39],["app-sorteos.com",39],["bokugents.com",39],["btvplus.bg",39],["coingraph.us",40],["hes-goals.io",40],["pkbiosfix.com",40],["casi3.xyz",40],["smutty.com",41],["down.dataaps.com",41],["filmweb.pl",41],["kiemlua.com",42],["123moviefree4u.com",43],["194.163.183.129",43],["6movies.net",43],["adsh.cc",43],["afilmyhouse.blogspot.com",43],["ak.sv",43],["animefenix.com",43],["animefrenzy.net",43],["animeshouse.info",43],["animesultra.com",43],["api.webs.moe",43],["apkmody.io",43],["atglinks.com",43],["attvideo.com",43],["avimobilemovies.net",43],["backfirstwo.site",[43,111]],["bdnewszh.com",[43,49]],["ccurl.net",[43,49]],["cinema.cimatna.com",43],["crazyblog.in",43],["dembed1.com",43],["dembed2.com",43],["divicast.com",43],["egynow.cam",43],["embed.meomeo.pw",43],["fanproj.net",43],["filebox.click",43],["filmeserialeonline.org",43],["filmesonlinexhd.biz",[43,49]],["filmovi.ws",[43,49]],["filmyzilla2021.xyz",43],["filmyzilla2022.com",43],["filmyzillafullmovie.waystohunt.info",43],["flexyhit.com",43],["footyhunter3.xyz",[43,49]],["foreverwallpapers.com",43],["french-streams.cc",43],["fslinks.org",43],["fstream365.com",43],["gameshdlive.xyz",[43,49]],["gdrivez.xyz",43],["hinatasoul.com",43],["hindimovies.to",[43,49]],["hitmovies4u.com",43],["hotstar.news",43],["hwnaturkya.com",[43,49]],["hxfile.co",[43,49]],["isaidub3.co",43],["lulustream.com",[43,49]],["luluvdo.com",[43,49]],["membed.net",43],["mgnetu.com",43],["moviesdanet.com",43],["moviewatch.com.pk",[43,49]],["moviewatchonline.com.pk",43],["mp3juice.info",43],["mp3juices.cc",43],["neomovies.net",43],["newsrade.com",43],["niaomea.me",[43,49]],["nolive.me",[43,49]],["nollyverse.com",43],["novelssites.com",[43,49]],["oii.io",43],["pepperlive.info",43],["playertv.net",43],["poscitesch.com",[43,49]],["putlocker68.com",43],["s.to",43],["sharkfish.xyz",43],["skidrowcodex.net",43],["sports-stream.site",43],["stream4free.live",43],["tamilmobilemovies.in",43],["tgo-tv.co",[43,49]],["thewatchseries.live",43],["tnmusic.in",43],["travelplanspro.com",43],["tusfiles.com",43],["unlimitmovies.com",43],["uploadflix.org",43],["vid-guard.com",43],["vidsaver.net",43],["vidspeeds.com",43],["viralitytoday.com",43],["voiranime.stream",43],["watchdoctorwhoonline.com",43],["webseriesclub.com",43],["ylink.bid",43],["ytix.xyz",43],["unblocked.id",45],["wouterplanet.com",46],["androidacy.com",47],["djxmaza.in",48],["miuiflash.com",48],["thecubexguide.com",48],["123movies4u.site",49],["1337xporn.com",49],["141jav.com",49],["1bit.space",49],["1bitspace.com",49],["38dh2.top",49],["3dporndude.com",49],["4archive.org",49],["4horlover.com",49],["560pmovie.com",49],["60fps.xyz",49],["85tube.com",49],["85videos.com",49],["8xlinks.click",49],["a2zcrackworld.com",49],["aazzz.xyz",49],["acefile.co",49],["actusports.eu",49],["adblockplustape.com",49],["adclickersbot.com",49],["adricami.com",49],["adslink.pw",49],["adultstvlive.com",49],["adz7short.space",49],["aeblender.com",49],["ahdafnews.blogspot.com",49],["ak47sports.com",49],["akuma.moe",49],["allplayer.tk",49],["allstreaming.online",49],["amadoras.cf",49],["amadorasdanet.shop",49],["amateurblog.tv",49],["androidadult.com",49],["anhsexjav.xyz",49],["anidl.org",49],["anime-loads.org",49],["animeblkom.net",49],["animefire.net",49],["animelek.me",49],["animeshouse.net",49],["animespire.net",49],["animestotais.xyz",49],["animeyt.es",49],["anroll.net",49],["anymoviess.xyz",49],["aotonline.org",49],["asenshu.com",49],["asialiveaction.com",49],["asianclipdedhd.net",49],["askim-bg.com",49],["asumsikedaishop.com",49],["avcrempie.com",49],["avseesee.com",49],["backfirstwo.com",49],["bajarjuegospcgratis.com",49],["balkanportal.net",49],["balkanteka.net",49],["belowporn.com",49],["bestclaimtrx.xyz",49],["bestgirlsexy.com",49],["bestnhl.com",49],["bestporn4free.com",49],["bestporncomix.com",49],["bet36.es",49],["bikinitryon.net",49],["birdurls.com",49],["bitsearch.to",49],["blackcockadventure.com",49],["blackcockchurch.org",49],["blackporncrazy.com",49],["blizzboygames.net",49],["blizzpaste.com",49],["blkom.com",49],["blog-peliculas.com",49],["blogtrabalhista.com",49],["blurayufr.xyz",49],["bobsvagene.club",49],["bolly4umovies.click",49],["bonusharian.pro",49],["brilian-news.id",49],["brupload.net",49],["bucitana.com",49],["cablegratis.online",49],["camchickscaps.com",49],["camgirlcum.com",49],["camgirls.casa",49],["cashurl.in",49],["castingx.net",49],["celebrity-leaks.net",49],["cgpelis.net",49],["charexempire.com",49],["clasico.tv",49],["clik.pw",49],["coins100s.fun",49],["comicsmanics.com",49],["compucalitv.com",49],["coolcast2.com",49],["cosplaytab.com",49],["countylocalnews.com",49],["cpmlink.net",49],["crackstreamshd.click",49],["crespomods.com",49],["crisanimex.com",49],["crunchyscan.fr",49],["cuevana3.fan",49],["cuevana3hd.com",49],["cumception.com",49],["curvaweb.com",49],["cutpaid.com",49],["datawav.club",49],["daughtertraining.com",49],["deepgoretube.site",49],["deltabit.co",49],["depvailon.com",49],["derleta.com",49],["desivdo.com",49],["desixx.net",49],["detikkebumen.com",49],["deutschepornos.me",49],["diasoft.xyz",49],["directupload.net",49],["diskusscan.com",49],["dixva.com",49],["dlhd.sx",49],["doctormalay.com",49],["dofusports.xyz",49],["dogemate.com",49],["doods.cam",49],["doodskin.lat",49],["downloadrips.com",49],["downvod.com",49],["dphunters.mom",49],["dragontranslation.com",49],["duddes.xyz",49],["dvdfullestrenos.com",49],["ebookbb.com",49],["ebookhunter.net",49],["egyanime.com",49],["egygost.com",49],["egyshare.cc",49],["ekasiwap.com",49],["electro-torrent.pl",49],["elil.cc",49],["embed4u.xyz",49],["eplayer.click",49],["erovoice.us",49],["eroxxx.us",49],["estrenosdoramas.net",49],["everia.club",49],["everythinginherenet.blogspot.com",49],["extrafreetv.com",49],["extremotvplay.com",49],["eyeshot.live",49],["fapinporn.com",49],["fapptime.com",49],["fashionblog.tv",49],["fastreams.live",49],["faucethero.com",49],["fembed.com",49],["femdom-joi.com",49],["fileone.tv",49],["film1k.com",49],["filmeonline2023.net",49],["filmesonlinex.org",49],["filmovitica.com",49],["filmymaza.blogspot.com",49],["filthy.family",49],["fixfinder.click",49],["flostreams.xyz",49],["flyfaucet.com",49],["footyhunter.lol",49],["forex-golds.com",49],["forex-trnd.com",49],["forumchat.club",49],["forumlovers.club",49],["freemoviesonline.biz",49],["freeomovie.co.in",49],["freeomovie.to",49],["freeporncomic.net",49],["freepornhdonlinegay.com",49],["freeproxy.io",49],["freeuse.me",49],["freeusexporn.com",49],["fsicomics.com",49],["gambarbogel.xyz",49],["gamepcfull.com",49],["gameronix.com",49],["gamesfullx.com",49],["gameshdlive.net",49],["gamesmountain.com",49],["gamesrepacks.com",49],["gamingguru.fr",49],["gamovideo.com",49],["garota.cf",49],["gaydelicious.com",49],["gaypornmasters.com",49],["gaysex69.net",49],["gemstreams.com",49],["get-to.link",49],["girlscanner.org",49],["giurgiuveanul.ro",49],["gledajcrtace.xyz",49],["gocast2.com",49],["gomo.to",49],["gostosa.cf",49],["gtlink.co",49],["gwiazdypornosow.pl",49],["haho.moe",49],["hatsukimanga.com",49],["hayhd.net",49],["hdsaprevodom.com",49],["hdstreamss.club",49],["hentais.tube",49],["hentaistream.co",49],["hentaitk.net",49],["hentaitube.online",49],["hentaiworld.tv",49],["hesgoal.tv",49],["hexupload.net",49],["hhkungfu.tv",49],["highlanderhelp.com",49],["hindimean.com",49],["hiperdex.com",49],["hispasexy.org",49],["hitomi.la",49],["hitprn.com",49],["hoca4u.com",49],["hollymoviehd.cc",49],["hoodsite.com",49],["hopepaste.download",49],["hornylips.com",49],["hotgranny.live",49],["hotmama.live",49],["hqcelebcorner.net",49],["huren.best",49],["igfap.com",49],["ihdstreams.xyz",49],["iklandb.com",49],["illink.net",49],["imgkings.com",49],["imgsex.xyz",49],["imx.to",49],["influencersgonewild.org",49],["infosgj.free.fr",49],["investnewsbrazil.com",49],["itdmusics.com",49],["itopmusic.org",49],["itsuseful.site",49],["itunesfre.com",49],["iwatchfriendsonline.net",[49,79]],["iwatchtheoffice.com",49],["jackstreams.com",49],["jatimupdate24.com",49],["javcl.com",49],["javf.net",49],["javhay.net",49],["javhoho.com",49],["javhun.com",49],["javleak.com",49],["javporn.best",49],["javsex.to",49],["javtiful.com",49],["jimdofree.com",49],["jiofiles.org",49],["jorpetz.com",49],["journalyc.online",49],["jp-films.com",49],["jpop80ss3.blogspot.com",49],["jpopsingles.eu",49],["kantotflix.net",49],["kantotinyo.com",49],["kaoskrew.org",49],["kaplog.com",49],["keralatvbox.com",49],["kimochi.info",49],["kimochi.tv",49],["kinemania.tv",49],["konstantinova.net",49],["koora-online.live",49],["kunmanga.com",49],["kutmoney.com",49],["kwithsub.com",49],["ladangreceh.xyz",49],["lat69.me",49],["latinblog.tv",49],["latinomegahd.net",49],["lazyfaucet.com",49],["leechpremium.link",49],["legendas.dev",49],["legendei.net",49],["lightdlmovies.blogspot.com",49],["lighterlegend.com",49],["linclik.com",49],["linkebr.com",49],["linkrex.net",49],["links.worldfree4u-lol.online",49],["linksfy.co",49],["lody.ink",49],["lovesomecommunity.com",49],["luzcameraeacao.shop",49],["manga-oni.com",49],["mangaboat.com",49],["mangagenki.me",49],["mangahere.onl",49],["mangaweb.xyz",49],["mangoporn.net",49],["manhwahentai.me",49],["masahub.com",49],["masahub.net",49],["maturegrannyfuck.com",49],["mdy48tn97.com",49],["mediapemersatubangsa.com",49],["mega-mkv.com",49],["megapastes.com",49],["megapornpics.com",49],["messitv.net",49],["meusanimes.net",49],["milfmoza.com",49],["milfzr.com",49],["millionscast.com",49],["mimaletamusical.blogspot.com",49],["mitly.us",49],["mkv-pastes.com",49],["modb.xyz",49],["monaskuliner.ac.id",49],["moredesi.com",49],["movgotv.net",49],["movi.pk",49],["movieswbb.com",49],["mp4upload.com",49],["mrskin.live",49],["multicanaistv.com",49],["mundowuxia.com",49],["myeasymusic.ir",49],["myonvideo.com",49],["myyouporn.com",49],["narutoget.info",49],["naughtypiss.com",49],["nerdiess.com",49],["new-fs.eu",49],["newtorrentgame.com",49],["nflstreams.me",49],["nicekkk.com",49],["nicesss.com",49],["nopay.info",49],["nopay2.info",[49,120]],["notformembersonly.com",49],["novamovie.net",49],["novelpdf.xyz",49],["novelup.top",49],["nsfwr34.com",49],["nu6i-bg-net.com",49],["nudebabesin3d.com",49],["nukedfans.com",49],["nuoga.eu",49],["nzbstars.com",49],["ohjav.com",49],["ojearnovelas.com",49],["okanime.xyz",49],["olarixas.xyz",49],["oldbox.cloud",49],["olweb.tv",49],["olympicstreams.me",49],["on9.stream",49],["oncast.xyz",49],["onepiece-mangaonline.com",49],["onifile.com",49],["onionstream.live",49],["onlinesaprevodom.net",49],["onlyfullporn.video",49],["onplustv.live",49],["originporn.com",49],["ovagames.com",49],["ovamusic.com",49],["owllink.net",49],["packsporn.com",49],["pahaplayers.click",49],["palimas.org",49],["pandafiles.com",49],["papahd.club",49],["papahd1.xyz",49],["password69.com",49],["paste3.org",49],["pastemytxt.com",49],["payskip.org",49],["peeplink.in",49],["peliculasmx.net",49],["pervertgirlsvideos.com",49],["pervyvideos.com",49],["phim12h.com",49],["picdollar.com",49],["pickteenz.com",49],["pics4you.net",49],["picsxxxporn.com",49],["pinayscandalz.com",49],["pinkueiga.net",49],["piratefast.xyz",49],["piratehaven.xyz",49],["pirateiro.com",49],["pirlotvonline.org",49],["playtube.co.za",49],["plugintorrent.com",49],["pmvzone.com",49],["porndish.com",49],["pornez.net",49],["pornfetishbdsm.com",49],["pornfits.com",49],["pornhd720p.com",49],["pornobr.club",49],["pornobr.ninja",49],["pornodominicano.net",49],["pornofaps.com",49],["pornoflux.com",49],["pornotorrent.com.br",49],["pornredit.com",49],["pornstarsyfamosas.es",49],["pornstreams.co",49],["porntn.com",49],["pornxbit.com",49],["pornxday.com",49],["portaldasnovinhas.shop",49],["portugues-fcr.blogspot.com",49],["poscishd.online",49],["poseyoung.com",49],["pover.org",49],["proxyninja.org",49],["pubfilmz.com",49],["publicsexamateurs.com",49],["punanihub.com",49],["putlocker5movies.org",49],["pxxbay.com",49],["r18.best",49],["ragnaru.net",49],["rapbeh.net",49],["rapelust.com",49],["rapload.org",49],["read-onepiece.net",49],["retro-fucking.com",49],["retrotv.org",49],["robaldowns.com",49],["rockdilla.com",49],["rojadirectatvenvivo.com",49],["rojitadirecta.blogspot.com",49],["romancetv.site",49],["rule34.club",49],["rule34hentai.net",49],["rumahbokep-id.com",49],["safego.cc",49],["sakurafile.com",49],["satoshi-win.xyz",49],["scat.gold",49],["scatfap.com",49],["scatkings.com",49],["scnlog.me",49],["scripts-webmasters.net",49],["serie-turche.com",49],["serijefilmovi.com",49],["sexcomics.me",49],["sexdicted.com",49],["sexgay18.com",49],["sexofilm.co",49],["sextgem.com",49],["sextubebbw.com",49],["sgpics.net",49],["shadowrangers.live",49],["shahee4u.cam",49],["shahiid-anime.net",49],["shemale6.com",49],["shinden.pl",49],["short.es",49],["showmanga.blog.fc2.com",49],["shrt10.com",49],["shurt.pw",49],["sideplusleaks.net",49],["silverblog.tv",49],["silverpic.com",49],["sinhalasub.life",49],["sinsitio.site",49],["skidrowcpy.com",49],["skidrowfull.com",49],["skidrowreloaded.com",49],["slut.mom",49],["smallencode.me",49],["smoner.com",49],["smplace.com",49],["soccerinhd.com",49],["socceron.name",49],["softairbay.com",49],["sokobj.com",49],["songsio.com",49],["souexatasmais.com",49],["sportbar.live",49],["sportea.online",49],["sportskart.xyz",49],["sportstream1.cfd",49],["srt.am",49],["srts.me",49],["stakes100.xyz",49],["stbemuiptv.com",49],["stockingfetishvideo.com",49],["stream.lc",49],["stream25.xyz",49],["streambee.to",49],["streamcenter.pro",49],["streamers.watch",49],["streamgo.to",49],["streamkiste.tv",49],["streamoporn.xyz",49],["streamoupload.xyz",49],["streamservicehd.click",49],["subtitleporn.com",49],["subtitles.cam",49],["suicidepics.com",49],["supertelevisionhd.com",49],["supexfeeds.com",49],["swzz.xyz",49],["sxnaar.com",49],["tabooporns.com",49],["taboosex.club",49],["tapeantiads.com",49],["tapeblocker.com",49],["tapenoads.com",49],["tapewithadblock.org",[49,144]],["teamos.xyz",49],["teen-wave.com",49],["teenporncrazy.com",49],["telegramgroups.xyz",49],["telenovelasweb.com",49],["tensei-shitara-slime-datta-ken.com",49],["tfp.is",49],["thaihotmodels.com",49],["theblueclit.com",49],["thebussybandit.com",49],["theicongenerator.com",49],["thelastdisaster.vip",49],["thepiratebay0.org",49],["thepiratebay10.info",49],["thesexcloud.com",49],["thothub.today",49],["tightsexteens.com",49],["tojav.net",49],["tokyoblog.tv",49],["tonnestreamz.xyz",49],["top16.net",49],["topvideosgay.com",49],["torrage.info",49],["torrents.vip",49],["torrsexvid.com",49],["tpb-proxy.xyz",49],["trannyteca.com",49],["trendytalker.com",49],["tumanga.net",49],["turbogvideos.com",49],["turbovid.me",49],["turkishseriestv.org",49],["turksub24.net",49],["tutele.sx",49],["tutelehd3.xyz",49],["tvglobe.me",49],["tvpclive.com",49],["tvs-widget.com",49],["tvseries.video",49],["ucptt.com",49],["ufaucet.online",49],["ufcfight.online",49],["uhdgames.xyz",49],["ultrahorny.com",49],["ultraten.net",49],["unblockweb.me",49],["underhentai.net",49],["uniqueten.net",49],["upbaam.com",49],["upstream.to",49],["valeriabelen.com",49],["verdragonball.online",49],["vfxmed.com",49],["video.az",49],["videostreaming.rocks",49],["videowood.tv",49],["vidorg.net",49],["vidtapes.com",49],["vidz7.com",49],["vikistream.com",49],["vikv.net",49],["virpe.cc",49],["visifilmai.org",49],["viveseries.com",49],["vladrustov.sx",49],["volokit2.com",49],["vstorrent.org",49],["vstplugs.com",49],["w-hentai.com",49],["watchaccordingtojimonline.com",49],["watchbrooklynnine-nine.com",49],["watchdowntonabbeyonline.com",49],["watchelementaryonline.com",49],["watcheronline.net",49],["watchgleeonline.com",49],["watchjavidol.com",49],["watchkobestreams.info",49],["watchlostonline.net",49],["watchlouieonline.com",49],["watchmonkonline.com",49],["watchparksandrecreation.net",49],["watchprettylittleliarsonline.com",49],["watchrulesofengagementonline.com",49],["watchthekingofqueens.com",49],["watchthemiddleonline.com",49],["watchtvchh.xyz",49],["webcamrips.com",49],["wickedspot.org",49],["wincest.xyz",49],["witanime.best",49],["wolverdonx.com",49],["wordcounter.icu",49],["worldcupstream.pm",49],["worldmovies.store",49],["worldstreams.click",49],["wpdeployit.com",49],["wqstreams.tk",49],["wwwsct.com",49],["xanimeporn.com",49],["xblog.tv",49],["xn--verseriesespaollatino-obc.online",49],["xn--xvideos-espaol-1nb.com",49],["xpornium.net",49],["xsober.com",49],["xvip.lat",49],["xxgasm.com",49],["xxvideoss.org",49],["xxx18.uno",49],["xxxdominicana.com",49],["xxxfree.watch",49],["xxxmax.net",49],["xxxwebdlxxx.top",49],["xxxxvideo.uno",49],["y2b.wiki",49],["yabai.si",49],["yadixv.com",49],["yayanimes.net",49],["yeshd.net",49],["yodbox.com",49],["youjax.com",49],["youpits.xyz",49],["yourdailypornvideos.ws",49],["yourupload.com",49],["ytstv.me",49],["ytstvmovies.co",49],["ytstvmovies.xyz",49],["ytsyify.co",49],["ytsyifymovie.com",49],["zerion.cc",49],["zerocoin.top",49],["zitss.xyz",49],["zpaste.net",49],["zplayer.live",49],["veryfreeporn.com",50],["besthdgayporn.com",51],["freeroms.com",52],["soap2day-online.com",52],["austiblox.net",53],["btcbunch.com",54],["teachoo.com",55],["genshinlab.com",56],["fourfourtwo.co.kr",56],["interfootball.co.kr",56],["a-ha.io",56],["cboard.net",56],["mobilitytv.co.kr",56],["mememedia.co.kr",56],["newautopost.co.kr",56],["tvreport.co.kr",56],["tenbizt.com",56],["jjang0u.com",56],["joongdo.co.kr",56],["viva100.com",56],["thephoblographer.com",56],["newdaily.co.kr",56],["dogdrip.net",56],["golf-live.at",56],["gamingdeputy.com",56],["thesaurus.net",56],["tweaksforgeeks.com",56],["alle-tests.nl",56],["dotkeypress.kr",56],["viewcash.co.kr",56],["tripplus.co.kr",56],["enterdiary.com",56],["mtodayauto.com",56],["hotplacehunter.co.kr",56],["mystylezip.com",56],["majorgeeks.com",56],["poro.gg",56],["maple.gg",56],["lolchess.gg",56],["dak.gg",56],["meconomynews.com",56],["brandbrief.co.kr",56],["dfast.kr",56],["youtu.co",56],["mlbpark.donga.com",56],["capress.kr",56],["carandmore.co.kr",56],["maxmovie.kr",56],["motorgraph.com",56],["newsbell.co.kr",56],["tminews.co.kr",56],["thehousemagazine.kr",56],["hardreset.info",56],["metabattle.com",56],["maketecheasier.com",56],["topsporter.net",57],["sportshub.to",57],["7xm.xyz",58],["fastupload.io",58],["azmath.info",58],["tii.la",59],["easymc.io",60],["yunjiema.top",60],["hacoos.com",61],["bondagevalley.cc",62],["zefoy.com",63],["vidello.net",64],["resizer.myct.jp",65],["gametohkenranbu.sakuraweb.com",66],["jisakuhibi.jp",67],["rank1-media.com",67],["lifematome.blog",68],["fm.sekkaku.net",69],["free-avx.jp",70],["dvdrev.com",71],["betweenjpandkr.blog",72],["nft-media.net",73],["ghacks.net",74],["leak.sx",75],["pornleaks.in",75],["songspk2.info",76],["truyentranhfull.net",77],["nectareousoverelate.com",80],["khoaiphim.com",81],["haafedk2.com",82],["fordownloader.com",82],["jovemnerd.com.br",83],["nicomanga.com",84],["totalcsgo.com",85],["vivamax.asia",86],["manysex.com",87],["gaminginfos.com",88],["tinxahoivn.com",89],["forums-fastunlock.com",90],["automoto.it",91],["sekaikomik.bio",92],["codelivly.com",93],["ophim.vip",94],["touguatize.monster",95],["client.falixnodes.net",96],["novelhall.com",97],["hes-goal.net",98],["al.com",99],["allmovie.com",99],["allmusic.com",99],["androidpolice.com",99],["antyradio.pl",99],["artnews.com",99],["carmagazine.co.uk",99],["cattime.com",99],["cbr.com",99],["cbssports.com",99],["chaptercheats.com",99],["cleveland.com",99],["collider.com",99],["comingsoon.net",99],["dailyvoice.com",99],["decider.com",99],["didyouknowfacts.com",99],["dogtime.com",99],["dualshockers.com",99],["footwearnews.com",99],["freeconvert.com",99],["gamerant.com",99],["gfinityesports.com",99],["givemesport.com",99],["gulflive.com",99],["howtogeek.com",99],["insider-gaming.com",99],["insurancejournal.com",99],["lehighvalleylive.com",99],["liveandletsfly.com",99],["lonestarlive.com",99],["makeuseof.com",99],["mardomreport.net",99],["masslive.com",99],["milestomemories.com",99],["mlive.com",99],["momtastic.com",99],["movieweb.com",99],["musicfeeds.com.au",99],["nationalreview.com",99],["nj.com",99],["nordot.app",99],["nypost.com",99],["oakvillenews.org",99],["observer.com",99],["oregonlive.com",99],["pagesix.com",99],["pennlive.com",99],["qtoptens.com",99],["realgm.com",99],["robbreport.com",99],["sandrarose.com",99],["screenrant.com",99],["sheknows.com",99],["sherdog.com",99],["sidereel.com",99],["silive.com",99],["simpleflying.com",99],["spacenews.com",99],["superherohype.com",99],["syracuse.com",99],["thefashionspot.com",99],["thegamer.com",99],["thegamescabin.com",99],["timesnews.net",99],["tutsnode.org",99],["tvline.com",99],["wimp.com",99],["xda-developers.com",99],["cheatsheet.com",100],["pwinsider.com",100],["bagi.co.in",101],["keran.co",101],["biblestudytools.com",102],["christianheadlines.com",102],["ibelieve.com",102],["kuponigo.com",103],["kimcilonly.site",104],["kimcilonly.link",104],["cryptoearns.com",105],["inxxx.com",106],["ipaspot.app",107],["embedwish.com",108],["filelions.live",108],["leakslove.net",108],["jenismac.com",109],["vxetable.cn",110],["jewelavid.com",111],["nizarstream.com",111],["snapwordz.com",112],["toolxox.com",112],["rl6mans.com",112],["idol69.net",112],["plumbersforums.net",113],["123movies800.online",114],["gulio.site",115],["mediaset.es",116],["izlekolik.net",117],["donghuaworld.com",118],["letsdopuzzles.com",119],["tainio-mania.online",120],["rediff.com",121],["iconicblogger.com",122],["dzapk.com",123],["darknessporn.com",124],["familyporner.com",124],["freepublicporn.com",124],["pisshamster.com",124],["punishworld.com",124],["xanimu.com",124],["pig69.com",125],["cosplay18.pics",125],["javhdo.net",126],["eroticmoviesonline.me",127],["teleclub.xyz",128],["ecamrips.com",129],["showcamrips.com",129],["9animetv.to",130],["jornadaperfecta.com",131],["loseart.com",132],["sousou-no-frieren.com",133],["veev.to",134],["intro-hd.net",135],["monacomatin.mc",135],["nodo313.net",135],["unite-guide.com",136],["appimagehub.com",137],["gnome-look.org",137],["store.kde.org",137],["linux-apps.com",137],["opendesktop.org",137],["pling.com",137],["xfce-look.org",137],["ytlarge.com",138],["botcomics.com",139],["cefirates.com",139],["chandlerorchards.com",139],["comicleaks.com",139],["marketdata.app",139],["monumentmetals.com",139],["tapmyback.com",139],["ping.gg",139],["revistaferramental.com.br",139],["hawpar.com",139],["alpacafinance.org",[139,140]],["nookgaming.com",139],["enkeleksamen.no",139],["kvest.ee",139],["creatordrop.com",139],["panpots.com",139],["cybernetman.com",139],["bitdomain.biz",139],["gerardbosch.xyz",139],["fort-shop.kiev.ua",139],["accuretawealth.com",139],["resourceya.com",139],["tracktheta.com",139],["tt.live",140],["future-fortune.com",140],["abhijith.page",140],["madrigalmaps.com",140],["adventuretix.com",140],["panprices.com",141],["intercity.technology",141],["freelancer.taxmachine.be",141],["adria.gg",141],["fjlaboratories.com",141],["issuya.com",142],["proboards.com",143],["winclassic.net",143],["infinityscans.xyz",145],["infinityscans.net",145],["bitcotasks.com",146],["perchance.org",147],["abema.tv",148]]);

const entitiesMap = new Map([["1337x",[3,49]],["kimcartoon",5],["pahe",[7,49]],["soap2day",7],["hqq",9],["waaw",9],["teluguflix",11],["pixhost",12],["viprow",[16,43,49]],["cloudvideotv",[16,43]],["vidsrc",[16,43]],["beinmatch",[24,49]],["dood",[28,43]],["doodstream",28],["dooood",[28,43]],["mydverse",38],["poplinks",39],["shrinke",41],["shrinkme",41],["123movies",43],["123moviesla",43],["123movieweb",43],["2embed",43],["4hiidude",43],["720pstream",43],["9xmovies",43],["aagmaal",[43,49]],["adshort",43],["allmovieshub",43],["asianplay",43],["atishmkv",43],["atomixhq",[43,49]],["crackstreams",[43,49]],["cricstream",43],["crictime",43],["daddylive",[43,49]],["daddylivehd",[43,49]],["databasegdriveplayer",43],["dloader",43],["dvdplay",[43,49]],["easylinks",43],["extralinks",43],["extramovies",43],["faselhd",43],["filemoon",43],["filmy",43],["filmyhit",43],["filmywap",43],["filmyzilla",[43,49]],["fmovies",43],["fsapi",43],["gdplayer",43],["gdriveplayer",43],["goload",43],["gomoviefree",43],["gomovies",43],["gowatchseries",43],["hdmoviesfair",[43,49]],["hdmoviz",43],["hindilinks4u",43],["hurawatch",43],["isaidub",43],["isaidubhd",43],["jalshamoviezhd",43],["jiorockers",43],["linkshub",43],["linksme",43],["livecricket",43],["madrasdub",43],["mkvcinemas",43],["mobilemovies",43],["movies2watch",43],["moviesda1",43],["moviesmeta",[43,49]],["moviespapa",43],["mp4moviez",43],["mydownloadtube",43],["nsw2u",43],["nuroflix",43],["o2tvseries",43],["o2tvseriesz",43],["pctfenix",[43,49]],["pctnew",[43,49]],["pirlotv",43],["poscitech",43],["primewire",43],["serienstream",43],["sflix",43],["shahed4u",43],["shaheed4u",43],["speedostream",43],["sportcast",43],["sportskart",43],["streamadblocker",[43,49]],["streamingcommunity",43],["tamilarasan",43],["tamilfreemp3songs",43],["tamilprinthd",43],["torrentdosfilmes",43],["uploadrar",43],["uqload",43],["vidcloud9",43],["vido",43],["vidoo",43],["vipbox",[43,49]],["vipboxtv",[43,49]],["vudeo",43],["vumoo",43],["watchomovies",[43,52]],["yesmovies",43],["kickass",44],["123-movies",49],["123movieshd",49],["123movieshub",49],["123moviesme",49],["1stream",49],["1tamilmv",49],["2ddl",49],["2umovies",49],["3hiidude",49],["4stream",49],["5movies",49],["7hitmovies",49],["9xmovie",49],["adblockeronstape",49],["adblockeronstreamtape",49],["adblockstreamtape",49],["adblockstrtape",49],["adblockstrtech",49],["adblocktape",49],["adcorto",49],["alexsports",49],["alexsportss",49],["alexsportz",49],["animepahe",49],["animesanka",49],["animixplay",49],["aniplay",49],["antiadtape",49],["asianclub",49],["ask4movie",49],["atomohd",49],["bhaai",49],["buffstreams",49],["canalesportivo",49],["clickndownload",49],["clicknupload",49],["desiremovies",49],["devlib",49],["divxtotal",49],["divxtotal1",49],["elixx",49],["enjoy4k",49],["estrenosflix",49],["estrenosflux",49],["estrenosgo",49],["f1stream",49],["fbstream",49],["file4go",49],["findav",49],["findporn",49],["flixmaza",49],["flizmovies",49],["freetvsports",49],["fullymaza",49],["g3g",49],["gotxx",49],["grantorrent",49],["hdmoviesflix",49],["hiidudemoviez",49],["imgsen",49],["imgsto",49],["incest",49],["incestflix",49],["javmost",49],["keeplinks",49],["keepvid",49],["keralahd",49],["khatrimazaful",49],["khatrimazafull",49],["leechall",49],["linkshorts",49],["mangovideo",49],["masaporn",49],["miniurl",49],["mirrorace",49],["mixdroop",49],["mixdrop",49],["mkvcage",49],["mlbstream",49],["mlsbd",49],["mmsbee",49],["motogpstream",49],["movieplex",49],["movierulzlink",49],["movies123",49],["moviesflix",49],["moviessources",49],["moviesverse",49],["moviezwaphd",49],["mrunblock",49],["nbastream",49],["newmovierulz",49],["nflstream",49],["nhlstream",49],["noblocktape",49],["nocensor",49],["onlyfams",49],["ouo",49],["peliculas24",49],["pelisplus",49],["piratebay",49],["plyjam",49],["plylive",49],["plyvdo",49],["pornhoarder",49],["prbay",49],["projectfreetv",49],["proxybit",49],["psarips",49],["racaty",49],["remaxhd",49],["rintor",49],["rnbxclusive",49],["rnbxclusive0",49],["rnbxclusive1",49],["rojadirecta",49],["rojadirectaenvivo",49],["rugbystreams",49],["safetxt",49],["shadowrangers",49],["shahi4u",49],["shahid4u1",49],["shahid4uu",49],["shavetape",49],["shortearn",49],["shorten",49],["shorttey",49],["shortzzy",49],["skymovieshd",49],["socceronline",49],["softarchive",49],["sports-stream",49],["sshhaa",49],["stapadblockuser",49],["stape",49],["stapewithadblock",49],["starmusiq",49],["strcloud",49],["streamadblockplus",49],["streamcdn",49],["streamhub",49],["streamsport",49],["streamta",49],["streamtape",49],["streamtapeadblockuser",49],["strikeout",49],["strtape",49],["strtapeadblock",49],["strtapeadblocker",49],["strtapewithadblock",49],["strtpe",49],["swatchseries",49],["tabooflix",49],["tennisstreams",49],["themoviesflix",49],["thepiratebay",49],["thisav",49],["tmearn",49],["toonanime",49],["torlock",49],["tormalayalam",49],["torrentz2eu",49],["tutelehd",49],["tvply",49],["u4m",49],["ufcstream",49],["unblocknow",49],["uploadbuzz",49],["usagoals",49],["vexmoviex",49],["vidclouds",49],["vidlox",49],["vipleague",49],["watch-series",49],["watchseries",49],["xclusivejams",49],["xmoviesforyou",49],["youdbox",49],["ytmp3eu",49],["yts-subs",49],["yts",49],["zooqle",49],["cine-calidad",50],["actvid",78]]);

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
