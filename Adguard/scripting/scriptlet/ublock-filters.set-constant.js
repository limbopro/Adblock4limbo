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
const argsList = [["console.clear","undefined"],["aclib.runInPagePush","{}","as","callback"],["aclib.runBanner","{}","as","function"],["aclib.runPop","throwFunc"],["aclib.runInterstitial","{}","as","function"],["aclib.runAutoTag","noopFunc"],["adBlockDetected","undefined"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["dvtag.getTargeting","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["googletag.cmd","{}"],["_aps","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["google.ima.settings.setDisableFlashAds","noopFunc"],["pa.privacy","{}"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505","{}"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["ga.sendGaEvent","noopFunc"],["adobe","{}"],["MT","{}"],["MT.track","noopFunc"],["ClickOmniPartner","noopFunc"],["adex","{}"],["adex.getAdexUser","noopFunc"],["Adkit","noopFunc"],["Object.prototype.shouldExpectGoogleCMP","false"],["apntag.refresh","noopFunc"],["pa.sendEvent","noopFunc"],["Munchkin","{}"],["Munchkin.init","noopFunc"],["ttd_dom_ready","noopFunc"],["ramp","undefined"],["appInfo.snowplow.trackSelfDescribingEvent","noopFunc"],["_vwo_code.init","noopFunc"],["adobePageView","noopFunc"],["dapTracker","{}"],["dapTracker.track","noopFunc"],["newrelic","{}"],["newrelic.setCustomAttribute","noopFunc"],["adobeDataLayer","{}"],["adobeDataLayer.push","noopFunc"],["Object.prototype._adsDisabled","true"],["utag","{}"],["utag.link","noopFunc"],["_satellite.kpCustomEvent","noopFunc"],["Object.prototype.disablecommercials","true"],["Object.prototype._autoPlayOnlyWithPrerollAd","false"],["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["_ml_ads_ns","null"],["_sp_.config","undefined"],["AdController","noopFunc"],["console.clear","noopFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["console.clear","trueFunc"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["check_adblock","true"],["isAdBlockActive","false"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["adBlockEnabled","false"],["puShown","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["__NEXT_DATA__.props.clientConfigSettings.videoAds","undefined"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["openPopunder","noopFunc"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["CaptchmeState.adb","undefined"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["HTMLAnchorElement.prototype.click","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["check","true"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["runAdBlocker","false"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["cnbc.canShowAds","true"],["firefaucet","true"],["cRAds","true"],["uas","[]"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["foundation.adPlayer.bitmovin","{}"],["weltConfig.switches.videoAdBlockBlocker","false"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["Object.prototype.adReinsertion","noopFunc"],["getHomadConfig","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["ulp_noadb","true"],["Object.prototype.adblock_detected","false"],["timeSec","0"],["adsbygoogle.loaded","true"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["Adv_ab","false"],["sgpbCanRunAds","true"],["document.hidden","false"],["hasFocus","trueFunc"],["navigator.brave","undefined"],["Object.prototype.isAllAdClose","true"],["document.hasFocus","trueFunc"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["navigator.webkitTemporaryStorage.queryUsageAndQuota","noopFunc"],["document.onkeydown","noopFunc"],["showadas","true"],["alert","throwFunc"],["aSl.gcd","0"],["window.adLink","null"],["detectedAdblock","undefined"],["isTabActive","true"],["clicked","2"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["flashvars.mlogo",""],["vpPrerollVideo","undefined"],["PlayerConfig.config.CustomAdSetting","[]"],["PlayerConfig.trusted","true"],["PlayerConfig.config.AffiliateAdViewLevel","3"],["univresalP","noopFunc"],["hold_click","false"],["tie.ad_blocker_detector","false"],["admiral","noopFunc"],["gnt.x.uam"],["gnt.u.z","true"],["__INITIAL_DATA__.siteData.admiralScript"],["objAd.loadAdShield","noopFunc"],["window.myAd.runAd","noopFunc"],["detectAdBlock","noopFunc"],["AHE.is_member","1"],["__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["document.ontouchend","null"],["document.onclick","null"],["playID","1"],["MDCore.adblock","0"],["killads","true"],["NMAFMediaPlayerController.vastManager.vastShown","true"],["__NEXT_DATA__.runtimeConfig._qub_sdk.qubConfig.video.adBlockerDetectorEnabled","false"],["arePiratesOnBoard","false"],["googletag._loaded_","true"],["NoTenia","false"],["app._data.ads","[]"],["adsPlayer","undefined"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["__NEXT_DATA__.props.pageProps.adVideo","undefined"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["xv_ad_block","0"],["openWindow","noopFunc"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["showada","true"],["showax","true"],["p18","undefined"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["Object.prototype.adblockFound","false"],["createCanvas","noopFunc"],["document.bridCanRunAds","true"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["xv.sda.pp.init","noopFunc"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ad_link",""],["penciBlocksArray","[]"],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["D4zz","noopFunc"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["tv3Cmp.ConsentGiven","true"],["setupSkin","noopFunc"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["td_ad_background_click_link","undefined"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["puShown1","true"],["passthetest","true"],["pandaAdviewValidate","true"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["abpblocked","undefined"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["sssp","emptyObj"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["adSettings","[]"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["googletag","true"],["tOS2","150"],["checkAdBlocker","noopFunc"],["navigator.standalone","true"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["feedBack.showAffilaePromo","noopFunc"],["ShowAdvertising","{}"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["HTMLScriptElement.prototype.onerror","null"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["amzn_aps_csm","{}"],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["sharedController.adblockDetector","noopFunc"],["checkAdsStatus","noopFunc"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["checkAdBlockeraz","noopFunc"],["blockingAds","false"],["Yii2App.playbackTimeout","0"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["HTMLImageElement.prototype.onerror","undefined"],["HTMLImageElement.prototype.onload","undefined"],["powerAPITag","emptyObj"],["playerEnhancedConfig.run","throwFunc"],["aoAdBlockDetected","false"],["rodo.checkIsDidomiConsent","noopFunc"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["hasAdBlocker","false"],["initials.yld-pdpopunder",""],["advertisement3","true"],["Object.prototype.skipPreroll","true"],["DisableDevtool","noopFunc"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["dvsize","52"],["majorse","true"],["completed","1"],["testerli","false"],["w87.abd","noopFunc"],["w87.dsab","noopFunc"],["document.referrer",""],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["one_time","1"],["consentGiven","true"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["malisx","true"],["alim","true"],["ADS.isBannersEnabled","false"],["EASYFUN_ADS_CAN_RUN","true"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["detectedAdblock","noopFunc"],["Object.prototype.DetectByGoogleAd","noopFunc"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["NativeAd","noopFunc"],["window.navigator.brave","undefined"],["HTMLScriptElement.prototype.onerror","undefined"],["isAdblock","false"],["openPop","noopFunc"],["cns.library","true"],["BJSShowUnder","{}"],["BJSShowUnder.bindTo","noopFunc"],["BJSShowUnder.add","noopFunc"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["ABLK","false"],["_n_app.popunder","null"],["_n_app.options.ads.show_popunders","false"],["N_BetterJsPop.object","{}"],["isAdb","false"],["puOverlay","noopFunc"],["ue_adb_chk","1"],["countDown","0"],["runCheck","noopFunc"],["adsSlotRenderEndSeen","true"],["showModal","noopFunc"],["flashvars.mlogo_link",""],["isAdBlocked","noopFunc"],["URLlist","[]"],["aaw","{}"],["aaw.processAdsOnPage","noopFunc"],["doOpen","undefined"],["OneTrust","{}"],["OneTrust.IsAlertBoxClosed","trueFunc"],["FOXIZ_MAIN_SCRIPT.siteAccessDetector","noopFunc"],["openAdBlockPopup","noopFunc"],["advanced_ads_check_adblocker","noopFunc"],["canRunAds","1"],["attestHasAdBlockerActivated","true"],["extInstalled","true"],["SaveFiles.add","noopFunc"],["detectSandbox","noopFunc"],["ga","trueFunc"],["adbon","0"],["LCI.adBlockDetectorEnabled","false"],["stoCazzo","true"],["adblockDetected","false"],["importFAB","undefined"],["window.__CONFIGURATION__.adInsertion.enabled","false"],["window.__CONFIGURATION__.features.enableAdBlockerDetection","false"],["_carbonads","{}"],["_bsa","{}"],["uberad_mode"],["__aab_init","true"],["show_videoad_limited","noopFunc"],["__NATIVEADS_CANARY__","true"],["docManager.doDynamicBlurring","noopFunc"],["Object.prototype.adOnAdBlockPreventPlayback","false"],["pre_roll_url"],["post_roll_url"],["player.preroll","noopFunc"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["Object.prototype.updateModifiedCommerceUrl","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["process","{}"],["process.env","{}"],["Visitor","{}"],["send_gravity_event","noopFunc"],["send_recommendation_event","noopFunc"],["libAnalytics.data.get","noopFunc"],["adthrive._components.start","noopFunc"],["data","true"],["navigator.sendBeacon","noopFunc"]];
const hostnamesMap = new Map([["jilliandescribecompany.com",0],["gogoanime.*",[0,209]],["adrianmissionminute.com",0],["alejandrocenturyoil.com",0],["alleneconomicmatter.com",0],["bethshouldercan.com",0],["bigclatterhomesguideservice.com",0],["brittneystandardwestern.com",0],["brookethoughi.com",0],["brucevotewithin.com",0],["cindyeyefinal.com",0],["denisegrowthwide.com",0],["diananatureforeign.com",0],["donaldlineelse.com",0],["edwardarriveoften.com",0],["erikcoldperson.com",0],["evelynthankregion.com",0],["graceaddresscommunity.com",0],["heatherdiscussionwhen.com",0],["heatherwholeinvolve.com",0],["housecardsummerbutton.com",0],["jamessoundcost.com",0],["jamiesamewalk.com",0],["jasminetesttry.com",0],["jasonresponsemeasure.com",0],["jayservicestuff.com",0],["jennifercertaindevelopment.com",0],["jessicaglassauthor.com",0],["johnalwayssame.com",0],["johntryopen.com",0],["jonathansociallike.com",0],["josephseveralconcern.com",0],["kellywhatcould.com",0],["kennethofficialitem.com",0],["kristiesoundsimply.com",0],["lisatrialidea.com",0],["lorimuchbenefit.com",0],["loriwithinfamily.com",0],["lukecomparetwo.com",0],["mariatheserepublican.com",0],["markstyleall.com",0],["michaelapplysome.com",0],["morganoperationface.com",0],["nathanfromsubject.com",0],["paulkitchendark.com",0],["rebeccaneverbase.com",0],["richardsignfish.com",0],["roberteachfinal.com",0],["robertordercharacter.com",0],["robertplacespace.com",0],["ryanagoinvolve.com",0],["sandratableother.com",0],["sandrataxeight.com",0],["sethniceletter.com",0],["shannonpersonalcost.com",0],["susanhavekeep.com",0],["tinycat-voe-fashion.com",0],["toddpartneranimal.com",0],["troyyourlead.com",0],["uptodatefinishconference.com",0],["uptodatefinishconferenceroom.com",0],["voe.sx",0],["maxfinishseveral.com",0],["voe.sx>>",0],["javboys.tv>>",0],["freeplayervideo.com",0],["nazarickol.com",0],["player-cdn.com",0],["playhydrax.com",[0,419,420]],["rabbitstream.net",0],["fmovies.*",0],["japscan.*",[1,2,3,4,5]],["u26bekrb.fun",6],["br.de",7],["indeed.com",8],["zillow.com",[8,112]],["pasteboard.co",9],["bbc.com",10],["clickhole.com",11],["deadspin.com",11],["gizmodo.com",11],["jalopnik.com",11],["jezebel.com",11],["kotaku.com",11],["lifehacker.com",11],["splinternews.com",11],["theinventory.com",11],["theonion.com",11],["theroot.com",11],["thetakeout.com",11],["pewresearch.org",11],["los40.com",[12,13]],["as.com",13],["caracol.com.co",13],["telegraph.co.uk",[14,15]],["poweredbycovermore.com",[14,67]],["lumens.com",[14,67]],["verizon.com",16],["humanbenchmark.com",17],["politico.com",18],["officedepot.co.cr",[19,20]],["officedepot.*",[21,22]],["usnews.com",23],["coolmathgames.com",[24,296,297,298]],["video.gazzetta.it",[25,26]],["oggi.it",[25,26]],["manoramamax.com",25],["factable.com",27],["thedailybeast.com",28],["zee5.com",29],["gala.fr",30],["geo.fr",30],["voici.fr",30],["gloucestershirelive.co.uk",31],["arsiv.mackolik.com",32],["jacksonguitars.com",33],["scandichotels.com",34],["stylist.co.uk",35],["nettiauto.com",36],["thaiairways.com",[37,38]],["cerbahealthcare.it",[39,40]],["futura-sciences.com",[39,57]],["toureiffel.paris",39],["campusfrance.org",[39,149]],["tiendaenlinea.claro.com.ni",[41,42]],["tieba.baidu.com",43],["fandom.com",[44,45,356]],["grasshopper.com",[46,47]],["epson.com.cn",[48,49,50,51]],["oe24.at",[52,53]],["szbz.de",52],["platform.autods.com",[54,55]],["kcra.com",56],["wcvb.com",56],["sporteurope.tv",56],["citibank.com.sg",58],["uol.com.br",[59,60,61,62,63]],["gazzetta.gr",64],["digicol.dpm.org.cn",[65,66]],["virginmediatelevision.ie",68],["larazon.es",[69,70]],["waitrosecellar.com",[71,72,73]],["kicker.de",[74,397]],["sharpen-free-design-generator.netlify.app",[75,76]],["help.cashctrl.com",[77,78]],["gry-online.pl",79],["vidaextra.com",80],["commande.rhinov.pro",[81,82]],["ecom.wixapps.net",[81,82]],["tipranks.com",[83,84]],["iceland.co.uk",[85,86,87]],["socket.pearsoned.com",88],["tntdrama.com",[89,90]],["trutv.com",[89,90]],["mobile.de",[91,92]],["ioe.vn",[93,94]],["geiriadur.ac.uk",[93,97]],["welsh-dictionary.ac.uk",[93,97]],["bikeportland.org",[95,96]],["biologianet.com",[60,61,62]],["10.com.au",[98,99]],["10play.com.au",[98,99]],["sunshine-live.de",[100,101]],["whatismyip.com",[102,103]],["myfitnesspal.com",104],["netoff.co.jp",[105,106]],["bluerabbitrx.com",[105,106]],["foundit.*",[107,108]],["clickjogos.com.br",109],["bristan.com",[110,111]],["share.hntv.tv",[113,114,115,116]],["forum.dji.com",[113,116]],["unionpayintl.com",[113,115]],["streamelements.com",113],["optimum.net",[117,118]],["hdfcfund.com",119],["user.guancha.cn",[120,121]],["sosovalue.com",122],["bandyforbundet.no",[123,124]],["tatacommunications.com",125],["kb.arlo.com",[125,155]],["suamusica.com.br",[126,127,128]],["macrotrends.net",[129,130]],["code.world",131],["smartcharts.net",131],["topgear.com",132],["eservice.directauto.com",[133,134]],["nbcsports.com",135],["standard.co.uk",136],["pruefernavi.de",[137,138]],["17track.net",139],["visible.com",140],["hagerty.com",[141,142]],["marketplace.nvidia.com",143],["kino.de",[144,145]],["9now.nine.com.au",146],["worldstar.com",147],["prisjakt.no",148],["developer.arm.com",[150,151]],["sterkinekor.com",152],["iogames.space",153],["id.condenast.com",154],["tires.costco.com",156],["tires.costco.ca",156],["livemint.com",[157,158]],["login.asda.com",[159,160]],["mandai.com",[161,162]],["damndelicious.net",163],["laurelberninteriors.com",[163,760]],["brother-usa.com",[164,165]],["choose.kaiserpermanente.org",166],["tekniikanmaailma.fi",[167,168]],["m.youtube.com",[169,170,171,172]],["music.youtube.com",[169,170,171,172]],["tv.youtube.com",[169,170,171,172]],["www.youtube.com",[169,170,171,172]],["youtubekids.com",[169,170,171,172]],["youtube-nocookie.com",[169,170,171,172]],["eu-proxy.startpage.com",[169,170,172]],["timesofindia.indiatimes.com",173],["economictimes.indiatimes.com",174],["motherless.com",175],["sueddeutsche.de",176],["wiwo.de",177],["primewire.*",178],["alphaporno.com",[178,555]],["porngem.com",178],["shortit.pw",[178,253]],["familyporn.tv",178],["sbplay.*",178],["85po.com",[178,238]],["milfnut.*",178],["k1nk.co",178],["watchasians.cc",178],["sankakucomplex.com",179],["player.glomex.com",180],["merkur.de",180],["tz.de",180],["sxyprn.*",181],["hqq.*",[182,183]],["waaw.*",[183,184]],["hotpornfile.org",183],["younetu.*",183],["multiup.us",183],["peliculas8k.com",[183,184]],["czxxx.org",183],["vtplayer.online",183],["vvtplayer.*",183],["netu.ac",183],["netu.frembed.lol",183],["123link.*",185],["adshort.*",185],["mitly.us",185],["linkrex.net",185],["linx.cc",185],["oke.io",185],["linkshorts.*",185],["dz4link.com",185],["adsrt.*",185],["linclik.com",185],["shrt10.com",185],["vinaurl.*",185],["loptelink.com",185],["adfloz.*",185],["cut-fly.com",185],["linkfinal.com",185],["payskip.org",185],["cutpaid.com",185],["linkjust.com",185],["leechpremium.link",185],["icutlink.com",[185,272]],["oncehelp.com",185],["rgl.vn",185],["reqlinks.net",185],["bitlk.com",185],["qlinks.eu",185],["link.3dmili.com",185],["short-fly.com",185],["foxseotools.com",185],["dutchycorp.*",185],["shortearn.*",185],["pingit.*",185],["link.turkdown.com",185],["7r6.com",185],["oko.sh",185],["ckk.ai",185],["fc.lc",185],["fstore.biz",185],["shrink.*",185],["cuts-url.com",185],["eio.io",185],["exe.app",185],["exee.io",185],["exey.io",185],["skincarie.com",185],["exeo.app",185],["tmearn.*",185],["coinlyhub.com",[185,334]],["adsafelink.com",185],["aii.sh",185],["megalink.*",185],["cybertechng.com",[185,350]],["cutdl.xyz",185],["iir.ai",185],["shorteet.com",[185,368]],["miniurl.*",185],["smoner.com",185],["gplinks.*",185],["odisha-remix.com",[185,350]],["xpshort.com",[185,350]],["upshrink.com",185],["clk.*",185],["easysky.in",185],["veganab.co",185],["golink.bloggerishyt.in",185],["birdurls.com",185],["vipurl.in",185],["jameeltips.us",185],["promo-visits.site",185],["satoshi-win.xyz",[185,384]],["shorterall.com",185],["encurtandourl.com",185],["forextrader.site",185],["postazap.com",185],["cety.app",185],["exego.app",[185,382]],["cutlink.net",185],["cutyurls.com",185],["cutty.app",185],["cutnet.net",185],["jixo.online",185],["tinys.click",[185,350]],["cpm.icu",185],["panyshort.link",185],["enagato.com",185],["pandaznetwork.com",185],["tpi.li",185],["oii.la",185],["recipestutorials.com",185],["shrinkme.*",185],["shrinke.*",185],["mrproblogger.com",185],["themezon.net",185],["shrinkforearn.in",185],["oii.io",185],["du-link.in",185],["atglinks.com",185],["thotpacks.xyz",185],["megaurl.in",185],["megafly.in",185],["simana.online",185],["fooak.com",185],["joktop.com",185],["evernia.site",185],["falpus.com",185],["link.paid4link.com",185],["exalink.fun",185],["shortxlinks.com",185],["upfion.com",185],["upfiles.app",185],["upfiles-urls.com",185],["flycutlink.com",[185,350]],["linksly.co",185],["link1s.*",185],["pkr.pw",185],["imagenesderopaparaperros.com",185],["shortenbuddy.com",185],["apksvip.com",185],["4cash.me",185],["namaidani.com",185],["shortzzy.*",185],["teknomuda.com",185],["shorttey.*",[185,333]],["miuiku.com",185],["savelink.site",185],["lite-link.*",185],["adcorto.*",185],["samaa-pro.com",185],["miklpro.com",185],["modapk.link",185],["ccurl.net",185],["linkpoi.me",185],["pewgame.com",185],["haonguyen.top",185],["zshort.*",185],["crazyblog.in",185],["cutearn.net",185],["rshrt.com",185],["filezipa.com",185],["dz-linkk.com",185],["upfiles.*",185],["theblissempire.com",185],["finanzas-vida.com",185],["adurly.cc",185],["paid4.link",185],["link.asiaon.top",185],["go.gets4link.com",185],["linkfly.*",185],["beingtek.com",185],["shorturl.unityassets4free.com",185],["disheye.com",185],["techymedies.com",185],["za.gl",[185,286]],["bblink.com",185],["myad.biz",185],["swzz.xyz",185],["vevioz.com",185],["charexempire.com",185],["clk.asia",185],["sturls.com",185],["myshrinker.com",185],["wplink.*",185],["rocklink.in",185],["techgeek.digital",185],["download3s.net",185],["shortx.net",185],["tlin.me",185],["bestcash2020.com",185],["adslink.pw",[185,637]],["novelssites.com",185],["faucetcrypto.net",185],["trxking.xyz",185],["weadown.com",185],["m.bloggingguidance.com",185],["link.codevn.net",185],["link4rev.site",185],["c2g.at",185],["bitcosite.com",[185,569]],["cryptosh.pro",185],["windowslite.net",[185,350]],["viewfr.com",185],["cl1ca.com",185],["4br.me",185],["fir3.net",185],["seulink.*",185],["encurtalink.*",185],["kiddyshort.com",185],["watchmygf.me",[186,211]],["camwhores.*",[186,196,237,238,239]],["camwhorez.tv",[186,196,237,238]],["cambay.tv",[186,218,237,264,266,267,268,269]],["fpo.xxx",[186,218]],["sexemix.com",186],["heavyfetish.com",[186,752]],["thotcity.su",186],["viralxxxporn.com",[186,401]],["tube8.*",[187,188]],["you-porn.com",188],["youporn.*",188],["youporngay.com",188],["youpornru.com",188],["redtube.*",188],["9908ww.com",188],["adelaidepawnbroker.com",188],["bztube.com",188],["hotovs.com",188],["insuredhome.org",188],["nudegista.com",188],["pornluck.com",188],["vidd.se",188],["pornhub.*",[188,323]],["pornhub.com",188],["pornerbros.com",189],["freep.com",189],["porn.com",190],["tune.pk",191],["noticias.gospelmais.com.br",192],["techperiod.com",192],["viki.com",[193,194]],["watch-series.*",195],["watchseries.*",195],["vev.*",195],["vidop.*",195],["vidup.*",195],["sleazyneasy.com",[196,197,198]],["smutr.com",[196,330]],["tktube.com",196],["yourporngod.com",[196,197]],["javbangers.com",[196,466]],["camfox.com",196],["camthots.tv",[196,264]],["shegotass.info",196],["amateur8.com",196],["bigtitslust.com",196],["ebony8.com",196],["freeporn8.com",196],["lesbian8.com",196],["maturetubehere.com",196],["sortporn.com",196],["motherporno.com",[196,197,218,266]],["theporngod.com",[196,197]],["watchdirty.to",[196,238,239,267]],["pornsocket.com",199],["luxuretv.com",200],["porndig.com",[201,202]],["webcheats.com.br",203],["ceesty.com",[204,205]],["gestyy.com",[204,205]],["corneey.com",205],["destyy.com",205],["festyy.com",205],["sh.st",205],["mitaku.net",205],["angrybirdsnest.com",206],["zrozz.com",206],["clix4btc.com",206],["4tests.com",206],["goltelevision.com",206],["news-und-nachrichten.de",206],["laradiobbs.net",206],["urlaubspartner.net",206],["produktion.de",206],["cinemaxxl.de",206],["bladesalvador.com",206],["tempr.email",206],["friendproject.net",206],["covrhub.com",206],["trust.zone",206],["business-standard.com",206],["planetsuzy.org",207],["empflix.com",208],["xmovies8.*",209],["masteranime.tv",209],["0123movies.*",209],["gostream.*",209],["gomovies.*",209],["freeviewmovies.com",210],["filehorse.com",210],["guidetnt.com",210],["starmusiq.*",210],["sp-today.com",210],["linkvertise.com",210],["eropaste.net",210],["getpaste.link",210],["sharetext.me",210],["wcofun.*",210],["note.sieuthuthuat.com",210],["gadgets.es",[210,475]],["amateurporn.co",[210,267]],["watchanimesub.net",210],["wcoanimesub.tv",210],["wcoforever.net",210],["transparentcalifornia.com",211],["deepbrid.com",212],["webnovel.com",213],["streamwish.*",[214,215]],["oneupload.to",215],["wishfast.top",215],["rubystm.com",215],["rubyvid.com",215],["rubyvidhub.com",215],["stmruby.com",215],["streamruby.com",215],["schwaebische.de",216],["8tracks.com",217],["3movs.com",218],["bravoerotica.net",[218,266]],["youx.xxx",218],["camclips.tv",[218,330]],["xtits.*",[218,266]],["camflow.tv",[218,266,267,304,401]],["camhoes.tv",[218,264,266,267,304,401]],["xmegadrive.com",218],["xxxymovies.com",218],["xxxshake.com",218],["gayck.com",218],["xhand.com",[218,266]],["analdin.com",[218,266]],["revealname.com",219],["golfchannel.com",220],["stream.nbcsports.com",220],["mathdf.com",220],["gamcore.com",221],["porcore.com",221],["porngames.tv",221],["69games.xxx",221],["asianpornjav.com",221],["javmix.app",221],["haaretz.co.il",222],["haaretz.com",222],["hungama.com",222],["a-o.ninja",222],["anime-odcinki.pl",222],["shortgoo.blogspot.com",222],["tonanmedia.my.id",[222,588]],["isekaipalace.com",222],["plyjam.*",[223,224]],["foxsports.com.au",225],["canberratimes.com.au",225],["thesimsresource.com",226],["fxporn69.*",227],["vipbox.*",228],["viprow.*",228],["nba.com",229],["ctrl.blog",230],["sportlife.es",231],["finofilipino.org",232],["desbloqueador.*",233],["xberuang.*",234],["teknorizen.*",234],["mysflink.blogspot.com",234],["ashemaletube.*",235],["paktech2.com",235],["assia.tv",236],["assia4.com",236],["cwtvembeds.com",[238,265]],["camlovers.tv",238],["porntn.com",238],["pornissimo.org",238],["sexcams-24.com",[238,267]],["watchporn.to",[238,267]],["camwhorez.video",238],["footstockings.com",[238,239,267]],["xmateur.com",[238,239,267]],["multi.xxx",239],["weatherx.co.in",[240,241]],["sunbtc.space",240],["subtorrents.*",242],["subtorrents1.*",242],["newpelis.*",242],["pelix.*",242],["allcalidad.*",242],["infomaniakos.*",242],["ojogos.com.br",243],["powforums.com",244],["supforums.com",244],["studybullet.com",244],["usgamer.net",245],["recordonline.com",245],["freebitcoin.win",246],["e-monsite.com",246],["coindice.win",246],["freiepresse.de",247],["investing.com",248],["tornadomovies.*",249],["mp3fiber.com",250],["chicoer.com",251],["dailybreeze.com",251],["dailybulletin.com",251],["dailynews.com",251],["delcotimes.com",251],["eastbaytimes.com",251],["macombdaily.com",251],["ocregister.com",251],["pasadenastarnews.com",251],["pe.com",251],["presstelegram.com",251],["redlandsdailyfacts.com",251],["reviewjournal.com",251],["santacruzsentinel.com",251],["saratogian.com",251],["sentinelandenterprise.com",251],["sgvtribune.com",251],["tampabay.com",251],["times-standard.com",251],["theoaklandpress.com",251],["trentonian.com",251],["twincities.com",251],["whittierdailynews.com",251],["bostonherald.com",251],["dailycamera.com",251],["sbsun.com",251],["dailydemocrat.com",251],["montereyherald.com",251],["orovillemr.com",251],["record-bee.com",251],["redbluffdailynews.com",251],["reporterherald.com",251],["thereporter.com",251],["timescall.com",251],["timesheraldonline.com",251],["ukiahdailyjournal.com",251],["dailylocal.com",251],["mercurynews.com",251],["suedkurier.de",252],["anysex.com",254],["icdrama.*",255],["mangasail.*",255],["pornve.com",256],["file4go.*",257],["coolrom.com.au",257],["marie-claire.es",258],["gamezhero.com",258],["flashgirlgames.com",258],["onlinesudoku.games",258],["mpg.football",258],["sssam.com",258],["globalnews.ca",259],["drinksmixer.com",260],["leitesculinaria.com",260],["fupa.net",261],["browardpalmbeach.com",262],["dallasobserver.com",262],["houstonpress.com",262],["miaminewtimes.com",262],["phoenixnewtimes.com",262],["westword.com",262],["nowtv.com.tr",263],["caminspector.net",264],["camwhoreshd.com",264],["camgoddess.tv",264],["gay4porn.com",266],["mypornhere.com",266],["mangovideo.*",267],["love4porn.com",267],["thotvids.com",267],["watchmdh.to",267],["celebwhore.com",267],["cluset.com",267],["sexlist.tv",267],["4kporn.xxx",267],["xhomealone.com",267],["lusttaboo.com",[267,534]],["hentai-moon.com",267],["camhub.cc",[267,694]],["mediapason.it",270],["linkspaid.com",270],["tuotromedico.com",270],["neoteo.com",270],["phoneswiki.com",270],["celebmix.com",270],["myneobuxportal.com",270],["oyungibi.com",270],["25yearslatersite.com",270],["jeshoots.com",271],["techhx.com",271],["karanapk.com",271],["flashplayer.fullstacks.net",273],["cloudapps.herokuapp.com",273],["youfiles.herokuapp.com",273],["texteditor.nsspot.net",273],["temp-mail.org",274],["asianclub.*",275],["javhdporn.net",275],["vidmoly.*",276],["comnuan.com",277],["veedi.com",278],["battleboats.io",278],["anitube.*",279],["fruitlab.com",279],["haddoz.net",279],["streamingcommunity.*",279],["garoetpos.com",279],["stiletv.it",280],["hqtv.biz",281],["liveuamap.com",282],["audycje.tokfm.pl",283],["shush.se",284],["allkpop.com",285],["empire-anime.*",[286,583,584,585,586,587]],["empire-streaming.*",[286,583,584,585]],["empire-anime.com",[286,583,584,585]],["empire-streamz.fr",[286,583,584,585]],["empire-stream.*",[286,583,584,585]],["pickcrackpasswords.blogspot.com",287],["kfrfansub.com",288],["thuglink.com",288],["voipreview.org",288],["illicoporno.com",289],["lavoixdux.com",289],["tonpornodujour.com",289],["jacquieetmichel.net",289],["swame.com",289],["vosfemmes.com",289],["voyeurfrance.net",289],["jacquieetmicheltv.net",[289,643,644]],["pogo.com",290],["cloudvideo.tv",291],["legionjuegos.org",292],["legionpeliculas.org",292],["legionprogramas.org",292],["16honeys.com",293],["elespanol.com",294],["remodelista.com",295],["audiofanzine.com",299],["uploadev.*",300],["developerinsider.co",301],["thehindu.com",302],["cambro.tv",[303,304]],["boobsradar.com",[304,401,713]],["nibelungen-kurier.de",305],["adfoc.us",306],["tackledsoul.com",306],["adrino1.bonloan.xyz",306],["vi-music.app",306],["instanders.app",306],["rokni.xyz",306],["keedabankingnews.com",306],["tea-coffee.net",306],["spatsify.com",306],["newedutopics.com",306],["getviralreach.in",306],["edukaroo.com",306],["funkeypagali.com",306],["careersides.com",306],["nayisahara.com",306],["wikifilmia.com",306],["infinityskull.com",306],["viewmyknowledge.com",306],["iisfvirtual.in",306],["starxinvestor.com",306],["jkssbalerts.com",306],["sahlmarketing.net",306],["filmypoints.in",306],["fitnessholic.net",306],["moderngyan.com",306],["sattakingcharts.in",306],["bankshiksha.in",306],["earn.mpscstudyhub.com",306],["earn.quotesopia.com",306],["money.quotesopia.com",306],["best-mobilegames.com",306],["learn.moderngyan.com",306],["bharatsarkarijobalert.com",306],["quotesopia.com",306],["creditsgoal.com",306],["bgmi32bitapk.in",306],["techacode.com",306],["trickms.com",306],["ielts-isa.edu.vn",306],["loan.punjabworks.com",306],["sptfy.be",306],["mcafee-com.com",[306,382]],["pianetamountainbike.it",307],["barchart.com",308],["modelisme.com",309],["parasportontario.ca",309],["prescottenews.com",309],["nrj-play.fr",310],["hackingwithreact.com",311],["gutekueche.at",312],["peekvids.com",313],["playvids.com",313],["pornflip.com",313],["redensarten-index.de",314],["vw-page.com",315],["viz.com",[316,317]],["0rechner.de",318],["configspc.com",319],["xopenload.me",319],["uptobox.com",319],["uptostream.com",319],["japgay.com",320],["mega-debrid.eu",321],["dreamdth.com",322],["diaridegirona.cat",324],["diariodeibiza.es",324],["diariodemallorca.es",324],["diarioinformacion.com",324],["eldia.es",324],["emporda.info",324],["farodevigo.es",324],["laopinioncoruna.es",324],["laopiniondemalaga.es",324],["laopiniondemurcia.es",324],["laopiniondezamora.es",324],["laprovincia.es",324],["levante-emv.com",324],["mallorcazeitung.es",324],["regio7.cat",324],["superdeporte.es",324],["playpaste.com",325],["cnbc.com",326],["firefaucet.win",327],["74k.io",[328,329]],["cloudwish.xyz",329],["gradehgplus.com",329],["javindo.site",329],["javindosub.site",329],["kamehaus.net",329],["movearnpre.com",329],["arabshentai.com>>",329],["javdo.cc>>",329],["javenglish.cc>>",329],["javhd.*>>",329],["javhdz.*>>",329],["roshy.tv>>",329],["sextb.*>>",329],["fullhdxxx.com",331],["pornclassic.tube",332],["tubepornclassic.com",332],["etonline.com",333],["creatur.io",333],["lookcam.*",333],["drphil.com",333],["urbanmilwaukee.com",333],["hideandseek.world",333],["myabandonware.com",333],["kendam.com",333],["wttw.com",333],["synonyms.com",333],["definitions.net",333],["hostmath.com",333],["camvideoshub.com",333],["minhaconexao.com.br",333],["home-made-videos.com",335],["amateur-couples.com",335],["slutdump.com",335],["artificialnudes.com",335],["asianal.xyz",335],["asianmassage.xyz",335],["bdsmkingdom.xyz",335],["compilationtube.xyz",335],["cosplaynsfw.xyz",335],["crazytoys.xyz",335],["fikfak.net",335],["handypornos.net",335],["hardcorelesbian.xyz",335],["instaporno.net",335],["latinabbw.xyz",335],["platinporno.com",335],["pornahegao.xyz",335],["pornobait.com",335],["pornfeet.xyz",335],["romanticlesbian.com",335],["sexontheboat.xyz",335],["sexroute.net",335],["traumporno.com",335],["dpstream.*",336],["produsat.com",337],["bluemediafiles.*",338],["12thman.com",339],["acusports.com",339],["atlantic10.com",339],["auburntigers.com",339],["baylorbears.com",339],["bceagles.com",339],["bgsufalcons.com",339],["big12sports.com",339],["bigten.org",339],["bradleybraves.com",339],["butlersports.com",339],["cmumavericks.com",339],["conferenceusa.com",339],["cyclones.com",339],["dartmouthsports.com",339],["daytonflyers.com",339],["dbupatriots.com",339],["dbusports.com",339],["denverpioneers.com",339],["fduknights.com",339],["fgcuathletics.com",339],["fightinghawks.com",339],["fightingillini.com",339],["floridagators.com",339],["friars.com",339],["friscofighters.com",339],["gamecocksonline.com",339],["goarmywestpoint.com",339],["gobison.com",339],["goblueraiders.com",339],["gobobcats.com",339],["gocards.com",339],["gocreighton.com",339],["godeacs.com",339],["goexplorers.com",339],["goetbutigers.com",339],["gofrogs.com",339],["gogriffs.com",339],["gogriz.com",339],["golobos.com",339],["gomarquette.com",339],["gopack.com",339],["gophersports.com",339],["goprincetontigers.com",339],["gopsusports.com",339],["goracers.com",339],["goshockers.com",339],["goterriers.com",339],["gotigersgo.com",339],["gousfbulls.com",339],["govandals.com",339],["gowyo.com",339],["goxavier.com",339],["gozags.com",339],["gozips.com",339],["griffinathletics.com",339],["guhoyas.com",339],["gwusports.com",339],["hailstate.com",339],["hamptonpirates.com",339],["hawaiiathletics.com",339],["hokiesports.com",339],["huskers.com",339],["icgaels.com",339],["iuhoosiers.com",339],["jsugamecocksports.com",339],["longbeachstate.com",339],["loyolaramblers.com",339],["lrtrojans.com",339],["lsusports.net",339],["morrisvillemustangs.com",339],["msuspartans.com",339],["muleriderathletics.com",339],["mutigers.com",339],["navysports.com",339],["nevadawolfpack.com",339],["niuhuskies.com",339],["nkunorse.com",339],["nuhuskies.com",339],["nusports.com",339],["okstate.com",339],["olemisssports.com",339],["omavs.com",339],["ovcsports.com",339],["owlsports.com",339],["purduesports.com",339],["redstormsports.com",339],["richmondspiders.com",339],["sfajacks.com",339],["shupirates.com",339],["siusalukis.com",339],["smcgaels.com",339],["smumustangs.com",339],["soconsports.com",339],["soonersports.com",339],["themw.com",339],["tulsahurricane.com",339],["txst.com",339],["txstatebobcats.com",339],["ubbulls.com",339],["ucfknights.com",339],["ucirvinesports.com",339],["uconnhuskies.com",339],["uhcougars.com",339],["uicflames.com",339],["umterps.com",339],["uncwsports.com",339],["unipanthers.com",339],["unlvrebels.com",339],["uoflsports.com",339],["usdtoreros.com",339],["utahstateaggies.com",339],["utepathletics.com",339],["utrockets.com",339],["uvmathletics.com",339],["uwbadgers.com",339],["villanova.com",339],["wkusports.com",339],["wmubroncos.com",339],["woffordterriers.com",339],["1pack1goal.com",339],["bcuathletics.com",339],["bubraves.com",339],["goblackbears.com",339],["golightsgo.com",339],["gomcpanthers.com",339],["goutsa.com",339],["mercerbears.com",339],["pirateblue.com",339],["pirateblue.net",339],["pirateblue.org",339],["quinnipiacbobcats.com",339],["towsontigers.com",339],["tribeathletics.com",339],["tribeclub.com",339],["utepminermaniacs.com",339],["utepminers.com",339],["wkutickets.com",339],["aopathletics.org",339],["atlantichockeyonline.com",339],["bigsouthnetwork.com",339],["bigsouthsports.com",339],["chawomenshockey.com",339],["dbupatriots.org",339],["drakerelays.org",339],["ecac.org",339],["ecacsports.com",339],["emueagles.com",339],["emugameday.com",339],["gculopes.com",339],["godrakebulldog.com",339],["godrakebulldogs.com",339],["godrakebulldogs.net",339],["goeags.com",339],["goislander.com",339],["goislanders.com",339],["gojacks.com",339],["gomacsports.com",339],["gseagles.com",339],["hubison.com",339],["iowaconference.com",339],["ksuowls.com",339],["lonestarconference.org",339],["mascac.org",339],["midwestconference.org",339],["mountaineast.org",339],["niu-pack.com",339],["nulakers.ca",339],["oswegolakers.com",339],["ovcdigitalnetwork.com",339],["pacersports.com",339],["rmacsports.org",339],["rollrivers.com",339],["samfordsports.com",339],["uncpbraves.com",339],["usfdons.com",339],["wiacsports.com",339],["alaskananooks.com",339],["broncathleticfund.com",339],["cameronaggies.com",339],["columbiacougars.com",339],["etownbluejays.com",339],["gobadgers.ca",339],["golancers.ca",339],["gometrostate.com",339],["gothunderbirds.ca",339],["kentstatesports.com",339],["lehighsports.com",339],["lopers.com",339],["lycoathletics.com",339],["lycomingathletics.com",339],["maraudersports.com",339],["mauiinvitational.com",339],["msumavericks.com",339],["nauathletics.com",339],["nueagles.com",339],["nwusports.com",339],["oceanbreezenyc.org",339],["patriotathleticfund.com",339],["pittband.com",339],["principiaathletics.com",339],["roadrunnersathletics.com",339],["sidearmsocial.com",339],["snhupenmen.com",339],["stablerarena.com",339],["stoutbluedevils.com",339],["uwlathletics.com",339],["yumacs.com",339],["collegefootballplayoff.com",339],["csurams.com",339],["cubuffs.com",339],["gobearcats.com",339],["gohuskies.com",339],["mgoblue.com",339],["osubeavers.com",339],["pittsburghpanthers.com",339],["rolltide.com",339],["texassports.com",339],["thesundevils.com",339],["uclabruins.com",339],["wvuathletics.com",339],["wvusports.com",339],["arizonawildcats.com",339],["calbears.com",339],["cuse.com",339],["georgiadogs.com",339],["goducks.com",339],["goheels.com",339],["gostanford.com",339],["insidekstatesports.com",339],["insidekstatesports.info",339],["insidekstatesports.net",339],["insidekstatesports.org",339],["k-stateathletics.com",339],["k-statefootball.net",339],["k-statefootball.org",339],["k-statesports.com",339],["k-statesports.net",339],["k-statesports.org",339],["k-statewomenshoops.com",339],["k-statewomenshoops.net",339],["k-statewomenshoops.org",339],["kstateathletics.com",339],["kstatefootball.net",339],["kstatefootball.org",339],["kstatesports.com",339],["kstatewomenshoops.com",339],["kstatewomenshoops.net",339],["kstatewomenshoops.org",339],["ksuathletics.com",339],["ksusports.com",339],["scarletknights.com",339],["showdownforrelief.com",339],["syracusecrunch.com",339],["texastech.com",339],["theacc.com",339],["ukathletics.com",339],["usctrojans.com",339],["utahutes.com",339],["utsports.com",339],["wsucougars.com",339],["vidlii.com",[339,365]],["tricksplit.io",339],["fangraphs.com",340],["stern.de",341],["geo.de",341],["brigitte.de",341],["schoener-wohnen.de",341],["welt.de",342],["tvspielfilm.de",[343,344,345,346]],["tvtoday.de",[343,344,345,346]],["chip.de",[343,344,345,346]],["focus.de",[343,344,345,346]],["fitforfun.de",[343,344,345,346]],["n-tv.de",347],["player.rtl2.de",348],["planetaminecraft.com",349],["cravesandflames.com",350],["codesnse.com",350],["flyad.vip",350],["lapresse.ca",351],["kolyoom.com",352],["ilovephd.com",352],["negumo.com",353],["games.wkb.jp",[354,355]],["kenshi.fandom.com",357],["hausbau-forum.de",358],["homeairquality.org",358],["call4cloud.nl",358],["fake-it.ws",359],["laksa19.github.io",360],["1shortlink.com",361],["u-s-news.com",362],["luscious.net",363],["makemoneywithurl.com",364],["junkyponk.com",364],["healthfirstweb.com",364],["vocalley.com",364],["yogablogfit.com",364],["howifx.com",364],["en.financerites.com",364],["mythvista.com",364],["livenewsflix.com",364],["cureclues.com",364],["apekite.com",364],["enit.in",364],["iammagnus.com",365],["dailyvideoreports.net",365],["unityassets4free.com",365],["docer.*",366],["resetoff.pl",366],["sexodi.com",366],["cdn77.org",367],["momxxxsex.com",368],["penisbuyutucum.net",368],["ujszo.com",369],["newsmax.com",370],["nadidetarifler.com",371],["siz.tv",371],["suzylu.co.uk",[372,373]],["onworks.net",374],["yabiladi.com",374],["downloadsoft.net",375],["newsobserver.com",376],["arkadiumhosted.com",376],["testlanguages.com",377],["newsinlevels.com",377],["videosinlevels.com",377],["procinehub.com",378],["bookmystrip.com",378],["imagereviser.com",379],["pubgaimassist.com",380],["gyanitheme.com",380],["tech.trendingword.com",380],["blog.potterworld.co",380],["hipsonyc.com",380],["tech.pubghighdamage.com",380],["blog.itijobalert.in",380],["techkhulasha.com",380],["jiocinema.com",380],["rapid-cloud.co",380],["uploadmall.com",380],["4funbox.com",381],["nephobox.com",381],["1024tera.com",381],["terabox.*",381],["starkroboticsfrc.com",382],["sinonimos.de",382],["antonimos.de",382],["quesignifi.ca",382],["tiktokrealtime.com",382],["tiktokcounter.net",382],["tpayr.xyz",382],["poqzn.xyz",382],["ashrfd.xyz",382],["rezsx.xyz",382],["tryzt.xyz",382],["ashrff.xyz",382],["rezst.xyz",382],["dawenet.com",382],["erzar.xyz",382],["waezm.xyz",382],["waezg.xyz",382],["blackwoodacademy.org",382],["cryptednews.space",382],["vivuq.com",382],["swgop.com",382],["vbnmll.com",382],["telcoinfo.online",382],["dshytb.com",382],["btcbitco.in",[382,383]],["btcsatoshi.net",382],["cempakajaya.com",382],["crypto4yu.com",382],["readbitcoin.org",382],["wiour.com",382],["finish.addurl.biz",382],["aiimgvlog.fun",[382,386]],["laweducationinfo.com",382],["savemoneyinfo.com",382],["worldaffairinfo.com",382],["godstoryinfo.com",382],["successstoryinfo.com",382],["cxissuegk.com",382],["learnmarketinfo.com",382],["bhugolinfo.com",382],["armypowerinfo.com",382],["rsgamer.app",382],["phonereviewinfo.com",382],["makeincomeinfo.com",382],["gknutshell.com",382],["vichitrainfo.com",382],["workproductivityinfo.com",382],["dopomininfo.com",382],["hostingdetailer.com",382],["fitnesssguide.com",382],["tradingfact4u.com",382],["cryptofactss.com",382],["softwaredetail.com",382],["artoffocas.com",382],["insurancesfact.com",382],["travellingdetail.com",382],["advertisingexcel.com",382],["allcryptoz.net",382],["batmanfactor.com",382],["beautifulfashionnailart.com",382],["crewbase.net",382],["documentaryplanet.xyz",382],["crewus.net",382],["gametechreviewer.com",382],["midebalonu.net",382],["misterio.ro",382],["phineypet.com",382],["seory.xyz",382],["shinbhu.net",382],["shinchu.net",382],["substitutefor.com",382],["talkforfitness.com",382],["thefitbrit.co.uk",382],["thumb8.net",382],["thumb9.net",382],["topcryptoz.net",382],["uniqueten.net",382],["ultraten.net",382],["exactpay.online",382],["quins.us",382],["kiddyearner.com",382],["bildirim.*",385],["arahdrive.com",386],["appsbull.com",387],["diudemy.com",387],["maqal360.com",[387,388,389]],["lifesurance.info",390],["akcartoons.in",391],["cybercityhelp.in",391],["dl.apkmoddone.com",392],["phongroblox.com",392],["fuckingfast.net",393],["buzzheavier.com",393],["tickhosting.com",394],["in91vip.win",395],["datavaults.co",396],["t-online.de",398],["upornia.*",[399,400]],["bobs-tube.com",401],["pornohirsch.net",402],["bembed.net",403],["embedv.net",403],["javguard.club",403],["listeamed.net",403],["v6embed.xyz",403],["vembed.*",403],["vid-guard.com",403],["vinomo.xyz",403],["nekolink.site",[404,405]],["141jav.com",406],["141tube.com",406],["aagmaal.com",406],["camcam.cc",406],["javneon.tv",406],["javsaga.ninja",406],["torrentkitty.one",406],["pixsera.net",407],["jnews5.com",408],["pc-builds.com",409],["reuters.com",409],["today.com",409],["videogamer.com",409],["wrestlinginc.com",409],["azcentral.com",410],["greenbaypressgazette.com",410],["palmbeachpost.com",410],["usatoday.com",[410,411]],["ydr.com",410],["247sports.com",412],["indiatimes.com",413],["netzwelt.de",414],["filmibeat.com",415],["goodreturns.in",415],["mykhel.com",415],["daemonanime.net",415],["luckydice.net",415],["weatherwx.com",415],["sattaguess.com",415],["winshell.de",415],["rosasidan.ws",415],["upiapi.in",415],["networkhint.com",415],["thichcode.net",415],["texturecan.com",415],["tikmate.app",[415,625]],["arcaxbydz.id",415],["quotesshine.com",415],["worldhistory.org",416],["arcade.buzzrtv.com",417],["arcade.dailygazette.com",417],["arcade.lemonde.fr",417],["arena.gamesforthebrain.com",417],["bestpuzzlesandgames.com",417],["cointiply.arkadiumarena.com",417],["gamelab.com",417],["gameplayneo.com",417],["games.abqjournal.com",417],["games.arkadium.com",417],["games.amny.com",417],["games.bellinghamherald.com",417],["games.besthealthmag.ca",417],["games.bnd.com",417],["games.boston.com",417],["games.bostonglobe.com",417],["games.bradenton.com",417],["games.centredaily.com",417],["games.charlottegames.cnhinews.com",417],["games.crosswordgiant.com",417],["games.dailymail.co.uk",417],["games.dallasnews.com",417],["games.daytondailynews.com",417],["games.denverpost.com",417],["games.everythingzoomer.com",417],["games.fresnobee.com",417],["games.gameshownetwork.com",417],["games.get.tv",417],["games.greatergood.com",417],["games.heraldonline.com",417],["games.heraldsun.com",417],["games.idahostatesman.com",417],["games.insp.com",417],["games.islandpacket.com",417],["games.journal-news.com",417],["games.kansas.com",417],["games.kansascity.com",417],["games.kentucky.com",417],["games.lancasteronline.com",417],["games.ledger-enquirer.com",417],["games.macon.com",417],["games.mashable.com",417],["games.mercedsunstar.com",417],["games.metro.us",417],["games.metv.com",417],["games.miamiherald.com",417],["games.modbee.com",417],["games.moviestvnetwork.com",417],["games.myrtlebeachonline.com",417],["games.games.newsgames.parade.com",417],["games.pressdemocrat.com",417],["games.puzzlebaron.com",417],["games.puzzler.com",417],["games.puzzles.ca",417],["games.qns.com",417],["games.readersdigest.ca",417],["games.sacbee.com",417],["games.sanluisobispo.com",417],["games.sixtyandme.com",417],["games.sltrib.com",417],["games.springfieldnewssun.com",417],["games.star-telegram.com",417],["games.startribune.com",417],["games.sunherald.com",417],["games.theadvocate.com",417],["games.thenewstribune.com",417],["games.theolympian.com",417],["games.theportugalnews.com",417],["games.thestar.com",417],["games.thestate.com",417],["games.tri-cityherald.com",417],["games.triviatoday.com",417],["games.usnews.com",417],["games.word.tips",417],["games.wordgenius.com",417],["games.wtop.com",417],["jeux.meteocity.com",417],["juegos.as.com",417],["juegos.elnuevoherald.com",417],["juegos.elpais.com",417],["philly.arkadiumarena.com",417],["play.dictionary.com",417],["puzzles.bestforpuzzles.com",417],["puzzles.centralmaine.com",417],["puzzles.crosswordsolver.org",417],["puzzles.independent.co.uk",417],["puzzles.nola.com",417],["puzzles.pressherald.com",417],["puzzles.standard.co.uk",417],["puzzles.sunjournal.com",417],["arkadium.com",418],["abysscdn.com",[419,420]],["turtleviplay.xyz",421],["mixdrop.*",422],["ai.hubtoday.app",423],["news.now.com",424],["qub.ca",425],["gostyn24.pl",426],["lared.cl",427],["atozmath.com",[427,451,452,453,454,455,456]],["pcbolsa.com",428],["hdfilmizlesen.com",429],["watch.rkplayer.xyz",430],["arcai.com",431],["my-code4you.blogspot.com",432],["flickr.com",433],["firefile.cc",434],["pestleanalysis.com",434],["kochamjp.pl",434],["tutorialforlinux.com",434],["whatsaero.com",434],["animeblkom.net",[434,448]],["blkom.com",434],["globes.co.il",[435,436]],["jardiner-malin.fr",437],["tw-calc.net",438],["ohmybrush.com",439],["talkceltic.net",440],["mentalfloss.com",441],["uprafa.com",442],["cube365.net",443],["wwwfotografgotlin.blogspot.com",444],["freelistenonline.com",444],["badassdownloader.com",445],["quickporn.net",446],["yellowbridge.com",447],["aosmark.com",449],["ctrlv.*",450],["newyorker.com",457],["brighteon.com",[458,459]],["more.tv",460],["video1tube.com",461],["alohatube.xyz",461],["4players.de",462],["onlinesoccermanager.com",462],["fshost.me",463],["link.cgtips.org",464],["hentaicloud.com",465],["paperzonevn.com",467],["9jarock.org",468],["fzmovies.info",468],["fztvseries.ng",468],["netnaijas.com",468],["hentaienglish.com",469],["hentaiporno.xxx",469],["venge.io",[470,471]],["its.porn",[472,473]],["atv.at",474],["2ndrun.tv",475],["rackusreads.com",475],["teachmemicro.com",475],["willcycle.com",475],["kusonime.com",[476,477]],["123movieshd.*",478],["imgur.com",[479,480,753]],["hentai-party.com",481],["hentaicomics.pro",481],["uproxy.*",482],["animesa.*",483],["subtitleone.cc",484],["mysexgames.com",485],["ancient-origins.*",486],["cinecalidad.*",[487,488]],["xnxx.*",489],["xvideos.*",489],["gdr-online.com",490],["mmm.dk",491],["iqiyi.com",[492,493,615]],["m.iqiyi.com",494],["nbcolympics.com",495],["apkhex.com",496],["indiansexstories2.net",497],["issstories.xyz",497],["1340kbbr.com",498],["gorgeradio.com",498],["kduk.com",498],["kedoam.com",498],["kejoam.com",498],["kelaam.com",498],["khsn1230.com",498],["kjmx.rocks",498],["kloo.com",498],["klooam.com",498],["klykradio.com",498],["kmed.com",498],["kmnt.com",498],["kpnw.com",498],["kppk983.com",498],["krktcountry.com",498],["ktee.com",498],["kwro.com",498],["kxbxfm.com",498],["thevalley.fm",498],["quizlet.com",499],["dsocker1234.blogspot.com",500],["schoolcheats.net",[501,502]],["mgnet.xyz",503],["designtagebuch.de",504],["pixroute.com",505],["uploady.io",506],["calculator-online.net",507],["porngames.club",508],["sexgames.xxx",508],["111.90.159.132",509],["mobile-tracker-free.com",510],["social-unlock.com",511],["superpsx.com",512],["ninja.io",513],["sourceforge.net",514],["samfirms.com",515],["rapelust.com",516],["vtube.to",516],["desitelugusex.com",516],["dvdplay.*",516],["xvideos-downloader.net",516],["xxxvideotube.net",516],["sdefx.cloud",516],["nozomi.la",516],["banned.video",517],["madmaxworld.tv",517],["androidpolice.com",517],["babygaga.com",517],["backyardboss.net",517],["carbuzz.com",517],["cbr.com",517],["collider.com",517],["dualshockers.com",517],["footballfancast.com",517],["footballleagueworld.co.uk",517],["gamerant.com",517],["givemesport.com",517],["hardcoregamer.com",517],["hotcars.com",517],["howtogeek.com",517],["makeuseof.com",517],["moms.com",517],["movieweb.com",517],["pocket-lint.com",517],["pocketnow.com",517],["screenrant.com",517],["simpleflying.com",517],["thegamer.com",517],["therichest.com",517],["thesportster.com",517],["thethings.com",517],["thetravel.com",517],["topspeed.com",517],["xda-developers.com",517],["huffpost.com",518],["ingles.com",519],["spanishdict.com",519],["surfline.com",[520,521]],["play.tv3.ee",522],["play.tv3.lt",522],["play.tv3.lv",[522,523]],["tv3play.skaties.lv",522],["bulbagarden.net",524],["hollywoodlife.com",525],["mat6tube.com",526],["hotabis.com",527],["root-nation.com",527],["italpress.com",527],["airsoftmilsimnews.com",527],["artribune.com",527],["newtumbl.com",528],["apkmaven.*",529],["aruble.net",530],["nevcoins.club",531],["mail.com",532],["gmx.*",533],["mangakita.id",535],["avpgalaxy.net",536],["panda-novel.com",537],["lightsnovel.com",537],["eaglesnovel.com",537],["pandasnovel.com",537],["ewrc-results.com",538],["kizi.com",539],["cyberscoop.com",540],["fedscoop.com",540],["jeep-cj.com",541],["sponsorhunter.com",542],["cloudcomputingtopics.net",543],["likecs.com",544],["tiscali.it",545],["linkspy.cc",546],["adshnk.com",547],["chattanoogan.com",548],["adsy.pw",549],["playstore.pw",549],["windowspro.de",550],["tvtv.ca",551],["tvtv.us",551],["mydaddy.cc",552],["roadtrippin.fr",553],["vavada5com.com",554],["anyporn.com",[555,572]],["bravoporn.com",555],["bravoteens.com",555],["crocotube.com",555],["hellmoms.com",555],["hellporno.com",555],["sex3.com",555],["tubewolf.com",555],["xbabe.com",555],["xcum.com",555],["zedporn.com",555],["imagetotext.info",556],["infokik.com",557],["freepik.com",558],["ddwloclawek.pl",[559,560]],["www.seznam.cz",561],["deezer.com",562],["my-subs.co",563],["plaion.com",564],["slideshare.net",[565,566]],["ustreasuryyieldcurve.com",567],["businesssoftwarehere.com",568],["goo.st",568],["freevpshere.com",568],["softwaresolutionshere.com",568],["gamereactor.*",570],["madoohd.com",571],["doomovie-hd.*",571],["staige.tv",573],["androidadult.com",574],["streamvid.net",575],["watchtv24.com",576],["cellmapper.net",577],["medscape.com",578],["newscon.org",[579,580]],["wheelofgold.com",581],["drakecomic.*",581],["app.blubank.com",582],["mobileweb.bankmellat.ir",582],["ccthesims.com",589],["chromeready.com",589],["dtbps3games.com",589],["illustratemagazine.com",589],["uknip.co.uk",589],["vod.pl",590],["megadrive-emulator.com",591],["tvhay.*",[592,593]],["moviesapi.club",594],["watchx.top",594],["digimanie.cz",595],["svethardware.cz",595],["srvy.ninja",596],["chat.tchatche.com",[597,598]],["cnn.com",[599,600,601]],["news.bg",602],["edmdls.com",603],["freshremix.net",603],["scenedl.org",603],["trakt.tv",604],["client.falixnodes.net",605],["shroomers.app",606],["classicalradio.com",607],["di.fm",607],["jazzradio.com",607],["radiotunes.com",607],["rockradio.com",607],["zenradio.com",607],["getthit.com",608],["techedubyte.com",609],["iwanttfc.com",610],["nutraingredients-asia.com",611],["nutraingredients-latam.com",611],["nutraingredients-usa.com",611],["nutraingredients.com",611],["ozulscansen.com",612],["nexusmods.com",613],["lookmovie.*",614],["lookmovie2.to",614],["biletomat.pl",616],["hextank.io",[617,618]],["filmizlehdfilm.com",[619,620,621,622]],["filmizletv.*",[619,620,621,622]],["fullfilmizle.cc",[619,620,621,622]],["gofilmizle.net",[619,620,621,622]],["cimanow.cc",623],["bgmiupdate.com.in",623],["freex2line.online",624],["btvplus.bg",626],["sagewater.com",627],["redlion.net",627],["filmweb.pl",628],["satdl.com",629],["vidstreaming.xyz",630],["everand.com",631],["myradioonline.pl",632],["cbs.com",633],["paramountplus.com",633],["colourxh.site",634],["fullxh.com",634],["galleryxh.site",634],["megaxh.com",634],["movingxh.world",634],["seexh.com",634],["unlockxh4.com",634],["valuexh.life",634],["xhaccess.com",634],["xhadult2.com",634],["xhadult3.com",634],["xhadult4.com",634],["xhadult5.com",634],["xhamster.*",634],["xhamster1.*",634],["xhamster10.*",634],["xhamster11.*",634],["xhamster12.*",634],["xhamster13.*",634],["xhamster14.*",634],["xhamster15.*",634],["xhamster16.*",634],["xhamster17.*",634],["xhamster18.*",634],["xhamster19.*",634],["xhamster20.*",634],["xhamster2.*",634],["xhamster3.*",634],["xhamster4.*",634],["xhamster42.*",634],["xhamster46.com",634],["xhamster5.*",634],["xhamster7.*",634],["xhamster8.*",634],["xhamsterporno.mx",634],["xhbig.com",634],["xhbranch5.com",634],["xhchannel.com",634],["xhdate.world",634],["xhlease.world",634],["xhmoon5.com",634],["xhofficial.com",634],["xhopen.com",634],["xhplanet1.com",634],["xhplanet2.com",634],["xhreal2.com",634],["xhreal3.com",634],["xhspot.com",634],["xhtotal.com",634],["xhtree.com",634],["xhvictory.com",634],["xhwebsite.com",634],["xhwebsite2.com",634],["xhwebsite5.com",634],["xhwide1.com",634],["xhwide2.com",634],["xhwide5.com",634],["file-upload.net",635],["tunein.com",636],["acortalo.*",[638,639,640,641]],["acortar.*",[638,639,640,641]],["hentaihaven.xxx",642],["jacquieetmicheltv2.net",644],["a2zapk.*",645],["fcportables.com",[646,647]],["emurom.net",648],["freethesaurus.com",[649,650]],["thefreedictionary.com",[649,650]],["oeffentlicher-dienst.info",651],["im9.eu",[652,653]],["dcdlplayer8a06f4.xyz",654],["ultimate-guitar.com",655],["claimbits.net",656],["sexyscope.net",657],["kickassanime.*",658],["recherche-ebook.fr",659],["virtualdinerbot.com",659],["zonebourse.com",660],["pink-sluts.net",661],["andhrafriends.com",662],["benzinpreis.de",663],["defenseone.com",664],["govexec.com",664],["nextgov.com",664],["route-fifty.com",664],["sharing.wtf",665],["wetter3.de",666],["esportivos.fun",667],["cosmonova-broadcast.tv",668],["538.nl",669],["hartvannederland.nl",669],["kijk.nl",669],["shownieuws.nl",669],["vandaaginside.nl",669],["rock.porn",[670,671]],["videzz.net",[672,673]],["ezaudiobookforsoul.com",674],["club386.com",675],["decompiler.com",[676,677]],["littlebigsnake.com",678],["easyfun.gg",679],["smailpro.com",680],["ilgazzettino.it",681],["ilmessaggero.it",681],["3bmeteo.com",[682,683]],["mconverter.eu",684],["lover937.net",685],["10gb.vn",686],["pes6.es",687],["tactics.tools",[688,689]],["boundhub.com",690],["reliabletv.me",691],["jakondo.ru",692],["trueachievements.com",692],["truesteamachievements.com",692],["truetrophies.com",692],["av1encodes.com",692],["filecrypt.*",693],["wired.com",695],["spankbang.*",[696,697,698,757,758]],["hulu.com",[699,700,701]],["hanime.tv",702],["nhentai.net",[703,704,705]],["pouvideo.*",706],["povvideo.*",706],["povw1deo.*",706],["povwideo.*",706],["powv1deo.*",706],["powvibeo.*",706],["powvideo.*",706],["powvldeo.*",706],["powcloud.org",707],["primevideo.com",708],["read.amazon.*",[708,724]],["anonymfile.com",709],["gofile.to",709],["dotycat.com",710],["rateyourmusic.com",711],["reporterpb.com.br",712],["blog-dnz.com",714],["18adultgames.com",715],["colnect.com",[716,717]],["adultgamesworld.com",718],["servustv.com",[719,720]],["reviewdiv.com",721],["parametric-architecture.com",722],["voiceofdenton.com",723],["concealednation.org",723],["askattest.com",725],["opensubtitles.com",726],["savefiles.com",727],["streamup.ws",728],["pfps.gg",729],["goodstream.one",730],["lecrabeinfo.net",731],["cerberusapp.com",732],["smashkarts.io",733],["beamng.wesupply.cx",734],["wowtv.de",[735,736]],["jsfiddle.net",[737,738]],["musicbusinessworldwide.com",739],["mahfda.com",740],["agar.live",741],["dailymotion.com",742],["scribd.com",743],["live.arynews.tv",744],["pornlore.com",[745,746]],["91porn.com",747],["www.google.*",748],["tacobell.com",749],["zefoy.com",750],["cnet.com",751],["trendyol.com",[754,755]],["trendyol-milla.com",[754,755]],["natgeotv.com",756],["globo.com",759],["linklog.tiagorangel.com",761],["wayfair.com",762]]);
const exceptionsMap = new Map([["cloudflare.com",[0]],["pingit.com",[185]],["loan.bgmi32bitapk.in",[306]],["lookmovie.studio",[614]]]);
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
