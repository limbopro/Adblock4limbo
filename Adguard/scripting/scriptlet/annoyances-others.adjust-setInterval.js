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
const uBOL_adjustSetInterval = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["innerHTML=`Wait"],["/wpsafe|wait|timer/","*","0.001"],[".html()","*","0.001"],["return e-1","*","0.001"],["generateDownloadLink","*","0.001"],["countDown()","*","0.28"],["timer","*","0.001"],["/proceed|mdtimer/","*","0.001"],["time","*","0.02"],["Popup will close in","*","0.001"],["time--","*","0.001"],["count","*","0.001"],["update","*","0.001"],["counter","*","0.001"],["/wpsafe-|timeLeft/","*","0.001"],["wpsafe-","*","0.001"],["mdtimer","*","0.001"],["timer","","0.02"],["countdown","*","0.001"],["counter"],["clearInterval","*","0.02"],["clearInterval","*","0.001"],["wait","*","0.02"],["count","*","0.02"],["counter","*","0.02"],["download","*","0.02"],["timeLeft","*","0.02"],["timeLeft","","0.02"],["/_0x|wpsafe-/","*","0.02"],["Download","*","0.02"],["counter--","*","0.02"],["count--","*","0.02"],["p--","","0.02"],["current()","*","0.02"],["wpsafe-","*","0.02"],["disabled","*","0.02"],["timePassed","*","0.02"],["countdown","*","0.02"],["/Seconds|download/","*","0.02"],["download_progress","*","0.02"],["count","1600","0.02"],["downloadButton","*","0.02"],["waitTime","*","0.02"],["timer","*","0.02"],["timeSec--","*","0.02"],["_0x","*","0.02"],["wpsafe-generate","*","0.02"],["document.hidden","*","0.02"],["#mdtimer","","0.02"],["updatePercentage","*","0.02"],["timePassed","","0.02"],["DOWNLOAD","*","0.02"],["Number","","0.02"],["/counter|wait/","*","0.02"],["get-link","*","0.02"],["cont","*","0.02"],[",dataType:_","1000","0.02"],["/wpsafe|count/","*","0.02"],["downloadToken","*","0.02"],["/timeLeft|wpsafe-/","*","0.02"],["cnDownloadBtn","*","0.02"],["download_link","*","0.02"],["secondsleft","*","0.02"],["countdown","","0.02"],["yuidea-","*","0.02"],["timer--","*","0.02"],["success","","0.02"],["/verify_text|isCompleted/","*","0.02"],["#timer","","0.02"],["countdownwrapper","","0.02"],["timeleft","*","0.02"],["contador","*","0.02"],["Your Link","","0.02"],["count","","0.02"],["/download|Please/","","0.02"],["downloadButton","","0.02"],["window.location.href= atob(","1000","0.02"],[".show_download_links","","0.02"],["download-btn","","0.02"],["updatePercentage","100","0.02"],["decodeURIComponent(link)","","0.02"],["/count-|-wait/","*","0.02"],["waktu--","","0.02"],[".download","","0.02"],["/base-timer-label|waktu--/","","0.02"],["curCount","","0.02"],["Please wait","","0.02"],["mdtimer","","0.02"],["gotolink","*","0.02"],["seconds--","*","0.02"],["claim_button","*","0.02"],["/Please Wait|Generating Links/","*","0.02"],["#second","","0.02"],["#countdown","","0.02"],["progressbar","30","0.02"],["#upbtn","","0.02"],["skip-btn","*","0.02"],["tp-","*","0.02"],["downloadTimer","","0.02"],["/Please Wait|Go to download/","","0.02"],["counter","","0.02"],["/counter--|downloadButton/","","0.02"],["location","","0.02"],["myCounter","*","0.001"],["/wpsafe|wait/","*","0.001"],["counter--","","0.02"],["pleasewait","","0.02"],["bb_download_delay","","0.02"],["0x","","0.02"],["timeCount","*","0.2"],["counter","2000","0.02"],["downloadLinkButton","*","0.02"],["startChecking","*","0.02"],["timer","1000","0.02"],["timeleft","","0.02"],["timeSec--","*","0.001"],["show_download_links","","0.02"],["REDIRECTING","*","0.02"],["ct","1000","0.02"],["sec--","","0.02"],["count--","","0.02"],["sec","","0.02"],["wpsafe-","","0.02"],["wpsafe-","2000","0.02"],["wpsafe-","1500","0.02"],["get-link","","0.02"],["download","2000","0.02"],["timer","1500","0.02"],["timer","2000","0.02"],["Link","550","0.02"],["#proceed","","0.02"],["counter","1800","0.02"],["downloadButton","1500","0.02"],["sp-count-down","","0.02"],["gotolink","","0.02"],["btngetlink","30","0.02"],["btn","","0.02"],["sec--","","0.001"],["/show_download_links|downloadTimer/","","0.02"],["timeinterval","","0.02"],["countDown","1150","0.5"],["makingdifferenttimer","50","0.02"],["Link()","","0.02"],["time","","0.02"],["time","2500","0.02"],["freeRemind","","0.02"],["contador","","0.02"],["contador--","","0.02"],["counter--","1300","0.02"],["seconds","","0.02"],["downloadButton","1000","0.02"],["counter","1000","0.02"],["wpsafe-generate","","0.02"],["timerText","","0.02"],["#counter","","0.02"],["counter","1500","0.02"],["download-count-down","","0.02"],["runTimer","","0.02"],["[0x","","0.02"],["#download","","0.02"],["percentVal","30","0.02"],["wpsafe-generate","1000","0.02"],["wpsafe","","0.02"],["timer","1000","0.6"],["","1000","0.05"],["second--","","0.02"],["#bt","","0.02"],["counter--","100","0.02"],["#Download-Card","","0.02"],[".stop()","","0.02"],["Link will appear","510","0.02"],["Link will appear","1010","0.02"],["countdown","2000","0.02"],["sayimiBaslat","","0.02"],["wpsafe-link","2000","0.02"],["#eg-timer","","0.3"],["#CountDown","","0.02"],["dllink","","0.02"],["time--","","0.02"],["stop()","","0.02"],["second","1000","0.02"],["wait_seconds","","0.02"],["download-countdown","","0.02"],["current_progress","2000","0.02"],["display()","","0.02"],["get_link","","0.02"],["goToLink","2200","0.02"],[".countdown","2000","0.02"],["urll","800","0.02"],["Downloading","","0.02"],["linkDL","","0.02"],["downloadButton","2400","0.02"],["#pleasewait","","0.02"],[".fcounter span","","0.02"],["real-link","","0.02"],[".wpapks-download-link-wrapper","","0.02"],["(i-1)","","0.02"],["fcounter","","0.02"],["show_ag","","0.02"],["timer","700","0.02"],["clock()","1000","0.02"],[".countdown","","0.02"],["secondsLeft","","0.02"],["timeLeft--","","0.02"],["/_0x[\\s\\S]*?decodeURIComponent/","","0.02"],["count-","","0.02"],["#download-popup","","0.02"],[".timer","","0.02"],["#download_menu","","0.02"],["r--","","0.02"],["showDownloadButton","","0.02"],["download_link","","0.02"],["onLoop","","0.02"],["timer.remove","","0.02"],["download","","0.02"],["i--","","0.02"]];

const hostnamesMap = new Map([["tutwuri.id",0],["mbjremix.com",1],["165.22.246.130",1],["cloudpaten.pro",2],["mangoai.co",3],["uptoearn.xyz",4],["uploadhaven.com",5],["linksae.com",6],["wellness4live.com",6],["insuranceinfos.in",6],["mamahawa.com",7],["10short.pro",7],["lk21static.xyz",8],["makimbo.xyz",8],["djrudrabasti.in",9],["vstdrive.in",10],["zeroupload.com",11],["bhojpuritop.in",11],["amritadrino.com",[11,46]],["decrypt.day",12],["alpinecorporate.com",13],["theprodkeys.com",14],["forasm.com",15],["heroxcheat.cloud",16],["bloginkz.com",17],["go.freetrx.fun",17],["wpking.in",17],["yifysubtitles.me",17],["michaelemad.com",17],["shtms.co",17],["gitizle.vip",17],["ay.live",17],["techrfour.com",17],["theicongenerator.com",17],["multilinkfz.xyz",17],["yindex.xyz",17],["unityassetcollection.com",17],["earningradar.com",17],["findi.pro",17],["uzunversiyon.xyz",17],["direkizle.xyz",17],["tamindir.mobi",17],["gitlink.pro",17],["aylink.co",17],["moretvtime.com",17],["urlpay.net",17],["claim4.fun",17],["plog.com.br",18],["finsurances.co",19],["hotmediahub.com",[20,21]],["terabox.fun",20],["covemarkets.com",22],["finclub.in",23],["financeyogi.net",23],["trangchu.news",23],["downfile.site",23],["player.pelisgratishd.io",23],["doibihar.org",23],["educationgyani.com",23],["ffworld.xyz",23],["gawbne.com",23],["forex-trnd.com",[23,48]],["forex-golds.com",23],["cravesandflames.com",24],["novelsapps.com",24],["codesnse.com",24],["speedtorrent.ru",24],["listas.pro",24],["forexit.io",24],["healthy4pepole.com",[24,98,100]],["sitecuatui.xyz",24],["haonguyen.top",24],["androjungle.com",25],["getmodsapk.com",25],["mixrootmods.com",26],["consoleroms.com",26],["romspedia.com",26],["edummm.xyz",26],["shortlinks.tech",27],["dramaworldhd.co",27],["bitefaucet.com",27],["filmypoints.in",[28,34]],["vinstartheme.com",29],["instamod.net",29],["jenismac.com",30],["unityassets4free.com",30],["spacebin.site",30],["freemodapks.com",30],["player.repelis24.rs",31],["dyp.li",32],["linku.to",33],["oneslidephotography.com",34],["apasih.my.id",34],["financekami.com",34],["bico8.com",34],["techyinfo.in",34],["smallinfo.in",34],["techymedies.com",34],["disheye.com",34],["ufacw.com",34],["googledrivelinks.com",34],["technicalatg.com",[34,43]],["7apple.net",34],["arhplyrics.in",34],["netfile.cc",34],["jardima.com",34],["courseforfree.com",34],["tutorial.siberuang.com",34],["segurosdevida.site",34],["surl.li",35],["bankvacency.com",36],["indilinks.xyz",37],["discordbotlist.com",37],["maxsilo.in",38],["starfiles.co",39],["nguyenvanbao.com",40],["androidecuatoriano.xyz",41],["sinonimos.de",42],["atlai.club",42],["blogtechh.com",44],["vavada5com.com",44],["financerites.in",44],["financerites.com",44],["diudemy.com",45],["techboyz.xyz",45],["adslink.pw",45],["3dzip.org",47],["3rabsnews.com",48],["mobileprice.site",48],["bestmobilenew.com",48],["linkjust1.com",48],["vidtome.stream",48],["ta2deem7arbya.com",[49,87]],["eda-ah.com",[49,87]],["modzilla.in",50],["garutpos.com",50],["vrcmods.com",50],["garutexpress.id",50],["getfreecourses.co",51],["dosya.hizliresim.com",52],["vebma.com",53],["pinloker.com",53],["sekilastekno.com",53],["blogmado.com",54],["suaurl.com",55],["webhostingpost.com",56],["wikitraveltips.com",57],["naukrilelo.in",57],["fikper.com",58],["freecoursesonline.me",59],["codingnepalweb.com",[60,148]],["misirtune.blogspot.com",61],["userload.co",62],["dizimini.com",63],["mohammedkhc.com",63],["trendyoum.com",63],["dl.indexmovies.xyz",63],["cheatsquad.gg",63],["mcpedl.com",63],["filese.me",63],["linkslo.com",63],["c1ne.co",63],["pearos.xyz",63],["moddedguru.com",63],["py.md",63],["abhaydigitalmarketer.com",63],["bestshort.xyz",63],["moaplos.com",63],["nullslide.com",63],["mage.si",63],["embed.m3u-cdn.live",63],["embed.tvcdn.live",63],["mastercoria.com",63],["gaminplay.com",[64,104,124]],["gamelopte.com",64],["insurglobal.xyz",64],["sevenjournals.com",64],["digworm.io",65],["br0wsers.com",[66,198]],["hashhackers.com",67],["katdrive.net",67],["newsongs.co.in",67],["altblogger.net",68],["cashearn.cc",68],["subscene.vip",68],["safelink.omglyrics.com",68],["4download.net",68],["acortar.info",68],["kotp1000000.xyz",68],["blog.donia-tech.net",68],["anomize.xyz",68],["boardgamesonline.net",68],["freeudemycourse.com",69],["modshost.net",70],["coincity.in",70],["djxmaza.in",70],["examtadka.com",70],["proviralhost.com",70],["urbharat.xyz",70],["codenova-center.web.app",71],["minecraftalpha.net",72],["aeromods.app",73],["whatsaero.com",73],["pahe.win",73],["financeflix.in",73],["technoflip.in",73],["studyranks.in",73],["flightsim.to",73],["hikarinoakari.com",73],["hikarinoakariost.info",73],["recipesdelite.com",74],["edumaz.com",75],["blisseyhusband.in",75],["bingotingo.com",75],["compressware.in",75],["geektopia.info",75],["freecoursewebsite.com",75],["dosyayukle.biz",75],["freetutorialsus.com",75],["apkmos.com",75],["sfile.mobi",75],["notipostingt.com",76],["cmacked.com",77],["movieflixpro.com",77],["gocmod.com",78],["speedynews.xyz",79],["xmod.in",79],["tecmundo.net",79],["crazyblog.in",[79,122,123]],["studyuo.com",[79,122,123]],["sbkaise.in",79],["janusnotes.com",79],["anime-sanka.com",80],["kiemlua.com",[81,110,155]],["world-trips.net",[81,114]],["newforex.online",[81,110]],["pes-patches.com",82],["data.morsodifame.com",82],["ifile.cc",82],["filemoon.sx",83],["truongblogger.top",84],["koyi.pub",85],["thizissam.in",[86,105]],["alphaantileak.net",86],["o-pro.online",87],["mazen-ve.com",87],["animeuploader.com",87],["konstantinova.net",87],["ontools.net",88],["teknopaid.xyz",88],["asdfiles.com",89],["11bit.co.in",90],["spantechie.com",91],["paste1s.com",92],["note1s.com",92],["easylinkref.com",92],["redirect.dafontvn.com",[93,94]],["samapkstore.com",[93,94]],["andronews18.blogspot.com",[93,94]],["ph.tpaste.net",[93,94]],["sdetectives.id",93],["apps2app.com",93],["pro-bangla.com",93],["cheatermad.com",95],["streamcheck.link",96],["tinyurl.so",96],["tinyurl.is",96],["usanewstoday.club",97],["earnme.club",97],["top1iq.com",98],["sama-pro.com",98],["7misr4day.com",[98,119]],["coursefreedl.com",98],["apkmaza.net",98],["jpopsingles.eu",98],["gplinks.co",98],["mobiget.net",98],["newzflair.com",99],["newzmagic.com",99],["adlice.com",100],["yalla-shoot-now.us",100],["forexeen.us",100],["health-and.me",100],["wondervelocity.com",100],["bluetechno.net",100],["world2our.com",100],["mobi2c.com",[100,110]],["mywatchseries.fun",100],["telepisodes.org",100],["kingtalks.net",100],["maxurlz.com",100],["allcryptoz.net",100],["topcryptoz.net",100],["thaitrieuvi.live",100],["freewebcart.com",100],["safe.kangkimin.com",100],["maxservicesi.com",100],["techhelpbd.com",101],["egyfalcons.com",102],["premads.com",103],["infortechno.com",104],["getintoway.com",104],["gktech.uk",104],["worldmak.com",104],["ftuapps.dev",104],["dl.tech-story.net",104],["themorningtribune.com",104],["veganho.co",104],["veganal.co",104],["mosqam.com",104],["bimo-cash.readi.online",104],["blog.textpage.xyz",104],["claimlite.club",104],["bitcomarket.net",104],["1apple.xyz",104],["mcrypto.club",[104,152]],["gamepure.in",104],["veganab.co",104],["apkmaven.io",104],["choiceappstore.xyz",104],["pn.cgchotbox.com",104],["worldappsstore.xyz",104],["gifans.com",104],["iptvjournal.com",104],["kienthucrangmieng.com",104],["coin-free.com",104],["moddingzone.in",104],["insurance-space.xyz",104],["blognews.in",104],["noithatmyphu.vn",104],["dulichkhanhhoa.net",104],["therootdroid.com",104],["filessrc.com",105],["srcimdb.com",105],["udemycourses.me",105],["eu.tapchipi.com",105],["short.ctvb1.info",105],["citychilli.com",105],["psdly.com",105],["desitvshows.xyz",105],["katmoviehd4.com",105],["download.modsofapk.com",105],["infopedia24.com",105],["linkdecode.com",105],["short-ly.co",106],["upshrink.com",106],["jojo-themes.net",107],["diglink.blogspot.com",108],["th-world.com",108],["za.gl",109],["za.uy",109],["rezence.com",110],["techmody.io",[110,131]],["yoshare.net",110],["mikl4forex.com",[110,155]],["publicananker.com",[110,155]],["aemenstore.com",110],["cazzette.com",110],["truebrandy.com",110],["hookeaudio.com",110],["restorbio.com",110],["medcpu.com",110],["alocd.com",110],["forex-gold.net",[110,114]],["kingsleynyc.com",110],["lucidcam.com",110],["staaker.com",110],["byboe.com",110],["thegoneapp.com",110],["nousdecor.com",110],["alobuu.com",[110,155]],["rodjulian.com",[110,155]],["aloass.com",[110,155]],["taisv.com",[110,155]],["aloguy.com",[110,155]],["alohdd.com",[110,155]],["alogum.com",[110,155]],["alobyt.com",[110,155]],["aloboi.com",[110,155]],["uebnews.online",[110,155]],["aloegg.com",[110,155]],["alofps.com",[110,155]],["pennbookcenter.com",[110,155]],["samfirms.com",111],["appsmodz.com",112],["cararegistrasi.com",113],["healdad.com",114],["gamalk-sehetk.com",114],["yogablogfit.com",115],["vocalley.com",115],["howifx.com",115],["enit.in",115],["skincarie.com",115],["imperialstudy.com",115],["hamsterss.website",116],["apkmb.com",116],["boobychristmas.com",117],["ethereumfaucet.info",118],["tutcourse.com",119],["luckydice.net",119],["coinsearns.com",119],["gdfreak.xyz",119],["doctor-groups.com",119],["crypto-faucet.xyz",119],["mik4mob.com",119],["iklandb.com",119],["urapk.com",119],["dogemate.com",[119,166]],["shorteet.com",119],["earnbits.xyz",119],["bitearns.com",119],["girls-like.me",120],["sonixgvn.net",120],["runmods.com",120],["watchdoge.xyz",121],["informatikamu.id",[122,123]],["technicalatg.xyz",[122,123]],["taregna.com",[122,123]],["toolss.net",[122,123]],["tutsgalaxy.net",[122,123]],["otomi-games.com",[123,161]],["yifysub.net",125],["cdmstudy.site",126],["insurance.recipesdelite.com",126],["allbuzzin.com",[127,128]],["file.bospedia.com",129],["toptap.website",130],["adnit-tri.tk",130],["boomx5.com",130],["howtofree.org",132],["rethmic.com",133],["majidzhacker.com",[134,135]],["itscybertech.com",136],["gold-24.net",137],["3rabsports.com",137],["forexrw7.com",137],["fx-22.com",137],["forexmab.com",137],["forexwaw.club",137],["forex-articles.com",137],["linkjust.com",137],["forexlap.com",137],["shareappscrack.com",138],["oiipdf.com",139],["upstore.net",140],["subs4series.com",141],["gamingforecast.com",142],["icutlink.com",143],["android-apk.org",143],["semawur.com",143],["zegtrends.com",144],["littlebyte.net",145],["megadescargas.net",146],["blyts.net",146],["lawebdelprogramador.com",147],["win10.vn",149],["wildfaucets.ml",149],["faucet.cryptourl.net",149],["dogeatm.com",149],["claimbits.io",149],["i-bits.io",149],["diamondfaucet.space",149],["gobits.io",149],["russiacoin.xyz",149],["starsfaucet.com",149],["lionltcfaucet.xyz",149],["faucet.shorterall.com",149],["yellowfaucet.ovh",149],["bollypluse.in",150],["freecourseslab.com",151],["freetutorialseu.com",151],["informaxonline.com",[152,174]],["tipslearn.com",152],["androidnougatapk.com",152],["siberuang.com",152],["waaboom.com",152],["healthymaster.xyz",152],["bkksnews.xyz",152],["faucetcrypto.com",153],["techoow.com",154],["mynewsmedia.in",155],["mynewshub.co",155],["techbigs.com",156],["kiktu.com",157],["technicalegy.com",158],["wallpaperaccess.com",159],["uniqueten.net",162],["ultraten.net",162],["elil.cc",163],["game-kentang.blogspot.com",164],["upfile.us",164],["mad4wheels.com",165],["moviesdaweb.blogspot.com",167],["dlsharefile.com",168],["eco-area.com",169],["safelink.rezkozpatch.xyz",[170,171]],["onlinecoursebay.com",172],["kazanclilink.com",173],["emulatorgames.net",175],["iptv4best.com",176],["leechall.com",177],["kpopstan.com",178],["ouo.io",179],["cpmlink.net",179],["short-url.link",180],["findicons.com",181],["nulleb.com",182],["bfas237blog.info",183],["dr-farfar.net",184],["saungfirmware.id",185],["goossh.com",186],["onlinefreecourse.net",187],["site.dz4win.com",188],["thingiverse.com",189],["linkerload.com",190],["ockles.com",190],["ljutkeunvpn.blogspot.com",190],["mobilelegends.shop",190],["linksaya.com",191],["phpscripttr.com",192],["essek.gen.tr",192],["indir.turkceyama.net",192],["clicads.fr",192],["mazakony.net",192],["5mod-file.ru",193],["genlink.cc",194],["apkprofree.com",195],["zedge.net",196],["hakdisk.ru",197],["diskapk.ru",197],["softwaresde.com",198],["tr.link",199],["ds2play.com",201],["doods.pro",201],["dooood.com",201],["dood.yt",201],["dood.re",201],["dood.wf",201],["dood.la",201],["dood.pm",201],["dood.so",201],["dood.to",201],["dood.watch",201],["dood.ws",201],["nightfallnews.com",202],["retrostic.com",203],["shiroyasha.me",204],["bolicheintercambios.net",205],["lg-firmwares.com",206],["sfirmware.com",206],["imgqec.online",207],["imgwbfh.online",207],["imgyer.store",207],["imgxuh.cfd",207],["imgngc.sbs",207],["imgezx.sbs",207],["imgxza.store",207],["imgwqr.online",207],["imagehaha.com",207],["imgpukrr.site",207],["imagent.buzz",207],["imagepuitr.buzz",207],["imgblaze.net",207],["imgkorle.buzz",207],["imgkaka.xyz",207],["pixsera.net",207],["imgfrost.net",207],["imgair.net",207],["wallpaperplay.com",208],["lnk.parts",209],["lnk.news",209],["sammobile.com",210],["bomurl.com",211],["go.geghost.com",212],["romhustler.org",213],["a2zupload.com",214],["dl.pcgamestorrents.org",215],["get-url.com",215]]);

const entitiesMap = new Map([["lootlinks",73],["ibomma",87],["animesanka",160],["akwam",200],["bluemediafile",215],["bluemediafiles",215]]);

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
