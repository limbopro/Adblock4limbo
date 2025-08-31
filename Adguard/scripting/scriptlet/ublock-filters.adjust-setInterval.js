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
const argsList = [[],["skipAdSeconds","","0.02"],["adv","*"],["","1200","0"],["stop()"],["clearInterval"],["myTimer","1500"],["countdown","2000"],["counter","2000"],["","1800"],["","","0"],["yuidea-","*"],["timeLeft"],["","","0.001"],["time"],["time","2500"],["clearInterval","*"],["seconds"],["","","0.02"],["time.html","1000"],["/SplashScreen|BannerAd/"],["i--"],["","*","0"],["js-btn-skip","1000"],["countdown","*","0.001"],["/.?/","*","0.02"],["counter","*","0.02"],["/wpsafe|wait/","*","0.001"],["timer","*","0.02"],["timer","*"],["/.?/","*","0.001"],["tid","*","0.02"],["timeLeft","*","0.001"],["timer","*","0.001"],["counter","*","0.001"],["timer","1000","0.001"],["timer","1600","0.001"],["count","*","0.001"],["/countdown--|getElementById/","*","0.001"],["/counter|wait/","*","0.001"],["interval","*"],["sec--","*","0.001"],["","*","0.02"],["countdown"],["countdown","1000","0.001"],["countdown","1000"],["timer"],["generalTimeLeft","*","0.001"],["show_download_links"],["counter","*"],["countDown"],["downloadTimer"],["next","1000","0.001"],["","","0.3"],["secs"],["_0x"],["timer.remove"],["downloadButton"],["timePassed"],["timeleft"],["counter--"],["l-1"],["skipOptions"],["countDown","1150","0.5"],["timercounter"],["count","*"],["#timer"],["temp"],["counter","","0.02"],["distance"],["counter"],["contador"],["display"],["second"],["updatePercentage","100","0.02"],["current()"],["count"],["countdown","*","0.02"],["time","","0.02"],["wait"],["downloadToken"],["updateProgress","*"],["current-=1","*","0.001"],["_0x","*","0.001"],["counter","1000","0.001"],["scrollIncrement","*"],["","*","0.001"],["show","1000","0.001"],["saniye"],["download"],["","1000","0.001"],["invoke","1000"],["download","*","0.02"],["countdown","*"],["/count|verify|isCompleted/","","0.001"],["circle_animation"],["()=>{var c=Kb","1000","0.2"],["timeleftlink","1000","0.001"]];
const hostnamesMap = new Map([["wallpaperaccess.com",0],["123link.*",0],["platinmods.*",0],["al.ly",0],["bbf.lt",0],["cpmlink.net",0],["cut-urls.com",0],["eg4link.*",0],["idlelivelink.*",0],["igram.*",0],["iiv.pl",0],["ur.ly",0],["url.gem-flash.com",0],["zeiz.me",0],["1ink.cc",0],["lin-ks.*",0],["xberuang.*",0],["soft112.com",0],["short-url.link",0],["4download.net",0],["s.sseluxx.com",0],["onifile.com",0],["topflix.*",0],["coolmathgames.com",0],["link-to.net",0],["onle.co",0],["fstore.biz",0],["deltabit.co",0],["leechall.*",0],["sfile.mobi",0],["game-kentang.blogspot.com",0],["shortgoo.blogspot.com",0],["bde4.*",0],["sfirmware.com",0],["mobilelegends.shop",0],["urlpay.net",0],["underhentai.net",0],["suanoticia.online",0],["linkconfig.com",0],["lg-firmwares.com",0],["aylink.co",0],["gitizle.vip",0],["shtms.co",0],["cryptokinews.com",0],["cpmlink.pro",0],["tutwuri.id",0],["khaddavi.net",0],["lokerwfh.net",0],["arkadium.com",0],["mysflink.blogspot.com",0],["runmods.com",0],["anomize.xyz",0],["bondibeachau.com",0],["konstantinova.net",0],["kangkimin.com",0],["iklandb.com",0],["thingiverse.com",0],["ufreegames.com",0],["bdlink.pw",0],["fairyanime.com",0],["7misr4day.com",0],["sama-pro.com",0],["otomi-games.com",0],["curseforge.com",0],["mobitaak.com",0],["arhplyrics.in",0],["telenord.it",0],["diglink.blogspot.com",0],["vkprime.com",0],["yesdownloader.com",0],["tonanmedia.my.id",0],["yurasu.xyz",0],["isekaipalace.com",0],["mitedrive.com",0],["miteblog.com",0],["fullhd4k.com",0],["juegos.eleconomista.es",0],["filmizlehdfilm.com",0],["filmizletv.*",0],["fullfilmizle.cc",0],["gofilmizle.net",0],["easybib.com",0],["modcombo.com",0],["telepisodes.org",0],["novelgames.com",1],["3bmeteo.com",2],["deportealdia.live",3],["ouo.*",4],["indi-share.com",5],["premid.app",5],["cheatcloud.cc",5],["cheater.ninja",5],["cheatermad.com",5],["cheatsquad.gg",5],["freepdf-books.com",6],["themeslide.com",7],["thememypc.net",8],["rezence.com",[8,49]],["gawbne.com",8],["forex-trnd.com",8],["link.tl",9],["lnk.news",10],["lnk.parts",10],["fssquad.com",10],["easylinkref.com",10],["acortalo.*",10],["acortar.*",10],["megadescarga.net",10],["megadescargas.net",10],["gamelopte.com",11],["goto.com.np",12],["vrcmods.com",12],["consoleroms.com",12],["romspedia.com",12],["forexlap.com",13],["forexrw7.com",[13,41]],["fx-22.com",[13,41]],["gold-24.net",[13,41]],["icutlink.com",14],["android-apk.org",14],["zegtrends.com",15],["simsdom.com",16],["fansonlinehub.com",16],["hotmediahub.com",16],["terabox.fun",16],["teralink.me",16],["terashare.me",16],["teraearn.com",16],["fautsy.com",17],["coinlyhub.com",17],["i-bits.io",17],["claimbits.io",17],["filemoon.*",17],["legionjuegos.org",18],["legionpeliculas.org",18],["legionprogramas.org",18],["so1.asia",18],["dutchycorp.*",19],["gamearter.com",20],["bluemediafiles.*",21],["ayobelajarbareng.com",22],["semawur.com",22],["doofree88.com",23],["acdriftingpro.com",24],["tech8s.net",25],["drop.carbikenation.com",25],["linkss.rcccn.in",25],["link.djbassking.live",25],["tech5s.co",25],["game5s.com",25],["yalifin.xyz",25],["lrncook.xyz",25],["financenova.online",25],["utkarshonlinetest.com",25],["financewada.com",25],["healthy4pepole.com",25],["to-travel.net",25],["tech24us.com",26],["freethemesy.com",26],["veganab.co",27],["camdigest.com",27],["nichapk.com",28],["easyworldbusiness.com",28],["riveh.com",28],["bookszone.in",29],["uptechnologys.com",30],["sevenjournals.com",30],["jobzhub.store",31],["fitdynamos.com",31],["labgame.io",31],["overgal.com",32],["10short.*",33],["mamahawa.com",33],["lollty.pro",33],["postazap.com",33],["financeyogi.net",33],["finclub.in",33],["easywithcode.tech",33],["letest25.co",33],["truevpnlover.com",33],["financebolo.com",33],["rphost.in",33],["vedamdigi.tech",33],["cancelguider.online",33],["bigdata.rawlazy.si",34],["codesnse.com",34],["filmypoints.in",35],["flightsim.to",35],["freethailottery.live",36],["progfu.com",36],["currentrecruitment.com",37],["investorveda.com",37],["edukaroo.com",37],["advicefunda.com",37],["bestloanoffer.net",37],["techconnection.in",37],["comparepolicyy.com",38],["healthylifez.com",38],["hosttbuzz.com",38],["policiesreview.com",38],["travel.vebma.com",39],["cloud.majalahhewan.com",39],["crm.cekresi.me",39],["ai.tempatwisata.pro",39],["cinedesi.in",40],["thevouz.in",40],["tejtime24.com",40],["techishant.in",40],["whatgame.xyz",41],["mooonten.com",41],["msic.site",41],["rfiql.com",42],["gujjukhabar.in",42],["smartfeecalculator.com",42],["djxmaza.in",42],["thecubexguide.com",42],["jytechs.in",42],["aman-dn.blogspot.com",43],["ipalibrary.me",43],["hieunguyenphoto.com",43],["4khd.com",44],["fastt.gg",45],["pixsera.net",46],["imgair.net",46],["imgblaze.net",46],["imgfrost.net",46],["vestimage.site",46],["pixlev.*",46],["pixbryexa.sbs",46],["picbqqa.sbs",46],["pixbkghxa.sbs",46],["imgmgf.sbs",46],["picbcxvxa.sbs",46],["imguee.sbs",46],["imgmffmv.sbs",46],["imgbqb.sbs",46],["imgbyrev.sbs",46],["imgbncvnv.sbs",46],["pixtryab.shop",46],["imggune.shop",46],["pictryhab.shop",46],["pixbnab.shop",46],["imgbnwe.shop",46],["imgbbnhi.shop",46],["imgnbii.shop",46],["imghqqbg.shop",46],["imgyhq.shop",46],["pixnbrqwg.sbs",46],["pixnbrqw.sbs",46],["picmsh.sbs",46],["imgpke.sbs",46],["picuenr.sbs",46],["imgolemn.sbs",46],["imgoebn.sbs",46],["picnwqez.sbs",46],["imgjajhe.sbs",46],["pixjnwe.sbs",46],["pixkfjtrkf.shop",46],["pixkfkf.shop",46],["pixdfdjkkr.shop",46],["pixdfdj.shop",46],["picnft.shop",46],["pixrqqz.shop",46],["picngt.shop",46],["picjgfjet.shop",46],["picjbet.shop",46],["imgkkabm.shop",46],["imgxabm.shop",46],["imgthbm.shop",46],["imgmyqbm.shop",46],["imgwwqbm.shop",46],["imgjvmbbm.shop",46],["imgjbxzjv.shop",46],["imgjmgfgm.shop",46],["picxnkjkhdf.sbs",46],["imgxxbdf.sbs",46],["imgnngr.sbs",46],["imgjjtr.sbs",46],["imgqbbds.sbs",46],["imgbvdf.sbs",46],["imgqnnnebrf.sbs",46],["imgnnnvbrf.sbs",46],["cararegistrasi.com",46],["ipa-apps.me",46],["imslp.org",46],["libertycity.net",46],["arcade.buzzrtv.com",47],["arcade.dailygazette.com",47],["arcade.lemonde.fr",47],["arena.gamesforthebrain.com",47],["bestpuzzlesandgames.com",47],["cointiply.arkadiumarena.com",47],["gamelab.com",47],["games.abqjournal.com",47],["games.amny.com",47],["games.bellinghamherald.com",47],["games.besthealthmag.ca",47],["games.bnd.com",47],["games.boston.com",47],["games.bostonglobe.com",47],["games.bradenton.com",47],["games.centredaily.com",47],["games.charlottegames.cnhinews.com",47],["games.crosswordgiant.com",47],["games.dailymail.co.uk",47],["games.dallasnews.com",47],["games.daytondailynews.com",47],["games.denverpost.com",47],["games.everythingzoomer.com",47],["games.fresnobee.com",47],["games.gameshownetwork.com",47],["games.get.tv",47],["games.greatergood.com",47],["games.heraldonline.com",47],["games.heraldsun.com",47],["games.idahostatesman.com",47],["games.insp.com",47],["games.islandpacket.com",47],["games.journal-news.com",47],["games.kansas.com",47],["games.kansascity.com",47],["games.kentucky.com",47],["games.lancasteronline.com",47],["games.ledger-enquirer.com",47],["games.macon.com",47],["games.mashable.com",47],["games.mercedsunstar.com",47],["games.metro.us",47],["games.metv.com",47],["games.miamiherald.com",47],["games.modbee.com",47],["games.moviestvnetwork.com",47],["games.myrtlebeachonline.com",47],["games.games.newsgames.parade.com",47],["games.pressdemocrat.com",47],["games.puzzlebaron.com",47],["games.puzzler.com",47],["games.puzzles.ca",47],["games.qns.com",47],["games.readersdigest.ca",47],["games.sacbee.com",47],["games.sanluisobispo.com",47],["games.sixtyandme.com",47],["games.sltrib.com",47],["games.springfieldnewssun.com",47],["games.star-telegram.com",47],["games.startribune.com",47],["games.sunherald.com",47],["games.theadvocate.com",47],["games.thenewstribune.com",47],["games.theolympian.com",47],["games.theportugalnews.com",47],["games.thestar.com",47],["games.thestate.com",47],["games.tri-cityherald.com",47],["games.triviatoday.com",47],["games.usnews.com",47],["games.word.tips",47],["games.wordgenius.com",47],["games.wtop.com",47],["jeux.meteocity.com",47],["juegos.as.com",47],["juegos.elnuevoherald.com",47],["juegos.elpais.com",47],["philly.arkadiumarena.com",47],["play.dictionary.com",47],["puzzles.bestforpuzzles.com",47],["puzzles.centralmaine.com",47],["puzzles.crosswordsolver.org",47],["puzzles.independent.co.uk",47],["puzzles.nola.com",47],["puzzles.pressherald.com",47],["puzzles.standard.co.uk",47],["puzzles.sunjournal.com",47],["apkmb.com",48],["apkhihe.com",48],["aemenstore.com",49],["byboe.com",49],["cazzette.com",49],["dreamcheeky.com",49],["fidlarmusic.com",49],["hookeaudio.com",49],["jncojeans.com",49],["kiemlua.com",49],["kingsleynyc.com",49],["lucidcam.com",49],["nguyenvanbao.com",49],["nousdecor.com",49],["pennbookcenter.com",49],["publicananker.com",49],["restorbio.com",49],["staaker.com",49],["samapkstore.com",50],["5ggyan.com",50],["brotherfox91.shop",50],["currentcolorq2dv.shop",50],["customsfencei3.shop",50],["fencethoughgdrt.shop",50],["fencethroughout642.shop",50],["foxwent6ot.shop",50],["havingmovementu8x.shop",50],["homebasis4d.shop",50],["includingbreath5ku.shop",50],["ironwinter6m.shop",50],["leadmorning4ivn.shop",50],["linelocatemfsn.shop",50],["littlesound6c.shop",50],["mindmotion93y8.shop",50],["mightbadly4f.shop",50],["monkeynecktj4w.shop",50],["neighbormajorkex.shop",50],["nervousdoctor9bx.shop",50],["pantogether6jpi.shop",50],["quietlywheat23.shop",50],["saddletopg3tk.shop",50],["soldrubber5xrp.shop",50],["somehowrockyng.shop",50],["strangernervousql.shop",50],["superabbit.shop",50],["supportrightufd.shop",50],["studyinghuman6js.shop",50],["wholecommonrrvp.shop",50],["wintertold7nq.shop",50],["shortenbuddy.com",51],["jpopsingles.eu",51],["vanillatweaks.net",51],["new.lewd.ninja",52],["emulatorgames.net",53],["unityassetcollection.com",54],["rethmic.com",55],["romhustler.org",56],["filmyhitlink.xyz",57],["cinemakottaga.*",58],["allwpworld.com",59],["trzpro.com",60],["techhelpbd.com",60],["zedge.net",61],["send-anywhere.com",62],["upstore.net",63],["rincondelsazon.com",64],["tattoosbeauty.com",64],["disheye.com",65],["yifysub.net",66],["mp3juices.icu",67],["bingotingo.com",68],["redirect.dafontvn.com",69],["filessrc.com",70],["srcimdb.com",70],["droidmirror.com",70],["infokik.com",70],["arealgamer.org",70],["gamingbeasts.com",70],["uploadbeast.com",70],["descargatepelis.com",71],["edufileshare.com",72],["wowroms.com",73],["speedynews.xyz",74],["play.aidungeon.io",75],["crdroid.net",76],["privatemoviez.*",76],["sonixgvn.net",76],["adshnk.com",77],["blogmado.com",78],["pinloker.com",79],["sekilastekno.com",79],["web1s.asia",79],["fikper.com",80],["tralhasvarias.blogspot.com",81],["busuu.com",82],["newscon.org",83],["recipahi.com",84],["thestar.com",85],["obaianinho.com",86],["00m.in",87],["punkrust.net",88],["choralia.net",89],["apkprime.org",90],["restegourmet.de",91],["getmodsapk.*",92],["5play.*",93],["tech.unblockedgames.world",94],["lewdzone.com",95],["safeframe.googlesyndication.com",96],["daftsex.biz",97]]);
const exceptionsMap = new Map([["encurtador.postazap.com",[33]]]);
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
