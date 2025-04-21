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

// ruleset: default

// Important!
// Isolate from global scope

// Start of local scope
(function uBOL_adjustSetInterval() {

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
        'Object_hasOwn': Object.hasOwn.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String': self.String,
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

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [["","1200","0"],[],["stop()"],["clearInterval"],["myTimer","1500"],["countdown","2000"],["counter","2000"],["","1800"],["","","0"],["yuidea-","*"],["timeLeft"],["","","0.001"],["time"],["time","2500"],["clearInterval","*"],["seconds"],["","","0.02"],["time.html","1000"],["/SplashScreen|BannerAd/"],["i--"],["","*","0"],["js-btn-skip","1000"],["countdown","*","0.001"],["/.?/","*","0.002"],["/.?/","*","0.02"],["counter","*","0.02"],["/wpsafe|wait/","*","0.001"],["timer","*","0.02"],["timer","*"],["/.?/","*","0.001"],["tid","*","0.02"],["timeLeft","*","0.001"],["timer","*","0.001"],["counter","*","0.001"],["timer","1000","0.001"],["timer","1600","0.001"],["count","*","0.001"],["counter"],["timer"],["/counter|wait/","*","0.001"],["interval","*"],["sec--","*","0.001"],["","*","0.02"],["countdown"],["generalTimeLeft","*","0.001"],["show_download_links"],["counter","*"],["countDown"],["downloadTimer"],["next","1000","0.001"],["","","0.3"],["time","","0"],["secs"],["_0x"],["timer.remove"],["downloadButton"],["timePassed"],["timeleft"],["counter--"],["(i-1)"],["skipOptions"],["countDown","1150","0.5"],["timercounter"],["count","*"],["#timer"],["temp"],["counter","","0.02"],["timer","1800"],["distance"],["contador"],["display"],["second"],["timer","1500"],["updatePercentage","100","0.02"],["current()"],["l","","0"],["count"],["countdown","*","0.02"],["time","","0.02"],["wait"],["downloadToken"],["updateProgress","*"],["current-=1","*","0.001"],["_0x","*","0.001"],["counter","1000","0.001"],["scrollIncrement","*"],["","*","0.001"],["saniye"],["","1000","0.001"],["invoke","1000"],["download","*","0.02"],["countdown","*"],["/count|verify|isCompleted/","","0.001"],["circle_animation"],["countdown","1000"],["skipAdSeconds","","0.02"],["adv","*"]];
const hostnamesMap = new Map([["deportealdia.live",0],["noticiasesports.live",0],["123link.*",1],["platinmods.*",1],["al.ly",1],["bbf.lt",1],["cpmlink.net",1],["cut-urls.com",1],["eg4link.*",1],["idlelivelink.*",1],["igram.*",1],["iiv.pl",1],["ur.ly",1],["url.gem-flash.com",1],["zeiz.me",1],["1ink.cc",1],["lin-ks.*",1],["xberuang.*",1],["soft112.com",1],["short-url.link",1],["4download.net",1],["s.sseluxx.com",1],["onifile.com",1],["topflix.*",1],["coolmathgames.com",1],["link-to.net",1],["telepisodes.org",1],["onle.co",1],["fstore.biz",1],["deltabit.co",1],["leechall.*",1],["sfile.mobi",1],["upfile.us",1],["game-kentang.blogspot.com",1],["shortgoo.blogspot.com",1],["bde4.*",1],["indavideo.hu",1],["sfirmware.com",1],["mobilelegends.shop",1],["ockles.com",1],["urlpay.net",1],["underhentai.net",1],["suanoticia.online",1],["linkconfig.com",1],["lg-firmwares.com",1],["aylink.co",1],["gitizle.vip",1],["shtms.co",1],["cryptokinews.com",1],["cpmlink.pro",1],["policiesreview.com",1],["speedynews.xyz",[1,73]],["infokeeda.xyz",1],["webzeni.com",1],["tutwuri.id",1],["khaddavi.net",1],["lokerwfh.net",1],["arkadium.com",1],["mysflink.blogspot.com",1],["runmods.com",1],["anomize.xyz",1],["bondibeachau.com",1],["konstantinova.net",1],["kangkimin.com",1],["iklandb.com",1],["thingiverse.com",1],["ufreegames.com",1],["bdlink.pw",1],["fairyanime.com",1],["lootlinks.*",1],["7misr4day.com",1],["sama-pro.com",1],["otomi-games.com",1],["curseforge.com",1],["mobitaak.com",1],["arhplyrics.in",1],["telenord.it",1],["raky.in",1],["desiflixindia.com",1],["diglink.blogspot.com",1],["vkprime.com",1],["i-polls.com",1],["freecoursesonline.me",1],["yesdownloader.com",1],["tonanmedia.my.id",1],["skiplink.me",1],["yurasu.xyz",1],["isekaipalace.com",1],["mitedrive.com",1],["miteblog.com",1],["fullhd4k.com",1],["juegos.eleconomista.es",1],["filmizlehdfilm.com",1],["filmizletv.*",1],["fullfilmizle.cc",1],["gofilmizle.net",1],["easybib.com",1],["modcombo.com",1],["wallpaperaccess.com",1],["ouo.*",2],["indi-share.com",3],["premid.app",3],["cheatcloud.cc",3],["cheater.ninja",3],["cheatermad.com",3],["cheatsquad.gg",3],["freepdf-books.com",4],["themeslide.com",5],["thememypc.net",6],["rezence.com",[6,46]],["mikl4forex.com",6],["gawbne.com",6],["forex-trnd.com",6],["link.tl",7],["lnk.news",8],["lnk.parts",8],["fssquad.com",8],["easylinkref.com",8],["acortalo.*",8],["acortar.*",8],["megadescarga.net",8],["megadescargas.net",8],["gamelopte.com",9],["goto.com.np",10],["vrcmods.com",10],["consoleroms.com",10],["romspedia.com",10],["forexlap.com",11],["forexmab.com",11],["forexwaw.club",11],["forex-articles.com",11],["fx4vip.com",11],["forexrw7.com",[11,41]],["3rabsports.com",11],["fx-22.com",[11,41]],["gold-24.net",[11,41]],["icutlink.com",12],["android-apk.org",12],["zegtrends.com",13],["simsdom.com",14],["fansonlinehub.com",14],["hotmediahub.com",14],["terabox.fun",14],["teralink.me",14],["terashare.me",14],["teraearn.com",14],["fautsy.com",15],["coinlyhub.com",15],["i-bits.io",15],["claimbits.io",15],["mundotec.pro",15],["filemoon.*",15],["legionjuegos.org",16],["legionpeliculas.org",16],["legionprogramas.org",16],["so1.asia",16],["dutchycorp.*",17],["gamearter.com",18],["bluemediafiles.*",19],["ayobelajarbareng.com",20],["semawur.com",20],["doofree88.com",21],["acdriftingpro.com",22],["grtjobs.in",23],["call-bomber.info",23],["kajernews.com",23],["vyaapaarguru.in",23],["link.djbassking.live",24],["tech5s.co",24],["game5s.com",24],["yalifin.xyz",24],["lrncook.xyz",24],["gadgetsreview27.com",24],["newsbawa.com",24],["acetack.com",24],["androidquest.com",24],["apklox.com",24],["chhaprawap.in",24],["gujarativyakaran.com",24],["kashmirstudentsinformation.in",24],["kisantime.com",24],["shetkaritoday.in",24],["pastescript.com",24],["trimorspacks.com",24],["updrop.link",24],["fx-gd.net",24],["healthy4pepole.com",24],["hightrip.net",24],["to-travel.net",24],["tech24us.com",25],["freethemesy.com",25],["veganab.co",26],["camdigest.com",26],["nichapk.com",27],["easyworldbusiness.com",27],["riveh.com",27],["bookszone.in",28],["uptechnologys.com",29],["sevenjournals.com",29],["labgame.io",30],["overgal.com",31],["10short.*",32],["mamahawa.com",32],["lollty.pro",32],["postazap.com",32],["financeyogi.net",32],["finclub.in",32],["easywithcode.tech",32],["letest25.co",32],["truevpnlover.com",32],["financebolo.com",32],["rphost.in",32],["vedamdigi.tech",32],["cancelguider.online",32],["bigdata.rawlazy.si",33],["codesnse.com",33],["filmypoints.in",34],["flightsim.to",34],["freethailottery.live",35],["progfu.com",35],["currentrecruitment.com",36],["investorveda.com",36],["computerpedia.in",36],["edukaroo.com",36],["advicefunda.com",36],["bestloanoffer.net",36],["techconnection.in",36],["itscybertech.com",37],["filessrc.com",37],["srcimdb.com",37],["droidmirror.com",37],["infokik.com",37],["arealgamer.org",37],["gamingbeasts.com",37],["uploadbeast.com",37],["takez.co",38],["pixsera.net",38],["imgair.net",38],["imgblaze.net",38],["imgfrost.net",38],["vestimage.site",38],["pixlev.*",38],["imgyer.store",38],["pixqbngg.shop",38],["pixqwet.shop",38],["pixmos.shop",38],["imgtgd.shop",38],["imgcsxx.shop",38],["imgqklw.shop",38],["pixqkhgrt.shop",38],["imgcssd.shop",38],["imguwjsd.sbs",38],["pictbbf.shop",38],["pixbryexa.sbs",38],["picbqqa.sbs",38],["pixbkghxa.sbs",38],["imgmgf.sbs",38],["picbcxvxa.sbs",38],["imguee.sbs",38],["imgmffmv.sbs",38],["imgbqb.sbs",38],["imgbyrev.sbs",38],["imgbncvnv.sbs",38],["pixtryab.shop",38],["imggune.shop",38],["pictryhab.shop",38],["pixbnab.shop",38],["imgbnwe.shop",38],["imgbbnhi.shop",38],["imgnbii.shop",38],["imghqqbg.shop",38],["imgyhq.shop",38],["pixnbrqwg.sbs",38],["pixnbrqw.sbs",38],["picmsh.sbs",38],["imgpke.sbs",38],["picuenr.sbs",38],["imgolemn.sbs",38],["imgoebn.sbs",38],["picnwqez.sbs",38],["imgjajhe.sbs",38],["pixjnwe.sbs",38],["pixkfjtrkf.shop",38],["pixkfkf.shop",38],["pixdfdjkkr.shop",38],["pixdfdj.shop",38],["picnft.shop",38],["pixrqqz.shop",38],["picngt.shop",38],["picjgfjet.shop",38],["picjbet.shop",38],["imgkkabm.shop",38],["imgxabm.shop",38],["imgthbm.shop",38],["imgmyqbm.shop",38],["imgwwqbm.shop",38],["imgjvmbbm.shop",38],["imgjbxzjv.shop",38],["imgjmgfgm.shop",38],["picxnkjkhdf.sbs",38],["imgxxbdf.sbs",38],["imgnngr.sbs",38],["imgjjtr.sbs",38],["imgqbbds.sbs",38],["imgbvdf.sbs",38],["imgqnnnebrf.sbs",38],["imgnnnvbrf.sbs",38],["cararegistrasi.com",38],["ipa-apps.me",38],["imslp.org",38],["michaelemad.com",38],["libertycity.net",38],["travel.vebma.com",39],["cloud.majalahhewan.com",39],["crm.cekresi.me",39],["ai.tempatwisata.pro",39],["cinedesi.in",40],["thevouz.in",40],["tejtime24.com",40],["techishant.in",40],["whatgame.xyz",41],["mooonten.com",41],["msic.site",41],["rfiql.com",42],["gujjukhabar.in",42],["smartfeecalculator.com",42],["djxmaza.in",42],["thecubexguide.com",42],["jytechs.in",42],["aman-dn.blogspot.com",43],["ipalibrary.me",43],["hieunguyenphoto.com",43],["arcade.buzzrtv.com",44],["arcade.dailygazette.com",44],["arcade.lemonde.fr",44],["arena.gamesforthebrain.com",44],["bestpuzzlesandgames.com",44],["cointiply.arkadiumarena.com",44],["gamelab.com",44],["games.abqjournal.com",44],["games.amny.com",44],["games.bellinghamherald.com",44],["games.besthealthmag.ca",44],["games.bnd.com",44],["games.boston.com",44],["games.bostonglobe.com",44],["games.bradenton.com",44],["games.centredaily.com",44],["games.charlotteobserver.com",44],["games.cnhinews.com",44],["games.crosswordgiant.com",44],["games.dailymail.co.uk",44],["games.dallasnews.com",44],["games.daytondailynews.com",44],["games.denverpost.com",44],["games.everythingzoomer.com",44],["games.fresnobee.com",44],["games.gameshownetwork.com",44],["games.get.tv",44],["games.greatergood.com",44],["games.heraldonline.com",44],["games.heraldsun.com",44],["games.idahostatesman.com",44],["games.insp.com",44],["games.islandpacket.com",44],["games.journal-news.com",44],["games.kansas.com",44],["games.kansascity.com",44],["games.kentucky.com",44],["games.lancasteronline.com",44],["games.ledger-enquirer.com",44],["games.macon.com",44],["games.mashable.com",44],["games.mercedsunstar.com",44],["games.metro.us",44],["games.metv.com",44],["games.miamiherald.com",44],["games.modbee.com",44],["games.moviestvnetwork.com",44],["games.myrtlebeachonline.com",44],["games.nationalreview.com",44],["games.newsobserver.com",44],["games.parade.com",44],["games.pressdemocrat.com",44],["games.puzzlebaron.com",44],["games.puzzler.com",44],["games.puzzles.ca",44],["games.qns.com",44],["games.readersdigest.ca",44],["games.sacbee.com",44],["games.sanluisobispo.com",44],["games.sixtyandme.com",44],["games.sltrib.com",44],["games.springfieldnewssun.com",44],["games.star-telegram.com",44],["games.startribune.com",44],["games.sunherald.com",44],["games.theadvocate.com",44],["games.thenewstribune.com",44],["games.theolympian.com",44],["games.theportugalnews.com",44],["games.thestar.com",44],["games.thestate.com",44],["games.tri-cityherald.com",44],["games.triviatoday.com",44],["games.usnews.com",44],["games.word.tips",44],["games.wordgenius.com",44],["games.wtop.com",44],["jeux.meteocity.com",44],["juegos.as.com",44],["juegos.elnuevoherald.com",44],["juegos.elpais.com",44],["philly.arkadiumarena.com",44],["play.dictionary.com",44],["puzzles.bestforpuzzles.com",44],["puzzles.centralmaine.com",44],["puzzles.crosswordsolver.org",44],["puzzles.independent.co.uk",44],["puzzles.nola.com",44],["puzzles.pressherald.com",44],["puzzles.standard.co.uk",44],["puzzles.sunjournal.com",44],["apkmb.com",45],["apkhihe.com",45],["aemenstore.com",46],["byboe.com",46],["cazzette.com",46],["dreamcheeky.com",46],["fidlarmusic.com",46],["hookeaudio.com",46],["jncojeans.com",46],["kiemlua.com",46],["kingsleynyc.com",46],["lucidcam.com",46],["nguyenvanbao.com",46],["nousdecor.com",46],["pennbookcenter.com",46],["publicananker.com",46],["restorbio.com",46],["staaker.com",46],["samapkstore.com",47],["5ggyan.com",47],["brotherfox91.shop",47],["currentcolorq2dv.shop",47],["customsfencei3.shop",47],["fencethoughgdrt.shop",47],["fencethroughout642.shop",47],["foxwent6ot.shop",47],["havingmovementu8x.shop",47],["homebasis4d.shop",47],["includingbreath5ku.shop",47],["ironwinter6m.shop",47],["leadmorning4ivn.shop",47],["linelocatemfsn.shop",47],["littlesound6c.shop",47],["mindmotion93y8.shop",47],["mightbadly4f.shop",47],["monkeynecktj4w.shop",47],["neighbormajorkex.shop",47],["nervousdoctor9bx.shop",47],["pantogether6jpi.shop",47],["quietlywheat23.shop",47],["saddletopg3tk.shop",47],["soldrubber5xrp.shop",47],["somehowrockyng.shop",47],["strangernervousql.shop",47],["superabbit.shop",47],["supportrightufd.shop",47],["studyinghuman6js.shop",47],["wholecommonrrvp.shop",47],["wintertold7nq.shop",47],["shortenbuddy.com",48],["jpopsingles.eu",48],["vanillatweaks.net",48],["new.lewd.ninja",49],["emulatorgames.net",50],["menjelajahi.com",51],["unityassetcollection.com",52],["rethmic.com",53],["romhustler.org",54],["filmyhitlink.xyz",55],["cinemakottaga.*",56],["allwpworld.com",57],["trzpro.com",58],["techhelpbd.com",58],["zedge.net",59],["send-anywhere.com",60],["upstore.net",61],["rincondelsazon.com",62],["tattoosbeauty.com",62],["disheye.com",63],["yifysub.net",64],["mp3juices.icu",65],["bingotingo.com",66],["thizissam.in",66],["techyreviewx.com",67],["redirect.dafontvn.com",68],["descargatepelis.com",69],["edufileshare.com",70],["wowroms.com",71],["mhma12.tech",72],["play.aidungeon.io",74],["whatsappmods.net",75],["crdroid.net",76],["rlxtech.tech",76],["privatemoviez.*",76],["sonixgvn.net",76],["adshnk.com",77],["blogmado.com",78],["pinloker.com",79],["sekilastekno.com",79],["web1s.asia",79],["fikper.com",80],["tralhasvarias.blogspot.com",81],["busuu.com",82],["newscon.org",83],["recipahi.com",84],["thestar.com",85],["obaianinho.com",86],["punkrust.net",87],["apkprime.org",88],["restegourmet.de",89],["getmodsapk.com",90],["5play.*",91],["tech.unblockedgames.world",92],["lewdzone.com",93],["fastt.gg",94],["novelgames.com",95],["3bmeteo.com",96]]);
const exceptionsMap = new Map([["go.skiplink.me",[1]],["encurtador.postazap.com",[32]]]);
const hasEntities = true;
const hasAncestors = false;

const collectArgIndices = (hn, map, out) => {
    let argsIndices = map.get(hn);
    if ( argsIndices === undefined ) { return; }
    if ( typeof argsIndices !== 'number' ) {
        for ( const argsIndex of argsIndices ) {
            out.add(argsIndex);
        }
    } else {
        out.add(argsIndices);
    }
};

const indicesFromHostname = (hostname, suffix = '') => {
    const hnParts = hostname.split('.');
    const hnpartslen = hnParts.length;
    if ( hnpartslen === 0 ) { return; }
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = `${hnParts.slice(i).join('.')}${suffix}`;
        collectArgIndices(hn, hostnamesMap, todoIndices);
        collectArgIndices(hn, exceptionsMap, tonotdoIndices);
    }
    if ( hasEntities ) {
        const n = hnpartslen - 1;
        for ( let i = 0; i < n; i++ ) {
            for ( let j = n; j > i; j-- ) {
                const en = `${hnParts.slice(i,j).join('.')}.*${suffix}`;
                collectArgIndices(en, hostnamesMap, todoIndices);
                collectArgIndices(en, exceptionsMap, tonotdoIndices);
            }
        }
    }
};

const entries = (( ) => {
    const docloc = document.location;
    const origins = [ docloc.origin ];
    if ( docloc.ancestorOrigins ) {
        origins.push(...docloc.ancestorOrigins);
    }
    return origins.map((origin, i) => {
        const beg = origin.lastIndexOf('://');
        if ( beg === -1 ) { return; }
        const hn = origin.slice(beg+3)
        const end = hn.indexOf(':');
        return { hn: end === -1 ? hn : hn.slice(0, end), i };
    }).filter(a => a !== undefined);
})();
if ( entries.length === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = new Set();

indicesFromHostname(entries[0].hn);
if ( hasAncestors ) {
    for ( const entry of entries ) {
        if ( entry.i === 0 ) { continue; }
        indicesFromHostname(entry.hn, '>>');
    }
}

// Apply scriplets
for ( const i of todoIndices ) {
    if ( tonotdoIndices.has(i) ) { continue; }
    try { adjustSetInterval(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
