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

// ruleset: default

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_adjustSetInterval = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["","1200","0"],[],["stop()"],["clearInterval"],["myTimer","1500"],["countdown","2000"],["counter","2000"],["","1800"],["","","0"],["yuidea-","*"],["timeLeft"],["","","0.001"],["time"],["time","2500"],["clearInterval","*"],["seconds"],["","","0.02"],["time.html","1000"],["countdown"],["web_counter"],["video_counter"],["/SplashScreen|BannerAd/"],["i--"],["","*","0"],["js-btn-skip","1000"],["countdown","*","0.001"],["timer"],["gotolink"],["counter","*","0.02"],["/.?/","*","0.02"],["/wpsafe|wait/","*","0.001"],["timer","*","0.02"],["timer","1300"],["countDown","*"],["timer","*"],["/.?/","*","0.001"],["timeLeft","*","0.001"],["timer","*","0.001"],["counter","*","0.001"],["timer","1000","0.001"],["timer","1600","0.001"],["count","*","0.001"],["counter"],["/counter|wait/","*","0.001"],["interval","*"],["sec--","*","0.001"],["show_download_links"],["counter","*"],["countDown"],["downloadTimer"],["","","0.3"],["time","","0"],["sec--"],["secs"],["_0x"],["timer.remove"],["downloadButton"],["timePassed"],["timeleft"],["counter--"],["(i-1)"],["skipOptions"],["countDown","1150","0.5"],["timercounter"],["count","*"],["#timer"],["temp"],["counter","","0.02"],["timer","1800"],["distance"],["count"],["contador"],["display"],["second"],["timer","1500"],["updatePercentage","100","0.02"],["current()"],["l","","0"],["countdown","*","0.02"],["time","","0.02"],["wait"],["downloadToken"],["updateProgress","*"],["current-=1","*","0.001"],["_0x","*","0.001"],["counter","1000","0.001"],["scrollIncrement","*"],["","*","0.001"],["saniye"],["","1000","0.001"],["generalTimeLeft","*","0.001"],["invoke","1000"],["download","*","0.02"],["countdown","*"],["disabled"],["/count|verify|isCompleted/","","0.001"],["circle_animation"],["skipAdSeconds","","0.02"],["adv","*"]];

const hostnamesMap = new Map([["deportealdia.live",0],["noticiasesports.live",0],["al.ly",1],["bbf.lt",1],["cpmlink.net",1],["cut-urls.com",1],["iiv.pl",1],["shink.me",1],["ur.ly",1],["url.gem-flash.com",1],["zeiz.me",1],["1ink.cc",1],["soft112.com",1],["short-url.link",1],["4download.net",1],["s.sseluxx.com",1],["onifile.com",1],["coolmathgames.com",1],["link-to.net",[1,18,19,20]],["telepisodes.org",1],["onle.co",1],["fstore.biz",1],["deltabit.co",1],["puzzles.msn.com",1],["sfile.mobi",1],["upfile.us",1],["game-kentang.blogspot.com",1],["shortgoo.blogspot.com",1],["indavideo.hu",1],["sfirmware.com",1],["mobilelegends.shop",1],["ockles.com",1],["urlpay.net",1],["underhentai.net",1],["customercareal.com",1],["faupto.com",1],["suanoticia.online",1],["linkconfig.com",1],["lg-firmwares.com",1],["aylink.co",1],["gitizle.vip",1],["shtms.co",1],["cryptokinews.com",1],["cpmlink.pro",1],["policiesreview.com",1],["speedynews.xyz",[1,75]],["infokeeda.xyz",1],["webzeni.com",1],["tutwuri.id",1],["khaddavi.net",1],["lokerwfh.net",1],["mysflink.blogspot.com",1],["runmods.com",1],["anomize.xyz",1],["bondibeachau.com",1],["konstantinova.net",1],["kangkimin.com",1],["iklandb.com",1],["thingiverse.com",1],["ufreegames.com",1],["bdlink.pw",1],["fairyanime.com",1],["7misr4day.com",1],["sama-pro.com",1],["otomi-games.com",1],["curseforge.com",1],["mobitaak.com",1],["arhplyrics.in",1],["telenord.it",1],["raky.in",1],["desiflixindia.com",1],["diglink.blogspot.com",1],["vkprime.com",1],["i-polls.com",1],["freecoursesonline.me",1],["yesdownloader.com",1],["games.metv.com",1],["arkadium.com",1],["tonanmedia.my.id",1],["skiplink.me",1],["yurasu.xyz",1],["isekaipalace.com",1],["mitedrive.com",1],["miteblog.com",1],["games.dailymail.co.uk",1],["fullhd4k.com",1],["juegos.eleconomista.es",1],["filmizlehdfilm.com",1],["fullfilmizle.cc",1],["gofilmizle.net",1],["easybib.com",1],["modcombo.com",1],["wallpaperaccess.com",1],["indi-share.com",3],["premid.app",3],["cheatcloud.cc",3],["cheater.ninja",3],["cheatermad.com",3],["cheatsquad.gg",3],["freepdf-books.com",4],["themeslide.com",5],["thememypc.net",6],["rezence.com",[6,47]],["mikl4forex.com",6],["gawbne.com",6],["forex-trnd.com",6],["link.tl",7],["lnk.news",8],["lnk.parts",8],["fssquad.com",8],["easylinkref.com",8],["megadescarga.net",8],["megadescargas.net",8],["gamelopte.com",9],["goto.com.np",10],["vrcmods.com",10],["dramaworldhd.co",10],["consoleroms.com",10],["romspedia.com",10],["forexlap.com",11],["forexmab.com",11],["forexwaw.club",11],["forex-articles.com",11],["fx4vip.com",11],["forexrw7.com",[11,45]],["3rabsports.com",11],["fx-22.com",[11,45]],["gold-24.net",[11,45]],["icutlink.com",12],["android-apk.org",12],["zegtrends.com",13],["simsdom.com",14],["fansonlinehub.com",14],["hotmediahub.com",14],["terabox.fun",14],["teralink.me",14],["terashare.me",14],["teraearn.com",14],["fautsy.com",15],["multifaucet.org",15],["coinlyhub.com",15],["i-bits.io",15],["claimbits.io",15],["mundotec.pro",15],["legionjuegos.org",16],["legionpeliculas.org",16],["legionprogramas.org",16],["so1.asia",16],["direct-link.net",[18,19,20]],["direkt-wissen.com",[18,19,20]],["aman-dn.blogspot.com",18],["ipalibrary.me",18],["hieunguyenphoto.com",18],["gamearter.com",21],["ayobelajarbareng.com",23],["semawur.com",23],["techmody.io",23],["doofree88.com",24],["acdriftingpro.com",25],["pixsera.net",26],["imgair.net",26],["imgblaze.net",26],["imgfrost.net",26],["vestimage.site",26],["imgyer.store",26],["pixqbngg.shop",26],["pixqwet.shop",26],["pixmos.shop",26],["imgtgd.shop",26],["imgcsxx.shop",26],["imgqklw.shop",26],["pixqkhgrt.shop",26],["imgcssd.shop",26],["imguwjsd.sbs",26],["pictbbf.shop",26],["pixbryexa.sbs",26],["picbqqa.sbs",26],["pixbkghxa.sbs",26],["imgmgf.sbs",26],["picbcxvxa.sbs",26],["imguee.sbs",26],["imgmffmv.sbs",26],["imgbqb.sbs",26],["imgbyrev.sbs",26],["imgbncvnv.sbs",26],["pixtryab.shop",26],["imggune.shop",26],["pictryhab.shop",26],["pixbnab.shop",26],["imgbnwe.shop",26],["imgbbnhi.shop",26],["imgnbii.shop",26],["imghqqbg.shop",26],["imgyhq.shop",26],["pixnbrqwg.sbs",26],["pixnbrqw.sbs",26],["picmsh.sbs",26],["imgpke.sbs",26],["picuenr.sbs",26],["imgolemn.sbs",26],["imgoebn.sbs",26],["picnwqez.sbs",26],["imgjajhe.sbs",26],["pixjnwe.sbs",26],["pixkfjtrkf.shop",26],["pixkfkf.shop",26],["pixdfdjkkr.shop",26],["pixdfdj.shop",26],["picnft.shop",26],["pixrqqz.shop",26],["picngt.shop",26],["picjgfjet.shop",26],["picjbet.shop",26],["imgkkabm.shop",26],["imgxabm.shop",26],["imgthbm.shop",26],["imgmyqbm.shop",26],["imgwwqbm.shop",26],["imgjvmbbm.shop",26],["imgjbxzjv.shop",26],["imgjmgfgm.shop",26],["picxnkjkhdf.sbs",26],["imgxxbdf.sbs",26],["imgnngr.sbs",26],["imgjjtr.sbs",26],["imgqbbds.sbs",26],["imgbvdf.sbs",26],["imgqnnnebrf.sbs",26],["imgnnnvbrf.sbs",26],["takez.co",26],["nightfallnews.com",26],["cararegistrasi.com",26],["ipa-apps.me",26],["imslp.org",26],["michaelemad.com",26],["chooyomi.com",26],["libertycity.net",26],["apps2app.com",27],["tech24us.com",28],["freethemesy.com",28],["tech5s.co",29],["ez4mods.com",29],["yalifin.xyz",29],["lrncook.xyz",29],["gadgetsreview27.com",29],["newsbawa.com",29],["acetack.com",29],["androidquest.com",29],["apklox.com",29],["chhaprawap.in",29],["gujarativyakaran.com",29],["kashmirstudentsinformation.in",29],["kisantime.com",29],["shetkaritoday.in",29],["pastescript.com",29],["trimorspacks.com",29],["updrop.link",29],["fx-gd.net",29],["healthy4pepole.com",29],["hightrip.net",29],["to-travel.net",29],["cmphost.com",29],["drinkspartner.com",29],["uploadsoon.com",29],["wp.uploadfiles.in",29],["viralxns.com",29],["posterify.net",29],["headlinerpost.com",29],["veganab.co",30],["camdigest.com",30],["nichapk.com",31],["easyworldbusiness.com",31],["riveh.com",31],["naukrilelo.in",32],["hipsonyc.com",33],["bookszone.in",34],["uptechnologys.com",35],["sevenjournals.com",35],["overgal.com",36],["mamahawa.com",37],["lollty.pro",37],["postazap.com",37],["financeyogi.net",37],["finclub.in",37],["easywithcode.tech",37],["letest25.co",37],["truevpnlover.com",37],["financebolo.com",37],["rphost.in",37],["vedamdigi.tech",37],["cancelguider.online",37],["bigdata.rawlazy.si",38],["codesnse.com",38],["filmypoints.in",39],["flightsim.to",39],["freethailottery.live",40],["progfu.com",40],["currentrecruitment.com",41],["investorveda.com",41],["computerpedia.in",41],["edukaroo.com",41],["advicefunda.com",41],["bestloanoffer.net",41],["techconnection.in",41],["itscybertech.com",42],["forexeen.us",42],["health-and.me",42],["filessrc.com",42],["srcimdb.com",42],["droidmirror.com",42],["infokik.com",42],["arealgamer.org",42],["gamingbeasts.com",42],["uploadbeast.com",42],["travel.vebma.com",43],["cloud.majalahhewan.com",43],["crm.cekresi.me",43],["ai.tempatwisata.pro",43],["cinedesi.in",44],["thevouz.in",44],["tejtime24.com",44],["techishant.in",44],["mooonten.com",45],["msic.site",45],["apkmb.com",46],["apkhihe.com",46],["aemenstore.com",47],["byboe.com",47],["cazzette.com",47],["dreamcheeky.com",47],["fidlarmusic.com",47],["hookeaudio.com",47],["jncojeans.com",47],["kiemlua.com",47],["kingsleynyc.com",47],["lucidcam.com",47],["nguyenvanbao.com",47],["nousdecor.com",47],["pennbookcenter.com",47],["publicananker.com",47],["restorbio.com",47],["staaker.com",47],["samapkstore.com",48],["5ggyan.com",48],["announcedcatchix1t.shop",48],["brotherfox91.shop",48],["currentcolorq2dv.shop",48],["customsfencei3.shop",48],["fencethoughgdrt.shop",48],["fencethroughout642.shop",48],["foxwent6ot.shop",48],["havingmovementu8x.shop",48],["homebasis4d.shop",48],["includingbreath5ku.shop",48],["ironwinter6m.shop",48],["leadmorning4ivn.shop",48],["linelocatemfsn.shop",48],["littlesound6c.shop",48],["mindmotion93y8.shop",48],["mightbadly4f.shop",48],["monkeynecktj4w.shop",48],["neighbormajorkex.shop",48],["nervousdoctor9bx.shop",48],["pantogether6jpi.shop",48],["quietlywheat23.shop",48],["saddletopg3tk.shop",48],["soldrubber5xrp.shop",48],["somehowrockyng.shop",48],["strangernervousql.shop",48],["superabbit.shop",48],["supportrightufd.shop",48],["studyinghuman6js.shop",48],["wholecommonrrvp.shop",48],["wintertold7nq.shop",48],["shortenbuddy.com",49],["jpopsingles.eu",49],["vanillatweaks.net",49],["emulatorgames.net",50],["menjelajahi.com",51],["luckydice.net",52],["unityassetcollection.com",53],["rethmic.com",54],["romhustler.org",55],["filmyhitlink.xyz",56],["allwpworld.com",58],["trzpro.com",59],["techhelpbd.com",59],["zedge.net",60],["send-anywhere.com",61],["upstore.net",62],["rincondelsazon.com",63],["tattoosbeauty.com",63],["disheye.com",64],["yifysub.net",65],["mp3juices.icu",66],["bingotingo.com",67],["thizissam.in",67],["techyreviewx.com",68],["redirect.dafontvn.com",69],["cue-vana.com",70],["crdroid.net",70],["rlxtech.tech",70],["sonixgvn.net",70],["descargatepelis.com",71],["edufileshare.com",72],["wowroms.com",73],["mhma12.tech",74],["play.aidungeon.io",76],["whatsappmods.net",77],["adshnk.com",78],["blogmado.com",79],["pinloker.com",80],["sekilastekno.com",80],["web1s.asia",80],["fikper.com",81],["tralhasvarias.blogspot.com",82],["busuu.com",83],["newscon.org",84],["recipahi.com",85],["thestar.com",86],["obaianinho.com",87],["punkrust.net",88],["apkprime.org",89],["arcade.buzzrtv.com",90],["arcade.lemonde.fr",90],["arena.gamesforthebrain.com",90],["bestpuzzlesandgames.com",90],["cointiply.arkadiumarena.com",90],["gamelab.com",90],["games.abqjournal.com",90],["games.amny.com",90],["games.bellinghamherald.com",90],["games.besthealthmag.ca",90],["games.bnd.com",90],["games.boston.com",90],["games.bostonglobe.com",90],["games.bradenton.com",90],["games.centredaily.com",90],["games.charlotteobserver.com",90],["games.cnhinews.com",90],["games.crosswordgiant.com",90],["games.dallasnews.com",90],["games.daytondailynews.com",90],["games.denverpost.com",90],["games.everythingzoomer.com",90],["games.fresnobee.com",90],["games.gameshownetwork.com",90],["games.get.tv",90],["games.greatergood.com",90],["games.heraldonline.com",90],["games.heraldsun.com",90],["games.idahostatesman.com",90],["games.insp.com",90],["games.islandpacket.com",90],["games.journal-news.com",90],["games.kansas.com",90],["games.kansascity.com",90],["games.kentucky.com",90],["games.lancasteronline.com",90],["games.ledger-enquirer.com",90],["games.macon.com",90],["games.mashable.com",90],["games.mercedsunstar.com",90],["games.miamiherald.com",90],["games.modbee.com",90],["games.moviestvnetwork.com",90],["games.myrtlebeachonline.com",90],["games.nationalreview.com",90],["games.newsobserver.com",90],["games.parade.com",90],["games.pressdemocrat.com",90],["games.puzzlebaron.com",90],["games.puzzler.com",90],["games.puzzles.ca",90],["games.qns.com",90],["games.readersdigest.ca",90],["games.sacbee.com",90],["games.sanluisobispo.com",90],["games.sixtyandme.com",90],["games.sltrib.com",90],["games.springfieldnewssun.com",90],["games.star-telegram.com",90],["games.startribune.com",90],["games.sunherald.com",90],["games.theadvocate.com",90],["games.thenewstribune.com",90],["games.theolympian.com",90],["games.theportugalnews.com",90],["games.thestar.com",90],["games.thestate.com",90],["games.tri-cityherald.com",90],["games.triviatoday.com",90],["games.usnews.com",90],["games.word.tips",90],["games.wordgenius.com",90],["games.wtop.com",90],["jeux.meteocity.com",90],["juegos.as.com",90],["juegos.elnuevoherald.com",90],["juegos.elpais.com",90],["philly.arkadiumarena.com",90],["play.dictionary.com",90],["puzzles.bestforpuzzles.com",90],["puzzles.centralmaine.com",90],["puzzles.crosswordsolver.org",90],["puzzles.independent.co.uk",90],["puzzles.nola.com",90],["puzzles.pressherald.com",90],["puzzles.standard.co.uk",90],["puzzles.sunjournal.com",90],["restegourmet.de",91],["getmodsapk.com",92],["visionpapers.org",94],["tech.unblockedgames.world",95],["lewdzone.com",96],["novelgames.com",97],["3bmeteo.com",98]]);

const entitiesMap = new Map([["123link",1],["platinmods",1],["eg4link",1],["idlelivelink",1],["igram",1],["lin-ks",1],["xberuang",1],["topflix",1],["leechall",1],["bde4",1],["lootlinks",1],["filmizletv",1],["ouo",2],["acortalo",8],["acortar",8],["filemoon",15],["dutchycorp",17],["bluemediafiles",22],["pixlev",26],["10short",37],["cinemakottaga",57],["privatemoviez",70],["5play",93]]);

const exceptionsMap = new Map([["go.skiplink.me",[1]],["encurtador.postazap.com",[37]]]);

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
        'String_split': String.prototype.split,
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
            catch {
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
    } catch {
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
} catch {
}
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
    catch { }
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_adjustSetInterval();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
