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
const argsList = [["ConsoleBan.init","noopFunc"],["devtoolsDetector","{}"],["killads","true"],["PASSER_videoPAS_apres","0"],["nebula.session.flags.adblock","undefined"],["_adBlockCheck","true"],["navigator.storage.estimate","undefined"],["valid_user","true"],["Drupal.behaviors.detectAdblockers","noopFunc"],["disableSelection","noopFunc"],["ADBdetected","noopFunc"],["adblock","false"],["BIA.ADBLOCKER","false"],["samDetected","true"],["adBlockFunction","trueFunc"],["checkAds","trueFunc"],["google_jobrunner","true"],["isAdblockDisabled","true"],["checkPrivacyWall","noopFunc"],["document.oncontextmenu","null"],["nocontext","noopFunc"],["adsAreShown","true"],["abd","false"],["detector_active","true"],["aoezone_adchecker","true"],["pageService.initDownloadProtection","noopFunc"],["detectPrivateMode","noopFunc"],["webkitRequestFileSystem","undefined"],["adsbygoogle","null"],["_sharedData.is_whitelisted_crawl_bot","true"],["ads_not_blocked","true"],["ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["hideBannerBlockedMessage","true"],["blurred","false"],["TGMP_OBJ_CACHE.tritonsee_client.playAttemptsCount","trueFunc"],["better_ads_adblock","0"],["console.debug","trueFunc"],["console.clear","trueFunc"],["adBlock","false"],["document.oncontextmenu","undefined"],["adsEnabled","true"],["ads_enabled","true"],["better_ads_adblock","null"],["f12lock","false"],["document.onselectstart","null"],["console.clear","undefined"],["adBlockDetected","false"],["document.onkeyup","null"],["document.ondragstart","null"],["commonUtil.openToast","null"],["NS_TVER_EQ.checkEndEQ","trueFunc"],["mps._queue.abdetect","null"],["fuckAdBlock","trueFunc"],["abp","false"],["document.onkeydown","noopFunc"],["getSelection","undefined"],["document.onkeydown","null"],["console.clear","noopFunc"],["document.oncontextmenu","noopFunc"],["x5engine.utils.imCodeProtection","null"],["ansFrontendGlobals.settings.signupWallType","undefined"],["onload","null"],["document.documentElement.AdBlockDetection","noopFunc"],["document.ondragstart","noopFunc"],["document.onmousedown","noopFunc"],["document.onselectstart","noopFunc"],["disableselect","trueFunc"],["document.onkeypress","null"],["document.oncontextmenu",""],["document.onselectstart",""],["document.onkeydown",""],["document.onmousedown",""],["document.onclick",""],["document.body.onmouseup","null"],["document.oncopy","null"],["SD_BLOCKTHROUGH","true"],["document.onkeydown","trueFunc"],["ab","false"],["canRunAds","true"],["document.body.oncut","null"],["document.body.oncopy","null"],["console.log","noopFunc"],["mb.advertisingShouldBeEnabled","false"],["document.ondragstart","trueFunc"],["document.onselectstart","trueFunc"],["jsData.hasVideoMeteringUnlogEnabled","undefined"],["lepopup_abd_enabled",""],["Object.prototype.preroll","[]"],["document.oncontextmenu","trueFunc"],["devtoolsDetector","undefined"],["Object.prototype.bgOverlay","noopFunc"],["Object.prototype.fixedContentPos","noopFunc"],["console.dir","noopFunc"],["navigator.userAgent",""],["devtoolIsOpening","noopFunc"],["devtoolIsOpening","undefined"],["securityTool.disableRightClick","noopFunc"],["securityTool.disableF12","noopFunc"],["securityTool.disableCtrlP","noopFunc"],["securityTool.disableCtrlS","noopFunc"],["securityTool.disablePrintScreen","noopFunc"],["securityTool.disablePrintThisPage","noopFunc"],["securityTool.disableElementForPrintThisPage","noopFunc"],["checkAds","noopFunc"],["stopPrntScr","noopFunc"],["disableSelection","undefined"],["traffective","true"],["nocontext","undefined"],["disable_hot_keys","undefined"],["flashvars.autoplay",""],["document.body.oncopy","null","3"],["document.body.onselectstart","null","3"],["document.body.oncontextmenu","null","3"],["Time_Start","0"],["DD","trueFunc"],["document.oncontextmenu","null","3"],["Object.prototype._detectLoop","noopFunc"],["forbiddenList","[]"],["document.onkeypress","trueFunc"],["document.oncontextmenu","true"],["Object.prototype._detectLoop","undefined"],["SteadyWidgetSettings.adblockActive","false"],["devtoolsOpen","false"],["devtoolsDetector","noopFunc"],["DisDevTool","undefined"],["admiral","noopFunc"],["document.oncopy","noopFunc"],["initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"],["mtGlobal.disabledAds","true"],["devtoolsDetector.launch","noopFunc"],["console.clear","throwFunc"],["ANN.ads.adblocked","false"],["maxUnauthenicatedArticleViews","null"],["placeAdsHandler","noopFunc"],["ramp.addUnits","noopFunc"],["pqdxwidthqt","false"],["nitroAds.loaded","true"],["jh_disabled_options_data","null"],["topMessage","noopFunc"],["document.onmousedown","null"],["forbidDebug","noopFunc"],["adblock","2"],["DisableDevtool","noopFunc"],["__NEXT_DATA__.props.pageProps.adPlacements","undefined"],["login_completed","true"],["console.table","trueFunc"],["console.log","trueFunc"],["Object.prototype.disableMenu","false"],["confirm","noopFunc"],["HTMLImageElement.prototype.onerror","undefined"]];
const hostnamesMap = new Map([["xn-----0b4asja8cbew2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e7qri.xn--1ck2e1b",0],["9tsu.vip",1],["moviesapi.club",1],["bestx.stream",1],["watchx.top",1],["yugenanime.sx",1],["yugenanime.tv",1],["xclient.info",2],["bejson.com",2],["impots.gouv.fr",3],["gearside.com",4],["nytimes.com",[5,6]],["tvtropes.org",7],["justtrucks.com.au",8],["cittadinanza.biz",9],["glistranieri.it",9],["ideapod.com",[9,20]],["privivkainfo.ru",9],["awebstories.com",[9,104]],["ancient.eu",10],["intramed.net",11],["protest.eu",12],["northwestfirearms.com",13],["techkings.org",13],["spookshow.net",14],["fosshub.com",15],["pokemonforever.com",16],["carsguide.com.au",17],["humo.be",18],["apksecured.com",19],["intergate.info",19],["alphapolis.co.jp",[19,44]],["chronologia.pl",[19,44]],["reportergazeta.pl",[19,44,48]],["odiarioonline.com.br",[19,56]],["nordkorea-info.de",19],["geotips.net",[19,61]],["televisiongratishd.com",[19,56,67]],["noweconomy.live",19],["naaree.com",[19,56]],["cda-hd.cc",19],["hqq.to",[19,57,76]],["tv-tokyo.co.jp",19],["arti-definisi-pengertian.info",19],["studyadda.com",[19,139]],["webwereld.nl",21],["palemoon.org",22],["wheel-size.com",23],["aoezone.net",24],["radioony.fm",25],["mexiconewsdaily.com",26],["technologyreview.com",27],["bdcraft.net",28],["instagram.com",29],["wired.co.uk",30],["gq-magazine.co.uk",30],["glamourmagazine.co.uk",30],["m.youtube.com",31],["music.youtube.com",31],["tv.youtube.com",31],["www.youtube.com",31],["youtubekids.com",31],["buienradar.nl",32],["clk.ink",33],["earnload.*",33],["1009thecat.com",34],["1013katy.com",34],["1013themix.com",34],["1015jackfm.com",34],["1015khits.com",34],["1015thefox.com",34],["1017thebeach.com",34],["1017theteam.com",34],["1019hot.com",34],["1019online.com",34],["1019thekeg.com",34],["101thefox.net",34],["101wkqx.com",34],["1021nashicon.com",34],["1021thefox.com",34],["1023thewolf.com",34],["1025jackfm.com",34],["1027thevibe.com",34],["1029nashicon.com",34],["102thebear.com",34],["1031nowfm.com",34],["1031radiom.com",34],["1035memphis.com",34],["1035thegame.com",34],["1035wrbo.com",34],["1037nash.com",34],["1039bobfm.com",34],["1039wvbo.com",34],["1041wdlt.com",34],["1043thebridge.com",34],["1043thebridge.net",34],["1043thevibe.com",34],["1045thedan.com",34],["1045thezone.com",34],["1045wjjk.com",34],["1047krez.com",34],["1049nashicon.com",34],["1049thehits.com",34],["104thehawk.com",34],["1050talk.com",34],["1053classichits.com",34],["1053hotfm.com",34],["1053thebear.com",34],["1053thepoint.com",34],["1053thepoint.net",34],["1053wow.com",34],["1055kbuck.com",34],["1055thecat.com",34],["1057kokz.com",34],["1057nowfm.com",34],["1057thebear.com",34],["1057thex.com",34],["1057thexrocks.com",34],["1061theunderground.com",34],["1063spinfm.com",34],["1063thevibe.com",34],["1063wovo.com",34],["1065theticket.com",34],["1067thekrewe.com",34],["106x.com",34],["1070wnct.com",34],["1071bobfm.com",34],["1071thepeak.com",34],["1071thepoint.com",34],["1073wsjy.com",34],["1075nowfm.com",34],["1075thegame.com",34],["1077lakefm.com",34],["1077thebone.com",34],["1077theisland.com",34],["1079nashicon.com",34],["107countrypsk.com",34],["107nashicon.com",34],["1090kaay.com",34],["1220wkrs.com",34],["1230espnsports.com",34],["1230theteam.com",34],["1280wnam.com",34],["1290wlby.com",34],["1320thefan.com",34],["1340wmsa.com",34],["1430wcmy.com",34],["1450kven.com",34],["1480kyos.com",34],["1490wosh.com",34],["1510kga.com",34],["1590walg.com",34],["1620thezone.com",34],["1700thechamp.com",34],["2hoursmattpinfield.com",34],["600wrqx.com",34],["600wsom.com",34],["610knml.com",34],["630wpro.com",34],["640wxsm.com",34],["660wxqw.com",34],["680thefan.com",34],["770kkob.com",34],["790business.com",34],["790wpic.com",34],["810whb.com",34],["860kkat.com",34],["860utahsbigtalker.com",34],["900theticket.com",34],["921theticket.com",34],["923krst.com",34],["923thewolf.com",34],["925nashicon.com",34],["925thebear.com",34],["925thewolf.com",34],["927bobfm.com",34],["929peakfm.com",34],["929thewave.com",34],["929wbpm.com",34],["92kqrs.com",34],["92profm.com",34],["92qnashville.com",34],["931nashicon.com",34],["931thebeat.com",34],["933nashicon.com",34],["935nashfm.com",34],["935wrqn.com",34],["937nashicon.com",34],["937nowfm.com",34],["937themountain.com",34],["939northpoleradio.com",34],["939theville.com",34],["939xindy.com",34],["93q.com",34],["93wkct.com",34],["93x.com",34],["940wfaw.com",34],["941ksky.com",34],["941thebear.com",34],["941thehits.com",34],["945thedrive.com",34],["945thehawkradio.com",34],["947qdr.com",34],["947wls.com",34],["949kcmo.com",34],["949radiojondeek.com",34],["949starcountry.com",34],["949theoutlaw.com",34],["94rockradio.net",34],["951nashfm.com",34],["951kbby.com",34],["953hlf.com",34],["953thebeach.com",34],["953thescore.com",34],["955bobfm.com",34],["955glo.com",34],["955nashicon.com",34],["955thefan.com",34],["955thevibe.com",34],["957kboy.com",34],["957kpur.com",34],["957nashicon.com",34],["957thevibe.com",34],["957thewolfonline.com",34],["959therocket.com",34],["95sx.com",34],["95wiil.com",34],["95x.com",34],["961bbb.com",34],["961jamz.com",34],["961sox.com",34],["961wsox.com",34],["963nashicon.com",34],["963thezone.com",34],["963wdvd.com",34],["967shinefm.com",34],["969lacaliente.com",34],["969thewolf.com",34],["96key.com",34],["96kzel.com",34],["973eagle.com",34],["973nashfm.com",34],["975kabx.com",34],["975thevibe.com",34],["975wabd.com",34],["979nashfm.com",34],["979espnradio.com",34],["979nashicon.com",34],["979wvok.com",34],["979x.com",34],["97bht.com",34],["97rock.com",34],["980waav.com",34],["980wxlm.com",34],["981thebeat.com",34],["981themax.com",34],["981thevalley.com",34],["983nashicon.com",34],["983thekeg.com",34],["983vibe.com",34],["983wlcs.com",34],["985kissfm.net",34],["989magicfm.com",34],["989thebridge.com",34],["98theticket.com",34],["993kjoy.com",34],["995thejock.com",34],["995thewolf.com",34],["997cyk.com",34],["997cyk.org",34],["997kmjj.com",34],["997themix.com",34],["997wpro.com",34],["997wtn.com",34],["999thebuzz.com",34],["999thefoxrocks.com",34],["999thehawk.com",34],["99x.com",34],["kjmo.com",34],["nashfm100.com",34],["nashfm923krst.com",34],["nashfm1033.com",34],["nashfm1055.com",34],["nashfm929.com",34],["nashfm931.com",34],["nashfm941.com",34],["nashfm949.com",34],["nashfm981.com",34],["nashfmwisconsin.com",34],["nashicon989.com",34],["v100rocks.com",34],["albanymagic.com",34],["alice1077.com",34],["allthehitsb951.com",34],["alt1019.com",34],["alt1049albany.com",34],["alt2k.com",34],["alt923.com",34],["alt98.com",34],["am630.net",34],["amarillosrockstation.com",34],["americanpatriotmedia.com",34],["annarbors107one.com",34],["atlantasrockstation.com",34],["atlsportsx.com",34],["b106fm.com",34],["b1073.com",34],["b95.com",34],["b979.net",34],["b98.com",34],["b985slo.com",34],["b987.com",34],["bakersfieldespn.com",34],["bakersfieldespnsports.com",34],["beach985.com",34],["beachboogieandblues.com",34],["bear104.com",34],["big1013.com",34],["bigcheese1079.com",34],["bigcountry1073.com",34],["bigdawg985.com",34],["bigdog1067.com",34],["bigfrog101.com",34],["bigfroggy1053.com",34],["bigtalk1490.com",34],["blairgarner.com",34],["blazin1023.com",34],["blazin923.com",34],["bloomingtonhits.com",34],["bobfmspringfield.com",34],["bowlinggreensam.com",34],["bull973.com",34],["bxr.com",34],["caperadio1550.com",34],["catcountry.com",34],["catcountry96.com",34],["catcountryvermont.com",34],["cbssports1430.com",34],["cbssportserie.com",34],["cbssportsharrisburg.com",34],["cbssportsradio1430.com",34],["chicothunderheads.com",34],["christmas989.com",34],["ckrv.com",34],["classicfox.com",34],["classichits1033.com",34],["classichitsmy1059.com",34],["classichitswnyq.com",34],["classy100.com",34],["coast1013.com",34],["coast973.com",34],["country105fm.net",34],["countrycountdownusa.com",34],["countrylegends1059.com",34],["countrymi.com",34],["coyote1025.com",34],["cumulusdigital.com",34],["digitalsolutions201.com",34],["e93fm.com",34],["eagle97.com",34],["eagle993.com",34],["easy991.com",34],["ed.fm",34],["elizabethtownradio.com",34],["energy939indy.com",34],["espn1320columbia.com",34],["espn910.com",34],["espnhonolulu.com",34],["espnlouisville.com",34],["espnlv.com",34],["espnradio1280.com",34],["espnradio927.com",34],["espnradio941.com",34],["espnsyracuse.com",34],["espnur.com",34],["espnwestpalm.com",34],["espnwilmington.com",34],["fly92.com",34],["fly923.com",34],["fm102milwaukee.com",34],["fm102one.com",34],["fonzfm.com",34],["forevereaston.com",34],["forevermediayork.com",34],["fox969.com",34],["foxcincinnati.com",34],["foxsportsredding.com",34],["froggy1003.com",34],["froggy101fm.com",34],["froggy981.com",34],["froggy99.net",34],["froggycountry.net",34],["froggyland.com",34],["fuego1029.com",34],["fun1013.com",34],["fun969fm.com",34],["generations1023.com",34],["glory985.com",34],["go106.com",34],["goradioheartland.com",34],["gospel900.com",34],["gulf104.com",34],["heaven1460.com",34],["heaven983.com",34],["hitkicker997.com",34],["hitpage.com",34],["hits931fm.com",34],["hits96.com",34],["hits965.com",34],["hot1005.com",34],["hot100blono.com",34],["hot100nrv.com",34],["hot101.com",34],["hot102.net",34],["hot1033.com",34],["hot1039.com",34],["hot1047fm.com",34],["hot1057.com",34],["hot1063.com",34],["hot1067fm.com",34],["hot1067pa.com",34],["hot1077radio.com",34],["hot92and100.com",34],["hot933hits.com",34],["hot941.com",34],["hot967fm.com",34],["hvradionet.com",34],["i973hits.com",34],["ilovethehits.com",34],["indysmix.com",34],["jammin999fm.com",34],["jamz963.com",34],["jox2fm.com",34],["joxfm.com",34],["k100country.com",34],["k104online.com",34],["k105country.com",34],["k92radio.com",34],["k983.com",34],["kabc.com",34],["kaok.com",34],["kaperadio1550.com",34],["katm.com",34],["katt.com",34],["kbcy.com",34],["kber.com",34],["kboi.com",34],["kbul.com",34],["kbull93.com",34],["kcchiefsradio.com",34],["kcheradio.com",34],["kcmotalkradio.com",34],["kcmxam.com",34],["kennradio.com",34],["kernradio.com",34],["kesn1033.com",34],["key101fm.com",34],["kfru.com",34],["kftx.com",34],["kgfm.com",34],["kgfw.com",34],["kggo.com",34],["kgmo.com",34],["kgoradio.com",34],["khay.com",34],["khfm.com",34],["khfm.org",34],["khit1075.com",34],["khop.com",34],["khvl.com",34],["kiimfm.com",34],["kiss-1031.com",34],["kix1029.com",34],["kix106.com",34],["kix96.com",34],["kizn.com",34],["kjjy.com",34],["kjoy.com",34],["kkcy.com",34],["kkfm.com",34],["kkgb.com",34],["kkgl.com",34],["kkoh.com",34],["klif.com",34],["klik1240.com",34],["klin.com",34],["klur.com",34],["kmaj.com",34],["kmaj1440.com",34],["kmez1029.com",34],["kmjnow.com",34],["knbr.com",34],["knek.com",34],["kobfm.com",34],["kpla.com",34],["kpur107.com",34],["kqfc.com",34],["kqky.com",34],["kqms.com",34],["kqxy.com",34],["krbe.com",34],["krmd.com",34],["krny.com",34],["krrq.com",34],["krush925.com",34],["kruz1033.com",34],["ksam1017.com",34],["kscrhits.com",34],["kscs.com",34],["ksfo.com",34],["kshasta.com",34],["ksks.com",34],["ksmb.com",34],["ktcx.com",34],["ktik.com",34],["ktop1490.com",34],["ktucam.com",34],["kubaradio.com",34],["kubb.com",34],["kugn.com",34],["kuzz.com",34],["kuzzradio.com",34],["kvor.com",34],["kwin.com",34],["kwwr.com",34],["kxel.com",34],["kxzz1580am.com",34],["kyis.com",34],["kykz.com",34],["kzwafm.com",34],["la103.com",34],["laindomable.com",34],["laleync.com",34],["lanuevaomaha.com",34],["lite102.com",34],["literock105fm.com",34],["love105fm.com",34],["lvfoxsports.com",34],["magic1029fm.com",34],["magic1039fm.com",34],["magic1069.com",34],["magic1073.com",34],["magic1073fm.com",34],["magic93fm.com",34],["magic943fm.com",34],["magic979wtrg.com",34],["magic995abq.com",34],["majic97monroe.com",34],["majicspace.com",34],["maverick1023.com",34],["max94one.com",34],["maxrocks.net",34],["mega979.com",34],["mgeradio.com",34],["milwaukeesparty.com",34],["mix103.com",34],["mix1077albany.com",34],["mix965.net",34],["modernrock987.com",34],["montanassuperstation.com",34],["movin993.com",34],["muskegonnashicon.com",34],["my1059.com",34],["my961.com",34],["myblono.com",34],["mycolumbiabasin.com",34],["myfroggy95.com",34],["mykiss973.com",34],["mymagic106.com",34],["mymix1051.com",34],["mymix1061.com",34],["mymix961.com",34],["mystar98.com",34],["nashcountrydaily.com",34],["nashdetroit.com",34],["nashfm1007.com",34],["nashfm1011.com",34],["nashfm1017.com",34],["nashfm1025.com",34],["nashfm1027.com",34],["nashfm1061.com",34],["nashfm1065.com",34],["nashfm923.com",34],["nashfm937.com",34],["nashfm943.com",34],["nashfm951.com",34],["nashfm973.com",34],["nashfm991.com",34],["nashfmgreenbay.com",34],["nashfmsjo.com",34],["nashnightslive.net",34],["nashpensacola.com",34],["ncsportsradio.com",34],["nepasespnradio.com",34],["neuhoffmedia.com",34],["neuhoffmedialafayette.com",34],["newcountry963.com",34],["newsradio1029.com",34],["newsradio1440.com",34],["newsradioflorida.com",34],["newsradiokkob.com",34],["newsserver1.com",34],["newsserver2.com",34],["newsserver3.com",34],["newstalk1030.com",34],["newstalk1290koil.com",34],["newstalk730.com",34],["newstalk987.com",34],["newstalkwsba.com",34],["newswebradiocompany.net",34],["now937.com",34],["nrgmedia.com",34],["nrq.com",34],["og979.com",34],["okiecountry1017.com",34],["oldiesz104.com",34],["ottawaradio.net",34],["pensacolasjet.com",34],["peorias923.com",34],["picklefm.com",34],["pikefm.com",34],["planet1067.com",34],["pmbbroadcasting.com",34],["pmbradio.com",34],["power1021.com",34],["power103.com",34],["power1057.com",34],["power1069fm.com",34],["power923.com",34],["power94radio.com",34],["power955.com",34],["powerhits95.com",34],["powerslc.com",34],["praise1025fm.com",34],["purerock96.com",34],["q1005.com",34],["q1031fm.com",34],["q105.fm",34],["q1055.com",34],["q1061.com",34],["q106dot5.com",34],["q973radio.com",34],["q97country.com",34],["q98fm.com",34],["q997atlanta.com",34],["q99fm.com",34],["radio1039ny.com",34],["radiorockriver.com",34],["radiowoodstock.com",34],["realcountry1280whvr.com",34],["realcountryhv.com",34],["red1031.com",34],["red945.com",34],["rewind1019.com",34],["rickandsasha.com",34],["rock101.net",34],["rock1015.com",34],["rock103albany.com",34],["rock103rocks.com",34],["rock106.net",34],["rock107fm.com",34],["rock108.com",34],["rock945vt.com",34],["rockdaily.com",34],["rocknews.com",34],["rockofsavannah.com",34],["rockofsavannah.net",34],["softrock941.com",34],["southernillinoisnow.com",34],["southernsportstoday.com",34],["sportsanimal920.com",34],["sportsanimalabq.com",34],["sportscapitoldc.com",34],["sportshubtriad.com",34],["sportsradio1270.com",34],["sportsradio1440.com",34],["sportsradio1560.com",34],["sportsradio590am.com",34],["sportsradio740.com",34],["sportsradio967.com",34],["sportsradio970.com",34],["sportsradiobeaumont.com",34],["sportsradioberks.com",34],["sportsradiownml.com",34],["star98.net",34],["starfm1023.com",34],["starsplash.com",34],["stevegormanrocks.com",34],["sunny1031.com",34],["sunny1069fm.com",34],["sunny923.com",34],["sunny983.com",34],["sunnymuskegon.com",34],["supertalk1570.com",34],["sweet985.com",34],["talk104fm.com",34],["talk995.com",34],["talkradio1007.com",34],["tbhpod.com",34],["teammyrtlebeach.com",34],["test107.com",34],["thebear925.com",34],["thebigjab.com",34],["thebigstation93blx.com",34],["theblairgarnershow.com",34],["theconclave.com",34],["thefan1075.com",34],["thefanfm.com",34],["thegame541.com",34],["thehippo.com",34],["thehot1039.com",34],["thenewhotfm.com",34],["thenewpulsefm.com",34],["thepointontheweb.com",34],["therebelrocks.com",34],["therocket951.com",34],["therockstationz93.com",34],["thescore1260.com",34],["thesportsanimal.com",34],["theticket.com",34],["theticket1007.com",34],["theticket102.com",34],["theticket1590.com",34],["theticketmi.com",34],["thetybentlishow.com",34],["thevalley981.com",34],["thewolf1051.com",34],["thewolf951.com",34],["thisisqmusic.com",34],["thunder1073.com",34],["triadsports.com",34],["tuligaradio.com",34],["umpsports.com",34],["v100fm.com",34],["v1033.com",34],["vermilioncountyfirst.com",34],["vermillioncountyfirst.com",34],["w3dcountry.com",34],["w4country.com",34],["wa1a.com",34],["wabcradio.com",34],["walk975.com",34],["walkradio.com",34],["warm1033.com",34],["warm98.com",34],["waysam.com",34],["wbap.com",34],["wbbw.com",34],["wbmq.net",34],["wbnq.com",34],["wbpm929.com",34],["wbpmfm.com",34],["wbwn.com",34],["wcbm.com",34],["wceiradio.com",34],["wcfx.com",34],["wchv.com",34],["wclg.com",34],["wcoapensacola.com",34],["wcpqfm.com",34],["wcpt820.com",34],["wcpt820.net",34],["wcpt820am.com",34],["wcpt820am.net",34],["wcptam.com",34],["wcptam.net",34],["wcptamfm.com",34],["wcptamfm.net",34],["wcptamfm.org",34],["wcpyfm.com",34],["wctk.com",34],["wddoam.com",34],["wden.com",34],["wdml.com",34],["wdst.com",34],["wdst.org",34],["wdzz.com",34],["wedg.com",34],["werkfm.net",34],["werkradio.com",34],["wfasam.com",34],["wfav951.com",34],["wfmd.com",34],["wfms.com",34],["wfnc640am.com",34],["wfre.com",34],["wftw.com",34],["wgh1310.com",34],["wghsolidgold.com",34],["wglx.com",34],["wgni.com",34],["wgow.com",34],["wgowam.com",34],["wgrr.com",34],["whdg.com",34],["wheelz1045.com",34],["whli.com",34],["whrpfm.com",34],["whtt.com",34],["whud.com",34],["wild1029.com",34],["wild1049hd.com",34],["wild1061.com",34],["wild993fm.com",34],["wildcatsradio1290.com",34],["wink104.com",34],["winxfm.com",34],["wiog.com",34],["wiov.com",34],["wiov985.com",34],["wivk.com",34],["wivr1017.com",34],["wizn.com",34],["wjbc.com",34],["wjcw.com",34],["wjez.com",34],["wjjr.net",34],["wjoxam.com",34],["wjr.com",34],["wkav.com",34],["wkbethepoint.com",34],["wkga975.com",34],["wkhx.com",34],["wkmoradio.com",34],["wkol.com",34],["wkrs.com",34],["wkrufm.com",34],["wksm.com",34],["wkydeportes.com",34],["wlaq1410.com",34],["wlav.com",34],["wlbc.com",34],["wlevradio.com",34],["wlkwradio.com",34],["wlok.com",34],["wlsam.com",34],["wlum.com",34],["wlup.com",34],["wlwi.com",34],["wmac-am.com",34],["wmal.com",34],["wmqa.com",34],["wncv.com",34],["wogb.fm",34],["woko.com",34],["womg.com",34],["woodstockbroadcasting.com",34],["woodstockcommunication.com",34],["woodstockradio.net",34],["woodstocktv.net",34],["wovo1063.com",34],["wovofm.com",34],["wqut.com",34],["wqvealbany.com",34],["wrganews.com",34],["wrgm.com",34],["wrlo.com",34],["wrr101.com",34],["wrul.com",34],["wsba910.com",34],["wsfl.com",34],["wsjssports.com",34],["wskz.com",34],["wsyb1380am.com",34],["wtka.com",34],["wtma.com",34],["wtrxsports.com",34],["wttlradio.com",34],["wuuqradio.com",34],["wvel.com",34],["wvli927.com",34],["wvlkam.com",34],["wvnn.com",34],["wwck.com",34],["wwki.com",34],["wwqq101.com",34],["wxfx.com",34],["wxkr.com",34],["wxpkfm.com",34],["wynn1063.com",34],["wzpl.com",34],["wzyp.com",34],["wzzl.com",34],["x1051kc.com",34],["x95radio.com",34],["xs961.com",34],["xtrasports1300.com",34],["y-103.com",34],["y101hits.com",34],["y102montgomery.com",34],["y1065.com",34],["yesfm.net",34],["z1023online.com",34],["z1029.com",34],["z1075.com",34],["z937.com",34],["z93jamz.com",34],["z96.com",34],["z971.com",34],["zone1150.com",34],["zrock103.com",34],["zrockfm.com",34],["windows101tricks.com",35],["hindipix.*",[36,37]],["vidsrc.*",[37,142]],["bitcine.app",[37,145,146]],["cineby.app",[37,145,146]],["moflix-stream.day",[37,145,146]],["tv.verizon.com",[37,145,146]],["fontsfree.pro",38],["oceanof-games.com",39],["strangermeetup.com",40],["radarbox.com",41],["adslayuda.com",42],["avdelphi.com",43],["doods.*",45],["ds2play.com",45],["ds2video.com",45],["d0o0d.com",45],["vidembed.me",45],["mzzcloud.life",45],["videobot.stream",45],["videovard.*",45],["justswallows.net",45],["onscreensvideo.com",45],["katerionews.com",45],["telenovelas-turcas.com.es",45],["kmo.to",45],["jeniusplay.com",[45,120]],["southcloud.tv",45],["d0000d.com",45],["4x4earth.com",46],["jootc.com",[47,48]],["photobank.mainichi.co.jp",49],["tbs.co.jp",50],["rottentomatoes.com",51],["sovetromantica.com",52],["longecity.org",53],["fruit01.xyz",54],["foxteller.com",54],["lyricstranslate.com",55],["hardcoregames.ca",56],["allsmo.com",56],["themosvagas.com.br",56],["urbharat.xyz",56],["sportnews.to",[56,67]],["123movies.*",57],["sbasian.pro",57],["miraculous.to",[57,81]],["vtplayer.net",57],["webnovel.com",57],["pepperlive.info",57],["unbiasedsenseevent.com",57],["maxt.church",57],["cool-etv.net",57],["vgembed.com",[57,114]],["photopea.com",57],["szkolawohyn.pl",58],["torrentlawyer.com",[58,63,64,65]],["virpe.cc",58],["gmarket.co.kr",[58,64]],["paesifantasma.it",59],["talpo.it",59],["quora.com",60],["gmx.net",62],["hoca4u.com",64],["youmath.it",66],["renditepassive.net",[68,69,70,71,72]],["360doc.com",73],["logonews.cn",74],["spanishdict.com",75],["cloudcomputingtopics.net",76],["0123movies.ch",[76,84,88,118]],["epn.bz",77],["affbank.com",78],["gardenia.net",[79,80]],["meteoblue.com",82],["novelpia.com",[83,84]],["brainly.*",85],["blueraindrops.com",86],["animecruzers.com",87],["descargatepelis.com",88],["news.ntv.co.jp",88],["bongdaplus.vn",88],["bestjavporn.com",89],["mm9841.cc",89],["ggwash.org",[90,91]],["ask4movie.*",[92,93]],["watch.lonelil.com",93],["cinegrabber.com",94],["layarkacaxxi.icu",95],["readawrite.com",[96,97,98,99,100,101,102]],["morosedog.gitlab.io",103],["indianhealthyrecipes.com",105],["tarnkappe.info",106],["reborntrans.com",[107,108]],["secondlifetranslations.com",[107,108]],["heavyfetish.com",109],["joysound.com",[110,111,112]],["colors.sonicthehedgehog.com",[112,115]],["bluemediafile.*",113],["leakedzone.com",116],["mehoathinh2.com",117],["brutal.io",119],["powerline.io",119],["enduro-mtb.com",121],["kukaj.io",122],["animesaga.in",123],["animesuge.to",124],["aniwave.*",124],["anix.*",124],["flixrave.to",124],["hdtoday.so",124],["hurawatch.bz",124],["vidplay.*",124],["vid2faf.site",124],["lazyadmin.nl",125],["thejakartapost.com",126],["fullxh.com",127],["galleryxh.site",127],["megaxh.com",127],["movingxh.world",127],["seexh.com",127],["unlockxh4.com",127],["valuexh.life",127],["xhaccess.com",127],["xhadult2.com",127],["xhadult3.com",127],["xhadult4.com",127],["xhadult5.com",127],["xhamster.*",127],["xhamster1.*",127],["xhamster10.*",127],["xhamster11.*",127],["xhamster12.*",127],["xhamster13.*",127],["xhamster14.*",127],["xhamster15.*",127],["xhamster16.*",127],["xhamster17.*",127],["xhamster18.*",127],["xhamster19.*",127],["xhamster20.*",127],["xhamster2.*",127],["xhamster3.*",127],["xhamster4.*",127],["xhamster42.*",127],["xhamster46.com",127],["xhamster5.*",127],["xhamster7.*",127],["xhamster8.*",127],["xhamsterporno.mx",127],["xhbig.com",127],["xhbranch5.com",127],["xhchannel.com",127],["xhdate.world",127],["xhday.com",127],["xhday1.com",127],["xhlease.world",127],["xhmoon5.com",127],["xhofficial.com",127],["xhopen.com",127],["xhplanet1.com",127],["xhplanet2.com",127],["xhreal2.com",127],["xhreal3.com",127],["xhspot.com",127],["xhtotal.com",127],["xhtree.com",127],["xhvictory.com",127],["xhwebsite.com",127],["xhwebsite2.com",127],["xhwebsite5.com",127],["xhwide1.com",127],["xhwide2.com",127],["xhwide5.com",127],["marinetraffic.com",128],["ymovies.vip",129],["aniwatch.to",129],["aniwatchtv.to",129],["megacloud.tv",129],["hianime.*",129],["hianimez.to",129],["putlocker.vip",129],["rapid-cloud.co",129],["rabbitstream.net",129],["pupupul.site",129],["netu.*",129],["netuplayer.top",129],["stbnetu.xyz",129],["thotsbay.tv",129],["vipstreams.in",129],["freewatchtv.top",129],["gdplayertv.*",129],["mixstreams.top",129],["tvfreemium.top",129],["abysscdn.com",129],["grostembed.online",130],["megacloud.*",130],["premiumembeding.cloud",130],["venusembed.site",130],["animekai.to",130],["megaup.cc",130],["animenewsnetwork.com",131],["androidpolice.com",132],["makeuseof.com",132],["movieweb.com",132],["xda-developers.com",132],["thegamer.com",132],["cbr.com",132],["gamerant.com",132],["screenrant.com",132],["howtogeek.com",132],["thethings.com",132],["simpleflying.com",132],["dualshockers.com",132],["digminecraft.com",133],["arras.io",134],["arras.netlify.app",134],["arrax.io",134],["how-to-pc.info",135],["programming-link.info",135],["maxroll.gg",136],["tv.bdix.app",137],["hitokageproduction.com",138],["dngz.net",140],["vnexpress.net",141],["archon.gg",143],["einthusan.tv",144],["sussytoons.*",147],["astro-cric.pages.dev",148],["crichype.*",148],["jio.pftv.ws",148],["shz.al",148],["tnt2-cricstreaming.pages.dev",148],["wlo-cricstreamiing.pages.dev",148],["sporttotal.tv",149]]);
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
