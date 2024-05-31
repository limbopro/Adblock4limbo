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

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["SZAdBlockDetection"],["_sp_"],["yafaIt"],["adblockActive"],["Fingerprint2"],["Fingerprent2"],["adcashMacros"],["AdBlockDetectorWorkaround"],["open"],["openLity"],["ad_abblock_ad"],["cticodes"],["imgadbpops"],["__aaZoneid"],["IS_ADBLOCK"],["__NA"],["ads_priv"],["ab_detected"],["t4PP"],["sc_adv_out"],["pURL"],["__htapop"],["atOptions"],["popzone"],["encodeURIComponent"],["stagedPopUnder"],["closeMyAd"],["smrtSP"],["tiPopAction"],["ExoLoader"],["decodeURIComponent"],["afStorage"],["u_cfg"],["adv_pre_duration"],["adv_post_duration"],["hidekeep"],["ShowAdbblock"],["lifeOnwer"],["smrtSB"],["EPeventFire"],["adBlockDetected"],["segs_pop"],["$getWin"],["xhr.prototype.realSend"],["popUpUrl"],["btoa"],["detectAdblk"],["adsHeight"],["adsBlocked"],["SubmitDownload1"],["getIfc"],["adBlockRunning"],["mz_str"],["I833"],["Aloader"],["bindall"],["SpecialUp"],["KillAdBlock"],["checkAdBlocker"],["deployads"],["close_screen"],["mockingbird"],["checkAds"],["XF"],["check"],["tabUnder"],["decodeURI"],["downloadJSAtOnload"],["ReactAds"],["phtData"],["killAdBlock"],["adBlocker"],["Ha"],["spot"],["importFAB"],["block_detected"],["document.getElementsByClassName"],["ABD"],["mfbDetect"],["ab_cl"],["app_vars.force_disable_adblock"],["ai_adb_overlay"],["showMsgAb"],["wutimeBotPattern"],["popup_ads"],["adblockerpopup"],["adblockCheck"],["cancelAdBlocker"],["adblock"],["ExoSupport"],["mobilePop"],["base64_decode"],["mdp_deblocker"],["afScript"],["installBtnvar"],["showModal"],["console.log"],["Script_Manager"],["daCheckManager"],["backgroundBanner"],["displayCache"],["DoodPop"],["app_advert"],["AdBDetected"],["detectAdblock"],["onScriptError"],["AdbModel"],["window.onload"],["tmnramp"],["onpopstate"],["__C"],["HTMLElement.prototype.insertAdjacentHTML"],["gothamBatAdblock"],["ai_front"],["puShown"],["ospen"],["b2a"],["_chjeuHenj"],["bullads"],["detector_launch"],["adBlocked"],["document.ready"],["p$00a"],["c325"],["akadb"],["checkAdsBlocked"],["BetterJsPop"],["DOMAssistant"],["rotator"],["AaDetector"],["NREUM"],["pbjs"],["detectAdblocker"],["auto_safelink"],["counter"],["adBlckActive"],["infoey"],["popName"],["blockingAds"],["showADBOverlay"],["checkAdsStatus"],["protection"],["uBlockActive"],["HTMLScriptElement.prototype.onerror"],["blockedAds"],["canRunAds"],["STICKY_CANARY"],["ADMITAD"],["CoinNebula"]];

const hostnamesMap = new Map([["sueddeutsche.de",0],["autobytel.com",1],["cesoirtv.com",1],["gamesradar.com",1],["huffingtonpost.co.uk",1],["huffingtonpost.com",1],["moviefone.com",1],["playboy.de",1],["car.com",1],["codeproject.com",1],["familyhandyman.com",1],["goldderby.com",1],["headlinepolitics.com",1],["html.net",1],["indiewire.com",1],["marmiton.org",1],["mymotherlode.com",1],["nypost.com",1],["realgm.com",1],["tvline.com",1],["wwd.com",1],["bordertelegraph.com",1],["bournemouthecho.co.uk",1],["dailyecho.co.uk",1],["dorsetecho.co.uk",1],["eveningtimes.co.uk",1],["guardian-series.co.uk",1],["heraldscotland.com",1],["iwcp.co.uk",1],["lancashiretelegraph.co.uk",1],["oxfordmail.co.uk",1],["salisburyjournal.co.uk",1],["theargus.co.uk",1],["thetelegraphandargus.co.uk",1],["yorkpress.co.uk",1],["wunderground.com",1],["lapresse.ca",1],["eurogamer.net",2],["rockpapershotgun.com",2],["vg247.com",2],["auto-motor-und-sport.de",3],["caravaning.de",3],["womenshealth.de",3],["dfiles.eu",4],["downsub.com",4],["j.gs",4],["macserial.com",4],["microify.com",4],["minecraft-forum.net",4],["solidfiles.com",4],["thepiratebay.org",4],["uptobox.com",4],["shink.me",4],["pic-upload.de",4],["oke.io",4],["dz4link.com",4],["imgclick.net",4],["downloadpirate.com",4],["download.ipeenk.com",[4,40]],["spycock.com",4],["ausfile.com",[4,49]],["xrivonet.info",4],["sawlive.tv",4],["stfly.me",[4,65]],["pngit.live",4],["solarmovie.to",4],["tusfiles.com",4],["uploadas.com",4],["shon.xyz",4],["hexupload.net",4],["iir.ai",4],["file4.net",4],["souqsky.net",4],["miraculous.to",4],["mp4upload.com",6],["mitly.us",[6,22]],["shrt10.com",6],["diasfem.com",6],["embedsito.com",6],["mavlecteur.com",6],["playfinder.xyz",6],["ebook3000.com",6],["longfiles.com",6],["shurt.pw",6],["freemiumaccounts.net",6],["kutmoney.com",6],["ytanime.tv",6],["videowood.tv",6],["glotorrents.fr-proxy.com",[6,66]],["stream4free.live",6],["blackspigot.com",7],["xiaopan.co",7],["parents.at",7],["rmdown.com",8],["xopenload.me",8],["xtapes.to",8],["at.wetter.com",9],["powerthesaurus.org",10],["imgadult.com",[11,12]],["imgdrive.net",[11,12]],["imgtaxi.com",[11,12]],["imgwallet.com",[11,12]],["javstream.com",13],["nozomi.la",13],["nudostar.com",13],["slutmesh.net",13],["azel.info",13],["clip-sex.biz",13],["justpicsplease.com",13],["lucagrassetti.com",13],["mangarow.org",13],["mihand.ir",13],["nudecelebsimages.com",13],["overwatchporn.xxx",13],["pornium.net",13],["syosetu.me",13],["xnxxw.net",13],["xxxymovies.com",13],["yurineko.net",13],["tokyomotion.com",13],["hdpornt.com",15],["4tube.com",16],["pornerbros.com",16],["uflash.tv",16],["mp3cut.net",17],["mcfucker.com",18],["taroot-rangi.com",19],["mangoporn.net",20],["realgfporn.com",21],["linkrex.net",21],["alotporn.com",21],["payskip.org",22],["imgdawgknuttz.com",22],["shorterall.com",22],["supergoku.com",22],["descarga.xyz",[22,38]],["ukrainesmodels.com",22],["sexuhot.com",22],["messitv.net",22],["moviewatchonline.com.pk",22],["moviewatch.com.pk",22],["ytms.one",22],["pornstash.in",22],["empflix.com",23],["freeviewmovies.com",24],["badjojo.com",24],["boysfood.com",24],["pornhost.com",24],["sextingforum.net",25],["apurogol.net",[27,38]],["legionpeliculas.org",[27,38]],["legionprogramas.org",[27,38]],["befap.com",28],["pictoa.com",28],["erome.com",28],["cumlouder.com",29],["chyoa.com",29],["asianxxxvideo.net",29],["holavid.com",30],["tasma.ru",30],["calidadcine.net",31],["leaknud.com",31],["dlhd.sx",32],["crackstreamshd.click",32],["freelivetvon.com",32],["tvpclive.com",32],["worldstreams.click",32],["cnnamador.com",[33,34]],["arlinadzgn.com",35],["idntheme.com",35],["problogbooster.com",35],["pronpic.org",36],["op.gg",37],["megawarez.org",38],["televisionlibre.net",38],["pastepvp.org",38],["programasvirtualespc.net",38],["awdescargas.com",38],["eporner.com",39],["theralphretort.com",40],["tfc.tv",40],["seselah.com",40],["bollywoodshaadis.com",40],["practicequiz.com",40],["wapkiz.com",40],["pianokafe.com",40],["apritos.com",40],["bsierad.com",40],["diminimalis.com",40],["downloadbatch.com",40],["eksporimpor.com",40],["jadijuara.com",40],["kicaunews.com",40],["palapanews.com",40],["ridvanmau.com",40],["teknohot.com",40],["unduh31.net",40],["yeutienganh.com",40],["aalah.me",40],["academiadelmotor.es",40],["aiailah.com",40],["almursi.com",40],["altebwsneno.blogspot.com",40],["ambonkita.com",40],["androidspill.com",40],["aplus.my.id",40],["arrisalah-jakarta.com",40],["babyjimaditya.com",40],["bbyhaber.com",40],["beritabangka.com",40],["beritasulteng.com",40],["bestsellerforaday.com",40],["bintangplus.com",40],["bitco.world",40],["br.nacaodamusica.com",40],["bracontece.com.br",40],["dicariguru.com",40],["fairforexbrokers.com",40],["foguinhogames.net",40],["formasyonhaber.net",40],["fullvoyeur.com",40],["healbot.dpm15.net",40],["igli4.com",40],["indofirmware.site",40],["hagalil.com",40],["javjack.com",40],["latribunadelpaisvasco.com",40],["line-stickers.com",40],["luxurydreamhomes.net",40],["m5g.it",40],["miltonfriedmancores.org",40],["minutolivre.com",40],["oportaln10.com.br",40],["pedroinnecco.com",40],["philippinenmagazin.de",40],["piazzagallura.org",40],["pornflixhd.com",40],["safehomefarm.com",40],["synoniemboek.com",40],["techacrobat.com",40],["elizabeth-mitchell.org",40],["mongri.net",40],["svapo.it",40],["papalah.com",40],["starcoins.ws",40],["queenfaucet.website",[40,80]],["pipocamoderna.com.br",40],["space.tribuntekno.com",40],["lampungway.com",40],["coinhub.pw",40],["notiziemusica.it",40],["tecnotutoshd.net",40],["peliculasmx.net",41],["geo.fr",42],["cbc.ca",43],["igg-games.com",45],["studopedia.org",46],["zigforums.com",48],["medeberiyas.com",48],["hotpornfile.org",50],["donnaglamour.it",51],["pelisplus.online",52],["pornvideospass.com",[54,55]],["xnxx-sexfilme.com",56],["svipvids.com",57],["jnovels.com",57],["chd4.com",58],["forum.cstalking.tv",58],["namemc.com",59],["hawtcelebs.com",60],["canadianunderwriter.ca",61],["creativebusybee.com",62],["varmatin.com",62],["syracusefan.com",63],["ohorse.com",64],["freepornhdonlinegay.com",66],["gsm1x.xyz",67],["softwarecrackguru.com",67],["hotgameplus.com",67],["mrdeepfakes.com",[68,69]],["donk69.com",69],["hotdreamsxxx.com",69],["puzzlefry.com",70],["theglobeandmail.com",71],["mtlblog.com",72],["narcity.com",72],["thepiratebay10.org",73],["jizzbunker.com",73],["xxxdan.com",73],["gazetedamga.com.tr",74],["moonquill.com",76],["macrotrends.net",77],["investmentwatchblog.com",77],["myfreeblack.com",78],["mysostech.com",81],["medihelp.life",81],["camchickscaps.com",81],["msguides.com",81],["filesharing.io",82],["dreamdth.com",83],["acefile.co",84],["beautypackaging.com",85],["puhutv.com",86],["oranhightech.com",87],["mad4wheels.com",88],["allporncomic.com",89],["m.viptube.com",90],["kingsofteens.com",91],["godmods.com",92],["mexa.sh",93],["eg-akw.com",93],["khsm.io",93],["xn--mgba7fjn.cc",93],["winit.heatworld.com",95],["checkz.net",96],["hentaihaven.xxx",97],["hanime.xxx",97],["shop123.com.tw",98],["boyfriendtv.com",99],["tubev.sex",100],["doods.pro",101],["ds2play.com",101],["anime7.download",102],["kusonime.com",102],["techreviewhere.com",103],["djrkmusicjaunpur.in",103],["cmsarkariyojana.com",103],["affilety.com",103],["comfortdecor.in",103],["plumlog.com",103],["apkeclipse.com",103],["moonplusnews.com",103],["loanoffering.in",103],["tmail.io",104],["bitzite.com",105],["aiimgvlog.fun",106],["rsadnetworkinfo.com",107],["rsinsuranceinfo.com",107],["rsfinanceinfo.com",107],["rsgamer.app",107],["rssoftwareinfo.com",107],["rshostinginfo.com",107],["rseducationinfo.com",107],["hentaifreak.org",109],["animeplanet.cc",110],["th-cam.com",111],["jocooks.com",111],["conservativeus.com",112],["wristreview.com",113],["mc-hacks.net",113],["ubuntudde.com",116],["depvailon.com",117],["gload.to",118],["agrarwetter.net",119],["archpaper.com",120],["welovemanga.one",121],["moviesonlinefree.net",122],["pornkai.com",123],["tubesafari.com",123],["megaflash.xyz",124],["coins-town.com",125],["zedporn.com",126],["diendancauduong.com",[127,128]],["nopay.info",129],["thetimes.co.uk",130],["newscon.org",131],["true-gaming.net",132],["batchkun.com",133],["yify-subtitles.org",134],["tchatche.com",135],["cryptoearns.com",136],["pureleaks.net",137],["nexusmods.com",138],["wolfstream.tv",139],["starzunion.com",140],["satdl.com",141],["osuskinner.com",142],["osuskins.net",142],["tekkenmods.com",143],["chickenkarts.io",144],["kiddyearner.com",145],["reddit.com",146],["frogogo.ru",147]]);

const entitiesMap = new Map([["onmovies",4],["pirateproxy",4],["psarips",4],["steamplay",[4,6,148]],["streamp1ay",[4,5,6]],["adshort",4],["imgdew",4],["imgmaze",4],["imgoutlet",4],["imgtown",4],["imgview",4],["adsrt",4],["mp3guild",4],["mp3clan",4],["pouvideo",[4,5,6]],["povvideo",[4,5,6]],["povvldeo",4],["povw1deo",[4,5,6]],["povwideo",[4,5,6]],["powv1deo",[4,5,6]],["powvibeo",[4,5,6]],["powvideo",[4,5,6]],["powvldeo",[4,5,6]],["grantorrent",4],["grantorrent1",4],["ddlvalley",4],["inkapelis",[4,27,38]],["pnd",4],["imgrock",4],["file-upload",4],["hdvid",[4,22,38]],["onvid",[4,38]],["ovid",[4,38]],["vidhd",[4,38]],["crohasit",4],["streamingworld",4],["putlocker9",4],["kstreaming",4],["pingit",4],["yggtorrent",4],["kimcartoon",4],["racaty",4],["movie123",4],["putlocker",[6,8]],["pelisplus",[6,27,38]],["pelisplushd",6],["pelix",[6,27,38]],["atomixhq",6],["pctfenix",6],["pctnew",6],["fembed",6],["mavplay",6],["videobb",6],["shorttey",6],["elitetorrent",6],["estrenosflix",6],["estrenosflux",6],["estrenosgo",6],["tormalayalam",6],["cine-calidad",6],["extratorrents",6],["sxyprn",13],["streamhub",13],["klmanga",13],["manga1001",13],["mangaraw",13],["mangarawjp",13],["tube8",14],["perfectgirls",16],["perfektdamen",16],["adcorto",22],["bitporno",22],["rojadirecta",[26,27]],["tarjetarojatvonline",[26,27]],["rojadirectatv",27],["aquipelis",[27,38]],["newpelis",[27,38]],["pelisplay",[27,38]],["1movies",30],["foumovies",30],["downloadming",30],["daddylive",31],["extramovies",[31,32]],["extratorrent",31],["torrentstatus",31],["yts2",31],["y2mate",31],["livetvon",32],["daddylivehd",32],["ciberdvd",38],["pelisgratis",38],["peliculas24",38],["voirfilms",38],["cinetux",38],["thevidhd",38],["allcalidad",38],["yoututosjeff",40],["androidaba",40],["vidcloud",40],["descarga-animex",40],["telecharger-igli4",40],["mexa",[40,94]],["cuevana3",44],["vinaurl",47],["elixx",53],["myegy",66],["thepiratebay",73],["mtsproducoes",75],["notebookcheck",79],["akwam",93],["dood",101],["dooood",101],["movies4u",102],["tomshardware",108],["animepahe",110],["hotscopes",114],["kat",115],["katbay",115],["kickass",115],["kickasshydra",115],["kickasskat",115],["kickass2",115],["kickasstorrents",115],["kat2",115],["kattracker",115],["thekat",115],["thekickass",115],["kickassz",115],["kickasstorrents2",115],["topkickass",115],["kickassgo",115],["kkickass",115],["kkat",115],["kickasst",115],["kick4ss",115],["weloma",121],["manga1000",121],["hdmoviesflix",122],["writedroid",124]]);

const exceptionsMap = new Map([["pingit.com",[4]],["pingit.me",[4]]]);

/******************************************************************************/

function abortOnPropertyWrite(
    prop = ''
) {
    if ( typeof prop !== 'string' ) { return; }
    if ( prop === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('abort-on-property-write', prop);
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
            safe.uboLog(logPrefix, 'Aborted');
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
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
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
            return this.Object_fromEntries(entries);
        },
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
        },
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
    let bcBuffer = [];
    safe.logLevel = scriptletGlobals.logLevel || 1;
    safe.sendToLogger = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
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
