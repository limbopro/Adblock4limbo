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

// ruleset: ublock-filters

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
const argsList = [["SZAdBlockDetection"],["_sp_"],["yafaIt"],["Fingerprint2"],["adcashMacros"],["open"],["openLity"],["ad_abblock_ad"],["Adcash"],["cticodes"],["imgadbpops"],["__aaZoneid"],["IS_ADBLOCK"],["__NA"],["ads_priv"],["ab_detected"],["t4PP"],["sc_adv_out"],["pURL"],["AdBlockDetectorWorkaround"],["__htapop"],["atOptions"],["popzone"],["encodeURIComponent"],["stagedPopUnder"],["closeMyAd"],["smrtSP"],["tiPopAction"],["ExoLoader"],["adv_pre_duration"],["adv_post_duration"],["hidekeep"],["ShowAdbblock"],["lifeOnwer"],["smrtSB"],["EPeventFire"],["adBlockDetected"],["segs_pop"],["$getWin"],["xhr.prototype.realSend"],["popUpUrl"],["btoa"],["decodeURIComponent"],["adsHeight"],["adsBlocked"],["SubmitDownload1"],["getIfc"],["adBlockRunning"],["I833"],["Aloader"],["bindall"],["KillAdBlock"],["checkAdBlocker"],["deployads"],["close_screen"],["mockingbird"],["checkAds"],["check"],["decodeURI"],["downloadJSAtOnload"],["ReactAds"],["phtData"],["killAdBlock"],["adBlocker"],["Ha"],["spot"],["block_detected"],["document.getElementsByClassName"],["ABD"],["mfbDetect"],["ab_cl"],["ai_adb_overlay"],["showMsgAb"],["wutimeBotPattern"],["popup_ads"],["adblockerpopup"],["adblockCheck"],["cancelAdBlocker"],["adblock"],["ExoSupport"],["mobilePop"],["base64_decode"],["mdp_deblocker"],["showModal"],["daCheckManager"],["backgroundBanner"],["AdBDetected"],["onScriptError"],["AdbModel"],["window.onload"],["displayCache"],["SpecialUp"],["ai_front"],["tmnramp"],["onpopstate"],["__C"],["HTMLElement.prototype.insertAdjacentHTML"],["app_advert"],["puShown"],["ospen"],["afScript"],["b2a"],["_chjeuHenj"],["bullads"],["detector_launch"],["afStorage"],["adBlocked"],["u_cfg"],["p$00a"],["c325"],["akadb"],["BetterJsPop"],["DOMAssistant"],["rotator"],["Script_Manager"],["NREUM"],["pbjs"],["detectAdblocker"],["document.ready"],["auto_safelink"],["counter"],["adBlckActive"],["infoey"],["popName"],["checkAdsStatus"],["protection"],["uBlockActive"],["HTMLScriptElement.prototype.onerror"],["canRunAds"],["DoodPop"],["probeScript"],["detectedAdblock"],["_pop"],["showADBOverlay"],["adbEnableForPage"],["Fingerprent2"],["opopnso"],["c0ZZ"],["EnhancedAdBlockDetector"],["checkForAdBlocker"],["ADMITAD"],["ftr__startScriptLoad"],["CoinNebula"]];
const hostnamesMap = new Map([["sueddeutsche.de",0],["autobytel.com",1],["cesoirtv.com",1],["huffingtonpost.co.uk",1],["huffingtonpost.com",1],["moviefone.com",1],["playboy.de",1],["car.com",1],["codeproject.com",1],["familyhandyman.com",1],["goldderby.com",1],["headlinepolitics.com",1],["html.net",1],["indiewire.com",1],["marmiton.org",1],["mymotherlode.com",1],["nypost.com",1],["realgm.com",1],["tvline.com",1],["wwd.com",1],["bordertelegraph.com",1],["bournemouthecho.co.uk",1],["dailyecho.co.uk",1],["dorsetecho.co.uk",1],["eveningtimes.co.uk",1],["guardian-series.co.uk",1],["heraldscotland.com",1],["iwcp.co.uk",1],["lancashiretelegraph.co.uk",1],["oxfordmail.co.uk",1],["salisburyjournal.co.uk",1],["theargus.co.uk",1],["thetelegraphandargus.co.uk",1],["yorkpress.co.uk",1],["wunderground.com",1],["lapresse.ca",1],["eurogamer.net",2],["rockpapershotgun.com",2],["vg247.com",2],["dfiles.eu",3],["downsub.com",3],["j.gs",3],["macserial.com",3],["microify.com",3],["minecraft-forum.net",3],["onmovies.*",3],["pirateproxy.*",3],["psarips.*",3],["solidfiles.com",3],["thepiratebay.org",3],["uptobox.com",3],["steamplay.*",[3,4,142]],["adshort.*",3],["pic-upload.de",3],["oke.io",3],["dz4link.com",3],["imgdew.*",3],["imgmaze.*",3],["imgoutlet.*",3],["imgtown.*",3],["imgview.*",3],["imgclick.net",3],["adsrt.*",3],["mp3guild.*",3],["mp3clan.*",3],["downloadpirate.com",3],["grantorrent.*",3],["grantorrent1.*",3],["ddlvalley.*",3],["inkapelis.*",[3,26,34]],["pnd.*",3],["spycock.com",3],["ausfile.com",[3,45]],["xrivonet.info",3],["imgrock.*",3],["hdvid.*",[3,21,34]],["onvid.*",[3,34]],["ovid.*",[3,34]],["vidhd.*",[3,34]],["crohasit.*",3],["streamingworld.*",3],["putlocker9.*",3],["kstreaming.*",3],["pingit.*",3],["tusfiles.com",3],["hexupload.net",3],["yggtorrent.*",3],["iir.ai",3],["souqsky.net",3],["racaty.*",3],["miraculous.to",3],["movie123.*",3],["file-upload.*",3],["pouvideo.*",[3,4,135]],["povvideo.*",[3,4,135]],["povvldeo.*",3],["povw1deo.*",[3,4,135]],["povwideo.*",[3,4,135]],["powv1deo.*",[3,4,135]],["powvibeo.*",[3,4,135]],["powvideo.*",[3,4,135]],["powvldeo.*",[3,4,135]],["putlocker.*",[4,5]],["mp4upload.com",4],["mitly.us",[4,21]],["pelisplus.*",[4,26,34]],["pelisplushd.*",4],["shrt10.com",4],["pelix.*",[4,26,34]],["atomixhq.*",4],["pctfenix.*",4],["pctnew.*",4],["fembed.*",4],["mavplay.*",4],["videobb.*",4],["ebook3000.com",4],["longfiles.com",4],["shorttey.*",4],["elitetorrent.*",4],["estrenosflix.*",4],["estrenosflux.*",4],["estrenosgo.*",4],["tormalayalam.*",4],["ytanime.tv",4],["cine-calidad.*",4],["extratorrents.*",4],["glotorrents.fr-proxy.com",[4,58]],["rmdown.com",5],["xopenload.me",5],["at.wetter.com",6],["powerthesaurus.org",7],["yts.*",8],["embedstreams.top",8],["gogoanime.co.in",8],["icelz.to",8],["streamtp1.com",8],["flstv.online",8],["mmastreams.me",8],["mylivestream.pro",8],["streambtw.com",8],["tennisonline.me",8],["voodc.com",8],["sportsonline.so",8],["onloop.pro",8],["anarchy-stream.com",8],["olalivehdplay.ru",8],["pawastreams.info",8],["vidlink.pro",8],["wooflix.tv",8],["imgadult.com",[9,10]],["imgdrive.net",[9,10]],["imgtaxi.com",[9,10]],["imgwallet.com",[9,10]],["sxyprn.*",11],["streamhub.*",11],["nozomi.la",11],["nudostar.com",11],["slutmesh.net",11],["azel.info",11],["clip-sex.biz",11],["justpicsplease.com",11],["klmanga.*",11],["lucagrassetti.com",11],["manga1001.*",11],["mangaraw.*",11],["mangarawjp.*",11],["mihand.ir",11],["nudecelebsimages.com",11],["overwatchporn.xxx",11],["pornium.net",11],["xnxxw.net",11],["xxxymovies.com",11],["yurineko.net",11],["tokyomotion.com",11],["tube8.*",12],["hdpornt.com",13],["4tube.com",14],["pornerbros.com",14],["perfectgirls.*",14],["perfektdamen.*",14],["uflash.tv",14],["mp3cut.net",15],["mcfucker.com",16],["taroot-rangi.com",17],["mangoporn.net",18],["xiaopan.co",19],["parents.at",19],["realgfporn.com",20],["linkrex.net",20],["alotporn.com",20],["payskip.org",21],["imgdawgknuttz.com",21],["shorterall.com",21],["descarga.xyz",[21,34]],["adcorto.*",21],["ukrainesmodels.com",21],["sexuhot.com",21],["messitv.net",21],["empflix.com",22],["freeviewmovies.com",23],["badjojo.com",23],["boysfood.com",23],["pornhost.com",23],["sextingforum.net",24],["rojadirecta.*",[25,26]],["tarjetarojatvonline.*",[25,26]],["rojadirectatv.*",26],["aquipelis.*",[26,34]],["newpelis.*",[26,34]],["legionprogramas.org",[26,34]],["befap.com",27],["erome.com",27],["pictoa.com",27],["cumlouder.com",28],["chyoa.com",28],["cnnamador.com",[29,30]],["arlinadzgn.com",31],["idntheme.com",31],["problogbooster.com",31],["pronpic.org",32],["op.gg",33],["ciberdvd.*",34],["pelisgratis.*",34],["peliculas24.*",34],["voirfilms.*",34],["pastepvp.org",34],["programasvirtualespc.net",34],["cinetux.*",34],["thevidhd.*",34],["allcalidad.*",34],["awdescargas.com",34],["megawarez.org",34],["eporner.com",35],["theralphretort.com",36],["yoututosjeff.*",36],["androidaba.*",36],["vidcloud.*",36],["seselah.com",36],["descarga-animex.*",36],["bollywoodshaadis.com",36],["practicequiz.com",36],["wapkiz.com",36],["pianokafe.com",36],["apritos.com",36],["bsierad.com",36],["diminimalis.com",36],["eksporimpor.com",36],["jadijuara.com",36],["kicaunews.com",36],["palapanews.com",36],["ridvanmau.com",36],["yeutienganh.com",36],["telecharger-igli4.*",36],["aalah.me",36],["academiadelmotor.es",36],["aiailah.com",36],["almursi.com",36],["altebwsneno.blogspot.com",36],["ambonkita.com",36],["androidspill.com",36],["aplus.my.id",36],["arrisalah-jakarta.com",36],["babyjimaditya.com",36],["bbyhaber.com",36],["beritabangka.com",36],["beritasulteng.com",36],["bestsellerforaday.com",36],["bintangplus.com",36],["bitco.world",36],["br.nacaodamusica.com",36],["bracontece.com.br",36],["dicariguru.com",36],["fairforexbrokers.com",36],["foguinhogames.net",36],["formasyonhaber.net",36],["fullvoyeur.com",36],["healbot.dpm15.net",36],["indofirmware.site",36],["hagalil.com",36],["latribunadelpaisvasco.com",36],["line-stickers.com",36],["luxurydreamhomes.net",36],["m5g.it",36],["miltonfriedmancores.org",36],["minutolivre.com",36],["oportaln10.com.br",36],["pedroinnecco.com",36],["philippinenmagazin.de",36],["piazzagallura.org",36],["pornflixhd.com",36],["safehomefarm.com",36],["synoniemboek.com",36],["techacrobat.com",36],["elizabeth-mitchell.org",36],["mongri.net",36],["svapo.it",36],["papalah.com",36],["pipocamoderna.com.br",36],["space.tribuntekno.com",36],["lampungway.com",36],["notiziemusica.it",36],["peliculasmx.net",37],["geo.fr",38],["cbc.ca",39],["cuevana3.*",40],["igg-games.com",41],["foumovies.*",42],["holavid.com",42],["downloadming.*",42],["tasma.ru",42],["vinaurl.*",43],["zigforums.com",44],["hotpornfile.org",46],["donnaglamour.it",47],["elixx.*",48],["pornvideospass.com",[49,50]],["svipvids.com",51],["jnovels.com",51],["chd4.com",52],["forum.cstalking.tv",52],["namemc.com",53],["hawtcelebs.com",54],["canadianunderwriter.ca",55],["creativebusybee.com",56],["ohorse.com",57],["myegy.*",58],["freepornhdonlinegay.com",58],["gsm1x.xyz",59],["softwarecrackguru.com",59],["hotgameplus.com",59],["mrdeepfakes.com",[60,61]],["donk69.com",61],["hotdreamsxxx.com",61],["puzzlefry.com",62],["theglobeandmail.com",63],["mtlblog.com",64],["narcity.com",64],["thepiratebay.*",65],["thepiratebay10.org",65],["jizzbunker.com",65],["xxxdan.com",65],["mtsproducoes.*",66],["moonquill.com",67],["macrotrends.net",68],["investmentwatchblog.com",68],["myfreeblack.com",69],["notebookcheck.*",70],["mysostech.com",71],["medihelp.life",71],["camchickscaps.com",71],["filesharing.io",72],["dreamdth.com",73],["acefile.co",74],["beautypackaging.com",75],["puhutv.com",76],["oranhightech.com",77],["mad4wheels.com",78],["allporncomic.com",79],["m.viptube.com",80],["kingsofteens.com",81],["godmods.com",82],["winit.heatworld.com",83],["shop123.com.tw",84],["boyfriendtv.com",85],["procinehub.com",86],["bookmystrip.com",86],["bitzite.com",87],["aiimgvlog.fun",88],["laweducationinfo.com",89],["savemoneyinfo.com",89],["worldaffairinfo.com",89],["godstoryinfo.com",89],["successstoryinfo.com",89],["cxissuegk.com",89],["learnmarketinfo.com",89],["bhugolinfo.com",89],["armypowerinfo.com",89],["rsgamer.app",89],["phonereviewinfo.com",89],["makeincomeinfo.com",89],["gknutshell.com",89],["vichitrainfo.com",89],["workproductivityinfo.com",89],["dopomininfo.com",89],["hostingdetailer.com",89],["fitnesssguide.com",89],["tradingfact4u.com",89],["cryptofactss.com",89],["softwaredetail.com",89],["artoffocas.com",89],["insurancesfact.com",89],["travellingdetail.com",89],["pngitem.com",89],["tubev.sex",90],["xnxx-sexfilme.com",91],["mc-hacks.net",92],["meicho.marcsimz.com",92],["wristreview.com",92],["tomshardware.*",93],["hentaifreak.org",94],["moviesnation.*",94],["animepahe.*",95],["th-cam.com",96],["jocooks.com",96],["kusonime.com",97],["movies4u.*",97],["anime7.download",97],["hotscopes.*",98],["kat.*",99],["katbay.*",99],["kickass.*",99],["kickasshydra.*",99],["kickasskat.*",99],["kickass2.*",99],["kickasstorrents.*",99],["kat2.*",99],["kattracker.*",99],["thekat.*",99],["thekickass.*",99],["kickassz.*",99],["kickasstorrents2.*",99],["topkickass.*",99],["kickassgo.*",99],["kkickass.*",99],["kkat.*",99],["kickasst.*",99],["kick4ss.*",99],["akwam.*",100],["khsm.io",100],["ubuntudde.com",101],["depvailon.com",102],["gload.to",103],["agrarwetter.net",104],["extratorrent.*",105],["torrentstatus.*",105],["yts2.*",105],["y2mate.*",105],["leaknud.com",105],["daddylive.*",105],["archpaper.com",106],["livetvon.*",107],["daddylivehd.*",107],["worldstreams.click",107],["dlhd.sx",107],["hdmoviesflix.*",108],["pornkai.com",109],["tubesafari.com",109],["writedroid.*",110],["zedporn.com",111],["diendancauduong.com",[112,113]],["hanime.xxx",114],["hentaihaven.xxx",114],["thetimes.co.uk",115],["newscon.org",116],["true-gaming.net",117],["manga1000.*",118],["batchkun.com",119],["yify-subtitles.org",120],["chat.tchatche.com",121],["cryptoearns.com",122],["pureleaks.net",123],["starzunion.com",124],["androidecuatoriano.xyz",124],["satdl.com",125],["osuskinner.com",126],["osuskins.net",126],["tekkenmods.com",127],["kiddyearner.com",128],["dood.*",129],["doods.*",129],["dooodster.com",129],["dooood.*",129],["ds2play.com",129],["overtake.gg",130],["popcdn.day",131],["pak-mcqs.net",132],["rubystm.com",133],["rubyvid.com",133],["rubyvidhub.com",133],["stmruby.com",133],["streamruby.com",133],["savefiles.com",133],["ragnarokscanlation.opchapters.com",134],["powcloud.org",[136,137]],["indexsubtitle.cc",138],["premierfantasytools.com",139],["frogogo.ru",140],["mediamarkt.de",141]]);
const exceptionsMap = new Map([["pingit.com",[3]]]);
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
