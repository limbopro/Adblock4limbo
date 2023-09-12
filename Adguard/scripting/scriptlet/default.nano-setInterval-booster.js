/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
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
const uBOL_nanoSetIntervalBooster = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [[],["","1200","0"],["generalTimeLeft","*","0.02"],["myTimer","1500"],["countdown","2000"],["downloadTimer"],["","","0"],["counter","2000"],["","1800"],["yuidea-","*"],["timeLeft"],["time"],["time","2500"],["clearInterval","*"],["seconds"],["","","0.02"],["time.html","1000"],["inner"],["circle_animation"],["timer","1000","0.6"],["countdown"],["web_counter"],["video_counter"],["timeSec","*"],["/SplashScreen|BannerAd/"],["i--"],["","*","0"],["curAd"],["js-btn-skip","1000"],["clearInterval"],["timer","*"],["timer"],["gotolink"],["show_download_links"],["","800"],["counter","*"],["countDown"],["runDownload"],["","100","0"],["timer","1500"],["","","0.3"],["sec--"],["#timer"],["timer","1100"],["time","","0"],["counter"],["secs"],["download"],["_0x"],["timer.remove"],["downloadButton"],["timePassed"],["timeleft"],["counter--"],["(i-1)"],["skipOptions"],["countDown","1150","0.5"],["btn-success"],["timercounter"],["count","*"],["temp"],["sec"],["counter","","0.02"],["timePassed","1300"],["timer","1800"],["download_delay"],["countc"],["distance"],["count"],["contador"],["display"],["timer","*","0.02"],["second"],["updatePercentage","100","0.02"],["current()"],["l","","0"],["/verify_text|isCompleted/","*"],["countdown","*","0.02"],["time","","0.02"],["wait"],["downloadToken"],["updateProgress","*"],["current-=1"],["scrollIncrement","*"],["myInterval","*","0.02"],["atualizarCronometro","*","0.02"],["skipAdSeconds","","0.02"]];

const hostnamesMap = new Map([["shrink-service.it",0],["mage.si",0],["kanqite.com",0],["al.ly",0],["bbf.lt",0],["cpmlink.net",0],["cut-urls.com",0],["iiv.pl",0],["shink.me",0],["ur.ly",0],["url.gem-flash.com",0],["zeiz.me",0],["1ink.cc",0],["azlink.xyz",0],["likn.xyz",0],["soft112.com",0],["short-url.link",0],["4download.net",0],["s.sseluxx.com",0],["onifile.com",0],["coolmathgames.com",0],["link-to.net",[0,20,21,22]],["telepisodes.org",0],["onle.co",0],["freeupload.info",0],["fstore.biz",0],["uploadfree.info",0],["deltabit.co",0],["puzzles.msn.com",0],["shon.xyz",0],["keisekaikuy.blogspot.com",0],["opensubtitles.org",0],["linkvertise.com",0],["sfile.mobi",0],["upfile.us",0],["game-kentang.blogspot.com",0],["shortgoo.blogspot.com",0],["indavideo.hu",0],["sfirmware.com",0],["claim4.fun",0],["mobilelegends.shop",0],["ockles.com",0],["urlpay.net",0],["underhentai.net",0],["customercareal.com",0],["faupto.com",0],["freelitecoin.vip",0],["suanoticia.online",0],["linkconfig.com",0],["lg-firmwares.com",0],["mysflink.blogspot.com",0],["runmods.com",0],["anomize.xyz",0],["bondibeachau.com",0],["konstantinova.net",0],["kangkimin.com",0],["iklandb.com",0],["onepiecex.xyz",0],["thingiverse.com",0],["ufreegames.com",0],["saungfirmware.id",0],["aylink.co",0],["gitizle.vip",0],["shtms.co",0],["kpopstan.com",0],["bdlink.pw",0],["fairyanime.com",0],["speedynews.xyz",[0,73]],["7misr4day.com",0],["sama-pro.com",0],["otomi-games.com",0],["curseforge.com",0],["mobitaak.com",0],["arhplyrics.in",0],["techmart4u.in",0],["telenord.it",0],["raky.in",0],["desiflixindia.com",0],["insurance.iptvsetupguide.com",0],["javguru.top",0],["diglink.blogspot.com",0],["vkprime.com",0],["i-polls.com",0],["freecoursesonline.me",0],["yesdownloader.com",0],["games.metv.com",0],["arkadium.com",0],["tonanmedia.my.id",0],["skiplink.me",0],["yurasu.xyz",0],["isekaipalace.com",0],["khaddavi.net",0],["jrtekno.com",0],["mitedrive.com",0],["miteblog.com",0],["games.dailymail.co.uk",0],["tophostingapp.com",0],["fullhd4k.com",0],["juegos.eleconomista.es",0],["newspadj.in",0],["wallpaperaccess.com",0],["deportealdia.live",1],["noticiasesports.live",1],["noweconomy.live",1],["puzzles.standard.co.uk",2],["puzzles.independent.co.uk",2],["puzzles.bestforpuzzles.com",2],["arkadiumarena.com",2],["games.charlotteobserver.com",2],["games.miamiherald.com",2],["games.startribune.com",2],["games.word.tips",2],["freepdf-books.com",3],["themeslide.com",4],["jpopsingles.eu",5],["shortenbuddy.com",5],["megadescarga.net",6],["megadescargas.net",6],["lnk.news",6],["lnk.parts",6],["forexlap.com",6],["forexmab.com",6],["forexwaw.club",6],["forex-articles.com",6],["fx4vip.com",6],["fssquad.com",6],["easylinkref.com",6],["thememypc.net",7],["sanoybonito.club",7],["dreamcheeky.com",[7,35]],["fidlarmusic.com",[7,35]],["publicananker.com",[7,35]],["rezence.com",[7,35]],["rodjulian.com",[7,35]],["mikl4forex.com",7],["gawbne.com",7],["forex-golds.com",7],["forex-trnd.com",[7,31]],["link.tl",8],["gamelopte.com",9],["goto.com.np",10],["vrcmods.com",10],["bitefaucet.com",10],["dramaworldhd.co",10],["edummm.xyz",10],["consoleroms.com",10],["romspedia.com",10],["shortlinks.tech",10],["icutlink.com",11],["android-apk.org",11],["zegtrends.com",12],["simsdom.com",13],["hotmediahub.com",13],["terabox.fun",13],["fautsy.com",14],["multifaucet.org",14],["coinlyhub.com",14],["i-bits.io",14],["claimbits.io",14],["dogeatm.com",14],["mundotec.pro",14],["legionjuegos.org",15],["legionpeliculas.org",15],["legionprogramas.org",15],["so1.asia",15],["recipesdelite.com",17],["lewdzone.com",18],["elil.cc",19],["direct-link.net",[20,21,22]],["direkt-wissen.com",[20,21,22]],["py.md",20],["mohammedkhc.com",20],["ipalibrary.me",20],["howifx.com",23],["yogablogfit.com",23],["vocalley.com",23],["gamearter.com",24],["onlyhgames.com",25],["ayobelajarbareng.com",26],["semawur.com",26],["yoshare.net",26],["techmody.io",26],["ez4mods.com",26],["series-d.com",27],["doofree88.com",28],["cheatcloud.cc",29],["cheater.ninja",29],["cheatermad.com",29],["cheatsquad.gg",29],["premid.app",29],["mynewsmedia.co",30],["revadvert.com",30],["imgair.net",31],["imgblaze.net",31],["imgfrost.net",31],["pixsera.net",31],["vestimage.site",31],["imgwia.buzz",31],["imgkaka.xyz",31],["imgux.buzz",31],["imgewe.buzz",31],["imguebr.buzz",31],["imgbew.buzz",31],["imgxxxx.buzz",31],["imgeza.buzz",31],["imgzzzz.buzz",31],["imgxhfr.buzz",31],["imgqwt.buzz",31],["imgtwq.buzz",31],["imgbjryy.buzz",31],["imgjetr.buzz",31],["imgxelz.buzz",31],["imgytreq.buzz",31],["mrlzqoe.buzz",31],["utinwpqqui.buzz",31],["pyotinle.buzz",31],["velnibug.buzz",31],["optiye.buzz",31],["imgbeaw.buzz",31],["imgnfg.buzz",31],["imguqkt.buzz",31],["imgxhgh.buzz",31],["imgwelz.buzz",31],["pixnbvj.buzz",31],["imgxkhm.buzz",31],["imagepuitr.buzz",31],["imagent.buzz",31],["imgjtuq.buzz",31],["imgkixx.buzz",31],["im1.buzz",31],["imgkux.buzz",31],["imgpiluka.website",31],["imgxhtue.website",31],["imgpuloki.online",31],["imgmilu.store",31],["picliume.store",31],["pixmela.online",31],["imgpukrr.site",31],["picuekr.site",31],["pixotor.cfd",31],["imgmgh.site",31],["imgnefl.site",31],["imglekw.site",31],["imgsdi.site",31],["imgneor.store",31],["imgsdi.store",31],["imgpukxxr.site",31],["imgsdi.website",31],["imgsxo.site",31],["imgxto.store",31],["imgutkr.store",31],["imghhr.online",31],["imglaiw.store",31],["imgotw.store",31],["imgpai.online",31],["imgqyrew.store",31],["imgutkr.online",31],["imgvue.online",31],["imgxgf.store",31],["imgxqy.online",31],["imgbibam.online",31],["imgngf.online",31],["imgqaz.online",31],["imgulur.online",31],["imgurj.online",31],["imgurt.online",31],["imgwtz.online",31],["imgwxr.online",31],["imgwzr.online",31],["imgyre.online",31],["imgbak.store",31],["imgbek.store",31],["picler.store",31],["piclerx.store",31],["piclerz.store",31],["pixlev.store",31],["pixmax.store",31],["pixmex.store",31],["imgbaex.store",31],["imgbah.online",31],["imgbaie.online",31],["imgbango.store",31],["imgbier.store",31],["imgbimn.store",31],["imgbqw.store",31],["imgbuba.online",31],["imgbwe.store",31],["imgbxs.online",31],["imgcao.store",31],["imgnwe.online",31],["imgqge.store",31],["imgqxb.online",31],["imgteq.online",31],["imgtex.online",31],["imgtuta.online",31],["imgwqr.online",31],["imgwww.store",31],["imgxza.store",31],["imgezx.sbs",31],["imgbcxsb.store",31],["imgbcxs.store",31],["imgbake.cfd",31],["imgmffg.sbs",31],["imgmffgtr.sbs",31],["imgnbg.sbs",31],["imgngc.sbs",31],["imgnmh.cfd",31],["imgqte.sbs",31],["imguthes.sbs",31],["imgwag.cfd",31],["imgwang.cfd",31],["imgwety.sbs",31],["imgxuh.cfd",31],["imgxytw.cfd",31],["imgycgey.sbs",31],["imgyruy.cfd",31],["imgyusa.cfd",31],["imgyyqey.sbs",31],["imgyer.store",31],["imgxhs.store",31],["imgwekr.online",31],["imgwbfh.online",31],["imgwak.online",31],["imgutry.online",31],["nightfallnews.com",31],["cararegistrasi.com",31],["ipa-apps.me",31],["theicongenerator.com",31],["zentum.club",31],["flightsim.to",31],["imslp.org",31],["michaelemad.com",31],["world-trips.net",31],["financeflix.in",31],["technoflip.in",31],["chooyomi.com",31],["freebrightsoft.com",31],["takez.co",31],["go.freetrx.fun",31],["imgutiyu.online",31],["imgutbbn.online",31],["imgubfd.online",31],["imgrei.online",31],["imgqec.online",31],["imgpaiou.online",31],["imgpaiki.online",31],["imgmjj.store",31],["imgfa.store",31],["imgbutrt.store",31],["imgbty.store",31],["imgbdl.store",31],["imgngh.sbs",31],["imgbbfg.pics",31],["imgjhrjjr.pics",31],["imgleko.pics",31],["imgluki.pics",31],["imgnffe.pics",31],["imgnnnf.pics",31],["imgrwqz.pics",31],["imgtweqz.pics",31],["imgxzgf.pics",31],["imgyyeryt.pics",31],["apps2app.com",32],["apkmb.com",33],["apkhihe.com",33],["moalm-qudwa.blogspot.com",34],["aemenstore.com",35],["alogum.com",35],["anhdep24.com",35],["byboe.com",35],["cazzette.com",35],["hookeaudio.com",35],["jncojeans.com",35],["kiemlua.com",35],["kingsleynyc.com",35],["lucidcam.com",35],["nguyenvanbao.com",35],["nousdecor.com",35],["pennbookcenter.com",35],["restorbio.com",35],["staaker.com",35],["uebnews.online",35],["thegoneapp.com",35],["techus.website",35],["ptjobsz.xyz",35],["tech24us.com",35],["samapkstore.com",36],["5ggyan.com",36],["hipsonyc.com",36],["nulleb.com",37],["janusnotes.com",38],["absolutesmmpanel.com",39],["myhiddentech.com",39],["mhma12.tech",39],["emulatorgames.net",40],["doctor-groups.com",41],["luckydice.net",41],["crypto-faucet.xyz",41],["cashearn.cc",42],["yifysub.net",42],["ohyeah1080.site",43],["menjelajahi.com",44],["thaitrieuvi.live",45],["forexeen.us",45],["health-and.me",45],["filessrc.com",45],["srcimdb.com",45],["droidmirror.com",45],["infokik.com",45],["itscybertech.com",45],["arealgamer.org",45],["unityassetcollection.com",46],["romadd.com",47],["rethmic.com",48],["romhustler.org",49],["filmyhitlink.xyz",50],["allwpworld.com",52],["forex-gold.net",52],["trzpro.com",53],["techhelpbd.com",53],["zedge.net",54],["send-anywhere.com",55],["upstore.net",56],["maxurlz.com",57],["rincondelsazon.com",58],["tattoosbeauty.com",58],["disheye.com",59],["computerpedia.in",59],["mp3juices.icu",60],["watchdoge.xyz",61],["bingotingo.com",62],["thizissam.in",62],["proviralhost.com",63],["urbharat.xyz",63],["techyreviewx.com",64],["jojo-themes.net",65],["privatemoviez.fun",66],["redirect.dafontvn.com",67],["cue-vana.com",68],["crdroid.net",68],["rlxtech.tech",68],["privatemoviez.best",68],["descargatepelis.com",69],["edufileshare.com",70],["wowroms.com",72],["play.aidungeon.io",74],["whatsappmods.net",75],["hashhackers.com",76],["katdrive.net",76],["newsongs.co.in",76],["adshnk.com",77],["blogmado.com",78],["pinloker.com",79],["sekilastekno.com",79],["fikper.com",80],["tralhasvarias.blogspot.com",81],["busuu.com",82],["thestar.com",83],["playerflix.com",84],["obaianinho.com",85],["novelgames.com",86]]);

const entitiesMap = new Map([["123link",0],["platinmods",0],["eg4link",0],["idlelivelink",0],["igram",0],["lin-ks",0],["xberuang",0],["topflix",0],["leechall",0],["bde4",0],["lootlinks",0],["acortalo",6],["acortar",6],["filemoon",14],["dutchycorp",16],["bluemediafiles",25],["pixlev",31],["cinemakottaga",51],["technicalatg",71]]);

const exceptionsMap = new Map([["go.skiplink.me",[0]]]);

/******************************************************************************/

function nanoSetIntervalBooster(
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
        ? Math.min(Math.max(boost, 0.02), 50)
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
        'Error': self.Error,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'jsonParse': self.JSON.parse.bind(self.JSON),
        'jsonStringify': self.JSON.stringify.bind(self.JSON),
        'log': console.log.bind(console),
        uboLog(...args) {
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
            }
            const expect = (options.canNegate === true && pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    pattern,
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            return {
                pattern,
                re: new this.RegExp(pattern.replace(
                    /[.*+?^${}()|[\]\\]/g, '\\$&'),
                    options.flags
                ),
                expect,
            };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            return this.RegExp_test.call(details.re, haystack) === details.expect;
        },
        patternToRegex(pattern, flags = undefined) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
            }
            try {
                return new RegExp(match[1], match[2] || flags);
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
            return Object.fromEntries(entries);
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
    try { nanoSetIntervalBooster(...argsList[i]); }
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

// Not Firefox
if ( typeof wrappedJSObject !== 'object' ) {
    return uBOL_nanoSetIntervalBooster();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_nanoSetIntervalBooster = cloneInto([
            [ '(', uBOL_nanoSetIntervalBooster.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_nanoSetIntervalBooster);
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
    delete page.uBOL_nanoSetIntervalBooster;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
