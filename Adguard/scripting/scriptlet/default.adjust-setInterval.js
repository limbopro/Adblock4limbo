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

const argsList = [[],["","1200","0"],["generalTimeLeft","*","0.02"],["stop()"],["clearInterval"],["myTimer","1500"],["countdown","2000"],["downloadTimer"],["","","0"],["counter","2000"],["","1800"],["yuidea-","*"],["timeLeft"],["","","0.001"],["time"],["time","2500"],["clearInterval","*"],["seconds"],["","","0.02"],["time.html","1000"],["inner"],["circle_animation"],["timer","1000","0.6"],["countdown"],["web_counter"],["video_counter"],["/SplashScreen|BannerAd/"],["i--"],["","*","0"],["curAd"],["js-btn-skip","1000"],["countdown","*","0.001"],["timer"],["gotolink"],["invoke","1000"],["download","*","0.02"],["countdown","*"],["_0x","*","0.001"],["counter","*","0.02"],["/.?/","*","0.02"],["/wpsafe|wait/","*","0.001"],["timer","*","0.02"],["timer","1300"],["countDown"],["timer","*"],["/.?/","*"],["/.?/","*","0.001"],["timeLeft","*","0.001"],["timer","*","0.001"],["counter","*","0.001"],["timer","1000","0.001"],["timer","1600","0.001"],["count","*","0.001"],["counter"],["counter","*"],["/counter|wait/","*","0.001"],["show_download_links"],["","","0.3"],["sec--"],["time","","0"],["secs"],["download"],["_0x"],["timer.remove"],["downloadButton"],["timePassed"],["timeleft"],["counter--"],["(i-1)"],["skipOptions"],["countDown","1150","0.5"],["timercounter"],["count","*"],["#timer"],["temp"],["sec"],["counter","","0.02"],["timePassed","1300"],["timer","1800"],["download_delay"],["distance"],["count"],["contador"],["display"],["second"],["timer","1500"],["updatePercentage","100","0.02"],["current()"],["l","","0"],["/verify_text|isCompleted/","*"],["countdown","*","0.02"],["time","","0.02"],["wait"],["downloadToken"],["updateProgress","*"],["current-=1"],["counter","1000","0.001"],["scrollIncrement","*"],["","*","0.001"],["saniye"],["","1000","0.001"],["skipAdSeconds","","0.02"],["adv","*"]];

const hostnamesMap = new Map([["shrink-service.it",0],["mage.si",0],["arcade.buzzrtv.com",0],["arcade.lemonde.fr",0],["arena.gamesforthebrain.com",0],["bestpuzzlesandgames.com",0],["cointiply.arkadiumarena.com",0],["gamelab.com",0],["games.abqjournal.com",0],["games.ajc.com",0],["games.amny.com",0],["games.bellinghamherald.com",0],["games.besthealthmag.ca",0],["games.bnd.com",0],["games.boston.com",0],["games.bostonglobe.com",0],["games.bradenton.com",0],["games.centredaily.com",0],["games.cnhinews.com",0],["games.crosswordgiant.com",0],["games.dallasnews.com",0],["games.daytondailynews.com",0],["games.denverpost.com",0],["games.everythingzoomer.com",0],["games.fresnobee.com",0],["games.gameshownetwork.com",0],["games.get.tv",0],["games.greatergood.com",0],["games.heraldonline.com",0],["games.heraldsun.com",0],["games.idahostatesman.com",0],["games.insp.com",0],["games.islandpacket.com",0],["games.journal-news.com",0],["games.kansas.com",0],["games.kansascity.com",0],["games.kentucky.com",0],["games.lancasteronline.com",0],["games.ledger-enquirer.com",0],["games.macon.com",0],["games.mercedsunstar.com",0],["games.modbee.com",0],["games.moviestvnetwork.com",0],["games.myrtlebeachonline.com",0],["games.nationalreview.com",0],["games.newsobserver.com",0],["games.parade.com",0],["games.pressdemocrat.com",0],["games.puzzlebaron.com",0],["games.puzzler.com",0],["games.puzzles.ca",0],["games.qns.com",0],["games.readersdigest.ca",0],["games.sacbee.com",0],["games.sanluisobispo.com",0],["games.sixtyandme.com",0],["games.sltrib.com",0],["games.springfieldnewssun.com",0],["games.star-telegram.com",0],["games.sunherald.com",0],["games.theadvocate.com",0],["games.thenewstribune.com",0],["games.theolympian.com",0],["games.theportugalnews.com",0],["games.thestar.com",0],["games.thestate.com",0],["games.tri-cityherald.com",0],["games.triviatoday.com",0],["games.usnews.com",0],["games.vgwplay.com",0],["games.wordgenius.com",0],["games.wtop.com",0],["jeux.meteocity.com",0],["juegos.as.com",0],["juegos.elnuevoherald.com",0],["juegos.elpais.com",0],["philly.arkadiumarena.com",0],["play.dictionary.com",0],["puzzles.centralmaine.com",0],["puzzles.crosswordsolver.org",0],["puzzles.nola.com",0],["puzzles.pressherald.com",0],["puzzles.sunjournal.com",0],["kanqite.com",0],["al.ly",0],["bbf.lt",0],["cpmlink.net",0],["cut-urls.com",0],["iiv.pl",0],["shink.me",0],["ur.ly",0],["url.gem-flash.com",0],["zeiz.me",0],["1ink.cc",0],["azlink.xyz",0],["soft112.com",0],["short-url.link",0],["4download.net",0],["s.sseluxx.com",0],["onifile.com",0],["coolmathgames.com",0],["link-to.net",[0,23,24,25]],["telepisodes.org",0],["onle.co",0],["freeupload.info",0],["fstore.biz",0],["uploadfree.info",0],["deltabit.co",0],["puzzles.msn.com",0],["shon.xyz",0],["sfile.mobi",0],["upfile.us",0],["game-kentang.blogspot.com",0],["shortgoo.blogspot.com",0],["indavideo.hu",0],["sfirmware.com",0],["mobilelegends.shop",0],["ockles.com",0],["urlpay.net",0],["underhentai.net",0],["customercareal.com",0],["faupto.com",0],["suanoticia.online",0],["linkconfig.com",0],["lg-firmwares.com",0],["modcombo.com",0],["webhostingpost.com",0],["tophostingapp.com",0],["digitalmarktrend.com",0],["linkvertise.com",0],["aylink.co",0],["gitizle.vip",0],["shtms.co",0],["cryptokinews.com",0],["techmirror.in",0],["cpmlink.pro",0],["speedynews.xyz",[0,86]],["infokeeda.xyz",0],["mysflink.blogspot.com",0],["runmods.com",0],["anomize.xyz",0],["bondibeachau.com",0],["konstantinova.net",0],["kangkimin.com",0],["iklandb.com",0],["onepiecex.xyz",0],["thingiverse.com",0],["ufreegames.com",0],["saungfirmware.id",0],["kpopstan.com",0],["bdlink.pw",0],["fairyanime.com",0],["7misr4day.com",0],["sama-pro.com",0],["otomi-games.com",0],["curseforge.com",0],["mobitaak.com",0],["arhplyrics.in",0],["telenord.it",0],["raky.in",0],["desiflixindia.com",0],["insurance.iptvsetupguide.com",0],["javguru.top",0],["diglink.blogspot.com",0],["vkprime.com",0],["i-polls.com",0],["freecoursesonline.me",0],["yesdownloader.com",0],["games.metv.com",0],["arkadium.com",0],["tonanmedia.my.id",0],["skiplink.me",0],["yurasu.xyz",0],["isekaipalace.com",0],["khaddavi.net",0],["jrtekno.com",0],["mitedrive.com",0],["miteblog.com",0],["games.dailymail.co.uk",0],["fullhd4k.com",0],["juegos.eleconomista.es",0],["gofilmizle.com",0],["easybib.com",0],["wallpaperaccess.com",0],["deportealdia.live",1],["noticiasesports.live",1],["noweconomy.live",1],["puzzles.standard.co.uk",2],["puzzles.independent.co.uk",2],["puzzles.bestforpuzzles.com",2],["arkadiumarena.com",2],["games.charlotteobserver.com",2],["games.miamiherald.com",2],["games.startribune.com",2],["games.word.tips",2],["indi-share.com",4],["cheatcloud.cc",4],["cheater.ninja",4],["cheatermad.com",4],["cheatsquad.gg",4],["premid.app",4],["freepdf-books.com",5],["themeslide.com",6],["jpopsingles.eu",7],["vanillatweaks.net",7],["shortenbuddy.com",7],["megadescarga.net",8],["megadescargas.net",8],["lnk.news",8],["lnk.parts",8],["fssquad.com",8],["easylinkref.com",8],["thememypc.net",9],["sanoybonito.club",9],["dreamcheeky.com",[9,54]],["fidlarmusic.com",[9,54]],["publicananker.com",[9,54]],["rezence.com",[9,54]],["rodjulian.com",9],["mikl4forex.com",9],["gawbne.com",9],["forex-golds.com",9],["forex-trnd.com",9],["link.tl",10],["gamelopte.com",11],["goto.com.np",12],["vrcmods.com",12],["dramaworldhd.co",12],["consoleroms.com",12],["romspedia.com",12],["shortlinks.tech",12],["forexlap.com",13],["forexmab.com",13],["forexwaw.club",13],["forex-articles.com",13],["fx4vip.com",13],["forexrw7.com",13],["3rabsports.com",13],["icutlink.com",14],["android-apk.org",14],["zegtrends.com",15],["simsdom.com",16],["fansonlinehub.com",16],["hotmediahub.com",16],["terabox.fun",16],["teralink.me",16],["terashare.me",16],["teraearn.com",16],["fautsy.com",17],["multifaucet.org",17],["coinlyhub.com",17],["i-bits.io",17],["claimbits.io",17],["mundotec.pro",17],["legionjuegos.org",18],["legionpeliculas.org",18],["legionprogramas.org",18],["so1.asia",18],["recipesdelite.com",20],["lewdzone.com",21],["elil.cc",22],["direct-link.net",[23,24,25]],["direkt-wissen.com",[23,24,25]],["py.md",23],["ipalibrary.me",23],["gamearter.com",26],["onlyhgames.com",27],["ayobelajarbareng.com",28],["semawur.com",28],["techmody.io",28],["yoshare.net",28],["series-d.com",29],["doofree88.com",30],["acdriftingpro.com",31],["imgair.net",32],["imgblaze.net",32],["imgfrost.net",32],["pixsera.net",32],["vestimage.site",32],["imgwia.buzz",32],["imgpiluka.website",32],["imgxhtue.website",32],["imgpuloki.online",32],["imgmilu.store",32],["picliume.store",32],["pixmela.online",32],["imgpukrr.site",32],["picuekr.site",32],["pixotor.cfd",32],["imgmgh.site",32],["imgnefl.site",32],["imglekw.site",32],["imgsdi.site",32],["imgneor.store",32],["imgsdi.store",32],["imgpukxxr.site",32],["imgsdi.website",32],["imgsxo.site",32],["imgxto.store",32],["imgutkr.store",32],["imghhr.online",32],["imglaiw.store",32],["imgotw.store",32],["imgpai.online",32],["imgqyrew.store",32],["imgutkr.online",32],["imgvue.online",32],["imgxgf.store",32],["imgxqy.online",32],["imgbibam.online",32],["imgngf.online",32],["imgqaz.online",32],["imgulur.online",32],["imgurj.online",32],["imgurt.online",32],["imgwtz.online",32],["imgwxr.online",32],["imgwzr.online",32],["imgyre.online",32],["imgbak.store",32],["imgbek.store",32],["picler.store",32],["piclerx.store",32],["piclerz.store",32],["pixlev.store",32],["pixmax.store",32],["pixmex.store",32],["imgbaex.store",32],["imgbah.online",32],["imgbaie.online",32],["imgbango.store",32],["imgbier.store",32],["imgbimn.store",32],["imgbqw.store",32],["imgbuba.online",32],["imgbwe.store",32],["imgbxs.online",32],["imgcao.store",32],["imgnwe.online",32],["imgqge.store",32],["imgqxb.online",32],["imgteq.online",32],["imgtex.online",32],["imgtuta.online",32],["imgwqr.online",32],["imgwww.store",32],["imgxza.store",32],["imgezx.sbs",32],["imgbcxsb.store",32],["imgbcxs.store",32],["imgbake.cfd",32],["imgmffg.sbs",32],["imgmffgtr.sbs",32],["imgnbg.sbs",32],["imgngc.sbs",32],["imgnmh.cfd",32],["imgqte.sbs",32],["imguthes.sbs",32],["imgwag.cfd",32],["imgwang.cfd",32],["imgwety.sbs",32],["imgxuh.cfd",32],["imgxytw.cfd",32],["imgycgey.sbs",32],["imgyruy.cfd",32],["imgyusa.cfd",32],["imgyyqey.sbs",32],["imgyer.store",32],["imgxhs.store",32],["imgwekr.online",32],["imgwbfh.online",32],["imgwak.online",32],["imgutry.online",32],["imgutiyu.online",32],["imgutbbn.online",32],["imgubfd.online",32],["imgrei.online",32],["imgqec.online",32],["imgpaiou.online",32],["imgpaiki.online",32],["imgmjj.store",32],["imgfa.store",32],["imgbutrt.store",32],["imgbty.store",32],["imgbdl.store",32],["imgngh.sbs",32],["imgbbfg.pics",32],["imgjhrjjr.pics",32],["imgleko.pics",32],["imgluki.pics",32],["imgnffe.pics",32],["imgnnnf.pics",32],["imgrwqz.pics",32],["imgtweqz.pics",32],["imgxzgf.pics",32],["imgyyeryt.pics",32],["picbbc.one",32],["picbbdr.one",32],["picbest.one",32],["picbhrt.one",32],["picnrrt.one",32],["picqqw.one",32],["picqr.one",32],["picqtwe.one",32],["picsjre.one",32],["piczzaq.one",32],["imgqazx.sbs",32],["imgiruyw.online",32],["picnerr.cfd",32],["pichfer.cfd",32],["picbbeq.cfd",32],["picqaxs.cfd",32],["picxxdd.cfd",32],["picqweff.cfd",32],["pickjsn.cfd",32],["piczzxsw.cfd",32],["picbbbde.cfd",32],["picbdd.cfd",32],["imgbahxg.sbs",32],["imgxune.sbs",32],["imgqklw.shop",32],["pixqkhgrt.shop",32],["pixqbngg.shop",32],["pixqwet.shop",32],["pixmos.shop",32],["imgtgd.shop",32],["imgcsxx.shop",32],["imgcssd.shop",32],["imguwjsd.sbs",32],["pictbbf.shop",32],["pixbryexa.sbs",32],["picbqqa.sbs",32],["pixbkghxa.sbs",32],["imgmgf.sbs",32],["picbcxvxa.sbs",32],["imguee.sbs",32],["imgmffmv.sbs",32],["imgbqb.sbs",32],["imgbyrev.sbs",32],["imgbncvnv.sbs",32],["pixtryab.shop",32],["imggune.shop",32],["pictryhab.shop",32],["pixbnab.shop",32],["imgbnwe.shop",32],["imgbbnhi.shop",32],["imgnbii.shop",32],["imghqqbg.shop",32],["imgyhq.shop",32],["pixnbrqwg.sbs",32],["freebrightsoft.com",32],["takez.co",32],["nightfallnews.com",32],["cararegistrasi.com",32],["ipa-apps.me",32],["theicongenerator.com",32],["zentum.club",32],["imslp.org",32],["michaelemad.com",32],["chooyomi.com",32],["go.freetrx.fun",32],["pixnbrqw.sbs",32],["apps2app.com",33],["restegourmet.de",34],["getmodsapk.com",35],["hindialphabet.online",37],["dissenttimes.com",37],["malaaiwap.com",37],["khesarilalyadavmp3.in",37],["dhunwap.com.in",37],["tech24us.com",38],["freethemesy.com",38],["tech5s.co",39],["ez4mods.com",39],["yalifin.xyz",39],["lrncook.xyz",39],["gadgetsreview27.com",39],["newsbawa.com",39],["loaninsurehub.com",39],["androidquest.com",39],["fx-gd.net",39],["healthy4pepole.com",39],["hightrip.net",39],["viralxns.com",39],["wp.uploadfiles.in",39],["uploadsoon.com",39],["veganab.co",40],["camdigest.com",40],["recipese.com",41],["easyworldbusiness.com",41],["riveh.com",41],["naukrilelo.in",42],["hipsonyc.com",43],["samapkstore.com",43],["5ggyan.com",43],["bookszone.in",44],["graphicuv.com",45],["uptechnologys.com",46],["sevenjournals.com",46],["overgal.com",47],["mamahawa.com",48],["lollty.pro",48],["postazap.com",48],["financeyogi.net",48],["finclub.in",48],["easywithcode.tech",48],["letest25.co",48],["truevpnlover.com",48],["financebolo.com",48],["rphost.in",48],["vedamdigi.tech",48],["cancelguider.online",48],["bigdata.rawlazy.si",49],["codesnse.com",49],["filmypoints.in",50],["flightsim.to",50],["freethailottery.live",51],["progfu.com",51],["investorveda.com",52],["computerpedia.in",52],["itscybertech.com",53],["thaitrieuvi.live",53],["forexeen.us",53],["health-and.me",53],["filessrc.com",53],["srcimdb.com",53],["droidmirror.com",53],["infokik.com",53],["arealgamer.org",53],["loanoffering.in",54],["aemenstore.com",54],["byboe.com",54],["cazzette.com",54],["hookeaudio.com",54],["jncojeans.com",54],["kiemlua.com",54],["kingsleynyc.com",54],["lucidcam.com",54],["nguyenvanbao.com",54],["nousdecor.com",54],["pennbookcenter.com",54],["restorbio.com",54],["staaker.com",54],["uebnews.online",54],["thegoneapp.com",54],["travel.vebma.com",55],["cloud.majalahhewan.com",55],["apkmb.com",56],["apkhihe.com",56],["emulatorgames.net",57],["doctor-groups.com",58],["luckydice.net",58],["menjelajahi.com",59],["unityassetcollection.com",60],["romadd.com",61],["rethmic.com",62],["romhustler.org",63],["filmyhitlink.xyz",64],["allwpworld.com",66],["trzpro.com",67],["techhelpbd.com",67],["zedge.net",68],["send-anywhere.com",69],["upstore.net",70],["rincondelsazon.com",71],["tattoosbeauty.com",71],["disheye.com",72],["yifysub.net",73],["mp3juices.icu",74],["watchdoge.xyz",75],["bingotingo.com",76],["thizissam.in",76],["proviralhost.com",77],["urbharat.xyz",77],["techyreviewx.com",78],["jojo-themes.net",79],["redirect.dafontvn.com",80],["cue-vana.com",81],["crdroid.net",81],["rlxtech.tech",81],["descargatepelis.com",82],["edufileshare.com",83],["wowroms.com",84],["mhma12.tech",85],["play.aidungeon.io",87],["whatsappmods.net",88],["hashhackers.com",89],["katdrive.net",89],["newsongs.co.in",89],["adshnk.com",90],["blogmado.com",91],["pinloker.com",92],["sekilastekno.com",92],["web1s.asia",92],["fikper.com",93],["tralhasvarias.blogspot.com",94],["busuu.com",95],["recipahi.com",96],["thestar.com",97],["obaianinho.com",98],["punkrust.net",99],["apkprime.org",100],["novelgames.com",101],["3bmeteo.com",102]]);

const entitiesMap = new Map([["123link",0],["platinmods",0],["eg4link",0],["idlelivelink",0],["igram",0],["lin-ks",0],["xberuang",0],["topflix",0],["leechall",0],["bde4",0],["lootlinks",0],["ouo",3],["acortalo",8],["acortar",8],["filemoon",17],["dutchycorp",19],["bluemediafiles",27],["pixlev",32],["5play",36],["10short",48],["cinemakottaga",65],["privatemoviez",81]]);

const exceptionsMap = new Map([["go.skiplink.me",[0]],["encurtador.postazap.com",[48]]]);

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
