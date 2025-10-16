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
const argsList = [["console.clear","undefined"],["aclib.runInPagePush","{}","as","callback"],["aclib.runBanner","{}","as","function"],["aclib.runPop","throwFunc"],["aclib.runInterstitial","{}","as","function"],["aclib.runAutoTag","noopFunc"],["adBlockDetected","undefined"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["dvtag.getTargeting","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["googletag.cmd","{}"],["_aps","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["google.ima.settings.setDisableFlashAds","noopFunc"],["pa.privacy","{}"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505","{}"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["ga.sendGaEvent","noopFunc"],["adobe","{}"],["MT","{}"],["MT.track","noopFunc"],["ClickOmniPartner","noopFunc"],["adex","{}"],["adex.getAdexUser","noopFunc"],["Adkit","noopFunc"],["Object.prototype.shouldExpectGoogleCMP","false"],["apntag.refresh","noopFunc"],["pa.sendEvent","noopFunc"],["Munchkin","{}"],["Munchkin.init","noopFunc"],["ttd_dom_ready","noopFunc"],["ramp","undefined"],["appInfo.snowplow.trackSelfDescribingEvent","noopFunc"],["_vwo_code.init","noopFunc"],["adobePageView","noopFunc"],["dapTracker","{}"],["dapTracker.track","noopFunc"],["newrelic","{}"],["newrelic.setCustomAttribute","noopFunc"],["adobeDataLayer","{}"],["adobeDataLayer.push","noopFunc"],["Object.prototype._adsDisabled","true"],["utag","{}"],["utag.link","noopFunc"],["_satellite.kpCustomEvent","noopFunc"],["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["console.clear","noopFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["console.clear","trueFunc"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["check_adblock","true"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["adBlockEnabled","false"],["puShown","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["__NEXT_DATA__.props.clientConfigSettings.videoAds","undefined"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["openPopunder","noopFunc"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["CaptchmeState.adb","undefined"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["HTMLAnchorElement.prototype.click","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["check","true"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["runAdBlocker","false"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["cnbc.canShowAds","true"],["firefaucet","true"],["cRAds","true"],["uas","[]"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["foundation.adPlayer.bitmovin","{}"],["weltConfig.switches.videoAdBlockBlocker","false"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["Object.prototype.adReinsertion","noopFunc"],["getHomadConfig","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["ulp_noadb","true"],["Object.prototype.adblock_detected","false"],["timeSec","0"],["adsbygoogle.loaded","true"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["Adv_ab","false"],["sgpbCanRunAds","true"],["document.hidden","false"],["hasFocus","trueFunc"],["navigator.brave","undefined"],["Object.prototype.isAllAdClose","true"],["document.hasFocus","trueFunc"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["navigator.webkitTemporaryStorage.queryUsageAndQuota","noopFunc"],["document.onkeydown","noopFunc"],["showadas","true"],["alert","throwFunc"],["aSl.gcd","0"],["window.adLink","null"],["detectedAdblock","undefined"],["isTabActive","true"],["clicked","2"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["flashvars.mlogo",""],["vpPrerollVideo","undefined"],["PlayerConfig.config.CustomAdSetting","[]"],["PlayerConfig.trusted","true"],["PlayerConfig.config.AffiliateAdViewLevel","3"],["univresalP","noopFunc"],["hold_click","false"],["tie.ad_blocker_detector","false"],["admiral","noopFunc"],["gnt.x.uam"],["gnt.u.z","true"],["__INITIAL_DATA__.siteData.admiralScript"],["objAd.loadAdShield","noopFunc"],["window.myAd.runAd","noopFunc"],["detectAdBlock","noopFunc"],["__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["document.ontouchend","null"],["document.onclick","null"],["playID","1"],["MDCore.adblock","0"],["killads","true"],["NMAFMediaPlayerController.vastManager.vastShown","true"],["__NEXT_DATA__.runtimeConfig._qub_sdk.qubConfig.video.adBlockerDetectorEnabled","false"],["arePiratesOnBoard","false"],["googletag._loaded_","true"],["app._data.ads","[]"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["__NEXT_DATA__.props.pageProps.adVideo","undefined"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["xv_ad_block","0"],["openWindow","noopFunc"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["showada","true"],["showax","true"],["p18","undefined"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["Object.prototype.adblockFound","false"],["createCanvas","noopFunc"],["document.bridCanRunAds","true"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["xv.sda.pp.init","noopFunc"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ad_link",""],["penciBlocksArray","[]"],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["D4zz","noopFunc"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["tv3Cmp.ConsentGiven","true"],["setupSkin","noopFunc"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["td_ad_background_click_link","undefined"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["puShown1","true"],["passthetest","true"],["pandaAdviewValidate","true"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["abpblocked","undefined"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["sssp","emptyObj"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["adSettings","[]"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["googletag","true"],["tOS2","150"],["checkAdBlocker","noopFunc"],["navigator.standalone","true"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["feedBack.showAffilaePromo","noopFunc"],["ShowAdvertising","{}"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["HTMLScriptElement.prototype.onerror","null"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["amzn_aps_csm","{}"],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["sharedController.adblockDetector","noopFunc"],["checkAdsStatus","noopFunc"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["checkAdBlockeraz","noopFunc"],["blockingAds","false"],["Yii2App.playbackTimeout","0"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["HTMLImageElement.prototype.onerror","undefined"],["HTMLImageElement.prototype.onload","undefined"],["powerAPITag","emptyObj"],["playerEnhancedConfig.run","throwFunc"],["aoAdBlockDetected","false"],["rodo.checkIsDidomiConsent","noopFunc"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["hasAdBlocker","false"],["initials.yld-pdpopunder",""],["advertisement3","true"],["Object.prototype.skipPreroll","true"],["DisableDevtool","noopFunc"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["dvsize","52"],["majorse","true"],["completed","1"],["testerli","false"],["w87.abd","noopFunc"],["w87.dsab","noopFunc"],["document.referrer",""],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["one_time","1"],["consentGiven","true"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["malisx","true"],["alim","true"],["ADS.isBannersEnabled","false"],["EASYFUN_ADS_CAN_RUN","true"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["detectedAdblock","noopFunc"],["Object.prototype.DetectByGoogleAd","noopFunc"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["NativeAd","noopFunc"],["window.navigator.brave","undefined"],["HTMLScriptElement.prototype.onerror","undefined"],["isAdblock","false"],["openPop","noopFunc"],["cns.library","true"],["BJSShowUnder","{}"],["BJSShowUnder.bindTo","noopFunc"],["BJSShowUnder.add","noopFunc"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["ABLK","false"],["_n_app.popunder","null"],["_n_app.options.ads.show_popunders","false"],["N_BetterJsPop.object","{}"],["isAdb","false"],["puOverlay","noopFunc"],["ue_adb_chk","1"],["countDown","0"],["runCheck","noopFunc"],["adsSlotRenderEndSeen","true"],["showModal","noopFunc"],["flashvars.mlogo_link",""],["isAdBlocked","noopFunc"],["URLlist","[]"],["aaw","{}"],["aaw.processAdsOnPage","noopFunc"],["doOpen","undefined"],["OneTrust","{}"],["OneTrust.IsAlertBoxClosed","trueFunc"],["FOXIZ_MAIN_SCRIPT.siteAccessDetector","noopFunc"],["openAdBlockPopup","noopFunc"],["advanced_ads_check_adblocker","noopFunc"],["canRunAds","1"],["attestHasAdBlockerActivated","true"],["extInstalled","true"],["SaveFiles.add","noopFunc"],["detectSandbox","noopFunc"],["ga","trueFunc"],["adbon","0"],["LCI.adBlockDetectorEnabled","false"],["stoCazzo","true"],["adblockDetected","false"],["importFAB","undefined"],["window.__CONFIGURATION__.adInsertion.enabled","false"],["window.__CONFIGURATION__.features.enableAdBlockerDetection","false"],["_carbonads","{}"],["_bsa","{}"],["uberad_mode"],["__aab_init","true"],["show_videoad_limited","noopFunc"],["__NATIVEADS_CANARY__","true"],["docManager.doDynamicBlurring","noopFunc"],["Object.prototype.adOnAdBlockPreventPlayback","false"],["pre_roll_url"],["post_roll_url"],["player.preroll","noopFunc"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["Object.prototype.updateModifiedCommerceUrl","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["process","{}"],["process.env","{}"],["Visitor","{}"],["send_gravity_event","noopFunc"],["send_recommendation_event","noopFunc"],["libAnalytics.data.get","noopFunc"],["adthrive._components.start","noopFunc"],["data","true"],["navigator.sendBeacon","noopFunc"]];
const hostnamesMap = new Map([["jilliandescribecompany.com",0],["gogoanime.*",[0,208]],["adrianmissionminute.com",0],["alejandrocenturyoil.com",0],["alleneconomicmatter.com",0],["bethshouldercan.com",0],["bigclatterhomesguideservice.com",0],["brittneystandardwestern.com",0],["brookethoughi.com",0],["brucevotewithin.com",0],["cindyeyefinal.com",0],["denisegrowthwide.com",0],["diananatureforeign.com",0],["donaldlineelse.com",0],["edwardarriveoften.com",0],["erikcoldperson.com",0],["evelynthankregion.com",0],["graceaddresscommunity.com",0],["heatherdiscussionwhen.com",0],["heatherwholeinvolve.com",0],["housecardsummerbutton.com",0],["jamessoundcost.com",0],["jamiesamewalk.com",0],["jasminetesttry.com",0],["jasonresponsemeasure.com",0],["jayservicestuff.com",0],["jennifercertaindevelopment.com",0],["jessicaglassauthor.com",0],["johnalwayssame.com",0],["johntryopen.com",0],["jonathansociallike.com",0],["josephseveralconcern.com",0],["kellywhatcould.com",0],["kennethofficialitem.com",0],["kristiesoundsimply.com",0],["lisatrialidea.com",0],["lorimuchbenefit.com",0],["loriwithinfamily.com",0],["lukecomparetwo.com",0],["mariatheserepublican.com",0],["markstyleall.com",0],["michaelapplysome.com",0],["morganoperationface.com",0],["nathanfromsubject.com",0],["paulkitchendark.com",0],["rebeccaneverbase.com",0],["richardsignfish.com",0],["roberteachfinal.com",0],["robertordercharacter.com",0],["robertplacespace.com",0],["ryanagoinvolve.com",0],["sandratableother.com",0],["sandrataxeight.com",0],["sethniceletter.com",0],["shannonpersonalcost.com",0],["susanhavekeep.com",0],["tinycat-voe-fashion.com",0],["toddpartneranimal.com",0],["troyyourlead.com",0],["uptodatefinishconference.com",0],["uptodatefinishconferenceroom.com",0],["voe.sx",0],["maxfinishseveral.com",0],["voe.sx>>",0],["javboys.tv>>",0],["freeplayervideo.com",0],["nazarickol.com",0],["player-cdn.com",0],["playhydrax.com",[0,416,417]],["rabbitstream.net",0],["fmovies.*",0],["japscan.*",[1,2,3,4,5]],["u26bekrb.fun",6],["br.de",7],["indeed.com",8],["zillow.com",[8,112]],["pasteboard.co",9],["bbc.com",10],["clickhole.com",11],["deadspin.com",11],["gizmodo.com",11],["jalopnik.com",11],["jezebel.com",11],["kotaku.com",11],["lifehacker.com",11],["splinternews.com",11],["theinventory.com",11],["theonion.com",11],["theroot.com",11],["thetakeout.com",11],["pewresearch.org",11],["los40.com",[12,13]],["as.com",13],["caracol.com.co",13],["telegraph.co.uk",[14,15]],["poweredbycovermore.com",[14,67]],["lumens.com",[14,67]],["verizon.com",16],["humanbenchmark.com",17],["politico.com",18],["officedepot.co.cr",[19,20]],["officedepot.*",[21,22]],["usnews.com",23],["coolmathgames.com",[24,294,295,296]],["video.gazzetta.it",[25,26]],["oggi.it",[25,26]],["manoramamax.com",25],["factable.com",27],["thedailybeast.com",28],["zee5.com",29],["gala.fr",30],["geo.fr",30],["voici.fr",30],["gloucestershirelive.co.uk",31],["arsiv.mackolik.com",32],["jacksonguitars.com",33],["scandichotels.com",34],["stylist.co.uk",35],["nettiauto.com",36],["thaiairways.com",[37,38]],["cerbahealthcare.it",[39,40]],["futura-sciences.com",[39,57]],["toureiffel.paris",39],["campusfrance.org",[39,149]],["tiendaenlinea.claro.com.ni",[41,42]],["tieba.baidu.com",43],["fandom.com",[44,45,354]],["grasshopper.com",[46,47]],["epson.com.cn",[48,49,50,51]],["oe24.at",[52,53]],["szbz.de",52],["platform.autods.com",[54,55]],["kcra.com",56],["wcvb.com",56],["sporteurope.tv",56],["citibank.com.sg",58],["uol.com.br",[59,60,61,62,63]],["gazzetta.gr",64],["digicol.dpm.org.cn",[65,66]],["virginmediatelevision.ie",68],["larazon.es",[69,70]],["waitrosecellar.com",[71,72,73]],["kicker.de",[74,395]],["sharpen-free-design-generator.netlify.app",[75,76]],["help.cashctrl.com",[77,78]],["gry-online.pl",79],["vidaextra.com",80],["commande.rhinov.pro",[81,82]],["ecom.wixapps.net",[81,82]],["tipranks.com",[83,84]],["iceland.co.uk",[85,86,87]],["socket.pearsoned.com",88],["tntdrama.com",[89,90]],["trutv.com",[89,90]],["mobile.de",[91,92]],["ioe.vn",[93,94]],["geiriadur.ac.uk",[93,97]],["welsh-dictionary.ac.uk",[93,97]],["bikeportland.org",[95,96]],["biologianet.com",[60,61,62]],["10.com.au",[98,99]],["10play.com.au",[98,99]],["sunshine-live.de",[100,101]],["whatismyip.com",[102,103]],["myfitnesspal.com",104],["netoff.co.jp",[105,106]],["bluerabbitrx.com",[105,106]],["foundit.*",[107,108]],["clickjogos.com.br",109],["bristan.com",[110,111]],["share.hntv.tv",[113,114,115,116]],["forum.dji.com",[113,116]],["unionpayintl.com",[113,115]],["streamelements.com",113],["optimum.net",[117,118]],["hdfcfund.com",119],["user.guancha.cn",[120,121]],["sosovalue.com",122],["bandyforbundet.no",[123,124]],["tatacommunications.com",125],["kb.arlo.com",[125,155]],["suamusica.com.br",[126,127,128]],["macrotrends.net",[129,130]],["code.world",131],["smartcharts.net",131],["topgear.com",132],["eservice.directauto.com",[133,134]],["nbcsports.com",135],["standard.co.uk",136],["pruefernavi.de",[137,138]],["17track.net",139],["visible.com",140],["hagerty.com",[141,142]],["marketplace.nvidia.com",143],["kino.de",[144,145]],["9now.nine.com.au",146],["worldstar.com",147],["prisjakt.no",148],["developer.arm.com",[150,151]],["sterkinekor.com",152],["iogames.space",153],["id.condenast.com",154],["tires.costco.com",156],["tires.costco.ca",156],["livemint.com",[157,158]],["login.asda.com",[159,160]],["mandai.com",[161,162]],["damndelicious.net",163],["laurelberninteriors.com",[163,755]],["brother-usa.com",[164,165]],["choose.kaiserpermanente.org",166],["m.youtube.com",[167,168,169,170]],["music.youtube.com",[167,168,169,170]],["tv.youtube.com",[167,168,169,170]],["www.youtube.com",[167,168,169,170]],["youtubekids.com",[167,168,169,170]],["youtube-nocookie.com",[167,168,169,170]],["eu-proxy.startpage.com",[167,168,170]],["timesofindia.indiatimes.com",171],["economictimes.indiatimes.com",172],["motherless.com",173],["sueddeutsche.de",174],["watchanimesub.net",175],["wcoanimesub.tv",175],["wcoforever.net",175],["freeviewmovies.com",175],["filehorse.com",175],["guidetnt.com",175],["starmusiq.*",175],["sp-today.com",175],["linkvertise.com",175],["eropaste.net",175],["getpaste.link",175],["sharetext.me",175],["wcofun.*",175],["note.sieuthuthuat.com",175],["gadgets.es",[175,470]],["amateurporn.co",[175,265]],["wiwo.de",176],["primewire.*",177],["alphaporno.com",[177,550]],["porngem.com",177],["shortit.pw",[177,251]],["familyporn.tv",177],["sbplay.*",177],["85po.com",[177,236]],["milfnut.*",177],["k1nk.co",177],["watchasians.cc",177],["sankakucomplex.com",178],["player.glomex.com",179],["merkur.de",179],["tz.de",179],["sxyprn.*",180],["hqq.*",[181,182]],["waaw.*",[182,183]],["hotpornfile.org",182],["younetu.*",182],["multiup.us",182],["peliculas8k.com",[182,183]],["czxxx.org",182],["vtplayer.online",182],["vvtplayer.*",182],["netu.ac",182],["netu.frembed.lol",182],["123link.*",184],["adshort.*",184],["mitly.us",184],["linkrex.net",184],["linx.cc",184],["oke.io",184],["linkshorts.*",184],["dz4link.com",184],["adsrt.*",184],["linclik.com",184],["shrt10.com",184],["vinaurl.*",184],["loptelink.com",184],["adfloz.*",184],["cut-fly.com",184],["linkfinal.com",184],["payskip.org",184],["cutpaid.com",184],["linkjust.com",184],["leechpremium.link",184],["icutlink.com",[184,270]],["oncehelp.com",184],["rgl.vn",184],["reqlinks.net",184],["bitlk.com",184],["qlinks.eu",184],["link.3dmili.com",184],["short-fly.com",184],["foxseotools.com",184],["dutchycorp.*",184],["shortearn.*",184],["pingit.*",184],["link.turkdown.com",184],["7r6.com",184],["oko.sh",184],["ckk.ai",184],["fc.lc",184],["fstore.biz",184],["shrink.*",184],["cuts-url.com",184],["eio.io",184],["exe.app",184],["exee.io",184],["exey.io",184],["skincarie.com",184],["exeo.app",184],["tmearn.*",184],["coinlyhub.com",[184,332]],["adsafelink.com",184],["aii.sh",184],["megalink.*",184],["cybertechng.com",[184,348]],["cutdl.xyz",184],["iir.ai",184],["shorteet.com",[184,366]],["miniurl.*",184],["smoner.com",184],["gplinks.*",184],["odisha-remix.com",[184,348]],["xpshort.com",[184,348]],["upshrink.com",184],["clk.*",184],["easysky.in",184],["veganab.co",184],["golink.bloggerishyt.in",184],["birdurls.com",184],["vipurl.in",184],["jameeltips.us",184],["promo-visits.site",184],["satoshi-win.xyz",[184,382]],["shorterall.com",184],["encurtandourl.com",184],["forextrader.site",184],["postazap.com",184],["cety.app",184],["exego.app",[184,380]],["cutlink.net",184],["cutyurls.com",184],["cutty.app",184],["cutnet.net",184],["jixo.online",184],["tinys.click",[184,348]],["cpm.icu",184],["panyshort.link",184],["enagato.com",184],["pandaznetwork.com",184],["tpi.li",184],["oii.la",184],["recipestutorials.com",184],["shrinkme.*",184],["shrinke.*",184],["mrproblogger.com",184],["themezon.net",184],["shrinkforearn.in",184],["oii.io",184],["du-link.in",184],["atglinks.com",184],["thotpacks.xyz",184],["megaurl.in",184],["megafly.in",184],["simana.online",184],["fooak.com",184],["joktop.com",184],["evernia.site",184],["falpus.com",184],["link.paid4link.com",184],["exalink.fun",184],["shortxlinks.com",184],["upfion.com",184],["upfiles.app",184],["upfiles-urls.com",184],["flycutlink.com",[184,348]],["linksly.co",184],["link1s.*",184],["pkr.pw",184],["imagenesderopaparaperros.com",184],["shortenbuddy.com",184],["apksvip.com",184],["4cash.me",184],["namaidani.com",184],["shortzzy.*",184],["teknomuda.com",184],["shorttey.*",[184,331]],["miuiku.com",184],["savelink.site",184],["lite-link.*",184],["adcorto.*",184],["samaa-pro.com",184],["miklpro.com",184],["modapk.link",184],["ccurl.net",184],["linkpoi.me",184],["pewgame.com",184],["haonguyen.top",184],["zshort.*",184],["crazyblog.in",184],["cutearn.net",184],["rshrt.com",184],["filezipa.com",184],["dz-linkk.com",184],["upfiles.*",184],["theblissempire.com",184],["finanzas-vida.com",184],["adurly.cc",184],["paid4.link",184],["link.asiaon.top",184],["go.gets4link.com",184],["linkfly.*",184],["beingtek.com",184],["shorturl.unityassets4free.com",184],["disheye.com",184],["techymedies.com",184],["za.gl",[184,284]],["bblink.com",184],["myad.biz",184],["swzz.xyz",184],["vevioz.com",184],["charexempire.com",184],["clk.asia",184],["sturls.com",184],["myshrinker.com",184],["wplink.*",184],["rocklink.in",184],["techgeek.digital",184],["download3s.net",184],["shortx.net",184],["tlin.me",184],["bestcash2020.com",184],["adslink.pw",[184,632]],["novelssites.com",184],["faucetcrypto.net",184],["trxking.xyz",184],["weadown.com",184],["m.bloggingguidance.com",184],["link.codevn.net",184],["link4rev.site",184],["c2g.at",184],["bitcosite.com",[184,564]],["cryptosh.pro",184],["windowslite.net",[184,348]],["viewfr.com",184],["cl1ca.com",184],["4br.me",184],["fir3.net",184],["seulink.*",184],["encurtalink.*",184],["kiddyshort.com",184],["watchmygf.me",[185,209]],["camwhores.*",[185,195,235,236,237]],["camwhorez.tv",[185,195,235,236]],["cambay.tv",[185,216,235,262,264,265,266,267]],["fpo.xxx",[185,216]],["sexemix.com",185],["heavyfetish.com",[185,747]],["thotcity.su",185],["viralxxxporn.com",[185,399]],["tube8.*",[186,187]],["you-porn.com",187],["youporn.*",187],["youporngay.com",187],["youpornru.com",187],["redtube.*",187],["9908ww.com",187],["adelaidepawnbroker.com",187],["bztube.com",187],["hotovs.com",187],["insuredhome.org",187],["nudegista.com",187],["pornluck.com",187],["vidd.se",187],["pornhub.*",[187,321]],["pornhub.com",187],["pornerbros.com",188],["freep.com",188],["porn.com",189],["tune.pk",190],["noticias.gospelmais.com.br",191],["techperiod.com",191],["viki.com",[192,193]],["watch-series.*",194],["watchseries.*",194],["vev.*",194],["vidop.*",194],["vidup.*",194],["sleazyneasy.com",[195,196,197]],["smutr.com",[195,328]],["tktube.com",195],["yourporngod.com",[195,196]],["javbangers.com",[195,461]],["camfox.com",195],["camthots.tv",[195,262]],["shegotass.info",195],["amateur8.com",195],["bigtitslust.com",195],["ebony8.com",195],["freeporn8.com",195],["lesbian8.com",195],["maturetubehere.com",195],["sortporn.com",195],["motherporno.com",[195,196,216,264]],["theporngod.com",[195,196]],["watchdirty.to",[195,236,237,265]],["pornsocket.com",198],["luxuretv.com",199],["porndig.com",[200,201]],["webcheats.com.br",202],["ceesty.com",[203,204]],["gestyy.com",[203,204]],["corneey.com",204],["destyy.com",204],["festyy.com",204],["sh.st",204],["mitaku.net",204],["angrybirdsnest.com",205],["zrozz.com",205],["clix4btc.com",205],["4tests.com",205],["goltelevision.com",205],["news-und-nachrichten.de",205],["laradiobbs.net",205],["urlaubspartner.net",205],["produktion.de",205],["cinemaxxl.de",205],["bladesalvador.com",205],["tempr.email",205],["friendproject.net",205],["covrhub.com",205],["trust.zone",205],["business-standard.com",205],["planetsuzy.org",206],["empflix.com",207],["xmovies8.*",208],["masteranime.tv",208],["0123movies.*",208],["gostream.*",208],["gomovies.*",208],["transparentcalifornia.com",209],["deepbrid.com",210],["webnovel.com",211],["streamwish.*",[212,213]],["oneupload.to",213],["wishfast.top",213],["rubystm.com",213],["rubyvid.com",213],["rubyvidhub.com",213],["stmruby.com",213],["streamruby.com",213],["schwaebische.de",214],["8tracks.com",215],["3movs.com",216],["bravoerotica.net",[216,264]],["youx.xxx",216],["camclips.tv",[216,328]],["xtits.*",[216,264]],["camflow.tv",[216,264,265,302,399]],["camhoes.tv",[216,262,264,265,302,399]],["xmegadrive.com",216],["xxxymovies.com",216],["xxxshake.com",216],["gayck.com",216],["xhand.com",[216,264]],["analdin.com",[216,264]],["revealname.com",217],["golfchannel.com",218],["stream.nbcsports.com",218],["mathdf.com",218],["gamcore.com",219],["porcore.com",219],["porngames.tv",219],["69games.xxx",219],["asianpornjav.com",219],["javmix.app",219],["haaretz.co.il",220],["haaretz.com",220],["hungama.com",220],["a-o.ninja",220],["anime-odcinki.pl",220],["shortgoo.blogspot.com",220],["tonanmedia.my.id",[220,583]],["isekaipalace.com",220],["plyjam.*",[221,222]],["foxsports.com.au",223],["canberratimes.com.au",223],["thesimsresource.com",224],["fxporn69.*",225],["vipbox.*",226],["viprow.*",226],["nba.com",227],["ctrl.blog",228],["sportlife.es",229],["finofilipino.org",230],["desbloqueador.*",231],["xberuang.*",232],["teknorizen.*",232],["mysflink.blogspot.com",232],["ashemaletube.*",233],["paktech2.com",233],["assia.tv",234],["assia4.com",234],["cwtvembeds.com",[236,263]],["camlovers.tv",236],["porntn.com",236],["pornissimo.org",236],["sexcams-24.com",[236,265]],["watchporn.to",[236,265]],["camwhorez.video",236],["footstockings.com",[236,237,265]],["xmateur.com",[236,237,265]],["multi.xxx",237],["weatherx.co.in",[238,239]],["sunbtc.space",238],["subtorrents.*",240],["subtorrents1.*",240],["newpelis.*",240],["pelix.*",240],["allcalidad.*",240],["infomaniakos.*",240],["ojogos.com.br",241],["powforums.com",242],["supforums.com",242],["studybullet.com",242],["usgamer.net",243],["recordonline.com",243],["freebitcoin.win",244],["e-monsite.com",244],["coindice.win",244],["freiepresse.de",245],["investing.com",246],["tornadomovies.*",247],["mp3fiber.com",248],["chicoer.com",249],["dailybreeze.com",249],["dailybulletin.com",249],["dailynews.com",249],["delcotimes.com",249],["eastbaytimes.com",249],["macombdaily.com",249],["ocregister.com",249],["pasadenastarnews.com",249],["pe.com",249],["presstelegram.com",249],["redlandsdailyfacts.com",249],["reviewjournal.com",249],["santacruzsentinel.com",249],["saratogian.com",249],["sentinelandenterprise.com",249],["sgvtribune.com",249],["tampabay.com",249],["times-standard.com",249],["theoaklandpress.com",249],["trentonian.com",249],["twincities.com",249],["whittierdailynews.com",249],["bostonherald.com",249],["dailycamera.com",249],["sbsun.com",249],["dailydemocrat.com",249],["montereyherald.com",249],["orovillemr.com",249],["record-bee.com",249],["redbluffdailynews.com",249],["reporterherald.com",249],["thereporter.com",249],["timescall.com",249],["timesheraldonline.com",249],["ukiahdailyjournal.com",249],["dailylocal.com",249],["mercurynews.com",249],["suedkurier.de",250],["anysex.com",252],["icdrama.*",253],["mangasail.*",253],["pornve.com",254],["file4go.*",255],["coolrom.com.au",255],["marie-claire.es",256],["gamezhero.com",256],["flashgirlgames.com",256],["onlinesudoku.games",256],["mpg.football",256],["sssam.com",256],["globalnews.ca",257],["drinksmixer.com",258],["leitesculinaria.com",258],["fupa.net",259],["browardpalmbeach.com",260],["dallasobserver.com",260],["houstonpress.com",260],["miaminewtimes.com",260],["phoenixnewtimes.com",260],["westword.com",260],["nowtv.com.tr",261],["caminspector.net",262],["camwhoreshd.com",262],["camgoddess.tv",262],["gay4porn.com",264],["mypornhere.com",264],["mangovideo.*",265],["love4porn.com",265],["thotvids.com",265],["watchmdh.to",265],["celebwhore.com",265],["cluset.com",265],["sexlist.tv",265],["4kporn.xxx",265],["xhomealone.com",265],["lusttaboo.com",[265,529]],["hentai-moon.com",265],["camhub.cc",[265,689]],["mediapason.it",268],["linkspaid.com",268],["tuotromedico.com",268],["neoteo.com",268],["phoneswiki.com",268],["celebmix.com",268],["myneobuxportal.com",268],["oyungibi.com",268],["25yearslatersite.com",268],["jeshoots.com",269],["techhx.com",269],["karanapk.com",269],["flashplayer.fullstacks.net",271],["cloudapps.herokuapp.com",271],["youfiles.herokuapp.com",271],["texteditor.nsspot.net",271],["temp-mail.org",272],["asianclub.*",273],["javhdporn.net",273],["vidmoly.*",274],["comnuan.com",275],["veedi.com",276],["battleboats.io",276],["anitube.*",277],["fruitlab.com",277],["haddoz.net",277],["streamingcommunity.*",277],["garoetpos.com",277],["stiletv.it",278],["hqtv.biz",279],["liveuamap.com",280],["audycje.tokfm.pl",281],["shush.se",282],["allkpop.com",283],["empire-anime.*",[284,578,579,580,581,582]],["empire-streaming.*",[284,578,579,580]],["empire-anime.com",[284,578,579,580]],["empire-streamz.fr",[284,578,579,580]],["empire-stream.*",[284,578,579,580]],["pickcrackpasswords.blogspot.com",285],["kfrfansub.com",286],["thuglink.com",286],["voipreview.org",286],["illicoporno.com",287],["lavoixdux.com",287],["tonpornodujour.com",287],["jacquieetmichel.net",287],["swame.com",287],["vosfemmes.com",287],["voyeurfrance.net",287],["jacquieetmicheltv.net",[287,638,639]],["pogo.com",288],["cloudvideo.tv",289],["legionjuegos.org",290],["legionpeliculas.org",290],["legionprogramas.org",290],["16honeys.com",291],["elespanol.com",292],["remodelista.com",293],["audiofanzine.com",297],["uploadev.*",298],["developerinsider.co",299],["thehindu.com",300],["cambro.tv",[301,302]],["boobsradar.com",[302,399,708]],["nibelungen-kurier.de",303],["adfoc.us",304],["tackledsoul.com",304],["adrino1.bonloan.xyz",304],["vi-music.app",304],["instanders.app",304],["rokni.xyz",304],["keedabankingnews.com",304],["tea-coffee.net",304],["spatsify.com",304],["newedutopics.com",304],["getviralreach.in",304],["edukaroo.com",304],["funkeypagali.com",304],["careersides.com",304],["nayisahara.com",304],["wikifilmia.com",304],["infinityskull.com",304],["viewmyknowledge.com",304],["iisfvirtual.in",304],["starxinvestor.com",304],["jkssbalerts.com",304],["sahlmarketing.net",304],["filmypoints.in",304],["fitnessholic.net",304],["moderngyan.com",304],["sattakingcharts.in",304],["bankshiksha.in",304],["earn.mpscstudyhub.com",304],["earn.quotesopia.com",304],["money.quotesopia.com",304],["best-mobilegames.com",304],["learn.moderngyan.com",304],["bharatsarkarijobalert.com",304],["quotesopia.com",304],["creditsgoal.com",304],["bgmi32bitapk.in",304],["techacode.com",304],["trickms.com",304],["ielts-isa.edu.vn",304],["loan.punjabworks.com",304],["sptfy.be",304],["mcafee-com.com",[304,380]],["pianetamountainbike.it",305],["barchart.com",306],["modelisme.com",307],["parasportontario.ca",307],["prescottenews.com",307],["nrj-play.fr",308],["hackingwithreact.com",309],["gutekueche.at",310],["peekvids.com",311],["playvids.com",311],["pornflip.com",311],["redensarten-index.de",312],["vw-page.com",313],["viz.com",[314,315]],["0rechner.de",316],["configspc.com",317],["xopenload.me",317],["uptobox.com",317],["uptostream.com",317],["japgay.com",318],["mega-debrid.eu",319],["dreamdth.com",320],["diaridegirona.cat",322],["diariodeibiza.es",322],["diariodemallorca.es",322],["diarioinformacion.com",322],["eldia.es",322],["emporda.info",322],["farodevigo.es",322],["laopinioncoruna.es",322],["laopiniondemalaga.es",322],["laopiniondemurcia.es",322],["laopiniondezamora.es",322],["laprovincia.es",322],["levante-emv.com",322],["mallorcazeitung.es",322],["regio7.cat",322],["superdeporte.es",322],["playpaste.com",323],["cnbc.com",324],["firefaucet.win",325],["74k.io",[326,327]],["cloudwish.xyz",327],["gradehgplus.com",327],["javindo.site",327],["javindosub.site",327],["kamehaus.net",327],["movearnpre.com",327],["arabshentai.com>>",327],["javdo.cc>>",327],["javenglish.cc>>",327],["javhd.*>>",327],["javhdz.*>>",327],["roshy.tv>>",327],["sextb.*>>",327],["fullhdxxx.com",329],["pornclassic.tube",330],["tubepornclassic.com",330],["etonline.com",331],["creatur.io",331],["lookcam.*",331],["drphil.com",331],["urbanmilwaukee.com",331],["hideandseek.world",331],["myabandonware.com",331],["kendam.com",331],["wttw.com",331],["synonyms.com",331],["definitions.net",331],["hostmath.com",331],["camvideoshub.com",331],["minhaconexao.com.br",331],["home-made-videos.com",333],["amateur-couples.com",333],["slutdump.com",333],["artificialnudes.com",333],["asianal.xyz",333],["asianmassage.xyz",333],["bdsmkingdom.xyz",333],["compilationtube.xyz",333],["cosplaynsfw.xyz",333],["crazytoys.xyz",333],["handypornos.net",333],["hardcorelesbian.xyz",333],["latinabbw.xyz",333],["platinporno.com",333],["pornahegao.xyz",333],["pornobait.com",333],["pornfeet.xyz",333],["romanticlesbian.com",333],["sexontheboat.xyz",333],["traumporno.com",333],["dpstream.*",334],["produsat.com",335],["bluemediafiles.*",336],["12thman.com",337],["acusports.com",337],["atlantic10.com",337],["auburntigers.com",337],["baylorbears.com",337],["bceagles.com",337],["bgsufalcons.com",337],["big12sports.com",337],["bigten.org",337],["bradleybraves.com",337],["butlersports.com",337],["cmumavericks.com",337],["conferenceusa.com",337],["cyclones.com",337],["dartmouthsports.com",337],["daytonflyers.com",337],["dbupatriots.com",337],["dbusports.com",337],["denverpioneers.com",337],["fduknights.com",337],["fgcuathletics.com",337],["fightinghawks.com",337],["fightingillini.com",337],["floridagators.com",337],["friars.com",337],["friscofighters.com",337],["gamecocksonline.com",337],["goarmywestpoint.com",337],["gobison.com",337],["goblueraiders.com",337],["gobobcats.com",337],["gocards.com",337],["gocreighton.com",337],["godeacs.com",337],["goexplorers.com",337],["goetbutigers.com",337],["gofrogs.com",337],["gogriffs.com",337],["gogriz.com",337],["golobos.com",337],["gomarquette.com",337],["gopack.com",337],["gophersports.com",337],["goprincetontigers.com",337],["gopsusports.com",337],["goracers.com",337],["goshockers.com",337],["goterriers.com",337],["gotigersgo.com",337],["gousfbulls.com",337],["govandals.com",337],["gowyo.com",337],["goxavier.com",337],["gozags.com",337],["gozips.com",337],["griffinathletics.com",337],["guhoyas.com",337],["gwusports.com",337],["hailstate.com",337],["hamptonpirates.com",337],["hawaiiathletics.com",337],["hokiesports.com",337],["huskers.com",337],["icgaels.com",337],["iuhoosiers.com",337],["jsugamecocksports.com",337],["longbeachstate.com",337],["loyolaramblers.com",337],["lrtrojans.com",337],["lsusports.net",337],["morrisvillemustangs.com",337],["msuspartans.com",337],["muleriderathletics.com",337],["mutigers.com",337],["navysports.com",337],["nevadawolfpack.com",337],["niuhuskies.com",337],["nkunorse.com",337],["nuhuskies.com",337],["nusports.com",337],["okstate.com",337],["olemisssports.com",337],["omavs.com",337],["ovcsports.com",337],["owlsports.com",337],["purduesports.com",337],["redstormsports.com",337],["richmondspiders.com",337],["sfajacks.com",337],["shupirates.com",337],["siusalukis.com",337],["smcgaels.com",337],["smumustangs.com",337],["soconsports.com",337],["soonersports.com",337],["themw.com",337],["tulsahurricane.com",337],["txst.com",337],["txstatebobcats.com",337],["ubbulls.com",337],["ucfknights.com",337],["ucirvinesports.com",337],["uconnhuskies.com",337],["uhcougars.com",337],["uicflames.com",337],["umterps.com",337],["uncwsports.com",337],["unipanthers.com",337],["unlvrebels.com",337],["uoflsports.com",337],["usdtoreros.com",337],["utahstateaggies.com",337],["utepathletics.com",337],["utrockets.com",337],["uvmathletics.com",337],["uwbadgers.com",337],["villanova.com",337],["wkusports.com",337],["wmubroncos.com",337],["woffordterriers.com",337],["1pack1goal.com",337],["bcuathletics.com",337],["bubraves.com",337],["goblackbears.com",337],["golightsgo.com",337],["gomcpanthers.com",337],["goutsa.com",337],["mercerbears.com",337],["pirateblue.com",337],["pirateblue.net",337],["pirateblue.org",337],["quinnipiacbobcats.com",337],["towsontigers.com",337],["tribeathletics.com",337],["tribeclub.com",337],["utepminermaniacs.com",337],["utepminers.com",337],["wkutickets.com",337],["aopathletics.org",337],["atlantichockeyonline.com",337],["bigsouthnetwork.com",337],["bigsouthsports.com",337],["chawomenshockey.com",337],["dbupatriots.org",337],["drakerelays.org",337],["ecac.org",337],["ecacsports.com",337],["emueagles.com",337],["emugameday.com",337],["gculopes.com",337],["godrakebulldog.com",337],["godrakebulldogs.com",337],["godrakebulldogs.net",337],["goeags.com",337],["goislander.com",337],["goislanders.com",337],["gojacks.com",337],["gomacsports.com",337],["gseagles.com",337],["hubison.com",337],["iowaconference.com",337],["ksuowls.com",337],["lonestarconference.org",337],["mascac.org",337],["midwestconference.org",337],["mountaineast.org",337],["niu-pack.com",337],["nulakers.ca",337],["oswegolakers.com",337],["ovcdigitalnetwork.com",337],["pacersports.com",337],["rmacsports.org",337],["rollrivers.com",337],["samfordsports.com",337],["uncpbraves.com",337],["usfdons.com",337],["wiacsports.com",337],["alaskananooks.com",337],["broncathleticfund.com",337],["cameronaggies.com",337],["columbiacougars.com",337],["etownbluejays.com",337],["gobadgers.ca",337],["golancers.ca",337],["gometrostate.com",337],["gothunderbirds.ca",337],["kentstatesports.com",337],["lehighsports.com",337],["lopers.com",337],["lycoathletics.com",337],["lycomingathletics.com",337],["maraudersports.com",337],["mauiinvitational.com",337],["msumavericks.com",337],["nauathletics.com",337],["nueagles.com",337],["nwusports.com",337],["oceanbreezenyc.org",337],["patriotathleticfund.com",337],["pittband.com",337],["principiaathletics.com",337],["roadrunnersathletics.com",337],["sidearmsocial.com",337],["snhupenmen.com",337],["stablerarena.com",337],["stoutbluedevils.com",337],["uwlathletics.com",337],["yumacs.com",337],["collegefootballplayoff.com",337],["csurams.com",337],["cubuffs.com",337],["gobearcats.com",337],["gohuskies.com",337],["mgoblue.com",337],["osubeavers.com",337],["pittsburghpanthers.com",337],["rolltide.com",337],["texassports.com",337],["thesundevils.com",337],["uclabruins.com",337],["wvuathletics.com",337],["wvusports.com",337],["arizonawildcats.com",337],["calbears.com",337],["cuse.com",337],["georgiadogs.com",337],["goducks.com",337],["goheels.com",337],["gostanford.com",337],["insidekstatesports.com",337],["insidekstatesports.info",337],["insidekstatesports.net",337],["insidekstatesports.org",337],["k-stateathletics.com",337],["k-statefootball.net",337],["k-statefootball.org",337],["k-statesports.com",337],["k-statesports.net",337],["k-statesports.org",337],["k-statewomenshoops.com",337],["k-statewomenshoops.net",337],["k-statewomenshoops.org",337],["kstateathletics.com",337],["kstatefootball.net",337],["kstatefootball.org",337],["kstatesports.com",337],["kstatewomenshoops.com",337],["kstatewomenshoops.net",337],["kstatewomenshoops.org",337],["ksuathletics.com",337],["ksusports.com",337],["scarletknights.com",337],["showdownforrelief.com",337],["syracusecrunch.com",337],["texastech.com",337],["theacc.com",337],["ukathletics.com",337],["usctrojans.com",337],["utahutes.com",337],["utsports.com",337],["wsucougars.com",337],["vidlii.com",[337,363]],["tricksplit.io",337],["fangraphs.com",338],["stern.de",339],["geo.de",339],["brigitte.de",339],["schoener-wohnen.de",339],["welt.de",340],["tvspielfilm.de",[341,342,343,344]],["tvtoday.de",[341,342,343,344]],["chip.de",[341,342,343,344]],["focus.de",[341,342,343,344]],["fitforfun.de",[341,342,343,344]],["n-tv.de",345],["player.rtl2.de",346],["planetaminecraft.com",347],["cravesandflames.com",348],["codesnse.com",348],["flyad.vip",348],["lapresse.ca",349],["kolyoom.com",350],["ilovephd.com",350],["negumo.com",351],["games.wkb.jp",[352,353]],["kenshi.fandom.com",355],["hausbau-forum.de",356],["homeairquality.org",356],["call4cloud.nl",356],["fake-it.ws",357],["laksa19.github.io",358],["1shortlink.com",359],["u-s-news.com",360],["luscious.net",361],["makemoneywithurl.com",362],["junkyponk.com",362],["healthfirstweb.com",362],["vocalley.com",362],["yogablogfit.com",362],["howifx.com",362],["en.financerites.com",362],["mythvista.com",362],["livenewsflix.com",362],["cureclues.com",362],["apekite.com",362],["enit.in",362],["iammagnus.com",363],["dailyvideoreports.net",363],["unityassets4free.com",363],["docer.*",364],["resetoff.pl",364],["sexodi.com",364],["cdn77.org",365],["momxxxsex.com",366],["penisbuyutucum.net",366],["ujszo.com",367],["newsmax.com",368],["nadidetarifler.com",369],["siz.tv",369],["suzylu.co.uk",[370,371]],["onworks.net",372],["yabiladi.com",372],["downloadsoft.net",373],["newsobserver.com",374],["arkadiumhosted.com",374],["testlanguages.com",375],["newsinlevels.com",375],["videosinlevels.com",375],["procinehub.com",376],["bookmystrip.com",376],["imagereviser.com",377],["pubgaimassist.com",378],["gyanitheme.com",378],["tech.trendingword.com",378],["blog.potterworld.co",378],["hipsonyc.com",378],["tech.pubghighdamage.com",378],["blog.itijobalert.in",378],["techkhulasha.com",378],["jiocinema.com",378],["rapid-cloud.co",378],["uploadmall.com",378],["4funbox.com",379],["nephobox.com",379],["1024tera.com",379],["terabox.*",379],["starkroboticsfrc.com",380],["sinonimos.de",380],["antonimos.de",380],["quesignifi.ca",380],["tiktokrealtime.com",380],["tiktokcounter.net",380],["tpayr.xyz",380],["poqzn.xyz",380],["ashrfd.xyz",380],["rezsx.xyz",380],["tryzt.xyz",380],["ashrff.xyz",380],["rezst.xyz",380],["dawenet.com",380],["erzar.xyz",380],["waezm.xyz",380],["waezg.xyz",380],["blackwoodacademy.org",380],["cryptednews.space",380],["vivuq.com",380],["swgop.com",380],["vbnmll.com",380],["telcoinfo.online",380],["dshytb.com",380],["btcbitco.in",[380,381]],["btcsatoshi.net",380],["cempakajaya.com",380],["crypto4yu.com",380],["readbitcoin.org",380],["wiour.com",380],["finish.addurl.biz",380],["aiimgvlog.fun",[380,384]],["laweducationinfo.com",380],["savemoneyinfo.com",380],["worldaffairinfo.com",380],["godstoryinfo.com",380],["successstoryinfo.com",380],["cxissuegk.com",380],["learnmarketinfo.com",380],["bhugolinfo.com",380],["armypowerinfo.com",380],["rsgamer.app",380],["phonereviewinfo.com",380],["makeincomeinfo.com",380],["gknutshell.com",380],["vichitrainfo.com",380],["workproductivityinfo.com",380],["dopomininfo.com",380],["hostingdetailer.com",380],["fitnesssguide.com",380],["tradingfact4u.com",380],["cryptofactss.com",380],["softwaredetail.com",380],["artoffocas.com",380],["insurancesfact.com",380],["travellingdetail.com",380],["advertisingexcel.com",380],["allcryptoz.net",380],["batmanfactor.com",380],["beautifulfashionnailart.com",380],["crewbase.net",380],["documentaryplanet.xyz",380],["crewus.net",380],["gametechreviewer.com",380],["midebalonu.net",380],["misterio.ro",380],["phineypet.com",380],["seory.xyz",380],["shinbhu.net",380],["shinchu.net",380],["substitutefor.com",380],["talkforfitness.com",380],["thefitbrit.co.uk",380],["thumb8.net",380],["thumb9.net",380],["topcryptoz.net",380],["uniqueten.net",380],["ultraten.net",380],["exactpay.online",380],["quins.us",380],["kiddyearner.com",380],["bildirim.*",383],["arahdrive.com",384],["appsbull.com",385],["diudemy.com",385],["maqal360.com",[385,386,387]],["lifesurance.info",388],["akcartoons.in",389],["cybercityhelp.in",389],["dl.apkmoddone.com",390],["phongroblox.com",390],["fuckingfast.net",391],["buzzheavier.com",391],["tickhosting.com",392],["in91vip.win",393],["datavaults.co",394],["t-online.de",396],["upornia.*",[397,398]],["bobs-tube.com",399],["pornohirsch.net",400],["bembed.net",401],["embedv.net",401],["javguard.club",401],["listeamed.net",401],["v6embed.xyz",401],["vembed.*",401],["vid-guard.com",401],["vinomo.xyz",401],["nekolink.site",[402,403]],["141jav.com",404],["141tube.com",404],["aagmaal.com",404],["camcam.cc",404],["javneon.tv",404],["javsaga.ninja",404],["pixsera.net",405],["jnews5.com",406],["pc-builds.com",407],["reuters.com",407],["today.com",407],["videogamer.com",407],["wrestlinginc.com",407],["azcentral.com",408],["greenbaypressgazette.com",408],["palmbeachpost.com",408],["usatoday.com",[408,409]],["ydr.com",408],["247sports.com",410],["indiatimes.com",411],["netzwelt.de",412],["filmibeat.com",413],["goodreturns.in",413],["mykhel.com",413],["daemonanime.net",413],["luckydice.net",413],["weatherwx.com",413],["sattaguess.com",413],["winshell.de",413],["rosasidan.ws",413],["upiapi.in",413],["networkhint.com",413],["thichcode.net",413],["texturecan.com",413],["tikmate.app",[413,620]],["arcaxbydz.id",413],["quotesshine.com",413],["arcade.buzzrtv.com",414],["arcade.dailygazette.com",414],["arcade.lemonde.fr",414],["arena.gamesforthebrain.com",414],["bestpuzzlesandgames.com",414],["cointiply.arkadiumarena.com",414],["gamelab.com",414],["gameplayneo.com",414],["games.abqjournal.com",414],["games.arkadium.com",414],["games.amny.com",414],["games.bellinghamherald.com",414],["games.besthealthmag.ca",414],["games.bnd.com",414],["games.boston.com",414],["games.bostonglobe.com",414],["games.bradenton.com",414],["games.centredaily.com",414],["games.charlottegames.cnhinews.com",414],["games.crosswordgiant.com",414],["games.dailymail.co.uk",414],["games.dallasnews.com",414],["games.daytondailynews.com",414],["games.denverpost.com",414],["games.everythingzoomer.com",414],["games.fresnobee.com",414],["games.gameshownetwork.com",414],["games.get.tv",414],["games.greatergood.com",414],["games.heraldonline.com",414],["games.heraldsun.com",414],["games.idahostatesman.com",414],["games.insp.com",414],["games.islandpacket.com",414],["games.journal-news.com",414],["games.kansas.com",414],["games.kansascity.com",414],["games.kentucky.com",414],["games.lancasteronline.com",414],["games.ledger-enquirer.com",414],["games.macon.com",414],["games.mashable.com",414],["games.mercedsunstar.com",414],["games.metro.us",414],["games.metv.com",414],["games.miamiherald.com",414],["games.modbee.com",414],["games.moviestvnetwork.com",414],["games.myrtlebeachonline.com",414],["games.games.newsgames.parade.com",414],["games.pressdemocrat.com",414],["games.puzzlebaron.com",414],["games.puzzler.com",414],["games.puzzles.ca",414],["games.qns.com",414],["games.readersdigest.ca",414],["games.sacbee.com",414],["games.sanluisobispo.com",414],["games.sixtyandme.com",414],["games.sltrib.com",414],["games.springfieldnewssun.com",414],["games.star-telegram.com",414],["games.startribune.com",414],["games.sunherald.com",414],["games.theadvocate.com",414],["games.thenewstribune.com",414],["games.theolympian.com",414],["games.theportugalnews.com",414],["games.thestar.com",414],["games.thestate.com",414],["games.tri-cityherald.com",414],["games.triviatoday.com",414],["games.usnews.com",414],["games.word.tips",414],["games.wordgenius.com",414],["games.wtop.com",414],["jeux.meteocity.com",414],["juegos.as.com",414],["juegos.elnuevoherald.com",414],["juegos.elpais.com",414],["philly.arkadiumarena.com",414],["play.dictionary.com",414],["puzzles.bestforpuzzles.com",414],["puzzles.centralmaine.com",414],["puzzles.crosswordsolver.org",414],["puzzles.independent.co.uk",414],["puzzles.nola.com",414],["puzzles.pressherald.com",414],["puzzles.standard.co.uk",414],["puzzles.sunjournal.com",414],["arkadium.com",415],["abysscdn.com",[416,417]],["turtleviplay.xyz",418],["mixdrop.*",419],["ai.hubtoday.app",420],["news.now.com",421],["qub.ca",422],["gostyn24.pl",423],["lared.cl",424],["atozmath.com",[424,446,447,448,449,450,451]],["hdfilmizlesen.com",425],["arcai.com",426],["my-code4you.blogspot.com",427],["flickr.com",428],["firefile.cc",429],["pestleanalysis.com",429],["kochamjp.pl",429],["tutorialforlinux.com",429],["whatsaero.com",429],["animeblkom.net",[429,443]],["blkom.com",429],["globes.co.il",[430,431]],["jardiner-malin.fr",432],["tw-calc.net",433],["ohmybrush.com",434],["talkceltic.net",435],["mentalfloss.com",436],["uprafa.com",437],["cube365.net",438],["wwwfotografgotlin.blogspot.com",439],["freelistenonline.com",439],["badassdownloader.com",440],["quickporn.net",441],["yellowbridge.com",442],["aosmark.com",444],["ctrlv.*",445],["newyorker.com",452],["brighteon.com",[453,454]],["more.tv",455],["video1tube.com",456],["alohatube.xyz",456],["4players.de",457],["onlinesoccermanager.com",457],["fshost.me",458],["link.cgtips.org",459],["hentaicloud.com",460],["paperzonevn.com",462],["9jarock.org",463],["fzmovies.info",463],["fztvseries.ng",463],["netnaijas.com",463],["hentaienglish.com",464],["hentaiporno.xxx",464],["venge.io",[465,466]],["its.porn",[467,468]],["atv.at",469],["2ndrun.tv",470],["rackusreads.com",470],["teachmemicro.com",470],["willcycle.com",470],["kusonime.com",[471,472]],["123movieshd.*",473],["imgur.com",[474,475,748]],["hentai-party.com",476],["hentaicomics.pro",476],["uproxy.*",477],["animesa.*",478],["subtitleone.cc",479],["mysexgames.com",480],["ancient-origins.*",481],["cinecalidad.*",[482,483]],["xnxx.*",484],["xvideos.*",484],["gdr-online.com",485],["mmm.dk",486],["iqiyi.com",[487,488,610]],["m.iqiyi.com",489],["nbcolympics.com",490],["apkhex.com",491],["indiansexstories2.net",492],["issstories.xyz",492],["1340kbbr.com",493],["gorgeradio.com",493],["kduk.com",493],["kedoam.com",493],["kejoam.com",493],["kelaam.com",493],["khsn1230.com",493],["kjmx.rocks",493],["kloo.com",493],["klooam.com",493],["klykradio.com",493],["kmed.com",493],["kmnt.com",493],["kpnw.com",493],["kppk983.com",493],["krktcountry.com",493],["ktee.com",493],["kwro.com",493],["kxbxfm.com",493],["thevalley.fm",493],["quizlet.com",494],["dsocker1234.blogspot.com",495],["schoolcheats.net",[496,497]],["mgnet.xyz",498],["designtagebuch.de",499],["pixroute.com",500],["uploady.io",501],["calculator-online.net",502],["porngames.club",503],["sexgames.xxx",503],["111.90.159.132",504],["mobile-tracker-free.com",505],["social-unlock.com",506],["superpsx.com",507],["ninja.io",508],["sourceforge.net",509],["samfirms.com",510],["rapelust.com",511],["vtube.to",511],["desitelugusex.com",511],["dvdplay.*",511],["xvideos-downloader.net",511],["xxxvideotube.net",511],["sdefx.cloud",511],["nozomi.la",511],["banned.video",512],["madmaxworld.tv",512],["androidpolice.com",512],["babygaga.com",512],["backyardboss.net",512],["carbuzz.com",512],["cbr.com",512],["collider.com",512],["dualshockers.com",512],["footballfancast.com",512],["footballleagueworld.co.uk",512],["gamerant.com",512],["givemesport.com",512],["hardcoregamer.com",512],["hotcars.com",512],["howtogeek.com",512],["makeuseof.com",512],["moms.com",512],["movieweb.com",512],["pocket-lint.com",512],["pocketnow.com",512],["screenrant.com",512],["simpleflying.com",512],["thegamer.com",512],["therichest.com",512],["thesportster.com",512],["thethings.com",512],["thetravel.com",512],["topspeed.com",512],["xda-developers.com",512],["huffpost.com",513],["ingles.com",514],["spanishdict.com",514],["surfline.com",[515,516]],["play.tv3.ee",517],["play.tv3.lt",517],["play.tv3.lv",[517,518]],["tv3play.skaties.lv",517],["bulbagarden.net",519],["hollywoodlife.com",520],["mat6tube.com",521],["hotabis.com",522],["root-nation.com",522],["italpress.com",522],["airsoftmilsimnews.com",522],["artribune.com",522],["newtumbl.com",523],["apkmaven.*",524],["aruble.net",525],["nevcoins.club",526],["mail.com",527],["gmx.*",528],["mangakita.id",530],["avpgalaxy.net",531],["panda-novel.com",532],["lightsnovel.com",532],["eaglesnovel.com",532],["pandasnovel.com",532],["ewrc-results.com",533],["kizi.com",534],["cyberscoop.com",535],["fedscoop.com",535],["jeep-cj.com",536],["sponsorhunter.com",537],["cloudcomputingtopics.net",538],["likecs.com",539],["tiscali.it",540],["linkspy.cc",541],["adshnk.com",542],["chattanoogan.com",543],["adsy.pw",544],["playstore.pw",544],["windowspro.de",545],["tvtv.ca",546],["tvtv.us",546],["mydaddy.cc",547],["roadtrippin.fr",548],["vavada5com.com",549],["anyporn.com",[550,567]],["bravoporn.com",550],["bravoteens.com",550],["crocotube.com",550],["hellmoms.com",550],["hellporno.com",550],["sex3.com",550],["tubewolf.com",550],["xbabe.com",550],["xcum.com",550],["zedporn.com",550],["imagetotext.info",551],["infokik.com",552],["freepik.com",553],["ddwloclawek.pl",[554,555]],["www.seznam.cz",556],["deezer.com",557],["my-subs.co",558],["plaion.com",559],["slideshare.net",[560,561]],["ustreasuryyieldcurve.com",562],["businesssoftwarehere.com",563],["goo.st",563],["freevpshere.com",563],["softwaresolutionshere.com",563],["gamereactor.*",565],["madoohd.com",566],["doomovie-hd.*",566],["staige.tv",568],["androidadult.com",569],["streamvid.net",570],["watchtv24.com",571],["cellmapper.net",572],["medscape.com",573],["newscon.org",[574,575]],["wheelofgold.com",576],["drakecomic.*",576],["app.blubank.com",577],["mobileweb.bankmellat.ir",577],["ccthesims.com",584],["chromeready.com",584],["dtbps3games.com",584],["illustratemagazine.com",584],["uknip.co.uk",584],["vod.pl",585],["megadrive-emulator.com",586],["tvhay.*",[587,588]],["moviesapi.club",589],["watchx.top",589],["digimanie.cz",590],["svethardware.cz",590],["srvy.ninja",591],["chat.tchatche.com",[592,593]],["cnn.com",[594,595,596]],["news.bg",597],["edmdls.com",598],["freshremix.net",598],["scenedl.org",598],["trakt.tv",599],["client.falixnodes.net",600],["shroomers.app",601],["classicalradio.com",602],["di.fm",602],["jazzradio.com",602],["radiotunes.com",602],["rockradio.com",602],["zenradio.com",602],["getthit.com",603],["techedubyte.com",604],["iwanttfc.com",605],["nutraingredients-asia.com",606],["nutraingredients-latam.com",606],["nutraingredients-usa.com",606],["nutraingredients.com",606],["ozulscansen.com",607],["nexusmods.com",608],["lookmovie.*",609],["lookmovie2.to",609],["biletomat.pl",611],["hextank.io",[612,613]],["filmizlehdfilm.com",[614,615,616,617]],["filmizletv.*",[614,615,616,617]],["fullfilmizle.cc",[614,615,616,617]],["gofilmizle.net",[614,615,616,617]],["cimanow.cc",618],["bgmiupdate.com.in",618],["freex2line.online",619],["btvplus.bg",621],["sagewater.com",622],["redlion.net",622],["filmweb.pl",623],["satdl.com",624],["vidstreaming.xyz",625],["everand.com",626],["myradioonline.pl",627],["cbs.com",628],["paramountplus.com",628],["colourxh.site",629],["fullxh.com",629],["galleryxh.site",629],["megaxh.com",629],["movingxh.world",629],["seexh.com",629],["unlockxh4.com",629],["valuexh.life",629],["xhaccess.com",629],["xhadult2.com",629],["xhadult3.com",629],["xhadult4.com",629],["xhadult5.com",629],["xhamster.*",629],["xhamster1.*",629],["xhamster10.*",629],["xhamster11.*",629],["xhamster12.*",629],["xhamster13.*",629],["xhamster14.*",629],["xhamster15.*",629],["xhamster16.*",629],["xhamster17.*",629],["xhamster18.*",629],["xhamster19.*",629],["xhamster20.*",629],["xhamster2.*",629],["xhamster3.*",629],["xhamster4.*",629],["xhamster42.*",629],["xhamster46.com",629],["xhamster5.*",629],["xhamster7.*",629],["xhamster8.*",629],["xhamsterporno.mx",629],["xhbig.com",629],["xhbranch5.com",629],["xhchannel.com",629],["xhdate.world",629],["xhlease.world",629],["xhmoon5.com",629],["xhofficial.com",629],["xhopen.com",629],["xhplanet1.com",629],["xhplanet2.com",629],["xhreal2.com",629],["xhreal3.com",629],["xhspot.com",629],["xhtotal.com",629],["xhtree.com",629],["xhvictory.com",629],["xhwebsite.com",629],["xhwebsite2.com",629],["xhwebsite5.com",629],["xhwide1.com",629],["xhwide2.com",629],["xhwide5.com",629],["file-upload.net",630],["tunein.com",631],["acortalo.*",[633,634,635,636]],["acortar.*",[633,634,635,636]],["hentaihaven.xxx",637],["jacquieetmicheltv2.net",639],["a2zapk.*",640],["fcportables.com",[641,642]],["emurom.net",643],["freethesaurus.com",[644,645]],["thefreedictionary.com",[644,645]],["oeffentlicher-dienst.info",646],["im9.eu",[647,648]],["dcdlplayer8a06f4.xyz",649],["ultimate-guitar.com",650],["claimbits.net",651],["sexyscope.net",652],["kickassanime.*",653],["recherche-ebook.fr",654],["virtualdinerbot.com",654],["zonebourse.com",655],["pink-sluts.net",656],["andhrafriends.com",657],["benzinpreis.de",658],["defenseone.com",659],["govexec.com",659],["nextgov.com",659],["route-fifty.com",659],["sharing.wtf",660],["wetter3.de",661],["esportivos.fun",662],["cosmonova-broadcast.tv",663],["538.nl",664],["hartvannederland.nl",664],["kijk.nl",664],["shownieuws.nl",664],["vandaaginside.nl",664],["rock.porn",[665,666]],["videzz.net",[667,668]],["ezaudiobookforsoul.com",669],["club386.com",670],["decompiler.com",[671,672]],["littlebigsnake.com",673],["easyfun.gg",674],["smailpro.com",675],["ilgazzettino.it",676],["ilmessaggero.it",676],["3bmeteo.com",[677,678]],["mconverter.eu",679],["lover937.net",680],["10gb.vn",681],["pes6.es",682],["tactics.tools",[683,684]],["boundhub.com",685],["reliabletv.me",686],["jakondo.ru",687],["trueachievements.com",687],["truesteamachievements.com",687],["truetrophies.com",687],["av1encodes.com",687],["filecrypt.*",688],["wired.com",690],["spankbang.*",[691,692,693,752,753]],["hulu.com",[694,695,696]],["hanime.tv",697],["nhentai.net",[698,699,700]],["pouvideo.*",701],["povvideo.*",701],["povw1deo.*",701],["povwideo.*",701],["powv1deo.*",701],["powvibeo.*",701],["powvideo.*",701],["powvldeo.*",701],["powcloud.org",702],["primevideo.com",703],["read.amazon.*",[703,719]],["anonymfile.com",704],["gofile.to",704],["dotycat.com",705],["rateyourmusic.com",706],["reporterpb.com.br",707],["blog-dnz.com",709],["18adultgames.com",710],["colnect.com",[711,712]],["adultgamesworld.com",713],["servustv.com",[714,715]],["reviewdiv.com",716],["parametric-architecture.com",717],["voiceofdenton.com",718],["concealednation.org",718],["askattest.com",720],["opensubtitles.com",721],["savefiles.com",722],["streamup.ws",723],["pfps.gg",724],["goodstream.one",725],["lecrabeinfo.net",726],["cerberusapp.com",727],["smashkarts.io",728],["beamng.wesupply.cx",729],["wowtv.de",[730,731]],["jsfiddle.net",[732,733]],["musicbusinessworldwide.com",734],["mahfda.com",735],["agar.live",736],["dailymotion.com",737],["scribd.com",738],["live.arynews.tv",739],["pornlore.com",[740,741]],["91porn.com",742],["www.google.*",743],["tacobell.com",744],["zefoy.com",745],["cnet.com",746],["trendyol.com",[749,750]],["trendyol-milla.com",[749,750]],["natgeotv.com",751],["globo.com",754],["linklog.tiagorangel.com",756],["wayfair.com",757]]);
const exceptionsMap = new Map([["cloudflare.com",[0]],["pingit.com",[184]],["loan.bgmi32bitapk.in",[304]],["lookmovie.studio",[609]]]);
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
