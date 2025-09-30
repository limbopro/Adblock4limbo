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
const argsList = [["ConsoleBan.init","noopFunc"],["devtoolsDetector","{}"],["killads","true"],["PASSER_videoPAS_apres","0"],["ads_enabled","true"],["nebula.session.flags.adblock","undefined"],["_adBlockCheck","true"],["navigator.storage.estimate","undefined"],["valid_user","true"],["Drupal.behaviors.detectAdblockers","noopFunc"],["disableSelection","noopFunc"],["ADBdetected","noopFunc"],["adblock","false"],["BIA.ADBLOCKER","false"],["samDetected","true"],["adBlockFunction","trueFunc"],["checkAds","trueFunc"],["google_jobrunner","true"],["isAdblockDisabled","true"],["checkPrivacyWall","noopFunc"],["nocontext","noopFunc"],["adsAreShown","true"],["abd","false"],["detector_active","true"],["aoezone_adchecker","true"],["pageService.initDownloadProtection","noopFunc"],["detectPrivateMode","noopFunc"],["webkitRequestFileSystem","undefined"],["adsbygoogle","null"],["_sharedData.is_whitelisted_crawl_bot","true"],["ads_not_blocked","true"],["ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["hideBannerBlockedMessage","true"],["blurred","false"],["better_ads_adblock","0"],["console.debug","trueFunc"],["console.clear","trueFunc"],["adBlock","false"],["document.oncontextmenu","undefined"],["adsEnabled","true"],["better_ads_adblock","null"],["document.oncontextmenu","null"],["window.SteadyWidgetSettings.adblockActive","false"],["f12lock","false"],["document.onselectstart","null"],["console.clear","undefined"],["adBlockDetected","false"],["document.onkeyup","null"],["document.ondragstart","null"],["commonUtil.openToast","null"],["NS_TVER_EQ.checkEndEQ","trueFunc"],["mps._queue.abdetect","null"],["fuckAdBlock","trueFunc"],["abp","false"],["document.onkeydown","noopFunc"],["getSelection","undefined"],["document.onkeydown","null"],["console.clear","noopFunc"],["document.oncontextmenu","noopFunc"],["x5engine.utils.imCodeProtection","null"],["ansFrontendGlobals.settings.signupWallType","undefined"],["onload","null"],["document.documentElement.AdBlockDetection","noopFunc"],["document.ondragstart","noopFunc"],["document.onmousedown","noopFunc"],["document.onselectstart","noopFunc"],["disableselect","trueFunc"],["document.oncontextmenu",""],["document.onselectstart",""],["document.onkeydown",""],["document.onmousedown",""],["document.onclick",""],["document.body.onmouseup","null"],["document.oncopy","null"],["SD_BLOCKTHROUGH","true"],["document.onkeydown","trueFunc"],["ab","false"],["canRunAds","true"],["document.body.oncut","null"],["document.body.oncopy","null"],["console.log","noopFunc"],["document.onkeypress","null"],["mb.advertisingShouldBeEnabled","false"],["document.ondragstart","trueFunc"],["document.onselectstart","trueFunc"],["jsData.hasVideoMeteringUnlogEnabled","undefined"],["lepopup_abd_enabled",""],["Object.prototype.preroll","[]"],["document.oncontextmenu","trueFunc"],["devtoolsDetector","undefined"],["Object.prototype.bgOverlay","noopFunc"],["Object.prototype.fixedContentPos","noopFunc"],["console.dir","noopFunc"],["navigator.userAgent",""],["devtoolIsOpening","noopFunc"],["securityTool.disableRightClick","noopFunc"],["securityTool.disableF12","noopFunc"],["securityTool.disableCtrlP","noopFunc"],["securityTool.disableCtrlS","noopFunc"],["securityTool.disablePrintScreen","noopFunc"],["securityTool.disablePrintThisPage","noopFunc"],["securityTool.disableElementForPrintThisPage","noopFunc"],["checkAds","noopFunc"],["stopPrntScr","noopFunc"],["disableSelection","undefined"],["nocontext","undefined"],["disable_hot_keys","undefined"],["flashvars.autoplay",""],["document.body.oncopy","null","3"],["document.body.onselectstart","null","3"],["document.body.oncontextmenu","null","3"],["Time_Start","0"],["DD","trueFunc"],["document.oncontextmenu","null","3"],["Object.prototype._detectLoop","noopFunc"],["forbiddenList","[]"],["document.onkeypress","trueFunc"],["document.oncontextmenu","true"],["Object.prototype._detectLoop","undefined"],["SteadyWidgetSettings.adblockActive","false"],["devtoolsOpen","false"],["DisDevTool","undefined"],["admiral","noopFunc"],["document.oncopy","noopFunc"],["initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"],["mtGlobal.disabledAds","true"],["devtoolsDetector.launch","noopFunc"],["console.clear","throwFunc"],["ANN.ads.adblocked","false"],["maxUnauthenicatedArticleViews","null"],["placeAdsHandler","noopFunc"],["ramp.addUnits","noopFunc"],["pqdxwidthqt","false"],["nitroAds.loaded","true"],["jh_disabled_options_data","null"],["topMessage","noopFunc"],["document.onmousedown","null"],["forbidDebug","noopFunc"],["adblock","2"],["DisableDevtool","noopFunc"],["__NEXT_DATA__.props.pageProps.adPlacements","undefined"],["login_completed","true"],["console.table","trueFunc"],["console.log","trueFunc"],["Object.prototype.disableMenu","false"],["confirm","noopFunc"],["HTMLImageElement.prototype.onerror","undefined"]];
const hostnamesMap = new Map([["xn-----0b4asja8cbew2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e7qri.xn--1ck2e1b",0],["up4stream.com",1],["ups2up.fun",1],["9tsu.vip",1],["moviesapi.club",[1,126]],["watchx.top",1],["xclient.info",2],["bejson.com",2],["impots.gouv.fr",3],["airnavradar.com",4],["radarbox.com",4],["gearside.com",5],["nytimes.com",[6,7]],["tvtropes.org",8],["justtrucks.com.au",9],["cittadinanza.biz",10],["glistranieri.it",10],["ideapod.com",[10,20]],["privivkainfo.ru",10],["awebstories.com",[10,103]],["ancient.eu",11],["intramed.net",12],["protest.eu",13],["northwestfirearms.com",14],["techkings.org",14],["spookshow.net",15],["fosshub.com",16],["pokemonforever.com",17],["carsguide.com.au",18],["humo.be",19],["webwereld.nl",21],["palemoon.org",22],["wheel-size.com",23],["aoezone.net",24],["radioony.fm",25],["mexiconewsdaily.com",26],["technologyreview.com",27],["bdcraft.net",28],["instagram.com",29],["wired.co.uk",30],["gq-magazine.co.uk",30],["glamourmagazine.co.uk",30],["m.youtube.com",31],["music.youtube.com",31],["tv.youtube.com",31],["www.youtube.com",31],["youtubekids.com",31],["buienradar.nl",32],["clk.ink",33],["earnload.*",33],["windows101tricks.com",34],["hindipix.*",[35,36]],["vidsrc.*",[36,126,139]],["bitcine.app",[36,142,143]],["cineby.app",[36,142,143]],["moflix-stream.day",[36,142,143]],["tv.verizon.com",[36,142,143]],["fontsfree.pro",37],["oceanof-games.com",38],["strangermeetup.com",39],["adslayuda.com",40],["intergate.info",41],["alphapolis.co.jp",[41,44]],["chronologia.pl",[41,44]],["reportergazeta.pl",[41,44,48]],["odiarioonline.com.br",[41,56]],["nordkorea-info.de",41],["geotips.net",[41,61]],["noweconomy.live",41],["naaree.com",[41,56]],["cda-hd.cc",41],["hqq.to",[41,57,75]],["tv-tokyo.co.jp",41],["arti-definisi-pengertian.info",41],["studyadda.com",[41,136]],["handball-world.news",42],["mobiflip.de",42],["titanic-magazin.de",42],["mimikama.org",42],["langweiledich.net",42],["der-postillon.com",42],["perlentaucher.de",42],["lwlies.com",42],["serieslyawesome.tv",42],["critic.de",42],["mediotejo.net",42],["nahrungsmittel-intoleranz.com",42],["madeinbocholt.de",42],["goodnews-magazin.de",42],["wallauonline.de",42],["cleanthinking.de",42],["avdelphi.com",43],["doods.*",45],["ds2play.com",45],["ds2video.com",45],["d0o0d.com",45],["vidembed.me",45],["mzzcloud.life",45],["videobot.stream",45],["videovard.*",45],["justswallows.net",45],["onscreensvideo.com",45],["katerionews.com",45],["telenovelas-turcas.com.es",45],["kmo.to",45],["jeniusplay.com",[45,118]],["southcloud.tv",45],["d0000d.com",45],["4x4earth.com",46],["jootc.com",[47,48]],["photobank.mainichi.co.jp",49],["tbs.co.jp",50],["rottentomatoes.com",51],["sovetromantica.com",52],["longecity.org",53],["fruit01.xyz",54],["foxteller.com",54],["lyricstranslate.com",55],["hardcoregames.ca",56],["allsmo.com",56],["themosvagas.com.br",56],["urbharat.xyz",56],["sportnews.to",[56,81]],["123movies.*",57],["miraculous.to",[57,80]],["webnovel.com",57],["pepperlive.info",57],["unbiasedsenseevent.com",57],["maxt.church",57],["cool-etv.net",57],["vgembed.com",[57,112]],["photopea.com",57],["szkolawohyn.pl",58],["torrentlawyer.com",[58,63,64,65]],["virpe.cc",58],["gmarket.co.kr",[58,64]],["paesifantasma.it",59],["talpo.it",59],["quora.com",60],["gmx.net",62],["hoca4u.com",64],["youmath.it",66],["renditepassive.net",[67,68,69,70,71]],["360doc.com",72],["logonews.cn",73],["spanishdict.com",74],["cloudcomputingtopics.net",75],["0123movies.ch",[75,84,88,116]],["epn.bz",76],["affbank.com",77],["gardenia.net",[78,79]],["meteoblue.com",82],["novelpia.com",[83,84]],["brainly.*",85],["blueraindrops.com",86],["animecruzers.com",87],["descargatepelis.com",88],["news.ntv.co.jp",88],["bongdaplus.vn",88],["bestjavporn.com",89],["mm9841.cc",89],["ggwash.org",[90,91]],["ask4movie.*",[92,93]],["watch.lonelil.com",93],["cinegrabber.com",94],["readawrite.com",[95,96,97,98,99,100,101]],["morosedog.gitlab.io",102],["indianhealthyrecipes.com",104],["thailandopen.org",[105,106]],["theaircurrent.com",[105,106]],["freereadnovel.online",[105,106]],["reborntrans.com",[105,106]],["secondlifetranslations.com",[105,106]],["koltry.life",[105,106]],["kolnovel.com",[105,106]],["heavyfetish.com",107],["joysound.com",[108,109,110]],["colors.sonicthehedgehog.com",[110,113]],["bluemediafile.*",111],["leakedzone.com",114],["mehoathinh2.com",115],["brutal.io",117],["powerline.io",117],["enduro-mtb.com",119],["kukaj.io",120],["aniwave.*",121],["anix.*",121],["flixrave.to",121],["hdtoday.so",121],["vidplay.*",121],["vid2faf.site",121],["lazyadmin.nl",122],["thejakartapost.com",123],["colourxh.site",124],["fullxh.com",124],["galleryxh.site",124],["megaxh.com",124],["movingxh.world",124],["seexh.com",124],["unlockxh4.com",124],["valuexh.life",124],["xhaccess.com",124],["xhadult4.com",124],["xhamster.*",124],["xhamster1.*",124],["xhamster10.*",124],["xhamster11.*",124],["xhamster12.*",124],["xhamster13.*",124],["xhamster14.*",124],["xhamster15.*",124],["xhamster16.*",124],["xhamster17.*",124],["xhamster18.*",124],["xhamster19.*",124],["xhamster20.*",124],["xhamster2.*",124],["xhamster3.*",124],["xhamster4.*",124],["xhamster42.*",124],["xhamster46.com",124],["xhamster5.*",124],["xhamster7.*",124],["xhamster8.*",124],["xhbig.com",124],["xhbranch5.com",124],["xhchannel.com",124],["xhdate.world",124],["xhmoon5.com",124],["xhofficial.com",124],["xhopen.com",124],["xhplanet1.com",124],["xhplanet2.com",124],["xhreal2.com",124],["xhspot.com",124],["xhtotal.com",124],["xhvictory.com",124],["xhwebsite5.com",124],["xhwide5.com",124],["marinetraffic.com",125],["ymovies.vip",126],["aniwatch.to",126],["aniwatchtv.to",126],["megacloud.tv",126],["hianime.*",126],["hianimez.to",126],["putlocker.vip",126],["rapid-cloud.co",126],["rabbitstream.net",126],["pupupul.site",126],["netu.*",126],["netuplayer.top",126],["stbnetu.xyz",126],["thotsbay.tv",126],["vipstreams.in",126],["freewatchtv.top",126],["gdplayertv.*",126],["mixstreams.top",126],["tvfreemium.top",126],["abysscdn.com",126],["grostembed.online",127],["premiumembeding.cloud",127],["venusembed.site",127],["animekai.*",127],["anigo.to",127],["megaup.cc",127],["megaup.live",127],["megaup.site",127],["rapidshare.cc",127],["sflix.fi",127],["yflix.to",127],["animenewsnetwork.com",128],["androidpolice.com",129],["makeuseof.com",129],["movieweb.com",129],["xda-developers.com",129],["thegamer.com",129],["cbr.com",129],["gamerant.com",129],["screenrant.com",129],["howtogeek.com",129],["thethings.com",129],["simpleflying.com",129],["dualshockers.com",129],["digminecraft.com",130],["arras.io",131],["arras.netlify.app",131],["arrax.io",131],["how-to-pc.info",132],["programming-link.info",132],["maxroll.gg",133],["tv.bdix.app",134],["hitokageproduction.com",135],["dngz.net",137],["vnexpress.net",138],["archon.gg",140],["einthusan.tv",141],["sussytoons.*",144],["astro-cric.pages.dev",145],["crichype.*",145],["jio.pftv.ws",145],["shz.al",145],["tnt2-cricstreaming.pages.dev",145],["wlo-cricstreamiing.pages.dev",145],["sporttotal.tv",146]]);
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
