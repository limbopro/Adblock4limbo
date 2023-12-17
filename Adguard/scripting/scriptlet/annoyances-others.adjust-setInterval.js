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

const argsList = [["timer","*","0.001"],["pleasewait","*","0.001"],["tp-time","*","0.001"],["innerHTML=`Wait"],["/wpsafe|wait|timer/","*","0.001"],[".html()","*","0.001"],["return e-1","*","0.001"],["generateDownloadLink","*","0.001"],["countDown()","*","0.28"],["/proceed|mdtimer/","*","0.001"],["time","*","0.02"],["Popup will close in","*","0.001"],["time--","*","0.001"],["count","*","0.001"],["update","*","0.001"],["counter","*","0.001"],["/wpsafe-|timeLeft/","*","0.001"],["wpsafe-","*","0.001"],["mdtimer","*","0.001"],["timer","","0.02"],["countdown","*","0.001"],["counter"],["clearInterval","*","0.001"],["wait","*","0.02"],["count","*","0.02"],["counter","*","0.02"],["download","*","0.02"],["timeLeft","*","0.02"],["timeLeft","","0.02"],["/_0x|wpsafe-/","*","0.02"],["Download","*","0.02"],["counter--","*","0.02"],["count--","*","0.02"],["p--","","0.02"],["current()","*","0.02"],["wpsafe-","*","0.02"],["disabled","*","0.02"],["timePassed","*","0.02"],["countdown","*","0.02"],["/Seconds|download/","*","0.02"],["download_progress","*","0.02"],["count","1600","0.02"],["downloadButton","*","0.02"],["waitTime","*","0.02"],["timer","*","0.02"],["timeSec--","*","0.02"],["_0x","*","0.02"],["wpsafe-generate","*","0.02"],["document.hidden","*","0.02"],["#mdtimer","","0.02"],["updatePercentage","*","0.02"],["timePassed","","0.02"],["DOWNLOAD","*","0.02"],["Number","","0.02"],["/counter|wait/","*","0.02"],["get-link","*","0.02"],["cont","*","0.02"],[",dataType:_","1000","0.02"],["/wpsafe|count/","*","0.02"],["downloadToken","*","0.02"],["/timeLeft|wpsafe-/","*","0.02"],["cnDownloadBtn","*","0.02"],["download_link","*","0.02"],["secondsleft","*","0.02"],["countdown","","0.02"],["yuidea-","*","0.02"],["timer--","*","0.02"],["success","","0.02"],["/verify_text|isCompleted/","*","0.02"],["#timer","","0.02"],["countdownwrapper","","0.02"],["timeleft","*","0.02"],["contador","*","0.02"],["Your Link","","0.02"],["count","","0.02"],["/download|Please/","","0.02"],["downloadButton","","0.02"],["window.location.href= atob(","1000","0.02"],[".show_download_links","","0.02"],["/\\.text\\(\\)&&\\(clearInterval|download-btn/","*","0.02"],["updatePercentage","100","0.02"],["decodeURIComponent(link)","","0.02"],["/count-|-wait/","*","0.02"],["waktu--","","0.02"],[".download","","0.02"],["/base-timer-label|waktu--/","","0.02"],["curCount","","0.02"],["Please wait","","0.02"],["mdtimer","","0.02"],["gotolink","*","0.02"],["seconds--","*","0.02"],["claim_button","*","0.02"],["/Please Wait|Generating Links/","*","0.02"],["#second","","0.02"],["#countdown","","0.02"],["progressbar","30","0.02"],["#upbtn","","0.02"],["skip-btn","*","0.02"],["tp-","*","0.02"],["downloadTimer","","0.02"],["/Please Wait|Go to download/","","0.02"],["counter","","0.02"],["/counter--|downloadButton/","","0.02"],["location","","0.02"],["myCounter","*","0.001"],["/wpsafe|wait/","*","0.001"],["counter--","","0.02"],["pleasewait","","0.02"],["bb_download_delay","","0.02"],["0x","","0.02"],["timeCount","*","0.2"],["counter","2000","0.02"],["downloadLinkButton","*","0.02"],["startChecking","*","0.02"],["timer","1000","0.02"],["timeleft","","0.02"],["timeSec--","*","0.001"],["show_download_links","","0.02"],["REDIRECTING","*","0.02"],["ct","1000","0.02"],["sec--","","0.02"],["count--","","0.02"],["sec","","0.02"],["wpsafe-","","0.02"],["wpsafe-","2000","0.02"],["wpsafe-","1500","0.02"],["get-link","","0.02"],["download","2000","0.02"],["timer","1500","0.02"],["timer","2000","0.02"],["Link","550","0.02"],["#proceed","","0.02"],["counter","1800","0.02"],["downloadButton","1500","0.02"],["sp-count-down","","0.02"],["gotolink","","0.02"],["btngetlink","30","0.02"],["btn","","0.02"],["sec--","","0.001"],["/show_download_links|downloadTimer/","","0.02"],["timeinterval","","0.02"],["countDown","1150","0.5"],["makingdifferenttimer","50","0.02"],["Link()","","0.02"],["time","","0.02"],["time","2500","0.02"],["freeRemind","","0.02"],["contador","","0.02"],["contador--","","0.02"],["counter--","1300","0.02"],["seconds","","0.02"],["downloadButton","1000","0.02"],["counter","1000","0.02"],["wpsafe-generate","","0.02"],["timerText","","0.02"],["#counter","","0.02"],["counter","1500","0.02"],["download-count-down","","0.02"],["runTimer","","0.02"],["[0x","","0.02"],["#download","","0.02"],["percentVal","30","0.02"],["wpsafe-generate","1000","0.02"],["wpsafe","","0.02"],["timer","1000","0.6"],["","1000","0.05"],["second--","","0.02"],["#bt","","0.02"],["counter--","100","0.02"],["#Download-Card","","0.02"],[".stop()","","0.02"],["Link will appear","510","0.02"],["Link will appear","1010","0.02"],["countdown","2000","0.02"],["sayimiBaslat","","0.02"],["wpsafe-link","2000","0.02"],["#eg-timer","","0.3"],["#CountDown","","0.02"],["dllink","","0.02"],["time--","","0.02"],["stop()","","0.02"],["second","1000","0.02"],["wait_seconds","","0.02"],["download-countdown","","0.02"],["current_progress","2000","0.02"],["display()","","0.02"],["get_link","","0.02"],["goToLink","2200","0.02"],[".countdown","2000","0.02"],["urll","800","0.02"],["Downloading","","0.02"],["linkDL","","0.02"],["downloadButton","2400","0.02"],["#pleasewait","","0.02"],[".fcounter span","","0.02"],["real-link","","0.02"],[".wpapks-download-link-wrapper","","0.02"],["(i-1)","","0.02"],["fcounter","","0.02"],["show_ag","","0.02"],["timer","700","0.02"],["clock()","1000","0.02"],[".countdown","","0.02"],["secondsLeft","","0.02"],["timeLeft--","","0.02"],["/_0x[\\s\\S]*?decodeURIComponent/","","0.02"],["count-","","0.02"],["#download-popup","","0.02"],[".timer","","0.02"],["#download_menu","","0.02"],["r--","","0.02"],["showDownloadButton","","0.02"],["download_link","","0.02"],["onLoop","","0.02"],["timer.remove","","0.02"],["download","","0.02"],["i--","","0.02"]];

const hostnamesMap = new Map([["file-upload.in",0],["linksae.com",0],["wellness4live.com",0],["insuranceinfos.in",0],["urlcut.ninja",1],["tanytech.com",2],["themezon.net",2],["tutwuri.id",3],["mbjremix.com",4],["165.22.246.130",4],["cloudpaten.pro",5],["sparkful.co",6],["mangoai.co",6],["uptoearn.xyz",7],["uploadhaven.com",8],["mamahawa.com",9],["10short.pro",9],["lk21static.xyz",10],["makimbo.xyz",10],["djrudrabasti.in",11],["vstdrive.in",12],["zeroupload.com",13],["bhojpuritop.in",13],["amritadrino.com",[13,47]],["decrypt.day",14],["alpinecorporate.com",15],["theprodkeys.com",16],["forasm.com",17],["heroxcheat.cloud",18],["bloginkz.com",19],["go.freetrx.fun",19],["wpking.in",19],["yifysubtitles.me",19],["michaelemad.com",19],["shtms.co",19],["gitizle.vip",19],["ay.live",19],["techrfour.com",19],["theicongenerator.com",19],["multilinkfz.xyz",19],["yindex.xyz",19],["unityassetcollection.com",19],["earningradar.com",19],["findi.pro",19],["uzunversiyon.xyz",19],["direkizle.xyz",19],["tamindir.mobi",19],["gitlink.pro",19],["aylink.co",19],["moretvtime.com",19],["urlpay.net",19],["claim4.fun",19],["plog.com.br",20],["finsurances.co",21],["fansonlinehub.com",22],["teralink.me",22],["teraearn.com",22],["terashare.me",22],["hotmediahub.com",22],["terabox.fun",22],["covemarkets.com",23],["finclub.in",24],["financeyogi.net",24],["trangchu.news",24],["downfile.site",24],["player.pelisgratishd.io",24],["doibihar.org",24],["educationgyani.com",24],["ffworld.xyz",24],["gawbne.com",24],["forex-trnd.com",[24,49]],["forex-golds.com",24],["cravesandflames.com",25],["novelsapps.com",25],["codesnse.com",25],["speedtorrent.ru",25],["listas.pro",25],["forexit.io",25],["healthy4pepole.com",[25,99,101]],["sitecuatui.xyz",25],["haonguyen.top",25],["androjungle.com",26],["getmodsapk.com",26],["mixrootmods.com",27],["consoleroms.com",27],["romspedia.com",27],["edummm.xyz",27],["shortlinks.tech",28],["dramaworldhd.co",28],["bitefaucet.com",28],["filmypoints.in",[29,35]],["vinstartheme.com",30],["instamod.net",30],["jenismac.com",31],["unityassets4free.com",31],["spacebin.site",31],["freemodapks.com",31],["player.repelis24.rs",32],["dyp.li",33],["linku.to",34],["oneslidephotography.com",35],["apasih.my.id",35],["financekami.com",35],["bico8.com",35],["techyinfo.in",35],["smallinfo.in",35],["techymedies.com",35],["disheye.com",35],["ufacw.com",35],["googledrivelinks.com",35],["technicalatg.com",[35,44]],["7apple.net",35],["arhplyrics.in",35],["netfile.cc",35],["jardima.com",35],["courseforfree.com",35],["tutorial.siberuang.com",35],["segurosdevida.site",35],["surl.li",36],["bankvacency.com",37],["indilinks.xyz",38],["discordbotlist.com",38],["maxsilo.in",39],["starfiles.co",40],["nguyenvanbao.com",41],["androidecuatoriano.xyz",42],["sinonimos.de",43],["atlai.club",43],["blogtechh.com",45],["vavada5com.com",45],["financerites.in",45],["financerites.com",45],["diudemy.com",46],["techboyz.xyz",46],["adslink.pw",46],["3dzip.org",48],["3rabsnews.com",49],["mobileprice.site",49],["bestmobilenew.com",49],["linkjust1.com",49],["vidtome.stream",49],["ta2deem7arbya.com",[50,88]],["eda-ah.com",[50,88]],["modzilla.in",51],["garutpos.com",51],["vrcmods.com",51],["garutexpress.id",51],["getfreecourses.co",52],["dosya.hizliresim.com",53],["vebma.com",54],["pinloker.com",54],["sekilastekno.com",54],["blogmado.com",55],["suaurl.com",56],["webhostingpost.com",57],["wikitraveltips.com",58],["naukrilelo.in",58],["fikper.com",59],["freecoursesonline.me",60],["codingnepalweb.com",[61,149]],["misirtune.blogspot.com",62],["userload.co",63],["dizimini.com",64],["mohammedkhc.com",64],["trendyoum.com",64],["dl.indexmovies.xyz",64],["cheatsquad.gg",64],["mcpedl.com",64],["filese.me",64],["linkslo.com",64],["c1ne.co",64],["pearos.xyz",64],["moddedguru.com",64],["py.md",64],["abhaydigitalmarketer.com",64],["bestshort.xyz",64],["moaplos.com",64],["nullslide.com",64],["mage.si",64],["embed.m3u-cdn.live",64],["embed.tvcdn.live",64],["mastercoria.com",64],["gaminplay.com",[65,105,125]],["gamelopte.com",65],["insurglobal.xyz",65],["sevenjournals.com",65],["digworm.io",66],["br0wsers.com",[67,199]],["hashhackers.com",68],["katdrive.net",68],["newsongs.co.in",68],["altblogger.net",69],["cashearn.cc",69],["subscene.vip",69],["safelink.omglyrics.com",69],["4download.net",69],["acortar.info",69],["kotp1000000.xyz",69],["blog.donia-tech.net",69],["anomize.xyz",69],["boardgamesonline.net",69],["freeudemycourse.com",70],["modshost.net",71],["coincity.in",71],["djxmaza.in",71],["examtadka.com",71],["proviralhost.com",71],["urbharat.xyz",71],["codenova-center.web.app",72],["minecraftalpha.net",73],["aeromods.app",74],["whatsaero.com",74],["pahe.win",74],["financeflix.in",74],["technoflip.in",74],["studyranks.in",74],["flightsim.to",74],["hikarinoakari.com",74],["hikarinoakariost.info",74],["recipesdelite.com",75],["edumaz.com",76],["blisseyhusband.in",76],["bingotingo.com",76],["compressware.in",76],["geektopia.info",76],["freecoursewebsite.com",76],["dosyayukle.biz",76],["freetutorialsus.com",76],["apkmos.com",76],["sfile.mobi",76],["notipostingt.com",77],["cmacked.com",78],["movieflixpro.com",78],["gocmod.com",79],["speedynews.xyz",80],["xmod.in",80],["tecmundo.net",80],["crazyblog.in",[80,123,124]],["studyuo.com",[80,123,124]],["sbkaise.in",80],["janusnotes.com",80],["anime-sanka.com",81],["kiemlua.com",[82,111,156]],["world-trips.net",[82,115]],["newforex.online",[82,111]],["pes-patches.com",83],["data.morsodifame.com",83],["ifile.cc",83],["filemoon.sx",84],["truongblogger.top",85],["koyi.pub",86],["thizissam.in",[87,106]],["alphaantileak.net",87],["o-pro.online",88],["mazen-ve.com",88],["animeuploader.com",88],["konstantinova.net",88],["ontools.net",89],["teknopaid.xyz",89],["asdfiles.com",90],["11bit.co.in",91],["spantechie.com",92],["paste1s.com",93],["note1s.com",93],["easylinkref.com",93],["redirect.dafontvn.com",[94,95]],["samapkstore.com",[94,95]],["andronews18.blogspot.com",[94,95]],["ph.tpaste.net",[94,95]],["sdetectives.id",94],["apps2app.com",94],["pro-bangla.com",94],["cheatermad.com",96],["streamcheck.link",97],["tinyurl.so",97],["tinyurl.is",97],["usanewstoday.club",98],["earnme.club",98],["top1iq.com",99],["sama-pro.com",99],["7misr4day.com",[99,120]],["coursefreedl.com",99],["apkmaza.net",99],["jpopsingles.eu",99],["gplinks.co",99],["mobiget.net",99],["newzflair.com",100],["newzmagic.com",100],["adlice.com",101],["yalla-shoot-now.us",101],["forexeen.us",101],["health-and.me",101],["wondervelocity.com",101],["bluetechno.net",101],["world2our.com",101],["mobi2c.com",[101,111]],["mywatchseries.fun",101],["telepisodes.org",101],["kingtalks.net",101],["maxurlz.com",101],["allcryptoz.net",101],["topcryptoz.net",101],["thaitrieuvi.live",101],["freewebcart.com",101],["safe.kangkimin.com",101],["maxservicesi.com",101],["techhelpbd.com",102],["egyfalcons.com",103],["premads.com",104],["infortechno.com",105],["getintoway.com",105],["gktech.uk",105],["worldmak.com",105],["ftuapps.dev",105],["dl.tech-story.net",105],["themorningtribune.com",105],["veganho.co",105],["veganal.co",105],["mosqam.com",105],["bimo-cash.readi.online",105],["blog.textpage.xyz",105],["claimlite.club",105],["bitcomarket.net",105],["1apple.xyz",105],["mcrypto.club",[105,153]],["gamepure.in",105],["veganab.co",105],["apkmaven.io",105],["choiceappstore.xyz",105],["pn.cgchotbox.com",105],["worldappsstore.xyz",105],["gifans.com",105],["iptvjournal.com",105],["kienthucrangmieng.com",105],["coin-free.com",105],["moddingzone.in",105],["insurance-space.xyz",105],["blognews.in",105],["noithatmyphu.vn",105],["dulichkhanhhoa.net",105],["therootdroid.com",105],["filessrc.com",106],["srcimdb.com",106],["udemycourses.me",106],["eu.tapchipi.com",106],["short.ctvb1.info",106],["citychilli.com",106],["psdly.com",106],["desitvshows.xyz",106],["katmoviehd4.com",106],["download.modsofapk.com",106],["infopedia24.com",106],["linkdecode.com",106],["short-ly.co",107],["upshrink.com",107],["jojo-themes.net",108],["diglink.blogspot.com",109],["th-world.com",109],["za.gl",110],["za.uy",110],["rezence.com",111],["techmody.io",[111,132]],["yoshare.net",111],["mikl4forex.com",[111,156]],["publicananker.com",[111,156]],["aemenstore.com",111],["cazzette.com",111],["truebrandy.com",111],["hookeaudio.com",111],["restorbio.com",111],["medcpu.com",111],["alocd.com",111],["forex-gold.net",[111,115]],["kingsleynyc.com",111],["lucidcam.com",111],["staaker.com",111],["byboe.com",111],["thegoneapp.com",111],["nousdecor.com",111],["alobuu.com",[111,156]],["rodjulian.com",[111,156]],["aloass.com",[111,156]],["taisv.com",[111,156]],["aloguy.com",[111,156]],["alohdd.com",[111,156]],["alogum.com",[111,156]],["alobyt.com",[111,156]],["aloboi.com",[111,156]],["uebnews.online",[111,156]],["aloegg.com",[111,156]],["alofps.com",[111,156]],["pennbookcenter.com",[111,156]],["samfirms.com",112],["appsmodz.com",113],["cararegistrasi.com",114],["healdad.com",115],["gamalk-sehetk.com",115],["yogablogfit.com",116],["vocalley.com",116],["howifx.com",116],["enit.in",116],["skincarie.com",116],["imperialstudy.com",116],["hamsterss.website",117],["apkmb.com",117],["boobychristmas.com",118],["ethereumfaucet.info",119],["tutcourse.com",120],["luckydice.net",120],["coinsearns.com",120],["gdfreak.xyz",120],["doctor-groups.com",120],["crypto-faucet.xyz",120],["mik4mob.com",120],["iklandb.com",120],["urapk.com",120],["dogemate.com",[120,167]],["shorteet.com",120],["earnbits.xyz",120],["bitearns.com",120],["girls-like.me",121],["sonixgvn.net",121],["runmods.com",121],["watchdoge.xyz",122],["informatikamu.id",[123,124]],["technicalatg.xyz",[123,124]],["taregna.com",[123,124]],["toolss.net",[123,124]],["tutsgalaxy.net",[123,124]],["otomi-games.com",[124,162]],["yifysub.net",126],["cdmstudy.site",127],["insurance.recipesdelite.com",127],["allbuzzin.com",[128,129]],["file.bospedia.com",130],["toptap.website",131],["adnit-tri.tk",131],["boomx5.com",131],["howtofree.org",133],["rethmic.com",134],["majidzhacker.com",[135,136]],["itscybertech.com",137],["gold-24.net",138],["3rabsports.com",138],["forexrw7.com",138],["fx-22.com",138],["forexmab.com",138],["forexwaw.club",138],["forex-articles.com",138],["linkjust.com",138],["forexlap.com",138],["shareappscrack.com",139],["oiipdf.com",140],["upstore.net",141],["subs4series.com",142],["gamingforecast.com",143],["icutlink.com",144],["android-apk.org",144],["semawur.com",144],["zegtrends.com",145],["littlebyte.net",146],["megadescargas.net",147],["blyts.net",147],["lawebdelprogramador.com",148],["win10.vn",150],["wildfaucets.ml",150],["faucet.cryptourl.net",150],["dogeatm.com",150],["claimbits.io",150],["i-bits.io",150],["diamondfaucet.space",150],["gobits.io",150],["russiacoin.xyz",150],["starsfaucet.com",150],["lionltcfaucet.xyz",150],["faucet.shorterall.com",150],["yellowfaucet.ovh",150],["bollypluse.in",151],["freecourseslab.com",152],["freetutorialseu.com",152],["informaxonline.com",[153,175]],["tipslearn.com",153],["androidnougatapk.com",153],["siberuang.com",153],["waaboom.com",153],["healthymaster.xyz",153],["bkksnews.xyz",153],["faucetcrypto.com",154],["techoow.com",155],["mynewsmedia.in",156],["mynewshub.co",156],["techbigs.com",157],["kiktu.com",158],["technicalegy.com",159],["wallpaperaccess.com",160],["uniqueten.net",163],["ultraten.net",163],["elil.cc",164],["game-kentang.blogspot.com",165],["upfile.us",165],["mad4wheels.com",166],["moviesdaweb.blogspot.com",168],["dlsharefile.com",169],["eco-area.com",170],["safelink.rezkozpatch.xyz",[171,172]],["onlinecoursebay.com",173],["kazanclilink.com",174],["emulatorgames.net",176],["iptv4best.com",177],["leechall.com",178],["kpopstan.com",179],["ouo.io",180],["cpmlink.net",180],["short-url.link",181],["findicons.com",182],["nulleb.com",183],["bfas237blog.info",184],["dr-farfar.net",185],["saungfirmware.id",186],["goossh.com",187],["onlinefreecourse.net",188],["site.dz4win.com",189],["thingiverse.com",190],["linkerload.com",191],["ockles.com",191],["ljutkeunvpn.blogspot.com",191],["mobilelegends.shop",191],["linksaya.com",192],["phpscripttr.com",193],["essek.gen.tr",193],["indir.turkceyama.net",193],["clicads.fr",193],["mazakony.net",193],["5mod-file.ru",194],["genlink.cc",195],["apkprofree.com",196],["zedge.net",197],["hakdisk.ru",198],["diskapk.ru",198],["softwaresde.com",199],["tr.link",200],["ds2play.com",202],["doods.pro",202],["dooood.com",202],["dood.yt",202],["dood.re",202],["dood.wf",202],["dood.la",202],["dood.pm",202],["dood.so",202],["dood.to",202],["dood.watch",202],["dood.ws",202],["nightfallnews.com",203],["retrostic.com",204],["shiroyasha.me",205],["bolicheintercambios.net",206],["lg-firmwares.com",207],["sfirmware.com",207],["imgqec.online",208],["imgwbfh.online",208],["imgyer.store",208],["imgxuh.cfd",208],["imgngc.sbs",208],["imgezx.sbs",208],["imgxza.store",208],["imgwqr.online",208],["imagehaha.com",208],["imgpukrr.site",208],["imagent.buzz",208],["imagepuitr.buzz",208],["imgblaze.net",208],["imgkorle.buzz",208],["imgkaka.xyz",208],["pixsera.net",208],["imgfrost.net",208],["imgair.net",208],["wallpaperplay.com",209],["lnk.parts",210],["lnk.news",210],["sammobile.com",211],["bomurl.com",212],["go.geghost.com",213],["romhustler.org",214],["a2zupload.com",215],["bluemediastorage.online",216],["dl.pcgamestorrents.org",216],["get-url.com",216]]);

const entitiesMap = new Map([["lootlinks",74],["ibomma",88],["animesanka",161],["akwam",201],["bluemediafile",216],["bluemediafiles",216]]);

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
