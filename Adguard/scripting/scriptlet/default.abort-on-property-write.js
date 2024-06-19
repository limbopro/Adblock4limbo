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

const argsList = [["SZAdBlockDetection"],["_sp_"],["yafaIt"],["adblockActive"],["Fingerprint2"],["Fingerprent2"],["adcashMacros"],["AdBlockDetectorWorkaround"],["open"],["openLity"],["ad_abblock_ad"],["Adcash"],["cticodes"],["imgadbpops"],["__aaZoneid"],["IS_ADBLOCK"],["__NA"],["ads_priv"],["ab_detected"],["t4PP"],["sc_adv_out"],["pURL"],["__htapop"],["atOptions"],["popzone"],["encodeURIComponent"],["stagedPopUnder"],["closeMyAd"],["smrtSP"],["tiPopAction"],["ExoLoader"],["decodeURIComponent"],["afStorage"],["u_cfg"],["adv_pre_duration"],["adv_post_duration"],["hidekeep"],["ShowAdbblock"],["lifeOnwer"],["smrtSB"],["EPeventFire"],["adBlockDetected"],["segs_pop"],["$getWin"],["xhr.prototype.realSend"],["popUpUrl"],["btoa"],["detectAdblk"],["adsHeight"],["adsBlocked"],["SubmitDownload1"],["getIfc"],["adBlockRunning"],["mz_str"],["I833"],["Aloader"],["bindall"],["SpecialUp"],["KillAdBlock"],["checkAdBlocker"],["deployads"],["close_screen"],["mockingbird"],["checkAds"],["XF"],["check"],["tabUnder"],["decodeURI"],["downloadJSAtOnload"],["ReactAds"],["phtData"],["killAdBlock"],["adBlocker"],["Ha"],["spot"],["importFAB"],["block_detected"],["document.getElementsByClassName"],["ABD"],["mfbDetect"],["ab_cl"],["app_vars.force_disable_adblock"],["ai_adb_overlay"],["showMsgAb"],["wutimeBotPattern"],["popup_ads"],["adblockerpopup"],["adblockCheck"],["cancelAdBlocker"],["adblock"],["ExoSupport"],["mobilePop"],["base64_decode"],["mdp_deblocker"],["afScript"],["installBtnvar"],["showModal"],["console.log"],["Script_Manager"],["daCheckManager"],["backgroundBanner"],["displayCache"],["DoodPop"],["app_advert"],["AdBDetected"],["detectAdblock"],["onScriptError"],["AdbModel"],["window.onload"],["tmnramp"],["onpopstate"],["__C"],["HTMLElement.prototype.insertAdjacentHTML"],["gothamBatAdblock"],["ai_front"],["puShown"],["ospen"],["b2a"],["_chjeuHenj"],["bullads"],["detector_launch"],["adBlocked"],["document.ready"],["p$00a"],["c325"],["akadb"],["checkAdsBlocked"],["BetterJsPop"],["DOMAssistant"],["rotator"],["AaDetector"],["NREUM"],["pbjs"],["detectAdblocker"],["auto_safelink"],["counter"],["adBlckActive"],["infoey"],["popName"],["blockingAds"],["showADBOverlay"],["checkAdsStatus"],["protection"],["uBlockActive"],["HTMLScriptElement.prototype.onerror"],["blockedAds"],["canRunAds"],["STICKY_CANARY"],["ADMITAD"],["CoinNebula"]];

const hostnamesMap = new Map([["sueddeutsche.de",0],["autobytel.com",1],["cesoirtv.com",1],["gamesradar.com",1],["huffingtonpost.co.uk",1],["huffingtonpost.com",1],["moviefone.com",1],["playboy.de",1],["car.com",1],["codeproject.com",1],["familyhandyman.com",1],["goldderby.com",1],["headlinepolitics.com",1],["html.net",1],["indiewire.com",1],["marmiton.org",1],["mymotherlode.com",1],["nypost.com",1],["realgm.com",1],["tvline.com",1],["wwd.com",1],["bordertelegraph.com",1],["bournemouthecho.co.uk",1],["dailyecho.co.uk",1],["dorsetecho.co.uk",1],["eveningtimes.co.uk",1],["guardian-series.co.uk",1],["heraldscotland.com",1],["iwcp.co.uk",1],["lancashiretelegraph.co.uk",1],["oxfordmail.co.uk",1],["salisburyjournal.co.uk",1],["theargus.co.uk",1],["thetelegraphandargus.co.uk",1],["yorkpress.co.uk",1],["wunderground.com",1],["lapresse.ca",1],["eurogamer.net",2],["rockpapershotgun.com",2],["vg247.com",2],["auto-motor-und-sport.de",3],["caravaning.de",3],["womenshealth.de",3],["dfiles.eu",4],["downsub.com",4],["j.gs",4],["macserial.com",4],["microify.com",4],["minecraft-forum.net",4],["solidfiles.com",4],["thepiratebay.org",4],["uptobox.com",4],["pic-upload.de",4],["oke.io",4],["dz4link.com",4],["imgclick.net",4],["downloadpirate.com",4],["download.ipeenk.com",[4,41]],["spycock.com",4],["ausfile.com",[4,50]],["xrivonet.info",4],["sawlive.tv",4],["stfly.me",[4,66]],["pngit.live",4],["solarmovie.to",4],["tusfiles.com",4],["uploadas.com",4],["shon.xyz",4],["hexupload.net",4],["iir.ai",4],["file4.net",4],["souqsky.net",4],["miraculous.to",4],["mp4upload.com",6],["mitly.us",[6,23]],["shrt10.com",6],["diasfem.com",6],["embedsito.com",6],["mavlecteur.com",6],["playfinder.xyz",6],["ebook3000.com",6],["longfiles.com",6],["shurt.pw",6],["freemiumaccounts.net",6],["kutmoney.com",6],["ytanime.tv",6],["videowood.tv",6],["glotorrents.fr-proxy.com",[6,67]],["stream4free.live",6],["blackspigot.com",7],["xiaopan.co",7],["parents.at",7],["rmdown.com",8],["xopenload.me",8],["xtapes.to",8],["at.wetter.com",9],["powerthesaurus.org",10],["1qwebplay.xyz",11],["dlhd.so",11],["flstv.online",11],["mmastreams.me",11],["mylivestream.pro",11],["streambtw.com",11],["tennisonline.me",11],["voodc.com",11],["closedjelly.net",11],["compensationcoincide.net",11],["hitsports.pro",11],["sportsonline.so",11],["onloop.pro",11],["imgadult.com",[12,13]],["imgdrive.net",[12,13]],["imgtaxi.com",[12,13]],["imgwallet.com",[12,13]],["javstream.com",14],["nozomi.la",14],["nudostar.com",14],["slutmesh.net",14],["azel.info",14],["clip-sex.biz",14],["justpicsplease.com",14],["lucagrassetti.com",14],["mangarow.org",14],["mihand.ir",14],["nudecelebsimages.com",14],["overwatchporn.xxx",14],["pornium.net",14],["syosetu.me",14],["xnxxw.net",14],["xxxymovies.com",14],["yurineko.net",14],["tokyomotion.com",14],["hdpornt.com",16],["4tube.com",17],["pornerbros.com",17],["uflash.tv",17],["mp3cut.net",18],["mcfucker.com",19],["taroot-rangi.com",20],["mangoporn.net",21],["realgfporn.com",22],["linkrex.net",22],["alotporn.com",22],["payskip.org",23],["imgdawgknuttz.com",23],["shorterall.com",23],["supergoku.com",23],["descarga.xyz",[23,39]],["ukrainesmodels.com",23],["sexuhot.com",23],["messitv.net",23],["moviewatchonline.com.pk",23],["moviewatch.com.pk",23],["ytms.one",23],["pornstash.in",23],["empflix.com",24],["freeviewmovies.com",25],["badjojo.com",25],["boysfood.com",25],["pornhost.com",25],["sextingforum.net",26],["apurogol.net",[28,39]],["legionpeliculas.org",[28,39]],["legionprogramas.org",[28,39]],["befap.com",29],["pictoa.com",29],["erome.com",29],["cumlouder.com",30],["chyoa.com",30],["asianxxxvideo.net",30],["holavid.com",31],["tasma.ru",31],["calidadcine.net",32],["leaknud.com",32],["dlhd.sx",33],["crackstreamshd.click",33],["freelivetvon.com",33],["tvpclive.com",33],["worldstreams.click",33],["cnnamador.com",[34,35]],["arlinadzgn.com",36],["idntheme.com",36],["problogbooster.com",36],["pronpic.org",37],["op.gg",38],["megawarez.org",39],["televisionlibre.net",39],["pastepvp.org",39],["programasvirtualespc.net",39],["awdescargas.com",39],["eporner.com",40],["theralphretort.com",41],["tfc.tv",41],["seselah.com",41],["bollywoodshaadis.com",41],["practicequiz.com",41],["wapkiz.com",41],["pianokafe.com",41],["apritos.com",41],["bsierad.com",41],["diminimalis.com",41],["downloadbatch.com",41],["eksporimpor.com",41],["jadijuara.com",41],["kicaunews.com",41],["palapanews.com",41],["ridvanmau.com",41],["teknohot.com",41],["unduh31.net",41],["yeutienganh.com",41],["aalah.me",41],["academiadelmotor.es",41],["aiailah.com",41],["almursi.com",41],["altebwsneno.blogspot.com",41],["ambonkita.com",41],["androidspill.com",41],["aplus.my.id",41],["arrisalah-jakarta.com",41],["babyjimaditya.com",41],["bbyhaber.com",41],["beritabangka.com",41],["beritasulteng.com",41],["bestsellerforaday.com",41],["bintangplus.com",41],["bitco.world",41],["br.nacaodamusica.com",41],["bracontece.com.br",41],["dicariguru.com",41],["fairforexbrokers.com",41],["foguinhogames.net",41],["formasyonhaber.net",41],["fullvoyeur.com",41],["healbot.dpm15.net",41],["igli4.com",41],["indofirmware.site",41],["hagalil.com",41],["javjack.com",41],["latribunadelpaisvasco.com",41],["line-stickers.com",41],["luxurydreamhomes.net",41],["m5g.it",41],["miltonfriedmancores.org",41],["minutolivre.com",41],["oportaln10.com.br",41],["pedroinnecco.com",41],["philippinenmagazin.de",41],["piazzagallura.org",41],["pornflixhd.com",41],["safehomefarm.com",41],["synoniemboek.com",41],["techacrobat.com",41],["elizabeth-mitchell.org",41],["mongri.net",41],["svapo.it",41],["papalah.com",41],["starcoins.ws",41],["queenfaucet.website",[41,81]],["pipocamoderna.com.br",41],["space.tribuntekno.com",41],["lampungway.com",41],["coinhub.pw",41],["notiziemusica.it",41],["tecnotutoshd.net",41],["peliculasmx.net",42],["geo.fr",43],["cbc.ca",44],["igg-games.com",46],["studopedia.org",47],["zigforums.com",49],["medeberiyas.com",49],["hotpornfile.org",51],["donnaglamour.it",52],["pelisplus.online",53],["pornvideospass.com",[55,56]],["xnxx-sexfilme.com",57],["svipvids.com",58],["jnovels.com",58],["chd4.com",59],["forum.cstalking.tv",59],["namemc.com",60],["hawtcelebs.com",61],["canadianunderwriter.ca",62],["creativebusybee.com",63],["varmatin.com",63],["syracusefan.com",64],["ohorse.com",65],["freepornhdonlinegay.com",67],["gsm1x.xyz",68],["softwarecrackguru.com",68],["hotgameplus.com",68],["mrdeepfakes.com",[69,70]],["donk69.com",70],["hotdreamsxxx.com",70],["puzzlefry.com",71],["theglobeandmail.com",72],["mtlblog.com",73],["narcity.com",73],["thepiratebay10.org",74],["jizzbunker.com",74],["xxxdan.com",74],["gazetedamga.com.tr",75],["moonquill.com",77],["macrotrends.net",78],["investmentwatchblog.com",78],["myfreeblack.com",79],["mysostech.com",82],["medihelp.life",82],["camchickscaps.com",82],["msguides.com",82],["filesharing.io",83],["dreamdth.com",84],["acefile.co",85],["beautypackaging.com",86],["puhutv.com",87],["oranhightech.com",88],["mad4wheels.com",89],["allporncomic.com",90],["m.viptube.com",91],["kingsofteens.com",92],["godmods.com",93],["mexa.sh",94],["eg-akw.com",94],["khsm.io",94],["xn--mgba7fjn.cc",94],["winit.heatworld.com",96],["checkz.net",97],["hentaihaven.xxx",98],["hanime.xxx",98],["shop123.com.tw",99],["boyfriendtv.com",100],["tubev.sex",101],["doods.pro",102],["ds2play.com",102],["anime7.download",103],["kusonime.com",103],["odiaalbumsong.com",104],["djrkmusicjaunpur.in",104],["cmsarkariyojana.com",104],["apkeclipse.com",104],["decidewhy.com",104],["insurelist.online",104],["recipenames.com",104],["filmfliqz.co",104],["morestate.pro",104],["puresports.pro",104],["funkeykida.com",104],["moonplusnews.com",104],["loanoffering.in",104],["tmail.io",105],["bitzite.com",106],["aiimgvlog.fun",107],["rsadnetworkinfo.com",108],["rsinsuranceinfo.com",108],["rsfinanceinfo.com",108],["rsgamer.app",108],["rssoftwareinfo.com",108],["rshostinginfo.com",108],["rseducationinfo.com",108],["hentaifreak.org",110],["animeplanet.cc",111],["th-cam.com",112],["jocooks.com",112],["conservativeus.com",113],["wristreview.com",114],["mc-hacks.net",114],["ubuntudde.com",117],["depvailon.com",118],["gload.to",119],["agrarwetter.net",120],["archpaper.com",121],["welovemanga.one",122],["moviesonlinefree.net",123],["pornkai.com",124],["tubesafari.com",124],["megaflash.xyz",125],["coins-town.com",126],["zedporn.com",127],["diendancauduong.com",[128,129]],["nopay.info",130],["thetimes.co.uk",131],["newscon.org",132],["true-gaming.net",133],["batchkun.com",134],["yify-subtitles.org",135],["tchatche.com",136],["cryptoearns.com",137],["pureleaks.net",138],["nexusmods.com",139],["wolfstream.tv",140],["starzunion.com",141],["satdl.com",142],["osuskinner.com",143],["osuskins.net",143],["tekkenmods.com",144],["chickenkarts.io",145],["kiddyearner.com",146],["reddit.com",147],["frogogo.ru",148]]);

const entitiesMap = new Map([["onmovies",4],["pirateproxy",4],["psarips",4],["steamplay",[4,6,149]],["streamp1ay",[4,5,6]],["adshort",4],["imgdew",4],["imgmaze",4],["imgoutlet",4],["imgtown",4],["imgview",4],["adsrt",4],["mp3guild",4],["mp3clan",4],["pouvideo",[4,5,6]],["povvideo",[4,5,6]],["povvldeo",4],["povw1deo",[4,5,6]],["povwideo",[4,5,6]],["powv1deo",[4,5,6]],["powvibeo",[4,5,6]],["powvideo",[4,5,6]],["powvldeo",[4,5,6]],["grantorrent",4],["grantorrent1",4],["ddlvalley",4],["inkapelis",[4,28,39]],["pnd",4],["imgrock",4],["hdvid",[4,23,39]],["onvid",[4,39]],["ovid",[4,39]],["vidhd",[4,39]],["crohasit",4],["streamingworld",4],["putlocker9",4],["kstreaming",4],["pingit",4],["yggtorrent",4],["kimcartoon",4],["file-upload",4],["racaty",4],["movie123",4],["putlocker",[6,8]],["pelisplus",[6,28,39]],["pelisplushd",6],["pelix",[6,28,39]],["atomixhq",6],["pctfenix",6],["pctnew",6],["fembed",6],["mavplay",6],["videobb",6],["shorttey",6],["elitetorrent",6],["estrenosflix",6],["estrenosflux",6],["estrenosgo",6],["tormalayalam",6],["cine-calidad",6],["extratorrents",6],["yts",11],["sxyprn",14],["streamhub",14],["klmanga",14],["manga1001",14],["mangaraw",14],["mangarawjp",14],["tube8",15],["perfectgirls",17],["perfektdamen",17],["adcorto",23],["bitporno",23],["rojadirecta",[27,28]],["tarjetarojatvonline",[27,28]],["rojadirectatv",28],["aquipelis",[28,39]],["newpelis",[28,39]],["pelisplay",[28,39]],["1movies",31],["foumovies",31],["downloadming",31],["daddylive",32],["extramovies",[32,33]],["extratorrent",32],["torrentstatus",32],["yts2",32],["y2mate",32],["livetvon",33],["daddylivehd",33],["ciberdvd",39],["pelisgratis",39],["peliculas24",39],["voirfilms",39],["cinetux",39],["thevidhd",39],["allcalidad",39],["yoututosjeff",41],["androidaba",41],["vidcloud",41],["descarga-animex",41],["telecharger-igli4",41],["mexa",[41,95]],["cuevana3",45],["vinaurl",48],["elixx",54],["myegy",67],["thepiratebay",74],["mtsproducoes",76],["notebookcheck",80],["akwam",94],["dood",102],["dooood",102],["movies4u",103],["tomshardware",109],["animepahe",111],["hotscopes",115],["kat",116],["katbay",116],["kickass",116],["kickasshydra",116],["kickasskat",116],["kickass2",116],["kickasstorrents",116],["kat2",116],["kattracker",116],["thekat",116],["thekickass",116],["kickassz",116],["kickasstorrents2",116],["topkickass",116],["kickassgo",116],["kkickass",116],["kkat",116],["kickasst",116],["kick4ss",116],["weloma",122],["manga1000",122],["hdmoviesflix",123],["writedroid",125]]);

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
