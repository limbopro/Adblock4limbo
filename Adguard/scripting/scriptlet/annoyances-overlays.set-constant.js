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
const argsList = [["ConsoleBan.init","noopFunc"],["devtoolsDetector","{}"],["killads","true"],["PASSER_videoPAS_apres","0"],["ads_enabled","true"],["nebula.session.flags.adblock","undefined"],["_adBlockCheck","true"],["navigator.storage.estimate","undefined"],["valid_user","true"],["Drupal.behaviors.detectAdblockers","noopFunc"],["disableSelection","noopFunc"],["ADBdetected","noopFunc"],["adblock","false"],["BIA.ADBLOCKER","false"],["samDetected","true"],["adBlockFunction","trueFunc"],["checkAds","trueFunc"],["google_jobrunner","true"],["isAdblockDisabled","true"],["checkPrivacyWall","noopFunc"],["document.oncontextmenu","null"],["nocontext","noopFunc"],["adsAreShown","true"],["abd","false"],["detector_active","true"],["aoezone_adchecker","true"],["pageService.initDownloadProtection","noopFunc"],["detectPrivateMode","noopFunc"],["webkitRequestFileSystem","undefined"],["adsbygoogle","null"],["_sharedData.is_whitelisted_crawl_bot","true"],["ads_not_blocked","true"],["ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["hideBannerBlockedMessage","true"],["blurred","false"],["TGMP_OBJ_CACHE.tritonsee_client.playAttemptsCount","trueFunc"],["better_ads_adblock","0"],["console.debug","trueFunc"],["console.clear","trueFunc"],["adBlock","false"],["document.oncontextmenu","undefined"],["adsEnabled","true"],["better_ads_adblock","null"],["f12lock","false"],["document.onselectstart","null"],["console.clear","undefined"],["adBlockDetected","false"],["document.onkeyup","null"],["document.ondragstart","null"],["commonUtil.openToast","null"],["NS_TVER_EQ.checkEndEQ","trueFunc"],["mps._queue.abdetect","null"],["fuckAdBlock","trueFunc"],["abp","false"],["document.onkeydown","noopFunc"],["getSelection","undefined"],["document.onkeydown","null"],["console.clear","noopFunc"],["document.oncontextmenu","noopFunc"],["x5engine.utils.imCodeProtection","null"],["ansFrontendGlobals.settings.signupWallType","undefined"],["onload","null"],["document.documentElement.AdBlockDetection","noopFunc"],["document.ondragstart","noopFunc"],["document.onmousedown","noopFunc"],["document.onselectstart","noopFunc"],["disableselect","trueFunc"],["document.onkeypress","null"],["document.oncontextmenu",""],["document.onselectstart",""],["document.onkeydown",""],["document.onmousedown",""],["document.onclick",""],["document.body.onmouseup","null"],["document.oncopy","null"],["SD_BLOCKTHROUGH","true"],["document.onkeydown","trueFunc"],["ab","false"],["canRunAds","true"],["document.body.oncut","null"],["document.body.oncopy","null"],["console.log","noopFunc"],["mb.advertisingShouldBeEnabled","false"],["document.ondragstart","trueFunc"],["document.onselectstart","trueFunc"],["jsData.hasVideoMeteringUnlogEnabled","undefined"],["lepopup_abd_enabled",""],["Object.prototype.preroll","[]"],["document.oncontextmenu","trueFunc"],["devtoolsDetector","undefined"],["Object.prototype.bgOverlay","noopFunc"],["Object.prototype.fixedContentPos","noopFunc"],["console.dir","noopFunc"],["navigator.userAgent",""],["devtoolIsOpening","noopFunc"],["devtoolIsOpening","undefined"],["securityTool.disableRightClick","noopFunc"],["securityTool.disableF12","noopFunc"],["securityTool.disableCtrlP","noopFunc"],["securityTool.disableCtrlS","noopFunc"],["securityTool.disablePrintScreen","noopFunc"],["securityTool.disablePrintThisPage","noopFunc"],["securityTool.disableElementForPrintThisPage","noopFunc"],["checkAds","noopFunc"],["stopPrntScr","noopFunc"],["disableSelection","undefined"],["traffective","true"],["nocontext","undefined"],["disable_hot_keys","undefined"],["flashvars.autoplay",""],["document.body.oncopy","null","3"],["document.body.onselectstart","null","3"],["document.body.oncontextmenu","null","3"],["Time_Start","0"],["DD","trueFunc"],["document.oncontextmenu","null","3"],["Object.prototype._detectLoop","noopFunc"],["forbiddenList","[]"],["document.onkeypress","trueFunc"],["document.oncontextmenu","true"],["Object.prototype._detectLoop","undefined"],["SteadyWidgetSettings.adblockActive","false"],["devtoolsOpen","false"],["devtoolsDetector","noopFunc"],["DisDevTool","undefined"],["admiral","noopFunc"],["document.oncopy","noopFunc"],["initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"],["mtGlobal.disabledAds","true"],["devtoolsDetector.launch","noopFunc"],["console.clear","throwFunc"],["ANN.ads.adblocked","false"],["maxUnauthenicatedArticleViews","null"],["placeAdsHandler","noopFunc"],["ramp.addUnits","noopFunc"],["pqdxwidthqt","false"],["nitroAds.loaded","true"],["jh_disabled_options_data","null"],["topMessage","noopFunc"],["document.onmousedown","null"],["forbidDebug","noopFunc"],["adblock","2"],["DisableDevtool","noopFunc"],["__NEXT_DATA__.props.pageProps.adPlacements","undefined"],["login_completed","true"],["console.table","trueFunc"],["console.log","trueFunc"],["Object.prototype.disableMenu","false"],["confirm","noopFunc"],["HTMLImageElement.prototype.onerror","undefined"]];
const hostnamesMap = new Map([["xn-----0b4asja8cbew2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e7qri.xn--1ck2e1b",0],["up4stream.com",1],["ups2up.fun",1],["9tsu.vip",1],["streambolt.tv",1],["moviesapi.club",1],["bestx.stream",1],["watchx.top",1],["yugenanime.sx",1],["yugenanime.tv",1],["xclient.info",2],["bejson.com",2],["impots.gouv.fr",3],["airnavradar.com",4],["radarbox.com",4],["gearside.com",5],["nytimes.com",[6,7]],["tvtropes.org",8],["justtrucks.com.au",9],["cittadinanza.biz",10],["glistranieri.it",10],["ideapod.com",[10,21]],["privivkainfo.ru",10],["awebstories.com",[10,104]],["ancient.eu",11],["intramed.net",12],["protest.eu",13],["northwestfirearms.com",14],["techkings.org",14],["spookshow.net",15],["fosshub.com",16],["pokemonforever.com",17],["carsguide.com.au",18],["humo.be",19],["apksecured.com",20],["intergate.info",20],["alphapolis.co.jp",[20,44]],["chronologia.pl",[20,44]],["reportergazeta.pl",[20,44,48]],["odiarioonline.com.br",[20,56]],["nordkorea-info.de",20],["geotips.net",[20,61]],["televisiongratishd.com",[20,56,67]],["noweconomy.live",20],["naaree.com",[20,56]],["cda-hd.cc",20],["hqq.to",[20,57,76]],["tv-tokyo.co.jp",20],["arti-definisi-pengertian.info",20],["studyadda.com",[20,139]],["webwereld.nl",22],["palemoon.org",23],["wheel-size.com",24],["aoezone.net",25],["radioony.fm",26],["mexiconewsdaily.com",27],["technologyreview.com",28],["bdcraft.net",29],["instagram.com",30],["wired.co.uk",31],["gq-magazine.co.uk",31],["glamourmagazine.co.uk",31],["m.youtube.com",32],["music.youtube.com",32],["tv.youtube.com",32],["www.youtube.com",32],["youtubekids.com",32],["buienradar.nl",33],["clk.ink",34],["earnload.*",34],["1009thecat.com",35],["1013katy.com",35],["1013themix.com",35],["1015jackfm.com",35],["1015khits.com",35],["1015thefox.com",35],["1017thebeach.com",35],["1017theteam.com",35],["1019hot.com",35],["1019online.com",35],["1019thekeg.com",35],["101thefox.net",35],["101wkqx.com",35],["1021nashicon.com",35],["1021thefox.com",35],["1023thewolf.com",35],["1025jackfm.com",35],["1027thevibe.com",35],["1029nashicon.com",35],["102thebear.com",35],["1031nowfm.com",35],["1031radiom.com",35],["1035memphis.com",35],["1035thegame.com",35],["1035wrbo.com",35],["1037nash.com",35],["1039bobfm.com",35],["1039wvbo.com",35],["1041wdlt.com",35],["1043thebridge.com",35],["1043thebridge.net",35],["1043thevibe.com",35],["1045thedan.com",35],["1045thezone.com",35],["1045wjjk.com",35],["1047krez.com",35],["1049nashicon.com",35],["1049thehits.com",35],["104thehawk.com",35],["1050talk.com",35],["1053classichits.com",35],["1053hotfm.com",35],["1053thebear.com",35],["1053thepoint.com",35],["1053thepoint.net",35],["1053wow.com",35],["1055kbuck.com",35],["1055thecat.com",35],["1057kokz.com",35],["1057nowfm.com",35],["1057thebear.com",35],["1057thex.com",35],["1057thexrocks.com",35],["1061theunderground.com",35],["1063spinfm.com",35],["1063thevibe.com",35],["1063wovo.com",35],["1065theticket.com",35],["1067thekrewe.com",35],["106x.com",35],["1070wnct.com",35],["1071bobfm.com",35],["1071thepeak.com",35],["1071thepoint.com",35],["1073wsjy.com",35],["1075nowfm.com",35],["1075thegame.com",35],["1077lakefm.com",35],["1077thebone.com",35],["1077theisland.com",35],["1079nashicon.com",35],["107countrypsk.com",35],["107nashicon.com",35],["1090kaay.com",35],["1220wkrs.com",35],["1230espnsports.com",35],["1230theteam.com",35],["1280wnam.com",35],["1290wlby.com",35],["1320thefan.com",35],["1340wmsa.com",35],["1430wcmy.com",35],["1450kven.com",35],["1480kyos.com",35],["1490wosh.com",35],["1510kga.com",35],["1590walg.com",35],["1620thezone.com",35],["1700thechamp.com",35],["2hoursmattpinfield.com",35],["600wrqx.com",35],["600wsom.com",35],["610knml.com",35],["630wpro.com",35],["640wxsm.com",35],["660wxqw.com",35],["680thefan.com",35],["770kkob.com",35],["790business.com",35],["790wpic.com",35],["810whb.com",35],["860kkat.com",35],["860utahsbigtalker.com",35],["900theticket.com",35],["921theticket.com",35],["923krst.com",35],["923thewolf.com",35],["925nashicon.com",35],["925thebear.com",35],["925thewolf.com",35],["927bobfm.com",35],["929peakfm.com",35],["929thewave.com",35],["929wbpm.com",35],["92kqrs.com",35],["92profm.com",35],["92qnashville.com",35],["931nashicon.com",35],["931thebeat.com",35],["933nashicon.com",35],["935nashfm.com",35],["935wrqn.com",35],["937nashicon.com",35],["937nowfm.com",35],["937themountain.com",35],["939northpoleradio.com",35],["939theville.com",35],["939xindy.com",35],["93q.com",35],["93wkct.com",35],["93x.com",35],["940wfaw.com",35],["941ksky.com",35],["941thebear.com",35],["941thehits.com",35],["945thedrive.com",35],["945thehawkradio.com",35],["947qdr.com",35],["947wls.com",35],["949kcmo.com",35],["949radiojondeek.com",35],["949starcountry.com",35],["949theoutlaw.com",35],["94rockradio.net",35],["951nashfm.com",35],["951kbby.com",35],["953hlf.com",35],["953thebeach.com",35],["953thescore.com",35],["955bobfm.com",35],["955glo.com",35],["955nashicon.com",35],["955thefan.com",35],["955thevibe.com",35],["957kboy.com",35],["957kpur.com",35],["957nashicon.com",35],["957thevibe.com",35],["957thewolfonline.com",35],["959therocket.com",35],["95sx.com",35],["95wiil.com",35],["95x.com",35],["961bbb.com",35],["961jamz.com",35],["961sox.com",35],["961wsox.com",35],["963nashicon.com",35],["963thezone.com",35],["963wdvd.com",35],["967shinefm.com",35],["969lacaliente.com",35],["969thewolf.com",35],["96key.com",35],["96kzel.com",35],["973eagle.com",35],["973nashfm.com",35],["975kabx.com",35],["975thevibe.com",35],["975wabd.com",35],["979nashfm.com",35],["979espnradio.com",35],["979nashicon.com",35],["979wvok.com",35],["979x.com",35],["97bht.com",35],["97rock.com",35],["980waav.com",35],["980wxlm.com",35],["981thebeat.com",35],["981themax.com",35],["981thevalley.com",35],["983nashicon.com",35],["983thekeg.com",35],["983vibe.com",35],["983wlcs.com",35],["985kissfm.net",35],["989magicfm.com",35],["989thebridge.com",35],["98theticket.com",35],["993kjoy.com",35],["995thejock.com",35],["995thewolf.com",35],["997cyk.com",35],["997cyk.org",35],["997kmjj.com",35],["997themix.com",35],["997wpro.com",35],["997wtn.com",35],["999thebuzz.com",35],["999thefoxrocks.com",35],["999thehawk.com",35],["99x.com",35],["kjmo.com",35],["nashfm100.com",35],["nashfm923krst.com",35],["nashfm1033.com",35],["nashfm1055.com",35],["nashfm929.com",35],["nashfm931.com",35],["nashfm941.com",35],["nashfm949.com",35],["nashfm981.com",35],["nashfmwisconsin.com",35],["nashicon989.com",35],["v100rocks.com",35],["albanymagic.com",35],["alice1077.com",35],["allthehitsb951.com",35],["alt1019.com",35],["alt1049albany.com",35],["alt2k.com",35],["alt923.com",35],["alt98.com",35],["am630.net",35],["amarillosrockstation.com",35],["americanpatriotmedia.com",35],["annarbors107one.com",35],["atlantasrockstation.com",35],["atlsportsx.com",35],["b106fm.com",35],["b1073.com",35],["b95.com",35],["b979.net",35],["b98.com",35],["b985slo.com",35],["b987.com",35],["bakersfieldespn.com",35],["bakersfieldespnsports.com",35],["beach985.com",35],["beachboogieandblues.com",35],["bear104.com",35],["big1013.com",35],["bigcheese1079.com",35],["bigcountry1073.com",35],["bigdawg985.com",35],["bigdog1067.com",35],["bigfrog101.com",35],["bigfroggy1053.com",35],["bigtalk1490.com",35],["blairgarner.com",35],["blazin1023.com",35],["blazin923.com",35],["bloomingtonhits.com",35],["bobfmspringfield.com",35],["bowlinggreensam.com",35],["bull973.com",35],["bxr.com",35],["caperadio1550.com",35],["catcountry.com",35],["catcountry96.com",35],["catcountryvermont.com",35],["cbssports1430.com",35],["cbssportserie.com",35],["cbssportsharrisburg.com",35],["cbssportsradio1430.com",35],["chicothunderheads.com",35],["christmas989.com",35],["ckrv.com",35],["classicfox.com",35],["classichits1033.com",35],["classichitsmy1059.com",35],["classichitswnyq.com",35],["classy100.com",35],["coast1013.com",35],["coast973.com",35],["country105fm.net",35],["countrycountdownusa.com",35],["countrylegends1059.com",35],["countrymi.com",35],["coyote1025.com",35],["cumulusdigital.com",35],["digitalsolutions201.com",35],["e93fm.com",35],["eagle97.com",35],["eagle993.com",35],["easy991.com",35],["ed.fm",35],["elizabethtownradio.com",35],["energy939indy.com",35],["espn1320columbia.com",35],["espn910.com",35],["espnhonolulu.com",35],["espnlouisville.com",35],["espnlv.com",35],["espnradio1280.com",35],["espnradio927.com",35],["espnradio941.com",35],["espnsyracuse.com",35],["espnur.com",35],["espnwestpalm.com",35],["espnwilmington.com",35],["fly92.com",35],["fly923.com",35],["fm102milwaukee.com",35],["fm102one.com",35],["fonzfm.com",35],["forevereaston.com",35],["forevermediayork.com",35],["fox969.com",35],["foxcincinnati.com",35],["foxsportsredding.com",35],["froggy1003.com",35],["froggy101fm.com",35],["froggy981.com",35],["froggy99.net",35],["froggycountry.net",35],["froggyland.com",35],["fuego1029.com",35],["fun1013.com",35],["fun969fm.com",35],["generations1023.com",35],["glory985.com",35],["go106.com",35],["goradioheartland.com",35],["gospel900.com",35],["gulf104.com",35],["heaven1460.com",35],["heaven983.com",35],["hitkicker997.com",35],["hitpage.com",35],["hits931fm.com",35],["hits96.com",35],["hits965.com",35],["hot1005.com",35],["hot100blono.com",35],["hot100nrv.com",35],["hot101.com",35],["hot102.net",35],["hot1033.com",35],["hot1039.com",35],["hot1047fm.com",35],["hot1057.com",35],["hot1063.com",35],["hot1067fm.com",35],["hot1067pa.com",35],["hot1077radio.com",35],["hot92and100.com",35],["hot933hits.com",35],["hot941.com",35],["hot967fm.com",35],["hvradionet.com",35],["i973hits.com",35],["ilovethehits.com",35],["indysmix.com",35],["jammin999fm.com",35],["jamz963.com",35],["jox2fm.com",35],["joxfm.com",35],["k100country.com",35],["k104online.com",35],["k105country.com",35],["k92radio.com",35],["k983.com",35],["kabc.com",35],["kaok.com",35],["kaperadio1550.com",35],["katm.com",35],["katt.com",35],["kbcy.com",35],["kber.com",35],["kboi.com",35],["kbul.com",35],["kbull93.com",35],["kcchiefsradio.com",35],["kcheradio.com",35],["kcmotalkradio.com",35],["kcmxam.com",35],["kennradio.com",35],["kernradio.com",35],["kesn1033.com",35],["key101fm.com",35],["kfru.com",35],["kftx.com",35],["kgfm.com",35],["kgfw.com",35],["kggo.com",35],["kgmo.com",35],["kgoradio.com",35],["khay.com",35],["khfm.com",35],["khfm.org",35],["khit1075.com",35],["khop.com",35],["khvl.com",35],["kiimfm.com",35],["kiss-1031.com",35],["kix1029.com",35],["kix106.com",35],["kix96.com",35],["kizn.com",35],["kjjy.com",35],["kjoy.com",35],["kkcy.com",35],["kkfm.com",35],["kkgb.com",35],["kkgl.com",35],["kkoh.com",35],["klif.com",35],["klik1240.com",35],["klin.com",35],["klur.com",35],["kmaj.com",35],["kmaj1440.com",35],["kmez1029.com",35],["kmjnow.com",35],["knbr.com",35],["knek.com",35],["kobfm.com",35],["kpla.com",35],["kpur107.com",35],["kqfc.com",35],["kqky.com",35],["kqms.com",35],["kqxy.com",35],["krbe.com",35],["krmd.com",35],["krny.com",35],["krrq.com",35],["krush925.com",35],["kruz1033.com",35],["ksam1017.com",35],["kscrhits.com",35],["kscs.com",35],["ksfo.com",35],["kshasta.com",35],["ksks.com",35],["ksmb.com",35],["ktcx.com",35],["ktik.com",35],["ktop1490.com",35],["ktucam.com",35],["kubaradio.com",35],["kubb.com",35],["kugn.com",35],["kuzz.com",35],["kuzzradio.com",35],["kvor.com",35],["kwin.com",35],["kwwr.com",35],["kxel.com",35],["kxzz1580am.com",35],["kyis.com",35],["kykz.com",35],["kzwafm.com",35],["la103.com",35],["laindomable.com",35],["laleync.com",35],["lanuevaomaha.com",35],["lite102.com",35],["literock105fm.com",35],["love105fm.com",35],["lvfoxsports.com",35],["magic1029fm.com",35],["magic1039fm.com",35],["magic1069.com",35],["magic1073.com",35],["magic1073fm.com",35],["magic93fm.com",35],["magic943fm.com",35],["magic979wtrg.com",35],["magic995abq.com",35],["majic97monroe.com",35],["majicspace.com",35],["maverick1023.com",35],["max94one.com",35],["maxrocks.net",35],["mega979.com",35],["mgeradio.com",35],["milwaukeesparty.com",35],["mix103.com",35],["mix1077albany.com",35],["mix965.net",35],["modernrock987.com",35],["montanassuperstation.com",35],["movin993.com",35],["muskegonnashicon.com",35],["my1059.com",35],["my961.com",35],["myblono.com",35],["mycolumbiabasin.com",35],["myfroggy95.com",35],["mykiss973.com",35],["mymagic106.com",35],["mymix1051.com",35],["mymix1061.com",35],["mymix961.com",35],["mystar98.com",35],["nashcountrydaily.com",35],["nashdetroit.com",35],["nashfm1007.com",35],["nashfm1011.com",35],["nashfm1017.com",35],["nashfm1025.com",35],["nashfm1027.com",35],["nashfm1061.com",35],["nashfm1065.com",35],["nashfm923.com",35],["nashfm937.com",35],["nashfm943.com",35],["nashfm951.com",35],["nashfm973.com",35],["nashfm991.com",35],["nashfmgreenbay.com",35],["nashfmsjo.com",35],["nashnightslive.net",35],["nashpensacola.com",35],["ncsportsradio.com",35],["nepasespnradio.com",35],["neuhoffmedia.com",35],["neuhoffmedialafayette.com",35],["newcountry963.com",35],["newsradio1029.com",35],["newsradio1440.com",35],["newsradioflorida.com",35],["newsradiokkob.com",35],["newsserver1.com",35],["newsserver2.com",35],["newsserver3.com",35],["newstalk1030.com",35],["newstalk1290koil.com",35],["newstalk730.com",35],["newstalk987.com",35],["newstalkwsba.com",35],["newswebradiocompany.net",35],["now937.com",35],["nrgmedia.com",35],["nrq.com",35],["og979.com",35],["okiecountry1017.com",35],["oldiesz104.com",35],["ottawaradio.net",35],["pensacolasjet.com",35],["peorias923.com",35],["picklefm.com",35],["pikefm.com",35],["planet1067.com",35],["pmbbroadcasting.com",35],["pmbradio.com",35],["power1021.com",35],["power103.com",35],["power1057.com",35],["power1069fm.com",35],["power923.com",35],["power94radio.com",35],["power955.com",35],["powerhits95.com",35],["powerslc.com",35],["praise1025fm.com",35],["purerock96.com",35],["q1005.com",35],["q1031fm.com",35],["q105.fm",35],["q1055.com",35],["q1061.com",35],["q106dot5.com",35],["q973radio.com",35],["q97country.com",35],["q98fm.com",35],["q997atlanta.com",35],["q99fm.com",35],["radio1039ny.com",35],["radiorockriver.com",35],["radiowoodstock.com",35],["realcountry1280whvr.com",35],["realcountryhv.com",35],["red1031.com",35],["red945.com",35],["rewind1019.com",35],["rickandsasha.com",35],["rock101.net",35],["rock1015.com",35],["rock103albany.com",35],["rock103rocks.com",35],["rock106.net",35],["rock107fm.com",35],["rock108.com",35],["rock945vt.com",35],["rockdaily.com",35],["rocknews.com",35],["rockofsavannah.com",35],["rockofsavannah.net",35],["softrock941.com",35],["southernillinoisnow.com",35],["southernsportstoday.com",35],["sportsanimal920.com",35],["sportsanimalabq.com",35],["sportscapitoldc.com",35],["sportshubtriad.com",35],["sportsradio1270.com",35],["sportsradio1440.com",35],["sportsradio1560.com",35],["sportsradio590am.com",35],["sportsradio740.com",35],["sportsradio967.com",35],["sportsradio970.com",35],["sportsradiobeaumont.com",35],["sportsradioberks.com",35],["sportsradiownml.com",35],["star98.net",35],["starfm1023.com",35],["starsplash.com",35],["stevegormanrocks.com",35],["sunny1031.com",35],["sunny1069fm.com",35],["sunny923.com",35],["sunny983.com",35],["sunnymuskegon.com",35],["supertalk1570.com",35],["sweet985.com",35],["talk104fm.com",35],["talk995.com",35],["talkradio1007.com",35],["tbhpod.com",35],["teammyrtlebeach.com",35],["test107.com",35],["thebear925.com",35],["thebigjab.com",35],["thebigstation93blx.com",35],["theblairgarnershow.com",35],["theconclave.com",35],["thefan1075.com",35],["thefanfm.com",35],["thegame541.com",35],["thehippo.com",35],["thehot1039.com",35],["thenewhotfm.com",35],["thenewpulsefm.com",35],["thepointontheweb.com",35],["therebelrocks.com",35],["therocket951.com",35],["therockstationz93.com",35],["thescore1260.com",35],["thesportsanimal.com",35],["theticket.com",35],["theticket1007.com",35],["theticket102.com",35],["theticket1590.com",35],["theticketmi.com",35],["thetybentlishow.com",35],["thevalley981.com",35],["thewolf1051.com",35],["thewolf951.com",35],["thisisqmusic.com",35],["thunder1073.com",35],["triadsports.com",35],["tuligaradio.com",35],["umpsports.com",35],["v100fm.com",35],["v1033.com",35],["vermilioncountyfirst.com",35],["vermillioncountyfirst.com",35],["w3dcountry.com",35],["w4country.com",35],["wa1a.com",35],["wabcradio.com",35],["walk975.com",35],["walkradio.com",35],["warm1033.com",35],["warm98.com",35],["waysam.com",35],["wbap.com",35],["wbbw.com",35],["wbmq.net",35],["wbnq.com",35],["wbpm929.com",35],["wbpmfm.com",35],["wbwn.com",35],["wcbm.com",35],["wceiradio.com",35],["wcfx.com",35],["wchv.com",35],["wclg.com",35],["wcoapensacola.com",35],["wcpqfm.com",35],["wcpt820.com",35],["wcpt820.net",35],["wcpt820am.com",35],["wcpt820am.net",35],["wcptam.com",35],["wcptam.net",35],["wcptamfm.com",35],["wcptamfm.net",35],["wcptamfm.org",35],["wcpyfm.com",35],["wctk.com",35],["wddoam.com",35],["wden.com",35],["wdml.com",35],["wdst.com",35],["wdst.org",35],["wdzz.com",35],["wedg.com",35],["werkfm.net",35],["werkradio.com",35],["wfasam.com",35],["wfav951.com",35],["wfmd.com",35],["wfms.com",35],["wfnc640am.com",35],["wfre.com",35],["wftw.com",35],["wgh1310.com",35],["wghsolidgold.com",35],["wglx.com",35],["wgni.com",35],["wgow.com",35],["wgowam.com",35],["wgrr.com",35],["whdg.com",35],["wheelz1045.com",35],["whli.com",35],["whrpfm.com",35],["whtt.com",35],["whud.com",35],["wild1029.com",35],["wild1049hd.com",35],["wild1061.com",35],["wild993fm.com",35],["wildcatsradio1290.com",35],["wink104.com",35],["winxfm.com",35],["wiog.com",35],["wiov.com",35],["wiov985.com",35],["wivk.com",35],["wivr1017.com",35],["wizn.com",35],["wjbc.com",35],["wjcw.com",35],["wjez.com",35],["wjjr.net",35],["wjoxam.com",35],["wjr.com",35],["wkav.com",35],["wkbethepoint.com",35],["wkga975.com",35],["wkhx.com",35],["wkmoradio.com",35],["wkol.com",35],["wkrs.com",35],["wkrufm.com",35],["wksm.com",35],["wkydeportes.com",35],["wlaq1410.com",35],["wlav.com",35],["wlbc.com",35],["wlevradio.com",35],["wlkwradio.com",35],["wlok.com",35],["wlsam.com",35],["wlum.com",35],["wlup.com",35],["wlwi.com",35],["wmac-am.com",35],["wmal.com",35],["wmqa.com",35],["wncv.com",35],["wogb.fm",35],["woko.com",35],["womg.com",35],["woodstockbroadcasting.com",35],["woodstockcommunication.com",35],["woodstockradio.net",35],["woodstocktv.net",35],["wovo1063.com",35],["wovofm.com",35],["wqut.com",35],["wqvealbany.com",35],["wrganews.com",35],["wrgm.com",35],["wrlo.com",35],["wrr101.com",35],["wrul.com",35],["wsba910.com",35],["wsfl.com",35],["wsjssports.com",35],["wskz.com",35],["wsyb1380am.com",35],["wtka.com",35],["wtma.com",35],["wtrxsports.com",35],["wttlradio.com",35],["wuuqradio.com",35],["wvel.com",35],["wvli927.com",35],["wvlkam.com",35],["wvnn.com",35],["wwck.com",35],["wwki.com",35],["wwqq101.com",35],["wxfx.com",35],["wxkr.com",35],["wxpkfm.com",35],["wynn1063.com",35],["wzpl.com",35],["wzyp.com",35],["wzzl.com",35],["x1051kc.com",35],["x95radio.com",35],["xs961.com",35],["xtrasports1300.com",35],["y-103.com",35],["y101hits.com",35],["y102montgomery.com",35],["y1065.com",35],["yesfm.net",35],["z1023online.com",35],["z1029.com",35],["z1075.com",35],["z937.com",35],["z93jamz.com",35],["z96.com",35],["z971.com",35],["zone1150.com",35],["zrock103.com",35],["zrockfm.com",35],["windows101tricks.com",36],["hindipix.*",[37,38]],["vidsrc.*",[38,142]],["bitcine.app",[38,145,146]],["cineby.app",[38,145,146]],["moflix-stream.day",[38,145,146]],["tv.verizon.com",[38,145,146]],["fontsfree.pro",39],["oceanof-games.com",40],["strangermeetup.com",41],["adslayuda.com",42],["avdelphi.com",43],["doods.*",45],["ds2play.com",45],["ds2video.com",45],["d0o0d.com",45],["vidembed.me",45],["mzzcloud.life",45],["videobot.stream",45],["videovard.*",45],["justswallows.net",45],["onscreensvideo.com",45],["katerionews.com",45],["telenovelas-turcas.com.es",45],["kmo.to",45],["jeniusplay.com",[45,120]],["southcloud.tv",45],["d0000d.com",45],["4x4earth.com",46],["jootc.com",[47,48]],["photobank.mainichi.co.jp",49],["tbs.co.jp",50],["rottentomatoes.com",51],["sovetromantica.com",52],["longecity.org",53],["fruit01.xyz",54],["foxteller.com",54],["lyricstranslate.com",55],["hardcoregames.ca",56],["allsmo.com",56],["themosvagas.com.br",56],["urbharat.xyz",56],["sportnews.to",[56,67]],["123movies.*",57],["sbasian.pro",57],["miraculous.to",[57,81]],["vtplayer.net",57],["webnovel.com",57],["pepperlive.info",57],["unbiasedsenseevent.com",57],["maxt.church",57],["cool-etv.net",57],["vgembed.com",[57,114]],["photopea.com",57],["szkolawohyn.pl",58],["torrentlawyer.com",[58,63,64,65]],["virpe.cc",58],["gmarket.co.kr",[58,64]],["paesifantasma.it",59],["talpo.it",59],["quora.com",60],["gmx.net",62],["hoca4u.com",64],["youmath.it",66],["renditepassive.net",[68,69,70,71,72]],["360doc.com",73],["logonews.cn",74],["spanishdict.com",75],["cloudcomputingtopics.net",76],["0123movies.ch",[76,84,88,118]],["epn.bz",77],["affbank.com",78],["gardenia.net",[79,80]],["meteoblue.com",82],["novelpia.com",[83,84]],["brainly.*",85],["blueraindrops.com",86],["animecruzers.com",87],["descargatepelis.com",88],["news.ntv.co.jp",88],["bongdaplus.vn",88],["bestjavporn.com",89],["mm9841.cc",89],["ggwash.org",[90,91]],["ask4movie.*",[92,93]],["watch.lonelil.com",93],["cinegrabber.com",94],["layarkacaxxi.icu",95],["readawrite.com",[96,97,98,99,100,101,102]],["morosedog.gitlab.io",103],["indianhealthyrecipes.com",105],["tarnkappe.info",106],["freereadnovel.online",[107,108]],["reborntrans.com",[107,108]],["secondlifetranslations.com",[107,108]],["heavyfetish.com",109],["joysound.com",[110,111,112]],["colors.sonicthehedgehog.com",[112,115]],["bluemediafile.*",113],["leakedzone.com",116],["mehoathinh2.com",117],["brutal.io",119],["powerline.io",119],["enduro-mtb.com",121],["kukaj.io",122],["animesaga.in",123],["animesuge.to",124],["aniwave.*",124],["anix.*",124],["flixrave.to",124],["hdtoday.so",124],["hurawatch.bz",124],["vidplay.*",124],["vid2faf.site",124],["lazyadmin.nl",125],["thejakartapost.com",126],["fullxh.com",127],["galleryxh.site",127],["megaxh.com",127],["movingxh.world",127],["seexh.com",127],["unlockxh4.com",127],["valuexh.life",127],["xhaccess.com",127],["xhadult2.com",127],["xhadult3.com",127],["xhadult4.com",127],["xhadult5.com",127],["xhamster.*",127],["xhamster1.*",127],["xhamster10.*",127],["xhamster11.*",127],["xhamster12.*",127],["xhamster13.*",127],["xhamster14.*",127],["xhamster15.*",127],["xhamster16.*",127],["xhamster17.*",127],["xhamster18.*",127],["xhamster19.*",127],["xhamster20.*",127],["xhamster2.*",127],["xhamster3.*",127],["xhamster4.*",127],["xhamster42.*",127],["xhamster46.com",127],["xhamster5.*",127],["xhamster7.*",127],["xhamster8.*",127],["xhamsterporno.mx",127],["xhbig.com",127],["xhbranch5.com",127],["xhchannel.com",127],["xhdate.world",127],["xhday.com",127],["xhday1.com",127],["xhlease.world",127],["xhmoon5.com",127],["xhofficial.com",127],["xhopen.com",127],["xhplanet1.com",127],["xhplanet2.com",127],["xhreal2.com",127],["xhreal3.com",127],["xhspot.com",127],["xhtotal.com",127],["xhtree.com",127],["xhvictory.com",127],["xhwebsite.com",127],["xhwebsite2.com",127],["xhwebsite5.com",127],["xhwide1.com",127],["xhwide2.com",127],["xhwide5.com",127],["marinetraffic.com",128],["ymovies.vip",129],["aniwatch.to",129],["aniwatchtv.to",129],["megacloud.tv",129],["hianime.*",129],["hianimez.to",129],["putlocker.vip",129],["rapid-cloud.co",129],["rabbitstream.net",129],["pupupul.site",129],["netu.*",129],["netuplayer.top",129],["stbnetu.xyz",129],["thotsbay.tv",129],["vipstreams.in",129],["freewatchtv.top",129],["gdplayertv.*",129],["mixstreams.top",129],["tvfreemium.top",129],["abysscdn.com",129],["grostembed.online",130],["megacloud.*",130],["premiumembeding.cloud",130],["venusembed.site",130],["animekai.to",130],["animekai.bz",130],["anigo.to",130],["megaup.cc",130],["animenewsnetwork.com",131],["androidpolice.com",132],["makeuseof.com",132],["movieweb.com",132],["xda-developers.com",132],["thegamer.com",132],["cbr.com",132],["gamerant.com",132],["screenrant.com",132],["howtogeek.com",132],["thethings.com",132],["simpleflying.com",132],["dualshockers.com",132],["digminecraft.com",133],["arras.io",134],["arras.netlify.app",134],["arrax.io",134],["how-to-pc.info",135],["programming-link.info",135],["maxroll.gg",136],["tv.bdix.app",137],["hitokageproduction.com",138],["dngz.net",140],["vnexpress.net",141],["archon.gg",143],["einthusan.tv",144],["sussytoons.*",147],["astro-cric.pages.dev",148],["crichype.*",148],["jio.pftv.ws",148],["shz.al",148],["tnt2-cricstreaming.pages.dev",148],["wlo-cricstreamiing.pages.dev",148],["sporttotal.tv",149]]);
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
