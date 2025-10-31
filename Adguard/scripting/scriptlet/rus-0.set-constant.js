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
const argsList = [["ADV_DISABLED","true"],["Clicks._test_meta_referer","null"],["Object.prototype.AdChoices","undefined"],["Object.prototype.AdvObject","noopFunc"],["Object.prototype.AdvertisementManager","undefined"],["Object.prototype.IS_CHECK_REGISTRATION","false"],["Object.prototype.MediaReady","noopFunc"],["Object.prototype.PLAYED","null"],["Object.prototype._currentAgeRestriction","null"],["Object.prototype.adblockSettings","undefined"],["Object.prototype.advert","null"],["Object.prototype.advert","undefined"],["Object.prototype.advertObject","null"],["Object.prototype.afg","true"],["Object.prototype.amp","noopFunc"],["Object.prototype.autoPlay","false"],["Object.prototype.autoPlay","null"],["Object.prototype.autoPopups","undefined"],["Object.prototype.autoplay","false"],["Object.prototype.autoplay","null"],["Object.prototype.autostart","noopFunc"],["Object.prototype.branding","undefined"],["Object.prototype.changeVisible","noopFunc"],["Object.prototype.createBannerItem","null"],["Object.prototype.detect","noopFunc"],["Object.prototype.detectAdblock","noopFunc"],["Object.prototype.detectAdblock","undefined"],["Object.prototype.detectBlockAds","noopFunc"],["Object.prototype.disableAutoplay","true"],["Object.prototype.disablePaste","false"],["Object.prototype.disableSeek","noopFunc"],["Object.prototype.disableSelection","noopFunc"],["Object.prototype.getAutoplay","noopFunc"],["Object.prototype.getPlacement","undefined"],["Object.prototype.getUaasConfig","undefined"],["Object.prototype.initYaVersion","undefined"],["Object.prototype.initialAutoplay","null"],["Object.prototype.isCustomBannerType","undefined"],["Object.prototype.livetv-state","true"],["Object.prototype.manualAutoplay_","null"],["Object.prototype.minPlayingVisibleHeight","noopFunc"],["Object.prototype.partnerId","{}"],["Object.prototype.playVideo","noopFunc"],["PageBottomBanners","undefined"],["String.fromCharCode","trueFunc"],["Unauthorized2","undefined"],["adBlock","false"],["adsenseIsLoaded","true"],["app.book.external","null"],["cadb","false"],["clicks","2"],["countdownNum","0"],["g_GazetaNoExchange","true"],["history.replaceState","noopFunc"],["isAdFree","noopFunc"],["localStorage.localstorageGameData",""],["main_air_closed","true"],["navigator.sendBeacon","noopFunc"],["noAdsAtAll","{}"],["pl.getParams.isPlay","null"],["player.options.scroll","false"],["playerOptions.behaviour.autoPlay","false"],["player_options.autoplay","false"],["portal.isRedirectToYandexSearchAfterDownloadEnabled","false"],["timeEnd","1"],["top100Counter","false"],["window.EUMP.plugins.antiblock","noopFunc"],["window.ab","false"],["window.c","4"],["Object.prototype.preroll","undefined"],["flashvars.protect_block",""],["NO_ADV","1"],["Object.prototype.autoPlayParams","false"],["Object.prototype.detectAdBlock","undefined"],["Object.prototype.enableMimic","noopFunc"],["Object.prototype.mimic","undefined"],["Object.prototype.obfuscateParams","undefined"],["Object.prototype.runMimic","noopFunc"],["Object.prototype.useMimic","noopFunc"],["__PHS._.props.html","{}"],["document.title","null"],["mr._mimic.locator.transform","undefined"],["Object.prototype.hasAdBlock","null"],["HTMLVideoElement.prototype.play","{}"],["Object.prototype.autoPlay","{}"],["Object.prototype.AdvertisingManager","noopFunc"],["Object.prototype.autoplay","noopFunc"],["Object.prototype.hasAdBlock","false"]];
const hostnamesMap = new Map([["peers.tv",0],["www.ukr.net",1],["vk.com",[2,43,45,58]],["vk.ru",[2,43,45,58]],["ivi.ru",[3,12]],["ictv.ua",4],["inter.ua",4],["k1.ua",4],["novy.tv",4],["ntn.ua",4],["starlight.digital",4],["stb.ua",4],["teleportal.ua",4],["player.vgtrk.com",5],["tv-gubernia.ru",[6,56]],["xsport.ua",7],["1tv.ru",[8,30,66]],["api-video.khl.ru",9],["razlozhi.ru",[10,49]],["ren.tv",11],["rutube.ru",11],["igroutka.ru",13],["kinonews.ru",14],["cdnvideo.ru",15],["eda.ru",15],["mania.gcdn.co",15],["vp.rambler.ru",[15,40]],["www.rambler.ru",15],["afisha.ru",16],["partnerkin.com",17],["frontend.vh.yandex.ru",[18,32,36,41]],["eagleplatform.com",[19,60]],["embed.dugout.com",20],["sports.ru",21],["dni.expert",22],["dni.ru",22],["kp.kg",22],["kp.kz",22],["kp.md",22],["kp.ru",22],["ladys.media",22],["lifehacker.ru",22],["mk.ru",22],["ohotniki.ru",22],["portalvirtualreality.ru",22],["radiokp.ru",22],["russian.rt.com",22],["sportkp.ru",22],["stopgame.ru",22],["the-day.ru",22],["woman.ru",22],["womanhit.ru",22],["ati.su",23],["24smi.org",24],["examenpdd.com",25],["dtf.ru",26],["retail.ru",27],["embed.twitch.tv",28],["player.twitch.tv",28],["www.mos.ru",29],["kinokong.sk",31],["dzen.ru",[32,33,35,37,41]],["shedevrum.ai",34],["rbc.ru",38],["sportrbc.ru",38],["tenews.org.ua",39],["naydex.net",41],["widgets.kinopoisk.ru",41],["www.kinopoisk.ru",41],["yastatic.net",41],["3dnews.ru",42],["vm.ru",42],["free-tor.info",44],["korsars.info",44],["hentai-share.one",46],["in-poland.com",47],["gdz-putina.fun",48],["gdz.ninja",48],["gdz.ru",48],["gdzotputina.club",48],["gdzputina.net",48],["megaresheba.com",48],["megaresheba.ru",48],["resheba.me",48],["spishi.fun",48],["zoobrilka.net",48],["audioportal.su",50],["pb.wtf",51],["pirat.one",51],["piratbit.fun",51],["piratbit.org",51],["piratbit.top",51],["gazeta.ru",[52,53,54]],["playground.ru",55],["116.ru",[57,86]],["14.ru",[57,86]],["161.ru",[57,86]],["164.ru",[57,86]],["173.ru",[57,86]],["178.ru",[57,86]],["26.ru",[57,86]],["29.ru",[57,86]],["35.ru",[57,86]],["43.ru",[57,86]],["45.ru",[57,86]],["48.ru",[57,86]],["51.ru",[57,86]],["53.ru",[57,86]],["56.ru",[57,86]],["59.ru",[57,86]],["60.ru",[57,86]],["63.ru",[57,86]],["68.ru",[57,86]],["71.ru",[57,86]],["72.ru",[57,86]],["74.ru",[57,86]],["76.ru",[57,86]],["86.ru",[57,86]],["89.ru",[57,86]],["93.ru",[57,86]],["chita.ru",[57,86]],["e1.ru",[57,86]],["ircity.ru",[57,86]],["izh1.ru",[57,86]],["mgorsk.ru",[57,86]],["msk1.ru",[57,86]],["ngs.ru",[57,86]],["ngs22.ru",[57,86]],["ngs24.ru",[57,86]],["ngs42.ru",[57,86]],["ngs55.ru",[57,86]],["ngs70.ru",[57,86]],["nn.ru",[57,86]],["sochi1.ru",[57,86]],["sterlitamak1.ru",[57,86]],["tolyatty.ru",[57,86]],["ufa1.ru",[57,86]],["v1.ru",[57,86]],["vladivostok1.ru",[57,86]],["voronezh1.ru",[57,86]],["www.fontanka.ru",[57,86]],["ya62.ru",[57,86]],["player.smotrim.ru",59],["kinescope.io",61],["m24.ru",62],["megaprogz.ru",63],["programhub.ru",63],["softportal.com",64],["rambler.ru",65],["remont-aud.net",67],["wdho.ru",68],["fanserial.*",69],["fanserialstv.net",69],["hdrezka.*",69],["rezka.*",69],["smaxim.*",70],["okminigames.mail.ru",71],["player-smotri.mail.ru",72],["ok.ru",[73,76]],["finance.mail.ru",74],["news.mail.ru",[74,79]],["sportmail.ru",74],["vfokuse.mail.ru",74],["mail.ru",[75,80,81]],["my.mail.ru",77],["pogoda.mail.ru",78],["e.mail.ru",[82,87]],["octavius.mail.ru",82],["embed.rg.ru",83],["tass.ru",84],["mail.ukr.net",85]]);
const exceptionsMap = new Map([["calls.mail.ru",[75,80,81]],["e.mail.ru",[75,80,81]],["finance.mail.ru",[75,80,81]],["my.mail.ru",[75,80,81]],["news.mail.ru",[75,80,81]],["o2.mail.ru",[75,80,81]],["octavius.mail.ru",[75,80,81]],["sportmail.ru",[75]],["touch.mail.ru",[75,80,81]],["vfokuse.mail.ru",[75,80,81]],["3igames.mail.ru",[80,81]],["account.mail.ru",[80,81]],["auto.mail.ru",[80,81]],["biz.mail.ru",[80,81]],["bonus.mail.ru",[80,81]],["calendar.mail.ru",[80,81]],["cloud.mail.ru",[80,81]],["connect.mail.ru",[80,81]],["deti.mail.ru",[80,81]],["dobro.mail.ru",[80,81]],["gibdd.mail.ru",[80,81]],["health.mail.ru",[80,81]],["help.mail.ru",[80,81]],["hi-tech.mail.ru",[80,81]],["horo.mail.ru",[80,81]],["kino.mail.ru",[80,81]],["lady.mail.ru",[80,81]],["love.mail.ru",[80,81]],["mcs.mail.ru",[80,81]],["minigames.mail.ru",[80,81]],["okminigames.mail.ru",[80,81]],["otvet.mail.ru",[80,81]],["pets.mail.ru",[80,81]],["player-smotri.mail.ru",[80,81]],["pogoda.mail.ru",[80,81]],["top.mail.ru",[80,81]],["tv.mail.ru",[80,81]],["widgets.mail.ru",[80,81]],["blog.mail.ru",[81]]]);
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
