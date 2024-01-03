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
const uBOL_abortOnPropertyWrite = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["SZAdBlockDetection"],["_sp_"],["yafaIt"],["adblockActive"],["Fingerprint2"],["popUrl"],["checkRealLoad"],["Fingerprent2"],["adcashMacros"],["popupAdCall"],["showAdBlockerOverlay"],["AdBlockDetectorWorkaround"],["open"],["openLity"],["ad_abblock_ad"],["cticodes"],["imgadbpops"],["__aaZoneid"],["IS_ADBLOCK"],["__NA"],["ads_priv"],["ab_detected"],["t4PP"],["sc_adv_out"],["pURL"],["__htapop"],["atOptions"],["popzone"],["encodeURIComponent"],["stagedPopUnder"],["closeMyAd"],["smrtSP"],["tiPopAction"],["ExoLoader"],["decodeURIComponent"],["afStorage"],["u_cfg"],["adv_pre_duration"],["adv_post_duration"],["hidekeep"],["ShowAdbblock"],["lifeOnwer"],["smrtSB"],["EPeventFire"],["adBlockDetected"],["segs_pop"],["$getWin"],["xhr.prototype.realSend"],["popUpUrl"],["btoa"],["detectAdblk"],["adsHeight"],["adsBlocked"],["SubmitDownload1"],["getIfc"],["adBlockRunning"],["mz_str"],["I833"],["Aloader"],["bindall"],["SpecialUp"],["KillAdBlock"],["checkAdBlocker"],["deployads"],["close_screen"],["mockingbird"],["checkAds"],["XF"],["check"],["tabUnder"],["decodeURI"],["downloadJSAtOnload"],["ReactAds"],["phtData"],["killAdBlock"],["adBlocker"],["Ha"],["spot"],["arrayAd2"],["importFAB"],["block_detected"],["document.getElementsByClassName"],["ABD"],["mfbDetect"],["ab_cl"],["app_vars.force_disable_adblock"],["ai_adb_overlay"],["showMsgAb"],["wutimeBotPattern"],["popup_ads"],["adblockerpopup"],["adblockCheck"],["cancelAdBlocker"],["ExoSupport"],["mobilePop"],["base64_decode"],["mdp_deblocker"],["afScript"],["installBtnvar"],["showModal"],["console.log"],["Script_Manager"],["daCheckManager"],["backgroundBanner"],["displayCache"],["DoodPop"],["AdBDetected"],["confCapcha"],["AdbModel"],["tmnramp"],["onpopstate"],["__C"],["HTMLElement.prototype.insertAdjacentHTML"],["gothamBatAdblock"],["ai_front"],["puShown"],["ospen"],["b2a"],["_chjeuHenj"],["bullads"],["detector_launch"],["adBlocked"],["document.ready"],["p$00a"],["c325"],["akadb"],["checkAdsBlocked"],["BetterJsPop"],["DOMAssistant"],["rotator"],["AaDetector"],["NREUM"],["pbjs"],["detectAdblocker"],["auto_safelink"],["counter"],["adBlckActive"],["popName"],["showADBOverlay"],["checkAdsStatus"],["protection"],["HTMLScriptElement.prototype.onerror"],["blockedAds"],["canRunAds"],["STICKY_CANARY"],["ADMITAD"],["CoinNebula"]];

const hostnamesMap = new Map([["sueddeutsche.de",0],["autobytel.com",1],["cesoirtv.com",1],["gamesradar.com",1],["huffingtonpost.co.uk",1],["huffingtonpost.com",1],["moviefone.com",1],["playboy.de",1],["car.com",1],["codeproject.com",1],["familyhandyman.com",1],["goldderby.com",1],["headlinepolitics.com",1],["html.net",1],["indiewire.com",1],["marmiton.org",1],["mymotherlode.com",1],["nypost.com",1],["realgm.com",1],["tvline.com",1],["wwd.com",1],["bordertelegraph.com",1],["bournemouthecho.co.uk",1],["dailyecho.co.uk",1],["dorsetecho.co.uk",1],["eveningtimes.co.uk",1],["guardian-series.co.uk",1],["heraldscotland.com",1],["iwcp.co.uk",1],["lancashiretelegraph.co.uk",1],["oxfordmail.co.uk",1],["salisburyjournal.co.uk",1],["theargus.co.uk",1],["thetelegraphandargus.co.uk",1],["yorkpress.co.uk",1],["wunderground.com",1],["lapresse.ca",1],["eurogamer.net",2],["rockpapershotgun.com",2],["vg247.com",2],["auto-motor-und-sport.de",3],["caravaning.de",3],["womenshealth.de",3],["dfiles.eu",4],["downsub.com",4],["j.gs",4],["macserial.com",4],["microify.com",4],["minecraft-forum.net",4],["solidfiles.com",4],["thepiratebay.org",4],["uptobox.com",4],["shink.me",4],["pic-upload.de",4],["oke.io",4],["dz4link.com",4],["imgclick.net",4],["downloadpirate.com",4],["download.ipeenk.com",[4,44]],["spycock.com",4],["ausfile.com",[4,53]],["xrivonet.info",4],["sawlive.tv",4],["intoupload.net",4],["serverf4.org",4],["stfly.me",[4,69]],["pngit.live",4],["solarmovie.to",4],["tusfiles.com",4],["uploadas.com",4],["shon.xyz",4],["hexupload.net",4],["iir.ai",4],["loan2host.com",4],["tii.ai",4],["file4.net",4],["souqsky.net",4],["miraculous.to",4],["pornovore.fr",5],["xstory-fr.com",6],["mp4upload.com",8],["mitly.us",[8,26]],["shrt10.com",8],["diasfem.com",8],["embedsito.com",8],["feurl.com",8],["gaobook.review",8],["luxubu.review",8],["mavlecteur.com",8],["mavplayer.xyz",8],["openplayer.net",8],["playfinder.xyz",8],["playvid.host",8],["rubicstreaming.com",8],["xstreamcdn.com",8],["ebook3000.com",8],["longfiles.com",8],["shurt.pw",8],["freemiumaccounts.net",8],["kutmoney.com",8],["ytanime.tv",8],["videowood.tv",8],["glotorrents.fr-proxy.com",[8,70]],["stream4free.live",8],["daily.bhaskar.com",9],["whosampled.com",10],["blackspigot.com",11],["xiaopan.co",11],["parents.at",11],["rmdown.com",12],["xopenload.me",12],["xtapes.to",12],["at.wetter.com",13],["powerthesaurus.org",14],["imgadult.com",[15,16]],["imgdrive.net",[15,16]],["imgtaxi.com",[15,16]],["imgwallet.com",[15,16]],["javstream.com",17],["nozomi.la",17],["nudostar.com",17],["slutmesh.net",17],["azel.info",17],["clip-sex.biz",17],["justpicsplease.com",17],["lucagrassetti.com",17],["mangarow.org",17],["mihand.ir",17],["nudecelebsimages.com",17],["overwatchporn.xxx",17],["pornium.net",17],["syosetu.me",17],["xnxxw.net",17],["xxxymovies.com",17],["yurineko.net",17],["tokyomotion.com",17],["hdpornt.com",19],["4tube.com",20],["pornerbros.com",20],["uflash.tv",20],["mp3cut.net",21],["mcfucker.com",22],["taroot-rangi.com",23],["mangoporn.net",24],["realgfporn.com",25],["linkrex.net",25],["alotporn.com",25],["payskip.org",26],["imgdawgknuttz.com",26],["shorterall.com",26],["supergoku.com",26],["cashurl.in",26],["descarga.xyz",[26,42]],["ukrainesmodels.com",26],["sexuhot.com",26],["messitv.net",26],["moviewatchonline.com.pk",26],["moviewatch.com.pk",26],["ytms.one",26],["pornstash.in",26],["empflix.com",27],["freeviewmovies.com",28],["badjojo.com",28],["boysfood.com",28],["pornhost.com",28],["sextingforum.net",29],["apurogol.net",[31,42]],["legionpeliculas.org",[31,42]],["legionprogramas.org",[31,42]],["befap.com",32],["cumlouder.com",33],["chyoa.com",33],["asianxxxvideo.net",33],["holavid.com",34],["tasma.ru",34],["calidadcine.net",35],["leaknud.com",35],["dlhd.sx",36],["crackstreamshd.click",36],["freelivetvon.com",36],["tvpclive.com",36],["worldstreams.click",36],["cnnamador.com",[37,38]],["arlinadzgn.com",39],["idntheme.com",39],["problogbooster.com",39],["pronpic.org",40],["op.gg",41],["megawarez.org",42],["televisionlibre.net",42],["pastepvp.org",42],["programasvirtualespc.net",42],["awdescargas.com",42],["eporner.com",43],["theralphretort.com",44],["tfc.tv",44],["seselah.com",44],["bollywoodshaadis.com",44],["practicequiz.com",44],["reportscam.com",44],["wapkiz.com",44],["pianokafe.com",44],["apritos.com",44],["bsierad.com",44],["diminimalis.com",44],["downloadbatch.com",44],["eksporimpor.com",44],["jadijuara.com",44],["kicaunews.com",44],["palapanews.com",44],["ridvanmau.com",44],["teknohot.com",44],["unduh31.net",44],["yeutienganh.com",44],["aalah.me",44],["academiadelmotor.es",44],["aiailah.com",44],["almursi.com",44],["altebwsneno.blogspot.com",44],["ambonkita.com",44],["androidspill.com",44],["aplus.my.id",44],["arrisalah-jakarta.com",44],["babyjimaditya.com",44],["bbyhaber.com",44],["beritabangka.com",44],["beritasulteng.com",44],["bestsellerforaday.com",44],["bintangplus.com",44],["bitco.world",44],["br.nacaodamusica.com",44],["bracontece.com.br",44],["dicariguru.com",44],["fairforexbrokers.com",44],["foguinhogames.net",44],["formasyonhaber.net",44],["fullvoyeur.com",44],["healbot.dpm15.net",44],["igli4.com",44],["indofirmware.site",44],["hagalil.com",44],["javjack.com",44],["latribunadelpaisvasco.com",44],["line-stickers.com",44],["luxurydreamhomes.net",44],["m5g.it",44],["miltonfriedmancores.org",44],["minutolivre.com",44],["oportaln10.com.br",44],["pedroinnecco.com",44],["philippinenmagazin.de",44],["piazzagallura.org",44],["pornflixhd.com",44],["safehomefarm.com",44],["synoniemboek.com",44],["techacrobat.com",44],["elizabeth-mitchell.org",44],["mongri.net",44],["1004lucifer.blogspot.com",44],["svapo.it",44],["papalah.com",44],["starcoins.ws",44],["queenfaucet.website",[44,85]],["pipocamoderna.com.br",44],["space.tribuntekno.com",44],["lampungway.com",44],["coinhub.pw",44],["notiziemusica.it",44],["tecnotutoshd.net",44],["peliculasmx.net",45],["geo.fr",46],["cbc.ca",47],["igg-games.com",49],["studopedia.org",50],["zigforums.com",52],["medeberiyas.com",52],["hotpornfile.org",54],["donnaglamour.it",55],["pelisplus.online",56],["pornvideospass.com",[58,59]],["xnxx-sexfilme.com",60],["svipvids.com",61],["afolog.com",61],["aleksandranajda.com",61],["algowins.com",61],["amarendrasingh.com",61],["azotech.com.br",61],["guidedefinitive.altervista.org",61],["robber.altervista.org",61],["zadgranica.com",61],["jnovels.com",61],["chd4.com",62],["forum.cstalking.tv",62],["namemc.com",63],["hawtcelebs.com",64],["canadianunderwriter.ca",65],["creativebusybee.com",66],["varmatin.com",66],["syracusefan.com",67],["ohorse.com",68],["freepornhdonlinegay.com",70],["gsm1x.xyz",71],["softwarecrackguru.com",71],["hotgameplus.com",71],["mrdeepfakes.com",[72,73]],["donk69.com",73],["hotdreamsxxx.com",73],["pornxt.com",73],["puzzlefry.com",74],["theglobeandmail.com",75],["mtlblog.com",76],["narcity.com",76],["thepiratebay10.org",77],["jizzbunker.com",77],["xxxdan.com",77],["linksht.com",78],["gazetedamga.com.tr",79],["moonquill.com",81],["macrotrends.net",82],["investmentwatchblog.com",82],["myfreeblack.com",83],["mysostech.com",86],["medihelp.life",86],["camchickscaps.com",86],["msguides.com",86],["filesharing.io",87],["dreamdth.com",88],["acefile.co",89],["beautypackaging.com",90],["puhutv.com",91],["oranhightech.com",92],["allporncomic.com",93],["m.viptube.com",94],["kingsofteens.com",95],["godmods.com",96],["mexa.sh",97],["eg-akw.com",97],["khsm.io",97],["xn--mgba7fjn.cc",97],["winit.heatworld.com",99],["checkz.net",100],["hentaihaven.xxx",101],["hanime.xxx",101],["shop123.com.tw",102],["boyfriendtv.com",103],["tubev.sex",104],["doods.pro",105],["ds2play.com",105],["jobnewsj.com",106],["businessloan5.com",106],["serkarijobresult.com",106],["disking.in",106],["studygovtyojana.com",106],["sarkarijobsimp.com",106],["hitjankari.com",106],["suaurl.com",107],["aiimgvlog.fun",108],["hentaifreak.org",110],["animeplanet.cc",111],["th-cam.com",112],["trshow.info",112],["jocooks.com",112],["conservativeus.com",113],["wristreview.com",114],["ubuntudde.com",117],["depvailon.com",118],["gload.to",119],["agrarwetter.net",120],["archpaper.com",121],["welovemanga.one",122],["moviesonlinefree.net",123],["pornkai.com",124],["tubesafari.com",124],["megaflash.xyz",125],["coins-town.com",126],["zedporn.com",127],["diendancauduong.com",[128,129]],["nopay.info",130],["thetimes.co.uk",131],["newscon.org",132],["true-gaming.net",133],["batchkun.com",134],["yify-subtitles.org",135],["tchatche.com",136],["pureleaks.net",137],["wolfstream.tv",138],["starzunion.com",139],["satdl.com",140],["tekkenmods.com",141],["chickenkarts.io",142],["kiddyearner.com",143],["reddit.com",144],["frogogo.ru",145]]);

const entitiesMap = new Map([["onmovies",4],["pirateproxy",4],["psarips",4],["steamplay",[4,8,146]],["streamp1ay",[4,7,8]],["kimcartoon",4],["adshort",4],["imgdew",4],["imgmaze",4],["imgoutlet",4],["imgtown",4],["imgview",4],["adsrt",4],["mp3guild",4],["mp3clan",4],["pouvideo",[4,7,8]],["povvideo",[4,7,8]],["povvldeo",4],["povw1deo",[4,7,8]],["povwideo",[4,7,8]],["powv1deo",[4,7,8]],["powvibeo",[4,7,8]],["powvideo",[4,7,8]],["powvldeo",[4,7,8]],["grantorrent",4],["grantorrent1",4],["ddlvalley",4],["inkapelis",[4,31,42]],["pnd",4],["imgrock",4],["file-upload",4],["hdvid",[4,26,42]],["onvid",[4,42]],["ovid",[4,42]],["vidhd",[4,42]],["crohasit",4],["streamingworld",4],["putlocker9",4],["kstreaming",4],["pingit",4],["yggtorrent",4],["racaty",4],["movie123",4],["putlocker",[8,12]],["pelisplus",[8,31,42]],["pelisplushd",8],["pelix",[8,31,42]],["atomixhq",8],["pctfenix",8],["pctnew",8],["fembed",8],["mavplay",8],["videobb",8],["bfstrms",8],["shorttey",8],["elitetorrent",8],["estrenosflix",8],["estrenosflux",8],["estrenosgo",8],["tormalayalam",8],["cine-calidad",8],["extratorrents",8],["sxyprn",17],["streamhub",17],["klmanga",17],["manga1001",17],["mangaraw",17],["mangarawjp",17],["tube8",18],["perfectgirls",20],["perfektdamen",20],["adcorto",26],["bitporno",26],["rojadirecta",[30,31]],["tarjetarojatvonline",[30,31]],["rojadirectatv",31],["aquipelis",[31,42]],["newpelis",[31,42]],["pelisplay",[31,42]],["1movies",34],["foumovies",34],["downloadming",34],["daddylive",35],["extramovies",[35,36]],["extratorrent",35],["torrentstatus",35],["yts2",35],["y2mate",35],["livetvon",36],["daddylivehd",36],["ciberdvd",42],["pelisgratis",42],["peliculas24",42],["voirfilms",42],["cinetux",42],["thevidhd",42],["allcalidad",42],["yoututosjeff",44],["androidaba",44],["vidcloud",44],["descarga-animex",44],["telecharger-igli4",44],["mexa",[44,98]],["cuevana3",48],["vinaurl",51],["elixx",57],["myegy",70],["thepiratebay",77],["mtsproducoes",80],["notebookcheck",84],["akwam",97],["dood",105],["dooood",105],["tomshardware",109],["animepahe",111],["hotscopes",115],["kat",116],["katbay",116],["kickass",116],["kickasshydra",116],["kickasskat",116],["kickass2",116],["kickasstorrents",116],["kat2",116],["kattracker",116],["thekat",116],["thekickass",116],["kickassz",116],["kickasstorrents2",116],["topkickass",116],["kickassgo",116],["kkickass",116],["kkat",116],["kickasst",116],["kick4ss",116],["weloma",122],["manga1000",122],["hdmoviesflix",123],["writedroid",125]]);

const exceptionsMap = new Map([["pingit.com",[4]],["pingit.me",[4]]]);

/******************************************************************************/

function abortOnPropertyWrite(
    prop = ''
) {
    if ( typeof prop !== 'string' ) { return; }
    if ( prop === '' ) { return; }
    const exceptionToken = getExceptionToken();
    let owner = window;
    for (;;) {
        const pos = prop.indexOf('.');
        if ( pos === -1 ) { break; }
        owner = owner[prop.slice(0, pos)];
        if ( owner instanceof Object === false ) { return; }
        prop = prop.slice(pos + 1);
    }
    delete owner[prop];
    Object.defineProperty(owner, prop, {
        set: function() {
            throw new ReferenceError(exceptionToken);
        }
    });
}

function getExceptionToken() {
    const safe = safeSelf();
    const token =
        String.fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
    const oe = self.onerror;
    self.onerror = function(msg, ...args) {
        if ( typeof msg === 'string' && msg.includes(token) ) { return true; }
        if ( oe instanceof Function ) {
            return oe.call(this, msg, ...args);
        }
    }.bind();
    return token;
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
        'Object_defineProperty': Object.defineProperty.bind(Object),
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
                    re: new this.RegExp(pattern.replace(
                        /[.*+?^${}()|[\]\\]/g, '\\$&'),
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
                const reStr = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
    try { abortOnPropertyWrite(...argsList[i]); }
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
    return uBOL_abortOnPropertyWrite();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_abortOnPropertyWrite = cloneInto([
            [ '(', uBOL_abortOnPropertyWrite.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_abortOnPropertyWrite);
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
    delete page.uBOL_abortOnPropertyWrite;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
