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
const argsList = [["console.clear","undefined"],["aclib.runInPagePush","noopFunc"],["aclib.runBanner","{}","as","function"],["aclib.runInterstitial","throwFunc"],["adBlockDetected","undefined"],["adsbygoogle","{}"],["adsbygoogle.push","noopFunc"],["HTMLScriptElement.prototype.onerror","undefined"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["dvtag.getTargeting","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["googletag.cmd","{}"],["_aps","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["google.ima.settings.setDisableFlashAds","noopFunc"],["pa.privacy","{}"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505","{}"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["ga.sendGaEvent","noopFunc"],["adobe","{}"],["MT","{}"],["MT.track","noopFunc"],["ClickOmniPartner","noopFunc"],["adex","{}"],["adex.getAdexUser","noopFunc"],["Adkit","noopFunc"],["Object.prototype.shouldExpectGoogleCMP","false"],["apntag.refresh","noopFunc"],["pa.sendEvent","noopFunc"],["Munchkin","{}"],["Munchkin.init","noopFunc"],["ttd_dom_ready","noopFunc"],["ramp","undefined"],["appInfo.snowplow.trackSelfDescribingEvent","noopFunc"],["_vwo_code.init","noopFunc"],["adobePageView","noopFunc"],["dapTracker","{}"],["dapTracker.track","noopFunc"],["newrelic","{}"],["newrelic.setCustomAttribute","noopFunc"],["adobeDataLayer","{}"],["adobeDataLayer.push","noopFunc"],["Object.prototype._adsDisabled","true"],["utag","{}"],["utag.link","noopFunc"],["_satellite.kpCustomEvent","noopFunc"],["Object.prototype.disablecommercials","true"],["Object.prototype._autoPlayOnlyWithPrerollAd","false"],["Sentry.addBreadcrumb","noopFunc"],["sensorsDataAnalytic201505.register","noopFunc"],["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["_ml_ads_ns","null"],["_sp_.config","undefined"],["AdController","noopFunc"],["console.clear","noopFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["console.clear","trueFunc"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["check_adblock","true"],["isAdBlockActive","false"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["adBlockEnabled","false"],["puShown","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["__NEXT_DATA__.props.clientConfigSettings.videoAds","undefined"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["openPopunder","noopFunc"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["CaptchmeState.adb","undefined"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["HTMLAnchorElement.prototype.click","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["check","true"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["runAdBlocker","false"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["cnbc.canShowAds","true"],["firefaucet","true"],["cRAds","true"],["uas","[]"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["foundation.adPlayer.bitmovin","{}"],["weltConfig.switches.videoAdBlockBlocker","false"],["window.__gv_org_tfa","undefined"],["Object.prototype.adReinsertion","noopFunc"],["getHomadConfig","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["ulp_noadb","true"],["Object.prototype.adblock_detected","false"],["timeSec","0"],["adsbygoogle.loaded","true"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["Adv_ab","false"],["sgpbCanRunAds","true"],["document.hidden","false"],["hasFocus","trueFunc"],["navigator.brave","undefined"],["Object.prototype.isAllAdClose","true"],["document.hasFocus","trueFunc"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["navigator.webkitTemporaryStorage.queryUsageAndQuota","noopFunc"],["document.onkeydown","noopFunc"],["showadas","true"],["alert","throwFunc"],["aSl.gcd","0"],["window.adLink","null"],["detectedAdblock","undefined"],["isTabActive","true"],["clicked","2"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["flashvars.mlogo",""],["vpPrerollVideo","undefined"],["PlayerConfig.config.CustomAdSetting","[]"],["PlayerConfig.trusted","true"],["PlayerConfig.config.AffiliateAdViewLevel","3"],["univresalP","noopFunc"],["hold_click","false"],["tie.ad_blocker_detector","false"],["admiral","noopFunc"],["gnt.x.uam","undefined","runAt","interactive"],["gnt.u.z","true"],["__INITIAL_DATA__.siteData.admiralScript"],["objAd.loadAdShield","noopFunc"],["window.myAd.runAd","noopFunc"],["detectAdBlock","noopFunc"],["AHE.is_member","1"],["__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["document.ontouchend","null"],["document.onclick","null"],["playID","1"],["MDCore.adblock","0"],["killads","true"],["NMAFMediaPlayerController.vastManager.vastShown","true"],["__NEXT_DATA__.runtimeConfig._qub_sdk.qubConfig.video.adBlockerDetectorEnabled","false"],["Object.prototype.advertising","{}"],["arePiratesOnBoard","false"],["googletag._loaded_","true"],["NoTenia","false"],["app._data.ads","[]"],["adsPlayer","undefined"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["__NEXT_DATA__.props.pageProps.adVideo","undefined"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["xv_ad_block","0"],["openWindow","noopFunc"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["showada","true"],["showax","true"],["p18","undefined"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["Object.prototype.adblockFound","false"],["createCanvas","noopFunc"],["document.bridCanRunAds","true"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["xv.sda.pp.init","noopFunc"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ad_link",""],["penciBlocksArray","[]"],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["D4zz","noopFunc"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["tv3Cmp.ConsentGiven","true"],["setupSkin","noopFunc"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["td_ad_background_click_link","undefined"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["__osw","undefined"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["puShown1","true"],["passthetest","true"],["pandaAdviewValidate","true"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["abpblocked","undefined"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["sssp","emptyObj"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["adSettings","[]"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["googletag","true"],["tOS2","150"],["checkAdBlocker","noopFunc"],["navigator.standalone","true"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["feedBack.showAffilaePromo","noopFunc"],["ShowAdvertising","{}"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["HTMLScriptElement.prototype.onerror","null"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["sharedController.adblockDetector","noopFunc"],["checkAdsStatus","noopFunc"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["checkAdBlockeraz","noopFunc"],["blockingAds","false"],["Yii2App.playbackTimeout","0"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["HTMLImageElement.prototype.onerror","undefined"],["HTMLImageElement.prototype.onload","undefined"],["powerAPITag","emptyObj"],["playerEnhancedConfig.run","throwFunc"],["aoAdBlockDetected","false"],["rodo.checkIsDidomiConsent","noopFunc"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["hasAdBlocker","false"],["initials.yld-pdpopunder",""],["advertisement3","true"],["Object.prototype.skipPreroll","true"],["DisableDevtool","noopFunc"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["dvsize","52"],["majorse","true"],["completed","1"],["testerli","false"],["w87.abd","noopFunc"],["w87.dsab","noopFunc"],["document.referrer",""],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["one_time","1"],["consentGiven","true"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["malisx","true"],["alim","true"],["ADS.isBannersEnabled","false"],["EASYFUN_ADS_CAN_RUN","true"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["detectedAdblock","noopFunc"],["Object.prototype.DetectByGoogleAd","noopFunc"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["NativeAd","noopFunc"],["window.navigator.brave","undefined"],["isAdblock","false"],["openPop","noopFunc"],["cns.library","true"],["BJSShowUnder","{}"],["BJSShowUnder.bindTo","noopFunc"],["BJSShowUnder.add","noopFunc"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["ABLK","false"],["_n_app.popunder","null"],["_n_app.options.ads.show_popunders","false"],["N_BetterJsPop.object","{}"],["isAdb","false"],["puOverlay","noopFunc"],["ue_adb_chk","1"],["canRunAds","1"],["countDown","0"],["runCheck","noopFunc"],["adsSlotRenderEndSeen","true"],["showModal","noopFunc"],["flashvars.mlogo_link",""],["isAdBlocked","noopFunc"],["URLlist","[]"],["aaw","{}"],["aaw.processAdsOnPage","noopFunc"],["doOpen","undefined"],["OneTrust","{}"],["OneTrust.IsAlertBoxClosed","trueFunc"],["FOXIZ_MAIN_SCRIPT.siteAccessDetector","noopFunc"],["openAdBlockPopup","noopFunc"],["advanced_ads_check_adblocker","noopFunc"],["attestHasAdBlockerActivated","true"],["extInstalled","true"],["SaveFiles.add","noopFunc"],["detectSandbox","noopFunc"],["ga","trueFunc"],["adbon","0"],["LCI.adBlockDetectorEnabled","false"],["stoCazzo","true"],["adblockDetected","false"],["importFAB","undefined"],["window.__CONFIGURATION__.adInsertion.enabled","false"],["window.__CONFIGURATION__.features.enableAdBlockerDetection","false"],["_carbonads","{}"],["_bsa","{}"],["uberad_mode"],["__aab_init","true"],["show_videoad_limited","noopFunc"],["__NATIVEADS_CANARY__","true"],["docManager.doDynamicBlurring","noopFunc"],["Object.prototype.adOnAdBlockPreventPlayback","false"],["pre_roll_url"],["post_roll_url"],["player.preroll","noopFunc"],["adblock_detect","noopFunc"],["rwt","noopFunc"],["_hjSettings","undefined"],["google_tag_manager","undefined"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["Object.prototype.updateModifiedCommerceUrl","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["process","{}"],["process.env","{}"],["Visitor","{}"],["send_gravity_event","noopFunc"],["send_recommendation_event","noopFunc"],["libAnalytics.data.get","noopFunc"],["adthrive._components.start","noopFunc"],["data","true"],["navigator.sendBeacon","noopFunc"]];
const hostnamesMap = new Map([["christopheruntilpoint.com",0],["gogoanime.*",[0,212]],["adrianmissionminute.com",0],["alejandrocenturyoil.com",0],["alleneconomicmatter.com",0],["bethshouldercan.com",0],["bigclatterhomesguideservice.com",0],["brittneystandardwestern.com",0],["brookethoughi.com",0],["brucevotewithin.com",0],["cindyeyefinal.com",0],["denisegrowthwide.com",0],["diananatureforeign.com",0],["donaldlineelse.com",0],["edwardarriveoften.com",0],["erikcoldperson.com",0],["evelynthankregion.com",0],["graceaddresscommunity.com",0],["heatherdiscussionwhen.com",0],["heatherwholeinvolve.com",0],["housecardsummerbutton.com",0],["jamessoundcost.com",0],["jamiesamewalk.com",0],["jasminetesttry.com",0],["jasonresponsemeasure.com",0],["jayservicestuff.com",0],["jennifercertaindevelopment.com",0],["jessicaglassauthor.com",0],["jilliandescribecompany.com",0],["johnalwayssame.com",0],["johntryopen.com",0],["jonathansociallike.com",0],["josephseveralconcern.com",0],["kellywhatcould.com",0],["kennethofficialitem.com",0],["kristiesoundsimply.com",0],["lisatrialidea.com",0],["lorimuchbenefit.com",0],["loriwithinfamily.com",0],["lukecomparetwo.com",0],["lukesitturn.com",0],["mariatheserepublican.com",0],["markstyleall.com",0],["michaelapplysome.com",0],["morganoperationface.com",0],["nathanfromsubject.com",0],["paulkitchendark.com",0],["rebeccaneverbase.com",0],["richardsignfish.com",0],["roberteachfinal.com",0],["robertordercharacter.com",0],["robertplacespace.com",0],["ryanagoinvolve.com",0],["sandratableother.com",0],["sandrataxeight.com",0],["sethniceletter.com",0],["shannonpersonalcost.com",0],["susanhavekeep.com",0],["tinycat-voe-fashion.com",0],["toddpartneranimal.com",0],["troyyourlead.com",0],["uptodatefinishconference.com",0],["uptodatefinishconferenceroom.com",0],["voe.sx",0],["maxfinishseveral.com",0],["mikaylaarealike.com",0],["voe.sx>>",0],["javboys.tv>>",0],["freeplayervideo.com",0],["nazarickol.com",0],["player-cdn.com",0],["playhydrax.com",[0,419,420]],["rabbitstream.net",0],["fmovies.*",0],["japscan.*",[1,2,3]],["u26bekrb.fun",4],["cdn.gledaitv.*",[5,6]],["tvtropes.org",7],["jakondo.ru",7],["trueachievements.com",7],["truesteamachievements.com",7],["truetrophies.com",7],["av1encodes.com",7],["myhentaicomics.com",7],["br.de",8],["indeed.com",9],["zillow.com",[9,113]],["pasteboard.co",10],["bbc.com",11],["clickhole.com",12],["deadspin.com",12],["gizmodo.com",12],["jalopnik.com",12],["jezebel.com",12],["kotaku.com",12],["lifehacker.com",12],["splinternews.com",12],["theinventory.com",12],["theonion.com",12],["theroot.com",12],["thetakeout.com",12],["pewresearch.org",12],["los40.com",[13,14]],["as.com",14],["caracol.com.co",14],["telegraph.co.uk",[15,16]],["poweredbycovermore.com",[15,68]],["lumens.com",[15,68]],["verizon.com",17],["humanbenchmark.com",18],["politico.com",19],["officedepot.co.cr",[20,21]],["officedepot.*",[22,23]],["usnews.com",24],["coolmathgames.com",[25,299,300,301]],["video.gazzetta.it",[26,27]],["oggi.it",[26,27]],["manoramamax.com",26],["factable.com",28],["thedailybeast.com",29],["zee5.com",30],["gala.fr",31],["geo.fr",31],["voici.fr",31],["gloucestershirelive.co.uk",32],["arsiv.mackolik.com",33],["jacksonguitars.com",34],["scandichotels.com",35],["stylist.co.uk",36],["nettiauto.com",37],["thaiairways.com",[38,39]],["cerbahealthcare.it",[40,41]],["futura-sciences.com",[40,58]],["toureiffel.paris",40],["campusfrance.org",[40,150]],["tiendaenlinea.claro.com.ni",[42,43]],["tieba.baidu.com",44],["fandom.com",[45,46,356]],["grasshopper.com",[47,48]],["epson.com.cn",[49,50,51,52]],["oe24.at",[53,54]],["szbz.de",53],["platform.autods.com",[55,56]],["kcra.com",57],["wcvb.com",57],["sporteurope.tv",57],["citibank.com.sg",59],["uol.com.br",[60,61,62,63,64]],["gazzetta.gr",65],["digicol.dpm.org.cn",[66,67]],["virginmediatelevision.ie",69],["larazon.es",[70,71]],["waitrosecellar.com",[72,73,74]],["kicker.de",[75,397]],["sharpen-free-design-generator.netlify.app",[76,77]],["help.cashctrl.com",[78,79]],["gry-online.pl",80],["vidaextra.com",81],["commande.rhinov.pro",[82,83]],["ecom.wixapps.net",[82,83]],["prod.hydra.sophos.com",[82,170]],["tipranks.com",[84,85]],["iceland.co.uk",[86,87,88]],["socket.pearsoned.com",89],["tntdrama.com",[90,91]],["trutv.com",[90,91]],["mobile.de",[92,93]],["ioe.vn",[94,95]],["geiriadur.ac.uk",[94,98]],["welsh-dictionary.ac.uk",[94,98]],["bikeportland.org",[96,97]],["biologianet.com",[61,62,63]],["10.com.au",[99,100]],["10play.com.au",[99,100]],["sunshine-live.de",[101,102]],["whatismyip.com",[103,104]],["myfitnesspal.com",105],["netoff.co.jp",[106,107]],["bluerabbitrx.com",[106,107]],["foundit.*",[108,109]],["clickjogos.com.br",110],["bristan.com",[111,112]],["share.hntv.tv",[114,115,116,117]],["forum.dji.com",[114,117]],["unionpayintl.com",[114,116]],["camel3.live",[114,115,117,171]],["streamelements.com",114],["optimum.net",[118,119]],["hdfcfund.com",120],["user.guancha.cn",[121,122]],["sosovalue.com",123],["bandyforbundet.no",[124,125]],["tatacommunications.com",126],["kb.arlo.com",[126,156]],["suamusica.com.br",[127,128,129]],["macrotrends.net",[130,131]],["code.world",132],["smartcharts.net",132],["topgear.com",133],["eservice.directauto.com",[134,135]],["nbcsports.com",136],["standard.co.uk",137],["pruefernavi.de",[138,139]],["17track.net",140],["visible.com",141],["hagerty.com",[142,143]],["marketplace.nvidia.com",144],["kino.de",[145,146]],["9now.nine.com.au",147],["worldstar.com",148],["prisjakt.no",149],["developer.arm.com",[151,152]],["sterkinekor.com",153],["iogames.space",154],["id.condenast.com",155],["tires.costco.com",157],["tires.costco.ca",157],["livemint.com",[158,159]],["login.asda.com",[160,161]],["mandai.com",[162,163]],["damndelicious.net",164],["laurelberninteriors.com",[164,763]],["brother-usa.com",[165,166]],["choose.kaiserpermanente.org",167],["tekniikanmaailma.fi",[168,169]],["m.youtube.com",[172,173,174,175]],["music.youtube.com",[172,173,174,175]],["tv.youtube.com",[172,173,174,175]],["www.youtube.com",[172,173,174,175]],["youtubekids.com",[172,173,174,175]],["youtube-nocookie.com",[172,173,174,175]],["eu-proxy.startpage.com",[172,173,175]],["timesofindia.indiatimes.com",176],["economictimes.indiatimes.com",177],["motherless.com",178],["sueddeutsche.de",179],["wiwo.de",180],["primewire.*",181],["alphaporno.com",[181,557]],["porngem.com",181],["shortit.pw",[181,256]],["familyporn.tv",181],["sbplay.*",181],["85po.com",[181,241]],["milfnut.*",181],["k1nk.co",181],["watchasians.cc",181],["sankakucomplex.com",182],["player.glomex.com",183],["merkur.de",183],["tz.de",183],["sxyprn.*",184],["hqq.*",[185,186]],["waaw.*",[186,187]],["hotpornfile.org",186],["younetu.*",186],["multiup.us",186],["peliculas8k.com",[186,187]],["czxxx.org",186],["vtplayer.online",186],["vvtplayer.*",186],["netu.ac",186],["netu.frembed.lol",186],["123link.*",188],["adshort.*",188],["mitly.us",188],["linkrex.net",188],["linx.cc",188],["oke.io",188],["linkshorts.*",188],["dz4link.com",188],["adsrt.*",188],["linclik.com",188],["shrt10.com",188],["vinaurl.*",188],["loptelink.com",188],["adfloz.*",188],["cut-fly.com",188],["linkfinal.com",188],["payskip.org",188],["cutpaid.com",188],["linkjust.com",188],["leechpremium.link",188],["icutlink.com",[188,275]],["oncehelp.com",188],["rgl.vn",188],["reqlinks.net",188],["bitlk.com",188],["qlinks.eu",188],["link.3dmili.com",188],["short-fly.com",188],["foxseotools.com",188],["dutchycorp.*",188],["shortearn.*",188],["pingit.*",188],["link.turkdown.com",188],["7r6.com",188],["oko.sh",188],["ckk.ai",188],["fc.lc",188],["fstore.biz",188],["shrink.*",188],["cuts-url.com",188],["eio.io",188],["exe.app",188],["exee.io",188],["exey.io",188],["skincarie.com",188],["exeo.app",188],["tmearn.*",188],["coinlyhub.com",[188,337]],["adsafelink.com",188],["aii.sh",188],["megalink.*",188],["cybertechng.com",[188,350]],["cutdl.xyz",188],["iir.ai",188],["shorteet.com",[188,368]],["miniurl.*",188],["smoner.com",188],["gplinks.*",188],["odisha-remix.com",[188,350]],["xpshort.com",[188,350]],["upshrink.com",188],["clk.*",188],["easysky.in",188],["veganab.co",188],["golink.bloggerishyt.in",188],["birdurls.com",188],["vipurl.in",188],["jameeltips.us",188],["promo-visits.site",188],["satoshi-win.xyz",[188,384]],["shorterall.com",188],["encurtandourl.com",188],["forextrader.site",188],["postazap.com",188],["cety.app",188],["exego.app",[188,382]],["cutlink.net",188],["cutyurls.com",188],["cutty.app",188],["cutnet.net",188],["jixo.online",188],["tinys.click",[188,350]],["cpm.icu",188],["panyshort.link",188],["enagato.com",188],["pandaznetwork.com",188],["tpi.li",188],["oii.la",188],["recipestutorials.com",188],["shrinkme.*",188],["shrinke.*",188],["mrproblogger.com",188],["themezon.net",188],["shrinkforearn.in",188],["oii.io",188],["du-link.in",188],["atglinks.com",188],["thotpacks.xyz",188],["megaurl.in",188],["megafly.in",188],["simana.online",188],["fooak.com",188],["joktop.com",188],["evernia.site",188],["falpus.com",188],["link.paid4link.com",188],["exalink.fun",188],["shortxlinks.com",188],["upfion.com",188],["upfiles.app",188],["upfiles-urls.com",188],["flycutlink.com",[188,350]],["linksly.co",188],["link1s.*",188],["pkr.pw",188],["imagenesderopaparaperros.com",188],["shortenbuddy.com",188],["apksvip.com",188],["4cash.me",188],["namaidani.com",188],["shortzzy.*",188],["teknomuda.com",188],["shorttey.*",[188,336]],["miuiku.com",188],["savelink.site",188],["lite-link.*",188],["adcorto.*",188],["samaa-pro.com",188],["miklpro.com",188],["modapk.link",188],["ccurl.net",188],["linkpoi.me",188],["pewgame.com",188],["haonguyen.top",188],["zshort.*",188],["crazyblog.in",188],["cutearn.net",188],["rshrt.com",188],["filezipa.com",188],["dz-linkk.com",188],["upfiles.*",188],["theblissempire.com",188],["finanzas-vida.com",188],["adurly.cc",188],["paid4.link",188],["link.asiaon.top",188],["go.gets4link.com",188],["linkfly.*",188],["beingtek.com",188],["shorturl.unityassets4free.com",188],["disheye.com",188],["techymedies.com",188],["za.gl",[188,289]],["bblink.com",188],["myad.biz",188],["swzz.xyz",188],["vevioz.com",188],["charexempire.com",188],["clk.asia",188],["sturls.com",188],["myshrinker.com",188],["wplink.*",188],["rocklink.in",188],["techgeek.digital",188],["download3s.net",188],["shortx.net",188],["tlin.me",188],["bestcash2020.com",188],["adslink.pw",[188,638]],["novelssites.com",188],["faucetcrypto.net",188],["trxking.xyz",188],["weadown.com",188],["m.bloggingguidance.com",188],["link.codevn.net",188],["link4rev.site",188],["c2g.at",188],["bitcosite.com",[188,571]],["cryptosh.pro",188],["windowslite.net",[188,350]],["viewfr.com",188],["cl1ca.com",188],["4br.me",188],["fir3.net",188],["seulink.*",188],["encurtalink.*",188],["kiddyshort.com",188],["watchmygf.me",[189,214]],["camwhores.*",[189,199,240,241,242]],["camwhorez.tv",[189,199,240,241]],["cambay.tv",[189,221,240,267,269,270,271,272]],["fpo.xxx",[189,221]],["sexemix.com",189],["heavyfetish.com",[189,755]],["thotcity.su",189],["viralxxxporn.com",[189,401]],["tube8.*",[190,191]],["you-porn.com",191],["youporn.*",191],["youporngay.com",191],["youpornru.com",191],["redtube.*",191],["9908ww.com",191],["adelaidepawnbroker.com",191],["bztube.com",191],["hotovs.com",191],["insuredhome.org",191],["nudegista.com",191],["pornluck.com",191],["vidd.se",191],["pornhub.*",[191,326]],["pornhub.com",191],["pornerbros.com",192],["freep.com",192],["porn.com",193],["tune.pk",194],["noticias.gospelmais.com.br",195],["techperiod.com",195],["viki.com",[196,197]],["watch-series.*",198],["watchseries.*",198],["vev.*",198],["vidop.*",198],["vidup.*",198],["sleazyneasy.com",[199,200,201]],["smutr.com",[199,333]],["tktube.com",199],["yourporngod.com",[199,200]],["javbangers.com",[199,467]],["camfox.com",199],["camthots.tv",[199,267]],["shegotass.info",199],["amateur8.com",199],["bigtitslust.com",199],["ebony8.com",199],["freeporn8.com",199],["lesbian8.com",199],["maturetubehere.com",199],["sortporn.com",199],["motherporno.com",[199,200,221,269]],["theporngod.com",[199,200]],["watchdirty.to",[199,241,242,270]],["pornsocket.com",202],["luxuretv.com",203],["porndig.com",[204,205]],["webcheats.com.br",206],["ceesty.com",[207,208]],["gestyy.com",[207,208]],["corneey.com",208],["destyy.com",208],["festyy.com",208],["sh.st",208],["mitaku.net",208],["angrybirdsnest.com",209],["zrozz.com",209],["clix4btc.com",209],["4tests.com",209],["goltelevision.com",209],["news-und-nachrichten.de",209],["laradiobbs.net",209],["urlaubspartner.net",209],["produktion.de",209],["cinemaxxl.de",209],["bladesalvador.com",209],["tempr.email",209],["friendproject.net",209],["covrhub.com",209],["trust.zone",209],["business-standard.com",209],["planetsuzy.org",210],["empflix.com",211],["xmovies8.*",212],["masteranime.tv",212],["0123movies.*",212],["gostream.*",212],["gomovies.*",212],["freeviewmovies.com",213],["filehorse.com",213],["guidetnt.com",213],["starmusiq.*",213],["sp-today.com",213],["linkvertise.com",213],["eropaste.net",213],["getpaste.link",213],["sharetext.me",213],["wcofun.*",213],["note.sieuthuthuat.com",213],["gadgets.es",[213,476]],["amateurporn.co",[213,270]],["watchanimesub.net",213],["wcoanimesub.tv",213],["wcoforever.net",213],["transparentcalifornia.com",214],["deepbrid.com",215],["webnovel.com",216],["streamwish.*",[217,218]],["oneupload.to",218],["wishfast.top",218],["rubystm.com",218],["rubyvid.com",218],["rubyvidhub.com",218],["stmruby.com",218],["streamruby.com",218],["schwaebische.de",219],["8tracks.com",220],["3movs.com",221],["bravoerotica.net",[221,269]],["youx.xxx",221],["camclips.tv",[221,333]],["xtits.*",[221,269]],["camflow.tv",[221,269,270,307,401]],["camhoes.tv",[221,267,269,270,307,401]],["xmegadrive.com",221],["xxxymovies.com",221],["xxxshake.com",221],["gayck.com",221],["xhand.com",[221,269]],["analdin.com",[221,269]],["revealname.com",222],["golfchannel.com",223],["stream.nbcsports.com",223],["mathdf.com",223],["gamcore.com",224],["porcore.com",224],["porngames.tv",224],["69games.xxx",224],["asianpornjav.com",224],["javmix.app",224],["haaretz.co.il",225],["haaretz.com",225],["hungama.com",225],["a-o.ninja",225],["anime-odcinki.pl",225],["shortgoo.blogspot.com",225],["tonanmedia.my.id",[225,590]],["isekaipalace.com",225],["plyjam.*",[226,227]],["foxsports.com.au",228],["canberratimes.com.au",228],["thesimsresource.com",229],["fxporn69.*",230],["vipbox.*",231],["viprow.*",231],["nba.com",232],["ctrl.blog",233],["sportlife.es",234],["finofilipino.org",235],["desbloqueador.*",236],["xberuang.*",237],["teknorizen.*",237],["mysflink.blogspot.com",237],["ashemaletube.*",238],["paktech2.com",238],["assia.tv",239],["assia4.com",239],["cwtvembeds.com",[241,268]],["camlovers.tv",241],["porntn.com",241],["pornissimo.org",241],["sexcams-24.com",[241,270]],["watchporn.to",[241,270]],["camwhorez.video",241],["footstockings.com",[241,242,270]],["xmateur.com",[241,242,270]],["multi.xxx",242],["weatherx.co.in",[243,244]],["sunbtc.space",243],["subtorrents.*",245],["subtorrents1.*",245],["newpelis.*",245],["pelix.*",245],["allcalidad.*",245],["infomaniakos.*",245],["ojogos.com.br",246],["powforums.com",247],["supforums.com",247],["studybullet.com",247],["usgamer.net",248],["recordonline.com",248],["freebitcoin.win",249],["e-monsite.com",249],["coindice.win",249],["freiepresse.de",250],["investing.com",251],["tornadomovies.*",252],["mp3fiber.com",253],["chicoer.com",254],["dailybreeze.com",254],["dailybulletin.com",254],["dailynews.com",254],["delcotimes.com",254],["eastbaytimes.com",254],["macombdaily.com",254],["ocregister.com",254],["pasadenastarnews.com",254],["pe.com",254],["presstelegram.com",254],["redlandsdailyfacts.com",254],["reviewjournal.com",254],["santacruzsentinel.com",254],["saratogian.com",254],["sentinelandenterprise.com",254],["sgvtribune.com",254],["tampabay.com",254],["times-standard.com",254],["theoaklandpress.com",254],["trentonian.com",254],["twincities.com",254],["whittierdailynews.com",254],["bostonherald.com",254],["dailycamera.com",254],["sbsun.com",254],["dailydemocrat.com",254],["montereyherald.com",254],["orovillemr.com",254],["record-bee.com",254],["redbluffdailynews.com",254],["reporterherald.com",254],["thereporter.com",254],["timescall.com",254],["timesheraldonline.com",254],["ukiahdailyjournal.com",254],["dailylocal.com",254],["mercurynews.com",254],["suedkurier.de",255],["anysex.com",257],["icdrama.*",258],["mangasail.*",258],["pornve.com",259],["file4go.*",260],["coolrom.com.au",260],["marie-claire.es",261],["gamezhero.com",261],["flashgirlgames.com",261],["onlinesudoku.games",261],["mpg.football",261],["sssam.com",261],["globalnews.ca",262],["drinksmixer.com",263],["leitesculinaria.com",263],["fupa.net",264],["browardpalmbeach.com",265],["dallasobserver.com",265],["houstonpress.com",265],["miaminewtimes.com",265],["phoenixnewtimes.com",265],["westword.com",265],["nowtv.com.tr",266],["caminspector.net",267],["camwhoreshd.com",267],["camgoddess.tv",267],["gay4porn.com",269],["mypornhere.com",269],["mangovideo.*",270],["love4porn.com",270],["thotvids.com",270],["watchmdh.to",270],["celebwhore.com",270],["cluset.com",270],["sexlist.tv",270],["4kporn.xxx",270],["xhomealone.com",270],["lusttaboo.com",[270,536]],["hentai-moon.com",270],["camhub.cc",[270,694]],["mediapason.it",273],["linkspaid.com",273],["tuotromedico.com",273],["neoteo.com",273],["phoneswiki.com",273],["celebmix.com",273],["myneobuxportal.com",273],["oyungibi.com",273],["25yearslatersite.com",273],["jeshoots.com",274],["techhx.com",274],["karanapk.com",274],["flashplayer.fullstacks.net",276],["cloudapps.herokuapp.com",276],["youfiles.herokuapp.com",276],["texteditor.nsspot.net",276],["temp-mail.org",277],["asianclub.*",278],["javhdporn.net",278],["vidmoly.*",279],["comnuan.com",280],["veedi.com",281],["battleboats.io",281],["anitube.*",282],["fruitlab.com",282],["haddoz.net",282],["streamingcommunity.*",282],["garoetpos.com",282],["stiletv.it",283],["hqtv.biz",284],["liveuamap.com",285],["audycje.tokfm.pl",286],["shush.se",287],["allkpop.com",288],["empire-anime.*",[289,585,586,587,588,589]],["empire-streaming.*",[289,585,586,587]],["empire-anime.com",[289,585,586,587]],["empire-streamz.fr",[289,585,586,587]],["empire-stream.*",[289,585,586,587]],["pickcrackpasswords.blogspot.com",290],["kfrfansub.com",291],["thuglink.com",291],["voipreview.org",291],["illicoporno.com",292],["lavoixdux.com",292],["tonpornodujour.com",292],["jacquieetmichel.net",292],["swame.com",292],["vosfemmes.com",292],["voyeurfrance.net",292],["jacquieetmicheltv.net",[292,644,645]],["pogo.com",293],["cloudvideo.tv",294],["legionjuegos.org",295],["legionpeliculas.org",295],["legionprogramas.org",295],["16honeys.com",296],["elespanol.com",297],["remodelista.com",298],["audiofanzine.com",302],["uploadev.*",303],["developerinsider.co",304],["thehindu.com",305],["cambro.tv",[306,307]],["boobsradar.com",[307,401,714]],["nibelungen-kurier.de",308],["adfoc.us",309],["tackledsoul.com",309],["adrino1.bonloan.xyz",309],["vi-music.app",309],["instanders.app",309],["rokni.xyz",309],["keedabankingnews.com",309],["tea-coffee.net",309],["spatsify.com",309],["newedutopics.com",309],["getviralreach.in",309],["edukaroo.com",309],["funkeypagali.com",309],["careersides.com",309],["nayisahara.com",309],["wikifilmia.com",309],["infinityskull.com",309],["viewmyknowledge.com",309],["iisfvirtual.in",309],["starxinvestor.com",309],["jkssbalerts.com",309],["sahlmarketing.net",309],["filmypoints.in",309],["fitnessholic.net",309],["moderngyan.com",309],["sattakingcharts.in",309],["bankshiksha.in",309],["earn.mpscstudyhub.com",309],["earn.quotesopia.com",309],["money.quotesopia.com",309],["best-mobilegames.com",309],["learn.moderngyan.com",309],["bharatsarkarijobalert.com",309],["quotesopia.com",309],["creditsgoal.com",309],["bgmi32bitapk.in",309],["techacode.com",309],["trickms.com",309],["ielts-isa.edu.vn",309],["loan.punjabworks.com",309],["sptfy.be",309],["mcafee-com.com",[309,382]],["pianetamountainbike.it",310],["barchart.com",311],["modelisme.com",312],["parasportontario.ca",312],["prescottenews.com",312],["nrj-play.fr",313],["hackingwithreact.com",314],["gutekueche.at",315],["peekvids.com",316],["playvids.com",316],["pornflip.com",316],["redensarten-index.de",317],["vw-page.com",318],["viz.com",[319,320]],["0rechner.de",321],["configspc.com",322],["xopenload.me",322],["uptobox.com",322],["uptostream.com",322],["japgay.com",323],["mega-debrid.eu",324],["dreamdth.com",325],["diaridegirona.cat",327],["diariodeibiza.es",327],["diariodemallorca.es",327],["diarioinformacion.com",327],["eldia.es",327],["emporda.info",327],["farodevigo.es",327],["laopinioncoruna.es",327],["laopiniondemalaga.es",327],["laopiniondemurcia.es",327],["laopiniondezamora.es",327],["laprovincia.es",327],["levante-emv.com",327],["mallorcazeitung.es",327],["regio7.cat",327],["superdeporte.es",327],["playpaste.com",328],["cnbc.com",329],["firefaucet.win",330],["74k.io",[331,332]],["cloudwish.xyz",332],["gradehgplus.com",332],["javindo.site",332],["javindosub.site",332],["kamehaus.net",332],["movearnpre.com",332],["arabshentai.com>>",332],["javdo.cc>>",332],["javenglish.cc>>",332],["javhd.*>>",332],["javhdz.*>>",332],["roshy.tv>>",332],["sextb.*>>",332],["fullhdxxx.com",334],["pornclassic.tube",335],["tubepornclassic.com",335],["etonline.com",336],["creatur.io",336],["lookcam.*",336],["drphil.com",336],["urbanmilwaukee.com",336],["hideandseek.world",336],["myabandonware.com",336],["kendam.com",336],["wttw.com",336],["synonyms.com",336],["definitions.net",336],["hostmath.com",336],["camvideoshub.com",336],["minhaconexao.com.br",336],["home-made-videos.com",338],["amateur-couples.com",338],["slutdump.com",338],["artificialnudes.com",338],["asianal.xyz",338],["asianmassage.xyz",338],["bdsmkingdom.xyz",338],["brunettedeepthroat.com",338],["compilationtube.xyz",338],["cosplaynsfw.xyz",338],["crazytoys.xyz",338],["deepswapnude.com",338],["fikfak.net",338],["flexxporn.com",338],["handypornos.net",338],["hardcorelesbian.xyz",338],["heimporno.com",338],["instaporno.net",338],["latinabbw.xyz",338],["nsfwhowto.xyz",338],["platinporno.com",338],["pornahegao.xyz",338],["pornfeet.xyz",338],["pornobait.com",338],["pornretro.xyz",338],["redheaddeepthroat.com",338],["romanticlesbian.com",338],["sexfilmkiste.com",338],["sexontheboat.xyz",338],["sexroute.net",338],["sommerporno.com",338],["towheaddeepthroat.com",338],["traumporno.com",338],["dpstream.*",339],["produsat.com",340],["bluemediafiles.*",341],["12thman.com",342],["acusports.com",342],["atlantic10.com",342],["auburntigers.com",342],["baylorbears.com",342],["bceagles.com",342],["bgsufalcons.com",342],["big12sports.com",342],["bigten.org",342],["bradleybraves.com",342],["butlersports.com",342],["cmumavericks.com",342],["conferenceusa.com",342],["cyclones.com",342],["dartmouthsports.com",342],["daytonflyers.com",342],["dbupatriots.com",342],["dbusports.com",342],["denverpioneers.com",342],["fduknights.com",342],["fgcuathletics.com",342],["fightinghawks.com",342],["fightingillini.com",342],["floridagators.com",342],["friars.com",342],["friscofighters.com",342],["gamecocksonline.com",342],["goarmywestpoint.com",342],["gobison.com",342],["goblueraiders.com",342],["gobobcats.com",342],["gocards.com",342],["gocreighton.com",342],["godeacs.com",342],["goexplorers.com",342],["goetbutigers.com",342],["gofrogs.com",342],["gogriffs.com",342],["gogriz.com",342],["golobos.com",342],["gomarquette.com",342],["gopack.com",342],["gophersports.com",342],["goprincetontigers.com",342],["gopsusports.com",342],["goracers.com",342],["goshockers.com",342],["goterriers.com",342],["gotigersgo.com",342],["gousfbulls.com",342],["govandals.com",342],["gowyo.com",342],["goxavier.com",342],["gozags.com",342],["gozips.com",342],["griffinathletics.com",342],["guhoyas.com",342],["gwusports.com",342],["hailstate.com",342],["hamptonpirates.com",342],["hawaiiathletics.com",342],["hokiesports.com",342],["huskers.com",342],["icgaels.com",342],["iuhoosiers.com",342],["jsugamecocksports.com",342],["longbeachstate.com",342],["loyolaramblers.com",342],["lrtrojans.com",342],["lsusports.net",342],["morrisvillemustangs.com",342],["msuspartans.com",342],["muleriderathletics.com",342],["mutigers.com",342],["navysports.com",342],["nevadawolfpack.com",342],["niuhuskies.com",342],["nkunorse.com",342],["nuhuskies.com",342],["nusports.com",342],["okstate.com",342],["olemisssports.com",342],["omavs.com",342],["ovcsports.com",342],["owlsports.com",342],["purduesports.com",342],["redstormsports.com",342],["richmondspiders.com",342],["sfajacks.com",342],["shupirates.com",342],["siusalukis.com",342],["smcgaels.com",342],["smumustangs.com",342],["soconsports.com",342],["soonersports.com",342],["themw.com",342],["tulsahurricane.com",342],["txst.com",342],["txstatebobcats.com",342],["ubbulls.com",342],["ucfknights.com",342],["ucirvinesports.com",342],["uconnhuskies.com",342],["uhcougars.com",342],["uicflames.com",342],["umterps.com",342],["uncwsports.com",342],["unipanthers.com",342],["unlvrebels.com",342],["uoflsports.com",342],["usdtoreros.com",342],["utahstateaggies.com",342],["utepathletics.com",342],["utrockets.com",342],["uvmathletics.com",342],["uwbadgers.com",342],["villanova.com",342],["wkusports.com",342],["wmubroncos.com",342],["woffordterriers.com",342],["1pack1goal.com",342],["bcuathletics.com",342],["bubraves.com",342],["goblackbears.com",342],["golightsgo.com",342],["gomcpanthers.com",342],["goutsa.com",342],["mercerbears.com",342],["pirateblue.com",342],["pirateblue.net",342],["pirateblue.org",342],["quinnipiacbobcats.com",342],["towsontigers.com",342],["tribeathletics.com",342],["tribeclub.com",342],["utepminermaniacs.com",342],["utepminers.com",342],["wkutickets.com",342],["aopathletics.org",342],["atlantichockeyonline.com",342],["bigsouthnetwork.com",342],["bigsouthsports.com",342],["chawomenshockey.com",342],["dbupatriots.org",342],["drakerelays.org",342],["ecac.org",342],["ecacsports.com",342],["emueagles.com",342],["emugameday.com",342],["gculopes.com",342],["godrakebulldog.com",342],["godrakebulldogs.com",342],["godrakebulldogs.net",342],["goeags.com",342],["goislander.com",342],["goislanders.com",342],["gojacks.com",342],["gomacsports.com",342],["gseagles.com",342],["hubison.com",342],["iowaconference.com",342],["ksuowls.com",342],["lonestarconference.org",342],["mascac.org",342],["midwestconference.org",342],["mountaineast.org",342],["niu-pack.com",342],["nulakers.ca",342],["oswegolakers.com",342],["ovcdigitalnetwork.com",342],["pacersports.com",342],["rmacsports.org",342],["rollrivers.com",342],["samfordsports.com",342],["uncpbraves.com",342],["usfdons.com",342],["wiacsports.com",342],["alaskananooks.com",342],["broncathleticfund.com",342],["cameronaggies.com",342],["columbiacougars.com",342],["etownbluejays.com",342],["gobadgers.ca",342],["golancers.ca",342],["gometrostate.com",342],["gothunderbirds.ca",342],["kentstatesports.com",342],["lehighsports.com",342],["lopers.com",342],["lycoathletics.com",342],["lycomingathletics.com",342],["maraudersports.com",342],["mauiinvitational.com",342],["msumavericks.com",342],["nauathletics.com",342],["nueagles.com",342],["nwusports.com",342],["oceanbreezenyc.org",342],["patriotathleticfund.com",342],["pittband.com",342],["principiaathletics.com",342],["roadrunnersathletics.com",342],["sidearmsocial.com",342],["snhupenmen.com",342],["stablerarena.com",342],["stoutbluedevils.com",342],["uwlathletics.com",342],["yumacs.com",342],["collegefootballplayoff.com",342],["csurams.com",342],["cubuffs.com",342],["gobearcats.com",342],["gohuskies.com",342],["mgoblue.com",342],["osubeavers.com",342],["pittsburghpanthers.com",342],["rolltide.com",342],["texassports.com",342],["thesundevils.com",342],["uclabruins.com",342],["wvuathletics.com",342],["wvusports.com",342],["arizonawildcats.com",342],["calbears.com",342],["cuse.com",342],["georgiadogs.com",342],["goducks.com",342],["goheels.com",342],["gostanford.com",342],["insidekstatesports.com",342],["insidekstatesports.info",342],["insidekstatesports.net",342],["insidekstatesports.org",342],["k-stateathletics.com",342],["k-statefootball.net",342],["k-statefootball.org",342],["k-statesports.com",342],["k-statesports.net",342],["k-statesports.org",342],["k-statewomenshoops.com",342],["k-statewomenshoops.net",342],["k-statewomenshoops.org",342],["kstateathletics.com",342],["kstatefootball.net",342],["kstatefootball.org",342],["kstatesports.com",342],["kstatewomenshoops.com",342],["kstatewomenshoops.net",342],["kstatewomenshoops.org",342],["ksuathletics.com",342],["ksusports.com",342],["scarletknights.com",342],["showdownforrelief.com",342],["syracusecrunch.com",342],["texastech.com",342],["theacc.com",342],["ukathletics.com",342],["usctrojans.com",342],["utahutes.com",342],["utsports.com",342],["wsucougars.com",342],["vidlii.com",[342,365]],["tricksplit.io",342],["fangraphs.com",343],["stern.de",344],["geo.de",344],["brigitte.de",344],["schoener-wohnen.de",344],["welt.de",345],["tvspielfilm.de",346],["tvtoday.de",346],["chip.de",346],["focus.de",346],["fitforfun.de",346],["n-tv.de",347],["rtl.de",347],["player.rtl2.de",348],["planetaminecraft.com",349],["cravesandflames.com",350],["codesnse.com",350],["flyad.vip",350],["lapresse.ca",351],["kolyoom.com",352],["ilovephd.com",352],["negumo.com",353],["games.wkb.jp",[354,355]],["kenshi.fandom.com",357],["hausbau-forum.de",358],["homeairquality.org",358],["call4cloud.nl",358],["fake-it.ws",359],["laksa19.github.io",360],["1shortlink.com",361],["u-s-news.com",362],["luscious.net",363],["makemoneywithurl.com",364],["junkyponk.com",364],["healthfirstweb.com",364],["vocalley.com",364],["yogablogfit.com",364],["howifx.com",364],["en.financerites.com",364],["mythvista.com",364],["livenewsflix.com",364],["cureclues.com",364],["apekite.com",364],["enit.in",364],["iammagnus.com",365],["dailyvideoreports.net",365],["unityassets4free.com",365],["docer.*",366],["resetoff.pl",366],["sexodi.com",366],["cdn77.org",367],["momxxxsex.com",368],["penisbuyutucum.net",368],["ujszo.com",369],["newsmax.com",370],["nadidetarifler.com",371],["siz.tv",371],["suzylu.co.uk",[372,373]],["onworks.net",374],["yabiladi.com",374],["downloadsoft.net",375],["newsobserver.com",376],["arkadiumhosted.com",376],["testlanguages.com",377],["newsinlevels.com",377],["videosinlevels.com",377],["procinehub.com",378],["bookmystrip.com",378],["imagereviser.com",379],["pubgaimassist.com",380],["gyanitheme.com",380],["tech.trendingword.com",380],["blog.potterworld.co",380],["hipsonyc.com",380],["tech.pubghighdamage.com",380],["blog.itijobalert.in",380],["techkhulasha.com",380],["jiocinema.com",380],["rapid-cloud.co",380],["uploadmall.com",380],["4funbox.com",381],["nephobox.com",381],["1024tera.com",381],["terabox.*",381],["starkroboticsfrc.com",382],["sinonimos.de",382],["antonimos.de",382],["quesignifi.ca",382],["tiktokrealtime.com",382],["tiktokcounter.net",382],["tpayr.xyz",382],["poqzn.xyz",382],["ashrfd.xyz",382],["rezsx.xyz",382],["tryzt.xyz",382],["ashrff.xyz",382],["rezst.xyz",382],["dawenet.com",382],["erzar.xyz",382],["waezm.xyz",382],["waezg.xyz",382],["blackwoodacademy.org",382],["cryptednews.space",382],["vivuq.com",382],["swgop.com",382],["vbnmll.com",382],["telcoinfo.online",382],["dshytb.com",382],["btcbitco.in",[382,383]],["btcsatoshi.net",382],["cempakajaya.com",382],["crypto4yu.com",382],["readbitcoin.org",382],["wiour.com",382],["finish.addurl.biz",382],["aiimgvlog.fun",[382,386]],["laweducationinfo.com",382],["savemoneyinfo.com",382],["worldaffairinfo.com",382],["godstoryinfo.com",382],["successstoryinfo.com",382],["cxissuegk.com",382],["learnmarketinfo.com",382],["bhugolinfo.com",382],["armypowerinfo.com",382],["rsgamer.app",382],["phonereviewinfo.com",382],["makeincomeinfo.com",382],["gknutshell.com",382],["vichitrainfo.com",382],["workproductivityinfo.com",382],["dopomininfo.com",382],["hostingdetailer.com",382],["fitnesssguide.com",382],["tradingfact4u.com",382],["cryptofactss.com",382],["softwaredetail.com",382],["artoffocas.com",382],["insurancesfact.com",382],["travellingdetail.com",382],["advertisingexcel.com",382],["allcryptoz.net",382],["batmanfactor.com",382],["beautifulfashionnailart.com",382],["crewbase.net",382],["documentaryplanet.xyz",382],["crewus.net",382],["gametechreviewer.com",382],["midebalonu.net",382],["misterio.ro",382],["phineypet.com",382],["seory.xyz",382],["shinbhu.net",382],["shinchu.net",382],["substitutefor.com",382],["talkforfitness.com",382],["thefitbrit.co.uk",382],["thumb8.net",382],["thumb9.net",382],["topcryptoz.net",382],["uniqueten.net",382],["ultraten.net",382],["exactpay.online",382],["quins.us",382],["kiddyearner.com",382],["bildirim.*",385],["arahdrive.com",386],["appsbull.com",387],["diudemy.com",387],["maqal360.com",[387,388,389]],["lifesurance.info",390],["akcartoons.in",391],["cybercityhelp.in",391],["dl.apkmoddone.com",392],["phongroblox.com",392],["fuckingfast.net",393],["buzzheavier.com",393],["tickhosting.com",394],["in91vip.win",395],["datavaults.co",396],["t-online.de",398],["upornia.*",[399,400]],["bobs-tube.com",401],["pornohirsch.net",402],["bembed.net",403],["embedv.net",403],["javguard.club",403],["listeamed.net",403],["v6embed.xyz",403],["vembed.*",403],["vid-guard.com",403],["vinomo.xyz",403],["nekolink.site",[404,405]],["141jav.com",406],["141tube.com",406],["aagmaal.com",406],["camcam.cc",406],["evojav.pro",406],["javneon.tv",406],["javsaga.ninja",406],["nyahentai.re",406],["torrentkitty.one",406],["webmaal.cfd",406],["pixsera.net",407],["jnews5.com",408],["pc-builds.com",409],["today.com",409],["videogamer.com",409],["wrestlinginc.com",409],["azcentral.com",410],["coloradoan.com",410],["greenbaypressgazette.com",410],["palmbeachpost.com",410],["usatoday.com",[410,411]],["ydr.com",410],["247sports.com",412],["indiatimes.com",413],["netzwelt.de",414],["filmibeat.com",415],["goodreturns.in",415],["mykhel.com",415],["daemonanime.net",415],["luckydice.net",415],["weatherwx.com",415],["sattaguess.com",415],["winshell.de",415],["rosasidan.ws",415],["upiapi.in",415],["networkhint.com",415],["thichcode.net",415],["texturecan.com",415],["tikmate.app",[415,626]],["arcaxbydz.id",415],["quotesshine.com",415],["worldhistory.org",416],["arcade.buzzrtv.com",417],["arcade.dailygazette.com",417],["arcade.lemonde.fr",417],["arena.gamesforthebrain.com",417],["bestpuzzlesandgames.com",417],["cointiply.arkadiumarena.com",417],["gamelab.com",417],["gameplayneo.com",417],["games.abqjournal.com",417],["games.arkadium.com",417],["games.amny.com",417],["games.bellinghamherald.com",417],["games.besthealthmag.ca",417],["games.bnd.com",417],["games.boston.com",417],["games.bostonglobe.com",417],["games.bradenton.com",417],["games.centredaily.com",417],["games.charlottegames.cnhinews.com",417],["games.crosswordgiant.com",417],["games.dailymail.co.uk",417],["games.dallasnews.com",417],["games.daytondailynews.com",417],["games.denverpost.com",417],["games.everythingzoomer.com",417],["games.fresnobee.com",417],["games.gameshownetwork.com",417],["games.get.tv",417],["games.greatergood.com",417],["games.heraldonline.com",417],["games.heraldsun.com",417],["games.idahostatesman.com",417],["games.insp.com",417],["games.islandpacket.com",417],["games.journal-news.com",417],["games.kansas.com",417],["games.kansascity.com",417],["games.kentucky.com",417],["games.lancasteronline.com",417],["games.ledger-enquirer.com",417],["games.macon.com",417],["games.mashable.com",417],["games.mercedsunstar.com",417],["games.metro.us",417],["games.metv.com",417],["games.miamiherald.com",417],["games.modbee.com",417],["games.moviestvnetwork.com",417],["games.myrtlebeachonline.com",417],["games.games.newsgames.parade.com",417],["games.pressdemocrat.com",417],["games.puzzlebaron.com",417],["games.puzzler.com",417],["games.puzzles.ca",417],["games.qns.com",417],["games.readersdigest.ca",417],["games.sacbee.com",417],["games.sanluisobispo.com",417],["games.sixtyandme.com",417],["games.sltrib.com",417],["games.springfieldnewssun.com",417],["games.star-telegram.com",417],["games.startribune.com",417],["games.sunherald.com",417],["games.theadvocate.com",417],["games.thenewstribune.com",417],["games.theolympian.com",417],["games.theportugalnews.com",417],["games.thestar.com",417],["games.thestate.com",417],["games.tri-cityherald.com",417],["games.triviatoday.com",417],["games.usnews.com",417],["games.word.tips",417],["games.wordgenius.com",417],["games.wtop.com",417],["jeux.meteocity.com",417],["juegos.as.com",417],["juegos.elnuevoherald.com",417],["juegos.elpais.com",417],["philly.arkadiumarena.com",417],["play.dictionary.com",417],["puzzles.bestforpuzzles.com",417],["puzzles.centralmaine.com",417],["puzzles.crosswordsolver.org",417],["puzzles.independent.co.uk",417],["puzzles.nola.com",417],["puzzles.pressherald.com",417],["puzzles.standard.co.uk",417],["puzzles.sunjournal.com",417],["arkadium.com",418],["abysscdn.com",[419,420]],["turtleviplay.xyz",421],["mixdrop.*",422],["ai.hubtoday.app",423],["news.now.com",424],["qub.ca",425],["matele.be",426],["gostyn24.pl",427],["lared.cl",428],["atozmath.com",[428,452,453,454,455,456,457]],["pcbolsa.com",429],["hdfilmizlesen.com",430],["watch.rkplayer.xyz",431],["arcai.com",432],["my-code4you.blogspot.com",433],["flickr.com",434],["firefile.cc",435],["pestleanalysis.com",435],["kochamjp.pl",435],["tutorialforlinux.com",435],["whatsaero.com",435],["animeblkom.net",[435,449]],["blkom.com",435],["globes.co.il",[436,437]],["jardiner-malin.fr",438],["tw-calc.net",439],["ohmybrush.com",440],["talkceltic.net",441],["mentalfloss.com",442],["uprafa.com",443],["cube365.net",444],["wwwfotografgotlin.blogspot.com",445],["freelistenonline.com",445],["badassdownloader.com",446],["quickporn.net",447],["yellowbridge.com",448],["aosmark.com",450],["ctrlv.*",451],["newyorker.com",458],["brighteon.com",[459,460]],["more.tv",461],["video1tube.com",462],["alohatube.xyz",462],["4players.de",463],["onlinesoccermanager.com",463],["fshost.me",464],["link.cgtips.org",465],["hentaicloud.com",466],["paperzonevn.com",468],["9jarock.org",469],["fzmovies.info",469],["fztvseries.ng",469],["netnaijas.com",469],["hentaienglish.com",470],["hentaiporno.xxx",470],["venge.io",[471,472]],["its.porn",[473,474]],["atv.at",475],["2ndrun.tv",476],["rackusreads.com",476],["teachmemicro.com",476],["willcycle.com",476],["kusonime.com",[477,478]],["123movieshd.*",479],["imgur.com",[480,481,756]],["hentai-party.com",482],["hentaicomics.pro",482],["uproxy.*",483],["animesa.*",484],["subtitleone.cc",485],["mysexgames.com",486],["ancient-origins.*",487],["cinecalidad.*",[488,489]],["xnxx.*",490],["xvideos.*",490],["gdr-online.com",491],["mmm.dk",492],["iqiyi.com",[493,494,616]],["m.iqiyi.com",495],["nbcolympics.com",496],["apkhex.com",497],["indiansexstories2.net",498],["issstories.xyz",498],["1340kbbr.com",499],["gorgeradio.com",499],["kduk.com",499],["kedoam.com",499],["kejoam.com",499],["kelaam.com",499],["khsn1230.com",499],["kjmx.rocks",499],["kloo.com",499],["klooam.com",499],["klykradio.com",499],["kmed.com",499],["kmnt.com",499],["kpnw.com",499],["kppk983.com",499],["krktcountry.com",499],["ktee.com",499],["kwro.com",499],["kxbxfm.com",499],["thevalley.fm",499],["quizlet.com",500],["dsocker1234.blogspot.com",501],["schoolcheats.net",[502,503]],["mgnet.xyz",504],["designtagebuch.de",505],["pixroute.com",506],["uploady.io",507],["calculator-online.net",508],["porngames.club",509],["sexgames.xxx",509],["111.90.159.132",510],["mobile-tracker-free.com",511],["social-unlock.com",512],["superpsx.com",513],["ninja.io",514],["sourceforge.net",515],["samfirms.com",516],["rapelust.com",517],["vtube.to",517],["desitelugusex.com",517],["dvdplay.*",517],["xvideos-downloader.net",517],["xxxvideotube.net",517],["sdefx.cloud",517],["nozomi.la",517],["banned.video",518],["madmaxworld.tv",518],["androidpolice.com",518],["babygaga.com",518],["backyardboss.net",518],["carbuzz.com",518],["cbr.com",518],["collider.com",518],["dualshockers.com",518],["footballfancast.com",518],["footballleagueworld.co.uk",518],["gamerant.com",518],["givemesport.com",518],["hardcoregamer.com",518],["hotcars.com",518],["howtogeek.com",518],["makeuseof.com",518],["moms.com",518],["movieweb.com",518],["pocket-lint.com",518],["pocketnow.com",518],["screenrant.com",518],["simpleflying.com",518],["thegamer.com",518],["therichest.com",518],["thesportster.com",518],["thethings.com",518],["thetravel.com",518],["topspeed.com",518],["xda-developers.com",518],["huffpost.com",519],["ingles.com",520],["spanishdict.com",520],["surfline.com",[521,522]],["play.tv3.ee",523],["play.tv3.lt",523],["play.tv3.lv",[523,524]],["tv3play.skaties.lv",523],["bulbagarden.net",525],["hollywoodlife.com",526],["mat6tube.com",527],["hotabis.com",528],["root-nation.com",528],["italpress.com",528],["airsoftmilsimnews.com",528],["artribune.com",528],["newtumbl.com",529],["apkmaven.*",530],["photopea.com",531],["aruble.net",532],["nevcoins.club",533],["mail.com",534],["gmx.*",535],["mangakita.id",537],["avpgalaxy.net",538],["panda-novel.com",539],["lightsnovel.com",539],["eaglesnovel.com",539],["pandasnovel.com",539],["ewrc-results.com",540],["kizi.com",541],["cyberscoop.com",542],["fedscoop.com",542],["jeep-cj.com",543],["sponsorhunter.com",544],["cloudcomputingtopics.net",545],["likecs.com",546],["tiscali.it",547],["linkspy.cc",548],["adshnk.com",549],["chattanoogan.com",550],["adsy.pw",551],["playstore.pw",551],["windowspro.de",552],["tvtv.ca",553],["tvtv.us",553],["mydaddy.cc",554],["roadtrippin.fr",555],["vavada5com.com",556],["anyporn.com",[557,574]],["bravoporn.com",557],["bravoteens.com",557],["crocotube.com",557],["hellmoms.com",557],["hellporno.com",557],["sex3.com",557],["tubewolf.com",557],["xbabe.com",557],["xcum.com",557],["zedporn.com",557],["imagetotext.info",558],["infokik.com",559],["freepik.com",560],["ddwloclawek.pl",[561,562]],["www.seznam.cz",563],["deezer.com",564],["my-subs.co",565],["plaion.com",566],["slideshare.net",[567,568]],["ustreasuryyieldcurve.com",569],["businesssoftwarehere.com",570],["goo.st",570],["freevpshere.com",570],["softwaresolutionshere.com",570],["gamereactor.*",572],["madoohd.com",573],["doomovie-hd.*",573],["staige.tv",575],["androidadult.com",576],["streamvid.net",577],["watchtv24.com",578],["cellmapper.net",579],["medscape.com",580],["newscon.org",[581,582]],["wheelofgold.com",583],["drakecomic.*",583],["app.blubank.com",584],["mobileweb.bankmellat.ir",584],["ccthesims.com",591],["chromeready.com",591],["dtbps3games.com",591],["illustratemagazine.com",591],["uknip.co.uk",591],["vod.pl",592],["megadrive-emulator.com",593],["tvhay.*",[594,595]],["moviesapi.club",596],["watchx.top",596],["digimanie.cz",597],["svethardware.cz",597],["srvy.ninja",598],["chat.tchatche.com",[599,600]],["cnn.com",[601,602,603]],["news.bg",604],["edmdls.com",605],["freshremix.net",605],["scenedl.org",605],["trakt.tv",606],["shroomers.app",607],["classicalradio.com",608],["di.fm",608],["jazzradio.com",608],["radiotunes.com",608],["rockradio.com",608],["zenradio.com",608],["getthit.com",609],["techedubyte.com",610],["iwanttfc.com",611],["nutraingredients-asia.com",612],["nutraingredients-latam.com",612],["nutraingredients-usa.com",612],["nutraingredients.com",612],["ozulscansen.com",613],["nexusmods.com",614],["lookmovie.*",615],["lookmovie2.to",615],["biletomat.pl",617],["hextank.io",[618,619]],["filmizlehdfilm.com",[620,621,622,623]],["filmizletv.*",[620,621,622,623]],["fullfilmizle.cc",[620,621,622,623]],["gofilmizle.net",[620,621,622,623]],["cimanow.cc",624],["bgmiupdate.com.in",624],["freex2line.online",625],["btvplus.bg",627],["sagewater.com",628],["redlion.net",628],["filmweb.pl",629],["satdl.com",630],["vidstreaming.xyz",631],["everand.com",632],["myradioonline.pl",633],["cbs.com",634],["paramountplus.com",634],["colourxh.site",635],["fullxh.com",635],["galleryxh.site",635],["megaxh.com",635],["movingxh.world",635],["seexh.com",635],["unlockxh4.com",635],["valuexh.life",635],["xhaccess.com",635],["xhadult2.com",635],["xhadult3.com",635],["xhadult4.com",635],["xhadult5.com",635],["xhamster.*",635],["xhamster1.*",635],["xhamster10.*",635],["xhamster11.*",635],["xhamster12.*",635],["xhamster13.*",635],["xhamster14.*",635],["xhamster15.*",635],["xhamster16.*",635],["xhamster17.*",635],["xhamster18.*",635],["xhamster19.*",635],["xhamster20.*",635],["xhamster2.*",635],["xhamster3.*",635],["xhamster4.*",635],["xhamster42.*",635],["xhamster46.com",635],["xhamster5.*",635],["xhamster7.*",635],["xhamster8.*",635],["xhamsterporno.mx",635],["xhbig.com",635],["xhbranch5.com",635],["xhchannel.com",635],["xhdate.world",635],["xhlease.world",635],["xhmoon5.com",635],["xhofficial.com",635],["xhopen.com",635],["xhplanet1.com",635],["xhplanet2.com",635],["xhreal2.com",635],["xhreal3.com",635],["xhspot.com",635],["xhtotal.com",635],["xhtree.com",635],["xhvictory.com",635],["xhwebsite.com",635],["xhwebsite2.com",635],["xhwebsite5.com",635],["xhwide1.com",635],["xhwide2.com",635],["xhwide5.com",635],["file-upload.net",636],["tunein.com",637],["acortalo.*",[639,640,641,642]],["acortar.*",[639,640,641,642]],["hentaihaven.xxx",643],["jacquieetmicheltv2.net",645],["a2zapk.*",646],["fcportables.com",[647,648]],["emurom.net",649],["freethesaurus.com",[650,651]],["thefreedictionary.com",[650,651]],["oeffentlicher-dienst.info",652],["im9.eu",[653,654]],["dcdlplayer8a06f4.xyz",655],["ultimate-guitar.com",656],["claimbits.net",657],["sexyscope.net",658],["kickassanime.*",659],["recherche-ebook.fr",660],["virtualdinerbot.com",660],["zonebourse.com",661],["pink-sluts.net",662],["andhrafriends.com",663],["benzinpreis.de",664],["defenseone.com",665],["govexec.com",665],["nextgov.com",665],["route-fifty.com",665],["sharing.wtf",666],["wetter3.de",667],["esportivos.fun",668],["cosmonova-broadcast.tv",669],["538.nl",670],["hartvannederland.nl",670],["kijk.nl",670],["shownieuws.nl",670],["vandaaginside.nl",670],["rock.porn",[671,672]],["videzz.net",[673,674]],["ezaudiobookforsoul.com",675],["club386.com",676],["decompiler.com",[677,678]],["littlebigsnake.com",679],["easyfun.gg",680],["smailpro.com",681],["ilgazzettino.it",682],["ilmessaggero.it",682],["3bmeteo.com",[683,684]],["mconverter.eu",685],["lover937.net",686],["10gb.vn",687],["pes6.es",688],["tactics.tools",[689,690]],["boundhub.com",691],["reliabletv.me",692],["filecrypt.*",693],["wired.com",695],["spankbang.*",[696,697,698,760,761]],["hulu.com",[699,700,701]],["hanime.tv",702],["nhentai.net",[703,704,705]],["pouvideo.*",706],["povvideo.*",706],["povw1deo.*",706],["povwideo.*",706],["powv1deo.*",706],["powvibeo.*",706],["powvideo.*",706],["powvldeo.*",706],["powcloud.org",707],["primevideo.com",708],["read.amazon.*",[708,709]],["anonymfile.com",710],["gofile.to",710],["dotycat.com",711],["rateyourmusic.com",712],["reporterpb.com.br",713],["blog-dnz.com",715],["18adultgames.com",716],["colnect.com",[717,718]],["adultgamesworld.com",719],["servustv.com",[720,721]],["reviewdiv.com",722],["parametric-architecture.com",723],["voiceofdenton.com",724],["concealednation.org",724],["askattest.com",725],["opensubtitles.com",726],["savefiles.com",727],["streamup.ws",728],["pfps.gg",729],["goodstream.one",730],["lecrabeinfo.net",731],["cerberusapp.com",732],["smashkarts.io",733],["beamng.wesupply.cx",734],["wowtv.de",[735,736]],["jsfiddle.net",[737,738]],["musicbusinessworldwide.com",739],["mahfda.com",740],["agar.live",741],["dailymotion.com",742],["scribd.com",743],["live.arynews.tv",744],["pornlore.com",[745,746]],["91porn.com",747],["spedostream2.shop",748],["play.watch20.space",748],["www.google.*",749],["dataunlocker.com",[750,751]],["tacobell.com",752],["zefoy.com",753],["cnet.com",754],["trendyol.com",[757,758]],["trendyol-milla.com",[757,758]],["natgeotv.com",759],["globo.com",762],["linklog.tiagorangel.com",764],["wayfair.com",765]]);
const exceptionsMap = new Map([["cloudflare.com",[0]],["pingit.com",[188]],["loan.bgmi32bitapk.in",[309]],["lookmovie.studio",[615]]]);
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
