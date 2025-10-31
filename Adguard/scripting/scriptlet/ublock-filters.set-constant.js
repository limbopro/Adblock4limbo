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
const argsList = [["console.clear","undefined"],["adBlockDetected","undefined"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["dvtag.getTargeting","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["googletag.cmd","{}"],["_aps","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["google.ima.settings.setDisableFlashAds","noopFunc"],["pa.privacy","{}"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505","{}"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["ga.sendGaEvent","noopFunc"],["adobe","{}"],["MT","{}"],["MT.track","noopFunc"],["ClickOmniPartner","noopFunc"],["adex","{}"],["adex.getAdexUser","noopFunc"],["Adkit","noopFunc"],["Object.prototype.shouldExpectGoogleCMP","false"],["apntag.refresh","noopFunc"],["pa.sendEvent","noopFunc"],["Munchkin","{}"],["Munchkin.init","noopFunc"],["ttd_dom_ready","noopFunc"],["ramp","undefined"],["appInfo.snowplow.trackSelfDescribingEvent","noopFunc"],["_vwo_code.init","noopFunc"],["adobePageView","noopFunc"],["dapTracker","{}"],["dapTracker.track","noopFunc"],["newrelic","{}"],["newrelic.setCustomAttribute","noopFunc"],["adobeDataLayer","{}"],["adobeDataLayer.push","noopFunc"],["Object.prototype._adsDisabled","true"],["utag","{}"],["utag.link","noopFunc"],["_satellite.kpCustomEvent","noopFunc"],["Object.prototype.disablecommercials","true"],["Object.prototype._autoPlayOnlyWithPrerollAd","false"],["Sentry.addBreadcrumb","noopFunc"],["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["_ml_ads_ns","null"],["_sp_.config","undefined"],["AdController","noopFunc"],["console.clear","noopFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["console.clear","trueFunc"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["check_adblock","true"],["isAdBlockActive","false"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["adBlockEnabled","false"],["puShown","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["__NEXT_DATA__.props.clientConfigSettings.videoAds","undefined"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["openPopunder","noopFunc"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["CaptchmeState.adb","undefined"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["HTMLAnchorElement.prototype.click","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["check","true"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["runAdBlocker","false"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["cnbc.canShowAds","true"],["firefaucet","true"],["cRAds","true"],["uas","[]"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["foundation.adPlayer.bitmovin","{}"],["weltConfig.switches.videoAdBlockBlocker","false"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["Object.prototype.adReinsertion","noopFunc"],["getHomadConfig","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["ulp_noadb","true"],["Object.prototype.adblock_detected","false"],["timeSec","0"],["adsbygoogle.loaded","true"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["Adv_ab","false"],["sgpbCanRunAds","true"],["document.hidden","false"],["hasFocus","trueFunc"],["navigator.brave","undefined"],["Object.prototype.isAllAdClose","true"],["document.hasFocus","trueFunc"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["navigator.webkitTemporaryStorage.queryUsageAndQuota","noopFunc"],["document.onkeydown","noopFunc"],["showadas","true"],["alert","throwFunc"],["aSl.gcd","0"],["window.adLink","null"],["detectedAdblock","undefined"],["isTabActive","true"],["clicked","2"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["flashvars.mlogo",""],["vpPrerollVideo","undefined"],["PlayerConfig.config.CustomAdSetting","[]"],["PlayerConfig.trusted","true"],["PlayerConfig.config.AffiliateAdViewLevel","3"],["univresalP","noopFunc"],["hold_click","false"],["tie.ad_blocker_detector","false"],["admiral","noopFunc"],["gnt.x.uam"],["gnt.u.z","true"],["__INITIAL_DATA__.siteData.admiralScript"],["objAd.loadAdShield","noopFunc"],["window.myAd.runAd","noopFunc"],["detectAdBlock","noopFunc"],["AHE.is_member","1"],["__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["document.ontouchend","null"],["document.onclick","null"],["playID","1"],["MDCore.adblock","0"],["killads","true"],["NMAFMediaPlayerController.vastManager.vastShown","true"],["__NEXT_DATA__.runtimeConfig._qub_sdk.qubConfig.video.adBlockerDetectorEnabled","false"],["arePiratesOnBoard","false"],["googletag._loaded_","true"],["NoTenia","false"],["app._data.ads","[]"],["adsPlayer","undefined"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["__NEXT_DATA__.props.pageProps.adVideo","undefined"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["xv_ad_block","0"],["openWindow","noopFunc"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["showada","true"],["showax","true"],["p18","undefined"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["Object.prototype.adblockFound","false"],["createCanvas","noopFunc"],["document.bridCanRunAds","true"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["xv.sda.pp.init","noopFunc"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ad_link",""],["penciBlocksArray","[]"],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["D4zz","noopFunc"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["tv3Cmp.ConsentGiven","true"],["setupSkin","noopFunc"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["td_ad_background_click_link","undefined"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["puShown1","true"],["passthetest","true"],["pandaAdviewValidate","true"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["abpblocked","undefined"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["sssp","emptyObj"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["adSettings","[]"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["googletag","true"],["tOS2","150"],["checkAdBlocker","noopFunc"],["navigator.standalone","true"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["feedBack.showAffilaePromo","noopFunc"],["ShowAdvertising","{}"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["HTMLScriptElement.prototype.onerror","null"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["sharedController.adblockDetector","noopFunc"],["checkAdsStatus","noopFunc"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["checkAdBlockeraz","noopFunc"],["blockingAds","false"],["Yii2App.playbackTimeout","0"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["HTMLImageElement.prototype.onerror","undefined"],["HTMLImageElement.prototype.onload","undefined"],["powerAPITag","emptyObj"],["playerEnhancedConfig.run","throwFunc"],["aoAdBlockDetected","false"],["rodo.checkIsDidomiConsent","noopFunc"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["hasAdBlocker","false"],["initials.yld-pdpopunder",""],["advertisement3","true"],["Object.prototype.skipPreroll","true"],["DisableDevtool","noopFunc"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["dvsize","52"],["majorse","true"],["completed","1"],["testerli","false"],["w87.abd","noopFunc"],["w87.dsab","noopFunc"],["document.referrer",""],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["one_time","1"],["consentGiven","true"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["malisx","true"],["alim","true"],["ADS.isBannersEnabled","false"],["EASYFUN_ADS_CAN_RUN","true"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["detectedAdblock","noopFunc"],["Object.prototype.DetectByGoogleAd","noopFunc"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["NativeAd","noopFunc"],["window.navigator.brave","undefined"],["HTMLScriptElement.prototype.onerror","undefined"],["isAdblock","false"],["openPop","noopFunc"],["cns.library","true"],["BJSShowUnder","{}"],["BJSShowUnder.bindTo","noopFunc"],["BJSShowUnder.add","noopFunc"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["ABLK","false"],["_n_app.popunder","null"],["_n_app.options.ads.show_popunders","false"],["N_BetterJsPop.object","{}"],["isAdb","false"],["puOverlay","noopFunc"],["ue_adb_chk","1"],["countDown","0"],["runCheck","noopFunc"],["adsSlotRenderEndSeen","true"],["showModal","noopFunc"],["flashvars.mlogo_link",""],["isAdBlocked","noopFunc"],["URLlist","[]"],["aaw","{}"],["aaw.processAdsOnPage","noopFunc"],["doOpen","undefined"],["OneTrust","{}"],["OneTrust.IsAlertBoxClosed","trueFunc"],["FOXIZ_MAIN_SCRIPT.siteAccessDetector","noopFunc"],["openAdBlockPopup","noopFunc"],["advanced_ads_check_adblocker","noopFunc"],["canRunAds","1"],["attestHasAdBlockerActivated","true"],["extInstalled","true"],["SaveFiles.add","noopFunc"],["detectSandbox","noopFunc"],["ga","trueFunc"],["adbon","0"],["LCI.adBlockDetectorEnabled","false"],["stoCazzo","true"],["adblockDetected","false"],["importFAB","undefined"],["window.__CONFIGURATION__.adInsertion.enabled","false"],["window.__CONFIGURATION__.features.enableAdBlockerDetection","false"],["_carbonads","{}"],["_bsa","{}"],["uberad_mode"],["__aab_init","true"],["show_videoad_limited","noopFunc"],["__NATIVEADS_CANARY__","true"],["docManager.doDynamicBlurring","noopFunc"],["Object.prototype.adOnAdBlockPreventPlayback","false"],["pre_roll_url"],["post_roll_url"],["player.preroll","noopFunc"],["rwt","noopFunc"],["_hjSettings","undefined"],["google_tag_manager","undefined"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["Object.prototype.updateModifiedCommerceUrl","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["process","{}"],["process.env","{}"],["Visitor","{}"],["send_gravity_event","noopFunc"],["send_recommendation_event","noopFunc"],["libAnalytics.data.get","noopFunc"],["adthrive._components.start","noopFunc"],["data","true"],["navigator.sendBeacon","noopFunc"]];
const hostnamesMap = new Map([["jilliandescribecompany.com",0],["gogoanime.*",[0,205]],["adrianmissionminute.com",0],["alejandrocenturyoil.com",0],["alleneconomicmatter.com",0],["bethshouldercan.com",0],["bigclatterhomesguideservice.com",0],["brittneystandardwestern.com",0],["brookethoughi.com",0],["brucevotewithin.com",0],["cindyeyefinal.com",0],["denisegrowthwide.com",0],["diananatureforeign.com",0],["donaldlineelse.com",0],["edwardarriveoften.com",0],["erikcoldperson.com",0],["evelynthankregion.com",0],["graceaddresscommunity.com",0],["heatherdiscussionwhen.com",0],["heatherwholeinvolve.com",0],["housecardsummerbutton.com",0],["jamessoundcost.com",0],["jamiesamewalk.com",0],["jasminetesttry.com",0],["jasonresponsemeasure.com",0],["jayservicestuff.com",0],["jennifercertaindevelopment.com",0],["jessicaglassauthor.com",0],["johnalwayssame.com",0],["johntryopen.com",0],["jonathansociallike.com",0],["josephseveralconcern.com",0],["kellywhatcould.com",0],["kennethofficialitem.com",0],["kristiesoundsimply.com",0],["lisatrialidea.com",0],["lorimuchbenefit.com",0],["loriwithinfamily.com",0],["lukecomparetwo.com",0],["lukesitturn.com",0],["mariatheserepublican.com",0],["markstyleall.com",0],["michaelapplysome.com",0],["morganoperationface.com",0],["nathanfromsubject.com",0],["paulkitchendark.com",0],["rebeccaneverbase.com",0],["richardsignfish.com",0],["roberteachfinal.com",0],["robertordercharacter.com",0],["robertplacespace.com",0],["ryanagoinvolve.com",0],["sandratableother.com",0],["sandrataxeight.com",0],["sethniceletter.com",0],["shannonpersonalcost.com",0],["susanhavekeep.com",0],["tinycat-voe-fashion.com",0],["toddpartneranimal.com",0],["troyyourlead.com",0],["uptodatefinishconference.com",0],["uptodatefinishconferenceroom.com",0],["voe.sx",0],["maxfinishseveral.com",0],["voe.sx>>",0],["javboys.tv>>",0],["freeplayervideo.com",0],["nazarickol.com",0],["player-cdn.com",0],["playhydrax.com",[0,415,416]],["rabbitstream.net",0],["fmovies.*",0],["u26bekrb.fun",1],["br.de",2],["indeed.com",3],["zillow.com",[3,107]],["pasteboard.co",4],["bbc.com",5],["clickhole.com",6],["deadspin.com",6],["gizmodo.com",6],["jalopnik.com",6],["jezebel.com",6],["kotaku.com",6],["lifehacker.com",6],["splinternews.com",6],["theinventory.com",6],["theonion.com",6],["theroot.com",6],["thetakeout.com",6],["pewresearch.org",6],["los40.com",[7,8]],["as.com",8],["caracol.com.co",8],["telegraph.co.uk",[9,10]],["poweredbycovermore.com",[9,62]],["lumens.com",[9,62]],["verizon.com",11],["humanbenchmark.com",12],["politico.com",13],["officedepot.co.cr",[14,15]],["officedepot.*",[16,17]],["usnews.com",18],["coolmathgames.com",[19,292,293,294]],["video.gazzetta.it",[20,21]],["oggi.it",[20,21]],["manoramamax.com",20],["factable.com",22],["thedailybeast.com",23],["zee5.com",24],["gala.fr",25],["geo.fr",25],["voici.fr",25],["gloucestershirelive.co.uk",26],["arsiv.mackolik.com",27],["jacksonguitars.com",28],["scandichotels.com",29],["stylist.co.uk",30],["nettiauto.com",31],["thaiairways.com",[32,33]],["cerbahealthcare.it",[34,35]],["futura-sciences.com",[34,52]],["toureiffel.paris",34],["campusfrance.org",[34,144]],["tiendaenlinea.claro.com.ni",[36,37]],["tieba.baidu.com",38],["fandom.com",[39,40,352]],["grasshopper.com",[41,42]],["epson.com.cn",[43,44,45,46]],["oe24.at",[47,48]],["szbz.de",47],["platform.autods.com",[49,50]],["kcra.com",51],["wcvb.com",51],["sporteurope.tv",51],["citibank.com.sg",53],["uol.com.br",[54,55,56,57,58]],["gazzetta.gr",59],["digicol.dpm.org.cn",[60,61]],["virginmediatelevision.ie",63],["larazon.es",[64,65]],["waitrosecellar.com",[66,67,68]],["kicker.de",[69,393]],["sharpen-free-design-generator.netlify.app",[70,71]],["help.cashctrl.com",[72,73]],["gry-online.pl",74],["vidaextra.com",75],["commande.rhinov.pro",[76,77]],["ecom.wixapps.net",[76,77]],["prod.hydra.sophos.com",[76,164]],["tipranks.com",[78,79]],["iceland.co.uk",[80,81,82]],["socket.pearsoned.com",83],["tntdrama.com",[84,85]],["trutv.com",[84,85]],["mobile.de",[86,87]],["ioe.vn",[88,89]],["geiriadur.ac.uk",[88,92]],["welsh-dictionary.ac.uk",[88,92]],["bikeportland.org",[90,91]],["biologianet.com",[55,56,57]],["10.com.au",[93,94]],["10play.com.au",[93,94]],["sunshine-live.de",[95,96]],["whatismyip.com",[97,98]],["myfitnesspal.com",99],["netoff.co.jp",[100,101]],["bluerabbitrx.com",[100,101]],["foundit.*",[102,103]],["clickjogos.com.br",104],["bristan.com",[105,106]],["share.hntv.tv",[108,109,110,111]],["forum.dji.com",[108,111]],["unionpayintl.com",[108,110]],["streamelements.com",108],["optimum.net",[112,113]],["hdfcfund.com",114],["user.guancha.cn",[115,116]],["sosovalue.com",117],["bandyforbundet.no",[118,119]],["tatacommunications.com",120],["kb.arlo.com",[120,150]],["suamusica.com.br",[121,122,123]],["macrotrends.net",[124,125]],["code.world",126],["smartcharts.net",126],["topgear.com",127],["eservice.directauto.com",[128,129]],["nbcsports.com",130],["standard.co.uk",131],["pruefernavi.de",[132,133]],["17track.net",134],["visible.com",135],["hagerty.com",[136,137]],["marketplace.nvidia.com",138],["kino.de",[139,140]],["9now.nine.com.au",141],["worldstar.com",142],["prisjakt.no",143],["developer.arm.com",[145,146]],["sterkinekor.com",147],["iogames.space",148],["id.condenast.com",149],["tires.costco.com",151],["tires.costco.ca",151],["livemint.com",[152,153]],["login.asda.com",[154,155]],["mandai.com",[156,157]],["damndelicious.net",158],["laurelberninteriors.com",[158,757]],["brother-usa.com",[159,160]],["choose.kaiserpermanente.org",161],["tekniikanmaailma.fi",[162,163]],["m.youtube.com",[165,166,167,168]],["music.youtube.com",[165,166,167,168]],["tv.youtube.com",[165,166,167,168]],["www.youtube.com",[165,166,167,168]],["youtubekids.com",[165,166,167,168]],["youtube-nocookie.com",[165,166,167,168]],["eu-proxy.startpage.com",[165,166,168]],["timesofindia.indiatimes.com",169],["economictimes.indiatimes.com",170],["motherless.com",171],["sueddeutsche.de",172],["wiwo.de",173],["primewire.*",174],["alphaporno.com",[174,551]],["porngem.com",174],["shortit.pw",[174,249]],["familyporn.tv",174],["sbplay.*",174],["85po.com",[174,234]],["milfnut.*",174],["k1nk.co",174],["watchasians.cc",174],["sankakucomplex.com",175],["player.glomex.com",176],["merkur.de",176],["tz.de",176],["sxyprn.*",177],["hqq.*",[178,179]],["waaw.*",[179,180]],["hotpornfile.org",179],["younetu.*",179],["multiup.us",179],["peliculas8k.com",[179,180]],["czxxx.org",179],["vtplayer.online",179],["vvtplayer.*",179],["netu.ac",179],["netu.frembed.lol",179],["123link.*",181],["adshort.*",181],["mitly.us",181],["linkrex.net",181],["linx.cc",181],["oke.io",181],["linkshorts.*",181],["dz4link.com",181],["adsrt.*",181],["linclik.com",181],["shrt10.com",181],["vinaurl.*",181],["loptelink.com",181],["adfloz.*",181],["cut-fly.com",181],["linkfinal.com",181],["payskip.org",181],["cutpaid.com",181],["linkjust.com",181],["leechpremium.link",181],["icutlink.com",[181,268]],["oncehelp.com",181],["rgl.vn",181],["reqlinks.net",181],["bitlk.com",181],["qlinks.eu",181],["link.3dmili.com",181],["short-fly.com",181],["foxseotools.com",181],["dutchycorp.*",181],["shortearn.*",181],["pingit.*",181],["link.turkdown.com",181],["7r6.com",181],["oko.sh",181],["ckk.ai",181],["fc.lc",181],["fstore.biz",181],["shrink.*",181],["cuts-url.com",181],["eio.io",181],["exe.app",181],["exee.io",181],["exey.io",181],["skincarie.com",181],["exeo.app",181],["tmearn.*",181],["coinlyhub.com",[181,330]],["adsafelink.com",181],["aii.sh",181],["megalink.*",181],["cybertechng.com",[181,346]],["cutdl.xyz",181],["iir.ai",181],["shorteet.com",[181,364]],["miniurl.*",181],["smoner.com",181],["gplinks.*",181],["odisha-remix.com",[181,346]],["xpshort.com",[181,346]],["upshrink.com",181],["clk.*",181],["easysky.in",181],["veganab.co",181],["golink.bloggerishyt.in",181],["birdurls.com",181],["vipurl.in",181],["jameeltips.us",181],["promo-visits.site",181],["satoshi-win.xyz",[181,380]],["shorterall.com",181],["encurtandourl.com",181],["forextrader.site",181],["postazap.com",181],["cety.app",181],["exego.app",[181,378]],["cutlink.net",181],["cutyurls.com",181],["cutty.app",181],["cutnet.net",181],["jixo.online",181],["tinys.click",[181,346]],["cpm.icu",181],["panyshort.link",181],["enagato.com",181],["pandaznetwork.com",181],["tpi.li",181],["oii.la",181],["recipestutorials.com",181],["shrinkme.*",181],["shrinke.*",181],["mrproblogger.com",181],["themezon.net",181],["shrinkforearn.in",181],["oii.io",181],["du-link.in",181],["atglinks.com",181],["thotpacks.xyz",181],["megaurl.in",181],["megafly.in",181],["simana.online",181],["fooak.com",181],["joktop.com",181],["evernia.site",181],["falpus.com",181],["link.paid4link.com",181],["exalink.fun",181],["shortxlinks.com",181],["upfion.com",181],["upfiles.app",181],["upfiles-urls.com",181],["flycutlink.com",[181,346]],["linksly.co",181],["link1s.*",181],["pkr.pw",181],["imagenesderopaparaperros.com",181],["shortenbuddy.com",181],["apksvip.com",181],["4cash.me",181],["namaidani.com",181],["shortzzy.*",181],["teknomuda.com",181],["shorttey.*",[181,329]],["miuiku.com",181],["savelink.site",181],["lite-link.*",181],["adcorto.*",181],["samaa-pro.com",181],["miklpro.com",181],["modapk.link",181],["ccurl.net",181],["linkpoi.me",181],["pewgame.com",181],["haonguyen.top",181],["zshort.*",181],["crazyblog.in",181],["cutearn.net",181],["rshrt.com",181],["filezipa.com",181],["dz-linkk.com",181],["upfiles.*",181],["theblissempire.com",181],["finanzas-vida.com",181],["adurly.cc",181],["paid4.link",181],["link.asiaon.top",181],["go.gets4link.com",181],["linkfly.*",181],["beingtek.com",181],["shorturl.unityassets4free.com",181],["disheye.com",181],["techymedies.com",181],["za.gl",[181,282]],["bblink.com",181],["myad.biz",181],["swzz.xyz",181],["vevioz.com",181],["charexempire.com",181],["clk.asia",181],["sturls.com",181],["myshrinker.com",181],["wplink.*",181],["rocklink.in",181],["techgeek.digital",181],["download3s.net",181],["shortx.net",181],["tlin.me",181],["bestcash2020.com",181],["adslink.pw",[181,632]],["novelssites.com",181],["faucetcrypto.net",181],["trxking.xyz",181],["weadown.com",181],["m.bloggingguidance.com",181],["link.codevn.net",181],["link4rev.site",181],["c2g.at",181],["bitcosite.com",[181,565]],["cryptosh.pro",181],["windowslite.net",[181,346]],["viewfr.com",181],["cl1ca.com",181],["4br.me",181],["fir3.net",181],["seulink.*",181],["encurtalink.*",181],["kiddyshort.com",181],["watchmygf.me",[182,207]],["camwhores.*",[182,192,233,234,235]],["camwhorez.tv",[182,192,233,234]],["cambay.tv",[182,214,233,260,262,263,264,265]],["fpo.xxx",[182,214]],["sexemix.com",182],["heavyfetish.com",[182,749]],["thotcity.su",182],["viralxxxporn.com",[182,397]],["tube8.*",[183,184]],["you-porn.com",184],["youporn.*",184],["youporngay.com",184],["youpornru.com",184],["redtube.*",184],["9908ww.com",184],["adelaidepawnbroker.com",184],["bztube.com",184],["hotovs.com",184],["insuredhome.org",184],["nudegista.com",184],["pornluck.com",184],["vidd.se",184],["pornhub.*",[184,319]],["pornhub.com",184],["pornerbros.com",185],["freep.com",185],["porn.com",186],["tune.pk",187],["noticias.gospelmais.com.br",188],["techperiod.com",188],["viki.com",[189,190]],["watch-series.*",191],["watchseries.*",191],["vev.*",191],["vidop.*",191],["vidup.*",191],["sleazyneasy.com",[192,193,194]],["smutr.com",[192,326]],["tktube.com",192],["yourporngod.com",[192,193]],["javbangers.com",[192,462]],["camfox.com",192],["camthots.tv",[192,260]],["shegotass.info",192],["amateur8.com",192],["bigtitslust.com",192],["ebony8.com",192],["freeporn8.com",192],["lesbian8.com",192],["maturetubehere.com",192],["sortporn.com",192],["motherporno.com",[192,193,214,262]],["theporngod.com",[192,193]],["watchdirty.to",[192,234,235,263]],["pornsocket.com",195],["luxuretv.com",196],["porndig.com",[197,198]],["webcheats.com.br",199],["ceesty.com",[200,201]],["gestyy.com",[200,201]],["corneey.com",201],["destyy.com",201],["festyy.com",201],["sh.st",201],["mitaku.net",201],["angrybirdsnest.com",202],["zrozz.com",202],["clix4btc.com",202],["4tests.com",202],["goltelevision.com",202],["news-und-nachrichten.de",202],["laradiobbs.net",202],["urlaubspartner.net",202],["produktion.de",202],["cinemaxxl.de",202],["bladesalvador.com",202],["tempr.email",202],["friendproject.net",202],["covrhub.com",202],["trust.zone",202],["business-standard.com",202],["planetsuzy.org",203],["empflix.com",204],["xmovies8.*",205],["masteranime.tv",205],["0123movies.*",205],["gostream.*",205],["gomovies.*",205],["freeviewmovies.com",206],["filehorse.com",206],["guidetnt.com",206],["starmusiq.*",206],["sp-today.com",206],["linkvertise.com",206],["eropaste.net",206],["getpaste.link",206],["sharetext.me",206],["wcofun.*",206],["note.sieuthuthuat.com",206],["gadgets.es",[206,471]],["amateurporn.co",[206,263]],["watchanimesub.net",206],["wcoanimesub.tv",206],["wcoforever.net",206],["transparentcalifornia.com",207],["deepbrid.com",208],["webnovel.com",209],["streamwish.*",[210,211]],["oneupload.to",211],["wishfast.top",211],["rubystm.com",211],["rubyvid.com",211],["rubyvidhub.com",211],["stmruby.com",211],["streamruby.com",211],["schwaebische.de",212],["8tracks.com",213],["3movs.com",214],["bravoerotica.net",[214,262]],["youx.xxx",214],["camclips.tv",[214,326]],["xtits.*",[214,262]],["camflow.tv",[214,262,263,300,397]],["camhoes.tv",[214,260,262,263,300,397]],["xmegadrive.com",214],["xxxymovies.com",214],["xxxshake.com",214],["gayck.com",214],["xhand.com",[214,262]],["analdin.com",[214,262]],["revealname.com",215],["golfchannel.com",216],["stream.nbcsports.com",216],["mathdf.com",216],["gamcore.com",217],["porcore.com",217],["porngames.tv",217],["69games.xxx",217],["asianpornjav.com",217],["javmix.app",217],["haaretz.co.il",218],["haaretz.com",218],["hungama.com",218],["a-o.ninja",218],["anime-odcinki.pl",218],["shortgoo.blogspot.com",218],["tonanmedia.my.id",[218,584]],["isekaipalace.com",218],["plyjam.*",[219,220]],["foxsports.com.au",221],["canberratimes.com.au",221],["thesimsresource.com",222],["fxporn69.*",223],["vipbox.*",224],["viprow.*",224],["nba.com",225],["ctrl.blog",226],["sportlife.es",227],["finofilipino.org",228],["desbloqueador.*",229],["xberuang.*",230],["teknorizen.*",230],["mysflink.blogspot.com",230],["ashemaletube.*",231],["paktech2.com",231],["assia.tv",232],["assia4.com",232],["cwtvembeds.com",[234,261]],["camlovers.tv",234],["porntn.com",234],["pornissimo.org",234],["sexcams-24.com",[234,263]],["watchporn.to",[234,263]],["camwhorez.video",234],["footstockings.com",[234,235,263]],["xmateur.com",[234,235,263]],["multi.xxx",235],["weatherx.co.in",[236,237]],["sunbtc.space",236],["subtorrents.*",238],["subtorrents1.*",238],["newpelis.*",238],["pelix.*",238],["allcalidad.*",238],["infomaniakos.*",238],["ojogos.com.br",239],["powforums.com",240],["supforums.com",240],["studybullet.com",240],["usgamer.net",241],["recordonline.com",241],["freebitcoin.win",242],["e-monsite.com",242],["coindice.win",242],["freiepresse.de",243],["investing.com",244],["tornadomovies.*",245],["mp3fiber.com",246],["chicoer.com",247],["dailybreeze.com",247],["dailybulletin.com",247],["dailynews.com",247],["delcotimes.com",247],["eastbaytimes.com",247],["macombdaily.com",247],["ocregister.com",247],["pasadenastarnews.com",247],["pe.com",247],["presstelegram.com",247],["redlandsdailyfacts.com",247],["reviewjournal.com",247],["santacruzsentinel.com",247],["saratogian.com",247],["sentinelandenterprise.com",247],["sgvtribune.com",247],["tampabay.com",247],["times-standard.com",247],["theoaklandpress.com",247],["trentonian.com",247],["twincities.com",247],["whittierdailynews.com",247],["bostonherald.com",247],["dailycamera.com",247],["sbsun.com",247],["dailydemocrat.com",247],["montereyherald.com",247],["orovillemr.com",247],["record-bee.com",247],["redbluffdailynews.com",247],["reporterherald.com",247],["thereporter.com",247],["timescall.com",247],["timesheraldonline.com",247],["ukiahdailyjournal.com",247],["dailylocal.com",247],["mercurynews.com",247],["suedkurier.de",248],["anysex.com",250],["icdrama.*",251],["mangasail.*",251],["pornve.com",252],["file4go.*",253],["coolrom.com.au",253],["marie-claire.es",254],["gamezhero.com",254],["flashgirlgames.com",254],["onlinesudoku.games",254],["mpg.football",254],["sssam.com",254],["globalnews.ca",255],["drinksmixer.com",256],["leitesculinaria.com",256],["fupa.net",257],["browardpalmbeach.com",258],["dallasobserver.com",258],["houstonpress.com",258],["miaminewtimes.com",258],["phoenixnewtimes.com",258],["westword.com",258],["nowtv.com.tr",259],["caminspector.net",260],["camwhoreshd.com",260],["camgoddess.tv",260],["gay4porn.com",262],["mypornhere.com",262],["mangovideo.*",263],["love4porn.com",263],["thotvids.com",263],["watchmdh.to",263],["celebwhore.com",263],["cluset.com",263],["sexlist.tv",263],["4kporn.xxx",263],["xhomealone.com",263],["lusttaboo.com",[263,530]],["hentai-moon.com",263],["camhub.cc",[263,689]],["mediapason.it",266],["linkspaid.com",266],["tuotromedico.com",266],["neoteo.com",266],["phoneswiki.com",266],["celebmix.com",266],["myneobuxportal.com",266],["oyungibi.com",266],["25yearslatersite.com",266],["jeshoots.com",267],["techhx.com",267],["karanapk.com",267],["flashplayer.fullstacks.net",269],["cloudapps.herokuapp.com",269],["youfiles.herokuapp.com",269],["texteditor.nsspot.net",269],["temp-mail.org",270],["asianclub.*",271],["javhdporn.net",271],["vidmoly.*",272],["comnuan.com",273],["veedi.com",274],["battleboats.io",274],["anitube.*",275],["fruitlab.com",275],["haddoz.net",275],["streamingcommunity.*",275],["garoetpos.com",275],["stiletv.it",276],["hqtv.biz",277],["liveuamap.com",278],["audycje.tokfm.pl",279],["shush.se",280],["allkpop.com",281],["empire-anime.*",[282,579,580,581,582,583]],["empire-streaming.*",[282,579,580,581]],["empire-anime.com",[282,579,580,581]],["empire-streamz.fr",[282,579,580,581]],["empire-stream.*",[282,579,580,581]],["pickcrackpasswords.blogspot.com",283],["kfrfansub.com",284],["thuglink.com",284],["voipreview.org",284],["illicoporno.com",285],["lavoixdux.com",285],["tonpornodujour.com",285],["jacquieetmichel.net",285],["swame.com",285],["vosfemmes.com",285],["voyeurfrance.net",285],["jacquieetmicheltv.net",[285,638,639]],["pogo.com",286],["cloudvideo.tv",287],["legionjuegos.org",288],["legionpeliculas.org",288],["legionprogramas.org",288],["16honeys.com",289],["elespanol.com",290],["remodelista.com",291],["audiofanzine.com",295],["uploadev.*",296],["developerinsider.co",297],["thehindu.com",298],["cambro.tv",[299,300]],["boobsradar.com",[300,397,708]],["nibelungen-kurier.de",301],["adfoc.us",302],["tackledsoul.com",302],["adrino1.bonloan.xyz",302],["vi-music.app",302],["instanders.app",302],["rokni.xyz",302],["keedabankingnews.com",302],["tea-coffee.net",302],["spatsify.com",302],["newedutopics.com",302],["getviralreach.in",302],["edukaroo.com",302],["funkeypagali.com",302],["careersides.com",302],["nayisahara.com",302],["wikifilmia.com",302],["infinityskull.com",302],["viewmyknowledge.com",302],["iisfvirtual.in",302],["starxinvestor.com",302],["jkssbalerts.com",302],["sahlmarketing.net",302],["filmypoints.in",302],["fitnessholic.net",302],["moderngyan.com",302],["sattakingcharts.in",302],["bankshiksha.in",302],["earn.mpscstudyhub.com",302],["earn.quotesopia.com",302],["money.quotesopia.com",302],["best-mobilegames.com",302],["learn.moderngyan.com",302],["bharatsarkarijobalert.com",302],["quotesopia.com",302],["creditsgoal.com",302],["bgmi32bitapk.in",302],["techacode.com",302],["trickms.com",302],["ielts-isa.edu.vn",302],["loan.punjabworks.com",302],["sptfy.be",302],["mcafee-com.com",[302,378]],["pianetamountainbike.it",303],["barchart.com",304],["modelisme.com",305],["parasportontario.ca",305],["prescottenews.com",305],["nrj-play.fr",306],["hackingwithreact.com",307],["gutekueche.at",308],["peekvids.com",309],["playvids.com",309],["pornflip.com",309],["redensarten-index.de",310],["vw-page.com",311],["viz.com",[312,313]],["0rechner.de",314],["configspc.com",315],["xopenload.me",315],["uptobox.com",315],["uptostream.com",315],["japgay.com",316],["mega-debrid.eu",317],["dreamdth.com",318],["diaridegirona.cat",320],["diariodeibiza.es",320],["diariodemallorca.es",320],["diarioinformacion.com",320],["eldia.es",320],["emporda.info",320],["farodevigo.es",320],["laopinioncoruna.es",320],["laopiniondemalaga.es",320],["laopiniondemurcia.es",320],["laopiniondezamora.es",320],["laprovincia.es",320],["levante-emv.com",320],["mallorcazeitung.es",320],["regio7.cat",320],["superdeporte.es",320],["playpaste.com",321],["cnbc.com",322],["firefaucet.win",323],["74k.io",[324,325]],["cloudwish.xyz",325],["gradehgplus.com",325],["javindo.site",325],["javindosub.site",325],["kamehaus.net",325],["movearnpre.com",325],["arabshentai.com>>",325],["javdo.cc>>",325],["javenglish.cc>>",325],["javhd.*>>",325],["javhdz.*>>",325],["roshy.tv>>",325],["sextb.*>>",325],["fullhdxxx.com",327],["pornclassic.tube",328],["tubepornclassic.com",328],["etonline.com",329],["creatur.io",329],["lookcam.*",329],["drphil.com",329],["urbanmilwaukee.com",329],["hideandseek.world",329],["myabandonware.com",329],["kendam.com",329],["wttw.com",329],["synonyms.com",329],["definitions.net",329],["hostmath.com",329],["camvideoshub.com",329],["minhaconexao.com.br",329],["home-made-videos.com",331],["amateur-couples.com",331],["slutdump.com",331],["artificialnudes.com",331],["asianal.xyz",331],["asianmassage.xyz",331],["bdsmkingdom.xyz",331],["brunettedeepthroat.com",331],["compilationtube.xyz",331],["cosplaynsfw.xyz",331],["crazytoys.xyz",331],["fikfak.net",331],["flexxporn.com",331],["handypornos.net",331],["hardcorelesbian.xyz",331],["heimporno.com",331],["instaporno.net",331],["latinabbw.xyz",331],["platinporno.com",331],["pornahegao.xyz",331],["pornobait.com",331],["pornfeet.xyz",331],["redheaddeepthroat.com",331],["romanticlesbian.com",331],["sexfilmkiste.com",331],["sexontheboat.xyz",331],["sexroute.net",331],["towheaddeepthroat.com",331],["traumporno.com",331],["dpstream.*",332],["produsat.com",333],["bluemediafiles.*",334],["12thman.com",335],["acusports.com",335],["atlantic10.com",335],["auburntigers.com",335],["baylorbears.com",335],["bceagles.com",335],["bgsufalcons.com",335],["big12sports.com",335],["bigten.org",335],["bradleybraves.com",335],["butlersports.com",335],["cmumavericks.com",335],["conferenceusa.com",335],["cyclones.com",335],["dartmouthsports.com",335],["daytonflyers.com",335],["dbupatriots.com",335],["dbusports.com",335],["denverpioneers.com",335],["fduknights.com",335],["fgcuathletics.com",335],["fightinghawks.com",335],["fightingillini.com",335],["floridagators.com",335],["friars.com",335],["friscofighters.com",335],["gamecocksonline.com",335],["goarmywestpoint.com",335],["gobison.com",335],["goblueraiders.com",335],["gobobcats.com",335],["gocards.com",335],["gocreighton.com",335],["godeacs.com",335],["goexplorers.com",335],["goetbutigers.com",335],["gofrogs.com",335],["gogriffs.com",335],["gogriz.com",335],["golobos.com",335],["gomarquette.com",335],["gopack.com",335],["gophersports.com",335],["goprincetontigers.com",335],["gopsusports.com",335],["goracers.com",335],["goshockers.com",335],["goterriers.com",335],["gotigersgo.com",335],["gousfbulls.com",335],["govandals.com",335],["gowyo.com",335],["goxavier.com",335],["gozags.com",335],["gozips.com",335],["griffinathletics.com",335],["guhoyas.com",335],["gwusports.com",335],["hailstate.com",335],["hamptonpirates.com",335],["hawaiiathletics.com",335],["hokiesports.com",335],["huskers.com",335],["icgaels.com",335],["iuhoosiers.com",335],["jsugamecocksports.com",335],["longbeachstate.com",335],["loyolaramblers.com",335],["lrtrojans.com",335],["lsusports.net",335],["morrisvillemustangs.com",335],["msuspartans.com",335],["muleriderathletics.com",335],["mutigers.com",335],["navysports.com",335],["nevadawolfpack.com",335],["niuhuskies.com",335],["nkunorse.com",335],["nuhuskies.com",335],["nusports.com",335],["okstate.com",335],["olemisssports.com",335],["omavs.com",335],["ovcsports.com",335],["owlsports.com",335],["purduesports.com",335],["redstormsports.com",335],["richmondspiders.com",335],["sfajacks.com",335],["shupirates.com",335],["siusalukis.com",335],["smcgaels.com",335],["smumustangs.com",335],["soconsports.com",335],["soonersports.com",335],["themw.com",335],["tulsahurricane.com",335],["txst.com",335],["txstatebobcats.com",335],["ubbulls.com",335],["ucfknights.com",335],["ucirvinesports.com",335],["uconnhuskies.com",335],["uhcougars.com",335],["uicflames.com",335],["umterps.com",335],["uncwsports.com",335],["unipanthers.com",335],["unlvrebels.com",335],["uoflsports.com",335],["usdtoreros.com",335],["utahstateaggies.com",335],["utepathletics.com",335],["utrockets.com",335],["uvmathletics.com",335],["uwbadgers.com",335],["villanova.com",335],["wkusports.com",335],["wmubroncos.com",335],["woffordterriers.com",335],["1pack1goal.com",335],["bcuathletics.com",335],["bubraves.com",335],["goblackbears.com",335],["golightsgo.com",335],["gomcpanthers.com",335],["goutsa.com",335],["mercerbears.com",335],["pirateblue.com",335],["pirateblue.net",335],["pirateblue.org",335],["quinnipiacbobcats.com",335],["towsontigers.com",335],["tribeathletics.com",335],["tribeclub.com",335],["utepminermaniacs.com",335],["utepminers.com",335],["wkutickets.com",335],["aopathletics.org",335],["atlantichockeyonline.com",335],["bigsouthnetwork.com",335],["bigsouthsports.com",335],["chawomenshockey.com",335],["dbupatriots.org",335],["drakerelays.org",335],["ecac.org",335],["ecacsports.com",335],["emueagles.com",335],["emugameday.com",335],["gculopes.com",335],["godrakebulldog.com",335],["godrakebulldogs.com",335],["godrakebulldogs.net",335],["goeags.com",335],["goislander.com",335],["goislanders.com",335],["gojacks.com",335],["gomacsports.com",335],["gseagles.com",335],["hubison.com",335],["iowaconference.com",335],["ksuowls.com",335],["lonestarconference.org",335],["mascac.org",335],["midwestconference.org",335],["mountaineast.org",335],["niu-pack.com",335],["nulakers.ca",335],["oswegolakers.com",335],["ovcdigitalnetwork.com",335],["pacersports.com",335],["rmacsports.org",335],["rollrivers.com",335],["samfordsports.com",335],["uncpbraves.com",335],["usfdons.com",335],["wiacsports.com",335],["alaskananooks.com",335],["broncathleticfund.com",335],["cameronaggies.com",335],["columbiacougars.com",335],["etownbluejays.com",335],["gobadgers.ca",335],["golancers.ca",335],["gometrostate.com",335],["gothunderbirds.ca",335],["kentstatesports.com",335],["lehighsports.com",335],["lopers.com",335],["lycoathletics.com",335],["lycomingathletics.com",335],["maraudersports.com",335],["mauiinvitational.com",335],["msumavericks.com",335],["nauathletics.com",335],["nueagles.com",335],["nwusports.com",335],["oceanbreezenyc.org",335],["patriotathleticfund.com",335],["pittband.com",335],["principiaathletics.com",335],["roadrunnersathletics.com",335],["sidearmsocial.com",335],["snhupenmen.com",335],["stablerarena.com",335],["stoutbluedevils.com",335],["uwlathletics.com",335],["yumacs.com",335],["collegefootballplayoff.com",335],["csurams.com",335],["cubuffs.com",335],["gobearcats.com",335],["gohuskies.com",335],["mgoblue.com",335],["osubeavers.com",335],["pittsburghpanthers.com",335],["rolltide.com",335],["texassports.com",335],["thesundevils.com",335],["uclabruins.com",335],["wvuathletics.com",335],["wvusports.com",335],["arizonawildcats.com",335],["calbears.com",335],["cuse.com",335],["georgiadogs.com",335],["goducks.com",335],["goheels.com",335],["gostanford.com",335],["insidekstatesports.com",335],["insidekstatesports.info",335],["insidekstatesports.net",335],["insidekstatesports.org",335],["k-stateathletics.com",335],["k-statefootball.net",335],["k-statefootball.org",335],["k-statesports.com",335],["k-statesports.net",335],["k-statesports.org",335],["k-statewomenshoops.com",335],["k-statewomenshoops.net",335],["k-statewomenshoops.org",335],["kstateathletics.com",335],["kstatefootball.net",335],["kstatefootball.org",335],["kstatesports.com",335],["kstatewomenshoops.com",335],["kstatewomenshoops.net",335],["kstatewomenshoops.org",335],["ksuathletics.com",335],["ksusports.com",335],["scarletknights.com",335],["showdownforrelief.com",335],["syracusecrunch.com",335],["texastech.com",335],["theacc.com",335],["ukathletics.com",335],["usctrojans.com",335],["utahutes.com",335],["utsports.com",335],["wsucougars.com",335],["vidlii.com",[335,361]],["tricksplit.io",335],["fangraphs.com",336],["stern.de",337],["geo.de",337],["brigitte.de",337],["schoener-wohnen.de",337],["welt.de",338],["tvspielfilm.de",[339,340,341,342]],["tvtoday.de",[339,340,341,342]],["chip.de",[339,340,341,342]],["focus.de",[339,340,341,342]],["fitforfun.de",[339,340,341,342]],["n-tv.de",343],["player.rtl2.de",344],["planetaminecraft.com",345],["cravesandflames.com",346],["codesnse.com",346],["flyad.vip",346],["lapresse.ca",347],["kolyoom.com",348],["ilovephd.com",348],["negumo.com",349],["games.wkb.jp",[350,351]],["kenshi.fandom.com",353],["hausbau-forum.de",354],["homeairquality.org",354],["call4cloud.nl",354],["fake-it.ws",355],["laksa19.github.io",356],["1shortlink.com",357],["u-s-news.com",358],["luscious.net",359],["makemoneywithurl.com",360],["junkyponk.com",360],["healthfirstweb.com",360],["vocalley.com",360],["yogablogfit.com",360],["howifx.com",360],["en.financerites.com",360],["mythvista.com",360],["livenewsflix.com",360],["cureclues.com",360],["apekite.com",360],["enit.in",360],["iammagnus.com",361],["dailyvideoreports.net",361],["unityassets4free.com",361],["docer.*",362],["resetoff.pl",362],["sexodi.com",362],["cdn77.org",363],["momxxxsex.com",364],["penisbuyutucum.net",364],["ujszo.com",365],["newsmax.com",366],["nadidetarifler.com",367],["siz.tv",367],["suzylu.co.uk",[368,369]],["onworks.net",370],["yabiladi.com",370],["downloadsoft.net",371],["newsobserver.com",372],["arkadiumhosted.com",372],["testlanguages.com",373],["newsinlevels.com",373],["videosinlevels.com",373],["procinehub.com",374],["bookmystrip.com",374],["imagereviser.com",375],["pubgaimassist.com",376],["gyanitheme.com",376],["tech.trendingword.com",376],["blog.potterworld.co",376],["hipsonyc.com",376],["tech.pubghighdamage.com",376],["blog.itijobalert.in",376],["techkhulasha.com",376],["jiocinema.com",376],["rapid-cloud.co",376],["uploadmall.com",376],["4funbox.com",377],["nephobox.com",377],["1024tera.com",377],["terabox.*",377],["starkroboticsfrc.com",378],["sinonimos.de",378],["antonimos.de",378],["quesignifi.ca",378],["tiktokrealtime.com",378],["tiktokcounter.net",378],["tpayr.xyz",378],["poqzn.xyz",378],["ashrfd.xyz",378],["rezsx.xyz",378],["tryzt.xyz",378],["ashrff.xyz",378],["rezst.xyz",378],["dawenet.com",378],["erzar.xyz",378],["waezm.xyz",378],["waezg.xyz",378],["blackwoodacademy.org",378],["cryptednews.space",378],["vivuq.com",378],["swgop.com",378],["vbnmll.com",378],["telcoinfo.online",378],["dshytb.com",378],["btcbitco.in",[378,379]],["btcsatoshi.net",378],["cempakajaya.com",378],["crypto4yu.com",378],["readbitcoin.org",378],["wiour.com",378],["finish.addurl.biz",378],["aiimgvlog.fun",[378,382]],["laweducationinfo.com",378],["savemoneyinfo.com",378],["worldaffairinfo.com",378],["godstoryinfo.com",378],["successstoryinfo.com",378],["cxissuegk.com",378],["learnmarketinfo.com",378],["bhugolinfo.com",378],["armypowerinfo.com",378],["rsgamer.app",378],["phonereviewinfo.com",378],["makeincomeinfo.com",378],["gknutshell.com",378],["vichitrainfo.com",378],["workproductivityinfo.com",378],["dopomininfo.com",378],["hostingdetailer.com",378],["fitnesssguide.com",378],["tradingfact4u.com",378],["cryptofactss.com",378],["softwaredetail.com",378],["artoffocas.com",378],["insurancesfact.com",378],["travellingdetail.com",378],["advertisingexcel.com",378],["allcryptoz.net",378],["batmanfactor.com",378],["beautifulfashionnailart.com",378],["crewbase.net",378],["documentaryplanet.xyz",378],["crewus.net",378],["gametechreviewer.com",378],["midebalonu.net",378],["misterio.ro",378],["phineypet.com",378],["seory.xyz",378],["shinbhu.net",378],["shinchu.net",378],["substitutefor.com",378],["talkforfitness.com",378],["thefitbrit.co.uk",378],["thumb8.net",378],["thumb9.net",378],["topcryptoz.net",378],["uniqueten.net",378],["ultraten.net",378],["exactpay.online",378],["quins.us",378],["kiddyearner.com",378],["bildirim.*",381],["arahdrive.com",382],["appsbull.com",383],["diudemy.com",383],["maqal360.com",[383,384,385]],["lifesurance.info",386],["akcartoons.in",387],["cybercityhelp.in",387],["dl.apkmoddone.com",388],["phongroblox.com",388],["fuckingfast.net",389],["buzzheavier.com",389],["tickhosting.com",390],["in91vip.win",391],["datavaults.co",392],["t-online.de",394],["upornia.*",[395,396]],["bobs-tube.com",397],["pornohirsch.net",398],["bembed.net",399],["embedv.net",399],["javguard.club",399],["listeamed.net",399],["v6embed.xyz",399],["vembed.*",399],["vid-guard.com",399],["vinomo.xyz",399],["nekolink.site",[400,401]],["141jav.com",402],["141tube.com",402],["aagmaal.com",402],["camcam.cc",402],["javneon.tv",402],["javsaga.ninja",402],["torrentkitty.one",402],["pixsera.net",403],["jnews5.com",404],["pc-builds.com",405],["reuters.com",405],["today.com",405],["videogamer.com",405],["wrestlinginc.com",405],["azcentral.com",406],["greenbaypressgazette.com",406],["palmbeachpost.com",406],["usatoday.com",[406,407]],["ydr.com",406],["247sports.com",408],["indiatimes.com",409],["netzwelt.de",410],["filmibeat.com",411],["goodreturns.in",411],["mykhel.com",411],["daemonanime.net",411],["luckydice.net",411],["weatherwx.com",411],["sattaguess.com",411],["winshell.de",411],["rosasidan.ws",411],["upiapi.in",411],["networkhint.com",411],["thichcode.net",411],["texturecan.com",411],["tikmate.app",[411,620]],["arcaxbydz.id",411],["quotesshine.com",411],["worldhistory.org",412],["arcade.buzzrtv.com",413],["arcade.dailygazette.com",413],["arcade.lemonde.fr",413],["arena.gamesforthebrain.com",413],["bestpuzzlesandgames.com",413],["cointiply.arkadiumarena.com",413],["gamelab.com",413],["gameplayneo.com",413],["games.abqjournal.com",413],["games.arkadium.com",413],["games.amny.com",413],["games.bellinghamherald.com",413],["games.besthealthmag.ca",413],["games.bnd.com",413],["games.boston.com",413],["games.bostonglobe.com",413],["games.bradenton.com",413],["games.centredaily.com",413],["games.charlottegames.cnhinews.com",413],["games.crosswordgiant.com",413],["games.dailymail.co.uk",413],["games.dallasnews.com",413],["games.daytondailynews.com",413],["games.denverpost.com",413],["games.everythingzoomer.com",413],["games.fresnobee.com",413],["games.gameshownetwork.com",413],["games.get.tv",413],["games.greatergood.com",413],["games.heraldonline.com",413],["games.heraldsun.com",413],["games.idahostatesman.com",413],["games.insp.com",413],["games.islandpacket.com",413],["games.journal-news.com",413],["games.kansas.com",413],["games.kansascity.com",413],["games.kentucky.com",413],["games.lancasteronline.com",413],["games.ledger-enquirer.com",413],["games.macon.com",413],["games.mashable.com",413],["games.mercedsunstar.com",413],["games.metro.us",413],["games.metv.com",413],["games.miamiherald.com",413],["games.modbee.com",413],["games.moviestvnetwork.com",413],["games.myrtlebeachonline.com",413],["games.games.newsgames.parade.com",413],["games.pressdemocrat.com",413],["games.puzzlebaron.com",413],["games.puzzler.com",413],["games.puzzles.ca",413],["games.qns.com",413],["games.readersdigest.ca",413],["games.sacbee.com",413],["games.sanluisobispo.com",413],["games.sixtyandme.com",413],["games.sltrib.com",413],["games.springfieldnewssun.com",413],["games.star-telegram.com",413],["games.startribune.com",413],["games.sunherald.com",413],["games.theadvocate.com",413],["games.thenewstribune.com",413],["games.theolympian.com",413],["games.theportugalnews.com",413],["games.thestar.com",413],["games.thestate.com",413],["games.tri-cityherald.com",413],["games.triviatoday.com",413],["games.usnews.com",413],["games.word.tips",413],["games.wordgenius.com",413],["games.wtop.com",413],["jeux.meteocity.com",413],["juegos.as.com",413],["juegos.elnuevoherald.com",413],["juegos.elpais.com",413],["philly.arkadiumarena.com",413],["play.dictionary.com",413],["puzzles.bestforpuzzles.com",413],["puzzles.centralmaine.com",413],["puzzles.crosswordsolver.org",413],["puzzles.independent.co.uk",413],["puzzles.nola.com",413],["puzzles.pressherald.com",413],["puzzles.standard.co.uk",413],["puzzles.sunjournal.com",413],["arkadium.com",414],["abysscdn.com",[415,416]],["turtleviplay.xyz",417],["mixdrop.*",418],["ai.hubtoday.app",419],["news.now.com",420],["qub.ca",421],["gostyn24.pl",422],["lared.cl",423],["atozmath.com",[423,447,448,449,450,451,452]],["pcbolsa.com",424],["hdfilmizlesen.com",425],["watch.rkplayer.xyz",426],["arcai.com",427],["my-code4you.blogspot.com",428],["flickr.com",429],["firefile.cc",430],["pestleanalysis.com",430],["kochamjp.pl",430],["tutorialforlinux.com",430],["whatsaero.com",430],["animeblkom.net",[430,444]],["blkom.com",430],["globes.co.il",[431,432]],["jardiner-malin.fr",433],["tw-calc.net",434],["ohmybrush.com",435],["talkceltic.net",436],["mentalfloss.com",437],["uprafa.com",438],["cube365.net",439],["wwwfotografgotlin.blogspot.com",440],["freelistenonline.com",440],["badassdownloader.com",441],["quickporn.net",442],["yellowbridge.com",443],["aosmark.com",445],["ctrlv.*",446],["newyorker.com",453],["brighteon.com",[454,455]],["more.tv",456],["video1tube.com",457],["alohatube.xyz",457],["4players.de",458],["onlinesoccermanager.com",458],["fshost.me",459],["link.cgtips.org",460],["hentaicloud.com",461],["paperzonevn.com",463],["9jarock.org",464],["fzmovies.info",464],["fztvseries.ng",464],["netnaijas.com",464],["hentaienglish.com",465],["hentaiporno.xxx",465],["venge.io",[466,467]],["its.porn",[468,469]],["atv.at",470],["2ndrun.tv",471],["rackusreads.com",471],["teachmemicro.com",471],["willcycle.com",471],["kusonime.com",[472,473]],["123movieshd.*",474],["imgur.com",[475,476,750]],["hentai-party.com",477],["hentaicomics.pro",477],["uproxy.*",478],["animesa.*",479],["subtitleone.cc",480],["mysexgames.com",481],["ancient-origins.*",482],["cinecalidad.*",[483,484]],["xnxx.*",485],["xvideos.*",485],["gdr-online.com",486],["mmm.dk",487],["iqiyi.com",[488,489,610]],["m.iqiyi.com",490],["nbcolympics.com",491],["apkhex.com",492],["indiansexstories2.net",493],["issstories.xyz",493],["1340kbbr.com",494],["gorgeradio.com",494],["kduk.com",494],["kedoam.com",494],["kejoam.com",494],["kelaam.com",494],["khsn1230.com",494],["kjmx.rocks",494],["kloo.com",494],["klooam.com",494],["klykradio.com",494],["kmed.com",494],["kmnt.com",494],["kpnw.com",494],["kppk983.com",494],["krktcountry.com",494],["ktee.com",494],["kwro.com",494],["kxbxfm.com",494],["thevalley.fm",494],["quizlet.com",495],["dsocker1234.blogspot.com",496],["schoolcheats.net",[497,498]],["mgnet.xyz",499],["designtagebuch.de",500],["pixroute.com",501],["uploady.io",502],["calculator-online.net",503],["porngames.club",504],["sexgames.xxx",504],["111.90.159.132",505],["mobile-tracker-free.com",506],["social-unlock.com",507],["superpsx.com",508],["ninja.io",509],["sourceforge.net",510],["samfirms.com",511],["rapelust.com",512],["vtube.to",512],["desitelugusex.com",512],["dvdplay.*",512],["xvideos-downloader.net",512],["xxxvideotube.net",512],["sdefx.cloud",512],["nozomi.la",512],["banned.video",513],["madmaxworld.tv",513],["androidpolice.com",513],["babygaga.com",513],["backyardboss.net",513],["carbuzz.com",513],["cbr.com",513],["collider.com",513],["dualshockers.com",513],["footballfancast.com",513],["footballleagueworld.co.uk",513],["gamerant.com",513],["givemesport.com",513],["hardcoregamer.com",513],["hotcars.com",513],["howtogeek.com",513],["makeuseof.com",513],["moms.com",513],["movieweb.com",513],["pocket-lint.com",513],["pocketnow.com",513],["screenrant.com",513],["simpleflying.com",513],["thegamer.com",513],["therichest.com",513],["thesportster.com",513],["thethings.com",513],["thetravel.com",513],["topspeed.com",513],["xda-developers.com",513],["huffpost.com",514],["ingles.com",515],["spanishdict.com",515],["surfline.com",[516,517]],["play.tv3.ee",518],["play.tv3.lt",518],["play.tv3.lv",[518,519]],["tv3play.skaties.lv",518],["bulbagarden.net",520],["hollywoodlife.com",521],["mat6tube.com",522],["hotabis.com",523],["root-nation.com",523],["italpress.com",523],["airsoftmilsimnews.com",523],["artribune.com",523],["newtumbl.com",524],["apkmaven.*",525],["aruble.net",526],["nevcoins.club",527],["mail.com",528],["gmx.*",529],["mangakita.id",531],["avpgalaxy.net",532],["panda-novel.com",533],["lightsnovel.com",533],["eaglesnovel.com",533],["pandasnovel.com",533],["ewrc-results.com",534],["kizi.com",535],["cyberscoop.com",536],["fedscoop.com",536],["jeep-cj.com",537],["sponsorhunter.com",538],["cloudcomputingtopics.net",539],["likecs.com",540],["tiscali.it",541],["linkspy.cc",542],["adshnk.com",543],["chattanoogan.com",544],["adsy.pw",545],["playstore.pw",545],["windowspro.de",546],["tvtv.ca",547],["tvtv.us",547],["mydaddy.cc",548],["roadtrippin.fr",549],["vavada5com.com",550],["anyporn.com",[551,568]],["bravoporn.com",551],["bravoteens.com",551],["crocotube.com",551],["hellmoms.com",551],["hellporno.com",551],["sex3.com",551],["tubewolf.com",551],["xbabe.com",551],["xcum.com",551],["zedporn.com",551],["imagetotext.info",552],["infokik.com",553],["freepik.com",554],["ddwloclawek.pl",[555,556]],["www.seznam.cz",557],["deezer.com",558],["my-subs.co",559],["plaion.com",560],["slideshare.net",[561,562]],["ustreasuryyieldcurve.com",563],["businesssoftwarehere.com",564],["goo.st",564],["freevpshere.com",564],["softwaresolutionshere.com",564],["gamereactor.*",566],["madoohd.com",567],["doomovie-hd.*",567],["staige.tv",569],["androidadult.com",570],["streamvid.net",571],["watchtv24.com",572],["cellmapper.net",573],["medscape.com",574],["newscon.org",[575,576]],["wheelofgold.com",577],["drakecomic.*",577],["app.blubank.com",578],["mobileweb.bankmellat.ir",578],["ccthesims.com",585],["chromeready.com",585],["dtbps3games.com",585],["illustratemagazine.com",585],["uknip.co.uk",585],["vod.pl",586],["megadrive-emulator.com",587],["tvhay.*",[588,589]],["moviesapi.club",590],["watchx.top",590],["digimanie.cz",591],["svethardware.cz",591],["srvy.ninja",592],["chat.tchatche.com",[593,594]],["cnn.com",[595,596,597]],["news.bg",598],["edmdls.com",599],["freshremix.net",599],["scenedl.org",599],["trakt.tv",600],["shroomers.app",601],["classicalradio.com",602],["di.fm",602],["jazzradio.com",602],["radiotunes.com",602],["rockradio.com",602],["zenradio.com",602],["getthit.com",603],["techedubyte.com",604],["iwanttfc.com",605],["nutraingredients-asia.com",606],["nutraingredients-latam.com",606],["nutraingredients-usa.com",606],["nutraingredients.com",606],["ozulscansen.com",607],["nexusmods.com",608],["lookmovie.*",609],["lookmovie2.to",609],["biletomat.pl",611],["hextank.io",[612,613]],["filmizlehdfilm.com",[614,615,616,617]],["filmizletv.*",[614,615,616,617]],["fullfilmizle.cc",[614,615,616,617]],["gofilmizle.net",[614,615,616,617]],["cimanow.cc",618],["bgmiupdate.com.in",618],["freex2line.online",619],["btvplus.bg",621],["sagewater.com",622],["redlion.net",622],["filmweb.pl",623],["satdl.com",624],["vidstreaming.xyz",625],["everand.com",626],["myradioonline.pl",627],["cbs.com",628],["paramountplus.com",628],["colourxh.site",629],["fullxh.com",629],["galleryxh.site",629],["megaxh.com",629],["movingxh.world",629],["seexh.com",629],["unlockxh4.com",629],["valuexh.life",629],["xhaccess.com",629],["xhadult2.com",629],["xhadult3.com",629],["xhadult4.com",629],["xhadult5.com",629],["xhamster.*",629],["xhamster1.*",629],["xhamster10.*",629],["xhamster11.*",629],["xhamster12.*",629],["xhamster13.*",629],["xhamster14.*",629],["xhamster15.*",629],["xhamster16.*",629],["xhamster17.*",629],["xhamster18.*",629],["xhamster19.*",629],["xhamster20.*",629],["xhamster2.*",629],["xhamster3.*",629],["xhamster4.*",629],["xhamster42.*",629],["xhamster46.com",629],["xhamster5.*",629],["xhamster7.*",629],["xhamster8.*",629],["xhamsterporno.mx",629],["xhbig.com",629],["xhbranch5.com",629],["xhchannel.com",629],["xhdate.world",629],["xhlease.world",629],["xhmoon5.com",629],["xhofficial.com",629],["xhopen.com",629],["xhplanet1.com",629],["xhplanet2.com",629],["xhreal2.com",629],["xhreal3.com",629],["xhspot.com",629],["xhtotal.com",629],["xhtree.com",629],["xhvictory.com",629],["xhwebsite.com",629],["xhwebsite2.com",629],["xhwebsite5.com",629],["xhwide1.com",629],["xhwide2.com",629],["xhwide5.com",629],["file-upload.net",630],["tunein.com",631],["acortalo.*",[633,634,635,636]],["acortar.*",[633,634,635,636]],["hentaihaven.xxx",637],["jacquieetmicheltv2.net",639],["a2zapk.*",640],["fcportables.com",[641,642]],["emurom.net",643],["freethesaurus.com",[644,645]],["thefreedictionary.com",[644,645]],["oeffentlicher-dienst.info",646],["im9.eu",[647,648]],["dcdlplayer8a06f4.xyz",649],["ultimate-guitar.com",650],["claimbits.net",651],["sexyscope.net",652],["kickassanime.*",653],["recherche-ebook.fr",654],["virtualdinerbot.com",654],["zonebourse.com",655],["pink-sluts.net",656],["andhrafriends.com",657],["benzinpreis.de",658],["defenseone.com",659],["govexec.com",659],["nextgov.com",659],["route-fifty.com",659],["sharing.wtf",660],["wetter3.de",661],["esportivos.fun",662],["cosmonova-broadcast.tv",663],["538.nl",664],["hartvannederland.nl",664],["kijk.nl",664],["shownieuws.nl",664],["vandaaginside.nl",664],["rock.porn",[665,666]],["videzz.net",[667,668]],["ezaudiobookforsoul.com",669],["club386.com",670],["decompiler.com",[671,672]],["littlebigsnake.com",673],["easyfun.gg",674],["smailpro.com",675],["ilgazzettino.it",676],["ilmessaggero.it",676],["3bmeteo.com",[677,678]],["mconverter.eu",679],["lover937.net",680],["10gb.vn",681],["pes6.es",682],["tactics.tools",[683,684]],["boundhub.com",685],["reliabletv.me",686],["jakondo.ru",687],["trueachievements.com",687],["truesteamachievements.com",687],["truetrophies.com",687],["av1encodes.com",687],["filecrypt.*",688],["wired.com",690],["spankbang.*",[691,692,693,754,755]],["hulu.com",[694,695,696]],["hanime.tv",697],["nhentai.net",[698,699,700]],["pouvideo.*",701],["povvideo.*",701],["povw1deo.*",701],["povwideo.*",701],["powv1deo.*",701],["powvibeo.*",701],["powvideo.*",701],["powvldeo.*",701],["powcloud.org",702],["primevideo.com",703],["read.amazon.*",[703,719]],["anonymfile.com",704],["gofile.to",704],["dotycat.com",705],["rateyourmusic.com",706],["reporterpb.com.br",707],["blog-dnz.com",709],["18adultgames.com",710],["colnect.com",[711,712]],["adultgamesworld.com",713],["servustv.com",[714,715]],["reviewdiv.com",716],["parametric-architecture.com",717],["voiceofdenton.com",718],["concealednation.org",718],["askattest.com",720],["opensubtitles.com",721],["savefiles.com",722],["streamup.ws",723],["pfps.gg",724],["goodstream.one",725],["lecrabeinfo.net",726],["cerberusapp.com",727],["smashkarts.io",728],["beamng.wesupply.cx",729],["wowtv.de",[730,731]],["jsfiddle.net",[732,733]],["musicbusinessworldwide.com",734],["mahfda.com",735],["agar.live",736],["dailymotion.com",737],["scribd.com",738],["live.arynews.tv",739],["pornlore.com",[740,741]],["91porn.com",742],["www.google.*",743],["dataunlocker.com",[744,745]],["tacobell.com",746],["zefoy.com",747],["cnet.com",748],["trendyol.com",[751,752]],["trendyol-milla.com",[751,752]],["natgeotv.com",753],["globo.com",756],["linklog.tiagorangel.com",758],["wayfair.com",759]]);
const exceptionsMap = new Map([["cloudflare.com",[0]],["pingit.com",[181]],["loan.bgmi32bitapk.in",[302]],["lookmovie.studio",[609]]]);
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
