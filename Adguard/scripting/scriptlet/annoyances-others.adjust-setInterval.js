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

// ruleset: annoyances-others

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_adjustSetInterval = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["wpsafe-countdown2","*","0.002"],["timer","*","0.001"],["count","*","0.001"],["=--","*","0.001"],["pleasewait","*","0.001"],["tp-time","*","0.001"],["innerHTML=`Wait"],["/wpsafe|wait|timer/","*","0.001"],[".html()","*","0.001"],["return e-1","*","0.001"],["generateDownloadLink","*","0.001"],["countDown()","*","0.28"],["/proceed|mdtimer/","*","0.001"],["time","*","0.02"],["Popup will close in","*","0.001"],["time--","*","0.001"],["update","*","0.001"],["counter","*","0.001"],["/wpsafe-|timeLeft/","*","0.001"],["wpsafe-","*","0.001"],["mdtimer","*","0.001"],["timer","","0.02"],["countdown","*","0.001"],["counter"],["clearInterval","*","0.001"],["wait","*","0.02"],["count","*","0.02"],["counter","*","0.02"],["download","*","0.02"],["timeLeft","*","0.02"],["timeLeft","","0.02"],["/_0x|wpsafe-/","*","0.02"],["Download","*","0.02"],["counter--","*","0.02"],["count--","*","0.02"],["p--","","0.02"],["current()","*","0.02"],["wpsafe-","*","0.02"],["disabled","*","0.02"],["timePassed","*","0.02"],["countdown","*","0.02"],["/Seconds|download/","*","0.02"],["download_progress","*","0.02"],["count","1600","0.02"],["downloadButton","*","0.02"],["waitTime","*","0.02"],["timer","*","0.02"],["timeSec--","*","0.02"],["_0x","*","0.02"],["wpsafe-generate","*","0.02"],["document.hidden","*","0.02"],["#mdtimer","","0.02"],["updatePercentage","*","0.02"],["timePassed","","0.02"],["DOWNLOAD","*","0.02"],["Number","","0.02"],["/counter|wait/","*","0.02"],["get-link","*","0.02"],["cont","*","0.02"],[",dataType:_","1000","0.02"],["/wpsafe|count/","*","0.02"],["downloadToken","*","0.02"],["/timeLeft|wpsafe-/","*","0.02"],["cnDownloadBtn","*","0.02"],["download_link","*","0.02"],["secondsleft","*","0.02"],["countdown","","0.02"],["yuidea-","*","0.02"],["timer--","*","0.02"],["success","","0.02"],["/verify_text|isCompleted/","*","0.02"],["#timer","","0.02"],["countdownwrapper","","0.02"],["timeleft","*","0.02"],["contador","*","0.02"],["Your Link","","0.02"],["count","","0.02"],["/download|Please/","","0.02"],["downloadButton","","0.02"],["window.location.href= atob(","1000","0.02"],[".show_download_links","","0.02"],["/\\.text\\(\\)&&\\(clearInterval|download-btn/","*","0.02"],["updatePercentage","100","0.02"],["decodeURIComponent(link)","","0.02"],["/count-|-wait/","*","0.02"],["waktu--","","0.02"],[".download","","0.02"],["/base-timer-label|waktu--/","","0.02"],["curCount","","0.02"],["Please wait","","0.02"],["mdtimer","","0.02"],["gotolink","*","0.02"],["seconds--","*","0.02"],["claim_button","*","0.02"],["/Please Wait|Generating Links/","*","0.02"],["#second","","0.02"],["#countdown","","0.02"],["progressbar","30","0.02"],["#upbtn","","0.02"],["skip-btn","*","0.02"],["tp-","*","0.02"],["downloadTimer","","0.02"],["/Please Wait|Go to download/","","0.02"],["counter","","0.02"],["/counter--|downloadButton/","","0.02"],["location","","0.02"],["myCounter","*","0.001"],["/wpsafe|wait/","*","0.001"],["counter--","","0.02"],["pleasewait","","0.02"],["bb_download_delay","","0.02"],["0x","","0.02"],["timeCount","*","0.2"],["counter","2000","0.02"],["downloadLinkButton","*","0.02"],["startChecking","*","0.02"],["timer","1000","0.02"],["timeleft","","0.02"],["timeSec--","*","0.001"],["show_download_links","","0.02"],["REDIRECTING","*","0.02"],["ct","1000","0.02"],["sec--","","0.02"],["count--","","0.02"],["sec","","0.02"],["wpsafe-","","0.02"],["wpsafe-","2000","0.02"],["wpsafe-","1500","0.02"],["get-link","","0.02"],["download","2000","0.02"],["timer","1500","0.02"],["timer","2000","0.02"],["Link","550","0.02"],["#proceed","","0.02"],["counter","1800","0.02"],["downloadButton","1500","0.02"],["sp-count-down","","0.02"],["gotolink","","0.02"],["btngetlink","30","0.02"],["btn","","0.02"],["sec--","","0.001"],["/show_download_links|downloadTimer/","","0.02"],["timeinterval","","0.02"],["countDown","1150","0.5"],["makingdifferenttimer","50","0.02"],["Link()","","0.02"],["time","","0.02"],["time","2500","0.02"],["freeRemind","","0.02"],["contador","","0.02"],["contador--","","0.02"],["counter--","1300","0.02"],["seconds","","0.02"],["downloadButton","1000","0.02"],["counter","1000","0.02"],["wpsafe-generate","","0.02"],["timerText","","0.02"],["counter","1500","0.02"],["download-count-down","","0.02"],["runTimer","","0.02"],["[0x","","0.02"],["#download","","0.02"],["percentVal","30","0.02"],["wpsafe-generate","1000","0.02"],["wpsafe","","0.02"],["timer","1000","0.6"],["","1000","0.05"],["second--","","0.02"],["#bt","","0.02"],["counter--","100","0.02"],["#Download-Card","","0.02"],[".stop()","","0.02"],["Link will appear","510","0.02"],["Link will appear","1010","0.02"],["countdown","2000","0.02"],["sayimiBaslat","","0.02"],["wpsafe-link","2000","0.02"],["#eg-timer","","0.3"],["#CountDown","","0.02"],["dllink","","0.02"],["time--","","0.02"],["stop()","","0.02"],["second","1000","0.02"],["wait_seconds","","0.02"],["download-countdown","","0.02"],["current_progress","2000","0.02"],["display()","","0.02"],["get_link","","0.02"],["goToLink","2200","0.02"],[".countdown","2000","0.02"],["urll","800","0.02"],["Downloading","","0.02"],["linkDL","","0.02"],["downloadButton","2400","0.02"],["#pleasewait","","0.02"],[".fcounter span","","0.02"],["real-link","","0.02"],[".wpapks-download-link-wrapper","","0.02"],["(i-1)","","0.02"],["fcounter","","0.02"],["show_ag","","0.02"],["timer","700","0.02"],["clock()","1000","0.02"],[".countdown","","0.02"],["secondsLeft","","0.02"],["timeLeft--","","0.02"],["/_0x[\\s\\S]*?decodeURIComponent/","","0.02"],["count-","","0.02"],["#download-popup","","0.02"],[".timer","","0.02"],["#download_menu","","0.02"],["r--","","0.02"],["showDownloadButton","","0.02"],["download_link","","0.02"],["onLoop","","0.02"],["timer.remove","","0.02"],["download","","0.02"],["i--","","0.02"]];

const hostnamesMap = new Map([["panda.studyis.xyz",0],["bishalghale.com.np",1],["file-upload.in",1],["linksae.com",1],["wellness4live.com",1],["insuranceinfos.in",1],["zeroupload.com",2],["bhojpuritop.in",2],["amritadrino.com",[2,49]],["file.apkmoddone.com",3],["urlcut.ninja",4],["tanytech.com",5],["themezon.net",5],["tutwuri.id",6],["mbjremix.com",7],["165.22.246.130",7],["cloudpaten.pro",8],["sparkful.co",9],["mangoai.co",9],["uptoearn.xyz",10],["uploadhaven.com",11],["mamahawa.com",12],["10short.pro",12],["lk21static.xyz",13],["makimbo.xyz",13],["djrudrabasti.in",14],["vstdrive.in",15],["decrypt.day",16],["alpinecorporate.com",17],["theprodkeys.com",18],["forasm.com",19],["heroxcheat.cloud",20],["bloginkz.com",21],["go.freetrx.fun",21],["wpking.in",21],["yifysubtitles.me",21],["michaelemad.com",21],["shtms.co",21],["gitizle.vip",21],["ay.live",21],["techrfour.com",21],["theicongenerator.com",21],["multilinkfz.xyz",21],["yindex.xyz",21],["unityassetcollection.com",21],["earningradar.com",21],["findi.pro",21],["uzunversiyon.xyz",21],["direkizle.xyz",21],["tamindir.mobi",21],["gitlink.pro",21],["aylink.co",21],["moretvtime.com",21],["urlpay.net",21],["claim4.fun",21],["plog.com.br",22],["finsurances.co",23],["fansonlinehub.com",24],["teralink.me",24],["teraearn.com",24],["terashare.me",24],["hotmediahub.com",24],["terabox.fun",24],["covemarkets.com",25],["finclub.in",26],["financeyogi.net",26],["trangchu.news",26],["downfile.site",26],["player.pelisgratishd.io",26],["doibihar.org",26],["educationgyani.com",26],["ffworld.xyz",26],["gawbne.com",26],["forex-trnd.com",[26,51]],["forex-golds.com",26],["cravesandflames.com",27],["novelsapps.com",27],["codesnse.com",27],["speedtorrent.ru",27],["listas.pro",27],["forexit.io",27],["healthy4pepole.com",[27,101,103]],["sitecuatui.xyz",27],["haonguyen.top",27],["androjungle.com",28],["getmodsapk.com",28],["mixrootmods.com",29],["consoleroms.com",29],["romspedia.com",29],["edummm.xyz",29],["shortlinks.tech",30],["dramaworldhd.co",30],["bitefaucet.com",30],["filmypoints.in",[31,37]],["vinstartheme.com",32],["instamod.net",32],["jenismac.com",33],["unityassets4free.com",33],["spacebin.site",33],["freemodapks.com",33],["player.repelis24.rs",34],["dyp.li",35],["linku.to",36],["oneslidephotography.com",37],["apasih.my.id",37],["financekami.com",37],["bico8.com",37],["techyinfo.in",37],["smallinfo.in",37],["techymedies.com",37],["disheye.com",37],["ufacw.com",37],["googledrivelinks.com",37],["technicalatg.com",[37,46]],["7apple.net",37],["arhplyrics.in",37],["netfile.cc",37],["jardima.com",37],["courseforfree.com",37],["tutorial.siberuang.com",37],["segurosdevida.site",37],["surl.li",38],["bankvacency.com",39],["indilinks.xyz",40],["discordbotlist.com",40],["maxsilo.in",41],["starfiles.co",42],["nguyenvanbao.com",43],["androidecuatoriano.xyz",44],["sinonimos.de",45],["atlai.club",45],["blogtechh.com",47],["vavada5com.com",47],["financerites.in",47],["financerites.com",47],["diudemy.com",48],["techboyz.xyz",48],["adslink.pw",48],["3dzip.org",50],["3rabsnews.com",51],["mobileprice.site",51],["bestmobilenew.com",51],["linkjust1.com",51],["vidtome.stream",51],["ta2deem7arbya.com",[52,90]],["eda-ah.com",[52,90]],["modzilla.in",53],["garutpos.com",53],["vrcmods.com",53],["garutexpress.id",53],["getfreecourses.co",54],["dosya.hizliresim.com",55],["vebma.com",56],["pinloker.com",56],["sekilastekno.com",56],["blogmado.com",57],["suaurl.com",58],["webhostingpost.com",59],["wikitraveltips.com",60],["naukrilelo.in",60],["fikper.com",61],["freecoursesonline.me",62],["codingnepalweb.com",[63,151]],["misirtune.blogspot.com",64],["userload.co",65],["dizimini.com",66],["mohammedkhc.com",66],["trendyoum.com",66],["cheatsquad.gg",66],["mcpedl.com",66],["filese.me",66],["linkslo.com",66],["c1ne.co",66],["pearos.xyz",66],["moddedguru.com",66],["py.md",66],["abhaydigitalmarketer.com",66],["bestshort.xyz",66],["moaplos.com",66],["nullslide.com",66],["mage.si",66],["embed.m3u-cdn.live",66],["embed.tvcdn.live",66],["mastercoria.com",66],["gaminplay.com",[67,107,127]],["gamelopte.com",67],["insurglobal.xyz",67],["sevenjournals.com",67],["digworm.io",68],["br0wsers.com",[69,200]],["hashhackers.com",70],["katdrive.net",70],["newsongs.co.in",70],["altblogger.net",71],["cashearn.cc",71],["subscene.vip",71],["safelink.omglyrics.com",71],["4download.net",71],["acortar.info",71],["kotp1000000.xyz",71],["blog.donia-tech.net",71],["anomize.xyz",71],["boardgamesonline.net",71],["freeudemycourse.com",72],["modshost.net",73],["coincity.in",73],["djxmaza.in",73],["examtadka.com",73],["proviralhost.com",73],["urbharat.xyz",73],["codenova-center.web.app",74],["minecraftalpha.net",75],["aeromods.app",76],["whatsaero.com",76],["pahe.win",76],["financeflix.in",76],["technoflip.in",76],["studyranks.in",76],["flightsim.to",76],["hikarinoakari.com",76],["hikarinoakariost.info",76],["recipesdelite.com",77],["edumaz.com",78],["blisseyhusband.in",78],["bingotingo.com",78],["compressware.in",78],["geektopia.info",78],["freecoursewebsite.com",78],["dosyayukle.biz",78],["freetutorialsus.com",78],["apkmos.com",78],["sfile.mobi",78],["notipostingt.com",79],["cmacked.com",80],["movieflixpro.com",80],["gocmod.com",81],["speedynews.xyz",82],["xmod.in",82],["tecmundo.net",82],["crazyblog.in",[82,125,126]],["studyuo.com",[82,125,126]],["sbkaise.in",82],["janusnotes.com",82],["anime-sanka.com",83],["kiemlua.com",[84,113,157]],["world-trips.net",[84,117]],["newforex.online",[84,113]],["pes-patches.com",85],["data.morsodifame.com",85],["ifile.cc",85],["filemoon.sx",86],["truongblogger.top",87],["koyi.pub",88],["thizissam.in",[89,108]],["alphaantileak.net",89],["o-pro.online",90],["mazen-ve.com",90],["animeuploader.com",90],["konstantinova.net",90],["ontools.net",91],["teknopaid.xyz",91],["asdfiles.com",92],["11bit.co.in",93],["spantechie.com",94],["paste1s.com",95],["note1s.com",95],["easylinkref.com",95],["redirect.dafontvn.com",[96,97]],["samapkstore.com",[96,97]],["andronews18.blogspot.com",[96,97]],["ph.tpaste.net",[96,97]],["sdetectives.id",96],["apps2app.com",96],["pro-bangla.com",96],["cheatermad.com",98],["streamcheck.link",99],["tinyurl.so",99],["tinyurl.is",99],["usanewstoday.club",100],["earnme.club",100],["top1iq.com",101],["sama-pro.com",101],["7misr4day.com",[101,122]],["coursefreedl.com",101],["apkmaza.net",101],["jpopsingles.eu",101],["gplinks.co",101],["mobiget.net",101],["newzflair.com",102],["newzmagic.com",102],["adlice.com",103],["yalla-shoot-now.us",103],["forexeen.us",103],["health-and.me",103],["wondervelocity.com",103],["bluetechno.net",103],["world2our.com",103],["mobi2c.com",[103,113]],["mywatchseries.fun",103],["telepisodes.org",103],["kingtalks.net",103],["maxurlz.com",103],["allcryptoz.net",103],["topcryptoz.net",103],["thaitrieuvi.live",103],["freewebcart.com",103],["safe.kangkimin.com",103],["maxservicesi.com",103],["techhelpbd.com",104],["egyfalcons.com",105],["premads.com",106],["freemodsapp.xyz",107],["mayaremix.in",107],["infortechno.com",107],["getintoway.com",107],["gktech.uk",107],["worldmak.com",107],["ftuapps.dev",107],["dl.tech-story.net",107],["themorningtribune.com",107],["veganho.co",107],["veganal.co",107],["mosqam.com",107],["bimo-cash.readi.online",107],["blog.textpage.xyz",107],["claimlite.club",107],["bitcomarket.net",107],["1apple.xyz",107],["mcrypto.club",[107,155]],["gamepure.in",107],["veganab.co",107],["apkmaven.io",107],["choiceappstore.xyz",107],["pn.cgchotbox.com",107],["worldappsstore.xyz",107],["gifans.com",107],["iptvjournal.com",107],["kienthucrangmieng.com",107],["coin-free.com",107],["moddingzone.in",107],["insurance-space.xyz",107],["blognews.in",107],["noithatmyphu.vn",107],["dulichkhanhhoa.net",107],["therootdroid.com",107],["filessrc.com",108],["srcimdb.com",108],["udemycourses.me",108],["eu.tapchipi.com",108],["short.ctvb1.info",108],["citychilli.com",108],["psdly.com",108],["desitvshows.xyz",108],["katmoviehd4.com",108],["download.modsofapk.com",108],["infopedia24.com",108],["linkdecode.com",108],["short-ly.co",109],["upshrink.com",109],["jojo-themes.net",110],["diglink.blogspot.com",111],["th-world.com",111],["za.gl",112],["za.uy",112],["rezence.com",113],["techmody.io",[113,134]],["yoshare.net",113],["mikl4forex.com",[113,157]],["publicananker.com",[113,157]],["aemenstore.com",113],["cazzette.com",113],["truebrandy.com",113],["hookeaudio.com",113],["restorbio.com",113],["medcpu.com",113],["alocd.com",113],["forex-gold.net",[113,117]],["kingsleynyc.com",113],["lucidcam.com",113],["staaker.com",113],["byboe.com",113],["thegoneapp.com",113],["nousdecor.com",113],["alobuu.com",[113,157]],["rodjulian.com",[113,157]],["aloass.com",[113,157]],["taisv.com",[113,157]],["aloguy.com",[113,157]],["alohdd.com",[113,157]],["alogum.com",[113,157]],["alobyt.com",[113,157]],["aloboi.com",[113,157]],["uebnews.online",[113,157]],["aloegg.com",[113,157]],["alofps.com",[113,157]],["pennbookcenter.com",[113,157]],["samfirms.com",114],["appsmodz.com",115],["cararegistrasi.com",116],["healdad.com",117],["gamalk-sehetk.com",117],["healthfirstweb.com",118],["yogablogfit.com",118],["vocalley.com",118],["howifx.com",118],["enit.in",118],["skincarie.com",118],["imperialstudy.com",118],["hamsterss.website",119],["apkmb.com",119],["boobychristmas.com",120],["ethereumfaucet.info",121],["tutcourse.com",122],["luckydice.net",122],["coinsearns.com",122],["gdfreak.xyz",122],["doctor-groups.com",122],["crypto-faucet.xyz",122],["mik4mob.com",122],["iklandb.com",122],["urapk.com",122],["dogemate.com",[122,168]],["shorteet.com",122],["earnbits.xyz",122],["bitearns.com",122],["girls-like.me",123],["sonixgvn.net",123],["runmods.com",123],["watchdoge.xyz",124],["informatikamu.id",[125,126]],["technicalatg.xyz",[125,126]],["taregna.com",[125,126]],["toolss.net",[125,126]],["tutsgalaxy.net",[125,126]],["otomi-games.com",[126,163]],["yifysub.net",128],["cdmstudy.site",129],["insurance.recipesdelite.com",129],["allbuzzin.com",[130,131]],["file.bospedia.com",132],["toptap.website",133],["adnit-tri.tk",133],["boomx5.com",133],["howtofree.org",135],["rethmic.com",136],["majidzhacker.com",[137,138]],["itscybertech.com",139],["gold-24.net",140],["3rabsports.com",140],["forexrw7.com",140],["fx-22.com",140],["forexmab.com",140],["forexwaw.club",140],["forex-articles.com",140],["linkjust.com",140],["forexlap.com",140],["shareappscrack.com",141],["oiipdf.com",142],["upstore.net",143],["subs4series.com",144],["gamingforecast.com",145],["icutlink.com",146],["android-apk.org",146],["semawur.com",146],["zegtrends.com",147],["littlebyte.net",148],["megadescargas.net",149],["blyts.net",149],["lawebdelprogramador.com",150],["win10.vn",152],["wildfaucets.ml",152],["faucet.cryptourl.net",152],["dogeatm.com",152],["claimbits.io",152],["i-bits.io",152],["diamondfaucet.space",152],["gobits.io",152],["russiacoin.xyz",152],["starsfaucet.com",152],["lionltcfaucet.xyz",152],["faucet.shorterall.com",152],["yellowfaucet.ovh",152],["bollypluse.in",153],["freecourseslab.com",154],["freetutorialseu.com",154],["informaxonline.com",[155,176]],["tipslearn.com",155],["androidnougatapk.com",155],["siberuang.com",155],["waaboom.com",155],["healthymaster.xyz",155],["bkksnews.xyz",155],["faucetcrypto.com",156],["mynewsmedia.in",157],["mynewshub.co",157],["techbigs.com",158],["kiktu.com",159],["technicalegy.com",160],["wallpaperaccess.com",161],["uniqueten.net",164],["ultraten.net",164],["elil.cc",165],["game-kentang.blogspot.com",166],["upfile.us",166],["mad4wheels.com",167],["moviesdaweb.blogspot.com",169],["dlsharefile.com",170],["eco-area.com",171],["safelink.rezkozpatch.xyz",[172,173]],["onlinecoursebay.com",174],["kazanclilink.com",175],["emulatorgames.net",177],["iptv4best.com",178],["leechall.com",179],["kpopstan.com",180],["ouo.io",181],["cpmlink.net",181],["short-url.link",182],["findicons.com",183],["nulleb.com",184],["bfas237blog.info",185],["dr-farfar.net",186],["saungfirmware.id",187],["goossh.com",188],["onlinefreecourse.net",189],["site.dz4win.com",190],["thingiverse.com",191],["linkerload.com",192],["ockles.com",192],["ljutkeunvpn.blogspot.com",192],["mobilelegends.shop",192],["linksaya.com",193],["phpscripttr.com",194],["essek.gen.tr",194],["indir.turkceyama.net",194],["clicads.fr",194],["mazakony.net",194],["5mod-file.ru",195],["genlink.cc",196],["apkprofree.com",197],["zedge.net",198],["hakdisk.ru",199],["diskapk.ru",199],["softwaresde.com",200],["tr.link",201],["ds2play.com",203],["doods.pro",203],["dooood.com",203],["dood.yt",203],["dood.re",203],["dood.wf",203],["dood.la",203],["dood.pm",203],["dood.so",203],["dood.to",203],["dood.watch",203],["dood.ws",203],["nightfallnews.com",204],["retrostic.com",205],["shiroyasha.me",206],["bolicheintercambios.net",207],["lg-firmwares.com",208],["sfirmware.com",208],["imgqec.online",209],["imgwbfh.online",209],["imgyer.store",209],["imgxuh.cfd",209],["imgngc.sbs",209],["imgezx.sbs",209],["imgxza.store",209],["imgwqr.online",209],["imagehaha.com",209],["imgpukrr.site",209],["imagent.buzz",209],["imagepuitr.buzz",209],["imgblaze.net",209],["imgkorle.buzz",209],["imgkaka.xyz",209],["pixsera.net",209],["imgfrost.net",209],["imgair.net",209],["wallpaperplay.com",210],["lnk.parts",211],["lnk.news",211],["sammobile.com",212],["bomurl.com",213],["go.geghost.com",214],["romhustler.org",215],["a2zupload.com",216],["bluemediaurls.lol",217],["bluemedialink.online",217],["dl.pcgamestorrents.org",217],["get-url.com",217]]);

const entitiesMap = new Map([["privatemoviez",2],["lootlinks",76],["ibomma",90],["animesanka",162],["akwam",202],["bluemediafile",217],["bluemediafiles",217]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function adjustSetInterval(
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
    try { adjustSetInterval(...argsList[i]); }
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

const targetWorld = 'MAIN';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_adjustSetInterval();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_adjustSetInterval = cloneInto([
            [ '(', uBOL_adjustSetInterval.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_adjustSetInterval);
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
    delete page.uBOL_adjustSetInterval;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
