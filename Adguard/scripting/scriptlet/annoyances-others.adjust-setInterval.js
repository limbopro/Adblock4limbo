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

const argsList = [["generateDownloadLink","*","0.001"],["countDown()","*","0.28"],["timer","*","0.001"],["/proceed|mdtimer/","*","0.001"],["time","*","0.02"],["Popup will close in","*","0.001"],["/wpsafe|wait|timer/","*","0.001"],["time--","*","0.001"],["count","*","0.001"],["update","*","0.001"],["counter","*","0.001"],["/wpsafe-|timeLeft/","*","0.001"],["wpsafe-","*","0.001"],["mdtimer","*","0.001"],["timer","","0.02"],["countdown","*","0.001"],["counter"],["clearInterval","*","0.02"],["clearInterval","*","0.001"],["wait","*","0.02"],["count","*","0.02"],["counter","*","0.02"],["download","*","0.02"],["timeLeft","*","0.02"],["timeLeft","","0.02"],["/_0x|wpsafe-/","*","0.02"],["Download","*","0.02"],["counter--","*","0.02"],["count--","*","0.02"],["p--","","0.02"],["current()","*","0.02"],["wpsafe-","*","0.02"],["disabled","*","0.02"],["timePassed","*","0.02"],["countdown","*","0.02"],["/Seconds|download/","*","0.02"],["download_progress","*","0.02"],["count","1600","0.02"],["downloadButton","*","0.02"],["waitTime","*","0.02"],["timer","*","0.02"],["timeSec--","*","0.02"],["_0x","*","0.02"],["wpsafe-generate","*","0.02"],["document.hidden","*","0.02"],["#mdtimer","","0.02"],["updatePercentage","*","0.02"],["timePassed","","0.02"],["DOWNLOAD","*","0.02"],["Number","","0.02"],["/counter|wait/","*","0.02"],["get-link","*","0.02"],["cont","*","0.02"],[",dataType:_","1000","0.02"],["/wpsafe|count/","*","0.02"],["downloadToken","*","0.02"],["/timeLeft|wpsafe-/","*","0.02"],["cnDownloadBtn","*","0.02"],["download_link","*","0.02"],["secondsleft","*","0.02"],["countdown","","0.02"],["yuidea-","*","0.02"],["timer--","*","0.02"],["success","","0.02"],["/verify_text|isCompleted/","*","0.02"],["#timer","","0.02"],["countdownwrapper","","0.02"],["timeleft","*","0.02"],["contador","*","0.02"],["Your Link","","0.02"],["count","","0.02"],["/download|Please/","","0.02"],["downloadButton","","0.02"],["window.location.href= atob(","1000","0.02"],[".show_download_links","","0.02"],["download-btn","","0.02"],["updatePercentage","100","0.02"],["decodeURIComponent(link)","","0.02"],["/count-|-wait/","*","0.02"],["waktu--","","0.02"],[".download","","0.02"],["/base-timer-label|waktu--/","","0.02"],["curCount","","0.02"],["Please wait","","0.02"],["mdtimer","","0.02"],["gotolink","*","0.02"],["seconds--","*","0.02"],["claim_button","*","0.02"],["/Please Wait|Generating Links/","*","0.02"],["#second","","0.02"],["#countdown","","0.02"],["progressbar","30","0.02"],["#upbtn","","0.02"],["skip-btn","*","0.02"],["tp-","*","0.02"],["downloadTimer","","0.02"],["/Please Wait|Go to download/","","0.02"],["counter","","0.02"],["/counter--|downloadButton/","","0.02"],["location","","0.02"],["myCounter","*","0.001"],["/wpsafe|wait/","*","0.001"],["counter--","","0.02"],["pleasewait","","0.02"],["bb_download_delay","","0.02"],["0x","","0.02"],["timeCount","*","0.2"],["counter","2000","0.02"],["downloadLinkButton","*","0.02"],["startChecking","*","0.02"],["timer","1000","0.02"],["timeleft","","0.02"],["timeSec--","*","0.001"],["show_download_links","","0.02"],["REDIRECTING","*","0.02"],["ct","1000","0.02"],["sec--","","0.02"],["count--","","0.02"],["sec","","0.02"],["wpsafe-","","0.02"],["wpsafe-","2000","0.02"],["wpsafe-","1500","0.02"],["get-link","","0.02"],["download","2000","0.02"],["timer","1500","0.02"],["timer","2000","0.02"],["Link","550","0.02"],["#proceed","","0.02"],["counter","1800","0.02"],["downloadButton","1500","0.02"],["sp-count-down","","0.02"],["gotolink","","0.02"],["btngetlink","30","0.02"],["btn","","0.02"],["sec--","","0.001"],["/show_download_links|downloadTimer/","","0.02"],["timeinterval","","0.02"],["countDown","1150","0.5"],["makingdifferenttimer","50","0.02"],["Link()","","0.02"],["time","","0.02"],["time","2500","0.02"],["freeRemind","","0.02"],["contador","","0.02"],["contador--","","0.02"],["counter--","1300","0.02"],["seconds","","0.02"],["downloadButton","1000","0.02"],["counter","1000","0.02"],["wpsafe-generate","","0.02"],["timerText","","0.02"],["#counter","","0.02"],["counter","1500","0.02"],["download-count-down","","0.02"],["runTimer","","0.02"],["[0x","","0.02"],["#download","","0.02"],["percentVal","30","0.02"],["wpsafe-generate","1000","0.02"],["wpsafe","","0.02"],["timer","1000","0.6"],["","1000","0.05"],["second--","","0.02"],["#bt","","0.02"],["counter--","100","0.02"],["#Download-Card","","0.02"],[".stop()","","0.02"],["Link will appear","510","0.02"],["Link will appear","1010","0.02"],["countdown","2000","0.02"],["sayimiBaslat","","0.02"],["wpsafe-link","2000","0.02"],["#eg-timer","","0.3"],["#CountDown","","0.02"],["dllink","","0.02"],["time--","","0.02"],["stop()","","0.02"],["second","1000","0.02"],["wait_seconds","","0.02"],["download-countdown","","0.02"],["current_progress","2000","0.02"],["display()","","0.02"],["get_link","","0.02"],["goToLink","2200","0.02"],[".countdown","2000","0.02"],["urll","800","0.02"],["Downloading","","0.02"],["linkDL","","0.02"],["downloadButton","2400","0.02"],["#pleasewait","","0.02"],[".fcounter span","","0.02"],["real-link","","0.02"],[".wpapks-download-link-wrapper","","0.02"],["(i-1)","","0.02"],["fcounter","","0.02"],["show_ag","","0.02"],["timer","700","0.02"],["clock()","1000","0.02"],[".countdown","","0.02"],["secondsLeft","","0.02"],["timeLeft--","","0.02"],["/_0x[\\s\\S]*?decodeURIComponent/","","0.02"],["count-","","0.02"],["#download-popup","","0.02"],[".timer","","0.02"],["#download_menu","","0.02"],["r--","","0.02"],["showDownloadButton","","0.02"],["download_link","","0.02"],["onLoop","","0.02"],["timer.remove","","0.02"],["download","","0.02"],["i--","","0.02"]];

const hostnamesMap = new Map([["uptoearn.xyz",0],["uploadhaven.com",1],["linksae.com",2],["wellness4live.com",2],["insuranceinfos.in",2],["mamahawa.com",3],["10short.pro",3],["lk21static.xyz",4],["makimbo.xyz",4],["djrudrabasti.in",5],["165.22.246.130",6],["vstdrive.in",7],["zeroupload.com",8],["bhojpuritop.in",8],["amritadrino.com",[8,43]],["decrypt.day",9],["alpinecorporate.com",10],["theprodkeys.com",11],["forasm.com",12],["heroxcheat.cloud",13],["bloginkz.com",14],["go.freetrx.fun",14],["wpking.in",14],["yifysubtitles.me",14],["michaelemad.com",14],["shtms.co",14],["gitizle.vip",14],["ay.live",14],["techrfour.com",14],["theicongenerator.com",14],["multilinkfz.xyz",14],["yindex.xyz",14],["unityassetcollection.com",14],["earningradar.com",14],["findi.pro",14],["uzunversiyon.xyz",14],["direkizle.xyz",14],["tamindir.mobi",14],["gitlink.pro",14],["aylink.co",14],["moretvtime.com",14],["urlpay.net",14],["claim4.fun",14],["plog.com.br",15],["finsurances.co",16],["hotmediahub.com",[17,18]],["terabox.fun",17],["covemarkets.com",19],["finclub.in",20],["financeyogi.net",20],["trangchu.news",20],["downfile.site",20],["player.pelisgratishd.io",20],["doibihar.org",20],["educationgyani.com",20],["ffworld.xyz",20],["gawbne.com",20],["forex-trnd.com",[20,45]],["forex-golds.com",20],["cravesandflames.com",21],["novelsapps.com",21],["codesnse.com",21],["speedtorrent.ru",21],["listas.pro",21],["forexit.io",21],["healthy4pepole.com",[21,95,97]],["sitecuatui.xyz",21],["haonguyen.top",21],["androjungle.com",22],["getmodsapk.com",22],["mixrootmods.com",23],["consoleroms.com",23],["romspedia.com",23],["edummm.xyz",23],["shortlinks.tech",24],["dramaworldhd.co",24],["bitefaucet.com",24],["filmypoints.in",[25,31]],["vinstartheme.com",26],["instamod.net",26],["jenismac.com",27],["unityassets4free.com",27],["spacebin.site",27],["freemodapks.com",27],["player.repelis24.rs",28],["dyp.li",29],["linku.to",30],["oneslidephotography.com",31],["apasih.my.id",31],["financekami.com",31],["bico8.com",31],["techyinfo.in",31],["smallinfo.in",31],["techymedies.com",31],["disheye.com",31],["ufacw.com",31],["googledrivelinks.com",31],["technicalatg.com",[31,40]],["7apple.net",31],["arhplyrics.in",31],["netfile.cc",31],["jardima.com",31],["courseforfree.com",31],["tutorial.siberuang.com",31],["segurosdevida.site",31],["surl.li",32],["bankvacency.com",33],["indilinks.xyz",34],["discordbotlist.com",34],["maxsilo.in",35],["starfiles.co",36],["nguyenvanbao.com",37],["androidecuatoriano.xyz",38],["sinonimos.de",39],["atlai.club",39],["blogtechh.com",41],["vavada5com.com",41],["financerites.in",41],["financerites.com",41],["diudemy.com",42],["techboyz.xyz",42],["adslink.pw",42],["3dzip.org",44],["3rabsnews.com",45],["mobileprice.site",45],["bestmobilenew.com",45],["linkjust1.com",45],["vidtome.stream",45],["ta2deem7arbya.com",[46,84]],["eda-ah.com",[46,84]],["modzilla.in",47],["garutpos.com",47],["vrcmods.com",47],["garutexpress.id",47],["getfreecourses.co",48],["dosya.hizliresim.com",49],["vebma.com",50],["pinloker.com",50],["sekilastekno.com",50],["blogmado.com",51],["suaurl.com",52],["webhostingpost.com",53],["wikitraveltips.com",54],["naukrilelo.in",54],["fikper.com",55],["freecoursesonline.me",56],["codingnepalweb.com",[57,145]],["misirtune.blogspot.com",58],["userload.co",59],["dizimini.com",60],["mohammedkhc.com",60],["trendyoum.com",60],["dl.indexmovies.xyz",60],["cheatsquad.gg",60],["mcpedl.com",60],["filese.me",60],["linkslo.com",60],["c1ne.co",60],["pearos.xyz",60],["moddedguru.com",60],["py.md",60],["abhaydigitalmarketer.com",60],["bestshort.xyz",60],["moaplos.com",60],["nullslide.com",60],["mage.si",60],["embed.m3u-cdn.live",60],["embed.tvcdn.live",60],["mastercoria.com",60],["gaminplay.com",[61,101,121]],["gamelopte.com",61],["insurglobal.xyz",61],["sevenjournals.com",61],["digworm.io",62],["br0wsers.com",[63,195]],["hashhackers.com",64],["katdrive.net",64],["newsongs.co.in",64],["altblogger.net",65],["cashearn.cc",65],["subscene.vip",65],["safelink.omglyrics.com",65],["4download.net",65],["acortar.info",65],["kotp1000000.xyz",65],["blog.donia-tech.net",65],["anomize.xyz",65],["boardgamesonline.net",65],["freeudemycourse.com",66],["modshost.net",67],["coincity.in",67],["djxmaza.in",67],["examtadka.com",67],["proviralhost.com",67],["urbharat.xyz",67],["codenova-center.web.app",68],["minecraftalpha.net",69],["aeromods.app",70],["whatsaero.com",70],["pahe.win",70],["financeflix.in",70],["technoflip.in",70],["studyranks.in",70],["flightsim.to",70],["hikarinoakari.com",70],["hikarinoakariost.info",70],["recipesdelite.com",71],["edumaz.com",72],["blisseyhusband.in",72],["bingotingo.com",72],["compressware.in",72],["geektopia.info",72],["freecoursewebsite.com",72],["dosyayukle.biz",72],["freetutorialsus.com",72],["apkmos.com",72],["sfile.mobi",72],["notipostingt.com",73],["cmacked.com",74],["movieflixpro.com",74],["gocmod.com",75],["speedynews.xyz",76],["xmod.in",76],["tecmundo.net",76],["crazyblog.in",[76,119,120]],["studyuo.com",[76,119,120]],["sbkaise.in",76],["janusnotes.com",76],["anime-sanka.com",77],["kiemlua.com",[78,107,152]],["world-trips.net",[78,111]],["newforex.online",[78,107]],["pes-patches.com",79],["data.morsodifame.com",79],["ifile.cc",79],["filemoon.sx",80],["truongblogger.top",81],["koyi.pub",82],["thizissam.in",[83,102]],["alphaantileak.net",83],["o-pro.online",84],["mazen-ve.com",84],["animeuploader.com",84],["konstantinova.net",84],["ontools.net",85],["teknopaid.xyz",85],["asdfiles.com",86],["11bit.co.in",87],["spantechie.com",88],["paste1s.com",89],["note1s.com",89],["easylinkref.com",89],["redirect.dafontvn.com",[90,91]],["samapkstore.com",[90,91]],["andronews18.blogspot.com",[90,91]],["ph.tpaste.net",[90,91]],["sdetectives.id",90],["apps2app.com",90],["pro-bangla.com",90],["cheatermad.com",92],["streamcheck.link",93],["tinyurl.so",93],["tinyurl.is",93],["usanewstoday.club",94],["earnme.club",94],["top1iq.com",95],["sama-pro.com",95],["7misr4day.com",[95,116]],["coursefreedl.com",95],["apkmaza.net",95],["jpopsingles.eu",95],["gplinks.co",95],["mobiget.net",95],["newzflair.com",96],["newzmagic.com",96],["adlice.com",97],["yalla-shoot-now.us",97],["forexeen.us",97],["health-and.me",97],["wondervelocity.com",97],["bluetechno.net",97],["world2our.com",97],["mobi2c.com",[97,107]],["mywatchseries.fun",97],["telepisodes.org",97],["kingtalks.net",97],["maxurlz.com",97],["allcryptoz.net",97],["topcryptoz.net",97],["thaitrieuvi.live",97],["freewebcart.com",97],["safe.kangkimin.com",97],["maxservicesi.com",97],["techhelpbd.com",98],["egyfalcons.com",99],["premads.com",100],["infortechno.com",101],["getintoway.com",101],["gktech.uk",101],["worldmak.com",101],["ftuapps.dev",101],["dl.tech-story.net",101],["themorningtribune.com",101],["veganho.co",101],["veganal.co",101],["mosqam.com",101],["bimo-cash.readi.online",101],["blog.textpage.xyz",101],["claimlite.club",101],["bitcomarket.net",101],["1apple.xyz",101],["mcrypto.club",[101,149]],["gamepure.in",101],["veganab.co",101],["apkmaven.io",101],["choiceappstore.xyz",101],["pn.cgchotbox.com",101],["worldappsstore.xyz",101],["gifans.com",101],["iptvjournal.com",101],["kienthucrangmieng.com",101],["coin-free.com",101],["moddingzone.in",101],["insurance-space.xyz",101],["blognews.in",101],["noithatmyphu.vn",101],["dulichkhanhhoa.net",101],["therootdroid.com",101],["filessrc.com",102],["srcimdb.com",102],["udemycourses.me",102],["eu.tapchipi.com",102],["short.ctvb1.info",102],["citychilli.com",102],["psdly.com",102],["desitvshows.xyz",102],["katmoviehd4.com",102],["download.modsofapk.com",102],["infopedia24.com",102],["linkdecode.com",102],["short-ly.co",103],["upshrink.com",103],["jojo-themes.net",104],["diglink.blogspot.com",105],["th-world.com",105],["za.gl",106],["za.uy",106],["rezence.com",107],["techmody.io",[107,128]],["yoshare.net",107],["mikl4forex.com",[107,152]],["publicananker.com",[107,152]],["aemenstore.com",107],["cazzette.com",107],["truebrandy.com",107],["hookeaudio.com",107],["restorbio.com",107],["medcpu.com",107],["alocd.com",107],["forex-gold.net",[107,111]],["kingsleynyc.com",107],["lucidcam.com",107],["staaker.com",107],["byboe.com",107],["thegoneapp.com",107],["nousdecor.com",107],["alobuu.com",[107,152]],["rodjulian.com",[107,152]],["aloass.com",[107,152]],["taisv.com",[107,152]],["aloguy.com",[107,152]],["alohdd.com",[107,152]],["alogum.com",[107,152]],["alobyt.com",[107,152]],["aloboi.com",[107,152]],["uebnews.online",[107,152]],["aloegg.com",[107,152]],["alofps.com",[107,152]],["pennbookcenter.com",[107,152]],["samfirms.com",108],["appsmodz.com",109],["cararegistrasi.com",110],["healdad.com",111],["gamalk-sehetk.com",111],["yogablogfit.com",112],["vocalley.com",112],["howifx.com",112],["enit.in",112],["skincarie.com",112],["imperialstudy.com",112],["hamsterss.website",113],["apkmb.com",113],["boobychristmas.com",114],["ethereumfaucet.info",115],["tutcourse.com",116],["luckydice.net",116],["coinsearns.com",116],["gdfreak.xyz",116],["doctor-groups.com",116],["crypto-faucet.xyz",116],["mik4mob.com",116],["iklandb.com",116],["urapk.com",116],["dogemate.com",[116,163]],["shorteet.com",116],["earnbits.xyz",116],["bitearns.com",116],["girls-like.me",117],["sonixgvn.net",117],["runmods.com",117],["watchdoge.xyz",118],["informatikamu.id",[119,120]],["technicalatg.xyz",[119,120]],["taregna.com",[119,120]],["toolss.net",[119,120]],["tutsgalaxy.net",[119,120]],["otomi-games.com",[120,158]],["yifysub.net",122],["cdmstudy.site",123],["insurance.recipesdelite.com",123],["allbuzzin.com",[124,125]],["file.bospedia.com",126],["toptap.website",127],["adnit-tri.tk",127],["boomx5.com",127],["howtofree.org",129],["rethmic.com",130],["majidzhacker.com",[131,132]],["itscybertech.com",133],["gold-24.net",134],["3rabsports.com",134],["forexrw7.com",134],["fx-22.com",134],["forexmab.com",134],["forexwaw.club",134],["forex-articles.com",134],["linkjust.com",134],["forexlap.com",134],["shareappscrack.com",135],["oiipdf.com",136],["upstore.net",137],["subs4series.com",138],["gamingforecast.com",139],["icutlink.com",140],["android-apk.org",140],["semawur.com",140],["zegtrends.com",141],["littlebyte.net",142],["megadescargas.net",143],["blyts.net",143],["lawebdelprogramador.com",144],["win10.vn",146],["wildfaucets.ml",146],["faucet.cryptourl.net",146],["dogeatm.com",146],["claimbits.io",146],["i-bits.io",146],["diamondfaucet.space",146],["gobits.io",146],["russiacoin.xyz",146],["starsfaucet.com",146],["lionltcfaucet.xyz",146],["faucet.shorterall.com",146],["yellowfaucet.ovh",146],["bollypluse.in",147],["freecourseslab.com",148],["freetutorialseu.com",148],["informaxonline.com",[149,171]],["tipslearn.com",149],["androidnougatapk.com",149],["siberuang.com",149],["waaboom.com",149],["healthymaster.xyz",149],["bkksnews.xyz",149],["faucetcrypto.com",150],["techoow.com",151],["mynewsmedia.in",152],["mynewshub.co",152],["techbigs.com",153],["kiktu.com",154],["technicalegy.com",155],["wallpaperaccess.com",156],["uniqueten.net",159],["ultraten.net",159],["elil.cc",160],["game-kentang.blogspot.com",161],["upfile.us",161],["mad4wheels.com",162],["moviesdaweb.blogspot.com",164],["dlsharefile.com",165],["eco-area.com",166],["safelink.rezkozpatch.xyz",[167,168]],["onlinecoursebay.com",169],["kazanclilink.com",170],["emulatorgames.net",172],["iptv4best.com",173],["leechall.com",174],["kpopstan.com",175],["ouo.io",176],["cpmlink.net",176],["short-url.link",177],["findicons.com",178],["nulleb.com",179],["bfas237blog.info",180],["dr-farfar.net",181],["saungfirmware.id",182],["goossh.com",183],["onlinefreecourse.net",184],["site.dz4win.com",185],["thingiverse.com",186],["linkerload.com",187],["ockles.com",187],["ljutkeunvpn.blogspot.com",187],["mobilelegends.shop",187],["linksaya.com",188],["phpscripttr.com",189],["essek.gen.tr",189],["indir.turkceyama.net",189],["clicads.fr",189],["mazakony.net",189],["5mod-file.ru",190],["genlink.cc",191],["apkprofree.com",192],["zedge.net",193],["hakdisk.ru",194],["diskapk.ru",194],["softwaresde.com",195],["tr.link",196],["ds2play.com",198],["doods.pro",198],["dooood.com",198],["dood.yt",198],["dood.re",198],["dood.wf",198],["dood.la",198],["dood.pm",198],["dood.so",198],["dood.to",198],["dood.watch",198],["dood.ws",198],["nightfallnews.com",199],["retrostic.com",200],["shiroyasha.me",201],["bolicheintercambios.net",202],["lg-firmwares.com",203],["sfirmware.com",203],["imgqec.online",204],["imgwbfh.online",204],["imgyer.store",204],["imgxuh.cfd",204],["imgngc.sbs",204],["imgezx.sbs",204],["imgxza.store",204],["imgwqr.online",204],["imagehaha.com",204],["imgpukrr.site",204],["imagent.buzz",204],["imagepuitr.buzz",204],["imgblaze.net",204],["imgkorle.buzz",204],["imgkaka.xyz",204],["pixsera.net",204],["imgfrost.net",204],["imgair.net",204],["wallpaperplay.com",205],["lnk.parts",206],["lnk.news",206],["sammobile.com",207],["bomurl.com",208],["go.geghost.com",209],["romhustler.org",210],["a2zupload.com",211],["dl.pcgamestorrents.org",212],["get-url.com",212]]);

const entitiesMap = new Map([["lootlinks",70],["ibomma",84],["animesanka",157],["akwam",197],["bluemediafile",212],["bluemediafiles",212]]);

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
