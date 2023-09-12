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

const argsList = [["/wpsafe|wait|timer/","*","0.001"],["time--","*","0.001"],["count","*","0.001"],["update","*","0.001"],["counter","*","0.001"],["/wpsafe-|timeLeft/","*","0.001"],["wpsafe-","*","0.001"],["mdtimer","*","0.001"],["timer","","0.02"],["countdown","*","0.001"],["timer","*","0.001"],["counter"],["clearInterval","*","0.001"],["wait","*","0.02"],["count","*","0.02"],["counter","*","0.02"],["download","*","0.02"],["timeLeft","*","0.02"],["timeLeft","","0.02"],["/_0x|wpsafe-/","*","0.02"],["Download","*","0.02"],["counter--","*","0.02"],["count--","*","0.02"],["time","*","0.02"],["p--","","0.02"],["current()","*","0.02"],["wpsafe-","*","0.02"],["disabled","*","0.02"],["timePassed","*","0.02"],["countdown","*","0.02"],["/Seconds|download/","*","0.02"],["download_progress","*","0.02"],["count","1600","0.02"],["downloadButton","*","0.02"],["waitTime","*","0.02"],["timer","*","0.02"],["timeSec--","*","0.02"],["_0x","*","0.02"],["wpsafe-generate","*","0.02"],["document.hidden","*","0.02"],["#mdtimer","","0.02"],["updatePercentage","*","0.02"],["timePassed","","0.02"],["DOWNLOAD","*","0.02"],["Number","","0.02"],["/counter|wait/","*","0.02"],["get-link","*","0.02"],["cont","*","0.02"],[",dataType:_","1000","0.02"],["/wpsafe|count/","*","0.02"],["downloadToken","*","0.02"],["/timeLeft|wpsafe-/","*","0.02"],["cnDownloadBtn","*","0.02"],["download_link","*","0.02"],["secondsleft","*","0.02"],["countdown","","0.02"],["yuidea-","*","0.02"],["timer--","*","0.02"],["success","","0.02"],["/verify_text|isCompleted/","*","0.02"],["#timer","","0.02"],["countdownwrapper","","0.02"],["timeleft","*","0.02"],["contador","*","0.02"],["Your Link","","0.02"],["count","","0.02"],["/download|Please/","","0.02"],["downloadButton","","0.02"],["window.location.href= atob(","1000","0.02"],[".show_download_links","","0.02"],["download-btn","","0.02"],["updatePercentage","100","0.02"],["decodeURIComponent(link)","","0.02"],["/count-|-wait/","*","0.02"],["waktu--","","0.02"],[".download","","0.02"],["/base-timer-label|waktu--/","","0.02"],["curCount","","0.02"],["Please wait","","0.02"],["mdtimer","","0.02"],["gotolink","*","0.02"],["seconds--","*","0.02"],["claim_button","*","0.02"],["/Please Wait|Generating Links/","*","0.02"],["#second","","0.02"],["#countdown","","0.02"],["progressbar","30","0.02"],["#upbtn","","0.02"],["skip-btn","*","0.02"],["tp-","*","0.02"],["downloadTimer","","0.02"],["/Please Wait|Go to download/","","0.02"],["counter","","0.02"],["/counter--|downloadButton/","","0.02"],["location","","0.02"],["/wpsafe|wait/","*","0.001"],["counter--","","0.02"],["pleasewait","","0.02"],["bb_download_delay","","0.02"],["0x","","0.02"],["timeCount","*","0.2"],["counter","2000","0.02"],["downloadLinkButton","*","0.02"],["startChecking","*","0.02"],["timer","1000","0.02"],["timeleft","","0.02"],["timeSec--","*","0.001"],["show_download_links","","0.02"],["REDIRECTING","*","0.02"],["ct","1000","0.02"],["sec--","","0.02"],["count--","","0.02"],["sec","","0.02"],["wpsafe-","","0.02"],["wpsafe-","2000","0.02"],["wpsafe-","1500","0.02"],["get-link","","0.02"],["download","2000","0.02"],["timer","1500","0.02"],["timer","2000","0.02"],["Link","550","0.02"],["#proceed","","0.02"],["counter","1800","0.02"],["downloadButton","1500","0.02"],["sp-count-down","","0.02"],["gotolink","","0.02"],["btngetlink","30","0.02"],["btn","","0.02"],["/show_download_links|downloadTimer/","","0.02"],["timeinterval","","0.02"],["countDown","1150","0.5"],["makingdifferenttimer","50","0.02"],["Link()","","0.02"],["time","","0.02"],["time","2500","0.02"],["freeRemind","","0.02"],["contador","","0.02"],["contador--","","0.02"],["counter--","1300","0.02"],["seconds","","0.02"],["downloadButton","1000","0.02"],["counter","1000","0.02"],["wpsafe-generate","","0.02"],["timerText","","0.02"],["#counter","","0.02"],["counter","1500","0.02"],["download-count-down","","0.02"],["runTimer","","0.02"],["[0x","","0.02"],["#download","","0.02"],["percentVal","30","0.02"],["wpsafe-generate","1000","0.02"],["wpsafe","","0.02"],["timer","1000","0.6"],["","1000","0.05"],["second--","","0.02"],["#bt","","0.02"],["counter--","100","0.02"],["#Download-Card","","0.02"],[".stop()","","0.02"],["Link will appear","510","0.02"],["Link will appear","1010","0.02"],["countdown","2000","0.02"],["sayimiBaslat","","0.02"],["wpsafe-link","2000","0.02"],["#eg-timer","","0.3"],["#CountDown","","0.02"],["dllink","","0.02"],["time--","","0.02"],["stop()","","0.02"],["second","1000","0.02"],["wait_seconds","","0.02"],["download-countdown","","0.02"],["current_progress","2000","0.02"],["display()","","0.02"],["get_link","","0.02"],["goToLink","2200","0.02"],[".countdown","2000","0.02"],["urll","800","0.02"],["Downloading","","0.02"],["linkDL","","0.02"],["downloadButton","2400","0.02"],["#pleasewait","","0.02"],[".fcounter span","","0.02"],["real-link","","0.02"],[".wpapks-download-link-wrapper","","0.02"],["(i-1)","","0.02"],["fcounter","","0.02"],["show_ag","","0.02"],["timer","700","0.02"],["clock()","1000","0.02"],[".countdown","","0.02"],["secondsLeft","","0.02"],["timeLeft--","","0.02"],["/_0x[\\s\\S]*?decodeURIComponent/","","0.02"],["count-","","0.02"],["#download-popup","","0.02"],[".timer","","0.02"],["#download_menu","","0.02"],["r--","","0.02"],["showDownloadButton","","0.02"],["download_link","","0.02"],["onLoop","","0.02"],["timer.remove","","0.02"],["download","","0.02"],["i--","","0.02"]];

const hostnamesMap = new Map([["165.22.246.130",0],["vstdrive.in",1],["zeroupload.com",2],["bhojpuritop.in",2],["amritadrino.com",[2,38]],["decrypt.day",3],["alpinecorporate.com",4],["theprodkeys.com",5],["forasm.com",6],["heroxcheat.cloud",7],["bloginkz.com",8],["go.freetrx.fun",8],["wpking.in",8],["yifysubtitles.me",8],["michaelemad.com",8],["shtms.co",8],["gitizle.vip",8],["ay.live",8],["techrfour.com",8],["theicongenerator.com",8],["multilinkfz.xyz",8],["yindex.xyz",8],["unityassetcollection.com",8],["earningradar.com",8],["findi.pro",8],["uzunversiyon.xyz",8],["direkizle.xyz",8],["tamindir.mobi",8],["gitlink.pro",8],["aylink.co",8],["moretvtime.com",8],["urlpay.net",8],["claim4.fun",8],["plog.com.br",9],["wellness4live.com",10],["insuranceinfos.in",10],["finsurances.co",11],["hotmediahub.com",12],["covemarkets.com",13],["finclub.in",14],["financeyogi.net",14],["trangchu.news",14],["downfile.site",14],["player.pelisgratishd.io",14],["doibihar.org",14],["educationgyani.com",14],["ffworld.xyz",14],["gawbne.com",14],["forex-trnd.com",[14,40]],["forex-golds.com",14],["cravesandflames.com",15],["novelsapps.com",15],["codesnse.com",15],["speedtorrent.ru",15],["listas.pro",15],["forexit.io",15],["healthy4pepole.com",[15,90,92]],["sitecuatui.xyz",15],["haonguyen.top",15],["androjungle.com",16],["getmodsapk.com",16],["mixrootmods.com",17],["consoleroms.com",17],["romspedia.com",17],["edummm.xyz",17],["shortlinks.tech",18],["dramaworldhd.co",18],["bitefaucet.com",18],["filmypoints.in",[19,26]],["vinstartheme.com",20],["instamod.net",20],["jenismac.com",21],["unityassets4free.com",21],["spacebin.site",21],["freemodapks.com",21],["player.repelis24.rs",22],["makimbo.xyz",23],["dyp.li",24],["linku.to",25],["oneslidephotography.com",26],["apasih.my.id",26],["financekami.com",26],["bico8.com",26],["techyinfo.in",26],["smallinfo.in",26],["techymedies.com",26],["disheye.com",26],["ufacw.com",26],["googledrivelinks.com",26],["technicalatg.com",[26,35]],["7apple.net",26],["arhplyrics.in",26],["netfile.cc",26],["jardima.com",26],["courseforfree.com",26],["tutorial.siberuang.com",26],["segurosdevida.site",26],["surl.li",27],["bankvacency.com",28],["indilinks.xyz",29],["discordbotlist.com",29],["maxsilo.in",30],["starfiles.co",31],["nguyenvanbao.com",32],["androidecuatoriano.xyz",33],["sinonimos.de",34],["atlai.club",34],["blogtechh.com",36],["vavada5com.com",36],["financerites.in",36],["financerites.com",36],["diudemy.com",37],["techboyz.xyz",37],["adslink.pw",37],["3dzip.org",39],["3rabsnews.com",40],["mobileprice.site",40],["bestmobilenew.com",40],["linkjust1.com",40],["vidtome.stream",40],["ta2deem7arbya.com",[41,79]],["eda-ah.com",[41,79]],["modzilla.in",42],["garutpos.com",42],["vrcmods.com",42],["garutexpress.id",42],["getfreecourses.co",43],["dosya.hizliresim.com",44],["vebma.com",45],["pinloker.com",45],["sekilastekno.com",45],["blogmado.com",46],["suaurl.com",47],["webhostingpost.com",48],["wikitraveltips.com",49],["naukrilelo.in",49],["fikper.com",50],["freecoursesonline.me",51],["codingnepalweb.com",[52,138]],["misirtune.blogspot.com",53],["userload.co",54],["dizimini.com",55],["mohammedkhc.com",55],["trendyoum.com",55],["dl.indexmovies.xyz",55],["cheatsquad.gg",55],["mcpedl.com",55],["filese.me",55],["linkslo.com",55],["c1ne.co",55],["pearos.xyz",55],["moddedguru.com",55],["py.md",55],["abhaydigitalmarketer.com",55],["bestshort.xyz",55],["moaplos.com",55],["nullslide.com",55],["mage.si",55],["embed.m3u-cdn.live",55],["embed.tvcdn.live",55],["mastercoria.com",55],["gaminplay.com",[56,95,115]],["gamelopte.com",56],["insurglobal.xyz",56],["sevenjournals.com",56],["digworm.io",57],["br0wsers.com",[58,188]],["hashhackers.com",59],["katdrive.net",59],["newsongs.co.in",59],["altblogger.net",60],["cashearn.cc",60],["subscene.vip",60],["safelink.omglyrics.com",60],["4download.net",60],["acortar.info",60],["kotp1000000.xyz",60],["blog.donia-tech.net",60],["anomize.xyz",60],["boardgamesonline.net",60],["freeudemycourse.com",61],["modshost.net",62],["coincity.in",62],["djxmaza.in",62],["examtadka.com",62],["proviralhost.com",62],["urbharat.xyz",62],["codenova-center.web.app",63],["minecraftalpha.net",64],["aeromods.app",65],["whatsaero.com",65],["pahe.win",65],["financeflix.in",65],["technoflip.in",65],["studyranks.in",65],["flightsim.to",65],["hikarinoakari.com",65],["hikarinoakariost.info",65],["recipesdelite.com",66],["edumaz.com",67],["blisseyhusband.in",67],["bingotingo.com",67],["compressware.in",67],["geektopia.info",67],["freecoursewebsite.com",67],["dosyayukle.biz",67],["freetutorialsus.com",67],["apkmos.com",67],["sfile.mobi",67],["notipostingt.com",68],["cmacked.com",69],["movieflixpro.com",69],["gocmod.com",70],["speedynews.xyz",71],["xmod.in",71],["tecmundo.net",71],["crazyblog.in",[71,113,114]],["studyuo.com",[71,113,114]],["sbkaise.in",71],["janusnotes.com",71],["anime-sanka.com",72],["kiemlua.com",[73,101,145]],["world-trips.net",[73,105]],["newforex.online",[73,101]],["pes-patches.com",74],["data.morsodifame.com",74],["ifile.cc",74],["filemoon.sx",75],["truongblogger.top",76],["koyi.pub",77],["thizissam.in",[78,96]],["alphaantileak.net",78],["o-pro.online",79],["mazen-ve.com",79],["animeuploader.com",79],["konstantinova.net",79],["ontools.net",80],["teknopaid.xyz",80],["asdfiles.com",81],["11bit.co.in",82],["spantechie.com",83],["paste1s.com",84],["note1s.com",84],["easylinkref.com",84],["redirect.dafontvn.com",[85,86]],["samapkstore.com",[85,86]],["andronews18.blogspot.com",[85,86]],["ph.tpaste.net",[85,86]],["sdetectives.id",85],["apps2app.com",85],["pro-bangla.com",85],["cheatermad.com",87],["streamcheck.link",88],["tinyurl.so",88],["tinyurl.is",88],["usanewstoday.club",89],["earnme.club",89],["top1iq.com",90],["sama-pro.com",90],["7misr4day.com",[90,110]],["coursefreedl.com",90],["apkmaza.net",90],["jpopsingles.eu",90],["gplinks.co",90],["mobiget.net",90],["newzflair.com",91],["newzmagic.com",91],["adlice.com",92],["yalla-shoot-now.us",92],["forexeen.us",92],["health-and.me",92],["wondervelocity.com",92],["bluetechno.net",92],["world2our.com",92],["mobi2c.com",[92,101]],["mywatchseries.fun",92],["telepisodes.org",92],["kingtalks.net",92],["maxurlz.com",92],["allcryptoz.net",92],["topcryptoz.net",92],["thaitrieuvi.live",92],["freewebcart.com",92],["safe.kangkimin.com",92],["maxservicesi.com",92],["techhelpbd.com",93],["egyfalcons.com",94],["gktech.uk",95],["worldmak.com",95],["ftuapps.dev",95],["dl.tech-story.net",95],["themorningtribune.com",95],["veganho.co",95],["veganal.co",95],["mosqam.com",95],["bimo-cash.readi.online",95],["blog.textpage.xyz",95],["claimlite.club",95],["bitcomarket.net",95],["1apple.xyz",95],["mcrypto.club",[95,142]],["gamepure.in",95],["veganab.co",95],["apkmaven.io",95],["choiceappstore.xyz",95],["pn.cgchotbox.com",95],["worldappsstore.xyz",95],["gifans.com",95],["iptvjournal.com",95],["kienthucrangmieng.com",95],["coin-free.com",95],["moddingzone.in",95],["insurance-space.xyz",95],["blognews.in",95],["noithatmyphu.vn",95],["dulichkhanhhoa.net",95],["therootdroid.com",95],["filessrc.com",96],["srcimdb.com",96],["udemycourses.me",96],["eu.tapchipi.com",96],["short.ctvb1.info",96],["citychilli.com",96],["psdly.com",96],["desitvshows.xyz",96],["katmoviehd4.com",96],["download.modsofapk.com",96],["infopedia24.com",96],["linkdecode.com",96],["short-ly.co",97],["upshrink.com",97],["jojo-themes.net",98],["diglink.blogspot.com",99],["th-world.com",99],["za.gl",100],["za.uy",100],["rezence.com",101],["techmody.io",[101,122]],["yoshare.net",101],["mikl4forex.com",[101,145]],["publicananker.com",[101,145]],["aemenstore.com",101],["cazzette.com",101],["truebrandy.com",101],["hookeaudio.com",101],["restorbio.com",101],["medcpu.com",101],["alocd.com",101],["forex-gold.net",[101,105]],["kingsleynyc.com",101],["lucidcam.com",101],["staaker.com",101],["byboe.com",101],["thegoneapp.com",101],["nousdecor.com",101],["alobuu.com",[101,145]],["rodjulian.com",[101,145]],["aloass.com",[101,145]],["taisv.com",[101,145]],["aloguy.com",[101,145]],["alohdd.com",[101,145]],["alogum.com",[101,145]],["alobyt.com",[101,145]],["aloboi.com",[101,145]],["uebnews.online",[101,145]],["aloegg.com",[101,145]],["alofps.com",[101,145]],["pennbookcenter.com",[101,145]],["samfirms.com",102],["appsmodz.com",103],["cararegistrasi.com",104],["healdad.com",105],["gamalk-sehetk.com",105],["yogablogfit.com",106],["vocalley.com",106],["howifx.com",106],["enit.in",106],["skincarie.com",106],["imperialstudy.com",106],["hamsterss.website",107],["romadd.com",107],["apkmb.com",107],["boobychristmas.com",108],["ethereumfaucet.info",109],["tutcourse.com",110],["luckydice.net",110],["coinsearns.com",110],["forexrw7.com",110],["fx-22.com",110],["forexmab.com",110],["forexwaw.club",110],["forex-articles.com",110],["linkjust.com",110],["forexlap.com",110],["gdfreak.xyz",110],["doctor-groups.com",110],["crypto-faucet.xyz",110],["mik4mob.com",110],["iklandb.com",110],["urapk.com",110],["dogemate.com",[110,156]],["shorteet.com",110],["earnbits.xyz",110],["bitearns.com",110],["girls-like.me",111],["sonixgvn.net",111],["apkcell.net",111],["runmods.com",111],["watchdoge.xyz",112],["informatikamu.id",[113,114]],["technicalatg.xyz",[113,114]],["taregna.com",[113,114]],["toolss.net",[113,114]],["tutsgalaxy.net",[113,114]],["otomi-games.com",[114,151]],["yifysub.net",116],["cdmstudy.site",117],["insurance.recipesdelite.com",117],["allbuzzin.com",[118,119]],["file.bospedia.com",120],["toptap.website",121],["adnit-tri.tk",121],["boomx5.com",121],["howtofree.org",123],["rethmic.com",124],["majidzhacker.com",[125,126]],["itscybertech.com",127],["shareappscrack.com",128],["oiipdf.com",129],["upstore.net",130],["subs4series.com",131],["gamingforecast.com",132],["icutlink.com",133],["android-apk.org",133],["semawur.com",133],["zegtrends.com",134],["littlebyte.net",135],["megadescargas.net",136],["blyts.net",136],["lawebdelprogramador.com",137],["win10.vn",139],["wildfaucets.ml",139],["faucet.cryptourl.net",139],["dogeatm.com",139],["claimbits.io",139],["i-bits.io",139],["diamondfaucet.space",139],["gobits.io",139],["russiacoin.xyz",139],["starsfaucet.com",139],["lionltcfaucet.xyz",139],["faucet.shorterall.com",139],["yellowfaucet.ovh",139],["bollypluse.in",140],["freecourseslab.com",141],["freetutorialseu.com",141],["informaxonline.com",[142,164]],["tipslearn.com",142],["androidnougatapk.com",142],["siberuang.com",142],["waaboom.com",142],["healthymaster.xyz",142],["bkksnews.xyz",142],["faucetcrypto.com",143],["techoow.com",144],["mynewsmedia.in",145],["mynewshub.co",145],["techbigs.com",146],["kiktu.com",147],["technicalegy.com",148],["wallpaperaccess.com",149],["uniqueten.net",152],["ultraten.net",152],["elil.cc",153],["game-kentang.blogspot.com",154],["upfile.us",154],["mad4wheels.com",155],["moviesdaweb.blogspot.com",157],["dlsharefile.com",158],["eco-area.com",159],["safelink.rezkozpatch.xyz",[160,161]],["onlinecoursebay.com",162],["kazanclilink.com",163],["emulatorgames.net",165],["iptv4best.com",166],["leechall.com",167],["kpopstan.com",168],["ouo.io",169],["cpmlink.net",169],["short-url.link",170],["findicons.com",171],["nulleb.com",172],["bfas237blog.info",173],["dr-farfar.net",174],["saungfirmware.id",175],["goossh.com",176],["onlinefreecourse.net",177],["site.dz4win.com",178],["thingiverse.com",179],["linkerload.com",180],["ockles.com",180],["ljutkeunvpn.blogspot.com",180],["mobilelegends.shop",180],["linksaya.com",181],["phpscripttr.com",182],["essek.gen.tr",182],["indir.turkceyama.net",182],["clicads.fr",182],["mazakony.net",182],["5mod-file.ru",183],["genlink.cc",184],["apkprofree.com",185],["zedge.net",186],["hakdisk.ru",187],["diskapk.ru",187],["softwaresde.com",188],["tr.link",189],["doods.pro",191],["dooood.com",191],["dood.yt",191],["dood.re",191],["dood.wf",191],["dood.la",191],["dood.pm",191],["dood.so",191],["dood.to",191],["dood.watch",191],["dood.ws",191],["nightfallnews.com",192],["retrostic.com",193],["shiroyasha.me",194],["bolicheintercambios.net",195],["lg-firmwares.com",196],["sfirmware.com",196],["imgqec.online",197],["imgwbfh.online",197],["imgyer.store",197],["imgxuh.cfd",197],["imgngc.sbs",197],["imgezx.sbs",197],["imgxza.store",197],["imgwqr.online",197],["imagehaha.com",197],["imgpukrr.site",197],["imagent.buzz",197],["imagepuitr.buzz",197],["imgblaze.net",197],["imgkorle.buzz",197],["imgkaka.xyz",197],["pixsera.net",197],["imgfrost.net",197],["imgair.net",197],["wallpaperplay.com",198],["lnk.parts",199],["lnk.news",199],["sammobile.com",200],["bomurl.com",201],["go.geghost.com",202],["romhustler.org",203],["a2zupload.com",204],["dl.pcgamestorrents.org",205],["get-url.com",205]]);

const entitiesMap = new Map([["lootlinks",65],["ibomma",79],["animesanka",150],["akwam",190],["bluemediafile",205],["bluemediafiles",205]]);

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
        ? Math.min(Math.max(boost, 0.02), 50)
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
