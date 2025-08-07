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

// ruleset: ublock-filters

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
const argsList = [[],["skipAdSeconds","","0.02"],["adv","*"],["","1200","0"],["stop()"],["clearInterval"],["myTimer","1500"],["countdown","2000"],["counter","2000"],["","1800"],["","","0"],["yuidea-","*"],["timeLeft"],["","","0.001"],["time"],["time","2500"],["clearInterval","*"],["seconds"],["","","0.02"],["time.html","1000"],["/SplashScreen|BannerAd/"],["i--"],["","*","0"],["js-btn-skip","1000"],["countdown","*","0.001"],["/.?/","*","0.02"],["counter","*","0.02"],["/wpsafe|wait/","*","0.001"],["timer","*","0.02"],["/.?/","*"],["timer","*"],["/.?/","*","0.001"],["tid","*","0.02"],["timeLeft","*","0.001"],["timer","*","0.001"],["counter","*","0.001"],["timer","1000","0.001"],["timer","1600","0.001"],["count","*","0.001"],["/countdown--|getElementById/","*","0.001"],["/counter|wait/","*","0.001"],["interval","*"],["sec--","*","0.001"],["","*","0.02"],["countdown"],["countdown","1000","0.001"],["countdown","1000"],["timer"],["generalTimeLeft","*","0.001"],["show_download_links"],["counter","*"],["countDown"],["downloadTimer"],["next","1000","0.001"],["","","0.3"],["secs"],["_0x"],["timer.remove"],["downloadButton"],["timePassed"],["timeleft"],["counter--"],["(i-1)"],["skipOptions"],["countDown","1150","0.5"],["timercounter"],["count","*"],["#timer"],["temp"],["counter","","0.02"],["distance"],["counter"],["contador"],["display"],["second"],["updatePercentage","100","0.02"],["current()"],["count"],["countdown","*","0.02"],["time","","0.02"],["wait"],["downloadToken"],["updateProgress","*"],["current-=1","*","0.001"],["_0x","*","0.001"],["counter","1000","0.001"],["scrollIncrement","*"],["","*","0.001"],["show","1000","0.001"],["saniye"],["download"],["","1000","0.001"],["invoke","1000"],["download","*","0.02"],["countdown","*"],["/count|verify|isCompleted/","","0.001"],["circle_animation"],["()=>{var c=Kb","1000","0.2"],["timeleftlink","1000","0.001"]];
const hostnamesMap = new Map([["wallpaperaccess.com",0],["123link.*",0],["platinmods.*",0],["al.ly",0],["bbf.lt",0],["cpmlink.net",0],["cut-urls.com",0],["eg4link.*",0],["idlelivelink.*",0],["igram.*",0],["iiv.pl",0],["ur.ly",0],["url.gem-flash.com",0],["zeiz.me",0],["1ink.cc",0],["lin-ks.*",0],["xberuang.*",0],["soft112.com",0],["short-url.link",0],["4download.net",0],["s.sseluxx.com",0],["onifile.com",0],["topflix.*",0],["coolmathgames.com",0],["link-to.net",0],["onle.co",0],["fstore.biz",0],["deltabit.co",0],["leechall.*",0],["sfile.mobi",0],["game-kentang.blogspot.com",0],["shortgoo.blogspot.com",0],["bde4.*",0],["sfirmware.com",0],["mobilelegends.shop",0],["urlpay.net",0],["underhentai.net",0],["suanoticia.online",0],["linkconfig.com",0],["lg-firmwares.com",0],["aylink.co",0],["gitizle.vip",0],["shtms.co",0],["cryptokinews.com",0],["cpmlink.pro",0],["tutwuri.id",0],["khaddavi.net",0],["lokerwfh.net",0],["arkadium.com",0],["mysflink.blogspot.com",0],["runmods.com",0],["anomize.xyz",0],["bondibeachau.com",0],["konstantinova.net",0],["kangkimin.com",0],["iklandb.com",0],["thingiverse.com",0],["ufreegames.com",0],["bdlink.pw",0],["fairyanime.com",0],["7misr4day.com",0],["sama-pro.com",0],["otomi-games.com",0],["curseforge.com",0],["mobitaak.com",0],["arhplyrics.in",0],["telenord.it",0],["diglink.blogspot.com",0],["vkprime.com",0],["yesdownloader.com",0],["tonanmedia.my.id",0],["yurasu.xyz",0],["isekaipalace.com",0],["mitedrive.com",0],["miteblog.com",0],["fullhd4k.com",0],["juegos.eleconomista.es",0],["filmizlehdfilm.com",0],["filmizletv.*",0],["fullfilmizle.cc",0],["gofilmizle.net",0],["easybib.com",0],["modcombo.com",0],["telepisodes.org",0],["novelgames.com",1],["3bmeteo.com",2],["deportealdia.live",3],["ouo.*",4],["indi-share.com",5],["premid.app",5],["cheatcloud.cc",5],["cheater.ninja",5],["cheatermad.com",5],["cheatsquad.gg",5],["freepdf-books.com",6],["themeslide.com",7],["thememypc.net",8],["rezence.com",[8,50]],["gawbne.com",8],["forex-trnd.com",8],["link.tl",9],["lnk.news",10],["lnk.parts",10],["fssquad.com",10],["easylinkref.com",10],["acortalo.*",10],["acortar.*",10],["megadescarga.net",10],["megadescargas.net",10],["gamelopte.com",11],["goto.com.np",12],["vrcmods.com",12],["consoleroms.com",12],["romspedia.com",12],["forexlap.com",13],["forexrw7.com",[13,42]],["fx-22.com",[13,42]],["gold-24.net",[13,42]],["icutlink.com",14],["android-apk.org",14],["zegtrends.com",15],["simsdom.com",16],["fansonlinehub.com",16],["hotmediahub.com",16],["terabox.fun",16],["teralink.me",16],["terashare.me",16],["teraearn.com",16],["fautsy.com",17],["coinlyhub.com",17],["i-bits.io",17],["claimbits.io",17],["filemoon.*",17],["legionjuegos.org",18],["legionpeliculas.org",18],["legionprogramas.org",18],["so1.asia",18],["dutchycorp.*",19],["gamearter.com",20],["bluemediafiles.*",21],["ayobelajarbareng.com",22],["semawur.com",22],["doofree88.com",23],["acdriftingpro.com",24],["tech8s.net",25],["drop.carbikenation.com",25],["linkss.rcccn.in",25],["link.djbassking.live",25],["tech5s.co",25],["game5s.com",25],["yalifin.xyz",25],["lrncook.xyz",25],["financenova.online",25],["utkarshonlinetest.com",25],["financewada.com",25],["healthy4pepole.com",25],["to-travel.net",25],["tech24us.com",26],["freethemesy.com",26],["veganab.co",27],["camdigest.com",27],["nichapk.com",28],["easyworldbusiness.com",28],["riveh.com",28],["blog.potterworld.co",29],["hipsonyc.com",29],["tech.pubghighdamage.com",29],["blog.itijobalert.in",29],["techkhulasha.com",29],["bookszone.in",30],["uptechnologys.com",31],["sevenjournals.com",31],["jobzhub.store",32],["fitdynamos.com",32],["labgame.io",32],["overgal.com",33],["10short.*",34],["mamahawa.com",34],["lollty.pro",34],["postazap.com",34],["financeyogi.net",34],["finclub.in",34],["easywithcode.tech",34],["letest25.co",34],["truevpnlover.com",34],["financebolo.com",34],["rphost.in",34],["vedamdigi.tech",34],["cancelguider.online",34],["bigdata.rawlazy.si",35],["codesnse.com",35],["filmypoints.in",36],["flightsim.to",36],["freethailottery.live",37],["progfu.com",37],["currentrecruitment.com",38],["investorveda.com",38],["edukaroo.com",38],["advicefunda.com",38],["bestloanoffer.net",38],["techconnection.in",38],["hosttbuzz.com",39],["policiesreview.com",39],["travel.vebma.com",40],["cloud.majalahhewan.com",40],["crm.cekresi.me",40],["ai.tempatwisata.pro",40],["cinedesi.in",41],["thevouz.in",41],["tejtime24.com",41],["techishant.in",41],["whatgame.xyz",42],["mooonten.com",42],["msic.site",42],["rfiql.com",43],["gujjukhabar.in",43],["smartfeecalculator.com",43],["djxmaza.in",43],["thecubexguide.com",43],["jytechs.in",43],["aman-dn.blogspot.com",44],["ipalibrary.me",44],["hieunguyenphoto.com",44],["4khd.com",45],["fastt.gg",46],["pixsera.net",47],["imgair.net",47],["imgblaze.net",47],["imgfrost.net",47],["vestimage.site",47],["pixlev.*",47],["pixbryexa.sbs",47],["picbqqa.sbs",47],["pixbkghxa.sbs",47],["imgmgf.sbs",47],["picbcxvxa.sbs",47],["imguee.sbs",47],["imgmffmv.sbs",47],["imgbqb.sbs",47],["imgbyrev.sbs",47],["imgbncvnv.sbs",47],["pixtryab.shop",47],["imggune.shop",47],["pictryhab.shop",47],["pixbnab.shop",47],["imgbnwe.shop",47],["imgbbnhi.shop",47],["imgnbii.shop",47],["imghqqbg.shop",47],["imgyhq.shop",47],["pixnbrqwg.sbs",47],["pixnbrqw.sbs",47],["picmsh.sbs",47],["imgpke.sbs",47],["picuenr.sbs",47],["imgolemn.sbs",47],["imgoebn.sbs",47],["picnwqez.sbs",47],["imgjajhe.sbs",47],["pixjnwe.sbs",47],["pixkfjtrkf.shop",47],["pixkfkf.shop",47],["pixdfdjkkr.shop",47],["pixdfdj.shop",47],["picnft.shop",47],["pixrqqz.shop",47],["picngt.shop",47],["picjgfjet.shop",47],["picjbet.shop",47],["imgkkabm.shop",47],["imgxabm.shop",47],["imgthbm.shop",47],["imgmyqbm.shop",47],["imgwwqbm.shop",47],["imgjvmbbm.shop",47],["imgjbxzjv.shop",47],["imgjmgfgm.shop",47],["picxnkjkhdf.sbs",47],["imgxxbdf.sbs",47],["imgnngr.sbs",47],["imgjjtr.sbs",47],["imgqbbds.sbs",47],["imgbvdf.sbs",47],["imgqnnnebrf.sbs",47],["imgnnnvbrf.sbs",47],["cararegistrasi.com",47],["ipa-apps.me",47],["imslp.org",47],["libertycity.net",47],["arcade.buzzrtv.com",48],["arcade.dailygazette.com",48],["arcade.lemonde.fr",48],["arena.gamesforthebrain.com",48],["bestpuzzlesandgames.com",48],["cointiply.arkadiumarena.com",48],["gamelab.com",48],["games.abqjournal.com",48],["games.amny.com",48],["games.bellinghamherald.com",48],["games.besthealthmag.ca",48],["games.bnd.com",48],["games.boston.com",48],["games.bostonglobe.com",48],["games.bradenton.com",48],["games.centredaily.com",48],["games.charlottegames.cnhinews.com",48],["games.crosswordgiant.com",48],["games.dailymail.co.uk",48],["games.dallasnews.com",48],["games.daytondailynews.com",48],["games.denverpost.com",48],["games.everythingzoomer.com",48],["games.fresnobee.com",48],["games.gameshownetwork.com",48],["games.get.tv",48],["games.greatergood.com",48],["games.heraldonline.com",48],["games.heraldsun.com",48],["games.idahostatesman.com",48],["games.insp.com",48],["games.islandpacket.com",48],["games.journal-news.com",48],["games.kansas.com",48],["games.kansascity.com",48],["games.kentucky.com",48],["games.lancasteronline.com",48],["games.ledger-enquirer.com",48],["games.macon.com",48],["games.mashable.com",48],["games.mercedsunstar.com",48],["games.metro.us",48],["games.metv.com",48],["games.miamiherald.com",48],["games.modbee.com",48],["games.moviestvnetwork.com",48],["games.myrtlebeachonline.com",48],["games.games.newsgames.parade.com",48],["games.pressdemocrat.com",48],["games.puzzlebaron.com",48],["games.puzzler.com",48],["games.puzzles.ca",48],["games.qns.com",48],["games.readersdigest.ca",48],["games.sacbee.com",48],["games.sanluisobispo.com",48],["games.sixtyandme.com",48],["games.sltrib.com",48],["games.springfieldnewssun.com",48],["games.star-telegram.com",48],["games.startribune.com",48],["games.sunherald.com",48],["games.theadvocate.com",48],["games.thenewstribune.com",48],["games.theolympian.com",48],["games.theportugalnews.com",48],["games.thestar.com",48],["games.thestate.com",48],["games.tri-cityherald.com",48],["games.triviatoday.com",48],["games.usnews.com",48],["games.word.tips",48],["games.wordgenius.com",48],["games.wtop.com",48],["jeux.meteocity.com",48],["juegos.as.com",48],["juegos.elnuevoherald.com",48],["juegos.elpais.com",48],["philly.arkadiumarena.com",48],["play.dictionary.com",48],["puzzles.bestforpuzzles.com",48],["puzzles.centralmaine.com",48],["puzzles.crosswordsolver.org",48],["puzzles.independent.co.uk",48],["puzzles.nola.com",48],["puzzles.pressherald.com",48],["puzzles.standard.co.uk",48],["puzzles.sunjournal.com",48],["apkmb.com",49],["apkhihe.com",49],["aemenstore.com",50],["byboe.com",50],["cazzette.com",50],["dreamcheeky.com",50],["fidlarmusic.com",50],["hookeaudio.com",50],["jncojeans.com",50],["kiemlua.com",50],["kingsleynyc.com",50],["lucidcam.com",50],["nguyenvanbao.com",50],["nousdecor.com",50],["pennbookcenter.com",50],["publicananker.com",50],["restorbio.com",50],["staaker.com",50],["samapkstore.com",51],["5ggyan.com",51],["brotherfox91.shop",51],["currentcolorq2dv.shop",51],["customsfencei3.shop",51],["fencethoughgdrt.shop",51],["fencethroughout642.shop",51],["foxwent6ot.shop",51],["havingmovementu8x.shop",51],["homebasis4d.shop",51],["includingbreath5ku.shop",51],["ironwinter6m.shop",51],["leadmorning4ivn.shop",51],["linelocatemfsn.shop",51],["littlesound6c.shop",51],["mindmotion93y8.shop",51],["mightbadly4f.shop",51],["monkeynecktj4w.shop",51],["neighbormajorkex.shop",51],["nervousdoctor9bx.shop",51],["pantogether6jpi.shop",51],["quietlywheat23.shop",51],["saddletopg3tk.shop",51],["soldrubber5xrp.shop",51],["somehowrockyng.shop",51],["strangernervousql.shop",51],["superabbit.shop",51],["supportrightufd.shop",51],["studyinghuman6js.shop",51],["wholecommonrrvp.shop",51],["wintertold7nq.shop",51],["shortenbuddy.com",52],["jpopsingles.eu",52],["vanillatweaks.net",52],["new.lewd.ninja",53],["emulatorgames.net",54],["unityassetcollection.com",55],["rethmic.com",56],["romhustler.org",57],["filmyhitlink.xyz",58],["cinemakottaga.*",59],["allwpworld.com",60],["trzpro.com",61],["techhelpbd.com",61],["zedge.net",62],["send-anywhere.com",63],["upstore.net",64],["rincondelsazon.com",65],["tattoosbeauty.com",65],["disheye.com",66],["yifysub.net",67],["mp3juices.icu",68],["bingotingo.com",69],["redirect.dafontvn.com",70],["filessrc.com",71],["srcimdb.com",71],["droidmirror.com",71],["infokik.com",71],["arealgamer.org",71],["gamingbeasts.com",71],["uploadbeast.com",71],["descargatepelis.com",72],["edufileshare.com",73],["wowroms.com",74],["speedynews.xyz",75],["play.aidungeon.io",76],["crdroid.net",77],["privatemoviez.*",77],["sonixgvn.net",77],["adshnk.com",78],["blogmado.com",79],["pinloker.com",80],["sekilastekno.com",80],["web1s.asia",80],["fikper.com",81],["tralhasvarias.blogspot.com",82],["busuu.com",83],["newscon.org",84],["recipahi.com",85],["thestar.com",86],["obaianinho.com",87],["00m.in",88],["punkrust.net",89],["choralia.net",90],["apkprime.org",91],["restegourmet.de",92],["getmodsapk.*",93],["5play.*",94],["tech.unblockedgames.world",95],["lewdzone.com",96],["safeframe.googlesyndication.com",97],["daftsex.biz",98]]);
const exceptionsMap = new Map([["encurtador.postazap.com",[34]]]);
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
