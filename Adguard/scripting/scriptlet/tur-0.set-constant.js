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

// ruleset: tur-0

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
const argsList = [["adblock.check","noopFunc"],["adBlockDetected","noopFunc"],["App.detectAdBlock","noopFunc"],["canRunAds","true"],["eyeOfErstream.detectedBloke","falseFunc"],["tie.ad_blocker_disallow_images_placeholder","undefined"],["eazy_ad_unblocker_msg_var",""],["adbEnableForPage","false"],["detector_active","true"],["adblock_active","false"],["adBlockRunning","false"],["adb","false"],["maari","noopFunc"],["adBlockEnabled","false"],["kan_vars.adblock","undefined"],["hasAdblock","false"],["AdblockDetector","undefined"],["adblockCheckUrl",""],["adservice","{}"],["jQuery.adblock","false"],["koddostu_com_adblock_yok","null"],["adblock","false"],["puShown","true"],["isShow","true"],["app.ads","{}"],["wpsaData","undefined"],["AdmostClient","noopFunc"],["S_Popup","2"],["loadPlayerAds","trueFunc"],["reklamsayisi","0"],["volumeClearInterval","0"],["clicked","true"],["adSearchTitle","undefined"],["HBiddings.vastUrl",""],["initOpen","undefined"],["rg","noopFunc"],["Object.prototype.video_ads","noopFunc"],["Object.prototype.ads_enable","false"],["td_ad_background_click_link",""],["start","1"],["popup","noopFunc"],["downloadAds","noopFunc"],["window.config.adv.enabled","0"],["manset_adv_imp","noopFunc"],["popupShown","true"],["adsConfig","{}"],["PopBanner","undefined"],["config.adv","{}"],["ads","{}"],["config.advertisement.enabled","false"],["reklamsayisi","1"],["window.config.advertisement.0.enabled","0"],["reklam_1",""]];
const hostnamesMap = new Map([["teknop.net",0],["ozgunbilgi.com",0],["beceriksizler.net",0],["merlinscans.com",1],["haber3.com",2],["promy.pro",3],["iddaaorantahmin.com",3],["exxen.com",4],["tgyama.com",5],["uzaymanga.com",[6,22]],["e-kitapstore.com",7],["wheel-size.com.tr",8],["karnaval.com",9],["mangaship.net",10],["mangaship.com",10],["miuitr.info",11],["puhutv.com",[12,13]],["coinotag.com",14],["cnnturk.com",[15,16]],["kanald.com.tr",[17,18]],["oyungibi.com",19],["veterinerhekimleri.com",19],["turkdenizcileri.com",20],["bilgalem.blogspot.com",20],["klavyeanaliz.org",21],["dizikral.nl",22],["puffytr.com",22],["anizle.com",22],["anizm.net",22],["dizimore.com",22],["dizirex.com",22],["maxfilmizle.pro",22],["turkifsa.xyz",22],["fullhdfilmizlesene.*",22],["royalfilmizle.com",22],["sinetiktok.com",22],["onlinedizi.xyz",22],["filmzirvesi.to",22],["filmifullizle.online",22],["sinemakolik.org",22],["filmerotixxx.com",22],["filmfc.com",22],["filmizletv18.com",[22,52]],["onlinefilmizle.site",22],["playerzz.xyz",22],["filmjr.org",22],["asfilmizle.com",22],["filmhe.com",22],["tranimaci.*",22],["hdsinemax.com",22],["hdfilmizle.org",22],["siyahfilmizle.*",22],["tafdi4.com",22],["elzemfilm.org",22],["tafdi3.com",22],["hdfilmizle.in",22],["dizicaps.*",22],["filmizletv1.*",22],["diziyou.co",22],["fullhdfilmizle.*",[22,29,50]],["fullfilmizle.*",[22,50]],["sinepal.*",22],["dizimag.eu",22],["bumfilmizle1.com",22],["yabancidizilertv.*",22],["1080hdfilmizle.com",22],["hdfilmcehennemi.*",[22,50]],["yabancidizibax.com",22],["sinemangoo.org",22],["sexfilmleriizle.com",22],["fullhdfilm.*",[22,29]],["geziforumu.com",22],["efendim.xyz",22],["dizipaltv.net",22],["fluffcore.com",22],["hdfilmcehennemizle.com",22],["netfullfilmizle3.com",22],["filmmodu.info",22],["izlekolik.*",22],["arrowizle.com",22],["filmcus.com",22],["sinemakolik.net",22],["sinefilmizlesen.com",22],["zarize.com",22],["burdenfly.com",22],["zzerotik.com",22],["filmgo.org",22],["sinemafilmizle.net",22],["filmkuzusu1.com",22],["hdfilmcix.*",[22,50]],["sinemadelisi.com",22],["erotikfilmtube.com",22],["dizipal.*",22],["filmizletv.*",[22,50,52]],["tekparthdfilmizle.*",22],["pornoanne.com",22],["dizikorea.*",22],["diziyo.*",22],["diziboxx.com",22],["dafflix.*",22],["turkaliz.com",22],["vkfilmizle.net",22],["dizimov.*",22],["bumfilmizle.com",22],["shirl.club",22],["turkcealtyazilipornom.com",22],["fullhdfilmmodu2.*",22],["hdfilmizletv.net",22],["pembetv18.*",22],["sinemaizle.co",22],["hdfilmcehennem.live",22],["efullizle.com",22],["asyafanatiklerim.com",22],["dizilost.com",22],["fullhdfilmdeposu.com",22],["tranimeizle.*",22],["volsex.com",22],["divx720pfilmizle.org",22],["justintvgiris.blogspot.com",22],["sportboss-macizlesbs.blogspot.com",22],["taraftarium402.blogspot.com",22],["macicanliizle.sbs",22],["taraftarium24canli-macizlesene.blogspot.com",22],["taraftarium24hdgiris1.blogspot.com",22],["selcukspor-taraftarium24canliizle1.blogspot.com",22],["taraftariumxx.cfd",22],["inattvhd188.xyz",22],["inattvhd189.xyz",22],["inattvhd190.xyz",22],["inattvhd191.xyz",22],["inattvhd192.xyz",22],["inattvhd193.xyz",22],["inattvhd194.xyz",22],["inattvhd195.xyz",22],["inattvhd196.xyz",22],["inattvhd197.xyz",22],["inattvhd198.xyz",22],["inattvhd199.xyz",22],["inattvhd200.xyz",22],["inattvhd201.xyz",22],["inattvhd202.xyz",22],["inattvhd203.xyz",22],["inattvhd204.xyz",22],["inattvhd205.xyz",22],["inattvhd206.xyz",22],["inattvhd207.xyz",22],["inattvhd208.xyz",22],["inattvhd209.xyz",22],["inattvhd210.xyz",22],["inattvhd211.xyz",22],["inattvhd212.xyz",22],["inattvhd213.xyz",22],["inattvhd214.xyz",22],["inattvhd215.xyz",22],["inattvhd216.xyz",22],["inattvhd217.xyz",22],["inattvhd218.xyz",22],["inattvhd219.xyz",22],["inattvhd220.xyz",22],["inattvhd221.xyz",22],["tekfullfilmizle5.com",23],["webteizle.xyz",23],["webteizle1.xyz",23],["webteizle2.xyz",23],["webteizle3.xyz",23],["webteizle4.xyz",23],["webteizle5.xyz",23],["webteizle6.xyz",23],["webteizle7.xyz",23],["webteizle8.xyz",23],["webteizle9.xyz",23],["webteizle10.xyz",23],["webteizle.click",23],["webteizle1.click",23],["webteizle2.click",23],["webteizle3.click",23],["webteizle4.click",23],["webteizle5.click",23],["webteizle6.click",23],["webteizle7.click",23],["webteizle8.click",23],["webteizle9.click",23],["webteizle10.click",23],["webteizle3.com",23],["webteizle4.com",23],["webteizle5.com",23],["webteizle6.com",23],["webteizle7.com",23],["webteizle8.com",23],["webteizle9.com",23],["webteizle10.com",23],["webteizle.info",23],["webteizle1.info",23],["webteizle2.info",23],["webteizle3.info",23],["webteizle4.info",23],["webteizle5.info",23],["webteizle6.info",23],["webteizle7.info",23],["webteizle8.info",23],["webteizle9.info",23],["webteizle10.info",23],["dizipal1.cloud",23],["dizipal2.cloud",23],["dizipal3.cloud",23],["dizipal4.cloud",23],["dizipal5.cloud",23],["dizipal6.cloud",23],["dizipal7.cloud",23],["dizipal8.cloud",23],["dizipal9.cloud",23],["dizipal10.cloud",23],["dizipal11.cloud",23],["dizipal12.cloud",23],["dizipal13.cloud",23],["dizipal14.cloud",23],["dizipal15.cloud",23],["dizipal16.cloud",23],["dizipal17.cloud",23],["dizipal18.cloud",23],["dizipal19.cloud",23],["dizipal20.cloud",23],["dizipal21.cloud",23],["dizipal22.cloud",23],["dizipal23.cloud",23],["dizipal24.cloud",23],["dizipal25.cloud",23],["dizipal26.cloud",23],["dizipal27.cloud",23],["dizipal28.cloud",23],["dizipal29.cloud",23],["dizipal30.cloud",23],["dizipal31.cloud",23],["dizipal32.cloud",23],["dizipal33.cloud",23],["dizipal34.cloud",23],["dizipal35.cloud",23],["dizipal36.cloud",23],["dizipal37.cloud",23],["dizipal38.cloud",23],["dizipal39.cloud",23],["dizipal40.cloud",23],["dizipal41.cloud",23],["dizipal42.cloud",23],["dizipal43.cloud",23],["dizipal44.cloud",23],["dizipal45.cloud",23],["dizipal46.cloud",23],["dizipal47.cloud",23],["dizipal48.cloud",23],["dizipal49.cloud",23],["dizipal50.cloud",23],["dizipal51.cloud",23],["dizipal52.cloud",23],["dizipal53.cloud",23],["dizipal54.cloud",23],["dizipal55.cloud",23],["dizipal56.cloud",23],["dizipal57.cloud",23],["dizipal58.cloud",23],["dizipal59.cloud",23],["dizipal60.cloud",23],["dizipal61.cloud",23],["dizipal62.cloud",23],["dizipal63.cloud",23],["dizipal64.cloud",23],["dizipal65.cloud",23],["dizipal66.cloud",23],["dizipal67.cloud",23],["dizipal68.cloud",23],["dizipal69.cloud",23],["dizipal70.cloud",23],["dizipal71.cloud",23],["dizipal72.cloud",23],["dizipal73.cloud",23],["dizipal74.cloud",23],["dizipal75.cloud",23],["dizipal76.cloud",23],["dizipal77.cloud",23],["dizipal78.cloud",23],["dizipal79.cloud",23],["dizipal80.cloud",23],["dizipal81.cloud",23],["dizipal82.cloud",23],["dizipal83.cloud",23],["dizipal84.cloud",23],["dizipal85.cloud",23],["dizipal86.cloud",23],["dizipal87.cloud",23],["dizipal88.cloud",23],["dizipal89.cloud",23],["dizipal90.cloud",23],["dizipal91.cloud",23],["dizipal92.cloud",23],["dizipal93.cloud",23],["dizipal94.cloud",23],["dizipal95.cloud",23],["dizipal96.cloud",23],["dizipal97.cloud",23],["dizipal98.cloud",23],["dizipal99.cloud",23],["dizipal100.cloud",23],["dizipal101.cloud",23],["dizipal102.cloud",23],["dizipal103.cloud",23],["dizipal104.cloud",23],["dizipal105.cloud",23],["dizipal106.cloud",23],["dizipal107.cloud",23],["dizipal108.cloud",23],["dizipal109.cloud",23],["dizipal110.cloud",23],["dizipal111.cloud",23],["dizipal112.cloud",23],["dizipal113.cloud",23],["dizipal114.cloud",23],["dizipal115.cloud",23],["dizipal116.cloud",23],["dizipal117.cloud",23],["dizipal118.cloud",23],["dizipal119.cloud",23],["dizipal120.cloud",23],["dizipal121.cloud",23],["dizipal122.cloud",23],["dizipal123.cloud",23],["dizipal124.cloud",23],["dizipal125.cloud",23],["dizipal126.cloud",23],["dizipal127.cloud",23],["dizipal128.cloud",23],["dizipal129.cloud",23],["dizipal130.cloud",23],["dizipal131.cloud",23],["dizipal132.cloud",23],["dizipal133.cloud",23],["dizipal134.cloud",23],["dizipal135.cloud",23],["dizipal136.cloud",23],["dizipal137.cloud",23],["dizipal138.cloud",23],["dizipal139.cloud",23],["dizipal140.cloud",23],["dizipal141.cloud",23],["dizipal142.cloud",23],["dizipal143.cloud",23],["dizipal144.cloud",23],["dizipal145.cloud",23],["dizipal146.cloud",23],["dizipal147.cloud",23],["dizipal148.cloud",23],["dizipal149.cloud",23],["dizipal150.cloud",23],["dizipal151.cloud",23],["dizipal152.cloud",23],["dizipal153.cloud",23],["dizipal154.cloud",23],["dizipal155.cloud",23],["dizipal156.cloud",23],["dizipal157.cloud",23],["dizipal158.cloud",23],["dizipal159.cloud",23],["dizipal160.cloud",23],["dizipal161.cloud",23],["dizipal162.cloud",23],["dizipal163.cloud",23],["dizipal164.cloud",23],["dizipal165.cloud",23],["dizipal166.cloud",23],["dizipal167.cloud",23],["dizipal168.cloud",23],["dizipal169.cloud",23],["dizipal170.cloud",23],["dizipal171.cloud",23],["dizipal172.cloud",23],["dizipal173.cloud",23],["dizipal174.cloud",23],["dizipal175.cloud",23],["dizipal176.cloud",23],["dizipal177.cloud",23],["dizipal178.cloud",23],["dizipal179.cloud",23],["dizipal180.cloud",23],["dizipal181.cloud",23],["dizipal182.cloud",23],["dizipal183.cloud",23],["dizipal184.cloud",23],["dizipal185.cloud",23],["dizipal186.cloud",23],["dizipal187.cloud",23],["dizipal188.cloud",23],["dizipal189.cloud",23],["dizipal190.cloud",23],["dizipal191.cloud",23],["dizipal192.cloud",23],["dizipal193.cloud",23],["dizipal194.cloud",23],["dizipal195.cloud",23],["dizipal196.cloud",23],["dizipal197.cloud",23],["dizipal198.cloud",23],["dizipal199.cloud",23],["dizipal200.cloud",23],["filmizlehdizle.com",24],["fullfilmizlesene.net",24],["filmmodu.co",25],["diziroll.*",25],["dizilla.*",25],["dizipal12.site",25],["dizipal13.site",25],["dizipal14.site",25],["dizipal15.site",25],["dizipal16.site",25],["dizipal17.site",25],["dizipal18.site",25],["dizipal19.site",25],["dizipal20.site",25],["dizipal21.site",25],["dizipal22.site",25],["dizipal23.site",25],["dizipal24.site",25],["dizipal25.site",25],["dizipal26.site",25],["dizipal27.site",25],["dizipal28.site",25],["dizipal30.site",25],["arsiv.mackolik.com",26],["jetfilmizle.*",27],["nefisyemektarifleri.com",28],["izlesene.com",28],["tranimeci.com",30],["turkanime.co",31],["forum.donanimhaber.com",32],["atv.com.tr",33],["contentx.me",34],["edebiyatdefteri.com",35],["belgeselizlesene.com",[36,37]],["technopat.net",38],["pchocasi.com.tr",38],["aydindenge.com.tr",39],["diziall.com",40],["tamindir.com",41],["hudsonlegalblog.com",42],["taraftarium.*",42],["selcuksports.*",42],["selcuk-sports.com",42],["justintvsh.baby",42],["dmlstechnology.com",42],["justintvde.com",42],["justin-tv.org",42],["inattvgiris.pro",42],["justintv.*",42],["hayrirsds24.cfd",42],["sondakika.com",43],["tranimaci.com",44],["da95848c82c933d2.click",45],["yeniasya.com.tr",46],["buenosairesideal.com",47],["pllsfored.co",47],["inattv454.xyz",47],["inattv455.xyz",47],["inattv456.xyz",47],["inattv457.xyz",47],["inattv458.xyz",47],["inattv459.xyz",47],["inattv460.xyz",47],["inattv461.xyz",47],["inattv462.xyz",47],["inattv463.xyz",47],["inattv464.xyz",47],["inattv465.xyz",47],["inattv466.xyz",47],["inattv467.xyz",47],["inattv468.xyz",47],["inattv469.xyz",47],["inattv470.xyz",47],["inattv471.xyz",47],["inattv472.xyz",47],["inattv473.xyz",47],["inattv474.xyz",47],["inattv475.xyz",47],["inattv476.xyz",47],["inattv477.xyz",47],["inattv478.xyz",47],["inattv479.xyz",47],["inattv480.xyz",47],["inattv481.xyz",47],["inattv482.xyz",47],["inattv483.xyz",47],["inattv484.xyz",47],["inattv485.xyz",47],["inattv486.xyz",47],["inattv487.xyz",47],["inattv488.xyz",47],["inattv489.xyz",47],["inattv490.xyz",47],["inattv491.xyz",47],["inattv492.xyz",47],["inattv493.xyz",47],["inattv494.xyz",47],["inattv495.xyz",47],["inattv496.xyz",47],["inattv497.xyz",47],["inattv498.xyz",47],["inattv499.xyz",47],["inattv500.xyz",47],["domplayer.org",48],["cinque.668a396e58bcbc27.click",49],["fullhdizle.*",50],["filmizlehdfilm.com",50],["fullfilmizle.cc",50],["fullhdfilmizletv.*",50],["hdfilmizlesene.org",50],["sinema.cx",50],["xyzsports173.xyz",51],["xyzsports174.xyz",51],["xyzsports175.xyz",51],["xyzsports176.xyz",51],["xyzsports177.xyz",51],["xyzsports178.xyz",51],["xyzsports179.xyz",51],["xyzsports180.xyz",51],["xyzsports181.xyz",51],["xyzsports182.xyz",51],["xyzsports183.xyz",51],["xyzsports184.xyz",51],["xyzsports185.xyz",51],["xyzsports186.xyz",51],["xyzsports187.xyz",51],["xyzsports188.xyz",51],["xyzsports189.xyz",51],["xyzsports190.xyz",51],["xyzsports191.xyz",51],["xyzsports192.xyz",51],["xyzsports193.xyz",51],["xyzsports194.xyz",51],["xyzsports195.xyz",51],["xyzsports197.xyz",51],["xyzsports198.xyz",51],["xyzsports199.xyz",51],["xyzsports200.xyz",51],["filmizletv3.com",52],["filmizletv4.com",52],["filmizletv5.com",52],["filmizletv6.com",52],["filmizletv7.com",52],["filmizletv8.com",52],["filmizletv9.com",52],["filmizletv10.com",52],["filmizletv11.com",52],["filmizletv12.com",52],["filmizletv13.com",52],["filmizletv14.com",52],["filmizletv15.com",52],["filmizletv16.com",52],["filmizletv17.com",52],["filmizletv19.com",52],["filmizletv20.com",52]]);
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
