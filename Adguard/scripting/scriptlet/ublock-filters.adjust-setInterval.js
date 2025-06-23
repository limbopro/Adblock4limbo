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
const argsList = [[],["skipAdSeconds","","0.02"],["adv","*"],["","1200","0"],["stop()"],["clearInterval"],["myTimer","1500"],["countdown","2000"],["counter","2000"],["","1800"],["","","0"],["yuidea-","*"],["timeLeft"],["","","0.001"],["time"],["time","2500"],["clearInterval","*"],["seconds"],["","","0.02"],["time.html","1000"],["/SplashScreen|BannerAd/"],["i--"],["","*","0"],["js-btn-skip","1000"],["countdown","*","0.001"],["/.?/","*","0.002"],["/.?/","*","0.02"],["counter","*","0.02"],["/wpsafe|wait/","*","0.001"],["timer","*","0.02"],["/.?/","*"],["timer","*"],["/.?/","*","0.001"],["tid","*","0.02"],["timeLeft","*","0.001"],["timer","*","0.001"],["counter","*","0.001"],["timer","1000","0.001"],["timer","1600","0.001"],["count","*","0.001"],["/countdown--|getElementById/","*","0.001"],["/counter|wait/","*","0.001"],["interval","*"],["sec--","*","0.001"],["","*","0.02"],["countdown"],["countdown","1000","0.001"],["countdown","1000"],["timer"],["generalTimeLeft","*","0.001"],["show_download_links"],["counter","*"],["countDown"],["downloadTimer"],["next","1000","0.001"],["","","0.3"],["time","","0"],["secs"],["_0x"],["timer.remove"],["downloadButton"],["timePassed"],["timeleft"],["counter--"],["(i-1)"],["skipOptions"],["countDown","1150","0.5"],["timercounter"],["count","*"],["#timer"],["temp"],["counter","","0.02"],["distance"],["counter"],["contador"],["display"],["second"],["updatePercentage","100","0.02"],["current()"],["l","","0"],["count"],["countdown","*","0.02"],["time","","0.02"],["wait"],["downloadToken"],["updateProgress","*"],["current-=1","*","0.001"],["_0x","*","0.001"],["counter","1000","0.001"],["scrollIncrement","*"],["","*","0.001"],["show","1000","0.001"],["saniye"],["","1000","0.001"],["invoke","1000"],["download","*","0.02"],["countdown","*"],["/count|verify|isCompleted/","","0.001"],["circle_animation"]];
const hostnamesMap = new Map([["wallpaperaccess.com",0],["123link.*",0],["platinmods.*",0],["al.ly",0],["bbf.lt",0],["cpmlink.net",0],["cut-urls.com",0],["eg4link.*",0],["idlelivelink.*",0],["igram.*",0],["iiv.pl",0],["ur.ly",0],["url.gem-flash.com",0],["zeiz.me",0],["1ink.cc",0],["lin-ks.*",0],["xberuang.*",0],["soft112.com",0],["short-url.link",0],["4download.net",0],["s.sseluxx.com",0],["onifile.com",0],["topflix.*",0],["coolmathgames.com",0],["link-to.net",0],["onle.co",0],["fstore.biz",0],["deltabit.co",0],["leechall.*",0],["sfile.mobi",0],["upfile.us",0],["game-kentang.blogspot.com",0],["shortgoo.blogspot.com",0],["bde4.*",0],["sfirmware.com",0],["mobilelegends.shop",0],["ockles.com",0],["urlpay.net",0],["underhentai.net",0],["suanoticia.online",0],["linkconfig.com",0],["lg-firmwares.com",0],["aylink.co",0],["gitizle.vip",0],["shtms.co",0],["cryptokinews.com",0],["cpmlink.pro",0],["speedynews.xyz",[0,77]],["infokeeda.xyz",0],["webzeni.com",0],["tutwuri.id",0],["khaddavi.net",0],["lokerwfh.net",0],["arkadium.com",0],["mysflink.blogspot.com",0],["runmods.com",0],["anomize.xyz",0],["bondibeachau.com",0],["konstantinova.net",0],["kangkimin.com",0],["iklandb.com",0],["thingiverse.com",0],["ufreegames.com",0],["bdlink.pw",0],["fairyanime.com",0],["lootlinks.*",0],["7misr4day.com",0],["sama-pro.com",0],["otomi-games.com",0],["curseforge.com",0],["mobitaak.com",0],["arhplyrics.in",0],["telenord.it",0],["diglink.blogspot.com",0],["vkprime.com",0],["i-polls.com",0],["yesdownloader.com",0],["tonanmedia.my.id",0],["skiplink.me",0],["yurasu.xyz",0],["isekaipalace.com",0],["mitedrive.com",0],["miteblog.com",0],["fullhd4k.com",0],["juegos.eleconomista.es",0],["filmizlehdfilm.com",0],["filmizletv.*",0],["fullfilmizle.cc",0],["gofilmizle.net",0],["easybib.com",0],["modcombo.com",0],["telepisodes.org",0],["novelgames.com",1],["3bmeteo.com",2],["deportealdia.live",3],["ouo.*",4],["indi-share.com",5],["premid.app",5],["cheatcloud.cc",5],["cheater.ninja",5],["cheatermad.com",5],["cheatsquad.gg",5],["freepdf-books.com",6],["themeslide.com",7],["thememypc.net",8],["rezence.com",[8,51]],["gawbne.com",8],["forex-trnd.com",8],["link.tl",9],["lnk.news",10],["lnk.parts",10],["fssquad.com",10],["easylinkref.com",10],["acortalo.*",10],["acortar.*",10],["megadescarga.net",10],["megadescargas.net",10],["gamelopte.com",11],["goto.com.np",12],["vrcmods.com",12],["consoleroms.com",12],["romspedia.com",12],["forexlap.com",13],["forexrw7.com",[13,43]],["fx-22.com",[13,43]],["gold-24.net",[13,43]],["icutlink.com",14],["android-apk.org",14],["zegtrends.com",15],["simsdom.com",16],["fansonlinehub.com",16],["hotmediahub.com",16],["terabox.fun",16],["teralink.me",16],["terashare.me",16],["teraearn.com",16],["fautsy.com",17],["coinlyhub.com",17],["i-bits.io",17],["claimbits.io",17],["filemoon.*",17],["legionjuegos.org",18],["legionpeliculas.org",18],["legionprogramas.org",18],["so1.asia",18],["dutchycorp.*",19],["gamearter.com",20],["bluemediafiles.*",21],["ayobelajarbareng.com",22],["semawur.com",22],["doofree88.com",23],["acdriftingpro.com",24],["shayarias.in",25],["jksb.in",25],["mazakisan.com",25],["grtjobs.in",25],["call-bomber.info",25],["kajernews.com",25],["vyaapaarguru.in",25],["link.djbassking.live",26],["tech5s.co",26],["game5s.com",26],["yalifin.xyz",26],["lrncook.xyz",26],["financenova.online",26],["utkarshonlinetest.com",26],["financewada.com",26],["fx-gd.net",26],["healthy4pepole.com",26],["hightrip.net",26],["to-travel.net",26],["tech24us.com",27],["freethemesy.com",27],["veganab.co",28],["camdigest.com",28],["nichapk.com",29],["easyworldbusiness.com",29],["riveh.com",29],["gyanitheme.com",30],["bookszone.in",31],["uptechnologys.com",32],["sevenjournals.com",32],["labgame.io",33],["overgal.com",34],["10short.*",35],["mamahawa.com",35],["lollty.pro",35],["postazap.com",35],["financeyogi.net",35],["finclub.in",35],["easywithcode.tech",35],["letest25.co",35],["truevpnlover.com",35],["financebolo.com",35],["rphost.in",35],["vedamdigi.tech",35],["cancelguider.online",35],["bigdata.rawlazy.si",36],["codesnse.com",36],["filmypoints.in",37],["flightsim.to",37],["freethailottery.live",38],["progfu.com",38],["currentrecruitment.com",39],["investorveda.com",39],["edukaroo.com",39],["advicefunda.com",39],["bestloanoffer.net",39],["techconnection.in",39],["hosttbuzz.com",40],["policiesreview.com",40],["travel.vebma.com",41],["cloud.majalahhewan.com",41],["crm.cekresi.me",41],["ai.tempatwisata.pro",41],["cinedesi.in",42],["thevouz.in",42],["tejtime24.com",42],["techishant.in",42],["whatgame.xyz",43],["mooonten.com",43],["msic.site",43],["rfiql.com",44],["gujjukhabar.in",44],["smartfeecalculator.com",44],["djxmaza.in",44],["thecubexguide.com",44],["jytechs.in",44],["aman-dn.blogspot.com",45],["ipalibrary.me",45],["hieunguyenphoto.com",45],["4khd.com",46],["fastt.gg",47],["pixsera.net",48],["imgair.net",48],["imgblaze.net",48],["imgfrost.net",48],["vestimage.site",48],["pixlev.*",48],["imgyer.store",48],["pixqbngg.shop",48],["pixqwet.shop",48],["pixmos.shop",48],["imgtgd.shop",48],["imgcsxx.shop",48],["imgqklw.shop",48],["pixqkhgrt.shop",48],["imgcssd.shop",48],["imguwjsd.sbs",48],["pictbbf.shop",48],["pixbryexa.sbs",48],["picbqqa.sbs",48],["pixbkghxa.sbs",48],["imgmgf.sbs",48],["picbcxvxa.sbs",48],["imguee.sbs",48],["imgmffmv.sbs",48],["imgbqb.sbs",48],["imgbyrev.sbs",48],["imgbncvnv.sbs",48],["pixtryab.shop",48],["imggune.shop",48],["pictryhab.shop",48],["pixbnab.shop",48],["imgbnwe.shop",48],["imgbbnhi.shop",48],["imgnbii.shop",48],["imghqqbg.shop",48],["imgyhq.shop",48],["pixnbrqwg.sbs",48],["pixnbrqw.sbs",48],["picmsh.sbs",48],["imgpke.sbs",48],["picuenr.sbs",48],["imgolemn.sbs",48],["imgoebn.sbs",48],["picnwqez.sbs",48],["imgjajhe.sbs",48],["pixjnwe.sbs",48],["pixkfjtrkf.shop",48],["pixkfkf.shop",48],["pixdfdjkkr.shop",48],["pixdfdj.shop",48],["picnft.shop",48],["pixrqqz.shop",48],["picngt.shop",48],["picjgfjet.shop",48],["picjbet.shop",48],["imgkkabm.shop",48],["imgxabm.shop",48],["imgthbm.shop",48],["imgmyqbm.shop",48],["imgwwqbm.shop",48],["imgjvmbbm.shop",48],["imgjbxzjv.shop",48],["imgjmgfgm.shop",48],["picxnkjkhdf.sbs",48],["imgxxbdf.sbs",48],["imgnngr.sbs",48],["imgjjtr.sbs",48],["imgqbbds.sbs",48],["imgbvdf.sbs",48],["imgqnnnebrf.sbs",48],["imgnnnvbrf.sbs",48],["cararegistrasi.com",48],["ipa-apps.me",48],["imslp.org",48],["libertycity.net",48],["arcade.buzzrtv.com",49],["arcade.dailygazette.com",49],["arcade.lemonde.fr",49],["arena.gamesforthebrain.com",49],["bestpuzzlesandgames.com",49],["cointiply.arkadiumarena.com",49],["gamelab.com",49],["games.abqjournal.com",49],["games.amny.com",49],["games.bellinghamherald.com",49],["games.besthealthmag.ca",49],["games.bnd.com",49],["games.boston.com",49],["games.bostonglobe.com",49],["games.bradenton.com",49],["games.centredaily.com",49],["games.charlotteobserver.com",49],["games.cnhinews.com",49],["games.crosswordgiant.com",49],["games.dailymail.co.uk",49],["games.dallasnews.com",49],["games.daytondailynews.com",49],["games.denverpost.com",49],["games.everythingzoomer.com",49],["games.fresnobee.com",49],["games.gameshownetwork.com",49],["games.get.tv",49],["games.greatergood.com",49],["games.heraldonline.com",49],["games.heraldsun.com",49],["games.idahostatesman.com",49],["games.insp.com",49],["games.islandpacket.com",49],["games.journal-news.com",49],["games.kansas.com",49],["games.kansascity.com",49],["games.kentucky.com",49],["games.lancasteronline.com",49],["games.ledger-enquirer.com",49],["games.macon.com",49],["games.mashable.com",49],["games.mercedsunstar.com",49],["games.metro.us",49],["games.metv.com",49],["games.miamiherald.com",49],["games.modbee.com",49],["games.moviestvnetwork.com",49],["games.myrtlebeachonline.com",49],["games.nationalreview.com",49],["games.newsobserver.com",49],["games.parade.com",49],["games.pressdemocrat.com",49],["games.puzzlebaron.com",49],["games.puzzler.com",49],["games.puzzles.ca",49],["games.qns.com",49],["games.readersdigest.ca",49],["games.sacbee.com",49],["games.sanluisobispo.com",49],["games.sixtyandme.com",49],["games.sltrib.com",49],["games.springfieldnewssun.com",49],["games.star-telegram.com",49],["games.startribune.com",49],["games.sunherald.com",49],["games.theadvocate.com",49],["games.thenewstribune.com",49],["games.theolympian.com",49],["games.theportugalnews.com",49],["games.thestar.com",49],["games.thestate.com",49],["games.tri-cityherald.com",49],["games.triviatoday.com",49],["games.usnews.com",49],["games.word.tips",49],["games.wordgenius.com",49],["games.wtop.com",49],["jeux.meteocity.com",49],["juegos.as.com",49],["juegos.elnuevoherald.com",49],["juegos.elpais.com",49],["philly.arkadiumarena.com",49],["play.dictionary.com",49],["puzzles.bestforpuzzles.com",49],["puzzles.centralmaine.com",49],["puzzles.crosswordsolver.org",49],["puzzles.independent.co.uk",49],["puzzles.nola.com",49],["puzzles.pressherald.com",49],["puzzles.standard.co.uk",49],["puzzles.sunjournal.com",49],["apkmb.com",50],["apkhihe.com",50],["aemenstore.com",51],["byboe.com",51],["cazzette.com",51],["dreamcheeky.com",51],["fidlarmusic.com",51],["hookeaudio.com",51],["jncojeans.com",51],["kiemlua.com",51],["kingsleynyc.com",51],["lucidcam.com",51],["nguyenvanbao.com",51],["nousdecor.com",51],["pennbookcenter.com",51],["publicananker.com",51],["restorbio.com",51],["staaker.com",51],["samapkstore.com",52],["5ggyan.com",52],["brotherfox91.shop",52],["currentcolorq2dv.shop",52],["customsfencei3.shop",52],["fencethoughgdrt.shop",52],["fencethroughout642.shop",52],["foxwent6ot.shop",52],["havingmovementu8x.shop",52],["homebasis4d.shop",52],["includingbreath5ku.shop",52],["ironwinter6m.shop",52],["leadmorning4ivn.shop",52],["linelocatemfsn.shop",52],["littlesound6c.shop",52],["mindmotion93y8.shop",52],["mightbadly4f.shop",52],["monkeynecktj4w.shop",52],["neighbormajorkex.shop",52],["nervousdoctor9bx.shop",52],["pantogether6jpi.shop",52],["quietlywheat23.shop",52],["saddletopg3tk.shop",52],["soldrubber5xrp.shop",52],["somehowrockyng.shop",52],["strangernervousql.shop",52],["superabbit.shop",52],["supportrightufd.shop",52],["studyinghuman6js.shop",52],["wholecommonrrvp.shop",52],["wintertold7nq.shop",52],["shortenbuddy.com",53],["jpopsingles.eu",53],["vanillatweaks.net",53],["new.lewd.ninja",54],["emulatorgames.net",55],["menjelajahi.com",56],["unityassetcollection.com",57],["rethmic.com",58],["romhustler.org",59],["filmyhitlink.xyz",60],["cinemakottaga.*",61],["allwpworld.com",62],["trzpro.com",63],["techhelpbd.com",63],["zedge.net",64],["send-anywhere.com",65],["upstore.net",66],["rincondelsazon.com",67],["tattoosbeauty.com",67],["disheye.com",68],["yifysub.net",69],["mp3juices.icu",70],["bingotingo.com",71],["redirect.dafontvn.com",72],["filessrc.com",73],["srcimdb.com",73],["droidmirror.com",73],["infokik.com",73],["arealgamer.org",73],["gamingbeasts.com",73],["uploadbeast.com",73],["descargatepelis.com",74],["edufileshare.com",75],["wowroms.com",76],["play.aidungeon.io",78],["whatsappmods.net",79],["crdroid.net",80],["rlxtech.tech",80],["privatemoviez.*",80],["sonixgvn.net",80],["adshnk.com",81],["blogmado.com",82],["pinloker.com",83],["sekilastekno.com",83],["web1s.asia",83],["fikper.com",84],["tralhasvarias.blogspot.com",85],["busuu.com",86],["newscon.org",87],["recipahi.com",88],["thestar.com",89],["obaianinho.com",90],["00m.in",91],["punkrust.net",92],["apkprime.org",93],["restegourmet.de",94],["getmodsapk.*",95],["5play.*",96],["tech.unblockedgames.world",97],["lewdzone.com",98]]);
const exceptionsMap = new Map([["go.skiplink.me",[0]],["encurtador.postazap.com",[35]]]);
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
