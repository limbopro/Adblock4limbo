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

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_adjustSetInterval = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [[],["","1200","0"],["generalTimeLeft","*","0.02"],["stop()"],["clearInterval"],["myTimer","1500"],["countdown","2000"],["counter","2000"],["","1800"],["","","0"],["yuidea-","*"],["timeLeft"],["","","0.001"],["time"],["time","2500"],["clearInterval","*"],["seconds"],["","","0.02"],["time.html","1000"],["circle_animation"],["countdown"],["web_counter"],["video_counter"],["/SplashScreen|BannerAd/"],["i--"],["","*","0"],["curAd"],["js-btn-skip","1000"],["countdown","*","0.001"],["timer"],["gotolink"],["downloadTimer"],["invoke","1000"],["download","*","0.02"],["countdown","*"],["disabled"],["/count|verify|isCompleted/","","0.001"],["counter"],["/counter|timer/","*"],["_0x","*","0.001"],["counter","*","0.02"],["/.?/","*","0.02"],["/wpsafe|wait/","*","0.001"],["timer","*","0.02"],["timer","1300"],["countDown","*"],["timer","*"],["/.?/","*","0.001"],["timeLeft","*","0.001"],["timer","*","0.001"],["counter","*","0.001"],["timer","1000","0.001"],["timer","1600","0.001"],["count","*","0.001"],["/counter|wait/","*","0.001"],["interval","*"],["sec--","*","0.001"],["display"],["show_download_links"],["counter","*"],["countDown"],["","","0.3"],["sec--"],["time","","0"],["secs"],["download"],["_0x"],["timer.remove"],["downloadButton"],["timePassed"],["timeleft"],["counter--"],["(i-1)"],["skipOptions"],["countDown","1150","0.5"],["timercounter"],["count","*"],["#timer"],["temp"],["sec"],["counter","","0.02"],["timePassed","1300"],["timer","1800"],["download_delay"],["distance"],["count"],["contador"],["countdownTime","1500"],["second"],["timer","1500"],["updatePercentage","100","0.02"],["current()"],["l","","0"],["countdown","*","0.02"],["time","","0.02"],["wait"],["downloadToken"],["updateProgress","*"],["current-=1"],["counter","1000","0.001"],["scrollIncrement","*"],["","*","0.001"],["saniye"],["","1000","0.001"],["skipAdSeconds","","0.02"],["adv","*"]];

const hostnamesMap = new Map([["mage.si",0],["arcade.buzzrtv.com",0],["arcade.lemonde.fr",0],["arena.gamesforthebrain.com",0],["bestpuzzlesandgames.com",0],["cointiply.arkadiumarena.com",0],["gamelab.com",0],["games.abqjournal.com",0],["games.ajc.com",0],["games.amny.com",0],["games.bellinghamherald.com",0],["games.besthealthmag.ca",0],["games.bnd.com",0],["games.boston.com",0],["games.bostonglobe.com",0],["games.bradenton.com",0],["games.centredaily.com",0],["games.cnhinews.com",0],["games.crosswordgiant.com",0],["games.dallasnews.com",0],["games.daytondailynews.com",0],["games.denverpost.com",0],["games.everythingzoomer.com",0],["games.fresnobee.com",0],["games.gameshownetwork.com",0],["games.get.tv",0],["games.greatergood.com",0],["games.heraldonline.com",0],["games.heraldsun.com",0],["games.idahostatesman.com",0],["games.insp.com",0],["games.islandpacket.com",0],["games.journal-news.com",0],["games.kansas.com",0],["games.kansascity.com",0],["games.kentucky.com",0],["games.lancasteronline.com",0],["games.ledger-enquirer.com",0],["games.macon.com",0],["games.mercedsunstar.com",0],["games.modbee.com",0],["games.moviestvnetwork.com",0],["games.myrtlebeachonline.com",0],["games.nationalreview.com",0],["games.newsobserver.com",0],["games.parade.com",0],["games.pressdemocrat.com",0],["games.puzzlebaron.com",0],["games.puzzler.com",0],["games.puzzles.ca",0],["games.qns.com",0],["games.readersdigest.ca",0],["games.sacbee.com",0],["games.sanluisobispo.com",0],["games.sixtyandme.com",0],["games.sltrib.com",0],["games.springfieldnewssun.com",0],["games.star-telegram.com",0],["games.sunherald.com",0],["games.theadvocate.com",0],["games.thenewstribune.com",0],["games.theolympian.com",0],["games.theportugalnews.com",0],["games.thestar.com",0],["games.thestate.com",0],["games.tri-cityherald.com",0],["games.triviatoday.com",0],["games.usnews.com",0],["games.vgwplay.com",0],["games.wordgenius.com",0],["games.wtop.com",0],["jeux.meteocity.com",0],["juegos.as.com",0],["juegos.elnuevoherald.com",0],["juegos.elpais.com",0],["philly.arkadiumarena.com",0],["play.dictionary.com",0],["puzzles.centralmaine.com",0],["puzzles.crosswordsolver.org",0],["puzzles.nola.com",0],["puzzles.pressherald.com",0],["puzzles.sunjournal.com",0],["al.ly",0],["bbf.lt",0],["cpmlink.net",0],["cut-urls.com",0],["iiv.pl",0],["shink.me",0],["ur.ly",0],["url.gem-flash.com",0],["zeiz.me",0],["1ink.cc",0],["azlink.xyz",0],["soft112.com",0],["short-url.link",0],["4download.net",0],["s.sseluxx.com",0],["onifile.com",0],["coolmathgames.com",0],["link-to.net",[0,20,21,22]],["telepisodes.org",0],["onle.co",0],["freeupload.info",0],["fstore.biz",0],["uploadfree.info",0],["deltabit.co",0],["puzzles.msn.com",0],["shon.xyz",0],["sfile.mobi",0],["upfile.us",0],["game-kentang.blogspot.com",0],["shortgoo.blogspot.com",0],["indavideo.hu",0],["sfirmware.com",0],["mobilelegends.shop",0],["ockles.com",0],["urlpay.net",0],["underhentai.net",0],["customercareal.com",0],["faupto.com",0],["suanoticia.online",0],["linkconfig.com",0],["lg-firmwares.com",0],["modcombo.com",0],["aylink.co",0],["gitizle.vip",0],["shtms.co",0],["cryptokinews.com",0],["cpmlink.pro",0],["speedynews.xyz",[0,90]],["infokeeda.xyz",0],["webzeni.com",0],["tutwuri.id",0],["mysflink.blogspot.com",0],["runmods.com",0],["anomize.xyz",0],["bondibeachau.com",0],["konstantinova.net",0],["kangkimin.com",0],["iklandb.com",0],["onepiecex.xyz",0],["thingiverse.com",0],["ufreegames.com",0],["saungfirmware.id",0],["kpopstan.com",0],["bdlink.pw",0],["fairyanime.com",0],["7misr4day.com",0],["sama-pro.com",0],["otomi-games.com",0],["curseforge.com",0],["mobitaak.com",0],["arhplyrics.in",0],["telenord.it",0],["raky.in",0],["desiflixindia.com",0],["insurance.iptvsetupguide.com",0],["javguru.top",0],["diglink.blogspot.com",0],["vkprime.com",0],["i-polls.com",0],["freecoursesonline.me",0],["yesdownloader.com",0],["games.metv.com",0],["arkadium.com",0],["tonanmedia.my.id",0],["skiplink.me",0],["yurasu.xyz",0],["isekaipalace.com",0],["khaddavi.net",0],["jrtekno.com",0],["mitedrive.com",0],["miteblog.com",0],["games.dailymail.co.uk",0],["fullhd4k.com",0],["juegos.eleconomista.es",0],["lk21static.xyz",0],["filmizlehdfilm.com",0],["fullfilmizle.cc",0],["easybib.com",0],["wallpaperaccess.com",0],["deportealdia.live",1],["noticiasesports.live",1],["noweconomy.live",1],["puzzles.standard.co.uk",2],["puzzles.independent.co.uk",2],["puzzles.bestforpuzzles.com",2],["arkadiumarena.com",2],["games.charlotteobserver.com",2],["games.miamiherald.com",2],["games.startribune.com",2],["games.word.tips",2],["indi-share.com",4],["premid.app",4],["cheatcloud.cc",4],["cheater.ninja",4],["cheatermad.com",4],["cheatsquad.gg",4],["freepdf-books.com",5],["themeslide.com",6],["thememypc.net",7],["sanoybonito.club",7],["dreamcheeky.com",[7,59]],["fidlarmusic.com",[7,59]],["publicananker.com",[7,59]],["rezence.com",[7,59]],["rodjulian.com",7],["mikl4forex.com",7],["gawbne.com",7],["forex-golds.com",7],["forex-trnd.com",7],["link.tl",8],["lnk.news",9],["lnk.parts",9],["megadescarga.net",9],["megadescargas.net",9],["fssquad.com",9],["easylinkref.com",9],["gamelopte.com",10],["goto.com.np",11],["vrcmods.com",11],["dramaworldhd.co",11],["consoleroms.com",11],["romspedia.com",11],["shortlinks.tech",11],["forexlap.com",12],["forexmab.com",12],["forexwaw.club",12],["forex-articles.com",12],["fx4vip.com",12],["forexrw7.com",[12,56]],["3rabsports.com",12],["fx-22.com",[12,56]],["gold-24.net",[12,56]],["icutlink.com",13],["android-apk.org",13],["zegtrends.com",14],["simsdom.com",15],["fansonlinehub.com",15],["hotmediahub.com",15],["terabox.fun",15],["teralink.me",15],["terashare.me",15],["teraearn.com",15],["fautsy.com",16],["multifaucet.org",16],["coinlyhub.com",16],["i-bits.io",16],["claimbits.io",16],["mundotec.pro",16],["legionjuegos.org",17],["legionpeliculas.org",17],["legionprogramas.org",17],["so1.asia",17],["lewdzone.com",19],["direct-link.net",[20,21,22]],["direkt-wissen.com",[20,21,22]],["hieunguyenphoto.com",20],["py.md",20],["ipalibrary.me",20],["gamearter.com",23],["ayobelajarbareng.com",25],["semawur.com",25],["techmody.io",25],["series-d.com",26],["doofree88.com",27],["acdriftingpro.com",28],["pixsera.net",29],["imgair.net",29],["imgblaze.net",29],["imgfrost.net",29],["vestimage.site",29],["imgwia.buzz",29],["imgbaex.store",29],["imgbah.online",29],["imgbaie.online",29],["imgbango.store",29],["imgbier.store",29],["imgbimn.store",29],["imgbqw.store",29],["imgbuba.online",29],["imgbwe.store",29],["imgbxs.online",29],["imgcao.store",29],["imgnwe.online",29],["imgqge.store",29],["imgqxb.online",29],["imgteq.online",29],["imgtex.online",29],["imgtuta.online",29],["imgwqr.online",29],["imgwww.store",29],["imgxza.store",29],["imgezx.sbs",29],["imgbcxsb.store",29],["imgbcxs.store",29],["imgbake.cfd",29],["imgmffg.sbs",29],["imgmffgtr.sbs",29],["imgnbg.sbs",29],["imgngc.sbs",29],["imgnmh.cfd",29],["imgqte.sbs",29],["imguthes.sbs",29],["imgwag.cfd",29],["imgwang.cfd",29],["imgwety.sbs",29],["imgxuh.cfd",29],["imgxytw.cfd",29],["imgycgey.sbs",29],["imgyruy.cfd",29],["imgyusa.cfd",29],["imgyyqey.sbs",29],["imgyer.store",29],["imgxhs.store",29],["imgwekr.online",29],["imgwbfh.online",29],["imgwak.online",29],["imgutry.online",29],["imgutiyu.online",29],["imgutbbn.online",29],["imgubfd.online",29],["imgrei.online",29],["imgqec.online",29],["imgpaiou.online",29],["imgpaiki.online",29],["imgmjj.store",29],["imgfa.store",29],["imgbutrt.store",29],["imgbty.store",29],["imgbdl.store",29],["imgngh.sbs",29],["imgbbfg.pics",29],["imgjhrjjr.pics",29],["imgleko.pics",29],["imgluki.pics",29],["imgnffe.pics",29],["imgnnnf.pics",29],["imgrwqz.pics",29],["imgtweqz.pics",29],["imgxzgf.pics",29],["imgyyeryt.pics",29],["picbbc.one",29],["picbbdr.one",29],["picbest.one",29],["picbhrt.one",29],["picnrrt.one",29],["picqqw.one",29],["picqr.one",29],["picqtwe.one",29],["picsjre.one",29],["piczzaq.one",29],["imgqazx.sbs",29],["imgiruyw.online",29],["picnerr.cfd",29],["pichfer.cfd",29],["picbbeq.cfd",29],["picqaxs.cfd",29],["picxxdd.cfd",29],["picqweff.cfd",29],["pickjsn.cfd",29],["piczzxsw.cfd",29],["picbbbde.cfd",29],["picbdd.cfd",29],["imgbahxg.sbs",29],["imgxune.sbs",29],["imgqklw.shop",29],["pixqkhgrt.shop",29],["pixqbngg.shop",29],["pixqwet.shop",29],["pixmos.shop",29],["imgtgd.shop",29],["imgcsxx.shop",29],["imgcssd.shop",29],["imguwjsd.sbs",29],["pictbbf.shop",29],["pixbryexa.sbs",29],["picbqqa.sbs",29],["pixbkghxa.sbs",29],["imgmgf.sbs",29],["picbcxvxa.sbs",29],["imguee.sbs",29],["imgmffmv.sbs",29],["imgbqb.sbs",29],["imgbyrev.sbs",29],["imgbncvnv.sbs",29],["pixtryab.shop",29],["imggune.shop",29],["pictryhab.shop",29],["pixbnab.shop",29],["imgbnwe.shop",29],["imgbbnhi.shop",29],["imgnbii.shop",29],["imghqqbg.shop",29],["imgyhq.shop",29],["pixnbrqwg.sbs",29],["pixnbrqw.sbs",29],["picmsh.sbs",29],["imgpke.sbs",29],["picuenr.sbs",29],["imgolemn.sbs",29],["imgoebn.sbs",29],["picnwqez.sbs",29],["imgjajhe.sbs",29],["pixjnwe.sbs",29],["pixkfjtrkf.shop",29],["pixkfkf.shop",29],["pixdfdjkkr.shop",29],["pixdfdj.shop",29],["picnft.shop",29],["pixrqqz.shop",29],["picngt.shop",29],["picjgfjet.shop",29],["picjbet.shop",29],["imgkkabm.shop",29],["imgxabm.shop",29],["imgthbm.shop",29],["imgmyqbm.shop",29],["imgwwqbm.shop",29],["imgjvmbbm.shop",29],["imgjbxzjv.shop",29],["imgjmgfgm.shop",29],["picxnkjkhdf.sbs",29],["imgxxbdf.sbs",29],["imgnngr.sbs",29],["imgjjtr.sbs",29],["imgqbbds.sbs",29],["imgbvdf.sbs",29],["imgqnnnebrf.sbs",29],["imgnnnvbrf.sbs",29],["libertycity.net",29],["takez.co",29],["nightfallnews.com",29],["cararegistrasi.com",29],["ipa-apps.me",29],["theicongenerator.com",29],["zentum.club",29],["imslp.org",29],["michaelemad.com",29],["chooyomi.com",29],["go.freetrx.fun",29],["apps2app.com",30],["jpopsingles.eu",31],["vanillatweaks.net",31],["shortenbuddy.com",31],["restegourmet.de",32],["getmodsapk.com",33],["visionpapers.org",35],["tech.unblockedgames.world",36],["gamingbeasts.com",37],["uploadbeast.com",37],["itscybertech.com",37],["thaitrieuvi.live",37],["forexeen.us",37],["health-and.me",37],["filessrc.com",37],["srcimdb.com",37],["droidmirror.com",37],["infokik.com",37],["arealgamer.org",37],["moonplusnews.com",38],["loanoffering.in",38],["comptegratuite.com",39],["timestej.com",39],["theramishali.blogspot.com",39],["thepowerofpen.in",39],["tech24us.com",40],["freethemesy.com",40],["tech5s.co",41],["ez4mods.com",41],["yalifin.xyz",41],["lrncook.xyz",41],["gadgetsreview27.com",41],["newsbawa.com",41],["acetack.com",41],["androidquest.com",41],["apklox.com",41],["chhaprawap.in",41],["gujarativyakaran.com",41],["kashmirstudentsinformation.in",41],["kisantime.com",41],["pastescript.com",41],["trimorspacks.com",41],["updrop.link",41],["fx-gd.net",41],["healthy4pepole.com",41],["hightrip.net",41],["to-travel.net",41],["cmphost.com",41],["drinkspartner.com",41],["uploadsoon.com",41],["wp.uploadfiles.in",41],["viralxns.com",41],["veganab.co",42],["camdigest.com",42],["nichapk.com",43],["easyworldbusiness.com",43],["riveh.com",43],["naukrilelo.in",44],["hipsonyc.com",45],["bookszone.in",46],["uptechnologys.com",47],["sevenjournals.com",47],["overgal.com",48],["mamahawa.com",49],["lollty.pro",49],["postazap.com",49],["financeyogi.net",49],["finclub.in",49],["easywithcode.tech",49],["letest25.co",49],["truevpnlover.com",49],["financebolo.com",49],["rphost.in",49],["vedamdigi.tech",49],["cancelguider.online",49],["bigdata.rawlazy.si",50],["codesnse.com",50],["filmypoints.in",51],["flightsim.to",51],["freethailottery.live",52],["progfu.com",52],["currentrecruitment.com",53],["investorveda.com",53],["computerpedia.in",53],["edukaroo.com",53],["travel.vebma.com",54],["cloud.majalahhewan.com",54],["crm.cekresi.me",54],["ai.tempatwisata.pro",54],["cinedesi.in",55],["thevouz.in",55],["tejtime24.com",55],["techishant.in",55],["msic.site",56],["zeroupload.com",57],["edufileshare.com",57],["apkmb.com",58],["apkhihe.com",58],["aemenstore.com",59],["byboe.com",59],["cazzette.com",59],["hookeaudio.com",59],["jncojeans.com",59],["kiemlua.com",59],["kingsleynyc.com",59],["lucidcam.com",59],["nguyenvanbao.com",59],["nousdecor.com",59],["pennbookcenter.com",59],["restorbio.com",59],["staaker.com",59],["uebnews.online",59],["thegoneapp.com",59],["samapkstore.com",60],["5ggyan.com",60],["announcedcatchix1t.shop",60],["brotherfox91.shop",60],["currentcolorq2dv.shop",60],["customsfencei3.shop",60],["fencethoughgdrt.shop",60],["fencethroughout642.shop",60],["foxwent6ot.shop",60],["havingmovementu8x.shop",60],["homebasis4d.shop",60],["includingbreath5ku.shop",60],["ironwinter6m.shop",60],["leadmorning4ivn.shop",60],["linelocatemfsn.shop",60],["littlesound6c.shop",60],["mindmotion93y8.shop",60],["mightbadly4f.shop",60],["monkeynecktj4w.shop",60],["neighbormajorkex.shop",60],["nervousdoctor9bx.shop",60],["pantogether6jpi.shop",60],["quietlywheat23.shop",60],["saddletopg3tk.shop",60],["soldrubber5xrp.shop",60],["somehowrockyng.shop",60],["strangernervousql.shop",60],["superabbit.shop",60],["supportrightufd.shop",60],["studyinghuman6js.shop",60],["wholecommonrrvp.shop",60],["wintertold7nq.shop",60],["emulatorgames.net",61],["doctor-groups.com",62],["luckydice.net",62],["menjelajahi.com",63],["unityassetcollection.com",64],["romadd.com",65],["rethmic.com",66],["romhustler.org",67],["filmyhitlink.xyz",68],["allwpworld.com",70],["trzpro.com",71],["techhelpbd.com",71],["zedge.net",72],["send-anywhere.com",73],["upstore.net",74],["rincondelsazon.com",75],["tattoosbeauty.com",75],["disheye.com",76],["yifysub.net",77],["mp3juices.icu",78],["watchdoge.xyz",79],["bingotingo.com",80],["thizissam.in",80],["proviralhost.com",81],["urbharat.xyz",81],["techyreviewx.com",82],["jojo-themes.net",83],["redirect.dafontvn.com",84],["cue-vana.com",85],["crdroid.net",85],["rlxtech.tech",85],["descargatepelis.com",86],["kuncomic.com",87],["wowroms.com",88],["mhma12.tech",89],["play.aidungeon.io",91],["whatsappmods.net",92],["adshnk.com",93],["blogmado.com",94],["pinloker.com",95],["sekilastekno.com",95],["web1s.asia",95],["fikper.com",96],["tralhasvarias.blogspot.com",97],["busuu.com",98],["recipahi.com",99],["thestar.com",100],["obaianinho.com",101],["punkrust.net",102],["apkprime.org",103],["novelgames.com",104],["3bmeteo.com",105]]);

const entitiesMap = new Map([["123link",0],["platinmods",0],["eg4link",0],["idlelivelink",0],["igram",0],["lin-ks",0],["xberuang",0],["topflix",0],["leechall",0],["bde4",0],["lootlinks",0],["filmizletv",0],["ouo",3],["acortalo",9],["acortar",9],["filemoon",16],["dutchycorp",18],["bluemediafiles",24],["pixlev",29],["5play",34],["10short",49],["cinemakottaga",69],["privatemoviez",85]]);

const exceptionsMap = new Map([["go.skiplink.me",[0]],["encurtador.postazap.com",[49]]]);

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
        'Object_defineProperties': Object.defineProperties.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String_fromCharCode': String.fromCharCode,
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
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
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
