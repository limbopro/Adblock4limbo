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

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["myTimer","*","0.02"],["countdown","*","0.001"],["wpsafe-countdown2","*","0.002"],["timer","*","0.001"],["count","*","0.001"],["=--","*","0.001"],["pleasewait","*","0.001"],["tp-time","*","0.001"],["innerHTML=`Wait"],["/wpsafe|wait|timer/","*","0.001"],[".html()","*","0.001"],["return e-1","*","0.001"],["generateDownloadLink","*","0.001"],["countDown()","*","0.28"],["/proceed|mdtimer/","*","0.001"],["time","*","0.02"],["Popup will close in","*","0.001"],["time--","*","0.001"],["update","*","0.001"],["counter","*","0.001"],["/wpsafe-|timeLeft/","*","0.001"],["wpsafe-","*","0.001"],["mdtimer","*","0.001"],["timer","","0.02"],["counter"],["clearInterval","*","0.001"],["wait","*","0.02"],["count","*","0.02"],["counter","*","0.02"],["download","*","0.02"],["timeLeft","*","0.02"],["timeLeft","","0.02"],["/_0x|wpsafe-/","*","0.02"],["Download","*","0.02"],["counter--","*","0.02"],["count--","*","0.02"],["p--","","0.02"],["current()","*","0.02"],["wpsafe-","*","0.02"],["disabled","*","0.02"],["timePassed","*","0.02"],["countdown","*","0.02"],["/Seconds|download/","*","0.02"],["download_progress","*","0.02"],["count","1600","0.02"],["downloadButton","*","0.02"],["waitTime","*","0.02"],["timer","*","0.02"],["timeSec--","*","0.02"],["_0x","*","0.02"],["wpsafe-generate","*","0.02"],["document.hidden","*","0.02"],["#mdtimer","","0.02"],["updatePercentage","*","0.02"],["timePassed","","0.02"],["DOWNLOAD","*","0.02"],["Number","","0.02"],["/counter|wait/","*","0.02"],["get-link","*","0.02"],[",dataType:_","1000","0.02"],["/wpsafe|count/","*","0.02"],["downloadToken","*","0.02"],["/timeLeft|wpsafe-/","*","0.02"],["cnDownloadBtn","*","0.02"],["download_link","*","0.02"],["countdown","","0.02"],["yuidea-","*","0.02"],["timer--","*","0.02"],["success","","0.02"],["/verify_text|isCompleted/","*","0.02"],["#timer","","0.02"],["countdownwrapper","","0.02"],["timeleft","*","0.02"],["contador","*","0.02"],["Your Link","","0.02"],["count","","0.02"],["/download|Please/","","0.02"],["downloadButton","","0.02"],["window.location.href= atob(","1000","0.02"],[".show_download_links","","0.02"],["/\\.text\\(\\)&&\\(clearInterval|download-btn/","*","0.02"],["updatePercentage","100","0.02"],["decodeURIComponent(link)","","0.02"],["/count-|-wait/","*","0.02"],["waktu--","","0.02"],[".download","","0.02"],["/base-timer-label|waktu--/","","0.02"],["curCount","","0.02"],["Please wait","","0.02"],["mdtimer","","0.02"],["gotolink","*","0.02"],["seconds--","*","0.02"],["claim_button","*","0.02"],["/Please Wait|Generating Links/","*","0.02"],["#second","","0.02"],["#countdown","","0.02"],["progressbar","30","0.02"],["#upbtn","","0.02"],["skip-btn","*","0.02"],["tp-","*","0.02"],["downloadTimer","","0.02"],["/Please Wait|Go to download/","","0.02"],["counter","","0.02"],["/counter--|downloadButton/","","0.02"],["location","","0.02"],["myCounter","*","0.001"],["/wpsafe|wait/","*","0.001"],["counter--","","0.02"],["pleasewait","","0.02"],["bb_download_delay","","0.02"],["0x","","0.02"],["timeCount","*","0.2"],["counter","2000","0.02"],["downloadLinkButton","*","0.02"],["startChecking","*","0.02"],["timer","1000","0.02"],["timeleft","","0.02"],["timeSec--","*","0.001"],["show_download_links","","0.02"],["REDIRECTING","*","0.02"],["ct","1000","0.02"],["sec--","","0.02"],["count--","","0.02"],["sec","","0.02"],["wpsafe-","","0.02"],["wpsafe-","2000","0.02"],["wpsafe-","1500","0.02"],["get-link","","0.02"],["download","2000","0.02"],["timer","1500","0.02"],["timer","2000","0.02"],["Link","550","0.02"],["#proceed","","0.02"],["counter","1800","0.02"],["downloadButton","1500","0.02"],["sp-count-down","","0.02"],["gotolink","","0.02"],["btngetlink","30","0.02"],["btn","","0.02"],["sec--","","0.001"],["/show_download_links|downloadTimer/","","0.02"],["timeinterval","","0.02"],["countDown","1150","0.5"],["makingdifferenttimer","50","0.02"],["Link()","","0.02"],["time","","0.02"],["time","2500","0.02"],["freeRemind","","0.02"],["contador","","0.02"],["contador--","","0.02"],["counter--","1300","0.02"],["seconds","","0.02"],["downloadButton","1000","0.02"],["counter","1000","0.02"],["wpsafe-generate","","0.02"],["timerText","","0.02"],["counter","1500","0.02"],["download-count-down","","0.02"],["runTimer","","0.02"],["[0x","","0.02"],["#download","","0.02"],["percentVal","30","0.02"],["wpsafe-generate","1000","0.02"],["wpsafe","","0.02"],["timer","1000","0.6"],["","1000","0.05"],["second--","","0.02"],["#bt","","0.02"],["counter--","100","0.02"],["#Download-Card","","0.02"],[".stop()","","0.02"],["Link will appear","510","0.02"],["Link will appear","1010","0.02"],["countdown","2000","0.02"],["sayimiBaslat","","0.02"],["wpsafe-link","2000","0.02"],["#eg-timer","","0.3"],["#CountDown","","0.02"],["dllink","","0.02"],["time--","","0.02"],["stop()","","0.02"],["second","1000","0.02"],["wait_seconds","","0.02"],["download-countdown","","0.02"],["current_progress","2000","0.02"],["display()","","0.02"],["get_link","","0.02"],["goToLink","2200","0.02"],[".countdown","2000","0.02"],["urll","800","0.02"],["Downloading","","0.02"],["linkDL","","0.02"],["downloadButton","2400","0.02"],["#pleasewait","","0.02"],[".fcounter span","","0.02"],["real-link","","0.02"],[".wpapks-download-link-wrapper","","0.02"],["(i-1)","","0.02"],["fcounter","","0.02"],["show_ag","","0.02"],["timer","700","0.02"],["clock()","1000","0.02"],[".countdown","","0.02"],["secondsLeft","","0.02"],["timeLeft--","","0.02"],["/_0x[\\s\\S]*?decodeURIComponent/","","0.02"],["count-","","0.02"],["#download-popup","","0.02"],[".timer","","0.02"],["#download_menu","","0.02"],["r--","","0.02"],["showDownloadButton","","0.02"],["download_link","","0.02"],["onLoop","","0.02"],["timer.remove","","0.02"],["download","","0.02"],["i--","","0.02"]];

const hostnamesMap = new Map([["minijankari.com",0],["nhmgujarat.in",0],["jobwaala.in",0],["w3hindi.in",0],["kaisekareblog.com",0],["iplquotes.com",0],["newzwala.co.in",0],["jobkijankari.in",0],["newsloti.com",0],["theringtonesworld.in",0],["indisarkrijob.com",0],["remixpapa.in",0],["azcodinghub.com",0],["hindikahanistory.in",0],["jkssbnotes.com",0],["taazatimes24.com",0],["megashayari.com",0],["dhamakamusics.in",0],["onlinehelpblog.com",0],["techlokye.com",0],["rojgarsamachar.xyz",0],["acejankari.com",0],["odishadjss.in",0],["sbkeditsofficials.in",0],["mktechword.com",0],["picassoappk.com",0],["finley-aaron-love.com",0],["bmremix.in",0],["odiasongmuzic.com",0],["rktemplates.in",0],["seobar.in",0],["bharatsarkarijobalert.com",0],["englishbhaiya.co.in",0],["news21usa.com",0],["gachalifeoldversionapk.net",0],["jankarihubedu21.com",0],["mpscstudyhub.com",0],["djppclub.com",0],["1stepforlife.in",0],["indiasarkari.com",0],["djrajurjm.in",0],["ojasnew.in",0],["myfirstname.in",0],["extraking.in",0],["mystudyhelp.in",0],["wwneed.com",0],["aditechz.com",0],["ccrushapp.com",0],["latestpikashowapk.com",0],["blog24.me",0],["onpointgame.net",0],["blogviewers.com",0],["satyaclub.in",0],["freemodapp.com",0],["howmany.co.in",0],["iwitnessnews.in",0],["doge25.in",0],["nokrimilegi.in",0],["kejriwalyojana.com",0],["netflixrelease.com",0],["onlinegratuitycalculator.com",0],["gplinks.co",[0,100]],["rontymobile.in",0],["globlenews.in",0],["ipalibrary.me",1],["sanemoku.com",1],["plog.com.br",1],["panda.studyis.xyz",2],["bishalghale.com.np",3],["file-upload.in",3],["linksae.com",3],["wellness4live.com",3],["insuranceinfos.in",3],["zeroupload.com",4],["bhojpuritop.in",4],["amritadrino.com",[4,50]],["apkmoddone.phongroblox.com",5],["file.apkmoddone.com",5],["urlcut.ninja",6],["tanytech.com",7],["themezon.net",7],["tutwuri.id",8],["mbjremix.com",9],["165.22.246.130",9],["cloudpaten.pro",10],["sparkful.co",11],["mangoai.co",11],["uptoearn.xyz",12],["uploadhaven.com",13],["mamahawa.com",14],["10short.pro",14],["lk21static.xyz",15],["dl.lk21static.xyz",15],["makimbo.xyz",15],["djrudrabasti.in",16],["vstdrive.in",17],["decrypt.day",18],["alpinecorporate.com",19],["theprodkeys.com",20],["forasm.com",21],["heroxcheat.cloud",22],["bloginkz.com",23],["go.freetrx.fun",23],["wpking.in",23],["yifysubtitles.me",23],["michaelemad.com",23],["shtms.co",23],["gitizle.vip",23],["ay.live",23],["techrfour.com",23],["theicongenerator.com",23],["multilinkfz.xyz",23],["yindex.xyz",23],["unityassetcollection.com",23],["earningradar.com",23],["findi.pro",23],["uzunversiyon.xyz",23],["direkizle.xyz",23],["tamindir.mobi",23],["gitlink.pro",23],["aylink.co",23],["moretvtime.com",23],["urlpay.net",23],["claim4.fun",23],["finsurances.co",24],["fansonlinehub.com",25],["teralink.me",25],["teraearn.com",25],["terashare.me",25],["hotmediahub.com",25],["terabox.fun",25],["covemarkets.com",26],["finclub.in",27],["financeyogi.net",27],["trangchu.news",27],["downfile.site",27],["player.pelisgratishd.io",27],["doibihar.org",27],["educationgyani.com",27],["ffworld.xyz",27],["gawbne.com",27],["forex-trnd.com",[27,52]],["forex-golds.com",27],["cravesandflames.com",28],["novelsapps.com",28],["codesnse.com",28],["speedtorrent.ru",28],["listas.pro",28],["forexit.io",28],["healthy4pepole.com",[28,100,102]],["sitecuatui.xyz",28],["haonguyen.top",28],["androjungle.com",29],["getmodsapk.com",29],["mixrootmods.com",[30,106]],["consoleroms.com",30],["romspedia.com",30],["edummm.xyz",30],["shortlinks.tech",31],["dramaworldhd.co",31],["bitefaucet.com",31],["filmypoints.in",[32,38]],["vinstartheme.com",33],["instamod.net",33],["jenismac.com",34],["unityassets4free.com",34],["spacebin.site",34],["freemodapks.com",34],["player.repelis24.rs",35],["dyp.li",36],["linku.to",37],["oneslidephotography.com",38],["apasih.my.id",38],["financekami.com",38],["bico8.com",38],["techyinfo.in",38],["smallinfo.in",38],["techymedies.com",38],["disheye.com",38],["ufacw.com",38],["googledrivelinks.com",38],["technicalatg.com",[38,47]],["7apple.net",38],["arhplyrics.in",38],["netfile.cc",38],["jardima.com",38],["courseforfree.com",38],["tutorial.siberuang.com",38],["segurosdevida.site",38],["surl.li",39],["bankvacency.com",40],["indilinks.xyz",41],["discordbotlist.com",41],["maxsilo.in",42],["starfiles.co",43],["nguyenvanbao.com",44],["androidecuatoriano.xyz",45],["sinonimos.de",46],["atlai.club",46],["blogtechh.com",48],["vavada5com.com",48],["financerites.in",48],["financerites.com",48],["diudemy.com",49],["techboyz.xyz",49],["adslink.pw",49],["3dzip.org",51],["3rabsnews.com",52],["mobileprice.site",52],["bestmobilenew.com",52],["linkjust1.com",52],["vidtome.stream",52],["ta2deem7arbya.com",[53,89]],["eda-ah.com",[53,89]],["modzilla.in",54],["garutpos.com",54],["vrcmods.com",54],["garutexpress.id",54],["getfreecourses.co",55],["dosya.hizliresim.com",56],["vebma.com",57],["pinloker.com",57],["sekilastekno.com",57],["blogmado.com",58],["webhostingpost.com",59],["wikitraveltips.com",60],["naukrilelo.in",60],["fikper.com",61],["freecoursesonline.me",62],["codingnepalweb.com",[63,150]],["misirtune.blogspot.com",64],["dizimini.com",65],["mohammedkhc.com",65],["trendyoum.com",65],["cheatsquad.gg",65],["mcpedl.com",65],["filese.me",65],["linkslo.com",65],["c1ne.co",65],["pearos.xyz",65],["moddedguru.com",65],["py.md",65],["abhaydigitalmarketer.com",65],["bestshort.xyz",65],["moaplos.com",65],["nullslide.com",65],["mage.si",65],["embed.m3u-cdn.live",65],["embed.tvcdn.live",65],["mastercoria.com",65],["gaminplay.com",[66,106,126]],["gamelopte.com",66],["insurglobal.xyz",66],["sevenjournals.com",66],["digworm.io",67],["br0wsers.com",[68,199]],["hashhackers.com",69],["katdrive.net",69],["newsongs.co.in",69],["altblogger.net",70],["cashearn.cc",70],["subscene.vip",70],["safelink.omglyrics.com",70],["4download.net",70],["acortar.info",70],["kotp1000000.xyz",70],["blog.donia-tech.net",70],["anomize.xyz",70],["boardgamesonline.net",70],["freeudemycourse.com",71],["modshost.net",72],["coincity.in",72],["djxmaza.in",72],["examtadka.com",72],["proviralhost.com",72],["urbharat.xyz",72],["codenova-center.web.app",73],["minecraftalpha.net",74],["aeromods.app",75],["whatsaero.com",75],["pahe.win",75],["financeflix.in",75],["technoflip.in",75],["studyranks.in",75],["flightsim.to",75],["hikarinoakari.com",75],["hikarinoakariost.info",75],["recipesdelite.com",76],["edumaz.com",77],["blisseyhusband.in",77],["bingotingo.com",77],["compressware.in",77],["geektopia.info",77],["freecoursewebsite.com",77],["dosyayukle.biz",77],["freetutorialsus.com",77],["apkmos.com",77],["sfile.mobi",77],["notipostingt.com",78],["cmacked.com",79],["movieflixpro.com",79],["gocmod.com",80],["speedynews.xyz",81],["xmod.in",81],["tecmundo.net",81],["crazyblog.in",[81,124,125]],["studyuo.com",[81,124,125]],["sbkaise.in",81],["janusnotes.com",81],["anime-sanka.com",82],["kiemlua.com",[83,112,156]],["world-trips.net",[83,116]],["newforex.online",[83,112]],["pes-patches.com",84],["data.morsodifame.com",84],["ifile.cc",84],["filemoon.sx",85],["truongblogger.top",86],["koyi.pub",87],["thizissam.in",[88,107]],["alphaantileak.net",88],["o-pro.online",89],["mazen-ve.com",89],["animeuploader.com",89],["konstantinova.net",89],["ontools.net",90],["teknopaid.xyz",90],["asdfiles.com",91],["11bit.co.in",92],["spantechie.com",93],["paste1s.com",94],["note1s.com",94],["easylinkref.com",94],["redirect.dafontvn.com",[95,96]],["samapkstore.com",[95,96]],["andronews18.blogspot.com",[95,96]],["ph.tpaste.net",[95,96]],["sdetectives.id",95],["apps2app.com",95],["pro-bangla.com",95],["cheatermad.com",97],["streamcheck.link",98],["tinyurl.so",98],["tinyurl.is",98],["usanewstoday.club",99],["earnme.club",99],["top1iq.com",100],["sama-pro.com",100],["7misr4day.com",[100,121]],["coursefreedl.com",100],["apkmaza.net",100],["jpopsingles.eu",100],["mobiget.net",100],["newzflair.com",101],["newzmagic.com",101],["adlice.com",102],["yalla-shoot-now.us",102],["forexeen.us",102],["health-and.me",102],["wondervelocity.com",102],["bluetechno.net",102],["world2our.com",102],["mobi2c.com",[102,112]],["mywatchseries.fun",102],["telepisodes.org",102],["kingtalks.net",102],["maxurlz.com",102],["allcryptoz.net",102],["topcryptoz.net",102],["thaitrieuvi.live",102],["freewebcart.com",102],["safe.kangkimin.com",102],["maxservicesi.com",102],["techhelpbd.com",103],["egyfalcons.com",104],["premads.com",105],["leeapk.com",106],["mealcold.com",106],["foodxor.com",106],["freemodsapp.xyz",106],["mayaremix.in",106],["infortechno.com",106],["getintoway.com",106],["gktech.uk",106],["worldmak.com",106],["ftuapps.dev",106],["dl.tech-story.net",106],["themorningtribune.com",106],["veganho.co",106],["veganal.co",106],["mosqam.com",106],["bimo-cash.readi.online",106],["blog.textpage.xyz",106],["claimlite.club",106],["bitcomarket.net",106],["1apple.xyz",106],["mcrypto.club",[106,154]],["gamepure.in",106],["veganab.co",106],["apkmaven.io",106],["choiceappstore.xyz",106],["pn.cgchotbox.com",106],["worldappsstore.xyz",106],["gifans.com",106],["iptvjournal.com",106],["kienthucrangmieng.com",106],["coin-free.com",106],["moddingzone.in",106],["insurance-space.xyz",106],["blognews.in",106],["noithatmyphu.vn",106],["dulichkhanhhoa.net",106],["therootdroid.com",106],["filessrc.com",107],["srcimdb.com",107],["udemycourses.me",107],["eu.tapchipi.com",107],["short.ctvb1.info",107],["citychilli.com",107],["psdly.com",107],["desitvshows.xyz",107],["katmoviehd4.com",107],["download.modsofapk.com",107],["infopedia24.com",107],["linkdecode.com",107],["short-ly.co",108],["upshrink.com",108],["jojo-themes.net",109],["diglink.blogspot.com",110],["th-world.com",110],["za.gl",111],["za.uy",111],["rezence.com",112],["techmody.io",[112,133]],["yoshare.net",112],["mikl4forex.com",[112,156]],["publicananker.com",[112,156]],["aemenstore.com",112],["cazzette.com",112],["truebrandy.com",112],["hookeaudio.com",112],["restorbio.com",112],["medcpu.com",112],["alocd.com",112],["forex-gold.net",[112,116]],["kingsleynyc.com",112],["lucidcam.com",112],["staaker.com",112],["byboe.com",112],["thegoneapp.com",112],["nousdecor.com",112],["alobuu.com",[112,156]],["rodjulian.com",[112,156]],["aloass.com",[112,156]],["taisv.com",[112,156]],["aloguy.com",[112,156]],["alohdd.com",[112,156]],["alogum.com",[112,156]],["alobyt.com",[112,156]],["aloboi.com",[112,156]],["uebnews.online",[112,156]],["aloegg.com",[112,156]],["alofps.com",[112,156]],["pennbookcenter.com",[112,156]],["samfirms.com",113],["appsmodz.com",114],["cararegistrasi.com",115],["healdad.com",116],["gamalk-sehetk.com",116],["healthfirstweb.com",117],["yogablogfit.com",117],["vocalley.com",117],["howifx.com",117],["enit.in",117],["skincarie.com",117],["imperialstudy.com",117],["hamsterss.website",118],["apkmb.com",118],["boobychristmas.com",119],["ethereumfaucet.info",120],["tutcourse.com",121],["luckydice.net",121],["coinsearns.com",121],["gdfreak.xyz",121],["doctor-groups.com",121],["crypto-faucet.xyz",121],["mik4mob.com",121],["iklandb.com",121],["urapk.com",121],["dogemate.com",[121,167]],["shorteet.com",121],["earnbits.xyz",121],["bitearns.com",121],["girls-like.me",122],["sonixgvn.net",122],["runmods.com",122],["watchdoge.xyz",123],["informatikamu.id",[124,125]],["technicalatg.xyz",[124,125]],["taregna.com",[124,125]],["toolss.net",[124,125]],["tutsgalaxy.net",[124,125]],["otomi-games.com",[125,162]],["yifysub.net",127],["cdmstudy.site",128],["insurance.recipesdelite.com",128],["allbuzzin.com",[129,130]],["file.bospedia.com",131],["toptap.website",132],["adnit-tri.tk",132],["boomx5.com",132],["howtofree.org",134],["rethmic.com",135],["majidzhacker.com",[136,137]],["itscybertech.com",138],["gold-24.net",139],["3rabsports.com",139],["forexrw7.com",139],["fx-22.com",139],["forexmab.com",139],["forexwaw.club",139],["forex-articles.com",139],["linkjust.com",139],["forexlap.com",139],["shareappscrack.com",140],["oiipdf.com",141],["upstore.net",142],["subs4series.com",143],["gamingforecast.com",144],["icutlink.com",145],["android-apk.org",145],["semawur.com",145],["zegtrends.com",146],["littlebyte.net",147],["megadescargas.net",148],["blyts.net",148],["lawebdelprogramador.com",149],["win10.vn",151],["wildfaucets.ml",151],["faucet.cryptourl.net",151],["dogeatm.com",151],["claimbits.io",151],["i-bits.io",151],["diamondfaucet.space",151],["gobits.io",151],["russiacoin.xyz",151],["starsfaucet.com",151],["lionltcfaucet.xyz",151],["faucet.shorterall.com",151],["yellowfaucet.ovh",151],["bollypluse.in",152],["freecourseslab.com",153],["freetutorialseu.com",153],["informaxonline.com",[154,175]],["tipslearn.com",154],["androidnougatapk.com",154],["siberuang.com",154],["waaboom.com",154],["healthymaster.xyz",154],["bkksnews.xyz",154],["faucetcrypto.com",155],["mynewsmedia.in",156],["mynewshub.co",156],["techbigs.com",157],["kiktu.com",158],["technicalegy.com",159],["wallpaperaccess.com",160],["uniqueten.net",163],["ultraten.net",163],["elil.cc",164],["game-kentang.blogspot.com",165],["upfile.us",165],["mad4wheels.com",166],["moviesdaweb.blogspot.com",168],["dlsharefile.com",169],["eco-area.com",170],["safelink.rezkozpatch.xyz",[171,172]],["onlinecoursebay.com",173],["kazanclilink.com",174],["emulatorgames.net",176],["iptv4best.com",177],["leechall.com",178],["kpopstan.com",179],["ouo.io",180],["cpmlink.net",180],["short-url.link",181],["findicons.com",182],["nulleb.com",183],["bfas237blog.info",184],["dr-farfar.net",185],["saungfirmware.id",186],["goossh.com",187],["onlinefreecourse.net",188],["site.dz4win.com",189],["thingiverse.com",190],["linkerload.com",191],["ockles.com",191],["ljutkeunvpn.blogspot.com",191],["mobilelegends.shop",191],["linksaya.com",192],["phpscripttr.com",193],["essek.gen.tr",193],["indir.turkceyama.net",193],["clicads.fr",193],["mazakony.net",193],["5mod-file.ru",194],["genlink.cc",195],["apkprofree.com",196],["zedge.net",197],["hakdisk.ru",198],["diskapk.ru",198],["softwaresde.com",199],["tr.link",200],["d0000d.com",202],["do0od.com",202],["ds2play.com",202],["doods.pro",202],["dooood.com",202],["dood.yt",202],["dood.re",202],["dood.wf",202],["dood.la",202],["dood.pm",202],["dood.so",202],["dood.to",202],["dood.watch",202],["dood.ws",202],["nightfallnews.com",203],["retrostic.com",204],["shiroyasha.me",205],["bolicheintercambios.net",206],["lg-firmwares.com",207],["sfirmware.com",207],["imgqec.online",208],["imgwbfh.online",208],["imgyer.store",208],["imgxuh.cfd",208],["imgngc.sbs",208],["imgezx.sbs",208],["imgxza.store",208],["imgwqr.online",208],["imagehaha.com",208],["imgpukrr.site",208],["imagent.buzz",208],["imagepuitr.buzz",208],["imgblaze.net",208],["imgkorle.buzz",208],["imgkaka.xyz",208],["pixsera.net",208],["imgfrost.net",208],["imgair.net",208],["wallpaperplay.com",209],["lnk.parts",210],["lnk.news",210],["sammobile.com",211],["bomurl.com",212],["go.geghost.com",213],["romhustler.org",214],["a2zupload.com",215],["bluemediadownload.lat",216],["bluemediaurls.lol",216],["bluemedialink.online",216],["dl.pcgamestorrents.org",216],["get-url.com",216]]);

const entitiesMap = new Map([["privatemoviez",4],["lootlinks",75],["ibomma",89],["animesanka",161],["akwam",201],["bluemediafile",216],["bluemediafiles",216]]);

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
