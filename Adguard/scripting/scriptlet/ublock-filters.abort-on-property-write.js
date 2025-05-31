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
const argsList = [["SZAdBlockDetection"],["_sp_"],["yafaIt"],["Fingerprint2"],["Fingerprent2"],["adcashMacros"],["open"],["openLity"],["ad_abblock_ad"],["Adcash"],["cticodes"],["imgadbpops"],["__aaZoneid"],["IS_ADBLOCK"],["__NA"],["ads_priv"],["ab_detected"],["t4PP"],["sc_adv_out"],["pURL"],["AdBlockDetectorWorkaround"],["__htapop"],["atOptions"],["popzone"],["encodeURIComponent"],["stagedPopUnder"],["closeMyAd"],["smrtSP"],["tiPopAction"],["ExoLoader"],["decodeURIComponent"],["adv_pre_duration"],["adv_post_duration"],["hidekeep"],["ShowAdbblock"],["lifeOnwer"],["smrtSB"],["EPeventFire"],["adBlockDetected"],["segs_pop"],["$getWin"],["xhr.prototype.realSend"],["popUpUrl"],["btoa"],["adsHeight"],["adsBlocked"],["SubmitDownload1"],["getIfc"],["adBlockRunning"],["I833"],["Aloader"],["bindall"],["KillAdBlock"],["checkAdBlocker"],["deployads"],["close_screen"],["mockingbird"],["checkAds"],["check"],["decodeURI"],["downloadJSAtOnload"],["ReactAds"],["phtData"],["killAdBlock"],["adBlocker"],["Ha"],["spot"],["block_detected"],["document.getElementsByClassName"],["ABD"],["mfbDetect"],["ab_cl"],["ai_adb_overlay"],["showMsgAb"],["wutimeBotPattern"],["popup_ads"],["adblockerpopup"],["adblockCheck"],["cancelAdBlocker"],["adblock"],["ExoSupport"],["mobilePop"],["base64_decode"],["mdp_deblocker"],["showModal"],["daCheckManager"],["backgroundBanner"],["AdBDetected"],["onScriptError"],["AdbModel"],["window.onload"],["displayCache"],["SpecialUp"],["ai_front"],["tmnramp"],["onpopstate"],["__C"],["HTMLElement.prototype.insertAdjacentHTML"],["app_advert"],["puShown"],["ospen"],["afScript"],["b2a"],["_chjeuHenj"],["bullads"],["detector_launch"],["afStorage"],["adBlocked"],["u_cfg"],["p$00a"],["c325"],["akadb"],["BetterJsPop"],["DOMAssistant"],["rotator"],["Script_Manager"],["NREUM"],["pbjs"],["detectAdblocker"],["document.ready"],["auto_safelink"],["counter"],["adBlckActive"],["infoey"],["popName"],["checkAdsStatus"],["protection"],["uBlockActive"],["HTMLScriptElement.prototype.onerror"],["blockedAds"],["canRunAds"],["DoodPop"],["detectedAdblock"],["_pop"],["showADBOverlay"],["adbEnableForPage"],["ADMITAD"],["CoinNebula"]];
const hostnamesMap = new Map([["sueddeutsche.de",0],["autobytel.com",1],["cesoirtv.com",1],["huffingtonpost.co.uk",1],["huffingtonpost.com",1],["moviefone.com",1],["playboy.de",1],["car.com",1],["codeproject.com",1],["familyhandyman.com",1],["goldderby.com",1],["headlinepolitics.com",1],["html.net",1],["indiewire.com",1],["marmiton.org",1],["mymotherlode.com",1],["nypost.com",1],["realgm.com",1],["tvline.com",1],["wwd.com",1],["bordertelegraph.com",1],["bournemouthecho.co.uk",1],["dailyecho.co.uk",1],["dorsetecho.co.uk",1],["eveningtimes.co.uk",1],["guardian-series.co.uk",1],["heraldscotland.com",1],["iwcp.co.uk",1],["lancashiretelegraph.co.uk",1],["oxfordmail.co.uk",1],["salisburyjournal.co.uk",1],["theargus.co.uk",1],["thetelegraphandargus.co.uk",1],["yorkpress.co.uk",1],["wunderground.com",1],["lapresse.ca",1],["eurogamer.net",2],["rockpapershotgun.com",2],["vg247.com",2],["dfiles.eu",3],["downsub.com",3],["j.gs",3],["macserial.com",3],["microify.com",3],["minecraft-forum.net",3],["onmovies.*",3],["pirateproxy.*",3],["psarips.*",3],["solidfiles.com",3],["thepiratebay.org",3],["uptobox.com",3],["steamplay.*",[3,5,137]],["streamp1ay.*",[3,4,5]],["adshort.*",3],["pic-upload.de",3],["oke.io",3],["dz4link.com",3],["imgdew.*",3],["imgmaze.*",3],["imgoutlet.*",3],["imgtown.*",3],["imgview.*",3],["imgclick.net",3],["adsrt.*",3],["mp3guild.*",3],["mp3clan.*",3],["pouvideo.*",[3,4,5]],["povvideo.*",[3,4,5]],["povvldeo.*",3],["povw1deo.*",[3,4,5]],["povwideo.*",[3,4,5]],["powv1deo.*",[3,4,5]],["powvibeo.*",[3,4,5]],["powvideo.*",[3,4,5]],["powvldeo.*",[3,4,5]],["downloadpirate.com",3],["grantorrent.*",3],["grantorrent1.*",3],["ddlvalley.*",3],["inkapelis.*",[3,27,36]],["pnd.*",3],["spycock.com",3],["ausfile.com",[3,46]],["xrivonet.info",3],["imgrock.*",3],["hdvid.*",[3,22,36]],["onvid.*",[3,36]],["ovid.*",[3,36]],["vidhd.*",[3,36]],["crohasit.*",3],["streamingworld.*",3],["putlocker9.*",3],["kstreaming.*",3],["pingit.*",3],["tusfiles.com",3],["hexupload.net",3],["yggtorrent.*",3],["iir.ai",3],["souqsky.net",3],["racaty.*",3],["miraculous.to",3],["movie123.*",3],["file-upload.*",3],["putlocker.*",[5,6]],["mp4upload.com",5],["mitly.us",[5,22]],["pelisplus.*",[5,27,36]],["pelisplushd.*",5],["shrt10.com",5],["pelix.*",[5,27,36]],["atomixhq.*",5],["pctfenix.*",5],["pctnew.*",5],["fembed.*",5],["mavplay.*",5],["videobb.*",5],["ebook3000.com",5],["longfiles.com",5],["shurt.pw",5],["shorttey.*",5],["elitetorrent.*",5],["estrenosflix.*",5],["estrenosflux.*",5],["estrenosgo.*",5],["tormalayalam.*",5],["ytanime.tv",5],["cine-calidad.*",5],["extratorrents.*",5],["glotorrents.fr-proxy.com",[5,59]],["rmdown.com",6],["xopenload.me",6],["at.wetter.com",7],["powerthesaurus.org",8],["yts.*",9],["embedstreams.top",9],["gogoanime.co.in",9],["icelz.to",9],["streamtp1.com",9],["1qwebplay.xyz",9],["dlhd.so",9],["flstv.online",9],["mmastreams.me",9],["mylivestream.pro",9],["streambtw.com",9],["tennisonline.me",9],["voodc.com",9],["closedjelly.net",9],["sportsonline.so",9],["onloop.pro",9],["anarchy-stream.com",9],["olalivehdplay.ru",9],["pawastreams.info",9],["vidlink.pro",9],["wooflix.tv",9],["imgadult.com",[10,11]],["imgdrive.net",[10,11]],["imgtaxi.com",[10,11]],["imgwallet.com",[10,11]],["sxyprn.*",12],["streamhub.*",12],["nozomi.la",12],["nudostar.com",12],["slutmesh.net",12],["azel.info",12],["clip-sex.biz",12],["justpicsplease.com",12],["klmanga.*",12],["lucagrassetti.com",12],["manga1001.*",12],["mangaraw.*",12],["mangarawjp.*",12],["mangarow.org",12],["mihand.ir",12],["nudecelebsimages.com",12],["overwatchporn.xxx",12],["pornium.net",12],["syosetu.me",12],["xnxxw.net",12],["xxxymovies.com",12],["yurineko.net",12],["tokyomotion.com",12],["tube8.*",13],["hdpornt.com",14],["4tube.com",15],["pornerbros.com",15],["perfectgirls.*",15],["perfektdamen.*",15],["uflash.tv",15],["mp3cut.net",16],["mcfucker.com",17],["taroot-rangi.com",18],["mangoporn.net",19],["xiaopan.co",20],["parents.at",20],["realgfporn.com",21],["linkrex.net",21],["alotporn.com",21],["payskip.org",22],["imgdawgknuttz.com",22],["shorterall.com",22],["supergoku.com",22],["descarga.xyz",[22,36]],["adcorto.*",22],["ukrainesmodels.com",22],["sexuhot.com",22],["messitv.net",22],["moviewatch.com.pk",22],["bitporno.*",22],["empflix.com",23],["freeviewmovies.com",24],["badjojo.com",24],["boysfood.com",24],["pornhost.com",24],["sextingforum.net",25],["rojadirecta.*",[26,27]],["tarjetarojatvonline.*",[26,27]],["rojadirectatv.*",27],["aquipelis.*",[27,36]],["newpelis.*",[27,36]],["legionprogramas.org",[27,36]],["befap.com",28],["erome.com",28],["pictoa.com",28],["cumlouder.com",29],["chyoa.com",29],["1movies.*",30],["foumovies.*",30],["holavid.com",30],["downloadming.*",30],["tasma.ru",30],["cnnamador.com",[31,32]],["arlinadzgn.com",33],["idntheme.com",33],["problogbooster.com",33],["pronpic.org",34],["op.gg",35],["ciberdvd.*",36],["pelisgratis.*",36],["peliculas24.*",36],["voirfilms.*",36],["pastepvp.org",36],["programasvirtualespc.net",36],["cinetux.*",36],["thevidhd.*",36],["allcalidad.*",36],["awdescargas.com",36],["megawarez.org",36],["eporner.com",37],["theralphretort.com",38],["yoututosjeff.*",38],["androidaba.*",38],["vidcloud.*",38],["seselah.com",38],["descarga-animex.*",38],["bollywoodshaadis.com",38],["practicequiz.com",38],["wapkiz.com",38],["pianokafe.com",38],["apritos.com",38],["bsierad.com",38],["diminimalis.com",38],["eksporimpor.com",38],["jadijuara.com",38],["kicaunews.com",38],["palapanews.com",38],["ridvanmau.com",38],["yeutienganh.com",38],["telecharger-igli4.*",38],["aalah.me",38],["academiadelmotor.es",38],["aiailah.com",38],["almursi.com",38],["altebwsneno.blogspot.com",38],["ambonkita.com",38],["androidspill.com",38],["aplus.my.id",38],["arrisalah-jakarta.com",38],["babyjimaditya.com",38],["bbyhaber.com",38],["beritabangka.com",38],["beritasulteng.com",38],["bestsellerforaday.com",38],["bintangplus.com",38],["bitco.world",38],["br.nacaodamusica.com",38],["bracontece.com.br",38],["dicariguru.com",38],["fairforexbrokers.com",38],["foguinhogames.net",38],["formasyonhaber.net",38],["fullvoyeur.com",38],["healbot.dpm15.net",38],["igli4.com",38],["indofirmware.site",38],["hagalil.com",38],["javjack.com",38],["latribunadelpaisvasco.com",38],["line-stickers.com",38],["luxurydreamhomes.net",38],["m5g.it",38],["miltonfriedmancores.org",38],["minutolivre.com",38],["oportaln10.com.br",38],["pedroinnecco.com",38],["philippinenmagazin.de",38],["piazzagallura.org",38],["pornflixhd.com",38],["safehomefarm.com",38],["synoniemboek.com",38],["techacrobat.com",38],["elizabeth-mitchell.org",38],["mongri.net",38],["svapo.it",38],["papalah.com",38],["starcoins.ws",38],["pipocamoderna.com.br",38],["space.tribuntekno.com",38],["lampungway.com",38],["notiziemusica.it",38],["peliculasmx.net",39],["geo.fr",40],["cbc.ca",41],["cuevana3.*",42],["igg-games.com",43],["vinaurl.*",44],["zigforums.com",45],["medeberiyas.com",45],["hotpornfile.org",47],["donnaglamour.it",48],["elixx.*",49],["pornvideospass.com",[50,51]],["svipvids.com",52],["jnovels.com",52],["chd4.com",53],["forum.cstalking.tv",53],["namemc.com",54],["hawtcelebs.com",55],["canadianunderwriter.ca",56],["creativebusybee.com",57],["ohorse.com",58],["myegy.*",59],["freepornhdonlinegay.com",59],["gsm1x.xyz",60],["softwarecrackguru.com",60],["hotgameplus.com",60],["mrdeepfakes.com",[61,62]],["donk69.com",62],["hotdreamsxxx.com",62],["puzzlefry.com",63],["theglobeandmail.com",64],["mtlblog.com",65],["narcity.com",65],["thepiratebay.*",66],["thepiratebay10.org",66],["jizzbunker.com",66],["xxxdan.com",66],["mtsproducoes.*",67],["moonquill.com",68],["macrotrends.net",69],["investmentwatchblog.com",69],["myfreeblack.com",70],["notebookcheck.*",71],["mysostech.com",72],["medihelp.life",72],["camchickscaps.com",72],["filesharing.io",73],["dreamdth.com",74],["acefile.co",75],["beautypackaging.com",76],["puhutv.com",77],["oranhightech.com",78],["mad4wheels.com",79],["allporncomic.com",80],["m.viptube.com",81],["kingsofteens.com",82],["godmods.com",83],["winit.heatworld.com",84],["shop123.com.tw",85],["boyfriendtv.com",86],["bookmystrip.com",87],["sabkiyojana.com",87],["bitzite.com",88],["aiimgvlog.fun",89],["laweducationinfo.com",90],["savemoneyinfo.com",90],["worldaffairinfo.com",90],["godstoryinfo.com",90],["successstoryinfo.com",90],["cxissuegk.com",90],["learnmarketinfo.com",90],["bhugolinfo.com",90],["armypowerinfo.com",90],["rsadnetworkinfo.com",90],["rsinsuranceinfo.com",90],["rsfinanceinfo.com",90],["rsgamer.app",90],["rssoftwareinfo.com",90],["rshostinginfo.com",90],["rseducationinfo.com",90],["phonereviewinfo.com",90],["makeincomeinfo.com",90],["gknutshell.com",90],["vichitrainfo.com",90],["workproductivityinfo.com",90],["dopomininfo.com",90],["hostingdetailer.com",90],["fitnesssguide.com",90],["tradingfact4u.com",90],["cryptofactss.com",90],["softwaredetail.com",90],["artoffocas.com",90],["insurancesfact.com",90],["travellingdetail.com",90],["pngitem.com",90],["tubev.sex",91],["xnxx-sexfilme.com",92],["mc-hacks.net",93],["wristreview.com",93],["tomshardware.*",94],["hentaifreak.org",95],["moviesnation.*",95],["animepahe.*",96],["th-cam.com",97],["jocooks.com",97],["kusonime.com",98],["movies4u.*",98],["anime7.download",98],["hotscopes.*",99],["kat.*",100],["katbay.*",100],["kickass.*",100],["kickasshydra.*",100],["kickasskat.*",100],["kickass2.*",100],["kickasstorrents.*",100],["kat2.*",100],["kattracker.*",100],["thekat.*",100],["thekickass.*",100],["kickassz.*",100],["kickasstorrents2.*",100],["topkickass.*",100],["kickassgo.*",100],["kkickass.*",100],["kkat.*",100],["kickasst.*",100],["kick4ss.*",100],["akwam.*",101],["eg-akw.com",101],["khsm.io",101],["xn--mgba7fjn.cc",101],["ubuntudde.com",102],["depvailon.com",103],["gload.to",104],["agrarwetter.net",105],["extratorrent.*",106],["torrentstatus.*",106],["yts2.*",106],["y2mate.*",106],["leaknud.com",106],["daddylive.*",106],["archpaper.com",107],["livetvon.*",108],["daddylivehd.*",108],["worldstreams.click",108],["dlhd.sx",108],["hdmoviesflix.*",109],["moviesonlinefree.net",109],["pornkai.com",110],["tubesafari.com",110],["writedroid.*",111],["zedporn.com",112],["diendancauduong.com",[113,114]],["hanime.xxx",115],["hentaihaven.xxx",115],["thetimes.co.uk",116],["newscon.org",117],["true-gaming.net",118],["manga1000.*",119],["batchkun.com",120],["yify-subtitles.org",121],["chat.tchatche.com",122],["cryptoearns.com",123],["pureleaks.net",124],["starzunion.com",125],["androidecuatoriano.xyz",125],["satdl.com",126],["osuskinner.com",127],["osuskins.net",127],["tekkenmods.com",128],["chickenkarts.io",129],["kiddyearner.com",130],["dood.*",131],["doods.*",131],["dooodster.com",131],["dooood.*",131],["ds2play.com",131],["popcdn.day",132],["pak-mcqs.net",133],["rubystm.com",134],["rubyvid.com",134],["rubyvidhub.com",134],["stmruby.com",134],["streamruby.com",134],["savefiles.com",134],["streambolt.tv",134],["ragnarokscanlation.opchapters.com",135],["frogogo.ru",136]]);
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
