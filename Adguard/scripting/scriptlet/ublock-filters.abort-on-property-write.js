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
const argsList = [["SZAdBlockDetection"],["_sp_"],["yafaIt"],["Fingerprint2"],["Fingerprent2"],["adcashMacros"],["open"],["openLity"],["ad_abblock_ad"],["Adcash"],["cticodes"],["imgadbpops"],["__aaZoneid"],["IS_ADBLOCK"],["__NA"],["ads_priv"],["ab_detected"],["t4PP"],["sc_adv_out"],["pURL"],["AdBlockDetectorWorkaround"],["__htapop"],["atOptions"],["popzone"],["encodeURIComponent"],["stagedPopUnder"],["closeMyAd"],["smrtSP"],["tiPopAction"],["ExoLoader"],["adv_pre_duration"],["adv_post_duration"],["hidekeep"],["ShowAdbblock"],["lifeOnwer"],["smrtSB"],["EPeventFire"],["adBlockDetected"],["segs_pop"],["$getWin"],["xhr.prototype.realSend"],["popUpUrl"],["btoa"],["decodeURIComponent"],["adsHeight"],["adsBlocked"],["SubmitDownload1"],["getIfc"],["adBlockRunning"],["I833"],["Aloader"],["bindall"],["KillAdBlock"],["checkAdBlocker"],["deployads"],["close_screen"],["mockingbird"],["checkAds"],["check"],["decodeURI"],["downloadJSAtOnload"],["ReactAds"],["phtData"],["killAdBlock"],["adBlocker"],["Ha"],["spot"],["block_detected"],["document.getElementsByClassName"],["ABD"],["mfbDetect"],["ab_cl"],["ai_adb_overlay"],["showMsgAb"],["wutimeBotPattern"],["popup_ads"],["adblockerpopup"],["adblockCheck"],["cancelAdBlocker"],["adblock"],["ExoSupport"],["mobilePop"],["base64_decode"],["mdp_deblocker"],["showModal"],["daCheckManager"],["backgroundBanner"],["AdBDetected"],["onScriptError"],["AdbModel"],["window.onload"],["displayCache"],["SpecialUp"],["ai_front"],["tmnramp"],["onpopstate"],["__C"],["HTMLElement.prototype.insertAdjacentHTML"],["app_advert"],["puShown"],["ospen"],["afScript"],["b2a"],["_chjeuHenj"],["bullads"],["detector_launch"],["afStorage"],["adBlocked"],["u_cfg"],["p$00a"],["c325"],["akadb"],["BetterJsPop"],["DOMAssistant"],["rotator"],["Script_Manager"],["NREUM"],["pbjs"],["detectAdblocker"],["document.ready"],["auto_safelink"],["counter"],["adBlckActive"],["infoey"],["popName"],["checkAdsStatus"],["protection"],["uBlockActive"],["HTMLScriptElement.prototype.onerror"],["canRunAds"],["DoodPop"],["detectedAdblock"],["_pop"],["showADBOverlay"],["adbEnableForPage"],["ADMITAD"],["ftr__startScriptLoad"],["CoinNebula"]];
const hostnamesMap = new Map([["sueddeutsche.de",0],["autobytel.com",1],["cesoirtv.com",1],["huffingtonpost.co.uk",1],["huffingtonpost.com",1],["moviefone.com",1],["playboy.de",1],["car.com",1],["codeproject.com",1],["familyhandyman.com",1],["goldderby.com",1],["headlinepolitics.com",1],["html.net",1],["indiewire.com",1],["marmiton.org",1],["mymotherlode.com",1],["nypost.com",1],["realgm.com",1],["tvline.com",1],["wwd.com",1],["bordertelegraph.com",1],["bournemouthecho.co.uk",1],["dailyecho.co.uk",1],["dorsetecho.co.uk",1],["eveningtimes.co.uk",1],["guardian-series.co.uk",1],["heraldscotland.com",1],["iwcp.co.uk",1],["lancashiretelegraph.co.uk",1],["oxfordmail.co.uk",1],["salisburyjournal.co.uk",1],["theargus.co.uk",1],["thetelegraphandargus.co.uk",1],["yorkpress.co.uk",1],["wunderground.com",1],["lapresse.ca",1],["eurogamer.net",2],["rockpapershotgun.com",2],["vg247.com",2],["dfiles.eu",3],["downsub.com",3],["j.gs",3],["macserial.com",3],["microify.com",3],["minecraft-forum.net",3],["onmovies.*",3],["pirateproxy.*",3],["psarips.*",3],["solidfiles.com",3],["thepiratebay.org",3],["uptobox.com",3],["steamplay.*",[3,5,137]],["streamp1ay.*",[3,4,5]],["adshort.*",3],["pic-upload.de",3],["oke.io",3],["dz4link.com",3],["imgdew.*",3],["imgmaze.*",3],["imgoutlet.*",3],["imgtown.*",3],["imgview.*",3],["imgclick.net",3],["adsrt.*",3],["mp3guild.*",3],["mp3clan.*",3],["pouvideo.*",[3,4,5]],["povvideo.*",[3,4,5]],["povvldeo.*",3],["povw1deo.*",[3,4,5]],["povwideo.*",[3,4,5]],["powv1deo.*",[3,4,5]],["powvibeo.*",[3,4,5]],["powvideo.*",[3,4,5]],["powvldeo.*",[3,4,5]],["downloadpirate.com",3],["grantorrent.*",3],["grantorrent1.*",3],["ddlvalley.*",3],["inkapelis.*",[3,27,35]],["pnd.*",3],["spycock.com",3],["ausfile.com",[3,46]],["xrivonet.info",3],["imgrock.*",3],["hdvid.*",[3,22,35]],["onvid.*",[3,35]],["ovid.*",[3,35]],["vidhd.*",[3,35]],["crohasit.*",3],["streamingworld.*",3],["putlocker9.*",3],["kstreaming.*",3],["pingit.*",3],["tusfiles.com",3],["hexupload.net",3],["yggtorrent.*",3],["iir.ai",3],["souqsky.net",3],["racaty.*",3],["miraculous.to",3],["movie123.*",3],["file-upload.*",3],["putlocker.*",[5,6]],["mp4upload.com",5],["mitly.us",[5,22]],["pelisplus.*",[5,27,35]],["pelisplushd.*",5],["shrt10.com",5],["pelix.*",[5,27,35]],["atomixhq.*",5],["pctfenix.*",5],["pctnew.*",5],["fembed.*",5],["mavplay.*",5],["videobb.*",5],["ebook3000.com",5],["longfiles.com",5],["shorttey.*",5],["elitetorrent.*",5],["estrenosflix.*",5],["estrenosflux.*",5],["estrenosgo.*",5],["tormalayalam.*",5],["ytanime.tv",5],["cine-calidad.*",5],["extratorrents.*",5],["glotorrents.fr-proxy.com",[5,59]],["rmdown.com",6],["xopenload.me",6],["at.wetter.com",7],["powerthesaurus.org",8],["yts.*",9],["embedstreams.top",9],["gogoanime.co.in",9],["icelz.to",9],["streamtp1.com",9],["1qwebplay.xyz",9],["flstv.online",9],["mmastreams.me",9],["mylivestream.pro",9],["streambtw.com",9],["tennisonline.me",9],["voodc.com",9],["closedjelly.net",9],["sportsonline.so",9],["onloop.pro",9],["anarchy-stream.com",9],["olalivehdplay.ru",9],["pawastreams.info",9],["vidlink.pro",9],["wooflix.tv",9],["imgadult.com",[10,11]],["imgdrive.net",[10,11]],["imgtaxi.com",[10,11]],["imgwallet.com",[10,11]],["sxyprn.*",12],["streamhub.*",12],["nozomi.la",12],["nudostar.com",12],["slutmesh.net",12],["azel.info",12],["clip-sex.biz",12],["justpicsplease.com",12],["klmanga.*",12],["lucagrassetti.com",12],["manga1001.*",12],["mangaraw.*",12],["mangarawjp.*",12],["mihand.ir",12],["nudecelebsimages.com",12],["overwatchporn.xxx",12],["pornium.net",12],["xnxxw.net",12],["xxxymovies.com",12],["yurineko.net",12],["tokyomotion.com",12],["tube8.*",13],["hdpornt.com",14],["4tube.com",15],["pornerbros.com",15],["perfectgirls.*",15],["perfektdamen.*",15],["uflash.tv",15],["mp3cut.net",16],["mcfucker.com",17],["taroot-rangi.com",18],["mangoporn.net",19],["xiaopan.co",20],["parents.at",20],["realgfporn.com",21],["linkrex.net",21],["alotporn.com",21],["payskip.org",22],["imgdawgknuttz.com",22],["shorterall.com",22],["descarga.xyz",[22,35]],["adcorto.*",22],["ukrainesmodels.com",22],["sexuhot.com",22],["messitv.net",22],["empflix.com",23],["freeviewmovies.com",24],["badjojo.com",24],["boysfood.com",24],["pornhost.com",24],["sextingforum.net",25],["rojadirecta.*",[26,27]],["tarjetarojatvonline.*",[26,27]],["rojadirectatv.*",27],["aquipelis.*",[27,35]],["newpelis.*",[27,35]],["legionprogramas.org",[27,35]],["befap.com",28],["erome.com",28],["pictoa.com",28],["cumlouder.com",29],["chyoa.com",29],["cnnamador.com",[30,31]],["arlinadzgn.com",32],["idntheme.com",32],["problogbooster.com",32],["pronpic.org",33],["op.gg",34],["ciberdvd.*",35],["pelisgratis.*",35],["peliculas24.*",35],["voirfilms.*",35],["pastepvp.org",35],["programasvirtualespc.net",35],["cinetux.*",35],["thevidhd.*",35],["allcalidad.*",35],["awdescargas.com",35],["megawarez.org",35],["eporner.com",36],["theralphretort.com",37],["yoututosjeff.*",37],["androidaba.*",37],["vidcloud.*",37],["seselah.com",37],["descarga-animex.*",37],["bollywoodshaadis.com",37],["practicequiz.com",37],["wapkiz.com",37],["pianokafe.com",37],["apritos.com",37],["bsierad.com",37],["diminimalis.com",37],["eksporimpor.com",37],["jadijuara.com",37],["kicaunews.com",37],["palapanews.com",37],["ridvanmau.com",37],["yeutienganh.com",37],["telecharger-igli4.*",37],["aalah.me",37],["academiadelmotor.es",37],["aiailah.com",37],["almursi.com",37],["altebwsneno.blogspot.com",37],["ambonkita.com",37],["androidspill.com",37],["aplus.my.id",37],["arrisalah-jakarta.com",37],["babyjimaditya.com",37],["bbyhaber.com",37],["beritabangka.com",37],["beritasulteng.com",37],["bestsellerforaday.com",37],["bintangplus.com",37],["bitco.world",37],["br.nacaodamusica.com",37],["bracontece.com.br",37],["dicariguru.com",37],["fairforexbrokers.com",37],["foguinhogames.net",37],["formasyonhaber.net",37],["fullvoyeur.com",37],["healbot.dpm15.net",37],["indofirmware.site",37],["hagalil.com",37],["latribunadelpaisvasco.com",37],["line-stickers.com",37],["luxurydreamhomes.net",37],["m5g.it",37],["miltonfriedmancores.org",37],["minutolivre.com",37],["oportaln10.com.br",37],["pedroinnecco.com",37],["philippinenmagazin.de",37],["piazzagallura.org",37],["pornflixhd.com",37],["safehomefarm.com",37],["synoniemboek.com",37],["techacrobat.com",37],["elizabeth-mitchell.org",37],["mongri.net",37],["svapo.it",37],["papalah.com",37],["pipocamoderna.com.br",37],["space.tribuntekno.com",37],["lampungway.com",37],["notiziemusica.it",37],["peliculasmx.net",38],["geo.fr",39],["cbc.ca",40],["cuevana3.*",41],["igg-games.com",42],["foumovies.*",43],["holavid.com",43],["downloadming.*",43],["tasma.ru",43],["vinaurl.*",44],["zigforums.com",45],["medeberiyas.com",45],["hotpornfile.org",47],["donnaglamour.it",48],["elixx.*",49],["pornvideospass.com",[50,51]],["svipvids.com",52],["jnovels.com",52],["chd4.com",53],["forum.cstalking.tv",53],["namemc.com",54],["hawtcelebs.com",55],["canadianunderwriter.ca",56],["creativebusybee.com",57],["ohorse.com",58],["myegy.*",59],["freepornhdonlinegay.com",59],["gsm1x.xyz",60],["softwarecrackguru.com",60],["hotgameplus.com",60],["mrdeepfakes.com",[61,62]],["donk69.com",62],["hotdreamsxxx.com",62],["puzzlefry.com",63],["theglobeandmail.com",64],["mtlblog.com",65],["narcity.com",65],["thepiratebay.*",66],["thepiratebay10.org",66],["jizzbunker.com",66],["xxxdan.com",66],["mtsproducoes.*",67],["moonquill.com",68],["macrotrends.net",69],["investmentwatchblog.com",69],["myfreeblack.com",70],["notebookcheck.*",71],["mysostech.com",72],["medihelp.life",72],["camchickscaps.com",72],["filesharing.io",73],["dreamdth.com",74],["acefile.co",75],["beautypackaging.com",76],["puhutv.com",77],["oranhightech.com",78],["mad4wheels.com",79],["allporncomic.com",80],["m.viptube.com",81],["kingsofteens.com",82],["godmods.com",83],["winit.heatworld.com",84],["shop123.com.tw",85],["boyfriendtv.com",86],["catcare.store",87],["bitzite.com",88],["aiimgvlog.fun",89],["laweducationinfo.com",90],["savemoneyinfo.com",90],["worldaffairinfo.com",90],["godstoryinfo.com",90],["successstoryinfo.com",90],["cxissuegk.com",90],["learnmarketinfo.com",90],["bhugolinfo.com",90],["armypowerinfo.com",90],["rsgamer.app",90],["phonereviewinfo.com",90],["makeincomeinfo.com",90],["gknutshell.com",90],["vichitrainfo.com",90],["workproductivityinfo.com",90],["dopomininfo.com",90],["hostingdetailer.com",90],["fitnesssguide.com",90],["tradingfact4u.com",90],["cryptofactss.com",90],["softwaredetail.com",90],["artoffocas.com",90],["insurancesfact.com",90],["travellingdetail.com",90],["pngitem.com",90],["tubev.sex",91],["xnxx-sexfilme.com",92],["mc-hacks.net",93],["meicho.marcsimz.com",93],["wristreview.com",93],["tomshardware.*",94],["hentaifreak.org",95],["moviesnation.*",95],["animepahe.*",96],["th-cam.com",97],["jocooks.com",97],["kusonime.com",98],["movies4u.*",98],["anime7.download",98],["hotscopes.*",99],["kat.*",100],["katbay.*",100],["kickass.*",100],["kickasshydra.*",100],["kickasskat.*",100],["kickass2.*",100],["kickasstorrents.*",100],["kat2.*",100],["kattracker.*",100],["thekat.*",100],["thekickass.*",100],["kickassz.*",100],["kickasstorrents2.*",100],["topkickass.*",100],["kickassgo.*",100],["kkickass.*",100],["kkat.*",100],["kickasst.*",100],["kick4ss.*",100],["akwam.*",101],["eg-akw.com",101],["khsm.io",101],["xn--mgba7fjn.cc",101],["ubuntudde.com",102],["depvailon.com",103],["gload.to",104],["agrarwetter.net",105],["extratorrent.*",106],["torrentstatus.*",106],["yts2.*",106],["y2mate.*",106],["leaknud.com",106],["daddylive.*",106],["archpaper.com",107],["livetvon.*",108],["daddylivehd.*",108],["worldstreams.click",108],["dlhd.sx",108],["hdmoviesflix.*",109],["pornkai.com",110],["tubesafari.com",110],["writedroid.*",111],["zedporn.com",112],["diendancauduong.com",[113,114]],["hanime.xxx",115],["hentaihaven.xxx",115],["thetimes.co.uk",116],["newscon.org",117],["true-gaming.net",118],["manga1000.*",119],["batchkun.com",120],["yify-subtitles.org",121],["chat.tchatche.com",122],["cryptoearns.com",123],["pureleaks.net",124],["starzunion.com",125],["androidecuatoriano.xyz",125],["satdl.com",126],["osuskinner.com",127],["osuskins.net",127],["tekkenmods.com",128],["kiddyearner.com",129],["dood.*",130],["doods.*",130],["dooodster.com",130],["dooood.*",130],["ds2play.com",130],["popcdn.day",131],["pak-mcqs.net",132],["rubystm.com",133],["rubyvid.com",133],["rubyvidhub.com",133],["stmruby.com",133],["streamruby.com",133],["savefiles.com",133],["ragnarokscanlation.opchapters.com",134],["frogogo.ru",135],["mediamarkt.de",136]]);
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
