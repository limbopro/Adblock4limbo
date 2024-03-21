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

const argsList = [["SZAdBlockDetection"],["_sp_"],["yafaIt"],["adblockActive"],["Fingerprint2"],["popUrl"],["Fingerprent2"],["adcashMacros"],["popupAdCall"],["showAdBlockerOverlay"],["AdBlockDetectorWorkaround"],["open"],["openLity"],["ad_abblock_ad"],["cticodes"],["imgadbpops"],["__aaZoneid"],["IS_ADBLOCK"],["__NA"],["ads_priv"],["ab_detected"],["t4PP"],["sc_adv_out"],["pURL"],["__htapop"],["atOptions"],["popzone"],["encodeURIComponent"],["stagedPopUnder"],["closeMyAd"],["smrtSP"],["tiPopAction"],["ExoLoader"],["decodeURIComponent"],["afStorage"],["u_cfg"],["adv_pre_duration"],["adv_post_duration"],["hidekeep"],["ShowAdbblock"],["lifeOnwer"],["smrtSB"],["EPeventFire"],["adBlockDetected"],["segs_pop"],["$getWin"],["xhr.prototype.realSend"],["popUpUrl"],["btoa"],["detectAdblk"],["adsHeight"],["adsBlocked"],["SubmitDownload1"],["getIfc"],["adBlockRunning"],["mz_str"],["I833"],["Aloader"],["bindall"],["SpecialUp"],["KillAdBlock"],["checkAdBlocker"],["deployads"],["close_screen"],["mockingbird"],["checkAds"],["XF"],["check"],["tabUnder"],["decodeURI"],["downloadJSAtOnload"],["ReactAds"],["phtData"],["killAdBlock"],["adBlocker"],["Ha"],["spot"],["importFAB"],["block_detected"],["document.getElementsByClassName"],["ABD"],["mfbDetect"],["ab_cl"],["app_vars.force_disable_adblock"],["ai_adb_overlay"],["showMsgAb"],["wutimeBotPattern"],["popup_ads"],["adblockerpopup"],["adblockCheck"],["cancelAdBlocker"],["adblock"],["ExoSupport"],["mobilePop"],["base64_decode"],["mdp_deblocker"],["afScript"],["installBtnvar"],["showModal"],["console.log"],["Script_Manager"],["daCheckManager"],["backgroundBanner"],["displayCache"],["DoodPop"],["app_advert"],["AdBDetected"],["onScriptError"],["AdbModel"],["detectAdblock"],["checkAdsStatus"],["tmnramp"],["onpopstate"],["__C"],["HTMLElement.prototype.insertAdjacentHTML"],["gothamBatAdblock"],["ai_front"],["puShown"],["ospen"],["b2a"],["_chjeuHenj"],["bullads"],["detector_launch"],["adBlocked"],["document.ready"],["p$00a"],["c325"],["akadb"],["checkAdsBlocked"],["BetterJsPop"],["DOMAssistant"],["rotator"],["AaDetector"],["NREUM"],["pbjs"],["detectAdblocker"],["auto_safelink"],["counter"],["adBlckActive"],["infoey"],["popName"],["blockingAds"],["showADBOverlay"],["protection"],["uBlockActive"],["HTMLScriptElement.prototype.onerror"],["blockedAds"],["canRunAds"],["STICKY_CANARY"],["ADMITAD"],["CoinNebula"]];

const hostnamesMap = new Map([["sueddeutsche.de",0],["autobytel.com",1],["cesoirtv.com",1],["gamesradar.com",1],["huffingtonpost.co.uk",1],["huffingtonpost.com",1],["moviefone.com",1],["playboy.de",1],["car.com",1],["codeproject.com",1],["familyhandyman.com",1],["goldderby.com",1],["headlinepolitics.com",1],["html.net",1],["indiewire.com",1],["marmiton.org",1],["mymotherlode.com",1],["nypost.com",1],["realgm.com",1],["tvline.com",1],["wwd.com",1],["bordertelegraph.com",1],["bournemouthecho.co.uk",1],["dailyecho.co.uk",1],["dorsetecho.co.uk",1],["eveningtimes.co.uk",1],["guardian-series.co.uk",1],["heraldscotland.com",1],["iwcp.co.uk",1],["lancashiretelegraph.co.uk",1],["oxfordmail.co.uk",1],["salisburyjournal.co.uk",1],["theargus.co.uk",1],["thetelegraphandargus.co.uk",1],["yorkpress.co.uk",1],["wunderground.com",1],["lapresse.ca",1],["eurogamer.net",2],["rockpapershotgun.com",2],["vg247.com",2],["auto-motor-und-sport.de",3],["caravaning.de",3],["womenshealth.de",3],["dfiles.eu",4],["downsub.com",4],["j.gs",4],["macserial.com",4],["microify.com",4],["minecraft-forum.net",4],["solidfiles.com",4],["thepiratebay.org",4],["uptobox.com",4],["shink.me",4],["pic-upload.de",4],["oke.io",4],["dz4link.com",4],["imgclick.net",4],["downloadpirate.com",4],["download.ipeenk.com",[4,43]],["spycock.com",4],["ausfile.com",[4,52]],["xrivonet.info",4],["sawlive.tv",4],["stfly.me",[4,68]],["pngit.live",4],["solarmovie.to",4],["tusfiles.com",4],["uploadas.com",4],["shon.xyz",4],["hexupload.net",4],["iir.ai",4],["loan2host.com",4],["tii.ai",4],["file4.net",4],["souqsky.net",4],["miraculous.to",4],["pornovore.fr",5],["mp4upload.com",7],["mitly.us",[7,25]],["shrt10.com",7],["diasfem.com",7],["embedsito.com",7],["mavlecteur.com",7],["playfinder.xyz",7],["ebook3000.com",7],["longfiles.com",7],["shurt.pw",7],["freemiumaccounts.net",7],["kutmoney.com",7],["ytanime.tv",7],["videowood.tv",7],["glotorrents.fr-proxy.com",[7,69]],["stream4free.live",7],["daily.bhaskar.com",8],["whosampled.com",9],["blackspigot.com",10],["xiaopan.co",10],["parents.at",10],["rmdown.com",11],["xopenload.me",11],["xtapes.to",11],["at.wetter.com",12],["powerthesaurus.org",13],["imgadult.com",[14,15]],["imgdrive.net",[14,15]],["imgtaxi.com",[14,15]],["imgwallet.com",[14,15]],["javstream.com",16],["nozomi.la",16],["nudostar.com",16],["slutmesh.net",16],["azel.info",16],["clip-sex.biz",16],["justpicsplease.com",16],["lucagrassetti.com",16],["mangarow.org",16],["mihand.ir",16],["nudecelebsimages.com",16],["overwatchporn.xxx",16],["pornium.net",16],["syosetu.me",16],["xnxxw.net",16],["xxxymovies.com",16],["yurineko.net",16],["tokyomotion.com",16],["hdpornt.com",18],["4tube.com",19],["pornerbros.com",19],["uflash.tv",19],["mp3cut.net",20],["mcfucker.com",21],["taroot-rangi.com",22],["mangoporn.net",23],["realgfporn.com",24],["linkrex.net",24],["alotporn.com",24],["payskip.org",25],["imgdawgknuttz.com",25],["shorterall.com",25],["supergoku.com",25],["descarga.xyz",[25,41]],["ukrainesmodels.com",25],["sexuhot.com",25],["messitv.net",25],["moviewatchonline.com.pk",25],["moviewatch.com.pk",25],["ytms.one",25],["pornstash.in",25],["empflix.com",26],["freeviewmovies.com",27],["badjojo.com",27],["boysfood.com",27],["pornhost.com",27],["sextingforum.net",28],["apurogol.net",[30,41]],["legionpeliculas.org",[30,41]],["legionprogramas.org",[30,41]],["befap.com",31],["pictoa.com",31],["cumlouder.com",32],["chyoa.com",32],["asianxxxvideo.net",32],["holavid.com",33],["tasma.ru",33],["calidadcine.net",34],["leaknud.com",34],["dlhd.sx",35],["crackstreamshd.click",35],["freelivetvon.com",35],["tvpclive.com",35],["worldstreams.click",35],["cnnamador.com",[36,37]],["arlinadzgn.com",38],["idntheme.com",38],["problogbooster.com",38],["pronpic.org",39],["op.gg",40],["megawarez.org",41],["televisionlibre.net",41],["pastepvp.org",41],["programasvirtualespc.net",41],["awdescargas.com",41],["eporner.com",42],["theralphretort.com",43],["tfc.tv",43],["seselah.com",43],["bollywoodshaadis.com",43],["practicequiz.com",43],["wapkiz.com",43],["pianokafe.com",43],["apritos.com",43],["bsierad.com",43],["diminimalis.com",43],["downloadbatch.com",43],["eksporimpor.com",43],["jadijuara.com",43],["kicaunews.com",43],["palapanews.com",43],["ridvanmau.com",43],["teknohot.com",43],["unduh31.net",43],["yeutienganh.com",43],["aalah.me",43],["academiadelmotor.es",43],["aiailah.com",43],["almursi.com",43],["altebwsneno.blogspot.com",43],["ambonkita.com",43],["androidspill.com",43],["aplus.my.id",43],["arrisalah-jakarta.com",43],["babyjimaditya.com",43],["bbyhaber.com",43],["beritabangka.com",43],["beritasulteng.com",43],["bestsellerforaday.com",43],["bintangplus.com",43],["bitco.world",43],["br.nacaodamusica.com",43],["bracontece.com.br",43],["dicariguru.com",43],["fairforexbrokers.com",43],["foguinhogames.net",43],["formasyonhaber.net",43],["fullvoyeur.com",43],["healbot.dpm15.net",43],["igli4.com",43],["indofirmware.site",43],["hagalil.com",43],["javjack.com",43],["latribunadelpaisvasco.com",43],["line-stickers.com",43],["luxurydreamhomes.net",43],["m5g.it",43],["miltonfriedmancores.org",43],["minutolivre.com",43],["oportaln10.com.br",43],["pedroinnecco.com",43],["philippinenmagazin.de",43],["piazzagallura.org",43],["pornflixhd.com",43],["safehomefarm.com",43],["synoniemboek.com",43],["techacrobat.com",43],["elizabeth-mitchell.org",43],["mongri.net",43],["svapo.it",43],["papalah.com",43],["starcoins.ws",43],["queenfaucet.website",[43,83]],["pipocamoderna.com.br",43],["space.tribuntekno.com",43],["lampungway.com",43],["coinhub.pw",43],["notiziemusica.it",43],["tecnotutoshd.net",43],["peliculasmx.net",44],["geo.fr",45],["cbc.ca",46],["igg-games.com",48],["studopedia.org",49],["zigforums.com",51],["medeberiyas.com",51],["hotpornfile.org",53],["donnaglamour.it",54],["pelisplus.online",55],["pornvideospass.com",[57,58]],["xnxx-sexfilme.com",59],["svipvids.com",60],["jnovels.com",60],["chd4.com",61],["forum.cstalking.tv",61],["namemc.com",62],["hawtcelebs.com",63],["canadianunderwriter.ca",64],["creativebusybee.com",65],["varmatin.com",65],["syracusefan.com",66],["ohorse.com",67],["freepornhdonlinegay.com",69],["gsm1x.xyz",70],["softwarecrackguru.com",70],["hotgameplus.com",70],["mrdeepfakes.com",[71,72]],["donk69.com",72],["hotdreamsxxx.com",72],["puzzlefry.com",73],["theglobeandmail.com",74],["mtlblog.com",75],["narcity.com",75],["thepiratebay10.org",76],["jizzbunker.com",76],["xxxdan.com",76],["gazetedamga.com.tr",77],["moonquill.com",79],["macrotrends.net",80],["investmentwatchblog.com",80],["myfreeblack.com",81],["mysostech.com",84],["medihelp.life",84],["camchickscaps.com",84],["msguides.com",84],["filesharing.io",85],["dreamdth.com",86],["acefile.co",87],["beautypackaging.com",88],["puhutv.com",89],["oranhightech.com",90],["mad4wheels.com",91],["allporncomic.com",92],["m.viptube.com",93],["kingsofteens.com",94],["godmods.com",95],["mexa.sh",96],["eg-akw.com",96],["khsm.io",96],["xn--mgba7fjn.cc",96],["winit.heatworld.com",98],["checkz.net",99],["hentaihaven.xxx",100],["hanime.xxx",100],["shop123.com.tw",101],["boyfriendtv.com",102],["tubev.sex",103],["doods.pro",104],["ds2play.com",104],["anime7.download",105],["kusonime.com",105],["anumin.com",106],["awolio.com",106],["cgbsesupport.com",106],["eternalcbse.in",106],["foreverhealth.in",106],["jobwaala.in",106],["kaisekareblog.com",106],["learnwithsaif.in",106],["minijankari.com",106],["news36tech.com",106],["newzwala.co.in",106],["nhmgujarat.in",106],["odiamusicsong.com",106],["smartsetkari.in",106],["sugargliderfaqs.com",106],["theringtonesworld.in",106],["w3hindi.in",106],["picassoappk.com",106],["geniuseducares.com",106],["pmyojanasarkari.in",106],["netflixvip.in",106],["mghindinews.in",106],["gentletrail.in",106],["ndlifestylego.com",106],["raidersixgameapk.com",106],["potter-world.com",106],["sarkariexam365.com",106],["digitalfacts4u.com",106],["odiasongsworld.com",106],["friv4school.in",106],["instander.me",106],["jankari4u.com",106],["trancebazar.com",106],["mdsuuniversity.org",106],["odishadjs.link",106],["pagalmp3status.com",106],["bitzite.com",107],["aiimgvlog.fun",108],["tmail.io",109],["jobzspk.xyz",110],["starzunion.com",110],["hentaifreak.org",112],["animeplanet.cc",113],["th-cam.com",114],["jocooks.com",114],["conservativeus.com",115],["wristreview.com",116],["mc-hacks.net",116],["ubuntudde.com",119],["depvailon.com",120],["gload.to",121],["agrarwetter.net",122],["archpaper.com",123],["welovemanga.one",124],["moviesonlinefree.net",125],["pornkai.com",126],["tubesafari.com",126],["megaflash.xyz",127],["coins-town.com",128],["zedporn.com",129],["diendancauduong.com",[130,131]],["nopay.info",132],["thetimes.co.uk",133],["newscon.org",134],["true-gaming.net",135],["batchkun.com",136],["yify-subtitles.org",137],["tchatche.com",138],["cryptoearns.com",139],["pureleaks.net",140],["nexusmods.com",141],["wolfstream.tv",142],["satdl.com",143],["osuskinner.com",144],["osuskins.net",144],["tekkenmods.com",145],["chickenkarts.io",146],["kiddyearner.com",147],["reddit.com",148],["frogogo.ru",149]]);

const entitiesMap = new Map([["onmovies",4],["pirateproxy",4],["psarips",4],["steamplay",[4,7,150]],["streamp1ay",[4,6,7]],["kimcartoon",4],["adshort",4],["imgdew",4],["imgmaze",4],["imgoutlet",4],["imgtown",4],["imgview",4],["adsrt",4],["mp3guild",4],["mp3clan",4],["pouvideo",[4,6,7]],["povvideo",[4,6,7]],["povvldeo",4],["povw1deo",[4,6,7]],["povwideo",[4,6,7]],["powv1deo",[4,6,7]],["powvibeo",[4,6,7]],["powvideo",[4,6,7]],["powvldeo",[4,6,7]],["grantorrent",4],["grantorrent1",4],["ddlvalley",4],["inkapelis",[4,30,41]],["pnd",4],["imgrock",4],["file-upload",4],["hdvid",[4,25,41]],["onvid",[4,41]],["ovid",[4,41]],["vidhd",[4,41]],["crohasit",4],["streamingworld",4],["putlocker9",4],["kstreaming",4],["pingit",4],["yggtorrent",4],["racaty",4],["movie123",4],["putlocker",[7,11]],["pelisplus",[7,30,41]],["pelisplushd",7],["pelix",[7,30,41]],["atomixhq",7],["pctfenix",7],["pctnew",7],["fembed",7],["mavplay",7],["videobb",7],["shorttey",7],["elitetorrent",7],["estrenosflix",7],["estrenosflux",7],["estrenosgo",7],["tormalayalam",7],["cine-calidad",7],["extratorrents",7],["sxyprn",16],["streamhub",16],["klmanga",16],["manga1001",16],["mangaraw",16],["mangarawjp",16],["tube8",17],["perfectgirls",19],["perfektdamen",19],["adcorto",25],["bitporno",25],["rojadirecta",[29,30]],["tarjetarojatvonline",[29,30]],["rojadirectatv",30],["aquipelis",[30,41]],["newpelis",[30,41]],["pelisplay",[30,41]],["1movies",33],["foumovies",33],["downloadming",33],["daddylive",34],["extramovies",[34,35]],["extratorrent",34],["torrentstatus",34],["yts2",34],["y2mate",34],["livetvon",35],["daddylivehd",35],["ciberdvd",41],["pelisgratis",41],["peliculas24",41],["voirfilms",41],["cinetux",41],["thevidhd",41],["allcalidad",41],["yoututosjeff",43],["androidaba",43],["vidcloud",43],["descarga-animex",43],["telecharger-igli4",43],["mexa",[43,97]],["cuevana3",47],["vinaurl",50],["elixx",56],["myegy",69],["thepiratebay",76],["mtsproducoes",78],["notebookcheck",82],["akwam",96],["dood",104],["dooood",104],["movies4u",105],["tomshardware",111],["animepahe",113],["hotscopes",117],["kat",118],["katbay",118],["kickass",118],["kickasshydra",118],["kickasskat",118],["kickass2",118],["kickasstorrents",118],["kat2",118],["kattracker",118],["thekat",118],["thekickass",118],["kickassz",118],["kickasstorrents2",118],["topkickass",118],["kickassgo",118],["kkickass",118],["kkat",118],["kickasst",118],["kick4ss",118],["weloma",124],["manga1000",124],["hdmoviesflix",125],["writedroid",127]]);

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
