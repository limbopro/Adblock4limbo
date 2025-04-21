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
const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["console.clear","noopFunc"],["console.log","noopFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["console.clear","trueFunc"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["console.clear","undefined"],["check_adblock","true"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["String.prototype.charCodeAt","trueFunc"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["openPopunder","noopFunc"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["CaptchmeState.adb","undefined"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["N_BetterJsPop.object","{}"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["HTMLAnchorElement.prototype.click","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["PlayerConfig.config.CustomAdSetting","[]"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["loadingAds","true"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["decodeURIComponent","trueFunc"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["cnbc.canShowAds","true"],["ue_adb_chk","1"],["firefaucet","true"],["cRAds","true"],["uas","[]"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["foundation.adPlayer.bitmovin","{}"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["Object.prototype.adReinsertion","noopFunc"],["getHomadConfig","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["ulp_noadb","true"],["Object.prototype.adblock_detected","false"],["timeSec","0"],["adsbygoogle.loaded","true"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["Adv_ab","false"],["sgpbCanRunAds","true"],["document.hidden","false"],["document.hasFocus","trueFunc"],["hasFocus","trueFunc"],["navigator.brave","undefined"],["Object.prototype.isAllAdClose","true"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["navigator.webkitTemporaryStorage.queryUsageAndQuota","noopFunc"],["document.onkeydown","noopFunc"],["showadas","true"],["alert","throwFunc"],["app_vars.please_disable_adblock","undefined"],["iktimer","0"],["aSl.gcd","0"],["delayClick","false"],["window.adLink","null"],["sensorsDataAnalytic201505","{}"],["detectedAdblock","undefined"],["isTabActive","true"],["clicked","2"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["flashvars.mlogo",""],["vpPrerollVideo","undefined"],["hold_click","false"],["objAd.loadAdShield","noopFunc"],["window.myAd.runAd","noopFunc"],["__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["showada","true"],["showax","true"],["p18","undefined"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["Object.prototype.adblockFound","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["xv.sda.pp.init","noopFunc"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["isadb","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["detectAdBlock","noopFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["ad_link",""],["penciBlocksArray","[]"],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["D4zz","noopFunc"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["tv3Cmp.ConsentGiven","true"],["countDownDate","0"],["setupSkin","noopFunc"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["sssp","emptyObj"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["adSettings","[]"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["myFunc","noopFunc"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["googletag","true"],["tOS2","150"],["checkAdBlocker","noopFunc"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["ShowAdvertising","{}"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["feedBack.showAffilaePromo","noopFunc"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["window.adngin","{}"],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["admiral","noopFunc"],["gnt.u.adfree","true"],["sharedController.adblockDetector","noopFunc"],["checkAdsStatus","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["checkAdBlockeraz","noopFunc"],["blockingAds","false"],["Yii2App.playbackTimeout","0"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["powerAPITag","emptyObj"],["playerEnhancedConfig.run","throwFunc"],["aoAdBlockDetected","false"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["hasAdBlocker","false"],["document.ontouchend","null"],["document.onclick","null"],["initials.yld-pdpopunder",""],["advertisement3","true"],["importFAB","undefined"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["dvsize","52"],["majorse","true"],["completed","1"],["testerli","false"],["w87.abd","noopFunc"],["document.referrer",""],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["one_time","1"],["consentGiven","true"],["playID","1"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["ADS.isBannersEnabled","false"],["EASYFUN_ADS_CAN_RUN","true"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["detectedAdblock","noopFunc"],["Object.prototype.DetectByGoogleAd","noopFunc"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["NativeAd","noopFunc"],["Blob","noopFunc"],["window.navigator.brave","undefined"],["HTMLScriptElement.prototype.onerror","undefined"],["isAdblock","false"],["openPop","noopFunc"],["attachEvent","trueFunc"],["cns.library","true"],["BJSShowUnder","{}"],["BJSShowUnder.bindTo","noopFunc"],["BJSShowUnder.add","noopFunc"],["countDown","0"],["runCheck","noopFunc"],["adsSlotRenderEndSeen","true"],["showModal","noopFunc"],["flashvars.mlogo_link",""],["isAdBlocked","noopFunc"],["URLlist","[]"],["aaw","{}"],["aaw.processAdsOnPage","noopFunc"],["doOpen","undefined"],["HTMLImageElement.prototype.onerror","undefined"],["FOXIZ_MAIN_SCRIPT.siteAccessDetector","noopFunc"],["openAdBlockPopup","noopFunc"],["Object.prototype._adsDisabled","true"],["rodo.checkIsDidomiConsent","noopFunc"],["rodo.waitForConsent","noopPromiseResolve"],["advanced_ads_check_adblocker","noopFunc"],["canRunAds","1"],["attestHasAdBlockerActivated","true"],["extInstalled","true"],["SaveFiles.add","noopFunc"],["detectSandbox","noopFunc"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["Object.prototype.updateModifiedCommerceUrl","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["Visitor","{}"],["send_gravity_event","noopFunc"],["send_recommendation_event","noopFunc"],["libAnalytics.data.get","noopFunc"],["adthrive._components.start","noopFunc"],["navigator.sendBeacon","noopFunc"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["Object.prototype.que","noopFunc"],["Object.prototype.que.push","noopFunc"],["ga.sendGaEvent","noopFunc"],["adobe","{}"],["MT","{}"],["MT.track","noopFunc"],["adex","{}"],["adex.getAdexUser","noopFunc"],["Adkit","noopFunc"],["Object.prototype.shouldExpectGoogleCMP","false"],["apntag.refresh","noopFunc"],["adBlockDetected","undefined"],["Navigator.prototype.globalPrivacyControl","false"],["navigator.globalPrivacyControl","false"],["gnt.x.adm",""]];
const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3]],["music.youtube.com",[0,1,2,3]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["timesofindia.indiatimes.com",4],["economictimes.indiatimes.com",5],["motherless.com",6],["sueddeutsche.de",7],["watchanimesub.net",8],["wco.tv",8],["wcoanimesub.tv",8],["wcoforever.net",8],["freeviewmovies.com",8],["filehorse.com",8],["guidetnt.com",8],["starmusiq.*",8],["sp-today.com",8],["linkvertise.com",8],["eropaste.net",8],["getpaste.link",8],["sharetext.me",8],["wcofun.*",8],["note.sieuthuthuat.com",8],["elcriticodelatele.com",[8,305]],["gadgets.es",[8,305]],["amateurporn.co",[8,105]],["wiwo.de",9],["primewire.*",10],["streanplay.*",[10,11]],["alphaporno.com",[10,396]],["porngem.com",10],["shortit.pw",[10,89]],["familyporn.tv",10],["sbplay.*",10],["id45.cyou",10],["85tube.com",[10,73]],["milfnut.*",10],["k1nk.co",10],["watchasians.cc",10],["soltoshindo.com",10],["sankakucomplex.com",12],["player.glomex.com",13],["merkur.de",13],["tz.de",13],["sxyprn.*",14],["hqq.*",[15,16]],["waaw.*",[16,17]],["hotpornfile.org",16],["player.tabooporns.com",16],["x69.ovh",16],["wiztube.xyz",16],["younetu.*",16],["multiup.us",16],["peliculas8k.com",[16,17]],["video.q34r.org",16],["czxxx.org",16],["vtplayer.online",16],["vvtplayer.*",16],["netu.ac",16],["netu.frembed.lol",16],["dirtyvideo.fun",17],["adbull.org",18],["123link.*",18],["adshort.*",18],["mitly.us",18],["linkrex.net",18],["linx.cc",18],["oke.io",18],["linkshorts.*",18],["dz4link.com",18],["adsrt.*",18],["linclik.com",18],["shrt10.com",18],["vinaurl.*",18],["loptelink.com",18],["adfloz.*",18],["cut-fly.com",18],["linkfinal.com",18],["payskip.org",18],["cutpaid.com",18],["forexmab.com",18],["linkjust.com",18],["linkszia.co",18],["leechpremium.link",18],["icutlink.com",[18,110]],["oncehelp.com",18],["rgl.vn",18],["reqlinks.net",18],["bitlk.com",18],["qlinks.eu",18],["link.3dmili.com",18],["short-fly.com",18],["foxseotools.com",18],["dutchycorp.*",18],["shortearn.*",18],["pingit.*",18],["pngit.live",18],["link.turkdown.com",18],["urlty.com",18],["7r6.com",18],["oko.sh",18],["ckk.ai",18],["fc.lc",18],["fstore.biz",18],["shrink.*",18],["cuts-url.com",18],["eio.io",18],["exe.app",18],["exee.io",18],["exey.io",18],["skincarie.com",18],["exeo.app",18],["tmearn.*",18],["coinlyhub.com",[18,183]],["adsafelink.com",18],["aii.sh",18],["megalink.*",18],["cybertechng.com",[18,198]],["cutdl.xyz",18],["iir.ai",18],["shorteet.com",[18,216]],["miniurl.*",18],["smoner.com",18],["gplinks.*",18],["odisha-remix.com",[18,198]],["xpshort.com",[18,198]],["upshrink.com",18],["clk.*",18],["easysky.in",18],["veganab.co",18],["go.bloggingaro.com",18],["go.gyanitheme.com",18],["go.theforyou.in",18],["go.hipsonyc.com",18],["birdurls.com",18],["vipurl.in",18],["try2link.com",18],["jameeltips.us",18],["gainl.ink",18],["promo-visits.site",18],["satoshi-win.xyz",[18,232]],["shorterall.com",18],["encurtandourl.com",18],["forextrader.site",18],["postazap.com",18],["cety.app",18],["exego.app",[18,227]],["cutlink.net",18],["cutsy.net",18],["cutyurls.com",18],["cutty.app",18],["cutnet.net",18],["jixo.online",18],["tinys.click",[18,198]],["cpm.icu",18],["panyshort.link",18],["enagato.com",18],["pandaznetwork.com",18],["tvi.la",18],["iir.la",18],["tii.la",18],["oei.la",18],["lnbz.la",[18,212]],["oii.la",[18,240]],["tpi.li",[18,240]],["recipestutorials.com",18],["pureshort.*",18],["shrinke.*",18],["shrinkme.*",18],["shrinkforearn.in",18],["techyuth.xyz",18],["oii.io",18],["du-link.in",18],["atglinks.com",18],["thotpacks.xyz",18],["megaurl.in",18],["megafly.in",18],["simana.online",18],["fooak.com",18],["joktop.com",18],["evernia.site",18],["falpus.com",18],["link.paid4link.com",18],["exalink.fun",18],["shortxlinks.com",18],["upfiles.app",18],["upfiles-urls.com",18],["flycutlink.com",[18,198]],["linksly.co",18],["link1s.*",18],["pkr.pw",18],["imagenesderopaparaperros.com",18],["shortenbuddy.com",18],["apksvip.com",18],["4cash.me",18],["namaidani.com",18],["shortzzy.*",18],["teknomuda.com",18],["shorttey.*",[18,182]],["miuiku.com",18],["savelink.site",18],["lite-link.*",18],["adcorto.*",18],["samaa-pro.com",18],["miklpro.com",18],["modapk.link",18],["ccurl.net",18],["linkpoi.me",18],["menjelajahi.com",18],["pewgame.com",18],["haonguyen.top",18],["zshort.*",18],["crazyblog.in",18],["gtlink.co",18],["cutearn.net",18],["rshrt.com",18],["filezipa.com",18],["dz-linkk.com",18],["upfiles.*",18],["theblissempire.com",18],["finanzas-vida.com",18],["adurly.cc",18],["paid4.link",18],["link.asiaon.top",18],["go.gets4link.com",18],["download.sharenulled.net",18],["linkfly.*",18],["beingtek.com",18],["shorturl.unityassets4free.com",18],["disheye.com",18],["techymedies.com",18],["techysuccess.com",18],["za.gl",[18,129]],["bblink.com",18],["myad.biz",18],["swzz.xyz",18],["vevioz.com",18],["charexempire.com",18],["clk.asia",18],["linka.click",18],["sturls.com",18],["myshrinker.com",18],["snowurl.com",[18,198]],["netfile.cc",18],["wplink.*",18],["rocklink.in",18],["techgeek.digital",18],["download3s.net",18],["shortx.net",18],["shortawy.com",18],["tlin.me",18],["apprepack.com",18],["up-load.one",18],["zuba.link",18],["bestcash2020.com",18],["hoxiin.com",18],["paylinnk.com",18],["thizissam.in",18],["ier.ai",18],["adslink.pw",18],["novelssites.com",18],["links.medipost.org",18],["faucetcrypto.net",18],["short.freeltc.top",18],["trxking.xyz",18],["weadown.com",18],["m.bloggingguidance.com",18],["blog.onroid.com",18],["link.codevn.net",18],["upfilesurls.com",18],["link4rev.site",18],["c2g.at",18],["bitcosite.com",[18,410]],["cryptosh.pro",18],["link68.net",18],["traffic123.net",18],["windowslite.net",[18,198]],["viewfr.com",18],["cl1ca.com",18],["4br.me",18],["fir3.net",18],["seulink.*",18],["encurtalink.*",18],["kiddyshort.com",18],["watchmygf.me",[19,44]],["camwhores.*",[19,29,72,73,74]],["camwhorez.tv",[19,29,72,73]],["cambay.tv",[19,52,72,102,104,105,106,107]],["fpo.xxx",[19,52]],["sexemix.com",19],["heavyfetish.com",[19,568]],["thotcity.su",19],["viralxxxporn.com",[19,253]],["tube8.*",[20,21]],["you-porn.com",21],["youporn.*",21],["youporngay.com",21],["youpornru.com",21],["redtube.*",21],["9908ww.com",21],["adelaidepawnbroker.com",21],["bztube.com",21],["hotovs.com",21],["insuredhome.org",21],["nudegista.com",21],["pornluck.com",21],["vidd.se",21],["pornhub.*",[21,171]],["pornhub.com",21],["pornerbros.com",22],["freep.com",22],["porn.com",23],["tune.pk",24],["noticias.gospelmais.com.br",25],["techperiod.com",25],["viki.com",[26,27]],["watch-series.*",28],["watchseries.*",28],["vev.*",28],["vidop.*",28],["vidup.*",28],["sleazyneasy.com",[29,30,31]],["smutr.com",[29,179]],["tktube.com",29],["yourporngod.com",[29,30]],["javbangers.com",[29,295]],["camfox.com",29],["camthots.tv",[29,102]],["shegotass.info",29],["amateur8.com",29],["bigtitslust.com",29],["ebony8.com",29],["freeporn8.com",29],["lesbian8.com",29],["maturetubehere.com",29],["sortporn.com",29],["webcamvau.com",29],["motherporno.com",[29,30,52,104]],["theporngod.com",[29,30]],["watchdirty.to",[29,73,74,105]],["pornsocket.com",32],["luxuretv.com",33],["porndig.com",[34,35]],["webcheats.com.br",36],["ceesty.com",[37,38]],["gestyy.com",[37,38]],["corneey.com",38],["destyy.com",38],["festyy.com",38],["sh.st",38],["mitaku.net",38],["angrybirdsnest.com",39],["zrozz.com",39],["clix4btc.com",39],["4tests.com",39],["goltelevision.com",39],["news-und-nachrichten.de",39],["laradiobbs.net",39],["urlaubspartner.net",39],["produktion.de",39],["cinemaxxl.de",39],["bladesalvador.com",39],["tempr.email",39],["cshort.org",39],["friendproject.net",39],["covrhub.com",39],["katfile.com",39],["trust.zone",39],["business-standard.com",39],["planetsuzy.org",40],["empflix.com",41],["gogoanime.*",[42,43]],["adrianmissionminute.com",42],["alejandrocenturyoil.com",42],["alleneconomicmatter.com",42],["apinchcaseation.com",42],["bethshouldercan.com",42],["bigclatterhomesguideservice.com",42],["bradleyviewdoctor.com",42],["brittneystandardwestern.com",42],["brookethoughi.com",42],["brucevotewithin.com",42],["cindyeyefinal.com",42],["denisegrowthwide.com",42],["donaldlineelse.com",42],["edwardarriveoften.com",42],["erikcoldperson.com",42],["evelynthankregion.com",42],["graceaddresscommunity.com",42],["heatherdiscussionwhen.com",42],["heatherwholeinvolve.com",42],["housecardsummerbutton.com",42],["jamessoundcost.com",42],["jamesstartstudent.com",42],["jamiesamewalk.com",42],["jasminetesttry.com",42],["jasonresponsemeasure.com",42],["jayservicestuff.com",42],["jennifercertaindevelopment.com",42],["jessicaglassauthor.com",42],["johntryopen.com",42],["josephseveralconcern.com",42],["kennethofficialitem.com",42],["kristiesoundsimply.com",42],["lisatrialidea.com",42],["lorimuchbenefit.com",42],["loriwithinfamily.com",42],["lukecomparetwo.com",42],["markstyleall.com",42],["michaelapplysome.com",42],["morganoperationface.com",42],["nathanfromsubject.com",42],["nectareousoverelate.com",42],["paulkitchendark.com",42],["rebeccaneverbase.com",42],["roberteachfinal.com",42],["robertordercharacter.com",42],["robertplacespace.com",42],["ryanagoinvolve.com",42],["sandratableother.com",42],["sandrataxeight.com",42],["seanshowcould.com",42],["sethniceletter.com",42],["shannonpersonalcost.com",42],["sharonwhiledemocratic.com",42],["stevenimaginelittle.com",42],["strawberriesporail.com",42],["susanhavekeep.com",42],["timberwoodanotia.com",42],["tinycat-voe-fashion.com",42],["toddpartneranimal.com",42],["troyyourlead.com",42],["uptodatefinishconference.com",42],["uptodatefinishconferenceroom.com",42],["vincentincludesuccessful.com",42],["voe.sx",42],["maxfinishseveral.com",42],["motphimtv.com",42],["rabbitstream.net",42],["projectfreetv.one",42],["fmovies.*",42],["freeplayervideo.com",42],["nazarickol.com",42],["player-cdn.com",42],["playhydrax.com",[42,476,477]],["1movies.*",[43,49]],["xmovies8.*",43],["masteranime.tv",43],["0123movies.*",43],["gostream.*",43],["gomovies.*",43],["transparentcalifornia.com",44],["deepbrid.com",45],["webnovel.com",46],["streamwish.*",[47,48]],["oneupload.to",48],["wishfast.top",48],["rubystm.com",48],["rubyvid.com",48],["rubyvidhub.com",48],["stmruby.com",48],["streamruby.com",48],["schwaebische.de",50],["8tracks.com",51],["3movs.com",52],["bravoerotica.net",[52,104]],["youx.xxx",52],["camclips.tv",[52,179]],["xtits.*",[52,104]],["camflow.tv",[52,104,105,150,253]],["camhoes.tv",[52,102,104,105,150,253]],["xmegadrive.com",52],["xxxymovies.com",52],["xxxshake.com",52],["gayck.com",52],["xhand.com",[52,104]],["analdin.com",[52,104]],["revealname.com",53],["pouvideo.*",54],["povvideo.*",54],["povw1deo.*",54],["povwideo.*",54],["powv1deo.*",54],["powvibeo.*",54],["powvideo.*",54],["powvldeo.*",54],["golfchannel.com",55],["stream.nbcsports.com",55],["mathdf.com",55],["gamcore.com",56],["porcore.com",56],["porngames.tv",56],["69games.xxx",56],["javmix.app",56],["tecknity.com",57],["haaretz.co.il",58],["haaretz.com",58],["hungama.com",58],["a-o.ninja",58],["anime-odcinki.pl",58],["kumpulmanga.org",58],["shortgoo.blogspot.com",58],["tonanmedia.my.id",[58,432]],["yurasu.xyz",58],["isekaipalace.com",58],["plyjam.*",[59,60]],["ennovelas.com",[60,64]],["foxsports.com.au",61],["canberratimes.com.au",61],["thesimsresource.com",62],["fxporn69.*",63],["vipbox.*",64],["viprow.*",64],["ctrl.blog",65],["sportlife.es",66],["finofilipino.org",67],["desbloqueador.*",68],["xberuang.*",69],["teknorizen.*",69],["mysflink.blogspot.com",69],["ashemaletube.*",70],["paktech2.com",70],["assia.tv",71],["assia4.com",71],["assia24.com",71],["cwtvembeds.com",[73,103]],["camlovers.tv",73],["porntn.com",73],["pornissimo.org",73],["sexcams-24.com",[73,105]],["watchporn.to",[73,105]],["camwhorez.video",73],["footstockings.com",[73,74,105]],["xmateur.com",[73,74,105]],["multi.xxx",74],["worldofbitco.in",[75,76]],["weatherx.co.in",[75,76]],["sunbtc.space",75],["subtorrents.*",77],["subtorrents1.*",77],["newpelis.*",77],["pelix.*",77],["allcalidad.*",77],["infomaniakos.*",77],["ojogos.com.br",78],["powforums.com",79],["supforums.com",79],["studybullet.com",79],["usgamer.net",80],["recordonline.com",80],["freebitcoin.win",81],["e-monsite.com",81],["coindice.win",81],["temp-mails.com",82],["freiepresse.de",83],["investing.com",84],["tornadomovies.*",85],["mp3fiber.com",86],["chicoer.com",87],["dailybreeze.com",87],["dailybulletin.com",87],["dailynews.com",87],["delcotimes.com",87],["eastbaytimes.com",87],["macombdaily.com",87],["ocregister.com",87],["pasadenastarnews.com",87],["pe.com",87],["presstelegram.com",87],["redlandsdailyfacts.com",87],["reviewjournal.com",87],["santacruzsentinel.com",87],["saratogian.com",87],["sentinelandenterprise.com",87],["sgvtribune.com",87],["tampabay.com",87],["times-standard.com",87],["theoaklandpress.com",87],["trentonian.com",87],["twincities.com",87],["whittierdailynews.com",87],["bostonherald.com",87],["dailycamera.com",87],["sbsun.com",87],["dailydemocrat.com",87],["montereyherald.com",87],["orovillemr.com",87],["record-bee.com",87],["redbluffdailynews.com",87],["reporterherald.com",87],["thereporter.com",87],["timescall.com",87],["timesheraldonline.com",87],["ukiahdailyjournal.com",87],["dailylocal.com",87],["mercurynews.com",87],["suedkurier.de",88],["anysex.com",90],["icdrama.*",91],["mangasail.*",91],["pornve.com",92],["file4go.*",93],["coolrom.com.au",93],["marie-claire.es",94],["gamezhero.com",94],["flashgirlgames.com",94],["onlinesudoku.games",94],["mpg.football",94],["sssam.com",94],["globalnews.ca",95],["drinksmixer.com",96],["leitesculinaria.com",96],["fupa.net",97],["browardpalmbeach.com",98],["dallasobserver.com",98],["houstonpress.com",98],["miaminewtimes.com",98],["phoenixnewtimes.com",98],["westword.com",98],["nhentai.net",[99,100]],["nowtv.com.tr",101],["caminspector.net",102],["camwhoreshd.com",102],["camgoddess.tv",102],["gay4porn.com",104],["mypornhere.com",104],["mangovideo.*",105],["love4porn.com",105],["thotvids.com",105],["watchmdh.to",105],["celebwhore.com",105],["cluset.com",105],["sexlist.tv",105],["4kporn.xxx",105],["xhomealone.com",105],["lusttaboo.com",[105,369]],["hentai-moon.com",105],["sexwebvideo.com",105],["sexwebvideo.net",105],["camhub.cc",[105,536]],["mediapason.it",108],["linkspaid.com",108],["tuotromedico.com",108],["neoteo.com",108],["phoneswiki.com",108],["celebmix.com",108],["myneobuxportal.com",108],["oyungibi.com",108],["25yearslatersite.com",108],["jeshoots.com",109],["techhx.com",109],["karanapk.com",109],["flashplayer.fullstacks.net",111],["cloudapps.herokuapp.com",111],["youfiles.herokuapp.com",111],["texteditor.nsspot.net",111],["temp-mail.org",112],["asianclub.*",113],["javhdporn.net",113],["vidmoly.to",114],["comnuan.com",115],["veedi.com",116],["battleboats.io",116],["anitube.*",117],["fruitlab.com",117],["acetack.com",117],["androidquest.com",117],["apklox.com",117],["chhaprawap.in",117],["gujarativyakaran.com",117],["kashmirstudentsinformation.in",117],["kisantime.com",117],["shetkaritoday.in",117],["pastescript.com",117],["trimorspacks.com",117],["updrop.link",117],["haddoz.net",117],["streamingcommunity.*",117],["garoetpos.com",117],["stiletv.it",118],["mixdrop.*",119],["hqtv.biz",120],["liveuamap.com",121],["muvibg.com",121],["vinomo.xyz",122],["bembed.net",122],["embedv.net",122],["fslinks.org",122],["listeamed.net",122],["v6embed.xyz",122],["vembed.*",122],["vgplayer.xyz",122],["vid-guard.com",122],["audycje.tokfm.pl",123],["hulu.com",[124,125,126]],["shush.se",127],["allkpop.com",128],["empire-anime.*",[129,427,428,429,430,431]],["empire-streaming.*",[129,427,428,429]],["empire-anime.com",[129,427,428,429]],["empire-streamz.fr",[129,427,428,429]],["empire-stream.*",[129,427,428,429]],["pickcrackpasswords.blogspot.com",130],["kfrfansub.com",131],["thuglink.com",131],["voipreview.org",131],["illicoporno.com",132],["lavoixdux.com",132],["tonpornodujour.com",132],["jacquieetmichel.net",132],["swame.com",132],["vosfemmes.com",132],["voyeurfrance.net",132],["jacquieetmicheltv.net",[132,486,487]],["hanime.tv",133],["pogo.com",134],["cloudvideo.tv",135],["legionjuegos.org",136],["legionpeliculas.org",136],["legionprogramas.org",136],["16honeys.com",137],["elespanol.com",138],["remodelista.com",139],["coolmathgames.com",[140,141,142,592]],["audiofanzine.com",143],["uploadev.*",144],["hitokin.net",145],["developerinsider.co",146],["ilprimatonazionale.it",147],["hotabis.com",147],["root-nation.com",147],["italpress.com",147],["airsoftmilsimnews.com",147],["artribune.com",147],["thehindu.com",148],["cambro.tv",[149,150]],["boobsradar.com",[150,253,546]],["nibelungen-kurier.de",151],["ver-pelis-online.*",152],["adfoc.us",153],["tea-coffee.net",153],["spatsify.com",153],["newedutopics.com",153],["getviralreach.in",153],["edukaroo.com",153],["funkeypagali.com",153],["careersides.com",153],["nayisahara.com",153],["wikifilmia.com",153],["infinityskull.com",153],["viewmyknowledge.com",153],["iisfvirtual.in",153],["starxinvestor.com",153],["jkssbalerts.com",153],["sahlmarketing.net",153],["filmypoints.in",153],["fitnessholic.net",153],["moderngyan.com",153],["sattakingcharts.in",153],["freshbhojpuri.com",153],["bankshiksha.in",153],["earn.mpscstudyhub.com",153],["earn.quotesopia.com",153],["money.quotesopia.com",153],["best-mobilegames.com",153],["learn.moderngyan.com",153],["bharatsarkarijobalert.com",153],["quotesopia.com",153],["creditsgoal.com",153],["bgmi32bitapk.in",153],["techacode.com",153],["trickms.com",153],["ielts-isa.edu.vn",153],["loan.punjabworks.com",153],["sptfy.be",153],["mcafee-com.com",[153,227]],["pianetamountainbike.it",154],["barchart.com",155],["modelisme.com",156],["parasportontario.ca",156],["prescottenews.com",156],["nrj-play.fr",157],["hackingwithreact.com",158],["gutekueche.at",159],["eplfootballmatch.com",160],["ancient-origins.*",160],["peekvids.com",161],["playvids.com",161],["pornflip.com",161],["redensarten-index.de",162],["vw-page.com",163],["viz.com",[164,165]],["0rechner.de",166],["configspc.com",167],["xopenload.me",167],["uptobox.com",167],["uptostream.com",167],["japgay.com",168],["mega-debrid.eu",169],["dreamdth.com",170],["diaridegirona.cat",172],["diariodeibiza.es",172],["diariodemallorca.es",172],["diarioinformacion.com",172],["eldia.es",172],["emporda.info",172],["farodevigo.es",172],["laopinioncoruna.es",172],["laopiniondemalaga.es",172],["laopiniondemurcia.es",172],["laopiniondezamora.es",172],["laprovincia.es",172],["levante-emv.com",172],["mallorcazeitung.es",172],["regio7.cat",172],["superdeporte.es",172],["playpaste.com",173],["cnbc.com",174],["primevideo.com",175],["read.amazon.*",[175,559]],["firefaucet.win",176],["74k.io",[177,178]],["fullhdxxx.com",180],["pornclassic.tube",181],["tubepornclassic.com",181],["etonline.com",182],["creatur.io",182],["lookcam.*",182],["drphil.com",182],["urbanmilwaukee.com",182],["lootlinks.*",182],["ontiva.com",182],["hideandseek.world",182],["myabandonware.com",182],["kendam.com",182],["wttw.com",182],["synonyms.com",182],["definitions.net",182],["hostmath.com",182],["camvideoshub.com",182],["minhaconexao.com.br",182],["home-made-videos.com",184],["amateur-couples.com",184],["slutdump.com",184],["dpstream.*",185],["produsat.com",186],["bluemediafiles.*",187],["12thman.com",188],["acusports.com",188],["atlantic10.com",188],["auburntigers.com",188],["baylorbears.com",188],["bceagles.com",188],["bgsufalcons.com",188],["big12sports.com",188],["bigten.org",188],["bradleybraves.com",188],["butlersports.com",188],["cmumavericks.com",188],["conferenceusa.com",188],["cyclones.com",188],["dartmouthsports.com",188],["daytonflyers.com",188],["dbupatriots.com",188],["dbusports.com",188],["denverpioneers.com",188],["fduknights.com",188],["fgcuathletics.com",188],["fightinghawks.com",188],["fightingillini.com",188],["floridagators.com",188],["friars.com",188],["friscofighters.com",188],["gamecocksonline.com",188],["goarmywestpoint.com",188],["gobison.com",188],["goblueraiders.com",188],["gobobcats.com",188],["gocards.com",188],["gocreighton.com",188],["godeacs.com",188],["goexplorers.com",188],["goetbutigers.com",188],["gofrogs.com",188],["gogriffs.com",188],["gogriz.com",188],["golobos.com",188],["gomarquette.com",188],["gopack.com",188],["gophersports.com",188],["goprincetontigers.com",188],["gopsusports.com",188],["goracers.com",188],["goshockers.com",188],["goterriers.com",188],["gotigersgo.com",188],["gousfbulls.com",188],["govandals.com",188],["gowyo.com",188],["goxavier.com",188],["gozags.com",188],["gozips.com",188],["griffinathletics.com",188],["guhoyas.com",188],["gwusports.com",188],["hailstate.com",188],["hamptonpirates.com",188],["hawaiiathletics.com",188],["hokiesports.com",188],["huskers.com",188],["icgaels.com",188],["iuhoosiers.com",188],["jsugamecocksports.com",188],["longbeachstate.com",188],["loyolaramblers.com",188],["lrtrojans.com",188],["lsusports.net",188],["morrisvillemustangs.com",188],["msuspartans.com",188],["muleriderathletics.com",188],["mutigers.com",188],["navysports.com",188],["nevadawolfpack.com",188],["niuhuskies.com",188],["nkunorse.com",188],["nuhuskies.com",188],["nusports.com",188],["okstate.com",188],["olemisssports.com",188],["omavs.com",188],["ovcsports.com",188],["owlsports.com",188],["purduesports.com",188],["redstormsports.com",188],["richmondspiders.com",188],["sfajacks.com",188],["shupirates.com",188],["siusalukis.com",188],["smcgaels.com",188],["smumustangs.com",188],["soconsports.com",188],["soonersports.com",188],["themw.com",188],["tulsahurricane.com",188],["txst.com",188],["txstatebobcats.com",188],["ubbulls.com",188],["ucfknights.com",188],["ucirvinesports.com",188],["uconnhuskies.com",188],["uhcougars.com",188],["uicflames.com",188],["umterps.com",188],["uncwsports.com",188],["unipanthers.com",188],["unlvrebels.com",188],["uoflsports.com",188],["usdtoreros.com",188],["utahstateaggies.com",188],["utepathletics.com",188],["utrockets.com",188],["uvmathletics.com",188],["uwbadgers.com",188],["villanova.com",188],["wkusports.com",188],["wmubroncos.com",188],["woffordterriers.com",188],["1pack1goal.com",188],["bcuathletics.com",188],["bubraves.com",188],["goblackbears.com",188],["golightsgo.com",188],["gomcpanthers.com",188],["goutsa.com",188],["mercerbears.com",188],["pirateblue.com",188],["pirateblue.net",188],["pirateblue.org",188],["quinnipiacbobcats.com",188],["towsontigers.com",188],["tribeathletics.com",188],["tribeclub.com",188],["utepminermaniacs.com",188],["utepminers.com",188],["wkutickets.com",188],["aopathletics.org",188],["atlantichockeyonline.com",188],["bigsouthnetwork.com",188],["bigsouthsports.com",188],["chawomenshockey.com",188],["dbupatriots.org",188],["drakerelays.org",188],["ecac.org",188],["ecacsports.com",188],["emueagles.com",188],["emugameday.com",188],["gculopes.com",188],["godrakebulldog.com",188],["godrakebulldogs.com",188],["godrakebulldogs.net",188],["goeags.com",188],["goislander.com",188],["goislanders.com",188],["gojacks.com",188],["gomacsports.com",188],["gseagles.com",188],["hubison.com",188],["iowaconference.com",188],["ksuowls.com",188],["lonestarconference.org",188],["mascac.org",188],["midwestconference.org",188],["mountaineast.org",188],["niu-pack.com",188],["nulakers.ca",188],["oswegolakers.com",188],["ovcdigitalnetwork.com",188],["pacersports.com",188],["rmacsports.org",188],["rollrivers.com",188],["samfordsports.com",188],["uncpbraves.com",188],["usfdons.com",188],["wiacsports.com",188],["alaskananooks.com",188],["broncathleticfund.com",188],["cameronaggies.com",188],["columbiacougars.com",188],["etownbluejays.com",188],["gobadgers.ca",188],["golancers.ca",188],["gometrostate.com",188],["gothunderbirds.ca",188],["kentstatesports.com",188],["lehighsports.com",188],["lopers.com",188],["lycoathletics.com",188],["lycomingathletics.com",188],["maraudersports.com",188],["mauiinvitational.com",188],["msumavericks.com",188],["nauathletics.com",188],["nueagles.com",188],["nwusports.com",188],["oceanbreezenyc.org",188],["patriotathleticfund.com",188],["pittband.com",188],["principiaathletics.com",188],["roadrunnersathletics.com",188],["sidearmsocial.com",188],["snhupenmen.com",188],["stablerarena.com",188],["stoutbluedevils.com",188],["uwlathletics.com",188],["yumacs.com",188],["collegefootballplayoff.com",188],["csurams.com",188],["cubuffs.com",188],["gobearcats.com",188],["gohuskies.com",188],["mgoblue.com",188],["osubeavers.com",188],["pittsburghpanthers.com",188],["rolltide.com",188],["texassports.com",188],["thesundevils.com",188],["uclabruins.com",188],["wvuathletics.com",188],["wvusports.com",188],["arizonawildcats.com",188],["calbears.com",188],["cuse.com",188],["georgiadogs.com",188],["goducks.com",188],["goheels.com",188],["gostanford.com",188],["insidekstatesports.com",188],["insidekstatesports.info",188],["insidekstatesports.net",188],["insidekstatesports.org",188],["k-stateathletics.com",188],["k-statefootball.net",188],["k-statefootball.org",188],["k-statesports.com",188],["k-statesports.net",188],["k-statesports.org",188],["k-statewomenshoops.com",188],["k-statewomenshoops.net",188],["k-statewomenshoops.org",188],["kstateathletics.com",188],["kstatefootball.net",188],["kstatefootball.org",188],["kstatesports.com",188],["kstatewomenshoops.com",188],["kstatewomenshoops.net",188],["kstatewomenshoops.org",188],["ksuathletics.com",188],["ksusports.com",188],["scarletknights.com",188],["showdownforrelief.com",188],["syracusecrunch.com",188],["texastech.com",188],["theacc.com",188],["ukathletics.com",188],["usctrojans.com",188],["utahutes.com",188],["utsports.com",188],["wsucougars.com",188],["vidlii.com",[188,213]],["tricksplit.io",188],["fangraphs.com",189],["stern.de",190],["geo.de",190],["brigitte.de",190],["tvspielfilm.de",[191,192,193,194]],["tvtoday.de",[191,192,193,194]],["chip.de",[191,192,193,194]],["focus.de",[191,192,193,194]],["fitforfun.de",[191,192,193,194]],["n-tv.de",195],["player.rtl2.de",196],["planetaminecraft.com",197],["cravesandflames.com",198],["codesnse.com",198],["flyad.vip",198],["lapresse.ca",199],["kolyoom.com",200],["ilovephd.com",200],["negumo.com",201],["games.wkb.jp",[202,203]],["fandom.com",[204,609,610]],["kenshi.fandom.com",205],["hausbau-forum.de",206],["homeairquality.org",206],["faucettronn.click",206],["fake-it.ws",207],["laksa19.github.io",208],["1shortlink.com",209],["u-s-news.com",210],["luscious.net",211],["makemoneywithurl.com",212],["junkyponk.com",212],["healthfirstweb.com",212],["vocalley.com",212],["yogablogfit.com",212],["howifx.com",[212,395]],["en.financerites.com",212],["mythvista.com",212],["livenewsflix.com",212],["cureclues.com",212],["apekite.com",212],["host-buzz.com",212],["insmyst.com",212],["wp2host.com",212],["blogtechh.com",212],["techbixby.com",212],["blogmyst.com",212],["enit.in",212],["iammagnus.com",213],["dailyvideoreports.net",213],["unityassets4free.com",213],["docer.*",214],["resetoff.pl",214],["sexodi.com",214],["cdn77.org",215],["3sexporn.com",216],["momxxxsex.com",216],["myfreevintageporn.com",216],["penisbuyutucum.net",216],["ujszo.com",217],["newsmax.com",218],["nadidetarifler.com",219],["siz.tv",219],["suzylu.co.uk",[220,221]],["onworks.net",222],["yabiladi.com",222],["downloadsoft.net",223],["newsobserver.com",224],["arkadiumhosted.com",224],["testlanguages.com",225],["newsinlevels.com",225],["videosinlevels.com",225],["bookmystrip.com",226],["starkroboticsfrc.com",227],["sinonimos.de",227],["antonimos.de",227],["quesignifi.ca",227],["tiktokrealtime.com",227],["tiktokcounter.net",227],["tpayr.xyz",227],["poqzn.xyz",227],["ashrfd.xyz",227],["rezsx.xyz",227],["tryzt.xyz",227],["ashrff.xyz",227],["rezst.xyz",227],["dawenet.com",227],["erzar.xyz",227],["waezm.xyz",227],["waezg.xyz",227],["blackwoodacademy.org",227],["cryptednews.space",227],["vivuq.com",227],["swgop.com",227],["vbnmll.com",227],["telcoinfo.online",227],["dshytb.com",227],["btcbitco.in",[227,231]],["btcsatoshi.net",227],["cempakajaya.com",227],["crypto4yu.com",227],["readbitcoin.org",227],["wiour.com",227],["finish.addurl.biz",227],["aiimgvlog.fun",[227,234]],["laweducationinfo.com",227],["savemoneyinfo.com",227],["worldaffairinfo.com",227],["godstoryinfo.com",227],["successstoryinfo.com",227],["cxissuegk.com",227],["learnmarketinfo.com",227],["bhugolinfo.com",227],["armypowerinfo.com",227],["rsadnetworkinfo.com",227],["rsinsuranceinfo.com",227],["rsfinanceinfo.com",227],["rsgamer.app",227],["rssoftwareinfo.com",227],["rshostinginfo.com",227],["rseducationinfo.com",227],["phonereviewinfo.com",227],["makeincomeinfo.com",227],["gknutshell.com",227],["vichitrainfo.com",227],["workproductivityinfo.com",227],["dopomininfo.com",227],["hostingdetailer.com",227],["fitnesssguide.com",227],["tradingfact4u.com",227],["cryptofactss.com",227],["softwaredetail.com",227],["artoffocas.com",227],["insurancesfact.com",227],["travellingdetail.com",227],["advertisingexcel.com",227],["allcryptoz.net",227],["batmanfactor.com",227],["beautifulfashionnailart.com",227],["crewbase.net",227],["documentaryplanet.xyz",227],["crewus.net",227],["gametechreviewer.com",227],["midebalonu.net",227],["misterio.ro",227],["phineypet.com",227],["seory.xyz",227],["shinbhu.net",227],["shinchu.net",227],["substitutefor.com",227],["talkforfitness.com",227],["thefitbrit.co.uk",227],["thumb8.net",227],["thumb9.net",227],["topcryptoz.net",227],["uniqueten.net",227],["ultraten.net",227],["exactpay.online",227],["quins.us",227],["kiddyearner.com",227],["imagereviser.com",228],["tech.pubghighdamage.com",229],["tech.techkhulasha.com",229],["hipsonyc.com",229],["jiocinema.com",229],["rapid-cloud.co",229],["uploadmall.com",229],["rkd3.dev",229],["4funbox.com",230],["nephobox.com",230],["1024tera.com",230],["terabox.*",230],["blog.cryptowidgets.net",231],["blog.insurancegold.in",231],["blog.wiki-topia.com",231],["blog.coinsvalue.net",231],["blog.cookinguide.net",231],["blog.freeoseocheck.com",231],["blog24.me",231],["bildirim.*",233],["arahdrive.com",234],["appsbull.com",235],["diudemy.com",235],["maqal360.com",[235,236,237]],["lifesurance.info",238],["akcartoons.in",239],["cybercityhelp.in",239],["infokeeda.xyz",241],["webzeni.com",241],["dl.apkmoddone.com",242],["phongroblox.com",242],["apkmodvn.com",243],["fuckingfast.net",244],["streamelements.com",245],["share.hntv.tv",[245,678,679,680]],["forum.dji.com",[245,680]],["unionpayintl.com",[245,679]],["tickhosting.com",246],["in91vip.win",247],["datavaults.co",248],["kicker.de",[249,639]],["t-online.de",250],["upornia.*",[251,252]],["bobs-tube.com",253],["pornohirsch.net",254],["pixsera.net",255],["indiatimes.com",256],["netzwelt.de",257],["arcade.buzzrtv.com",258],["arcade.dailygazette.com",258],["arcade.lemonde.fr",258],["arena.gamesforthebrain.com",258],["bestpuzzlesandgames.com",258],["cointiply.arkadiumarena.com",258],["gamelab.com",258],["games.abqjournal.com",258],["games.amny.com",258],["games.bellinghamherald.com",258],["games.besthealthmag.ca",258],["games.bnd.com",258],["games.boston.com",258],["games.bostonglobe.com",258],["games.bradenton.com",258],["games.centredaily.com",258],["games.charlotteobserver.com",258],["games.cnhinews.com",258],["games.crosswordgiant.com",258],["games.dailymail.co.uk",258],["games.dallasnews.com",258],["games.daytondailynews.com",258],["games.denverpost.com",258],["games.everythingzoomer.com",258],["games.fresnobee.com",258],["games.gameshownetwork.com",258],["games.get.tv",258],["games.greatergood.com",258],["games.heraldonline.com",258],["games.heraldsun.com",258],["games.idahostatesman.com",258],["games.insp.com",258],["games.islandpacket.com",258],["games.journal-news.com",258],["games.kansas.com",258],["games.kansascity.com",258],["games.kentucky.com",258],["games.lancasteronline.com",258],["games.ledger-enquirer.com",258],["games.macon.com",258],["games.mashable.com",258],["games.mercedsunstar.com",258],["games.metro.us",258],["games.metv.com",258],["games.miamiherald.com",258],["games.modbee.com",258],["games.moviestvnetwork.com",258],["games.myrtlebeachonline.com",258],["games.nationalreview.com",258],["games.newsobserver.com",258],["games.parade.com",258],["games.pressdemocrat.com",258],["games.puzzlebaron.com",258],["games.puzzler.com",258],["games.puzzles.ca",258],["games.qns.com",258],["games.readersdigest.ca",258],["games.sacbee.com",258],["games.sanluisobispo.com",258],["games.sixtyandme.com",258],["games.sltrib.com",258],["games.springfieldnewssun.com",258],["games.star-telegram.com",258],["games.startribune.com",258],["games.sunherald.com",258],["games.theadvocate.com",258],["games.thenewstribune.com",258],["games.theolympian.com",258],["games.theportugalnews.com",258],["games.thestar.com",258],["games.thestate.com",258],["games.tri-cityherald.com",258],["games.triviatoday.com",258],["games.usnews.com",258],["games.word.tips",258],["games.wordgenius.com",258],["games.wtop.com",258],["jeux.meteocity.com",258],["juegos.as.com",258],["juegos.elnuevoherald.com",258],["juegos.elpais.com",258],["philly.arkadiumarena.com",258],["play.dictionary.com",258],["puzzles.bestforpuzzles.com",258],["puzzles.centralmaine.com",258],["puzzles.crosswordsolver.org",258],["puzzles.independent.co.uk",258],["puzzles.nola.com",258],["puzzles.pressherald.com",258],["puzzles.standard.co.uk",258],["puzzles.sunjournal.com",258],["arkadium.com",259],["arcai.com",260],["my-code4you.blogspot.com",261],["flickr.com",262],["firefile.cc",263],["pestleanalysis.com",263],["kochamjp.pl",263],["tutorialforlinux.com",263],["whatsaero.com",263],["animeblkom.net",[263,277]],["blkom.com",263],["globes.co.il",[264,265]],["jardiner-malin.fr",266],["tw-calc.net",267],["ohmybrush.com",268],["talkceltic.net",269],["mentalfloss.com",270],["uprafa.com",271],["cube365.net",272],["wwwfotografgotlin.blogspot.com",273],["freelistenonline.com",273],["badassdownloader.com",274],["quickporn.net",275],["yellowbridge.com",276],["aosmark.com",278],["ctrlv.*",279],["atozmath.com",[280,281,282,283,284,285,286]],["newyorker.com",287],["brighteon.com",288],["more.tv",289],["video1tube.com",290],["alohatube.xyz",290],["4players.de",291],["onlinesoccermanager.com",291],["fshost.me",292],["link.cgtips.org",293],["hentaicloud.com",294],["netfapx.com",296],["javdragon.org",296],["javneon.tv",296],["paperzonevn.com",297],["hentaienglish.com",298],["hentaiporno.xxx",298],["venge.io",[299,300]],["btcbux.io",301],["its.porn",[302,303]],["atv.at",304],["2ndrun.tv",305],["rackusreads.com",305],["teachmemicro.com",305],["willcycle.com",305],["kusonime.com",[306,307]],["123movieshd.*",308],["imgur.com",[309,310,569]],["hentai-party.com",311],["hentaicomics.pro",311],["xxx-comics.pro",311],["uproxy.*",312],["animesa.*",313],["subtitle.one",314],["subtitleone.cc",314],["genshinimpactcalculator.com",315],["mysexgames.com",316],["cinecalidad.*",[317,318]],["embed.indavideo.hu",319],["xnxx.com",320],["xvideos.*",320],["gdr-online.com",321],["mmm.dk",322],["iqiyi.com",[323,324,460]],["m.iqiyi.com",325],["nbcolympics.com",326],["apkhex.com",327],["indiansexstories2.net",328],["issstories.xyz",328],["1340kbbr.com",329],["gorgeradio.com",329],["kduk.com",329],["kedoam.com",329],["kejoam.com",329],["kelaam.com",329],["khsn1230.com",329],["kjmx.rocks",329],["kloo.com",329],["klooam.com",329],["klykradio.com",329],["kmed.com",329],["kmnt.com",329],["kool991.com",329],["kpnw.com",329],["kppk983.com",329],["krktcountry.com",329],["ktee.com",329],["kwro.com",329],["kxbxfm.com",329],["thevalley.fm",329],["quizlet.com",330],["dsocker1234.blogspot.com",331],["schoolcheats.net",[332,333]],["mgnet.xyz",334],["japopav.tv",335],["lvturbo.com",335],["designtagebuch.de",336],["pixroute.com",337],["uploady.io",338],["calculator-online.net",339],["luckydice.net",340],["adarima.org",340],["weatherwx.com",340],["sattaguess.com",340],["winshell.de",340],["rosasidan.ws",340],["modmakers.xyz",340],["gamepure.in",340],["warrenrahul.in",340],["austiblox.net",340],["upiapi.in",340],["daemonanime.net",340],["networkhint.com",340],["thichcode.net",340],["texturecan.com",340],["tikmate.app",[340,468]],["arcaxbydz.id",340],["quotesshine.com",340],["porngames.club",341],["sexgames.xxx",341],["111.90.159.132",342],["mobile-tracker-free.com",343],["pfps.gg",344],["social-unlock.com",345],["superpsx.com",346],["ninja.io",347],["sourceforge.net",348],["samfirms.com",349],["rapelust.com",350],["vtube.to",350],["vtplay.net",350],["desitelugusex.com",350],["dvdplay.*",350],["xvideos-downloader.net",350],["xxxvideotube.net",350],["sdefx.cloud",350],["nozomi.la",350],["moviesonlinefree.net",350],["banned.video",351],["madmaxworld.tv",351],["androidpolice.com",351],["babygaga.com",351],["backyardboss.net",351],["carbuzz.com",351],["cbr.com",351],["collider.com",351],["dualshockers.com",351],["footballfancast.com",351],["footballleagueworld.co.uk",351],["gamerant.com",351],["givemesport.com",351],["hardcoregamer.com",351],["hotcars.com",351],["howtogeek.com",351],["makeuseof.com",351],["moms.com",351],["movieweb.com",351],["pocket-lint.com",351],["pocketnow.com",351],["screenrant.com",351],["simpleflying.com",351],["thegamer.com",351],["therichest.com",351],["thesportster.com",351],["thethings.com",351],["thetravel.com",351],["topspeed.com",351],["xda-developers.com",351],["huffpost.com",352],["ingles.com",353],["spanishdict.com",353],["surfline.com",[354,355]],["play.tv3.ee",356],["play.tv3.lt",356],["play.tv3.lv",[356,357]],["tv3play.skaties.lv",356],["trendyoum.com",358],["bulbagarden.net",359],["hollywoodlife.com",360],["mat6tube.com",361],["textstudio.co",362],["newtumbl.com",363],["apkmaven.*",364],["aruble.net",365],["nevcoins.club",366],["mail.com",367],["gmx.*",368],["oggi.it",[370,371]],["manoramamax.com",370],["video.gazzetta.it",[370,371]],["mangakita.id",372],["avpgalaxy.net",373],["mhma12.tech",374],["panda-novel.com",375],["zebranovel.com",375],["lightsnovel.com",375],["eaglesnovel.com",375],["pandasnovel.com",375],["ewrc-results.com",376],["kizi.com",377],["cyberscoop.com",378],["fedscoop.com",378],["canale.live",379],["jeep-cj.com",380],["sponsorhunter.com",381],["cloudcomputingtopics.net",382],["likecs.com",383],["tiscali.it",384],["linkspy.cc",385],["adshnk.com",386],["chattanoogan.com",387],["adsy.pw",388],["playstore.pw",388],["socialmediagirls.com",389],["windowspro.de",390],["snapinst.app",391],["tvtv.ca",392],["tvtv.us",392],["mydaddy.cc",393],["roadtrippin.fr",394],["vavada5com.com",395],["anyporn.com",[396,413]],["bravoporn.com",396],["bravoteens.com",396],["crocotube.com",396],["hellmoms.com",396],["hellporno.com",396],["sex3.com",396],["tubewolf.com",396],["xbabe.com",396],["xcum.com",396],["zedporn.com",396],["imagetotext.info",397],["infokik.com",398],["freepik.com",399],["ddwloclawek.pl",[400,401]],["www.seznam.cz",402],["deezer.com",[403,715,716]],["my-subs.co",404],["plaion.com",405],["slideshare.net",[406,407]],["ustreasuryyieldcurve.com",408],["businesssoftwarehere.com",409],["goo.st",409],["freevpshere.com",409],["softwaresolutionshere.com",409],["gamereactor.*",411],["madoohd.com",412],["doomovie-hd.*",412],["staige.tv",414],["in-jpn.com",415],["oninet.ne.jp",415],["xth.jp",415],["androidadult.com",416],["streamvid.net",417],["watchtv24.com",418],["cellmapper.net",419],["medscape.com",420],["newscon.org",[421,422]],["wheelofgold.com",423],["drakecomic.*",423],["app.blubank.com",424],["mobileweb.bankmellat.ir",424],["sportdeutschland.tv",425],["kcra.com",425],["wcvb.com",425],["chat.nrj.fr",426],["chat.tchatche.com",[426,441]],["ccthesims.com",433],["chromeready.com",433],["coursedrive.org",433],["dtbps3games.com",433],["illustratemagazine.com",433],["uknip.co.uk",433],["vod.pl",434],["megadrive-emulator.com",435],["tvhay.*",[436,437]],["animesaga.in",438],["moviesapi.club",438],["bestx.stream",438],["watchx.top",438],["digimanie.cz",439],["svethardware.cz",439],["srvy.ninja",440],["cnn.com",[442,443,444]],["edmdls.com",445],["freshremix.net",445],["scenedl.org",445],["trakt.tv",446],["client.falixnodes.net",447],["shroomers.app",448],["classicalradio.com",449],["di.fm",449],["jazzradio.com",449],["radiotunes.com",449],["rockradio.com",449],["zenradio.com",449],["pc-builds.com",450],["qtoptens.com",450],["reuters.com",450],["today.com",450],["videogamer.com",450],["wrestlinginc.com",450],["gbatemp.net",450],["usatoday.com",[451,717]],["ydr.com",451],["getthit.com",452],["techedubyte.com",453],["soccerinhd.com",453],["movie-th.tv",454],["iwanttfc.com",455],["nutraingredients-asia.com",456],["nutraingredients-latam.com",456],["nutraingredients-usa.com",456],["nutraingredients.com",456],["ozulscansen.com",457],["nexusmods.com",458],["lookmovie.*",459],["lookmovie2.to",459],["biletomat.pl",461],["hextank.io",[462,463]],["filmizlehdfilm.com",[464,465,466,467]],["filmizletv.*",[464,465,466,467]],["fullfilmizle.cc",[464,465,466,467]],["gofilmizle.net",[464,465,466,467]],["btvplus.bg",469],["sagewater.com",470],["redlion.net",470],["satdl.com",471],["vidstreaming.xyz",472],["everand.com",473],["myradioonline.pl",474],["cbs.com",475],["paramountplus.com",475],["abysscdn.com",[476,477]],["fullxh.com",478],["galleryxh.site",478],["megaxh.com",478],["movingxh.world",478],["seexh.com",478],["unlockxh4.com",478],["valuexh.life",478],["xhaccess.com",478],["xhadult2.com",478],["xhadult3.com",478],["xhadult4.com",478],["xhadult5.com",478],["xhamster.*",478],["xhamster1.*",478],["xhamster10.*",478],["xhamster11.*",478],["xhamster12.*",478],["xhamster13.*",478],["xhamster14.*",478],["xhamster15.*",478],["xhamster16.*",478],["xhamster17.*",478],["xhamster18.*",478],["xhamster19.*",478],["xhamster20.*",478],["xhamster2.*",478],["xhamster3.*",478],["xhamster4.*",478],["xhamster42.*",478],["xhamster46.com",478],["xhamster5.*",478],["xhamster7.*",478],["xhamster8.*",478],["xhamsterporno.mx",478],["xhbig.com",478],["xhbranch5.com",478],["xhchannel.com",478],["xhdate.world",478],["xhday.com",478],["xhday1.com",478],["xhlease.world",478],["xhmoon5.com",478],["xhofficial.com",478],["xhopen.com",478],["xhplanet1.com",478],["xhplanet2.com",478],["xhreal2.com",478],["xhreal3.com",478],["xhspot.com",478],["xhtotal.com",478],["xhtree.com",478],["xhvictory.com",478],["xhwebsite.com",478],["xhwebsite2.com",478],["xhwebsite5.com",478],["xhwide1.com",478],["xhwide2.com",478],["xhwide5.com",478],["file-upload.net",479],["lightnovelworld.*",480],["acortalo.*",[481,482,483,484]],["acortar.*",[481,482,483,484]],["megadescarga.net",[481,482,483,484]],["megadescargas.net",[481,482,483,484]],["hentaihaven.xxx",485],["jacquieetmicheltv2.net",487],["a2zapk.*",488],["fcportables.com",[489,490]],["emurom.net",491],["freethesaurus.com",[492,493]],["thefreedictionary.com",[492,493]],["oeffentlicher-dienst.info",494],["im9.eu",495],["dcdlplayer8a06f4.xyz",496],["ultimate-guitar.com",497],["claimbits.net",498],["sexyscope.net",499],["kickassanime.*",500],["recherche-ebook.fr",501],["virtualdinerbot.com",501],["zonebourse.com",502],["pink-sluts.net",503],["andhrafriends.com",504],["benzinpreis.de",505],["turtleviplay.xyz",506],["defenseone.com",507],["govexec.com",507],["nextgov.com",507],["route-fifty.com",507],["sharing.wtf",508],["wetter3.de",509],["esportivos.fun",510],["cosmonova-broadcast.tv",511],["hartvannederland.nl",512],["shownieuws.nl",512],["vandaaginside.nl",512],["rock.porn",[513,514]],["videzz.net",[515,516]],["ezaudiobookforsoul.com",517],["club386.com",518],["littlebigsnake.com",519],["easyfun.gg",520],["smailpro.com",521],["ilgazzettino.it",522],["ilmessaggero.it",522],["3bmeteo.com",[523,524]],["mconverter.eu",525],["lover937.net",526],["10gb.vn",527],["pes6.es",528],["tactics.tools",[529,530]],["boundhub.com",531],["alocdnnetu.xyz",532],["reliabletv.me",533],["jakondo.ru",534],["filecrypt.*",535],["nolive.me",537],["wired.com",538],["spankbang.*",[539,540,541,571,572]],["anonymfile.com",542],["gofile.to",542],["dotycat.com",543],["rateyourmusic.com",544],["reporterpb.com.br",545],["blog-dnz.com",547],["18adultgames.com",548],["colnect.com",[549,550]],["adultgamesworld.com",551],["bgmiupdate.com.in",552],["reviewdiv.com",553],["parametric-architecture.com",554],["laurelberninteriors.com",[555,574]],["filmweb.pl",[556,557]],["voiceofdenton.com",558],["concealednation.org",558],["askattest.com",560],["opensubtitles.com",561],["savefiles.com",562],["streamup.ws",563],["www.google.*",564],["tacobell.com",565],["zefoy.com",566],["cnet.com",567],["natgeotv.com",570],["globo.com",573],["wayfair.com",575],["br.de",576],["indeed.com",577],["pasteboard.co",578],["clickhole.com",579],["deadspin.com",579],["gizmodo.com",579],["jalopnik.com",579],["jezebel.com",579],["kotaku.com",579],["lifehacker.com",579],["splinternews.com",579],["theinventory.com",579],["theonion.com",579],["theroot.com",579],["thetakeout.com",579],["pewresearch.org",579],["los40.com",[580,581]],["as.com",581],["telegraph.co.uk",[582,583]],["poweredbycovermore.com",[582,632]],["lumens.com",[582,632]],["verizon.com",584],["humanbenchmark.com",585],["politico.com",586],["officedepot.co.cr",[587,588]],["officedepot.*",[589,590]],["usnews.com",591],["factable.com",593],["zee5.com",594],["gala.fr",595],["geo.fr",595],["voici.fr",595],["gloucestershirelive.co.uk",596],["arsiv.mackolik.com",597],["jacksonguitars.com",598],["scandichotels.com",599],["stylist.co.uk",600],["nettiauto.com",601],["thaiairways.com",[602,603]],["cerbahealthcare.it",[604,605]],["futura-sciences.com",[604,621]],["toureiffel.paris",604],["tiendaenlinea.claro.com.ni",[606,607]],["tieba.baidu.com",608],["grasshopper.com",[611,612]],["epson.com.cn",[613,614,615,616]],["oe24.at",[617,618]],["szbz.de",617],["platform.autods.com",[619,620]],["wikihow.com",622],["citibank.com.sg",623],["uol.com.br",[624,625,626,627,628]],["gazzetta.gr",629],["digicol.dpm.org.cn",[630,631]],["virginmediatelevision.ie",633],["larazon.es",[634,635]],["waitrosecellar.com",[636,637,638]],["sharpen-free-design-generator.netlify.app",[640,641]],["help.cashctrl.com",[642,643]],["gry-online.pl",644],["vidaextra.com",645],["commande.rhinov.pro",[646,647]],["ecom.wixapps.net",[646,647]],["tipranks.com",[648,649]],["iceland.co.uk",[650,651,652]],["socket.pearsoned.com",653],["tntdrama.com",[654,655]],["trutv.com",[654,655]],["mobile.de",[656,657]],["ioe.vn",[658,659]],["geiriadur.ac.uk",[658,662]],["welsh-dictionary.ac.uk",[658,662]],["bikeportland.org",[660,661]],["biologianet.com",[625,626,627]],["10play.com.au",[663,664]],["sunshine-live.de",[665,666]],["whatismyip.com",[667,668]],["myfitnesspal.com",669],["netoff.co.jp",[670,671]],["foundit.*",[672,673]],["clickjogos.com.br",674],["bristan.com",[675,676]],["zillow.com",677],["optimum.net",[681,682]],["hdfcfund.com",683],["user.guancha.cn",[684,685]],["sosovalue.com",686],["bandyforbundet.no",[687,688]],["tatacommunications.com",689],["suamusica.com.br",[690,691,692]],["macrotrends.net",[693,694]],["code.world",695],["smartcharts.net",695],["topgear.com",696],["eservice.directauto.com",[697,698]],["nbcsports.com",699],["standard.co.uk",700],["pruefernavi.de",[701,702]],["speedtest.net",[703,704]],["17track.net",705],["visible.com",[706,715,716]],["hagerty.com",[707,708]],["kino.de",[709,710]],["9now.nine.com.au",711],["worldstar.com",712],["prisjakt.no",713],["u26bekrb.fun",714],["flyfrontier.com",[715,716]],["acmemarkets.com",[715,716]],["usaa.com",[715,716]],["capezio.com",[715,716]],["twitch.tv",[715,716]],["spotify.com",[715,716]],["tidal.com",[715,716]],["pandora.com",[715,716]],["qobuz.com",[715,716]],["soundcloud.com",[715,716]],["vimeo.com",[715,716]],["x.com",[715,716]],["twitter.com",[715,716]],["eventbrite.com",[715,716]],["wunderground.com",[715,716]],["accuweather.com",[715,716]],["formula1.com",[715,716]],["lenscrafters.com",[715,716]],["subway.com",[715,716]],["ticketmaster.*",[715,716]],["livewithkellyandmark.com",[715,716]],["porsche.com",[715,716]],["uber.com",[715,716]],["jdsports.com",[715,716]],["engadget.com",[715,716]],["yahoo.com",[715,716]],["techcrunch.com",[715,716]],["rivals.com",[715,716]],["kkrt.com",[715,716]],["crunchyroll.com",[715,716]],["dnb.com",[715,716]],["dnb.co.uk",[715,716]],["weather.com",[715,716]],["ubereats.com",[715,716]]]);
const exceptionsMap = new Map([["pingit.com",[18]],["pingit.me",[18]],["loan.bgmi32bitapk.in",[153]],["lookmovie.studio",[459]]]);
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
