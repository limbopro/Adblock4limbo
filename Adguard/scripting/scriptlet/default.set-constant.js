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

// ruleset: default

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
const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["console.clear","noopFunc"],["console.log","noopFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["console.clear","trueFunc"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["console.clear","undefined"],["check_adblock","true"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["String.prototype.charCodeAt","trueFunc"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["openPopunder","noopFunc"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["CaptchmeState.adb","undefined"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["N_BetterJsPop.object","{}"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["HTMLAnchorElement.prototype.click","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["loadingAds","true"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["decodeURIComponent","trueFunc"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["cnbc.canShowAds","true"],["ue_adb_chk","1"],["firefaucet","true"],["cRAds","true"],["uas","[]"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["foundation.adPlayer.bitmovin","{}"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["Object.prototype.adReinsertion","noopFunc"],["getHomadConfig","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["ulp_noadb","true"],["Object.prototype.adblock_detected","false"],["timeSec","0"],["adsbygoogle.loaded","true"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["Adv_ab","false"],["sgpbCanRunAds","true"],["document.hidden","false"],["document.hasFocus","trueFunc"],["hasFocus","trueFunc"],["navigator.brave","undefined"],["Object.prototype.isAllAdClose","true"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["navigator.webkitTemporaryStorage.queryUsageAndQuota","noopFunc"],["document.onkeydown","noopFunc"],["showadas","true"],["alert","throwFunc"],["iktimer","0"],["aSl.gcd","0"],["delayClick","false"],["window.adLink","null"],["sensorsDataAnalytic201505","{}"],["detectedAdblock","undefined"],["isTabActive","true"],["clicked","2"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["flashvars.mlogo",""],["vpPrerollVideo","undefined"],["hold_click","false"],["admiral","noopFunc"],["gnt.u.adfree","true"],["objAd.loadAdShield","noopFunc"],["window.myAd.runAd","noopFunc"],["__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["xv_ad_block","0"],["openWindow","noopFunc"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["showada","true"],["showax","true"],["p18","undefined"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["Object.prototype.adblockFound","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["xv.sda.pp.init","noopFunc"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["isadb","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["detectAdBlock","noopFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["ad_link",""],["penciBlocksArray","[]"],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["D4zz","noopFunc"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["tv3Cmp.ConsentGiven","true"],["countDownDate","0"],["setupSkin","noopFunc"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["sssp","emptyObj"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["adSettings","[]"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["googletag","true"],["tOS2","150"],["checkAdBlocker","noopFunc"],["PlayerConfig.config.CustomAdSetting","[]"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["ShowAdvertising","{}"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["feedBack.showAffilaePromo","noopFunc"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["window.adngin","{}"],["amzn_aps_csm","{}"],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["sharedController.adblockDetector","noopFunc"],["checkAdsStatus","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["checkAdBlockeraz","noopFunc"],["blockingAds","false"],["Yii2App.playbackTimeout","0"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["powerAPITag","emptyObj"],["playerEnhancedConfig.run","throwFunc"],["aoAdBlockDetected","false"],["rodo.checkIsDidomiConsent","noopFunc"],["rodo.waitForConsent","noopPromiseResolve"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["hasAdBlocker","false"],["document.ontouchend","null"],["document.onclick","null"],["initials.yld-pdpopunder",""],["download_click","true"],["advertisement3","true"],["importFAB","undefined"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["dvsize","52"],["majorse","true"],["completed","1"],["testerli","false"],["w87.abd","noopFunc"],["document.referrer",""],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["one_time","1"],["consentGiven","true"],["playID","1"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["ADS.isBannersEnabled","false"],["EASYFUN_ADS_CAN_RUN","true"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["detectedAdblock","noopFunc"],["Object.prototype.DetectByGoogleAd","noopFunc"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["NativeAd","noopFunc"],["Blob","noopFunc"],["window.navigator.brave","undefined"],["HTMLScriptElement.prototype.onerror","undefined"],["isAdblock","false"],["openPop","noopFunc"],["attachEvent","trueFunc"],["cns.library","true"],["BJSShowUnder","{}"],["BJSShowUnder.bindTo","noopFunc"],["BJSShowUnder.add","noopFunc"],["countDown","0"],["runCheck","noopFunc"],["adsSlotRenderEndSeen","true"],["showModal","noopFunc"],["flashvars.mlogo_link",""],["isAdBlocked","noopFunc"],["URLlist","[]"],["aaw","{}"],["aaw.processAdsOnPage","noopFunc"],["doOpen","undefined"],["HTMLImageElement.prototype.onerror","undefined"],["FOXIZ_MAIN_SCRIPT.siteAccessDetector","noopFunc"],["openAdBlockPopup","noopFunc"],["Object.prototype._adsDisabled","true"],["advanced_ads_check_adblocker","noopFunc"],["canRunAds","1"],["attestHasAdBlockerActivated","true"],["extInstalled","true"],["SaveFiles.add","noopFunc"],["detectSandbox","noopFunc"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["Object.prototype.updateModifiedCommerceUrl","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["Visitor","{}"],["send_gravity_event","noopFunc"],["send_recommendation_event","noopFunc"],["libAnalytics.data.get","noopFunc"],["adthrive._components.start","noopFunc"],["navigator.sendBeacon","noopFunc"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["Object.prototype.que","noopFunc"],["Object.prototype.que.push","noopFunc"],["ga.sendGaEvent","noopFunc"],["adobe","{}"],["MT","{}"],["MT.track","noopFunc"],["adex","{}"],["adex.getAdexUser","noopFunc"],["Adkit","noopFunc"],["Object.prototype.shouldExpectGoogleCMP","false"],["apntag.refresh","noopFunc"],["adBlockDetected","undefined"],["scrollTo","noopFunc"],["Navigator.prototype.globalPrivacyControl","false"],["navigator.globalPrivacyControl","false"],["gnt.x.adm",""]];
const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3]],["music.youtube.com",[0,1,2,3]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["timesofindia.indiatimes.com",4],["economictimes.indiatimes.com",5],["motherless.com",6],["sueddeutsche.de",7],["watchanimesub.net",8],["wco.tv",8],["wcoanimesub.tv",8],["wcoforever.net",8],["freeviewmovies.com",8],["filehorse.com",8],["guidetnt.com",8],["starmusiq.*",8],["sp-today.com",8],["linkvertise.com",8],["eropaste.net",8],["getpaste.link",8],["sharetext.me",8],["wcofun.*",8],["note.sieuthuthuat.com",8],["elcriticodelatele.com",[8,306]],["gadgets.es",[8,306]],["amateurporn.co",[8,105]],["wiwo.de",9],["primewire.*",10],["streanplay.*",[10,11]],["alphaporno.com",[10,397]],["porngem.com",10],["shortit.pw",[10,89]],["familyporn.tv",10],["sbplay.*",10],["id45.cyou",10],["85tube.com",[10,73]],["milfnut.*",10],["k1nk.co",10],["watchasians.cc",10],["soltoshindo.com",10],["sankakucomplex.com",12],["player.glomex.com",13],["merkur.de",13],["tz.de",13],["sxyprn.*",14],["hqq.*",[15,16]],["waaw.*",[16,17]],["hotpornfile.org",16],["player.tabooporns.com",16],["x69.ovh",16],["wiztube.xyz",16],["younetu.*",16],["multiup.us",16],["peliculas8k.com",[16,17]],["video.q34r.org",16],["czxxx.org",16],["vtplayer.online",16],["vvtplayer.*",16],["netu.ac",16],["netu.frembed.lol",16],["dirtyvideo.fun",17],["adbull.org",18],["123link.*",18],["adshort.*",18],["mitly.us",18],["linkrex.net",18],["linx.cc",18],["oke.io",18],["linkshorts.*",18],["dz4link.com",18],["adsrt.*",18],["linclik.com",18],["shrt10.com",18],["vinaurl.*",18],["loptelink.com",18],["adfloz.*",18],["cut-fly.com",18],["linkfinal.com",18],["payskip.org",18],["cutpaid.com",18],["forexmab.com",18],["linkjust.com",18],["linkszia.co",18],["leechpremium.link",18],["icutlink.com",[18,110]],["oncehelp.com",18],["rgl.vn",18],["reqlinks.net",18],["bitlk.com",18],["qlinks.eu",18],["link.3dmili.com",18],["short-fly.com",18],["foxseotools.com",18],["dutchycorp.*",18],["shortearn.*",18],["pingit.*",18],["pngit.live",18],["link.turkdown.com",18],["urlty.com",18],["7r6.com",18],["oko.sh",18],["ckk.ai",18],["fc.lc",18],["fstore.biz",18],["shrink.*",18],["cuts-url.com",18],["eio.io",18],["exe.app",18],["exee.io",18],["exey.io",18],["skincarie.com",18],["exeo.app",18],["tmearn.*",18],["coinlyhub.com",[18,182]],["adsafelink.com",18],["aii.sh",18],["megalink.*",18],["cybertechng.com",[18,197]],["cutdl.xyz",18],["iir.ai",18],["shorteet.com",[18,215]],["miniurl.*",18],["smoner.com",18],["gplinks.*",18],["odisha-remix.com",[18,197]],["xpshort.com",[18,197]],["upshrink.com",18],["clk.*",18],["easysky.in",18],["veganab.co",18],["go.bloggingaro.com",18],["go.gyanitheme.com",18],["go.theforyou.in",18],["go.hipsonyc.com",18],["birdurls.com",18],["vipurl.in",18],["try2link.com",18],["jameeltips.us",18],["gainl.ink",18],["promo-visits.site",18],["satoshi-win.xyz",[18,231]],["shorterall.com",18],["encurtandourl.com",18],["forextrader.site",18],["postazap.com",18],["cety.app",18],["exego.app",[18,226]],["cutlink.net",18],["cutsy.net",18],["cutyurls.com",18],["cutty.app",18],["cutnet.net",18],["jixo.online",18],["tinys.click",[18,197]],["cpm.icu",18],["panyshort.link",18],["enagato.com",18],["pandaznetwork.com",18],["tpi.li",18],["oii.la",18],["recipestutorials.com",18],["pureshort.*",18],["shrinke.*",18],["shrinkme.*",18],["shrinkforearn.in",18],["oii.io",18],["du-link.in",18],["atglinks.com",18],["thotpacks.xyz",18],["megaurl.in",18],["megafly.in",18],["simana.online",18],["fooak.com",18],["joktop.com",18],["evernia.site",18],["falpus.com",18],["link.paid4link.com",18],["exalink.fun",18],["shortxlinks.com",18],["upfion.com",18],["upfiles.app",18],["upfiles-urls.com",18],["flycutlink.com",[18,197]],["linksly.co",18],["link1s.*",18],["pkr.pw",18],["imagenesderopaparaperros.com",18],["shortenbuddy.com",18],["apksvip.com",18],["4cash.me",18],["namaidani.com",18],["shortzzy.*",18],["teknomuda.com",18],["shorttey.*",[18,181]],["miuiku.com",18],["savelink.site",18],["lite-link.*",18],["adcorto.*",18],["samaa-pro.com",18],["miklpro.com",18],["modapk.link",18],["ccurl.net",18],["linkpoi.me",18],["menjelajahi.com",18],["pewgame.com",18],["haonguyen.top",18],["zshort.*",18],["crazyblog.in",18],["gtlink.co",18],["cutearn.net",18],["rshrt.com",18],["filezipa.com",18],["dz-linkk.com",18],["upfiles.*",18],["theblissempire.com",18],["finanzas-vida.com",18],["adurly.cc",18],["paid4.link",18],["link.asiaon.top",18],["go.gets4link.com",18],["linkfly.*",18],["beingtek.com",18],["shorturl.unityassets4free.com",18],["disheye.com",18],["techymedies.com",18],["techysuccess.com",18],["za.gl",[18,128]],["bblink.com",18],["myad.biz",18],["swzz.xyz",18],["vevioz.com",18],["charexempire.com",18],["clk.asia",18],["linka.click",18],["sturls.com",18],["myshrinker.com",18],["snowurl.com",[18,197]],["netfile.cc",18],["wplink.*",18],["rocklink.in",18],["techgeek.digital",18],["download3s.net",18],["shortx.net",18],["shortawy.com",18],["tlin.me",18],["apprepack.com",18],["up-load.one",18],["zuba.link",18],["bestcash2020.com",18],["hoxiin.com",18],["paylinnk.com",18],["thizissam.in",18],["ier.ai",18],["adslink.pw",18],["novelssites.com",18],["links.medipost.org",18],["faucetcrypto.net",18],["short.freeltc.top",18],["trxking.xyz",18],["weadown.com",18],["m.bloggingguidance.com",18],["blog.onroid.com",18],["link.codevn.net",18],["upfilesurls.com",18],["link4rev.site",18],["c2g.at",18],["bitcosite.com",[18,411]],["cryptosh.pro",18],["link68.net",18],["traffic123.net",18],["windowslite.net",[18,197]],["viewfr.com",18],["cl1ca.com",18],["4br.me",18],["fir3.net",18],["seulink.*",18],["encurtalink.*",18],["kiddyshort.com",18],["watchmygf.me",[19,44]],["camwhores.*",[19,29,72,73,74]],["camwhorez.tv",[19,29,72,73]],["cambay.tv",[19,52,72,102,104,105,106,107]],["fpo.xxx",[19,52]],["sexemix.com",19],["heavyfetish.com",[19,569]],["thotcity.su",19],["viralxxxporn.com",[19,251]],["tube8.*",[20,21]],["you-porn.com",21],["youporn.*",21],["youporngay.com",21],["youpornru.com",21],["redtube.*",21],["9908ww.com",21],["adelaidepawnbroker.com",21],["bztube.com",21],["hotovs.com",21],["insuredhome.org",21],["nudegista.com",21],["pornluck.com",21],["vidd.se",21],["pornhub.*",[21,170]],["pornhub.com",21],["pornerbros.com",22],["freep.com",22],["porn.com",23],["tune.pk",24],["noticias.gospelmais.com.br",25],["techperiod.com",25],["viki.com",[26,27]],["watch-series.*",28],["watchseries.*",28],["vev.*",28],["vidop.*",28],["vidup.*",28],["sleazyneasy.com",[29,30,31]],["smutr.com",[29,178]],["tktube.com",29],["yourporngod.com",[29,30]],["javbangers.com",[29,295]],["camfox.com",29],["camthots.tv",[29,102]],["shegotass.info",29],["amateur8.com",29],["bigtitslust.com",29],["ebony8.com",29],["freeporn8.com",29],["lesbian8.com",29],["maturetubehere.com",29],["sortporn.com",29],["motherporno.com",[29,30,52,104]],["theporngod.com",[29,30]],["watchdirty.to",[29,73,74,105]],["pornsocket.com",32],["luxuretv.com",33],["porndig.com",[34,35]],["webcheats.com.br",36],["ceesty.com",[37,38]],["gestyy.com",[37,38]],["corneey.com",38],["destyy.com",38],["festyy.com",38],["sh.st",38],["mitaku.net",38],["angrybirdsnest.com",39],["zrozz.com",39],["clix4btc.com",39],["4tests.com",39],["goltelevision.com",39],["news-und-nachrichten.de",39],["laradiobbs.net",39],["urlaubspartner.net",39],["produktion.de",39],["cinemaxxl.de",39],["bladesalvador.com",39],["tempr.email",39],["cshort.org",39],["friendproject.net",39],["covrhub.com",39],["katfile.com",[39,481]],["trust.zone",39],["business-standard.com",39],["planetsuzy.org",40],["empflix.com",41],["gogoanime.*",[42,43]],["adrianmissionminute.com",42],["alejandrocenturyoil.com",42],["alleneconomicmatter.com",42],["apinchcaseation.com",42],["bethshouldercan.com",42],["bigclatterhomesguideservice.com",42],["bradleyviewdoctor.com",42],["brittneystandardwestern.com",42],["brookethoughi.com",42],["brucevotewithin.com",42],["cindyeyefinal.com",42],["denisegrowthwide.com",42],["donaldlineelse.com",42],["edwardarriveoften.com",42],["erikcoldperson.com",42],["evelynthankregion.com",42],["graceaddresscommunity.com",42],["heatherdiscussionwhen.com",42],["heatherwholeinvolve.com",42],["housecardsummerbutton.com",42],["jamessoundcost.com",42],["jamesstartstudent.com",42],["jamiesamewalk.com",42],["jasminetesttry.com",42],["jasonresponsemeasure.com",42],["jayservicestuff.com",42],["jennifercertaindevelopment.com",42],["jessicaglassauthor.com",42],["johntryopen.com",42],["josephseveralconcern.com",42],["kennethofficialitem.com",42],["kristiesoundsimply.com",42],["lisatrialidea.com",42],["lorimuchbenefit.com",42],["loriwithinfamily.com",42],["lukecomparetwo.com",42],["markstyleall.com",42],["michaelapplysome.com",42],["morganoperationface.com",42],["nathanfromsubject.com",42],["nectareousoverelate.com",42],["paulkitchendark.com",42],["rebeccaneverbase.com",42],["richardsignfish.com",42],["roberteachfinal.com",42],["robertordercharacter.com",42],["robertplacespace.com",42],["ryanagoinvolve.com",42],["sandratableother.com",42],["sandrataxeight.com",42],["seanshowcould.com",42],["sethniceletter.com",42],["shannonpersonalcost.com",42],["sharonwhiledemocratic.com",42],["stevenimaginelittle.com",42],["strawberriesporail.com",42],["susanhavekeep.com",42],["timberwoodanotia.com",42],["tinycat-voe-fashion.com",42],["toddpartneranimal.com",42],["troyyourlead.com",42],["uptodatefinishconference.com",42],["uptodatefinishconferenceroom.com",42],["vincentincludesuccessful.com",42],["voe.sx",42],["maxfinishseveral.com",42],["voe.sx>>",42],["motphimtv.com",42],["rabbitstream.net",42],["projectfreetv.one",42],["fmovies.*",42],["freeplayervideo.com",42],["nazarickol.com",42],["player-cdn.com",42],["playhydrax.com",[42,478,479]],["1movies.*",[43,49]],["xmovies8.*",43],["masteranime.tv",43],["0123movies.*",43],["gostream.*",43],["gomovies.*",43],["transparentcalifornia.com",44],["deepbrid.com",45],["webnovel.com",46],["streamwish.*",[47,48]],["oneupload.to",48],["wishfast.top",48],["rubystm.com",48],["rubyvid.com",48],["rubyvidhub.com",48],["stmruby.com",48],["streamruby.com",48],["schwaebische.de",50],["8tracks.com",51],["3movs.com",52],["bravoerotica.net",[52,104]],["youx.xxx",52],["camclips.tv",[52,178]],["xtits.*",[52,104]],["camflow.tv",[52,104,105,149,251]],["camhoes.tv",[52,102,104,105,149,251]],["xmegadrive.com",52],["xxxymovies.com",52],["xxxshake.com",52],["gayck.com",52],["xhand.com",[52,104]],["analdin.com",[52,104]],["revealname.com",53],["pouvideo.*",54],["povvideo.*",54],["povw1deo.*",54],["povwideo.*",54],["powv1deo.*",54],["powvibeo.*",54],["powvideo.*",54],["powvldeo.*",54],["golfchannel.com",55],["stream.nbcsports.com",55],["mathdf.com",55],["gamcore.com",56],["porcore.com",56],["porngames.tv",56],["69games.xxx",56],["javmix.app",56],["tecknity.com",57],["haaretz.co.il",58],["haaretz.com",58],["hungama.com",58],["a-o.ninja",58],["anime-odcinki.pl",58],["kumpulmanga.org",58],["shortgoo.blogspot.com",58],["tonanmedia.my.id",[58,433]],["yurasu.xyz",58],["isekaipalace.com",58],["plyjam.*",[59,60]],["ennovelas.com",[60,64]],["foxsports.com.au",61],["canberratimes.com.au",61],["thesimsresource.com",62],["fxporn69.*",63],["vipbox.*",64],["viprow.*",64],["ctrl.blog",65],["sportlife.es",66],["finofilipino.org",67],["desbloqueador.*",68],["xberuang.*",69],["teknorizen.*",69],["mysflink.blogspot.com",69],["ashemaletube.*",70],["paktech2.com",70],["assia.tv",71],["assia4.com",71],["assia24.com",71],["cwtvembeds.com",[73,103]],["camlovers.tv",73],["porntn.com",73],["pornissimo.org",73],["sexcams-24.com",[73,105]],["watchporn.to",[73,105]],["camwhorez.video",73],["footstockings.com",[73,74,105]],["xmateur.com",[73,74,105]],["multi.xxx",74],["worldofbitco.in",[75,76]],["weatherx.co.in",[75,76]],["sunbtc.space",75],["subtorrents.*",77],["subtorrents1.*",77],["newpelis.*",77],["pelix.*",77],["allcalidad.*",77],["infomaniakos.*",77],["ojogos.com.br",78],["powforums.com",79],["supforums.com",79],["studybullet.com",79],["usgamer.net",80],["recordonline.com",80],["freebitcoin.win",81],["e-monsite.com",81],["coindice.win",81],["temp-mails.com",82],["freiepresse.de",83],["investing.com",84],["tornadomovies.*",85],["mp3fiber.com",86],["chicoer.com",87],["dailybreeze.com",87],["dailybulletin.com",87],["dailynews.com",87],["delcotimes.com",87],["eastbaytimes.com",87],["macombdaily.com",87],["ocregister.com",87],["pasadenastarnews.com",87],["pe.com",87],["presstelegram.com",87],["redlandsdailyfacts.com",87],["reviewjournal.com",87],["santacruzsentinel.com",87],["saratogian.com",87],["sentinelandenterprise.com",87],["sgvtribune.com",87],["tampabay.com",87],["times-standard.com",87],["theoaklandpress.com",87],["trentonian.com",87],["twincities.com",87],["whittierdailynews.com",87],["bostonherald.com",87],["dailycamera.com",87],["sbsun.com",87],["dailydemocrat.com",87],["montereyherald.com",87],["orovillemr.com",87],["record-bee.com",87],["redbluffdailynews.com",87],["reporterherald.com",87],["thereporter.com",87],["timescall.com",87],["timesheraldonline.com",87],["ukiahdailyjournal.com",87],["dailylocal.com",87],["mercurynews.com",87],["suedkurier.de",88],["anysex.com",90],["icdrama.*",91],["mangasail.*",91],["pornve.com",92],["file4go.*",93],["coolrom.com.au",93],["marie-claire.es",94],["gamezhero.com",94],["flashgirlgames.com",94],["onlinesudoku.games",94],["mpg.football",94],["sssam.com",94],["globalnews.ca",95],["drinksmixer.com",96],["leitesculinaria.com",96],["fupa.net",97],["browardpalmbeach.com",98],["dallasobserver.com",98],["houstonpress.com",98],["miaminewtimes.com",98],["phoenixnewtimes.com",98],["westword.com",98],["nhentai.net",[99,100]],["nowtv.com.tr",101],["caminspector.net",102],["camwhoreshd.com",102],["camgoddess.tv",102],["gay4porn.com",104],["mypornhere.com",104],["mangovideo.*",105],["love4porn.com",105],["thotvids.com",105],["watchmdh.to",105],["celebwhore.com",105],["cluset.com",105],["sexlist.tv",105],["4kporn.xxx",105],["xhomealone.com",105],["lusttaboo.com",[105,370]],["hentai-moon.com",105],["sexwebvideo.com",105],["sexwebvideo.net",105],["camhub.cc",[105,539]],["mediapason.it",108],["linkspaid.com",108],["tuotromedico.com",108],["neoteo.com",108],["phoneswiki.com",108],["celebmix.com",108],["myneobuxportal.com",108],["oyungibi.com",108],["25yearslatersite.com",108],["jeshoots.com",109],["techhx.com",109],["karanapk.com",109],["flashplayer.fullstacks.net",111],["cloudapps.herokuapp.com",111],["youfiles.herokuapp.com",111],["texteditor.nsspot.net",111],["temp-mail.org",112],["asianclub.*",113],["javhdporn.net",113],["vidmoly.to",114],["comnuan.com",115],["veedi.com",116],["battleboats.io",116],["anitube.*",117],["fruitlab.com",117],["acetack.com",117],["androidquest.com",117],["apklox.com",117],["chhaprawap.in",117],["gujarativyakaran.com",117],["kashmirstudentsinformation.in",117],["kisantime.com",117],["shetkaritoday.in",117],["pastescript.com",117],["trimorspacks.com",117],["updrop.link",117],["haddoz.net",117],["streamingcommunity.*",117],["garoetpos.com",117],["stiletv.it",118],["mixdrop.*",119],["hqtv.biz",120],["liveuamap.com",121],["muvibg.com",121],["audycje.tokfm.pl",122],["hulu.com",[123,124,125]],["shush.se",126],["allkpop.com",127],["empire-anime.*",[128,428,429,430,431,432]],["empire-streaming.*",[128,428,429,430]],["empire-anime.com",[128,428,429,430]],["empire-streamz.fr",[128,428,429,430]],["empire-stream.*",[128,428,429,430]],["pickcrackpasswords.blogspot.com",129],["kfrfansub.com",130],["thuglink.com",130],["voipreview.org",130],["illicoporno.com",131],["lavoixdux.com",131],["tonpornodujour.com",131],["jacquieetmichel.net",131],["swame.com",131],["vosfemmes.com",131],["voyeurfrance.net",131],["jacquieetmicheltv.net",[131,489,490]],["hanime.tv",132],["pogo.com",133],["cloudvideo.tv",134],["legionjuegos.org",135],["legionpeliculas.org",135],["legionprogramas.org",135],["16honeys.com",136],["elespanol.com",137],["remodelista.com",138],["coolmathgames.com",[139,140,141,593]],["audiofanzine.com",142],["uploadev.*",143],["hitokin.net",144],["developerinsider.co",145],["ilprimatonazionale.it",146],["hotabis.com",146],["root-nation.com",146],["italpress.com",146],["airsoftmilsimnews.com",146],["artribune.com",146],["thehindu.com",147],["cambro.tv",[148,149]],["boobsradar.com",[149,251,549]],["nibelungen-kurier.de",150],["ver-pelis-online.*",151],["adfoc.us",152],["tea-coffee.net",152],["spatsify.com",152],["newedutopics.com",152],["getviralreach.in",152],["edukaroo.com",152],["funkeypagali.com",152],["careersides.com",152],["nayisahara.com",152],["wikifilmia.com",152],["infinityskull.com",152],["viewmyknowledge.com",152],["iisfvirtual.in",152],["starxinvestor.com",152],["jkssbalerts.com",152],["sahlmarketing.net",152],["filmypoints.in",152],["fitnessholic.net",152],["moderngyan.com",152],["sattakingcharts.in",152],["freshbhojpuri.com",152],["bankshiksha.in",152],["earn.mpscstudyhub.com",152],["earn.quotesopia.com",152],["money.quotesopia.com",152],["best-mobilegames.com",152],["learn.moderngyan.com",152],["bharatsarkarijobalert.com",152],["quotesopia.com",152],["creditsgoal.com",152],["bgmi32bitapk.in",152],["techacode.com",152],["trickms.com",152],["ielts-isa.edu.vn",152],["loan.punjabworks.com",152],["rokni.xyz",152],["keedabankingnews.com",152],["sptfy.be",152],["mcafee-com.com",[152,226]],["pianetamountainbike.it",153],["barchart.com",154],["modelisme.com",155],["parasportontario.ca",155],["prescottenews.com",155],["nrj-play.fr",156],["hackingwithreact.com",157],["gutekueche.at",158],["eplfootballmatch.com",159],["ancient-origins.*",159],["peekvids.com",160],["playvids.com",160],["pornflip.com",160],["redensarten-index.de",161],["vw-page.com",162],["viz.com",[163,164]],["0rechner.de",165],["configspc.com",166],["xopenload.me",166],["uptobox.com",166],["uptostream.com",166],["japgay.com",167],["mega-debrid.eu",168],["dreamdth.com",169],["diaridegirona.cat",171],["diariodeibiza.es",171],["diariodemallorca.es",171],["diarioinformacion.com",171],["eldia.es",171],["emporda.info",171],["farodevigo.es",171],["laopinioncoruna.es",171],["laopiniondemalaga.es",171],["laopiniondemurcia.es",171],["laopiniondezamora.es",171],["laprovincia.es",171],["levante-emv.com",171],["mallorcazeitung.es",171],["regio7.cat",171],["superdeporte.es",171],["playpaste.com",172],["cnbc.com",173],["primevideo.com",174],["read.amazon.*",[174,560]],["firefaucet.win",175],["74k.io",[176,177]],["fullhdxxx.com",179],["pornclassic.tube",180],["tubepornclassic.com",180],["etonline.com",181],["creatur.io",181],["lookcam.*",181],["drphil.com",181],["urbanmilwaukee.com",181],["lootlinks.*",181],["ontiva.com",181],["hideandseek.world",181],["myabandonware.com",181],["kendam.com",181],["wttw.com",181],["synonyms.com",181],["definitions.net",181],["hostmath.com",181],["camvideoshub.com",181],["minhaconexao.com.br",181],["home-made-videos.com",183],["amateur-couples.com",183],["slutdump.com",183],["dpstream.*",184],["produsat.com",185],["bluemediafiles.*",186],["12thman.com",187],["acusports.com",187],["atlantic10.com",187],["auburntigers.com",187],["baylorbears.com",187],["bceagles.com",187],["bgsufalcons.com",187],["big12sports.com",187],["bigten.org",187],["bradleybraves.com",187],["butlersports.com",187],["cmumavericks.com",187],["conferenceusa.com",187],["cyclones.com",187],["dartmouthsports.com",187],["daytonflyers.com",187],["dbupatriots.com",187],["dbusports.com",187],["denverpioneers.com",187],["fduknights.com",187],["fgcuathletics.com",187],["fightinghawks.com",187],["fightingillini.com",187],["floridagators.com",187],["friars.com",187],["friscofighters.com",187],["gamecocksonline.com",187],["goarmywestpoint.com",187],["gobison.com",187],["goblueraiders.com",187],["gobobcats.com",187],["gocards.com",187],["gocreighton.com",187],["godeacs.com",187],["goexplorers.com",187],["goetbutigers.com",187],["gofrogs.com",187],["gogriffs.com",187],["gogriz.com",187],["golobos.com",187],["gomarquette.com",187],["gopack.com",187],["gophersports.com",187],["goprincetontigers.com",187],["gopsusports.com",187],["goracers.com",187],["goshockers.com",187],["goterriers.com",187],["gotigersgo.com",187],["gousfbulls.com",187],["govandals.com",187],["gowyo.com",187],["goxavier.com",187],["gozags.com",187],["gozips.com",187],["griffinathletics.com",187],["guhoyas.com",187],["gwusports.com",187],["hailstate.com",187],["hamptonpirates.com",187],["hawaiiathletics.com",187],["hokiesports.com",187],["huskers.com",187],["icgaels.com",187],["iuhoosiers.com",187],["jsugamecocksports.com",187],["longbeachstate.com",187],["loyolaramblers.com",187],["lrtrojans.com",187],["lsusports.net",187],["morrisvillemustangs.com",187],["msuspartans.com",187],["muleriderathletics.com",187],["mutigers.com",187],["navysports.com",187],["nevadawolfpack.com",187],["niuhuskies.com",187],["nkunorse.com",187],["nuhuskies.com",187],["nusports.com",187],["okstate.com",187],["olemisssports.com",187],["omavs.com",187],["ovcsports.com",187],["owlsports.com",187],["purduesports.com",187],["redstormsports.com",187],["richmondspiders.com",187],["sfajacks.com",187],["shupirates.com",187],["siusalukis.com",187],["smcgaels.com",187],["smumustangs.com",187],["soconsports.com",187],["soonersports.com",187],["themw.com",187],["tulsahurricane.com",187],["txst.com",187],["txstatebobcats.com",187],["ubbulls.com",187],["ucfknights.com",187],["ucirvinesports.com",187],["uconnhuskies.com",187],["uhcougars.com",187],["uicflames.com",187],["umterps.com",187],["uncwsports.com",187],["unipanthers.com",187],["unlvrebels.com",187],["uoflsports.com",187],["usdtoreros.com",187],["utahstateaggies.com",187],["utepathletics.com",187],["utrockets.com",187],["uvmathletics.com",187],["uwbadgers.com",187],["villanova.com",187],["wkusports.com",187],["wmubroncos.com",187],["woffordterriers.com",187],["1pack1goal.com",187],["bcuathletics.com",187],["bubraves.com",187],["goblackbears.com",187],["golightsgo.com",187],["gomcpanthers.com",187],["goutsa.com",187],["mercerbears.com",187],["pirateblue.com",187],["pirateblue.net",187],["pirateblue.org",187],["quinnipiacbobcats.com",187],["towsontigers.com",187],["tribeathletics.com",187],["tribeclub.com",187],["utepminermaniacs.com",187],["utepminers.com",187],["wkutickets.com",187],["aopathletics.org",187],["atlantichockeyonline.com",187],["bigsouthnetwork.com",187],["bigsouthsports.com",187],["chawomenshockey.com",187],["dbupatriots.org",187],["drakerelays.org",187],["ecac.org",187],["ecacsports.com",187],["emueagles.com",187],["emugameday.com",187],["gculopes.com",187],["godrakebulldog.com",187],["godrakebulldogs.com",187],["godrakebulldogs.net",187],["goeags.com",187],["goislander.com",187],["goislanders.com",187],["gojacks.com",187],["gomacsports.com",187],["gseagles.com",187],["hubison.com",187],["iowaconference.com",187],["ksuowls.com",187],["lonestarconference.org",187],["mascac.org",187],["midwestconference.org",187],["mountaineast.org",187],["niu-pack.com",187],["nulakers.ca",187],["oswegolakers.com",187],["ovcdigitalnetwork.com",187],["pacersports.com",187],["rmacsports.org",187],["rollrivers.com",187],["samfordsports.com",187],["uncpbraves.com",187],["usfdons.com",187],["wiacsports.com",187],["alaskananooks.com",187],["broncathleticfund.com",187],["cameronaggies.com",187],["columbiacougars.com",187],["etownbluejays.com",187],["gobadgers.ca",187],["golancers.ca",187],["gometrostate.com",187],["gothunderbirds.ca",187],["kentstatesports.com",187],["lehighsports.com",187],["lopers.com",187],["lycoathletics.com",187],["lycomingathletics.com",187],["maraudersports.com",187],["mauiinvitational.com",187],["msumavericks.com",187],["nauathletics.com",187],["nueagles.com",187],["nwusports.com",187],["oceanbreezenyc.org",187],["patriotathleticfund.com",187],["pittband.com",187],["principiaathletics.com",187],["roadrunnersathletics.com",187],["sidearmsocial.com",187],["snhupenmen.com",187],["stablerarena.com",187],["stoutbluedevils.com",187],["uwlathletics.com",187],["yumacs.com",187],["collegefootballplayoff.com",187],["csurams.com",187],["cubuffs.com",187],["gobearcats.com",187],["gohuskies.com",187],["mgoblue.com",187],["osubeavers.com",187],["pittsburghpanthers.com",187],["rolltide.com",187],["texassports.com",187],["thesundevils.com",187],["uclabruins.com",187],["wvuathletics.com",187],["wvusports.com",187],["arizonawildcats.com",187],["calbears.com",187],["cuse.com",187],["georgiadogs.com",187],["goducks.com",187],["goheels.com",187],["gostanford.com",187],["insidekstatesports.com",187],["insidekstatesports.info",187],["insidekstatesports.net",187],["insidekstatesports.org",187],["k-stateathletics.com",187],["k-statefootball.net",187],["k-statefootball.org",187],["k-statesports.com",187],["k-statesports.net",187],["k-statesports.org",187],["k-statewomenshoops.com",187],["k-statewomenshoops.net",187],["k-statewomenshoops.org",187],["kstateathletics.com",187],["kstatefootball.net",187],["kstatefootball.org",187],["kstatesports.com",187],["kstatewomenshoops.com",187],["kstatewomenshoops.net",187],["kstatewomenshoops.org",187],["ksuathletics.com",187],["ksusports.com",187],["scarletknights.com",187],["showdownforrelief.com",187],["syracusecrunch.com",187],["texastech.com",187],["theacc.com",187],["ukathletics.com",187],["usctrojans.com",187],["utahutes.com",187],["utsports.com",187],["wsucougars.com",187],["vidlii.com",[187,212]],["tricksplit.io",187],["fangraphs.com",188],["stern.de",189],["geo.de",189],["brigitte.de",189],["tvspielfilm.de",[190,191,192,193]],["tvtoday.de",[190,191,192,193]],["chip.de",[190,191,192,193]],["focus.de",[190,191,192,193]],["fitforfun.de",[190,191,192,193]],["n-tv.de",194],["player.rtl2.de",195],["planetaminecraft.com",196],["cravesandflames.com",197],["codesnse.com",197],["flyad.vip",197],["lapresse.ca",198],["kolyoom.com",199],["ilovephd.com",199],["negumo.com",200],["games.wkb.jp",[201,202]],["fandom.com",[203,610,611]],["kenshi.fandom.com",204],["hausbau-forum.de",205],["homeairquality.org",205],["faucettronn.click",205],["fake-it.ws",206],["laksa19.github.io",207],["1shortlink.com",208],["u-s-news.com",209],["luscious.net",210],["makemoneywithurl.com",211],["junkyponk.com",211],["healthfirstweb.com",211],["vocalley.com",211],["yogablogfit.com",211],["howifx.com",[211,396]],["en.financerites.com",211],["mythvista.com",211],["livenewsflix.com",211],["cureclues.com",211],["apekite.com",211],["enit.in",211],["iammagnus.com",212],["dailyvideoreports.net",212],["unityassets4free.com",212],["docer.*",213],["resetoff.pl",213],["sexodi.com",213],["cdn77.org",214],["3sexporn.com",215],["momxxxsex.com",215],["myfreevintageporn.com",215],["penisbuyutucum.net",215],["ujszo.com",216],["newsmax.com",217],["nadidetarifler.com",218],["siz.tv",218],["suzylu.co.uk",[219,220]],["onworks.net",221],["yabiladi.com",221],["downloadsoft.net",222],["newsobserver.com",223],["arkadiumhosted.com",223],["testlanguages.com",224],["newsinlevels.com",224],["videosinlevels.com",224],["bookmystrip.com",225],["sabkiyojana.com",225],["starkroboticsfrc.com",226],["sinonimos.de",226],["antonimos.de",226],["quesignifi.ca",226],["tiktokrealtime.com",226],["tiktokcounter.net",226],["tpayr.xyz",226],["poqzn.xyz",226],["ashrfd.xyz",226],["rezsx.xyz",226],["tryzt.xyz",226],["ashrff.xyz",226],["rezst.xyz",226],["dawenet.com",226],["erzar.xyz",226],["waezm.xyz",226],["waezg.xyz",226],["blackwoodacademy.org",226],["cryptednews.space",226],["vivuq.com",226],["swgop.com",226],["vbnmll.com",226],["telcoinfo.online",226],["dshytb.com",226],["btcbitco.in",[226,230]],["btcsatoshi.net",226],["cempakajaya.com",226],["crypto4yu.com",226],["readbitcoin.org",226],["wiour.com",226],["finish.addurl.biz",226],["aiimgvlog.fun",[226,233]],["laweducationinfo.com",226],["savemoneyinfo.com",226],["worldaffairinfo.com",226],["godstoryinfo.com",226],["successstoryinfo.com",226],["cxissuegk.com",226],["learnmarketinfo.com",226],["bhugolinfo.com",226],["armypowerinfo.com",226],["rsadnetworkinfo.com",226],["rsinsuranceinfo.com",226],["rsfinanceinfo.com",226],["rsgamer.app",226],["rssoftwareinfo.com",226],["rshostinginfo.com",226],["rseducationinfo.com",226],["phonereviewinfo.com",226],["makeincomeinfo.com",226],["gknutshell.com",226],["vichitrainfo.com",226],["workproductivityinfo.com",226],["dopomininfo.com",226],["hostingdetailer.com",226],["fitnesssguide.com",226],["tradingfact4u.com",226],["cryptofactss.com",226],["softwaredetail.com",226],["artoffocas.com",226],["insurancesfact.com",226],["travellingdetail.com",226],["advertisingexcel.com",226],["allcryptoz.net",226],["batmanfactor.com",226],["beautifulfashionnailart.com",226],["crewbase.net",226],["documentaryplanet.xyz",226],["crewus.net",226],["gametechreviewer.com",226],["midebalonu.net",226],["misterio.ro",226],["phineypet.com",226],["seory.xyz",226],["shinbhu.net",226],["shinchu.net",226],["substitutefor.com",226],["talkforfitness.com",226],["thefitbrit.co.uk",226],["thumb8.net",226],["thumb9.net",226],["topcryptoz.net",226],["uniqueten.net",226],["ultraten.net",226],["exactpay.online",226],["quins.us",226],["kiddyearner.com",226],["imagereviser.com",227],["tech.pubghighdamage.com",228],["tech.techkhulasha.com",228],["hipsonyc.com",228],["jiocinema.com",228],["rapid-cloud.co",228],["uploadmall.com",228],["rkd3.dev",228],["4funbox.com",229],["nephobox.com",229],["1024tera.com",229],["terabox.*",229],["blog.cryptowidgets.net",230],["blog.insurancegold.in",230],["blog.wiki-topia.com",230],["blog.coinsvalue.net",230],["blog.cookinguide.net",230],["blog.freeoseocheck.com",230],["blog24.me",230],["bildirim.*",232],["arahdrive.com",233],["appsbull.com",234],["diudemy.com",234],["maqal360.com",[234,235,236]],["lifesurance.info",237],["akcartoons.in",238],["cybercityhelp.in",238],["infokeeda.xyz",239],["webzeni.com",239],["dl.apkmoddone.com",240],["phongroblox.com",240],["apkmodvn.com",241],["fuckingfast.net",242],["streamelements.com",243],["share.hntv.tv",[243,679,680,681]],["forum.dji.com",[243,681]],["unionpayintl.com",[243,680]],["tickhosting.com",244],["in91vip.win",245],["datavaults.co",246],["kicker.de",[247,640]],["t-online.de",248],["upornia.*",[249,250]],["bobs-tube.com",251],["pornohirsch.net",252],["pixsera.net",253],["pc-builds.com",254],["qtoptens.com",254],["reuters.com",254],["today.com",254],["videogamer.com",254],["wrestlinginc.com",254],["gbatemp.net",254],["usatoday.com",[255,719]],["ydr.com",255],["indiatimes.com",256],["netzwelt.de",257],["arcade.buzzrtv.com",258],["arcade.dailygazette.com",258],["arcade.lemonde.fr",258],["arena.gamesforthebrain.com",258],["bestpuzzlesandgames.com",258],["cointiply.arkadiumarena.com",258],["gamelab.com",258],["games.abqjournal.com",258],["games.amny.com",258],["games.bellinghamherald.com",258],["games.besthealthmag.ca",258],["games.bnd.com",258],["games.boston.com",258],["games.bostonglobe.com",258],["games.bradenton.com",258],["games.centredaily.com",258],["games.charlotteobserver.com",258],["games.cnhinews.com",258],["games.crosswordgiant.com",258],["games.dailymail.co.uk",258],["games.dallasnews.com",258],["games.daytondailynews.com",258],["games.denverpost.com",258],["games.everythingzoomer.com",258],["games.fresnobee.com",258],["games.gameshownetwork.com",258],["games.get.tv",258],["games.greatergood.com",258],["games.heraldonline.com",258],["games.heraldsun.com",258],["games.idahostatesman.com",258],["games.insp.com",258],["games.islandpacket.com",258],["games.journal-news.com",258],["games.kansas.com",258],["games.kansascity.com",258],["games.kentucky.com",258],["games.lancasteronline.com",258],["games.ledger-enquirer.com",258],["games.macon.com",258],["games.mashable.com",258],["games.mercedsunstar.com",258],["games.metro.us",258],["games.metv.com",258],["games.miamiherald.com",258],["games.modbee.com",258],["games.moviestvnetwork.com",258],["games.myrtlebeachonline.com",258],["games.nationalreview.com",258],["games.newsobserver.com",258],["games.parade.com",258],["games.pressdemocrat.com",258],["games.puzzlebaron.com",258],["games.puzzler.com",258],["games.puzzles.ca",258],["games.qns.com",258],["games.readersdigest.ca",258],["games.sacbee.com",258],["games.sanluisobispo.com",258],["games.sixtyandme.com",258],["games.sltrib.com",258],["games.springfieldnewssun.com",258],["games.star-telegram.com",258],["games.startribune.com",258],["games.sunherald.com",258],["games.theadvocate.com",258],["games.thenewstribune.com",258],["games.theolympian.com",258],["games.theportugalnews.com",258],["games.thestar.com",258],["games.thestate.com",258],["games.tri-cityherald.com",258],["games.triviatoday.com",258],["games.usnews.com",258],["games.word.tips",258],["games.wordgenius.com",258],["games.wtop.com",258],["jeux.meteocity.com",258],["juegos.as.com",258],["juegos.elnuevoherald.com",258],["juegos.elpais.com",258],["philly.arkadiumarena.com",258],["play.dictionary.com",258],["puzzles.bestforpuzzles.com",258],["puzzles.centralmaine.com",258],["puzzles.crosswordsolver.org",258],["puzzles.independent.co.uk",258],["puzzles.nola.com",258],["puzzles.pressherald.com",258],["puzzles.standard.co.uk",258],["puzzles.sunjournal.com",258],["arkadium.com",259],["arcai.com",260],["my-code4you.blogspot.com",261],["flickr.com",262],["firefile.cc",263],["pestleanalysis.com",263],["kochamjp.pl",263],["tutorialforlinux.com",263],["whatsaero.com",263],["animeblkom.net",[263,277]],["blkom.com",263],["globes.co.il",[264,265]],["jardiner-malin.fr",266],["tw-calc.net",267],["ohmybrush.com",268],["talkceltic.net",269],["mentalfloss.com",270],["uprafa.com",271],["cube365.net",272],["wwwfotografgotlin.blogspot.com",273],["freelistenonline.com",273],["badassdownloader.com",274],["quickporn.net",275],["yellowbridge.com",276],["aosmark.com",278],["ctrlv.*",279],["atozmath.com",[280,281,282,283,284,285,286]],["newyorker.com",287],["brighteon.com",288],["more.tv",289],["video1tube.com",290],["alohatube.xyz",290],["4players.de",291],["onlinesoccermanager.com",291],["fshost.me",292],["link.cgtips.org",293],["hentaicloud.com",294],["netfapx.com",296],["javdragon.org",296],["javneon.tv",296],["paperzonevn.com",297],["fztvseries.ng",298],["hentaienglish.com",299],["hentaiporno.xxx",299],["venge.io",[300,301]],["btcbux.io",302],["its.porn",[303,304]],["atv.at",305],["2ndrun.tv",306],["rackusreads.com",306],["teachmemicro.com",306],["willcycle.com",306],["kusonime.com",[307,308]],["123movieshd.*",309],["imgur.com",[310,311,570]],["hentai-party.com",312],["hentaicomics.pro",312],["xxx-comics.pro",312],["uproxy.*",313],["animesa.*",314],["subtitle.one",315],["subtitleone.cc",315],["genshinimpactcalculator.com",316],["mysexgames.com",317],["cinecalidad.*",[318,319]],["embed.indavideo.hu",320],["xnxx.com",321],["xvideos.*",321],["gdr-online.com",322],["mmm.dk",323],["iqiyi.com",[324,325,460]],["m.iqiyi.com",326],["nbcolympics.com",327],["apkhex.com",328],["indiansexstories2.net",329],["issstories.xyz",329],["1340kbbr.com",330],["gorgeradio.com",330],["kduk.com",330],["kedoam.com",330],["kejoam.com",330],["kelaam.com",330],["khsn1230.com",330],["kjmx.rocks",330],["kloo.com",330],["klooam.com",330],["klykradio.com",330],["kmed.com",330],["kmnt.com",330],["kool991.com",330],["kpnw.com",330],["kppk983.com",330],["krktcountry.com",330],["ktee.com",330],["kwro.com",330],["kxbxfm.com",330],["thevalley.fm",330],["quizlet.com",331],["dsocker1234.blogspot.com",332],["schoolcheats.net",[333,334]],["mgnet.xyz",335],["japopav.tv",336],["lvturbo.com",336],["designtagebuch.de",337],["pixroute.com",338],["uploady.io",339],["calculator-online.net",340],["luckydice.net",341],["adarima.org",341],["weatherwx.com",341],["sattaguess.com",341],["winshell.de",341],["rosasidan.ws",341],["modmakers.xyz",341],["gamepure.in",341],["warrenrahul.in",341],["austiblox.net",341],["upiapi.in",341],["daemonanime.net",341],["networkhint.com",341],["thichcode.net",341],["texturecan.com",341],["tikmate.app",[341,468]],["arcaxbydz.id",341],["quotesshine.com",341],["porngames.club",342],["sexgames.xxx",342],["111.90.159.132",343],["mobile-tracker-free.com",344],["pfps.gg",345],["social-unlock.com",346],["superpsx.com",347],["ninja.io",348],["sourceforge.net",349],["samfirms.com",350],["rapelust.com",351],["vtube.to",351],["vtplay.net",351],["desitelugusex.com",351],["dvdplay.*",351],["xvideos-downloader.net",351],["xxxvideotube.net",351],["sdefx.cloud",351],["nozomi.la",351],["moviesonlinefree.net",351],["banned.video",352],["madmaxworld.tv",352],["androidpolice.com",352],["babygaga.com",352],["backyardboss.net",352],["carbuzz.com",352],["cbr.com",352],["collider.com",352],["dualshockers.com",352],["footballfancast.com",352],["footballleagueworld.co.uk",352],["gamerant.com",352],["givemesport.com",352],["hardcoregamer.com",352],["hotcars.com",352],["howtogeek.com",352],["makeuseof.com",352],["moms.com",352],["movieweb.com",352],["pocket-lint.com",352],["pocketnow.com",352],["screenrant.com",352],["simpleflying.com",352],["thegamer.com",352],["therichest.com",352],["thesportster.com",352],["thethings.com",352],["thetravel.com",352],["topspeed.com",352],["xda-developers.com",352],["huffpost.com",353],["ingles.com",354],["spanishdict.com",354],["surfline.com",[355,356]],["play.tv3.ee",357],["play.tv3.lt",357],["play.tv3.lv",[357,358]],["tv3play.skaties.lv",357],["trendyoum.com",359],["bulbagarden.net",360],["hollywoodlife.com",361],["mat6tube.com",362],["textstudio.co",363],["newtumbl.com",364],["apkmaven.*",365],["aruble.net",366],["nevcoins.club",367],["mail.com",368],["gmx.*",369],["oggi.it",[371,372]],["manoramamax.com",371],["video.gazzetta.it",[371,372]],["mangakita.id",373],["avpgalaxy.net",374],["mhma12.tech",375],["panda-novel.com",376],["zebranovel.com",376],["lightsnovel.com",376],["eaglesnovel.com",376],["pandasnovel.com",376],["ewrc-results.com",377],["kizi.com",378],["cyberscoop.com",379],["fedscoop.com",379],["canale.live",380],["jeep-cj.com",381],["sponsorhunter.com",382],["cloudcomputingtopics.net",383],["likecs.com",384],["tiscali.it",385],["linkspy.cc",386],["adshnk.com",387],["chattanoogan.com",388],["adsy.pw",389],["playstore.pw",389],["socialmediagirls.com",390],["windowspro.de",391],["snapinst.app",392],["tvtv.ca",393],["tvtv.us",393],["mydaddy.cc",394],["roadtrippin.fr",395],["vavada5com.com",396],["anyporn.com",[397,414]],["bravoporn.com",397],["bravoteens.com",397],["crocotube.com",397],["hellmoms.com",397],["hellporno.com",397],["sex3.com",397],["tubewolf.com",397],["xbabe.com",397],["xcum.com",397],["zedporn.com",397],["imagetotext.info",398],["infokik.com",399],["freepik.com",400],["ddwloclawek.pl",[401,402]],["www.seznam.cz",403],["deezer.com",[404,717,718]],["my-subs.co",405],["plaion.com",406],["slideshare.net",[407,408]],["ustreasuryyieldcurve.com",409],["businesssoftwarehere.com",410],["goo.st",410],["freevpshere.com",410],["softwaresolutionshere.com",410],["gamereactor.*",412],["madoohd.com",413],["doomovie-hd.*",413],["staige.tv",415],["androidadult.com",416],["streamvid.net",417],["watchtv24.com",418],["cellmapper.net",419],["medscape.com",420],["newscon.org",[421,422]],["wheelofgold.com",423],["drakecomic.*",423],["bembed.net",424],["embedv.net",424],["fslinks.org",424],["listeamed.net",424],["v6embed.xyz",424],["vembed.*",424],["vgplayer.xyz",424],["vid-guard.com",424],["vinomo.xyz",424],["app.blubank.com",425],["mobileweb.bankmellat.ir",425],["sportdeutschland.tv",426],["kcra.com",426],["wcvb.com",426],["chat.nrj.fr",427],["chat.tchatche.com",[427,442]],["ccthesims.com",434],["chromeready.com",434],["coursedrive.org",434],["dtbps3games.com",434],["illustratemagazine.com",434],["uknip.co.uk",434],["vod.pl",435],["megadrive-emulator.com",436],["tvhay.*",[437,438]],["animesaga.in",439],["moviesapi.club",439],["bestx.stream",439],["watchx.top",439],["digimanie.cz",440],["svethardware.cz",440],["srvy.ninja",441],["cnn.com",[443,444,445]],["edmdls.com",446],["freshremix.net",446],["scenedl.org",446],["trakt.tv",447],["client.falixnodes.net",[448,449]],["shroomers.app",450],["classicalradio.com",451],["di.fm",451],["jazzradio.com",451],["radiotunes.com",451],["rockradio.com",451],["zenradio.com",451],["getthit.com",452],["techedubyte.com",453],["soccerinhd.com",453],["movie-th.tv",454],["iwanttfc.com",455],["nutraingredients-asia.com",456],["nutraingredients-latam.com",456],["nutraingredients-usa.com",456],["nutraingredients.com",456],["ozulscansen.com",457],["nexusmods.com",458],["lookmovie.*",459],["lookmovie2.to",459],["biletomat.pl",461],["hextank.io",[462,463]],["filmizlehdfilm.com",[464,465,466,467]],["filmizletv.*",[464,465,466,467]],["fullfilmizle.cc",[464,465,466,467]],["gofilmizle.net",[464,465,466,467]],["btvplus.bg",469],["sagewater.com",470],["redlion.net",470],["filmweb.pl",[471,472]],["satdl.com",473],["vidstreaming.xyz",474],["everand.com",475],["myradioonline.pl",476],["cbs.com",477],["paramountplus.com",477],["abysscdn.com",[478,479]],["fullxh.com",480],["galleryxh.site",480],["megaxh.com",480],["movingxh.world",480],["seexh.com",480],["unlockxh4.com",480],["valuexh.life",480],["xhaccess.com",480],["xhadult2.com",480],["xhadult3.com",480],["xhadult4.com",480],["xhadult5.com",480],["xhamster.*",480],["xhamster1.*",480],["xhamster10.*",480],["xhamster11.*",480],["xhamster12.*",480],["xhamster13.*",480],["xhamster14.*",480],["xhamster15.*",480],["xhamster16.*",480],["xhamster17.*",480],["xhamster18.*",480],["xhamster19.*",480],["xhamster20.*",480],["xhamster2.*",480],["xhamster3.*",480],["xhamster4.*",480],["xhamster42.*",480],["xhamster46.com",480],["xhamster5.*",480],["xhamster7.*",480],["xhamster8.*",480],["xhamsterporno.mx",480],["xhbig.com",480],["xhbranch5.com",480],["xhchannel.com",480],["xhdate.world",480],["xhday.com",480],["xhday1.com",480],["xhlease.world",480],["xhmoon5.com",480],["xhofficial.com",480],["xhopen.com",480],["xhplanet1.com",480],["xhplanet2.com",480],["xhreal2.com",480],["xhreal3.com",480],["xhspot.com",480],["xhtotal.com",480],["xhtree.com",480],["xhvictory.com",480],["xhwebsite.com",480],["xhwebsite2.com",480],["xhwebsite5.com",480],["xhwide1.com",480],["xhwide2.com",480],["xhwide5.com",480],["file-upload.net",482],["lightnovelworld.*",483],["acortalo.*",[484,485,486,487]],["acortar.*",[484,485,486,487]],["megadescarga.net",[484,485,486,487]],["megadescargas.net",[484,485,486,487]],["hentaihaven.xxx",488],["jacquieetmicheltv2.net",490],["a2zapk.*",491],["fcportables.com",[492,493]],["emurom.net",494],["freethesaurus.com",[495,496]],["thefreedictionary.com",[495,496]],["oeffentlicher-dienst.info",497],["im9.eu",498],["dcdlplayer8a06f4.xyz",499],["ultimate-guitar.com",500],["claimbits.net",501],["sexyscope.net",502],["kickassanime.*",503],["recherche-ebook.fr",504],["virtualdinerbot.com",504],["zonebourse.com",505],["pink-sluts.net",506],["andhrafriends.com",507],["benzinpreis.de",508],["turtleviplay.xyz",509],["defenseone.com",510],["govexec.com",510],["nextgov.com",510],["route-fifty.com",510],["sharing.wtf",511],["wetter3.de",512],["esportivos.fun",513],["cosmonova-broadcast.tv",514],["hartvannederland.nl",515],["shownieuws.nl",515],["vandaaginside.nl",515],["rock.porn",[516,517]],["videzz.net",[518,519]],["ezaudiobookforsoul.com",520],["club386.com",521],["littlebigsnake.com",522],["easyfun.gg",523],["smailpro.com",524],["ilgazzettino.it",525],["ilmessaggero.it",525],["3bmeteo.com",[526,527]],["mconverter.eu",528],["lover937.net",529],["10gb.vn",530],["pes6.es",531],["tactics.tools",[532,533]],["boundhub.com",534],["alocdnnetu.xyz",535],["reliabletv.me",536],["jakondo.ru",537],["filecrypt.*",538],["nolive.me",540],["wired.com",541],["spankbang.*",[542,543,544,572,573]],["anonymfile.com",545],["gofile.to",545],["dotycat.com",546],["rateyourmusic.com",547],["reporterpb.com.br",548],["blog-dnz.com",550],["18adultgames.com",551],["colnect.com",[552,553]],["adultgamesworld.com",554],["bgmiupdate.com.in",555],["reviewdiv.com",556],["parametric-architecture.com",557],["laurelberninteriors.com",[558,575]],["voiceofdenton.com",559],["concealednation.org",559],["askattest.com",561],["opensubtitles.com",562],["savefiles.com",563],["streamup.ws",564],["www.google.*",565],["tacobell.com",566],["zefoy.com",567],["cnet.com",568],["natgeotv.com",571],["globo.com",574],["wayfair.com",576],["br.de",577],["indeed.com",578],["pasteboard.co",579],["clickhole.com",580],["deadspin.com",580],["gizmodo.com",580],["jalopnik.com",580],["jezebel.com",580],["kotaku.com",580],["lifehacker.com",580],["splinternews.com",580],["theinventory.com",580],["theonion.com",580],["theroot.com",580],["thetakeout.com",580],["pewresearch.org",580],["los40.com",[581,582]],["as.com",582],["telegraph.co.uk",[583,584]],["poweredbycovermore.com",[583,633]],["lumens.com",[583,633]],["verizon.com",585],["humanbenchmark.com",586],["politico.com",587],["officedepot.co.cr",[588,589]],["officedepot.*",[590,591]],["usnews.com",592],["factable.com",594],["zee5.com",595],["gala.fr",596],["geo.fr",596],["voici.fr",596],["gloucestershirelive.co.uk",597],["arsiv.mackolik.com",598],["jacksonguitars.com",599],["scandichotels.com",600],["stylist.co.uk",601],["nettiauto.com",602],["thaiairways.com",[603,604]],["cerbahealthcare.it",[605,606]],["futura-sciences.com",[605,622]],["toureiffel.paris",605],["tiendaenlinea.claro.com.ni",[607,608]],["tieba.baidu.com",609],["grasshopper.com",[612,613]],["epson.com.cn",[614,615,616,617]],["oe24.at",[618,619]],["szbz.de",618],["platform.autods.com",[620,621]],["wikihow.com",623],["citibank.com.sg",624],["uol.com.br",[625,626,627,628,629]],["gazzetta.gr",630],["digicol.dpm.org.cn",[631,632]],["virginmediatelevision.ie",634],["larazon.es",[635,636]],["waitrosecellar.com",[637,638,639]],["sharpen-free-design-generator.netlify.app",[641,642]],["help.cashctrl.com",[643,644]],["gry-online.pl",645],["vidaextra.com",646],["commande.rhinov.pro",[647,648]],["ecom.wixapps.net",[647,648]],["tipranks.com",[649,650]],["iceland.co.uk",[651,652,653]],["socket.pearsoned.com",654],["tntdrama.com",[655,656]],["trutv.com",[655,656]],["mobile.de",[657,658]],["ioe.vn",[659,660]],["geiriadur.ac.uk",[659,663]],["welsh-dictionary.ac.uk",[659,663]],["bikeportland.org",[661,662]],["biologianet.com",[626,627,628]],["10play.com.au",[664,665]],["sunshine-live.de",[666,667]],["whatismyip.com",[668,669]],["myfitnesspal.com",670],["netoff.co.jp",[671,672]],["foundit.*",[673,674]],["clickjogos.com.br",675],["bristan.com",[676,677]],["zillow.com",678],["optimum.net",[682,683]],["hdfcfund.com",684],["user.guancha.cn",[685,686]],["sosovalue.com",687],["bandyforbundet.no",[688,689]],["tatacommunications.com",690],["suamusica.com.br",[691,692,693]],["macrotrends.net",[694,695]],["code.world",696],["smartcharts.net",696],["topgear.com",697],["eservice.directauto.com",[698,699]],["nbcsports.com",700],["standard.co.uk",701],["pruefernavi.de",[702,703]],["speedtest.net",[704,705]],["17track.net",706],["visible.com",[707,717,718]],["hagerty.com",[708,709]],["kino.de",[710,711]],["9now.nine.com.au",712],["worldstar.com",713],["prisjakt.no",714],["u26bekrb.fun",715],["pvpoke-re.com",716],["flyfrontier.com",[717,718]],["acmemarkets.com",[717,718]],["usaa.com",[717,718]],["capezio.com",[717,718]],["twitch.tv",[717,718]],["spotify.com",[717,718]],["tidal.com",[717,718]],["pandora.com",[717,718]],["qobuz.com",[717,718]],["soundcloud.com",[717,718]],["vimeo.com",[717,718]],["x.com",[717,718]],["twitter.com",[717,718]],["eventbrite.com",[717,718]],["wunderground.com",[717,718]],["accuweather.com",[717,718]],["formula1.com",[717,718]],["lenscrafters.com",[717,718]],["subway.com",[717,718]],["ticketmaster.*",[717,718]],["livewithkellyandmark.com",[717,718]],["porsche.com",[717,718]],["uber.com",[717,718]],["jdsports.com",[717,718]],["engadget.com",[717,718]],["yahoo.com",[717,718]],["techcrunch.com",[717,718]],["rivals.com",[717,718]],["kkrt.com",[717,718]],["crunchyroll.com",[717,718]],["dnb.com",[717,718]],["dnb.co.uk",[717,718]],["weather.com",[717,718]],["ubereats.com",[717,718]]]);
const exceptionsMap = new Map([["pingit.com",[18]],["pingit.me",[18]],["loan.bgmi32bitapk.in",[152]],["lookmovie.studio",[459]]]);
const hasEntities = true;
const hasAncestors = true;

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
