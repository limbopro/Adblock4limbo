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
const argsList = [["adblock.check","noopFunc"],["adBlockDetected","noopFunc"],["App.detectAdBlock","noopFunc"],["canRunAds","true"],["eyeOfErstream.detectedBloke","falseFunc"],["tie.ad_blocker_disallow_images_placeholder","undefined"],["eazy_ad_unblocker_msg_var",""],["detector_active","true"],["adblock_active","false"],["adBlockRunning","false"],["adb","false"],["maari","noopFunc"],["adBlockEnabled","false"],["kan_vars.adblock","undefined"],["hasAdblock","false"],["AdblockDetector","undefined"],["adblockCheckUrl",""],["adservice","{}"],["jQuery.adblock","false"],["koddostu_com_adblock_yok","null"],["adblock","false"],["puShown","true"],["isShow","true"],["app.ads","{}"],["wpsaData","undefined"],["AdmostClient","noopFunc"],["S_Popup","2"],["loadPlayerAds","trueFunc"],["reklamsayisi","0"],["volumeClearInterval","0"],["clicked","true"],["adSearchTitle","undefined"],["HBiddings.vastUrl",""],["initOpen","undefined"],["rg","noopFunc"],["Object.prototype.video_ads","noopFunc"],["Object.prototype.ads_enable","false"],["td_ad_background_click_link",""],["start","1"],["popup","noopFunc"],["window.config.adv.enabled","0"],["manset_adv_imp","noopFunc"],["popupShown","true"],["adsConfig","{}"],["PopBanner","undefined"],["config.adv","{}"],["ads","{}"],["config.advertisement.enabled","false"],["reklamsayisi","1"],["window.config.advertisement.0.enabled","0"],["reklam_1",""]];
const hostnamesMap = new Map([["teknop.net",0],["ozgunbilgi.com",0],["beceriksizler.net",0],["merlinscans.com",1],["haber3.com",2],["promy.pro",3],["iddaaorantahmin.com",3],["exxen.com",4],["tgyama.com",5],["uzaymanga.com",[6,21]],["wheel-size.com.tr",7],["karnaval.com",8],["mangaship.net",9],["mangaship.com",9],["miuitr.info",10],["puhutv.com",[11,12]],["coinotag.com",13],["cnnturk.com",[14,15]],["kanald.com.tr",[16,17]],["oyungibi.com",18],["veterinerhekimleri.com",18],["turkdenizcileri.com",19],["bilgalem.blogspot.com",19],["klavyeanaliz.org",20],["ediziizle.com",21],["tekparthdfilmizlesene.*",21],["filmcusx.com",21],["cristal.guru",21],["vizyon18tv.com",21],["korkuseli.com",21],["sinemadafilmizle.org",21],["erotikfimm.com",21],["erotikgo.com",21],["fullhdfilmcenneti.pro",21],["filmgo1.com",21],["puffytr.com",21],["anizle.com",21],["anizm.net",21],["dizimore.com",21],["dizirex.com",21],["maxfilmizle.*",21],["turkifsa.xyz",21],["fullhdfilmizlesene.*",21],["royalfilmizle.com",21],["sinetiktok.com",21],["onlinedizi.xyz",21],["filmifullizle.online",21],["sinemakolik.org",21],["filmerotixxx.com",21],["filmfc.com",21],["filmizletv18.com",[21,50]],["onlinefilmizle.site",21],["playerzz.xyz",21],["filmjr.org",21],["asfilmizle.com",21],["filmhe.com",21],["tranimaci.*",21],["hdfilmizle.org",21],["siyahfilmizle.*",21],["tafdi4.com",21],["elzemfilm.org",21],["tafdi3.com",21],["hdfilmizle.in",21],["dizicaps.*",21],["filmizletv1.*",21],["diziyou.co",21],["fullhdfilmizle.*",[21,28,48]],["fullfilmizle.*",[21,48]],["sinepal.*",21],["dizimag.eu",21],["bumfilmizle1.com",21],["yabancidizilertv.*",21],["1080hdfilmizle.com",21],["yabancidizibax.com",21],["sinemangoo.org",21],["sexfilmleriizle.com",21],["fullhdfilm.*",[21,28]],["geziforumu.com",21],["efendim.xyz",21],["dizipaltv.net",21],["fluffcore.com",21],["hdfilmcehennemizle.com",21],["netfullfilmizle3.com",21],["izlekolik.*",21],["arrowizle.com",21],["filmcus.com",21],["sinemakolik.net",21],["zarize.com",21],["burdenfly.com",21],["zzerotik.com",21],["sinemafilmizle.net",21],["filmkuzusu1.com",21],["hdfilmcix.*",[21,48]],["sinemadelisi.com",21],["erotikfilmtube.com",21],["dizipal.*",21],["filmizletv.*",[21,48,50]],["pornoanne.com",21],["dizikorea.*",21],["diziyo.*",21],["diziboxx.com",21],["dafflix.*",21],["turkaliz.com",21],["vkfilmizle.net",21],["dizimov.*",21],["shirl.club",21],["turkcealtyazilipornom.com",21],["fullhdfilmmodu2.*",21],["hdfilmizletv.net",21],["pembetv18.*",21],["sinemaizle.co",21],["hdfilmcehennem.live",21],["efullizle.com",21],["asyafanatiklerim.com",21],["tranimeizle.*",21],["volsex.com",21],["justintvgiris.blogspot.com",21],["sportboss-macizlesbs.blogspot.com",21],["taraftarium402.blogspot.com",21],["macicanliizle.sbs",21],["taraftarium24canli-macizlesene.blogspot.com",21],["taraftarium24hdgiris1.blogspot.com",21],["selcukspor-taraftarium24canliizle1.blogspot.com",21],["taraftariumxx.cfd",21],["tekfullfilmizle5.com",22],["webteizle.xyz",22],["webteizle1.xyz",22],["webteizle2.xyz",22],["webteizle3.xyz",22],["webteizle4.xyz",22],["webteizle5.xyz",22],["webteizle6.xyz",22],["webteizle7.xyz",22],["webteizle8.xyz",22],["webteizle9.xyz",22],["webteizle10.xyz",22],["webteizle.click",22],["webteizle1.click",22],["webteizle2.click",22],["webteizle3.click",22],["webteizle4.click",22],["webteizle5.click",22],["webteizle6.click",22],["webteizle7.click",22],["webteizle8.click",22],["webteizle9.click",22],["webteizle10.click",22],["webteizle3.com",22],["webteizle4.com",22],["webteizle5.com",22],["webteizle6.com",22],["webteizle7.com",22],["webteizle8.com",22],["webteizle9.com",22],["webteizle10.com",22],["webteizle.info",22],["webteizle1.info",22],["webteizle2.info",22],["webteizle3.info",22],["webteizle4.info",22],["webteizle5.info",22],["webteizle6.info",22],["webteizle7.info",22],["webteizle8.info",22],["webteizle9.info",22],["webteizle10.info",22],["filmizlehdizle.com",23],["fullfilmizlesene.net",23],["filmmodu.co",24],["diziroll.*",24],["dizilla.*",24],["dizipal12.site",24],["dizipal13.site",24],["dizipal14.site",24],["dizipal15.site",24],["dizipal16.site",24],["dizipal17.site",24],["dizipal19.site",24],["dizipal21.site",24],["dizipal22.site",24],["dizipal23.site",24],["dizipal24.site",24],["dizipal25.site",24],["dizipal26.site",24],["dizipal27.site",24],["dizipal28.site",24],["arsiv.mackolik.com",25],["jetfilmizle.*",26],["nefisyemektarifleri.com",27],["izlesene.com",27],["tranimeci.com",29],["turkanime.co",30],["forum.donanimhaber.com",31],["atv.com.tr",32],["contentx.me",33],["edebiyatdefteri.com",34],["belgeselizlesene.com",[35,36]],["technopat.net",37],["pchocasi.com.tr",37],["aydindenge.com.tr",38],["diziall.com",39],["hudsonlegalblog.com",40],["taraftarium.*",40],["selcuksports.*",40],["selcuk-sports.com",40],["justintvsh.baby",40],["dmlstechnology.com",40],["justintvde.com",40],["justin-tv.org",40],["inattvgiris.pro",40],["justintv.*",40],["hayrirsds24.cfd",40],["sondakika.com",41],["guzelfilm.com",42],["tranimaci.com",42],["da95848c82c933d2.click",43],["yeniasya.com.tr",44],["buenosairesideal.com",45],["pllsfored.co",45],["domplayer.org",46],["cinque.668a396e58bcbc27.click",47],["fullhdizle.*",48],["filmizlehdfilm.com",48],["fullhdfilmizletv.*",48],["hdfilmizlesene.org",48],["sinema.cx",48],["xyzsports173.xyz",49],["xyzsports174.xyz",49],["xyzsports175.xyz",49],["xyzsports176.xyz",49],["xyzsports177.xyz",49],["xyzsports178.xyz",49],["xyzsports179.xyz",49],["xyzsports180.xyz",49],["xyzsports181.xyz",49],["xyzsports182.xyz",49],["xyzsports183.xyz",49],["xyzsports184.xyz",49],["xyzsports185.xyz",49],["xyzsports186.xyz",49],["xyzsports187.xyz",49],["xyzsports188.xyz",49],["xyzsports189.xyz",49],["xyzsports190.xyz",49],["xyzsports191.xyz",49],["xyzsports192.xyz",49],["xyzsports193.xyz",49],["xyzsports194.xyz",49],["xyzsports195.xyz",49],["xyzsports197.xyz",49],["xyzsports198.xyz",49],["xyzsports199.xyz",49],["xyzsports200.xyz",49],["filmizletv3.com",50],["filmizletv4.com",50],["filmizletv5.com",50],["filmizletv6.com",50],["filmizletv7.com",50],["filmizletv8.com",50],["filmizletv9.com",50],["filmizletv10.com",50],["filmizletv11.com",50],["filmizletv12.com",50],["filmizletv13.com",50],["filmizletv14.com",50],["filmizletv15.com",50],["filmizletv16.com",50],["filmizletv17.com",50],["filmizletv19.com",50],["filmizletv20.com",50]]);
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
