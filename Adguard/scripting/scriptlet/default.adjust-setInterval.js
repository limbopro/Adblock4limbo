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

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [[],["","1200","0"],["generalTimeLeft","*","0.02"],["stop()"],["clearInterval"],["myTimer","1500"],["countdown","2000"],["downloadTimer"],["","","0"],["counter","2000"],["","1800"],["yuidea-","*"],["timeLeft"],["","","0.001"],["time"],["time","2500"],["clearInterval","*"],["seconds"],["","","0.02"],["time.html","1000"],["inner"],["circle_animation"],["timer","1000","0.6"],["countdown"],["web_counter"],["video_counter"],["/SplashScreen|BannerAd/"],["i--"],["","*","0"],["curAd"],["js-btn-skip","1000"],["timer"],["gotolink"],["download","*","0.02"],["countdown","*"],["_0x","*","0.001"],["counter","*","0.02"],["/.?/","*","0.02"],["/wpsafe|wait/","*","0.001"],["timer","*","0.02"],["timer","1300"],["countDown"],["timer","*"],["/.?/","*"],["/.?/","*","0.001"],["timeLeft","*","0.001"],["cont","*","0.001"],["timer","*","0.001"],["counter","*","0.001"],["timer","1000","0.001"],["timer","1600","0.001"],["count","*","0.001"],["counter"],["counter","*"],["show_download_links"],["","","0.3"],["sec--"],["time","","0"],["secs"],["download"],["_0x"],["timer.remove"],["downloadButton"],["timePassed"],["timeleft"],["counter--"],["(i-1)"],["skipOptions"],["countDown","1150","0.5"],["timercounter"],["count","*"],["#timer"],["temp"],["sec"],["counter","","0.02"],["timePassed","1300"],["timer","1800"],["download_delay"],["distance"],["count"],["contador"],["display"],["second"],["timer","1500"],["updatePercentage","100","0.02"],["current()"],["l","","0"],["/verify_text|isCompleted/","*"],["countdown","*","0.02"],["time","","0.02"],["wait"],["downloadToken"],["updateProgress","*"],["current-=1"],["counter","1000","0.001"],["scrollIncrement","*"],["","*","0.001"],["saniye"],["","1000","0.001"],["skipAdSeconds","","0.02"],["adv","*"]];

const hostnamesMap = new Map([["shrink-service.it",0],["mage.si",0],["arcade.buzzrtv.com",0],["arcade.lemonde.fr",0],["arena.gamesforthebrain.com",0],["bestpuzzlesandgames.com",0],["cointiply.arkadiumarena.com",0],["gamelab.com",0],["games.abqjournal.com",0],["games.ajc.com",0],["games.amny.com",0],["games.bellinghamherald.com",0],["games.besthealthmag.ca",0],["games.bnd.com",0],["games.boston.com",0],["games.bostonglobe.com",0],["games.bradenton.com",0],["games.centredaily.com",0],["games.cnhinews.com",0],["games.crosswordgiant.com",0],["games.dallasnews.com",0],["games.daytondailynews.com",0],["games.denverpost.com",0],["games.everythingzoomer.com",0],["games.fresnobee.com",0],["games.gameshownetwork.com",0],["games.get.tv",0],["games.greatergood.com",0],["games.heraldonline.com",0],["games.heraldsun.com",0],["games.idahostatesman.com",0],["games.insp.com",0],["games.islandpacket.com",0],["games.journal-news.com",0],["games.kansas.com",0],["games.kansascity.com",0],["games.kentucky.com",0],["games.lancasteronline.com",0],["games.ledger-enquirer.com",0],["games.macon.com",0],["games.mercedsunstar.com",0],["games.modbee.com",0],["games.moviestvnetwork.com",0],["games.myrtlebeachonline.com",0],["games.nationalreview.com",0],["games.newsobserver.com",0],["games.parade.com",0],["games.pressdemocrat.com",0],["games.puzzlebaron.com",0],["games.puzzler.com",0],["games.puzzles.ca",0],["games.qns.com",0],["games.readersdigest.ca",0],["games.sacbee.com",0],["games.sanluisobispo.com",0],["games.sixtyandme.com",0],["games.sltrib.com",0],["games.springfieldnewssun.com",0],["games.star-telegram.com",0],["games.sunherald.com",0],["games.theadvocate.com",0],["games.thenewstribune.com",0],["games.theolympian.com",0],["games.theportugalnews.com",0],["games.thestar.com",0],["games.thestate.com",0],["games.tri-cityherald.com",0],["games.triviatoday.com",0],["games.usnews.com",0],["games.vgwplay.com",0],["games.wordgenius.com",0],["games.wtop.com",0],["jeux.meteocity.com",0],["juegos.as.com",0],["juegos.elnuevoherald.com",0],["juegos.elpais.com",0],["philly.arkadiumarena.com",0],["play.dictionary.com",0],["puzzles.centralmaine.com",0],["puzzles.crosswordsolver.org",0],["puzzles.nola.com",0],["puzzles.pressherald.com",0],["puzzles.sunjournal.com",0],["kanqite.com",0],["al.ly",0],["bbf.lt",0],["cpmlink.net",0],["cut-urls.com",0],["iiv.pl",0],["shink.me",0],["ur.ly",0],["url.gem-flash.com",0],["zeiz.me",0],["1ink.cc",0],["azlink.xyz",0],["soft112.com",0],["short-url.link",0],["4download.net",0],["s.sseluxx.com",0],["onifile.com",0],["coolmathgames.com",0],["link-to.net",[0,23,24,25]],["telepisodes.org",0],["onle.co",0],["freeupload.info",0],["fstore.biz",0],["uploadfree.info",0],["deltabit.co",0],["puzzles.msn.com",0],["shon.xyz",0],["sfile.mobi",0],["upfile.us",0],["game-kentang.blogspot.com",0],["shortgoo.blogspot.com",0],["indavideo.hu",0],["sfirmware.com",0],["mobilelegends.shop",0],["ockles.com",0],["urlpay.net",0],["underhentai.net",0],["customercareal.com",0],["faupto.com",0],["suanoticia.online",0],["linkconfig.com",0],["lg-firmwares.com",0],["modcombo.com",0],["webhostingpost.com",0],["tophostingapp.com",0],["digitalmarktrend.com",0],["linkvertise.com",0],["aylink.co",0],["gitizle.vip",0],["shtms.co",0],["cryptokinews.com",0],["techmirror.in",0],["cpmlink.pro",0],["mysflink.blogspot.com",0],["runmods.com",0],["anomize.xyz",0],["bondibeachau.com",0],["konstantinova.net",0],["kangkimin.com",0],["iklandb.com",0],["onepiecex.xyz",0],["thingiverse.com",0],["ufreegames.com",0],["saungfirmware.id",0],["kpopstan.com",0],["bdlink.pw",0],["fairyanime.com",0],["speedynews.xyz",[0,84]],["7misr4day.com",0],["sama-pro.com",0],["otomi-games.com",0],["curseforge.com",0],["mobitaak.com",0],["arhplyrics.in",0],["telenord.it",0],["raky.in",0],["desiflixindia.com",0],["insurance.iptvsetupguide.com",0],["javguru.top",0],["diglink.blogspot.com",0],["vkprime.com",0],["i-polls.com",0],["freecoursesonline.me",0],["yesdownloader.com",0],["games.metv.com",0],["arkadium.com",0],["tonanmedia.my.id",0],["skiplink.me",0],["yurasu.xyz",0],["isekaipalace.com",0],["khaddavi.net",0],["jrtekno.com",0],["mitedrive.com",0],["miteblog.com",0],["games.dailymail.co.uk",0],["fullhd4k.com",0],["juegos.eleconomista.es",0],["gofilmizle.com",0],["easybib.com",0],["wallpaperaccess.com",0],["deportealdia.live",1],["noticiasesports.live",1],["noweconomy.live",1],["puzzles.standard.co.uk",2],["puzzles.independent.co.uk",2],["puzzles.bestforpuzzles.com",2],["arkadiumarena.com",2],["games.charlotteobserver.com",2],["games.miamiherald.com",2],["games.startribune.com",2],["games.word.tips",2],["indi-share.com",4],["cheatcloud.cc",4],["cheater.ninja",4],["cheatermad.com",4],["cheatsquad.gg",4],["premid.app",4],["freepdf-books.com",5],["themeslide.com",6],["jpopsingles.eu",7],["shortenbuddy.com",7],["megadescarga.net",8],["megadescargas.net",8],["lnk.news",8],["lnk.parts",8],["fssquad.com",8],["easylinkref.com",8],["thememypc.net",9],["sanoybonito.club",9],["dreamcheeky.com",[9,53]],["fidlarmusic.com",[9,53]],["publicananker.com",[9,53]],["rezence.com",[9,53]],["rodjulian.com",9],["mikl4forex.com",9],["gawbne.com",9],["forex-golds.com",9],["forex-trnd.com",9],["link.tl",10],["gamelopte.com",11],["goto.com.np",12],["vrcmods.com",12],["dramaworldhd.co",12],["consoleroms.com",12],["romspedia.com",12],["shortlinks.tech",12],["forexlap.com",13],["forexmab.com",13],["forexwaw.club",13],["forex-articles.com",13],["fx4vip.com",13],["forexrw7.com",13],["3rabsports.com",13],["shareus.io",13],["icutlink.com",14],["android-apk.org",14],["zegtrends.com",15],["simsdom.com",16],["fansonlinehub.com",16],["hotmediahub.com",16],["terabox.fun",16],["teralink.me",16],["terashare.me",16],["teraearn.com",16],["fautsy.com",17],["multifaucet.org",17],["coinlyhub.com",17],["i-bits.io",17],["claimbits.io",17],["mundotec.pro",17],["legionjuegos.org",18],["legionpeliculas.org",18],["legionprogramas.org",18],["so1.asia",18],["recipesdelite.com",20],["lewdzone.com",21],["elil.cc",22],["direct-link.net",[23,24,25]],["direkt-wissen.com",[23,24,25]],["py.md",23],["ipalibrary.me",23],["gamearter.com",26],["onlyhgames.com",27],["ayobelajarbareng.com",28],["semawur.com",28],["techmody.io",28],["yoshare.net",28],["series-d.com",29],["doofree88.com",30],["imgair.net",31],["imgblaze.net",31],["imgfrost.net",31],["pixsera.net",31],["vestimage.site",31],["imgwia.buzz",31],["imgpiluka.website",31],["imgxhtue.website",31],["imgpuloki.online",31],["imgmilu.store",31],["picliume.store",31],["pixmela.online",31],["imgpukrr.site",31],["picuekr.site",31],["pixotor.cfd",31],["imgmgh.site",31],["imgnefl.site",31],["imglekw.site",31],["imgsdi.site",31],["imgneor.store",31],["imgsdi.store",31],["imgpukxxr.site",31],["imgsdi.website",31],["imgsxo.site",31],["imgxto.store",31],["imgutkr.store",31],["imghhr.online",31],["imglaiw.store",31],["imgotw.store",31],["imgpai.online",31],["imgqyrew.store",31],["imgutkr.online",31],["imgvue.online",31],["imgxgf.store",31],["imgxqy.online",31],["imgbibam.online",31],["imgngf.online",31],["imgqaz.online",31],["imgulur.online",31],["imgurj.online",31],["imgurt.online",31],["imgwtz.online",31],["imgwxr.online",31],["imgwzr.online",31],["imgyre.online",31],["imgbak.store",31],["imgbek.store",31],["picler.store",31],["piclerx.store",31],["piclerz.store",31],["pixlev.store",31],["pixmax.store",31],["pixmex.store",31],["imgbaex.store",31],["imgbah.online",31],["imgbaie.online",31],["imgbango.store",31],["imgbier.store",31],["imgbimn.store",31],["imgbqw.store",31],["imgbuba.online",31],["imgbwe.store",31],["imgbxs.online",31],["imgcao.store",31],["imgnwe.online",31],["imgqge.store",31],["imgqxb.online",31],["imgteq.online",31],["imgtex.online",31],["imgtuta.online",31],["imgwqr.online",31],["imgwww.store",31],["imgxza.store",31],["imgezx.sbs",31],["imgbcxsb.store",31],["imgbcxs.store",31],["imgbake.cfd",31],["imgmffg.sbs",31],["imgmffgtr.sbs",31],["imgnbg.sbs",31],["imgngc.sbs",31],["imgnmh.cfd",31],["imgqte.sbs",31],["imguthes.sbs",31],["imgwag.cfd",31],["imgwang.cfd",31],["imgwety.sbs",31],["imgxuh.cfd",31],["imgxytw.cfd",31],["imgycgey.sbs",31],["imgyruy.cfd",31],["imgyusa.cfd",31],["imgyyqey.sbs",31],["imgyer.store",31],["imgxhs.store",31],["imgwekr.online",31],["imgwbfh.online",31],["imgwak.online",31],["imgutry.online",31],["imgutiyu.online",31],["imgutbbn.online",31],["imgubfd.online",31],["imgrei.online",31],["imgqec.online",31],["imgpaiou.online",31],["imgpaiki.online",31],["imgmjj.store",31],["imgfa.store",31],["imgbutrt.store",31],["imgbty.store",31],["imgbdl.store",31],["imgngh.sbs",31],["imgbbfg.pics",31],["imgjhrjjr.pics",31],["imgleko.pics",31],["imgluki.pics",31],["imgnffe.pics",31],["imgnnnf.pics",31],["imgrwqz.pics",31],["imgtweqz.pics",31],["imgxzgf.pics",31],["imgyyeryt.pics",31],["picbbc.one",31],["picbbdr.one",31],["picbest.one",31],["picbhrt.one",31],["picnrrt.one",31],["picqqw.one",31],["picqr.one",31],["picqtwe.one",31],["picsjre.one",31],["piczzaq.one",31],["imgqazx.sbs",31],["imgiruyw.online",31],["picnerr.cfd",31],["pichfer.cfd",31],["picbbeq.cfd",31],["picqaxs.cfd",31],["picxxdd.cfd",31],["picqweff.cfd",31],["pickjsn.cfd",31],["piczzxsw.cfd",31],["picbbbde.cfd",31],["picbdd.cfd",31],["imgbahxg.sbs",31],["imgxune.sbs",31],["imgqklw.shop",31],["pixqkhgrt.shop",31],["pixqbngg.shop",31],["pixqwet.shop",31],["pixmos.shop",31],["imgtgd.shop",31],["imgcsxx.shop",31],["bitzite.com",31],["freebrightsoft.com",31],["takez.co",31],["nightfallnews.com",31],["cararegistrasi.com",31],["ipa-apps.me",31],["theicongenerator.com",31],["zentum.club",31],["imslp.org",31],["michaelemad.com",31],["chooyomi.com",31],["go.freetrx.fun",31],["imgcssd.shop",31],["imguwjsd.sbs",31],["pictbbf.shop",31],["pixbryexa.sbs",31],["picbqqa.sbs",31],["pixbkghxa.sbs",31],["imgmgf.sbs",31],["picbcxvxa.sbs",31],["imguee.sbs",31],["imgmffmv.sbs",31],["imgbqb.sbs",31],["apps2app.com",32],["getmodsapk.com",33],["hindialphabet.online",35],["dissenttimes.com",35],["malaaiwap.com",35],["khesarilalyadavmp3.in",35],["dhunwap.com.in",35],["tech24us.com",36],["freethemesy.com",36],["tech5s.co",37],["ez4mods.com",37],["yalifin.xyz",37],["lrncook.xyz",37],["gadgetsreview27.com",37],["newsbawa.com",37],["loaninsurehub.com",37],["androidquest.com",37],["fx-gd.net",37],["healthy4pepole.com",37],["hightrip.net",37],["viralxns.com",37],["wp.uploadfiles.in",37],["uploadsoon.com",37],["veganab.co",38],["camdigest.com",38],["recipese.com",39],["easyworldbusiness.com",39],["riveh.com",39],["naukrilelo.in",40],["hipsonyc.com",41],["samapkstore.com",41],["5ggyan.com",41],["bookszone.in",42],["graphicuv.com",43],["uptechnologys.com",44],["sevenjournals.com",44],["overgal.com",45],["suaurl.com",46],["10short.pro",47],["mamahawa.com",47],["lollty.pro",47],["financeyogi.net",47],["finclub.in",47],["easywithcode.tech",47],["letest25.co",47],["truevpnlover.com",47],["rphost.in",47],["vedamdigi.tech",47],["cancelguider.online",47],["bigdata.rawlazy.si",48],["codesnse.com",48],["filmypoints.in",49],["flightsim.to",49],["freethailottery.live",50],["progfu.com",50],["investorveda.com",51],["computerpedia.in",51],["itscybertech.com",52],["thaitrieuvi.live",52],["forexeen.us",52],["health-and.me",52],["filessrc.com",52],["srcimdb.com",52],["droidmirror.com",52],["infokik.com",52],["arealgamer.org",52],["loanoffering.in",53],["aemenstore.com",53],["byboe.com",53],["cazzette.com",53],["hookeaudio.com",53],["jncojeans.com",53],["kiemlua.com",53],["kingsleynyc.com",53],["lucidcam.com",53],["nguyenvanbao.com",53],["nousdecor.com",53],["pennbookcenter.com",53],["restorbio.com",53],["staaker.com",53],["uebnews.online",53],["thegoneapp.com",53],["apkmb.com",54],["apkhihe.com",54],["emulatorgames.net",55],["doctor-groups.com",56],["luckydice.net",56],["menjelajahi.com",57],["unityassetcollection.com",58],["romadd.com",59],["rethmic.com",60],["romhustler.org",61],["filmyhitlink.xyz",62],["allwpworld.com",64],["trzpro.com",65],["techhelpbd.com",65],["zedge.net",66],["send-anywhere.com",67],["upstore.net",68],["rincondelsazon.com",69],["tattoosbeauty.com",69],["disheye.com",70],["yifysub.net",71],["mp3juices.icu",72],["watchdoge.xyz",73],["bingotingo.com",74],["thizissam.in",74],["proviralhost.com",75],["urbharat.xyz",75],["techyreviewx.com",76],["jojo-themes.net",77],["redirect.dafontvn.com",78],["cue-vana.com",79],["crdroid.net",79],["rlxtech.tech",79],["descargatepelis.com",80],["edufileshare.com",81],["wowroms.com",82],["mhma12.tech",83],["play.aidungeon.io",85],["whatsappmods.net",86],["hashhackers.com",87],["katdrive.net",87],["newsongs.co.in",87],["adshnk.com",88],["blogmado.com",89],["pinloker.com",90],["sekilastekno.com",90],["web1s.asia",90],["fikper.com",91],["tralhasvarias.blogspot.com",92],["busuu.com",93],["recipahi.com",94],["thestar.com",95],["obaianinho.com",96],["punkrust.net",97],["apkprime.org",98],["novelgames.com",99],["3bmeteo.com",100]]);

const entitiesMap = new Map([["123link",0],["platinmods",0],["eg4link",0],["idlelivelink",0],["igram",0],["lin-ks",0],["xberuang",0],["topflix",0],["leechall",0],["bde4",0],["lootlinks",0],["ouo",3],["acortalo",8],["acortar",8],["filemoon",17],["dutchycorp",19],["bluemediafiles",27],["pixlev",31],["5play",34],["cinemakottaga",63],["privatemoviez",79]]);

const exceptionsMap = new Map([["go.skiplink.me",[0]]]);

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
        uboLog(...args) {
            if ( scriptletGlobals.has('canDebug') === false ) { return; }
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
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
