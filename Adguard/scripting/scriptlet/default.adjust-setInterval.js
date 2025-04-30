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
const argsList = [["","1200","0"],[],["stop()"],["clearInterval"],["myTimer","1500"],["countdown","2000"],["counter","2000"],["","1800"],["","","0"],["yuidea-","*"],["timeLeft"],["","","0.001"],["time"],["time","2500"],["clearInterval","*"],["seconds"],["","","0.02"],["time.html","1000"],["/SplashScreen|BannerAd/"],["i--"],["","*","0"],["js-btn-skip","1000"],["countdown","*","0.001"],["/.?/","*","0.002"],["/.?/","*","0.02"],["counter","*","0.02"],["/wpsafe|wait/","*","0.001"],["timer","*","0.02"],["timer","*"],["/.?/","*","0.001"],["tid","*","0.02"],["timeLeft","*","0.001"],["timer","*","0.001"],["counter","*","0.001"],["timer","1000","0.001"],["timer","1600","0.001"],["count","*","0.001"],["/countdown--|getElementById/","*","0.001"],["/counter|wait/","*","0.001"],["interval","*"],["sec--","*","0.001"],["","*","0.02"],["countdown"],["countdown","1000"],["timer"],["generalTimeLeft","*","0.001"],["show_download_links"],["counter","*"],["countDown"],["downloadTimer"],["next","1000","0.001"],["","","0.3"],["time","","0"],["secs"],["_0x"],["timer.remove"],["downloadButton"],["timePassed"],["timeleft"],["counter--"],["(i-1)"],["skipOptions"],["countDown","1150","0.5"],["timercounter"],["count","*"],["#timer"],["temp"],["counter","","0.02"],["timer","1800"],["distance"],["counter"],["contador"],["display"],["second"],["timer","1500"],["updatePercentage","100","0.02"],["current()"],["l","","0"],["count"],["countdown","*","0.02"],["time","","0.02"],["wait"],["downloadToken"],["updateProgress","*"],["current-=1","*","0.001"],["_0x","*","0.001"],["counter","1000","0.001"],["scrollIncrement","*"],["","*","0.001"],["saniye"],["","1000","0.001"],["invoke","1000"],["download","*","0.02"],["countdown","*"],["/count|verify|isCompleted/","","0.001"],["circle_animation"],["skipAdSeconds","","0.02"],["adv","*"]];
const hostnamesMap = new Map([["deportealdia.live",0],["noticiasesports.live",0],["123link.*",1],["platinmods.*",1],["al.ly",1],["bbf.lt",1],["cpmlink.net",1],["cut-urls.com",1],["eg4link.*",1],["idlelivelink.*",1],["igram.*",1],["iiv.pl",1],["ur.ly",1],["url.gem-flash.com",1],["zeiz.me",1],["1ink.cc",1],["lin-ks.*",1],["xberuang.*",1],["soft112.com",1],["short-url.link",1],["4download.net",1],["s.sseluxx.com",1],["onifile.com",1],["topflix.*",1],["coolmathgames.com",1],["link-to.net",1],["telepisodes.org",1],["onle.co",1],["fstore.biz",1],["deltabit.co",1],["leechall.*",1],["sfile.mobi",1],["upfile.us",1],["game-kentang.blogspot.com",1],["shortgoo.blogspot.com",1],["bde4.*",1],["indavideo.hu",1],["sfirmware.com",1],["mobilelegends.shop",1],["ockles.com",1],["urlpay.net",1],["underhentai.net",1],["suanoticia.online",1],["linkconfig.com",1],["lg-firmwares.com",1],["aylink.co",1],["gitizle.vip",1],["shtms.co",1],["cryptokinews.com",1],["cpmlink.pro",1],["speedynews.xyz",[1,75]],["infokeeda.xyz",1],["webzeni.com",1],["tutwuri.id",1],["khaddavi.net",1],["lokerwfh.net",1],["arkadium.com",1],["mysflink.blogspot.com",1],["runmods.com",1],["anomize.xyz",1],["bondibeachau.com",1],["konstantinova.net",1],["kangkimin.com",1],["iklandb.com",1],["thingiverse.com",1],["ufreegames.com",1],["bdlink.pw",1],["fairyanime.com",1],["lootlinks.*",1],["7misr4day.com",1],["sama-pro.com",1],["otomi-games.com",1],["curseforge.com",1],["mobitaak.com",1],["arhplyrics.in",1],["telenord.it",1],["raky.in",1],["desiflixindia.com",1],["diglink.blogspot.com",1],["vkprime.com",1],["i-polls.com",1],["freecoursesonline.me",1],["yesdownloader.com",1],["tonanmedia.my.id",1],["skiplink.me",1],["yurasu.xyz",1],["isekaipalace.com",1],["mitedrive.com",1],["miteblog.com",1],["fullhd4k.com",1],["juegos.eleconomista.es",1],["filmizlehdfilm.com",1],["filmizletv.*",1],["fullfilmizle.cc",1],["gofilmizle.net",1],["easybib.com",1],["modcombo.com",1],["wallpaperaccess.com",1],["ouo.*",2],["indi-share.com",3],["premid.app",3],["cheatcloud.cc",3],["cheater.ninja",3],["cheatermad.com",3],["cheatsquad.gg",3],["freepdf-books.com",4],["themeslide.com",5],["thememypc.net",6],["rezence.com",[6,47]],["mikl4forex.com",6],["gawbne.com",6],["forex-trnd.com",6],["link.tl",7],["lnk.news",8],["lnk.parts",8],["fssquad.com",8],["easylinkref.com",8],["acortalo.*",8],["acortar.*",8],["megadescarga.net",8],["megadescargas.net",8],["gamelopte.com",9],["goto.com.np",10],["vrcmods.com",10],["consoleroms.com",10],["romspedia.com",10],["forexlap.com",11],["forexmab.com",11],["forexwaw.club",11],["forex-articles.com",11],["fx4vip.com",11],["forexrw7.com",[11,40]],["3rabsports.com",11],["fx-22.com",[11,40]],["gold-24.net",[11,40]],["icutlink.com",12],["android-apk.org",12],["zegtrends.com",13],["simsdom.com",14],["fansonlinehub.com",14],["hotmediahub.com",14],["terabox.fun",14],["teralink.me",14],["terashare.me",14],["teraearn.com",14],["fautsy.com",15],["coinlyhub.com",15],["i-bits.io",15],["claimbits.io",15],["mundotec.pro",15],["filemoon.*",15],["legionjuegos.org",16],["legionpeliculas.org",16],["legionprogramas.org",16],["so1.asia",16],["dutchycorp.*",17],["gamearter.com",18],["bluemediafiles.*",19],["ayobelajarbareng.com",20],["semawur.com",20],["doofree88.com",21],["acdriftingpro.com",22],["shayarias.in",23],["jksb.in",23],["mazakisan.com",23],["grtjobs.in",23],["call-bomber.info",23],["kajernews.com",23],["vyaapaarguru.in",23],["link.djbassking.live",24],["tech5s.co",24],["game5s.com",24],["yalifin.xyz",24],["lrncook.xyz",24],["financenova.online",24],["utkarshonlinetest.com",24],["financewada.com",24],["acetack.com",24],["androidquest.com",24],["apklox.com",24],["chhaprawap.in",24],["gujarativyakaran.com",24],["kashmirstudentsinformation.in",24],["kisantime.com",24],["shetkaritoday.in",24],["pastescript.com",24],["trimorspacks.com",24],["updrop.link",24],["fx-gd.net",24],["healthy4pepole.com",24],["hightrip.net",24],["to-travel.net",24],["tech24us.com",25],["freethemesy.com",25],["veganab.co",26],["camdigest.com",26],["nichapk.com",27],["easyworldbusiness.com",27],["riveh.com",27],["bookszone.in",28],["uptechnologys.com",29],["sevenjournals.com",29],["labgame.io",30],["overgal.com",31],["10short.*",32],["mamahawa.com",32],["lollty.pro",32],["postazap.com",32],["financeyogi.net",32],["finclub.in",32],["easywithcode.tech",32],["letest25.co",32],["truevpnlover.com",32],["financebolo.com",32],["rphost.in",32],["vedamdigi.tech",32],["cancelguider.online",32],["bigdata.rawlazy.si",33],["codesnse.com",33],["filmypoints.in",34],["flightsim.to",34],["freethailottery.live",35],["progfu.com",35],["currentrecruitment.com",36],["investorveda.com",36],["edukaroo.com",36],["advicefunda.com",36],["bestloanoffer.net",36],["techconnection.in",36],["policiesreview.com",37],["travel.vebma.com",38],["cloud.majalahhewan.com",38],["crm.cekresi.me",38],["ai.tempatwisata.pro",38],["cinedesi.in",39],["thevouz.in",39],["tejtime24.com",39],["techishant.in",39],["whatgame.xyz",40],["mooonten.com",40],["msic.site",40],["rfiql.com",41],["gujjukhabar.in",41],["smartfeecalculator.com",41],["djxmaza.in",41],["thecubexguide.com",41],["jytechs.in",41],["aman-dn.blogspot.com",42],["ipalibrary.me",42],["hieunguyenphoto.com",42],["fastt.gg",43],["pixsera.net",44],["imgair.net",44],["imgblaze.net",44],["imgfrost.net",44],["vestimage.site",44],["pixlev.*",44],["imgyer.store",44],["pixqbngg.shop",44],["pixqwet.shop",44],["pixmos.shop",44],["imgtgd.shop",44],["imgcsxx.shop",44],["imgqklw.shop",44],["pixqkhgrt.shop",44],["imgcssd.shop",44],["imguwjsd.sbs",44],["pictbbf.shop",44],["pixbryexa.sbs",44],["picbqqa.sbs",44],["pixbkghxa.sbs",44],["imgmgf.sbs",44],["picbcxvxa.sbs",44],["imguee.sbs",44],["imgmffmv.sbs",44],["imgbqb.sbs",44],["imgbyrev.sbs",44],["imgbncvnv.sbs",44],["pixtryab.shop",44],["imggune.shop",44],["pictryhab.shop",44],["pixbnab.shop",44],["imgbnwe.shop",44],["imgbbnhi.shop",44],["imgnbii.shop",44],["imghqqbg.shop",44],["imgyhq.shop",44],["pixnbrqwg.sbs",44],["pixnbrqw.sbs",44],["picmsh.sbs",44],["imgpke.sbs",44],["picuenr.sbs",44],["imgolemn.sbs",44],["imgoebn.sbs",44],["picnwqez.sbs",44],["imgjajhe.sbs",44],["pixjnwe.sbs",44],["pixkfjtrkf.shop",44],["pixkfkf.shop",44],["pixdfdjkkr.shop",44],["pixdfdj.shop",44],["picnft.shop",44],["pixrqqz.shop",44],["picngt.shop",44],["picjgfjet.shop",44],["picjbet.shop",44],["imgkkabm.shop",44],["imgxabm.shop",44],["imgthbm.shop",44],["imgmyqbm.shop",44],["imgwwqbm.shop",44],["imgjvmbbm.shop",44],["imgjbxzjv.shop",44],["imgjmgfgm.shop",44],["picxnkjkhdf.sbs",44],["imgxxbdf.sbs",44],["imgnngr.sbs",44],["imgjjtr.sbs",44],["imgqbbds.sbs",44],["imgbvdf.sbs",44],["imgqnnnebrf.sbs",44],["imgnnnvbrf.sbs",44],["cararegistrasi.com",44],["ipa-apps.me",44],["imslp.org",44],["michaelemad.com",44],["libertycity.net",44],["arcade.buzzrtv.com",45],["arcade.dailygazette.com",45],["arcade.lemonde.fr",45],["arena.gamesforthebrain.com",45],["bestpuzzlesandgames.com",45],["cointiply.arkadiumarena.com",45],["gamelab.com",45],["games.abqjournal.com",45],["games.amny.com",45],["games.bellinghamherald.com",45],["games.besthealthmag.ca",45],["games.bnd.com",45],["games.boston.com",45],["games.bostonglobe.com",45],["games.bradenton.com",45],["games.centredaily.com",45],["games.charlotteobserver.com",45],["games.cnhinews.com",45],["games.crosswordgiant.com",45],["games.dailymail.co.uk",45],["games.dallasnews.com",45],["games.daytondailynews.com",45],["games.denverpost.com",45],["games.everythingzoomer.com",45],["games.fresnobee.com",45],["games.gameshownetwork.com",45],["games.get.tv",45],["games.greatergood.com",45],["games.heraldonline.com",45],["games.heraldsun.com",45],["games.idahostatesman.com",45],["games.insp.com",45],["games.islandpacket.com",45],["games.journal-news.com",45],["games.kansas.com",45],["games.kansascity.com",45],["games.kentucky.com",45],["games.lancasteronline.com",45],["games.ledger-enquirer.com",45],["games.macon.com",45],["games.mashable.com",45],["games.mercedsunstar.com",45],["games.metro.us",45],["games.metv.com",45],["games.miamiherald.com",45],["games.modbee.com",45],["games.moviestvnetwork.com",45],["games.myrtlebeachonline.com",45],["games.nationalreview.com",45],["games.newsobserver.com",45],["games.parade.com",45],["games.pressdemocrat.com",45],["games.puzzlebaron.com",45],["games.puzzler.com",45],["games.puzzles.ca",45],["games.qns.com",45],["games.readersdigest.ca",45],["games.sacbee.com",45],["games.sanluisobispo.com",45],["games.sixtyandme.com",45],["games.sltrib.com",45],["games.springfieldnewssun.com",45],["games.star-telegram.com",45],["games.startribune.com",45],["games.sunherald.com",45],["games.theadvocate.com",45],["games.thenewstribune.com",45],["games.theolympian.com",45],["games.theportugalnews.com",45],["games.thestar.com",45],["games.thestate.com",45],["games.tri-cityherald.com",45],["games.triviatoday.com",45],["games.usnews.com",45],["games.word.tips",45],["games.wordgenius.com",45],["games.wtop.com",45],["jeux.meteocity.com",45],["juegos.as.com",45],["juegos.elnuevoherald.com",45],["juegos.elpais.com",45],["philly.arkadiumarena.com",45],["play.dictionary.com",45],["puzzles.bestforpuzzles.com",45],["puzzles.centralmaine.com",45],["puzzles.crosswordsolver.org",45],["puzzles.independent.co.uk",45],["puzzles.nola.com",45],["puzzles.pressherald.com",45],["puzzles.standard.co.uk",45],["puzzles.sunjournal.com",45],["apkmb.com",46],["apkhihe.com",46],["aemenstore.com",47],["byboe.com",47],["cazzette.com",47],["dreamcheeky.com",47],["fidlarmusic.com",47],["hookeaudio.com",47],["jncojeans.com",47],["kiemlua.com",47],["kingsleynyc.com",47],["lucidcam.com",47],["nguyenvanbao.com",47],["nousdecor.com",47],["pennbookcenter.com",47],["publicananker.com",47],["restorbio.com",47],["staaker.com",47],["samapkstore.com",48],["5ggyan.com",48],["brotherfox91.shop",48],["currentcolorq2dv.shop",48],["customsfencei3.shop",48],["fencethoughgdrt.shop",48],["fencethroughout642.shop",48],["foxwent6ot.shop",48],["havingmovementu8x.shop",48],["homebasis4d.shop",48],["includingbreath5ku.shop",48],["ironwinter6m.shop",48],["leadmorning4ivn.shop",48],["linelocatemfsn.shop",48],["littlesound6c.shop",48],["mindmotion93y8.shop",48],["mightbadly4f.shop",48],["monkeynecktj4w.shop",48],["neighbormajorkex.shop",48],["nervousdoctor9bx.shop",48],["pantogether6jpi.shop",48],["quietlywheat23.shop",48],["saddletopg3tk.shop",48],["soldrubber5xrp.shop",48],["somehowrockyng.shop",48],["strangernervousql.shop",48],["superabbit.shop",48],["supportrightufd.shop",48],["studyinghuman6js.shop",48],["wholecommonrrvp.shop",48],["wintertold7nq.shop",48],["shortenbuddy.com",49],["jpopsingles.eu",49],["vanillatweaks.net",49],["new.lewd.ninja",50],["emulatorgames.net",51],["menjelajahi.com",52],["unityassetcollection.com",53],["rethmic.com",54],["romhustler.org",55],["filmyhitlink.xyz",56],["cinemakottaga.*",57],["allwpworld.com",58],["trzpro.com",59],["techhelpbd.com",59],["zedge.net",60],["send-anywhere.com",61],["upstore.net",62],["rincondelsazon.com",63],["tattoosbeauty.com",63],["disheye.com",64],["yifysub.net",65],["mp3juices.icu",66],["bingotingo.com",67],["thizissam.in",67],["techyreviewx.com",68],["redirect.dafontvn.com",69],["filessrc.com",70],["srcimdb.com",70],["droidmirror.com",70],["infokik.com",70],["arealgamer.org",70],["gamingbeasts.com",70],["uploadbeast.com",70],["descargatepelis.com",71],["edufileshare.com",72],["wowroms.com",73],["mhma12.tech",74],["play.aidungeon.io",76],["whatsappmods.net",77],["crdroid.net",78],["rlxtech.tech",78],["privatemoviez.*",78],["sonixgvn.net",78],["adshnk.com",79],["blogmado.com",80],["pinloker.com",81],["sekilastekno.com",81],["web1s.asia",81],["fikper.com",82],["tralhasvarias.blogspot.com",83],["busuu.com",84],["newscon.org",85],["recipahi.com",86],["thestar.com",87],["obaianinho.com",88],["punkrust.net",89],["apkprime.org",90],["restegourmet.de",91],["getmodsapk.com",92],["5play.*",93],["tech.unblockedgames.world",94],["lewdzone.com",95],["novelgames.com",96],["3bmeteo.com",97]]);
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
