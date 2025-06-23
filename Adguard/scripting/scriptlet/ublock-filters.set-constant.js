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

// ruleset: ublock-filters

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
const argsList = [["console.clear","undefined"],["aclib.runInPagePush","noopFunc"],["adBlockDetected","undefined"],["amzn_aps_csm.init","noopFunc"],["amzn_aps_csm.log","noopFunc"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["google.ima.settings.setDisableFlashAds","noopFunc"],["pa.privacy","{}"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505","{}"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["Object.prototype.que","noopFunc"],["Object.prototype.que.push","noopFunc"],["ga.sendGaEvent","noopFunc"],["adobe","{}"],["MT","{}"],["MT.track","noopFunc"],["ClickOmniPartner","noopFunc"],["adex","{}"],["adex.getAdexUser","noopFunc"],["Adkit","noopFunc"],["Object.prototype.shouldExpectGoogleCMP","false"],["apntag.refresh","noopFunc"],["pa.sendEvent","noopFunc"],["Munchkin","{}"],["Munchkin.init","noopFunc"],["ttd_dom_ready","noopFunc"],["ramp","undefined"],["_aps","{}"],["appInfo.snowplow.trackSelfDescribingEvent","noopFunc"],["_vwo_code.init","noopFunc"],["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["console.clear","noopFunc"],["console.log","noopFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["console.clear","trueFunc"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["check_adblock","true"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["String.prototype.charCodeAt","trueFunc"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["openPopunder","noopFunc"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["CaptchmeState.adb","undefined"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["N_BetterJsPop.object","{}"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["HTMLAnchorElement.prototype.click","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["check","true"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["runAdBlocker","false"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["cnbc.canShowAds","true"],["ue_adb_chk","1"],["firefaucet","true"],["cRAds","true"],["uas","[]"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["foundation.adPlayer.bitmovin","{}"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["Object.prototype.adReinsertion","noopFunc"],["getHomadConfig","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["ulp_noadb","true"],["Object.prototype.adblock_detected","false"],["timeSec","0"],["adsbygoogle.loaded","true"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["Adv_ab","false"],["sgpbCanRunAds","true"],["document.hidden","false"],["document.hasFocus","trueFunc"],["hasFocus","trueFunc"],["navigator.brave","undefined"],["Object.prototype.isAllAdClose","true"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["navigator.webkitTemporaryStorage.queryUsageAndQuota","noopFunc"],["document.onkeydown","noopFunc"],["showadas","true"],["alert","throwFunc"],["iktimer","0"],["aSl.gcd","0"],["window.adLink","null"],["detectedAdblock","undefined"],["isTabActive","true"],["clicked","2"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["flashvars.mlogo",""],["vpPrerollVideo","undefined"],["PlayerConfig.config.CustomAdSetting","[]"],["PlayerConfig.trusted","true"],["PlayerConfig.config.AffiliateAdViewLevel","3"],["hold_click","false"],["tie.ad_blocker_detector","false"],["admiral","noopFunc"],["gnt.u.adfree","true"],["__INITIAL_DATA__.siteData.admiralScript"],["objAd.loadAdShield","noopFunc"],["window.myAd.runAd","noopFunc"],["detectAdBlock","noopFunc"],["__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["document.ontouchend","null"],["document.onclick","null"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["xv_ad_block","0"],["openWindow","noopFunc"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["showada","true"],["showax","true"],["p18","undefined"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["Object.prototype.adblockFound","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["xv.sda.pp.init","noopFunc"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["ad_link",""],["penciBlocksArray","[]"],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["D4zz","noopFunc"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["tv3Cmp.ConsentGiven","true"],["countDownDate","0"],["setupSkin","noopFunc"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["td_ad_background_click_link","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["puShown1","true"],["passthetest","true"],["pandaAdviewValidate","true"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["sssp","emptyObj"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["adSettings","[]"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["isadb","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["googletag","true"],["tOS2","150"],["checkAdBlocker","noopFunc"],["navigator.standalone","true"],["ShowAdvertising","{}"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["feedBack.showAffilaePromo","noopFunc"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["HTMLScriptElement.prototype.onerror","null"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["window.adngin","{}"],["amzn_aps_csm","{}"],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["sharedController.adblockDetector","noopFunc"],["checkAdsStatus","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["checkAdBlockeraz","noopFunc"],["blockingAds","false"],["Yii2App.playbackTimeout","0"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["powerAPITag","emptyObj"],["playerEnhancedConfig.run","throwFunc"],["aoAdBlockDetected","false"],["rodo.checkIsDidomiConsent","noopFunc"],["rodo.waitForConsent","noopPromiseResolve"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["hasAdBlocker","false"],["initials.yld-pdpopunder",""],["download_click","true"],["advertisement3","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["dvsize","52"],["majorse","true"],["completed","1"],["testerli","false"],["w87.abd","noopFunc"],["document.referrer",""],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["one_time","1"],["consentGiven","true"],["playID","1"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["malisx","true"],["alim","true"],["ADS.isBannersEnabled","false"],["EASYFUN_ADS_CAN_RUN","true"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["detectedAdblock","noopFunc"],["Object.prototype.DetectByGoogleAd","noopFunc"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["NativeAd","noopFunc"],["Blob","noopFunc"],["window.navigator.brave","undefined"],["HTMLScriptElement.prototype.onerror","undefined"],["isAdblock","false"],["openPop","noopFunc"],["attachEvent","trueFunc"],["cns.library","true"],["BJSShowUnder","{}"],["BJSShowUnder.bindTo","noopFunc"],["BJSShowUnder.add","noopFunc"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["ABLK","false"],["countDown","0"],["runCheck","noopFunc"],["adsSlotRenderEndSeen","true"],["showModal","noopFunc"],["flashvars.mlogo_link",""],["isAdBlocked","noopFunc"],["URLlist","[]"],["aaw","{}"],["aaw.processAdsOnPage","noopFunc"],["doOpen","undefined"],["HTMLImageElement.prototype.onerror","undefined"],["FOXIZ_MAIN_SCRIPT.siteAccessDetector","noopFunc"],["openAdBlockPopup","noopFunc"],["Object.prototype._adsDisabled","true"],["advanced_ads_check_adblocker","noopFunc"],["canRunAds","1"],["attestHasAdBlockerActivated","true"],["extInstalled","true"],["SaveFiles.add","noopFunc"],["detectSandbox","noopFunc"],["adbon","0"],["LCI.adBlockDetectorEnabled","false"],["stoCazzo","true"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["Object.prototype.updateModifiedCommerceUrl","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["Visitor","{}"],["send_gravity_event","noopFunc"],["send_recommendation_event","noopFunc"],["libAnalytics.data.get","noopFunc"],["adthrive._components.start","noopFunc"],["navigator.sendBeacon","noopFunc"]];
const hostnamesMap = new Map([["jilliandescribecompany.com",0],["gogoanime.*",[0,197]],["adrianmissionminute.com",0],["alejandrocenturyoil.com",0],["alleneconomicmatter.com",0],["apinchcaseation.com",0],["bethshouldercan.com",0],["bigclatterhomesguideservice.com",0],["bradleyviewdoctor.com",0],["brittneystandardwestern.com",0],["brookethoughi.com",0],["brucevotewithin.com",0],["cindyeyefinal.com",0],["denisegrowthwide.com",0],["diananatureforeign.com",0],["donaldlineelse.com",0],["edwardarriveoften.com",0],["erikcoldperson.com",0],["evelynthankregion.com",0],["graceaddresscommunity.com",0],["heatherdiscussionwhen.com",0],["heatherwholeinvolve.com",0],["housecardsummerbutton.com",0],["jamessoundcost.com",0],["jamesstartstudent.com",0],["jamiesamewalk.com",0],["jasminetesttry.com",0],["jasonresponsemeasure.com",0],["jayservicestuff.com",0],["jennifercertaindevelopment.com",0],["jessicaglassauthor.com",0],["johnalwayssame.com",0],["johntryopen.com",0],["jonathansociallike.com",0],["josephseveralconcern.com",0],["kellywhatcould.com",0],["kennethofficialitem.com",0],["kristiesoundsimply.com",0],["lisatrialidea.com",0],["lorimuchbenefit.com",0],["loriwithinfamily.com",0],["lukecomparetwo.com",0],["mariatheserepublican.com",0],["markstyleall.com",0],["michaelapplysome.com",0],["morganoperationface.com",0],["nathanfromsubject.com",0],["nectareousoverelate.com",0],["paulkitchendark.com",0],["rebeccaneverbase.com",0],["richardsignfish.com",0],["roberteachfinal.com",0],["robertordercharacter.com",0],["robertplacespace.com",0],["ryanagoinvolve.com",0],["sandratableother.com",0],["sandrataxeight.com",0],["seanshowcould.com",0],["sethniceletter.com",0],["shannonpersonalcost.com",0],["sharonwhiledemocratic.com",0],["stevenimaginelittle.com",0],["strawberriesporail.com",0],["susanhavekeep.com",0],["timberwoodanotia.com",0],["tinycat-voe-fashion.com",0],["toddpartneranimal.com",0],["troyyourlead.com",0],["uptodatefinishconference.com",0],["uptodatefinishconferenceroom.com",0],["vincentincludesuccessful.com",0],["voe.sx",0],["maxfinishseveral.com",0],["voe.sx>>",0],["javboys.tv>>",0],["freeplayervideo.com",0],["nazarickol.com",0],["player-cdn.com",0],["playhydrax.com",[0,411,412]],["rabbitstream.net",0],["fmovies.*",0],["japscan.lol",1],["u26bekrb.fun",2],["client.falixnodes.net",[3,4,595,596]],["br.de",5],["indeed.com",6],["pasteboard.co",7],["clickhole.com",8],["deadspin.com",8],["gizmodo.com",8],["jalopnik.com",8],["jezebel.com",8],["kotaku.com",8],["lifehacker.com",8],["splinternews.com",8],["theinventory.com",8],["theonion.com",8],["theroot.com",8],["thetakeout.com",8],["pewresearch.org",8],["los40.com",[9,10]],["as.com",10],["telegraph.co.uk",[11,12]],["poweredbycovermore.com",[11,63]],["lumens.com",[11,63]],["verizon.com",13],["humanbenchmark.com",14],["politico.com",15],["officedepot.co.cr",[16,17]],["officedepot.*",[18,19]],["usnews.com",20],["coolmathgames.com",[21,289,290,291]],["video.gazzetta.it",[22,23]],["oggi.it",[22,23]],["manoramamax.com",22],["factable.com",24],["zee5.com",25],["gala.fr",26],["geo.fr",26],["voici.fr",26],["gloucestershirelive.co.uk",27],["arsiv.mackolik.com",28],["jacksonguitars.com",29],["scandichotels.com",30],["stylist.co.uk",31],["nettiauto.com",32],["thaiairways.com",[33,34]],["cerbahealthcare.it",[35,36]],["futura-sciences.com",[35,53]],["toureiffel.paris",35],["campusfrance.org",[35,147]],["tiendaenlinea.claro.com.ni",[37,38]],["tieba.baidu.com",39],["fandom.com",[40,41,350]],["grasshopper.com",[42,43]],["epson.com.cn",[44,45,46,47]],["oe24.at",[48,49]],["szbz.de",48],["platform.autods.com",[50,51]],["kcra.com",52],["wcvb.com",52],["sportdeutschland.tv",52],["citibank.com.sg",54],["uol.com.br",[55,56,57,58,59]],["gazzetta.gr",60],["digicol.dpm.org.cn",[61,62]],["virginmediatelevision.ie",64],["larazon.es",[65,66]],["waitrosecellar.com",[67,68,69]],["kicker.de",[70,392]],["sharpen-free-design-generator.netlify.app",[71,72]],["help.cashctrl.com",[73,74]],["gry-online.pl",75],["vidaextra.com",76],["commande.rhinov.pro",[77,78]],["ecom.wixapps.net",[77,78]],["tipranks.com",[79,80]],["iceland.co.uk",[81,82,83]],["socket.pearsoned.com",84],["tntdrama.com",[85,86]],["trutv.com",[85,86]],["mobile.de",[87,88]],["ioe.vn",[89,90]],["geiriadur.ac.uk",[89,93]],["welsh-dictionary.ac.uk",[89,93]],["bikeportland.org",[91,92]],["biologianet.com",[56,57,58]],["10play.com.au",[94,95]],["sunshine-live.de",[96,97]],["whatismyip.com",[98,99]],["myfitnesspal.com",100],["netoff.co.jp",[101,102]],["bluerabbitrx.com",[101,102]],["foundit.*",[103,104]],["clickjogos.com.br",105],["bristan.com",[106,107]],["zillow.com",108],["share.hntv.tv",[109,110,111,112]],["forum.dji.com",[109,112]],["unionpayintl.com",[109,111]],["streamelements.com",109],["optimum.net",[113,114]],["hdfcfund.com",115],["user.guancha.cn",[116,117]],["sosovalue.com",118],["bandyforbundet.no",[119,120]],["tatacommunications.com",121],["kb.arlo.com",[121,154]],["suamusica.com.br",[122,123,124]],["macrotrends.net",[125,126]],["code.world",127],["smartcharts.net",127],["topgear.com",128],["eservice.directauto.com",[129,130]],["nbcsports.com",131],["standard.co.uk",132],["pruefernavi.de",[133,134]],["speedtest.net",[135,136]],["17track.net",137],["visible.com",138],["hagerty.com",[139,140]],["marketplace.nvidia.com",141],["kino.de",[142,143]],["9now.nine.com.au",144],["worldstar.com",145],["prisjakt.no",146],["developer.arm.com",[148,149]],["sterkinekor.com",150],["iogames.space",151],["thedailybeast.com",152],["id.condenast.com",153],["m.youtube.com",[155,156,157,158]],["music.youtube.com",[155,156,157,158]],["tv.youtube.com",[155,156,157,158]],["www.youtube.com",[155,156,157,158]],["youtubekids.com",[155,156,157,158]],["youtube-nocookie.com",[155,156,157,158]],["eu-proxy.startpage.com",[155,156,158]],["timesofindia.indiatimes.com",159],["economictimes.indiatimes.com",160],["motherless.com",161],["sueddeutsche.de",162],["watchanimesub.net",163],["wcoanimesub.tv",163],["wcoforever.net",163],["freeviewmovies.com",163],["filehorse.com",163],["guidetnt.com",163],["starmusiq.*",163],["sp-today.com",163],["linkvertise.com",163],["eropaste.net",163],["getpaste.link",163],["sharetext.me",163],["wcofun.*",163],["note.sieuthuthuat.com",163],["elcriticodelatele.com",[163,459]],["gadgets.es",[163,459]],["amateurporn.co",[163,259]],["wiwo.de",164],["primewire.*",165],["streanplay.*",[165,166]],["alphaporno.com",[165,544]],["porngem.com",165],["shortit.pw",[165,243]],["familyporn.tv",165],["sbplay.*",165],["id45.cyou",165],["85tube.com",[165,227]],["milfnut.*",165],["k1nk.co",165],["watchasians.cc",165],["soltoshindo.com",165],["sankakucomplex.com",167],["player.glomex.com",168],["merkur.de",168],["tz.de",168],["sxyprn.*",169],["hqq.*",[170,171]],["waaw.*",[171,172]],["hotpornfile.org",171],["player.tabooporns.com",171],["x69.ovh",171],["wiztube.xyz",171],["younetu.*",171],["multiup.us",171],["peliculas8k.com",[171,172]],["video.q34r.org",171],["czxxx.org",171],["vtplayer.online",171],["vvtplayer.*",171],["netu.ac",171],["netu.frembed.lol",171],["adbull.org",173],["123link.*",173],["adshort.*",173],["mitly.us",173],["linkrex.net",173],["linx.cc",173],["oke.io",173],["linkshorts.*",173],["dz4link.com",173],["adsrt.*",173],["linclik.com",173],["shrt10.com",173],["vinaurl.*",173],["loptelink.com",173],["adfloz.*",173],["cut-fly.com",173],["linkfinal.com",173],["payskip.org",173],["cutpaid.com",173],["linkjust.com",173],["leechpremium.link",173],["icutlink.com",[173,264]],["oncehelp.com",173],["rgl.vn",173],["reqlinks.net",173],["bitlk.com",173],["qlinks.eu",173],["link.3dmili.com",173],["short-fly.com",173],["foxseotools.com",173],["dutchycorp.*",173],["shortearn.*",173],["pingit.*",173],["link.turkdown.com",173],["7r6.com",173],["oko.sh",173],["ckk.ai",173],["fc.lc",173],["fstore.biz",173],["shrink.*",173],["cuts-url.com",173],["eio.io",173],["exe.app",173],["exee.io",173],["exey.io",173],["skincarie.com",173],["exeo.app",173],["tmearn.*",173],["coinlyhub.com",[173,329]],["adsafelink.com",173],["aii.sh",173],["megalink.*",173],["cybertechng.com",[173,344]],["cutdl.xyz",173],["iir.ai",173],["shorteet.com",[173,362]],["miniurl.*",173],["smoner.com",173],["gplinks.*",173],["odisha-remix.com",[173,344]],["xpshort.com",[173,344]],["upshrink.com",173],["clk.*",173],["easysky.in",173],["veganab.co",173],["golink.bloggerishyt.in",173],["birdurls.com",173],["vipurl.in",173],["try2link.com",173],["jameeltips.us",173],["gainl.ink",173],["promo-visits.site",173],["satoshi-win.xyz",[173,378]],["shorterall.com",173],["encurtandourl.com",173],["forextrader.site",173],["postazap.com",173],["cety.app",173],["exego.app",[173,373]],["cutlink.net",173],["cutsy.net",173],["cutyurls.com",173],["cutty.app",173],["cutnet.net",173],["jixo.online",173],["tinys.click",[173,344]],["cpm.icu",173],["panyshort.link",173],["enagato.com",173],["pandaznetwork.com",173],["tpi.li",173],["oii.la",173],["recipestutorials.com",173],["pureshort.*",173],["shrinke.*",173],["shrinkme.*",173],["shrinkforearn.in",173],["oii.io",173],["du-link.in",173],["atglinks.com",173],["thotpacks.xyz",173],["megaurl.in",173],["megafly.in",173],["simana.online",173],["fooak.com",173],["joktop.com",173],["evernia.site",173],["falpus.com",173],["link.paid4link.com",173],["exalink.fun",173],["shortxlinks.com",173],["upfion.com",173],["upfiles.app",173],["upfiles-urls.com",173],["flycutlink.com",[173,344]],["linksly.co",173],["link1s.*",173],["pkr.pw",173],["imagenesderopaparaperros.com",173],["shortenbuddy.com",173],["apksvip.com",173],["4cash.me",173],["namaidani.com",173],["shortzzy.*",173],["teknomuda.com",173],["shorttey.*",[173,328]],["miuiku.com",173],["savelink.site",173],["lite-link.*",173],["adcorto.*",173],["samaa-pro.com",173],["miklpro.com",173],["modapk.link",173],["ccurl.net",173],["linkpoi.me",173],["menjelajahi.com",173],["pewgame.com",173],["haonguyen.top",173],["zshort.*",173],["crazyblog.in",173],["cutearn.net",173],["rshrt.com",173],["filezipa.com",173],["dz-linkk.com",173],["upfiles.*",173],["theblissempire.com",173],["finanzas-vida.com",173],["adurly.cc",173],["paid4.link",173],["link.asiaon.top",173],["go.gets4link.com",173],["linkfly.*",173],["beingtek.com",173],["shorturl.unityassets4free.com",173],["disheye.com",173],["techymedies.com",173],["techysuccess.com",173],["za.gl",[173,279]],["bblink.com",173],["myad.biz",173],["swzz.xyz",173],["vevioz.com",173],["charexempire.com",173],["clk.asia",173],["sturls.com",173],["myshrinker.com",173],["snowurl.com",[173,344]],["netfile.cc",173],["wplink.*",173],["rocklink.in",173],["techgeek.digital",173],["download3s.net",173],["shortx.net",173],["shortawy.com",173],["tlin.me",173],["apprepack.com",173],["up-load.one",173],["bestcash2020.com",173],["adslink.pw",173],["novelssites.com",173],["links.medipost.org",173],["faucetcrypto.net",173],["short.freeltc.top",173],["trxking.xyz",173],["weadown.com",173],["m.bloggingguidance.com",173],["blog.onroid.com",173],["link.codevn.net",173],["upfilesurls.com",173],["link4rev.site",173],["c2g.at",173],["bitcosite.com",[173,558]],["cryptosh.pro",173],["link68.net",173],["traffic123.net",173],["windowslite.net",[173,344]],["viewfr.com",173],["cl1ca.com",173],["4br.me",173],["fir3.net",173],["seulink.*",173],["encurtalink.*",173],["kiddyshort.com",173],["watchmygf.me",[174,198]],["camwhores.*",[174,184,226,227,228]],["camwhorez.tv",[174,184,226,227]],["cambay.tv",[174,206,226,256,258,259,260,261]],["fpo.xxx",[174,206]],["sexemix.com",174],["heavyfetish.com",[174,722]],["thotcity.su",174],["viralxxxporn.com",[174,396]],["tube8.*",[175,176]],["you-porn.com",176],["youporn.*",176],["youporngay.com",176],["youpornru.com",176],["redtube.*",176],["9908ww.com",176],["adelaidepawnbroker.com",176],["bztube.com",176],["hotovs.com",176],["insuredhome.org",176],["nudegista.com",176],["pornluck.com",176],["vidd.se",176],["pornhub.*",[176,317]],["pornhub.com",176],["pornerbros.com",177],["freep.com",177],["porn.com",178],["tune.pk",179],["noticias.gospelmais.com.br",180],["techperiod.com",180],["viki.com",[181,182]],["watch-series.*",183],["watchseries.*",183],["vev.*",183],["vidop.*",183],["vidup.*",183],["sleazyneasy.com",[184,185,186]],["smutr.com",[184,325]],["tktube.com",184],["yourporngod.com",[184,185]],["javbangers.com",[184,448]],["camfox.com",184],["camthots.tv",[184,256]],["shegotass.info",184],["amateur8.com",184],["bigtitslust.com",184],["ebony8.com",184],["freeporn8.com",184],["lesbian8.com",184],["maturetubehere.com",184],["sortporn.com",184],["motherporno.com",[184,185,206,258]],["theporngod.com",[184,185]],["watchdirty.to",[184,227,228,259]],["pornsocket.com",187],["luxuretv.com",188],["porndig.com",[189,190]],["webcheats.com.br",191],["ceesty.com",[192,193]],["gestyy.com",[192,193]],["corneey.com",193],["destyy.com",193],["festyy.com",193],["sh.st",193],["mitaku.net",193],["angrybirdsnest.com",194],["zrozz.com",194],["clix4btc.com",194],["4tests.com",194],["goltelevision.com",194],["news-und-nachrichten.de",194],["laradiobbs.net",194],["urlaubspartner.net",194],["produktion.de",194],["cinemaxxl.de",194],["bladesalvador.com",194],["tempr.email",194],["cshort.org",194],["friendproject.net",194],["covrhub.com",194],["katfile.com",[194,626]],["trust.zone",194],["business-standard.com",194],["planetsuzy.org",195],["empflix.com",196],["1movies.*",[197,203]],["xmovies8.*",197],["masteranime.tv",197],["0123movies.*",197],["gostream.*",197],["gomovies.*",197],["transparentcalifornia.com",198],["deepbrid.com",199],["webnovel.com",200],["streamwish.*",[201,202]],["oneupload.to",202],["wishfast.top",202],["rubystm.com",202],["rubyvid.com",202],["rubyvidhub.com",202],["stmruby.com",202],["streamruby.com",202],["schwaebische.de",204],["8tracks.com",205],["3movs.com",206],["bravoerotica.net",[206,258]],["youx.xxx",206],["camclips.tv",[206,325]],["xtits.*",[206,258]],["camflow.tv",[206,258,259,297,396]],["camhoes.tv",[206,256,258,259,297,396]],["xmegadrive.com",206],["xxxymovies.com",206],["xxxshake.com",206],["gayck.com",206],["xhand.com",[206,258]],["analdin.com",[206,258]],["revealname.com",207],["pouvideo.*",208],["povvideo.*",208],["povw1deo.*",208],["povwideo.*",208],["powv1deo.*",208],["powvibeo.*",208],["powvideo.*",208],["powvldeo.*",208],["golfchannel.com",209],["stream.nbcsports.com",209],["mathdf.com",209],["gamcore.com",210],["porcore.com",210],["porngames.tv",210],["69games.xxx",210],["javmix.app",210],["tecknity.com",211],["haaretz.co.il",212],["haaretz.com",212],["hungama.com",212],["a-o.ninja",212],["anime-odcinki.pl",212],["shortgoo.blogspot.com",212],["tonanmedia.my.id",[212,579]],["yurasu.xyz",212],["isekaipalace.com",212],["plyjam.*",[213,214]],["ennovelas.com",[214,218]],["foxsports.com.au",215],["canberratimes.com.au",215],["thesimsresource.com",216],["fxporn69.*",217],["vipbox.*",218],["viprow.*",218],["ctrl.blog",219],["sportlife.es",220],["finofilipino.org",221],["desbloqueador.*",222],["xberuang.*",223],["teknorizen.*",223],["mysflink.blogspot.com",223],["ashemaletube.*",224],["paktech2.com",224],["assia.tv",225],["assia4.com",225],["assia24.com",225],["cwtvembeds.com",[227,257]],["camlovers.tv",227],["porntn.com",227],["pornissimo.org",227],["sexcams-24.com",[227,259]],["watchporn.to",[227,259]],["camwhorez.video",227],["footstockings.com",[227,228,259]],["xmateur.com",[227,228,259]],["multi.xxx",228],["worldofbitco.in",[229,230]],["weatherx.co.in",[229,230]],["sunbtc.space",229],["subtorrents.*",231],["subtorrents1.*",231],["newpelis.*",231],["pelix.*",231],["allcalidad.*",231],["infomaniakos.*",231],["ojogos.com.br",232],["powforums.com",233],["supforums.com",233],["studybullet.com",233],["usgamer.net",234],["recordonline.com",234],["freebitcoin.win",235],["e-monsite.com",235],["coindice.win",235],["temp-mails.com",236],["freiepresse.de",237],["investing.com",238],["tornadomovies.*",239],["mp3fiber.com",240],["chicoer.com",241],["dailybreeze.com",241],["dailybulletin.com",241],["dailynews.com",241],["delcotimes.com",241],["eastbaytimes.com",241],["macombdaily.com",241],["ocregister.com",241],["pasadenastarnews.com",241],["pe.com",241],["presstelegram.com",241],["redlandsdailyfacts.com",241],["reviewjournal.com",241],["santacruzsentinel.com",241],["saratogian.com",241],["sentinelandenterprise.com",241],["sgvtribune.com",241],["tampabay.com",241],["times-standard.com",241],["theoaklandpress.com",241],["trentonian.com",241],["twincities.com",241],["whittierdailynews.com",241],["bostonherald.com",241],["dailycamera.com",241],["sbsun.com",241],["dailydemocrat.com",241],["montereyherald.com",241],["orovillemr.com",241],["record-bee.com",241],["redbluffdailynews.com",241],["reporterherald.com",241],["thereporter.com",241],["timescall.com",241],["timesheraldonline.com",241],["ukiahdailyjournal.com",241],["dailylocal.com",241],["mercurynews.com",241],["suedkurier.de",242],["anysex.com",244],["icdrama.*",245],["mangasail.*",245],["pornve.com",246],["file4go.*",247],["coolrom.com.au",247],["marie-claire.es",248],["gamezhero.com",248],["flashgirlgames.com",248],["onlinesudoku.games",248],["mpg.football",248],["sssam.com",248],["globalnews.ca",249],["drinksmixer.com",250],["leitesculinaria.com",250],["fupa.net",251],["browardpalmbeach.com",252],["dallasobserver.com",252],["houstonpress.com",252],["miaminewtimes.com",252],["phoenixnewtimes.com",252],["westword.com",252],["nhentai.net",[253,254]],["nowtv.com.tr",255],["caminspector.net",256],["camwhoreshd.com",256],["camgoddess.tv",256],["gay4porn.com",258],["mypornhere.com",258],["mangovideo.*",259],["love4porn.com",259],["thotvids.com",259],["watchmdh.to",259],["celebwhore.com",259],["cluset.com",259],["sexlist.tv",259],["4kporn.xxx",259],["xhomealone.com",259],["lusttaboo.com",[259,521]],["hentai-moon.com",259],["camhub.cc",[259,685]],["mediapason.it",262],["linkspaid.com",262],["tuotromedico.com",262],["neoteo.com",262],["phoneswiki.com",262],["celebmix.com",262],["myneobuxportal.com",262],["oyungibi.com",262],["25yearslatersite.com",262],["jeshoots.com",263],["techhx.com",263],["karanapk.com",263],["flashplayer.fullstacks.net",265],["cloudapps.herokuapp.com",265],["youfiles.herokuapp.com",265],["texteditor.nsspot.net",265],["temp-mail.org",266],["asianclub.*",267],["javhdporn.net",267],["vidmoly.to",268],["comnuan.com",269],["veedi.com",270],["battleboats.io",270],["anitube.*",271],["fruitlab.com",271],["haddoz.net",271],["streamingcommunity.*",271],["garoetpos.com",271],["stiletv.it",272],["mixdrop.*",273],["hqtv.biz",274],["liveuamap.com",275],["muvibg.com",275],["audycje.tokfm.pl",276],["shush.se",277],["allkpop.com",278],["empire-anime.*",[279,574,575,576,577,578]],["empire-streaming.*",[279,574,575,576]],["empire-anime.com",[279,574,575,576]],["empire-streamz.fr",[279,574,575,576]],["empire-stream.*",[279,574,575,576]],["pickcrackpasswords.blogspot.com",280],["kfrfansub.com",281],["thuglink.com",281],["voipreview.org",281],["illicoporno.com",282],["lavoixdux.com",282],["tonpornodujour.com",282],["jacquieetmichel.net",282],["swame.com",282],["vosfemmes.com",282],["voyeurfrance.net",282],["jacquieetmicheltv.net",[282,633,634]],["pogo.com",283],["cloudvideo.tv",284],["legionjuegos.org",285],["legionpeliculas.org",285],["legionprogramas.org",285],["16honeys.com",286],["elespanol.com",287],["remodelista.com",288],["audiofanzine.com",292],["uploadev.*",293],["developerinsider.co",294],["thehindu.com",295],["cambro.tv",[296,297]],["boobsradar.com",[297,396,699]],["nibelungen-kurier.de",298],["adfoc.us",299],["tea-coffee.net",299],["spatsify.com",299],["newedutopics.com",299],["getviralreach.in",299],["edukaroo.com",299],["funkeypagali.com",299],["careersides.com",299],["nayisahara.com",299],["wikifilmia.com",299],["infinityskull.com",299],["viewmyknowledge.com",299],["iisfvirtual.in",299],["starxinvestor.com",299],["jkssbalerts.com",299],["sahlmarketing.net",299],["filmypoints.in",299],["fitnessholic.net",299],["moderngyan.com",299],["sattakingcharts.in",299],["freshbhojpuri.com",299],["bankshiksha.in",299],["earn.mpscstudyhub.com",299],["earn.quotesopia.com",299],["money.quotesopia.com",299],["best-mobilegames.com",299],["learn.moderngyan.com",299],["bharatsarkarijobalert.com",299],["quotesopia.com",299],["creditsgoal.com",299],["bgmi32bitapk.in",299],["techacode.com",299],["trickms.com",299],["ielts-isa.edu.vn",299],["loan.punjabworks.com",299],["rokni.xyz",299],["keedabankingnews.com",299],["sptfy.be",299],["mcafee-com.com",[299,373]],["pianetamountainbike.it",300],["barchart.com",301],["modelisme.com",302],["parasportontario.ca",302],["prescottenews.com",302],["nrj-play.fr",303],["hackingwithreact.com",304],["gutekueche.at",305],["eplfootballmatch.com",306],["ancient-origins.*",306],["peekvids.com",307],["playvids.com",307],["pornflip.com",307],["redensarten-index.de",308],["vw-page.com",309],["viz.com",[310,311]],["0rechner.de",312],["configspc.com",313],["xopenload.me",313],["uptobox.com",313],["uptostream.com",313],["japgay.com",314],["mega-debrid.eu",315],["dreamdth.com",316],["diaridegirona.cat",318],["diariodeibiza.es",318],["diariodemallorca.es",318],["diarioinformacion.com",318],["eldia.es",318],["emporda.info",318],["farodevigo.es",318],["laopinioncoruna.es",318],["laopiniondemalaga.es",318],["laopiniondemurcia.es",318],["laopiniondezamora.es",318],["laprovincia.es",318],["levante-emv.com",318],["mallorcazeitung.es",318],["regio7.cat",318],["superdeporte.es",318],["playpaste.com",319],["cnbc.com",320],["primevideo.com",321],["read.amazon.*",[321,710]],["firefaucet.win",322],["74k.io",[323,324]],["fullhdxxx.com",326],["pornclassic.tube",327],["tubepornclassic.com",327],["etonline.com",328],["creatur.io",328],["lookcam.*",328],["drphil.com",328],["urbanmilwaukee.com",328],["lootlinks.*",328],["ontiva.com",328],["hideandseek.world",328],["myabandonware.com",328],["kendam.com",328],["wttw.com",328],["synonyms.com",328],["definitions.net",328],["hostmath.com",328],["camvideoshub.com",328],["minhaconexao.com.br",328],["home-made-videos.com",330],["amateur-couples.com",330],["slutdump.com",330],["dpstream.*",331],["produsat.com",332],["bluemediafiles.*",333],["12thman.com",334],["acusports.com",334],["atlantic10.com",334],["auburntigers.com",334],["baylorbears.com",334],["bceagles.com",334],["bgsufalcons.com",334],["big12sports.com",334],["bigten.org",334],["bradleybraves.com",334],["butlersports.com",334],["cmumavericks.com",334],["conferenceusa.com",334],["cyclones.com",334],["dartmouthsports.com",334],["daytonflyers.com",334],["dbupatriots.com",334],["dbusports.com",334],["denverpioneers.com",334],["fduknights.com",334],["fgcuathletics.com",334],["fightinghawks.com",334],["fightingillini.com",334],["floridagators.com",334],["friars.com",334],["friscofighters.com",334],["gamecocksonline.com",334],["goarmywestpoint.com",334],["gobison.com",334],["goblueraiders.com",334],["gobobcats.com",334],["gocards.com",334],["gocreighton.com",334],["godeacs.com",334],["goexplorers.com",334],["goetbutigers.com",334],["gofrogs.com",334],["gogriffs.com",334],["gogriz.com",334],["golobos.com",334],["gomarquette.com",334],["gopack.com",334],["gophersports.com",334],["goprincetontigers.com",334],["gopsusports.com",334],["goracers.com",334],["goshockers.com",334],["goterriers.com",334],["gotigersgo.com",334],["gousfbulls.com",334],["govandals.com",334],["gowyo.com",334],["goxavier.com",334],["gozags.com",334],["gozips.com",334],["griffinathletics.com",334],["guhoyas.com",334],["gwusports.com",334],["hailstate.com",334],["hamptonpirates.com",334],["hawaiiathletics.com",334],["hokiesports.com",334],["huskers.com",334],["icgaels.com",334],["iuhoosiers.com",334],["jsugamecocksports.com",334],["longbeachstate.com",334],["loyolaramblers.com",334],["lrtrojans.com",334],["lsusports.net",334],["morrisvillemustangs.com",334],["msuspartans.com",334],["muleriderathletics.com",334],["mutigers.com",334],["navysports.com",334],["nevadawolfpack.com",334],["niuhuskies.com",334],["nkunorse.com",334],["nuhuskies.com",334],["nusports.com",334],["okstate.com",334],["olemisssports.com",334],["omavs.com",334],["ovcsports.com",334],["owlsports.com",334],["purduesports.com",334],["redstormsports.com",334],["richmondspiders.com",334],["sfajacks.com",334],["shupirates.com",334],["siusalukis.com",334],["smcgaels.com",334],["smumustangs.com",334],["soconsports.com",334],["soonersports.com",334],["themw.com",334],["tulsahurricane.com",334],["txst.com",334],["txstatebobcats.com",334],["ubbulls.com",334],["ucfknights.com",334],["ucirvinesports.com",334],["uconnhuskies.com",334],["uhcougars.com",334],["uicflames.com",334],["umterps.com",334],["uncwsports.com",334],["unipanthers.com",334],["unlvrebels.com",334],["uoflsports.com",334],["usdtoreros.com",334],["utahstateaggies.com",334],["utepathletics.com",334],["utrockets.com",334],["uvmathletics.com",334],["uwbadgers.com",334],["villanova.com",334],["wkusports.com",334],["wmubroncos.com",334],["woffordterriers.com",334],["1pack1goal.com",334],["bcuathletics.com",334],["bubraves.com",334],["goblackbears.com",334],["golightsgo.com",334],["gomcpanthers.com",334],["goutsa.com",334],["mercerbears.com",334],["pirateblue.com",334],["pirateblue.net",334],["pirateblue.org",334],["quinnipiacbobcats.com",334],["towsontigers.com",334],["tribeathletics.com",334],["tribeclub.com",334],["utepminermaniacs.com",334],["utepminers.com",334],["wkutickets.com",334],["aopathletics.org",334],["atlantichockeyonline.com",334],["bigsouthnetwork.com",334],["bigsouthsports.com",334],["chawomenshockey.com",334],["dbupatriots.org",334],["drakerelays.org",334],["ecac.org",334],["ecacsports.com",334],["emueagles.com",334],["emugameday.com",334],["gculopes.com",334],["godrakebulldog.com",334],["godrakebulldogs.com",334],["godrakebulldogs.net",334],["goeags.com",334],["goislander.com",334],["goislanders.com",334],["gojacks.com",334],["gomacsports.com",334],["gseagles.com",334],["hubison.com",334],["iowaconference.com",334],["ksuowls.com",334],["lonestarconference.org",334],["mascac.org",334],["midwestconference.org",334],["mountaineast.org",334],["niu-pack.com",334],["nulakers.ca",334],["oswegolakers.com",334],["ovcdigitalnetwork.com",334],["pacersports.com",334],["rmacsports.org",334],["rollrivers.com",334],["samfordsports.com",334],["uncpbraves.com",334],["usfdons.com",334],["wiacsports.com",334],["alaskananooks.com",334],["broncathleticfund.com",334],["cameronaggies.com",334],["columbiacougars.com",334],["etownbluejays.com",334],["gobadgers.ca",334],["golancers.ca",334],["gometrostate.com",334],["gothunderbirds.ca",334],["kentstatesports.com",334],["lehighsports.com",334],["lopers.com",334],["lycoathletics.com",334],["lycomingathletics.com",334],["maraudersports.com",334],["mauiinvitational.com",334],["msumavericks.com",334],["nauathletics.com",334],["nueagles.com",334],["nwusports.com",334],["oceanbreezenyc.org",334],["patriotathleticfund.com",334],["pittband.com",334],["principiaathletics.com",334],["roadrunnersathletics.com",334],["sidearmsocial.com",334],["snhupenmen.com",334],["stablerarena.com",334],["stoutbluedevils.com",334],["uwlathletics.com",334],["yumacs.com",334],["collegefootballplayoff.com",334],["csurams.com",334],["cubuffs.com",334],["gobearcats.com",334],["gohuskies.com",334],["mgoblue.com",334],["osubeavers.com",334],["pittsburghpanthers.com",334],["rolltide.com",334],["texassports.com",334],["thesundevils.com",334],["uclabruins.com",334],["wvuathletics.com",334],["wvusports.com",334],["arizonawildcats.com",334],["calbears.com",334],["cuse.com",334],["georgiadogs.com",334],["goducks.com",334],["goheels.com",334],["gostanford.com",334],["insidekstatesports.com",334],["insidekstatesports.info",334],["insidekstatesports.net",334],["insidekstatesports.org",334],["k-stateathletics.com",334],["k-statefootball.net",334],["k-statefootball.org",334],["k-statesports.com",334],["k-statesports.net",334],["k-statesports.org",334],["k-statewomenshoops.com",334],["k-statewomenshoops.net",334],["k-statewomenshoops.org",334],["kstateathletics.com",334],["kstatefootball.net",334],["kstatefootball.org",334],["kstatesports.com",334],["kstatewomenshoops.com",334],["kstatewomenshoops.net",334],["kstatewomenshoops.org",334],["ksuathletics.com",334],["ksusports.com",334],["scarletknights.com",334],["showdownforrelief.com",334],["syracusecrunch.com",334],["texastech.com",334],["theacc.com",334],["ukathletics.com",334],["usctrojans.com",334],["utahutes.com",334],["utsports.com",334],["wsucougars.com",334],["vidlii.com",[334,359]],["tricksplit.io",334],["fangraphs.com",335],["stern.de",336],["geo.de",336],["brigitte.de",336],["tvspielfilm.de",[337,338,339,340]],["tvtoday.de",[337,338,339,340]],["chip.de",[337,338,339,340]],["focus.de",[337,338,339,340]],["fitforfun.de",[337,338,339,340]],["n-tv.de",341],["player.rtl2.de",342],["planetaminecraft.com",343],["cravesandflames.com",344],["codesnse.com",344],["flyad.vip",344],["lapresse.ca",345],["kolyoom.com",346],["ilovephd.com",346],["negumo.com",347],["games.wkb.jp",[348,349]],["kenshi.fandom.com",351],["hausbau-forum.de",352],["homeairquality.org",352],["faucettronn.click",352],["fake-it.ws",353],["laksa19.github.io",354],["1shortlink.com",355],["u-s-news.com",356],["luscious.net",357],["makemoneywithurl.com",358],["junkyponk.com",358],["healthfirstweb.com",358],["vocalley.com",358],["yogablogfit.com",358],["howifx.com",[358,543]],["en.financerites.com",358],["mythvista.com",358],["livenewsflix.com",358],["cureclues.com",358],["apekite.com",358],["enit.in",358],["iammagnus.com",359],["dailyvideoreports.net",359],["unityassets4free.com",359],["docer.*",360],["resetoff.pl",360],["sexodi.com",360],["cdn77.org",361],["3sexporn.com",362],["momxxxsex.com",362],["myfreevintageporn.com",362],["penisbuyutucum.net",362],["ujszo.com",363],["newsmax.com",364],["nadidetarifler.com",365],["siz.tv",365],["suzylu.co.uk",[366,367]],["onworks.net",368],["yabiladi.com",368],["downloadsoft.net",369],["newsobserver.com",370],["arkadiumhosted.com",370],["testlanguages.com",371],["newsinlevels.com",371],["videosinlevels.com",371],["catcare.store",372],["starkroboticsfrc.com",373],["sinonimos.de",373],["antonimos.de",373],["quesignifi.ca",373],["tiktokrealtime.com",373],["tiktokcounter.net",373],["tpayr.xyz",373],["poqzn.xyz",373],["ashrfd.xyz",373],["rezsx.xyz",373],["tryzt.xyz",373],["ashrff.xyz",373],["rezst.xyz",373],["dawenet.com",373],["erzar.xyz",373],["waezm.xyz",373],["waezg.xyz",373],["blackwoodacademy.org",373],["cryptednews.space",373],["vivuq.com",373],["swgop.com",373],["vbnmll.com",373],["telcoinfo.online",373],["dshytb.com",373],["btcbitco.in",[373,377]],["btcsatoshi.net",373],["cempakajaya.com",373],["crypto4yu.com",373],["readbitcoin.org",373],["wiour.com",373],["finish.addurl.biz",373],["aiimgvlog.fun",[373,380]],["laweducationinfo.com",373],["savemoneyinfo.com",373],["worldaffairinfo.com",373],["godstoryinfo.com",373],["successstoryinfo.com",373],["cxissuegk.com",373],["learnmarketinfo.com",373],["bhugolinfo.com",373],["armypowerinfo.com",373],["rsadnetworkinfo.com",373],["rsinsuranceinfo.com",373],["rsfinanceinfo.com",373],["rsgamer.app",373],["rssoftwareinfo.com",373],["rshostinginfo.com",373],["rseducationinfo.com",373],["phonereviewinfo.com",373],["makeincomeinfo.com",373],["gknutshell.com",373],["vichitrainfo.com",373],["workproductivityinfo.com",373],["dopomininfo.com",373],["hostingdetailer.com",373],["fitnesssguide.com",373],["tradingfact4u.com",373],["cryptofactss.com",373],["softwaredetail.com",373],["artoffocas.com",373],["insurancesfact.com",373],["travellingdetail.com",373],["advertisingexcel.com",373],["allcryptoz.net",373],["batmanfactor.com",373],["beautifulfashionnailart.com",373],["crewbase.net",373],["documentaryplanet.xyz",373],["crewus.net",373],["gametechreviewer.com",373],["midebalonu.net",373],["misterio.ro",373],["phineypet.com",373],["seory.xyz",373],["shinbhu.net",373],["shinchu.net",373],["substitutefor.com",373],["talkforfitness.com",373],["thefitbrit.co.uk",373],["thumb8.net",373],["thumb9.net",373],["topcryptoz.net",373],["uniqueten.net",373],["ultraten.net",373],["exactpay.online",373],["quins.us",373],["kiddyearner.com",373],["imagereviser.com",374],["tech.pubghighdamage.com",375],["jiocinema.com",375],["rapid-cloud.co",375],["uploadmall.com",375],["4funbox.com",376],["nephobox.com",376],["1024tera.com",376],["terabox.*",376],["blog.cryptowidgets.net",377],["blog.insurancegold.in",377],["blog.wiki-topia.com",377],["blog.coinsvalue.net",377],["blog.cookinguide.net",377],["blog.freeoseocheck.com",377],["blog24.me",377],["bildirim.*",379],["arahdrive.com",380],["appsbull.com",381],["diudemy.com",381],["maqal360.com",[381,382,383]],["lifesurance.info",384],["akcartoons.in",385],["cybercityhelp.in",385],["infokeeda.xyz",386],["webzeni.com",386],["dl.apkmoddone.com",387],["phongroblox.com",387],["fuckingfast.net",388],["buzzheavier.com",388],["tickhosting.com",389],["in91vip.win",390],["datavaults.co",391],["t-online.de",393],["upornia.*",[394,395]],["bobs-tube.com",396],["pornohirsch.net",397],["bembed.net",398],["embedv.net",398],["fslinks.org",398],["javguard.club",398],["listeamed.net",398],["v6embed.xyz",398],["vembed.*",398],["vgplayer.xyz",398],["vid-guard.com",398],["vinomo.xyz",398],["nekolink.site",[399,400]],["pixsera.net",401],["jnews5.com",402],["pc-builds.com",403],["qtoptens.com",403],["reuters.com",403],["today.com",403],["videogamer.com",403],["wrestlinginc.com",403],["usatoday.com",404],["ydr.com",404],["247sports.com",405],["indiatimes.com",406],["netzwelt.de",407],["filmibeat.com",408],["goodreturns.in",408],["mykhel.com",408],["luckydice.net",408],["adarima.org",408],["weatherwx.com",408],["sattaguess.com",408],["winshell.de",408],["rosasidan.ws",408],["modmakers.xyz",408],["gamepure.in",408],["upiapi.in",408],["daemonanime.net",408],["networkhint.com",408],["thichcode.net",408],["texturecan.com",408],["tikmate.app",[408,615]],["arcaxbydz.id",408],["quotesshine.com",408],["arcade.buzzrtv.com",409],["arcade.dailygazette.com",409],["arcade.lemonde.fr",409],["arena.gamesforthebrain.com",409],["bestpuzzlesandgames.com",409],["cointiply.arkadiumarena.com",409],["gamelab.com",409],["games.abqjournal.com",409],["games.amny.com",409],["games.bellinghamherald.com",409],["games.besthealthmag.ca",409],["games.bnd.com",409],["games.boston.com",409],["games.bostonglobe.com",409],["games.bradenton.com",409],["games.centredaily.com",409],["games.charlotteobserver.com",409],["games.cnhinews.com",409],["games.crosswordgiant.com",409],["games.dailymail.co.uk",409],["games.dallasnews.com",409],["games.daytondailynews.com",409],["games.denverpost.com",409],["games.everythingzoomer.com",409],["games.fresnobee.com",409],["games.gameshownetwork.com",409],["games.get.tv",409],["games.greatergood.com",409],["games.heraldonline.com",409],["games.heraldsun.com",409],["games.idahostatesman.com",409],["games.insp.com",409],["games.islandpacket.com",409],["games.journal-news.com",409],["games.kansas.com",409],["games.kansascity.com",409],["games.kentucky.com",409],["games.lancasteronline.com",409],["games.ledger-enquirer.com",409],["games.macon.com",409],["games.mashable.com",409],["games.mercedsunstar.com",409],["games.metro.us",409],["games.metv.com",409],["games.miamiherald.com",409],["games.modbee.com",409],["games.moviestvnetwork.com",409],["games.myrtlebeachonline.com",409],["games.nationalreview.com",409],["games.newsobserver.com",409],["games.parade.com",409],["games.pressdemocrat.com",409],["games.puzzlebaron.com",409],["games.puzzler.com",409],["games.puzzles.ca",409],["games.qns.com",409],["games.readersdigest.ca",409],["games.sacbee.com",409],["games.sanluisobispo.com",409],["games.sixtyandme.com",409],["games.sltrib.com",409],["games.springfieldnewssun.com",409],["games.star-telegram.com",409],["games.startribune.com",409],["games.sunherald.com",409],["games.theadvocate.com",409],["games.thenewstribune.com",409],["games.theolympian.com",409],["games.theportugalnews.com",409],["games.thestar.com",409],["games.thestate.com",409],["games.tri-cityherald.com",409],["games.triviatoday.com",409],["games.usnews.com",409],["games.word.tips",409],["games.wordgenius.com",409],["games.wtop.com",409],["jeux.meteocity.com",409],["juegos.as.com",409],["juegos.elnuevoherald.com",409],["juegos.elpais.com",409],["philly.arkadiumarena.com",409],["play.dictionary.com",409],["puzzles.bestforpuzzles.com",409],["puzzles.centralmaine.com",409],["puzzles.crosswordsolver.org",409],["puzzles.independent.co.uk",409],["puzzles.nola.com",409],["puzzles.pressherald.com",409],["puzzles.standard.co.uk",409],["puzzles.sunjournal.com",409],["arkadium.com",410],["abysscdn.com",[411,412]],["arcai.com",413],["my-code4you.blogspot.com",414],["flickr.com",415],["firefile.cc",416],["pestleanalysis.com",416],["kochamjp.pl",416],["tutorialforlinux.com",416],["whatsaero.com",416],["animeblkom.net",[416,430]],["blkom.com",416],["globes.co.il",[417,418]],["jardiner-malin.fr",419],["tw-calc.net",420],["ohmybrush.com",421],["talkceltic.net",422],["mentalfloss.com",423],["uprafa.com",424],["cube365.net",425],["wwwfotografgotlin.blogspot.com",426],["freelistenonline.com",426],["badassdownloader.com",427],["quickporn.net",428],["yellowbridge.com",429],["aosmark.com",431],["ctrlv.*",432],["atozmath.com",[433,434,435,436,437,438,439]],["newyorker.com",440],["brighteon.com",441],["more.tv",442],["video1tube.com",443],["alohatube.xyz",443],["4players.de",444],["onlinesoccermanager.com",444],["fshost.me",445],["link.cgtips.org",446],["hentaicloud.com",447],["netfapx.com",449],["javdragon.org",449],["javneon.tv",449],["javsaga.ninja",449],["paperzonevn.com",450],["9jarock.org",451],["fzmovies.info",451],["fztvseries.ng",451],["netnaijas.com",451],["hentaienglish.com",452],["hentaiporno.xxx",452],["venge.io",[453,454]],["btcbux.io",455],["its.porn",[456,457]],["atv.at",458],["2ndrun.tv",459],["rackusreads.com",459],["teachmemicro.com",459],["willcycle.com",459],["kusonime.com",[460,461]],["123movieshd.*",462],["imgur.com",[463,464,723]],["hentai-party.com",465],["hentaicomics.pro",465],["uproxy.*",466],["animesa.*",467],["subtitle.one",468],["subtitleone.cc",468],["genshinimpactcalculator.com",469],["mysexgames.com",470],["cinecalidad.*",[471,472]],["xnxx.com",473],["xvideos.*",473],["gdr-online.com",474],["mmm.dk",475],["iqiyi.com",[476,477,607]],["m.iqiyi.com",478],["nbcolympics.com",479],["apkhex.com",480],["indiansexstories2.net",481],["issstories.xyz",481],["1340kbbr.com",482],["gorgeradio.com",482],["kduk.com",482],["kedoam.com",482],["kejoam.com",482],["kelaam.com",482],["khsn1230.com",482],["kjmx.rocks",482],["kloo.com",482],["klooam.com",482],["klykradio.com",482],["kmed.com",482],["kmnt.com",482],["kool991.com",482],["kpnw.com",482],["kppk983.com",482],["krktcountry.com",482],["ktee.com",482],["kwro.com",482],["kxbxfm.com",482],["thevalley.fm",482],["quizlet.com",483],["dsocker1234.blogspot.com",484],["schoolcheats.net",[485,486]],["mgnet.xyz",487],["designtagebuch.de",488],["pixroute.com",489],["uploady.io",490],["calculator-online.net",491],["porngames.club",492],["sexgames.xxx",492],["111.90.159.132",493],["mobile-tracker-free.com",494],["pfps.gg",495],["social-unlock.com",496],["superpsx.com",497],["ninja.io",498],["sourceforge.net",499],["samfirms.com",500],["rapelust.com",501],["vtube.to",501],["desitelugusex.com",501],["dvdplay.*",501],["xvideos-downloader.net",501],["xxxvideotube.net",501],["sdefx.cloud",501],["nozomi.la",501],["banned.video",502],["madmaxworld.tv",502],["androidpolice.com",502],["babygaga.com",502],["backyardboss.net",502],["carbuzz.com",502],["cbr.com",502],["collider.com",502],["dualshockers.com",502],["footballfancast.com",502],["footballleagueworld.co.uk",502],["gamerant.com",502],["givemesport.com",502],["hardcoregamer.com",502],["hotcars.com",502],["howtogeek.com",502],["makeuseof.com",502],["moms.com",502],["movieweb.com",502],["pocket-lint.com",502],["pocketnow.com",502],["screenrant.com",502],["simpleflying.com",502],["thegamer.com",502],["therichest.com",502],["thesportster.com",502],["thethings.com",502],["thetravel.com",502],["topspeed.com",502],["xda-developers.com",502],["huffpost.com",503],["ingles.com",504],["spanishdict.com",504],["surfline.com",[505,506]],["play.tv3.ee",507],["play.tv3.lt",507],["play.tv3.lv",[507,508]],["tv3play.skaties.lv",507],["trendyoum.com",509],["bulbagarden.net",510],["hollywoodlife.com",511],["mat6tube.com",512],["hotabis.com",513],["root-nation.com",513],["italpress.com",513],["airsoftmilsimnews.com",513],["artribune.com",513],["textstudio.co",514],["newtumbl.com",515],["apkmaven.*",516],["aruble.net",517],["nevcoins.club",518],["mail.com",519],["gmx.*",520],["mangakita.id",522],["avpgalaxy.net",523],["panda-novel.com",524],["lightsnovel.com",524],["eaglesnovel.com",524],["pandasnovel.com",524],["ewrc-results.com",525],["kizi.com",526],["cyberscoop.com",527],["fedscoop.com",527],["canale.live",528],["jeep-cj.com",529],["sponsorhunter.com",530],["cloudcomputingtopics.net",531],["likecs.com",532],["tiscali.it",533],["linkspy.cc",534],["adshnk.com",535],["chattanoogan.com",536],["adsy.pw",537],["playstore.pw",537],["windowspro.de",538],["snapinst.app",539],["tvtv.ca",540],["tvtv.us",540],["mydaddy.cc",541],["roadtrippin.fr",542],["vavada5com.com",543],["anyporn.com",[544,561]],["bravoporn.com",544],["bravoteens.com",544],["crocotube.com",544],["hellmoms.com",544],["hellporno.com",544],["sex3.com",544],["tubewolf.com",544],["xbabe.com",544],["xcum.com",544],["zedporn.com",544],["imagetotext.info",545],["infokik.com",546],["freepik.com",547],["ddwloclawek.pl",[548,549]],["www.seznam.cz",550],["deezer.com",551],["my-subs.co",552],["plaion.com",553],["slideshare.net",[554,555]],["ustreasuryyieldcurve.com",556],["businesssoftwarehere.com",557],["goo.st",557],["freevpshere.com",557],["softwaresolutionshere.com",557],["gamereactor.*",559],["madoohd.com",560],["doomovie-hd.*",560],["staige.tv",562],["lvturbo.com",563],["androidadult.com",564],["streamvid.net",565],["watchtv24.com",566],["cellmapper.net",567],["medscape.com",568],["newscon.org",[569,570]],["wheelofgold.com",571],["drakecomic.*",571],["app.blubank.com",572],["mobileweb.bankmellat.ir",572],["chat.nrj.fr",573],["chat.tchatche.com",[573,588]],["ccthesims.com",580],["chromeready.com",580],["coursedrive.org",580],["dtbps3games.com",580],["illustratemagazine.com",580],["uknip.co.uk",580],["vod.pl",581],["megadrive-emulator.com",582],["tvhay.*",[583,584]],["animesaga.in",585],["moviesapi.club",585],["bestx.stream",585],["watchx.top",585],["digimanie.cz",586],["svethardware.cz",586],["srvy.ninja",587],["cnn.com",[589,590,591]],["news.bg",592],["edmdls.com",593],["freshremix.net",593],["scenedl.org",593],["trakt.tv",594],["shroomers.app",597],["classicalradio.com",598],["di.fm",598],["jazzradio.com",598],["radiotunes.com",598],["rockradio.com",598],["zenradio.com",598],["getthit.com",599],["techedubyte.com",600],["soccerinhd.com",600],["movie-th.tv",601],["iwanttfc.com",602],["nutraingredients-asia.com",603],["nutraingredients-latam.com",603],["nutraingredients-usa.com",603],["nutraingredients.com",603],["ozulscansen.com",604],["nexusmods.com",605],["lookmovie.*",606],["lookmovie2.to",606],["biletomat.pl",608],["hextank.io",[609,610]],["filmizlehdfilm.com",[611,612,613,614]],["filmizletv.*",[611,612,613,614]],["fullfilmizle.cc",[611,612,613,614]],["gofilmizle.net",[611,612,613,614]],["btvplus.bg",616],["sagewater.com",617],["redlion.net",617],["filmweb.pl",[618,619]],["satdl.com",620],["vidstreaming.xyz",621],["everand.com",622],["myradioonline.pl",623],["cbs.com",624],["paramountplus.com",624],["fullxh.com",625],["galleryxh.site",625],["megaxh.com",625],["movingxh.world",625],["seexh.com",625],["unlockxh4.com",625],["valuexh.life",625],["xhaccess.com",625],["xhadult2.com",625],["xhadult3.com",625],["xhadult4.com",625],["xhadult5.com",625],["xhamster.*",625],["xhamster1.*",625],["xhamster10.*",625],["xhamster11.*",625],["xhamster12.*",625],["xhamster13.*",625],["xhamster14.*",625],["xhamster15.*",625],["xhamster16.*",625],["xhamster17.*",625],["xhamster18.*",625],["xhamster19.*",625],["xhamster20.*",625],["xhamster2.*",625],["xhamster3.*",625],["xhamster4.*",625],["xhamster42.*",625],["xhamster46.com",625],["xhamster5.*",625],["xhamster7.*",625],["xhamster8.*",625],["xhamsterporno.mx",625],["xhbig.com",625],["xhbranch5.com",625],["xhchannel.com",625],["xhdate.world",625],["xhday.com",625],["xhday1.com",625],["xhlease.world",625],["xhmoon5.com",625],["xhofficial.com",625],["xhopen.com",625],["xhplanet1.com",625],["xhplanet2.com",625],["xhreal2.com",625],["xhreal3.com",625],["xhspot.com",625],["xhtotal.com",625],["xhtree.com",625],["xhvictory.com",625],["xhwebsite.com",625],["xhwebsite2.com",625],["xhwebsite5.com",625],["xhwide1.com",625],["xhwide2.com",625],["xhwide5.com",625],["file-upload.net",627],["acortalo.*",[628,629,630,631]],["acortar.*",[628,629,630,631]],["megadescarga.net",[628,629,630,631]],["megadescargas.net",[628,629,630,631]],["hentaihaven.xxx",632],["jacquieetmicheltv2.net",634],["a2zapk.*",635],["fcportables.com",[636,637]],["emurom.net",638],["freethesaurus.com",[639,640]],["thefreedictionary.com",[639,640]],["oeffentlicher-dienst.info",641],["im9.eu",642],["dcdlplayer8a06f4.xyz",643],["ultimate-guitar.com",644],["claimbits.net",645],["sexyscope.net",646],["kickassanime.*",647],["recherche-ebook.fr",648],["virtualdinerbot.com",648],["zonebourse.com",649],["pink-sluts.net",650],["andhrafriends.com",651],["benzinpreis.de",652],["turtleviplay.xyz",653],["defenseone.com",654],["govexec.com",654],["nextgov.com",654],["route-fifty.com",654],["sharing.wtf",655],["wetter3.de",656],["esportivos.fun",657],["cosmonova-broadcast.tv",658],["hartvannederland.nl",659],["shownieuws.nl",659],["vandaaginside.nl",659],["rock.porn",[660,661]],["videzz.net",[662,663]],["ezaudiobookforsoul.com",664],["club386.com",665],["decompiler.com",[666,667]],["littlebigsnake.com",668],["easyfun.gg",669],["smailpro.com",670],["ilgazzettino.it",671],["ilmessaggero.it",671],["3bmeteo.com",[672,673]],["mconverter.eu",674],["lover937.net",675],["10gb.vn",676],["pes6.es",677],["tactics.tools",[678,679]],["boundhub.com",680],["alocdnnetu.xyz",681],["reliabletv.me",682],["jakondo.ru",683],["filecrypt.*",684],["nolive.me",686],["wired.com",687],["spankbang.*",[688,689,690,725,726]],["hulu.com",[691,692,693]],["hanime.tv",694],["anonymfile.com",695],["gofile.to",695],["dotycat.com",696],["rateyourmusic.com",697],["reporterpb.com.br",698],["blog-dnz.com",700],["18adultgames.com",701],["colnect.com",[702,703]],["adultgamesworld.com",704],["bgmiupdate.com.in",705],["reviewdiv.com",706],["parametric-architecture.com",707],["laurelberninteriors.com",[708,728]],["voiceofdenton.com",709],["concealednation.org",709],["askattest.com",711],["opensubtitles.com",712],["savefiles.com",713],["streamup.ws",714],["goodstream.one",715],["lecrabeinfo.net",716],["cerberusapp.com",717],["www.google.*",718],["tacobell.com",719],["zefoy.com",720],["cnet.com",721],["natgeotv.com",724],["globo.com",727],["wayfair.com",729]]);
const exceptionsMap = new Map([["cloudflare.com",[0]],["pingit.com",[173]],["loan.bgmi32bitapk.in",[299]],["lookmovie.studio",[606]]]);
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
