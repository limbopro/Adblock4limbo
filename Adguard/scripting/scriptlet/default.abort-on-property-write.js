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
    const exceptionToken = getExceptionTokenFn();
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

function getExceptionTokenFn() {
    const token = getRandomTokenFn();
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

function getRandomTokenFn() {
    const safe = safeSelf();
    return safe.String_fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
}

/******************************************************************************/

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [["SZAdBlockDetection"],["_sp_"],["yafaIt"],["Fingerprint2"],["Fingerprent2"],["adcashMacros"],["open"],["openLity"],["ad_abblock_ad"],["Adcash"],["cticodes"],["imgadbpops"],["__aaZoneid"],["IS_ADBLOCK"],["__NA"],["ads_priv"],["ab_detected"],["t4PP"],["sc_adv_out"],["pURL"],["AdBlockDetectorWorkaround"],["__htapop"],["atOptions"],["popzone"],["encodeURIComponent"],["stagedPopUnder"],["closeMyAd"],["smrtSP"],["tiPopAction"],["ExoLoader"],["decodeURIComponent"],["afStorage"],["u_cfg"],["adv_pre_duration"],["adv_post_duration"],["hidekeep"],["ShowAdbblock"],["lifeOnwer"],["smrtSB"],["EPeventFire"],["adBlockDetected"],["segs_pop"],["$getWin"],["xhr.prototype.realSend"],["popUpUrl"],["btoa"],["detectAdblk"],["adsHeight"],["adsBlocked"],["SubmitDownload1"],["getIfc"],["adBlockRunning"],["I833"],["Aloader"],["bindall"],["SpecialUp"],["KillAdBlock"],["checkAdBlocker"],["deployads"],["close_screen"],["mockingbird"],["checkAds"],["check"],["decodeURI"],["downloadJSAtOnload"],["ReactAds"],["phtData"],["killAdBlock"],["adBlocker"],["Ha"],["spot"],["block_detected"],["document.getElementsByClassName"],["ABD"],["mfbDetect"],["ab_cl"],["ai_adb_overlay"],["showMsgAb"],["wutimeBotPattern"],["popup_ads"],["adblockerpopup"],["adblockCheck"],["cancelAdBlocker"],["adblock"],["ExoSupport"],["mobilePop"],["base64_decode"],["mdp_deblocker"],["showModal"],["daCheckManager"],["backgroundBanner"],["displayCache"],["AdBDetected"],["onScriptError"],["AdbModel"],["window.onload"],["tmnramp"],["onpopstate"],["__C"],["HTMLElement.prototype.insertAdjacentHTML"],["gothamBatAdblock"],["ai_front"],["app_advert"],["puShown"],["ospen"],["afScript"],["b2a"],["_chjeuHenj"],["bullads"],["detector_launch"],["adBlocked"],["p$00a"],["c325"],["akadb"],["BetterJsPop"],["DOMAssistant"],["rotator"],["Script_Manager"],["NREUM"],["pbjs"],["detectAdblocker"],["document.ready"],["auto_safelink"],["counter"],["adBlckActive"],["infoey"],["popName"],["checkAdsStatus"],["protection"],["uBlockActive"],["HTMLScriptElement.prototype.onerror"],["blockedAds"],["canRunAds"],["DoodPop"],["detectedAdblock"],["_pop"],["adbEnableForPage"],["ADMITAD"],["CoinNebula"]];
const hostnamesMap = new Map([["sueddeutsche.de",0],["autobytel.com",1],["cesoirtv.com",1],["huffingtonpost.co.uk",1],["huffingtonpost.com",1],["moviefone.com",1],["playboy.de",1],["car.com",1],["codeproject.com",1],["familyhandyman.com",1],["goldderby.com",1],["headlinepolitics.com",1],["html.net",1],["indiewire.com",1],["marmiton.org",1],["mymotherlode.com",1],["nypost.com",1],["realgm.com",1],["tvline.com",1],["wwd.com",1],["bordertelegraph.com",1],["bournemouthecho.co.uk",1],["dailyecho.co.uk",1],["dorsetecho.co.uk",1],["eveningtimes.co.uk",1],["guardian-series.co.uk",1],["heraldscotland.com",1],["iwcp.co.uk",1],["lancashiretelegraph.co.uk",1],["oxfordmail.co.uk",1],["salisburyjournal.co.uk",1],["theargus.co.uk",1],["thetelegraphandargus.co.uk",1],["yorkpress.co.uk",1],["wunderground.com",1],["lapresse.ca",1],["eurogamer.net",2],["rockpapershotgun.com",2],["vg247.com",2],["dfiles.eu",3],["downsub.com",3],["j.gs",3],["macserial.com",3],["microify.com",3],["minecraft-forum.net",3],["onmovies.*",3],["pirateproxy.*",3],["psarips.*",3],["solidfiles.com",3],["thepiratebay.org",3],["uptobox.com",3],["steamplay.*",[3,5,138]],["streamp1ay.*",[3,4,5]],["adshort.*",3],["pic-upload.de",3],["oke.io",3],["dz4link.com",3],["imgdew.*",3],["imgmaze.*",3],["imgoutlet.*",3],["imgtown.*",3],["imgview.*",3],["imgclick.net",3],["adsrt.*",3],["mp3guild.*",3],["mp3clan.*",3],["pouvideo.*",[3,4,5]],["povvideo.*",[3,4,5]],["povvldeo.*",3],["povw1deo.*",[3,4,5]],["povwideo.*",[3,4,5]],["powv1deo.*",[3,4,5]],["powvibeo.*",[3,4,5]],["powvideo.*",[3,4,5]],["powvldeo.*",[3,4,5]],["downloadpirate.com",3],["grantorrent.*",3],["grantorrent1.*",3],["ddlvalley.*",3],["inkapelis.*",[3,27,38]],["pnd.*",3],["spycock.com",3],["ausfile.com",[3,49]],["xrivonet.info",3],["imgrock.*",3],["hdvid.*",[3,22,38]],["onvid.*",[3,38]],["ovid.*",[3,38]],["vidhd.*",[3,38]],["crohasit.*",3],["streamingworld.*",3],["putlocker9.*",3],["kstreaming.*",3],["pingit.*",3],["pngit.live",3],["tusfiles.com",3],["hexupload.net",3],["yggtorrent.*",3],["iir.ai",3],["file4.net",3],["souqsky.net",3],["racaty.*",3],["miraculous.to",3],["movie123.*",3],["file-upload.*",3],["putlocker.*",[5,6]],["mp4upload.com",5],["mitly.us",[5,22]],["pelisplus.*",[5,27,38]],["pelisplushd.*",5],["shrt10.com",5],["pelix.*",[5,27,38]],["atomixhq.*",5],["pctfenix.*",5],["pctnew.*",5],["fembed.*",5],["mavplay.*",5],["videobb.*",5],["ebook3000.com",5],["longfiles.com",5],["shurt.pw",5],["shorttey.*",5],["elitetorrent.*",5],["estrenosflix.*",5],["estrenosflux.*",5],["estrenosgo.*",5],["tormalayalam.*",5],["ytanime.tv",5],["cine-calidad.*",5],["extratorrents.*",5],["glotorrents.fr-proxy.com",[5,63]],["rmdown.com",6],["xopenload.me",6],["at.wetter.com",7],["powerthesaurus.org",8],["yts.*",9],["x1337x.*",9],["1qwebplay.xyz",9],["dlhd.so",9],["flstv.online",9],["mmastreams.me",9],["mylivestream.pro",9],["streambtw.com",9],["tennisonline.me",9],["voodc.com",9],["gogoanime.co.in",9],["icelz.to",9],["streamtp1.com",9],["closedjelly.net",9],["sportsonline.so",9],["onloop.pro",9],["anarchy-stream.com",9],["olalivehdplay.ru",9],["pawastreams.info",9],["vidlink.pro",9],["wooflix.tv",9],["imgadult.com",[10,11]],["imgdrive.net",[10,11]],["imgtaxi.com",[10,11]],["imgwallet.com",[10,11]],["sxyprn.*",12],["streamhub.*",12],["nozomi.la",12],["nudostar.com",12],["slutmesh.net",12],["azel.info",12],["clip-sex.biz",12],["justpicsplease.com",12],["klmanga.*",12],["lucagrassetti.com",12],["manga1001.*",12],["mangaraw.*",12],["mangarawjp.*",12],["mangarow.org",12],["mihand.ir",12],["nudecelebsimages.com",12],["overwatchporn.xxx",12],["pornium.net",12],["syosetu.me",12],["xnxxw.net",12],["xxxymovies.com",12],["yurineko.net",12],["tokyomotion.com",12],["tube8.*",13],["hdpornt.com",14],["4tube.com",15],["pornerbros.com",15],["perfectgirls.*",15],["perfektdamen.*",15],["uflash.tv",15],["mp3cut.net",16],["mcfucker.com",17],["taroot-rangi.com",18],["mangoporn.net",19],["xiaopan.co",20],["parents.at",20],["realgfporn.com",21],["linkrex.net",21],["alotporn.com",21],["payskip.org",22],["imgdawgknuttz.com",22],["shorterall.com",22],["supergoku.com",22],["descarga.xyz",[22,38]],["adcorto.*",22],["ukrainesmodels.com",22],["sexuhot.com",22],["messitv.net",22],["moviewatch.com.pk",22],["bitporno.*",22],["empflix.com",23],["freeviewmovies.com",24],["badjojo.com",24],["boysfood.com",24],["pornhost.com",24],["sextingforum.net",25],["rojadirecta.*",[26,27]],["tarjetarojatvonline.*",[26,27]],["rojadirectatv.*",27],["aquipelis.*",[27,38]],["newpelis.*",[27,38]],["legionpeliculas.org",[27,38]],["legionprogramas.org",[27,38]],["befap.com",28],["erome.com",28],["pictoa.com",28],["cumlouder.com",29],["chyoa.com",29],["1movies.*",30],["foumovies.*",30],["holavid.com",30],["downloadming.*",30],["tasma.ru",30],["daddylive.*",31],["extratorrent.*",31],["torrentstatus.*",31],["yts2.*",31],["y2mate.*",31],["leaknud.com",31],["dlhd.sx",32],["livetvon.*",32],["daddylivehd.*",32],["worldstreams.click",32],["cnnamador.com",[33,34]],["arlinadzgn.com",35],["idntheme.com",35],["problogbooster.com",35],["pronpic.org",36],["op.gg",37],["ciberdvd.*",38],["pelisgratis.*",38],["peliculas24.*",38],["voirfilms.*",38],["televisionlibre.net",38],["pastepvp.org",38],["programasvirtualespc.net",38],["cinetux.*",38],["thevidhd.*",38],["allcalidad.*",38],["awdescargas.com",38],["megawarez.org",38],["eporner.com",39],["theralphretort.com",40],["yoututosjeff.*",40],["androidaba.*",40],["vidcloud.*",40],["seselah.com",40],["descarga-animex.*",40],["bollywoodshaadis.com",40],["practicequiz.com",40],["wapkiz.com",40],["pianokafe.com",40],["apritos.com",40],["bsierad.com",40],["diminimalis.com",40],["eksporimpor.com",40],["jadijuara.com",40],["kicaunews.com",40],["palapanews.com",40],["ridvanmau.com",40],["yeutienganh.com",40],["telecharger-igli4.*",40],["aalah.me",40],["academiadelmotor.es",40],["aiailah.com",40],["almursi.com",40],["altebwsneno.blogspot.com",40],["ambonkita.com",40],["androidspill.com",40],["aplus.my.id",40],["arrisalah-jakarta.com",40],["babyjimaditya.com",40],["bbyhaber.com",40],["beritabangka.com",40],["beritasulteng.com",40],["bestsellerforaday.com",40],["bintangplus.com",40],["bitco.world",40],["br.nacaodamusica.com",40],["bracontece.com.br",40],["dicariguru.com",40],["fairforexbrokers.com",40],["foguinhogames.net",40],["formasyonhaber.net",40],["fullvoyeur.com",40],["healbot.dpm15.net",40],["igli4.com",40],["indofirmware.site",40],["hagalil.com",40],["javjack.com",40],["latribunadelpaisvasco.com",40],["line-stickers.com",40],["luxurydreamhomes.net",40],["m5g.it",40],["miltonfriedmancores.org",40],["minutolivre.com",40],["oportaln10.com.br",40],["pedroinnecco.com",40],["philippinenmagazin.de",40],["piazzagallura.org",40],["pornflixhd.com",40],["safehomefarm.com",40],["synoniemboek.com",40],["techacrobat.com",40],["elizabeth-mitchell.org",40],["mongri.net",40],["svapo.it",40],["papalah.com",40],["starcoins.ws",40],["pipocamoderna.com.br",40],["space.tribuntekno.com",40],["lampungway.com",40],["notiziemusica.it",40],["peliculasmx.net",41],["geo.fr",42],["cbc.ca",43],["cuevana3.*",44],["igg-games.com",45],["studopedia.org",46],["vinaurl.*",47],["zigforums.com",48],["medeberiyas.com",48],["hotpornfile.org",50],["donnaglamour.it",51],["elixx.*",52],["pornvideospass.com",[53,54]],["xnxx-sexfilme.com",55],["svipvids.com",56],["jnovels.com",56],["chd4.com",57],["forum.cstalking.tv",57],["namemc.com",58],["hawtcelebs.com",59],["canadianunderwriter.ca",60],["creativebusybee.com",61],["ohorse.com",62],["myegy.*",63],["freepornhdonlinegay.com",63],["gsm1x.xyz",64],["softwarecrackguru.com",64],["hotgameplus.com",64],["mrdeepfakes.com",[65,66]],["donk69.com",66],["hotdreamsxxx.com",66],["puzzlefry.com",67],["theglobeandmail.com",68],["mtlblog.com",69],["narcity.com",69],["thepiratebay.*",70],["thepiratebay10.org",70],["jizzbunker.com",70],["xxxdan.com",70],["mtsproducoes.*",71],["moonquill.com",72],["macrotrends.net",73],["investmentwatchblog.com",73],["myfreeblack.com",74],["notebookcheck.*",75],["mysostech.com",76],["medihelp.life",76],["camchickscaps.com",76],["msguides.com",76],["filesharing.io",77],["dreamdth.com",78],["acefile.co",79],["beautypackaging.com",80],["puhutv.com",81],["oranhightech.com",82],["mad4wheels.com",83],["allporncomic.com",84],["m.viptube.com",85],["kingsofteens.com",86],["godmods.com",87],["winit.heatworld.com",88],["shop123.com.tw",89],["boyfriendtv.com",90],["tubev.sex",91],["thecryptomen.com",92],["sabkiyojana.com",92],["bitzite.com",93],["aiimgvlog.fun",94],["laweducationinfo.com",95],["savemoneyinfo.com",95],["worldaffairinfo.com",95],["godstoryinfo.com",95],["successstoryinfo.com",95],["cxissuegk.com",95],["learnmarketinfo.com",95],["bhugolinfo.com",95],["armypowerinfo.com",95],["rsadnetworkinfo.com",95],["rsinsuranceinfo.com",95],["rsfinanceinfo.com",95],["rsgamer.app",95],["rssoftwareinfo.com",95],["rshostinginfo.com",95],["rseducationinfo.com",95],["phonereviewinfo.com",95],["makeincomeinfo.com",95],["gknutshell.com",95],["vichitrainfo.com",95],["workproductivityinfo.com",95],["dopomininfo.com",95],["hostingdetailer.com",95],["fitnesssguide.com",95],["tradingfact4u.com",95],["cryptofactss.com",95],["softwaredetail.com",95],["artoffocas.com",95],["insurancesfact.com",95],["travellingdetail.com",95],["pngitem.com",95],["tomshardware.*",96],["hentaifreak.org",97],["moviesnation.*",97],["animepahe.*",98],["animeplanet.cc",98],["th-cam.com",99],["jocooks.com",99],["conservativeus.com",100],["wristreview.com",101],["mc-hacks.net",101],["kusonime.com",102],["movies4u.*",102],["anime7.download",102],["hotscopes.*",103],["kat.*",104],["katbay.*",104],["kickass.*",104],["kickasshydra.*",104],["kickasskat.*",104],["kickass2.*",104],["kickasstorrents.*",104],["kat2.*",104],["kattracker.*",104],["thekat.*",104],["thekickass.*",104],["kickassz.*",104],["kickasstorrents2.*",104],["topkickass.*",104],["kickassgo.*",104],["kkickass.*",104],["kkat.*",104],["kickasst.*",104],["kick4ss.*",104],["akwam.*",105],["eg-akw.com",105],["khsm.io",105],["xn--mgba7fjn.cc",105],["ubuntudde.com",106],["depvailon.com",107],["gload.to",108],["agrarwetter.net",109],["archpaper.com",110],["hdmoviesflix.*",111],["moviesonlinefree.net",111],["pornkai.com",112],["tubesafari.com",112],["writedroid.*",113],["zedporn.com",114],["diendancauduong.com",[115,116]],["hanime.xxx",117],["hentaihaven.xxx",117],["thetimes.co.uk",118],["newscon.org",119],["true-gaming.net",120],["manga1000.*",121],["batchkun.com",122],["yify-subtitles.org",123],["chat.tchatche.com",124],["cryptoearns.com",125],["pureleaks.net",126],["starzunion.com",127],["androidecuatoriano.xyz",127],["satdl.com",128],["osuskinner.com",129],["osuskins.net",129],["tekkenmods.com",130],["chickenkarts.io",131],["kiddyearner.com",132],["dood.*",133],["doods.pro",133],["dooodster.com",133],["dooood.*",133],["ds2play.com",133],["popcdn.day",134],["pak-mcqs.net",135],["ragnarokscanlation.opchapters.com",136],["frogogo.ru",137]]);
const exceptionsMap = new Map([["pingit.com",[3]],["pingit.me",[3]]]);
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
