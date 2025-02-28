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

/* eslint-disable indent */

// ruleset: rus-0

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_setConstant = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["ADV_DISABLED","true"],["Clicks._test_meta_referer","null"],["Element.prototype.attachShadow","noopFunc"],["Object.prototype.AdvObject","noopFunc"],["Object.prototype.AdvertisementManager","undefined"],["Object.prototype.DirectProduct","undefined"],["Object.prototype.IS_CHECK_REGISTRATION","false"],["Object.prototype.MediaReady","noopFunc"],["Object.prototype.PLAYED","null"],["Object.prototype._currentAgeRestriction","null"],["Object.prototype.adblockSettings","undefined"],["Object.prototype.advert","null"],["Object.prototype.advert","undefined"],["Object.prototype.advertObject","null"],["Object.prototype.afg","true"],["Object.prototype.amp","noopFunc"],["Object.prototype.autoPlay","false"],["Object.prototype.autoPlay","null"],["Object.prototype.autoPopups","undefined"],["Object.prototype.autoplay","false"],["Object.prototype.autoplay","null"],["Object.prototype.autostart","noopFunc"],["Object.prototype.branding","undefined"],["Object.prototype.changeVisible","noopFunc"],["Object.prototype.createBannerItem","null"],["Object.prototype.detect","noopFunc"],["Object.prototype.detectAdblock","noopFunc"],["Object.prototype.detectBlockAds","noopFunc"],["Object.prototype.disableAutoplay","true"],["Object.prototype.disablePaste","false"],["Object.prototype.disableSeek","noopFunc"],["Object.prototype.disableSelection","noopFunc"],["Object.prototype.getAutoplay","noopFunc"],["Object.prototype.getUaasConfig","undefined"],["Object.prototype.initialAutoplay","null"],["Object.prototype.livetv-state","true"],["Object.prototype.manualAutoplay_","null"],["Object.prototype.minPlayingVisibleHeight","noopFunc"],["Object.prototype.onIntersected","noopFunc"],["Object.prototype.openstatCb","undefined"],["Object.prototype.partnerId","{}"],["Object.prototype.playVideo","noopFunc"],["Object.prototype.utm","false"],["Object.prototype.utm_campaign","false"],["Object.prototype.utm_medium","false"],["Object.prototype.utm_source","false"],["Object.prototype.utm_space","false"],["Object.prototype.utm_term","false"],["PageBottomBanners","undefined"],["String.fromCharCode","trueFunc"],["Unauthorized2","undefined"],["adBlock","false"],["adsenseIsLoaded","true"],["app.book.external","null"],["cadb","false"],["clicks","2"],["frames.innerWidth","{}"],["g_GazetaNoExchange","true"],["isAdFree","noopFunc"],["localStorage.localstorageGameData",""],["main_air_closed","true"],["noAdsAtAll","{}"],["pl.getParams.isPlay","null"],["player.options.scroll","false"],["playerOptions.behaviour.autoPlay","false"],["player_options.autoplay","false"],["timeEnd","1"],["top100Counter","false"],["window.EUMP.plugins.antiblock","noopFunc"],["window.ab","false"],["Object.prototype.preroll","undefined"],["biads.initCli","undefined"],["Object.prototype.adUsageStorageVars","undefined"],["flashvars.protect_block",""],["NO_ADV","1"],["Object.prototype._Mimic","undefined"],["Object.prototype.autoPlayParams","false"],["Object.prototype.detectAdBlock","undefined"],["Object.prototype.enableMimic","noopFunc"],["Object.prototype.mimic","undefined"],["Object.prototype.obfuscateParams","undefined"],["Object.prototype.runMimic","noopFunc"],["Object.prototype.useMimic","noopFunc"],["__PHS._.props.html","{}"],["document.title","null"],["mr._mimic.locator.transform","undefined"],["Object.prototype.hasAdBlock","null"],["Object.prototype.AdvertisingManager","noopFunc"],["Object.prototype.autoplay","noopFunc"],["Object.prototype.hasAdBlock","false"]];

const hostnamesMap = new Map([["peers.tv",0],["www.ukr.net",1],["vk.com",[2,48,50,61]],["vk.ru",[2,48,50,61]],["ivi.ru",[3,13]],["ictv.ua",4],["inter.ua",4],["k1.ua",4],["novy.tv",4],["ntn.ua",4],["starlight.digital",4],["stb.ua",4],["teleportal.ua",4],["dzen.ru",[5,32,33,40]],["player.vgtrk.com",6],["tv-gubernia.ru",[7,60]],["xsport.ua",8],["1tv.ru",[9,30,68]],["api-video.khl.ru",10],["razlozhi.ru",[11,54]],["ren.tv",12],["rutube.ru",12],["igroutka.ru",14],["kinonews.ru",15],["cdnvideo.ru",16],["eda.ru",16],["mania.gcdn.co",16],["tass.ru",[16,56]],["vp.rambler.ru",[16,37]],["www.rambler.ru",16],["afisha.ru",17],["partnerkin.com",18],["frontend.vh.yandex.ru",[19,32,34,40]],["eagleplatform.com",[20,63]],["embed.dugout.com",21],["sports.ru",22],["dni.expert",23],["dni.ru",23],["kp.kg",23],["kp.kz",23],["kp.md",23],["kp.ru",23],["ladys.media",23],["lifehacker.ru",23],["mk.ru",23],["ohotniki.ru",23],["portalvirtualreality.ru",23],["radiokp.ru",23],["sportkp.ru",23],["wday.ru",23],["woman.ru",23],["womanhit.ru",23],["ati.su",24],["24smi.org",25],["examenpdd.com",26],["retail.ru",27],["embed.twitch.tv",28],["player.twitch.tv",28],["www.mos.ru",29],["kinokong.sk",31],["shedevrum.ai",33],["rbc.ru",35],["sportrbc.ru",35],["tenews.org.ua",36],["rg.ru",[38,39]],["naydex.net",40],["widgets.kinopoisk.ru",40],["www.kinopoisk.ru",40],["yastatic.net",40],["3dnews.kz",41],["3dnews.ru",41],["vm.ru",41],["forbes.ru",[42,43,44,45,46,47]],["free-tor.info",49],["korsars.info",49],["hentai-share.one",51],["in-poland.com",52],["gdz-putina.fun",53],["gdz.ninja",53],["gdz.ru",53],["gdzotputina.club",53],["gdzputina.net",53],["megaresheba.com",53],["megaresheba.ru",53],["resheba.me",53],["spishi.fun",53],["zoobrilka.net",53],["audioportal.su",55],["gazeta.ru",[57,58]],["playground.ru",59],["player.smotrim.ru",62],["kinescope.io",64],["m24.ru",65],["softportal.com",66],["rambler.ru",67],["remont-aud.net",69],["fanserialstv.net",70],["music.yandex.ru",72],["okminigames.mail.ru",74],["otvet.mail.ru",75],["player-smotri.mail.ru",76],["ok.ru",[77,80]],["finance.mail.ru",78],["news.mail.ru",[78,83]],["sportmail.ru",78],["vfokuse.mail.ru",78],["mail.ru",[79,84,85]],["my.mail.ru",81],["pogoda.mail.ru",82],["e.mail.ru",[86,89]],["octavius.mail.ru",86],["mail.ukr.net",87],["116.ru",88],["14.ru",88],["161.ru",88],["164.ru",88],["173.ru",88],["178.ru",88],["26.ru",88],["29.ru",88],["35.ru",88],["43.ru",88],["45.ru",88],["48.ru",88],["51.ru",88],["53.ru",88],["56.ru",88],["59.ru",88],["60.ru",88],["63.ru",88],["68.ru",88],["71.ru",88],["72.ru",88],["74.ru",88],["76.ru",88],["86.ru",88],["89.ru",88],["93.ru",88],["chita.ru",88],["e1.ru",88],["ircity.ru",88],["izh1.ru",88],["mgorsk.ru",88],["msk1.ru",88],["ngs.ru",88],["ngs22.ru",88],["ngs24.ru",88],["ngs42.ru",88],["ngs55.ru",88],["ngs70.ru",88],["nn.ru",88],["sochi1.ru",88],["sterlitamak1.ru",88],["tolyatty.ru",88],["ufa1.ru",88],["v1.ru",88],["vladivostok1.ru",88],["voronezh1.ru",88],["www.fontanka.ru",88],["ya62.ru",88]]);

const entitiesMap = new Map([["fanserial",70],["hdrezka",70],["rezka",70],["mult-porno",71],["sex-studentki",71],["cosplay-porn",71],["music.yandex",72],["smaxim",73]]);

const exceptionsMap = new Map([["spec.tass.ru",[56]],["calls.mail.ru",[79,84,85]],["e.mail.ru",[79,84,85]],["finance.mail.ru",[79,84,85]],["my.mail.ru",[79,84,85]],["news.mail.ru",[79,84,85]],["o2.mail.ru",[79,84,85]],["octavius.mail.ru",[79,84,85]],["sportmail.ru",[79]],["touch.mail.ru",[79,84,85]],["vfokuse.mail.ru",[79,84,85]],["3igames.mail.ru",[84,85]],["account.mail.ru",[84,85]],["auto.mail.ru",[84,85]],["biz.mail.ru",[84,85]],["bonus.mail.ru",[84,85]],["calendar.mail.ru",[84,85]],["cloud.mail.ru",[84,85]],["connect.mail.ru",[84,85]],["deti.mail.ru",[84,85]],["dobro.mail.ru",[84,85]],["gibdd.mail.ru",[84,85]],["health.mail.ru",[84,85]],["help.mail.ru",[84,85]],["hi-tech.mail.ru",[84,85]],["horo.mail.ru",[84,85]],["kino.mail.ru",[84,85]],["lady.mail.ru",[84,85]],["love.mail.ru",[84,85]],["mcs.mail.ru",[84,85]],["minigames.mail.ru",[84,85]],["okminigames.mail.ru",[84,85]],["otvet.mail.ru",[84,85]],["pets.mail.ru",[84,85]],["player-smotri.mail.ru",[84,85]],["pogoda.mail.ru",[84,85]],["top.mail.ru",[84,85]],["tv.mail.ru",[84,85]],["widgets.mail.ru",[84,85]],["blog.mail.ru",[85]]]);

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
            if ( targets.hasOwnProperty(prop) === false ) { continue; }
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
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
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

const hnParts = [];
try {
    let origin = document.location.origin;
    if ( origin === 'null' ) {
        const origins = document.location.ancestorOrigins;
        for ( let i = 0; i < origins.length; i++ ) {
            origin = origins[i];
            if ( origin !== 'null' ) { break; }
        }
    }
    const pos = origin.lastIndexOf('://');
    if ( pos === -1 ) { return; }
    hnParts.push(...origin.slice(pos+3).split('.'));
} catch {
}
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { setConstant(...argsList[i]); }
    catch { }
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_setConstant();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
