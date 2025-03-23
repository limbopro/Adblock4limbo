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

// ruleset: default

// Important!
// Isolate from global scope

// Start of local scope
(function uBOL_abortOnPropertyWrite() {

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

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [["SZAdBlockDetection"],["_sp_"],["yafaIt"],["adblockActive"],["Fingerprint2"],["Fingerprent2"],["adcashMacros"],["open"],["openLity"],["ad_abblock_ad"],["Adcash"],["cticodes"],["imgadbpops"],["__aaZoneid"],["IS_ADBLOCK"],["__NA"],["ads_priv"],["ab_detected"],["t4PP"],["sc_adv_out"],["pURL"],["AdBlockDetectorWorkaround"],["__htapop"],["atOptions"],["popzone"],["encodeURIComponent"],["stagedPopUnder"],["closeMyAd"],["smrtSP"],["tiPopAction"],["ExoLoader"],["decodeURIComponent"],["afStorage"],["u_cfg"],["adv_pre_duration"],["adv_post_duration"],["hidekeep"],["ShowAdbblock"],["lifeOnwer"],["smrtSB"],["EPeventFire"],["adBlockDetected"],["segs_pop"],["$getWin"],["xhr.prototype.realSend"],["popUpUrl"],["btoa"],["detectAdblk"],["adsHeight"],["adsBlocked"],["SubmitDownload1"],["getIfc"],["adBlockRunning"],["I833"],["Aloader"],["bindall"],["SpecialUp"],["KillAdBlock"],["checkAdBlocker"],["deployads"],["close_screen"],["mockingbird"],["checkAds"],["check"],["decodeURI"],["downloadJSAtOnload"],["ReactAds"],["phtData"],["killAdBlock"],["adBlocker"],["Ha"],["spot"],["block_detected"],["document.getElementsByClassName"],["ABD"],["mfbDetect"],["ab_cl"],["ai_adb_overlay"],["showMsgAb"],["wutimeBotPattern"],["popup_ads"],["adblockerpopup"],["adblockCheck"],["cancelAdBlocker"],["adblock"],["ExoSupport"],["mobilePop"],["base64_decode"],["mdp_deblocker"],["showModal"],["console.log"],["daCheckManager"],["backgroundBanner"],["displayCache"],["detectAdblock"],["onScriptError"],["AdbModel"],["window.onload"],["tmnramp"],["onpopstate"],["__C"],["HTMLElement.prototype.insertAdjacentHTML"],["gothamBatAdblock"],["ai_front"],["app_advert"],["puShown"],["ospen"],["afScript"],["b2a"],["_chjeuHenj"],["bullads"],["detector_launch"],["adBlocked"],["p$00a"],["c325"],["akadb"],["BetterJsPop"],["DOMAssistant"],["rotator"],["Script_Manager"],["NREUM"],["pbjs"],["detectAdblocker"],["document.ready"],["auto_safelink"],["counter"],["adBlckActive"],["infoey"],["popName"],["showADBOverlay"],["checkAdsStatus"],["protection"],["uBlockActive"],["HTMLScriptElement.prototype.onerror"],["blockedAds"],["canRunAds"],["DoodPop"],["detectedAdblock"],["_pop"],["adbEnableForPage"],["ADMITAD"],["CoinNebula"]];
const hostnamesMap = new Map([["sueddeutsche.de",0],["autobytel.com",1],["cesoirtv.com",1],["huffingtonpost.co.uk",1],["huffingtonpost.com",1],["moviefone.com",1],["playboy.de",1],["car.com",1],["codeproject.com",1],["familyhandyman.com",1],["goldderby.com",1],["headlinepolitics.com",1],["html.net",1],["indiewire.com",1],["marmiton.org",1],["mymotherlode.com",1],["nypost.com",1],["realgm.com",1],["tvline.com",1],["wwd.com",1],["bordertelegraph.com",1],["bournemouthecho.co.uk",1],["dailyecho.co.uk",1],["dorsetecho.co.uk",1],["eveningtimes.co.uk",1],["guardian-series.co.uk",1],["heraldscotland.com",1],["iwcp.co.uk",1],["lancashiretelegraph.co.uk",1],["oxfordmail.co.uk",1],["salisburyjournal.co.uk",1],["theargus.co.uk",1],["thetelegraphandargus.co.uk",1],["yorkpress.co.uk",1],["wunderground.com",1],["lapresse.ca",1],["eurogamer.net",2],["rockpapershotgun.com",2],["vg247.com",2],["auto-motor-und-sport.de",3],["caravaning.de",3],["womenshealth.de",3],["dfiles.eu",4],["downsub.com",4],["j.gs",4],["macserial.com",4],["microify.com",4],["minecraft-forum.net",4],["onmovies.*",4],["pirateproxy.*",4],["psarips.*",4],["solidfiles.com",4],["thepiratebay.org",4],["uptobox.com",4],["steamplay.*",[4,6,141]],["streamp1ay.*",[4,5,6]],["adshort.*",4],["pic-upload.de",4],["oke.io",4],["dz4link.com",4],["imgdew.*",4],["imgmaze.*",4],["imgoutlet.*",4],["imgtown.*",4],["imgview.*",4],["imgclick.net",4],["adsrt.*",4],["mp3guild.*",4],["mp3clan.*",4],["pouvideo.*",[4,5,6]],["povvideo.*",[4,5,6]],["povvldeo.*",4],["povw1deo.*",[4,5,6]],["povwideo.*",[4,5,6]],["powv1deo.*",[4,5,6]],["powvibeo.*",[4,5,6]],["powvideo.*",[4,5,6]],["powvldeo.*",[4,5,6]],["downloadpirate.com",4],["grantorrent.*",4],["grantorrent1.*",4],["ddlvalley.*",4],["inkapelis.*",[4,28,39]],["pnd.*",4],["spycock.com",4],["ausfile.com",[4,50]],["xrivonet.info",4],["imgrock.*",4],["sawlive.tv",4],["hdvid.*",[4,23,39]],["onvid.*",[4,39]],["ovid.*",[4,39]],["vidhd.*",[4,39]],["crohasit.*",4],["streamingworld.*",4],["putlocker9.*",4],["kstreaming.*",4],["pingit.*",4],["pngit.live",4],["tusfiles.com",4],["uploadas.com",4],["hexupload.net",4],["yggtorrent.*",4],["iir.ai",4],["file4.net",4],["souqsky.net",4],["racaty.*",4],["miraculous.to",4],["movie123.*",4],["file-upload.*",4],["putlocker.*",[6,7]],["mp4upload.com",6],["mitly.us",[6,23]],["pelisplus.*",[6,28,39]],["pelisplushd.*",6],["shrt10.com",6],["pelix.*",[6,28,39]],["atomixhq.*",6],["pctfenix.*",6],["pctnew.*",6],["fembed.*",6],["mavplay.*",6],["videobb.*",6],["ebook3000.com",6],["longfiles.com",6],["shurt.pw",6],["shorttey.*",6],["elitetorrent.*",6],["estrenosflix.*",6],["estrenosflux.*",6],["estrenosgo.*",6],["tormalayalam.*",6],["ytanime.tv",6],["cine-calidad.*",6],["extratorrents.*",6],["glotorrents.fr-proxy.com",[6,64]],["rmdown.com",7],["xopenload.me",7],["at.wetter.com",8],["powerthesaurus.org",9],["yts.*",10],["x1337x.*",10],["1qwebplay.xyz",10],["dlhd.so",10],["flstv.online",10],["mmastreams.me",10],["mylivestream.pro",10],["streambtw.com",10],["tennisonline.me",10],["voodc.com",10],["gogoanime.co.in",10],["icelz.to",10],["streamtp1.com",10],["closedjelly.net",10],["sportsonline.so",10],["onloop.pro",10],["anarchy-stream.com",10],["olalivehdplay.ru",10],["pawastreams.info",10],["vidlink.pro",10],["wooflix.tv",10],["imgadult.com",[11,12]],["imgdrive.net",[11,12]],["imgtaxi.com",[11,12]],["imgwallet.com",[11,12]],["sxyprn.*",13],["streamhub.*",13],["nozomi.la",13],["nudostar.com",13],["slutmesh.net",13],["azel.info",13],["clip-sex.biz",13],["justpicsplease.com",13],["klmanga.*",13],["lucagrassetti.com",13],["manga1001.*",13],["mangaraw.*",13],["mangarawjp.*",13],["mangarow.org",13],["mihand.ir",13],["nudecelebsimages.com",13],["overwatchporn.xxx",13],["pornium.net",13],["syosetu.me",13],["xnxxw.net",13],["xxxymovies.com",13],["yurineko.net",13],["tokyomotion.com",13],["tube8.*",14],["hdpornt.com",15],["4tube.com",16],["pornerbros.com",16],["perfectgirls.*",16],["perfektdamen.*",16],["uflash.tv",16],["mp3cut.net",17],["mcfucker.com",18],["taroot-rangi.com",19],["mangoporn.net",20],["xiaopan.co",21],["parents.at",21],["realgfporn.com",22],["linkrex.net",22],["alotporn.com",22],["payskip.org",23],["imgdawgknuttz.com",23],["shorterall.com",23],["supergoku.com",23],["descarga.xyz",[23,39]],["adcorto.*",23],["ukrainesmodels.com",23],["sexuhot.com",23],["messitv.net",23],["moviewatch.com.pk",23],["bitporno.*",23],["empflix.com",24],["freeviewmovies.com",25],["badjojo.com",25],["boysfood.com",25],["pornhost.com",25],["sextingforum.net",26],["rojadirecta.*",[27,28]],["tarjetarojatvonline.*",[27,28]],["rojadirectatv.*",28],["aquipelis.*",[28,39]],["newpelis.*",[28,39]],["legionpeliculas.org",[28,39]],["legionprogramas.org",[28,39]],["befap.com",29],["erome.com",29],["pictoa.com",29],["cumlouder.com",30],["chyoa.com",30],["1movies.*",31],["foumovies.*",31],["holavid.com",31],["downloadming.*",31],["tasma.ru",31],["daddylive.*",32],["extratorrent.*",32],["torrentstatus.*",32],["yts2.*",32],["y2mate.*",32],["calidadcine.net",32],["leaknud.com",32],["dlhd.sx",33],["livetvon.*",33],["daddylivehd.*",33],["worldstreams.click",33],["cnnamador.com",[34,35]],["arlinadzgn.com",36],["idntheme.com",36],["problogbooster.com",36],["pronpic.org",37],["op.gg",38],["ciberdvd.*",39],["pelisgratis.*",39],["peliculas24.*",39],["voirfilms.*",39],["televisionlibre.net",39],["pastepvp.org",39],["programasvirtualespc.net",39],["cinetux.*",39],["thevidhd.*",39],["allcalidad.*",39],["awdescargas.com",39],["megawarez.org",39],["eporner.com",40],["theralphretort.com",41],["yoututosjeff.*",41],["androidaba.*",41],["vidcloud.*",41],["seselah.com",41],["descarga-animex.*",41],["bollywoodshaadis.com",41],["practicequiz.com",41],["wapkiz.com",41],["pianokafe.com",41],["apritos.com",41],["bsierad.com",41],["diminimalis.com",41],["eksporimpor.com",41],["jadijuara.com",41],["kicaunews.com",41],["palapanews.com",41],["ridvanmau.com",41],["yeutienganh.com",41],["telecharger-igli4.*",41],["aalah.me",41],["academiadelmotor.es",41],["aiailah.com",41],["almursi.com",41],["altebwsneno.blogspot.com",41],["ambonkita.com",41],["androidspill.com",41],["aplus.my.id",41],["arrisalah-jakarta.com",41],["babyjimaditya.com",41],["bbyhaber.com",41],["beritabangka.com",41],["beritasulteng.com",41],["bestsellerforaday.com",41],["bintangplus.com",41],["bitco.world",41],["br.nacaodamusica.com",41],["bracontece.com.br",41],["dicariguru.com",41],["fairforexbrokers.com",41],["foguinhogames.net",41],["formasyonhaber.net",41],["fullvoyeur.com",41],["healbot.dpm15.net",41],["igli4.com",41],["indofirmware.site",41],["hagalil.com",41],["javjack.com",41],["latribunadelpaisvasco.com",41],["line-stickers.com",41],["luxurydreamhomes.net",41],["m5g.it",41],["miltonfriedmancores.org",41],["minutolivre.com",41],["oportaln10.com.br",41],["pedroinnecco.com",41],["philippinenmagazin.de",41],["piazzagallura.org",41],["pornflixhd.com",41],["safehomefarm.com",41],["synoniemboek.com",41],["techacrobat.com",41],["elizabeth-mitchell.org",41],["mongri.net",41],["svapo.it",41],["papalah.com",41],["starcoins.ws",41],["pipocamoderna.com.br",41],["space.tribuntekno.com",41],["lampungway.com",41],["coinhub.pw",41],["notiziemusica.it",41],["peliculasmx.net",42],["geo.fr",43],["cbc.ca",44],["cuevana3.*",45],["igg-games.com",46],["studopedia.org",47],["vinaurl.*",48],["zigforums.com",49],["medeberiyas.com",49],["hotpornfile.org",51],["donnaglamour.it",52],["elixx.*",53],["pornvideospass.com",[54,55]],["xnxx-sexfilme.com",56],["svipvids.com",57],["jnovels.com",57],["chd4.com",58],["forum.cstalking.tv",58],["namemc.com",59],["hawtcelebs.com",60],["canadianunderwriter.ca",61],["creativebusybee.com",62],["ohorse.com",63],["myegy.*",64],["freepornhdonlinegay.com",64],["gsm1x.xyz",65],["softwarecrackguru.com",65],["hotgameplus.com",65],["mrdeepfakes.com",[66,67]],["donk69.com",67],["hotdreamsxxx.com",67],["puzzlefry.com",68],["theglobeandmail.com",69],["mtlblog.com",70],["narcity.com",70],["thepiratebay.*",71],["thepiratebay10.org",71],["jizzbunker.com",71],["xxxdan.com",71],["mtsproducoes.*",72],["moonquill.com",73],["macrotrends.net",74],["investmentwatchblog.com",74],["myfreeblack.com",75],["notebookcheck.*",76],["mysostech.com",77],["medihelp.life",77],["camchickscaps.com",77],["msguides.com",77],["filesharing.io",78],["dreamdth.com",79],["acefile.co",80],["beautypackaging.com",81],["puhutv.com",82],["oranhightech.com",83],["mad4wheels.com",84],["allporncomic.com",85],["m.viptube.com",86],["kingsofteens.com",87],["godmods.com",88],["winit.heatworld.com",89],["checkz.net",90],["shop123.com.tw",91],["boyfriendtv.com",92],["tubev.sex",93],["tmail.io",94],["fitdynamos.com",94],["bitzite.com",95],["aiimgvlog.fun",96],["laweducationinfo.com",97],["savemoneyinfo.com",97],["worldaffairinfo.com",97],["godstoryinfo.com",97],["successstoryinfo.com",97],["cxissuegk.com",97],["learnmarketinfo.com",97],["bhugolinfo.com",97],["armypowerinfo.com",97],["rsadnetworkinfo.com",97],["rsinsuranceinfo.com",97],["rsfinanceinfo.com",97],["rsgamer.app",97],["rssoftwareinfo.com",97],["rshostinginfo.com",97],["rseducationinfo.com",97],["phonereviewinfo.com",97],["makeincomeinfo.com",97],["gknutshell.com",97],["vichitrainfo.com",97],["workproductivityinfo.com",97],["dopomininfo.com",97],["hostingdetailer.com",97],["fitnesssguide.com",97],["tradingfact4u.com",97],["cryptofactss.com",97],["softwaredetail.com",97],["artoffocas.com",97],["insurancesfact.com",97],["travellingdetail.com",97],["pngitem.com",97],["tomshardware.*",98],["hentaifreak.org",99],["moviesnation.*",99],["animepahe.*",100],["animeplanet.cc",100],["th-cam.com",101],["jocooks.com",101],["conservativeus.com",102],["wristreview.com",103],["mc-hacks.net",103],["kusonime.com",104],["movies4u.*",104],["anime7.download",104],["hotscopes.*",105],["kat.*",106],["katbay.*",106],["kickass.*",106],["kickasshydra.*",106],["kickasskat.*",106],["kickass2.*",106],["kickasstorrents.*",106],["kat2.*",106],["kattracker.*",106],["thekat.*",106],["thekickass.*",106],["kickassz.*",106],["kickasstorrents2.*",106],["topkickass.*",106],["kickassgo.*",106],["kkickass.*",106],["kkat.*",106],["kickasst.*",106],["kick4ss.*",106],["akwam.*",107],["eg-akw.com",107],["khsm.io",107],["xn--mgba7fjn.cc",107],["ubuntudde.com",108],["depvailon.com",109],["gload.to",110],["agrarwetter.net",111],["archpaper.com",112],["hdmoviesflix.*",113],["moviesonlinefree.net",113],["pornkai.com",114],["tubesafari.com",114],["writedroid.*",115],["zedporn.com",116],["diendancauduong.com",[117,118]],["hanime.xxx",119],["hentaihaven.xxx",119],["thetimes.co.uk",120],["newscon.org",121],["true-gaming.net",122],["manga1000.*",123],["batchkun.com",124],["yify-subtitles.org",125],["chat.tchatche.com",126],["cryptoearns.com",127],["pureleaks.net",128],["wolfstream.tv",129],["starzunion.com",130],["androidecuatoriano.xyz",130],["satdl.com",131],["osuskinner.com",132],["osuskins.net",132],["tekkenmods.com",133],["chickenkarts.io",134],["kiddyearner.com",135],["dood.*",136],["doods.pro",136],["dooodster.com",136],["dooood.*",136],["ds2play.com",136],["popcdn.day",137],["pak-mcqs.net",138],["ragnarokscanlation.opchapters.com",139],["frogogo.ru",140]]);
const exceptionsMap = new Map([["pingit.com",[4]],["pingit.me",[4]]]);
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
    try { abortOnPropertyWrite(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
