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
const argsList = [["console.clear","undefined"],["aclib.runInPagePush","{}","as","callback"],["aclib.runBanner","{}","as","function"],["aclib.runPop","throwFunc"],["aclib.runInterstitial","{}","as","function"],["aclib.runAutoTag","noopFunc"],["adBlockDetected","undefined"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["dvtag.getTargeting","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["googletag.cmd","{}"],["_aps","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["google.ima.settings.setDisableFlashAds","noopFunc"],["pa.privacy","{}"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505","{}"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["ga.sendGaEvent","noopFunc"],["adobe","{}"],["MT","{}"],["MT.track","noopFunc"],["ClickOmniPartner","noopFunc"],["adex","{}"],["adex.getAdexUser","noopFunc"],["Adkit","noopFunc"],["Object.prototype.shouldExpectGoogleCMP","false"],["apntag.refresh","noopFunc"],["pa.sendEvent","noopFunc"],["Munchkin","{}"],["Munchkin.init","noopFunc"],["ttd_dom_ready","noopFunc"],["ramp","undefined"],["appInfo.snowplow.trackSelfDescribingEvent","noopFunc"],["_vwo_code.init","noopFunc"],["adobePageView","noopFunc"],["dapTracker","{}"],["dapTracker.track","noopFunc"],["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["console.clear","noopFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["console.clear","trueFunc"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["check_adblock","true"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["adBlockEnabled","false"],["puShown","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["openPopunder","noopFunc"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["CaptchmeState.adb","undefined"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["HTMLAnchorElement.prototype.click","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["check","true"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["runAdBlocker","false"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["cnbc.canShowAds","true"],["firefaucet","true"],["cRAds","true"],["uas","[]"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["foundation.adPlayer.bitmovin","{}"],["weltConfig.switches.videoAdBlockBlocker","false"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["Object.prototype.adReinsertion","noopFunc"],["getHomadConfig","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["ulp_noadb","true"],["Object.prototype.adblock_detected","false"],["timeSec","0"],["adsbygoogle.loaded","true"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["Adv_ab","false"],["sgpbCanRunAds","true"],["document.hidden","false"],["hasFocus","trueFunc"],["navigator.brave","undefined"],["Object.prototype.isAllAdClose","true"],["document.hasFocus","trueFunc"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["navigator.webkitTemporaryStorage.queryUsageAndQuota","noopFunc"],["document.onkeydown","noopFunc"],["showadas","true"],["alert","throwFunc"],["aSl.gcd","0"],["window.adLink","null"],["detectedAdblock","undefined"],["isTabActive","true"],["clicked","2"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["flashvars.mlogo",""],["vpPrerollVideo","undefined"],["PlayerConfig.config.CustomAdSetting","[]"],["PlayerConfig.trusted","true"],["PlayerConfig.config.AffiliateAdViewLevel","3"],["univresalP","noopFunc"],["hold_click","false"],["tie.ad_blocker_detector","false"],["admiral","noopFunc"],["gnt.x.uam"],["gnt.u.z","true"],["__INITIAL_DATA__.siteData.admiralScript"],["objAd.loadAdShield","noopFunc"],["window.myAd.runAd","noopFunc"],["detectAdBlock","noopFunc"],["__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["document.ontouchend","null"],["document.onclick","null"],["playID","1"],["googletag._loaded_","true"],["app._data.ads","[]"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["__NEXT_DATA__.props.pageProps.adVideo","undefined"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["xv_ad_block","0"],["openWindow","noopFunc"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["showada","true"],["showax","true"],["p18","undefined"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["Object.prototype.adblockFound","false"],["createCanvas","noopFunc"],["document.bridCanRunAds","true"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["xv.sda.pp.init","noopFunc"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["ad_link",""],["penciBlocksArray","[]"],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["D4zz","noopFunc"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["tv3Cmp.ConsentGiven","true"],["setupSkin","noopFunc"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["td_ad_background_click_link","undefined"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["puShown1","true"],["passthetest","true"],["pandaAdviewValidate","true"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["abpblocked","undefined"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["sssp","emptyObj"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["adSettings","[]"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["googletag","true"],["tOS2","150"],["checkAdBlocker","noopFunc"],["navigator.standalone","true"],["ShowAdvertising","{}"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["feedBack.showAffilaePromo","noopFunc"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["HTMLScriptElement.prototype.onerror","null"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["window.adngin","{}"],["amzn_aps_csm","{}"],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["sharedController.adblockDetector","noopFunc"],["checkAdsStatus","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["checkAdBlockeraz","noopFunc"],["blockingAds","false"],["Yii2App.playbackTimeout","0"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["HTMLImageElement.prototype.onerror","undefined"],["HTMLImageElement.prototype.onload","undefined"],["powerAPITag","emptyObj"],["playerEnhancedConfig.run","throwFunc"],["aoAdBlockDetected","false"],["rodo.checkIsDidomiConsent","noopFunc"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["hasAdBlocker","false"],["initials.yld-pdpopunder",""],["download_click","true"],["advertisement3","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["dvsize","52"],["majorse","true"],["completed","1"],["testerli","false"],["w87.abd","noopFunc"],["w87.dsab","noopFunc"],["document.referrer",""],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["one_time","1"],["consentGiven","true"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["malisx","true"],["alim","true"],["ADS.isBannersEnabled","false"],["EASYFUN_ADS_CAN_RUN","true"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["detectedAdblock","noopFunc"],["Object.prototype.DetectByGoogleAd","noopFunc"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["NativeAd","noopFunc"],["Blob","noopFunc"],["window.navigator.brave","undefined"],["HTMLScriptElement.prototype.onerror","undefined"],["isAdblock","false"],["openPop","noopFunc"],["cns.library","true"],["BJSShowUnder","{}"],["BJSShowUnder.bindTo","noopFunc"],["BJSShowUnder.add","noopFunc"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["ABLK","false"],["_n_app.popunder","null"],["_n_app.options.ads.show_popunders","false"],["N_BetterJsPop.object","{}"],["isAdb","false"],["puOverlay","noopFunc"],["ue_adb_chk","1"],["countDown","0"],["runCheck","noopFunc"],["adsSlotRenderEndSeen","true"],["showModal","noopFunc"],["flashvars.mlogo_link",""],["isAdBlocked","noopFunc"],["URLlist","[]"],["aaw","{}"],["aaw.processAdsOnPage","noopFunc"],["doOpen","undefined"],["OneTrust","{}"],["OneTrust.IsAlertBoxClosed","trueFunc"],["FOXIZ_MAIN_SCRIPT.siteAccessDetector","noopFunc"],["openAdBlockPopup","noopFunc"],["Object.prototype._adsDisabled","true"],["advanced_ads_check_adblocker","noopFunc"],["canRunAds","1"],["attestHasAdBlockerActivated","true"],["extInstalled","true"],["SaveFiles.add","noopFunc"],["detectSandbox","noopFunc"],["adbon","0"],["LCI.adBlockDetectorEnabled","false"],["stoCazzo","true"],["adblockDetected","false"],["importFAB","undefined"],["window.__CONFIGURATION__.adInsertion.enabled","false"],["window.__CONFIGURATION__.features.enableAdBlockerDetection","false"],["_carbonads","{}"],["_bsa","{}"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["Object.prototype.updateModifiedCommerceUrl","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["Visitor","{}"],["send_gravity_event","noopFunc"],["send_recommendation_event","noopFunc"],["libAnalytics.data.get","noopFunc"],["adthrive._components.start","noopFunc"],["navigator.sendBeacon","noopFunc"]];
const hostnamesMap = new Map([["jilliandescribecompany.com",0],["gogoanime.*",[0,200]],["adrianmissionminute.com",0],["alejandrocenturyoil.com",0],["alleneconomicmatter.com",0],["bethshouldercan.com",0],["bigclatterhomesguideservice.com",0],["brittneystandardwestern.com",0],["brookethoughi.com",0],["brucevotewithin.com",0],["cindyeyefinal.com",0],["denisegrowthwide.com",0],["diananatureforeign.com",0],["donaldlineelse.com",0],["edwardarriveoften.com",0],["erikcoldperson.com",0],["evelynthankregion.com",0],["graceaddresscommunity.com",0],["heatherdiscussionwhen.com",0],["heatherwholeinvolve.com",0],["housecardsummerbutton.com",0],["jamessoundcost.com",0],["jamiesamewalk.com",0],["jasminetesttry.com",0],["jasonresponsemeasure.com",0],["jayservicestuff.com",0],["jennifercertaindevelopment.com",0],["jessicaglassauthor.com",0],["johnalwayssame.com",0],["johntryopen.com",0],["jonathansociallike.com",0],["josephseveralconcern.com",0],["kellywhatcould.com",0],["kennethofficialitem.com",0],["kristiesoundsimply.com",0],["lisatrialidea.com",0],["lorimuchbenefit.com",0],["loriwithinfamily.com",0],["lukecomparetwo.com",0],["mariatheserepublican.com",0],["markstyleall.com",0],["michaelapplysome.com",0],["morganoperationface.com",0],["nathanfromsubject.com",0],["paulkitchendark.com",0],["rebeccaneverbase.com",0],["richardsignfish.com",0],["roberteachfinal.com",0],["robertordercharacter.com",0],["robertplacespace.com",0],["ryanagoinvolve.com",0],["sandratableother.com",0],["sandrataxeight.com",0],["sethniceletter.com",0],["shannonpersonalcost.com",0],["susanhavekeep.com",0],["tinycat-voe-fashion.com",0],["toddpartneranimal.com",0],["troyyourlead.com",0],["uptodatefinishconference.com",0],["uptodatefinishconferenceroom.com",0],["voe.sx",0],["maxfinishseveral.com",0],["voe.sx>>",0],["javboys.tv>>",0],["freeplayervideo.com",0],["nazarickol.com",0],["player-cdn.com",0],["playhydrax.com",[0,408,409]],["rabbitstream.net",0],["fmovies.*",0],["japscan.*",[1,2,3,4,5]],["u26bekrb.fun",6],["br.de",7],["indeed.com",8],["zillow.com",[8,112]],["pasteboard.co",9],["bbc.com",10],["clickhole.com",11],["deadspin.com",11],["gizmodo.com",11],["jalopnik.com",11],["jezebel.com",11],["kotaku.com",11],["lifehacker.com",11],["splinternews.com",11],["theinventory.com",11],["theonion.com",11],["theroot.com",11],["thetakeout.com",11],["pewresearch.org",11],["los40.com",[12,13]],["as.com",13],["caracol.com.co",13],["telegraph.co.uk",[14,15]],["poweredbycovermore.com",[14,67]],["lumens.com",[14,67]],["verizon.com",16],["humanbenchmark.com",17],["politico.com",18],["officedepot.co.cr",[19,20]],["officedepot.*",[21,22]],["usnews.com",23],["coolmathgames.com",[24,286,287,288]],["video.gazzetta.it",[25,26]],["oggi.it",[25,26]],["manoramamax.com",25],["factable.com",27],["thedailybeast.com",28],["zee5.com",29],["gala.fr",30],["geo.fr",30],["voici.fr",30],["gloucestershirelive.co.uk",31],["arsiv.mackolik.com",32],["jacksonguitars.com",33],["scandichotels.com",34],["stylist.co.uk",35],["nettiauto.com",36],["thaiairways.com",[37,38]],["cerbahealthcare.it",[39,40]],["futura-sciences.com",[39,57]],["toureiffel.paris",39],["campusfrance.org",[39,149]],["tiendaenlinea.claro.com.ni",[41,42]],["tieba.baidu.com",43],["fandom.com",[44,45,346]],["grasshopper.com",[46,47]],["epson.com.cn",[48,49,50,51]],["oe24.at",[52,53]],["szbz.de",52],["platform.autods.com",[54,55]],["kcra.com",56],["wcvb.com",56],["sportdeutschland.tv",56],["citibank.com.sg",58],["uol.com.br",[59,60,61,62,63]],["gazzetta.gr",64],["digicol.dpm.org.cn",[65,66]],["virginmediatelevision.ie",68],["larazon.es",[69,70]],["waitrosecellar.com",[71,72,73]],["kicker.de",[74,387]],["sharpen-free-design-generator.netlify.app",[75,76]],["help.cashctrl.com",[77,78]],["gry-online.pl",79],["vidaextra.com",80],["commande.rhinov.pro",[81,82]],["ecom.wixapps.net",[81,82]],["tipranks.com",[83,84]],["iceland.co.uk",[85,86,87]],["socket.pearsoned.com",88],["tntdrama.com",[89,90]],["trutv.com",[89,90]],["mobile.de",[91,92]],["ioe.vn",[93,94]],["geiriadur.ac.uk",[93,97]],["welsh-dictionary.ac.uk",[93,97]],["bikeportland.org",[95,96]],["biologianet.com",[60,61,62]],["10.com.au",[98,99]],["10play.com.au",[98,99]],["sunshine-live.de",[100,101]],["whatismyip.com",[102,103]],["myfitnesspal.com",104],["netoff.co.jp",[105,106]],["bluerabbitrx.com",[105,106]],["foundit.*",[107,108]],["clickjogos.com.br",109],["bristan.com",[110,111]],["share.hntv.tv",[113,114,115,116]],["forum.dji.com",[113,116]],["unionpayintl.com",[113,115]],["streamelements.com",113],["optimum.net",[117,118]],["hdfcfund.com",119],["user.guancha.cn",[120,121]],["sosovalue.com",122],["bandyforbundet.no",[123,124]],["tatacommunications.com",125],["kb.arlo.com",[125,155]],["suamusica.com.br",[126,127,128]],["macrotrends.net",[129,130]],["code.world",131],["smartcharts.net",131],["topgear.com",132],["eservice.directauto.com",[133,134]],["nbcsports.com",135],["standard.co.uk",136],["pruefernavi.de",[137,138]],["17track.net",139],["visible.com",140],["hagerty.com",[141,142]],["marketplace.nvidia.com",143],["kino.de",[144,145]],["9now.nine.com.au",146],["worldstar.com",147],["prisjakt.no",148],["developer.arm.com",[150,151]],["sterkinekor.com",152],["iogames.space",153],["id.condenast.com",154],["tires.costco.com",156],["livemint.com",[157,158]],["m.youtube.com",[159,160,161,162]],["music.youtube.com",[159,160,161,162]],["tv.youtube.com",[159,160,161,162]],["www.youtube.com",[159,160,161,162]],["youtubekids.com",[159,160,161,162]],["youtube-nocookie.com",[159,160,161,162]],["eu-proxy.startpage.com",[159,160,162]],["timesofindia.indiatimes.com",163],["economictimes.indiatimes.com",164],["motherless.com",165],["sueddeutsche.de",166],["watchanimesub.net",167],["wcoanimesub.tv",167],["wcoforever.net",167],["freeviewmovies.com",167],["filehorse.com",167],["guidetnt.com",167],["starmusiq.*",167],["sp-today.com",167],["linkvertise.com",167],["eropaste.net",167],["getpaste.link",167],["sharetext.me",167],["wcofun.*",167],["note.sieuthuthuat.com",167],["gadgets.es",[167,458]],["amateurporn.co",[167,256]],["wiwo.de",168],["primewire.*",169],["alphaporno.com",[169,540]],["porngem.com",169],["shortit.pw",[169,242]],["familyporn.tv",169],["sbplay.*",169],["id45.cyou",169],["85po.com",[169,227]],["milfnut.*",169],["k1nk.co",169],["watchasians.cc",169],["sankakucomplex.com",170],["player.glomex.com",171],["merkur.de",171],["tz.de",171],["sxyprn.*",172],["hqq.*",[173,174]],["waaw.*",[174,175]],["hotpornfile.org",174],["younetu.*",174],["multiup.us",174],["peliculas8k.com",[174,175]],["czxxx.org",174],["vtplayer.online",174],["vvtplayer.*",174],["netu.ac",174],["netu.frembed.lol",174],["123link.*",176],["adshort.*",176],["mitly.us",176],["linkrex.net",176],["linx.cc",176],["oke.io",176],["linkshorts.*",176],["dz4link.com",176],["adsrt.*",176],["linclik.com",176],["shrt10.com",176],["vinaurl.*",176],["loptelink.com",176],["adfloz.*",176],["cut-fly.com",176],["linkfinal.com",176],["payskip.org",176],["cutpaid.com",176],["linkjust.com",176],["leechpremium.link",176],["icutlink.com",[176,261]],["oncehelp.com",176],["rgl.vn",176],["reqlinks.net",176],["bitlk.com",176],["qlinks.eu",176],["link.3dmili.com",176],["short-fly.com",176],["foxseotools.com",176],["dutchycorp.*",176],["shortearn.*",176],["pingit.*",176],["link.turkdown.com",176],["7r6.com",176],["oko.sh",176],["ckk.ai",176],["fc.lc",176],["fstore.biz",176],["shrink.*",176],["cuts-url.com",176],["eio.io",176],["exe.app",176],["exee.io",176],["exey.io",176],["skincarie.com",176],["exeo.app",176],["tmearn.*",176],["coinlyhub.com",[176,324]],["adsafelink.com",176],["aii.sh",176],["megalink.*",176],["cybertechng.com",[176,340]],["cutdl.xyz",176],["iir.ai",176],["shorteet.com",[176,358]],["miniurl.*",176],["smoner.com",176],["gplinks.*",176],["odisha-remix.com",[176,340]],["xpshort.com",[176,340]],["upshrink.com",176],["clk.*",176],["easysky.in",176],["veganab.co",176],["golink.bloggerishyt.in",176],["birdurls.com",176],["vipurl.in",176],["jameeltips.us",176],["promo-visits.site",176],["satoshi-win.xyz",[176,374]],["shorterall.com",176],["encurtandourl.com",176],["forextrader.site",176],["postazap.com",176],["cety.app",176],["exego.app",[176,372]],["cutlink.net",176],["cutyurls.com",176],["cutty.app",176],["cutnet.net",176],["jixo.online",176],["tinys.click",[176,340]],["cpm.icu",176],["panyshort.link",176],["enagato.com",176],["pandaznetwork.com",176],["tpi.li",176],["oii.la",176],["recipestutorials.com",176],["shrinkme.*",176],["shrinke.*",176],["mrproblogger.com",176],["themezon.net",176],["shrinkforearn.in",176],["oii.io",176],["du-link.in",176],["atglinks.com",176],["thotpacks.xyz",176],["megaurl.in",176],["megafly.in",176],["simana.online",176],["fooak.com",176],["joktop.com",176],["evernia.site",176],["falpus.com",176],["link.paid4link.com",176],["exalink.fun",176],["shortxlinks.com",176],["upfion.com",176],["upfiles.app",176],["upfiles-urls.com",176],["flycutlink.com",[176,340]],["linksly.co",176],["link1s.*",176],["pkr.pw",176],["imagenesderopaparaperros.com",176],["shortenbuddy.com",176],["apksvip.com",176],["4cash.me",176],["namaidani.com",176],["shortzzy.*",176],["teknomuda.com",176],["shorttey.*",[176,323]],["miuiku.com",176],["savelink.site",176],["lite-link.*",176],["adcorto.*",176],["samaa-pro.com",176],["miklpro.com",176],["modapk.link",176],["ccurl.net",176],["linkpoi.me",176],["pewgame.com",176],["haonguyen.top",176],["zshort.*",176],["crazyblog.in",176],["cutearn.net",176],["rshrt.com",176],["filezipa.com",176],["dz-linkk.com",176],["upfiles.*",176],["theblissempire.com",176],["finanzas-vida.com",176],["adurly.cc",176],["paid4.link",176],["link.asiaon.top",176],["go.gets4link.com",176],["linkfly.*",176],["beingtek.com",176],["shorturl.unityassets4free.com",176],["disheye.com",176],["techymedies.com",176],["techysuccess.com",176],["za.gl",[176,276]],["bblink.com",176],["myad.biz",176],["swzz.xyz",176],["vevioz.com",176],["charexempire.com",176],["clk.asia",176],["sturls.com",176],["myshrinker.com",176],["snowurl.com",[176,340]],["wplink.*",176],["rocklink.in",176],["techgeek.digital",176],["download3s.net",176],["shortx.net",176],["tlin.me",176],["bestcash2020.com",176],["adslink.pw",176],["novelssites.com",176],["faucetcrypto.net",176],["trxking.xyz",176],["weadown.com",176],["m.bloggingguidance.com",176],["link.codevn.net",176],["link4rev.site",176],["c2g.at",176],["bitcosite.com",[176,554]],["cryptosh.pro",176],["windowslite.net",[176,340]],["viewfr.com",176],["cl1ca.com",176],["4br.me",176],["fir3.net",176],["seulink.*",176],["encurtalink.*",176],["kiddyshort.com",176],["watchmygf.me",[177,201]],["camwhores.*",[177,187,226,227,228]],["camwhorez.tv",[177,187,226,227]],["cambay.tv",[177,208,226,253,255,256,257,258]],["fpo.xxx",[177,208]],["sexemix.com",177],["heavyfetish.com",[177,730]],["thotcity.su",177],["viralxxxporn.com",[177,391]],["tube8.*",[178,179]],["you-porn.com",179],["youporn.*",179],["youporngay.com",179],["youpornru.com",179],["redtube.*",179],["9908ww.com",179],["adelaidepawnbroker.com",179],["bztube.com",179],["hotovs.com",179],["insuredhome.org",179],["nudegista.com",179],["pornluck.com",179],["vidd.se",179],["pornhub.*",[179,313]],["pornhub.com",179],["pornerbros.com",180],["freep.com",180],["porn.com",181],["tune.pk",182],["noticias.gospelmais.com.br",183],["techperiod.com",183],["viki.com",[184,185]],["watch-series.*",186],["watchseries.*",186],["vev.*",186],["vidop.*",186],["vidup.*",186],["sleazyneasy.com",[187,188,189]],["smutr.com",[187,320]],["tktube.com",187],["yourporngod.com",[187,188]],["javbangers.com",[187,448]],["camfox.com",187],["camthots.tv",[187,253]],["shegotass.info",187],["amateur8.com",187],["bigtitslust.com",187],["ebony8.com",187],["freeporn8.com",187],["lesbian8.com",187],["maturetubehere.com",187],["sortporn.com",187],["motherporno.com",[187,188,208,255]],["theporngod.com",[187,188]],["watchdirty.to",[187,227,228,256]],["pornsocket.com",190],["luxuretv.com",191],["porndig.com",[192,193]],["webcheats.com.br",194],["ceesty.com",[195,196]],["gestyy.com",[195,196]],["corneey.com",196],["destyy.com",196],["festyy.com",196],["sh.st",196],["mitaku.net",196],["angrybirdsnest.com",197],["zrozz.com",197],["clix4btc.com",197],["4tests.com",197],["goltelevision.com",197],["news-und-nachrichten.de",197],["laradiobbs.net",197],["urlaubspartner.net",197],["produktion.de",197],["cinemaxxl.de",197],["bladesalvador.com",197],["tempr.email",197],["cshort.org",197],["friendproject.net",197],["covrhub.com",197],["katfile.com",[197,622]],["trust.zone",197],["business-standard.com",197],["planetsuzy.org",198],["empflix.com",199],["xmovies8.*",200],["masteranime.tv",200],["0123movies.*",200],["gostream.*",200],["gomovies.*",200],["transparentcalifornia.com",201],["deepbrid.com",202],["webnovel.com",203],["streamwish.*",[204,205]],["oneupload.to",205],["wishfast.top",205],["rubystm.com",205],["rubyvid.com",205],["rubyvidhub.com",205],["stmruby.com",205],["streamruby.com",205],["schwaebische.de",206],["8tracks.com",207],["3movs.com",208],["bravoerotica.net",[208,255]],["youx.xxx",208],["camclips.tv",[208,320]],["xtits.*",[208,255]],["camflow.tv",[208,255,256,294,391]],["camhoes.tv",[208,253,255,256,294,391]],["xmegadrive.com",208],["xxxymovies.com",208],["xxxshake.com",208],["gayck.com",208],["xhand.com",[208,255]],["analdin.com",[208,255]],["revealname.com",209],["golfchannel.com",210],["stream.nbcsports.com",210],["mathdf.com",210],["gamcore.com",211],["porcore.com",211],["porngames.tv",211],["69games.xxx",211],["javmix.app",211],["haaretz.co.il",212],["haaretz.com",212],["hungama.com",212],["a-o.ninja",212],["anime-odcinki.pl",212],["shortgoo.blogspot.com",212],["tonanmedia.my.id",[212,574]],["yurasu.xyz",212],["isekaipalace.com",212],["plyjam.*",[213,214]],["ennovelas.com",[214,218]],["foxsports.com.au",215],["canberratimes.com.au",215],["thesimsresource.com",216],["fxporn69.*",217],["vipbox.*",218],["viprow.*",218],["ctrl.blog",219],["sportlife.es",220],["finofilipino.org",221],["desbloqueador.*",222],["xberuang.*",223],["teknorizen.*",223],["mysflink.blogspot.com",223],["ashemaletube.*",224],["paktech2.com",224],["assia.tv",225],["assia4.com",225],["cwtvembeds.com",[227,254]],["camlovers.tv",227],["porntn.com",227],["pornissimo.org",227],["sexcams-24.com",[227,256]],["watchporn.to",[227,256]],["camwhorez.video",227],["footstockings.com",[227,228,256]],["xmateur.com",[227,228,256]],["multi.xxx",228],["weatherx.co.in",[229,230]],["sunbtc.space",229],["subtorrents.*",231],["subtorrents1.*",231],["newpelis.*",231],["pelix.*",231],["allcalidad.*",231],["infomaniakos.*",231],["ojogos.com.br",232],["powforums.com",233],["supforums.com",233],["studybullet.com",233],["usgamer.net",234],["recordonline.com",234],["freebitcoin.win",235],["e-monsite.com",235],["coindice.win",235],["freiepresse.de",236],["investing.com",237],["tornadomovies.*",238],["mp3fiber.com",239],["chicoer.com",240],["dailybreeze.com",240],["dailybulletin.com",240],["dailynews.com",240],["delcotimes.com",240],["eastbaytimes.com",240],["macombdaily.com",240],["ocregister.com",240],["pasadenastarnews.com",240],["pe.com",240],["presstelegram.com",240],["redlandsdailyfacts.com",240],["reviewjournal.com",240],["santacruzsentinel.com",240],["saratogian.com",240],["sentinelandenterprise.com",240],["sgvtribune.com",240],["tampabay.com",240],["times-standard.com",240],["theoaklandpress.com",240],["trentonian.com",240],["twincities.com",240],["whittierdailynews.com",240],["bostonherald.com",240],["dailycamera.com",240],["sbsun.com",240],["dailydemocrat.com",240],["montereyherald.com",240],["orovillemr.com",240],["record-bee.com",240],["redbluffdailynews.com",240],["reporterherald.com",240],["thereporter.com",240],["timescall.com",240],["timesheraldonline.com",240],["ukiahdailyjournal.com",240],["dailylocal.com",240],["mercurynews.com",240],["suedkurier.de",241],["anysex.com",243],["icdrama.*",244],["mangasail.*",244],["pornve.com",245],["file4go.*",246],["coolrom.com.au",246],["marie-claire.es",247],["gamezhero.com",247],["flashgirlgames.com",247],["onlinesudoku.games",247],["mpg.football",247],["sssam.com",247],["globalnews.ca",248],["drinksmixer.com",249],["leitesculinaria.com",249],["fupa.net",250],["browardpalmbeach.com",251],["dallasobserver.com",251],["houstonpress.com",251],["miaminewtimes.com",251],["phoenixnewtimes.com",251],["westword.com",251],["nowtv.com.tr",252],["caminspector.net",253],["camwhoreshd.com",253],["camgoddess.tv",253],["gay4porn.com",255],["mypornhere.com",255],["mangovideo.*",256],["love4porn.com",256],["thotvids.com",256],["watchmdh.to",256],["celebwhore.com",256],["cluset.com",256],["sexlist.tv",256],["4kporn.xxx",256],["xhomealone.com",256],["lusttaboo.com",[256,518]],["hentai-moon.com",256],["camhub.cc",[256,681]],["mediapason.it",259],["linkspaid.com",259],["tuotromedico.com",259],["neoteo.com",259],["phoneswiki.com",259],["celebmix.com",259],["myneobuxportal.com",259],["oyungibi.com",259],["25yearslatersite.com",259],["jeshoots.com",260],["techhx.com",260],["karanapk.com",260],["flashplayer.fullstacks.net",262],["cloudapps.herokuapp.com",262],["youfiles.herokuapp.com",262],["texteditor.nsspot.net",262],["temp-mail.org",263],["asianclub.*",264],["javhdporn.net",264],["vidmoly.to",265],["comnuan.com",266],["veedi.com",267],["battleboats.io",267],["anitube.*",268],["fruitlab.com",268],["haddoz.net",268],["streamingcommunity.*",268],["garoetpos.com",268],["stiletv.it",269],["mixdrop.*",270],["hqtv.biz",271],["liveuamap.com",272],["audycje.tokfm.pl",273],["shush.se",274],["allkpop.com",275],["empire-anime.*",[276,569,570,571,572,573]],["empire-streaming.*",[276,569,570,571]],["empire-anime.com",[276,569,570,571]],["empire-streamz.fr",[276,569,570,571]],["empire-stream.*",[276,569,570,571]],["pickcrackpasswords.blogspot.com",277],["kfrfansub.com",278],["thuglink.com",278],["voipreview.org",278],["illicoporno.com",279],["lavoixdux.com",279],["tonpornodujour.com",279],["jacquieetmichel.net",279],["swame.com",279],["vosfemmes.com",279],["voyeurfrance.net",279],["jacquieetmicheltv.net",[279,629,630]],["pogo.com",280],["cloudvideo.tv",281],["legionjuegos.org",282],["legionpeliculas.org",282],["legionprogramas.org",282],["16honeys.com",283],["elespanol.com",284],["remodelista.com",285],["audiofanzine.com",289],["uploadev.*",290],["developerinsider.co",291],["thehindu.com",292],["cambro.tv",[293,294]],["boobsradar.com",[294,391,700]],["nibelungen-kurier.de",295],["adfoc.us",296],["tackledsoul.com",296],["adrino1.bonloan.xyz",296],["vi-music.app",296],["instanders.app",296],["rokni.xyz",296],["keedabankingnews.com",296],["tea-coffee.net",296],["spatsify.com",296],["newedutopics.com",296],["getviralreach.in",296],["edukaroo.com",296],["funkeypagali.com",296],["careersides.com",296],["nayisahara.com",296],["wikifilmia.com",296],["infinityskull.com",296],["viewmyknowledge.com",296],["iisfvirtual.in",296],["starxinvestor.com",296],["jkssbalerts.com",296],["sahlmarketing.net",296],["filmypoints.in",296],["fitnessholic.net",296],["moderngyan.com",296],["sattakingcharts.in",296],["bankshiksha.in",296],["earn.mpscstudyhub.com",296],["earn.quotesopia.com",296],["money.quotesopia.com",296],["best-mobilegames.com",296],["learn.moderngyan.com",296],["bharatsarkarijobalert.com",296],["quotesopia.com",296],["creditsgoal.com",296],["bgmi32bitapk.in",296],["techacode.com",296],["trickms.com",296],["ielts-isa.edu.vn",296],["loan.punjabworks.com",296],["sptfy.be",296],["mcafee-com.com",[296,372]],["pianetamountainbike.it",297],["barchart.com",298],["modelisme.com",299],["parasportontario.ca",299],["prescottenews.com",299],["nrj-play.fr",300],["hackingwithreact.com",301],["gutekueche.at",302],["peekvids.com",303],["playvids.com",303],["pornflip.com",303],["redensarten-index.de",304],["vw-page.com",305],["viz.com",[306,307]],["0rechner.de",308],["configspc.com",309],["xopenload.me",309],["uptobox.com",309],["uptostream.com",309],["japgay.com",310],["mega-debrid.eu",311],["dreamdth.com",312],["diaridegirona.cat",314],["diariodeibiza.es",314],["diariodemallorca.es",314],["diarioinformacion.com",314],["eldia.es",314],["emporda.info",314],["farodevigo.es",314],["laopinioncoruna.es",314],["laopiniondemalaga.es",314],["laopiniondemurcia.es",314],["laopiniondezamora.es",314],["laprovincia.es",314],["levante-emv.com",314],["mallorcazeitung.es",314],["regio7.cat",314],["superdeporte.es",314],["playpaste.com",315],["cnbc.com",316],["firefaucet.win",317],["74k.io",[318,319]],["cloudwish.xyz",319],["gradehgplus.com",319],["javindo.site",319],["javindosub.site",319],["kamehaus.net",319],["movearnpre.com",319],["arabshentai.com>>",319],["javdo.cc>>",319],["javenglish.cc>>",319],["javhd.*>>",319],["javhdz.*>>",319],["roshy.tv>>",319],["sextb.*>>",319],["fullhdxxx.com",321],["pornclassic.tube",322],["tubepornclassic.com",322],["etonline.com",323],["creatur.io",323],["lookcam.*",323],["drphil.com",323],["urbanmilwaukee.com",323],["ontiva.com",323],["hideandseek.world",323],["myabandonware.com",323],["kendam.com",323],["wttw.com",323],["synonyms.com",323],["definitions.net",323],["hostmath.com",323],["camvideoshub.com",323],["minhaconexao.com.br",323],["home-made-videos.com",325],["amateur-couples.com",325],["slutdump.com",325],["artificialnudes.com",325],["bdsmkingdom.xyz",325],["cosplaynsfw.xyz",325],["crazytoys.xyz",325],["hardcorelesbian.xyz",325],["pornfeet.xyz",325],["pornahegao.xyz",325],["sexontheboat.xyz",325],["dpstream.*",326],["produsat.com",327],["bluemediafiles.*",328],["12thman.com",329],["acusports.com",329],["atlantic10.com",329],["auburntigers.com",329],["baylorbears.com",329],["bceagles.com",329],["bgsufalcons.com",329],["big12sports.com",329],["bigten.org",329],["bradleybraves.com",329],["butlersports.com",329],["cmumavericks.com",329],["conferenceusa.com",329],["cyclones.com",329],["dartmouthsports.com",329],["daytonflyers.com",329],["dbupatriots.com",329],["dbusports.com",329],["denverpioneers.com",329],["fduknights.com",329],["fgcuathletics.com",329],["fightinghawks.com",329],["fightingillini.com",329],["floridagators.com",329],["friars.com",329],["friscofighters.com",329],["gamecocksonline.com",329],["goarmywestpoint.com",329],["gobison.com",329],["goblueraiders.com",329],["gobobcats.com",329],["gocards.com",329],["gocreighton.com",329],["godeacs.com",329],["goexplorers.com",329],["goetbutigers.com",329],["gofrogs.com",329],["gogriffs.com",329],["gogriz.com",329],["golobos.com",329],["gomarquette.com",329],["gopack.com",329],["gophersports.com",329],["goprincetontigers.com",329],["gopsusports.com",329],["goracers.com",329],["goshockers.com",329],["goterriers.com",329],["gotigersgo.com",329],["gousfbulls.com",329],["govandals.com",329],["gowyo.com",329],["goxavier.com",329],["gozags.com",329],["gozips.com",329],["griffinathletics.com",329],["guhoyas.com",329],["gwusports.com",329],["hailstate.com",329],["hamptonpirates.com",329],["hawaiiathletics.com",329],["hokiesports.com",329],["huskers.com",329],["icgaels.com",329],["iuhoosiers.com",329],["jsugamecocksports.com",329],["longbeachstate.com",329],["loyolaramblers.com",329],["lrtrojans.com",329],["lsusports.net",329],["morrisvillemustangs.com",329],["msuspartans.com",329],["muleriderathletics.com",329],["mutigers.com",329],["navysports.com",329],["nevadawolfpack.com",329],["niuhuskies.com",329],["nkunorse.com",329],["nuhuskies.com",329],["nusports.com",329],["okstate.com",329],["olemisssports.com",329],["omavs.com",329],["ovcsports.com",329],["owlsports.com",329],["purduesports.com",329],["redstormsports.com",329],["richmondspiders.com",329],["sfajacks.com",329],["shupirates.com",329],["siusalukis.com",329],["smcgaels.com",329],["smumustangs.com",329],["soconsports.com",329],["soonersports.com",329],["themw.com",329],["tulsahurricane.com",329],["txst.com",329],["txstatebobcats.com",329],["ubbulls.com",329],["ucfknights.com",329],["ucirvinesports.com",329],["uconnhuskies.com",329],["uhcougars.com",329],["uicflames.com",329],["umterps.com",329],["uncwsports.com",329],["unipanthers.com",329],["unlvrebels.com",329],["uoflsports.com",329],["usdtoreros.com",329],["utahstateaggies.com",329],["utepathletics.com",329],["utrockets.com",329],["uvmathletics.com",329],["uwbadgers.com",329],["villanova.com",329],["wkusports.com",329],["wmubroncos.com",329],["woffordterriers.com",329],["1pack1goal.com",329],["bcuathletics.com",329],["bubraves.com",329],["goblackbears.com",329],["golightsgo.com",329],["gomcpanthers.com",329],["goutsa.com",329],["mercerbears.com",329],["pirateblue.com",329],["pirateblue.net",329],["pirateblue.org",329],["quinnipiacbobcats.com",329],["towsontigers.com",329],["tribeathletics.com",329],["tribeclub.com",329],["utepminermaniacs.com",329],["utepminers.com",329],["wkutickets.com",329],["aopathletics.org",329],["atlantichockeyonline.com",329],["bigsouthnetwork.com",329],["bigsouthsports.com",329],["chawomenshockey.com",329],["dbupatriots.org",329],["drakerelays.org",329],["ecac.org",329],["ecacsports.com",329],["emueagles.com",329],["emugameday.com",329],["gculopes.com",329],["godrakebulldog.com",329],["godrakebulldogs.com",329],["godrakebulldogs.net",329],["goeags.com",329],["goislander.com",329],["goislanders.com",329],["gojacks.com",329],["gomacsports.com",329],["gseagles.com",329],["hubison.com",329],["iowaconference.com",329],["ksuowls.com",329],["lonestarconference.org",329],["mascac.org",329],["midwestconference.org",329],["mountaineast.org",329],["niu-pack.com",329],["nulakers.ca",329],["oswegolakers.com",329],["ovcdigitalnetwork.com",329],["pacersports.com",329],["rmacsports.org",329],["rollrivers.com",329],["samfordsports.com",329],["uncpbraves.com",329],["usfdons.com",329],["wiacsports.com",329],["alaskananooks.com",329],["broncathleticfund.com",329],["cameronaggies.com",329],["columbiacougars.com",329],["etownbluejays.com",329],["gobadgers.ca",329],["golancers.ca",329],["gometrostate.com",329],["gothunderbirds.ca",329],["kentstatesports.com",329],["lehighsports.com",329],["lopers.com",329],["lycoathletics.com",329],["lycomingathletics.com",329],["maraudersports.com",329],["mauiinvitational.com",329],["msumavericks.com",329],["nauathletics.com",329],["nueagles.com",329],["nwusports.com",329],["oceanbreezenyc.org",329],["patriotathleticfund.com",329],["pittband.com",329],["principiaathletics.com",329],["roadrunnersathletics.com",329],["sidearmsocial.com",329],["snhupenmen.com",329],["stablerarena.com",329],["stoutbluedevils.com",329],["uwlathletics.com",329],["yumacs.com",329],["collegefootballplayoff.com",329],["csurams.com",329],["cubuffs.com",329],["gobearcats.com",329],["gohuskies.com",329],["mgoblue.com",329],["osubeavers.com",329],["pittsburghpanthers.com",329],["rolltide.com",329],["texassports.com",329],["thesundevils.com",329],["uclabruins.com",329],["wvuathletics.com",329],["wvusports.com",329],["arizonawildcats.com",329],["calbears.com",329],["cuse.com",329],["georgiadogs.com",329],["goducks.com",329],["goheels.com",329],["gostanford.com",329],["insidekstatesports.com",329],["insidekstatesports.info",329],["insidekstatesports.net",329],["insidekstatesports.org",329],["k-stateathletics.com",329],["k-statefootball.net",329],["k-statefootball.org",329],["k-statesports.com",329],["k-statesports.net",329],["k-statesports.org",329],["k-statewomenshoops.com",329],["k-statewomenshoops.net",329],["k-statewomenshoops.org",329],["kstateathletics.com",329],["kstatefootball.net",329],["kstatefootball.org",329],["kstatesports.com",329],["kstatewomenshoops.com",329],["kstatewomenshoops.net",329],["kstatewomenshoops.org",329],["ksuathletics.com",329],["ksusports.com",329],["scarletknights.com",329],["showdownforrelief.com",329],["syracusecrunch.com",329],["texastech.com",329],["theacc.com",329],["ukathletics.com",329],["usctrojans.com",329],["utahutes.com",329],["utsports.com",329],["wsucougars.com",329],["vidlii.com",[329,355]],["tricksplit.io",329],["fangraphs.com",330],["stern.de",331],["geo.de",331],["brigitte.de",331],["schoener-wohnen.de",331],["welt.de",332],["tvspielfilm.de",[333,334,335,336]],["tvtoday.de",[333,334,335,336]],["chip.de",[333,334,335,336]],["focus.de",[333,334,335,336]],["fitforfun.de",[333,334,335,336]],["n-tv.de",337],["player.rtl2.de",338],["planetaminecraft.com",339],["cravesandflames.com",340],["codesnse.com",340],["flyad.vip",340],["lapresse.ca",341],["kolyoom.com",342],["ilovephd.com",342],["negumo.com",343],["games.wkb.jp",[344,345]],["kenshi.fandom.com",347],["hausbau-forum.de",348],["homeairquality.org",348],["faucettronn.click",348],["call4cloud.nl",348],["fake-it.ws",349],["laksa19.github.io",350],["1shortlink.com",351],["u-s-news.com",352],["luscious.net",353],["makemoneywithurl.com",354],["junkyponk.com",354],["healthfirstweb.com",354],["vocalley.com",354],["yogablogfit.com",354],["howifx.com",[354,539]],["en.financerites.com",354],["mythvista.com",354],["livenewsflix.com",354],["cureclues.com",354],["apekite.com",354],["enit.in",354],["iammagnus.com",355],["dailyvideoreports.net",355],["unityassets4free.com",355],["docer.*",356],["resetoff.pl",356],["sexodi.com",356],["cdn77.org",357],["momxxxsex.com",358],["penisbuyutucum.net",358],["ujszo.com",359],["newsmax.com",360],["nadidetarifler.com",361],["siz.tv",361],["suzylu.co.uk",[362,363]],["onworks.net",364],["yabiladi.com",364],["downloadsoft.net",365],["newsobserver.com",366],["arkadiumhosted.com",366],["testlanguages.com",367],["newsinlevels.com",367],["videosinlevels.com",367],["procinehub.com",368],["bookmystrip.com",368],["imagereviser.com",369],["pubgaimassist.com",370],["gyanitheme.com",370],["tech.trendingword.com",370],["blog.potterworld.co",370],["hipsonyc.com",370],["tech.pubghighdamage.com",370],["blog.itijobalert.in",370],["techkhulasha.com",370],["jiocinema.com",370],["rapid-cloud.co",370],["uploadmall.com",370],["4funbox.com",371],["nephobox.com",371],["1024tera.com",371],["terabox.*",371],["starkroboticsfrc.com",372],["sinonimos.de",372],["antonimos.de",372],["quesignifi.ca",372],["tiktokrealtime.com",372],["tiktokcounter.net",372],["tpayr.xyz",372],["poqzn.xyz",372],["ashrfd.xyz",372],["rezsx.xyz",372],["tryzt.xyz",372],["ashrff.xyz",372],["rezst.xyz",372],["dawenet.com",372],["erzar.xyz",372],["waezm.xyz",372],["waezg.xyz",372],["blackwoodacademy.org",372],["cryptednews.space",372],["vivuq.com",372],["swgop.com",372],["vbnmll.com",372],["telcoinfo.online",372],["dshytb.com",372],["btcbitco.in",[372,373]],["btcsatoshi.net",372],["cempakajaya.com",372],["crypto4yu.com",372],["readbitcoin.org",372],["wiour.com",372],["finish.addurl.biz",372],["aiimgvlog.fun",[372,376]],["laweducationinfo.com",372],["savemoneyinfo.com",372],["worldaffairinfo.com",372],["godstoryinfo.com",372],["successstoryinfo.com",372],["cxissuegk.com",372],["learnmarketinfo.com",372],["bhugolinfo.com",372],["armypowerinfo.com",372],["rsgamer.app",372],["phonereviewinfo.com",372],["makeincomeinfo.com",372],["gknutshell.com",372],["vichitrainfo.com",372],["workproductivityinfo.com",372],["dopomininfo.com",372],["hostingdetailer.com",372],["fitnesssguide.com",372],["tradingfact4u.com",372],["cryptofactss.com",372],["softwaredetail.com",372],["artoffocas.com",372],["insurancesfact.com",372],["travellingdetail.com",372],["advertisingexcel.com",372],["allcryptoz.net",372],["batmanfactor.com",372],["beautifulfashionnailart.com",372],["crewbase.net",372],["documentaryplanet.xyz",372],["crewus.net",372],["gametechreviewer.com",372],["midebalonu.net",372],["misterio.ro",372],["phineypet.com",372],["seory.xyz",372],["shinbhu.net",372],["shinchu.net",372],["substitutefor.com",372],["talkforfitness.com",372],["thefitbrit.co.uk",372],["thumb8.net",372],["thumb9.net",372],["topcryptoz.net",372],["uniqueten.net",372],["ultraten.net",372],["exactpay.online",372],["quins.us",372],["kiddyearner.com",372],["bildirim.*",375],["arahdrive.com",376],["appsbull.com",377],["diudemy.com",377],["maqal360.com",[377,378,379]],["lifesurance.info",380],["akcartoons.in",381],["cybercityhelp.in",381],["dl.apkmoddone.com",382],["phongroblox.com",382],["fuckingfast.net",383],["buzzheavier.com",383],["tickhosting.com",384],["in91vip.win",385],["datavaults.co",386],["t-online.de",388],["upornia.*",[389,390]],["bobs-tube.com",391],["pornohirsch.net",392],["bembed.net",393],["embedv.net",393],["javguard.club",393],["listeamed.net",393],["v6embed.xyz",393],["vembed.*",393],["vid-guard.com",393],["vinomo.xyz",393],["nekolink.site",[394,395]],["141jav.com",396],["aagmaal.com",396],["camcam.cc",396],["javneon.tv",396],["javsaga.ninja",396],["pixsera.net",397],["jnews5.com",398],["pc-builds.com",399],["reuters.com",399],["today.com",399],["videogamer.com",399],["wrestlinginc.com",399],["azcentral.com",400],["greenbaypressgazette.com",400],["palmbeachpost.com",400],["usatoday.com",[400,401]],["ydr.com",400],["247sports.com",402],["indiatimes.com",403],["netzwelt.de",404],["filmibeat.com",405],["goodreturns.in",405],["mykhel.com",405],["daemonanime.net",405],["luckydice.net",405],["adarima.org",405],["weatherwx.com",405],["sattaguess.com",405],["winshell.de",405],["rosasidan.ws",405],["upiapi.in",405],["networkhint.com",405],["thichcode.net",405],["texturecan.com",405],["tikmate.app",[405,612]],["arcaxbydz.id",405],["quotesshine.com",405],["arcade.buzzrtv.com",406],["arcade.dailygazette.com",406],["arcade.lemonde.fr",406],["arena.gamesforthebrain.com",406],["bestpuzzlesandgames.com",406],["cointiply.arkadiumarena.com",406],["gamelab.com",406],["games.abqjournal.com",406],["games.amny.com",406],["games.bellinghamherald.com",406],["games.besthealthmag.ca",406],["games.bnd.com",406],["games.boston.com",406],["games.bostonglobe.com",406],["games.bradenton.com",406],["games.centredaily.com",406],["games.charlottegames.cnhinews.com",406],["games.crosswordgiant.com",406],["games.dailymail.co.uk",406],["games.dallasnews.com",406],["games.daytondailynews.com",406],["games.denverpost.com",406],["games.everythingzoomer.com",406],["games.fresnobee.com",406],["games.gameshownetwork.com",406],["games.get.tv",406],["games.greatergood.com",406],["games.heraldonline.com",406],["games.heraldsun.com",406],["games.idahostatesman.com",406],["games.insp.com",406],["games.islandpacket.com",406],["games.journal-news.com",406],["games.kansas.com",406],["games.kansascity.com",406],["games.kentucky.com",406],["games.lancasteronline.com",406],["games.ledger-enquirer.com",406],["games.macon.com",406],["games.mashable.com",406],["games.mercedsunstar.com",406],["games.metro.us",406],["games.metv.com",406],["games.miamiherald.com",406],["games.modbee.com",406],["games.moviestvnetwork.com",406],["games.myrtlebeachonline.com",406],["games.games.newsgames.parade.com",406],["games.pressdemocrat.com",406],["games.puzzlebaron.com",406],["games.puzzler.com",406],["games.puzzles.ca",406],["games.qns.com",406],["games.readersdigest.ca",406],["games.sacbee.com",406],["games.sanluisobispo.com",406],["games.sixtyandme.com",406],["games.sltrib.com",406],["games.springfieldnewssun.com",406],["games.star-telegram.com",406],["games.startribune.com",406],["games.sunherald.com",406],["games.theadvocate.com",406],["games.thenewstribune.com",406],["games.theolympian.com",406],["games.theportugalnews.com",406],["games.thestar.com",406],["games.thestate.com",406],["games.tri-cityherald.com",406],["games.triviatoday.com",406],["games.usnews.com",406],["games.word.tips",406],["games.wordgenius.com",406],["games.wtop.com",406],["jeux.meteocity.com",406],["juegos.as.com",406],["juegos.elnuevoherald.com",406],["juegos.elpais.com",406],["philly.arkadiumarena.com",406],["play.dictionary.com",406],["puzzles.bestforpuzzles.com",406],["puzzles.centralmaine.com",406],["puzzles.crosswordsolver.org",406],["puzzles.independent.co.uk",406],["puzzles.nola.com",406],["puzzles.pressherald.com",406],["puzzles.standard.co.uk",406],["puzzles.sunjournal.com",406],["arkadium.com",407],["abysscdn.com",[408,409]],["turtleviplay.xyz",410],["lared.cl",411],["atozmath.com",[411,433,434,435,436,437,438]],["hdfilmizlesen.com",412],["arcai.com",413],["my-code4you.blogspot.com",414],["flickr.com",415],["firefile.cc",416],["pestleanalysis.com",416],["kochamjp.pl",416],["tutorialforlinux.com",416],["whatsaero.com",416],["animeblkom.net",[416,430]],["blkom.com",416],["globes.co.il",[417,418]],["jardiner-malin.fr",419],["tw-calc.net",420],["ohmybrush.com",421],["talkceltic.net",422],["mentalfloss.com",423],["uprafa.com",424],["cube365.net",425],["wwwfotografgotlin.blogspot.com",426],["freelistenonline.com",426],["badassdownloader.com",427],["quickporn.net",428],["yellowbridge.com",429],["aosmark.com",431],["ctrlv.*",432],["newyorker.com",439],["brighteon.com",[440,441]],["more.tv",442],["video1tube.com",443],["alohatube.xyz",443],["4players.de",444],["onlinesoccermanager.com",444],["fshost.me",445],["link.cgtips.org",446],["hentaicloud.com",447],["paperzonevn.com",449],["9jarock.org",450],["fzmovies.info",450],["fztvseries.ng",450],["netnaijas.com",450],["hentaienglish.com",451],["hentaiporno.xxx",451],["venge.io",[452,453]],["btcbux.io",454],["its.porn",[455,456]],["atv.at",457],["2ndrun.tv",458],["rackusreads.com",458],["teachmemicro.com",458],["willcycle.com",458],["kusonime.com",[459,460]],["123movieshd.*",461],["imgur.com",[462,463,731]],["hentai-party.com",464],["hentaicomics.pro",464],["uproxy.*",465],["animesa.*",466],["subtitle.one",467],["subtitleone.cc",467],["mysexgames.com",468],["ancient-origins.*",469],["cinecalidad.*",[470,471]],["xnxx.com",472],["xvideos.*",472],["gdr-online.com",473],["mmm.dk",474],["iqiyi.com",[475,476,602]],["m.iqiyi.com",477],["nbcolympics.com",478],["apkhex.com",479],["indiansexstories2.net",480],["issstories.xyz",480],["1340kbbr.com",481],["gorgeradio.com",481],["kduk.com",481],["kedoam.com",481],["kejoam.com",481],["kelaam.com",481],["khsn1230.com",481],["kjmx.rocks",481],["kloo.com",481],["klooam.com",481],["klykradio.com",481],["kmed.com",481],["kmnt.com",481],["kool991.com",481],["kpnw.com",481],["kppk983.com",481],["krktcountry.com",481],["ktee.com",481],["kwro.com",481],["kxbxfm.com",481],["thevalley.fm",481],["quizlet.com",482],["dsocker1234.blogspot.com",483],["schoolcheats.net",[484,485]],["mgnet.xyz",486],["designtagebuch.de",487],["pixroute.com",488],["uploady.io",489],["calculator-online.net",490],["porngames.club",491],["sexgames.xxx",491],["111.90.159.132",492],["mobile-tracker-free.com",493],["pfps.gg",494],["social-unlock.com",495],["superpsx.com",496],["ninja.io",497],["sourceforge.net",498],["samfirms.com",499],["rapelust.com",500],["vtube.to",500],["desitelugusex.com",500],["dvdplay.*",500],["xvideos-downloader.net",500],["xxxvideotube.net",500],["sdefx.cloud",500],["nozomi.la",500],["banned.video",501],["madmaxworld.tv",501],["androidpolice.com",501],["babygaga.com",501],["backyardboss.net",501],["carbuzz.com",501],["cbr.com",501],["collider.com",501],["dualshockers.com",501],["footballfancast.com",501],["footballleagueworld.co.uk",501],["gamerant.com",501],["givemesport.com",501],["hardcoregamer.com",501],["hotcars.com",501],["howtogeek.com",501],["makeuseof.com",501],["moms.com",501],["movieweb.com",501],["pocket-lint.com",501],["pocketnow.com",501],["screenrant.com",501],["simpleflying.com",501],["thegamer.com",501],["therichest.com",501],["thesportster.com",501],["thethings.com",501],["thetravel.com",501],["topspeed.com",501],["xda-developers.com",501],["huffpost.com",502],["ingles.com",503],["spanishdict.com",503],["surfline.com",[504,505]],["play.tv3.ee",506],["play.tv3.lt",506],["play.tv3.lv",[506,507]],["tv3play.skaties.lv",506],["bulbagarden.net",508],["hollywoodlife.com",509],["mat6tube.com",510],["hotabis.com",511],["root-nation.com",511],["italpress.com",511],["airsoftmilsimnews.com",511],["artribune.com",511],["newtumbl.com",512],["apkmaven.*",513],["aruble.net",514],["nevcoins.club",515],["mail.com",516],["gmx.*",517],["mangakita.id",519],["avpgalaxy.net",520],["panda-novel.com",521],["lightsnovel.com",521],["eaglesnovel.com",521],["pandasnovel.com",521],["ewrc-results.com",522],["kizi.com",523],["cyberscoop.com",524],["fedscoop.com",524],["canale.live",525],["jeep-cj.com",526],["sponsorhunter.com",527],["cloudcomputingtopics.net",528],["likecs.com",529],["tiscali.it",530],["linkspy.cc",531],["adshnk.com",532],["chattanoogan.com",533],["adsy.pw",534],["playstore.pw",534],["windowspro.de",535],["tvtv.ca",536],["tvtv.us",536],["mydaddy.cc",537],["roadtrippin.fr",538],["vavada5com.com",539],["anyporn.com",[540,557]],["bravoporn.com",540],["bravoteens.com",540],["crocotube.com",540],["hellmoms.com",540],["hellporno.com",540],["sex3.com",540],["tubewolf.com",540],["xbabe.com",540],["xcum.com",540],["zedporn.com",540],["imagetotext.info",541],["infokik.com",542],["freepik.com",543],["ddwloclawek.pl",[544,545]],["www.seznam.cz",546],["deezer.com",547],["my-subs.co",548],["plaion.com",549],["slideshare.net",[550,551]],["ustreasuryyieldcurve.com",552],["businesssoftwarehere.com",553],["goo.st",553],["freevpshere.com",553],["softwaresolutionshere.com",553],["gamereactor.*",555],["madoohd.com",556],["doomovie-hd.*",556],["staige.tv",558],["androidadult.com",559],["streamvid.net",560],["watchtv24.com",561],["cellmapper.net",562],["medscape.com",563],["newscon.org",[564,565]],["wheelofgold.com",566],["drakecomic.*",566],["app.blubank.com",567],["mobileweb.bankmellat.ir",567],["chat.nrj.fr",568],["chat.tchatche.com",[568,583]],["ccthesims.com",575],["chromeready.com",575],["dtbps3games.com",575],["illustratemagazine.com",575],["uknip.co.uk",575],["vod.pl",576],["megadrive-emulator.com",577],["tvhay.*",[578,579]],["moviesapi.club",580],["bestx.stream",580],["watchx.top",580],["digimanie.cz",581],["svethardware.cz",581],["srvy.ninja",582],["cnn.com",[584,585,586]],["news.bg",587],["edmdls.com",588],["freshremix.net",588],["scenedl.org",588],["trakt.tv",589],["client.falixnodes.net",[590,591]],["shroomers.app",592],["classicalradio.com",593],["di.fm",593],["jazzradio.com",593],["radiotunes.com",593],["rockradio.com",593],["zenradio.com",593],["getthit.com",594],["techedubyte.com",595],["soccerinhd.com",595],["movie-th.tv",596],["iwanttfc.com",597],["nutraingredients-asia.com",598],["nutraingredients-latam.com",598],["nutraingredients-usa.com",598],["nutraingredients.com",598],["ozulscansen.com",599],["nexusmods.com",600],["lookmovie.*",601],["lookmovie2.to",601],["biletomat.pl",603],["hextank.io",[604,605]],["filmizlehdfilm.com",[606,607,608,609]],["filmizletv.*",[606,607,608,609]],["fullfilmizle.cc",[606,607,608,609]],["gofilmizle.net",[606,607,608,609]],["cimanow.cc",610],["bgmiupdate.com.in",610],["freex2line.online",611],["btvplus.bg",613],["sagewater.com",614],["redlion.net",614],["filmweb.pl",615],["satdl.com",616],["vidstreaming.xyz",617],["everand.com",618],["myradioonline.pl",619],["cbs.com",620],["paramountplus.com",620],["colourxh.site",621],["fullxh.com",621],["galleryxh.site",621],["megaxh.com",621],["movingxh.world",621],["seexh.com",621],["unlockxh4.com",621],["valuexh.life",621],["xhaccess.com",621],["xhadult2.com",621],["xhadult3.com",621],["xhadult4.com",621],["xhadult5.com",621],["xhamster.*",621],["xhamster1.*",621],["xhamster10.*",621],["xhamster11.*",621],["xhamster12.*",621],["xhamster13.*",621],["xhamster14.*",621],["xhamster15.*",621],["xhamster16.*",621],["xhamster17.*",621],["xhamster18.*",621],["xhamster19.*",621],["xhamster20.*",621],["xhamster2.*",621],["xhamster3.*",621],["xhamster4.*",621],["xhamster42.*",621],["xhamster46.com",621],["xhamster5.*",621],["xhamster7.*",621],["xhamster8.*",621],["xhamsterporno.mx",621],["xhbig.com",621],["xhbranch5.com",621],["xhchannel.com",621],["xhdate.world",621],["xhlease.world",621],["xhmoon5.com",621],["xhofficial.com",621],["xhopen.com",621],["xhplanet1.com",621],["xhplanet2.com",621],["xhreal2.com",621],["xhreal3.com",621],["xhspot.com",621],["xhtotal.com",621],["xhtree.com",621],["xhvictory.com",621],["xhwebsite.com",621],["xhwebsite2.com",621],["xhwebsite5.com",621],["xhwide1.com",621],["xhwide2.com",621],["xhwide5.com",621],["file-upload.net",623],["acortalo.*",[624,625,626,627]],["acortar.*",[624,625,626,627]],["megadescarga.net",[624,625,626,627]],["megadescargas.net",[624,625,626,627]],["hentaihaven.xxx",628],["jacquieetmicheltv2.net",630],["a2zapk.*",631],["fcportables.com",[632,633]],["emurom.net",634],["freethesaurus.com",[635,636]],["thefreedictionary.com",[635,636]],["oeffentlicher-dienst.info",637],["im9.eu",[638,639]],["dcdlplayer8a06f4.xyz",640],["ultimate-guitar.com",641],["claimbits.net",642],["sexyscope.net",643],["kickassanime.*",644],["recherche-ebook.fr",645],["virtualdinerbot.com",645],["zonebourse.com",646],["pink-sluts.net",647],["andhrafriends.com",648],["benzinpreis.de",649],["defenseone.com",650],["govexec.com",650],["nextgov.com",650],["route-fifty.com",650],["sharing.wtf",651],["wetter3.de",652],["esportivos.fun",653],["cosmonova-broadcast.tv",654],["538.nl",655],["hartvannederland.nl",655],["kijk.nl",655],["shownieuws.nl",655],["vandaaginside.nl",655],["rock.porn",[656,657]],["videzz.net",[658,659]],["ezaudiobookforsoul.com",660],["club386.com",661],["decompiler.com",[662,663]],["littlebigsnake.com",664],["easyfun.gg",665],["smailpro.com",666],["ilgazzettino.it",667],["ilmessaggero.it",667],["3bmeteo.com",[668,669]],["mconverter.eu",670],["lover937.net",671],["10gb.vn",672],["pes6.es",673],["tactics.tools",[674,675]],["boundhub.com",676],["alocdnnetu.xyz",677],["reliabletv.me",678],["jakondo.ru",679],["appnee.com",679],["trueachievements.com",679],["truesteamachievements.com",679],["truetrophies.com",679],["filecrypt.*",680],["wired.com",682],["spankbang.*",[683,684,685,733,734]],["hulu.com",[686,687,688]],["hanime.tv",689],["nhentai.net",[690,691,692]],["pouvideo.*",693],["povvideo.*",693],["povw1deo.*",693],["povwideo.*",693],["powv1deo.*",693],["powvibeo.*",693],["powvideo.*",693],["powvldeo.*",693],["powcloud.org",694],["primevideo.com",695],["read.amazon.*",[695,712]],["anonymfile.com",696],["gofile.to",696],["dotycat.com",697],["rateyourmusic.com",698],["reporterpb.com.br",699],["blog-dnz.com",701],["18adultgames.com",702],["colnect.com",[703,704]],["adultgamesworld.com",705],["servustv.com",[706,707]],["reviewdiv.com",708],["parametric-architecture.com",709],["laurelberninteriors.com",[710,736]],["voiceofdenton.com",711],["concealednation.org",711],["askattest.com",713],["opensubtitles.com",714],["savefiles.com",715],["streamup.ws",716],["goodstream.one",717],["lecrabeinfo.net",718],["cerberusapp.com",719],["smashkarts.io",720],["beamng.wesupply.cx",721],["wowtv.de",[722,723]],["jsfiddle.net",[724,725]],["www.google.*",726],["tacobell.com",727],["zefoy.com",728],["cnet.com",729],["natgeotv.com",732],["globo.com",735],["wayfair.com",737]]);
const exceptionsMap = new Map([["cloudflare.com",[0]],["pingit.com",[176]],["loan.bgmi32bitapk.in",[296]],["lookmovie.studio",[601]]]);
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
