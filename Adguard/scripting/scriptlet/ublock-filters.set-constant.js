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
const argsList = [["console.clear","undefined"],["aclib.runInPagePush","{}","as","callback"],["aclib.runBanner","{}","as","function"],["aclib.runPop","throwFunc"],["aclib.runInterstitial","{}","as","function"],["aclib.runAutoTag","noopFunc"],["adBlockDetected","undefined"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["dvtag.getTargeting","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["googletag.cmd","{}"],["_aps","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["google.ima.settings.setDisableFlashAds","noopFunc"],["pa.privacy","{}"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505","{}"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["ga.sendGaEvent","noopFunc"],["adobe","{}"],["MT","{}"],["MT.track","noopFunc"],["ClickOmniPartner","noopFunc"],["adex","{}"],["adex.getAdexUser","noopFunc"],["Adkit","noopFunc"],["Object.prototype.shouldExpectGoogleCMP","false"],["apntag.refresh","noopFunc"],["pa.sendEvent","noopFunc"],["Munchkin","{}"],["Munchkin.init","noopFunc"],["ttd_dom_ready","noopFunc"],["ramp","undefined"],["appInfo.snowplow.trackSelfDescribingEvent","noopFunc"],["_vwo_code.init","noopFunc"],["adobePageView","noopFunc"],["dapTracker","{}"],["dapTracker.track","noopFunc"],["newrelic","{}"],["newrelic.setCustomAttribute","noopFunc"],["adobeDataLayer","{}"],["adobeDataLayer.push","noopFunc"],["Object.prototype._adsDisabled","true"],["utag","{}"],["utag.link","noopFunc"],["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["console.clear","noopFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["console.clear","trueFunc"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["check_adblock","true"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["adBlockEnabled","false"],["puShown","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["openPopunder","noopFunc"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["CaptchmeState.adb","undefined"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["HTMLAnchorElement.prototype.click","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["check","true"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["runAdBlocker","false"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["cnbc.canShowAds","true"],["firefaucet","true"],["cRAds","true"],["uas","[]"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["foundation.adPlayer.bitmovin","{}"],["weltConfig.switches.videoAdBlockBlocker","false"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["Object.prototype.adReinsertion","noopFunc"],["getHomadConfig","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["ulp_noadb","true"],["Object.prototype.adblock_detected","false"],["timeSec","0"],["adsbygoogle.loaded","true"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["Adv_ab","false"],["sgpbCanRunAds","true"],["document.hidden","false"],["hasFocus","trueFunc"],["navigator.brave","undefined"],["Object.prototype.isAllAdClose","true"],["document.hasFocus","trueFunc"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["navigator.webkitTemporaryStorage.queryUsageAndQuota","noopFunc"],["document.onkeydown","noopFunc"],["showadas","true"],["alert","throwFunc"],["aSl.gcd","0"],["window.adLink","null"],["detectedAdblock","undefined"],["isTabActive","true"],["clicked","2"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["flashvars.mlogo",""],["vpPrerollVideo","undefined"],["PlayerConfig.config.CustomAdSetting","[]"],["PlayerConfig.trusted","true"],["PlayerConfig.config.AffiliateAdViewLevel","3"],["univresalP","noopFunc"],["hold_click","false"],["tie.ad_blocker_detector","false"],["admiral","noopFunc"],["gnt.x.uam"],["gnt.u.z","true"],["__INITIAL_DATA__.siteData.admiralScript"],["objAd.loadAdShield","noopFunc"],["window.myAd.runAd","noopFunc"],["detectAdBlock","noopFunc"],["__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["document.ontouchend","null"],["document.onclick","null"],["playID","1"],["killads","true"],["NMAFMediaPlayerController.vastManager.vastShown","true"],["googletag._loaded_","true"],["app._data.ads","[]"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["__NEXT_DATA__.props.pageProps.adVideo","undefined"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["xv_ad_block","0"],["openWindow","noopFunc"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["showada","true"],["showax","true"],["p18","undefined"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["Object.prototype.adblockFound","false"],["createCanvas","noopFunc"],["document.bridCanRunAds","true"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["xv.sda.pp.init","noopFunc"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ad_link",""],["penciBlocksArray","[]"],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["D4zz","noopFunc"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["tv3Cmp.ConsentGiven","true"],["setupSkin","noopFunc"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["td_ad_background_click_link","undefined"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["puShown1","true"],["passthetest","true"],["pandaAdviewValidate","true"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["abpblocked","undefined"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["sssp","emptyObj"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["adSettings","[]"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["googletag","true"],["tOS2","150"],["checkAdBlocker","noopFunc"],["navigator.standalone","true"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["feedBack.showAffilaePromo","noopFunc"],["ShowAdvertising","{}"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["HTMLScriptElement.prototype.onerror","null"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["window.adngin","{}"],["amzn_aps_csm","{}"],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["sharedController.adblockDetector","noopFunc"],["checkAdsStatus","noopFunc"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["checkAdBlockeraz","noopFunc"],["blockingAds","false"],["Yii2App.playbackTimeout","0"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["HTMLImageElement.prototype.onerror","undefined"],["HTMLImageElement.prototype.onload","undefined"],["powerAPITag","emptyObj"],["playerEnhancedConfig.run","throwFunc"],["aoAdBlockDetected","false"],["rodo.checkIsDidomiConsent","noopFunc"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["hasAdBlocker","false"],["initials.yld-pdpopunder",""],["advertisement3","true"],["Object.prototype.skipPreroll","true"],["DisableDevtool","noopFunc"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["dvsize","52"],["majorse","true"],["completed","1"],["testerli","false"],["w87.abd","noopFunc"],["w87.dsab","noopFunc"],["document.referrer",""],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["one_time","1"],["consentGiven","true"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["malisx","true"],["alim","true"],["ADS.isBannersEnabled","false"],["EASYFUN_ADS_CAN_RUN","true"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["detectedAdblock","noopFunc"],["Object.prototype.DetectByGoogleAd","noopFunc"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["NativeAd","noopFunc"],["window.navigator.brave","undefined"],["HTMLScriptElement.prototype.onerror","undefined"],["isAdblock","false"],["openPop","noopFunc"],["cns.library","true"],["BJSShowUnder","{}"],["BJSShowUnder.bindTo","noopFunc"],["BJSShowUnder.add","noopFunc"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["ABLK","false"],["_n_app.popunder","null"],["_n_app.options.ads.show_popunders","false"],["N_BetterJsPop.object","{}"],["isAdb","false"],["puOverlay","noopFunc"],["ue_adb_chk","1"],["countDown","0"],["runCheck","noopFunc"],["adsSlotRenderEndSeen","true"],["showModal","noopFunc"],["flashvars.mlogo_link",""],["isAdBlocked","noopFunc"],["URLlist","[]"],["aaw","{}"],["aaw.processAdsOnPage","noopFunc"],["doOpen","undefined"],["OneTrust","{}"],["OneTrust.IsAlertBoxClosed","trueFunc"],["FOXIZ_MAIN_SCRIPT.siteAccessDetector","noopFunc"],["openAdBlockPopup","noopFunc"],["advanced_ads_check_adblocker","noopFunc"],["canRunAds","1"],["attestHasAdBlockerActivated","true"],["extInstalled","true"],["SaveFiles.add","noopFunc"],["detectSandbox","noopFunc"],["ga","trueFunc"],["adbon","0"],["LCI.adBlockDetectorEnabled","false"],["stoCazzo","true"],["adblockDetected","false"],["importFAB","undefined"],["window.__CONFIGURATION__.adInsertion.enabled","false"],["window.__CONFIGURATION__.features.enableAdBlockerDetection","false"],["_carbonads","{}"],["_bsa","{}"],["uberad_mode"],["__aab_init","true"],["show_videoad_limited","noopFunc"],["__NATIVEADS_CANARY__","true"],["docManager.doDynamicBlurring","noopFunc"],["Object.prototype.adOnAdBlockPreventPlayback","false"],["pre_roll_url"],["post_roll_url"],["player.preroll","noopFunc"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["Object.prototype.updateModifiedCommerceUrl","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["process","{}"],["process.env","{}"],["Visitor","{}"],["send_gravity_event","noopFunc"],["send_recommendation_event","noopFunc"],["libAnalytics.data.get","noopFunc"],["adthrive._components.start","noopFunc"],["data","true"],["navigator.sendBeacon","noopFunc"]];
const hostnamesMap = new Map([["jilliandescribecompany.com",0],["gogoanime.*",[0,207]],["adrianmissionminute.com",0],["alejandrocenturyoil.com",0],["alleneconomicmatter.com",0],["bethshouldercan.com",0],["bigclatterhomesguideservice.com",0],["brittneystandardwestern.com",0],["brookethoughi.com",0],["brucevotewithin.com",0],["cindyeyefinal.com",0],["denisegrowthwide.com",0],["diananatureforeign.com",0],["donaldlineelse.com",0],["edwardarriveoften.com",0],["erikcoldperson.com",0],["evelynthankregion.com",0],["graceaddresscommunity.com",0],["heatherdiscussionwhen.com",0],["heatherwholeinvolve.com",0],["housecardsummerbutton.com",0],["jamessoundcost.com",0],["jamiesamewalk.com",0],["jasminetesttry.com",0],["jasonresponsemeasure.com",0],["jayservicestuff.com",0],["jennifercertaindevelopment.com",0],["jessicaglassauthor.com",0],["johnalwayssame.com",0],["johntryopen.com",0],["jonathansociallike.com",0],["josephseveralconcern.com",0],["kellywhatcould.com",0],["kennethofficialitem.com",0],["kristiesoundsimply.com",0],["lisatrialidea.com",0],["lorimuchbenefit.com",0],["loriwithinfamily.com",0],["lukecomparetwo.com",0],["mariatheserepublican.com",0],["markstyleall.com",0],["michaelapplysome.com",0],["morganoperationface.com",0],["nathanfromsubject.com",0],["paulkitchendark.com",0],["rebeccaneverbase.com",0],["richardsignfish.com",0],["roberteachfinal.com",0],["robertordercharacter.com",0],["robertplacespace.com",0],["ryanagoinvolve.com",0],["sandratableother.com",0],["sandrataxeight.com",0],["sethniceletter.com",0],["shannonpersonalcost.com",0],["susanhavekeep.com",0],["tinycat-voe-fashion.com",0],["toddpartneranimal.com",0],["troyyourlead.com",0],["uptodatefinishconference.com",0],["uptodatefinishconferenceroom.com",0],["voe.sx",0],["maxfinishseveral.com",0],["voe.sx>>",0],["javboys.tv>>",0],["freeplayervideo.com",0],["nazarickol.com",0],["player-cdn.com",0],["playhydrax.com",[0,415,416]],["rabbitstream.net",0],["fmovies.*",0],["japscan.*",[1,2,3,4,5]],["u26bekrb.fun",6],["br.de",7],["indeed.com",8],["zillow.com",[8,112]],["pasteboard.co",9],["bbc.com",10],["clickhole.com",11],["deadspin.com",11],["gizmodo.com",11],["jalopnik.com",11],["jezebel.com",11],["kotaku.com",11],["lifehacker.com",11],["splinternews.com",11],["theinventory.com",11],["theonion.com",11],["theroot.com",11],["thetakeout.com",11],["pewresearch.org",11],["los40.com",[12,13]],["as.com",13],["caracol.com.co",13],["telegraph.co.uk",[14,15]],["poweredbycovermore.com",[14,67]],["lumens.com",[14,67]],["verizon.com",16],["humanbenchmark.com",17],["politico.com",18],["officedepot.co.cr",[19,20]],["officedepot.*",[21,22]],["usnews.com",23],["coolmathgames.com",[24,293,294,295]],["video.gazzetta.it",[25,26]],["oggi.it",[25,26]],["manoramamax.com",25],["factable.com",27],["thedailybeast.com",28],["zee5.com",29],["gala.fr",30],["geo.fr",30],["voici.fr",30],["gloucestershirelive.co.uk",31],["arsiv.mackolik.com",32],["jacksonguitars.com",33],["scandichotels.com",34],["stylist.co.uk",35],["nettiauto.com",36],["thaiairways.com",[37,38]],["cerbahealthcare.it",[39,40]],["futura-sciences.com",[39,57]],["toureiffel.paris",39],["campusfrance.org",[39,149]],["tiendaenlinea.claro.com.ni",[41,42]],["tieba.baidu.com",43],["fandom.com",[44,45,353]],["grasshopper.com",[46,47]],["epson.com.cn",[48,49,50,51]],["oe24.at",[52,53]],["szbz.de",52],["platform.autods.com",[54,55]],["kcra.com",56],["wcvb.com",56],["sporteurope.tv",56],["citibank.com.sg",58],["uol.com.br",[59,60,61,62,63]],["gazzetta.gr",64],["digicol.dpm.org.cn",[65,66]],["virginmediatelevision.ie",68],["larazon.es",[69,70]],["waitrosecellar.com",[71,72,73]],["kicker.de",[74,394]],["sharpen-free-design-generator.netlify.app",[75,76]],["help.cashctrl.com",[77,78]],["gry-online.pl",79],["vidaextra.com",80],["commande.rhinov.pro",[81,82]],["ecom.wixapps.net",[81,82]],["tipranks.com",[83,84]],["iceland.co.uk",[85,86,87]],["socket.pearsoned.com",88],["tntdrama.com",[89,90]],["trutv.com",[89,90]],["mobile.de",[91,92]],["ioe.vn",[93,94]],["geiriadur.ac.uk",[93,97]],["welsh-dictionary.ac.uk",[93,97]],["bikeportland.org",[95,96]],["biologianet.com",[60,61,62]],["10.com.au",[98,99]],["10play.com.au",[98,99]],["sunshine-live.de",[100,101]],["whatismyip.com",[102,103]],["myfitnesspal.com",104],["netoff.co.jp",[105,106]],["bluerabbitrx.com",[105,106]],["foundit.*",[107,108]],["clickjogos.com.br",109],["bristan.com",[110,111]],["share.hntv.tv",[113,114,115,116]],["forum.dji.com",[113,116]],["unionpayintl.com",[113,115]],["streamelements.com",113],["optimum.net",[117,118]],["hdfcfund.com",119],["user.guancha.cn",[120,121]],["sosovalue.com",122],["bandyforbundet.no",[123,124]],["tatacommunications.com",125],["kb.arlo.com",[125,155]],["suamusica.com.br",[126,127,128]],["macrotrends.net",[129,130]],["code.world",131],["smartcharts.net",131],["topgear.com",132],["eservice.directauto.com",[133,134]],["nbcsports.com",135],["standard.co.uk",136],["pruefernavi.de",[137,138]],["17track.net",139],["visible.com",140],["hagerty.com",[141,142]],["marketplace.nvidia.com",143],["kino.de",[144,145]],["9now.nine.com.au",146],["worldstar.com",147],["prisjakt.no",148],["developer.arm.com",[150,151]],["sterkinekor.com",152],["iogames.space",153],["id.condenast.com",154],["tires.costco.com",156],["tires.costco.ca",156],["livemint.com",[157,158]],["login.asda.com",[159,160]],["mandai.com",[161,162]],["damndelicious.net",163],["laurelberninteriors.com",[163,752]],["brother-usa.com",[164,165]],["m.youtube.com",[166,167,168,169]],["music.youtube.com",[166,167,168,169]],["tv.youtube.com",[166,167,168,169]],["www.youtube.com",[166,167,168,169]],["youtubekids.com",[166,167,168,169]],["youtube-nocookie.com",[166,167,168,169]],["eu-proxy.startpage.com",[166,167,169]],["timesofindia.indiatimes.com",170],["economictimes.indiatimes.com",171],["motherless.com",172],["sueddeutsche.de",173],["watchanimesub.net",174],["wcoanimesub.tv",174],["wcoforever.net",174],["freeviewmovies.com",174],["filehorse.com",174],["guidetnt.com",174],["starmusiq.*",174],["sp-today.com",174],["linkvertise.com",174],["eropaste.net",174],["getpaste.link",174],["sharetext.me",174],["wcofun.*",174],["note.sieuthuthuat.com",174],["gadgets.es",[174,466]],["amateurporn.co",[174,263]],["wiwo.de",175],["primewire.*",176],["alphaporno.com",[176,546]],["porngem.com",176],["shortit.pw",[176,249]],["familyporn.tv",176],["sbplay.*",176],["85po.com",[176,234]],["milfnut.*",176],["k1nk.co",176],["watchasians.cc",176],["sankakucomplex.com",177],["player.glomex.com",178],["merkur.de",178],["tz.de",178],["sxyprn.*",179],["hqq.*",[180,181]],["waaw.*",[181,182]],["hotpornfile.org",181],["younetu.*",181],["multiup.us",181],["peliculas8k.com",[181,182]],["czxxx.org",181],["vtplayer.online",181],["vvtplayer.*",181],["netu.ac",181],["netu.frembed.lol",181],["123link.*",183],["adshort.*",183],["mitly.us",183],["linkrex.net",183],["linx.cc",183],["oke.io",183],["linkshorts.*",183],["dz4link.com",183],["adsrt.*",183],["linclik.com",183],["shrt10.com",183],["vinaurl.*",183],["loptelink.com",183],["adfloz.*",183],["cut-fly.com",183],["linkfinal.com",183],["payskip.org",183],["cutpaid.com",183],["linkjust.com",183],["leechpremium.link",183],["icutlink.com",[183,268]],["oncehelp.com",183],["rgl.vn",183],["reqlinks.net",183],["bitlk.com",183],["qlinks.eu",183],["link.3dmili.com",183],["short-fly.com",183],["foxseotools.com",183],["dutchycorp.*",183],["shortearn.*",183],["pingit.*",183],["link.turkdown.com",183],["7r6.com",183],["oko.sh",183],["ckk.ai",183],["fc.lc",183],["fstore.biz",183],["shrink.*",183],["cuts-url.com",183],["eio.io",183],["exe.app",183],["exee.io",183],["exey.io",183],["skincarie.com",183],["exeo.app",183],["tmearn.*",183],["coinlyhub.com",[183,331]],["adsafelink.com",183],["aii.sh",183],["megalink.*",183],["cybertechng.com",[183,347]],["cutdl.xyz",183],["iir.ai",183],["shorteet.com",[183,365]],["miniurl.*",183],["smoner.com",183],["gplinks.*",183],["odisha-remix.com",[183,347]],["xpshort.com",[183,347]],["upshrink.com",183],["clk.*",183],["easysky.in",183],["veganab.co",183],["golink.bloggerishyt.in",183],["birdurls.com",183],["vipurl.in",183],["jameeltips.us",183],["promo-visits.site",183],["satoshi-win.xyz",[183,381]],["shorterall.com",183],["encurtandourl.com",183],["forextrader.site",183],["postazap.com",183],["cety.app",183],["exego.app",[183,379]],["cutlink.net",183],["cutyurls.com",183],["cutty.app",183],["cutnet.net",183],["jixo.online",183],["tinys.click",[183,347]],["cpm.icu",183],["panyshort.link",183],["enagato.com",183],["pandaznetwork.com",183],["tpi.li",183],["oii.la",183],["recipestutorials.com",183],["shrinkme.*",183],["shrinke.*",183],["mrproblogger.com",183],["themezon.net",183],["shrinkforearn.in",183],["oii.io",183],["du-link.in",183],["atglinks.com",183],["thotpacks.xyz",183],["megaurl.in",183],["megafly.in",183],["simana.online",183],["fooak.com",183],["joktop.com",183],["evernia.site",183],["falpus.com",183],["link.paid4link.com",183],["exalink.fun",183],["shortxlinks.com",183],["upfion.com",183],["upfiles.app",183],["upfiles-urls.com",183],["flycutlink.com",[183,347]],["linksly.co",183],["link1s.*",183],["pkr.pw",183],["imagenesderopaparaperros.com",183],["shortenbuddy.com",183],["apksvip.com",183],["4cash.me",183],["namaidani.com",183],["shortzzy.*",183],["teknomuda.com",183],["shorttey.*",[183,330]],["miuiku.com",183],["savelink.site",183],["lite-link.*",183],["adcorto.*",183],["samaa-pro.com",183],["miklpro.com",183],["modapk.link",183],["ccurl.net",183],["linkpoi.me",183],["pewgame.com",183],["haonguyen.top",183],["zshort.*",183],["crazyblog.in",183],["cutearn.net",183],["rshrt.com",183],["filezipa.com",183],["dz-linkk.com",183],["upfiles.*",183],["theblissempire.com",183],["finanzas-vida.com",183],["adurly.cc",183],["paid4.link",183],["link.asiaon.top",183],["go.gets4link.com",183],["linkfly.*",183],["beingtek.com",183],["shorturl.unityassets4free.com",183],["disheye.com",183],["techymedies.com",183],["za.gl",[183,283]],["bblink.com",183],["myad.biz",183],["swzz.xyz",183],["vevioz.com",183],["charexempire.com",183],["clk.asia",183],["sturls.com",183],["myshrinker.com",183],["wplink.*",183],["rocklink.in",183],["techgeek.digital",183],["download3s.net",183],["shortx.net",183],["tlin.me",183],["bestcash2020.com",183],["adslink.pw",[183,629]],["novelssites.com",183],["faucetcrypto.net",183],["trxking.xyz",183],["weadown.com",183],["m.bloggingguidance.com",183],["link.codevn.net",183],["link4rev.site",183],["c2g.at",183],["bitcosite.com",[183,560]],["cryptosh.pro",183],["windowslite.net",[183,347]],["viewfr.com",183],["cl1ca.com",183],["4br.me",183],["fir3.net",183],["seulink.*",183],["encurtalink.*",183],["kiddyshort.com",183],["watchmygf.me",[184,208]],["camwhores.*",[184,194,233,234,235]],["camwhorez.tv",[184,194,233,234]],["cambay.tv",[184,215,233,260,262,263,264,265]],["fpo.xxx",[184,215]],["sexemix.com",184],["heavyfetish.com",[184,744]],["thotcity.su",184],["viralxxxporn.com",[184,398]],["tube8.*",[185,186]],["you-porn.com",186],["youporn.*",186],["youporngay.com",186],["youpornru.com",186],["redtube.*",186],["9908ww.com",186],["adelaidepawnbroker.com",186],["bztube.com",186],["hotovs.com",186],["insuredhome.org",186],["nudegista.com",186],["pornluck.com",186],["vidd.se",186],["pornhub.*",[186,320]],["pornhub.com",186],["pornerbros.com",187],["freep.com",187],["porn.com",188],["tune.pk",189],["noticias.gospelmais.com.br",190],["techperiod.com",190],["viki.com",[191,192]],["watch-series.*",193],["watchseries.*",193],["vev.*",193],["vidop.*",193],["vidup.*",193],["sleazyneasy.com",[194,195,196]],["smutr.com",[194,327]],["tktube.com",194],["yourporngod.com",[194,195]],["javbangers.com",[194,457]],["camfox.com",194],["camthots.tv",[194,260]],["shegotass.info",194],["amateur8.com",194],["bigtitslust.com",194],["ebony8.com",194],["freeporn8.com",194],["lesbian8.com",194],["maturetubehere.com",194],["sortporn.com",194],["motherporno.com",[194,195,215,262]],["theporngod.com",[194,195]],["watchdirty.to",[194,234,235,263]],["pornsocket.com",197],["luxuretv.com",198],["porndig.com",[199,200]],["webcheats.com.br",201],["ceesty.com",[202,203]],["gestyy.com",[202,203]],["corneey.com",203],["destyy.com",203],["festyy.com",203],["sh.st",203],["mitaku.net",203],["angrybirdsnest.com",204],["zrozz.com",204],["clix4btc.com",204],["4tests.com",204],["goltelevision.com",204],["news-und-nachrichten.de",204],["laradiobbs.net",204],["urlaubspartner.net",204],["produktion.de",204],["cinemaxxl.de",204],["bladesalvador.com",204],["tempr.email",204],["friendproject.net",204],["covrhub.com",204],["trust.zone",204],["business-standard.com",204],["planetsuzy.org",205],["empflix.com",206],["xmovies8.*",207],["masteranime.tv",207],["0123movies.*",207],["gostream.*",207],["gomovies.*",207],["transparentcalifornia.com",208],["deepbrid.com",209],["webnovel.com",210],["streamwish.*",[211,212]],["oneupload.to",212],["wishfast.top",212],["rubystm.com",212],["rubyvid.com",212],["rubyvidhub.com",212],["stmruby.com",212],["streamruby.com",212],["schwaebische.de",213],["8tracks.com",214],["3movs.com",215],["bravoerotica.net",[215,262]],["youx.xxx",215],["camclips.tv",[215,327]],["xtits.*",[215,262]],["camflow.tv",[215,262,263,301,398]],["camhoes.tv",[215,260,262,263,301,398]],["xmegadrive.com",215],["xxxymovies.com",215],["xxxshake.com",215],["gayck.com",215],["xhand.com",[215,262]],["analdin.com",[215,262]],["revealname.com",216],["golfchannel.com",217],["stream.nbcsports.com",217],["mathdf.com",217],["gamcore.com",218],["porcore.com",218],["porngames.tv",218],["69games.xxx",218],["asianpornjav.com",218],["javmix.app",218],["haaretz.co.il",219],["haaretz.com",219],["hungama.com",219],["a-o.ninja",219],["anime-odcinki.pl",219],["shortgoo.blogspot.com",219],["tonanmedia.my.id",[219,579]],["isekaipalace.com",219],["plyjam.*",[220,221]],["foxsports.com.au",222],["canberratimes.com.au",222],["thesimsresource.com",223],["fxporn69.*",224],["vipbox.*",225],["viprow.*",225],["ctrl.blog",226],["sportlife.es",227],["finofilipino.org",228],["desbloqueador.*",229],["xberuang.*",230],["teknorizen.*",230],["mysflink.blogspot.com",230],["ashemaletube.*",231],["paktech2.com",231],["assia.tv",232],["assia4.com",232],["cwtvembeds.com",[234,261]],["camlovers.tv",234],["porntn.com",234],["pornissimo.org",234],["sexcams-24.com",[234,263]],["watchporn.to",[234,263]],["camwhorez.video",234],["footstockings.com",[234,235,263]],["xmateur.com",[234,235,263]],["multi.xxx",235],["weatherx.co.in",[236,237]],["sunbtc.space",236],["subtorrents.*",238],["subtorrents1.*",238],["newpelis.*",238],["pelix.*",238],["allcalidad.*",238],["infomaniakos.*",238],["ojogos.com.br",239],["powforums.com",240],["supforums.com",240],["studybullet.com",240],["usgamer.net",241],["recordonline.com",241],["freebitcoin.win",242],["e-monsite.com",242],["coindice.win",242],["freiepresse.de",243],["investing.com",244],["tornadomovies.*",245],["mp3fiber.com",246],["chicoer.com",247],["dailybreeze.com",247],["dailybulletin.com",247],["dailynews.com",247],["delcotimes.com",247],["eastbaytimes.com",247],["macombdaily.com",247],["ocregister.com",247],["pasadenastarnews.com",247],["pe.com",247],["presstelegram.com",247],["redlandsdailyfacts.com",247],["reviewjournal.com",247],["santacruzsentinel.com",247],["saratogian.com",247],["sentinelandenterprise.com",247],["sgvtribune.com",247],["tampabay.com",247],["times-standard.com",247],["theoaklandpress.com",247],["trentonian.com",247],["twincities.com",247],["whittierdailynews.com",247],["bostonherald.com",247],["dailycamera.com",247],["sbsun.com",247],["dailydemocrat.com",247],["montereyherald.com",247],["orovillemr.com",247],["record-bee.com",247],["redbluffdailynews.com",247],["reporterherald.com",247],["thereporter.com",247],["timescall.com",247],["timesheraldonline.com",247],["ukiahdailyjournal.com",247],["dailylocal.com",247],["mercurynews.com",247],["suedkurier.de",248],["anysex.com",250],["icdrama.*",251],["mangasail.*",251],["pornve.com",252],["file4go.*",253],["coolrom.com.au",253],["marie-claire.es",254],["gamezhero.com",254],["flashgirlgames.com",254],["onlinesudoku.games",254],["mpg.football",254],["sssam.com",254],["globalnews.ca",255],["drinksmixer.com",256],["leitesculinaria.com",256],["fupa.net",257],["browardpalmbeach.com",258],["dallasobserver.com",258],["houstonpress.com",258],["miaminewtimes.com",258],["phoenixnewtimes.com",258],["westword.com",258],["nowtv.com.tr",259],["caminspector.net",260],["camwhoreshd.com",260],["camgoddess.tv",260],["gay4porn.com",262],["mypornhere.com",262],["mangovideo.*",263],["love4porn.com",263],["thotvids.com",263],["watchmdh.to",263],["celebwhore.com",263],["cluset.com",263],["sexlist.tv",263],["4kporn.xxx",263],["xhomealone.com",263],["lusttaboo.com",[263,525]],["hentai-moon.com",263],["camhub.cc",[263,686]],["mediapason.it",266],["linkspaid.com",266],["tuotromedico.com",266],["neoteo.com",266],["phoneswiki.com",266],["celebmix.com",266],["myneobuxportal.com",266],["oyungibi.com",266],["25yearslatersite.com",266],["jeshoots.com",267],["techhx.com",267],["karanapk.com",267],["flashplayer.fullstacks.net",269],["cloudapps.herokuapp.com",269],["youfiles.herokuapp.com",269],["texteditor.nsspot.net",269],["temp-mail.org",270],["asianclub.*",271],["javhdporn.net",271],["vidmoly.*",272],["comnuan.com",273],["veedi.com",274],["battleboats.io",274],["anitube.*",275],["fruitlab.com",275],["haddoz.net",275],["streamingcommunity.*",275],["garoetpos.com",275],["stiletv.it",276],["mixdrop.*",277],["hqtv.biz",278],["liveuamap.com",279],["audycje.tokfm.pl",280],["shush.se",281],["allkpop.com",282],["empire-anime.*",[283,574,575,576,577,578]],["empire-streaming.*",[283,574,575,576]],["empire-anime.com",[283,574,575,576]],["empire-streamz.fr",[283,574,575,576]],["empire-stream.*",[283,574,575,576]],["pickcrackpasswords.blogspot.com",284],["kfrfansub.com",285],["thuglink.com",285],["voipreview.org",285],["illicoporno.com",286],["lavoixdux.com",286],["tonpornodujour.com",286],["jacquieetmichel.net",286],["swame.com",286],["vosfemmes.com",286],["voyeurfrance.net",286],["jacquieetmicheltv.net",[286,635,636]],["pogo.com",287],["cloudvideo.tv",288],["legionjuegos.org",289],["legionpeliculas.org",289],["legionprogramas.org",289],["16honeys.com",290],["elespanol.com",291],["remodelista.com",292],["audiofanzine.com",296],["uploadev.*",297],["developerinsider.co",298],["thehindu.com",299],["cambro.tv",[300,301]],["boobsradar.com",[301,398,705]],["nibelungen-kurier.de",302],["adfoc.us",303],["tackledsoul.com",303],["adrino1.bonloan.xyz",303],["vi-music.app",303],["instanders.app",303],["rokni.xyz",303],["keedabankingnews.com",303],["tea-coffee.net",303],["spatsify.com",303],["newedutopics.com",303],["getviralreach.in",303],["edukaroo.com",303],["funkeypagali.com",303],["careersides.com",303],["nayisahara.com",303],["wikifilmia.com",303],["infinityskull.com",303],["viewmyknowledge.com",303],["iisfvirtual.in",303],["starxinvestor.com",303],["jkssbalerts.com",303],["sahlmarketing.net",303],["filmypoints.in",303],["fitnessholic.net",303],["moderngyan.com",303],["sattakingcharts.in",303],["bankshiksha.in",303],["earn.mpscstudyhub.com",303],["earn.quotesopia.com",303],["money.quotesopia.com",303],["best-mobilegames.com",303],["learn.moderngyan.com",303],["bharatsarkarijobalert.com",303],["quotesopia.com",303],["creditsgoal.com",303],["bgmi32bitapk.in",303],["techacode.com",303],["trickms.com",303],["ielts-isa.edu.vn",303],["loan.punjabworks.com",303],["sptfy.be",303],["mcafee-com.com",[303,379]],["pianetamountainbike.it",304],["barchart.com",305],["modelisme.com",306],["parasportontario.ca",306],["prescottenews.com",306],["nrj-play.fr",307],["hackingwithreact.com",308],["gutekueche.at",309],["peekvids.com",310],["playvids.com",310],["pornflip.com",310],["redensarten-index.de",311],["vw-page.com",312],["viz.com",[313,314]],["0rechner.de",315],["configspc.com",316],["xopenload.me",316],["uptobox.com",316],["uptostream.com",316],["japgay.com",317],["mega-debrid.eu",318],["dreamdth.com",319],["diaridegirona.cat",321],["diariodeibiza.es",321],["diariodemallorca.es",321],["diarioinformacion.com",321],["eldia.es",321],["emporda.info",321],["farodevigo.es",321],["laopinioncoruna.es",321],["laopiniondemalaga.es",321],["laopiniondemurcia.es",321],["laopiniondezamora.es",321],["laprovincia.es",321],["levante-emv.com",321],["mallorcazeitung.es",321],["regio7.cat",321],["superdeporte.es",321],["playpaste.com",322],["cnbc.com",323],["firefaucet.win",324],["74k.io",[325,326]],["cloudwish.xyz",326],["gradehgplus.com",326],["javindo.site",326],["javindosub.site",326],["kamehaus.net",326],["movearnpre.com",326],["arabshentai.com>>",326],["javdo.cc>>",326],["javenglish.cc>>",326],["javhd.*>>",326],["javhdz.*>>",326],["roshy.tv>>",326],["sextb.*>>",326],["fullhdxxx.com",328],["pornclassic.tube",329],["tubepornclassic.com",329],["etonline.com",330],["creatur.io",330],["lookcam.*",330],["drphil.com",330],["urbanmilwaukee.com",330],["hideandseek.world",330],["myabandonware.com",330],["kendam.com",330],["wttw.com",330],["synonyms.com",330],["definitions.net",330],["hostmath.com",330],["camvideoshub.com",330],["minhaconexao.com.br",330],["home-made-videos.com",332],["amateur-couples.com",332],["slutdump.com",332],["artificialnudes.com",332],["bdsmkingdom.xyz",332],["cosplaynsfw.xyz",332],["crazytoys.xyz",332],["handypornos.net",332],["hardcorelesbian.xyz",332],["platinporno.com",332],["pornahegao.xyz",332],["pornobait.com",332],["pornfeet.xyz",332],["romanticlesbian.com",332],["sexontheboat.xyz",332],["traumporno.com",332],["dpstream.*",333],["produsat.com",334],["bluemediafiles.*",335],["12thman.com",336],["acusports.com",336],["atlantic10.com",336],["auburntigers.com",336],["baylorbears.com",336],["bceagles.com",336],["bgsufalcons.com",336],["big12sports.com",336],["bigten.org",336],["bradleybraves.com",336],["butlersports.com",336],["cmumavericks.com",336],["conferenceusa.com",336],["cyclones.com",336],["dartmouthsports.com",336],["daytonflyers.com",336],["dbupatriots.com",336],["dbusports.com",336],["denverpioneers.com",336],["fduknights.com",336],["fgcuathletics.com",336],["fightinghawks.com",336],["fightingillini.com",336],["floridagators.com",336],["friars.com",336],["friscofighters.com",336],["gamecocksonline.com",336],["goarmywestpoint.com",336],["gobison.com",336],["goblueraiders.com",336],["gobobcats.com",336],["gocards.com",336],["gocreighton.com",336],["godeacs.com",336],["goexplorers.com",336],["goetbutigers.com",336],["gofrogs.com",336],["gogriffs.com",336],["gogriz.com",336],["golobos.com",336],["gomarquette.com",336],["gopack.com",336],["gophersports.com",336],["goprincetontigers.com",336],["gopsusports.com",336],["goracers.com",336],["goshockers.com",336],["goterriers.com",336],["gotigersgo.com",336],["gousfbulls.com",336],["govandals.com",336],["gowyo.com",336],["goxavier.com",336],["gozags.com",336],["gozips.com",336],["griffinathletics.com",336],["guhoyas.com",336],["gwusports.com",336],["hailstate.com",336],["hamptonpirates.com",336],["hawaiiathletics.com",336],["hokiesports.com",336],["huskers.com",336],["icgaels.com",336],["iuhoosiers.com",336],["jsugamecocksports.com",336],["longbeachstate.com",336],["loyolaramblers.com",336],["lrtrojans.com",336],["lsusports.net",336],["morrisvillemustangs.com",336],["msuspartans.com",336],["muleriderathletics.com",336],["mutigers.com",336],["navysports.com",336],["nevadawolfpack.com",336],["niuhuskies.com",336],["nkunorse.com",336],["nuhuskies.com",336],["nusports.com",336],["okstate.com",336],["olemisssports.com",336],["omavs.com",336],["ovcsports.com",336],["owlsports.com",336],["purduesports.com",336],["redstormsports.com",336],["richmondspiders.com",336],["sfajacks.com",336],["shupirates.com",336],["siusalukis.com",336],["smcgaels.com",336],["smumustangs.com",336],["soconsports.com",336],["soonersports.com",336],["themw.com",336],["tulsahurricane.com",336],["txst.com",336],["txstatebobcats.com",336],["ubbulls.com",336],["ucfknights.com",336],["ucirvinesports.com",336],["uconnhuskies.com",336],["uhcougars.com",336],["uicflames.com",336],["umterps.com",336],["uncwsports.com",336],["unipanthers.com",336],["unlvrebels.com",336],["uoflsports.com",336],["usdtoreros.com",336],["utahstateaggies.com",336],["utepathletics.com",336],["utrockets.com",336],["uvmathletics.com",336],["uwbadgers.com",336],["villanova.com",336],["wkusports.com",336],["wmubroncos.com",336],["woffordterriers.com",336],["1pack1goal.com",336],["bcuathletics.com",336],["bubraves.com",336],["goblackbears.com",336],["golightsgo.com",336],["gomcpanthers.com",336],["goutsa.com",336],["mercerbears.com",336],["pirateblue.com",336],["pirateblue.net",336],["pirateblue.org",336],["quinnipiacbobcats.com",336],["towsontigers.com",336],["tribeathletics.com",336],["tribeclub.com",336],["utepminermaniacs.com",336],["utepminers.com",336],["wkutickets.com",336],["aopathletics.org",336],["atlantichockeyonline.com",336],["bigsouthnetwork.com",336],["bigsouthsports.com",336],["chawomenshockey.com",336],["dbupatriots.org",336],["drakerelays.org",336],["ecac.org",336],["ecacsports.com",336],["emueagles.com",336],["emugameday.com",336],["gculopes.com",336],["godrakebulldog.com",336],["godrakebulldogs.com",336],["godrakebulldogs.net",336],["goeags.com",336],["goislander.com",336],["goislanders.com",336],["gojacks.com",336],["gomacsports.com",336],["gseagles.com",336],["hubison.com",336],["iowaconference.com",336],["ksuowls.com",336],["lonestarconference.org",336],["mascac.org",336],["midwestconference.org",336],["mountaineast.org",336],["niu-pack.com",336],["nulakers.ca",336],["oswegolakers.com",336],["ovcdigitalnetwork.com",336],["pacersports.com",336],["rmacsports.org",336],["rollrivers.com",336],["samfordsports.com",336],["uncpbraves.com",336],["usfdons.com",336],["wiacsports.com",336],["alaskananooks.com",336],["broncathleticfund.com",336],["cameronaggies.com",336],["columbiacougars.com",336],["etownbluejays.com",336],["gobadgers.ca",336],["golancers.ca",336],["gometrostate.com",336],["gothunderbirds.ca",336],["kentstatesports.com",336],["lehighsports.com",336],["lopers.com",336],["lycoathletics.com",336],["lycomingathletics.com",336],["maraudersports.com",336],["mauiinvitational.com",336],["msumavericks.com",336],["nauathletics.com",336],["nueagles.com",336],["nwusports.com",336],["oceanbreezenyc.org",336],["patriotathleticfund.com",336],["pittband.com",336],["principiaathletics.com",336],["roadrunnersathletics.com",336],["sidearmsocial.com",336],["snhupenmen.com",336],["stablerarena.com",336],["stoutbluedevils.com",336],["uwlathletics.com",336],["yumacs.com",336],["collegefootballplayoff.com",336],["csurams.com",336],["cubuffs.com",336],["gobearcats.com",336],["gohuskies.com",336],["mgoblue.com",336],["osubeavers.com",336],["pittsburghpanthers.com",336],["rolltide.com",336],["texassports.com",336],["thesundevils.com",336],["uclabruins.com",336],["wvuathletics.com",336],["wvusports.com",336],["arizonawildcats.com",336],["calbears.com",336],["cuse.com",336],["georgiadogs.com",336],["goducks.com",336],["goheels.com",336],["gostanford.com",336],["insidekstatesports.com",336],["insidekstatesports.info",336],["insidekstatesports.net",336],["insidekstatesports.org",336],["k-stateathletics.com",336],["k-statefootball.net",336],["k-statefootball.org",336],["k-statesports.com",336],["k-statesports.net",336],["k-statesports.org",336],["k-statewomenshoops.com",336],["k-statewomenshoops.net",336],["k-statewomenshoops.org",336],["kstateathletics.com",336],["kstatefootball.net",336],["kstatefootball.org",336],["kstatesports.com",336],["kstatewomenshoops.com",336],["kstatewomenshoops.net",336],["kstatewomenshoops.org",336],["ksuathletics.com",336],["ksusports.com",336],["scarletknights.com",336],["showdownforrelief.com",336],["syracusecrunch.com",336],["texastech.com",336],["theacc.com",336],["ukathletics.com",336],["usctrojans.com",336],["utahutes.com",336],["utsports.com",336],["wsucougars.com",336],["vidlii.com",[336,362]],["tricksplit.io",336],["fangraphs.com",337],["stern.de",338],["geo.de",338],["brigitte.de",338],["schoener-wohnen.de",338],["welt.de",339],["tvspielfilm.de",[340,341,342,343]],["tvtoday.de",[340,341,342,343]],["chip.de",[340,341,342,343]],["focus.de",[340,341,342,343]],["fitforfun.de",[340,341,342,343]],["n-tv.de",344],["player.rtl2.de",345],["planetaminecraft.com",346],["cravesandflames.com",347],["codesnse.com",347],["flyad.vip",347],["lapresse.ca",348],["kolyoom.com",349],["ilovephd.com",349],["negumo.com",350],["games.wkb.jp",[351,352]],["kenshi.fandom.com",354],["hausbau-forum.de",355],["homeairquality.org",355],["call4cloud.nl",355],["fake-it.ws",356],["laksa19.github.io",357],["1shortlink.com",358],["u-s-news.com",359],["luscious.net",360],["makemoneywithurl.com",361],["junkyponk.com",361],["healthfirstweb.com",361],["vocalley.com",361],["yogablogfit.com",361],["howifx.com",361],["en.financerites.com",361],["mythvista.com",361],["livenewsflix.com",361],["cureclues.com",361],["apekite.com",361],["enit.in",361],["iammagnus.com",362],["dailyvideoreports.net",362],["unityassets4free.com",362],["docer.*",363],["resetoff.pl",363],["sexodi.com",363],["cdn77.org",364],["momxxxsex.com",365],["penisbuyutucum.net",365],["ujszo.com",366],["newsmax.com",367],["nadidetarifler.com",368],["siz.tv",368],["suzylu.co.uk",[369,370]],["onworks.net",371],["yabiladi.com",371],["downloadsoft.net",372],["newsobserver.com",373],["arkadiumhosted.com",373],["testlanguages.com",374],["newsinlevels.com",374],["videosinlevels.com",374],["procinehub.com",375],["bookmystrip.com",375],["imagereviser.com",376],["pubgaimassist.com",377],["gyanitheme.com",377],["tech.trendingword.com",377],["blog.potterworld.co",377],["hipsonyc.com",377],["tech.pubghighdamage.com",377],["blog.itijobalert.in",377],["techkhulasha.com",377],["jiocinema.com",377],["rapid-cloud.co",377],["uploadmall.com",377],["4funbox.com",378],["nephobox.com",378],["1024tera.com",378],["terabox.*",378],["starkroboticsfrc.com",379],["sinonimos.de",379],["antonimos.de",379],["quesignifi.ca",379],["tiktokrealtime.com",379],["tiktokcounter.net",379],["tpayr.xyz",379],["poqzn.xyz",379],["ashrfd.xyz",379],["rezsx.xyz",379],["tryzt.xyz",379],["ashrff.xyz",379],["rezst.xyz",379],["dawenet.com",379],["erzar.xyz",379],["waezm.xyz",379],["waezg.xyz",379],["blackwoodacademy.org",379],["cryptednews.space",379],["vivuq.com",379],["swgop.com",379],["vbnmll.com",379],["telcoinfo.online",379],["dshytb.com",379],["btcbitco.in",[379,380]],["btcsatoshi.net",379],["cempakajaya.com",379],["crypto4yu.com",379],["readbitcoin.org",379],["wiour.com",379],["finish.addurl.biz",379],["aiimgvlog.fun",[379,383]],["laweducationinfo.com",379],["savemoneyinfo.com",379],["worldaffairinfo.com",379],["godstoryinfo.com",379],["successstoryinfo.com",379],["cxissuegk.com",379],["learnmarketinfo.com",379],["bhugolinfo.com",379],["armypowerinfo.com",379],["rsgamer.app",379],["phonereviewinfo.com",379],["makeincomeinfo.com",379],["gknutshell.com",379],["vichitrainfo.com",379],["workproductivityinfo.com",379],["dopomininfo.com",379],["hostingdetailer.com",379],["fitnesssguide.com",379],["tradingfact4u.com",379],["cryptofactss.com",379],["softwaredetail.com",379],["artoffocas.com",379],["insurancesfact.com",379],["travellingdetail.com",379],["advertisingexcel.com",379],["allcryptoz.net",379],["batmanfactor.com",379],["beautifulfashionnailart.com",379],["crewbase.net",379],["documentaryplanet.xyz",379],["crewus.net",379],["gametechreviewer.com",379],["midebalonu.net",379],["misterio.ro",379],["phineypet.com",379],["seory.xyz",379],["shinbhu.net",379],["shinchu.net",379],["substitutefor.com",379],["talkforfitness.com",379],["thefitbrit.co.uk",379],["thumb8.net",379],["thumb9.net",379],["topcryptoz.net",379],["uniqueten.net",379],["ultraten.net",379],["exactpay.online",379],["quins.us",379],["kiddyearner.com",379],["bildirim.*",382],["arahdrive.com",383],["appsbull.com",384],["diudemy.com",384],["maqal360.com",[384,385,386]],["lifesurance.info",387],["akcartoons.in",388],["cybercityhelp.in",388],["dl.apkmoddone.com",389],["phongroblox.com",389],["fuckingfast.net",390],["buzzheavier.com",390],["tickhosting.com",391],["in91vip.win",392],["datavaults.co",393],["t-online.de",395],["upornia.*",[396,397]],["bobs-tube.com",398],["pornohirsch.net",399],["bembed.net",400],["embedv.net",400],["javguard.club",400],["listeamed.net",400],["v6embed.xyz",400],["vembed.*",400],["vid-guard.com",400],["vinomo.xyz",400],["nekolink.site",[401,402]],["141jav.com",403],["141tube.com",403],["aagmaal.com",403],["camcam.cc",403],["javneon.tv",403],["javsaga.ninja",403],["pixsera.net",404],["jnews5.com",405],["pc-builds.com",406],["reuters.com",406],["today.com",406],["videogamer.com",406],["wrestlinginc.com",406],["azcentral.com",407],["greenbaypressgazette.com",407],["palmbeachpost.com",407],["usatoday.com",[407,408]],["ydr.com",407],["247sports.com",409],["indiatimes.com",410],["netzwelt.de",411],["filmibeat.com",412],["goodreturns.in",412],["mykhel.com",412],["daemonanime.net",412],["luckydice.net",412],["weatherwx.com",412],["sattaguess.com",412],["winshell.de",412],["rosasidan.ws",412],["upiapi.in",412],["networkhint.com",412],["thichcode.net",412],["texturecan.com",412],["tikmate.app",[412,617]],["arcaxbydz.id",412],["quotesshine.com",412],["arcade.buzzrtv.com",413],["arcade.dailygazette.com",413],["arcade.lemonde.fr",413],["arena.gamesforthebrain.com",413],["bestpuzzlesandgames.com",413],["cointiply.arkadiumarena.com",413],["gamelab.com",413],["games.abqjournal.com",413],["games.arkadium.com",413],["games.amny.com",413],["games.bellinghamherald.com",413],["games.besthealthmag.ca",413],["games.bnd.com",413],["games.boston.com",413],["games.bostonglobe.com",413],["games.bradenton.com",413],["games.centredaily.com",413],["games.charlottegames.cnhinews.com",413],["games.crosswordgiant.com",413],["games.dailymail.co.uk",413],["games.dallasnews.com",413],["games.daytondailynews.com",413],["games.denverpost.com",413],["games.everythingzoomer.com",413],["games.fresnobee.com",413],["games.gameshownetwork.com",413],["games.get.tv",413],["games.greatergood.com",413],["games.heraldonline.com",413],["games.heraldsun.com",413],["games.idahostatesman.com",413],["games.insp.com",413],["games.islandpacket.com",413],["games.journal-news.com",413],["games.kansas.com",413],["games.kansascity.com",413],["games.kentucky.com",413],["games.lancasteronline.com",413],["games.ledger-enquirer.com",413],["games.macon.com",413],["games.mashable.com",413],["games.mercedsunstar.com",413],["games.metro.us",413],["games.metv.com",413],["games.miamiherald.com",413],["games.modbee.com",413],["games.moviestvnetwork.com",413],["games.myrtlebeachonline.com",413],["games.games.newsgames.parade.com",413],["games.pressdemocrat.com",413],["games.puzzlebaron.com",413],["games.puzzler.com",413],["games.puzzles.ca",413],["games.qns.com",413],["games.readersdigest.ca",413],["games.sacbee.com",413],["games.sanluisobispo.com",413],["games.sixtyandme.com",413],["games.sltrib.com",413],["games.springfieldnewssun.com",413],["games.star-telegram.com",413],["games.startribune.com",413],["games.sunherald.com",413],["games.theadvocate.com",413],["games.thenewstribune.com",413],["games.theolympian.com",413],["games.theportugalnews.com",413],["games.thestar.com",413],["games.thestate.com",413],["games.tri-cityherald.com",413],["games.triviatoday.com",413],["games.usnews.com",413],["games.word.tips",413],["games.wordgenius.com",413],["games.wtop.com",413],["jeux.meteocity.com",413],["juegos.as.com",413],["juegos.elnuevoherald.com",413],["juegos.elpais.com",413],["philly.arkadiumarena.com",413],["play.dictionary.com",413],["puzzles.bestforpuzzles.com",413],["puzzles.centralmaine.com",413],["puzzles.crosswordsolver.org",413],["puzzles.independent.co.uk",413],["puzzles.nola.com",413],["puzzles.pressherald.com",413],["puzzles.standard.co.uk",413],["puzzles.sunjournal.com",413],["arkadium.com",414],["abysscdn.com",[415,416]],["turtleviplay.xyz",417],["ai.hubtoday.app",418],["news.now.com",419],["lared.cl",420],["atozmath.com",[420,442,443,444,445,446,447]],["hdfilmizlesen.com",421],["arcai.com",422],["my-code4you.blogspot.com",423],["flickr.com",424],["firefile.cc",425],["pestleanalysis.com",425],["kochamjp.pl",425],["tutorialforlinux.com",425],["whatsaero.com",425],["animeblkom.net",[425,439]],["blkom.com",425],["globes.co.il",[426,427]],["jardiner-malin.fr",428],["tw-calc.net",429],["ohmybrush.com",430],["talkceltic.net",431],["mentalfloss.com",432],["uprafa.com",433],["cube365.net",434],["wwwfotografgotlin.blogspot.com",435],["freelistenonline.com",435],["badassdownloader.com",436],["quickporn.net",437],["yellowbridge.com",438],["aosmark.com",440],["ctrlv.*",441],["newyorker.com",448],["brighteon.com",[449,450]],["more.tv",451],["video1tube.com",452],["alohatube.xyz",452],["4players.de",453],["onlinesoccermanager.com",453],["fshost.me",454],["link.cgtips.org",455],["hentaicloud.com",456],["paperzonevn.com",458],["9jarock.org",459],["fzmovies.info",459],["fztvseries.ng",459],["netnaijas.com",459],["hentaienglish.com",460],["hentaiporno.xxx",460],["venge.io",[461,462]],["its.porn",[463,464]],["atv.at",465],["2ndrun.tv",466],["rackusreads.com",466],["teachmemicro.com",466],["willcycle.com",466],["kusonime.com",[467,468]],["123movieshd.*",469],["imgur.com",[470,471,745]],["hentai-party.com",472],["hentaicomics.pro",472],["uproxy.*",473],["animesa.*",474],["subtitleone.cc",475],["mysexgames.com",476],["ancient-origins.*",477],["cinecalidad.*",[478,479]],["xnxx.*",480],["xvideos.*",480],["gdr-online.com",481],["mmm.dk",482],["iqiyi.com",[483,484,607]],["m.iqiyi.com",485],["nbcolympics.com",486],["apkhex.com",487],["indiansexstories2.net",488],["issstories.xyz",488],["1340kbbr.com",489],["gorgeradio.com",489],["kduk.com",489],["kedoam.com",489],["kejoam.com",489],["kelaam.com",489],["khsn1230.com",489],["kjmx.rocks",489],["kloo.com",489],["klooam.com",489],["klykradio.com",489],["kmed.com",489],["kmnt.com",489],["kpnw.com",489],["kppk983.com",489],["krktcountry.com",489],["ktee.com",489],["kwro.com",489],["kxbxfm.com",489],["thevalley.fm",489],["quizlet.com",490],["dsocker1234.blogspot.com",491],["schoolcheats.net",[492,493]],["mgnet.xyz",494],["designtagebuch.de",495],["pixroute.com",496],["uploady.io",497],["calculator-online.net",498],["porngames.club",499],["sexgames.xxx",499],["111.90.159.132",500],["mobile-tracker-free.com",501],["social-unlock.com",502],["superpsx.com",503],["ninja.io",504],["sourceforge.net",505],["samfirms.com",506],["rapelust.com",507],["vtube.to",507],["desitelugusex.com",507],["dvdplay.*",507],["xvideos-downloader.net",507],["xxxvideotube.net",507],["sdefx.cloud",507],["nozomi.la",507],["banned.video",508],["madmaxworld.tv",508],["androidpolice.com",508],["babygaga.com",508],["backyardboss.net",508],["carbuzz.com",508],["cbr.com",508],["collider.com",508],["dualshockers.com",508],["footballfancast.com",508],["footballleagueworld.co.uk",508],["gamerant.com",508],["givemesport.com",508],["hardcoregamer.com",508],["hotcars.com",508],["howtogeek.com",508],["makeuseof.com",508],["moms.com",508],["movieweb.com",508],["pocket-lint.com",508],["pocketnow.com",508],["screenrant.com",508],["simpleflying.com",508],["thegamer.com",508],["therichest.com",508],["thesportster.com",508],["thethings.com",508],["thetravel.com",508],["topspeed.com",508],["xda-developers.com",508],["huffpost.com",509],["ingles.com",510],["spanishdict.com",510],["surfline.com",[511,512]],["play.tv3.ee",513],["play.tv3.lt",513],["play.tv3.lv",[513,514]],["tv3play.skaties.lv",513],["bulbagarden.net",515],["hollywoodlife.com",516],["mat6tube.com",517],["hotabis.com",518],["root-nation.com",518],["italpress.com",518],["airsoftmilsimnews.com",518],["artribune.com",518],["newtumbl.com",519],["apkmaven.*",520],["aruble.net",521],["nevcoins.club",522],["mail.com",523],["gmx.*",524],["mangakita.id",526],["avpgalaxy.net",527],["panda-novel.com",528],["lightsnovel.com",528],["eaglesnovel.com",528],["pandasnovel.com",528],["ewrc-results.com",529],["kizi.com",530],["cyberscoop.com",531],["fedscoop.com",531],["jeep-cj.com",532],["sponsorhunter.com",533],["cloudcomputingtopics.net",534],["likecs.com",535],["tiscali.it",536],["linkspy.cc",537],["adshnk.com",538],["chattanoogan.com",539],["adsy.pw",540],["playstore.pw",540],["windowspro.de",541],["tvtv.ca",542],["tvtv.us",542],["mydaddy.cc",543],["roadtrippin.fr",544],["vavada5com.com",545],["anyporn.com",[546,563]],["bravoporn.com",546],["bravoteens.com",546],["crocotube.com",546],["hellmoms.com",546],["hellporno.com",546],["sex3.com",546],["tubewolf.com",546],["xbabe.com",546],["xcum.com",546],["zedporn.com",546],["imagetotext.info",547],["infokik.com",548],["freepik.com",549],["ddwloclawek.pl",[550,551]],["www.seznam.cz",552],["deezer.com",553],["my-subs.co",554],["plaion.com",555],["slideshare.net",[556,557]],["ustreasuryyieldcurve.com",558],["businesssoftwarehere.com",559],["goo.st",559],["freevpshere.com",559],["softwaresolutionshere.com",559],["gamereactor.*",561],["madoohd.com",562],["doomovie-hd.*",562],["staige.tv",564],["androidadult.com",565],["streamvid.net",566],["watchtv24.com",567],["cellmapper.net",568],["medscape.com",569],["newscon.org",[570,571]],["wheelofgold.com",572],["drakecomic.*",572],["app.blubank.com",573],["mobileweb.bankmellat.ir",573],["ccthesims.com",580],["chromeready.com",580],["dtbps3games.com",580],["illustratemagazine.com",580],["uknip.co.uk",580],["vod.pl",581],["megadrive-emulator.com",582],["tvhay.*",[583,584]],["moviesapi.club",585],["watchx.top",585],["digimanie.cz",586],["svethardware.cz",586],["srvy.ninja",587],["chat.tchatche.com",[588,589]],["cnn.com",[590,591,592]],["news.bg",593],["edmdls.com",594],["freshremix.net",594],["scenedl.org",594],["trakt.tv",595],["client.falixnodes.net",[596,597]],["shroomers.app",598],["classicalradio.com",599],["di.fm",599],["jazzradio.com",599],["radiotunes.com",599],["rockradio.com",599],["zenradio.com",599],["getthit.com",600],["techedubyte.com",601],["iwanttfc.com",602],["nutraingredients-asia.com",603],["nutraingredients-latam.com",603],["nutraingredients-usa.com",603],["nutraingredients.com",603],["ozulscansen.com",604],["nexusmods.com",605],["lookmovie.*",606],["lookmovie2.to",606],["biletomat.pl",608],["hextank.io",[609,610]],["filmizlehdfilm.com",[611,612,613,614]],["filmizletv.*",[611,612,613,614]],["fullfilmizle.cc",[611,612,613,614]],["gofilmizle.net",[611,612,613,614]],["cimanow.cc",615],["bgmiupdate.com.in",615],["freex2line.online",616],["btvplus.bg",618],["sagewater.com",619],["redlion.net",619],["filmweb.pl",620],["satdl.com",621],["vidstreaming.xyz",622],["everand.com",623],["myradioonline.pl",624],["cbs.com",625],["paramountplus.com",625],["colourxh.site",626],["fullxh.com",626],["galleryxh.site",626],["megaxh.com",626],["movingxh.world",626],["seexh.com",626],["unlockxh4.com",626],["valuexh.life",626],["xhaccess.com",626],["xhadult2.com",626],["xhadult3.com",626],["xhadult4.com",626],["xhadult5.com",626],["xhamster.*",626],["xhamster1.*",626],["xhamster10.*",626],["xhamster11.*",626],["xhamster12.*",626],["xhamster13.*",626],["xhamster14.*",626],["xhamster15.*",626],["xhamster16.*",626],["xhamster17.*",626],["xhamster18.*",626],["xhamster19.*",626],["xhamster20.*",626],["xhamster2.*",626],["xhamster3.*",626],["xhamster4.*",626],["xhamster42.*",626],["xhamster46.com",626],["xhamster5.*",626],["xhamster7.*",626],["xhamster8.*",626],["xhamsterporno.mx",626],["xhbig.com",626],["xhbranch5.com",626],["xhchannel.com",626],["xhdate.world",626],["xhlease.world",626],["xhmoon5.com",626],["xhofficial.com",626],["xhopen.com",626],["xhplanet1.com",626],["xhplanet2.com",626],["xhreal2.com",626],["xhreal3.com",626],["xhspot.com",626],["xhtotal.com",626],["xhtree.com",626],["xhvictory.com",626],["xhwebsite.com",626],["xhwebsite2.com",626],["xhwebsite5.com",626],["xhwide1.com",626],["xhwide2.com",626],["xhwide5.com",626],["file-upload.net",627],["tunein.com",628],["acortalo.*",[630,631,632,633]],["acortar.*",[630,631,632,633]],["hentaihaven.xxx",634],["jacquieetmicheltv2.net",636],["a2zapk.*",637],["fcportables.com",[638,639]],["emurom.net",640],["freethesaurus.com",[641,642]],["thefreedictionary.com",[641,642]],["oeffentlicher-dienst.info",643],["im9.eu",[644,645]],["dcdlplayer8a06f4.xyz",646],["ultimate-guitar.com",647],["claimbits.net",648],["sexyscope.net",649],["kickassanime.*",650],["recherche-ebook.fr",651],["virtualdinerbot.com",651],["zonebourse.com",652],["pink-sluts.net",653],["andhrafriends.com",654],["benzinpreis.de",655],["defenseone.com",656],["govexec.com",656],["nextgov.com",656],["route-fifty.com",656],["sharing.wtf",657],["wetter3.de",658],["esportivos.fun",659],["cosmonova-broadcast.tv",660],["538.nl",661],["hartvannederland.nl",661],["kijk.nl",661],["shownieuws.nl",661],["vandaaginside.nl",661],["rock.porn",[662,663]],["videzz.net",[664,665]],["ezaudiobookforsoul.com",666],["club386.com",667],["decompiler.com",[668,669]],["littlebigsnake.com",670],["easyfun.gg",671],["smailpro.com",672],["ilgazzettino.it",673],["ilmessaggero.it",673],["3bmeteo.com",[674,675]],["mconverter.eu",676],["lover937.net",677],["10gb.vn",678],["pes6.es",679],["tactics.tools",[680,681]],["boundhub.com",682],["reliabletv.me",683],["jakondo.ru",684],["trueachievements.com",684],["truesteamachievements.com",684],["truetrophies.com",684],["av1encodes.com",684],["filecrypt.*",685],["wired.com",687],["spankbang.*",[688,689,690,749,750]],["hulu.com",[691,692,693]],["hanime.tv",694],["nhentai.net",[695,696,697]],["pouvideo.*",698],["povvideo.*",698],["povw1deo.*",698],["povwideo.*",698],["powv1deo.*",698],["powvibeo.*",698],["powvideo.*",698],["powvldeo.*",698],["powcloud.org",699],["primevideo.com",700],["read.amazon.*",[700,716]],["anonymfile.com",701],["gofile.to",701],["dotycat.com",702],["rateyourmusic.com",703],["reporterpb.com.br",704],["blog-dnz.com",706],["18adultgames.com",707],["colnect.com",[708,709]],["adultgamesworld.com",710],["servustv.com",[711,712]],["reviewdiv.com",713],["parametric-architecture.com",714],["voiceofdenton.com",715],["concealednation.org",715],["askattest.com",717],["opensubtitles.com",718],["savefiles.com",719],["streamup.ws",720],["pfps.gg",721],["goodstream.one",722],["lecrabeinfo.net",723],["cerberusapp.com",724],["smashkarts.io",725],["beamng.wesupply.cx",726],["wowtv.de",[727,728]],["jsfiddle.net",[729,730]],["musicbusinessworldwide.com",731],["mahfda.com",732],["agar.live",733],["dailymotion.com",734],["scribd.com",735],["live.arynews.tv",736],["pornlore.com",[737,738]],["91porn.com",739],["www.google.*",740],["tacobell.com",741],["zefoy.com",742],["cnet.com",743],["trendyol.com",[746,747]],["natgeotv.com",748],["globo.com",751],["linklog.tiagorangel.com",753],["wayfair.com",754]]);
const exceptionsMap = new Map([["cloudflare.com",[0]],["pingit.com",[183]],["loan.bgmi32bitapk.in",[303]],["lookmovie.studio",[606]]]);
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
