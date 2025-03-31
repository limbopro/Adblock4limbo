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
const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["console.clear","noopFunc"],["console.log","noopFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["console.clear","trueFunc"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["console.clear","undefined"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["String.prototype.charCodeAt","trueFunc"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["CaptchmeState.adb","undefined"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["HTMLAnchorElement.prototype.click","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["PlayerConfig.config.CustomAdSetting","[]"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["loadingAds","true"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["decodeURIComponent","trueFunc"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["cnbc.canShowAds","true"],["Adv_ab","false"],["ue_adb_chk","1"],["firefaucet","true"],["cRAds","true"],["uas","[]"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["foundation.adPlayer.bitmovin","{}"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["Object.prototype.adReinsertion","noopFunc"],["getHomadConfig","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["ulp_noadb","true"],["Object.prototype.adblock_detected","false"],["timeSec","0"],["adsbygoogle.loaded","true"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["document.hidden","false"],["document.hasFocus","trueFunc"],["hasFocus","trueFunc"],["Object.prototype.isAllAdClose","true"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["navigator.webkitTemporaryStorage.queryUsageAndQuota","noopFunc"],["document.onkeydown","noopFunc"],["showadas","true"],["alert","throwFunc"],["app_vars.please_disable_adblock","undefined"],["iktimer","0"],["aSl.gcd","0"],["delayClick","false"],["window.adLink","null"],["sensorsDataAnalytic201505","{}"],["detectedAdblock","undefined"],["isTabActive","true"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["showada","true"],["showax","true"],["p18","undefined"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["Object.prototype.adblockFound","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["xv.sda.pp.init","noopFunc"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["isadb","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["detectAdBlock","noopFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["ad_link",""],["penciBlocksArray","[]"],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["D4zz","noopFunc"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["objAd.loadAdShield","noopFunc"],["window.myAd.runAd","noopFunc"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["navigator.brave","undefined"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["sssp","emptyObj"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["adSettings","[]"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["myFunc","noopFunc"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["googletag","true"],["tOS2","150"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["checkAdBlocker","noopFunc"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["ShowAdvertising","{}"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["feedBack.showAffilaePromo","noopFunc"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["window.adngin","{}"],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["admiral","noopFunc"],["gnt.u.adfree","true"],["sharedController.adblockDetector","noopFunc"],["checkAdsStatus","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["checkAdBlockeraz","noopFunc"],["blockingAds","false"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["powerAPITag","emptyObj"],["playerEnhancedConfig.run","throwFunc"],["aoAdBlockDetected","false"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["hasAdBlocker","false"],["document.ontouchend","null"],["document.onclick","null"],["initials.yld-pdpopunder",""],["advertisement3","true"],["importFAB","undefined"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["dvsize","52"],["majorse","true"],["completed","1"],["testerli","false"],["w87.abd","noopFunc"],["document.referrer",""],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["one_time","1"],["consentGiven","true"],["playID","1"],["openPopunder","noopFunc"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["ADS.isBannersEnabled","false"],["EASYFUN_ADS_CAN_RUN","true"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["detectedAdblock","noopFunc"],["Object.prototype.DetectByGoogleAd","noopFunc"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["NativeAd","noopFunc"],["Blob","noopFunc"],["window.navigator.brave","undefined"],["HTMLScriptElement.prototype.onerror","undefined"],["isAdblock","false"],["openPop","noopFunc"],["attachEvent","trueFunc"],["cns.library","true"],["BJSShowUnder","{}"],["BJSShowUnder.bindTo","noopFunc"],["BJSShowUnder.add","noopFunc"],["countDown","0"],["runCheck","noopFunc"],["adsSlotRenderEndSeen","true"],["showModal","noopFunc"],["flashvars.mlogo_link",""],["isAdBlocked","noopFunc"],["URLlist","[]"],["aaw","{}"],["aaw.processAdsOnPage","noopFunc"],["doOpen","undefined"],["HTMLImageElement.prototype.onerror","undefined"],["FOXIZ_MAIN_SCRIPT.siteAccessDetector","noopFunc"],["openAdBlockPopup","noopFunc"],["Object.prototype._adsDisabled","true"],["rodo.checkIsDidomiConsent","noopFunc"],["rodo.waitForConsent","noopPromiseResolve"],["advanced_ads_check_adblocker","noopFunc"],["canRunAds","1"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["Object.prototype.updateModifiedCommerceUrl","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["Visitor","{}"],["send_gravity_event","noopFunc"],["send_recommendation_event","noopFunc"],["libAnalytics.data.get","noopFunc"],["adthrive._components.start","noopFunc"],["navigator.sendBeacon","noopFunc"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["Object.prototype.que","noopFunc"],["Object.prototype.que.push","noopFunc"],["ga.sendGaEvent","noopFunc"],["adobe","{}"],["MT","{}"],["MT.track","noopFunc"],["adex","{}"],["adex.getAdexUser","noopFunc"],["Adkit","noopFunc"],["Object.prototype.shouldExpectGoogleCMP","false"],["adBlockDetected","undefined"],["CHRAN","1"],["Navigator.prototype.globalPrivacyControl","false"],["navigator.globalPrivacyControl","false"],["gnt.x.adm",""]];
const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3]],["music.youtube.com",[0,1,2,3]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["timesofindia.indiatimes.com",4],["economictimes.indiatimes.com",5],["motherless.com",6],["sueddeutsche.de",7],["watchanimesub.net",8],["wco.tv",8],["wcoanimesub.tv",8],["wcoforever.net",8],["freeviewmovies.com",8],["filehorse.com",8],["guidetnt.com",8],["starmusiq.*",8],["sp-today.com",8],["linkvertise.com",8],["eropaste.net",8],["getpaste.link",8],["sharetext.me",8],["wcofun.*",8],["note.sieuthuthuat.com",8],["elcriticodelatele.com",[8,297]],["gadgets.es",[8,297]],["amateurporn.co",[8,104]],["wiwo.de",9],["kissasian.*",10],["gogoanime.*",[10,43]],["1movies.*",[10,49]],["xmovies8.*",10],["masteranime.tv",10],["0123movies.*",10],["gostream.*",10],["gomovies.*",10],["primewire.*",11],["streanplay.*",[11,12]],["alphaporno.com",[11,390]],["porngem.com",11],["shortit.pw",[11,88]],["familyporn.tv",11],["sbplay.*",11],["id45.cyou",11],["85tube.com",[11,72]],["milfnut.*",11],["k1nk.co",11],["watchasians.cc",11],["soltoshindo.com",11],["sankakucomplex.com",13],["player.glomex.com",14],["merkur.de",14],["tz.de",14],["sxyprn.*",15],["hqq.*",[16,17]],["waaw.*",[17,18]],["hotpornfile.org",17],["player.tabooporns.com",17],["x69.ovh",17],["wiztube.xyz",17],["younetu.*",17],["multiup.us",17],["peliculas8k.com",[17,18]],["video.q34r.org",17],["czxxx.org",17],["vtplayer.online",17],["vvtplayer.*",17],["netu.ac",17],["netu.frembed.lol",17],["dirtyvideo.fun",18],["adbull.org",19],["123link.*",19],["adshort.*",19],["mitly.us",19],["linkrex.net",19],["linx.cc",19],["oke.io",19],["linkshorts.*",19],["dz4link.com",19],["adsrt.*",19],["linclik.com",19],["shrt10.com",19],["vinaurl.*",19],["loptelink.com",19],["adfloz.*",19],["cut-fly.com",19],["linkfinal.com",19],["payskip.org",19],["cutpaid.com",19],["forexmab.com",19],["linkjust.com",19],["linkszia.co",19],["leechpremium.link",19],["icutlink.com",[19,109]],["oncehelp.com",19],["rgl.vn",19],["reqlinks.net",19],["bitlk.com",19],["qlinks.eu",19],["link.3dmili.com",19],["short-fly.com",19],["foxseotools.com",19],["dutchycorp.*",19],["shortearn.*",19],["pingit.*",19],["pngit.live",19],["link.turkdown.com",19],["urlty.com",19],["7r6.com",19],["oko.sh",19],["ckk.ai",19],["fc.lc",19],["fstore.biz",19],["shrink.*",19],["cuts-url.com",19],["eio.io",19],["exe.app",19],["exee.io",19],["exey.io",19],["skincarie.com",19],["exeo.app",19],["tmearn.*",19],["coinlyhub.com",[19,183]],["adsafelink.com",19],["aii.sh",19],["megalink.*",19],["cybertechng.com",[19,198]],["cutdl.xyz",19],["iir.ai",19],["shorteet.com",[19,216]],["miniurl.*",19],["smoner.com",19],["gplinks.*",19],["odisha-remix.com",[19,198]],["xpshort.com",[19,198]],["upshrink.com",19],["clk.*",19],["easysky.in",19],["veganab.co",19],["go.bloggingaro.com",19],["go.gyanitheme.com",19],["go.theforyou.in",19],["go.hipsonyc.com",19],["birdurls.com",19],["vipurl.in",19],["try2link.com",19],["jameeltips.us",19],["gainl.ink",19],["promo-visits.site",19],["satoshi-win.xyz",[19,232]],["shorterall.com",19],["encurtandourl.com",19],["forextrader.site",19],["postazap.com",19],["cety.app",19],["exego.app",[19,228]],["cutlink.net",19],["cutsy.net",19],["cutyurls.com",19],["cutty.app",19],["cutnet.net",19],["jixo.online",19],["tinys.click",[19,198]],["cpm.icu",19],["panyshort.link",19],["enagato.com",19],["pandaznetwork.com",19],["tvi.la",19],["iir.la",19],["tii.la",19],["oei.la",19],["lnbz.la",[19,212]],["oii.la",[19,240]],["tpi.li",[19,240]],["recipestutorials.com",19],["pureshort.*",19],["shrinke.*",19],["shrinkme.*",19],["shrinkforearn.in",19],["techyuth.xyz",19],["oii.io",19],["du-link.in",19],["atglinks.com",19],["thotpacks.xyz",19],["megaurl.in",19],["megafly.in",19],["simana.online",19],["fooak.com",19],["joktop.com",19],["evernia.site",19],["falpus.com",19],["link.paid4link.com",19],["exalink.fun",19],["shortxlinks.com",19],["upfiles.app",19],["upfiles-urls.com",19],["flycutlink.com",[19,198]],["linksly.co",19],["link1s.*",19],["pkr.pw",19],["imagenesderopaparaperros.com",19],["shortenbuddy.com",19],["apksvip.com",19],["4cash.me",19],["namaidani.com",19],["shortzzy.*",19],["teknomuda.com",19],["shorttey.*",[19,182]],["miuiku.com",19],["savelink.site",19],["lite-link.*",19],["adcorto.*",19],["samaa-pro.com",19],["miklpro.com",19],["modapk.link",19],["ccurl.net",19],["linkpoi.me",19],["menjelajahi.com",19],["pewgame.com",19],["haonguyen.top",19],["zshort.*",19],["crazyblog.in",19],["gtlink.co",19],["cutearn.net",19],["rshrt.com",19],["filezipa.com",19],["dz-linkk.com",19],["upfiles.*",19],["theblissempire.com",19],["finanzas-vida.com",19],["adurly.cc",19],["paid4.link",19],["link.asiaon.top",19],["go.gets4link.com",19],["download.sharenulled.net",19],["linkfly.*",19],["beingtek.com",19],["shorturl.unityassets4free.com",19],["disheye.com",19],["techymedies.com",19],["techysuccess.com",19],["za.gl",[19,128]],["bblink.com",19],["myad.biz",19],["swzz.xyz",19],["vevioz.com",19],["charexempire.com",19],["clk.asia",19],["linka.click",19],["sturls.com",19],["myshrinker.com",19],["snowurl.com",[19,198]],["netfile.cc",19],["wplink.*",19],["rocklink.in",19],["techgeek.digital",19],["download3s.net",19],["shortx.net",19],["shortawy.com",19],["tlin.me",19],["apprepack.com",19],["up-load.one",19],["zuba.link",19],["bestcash2020.com",19],["hoxiin.com",19],["paylinnk.com",19],["thizissam.in",19],["ier.ai",19],["adslink.pw",19],["novelssites.com",19],["links.medipost.org",19],["faucetcrypto.net",19],["short.freeltc.top",19],["trxking.xyz",19],["weadown.com",19],["m.bloggingguidance.com",19],["blog.onroid.com",19],["link.codevn.net",19],["upfilesurls.com",19],["link4rev.site",19],["c2g.at",19],["bitcosite.com",[19,404]],["cryptosh.pro",19],["link68.net",19],["traffic123.net",19],["windowslite.net",[19,198]],["viewfr.com",19],["cl1ca.com",19],["4br.me",19],["fir3.net",19],["seulink.*",19],["encurtalink.*",19],["kiddyshort.com",19],["watchmygf.me",[20,44]],["camwhores.*",[20,30,71,72,73]],["camwhorez.tv",[20,30,71,72]],["cambay.tv",[20,52,71,101,103,104,105,106]],["fpo.xxx",[20,52]],["sexemix.com",20],["heavyfetish.com",[20,561]],["thotcity.su",20],["viralxxxporn.com",[20,219]],["tube8.*",[21,22]],["you-porn.com",22],["youporn.*",22],["youporngay.com",22],["youpornru.com",22],["redtube.*",22],["9908ww.com",22],["adelaidepawnbroker.com",22],["bztube.com",22],["hotovs.com",22],["insuredhome.org",22],["nudegista.com",22],["pornluck.com",22],["vidd.se",22],["pornhub.*",[22,170]],["pornhub.com",22],["pornerbros.com",23],["freep.com",23],["porn.com",24],["tune.pk",25],["noticias.gospelmais.com.br",26],["techperiod.com",26],["viki.com",[27,28]],["watch-series.*",29],["watchseries.*",29],["vev.*",29],["vidop.*",29],["vidup.*",29],["sleazyneasy.com",[30,31,32]],["smutr.com",[30,179]],["yourporngod.com",[30,31]],["javbangers.com",[30,287]],["camfox.com",30],["camthots.tv",[30,101]],["shegotass.info",30],["amateur8.com",30],["bigtitslust.com",30],["ebony8.com",30],["freeporn8.com",30],["lesbian8.com",30],["maturetubehere.com",30],["sortporn.com",30],["webcamvau.com",30],["motherporno.com",[30,31,52,103]],["tktube.com",30],["theporngod.com",[30,31]],["watchdirty.to",[30,72,73,104]],["pornsocket.com",33],["luxuretv.com",34],["porndig.com",[35,36]],["webcheats.com.br",37],["ceesty.com",[38,39]],["gestyy.com",[38,39]],["corneey.com",39],["destyy.com",39],["festyy.com",39],["sh.st",39],["mitaku.net",39],["angrybirdsnest.com",40],["zrozz.com",40],["clix4btc.com",40],["4tests.com",40],["business-standard.com",40],["goltelevision.com",40],["news-und-nachrichten.de",40],["laradiobbs.net",40],["urlaubspartner.net",40],["produktion.de",40],["cinemaxxl.de",40],["bladesalvador.com",40],["tempr.email",40],["cshort.org",40],["friendproject.net",40],["covrhub.com",40],["katfile.com",40],["trust.zone",40],["planetsuzy.org",41],["empflix.com",42],["alejandrocenturyoil.com",43],["alleneconomicmatter.com",43],["apinchcaseation.com",43],["bethshouldercan.com",43],["bigclatterhomesguideservice.com",43],["bradleyviewdoctor.com",43],["brittneystandardwestern.com",43],["brookethoughi.com",43],["brucevotewithin.com",43],["cindyeyefinal.com",43],["denisegrowthwide.com",43],["donaldlineelse.com",43],["edwardarriveoften.com",43],["erikcoldperson.com",43],["evelynthankregion.com",43],["graceaddresscommunity.com",43],["heatherdiscussionwhen.com",43],["heatherwholeinvolve.com",43],["housecardsummerbutton.com",43],["jamessoundcost.com",43],["jamesstartstudent.com",43],["jamiesamewalk.com",43],["jasminetesttry.com",43],["jasonresponsemeasure.com",43],["jayservicestuff.com",43],["jessicaglassauthor.com",43],["johntryopen.com",43],["josephseveralconcern.com",43],["kennethofficialitem.com",43],["kristiesoundsimply.com",43],["lisatrialidea.com",43],["lorimuchbenefit.com",43],["loriwithinfamily.com",43],["lukecomparetwo.com",43],["markstyleall.com",43],["michaelapplysome.com",43],["morganoperationface.com",43],["nectareousoverelate.com",43],["paulkitchendark.com",43],["rebeccaneverbase.com",43],["roberteachfinal.com",43],["robertordercharacter.com",43],["robertplacespace.com",43],["ryanagoinvolve.com",43],["sandratableother.com",43],["sandrataxeight.com",43],["seanshowcould.com",43],["sethniceletter.com",43],["shannonpersonalcost.com",43],["sharonwhiledemocratic.com",43],["stevenimaginelittle.com",43],["strawberriesporail.com",43],["susanhavekeep.com",43],["timberwoodanotia.com",43],["tinycat-voe-fashion.com",43],["toddpartneranimal.com",43],["troyyourlead.com",43],["uptodatefinishconference.com",43],["uptodatefinishconferenceroom.com",43],["vincentincludesuccessful.com",43],["voe.sx",43],["maxfinishseveral.com",43],["motphimtv.com",43],["rabbitstream.net",43],["projectfreetv.one",43],["fmovies.*",43],["freeplayervideo.com",43],["nazarickol.com",43],["player-cdn.com",43],["playhydrax.com",[43,472,473]],["transparentcalifornia.com",44],["deepbrid.com",45],["webnovel.com",46],["streamwish.*",[47,48]],["oneupload.to",48],["wishfast.top",48],["rubystm.com",48],["rubyvid.com",48],["schwaebische.de",50],["8tracks.com",51],["3movs.com",52],["bravoerotica.net",[52,103]],["youx.xxx",52],["camclips.tv",[52,179]],["xtits.*",[52,103]],["camflow.tv",[52,103,104,149,219]],["camhoes.tv",[52,101,103,104,149,219]],["xmegadrive.com",52],["xxxymovies.com",52],["xxxshake.com",52],["gayck.com",52],["xhand.com",[52,103]],["analdin.com",[52,103]],["revealname.com",53],["pouvideo.*",54],["povvideo.*",54],["povw1deo.*",54],["povwideo.*",54],["powv1deo.*",54],["powvibeo.*",54],["powvideo.*",54],["powvldeo.*",54],["golfchannel.com",55],["telemundodeportes.com",55],["stream.nbcsports.com",55],["mathdf.com",55],["gamcore.com",56],["porcore.com",56],["porngames.tv",56],["69games.xxx",56],["javmix.app",56],["tecknity.com",57],["haaretz.co.il",58],["haaretz.com",58],["hungama.com",58],["a-o.ninja",58],["anime-odcinki.pl",58],["kumpulmanga.org",58],["shortgoo.blogspot.com",58],["tonanmedia.my.id",[58,427]],["yurasu.xyz",58],["isekaipalace.com",58],["plyjam.*",[59,60]],["ennovelas.com",[60,64]],["foxsports.com.au",61],["canberratimes.com.au",61],["thesimsresource.com",62],["fxporn69.*",63],["vipbox.*",64],["viprow.*",64],["ctrl.blog",65],["sportlife.es",66],["finofilipino.org",67],["desbloqueador.*",68],["xberuang.*",69],["teknorizen.*",69],["mysflink.blogspot.com",69],["assia.tv",70],["assia4.com",70],["assia24.com",70],["cwtvembeds.com",[72,102]],["camlovers.tv",72],["porntn.com",72],["pornissimo.org",72],["sexcams-24.com",[72,104]],["watchporn.to",[72,104]],["camwhorez.video",72],["footstockings.com",[72,73,104]],["xmateur.com",[72,73,104]],["multi.xxx",73],["worldofbitco.in",[74,75]],["weatherx.co.in",[74,75]],["getyourbitco.in",74],["sunbtc.space",74],["subtorrents.*",76],["subtorrents1.*",76],["newpelis.*",76],["pelix.*",76],["allcalidad.*",76],["infomaniakos.*",76],["ojogos.com.br",77],["powforums.com",78],["supforums.com",78],["studybullet.com",78],["usgamer.net",79],["recordonline.com",79],["freebitcoin.win",80],["e-monsite.com",80],["coindice.win",80],["temp-mails.com",81],["freiepresse.de",82],["investing.com",83],["tornadomovies.*",84],["mp3fiber.com",85],["chicoer.com",86],["dailybreeze.com",86],["dailybulletin.com",86],["dailynews.com",86],["delcotimes.com",86],["eastbaytimes.com",86],["macombdaily.com",86],["ocregister.com",86],["pasadenastarnews.com",86],["pe.com",86],["presstelegram.com",86],["redlandsdailyfacts.com",86],["reviewjournal.com",86],["santacruzsentinel.com",86],["saratogian.com",86],["sentinelandenterprise.com",86],["sgvtribune.com",86],["tampabay.com",86],["times-standard.com",86],["theoaklandpress.com",86],["trentonian.com",86],["twincities.com",86],["whittierdailynews.com",86],["bostonherald.com",86],["dailycamera.com",86],["sbsun.com",86],["dailydemocrat.com",86],["montereyherald.com",86],["orovillemr.com",86],["record-bee.com",86],["redbluffdailynews.com",86],["reporterherald.com",86],["thereporter.com",86],["timescall.com",86],["timesheraldonline.com",86],["ukiahdailyjournal.com",86],["dailylocal.com",86],["mercurynews.com",86],["suedkurier.de",87],["anysex.com",89],["icdrama.*",90],["vlist.se",90],["mangasail.*",90],["pornve.com",91],["file4go.*",92],["coolrom.com.au",92],["pornohirsch.net",93],["marie-claire.es",94],["gamezhero.com",94],["flashgirlgames.com",94],["onlinesudoku.games",94],["mpg.football",94],["sssam.com",94],["globalnews.ca",95],["drinksmixer.com",96],["leitesculinaria.com",96],["fupa.net",97],["browardpalmbeach.com",98],["dallasobserver.com",98],["houstonpress.com",98],["miaminewtimes.com",98],["phoenixnewtimes.com",98],["westword.com",98],["nhentai.net",99],["nowtv.com.tr",100],["caminspector.net",101],["camwhoreshd.com",101],["camgoddess.tv",101],["gay4porn.com",103],["mypornhere.com",103],["mangovideo.*",104],["love4porn.com",104],["thotvids.com",104],["watchmdh.to",104],["celebwhore.com",104],["cluset.com",104],["4kporn.xxx",104],["xhomealone.com",104],["lusttaboo.com",[104,360]],["hentai-moon.com",104],["sexwebvideo.com",104],["sexwebvideo.net",104],["camhub.cc",[104,533]],["mediapason.it",107],["linkspaid.com",107],["tuotromedico.com",107],["neoteo.com",107],["phoneswiki.com",107],["celebmix.com",107],["myneobuxportal.com",107],["oyungibi.com",107],["25yearslatersite.com",107],["jeshoots.com",108],["techhx.com",108],["karanapk.com",108],["flashplayer.fullstacks.net",110],["cloudapps.herokuapp.com",110],["youfiles.herokuapp.com",110],["texteditor.nsspot.net",110],["temp-mail.org",111],["asianclub.*",112],["javhdporn.net",112],["vidmoly.to",113],["comnuan.com",114],["veedi.com",115],["battleboats.io",115],["anitube.*",116],["fruitlab.com",116],["acetack.com",116],["androidquest.com",116],["apklox.com",116],["chhaprawap.in",116],["gujarativyakaran.com",116],["kashmirstudentsinformation.in",116],["kisantime.com",116],["shetkaritoday.in",116],["pastescript.com",116],["trimorspacks.com",116],["updrop.link",116],["haddoz.net",116],["streamingcommunity.*",116],["garoetpos.com",116],["stiletv.it",117],["mixdrop.*",118],["hqtv.biz",119],["liveuamap.com",120],["muvibg.com",120],["vinomo.xyz",121],["bembed.net",121],["embedv.net",121],["fslinks.org",121],["listeamed.net",121],["v6embed.xyz",121],["vembed.*",121],["vgplayer.xyz",121],["vid-guard.com",121],["audycje.tokfm.pl",122],["hulu.com",[123,124,125]],["shush.se",126],["allkpop.com",127],["empire-anime.*",[128,422,423,424,425,426]],["empire-streaming.*",[128,422,423,424]],["empire-anime.com",[128,422,423,424]],["empire-streamz.fr",[128,422,423,424]],["empire-stream.*",[128,422,423,424]],["pickcrackpasswords.blogspot.com",129],["kfrfansub.com",130],["thuglink.com",130],["voipreview.org",130],["illicoporno.com",131],["lavoixdux.com",131],["tonpornodujour.com",131],["jacquieetmichel.net",131],["swame.com",131],["vosfemmes.com",131],["voyeurfrance.net",131],["jacquieetmicheltv.net",[131,482,483]],["hanime.tv",132],["pogo.com",133],["cloudvideo.tv",134],["legionjuegos.org",135],["legionpeliculas.org",135],["legionprogramas.org",135],["16honeys.com",136],["elespanol.com",137],["remodelista.com",138],["coolmathgames.com",[139,140,141,585]],["audiofanzine.com",142],["uploadev.*",143],["hitokin.net",144],["developerinsider.co",145],["ilprimatonazionale.it",146],["hotabis.com",146],["root-nation.com",146],["italpress.com",146],["airsoftmilsimnews.com",146],["artribune.com",146],["thehindu.com",147],["cambro.tv",[148,149]],["boobsradar.com",[149,219,543]],["nibelungen-kurier.de",150],["ver-pelis-online.*",151],["adfoc.us",152],["tea-coffee.net",152],["spatsify.com",152],["newedutopics.com",152],["getviralreach.in",152],["edukaroo.com",152],["funkeypagali.com",152],["careersides.com",152],["nayisahara.com",152],["wikifilmia.com",152],["infinityskull.com",152],["viewmyknowledge.com",152],["iisfvirtual.in",152],["starxinvestor.com",152],["jkssbalerts.com",152],["sahlmarketing.net",152],["filmypoints.in",152],["fitnessholic.net",152],["moderngyan.com",152],["sattakingcharts.in",152],["freshbhojpuri.com",152],["bgmi32bitapk.in",152],["bankshiksha.in",152],["earn.mpscstudyhub.com",152],["earn.quotesopia.com",152],["money.quotesopia.com",152],["best-mobilegames.com",152],["learn.moderngyan.com",152],["bharatsarkarijobalert.com",152],["quotesopia.com",152],["creditsgoal.com",152],["techacode.com",152],["trickms.com",152],["ielts-isa.edu.vn",152],["sptfy.be",152],["mcafee-com.com",[152,228]],["pianetamountainbike.it",153],["barchart.com",154],["modelisme.com",155],["parasportontario.ca",155],["prescottenews.com",155],["nrj-play.fr",156],["hackingwithreact.com",157],["gutekueche.at",158],["eplfootballmatch.com",159],["ancient-origins.*",159],["peekvids.com",160],["playvids.com",160],["pornflip.com",160],["redensarten-index.de",161],["vw-page.com",162],["viz.com",[163,164]],["0rechner.de",165],["configspc.com",166],["xopenload.me",166],["uptobox.com",166],["uptostream.com",166],["japgay.com",167],["mega-debrid.eu",168],["dreamdth.com",169],["diaridegirona.cat",171],["diariodeibiza.es",171],["diariodemallorca.es",171],["diarioinformacion.com",171],["eldia.es",171],["emporda.info",171],["farodevigo.es",171],["laopinioncoruna.es",171],["laopiniondemalaga.es",171],["laopiniondemurcia.es",171],["laopiniondezamora.es",171],["laprovincia.es",171],["levante-emv.com",171],["mallorcazeitung.es",171],["regio7.cat",171],["superdeporte.es",171],["playpaste.com",172],["cnbc.com",173],["puzzles.msn.com",174],["metro.us",174],["newsobserver.com",174],["arkadiumhosted.com",174],["primevideo.com",175],["read.amazon.*",[175,556]],["firefaucet.win",176],["74k.io",[177,178]],["stmruby.com",177],["fullhdxxx.com",180],["pornclassic.tube",181],["tubepornclassic.com",181],["etonline.com",182],["creatur.io",182],["lookcam.*",182],["drphil.com",182],["urbanmilwaukee.com",182],["lootlinks.*",182],["ontiva.com",182],["hideandseek.world",182],["myabandonware.com",182],["kendam.com",182],["wttw.com",182],["synonyms.com",182],["definitions.net",182],["hostmath.com",182],["camvideoshub.com",182],["minhaconexao.com.br",182],["home-made-videos.com",184],["amateur-couples.com",184],["slutdump.com",184],["dpstream.*",185],["produsat.com",186],["bluemediafiles.*",187],["12thman.com",188],["acusports.com",188],["atlantic10.com",188],["auburntigers.com",188],["baylorbears.com",188],["bceagles.com",188],["bgsufalcons.com",188],["big12sports.com",188],["bigten.org",188],["bradleybraves.com",188],["butlersports.com",188],["cmumavericks.com",188],["conferenceusa.com",188],["cyclones.com",188],["dartmouthsports.com",188],["daytonflyers.com",188],["dbupatriots.com",188],["dbusports.com",188],["denverpioneers.com",188],["fduknights.com",188],["fgcuathletics.com",188],["fightinghawks.com",188],["fightingillini.com",188],["floridagators.com",188],["friars.com",188],["friscofighters.com",188],["gamecocksonline.com",188],["goarmywestpoint.com",188],["gobison.com",188],["goblueraiders.com",188],["gobobcats.com",188],["gocards.com",188],["gocreighton.com",188],["godeacs.com",188],["goexplorers.com",188],["goetbutigers.com",188],["gofrogs.com",188],["gogriffs.com",188],["gogriz.com",188],["golobos.com",188],["gomarquette.com",188],["gopack.com",188],["gophersports.com",188],["goprincetontigers.com",188],["gopsusports.com",188],["goracers.com",188],["goshockers.com",188],["goterriers.com",188],["gotigersgo.com",188],["gousfbulls.com",188],["govandals.com",188],["gowyo.com",188],["goxavier.com",188],["gozags.com",188],["gozips.com",188],["griffinathletics.com",188],["guhoyas.com",188],["gwusports.com",188],["hailstate.com",188],["hamptonpirates.com",188],["hawaiiathletics.com",188],["hokiesports.com",188],["huskers.com",188],["icgaels.com",188],["iuhoosiers.com",188],["jsugamecocksports.com",188],["longbeachstate.com",188],["loyolaramblers.com",188],["lrtrojans.com",188],["lsusports.net",188],["morrisvillemustangs.com",188],["msuspartans.com",188],["muleriderathletics.com",188],["mutigers.com",188],["navysports.com",188],["nevadawolfpack.com",188],["niuhuskies.com",188],["nkunorse.com",188],["nuhuskies.com",188],["nusports.com",188],["okstate.com",188],["olemisssports.com",188],["omavs.com",188],["ovcsports.com",188],["owlsports.com",188],["purduesports.com",188],["redstormsports.com",188],["richmondspiders.com",188],["sfajacks.com",188],["shupirates.com",188],["siusalukis.com",188],["smcgaels.com",188],["smumustangs.com",188],["soconsports.com",188],["soonersports.com",188],["themw.com",188],["tulsahurricane.com",188],["txst.com",188],["txstatebobcats.com",188],["ubbulls.com",188],["ucfknights.com",188],["ucirvinesports.com",188],["uconnhuskies.com",188],["uhcougars.com",188],["uicflames.com",188],["umterps.com",188],["uncwsports.com",188],["unipanthers.com",188],["unlvrebels.com",188],["uoflsports.com",188],["usdtoreros.com",188],["utahstateaggies.com",188],["utepathletics.com",188],["utrockets.com",188],["uvmathletics.com",188],["uwbadgers.com",188],["villanova.com",188],["wkusports.com",188],["wmubroncos.com",188],["woffordterriers.com",188],["1pack1goal.com",188],["bcuathletics.com",188],["bubraves.com",188],["goblackbears.com",188],["golightsgo.com",188],["gomcpanthers.com",188],["goutsa.com",188],["mercerbears.com",188],["pirateblue.com",188],["pirateblue.net",188],["pirateblue.org",188],["quinnipiacbobcats.com",188],["towsontigers.com",188],["tribeathletics.com",188],["tribeclub.com",188],["utepminermaniacs.com",188],["utepminers.com",188],["wkutickets.com",188],["aopathletics.org",188],["atlantichockeyonline.com",188],["bigsouthnetwork.com",188],["bigsouthsports.com",188],["chawomenshockey.com",188],["dbupatriots.org",188],["drakerelays.org",188],["ecac.org",188],["ecacsports.com",188],["emueagles.com",188],["emugameday.com",188],["gculopes.com",188],["godrakebulldog.com",188],["godrakebulldogs.com",188],["godrakebulldogs.net",188],["goeags.com",188],["goislander.com",188],["goislanders.com",188],["gojacks.com",188],["gomacsports.com",188],["gseagles.com",188],["hubison.com",188],["iowaconference.com",188],["ksuowls.com",188],["lonestarconference.org",188],["mascac.org",188],["midwestconference.org",188],["mountaineast.org",188],["niu-pack.com",188],["nulakers.ca",188],["oswegolakers.com",188],["ovcdigitalnetwork.com",188],["pacersports.com",188],["rmacsports.org",188],["rollrivers.com",188],["samfordsports.com",188],["uncpbraves.com",188],["usfdons.com",188],["wiacsports.com",188],["alaskananooks.com",188],["broncathleticfund.com",188],["cameronaggies.com",188],["columbiacougars.com",188],["etownbluejays.com",188],["gobadgers.ca",188],["golancers.ca",188],["gometrostate.com",188],["gothunderbirds.ca",188],["kentstatesports.com",188],["lehighsports.com",188],["lopers.com",188],["lycoathletics.com",188],["lycomingathletics.com",188],["maraudersports.com",188],["mauiinvitational.com",188],["msumavericks.com",188],["nauathletics.com",188],["nueagles.com",188],["nwusports.com",188],["oceanbreezenyc.org",188],["patriotathleticfund.com",188],["pittband.com",188],["principiaathletics.com",188],["roadrunnersathletics.com",188],["sidearmsocial.com",188],["snhupenmen.com",188],["stablerarena.com",188],["stoutbluedevils.com",188],["uwlathletics.com",188],["yumacs.com",188],["collegefootballplayoff.com",188],["csurams.com",188],["cubuffs.com",188],["gobearcats.com",188],["gohuskies.com",188],["mgoblue.com",188],["osubeavers.com",188],["pittsburghpanthers.com",188],["rolltide.com",188],["texassports.com",188],["thesundevils.com",188],["uclabruins.com",188],["wvuathletics.com",188],["wvusports.com",188],["arizonawildcats.com",188],["calbears.com",188],["cuse.com",188],["georgiadogs.com",188],["goducks.com",188],["goheels.com",188],["gostanford.com",188],["insidekstatesports.com",188],["insidekstatesports.info",188],["insidekstatesports.net",188],["insidekstatesports.org",188],["k-stateathletics.com",188],["k-statefootball.net",188],["k-statefootball.org",188],["k-statesports.com",188],["k-statesports.net",188],["k-statesports.org",188],["k-statewomenshoops.com",188],["k-statewomenshoops.net",188],["k-statewomenshoops.org",188],["kstateathletics.com",188],["kstatefootball.net",188],["kstatefootball.org",188],["kstatesports.com",188],["kstatewomenshoops.com",188],["kstatewomenshoops.net",188],["kstatewomenshoops.org",188],["ksuathletics.com",188],["ksusports.com",188],["scarletknights.com",188],["showdownforrelief.com",188],["syracusecrunch.com",188],["texastech.com",188],["theacc.com",188],["ukathletics.com",188],["usctrojans.com",188],["utahutes.com",188],["utsports.com",188],["wsucougars.com",188],["vidlii.com",[188,213]],["tricksplit.io",188],["fangraphs.com",189],["stern.de",190],["geo.de",190],["brigitte.de",190],["tvspielfilm.de",[191,192,193,194]],["tvtoday.de",[191,192,193,194]],["chip.de",[191,192,193,194]],["focus.de",[191,192,193,194]],["fitforfun.de",[191,192,193,194]],["n-tv.de",195],["player.rtl2.de",196],["planetaminecraft.com",197],["cravesandflames.com",198],["codesnse.com",198],["flyad.vip",198],["lapresse.ca",199],["kolyoom.com",200],["ilovephd.com",200],["negumo.com",201],["games.wkb.jp",[202,203]],["fandom.com",[204,602,603]],["kenshi.fandom.com",205],["hausbau-forum.de",206],["homeairquality.org",206],["faucettronn.click",206],["fake-it.ws",207],["laksa19.github.io",208],["1shortlink.com",209],["u-s-news.com",210],["luscious.net",211],["makemoneywithurl.com",212],["junkyponk.com",212],["healthfirstweb.com",212],["vocalley.com",212],["yogablogfit.com",212],["howifx.com",[212,389]],["en.financerites.com",212],["mythvista.com",212],["livenewsflix.com",212],["cureclues.com",212],["apekite.com",212],["host-buzz.com",212],["insmyst.com",212],["wp2host.com",212],["blogtechh.com",212],["techbixby.com",212],["blogmyst.com",212],["enit.in",212],["iammagnus.com",213],["dailyvideoreports.net",213],["unityassets4free.com",213],["docer.*",214],["resetoff.pl",214],["sexodi.com",214],["cdn77.org",215],["3sexporn.com",216],["momxxxsex.com",216],["myfreevintageporn.com",216],["penisbuyutucum.net",216],["ujszo.com",217],["newsmax.com",218],["bobs-tube.com",219],["nadidetarifler.com",220],["siz.tv",220],["suzylu.co.uk",[221,222]],["onworks.net",223],["yabiladi.com",223],["downloadsoft.net",224],["pixsera.net",225],["testlanguages.com",226],["newsinlevels.com",226],["videosinlevels.com",226],["thecryptomen.com",227],["sabkiyojana.com",227],["starkroboticsfrc.com",228],["sinonimos.de",228],["antonimos.de",228],["quesignifi.ca",228],["tiktokrealtime.com",228],["tiktokcounter.net",228],["tpayr.xyz",228],["poqzn.xyz",228],["ashrfd.xyz",228],["rezsx.xyz",228],["tryzt.xyz",228],["ashrff.xyz",228],["rezst.xyz",228],["dawenet.com",228],["erzar.xyz",228],["waezm.xyz",228],["waezg.xyz",228],["blackwoodacademy.org",228],["cryptednews.space",228],["vivuq.com",228],["swgop.com",228],["vbnmll.com",228],["telcoinfo.online",228],["dshytb.com",228],["btcbitco.in",[228,231]],["btcsatoshi.net",228],["cempakajaya.com",228],["crypto4yu.com",228],["readbitcoin.org",228],["wiour.com",228],["finish.addurl.biz",228],["aiimgvlog.fun",[228,234]],["laweducationinfo.com",228],["savemoneyinfo.com",228],["worldaffairinfo.com",228],["godstoryinfo.com",228],["successstoryinfo.com",228],["cxissuegk.com",228],["learnmarketinfo.com",228],["bhugolinfo.com",228],["armypowerinfo.com",228],["rsadnetworkinfo.com",228],["rsinsuranceinfo.com",228],["rsfinanceinfo.com",228],["rsgamer.app",228],["rssoftwareinfo.com",228],["rshostinginfo.com",228],["rseducationinfo.com",228],["phonereviewinfo.com",228],["makeincomeinfo.com",228],["gknutshell.com",228],["vichitrainfo.com",228],["workproductivityinfo.com",228],["dopomininfo.com",228],["hostingdetailer.com",228],["fitnesssguide.com",228],["tradingfact4u.com",228],["cryptofactss.com",228],["softwaredetail.com",228],["artoffocas.com",228],["insurancesfact.com",228],["travellingdetail.com",228],["advertisingexcel.com",228],["allcryptoz.net",228],["batmanfactor.com",228],["beautifulfashionnailart.com",228],["crewbase.net",228],["documentaryplanet.xyz",228],["crewus.net",228],["gametechreviewer.com",228],["midebalonu.net",228],["misterio.ro",228],["phineypet.com",228],["seory.xyz",228],["shinbhu.net",228],["shinchu.net",228],["substitutefor.com",228],["talkforfitness.com",228],["thefitbrit.co.uk",228],["thumb8.net",228],["thumb9.net",228],["topcryptoz.net",228],["uniqueten.net",228],["ultraten.net",228],["exactpay.online",228],["quins.us",228],["kiddyearner.com",228],["imagereviser.com",229],["4funbox.com",230],["nephobox.com",230],["1024tera.com",230],["terabox.*",230],["blog.cryptowidgets.net",231],["blog.insurancegold.in",231],["blog.wiki-topia.com",231],["blog.coinsvalue.net",231],["blog.cookinguide.net",231],["blog.freeoseocheck.com",231],["blog24.me",231],["bildirim.*",233],["arahdrive.com",234],["appsbull.com",235],["diudemy.com",235],["maqal360.com",[235,236,237]],["lifesurance.info",238],["akcartoons.in",239],["cybercityhelp.in",239],["infokeeda.xyz",241],["webzeni.com",241],["dl.apkmoddone.com",242],["phongroblox.com",242],["apkmodvn.com",243],["fuckingfast.net",244],["streamelements.com",245],["share.hntv.tv",[245,671,672,673]],["forum.dji.com",[245,673]],["unionpayintl.com",[245,672]],["tickhosting.com",246],["in91vip.win",247],["kicker.de",[248,632]],["t-online.de",249],["upornia.*",[250,251]],["arcai.com",252],["my-code4you.blogspot.com",253],["flickr.com",254],["firefile.cc",255],["pestleanalysis.com",255],["kochamjp.pl",255],["tutorialforlinux.com",255],["whatsaero.com",255],["animeblkom.net",[255,269]],["blkom.com",255],["globes.co.il",[256,257]],["jardiner-malin.fr",258],["tw-calc.net",259],["ohmybrush.com",260],["talkceltic.net",261],["mentalfloss.com",262],["uprafa.com",263],["cube365.net",264],["wwwfotografgotlin.blogspot.com",265],["freelistenonline.com",265],["badassdownloader.com",266],["quickporn.net",267],["yellowbridge.com",268],["aosmark.com",270],["ctrlv.*",271],["atozmath.com",[272,273,274,275,276,277,278]],["newyorker.com",279],["brighteon.com",280],["more.tv",281],["video1tube.com",282],["alohatube.xyz",282],["4players.de",283],["onlinesoccermanager.com",283],["fshost.me",284],["link.cgtips.org",285],["hentaicloud.com",286],["netfapx.com",288],["javdragon.org",288],["javneon.tv",288],["paperzonevn.com",289],["hentaienglish.com",290],["hentaiporno.xxx",290],["venge.io",[291,292]],["btcbux.io",293],["its.porn",[294,295]],["atv.at",296],["2ndrun.tv",297],["rackusreads.com",297],["teachmemicro.com",297],["willcycle.com",297],["kusonime.com",[298,299]],["123movieshd.*",300],["imgur.com",[301,302,562]],["hentai-party.com",303],["hentaicomics.pro",303],["xxx-comics.pro",303],["uproxy.*",304],["animesa.*",305],["subtitle.one",306],["subtitleone.cc",306],["genshinimpactcalculator.com",307],["mysexgames.com",308],["cinecalidad.*",[309,310]],["embed.indavideo.hu",311],["xnxx.com",312],["xvideos.*",312],["gdr-online.com",313],["mmm.dk",314],["iqiyi.com",[315,316,456]],["m.iqiyi.com",317],["nbcolympics.com",318],["apkhex.com",319],["indiansexstories2.net",320],["issstories.xyz",320],["1340kbbr.com",321],["gorgeradio.com",321],["kduk.com",321],["kedoam.com",321],["kejoam.com",321],["kelaam.com",321],["khsn1230.com",321],["kjmx.rocks",321],["kloo.com",321],["klooam.com",321],["klykradio.com",321],["kmed.com",321],["kmnt.com",321],["kool991.com",321],["kpnw.com",321],["kppk983.com",321],["krktcountry.com",321],["ktee.com",321],["kwro.com",321],["kxbxfm.com",321],["thevalley.fm",321],["quizlet.com",322],["dsocker1234.blogspot.com",323],["schoolcheats.net",[324,325]],["mgnet.xyz",326],["japopav.tv",327],["lvturbo.com",327],["designtagebuch.de",328],["pixroute.com",329],["uploady.io",330],["calculator-online.net",331],["luckydice.net",332],["adarima.org",332],["weatherwx.com",332],["sattaguess.com",332],["winshell.de",332],["rosasidan.ws",332],["modmakers.xyz",332],["gamepure.in",332],["warrenrahul.in",332],["austiblox.net",332],["upiapi.in",332],["networkhint.com",332],["thichcode.net",332],["texturecan.com",332],["tikmate.app",[332,464]],["arcaxbydz.id",332],["quotesshine.com",332],["porngames.club",333],["sexgames.xxx",333],["111.90.159.132",334],["mobile-tracker-free.com",335],["pfps.gg",336],["social-unlock.com",337],["superpsx.com",338],["ninja.io",339],["sourceforge.net",340],["samfirms.com",341],["rapelust.com",342],["vtube.to",342],["vtplay.net",342],["desitelugusex.com",342],["dvdplay.*",342],["xvideos-downloader.net",342],["xxxvideotube.net",342],["sdefx.cloud",342],["nozomi.la",342],["moviesonlinefree.net",342],["banned.video",343],["madmaxworld.tv",343],["androidpolice.com",343],["babygaga.com",343],["backyardboss.net",343],["carbuzz.com",343],["cbr.com",343],["collider.com",343],["dualshockers.com",343],["footballfancast.com",343],["footballleagueworld.co.uk",343],["gamerant.com",343],["givemesport.com",343],["hardcoregamer.com",343],["hotcars.com",343],["howtogeek.com",343],["makeuseof.com",343],["moms.com",343],["movieweb.com",343],["pocket-lint.com",343],["pocketnow.com",343],["screenrant.com",343],["simpleflying.com",343],["thegamer.com",343],["therichest.com",343],["thesportster.com",343],["thethings.com",343],["thetravel.com",343],["topspeed.com",343],["xda-developers.com",343],["huffpost.com",344],["ingles.com",345],["spanishdict.com",345],["surfline.com",[346,347]],["play.tv3.ee",348],["play.tv3.lt",348],["play.tv3.lv",348],["tv3play.skaties.lv",348],["trendyoum.com",349],["bulbagarden.net",350],["hollywoodlife.com",351],["mat6tube.com",352],["textstudio.co",353],["newtumbl.com",354],["apkmaven.*",355],["aruble.net",356],["nevcoins.club",357],["mail.com",358],["gmx.*",359],["oggi.it",[361,362]],["manoramamax.com",361],["video.gazzetta.it",[361,362]],["mangakita.id",363],["avpgalaxy.net",364],["mhma12.tech",365],["panda-novel.com",366],["zebranovel.com",366],["lightsnovel.com",366],["eaglesnovel.com",366],["pandasnovel.com",366],["ewrc-results.com",367],["kizi.com",368],["cyberscoop.com",369],["fedscoop.com",369],["canale.live",370],["indiatimes.com",371],["netzwelt.de",372],["jeep-cj.com",373],["sponsorhunter.com",374],["cloudcomputingtopics.net",375],["likecs.com",376],["tiscali.it",377],["linkspy.cc",378],["adshnk.com",379],["chattanoogan.com",380],["adsy.pw",381],["playstore.pw",381],["socialmediagirls.com",382],["windowspro.de",383],["snapinst.app",384],["jiocinema.com",385],["rapid-cloud.co",385],["uploadmall.com",385],["rkd3.dev",385],["tvtv.ca",386],["tvtv.us",386],["mydaddy.cc",387],["roadtrippin.fr",388],["vavada5com.com",389],["anyporn.com",[390,407]],["bravoporn.com",390],["bravoteens.com",390],["crocotube.com",390],["hellmoms.com",390],["hellporno.com",390],["sex3.com",390],["tubewolf.com",390],["xbabe.com",390],["xcum.com",390],["zedporn.com",390],["imagetotext.info",391],["infokik.com",392],["freepik.com",393],["ddwloclawek.pl",[394,395]],["www.seznam.cz",396],["deezer.com",[397,708,709]],["my-subs.co",398],["plaion.com",399],["slideshare.net",[400,401]],["ustreasuryyieldcurve.com",402],["businesssoftwarehere.com",403],["goo.st",403],["freevpshere.com",403],["softwaresolutionshere.com",403],["gamereactor.*",405],["madoohd.com",406],["doomovie-hd.*",406],["staige.tv",408],["in-jpn.com",409],["oninet.ne.jp",409],["xth.jp",409],["androidadult.com",410],["streamvid.net",411],["watchtv24.com",412],["cellmapper.net",413],["medscape.com",414],["newscon.org",[415,416]],["arkadium.com",417],["wheelofgold.com",418],["drakecomic.*",418],["app.blubank.com",419],["mobileweb.bankmellat.ir",419],["sportdeutschland.tv",420],["kcra.com",420],["wcvb.com",420],["chat.nrj.fr",421],["chat.tchatche.com",[421,436]],["ccthesims.com",428],["chromeready.com",428],["coursedrive.org",428],["dtbps3games.com",428],["illustratemagazine.com",428],["uknip.co.uk",428],["vod.pl",429],["megadrive-emulator.com",430],["tvhay.*",[431,432]],["animesaga.in",433],["moviesapi.club",433],["bestx.stream",433],["watchx.top",433],["digimanie.cz",434],["svethardware.cz",434],["srvy.ninja",435],["cnn.com",[437,438,439]],["edmdls.com",440],["freshremix.net",440],["scenedl.org",440],["trakt.tv",441],["client.falixnodes.net",442],["shroomers.app",443],["classicalradio.com",444],["di.fm",444],["jazzradio.com",444],["radiotunes.com",444],["rockradio.com",444],["zenradio.com",444],["pc-builds.com",445],["qtoptens.com",445],["reuters.com",445],["today.com",445],["videogamer.com",445],["wrestlinginc.com",445],["gbatemp.net",445],["usatoday.com",[446,710]],["ydr.com",446],["getthit.com",447],["techedubyte.com",448],["soccerinhd.com",448],["movie-th.tv",449],["iwanttfc.com",450],["nutraingredients-asia.com",451],["nutraingredients-latam.com",451],["nutraingredients-usa.com",451],["nutraingredients.com",451],["ozulscansen.com",452],["nexusmods.com",453],["lookmovie.*",454],["lookmovie2.to",454],["royalroad.com",455],["biletomat.pl",457],["hextank.io",[458,459]],["filmizlehdfilm.com",[460,461,462,463]],["filmizletv.*",[460,461,462,463]],["fullfilmizle.cc",[460,461,462,463]],["gofilmizle.net",[460,461,462,463]],["btvplus.bg",465],["sagewater.com",466],["redlion.net",466],["satdl.com",467],["vidstreaming.xyz",468],["everand.com",469],["myradioonline.pl",470],["cbs.com",471],["paramountplus.com",471],["abysscdn.com",[472,473]],["fullxh.com",474],["galleryxh.site",474],["megaxh.com",474],["movingxh.world",474],["seexh.com",474],["unlockxh4.com",474],["valuexh.life",474],["xhaccess.com",474],["xhadult2.com",474],["xhadult3.com",474],["xhadult4.com",474],["xhadult5.com",474],["xhamster.*",474],["xhamster1.*",474],["xhamster10.*",474],["xhamster11.*",474],["xhamster12.*",474],["xhamster13.*",474],["xhamster14.*",474],["xhamster15.*",474],["xhamster16.*",474],["xhamster17.*",474],["xhamster18.*",474],["xhamster19.*",474],["xhamster20.*",474],["xhamster2.*",474],["xhamster3.*",474],["xhamster4.*",474],["xhamster42.*",474],["xhamster46.com",474],["xhamster5.*",474],["xhamster7.*",474],["xhamster8.*",474],["xhamsterporno.mx",474],["xhbig.com",474],["xhbranch5.com",474],["xhchannel.com",474],["xhdate.world",474],["xhday.com",474],["xhday1.com",474],["xhlease.world",474],["xhmoon5.com",474],["xhofficial.com",474],["xhopen.com",474],["xhplanet1.com",474],["xhplanet2.com",474],["xhreal2.com",474],["xhreal3.com",474],["xhspot.com",474],["xhtotal.com",474],["xhtree.com",474],["xhvictory.com",474],["xhwebsite.com",474],["xhwebsite2.com",474],["xhwebsite5.com",474],["xhwide1.com",474],["xhwide2.com",474],["xhwide5.com",474],["file-upload.net",475],["lightnovelworld.*",476],["acortalo.*",[477,478,479,480]],["acortar.*",[477,478,479,480]],["megadescarga.net",[477,478,479,480]],["megadescargas.net",[477,478,479,480]],["hentaihaven.xxx",481],["jacquieetmicheltv2.net",483],["a2zapk.*",484],["fcportables.com",[485,486]],["emurom.net",487],["freethesaurus.com",[488,489]],["thefreedictionary.com",[488,489]],["oeffentlicher-dienst.info",490],["im9.eu",491],["dcdlplayer8a06f4.xyz",492],["ultimate-guitar.com",493],["claimbits.net",494],["sexyscope.net",495],["kickassanime.*",496],["recherche-ebook.fr",497],["virtualdinerbot.com",497],["zonebourse.com",498],["pink-sluts.net",499],["andhrafriends.com",500],["benzinpreis.de",501],["turtleviplay.xyz",502],["paktech2.com",503],["defenseone.com",504],["govexec.com",504],["nextgov.com",504],["route-fifty.com",504],["sharing.wtf",505],["wetter3.de",506],["esportivos.fun",507],["cosmonova-broadcast.tv",508],["hartvannederland.nl",509],["shownieuws.nl",509],["vandaaginside.nl",509],["rock.porn",[510,511]],["videzz.net",[512,513]],["ezaudiobookforsoul.com",514],["club386.com",515],["littlebigsnake.com",516],["easyfun.gg",517],["smailpro.com",518],["ilgazzettino.it",519],["ilmessaggero.it",519],["3bmeteo.com",[520,521]],["mconverter.eu",522],["lover937.net",523],["10gb.vn",524],["pes6.es",525],["tactics.tools",[526,527]],["boundhub.com",528],["alocdnnetu.xyz",529],["reliabletv.me",530],["jakondo.ru",531],["filecrypt.*",532],["nolive.me",534],["wired.com",535],["spankbang.*",[536,537,538,564,565]],["anonymfile.com",539],["gofile.to",539],["dotycat.com",540],["rateyourmusic.com",541],["reporterpb.com.br",542],["blog-dnz.com",544],["18adultgames.com",545],["colnect.com",[546,547]],["adultgamesworld.com",548],["bgmiupdate.com.in",549],["reviewdiv.com",550],["parametric-architecture.com",551],["laurelberninteriors.com",[552,567]],["filmweb.pl",[553,554]],["voiceofdenton.com",555],["concealednation.org",555],["www.google.*",557],["tacobell.com",558],["zefoy.com",559],["cnet.com",560],["natgeotv.com",563],["globo.com",566],["wayfair.com",568],["br.de",569],["indeed.com",570],["pasteboard.co",571],["clickhole.com",572],["deadspin.com",572],["gizmodo.com",572],["jalopnik.com",572],["jezebel.com",572],["kotaku.com",572],["lifehacker.com",572],["splinternews.com",572],["theinventory.com",572],["theonion.com",572],["theroot.com",572],["thetakeout.com",572],["pewresearch.org",572],["los40.com",[573,574]],["as.com",574],["telegraph.co.uk",[575,576]],["poweredbycovermore.com",[575,625]],["lumens.com",[575,625]],["verizon.com",577],["humanbenchmark.com",578],["politico.com",579],["officedepot.co.cr",[580,581]],["officedepot.*",[582,583]],["usnews.com",584],["factable.com",586],["zee5.com",587],["gala.fr",588],["geo.fr",588],["voici.fr",588],["gloucestershirelive.co.uk",589],["arsiv.mackolik.com",590],["jacksonguitars.com",591],["scandichotels.com",592],["stylist.co.uk",593],["nettiauto.com",594],["thaiairways.com",[595,596]],["cerbahealthcare.it",[597,598]],["futura-sciences.com",[597,614]],["toureiffel.paris",597],["tiendaenlinea.claro.com.ni",[599,600]],["tieba.baidu.com",601],["grasshopper.com",[604,605]],["epson.com.cn",[606,607,608,609]],["oe24.at",[610,611]],["szbz.de",610],["platform.autods.com",[612,613]],["wikihow.com",615],["citibank.com.sg",616],["uol.com.br",[617,618,619,620,621]],["gazzetta.gr",622],["digicol.dpm.org.cn",[623,624]],["virginmediatelevision.ie",626],["larazon.es",[627,628]],["waitrosecellar.com",[629,630,631]],["sharpen-free-design-generator.netlify.app",[633,634]],["help.cashctrl.com",[635,636]],["gry-online.pl",637],["vidaextra.com",638],["commande.rhinov.pro",[639,640]],["ecom.wixapps.net",[639,640]],["tipranks.com",[641,642]],["iceland.co.uk",[643,644,645]],["socket.pearsoned.com",646],["tntdrama.com",[647,648]],["trutv.com",[647,648]],["mobile.de",[649,650]],["ioe.vn",[651,652]],["geiriadur.ac.uk",[651,655]],["welsh-dictionary.ac.uk",[651,655]],["bikeportland.org",[653,654]],["biologianet.com",[618,619,620]],["10play.com.au",[656,657]],["sunshine-live.de",[658,659]],["whatismyip.com",[660,661]],["myfitnesspal.com",662],["netoff.co.jp",[663,664]],["foundit.*",[665,666]],["clickjogos.com.br",667],["bristan.com",[668,669]],["zillow.com",670],["optimum.net",[674,675]],["hdfcfund.com",676],["user.guancha.cn",[677,678]],["sosovalue.com",679],["bandyforbundet.no",[680,681]],["tatacommunications.com",682],["suamusica.com.br",[683,684,685]],["macrotrends.net",[686,687]],["code.world",688],["smartcharts.net",688],["topgear.com",689],["eservice.directauto.com",[690,691]],["nbcsports.com",692],["standard.co.uk",693],["pruefernavi.de",[694,695]],["speedtest.net",[696,697]],["17track.net",698],["visible.com",[699,708,709]],["hagerty.com",[700,701]],["kino.de",[702,703]],["9now.nine.com.au",704],["worldstar.com",705],["u26bekrb.fun",706],["cool-web.de",707],["gps-cache.de",707],["web-spiele.de",707],["fun-seiten.de",707],["photo-alben.de",707],["wetter-vorhersage.de",707],["coolsoftware.de",707],["kryptografie.de",707],["cool--web-de.translate.goog",707],["gps--cache-de.translate.goog",707],["web--spiele-de.translate.goog",707],["fun--seiten-de.translate.goog",707],["photo--alben-de.translate.goog",707],["wetter--vorhersage-de.translate.goog",707],["coolsoftware-de.translate.goog",707],["kryptografie-de.translate.goog",707],["flyfrontier.com",[708,709]],["acmemarkets.com",[708,709]],["usaa.com",[708,709]],["capezio.com",[708,709]],["twitch.tv",[708,709]],["spotify.com",[708,709]],["tidal.com",[708,709]],["pandora.com",[708,709]],["qobuz.com",[708,709]],["soundcloud.com",[708,709]],["vimeo.com",[708,709]],["x.com",[708,709]],["twitter.com",[708,709]],["eventbrite.com",[708,709]],["wunderground.com",[708,709]],["accuweather.com",[708,709]],["formula1.com",[708,709]],["lenscrafters.com",[708,709]],["subway.com",[708,709]],["ticketmaster.*",[708,709]],["livewithkellyandmark.com",[708,709]],["porsche.com",[708,709]],["uber.com",[708,709]],["jdsports.com",[708,709]],["engadget.com",[708,709]],["yahoo.com",[708,709]],["techcrunch.com",[708,709]],["rivals.com",[708,709]],["kkrt.com",[708,709]],["crunchyroll.com",[708,709]],["dnb.com",[708,709]],["dnb.co.uk",[708,709]],["weather.com",[708,709]],["ubereats.com",[708,709]]]);
const exceptionsMap = new Map([["pingit.com",[19]],["pingit.me",[19]],["lookmovie.studio",[454]]]);
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
