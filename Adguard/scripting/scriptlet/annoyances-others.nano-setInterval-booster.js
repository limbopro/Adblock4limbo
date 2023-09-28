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

const argsList = [["Popup will close in","*","0.001"],["/wpsafe|wait|timer/","*","0.001"],["time--","*","0.001"],["count","*","0.001"],["update","*","0.001"],["counter","*","0.001"],["/wpsafe-|timeLeft/","*","0.001"],["wpsafe-","*","0.001"],["mdtimer","*","0.001"],["timer","","0.02"],["countdown","*","0.001"],["timer","*","0.001"],["counter"],["clearInterval","*","0.02"],["clearInterval","*","0.001"],["wait","*","0.02"],["count","*","0.02"],["counter","*","0.02"],["download","*","0.02"],["timeLeft","*","0.02"],["timeLeft","","0.02"],["/_0x|wpsafe-/","*","0.02"],["Download","*","0.02"],["counter--","*","0.02"],["count--","*","0.02"],["time","*","0.02"],["p--","","0.02"],["current()","*","0.02"],["wpsafe-","*","0.02"],["disabled","*","0.02"],["timePassed","*","0.02"],["countdown","*","0.02"],["/Seconds|download/","*","0.02"],["download_progress","*","0.02"],["count","1600","0.02"],["downloadButton","*","0.02"],["waitTime","*","0.02"],["timer","*","0.02"],["timeSec--","*","0.02"],["_0x","*","0.02"],["wpsafe-generate","*","0.02"],["document.hidden","*","0.02"],["#mdtimer","","0.02"],["updatePercentage","*","0.02"],["timePassed","","0.02"],["DOWNLOAD","*","0.02"],["Number","","0.02"],["/counter|wait/","*","0.02"],["get-link","*","0.02"],["cont","*","0.02"],[",dataType:_","1000","0.02"],["/wpsafe|count/","*","0.02"],["downloadToken","*","0.02"],["/timeLeft|wpsafe-/","*","0.02"],["cnDownloadBtn","*","0.02"],["download_link","*","0.02"],["secondsleft","*","0.02"],["countdown","","0.02"],["yuidea-","*","0.02"],["timer--","*","0.02"],["success","","0.02"],["/verify_text|isCompleted/","*","0.02"],["#timer","","0.02"],["countdownwrapper","","0.02"],["timeleft","*","0.02"],["contador","*","0.02"],["Your Link","","0.02"],["count","","0.02"],["/download|Please/","","0.02"],["downloadButton","","0.02"],["window.location.href= atob(","1000","0.02"],[".show_download_links","","0.02"],["download-btn","","0.02"],["updatePercentage","100","0.02"],["decodeURIComponent(link)","","0.02"],["/count-|-wait/","*","0.02"],["waktu--","","0.02"],[".download","","0.02"],["/base-timer-label|waktu--/","","0.02"],["curCount","","0.02"],["Please wait","","0.02"],["mdtimer","","0.02"],["gotolink","*","0.02"],["seconds--","*","0.02"],["claim_button","*","0.02"],["/Please Wait|Generating Links/","*","0.02"],["#second","","0.02"],["#countdown","","0.02"],["progressbar","30","0.02"],["#upbtn","","0.02"],["skip-btn","*","0.02"],["tp-","*","0.02"],["downloadTimer","","0.02"],["/Please Wait|Go to download/","","0.02"],["counter","","0.02"],["/counter--|downloadButton/","","0.02"],["location","","0.02"],["/wpsafe|wait/","*","0.001"],["counter--","","0.02"],["pleasewait","","0.02"],["bb_download_delay","","0.02"],["0x","","0.02"],["timeCount","*","0.2"],["counter","2000","0.02"],["downloadLinkButton","*","0.02"],["startChecking","*","0.02"],["timer","1000","0.02"],["timeleft","","0.02"],["timeSec--","*","0.001"],["show_download_links","","0.02"],["REDIRECTING","*","0.02"],["ct","1000","0.02"],["sec--","","0.02"],["count--","","0.02"],["sec","","0.02"],["wpsafe-","","0.02"],["wpsafe-","2000","0.02"],["wpsafe-","1500","0.02"],["get-link","","0.02"],["download","2000","0.02"],["timer","1500","0.02"],["timer","2000","0.02"],["Link","550","0.02"],["#proceed","","0.02"],["counter","1800","0.02"],["downloadButton","1500","0.02"],["sp-count-down","","0.02"],["gotolink","","0.02"],["btngetlink","30","0.02"],["btn","","0.02"],["sec--","","0.001"],["/show_download_links|downloadTimer/","","0.02"],["timeinterval","","0.02"],["countDown","1150","0.5"],["makingdifferenttimer","50","0.02"],["Link()","","0.02"],["time","","0.02"],["time","2500","0.02"],["freeRemind","","0.02"],["contador","","0.02"],["contador--","","0.02"],["counter--","1300","0.02"],["seconds","","0.02"],["downloadButton","1000","0.02"],["counter","1000","0.02"],["wpsafe-generate","","0.02"],["timerText","","0.02"],["#counter","","0.02"],["counter","1500","0.02"],["download-count-down","","0.02"],["runTimer","","0.02"],["[0x","","0.02"],["#download","","0.02"],["percentVal","30","0.02"],["wpsafe-generate","1000","0.02"],["wpsafe","","0.02"],["timer","1000","0.6"],["","1000","0.05"],["second--","","0.02"],["#bt","","0.02"],["counter--","100","0.02"],["#Download-Card","","0.02"],[".stop()","","0.02"],["Link will appear","510","0.02"],["Link will appear","1010","0.02"],["countdown","2000","0.02"],["sayimiBaslat","","0.02"],["wpsafe-link","2000","0.02"],["#eg-timer","","0.3"],["#CountDown","","0.02"],["dllink","","0.02"],["time--","","0.02"],["stop()","","0.02"],["second","1000","0.02"],["wait_seconds","","0.02"],["download-countdown","","0.02"],["current_progress","2000","0.02"],["display()","","0.02"],["get_link","","0.02"],["goToLink","2200","0.02"],[".countdown","2000","0.02"],["urll","800","0.02"],["Downloading","","0.02"],["linkDL","","0.02"],["downloadButton","2400","0.02"],["#pleasewait","","0.02"],[".fcounter span","","0.02"],["real-link","","0.02"],[".wpapks-download-link-wrapper","","0.02"],["(i-1)","","0.02"],["fcounter","","0.02"],["show_ag","","0.02"],["timer","700","0.02"],["clock()","1000","0.02"],[".countdown","","0.02"],["secondsLeft","","0.02"],["timeLeft--","","0.02"],["/_0x[\\s\\S]*?decodeURIComponent/","","0.02"],["count-","","0.02"],["#download-popup","","0.02"],[".timer","","0.02"],["#download_menu","","0.02"],["r--","","0.02"],["showDownloadButton","","0.02"],["download_link","","0.02"],["onLoop","","0.02"],["timer.remove","","0.02"],["download","","0.02"],["i--","","0.02"]];

const hostnamesMap = new Map([["djrudrabasti.in",0],["165.22.246.130",1],["vstdrive.in",2],["zeroupload.com",3],["bhojpuritop.in",3],["amritadrino.com",[3,40]],["decrypt.day",4],["alpinecorporate.com",5],["theprodkeys.com",6],["forasm.com",7],["heroxcheat.cloud",8],["bloginkz.com",9],["go.freetrx.fun",9],["wpking.in",9],["yifysubtitles.me",9],["michaelemad.com",9],["shtms.co",9],["gitizle.vip",9],["ay.live",9],["techrfour.com",9],["theicongenerator.com",9],["multilinkfz.xyz",9],["yindex.xyz",9],["unityassetcollection.com",9],["earningradar.com",9],["findi.pro",9],["uzunversiyon.xyz",9],["direkizle.xyz",9],["tamindir.mobi",9],["gitlink.pro",9],["aylink.co",9],["moretvtime.com",9],["urlpay.net",9],["claim4.fun",9],["plog.com.br",10],["wellness4live.com",11],["insuranceinfos.in",11],["finsurances.co",12],["hotmediahub.com",[13,14]],["terabox.fun",13],["covemarkets.com",15],["finclub.in",16],["financeyogi.net",16],["trangchu.news",16],["downfile.site",16],["player.pelisgratishd.io",16],["doibihar.org",16],["educationgyani.com",16],["ffworld.xyz",16],["gawbne.com",16],["forex-trnd.com",[16,42]],["forex-golds.com",16],["cravesandflames.com",17],["novelsapps.com",17],["codesnse.com",17],["speedtorrent.ru",17],["listas.pro",17],["forexit.io",17],["healthy4pepole.com",[17,92,94]],["sitecuatui.xyz",17],["haonguyen.top",17],["androjungle.com",18],["getmodsapk.com",18],["mixrootmods.com",19],["consoleroms.com",19],["romspedia.com",19],["edummm.xyz",19],["shortlinks.tech",20],["dramaworldhd.co",20],["bitefaucet.com",20],["filmypoints.in",[21,28]],["vinstartheme.com",22],["instamod.net",22],["jenismac.com",23],["unityassets4free.com",23],["spacebin.site",23],["freemodapks.com",23],["player.repelis24.rs",24],["makimbo.xyz",25],["dyp.li",26],["linku.to",27],["oneslidephotography.com",28],["apasih.my.id",28],["financekami.com",28],["bico8.com",28],["techyinfo.in",28],["smallinfo.in",28],["techymedies.com",28],["disheye.com",28],["ufacw.com",28],["googledrivelinks.com",28],["technicalatg.com",[28,37]],["7apple.net",28],["arhplyrics.in",28],["netfile.cc",28],["jardima.com",28],["courseforfree.com",28],["tutorial.siberuang.com",28],["segurosdevida.site",28],["surl.li",29],["bankvacency.com",30],["indilinks.xyz",31],["discordbotlist.com",31],["maxsilo.in",32],["starfiles.co",33],["nguyenvanbao.com",34],["androidecuatoriano.xyz",35],["sinonimos.de",36],["atlai.club",36],["blogtechh.com",38],["vavada5com.com",38],["financerites.in",38],["financerites.com",38],["diudemy.com",39],["techboyz.xyz",39],["adslink.pw",39],["3dzip.org",41],["3rabsnews.com",42],["mobileprice.site",42],["bestmobilenew.com",42],["linkjust1.com",42],["vidtome.stream",42],["ta2deem7arbya.com",[43,81]],["eda-ah.com",[43,81]],["modzilla.in",44],["garutpos.com",44],["vrcmods.com",44],["garutexpress.id",44],["getfreecourses.co",45],["dosya.hizliresim.com",46],["vebma.com",47],["pinloker.com",47],["sekilastekno.com",47],["blogmado.com",48],["suaurl.com",49],["webhostingpost.com",50],["wikitraveltips.com",51],["naukrilelo.in",51],["fikper.com",52],["freecoursesonline.me",53],["codingnepalweb.com",[54,141]],["misirtune.blogspot.com",55],["userload.co",56],["dizimini.com",57],["mohammedkhc.com",57],["trendyoum.com",57],["dl.indexmovies.xyz",57],["cheatsquad.gg",57],["mcpedl.com",57],["filese.me",57],["linkslo.com",57],["c1ne.co",57],["pearos.xyz",57],["moddedguru.com",57],["py.md",57],["abhaydigitalmarketer.com",57],["bestshort.xyz",57],["moaplos.com",57],["nullslide.com",57],["mage.si",57],["embed.m3u-cdn.live",57],["embed.tvcdn.live",57],["mastercoria.com",57],["gaminplay.com",[58,97,117]],["gamelopte.com",58],["insurglobal.xyz",58],["sevenjournals.com",58],["digworm.io",59],["br0wsers.com",[60,191]],["hashhackers.com",61],["katdrive.net",61],["newsongs.co.in",61],["altblogger.net",62],["cashearn.cc",62],["subscene.vip",62],["safelink.omglyrics.com",62],["4download.net",62],["acortar.info",62],["kotp1000000.xyz",62],["blog.donia-tech.net",62],["anomize.xyz",62],["boardgamesonline.net",62],["freeudemycourse.com",63],["modshost.net",64],["coincity.in",64],["djxmaza.in",64],["examtadka.com",64],["proviralhost.com",64],["urbharat.xyz",64],["codenova-center.web.app",65],["minecraftalpha.net",66],["aeromods.app",67],["whatsaero.com",67],["pahe.win",67],["financeflix.in",67],["technoflip.in",67],["studyranks.in",67],["flightsim.to",67],["hikarinoakari.com",67],["hikarinoakariost.info",67],["recipesdelite.com",68],["edumaz.com",69],["blisseyhusband.in",69],["bingotingo.com",69],["compressware.in",69],["geektopia.info",69],["freecoursewebsite.com",69],["dosyayukle.biz",69],["freetutorialsus.com",69],["apkmos.com",69],["sfile.mobi",69],["notipostingt.com",70],["cmacked.com",71],["movieflixpro.com",71],["gocmod.com",72],["speedynews.xyz",73],["xmod.in",73],["tecmundo.net",73],["crazyblog.in",[73,115,116]],["studyuo.com",[73,115,116]],["sbkaise.in",73],["janusnotes.com",73],["anime-sanka.com",74],["kiemlua.com",[75,103,148]],["world-trips.net",[75,107]],["newforex.online",[75,103]],["pes-patches.com",76],["data.morsodifame.com",76],["ifile.cc",76],["filemoon.sx",77],["truongblogger.top",78],["koyi.pub",79],["thizissam.in",[80,98]],["alphaantileak.net",80],["o-pro.online",81],["mazen-ve.com",81],["animeuploader.com",81],["konstantinova.net",81],["ontools.net",82],["teknopaid.xyz",82],["asdfiles.com",83],["11bit.co.in",84],["spantechie.com",85],["paste1s.com",86],["note1s.com",86],["easylinkref.com",86],["redirect.dafontvn.com",[87,88]],["samapkstore.com",[87,88]],["andronews18.blogspot.com",[87,88]],["ph.tpaste.net",[87,88]],["sdetectives.id",87],["apps2app.com",87],["pro-bangla.com",87],["cheatermad.com",89],["streamcheck.link",90],["tinyurl.so",90],["tinyurl.is",90],["usanewstoday.club",91],["earnme.club",91],["top1iq.com",92],["sama-pro.com",92],["7misr4day.com",[92,112]],["coursefreedl.com",92],["apkmaza.net",92],["jpopsingles.eu",92],["gplinks.co",92],["mobiget.net",92],["newzflair.com",93],["newzmagic.com",93],["adlice.com",94],["yalla-shoot-now.us",94],["forexeen.us",94],["health-and.me",94],["wondervelocity.com",94],["bluetechno.net",94],["world2our.com",94],["mobi2c.com",[94,103]],["mywatchseries.fun",94],["telepisodes.org",94],["kingtalks.net",94],["maxurlz.com",94],["allcryptoz.net",94],["topcryptoz.net",94],["thaitrieuvi.live",94],["freewebcart.com",94],["safe.kangkimin.com",94],["maxservicesi.com",94],["techhelpbd.com",95],["egyfalcons.com",96],["gktech.uk",97],["worldmak.com",97],["ftuapps.dev",97],["dl.tech-story.net",97],["themorningtribune.com",97],["veganho.co",97],["veganal.co",97],["mosqam.com",97],["bimo-cash.readi.online",97],["blog.textpage.xyz",97],["claimlite.club",97],["bitcomarket.net",97],["1apple.xyz",97],["mcrypto.club",[97,145]],["gamepure.in",97],["veganab.co",97],["apkmaven.io",97],["choiceappstore.xyz",97],["pn.cgchotbox.com",97],["worldappsstore.xyz",97],["gifans.com",97],["iptvjournal.com",97],["kienthucrangmieng.com",97],["coin-free.com",97],["moddingzone.in",97],["insurance-space.xyz",97],["blognews.in",97],["noithatmyphu.vn",97],["dulichkhanhhoa.net",97],["therootdroid.com",97],["filessrc.com",98],["srcimdb.com",98],["udemycourses.me",98],["eu.tapchipi.com",98],["short.ctvb1.info",98],["citychilli.com",98],["psdly.com",98],["desitvshows.xyz",98],["katmoviehd4.com",98],["download.modsofapk.com",98],["infopedia24.com",98],["linkdecode.com",98],["short-ly.co",99],["upshrink.com",99],["jojo-themes.net",100],["diglink.blogspot.com",101],["th-world.com",101],["za.gl",102],["za.uy",102],["rezence.com",103],["techmody.io",[103,124]],["yoshare.net",103],["mikl4forex.com",[103,148]],["publicananker.com",[103,148]],["aemenstore.com",103],["cazzette.com",103],["truebrandy.com",103],["hookeaudio.com",103],["restorbio.com",103],["medcpu.com",103],["alocd.com",103],["forex-gold.net",[103,107]],["kingsleynyc.com",103],["lucidcam.com",103],["staaker.com",103],["byboe.com",103],["thegoneapp.com",103],["nousdecor.com",103],["alobuu.com",[103,148]],["rodjulian.com",[103,148]],["aloass.com",[103,148]],["taisv.com",[103,148]],["aloguy.com",[103,148]],["alohdd.com",[103,148]],["alogum.com",[103,148]],["alobyt.com",[103,148]],["aloboi.com",[103,148]],["uebnews.online",[103,148]],["aloegg.com",[103,148]],["alofps.com",[103,148]],["pennbookcenter.com",[103,148]],["samfirms.com",104],["appsmodz.com",105],["cararegistrasi.com",106],["healdad.com",107],["gamalk-sehetk.com",107],["yogablogfit.com",108],["vocalley.com",108],["howifx.com",108],["enit.in",108],["skincarie.com",108],["imperialstudy.com",108],["hamsterss.website",109],["apkmb.com",109],["boobychristmas.com",110],["ethereumfaucet.info",111],["tutcourse.com",112],["luckydice.net",112],["coinsearns.com",112],["gdfreak.xyz",112],["doctor-groups.com",112],["crypto-faucet.xyz",112],["mik4mob.com",112],["iklandb.com",112],["urapk.com",112],["dogemate.com",[112,159]],["shorteet.com",112],["earnbits.xyz",112],["bitearns.com",112],["girls-like.me",113],["sonixgvn.net",113],["runmods.com",113],["watchdoge.xyz",114],["informatikamu.id",[115,116]],["technicalatg.xyz",[115,116]],["taregna.com",[115,116]],["toolss.net",[115,116]],["tutsgalaxy.net",[115,116]],["otomi-games.com",[116,154]],["yifysub.net",118],["cdmstudy.site",119],["insurance.recipesdelite.com",119],["allbuzzin.com",[120,121]],["file.bospedia.com",122],["toptap.website",123],["adnit-tri.tk",123],["boomx5.com",123],["howtofree.org",125],["rethmic.com",126],["majidzhacker.com",[127,128]],["itscybertech.com",129],["gold-24.net",130],["3rabsports.com",130],["forexrw7.com",130],["fx-22.com",130],["forexmab.com",130],["forexwaw.club",130],["forex-articles.com",130],["linkjust.com",130],["forexlap.com",130],["shareappscrack.com",131],["oiipdf.com",132],["upstore.net",133],["subs4series.com",134],["gamingforecast.com",135],["icutlink.com",136],["android-apk.org",136],["semawur.com",136],["zegtrends.com",137],["littlebyte.net",138],["megadescargas.net",139],["blyts.net",139],["lawebdelprogramador.com",140],["win10.vn",142],["wildfaucets.ml",142],["faucet.cryptourl.net",142],["dogeatm.com",142],["claimbits.io",142],["i-bits.io",142],["diamondfaucet.space",142],["gobits.io",142],["russiacoin.xyz",142],["starsfaucet.com",142],["lionltcfaucet.xyz",142],["faucet.shorterall.com",142],["yellowfaucet.ovh",142],["bollypluse.in",143],["freecourseslab.com",144],["freetutorialseu.com",144],["informaxonline.com",[145,167]],["tipslearn.com",145],["androidnougatapk.com",145],["siberuang.com",145],["waaboom.com",145],["healthymaster.xyz",145],["bkksnews.xyz",145],["faucetcrypto.com",146],["techoow.com",147],["mynewsmedia.in",148],["mynewshub.co",148],["techbigs.com",149],["kiktu.com",150],["technicalegy.com",151],["wallpaperaccess.com",152],["uniqueten.net",155],["ultraten.net",155],["elil.cc",156],["game-kentang.blogspot.com",157],["upfile.us",157],["mad4wheels.com",158],["moviesdaweb.blogspot.com",160],["dlsharefile.com",161],["eco-area.com",162],["safelink.rezkozpatch.xyz",[163,164]],["onlinecoursebay.com",165],["kazanclilink.com",166],["emulatorgames.net",168],["iptv4best.com",169],["leechall.com",170],["kpopstan.com",171],["ouo.io",172],["cpmlink.net",172],["short-url.link",173],["findicons.com",174],["nulleb.com",175],["bfas237blog.info",176],["dr-farfar.net",177],["saungfirmware.id",178],["goossh.com",179],["onlinefreecourse.net",180],["site.dz4win.com",181],["thingiverse.com",182],["linkerload.com",183],["ockles.com",183],["ljutkeunvpn.blogspot.com",183],["mobilelegends.shop",183],["linksaya.com",184],["phpscripttr.com",185],["essek.gen.tr",185],["indir.turkceyama.net",185],["clicads.fr",185],["mazakony.net",185],["5mod-file.ru",186],["genlink.cc",187],["apkprofree.com",188],["zedge.net",189],["hakdisk.ru",190],["diskapk.ru",190],["softwaresde.com",191],["tr.link",192],["doods.pro",194],["dooood.com",194],["dood.yt",194],["dood.re",194],["dood.wf",194],["dood.la",194],["dood.pm",194],["dood.so",194],["dood.to",194],["dood.watch",194],["dood.ws",194],["nightfallnews.com",195],["retrostic.com",196],["shiroyasha.me",197],["bolicheintercambios.net",198],["lg-firmwares.com",199],["sfirmware.com",199],["imgqec.online",200],["imgwbfh.online",200],["imgyer.store",200],["imgxuh.cfd",200],["imgngc.sbs",200],["imgezx.sbs",200],["imgxza.store",200],["imgwqr.online",200],["imagehaha.com",200],["imgpukrr.site",200],["imagent.buzz",200],["imagepuitr.buzz",200],["imgblaze.net",200],["imgkorle.buzz",200],["imgkaka.xyz",200],["pixsera.net",200],["imgfrost.net",200],["imgair.net",200],["wallpaperplay.com",201],["lnk.parts",202],["lnk.news",202],["sammobile.com",203],["bomurl.com",204],["go.geghost.com",205],["romhustler.org",206],["a2zupload.com",207],["dl.pcgamestorrents.org",208],["get-url.com",208]]);

const entitiesMap = new Map([["lootlinks",67],["ibomma",81],["animesanka",153],["akwam",193],["bluemediafile",208],["bluemediafiles",208]]);

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
