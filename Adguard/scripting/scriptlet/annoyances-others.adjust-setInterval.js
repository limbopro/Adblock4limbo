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

const argsList = [["countDown()","*","0.28"],["timer","*","0.001"],["/proceed|mdtimer/","*","0.001"],["time","*","0.02"],["Popup will close in","*","0.001"],["/wpsafe|wait|timer/","*","0.001"],["time--","*","0.001"],["count","*","0.001"],["update","*","0.001"],["counter","*","0.001"],["/wpsafe-|timeLeft/","*","0.001"],["wpsafe-","*","0.001"],["mdtimer","*","0.001"],["timer","","0.02"],["countdown","*","0.001"],["counter"],["clearInterval","*","0.02"],["clearInterval","*","0.001"],["wait","*","0.02"],["count","*","0.02"],["counter","*","0.02"],["download","*","0.02"],["timeLeft","*","0.02"],["timeLeft","","0.02"],["/_0x|wpsafe-/","*","0.02"],["Download","*","0.02"],["counter--","*","0.02"],["count--","*","0.02"],["p--","","0.02"],["current()","*","0.02"],["wpsafe-","*","0.02"],["disabled","*","0.02"],["timePassed","*","0.02"],["countdown","*","0.02"],["/Seconds|download/","*","0.02"],["download_progress","*","0.02"],["count","1600","0.02"],["downloadButton","*","0.02"],["waitTime","*","0.02"],["timer","*","0.02"],["timeSec--","*","0.02"],["_0x","*","0.02"],["wpsafe-generate","*","0.02"],["document.hidden","*","0.02"],["#mdtimer","","0.02"],["updatePercentage","*","0.02"],["timePassed","","0.02"],["DOWNLOAD","*","0.02"],["Number","","0.02"],["/counter|wait/","*","0.02"],["get-link","*","0.02"],["cont","*","0.02"],[",dataType:_","1000","0.02"],["/wpsafe|count/","*","0.02"],["downloadToken","*","0.02"],["/timeLeft|wpsafe-/","*","0.02"],["cnDownloadBtn","*","0.02"],["download_link","*","0.02"],["secondsleft","*","0.02"],["countdown","","0.02"],["yuidea-","*","0.02"],["timer--","*","0.02"],["success","","0.02"],["/verify_text|isCompleted/","*","0.02"],["#timer","","0.02"],["countdownwrapper","","0.02"],["timeleft","*","0.02"],["contador","*","0.02"],["Your Link","","0.02"],["count","","0.02"],["/download|Please/","","0.02"],["downloadButton","","0.02"],["window.location.href= atob(","1000","0.02"],[".show_download_links","","0.02"],["download-btn","","0.02"],["updatePercentage","100","0.02"],["decodeURIComponent(link)","","0.02"],["/count-|-wait/","*","0.02"],["waktu--","","0.02"],[".download","","0.02"],["/base-timer-label|waktu--/","","0.02"],["curCount","","0.02"],["Please wait","","0.02"],["mdtimer","","0.02"],["gotolink","*","0.02"],["seconds--","*","0.02"],["claim_button","*","0.02"],["/Please Wait|Generating Links/","*","0.02"],["#second","","0.02"],["#countdown","","0.02"],["progressbar","30","0.02"],["#upbtn","","0.02"],["skip-btn","*","0.02"],["tp-","*","0.02"],["downloadTimer","","0.02"],["/Please Wait|Go to download/","","0.02"],["counter","","0.02"],["/counter--|downloadButton/","","0.02"],["location","","0.02"],["myCounter","*","0.001"],["/wpsafe|wait/","*","0.001"],["counter--","","0.02"],["pleasewait","","0.02"],["bb_download_delay","","0.02"],["0x","","0.02"],["timeCount","*","0.2"],["counter","2000","0.02"],["downloadLinkButton","*","0.02"],["startChecking","*","0.02"],["timer","1000","0.02"],["timeleft","","0.02"],["timeSec--","*","0.001"],["show_download_links","","0.02"],["REDIRECTING","*","0.02"],["ct","1000","0.02"],["sec--","","0.02"],["count--","","0.02"],["sec","","0.02"],["wpsafe-","","0.02"],["wpsafe-","2000","0.02"],["wpsafe-","1500","0.02"],["get-link","","0.02"],["download","2000","0.02"],["timer","1500","0.02"],["timer","2000","0.02"],["Link","550","0.02"],["#proceed","","0.02"],["counter","1800","0.02"],["downloadButton","1500","0.02"],["sp-count-down","","0.02"],["gotolink","","0.02"],["btngetlink","30","0.02"],["btn","","0.02"],["sec--","","0.001"],["/show_download_links|downloadTimer/","","0.02"],["timeinterval","","0.02"],["countDown","1150","0.5"],["makingdifferenttimer","50","0.02"],["Link()","","0.02"],["time","","0.02"],["time","2500","0.02"],["freeRemind","","0.02"],["contador","","0.02"],["contador--","","0.02"],["counter--","1300","0.02"],["seconds","","0.02"],["downloadButton","1000","0.02"],["counter","1000","0.02"],["wpsafe-generate","","0.02"],["timerText","","0.02"],["#counter","","0.02"],["counter","1500","0.02"],["download-count-down","","0.02"],["runTimer","","0.02"],["[0x","","0.02"],["#download","","0.02"],["percentVal","30","0.02"],["wpsafe-generate","1000","0.02"],["wpsafe","","0.02"],["timer","1000","0.6"],["","1000","0.05"],["second--","","0.02"],["#bt","","0.02"],["counter--","100","0.02"],["#Download-Card","","0.02"],[".stop()","","0.02"],["Link will appear","510","0.02"],["Link will appear","1010","0.02"],["countdown","2000","0.02"],["sayimiBaslat","","0.02"],["wpsafe-link","2000","0.02"],["#eg-timer","","0.3"],["#CountDown","","0.02"],["dllink","","0.02"],["time--","","0.02"],["stop()","","0.02"],["second","1000","0.02"],["wait_seconds","","0.02"],["download-countdown","","0.02"],["current_progress","2000","0.02"],["display()","","0.02"],["get_link","","0.02"],["goToLink","2200","0.02"],[".countdown","2000","0.02"],["urll","800","0.02"],["Downloading","","0.02"],["linkDL","","0.02"],["downloadButton","2400","0.02"],["#pleasewait","","0.02"],[".fcounter span","","0.02"],["real-link","","0.02"],[".wpapks-download-link-wrapper","","0.02"],["(i-1)","","0.02"],["fcounter","","0.02"],["show_ag","","0.02"],["timer","700","0.02"],["clock()","1000","0.02"],[".countdown","","0.02"],["secondsLeft","","0.02"],["timeLeft--","","0.02"],["/_0x[\\s\\S]*?decodeURIComponent/","","0.02"],["count-","","0.02"],["#download-popup","","0.02"],[".timer","","0.02"],["#download_menu","","0.02"],["r--","","0.02"],["showDownloadButton","","0.02"],["download_link","","0.02"],["onLoop","","0.02"],["timer.remove","","0.02"],["download","","0.02"],["i--","","0.02"]];

const hostnamesMap = new Map([["uploadhaven.com",0],["linksae.com",1],["wellness4live.com",1],["insuranceinfos.in",1],["mamahawa.com",2],["10short.pro",2],["lk21static.xyz",3],["makimbo.xyz",3],["djrudrabasti.in",4],["165.22.246.130",5],["vstdrive.in",6],["zeroupload.com",7],["bhojpuritop.in",7],["amritadrino.com",[7,42]],["decrypt.day",8],["alpinecorporate.com",9],["theprodkeys.com",10],["forasm.com",11],["heroxcheat.cloud",12],["bloginkz.com",13],["go.freetrx.fun",13],["wpking.in",13],["yifysubtitles.me",13],["michaelemad.com",13],["shtms.co",13],["gitizle.vip",13],["ay.live",13],["techrfour.com",13],["theicongenerator.com",13],["multilinkfz.xyz",13],["yindex.xyz",13],["unityassetcollection.com",13],["earningradar.com",13],["findi.pro",13],["uzunversiyon.xyz",13],["direkizle.xyz",13],["tamindir.mobi",13],["gitlink.pro",13],["aylink.co",13],["moretvtime.com",13],["urlpay.net",13],["claim4.fun",13],["plog.com.br",14],["finsurances.co",15],["hotmediahub.com",[16,17]],["terabox.fun",16],["covemarkets.com",18],["finclub.in",19],["financeyogi.net",19],["trangchu.news",19],["downfile.site",19],["player.pelisgratishd.io",19],["doibihar.org",19],["educationgyani.com",19],["ffworld.xyz",19],["gawbne.com",19],["forex-trnd.com",[19,44]],["forex-golds.com",19],["cravesandflames.com",20],["novelsapps.com",20],["codesnse.com",20],["speedtorrent.ru",20],["listas.pro",20],["forexit.io",20],["healthy4pepole.com",[20,94,96]],["sitecuatui.xyz",20],["haonguyen.top",20],["androjungle.com",21],["getmodsapk.com",21],["mixrootmods.com",22],["consoleroms.com",22],["romspedia.com",22],["edummm.xyz",22],["shortlinks.tech",23],["dramaworldhd.co",23],["bitefaucet.com",23],["filmypoints.in",[24,30]],["vinstartheme.com",25],["instamod.net",25],["jenismac.com",26],["unityassets4free.com",26],["spacebin.site",26],["freemodapks.com",26],["player.repelis24.rs",27],["dyp.li",28],["linku.to",29],["oneslidephotography.com",30],["apasih.my.id",30],["financekami.com",30],["bico8.com",30],["techyinfo.in",30],["smallinfo.in",30],["techymedies.com",30],["disheye.com",30],["ufacw.com",30],["googledrivelinks.com",30],["technicalatg.com",[30,39]],["7apple.net",30],["arhplyrics.in",30],["netfile.cc",30],["jardima.com",30],["courseforfree.com",30],["tutorial.siberuang.com",30],["segurosdevida.site",30],["surl.li",31],["bankvacency.com",32],["indilinks.xyz",33],["discordbotlist.com",33],["maxsilo.in",34],["starfiles.co",35],["nguyenvanbao.com",36],["androidecuatoriano.xyz",37],["sinonimos.de",38],["atlai.club",38],["blogtechh.com",40],["vavada5com.com",40],["financerites.in",40],["financerites.com",40],["diudemy.com",41],["techboyz.xyz",41],["adslink.pw",41],["3dzip.org",43],["3rabsnews.com",44],["mobileprice.site",44],["bestmobilenew.com",44],["linkjust1.com",44],["vidtome.stream",44],["ta2deem7arbya.com",[45,83]],["eda-ah.com",[45,83]],["modzilla.in",46],["garutpos.com",46],["vrcmods.com",46],["garutexpress.id",46],["getfreecourses.co",47],["dosya.hizliresim.com",48],["vebma.com",49],["pinloker.com",49],["sekilastekno.com",49],["blogmado.com",50],["suaurl.com",51],["webhostingpost.com",52],["wikitraveltips.com",53],["naukrilelo.in",53],["fikper.com",54],["freecoursesonline.me",55],["codingnepalweb.com",[56,144]],["misirtune.blogspot.com",57],["userload.co",58],["dizimini.com",59],["mohammedkhc.com",59],["trendyoum.com",59],["dl.indexmovies.xyz",59],["cheatsquad.gg",59],["mcpedl.com",59],["filese.me",59],["linkslo.com",59],["c1ne.co",59],["pearos.xyz",59],["moddedguru.com",59],["py.md",59],["abhaydigitalmarketer.com",59],["bestshort.xyz",59],["moaplos.com",59],["nullslide.com",59],["mage.si",59],["embed.m3u-cdn.live",59],["embed.tvcdn.live",59],["mastercoria.com",59],["gaminplay.com",[60,100,120]],["gamelopte.com",60],["insurglobal.xyz",60],["sevenjournals.com",60],["digworm.io",61],["br0wsers.com",[62,194]],["hashhackers.com",63],["katdrive.net",63],["newsongs.co.in",63],["altblogger.net",64],["cashearn.cc",64],["subscene.vip",64],["safelink.omglyrics.com",64],["4download.net",64],["acortar.info",64],["kotp1000000.xyz",64],["blog.donia-tech.net",64],["anomize.xyz",64],["boardgamesonline.net",64],["freeudemycourse.com",65],["modshost.net",66],["coincity.in",66],["djxmaza.in",66],["examtadka.com",66],["proviralhost.com",66],["urbharat.xyz",66],["codenova-center.web.app",67],["minecraftalpha.net",68],["aeromods.app",69],["whatsaero.com",69],["pahe.win",69],["financeflix.in",69],["technoflip.in",69],["studyranks.in",69],["flightsim.to",69],["hikarinoakari.com",69],["hikarinoakariost.info",69],["recipesdelite.com",70],["edumaz.com",71],["blisseyhusband.in",71],["bingotingo.com",71],["compressware.in",71],["geektopia.info",71],["freecoursewebsite.com",71],["dosyayukle.biz",71],["freetutorialsus.com",71],["apkmos.com",71],["sfile.mobi",71],["notipostingt.com",72],["cmacked.com",73],["movieflixpro.com",73],["gocmod.com",74],["speedynews.xyz",75],["xmod.in",75],["tecmundo.net",75],["crazyblog.in",[75,118,119]],["studyuo.com",[75,118,119]],["sbkaise.in",75],["janusnotes.com",75],["anime-sanka.com",76],["kiemlua.com",[77,106,151]],["world-trips.net",[77,110]],["newforex.online",[77,106]],["pes-patches.com",78],["data.morsodifame.com",78],["ifile.cc",78],["filemoon.sx",79],["truongblogger.top",80],["koyi.pub",81],["thizissam.in",[82,101]],["alphaantileak.net",82],["o-pro.online",83],["mazen-ve.com",83],["animeuploader.com",83],["konstantinova.net",83],["ontools.net",84],["teknopaid.xyz",84],["asdfiles.com",85],["11bit.co.in",86],["spantechie.com",87],["paste1s.com",88],["note1s.com",88],["easylinkref.com",88],["redirect.dafontvn.com",[89,90]],["samapkstore.com",[89,90]],["andronews18.blogspot.com",[89,90]],["ph.tpaste.net",[89,90]],["sdetectives.id",89],["apps2app.com",89],["pro-bangla.com",89],["cheatermad.com",91],["streamcheck.link",92],["tinyurl.so",92],["tinyurl.is",92],["usanewstoday.club",93],["earnme.club",93],["top1iq.com",94],["sama-pro.com",94],["7misr4day.com",[94,115]],["coursefreedl.com",94],["apkmaza.net",94],["jpopsingles.eu",94],["gplinks.co",94],["mobiget.net",94],["newzflair.com",95],["newzmagic.com",95],["adlice.com",96],["yalla-shoot-now.us",96],["forexeen.us",96],["health-and.me",96],["wondervelocity.com",96],["bluetechno.net",96],["world2our.com",96],["mobi2c.com",[96,106]],["mywatchseries.fun",96],["telepisodes.org",96],["kingtalks.net",96],["maxurlz.com",96],["allcryptoz.net",96],["topcryptoz.net",96],["thaitrieuvi.live",96],["freewebcart.com",96],["safe.kangkimin.com",96],["maxservicesi.com",96],["techhelpbd.com",97],["egyfalcons.com",98],["premads.com",99],["infortechno.com",100],["getintoway.com",100],["gktech.uk",100],["worldmak.com",100],["ftuapps.dev",100],["dl.tech-story.net",100],["themorningtribune.com",100],["veganho.co",100],["veganal.co",100],["mosqam.com",100],["bimo-cash.readi.online",100],["blog.textpage.xyz",100],["claimlite.club",100],["bitcomarket.net",100],["1apple.xyz",100],["mcrypto.club",[100,148]],["gamepure.in",100],["veganab.co",100],["apkmaven.io",100],["choiceappstore.xyz",100],["pn.cgchotbox.com",100],["worldappsstore.xyz",100],["gifans.com",100],["iptvjournal.com",100],["kienthucrangmieng.com",100],["coin-free.com",100],["moddingzone.in",100],["insurance-space.xyz",100],["blognews.in",100],["noithatmyphu.vn",100],["dulichkhanhhoa.net",100],["therootdroid.com",100],["filessrc.com",101],["srcimdb.com",101],["udemycourses.me",101],["eu.tapchipi.com",101],["short.ctvb1.info",101],["citychilli.com",101],["psdly.com",101],["desitvshows.xyz",101],["katmoviehd4.com",101],["download.modsofapk.com",101],["infopedia24.com",101],["linkdecode.com",101],["short-ly.co",102],["upshrink.com",102],["jojo-themes.net",103],["diglink.blogspot.com",104],["th-world.com",104],["za.gl",105],["za.uy",105],["rezence.com",106],["techmody.io",[106,127]],["yoshare.net",106],["mikl4forex.com",[106,151]],["publicananker.com",[106,151]],["aemenstore.com",106],["cazzette.com",106],["truebrandy.com",106],["hookeaudio.com",106],["restorbio.com",106],["medcpu.com",106],["alocd.com",106],["forex-gold.net",[106,110]],["kingsleynyc.com",106],["lucidcam.com",106],["staaker.com",106],["byboe.com",106],["thegoneapp.com",106],["nousdecor.com",106],["alobuu.com",[106,151]],["rodjulian.com",[106,151]],["aloass.com",[106,151]],["taisv.com",[106,151]],["aloguy.com",[106,151]],["alohdd.com",[106,151]],["alogum.com",[106,151]],["alobyt.com",[106,151]],["aloboi.com",[106,151]],["uebnews.online",[106,151]],["aloegg.com",[106,151]],["alofps.com",[106,151]],["pennbookcenter.com",[106,151]],["samfirms.com",107],["appsmodz.com",108],["cararegistrasi.com",109],["healdad.com",110],["gamalk-sehetk.com",110],["yogablogfit.com",111],["vocalley.com",111],["howifx.com",111],["enit.in",111],["skincarie.com",111],["imperialstudy.com",111],["hamsterss.website",112],["apkmb.com",112],["boobychristmas.com",113],["ethereumfaucet.info",114],["tutcourse.com",115],["luckydice.net",115],["coinsearns.com",115],["gdfreak.xyz",115],["doctor-groups.com",115],["crypto-faucet.xyz",115],["mik4mob.com",115],["iklandb.com",115],["urapk.com",115],["dogemate.com",[115,162]],["shorteet.com",115],["earnbits.xyz",115],["bitearns.com",115],["girls-like.me",116],["sonixgvn.net",116],["runmods.com",116],["watchdoge.xyz",117],["informatikamu.id",[118,119]],["technicalatg.xyz",[118,119]],["taregna.com",[118,119]],["toolss.net",[118,119]],["tutsgalaxy.net",[118,119]],["otomi-games.com",[119,157]],["yifysub.net",121],["cdmstudy.site",122],["insurance.recipesdelite.com",122],["allbuzzin.com",[123,124]],["file.bospedia.com",125],["toptap.website",126],["adnit-tri.tk",126],["boomx5.com",126],["howtofree.org",128],["rethmic.com",129],["majidzhacker.com",[130,131]],["itscybertech.com",132],["gold-24.net",133],["3rabsports.com",133],["forexrw7.com",133],["fx-22.com",133],["forexmab.com",133],["forexwaw.club",133],["forex-articles.com",133],["linkjust.com",133],["forexlap.com",133],["shareappscrack.com",134],["oiipdf.com",135],["upstore.net",136],["subs4series.com",137],["gamingforecast.com",138],["icutlink.com",139],["android-apk.org",139],["semawur.com",139],["zegtrends.com",140],["littlebyte.net",141],["megadescargas.net",142],["blyts.net",142],["lawebdelprogramador.com",143],["win10.vn",145],["wildfaucets.ml",145],["faucet.cryptourl.net",145],["dogeatm.com",145],["claimbits.io",145],["i-bits.io",145],["diamondfaucet.space",145],["gobits.io",145],["russiacoin.xyz",145],["starsfaucet.com",145],["lionltcfaucet.xyz",145],["faucet.shorterall.com",145],["yellowfaucet.ovh",145],["bollypluse.in",146],["freecourseslab.com",147],["freetutorialseu.com",147],["informaxonline.com",[148,170]],["tipslearn.com",148],["androidnougatapk.com",148],["siberuang.com",148],["waaboom.com",148],["healthymaster.xyz",148],["bkksnews.xyz",148],["faucetcrypto.com",149],["techoow.com",150],["mynewsmedia.in",151],["mynewshub.co",151],["techbigs.com",152],["kiktu.com",153],["technicalegy.com",154],["wallpaperaccess.com",155],["uniqueten.net",158],["ultraten.net",158],["elil.cc",159],["game-kentang.blogspot.com",160],["upfile.us",160],["mad4wheels.com",161],["moviesdaweb.blogspot.com",163],["dlsharefile.com",164],["eco-area.com",165],["safelink.rezkozpatch.xyz",[166,167]],["onlinecoursebay.com",168],["kazanclilink.com",169],["emulatorgames.net",171],["iptv4best.com",172],["leechall.com",173],["kpopstan.com",174],["ouo.io",175],["cpmlink.net",175],["short-url.link",176],["findicons.com",177],["nulleb.com",178],["bfas237blog.info",179],["dr-farfar.net",180],["saungfirmware.id",181],["goossh.com",182],["onlinefreecourse.net",183],["site.dz4win.com",184],["thingiverse.com",185],["linkerload.com",186],["ockles.com",186],["ljutkeunvpn.blogspot.com",186],["mobilelegends.shop",186],["linksaya.com",187],["phpscripttr.com",188],["essek.gen.tr",188],["indir.turkceyama.net",188],["clicads.fr",188],["mazakony.net",188],["5mod-file.ru",189],["genlink.cc",190],["apkprofree.com",191],["zedge.net",192],["hakdisk.ru",193],["diskapk.ru",193],["softwaresde.com",194],["tr.link",195],["ds2play.com",197],["doods.pro",197],["dooood.com",197],["dood.yt",197],["dood.re",197],["dood.wf",197],["dood.la",197],["dood.pm",197],["dood.so",197],["dood.to",197],["dood.watch",197],["dood.ws",197],["nightfallnews.com",198],["retrostic.com",199],["shiroyasha.me",200],["bolicheintercambios.net",201],["lg-firmwares.com",202],["sfirmware.com",202],["imgqec.online",203],["imgwbfh.online",203],["imgyer.store",203],["imgxuh.cfd",203],["imgngc.sbs",203],["imgezx.sbs",203],["imgxza.store",203],["imgwqr.online",203],["imagehaha.com",203],["imgpukrr.site",203],["imagent.buzz",203],["imagepuitr.buzz",203],["imgblaze.net",203],["imgkorle.buzz",203],["imgkaka.xyz",203],["pixsera.net",203],["imgfrost.net",203],["imgair.net",203],["wallpaperplay.com",204],["lnk.parts",205],["lnk.news",205],["sammobile.com",206],["bomurl.com",207],["go.geghost.com",208],["romhustler.org",209],["a2zupload.com",210],["dl.pcgamestorrents.org",211],["get-url.com",211]]);

const entitiesMap = new Map([["lootlinks",69],["ibomma",83],["animesanka",156],["akwam",196],["bluemediafile",211],["bluemediafiles",211]]);

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
        'JSON_parse': self.JSON.parse.bind(self.JSON),
        'JSON_stringify': self.JSON.stringify.bind(self.JSON),
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
