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

const argsList = [["myTimer","*","0.02"],["countdown","*","0.001"],["wpsafe-countdown2","*","0.002"],["timer","*","0.001"],["count","*","0.001"],["=--","*","0.001"],["pleasewait","*","0.001"],["tp-time","*","0.001"],["innerHTML=`Wait"],["/wpsafe|wait|timer/","*","0.001"],[".html()","*","0.001"],["return e-1","*","0.001"],["generateDownloadLink","*","0.001"],["countDown()","*","0.28"],["/proceed|mdtimer/","*","0.001"],["time","*","0.02"],["Popup will close in","*","0.001"],["time--","*","0.001"],["counter","*","0.001"],["/wpsafe-|timeLeft/","*","0.001"],["wpsafe-","*","0.001"],["timer","","0.02"],["counter"],["clearInterval","*","0.001"],["wait","*","0.02"],["count","*","0.02"],["counter","*","0.02"],["download","*","0.02"],["timeLeft","*","0.02"],["timeLeft","","0.02"],["/_0x|wpsafe-/","*","0.02"],["Download","*","0.02"],["counter--","*","0.02"],["count--","*","0.02"],["p--","","0.02"],["current()","*","0.02"],["wpsafe-","*","0.02"],["disabled","*","0.02"],["timePassed","*","0.02"],["download_progress","*","0.02"],["count","1600","0.02"],["downloadButton","*","0.02"],["waitTime","*","0.02"],["timer","*","0.02"],["timeSec--","*","0.02"],["_0x","*","0.02"],["wpsafe-generate","*","0.02"],["document.hidden","*","0.02"],["#mdtimer","","0.02"],["updatePercentage","*","0.02"],["timePassed","","0.02"],["DOWNLOAD","*","0.02"],["Number","","0.02"],["/counter|wait/","*","0.02"],["get-link","*","0.02"],[",dataType:_","1000","0.02"],["/wpsafe|count/","*","0.02"],["downloadToken","*","0.02"],["/timeLeft|wpsafe-/","*","0.02"],["cnDownloadBtn","*","0.02"],["download_link","*","0.02"],["countdown","","0.02"],["yuidea-","*","0.02"],["timer--","*","0.02"],["success","","0.02"],["/verify_text|isCompleted/","*","0.02"],["countdownwrapper","","0.02"],["timeleft","*","0.02"],["contador","*","0.02"],["Your Link","","0.02"],["count","","0.02"],["/download|Please/","","0.02"],["downloadButton","","0.02"],["window.location.href= atob(","1000","0.02"],[".show_download_links","","0.02"],["/\\.text\\(\\)&&\\(clearInterval|download-btn/","*","0.02"],["updatePercentage","100","0.02"],["decodeURIComponent(link)","","0.02"],["/count-|-wait/","*","0.02"],["waktu--","","0.02"],[".download","","0.02"],["countdown","*","0.02"],["/base-timer-label|waktu--/","","0.02"],["curCount","","0.02"],["#timer","","0.02"],["Please wait","","0.02"],["mdtimer","","0.02"],["gotolink","*","0.02"],["seconds--","*","0.02"],["claim_button","*","0.02"],["/Please Wait|Generating Links/","*","0.02"],["#second","","0.02"],["#countdown","","0.02"],["progressbar","30","0.02"],["#upbtn","","0.02"],["skip-btn","*","0.02"],["tp-","*","0.02"],["downloadTimer","","0.02"],["/Please Wait|Go to download/","","0.02"],["counter","","0.02"],["/counter--|downloadButton/","","0.02"],["location","","0.02"],["myCounter","*","0.001"],["/wpsafe|wait/","*","0.001"],["counter--","","0.02"],["pleasewait","","0.02"],["bb_download_delay","","0.02"],["0x","","0.02"],["timeCount","*","0.2"],["counter","2000","0.02"],["downloadLinkButton","*","0.02"],["startChecking","*","0.02"],["timer","1000","0.02"],["timeleft","","0.02"],["timeSec--","*","0.001"],["show_download_links","","0.02"],["REDIRECTING","*","0.02"],["ct","1000","0.02"],["sec--","","0.02"],["count--","","0.02"],["sec","","0.02"],["wpsafe-","","0.02"],["wpsafe-","2000","0.02"],["wpsafe-","1500","0.02"],["get-link","","0.02"],["download","2000","0.02"],["Link","550","0.02"],["#proceed","","0.02"],["counter","1800","0.02"],["downloadButton","1500","0.02"],["sp-count-down","","0.02"],["gotolink","","0.02"],["btngetlink","30","0.02"],["btn","","0.02"],["sec--","","0.001"],["/show_download_links|downloadTimer/","","0.02"],["timeinterval","","0.02"],["countDown","1150","0.5"],["makingdifferenttimer","50","0.02"],["Link()","","0.02"],["time","","0.02"],["time","2500","0.02"],["freeRemind","","0.02"],["contador","","0.02"],["contador--","","0.02"],["counter--","1300","0.02"],["seconds","","0.02"],["downloadButton","1000","0.02"],["counter","1000","0.02"],["wpsafe-generate","","0.02"],["timerText","","0.02"],["counter","1500","0.02"],["download-count-down","","0.02"],["runTimer","","0.02"],["#download","","0.02"],["percentVal","30","0.02"],["wpsafe-generate","1000","0.02"],["wpsafe","","0.02"],["timer","1000","0.6"],["","1000","0.05"],["second--","","0.02"],["#bt","","0.02"],["counter--","100","0.02"],["#Download-Card","","0.02"],[".stop()","","0.02"],["Link will appear","510","0.02"],["Link will appear","1010","0.02"],["countdown","2000","0.02"],["#eg-timer","","0.3"],["#CountDown","","0.02"],["dllink","","0.02"],["time--","","0.02"],["stop()","","0.02"],["second","1000","0.02"],["wait_seconds","","0.02"],["download-countdown","","0.02"],["current_progress","2000","0.02"],["display()","","0.02"],["get_link","","0.02"],["goToLink","2200","0.02"],[".countdown","2000","0.02"],["Downloading","","0.02"],["linkDL","","0.02"],["downloadButton","2400","0.02"],["#pleasewait","","0.02"],[".fcounter span","","0.02"],["real-link","","0.02"],[".wpapks-download-link-wrapper","","0.02"],["(i-1)","","0.02"],["fcounter","","0.02"],["show_ag","","0.02"],["timer","700","0.02"],["clock()","1000","0.02"],[".countdown","","0.02"],["secondsLeft","","0.02"],["timeLeft--","","0.02"],["count-","","0.02"],["#download-popup","","0.02"],[".timer","","0.02"],["#download_menu","","0.02"],["r--","","0.02"],["showDownloadButton","","0.02"],["download_link","","0.02"],["onLoop","","0.02"],["timer.remove","","0.02"],["download","","0.02"],["i--","","0.02"]];

const hostnamesMap = new Map([["financialstudy.me",0],["lyricsx.in",0],["awolio.com",0],["anumin.com",0],["gptproguide.com",0],["odiamusicsong.com",0],["news36tech.com",0],["minijankari.com",0],["nhmgujarat.in",0],["jobwaala.in",0],["w3hindi.in",0],["kaisekareblog.com",0],["iplquotes.com",0],["newzwala.co.in",0],["jobkijankari.in",0],["newsloti.com",0],["theringtonesworld.in",0],["indisarkrijob.com",0],["remixpapa.in",0],["azcodinghub.com",0],["hindikahanistory.in",0],["jkssbnotes.com",0],["taazatimes24.com",0],["megashayari.com",0],["dhamakamusics.in",0],["onlinehelpblog.com",0],["techlokye.com",0],["rojgarsamachar.xyz",0],["acejankari.com",0],["odishadjss.in",0],["sbkeditsofficials.in",0],["mktechword.com",0],["picassoappk.com",0],["finley-aaron-love.com",0],["bmremix.in",0],["odiasongmuzic.com",0],["rktemplates.in",0],["seobar.in",0],["bharatsarkarijobalert.com",0],["englishbhaiya.co.in",0],["news21usa.com",0],["gachalifeoldversionapk.net",0],["jankarihubedu21.com",0],["mpscstudyhub.com",0],["djppclub.com",0],["1stepforlife.in",0],["indiasarkari.com",0],["djrajurjm.in",0],["ojasnew.in",0],["myfirstname.in",0],["extraking.in",0],["mystudyhelp.in",0],["wwneed.com",0],["aditechz.com",0],["ccrushapp.com",0],["latestpikashowapk.com",0],["blog24.me",0],["onpointgame.net",0],["blogviewers.com",0],["satyaclub.in",0],["freemodapp.com",0],["howmany.co.in",0],["iwitnessnews.in",0],["doge25.in",0],["nokrimilegi.in",0],["kejriwalyojana.com",0],["netflixrelease.com",0],["onlinegratuitycalculator.com",0],["gplinks.co",[0,97]],["rontymobile.in",0],["globlenews.in",0],["ipalibrary.me",1],["sanemoku.com",1],["plog.com.br",1],["panda.studyis.xyz",2],["bishalghale.com.np",3],["file-upload.in",3],["linksae.com",3],["wellness4live.com",3],["insuranceinfos.in",3],["zeroupload.com",4],["bhojpuritop.in",4],["amritadrino.com",[4,46]],["apkmoddone.phongroblox.com",5],["file.apkmoddone.com",5],["urlcut.ninja",6],["tanytech.com",7],["themezon.net",7],["tutwuri.id",8],["mbjremix.com",9],["165.22.246.130",9],["cloudpaten.pro",10],["sparkful.co",11],["mangoai.co",11],["uptoearn.xyz",12],["uploadhaven.com",13],["mamahawa.com",14],["10short.pro",14],["lk21static.xyz",15],["dl.lk21static.xyz",15],["makimbo.xyz",15],["djrudrabasti.in",16],["vstdrive.in",17],["alpinecorporate.com",18],["theprodkeys.com",19],["forasm.com",20],["bloginkz.com",21],["go.freetrx.fun",21],["wpking.in",21],["yifysubtitles.me",21],["michaelemad.com",21],["shtms.co",21],["gitizle.vip",21],["ay.live",21],["techrfour.com",21],["theicongenerator.com",21],["multilinkfz.xyz",21],["yindex.xyz",21],["unityassetcollection.com",21],["earningradar.com",21],["findi.pro",21],["uzunversiyon.xyz",21],["direkizle.xyz",21],["tamindir.mobi",21],["gitlink.pro",21],["aylink.co",21],["moretvtime.com",21],["urlpay.net",21],["claim4.fun",21],["finsurances.co",22],["fansonlinehub.com",23],["teralink.me",23],["teraearn.com",23],["terashare.me",23],["hotmediahub.com",23],["terabox.fun",23],["covemarkets.com",24],["finclub.in",25],["financeyogi.net",25],["trangchu.news",25],["downfile.site",25],["doibihar.org",25],["educationgyani.com",25],["ffworld.xyz",25],["gawbne.com",25],["forex-trnd.com",[25,48]],["forex-golds.com",25],["cravesandflames.com",26],["novelsapps.com",26],["codesnse.com",26],["speedtorrent.ru",26],["listas.pro",26],["healthy4pepole.com",[26,97,99]],["sitecuatui.xyz",26],["haonguyen.top",26],["androjungle.com",27],["getmodsapk.com",27],["mixrootmods.com",[28,103]],["consoleroms.com",28],["romspedia.com",28],["edummm.xyz",28],["shortlinks.tech",29],["dramaworldhd.co",29],["bitefaucet.com",29],["filmypoints.in",[30,36]],["vinstartheme.com",31],["instamod.net",31],["jenismac.com",32],["unityassets4free.com",32],["spacebin.site",32],["freemodapks.com",32],["player.repelis24.rs",33],["dyp.li",34],["linku.to",35],["oneslidephotography.com",36],["apasih.my.id",36],["financekami.com",36],["bico8.com",36],["techyinfo.in",36],["smallinfo.in",36],["techymedies.com",36],["disheye.com",36],["ufacw.com",36],["googledrivelinks.com",36],["technicalatg.com",[36,43]],["7apple.net",36],["arhplyrics.in",36],["jardima.com",36],["courseforfree.com",36],["tutorial.siberuang.com",36],["segurosdevida.site",36],["surl.li",37],["bankvacency.com",38],["starfiles.co",39],["nguyenvanbao.com",40],["androidecuatoriano.xyz",41],["sinonimos.de",42],["blogtechh.com",44],["financerites.in",44],["financerites.com",44],["diudemy.com",45],["techboyz.xyz",45],["adslink.pw",45],["3dzip.org",47],["3rabsnews.com",48],["mobileprice.site",48],["bestmobilenew.com",48],["linkjust1.com",48],["ta2deem7arbya.com",[49,86]],["eda-ah.com",[49,86]],["modzilla.in",50],["vrcmods.com",50],["garutexpress.id",50],["getfreecourses.co",51],["dosya.hizliresim.com",52],["vebma.com",53],["pinloker.com",53],["sekilastekno.com",53],["blogmado.com",54],["webhostingpost.com",55],["wikitraveltips.com",56],["naukrilelo.in",56],["fikper.com",57],["freecoursesonline.me",58],["codingnepalweb.com",[59,145]],["misirtune.blogspot.com",60],["dizimini.com",61],["mohammedkhc.com",61],["trendyoum.com",61],["cheatsquad.gg",61],["mcpedl.com",61],["filese.me",61],["c1ne.co",61],["pearos.xyz",61],["moddedguru.com",61],["py.md",61],["abhaydigitalmarketer.com",61],["bestshort.xyz",61],["moaplos.com",61],["nullslide.com",61],["mage.si",61],["embed.m3u-cdn.live",61],["mastercoria.com",61],["gaminplay.com",[62,103,123]],["gamelopte.com",62],["insurglobal.xyz",62],["sevenjournals.com",62],["digworm.io",63],["br0wsers.com",[64,190]],["hashhackers.com",65],["katdrive.net",65],["newsongs.co.in",65],["freeudemycourse.com",66],["modshost.net",67],["coincity.in",67],["djxmaza.in",67],["examtadka.com",67],["proviralhost.com",67],["urbharat.xyz",67],["codenova-center.web.app",68],["minecraftalpha.net",69],["aeromods.app",70],["whatsaero.com",70],["pahe.win",70],["financeflix.in",70],["technoflip.in",70],["flightsim.to",70],["hikarinoakari.com",70],["hikarinoakariost.info",70],["recipesdelite.com",71],["edumaz.com",72],["blisseyhusband.in",72],["bingotingo.com",72],["compressware.in",72],["geektopia.info",72],["freecoursewebsite.com",72],["dosyayukle.biz",72],["freetutorialsus.com",72],["apkmos.com",72],["sfile.mobi",72],["notipostingt.com",73],["cmacked.com",74],["movieflixpro.com",74],["gocmod.com",75],["speedynews.xyz",76],["xmod.in",76],["crazyblog.in",[76,121,122]],["studyuo.com",[76,121,122]],["sbkaise.in",76],["janusnotes.com",76],["anime-sanka.com",77],["kiemlua.com",[78,109,151]],["world-trips.net",[78,113]],["pes-patches.com",79],["data.morsodifame.com",79],["ifile.cc",79],["filemoon.sx",80],["discordbotlist.com",81],["truongblogger.top",82],["koyi.pub",83],["cashearn.cc",84],["subscene.vip",84],["safelink.omglyrics.com",84],["4download.net",84],["anomize.xyz",84],["boardgamesonline.net",84],["thizissam.in",[85,104]],["alphaantileak.net",85],["o-pro.online",86],["animeuploader.com",86],["konstantinova.net",86],["ontools.net",87],["teknopaid.xyz",87],["asdfiles.com",88],["11bit.co.in",89],["spantechie.com",90],["paste1s.com",91],["note1s.com",91],["easylinkref.com",91],["redirect.dafontvn.com",[92,93]],["samapkstore.com",[92,93]],["andronews18.blogspot.com",[92,93]],["ph.tpaste.net",[92,93]],["apps2app.com",92],["pro-bangla.com",92],["cheatermad.com",94],["streamcheck.link",95],["tinyurl.is",95],["usanewstoday.club",96],["earnme.club",96],["top1iq.com",97],["sama-pro.com",97],["7misr4day.com",[97,118]],["coursefreedl.com",97],["apkmaza.net",97],["jpopsingles.eu",97],["newzflair.com",98],["newzmagic.com",98],["adlice.com",99],["yalla-shoot-now.us",99],["forexeen.us",99],["health-and.me",99],["wondervelocity.com",99],["bluetechno.net",99],["world2our.com",99],["mobi2c.com",[99,109]],["mywatchseries.fun",99],["telepisodes.org",99],["kingtalks.net",99],["maxurlz.com",99],["allcryptoz.net",99],["freewebcart.com",99],["safe.kangkimin.com",99],["maxservicesi.com",99],["techhelpbd.com",100],["egyfalcons.com",101],["premads.com",102],["leeapk.com",103],["mealcold.com",103],["foodxor.com",103],["freemodsapp.xyz",103],["mayaremix.in",103],["infortechno.com",103],["getintoway.com",103],["gktech.uk",103],["worldmak.com",103],["ftuapps.dev",103],["dl.tech-story.net",103],["themorningtribune.com",103],["veganho.co",103],["veganal.co",103],["mosqam.com",103],["bimo-cash.readi.online",103],["blog.textpage.xyz",103],["claimlite.club",103],["bitcomarket.net",103],["1apple.xyz",103],["mcrypto.club",[103,149]],["gamepure.in",103],["veganab.co",103],["apkmaven.io",103],["choiceappstore.xyz",103],["worldappsstore.xyz",103],["gifans.com",103],["iptvjournal.com",103],["kienthucrangmieng.com",103],["coin-free.com",103],["moddingzone.in",103],["insurance-space.xyz",103],["blognews.in",103],["noithatmyphu.vn",103],["dulichkhanhhoa.net",103],["therootdroid.com",103],["filessrc.com",104],["srcimdb.com",104],["udemycourses.me",104],["eu.tapchipi.com",104],["citychilli.com",104],["psdly.com",104],["desitvshows.xyz",104],["katmoviehd4.com",104],["download.modsofapk.com",104],["infopedia24.com",104],["linkdecode.com",104],["short-ly.co",105],["upshrink.com",105],["jojo-themes.net",106],["diglink.blogspot.com",107],["th-world.com",107],["za.gl",108],["za.uy",108],["rezence.com",109],["techmody.io",[109,128]],["yoshare.net",109],["mikl4forex.com",[109,151]],["publicananker.com",[109,151]],["aemenstore.com",109],["cazzette.com",109],["truebrandy.com",109],["hookeaudio.com",109],["restorbio.com",109],["medcpu.com",109],["forex-gold.net",[109,113]],["kingsleynyc.com",109],["lucidcam.com",109],["staaker.com",109],["byboe.com",109],["thegoneapp.com",109],["nousdecor.com",109],["rodjulian.com",[109,151]],["taisv.com",[109,151]],["alogum.com",[109,151]],["aloegg.com",[109,151]],["pennbookcenter.com",[109,151]],["samfirms.com",110],["appsmodz.com",111],["cararegistrasi.com",112],["healdad.com",113],["gamalk-sehetk.com",113],["healthfirstweb.com",114],["yogablogfit.com",114],["vocalley.com",114],["howifx.com",114],["enit.in",114],["skincarie.com",114],["imperialstudy.com",114],["hamsterss.website",115],["apkmb.com",115],["boobychristmas.com",116],["ethereumfaucet.info",117],["tutcourse.com",118],["luckydice.net",118],["coinsearns.com",118],["gdfreak.xyz",118],["doctor-groups.com",118],["crypto-faucet.xyz",118],["iklandb.com",118],["urapk.com",118],["dogemate.com",[118,161]],["shorteet.com",118],["bitearns.com",118],["girls-like.me",119],["sonixgvn.net",119],["runmods.com",119],["watchdoge.xyz",120],["informatikamu.id",[121,122]],["technicalatg.xyz",[121,122]],["taregna.com",[121,122]],["toolss.net",[121,122]],["tutsgalaxy.net",[121,122]],["otomi-games.com",[122,156]],["yifysub.net",124],["cdmstudy.site",125],["insurance.recipesdelite.com",125],["file.bospedia.com",126],["toptap.website",127],["boomx5.com",127],["howtofree.org",129],["rethmic.com",130],["majidzhacker.com",[131,132]],["itscybertech.com",133],["gold-24.net",134],["3rabsports.com",134],["forexrw7.com",134],["fx-22.com",134],["forexmab.com",134],["forexwaw.club",134],["forex-articles.com",134],["linkjust.com",134],["forexlap.com",134],["shareappscrack.com",135],["oiipdf.com",136],["upstore.net",137],["subs4series.com",138],["gamingforecast.com",139],["icutlink.com",140],["android-apk.org",140],["semawur.com",140],["zegtrends.com",141],["littlebyte.net",142],["megadescargas.net",143],["blyts.net",143],["lawebdelprogramador.com",144],["win10.vn",146],["faucet.cryptourl.net",146],["dogeatm.com",146],["claimbits.io",146],["i-bits.io",146],["diamondfaucet.space",146],["gobits.io",146],["russiacoin.xyz",146],["lionltcfaucet.xyz",146],["faucet.shorterall.com",146],["yellowfaucet.ovh",146],["bollypluse.in",147],["freecourseslab.com",148],["freetutorialseu.com",148],["tipslearn.com",149],["siberuang.com",149],["waaboom.com",149],["healthymaster.xyz",149],["faucetcrypto.com",150],["mynewshub.co",151],["techbigs.com",152],["kiktu.com",153],["wallpaperaccess.com",154],["uniqueten.net",157],["elil.cc",158],["game-kentang.blogspot.com",159],["upfile.us",159],["mad4wheels.com",160],["moviesdaweb.blogspot.com",162],["dlsharefile.com",163],["eco-area.com",164],["safelink.rezkozpatch.xyz",[165,166]],["onlinecoursebay.com",167],["emulatorgames.net",168],["iptv4best.com",169],["leechall.com",170],["kpopstan.com",171],["ouo.io",172],["cpmlink.net",172],["short-url.link",173],["findicons.com",174],["nulleb.com",175],["bfas237blog.info",176],["dr-farfar.net",177],["saungfirmware.id",178],["goossh.com",179],["onlinefreecourse.net",180],["thingiverse.com",181],["linkerload.com",182],["ockles.com",182],["ljutkeunvpn.blogspot.com",182],["mobilelegends.shop",182],["linksaya.com",183],["phpscripttr.com",184],["mazakony.net",184],["5mod-file.ru",185],["genlink.cc",186],["apkprofree.com",187],["zedge.net",188],["diskapk.ru",189],["softwaresde.com",190],["tr.link",191],["d0000d.com",193],["do0od.com",193],["ds2play.com",193],["doods.pro",193],["dooood.com",193],["dood.yt",193],["dood.re",193],["dood.wf",193],["dood.la",193],["dood.pm",193],["dood.so",193],["dood.to",193],["dood.watch",193],["dood.ws",193],["nightfallnews.com",194],["retrostic.com",195],["bolicheintercambios.net",196],["lg-firmwares.com",197],["sfirmware.com",197],["imgqec.online",198],["imgwbfh.online",198],["imgyer.store",198],["imgxuh.cfd",198],["imgngc.sbs",198],["imgezx.sbs",198],["imgxza.store",198],["imgwqr.online",198],["imagehaha.com",198],["imgblaze.net",198],["imgkaka.xyz",198],["pixsera.net",198],["imgfrost.net",198],["imgair.net",198],["wallpaperplay.com",199],["lnk.parts",200],["lnk.news",200],["sammobile.com",201],["bomurl.com",202],["go.geghost.com",203],["romhustler.org",204],["a2zupload.com",205],["bluemediadownload.lat",206],["bluemediaurls.lol",206],["bluemedialink.online",206],["dl.pcgamestorrents.org",206],["get-url.com",206]]);

const entitiesMap = new Map([["privatemoviez",4],["lootlinks",70],["ibomma",86],["animesanka",155],["akwam",192],["bluemediafile",206],["bluemediafiles",206]]);

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
