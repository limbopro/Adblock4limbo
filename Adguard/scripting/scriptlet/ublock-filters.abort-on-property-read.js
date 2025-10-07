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
const argsList = [["Keen"],["MONETIZER101.init"],["JadIds"],["navigator.userAgent"],["__eiPb"],["detector"],["SmartAdServerASMI"],["_sp_._networkListenerData"],["AntiAd.check"],["_sp_.mms.startMsg"],["retrievalService"],["admrlWpJsonP"],["LieDetector"],["newcontent"],["ExoLoader.serve"],["stop"],["open"],["ga.length"],["Adcash"],["btoa"],["console.clear"],["jwplayer.utils.Timer"],["adblock_added"],["exoNoExternalUI38djdkjDDJsio96"],["SBMGlobal.run.pcCallback"],["SBMGlobal.run.gramCallback"],["Date.prototype.toUTCString"],["PopAds"],["runAdblock"],["showAds"],["ExoLoader"],["loadTool"],["popns"],["adBlockDetected"],["doSecondPop"],["RunAds"],["jQuery.adblock"],["ads_block"],["blockAdBlock"],["decodeURI"],["exoOpts"],["doOpen"],["prPuShown"],["document.dispatchEvent"],["document.createElement"],["pbjs.libLoaded"],["mz"],["AaDetector"],["_abb"],["Math.floor"],["jQuery.hello"],["isShowingAd"],["oms.ads_detect"],["hasAdBlock"],["ALoader"],["Notification"],["NREUM"],["ads.pop_url"],["tabUnder"],["ExoLoader.addZone"],["raConf"],["Aloader"],["advobj"],["popTimes"],["addElementToBody"],["phantomPopunders"],["CustomEvent"],["exoJsPop101"],["popjs.init"],["rmVideoPlay"],["r3H4"],["AdservingModule"],["__Y"],["__ads"],["document.createEvent"],["__NA"],["PerformanceLongTaskTiming"],["proxyLocation"],["Int32Array"],["popMagic.init"],["adblock"],["dataPopUnder"],["SmartWallSDK"],["Abd_Detector"],["paywallWrapper"],["registerSlideshowAd"],["mm"],["require"],["getUrlParameter"],["_sp_"],["goafricaSplashScreenAd"],["_0xbeb9"],["popAdsClickCount"],["_wm"],["popunderSetup"],["jsPopunder"],["S9tt"],["adSSetup"],["document.cookie"],["capapubli"],["Aloader.serve"],["__htapop"],["app_vars.force_disable_adblock"],["_0x32d5"],["glxopen"],["adbackDebug"],["googletag"],["performance"],["htaUrl"],["BetterJsPop"],["setExoCookie"],["encodeURIComponent"],["ReviveBannerInterstitial"],["Debugger"],["_pop"],["FuckAdBlock"],["isAdEnabled"],["promo"],["_0x311a"],["console.log"],["h1mm.w3"],["checkAdblock"],["NativeAd"],["adblockblock"],["popit"],["rid"],["decodeURIComponent"],["popad"],["XMLHttpRequest"],["localStorage"],["my_pop"],["nombre_dominio"],["String.fromCharCode"],["redirectURL"],["TID"],["adsanity_ad_block_vars"],["pace"],["pa"],["td_ad_background_click_link"],["onload"],["checkAds"],["popjs"],["detector_launch"],["Popunder"],["Date.prototype.toGMTString"],["initPu"],["jsUnda"],["adtoniq"],["myFunction_ads"],["popunder"],["Pub2a"],["alert"],["V4ss"],["popunders"],["aclib"],["sc_adv_out"],["pageParams.dispAds"],["document.bridCanRunAds"],["pu"],["MessageChannel"],["advads_passive_ads"],["pmc_admanager.show_interrupt_ads"],["$REACTBASE_STATE.serverModules.push"],["scriptwz_url"],["setNptTechAdblockerCookie"],["loadRunative"],["pwparams"],["fuckAdBlock"],["detectAdBlock"],["adsBlocked"],["Base64"],["parcelRequire"],["EviPopunder"],["preadvercb"],["$ADP"],["MG2Loader"],["Connext"],["adUnits"],["b2a"],["angular"],["downloadJSAtOnload"],["penci_adlbock"],["Number.isNaN"],["doads"],["adblockDetector"],["adblockDetect"],["initAdserver"],["splashpage.init"],["___tp"],["STREAM_CONFIGS"],["mdpDeBlocker"],["googlefc"],["ppload"],["RegAdBlocking"],["checkABlockP"],["mdp_deblocker"],["adthrive"],["tie"],["document.write"],["ignore_adblock"],["$.prototype.offset"],["ea.add"],["adcashMacros"],["_cpp"],["pareAdblock"],["clickCount"],["xmlhttp"],["document.oncontextmenu"],["shortcut"],["bypass_url"],["document.onmousedown"],["SMart1"],["checkAdsBlocked"],["navigator.brave"],["Light.Popup"],["htmls"],["Swal.fire"],["embedAddefend"],["adsbyjuicy"],["ExoDetector"],["Pub2"],["adver.abFucker.serve"],["zfgformats"],["zfgstorage"],["jQuery.popunder"],["__cmpGdprAppliesGlobally"],["__aaZoneid"],["HTMLIFrameElement"],["dsanity_ad_block_vars"],["videootv"],["detectAdBlocker"],["Drupal.behaviors.agBlockAdBlock"],["NoAdBlock"],["mMCheckAgainBlock"],["noAdBlockers"],["GetWindowHeight"],["show_ads"],["google_ad_status"],["u_cfg"],["adthrive.config"],["TotemToolsObject"],["noAdBlock"],["advads_passive_groups"],["GLX_GLOBAL_UUID_RESULT"],["document.head.appendChild"],["canRunAds"],["checkCookieClick"],["wpsite_clickable_data"],["mnpwclone"],["SluttyPops"],["sites_urls_pops"],["popUp"],["rccbase_styles"],["adBlockerDetected"],["adp"],["popundrCheck"],["history.replaceState"],["rexxx.swp"],["ai_run_scripts"],["bizpanda"],["Q433"],["isAdBlockActive"],["Element.prototype.attachShadow"],["document.body.appendChild"],["SPHMoverlay"],["google_jobrunner"],["popupBlocker"],["DoodPop"],["SmartPopunder.make"],["evolokParams.adblock"],["JSON.parse"],["document.referrer"],["cainPopUp"],["pURL"],["inhumanity_pop_var_name"],["app_vars.please_disable_adblock"],["afScript"],["history.back"],["String.prototype.charCodeAt"],["puShown"],["chp_adblock_browser"],["Request"],["fallbackAds"],["checkAdsStatus"],["advanced_ads_ready"],["PvVideoSlider"],["preroll_helper.advs"],["loadXMLDoc"],["arrvast"],["Script_Manager"],["Script_Manager_Time"],["document.body.insertAdjacentHTML"],["tic"],["pu_url"],["onAdblockerDetected"],["checkBlock"],["adsbygoogle.loaded"],["asgPopScript"],["Object"],["Object.prototype.loadCosplay"],["Object.prototype.loadImages"],["FMPoopS"],["importantFunc"],["console.warn"],["adsRedirectPopups"],["afStorage"],["eazy_ad_unblocker"],["antiAdBlockerHandler"],["killAdKiller"],["aoAdBlockDetected"],["ai_wait_for_jquery"],["checkAdBlock"],["VAST"],["eazy_ad_unblocker_dialog_opener"],["adConfig"],["GeneratorAds"],["aab"],["config"],["runad"],["atob"],["__brn_private_mode"],["start"],["adc"],["document.body.style.backgroundPosition"],["showada"],["popUrl"],["popurl"],["EV.Dab"],["Object.prototype.popupOpened"],["pum_popups"],["document.documentElement.clientWidth"],["Dataffcecd"],["app_advert"],["aclib.runPop"],["odabd"],["jwplayer.vast"],["ConsoleBan"],["disableDevtool"],["ondevtoolopen"],["onkeydown"],["window.location.href"],["window.history.back"],["document.onkeydown"],["close"],["redirectOnClick"],["_oEa"],["dataLayer"],["WebAssembly"],["miner"]];
const hostnamesMap = new Map([["pythonjobshq.com",0],["cyclingnews.com",[1,7]],["sensacine.com",2],["aranzulla.it",3],["wetteronline.*",4],["anallievent.com",4],["au-di-tions.com",4],["badgehungry.com",4],["beingmelody.com",4],["bloggingawaydebt.com",4],["casutalaurei.ro",4],["cornerstoneconfessions.com",4],["culture-informatique.net",4],["dearcreatives.com",4],["disneyfashionista.com",4],["divinelifestyle.com",4],["dna.fr",4],["eslauthority.com",4],["estrepublicain.fr",4],["fitting-it-all-in.com",4],["heresyoursavings.com",4],["irresistiblepets.net",4],["julieseatsandtreats.com",4],["justjared.com",4],["lecturisiarome.ro",4],["lemonsqueezyhome.com",4],["libramemoria.com",4],["lovegrowswild.com",4],["magicseaweed.com",4],["measuringflower.com",4],["mjsbigblog.com",4],["mommybunch.com",4],["mustardseedmoney.com",4],["myfunkytravel.com",4],["onetimethrough.com",4],["panlasangpinoymeatrecipes.com",4],["silverpetticoatreview.com",4],["the-military-guide.com",4],["therelaxedhomeschool.com",4],["the2seasons.com",4],["zeroto60times.com",4],["barefeetonthedashboard.com",4],["bargainbriana.com",4],["betterbuttchallenge.com",4],["bike-urious.com",4],["blwideas.com",4],["eartheclipse.com",4],["entertainment-focus.com",4],["fanatik.com.tr",4],["foreverconscious.com",4],["foreversparkly.com",4],["getdatgadget.com",4],["goodnewsnetwork.org",4],["greenarrowtv.com",4],["hbculifestyle.com",4],["heysigmund.com",4],["hodgepodgehippie.com",4],["homestratosphere.com",4],["indesignskills.com",4],["katiescucina.com",4],["knowyourphrase.com",4],["letsworkremotely.com",4],["lizs-early-learning-spot.com",4],["ledauphine.com",4],["leprogres.fr",4],["milliyet.com.tr",4],["pinoyrecipe.net",4],["prepared-housewives.com",4],["redcarpet-fashionawards.com",4],["republicain-lorrain.fr",4],["savespendsplurge.com",4],["savingadvice.com",4],["shutupandgo.travel",4],["spring.org.uk",4],["stevivor.com",4],["tamaratattles.com",4],["tastefullyeclectic.com",4],["theavtimes.com",4],["thechroniclesofhome.com",4],["thisisourbliss.com",4],["tinyqualityhomes.org",4],["turtleboysports.com",4],["ultimateninjablazingx.com",4],["universfreebox.com",4],["utahsweetsavings.com",4],["vgamerz.com",4],["wheatbellyblog.com",4],["yummytummyaarthi.com",4],["ranker.com",[4,106]],["fluentu.com",4],["cdiscount.com",4],["damndelicious.net",4],["simplywhisked.com",4],["timesofindia.com",5],["bild.de",6],["sueddeutsche.de",7],["20min.ch",7],["al.com",7],["alphr.com",7],["autoexpress.co.uk",7],["bikeradar.com",7],["blick.ch",7],["chefkoch.de",7],["democratandchronicle.com",7],["denofgeek.com",7],["esgentside.com",7],["evo.co.uk",7],["exclusivomen.com",7],["ft.com",7],["gala.de",7],["gala.fr",7],["heatworld.com",7],["itpro.co.uk",7],["livingathome.de",7],["masslive.com",7],["maxisciences.com",7],["metabomb.net",7],["mlive.com",7],["motherandbaby.co.uk",7],["motorcyclenews.com",7],["muthead.com",7],["neonmag.fr",7],["newyorkupstate.com",7],["ngin-mobility.com",7],["nj.com",7],["nola.com",7],["ohmirevista.com",7],["ohmymag.*",7],["oregonlive.com",7],["pennlive.com",7],["programme.tv",7],["programme-tv.net",7],["radiotimes.com",7],["silive.com",7],["simplyvoyage.com",7],["stern.de",7],["syracuse.com",7],["theweek.co.uk",7],["ydr.com",7],["usatoday.com",7],["schoener-wohnen.de",7],["thewestmorlandgazette.co.uk",7],["news-leader.com",7],["etonline.com",7],["bilan.ch",7],["doodle.com",7],["techradar.com",7],["daily-times.com",7],["wirralglobe.co.uk",7],["annabelle.ch",7],["pcgamer.com",7],["nintendolife.com",7],["gamer.com.tw",8],["eltern.de",9],["essen-und-trinken.de",9],["focus.de",9],["eurogamer.de",9],["eurogamer.es",9],["eurogamer.it",9],["eurogamer.net",9],["eurogamer.pt",9],["rockpapershotgun.com",9],["vg247.com",9],["urbia.de",9],["elpasotimes.com",9],["femina.ch",9],["northwalespioneer.co.uk",9],["codeproject.com",10],["cwseed.com",11],["gamestorrents.*",12],["gogoanimes.*",12],["limetorrents.*",12],["piratebayz.*",12],["europixhd.*",[12,47]],["hdeuropix.*",[12,47]],["topeuropix.*",[12,47]],["vivud.com",[12,39,54,55]],["grantorrent.*",[12,88]],["moviescounter.*",12],["elixx.*",[12,71]],["telerium.*",12],["hentaisd.*",12],["7r6.com",[12,20,102]],["mrpiracy.*",12],["bostoncommons.net",12],["reddflix.com",[12,16]],["opisanie-kartin.com",12],["painting-planet.com",12],["kropic.com",[12,39]],["mp4mania1.net",12],["livegore.com",12],["pngio.com",12],["iobit.com",12],["savelinks.*",12],["khatrimazafull.*",12],["mov2day.*",12],["pornproxy.art",12],["pornproxy.app",12],["moviemaniak.com",12],["vegamovvies.to",12],["pagalfree.com",12],["rule34.xxx",13],["realbooru.com",14],["alrincon.com",[14,16,31]],["realgfporn.com",[14,30]],["pornhd.com",[14,53]],["pornhdin.com",[14,16]],["pornomovies.com",[14,39]],["bdsmstreak.com",14],["freepornvideo.sex",14],["teenpornvideo.xxx",14],["yourlust.com",14],["imx.to",14],["mypornstarbook.net",14],["japanesefuck.com",14],["imgtorrnt.in",[14,43]],["prostoporno.*",14],["pandamovies.pw",[14,43]],["club-flank.com",14],["watchfreexxx.net",[14,30,144,145,146]],["dump.xxx",[14,16]],["fuqer.com",[14,16]],["tmohentai.com",14],["xopenload.me",14],["losporn.org",14],["bravoerotica.com",14],["xasiat.com",[14,67]],["redporno.cz",14],["vintageporntubes.com",14],["xxxvideos247.com",14],["young-pussy.com",14],["kingsofteens.com",14],["8teenxxx.com",14],["activevoyeur.com",14],["allschoolboysecrets.com",14],["boobsforfun.com",14],["breedingmoms.com",14],["cockmeter.com",[14,43]],["collegeteentube.com",14],["cumshotlist.com",14],["porn0.tv",14],["ritzysex.com",14],["ritzyporn.com",14],["sexato.com",14],["javbobo.com",[14,23]],["sokobj.com",14],["24pornvideos.com",14],["2japaneseporn.com",14],["xxxvideor.com",14],["youngleak.com",14],["zhlednito.cz",14],["needgayporn.com",14],["zetporn.com",14],["grubstreet.com",15],["twitchy.com",15],["rule34hentai.net",16],["animepahe.*",[16,27]],["kwik.*",[16,27]],["clik.pw",16],["ah-me.com",16],["1337x.unblock2.xyz",[16,19,49]],["1337x.unblocked.*",16],["1337x.unblockit.*",[16,19]],["mitly.us",[16,33]],["pussyspace.*",16],["urlcero.*",16],["linkrex.net",16],["shrtfly.*",[16,58]],["oke.io",16],["watchmygf.me",16],["linkshorts.*",16],["streamcdn.*",[16,47]],["pornoreino.com",[16,30]],["shrt10.com",16],["turbobit.net",16],["bestialitysexanimals.com",16],["bestialporn.com",16],["mujeresdesnudas.club",16],["mynakedwife.video",16],["videoszoofiliahd.com",16],["efukt.com",16],["tranny.one",[16,23]],["vinaurl.*",[16,102]],["porndoe.com",[16,30]],["topvideosgay.com",16],["goto.com.np",16],["femdomtb.com",16],["pornvideotop.com",16],["tryboobs.com",[16,23]],["fapality.com",[16,43]],["babesxworld.com",[16,31,43]],["icutlink.com",16],["oncehelp.com",16],["picbaron.com",[16,31]],["mega-p2p.net",16],["shrinkearn.com",16],["twister.porn",16],["komikcast.*",16],["bitlk.com",16],["bolly4u.*",[16,128]],["tugaflix.*",16],["hdfriday.*",16],["123movies.*",16],["shortearn.*",[16,47]],["pingit.*",[16,47,69,114]],["peekvids.com",16],["playvids.com",16],["pornflip.com",16],["pornoeggs.com",16],["oko.sh",[16,47]],["turbogvideos.com",16],["watch4hd.*",16],["gdtot.*",16],["shrink.*",[16,33,102]],["xxx-image.com",[16,26,128,169]],["coinlyhub.com",[16,102]],["zimabdko.com",16],["bluemediafiles.*",16],["fullxxxmovies.net",16],["elitegoltv.org",16],["extremotvplay.com",16],["semawur.com",16],["oload.*",[16,39,47,114]],["streamhoe.*",[16,114]],["adshrink.it",16],["shrink-service.it",[16,347]],["dailysport.*",[16,47]],["eplsite.uk",[16,47]],["upstream.to",16],["dramakrsubindo.blogspot.com",16],["ex-foary.com",[16,102]],["oceanof-games.com",16],["watchmonkonline.com",16],["iir.ai",[16,102]],["btdb.*",[16,20]],["porncomics.me",16],["orsm.net",16],["linksfire.*",16],["enagato.com",16],["bluemediadownload.*",[16,39]],["bluemediafile.*",[16,39]],["bluemedialink.*",[16,39]],["bluemediastorage.*",[16,39]],["bluemediaurls.*",[16,39]],["urlbluemedia.*",[16,39]],["cloutgist.com",16],["youshort.me",16],["shortylink.store",16],["savetub.com",16],["earnbee.xyz",16],["hellabyte.one",16],["pornj.com",16],["comicxxx.eu",16],["mybestxtube.com",[16,43]],["pornobengala.com",16],["pornicom.com",[16,43]],["xecce.com",16],["teensporn.tv",[16,43]],["pornlift.com",16],["deinesexfilme.com",16],["einfachtitten.com",16],["lesbenhd.com",16],["milffabrik.com",16],["porn-monkey.com",16],["porndrake.com",16],["pornhubdeutsch.net",16],["pornoaffe.com",16],["pornodavid.com",16],["pornoente.tv",16],["pornofisch.com",16],["pornofelix.com",16],["pornohammer.com",16],["pornohelm.com",16],["pornoklinge.com",16],["pornotom.com",16],["pornotommy.com",16],["pornovideos-hd.com",16],["pornozebra.com",16],["xhamsterdeutsch.xyz",16],["xnxx-sexfilme.com",16],["uploadroot.com",16],["link1s.*",[16,102]],["deepfakeporn.net",16],["pkr.pw",[16,102]],["loader.to",16],["namaidani.com",[16,102]],["shorttey.*",[16,102]],["anime47.com",16],["cutearn.net",[16,102]],["filezipa.com",[16,102]],["theblissempire.com",[16,102]],["bestgamehack.top",16],["movizland.*",16],["shorturl.unityassets4free.com",[16,102]],["vevioz.com",[16,102]],["charexempire.com",[16,275]],["crunchyscan.fr",16],["unblocksite.pw",[16,128]],["y2mate.com",16],["androidapks.biz",16],["androidsite.net",16],["animesite.net",16],["computercrack.com",16],["crackedsoftware.biz",16],["crackfree.org",16],["downloadgames.info",16],["downloadsite.org",16],["ebooksite.org",16],["emulatorsite.com",16],["freeflix.info",16],["freemoviesu4.com",16],["freesoccer.net",16],["fseries.org",16],["gamefast.org",16],["gamesite.info",16],["gostreamon.net",16],["hindisite.net",16],["isosite.org",16],["macsite.info",16],["mangasite.org",16],["megamovies.org",16],["moviefree2.com",16],["moviesite.app",16],["moviesx.org",16],["musicsite.biz",16],["patchsite.net",16],["pdfsite.net",16],["play1002.com",16],["productkeysite.com",16],["romsite.org",16],["seriesite.net",16],["siteapk.net",16],["siteflix.org",16],["sitegames.net",16],["sitekeys.net",16],["sitepdf.com",16],["sitesunblocked.*",16],["sitetorrent.com",16],["softwaresite.net",16],["superapk.org",16],["tvonlinesports.com",16],["warezsite.net",16],["watchmovies2.com",16],["watchsite.net",16],["youapk.net",16],["1377x.*",16],["gload.to",16],["bcvc.*",16],["bloggingguidance.com",16],["jockantv.com",16],["moviehaxx.pro",16],["hitomi.la",16],["rpmplay.xyz",16],["receive-sms-online.info",17],["primevid.*",18],["primewire.*",18],["mp4upload.com",18],["watchseries.*",18],["cricstream.me",18],["catchthrust.net",18],["championdrive.co",18],["evfancy.link",18],["megacanais.com",18],["tous-sports.ru",18],["ugreen.autos",18],["hyhd.org",[18,154]],["streamtape.*",18],["watchadsontape.com",18],["livesport24.net",18],["vipboxtv.*",18],["m2list.com",18],["123mf9.my",18],["pepperlivestream.online",18],["vidsrc.*",[18,47,72]],["sanet.lc",18],["antenasport.online",18],["apkship.shop",18],["browncrossing.net",18],["embedstreams.me",18],["engstreams.shop",18],["flostreams.xyz",18],["ilovetoplay.xyz",18],["joyousplay.xyz",18],["nativesurge.info",18],["pawastreams.org",18],["ripplestream4u.shop",18],["rojadirectaenvivo.pl",18],["sansat.link",18],["smartermuver.com",18],["sportsnest.co",18],["sportsurge.net",18],["streameast.*",18],["tarjetarojaenvivo.lat",18],["volokit2.com",18],["ythd.org",18],["kaas.ro",[18,154]],["flix-wave.lol",18],["redvido.com",18],["adbypass.org",18],["bypass.city",18],["dailypudding.com",[18,154]],["fromwatch.com",[18,154]],["visualnewshub.com",[18,154]],["steamplay.*",[19,20,21]],["pornult.com",[19,67]],["fullhdxxx.com",[19,30]],["lendrive.web.id",19],["nimegami.id",19],["short.pe",[20,47]],["mylust.com",[20,43]],["anysex.com",[20,30,39,43,110]],["topflix.*",20],["ustream.*",20],["luscious.net",20],["cloudgallery.net",[20,47]],["alotporn.com",[20,43]],["imgair.net",20],["imgblaze.net",20],["imgfrost.net",20],["vestimage.site",20],["pixlev.*",20],["pixbryexa.sbs",20],["picbqqa.sbs",20],["pixbkghxa.sbs",20],["imgmgf.sbs",20],["picbcxvxa.sbs",20],["imguee.sbs",20],["imgmffmv.sbs",20],["imgbqb.sbs",20],["imgbyrev.sbs",20],["imgbncvnv.sbs",20],["pixtryab.shop",20],["imggune.shop",20],["pictryhab.shop",20],["pixbnab.shop",20],["imgbnwe.shop",20],["imgbbnhi.shop",20],["imgnbii.shop",20],["imghqqbg.shop",20],["imgyhq.shop",20],["pixnbrqwg.sbs",20],["pixnbrqw.sbs",20],["picmsh.sbs",20],["imgpke.sbs",20],["picuenr.sbs",20],["imgolemn.sbs",20],["imgoebn.sbs",20],["picnwqez.sbs",20],["imgjajhe.sbs",20],["pixjnwe.sbs",20],["pixkfjtrkf.shop",20],["pixkfkf.shop",20],["pixdfdjkkr.shop",20],["pixdfdj.shop",20],["picnft.shop",20],["pixrqqz.shop",20],["picngt.shop",20],["picjgfjet.shop",20],["picjbet.shop",20],["imgkkabm.shop",20],["imgxabm.shop",20],["imgthbm.shop",20],["imgmyqbm.shop",20],["imgwwqbm.shop",20],["imgjvmbbm.shop",20],["imgjbxzjv.shop",20],["imgjmgfgm.shop",20],["picxnkjkhdf.sbs",20],["imgxxbdf.sbs",20],["imgnngr.sbs",20],["imgjjtr.sbs",20],["imgqbbds.sbs",20],["imgbvdf.sbs",20],["imgqnnnebrf.sbs",20],["imgnnnvbrf.sbs",20],["pornfd.com",20],["xsanime.com",20],["camclips.tv",20],["moviessources.*",20],["steanplay.*",21],["stemplay.*",21],["asianclub.*",[21,47,72]],["mavplay.*",[21,72,86]],["ujav.me",[21,72]],["videobb.*",[21,72,86,104]],["shameless.com",[21,23,59]],["txxx.*",21],["informer.com",22],["myreadingmanga.info",23],["sunporno.com",[23,59]],["adultdvdparadise.com",23],["freeomovie.info",23],["fullxxxmovies.me",23],["mangoporn.co",23],["netflixporno.net",23],["pandamovie.*",23],["pandamovies.me",23],["pornkino.cc",23],["pornwatch.ws",23],["speedporn.*",23],["watchfreexxx.pw",23],["watchpornfree.*",23],["watchxxxfree.pw",23],["xopenload.pw",23],["xtapes.me",23],["xxxparodyhd.net",23],["xxxscenes.net",23],["xxxstream.me",23],["youwatchporn.com",23],["8boobs.com",[23,31,59]],["babesinporn.com",[23,31,43,59]],["bustybloom.com",[23,31]],["hotstunners.com",[23,31,59]],["nudebabes.sexy",[23,59]],["pleasuregirl.net",[23,31,59]],["rabbitsfun.com",[23,31,59]],["silkengirl.*",[23,31,59]],["asiansex.life",23],["nudismteens.com",23],["youx.xxx",23],["pornxp.com",[23,47]],["hypnohub.net",23],["xnxxporn.video",23],["xxxdessert.com",23],["xxxshake.com",23],["manhwa18.cc",23],["best18porn.com",23],["bigtitslust.com",[23,260]],["manga18fx.com",23],["sexywomeninlingerie.com",23],["oosex.net",[23,43]],["xteensex.net",23],["stiflersmoms.com",23],["gifhq.com",23],["amateur-couples.com",23],["teen-hd-sex.com",23],["tube-teen-18.com",23],["xxx-asian-tube.com",23],["bibme.org",24],["citationmachine.net",[24,25]],["citethisforme.com",25],["easybib.com",25],["biqle.*",26],["otakuindo.*",26],["1plus1plus1equals1.net",26],["cooksinfo.com",26],["heatherdisarro.com",26],["yts.*",28],["sarugbymag.co.za",29],["ikaza.net",29],["imgadult.com",[30,31]],["imgdrive.net",[30,31]],["imgtaxi.com",[30,31]],["imgwallet.com",[30,31]],["hdpornt.com",30],["4tube.com",30],["pornerbros.com",[30,43]],["pichaloca.com",30],["pornodoido.com",30],["pornwatchers.com",[30,43]],["gotporn.com",30],["picturelol.com",30],["imgspice.com",30],["orgyxxxhub.com",[30,61,62]],["befap.com",30],["alphaporno.com",30],["tubedupe.com",30],["sexykittenporn.com",[30,31]],["gaypornwave.com",[30,114]],["letmejerk.com",30],["letmejerk2.com",30],["letmejerk3.com",30],["letmejerk4.com",30],["letmejerk5.com",30],["letmejerk6.com",30],["letmejerk7.com",30],["sexvid.*",[30,158]],["hdtube.porn",30],["madchensex.com",30],["canalporno.com",30],["eroxia.com",30],["pornhub-sexfilme.net",30],["pornojenny.net",30],["pornoleon.com",30],["pornozot.com",30],["teensexvideos.me",30],["goshow.tv",30],["hentaigo.com",[31,70]],["lolhentai.net",31],["camwhores.*",[31,93]],["camwhorestv.*",[31,93]],["porntopic.com",31],["cocogals.com",[31,43]],["camwhoreshd.com",31],["hotbabes.tv",[31,93]],["consoletarget.com",31],["pussytorrents.org",31],["ftopx.com",[31,59,67]],["boobgirlz.com",31],["fooxybabes.com",31],["jennylist.xyz",31],["jumboporn.xyz",31],["mainbabes.com",[31,59]],["mysexybabes.com",[31,59]],["nakedbabes.club",[31,59]],["sexybabesz.com",[31,59]],["vibraporn.com",31],["zazzybabes.com",31],["zehnporn.com",31],["naughtymachinima.com",31],["imgbaron.com",31],["decorativemodels.com",31],["erowall.com",[31,43]],["freyalist.com",31],["guruofporn.com",31],["jesseporn.xyz",31],["kendralist.com",31],["vipergirls.to",31],["lizardporn.com",31],["wantedbabes.com",[31,43]],["exgirlfriendmarket.com",31],["nakedneighbour.com",31],["moozpussy.com",31],["zoompussy.com",31],["2adultflashgames.com",31],["123strippoker.com",31],["babepedia.com",31],["boobieblog.com",31],["borwap.xxx",31],["gamesofdesire.com",31],["hd-xxx.me",31],["hentaipins.com",[31,255]],["longporn.xyz",31],["picmoney.org",31],["pornhd720p.com",31],["sikwap.xyz",31],["super-games.cz",31],["xxx-videos.org",31],["xxxputas.net",31],["mysexgames.com",31],["eroticity.net",31],["striptube.net",31],["xcity.org",31],["rintor.*",31],["porncoven.com",31],["imgsen.*",[31,66]],["imgsto.*",[31,66]],["pics4upload.com",31],["myporntape.com",31],["asianlbfm.net",31],["schoolgirls-asia.org",31],["sxyprn.*",32],["luxuretv.com",32],["asiangay.tv",32],["bootstrample.com",32],["gayxx.net",[32,218]],["hentairead.io",32],["isekaitube.com",32],["japangaysex.com",32],["mangagun.net",32],["nicomanga.com",32],["nudeslegion.com",32],["premiumporn.org",32],["rawinu.com",32],["watchsouthpark.tv",32],["weloma.art",32],["welovemanga.one",32],["javcock.com",32],["otomi-games.com",32],["redhdtube.xxx",32],["rat.xxx",32],["hispasexy.org",[32,203]],["javplay.me",32],["leviathanmanga.com",32],["gayfor.us",32],["levelupalone.com",32],["x-x-x.tube",32],["javboys.com",32],["javball.com",32],["adictox.com",32],["feed2all.org",32],["hqq.*",33],["platinmods.com",33],["fotbolltransfers.com",33],["freebitcoin.win",33],["coindice.win",33],["live-tv-channels.org",33],["lookmovie.*",[33,86]],["faucethero.com",[33,39]],["faresgame.com",33],["fc.lc",[33,102]],["freebcc.org",[33,102]],["eio.io",[33,102]],["exee.io",[33,102]],["exe.app",[33,102]],["majalahpendidikan.com",33],["jaiefra.com",33],["czxxx.org",33],["fussball.news",33],["orangespotlight.com",33],["ar-atech.blogspot.com",33],["clixwarez.blogspot.com",33],["theandroidpro.com",33],["zeeebatch.blogspot.com",33],["iptvspor.com",33],["plugincim.com",33],["fivemturk.com",33],["sosyalbilgiler.net",33],["mega-hentai2.blogspot.com",33],["kollhong.com",33],["getmega.net",33],["verteleseriesonline.com",33],["imintweb.com",33],["eoreuni.com",33],["comousarzararadio.blogspot.com",33],["popsplit.us",33],["digitalstudiome.com",33],["mypussydischarge.com",[33,39]],["kontrolkalemi.com",33],["arabianbusiness.com",33],["eskiceviri.blogspot.com",33],["dj-figo.com",33],["blasianluvforever.com",33],["wgzimmer.ch",33],["androidgreek.com",33],["iade.com",33],["smallpocketlibrary.com",33],["hidefninja.com",33],["share1223.com",33],["7misr4day.com",33],["aquiyahorajuegos.net",33],["worldofbin.com",33],["googledrivelinks.com",33],["tpaste.io",33],["g9g.eu",33],["waaw.*",[34,109]],["netu.ac",34],["vapley.*",34],["younetu.*",34],["player.uwatchfree.*",[34,109,288]],["onscreens.me",[34,109,297]],["filmoviplex.com",[34,109]],["waaaw.*",[34,109]],["waaw1.*",[34,109]],["srt.am",35],["123link.*",[36,37,38]],["ticonsiglio.com",36],["photos-public-domain.com",38],["civilenggforall.com",38],["sheshaft.com",39],["gotgayporn.com",39],["fetishshrine.com",39],["sleazyneasy.com",39],["vikiporn.com",39],["pornomico.com",[39,64]],["cuevana3.*",[39,96]],["vidcloud.*",[39,72,109]],["watchhouseonline.net",39],["pornid.*",39],["zbporn.*",[39,117]],["pornoman.pl",[39,118]],["camseek.tv",39],["yomovies.*",39],["xxmovz.com",39],["nonsensediamond.*",39],["nonktube.com",39],["xclusivejams.*",39],["sportlemon.*",39],["sportlemons.*",39],["sportlemonx.*",39],["pussyspot.net",39],["wildpictures.net",39],["kinox.*",39],["kinoz.*",[39,47]],["modagamers.com",39],["batporno.com",39],["remaxhd.*",39],["lebahmovie.com",39],["line25.com",39],["javtiful.com",39],["classicpornbest.com",[39,129]],["desihoes.com",[39,43]],["indianpornvideo.org",39],["slaughtergays.com",39],["sexiestpicture.com",39],["18girlssex.com",39],["manytoon.com",39],["thatav.net",39],["hentaifreak.org",39],["xxgasm.com",39],["kfapfakes.com",39],["xsober.com",39],["sexsaoy.com",39],["img4fap.*",39],["ashemaletv.com",39],["beurettekeh.com",39],["celibook.com",39],["gourmandix.com",39],["sexetag.com",39],["babeporn.*",39],["hd44.net",39],["dirtyfox.net",39],["babestube.com",39],["momvids.com",39],["porndr.com",39],["deviants.com",39],["freehardcore.com",39],["lesbian8.com",[39,260]],["babytorrent.*",39],["123moviesme.*",39],["watchmdh.to",39],["sarapbabe.com",39],["fullxxxporn.net",39],["xxxhdvideo.*",39],["qqxnxx.com",39],["xnxx-downloader.net",39],["comicspornow.com",39],["mult34.com",39],["xxxvideotube.net",39],["javqis.com",39],["peladas69.com",39],["liveru.sx",39],["protege-torrent.com",39],["freehdinterracialporn.in",39],["titsintops.com",39],["pervclips.com",39],["homemoviestube.com",39],["hdporn.net",[40,41]],["older-mature.net",41],["7mmtv.*",41],["telorku.xyz",41],["watch-my-gf.com",42],["cartoonporno.xxx",42],["mangoporn.net",43],["area51.porn",43],["sexytrunk.com",43],["teensark.com",43],["tubous.com",[43,79]],["toyoheadquarters.com",43],["spycock.com",43],["barfuck.com",43],["worldsex.com",[43,55]],["multporn.net",43],["besthugecocks.com",43],["daftporn.com",43],["italianoxxx.com",43],["collegehdsex.com",43],["lustylist.com",43],["yumstories.com",43],["18-teen-porn.com",43],["69teentube.com",43],["girlshd.xxx",43],["home-xxx-videos.com",43],["orgasmlist.com",43],["teensextube.xxx",43],["pornyfap.com",43],["nudistube.com",43],["uporno.xxx",43],["ultrateenporn.com",43],["gosexpod.com",43],["al4a.com",43],["grannysex.name",43],["porntb.com",43],["scopateitaliane.it",43],["sexbox.online",43],["teenpornvideo.sex",43],["twatis.com",[43,59]],["flashingjungle.com",43],["fetishburg.com",43],["privateindianmovies.com",43],["soyoungteens.com",43],["gottanut.com",43],["uiporn.com",43],["xcafe.com",43],["gfsvideos.com",43],["home-made-videos.com",43],["tbib.org",43],["sensualgirls.org",43],["pornhat.*",43],["porno-tour.*",43],["get-to.link",[43,67]],["ariestube.com",43],["asian-teen-sex.com",43],["18asiantube.com",43],["wholevideos.com",43],["asianporntube69.com",43],["babeswp.com",43],["bangyourwife.com",43],["bdsmslavemovie.com",43],["bdsmwaytube.com",43],["bestmaturewomen.com",43],["classicpornvids.com",43],["pornpaw.com",43],["dawntube.com",43],["desimmshd.com",43],["dirtytubemix.com",43],["plumperstube.com",43],["enormousbabes.net",43],["exclusiveindianporn.com",43],["figtube.com",43],["amateur-twink.com",43],["freeboytwinks.com",43],["freegrannyvids.com",43],["freexmovs.com",43],["freshbbw.com",43],["frostytube.com",43],["fuckslutsonline.com",43],["gameofporn.com",43],["gayboyshd.com",43],["giantshemalecocks.com",43],["erofus.com",43],["hd-tube-porn.com",43],["hardcorehd.xxx",43],["hairytwat.org",43],["iwantmature.com",43],["justababes.com",43],["jenpornuj.cz",43],["javteentube.com",43],["hard-tube-porn.com",43],["klaustube.com",43],["kaboomtube.com",43],["lustyspot.com",43],["lovelynudez.com",[43,124]],["dailyangels.com",43],["ljcam.net",43],["nakenprat.com",43],["oldgrannylovers.com",43],["ohueli.net",43],["pornuploaded.net",43],["pornstarsadvice.com",43],["bobs-tube.com",43],["pornohaha.com",43],["pornmam.com",43],["pornhegemon.com",43],["pornabcd.com",43],["porn-hd-tube.com",43],["thehentaiworld.com",43],["pantyhosepink.com",43],["queenofmature.com",43],["realvoyeursex.com",43],["realbbwsex.com",43],["rawindianporn.com",43],["onlygoldmovies.com",43],["rainytube.com",43],["stileproject.com",43],["slutdump.com",43],["nastybulb.com",43],["sextube-6.com",43],["porntubegf.com",43],["sassytube.com",43],["smplace.com",43],["maturell.com",43],["pornoplum.com",43],["widewifes.com",43],["wowpornlist.xyz",43],["vulgarmilf.com",43],["oldgirlsporn.com",43],["freepornrocks.com",43],["desivideos.*",43],["beegsexxx.com",43],["watchpornx.com",[43,146]],["ytboob.com",43],["saradahentai.com",43],["hentaiarena.com",43],["absolugirl.com",43],["absolutube.com",43],["allafricangirls.net",43],["asianpornphoto.net",43],["freexxxvideos.pro",43],["nude-teen-18.com",43],["xemales.com",43],["szexkepek.net",43],["wife-home-videos.com",43],["sexmadeathome.com",43],["nylondolls.com",43],["erogen.su",43],["imgprime.com",44],["ondemandkorea.com",45],["bdsmx.tube",46],["mrgay.com",46],["ouo.*",47],["songs.*",47],["gogoanimetv.*",47],["met.bz",47],["pelisplus.*",47],["streamm4u.*",47],["inkapelis.*",47],["ettv.*",47],["pelix.*",47],["pnd.*",47],["0123movie.*",47],["movies123.*",47],["senmanga.com",47],["piratebay.*",47],["webbro.*",47],["javwide.*",47],["vidhd.*",47],["cda-hd.cc",47],["mirrorace.*",47],["kurazone.net",47],["thoptv.*",47],["streamingworld.*",47],["solarmovie.*",47],["bdiptv.*",47],["cinemalibero.*",47],["pctfenix.*",[47,134]],["pctnew.*",[47,134]],["turkdown.com",47],["urlgalleries.net",47],["movie4u.live",47],["solarmovie.id",47],["01fmovies.com",47],["watchgameofthrones.*",47],["babesaround.com",47],["dirtyyoungbitches.com",47],["grabpussy.com",47],["join2babes.com",47],["nightdreambabe.com",47],["novoglam.com",47],["novohot.com",47],["novojoy.com",47],["novoporn.com",47],["novostrong.com",47],["pbabes.com",47],["pussystate.com",47],["redpornblog.com",47],["rossoporn.com",47],["sexynakeds.com",47],["thousandbabes.com",47],["gulf-up.com",47],["cutpaid.com",[47,102]],["tmearn.*",[47,102]],["mixloads.com",47],["ancensored.com",47],["shorten.*",[47,102,171]],["123animes.*",[47,104]],["openloadmovies.*",47],["savevideo.tube",47],["files.cx",47],["gdriveplayer.*",47],["drivefire.co",47],["porngo.com",47],["crichd.*",47],["arenabg.com",47],["vidload.net",47],["vipracing.*",47],["lkc21.net",47],["mavanimes.co",47],["noxx.to",47],["supervideo.*",47],["yesmovies.*",47],["ilgeniodellostreaming.*",47],["loadsamusicsarchives.blogspot.com",47],["xxxfiles.com",47],["deseneledublate.com",47],["hentaicloud.com",[47,240]],["descarga.xyz",47],["familyporn.tv",47],["pornxp.org",47],["rawmanga.top",47],["superstream.*",47],["ask4movie.*",47],["123movies-org.*",47],["gayteam.club",47],["sflix.*",47],["primetubsub.*",47],["mangaraw.org",47],["moviesland.*",[47,72]],["f2movies.*",47],["supertelevisionhd.com",47],["a2zapk.*",47],["autoembed.cc",47],["whisperingauroras.com",47],["live-sport.duktek.pro",47],["mcloud.*",47],["vizcloud.*",47],["vizcloud2.*",47],["daddylive.*",[47,87]],["pornxs.com",48],["movie4me.*",49],["dailygeekshow.com",50],["rue89lyon.fr",51],["onlinemschool.com",52],["bigtitsxxxsex.com",54],["gtaall.com",55],["jizzbunker.com",[55,128]],["tagesspiegel.de",55],["dailymail.co.uk",55],["ceesty.com",56],["corneey.com",56],["destyy.com",56],["festyy.com",56],["gestyy.com",56],["lavozdigital.es",56],["tnaflix.com",57],["imgdew.*",[59,66,67]],["imgmaze.*",[59,67,68]],["imgtown.*",[59,66,67,68]],["imgview.*",[59,66,67]],["angelgals.com",59],["babesexy.com",59],["hotbabeswanted.com",59],["nakedgirlsroom.com",59],["sexybabes.club",59],["sexybabesart.com",59],["favefreeporn.com",59],["onlygayvideo.com",59],["peachytube.com",59],["stepsisterfuck.me",59],["pornhost.com",60],["perfectmomsporn.com",61],["repelis.net",63],["donkparty.com",65],["imgoutlet.*",[66,67]],["imgrock.*",[66,68]],["anitube.*",67],["movisubmalay.*",[67,104]],["bdsmporn.cc",67],["cocoporn.net",67],["dirtyporn.cc",67],["faperplace.com",67],["freeadultvideos.cc",67],["freepornstream.cc",67],["generalpornmovies.com",67],["kinkyporn.cc",67],["moviesxxx.cc",67],["movstube.net",67],["onlinefetishporn.cc",67],["peetube.cc",67],["pornonline.cc",67],["porntube18.cc",67],["streamextreme.cc",67],["streamporn.cc",67],["videoxxx.cc",67],["watchporn.cc",67],["x24.video",67],["xxx24.vip",67],["xxxonline.cc",67],["xxxonlinefree.com",67],["xxxopenload.com",67],["gonzoporn.cc",67],["onlinexxx.cc",67],["tvporn.cc",67],["allporncomic.com",67],["thepiratebay.org",67],["videosection.com",67],["pornky.com",67],["tubxporn.com",67],["imgcredit.xyz",67],["waploaded.*",67],["desixxxtube.org",67],["dirtyindianporn.*",67],["freeindianporn2.com",67],["indianpornvideos.*",67],["kashtanka.*",67],["kashtanka2.com",67],["kompoz2.com",67],["onlyindianporn.*",67],["pakistaniporn2.com",67],["porno18.*",67],["xxnx.*",67],["xxxindianporn.*",67],["pmvhaven.com",67],["thepiratebay.*",68],["adsrt.*",69],["stream2watch.*",71],["peliculas-dvdrip.*",71],["mangahere.onl",[71,165]],["sfastwish.com",72],["kinoger.*",72],["iframejav.*",72],["fembed.*",[72,86]],["films5k.com",72],["mm9842.com",72],["mm9844.*",72],["mm9846.com",72],["javmvp.com",72],["0gogle.com",72],["vidohd.com",72],["kitabmarkaz.xyz",72],["netxwatch.*",72],["anigogo.net",[72,86]],["fbgo.*",[72,86]],["javplaya.com",72],["sbbrisk.com",[72,86]],["sbchill.com",[72,86]],["sbchip.*",[72,86]],["sbflix.*",[72,86]],["sbplay.*",[72,86]],["sbplay2.*",[72,86]],["sbplay3.*",[72,86]],["sbrity.com",[72,86]],["sbrulz.*",[72,86]],["streamsb.*",[72,86,267]],["anxcinema.*",72],["suzihaza.com",72],["javleaked.com",72],["jvembed.com",72],["jav247.top",72],["mavavid.com",72],["diampokusy.com",72],["vidmedia.top",72],["videofilms.*",72],["prosongs.*",72],["nsfwzone.xyz",72],["zojav.com",72],["ncdnstm.*",72],["playerjavseen.com",72],["javsubbed.xyz",72],["fembed9hd.com",72],["onscreensvideo.com",72],["filelions.*",72],["streamwish.*",72],["vidhidevip.com",72],["cloudrls.com",72],["embedwish.com",72],["fc2stream.tv",72],["javhahaha.us",72],["javlion.xyz",72],["javibe.net",72],["jvideo.xyz",72],["kissmovies.net",72],["nudecelebforum.com",73],["pronpic.org",74],["chyoa.com",75],["thisisfutbol.com",76],["pcwelt.de",77],["sixsistersstuff.com",78],["bunkr.*",79],["insidemarketing.it",80],["worldaide.fr",80],["asmwall.com",80],["vermangasporno.com",81],["celebjihad.com",81],["dirtyship.com",81],["fullporner.com",[81,314]],["lejdd.fr",82],["gamekult.com",82],["bharian.com.my",82],["thememypc.net",83],["cityam.com",84],["inhabitat.com",85],["m4ufree.*",[86,109]],["0123movies.*",86],["123moviesd.com",86],["gomovies.*",86],["cloudvideo.tv",86],["googlvideo.com",86],["5movies.*",86],["123moviesc.*",86],["easyexploits.com",86],["proxybit.*",86],["tabooporn.tv",86],["123movieshd.*",86],["kinoking.cc",86],["1tamilmv.*",86],["toxicwap.us",86],["buffstream.*",86],["coverapi.store",86],["tenies-online.*",86],["m4uhd.*",86],["hdhub4u.*",86],["hblinks.pro",86],["watchseries9.*",86],["afdah2.com",86],["moviesjoy.*",86],["torrentstatus.*",86],["yts2.*",86],["y2mate.*",86],["kissasia.cc",86],["alexsports.*",[86,154]],["2embed.*",86],["tainio-mania.online",86],["ymovies.vip",86],["cl1ca.com",86],["4br.me",86],["fir3.net",86],["seulink.*",86],["encurtalink.*",86],["fmovies.*",86],["worldfreeware.com",87],["ellibrepensador.com",87],["rexdlfile.com",87],["grantorrent1.*",88],["subtorrents.*",[88,99]],["subtorrents1.*",[88,99]],["speedtest.net",89],["livingstondaily.com",89],["goafricaonline.com",90],["link.tl",91],["lnk.news",92],["lnk.parts",92],["filesamba.*",93],["purelyceleb.com",93],["piraproxy.app",93],["theproxy.*",93],["nosteamgames.ro",93],["zootube1.com",94],["xxxtubezoo.com",94],["zooredtube.com",94],["videos1002.com",95],["sab.bz",95],["javseen.tv",95],["autobild.de",97],["alimaniac.com",98],["1xxx-tube.com",100],["asssex-hd.com",100],["bigcockfreetube.com",100],["bigdickwishes.com",100],["enjoyfuck.com",100],["freemomstube.com",100],["fuckmonstercock.com",100],["gobigtitsporn.com",100],["gofetishsex.com",100],["hard-tubesex.com",100],["hd-analporn.com",100],["hiddencamstube.com",100],["kissmaturestube.com",100],["lesbianfantasyxxx.com",100],["modporntube.com",100],["pornexpanse.com",100],["pornokeep.com",100],["pussytubeebony.com",100],["tubesex.me",100],["vintagesexpass.com",100],["voyeur-pornvideos.com",100],["voyeurspyporn.com",100],["voyeurxxxfree.com",100],["xxxtubenote.com",100],["yummysextubes.com",100],["tubexxxone.com",100],["airsextube.com",100],["asianbabestube.com",100],["bigtitsxxxfree.com",100],["blowjobpornset.com",100],["entertubeporn.com",100],["finexxxvideos.com",100],["freesexvideos24.com",100],["fuckhairygirls.com",100],["gopornindian.com",100],["grandmatube.pro",100],["grannyfucko.com",100],["grannyfuckxxx.com",100],["hiddencamhd.com",100],["hindiporno.pro",100],["indianbestporn.com",100],["japanesemomsex.com",100],["japanxxxass.com",100],["massagefreetube.com",100],["maturepussies.pro",100],["megajapansex.com",100],["new-xxxvideos.com",100],["xxxblowjob.pro",100],["xxxtubegain.com",100],["xxxvideostrue.com",100],["acutetube.net",100],["agedtubeporn.com",100],["agedvideos.com",100],["onlinegrannyporn.com",100],["freebigboobsporn.com",100],["tubeinterracial-porn.com",100],["best-xxxvideos.com",100],["bestanime-xxx.com",100],["blowxxxtube.com",100],["callfuck.com",100],["teenhubxxx.com",100],["tubepornasian.com",100],["xxxtubedot.com",100],["blowjobfucks.com",100],["dirtyasiantube.com",100],["maturewomenfucks.com",100],["pornmaturetube.com",100],["setfucktube.com",100],["tourporno.com",100],["do-xxx.com",100],["dotfreesex.com",100],["dotfreexxx.com",100],["easymilftube.net",100],["electsex.com",100],["fineretroporn.com",100],["freehqtube.com",100],["freshmaturespussy.com",100],["freshsexxvideos.com",100],["fuckedporno.com",100],["gallant-matures.com",100],["hqhardcoreporno.com",100],["girlssexxxx.com",100],["glamourxxx-online.com",100],["vintagepornnew.com",100],["tubevintageporn.com",100],["goxxxvideos.com",100],["grouppornotube.com",100],["hqxxxmovies.com",100],["hqsex-xxx.com",100],["hqamateurtubes.com",100],["hotpussyhubs.com",100],["hdpornteen.com",100],["indecentvideos.com",100],["ifreefuck.com",100],["kittyfuckstube.com",100],["lightxxxtube.com",100],["momstube-porn.com",100],["modelsxxxtube.com",100],["milfpussy-sex.com",100],["nicexxxtube.com",100],["neatpornodot.com",100],["neatfreeporn.com",100],["bigtitsporn-tube.com",100],["tubehqxxx.com",100],["nakedbbw-sex.com",100],["onlineteenhub.com",100],["online-xxxmovies.com",100],["pussyhothub.com",100],["pornxxxplace.com",100],["pornoteensex.com",100],["pornonote.pro",100],["pornoaid.com",100],["pornclipshub.com",100],["whitexxxtube.com",100],["sweetadult-tube.com",100],["sweet-maturewomen.com",100],["sexymilfsearch.com",100],["sextubedot.com",100],["hqmaxporn.com",100],["sexlargetube.com",100],["sexhardtubes.com",100],["tubepornstock.com",100],["xfuckonline.com",100],["xxxtubepass.com",100],["yourhomemadetube.com",100],["sheamateur.com",101],["cuts-url.com",102],["exe.io",[102,171]],["adsafelink.com",102],["megalink.*",102],["earnload.*",102],["modebaca.com",102],["cutdl.xyz",102],["miniurl.*",102],["smoner.com",102],["droplink.co",102],["jameeltips.us",102],["blog.linksfire.co",102],["recipestutorials.com",102],["shrinkme.*",102],["shrinke.*",102],["mrproblogger.com",102],["themezon.net",102],["shrinkforearn.in",102],["qthang.net",102],["linksly.co",102],["curto.win",102],["earncash.*",102],["imagenesderopaparaperros.com",102],["shortenbuddy.com",102],["apksvip.com",102],["4cash.me",102],["shortzzy.*",102],["teknomuda.com",102],["savelink.site",102],["lite-link.*",102],["adcorto.*",102],["samaa-pro.com",102],["miklpro.com",102],["modapk.link",102],["ccurl.net",102],["dogecoin.*",102],["linkpoi.me",102],["pewgame.com",102],["crazyblog.in",102],["rshrt.com",102],["dz-linkk.com",102],["upfiles.*",102],["adurly.cc",102],["link.asiaon.top",102],["beingtek.com",102],["swzz.xyz",102],["gsm-solution.com",103],["torrentz2eu.*",104],["afilmywap.*",104],["okhatrimaza.*",104],["123anime.*",104],["gomoviesfree.*",104],["gomo.to",104],["dlapk4all.com",104],["icy-veins.com",105],["bidouillesikea.com",105],["girlsgogames.co.uk",106],["godtube.com",106],["ringsidenews.com",106],["advocate.com",106],["alternet.org",106],["androidcure.com",106],["arobasenet.com",106],["attackofthefanboy.com",106],["bodytr.com",106],["clutchpoints.com",106],["cultofmac.com",106],["currentaffairs.gktoday.in",106],["dailycaller.com",106],["digitalmusicnews.com",106],["dogtime.com",106],["dotesports.com",106],["epicstream.com",106],["fallbrook247.com",106],["feral-heart.com",106],["gamesgames.com",106],["gamerevolution.com",106],["gazettenet.com",106],["insidenova.com",106],["jetztspielen.de",106],["kasvekuvvet.net",106],["leitesculinaria.com",106],["nbcnews.com",106],["notevibes.com",106],["practicalpainmanagement.com",106],["prad.de",106],["progameguides.com",106],["pwinsider.com",106],["realityblurb.com",[106,227]],["ruinmyweek.com",106],["sanangelolive.com",106],["sanfoundry.com",106],["selfhacked.com",106],["siliconera.com",106],["son.co.za",106],["sporcle.com",106],["stealthoptional.com",106],["thesportster.com",106],["upi.com",106],["visualcapitalist.com",106],["wegotthiscovered.com",106],["primagames.com",106],["alcasthq.com",107],["mzee.com",107],["supforums.com",108],["player.xxxbestsites.com",109],["megatube.xxx",109],["hot-cartoon.com",109],["richhioon.eu",109],["xxvideoss.net",109],["player.subespanolvip.com",109],["vidcdn.co",[109,288]],["justswallows.net",109],["player.tormalayalamhd.*",109],["koreanbj.club",109],["monstream.org",109],["player.hdgay.net",109],["telenovelas-turcas.com.es",109],["gocurrycracker.com",111],["depedlps.*",111],["xcums.com",111],["ihub.live",111],["naturalbd.com",111],["salamanca24horas.com",112],["bollywoodshaadis.com",113],["durtypass.com",114],["anime-odcinki.pl",114],["ngelag.com",115],["videovard.*",115],["huim.com",116],["cambay.tv",119],["caminspector.net",119],["camwhorespy.com",119],["camwhoria.com",119],["camgoddess.tv",119],["zemporn.com",120],["wpgdadatong.com",121],["wikifeet.com",122],["root-top.com",123],["allmomsex.com",124],["allnewindianporn.com",124],["analxxxvideo.com",124],["animalextremesex.com",124],["anime3d.xyz",124],["animefuckmovies.com",124],["animepornfilm.com",124],["animesexbar.com",124],["animesexclip.com",124],["animexxxsex.com",124],["animexxxfilms.com",124],["anysex.club",124],["apetube.asia",124],["asianfuckmovies.com",124],["asianfucktube.com",124],["asianporn.sexy",124],["asiansex.*",124],["asiansexcilps.com",124],["beeg.fund",124],["beegvideoz.com",124],["bestasiansex.pro",124],["bravotube.asia",124],["brutalanimalsfuck.com",124],["candyteenporn.com",124],["daddyfuckmovies.com",124],["desifuckonline.com",124],["exclusiveasianporn.com",124],["exteenporn.com",124],["fantasticporn.net",124],["fantasticyoungporn.com",124],["fineasiansex.com",124],["firstasianpussy.com",124],["freeindiansextube.com",124],["freepornasians.com",124],["freerealvideo.com",124],["fuck-beeg.com",124],["fuck-xnxx.com",124],["fuckfuq.com",124],["fuckundies.com",124],["gojapaneseporn.com",124],["golderotica.com",124],["goodyoungsex.com",124],["goyoungporn.com",124],["hardxxxmoms.com",124],["hdvintagetube.com",124],["hentaiporn.me",124],["hentaisexfilms.com",124],["hentaisexuality.com",124],["hot-teens-movies.mobi",124],["hotanimepornvideos.com",124],["hotanimevideos.com",124],["hotasianpussysex.com",124],["hotjapaneseshows.com",124],["hotmaturetube.com",124],["hotmilfs.pro",124],["hotorientalporn.com",124],["hotpornyoung.com",124],["hotxxxjapanese.com",124],["hotxxxpussy.com",124],["indiafree.net",124],["indianpornvideo.online",124],["japanfuck.*",124],["japanporn.*",124],["japanpornclip.com",124],["japanesetube.video",124],["japansex.me",124],["japanesexxxporn.com",124],["japansporno.com",124],["japanxxx.asia",124],["japanxxxworld.com",124],["keezmovies.surf",124],["lingeriefuckvideo.com",124],["liveanimalporn.zooo.club",124],["madhentaitube.com",124],["megahentaitube.com",124],["megajapanesesex.com",124],["megajapantube.com",124],["milfxxxpussy.com",124],["momsextube.pro",124],["momxxxass.com",124],["monkeyanimalporn.com",124],["moviexxx.mobi",124],["newanimeporn.com",124],["newjapanesexxx.com",124],["nicematureporn.com",124],["nudeplayboygirls.com",124],["originalindianporn.com",124],["originalteentube.com",124],["pig-fuck.com",124],["plainasianporn.com",124],["popularasianxxx.com",124],["pornanimetube.com",124],["pornasians.pro",124],["pornhat.asia",124],["pornjapanesesex.com",124],["pornvintage.tv",124],["primeanimesex.com",124],["realjapansex.com",124],["realmomsex.com",124],["redsexhub.com",124],["retroporn.world",124],["retrosexfilms.com",124],["sex-free-movies.com",124],["sexanimesex.com",124],["sexanimetube.com",124],["sexjapantube.com",124],["sexmomvideos.com",124],["sexteenxxxtube.com",124],["sexxxanimal.com",124],["sexyoungtube.com",124],["sexyvintageporn.com",124],["spicyvintageporn.com",124],["sunporno.club",124],["tabooanime.club",124],["teenextrem.com",124],["teenfucksex.com",124],["teenhost.net",124],["teensex.*",124],["teensexass.com",124],["tnaflix.asia",124],["totalfuckmovies.com",124],["totalmaturefuck.com",124],["txxx.asia",124],["vintagetube.*",124],["voyeurpornsex.com",124],["warmteensex.com",124],["wetasiancreampie.com",124],["wildhentaitube.com",124],["wowyoungsex.com",124],["xhamster-art.com",124],["xmovie.pro",124],["xnudevideos.com",124],["xnxxjapon.com",124],["xpics.me",124],["xvide.me",124],["xxxanimefuck.com",124],["xxxanimevideos.com",124],["xxxanimemovies.com",124],["xxxhentaimovies.com",124],["xxxhothub.com",124],["xxxjapaneseporntube.com",124],["xxxlargeporn.com",124],["xxxmomz.com",124],["xxxmovies.*",124],["xxxpornmilf.com",124],["xxxpussyclips.com",124],["xxxpussysextube.com",124],["xxxretrofuck.com",124],["xxxsex.pro",124],["xxxsexyjapanese.com",124],["xxxteenyporn.com",124],["xxxvideo.asia",124],["xxxyoungtv.com",124],["youjizzz.club",124],["youngpussyfuck.com",124],["0l23movies.*",125],["dvdporngay.com",126],["software-on.com",126],["kpopjjang.com",[126,170]],["siteunblocked.info",[126,235]],["unblocked.name",[126,235]],["uproxy2.biz",[126,235]],["za.gl",127],["activistpost.com",[128,132]],["cloudvideotv.*",129],["ladepeche.fr",129],["bitzite.com",[129,169]],["jemontremonminou.com",129],["jemontremasextape.com",129],["jemontremabite.com",129],["kinoger.ru",130],["moviesapi.club",130],["clasicotas.org",131],["movierulzlink.*",132],["newmovierulz.*",132],["3hiidude.*",132],["saveshared.com",132],["simpledownload.net",132],["compucalitv.com",133],["hot2k.com",134],["lupaste.com",134],["pornovenezolano.com.ve",134],["romnation.net",134],["venezporn.com",134],["hubzter.com",135],["collater.al",135],["nzpocketguide.com",135],["ispunlock.*",136],["tpb.*",136],["phonenumber-lookup.info",137],["maniac.de",138],["cambro.tv",139],["filerio.in",139],["call2friends.com",139],["gigaho.com",139],["trendsderzukunft.de",139],["forum.lolesporte.com",139],["mytoolz.net",139],["haoweichi.com",139],["tcheats.com",140],["tobys.dk",140],["sembunyi.in",141],["anime-jl.net",142],["fuckdy.com",143],["bdsmporntub.com",143],["femdomporntubes.com",143],["boobsrealm.com",145],["dfilmizle.com",145],["vgmlinks.*",145],["nackte.com",146],["highporn.net",146],["thegatewaypundit.com",147],["your-daily-girl.com",147],["720pxmovies.blogspot.com",148],["penis-bilder.com",149],["boyfriendtv.com",149],["dansmovies.com",149],["shegotass.info",149],["phimmoiaz.cc",149],["imgdawgknuttz.com",150],["m4maths.com",151],["poki-gdn.com",151],["sctoon.net",151],["megapornfreehd.com",152],["tonpornodujour.com",153],["thestreameast.*",154],["forgepattern.net",154],["vidlink.pro",154],["nflscoop.xyz",154],["alexsports.*>>",154],["btvsports.my>>",154],["cr7-soccer.store>>",154],["e2link.link>>",154],["fsportshd.xyz>>",154],["kakarotfoot.ru>>",154],["pelotalibrevivo.net>>",154],["powerover.site>>",154],["redditsoccerstreams.name>>",154],["sportstohfa.online>>",154],["sportzonline.site>>",154],["streamshunters.eu>>",154],["totalsportek1000.com>>",154],["worldsports.*>>",154],["7fractals.icu",154],["allevertakstream.space",154],["brainknock.net",154],["btvsports.my",154],["capo6play.com",154],["capoplay.net",154],["cdn256.xyz",154],["courseleader.net",154],["cr7-soccer.store",154],["dropbang.net",154],["e2link.link",154],["hornpot.net",154],["fsportshd.xyz",154],["ihdstreams.*",154],["kakarotfoot.ru",154],["meltol.net",154],["nativesurge.net",154],["powerover.site",154],["snapinstadownload.xyz",154],["sportstohfa.online",154],["sportzonline.site",154],["stellarthread.com",154],["streamshunters.eu",154],["totalsportek1000.com",154],["voodc.com",154],["wavewalt.me",154],["worldsports.*",154],["ziggogratis.site",154],["onepiecepower.com",154],["bezpolitickekorektnosti.cz",155],["protopage.com",156],["topito.com",157],["livesport.ws",159],["citynow.it",160],["variety.com",161],["cuatro.com",162],["mitele.es",162],["telecinco.es",162],["serieslandia.com",163],["softwaredescargas.com",163],["morritastube.xxx",[163,250]],["rawstory.com",164],["post-gazette.com",164],["rainanime.*",165],["bilasport.net",166],["yogitimes.com",167],["juba-get.com",168],["percentagecalculator.guru",168],["claim.8bit.ca",[169,214]],["addtobucketlist.com",169],["alternativa104.net",169],["asumesi.com",169],["ayo24.id",169],["barrier-free.net",169],["berich8.com",169],["blogenginee.com",169],["bloooog.it",169],["blurayufr.*",169],["branditechture.agency",169],["chataigpt.org",169],["coinsrev.com",169],["eliobenedetto.it",169],["examscisco.com",169],["fattelodasolo.it",169],["helicomicro.com",169],["iamflorianschulze.com",169],["karwan.tv",169],["kyoto-kanko.net",169],["limontorrents.com",169],["livenewsof.com",169],["magesypro.com",169],["medeberiya.site",169],["medeberiya1.com",169],["medeberiyax.com",169],["mscdroidlabs.es",169],["nakiny.com",[169,178]],["oyundunyasi.net",169],["parrocchiapalata.it",169],["photoshopvideotutorial.com",169],["pornincest.net",169],["rockmods.net",169],["samovies.net",169],["sevenst.us",[169,178]],["sulocale.sulopachinews.com",169],["tabering.net",169],["xn--nbkw38mlu2a.com",169],["adsy.pw",169],["playstore.pw",169],["bootyexpo.net",169],["arbweb.info",169],["solarchaine.com",169],["tokenmix.pro",169],["terafly.me",169],["faucetbravo.fun",169],["vstdrive.in",170],["lonely-mature.com",172],["tubepornclassic.com",173],["the-voice-of-germany.de",174],["adn.com",175],["spokesman.com",176],["news-herald.com",176],["elmundo.es",177],["expansion.com",177],["marca.com",177],["allusione.org",178],["cyberstumble.com",178],["venusarchives.com",178],["freemagazines.top",178],["elektrikmen.com",178],["solotrend.net",178],["itsecuritynews.info",178],["thebharatexpressnews.com",178],["inwepo.co",178],["gamedrive.org",178],["toramemoblog.com",178],["7daystodiemods.com",178],["7review.com",178],["avitter.net",178],["bi-girl.net",178],["carryflix.icu",178],["fairyhorn.cc",178],["gojo2.com",178],["gorecenter.com",178],["huitranslation.com",178],["javhdvideo.org",178],["nemumemo.com",178],["peppe8o.com",178],["phodoi.vn",178],["savingsomegreen.com",178],["tutsnode.*",178],["boredbat.com",178],["questloops.com",178],["spinbot.com",179],["androidonepro.com",180],["arcadepunks.com",181],["wohnungsboerse.net",182],["web2.0calc.*",183],["nbareplayhd.com",184],["convert-case.softbaba.com",184],["thepoorcoder.com",184],["techgeek.digital",184],["readcomiconline.*",184],["warps.club",185],["truyenaudiocv.net",185],["kompasiana.com",186],["spectrum.ieee.org",187],["thenation.com",188],["newsonthegotoday.com",189],["dr-farfar.com",190],["nysainfo.pl",190],["sandiegouniontribune.com",191],["fernsehserien.de",191],["femalefirst.co.uk",192],["theregister.co.uk",193],["sportstream.live",194],["savealoonie.com",195],["open3dmodel.com",195],["macrumors.com",196],["napolipiu.com",197],["manpeace.org",198],["getcopy.link",198],["androidadult.com",198],["gaminginfos.com",198],["nohat.cc",[199,200]],["fuskator.com",201],["scrubson.blogspot.com",202],["aquariumgays.com",203],["paginadanoticia.com.br",204],["gplinks.*",205],["aylink.co",206],["gitizle.vip",206],["shtms.co",206],["suaurl.com",[207,208]],["redisex.*",[207,339,342,343]],["laweducationinfo.com",209],["savemoneyinfo.com",209],["worldaffairinfo.com",209],["godstoryinfo.com",209],["successstoryinfo.com",209],["cxissuegk.com",209],["learnmarketinfo.com",209],["bhugolinfo.com",209],["armypowerinfo.com",209],["rsgamer.app",209],["phonereviewinfo.com",209],["makeincomeinfo.com",209],["gknutshell.com",209],["vichitrainfo.com",209],["workproductivityinfo.com",209],["dopomininfo.com",209],["hostingdetailer.com",209],["fitnesssguide.com",209],["tradingfact4u.com",209],["cryptofactss.com",209],["softwaredetail.com",209],["artoffocas.com",209],["insurancesfact.com",209],["travellingdetail.com",209],["currentrecruitment.com",210],["investorveda.com",210],["techacode.com",211],["azmath.info",211],["azsoft.*",211],["downfile.site",211],["downphanmem.com",211],["expertvn.com",211],["memangbau.com",211],["trangchu.news",211],["aztravels.net",211],["claimclicks.com",212],["gledaitv.*",212],["tejtime24.com",213],["comohoy.com",[213,311]],["cimanow.cc",213],["exactpay.online",[215,216]],["crypto4yu.com",216],["n-tv.de",217],["gaystream.pw",218],["blowjobgif.net",219],["erospots.info",220],["pornforrelax.com",221],["atlaq.com",222],["bolly4umovies.*",222],["douploads.net",222],["moalm-qudwa.blogspot.com",222],["123movieshub.*",223],["cima-club.*",223],["flixhq.*",223],["hindilinks4u.*",223],["t7meel.*",223],["vidstream.pro",223],["kodewebsite.com",224],["familyminded.com",225],["foxvalleyfoodie.com",225],["merriam-webster.com",225],["news.com.au",225],["playstationlifestyle.net",225],["sportsnaut.com",225],["tempumail.com",225],["toledoblade.com",225],["dood.*",226],["pleated-jeans.com",227],["obsev.com",227],["wepc.com",227],["gal-dem.com",228],["lagacetadesalamanca.es",229],["infocorp.io",230],["addictinggames.com",231],["comparteunclic.com",232],["qashbits.com",232],["upnewsinfo.com",233],["toolforge.org",234],["getdogecoins.com",236],["malaysiastock.biz",237],["1bit.space",238],["1bitspace.com",238],["ytanime.tv",238],["pimylifeup.com",239],["camwhorez.video",240],["best-shopme.com",241],["cpomagazine.com",242],["doramasyt.com",243],["xxxdan.com",244],["standardmedia.co.ke",245],["files.fm",245],["ludwig-van.com",245],["hentais.tube",246],["hentaitube.online",246],["aegeanews.gr",247],["batterypoweronline.com",247],["centrocommercialevulcano.com",247],["cieonline.co.uk",247],["commsbusiness.co.uk",247],["dailygrindonline.net",247],["delo.bg",247],["dynastyseries.com",247],["fabmx1.com",247],["fat-bike.com",247],["fmj.co.uk",247],["localemagazine.com",247],["loveourweddingmag.com",247],["metaforespress.gr",247],["myvalley.it",247],["niestatystyczny.pl",247],["primapaginamarsala.it",247],["ringelnatz.net",247],["schoolsweek.co.uk",247],["sikkenscolore.it",247],["sportbet.gr",247],["stagemilk.com",247],["tautasdziesmas.lv",247],["thetoneking.com",247],["toplickevesti.com",247],["zeroradio.co.uk",247],["miohentai.com",248],["sluttyrat.com",249],["moviehdf.*",251],["k12reader.com",252],["cachevalleydaily.com",252],["panel.skynode.pro",253],["imag-r.com",253],["radionylive.com",254],["radioitalylive.com",254],["radiolovelive.com",254],["radiocountrylive.com",254],["radiosymphony.com",254],["miamibeachradio.com",254],["radiorockon.com",254],["radioitaliacanada.com",254],["radioitalianmusic.com",254],["radioamericalatina.com",254],["radiosantaclaus.com",254],["radionorthpole.com",254],["radionatale.com",254],["pornvideoq.com",256],["gaminggorilla.com",256],["sexuhot.com",256],["rexxx.org",257],["world4.eu",258],["trytutorial.com",258],["rimworldbase.com",258],["ifreemagazines.com",258],["romaniataramea.com",259],["amateur8.com",260],["freeporn8.com",260],["maturetubehere.com",260],["sortporn.com",260],["textovisia.com",261],["hotcleaner.com",262],["momo-net.com",263],["hardwarezone.com.sg",264],["b2bhint.com",[265,266]],["baikin.net",265],["unsurcoenlasombra.com",265],["veryfastdownload.pw",268],["nation.africa",269],["manganelo.tv",270],["vermoegen.org",271],["javhub.net",[272,273]],["inhumanity.com",274],["iguarras.com",276],["iputitas.net",276],["fastream.to",276],["cricfree.*",276],["sportskart.*",276],["miraculous.to",277],["glotorrents.fr-proxy.com",278],["glotorrents.theproxy.ws",278],["dirp.me",279],["mymusicreviews.com",280],["bg-gledai.*",280],["katmoviefix.*",281],["integral-calculator.com",282],["derivative-calculator.net",282],["shorttrick.in",283],["shrdsk.me",283],["looptorrent.org",283],["noicetranslations.blogspot.com",283],["serviceemmc.com",283],["basic-tutorials.de",284],["depvailon.com",285],["111.90.150.10",286],["111.90.150.149",286],["111.90.151.26",286],["111.90.141.252",286],["mangahentai.xyz",287],["nhentai.io",[289,290]],["erofound.com",291],["erome.com",292],["flaticon.com",293],["zertalious.xyz",294],["tweakcentral.net",295],["nokiahacking.pl",296],["javct.net",297],["veryfreeporn.com",298],["linkbin.me",[299,300]],["filemoon.*",301],["teachoo.com",302],["maisonbrico.com",303],["vebo1.com",304],["seriesmetro.net",305],["blog.textpage.xyz",306],["alliptvlinks.com",306],["sportnews.to",307],["movies4u.*",307],["movies4u3.*",307],["gamerxyt.com",307],["faqwiki.us",307],["zeeplayer.pages.dev",307],["qcheng.cc",308],["hygiena.com",309],["netchimp.co.uk",310],["xgroovy.com",312],["ruyashoujo.com",313],["xmateur.com",314],["x2download.com",315],["truyen-hentai.com",316],["redd.tube",317],["sendspace.com",318],["leechpremium.net",319],["vikingf1le.us.to",319],["brainly.*",320],["file-upload.*",321],["freethesaurus.com",322],["thefreedictionary.com",322],["counterstrike-hack.leforum.eu",323],["ajt.xooit.org",323],["drivemoe.com",324],["dsharer.com",324],["pupupul.site",325],["fansubseries.com.br",325],["usersdrive.com",326],["manoramaonline.com",327],["realmoasis.com",328],["technewsworld.com",329],["rjno1.com",330],["gpldose.com",331],["zinkmovies.in",332],["pornhoarder.net",333],["sbs.com.au",334],["pouvideo.*",335],["povvideo.*",335],["povw1deo.*",335],["povwideo.*",335],["powv1deo.*",335],["powvibeo.*",335],["powvideo.*",335],["powvldeo.*",335],["redecanais.*",[336,337,338,339,340,341]],["zoominar.online",344],["sfr.fr",345],["ericdraken.com",346],["djs.sk",348]]);
const exceptionsMap = new Map([["pingit.com",[16,47,69,114]],["games.dailymail.co.uk",[55]]]);
const hasEntities = true;
const hasAncestors = true;

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
