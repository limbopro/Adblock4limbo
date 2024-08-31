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

const argsList = [["script","DisplayAcceptableAdIfAdblocked"],["script","/==undefined.*body/"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","Reflect"],["script","document.write"],["script","deblocker"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","exdynsrv"],["script","/adb/i"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|adblock/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","Adblock"],["script","alert"],["script","/adblock|popunder/"],["script","document.createTextNode"],["script","style"],["script","shown_at"],["script","adsSrc"],["script","/fetch|adb/i"],["script","window.open"],["script","adblockimg"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","googlesyndication"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/pop1stp|detectAdBlock/"],["script","popundersPerIP"],["script","popunder"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","catch"],["script","displayAdsV3"],["script",";}}};break;case $."],["script","adblocker"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adm|adb/i"],["script","initializeInterstitial"],["script","ai_adb"],["script","/adbl/i"],["script","mdpDeblocker"],["script","Math.floor"],["script","/-Ads-close|preventDefault|ai-debug|b2a|split|reload/"],["script","/bypass.php"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","AdbModel"],["script","popup"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script",";break;case $."],["script","adb_detected"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","openPopup"],["style","text-decoration"],["script","push"],["script","AdBlocker"],["script","setNptTechAdblockerCookie"],["script","clicky"],["script","charCodeAt"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","KCgpPT57bGV0IGU"],["script","error-report.com"],["script","adShield"],["script","AdblockRegixFinder"],["script","serve"],["script","/, [0-9]{4","5}\\)\\] \\* [4-9]\\; \\}/"],["script","/ConsoleBan|alert|AdBlocker/"],["script","runPop"],["script","alert","condition","adblock"],["script","adb"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","zfgloaded"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/modal|popupads/"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","ad_block"],["script","app_checkext"],["script","clientHeight"],["script","/url_key|adHtml/"],["script","pop.target"],["script","axios"],["script","ad block"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","\"data-adm-url\""],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","AaDetector"],["script","AdBlock"],["script","Symbol.iterator"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","detectAdBlock"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","document.head.appendChild"],["script","adsPlay"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","detect"],["script","fetch"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","vglnk"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","/event\\.keyCode|DisableDevtool/"],["script","/detectAdBlock|\\(typeof [a-z]{10","25} \\=\\=\\=? (\"undefined\"|\"function\")\\)|_0x|'\\/func'/"],["script","NREUM"]];

const hostnamesMap = new Map([["alpin.de",0],["boersennews.de",0],["chefkoch.de",0],["chip.de",0],["clever-tanken.de",0],["desired.de",0],["donnerwetter.de",0],["fanfiktion.de",0],["focus.de",0],["formel1.de",0],["frustfrei-lernen.de",0],["gewinnspiele.tv",0],["giga.de",0],["gut-erklaert.de",0],["kino.de",0],["messen.de",0],["nickles.de",0],["nordbayern.de",0],["spielfilm.de",0],["teltarif.de",0],["unsere-helden.com",0],["weltfussball.at",0],["watson.de",0],["moviepilot.de",[0,4]],["mactechnews.de",0],["aupetitparieur.com",1],["allthingsvegas.com",1],["100percentfedup.com",1],["beforeitsnews.com",1],["concomber.com",1],["conservativebrief.com",1],["conservativefiringline.com",1],["dailylol.com",1],["funnyand.com",1],["letocard.fr",1],["mamieastuce.com",1],["meilleurpronostic.fr",1],["patriotnationpress.com",1],["toptenz.net",1],["vitamiiin.com",1],["writerscafe.org",1],["populist.press",1],["dailytruthreport.com",1],["livinggospeldaily.com",1],["first-names-meanings.com",1],["welovetrump.com",1],["thehayride.com",1],["thelibertydaily.com",1],["thepoke.co.uk",1],["thepolitistick.com",1],["theblacksphere.net",1],["shark-tank.com",1],["naturalblaze.com",1],["greatamericanrepublic.com",1],["dailysurge.com",1],["truthlion.com",1],["flagandcross.com",1],["westword.com",1],["republicbrief.com",1],["freedomfirstnetwork.com",1],["phoenixnewtimes.com",1],["designbump.com",1],["clashdaily.com",1],["madworldnews.com",1],["reviveusa.com",1],["sonsoflibertymedia.com",1],["thedesigninspiration.com",1],["videogamesblogger.com",1],["protrumpnews.com",1],["thepalmierireport.com",1],["kresy.pl",1],["thepatriotjournal.com",1],["gellerreport.com",1],["thegatewaypundit.com",1],["wltreport.com",1],["miaminewtimes.com",1],["politicalsignal.com",1],["rightwingnews.com",1],["bigleaguepolitics.com",1],["comicallyincorrect.com",1],["web.de",2],["skidrowreloaded.com",[3,14]],["1stream.eu",3],["4kwebplay.xyz",3],["antennasports.ru",3],["buffsports.me",[3,49]],["buffstreams.app",3],["claplivehdplay.ru",3],["cracksports.me",[3,13]],["euro2024direct.ru",3],["ext.to",3],["eztv.tf",3],["eztvx.to",3],["kenitv.me",[3,13]],["lewblivehdplay.ru",3],["mlbbite.net",3],["mlbstreams.ai",3],["qatarstreams.me",[3,13]],["qqwebplay.xyz",3],["rnbastreams.com",3],["soccerworldcup.me",[3,13]],["topstreams.info",3],["totalsportek.to",3],["viwlivehdplay.ru",3],["topembed.pw",3],["crackstreamer.net",3],["methstreamer.com",3],["yts.mx",6],["magesypro.com",7],["pinsystem.co.uk",7],["elrellano.com",7],["tinyppt.com",7],["bharathwick.com",7],["descargaspcpro.net",7],["dx-tv.com",7],["rt3dmodels.com",7],["plc4me.com",7],["blisseyhusbands.com",7],["madaradex.org",7],["trigonevo.com",7],["franceprefecture.fr",7],["jazbaat.in",7],["aipebel.com",7],["audiotools.blog",7],["veganab.co",7],["camdigest.com",7],["learnmany.in",7],["amanguides.com",[7,63]],["highkeyfinance.com",[7,63]],["appkamods.com",7],["techacode.com",7],["djqunjab.in",7],["downfile.site",7],["expertvn.com",7],["trangchu.news",7],["3dmodelshare.org",7],["nulleb.com",7],["asiaon.top",7],["coursesghar.com",7],["thecustomrom.com",7],["snlookup.com",7],["bingotingo.com",7],["ghior.com",7],["3dmili.com",7],["karanpc.com",7],["plc247.com",7],["apkdelisi.net",7],["javindo.eu.org",7],["chindohot.site",7],["freepasses.org",7],["tomarnarede.pt",7],["basketballbuzz.ca",7],["dribbblegraphics.com",7],["kemiox.com",7],["checkersmenu.us",7],["teksnologi.com",7],["dollareuro.live",7],["upornia.com",9],["eporner.com",11],["javtiful.com",[11,14]],["germancarforum.com",12],["innateblogger.com",12],["cybercityhelp.in",12],["streamnoads.com",[13,14,49]],["bowfile.com",13],["cloudvideo.tv",[13,49]],["coloredmanga.com",13],["embedstream.me",[13,14,49]],["exeo.app",13],["hiphopa.net",[13,14]],["megaup.net",13],["olympicstreams.co",[13,49]],["tv247.us",[13,14]],["uploadhaven.com",13],["userscloud.com",[13,49]],["mdfx9dc8n.net",14],["mdzsmutpcvykb.net",14],["mixdrop21.net",14],["mixdropjmk.pw",14],["y2tube.pro",14],["fastreams.com",14],["redittsports.com",14],["sky-sports.store",14],["streamsoccer.site",14],["tntsports.store",14],["wowstreams.co",14],["123movies4u.site",14],["1337xporn.com",14],["141jav.com",14],["1bit.space",14],["1bitspace.com",14],["38dh2.top",14],["3dporndude.com",14],["4archive.org",14],["4horlover.com",14],["560pmovie.com",14],["60fps.xyz",14],["85tube.com",14],["85videos.com",14],["8xlinks.click",14],["a2zcrackworld.com",14],["aazzz.xyz",14],["acefile.co",14],["actusports.eu",14],["adclickersbot.com",14],["adricami.com",14],["adslink.pw",14],["adultstvlive.com",14],["adz7short.space",14],["aeblender.com",14],["ahdafnews.blogspot.com",14],["ak47sports.com",14],["akuma.moe",14],["allplayer.tk",14],["allstreaming.online",14],["amadoras.cf",14],["amadorasdanet.shop",14],["amateurblog.tv",14],["androidadult.com",14],["anhsexjav.xyz",14],["anidl.org",14],["anime-loads.org",14],["animeblkom.net",14],["animefire.plus",14],["animelek.me",14],["animespire.net",14],["animestotais.xyz",14],["animeyt.es",14],["anroll.net",14],["anymoviess.xyz",14],["aotonline.org",14],["asenshu.com",14],["asialiveaction.com",14],["asianclipdedhd.net",14],["askim-bg.com",14],["asumsikedaishop.com",14],["avcrempie.com",14],["avseesee.com",14],["gettapeads.com",14],["backfirstwo.com",14],["bajarjuegospcgratis.com",14],["balkanportal.net",14],["balkanteka.net",14],["bdnewszh.com",[14,49]],["belowporn.com",14],["bestclaimtrx.xyz",14],["bestgirlsexy.com",14],["bestnhl.com",14],["bestporn4free.com",14],["bestporncomix.com",14],["bet36.es",14],["bikinitryon.net",14],["birdurls.com",14],["bitsearch.to",14],["blackcockadventure.com",14],["blackcockchurch.org",14],["blackporncrazy.com",14],["blizzboygames.net",14],["blizzpaste.com",14],["blkom.com",14],["blog-peliculas.com",14],["blogtrabalhista.com",14],["blurayufr.xyz",14],["bobsvagene.club",14],["bolly4umovies.click",14],["bonusharian.pro",14],["brilian-news.id",14],["brupload.net",14],["bucitana.com",14],["cablegratis.online",14],["camchickscaps.com",14],["camgirlcum.com",14],["camgirls.casa",14],["cashurl.in",14],["castingx.net",14],["ccurl.net",[14,49]],["celebrity-leaks.net",14],["cgpelis.net",14],["charexempire.com",14],["choosingnothing.com",14],["clasico.tv",14],["clik.pw",14],["coin-free.com",[14,60]],["coins100s.fun",14],["comicsmanics.com",14],["compucalitv.com",14],["coolcast2.com",14],["cosplaytab.com",14],["countylocalnews.com",14],["cpmlink.net",14],["crackstreamshd.click",14],["crespomods.com",14],["crisanimex.com",14],["crunchyscan.fr",14],["cuevana3.fan",14],["cuevana3hd.com",14],["cumception.com",14],["curvaweb.com",14],["cutpaid.com",14],["cypherscans.xyz",[14,49]],["datawav.club",14],["daughtertraining.com",14],["deepgoretube.site",14],["deltabit.co",14],["depvailon.com",14],["derleta.com",14],["desivdo.com",14],["desixx.net",14],["detikkebumen.com",14],["deutschepornos.me",14],["diasoft.xyz",14],["directupload.net",14],["diskusscan.com",14],["dixva.com",14],["doctormalay.com",14],["dofusports.xyz",14],["dogemate.com",14],["doods.cam",14],["doodskin.lat",14],["downloadrips.com",14],["downvod.com",14],["dphunters.mom",14],["dragontranslation.com",14],["duddes.xyz",14],["dvdfullestrenos.com",14],["easylinks.in",14],["ebookbb.com",14],["ebookhunter.net",14],["egyanime.com",14],["egygost.com",14],["egyshare.cc",14],["ekasiwap.com",14],["electro-torrent.pl",14],["elil.cc",14],["embed4u.xyz",14],["eplayer.click",14],["erovoice.us",14],["eroxxx.us",14],["estrenosdoramas.net",14],["everia.club",14],["everythinginherenet.blogspot.com",14],["extrafreetv.com",14],["extremotvplay.com",14],["fapinporn.com",14],["fapptime.com",14],["fashionblog.tv",14],["fastreams.live",14],["faucethero.com",14],["fembed.com",14],["femdom-joi.com",14],["fileone.tv",14],["film1k.com",14],["filmeonline2023.net",14],["filmesonlinex.org",14],["filmesonlinexhd.biz",[14,49]],["filmovitica.com",14],["filmymaza.blogspot.com",14],["filthy.family",14],["firstmovies.to",14],["fixfinder.click",14],["flostreams.xyz",14],["flyfaucet.com",14],["footyhunter.lol",14],["footyhunter3.xyz",[14,49]],["forex-golds.com",14],["forex-trnd.com",14],["forumchat.club",14],["forumlovers.club",14],["freemoviesonline.biz",14],["freeomovie.co.in",14],["freeomovie.to",14],["freeporncomic.net",14],["freepornhdonlinegay.com",14],["freeproxy.io",14],["freeuse.me",14],["freeusexporn.com",14],["fsicomics.com",14],["gambarbogel.xyz",14],["gamepcfull.com",14],["gameronix.com",14],["gamesfullx.com",14],["gameshdlive.net",14],["gameshdlive.xyz",14],["gamesmountain.com",14],["gamesrepacks.com",14],["gamingguru.fr",14],["gamovideo.com",14],["garota.cf",14],["gaydelicious.com",14],["gaypornmasters.com",14],["gaysex69.net",14],["gemstreams.com",14],["get-to.link",14],["girlscanner.org",14],["giurgiuveanul.ro",14],["gledajcrtace.xyz",14],["gocast2.com",14],["gomo.to",14],["gostosa.cf",14],["gtlink.co",14],["gwiazdypornosow.pl",14],["haho.moe",14],["hatsukimanga.com",14],["hayhd.net",14],["hdsaprevodom.com",14],["hdstreamss.club",14],["hentais.tube",14],["hentaistream.co",14],["hentaitk.net",14],["hentaitube.online",14],["hentaiworld.tv",14],["hesgoal.tv",14],["hexupload.net",14],["hhkungfu.tv",14],["highlanderhelp.com",14],["hindimean.com",14],["hindimovies.to",[14,49]],["hiperdex.com",14],["hispasexy.org",14],["hitprn.com",14],["hoca4u.com",14],["hollymoviehd.cc",14],["hoodsite.com",14],["hopepaste.download",14],["hornylips.com",14],["hotgranny.live",14],["hotmama.live",14],["hqcelebcorner.net",14],["huren.best",14],["hwnaturkya.com",[14,49]],["hxfile.co",[14,49]],["igfap.com",14],["ihdstreams.xyz",14],["iklandb.com",14],["illink.net",14],["imgkings.com",14],["imgsex.xyz",14],["imx.to",14],["influencersgonewild.org",14],["infosgj.free.fr",14],["investnewsbrazil.com",14],["itdmusics.com",14],["itsuseful.site",14],["itunesfre.com",14],["iwatchfriendsonline.net",[14,117]],["jackstreams.com",14],["jatimupdate24.com",14],["jav-fun.cc",14],["jav-scvp.com",14],["javcl.com",14],["javf.net",14],["javhay.net",14],["javhoho.com",14],["javhun.com",14],["javleak.com",14],["javporn.best",14],["javsex.to",14],["jimdofree.com",14],["jiofiles.org",14],["jorpetz.com",14],["journalyc.online",14],["jp-films.com",14],["jpop80ss3.blogspot.com",14],["jpopsingles.eu",[14,31]],["kantotflix.net",14],["kantotinyo.com",14],["kaoskrew.org",14],["kaplog.com",14],["keralatvbox.com",14],["kickassanimes.io",14],["kimochi.info",14],["kimochi.tv",14],["kinemania.tv",14],["konstantinova.net",14],["koora-online.live",14],["kunmanga.com",14],["kutmoney.com",14],["kwithsub.com",14],["ladangreceh.xyz",14],["lat69.me",14],["latinblog.tv",14],["latinomegahd.net",14],["lazyfaucet.com",14],["leechpremium.link",14],["legendas.dev",14],["legendei.net",14],["lightdlmovies.blogspot.com",14],["lighterlegend.com",14],["linclik.com",14],["linkebr.com",14],["linkrex.net",14],["links.worldfree4u-lol.online",14],["linksfy.co",14],["lody.ink",14],["lovesomecommunity.com",14],["lulustream.com",[14,49]],["luluvdo.com",[14,49]],["luzcameraeacao.shop",14],["manga-oni.com",14],["mangaboat.com",14],["mangagenki.me",14],["mangahere.onl",14],["mangaweb.xyz",14],["mangoporn.net",14],["manhwahentai.me",14],["masahub.com",14],["masahub.net",14],["maturegrannyfuck.com",14],["mdy48tn97.com",14],["mediapemersatubangsa.com",14],["mega-mkv.com",14],["megapastes.com",14],["megapornpics.com",14],["messitv.net",14],["meusanimes.net",14],["milfmoza.com",14],["milfzr.com",14],["millionscast.com",14],["mimaletamusical.blogspot.com",14],["mitly.us",14],["mkv-pastes.com",14],["modb.xyz",14],["monaskuliner.ac.id",14],["moredesi.com",14],["movgotv.net",14],["movi.pk",14],["movierr.online",14],["movieswbb.com",14],["moviewatch.com.pk",14],["mp4upload.com",14],["mrskin.live",14],["multicanaistv.com",14],["mundowuxia.com",14],["myeasymusic.ir",14],["myonvideo.com",14],["myyouporn.com",14],["narutoget.info",14],["naughtypiss.com",14],["nerdiess.com",14],["new-fs.eu",14],["newtorrentgame.com",14],["nflstreams.me",14],["niaomea.me",[14,49]],["nicekkk.com",14],["nicesss.com",14],["nlegs.com",14],["nolive.me",[14,49]],["nopay.info",14],["nopay2.info",[14,157]],["notformembersonly.com",14],["novamovie.net",14],["novelpdf.xyz",14],["novelssites.com",[14,49]],["novelup.top",14],["nsfwr34.com",14],["nu6i-bg-net.com",14],["nudebabesin3d.com",14],["nukedfans.com",14],["nuoga.eu",14],["nzbstars.com",14],["ohjav.com",14],["ojearnovelas.com",14],["okanime.xyz",14],["olarixas.xyz",14],["oldbox.cloud",14],["olweb.tv",14],["olympicstreams.me",14],["on9.stream",14],["oncast.xyz",14],["onepiece-mangaonline.com",14],["onifile.com",14],["onionstream.live",14],["onlinesaprevodom.net",14],["onlyfullporn.video",14],["onplustv.live",14],["originporn.com",14],["ovagames.com",14],["ovamusic.com",14],["owllink.net",14],["packsporn.com",14],["pahaplayers.click",14],["palimas.org",14],["pandafiles.com",14],["papahd.club",14],["papahd1.xyz",14],["password69.com",14],["pastemytxt.com",14],["payskip.org",14],["peeplink.in",14],["peliculasmx.net",14],["pervertgirlsvideos.com",14],["pervyvideos.com",14],["phim12h.com",14],["picdollar.com",14],["pickteenz.com",14],["pics4you.net",14],["picsxxxporn.com",14],["pinayscandalz.com",14],["pinkueiga.net",14],["piratefast.xyz",14],["piratehaven.xyz",14],["pirateiro.com",14],["pirlotvonline.org",14],["playtube.co.za",14],["plugintorrent.com",14],["pmvzone.com",14],["porndish.com",14],["pornez.net",14],["pornfetishbdsm.com",14],["pornfits.com",14],["pornhd720p.com",14],["pornobr.club",14],["pornobr.ninja",14],["pornodominicano.net",14],["pornofaps.com",14],["pornoflux.com",14],["pornotorrent.com.br",14],["pornredit.com",14],["pornstarsyfamosas.es",14],["pornstreams.co",14],["porntn.com",14],["pornxbit.com",14],["pornxday.com",14],["portaldasnovinhas.shop",14],["portugues-fcr.blogspot.com",14],["poscishd.online",14],["poscitesch.com",[14,49]],["poseyoung.com",14],["pover.org",14],["proxyninja.org",14],["pubfilmz.com",14],["publicsexamateurs.com",14],["punanihub.com",14],["putlocker5movies.org",14],["pxxbay.com",14],["r18.best",14],["ragnaru.net",14],["rapbeh.net",14],["rapelust.com",14],["rapload.org",14],["read-onepiece.net",14],["retro-fucking.com",14],["retrotv.org",14],["robaldowns.com",14],["rockdilla.com",14],["rojadirectatvenvivo.com",14],["rojitadirecta.blogspot.com",14],["romancetv.site",14],["rule34.club",14],["rule34hentai.net",14],["rumahbokep-id.com",14],["safego.cc",14],["safestream.cc",14],["sakurafile.com",14],["satoshi-win.xyz",14],["scat.gold",14],["scatfap.com",14],["scatkings.com",14],["scnlog.me",14],["scripts-webmasters.net",14],["serie-turche.com",14],["serijefilmovi.com",14],["sexcomics.me",14],["sexdicted.com",14],["sexgay18.com",14],["sexofilm.co",14],["sextgem.com",14],["sextubebbw.com",14],["sgpics.net",14],["shadowrangers.live",14],["shahee4u.cam",14],["shahiid-anime.net",14],["shemale6.com",14],["shinden.pl",14],["short.es",14],["showmanga.blog.fc2.com",14],["shrt10.com",14],["shurt.pw",14],["sideplusleaks.net",14],["silverblog.tv",14],["silverpic.com",14],["sinhalasub.life",14],["sinsitio.site",14],["sinvida.me",14],["skidrowcpy.com",14],["skidrowfull.com",14],["slut.mom",14],["smallencode.me",14],["smoner.com",14],["smplace.com",14],["soccerinhd.com",[14,49]],["socceron.name",14],["softairbay.com",14],["sokobj.com",14],["songsio.com",14],["souexatasmais.com",14],["sportbar.live",14],["sportea.online",14],["sportskart.xyz",14],["sportstream1.cfd",14],["sporttuna.site",14],["srt.am",14],["srts.me",14],["stakes100.xyz",14],["stbemuiptv.com",14],["stockingfetishvideo.com",14],["stream.crichd.vip",14],["stream.lc",14],["stream25.xyz",14],["streambee.to",14],["streamcenter.pro",14],["streamers.watch",14],["streamgo.to",14],["streamkiste.tv",14],["streamoporn.xyz",14],["streamoupload.xyz",14],["streamservicehd.click",14],["streamvid.net",[14,23]],["subtitleporn.com",14],["subtitles.cam",14],["suicidepics.com",14],["supertelevisionhd.com",14],["supexfeeds.com",14],["swzz.xyz",14],["sxnaar.com",14],["tabooporns.com",14],["taboosex.club",14],["tapeantiads.com",14],["tapeblocker.com",14],["tapenoads.com",14],["tapewithadblock.org",[14,179]],["teamos.xyz",14],["teen-wave.com",14],["teenporncrazy.com",14],["telegramgroups.xyz",14],["telenovelasweb.com",14],["tensei-shitara-slime-datta-ken.com",14],["tfp.is",14],["tgo-tv.co",[14,49]],["thaihotmodels.com",14],["theblueclit.com",14],["thebussybandit.com",14],["theicongenerator.com",14],["thelastdisaster.vip",14],["thepiratebay0.org",14],["thepiratebay10.info",14],["thesexcloud.com",14],["thothub.today",14],["tightsexteens.com",14],["tojav.net",14],["tokyoblog.tv",14],["tonnestreamz.xyz",14],["top16.net",14],["topvideosgay.com",14],["torrage.info",14],["torrents.vip",14],["torrsexvid.com",14],["tpb-proxy.xyz",14],["trannyteca.com",14],["trendytalker.com",14],["tumanga.net",14],["turbogvideos.com",14],["turbovid.me",14],["turkishseriestv.org",14],["turksub24.net",14],["tutele.sx",14],["tutelehd3.xyz",14],["tvglobe.me",14],["tvpclive.com",14],["tvs-widget.com",14],["tvseries.video",14],["ucptt.com",14],["ufaucet.online",14],["ufcfight.online",14],["uhdgames.xyz",14],["ultrahorny.com",14],["ultraten.net",14],["unblockweb.me",14],["underhentai.net",14],["uniqueten.net",14],["upbaam.com",14],["upstream.to",14],["valeriabelen.com",14],["verdragonball.online",14],["vfxmed.com",14],["video.az",14],["videostreaming.rocks",14],["videowood.tv",14],["vidorg.net",14],["vidtapes.com",14],["vidz7.com",14],["vikistream.com",14],["vikv.net",14],["virpe.cc",14],["visifilmai.org",14],["viveseries.com",14],["vladrustov.sx",14],["volokit2.com",14],["vstorrent.org",14],["w-hentai.com",14],["watchaccordingtojimonline.com",14],["watchbrooklynnine-nine.com",14],["watchdowntonabbeyonline.com",14],["watchelementaryonline.com",14],["watcheronline.net",14],["watchgleeonline.com",14],["watchhowimetyourmother.online",14],["watchkobestreams.info",14],["watchlostonline.net",14],["watchlouieonline.com",14],["watchjavidol.com",14],["watchmadmenonline.com",14],["watchmonkonline.com",14],["watchonceuponatimeonline.com",14],["watchparksandrecreation.net",14],["watchprettylittleliarsonline.com",14],["watchrulesofengagementonline.com",14],["watchthekingofqueens.com",14],["watchthemiddleonline.com",14],["watchtvchh.xyz",14],["webcamrips.com",14],["wickedspot.org",14],["wincest.xyz",14],["witanime.best",14],["wolverdon.fun",14],["wolverdonx.com",14],["wordcounter.icu",14],["worldcupstream.pm",14],["worldmovies.store",14],["worldstreams.click",14],["wpdeployit.com",14],["wqstreams.tk",14],["wwwsct.com",14],["xanimeporn.com",14],["xblog.tv",14],["xn--verseriesespaollatino-obc.online",14],["xn--xvideos-espaol-1nb.com",14],["xpornium.net",14],["xsober.com",14],["xvip.lat",14],["xxgasm.com",14],["xxvideoss.org",14],["xxx18.uno",14],["xxxdominicana.com",14],["xxxfree.watch",14],["xxxmax.net",14],["xxxwebdlxxx.top",14],["xxxxvideo.uno",14],["y2b.wiki",14],["yabai.si",14],["yadixv.com",14],["yayanimes.net",14],["yeshd.net",14],["yodbox.com",14],["youjax.com",14],["youpits.xyz",14],["yourdailypornvideos.ws",14],["yourupload.com",14],["ytstv.me",14],["ytstvmovies.co",14],["ytstvmovies.xyz",14],["ytsyify.co",14],["ytsyifymovie.com",14],["zerion.cc",14],["zerocoin.top",14],["zitss.xyz",14],["zpaste.net",14],["zplayer.live",14],["faucet.ovh",15],["oko.sh",[16,71,72]],["variety.com",17],["gameskinny.com",17],["washingtonpost.com",18],["bigbtc.win",19],["cryptofun.space",19],["gosexpod.com",20],["sexo5k.com",21],["truyen-hentai.com",21],["theshedend.com",23],["zeroupload.com",23],["securenetsystems.net",23],["miniwebtool.com",23],["bchtechnologies.com",23],["spiegel.de",24],["hausbau-forum.de",25],["kiemlua.com",25],["appnee.com",26],["d0000d.com",27],["d000d.com",27],["d0o0d.com",27],["do0od.com",27],["doods.pro",27],["ds2play.com",27],["ds2video.com",27],["apkmirror.com",28],["musichq.pe",30],["sekaikomik.bio",30],["hiraethtranslation.com",31],["onlyfaucet.com",32],["livecamrips.com",33],["smutty.com",33],["freeadultcomix.com",33],["down.dataaps.com",33],["filmweb.pl",33],["visionpapers.org",34],["fdownloader.net",35],["thehackernews.com",36],["mielec.pl",37],["camsrip.com",38],["beatsnoop.com",38],["fetchpik.com",38],["hackerranksolution.in",38],["treasl.com",39],["mrbenne.com",40],["cnpics.org",41],["ovabee.com",41],["porn4f.com",41],["cnxx.me",41],["ai18.pics",41],["cuervotv.me",[42,49]],["aliezstream.pro",42],["daddy-stream.xyz",42],["instream.pro",42],["mylivestream.pro",42],["powerover.online",42],["sportea.link",42],["sportsurge.stream",42],["ufckhabib.com",42],["ustream.pro",42],["papa4k.online",42],["streamhd247.info",42],["nowlive1.me",42],["buzter.xyz",42],["gamehdlive.online",42],["hdfungamezz.xyz",42],["kingstreamz.lol",42],["masterpro.club",42],["papahd.co",42],["sportos.co",42],["valhallas.click",42],["andhrafriends.com",43],["freeroms.com",43],["soap2day-online.com",43],["sportsonline.si",44],["fiuxy2.co",45],["animeunity.to",46],["auto-crypto.click",47],["iconicblogger.com",47],["tokopedia.com",48],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",49],["6movies.net",49],["adsh.cc",49],["afilmyhouse.blogspot.com",49],["ak.sv",49],["animesultra.com",49],["api.webs.moe",49],["apkmody.io",49],["attvideo.com",49],["backfirstwo.site",[49,148]],["crazyblog.in",49],["divicast.com",49],["dlhd.so",49],["embed.meomeo.pw",49],["filmeserialeonline.org",49],["flexyhit.com",49],["foreverwallpapers.com",49],["french-streams.cc",49],["fslinks.org",49],["fstream365.com",49],["hdtoday.to",49],["hinatasoul.com",49],["igg-games.com",49],["infinityscans.net",49],["infinityscans.xyz",49],["membed.net",49],["mgnetu.com",49],["movie4kto.net",49],["mp3juice.info",49],["mp3juices.cc",49],["myflixerz.to",49],["nowmetv.net",49],["nowsportstv.com",49],["nxbrew.com",49],["oii.io",49],["paidshitforfree.com",49],["pepperlive.info",49],["playertv.net",49],["putlocker68.com",49],["roystream.com",49],["rssing.com",49],["s.to",49],["share.filesh.site",49],["sharkfish.xyz",49],["skidrowcodex.net",49],["sports-stream.site",49],["stream4free.live",49],["streamed.su",49],["tamilmobilemovies.in",49],["tapeadsenjoyer.com",49],["thewatchseries.live",49],["tnmusic.in",49],["travelplanspro.com",49],["tusfiles.com",49],["tutlehd4.com",49],["twstalker.com",49],["vid-guard.com",49],["vidco.pro",49],["video-leech.xyz",49],["vidsaver.net",49],["vidspeeds.com",49],["viralitytoday.com",49],["voiranime.stream",49],["watchdoctorwhoonline.com",49],["watchserie.online",49],["webhostingpost.com",49],["woxikon.in",49],["www-y2mate.com",49],["ylink.bid",49],["ytix.xyz",49],["remixsearch.net",50],["remixsearch.es",50],["onlineweb.tools",50],["sharing.wtf",50],["xnxxcom.xyz",51],["tvline.com",[52,135]],["moneycontrol.com",53],["repack-games.com",54],["pawastreams.info",54],["moonplusnews.com",[54,58]],["loanoffering.in",[54,58]],["truyentranhfull.net",54],["hesgoal-tv.io",55],["hesgoal-vip.io",55],["intro-hd.net",55],["monacomatin.mc",55],["nodo313.net",55],["codec.kyiv.ua",56],["unofficialtwrp.com",56],["oaaxpgp3.xyz",57],["kenzo-flowertag.com",59],["mdn.lol",59],["btcbitco.in",60],["btcsatoshi.net",60],["cempakajaya.com",60],["crypto4yu.com",60],["gainl.ink",60],["manofadan.com",60],["readbitcoin.org",60],["wiour.com",60],["kienthucrangmieng.com",60],["tremamnon.com",60],["btc25.org",60],["tron-free.com",60],["bitsmagic.fun",60],["ourcoincash.xyz",60],["hynews.biz",60],["blog.cryptowidgets.net",61],["blog.insurancegold.in",61],["blog.wiki-topia.com",61],["blog.coinsvalue.net",61],["blog.cookinguide.net",61],["blog.freeoseocheck.com",61],["aylink.co",62],["sugarona.com",63],["nishankhatri.xyz",63],["cety.app",64],["exego.app",64],["cutlink.net",64],["cutsy.net",64],["cutyurls.com",64],["cutty.app",64],["cutnet.net",64],["javhdo.net",64],["tinys.click",65],["answerpython.com",65],["gsm-solution.com",65],["h-donghua.com",65],["hindisubbedacademy.com",65],["pkgovjobz.com",65],["ripexbooster.xyz",65],["serial4.com",65],["serial412.blogspot.com",65],["sigmalinks.in",65],["tutorgaming.com",65],["everydaytechvams.com",65],["dipsnp.com",65],["cccam4sat.com",65],["aiimgvlog.fun",66],["appsbull.com",67],["diudemy.com",67],["maqal360.com",67],["mphealth.online",67],["makefreecallsonline.com",67],["androjungle.com",67],["bookszone.in",67],["drakescans.com",67],["shortix.co",67],["msonglyrics.com",67],["app-sorteos.com",67],["bokugents.com",67],["client.pylexnodes.net",67],["btvplus.bg",67],["blog24.me",[68,69]],["coingraph.us",70],["impact24.us",70],["tvi.la",[71,72]],["iir.la",[71,72]],["tii.la",[71,72]],["ckk.ai",[71,72]],["oei.la",[71,72]],["lnbz.la",[71,72]],["atglinks.com",73],["kbconlinegame.com",74],["hamrojaagir.com",74],["odijob.com",74],["blogesque.net",75],["bookbucketlyst.com",75],["explorosity.net",75],["optimizepics.com",75],["torovalley.net",75],["travize.net",75],["trekcheck.net",75],["metoza.net",75],["simana.online",76],["fooak.com",76],["unblocked.id",78],["listendata.com",79],["7xm.xyz",79],["fastupload.io",79],["azmath.info",79],["blick.ch",80],["wouterplanet.com",81],["androidacy.com",82],["pillowcase.su",83],["veryfreeporn.com",84],["theporngod.com",84],["besthdgayporn.com",85],["drivenime.com",85],["javup.org",85],["shemaleup.net",85],["austiblox.net",86],["btcbunch.com",87],["teachoo.com",88],["interfootball.co.kr",89],["a-ha.io",89],["cboard.net",89],["jjang0u.com",89],["joongdo.co.kr",89],["viva100.com",89],["gamingdeputy.com",89],["thesaurus.net",89],["alle-tests.nl",89],["maketecheasier.com",89],["automobile-catalog.com",89],["allthekingz.com",89],["motorbikecatalog.com",89],["tweaksforgeeks.com",89],["m.inven.co.kr",89],["meconomynews.com",89],["brandbrief.co.kr",89],["motorgraph.com",89],["allthetests.com",90],["javatpoint.com",90],["globalrph.com",90],["carscoops.com",90],["indiatimes.com",90],["issuya.com",90],["topstarnews.net",90],["islamicfinder.org",90],["secure-signup.net",90],["worldhistory.org",91],["bitcotasks.com",92],["udvl.com",93],["www.chip.de",94],["topsporter.net",95],["sportshub.to",95],["streamcheck.link",96],["bitcosite.com",97],["bitzite.com",97],["easymc.io",98],["yunjiema.top",98],["hacoos.com",100],["bondagevalley.cc",101],["zefoy.com",102],["vidello.net",103],["resizer.myct.jp",104],["gametohkenranbu.sakuraweb.com",105],["jisakuhibi.jp",106],["rank1-media.com",106],["lifematome.blog",107],["fm.sekkaku.net",108],["free-avx.jp",109],["dvdrev.com",110],["betweenjpandkr.blog",111],["nft-media.net",112],["ghacks.net",113],["leak.sx",114],["paste.bin.sx",114],["pornleaks.in",114],["songspk2.info",115],["zoechip.com",116],["nectareousoverelate.com",118],["khoaiphim.com",119],["haafedk2.com",120],["fordownloader.com",120],["jovemnerd.com.br",121],["nicomanga.com",122],["totalcsgo.com",123],["vivamax.asia",124],["manysex.com",125],["gaminginfos.com",126],["tinxahoivn.com",127],["forums-fastunlock.com",128],["automoto.it",129],["codelivly.com",130],["ophim.vip",131],["touguatize.monster",132],["novelhall.com",133],["hes-goal.net",134],["abc17news.com",135],["adoredbyalex.com",135],["agrodigital.com",135],["aliontherunblog.com",135],["allaboutthetea.com",135],["allmovie.com",135],["allmusic.com",135],["allthingsthrifty.com",135],["amessagewithabottle.com",135],["androidpolice.com",135],["antyradio.pl",135],["artforum.com",135],["artnews.com",135],["awkward.com",135],["awkwardmom.com",135],["bailiwickexpress.com",135],["barnsleychronicle.com",135],["becomingpeculiar.com",135],["bethcakes.com",135],["betweenenglandandiowa.com",135],["blogher.com",135],["bluegraygal.com",135],["briefeguru.de",135],["carmagazine.co.uk",135],["cattime.com",135],["cbr.com",135],["celiacandthebeast.com",135],["chaptercheats.com",135],["collider.com",135],["comingsoon.net",135],["commercialobserver.com",135],["competentedigitale.ro",135],["crafty.house",135],["dailyvoice.com",135],["decider.com",135],["didyouknowfacts.com",135],["dogtime.com",135],["dualshockers.com",135],["dustyoldthing.com",135],["faithhub.net",135],["femestella.com",135],["footwearnews.com",135],["freeconvert.com",135],["frogsandsnailsandpuppydogtail.com",135],["fsm-media.com",135],["funtasticlife.com",135],["fwmadebycarli.com",135],["gamerant.com",135],["gfinityesports.com",135],["givemesport.com",135],["gulflive.com",135],["helloflo.com",135],["homeglowdesign.com",135],["honeygirlsworld.com",135],["hotcars.com",135],["howtogeek.com",135],["insider-gaming.com",135],["insurancejournal.com",135],["jasminemaria.com",135],["kion546.com",135],["lehighvalleylive.com",135],["lettyskitchen.com",135],["lifeinleggings.com",135],["liveandletsfly.com",135],["lizzieinlace.com",135],["localnews8.com",135],["lonestarlive.com",135],["madeeveryday.com",135],["maidenhead-advertiser.co.uk",135],["makeuseof.com",135],["mardomreport.net",135],["melangery.com",135],["milestomemories.com",135],["modernmom.com",135],["momtastic.com",135],["mostlymorgan.com",135],["motherwellmag.com",135],["movieweb.com",135],["muddybootsanddiamonds.com",135],["musicfeeds.com.au",135],["mylifefromhome.com",135],["nationalreview.com",135],["neoskosmos.com",135],["nordot.app",135],["nothingbutnewcastle.com",135],["nsjonline.com",135],["oakvillenews.org",135],["observer.com",135],["ourlittlesliceofheaven.com",135],["palachinkablog.com",135],["pinkonthecheek.com",135],["politicususa.com",135],["predic.ro",135],["puckermom.com",135],["qtoptens.com",135],["realgm.com",135],["reelmama.com",135],["robbreport.com",135],["royalmailchat.co.uk",135],["samchui.com",135],["sandrarose.com",135],["screenrant.com",135],["sheknows.com",135],["sherdog.com",135],["sidereel.com",135],["silive.com",135],["simpleflying.com",135],["sloughexpress.co.uk",135],["spacenews.com",135],["sportsgamblingpodcast.com",135],["spotofteadesigns.com",135],["stacysrandomthoughts.com",135],["ssnewstelegram.com",135],["superherohype.com",135],["tablelifeblog.com",135],["thebeautysection.com",135],["thecelticblog.com",135],["thecurvyfashionista.com",135],["thefashionspot.com",135],["thegamer.com",135],["thegamescabin.com",135],["thenerdyme.com",135],["thenonconsumeradvocate.com",135],["theprudentgarden.com",135],["thethings.com",135],["timesnews.net",135],["topspeed.com",135],["toyotaklub.org.pl",135],["travelingformiles.com",135],["tutsnode.org",135],["viralviralvideos.com",135],["wannacomewith.com",135],["wimp.com",135],["windsorexpress.co.uk",135],["woojr.com",135],["worldoftravelswithkids.com",135],["xda-developers.com",135],["al.com",[135,137]],["cleveland.com",[135,137]],["masslive.com",[135,137]],["mlive.com",[135,137]],["nj.com",[135,137]],["oregonlive.com",[135,137]],["pagesix.com",[135,137]],["pennlive.com",[135,137]],["syracuse.com",[135,137]],["cheatsheet.com",136],["pwinsider.com",136],["baeldung.com",136],["mensjournal.com",136],["247sports.com",137],["cbsnews.com",137],["cbssports.com",137],["indiewire.com",137],["nypost.com",137],["bagi.co.in",138],["keran.co",138],["biblestudytools.com",139],["christianheadlines.com",139],["ibelieve.com",139],["kuponigo.com",140],["kimcilonly.site",141],["kimcilonly.link",141],["cryptoearns.com",142],["inxxx.com",143],["ipaspot.app",144],["embedwish.com",145],["filelions.live",145],["leakslove.net",145],["jenismac.com",146],["vxetable.cn",147],["jewelavid.com",148],["nizarstream.com",148],["snapwordz.com",149],["toolxox.com",149],["rl6mans.com",149],["idol69.net",149],["plumbersforums.net",150],["123movies57.online",151],["gulio.site",152],["mediaset.es",153],["izlekolik.net",154],["donghuaworld.com",155],["letsdopuzzles.com",156],["tainio-mania.online",157],["hes-goals.io",158],["pkbiosfix.com",158],["casi3.xyz",158],["rediff.com",159],["dzapk.com",160],["darknessporn.com",161],["familyporner.com",161],["freepublicporn.com",161],["pisshamster.com",161],["punishworld.com",161],["xanimu.com",161],["pig69.com",162],["cosplay18.pics",162],["eroticmoviesonline.me",163],["teleclub.xyz",164],["ecamrips.com",165],["showcamrips.com",165],["tucinehd.com",167],["9animetv.to",168],["qiwi.gg",169],["jornadaperfecta.com",170],["loseart.com",171],["sousou-no-frieren.com",172],["unite-guide.com",173],["thebullspen.com",174],["botcomics.com",175],["cefirates.com",175],["chandlerorchards.com",175],["comicleaks.com",175],["marketdata.app",175],["monumentmetals.com",175],["tapmyback.com",175],["ping.gg",175],["revistaferramental.com.br",175],["hawpar.com",175],["alpacafinance.org",[175,176]],["nookgaming.com",175],["enkeleksamen.no",175],["kvest.ee",175],["creatordrop.com",175],["panpots.com",175],["cybernetman.com",175],["bitdomain.biz",175],["gerardbosch.xyz",175],["fort-shop.kiev.ua",175],["accuretawealth.com",175],["resourceya.com",175],["tracktheta.com",175],["camberlion.com",175],["replai.io",175],["trybawaryjny.pl",175],["tt.live",176],["future-fortune.com",176],["abhijith.page",176],["madrigalmaps.com",176],["adventuretix.com",176],["bolighub.dk",176],["panprices.com",177],["intercity.technology",177],["freelancer.taxmachine.be",177],["adria.gg",177],["fjlaboratories.com",177],["emanualonline.com",177],["proboards.com",178],["winclassic.net",178],["financemonk.net",180],["client.falixnodes.net",181],["abema.tv",182]]);

const entitiesMap = new Map([["mixdrop",[3,14]],["wawacity",3],["pahe",[5,14]],["soap2day",5],["mhdsports",7],["mhdsportstv",7],["mhdtvsports",7],["mhdtvworld",7],["mhdtvmax",7],["mhdstream",7],["reset-scans",7],["poplinks",[7,67]],["hqq",8],["waaw",8],["pixhost",10],["viprow",[13,14,49]],["bluemediadownload",13],["bluemediafile",13],["bluemedialink",13],["bluemediastorage",13],["bluemediaurls",13],["urlbluemedia",13],["cloudvideotv",[13,49]],["vidsrc",[13,49]],["123-movies",14],["123movieshd",14],["123movieshub",14],["123moviesme",14],["1337x",[14,29]],["1stream",14],["1tamilmv",14],["2ddl",14],["2umovies",14],["3hiidude",14],["4stream",14],["5movies",14],["7hitmovies",14],["9xmovie",14],["9xlinks",14],["aagmaal",[14,49]],["adblockeronstape",14],["adblockeronstreamtape",14],["adblockplustape",14],["adblockstreamtape",14],["adblockstrtape",14],["adblockstrtech",14],["adblocktape",14],["adcorto",14],["alexsports",14],["alexsportss",14],["alexsportz",14],["animepahe",14],["animesanka",14],["animixplay",14],["aniplay",14],["antiadtape",14],["asianclub",14],["ask4movie",14],["atomixhq",[14,49]],["atomohd",14],["beinmatch",[14,22]],["bhaai",14],["buffstreams",14],["canalesportivo",14],["clickndownload",14],["clicknupload",14],["daddylive",[14,49]],["daddylivehd",[14,49]],["ddrmovies",14],["desiremovies",14],["devlib",14],["divxtotal",14],["divxtotal1",14],["dlhd",14],["dvdplay",[14,49]],["elixx",14],["enjoy4k",14],["estrenosflix",14],["estrenosflux",14],["estrenosgo",14],["f1stream",14],["fbstream",14],["file4go",14],["filmymeet",14],["filmyzilla",[14,49]],["findav",14],["findporn",14],["flixmaza",14],["flizmovies",14],["freetvsports",14],["fullymaza",14],["g3g",14],["gotxx",14],["grantorrent",14],["hdmoviesfair",[14,49]],["hdmoviesflix",14],["hiidudemoviez",14],["imgsen",14],["imgsto",14],["incest",14],["incestflix",14],["itopmusic",14],["javmost",14],["keeplinks",14],["keepvid",14],["keralahd",14],["khatrimazaful",14],["khatrimazafull",14],["leechall",14],["linkshorts",14],["mangovideo",14],["masaporn",14],["miniurl",14],["mirrorace",14],["mixdroop",14],["mkvcage",14],["mlbstream",14],["mlsbd",14],["mmsbee",14],["motogpstream",14],["movieplex",14],["movierulzlink",14],["movies123",14],["moviesflix",14],["moviesmeta",14],["moviessources",14],["moviesverse",14],["moviezwaphd",14],["mrunblock",14],["nbastream",14],["newmovierulz",14],["nflstream",14],["nhlstream",14],["noblocktape",14],["nocensor",14],["onlyfams",14],["ouo",14],["pctfenix",[14,49]],["pctnew",[14,49]],["peliculas24",14],["pelisplus",14],["piratebay",14],["plyjam",14],["plylive",14],["plyvdo",14],["pornhoarder",14],["prbay",14],["projectfreetv",14],["proxybit",14],["psarips",14],["racaty",14],["remaxhd",14],["rintor",14],["rnbxclusive",14],["rnbxclusive0",14],["rnbxclusive1",14],["rojadirecta",14],["rojadirectaenvivo",14],["rugbystreams",14],["sadisflix",14],["safetxt",14],["shadowrangers",14],["shahi4u",14],["shahid4u1",14],["shahid4uu",14],["shavetape",14],["shortearn",14],["shorten",14],["shorttey",14],["shortzzy",14],["skymovieshd",14],["socceronline",[14,49]],["softarchive",14],["sports-stream",14],["sshhaa",14],["stapadblockuser",14],["stape",14],["stapewithadblock",14],["starmusiq",14],["strcloud",14],["streamadblocker",[14,49]],["streamadblockplus",14],["streamcdn",14],["streamhub",14],["streamsport",14],["streamta",14],["streamtape",14],["streamtapeadblockuser",14],["strikeout",14],["strtape",14],["strtapeadblock",14],["strtapeadblocker",14],["strtapewithadblock",14],["strtpe",14],["swatchseries",14],["tabooflix",14],["tennisstreams",14],["themoviesflix",14],["thepiratebay",14],["thisav",14],["tmearn",14],["toonanime",14],["torlock",14],["tormalayalam",14],["torrentz2eu",14],["tutelehd",14],["tvply",14],["u4m",14],["ufcstream",14],["unblocknow",14],["uploadbuzz",14],["usagoals",14],["vexmoviex",14],["vidclouds",14],["vidlox",14],["vipbox",[14,49]],["vipboxtv",[14,49]],["vipleague",14],["watch-series",14],["watchseries",14],["xclusivejams",14],["xmoviesforyou",14],["youdbox",14],["ytmp3eu",14],["yts-subs",14],["yts",14],["zooqle",14],["dutchycorp",15],["dood",[27,49]],["doodstream",27],["dooood",[27,49]],["torrentdownload",30],["shrinke",33],["shrinkme",33],["daddylive1",42],["esportivos",42],["poscitechs",42],["bollyflix",42],["watchomovies",[43,49]],["123movies",49],["123moviesla",49],["123movieweb",49],["2embed",49],["720pstream",49],["9xmovies",49],["adshort",49],["allmovieshub",49],["asianplay",49],["atishmkv",49],["cricstream",49],["crictime",49],["databasegdriveplayer",49],["extramovies",49],["faselhd",49],["faselhds",49],["filemoon",49],["filmy",49],["filmyhit",49],["filmywap",49],["fmovies",49],["gdplayer",49],["gdriveplayer",49],["goku",49],["gomovies",49],["gowatchseries",49],["hdfungamezz",49],["hindilinks4u",49],["hurawatch",49],["jalshamoviezhd",49],["livecricket",49],["mhdsport",49],["mkvcinemas",49],["movies2watch",49],["moviespapa",49],["mp4moviez",49],["mydownloadtube",49],["nsw2u",49],["nuroflix",49],["o2tvseries",49],["o2tvseriesz",49],["pirlotv",49],["poscitech",49],["primewire",49],["redecanais",49],["serienstream",49],["sflix",49],["shahed4u",49],["shaheed4u",49],["speedostream",49],["sportcast",49],["sportskart",49],["streamingcommunity",49],["tamilarasan",49],["tamilfreemp3songs",49],["tamilprinthd",49],["torrentdosfilmes",49],["tubemate",49],["uploadrar",49],["uqload",49],["vidcloud9",49],["vido",49],["vidoo",49],["vudeo",49],["vumoo",49],["yesmovies",49],["mydverse",65],["stfly",75],["stly",75],["kickass",77],["cine-calidad",84],["teluguflix",99],["actvid",116],["lk21official",166],["nontondrama",166],["dropgalaxy",180]]);

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
