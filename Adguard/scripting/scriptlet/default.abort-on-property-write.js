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

const argsList = [["SZAdBlockDetection"],["_sp_"],["yafaIt"],["adblockActive"],["Fingerprint2"],["Fingerprent2"],["adcashMacros"],["popupAdCall"],["showAdBlockerOverlay"],["AdBlockDetectorWorkaround"],["open"],["openLity"],["ad_abblock_ad"],["cticodes"],["imgadbpops"],["__aaZoneid"],["IS_ADBLOCK"],["__NA"],["ads_priv"],["ab_detected"],["t4PP"],["sc_adv_out"],["pURL"],["__htapop"],["atOptions"],["popzone"],["encodeURIComponent"],["stagedPopUnder"],["closeMyAd"],["smrtSP"],["tiPopAction"],["ExoLoader"],["decodeURIComponent"],["afStorage"],["u_cfg"],["adv_pre_duration"],["adv_post_duration"],["hidekeep"],["ShowAdbblock"],["lifeOnwer"],["smrtSB"],["EPeventFire"],["adBlockDetected"],["segs_pop"],["$getWin"],["xhr.prototype.realSend"],["popUpUrl"],["btoa"],["detectAdblk"],["adsHeight"],["adsBlocked"],["SubmitDownload1"],["getIfc"],["adBlockRunning"],["mz_str"],["I833"],["Aloader"],["bindall"],["SpecialUp"],["KillAdBlock"],["checkAdBlocker"],["deployads"],["close_screen"],["mockingbird"],["checkAds"],["XF"],["check"],["tabUnder"],["decodeURI"],["downloadJSAtOnload"],["ReactAds"],["phtData"],["killAdBlock"],["adBlocker"],["Ha"],["spot"],["importFAB"],["block_detected"],["document.getElementsByClassName"],["ABD"],["mfbDetect"],["ab_cl"],["app_vars.force_disable_adblock"],["ai_adb_overlay"],["showMsgAb"],["wutimeBotPattern"],["popup_ads"],["adblockerpopup"],["adblockCheck"],["cancelAdBlocker"],["adblock"],["ExoSupport"],["mobilePop"],["base64_decode"],["mdp_deblocker"],["afScript"],["installBtnvar"],["showModal"],["console.log"],["Script_Manager"],["daCheckManager"],["backgroundBanner"],["displayCache"],["DoodPop"],["app_advert"],["AdBDetected"],["detectAdblock"],["onScriptError"],["AdbModel"],["checkAdsStatus"],["tmnramp"],["onpopstate"],["__C"],["HTMLElement.prototype.insertAdjacentHTML"],["gothamBatAdblock"],["ai_front"],["puShown"],["ospen"],["b2a"],["_chjeuHenj"],["bullads"],["detector_launch"],["adBlocked"],["document.ready"],["p$00a"],["c325"],["akadb"],["checkAdsBlocked"],["BetterJsPop"],["DOMAssistant"],["rotator"],["w_status"],["AaDetector"],["NREUM"],["pbjs"],["detectAdblocker"],["auto_safelink"],["counter"],["adBlckActive"],["infoey"],["popName"],["blockingAds"],["showADBOverlay"],["protection"],["uBlockActive"],["HTMLScriptElement.prototype.onerror"],["blockedAds"],["canRunAds"],["STICKY_CANARY"],["ADMITAD"],["CoinNebula"]];

const hostnamesMap = new Map([["sueddeutsche.de",0],["autobytel.com",1],["cesoirtv.com",1],["gamesradar.com",1],["huffingtonpost.co.uk",1],["huffingtonpost.com",1],["moviefone.com",1],["playboy.de",1],["car.com",1],["codeproject.com",1],["familyhandyman.com",1],["goldderby.com",1],["headlinepolitics.com",1],["html.net",1],["indiewire.com",1],["marmiton.org",1],["mymotherlode.com",1],["nypost.com",1],["realgm.com",1],["tvline.com",1],["wwd.com",1],["bordertelegraph.com",1],["bournemouthecho.co.uk",1],["dailyecho.co.uk",1],["dorsetecho.co.uk",1],["eveningtimes.co.uk",1],["guardian-series.co.uk",1],["heraldscotland.com",1],["iwcp.co.uk",1],["lancashiretelegraph.co.uk",1],["oxfordmail.co.uk",1],["salisburyjournal.co.uk",1],["theargus.co.uk",1],["thetelegraphandargus.co.uk",1],["yorkpress.co.uk",1],["wunderground.com",1],["lapresse.ca",1],["eurogamer.net",2],["rockpapershotgun.com",2],["vg247.com",2],["auto-motor-und-sport.de",3],["caravaning.de",3],["womenshealth.de",3],["dfiles.eu",4],["downsub.com",4],["j.gs",4],["macserial.com",4],["microify.com",4],["minecraft-forum.net",4],["solidfiles.com",4],["thepiratebay.org",4],["uptobox.com",4],["shink.me",4],["pic-upload.de",4],["oke.io",4],["dz4link.com",4],["imgclick.net",4],["downloadpirate.com",4],["download.ipeenk.com",[4,42]],["spycock.com",4],["ausfile.com",[4,51]],["xrivonet.info",4],["sawlive.tv",4],["stfly.me",[4,67]],["pngit.live",4],["solarmovie.to",4],["tusfiles.com",4],["uploadas.com",4],["shon.xyz",4],["hexupload.net",4],["iir.ai",4],["loan2host.com",4],["tii.ai",4],["file4.net",4],["souqsky.net",4],["miraculous.to",4],["mp4upload.com",6],["mitly.us",[6,24]],["shrt10.com",6],["diasfem.com",6],["embedsito.com",6],["mavlecteur.com",6],["playfinder.xyz",6],["ebook3000.com",6],["longfiles.com",6],["shurt.pw",6],["freemiumaccounts.net",6],["kutmoney.com",6],["ytanime.tv",6],["videowood.tv",6],["glotorrents.fr-proxy.com",[6,68]],["stream4free.live",6],["daily.bhaskar.com",7],["whosampled.com",8],["blackspigot.com",9],["xiaopan.co",9],["parents.at",9],["rmdown.com",10],["xopenload.me",10],["xtapes.to",10],["at.wetter.com",11],["powerthesaurus.org",12],["imgadult.com",[13,14]],["imgdrive.net",[13,14]],["imgtaxi.com",[13,14]],["imgwallet.com",[13,14]],["javstream.com",15],["nozomi.la",15],["nudostar.com",15],["slutmesh.net",15],["azel.info",15],["clip-sex.biz",15],["justpicsplease.com",15],["lucagrassetti.com",15],["mangarow.org",15],["mihand.ir",15],["nudecelebsimages.com",15],["overwatchporn.xxx",15],["pornium.net",15],["syosetu.me",15],["xnxxw.net",15],["xxxymovies.com",15],["yurineko.net",15],["tokyomotion.com",15],["hdpornt.com",17],["4tube.com",18],["pornerbros.com",18],["uflash.tv",18],["mp3cut.net",19],["mcfucker.com",20],["taroot-rangi.com",21],["mangoporn.net",22],["realgfporn.com",23],["linkrex.net",23],["alotporn.com",23],["payskip.org",24],["imgdawgknuttz.com",24],["shorterall.com",24],["supergoku.com",24],["descarga.xyz",[24,40]],["ukrainesmodels.com",24],["sexuhot.com",24],["messitv.net",24],["moviewatchonline.com.pk",24],["moviewatch.com.pk",24],["ytms.one",24],["pornstash.in",24],["empflix.com",25],["freeviewmovies.com",26],["badjojo.com",26],["boysfood.com",26],["pornhost.com",26],["sextingforum.net",27],["apurogol.net",[29,40]],["legionpeliculas.org",[29,40]],["legionprogramas.org",[29,40]],["befap.com",30],["pictoa.com",30],["erome.com",30],["cumlouder.com",31],["chyoa.com",31],["asianxxxvideo.net",31],["holavid.com",32],["tasma.ru",32],["calidadcine.net",33],["leaknud.com",33],["dlhd.sx",34],["crackstreamshd.click",34],["freelivetvon.com",34],["tvpclive.com",34],["worldstreams.click",34],["cnnamador.com",[35,36]],["arlinadzgn.com",37],["idntheme.com",37],["problogbooster.com",37],["pronpic.org",38],["op.gg",39],["megawarez.org",40],["televisionlibre.net",40],["pastepvp.org",40],["programasvirtualespc.net",40],["awdescargas.com",40],["eporner.com",41],["theralphretort.com",42],["tfc.tv",42],["seselah.com",42],["bollywoodshaadis.com",42],["practicequiz.com",42],["wapkiz.com",42],["pianokafe.com",42],["apritos.com",42],["bsierad.com",42],["diminimalis.com",42],["downloadbatch.com",42],["eksporimpor.com",42],["jadijuara.com",42],["kicaunews.com",42],["palapanews.com",42],["ridvanmau.com",42],["teknohot.com",42],["unduh31.net",42],["yeutienganh.com",42],["aalah.me",42],["academiadelmotor.es",42],["aiailah.com",42],["almursi.com",42],["altebwsneno.blogspot.com",42],["ambonkita.com",42],["androidspill.com",42],["aplus.my.id",42],["arrisalah-jakarta.com",42],["babyjimaditya.com",42],["bbyhaber.com",42],["beritabangka.com",42],["beritasulteng.com",42],["bestsellerforaday.com",42],["bintangplus.com",42],["bitco.world",42],["br.nacaodamusica.com",42],["bracontece.com.br",42],["dicariguru.com",42],["fairforexbrokers.com",42],["foguinhogames.net",42],["formasyonhaber.net",42],["fullvoyeur.com",42],["healbot.dpm15.net",42],["igli4.com",42],["indofirmware.site",42],["hagalil.com",42],["javjack.com",42],["latribunadelpaisvasco.com",42],["line-stickers.com",42],["luxurydreamhomes.net",42],["m5g.it",42],["miltonfriedmancores.org",42],["minutolivre.com",42],["oportaln10.com.br",42],["pedroinnecco.com",42],["philippinenmagazin.de",42],["piazzagallura.org",42],["pornflixhd.com",42],["safehomefarm.com",42],["synoniemboek.com",42],["techacrobat.com",42],["elizabeth-mitchell.org",42],["mongri.net",42],["svapo.it",42],["papalah.com",42],["starcoins.ws",42],["queenfaucet.website",[42,82]],["pipocamoderna.com.br",42],["space.tribuntekno.com",42],["lampungway.com",42],["coinhub.pw",42],["notiziemusica.it",42],["tecnotutoshd.net",42],["peliculasmx.net",43],["geo.fr",44],["cbc.ca",45],["igg-games.com",47],["studopedia.org",48],["zigforums.com",50],["medeberiyas.com",50],["hotpornfile.org",52],["donnaglamour.it",53],["pelisplus.online",54],["pornvideospass.com",[56,57]],["xnxx-sexfilme.com",58],["svipvids.com",59],["jnovels.com",59],["chd4.com",60],["forum.cstalking.tv",60],["namemc.com",61],["hawtcelebs.com",62],["canadianunderwriter.ca",63],["creativebusybee.com",64],["varmatin.com",64],["syracusefan.com",65],["ohorse.com",66],["freepornhdonlinegay.com",68],["gsm1x.xyz",69],["softwarecrackguru.com",69],["hotgameplus.com",69],["mrdeepfakes.com",[70,71]],["donk69.com",71],["hotdreamsxxx.com",71],["puzzlefry.com",72],["theglobeandmail.com",73],["mtlblog.com",74],["narcity.com",74],["thepiratebay10.org",75],["jizzbunker.com",75],["xxxdan.com",75],["gazetedamga.com.tr",76],["moonquill.com",78],["macrotrends.net",79],["investmentwatchblog.com",79],["myfreeblack.com",80],["mysostech.com",83],["medihelp.life",83],["camchickscaps.com",83],["msguides.com",83],["filesharing.io",84],["dreamdth.com",85],["acefile.co",86],["beautypackaging.com",87],["puhutv.com",88],["oranhightech.com",89],["mad4wheels.com",90],["allporncomic.com",91],["m.viptube.com",92],["kingsofteens.com",93],["godmods.com",94],["mexa.sh",95],["eg-akw.com",95],["khsm.io",95],["xn--mgba7fjn.cc",95],["winit.heatworld.com",97],["checkz.net",98],["hentaihaven.xxx",99],["hanime.xxx",99],["shop123.com.tw",100],["boyfriendtv.com",101],["tubev.sex",102],["doods.pro",103],["ds2play.com",103],["anime7.download",104],["kusonime.com",104],["anumin.com",105],["awolio.com",105],["cgbsesupport.com",105],["eternalcbse.in",105],["foreverhealth.in",105],["jobwaala.in",105],["kaisekareblog.com",105],["learnwithsaif.in",105],["minijankari.com",105],["news36tech.com",105],["nhmgujarat.in",105],["odiamusicsong.com",105],["sugargliderfaqs.com",105],["theringtonesworld.in",105],["w3hindi.in",105],["picassoappk.com",105],["geniuseducares.com",105],["pmyojanasarkari.in",105],["netflixvip.in",105],["mghindinews.in",105],["gentletrail.in",105],["raidersixgameapk.com",105],["sarkariexam365.com",105],["digitalfacts4u.com",105],["odiasongsworld.com",105],["friv4school.in",105],["instander.me",105],["jankari4u.com",105],["trancebazar.com",105],["mdsuuniversity.org",105],["odishadjs.link",105],["pagalmp3status.com",105],["flyshayari.com",105],["powerrangergames.com",105],["kishanganjnews.in",105],["tipdoot.in",105],["dinakondukathe.com",105],["nrvlivability.org",105],["remixodia.link",105],["aksharamedia.com",105],["mcqquestionbank.com",105],["barmanmusic.com.in",105],["msdsu.org",105],["newsivae.in",105],["kinemastermods.in",105],["loanoffering.in",105],["tmail.io",106],["bitzite.com",107],["aiimgvlog.fun",108],["jobzspk.xyz",109],["starzunion.com",109],["hentaifreak.org",111],["animeplanet.cc",112],["th-cam.com",113],["jocooks.com",113],["conservativeus.com",114],["wristreview.com",115],["mc-hacks.net",115],["ubuntudde.com",118],["depvailon.com",119],["gload.to",120],["agrarwetter.net",121],["archpaper.com",122],["welovemanga.one",123],["moviesonlinefree.net",124],["pornkai.com",125],["tubesafari.com",125],["megaflash.xyz",126],["coins-town.com",127],["zedporn.com",128],["diendancauduong.com",[129,130]],["in-jpn.com",131],["nopay.info",132],["thetimes.co.uk",133],["newscon.org",134],["true-gaming.net",135],["batchkun.com",136],["yify-subtitles.org",137],["tchatche.com",138],["cryptoearns.com",139],["pureleaks.net",140],["nexusmods.com",141],["wolfstream.tv",142],["satdl.com",143],["osuskinner.com",144],["osuskins.net",144],["tekkenmods.com",145],["chickenkarts.io",146],["kiddyearner.com",147],["reddit.com",148],["frogogo.ru",149]]);

const entitiesMap = new Map([["onmovies",4],["pirateproxy",4],["psarips",4],["steamplay",[4,6,150]],["streamp1ay",[4,5,6]],["kimcartoon",4],["adshort",4],["imgdew",4],["imgmaze",4],["imgoutlet",4],["imgtown",4],["imgview",4],["adsrt",4],["mp3guild",4],["mp3clan",4],["pouvideo",[4,5,6]],["povvideo",[4,5,6]],["povvldeo",4],["povw1deo",[4,5,6]],["povwideo",[4,5,6]],["powv1deo",[4,5,6]],["powvibeo",[4,5,6]],["powvideo",[4,5,6]],["powvldeo",[4,5,6]],["grantorrent",4],["grantorrent1",4],["ddlvalley",4],["inkapelis",[4,29,40]],["pnd",4],["imgrock",4],["file-upload",4],["hdvid",[4,24,40]],["onvid",[4,40]],["ovid",[4,40]],["vidhd",[4,40]],["crohasit",4],["streamingworld",4],["putlocker9",4],["kstreaming",4],["pingit",4],["yggtorrent",4],["racaty",4],["movie123",4],["putlocker",[6,10]],["pelisplus",[6,29,40]],["pelisplushd",6],["pelix",[6,29,40]],["atomixhq",6],["pctfenix",6],["pctnew",6],["fembed",6],["mavplay",6],["videobb",6],["shorttey",6],["elitetorrent",6],["estrenosflix",6],["estrenosflux",6],["estrenosgo",6],["tormalayalam",6],["cine-calidad",6],["extratorrents",6],["sxyprn",15],["streamhub",15],["klmanga",15],["manga1001",15],["mangaraw",15],["mangarawjp",15],["tube8",16],["perfectgirls",18],["perfektdamen",18],["adcorto",24],["bitporno",24],["rojadirecta",[28,29]],["tarjetarojatvonline",[28,29]],["rojadirectatv",29],["aquipelis",[29,40]],["newpelis",[29,40]],["pelisplay",[29,40]],["1movies",32],["foumovies",32],["downloadming",32],["daddylive",33],["extramovies",[33,34]],["extratorrent",33],["torrentstatus",33],["yts2",33],["y2mate",33],["livetvon",34],["daddylivehd",34],["ciberdvd",40],["pelisgratis",40],["peliculas24",40],["voirfilms",40],["cinetux",40],["thevidhd",40],["allcalidad",40],["yoututosjeff",42],["androidaba",42],["vidcloud",42],["descarga-animex",42],["telecharger-igli4",42],["mexa",[42,96]],["cuevana3",46],["vinaurl",49],["elixx",55],["myegy",68],["thepiratebay",75],["mtsproducoes",77],["notebookcheck",81],["akwam",95],["dood",103],["dooood",103],["movies4u",104],["tomshardware",110],["animepahe",112],["hotscopes",116],["kat",117],["katbay",117],["kickass",117],["kickasshydra",117],["kickasskat",117],["kickass2",117],["kickasstorrents",117],["kat2",117],["kattracker",117],["thekat",117],["thekickass",117],["kickassz",117],["kickasstorrents2",117],["topkickass",117],["kickassgo",117],["kkickass",117],["kkat",117],["kickasst",117],["kick4ss",117],["weloma",123],["manga1000",123],["hdmoviesflix",124],["writedroid",126]]);

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
