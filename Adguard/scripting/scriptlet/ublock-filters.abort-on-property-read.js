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
(function uBOL_abortOnPropertyRead() {

/******************************************************************************/

function abortOnPropertyRead(
    chain = ''
) {
    if ( typeof chain !== 'string' ) { return; }
    if ( chain === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('abort-on-property-read', chain);
    const exceptionToken = getExceptionTokenFn();
    const abort = function() {
        safe.uboLog(logPrefix, 'Aborted');
        throw new ReferenceError(exceptionToken);
    };
    const makeProxy = function(owner, chain) {
        const pos = chain.indexOf('.');
        if ( pos === -1 ) {
            const desc = Object.getOwnPropertyDescriptor(owner, chain);
            if ( !desc || desc.get !== abort ) {
                Object.defineProperty(owner, chain, {
                    get: abort,
                    set: function(){}
                });
            }
            return;
        }
        const prop = chain.slice(0, pos);
        let v = owner[prop];
        chain = chain.slice(pos + 1);
        if ( v ) {
            makeProxy(v, chain);
            return;
        }
        const desc = Object.getOwnPropertyDescriptor(owner, prop);
        if ( desc && desc.set !== undefined ) { return; }
        Object.defineProperty(owner, prop, {
            get: function() { return v; },
            set: function(a) {
                v = a;
                if ( a instanceof Object ) {
                    makeProxy(a, chain);
                }
            }
        });
    };
    const owner = window;
    makeProxy(owner, chain);
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
const argsList = [["Keen"],["MONETIZER101.init"],["JadIds"],["navigator.userAgent"],["__eiPb"],["detector"],["SmartAdServerASMI"],["_sp_._networkListenerData"],["AntiAd.check"],["_pop"],["_sp_.mms.startMsg"],["retrievalService"],["admrlWpJsonP"],["LieDetector"],["newcontent"],["ExoLoader.serve"],["stop"],["open"],["ga.length"],["btoa"],["console.clear"],["jwplayer.utils.Timer"],["adblock_added"],["exoNoExternalUI38djdkjDDJsio96"],["SBMGlobal.run.pcCallback"],["SBMGlobal.run.gramCallback"],["Date.prototype.toUTCString"],["Adcash"],["PopAds"],["runAdblock"],["showAds"],["ExoLoader"],["loadTool"],["popns"],["adBlockDetected"],["doSecondPop"],["RunAds"],["jQuery.adblock"],["ads_block"],["blockAdBlock"],["decodeURI"],["exoOpts"],["doOpen"],["prPuShown"],["document.dispatchEvent"],["document.createElement"],["pbjs.libLoaded"],["mz"],["AaDetector"],["_abb"],["Math.floor"],["jQuery.hello"],["isShowingAd"],["oms.ads_detect"],["hasAdBlock"],["ALoader"],["Notification"],["NREUM"],["ads.pop_url"],["tabUnder"],["ExoLoader.addZone"],["raConf"],["Aloader"],["advobj"],["popTimes"],["addElementToBody"],["phantomPopunders"],["CustomEvent"],["exoJsPop101"],["popjs.init"],["rmVideoPlay"],["r3H4"],["AdservingModule"],["__Y"],["__ads"],["document.createEvent"],["__NA"],["PerformanceLongTaskTiming"],["proxyLocation"],["Int32Array"],["popMagic.init"],["adblock"],["dataPopUnder"],["SmartWallSDK"],["Abd_Detector"],["paywallWrapper"],["registerSlideshowAd"],["mm"],["require"],["getUrlParameter"],["_sp_"],["goafricaSplashScreenAd"],["_0xbeb9"],["popAdsClickCount"],["_wm"],["popunderSetup"],["jsPopunder"],["S9tt"],["adSSetup"],["document.cookie"],["capapubli"],["Aloader.serve"],["__htapop"],["app_vars.force_disable_adblock"],["_0x32d5"],["glxopen"],["adbackDebug"],["googletag"],["performance"],["htaUrl"],["BetterJsPop"],["setExoCookie"],["encodeURIComponent"],["ReviveBannerInterstitial"],["Debugger"],["FuckAdBlock"],["isAdEnabled"],["promo"],["_0x311a"],["console.log"],["h1mm.w3"],["checkAdblock"],["NativeAd"],["adblockblock"],["popit"],["rid"],["decodeURIComponent"],["popad"],["XMLHttpRequest"],["localStorage"],["my_pop"],["nombre_dominio"],["String.fromCharCode"],["redirectURL"],["TID"],["adsanity_ad_block_vars"],["pace"],["pa"],["td_ad_background_click_link"],["onload"],["checkAds"],["popjs"],["detector_launch"],["Popunder"],["Date.prototype.toGMTString"],["initPu"],["jsUnda"],["adtoniq"],["myFunction_ads"],["popunder"],["Pub2a"],["alert"],["V4ss"],["popunders"],["aclib"],["sc_adv_out"],["pageParams.dispAds"],["document.bridCanRunAds"],["pu"],["MessageChannel"],["advads_passive_ads"],["pmc_admanager.show_interrupt_ads"],["$REACTBASE_STATE.serverModules.push"],["scriptwz_url"],["setNptTechAdblockerCookie"],["loadRunative"],["pwparams"],["fuckAdBlock"],["detectAdBlock"],["adsBlocked"],["Base64"],["parcelRequire"],["EviPopunder"],["preadvercb"],["$ADP"],["MG2Loader"],["Connext"],["adUnits"],["b2a"],["angular"],["downloadJSAtOnload"],["penci_adlbock"],["Number.isNaN"],["doads"],["adblockDetector"],["adblockDetect"],["initAdserver"],["splashpage.init"],["___tp"],["STREAM_CONFIGS"],["mdpDeBlocker"],["googlefc"],["ppload"],["RegAdBlocking"],["checkABlockP"],["mdp_deblocker"],["adthrive"],["tie"],["document.write"],["ignore_adblock"],["$.prototype.offset"],["ea.add"],["adcashMacros"],["_cpp"],["pareAdblock"],["clickCount"],["xmlhttp"],["document.oncontextmenu"],["shortcut"],["Swal.fire"],["bypass_url"],["document.onmousedown"],["SMart1"],["checkAdsBlocked"],["navigator.brave"],["Light.Popup"],["htmls"],["embedAddefend"],["adsbyjuicy"],["ExoDetector"],["Pub2"],["adver.abFucker.serve"],["zfgformats"],["zfgstorage"],["jQuery.popunder"],["__cmpGdprAppliesGlobally"],["HTMLIFrameElement"],["dsanity_ad_block_vars"],["videootv"],["detectAdBlocker"],["Drupal.behaviors.agBlockAdBlock"],["NoAdBlock"],["mMCheckAgainBlock"],["noAdBlockers"],["GetWindowHeight"],["show_ads"],["google_ad_status"],["u_cfg"],["adthrive.config"],["TotemToolsObject"],["noAdBlock"],["advads_passive_groups"],["GLX_GLOBAL_UUID_RESULT"],["document.head.appendChild"],["canRunAds"],["indexedDB.open"],["checkCookieClick"],["wpsite_clickable_data"],["mnpwclone"],["SluttyPops"],["sites_urls_pops"],["popUp"],["rccbase_styles"],["adBlockerDetected"],["adp"],["popundrCheck"],["history.replaceState"],["rexxx.swp"],["ai_run_scripts"],["bizpanda"],["Q433"],["isAdBlockActive"],["Element.prototype.attachShadow"],["document.body.appendChild"],["SPHMoverlay"],["google_jobrunner"],["popupBlocker"],["DoodPop"],["SmartPopunder.make"],["evolokParams.adblock"],["JSON.parse"],["document.referrer"],["cainPopUp"],["pURL"],["inhumanity_pop_var_name"],["app_vars.please_disable_adblock"],["afScript"],["history.back"],["String.prototype.charCodeAt"],["Overlayer"],["puShown"],["chp_adblock_browser"],["Request"],["fallbackAds"],["checkAdsStatus"],["advanced_ads_ready"],["PvVideoSlider"],["preroll_helper.advs"],["loadXMLDoc"],["arrvast"],["Script_Manager"],["Script_Manager_Time"],["document.body.insertAdjacentHTML"],["tic"],["pu_url"],["onAdblockerDetected"],["checkBlock"],["adsbygoogle.loaded"],["asgPopScript"],["Object"],["Object.prototype.loadCosplay"],["Object.prototype.loadImages"],["FMPoopS"],["importantFunc"],["console.warn"],["adsRedirectPopups"],["afStorage"],["eazy_ad_unblocker"],["antiAdBlockerHandler"],["killAdKiller"],["aoAdBlockDetected"],["ai_wait_for_jquery"],["checkAdBlock"],["VAST"],["eazy_ad_unblocker_dialog_opener"],["adConfig"],["GeneratorAds"],["aab"],["config"],["runad"],["atob"],["__brn_private_mode"],["start"],["__aaZoneid"],["adc"],["document.body.style.backgroundPosition"],["showada"],["popUrl"],["popurl"],["EV.Dab"],["Object.prototype.popupOpened"],["pum_popups"],["document.documentElement.clientWidth"],["Dataffcecd"],["app_advert"],["aclib.runPop"],["odabd"],["jwplayer.vast"],["ConsoleBan"],["disableDevtool"],["ondevtoolopen"],["onkeydown"],["window.location.href"],["window.history.back"],["document.onkeydown"],["close"],["redirectOnClick"],["_oEa"],["dataLayer"],["WebAssembly"],["miner"]];
const hostnamesMap = new Map([["pythonjobshq.com",0],["cyclingnews.com",[1,7]],["sensacine.com",2],["aranzulla.it",3],["wetteronline.*",4],["anallievent.com",4],["au-di-tions.com",4],["badgehungry.com",4],["beingmelody.com",4],["bloggingawaydebt.com",4],["casutalaurei.ro",4],["cornerstoneconfessions.com",4],["culture-informatique.net",4],["dearcreatives.com",4],["disneyfashionista.com",4],["divinelifestyle.com",4],["dna.fr",4],["eslauthority.com",4],["estrepublicain.fr",4],["fitting-it-all-in.com",4],["heresyoursavings.com",4],["irresistiblepets.net",4],["julieseatsandtreats.com",4],["justjared.com",4],["lecturisiarome.ro",4],["lemonsqueezyhome.com",4],["libramemoria.com",4],["lovegrowswild.com",4],["magicseaweed.com",4],["measuringflower.com",4],["mjsbigblog.com",4],["mommybunch.com",4],["mustardseedmoney.com",4],["myfunkytravel.com",4],["onetimethrough.com",4],["panlasangpinoymeatrecipes.com",4],["silverpetticoatreview.com",4],["the-military-guide.com",4],["therelaxedhomeschool.com",4],["the2seasons.com",4],["zeroto60times.com",4],["barefeetonthedashboard.com",4],["bargainbriana.com",4],["betterbuttchallenge.com",4],["bike-urious.com",4],["blwideas.com",4],["eartheclipse.com",4],["entertainment-focus.com",4],["fanatik.com.tr",4],["foreverconscious.com",4],["foreversparkly.com",4],["getdatgadget.com",4],["goodnewsnetwork.org",4],["greenarrowtv.com",4],["hbculifestyle.com",4],["heysigmund.com",4],["hodgepodgehippie.com",4],["homestratosphere.com",4],["indesignskills.com",4],["katiescucina.com",4],["knowyourphrase.com",4],["letsworkremotely.com",4],["lizs-early-learning-spot.com",4],["ledauphine.com",4],["leprogres.fr",4],["milliyet.com.tr",4],["pinoyrecipe.net",4],["prepared-housewives.com",4],["redcarpet-fashionawards.com",4],["republicain-lorrain.fr",4],["savespendsplurge.com",4],["savingadvice.com",4],["shutupandgo.travel",4],["spring.org.uk",4],["stevivor.com",4],["tamaratattles.com",4],["tastefullyeclectic.com",4],["theavtimes.com",4],["thechroniclesofhome.com",4],["thisisourbliss.com",4],["tinyqualityhomes.org",4],["turtleboysports.com",4],["ultimateninjablazingx.com",4],["universfreebox.com",4],["utahsweetsavings.com",4],["vgamerz.com",4],["wheatbellyblog.com",4],["yummytummyaarthi.com",4],["ranker.com",[4,107]],["fluentu.com",4],["cdiscount.com",4],["damndelicious.net",4],["simplywhisked.com",4],["timesofindia.com",5],["bild.de",6],["sueddeutsche.de",7],["20min.ch",7],["al.com",7],["alphr.com",7],["autoexpress.co.uk",7],["bikeradar.com",7],["blick.ch",7],["chefkoch.de",7],["digitalspy.com",7],["democratandchronicle.com",7],["denofgeek.com",7],["esgentside.com",7],["evo.co.uk",7],["exclusivomen.com",7],["ft.com",7],["gala.de",7],["gala.fr",7],["heatworld.com",7],["itpro.co.uk",7],["livingathome.de",7],["masslive.com",7],["maxisciences.com",7],["metabomb.net",7],["mlive.com",7],["motherandbaby.co.uk",7],["motorcyclenews.com",7],["muthead.com",7],["neonmag.fr",7],["newyorkupstate.com",7],["ngin-mobility.com",7],["nj.com",7],["nola.com",7],["ohmirevista.com",7],["ohmymag.*",7],["oregonlive.com",7],["pennlive.com",7],["programme.tv",7],["programme-tv.net",7],["radiotimes.com",7],["silive.com",7],["simplyvoyage.com",7],["stern.de",7],["syracuse.com",7],["theweek.co.uk",7],["ydr.com",7],["usatoday.com",7],["schoener-wohnen.de",7],["thewestmorlandgazette.co.uk",7],["news-leader.com",7],["etonline.com",7],["bilan.ch",7],["doodle.com",7],["techradar.com",7],["daily-times.com",7],["wirralglobe.co.uk",7],["annabelle.ch",7],["pcgamer.com",7],["nintendolife.com",7],["gamer.com.tw",8],["skidrowcodexgames.com",9],["durtypass.com",9],["anime-odcinki.pl",9],["gaypornwave.com",[9,31]],["pingit.*",[9,17,48,70]],["oload.*",[9,17,40,48]],["streamhoe.*",[9,17]],["eltern.de",10],["essen-und-trinken.de",10],["focus.de",10],["eurogamer.de",10],["eurogamer.es",10],["eurogamer.it",10],["eurogamer.net",10],["eurogamer.pt",10],["rockpapershotgun.com",10],["vg247.com",10],["urbia.de",10],["elpasotimes.com",10],["femina.ch",10],["northwalespioneer.co.uk",10],["codeproject.com",11],["cwseed.com",12],["gamestorrents.*",13],["gogoanimes.*",13],["limetorrents.*",13],["piratebayz.*",13],["europixhd.*",[13,48]],["hdeuropix.*",[13,48]],["topeuropix.*",[13,48]],["vivud.com",[13,40,55,56]],["grantorrent.*",[13,89]],["moviescounter.*",13],["elixx.*",[13,72]],["telerium.*",13],["savelinks.*",13],["hentaisd.*",13],["7r6.com",[13,20,103]],["mrpiracy.*",13],["bostoncommons.net",13],["reddflix.com",[13,17]],["opisanie-kartin.com",13],["painting-planet.com",13],["kropic.com",[13,40]],["mp4mania1.net",13],["livegore.com",13],["kioven.com",13],["pngio.com",13],["iobit.com",13],["khatrimazafull.*",13],["mov2day.*",13],["pornproxy.art",13],["pornproxy.app",13],["moviemaniak.com",13],["vegamovvies.to",13],["pagalfree.com",13],["rule34.xxx",14],["realbooru.com",15],["alrincon.com",[15,17,32]],["realgfporn.com",[15,31]],["pornhd.com",[15,54]],["pornhdin.com",[15,17]],["pornomovies.com",[15,40]],["bdsmstreak.com",15],["freepornvideo.sex",15],["teenpornvideo.xxx",15],["yourlust.com",15],["imx.to",15],["mypornstarbook.net",15],["japanesefuck.com",15],["imgtorrnt.in",[15,44]],["prostoporno.*",15],["pandamovies.pw",[15,44]],["club-flank.com",15],["watchfreexxx.net",[15,31,144,145,146]],["dump.xxx",[15,17]],["fuqer.com",[15,17]],["tmohentai.com",15],["xopenload.me",15],["losporn.org",15],["bravoerotica.com",15],["xasiat.com",[15,68]],["redporno.cz",15],["vintageporntubes.com",15],["xxxvideos247.com",15],["young-pussy.com",15],["kingsofteens.com",15],["8teenxxx.com",15],["activevoyeur.com",15],["allschoolboysecrets.com",15],["boobsforfun.com",15],["breedingmoms.com",15],["cockmeter.com",[15,44]],["collegeteentube.com",15],["cumshotlist.com",15],["porn0.tv",15],["ritzysex.com",15],["ritzyporn.com",15],["sexato.com",15],["javbobo.com",[15,23]],["sokobj.com",15],["24pornvideos.com",15],["2japaneseporn.com",15],["xxxvideor.com",15],["youngleak.com",15],["zhlednito.cz",15],["needgayporn.com",15],["zetporn.com",15],["grubstreet.com",16],["twitchy.com",16],["rule34hentai.net",17],["animepahe.*",[17,28]],["kwik.*",[17,28]],["clik.pw",17],["ah-me.com",17],["1337x.unblock2.xyz",[17,19,50]],["1337x.unblocked.*",17],["1337x.unblockit.*",[17,19]],["mitly.us",[17,34]],["pussyspace.*",17],["urlcero.*",17],["linkrex.net",17],["shrtfly.*",[17,59]],["oke.io",17],["watchmygf.me",17],["linkshorts.*",17],["streamcdn.*",[17,48]],["pornoreino.com",[17,31]],["shrt10.com",17],["turbobit.net",17],["bestialitysexanimals.com",17],["bestialporn.com",17],["mujeresdesnudas.club",17],["mynakedwife.video",17],["videoszoofiliahd.com",17],["efukt.com",17],["tranny.one",[17,23]],["vinaurl.*",[17,103]],["porndoe.com",[17,31]],["topvideosgay.com",17],["goto.com.np",17],["femdomtb.com",17],["pornvideotop.com",17],["tryboobs.com",[17,23]],["fapality.com",[17,44]],["babesxworld.com",[17,32,44]],["icutlink.com",17],["oncehelp.com",17],["picbaron.com",[17,32]],["mega-p2p.net",17],["shrinkearn.com",17],["twister.porn",17],["komikcast.*",17],["bitlk.com",17],["bolly4u.*",[17,128]],["tugaflix.*",17],["hdfriday.*",17],["123movies.*",17],["shortearn.*",[17,48]],["peekvids.com",17],["playvids.com",17],["pornflip.com",17],["pornoeggs.com",17],["oko.sh",[17,48]],["turbogvideos.com",17],["watch4hd.*",17],["gdtot.*",17],["shrink.*",[17,34,103]],["xxx-image.com",[17,26,128,169]],["coinlyhub.com",[17,103]],["zimabdko.com",17],["bluemediafiles.*",17],["fullxxxmovies.net",17],["elitegoltv.org",17],["extremotvplay.com",17],["semawur.com",17],["adshrink.it",17],["shrink-service.it",[17,349]],["dailysport.*",[17,48]],["eplsite.uk",[17,48]],["upstream.to",17],["dramakrsubindo.blogspot.com",17],["ex-foary.com",[17,103]],["oceanof-games.com",17],["watchmonkonline.com",17],["iir.ai",[17,103]],["btdb.*",[17,20]],["porncomics.me",17],["orsm.net",17],["linksfire.*",17],["enagato.com",17],["bluemediadownload.*",[17,40]],["bluemediafile.*",[17,40]],["bluemedialink.*",[17,40]],["bluemediastorage.*",[17,40]],["bluemediaurls.*",[17,40]],["urlbluemedia.*",[17,40]],["cloutgist.com",17],["youshort.me",17],["shortylink.store",17],["savetub.com",17],["earnbee.xyz",17],["pornj.com",17],["comicxxx.eu",17],["mybestxtube.com",[17,44]],["pornobengala.com",17],["pornicom.com",[17,44]],["xecce.com",17],["teensporn.tv",[17,44]],["pornlift.com",17],["deinesexfilme.com",17],["einfachtitten.com",17],["lesbenhd.com",17],["milffabrik.com",17],["porn-monkey.com",17],["porndrake.com",17],["pornhubdeutsch.net",17],["pornoaffe.com",17],["pornodavid.com",17],["pornoente.tv",17],["pornofisch.com",17],["pornofelix.com",17],["pornohammer.com",17],["pornohelm.com",17],["pornoklinge.com",17],["pornotom.com",17],["pornotommy.com",17],["pornovideos-hd.com",17],["pornozebra.com",17],["xhamsterdeutsch.xyz",17],["xnxx-sexfilme.com",17],["uploadroot.com",17],["link1s.*",[17,103]],["deepfakeporn.net",17],["pkr.pw",[17,103]],["loader.to",17],["namaidani.com",[17,103]],["shorttey.*",[17,103]],["anime47.com",17],["cutearn.net",[17,103]],["filezipa.com",[17,103]],["theblissempire.com",[17,103]],["bestgamehack.top",17],["hackofgame.com",17],["movizland.*",17],["shorturl.unityassets4free.com",[17,103]],["vevioz.com",[17,103]],["charexempire.com",[17,275]],["crunchyscan.fr",17],["unblocksite.pw",[17,128]],["y2mate.com",17],["androidapks.biz",17],["androidsite.net",17],["animesite.net",17],["computercrack.com",17],["crackedsoftware.biz",17],["crackfree.org",17],["downloadgames.info",17],["downloadsite.org",17],["ebooksite.org",17],["emulatorsite.com",17],["freeflix.info",17],["freemoviesu4.com",17],["freesoccer.net",17],["fseries.org",17],["gamefast.org",17],["gamesite.info",17],["gostreamon.net",17],["hindisite.net",17],["isosite.org",17],["macsite.info",17],["mangasite.org",17],["megamovies.org",17],["moviefree2.com",17],["moviesite.app",17],["moviesx.org",17],["musicsite.biz",17],["patchsite.net",17],["pdfsite.net",17],["play1002.com",17],["productkeysite.com",17],["romsite.org",17],["seriesite.net",17],["siteapk.net",17],["siteflix.org",17],["sitegames.net",17],["sitekeys.net",17],["sitepdf.com",17],["sitesunblocked.*",17],["sitetorrent.com",17],["softwaresite.net",17],["superapk.org",17],["tvonlinesports.com",17],["warezsite.net",17],["watchmovies2.com",17],["watchsite.net",17],["youapk.net",17],["1377x.*",17],["gload.to",17],["bcvc.*",17],["bloggingguidance.com",17],["jockantv.com",17],["moviehaxx.pro",17],["hitomi.la",17],["receive-sms-online.info",18],["steamplay.*",[19,20,21]],["pornult.com",[19,68]],["fullhdxxx.com",[19,31]],["lendrive.web.id",19],["nimegami.id",19],["short.pe",[20,48]],["mylust.com",[20,44]],["anysex.com",[20,31,40,44,111]],["topflix.*",20],["ustream.*",20],["luscious.net",20],["cloudgallery.net",[20,48]],["alotporn.com",[20,44]],["imgair.net",20],["imgblaze.net",20],["imgfrost.net",20],["vestimage.site",20],["pixlev.*",20],["pixbryexa.sbs",20],["picbqqa.sbs",20],["pixbkghxa.sbs",20],["imgmgf.sbs",20],["picbcxvxa.sbs",20],["imguee.sbs",20],["imgmffmv.sbs",20],["imgbqb.sbs",20],["imgbyrev.sbs",20],["imgbncvnv.sbs",20],["pixtryab.shop",20],["imggune.shop",20],["pictryhab.shop",20],["pixbnab.shop",20],["imgbnwe.shop",20],["imgbbnhi.shop",20],["imgnbii.shop",20],["imghqqbg.shop",20],["imgyhq.shop",20],["pixnbrqwg.sbs",20],["pixnbrqw.sbs",20],["picmsh.sbs",20],["imgpke.sbs",20],["picuenr.sbs",20],["imgolemn.sbs",20],["imgoebn.sbs",20],["picnwqez.sbs",20],["imgjajhe.sbs",20],["pixjnwe.sbs",20],["pixkfjtrkf.shop",20],["pixkfkf.shop",20],["pixdfdjkkr.shop",20],["pixdfdj.shop",20],["picnft.shop",20],["pixrqqz.shop",20],["picngt.shop",20],["picjgfjet.shop",20],["picjbet.shop",20],["imgkkabm.shop",20],["imgxabm.shop",20],["imgthbm.shop",20],["imgmyqbm.shop",20],["imgwwqbm.shop",20],["imgjvmbbm.shop",20],["imgjbxzjv.shop",20],["imgjmgfgm.shop",20],["picxnkjkhdf.sbs",20],["imgxxbdf.sbs",20],["imgnngr.sbs",20],["imgjjtr.sbs",20],["imgqbbds.sbs",20],["imgbvdf.sbs",20],["imgqnnnebrf.sbs",20],["imgnnnvbrf.sbs",20],["pornfd.com",20],["xsanime.com",20],["camclips.tv",20],["moviessources.*",20],["steanplay.*",21],["stemplay.*",21],["asianclub.*",[21,48,73]],["mavplay.*",[21,73,87]],["ujav.me",[21,73]],["videobb.*",[21,73,87,105]],["shameless.com",[21,23,60]],["txxx.*",21],["informer.com",22],["myreadingmanga.info",23],["sunporno.com",[23,60]],["adultdvdparadise.com",23],["freeomovie.info",23],["fullxxxmovies.me",23],["mangoporn.co",23],["netflixporno.net",23],["pandamovie.*",23],["pandamovies.me",23],["pornkino.cc",23],["pornwatch.ws",23],["speedporn.*",23],["watchfreexxx.pw",23],["watchpornfree.*",23],["watchxxxfree.pw",23],["xopenload.pw",23],["xtapes.me",23],["xxxparodyhd.net",23],["xxxscenes.net",23],["xxxstream.me",23],["youwatchporn.com",23],["8boobs.com",[23,32,60]],["babesinporn.com",[23,32,44,60]],["bustybloom.com",[23,32]],["hotstunners.com",[23,32,60]],["nudebabes.sexy",[23,60]],["pleasuregirl.net",[23,32,60]],["rabbitsfun.com",[23,32,60]],["silkengirl.*",[23,32,60]],["asiansex.life",23],["nudismteens.com",23],["youx.xxx",23],["pornxp.com",[23,48]],["hypnohub.net",23],["xnxxporn.video",23],["xxxdessert.com",23],["xxxshake.com",23],["manhwa18.cc",23],["best18porn.com",23],["bigtitslust.com",[23,260]],["manga18fx.com",23],["sexywomeninlingerie.com",23],["oosex.net",[23,44]],["theteensexy.com",23],["xteensex.net",23],["stiflersmoms.com",23],["gifhq.com",23],["amateur-couples.com",23],["teen-hd-sex.com",23],["tube-teen-18.com",23],["xxx-asian-tube.com",23],["bibme.org",24],["citationmachine.net",[24,25]],["citethisforme.com",25],["easybib.com",25],["biqle.*",26],["otakuindo.*",26],["1plus1plus1equals1.net",26],["cooksinfo.com",26],["heatherdisarro.com",26],["thesassyslowcooker.com",26],["mp4upload.com",27],["watchseries.*",27],["cricstream.me",27],["catchthrust.net",27],["championdrive.co",27],["evfancy.link",27],["megacanais.com",27],["tous-sports.ru",27],["ugreen.autos",27],["hyhd.org",[27,154]],["streamtape.*",27],["watchadsontape.com",27],["livesport24.net",27],["vipboxtv.*",27],["m2list.com",27],["123mf9.my",27],["pepperlivestream.online",27],["vidsrc.*",[27,48,73]],["streambucket.net",27],["sanet.lc",27],["antenasport.online",27],["apkship.shop",27],["browncrossing.net",27],["dudestream.com",27],["elgolestv.pro",27],["embedstreams.me",27],["engstreams.shop",27],["eyespeeled.click",27],["flostreams.xyz",27],["ilovetoplay.xyz",27],["joyousplay.xyz",27],["nativesurge.info",27],["pawastreams.org",27],["ripplestream4u.shop",27],["rojadirectaenvivo.pl",27],["sansat.link",27],["smartermuver.com",27],["sportsnest.co",27],["sportsurge.net",27],["streameast.*",27],["tarjetarojaenvivo.lat",27],["techcabal.net",27],["volokit2.com",27],["ythd.org",27],["kaas.ro",[27,154]],["rivestream.live",27],["flix-wave.lol",27],["redvido.com",27],["adbypass.org",27],["bypass.city",27],["dailypudding.com",[27,154]],["fromwatch.com",[27,154]],["visualnewshub.com",[27,154]],["affordwonder.net",27],["yts.*",29],["sarugbymag.co.za",30],["ikaza.net",30],["imgadult.com",[31,32]],["imgdrive.net",[31,32]],["imgtaxi.com",[31,32]],["imgwallet.com",[31,32]],["hdpornt.com",31],["4tube.com",31],["pornerbros.com",[31,44]],["pichaloca.com",31],["pornodoido.com",31],["pornwatchers.com",[31,44]],["gotporn.com",31],["picturelol.com",31],["imgspice.com",31],["orgyxxxhub.com",[31,62,63]],["befap.com",31],["alphaporno.com",31],["tubedupe.com",31],["sexykittenporn.com",[31,32]],["letmejerk.com",31],["letmejerk2.com",31],["letmejerk3.com",31],["letmejerk4.com",31],["letmejerk5.com",31],["letmejerk6.com",31],["letmejerk7.com",31],["sexvid.*",[31,158]],["hdtube.porn",31],["madchensex.com",31],["canalporno.com",31],["eroxia.com",31],["pornozot.com",31],["teensexvideos.me",31],["goshow.tv",31],["hentaigo.com",[32,71]],["lolhentai.net",32],["camwhores.*",[32,94]],["camwhorestv.*",[32,94]],["porntopic.com",32],["cocogals.com",[32,44]],["camwhoreshd.com",32],["hotbabes.tv",[32,94]],["consoletarget.com",32],["pussytorrents.org",32],["ftopx.com",[32,60,68]],["boobgirlz.com",32],["fooxybabes.com",32],["jennylist.xyz",32],["jumboporn.xyz",32],["mainbabes.com",[32,60]],["mysexybabes.com",[32,60]],["nakedbabes.club",[32,60]],["sexybabesz.com",[32,60]],["vibraporn.com",32],["zazzybabes.com",32],["zehnporn.com",32],["naughtymachinima.com",32],["imgbaron.com",32],["decorativemodels.com",32],["erowall.com",[32,44]],["freyalist.com",32],["guruofporn.com",32],["jesseporn.xyz",32],["kendralist.com",32],["vipergirls.to",32],["lizardporn.com",32],["wantedbabes.com",[32,44]],["exgirlfriendmarket.com",32],["nakedneighbour.com",32],["moozpussy.com",32],["zoompussy.com",32],["2adultflashgames.com",32],["123strippoker.com",32],["babepedia.com",32],["boobieblog.com",32],["borwap.xxx",32],["gamesofdesire.com",32],["hd-xxx.me",32],["hentaipins.com",[32,255]],["longporn.xyz",32],["picmoney.org",32],["pornhd720p.com",32],["sikwap.xyz",32],["super-games.cz",32],["xxx-videos.org",32],["xxxputas.net",32],["mysexgames.com",32],["picdollar.com",32],["eroticity.net",32],["striptube.net",32],["xcity.org",32],["rintor.*",32],["porncoven.com",32],["imgsen.*",[32,67]],["imgsto.*",[32,67]],["pics4upload.com",32],["myporntape.com",32],["asianlbfm.net",32],["schoolgirls-asia.org",32],["sxyprn.*",33],["luxuretv.com",33],["asiangay.tv",33],["bootstrample.com",33],["gayxx.net",[33,218]],["hentairead.io",33],["isekaitube.com",33],["japangaysex.com",33],["mangagun.net",33],["nicomanga.com",33],["nudeslegion.com",33],["rawinu.com",33],["watchsouthpark.tv",33],["weloma.art",33],["welovemanga.one",33],["javcock.com",33],["otomi-games.com",33],["redhdtube.xxx",33],["rat.xxx",33],["hispasexy.org",[33,203]],["javplay.me",33],["leviathanmanga.com",33],["gayfor.us",33],["juegosgratisonline.com.ar",33],["levelupalone.com",33],["x-x-x.tube",33],["javboys.com",33],["javball.com",33],["adictox.com",33],["feed2all.org",33],["hqq.*",34],["platinmods.com",34],["fotbolltransfers.com",34],["freebitcoin.win",34],["coindice.win",34],["live-tv-channels.org",34],["lookmovie.*",[34,87]],["faucethero.com",[34,40]],["faresgame.com",34],["fc.lc",[34,103]],["freebcc.org",[34,103]],["eio.io",[34,103]],["exee.io",[34,103]],["exe.app",[34,103]],["majalahpendidikan.com",34],["jaiefra.com",34],["czxxx.org",34],["fussball.news",34],["orangespotlight.com",34],["ar-atech.blogspot.com",34],["clixwarez.blogspot.com",34],["theandroidpro.com",34],["zeeebatch.blogspot.com",34],["iptvspor.com",34],["plugincim.com",34],["fivemturk.com",34],["sosyalbilgiler.net",34],["mega-hentai2.blogspot.com",34],["kollhong.com",34],["getmega.net",34],["verteleseriesonline.com",34],["imintweb.com",34],["eoreuni.com",34],["comousarzararadio.blogspot.com",34],["popsplit.us",34],["digitalstudiome.com",34],["mypussydischarge.com",[34,40]],["kontrolkalemi.com",34],["arabianbusiness.com",34],["eskiceviri.blogspot.com",34],["dj-figo.com",34],["blasianluvforever.com",34],["wgzimmer.ch",34],["familyrenders.com",34],["daburosubs.com",34],["androidgreek.com",34],["iade.com",34],["smallpocketlibrary.com",34],["hidefninja.com",34],["orangeptc.com",34],["share1223.com",34],["7misr4day.com",34],["aquiyahorajuegos.net",34],["worldofbin.com",34],["googledrivelinks.com",34],["tpaste.io",34],["g9g.eu",34],["waaw.*",[35,110]],["netu.ac",35],["vapley.*",35],["younetu.*",35],["player.uwatchfree.*",[35,110,289]],["onscreens.me",[35,110,298]],["filmoviplex.com",[35,110]],["movie4night.com",[35,110]],["waaaw.*",[35,110]],["waaw1.*",[35,110]],["srt.am",36],["123link.*",[37,38,39]],["ticonsiglio.com",37],["photos-public-domain.com",39],["civilenggforall.com",39],["sheshaft.com",40],["gotgayporn.com",40],["fetishshrine.com",40],["sleazyneasy.com",40],["vikiporn.com",40],["pornomico.com",[40,65]],["cuevana3.*",[40,97]],["vidcloud.*",[40,73,110]],["watchhouseonline.net",40],["pornid.*",40],["zbporn.*",[40,117]],["pornoman.pl",[40,118]],["camseek.tv",40],["yomovies.*",40],["xxmovz.com",40],["nonsensediamond.*",40],["nonktube.com",40],["xclusivejams.*",40],["sportlemon.*",40],["sportlemons.*",40],["sportlemonx.*",40],["pussyspot.net",40],["wildpictures.net",40],["kinox.*",40],["kinoz.*",[40,48]],["modagamers.com",40],["batporno.com",40],["remaxhd.*",40],["lebahmovie.com",40],["line25.com",40],["javtiful.com",40],["classicpornbest.com",[40,129]],["desihoes.com",[40,44]],["indianpornvideo.org",40],["slaughtergays.com",40],["sexiestpicture.com",40],["18girlssex.com",40],["manytoon.com",40],["thatav.net",40],["hentaifreak.org",40],["xxgasm.com",40],["kfapfakes.com",40],["xsober.com",40],["sexsaoy.com",40],["img4fap.*",40],["ashemaletv.com",40],["beurettekeh.com",40],["celibook.com",40],["gourmandix.com",40],["sexetag.com",40],["babeporn.*",40],["hd44.net",40],["dirtyfox.net",40],["babestube.com",40],["momvids.com",40],["porndr.com",40],["deviants.com",40],["freehardcore.com",40],["lesbian8.com",[40,260]],["babytorrent.*",40],["123moviesme.*",40],["watchmdh.to",40],["sarapbabe.com",40],["fullxxxporn.net",40],["xxxhdvideo.*",40],["qqxnxx.com",40],["xnxx-downloader.net",40],["comicspornow.com",40],["mult34.com",40],["xxxvideotube.net",40],["javqis.com",40],["35volitantplimsoles5.com",40],["peladas69.com",40],["liveru.sx",40],["protege-torrent.com",40],["freehdinterracialporn.in",40],["titsintops.com",40],["pervclips.com",40],["homemoviestube.com",40],["hdporn.net",[41,42]],["older-mature.net",42],["7mmtv.*",42],["telorku.xyz",42],["watch-my-gf.com",43],["cartoonporno.xxx",43],["mangoporn.net",44],["area51.porn",44],["sexytrunk.com",44],["teensark.com",44],["tubous.com",[44,80]],["toyoheadquarters.com",44],["spycock.com",44],["barfuck.com",44],["worldsex.com",[44,56]],["multporn.net",44],["besthugecocks.com",44],["daftporn.com",44],["italianoxxx.com",44],["collegehdsex.com",44],["lustylist.com",44],["yumstories.com",44],["18-teen-porn.com",44],["69teentube.com",44],["girlshd.xxx",44],["home-xxx-videos.com",44],["orgasmlist.com",44],["teensextube.xxx",44],["pornyfap.com",44],["nudistube.com",44],["uporno.xxx",44],["ultrateenporn.com",44],["gosexpod.com",44],["al4a.com",44],["grannysex.name",44],["porntb.com",44],["scopateitaliane.it",44],["sexbox.online",44],["teenpornvideo.sex",44],["twatis.com",[44,60]],["flashingjungle.com",44],["fetishburg.com",44],["privateindianmovies.com",44],["soyoungteens.com",44],["gottanut.com",44],["uiporn.com",44],["xcafe.com",44],["gfsvideos.com",44],["home-made-videos.com",44],["tbib.org",44],["sensualgirls.org",44],["pornhat.*",44],["porno-tour.*",44],["get-to.link",[44,68]],["ariestube.com",44],["asian-teen-sex.com",44],["18asiantube.com",44],["wholevideos.com",44],["asianporntube69.com",44],["babeswp.com",44],["bangyourwife.com",44],["bdsmslavemovie.com",44],["bdsmwaytube.com",44],["bestmaturewomen.com",44],["classicpornvids.com",44],["pornpaw.com",44],["dawntube.com",44],["desimmshd.com",44],["dirtytubemix.com",44],["plumperstube.com",44],["enormousbabes.net",44],["exclusiveindianporn.com",44],["figtube.com",44],["amateur-twink.com",44],["freeboytwinks.com",44],["freegrannyvids.com",44],["freexmovs.com",44],["freshbbw.com",44],["frostytube.com",44],["fuckslutsonline.com",44],["gameofporn.com",44],["gayboyshd.com",44],["giantshemalecocks.com",44],["erofus.com",44],["hd-tube-porn.com",44],["hardcorehd.xxx",44],["hairytwat.org",44],["iwantmature.com",44],["justababes.com",44],["jenpornuj.cz",44],["javteentube.com",44],["hard-tube-porn.com",44],["klaustube.com",44],["kaboomtube.com",44],["lustyspot.com",44],["lovelynudez.com",[44,124]],["dailyangels.com",44],["ljcam.net",44],["nakenprat.com",44],["oldgrannylovers.com",44],["ohueli.net",44],["pornuploaded.net",44],["pornstarsadvice.com",44],["bobs-tube.com",44],["pornohaha.com",44],["pornmam.com",44],["pornhegemon.com",44],["pornabcd.com",44],["porn-hd-tube.com",44],["thehentaiworld.com",44],["pantyhosepink.com",44],["queenofmature.com",44],["realvoyeursex.com",44],["realbbwsex.com",44],["rawindianporn.com",44],["onlygoldmovies.com",44],["rainytube.com",44],["stileproject.com",44],["slutdump.com",44],["nastybulb.com",44],["sextube-6.com",44],["porntubegf.com",44],["sassytube.com",44],["smplace.com",44],["maturell.com",44],["pornoplum.com",44],["widewifes.com",44],["wowpornlist.xyz",44],["vulgarmilf.com",44],["oldgirlsporn.com",44],["freepornrocks.com",44],["desivideos.*",44],["beegsexxx.com",44],["watchpornx.com",[44,146]],["ytboob.com",44],["saradahentai.com",44],["hentaiarena.com",44],["absolugirl.com",44],["absolutube.com",44],["allafricangirls.net",44],["asianpornphoto.net",44],["freexxxvideos.pro",44],["videosxxxporno.gratis",44],["nude-teen-18.com",44],["xemales.com",44],["szexkepek.net",44],["wife-home-videos.com",44],["sexmadeathome.com",44],["nylondolls.com",44],["erogen.su",44],["imgprime.com",45],["ondemandkorea.com",46],["bdsmx.tube",47],["mrgay.com",47],["ouo.*",48],["songs.*",48],["gogoanimetv.*",48],["met.bz",48],["pelisplus.*",48],["streamm4u.*",48],["inkapelis.*",48],["ettv.*",48],["pelix.*",48],["pnd.*",48],["0123movie.*",48],["movies123.*",48],["senmanga.com",48],["piratebay.*",48],["webbro.*",48],["javwide.*",48],["vidhd.*",48],["cda-hd.cc",48],["mirrorace.*",48],["kurazone.net",48],["thoptv.*",48],["streamingworld.*",48],["solarmovie.*",48],["bdiptv.*",48],["cinemalibero.*",48],["pctfenix.*",[48,134]],["pctnew.*",[48,134]],["turkdown.com",48],["urlgalleries.net",48],["movie4u.live",48],["solarmovie.id",48],["01fmovies.com",48],["watchgameofthrones.*",48],["babesaround.com",48],["dirtyyoungbitches.com",48],["grabpussy.com",48],["join2babes.com",48],["nightdreambabe.com",48],["novoglam.com",48],["novohot.com",48],["novojoy.com",48],["novoporn.com",48],["novostrong.com",48],["pbabes.com",48],["pussystate.com",48],["redpornblog.com",48],["rossoporn.com",48],["sexynakeds.com",48],["thousandbabes.com",48],["gulf-up.com",48],["cutpaid.com",[48,103]],["tmearn.*",[48,103]],["mixloads.com",48],["ancensored.com",48],["shorten.*",[48,103,171]],["123animes.*",[48,105]],["openloadmovies.*",48],["savevideo.tube",48],["files.cx",48],["gdriveplayer.*",48],["drivefire.co",48],["porngo.com",48],["crichd.*",48],["arenabg.com",48],["vidload.net",48],["vipracing.*",48],["lkc21.net",48],["mavanimes.co",48],["noxx.to",48],["supervideo.*",48],["yesmovies.*",48],["ilgeniodellostreaming.*",48],["loadsamusicsarchives.blogspot.com",48],["xxxfiles.com",48],["deseneledublate.com",48],["hentaicloud.com",[48,239]],["descarga.xyz",48],["familyporn.tv",48],["pornxp.org",48],["rawmanga.top",48],["superstream.*",48],["ask4movie.*",48],["123movies-org.*",48],["aniwave.to",48],["gayteam.club",48],["sflix.*",48],["primetubsub.*",48],["mangaraw.org",48],["moviesland.*",[48,73]],["f2movies.*",48],["supertelevisionhd.com",48],["a2zapk.*",48],["autoembed.cc",48],["whisperingauroras.com",48],["live-sport.duktek.pro",48],["mcloud.*",48],["vizcloud.*",48],["vizcloud2.*",48],["daddylive.*",[48,88]],["pornxs.com",49],["movie4me.*",50],["dailygeekshow.com",51],["rue89lyon.fr",52],["onlinemschool.com",53],["bigtitsxxxsex.com",55],["gtaall.com",56],["jizzbunker.com",[56,128]],["tagesspiegel.de",56],["dailymail.co.uk",56],["ceesty.com",57],["corneey.com",57],["destyy.com",57],["festyy.com",57],["gestyy.com",57],["lavozdigital.es",57],["tnaflix.com",58],["imgdew.*",[60,67,68]],["imgmaze.*",[60,68,69]],["imgtown.*",[60,67,68,69]],["imgview.*",[60,67,68]],["angelgals.com",60],["babesexy.com",60],["hotbabeswanted.com",60],["nakedgirlsroom.com",60],["sexybabes.club",60],["sexybabesart.com",60],["favefreeporn.com",60],["onlygayvideo.com",60],["peachytube.com",60],["stepsisterfuck.me",60],["pornhost.com",61],["perfectmomsporn.com",62],["repelis.net",64],["donkparty.com",66],["imgoutlet.*",[67,68]],["imgrock.*",[67,69]],["anitube.*",68],["movisubmalay.*",[68,105]],["bdsmporn.cc",68],["cocoporn.net",68],["dirtyporn.cc",68],["faperplace.com",68],["freeadultvideos.cc",68],["freepornstream.cc",68],["generalpornmovies.com",68],["kinkyporn.cc",68],["moviesxxx.cc",68],["movstube.net",68],["onlinefetishporn.cc",68],["peetube.cc",68],["pornonline.cc",68],["porntube18.cc",68],["streamextreme.cc",68],["streamporn.cc",68],["videoxxx.cc",68],["watchporn.cc",68],["x24.video",68],["xxx24.vip",68],["xxxonline.cc",68],["xxxonlinefree.com",68],["xxxopenload.com",68],["gonzoporn.cc",68],["onlinexxx.cc",68],["tvporn.cc",68],["allporncomic.com",68],["thepiratebay.org",68],["videosection.com",68],["pornky.com",68],["tubxporn.com",68],["imgcredit.xyz",68],["waploaded.*",68],["desixxxtube.org",68],["dirtyindianporn.*",68],["freeindianporn2.com",68],["indianpornvideos.*",68],["kashtanka.*",68],["kashtanka2.com",68],["kompoz2.com",68],["onlyindianporn.*",68],["pakistaniporn2.com",68],["porno18.*",68],["xxnx.*",68],["xxxindianporn.*",68],["pmvhaven.com",68],["thepiratebay.*",69],["adsrt.*",70],["stream2watch.*",72],["peliculas-dvdrip.*",72],["mangahere.onl",[72,165]],["sfastwish.com",73],["kinoger.*",73],["iframejav.*",73],["fembed.*",[73,87]],["films5k.com",73],["mm9842.com",73],["mm9844.*",73],["mm9846.com",73],["javmvp.com",73],["0gogle.com",73],["vidohd.com",73],["kitabmarkaz.xyz",73],["netxwatch.*",73],["anigogo.net",[73,87]],["fbgo.*",[73,87]],["javplaya.com",73],["sbbrisk.com",[73,87]],["sbchill.com",[73,87]],["sbchip.*",[73,87]],["sbflix.*",[73,87]],["sbplay.*",[73,87]],["sbplay2.*",[73,87]],["sbplay3.*",[73,87]],["sbrity.com",[73,87]],["sbrulz.*",[73,87]],["streamsb.*",[73,87,267]],["anxcinema.*",73],["suzihaza.com",73],["javleaked.com",73],["pornhole.club",73],["jvembed.com",73],["jav247.top",73],["mavavid.com",73],["diampokusy.com",73],["vidmedia.top",73],["videofilms.*",73],["prosongs.*",73],["nsfwzone.xyz",73],["zojav.com",73],["ncdnstm.*",73],["playerjavseen.com",73],["javsubbed.xyz",73],["fembed9hd.com",73],["onscreensvideo.com",73],["filelions.*",73],["streamwish.*",73],["vidhidevip.com",73],["cloudrls.com",73],["embedwish.com",73],["fc2stream.tv",73],["javhahaha.us",73],["javlion.xyz",73],["javibe.net",73],["jvideo.xyz",73],["kissmovies.net",73],["nudecelebforum.com",74],["pronpic.org",75],["chyoa.com",76],["thisisfutbol.com",77],["pcwelt.de",78],["sixsistersstuff.com",79],["bunkr.*",80],["insidemarketing.it",81],["worldaide.fr",81],["asmwall.com",81],["vermangasporno.com",82],["celebjihad.com",82],["dirtyship.com",82],["fullporner.com",[82,315]],["lejdd.fr",83],["gamekult.com",83],["bharian.com.my",83],["thememypc.net",84],["cityam.com",85],["inhabitat.com",86],["m4ufree.*",[87,110]],["0123movies.*",87],["123moviesd.com",87],["gomovies.*",87],["cloudvideo.tv",87],["googlvideo.com",87],["5movies.*",87],["123moviesc.*",87],["easyexploits.com",87],["proxybit.*",87],["123movieshd.*",87],["kinoking.cc",87],["1tamilmv.*",87],["toxicwap.us",87],["buffstream.*",87],["coverapi.store",87],["tenies-online.*",87],["m4uhd.*",87],["hdhub4u.*",87],["hblinks.pro",87],["watchseries9.*",87],["afdah2.com",87],["moviesjoy.*",87],["torrentstatus.*",87],["yts2.*",87],["y2mate.*",87],["kissasia.cc",87],["alexsports.*",87],["watchsexandthecity.com",87],["2embed.*",87],["ymovies.vip",87],["cl1ca.com",87],["4br.me",87],["fir3.net",87],["seulink.*",87],["encurtalink.*",87],["fmovies.*",87],["worldfreeware.com",88],["ellibrepensador.com",88],["rexdlfile.com",88],["grantorrent1.*",89],["subtorrents.*",[89,100]],["subtorrents1.*",[89,100]],["speedtest.net",90],["livingstondaily.com",90],["goafricaonline.com",91],["link.tl",92],["lnk.news",93],["lnk.parts",93],["filesamba.*",94],["purelyceleb.com",94],["piraproxy.app",94],["theproxy.*",94],["nosteamgames.ro",94],["zootube1.com",95],["xxxtubezoo.com",95],["zooredtube.com",95],["videos1002.com",96],["sab.bz",96],["javseen.tv",96],["autobild.de",98],["alimaniac.com",99],["1xxx-tube.com",101],["asssex-hd.com",101],["bigcockfreetube.com",101],["bigdickwishes.com",101],["enjoyfuck.com",101],["freemomstube.com",101],["fuckmonstercock.com",101],["gobigtitsporn.com",101],["gofetishsex.com",101],["hard-tubesex.com",101],["hd-analporn.com",101],["hiddencamstube.com",101],["kissmaturestube.com",101],["lesbianfantasyxxx.com",101],["modporntube.com",101],["pornexpanse.com",101],["pornokeep.com",101],["pussytubeebony.com",101],["tubesex.me",101],["vintagesexpass.com",101],["voyeur-pornvideos.com",101],["voyeurspyporn.com",101],["voyeurxxxfree.com",101],["xxxtubenote.com",101],["yummysextubes.com",101],["tubexxxone.com",101],["airsextube.com",101],["asianbabestube.com",101],["bigtitsxxxfree.com",101],["blowjobpornset.com",101],["entertubeporn.com",101],["finexxxvideos.com",101],["freesexvideos24.com",101],["fuckhairygirls.com",101],["gopornindian.com",101],["grandmatube.pro",101],["grannyfucko.com",101],["grannyfuckxxx.com",101],["hiddencamhd.com",101],["hindiporno.pro",101],["indianbestporn.com",101],["japanesemomsex.com",101],["japanxxxass.com",101],["massagefreetube.com",101],["maturepussies.pro",101],["megajapansex.com",101],["new-xxxvideos.com",101],["xxxblowjob.pro",101],["xxxtubegain.com",101],["xxxvideostrue.com",101],["acutetube.net",101],["agedtubeporn.com",101],["agedvideos.com",101],["onlinegrannyporn.com",101],["freebigboobsporn.com",101],["tubeinterracial-porn.com",101],["best-xxxvideos.com",101],["bestanime-xxx.com",101],["blowxxxtube.com",101],["callfuck.com",101],["teenhubxxx.com",101],["tubepornasian.com",101],["xxxtubedot.com",101],["blowjobfucks.com",101],["dirtyasiantube.com",101],["maturewomenfucks.com",101],["pornmaturetube.com",101],["setfucktube.com",101],["tourporno.com",101],["do-xxx.com",101],["dotfreesex.com",101],["dotfreexxx.com",101],["easymilftube.net",101],["electsex.com",101],["fineretroporn.com",101],["freehqtube.com",101],["freshmaturespussy.com",101],["freshsexxvideos.com",101],["fuckedporno.com",101],["gallant-matures.com",101],["hqhardcoreporno.com",101],["girlssexxxx.com",101],["glamourxxx-online.com",101],["vintagepornnew.com",101],["tubevintageporn.com",101],["goxxxvideos.com",101],["grouppornotube.com",101],["hqxxxmovies.com",101],["hqsex-xxx.com",101],["hqamateurtubes.com",101],["hotpussyhubs.com",101],["hdpornteen.com",101],["indecentvideos.com",101],["ifreefuck.com",101],["kittyfuckstube.com",101],["lightxxxtube.com",101],["momstube-porn.com",101],["modelsxxxtube.com",101],["milfpussy-sex.com",101],["nicexxxtube.com",101],["neatpornodot.com",101],["neatfreeporn.com",101],["bigtitsporn-tube.com",101],["tubehqxxx.com",101],["nakedbbw-sex.com",101],["onlineteenhub.com",101],["online-xxxmovies.com",101],["pussyhothub.com",101],["pornxxxplace.com",101],["pornoteensex.com",101],["pornonote.pro",101],["pornoaid.com",101],["pornclipshub.com",101],["whitexxxtube.com",101],["sweetadult-tube.com",101],["sweet-maturewomen.com",101],["sexymilfsearch.com",101],["sextubedot.com",101],["hqmaxporn.com",101],["sexlargetube.com",101],["sexhardtubes.com",101],["tubepornstock.com",101],["xfuckonline.com",101],["xxxtubepass.com",101],["yourhomemadetube.com",101],["sheamateur.com",102],["cuts-url.com",103],["exe.io",[103,171]],["adsafelink.com",103],["megalink.*",103],["earnload.*",103],["modebaca.com",103],["cutdl.xyz",103],["miniurl.*",103],["smoner.com",103],["droplink.co",103],["jameeltips.us",103],["blog.linksfire.co",103],["recipestutorials.com",103],["shrinke.*",103],["shrinkme.*",103],["shrinkforearn.in",103],["qthang.net",103],["linksly.co",103],["curto.win",103],["earncash.*",103],["imagenesderopaparaperros.com",103],["shortenbuddy.com",103],["apksvip.com",103],["4cash.me",103],["shortzzy.*",103],["teknomuda.com",103],["savelink.site",103],["lite-link.*",103],["adcorto.*",103],["samaa-pro.com",103],["miklpro.com",103],["modapk.link",103],["ccurl.net",103],["dogecoin.*",103],["linkpoi.me",103],["pewgame.com",103],["crazyblog.in",103],["rshrt.com",103],["dz-linkk.com",103],["upfiles.*",103],["adurly.cc",103],["link.asiaon.top",103],["beingtek.com",103],["swzz.xyz",103],["gsm-solution.com",104],["torrentz2eu.*",105],["afilmywap.*",105],["okhatrimaza.*",105],["123anime.*",105],["gomoviesfree.*",105],["gomo.to",105],["dlapk4all.com",105],["icy-veins.com",106],["bidouillesikea.com",106],["girlsgogames.co.uk",107],["godtube.com",107],["ringsidenews.com",107],["advocate.com",107],["alternet.org",107],["androidcure.com",107],["arobasenet.com",107],["attackofthefanboy.com",107],["bodytr.com",107],["clutchpoints.com",107],["cultofmac.com",107],["currentaffairs.gktoday.in",107],["dailycaller.com",107],["digitalmusicnews.com",107],["dogtime.com",107],["dotesports.com",107],["epicstream.com",107],["fallbrook247.com",107],["feral-heart.com",107],["gamesgames.com",107],["gamerevolution.com",107],["gazettenet.com",107],["insidenova.com",107],["jetztspielen.de",107],["kasvekuvvet.net",107],["leitesculinaria.com",107],["nbcnews.com",107],["notevibes.com",107],["practicalpainmanagement.com",107],["prad.de",107],["progameguides.com",107],["pwinsider.com",107],["realityblurb.com",[107,226]],["ruinmyweek.com",107],["sanangelolive.com",107],["sanfoundry.com",107],["selfhacked.com",107],["siliconera.com",107],["simpleflying.com",107],["son.co.za",107],["sporcle.com",107],["stealthoptional.com",107],["thesportster.com",107],["upi.com",107],["visualcapitalist.com",107],["wegotthiscovered.com",107],["primagames.com",107],["alcasthq.com",108],["mzee.com",108],["supforums.com",109],["player.xxxbestsites.com",110],["megatube.xxx",110],["hot-cartoon.com",110],["richhioon.eu",110],["wowstream.top",110],["xxvideoss.net",110],["player.subespanolvip.com",110],["vidcdn.co",[110,289]],["justswallows.net",110],["player.tormalayalamhd.*",110],["koreanbj.club",110],["monstream.org",110],["player.hdgay.net",110],["telenovelas-turcas.com.es",110],["gocurrycracker.com",112],["depedlps.*",112],["xcums.com",112],["ihub.live",112],["naturalbd.com",112],["freeuseporn.com",112],["salamanca24horas.com",113],["bollywoodshaadis.com",114],["ngelag.com",115],["videovard.*",115],["huim.com",116],["cambay.tv",119],["caminspector.net",119],["camwhorespy.com",119],["camwhoria.com",119],["camgoddess.tv",119],["zemporn.com",120],["wpgdadatong.com",121],["wikifeet.com",122],["root-top.com",123],["allmomsex.com",124],["allnewindianporn.com",124],["analxxxvideo.com",124],["animalextremesex.com",124],["anime3d.xyz",124],["animefuckmovies.com",124],["animepornfilm.com",124],["animesexbar.com",124],["animesexclip.com",124],["animexxxsex.com",124],["animexxxfilms.com",124],["anysex.club",124],["apetube.asia",124],["asianfuckmovies.com",124],["asianfucktube.com",124],["asianporn.sexy",124],["asiansex.*",124],["asiansexcilps.com",124],["beeg.fund",124],["beegvideoz.com",124],["bestasiansex.pro",124],["bravotube.asia",124],["brutalanimalsfuck.com",124],["candyteenporn.com",124],["daddyfuckmovies.com",124],["desifuckonline.com",124],["exclusiveasianporn.com",124],["exteenporn.com",124],["fantasticporn.net",124],["fantasticyoungporn.com",124],["fineasiansex.com",124],["firstasianpussy.com",124],["freeindiansextube.com",124],["freepornasians.com",124],["freerealvideo.com",124],["fuck-beeg.com",124],["fuck-xnxx.com",124],["fuckfuq.com",124],["fuckundies.com",124],["gojapaneseporn.com",124],["golderotica.com",124],["goodyoungsex.com",124],["goyoungporn.com",124],["hardxxxmoms.com",124],["hdvintagetube.com",124],["hentaiporn.me",124],["hentaisexfilms.com",124],["hentaisexuality.com",124],["hot-teens-movies.mobi",124],["hotanimepornvideos.com",124],["hotanimevideos.com",124],["hotasianpussysex.com",124],["hotjapaneseshows.com",124],["hotmaturetube.com",124],["hotmilfs.pro",124],["hotorientalporn.com",124],["hotpornyoung.com",124],["hotxxxjapanese.com",124],["hotxxxpussy.com",124],["indiafree.net",124],["indianpornvideo.online",124],["japanfuck.*",124],["japanporn.*",124],["japanpornclip.com",124],["japanesetube.video",124],["japansex.me",124],["japanesexxxporn.com",124],["japansporno.com",124],["japanxxx.asia",124],["japanxxxworld.com",124],["keezmovies.surf",124],["lingeriefuckvideo.com",124],["liveanimalporn.zooo.club",124],["madhentaitube.com",124],["megahentaitube.com",124],["megajapanesesex.com",124],["megajapantube.com",124],["milfxxxpussy.com",124],["momsextube.pro",124],["momxxxass.com",124],["monkeyanimalporn.com",124],["moviexxx.mobi",124],["newanimeporn.com",124],["newjapanesexxx.com",124],["nicematureporn.com",124],["nudeplayboygirls.com",124],["originalindianporn.com",124],["originalteentube.com",124],["pig-fuck.com",124],["plainasianporn.com",124],["popularasianxxx.com",124],["pornanimetube.com",124],["pornasians.pro",124],["pornhat.asia",124],["pornjapanesesex.com",124],["pornvintage.tv",124],["primeanimesex.com",124],["realjapansex.com",124],["realmomsex.com",124],["redsexhub.com",124],["retroporn.world",124],["retrosexfilms.com",124],["sex-free-movies.com",124],["sexanimesex.com",124],["sexanimetube.com",124],["sexjapantube.com",124],["sexmomvideos.com",124],["sexteenxxxtube.com",124],["sexxxanimal.com",124],["sexyoungtube.com",124],["sexyvintageporn.com",124],["spicyvintageporn.com",124],["sunporno.club",124],["tabooanime.club",124],["teenextrem.com",124],["teenfucksex.com",124],["teenhost.net",124],["teensex.*",124],["teensexass.com",124],["tnaflix.asia",124],["totalfuckmovies.com",124],["totalmaturefuck.com",124],["txxx.asia",124],["vintagetube.*",124],["voyeurpornsex.com",124],["warmteensex.com",124],["wetasiancreampie.com",124],["wildhentaitube.com",124],["wowyoungsex.com",124],["xhamster-art.com",124],["xmovie.pro",124],["xnudevideos.com",124],["xnxxjapon.com",124],["xpics.me",124],["xvide.me",124],["xxxanimefuck.com",124],["xxxanimevideos.com",124],["xxxanimemovies.com",124],["xxxhentaimovies.com",124],["xxxhothub.com",124],["xxxjapaneseporntube.com",124],["xxxlargeporn.com",124],["xxxmomz.com",124],["xxxmovies.*",124],["xxxpornmilf.com",124],["xxxpussyclips.com",124],["xxxpussysextube.com",124],["xxxretrofuck.com",124],["xxxsex.pro",124],["xxxsexyjapanese.com",124],["xxxteenyporn.com",124],["xxxvideo.asia",124],["xxxyoungtv.com",124],["youjizzz.club",124],["youngpussyfuck.com",124],["0l23movies.*",125],["dvdporngay.com",126],["software-on.com",126],["kpopjjang.com",[126,170]],["siteunblocked.info",[126,234]],["unblocked.name",[126,234]],["uproxy2.biz",[126,234]],["za.gl",127],["activistpost.com",[128,132]],["cloudvideotv.*",129],["ladepeche.fr",129],["bitzite.com",[129,169]],["jemontremonminou.com",129],["jemontremasextape.com",129],["jemontremabite.com",129],["kinoger.ru",130],["moviesapi.club",130],["clasicotas.org",131],["movierulzlink.*",132],["newmovierulz.*",132],["3hiidude.*",132],["saveshared.com",132],["simpledownload.net",132],["compucalitv.com",133],["hot2k.com",134],["lupaste.com",134],["pornovenezolano.com.ve",134],["romnation.net",134],["venezporn.com",134],["hubzter.com",135],["collater.al",135],["nzpocketguide.com",135],["ispunlock.*",136],["tpb.*",136],["phonenumber-lookup.info",137],["maniac.de",138],["cambro.tv",139],["filerio.in",139],["call2friends.com",139],["gigaho.com",139],["trendsderzukunft.de",139],["forum.lolesporte.com",139],["mytoolz.net",139],["haoweichi.com",139],["tcheats.com",140],["tobys.dk",140],["sembunyi.in",141],["anime-jl.net",142],["fuckdy.com",143],["bdsmporntub.com",143],["femdomporntubes.com",143],["vgmlinks.*",145],["nackte.com",146],["highporn.net",146],["thegatewaypundit.com",147],["your-daily-girl.com",147],["720pxmovies.blogspot.com",148],["penis-bilder.com",149],["boyfriendtv.com",149],["dansmovies.com",149],["shegotass.info",149],["phimmoiaz.cc",149],["imgdawgknuttz.com",150],["m4maths.com",151],["poki-gdn.com",151],["sctoon.net",151],["megapornfreehd.com",152],["tonpornodujour.com",153],["thestreameast.*",154],["absentescape.net",154],["forgepattern.net",154],["vidlink.pro",154],["nflscoop.xyz",154],["onepiecepower.com",154],["bezpolitickekorektnosti.cz",155],["protopage.com",156],["topito.com",157],["livesport.ws",159],["citynow.it",160],["variety.com",161],["cuatro.com",162],["mitele.es",162],["telecinco.es",162],["serieslandia.com",163],["softwaredescargas.com",163],["morritastube.xxx",[163,250]],["rawstory.com",164],["post-gazette.com",164],["rainanime.*",165],["bilasport.net",166],["yogitimes.com",167],["juba-get.com",168],["percentagecalculator.guru",168],["claim.8bit.ca",[169,215]],["addtobucketlist.com",169],["alternativa104.net",169],["asumesi.com",169],["ayo24.id",169],["barrier-free.net",169],["berich8.com",169],["blogenginee.com",169],["bloooog.it",169],["blurayufr.*",169],["branditechture.agency",169],["chataigpt.org",169],["coinsrev.com",169],["eliobenedetto.it",169],["examscisco.com",169],["fattelodasolo.it",169],["helicomicro.com",169],["iamflorianschulze.com",169],["karwan.tv",169],["kyoto-kanko.net",169],["limontorrents.com",169],["livenewsof.com",169],["magesypro.com",169],["medeberiya.site",169],["medeberiya1.com",169],["medeberiyax.com",169],["mscdroidlabs.es",169],["nakiny.com",[169,178]],["oyundunyasi.net",169],["parrocchiapalata.it",169],["photoshopvideotutorial.com",169],["rockmods.net",169],["samovies.net",169],["sevenst.us",[169,178]],["sulocale.sulopachinews.com",169],["tabering.net",169],["xn--nbkw38mlu2a.com",169],["adsy.pw",169],["playstore.pw",169],["bootyexpo.net",169],["arbweb.info",169],["solarchaine.com",169],["tokenmix.pro",169],["terafly.me",169],["faucetbravo.fun",169],["vstdrive.in",170],["lonely-mature.com",172],["tubepornclassic.com",173],["the-voice-of-germany.de",174],["adn.com",175],["spokesman.com",176],["news-herald.com",176],["elmundo.es",177],["expansion.com",177],["marca.com",177],["allusione.org",178],["cyberstumble.com",178],["venusarchives.com",178],["freemagazines.top",178],["elektrikmen.com",178],["solotrend.net",178],["itsecuritynews.info",178],["thebharatexpressnews.com",178],["inwepo.co",178],["daemon-hentai.com",178],["gamedrive.org",178],["toramemoblog.com",178],["7daystodiemods.com",178],["7review.com",178],["asupan.me",178],["avitter.net",178],["bi-girl.net",178],["carryflix.icu",178],["dark5k.com",178],["fairyhorn.cc",178],["gojo2.com",178],["gorecenter.com",178],["huitranslation.com",178],["javhdvideo.org",178],["nemumemo.com",178],["peppe8o.com",178],["phodoi.vn",178],["savingsomegreen.com",178],["tutsnode.*",178],["boredbat.com",178],["web.businessuniqueidea.com",178],["questloops.com",178],["spinbot.com",179],["androidonepro.com",180],["arcadepunks.com",181],["wohnungsboerse.net",182],["web2.0calc.*",183],["nbareplayhd.com",184],["convert-case.softbaba.com",184],["thepoorcoder.com",184],["techgeek.digital",184],["readcomiconline.*",184],["warps.club",185],["truyenaudiocv.net",185],["kompasiana.com",186],["spectrum.ieee.org",187],["thenation.com",188],["newsonthegotoday.com",189],["dr-farfar.com",190],["nysainfo.pl",190],["sandiegouniontribune.com",191],["fernsehserien.de",191],["femalefirst.co.uk",192],["theregister.co.uk",193],["sportstream.live",194],["savealoonie.com",195],["open3dmodel.com",195],["macrumors.com",196],["napolipiu.com",197],["manpeace.org",198],["getcopy.link",198],["faucetwork.space",198],["androidadult.com",198],["gaminginfos.com",198],["nohat.cc",[199,200]],["fuskator.com",201],["scrubson.blogspot.com",202],["aquariumgays.com",203],["paginadanoticia.com.br",204],["gplinks.*",205],["aylink.co",206],["gitizle.vip",206],["shtms.co",206],["suaurl.com",[207,208]],["redisex.*",[207,341,344,345]],["blog24.me",209],["exactpay.online",[209,216]],["crypto4yu.com",209],["laweducationinfo.com",210],["savemoneyinfo.com",210],["worldaffairinfo.com",210],["godstoryinfo.com",210],["successstoryinfo.com",210],["cxissuegk.com",210],["learnmarketinfo.com",210],["bhugolinfo.com",210],["armypowerinfo.com",210],["rsgamer.app",210],["phonereviewinfo.com",210],["makeincomeinfo.com",210],["gknutshell.com",210],["vichitrainfo.com",210],["workproductivityinfo.com",210],["dopomininfo.com",210],["hostingdetailer.com",210],["fitnesssguide.com",210],["tradingfact4u.com",210],["cryptofactss.com",210],["softwaredetail.com",210],["artoffocas.com",210],["insurancesfact.com",210],["travellingdetail.com",210],["currentrecruitment.com",211],["investorveda.com",211],["techacode.com",212],["azmath.info",212],["azsoft.*",212],["downfile.site",212],["downphanmem.com",212],["expertvn.com",212],["memangbau.com",212],["trangchu.news",212],["aztravels.net",212],["claimclicks.com",213],["gledaitv.*",213],["tejtime24.com",214],["comohoy.com",[214,312]],["cimanow.cc",214],["n-tv.de",217],["gaystream.pw",218],["blowjobgif.net",219],["erospots.info",220],["pornforrelax.com",221],["atlaq.com",222],["bolly4umovies.*",222],["douploads.net",222],["moalm-qudwa.blogspot.com",222],["123movieshub.*",223],["cima-club.*",223],["flixhq.*",223],["hindilinks4u.*",223],["t7meel.*",223],["vidstream.pro",223],["kodewebsite.com",224],["familyminded.com",225],["foxvalleyfoodie.com",225],["merriam-webster.com",225],["news.com.au",225],["playstationlifestyle.net",225],["sportsnaut.com",225],["tempumail.com",225],["toledoblade.com",225],["pleated-jeans.com",226],["obsev.com",226],["wepc.com",226],["gal-dem.com",227],["lagacetadesalamanca.es",228],["infocorp.io",229],["addictinggames.com",230],["comparteunclic.com",231],["starbux.io",231],["qashbits.com",231],["upnewsinfo.com",232],["toolforge.org",233],["getdogecoins.com",235],["malaysiastock.biz",236],["1bit.space",237],["1bitspace.com",237],["ytanime.tv",237],["pimylifeup.com",238],["camwhorez.video",239],["best-shopme.com",240],["cpomagazine.com",241],["doramasyt.com",242],["xxxdan.com",243],["standardmedia.co.ke",244],["files.fm",244],["ludwig-van.com",244],["abandonmail.com",245],["hentais.tube",246],["hentaitube.online",246],["aegeanews.gr",247],["batterypoweronline.com",247],["centrocommercialevulcano.com",247],["cieonline.co.uk",247],["commsbusiness.co.uk",247],["dailygrindonline.net",247],["delo.bg",247],["dynastyseries.com",247],["fabmx1.com",247],["fat-bike.com",247],["fmj.co.uk",247],["localemagazine.com",247],["loveourweddingmag.com",247],["metaforespress.gr",247],["myvalley.it",247],["niestatystyczny.pl",247],["primapaginamarsala.it",247],["ringelnatz.net",247],["schoolsweek.co.uk",247],["sikkenscolore.it",247],["sportbet.gr",247],["stadtstudenten.de",247],["stagemilk.com",247],["tautasdziesmas.lv",247],["thetoneking.com",247],["toplickevesti.com",247],["zeroradio.co.uk",247],["miohentai.com",248],["sluttyrat.com",249],["moviehdf.*",251],["k12reader.com",252],["cachevalleydaily.com",252],["panel.skynode.pro",253],["imag-r.com",253],["radionylive.com",254],["radioitalylive.com",254],["radiolovelive.com",254],["radiocountrylive.com",254],["radiosymphony.com",254],["miamibeachradio.com",254],["radiorockon.com",254],["radioitaliacanada.com",254],["radioitalianmusic.com",254],["radioamericalatina.com",254],["radiosantaclaus.com",254],["radionorthpole.com",254],["radionatale.com",254],["pornvideoq.com",256],["gaminggorilla.com",256],["sexuhot.com",256],["rexxx.org",257],["world4.eu",258],["flinsetyadi.com",258],["trytutorial.com",258],["rimworldbase.com",258],["ifreemagazines.com",258],["romaniataramea.com",259],["amateur8.com",260],["freeporn8.com",260],["maturetubehere.com",260],["sortporn.com",260],["textovisia.com",261],["hotcleaner.com",262],["momo-net.com",263],["hardwarezone.com.sg",264],["b2bhint.com",[265,266]],["baikin.net",265],["unsurcoenlasombra.com",265],["veryfastdownload.pw",268],["nation.africa",269],["manganelo.tv",270],["vermoegen.org",271],["javhub.net",[272,273]],["inhumanity.com",274],["sunci.net",275],["iguarras.com",276],["iputitas.net",276],["fastream.to",276],["cricfree.*",276],["sportskart.*",276],["miraculous.to",277],["glotorrents.fr-proxy.com",278],["glotorrents.theproxy.ws",278],["tutele.sx",279],["dirp.me",280],["mymusicreviews.com",281],["bg-gledai.*",281],["katmoviefix.*",282],["integral-calculator.com",283],["derivative-calculator.net",283],["shorttrick.in",284],["shrdsk.me",284],["looptorrent.org",284],["noicetranslations.blogspot.com",284],["serviceemmc.com",284],["basic-tutorials.de",285],["depvailon.com",286],["111.90.150.10",287],["111.90.150.149",287],["111.90.151.26",287],["111.90.141.252",287],["mangahentai.xyz",288],["nhentai.io",[290,291]],["erofound.com",292],["erome.com",293],["flaticon.com",294],["zertalious.xyz",295],["tweakcentral.net",296],["nokiahacking.pl",297],["javct.net",298],["veryfreeporn.com",299],["linkbin.me",[300,301]],["filemoon.*",302],["teachoo.com",303],["maisonbrico.com",304],["vebo1.com",305],["seriesmetro.net",306],["blog.textpage.xyz",307],["alliptvlinks.com",307],["sportnews.to",308],["movies4u.*",308],["movies4u3.*",308],["gamerxyt.com",308],["faqwiki.us",308],["zeeplayer.pages.dev",308],["qcheng.cc",309],["hygiena.com",310],["netchimp.co.uk",311],["xgroovy.com",313],["ruyashoujo.com",314],["xmateur.com",315],["x2download.com",316],["truyen-hentai.com",317],["redd.tube",318],["sendspace.com",319],["leechpremium.net",320],["vikingf1le.us.to",320],["brainly.*",321],["file-upload.*",322],["dood.*",323],["freethesaurus.com",324],["thefreedictionary.com",324],["counterstrike-hack.leforum.eu",325],["ajt.xooit.org",325],["drivemoe.com",326],["dsharer.com",326],["pupupul.site",327],["fansubseries.com.br",327],["usersdrive.com",328],["manoramaonline.com",329],["realmoasis.com",330],["technewsworld.com",331],["rjno1.com",332],["gpldose.com",333],["zinkmovies.in",334],["pornhoarder.net",335],["sbs.com.au",336],["pouvideo.*",337],["povvideo.*",337],["povw1deo.*",337],["povwideo.*",337],["powv1deo.*",337],["powvibeo.*",337],["powvideo.*",337],["powvldeo.*",337],["redecanais.*",[338,339,340,341,342,343]],["zoominar.online",346],["sfr.fr",347],["ericdraken.com",348],["djs.sk",350]]);
const exceptionsMap = new Map([["pingit.com",[9,17,48,70]],["games.dailymail.co.uk",[56]]]);
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
    try { abortOnPropertyRead(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
