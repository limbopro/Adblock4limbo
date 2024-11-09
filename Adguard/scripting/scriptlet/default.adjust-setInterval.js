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

/* eslint-disable indent */
/* global cloneInto */

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_adjustSetInterval = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["","1200","0"],[],["stop()"],["clearInterval"],["myTimer","1500"],["countdown","2000"],["counter","2000"],["","1800"],["","","0"],["yuidea-","*"],["timeLeft"],["","","0.001"],["time"],["time","2500"],["clearInterval","*"],["seconds"],["","","0.02"],["time.html","1000"],["circle_animation"],["countdown"],["web_counter"],["video_counter"],["/SplashScreen|BannerAd/"],["i--"],["","*","0"],["curAd"],["js-btn-skip","1000"],["countdown","*","0.001"],["timer"],["gotolink"],["downloadTimer"],["generalTimeLeft","*","0.001"],["invoke","1000"],["download","*","0.02"],["countdown","*"],["disabled"],["/count|verify|isCompleted/","","0.001"],["counter"],["counter","*","0.02"],["/.?/","*","0.02"],["/wpsafe|wait/","*","0.001"],["timer","*","0.02"],["timer","1300"],["countDown","*"],["timer","*"],["/.?/","*","0.001"],["timeLeft","*","0.001"],["timer","*","0.001"],["counter","*","0.001"],["timer","1000","0.001"],["timer","1600","0.001"],["count","*","0.001"],["/counter|wait/","*","0.001"],["interval","*"],["sec--","*","0.001"],["display"],["show_download_links"],["counter","*"],["countDown"],["","","0.3"],["time","","0"],["sec--"],["secs"],["download"],["_0x"],["timer.remove"],["downloadButton"],["timePassed"],["timeleft"],["counter--"],["(i-1)"],["skipOptions"],["countDown","1150","0.5"],["timercounter"],["count","*"],["#timer"],["temp"],["sec"],["counter","","0.02"],["timePassed","1300"],["timer","1800"],["download_delay"],["distance"],["count"],["contador"],["countdownTime","1500"],["second"],["timer","1500"],["updatePercentage","100","0.02"],["current()"],["l","","0"],["countdown","*","0.02"],["time","","0.02"],["wait"],["downloadToken"],["updateProgress","*"],["current-=1"],["counter","1000","0.001"],["scrollIncrement","*"],["","*","0.001"],["saniye"],["","1000","0.001"],["skipAdSeconds","","0.02"],["adv","*"]];

const hostnamesMap = new Map([["deportealdia.live",0],["noticiasesports.live",0],["al.ly",1],["bbf.lt",1],["cpmlink.net",1],["cut-urls.com",1],["iiv.pl",1],["shink.me",1],["ur.ly",1],["url.gem-flash.com",1],["zeiz.me",1],["1ink.cc",1],["azlink.xyz",1],["soft112.com",1],["short-url.link",1],["4download.net",1],["s.sseluxx.com",1],["onifile.com",1],["coolmathgames.com",1],["link-to.net",[1,19,20,21]],["telepisodes.org",1],["onle.co",1],["freeupload.info",1],["fstore.biz",1],["uploadfree.info",1],["deltabit.co",1],["puzzles.msn.com",1],["shon.xyz",1],["sfile.mobi",1],["upfile.us",1],["game-kentang.blogspot.com",1],["shortgoo.blogspot.com",1],["indavideo.hu",1],["sfirmware.com",1],["mobilelegends.shop",1],["ockles.com",1],["urlpay.net",1],["underhentai.net",1],["customercareal.com",1],["faupto.com",1],["suanoticia.online",1],["linkconfig.com",1],["lg-firmwares.com",1],["modcombo.com",1],["aylink.co",1],["gitizle.vip",1],["shtms.co",1],["cryptokinews.com",1],["cpmlink.pro",1],["speedynews.xyz",[1,88]],["infokeeda.xyz",1],["webzeni.com",1],["tutwuri.id",1],["mysflink.blogspot.com",1],["runmods.com",1],["anomize.xyz",1],["bondibeachau.com",1],["konstantinova.net",1],["kangkimin.com",1],["iklandb.com",1],["thingiverse.com",1],["ufreegames.com",1],["kpopstan.com",1],["bdlink.pw",1],["fairyanime.com",1],["7misr4day.com",1],["sama-pro.com",1],["otomi-games.com",1],["curseforge.com",1],["mobitaak.com",1],["arhplyrics.in",1],["telenord.it",1],["raky.in",1],["desiflixindia.com",1],["insurance.iptvsetupguide.com",1],["javguru.top",1],["diglink.blogspot.com",1],["vkprime.com",1],["i-polls.com",1],["freecoursesonline.me",1],["yesdownloader.com",1],["games.metv.com",1],["newscon.org",1],["arkadium.com",1],["tonanmedia.my.id",1],["skiplink.me",1],["yurasu.xyz",1],["isekaipalace.com",1],["khaddavi.net",1],["jrtekno.com",1],["mitedrive.com",1],["miteblog.com",1],["games.dailymail.co.uk",1],["fullhd4k.com",1],["juegos.eleconomista.es",1],["filmizlehdfilm.com",1],["fullfilmizle.cc",1],["easybib.com",1],["wallpaperaccess.com",1],["indi-share.com",3],["premid.app",3],["cheatcloud.cc",3],["cheater.ninja",3],["cheatermad.com",3],["cheatsquad.gg",3],["freepdf-books.com",4],["themeslide.com",5],["thememypc.net",6],["dreamcheeky.com",[6,57]],["fidlarmusic.com",[6,57]],["publicananker.com",[6,57]],["rezence.com",[6,57]],["rodjulian.com",6],["mikl4forex.com",6],["gawbne.com",6],["forex-golds.com",6],["forex-trnd.com",6],["link.tl",7],["lnk.news",8],["lnk.parts",8],["megadescarga.net",8],["megadescargas.net",8],["fssquad.com",8],["easylinkref.com",8],["gamelopte.com",9],["goto.com.np",10],["vrcmods.com",10],["dramaworldhd.co",10],["consoleroms.com",10],["romspedia.com",10],["shortlinks.tech",10],["forexlap.com",11],["forexmab.com",11],["forexwaw.club",11],["forex-articles.com",11],["fx4vip.com",11],["forexrw7.com",[11,54]],["3rabsports.com",11],["fx-22.com",[11,54]],["gold-24.net",[11,54]],["icutlink.com",12],["android-apk.org",12],["zegtrends.com",13],["simsdom.com",14],["fansonlinehub.com",14],["hotmediahub.com",14],["terabox.fun",14],["teralink.me",14],["terashare.me",14],["teraearn.com",14],["fautsy.com",15],["multifaucet.org",15],["coinlyhub.com",15],["i-bits.io",15],["claimbits.io",15],["mundotec.pro",15],["legionjuegos.org",16],["legionpeliculas.org",16],["legionprogramas.org",16],["so1.asia",16],["lewdzone.com",18],["direct-link.net",[19,20,21]],["direkt-wissen.com",[19,20,21]],["hieunguyenphoto.com",19],["py.md",19],["ipalibrary.me",19],["gamearter.com",22],["ayobelajarbareng.com",24],["semawur.com",24],["techmody.io",24],["series-d.com",25],["doofree88.com",26],["acdriftingpro.com",27],["pixsera.net",28],["imgair.net",28],["imgblaze.net",28],["imgfrost.net",28],["vestimage.site",28],["imgwia.buzz",28],["imgbaex.store",28],["imgbah.online",28],["imgbaie.online",28],["imgbango.store",28],["imgbier.store",28],["imgbimn.store",28],["imgbqw.store",28],["imgbuba.online",28],["imgbwe.store",28],["imgbxs.online",28],["imgcao.store",28],["imgnwe.online",28],["imgqge.store",28],["imgqxb.online",28],["imgteq.online",28],["imgtex.online",28],["imgtuta.online",28],["imgwqr.online",28],["imgwww.store",28],["imgxza.store",28],["imgezx.sbs",28],["imgbcxsb.store",28],["imgbcxs.store",28],["imgbake.cfd",28],["imgmffg.sbs",28],["imgmffgtr.sbs",28],["imgnbg.sbs",28],["imgngc.sbs",28],["imgnmh.cfd",28],["imgqte.sbs",28],["imguthes.sbs",28],["imgwag.cfd",28],["imgwang.cfd",28],["imgwety.sbs",28],["imgxuh.cfd",28],["imgxytw.cfd",28],["imgycgey.sbs",28],["imgyruy.cfd",28],["imgyusa.cfd",28],["imgyyqey.sbs",28],["imgyer.store",28],["imgxhs.store",28],["imgwekr.online",28],["imgwbfh.online",28],["imgwak.online",28],["imgutry.online",28],["imgutiyu.online",28],["imgutbbn.online",28],["imgubfd.online",28],["imgrei.online",28],["imgqec.online",28],["imgpaiou.online",28],["imgpaiki.online",28],["imgmjj.store",28],["imgfa.store",28],["imgbutrt.store",28],["imgbty.store",28],["imgbdl.store",28],["imgngh.sbs",28],["imgbbfg.pics",28],["imgjhrjjr.pics",28],["imgleko.pics",28],["imgluki.pics",28],["imgnffe.pics",28],["imgnnnf.pics",28],["imgrwqz.pics",28],["imgtweqz.pics",28],["imgxzgf.pics",28],["imgyyeryt.pics",28],["picbbc.one",28],["picbbdr.one",28],["picbest.one",28],["picbhrt.one",28],["picnrrt.one",28],["picqqw.one",28],["picqr.one",28],["picqtwe.one",28],["picsjre.one",28],["piczzaq.one",28],["imgqazx.sbs",28],["imgiruyw.online",28],["picnerr.cfd",28],["pichfer.cfd",28],["picbbeq.cfd",28],["picqaxs.cfd",28],["picxxdd.cfd",28],["picqweff.cfd",28],["pickjsn.cfd",28],["piczzxsw.cfd",28],["picbbbde.cfd",28],["picbdd.cfd",28],["imgbahxg.sbs",28],["imgxune.sbs",28],["imgqklw.shop",28],["pixqkhgrt.shop",28],["pixqbngg.shop",28],["pixqwet.shop",28],["pixmos.shop",28],["imgtgd.shop",28],["imgcsxx.shop",28],["imgcssd.shop",28],["imguwjsd.sbs",28],["pictbbf.shop",28],["pixbryexa.sbs",28],["picbqqa.sbs",28],["pixbkghxa.sbs",28],["imgmgf.sbs",28],["picbcxvxa.sbs",28],["imguee.sbs",28],["imgmffmv.sbs",28],["imgbqb.sbs",28],["imgbyrev.sbs",28],["imgbncvnv.sbs",28],["pixtryab.shop",28],["imggune.shop",28],["pictryhab.shop",28],["pixbnab.shop",28],["imgbnwe.shop",28],["imgbbnhi.shop",28],["imgnbii.shop",28],["imghqqbg.shop",28],["imgyhq.shop",28],["pixnbrqwg.sbs",28],["pixnbrqw.sbs",28],["picmsh.sbs",28],["imgpke.sbs",28],["picuenr.sbs",28],["imgolemn.sbs",28],["imgoebn.sbs",28],["picnwqez.sbs",28],["imgjajhe.sbs",28],["pixjnwe.sbs",28],["pixkfjtrkf.shop",28],["pixkfkf.shop",28],["pixdfdjkkr.shop",28],["pixdfdj.shop",28],["picnft.shop",28],["pixrqqz.shop",28],["picngt.shop",28],["picjgfjet.shop",28],["picjbet.shop",28],["imgkkabm.shop",28],["imgxabm.shop",28],["imgthbm.shop",28],["imgmyqbm.shop",28],["imgwwqbm.shop",28],["imgjvmbbm.shop",28],["imgjbxzjv.shop",28],["imgjmgfgm.shop",28],["picxnkjkhdf.sbs",28],["imgxxbdf.sbs",28],["imgnngr.sbs",28],["imgjjtr.sbs",28],["imgqbbds.sbs",28],["imgbvdf.sbs",28],["imgqnnnebrf.sbs",28],["imgnnnvbrf.sbs",28],["libertycity.net",28],["takez.co",28],["nightfallnews.com",28],["cararegistrasi.com",28],["ipa-apps.me",28],["theicongenerator.com",28],["zentum.club",28],["imslp.org",28],["michaelemad.com",28],["chooyomi.com",28],["go.freetrx.fun",28],["apps2app.com",29],["jpopsingles.eu",30],["vanillatweaks.net",30],["shortenbuddy.com",30],["arcade.buzzrtv.com",31],["arcade.lemonde.fr",31],["arena.gamesforthebrain.com",31],["bestpuzzlesandgames.com",31],["cointiply.arkadiumarena.com",31],["gamelab.com",31],["games.abqjournal.com",31],["games.amny.com",31],["games.bellinghamherald.com",31],["games.besthealthmag.ca",31],["games.bnd.com",31],["games.boston.com",31],["games.bostonglobe.com",31],["games.bradenton.com",31],["games.centredaily.com",31],["games.charlotteobserver.com",31],["games.cnhinews.com",31],["games.crosswordgiant.com",31],["games.dallasnews.com",31],["games.daytondailynews.com",31],["games.denverpost.com",31],["games.everythingzoomer.com",31],["games.fresnobee.com",31],["games.gameshownetwork.com",31],["games.get.tv",31],["games.greatergood.com",31],["games.heraldonline.com",31],["games.heraldsun.com",31],["games.idahostatesman.com",31],["games.insp.com",31],["games.islandpacket.com",31],["games.journal-news.com",31],["games.kansas.com",31],["games.kansascity.com",31],["games.kentucky.com",31],["games.lancasteronline.com",31],["games.ledger-enquirer.com",31],["games.macon.com",31],["games.mashable.com",31],["games.mercedsunstar.com",31],["games.miamiherald.com",31],["games.modbee.com",31],["games.moviestvnetwork.com",31],["games.myrtlebeachonline.com",31],["games.nationalreview.com",31],["games.newsobserver.com",31],["games.parade.com",31],["games.pressdemocrat.com",31],["games.puzzlebaron.com",31],["games.puzzler.com",31],["games.puzzles.ca",31],["games.qns.com",31],["games.readersdigest.ca",31],["games.sacbee.com",31],["games.sanluisobispo.com",31],["games.sixtyandme.com",31],["games.sltrib.com",31],["games.springfieldnewssun.com",31],["games.star-telegram.com",31],["games.startribune.com",31],["games.sunherald.com",31],["games.theadvocate.com",31],["games.thenewstribune.com",31],["games.theolympian.com",31],["games.theportugalnews.com",31],["games.thestar.com",31],["games.thestate.com",31],["games.tri-cityherald.com",31],["games.triviatoday.com",31],["games.usnews.com",31],["games.word.tips",31],["games.wordgenius.com",31],["games.wtop.com",31],["jeux.meteocity.com",31],["juegos.as.com",31],["juegos.elnuevoherald.com",31],["juegos.elpais.com",31],["philly.arkadiumarena.com",31],["play.dictionary.com",31],["puzzles.bestforpuzzles.com",31],["puzzles.centralmaine.com",31],["puzzles.crosswordsolver.org",31],["puzzles.independent.co.uk",31],["puzzles.nola.com",31],["puzzles.pressherald.com",31],["puzzles.standard.co.uk",31],["puzzles.sunjournal.com",31],["restegourmet.de",32],["getmodsapk.com",33],["visionpapers.org",35],["tech.unblockedgames.world",36],["gamingbeasts.com",37],["uploadbeast.com",37],["itscybertech.com",37],["thaitrieuvi.live",37],["forexeen.us",37],["health-and.me",37],["filessrc.com",37],["srcimdb.com",37],["droidmirror.com",37],["infokik.com",37],["arealgamer.org",37],["tech24us.com",38],["freethemesy.com",38],["tech5s.co",39],["ez4mods.com",39],["yalifin.xyz",39],["lrncook.xyz",39],["gadgetsreview27.com",39],["newsbawa.com",39],["acetack.com",39],["androidquest.com",39],["apklox.com",39],["chhaprawap.in",39],["gujarativyakaran.com",39],["kashmirstudentsinformation.in",39],["kisantime.com",39],["shetkaritoday.in",39],["pastescript.com",39],["trimorspacks.com",39],["updrop.link",39],["fx-gd.net",39],["healthy4pepole.com",39],["hightrip.net",39],["to-travel.net",39],["cmphost.com",39],["drinkspartner.com",39],["uploadsoon.com",39],["wp.uploadfiles.in",39],["viralxns.com",39],["posterify.net",39],["headlinerpost.com",39],["veganab.co",40],["camdigest.com",40],["nichapk.com",41],["easyworldbusiness.com",41],["riveh.com",41],["naukrilelo.in",42],["hipsonyc.com",43],["bookszone.in",44],["uptechnologys.com",45],["sevenjournals.com",45],["overgal.com",46],["mamahawa.com",47],["lollty.pro",47],["postazap.com",47],["financeyogi.net",47],["finclub.in",47],["easywithcode.tech",47],["letest25.co",47],["truevpnlover.com",47],["financebolo.com",47],["rphost.in",47],["vedamdigi.tech",47],["cancelguider.online",47],["bigdata.rawlazy.si",48],["codesnse.com",48],["filmypoints.in",49],["flightsim.to",49],["freethailottery.live",50],["progfu.com",50],["currentrecruitment.com",51],["investorveda.com",51],["computerpedia.in",51],["edukaroo.com",51],["advicefunda.com",51],["bestloanoffer.net",51],["techconnection.in",51],["travel.vebma.com",52],["cloud.majalahhewan.com",52],["crm.cekresi.me",52],["ai.tempatwisata.pro",52],["cinedesi.in",53],["thevouz.in",53],["tejtime24.com",53],["techishant.in",53],["mooonten.com",54],["msic.site",54],["zeroupload.com",55],["edufileshare.com",55],["apkmb.com",56],["apkhihe.com",56],["aemenstore.com",57],["byboe.com",57],["cazzette.com",57],["hookeaudio.com",57],["jncojeans.com",57],["kiemlua.com",57],["kingsleynyc.com",57],["lucidcam.com",57],["nguyenvanbao.com",57],["nousdecor.com",57],["pennbookcenter.com",57],["restorbio.com",57],["staaker.com",57],["uebnews.online",57],["thegoneapp.com",57],["samapkstore.com",58],["5ggyan.com",58],["announcedcatchix1t.shop",58],["brotherfox91.shop",58],["currentcolorq2dv.shop",58],["customsfencei3.shop",58],["fencethoughgdrt.shop",58],["fencethroughout642.shop",58],["foxwent6ot.shop",58],["havingmovementu8x.shop",58],["homebasis4d.shop",58],["includingbreath5ku.shop",58],["ironwinter6m.shop",58],["leadmorning4ivn.shop",58],["linelocatemfsn.shop",58],["littlesound6c.shop",58],["mindmotion93y8.shop",58],["mightbadly4f.shop",58],["monkeynecktj4w.shop",58],["neighbormajorkex.shop",58],["nervousdoctor9bx.shop",58],["pantogether6jpi.shop",58],["quietlywheat23.shop",58],["saddletopg3tk.shop",58],["soldrubber5xrp.shop",58],["somehowrockyng.shop",58],["strangernervousql.shop",58],["superabbit.shop",58],["supportrightufd.shop",58],["studyinghuman6js.shop",58],["wholecommonrrvp.shop",58],["wintertold7nq.shop",58],["emulatorgames.net",59],["menjelajahi.com",60],["luckydice.net",61],["unityassetcollection.com",62],["romadd.com",63],["rethmic.com",64],["romhustler.org",65],["filmyhitlink.xyz",66],["allwpworld.com",68],["trzpro.com",69],["techhelpbd.com",69],["zedge.net",70],["send-anywhere.com",71],["upstore.net",72],["rincondelsazon.com",73],["tattoosbeauty.com",73],["disheye.com",74],["yifysub.net",75],["mp3juices.icu",76],["watchdoge.xyz",77],["bingotingo.com",78],["thizissam.in",78],["proviralhost.com",79],["urbharat.xyz",79],["techyreviewx.com",80],["jojo-themes.net",81],["redirect.dafontvn.com",82],["cue-vana.com",83],["crdroid.net",83],["rlxtech.tech",83],["sonixgvn.net",83],["descargatepelis.com",84],["kuncomic.com",85],["wowroms.com",86],["mhma12.tech",87],["play.aidungeon.io",89],["whatsappmods.net",90],["adshnk.com",91],["blogmado.com",92],["pinloker.com",93],["sekilastekno.com",93],["web1s.asia",93],["fikper.com",94],["tralhasvarias.blogspot.com",95],["busuu.com",96],["recipahi.com",97],["thestar.com",98],["obaianinho.com",99],["punkrust.net",100],["apkprime.org",101],["novelgames.com",102],["3bmeteo.com",103]]);

const entitiesMap = new Map([["123link",1],["platinmods",1],["eg4link",1],["idlelivelink",1],["igram",1],["lin-ks",1],["xberuang",1],["topflix",1],["leechall",1],["bde4",1],["lootlinks",1],["filmizletv",1],["ouo",2],["acortalo",8],["acortar",8],["filemoon",15],["dutchycorp",17],["bluemediafiles",23],["pixlev",28],["5play",34],["10short",47],["cinemakottaga",67],["privatemoviez",83]]);

const exceptionsMap = new Map([["go.skiplink.me",[1]],["encurtador.postazap.com",[47]]]);

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
                return { matchAll: true, expect: true };
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
        offIdle(id) {
            if ( self.requestIdleCallback ) {
                return self.cancelIdleCallback(id);
            }
            return self.cancelAnimationFrame(id);
        }
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    safe.logLevel = scriptletGlobals.logLevel || 1;
    let lastLogType = '';
    let lastLogText = '';
    let lastLogTime = 0;
    safe.toLogText = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( text === lastLogText && type === lastLogType ) {
            if ( (Date.now() - lastLogTime) < 5000 ) { return; }
        }
        lastLogType = type;
        lastLogText = text;
        lastLogTime = Date.now();
        return text;
    };
    try {
        const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
        let bcBuffer = [];
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
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
    } catch(_) {
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            safe.log(`uBO ${text}`);
        };
    }
    return safe;
}

/******************************************************************************/

const hnParts = [];
try {
    let origin = document.location.origin;
    if ( origin === 'null' ) {
        const origins = document.location.ancestorOrigins;
        for ( let i = 0; i < origins.length; i++ ) {
            origin = origins[i];
            if ( origin !== 'null' ) { break; }
        }
    }
    const pos = origin.lastIndexOf('://');
    if ( pos === -1 ) { return; }
    hnParts.push(...origin.slice(pos+3).split('.'));
}
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
