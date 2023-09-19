/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
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

// ruleset: annoyances-others

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_nanoSetIntervalBooster = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["Popup will close in","*","0.001"],["/wpsafe|wait|timer/","*","0.001"],["time--","*","0.001"],["count","*","0.001"],["update","*","0.001"],["counter","*","0.001"],["/wpsafe-|timeLeft/","*","0.001"],["wpsafe-","*","0.001"],["mdtimer","*","0.001"],["timer","","0.02"],["countdown","*","0.001"],["timer","*","0.001"],["counter"],["clearInterval","*","0.001"],["wait","*","0.02"],["count","*","0.02"],["counter","*","0.02"],["download","*","0.02"],["timeLeft","*","0.02"],["timeLeft","","0.02"],["/_0x|wpsafe-/","*","0.02"],["Download","*","0.02"],["counter--","*","0.02"],["count--","*","0.02"],["time","*","0.02"],["p--","","0.02"],["current()","*","0.02"],["wpsafe-","*","0.02"],["disabled","*","0.02"],["timePassed","*","0.02"],["countdown","*","0.02"],["/Seconds|download/","*","0.02"],["download_progress","*","0.02"],["count","1600","0.02"],["downloadButton","*","0.02"],["waitTime","*","0.02"],["timer","*","0.02"],["timeSec--","*","0.02"],["_0x","*","0.02"],["wpsafe-generate","*","0.02"],["document.hidden","*","0.02"],["#mdtimer","","0.02"],["updatePercentage","*","0.02"],["timePassed","","0.02"],["DOWNLOAD","*","0.02"],["Number","","0.02"],["/counter|wait/","*","0.02"],["get-link","*","0.02"],["cont","*","0.02"],[",dataType:_","1000","0.02"],["/wpsafe|count/","*","0.02"],["downloadToken","*","0.02"],["/timeLeft|wpsafe-/","*","0.02"],["cnDownloadBtn","*","0.02"],["download_link","*","0.02"],["secondsleft","*","0.02"],["countdown","","0.02"],["yuidea-","*","0.02"],["timer--","*","0.02"],["success","","0.02"],["/verify_text|isCompleted/","*","0.02"],["#timer","","0.02"],["countdownwrapper","","0.02"],["timeleft","*","0.02"],["contador","*","0.02"],["Your Link","","0.02"],["count","","0.02"],["/download|Please/","","0.02"],["downloadButton","","0.02"],["window.location.href= atob(","1000","0.02"],[".show_download_links","","0.02"],["download-btn","","0.02"],["updatePercentage","100","0.02"],["decodeURIComponent(link)","","0.02"],["/count-|-wait/","*","0.02"],["waktu--","","0.02"],[".download","","0.02"],["/base-timer-label|waktu--/","","0.02"],["curCount","","0.02"],["Please wait","","0.02"],["mdtimer","","0.02"],["gotolink","*","0.02"],["seconds--","*","0.02"],["claim_button","*","0.02"],["/Please Wait|Generating Links/","*","0.02"],["#second","","0.02"],["#countdown","","0.02"],["progressbar","30","0.02"],["#upbtn","","0.02"],["skip-btn","*","0.02"],["tp-","*","0.02"],["downloadTimer","","0.02"],["/Please Wait|Go to download/","","0.02"],["counter","","0.02"],["/counter--|downloadButton/","","0.02"],["location","","0.02"],["/wpsafe|wait/","*","0.001"],["counter--","","0.02"],["pleasewait","","0.02"],["bb_download_delay","","0.02"],["0x","","0.02"],["timeCount","*","0.2"],["counter","2000","0.02"],["downloadLinkButton","*","0.02"],["startChecking","*","0.02"],["timer","1000","0.02"],["timeleft","","0.02"],["timeSec--","*","0.001"],["show_download_links","","0.02"],["REDIRECTING","*","0.02"],["ct","1000","0.02"],["sec--","","0.02"],["count--","","0.02"],["sec","","0.02"],["wpsafe-","","0.02"],["wpsafe-","2000","0.02"],["wpsafe-","1500","0.02"],["get-link","","0.02"],["download","2000","0.02"],["timer","1500","0.02"],["timer","2000","0.02"],["Link","550","0.02"],["#proceed","","0.02"],["counter","1800","0.02"],["downloadButton","1500","0.02"],["sp-count-down","","0.02"],["gotolink","","0.02"],["btngetlink","30","0.02"],["btn","","0.02"],["sec--","","0.001"],["/show_download_links|downloadTimer/","","0.02"],["timeinterval","","0.02"],["countDown","1150","0.5"],["makingdifferenttimer","50","0.02"],["Link()","","0.02"],["time","","0.02"],["time","2500","0.02"],["freeRemind","","0.02"],["contador","","0.02"],["contador--","","0.02"],["counter--","1300","0.02"],["seconds","","0.02"],["downloadButton","1000","0.02"],["counter","1000","0.02"],["wpsafe-generate","","0.02"],["timerText","","0.02"],["#counter","","0.02"],["counter","1500","0.02"],["download-count-down","","0.02"],["runTimer","","0.02"],["[0x","","0.02"],["#download","","0.02"],["percentVal","30","0.02"],["wpsafe-generate","1000","0.02"],["wpsafe","","0.02"],["timer","1000","0.6"],["","1000","0.05"],["second--","","0.02"],["#bt","","0.02"],["counter--","100","0.02"],["#Download-Card","","0.02"],[".stop()","","0.02"],["Link will appear","510","0.02"],["Link will appear","1010","0.02"],["countdown","2000","0.02"],["sayimiBaslat","","0.02"],["wpsafe-link","2000","0.02"],["#eg-timer","","0.3"],["#CountDown","","0.02"],["dllink","","0.02"],["time--","","0.02"],["stop()","","0.02"],["second","1000","0.02"],["wait_seconds","","0.02"],["download-countdown","","0.02"],["current_progress","2000","0.02"],["display()","","0.02"],["get_link","","0.02"],["goToLink","2200","0.02"],[".countdown","2000","0.02"],["urll","800","0.02"],["Downloading","","0.02"],["linkDL","","0.02"],["downloadButton","2400","0.02"],["#pleasewait","","0.02"],[".fcounter span","","0.02"],["real-link","","0.02"],[".wpapks-download-link-wrapper","","0.02"],["(i-1)","","0.02"],["fcounter","","0.02"],["show_ag","","0.02"],["timer","700","0.02"],["clock()","1000","0.02"],[".countdown","","0.02"],["secondsLeft","","0.02"],["timeLeft--","","0.02"],["/_0x[\\s\\S]*?decodeURIComponent/","","0.02"],["count-","","0.02"],["#download-popup","","0.02"],[".timer","","0.02"],["#download_menu","","0.02"],["r--","","0.02"],["showDownloadButton","","0.02"],["download_link","","0.02"],["onLoop","","0.02"],["timer.remove","","0.02"],["download","","0.02"],["i--","","0.02"]];

const hostnamesMap = new Map([["djrudrabasti.in",0],["165.22.246.130",1],["vstdrive.in",2],["zeroupload.com",3],["bhojpuritop.in",3],["amritadrino.com",[3,39]],["decrypt.day",4],["alpinecorporate.com",5],["theprodkeys.com",6],["forasm.com",7],["heroxcheat.cloud",8],["bloginkz.com",9],["go.freetrx.fun",9],["wpking.in",9],["yifysubtitles.me",9],["michaelemad.com",9],["shtms.co",9],["gitizle.vip",9],["ay.live",9],["techrfour.com",9],["theicongenerator.com",9],["multilinkfz.xyz",9],["yindex.xyz",9],["unityassetcollection.com",9],["earningradar.com",9],["findi.pro",9],["uzunversiyon.xyz",9],["direkizle.xyz",9],["tamindir.mobi",9],["gitlink.pro",9],["aylink.co",9],["moretvtime.com",9],["urlpay.net",9],["claim4.fun",9],["plog.com.br",10],["wellness4live.com",11],["insuranceinfos.in",11],["finsurances.co",12],["hotmediahub.com",13],["covemarkets.com",14],["finclub.in",15],["financeyogi.net",15],["trangchu.news",15],["downfile.site",15],["player.pelisgratishd.io",15],["doibihar.org",15],["educationgyani.com",15],["ffworld.xyz",15],["gawbne.com",15],["forex-trnd.com",[15,41]],["forex-golds.com",15],["cravesandflames.com",16],["novelsapps.com",16],["codesnse.com",16],["speedtorrent.ru",16],["listas.pro",16],["forexit.io",16],["healthy4pepole.com",[16,91,93]],["sitecuatui.xyz",16],["haonguyen.top",16],["androjungle.com",17],["getmodsapk.com",17],["mixrootmods.com",18],["consoleroms.com",18],["romspedia.com",18],["edummm.xyz",18],["shortlinks.tech",19],["dramaworldhd.co",19],["bitefaucet.com",19],["filmypoints.in",[20,27]],["vinstartheme.com",21],["instamod.net",21],["jenismac.com",22],["unityassets4free.com",22],["spacebin.site",22],["freemodapks.com",22],["player.repelis24.rs",23],["makimbo.xyz",24],["dyp.li",25],["linku.to",26],["oneslidephotography.com",27],["apasih.my.id",27],["financekami.com",27],["bico8.com",27],["techyinfo.in",27],["smallinfo.in",27],["techymedies.com",27],["disheye.com",27],["ufacw.com",27],["googledrivelinks.com",27],["technicalatg.com",[27,36]],["7apple.net",27],["arhplyrics.in",27],["netfile.cc",27],["jardima.com",27],["courseforfree.com",27],["tutorial.siberuang.com",27],["segurosdevida.site",27],["surl.li",28],["bankvacency.com",29],["indilinks.xyz",30],["discordbotlist.com",30],["maxsilo.in",31],["starfiles.co",32],["nguyenvanbao.com",33],["androidecuatoriano.xyz",34],["sinonimos.de",35],["atlai.club",35],["blogtechh.com",37],["vavada5com.com",37],["financerites.in",37],["financerites.com",37],["diudemy.com",38],["techboyz.xyz",38],["adslink.pw",38],["3dzip.org",40],["3rabsnews.com",41],["mobileprice.site",41],["bestmobilenew.com",41],["linkjust1.com",41],["vidtome.stream",41],["ta2deem7arbya.com",[42,80]],["eda-ah.com",[42,80]],["modzilla.in",43],["garutpos.com",43],["vrcmods.com",43],["garutexpress.id",43],["getfreecourses.co",44],["dosya.hizliresim.com",45],["vebma.com",46],["pinloker.com",46],["sekilastekno.com",46],["blogmado.com",47],["suaurl.com",48],["webhostingpost.com",49],["wikitraveltips.com",50],["naukrilelo.in",50],["fikper.com",51],["freecoursesonline.me",52],["codingnepalweb.com",[53,140]],["misirtune.blogspot.com",54],["userload.co",55],["dizimini.com",56],["mohammedkhc.com",56],["trendyoum.com",56],["dl.indexmovies.xyz",56],["cheatsquad.gg",56],["mcpedl.com",56],["filese.me",56],["linkslo.com",56],["c1ne.co",56],["pearos.xyz",56],["moddedguru.com",56],["py.md",56],["abhaydigitalmarketer.com",56],["bestshort.xyz",56],["moaplos.com",56],["nullslide.com",56],["mage.si",56],["embed.m3u-cdn.live",56],["embed.tvcdn.live",56],["mastercoria.com",56],["gaminplay.com",[57,96,116]],["gamelopte.com",57],["insurglobal.xyz",57],["sevenjournals.com",57],["digworm.io",58],["br0wsers.com",[59,190]],["hashhackers.com",60],["katdrive.net",60],["newsongs.co.in",60],["altblogger.net",61],["cashearn.cc",61],["subscene.vip",61],["safelink.omglyrics.com",61],["4download.net",61],["acortar.info",61],["kotp1000000.xyz",61],["blog.donia-tech.net",61],["anomize.xyz",61],["boardgamesonline.net",61],["freeudemycourse.com",62],["modshost.net",63],["coincity.in",63],["djxmaza.in",63],["examtadka.com",63],["proviralhost.com",63],["urbharat.xyz",63],["codenova-center.web.app",64],["minecraftalpha.net",65],["aeromods.app",66],["whatsaero.com",66],["pahe.win",66],["financeflix.in",66],["technoflip.in",66],["studyranks.in",66],["flightsim.to",66],["hikarinoakari.com",66],["hikarinoakariost.info",66],["recipesdelite.com",67],["edumaz.com",68],["blisseyhusband.in",68],["bingotingo.com",68],["compressware.in",68],["geektopia.info",68],["freecoursewebsite.com",68],["dosyayukle.biz",68],["freetutorialsus.com",68],["apkmos.com",68],["sfile.mobi",68],["notipostingt.com",69],["cmacked.com",70],["movieflixpro.com",70],["gocmod.com",71],["speedynews.xyz",72],["xmod.in",72],["tecmundo.net",72],["crazyblog.in",[72,114,115]],["studyuo.com",[72,114,115]],["sbkaise.in",72],["janusnotes.com",72],["anime-sanka.com",73],["kiemlua.com",[74,102,147]],["world-trips.net",[74,106]],["newforex.online",[74,102]],["pes-patches.com",75],["data.morsodifame.com",75],["ifile.cc",75],["filemoon.sx",76],["truongblogger.top",77],["koyi.pub",78],["thizissam.in",[79,97]],["alphaantileak.net",79],["o-pro.online",80],["mazen-ve.com",80],["animeuploader.com",80],["konstantinova.net",80],["ontools.net",81],["teknopaid.xyz",81],["asdfiles.com",82],["11bit.co.in",83],["spantechie.com",84],["paste1s.com",85],["note1s.com",85],["easylinkref.com",85],["redirect.dafontvn.com",[86,87]],["samapkstore.com",[86,87]],["andronews18.blogspot.com",[86,87]],["ph.tpaste.net",[86,87]],["sdetectives.id",86],["apps2app.com",86],["pro-bangla.com",86],["cheatermad.com",88],["streamcheck.link",89],["tinyurl.so",89],["tinyurl.is",89],["usanewstoday.club",90],["earnme.club",90],["top1iq.com",91],["sama-pro.com",91],["7misr4day.com",[91,111]],["coursefreedl.com",91],["apkmaza.net",91],["jpopsingles.eu",91],["gplinks.co",91],["mobiget.net",91],["newzflair.com",92],["newzmagic.com",92],["adlice.com",93],["yalla-shoot-now.us",93],["forexeen.us",93],["health-and.me",93],["wondervelocity.com",93],["bluetechno.net",93],["world2our.com",93],["mobi2c.com",[93,102]],["mywatchseries.fun",93],["telepisodes.org",93],["kingtalks.net",93],["maxurlz.com",93],["allcryptoz.net",93],["topcryptoz.net",93],["thaitrieuvi.live",93],["freewebcart.com",93],["safe.kangkimin.com",93],["maxservicesi.com",93],["techhelpbd.com",94],["egyfalcons.com",95],["gktech.uk",96],["worldmak.com",96],["ftuapps.dev",96],["dl.tech-story.net",96],["themorningtribune.com",96],["veganho.co",96],["veganal.co",96],["mosqam.com",96],["bimo-cash.readi.online",96],["blog.textpage.xyz",96],["claimlite.club",96],["bitcomarket.net",96],["1apple.xyz",96],["mcrypto.club",[96,144]],["gamepure.in",96],["veganab.co",96],["apkmaven.io",96],["choiceappstore.xyz",96],["pn.cgchotbox.com",96],["worldappsstore.xyz",96],["gifans.com",96],["iptvjournal.com",96],["kienthucrangmieng.com",96],["coin-free.com",96],["moddingzone.in",96],["insurance-space.xyz",96],["blognews.in",96],["noithatmyphu.vn",96],["dulichkhanhhoa.net",96],["therootdroid.com",96],["filessrc.com",97],["srcimdb.com",97],["udemycourses.me",97],["eu.tapchipi.com",97],["short.ctvb1.info",97],["citychilli.com",97],["psdly.com",97],["desitvshows.xyz",97],["katmoviehd4.com",97],["download.modsofapk.com",97],["infopedia24.com",97],["linkdecode.com",97],["short-ly.co",98],["upshrink.com",98],["jojo-themes.net",99],["diglink.blogspot.com",100],["th-world.com",100],["za.gl",101],["za.uy",101],["rezence.com",102],["techmody.io",[102,123]],["yoshare.net",102],["mikl4forex.com",[102,147]],["publicananker.com",[102,147]],["aemenstore.com",102],["cazzette.com",102],["truebrandy.com",102],["hookeaudio.com",102],["restorbio.com",102],["medcpu.com",102],["alocd.com",102],["forex-gold.net",[102,106]],["kingsleynyc.com",102],["lucidcam.com",102],["staaker.com",102],["byboe.com",102],["thegoneapp.com",102],["nousdecor.com",102],["alobuu.com",[102,147]],["rodjulian.com",[102,147]],["aloass.com",[102,147]],["taisv.com",[102,147]],["aloguy.com",[102,147]],["alohdd.com",[102,147]],["alogum.com",[102,147]],["alobyt.com",[102,147]],["aloboi.com",[102,147]],["uebnews.online",[102,147]],["aloegg.com",[102,147]],["alofps.com",[102,147]],["pennbookcenter.com",[102,147]],["samfirms.com",103],["appsmodz.com",104],["cararegistrasi.com",105],["healdad.com",106],["gamalk-sehetk.com",106],["yogablogfit.com",107],["vocalley.com",107],["howifx.com",107],["enit.in",107],["skincarie.com",107],["imperialstudy.com",107],["hamsterss.website",108],["apkmb.com",108],["boobychristmas.com",109],["ethereumfaucet.info",110],["tutcourse.com",111],["luckydice.net",111],["coinsearns.com",111],["gdfreak.xyz",111],["doctor-groups.com",111],["crypto-faucet.xyz",111],["mik4mob.com",111],["iklandb.com",111],["urapk.com",111],["dogemate.com",[111,158]],["shorteet.com",111],["earnbits.xyz",111],["bitearns.com",111],["girls-like.me",112],["sonixgvn.net",112],["runmods.com",112],["watchdoge.xyz",113],["informatikamu.id",[114,115]],["technicalatg.xyz",[114,115]],["taregna.com",[114,115]],["toolss.net",[114,115]],["tutsgalaxy.net",[114,115]],["otomi-games.com",[115,153]],["yifysub.net",117],["cdmstudy.site",118],["insurance.recipesdelite.com",118],["allbuzzin.com",[119,120]],["file.bospedia.com",121],["toptap.website",122],["adnit-tri.tk",122],["boomx5.com",122],["howtofree.org",124],["rethmic.com",125],["majidzhacker.com",[126,127]],["itscybertech.com",128],["gold-24.net",129],["3rabsports.com",129],["forexrw7.com",129],["fx-22.com",129],["forexmab.com",129],["forexwaw.club",129],["forex-articles.com",129],["linkjust.com",129],["forexlap.com",129],["shareappscrack.com",130],["oiipdf.com",131],["upstore.net",132],["subs4series.com",133],["gamingforecast.com",134],["icutlink.com",135],["android-apk.org",135],["semawur.com",135],["zegtrends.com",136],["littlebyte.net",137],["megadescargas.net",138],["blyts.net",138],["lawebdelprogramador.com",139],["win10.vn",141],["wildfaucets.ml",141],["faucet.cryptourl.net",141],["dogeatm.com",141],["claimbits.io",141],["i-bits.io",141],["diamondfaucet.space",141],["gobits.io",141],["russiacoin.xyz",141],["starsfaucet.com",141],["lionltcfaucet.xyz",141],["faucet.shorterall.com",141],["yellowfaucet.ovh",141],["bollypluse.in",142],["freecourseslab.com",143],["freetutorialseu.com",143],["informaxonline.com",[144,166]],["tipslearn.com",144],["androidnougatapk.com",144],["siberuang.com",144],["waaboom.com",144],["healthymaster.xyz",144],["bkksnews.xyz",144],["faucetcrypto.com",145],["techoow.com",146],["mynewsmedia.in",147],["mynewshub.co",147],["techbigs.com",148],["kiktu.com",149],["technicalegy.com",150],["wallpaperaccess.com",151],["uniqueten.net",154],["ultraten.net",154],["elil.cc",155],["game-kentang.blogspot.com",156],["upfile.us",156],["mad4wheels.com",157],["moviesdaweb.blogspot.com",159],["dlsharefile.com",160],["eco-area.com",161],["safelink.rezkozpatch.xyz",[162,163]],["onlinecoursebay.com",164],["kazanclilink.com",165],["emulatorgames.net",167],["iptv4best.com",168],["leechall.com",169],["kpopstan.com",170],["ouo.io",171],["cpmlink.net",171],["short-url.link",172],["findicons.com",173],["nulleb.com",174],["bfas237blog.info",175],["dr-farfar.net",176],["saungfirmware.id",177],["goossh.com",178],["onlinefreecourse.net",179],["site.dz4win.com",180],["thingiverse.com",181],["linkerload.com",182],["ockles.com",182],["ljutkeunvpn.blogspot.com",182],["mobilelegends.shop",182],["linksaya.com",183],["phpscripttr.com",184],["essek.gen.tr",184],["indir.turkceyama.net",184],["clicads.fr",184],["mazakony.net",184],["5mod-file.ru",185],["genlink.cc",186],["apkprofree.com",187],["zedge.net",188],["hakdisk.ru",189],["diskapk.ru",189],["softwaresde.com",190],["tr.link",191],["doods.pro",193],["dooood.com",193],["dood.yt",193],["dood.re",193],["dood.wf",193],["dood.la",193],["dood.pm",193],["dood.so",193],["dood.to",193],["dood.watch",193],["dood.ws",193],["nightfallnews.com",194],["retrostic.com",195],["shiroyasha.me",196],["bolicheintercambios.net",197],["lg-firmwares.com",198],["sfirmware.com",198],["imgqec.online",199],["imgwbfh.online",199],["imgyer.store",199],["imgxuh.cfd",199],["imgngc.sbs",199],["imgezx.sbs",199],["imgxza.store",199],["imgwqr.online",199],["imagehaha.com",199],["imgpukrr.site",199],["imagent.buzz",199],["imagepuitr.buzz",199],["imgblaze.net",199],["imgkorle.buzz",199],["imgkaka.xyz",199],["pixsera.net",199],["imgfrost.net",199],["imgair.net",199],["wallpaperplay.com",200],["lnk.parts",201],["lnk.news",201],["sammobile.com",202],["bomurl.com",203],["go.geghost.com",204],["romhustler.org",205],["a2zupload.com",206],["dl.pcgamestorrents.org",207],["get-url.com",207]]);

const entitiesMap = new Map([["lootlinks",66],["ibomma",80],["animesanka",152],["akwam",192],["bluemediafile",207],["bluemediafiles",207]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function nanoSetIntervalBooster(
    needleArg = '',
    delayArg = '',
    boostArg = ''
) {
    if ( typeof needleArg !== 'string' ) { return; }
    const safe = safeSelf();
    const reNeedle = safe.patternToRegex(needleArg);
    let delay = delayArg !== '*' ? parseInt(delayArg, 10) : -1;
    if ( isNaN(delay) || isFinite(delay) === false ) { delay = 1000; }
    let boost = parseFloat(boostArg);
    boost = isNaN(boost) === false && isFinite(boost)
        ? Math.min(Math.max(boost, 0.001), 50)
        : 0.05;
    self.setInterval = new Proxy(self.setInterval, {
        apply: function(target, thisArg, args) {
            const [ a, b ] = args;
            if (
                (delay === -1 || b === delay) &&
                reNeedle.test(a.toString())
            ) {
                args[1] = b * boost;
            }
            return target.apply(thisArg, args);
        }
    });
}

function safeSelf() {
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
    }
    const self = globalThis;
    const safe = {
        'Error': self.Error,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'jsonParse': self.JSON.parse.bind(self.JSON),
        'jsonStringify': self.JSON.stringify.bind(self.JSON),
        'log': console.log.bind(console),
        uboLog(...args) {
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
            }
            const expect = (options.canNegate === true && pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    pattern,
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            return {
                pattern,
                re: new this.RegExp(pattern.replace(
                    /[.*+?^${}()|[\]\\]/g, '\\$&'),
                    options.flags
                ),
                expect,
            };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            return this.RegExp_test.call(details.re, haystack) === details.expect;
        },
        patternToRegex(pattern, flags = undefined) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
            }
            try {
                return new RegExp(match[1], match[2] || flags);
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
    try { nanoSetIntervalBooster(...argsList[i]); }
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

// Not Firefox
if ( typeof wrappedJSObject !== 'object' ) {
    return uBOL_nanoSetIntervalBooster();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_nanoSetIntervalBooster = cloneInto([
            [ '(', uBOL_nanoSetIntervalBooster.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_nanoSetIntervalBooster);
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
    delete page.uBOL_nanoSetIntervalBooster;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
