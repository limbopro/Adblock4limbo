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

const argsList = [[],["","1200","0"],["generalTimeLeft","*","0.02"],["stop()"],["clearInterval"],["myTimer","1500"],["countdown","2000"],["downloadTimer"],["","","0"],["counter","2000"],["","1800"],["yuidea-","*"],["timeLeft"],["time"],["time","2500"],["clearInterval","*"],["seconds"],["","","0.02"],["time.html","1000"],["inner"],["circle_animation"],["timer","1000","0.6"],["countdown"],["web_counter"],["video_counter"],["timeSec","*"],["/SplashScreen|BannerAd/"],["i--"],["","*","0"],["curAd"],["js-btn-skip","1000"],["timer","*"],["timer"],["gotolink"],["show_download_links"],["","800"],["counter","*"],["countDown"],["runDownload"],["","100","0"],["","","0.3"],["sec--"],["time","","0"],["counter"],["secs"],["download"],["_0x"],["timer.remove"],["downloadButton"],["timePassed"],["timeleft"],["counter--"],["(i-1)"],["skipOptions"],["countDown","1150","0.5"],["btn-success"],["timercounter"],["count","*"],["#timer"],["temp"],["sec"],["counter","","0.02"],["timePassed","1300"],["timer","1800"],["download_delay"],["countc"],["distance"],["count"],["contador"],["display"],["timer","*","0.02"],["second"],["timer","1500"],["updatePercentage","100","0.02"],["current()"],["l","","0"],["/verify_text|isCompleted/","*"],["countdown","*","0.02"],["time","","0.02"],["wait"],["downloadToken"],["updateProgress","*"],["current-=1"],["scrollIncrement","*"],["myInterval","*","0.02"],["atualizarCronometro","*","0.02"],["skipAdSeconds","","0.02"],["adv","*"]];

const hostnamesMap = new Map([["shrink-service.it",0],["mage.si",0],["kanqite.com",0],["al.ly",0],["bbf.lt",0],["cpmlink.net",0],["cut-urls.com",0],["iiv.pl",0],["shink.me",0],["ur.ly",0],["url.gem-flash.com",0],["zeiz.me",0],["1ink.cc",0],["azlink.xyz",0],["likn.xyz",0],["soft112.com",0],["short-url.link",0],["4download.net",0],["s.sseluxx.com",0],["onifile.com",0],["coolmathgames.com",0],["link-to.net",[0,22,23,24]],["telepisodes.org",0],["onle.co",0],["freeupload.info",0],["fstore.biz",0],["uploadfree.info",0],["deltabit.co",0],["puzzles.msn.com",0],["shon.xyz",0],["keisekaikuy.blogspot.com",0],["opensubtitles.org",0],["linkvertise.com",0],["sfile.mobi",0],["upfile.us",0],["game-kentang.blogspot.com",0],["shortgoo.blogspot.com",0],["indavideo.hu",0],["sfirmware.com",0],["claim4.fun",0],["mobilelegends.shop",0],["ockles.com",0],["urlpay.net",0],["underhentai.net",0],["customercareal.com",0],["faupto.com",0],["freelitecoin.vip",0],["suanoticia.online",0],["linkconfig.com",0],["lg-firmwares.com",0],["mysflink.blogspot.com",0],["runmods.com",0],["anomize.xyz",0],["bondibeachau.com",0],["konstantinova.net",0],["kangkimin.com",0],["iklandb.com",0],["onepiecex.xyz",0],["thingiverse.com",0],["ufreegames.com",0],["saungfirmware.id",0],["aylink.co",0],["gitizle.vip",0],["shtms.co",0],["kpopstan.com",0],["bdlink.pw",0],["fairyanime.com",0],["speedynews.xyz",[0,73]],["7misr4day.com",0],["sama-pro.com",0],["otomi-games.com",0],["curseforge.com",0],["mobitaak.com",0],["arhplyrics.in",0],["techmart4u.in",0],["telenord.it",0],["raky.in",0],["desiflixindia.com",0],["insurance.iptvsetupguide.com",0],["javguru.top",0],["diglink.blogspot.com",0],["vkprime.com",0],["i-polls.com",0],["freecoursesonline.me",0],["yesdownloader.com",0],["games.metv.com",0],["arkadium.com",0],["tonanmedia.my.id",0],["skiplink.me",0],["yurasu.xyz",0],["isekaipalace.com",0],["khaddavi.net",0],["jrtekno.com",0],["mitedrive.com",0],["miteblog.com",0],["games.dailymail.co.uk",0],["tophostingapp.com",0],["fullhd4k.com",0],["juegos.eleconomista.es",0],["newspadj.in",0],["wallpaperaccess.com",0],["deportealdia.live",1],["noticiasesports.live",1],["noweconomy.live",1],["puzzles.standard.co.uk",2],["puzzles.independent.co.uk",2],["puzzles.bestforpuzzles.com",2],["arkadiumarena.com",2],["games.charlotteobserver.com",2],["games.miamiherald.com",2],["games.startribune.com",2],["games.word.tips",2],["indi-share.com",4],["cheatcloud.cc",4],["cheater.ninja",4],["cheatermad.com",4],["cheatsquad.gg",4],["premid.app",4],["freepdf-books.com",5],["themeslide.com",6],["jpopsingles.eu",7],["shortenbuddy.com",7],["megadescarga.net",8],["megadescargas.net",8],["lnk.news",8],["lnk.parts",8],["forexlap.com",8],["forexmab.com",8],["forexwaw.club",8],["forex-articles.com",8],["fx4vip.com",8],["fssquad.com",8],["easylinkref.com",8],["thememypc.net",9],["sanoybonito.club",9],["dreamcheeky.com",[9,36]],["fidlarmusic.com",[9,36]],["publicananker.com",[9,36]],["rezence.com",[9,36]],["rodjulian.com",[9,36]],["mikl4forex.com",9],["gawbne.com",9],["forex-golds.com",9],["forex-trnd.com",[9,32]],["link.tl",10],["gamelopte.com",11],["goto.com.np",12],["vrcmods.com",12],["bitefaucet.com",12],["dramaworldhd.co",12],["edummm.xyz",12],["consoleroms.com",12],["romspedia.com",12],["shortlinks.tech",12],["icutlink.com",13],["android-apk.org",13],["zegtrends.com",14],["simsdom.com",15],["hotmediahub.com",15],["terabox.fun",15],["fautsy.com",16],["multifaucet.org",16],["coinlyhub.com",16],["i-bits.io",16],["claimbits.io",16],["mundotec.pro",16],["legionjuegos.org",17],["legionpeliculas.org",17],["legionprogramas.org",17],["so1.asia",17],["recipesdelite.com",19],["lewdzone.com",20],["elil.cc",21],["direct-link.net",[22,23,24]],["direkt-wissen.com",[22,23,24]],["py.md",22],["mohammedkhc.com",22],["ipalibrary.me",22],["howifx.com",25],["yogablogfit.com",25],["vocalley.com",25],["gamearter.com",26],["onlyhgames.com",27],["ayobelajarbareng.com",28],["semawur.com",28],["yoshare.net",28],["techmody.io",28],["ez4mods.com",28],["series-d.com",29],["doofree88.com",30],["mynewsmedia.co",31],["revadvert.com",31],["imgair.net",32],["imgblaze.net",32],["imgfrost.net",32],["pixsera.net",32],["vestimage.site",32],["imgwia.buzz",32],["imgkaka.xyz",32],["imgux.buzz",32],["imgewe.buzz",32],["imguebr.buzz",32],["imgbew.buzz",32],["imgxxxx.buzz",32],["imgeza.buzz",32],["imgzzzz.buzz",32],["imgxhfr.buzz",32],["imgqwt.buzz",32],["imgtwq.buzz",32],["imgbjryy.buzz",32],["imgjetr.buzz",32],["imgxelz.buzz",32],["imgytreq.buzz",32],["mrlzqoe.buzz",32],["utinwpqqui.buzz",32],["pyotinle.buzz",32],["velnibug.buzz",32],["optiye.buzz",32],["imgbeaw.buzz",32],["imgnfg.buzz",32],["imguqkt.buzz",32],["imgxhgh.buzz",32],["imgwelz.buzz",32],["pixnbvj.buzz",32],["imgxkhm.buzz",32],["imagepuitr.buzz",32],["imagent.buzz",32],["imgjtuq.buzz",32],["imgkixx.buzz",32],["im1.buzz",32],["imgkux.buzz",32],["imgpiluka.website",32],["imgxhtue.website",32],["imgpuloki.online",32],["imgmilu.store",32],["picliume.store",32],["pixmela.online",32],["imgpukrr.site",32],["picuekr.site",32],["pixotor.cfd",32],["imgmgh.site",32],["imgnefl.site",32],["imglekw.site",32],["imgsdi.site",32],["imgneor.store",32],["imgsdi.store",32],["imgpukxxr.site",32],["imgsdi.website",32],["imgsxo.site",32],["imgxto.store",32],["imgutkr.store",32],["imghhr.online",32],["imglaiw.store",32],["imgotw.store",32],["imgpai.online",32],["imgqyrew.store",32],["imgutkr.online",32],["imgvue.online",32],["imgxgf.store",32],["imgxqy.online",32],["imgbibam.online",32],["imgngf.online",32],["imgqaz.online",32],["imgulur.online",32],["imgurj.online",32],["imgurt.online",32],["imgwtz.online",32],["imgwxr.online",32],["imgwzr.online",32],["imgyre.online",32],["imgbak.store",32],["imgbek.store",32],["picler.store",32],["piclerx.store",32],["piclerz.store",32],["pixlev.store",32],["pixmax.store",32],["pixmex.store",32],["imgbaex.store",32],["imgbah.online",32],["imgbaie.online",32],["imgbango.store",32],["imgbier.store",32],["imgbimn.store",32],["imgbqw.store",32],["imgbuba.online",32],["imgbwe.store",32],["imgbxs.online",32],["imgcao.store",32],["imgnwe.online",32],["imgqge.store",32],["imgqxb.online",32],["imgteq.online",32],["imgtex.online",32],["imgtuta.online",32],["imgwqr.online",32],["imgwww.store",32],["imgxza.store",32],["imgezx.sbs",32],["imgbcxsb.store",32],["imgbcxs.store",32],["imgbake.cfd",32],["imgmffg.sbs",32],["imgmffgtr.sbs",32],["imgnbg.sbs",32],["imgngc.sbs",32],["imgnmh.cfd",32],["imgqte.sbs",32],["imguthes.sbs",32],["imgwag.cfd",32],["imgwang.cfd",32],["imgwety.sbs",32],["imgxuh.cfd",32],["imgxytw.cfd",32],["imgycgey.sbs",32],["imgyruy.cfd",32],["imgyusa.cfd",32],["imgyyqey.sbs",32],["imgyer.store",32],["imgxhs.store",32],["imgwekr.online",32],["imgwbfh.online",32],["imgwak.online",32],["imgutry.online",32],["imgutiyu.online",32],["imgutbbn.online",32],["imgubfd.online",32],["imgrei.online",32],["imgqec.online",32],["imgpaiou.online",32],["imgpaiki.online",32],["imgmjj.store",32],["imgfa.store",32],["imgbutrt.store",32],["imgbty.store",32],["imgbdl.store",32],["imgngh.sbs",32],["imgbbfg.pics",32],["imgjhrjjr.pics",32],["imgleko.pics",32],["imgluki.pics",32],["imgnffe.pics",32],["imgnnnf.pics",32],["imgrwqz.pics",32],["imgtweqz.pics",32],["imgxzgf.pics",32],["imgyyeryt.pics",32],["picbbc.one",32],["nightfallnews.com",32],["cararegistrasi.com",32],["ipa-apps.me",32],["theicongenerator.com",32],["zentum.club",32],["flightsim.to",32],["imslp.org",32],["michaelemad.com",32],["world-trips.net",32],["financeflix.in",32],["technoflip.in",32],["chooyomi.com",32],["freebrightsoft.com",32],["takez.co",32],["go.freetrx.fun",32],["picbbdr.one",32],["picbest.one",32],["picbhrt.one",32],["picnrrt.one",32],["picqqw.one",32],["picqr.one",32],["picqtwe.one",32],["apps2app.com",33],["apkmb.com",34],["apkhihe.com",34],["moalm-qudwa.blogspot.com",35],["aemenstore.com",36],["alogum.com",36],["anhdep24.com",36],["byboe.com",36],["cazzette.com",36],["hookeaudio.com",36],["jncojeans.com",36],["kiemlua.com",36],["kingsleynyc.com",36],["lucidcam.com",36],["nguyenvanbao.com",36],["nousdecor.com",36],["pennbookcenter.com",36],["restorbio.com",36],["staaker.com",36],["uebnews.online",36],["thegoneapp.com",36],["techus.website",36],["ptjobsz.xyz",36],["tech24us.com",36],["samapkstore.com",37],["5ggyan.com",37],["hipsonyc.com",37],["nulleb.com",38],["janusnotes.com",39],["emulatorgames.net",40],["doctor-groups.com",41],["luckydice.net",41],["menjelajahi.com",42],["thaitrieuvi.live",43],["forexeen.us",43],["health-and.me",43],["filessrc.com",43],["srcimdb.com",43],["droidmirror.com",43],["infokik.com",43],["itscybertech.com",43],["arealgamer.org",43],["unityassetcollection.com",44],["romadd.com",45],["rethmic.com",46],["romhustler.org",47],["filmyhitlink.xyz",48],["allwpworld.com",50],["forex-gold.net",50],["trzpro.com",51],["techhelpbd.com",51],["zedge.net",52],["send-anywhere.com",53],["upstore.net",54],["maxurlz.com",55],["rincondelsazon.com",56],["tattoosbeauty.com",56],["disheye.com",57],["computerpedia.in",57],["yifysub.net",58],["mp3juices.icu",59],["watchdoge.xyz",60],["bingotingo.com",61],["thizissam.in",61],["proviralhost.com",62],["urbharat.xyz",62],["techyreviewx.com",63],["jojo-themes.net",64],["privatemoviez.fun",65],["redirect.dafontvn.com",66],["cue-vana.com",67],["crdroid.net",67],["rlxtech.tech",67],["privatemoviez.best",67],["descargatepelis.com",68],["edufileshare.com",69],["wowroms.com",71],["mhma12.tech",72],["play.aidungeon.io",74],["whatsappmods.net",75],["hashhackers.com",76],["katdrive.net",76],["newsongs.co.in",76],["adshnk.com",77],["blogmado.com",78],["pinloker.com",79],["sekilastekno.com",79],["fikper.com",80],["tralhasvarias.blogspot.com",81],["busuu.com",82],["thestar.com",83],["playerflix.com",84],["obaianinho.com",85],["novelgames.com",86],["3bmeteo.com",87]]);

const entitiesMap = new Map([["123link",0],["platinmods",0],["eg4link",0],["idlelivelink",0],["igram",0],["lin-ks",0],["xberuang",0],["topflix",0],["leechall",0],["bde4",0],["lootlinks",0],["ouo",3],["acortalo",8],["acortar",8],["filemoon",16],["dutchycorp",18],["bluemediafiles",27],["pixlev",32],["cinemakottaga",49],["technicalatg",70]]);

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
