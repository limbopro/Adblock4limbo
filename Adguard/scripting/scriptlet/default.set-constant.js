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

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["console.clear","noopFunc"],["console.log","noopFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["console.clear","trueFunc"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["console.clear","undefined"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["String.prototype.charCodeAt","trueFunc"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["CaptchmeState.adb","undefined"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["HTMLAnchorElement.prototype.click","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["PlayerConfig.config.CustomAdSetting","[]"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["loadingAds","true"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["decodeURIComponent","trueFunc"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["cnbc.canShowAds","true"],["Adv_ab","false"],["firefaucet","true"],["cRAds","true"],["uas","[]"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["foundation.adPlayer.bitmovin","{}"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["Object.prototype.adReinsertion","noopFunc"],["getHomadConfig","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["ulp_noadb","true"],["Object.prototype.adblock_detected","false"],["timeSec","0"],["adsbygoogle.loaded","true"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["document.hidden","false"],["document.hasFocus","trueFunc"],["hasFocus","trueFunc"],["detectAdBlock","noopFunc"],["Object.prototype.isAllAdClose","true"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["navigator.webkitTemporaryStorage.queryUsageAndQuota","noopFunc"],["document.onkeydown","noopFunc"],["showadas","true"],["alert","throwFunc"],["app_vars.please_disable_adblock","undefined"],["iktimer","0"],["aSl.gcd","0"],["delayClick","false"],["counter","10"],["window.adLink","null"],["sensorsDataAnalytic201505","{}"],["detectedAdblock","undefined"],["isTabActive","true"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["showada","true"],["showax","true"],["p18","undefined"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["xv.sda.pp.init","noopFunc"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["isadb","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["ad_link",""],["penciBlocksArray","[]"],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["D4zz","noopFunc"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["objAd.loadAdShield","noopFunc"],["window.myAd.runAd","noopFunc"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["navigator.brave","undefined"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["sssp","emptyObj"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["adSettings","[]"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["myFunc","noopFunc"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["googletag","true"],["tOS2","150"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["checkAdBlocker","noopFunc"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["ShowAdvertising","{}"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["feedBack.showAffilaePromo","noopFunc"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["window.adngin","{}"],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["admiral","noopFunc"],["gnt.u.adfree","true"],["sharedController.adblockDetector","noopFunc"],["checkAdsStatus","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["blockingAds","false"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["powerAPITag","emptyObj"],["playerEnhancedConfig.run","throwFunc"],["aoAdBlockDetected","false"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["hasAdBlocker","false"],["document.ontouchend","null"],["document.onclick","null"],["initials.yld-pdpopunder",""],["advertisement3","true"],["importFAB","undefined"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["dvsize","52"],["majorse","true"],["completed","1"],["testerli","false"],["w87.abd","noopFunc"],["document.referrer",""],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["one_time","1"],["consentGiven","true"],["playID","1"],["openPopunder","noopFunc"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["ADS.isBannersEnabled","false"],["EASYFUN_ADS_CAN_RUN","true"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["detectedAdblock","noopFunc"],["Object.prototype.DetectByGoogleAd","noopFunc"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["NativeAd","noopFunc"],["Blob","noopFunc"],["window.navigator.brave","undefined"],["HTMLScriptElement.prototype.onerror","undefined"],["isAdblock","false"],["openPop","noopFunc"],["attachEvent","trueFunc"],["cns.library","true"],["BJSShowUnder","{}"],["BJSShowUnder.bindTo","noopFunc"],["BJSShowUnder.add","noopFunc"],["countDown","0"],["runCheck","noopFunc"],["adsSlotRenderEndSeen","true"],["showModal","noopFunc"],["flashvars.mlogo_link",""],["isAdBlocked","noopFunc"],["URLlist","[]"],["aaw","{}"],["aaw.processAdsOnPage","noopFunc"],["doOpen","undefined"],["HTMLImageElement.prototype.onerror","undefined"],["FOXIZ_MAIN_SCRIPT.siteAccessDetector","noopFunc"],["myMessage","noopFunc"],["browserMessage","noopFunc"],["openAdBlockPopup","noopFunc"],["Object.prototype._adsDisabled","true"],["rodo.checkIsDidomiConsent","noopFunc"],["rodo.waitForConsent","noopPromiseResolve"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["Object.prototype.updateModifiedCommerceUrl","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["Visitor","{}"],["send_gravity_event","noopFunc"],["send_recommendation_event","noopFunc"],["libAnalytics.data.get","noopFunc"],["adthrive._components.start","noopFunc"],["navigator.sendBeacon","noopFunc"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["Object.prototype.que","noopFunc"],["Object.prototype.que.push","noopFunc"],["ga.sendGaEvent","noopFunc"],["adobe","{}"],["MT","{}"],["MT.track","noopFunc"],["adex","{}"],["adex.getAdexUser","noopFunc"],["Adkit","noopFunc"],["adBlockDetected","undefined"],["Navigator.prototype.globalPrivacyControl","false"],["navigator.globalPrivacyControl","false"],["gnt.x.adm",""]];
const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3]],["music.youtube.com",[0,1,2,3]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["kicker.de",[4,639]],["t-online.de",5],["timesofindia.indiatimes.com",6],["economictimes.indiatimes.com",7],["motherless.com",8],["sueddeutsche.de",9],["watchanimesub.net",10],["wco.tv",10],["wcoanimesub.tv",10],["wcoforever.net",10],["freeviewmovies.com",10],["filehorse.com",10],["guidetnt.com",10],["starmusiq.*",10],["sp-today.com",10],["linkvertise.com",10],["eropaste.net",10],["getpaste.link",10],["sharetext.me",10],["wcofun.*",10],["note.sieuthuthuat.com",10],["elcriticodelatele.com",[10,302]],["gadgets.es",[10,302]],["amateurporn.co",[10,108]],["wiwo.de",11],["kissasian.*",12],["gogoanime.*",[12,47]],["1movies.*",[12,53]],["xmovies8.*",12],["masteranime.tv",12],["0123movies.*",12],["gostream.*",12],["gomovies.*",12],["primewire.*",13],["streanplay.*",[13,14]],["alphaporno.com",[13,395]],["porngem.com",13],["shortit.pw",[13,92]],["familyporn.tv",13],["sbplay.*",13],["id45.cyou",13],["85tube.com",[13,76]],["milfnut.*",13],["k1nk.co",13],["watchasians.cc",13],["soltoshindo.com",13],["sankakucomplex.com",15],["player.glomex.com",16],["merkur.de",16],["tz.de",16],["sxyprn.*",17],["hqq.*",[18,19]],["waaw.*",[19,20]],["hotpornfile.org",19],["player.tabooporns.com",19],["x69.ovh",19],["wiztube.xyz",19],["younetu.*",19],["multiup.us",19],["rpdrlatino.live",19],["peliculas8k.com",[19,20]],["video.q34r.org",19],["czxxx.org",19],["vtplayer.online",19],["vvtplayer.*",19],["netu.ac",19],["netu.frembed.lol",19],["dirtyvideo.fun",20],["adbull.org",21],["123link.*",21],["adshort.*",21],["mitly.us",21],["linkrex.net",21],["linx.cc",21],["oke.io",21],["linkshorts.*",21],["dz4link.com",21],["adsrt.*",21],["linclik.com",21],["shrt10.com",21],["vinaurl.*",21],["loptelink.com",21],["adfloz.*",21],["cut-fly.com",21],["linkfinal.com",21],["payskip.org",21],["cutpaid.com",21],["forexmab.com",21],["linkjust.com",21],["linkszia.co",21],["leechpremium.link",21],["icutlink.com",[21,113]],["oncehelp.com",21],["rgl.vn",21],["reqlinks.net",21],["bitlk.com",21],["qlinks.eu",21],["link.3dmili.com",21],["short-fly.com",21],["foxseotools.com",21],["dutchycorp.*",21],["shortearn.*",21],["pingit.*",21],["pngit.live",21],["link.turkdown.com",21],["urlty.com",21],["7r6.com",21],["oko.sh",21],["ckk.ai",21],["fc.lc",21],["fstore.biz",21],["shrink.*",21],["cuts-url.com",21],["eio.io",21],["exe.app",21],["exee.io",21],["exey.io",21],["skincarie.com",21],["exeo.app",21],["tmearn.*",21],["coinlyhub.com",[21,186]],["adsafelink.com",21],["aii.sh",21],["megalink.*",21],["cybertechng.com",[21,201]],["cutdl.xyz",21],["iir.ai",21],["shorteet.com",[21,221]],["miniurl.*",21],["smoner.com",21],["gplinks.*",21],["gyanlight.com",21],["xpshort.com",21],["upshrink.com",21],["enit.in",[21,216]],["clk.*",21],["ez4short.com",21],["easysky.in",21],["veganab.co",21],["adrinolinks.in",21],["go.bloggingaro.com",21],["go.gyanitheme.com",21],["go.theforyou.in",21],["go.hipsonyc.com",21],["birdurls.com",21],["vipurl.in",21],["try2link.com",21],["jameeltips.us",21],["gainl.ink",21],["promo-visits.site",21],["satoshi-win.xyz",[21,238]],["shorterall.com",21],["encurtandourl.com",21],["forextrader.site",21],["postazap.com",21],["cety.app",21],["exego.app",[21,233]],["cutlink.net",21],["cutsy.net",21],["cutyurls.com",21],["cutty.app",21],["cutnet.net",21],["jixo.online",21],["tinys.click",[21,201]],["cpm.icu",21],["panyshort.link",21],["enagato.com",21],["pandaznetwork.com",21],["tvi.la",21],["iir.la",21],["tii.la",21],["oei.la",21],["lnbz.la",[21,216]],["oii.la",[21,246]],["tpi.li",[21,246]],["recipestutorials.com",21],["pureshort.*",21],["shrinke.*",21],["shrinkme.*",21],["shrinkforearn.in",21],["techyuth.xyz",21],["oii.io",21],["du-link.in",21],["atglinks.com",21],["thotpacks.xyz",21],["megaurl.in",21],["megafly.in",21],["simana.online",21],["fooak.com",21],["joktop.com",21],["evernia.site",21],["falpus.com",21],["link.paid4link.com",[21,250]],["exalink.fun",21],["shortxlinks.com",21],["upfiles.app",21],["upfiles-urls.com",21],["flycutlink.com",[21,201]],["linksly.co",21],["link1s.*",21],["pkr.pw",21],["imagenesderopaparaperros.com",21],["shortenbuddy.com",21],["apksvip.com",21],["4cash.me",21],["namaidani.com",21],["shortzzy.*",21],["teknomuda.com",21],["shorttey.*",[21,185]],["miuiku.com",21],["savelink.site",21],["lite-link.*",21],["adcorto.*",21],["samaa-pro.com",21],["miklpro.com",21],["modapk.link",21],["ccurl.net",21],["linkpoi.me",21],["menjelajahi.com",21],["pewgame.com",21],["haonguyen.top",21],["zshort.*",21],["crazyblog.in",21],["gtlink.co",21],["cutearn.net",21],["rshrt.com",21],["filezipa.com",21],["dz-linkk.com",21],["upfiles.*",21],["theblissempire.com",21],["finanzas-vida.com",21],["adurly.cc",21],["paid4.link",21],["link.asiaon.top",21],["go.gets4link.com",21],["download.sharenulled.net",21],["linkfly.*",21],["beingtek.com",21],["shorturl.unityassets4free.com",21],["disheye.com",21],["techymedies.com",21],["techysuccess.com",21],["za.gl",[21,132]],["bblink.com",21],["myad.biz",21],["swzz.xyz",21],["vevioz.com",21],["charexempire.com",21],["clk.asia",21],["linka.click",21],["sturls.com",21],["myshrinker.com",21],["snowurl.com",[21,201]],["netfile.cc",21],["wplink.*",21],["rocklink.in",21],["techgeek.digital",21],["download3s.net",21],["shortx.net",21],["shortawy.com",21],["tlin.me",21],["apprepack.com",21],["up-load.one",21],["zuba.link",21],["golink.xaydungplus.com",21],["bestcash2020.com",21],["hoxiin.com",21],["go.linkbnao.com",21],["link-yz.com",21],["paylinnk.com",21],["thizissam.in",21],["ier.ai",21],["adslink.pw",21],["novelssites.com",21],["links.medipost.org",21],["faucetcrypto.net",21],["short.freeltc.top",21],["trxking.xyz",21],["weadown.com",21],["m.bloggingguidance.com",21],["blog.onroid.com",21],["link.codevn.net",21],["upfilesurls.com",21],["shareus.site",21],["link4rev.site",21],["c2g.at",21],["bitcosite.com",[21,409]],["cryptosh.pro",21],["link68.net",21],["traffic123.net",21],["windowslite.net",[21,201]],["viewfr.com",21],["cl1ca.com",21],["4br.me",21],["fir3.net",21],["seulink.*",21],["encurtalink.*",21],["kiddyshort.com",21],["watchmygf.me",[22,48]],["camwhores.*",[22,34,75,76,77]],["camwhorez.tv",[22,34,75,76]],["cambay.tv",[22,56,75,105,107,108,109,110]],["fpo.xxx",[22,56]],["sexemix.com",22],["heavyfetish.com",[22,568]],["thotcity.su",22],["viralxxxporn.com",[22,224]],["tube8.*",[23,24]],["you-porn.com",24],["youporn.*",24],["youporngay.com",24],["youpornru.com",24],["redtube.*",24],["9908ww.com",24],["adelaidepawnbroker.com",24],["bztube.com",24],["hotovs.com",24],["insuredhome.org",24],["nudegista.com",24],["pornluck.com",24],["vidd.se",24],["pornhub.*",[24,174]],["pornhub.com",24],["pornerbros.com",25],["freep.com",25],["upornia.*",[26,27]],["porn.com",28],["tune.pk",29],["noticias.gospelmais.com.br",30],["techperiod.com",30],["viki.com",[31,32]],["watch-series.*",33],["watchseries.*",33],["vev.*",33],["vidop.*",33],["vidup.*",33],["sleazyneasy.com",[34,35,36]],["smutr.com",[34,182]],["yourporngod.com",[34,35]],["javbangers.com",[34,292]],["camfox.com",34],["camthots.tv",[34,105]],["shegotass.info",34],["amateur8.com",34],["bigtitslust.com",34],["ebony8.com",34],["freeporn8.com",34],["lesbian8.com",34],["maturetubehere.com",34],["sortporn.com",34],["webcamvau.com",34],["motherporno.com",[34,35,56,107]],["tktube.com",34],["theporngod.com",[34,35]],["watchdirty.to",[34,76,77,108]],["pornsocket.com",37],["luxuretv.com",38],["porndig.com",[39,40]],["webcheats.com.br",41],["ceesty.com",[42,43]],["gestyy.com",[42,43]],["corneey.com",43],["destyy.com",43],["festyy.com",43],["sh.st",43],["mitaku.net",43],["angrybirdsnest.com",44],["zrozz.com",44],["clix4btc.com",44],["4tests.com",44],["business-standard.com",44],["goltelevision.com",44],["news-und-nachrichten.de",44],["laradiobbs.net",44],["urlaubspartner.net",44],["produktion.de",44],["cinemaxxl.de",44],["bladesalvador.com",44],["tempr.email",44],["cshort.org",44],["friendproject.net",44],["covrhub.com",44],["katfile.com",44],["trust.zone",44],["planetsuzy.org",45],["empflix.com",46],["alleneconomicmatter.com",47],["apinchcaseation.com",47],["bethshouldercan.com",47],["bigclatterhomesguideservice.com",47],["bradleyviewdoctor.com",47],["brittneystandardwestern.com",47],["brookethoughi.com",47],["brucevotewithin.com",47],["cindyeyefinal.com",47],["denisegrowthwide.com",47],["donaldlineelse.com",47],["edwardarriveoften.com",47],["erikcoldperson.com",47],["evelynthankregion.com",47],["graceaddresscommunity.com",47],["heatherdiscussionwhen.com",47],["housecardsummerbutton.com",47],["jamessoundcost.com",47],["jamesstartstudent.com",47],["jamiesamewalk.com",47],["jasminetesttry.com",47],["jasonresponsemeasure.com",47],["jayservicestuff.com",47],["jessicaglassauthor.com",47],["johntryopen.com",47],["josephseveralconcern.com",47],["kennethofficialitem.com",47],["lisatrialidea.com",47],["lorimuchbenefit.com",47],["loriwithinfamily.com",47],["lukecomparetwo.com",47],["markstyleall.com",47],["michaelapplysome.com",47],["morganoperationface.com",47],["nectareousoverelate.com",47],["paulkitchendark.com",47],["rebeccaneverbase.com",47],["roberteachfinal.com",47],["robertordercharacter.com",47],["robertplacespace.com",47],["ryanagoinvolve.com",47],["sandratableother.com",47],["sandrataxeight.com",47],["seanshowcould.com",47],["sethniceletter.com",47],["shannonpersonalcost.com",47],["sharonwhiledemocratic.com",47],["stevenimaginelittle.com",47],["strawberriesporail.com",47],["susanhavekeep.com",47],["timberwoodanotia.com",47],["tinycat-voe-fashion.com",47],["toddpartneranimal.com",47],["troyyourlead.com",47],["uptodatefinishconference.com",47],["uptodatefinishconferenceroom.com",47],["vincentincludesuccessful.com",47],["voe.sx",47],["maxfinishseveral.com",47],["motphimtv.com",47],["rabbitstream.net",47],["projectfreetv.one",47],["fmovies.*",47],["freeplayervideo.com",47],["nazarickol.com",47],["player-cdn.com",47],["playhydrax.com",[47,479,480]],["transparentcalifornia.com",48],["deepbrid.com",49],["webnovel.com",50],["streamwish.*",[51,52]],["videosgay.me",[51,52]],["oneupload.to",52],["wishfast.top",52],["rubystm.com",52],["rubyvid.com",52],["schwaebische.de",54],["8tracks.com",55],["3movs.com",56],["bravoerotica.net",[56,107]],["youx.xxx",56],["camclips.tv",[56,182]],["xtits.*",[56,107]],["camflow.tv",[56,107,108,153,224]],["camhoes.tv",[56,105,107,108,153,224]],["xmegadrive.com",56],["xxxymovies.com",56],["xxxshake.com",56],["gayck.com",56],["xhand.com",[56,107]],["analdin.com",[56,107]],["revealname.com",57],["pouvideo.*",58],["povvideo.*",58],["povw1deo.*",58],["povwideo.*",58],["powv1deo.*",58],["powvibeo.*",58],["powvideo.*",58],["powvldeo.*",58],["golfchannel.com",59],["telemundodeportes.com",59],["stream.nbcsports.com",59],["mathdf.com",59],["gamcore.com",60],["porcore.com",60],["porngames.tv",60],["69games.xxx",60],["javmix.app",60],["tecknity.com",61],["haaretz.co.il",62],["haaretz.com",62],["hungama.com",62],["a-o.ninja",62],["anime-odcinki.pl",62],["kumpulmanga.org",62],["shortgoo.blogspot.com",62],["tonanmedia.my.id",[62,432]],["yurasu.xyz",62],["isekaipalace.com",62],["plyjam.*",[63,64]],["ennovelas.com",[64,68]],["foxsports.com.au",65],["canberratimes.com.au",65],["thesimsresource.com",66],["fxporn69.*",67],["vipbox.*",68],["viprow.*",68],["ctrl.blog",69],["sportlife.es",70],["finofilipino.org",71],["desbloqueador.*",72],["xberuang.*",73],["teknorizen.*",73],["mysflink.blogspot.com",73],["assia.tv",74],["assia4.com",74],["assia24.com",74],["cwtvembeds.com",[76,106]],["camlovers.tv",76],["porntn.com",76],["pornissimo.org",76],["sexcams-24.com",[76,108]],["watchporn.to",[76,108]],["camwhorez.video",76],["footstockings.com",[76,77,108]],["xmateur.com",[76,77,108]],["multi.xxx",77],["worldofbitco.in",[78,79]],["weatherx.co.in",[78,79]],["getyourbitco.in",78],["sunbtc.space",78],["subtorrents.*",80],["subtorrents1.*",80],["newpelis.*",80],["pelix.*",80],["allcalidad.*",80],["infomaniakos.*",80],["ojogos.com.br",81],["powforums.com",82],["supforums.com",82],["studybullet.com",82],["usgamer.net",83],["recordonline.com",83],["freebitcoin.win",84],["e-monsite.com",84],["coindice.win",84],["temp-mails.com",85],["freiepresse.de",86],["investing.com",87],["tornadomovies.*",88],["mp3fiber.com",89],["chicoer.com",90],["dailybreeze.com",90],["dailybulletin.com",90],["dailynews.com",90],["delcotimes.com",90],["eastbaytimes.com",90],["macombdaily.com",90],["ocregister.com",90],["pasadenastarnews.com",90],["pe.com",90],["presstelegram.com",90],["redlandsdailyfacts.com",90],["reviewjournal.com",90],["santacruzsentinel.com",90],["saratogian.com",90],["sentinelandenterprise.com",90],["sgvtribune.com",90],["tampabay.com",90],["times-standard.com",90],["theoaklandpress.com",90],["trentonian.com",90],["twincities.com",90],["whittierdailynews.com",90],["bostonherald.com",90],["dailycamera.com",90],["sbsun.com",90],["dailydemocrat.com",90],["montereyherald.com",90],["orovillemr.com",90],["record-bee.com",90],["redbluffdailynews.com",90],["reporterherald.com",90],["thereporter.com",90],["timescall.com",90],["timesheraldonline.com",90],["ukiahdailyjournal.com",90],["dailylocal.com",90],["mercurynews.com",90],["suedkurier.de",91],["anysex.com",93],["icdrama.*",94],["vlist.se",94],["mangasail.*",94],["pornve.com",95],["file4go.*",96],["coolrom.com.au",96],["pornohirsch.net",97],["marie-claire.es",98],["gamezhero.com",98],["flashgirlgames.com",98],["onlinesudoku.games",98],["mpg.football",98],["sssam.com",98],["globalnews.ca",99],["drinksmixer.com",100],["leitesculinaria.com",100],["fupa.net",101],["browardpalmbeach.com",102],["dallasobserver.com",102],["houstonpress.com",102],["miaminewtimes.com",102],["phoenixnewtimes.com",102],["westword.com",102],["nhentai.net",103],["nowtv.com.tr",104],["caminspector.net",105],["camwhoreshd.com",105],["camgoddess.tv",105],["gay4porn.com",107],["mypornhere.com",107],["mangovideo.*",108],["love4porn.com",108],["thotvids.com",108],["watchmdh.to",108],["celebwhore.com",108],["cluset.com",108],["4kporn.xxx",108],["xhomealone.com",108],["lusttaboo.com",[108,365]],["hentai-moon.com",108],["sexwebvideo.com",108],["sexwebvideo.net",108],["camhub.cc",[108,540]],["mediapason.it",111],["linkspaid.com",111],["tuotromedico.com",111],["neoteo.com",111],["phoneswiki.com",111],["celebmix.com",111],["myneobuxportal.com",111],["oyungibi.com",111],["25yearslatersite.com",111],["jeshoots.com",112],["techhx.com",112],["karanapk.com",112],["flashplayer.fullstacks.net",114],["cloudapps.herokuapp.com",114],["youfiles.herokuapp.com",114],["texteditor.nsspot.net",114],["temp-mail.org",115],["asianclub.*",116],["javhdporn.net",116],["vidmoly.to",117],["comnuan.com",118],["veedi.com",119],["battleboats.io",119],["anitube.*",120],["fruitlab.com",120],["acetack.com",120],["androidquest.com",120],["apklox.com",120],["chhaprawap.in",120],["gujarativyakaran.com",120],["kashmirstudentsinformation.in",120],["kisantime.com",120],["shetkaritoday.in",120],["pastescript.com",120],["trimorspacks.com",120],["updrop.link",120],["haddoz.net",120],["streamingcommunity.*",120],["garoetpos.com",120],["stiletv.it",121],["mixdrop.*",122],["hqtv.biz",123],["liveuamap.com",124],["muvibg.com",124],["vinomo.xyz",125],["bembed.net",125],["embedv.net",125],["fslinks.org",125],["listeamed.net",125],["v6embed.xyz",125],["vembed.*",125],["vgplayer.xyz",125],["vid-guard.com",125],["audycje.tokfm.pl",126],["hulu.com",[127,128,129]],["shush.se",130],["allkpop.com",131],["pickcrackpasswords.blogspot.com",133],["kfrfansub.com",134],["thuglink.com",134],["voipreview.org",134],["illicoporno.com",135],["lavoixdux.com",135],["tonpornodujour.com",135],["jacquieetmichel.net",135],["swame.com",135],["vosfemmes.com",135],["voyeurfrance.net",135],["jacquieetmicheltv.net",[135,489,490]],["hanime.tv",136],["pogo.com",137],["cloudvideo.tv",138],["legionjuegos.org",139],["legionpeliculas.org",139],["legionprogramas.org",139],["16honeys.com",140],["elespanol.com",141],["remodelista.com",142],["coolmathgames.com",[143,144,145,592]],["audiofanzine.com",146],["uploadev.*",147],["hitokin.net",148],["developerinsider.co",149],["ilprimatonazionale.it",150],["hotabis.com",150],["root-nation.com",150],["italpress.com",150],["airsoftmilsimnews.com",150],["artribune.com",150],["thehindu.com",151],["cambro.tv",[152,153]],["boobsradar.com",[153,224,550]],["nibelungen-kurier.de",154],["ver-pelis-online.*",155],["adfoc.us",156],["tea-coffee.net",156],["spatsify.com",156],["newedutopics.com",156],["getviralreach.in",156],["edukaroo.com",156],["funkeypagali.com",156],["careersides.com",156],["nayisahara.com",156],["wikifilmia.com",156],["infinityskull.com",156],["viewmyknowledge.com",156],["iisfvirtual.in",156],["starxinvestor.com",156],["jkssbalerts.com",156],["myprivatejobs.com",[156,235]],["wikitraveltips.com",[156,235]],["amritadrino.com",[156,235]],["sahlmarketing.net",156],["filmypoints.in",156],["fitnessholic.net",156],["moderngyan.com",156],["sattakingcharts.in",156],["freshbhojpuri.com",156],["bgmi32bitapk.in",156],["bankshiksha.in",156],["earn.mpscstudyhub.com",156],["earn.quotesopia.com",156],["money.quotesopia.com",156],["best-mobilegames.com",156],["learn.moderngyan.com",156],["bharatsarkarijobalert.com",156],["quotesopia.com",156],["creditsgoal.com",156],["techacode.com",156],["trickms.com",156],["ielts-isa.edu.vn",156],["sptfy.be",156],["mcafee-com.com",[156,233]],["pianetamountainbike.it",157],["barchart.com",158],["modelisme.com",159],["parasportontario.ca",159],["prescottenews.com",159],["nrj-play.fr",160],["hackingwithreact.com",161],["gutekueche.at",162],["eplfootballmatch.com",163],["ancient-origins.*",163],["peekvids.com",164],["playvids.com",164],["pornflip.com",164],["redensarten-index.de",165],["vw-page.com",166],["viz.com",[167,168]],["0rechner.de",169],["configspc.com",170],["xopenload.me",170],["uptobox.com",170],["uptostream.com",170],["japgay.com",171],["mega-debrid.eu",172],["dreamdth.com",173],["diaridegirona.cat",175],["diariodeibiza.es",175],["diariodemallorca.es",175],["diarioinformacion.com",175],["eldia.es",175],["emporda.info",175],["farodevigo.es",175],["laopinioncoruna.es",175],["laopiniondemalaga.es",175],["laopiniondemurcia.es",175],["laopiniondezamora.es",175],["laprovincia.es",175],["levante-emv.com",175],["mallorcazeitung.es",175],["regio7.cat",175],["superdeporte.es",175],["playpaste.com",176],["cnbc.com",177],["puzzles.msn.com",178],["metro.us",178],["newsobserver.com",178],["arkadiumhosted.com",178],["firefaucet.win",179],["74k.io",[180,181]],["stmruby.com",180],["fullhdxxx.com",183],["pornclassic.tube",184],["tubepornclassic.com",184],["etonline.com",185],["creatur.io",185],["lookcam.*",185],["drphil.com",185],["urbanmilwaukee.com",185],["lootlinks.*",185],["ontiva.com",185],["hideandseek.world",185],["myabandonware.com",185],["kendam.com",185],["wttw.com",185],["synonyms.com",185],["definitions.net",185],["hostmath.com",185],["camvideoshub.com",185],["minhaconexao.com.br",185],["home-made-videos.com",187],["amateur-couples.com",187],["slutdump.com",187],["dpstream.*",188],["produsat.com",189],["bluemediafiles.*",190],["12thman.com",191],["acusports.com",191],["atlantic10.com",191],["auburntigers.com",191],["baylorbears.com",191],["bceagles.com",191],["bgsufalcons.com",191],["big12sports.com",191],["bigten.org",191],["bradleybraves.com",191],["butlersports.com",191],["cmumavericks.com",191],["conferenceusa.com",191],["cyclones.com",191],["dartmouthsports.com",191],["daytonflyers.com",191],["dbupatriots.com",191],["dbusports.com",191],["denverpioneers.com",191],["fduknights.com",191],["fgcuathletics.com",191],["fightinghawks.com",191],["fightingillini.com",191],["floridagators.com",191],["friars.com",191],["friscofighters.com",191],["gamecocksonline.com",191],["goarmywestpoint.com",191],["gobison.com",191],["goblueraiders.com",191],["gobobcats.com",191],["gocards.com",191],["gocreighton.com",191],["godeacs.com",191],["goexplorers.com",191],["goetbutigers.com",191],["gofrogs.com",191],["gogriffs.com",191],["gogriz.com",191],["golobos.com",191],["gomarquette.com",191],["gopack.com",191],["gophersports.com",191],["goprincetontigers.com",191],["gopsusports.com",191],["goracers.com",191],["goshockers.com",191],["goterriers.com",191],["gotigersgo.com",191],["gousfbulls.com",191],["govandals.com",191],["gowyo.com",191],["goxavier.com",191],["gozags.com",191],["gozips.com",191],["griffinathletics.com",191],["guhoyas.com",191],["gwusports.com",191],["hailstate.com",191],["hamptonpirates.com",191],["hawaiiathletics.com",191],["hokiesports.com",191],["huskers.com",191],["icgaels.com",191],["iuhoosiers.com",191],["jsugamecocksports.com",191],["longbeachstate.com",191],["loyolaramblers.com",191],["lrtrojans.com",191],["lsusports.net",191],["morrisvillemustangs.com",191],["msuspartans.com",191],["muleriderathletics.com",191],["mutigers.com",191],["navysports.com",191],["nevadawolfpack.com",191],["niuhuskies.com",191],["nkunorse.com",191],["nuhuskies.com",191],["nusports.com",191],["okstate.com",191],["olemisssports.com",191],["omavs.com",191],["ovcsports.com",191],["owlsports.com",191],["purduesports.com",191],["redstormsports.com",191],["richmondspiders.com",191],["sfajacks.com",191],["shupirates.com",191],["siusalukis.com",191],["smcgaels.com",191],["smumustangs.com",191],["soconsports.com",191],["soonersports.com",191],["themw.com",191],["tulsahurricane.com",191],["txst.com",191],["txstatebobcats.com",191],["ubbulls.com",191],["ucfknights.com",191],["ucirvinesports.com",191],["uconnhuskies.com",191],["uhcougars.com",191],["uicflames.com",191],["umterps.com",191],["uncwsports.com",191],["unipanthers.com",191],["unlvrebels.com",191],["uoflsports.com",191],["usdtoreros.com",191],["utahstateaggies.com",191],["utepathletics.com",191],["utrockets.com",191],["uvmathletics.com",191],["uwbadgers.com",191],["villanova.com",191],["wkusports.com",191],["wmubroncos.com",191],["woffordterriers.com",191],["1pack1goal.com",191],["bcuathletics.com",191],["bubraves.com",191],["goblackbears.com",191],["golightsgo.com",191],["gomcpanthers.com",191],["goutsa.com",191],["mercerbears.com",191],["pirateblue.com",191],["pirateblue.net",191],["pirateblue.org",191],["quinnipiacbobcats.com",191],["towsontigers.com",191],["tribeathletics.com",191],["tribeclub.com",191],["utepminermaniacs.com",191],["utepminers.com",191],["wkutickets.com",191],["aopathletics.org",191],["atlantichockeyonline.com",191],["bigsouthnetwork.com",191],["bigsouthsports.com",191],["chawomenshockey.com",191],["dbupatriots.org",191],["drakerelays.org",191],["ecac.org",191],["ecacsports.com",191],["emueagles.com",191],["emugameday.com",191],["gculopes.com",191],["godrakebulldog.com",191],["godrakebulldogs.com",191],["godrakebulldogs.net",191],["goeags.com",191],["goislander.com",191],["goislanders.com",191],["gojacks.com",191],["gomacsports.com",191],["gseagles.com",191],["hubison.com",191],["iowaconference.com",191],["ksuowls.com",191],["lonestarconference.org",191],["mascac.org",191],["midwestconference.org",191],["mountaineast.org",191],["niu-pack.com",191],["nulakers.ca",191],["oswegolakers.com",191],["ovcdigitalnetwork.com",191],["pacersports.com",191],["rmacsports.org",191],["rollrivers.com",191],["samfordsports.com",191],["uncpbraves.com",191],["usfdons.com",191],["wiacsports.com",191],["alaskananooks.com",191],["broncathleticfund.com",191],["cameronaggies.com",191],["columbiacougars.com",191],["etownbluejays.com",191],["gobadgers.ca",191],["golancers.ca",191],["gometrostate.com",191],["gothunderbirds.ca",191],["kentstatesports.com",191],["lehighsports.com",191],["lopers.com",191],["lycoathletics.com",191],["lycomingathletics.com",191],["maraudersports.com",191],["mauiinvitational.com",191],["msumavericks.com",191],["nauathletics.com",191],["nueagles.com",191],["nwusports.com",191],["oceanbreezenyc.org",191],["patriotathleticfund.com",191],["pittband.com",191],["principiaathletics.com",191],["roadrunnersathletics.com",191],["sidearmsocial.com",191],["snhupenmen.com",191],["stablerarena.com",191],["stoutbluedevils.com",191],["uwlathletics.com",191],["yumacs.com",191],["collegefootballplayoff.com",191],["csurams.com",191],["cubuffs.com",191],["gobearcats.com",191],["gohuskies.com",191],["mgoblue.com",191],["osubeavers.com",191],["pittsburghpanthers.com",191],["rolltide.com",191],["texassports.com",191],["thesundevils.com",191],["uclabruins.com",191],["wvuathletics.com",191],["wvusports.com",191],["arizonawildcats.com",191],["calbears.com",191],["cuse.com",191],["georgiadogs.com",191],["goducks.com",191],["goheels.com",191],["gostanford.com",191],["insidekstatesports.com",191],["insidekstatesports.info",191],["insidekstatesports.net",191],["insidekstatesports.org",191],["k-stateathletics.com",191],["k-statefootball.net",191],["k-statefootball.org",191],["k-statesports.com",191],["k-statesports.net",191],["k-statesports.org",191],["k-statewomenshoops.com",191],["k-statewomenshoops.net",191],["k-statewomenshoops.org",191],["kstateathletics.com",191],["kstatefootball.net",191],["kstatefootball.org",191],["kstatesports.com",191],["kstatewomenshoops.com",191],["kstatewomenshoops.net",191],["kstatewomenshoops.org",191],["ksuathletics.com",191],["ksusports.com",191],["scarletknights.com",191],["showdownforrelief.com",191],["syracusecrunch.com",191],["texastech.com",191],["theacc.com",191],["ukathletics.com",191],["usctrojans.com",191],["utahutes.com",191],["utsports.com",191],["wsucougars.com",191],["vidlii.com",[191,217]],["tricksplit.io",191],["fangraphs.com",192],["stern.de",193],["geo.de",193],["brigitte.de",193],["tvspielfilm.de",[194,195,196,197]],["tvtoday.de",[194,195,196,197]],["chip.de",[194,195,196,197]],["focus.de",[194,195,196,197]],["fitforfun.de",[194,195,196,197]],["n-tv.de",198],["player.rtl2.de",199],["planetaminecraft.com",200],["cravesandflames.com",201],["codesnse.com",201],["link.paid4file.com",201],["flyad.vip",201],["lapresse.ca",202],["kolyoom.com",203],["ilovephd.com",203],["negumo.com",204],["games.wkb.jp",[205,206]],["fandom.com",[207,609,610]],["kenshi.fandom.com",208],["hausbau-forum.de",209],["homeairquality.org",209],["faucettronn.click",209],["fake-it.ws",210],["laksa19.github.io",211],["1shortlink.com",212],["nesia.my.id",213],["u-s-news.com",214],["luscious.net",215],["makemoneywithurl.com",216],["junkyponk.com",216],["healthfirstweb.com",216],["vocalley.com",216],["yogablogfit.com",216],["howifx.com",[216,394]],["en.financerites.com",216],["mythvista.com",216],["livenewsflix.com",216],["cureclues.com",216],["apekite.com",216],["host-buzz.com",216],["insmyst.com",216],["wp2host.com",216],["blogtechh.com",216],["techbixby.com",216],["blogmyst.com",216],["iammagnus.com",217],["dailyvideoreports.net",217],["unityassets4free.com",217],["docer.*",218],["resetoff.pl",218],["sexodi.com",218],["cdn77.org",219],["howtofixwindows.com",220],["3sexporn.com",221],["momxxxsex.com",221],["myfreevintageporn.com",221],["penisbuyutucum.net",221],["ujszo.com",222],["newsmax.com",223],["bobs-tube.com",224],["nadidetarifler.com",225],["siz.tv",225],["suzylu.co.uk",[226,227]],["onworks.net",228],["yabiladi.com",228],["downloadsoft.net",229],["pixsera.net",230],["testlanguages.com",231],["newsinlevels.com",231],["videosinlevels.com",231],["cricketlegacy.com",232],["fitdynamos.com",[232,233]],["starkroboticsfrc.com",233],["sinonimos.de",233],["antonimos.de",233],["quesignifi.ca",233],["tiktokrealtime.com",233],["tiktokcounter.net",233],["tpayr.xyz",233],["poqzn.xyz",233],["ashrfd.xyz",233],["rezsx.xyz",233],["tryzt.xyz",233],["ashrff.xyz",233],["rezst.xyz",233],["dawenet.com",233],["erzar.xyz",233],["waezm.xyz",233],["waezg.xyz",233],["blackwoodacademy.org",233],["cryptednews.space",233],["vivuq.com",233],["swgop.com",233],["vbnmll.com",233],["telcoinfo.online",233],["dshytb.com",233],["btcbitco.in",[233,237]],["btcsatoshi.net",233],["cempakajaya.com",233],["crypto4yu.com",233],["readbitcoin.org",233],["wiour.com",233],["finish.addurl.biz",233],["aiimgvlog.fun",[233,240]],["laweducationinfo.com",233],["savemoneyinfo.com",233],["worldaffairinfo.com",233],["godstoryinfo.com",233],["successstoryinfo.com",233],["cxissuegk.com",233],["learnmarketinfo.com",233],["bhugolinfo.com",233],["armypowerinfo.com",233],["rsadnetworkinfo.com",233],["rsinsuranceinfo.com",233],["rsfinanceinfo.com",233],["rsgamer.app",233],["rssoftwareinfo.com",233],["rshostinginfo.com",233],["rseducationinfo.com",233],["phonereviewinfo.com",233],["makeincomeinfo.com",233],["gknutshell.com",233],["vichitrainfo.com",233],["workproductivityinfo.com",233],["dopomininfo.com",233],["hostingdetailer.com",233],["fitnesssguide.com",233],["tradingfact4u.com",233],["cryptofactss.com",233],["softwaredetail.com",233],["artoffocas.com",233],["insurancesfact.com",233],["travellingdetail.com",233],["advertisingexcel.com",233],["allcryptoz.net",233],["batmanfactor.com",233],["beautifulfashionnailart.com",233],["crewbase.net",233],["documentaryplanet.xyz",233],["crewus.net",233],["gametechreviewer.com",233],["midebalonu.net",233],["misterio.ro",233],["phineypet.com",233],["seory.xyz",233],["shinbhu.net",233],["shinchu.net",233],["substitutefor.com",233],["talkforfitness.com",233],["thefitbrit.co.uk",233],["thumb8.net",233],["thumb9.net",233],["topcryptoz.net",233],["uniqueten.net",233],["ultraten.net",233],["exactpay.online",233],["quins.us",233],["kiddyearner.com",233],["imagereviser.com",234],["luckydice.net",235],["adarima.org",235],["tieutietkiem.com",235],["weatherwx.com",235],["sattaguess.com",235],["winshell.de",235],["rosasidan.ws",235],["modmakers.xyz",235],["gamepure.in",235],["warrenrahul.in",235],["austiblox.net",235],["upiapi.in",235],["networkhint.com",235],["thichcode.net",235],["texturecan.com",235],["tikmate.app",[235,471]],["arcaxbydz.id",235],["quotesshine.com",235],["4funbox.com",236],["nephobox.com",236],["1024tera.com",236],["terabox.*",236],["blog.cryptowidgets.net",237],["blog.insurancegold.in",237],["blog.wiki-topia.com",237],["blog.coinsvalue.net",237],["blog.cookinguide.net",237],["blog.freeoseocheck.com",237],["blog24.me",237],["bildirim.*",239],["arahdrive.com",240],["appsbull.com",241],["diudemy.com",241],["maqal360.com",[241,242,243]],["lifesurance.info",244],["akcartoons.in",245],["cybercityhelp.in",245],["infokeeda.xyz",247],["webzeni.com",247],["dl.apkmoddone.com",248],["phongroblox.com",248],["apkmodvn.com",249],["fuckingfast.net",251],["streamelements.com",252],["share.hntv.tv",[252,678,679,680]],["forum.dji.com",[252,680]],["unionpayintl.com",[252,679]],["tickhosting.com",253],["in91vip.win",254],["arcai.com",255],["my-code4you.blogspot.com",256],["flickr.com",257],["firefile.cc",258],["pestleanalysis.com",258],["kochamjp.pl",258],["tutorialforlinux.com",258],["whatsaero.com",258],["animeblkom.net",[258,274]],["blkom.com",258],["globes.co.il",[259,260]],["jardiner-malin.fr",261],["tw-calc.net",262],["ohmybrush.com",263],["talkceltic.net",264],["mentalfloss.com",265],["uprafa.com",266],["cube365.net",267],["nightfallnews.com",[268,269]],["wwwfotografgotlin.blogspot.com",270],["freelistenonline.com",270],["badassdownloader.com",271],["quickporn.net",272],["yellowbridge.com",273],["aosmark.com",275],["ctrlv.*",276],["atozmath.com",[277,278,279,280,281,282,283]],["newyorker.com",284],["brighteon.com",285],["more.tv",286],["video1tube.com",287],["alohatube.xyz",287],["4players.de",288],["onlinesoccermanager.com",288],["fshost.me",289],["link.cgtips.org",290],["hentaicloud.com",291],["netfapx.com",293],["javdragon.org",293],["njav.tv",293],["paperzonevn.com",294],["hentaienglish.com",295],["hentaiporno.xxx",295],["venge.io",[296,297]],["btcbux.io",298],["its.porn",[299,300]],["atv.at",301],["2ndrun.tv",302],["rackusreads.com",302],["teachmemicro.com",302],["willcycle.com",302],["kusonime.com",[303,304]],["123movieshd.*",305],["imgur.com",[306,307,569]],["hentai-party.com",308],["hentaicomics.pro",308],["xxx-comics.pro",308],["uproxy.*",309],["animesa.*",310],["genshinimpactcalculator.com",311],["mysexgames.com",312],["cinecalidad.*",[313,314]],["embed.indavideo.hu",315],["xnxx.com",316],["xvideos.*",316],["gdr-online.com",317],["mmm.dk",318],["iqiyi.com",[319,320,463]],["m.iqiyi.com",321],["nbcolympics.com",322],["apkhex.com",323],["indiansexstories2.net",324],["issstories.xyz",324],["1340kbbr.com",325],["gorgeradio.com",325],["kduk.com",325],["kedoam.com",325],["kejoam.com",325],["kelaam.com",325],["khsn1230.com",325],["kjmx.rocks",325],["kloo.com",325],["klooam.com",325],["klykradio.com",325],["kmed.com",325],["kmnt.com",325],["kool991.com",325],["kpnw.com",325],["kppk983.com",325],["krktcountry.com",325],["ktee.com",325],["kwro.com",325],["kxbxfm.com",325],["thevalley.fm",325],["quizlet.com",326],["dsocker1234.blogspot.com",327],["schoolcheats.net",[328,329]],["mgnet.xyz",330],["japopav.tv",331],["lvturbo.com",331],["designtagebuch.de",332],["pixroute.com",333],["uploady.io",334],["calculator-online.net",335],["porngames.club",336],["sexgames.xxx",336],["111.90.159.132",337],["battleplan.news",337],["mobile-tracker-free.com",338],["pfps.gg",339],["ac-illust.com",[340,341]],["photo-ac.com",[340,341]],["social-unlock.com",342],["superpsx.com",343],["ninja.io",344],["sourceforge.net",345],["samfirms.com",346],["rapelust.com",347],["vtube.to",347],["vtplay.net",347],["desitelugusex.com",347],["dvdplay.*",347],["xvideos-downloader.net",347],["xxxvideotube.net",347],["sdefx.cloud",347],["nozomi.la",347],["moviesonlinefree.net",347],["banned.video",348],["madmaxworld.tv",348],["androidpolice.com",348],["babygaga.com",348],["backyardboss.net",348],["carbuzz.com",348],["cbr.com",348],["collider.com",348],["dualshockers.com",348],["footballfancast.com",348],["footballleagueworld.co.uk",348],["gamerant.com",348],["givemesport.com",348],["hardcoregamer.com",348],["hotcars.com",348],["howtogeek.com",348],["makeuseof.com",348],["moms.com",348],["movieweb.com",348],["pocket-lint.com",348],["pocketnow.com",348],["screenrant.com",348],["simpleflying.com",348],["thegamer.com",348],["therichest.com",348],["thesportster.com",348],["thethings.com",348],["thetravel.com",348],["topspeed.com",348],["xda-developers.com",348],["huffpost.com",349],["ingles.com",350],["spanishdict.com",350],["surfline.com",[351,352]],["play.tv3.ee",353],["play.tv3.lt",353],["play.tv3.lv",353],["tv3play.skaties.lv",353],["trendyoum.com",354],["bulbagarden.net",355],["hollywoodlife.com",356],["mat6tube.com",357],["textstudio.co",358],["newtumbl.com",359],["apkmaven.*",360],["aruble.net",361],["nevcoins.club",362],["mail.com",363],["gmx.*",364],["oggi.it",[366,367]],["manoramamax.com",366],["video.gazzetta.it",[366,367]],["mangakita.id",368],["mangakita.net",368],["avpgalaxy.net",369],["mhma12.tech",370],["panda-novel.com",371],["zebranovel.com",371],["lightsnovel.com",371],["eaglesnovel.com",371],["pandasnovel.com",371],["ewrc-results.com",372],["kizi.com",373],["cyberscoop.com",374],["fedscoop.com",374],["canale.live",375],["indiatimes.com",376],["netzwelt.de",377],["jeep-cj.com",378],["sponsorhunter.com",379],["cloudcomputingtopics.net",380],["likecs.com",381],["tiscali.it",382],["linkspy.cc",383],["adshnk.com",384],["chattanoogan.com",385],["adsy.pw",386],["playstore.pw",386],["socialmediagirls.com",387],["windowspro.de",388],["snapinst.app",389],["jiocinema.com",390],["rapid-cloud.co",390],["uploadmall.com",390],["rkd3.dev",390],["tvtv.ca",391],["tvtv.us",391],["mydaddy.cc",392],["roadtrippin.fr",393],["vavada5com.com",394],["anyporn.com",[395,412]],["bravoporn.com",395],["bravoteens.com",395],["crocotube.com",395],["hellmoms.com",395],["hellporno.com",395],["sex3.com",395],["tubewolf.com",395],["xbabe.com",395],["xcum.com",395],["zedporn.com",395],["imagetotext.info",396],["infokik.com",397],["freepik.com",398],["ddwloclawek.pl",[399,400]],["www.seznam.cz",401],["deezer.com",[402,713,714]],["my-subs.co",403],["plaion.com",404],["slideshare.net",[405,406]],["ustreasuryyieldcurve.com",407],["businesssoftwarehere.com",408],["goo.st",408],["freevpshere.com",408],["softwaresolutionshere.com",408],["gamereactor.*",410],["madoohd.com",411],["doomovie-hd.*",411],["staige.tv",413],["in-jpn.com",414],["oninet.ne.jp",414],["xth.jp",414],["androidadult.com",415],["streamvid.net",416],["watchtv24.com",417],["cellmapper.net",418],["medscape.com",419],["newscon.org",[420,421]],["arkadium.com",422],["wheelofgold.com",423],["drakecomic.*",423],["app.blubank.com",424],["mobileweb.bankmellat.ir",424],["sportdeutschland.tv",425],["kcra.com",425],["wcvb.com",425],["chat.nrj.fr",426],["chat.tchatche.com",[426,441]],["empire-anime.*",[427,428,429,430,431]],["empire-stream.*",[427,428,429]],["empire-streaming.*",[427,428,429]],["empire-streamz.*",[427,428,429]],["ccthesims.com",433],["chromeready.com",433],["coursedrive.org",433],["dtbps3games.com",433],["illustratemagazine.com",433],["uknip.co.uk",433],["vod.pl",434],["megadrive-emulator.com",435],["tvhay.*",[436,437]],["animesaga.in",438],["moviesapi.club",438],["bestx.stream",438],["watchx.top",438],["digimanie.cz",439],["svethardware.cz",439],["srvy.ninja",440],["cnn.com",[442,443,444]],["edmdls.com",445],["freshremix.net",445],["scenedl.org",445],["trakt.tv",446],["client.falixnodes.net",447],["shroomers.app",448],["classicalradio.com",449],["di.fm",449],["jazzradio.com",449],["radiotunes.com",449],["rockradio.com",449],["zenradio.com",449],["pc-builds.com",450],["qtoptens.com",450],["reuters.com",450],["today.com",450],["videogamer.com",450],["wrestlinginc.com",450],["gbatemp.net",450],["usatoday.com",[451,715]],["ydr.com",451],["getthit.com",452],["techedubyte.com",453],["soccerinhd.com",453],["movie-th.tv",454],["iwanttfc.com",455],["nutraingredients-asia.com",456],["nutraingredients-latam.com",456],["nutraingredients-usa.com",456],["nutraingredients.com",456],["mavenarts.in",457],["ozulscansen.com",458],["nexusmods.com",459],["fitnessbr.click",460],["minhareceita.xyz",460],["doomied.monster",461],["lookmovie.*",461],["lookmovie2.to",461],["royalroad.com",462],["biletomat.pl",464],["hextank.io",[465,466]],["filmizlehdfilm.com",[467,468,469,470]],["filmizletv.*",[467,468,469,470]],["fullfilmizle.cc",[467,468,469,470]],["gofilmizle.net",[467,468,469,470]],["btvplus.bg",472],["sagewater.com",473],["redlion.net",473],["satdl.com",474],["vidstreaming.xyz",475],["everand.com",476],["myradioonline.pl",477],["cbs.com",478],["paramountplus.com",478],["abysscdn.com",[479,480]],["fullxh.com",481],["galleryxh.site",481],["hamsterix.*",481],["megaxh.com",481],["movingxh.world",481],["seexh.com",481],["unlockxh4.com",481],["valuexh.life",481],["xhaccess.com",481],["xhadult2.com",481],["xhadult3.com",481],["xhadult4.com",481],["xhadult5.com",481],["xhamster.*",481],["xhamster1.*",481],["xhamster10.*",481],["xhamster11.*",481],["xhamster12.*",481],["xhamster13.*",481],["xhamster14.*",481],["xhamster15.*",481],["xhamster16.*",481],["xhamster17.*",481],["xhamster18.*",481],["xhamster19.*",481],["xhamster20.*",481],["xhamster2.*",481],["xhamster3.*",481],["xhamster4.*",481],["xhamster42.*",481],["xhamster46.com",481],["xhamster5.*",481],["xhamster7.*",481],["xhamster8.*",481],["xhamsterporno.mx",481],["xhbig.com",481],["xhbranch5.com",481],["xhchannel.com",481],["xhchannel2.com",481],["xhdate.world",481],["xhday.com",481],["xhday1.com",481],["xhlease.world",481],["xhmoon5.com",481],["xhofficial.com",481],["xhopen.com",481],["xhplanet1.com",481],["xhplanet2.com",481],["xhreal2.com",481],["xhreal3.com",481],["xhspot.com",481],["xhtab2.com",481],["xhtab4.com",481],["xhtotal.com",481],["xhtree.com",481],["xhvictory.com",481],["xhwebsite.com",481],["xhwebsite2.com",481],["xhwebsite5.com",481],["xhwide1.com",481],["xhwide2.com",481],["xhwide5.com",481],["file-upload.net",482],["lightnovelworld.*",483],["acortalo.*",[484,485,486,487]],["acortar.*",[484,485,486,487]],["megadescarga.net",[484,485,486,487]],["megadescargas.net",[484,485,486,487]],["hentaihaven.xxx",488],["jacquieetmicheltv2.net",490],["a2zapk.*",491],["fcportables.com",[492,493]],["emurom.net",494],["freethesaurus.com",[495,496]],["thefreedictionary.com",[495,496]],["oeffentlicher-dienst.info",497],["im9.eu",498],["dcdlplayer8a06f4.xyz",499],["ultimate-guitar.com",500],["claimbits.net",501],["sexyscope.net",502],["kickassanime.*",503],["recherche-ebook.fr",504],["virtualdinerbot.com",504],["zonebourse.com",505],["pink-sluts.net",506],["andhrafriends.com",507],["benzinpreis.de",508],["turtleviplay.xyz",509],["paktech2.com",510],["defenseone.com",511],["govexec.com",511],["nextgov.com",511],["route-fifty.com",511],["sharing.wtf",512],["wetter3.de",513],["esportivos.fun",514],["cosmonova-broadcast.tv",515],["hartvannederland.nl",516],["shownieuws.nl",516],["vandaaginside.nl",516],["rock.porn",[517,518]],["videzz.net",[519,520]],["ezaudiobookforsoul.com",521],["club386.com",522],["littlebigsnake.com",523],["easyfun.gg",524],["smailpro.com",525],["ilgazzettino.it",526],["ilmessaggero.it",526],["3bmeteo.com",[527,528]],["mconverter.eu",529],["lover937.net",530],["10gb.vn",531],["pes6.es",532],["tactics.tools",[533,534]],["boundhub.com",535],["alocdnnetu.xyz",536],["reliabletv.me",537],["jakondo.ru",538],["filecrypt.*",539],["nolive.me",541],["wired.com",542],["spankbang.*",[543,544,545]],["anonymfile.com",546],["gofile.to",546],["dotycat.com",547],["rateyourmusic.com",548],["reporterpb.com.br",549],["blog-dnz.com",551],["18adultgames.com",552],["colnect.com",[553,554]],["adultgamesworld.com",555],["bgmiupdate.com.in",556],["reviewdiv.com",557],["pvpoke-re.com",[558,559]],["parametric-architecture.com",560],["laurelberninteriors.com",[561,574]],["filmweb.pl",[562,563]],["www.google.*",564],["tacobell.com",565],["zefoy.com",566],["cnet.com",567],["natgeotv.com",570],["spankbang.com",[571,572]],["globo.com",573],["wayfair.com",575],["br.de",576],["indeed.com",577],["pasteboard.co",578],["clickhole.com",579],["deadspin.com",579],["gizmodo.com",579],["jalopnik.com",579],["jezebel.com",579],["kotaku.com",579],["lifehacker.com",579],["splinternews.com",579],["theinventory.com",579],["theonion.com",579],["theroot.com",579],["thetakeout.com",579],["pewresearch.org",579],["los40.com",[580,581]],["as.com",581],["telegraph.co.uk",[582,583]],["poweredbycovermore.com",[582,632]],["lumens.com",[582,632]],["verizon.com",584],["humanbenchmark.com",585],["politico.com",586],["officedepot.co.cr",[587,588]],["officedepot.*",[589,590]],["usnews.com",591],["factable.com",593],["zee5.com",594],["gala.fr",595],["geo.fr",595],["voici.fr",595],["gloucestershirelive.co.uk",596],["arsiv.mackolik.com",597],["jacksonguitars.com",598],["scandichotels.com",599],["stylist.co.uk",600],["nettiauto.com",601],["thaiairways.com",[602,603]],["cerbahealthcare.it",[604,605]],["futura-sciences.com",[604,621]],["toureiffel.paris",604],["tiendaenlinea.claro.com.ni",[606,607]],["tieba.baidu.com",608],["grasshopper.com",[611,612]],["epson.com.cn",[613,614,615,616]],["oe24.at",[617,618]],["szbz.de",617],["platform.autods.com",[619,620]],["wikihow.com",622],["citibank.com.sg",623],["uol.com.br",[624,625,626,627,628]],["gazzetta.gr",629],["digicol.dpm.org.cn",[630,631]],["virginmediatelevision.ie",633],["larazon.es",[634,635]],["waitrosecellar.com",[636,637,638]],["sharpen-free-design-generator.netlify.app",[640,641]],["help.cashctrl.com",[642,643]],["gry-online.pl",644],["vidaextra.com",645],["commande.rhinov.pro",[646,647]],["ecom.wixapps.net",[646,647]],["tipranks.com",[648,649]],["iceland.co.uk",[650,651,652]],["socket.pearsoned.com",653],["tntdrama.com",[654,655]],["trutv.com",[654,655]],["mobile.de",[656,657]],["ioe.vn",[658,659]],["geiriadur.ac.uk",[658,662]],["welsh-dictionary.ac.uk",[658,662]],["bikeportland.org",[660,661]],["biologianet.com",[625,626,627]],["10play.com.au",[663,664]],["sunshine-live.de",[665,666]],["whatismyip.com",[667,668]],["myfitnesspal.com",669],["netoff.co.jp",[670,671]],["foundit.*",[672,673]],["clickjogos.com.br",674],["bristan.com",[675,676]],["zillow.com",677],["optimum.net",[681,682]],["hdfcfund.com",683],["user.guancha.cn",[684,685]],["sosovalue.com",686],["bandyforbundet.no",[687,688]],["tatacommunications.com",689],["suamusica.com.br",[690,691,692]],["macrotrends.net",[693,694]],["code.world",695],["smartcharts.net",695],["topgear.com",696],["eservice.directauto.com",[697,698]],["nbcsports.com",699],["standard.co.uk",700],["pruefernavi.de",[701,702]],["speedtest.net",[703,704]],["17track.net",705],["visible.com",[706,713,714]],["hagerty.com",[707,708]],["kino.de",[709,710]],["9now.nine.com.au",711],["u26bekrb.fun",712],["flyfrontier.com",[713,714]],["acmemarkets.com",[713,714]],["usaa.com",[713,714]],["capezio.com",[713,714]],["twitch.tv",[713,714]],["spotify.com",[713,714]],["tidal.com",[713,714]],["pandora.com",[713,714]],["qobuz.com",[713,714]],["soundcloud.com",[713,714]],["vimeo.com",[713,714]],["x.com",[713,714]],["twitter.com",[713,714]],["eventbrite.com",[713,714]],["wunderground.com",[713,714]],["accuweather.com",[713,714]],["formula1.com",[713,714]],["lenscrafters.com",[713,714]],["subway.com",[713,714]],["ticketmaster.*",[713,714]],["livewithkellyandmark.com",[713,714]],["porsche.com",[713,714]],["uber.com",[713,714]],["jdsports.com",[713,714]],["engadget.com",[713,714]],["yahoo.com",[713,714]],["techcrunch.com",[713,714]],["rivals.com",[713,714]],["kkrt.com",[713,714]],["crunchyroll.com",[713,714]],["dnb.com",[713,714]],["dnb.co.uk",[713,714]],["weather.com",[713,714]],["ubereats.com",[713,714]]]);
const exceptionsMap = new Map([["pingit.com",[21]],["pingit.me",[21]],["lookmovie.studio",[461]]]);
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
