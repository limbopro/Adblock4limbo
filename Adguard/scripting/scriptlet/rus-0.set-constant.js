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

// ruleset: rus-0

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
const argsList = [["ADV_DISABLED","true"],["Clicks._test_meta_referer","null"],["HTMLVideoElement.prototype.play","{}"],["Object.prototype.AdvObject","noopFunc"],["Object.prototype.AdvertisementManager","undefined"],["Object.prototype.IS_CHECK_REGISTRATION","false"],["Object.prototype.MediaReady","noopFunc"],["Object.prototype.PLAYED","null"],["Object.prototype._currentAgeRestriction","null"],["Object.prototype.adblockSettings","undefined"],["Object.prototype.advert","null"],["Object.prototype.advert","undefined"],["Object.prototype.advertObject","null"],["Object.prototype.afg","true"],["Object.prototype.amp","noopFunc"],["Object.prototype.autoPlay","false"],["Object.prototype.autoPlay","null"],["Object.prototype.autoPopups","undefined"],["Object.prototype.autoplay","false"],["Object.prototype.autoplay","null"],["Object.prototype.autostart","noopFunc"],["Object.prototype.branding","undefined"],["Object.prototype.changeVisible","noopFunc"],["Object.prototype.createBannerItem","null"],["Object.prototype.detect","noopFunc"],["Object.prototype.detectAdblock","noopFunc"],["Object.prototype.detectAdblock","undefined"],["Object.prototype.detectBlockAds","noopFunc"],["Object.prototype.disableAutoplay","true"],["Object.prototype.disablePaste","false"],["Object.prototype.disableSeek","noopFunc"],["Object.prototype.disableSelection","noopFunc"],["Object.prototype.erid","false"],["Object.prototype.getAutoplay","noopFunc"],["Object.prototype.getPlacement","undefined"],["Object.prototype.getUaasConfig","undefined"],["Object.prototype.initialAutoplay","null"],["Object.prototype.isCustomBannerType","undefined"],["Object.prototype.isTurboPage","undefined"],["Object.prototype.livetv-state","true"],["Object.prototype.manualAutoplay_","null"],["Object.prototype.minPlayingVisibleHeight","noopFunc"],["Object.prototype.partnerId","{}"],["Object.prototype.playVideo","noopFunc"],["Object.prototype.utm","false"],["Object.prototype.utm_campaign","false"],["Object.prototype.utm_medium","false"],["Object.prototype.utm_source","false"],["Object.prototype.utm_space","false"],["Object.prototype.utm_term","false"],["PageBottomBanners","undefined"],["String.fromCharCode","trueFunc"],["Unauthorized2","undefined"],["adBlock","false"],["adsenseIsLoaded","true"],["app.book.external","null"],["cadb","false"],["clicks","2"],["countdownNum","0"],["frames.innerWidth","{}"],["g_GazetaNoExchange","true"],["history.replaceState","noopFunc"],["isAdFree","noopFunc"],["localStorage.localstorageGameData",""],["main_air_closed","true"],["navigator.sendBeacon","noopFunc"],["noAdsAtAll","{}"],["pl.getParams.isPlay","null"],["player.options.scroll","false"],["playerOptions.behaviour.autoPlay","false"],["player_options.autoplay","false"],["portal.isRedirectToYandexSearchAfterDownloadEnabled","false"],["timeEnd","1"],["top100Counter","false"],["window.EUMP.plugins.antiblock","noopFunc"],["window.ab","false"],["window.c","4"],["Object.prototype.preroll","undefined"],["flashvars.protect_block",""],["NO_ADV","1"],["Object.prototype.autoPlayParams","false"],["Object.prototype.detectAdBlock","undefined"],["Object.prototype.enableMimic","noopFunc"],["Object.prototype.mimic","undefined"],["Object.prototype.obfuscateParams","undefined"],["Object.prototype.runMimic","noopFunc"],["Object.prototype.useMimic","noopFunc"],["__PHS._.props.html","{}"],["document.title","null"],["mr._mimic.locator.transform","undefined"],["Object.prototype.hasAdBlock","null"],["Object.prototype.AdvertisingManager","noopFunc"],["Object.prototype.autoplay","noopFunc"],["Object.prototype.hasAdBlock","false"]];
const hostnamesMap = new Map([["peers.tv",0],["www.ukr.net",1],["dtf.ru",[2,26]],["vc.ru",2],["ivi.ru",[3,12]],["ictv.ua",4],["inter.ua",4],["k1.ua",4],["novy.tv",4],["ntn.ua",4],["starlight.digital",4],["stb.ua",4],["teleportal.ua",4],["player.vgtrk.com",5],["tv-gubernia.ru",[6,64]],["xsport.ua",7],["1tv.ru",[8,30,74]],["api-video.khl.ru",9],["razlozhi.ru",[10,56]],["ren.tv",11],["rutube.ru",11],["igroutka.ru",13],["kinonews.ru",14],["cdnvideo.ru",15],["eda.ru",15],["mania.gcdn.co",15],["tass.ru",[15,59]],["vp.rambler.ru",[15,41]],["www.rambler.ru",15],["afisha.ru",16],["partnerkin.com",17],["frontend.vh.yandex.ru",[18,33,36,42]],["eagleplatform.com",[19,68]],["embed.dugout.com",20],["sports.ru",21],["dni.expert",22],["dni.ru",22],["kp.kg",22],["kp.kz",22],["kp.md",22],["kp.ru",22],["ladys.media",22],["lifehacker.ru",22],["mk.ru",22],["ohotniki.ru",22],["portalvirtualreality.ru",22],["radiokp.ru",22],["russian.rt.com",22],["sportkp.ru",22],["the-day.ru",22],["woman.ru",22],["womanhit.ru",22],["ati.su",23],["24smi.org",24],["examenpdd.com",25],["retail.ru",27],["embed.twitch.tv",28],["player.twitch.tv",28],["www.mos.ru",29],["kinokong.sk",31],["forbes.ru",[32,44,45,46,47,48,49]],["dzen.ru",[33,34,37,38,42]],["shedevrum.ai",35],["rbc.ru",39],["sportrbc.ru",39],["tenews.org.ua",40],["naydex.net",42],["widgets.kinopoisk.ru",42],["www.kinopoisk.ru",42],["yastatic.net",42],["3dnews.ru",43],["vm.ru",43],["vk.com",[50,52,66]],["vk.ru",[50,52,66]],["free-tor.info",51],["korsars.info",51],["hentai-share.one",53],["in-poland.com",54],["gdz-putina.fun",55],["gdz.ninja",55],["gdz.ru",55],["gdzotputina.club",55],["gdzputina.net",55],["megaresheba.com",55],["megaresheba.ru",55],["resheba.me",55],["spishi.fun",55],["zoobrilka.net",55],["audioportal.su",57],["pb.wtf",58],["pirat.one",58],["piratbit.fun",58],["piratbit.org",58],["piratbit.top",58],["gazeta.ru",[60,61,62]],["playground.ru",63],["116.ru",[65,92]],["14.ru",[65,92]],["161.ru",[65,92]],["164.ru",[65,92]],["173.ru",[65,92]],["178.ru",[65,92]],["26.ru",[65,92]],["29.ru",[65,92]],["35.ru",[65,92]],["43.ru",[65,92]],["45.ru",[65,92]],["48.ru",[65,92]],["51.ru",[65,92]],["53.ru",[65,92]],["56.ru",[65,92]],["59.ru",[65,92]],["60.ru",[65,92]],["63.ru",[65,92]],["68.ru",[65,92]],["71.ru",[65,92]],["72.ru",[65,92]],["74.ru",[65,92]],["76.ru",[65,92]],["86.ru",[65,92]],["89.ru",[65,92]],["93.ru",[65,92]],["chita.ru",[65,92]],["e1.ru",[65,92]],["ircity.ru",[65,92]],["izh1.ru",[65,92]],["mgorsk.ru",[65,92]],["msk1.ru",[65,92]],["ngs.ru",[65,92]],["ngs22.ru",[65,92]],["ngs24.ru",[65,92]],["ngs42.ru",[65,92]],["ngs55.ru",[65,92]],["ngs70.ru",[65,92]],["nn.ru",[65,92]],["sochi1.ru",[65,92]],["sterlitamak1.ru",[65,92]],["tolyatty.ru",[65,92]],["ufa1.ru",[65,92]],["v1.ru",[65,92]],["vladivostok1.ru",[65,92]],["voronezh1.ru",[65,92]],["www.fontanka.ru",[65,92]],["ya62.ru",[65,92]],["player.smotrim.ru",67],["kinescope.io",69],["m24.ru",70],["megaprogz.ru",71],["programhub.ru",71],["softportal.com",72],["rambler.ru",73],["remont-aud.net",75],["wdho.ru",76],["fanserial.*",77],["fanserialstv.net",77],["hdrezka.*",77],["rezka.*",77],["smaxim.*",78],["okminigames.mail.ru",79],["player-smotri.mail.ru",80],["ok.ru",[81,84]],["finance.mail.ru",82],["news.mail.ru",[82,87]],["sportmail.ru",82],["vfokuse.mail.ru",82],["mail.ru",[83,88,89]],["my.mail.ru",85],["pogoda.mail.ru",86],["e.mail.ru",[90,93]],["octavius.mail.ru",90],["mail.ukr.net",91]]);
const exceptionsMap = new Map([["spec.tass.ru",[59]],["calls.mail.ru",[83,88,89]],["e.mail.ru",[83,88,89]],["finance.mail.ru",[83,88,89]],["my.mail.ru",[83,88,89]],["news.mail.ru",[83,88,89]],["o2.mail.ru",[83,88,89]],["octavius.mail.ru",[83,88,89]],["sportmail.ru",[83]],["touch.mail.ru",[83,88,89]],["vfokuse.mail.ru",[83,88,89]],["3igames.mail.ru",[88,89]],["account.mail.ru",[88,89]],["auto.mail.ru",[88,89]],["biz.mail.ru",[88,89]],["bonus.mail.ru",[88,89]],["calendar.mail.ru",[88,89]],["cloud.mail.ru",[88,89]],["connect.mail.ru",[88,89]],["deti.mail.ru",[88,89]],["dobro.mail.ru",[88,89]],["gibdd.mail.ru",[88,89]],["health.mail.ru",[88,89]],["help.mail.ru",[88,89]],["hi-tech.mail.ru",[88,89]],["horo.mail.ru",[88,89]],["kino.mail.ru",[88,89]],["lady.mail.ru",[88,89]],["love.mail.ru",[88,89]],["mcs.mail.ru",[88,89]],["minigames.mail.ru",[88,89]],["okminigames.mail.ru",[88,89]],["otvet.mail.ru",[88,89]],["pets.mail.ru",[88,89]],["player-smotri.mail.ru",[88,89]],["pogoda.mail.ru",[88,89]],["top.mail.ru",[88,89]],["tv.mail.ru",[88,89]],["widgets.mail.ru",[88,89]],["blog.mail.ru",[89]]]);
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
