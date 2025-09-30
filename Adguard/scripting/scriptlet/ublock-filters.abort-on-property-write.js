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
const argsList = [["SZAdBlockDetection"],["_sp_"],["yafaIt"],["Fingerprint2"],["adcashMacros"],["open"],["openLity"],["ad_abblock_ad"],["Adcash"],["cticodes"],["imgadbpops"],["__aaZoneid"],["IS_ADBLOCK"],["__NA"],["ads_priv"],["ab_detected"],["t4PP"],["sc_adv_out"],["pURL"],["AdBlockDetectorWorkaround"],["__htapop"],["atOptions"],["popzone"],["encodeURIComponent"],["stagedPopUnder"],["closeMyAd"],["smrtSP"],["tiPopAction"],["ExoLoader"],["adv_pre_duration"],["adv_post_duration"],["hidekeep"],["ShowAdbblock"],["smrtSB"],["EPeventFire"],["adBlockDetected"],["segs_pop"],["$getWin"],["xhr.prototype.realSend"],["popUpUrl"],["btoa"],["decodeURIComponent"],["adsHeight"],["adsBlocked"],["SubmitDownload1"],["getIfc"],["adBlockRunning"],["I833"],["Aloader"],["bindall"],["KillAdBlock"],["checkAdBlocker"],["deployads"],["close_screen"],["mockingbird"],["checkAds"],["check"],["decodeURI"],["downloadJSAtOnload"],["ReactAds"],["phtData"],["killAdBlock"],["adBlocker"],["Ha"],["spot"],["block_detected"],["document.getElementsByClassName"],["ABD"],["mfbDetect"],["ab_cl"],["ai_adb_overlay"],["showMsgAb"],["wutimeBotPattern"],["popup_ads"],["adblockerpopup"],["adblockCheck"],["cancelAdBlocker"],["adblock"],["ExoSupport"],["mobilePop"],["base64_decode"],["mdp_deblocker"],["showModal"],["daCheckManager"],["backgroundBanner"],["AdBDetected"],["onScriptError"],["AdbModel"],["window.onload"],["_pop"],["displayCache"],["SpecialUp"],["ai_front"],["DoodPop"],["tmnramp"],["onpopstate"],["__C"],["HTMLElement.prototype.insertAdjacentHTML"],["app_advert"],["puShown"],["ospen"],["afScript"],["b2a"],["_chjeuHenj"],["bullads"],["detector_launch"],["afStorage"],["adBlocked"],["u_cfg"],["p$00a"],["c325"],["akadb"],["BetterJsPop"],["DOMAssistant"],["rotator"],["Script_Manager"],["NREUM"],["pbjs"],["detectAdblocker"],["document.ready"],["auto_safelink"],["counter"],["adBlckActive"],["infoey"],["popName"],["checkAdsStatus"],["protection"],["uBlockActive"],["HTMLScriptElement.prototype.onerror"],["canRunAds"],["probeScript"],["detectedAdblock"],["showADBOverlay"],["adbEnableForPage"],["Fingerprent2"],["opopnso"],["c0ZZ"],["lifeOnwer"],["EnhancedAdBlockDetector"],["checkForAdBlocker"],["ADMITAD"],["ftr__startScriptLoad"],["CoinNebula"]];
const hostnamesMap = new Map([["sueddeutsche.de",0],["autobytel.com",1],["cesoirtv.com",1],["huffingtonpost.co.uk",1],["huffingtonpost.com",1],["moviefone.com",1],["playboy.de",1],["car.com",1],["codeproject.com",1],["familyhandyman.com",1],["goldderby.com",1],["headlinepolitics.com",1],["html.net",1],["indiewire.com",1],["marmiton.org",1],["mymotherlode.com",1],["nypost.com",1],["realgm.com",1],["tvline.com",1],["wwd.com",1],["bordertelegraph.com",1],["bournemouthecho.co.uk",1],["dailyecho.co.uk",1],["dorsetecho.co.uk",1],["eveningtimes.co.uk",1],["guardian-series.co.uk",1],["heraldscotland.com",1],["iwcp.co.uk",1],["lancashiretelegraph.co.uk",1],["oxfordmail.co.uk",1],["salisburyjournal.co.uk",1],["theargus.co.uk",1],["thetelegraphandargus.co.uk",1],["yorkpress.co.uk",1],["wunderground.com",1],["lapresse.ca",1],["eurogamer.net",2],["rockpapershotgun.com",2],["vg247.com",2],["dfiles.eu",3],["downsub.com",3],["j.gs",3],["macserial.com",3],["microify.com",3],["minecraft-forum.net",3],["onmovies.*",3],["pirateproxy.*",3],["psarips.*",3],["solidfiles.com",3],["thepiratebay.org",3],["uptobox.com",3],["steamplay.*",[3,4,142]],["adshort.*",3],["pic-upload.de",3],["oke.io",3],["dz4link.com",3],["imgdew.*",3],["imgmaze.*",3],["imgoutlet.*",3],["imgtown.*",3],["imgview.*",3],["imgclick.net",3],["adsrt.*",3],["mp3guild.*",3],["mp3clan.*",3],["downloadpirate.com",3],["grantorrent.*",3],["grantorrent1.*",3],["ddlvalley.*",3],["inkapelis.*",[3,26,33]],["pnd.*",3],["spycock.com",3],["ausfile.com",[3,44]],["xrivonet.info",3],["imgrock.*",3],["hdvid.*",[3,21,33]],["onvid.*",[3,33]],["ovid.*",[3,33]],["vidhd.*",[3,33]],["crohasit.*",3],["streamingworld.*",3],["putlocker9.*",3],["kstreaming.*",3],["pingit.*",3],["tusfiles.com",3],["hexupload.net",3],["yggtorrent.*",3],["iir.ai",3],["souqsky.net",3],["racaty.*",3],["miraculous.to",3],["movie123.*",3],["file-upload.*",3],["pouvideo.*",[3,4,134]],["povvideo.*",[3,4,134]],["povvldeo.*",3],["povw1deo.*",[3,4,134]],["povwideo.*",[3,4,134]],["powv1deo.*",[3,4,134]],["powvibeo.*",[3,4,134]],["powvideo.*",[3,4,134]],["powvldeo.*",[3,4,134]],["putlocker.*",[4,5]],["mp4upload.com",4],["mitly.us",[4,21]],["pelisplus.*",[4,26,33]],["pelisplushd.*",4],["shrt10.com",4],["pelix.*",[4,26,33]],["atomixhq.*",4],["pctfenix.*",4],["pctnew.*",4],["fembed.*",4],["mavplay.*",4],["videobb.*",4],["ebook3000.com",4],["longfiles.com",4],["shorttey.*",4],["elitetorrent.*",4],["estrenosflix.*",4],["estrenosflux.*",4],["estrenosgo.*",4],["tormalayalam.*",4],["ytanime.tv",4],["cine-calidad.*",4],["extratorrents.*",4],["glotorrents.fr-proxy.com",[4,57]],["rmdown.com",5],["xopenload.me",5],["at.wetter.com",6],["powerthesaurus.org",7],["yts.*",8],["embedstreams.top",8],["gogoanime.co.in",8],["icelz.to",8],["streamtp1.com",8],["flstv.online",8],["mmastreams.me",8],["mylivestream.pro",8],["streambtw.com",8],["tennisonline.me",8],["voodc.com",8],["sportsonline.so",8],["onloop.pro",8],["anarchy-stream.com",8],["olalivehdplay.ru",8],["pawastreams.info",8],["vidlink.pro",8],["wooflix.tv",8],["imgadult.com",[9,10]],["imgdrive.net",[9,10]],["imgtaxi.com",[9,10]],["imgwallet.com",[9,10]],["sxyprn.*",11],["streamhub.*",11],["nozomi.la",11],["nudostar.com",11],["slutmesh.net",11],["azel.info",11],["clip-sex.biz",11],["justpicsplease.com",11],["klmanga.*",11],["lucagrassetti.com",11],["manga1001.*",11],["mangaraw.*",11],["mangarawjp.*",11],["mihand.ir",11],["nudecelebsimages.com",11],["overwatchporn.xxx",11],["pornium.net",11],["xnxxw.net",11],["xxxymovies.com",11],["yurineko.net",11],["tokyomotion.com",11],["tube8.*",12],["hdpornt.com",13],["4tube.com",14],["pornerbros.com",14],["perfectgirls.*",14],["perfektdamen.*",14],["uflash.tv",14],["mp3cut.net",15],["mcfucker.com",16],["taroot-rangi.com",17],["mangoporn.net",18],["xiaopan.co",19],["parents.at",19],["realgfporn.com",20],["linkrex.net",20],["alotporn.com",20],["payskip.org",21],["imgdawgknuttz.com",21],["shorterall.com",21],["descarga.xyz",[21,33]],["adcorto.*",21],["ukrainesmodels.com",21],["sexuhot.com",21],["messitv.net",21],["empflix.com",22],["freeviewmovies.com",23],["badjojo.com",23],["boysfood.com",23],["pornhost.com",23],["sextingforum.net",24],["rojadirecta.*",[25,26]],["tarjetarojatvonline.*",[25,26]],["rojadirectatv.*",26],["aquipelis.*",[26,33]],["newpelis.*",[26,33]],["legionprogramas.org",[26,33]],["befap.com",27],["erome.com",27],["pictoa.com",27],["cumlouder.com",28],["chyoa.com",28],["cnnamador.com",[29,30]],["arlinadzgn.com",31],["idntheme.com",31],["problogbooster.com",31],["pronpic.org",32],["ciberdvd.*",33],["pelisgratis.*",33],["peliculas24.*",33],["voirfilms.*",33],["pastepvp.org",33],["programasvirtualespc.net",33],["cinetux.*",33],["thevidhd.*",33],["allcalidad.*",33],["awdescargas.com",33],["megawarez.org",33],["eporner.com",34],["theralphretort.com",35],["yoututosjeff.*",35],["androidaba.*",35],["vidcloud.*",35],["seselah.com",35],["descarga-animex.*",35],["bollywoodshaadis.com",35],["practicequiz.com",35],["wapkiz.com",35],["pianokafe.com",35],["apritos.com",35],["bsierad.com",35],["diminimalis.com",35],["eksporimpor.com",35],["jadijuara.com",35],["kicaunews.com",35],["palapanews.com",35],["ridvanmau.com",35],["yeutienganh.com",35],["telecharger-igli4.*",35],["aalah.me",35],["academiadelmotor.es",35],["aiailah.com",35],["almursi.com",35],["altebwsneno.blogspot.com",35],["ambonkita.com",35],["androidspill.com",35],["aplus.my.id",35],["arrisalah-jakarta.com",35],["babyjimaditya.com",35],["bbyhaber.com",35],["beritabangka.com",35],["beritasulteng.com",35],["bestsellerforaday.com",35],["bintangplus.com",35],["bitco.world",35],["br.nacaodamusica.com",35],["bracontece.com.br",35],["dicariguru.com",35],["fairforexbrokers.com",35],["foguinhogames.net",35],["formasyonhaber.net",35],["fullvoyeur.com",35],["healbot.dpm15.net",35],["indofirmware.site",35],["hagalil.com",35],["latribunadelpaisvasco.com",35],["line-stickers.com",35],["luxurydreamhomes.net",35],["m5g.it",35],["miltonfriedmancores.org",35],["minutolivre.com",35],["oportaln10.com.br",35],["pedroinnecco.com",35],["philippinenmagazin.de",35],["piazzagallura.org",35],["pornflixhd.com",35],["safehomefarm.com",35],["synoniemboek.com",35],["techacrobat.com",35],["elizabeth-mitchell.org",35],["mongri.net",35],["svapo.it",35],["papalah.com",35],["pipocamoderna.com.br",35],["space.tribuntekno.com",35],["lampungway.com",35],["notiziemusica.it",35],["peliculasmx.net",36],["geo.fr",37],["cbc.ca",38],["cuevana3.*",39],["igg-games.com",40],["foumovies.*",41],["holavid.com",41],["downloadming.*",41],["tasma.ru",41],["vinaurl.*",42],["zigforums.com",43],["hotpornfile.org",45],["donnaglamour.it",46],["elixx.*",47],["pornvideospass.com",[48,49]],["svipvids.com",50],["jnovels.com",50],["chd4.com",51],["forum.cstalking.tv",51],["namemc.com",52],["hawtcelebs.com",53],["canadianunderwriter.ca",54],["creativebusybee.com",55],["ohorse.com",56],["myegy.*",57],["freepornhdonlinegay.com",57],["gsm1x.xyz",58],["softwarecrackguru.com",58],["hotgameplus.com",58],["mrdeepfakes.com",[59,60]],["donk69.com",60],["hotdreamsxxx.com",60],["puzzlefry.com",61],["theglobeandmail.com",62],["mtlblog.com",63],["narcity.com",63],["thepiratebay.*",64],["thepiratebay10.org",64],["jizzbunker.com",64],["xxxdan.com",64],["mtsproducoes.*",65],["moonquill.com",66],["macrotrends.net",67],["investmentwatchblog.com",67],["myfreeblack.com",68],["notebookcheck.*",69],["mysostech.com",70],["medihelp.life",70],["camchickscaps.com",70],["filesharing.io",71],["dreamdth.com",72],["acefile.co",73],["beautypackaging.com",74],["puhutv.com",75],["oranhightech.com",76],["mad4wheels.com",77],["allporncomic.com",78],["m.viptube.com",79],["kingsofteens.com",80],["godmods.com",81],["winit.heatworld.com",82],["shop123.com.tw",83],["boyfriendtv.com",84],["procinehub.com",85],["bookmystrip.com",85],["bitzite.com",86],["aiimgvlog.fun",87],["laweducationinfo.com",88],["savemoneyinfo.com",88],["worldaffairinfo.com",88],["godstoryinfo.com",88],["successstoryinfo.com",88],["cxissuegk.com",88],["learnmarketinfo.com",88],["bhugolinfo.com",88],["armypowerinfo.com",88],["rsgamer.app",88],["phonereviewinfo.com",88],["makeincomeinfo.com",88],["gknutshell.com",88],["vichitrainfo.com",88],["workproductivityinfo.com",88],["dopomininfo.com",88],["hostingdetailer.com",88],["fitnesssguide.com",88],["tradingfact4u.com",88],["cryptofactss.com",88],["softwaredetail.com",88],["artoffocas.com",88],["insurancesfact.com",88],["travellingdetail.com",88],["pngitem.com",88],["canna.to",89],["pak-mcqs.net",89],["tubev.sex",90],["xnxx-sexfilme.com",91],["mc-hacks.net",92],["meicho.marcsimz.com",92],["wristreview.com",92],["dood.*",93],["doods.*",93],["dooodster.com",93],["dooood.*",93],["ds2play.com",93],["tomshardware.*",94],["hentaifreak.org",95],["moviesnation.*",95],["animepahe.*",96],["th-cam.com",97],["jocooks.com",97],["kusonime.com",98],["movies4u.*",98],["anime7.download",98],["hotscopes.*",99],["kat.*",100],["katbay.*",100],["kickass.*",100],["kickasshydra.*",100],["kickasskat.*",100],["kickass2.*",100],["kickasstorrents.*",100],["kat2.*",100],["kattracker.*",100],["thekat.*",100],["thekickass.*",100],["kickassz.*",100],["kickasstorrents2.*",100],["topkickass.*",100],["kickassgo.*",100],["kkickass.*",100],["kkat.*",100],["kickasst.*",100],["kick4ss.*",100],["akwam.*",101],["khsm.io",101],["ubuntudde.com",102],["depvailon.com",103],["gload.to",104],["agrarwetter.net",105],["extratorrent.*",106],["torrentstatus.*",106],["yts2.*",106],["y2mate.*",106],["leaknud.com",106],["daddylive.*",106],["archpaper.com",107],["livetvon.*",108],["daddylivehd.*",108],["worldstreams.click",108],["dlhd.sx",108],["hdmoviesflix.*",109],["pornkai.com",110],["tubesafari.com",110],["writedroid.*",111],["zedporn.com",112],["diendancauduong.com",[113,114]],["hanime.xxx",115],["hentaihaven.xxx",115],["thetimes.co.uk",116],["newscon.org",117],["true-gaming.net",118],["manga1000.*",119],["batchkun.com",120],["yify-subtitles.org",121],["chat.tchatche.com",122],["cryptoearns.com",123],["pureleaks.net",124],["starzunion.com",125],["androidecuatoriano.xyz",125],["satdl.com",126],["osuskinner.com",127],["osuskins.net",127],["tekkenmods.com",128],["kiddyearner.com",129],["overtake.gg",130],["popcdn.day",131],["rubystm.com",132],["rubyvid.com",132],["rubyvidhub.com",132],["stmruby.com",132],["streamruby.com",132],["savefiles.com",132],["ragnarokscanlation.opchapters.com",133],["powcloud.org",[135,136]],["op.gg",137],["indexsubtitle.cc",138],["premierfantasytools.com",139],["frogogo.ru",140],["mediamarkt.de",141]]);
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
