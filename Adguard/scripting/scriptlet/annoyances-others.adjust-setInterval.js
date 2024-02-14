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

const argsList = [["myTimer","*","0.02"],["countdown","*","0.001"],["wpsafe-countdown2","*","0.002"],["timer","*","0.001"],["count","*","0.001"],["=--","*","0.001"],["pleasewait","*","0.001"],["tp-time","*","0.001"],["innerHTML=`Wait"],["/wpsafe|wait|timer/","*","0.001"],[".html()","*","0.001"],["return e-1","*","0.001"],["generateDownloadLink","*","0.001"],["countDown()","*","0.28"],["/proceed|mdtimer/","*","0.001"],["time","*","0.02"],["Popup will close in","*","0.001"],["time--","*","0.001"],["update","*","0.001"],["counter","*","0.001"],["/wpsafe-|timeLeft/","*","0.001"],["wpsafe-","*","0.001"],["mdtimer","*","0.001"],["timer","","0.02"],["counter"],["clearInterval","*","0.001"],["wait","*","0.02"],["count","*","0.02"],["counter","*","0.02"],["download","*","0.02"],["timeLeft","*","0.02"],["timeLeft","","0.02"],["/_0x|wpsafe-/","*","0.02"],["Download","*","0.02"],["counter--","*","0.02"],["count--","*","0.02"],["p--","","0.02"],["current()","*","0.02"],["wpsafe-","*","0.02"],["disabled","*","0.02"],["timePassed","*","0.02"],["countdown","*","0.02"],["/Seconds|download/","*","0.02"],["download_progress","*","0.02"],["count","1600","0.02"],["downloadButton","*","0.02"],["waitTime","*","0.02"],["timer","*","0.02"],["timeSec--","*","0.02"],["_0x","*","0.02"],["wpsafe-generate","*","0.02"],["document.hidden","*","0.02"],["#mdtimer","","0.02"],["updatePercentage","*","0.02"],["timePassed","","0.02"],["DOWNLOAD","*","0.02"],["Number","","0.02"],["/counter|wait/","*","0.02"],["get-link","*","0.02"],[",dataType:_","1000","0.02"],["/wpsafe|count/","*","0.02"],["downloadToken","*","0.02"],["/timeLeft|wpsafe-/","*","0.02"],["cnDownloadBtn","*","0.02"],["download_link","*","0.02"],["secondsleft","*","0.02"],["countdown","","0.02"],["yuidea-","*","0.02"],["timer--","*","0.02"],["success","","0.02"],["/verify_text|isCompleted/","*","0.02"],["#timer","","0.02"],["countdownwrapper","","0.02"],["timeleft","*","0.02"],["contador","*","0.02"],["Your Link","","0.02"],["count","","0.02"],["/download|Please/","","0.02"],["downloadButton","","0.02"],["window.location.href= atob(","1000","0.02"],[".show_download_links","","0.02"],["/\\.text\\(\\)&&\\(clearInterval|download-btn/","*","0.02"],["updatePercentage","100","0.02"],["decodeURIComponent(link)","","0.02"],["/count-|-wait/","*","0.02"],["waktu--","","0.02"],[".download","","0.02"],["/base-timer-label|waktu--/","","0.02"],["curCount","","0.02"],["Please wait","","0.02"],["mdtimer","","0.02"],["gotolink","*","0.02"],["seconds--","*","0.02"],["claim_button","*","0.02"],["/Please Wait|Generating Links/","*","0.02"],["#second","","0.02"],["#countdown","","0.02"],["progressbar","30","0.02"],["#upbtn","","0.02"],["skip-btn","*","0.02"],["tp-","*","0.02"],["downloadTimer","","0.02"],["/Please Wait|Go to download/","","0.02"],["counter","","0.02"],["/counter--|downloadButton/","","0.02"],["location","","0.02"],["myCounter","*","0.001"],["/wpsafe|wait/","*","0.001"],["counter--","","0.02"],["pleasewait","","0.02"],["bb_download_delay","","0.02"],["0x","","0.02"],["timeCount","*","0.2"],["counter","2000","0.02"],["downloadLinkButton","*","0.02"],["startChecking","*","0.02"],["timer","1000","0.02"],["timeleft","","0.02"],["timeSec--","*","0.001"],["show_download_links","","0.02"],["REDIRECTING","*","0.02"],["ct","1000","0.02"],["sec--","","0.02"],["count--","","0.02"],["sec","","0.02"],["wpsafe-","","0.02"],["wpsafe-","2000","0.02"],["wpsafe-","1500","0.02"],["get-link","","0.02"],["download","2000","0.02"],["timer","1500","0.02"],["timer","2000","0.02"],["Link","550","0.02"],["#proceed","","0.02"],["counter","1800","0.02"],["downloadButton","1500","0.02"],["sp-count-down","","0.02"],["gotolink","","0.02"],["btngetlink","30","0.02"],["btn","","0.02"],["sec--","","0.001"],["/show_download_links|downloadTimer/","","0.02"],["timeinterval","","0.02"],["countDown","1150","0.5"],["makingdifferenttimer","50","0.02"],["Link()","","0.02"],["time","","0.02"],["time","2500","0.02"],["freeRemind","","0.02"],["contador","","0.02"],["contador--","","0.02"],["counter--","1300","0.02"],["seconds","","0.02"],["downloadButton","1000","0.02"],["counter","1000","0.02"],["wpsafe-generate","","0.02"],["timerText","","0.02"],["counter","1500","0.02"],["download-count-down","","0.02"],["runTimer","","0.02"],["[0x","","0.02"],["#download","","0.02"],["percentVal","30","0.02"],["wpsafe-generate","1000","0.02"],["wpsafe","","0.02"],["timer","1000","0.6"],["","1000","0.05"],["second--","","0.02"],["#bt","","0.02"],["counter--","100","0.02"],["#Download-Card","","0.02"],[".stop()","","0.02"],["Link will appear","510","0.02"],["Link will appear","1010","0.02"],["countdown","2000","0.02"],["sayimiBaslat","","0.02"],["wpsafe-link","2000","0.02"],["#eg-timer","","0.3"],["#CountDown","","0.02"],["dllink","","0.02"],["time--","","0.02"],["stop()","","0.02"],["second","1000","0.02"],["wait_seconds","","0.02"],["download-countdown","","0.02"],["current_progress","2000","0.02"],["display()","","0.02"],["get_link","","0.02"],["goToLink","2200","0.02"],[".countdown","2000","0.02"],["urll","800","0.02"],["Downloading","","0.02"],["linkDL","","0.02"],["downloadButton","2400","0.02"],["#pleasewait","","0.02"],[".fcounter span","","0.02"],["real-link","","0.02"],[".wpapks-download-link-wrapper","","0.02"],["(i-1)","","0.02"],["fcounter","","0.02"],["show_ag","","0.02"],["timer","700","0.02"],["clock()","1000","0.02"],[".countdown","","0.02"],["secondsLeft","","0.02"],["timeLeft--","","0.02"],["/_0x[\\s\\S]*?decodeURIComponent/","","0.02"],["count-","","0.02"],["#download-popup","","0.02"],[".timer","","0.02"],["#download_menu","","0.02"],["r--","","0.02"],["showDownloadButton","","0.02"],["download_link","","0.02"],["onLoop","","0.02"],["timer.remove","","0.02"],["download","","0.02"],["i--","","0.02"]];

const hostnamesMap = new Map([["jobkijankari.in",0],["newsloti.com",0],["theringtonesworld.in",0],["indisarkrijob.com",0],["remixpapa.in",0],["azcodinghub.com",0],["hindikahanistory.in",0],["jkssbnotes.com",0],["taazatimes24.com",0],["megashayari.com",0],["dhamakamusics.in",0],["onlinehelpblog.com",0],["techlokye.com",0],["rojgarsamachar.xyz",0],["acejankari.com",0],["odishadjss.in",0],["sbkeditsofficials.in",0],["mktechword.com",0],["picassoappk.com",0],["finley-aaron-love.com",0],["bmremix.in",0],["odiasongmuzic.com",0],["rktemplates.in",0],["seobar.in",0],["bharatsarkarijobalert.com",0],["englishbhaiya.co.in",0],["news21usa.com",0],["gachalifeoldversionapk.net",0],["jankarihubedu21.com",0],["mpscstudyhub.com",0],["djppclub.com",0],["1stepforlife.in",0],["indiasarkari.com",0],["djrajurjm.in",0],["ojasnew.in",0],["myfirstname.in",0],["extraking.in",0],["mystudyhelp.in",0],["wwneed.com",0],["aditechz.com",0],["ccrushapp.com",0],["latestpikashowapk.com",0],["blog24.me",0],["onpointgame.net",0],["blogviewers.com",0],["satyaclub.in",0],["freemodapp.com",0],["howmany.co.in",0],["iwitnessnews.in",0],["doge25.in",0],["nokrimilegi.in",0],["kejriwalyojana.com",0],["netflixrelease.com",0],["onlinegratuitycalculator.com",0],["gplinks.co",[0,101]],["rontymobile.in",0],["globlenews.in",0],["ipalibrary.me",1],["sanemoku.com",1],["plog.com.br",1],["panda.studyis.xyz",2],["bishalghale.com.np",3],["file-upload.in",3],["linksae.com",3],["wellness4live.com",3],["insuranceinfos.in",3],["zeroupload.com",4],["bhojpuritop.in",4],["amritadrino.com",[4,50]],["apkmoddone.phongroblox.com",5],["file.apkmoddone.com",5],["urlcut.ninja",6],["tanytech.com",7],["themezon.net",7],["tutwuri.id",8],["mbjremix.com",9],["165.22.246.130",9],["cloudpaten.pro",10],["sparkful.co",11],["mangoai.co",11],["uptoearn.xyz",12],["uploadhaven.com",13],["mamahawa.com",14],["10short.pro",14],["lk21static.xyz",15],["makimbo.xyz",15],["djrudrabasti.in",16],["vstdrive.in",17],["decrypt.day",18],["alpinecorporate.com",19],["theprodkeys.com",20],["forasm.com",21],["heroxcheat.cloud",22],["bloginkz.com",23],["go.freetrx.fun",23],["wpking.in",23],["yifysubtitles.me",23],["michaelemad.com",23],["shtms.co",23],["gitizle.vip",23],["ay.live",23],["techrfour.com",23],["theicongenerator.com",23],["multilinkfz.xyz",23],["yindex.xyz",23],["unityassetcollection.com",23],["earningradar.com",23],["findi.pro",23],["uzunversiyon.xyz",23],["direkizle.xyz",23],["tamindir.mobi",23],["gitlink.pro",23],["aylink.co",23],["moretvtime.com",23],["urlpay.net",23],["claim4.fun",23],["finsurances.co",24],["fansonlinehub.com",25],["teralink.me",25],["teraearn.com",25],["terashare.me",25],["hotmediahub.com",25],["terabox.fun",25],["covemarkets.com",26],["finclub.in",27],["financeyogi.net",27],["trangchu.news",27],["downfile.site",27],["player.pelisgratishd.io",27],["doibihar.org",27],["educationgyani.com",27],["ffworld.xyz",27],["gawbne.com",27],["forex-trnd.com",[27,52]],["forex-golds.com",27],["cravesandflames.com",28],["novelsapps.com",28],["codesnse.com",28],["speedtorrent.ru",28],["listas.pro",28],["forexit.io",28],["healthy4pepole.com",[28,101,103]],["sitecuatui.xyz",28],["haonguyen.top",28],["androjungle.com",29],["getmodsapk.com",29],["mixrootmods.com",[30,107]],["consoleroms.com",30],["romspedia.com",30],["edummm.xyz",30],["shortlinks.tech",31],["dramaworldhd.co",31],["bitefaucet.com",31],["filmypoints.in",[32,38]],["vinstartheme.com",33],["instamod.net",33],["jenismac.com",34],["unityassets4free.com",34],["spacebin.site",34],["freemodapks.com",34],["player.repelis24.rs",35],["dyp.li",36],["linku.to",37],["oneslidephotography.com",38],["apasih.my.id",38],["financekami.com",38],["bico8.com",38],["techyinfo.in",38],["smallinfo.in",38],["techymedies.com",38],["disheye.com",38],["ufacw.com",38],["googledrivelinks.com",38],["technicalatg.com",[38,47]],["7apple.net",38],["arhplyrics.in",38],["netfile.cc",38],["jardima.com",38],["courseforfree.com",38],["tutorial.siberuang.com",38],["segurosdevida.site",38],["surl.li",39],["bankvacency.com",40],["indilinks.xyz",41],["discordbotlist.com",41],["maxsilo.in",42],["starfiles.co",43],["nguyenvanbao.com",44],["androidecuatoriano.xyz",45],["sinonimos.de",46],["atlai.club",46],["blogtechh.com",48],["vavada5com.com",48],["financerites.in",48],["financerites.com",48],["diudemy.com",49],["techboyz.xyz",49],["adslink.pw",49],["3dzip.org",51],["3rabsnews.com",52],["mobileprice.site",52],["bestmobilenew.com",52],["linkjust1.com",52],["vidtome.stream",52],["ta2deem7arbya.com",[53,90]],["eda-ah.com",[53,90]],["modzilla.in",54],["garutpos.com",54],["vrcmods.com",54],["garutexpress.id",54],["getfreecourses.co",55],["dosya.hizliresim.com",56],["vebma.com",57],["pinloker.com",57],["sekilastekno.com",57],["blogmado.com",58],["webhostingpost.com",59],["wikitraveltips.com",60],["naukrilelo.in",60],["fikper.com",61],["freecoursesonline.me",62],["codingnepalweb.com",[63,151]],["misirtune.blogspot.com",64],["userload.co",65],["dizimini.com",66],["mohammedkhc.com",66],["trendyoum.com",66],["cheatsquad.gg",66],["mcpedl.com",66],["filese.me",66],["linkslo.com",66],["c1ne.co",66],["pearos.xyz",66],["moddedguru.com",66],["py.md",66],["abhaydigitalmarketer.com",66],["bestshort.xyz",66],["moaplos.com",66],["nullslide.com",66],["mage.si",66],["embed.m3u-cdn.live",66],["embed.tvcdn.live",66],["mastercoria.com",66],["gaminplay.com",[67,107,127]],["gamelopte.com",67],["insurglobal.xyz",67],["sevenjournals.com",67],["digworm.io",68],["br0wsers.com",[69,200]],["hashhackers.com",70],["katdrive.net",70],["newsongs.co.in",70],["altblogger.net",71],["cashearn.cc",71],["subscene.vip",71],["safelink.omglyrics.com",71],["4download.net",71],["acortar.info",71],["kotp1000000.xyz",71],["blog.donia-tech.net",71],["anomize.xyz",71],["boardgamesonline.net",71],["freeudemycourse.com",72],["modshost.net",73],["coincity.in",73],["djxmaza.in",73],["examtadka.com",73],["proviralhost.com",73],["urbharat.xyz",73],["codenova-center.web.app",74],["minecraftalpha.net",75],["aeromods.app",76],["whatsaero.com",76],["pahe.win",76],["financeflix.in",76],["technoflip.in",76],["studyranks.in",76],["flightsim.to",76],["hikarinoakari.com",76],["hikarinoakariost.info",76],["recipesdelite.com",77],["edumaz.com",78],["blisseyhusband.in",78],["bingotingo.com",78],["compressware.in",78],["geektopia.info",78],["freecoursewebsite.com",78],["dosyayukle.biz",78],["freetutorialsus.com",78],["apkmos.com",78],["sfile.mobi",78],["notipostingt.com",79],["cmacked.com",80],["movieflixpro.com",80],["gocmod.com",81],["speedynews.xyz",82],["xmod.in",82],["tecmundo.net",82],["crazyblog.in",[82,125,126]],["studyuo.com",[82,125,126]],["sbkaise.in",82],["janusnotes.com",82],["anime-sanka.com",83],["kiemlua.com",[84,113,157]],["world-trips.net",[84,117]],["newforex.online",[84,113]],["pes-patches.com",85],["data.morsodifame.com",85],["ifile.cc",85],["filemoon.sx",86],["truongblogger.top",87],["koyi.pub",88],["thizissam.in",[89,108]],["alphaantileak.net",89],["o-pro.online",90],["mazen-ve.com",90],["animeuploader.com",90],["konstantinova.net",90],["ontools.net",91],["teknopaid.xyz",91],["asdfiles.com",92],["11bit.co.in",93],["spantechie.com",94],["paste1s.com",95],["note1s.com",95],["easylinkref.com",95],["redirect.dafontvn.com",[96,97]],["samapkstore.com",[96,97]],["andronews18.blogspot.com",[96,97]],["ph.tpaste.net",[96,97]],["sdetectives.id",96],["apps2app.com",96],["pro-bangla.com",96],["cheatermad.com",98],["streamcheck.link",99],["tinyurl.so",99],["tinyurl.is",99],["usanewstoday.club",100],["earnme.club",100],["top1iq.com",101],["sama-pro.com",101],["7misr4day.com",[101,122]],["coursefreedl.com",101],["apkmaza.net",101],["jpopsingles.eu",101],["mobiget.net",101],["newzflair.com",102],["newzmagic.com",102],["adlice.com",103],["yalla-shoot-now.us",103],["forexeen.us",103],["health-and.me",103],["wondervelocity.com",103],["bluetechno.net",103],["world2our.com",103],["mobi2c.com",[103,113]],["mywatchseries.fun",103],["telepisodes.org",103],["kingtalks.net",103],["maxurlz.com",103],["allcryptoz.net",103],["topcryptoz.net",103],["thaitrieuvi.live",103],["freewebcart.com",103],["safe.kangkimin.com",103],["maxservicesi.com",103],["techhelpbd.com",104],["egyfalcons.com",105],["premads.com",106],["leeapk.com",107],["mealcold.com",107],["foodxor.com",107],["freemodsapp.xyz",107],["mayaremix.in",107],["infortechno.com",107],["getintoway.com",107],["gktech.uk",107],["worldmak.com",107],["ftuapps.dev",107],["dl.tech-story.net",107],["themorningtribune.com",107],["veganho.co",107],["veganal.co",107],["mosqam.com",107],["bimo-cash.readi.online",107],["blog.textpage.xyz",107],["claimlite.club",107],["bitcomarket.net",107],["1apple.xyz",107],["mcrypto.club",[107,155]],["gamepure.in",107],["veganab.co",107],["apkmaven.io",107],["choiceappstore.xyz",107],["pn.cgchotbox.com",107],["worldappsstore.xyz",107],["gifans.com",107],["iptvjournal.com",107],["kienthucrangmieng.com",107],["coin-free.com",107],["moddingzone.in",107],["insurance-space.xyz",107],["blognews.in",107],["noithatmyphu.vn",107],["dulichkhanhhoa.net",107],["therootdroid.com",107],["filessrc.com",108],["srcimdb.com",108],["udemycourses.me",108],["eu.tapchipi.com",108],["short.ctvb1.info",108],["citychilli.com",108],["psdly.com",108],["desitvshows.xyz",108],["katmoviehd4.com",108],["download.modsofapk.com",108],["infopedia24.com",108],["linkdecode.com",108],["short-ly.co",109],["upshrink.com",109],["jojo-themes.net",110],["diglink.blogspot.com",111],["th-world.com",111],["za.gl",112],["za.uy",112],["rezence.com",113],["techmody.io",[113,134]],["yoshare.net",113],["mikl4forex.com",[113,157]],["publicananker.com",[113,157]],["aemenstore.com",113],["cazzette.com",113],["truebrandy.com",113],["hookeaudio.com",113],["restorbio.com",113],["medcpu.com",113],["alocd.com",113],["forex-gold.net",[113,117]],["kingsleynyc.com",113],["lucidcam.com",113],["staaker.com",113],["byboe.com",113],["thegoneapp.com",113],["nousdecor.com",113],["alobuu.com",[113,157]],["rodjulian.com",[113,157]],["aloass.com",[113,157]],["taisv.com",[113,157]],["aloguy.com",[113,157]],["alohdd.com",[113,157]],["alogum.com",[113,157]],["alobyt.com",[113,157]],["aloboi.com",[113,157]],["uebnews.online",[113,157]],["aloegg.com",[113,157]],["alofps.com",[113,157]],["pennbookcenter.com",[113,157]],["samfirms.com",114],["appsmodz.com",115],["cararegistrasi.com",116],["healdad.com",117],["gamalk-sehetk.com",117],["healthfirstweb.com",118],["yogablogfit.com",118],["vocalley.com",118],["howifx.com",118],["enit.in",118],["skincarie.com",118],["imperialstudy.com",118],["hamsterss.website",119],["apkmb.com",119],["boobychristmas.com",120],["ethereumfaucet.info",121],["tutcourse.com",122],["luckydice.net",122],["coinsearns.com",122],["gdfreak.xyz",122],["doctor-groups.com",122],["crypto-faucet.xyz",122],["mik4mob.com",122],["iklandb.com",122],["urapk.com",122],["dogemate.com",[122,168]],["shorteet.com",122],["earnbits.xyz",122],["bitearns.com",122],["girls-like.me",123],["sonixgvn.net",123],["runmods.com",123],["watchdoge.xyz",124],["informatikamu.id",[125,126]],["technicalatg.xyz",[125,126]],["taregna.com",[125,126]],["toolss.net",[125,126]],["tutsgalaxy.net",[125,126]],["otomi-games.com",[126,163]],["yifysub.net",128],["cdmstudy.site",129],["insurance.recipesdelite.com",129],["allbuzzin.com",[130,131]],["file.bospedia.com",132],["toptap.website",133],["adnit-tri.tk",133],["boomx5.com",133],["howtofree.org",135],["rethmic.com",136],["majidzhacker.com",[137,138]],["itscybertech.com",139],["gold-24.net",140],["3rabsports.com",140],["forexrw7.com",140],["fx-22.com",140],["forexmab.com",140],["forexwaw.club",140],["forex-articles.com",140],["linkjust.com",140],["forexlap.com",140],["shareappscrack.com",141],["oiipdf.com",142],["upstore.net",143],["subs4series.com",144],["gamingforecast.com",145],["icutlink.com",146],["android-apk.org",146],["semawur.com",146],["zegtrends.com",147],["littlebyte.net",148],["megadescargas.net",149],["blyts.net",149],["lawebdelprogramador.com",150],["win10.vn",152],["wildfaucets.ml",152],["faucet.cryptourl.net",152],["dogeatm.com",152],["claimbits.io",152],["i-bits.io",152],["diamondfaucet.space",152],["gobits.io",152],["russiacoin.xyz",152],["starsfaucet.com",152],["lionltcfaucet.xyz",152],["faucet.shorterall.com",152],["yellowfaucet.ovh",152],["bollypluse.in",153],["freecourseslab.com",154],["freetutorialseu.com",154],["informaxonline.com",[155,176]],["tipslearn.com",155],["androidnougatapk.com",155],["siberuang.com",155],["waaboom.com",155],["healthymaster.xyz",155],["bkksnews.xyz",155],["faucetcrypto.com",156],["mynewsmedia.in",157],["mynewshub.co",157],["techbigs.com",158],["kiktu.com",159],["technicalegy.com",160],["wallpaperaccess.com",161],["uniqueten.net",164],["ultraten.net",164],["elil.cc",165],["game-kentang.blogspot.com",166],["upfile.us",166],["mad4wheels.com",167],["moviesdaweb.blogspot.com",169],["dlsharefile.com",170],["eco-area.com",171],["safelink.rezkozpatch.xyz",[172,173]],["onlinecoursebay.com",174],["kazanclilink.com",175],["emulatorgames.net",177],["iptv4best.com",178],["leechall.com",179],["kpopstan.com",180],["ouo.io",181],["cpmlink.net",181],["short-url.link",182],["findicons.com",183],["nulleb.com",184],["bfas237blog.info",185],["dr-farfar.net",186],["saungfirmware.id",187],["goossh.com",188],["onlinefreecourse.net",189],["site.dz4win.com",190],["thingiverse.com",191],["linkerload.com",192],["ockles.com",192],["ljutkeunvpn.blogspot.com",192],["mobilelegends.shop",192],["linksaya.com",193],["phpscripttr.com",194],["essek.gen.tr",194],["indir.turkceyama.net",194],["clicads.fr",194],["mazakony.net",194],["5mod-file.ru",195],["genlink.cc",196],["apkprofree.com",197],["zedge.net",198],["hakdisk.ru",199],["diskapk.ru",199],["softwaresde.com",200],["tr.link",201],["d0000d.com",203],["do0od.com",203],["ds2play.com",203],["doods.pro",203],["dooood.com",203],["dood.yt",203],["dood.re",203],["dood.wf",203],["dood.la",203],["dood.pm",203],["dood.so",203],["dood.to",203],["dood.watch",203],["dood.ws",203],["nightfallnews.com",204],["retrostic.com",205],["shiroyasha.me",206],["bolicheintercambios.net",207],["lg-firmwares.com",208],["sfirmware.com",208],["imgqec.online",209],["imgwbfh.online",209],["imgyer.store",209],["imgxuh.cfd",209],["imgngc.sbs",209],["imgezx.sbs",209],["imgxza.store",209],["imgwqr.online",209],["imagehaha.com",209],["imgpukrr.site",209],["imagent.buzz",209],["imagepuitr.buzz",209],["imgblaze.net",209],["imgkorle.buzz",209],["imgkaka.xyz",209],["pixsera.net",209],["imgfrost.net",209],["imgair.net",209],["wallpaperplay.com",210],["lnk.parts",211],["lnk.news",211],["sammobile.com",212],["bomurl.com",213],["go.geghost.com",214],["romhustler.org",215],["a2zupload.com",216],["bluemediadownload.lat",217],["bluemediaurls.lol",217],["bluemedialink.online",217],["dl.pcgamestorrents.org",217],["get-url.com",217]]);

const entitiesMap = new Map([["privatemoviez",4],["lootlinks",76],["ibomma",90],["animesanka",162],["akwam",202],["bluemediafile",217],["bluemediafiles",217]]);

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
