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
const argsList = [[],["skipAdSeconds","","0.02"],["adv","*"],["","1200","0"],["stop()"],["clearInterval"],["myTimer","1500"],["countdown","2000"],["counter","2000"],["","1800"],["","","0"],["yuidea-","*"],["timeLeft"],["","","0.001"],["time"],["time","2500"],["clearInterval","*"],["seconds"],["","","0.02"],["time.html","1000"],["/SplashScreen|BannerAd/"],["i--"],["","*","0"],["js-btn-skip","1000"],["countdown","*","0.001"],["/.?/","*","0.002"],["/.?/","*","0.02"],["counter","*","0.02"],["/wpsafe|wait/","*","0.001"],["timer","*","0.02"],["timer","*"],["/.?/","*","0.001"],["tid","*","0.02"],["timeLeft","*","0.001"],["timer","*","0.001"],["counter","*","0.001"],["timer","1000","0.001"],["timer","1600","0.001"],["count","*","0.001"],["/countdown--|getElementById/","*","0.001"],["/counter|wait/","*","0.001"],["interval","*"],["sec--","*","0.001"],["","*","0.02"],["countdown"],["countdown","1000"],["timer"],["generalTimeLeft","*","0.001"],["show_download_links"],["counter","*"],["countDown"],["downloadTimer"],["next","1000","0.001"],["","","0.3"],["time","","0"],["secs"],["_0x"],["timer.remove"],["downloadButton"],["timePassed"],["timeleft"],["counter--"],["(i-1)"],["skipOptions"],["countDown","1150","0.5"],["timercounter"],["count","*"],["#timer"],["temp"],["counter","","0.02"],["distance"],["counter"],["contador"],["display"],["second"],["timer","1500"],["updatePercentage","100","0.02"],["current()"],["l","","0"],["count"],["countdown","*","0.02"],["time","","0.02"],["wait"],["downloadToken"],["updateProgress","*"],["current-=1","*","0.001"],["_0x","*","0.001"],["counter","1000","0.001"],["scrollIncrement","*"],["","*","0.001"],["saniye"],["","1000","0.001"],["invoke","1000"],["download","*","0.02"],["countdown","*"],["/count|verify|isCompleted/","","0.001"],["circle_animation"]];
const hostnamesMap = new Map([["wallpaperaccess.com",0],["123link.*",0],["platinmods.*",0],["al.ly",0],["bbf.lt",0],["cpmlink.net",0],["cut-urls.com",0],["eg4link.*",0],["idlelivelink.*",0],["igram.*",0],["iiv.pl",0],["ur.ly",0],["url.gem-flash.com",0],["zeiz.me",0],["1ink.cc",0],["lin-ks.*",0],["xberuang.*",0],["soft112.com",0],["short-url.link",0],["4download.net",0],["s.sseluxx.com",0],["onifile.com",0],["topflix.*",0],["coolmathgames.com",0],["link-to.net",0],["onle.co",0],["fstore.biz",0],["deltabit.co",0],["leechall.*",0],["sfile.mobi",0],["upfile.us",0],["game-kentang.blogspot.com",0],["shortgoo.blogspot.com",0],["bde4.*",0],["sfirmware.com",0],["mobilelegends.shop",0],["ockles.com",0],["urlpay.net",0],["underhentai.net",0],["suanoticia.online",0],["linkconfig.com",0],["lg-firmwares.com",0],["aylink.co",0],["gitizle.vip",0],["shtms.co",0],["cryptokinews.com",0],["cpmlink.pro",0],["speedynews.xyz",[0,76]],["infokeeda.xyz",0],["webzeni.com",0],["tutwuri.id",0],["khaddavi.net",0],["lokerwfh.net",0],["arkadium.com",0],["mysflink.blogspot.com",0],["runmods.com",0],["anomize.xyz",0],["bondibeachau.com",0],["konstantinova.net",0],["kangkimin.com",0],["iklandb.com",0],["thingiverse.com",0],["ufreegames.com",0],["bdlink.pw",0],["fairyanime.com",0],["lootlinks.*",0],["7misr4day.com",0],["sama-pro.com",0],["otomi-games.com",0],["curseforge.com",0],["mobitaak.com",0],["arhplyrics.in",0],["telenord.it",0],["diglink.blogspot.com",0],["vkprime.com",0],["i-polls.com",0],["yesdownloader.com",0],["tonanmedia.my.id",0],["skiplink.me",0],["yurasu.xyz",0],["isekaipalace.com",0],["mitedrive.com",0],["miteblog.com",0],["fullhd4k.com",0],["juegos.eleconomista.es",0],["filmizlehdfilm.com",0],["filmizletv.*",0],["fullfilmizle.cc",0],["gofilmizle.net",0],["easybib.com",0],["modcombo.com",0],["telepisodes.org",0],["novelgames.com",1],["3bmeteo.com",2],["deportealdia.live",3],["ouo.*",4],["indi-share.com",5],["premid.app",5],["cheatcloud.cc",5],["cheater.ninja",5],["cheatermad.com",5],["cheatsquad.gg",5],["freepdf-books.com",6],["themeslide.com",7],["thememypc.net",8],["rezence.com",[8,49]],["gawbne.com",8],["forex-trnd.com",8],["link.tl",9],["lnk.news",10],["lnk.parts",10],["fssquad.com",10],["easylinkref.com",10],["acortalo.*",10],["acortar.*",10],["megadescarga.net",10],["megadescargas.net",10],["gamelopte.com",11],["goto.com.np",12],["vrcmods.com",12],["consoleroms.com",12],["romspedia.com",12],["forexlap.com",13],["forexrw7.com",[13,42]],["fx-22.com",[13,42]],["gold-24.net",[13,42]],["icutlink.com",14],["android-apk.org",14],["zegtrends.com",15],["simsdom.com",16],["fansonlinehub.com",16],["hotmediahub.com",16],["terabox.fun",16],["teralink.me",16],["terashare.me",16],["teraearn.com",16],["fautsy.com",17],["coinlyhub.com",17],["i-bits.io",17],["claimbits.io",17],["filemoon.*",17],["legionjuegos.org",18],["legionpeliculas.org",18],["legionprogramas.org",18],["so1.asia",18],["dutchycorp.*",19],["gamearter.com",20],["bluemediafiles.*",21],["ayobelajarbareng.com",22],["semawur.com",22],["doofree88.com",23],["acdriftingpro.com",24],["shayarias.in",25],["jksb.in",25],["mazakisan.com",25],["grtjobs.in",25],["call-bomber.info",25],["kajernews.com",25],["vyaapaarguru.in",25],["link.djbassking.live",26],["tech5s.co",26],["game5s.com",26],["yalifin.xyz",26],["lrncook.xyz",26],["financenova.online",26],["utkarshonlinetest.com",26],["financewada.com",26],["acetack.com",26],["androidquest.com",26],["apklox.com",26],["chhaprawap.in",26],["gujarativyakaran.com",26],["kashmirstudentsinformation.in",26],["kisantime.com",26],["shetkaritoday.in",26],["pastescript.com",26],["trimorspacks.com",26],["updrop.link",26],["fx-gd.net",26],["healthy4pepole.com",26],["hightrip.net",26],["to-travel.net",26],["tech24us.com",27],["freethemesy.com",27],["veganab.co",28],["camdigest.com",28],["nichapk.com",29],["easyworldbusiness.com",29],["riveh.com",29],["bookszone.in",30],["uptechnologys.com",31],["sevenjournals.com",31],["labgame.io",32],["overgal.com",33],["10short.*",34],["mamahawa.com",34],["lollty.pro",34],["postazap.com",34],["financeyogi.net",34],["finclub.in",34],["easywithcode.tech",34],["letest25.co",34],["truevpnlover.com",34],["financebolo.com",34],["rphost.in",34],["vedamdigi.tech",34],["cancelguider.online",34],["bigdata.rawlazy.si",35],["codesnse.com",35],["filmypoints.in",36],["flightsim.to",36],["freethailottery.live",37],["progfu.com",37],["currentrecruitment.com",38],["investorveda.com",38],["edukaroo.com",38],["advicefunda.com",38],["bestloanoffer.net",38],["techconnection.in",38],["hosttbuzz.com",39],["policiesreview.com",39],["travel.vebma.com",40],["cloud.majalahhewan.com",40],["crm.cekresi.me",40],["ai.tempatwisata.pro",40],["cinedesi.in",41],["thevouz.in",41],["tejtime24.com",41],["techishant.in",41],["whatgame.xyz",42],["mooonten.com",42],["msic.site",42],["rfiql.com",43],["gujjukhabar.in",43],["smartfeecalculator.com",43],["djxmaza.in",43],["thecubexguide.com",43],["jytechs.in",43],["aman-dn.blogspot.com",44],["ipalibrary.me",44],["hieunguyenphoto.com",44],["fastt.gg",45],["pixsera.net",46],["imgair.net",46],["imgblaze.net",46],["imgfrost.net",46],["vestimage.site",46],["pixlev.*",46],["imgyer.store",46],["pixqbngg.shop",46],["pixqwet.shop",46],["pixmos.shop",46],["imgtgd.shop",46],["imgcsxx.shop",46],["imgqklw.shop",46],["pixqkhgrt.shop",46],["imgcssd.shop",46],["imguwjsd.sbs",46],["pictbbf.shop",46],["pixbryexa.sbs",46],["picbqqa.sbs",46],["pixbkghxa.sbs",46],["imgmgf.sbs",46],["picbcxvxa.sbs",46],["imguee.sbs",46],["imgmffmv.sbs",46],["imgbqb.sbs",46],["imgbyrev.sbs",46],["imgbncvnv.sbs",46],["pixtryab.shop",46],["imggune.shop",46],["pictryhab.shop",46],["pixbnab.shop",46],["imgbnwe.shop",46],["imgbbnhi.shop",46],["imgnbii.shop",46],["imghqqbg.shop",46],["imgyhq.shop",46],["pixnbrqwg.sbs",46],["pixnbrqw.sbs",46],["picmsh.sbs",46],["imgpke.sbs",46],["picuenr.sbs",46],["imgolemn.sbs",46],["imgoebn.sbs",46],["picnwqez.sbs",46],["imgjajhe.sbs",46],["pixjnwe.sbs",46],["pixkfjtrkf.shop",46],["pixkfkf.shop",46],["pixdfdjkkr.shop",46],["pixdfdj.shop",46],["picnft.shop",46],["pixrqqz.shop",46],["picngt.shop",46],["picjgfjet.shop",46],["picjbet.shop",46],["imgkkabm.shop",46],["imgxabm.shop",46],["imgthbm.shop",46],["imgmyqbm.shop",46],["imgwwqbm.shop",46],["imgjvmbbm.shop",46],["imgjbxzjv.shop",46],["imgjmgfgm.shop",46],["picxnkjkhdf.sbs",46],["imgxxbdf.sbs",46],["imgnngr.sbs",46],["imgjjtr.sbs",46],["imgqbbds.sbs",46],["imgbvdf.sbs",46],["imgqnnnebrf.sbs",46],["imgnnnvbrf.sbs",46],["cararegistrasi.com",46],["ipa-apps.me",46],["imslp.org",46],["libertycity.net",46],["arcade.buzzrtv.com",47],["arcade.dailygazette.com",47],["arcade.lemonde.fr",47],["arena.gamesforthebrain.com",47],["bestpuzzlesandgames.com",47],["cointiply.arkadiumarena.com",47],["gamelab.com",47],["games.abqjournal.com",47],["games.amny.com",47],["games.bellinghamherald.com",47],["games.besthealthmag.ca",47],["games.bnd.com",47],["games.boston.com",47],["games.bostonglobe.com",47],["games.bradenton.com",47],["games.centredaily.com",47],["games.charlotteobserver.com",47],["games.cnhinews.com",47],["games.crosswordgiant.com",47],["games.dailymail.co.uk",47],["games.dallasnews.com",47],["games.daytondailynews.com",47],["games.denverpost.com",47],["games.everythingzoomer.com",47],["games.fresnobee.com",47],["games.gameshownetwork.com",47],["games.get.tv",47],["games.greatergood.com",47],["games.heraldonline.com",47],["games.heraldsun.com",47],["games.idahostatesman.com",47],["games.insp.com",47],["games.islandpacket.com",47],["games.journal-news.com",47],["games.kansas.com",47],["games.kansascity.com",47],["games.kentucky.com",47],["games.lancasteronline.com",47],["games.ledger-enquirer.com",47],["games.macon.com",47],["games.mashable.com",47],["games.mercedsunstar.com",47],["games.metro.us",47],["games.metv.com",47],["games.miamiherald.com",47],["games.modbee.com",47],["games.moviestvnetwork.com",47],["games.myrtlebeachonline.com",47],["games.nationalreview.com",47],["games.newsobserver.com",47],["games.parade.com",47],["games.pressdemocrat.com",47],["games.puzzlebaron.com",47],["games.puzzler.com",47],["games.puzzles.ca",47],["games.qns.com",47],["games.readersdigest.ca",47],["games.sacbee.com",47],["games.sanluisobispo.com",47],["games.sixtyandme.com",47],["games.sltrib.com",47],["games.springfieldnewssun.com",47],["games.star-telegram.com",47],["games.startribune.com",47],["games.sunherald.com",47],["games.theadvocate.com",47],["games.thenewstribune.com",47],["games.theolympian.com",47],["games.theportugalnews.com",47],["games.thestar.com",47],["games.thestate.com",47],["games.tri-cityherald.com",47],["games.triviatoday.com",47],["games.usnews.com",47],["games.word.tips",47],["games.wordgenius.com",47],["games.wtop.com",47],["jeux.meteocity.com",47],["juegos.as.com",47],["juegos.elnuevoherald.com",47],["juegos.elpais.com",47],["philly.arkadiumarena.com",47],["play.dictionary.com",47],["puzzles.bestforpuzzles.com",47],["puzzles.centralmaine.com",47],["puzzles.crosswordsolver.org",47],["puzzles.independent.co.uk",47],["puzzles.nola.com",47],["puzzles.pressherald.com",47],["puzzles.standard.co.uk",47],["puzzles.sunjournal.com",47],["apkmb.com",48],["apkhihe.com",48],["aemenstore.com",49],["byboe.com",49],["cazzette.com",49],["dreamcheeky.com",49],["fidlarmusic.com",49],["hookeaudio.com",49],["jncojeans.com",49],["kiemlua.com",49],["kingsleynyc.com",49],["lucidcam.com",49],["nguyenvanbao.com",49],["nousdecor.com",49],["pennbookcenter.com",49],["publicananker.com",49],["restorbio.com",49],["staaker.com",49],["samapkstore.com",50],["5ggyan.com",50],["brotherfox91.shop",50],["currentcolorq2dv.shop",50],["customsfencei3.shop",50],["fencethoughgdrt.shop",50],["fencethroughout642.shop",50],["foxwent6ot.shop",50],["havingmovementu8x.shop",50],["homebasis4d.shop",50],["includingbreath5ku.shop",50],["ironwinter6m.shop",50],["leadmorning4ivn.shop",50],["linelocatemfsn.shop",50],["littlesound6c.shop",50],["mindmotion93y8.shop",50],["mightbadly4f.shop",50],["monkeynecktj4w.shop",50],["neighbormajorkex.shop",50],["nervousdoctor9bx.shop",50],["pantogether6jpi.shop",50],["quietlywheat23.shop",50],["saddletopg3tk.shop",50],["soldrubber5xrp.shop",50],["somehowrockyng.shop",50],["strangernervousql.shop",50],["superabbit.shop",50],["supportrightufd.shop",50],["studyinghuman6js.shop",50],["wholecommonrrvp.shop",50],["wintertold7nq.shop",50],["shortenbuddy.com",51],["jpopsingles.eu",51],["vanillatweaks.net",51],["new.lewd.ninja",52],["emulatorgames.net",53],["menjelajahi.com",54],["unityassetcollection.com",55],["rethmic.com",56],["romhustler.org",57],["filmyhitlink.xyz",58],["cinemakottaga.*",59],["allwpworld.com",60],["trzpro.com",61],["techhelpbd.com",61],["zedge.net",62],["send-anywhere.com",63],["upstore.net",64],["rincondelsazon.com",65],["tattoosbeauty.com",65],["disheye.com",66],["yifysub.net",67],["mp3juices.icu",68],["bingotingo.com",69],["thizissam.in",69],["redirect.dafontvn.com",70],["filessrc.com",71],["srcimdb.com",71],["droidmirror.com",71],["infokik.com",71],["arealgamer.org",71],["gamingbeasts.com",71],["uploadbeast.com",71],["descargatepelis.com",72],["edufileshare.com",73],["wowroms.com",74],["mhma12.tech",75],["play.aidungeon.io",77],["whatsappmods.net",78],["crdroid.net",79],["rlxtech.tech",79],["privatemoviez.*",79],["sonixgvn.net",79],["adshnk.com",80],["blogmado.com",81],["pinloker.com",82],["sekilastekno.com",82],["web1s.asia",82],["fikper.com",83],["tralhasvarias.blogspot.com",84],["busuu.com",85],["newscon.org",86],["recipahi.com",87],["thestar.com",88],["obaianinho.com",89],["punkrust.net",90],["apkprime.org",91],["restegourmet.de",92],["getmodsapk.*",93],["5play.*",94],["tech.unblockedgames.world",95],["lewdzone.com",96]]);
const exceptionsMap = new Map([["go.skiplink.me",[0]],["encurtador.postazap.com",[34]]]);
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
