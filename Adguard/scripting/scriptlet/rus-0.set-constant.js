/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
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

/* jshint esversion:11 */
/* global cloneInto */

'use strict';

// ruleset: rus-0

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_setConstant = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["Object.prototype.changeVisible","noopFunc"],["ADV_BLOCKED","false"],["Clicks._test_meta_referer","null"],["JSON.parse","noopFunc"],["Object.prototype.AdvObject","noopFunc"],["Object.prototype.AdvertisementManager","undefined"],["Object.prototype.IS_CHECK_REGISTRATION","false"],["Object.prototype.MediaReady","noopFunc"],["Object.prototype.PLAYED","null"],["Object.prototype._currentAgeRestriction","null"],["Object.prototype.adUsageStorageVars","undefined"],["Object.prototype.adblockSettings","undefined"],["Object.prototype.advert","null"],["Object.prototype.advertObject","null"],["Object.prototype.afg","true"],["Object.prototype.autoPlay","false"],["Object.prototype.autoPlay","null"],["Object.prototype.autoPopups","undefined"],["Object.prototype.autoplay","false"],["Object.prototype.autoplay","null"],["Object.prototype.autostart","noopFunc"],["Object.prototype.compactMode","true"],["Object.prototype.createBannerItem","null"],["Object.prototype.detect","noopFunc"],["Object.prototype.detectAdb","noopFunc"],["Object.prototype.detectAdblock","noopFunc"],["Object.prototype.disableAutoplay","true"],["Object.prototype.disablePaste","false"],["Object.prototype.disableSeek","noopFunc"],["Object.prototype.disableSelection","noopFunc"],["Object.prototype.getAutoplay","noopFunc"],["Object.prototype.getUaasConfig","undefined"],["Object.prototype.isNoAds","{}"],["Object.prototype.livetv-state","true"],["Object.prototype.manualAutoplay_","null"],["Object.prototype.minPlayingVisibleHeight","noopFunc"],["Object.prototype.onIntersected","noopFunc"],["Object.prototype.openstatCb","undefined"],["Object.prototype.playVideo","noopFunc"],["Object.prototype.sendCHParams","noopFunc"],["Object.prototype.utm","false"],["Object.prototype.utm_campaign","false"],["Object.prototype.utm_medium","false"],["Object.prototype.utm_source","false"],["Object.prototype.utm_space","false"],["Object.prototype.utm_term","false"],["Object.prototype.videoAd","noopFunc"],["String.fromCharCode","trueFunc"],["accept18","true"],["adBlock","false"],["adblock","true"],["app.book.external","null"],["cadb","false"],["clicks","2"],["g_GazetaNoExchange","true"],["home.export.complex-feed","undefined"],["isAdFree","noopFunc"],["localStorage.localstorageGameData",""],["main_air_closed","true"],["noAdsAtAll","{}"],["pl.getParams.isPlay","null"],["player.options.scroll","false"],["playerOptions.behaviour.autoPlay","false"],["sectionConfig.adBlock","null"],["timeEnd","1"],["top100Counter","false"],["window.EUMP.plugins.antiblock","noopFunc"],["window.ab","false"],["Object.prototype.preroll","undefined"],["biads.initCli","undefined"],["NO_ADV","1"],["Object.prototype.ENABLE_SMOKESCREEN","undefined"],["Object.prototype._Mimic","undefined"],["Object.prototype.adblock","null"],["Object.prototype.autoPlayParams","false"],["Object.prototype.autoplayScrollHandler","noopFunc"],["Object.prototype.getAds","undefined"],["Object.prototype.mimic","undefined"],["Object.prototype.onLinkClick","noopFunc"],["Object.prototype.onLinkMouseDown","noopFunc"],["Object.prototype.runMimic","noopFunc"],["Object.prototype.useMimic","noopFunc"],["document.title","null"],["mr.mimic","undefined"],["Object.prototype.hasAdBlockWhiteList","false"],["Object.prototype.AdvertisingManager","noopFunc"]];

const hostnamesMap = new Map([["116.ru",0],["14.ru",0],["161.ru",0],["164.ru",0],["178.ru",0],["26.ru",0],["29.ru",0],["35.ru",0],["43.ru",0],["45.ru",0],["48.ru",0],["51.ru",0],["53.ru",0],["56.ru",0],["59.ru",0],["60.ru",0],["62.ru",0],["63.ru",0],["68.ru",0],["71.ru",0],["72.ru",0],["74.ru",0],["76.ru",0],["86.ru",0],["89.ru",0],["93.ru",0],["chita.ru",0],["e1.ru",0],["ircity.ru",0],["mgorsk.ru",0],["msk1.ru",0],["ngs.ru",0],["ngs22.ru",0],["ngs24.ru",0],["ngs42.ru",0],["ngs55.ru",0],["ngs70.ru",0],["nn.ru",0],["proizhevsk.ru",0],["provoronezh.ru",0],["sochi1.ru",0],["sterlitamak1.ru",0],["tolyatty.ru",0],["ufa1.ru",0],["v1.ru",0],["vladivostok1.ru",0],["www.fontanka.ru",0],["peers.tv",1],["www.ukr.net",2],["animelend.info",3],["ivi.ru",[4,13]],["ictv.ua",5],["inter.ua",5],["k1.ua",5],["novy.tv",5],["ntn.ua",5],["starlight.digital",5],["stb.ua",5],["teleportal.ua",5],["player.vgtrk.com",6],["tv-gubernia.ru",[7,58]],["xsport.ua",8],["1tv.ru",[9,28,66]],["music.yandex.by",10],["music.yandex.kz",10],["music.yandex.ru",10],["music.yandex.uz",10],["api-video.khl.ru",11],["razlozhi.ru",[12,52]],["igroutka.ru",14],["cdnvideo.ru",15],["eda.ru",15],["mania.gcdn.co",15],["vp.rambler.ru",[15,35]],["www.rambler.ru",15],["afisha.ru",16],["partnerkin.com",17],["iz.ru",18],["bonus-tv.ru",19],["eagleplatform.com",[19,61]],["embed.dugout.com",20],["7days.ru",0],["doctorpiter.ru",0],["dom.mail.ru",0],["kinonews.ru",0],["kp.kg",0],["kp.kz",0],["kp.md",0],["kp.ru",0],["lady.mail.ru",0],["mk.ru",0],["ohotniki.ru",0],["portalvirtualreality.ru",0],["radiokp.ru",0],["spletnik.ru",0],["sportkp.ru",0],["wday.ru",0],["woman.ru",0],["tass.ru",21],["ati.su",22],["24smi.org",23],["russia-tv.online",24],["examenpdd.com",25],["embed.twitch.tv",26],["player.twitch.tv",26],["www.mos.ru",27],["kinokong.pro",29],["dzen.ru",[30,31]],["play.tv3.lt",32],["play.tv3.lv",32],["tv3play.skaties.lv",32],["rbc.ru",33],["sportrbc.ru",33],["tenews.org.ua",34],["rg.ru",[36,37]],["3dnews.kz",38],["3dnews.ru",38],["vm.ru",38],["gismeteo.by",39],["gismeteo.kz",39],["gismeteo.lt",39],["gismeteo.lv",39],["gismeteo.md",39],["gismeteo.ru",39],["meteofor.com.ua",39],["forbes.ru",[40,41,42,43,44,45]],["frontend.vh.yandex.ru",46],["widgets.kinopoisk.ru",46],["yastatic.net",46],["free-tor.info",47],["korsars.info",47],["vo-dela.su",48],["hentai-share.one",49],["anidub.vip",50],["anidubonline.com",50],["loveanime.live",50],["gdz-putina.fun",51],["gdz.ninja",51],["gdz.ru",51],["gdzotputina.club",51],["gdzputina.net",51],["megaresheba.com",51],["megaresheba.ru",51],["resheba.me",51],["spishi.fun",51],["zoobrilka.net",51],["audioportal.su",53],["gazeta.ru",[54,56]],["ya.ru",55],["playground.ru",57],["vk.com",59],["vk.ru",59],["player.smotrim.ru",60],["kinescope.io",62],["apollo.lv",63],["tvnet.lv",63],["softportal.com",64],["rambler.ru",65],["remont-aud.net",67],["okminigames.mail.ru",70],["e.mail.ru",[71,78,79,84]],["octavius.mail.ru",[71,78,79,84]],["otvet.mail.ru",72],["mail.ru",[73,77,82,83]],["player-smotri.mail.ru",74],["ok.ru",[75,76]],["sportmail.ru",[77,81]],["my.mail.ru",80],["news.mail.ru",81],["pogoda.mail.ru",81],["mail.ukr.net",85]]);

const entitiesMap = new Map([["hdrezka",68],["rezka",68],["mult-porno",69],["sex-studentki",69],["cosplay-porn",69]]);

const exceptionsMap = new Map([["1yar.tv",[19]],["m.vk.com",[59]],["3igames.mail.ru",[73,82,83]],["auto.mail.ru",[73,82,83]],["biz.mail.ru",[73,82,83]],["bonus.mail.ru",[73,82,83]],["calendar.mail.ru",[73,82,83]],["calls.mail.ru",[73,77,82,83]],["cloud.mail.ru",[73,82,83]],["deti.mail.ru",[73,82,83]],["dobro.mail.ru",[73,82,83]],["e.mail.ru",[73,77,82,83]],["esports.mail.ru",[73,82,83]],["games.mail.ru",[73,82,83]],["gibdd.mail.ru",[73,82,83]],["go.mail.ru",[73,82,83]],["health.mail.ru",[73,82,83]],["help.mail.ru",[73,82,83]],["hi-tech.mail.ru",[73,82,83]],["horo.mail.ru",[73,82,83]],["kino.mail.ru",[73,82,83]],["lady.mail.ru",[73,82,83]],["love.mail.ru",[73,82,83]],["mailblog.mail.ru",[73,82,83]],["mcs.mail.ru",[73,82,83]],["minigames.mail.ru",[73,82,83]],["my.mail.ru",[73,77,82,83]],["news.mail.ru",[73,82,83]],["octavius.mail.ru",[73,77,82,83]],["okminigames.mail.ru",[73,82,83]],["otvet.mail.ru",[73,82,83]],["pets.mail.ru",[73,82,83]],["player-smotri.mail.ru",[73,82,83]],["pogoda.mail.ru",[73,82,83]],["top.mail.ru",[73,82,83]],["touch.mail.ru",[73,77,82,83]],["tv.mail.ru",[73,82,83]]]);

/******************************************************************************/

function setConstant(
    ...args
) {
    setConstantCore(false, ...args);
}

function setConstantCore(
    trusted = false,
    chain = '',
    cValue = ''
) {
    if ( chain === '' ) { return; }
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    function setConstant(chain, cValue) {
        const trappedProp = (( ) => {
            const pos = chain.lastIndexOf('.');
            if ( pos === -1 ) { return chain; }
            return chain.slice(pos+1);
        })();
        if ( trappedProp === '' ) { return; }
        const thisScript = document.currentScript;
        const cloakFunc = fn => {
            safe.Object_defineProperty(fn, 'name', { value: trappedProp });
            const proxy = new Proxy(fn, {
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
            return proxy;
        };
        if ( cValue === 'undefined' ) {
            cValue = undefined;
        } else if ( cValue === 'false' ) {
            cValue = false;
        } else if ( cValue === 'true' ) {
            cValue = true;
        } else if ( cValue === 'null' ) {
            cValue = null;
        } else if ( cValue === "''" || cValue === '' ) {
            cValue = '';
        } else if ( cValue === '[]' ) {
            cValue = [];
        } else if ( cValue === '{}' ) {
            cValue = {};
        } else if ( cValue === 'noopFunc' ) {
            cValue = cloakFunc(function(){});
        } else if ( cValue === 'trueFunc' ) {
            cValue = cloakFunc(function(){ return true; });
        } else if ( cValue === 'falseFunc' ) {
            cValue = cloakFunc(function(){ return false; });
        } else if ( /^-?\d+$/.test(cValue) ) {
            cValue = parseInt(cValue);
            if ( isNaN(cValue) ) { return; }
            if ( Math.abs(cValue) > 0x7FFF ) { return; }
        } else if ( trusted ) {
            if ( cValue.startsWith('{') && cValue.endsWith('}') ) {
                try { cValue = safe.jsonParse(cValue).value; } catch(ex) { return; }
            }
        } else {
            return;
        }
        if ( extraArgs.as !== undefined ) {
            if ( extraArgs.as === 'function' ) {
                cValue = ( ) => cValue;
            } else if ( extraArgs.as === 'callback' ) {
                cValue = ( ) => (( ) => cValue);
            } else if ( extraArgs.as === 'resolved' ) {
                cValue = Promise.resolve(cValue);
            } else if ( extraArgs.as === 'rejected' ) {
                cValue = Promise.reject(cValue);
            }
        }
        let aborted = false;
        const mustAbort = function(v) {
            if ( trusted ) { return false; }
            if ( aborted ) { return true; }
            aborted =
                (v !== undefined && v !== null) &&
                (cValue !== undefined && cValue !== null) &&
                (typeof v !== typeof cValue);
            return aborted;
        };
        // https://github.com/uBlockOrigin/uBlock-issues/issues/156
        //   Support multiple trappers for the same property.
        const trapProp = function(owner, prop, configurable, handler) {
            if ( handler.init(configurable ? owner[prop] : cValue) === false ) { return; }
            const odesc = Object.getOwnPropertyDescriptor(owner, prop);
            let prevGetter, prevSetter;
            if ( odesc instanceof Object ) {
                owner[prop] = cValue;
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
                        return handler.getter(); // cValue
                    },
                    set(a) {
                        if ( prevSetter !== undefined ) {
                            prevSetter(a);
                        }
                        handler.setter(a);
                    }
                });
            } catch(ex) {
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
                        return document.currentScript === thisScript
                            ? this.v
                            : cValue;
                    },
                    setter: function(a) {
                        if ( mustAbort(a) === false ) { return; }
                        cValue = a;
                    }
                });
                return;
            }
            const prop = chain.slice(0, pos);
            const v = owner[prop];
            chain = chain.slice(pos + 1);
            if ( v instanceof Object || typeof v === 'object' && v !== null ) {
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
                    if ( a instanceof Object ) {
                        trapChain(a, chain);
                    }
                }
            });
        };
        trapChain(window, chain);
    }
    runAt(( ) => {
        setConstant(chain, cValue);
    }, extraArgs.runAt);
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1,
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
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
    }
    const self = globalThis;
    const safe = {
        'Error': self.Error,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'jsonParse': self.JSON.parse.bind(self.JSON),
        'jsonStringify': self.JSON.stringify.bind(self.JSON),
        'log': console.log.bind(console),
        uboLog(...args) {
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
            }
            const expect = (options.canNegate === true && pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    pattern,
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            return {
                pattern,
                re: new this.RegExp(pattern.replace(
                    /[.*+?^${}()|[\]\\]/g, '\\$&'),
                    options.flags
                ),
                expect,
            };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            return this.RegExp_test.call(details.re, haystack) === details.expect;
        },
        patternToRegex(pattern, flags = undefined) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
            }
            try {
                return new RegExp(match[1], match[2] || flags);
            }
            catch(ex) {
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
            return Object.fromEntries(entries);
        },
    };
    scriptletGlobals.set('safeSelf', safe);
    return safe;
}

/******************************************************************************/

const hnParts = [];
try { hnParts.push(...document.location.hostname.split('.')); }
catch(ex) { }
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
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

// Inject code

// https://bugzilla.mozilla.org/show_bug.cgi?id=1736575
//   'MAIN' world not yet supported in Firefox, so we inject the code into
//   'MAIN' ourself when environment in Firefox.

// Not Firefox
if ( typeof wrappedJSObject !== 'object' ) {
    return uBOL_setConstant();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_setConstant = cloneInto([
            [ '(', uBOL_setConstant.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_setConstant);
        url = page.URL.createObjectURL(blob);
        const doc = page.document;
        script = doc.createElement('script');
        script.async = false;
        script.src = url;
        (doc.head || doc.documentElement || doc).append(script);
    } catch (ex) {
        console.error(ex);
    }
    if ( url ) {
        if ( script ) { script.remove(); }
        page.URL.revokeObjectURL(url);
    }
    delete page.uBOL_setConstant;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
