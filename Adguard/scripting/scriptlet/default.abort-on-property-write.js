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

/* eslint-disable indent */

// ruleset: default

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_abortOnPropertyWrite = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["SZAdBlockDetection"],["_sp_"],["yafaIt"],["adblockActive"],["Fingerprint2"],["Fingerprent2"],["adcashMacros"],["open"],["openLity"],["ad_abblock_ad"],["Adcash"],["cticodes"],["imgadbpops"],["__aaZoneid"],["IS_ADBLOCK"],["__NA"],["ads_priv"],["ab_detected"],["t4PP"],["sc_adv_out"],["pURL"],["AdBlockDetectorWorkaround"],["__htapop"],["atOptions"],["popzone"],["encodeURIComponent"],["stagedPopUnder"],["closeMyAd"],["smrtSP"],["tiPopAction"],["ExoLoader"],["decodeURIComponent"],["afStorage"],["u_cfg"],["adv_pre_duration"],["adv_post_duration"],["hidekeep"],["ShowAdbblock"],["lifeOnwer"],["smrtSB"],["EPeventFire"],["adBlockDetected"],["segs_pop"],["$getWin"],["xhr.prototype.realSend"],["popUpUrl"],["btoa"],["detectAdblk"],["adsHeight"],["adsBlocked"],["SubmitDownload1"],["getIfc"],["adBlockRunning"],["I833"],["Aloader"],["bindall"],["SpecialUp"],["KillAdBlock"],["checkAdBlocker"],["deployads"],["close_screen"],["mockingbird"],["checkAds"],["check"],["decodeURI"],["downloadJSAtOnload"],["ReactAds"],["phtData"],["killAdBlock"],["adBlocker"],["Ha"],["spot"],["importFAB"],["block_detected"],["document.getElementsByClassName"],["ABD"],["mfbDetect"],["ab_cl"],["ai_adb_overlay"],["showMsgAb"],["wutimeBotPattern"],["popup_ads"],["adblockerpopup"],["adblockCheck"],["cancelAdBlocker"],["adblock"],["ExoSupport"],["mobilePop"],["base64_decode"],["mdp_deblocker"],["showModal"],["console.log"],["daCheckManager"],["backgroundBanner"],["displayCache"],["AdBDetected"],["detectAdblock"],["onScriptError"],["AdbModel"],["window.onload"],["tmnramp"],["onpopstate"],["__C"],["HTMLElement.prototype.insertAdjacentHTML"],["gothamBatAdblock"],["ai_front"],["app_advert"],["puShown"],["ospen"],["afScript"],["b2a"],["_chjeuHenj"],["bullads"],["detector_launch"],["adBlocked"],["document.ready"],["p$00a"],["c325"],["akadb"],["BetterJsPop"],["DOMAssistant"],["rotator"],["Script_Manager"],["NREUM"],["pbjs"],["detectAdblocker"],["auto_safelink"],["counter"],["adBlckActive"],["infoey"],["popName"],["showADBOverlay"],["checkAdsStatus"],["protection"],["uBlockActive"],["HTMLScriptElement.prototype.onerror"],["blockedAds"],["canRunAds"],["DoodPop"],["detectedAdblock"],["_pop"],["adbEnableForPage"],["ADMITAD"],["CoinNebula"]];

const hostnamesMap = new Map([["sueddeutsche.de",0],["autobytel.com",1],["cesoirtv.com",1],["huffingtonpost.co.uk",1],["huffingtonpost.com",1],["moviefone.com",1],["playboy.de",1],["car.com",1],["codeproject.com",1],["familyhandyman.com",1],["goldderby.com",1],["headlinepolitics.com",1],["html.net",1],["indiewire.com",1],["marmiton.org",1],["mymotherlode.com",1],["nypost.com",1],["realgm.com",1],["tvline.com",1],["wwd.com",1],["bordertelegraph.com",1],["bournemouthecho.co.uk",1],["dailyecho.co.uk",1],["dorsetecho.co.uk",1],["eveningtimes.co.uk",1],["guardian-series.co.uk",1],["heraldscotland.com",1],["iwcp.co.uk",1],["lancashiretelegraph.co.uk",1],["oxfordmail.co.uk",1],["salisburyjournal.co.uk",1],["theargus.co.uk",1],["thetelegraphandargus.co.uk",1],["yorkpress.co.uk",1],["wunderground.com",1],["lapresse.ca",1],["eurogamer.net",2],["rockpapershotgun.com",2],["vg247.com",2],["auto-motor-und-sport.de",3],["caravaning.de",3],["womenshealth.de",3],["dfiles.eu",4],["downsub.com",4],["j.gs",4],["macserial.com",4],["microify.com",4],["minecraft-forum.net",4],["solidfiles.com",4],["thepiratebay.org",4],["uptobox.com",4],["pic-upload.de",4],["oke.io",4],["dz4link.com",4],["imgclick.net",4],["downloadpirate.com",4],["spycock.com",4],["ausfile.com",[4,50]],["xrivonet.info",4],["sawlive.tv",4],["pngit.live",4],["tusfiles.com",4],["uploadas.com",4],["hexupload.net",4],["iir.ai",4],["file4.net",4],["souqsky.net",4],["miraculous.to",4],["mp4upload.com",6],["mitly.us",[6,23]],["shrt10.com",6],["ebook3000.com",6],["longfiles.com",6],["shurt.pw",6],["ytanime.tv",6],["glotorrents.fr-proxy.com",[6,64]],["rmdown.com",7],["xopenload.me",7],["at.wetter.com",8],["powerthesaurus.org",9],["1qwebplay.xyz",10],["dlhd.so",10],["flstv.online",10],["mmastreams.me",10],["mylivestream.pro",10],["streambtw.com",10],["tennisonline.me",10],["voodc.com",10],["gogoanime.co.in",10],["icelz.to",10],["streamtp1.com",10],["closedjelly.net",10],["sportsonline.so",10],["onloop.pro",10],["anarchy-stream.com",10],["olalivehdplay.ru",10],["pawastreams.info",10],["vidlink.pro",10],["wooflix.tv",10],["imgadult.com",[11,12]],["imgdrive.net",[11,12]],["imgtaxi.com",[11,12]],["imgwallet.com",[11,12]],["nozomi.la",13],["nudostar.com",13],["slutmesh.net",13],["azel.info",13],["clip-sex.biz",13],["justpicsplease.com",13],["lucagrassetti.com",13],["mangarow.org",13],["mihand.ir",13],["nudecelebsimages.com",13],["overwatchporn.xxx",13],["pornium.net",13],["syosetu.me",13],["xnxxw.net",13],["xxxymovies.com",13],["yurineko.net",13],["tokyomotion.com",13],["hdpornt.com",15],["4tube.com",16],["pornerbros.com",16],["uflash.tv",16],["mp3cut.net",17],["mcfucker.com",18],["taroot-rangi.com",19],["mangoporn.net",20],["xiaopan.co",21],["parents.at",21],["realgfporn.com",22],["linkrex.net",22],["alotporn.com",22],["payskip.org",23],["imgdawgknuttz.com",23],["shorterall.com",23],["supergoku.com",23],["descarga.xyz",[23,39]],["ukrainesmodels.com",23],["sexuhot.com",23],["messitv.net",23],["moviewatch.com.pk",23],["empflix.com",24],["freeviewmovies.com",25],["badjojo.com",25],["boysfood.com",25],["pornhost.com",25],["sextingforum.net",26],["legionpeliculas.org",[28,39]],["legionprogramas.org",[28,39]],["befap.com",29],["erome.com",29],["pictoa.com",29],["cumlouder.com",30],["chyoa.com",30],["holavid.com",31],["tasma.ru",31],["calidadcine.net",32],["leaknud.com",32],["dlhd.sx",33],["worldstreams.click",33],["cnnamador.com",[34,35]],["arlinadzgn.com",36],["idntheme.com",36],["problogbooster.com",36],["pronpic.org",37],["op.gg",38],["televisionlibre.net",39],["pastepvp.org",39],["programasvirtualespc.net",39],["awdescargas.com",39],["megawarez.org",39],["eporner.com",40],["theralphretort.com",41],["seselah.com",41],["bollywoodshaadis.com",41],["practicequiz.com",41],["wapkiz.com",41],["pianokafe.com",41],["apritos.com",41],["bsierad.com",41],["diminimalis.com",41],["eksporimpor.com",41],["jadijuara.com",41],["kicaunews.com",41],["palapanews.com",41],["ridvanmau.com",41],["yeutienganh.com",41],["aalah.me",41],["academiadelmotor.es",41],["aiailah.com",41],["almursi.com",41],["altebwsneno.blogspot.com",41],["ambonkita.com",41],["androidspill.com",41],["aplus.my.id",41],["arrisalah-jakarta.com",41],["babyjimaditya.com",41],["bbyhaber.com",41],["beritabangka.com",41],["beritasulteng.com",41],["bestsellerforaday.com",41],["bintangplus.com",41],["bitco.world",41],["br.nacaodamusica.com",41],["bracontece.com.br",41],["dicariguru.com",41],["fairforexbrokers.com",41],["foguinhogames.net",41],["formasyonhaber.net",41],["fullvoyeur.com",41],["healbot.dpm15.net",41],["igli4.com",41],["indofirmware.site",41],["hagalil.com",41],["javjack.com",41],["latribunadelpaisvasco.com",41],["line-stickers.com",41],["luxurydreamhomes.net",41],["m5g.it",41],["miltonfriedmancores.org",41],["minutolivre.com",41],["oportaln10.com.br",41],["pedroinnecco.com",41],["philippinenmagazin.de",41],["piazzagallura.org",41],["pornflixhd.com",41],["safehomefarm.com",41],["synoniemboek.com",41],["techacrobat.com",41],["elizabeth-mitchell.org",41],["mongri.net",41],["svapo.it",41],["papalah.com",41],["starcoins.ws",41],["pipocamoderna.com.br",41],["space.tribuntekno.com",41],["lampungway.com",41],["coinhub.pw",41],["notiziemusica.it",41],["peliculasmx.net",42],["geo.fr",43],["cbc.ca",44],["igg-games.com",46],["studopedia.org",47],["zigforums.com",49],["medeberiyas.com",49],["hotpornfile.org",51],["donnaglamour.it",52],["pornvideospass.com",[54,55]],["xnxx-sexfilme.com",56],["svipvids.com",57],["jnovels.com",57],["chd4.com",58],["forum.cstalking.tv",58],["namemc.com",59],["hawtcelebs.com",60],["canadianunderwriter.ca",61],["creativebusybee.com",62],["ohorse.com",63],["freepornhdonlinegay.com",64],["gsm1x.xyz",65],["softwarecrackguru.com",65],["hotgameplus.com",65],["mrdeepfakes.com",[66,67]],["donk69.com",67],["hotdreamsxxx.com",67],["puzzlefry.com",68],["theglobeandmail.com",69],["mtlblog.com",70],["narcity.com",70],["thepiratebay10.org",71],["jizzbunker.com",71],["xxxdan.com",71],["gazetedamga.com.tr",72],["moonquill.com",74],["macrotrends.net",75],["investmentwatchblog.com",75],["myfreeblack.com",76],["mysostech.com",78],["medihelp.life",78],["camchickscaps.com",78],["msguides.com",78],["filesharing.io",79],["dreamdth.com",80],["acefile.co",81],["beautypackaging.com",82],["puhutv.com",83],["oranhightech.com",84],["mad4wheels.com",85],["allporncomic.com",86],["m.viptube.com",87],["kingsofteens.com",88],["godmods.com",89],["winit.heatworld.com",90],["checkz.net",91],["shop123.com.tw",92],["boyfriendtv.com",93],["tubev.sex",94],["techyember.com",95],["remixbass.com",95],["techipop.com",95],["quickimageconverter.com",95],["mastharyana.com",95],["tmail.io",96],["fitdynamos.com",96],["bitzite.com",97],["aiimgvlog.fun",98],["laweducationinfo.com",99],["savemoneyinfo.com",99],["worldaffairinfo.com",99],["godstoryinfo.com",99],["successstoryinfo.com",99],["cxissuegk.com",99],["learnmarketinfo.com",99],["bhugolinfo.com",99],["armypowerinfo.com",99],["rsadnetworkinfo.com",99],["rsinsuranceinfo.com",99],["rsfinanceinfo.com",99],["rsgamer.app",99],["rssoftwareinfo.com",99],["rshostinginfo.com",99],["rseducationinfo.com",99],["phonereviewinfo.com",99],["makeincomeinfo.com",99],["gknutshell.com",99],["vichitrainfo.com",99],["workproductivityinfo.com",99],["dopomininfo.com",99],["hostingdetailer.com",99],["fitnesssguide.com",99],["tradingfact4u.com",99],["cryptofactss.com",99],["softwaredetail.com",99],["artoffocas.com",99],["insurancesfact.com",99],["travellingdetail.com",99],["pngitem.com",99],["hentaifreak.org",101],["animeplanet.cc",102],["th-cam.com",103],["jocooks.com",103],["conservativeus.com",104],["wristreview.com",105],["mc-hacks.net",105],["kusonime.com",106],["anime7.download",106],["eg-akw.com",109],["khsm.io",109],["xn--mgba7fjn.cc",109],["ubuntudde.com",110],["depvailon.com",111],["gload.to",112],["agrarwetter.net",113],["archpaper.com",114],["weloma.art",115],["welovemanga.one",115],["moviesonlinefree.net",116],["pornkai.com",117],["tubesafari.com",117],["zedporn.com",119],["diendancauduong.com",[120,121]],["hanime.xxx",122],["hentaihaven.xxx",122],["thetimes.co.uk",123],["newscon.org",124],["true-gaming.net",125],["batchkun.com",126],["yify-subtitles.org",127],["chat.tchatche.com",128],["cryptoearns.com",129],["pureleaks.net",130],["wolfstream.tv",131],["starzunion.com",132],["androidecuatoriano.xyz",132],["satdl.com",133],["osuskinner.com",134],["osuskins.net",134],["tekkenmods.com",135],["chickenkarts.io",136],["kiddyearner.com",137],["doods.pro",138],["dooodster.com",138],["ds2play.com",138],["popcdn.day",139],["pak-mcqs.net",140],["ragnarokscanlation.opchapters.com",141],["frogogo.ru",142]]);

const entitiesMap = new Map([["onmovies",4],["pirateproxy",4],["psarips",4],["steamplay",[4,6,143]],["streamp1ay",[4,5,6]],["adshort",4],["imgdew",4],["imgmaze",4],["imgoutlet",4],["imgtown",4],["imgview",4],["adsrt",4],["mp3guild",4],["mp3clan",4],["pouvideo",[4,5,6]],["povvideo",[4,5,6]],["povvldeo",4],["povw1deo",[4,5,6]],["povwideo",[4,5,6]],["powv1deo",[4,5,6]],["powvibeo",[4,5,6]],["powvideo",[4,5,6]],["powvldeo",[4,5,6]],["grantorrent",4],["grantorrent1",4],["ddlvalley",4],["inkapelis",[4,28,39]],["pnd",4],["imgrock",4],["hdvid",[4,23,39]],["onvid",[4,39]],["ovid",[4,39]],["vidhd",[4,39]],["crohasit",4],["streamingworld",4],["putlocker9",4],["kstreaming",4],["pingit",4],["yggtorrent",4],["racaty",4],["movie123",4],["file-upload",4],["putlocker",[6,7]],["pelisplus",[6,28,39]],["pelisplushd",6],["pelix",[6,28,39]],["atomixhq",6],["pctfenix",6],["pctnew",6],["fembed",6],["mavplay",6],["videobb",6],["shorttey",6],["elitetorrent",6],["estrenosflix",6],["estrenosflux",6],["estrenosgo",6],["tormalayalam",6],["cine-calidad",6],["extratorrents",6],["yts",10],["x1337x",10],["sxyprn",13],["streamhub",13],["klmanga",13],["manga1001",13],["mangaraw",13],["mangarawjp",13],["tube8",14],["perfectgirls",16],["perfektdamen",16],["adcorto",23],["bitporno",23],["rojadirecta",[27,28]],["tarjetarojatvonline",[27,28]],["rojadirectatv",28],["aquipelis",[28,39]],["newpelis",[28,39]],["1movies",31],["foumovies",31],["downloadming",31],["daddylive",32],["extratorrent",32],["torrentstatus",32],["yts2",32],["y2mate",32],["livetvon",33],["daddylivehd",33],["ciberdvd",39],["pelisgratis",39],["peliculas24",39],["voirfilms",39],["cinetux",39],["thevidhd",39],["allcalidad",39],["yoututosjeff",41],["androidaba",41],["vidcloud",41],["descarga-animex",41],["telecharger-igli4",41],["cuevana3",45],["vinaurl",48],["elixx",53],["myegy",64],["thepiratebay",71],["mtsproducoes",73],["notebookcheck",77],["tomshardware",100],["moviesnation",101],["animepahe",102],["movies4u",106],["hotscopes",107],["kat",108],["katbay",108],["kickass",108],["kickasshydra",108],["kickasskat",108],["kickass2",108],["kickasstorrents",108],["kat2",108],["kattracker",108],["thekat",108],["thekickass",108],["kickassz",108],["kickasstorrents2",108],["topkickass",108],["kickassgo",108],["kkickass",108],["kkat",108],["kickasst",108],["kick4ss",108],["akwam",109],["manga1000",115],["hdmoviesflix",116],["writedroid",118],["dood",138],["dooood",138]]);

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
    const token = getRandomToken();
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
        'Object_defineProperties': Object.defineProperties.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
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

function getRandomToken() {
    const safe = safeSelf();
    return safe.String_fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
}

/******************************************************************************/

const hnParts = [];
try {
    let origin = document.location.origin;
    if ( origin === 'null' ) {
        const origins = document.location.ancestorOrigins;
        for ( let i = 0; i < origins.length; i++ ) {
            origin = origins[i];
            if ( origin !== 'null' ) { break; }
        }
    }
    const pos = origin.lastIndexOf('://');
    if ( pos === -1 ) { return; }
    hnParts.push(...origin.slice(pos+3).split('.'));
} catch {
}
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
    catch { }
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_abortOnPropertyWrite();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
