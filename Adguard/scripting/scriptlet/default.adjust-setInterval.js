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

const argsList = [[],["","1200","0"],["generalTimeLeft","*","0.02"],["stop()"],["clearInterval"],["myTimer","1500"],["countdown","2000"],["downloadTimer"],["","","0"],["counter","2000"],["","1800"],["yuidea-","*"],["timeLeft"],["","","0.001"],["time"],["time","2500"],["clearInterval","*"],["seconds"],["","","0.02"],["time.html","1000"],["circle_animation"],["countdown"],["web_counter"],["video_counter"],["/SplashScreen|BannerAd/"],["i--"],["","*","0"],["curAd"],["js-btn-skip","1000"],["countdown","*","0.001"],["timer"],["gotolink"],["invoke","1000"],["download","*","0.02"],["countdown","*"],["disabled"],["_0x","*","0.001"],["counter","*","0.02"],["/.?/","*","0.02"],["/wpsafe|wait/","*","0.001"],["timer","*","0.02"],["timer","1300"],["countDown","*"],["timer","*"],["/.?/","*","0.001"],["timeLeft","*","0.001"],["timer","*","0.001"],["counter","*","0.001"],["timer","1000","0.001"],["timer","1600","0.001"],["count","*","0.001"],["counter"],["/counter|timer/","*"],["/counter|wait/","*","0.001"],["interval","*"],["show_download_links"],["counter","*"],["countDown"],["","","0.3"],["sec--"],["time","","0"],["secs"],["download"],["_0x"],["timer.remove"],["downloadButton"],["timePassed"],["timeleft"],["counter--"],["(i-1)"],["skipOptions"],["countDown","1150","0.5"],["timercounter"],["count","*"],["#timer"],["temp"],["sec"],["counter","","0.02"],["timePassed","1300"],["timer","1800"],["download_delay"],["distance"],["count"],["contador"],["display"],["countdownTime","1500"],["second"],["timer","1500"],["updatePercentage","100","0.02"],["current()"],["l","","0"],["countdown","*","0.02"],["time","","0.02"],["wait"],["downloadToken"],["updateProgress","*"],["current-=1"],["counter","1000","0.001"],["scrollIncrement","*"],["","*","0.001"],["saniye"],["","1000","0.001"],["skipAdSeconds","","0.02"],["adv","*"]];

const hostnamesMap = new Map([["mage.si",0],["arcade.buzzrtv.com",0],["arcade.lemonde.fr",0],["arena.gamesforthebrain.com",0],["bestpuzzlesandgames.com",0],["cointiply.arkadiumarena.com",0],["gamelab.com",0],["games.abqjournal.com",0],["games.ajc.com",0],["games.amny.com",0],["games.bellinghamherald.com",0],["games.besthealthmag.ca",0],["games.bnd.com",0],["games.boston.com",0],["games.bostonglobe.com",0],["games.bradenton.com",0],["games.centredaily.com",0],["games.cnhinews.com",0],["games.crosswordgiant.com",0],["games.dallasnews.com",0],["games.daytondailynews.com",0],["games.denverpost.com",0],["games.everythingzoomer.com",0],["games.fresnobee.com",0],["games.gameshownetwork.com",0],["games.get.tv",0],["games.greatergood.com",0],["games.heraldonline.com",0],["games.heraldsun.com",0],["games.idahostatesman.com",0],["games.insp.com",0],["games.islandpacket.com",0],["games.journal-news.com",0],["games.kansas.com",0],["games.kansascity.com",0],["games.kentucky.com",0],["games.lancasteronline.com",0],["games.ledger-enquirer.com",0],["games.macon.com",0],["games.mercedsunstar.com",0],["games.modbee.com",0],["games.moviestvnetwork.com",0],["games.myrtlebeachonline.com",0],["games.nationalreview.com",0],["games.newsobserver.com",0],["games.parade.com",0],["games.pressdemocrat.com",0],["games.puzzlebaron.com",0],["games.puzzler.com",0],["games.puzzles.ca",0],["games.qns.com",0],["games.readersdigest.ca",0],["games.sacbee.com",0],["games.sanluisobispo.com",0],["games.sixtyandme.com",0],["games.sltrib.com",0],["games.springfieldnewssun.com",0],["games.star-telegram.com",0],["games.sunherald.com",0],["games.theadvocate.com",0],["games.thenewstribune.com",0],["games.theolympian.com",0],["games.theportugalnews.com",0],["games.thestar.com",0],["games.thestate.com",0],["games.tri-cityherald.com",0],["games.triviatoday.com",0],["games.usnews.com",0],["games.vgwplay.com",0],["games.wordgenius.com",0],["games.wtop.com",0],["jeux.meteocity.com",0],["juegos.as.com",0],["juegos.elnuevoherald.com",0],["juegos.elpais.com",0],["philly.arkadiumarena.com",0],["play.dictionary.com",0],["puzzles.centralmaine.com",0],["puzzles.crosswordsolver.org",0],["puzzles.nola.com",0],["puzzles.pressherald.com",0],["puzzles.sunjournal.com",0],["al.ly",0],["bbf.lt",0],["cpmlink.net",0],["cut-urls.com",0],["iiv.pl",0],["shink.me",0],["ur.ly",0],["url.gem-flash.com",0],["zeiz.me",0],["1ink.cc",0],["azlink.xyz",0],["soft112.com",0],["short-url.link",0],["4download.net",0],["s.sseluxx.com",0],["onifile.com",0],["coolmathgames.com",0],["link-to.net",[0,21,22,23]],["telepisodes.org",0],["onle.co",0],["freeupload.info",0],["fstore.biz",0],["uploadfree.info",0],["deltabit.co",0],["puzzles.msn.com",0],["shon.xyz",0],["sfile.mobi",0],["upfile.us",0],["game-kentang.blogspot.com",0],["shortgoo.blogspot.com",0],["indavideo.hu",0],["sfirmware.com",0],["mobilelegends.shop",0],["ockles.com",0],["urlpay.net",0],["underhentai.net",0],["customercareal.com",0],["faupto.com",0],["suanoticia.online",0],["linkconfig.com",0],["lg-firmwares.com",0],["modcombo.com",0],["aylink.co",0],["gitizle.vip",0],["shtms.co",0],["cryptokinews.com",0],["cpmlink.pro",0],["speedynews.xyz",[0,88]],["infokeeda.xyz",0],["webzeni.com",0],["mysflink.blogspot.com",0],["runmods.com",0],["anomize.xyz",0],["bondibeachau.com",0],["konstantinova.net",0],["kangkimin.com",0],["iklandb.com",0],["onepiecex.xyz",0],["thingiverse.com",0],["ufreegames.com",0],["saungfirmware.id",0],["kpopstan.com",0],["bdlink.pw",0],["fairyanime.com",0],["7misr4day.com",0],["sama-pro.com",0],["otomi-games.com",0],["curseforge.com",0],["mobitaak.com",0],["arhplyrics.in",0],["telenord.it",0],["raky.in",0],["desiflixindia.com",0],["insurance.iptvsetupguide.com",0],["javguru.top",0],["diglink.blogspot.com",0],["vkprime.com",0],["i-polls.com",0],["freecoursesonline.me",0],["yesdownloader.com",0],["games.metv.com",0],["arkadium.com",0],["tonanmedia.my.id",0],["skiplink.me",0],["yurasu.xyz",0],["isekaipalace.com",0],["khaddavi.net",0],["jrtekno.com",0],["mitedrive.com",0],["miteblog.com",0],["games.dailymail.co.uk",0],["fullhd4k.com",0],["juegos.eleconomista.es",0],["lk21static.xyz",0],["filmizlehdfilm.com",0],["easybib.com",0],["wallpaperaccess.com",0],["deportealdia.live",1],["noticiasesports.live",1],["noweconomy.live",1],["puzzles.standard.co.uk",2],["puzzles.independent.co.uk",2],["puzzles.bestforpuzzles.com",2],["arkadiumarena.com",2],["games.charlotteobserver.com",2],["games.miamiherald.com",2],["games.startribune.com",2],["games.word.tips",2],["indi-share.com",4],["premid.app",4],["cheatcloud.cc",4],["cheater.ninja",4],["cheatermad.com",4],["cheatsquad.gg",4],["freepdf-books.com",5],["themeslide.com",6],["jpopsingles.eu",7],["vanillatweaks.net",7],["shortenbuddy.com",7],["megadescarga.net",8],["megadescargas.net",8],["lnk.news",8],["lnk.parts",8],["fssquad.com",8],["easylinkref.com",8],["thememypc.net",9],["sanoybonito.club",9],["dreamcheeky.com",[9,56]],["fidlarmusic.com",[9,56]],["publicananker.com",[9,56]],["rezence.com",[9,56]],["rodjulian.com",9],["mikl4forex.com",9],["gawbne.com",9],["forex-golds.com",9],["forex-trnd.com",9],["link.tl",10],["gamelopte.com",11],["goto.com.np",12],["vrcmods.com",12],["dramaworldhd.co",12],["consoleroms.com",12],["romspedia.com",12],["shortlinks.tech",12],["forexlap.com",13],["forexmab.com",13],["forexwaw.club",13],["forex-articles.com",13],["fx4vip.com",13],["forexrw7.com",13],["3rabsports.com",13],["fx-22.com",13],["gold-24.net",13],["icutlink.com",14],["android-apk.org",14],["zegtrends.com",15],["simsdom.com",16],["fansonlinehub.com",16],["hotmediahub.com",16],["terabox.fun",16],["teralink.me",16],["terashare.me",16],["teraearn.com",16],["fautsy.com",17],["multifaucet.org",17],["coinlyhub.com",17],["i-bits.io",17],["claimbits.io",17],["mundotec.pro",17],["legionjuegos.org",18],["legionpeliculas.org",18],["legionprogramas.org",18],["so1.asia",18],["lewdzone.com",20],["direct-link.net",[21,22,23]],["direkt-wissen.com",[21,22,23]],["hieunguyenphoto.com",21],["py.md",21],["ipalibrary.me",21],["gamearter.com",24],["onlyhgames.com",25],["ayobelajarbareng.com",26],["semawur.com",26],["techmody.io",26],["series-d.com",27],["doofree88.com",28],["acdriftingpro.com",29],["pixsera.net",30],["imgair.net",30],["imgblaze.net",30],["imgfrost.net",30],["vestimage.site",30],["imgwia.buzz",30],["imgbibam.online",30],["imgngf.online",30],["imgqaz.online",30],["imgulur.online",30],["imgurj.online",30],["imgurt.online",30],["imgwtz.online",30],["imgwxr.online",30],["imgwzr.online",30],["imgyre.online",30],["imgbak.store",30],["imgbek.store",30],["picler.store",30],["piclerx.store",30],["piclerz.store",30],["pixlev.store",30],["pixmax.store",30],["pixmex.store",30],["imgbaex.store",30],["imgbah.online",30],["imgbaie.online",30],["imgbango.store",30],["imgbier.store",30],["imgbimn.store",30],["imgbqw.store",30],["imgbuba.online",30],["imgbwe.store",30],["imgbxs.online",30],["imgcao.store",30],["imgnwe.online",30],["imgqge.store",30],["imgqxb.online",30],["imgteq.online",30],["imgtex.online",30],["imgtuta.online",30],["imgwqr.online",30],["imgwww.store",30],["imgxza.store",30],["imgezx.sbs",30],["imgbcxsb.store",30],["imgbcxs.store",30],["imgbake.cfd",30],["imgmffg.sbs",30],["imgmffgtr.sbs",30],["imgnbg.sbs",30],["imgngc.sbs",30],["imgnmh.cfd",30],["imgqte.sbs",30],["imguthes.sbs",30],["imgwag.cfd",30],["imgwang.cfd",30],["imgwety.sbs",30],["imgxuh.cfd",30],["imgxytw.cfd",30],["imgycgey.sbs",30],["imgyruy.cfd",30],["imgyusa.cfd",30],["imgyyqey.sbs",30],["imgyer.store",30],["imgxhs.store",30],["imgwekr.online",30],["imgwbfh.online",30],["imgwak.online",30],["imgutry.online",30],["imgutiyu.online",30],["imgutbbn.online",30],["imgubfd.online",30],["imgrei.online",30],["imgqec.online",30],["imgpaiou.online",30],["imgpaiki.online",30],["imgmjj.store",30],["imgfa.store",30],["imgbutrt.store",30],["imgbty.store",30],["imgbdl.store",30],["imgngh.sbs",30],["imgbbfg.pics",30],["imgjhrjjr.pics",30],["imgleko.pics",30],["imgluki.pics",30],["imgnffe.pics",30],["imgnnnf.pics",30],["imgrwqz.pics",30],["imgtweqz.pics",30],["imgxzgf.pics",30],["imgyyeryt.pics",30],["picbbc.one",30],["picbbdr.one",30],["picbest.one",30],["picbhrt.one",30],["picnrrt.one",30],["picqqw.one",30],["picqr.one",30],["picqtwe.one",30],["picsjre.one",30],["piczzaq.one",30],["imgqazx.sbs",30],["imgiruyw.online",30],["picnerr.cfd",30],["pichfer.cfd",30],["picbbeq.cfd",30],["picqaxs.cfd",30],["picxxdd.cfd",30],["picqweff.cfd",30],["pickjsn.cfd",30],["piczzxsw.cfd",30],["picbbbde.cfd",30],["picbdd.cfd",30],["imgbahxg.sbs",30],["imgxune.sbs",30],["imgqklw.shop",30],["pixqkhgrt.shop",30],["pixqbngg.shop",30],["pixqwet.shop",30],["pixmos.shop",30],["imgtgd.shop",30],["imgcsxx.shop",30],["imgcssd.shop",30],["imguwjsd.sbs",30],["pictbbf.shop",30],["pixbryexa.sbs",30],["picbqqa.sbs",30],["pixbkghxa.sbs",30],["imgmgf.sbs",30],["picbcxvxa.sbs",30],["imguee.sbs",30],["imgmffmv.sbs",30],["imgbqb.sbs",30],["imgbyrev.sbs",30],["imgbncvnv.sbs",30],["pixtryab.shop",30],["imggune.shop",30],["pictryhab.shop",30],["pixbnab.shop",30],["imgbnwe.shop",30],["imgbbnhi.shop",30],["imgnbii.shop",30],["imghqqbg.shop",30],["imgyhq.shop",30],["pixnbrqwg.sbs",30],["pixnbrqw.sbs",30],["picmsh.sbs",30],["imgpke.sbs",30],["picuenr.sbs",30],["imgolemn.sbs",30],["imgoebn.sbs",30],["picnwqez.sbs",30],["imgjajhe.sbs",30],["pixjnwe.sbs",30],["pixkfjtrkf.shop",30],["pixkfkf.shop",30],["pixdfdjkkr.shop",30],["pixdfdj.shop",30],["picnft.shop",30],["pixrqqz.shop",30],["picngt.shop",30],["picjgfjet.shop",30],["picjbet.shop",30],["imgkkabm.shop",30],["imgxabm.shop",30],["imgthbm.shop",30],["imgmyqbm.shop",30],["imgwwqbm.shop",30],["imgjvmbbm.shop",30],["takez.co",30],["nightfallnews.com",30],["cararegistrasi.com",30],["ipa-apps.me",30],["theicongenerator.com",30],["zentum.club",30],["imslp.org",30],["michaelemad.com",30],["chooyomi.com",30],["go.freetrx.fun",30],["imgjbxzjv.shop",30],["imgjmgfgm.shop",30],["picxnkjkhdf.sbs",30],["imgxxbdf.sbs",30],["imgnngr.sbs",30],["imgjjtr.sbs",30],["imgqbbds.sbs",30],["imgbvdf.sbs",30],["imgqnnnebrf.sbs",30],["imgebrf.sbs",30],["apps2app.com",31],["restegourmet.de",32],["getmodsapk.com",33],["visionpapers.org",35],["comptegratuite.com",36],["timestej.com",36],["theramishali.blogspot.com",36],["thepowerofpen.in",36],["tech24us.com",37],["freethemesy.com",37],["tech5s.co",38],["ez4mods.com",38],["yalifin.xyz",38],["lrncook.xyz",38],["gadgetsreview27.com",38],["newsbawa.com",38],["tmail.io",38],["androidquest.com",38],["fx-gd.net",38],["healthy4pepole.com",38],["hightrip.net",38],["to-travel.net",38],["drinkspartner.com",38],["uploadsoon.com",38],["wp.uploadfiles.in",38],["viralxns.com",38],["veganab.co",39],["camdigest.com",39],["nichapk.com",40],["easyworldbusiness.com",40],["riveh.com",40],["naukrilelo.in",41],["hipsonyc.com",42],["bookszone.in",43],["uptechnologys.com",44],["sevenjournals.com",44],["overgal.com",45],["mamahawa.com",46],["lollty.pro",46],["postazap.com",46],["financeyogi.net",46],["finclub.in",46],["easywithcode.tech",46],["letest25.co",46],["truevpnlover.com",46],["financebolo.com",46],["rphost.in",46],["vedamdigi.tech",46],["cancelguider.online",46],["bigdata.rawlazy.si",47],["codesnse.com",47],["filmypoints.in",48],["flightsim.to",48],["freethailottery.live",49],["progfu.com",49],["investorveda.com",50],["computerpedia.in",50],["itscybertech.com",51],["thaitrieuvi.live",51],["forexeen.us",51],["health-and.me",51],["filessrc.com",51],["srcimdb.com",51],["droidmirror.com",51],["infokik.com",51],["arealgamer.org",51],["moonplusnews.com",52],["loanoffering.in",52],["travel.vebma.com",53],["cloud.majalahhewan.com",53],["crm.cekresi.me",53],["ai.tempatwisata.pro",53],["cinedesi.in",54],["thevouz.in",54],["tejtime24.com",54],["apkmb.com",55],["apkhihe.com",55],["aemenstore.com",56],["byboe.com",56],["cazzette.com",56],["hookeaudio.com",56],["jncojeans.com",56],["kiemlua.com",56],["kingsleynyc.com",56],["lucidcam.com",56],["nguyenvanbao.com",56],["nousdecor.com",56],["pennbookcenter.com",56],["restorbio.com",56],["staaker.com",56],["uebnews.online",56],["thegoneapp.com",56],["samapkstore.com",57],["5ggyan.com",57],["emulatorgames.net",58],["doctor-groups.com",59],["luckydice.net",59],["menjelajahi.com",60],["unityassetcollection.com",61],["romadd.com",62],["rethmic.com",63],["romhustler.org",64],["filmyhitlink.xyz",65],["allwpworld.com",67],["trzpro.com",68],["techhelpbd.com",68],["zedge.net",69],["send-anywhere.com",70],["upstore.net",71],["rincondelsazon.com",72],["tattoosbeauty.com",72],["disheye.com",73],["yifysub.net",74],["mp3juices.icu",75],["watchdoge.xyz",76],["bingotingo.com",77],["thizissam.in",77],["proviralhost.com",78],["urbharat.xyz",78],["techyreviewx.com",79],["jojo-themes.net",80],["redirect.dafontvn.com",81],["cue-vana.com",82],["crdroid.net",82],["rlxtech.tech",82],["descargatepelis.com",83],["edufileshare.com",84],["kuncomic.com",85],["wowroms.com",86],["mhma12.tech",87],["play.aidungeon.io",89],["whatsappmods.net",90],["adshnk.com",91],["blogmado.com",92],["pinloker.com",93],["sekilastekno.com",93],["web1s.asia",93],["fikper.com",94],["tralhasvarias.blogspot.com",95],["busuu.com",96],["recipahi.com",97],["thestar.com",98],["obaianinho.com",99],["punkrust.net",100],["apkprime.org",101],["novelgames.com",102],["3bmeteo.com",103]]);

const entitiesMap = new Map([["123link",0],["platinmods",0],["eg4link",0],["idlelivelink",0],["igram",0],["lin-ks",0],["xberuang",0],["topflix",0],["leechall",0],["bde4",0],["lootlinks",0],["filmizletv",0],["ouo",3],["acortalo",8],["acortar",8],["filemoon",17],["dutchycorp",19],["bluemediafiles",25],["pixlev",30],["5play",34],["10short",46],["cinemakottaga",66],["privatemoviez",82]]);

const exceptionsMap = new Map([["go.skiplink.me",[0]],["encurtador.postazap.com",[46]]]);

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
