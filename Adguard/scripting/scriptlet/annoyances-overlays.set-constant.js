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

// ruleset: annoyances-overlays

// Important!
// Isolate from global scope

// Start of local scope
(function uBOL_setConstant() {

/******************************************************************************/

function setConstant(
    ...args
) {
    setConstantFn(false, ...args);
}

function setConstantFn(
    trusted = false,
    chain = '',
    rawValue = ''
) {
    if ( chain === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('set-constant', chain, rawValue);
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    function setConstant(chain, rawValue) {
        const trappedProp = (( ) => {
            const pos = chain.lastIndexOf('.');
            if ( pos === -1 ) { return chain; }
            return chain.slice(pos+1);
        })();
        const cloakFunc = fn => {
            safe.Object_defineProperty(fn, 'name', { value: trappedProp });
            return new Proxy(fn, {
                defineProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.defineProperty(...arguments);
                    }
                    return true;
                },
                deleteProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.deleteProperty(...arguments);
                    }
                    return true;
                },
                get(target, prop) {
                    if ( prop === 'toString' ) {
                        return function() {
                            return `function ${trappedProp}() { [native code] }`;
                        }.bind(null);
                    }
                    return Reflect.get(...arguments);
                },
            });
        };
        if ( trappedProp === '' ) { return; }
        const thisScript = document.currentScript;
        let normalValue = validateConstantFn(trusted, rawValue, extraArgs);
        if ( rawValue === 'noopFunc' || rawValue === 'trueFunc' || rawValue === 'falseFunc' ) {
            normalValue = cloakFunc(normalValue);
        }
        let aborted = false;
        const mustAbort = function(v) {
            if ( trusted ) { return false; }
            if ( aborted ) { return true; }
            aborted =
                (v !== undefined && v !== null) &&
                (normalValue !== undefined && normalValue !== null) &&
                (typeof v !== typeof normalValue);
            if ( aborted ) {
                safe.uboLog(logPrefix, `Aborted because value set to ${v}`);
            }
            return aborted;
        };
        // https://github.com/uBlockOrigin/uBlock-issues/issues/156
        //   Support multiple trappers for the same property.
        const trapProp = function(owner, prop, configurable, handler) {
            if ( handler.init(configurable ? owner[prop] : normalValue) === false ) { return; }
            const odesc = safe.Object_getOwnPropertyDescriptor(owner, prop);
            let prevGetter, prevSetter;
            if ( odesc instanceof safe.Object ) {
                owner[prop] = normalValue;
                if ( odesc.get instanceof Function ) {
                    prevGetter = odesc.get;
                }
                if ( odesc.set instanceof Function ) {
                    prevSetter = odesc.set;
                }
            }
            try {
                safe.Object_defineProperty(owner, prop, {
                    configurable,
                    get() {
                        if ( prevGetter !== undefined ) {
                            prevGetter();
                        }
                        return handler.getter();
                    },
                    set(a) {
                        if ( prevSetter !== undefined ) {
                            prevSetter(a);
                        }
                        handler.setter(a);
                    }
                });
                safe.uboLog(logPrefix, 'Trap installed');
            } catch(ex) {
                safe.uboErr(logPrefix, ex);
            }
        };
        const trapChain = function(owner, chain) {
            const pos = chain.indexOf('.');
            if ( pos === -1 ) {
                trapProp(owner, chain, false, {
                    v: undefined,
                    init: function(v) {
                        if ( mustAbort(v) ) { return false; }
                        this.v = v;
                        return true;
                    },
                    getter: function() {
                        if ( document.currentScript === thisScript ) {
                            return this.v;
                        }
                        safe.uboLog(logPrefix, 'Property read');
                        return normalValue;
                    },
                    setter: function(a) {
                        if ( mustAbort(a) === false ) { return; }
                        normalValue = a;
                    }
                });
                return;
            }
            const prop = chain.slice(0, pos);
            const v = owner[prop];
            chain = chain.slice(pos + 1);
            if ( v instanceof safe.Object || typeof v === 'object' && v !== null ) {
                trapChain(v, chain);
                return;
            }
            trapProp(owner, prop, true, {
                v: undefined,
                init: function(v) {
                    this.v = v;
                    return true;
                },
                getter: function() {
                    return this.v;
                },
                setter: function(a) {
                    this.v = a;
                    if ( a instanceof safe.Object ) {
                        trapChain(a, chain);
                    }
                }
            });
        };
        trapChain(window, chain);
    }
    runAt(( ) => {
        setConstant(chain, rawValue);
    }, extraArgs.runAt);
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1, 'asap': 1,
            'interactive': 2, 'end': 2, '2': 2,
            'complete': 3, 'idle': 3, '3': 3,
        };
        const tokens = Array.isArray(state) ? state : [ state ];
        for ( const token of tokens ) {
            const prop = `${token}`;
            if ( Object.hasOwn(targets, prop) === false ) { continue; }
            return targets[prop];
        }
        return 0;
    };
    const runAt = intFromReadyState(when);
    if ( intFromReadyState(document.readyState) >= runAt ) {
        fn(); return;
    }
    const onStateChange = ( ) => {
        if ( intFromReadyState(document.readyState) < runAt ) { return; }
        fn();
        safe.removeEventListener.apply(document, args);
    };
    const safe = safeSelf();
    const args = [ 'readystatechange', onStateChange, { capture: true } ];
    safe.addEventListener.apply(document, args);
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

function validateConstantFn(trusted, raw, extraArgs = {}) {
    const safe = safeSelf();
    let value;
    if ( raw === 'undefined' ) {
        value = undefined;
    } else if ( raw === 'false' ) {
        value = false;
    } else if ( raw === 'true' ) {
        value = true;
    } else if ( raw === 'null' ) {
        value = null;
    } else if ( raw === "''" || raw === '' ) {
        value = '';
    } else if ( raw === '[]' || raw === 'emptyArr' ) {
        value = [];
    } else if ( raw === '{}' || raw === 'emptyObj' ) {
        value = {};
    } else if ( raw === 'noopFunc' ) {
        value = function(){};
    } else if ( raw === 'trueFunc' ) {
        value = function(){ return true; };
    } else if ( raw === 'falseFunc' ) {
        value = function(){ return false; };
    } else if ( raw === 'throwFunc' ) {
        value = function(){ throw ''; };
    } else if ( /^-?\d+$/.test(raw) ) {
        value = parseInt(raw);
        if ( isNaN(raw) ) { return; }
        if ( Math.abs(raw) > 0x7FFF ) { return; }
    } else if ( trusted ) {
        if ( raw.startsWith('json:') ) {
            try { value = safe.JSON_parse(raw.slice(5)); } catch { return; }
        } else if ( raw.startsWith('{') && raw.endsWith('}') ) {
            try { value = safe.JSON_parse(raw).value; } catch { return; }
        }
    } else {
        return;
    }
    if ( extraArgs.as !== undefined ) {
        if ( extraArgs.as === 'function' ) {
            return ( ) => value;
        } else if ( extraArgs.as === 'callback' ) {
            return ( ) => (( ) => value);
        } else if ( extraArgs.as === 'resolved' ) {
            return Promise.resolve(value);
        } else if ( extraArgs.as === 'rejected' ) {
            return Promise.reject(value);
        }
    }
    return value;
}

/******************************************************************************/

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [["ConsoleBan.init","noopFunc"],["devtoolsDetector","{}"],["killads","true"],["PASSER_videoPAS_apres","0"],["ads_enabled","true"],["nebula.session.flags.adblock","undefined"],["_adBlockCheck","true"],["navigator.storage.estimate","undefined"],["valid_user","true"],["Drupal.behaviors.detectAdblockers","noopFunc"],["disableSelection","noopFunc"],["ADBdetected","noopFunc"],["adblock","false"],["BIA.ADBLOCKER","false"],["samDetected","true"],["adBlockFunction","trueFunc"],["checkAds","trueFunc"],["google_jobrunner","true"],["isAdblockDisabled","true"],["checkPrivacyWall","noopFunc"],["document.oncontextmenu","null"],["nocontext","noopFunc"],["adsAreShown","true"],["abd","false"],["detector_active","true"],["aoezone_adchecker","true"],["pageService.initDownloadProtection","noopFunc"],["detectPrivateMode","noopFunc"],["webkitRequestFileSystem","undefined"],["adsbygoogle","null"],["_sharedData.is_whitelisted_crawl_bot","true"],["ads_not_blocked","true"],["ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["hideBannerBlockedMessage","true"],["blurred","false"],["better_ads_adblock","0"],["console.debug","trueFunc"],["console.clear","trueFunc"],["adBlock","false"],["document.oncontextmenu","undefined"],["adsEnabled","true"],["better_ads_adblock","null"],["f12lock","false"],["document.onselectstart","null"],["console.clear","undefined"],["adBlockDetected","false"],["document.onkeyup","null"],["document.ondragstart","null"],["commonUtil.openToast","null"],["NS_TVER_EQ.checkEndEQ","trueFunc"],["mps._queue.abdetect","null"],["fuckAdBlock","trueFunc"],["abp","false"],["document.onkeydown","noopFunc"],["getSelection","undefined"],["document.onkeydown","null"],["console.clear","noopFunc"],["document.oncontextmenu","noopFunc"],["x5engine.utils.imCodeProtection","null"],["ansFrontendGlobals.settings.signupWallType","undefined"],["onload","null"],["document.documentElement.AdBlockDetection","noopFunc"],["document.ondragstart","noopFunc"],["document.onmousedown","noopFunc"],["document.onselectstart","noopFunc"],["disableselect","trueFunc"],["document.oncontextmenu",""],["document.onselectstart",""],["document.onkeydown",""],["document.onmousedown",""],["document.onclick",""],["document.body.onmouseup","null"],["document.oncopy","null"],["SD_BLOCKTHROUGH","true"],["document.onkeydown","trueFunc"],["ab","false"],["canRunAds","true"],["document.body.oncut","null"],["document.body.oncopy","null"],["console.log","noopFunc"],["document.onkeypress","null"],["mb.advertisingShouldBeEnabled","false"],["document.ondragstart","trueFunc"],["document.onselectstart","trueFunc"],["jsData.hasVideoMeteringUnlogEnabled","undefined"],["lepopup_abd_enabled",""],["Object.prototype.preroll","[]"],["document.oncontextmenu","trueFunc"],["devtoolsDetector","undefined"],["Object.prototype.bgOverlay","noopFunc"],["Object.prototype.fixedContentPos","noopFunc"],["console.dir","noopFunc"],["navigator.userAgent",""],["devtoolIsOpening","noopFunc"],["devtoolIsOpening","undefined"],["securityTool.disableRightClick","noopFunc"],["securityTool.disableF12","noopFunc"],["securityTool.disableCtrlP","noopFunc"],["securityTool.disableCtrlS","noopFunc"],["securityTool.disablePrintScreen","noopFunc"],["securityTool.disablePrintThisPage","noopFunc"],["securityTool.disableElementForPrintThisPage","noopFunc"],["checkAds","noopFunc"],["stopPrntScr","noopFunc"],["disableSelection","undefined"],["traffective","true"],["nocontext","undefined"],["disable_hot_keys","undefined"],["flashvars.autoplay",""],["document.body.oncopy","null","3"],["document.body.onselectstart","null","3"],["document.body.oncontextmenu","null","3"],["Time_Start","0"],["DD","trueFunc"],["document.oncontextmenu","null","3"],["Object.prototype._detectLoop","noopFunc"],["forbiddenList","[]"],["document.onkeypress","trueFunc"],["document.oncontextmenu","true"],["Object.prototype._detectLoop","undefined"],["SteadyWidgetSettings.adblockActive","false"],["devtoolsOpen","false"],["devtoolsDetector","noopFunc"],["DisDevTool","undefined"],["admiral","noopFunc"],["document.oncopy","noopFunc"],["initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"],["mtGlobal.disabledAds","true"],["devtoolsDetector.launch","noopFunc"],["console.clear","throwFunc"],["ANN.ads.adblocked","false"],["maxUnauthenicatedArticleViews","null"],["placeAdsHandler","noopFunc"],["ramp.addUnits","noopFunc"],["pqdxwidthqt","false"],["nitroAds.loaded","true"],["jh_disabled_options_data","null"],["topMessage","noopFunc"],["document.onmousedown","null"],["forbidDebug","noopFunc"],["adblock","2"],["DisableDevtool","noopFunc"],["__NEXT_DATA__.props.pageProps.adPlacements","undefined"],["login_completed","true"],["console.table","trueFunc"],["console.log","trueFunc"],["Object.prototype.disableMenu","false"],["confirm","noopFunc"],["HTMLImageElement.prototype.onerror","undefined"]];
const hostnamesMap = new Map([["xn-----0b4asja8cbew2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e7qri.xn--1ck2e1b",0],["up4stream.com",1],["ups2up.fun",1],["9tsu.vip",1],["moviesapi.club",[1,128]],["watchx.top",1],["xclient.info",2],["bejson.com",2],["impots.gouv.fr",3],["airnavradar.com",4],["radarbox.com",4],["gearside.com",5],["nytimes.com",[6,7]],["tvtropes.org",8],["justtrucks.com.au",9],["cittadinanza.biz",10],["glistranieri.it",10],["ideapod.com",[10,21]],["privivkainfo.ru",10],["awebstories.com",[10,103]],["ancient.eu",11],["intramed.net",12],["protest.eu",13],["northwestfirearms.com",14],["techkings.org",14],["spookshow.net",15],["fosshub.com",16],["pokemonforever.com",17],["carsguide.com.au",18],["humo.be",19],["apksecured.com",20],["intergate.info",20],["alphapolis.co.jp",[20,43]],["chronologia.pl",[20,43]],["reportergazeta.pl",[20,43,47]],["odiarioonline.com.br",[20,55]],["nordkorea-info.de",20],["geotips.net",[20,60]],["noweconomy.live",20],["naaree.com",[20,55]],["cda-hd.cc",20],["hqq.to",[20,56,74]],["tv-tokyo.co.jp",20],["arti-definisi-pengertian.info",20],["studyadda.com",[20,138]],["webwereld.nl",22],["palemoon.org",23],["wheel-size.com",24],["aoezone.net",25],["radioony.fm",26],["mexiconewsdaily.com",27],["technologyreview.com",28],["bdcraft.net",29],["instagram.com",30],["wired.co.uk",31],["gq-magazine.co.uk",31],["glamourmagazine.co.uk",31],["m.youtube.com",32],["music.youtube.com",32],["tv.youtube.com",32],["www.youtube.com",32],["youtubekids.com",32],["buienradar.nl",33],["clk.ink",34],["earnload.*",34],["windows101tricks.com",35],["hindipix.*",[36,37]],["vidsrc.*",[37,128,141]],["bitcine.app",[37,144,145]],["cineby.app",[37,144,145]],["moflix-stream.day",[37,144,145]],["tv.verizon.com",[37,144,145]],["fontsfree.pro",38],["oceanof-games.com",39],["strangermeetup.com",40],["adslayuda.com",41],["avdelphi.com",42],["doods.*",44],["ds2play.com",44],["ds2video.com",44],["d0o0d.com",44],["vidembed.me",44],["mzzcloud.life",44],["videobot.stream",44],["videovard.*",44],["justswallows.net",44],["onscreensvideo.com",44],["katerionews.com",44],["telenovelas-turcas.com.es",44],["kmo.to",44],["jeniusplay.com",[44,119]],["southcloud.tv",44],["d0000d.com",44],["4x4earth.com",45],["jootc.com",[46,47]],["photobank.mainichi.co.jp",48],["tbs.co.jp",49],["rottentomatoes.com",50],["sovetromantica.com",51],["longecity.org",52],["fruit01.xyz",53],["foxteller.com",53],["lyricstranslate.com",54],["hardcoregames.ca",55],["allsmo.com",55],["themosvagas.com.br",55],["urbharat.xyz",55],["sportnews.to",[55,80]],["123movies.*",56],["sbasian.pro",56],["miraculous.to",[56,79]],["vtplayer.net",56],["webnovel.com",56],["pepperlive.info",56],["unbiasedsenseevent.com",56],["maxt.church",56],["cool-etv.net",56],["vgembed.com",[56,113]],["photopea.com",56],["szkolawohyn.pl",57],["torrentlawyer.com",[57,62,63,64]],["virpe.cc",57],["gmarket.co.kr",[57,63]],["paesifantasma.it",58],["talpo.it",58],["quora.com",59],["gmx.net",61],["hoca4u.com",63],["youmath.it",65],["renditepassive.net",[66,67,68,69,70]],["360doc.com",71],["logonews.cn",72],["spanishdict.com",73],["cloudcomputingtopics.net",74],["0123movies.ch",[74,83,87,117]],["epn.bz",75],["affbank.com",76],["gardenia.net",[77,78]],["meteoblue.com",81],["novelpia.com",[82,83]],["brainly.*",84],["blueraindrops.com",85],["animecruzers.com",86],["descargatepelis.com",87],["news.ntv.co.jp",87],["bongdaplus.vn",87],["bestjavporn.com",88],["mm9841.cc",88],["ggwash.org",[89,90]],["ask4movie.*",[91,92]],["watch.lonelil.com",92],["cinegrabber.com",93],["layarkacaxxi.icu",94],["readawrite.com",[95,96,97,98,99,100,101]],["morosedog.gitlab.io",102],["indianhealthyrecipes.com",104],["tarnkappe.info",105],["freereadnovel.online",[106,107]],["reborntrans.com",[106,107]],["secondlifetranslations.com",[106,107]],["heavyfetish.com",108],["joysound.com",[109,110,111]],["colors.sonicthehedgehog.com",[111,114]],["bluemediafile.*",112],["leakedzone.com",115],["mehoathinh2.com",116],["brutal.io",118],["powerline.io",118],["enduro-mtb.com",120],["kukaj.io",121],["animesaga.in",122],["aniwave.*",123],["anix.*",123],["flixrave.to",123],["hdtoday.so",123],["hurawatch.bz",123],["vidplay.*",123],["vid2faf.site",123],["lazyadmin.nl",124],["thejakartapost.com",125],["fullxh.com",126],["galleryxh.site",126],["megaxh.com",126],["movingxh.world",126],["seexh.com",126],["unlockxh4.com",126],["valuexh.life",126],["xhaccess.com",126],["xhadult4.com",126],["xhamster.*",126],["xhamster1.*",126],["xhamster10.*",126],["xhamster11.*",126],["xhamster12.*",126],["xhamster13.*",126],["xhamster14.*",126],["xhamster15.*",126],["xhamster16.*",126],["xhamster17.*",126],["xhamster18.*",126],["xhamster19.*",126],["xhamster20.*",126],["xhamster2.*",126],["xhamster3.*",126],["xhamster4.*",126],["xhamster42.*",126],["xhamster46.com",126],["xhamster5.*",126],["xhamster7.*",126],["xhamster8.*",126],["xhbig.com",126],["xhbranch5.com",126],["xhchannel.com",126],["xhdate.world",126],["xhday.com",126],["xhday1.com",126],["xhmoon5.com",126],["xhofficial.com",126],["xhopen.com",126],["xhplanet1.com",126],["xhplanet2.com",126],["xhreal2.com",126],["xhspot.com",126],["xhtotal.com",126],["xhvictory.com",126],["xhwebsite5.com",126],["xhwide5.com",126],["marinetraffic.com",127],["ymovies.vip",128],["aniwatch.to",128],["aniwatchtv.to",128],["megacloud.tv",128],["hianime.*",128],["hianimez.to",128],["putlocker.vip",128],["rapid-cloud.co",128],["rabbitstream.net",128],["pupupul.site",128],["netu.*",128],["netuplayer.top",128],["stbnetu.xyz",128],["thotsbay.tv",128],["vipstreams.in",128],["freewatchtv.top",128],["gdplayertv.*",128],["mixstreams.top",128],["tvfreemium.top",128],["abysscdn.com",128],["grostembed.online",129],["premiumembeding.cloud",129],["venusembed.site",129],["animekai.*",129],["anigo.to",129],["megaup.cc",129],["animenewsnetwork.com",130],["androidpolice.com",131],["makeuseof.com",131],["movieweb.com",131],["xda-developers.com",131],["thegamer.com",131],["cbr.com",131],["gamerant.com",131],["screenrant.com",131],["howtogeek.com",131],["thethings.com",131],["simpleflying.com",131],["dualshockers.com",131],["digminecraft.com",132],["arras.io",133],["arras.netlify.app",133],["arrax.io",133],["how-to-pc.info",134],["programming-link.info",134],["maxroll.gg",135],["tv.bdix.app",136],["hitokageproduction.com",137],["dngz.net",139],["vnexpress.net",140],["archon.gg",142],["einthusan.tv",143],["sussytoons.*",146],["astro-cric.pages.dev",147],["crichype.*",147],["jio.pftv.ws",147],["shz.al",147],["tnt2-cricstreaming.pages.dev",147],["wlo-cricstreamiing.pages.dev",147],["sporttotal.tv",148]]);
const exceptionsMap = new Map([]);
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
    try { setConstant(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
