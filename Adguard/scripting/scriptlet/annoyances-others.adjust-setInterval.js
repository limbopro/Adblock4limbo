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

const argsList = [["myTimer","*","0.02"],["countdown","*","0.001"],["wpsafe-countdown2","*","0.002"],["timer","*","0.001"],["count","*","0.001"],["=--","*","0.001"],["pleasewait","*","0.001"],["tp-time","*","0.001"],["innerHTML=`Wait"],["/wpsafe|wait|timer/","*","0.001"],[".html()","*","0.001"],["return e-1","*","0.001"],["generateDownloadLink","*","0.001"],["countDown()","*","0.28"],["/proceed|mdtimer/","*","0.001"],["time","*","0.02"],["Popup will close in","*","0.001"],["time--","*","0.001"],["update","*","0.001"],["counter","*","0.001"],["/wpsafe-|timeLeft/","*","0.001"],["wpsafe-","*","0.001"],["mdtimer","*","0.001"],["timer","","0.02"],["counter"],["clearInterval","*","0.001"],["wait","*","0.02"],["count","*","0.02"],["counter","*","0.02"],["download","*","0.02"],["timeLeft","*","0.02"],["timeLeft","","0.02"],["/_0x|wpsafe-/","*","0.02"],["Download","*","0.02"],["counter--","*","0.02"],["count--","*","0.02"],["p--","","0.02"],["current()","*","0.02"],["wpsafe-","*","0.02"],["disabled","*","0.02"],["timePassed","*","0.02"],["countdown","*","0.02"],["/Seconds|download/","*","0.02"],["download_progress","*","0.02"],["count","1600","0.02"],["downloadButton","*","0.02"],["waitTime","*","0.02"],["timer","*","0.02"],["timeSec--","*","0.02"],["_0x","*","0.02"],["wpsafe-generate","*","0.02"],["document.hidden","*","0.02"],["#mdtimer","","0.02"],["updatePercentage","*","0.02"],["timePassed","","0.02"],["DOWNLOAD","*","0.02"],["Number","","0.02"],["/counter|wait/","*","0.02"],["get-link","*","0.02"],["cont","*","0.02"],[",dataType:_","1000","0.02"],["/wpsafe|count/","*","0.02"],["downloadToken","*","0.02"],["/timeLeft|wpsafe-/","*","0.02"],["cnDownloadBtn","*","0.02"],["download_link","*","0.02"],["secondsleft","*","0.02"],["countdown","","0.02"],["yuidea-","*","0.02"],["timer--","*","0.02"],["success","","0.02"],["/verify_text|isCompleted/","*","0.02"],["#timer","","0.02"],["countdownwrapper","","0.02"],["timeleft","*","0.02"],["contador","*","0.02"],["Your Link","","0.02"],["count","","0.02"],["/download|Please/","","0.02"],["downloadButton","","0.02"],["window.location.href= atob(","1000","0.02"],[".show_download_links","","0.02"],["/\\.text\\(\\)&&\\(clearInterval|download-btn/","*","0.02"],["updatePercentage","100","0.02"],["decodeURIComponent(link)","","0.02"],["/count-|-wait/","*","0.02"],["waktu--","","0.02"],[".download","","0.02"],["/base-timer-label|waktu--/","","0.02"],["curCount","","0.02"],["Please wait","","0.02"],["mdtimer","","0.02"],["gotolink","*","0.02"],["seconds--","*","0.02"],["claim_button","*","0.02"],["/Please Wait|Generating Links/","*","0.02"],["#second","","0.02"],["#countdown","","0.02"],["progressbar","30","0.02"],["#upbtn","","0.02"],["skip-btn","*","0.02"],["tp-","*","0.02"],["downloadTimer","","0.02"],["/Please Wait|Go to download/","","0.02"],["counter","","0.02"],["/counter--|downloadButton/","","0.02"],["location","","0.02"],["myCounter","*","0.001"],["/wpsafe|wait/","*","0.001"],["counter--","","0.02"],["pleasewait","","0.02"],["bb_download_delay","","0.02"],["0x","","0.02"],["timeCount","*","0.2"],["counter","2000","0.02"],["downloadLinkButton","*","0.02"],["startChecking","*","0.02"],["timer","1000","0.02"],["timeleft","","0.02"],["timeSec--","*","0.001"],["show_download_links","","0.02"],["REDIRECTING","*","0.02"],["ct","1000","0.02"],["sec--","","0.02"],["count--","","0.02"],["sec","","0.02"],["wpsafe-","","0.02"],["wpsafe-","2000","0.02"],["wpsafe-","1500","0.02"],["get-link","","0.02"],["download","2000","0.02"],["timer","1500","0.02"],["timer","2000","0.02"],["Link","550","0.02"],["#proceed","","0.02"],["counter","1800","0.02"],["downloadButton","1500","0.02"],["sp-count-down","","0.02"],["gotolink","","0.02"],["btngetlink","30","0.02"],["btn","","0.02"],["sec--","","0.001"],["/show_download_links|downloadTimer/","","0.02"],["timeinterval","","0.02"],["countDown","1150","0.5"],["makingdifferenttimer","50","0.02"],["Link()","","0.02"],["time","","0.02"],["time","2500","0.02"],["freeRemind","","0.02"],["contador","","0.02"],["contador--","","0.02"],["counter--","1300","0.02"],["seconds","","0.02"],["downloadButton","1000","0.02"],["counter","1000","0.02"],["wpsafe-generate","","0.02"],["timerText","","0.02"],["counter","1500","0.02"],["download-count-down","","0.02"],["runTimer","","0.02"],["[0x","","0.02"],["#download","","0.02"],["percentVal","30","0.02"],["wpsafe-generate","1000","0.02"],["wpsafe","","0.02"],["timer","1000","0.6"],["","1000","0.05"],["second--","","0.02"],["#bt","","0.02"],["counter--","100","0.02"],["#Download-Card","","0.02"],[".stop()","","0.02"],["Link will appear","510","0.02"],["Link will appear","1010","0.02"],["countdown","2000","0.02"],["sayimiBaslat","","0.02"],["wpsafe-link","2000","0.02"],["#eg-timer","","0.3"],["#CountDown","","0.02"],["dllink","","0.02"],["time--","","0.02"],["stop()","","0.02"],["second","1000","0.02"],["wait_seconds","","0.02"],["download-countdown","","0.02"],["current_progress","2000","0.02"],["display()","","0.02"],["get_link","","0.02"],["goToLink","2200","0.02"],[".countdown","2000","0.02"],["urll","800","0.02"],["Downloading","","0.02"],["linkDL","","0.02"],["downloadButton","2400","0.02"],["#pleasewait","","0.02"],[".fcounter span","","0.02"],["real-link","","0.02"],[".wpapks-download-link-wrapper","","0.02"],["(i-1)","","0.02"],["fcounter","","0.02"],["show_ag","","0.02"],["timer","700","0.02"],["clock()","1000","0.02"],[".countdown","","0.02"],["secondsLeft","","0.02"],["timeLeft--","","0.02"],["/_0x[\\s\\S]*?decodeURIComponent/","","0.02"],["count-","","0.02"],["#download-popup","","0.02"],[".timer","","0.02"],["#download_menu","","0.02"],["r--","","0.02"],["showDownloadButton","","0.02"],["download_link","","0.02"],["onLoop","","0.02"],["timer.remove","","0.02"],["download","","0.02"],["i--","","0.02"]];

const hostnamesMap = new Map([["sbkeditsofficials.in",0],["mktechword.com",0],["picassoappk.com",0],["finley-aaron-love.com",0],["bmremix.in",0],["odiasongmuzic.com",0],["rktemplates.in",0],["seobar.in",0],["bharatsarkarijobalert.com",0],["englishbhaiya.co.in",0],["news21usa.com",0],["gachalifeoldversionapk.net",0],["jankarihubedu21.com",0],["mpscstudyhub.com",0],["djppclub.com",0],["1stepforlife.in",0],["indiasarkari.com",0],["djrajurjm.in",0],["ojasnew.in",0],["myfirstname.in",0],["extraking.in",0],["mystudyhelp.in",0],["wwneed.com",0],["aditechz.com",0],["ccrushapp.com",0],["latestpikashowapk.com",0],["blog24.me",0],["onpointgame.net",0],["blogviewers.com",0],["satyaclub.in",0],["freemodapp.com",0],["howmany.co.in",0],["iwitnessnews.in",0],["doge25.in",0],["jabigetjob.com",0],["nokrimilegi.in",0],["kejriwalyojana.com",0],["netflixrelease.com",0],["onlinegratuitycalculator.com",0],["gplinks.co",[0,102]],["rontymobile.in",0],["revadvert.com",0],["globlenews.in",0],["sanemoku.com",1],["plog.com.br",1],["panda.studyis.xyz",2],["bishalghale.com.np",3],["file-upload.in",3],["linksae.com",3],["wellness4live.com",3],["insuranceinfos.in",3],["zeroupload.com",4],["bhojpuritop.in",4],["amritadrino.com",[4,50]],["apkmoddone.phongroblox.com",5],["file.apkmoddone.com",5],["urlcut.ninja",6],["tanytech.com",7],["themezon.net",7],["tutwuri.id",8],["mbjremix.com",9],["165.22.246.130",9],["cloudpaten.pro",10],["sparkful.co",11],["mangoai.co",11],["uptoearn.xyz",12],["uploadhaven.com",13],["mamahawa.com",14],["10short.pro",14],["lk21static.xyz",15],["makimbo.xyz",15],["djrudrabasti.in",16],["vstdrive.in",17],["decrypt.day",18],["alpinecorporate.com",19],["theprodkeys.com",20],["forasm.com",21],["heroxcheat.cloud",22],["bloginkz.com",23],["go.freetrx.fun",23],["wpking.in",23],["yifysubtitles.me",23],["michaelemad.com",23],["shtms.co",23],["gitizle.vip",23],["ay.live",23],["techrfour.com",23],["theicongenerator.com",23],["multilinkfz.xyz",23],["yindex.xyz",23],["unityassetcollection.com",23],["earningradar.com",23],["findi.pro",23],["uzunversiyon.xyz",23],["direkizle.xyz",23],["tamindir.mobi",23],["gitlink.pro",23],["aylink.co",23],["moretvtime.com",23],["urlpay.net",23],["claim4.fun",23],["finsurances.co",24],["fansonlinehub.com",25],["teralink.me",25],["teraearn.com",25],["terashare.me",25],["hotmediahub.com",25],["terabox.fun",25],["covemarkets.com",26],["finclub.in",27],["financeyogi.net",27],["trangchu.news",27],["downfile.site",27],["player.pelisgratishd.io",27],["doibihar.org",27],["educationgyani.com",27],["ffworld.xyz",27],["gawbne.com",27],["forex-trnd.com",[27,52]],["forex-golds.com",27],["cravesandflames.com",28],["novelsapps.com",28],["codesnse.com",28],["speedtorrent.ru",28],["listas.pro",28],["forexit.io",28],["healthy4pepole.com",[28,102,104]],["sitecuatui.xyz",28],["haonguyen.top",28],["androjungle.com",29],["getmodsapk.com",29],["mixrootmods.com",[30,108]],["consoleroms.com",30],["romspedia.com",30],["edummm.xyz",30],["shortlinks.tech",31],["dramaworldhd.co",31],["bitefaucet.com",31],["filmypoints.in",[32,38]],["vinstartheme.com",33],["instamod.net",33],["jenismac.com",34],["unityassets4free.com",34],["spacebin.site",34],["freemodapks.com",34],["player.repelis24.rs",35],["dyp.li",36],["linku.to",37],["oneslidephotography.com",38],["apasih.my.id",38],["financekami.com",38],["bico8.com",38],["techyinfo.in",38],["smallinfo.in",38],["techymedies.com",38],["disheye.com",38],["ufacw.com",38],["googledrivelinks.com",38],["technicalatg.com",[38,47]],["7apple.net",38],["arhplyrics.in",38],["netfile.cc",38],["jardima.com",38],["courseforfree.com",38],["tutorial.siberuang.com",38],["segurosdevida.site",38],["surl.li",39],["bankvacency.com",40],["indilinks.xyz",41],["discordbotlist.com",41],["maxsilo.in",42],["starfiles.co",43],["nguyenvanbao.com",44],["androidecuatoriano.xyz",45],["sinonimos.de",46],["atlai.club",46],["blogtechh.com",48],["vavada5com.com",48],["financerites.in",48],["financerites.com",48],["diudemy.com",49],["techboyz.xyz",49],["adslink.pw",49],["3dzip.org",51],["3rabsnews.com",52],["mobileprice.site",52],["bestmobilenew.com",52],["linkjust1.com",52],["vidtome.stream",52],["ta2deem7arbya.com",[53,91]],["eda-ah.com",[53,91]],["modzilla.in",54],["garutpos.com",54],["vrcmods.com",54],["garutexpress.id",54],["getfreecourses.co",55],["dosya.hizliresim.com",56],["vebma.com",57],["pinloker.com",57],["sekilastekno.com",57],["blogmado.com",58],["suaurl.com",59],["webhostingpost.com",60],["wikitraveltips.com",61],["naukrilelo.in",61],["fikper.com",62],["freecoursesonline.me",63],["codingnepalweb.com",[64,152]],["misirtune.blogspot.com",65],["userload.co",66],["dizimini.com",67],["mohammedkhc.com",67],["trendyoum.com",67],["cheatsquad.gg",67],["mcpedl.com",67],["filese.me",67],["linkslo.com",67],["c1ne.co",67],["pearos.xyz",67],["moddedguru.com",67],["py.md",67],["abhaydigitalmarketer.com",67],["bestshort.xyz",67],["moaplos.com",67],["nullslide.com",67],["mage.si",67],["embed.m3u-cdn.live",67],["embed.tvcdn.live",67],["mastercoria.com",67],["gaminplay.com",[68,108,128]],["gamelopte.com",68],["insurglobal.xyz",68],["sevenjournals.com",68],["digworm.io",69],["br0wsers.com",[70,201]],["hashhackers.com",71],["katdrive.net",71],["newsongs.co.in",71],["altblogger.net",72],["cashearn.cc",72],["subscene.vip",72],["safelink.omglyrics.com",72],["4download.net",72],["acortar.info",72],["kotp1000000.xyz",72],["blog.donia-tech.net",72],["anomize.xyz",72],["boardgamesonline.net",72],["freeudemycourse.com",73],["modshost.net",74],["coincity.in",74],["djxmaza.in",74],["examtadka.com",74],["proviralhost.com",74],["urbharat.xyz",74],["codenova-center.web.app",75],["minecraftalpha.net",76],["aeromods.app",77],["whatsaero.com",77],["pahe.win",77],["financeflix.in",77],["technoflip.in",77],["studyranks.in",77],["flightsim.to",77],["hikarinoakari.com",77],["hikarinoakariost.info",77],["recipesdelite.com",78],["edumaz.com",79],["blisseyhusband.in",79],["bingotingo.com",79],["compressware.in",79],["geektopia.info",79],["freecoursewebsite.com",79],["dosyayukle.biz",79],["freetutorialsus.com",79],["apkmos.com",79],["sfile.mobi",79],["notipostingt.com",80],["cmacked.com",81],["movieflixpro.com",81],["gocmod.com",82],["speedynews.xyz",83],["xmod.in",83],["tecmundo.net",83],["crazyblog.in",[83,126,127]],["studyuo.com",[83,126,127]],["sbkaise.in",83],["janusnotes.com",83],["anime-sanka.com",84],["kiemlua.com",[85,114,158]],["world-trips.net",[85,118]],["newforex.online",[85,114]],["pes-patches.com",86],["data.morsodifame.com",86],["ifile.cc",86],["filemoon.sx",87],["truongblogger.top",88],["koyi.pub",89],["thizissam.in",[90,109]],["alphaantileak.net",90],["o-pro.online",91],["mazen-ve.com",91],["animeuploader.com",91],["konstantinova.net",91],["ontools.net",92],["teknopaid.xyz",92],["asdfiles.com",93],["11bit.co.in",94],["spantechie.com",95],["paste1s.com",96],["note1s.com",96],["easylinkref.com",96],["redirect.dafontvn.com",[97,98]],["samapkstore.com",[97,98]],["andronews18.blogspot.com",[97,98]],["ph.tpaste.net",[97,98]],["sdetectives.id",97],["apps2app.com",97],["pro-bangla.com",97],["cheatermad.com",99],["streamcheck.link",100],["tinyurl.so",100],["tinyurl.is",100],["usanewstoday.club",101],["earnme.club",101],["top1iq.com",102],["sama-pro.com",102],["7misr4day.com",[102,123]],["coursefreedl.com",102],["apkmaza.net",102],["jpopsingles.eu",102],["mobiget.net",102],["newzflair.com",103],["newzmagic.com",103],["adlice.com",104],["yalla-shoot-now.us",104],["forexeen.us",104],["health-and.me",104],["wondervelocity.com",104],["bluetechno.net",104],["world2our.com",104],["mobi2c.com",[104,114]],["mywatchseries.fun",104],["telepisodes.org",104],["kingtalks.net",104],["maxurlz.com",104],["allcryptoz.net",104],["topcryptoz.net",104],["thaitrieuvi.live",104],["freewebcart.com",104],["safe.kangkimin.com",104],["maxservicesi.com",104],["techhelpbd.com",105],["egyfalcons.com",106],["premads.com",107],["mealcold.com",108],["foodxor.com",108],["freemodsapp.xyz",108],["mayaremix.in",108],["infortechno.com",108],["getintoway.com",108],["gktech.uk",108],["worldmak.com",108],["ftuapps.dev",108],["dl.tech-story.net",108],["themorningtribune.com",108],["veganho.co",108],["veganal.co",108],["mosqam.com",108],["bimo-cash.readi.online",108],["blog.textpage.xyz",108],["claimlite.club",108],["bitcomarket.net",108],["1apple.xyz",108],["mcrypto.club",[108,156]],["gamepure.in",108],["veganab.co",108],["apkmaven.io",108],["choiceappstore.xyz",108],["pn.cgchotbox.com",108],["worldappsstore.xyz",108],["gifans.com",108],["iptvjournal.com",108],["kienthucrangmieng.com",108],["coin-free.com",108],["moddingzone.in",108],["insurance-space.xyz",108],["blognews.in",108],["noithatmyphu.vn",108],["dulichkhanhhoa.net",108],["therootdroid.com",108],["filessrc.com",109],["srcimdb.com",109],["udemycourses.me",109],["eu.tapchipi.com",109],["short.ctvb1.info",109],["citychilli.com",109],["psdly.com",109],["desitvshows.xyz",109],["katmoviehd4.com",109],["download.modsofapk.com",109],["infopedia24.com",109],["linkdecode.com",109],["short-ly.co",110],["upshrink.com",110],["jojo-themes.net",111],["diglink.blogspot.com",112],["th-world.com",112],["za.gl",113],["za.uy",113],["rezence.com",114],["techmody.io",[114,135]],["yoshare.net",114],["mikl4forex.com",[114,158]],["publicananker.com",[114,158]],["aemenstore.com",114],["cazzette.com",114],["truebrandy.com",114],["hookeaudio.com",114],["restorbio.com",114],["medcpu.com",114],["alocd.com",114],["forex-gold.net",[114,118]],["kingsleynyc.com",114],["lucidcam.com",114],["staaker.com",114],["byboe.com",114],["thegoneapp.com",114],["nousdecor.com",114],["alobuu.com",[114,158]],["rodjulian.com",[114,158]],["aloass.com",[114,158]],["taisv.com",[114,158]],["aloguy.com",[114,158]],["alohdd.com",[114,158]],["alogum.com",[114,158]],["alobyt.com",[114,158]],["aloboi.com",[114,158]],["uebnews.online",[114,158]],["aloegg.com",[114,158]],["alofps.com",[114,158]],["pennbookcenter.com",[114,158]],["samfirms.com",115],["appsmodz.com",116],["cararegistrasi.com",117],["healdad.com",118],["gamalk-sehetk.com",118],["healthfirstweb.com",119],["yogablogfit.com",119],["vocalley.com",119],["howifx.com",119],["enit.in",119],["skincarie.com",119],["imperialstudy.com",119],["hamsterss.website",120],["apkmb.com",120],["boobychristmas.com",121],["ethereumfaucet.info",122],["tutcourse.com",123],["luckydice.net",123],["coinsearns.com",123],["gdfreak.xyz",123],["doctor-groups.com",123],["crypto-faucet.xyz",123],["mik4mob.com",123],["iklandb.com",123],["urapk.com",123],["dogemate.com",[123,169]],["shorteet.com",123],["earnbits.xyz",123],["bitearns.com",123],["girls-like.me",124],["sonixgvn.net",124],["runmods.com",124],["watchdoge.xyz",125],["informatikamu.id",[126,127]],["technicalatg.xyz",[126,127]],["taregna.com",[126,127]],["toolss.net",[126,127]],["tutsgalaxy.net",[126,127]],["otomi-games.com",[127,164]],["yifysub.net",129],["cdmstudy.site",130],["insurance.recipesdelite.com",130],["allbuzzin.com",[131,132]],["file.bospedia.com",133],["toptap.website",134],["adnit-tri.tk",134],["boomx5.com",134],["howtofree.org",136],["rethmic.com",137],["majidzhacker.com",[138,139]],["itscybertech.com",140],["gold-24.net",141],["3rabsports.com",141],["forexrw7.com",141],["fx-22.com",141],["forexmab.com",141],["forexwaw.club",141],["forex-articles.com",141],["linkjust.com",141],["forexlap.com",141],["shareappscrack.com",142],["oiipdf.com",143],["upstore.net",144],["subs4series.com",145],["gamingforecast.com",146],["icutlink.com",147],["android-apk.org",147],["semawur.com",147],["zegtrends.com",148],["littlebyte.net",149],["megadescargas.net",150],["blyts.net",150],["lawebdelprogramador.com",151],["win10.vn",153],["wildfaucets.ml",153],["faucet.cryptourl.net",153],["dogeatm.com",153],["claimbits.io",153],["i-bits.io",153],["diamondfaucet.space",153],["gobits.io",153],["russiacoin.xyz",153],["starsfaucet.com",153],["lionltcfaucet.xyz",153],["faucet.shorterall.com",153],["yellowfaucet.ovh",153],["bollypluse.in",154],["freecourseslab.com",155],["freetutorialseu.com",155],["informaxonline.com",[156,177]],["tipslearn.com",156],["androidnougatapk.com",156],["siberuang.com",156],["waaboom.com",156],["healthymaster.xyz",156],["bkksnews.xyz",156],["faucetcrypto.com",157],["mynewsmedia.in",158],["mynewshub.co",158],["techbigs.com",159],["kiktu.com",160],["technicalegy.com",161],["wallpaperaccess.com",162],["uniqueten.net",165],["ultraten.net",165],["elil.cc",166],["game-kentang.blogspot.com",167],["upfile.us",167],["mad4wheels.com",168],["moviesdaweb.blogspot.com",170],["dlsharefile.com",171],["eco-area.com",172],["safelink.rezkozpatch.xyz",[173,174]],["onlinecoursebay.com",175],["kazanclilink.com",176],["emulatorgames.net",178],["iptv4best.com",179],["leechall.com",180],["kpopstan.com",181],["ouo.io",182],["cpmlink.net",182],["short-url.link",183],["findicons.com",184],["nulleb.com",185],["bfas237blog.info",186],["dr-farfar.net",187],["saungfirmware.id",188],["goossh.com",189],["onlinefreecourse.net",190],["site.dz4win.com",191],["thingiverse.com",192],["linkerload.com",193],["ockles.com",193],["ljutkeunvpn.blogspot.com",193],["mobilelegends.shop",193],["linksaya.com",194],["phpscripttr.com",195],["essek.gen.tr",195],["indir.turkceyama.net",195],["clicads.fr",195],["mazakony.net",195],["5mod-file.ru",196],["genlink.cc",197],["apkprofree.com",198],["zedge.net",199],["hakdisk.ru",200],["diskapk.ru",200],["softwaresde.com",201],["tr.link",202],["do0od.com",204],["ds2play.com",204],["doods.pro",204],["dooood.com",204],["dood.yt",204],["dood.re",204],["dood.wf",204],["dood.la",204],["dood.pm",204],["dood.so",204],["dood.to",204],["dood.watch",204],["dood.ws",204],["nightfallnews.com",205],["retrostic.com",206],["shiroyasha.me",207],["bolicheintercambios.net",208],["lg-firmwares.com",209],["sfirmware.com",209],["imgqec.online",210],["imgwbfh.online",210],["imgyer.store",210],["imgxuh.cfd",210],["imgngc.sbs",210],["imgezx.sbs",210],["imgxza.store",210],["imgwqr.online",210],["imagehaha.com",210],["imgpukrr.site",210],["imagent.buzz",210],["imagepuitr.buzz",210],["imgblaze.net",210],["imgkorle.buzz",210],["imgkaka.xyz",210],["pixsera.net",210],["imgfrost.net",210],["imgair.net",210],["wallpaperplay.com",211],["lnk.parts",212],["lnk.news",212],["sammobile.com",213],["bomurl.com",214],["go.geghost.com",215],["romhustler.org",216],["a2zupload.com",217],["bluemediaurls.lol",218],["bluemedialink.online",218],["dl.pcgamestorrents.org",218],["get-url.com",218]]);

const entitiesMap = new Map([["privatemoviez",4],["lootlinks",77],["ibomma",91],["animesanka",163],["akwam",203],["bluemediafile",218],["bluemediafiles",218]]);

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
