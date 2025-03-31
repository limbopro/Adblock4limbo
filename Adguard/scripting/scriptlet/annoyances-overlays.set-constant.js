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
const argsList = [["ConsoleBan.init","noopFunc"],["killads","true"],["PASSER_videoPAS_apres","0"],["nebula.session.flags.adblock","undefined"],["_adBlockCheck","true"],["navigator.storage.estimate","undefined"],["valid_user","true"],["Drupal.behaviors.detectAdblockers","noopFunc"],["ADBdetected","noopFunc"],["adblock","false"],["BIA.ADBLOCKER","false"],["samDetected","true"],["adBlockFunction","trueFunc"],["checkAds","trueFunc"],["google_jobrunner","true"],["isAdblockDisabled","true"],["adsAreShown","true"],["abd","false"],["detector_active","true"],["aoezone_adchecker","true"],["adsbygoogle","null"],["ads_not_blocked","true"],["hideBannerBlockedMessage","true"],["blurred","false"],["better_ads_adblock","0"],["adBlock","false"],["adsEnabled","true"],["ads_enabled","true"],["better_ads_adblock","null"],["adBlockDetected","false"],["mps._queue.abdetect","null"],["fuckAdBlock","trueFunc"],["abp","false"],["document.documentElement.AdBlockDetection","noopFunc"],["SD_BLOCKTHROUGH","true"],["ab","false"],["canRunAds","true"],["mb.advertisingShouldBeEnabled","false"],["checkAds","noopFunc"],["traffective","true"],["Time_Start","0"],["mtGlobal.disabledAds","true"],["ANN.ads.adblocked","false"],["placeAdsHandler","noopFunc"],["pqdxwidthqt","false"],["nitroAds.loaded","true"],["topMessage","noopFunc"],["adblock","2"],["HTMLImageElement.prototype.onerror","undefined"],["disableSelection","noopFunc"],["checkPrivacyWall","noopFunc"],["document.oncontextmenu","null"],["nocontext","noopFunc"],["pageService.initDownloadProtection","noopFunc"],["detectPrivateMode","noopFunc"],["webkitRequestFileSystem","undefined"],["_sharedData.is_whitelisted_crawl_bot","true"],["ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["TGMP_OBJ_CACHE.tritonsee_client.playAttemptsCount","trueFunc"],["console.debug","trueFunc"],["console.clear","trueFunc"],["document.oncontextmenu","undefined"],["f12lock","false"],["document.onselectstart","null"],["console.clear","undefined"],["document.onkeyup","null"],["document.ondragstart","null"],["commonUtil.openToast","null"],["NS_TVER_EQ.checkEndEQ","trueFunc"],["document.onkeydown","noopFunc"],["getSelection","undefined"],["document.onkeydown","null"],["console.clear","noopFunc"],["document.oncontextmenu","noopFunc"],["x5engine.utils.imCodeProtection","null"],["ansFrontendGlobals.settings.signupWallType","undefined"],["onload","null"],["document.ondragstart","noopFunc"],["document.onmousedown","noopFunc"],["document.onselectstart","noopFunc"],["disableselect","trueFunc"],["document.onkeypress","null"],["document.oncontextmenu",""],["document.onselectstart",""],["document.onkeydown",""],["document.onmousedown",""],["document.onclick",""],["document.body.onmouseup","null"],["document.oncopy","null"],["document.onkeydown","trueFunc"],["document.body.oncut","null"],["document.body.oncopy","null"],["console.log","noopFunc"],["document.ondragstart","trueFunc"],["document.onselectstart","trueFunc"],["jsData.hasVideoMeteringUnlogEnabled","undefined"],["lepopup_abd_enabled",""],["Object.prototype.preroll","[]"],["document.oncontextmenu","trueFunc"],["devtoolsDetector","undefined"],["Object.prototype.bgOverlay","noopFunc"],["Object.prototype.fixedContentPos","noopFunc"],["console.dir","noopFunc"],["navigator.userAgent",""],["devtoolIsOpening","noopFunc"],["devtoolIsOpening","undefined"],["securityTool.disableRightClick","noopFunc"],["securityTool.disableF12","noopFunc"],["securityTool.disableCtrlP","noopFunc"],["securityTool.disableCtrlS","noopFunc"],["securityTool.disablePrintScreen","noopFunc"],["securityTool.disablePrintThisPage","noopFunc"],["securityTool.disableElementForPrintThisPage","noopFunc"],["stopPrntScr","noopFunc"],["disableSelection","undefined"],["nocontext","undefined"],["disable_hot_keys","undefined"],["flashvars.autoplay",""],["document.body.oncopy","null","3"],["document.body.onselectstart","null","3"],["document.body.oncontextmenu","null","3"],["DD","trueFunc"],["document.oncontextmenu","null","3"],["Object.prototype._detectLoop","noopFunc"],["forbiddenList","[]"],["document.onkeypress","trueFunc"],["document.oncontextmenu","true"],["Object.prototype._detectLoop","undefined"],["SteadyWidgetSettings.adblockActive","false"],["devtoolsOpen","false"],["devtoolsDetector","noopFunc"],["DisDevTool","undefined"],["document.oncopy","noopFunc"],["devtoolsDetector.launch","noopFunc"],["console.clear","throwFunc"],["maxUnauthenicatedArticleViews","null"],["devtoolsDetector","{}"],["jh_disabled_options_data","null"],["document.onmousedown","null"],["forbidDebug","noopFunc"],["DisableDevtool","noopFunc"],["__NEXT_DATA__.props.pageProps.adPlacements","undefined"],["login_completed","true"],["console.table","trueFunc"],["console.log","trueFunc"],["Object.prototype.disableMenu","false"],["confirm","noopFunc"]];
const hostnamesMap = new Map([["xn-----0b4asja8cbew2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e7qri.xn--1ck2e1b",0],["xclient.info",1],["bejson.com",1],["impots.gouv.fr",2],["gearside.com",3],["nytimes.com",[4,5]],["tvtropes.org",6],["justtrucks.com.au",7],["ancient.eu",8],["intramed.net",9],["protest.eu",10],["northwestfirearms.com",11],["techkings.org",11],["spookshow.net",12],["fosshub.com",13],["pokemonforever.com",14],["carsguide.com.au",15],["webwereld.nl",16],["palemoon.org",17],["wheel-size.com",18],["aoezone.net",19],["bdcraft.net",20],["wired.co.uk",21],["gq-magazine.co.uk",21],["glamourmagazine.co.uk",21],["buienradar.nl",22],["clk.ink",23],["earnload.*",23],["windows101tricks.com",24],["fontsfree.pro",25],["strangermeetup.com",26],["radarbox.com",27],["adslayuda.com",28],["4x4earth.com",29],["rottentomatoes.com",30],["sovetromantica.com",31],["longecity.org",32],["gmx.net",33],["spanishdict.com",34],["epn.bz",35],["affbank.com",36],["meteoblue.com",37],["morosedog.gitlab.io",38],["tarnkappe.info",39],["bluemediafile.*",40],["marinetraffic.com",41],["animenewsnetwork.com",42],["digminecraft.com",43],["how-to-pc.info",44],["programming-link.info",44],["maxroll.gg",45],["hitokageproduction.com",46],["vnexpress.net",47],["sporttotal.tv",48],["cittadinanza.biz",49],["glistranieri.it",49],["ideapod.com",[49,52]],["privivkainfo.ru",49],["awebstories.com",[49,113]],["humo.be",50],["apksecured.com",51],["intergate.info",51],["alphapolis.co.jp",[51,63]],["chronologia.pl",[51,63]],["reportergazeta.pl",[51,63,66]],["odiarioonline.com.br",[51,71]],["nordkorea-info.de",51],["geotips.net",[51,76]],["televisiongratishd.com",[51,71,81]],["noweconomy.live",51],["naaree.com",[51,71]],["cda-hd.cc",51],["hqq.to",[51,72,89]],["tv-tokyo.co.jp",51],["arti-definisi-pengertian.info",51],["studyadda.com",[51,138]],["radioony.fm",53],["mexiconewsdaily.com",54],["technologyreview.com",55],["instagram.com",56],["m.youtube.com",57],["music.youtube.com",57],["tv.youtube.com",57],["www.youtube.com",57],["youtubekids.com",57],["1009thecat.com",58],["1013katy.com",58],["1013themix.com",58],["1015jackfm.com",58],["1015khits.com",58],["1015thefox.com",58],["1017thebeach.com",58],["1017theteam.com",58],["1019hot.com",58],["1019online.com",58],["1019thekeg.com",58],["101thefox.net",58],["101wkqx.com",58],["1021nashicon.com",58],["1021thefox.com",58],["1023thewolf.com",58],["1025jackfm.com",58],["1027thevibe.com",58],["1029nashicon.com",58],["102thebear.com",58],["1031nowfm.com",58],["1031radiom.com",58],["1035memphis.com",58],["1035thegame.com",58],["1035wrbo.com",58],["1037nash.com",58],["1039bobfm.com",58],["1039wvbo.com",58],["1041wdlt.com",58],["1043thebridge.com",58],["1043thebridge.net",58],["1043thevibe.com",58],["1045thedan.com",58],["1045thezone.com",58],["1045wjjk.com",58],["1047krez.com",58],["1049nashicon.com",58],["1049thehits.com",58],["104thehawk.com",58],["1050talk.com",58],["1053classichits.com",58],["1053hotfm.com",58],["1053thebear.com",58],["1053thepoint.com",58],["1053thepoint.net",58],["1053wow.com",58],["1055kbuck.com",58],["1055thecat.com",58],["1057kokz.com",58],["1057nowfm.com",58],["1057thebear.com",58],["1057thex.com",58],["1057thexrocks.com",58],["1061theunderground.com",58],["1063spinfm.com",58],["1063thevibe.com",58],["1063wovo.com",58],["1065theticket.com",58],["1067thekrewe.com",58],["106x.com",58],["1070wnct.com",58],["1071bobfm.com",58],["1071thepeak.com",58],["1071thepoint.com",58],["1073wsjy.com",58],["1075nowfm.com",58],["1075thegame.com",58],["1077lakefm.com",58],["1077thebone.com",58],["1077theisland.com",58],["1079nashicon.com",58],["107countrypsk.com",58],["107nashicon.com",58],["1090kaay.com",58],["1220wkrs.com",58],["1230espnsports.com",58],["1230theteam.com",58],["1280wnam.com",58],["1290wlby.com",58],["1320thefan.com",58],["1340wmsa.com",58],["1430wcmy.com",58],["1450kven.com",58],["1480kyos.com",58],["1490wosh.com",58],["1510kga.com",58],["1590walg.com",58],["1620thezone.com",58],["1700thechamp.com",58],["2hoursmattpinfield.com",58],["600wrqx.com",58],["600wsom.com",58],["610knml.com",58],["630wpro.com",58],["640wxsm.com",58],["660wxqw.com",58],["680thefan.com",58],["770kkob.com",58],["790business.com",58],["790wpic.com",58],["810whb.com",58],["860kkat.com",58],["860utahsbigtalker.com",58],["900theticket.com",58],["921theticket.com",58],["923krst.com",58],["923thewolf.com",58],["925nashicon.com",58],["925thebear.com",58],["925thewolf.com",58],["927bobfm.com",58],["929peakfm.com",58],["929thewave.com",58],["929wbpm.com",58],["92kqrs.com",58],["92profm.com",58],["92qnashville.com",58],["931nashicon.com",58],["931thebeat.com",58],["933nashicon.com",58],["935nashfm.com",58],["935wrqn.com",58],["937nashicon.com",58],["937nowfm.com",58],["937themountain.com",58],["939northpoleradio.com",58],["939theville.com",58],["939xindy.com",58],["93q.com",58],["93wkct.com",58],["93x.com",58],["940wfaw.com",58],["941ksky.com",58],["941thebear.com",58],["941thehits.com",58],["945thedrive.com",58],["945thehawkradio.com",58],["947qdr.com",58],["947wls.com",58],["949kcmo.com",58],["949radiojondeek.com",58],["949starcountry.com",58],["949theoutlaw.com",58],["94rockradio.net",58],["951nashfm.com",58],["951kbby.com",58],["953hlf.com",58],["953thebeach.com",58],["953thescore.com",58],["955bobfm.com",58],["955glo.com",58],["955nashicon.com",58],["955thefan.com",58],["955thevibe.com",58],["957kboy.com",58],["957kpur.com",58],["957nashicon.com",58],["957thevibe.com",58],["957thewolfonline.com",58],["959therocket.com",58],["95sx.com",58],["95wiil.com",58],["95x.com",58],["961bbb.com",58],["961jamz.com",58],["961sox.com",58],["961wsox.com",58],["963nashicon.com",58],["963thezone.com",58],["963wdvd.com",58],["967shinefm.com",58],["969lacaliente.com",58],["969thewolf.com",58],["96key.com",58],["96kzel.com",58],["973eagle.com",58],["973nashfm.com",58],["975kabx.com",58],["975thevibe.com",58],["975wabd.com",58],["979nashfm.com",58],["979espnradio.com",58],["979nashicon.com",58],["979wvok.com",58],["979x.com",58],["97bht.com",58],["97rock.com",58],["980waav.com",58],["980wxlm.com",58],["981thebeat.com",58],["981themax.com",58],["981thevalley.com",58],["983nashicon.com",58],["983thekeg.com",58],["983vibe.com",58],["983wlcs.com",58],["985kissfm.net",58],["989magicfm.com",58],["989thebridge.com",58],["98theticket.com",58],["993kjoy.com",58],["995thejock.com",58],["995thewolf.com",58],["997cyk.com",58],["997cyk.org",58],["997kmjj.com",58],["997themix.com",58],["997wpro.com",58],["997wtn.com",58],["999thebuzz.com",58],["999thefoxrocks.com",58],["999thehawk.com",58],["99x.com",58],["kjmo.com",58],["nashfm100.com",58],["nashfm923krst.com",58],["nashfm1033.com",58],["nashfm1055.com",58],["nashfm929.com",58],["nashfm931.com",58],["nashfm941.com",58],["nashfm949.com",58],["nashfm981.com",58],["nashfmwisconsin.com",58],["nashicon989.com",58],["v100rocks.com",58],["albanymagic.com",58],["alice1077.com",58],["allthehitsb951.com",58],["alt1019.com",58],["alt1049albany.com",58],["alt2k.com",58],["alt923.com",58],["alt98.com",58],["am630.net",58],["amarillosrockstation.com",58],["americanpatriotmedia.com",58],["annarbors107one.com",58],["atlantasrockstation.com",58],["atlsportsx.com",58],["b106fm.com",58],["b1073.com",58],["b95.com",58],["b979.net",58],["b98.com",58],["b985slo.com",58],["b987.com",58],["bakersfieldespn.com",58],["bakersfieldespnsports.com",58],["beach985.com",58],["beachboogieandblues.com",58],["bear104.com",58],["big1013.com",58],["bigcheese1079.com",58],["bigcountry1073.com",58],["bigdawg985.com",58],["bigdog1067.com",58],["bigfrog101.com",58],["bigfroggy1053.com",58],["bigtalk1490.com",58],["blairgarner.com",58],["blazin1023.com",58],["blazin923.com",58],["bloomingtonhits.com",58],["bobfmspringfield.com",58],["bowlinggreensam.com",58],["bull973.com",58],["bxr.com",58],["caperadio1550.com",58],["catcountry.com",58],["catcountry96.com",58],["catcountryvermont.com",58],["cbssports1430.com",58],["cbssportserie.com",58],["cbssportsharrisburg.com",58],["cbssportsradio1430.com",58],["chicothunderheads.com",58],["christmas989.com",58],["ckrv.com",58],["classicfox.com",58],["classichits1033.com",58],["classichitsmy1059.com",58],["classichitswnyq.com",58],["classy100.com",58],["coast1013.com",58],["coast973.com",58],["country105fm.net",58],["countrycountdownusa.com",58],["countrylegends1059.com",58],["countrymi.com",58],["coyote1025.com",58],["cumulusdigital.com",58],["digitalsolutions201.com",58],["e93fm.com",58],["eagle97.com",58],["eagle993.com",58],["easy991.com",58],["ed.fm",58],["elizabethtownradio.com",58],["energy939indy.com",58],["espn1320columbia.com",58],["espn910.com",58],["espnhonolulu.com",58],["espnlouisville.com",58],["espnlv.com",58],["espnradio1280.com",58],["espnradio927.com",58],["espnradio941.com",58],["espnsyracuse.com",58],["espnur.com",58],["espnwestpalm.com",58],["espnwilmington.com",58],["fly92.com",58],["fly923.com",58],["fm102milwaukee.com",58],["fm102one.com",58],["fonzfm.com",58],["forevereaston.com",58],["forevermediayork.com",58],["fox969.com",58],["foxcincinnati.com",58],["foxsportsredding.com",58],["froggy1003.com",58],["froggy101fm.com",58],["froggy981.com",58],["froggy99.net",58],["froggycountry.net",58],["froggyland.com",58],["fuego1029.com",58],["fun1013.com",58],["fun969fm.com",58],["generations1023.com",58],["glory985.com",58],["go106.com",58],["goradioheartland.com",58],["gospel900.com",58],["gulf104.com",58],["heaven1460.com",58],["heaven983.com",58],["hitkicker997.com",58],["hitpage.com",58],["hits931fm.com",58],["hits96.com",58],["hits965.com",58],["hot1005.com",58],["hot100blono.com",58],["hot100nrv.com",58],["hot101.com",58],["hot102.net",58],["hot1033.com",58],["hot1039.com",58],["hot1047fm.com",58],["hot1057.com",58],["hot1063.com",58],["hot1067fm.com",58],["hot1067pa.com",58],["hot1077radio.com",58],["hot92and100.com",58],["hot933hits.com",58],["hot941.com",58],["hot967fm.com",58],["hvradionet.com",58],["i973hits.com",58],["ilovethehits.com",58],["indysmix.com",58],["jammin999fm.com",58],["jamz963.com",58],["jox2fm.com",58],["joxfm.com",58],["k100country.com",58],["k104online.com",58],["k105country.com",58],["k92radio.com",58],["k983.com",58],["kabc.com",58],["kaok.com",58],["kaperadio1550.com",58],["katm.com",58],["katt.com",58],["kbcy.com",58],["kber.com",58],["kboi.com",58],["kbul.com",58],["kbull93.com",58],["kcchiefsradio.com",58],["kcheradio.com",58],["kcmotalkradio.com",58],["kcmxam.com",58],["kennradio.com",58],["kernradio.com",58],["kesn1033.com",58],["key101fm.com",58],["kfru.com",58],["kftx.com",58],["kgfm.com",58],["kgfw.com",58],["kggo.com",58],["kgmo.com",58],["kgoradio.com",58],["khay.com",58],["khfm.com",58],["khfm.org",58],["khit1075.com",58],["khop.com",58],["khvl.com",58],["kiimfm.com",58],["kiss-1031.com",58],["kix1029.com",58],["kix106.com",58],["kix96.com",58],["kizn.com",58],["kjjy.com",58],["kjoy.com",58],["kkcy.com",58],["kkfm.com",58],["kkgb.com",58],["kkgl.com",58],["kkoh.com",58],["klif.com",58],["klik1240.com",58],["klin.com",58],["klur.com",58],["kmaj.com",58],["kmaj1440.com",58],["kmez1029.com",58],["kmjnow.com",58],["knbr.com",58],["knek.com",58],["kobfm.com",58],["kpla.com",58],["kpur107.com",58],["kqfc.com",58],["kqky.com",58],["kqms.com",58],["kqxy.com",58],["krbe.com",58],["krmd.com",58],["krny.com",58],["krrq.com",58],["krush925.com",58],["kruz1033.com",58],["ksam1017.com",58],["kscrhits.com",58],["kscs.com",58],["ksfo.com",58],["kshasta.com",58],["ksks.com",58],["ksmb.com",58],["ktcx.com",58],["ktik.com",58],["ktop1490.com",58],["ktucam.com",58],["kubaradio.com",58],["kubb.com",58],["kugn.com",58],["kuzz.com",58],["kuzzradio.com",58],["kvor.com",58],["kwin.com",58],["kwwr.com",58],["kxel.com",58],["kxzz1580am.com",58],["kyis.com",58],["kykz.com",58],["kzwafm.com",58],["la103.com",58],["laindomable.com",58],["laleync.com",58],["lanuevaomaha.com",58],["lite102.com",58],["literock105fm.com",58],["love105fm.com",58],["lvfoxsports.com",58],["magic1029fm.com",58],["magic1039fm.com",58],["magic1069.com",58],["magic1073.com",58],["magic1073fm.com",58],["magic93fm.com",58],["magic943fm.com",58],["magic979wtrg.com",58],["magic995abq.com",58],["majic97monroe.com",58],["majicspace.com",58],["maverick1023.com",58],["max94one.com",58],["maxrocks.net",58],["mega979.com",58],["mgeradio.com",58],["milwaukeesparty.com",58],["mix103.com",58],["mix1077albany.com",58],["mix965.net",58],["modernrock987.com",58],["montanassuperstation.com",58],["movin993.com",58],["muskegonnashicon.com",58],["my1059.com",58],["my961.com",58],["myblono.com",58],["mycolumbiabasin.com",58],["myfroggy95.com",58],["mykiss973.com",58],["mymagic106.com",58],["mymix1051.com",58],["mymix1061.com",58],["mymix961.com",58],["mystar98.com",58],["nashcountrydaily.com",58],["nashdetroit.com",58],["nashfm1007.com",58],["nashfm1011.com",58],["nashfm1017.com",58],["nashfm1025.com",58],["nashfm1027.com",58],["nashfm1061.com",58],["nashfm1065.com",58],["nashfm923.com",58],["nashfm937.com",58],["nashfm943.com",58],["nashfm951.com",58],["nashfm973.com",58],["nashfm991.com",58],["nashfmgreenbay.com",58],["nashfmsjo.com",58],["nashnightslive.net",58],["nashpensacola.com",58],["ncsportsradio.com",58],["nepasespnradio.com",58],["neuhoffmedia.com",58],["neuhoffmedialafayette.com",58],["newcountry963.com",58],["newsradio1029.com",58],["newsradio1440.com",58],["newsradioflorida.com",58],["newsradiokkob.com",58],["newsserver1.com",58],["newsserver2.com",58],["newsserver3.com",58],["newstalk1030.com",58],["newstalk1290koil.com",58],["newstalk730.com",58],["newstalk987.com",58],["newstalkwsba.com",58],["newswebradiocompany.net",58],["now937.com",58],["nrgmedia.com",58],["nrq.com",58],["og979.com",58],["okiecountry1017.com",58],["oldiesz104.com",58],["ottawaradio.net",58],["pensacolasjet.com",58],["peorias923.com",58],["picklefm.com",58],["pikefm.com",58],["planet1067.com",58],["pmbbroadcasting.com",58],["pmbradio.com",58],["power1021.com",58],["power103.com",58],["power1057.com",58],["power1069fm.com",58],["power923.com",58],["power94radio.com",58],["power955.com",58],["powerhits95.com",58],["powerslc.com",58],["praise1025fm.com",58],["purerock96.com",58],["q1005.com",58],["q1031fm.com",58],["q105.fm",58],["q1055.com",58],["q1061.com",58],["q106dot5.com",58],["q973radio.com",58],["q97country.com",58],["q98fm.com",58],["q997atlanta.com",58],["q99fm.com",58],["radio1039ny.com",58],["radiorockriver.com",58],["radiowoodstock.com",58],["realcountry1280whvr.com",58],["realcountryhv.com",58],["red1031.com",58],["red945.com",58],["rewind1019.com",58],["rickandsasha.com",58],["rock101.net",58],["rock1015.com",58],["rock103albany.com",58],["rock103rocks.com",58],["rock106.net",58],["rock107fm.com",58],["rock108.com",58],["rock945vt.com",58],["rockdaily.com",58],["rocknews.com",58],["rockofsavannah.com",58],["rockofsavannah.net",58],["softrock941.com",58],["southernillinoisnow.com",58],["southernsportstoday.com",58],["sportsanimal920.com",58],["sportsanimalabq.com",58],["sportscapitoldc.com",58],["sportshubtriad.com",58],["sportsradio1270.com",58],["sportsradio1440.com",58],["sportsradio1560.com",58],["sportsradio590am.com",58],["sportsradio740.com",58],["sportsradio967.com",58],["sportsradio970.com",58],["sportsradiobeaumont.com",58],["sportsradioberks.com",58],["sportsradiownml.com",58],["star98.net",58],["starfm1023.com",58],["starsplash.com",58],["stevegormanrocks.com",58],["sunny1031.com",58],["sunny1069fm.com",58],["sunny923.com",58],["sunny983.com",58],["sunnymuskegon.com",58],["supertalk1570.com",58],["sweet985.com",58],["talk104fm.com",58],["talk995.com",58],["talkradio1007.com",58],["tbhpod.com",58],["teammyrtlebeach.com",58],["test107.com",58],["thebear925.com",58],["thebigjab.com",58],["thebigstation93blx.com",58],["theblairgarnershow.com",58],["theconclave.com",58],["thefan1075.com",58],["thefanfm.com",58],["thegame541.com",58],["thehippo.com",58],["thehot1039.com",58],["thenewhotfm.com",58],["thenewpulsefm.com",58],["thepointontheweb.com",58],["therebelrocks.com",58],["therocket951.com",58],["therockstationz93.com",58],["thescore1260.com",58],["thesportsanimal.com",58],["theticket.com",58],["theticket1007.com",58],["theticket102.com",58],["theticket1590.com",58],["theticketmi.com",58],["thetybentlishow.com",58],["thevalley981.com",58],["thewolf1051.com",58],["thewolf951.com",58],["thisisqmusic.com",58],["thunder1073.com",58],["triadsports.com",58],["tuligaradio.com",58],["umpsports.com",58],["v100fm.com",58],["v1033.com",58],["vermilioncountyfirst.com",58],["vermillioncountyfirst.com",58],["w3dcountry.com",58],["w4country.com",58],["wa1a.com",58],["wabcradio.com",58],["walk975.com",58],["walkradio.com",58],["warm1033.com",58],["warm98.com",58],["waysam.com",58],["wbap.com",58],["wbbw.com",58],["wbmq.net",58],["wbnq.com",58],["wbpm929.com",58],["wbpmfm.com",58],["wbwn.com",58],["wcbm.com",58],["wceiradio.com",58],["wcfx.com",58],["wchv.com",58],["wclg.com",58],["wcoapensacola.com",58],["wcpqfm.com",58],["wcpt820.com",58],["wcpt820.net",58],["wcpt820am.com",58],["wcpt820am.net",58],["wcptam.com",58],["wcptam.net",58],["wcptamfm.com",58],["wcptamfm.net",58],["wcptamfm.org",58],["wcpyfm.com",58],["wctk.com",58],["wddoam.com",58],["wden.com",58],["wdml.com",58],["wdst.com",58],["wdst.org",58],["wdzz.com",58],["wedg.com",58],["werkfm.net",58],["werkradio.com",58],["wfasam.com",58],["wfav951.com",58],["wfmd.com",58],["wfms.com",58],["wfnc640am.com",58],["wfre.com",58],["wftw.com",58],["wgh1310.com",58],["wghsolidgold.com",58],["wglx.com",58],["wgni.com",58],["wgow.com",58],["wgowam.com",58],["wgrr.com",58],["whdg.com",58],["wheelz1045.com",58],["whli.com",58],["whrpfm.com",58],["whtt.com",58],["whud.com",58],["wild1029.com",58],["wild1049hd.com",58],["wild1061.com",58],["wild993fm.com",58],["wildcatsradio1290.com",58],["wink104.com",58],["winxfm.com",58],["wiog.com",58],["wiov.com",58],["wiov985.com",58],["wivk.com",58],["wivr1017.com",58],["wizn.com",58],["wjbc.com",58],["wjcw.com",58],["wjez.com",58],["wjjr.net",58],["wjoxam.com",58],["wjr.com",58],["wkav.com",58],["wkbethepoint.com",58],["wkga975.com",58],["wkhx.com",58],["wkmoradio.com",58],["wkol.com",58],["wkrs.com",58],["wkrufm.com",58],["wksm.com",58],["wkydeportes.com",58],["wlaq1410.com",58],["wlav.com",58],["wlbc.com",58],["wlevradio.com",58],["wlkwradio.com",58],["wlok.com",58],["wlsam.com",58],["wlum.com",58],["wlup.com",58],["wlwi.com",58],["wmac-am.com",58],["wmal.com",58],["wmqa.com",58],["wncv.com",58],["wogb.fm",58],["woko.com",58],["womg.com",58],["woodstockbroadcasting.com",58],["woodstockcommunication.com",58],["woodstockradio.net",58],["woodstocktv.net",58],["wovo1063.com",58],["wovofm.com",58],["wqut.com",58],["wqvealbany.com",58],["wrganews.com",58],["wrgm.com",58],["wrlo.com",58],["wrr101.com",58],["wrul.com",58],["wsba910.com",58],["wsfl.com",58],["wsjssports.com",58],["wskz.com",58],["wsyb1380am.com",58],["wtka.com",58],["wtma.com",58],["wtrxsports.com",58],["wttlradio.com",58],["wuuqradio.com",58],["wvel.com",58],["wvli927.com",58],["wvlkam.com",58],["wvnn.com",58],["wwck.com",58],["wwki.com",58],["wwqq101.com",58],["wxfx.com",58],["wxkr.com",58],["wxpkfm.com",58],["wynn1063.com",58],["wzpl.com",58],["wzyp.com",58],["wzzl.com",58],["x1051kc.com",58],["x95radio.com",58],["xs961.com",58],["xtrasports1300.com",58],["y-103.com",58],["y101hits.com",58],["y102montgomery.com",58],["y1065.com",58],["yesfm.net",58],["z1023online.com",58],["z1029.com",58],["z1075.com",58],["z937.com",58],["z93jamz.com",58],["z96.com",58],["z971.com",58],["zone1150.com",58],["zrock103.com",58],["zrockfm.com",58],["hindipix.*",[59,60]],["vidsrc.*",[60,140]],["bitcine.app",[60,143,144]],["cineby.app",[60,143,144]],["moflix-stream.day",[60,143,144]],["tv.verizon.com",[60,143,144]],["oceanof-games.com",61],["avdelphi.com",62],["doods.*",64],["ds2play.com",64],["ds2video.com",64],["d0o0d.com",64],["vidembed.me",64],["mzzcloud.life",64],["videobot.stream",64],["videovard.*",64],["justswallows.net",64],["onscreensvideo.com",64],["katerionews.com",64],["telenovelas-turcas.com.es",64],["kmo.to",64],["jeniusplay.com",[64,127]],["southcloud.tv",64],["d0000d.com",64],["jootc.com",[65,66]],["photobank.mainichi.co.jp",67],["tbs.co.jp",68],["fruit01.xyz",69],["foxteller.com",69],["lyricstranslate.com",70],["hardcoregames.ca",71],["allsmo.com",71],["themosvagas.com.br",71],["urbharat.xyz",71],["sportnews.to",[71,81]],["123movies.*",72],["sbasian.pro",72],["miraculous.to",[72,92]],["vtplayer.net",72],["webnovel.com",72],["pepperlive.info",72],["unbiasedsenseevent.com",72],["maxt.church",72],["cool-etv.net",72],["vgembed.com",[72,121]],["photopea.com",72],["szkolawohyn.pl",73],["torrentlawyer.com",[73,77,78,79]],["virpe.cc",73],["gmarket.co.kr",[73,78]],["paesifantasma.it",74],["talpo.it",74],["quora.com",75],["hoca4u.com",78],["youmath.it",80],["renditepassive.net",[82,83,84,85,86]],["360doc.com",87],["logonews.cn",88],["cloudcomputingtopics.net",89],["0123movies.ch",[89,94,98,125]],["gardenia.net",[90,91]],["novelpia.com",[93,94]],["brainly.*",95],["blueraindrops.com",96],["animecruzers.com",97],["descargatepelis.com",98],["news.ntv.co.jp",98],["bongdaplus.vn",98],["bestjavporn.com",99],["mm9841.cc",99],["ggwash.org",[100,101]],["ask4movie.*",[102,103]],["watch.lonelil.com",103],["cinegrabber.com",104],["layarkacaxxi.icu",105],["readawrite.com",[106,107,108,109,110,111,112]],["indianhealthyrecipes.com",114],["reborntrans.com",[115,116]],["secondlifetranslations.com",[115,116]],["heavyfetish.com",117],["joysound.com",[118,119,120]],["colors.sonicthehedgehog.com",[120,122]],["leakedzone.com",123],["mehoathinh2.com",124],["brutal.io",126],["powerline.io",126],["enduro-mtb.com",128],["kukaj.io",129],["animesaga.in",130],["animesuge.to",131],["aniwave.*",131],["anix.*",131],["flixrave.to",131],["hdtoday.so",131],["hurawatch.bz",131],["vidplay.*",131],["vid2faf.site",131],["thejakartapost.com",132],["ymovies.vip",133],["aniwatch.to",133],["aniwatchtv.to",133],["megacloud.tv",133],["hianime.*",133],["putlocker.vip",133],["rapid-cloud.co",133],["rabbitstream.net",133],["pupupul.site",133],["netu.*",133],["netuplayer.top",133],["stbnetu.xyz",133],["thotsbay.tv",133],["vipstreams.in",133],["freewatchtv.top",133],["gdplayertv.*",133],["mixstreams.top",133],["tvfreemium.top",133],["abysscdn.com",133],["grostembed.online",134],["megacloud.*",134],["premiumembeding.cloud",134],["venusembed.site",134],["animekai.to",134],["megaup.cc",134],["androidpolice.com",135],["makeuseof.com",135],["movieweb.com",135],["xda-developers.com",135],["thegamer.com",135],["cbr.com",135],["gamerant.com",135],["screenrant.com",135],["howtogeek.com",135],["thethings.com",135],["simpleflying.com",135],["dualshockers.com",135],["moviesapi.club",136],["bestx.stream",136],["watchx.top",136],["yugenanime.sx",136],["yugenanime.tv",136],["tv.bdix.app",137],["dngz.net",139],["archon.gg",141],["einthusan.tv",142],["sussytoons.*",145],["astro-cric.pages.dev",146],["crichype.*",146],["jio.pftv.ws",146],["shz.al",146],["tnt2-cricstreaming.pages.dev",146],["wlo-cricstreamiing.pages.dev",146]]);
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
