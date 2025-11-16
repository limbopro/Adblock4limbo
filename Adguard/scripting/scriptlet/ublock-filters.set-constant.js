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
const argsList = [["console.clear","undefined"],["aclib.runInPagePush","noopFunc"],["aclib.runBanner","{}","as","function"],["aclib.runInterstitial","throwFunc"],["adBlockDetected","undefined"],["HTMLScriptElement.prototype.onerror","undefined"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["dvtag.getTargeting","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["googletag.cmd","{}"],["_aps","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["google.ima.settings.setDisableFlashAds","noopFunc"],["pa.privacy","{}"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505","{}"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["ga.sendGaEvent","noopFunc"],["adobe","{}"],["MT","{}"],["MT.track","noopFunc"],["ClickOmniPartner","noopFunc"],["adex","{}"],["adex.getAdexUser","noopFunc"],["Adkit","noopFunc"],["Object.prototype.shouldExpectGoogleCMP","false"],["apntag.refresh","noopFunc"],["pa.sendEvent","noopFunc"],["Munchkin","{}"],["Munchkin.init","noopFunc"],["ttd_dom_ready","noopFunc"],["ramp","undefined"],["appInfo.snowplow.trackSelfDescribingEvent","noopFunc"],["_vwo_code.init","noopFunc"],["adobePageView","noopFunc"],["dapTracker","{}"],["dapTracker.track","noopFunc"],["newrelic","{}"],["newrelic.setCustomAttribute","noopFunc"],["adobeDataLayer","{}"],["adobeDataLayer.push","noopFunc"],["Object.prototype._adsDisabled","true"],["utag","{}"],["utag.link","noopFunc"],["_satellite.kpCustomEvent","noopFunc"],["Object.prototype.disablecommercials","true"],["Object.prototype._autoPlayOnlyWithPrerollAd","false"],["Sentry.addBreadcrumb","noopFunc"],["sensorsDataAnalytic201505.register","noopFunc"],["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["_ml_ads_ns","null"],["_sp_.config","undefined"],["AdController","noopFunc"],["console.clear","noopFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["console.clear","trueFunc"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["check_adblock","true"],["isAdBlockActive","false"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["adBlockEnabled","false"],["puShown","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["__NEXT_DATA__.props.clientConfigSettings.videoAds","undefined"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["openPopunder","noopFunc"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["CaptchmeState.adb","undefined"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["HTMLAnchorElement.prototype.click","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["check","true"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["runAdBlocker","false"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["cnbc.canShowAds","true"],["firefaucet","true"],["cRAds","true"],["uas","[]"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["foundation.adPlayer.bitmovin","{}"],["weltConfig.switches.videoAdBlockBlocker","false"],["window.__gv_org_tfa","undefined"],["Object.prototype.adReinsertion","noopFunc"],["getHomadConfig","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["ulp_noadb","true"],["Object.prototype.adblock_detected","false"],["timeSec","0"],["adsbygoogle.loaded","true"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["Adv_ab","false"],["sgpbCanRunAds","true"],["document.hidden","false"],["hasFocus","trueFunc"],["navigator.brave","undefined"],["Object.prototype.isAllAdClose","true"],["document.hasFocus","trueFunc"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["navigator.webkitTemporaryStorage.queryUsageAndQuota","noopFunc"],["document.onkeydown","noopFunc"],["showadas","true"],["alert","throwFunc"],["aSl.gcd","0"],["window.adLink","null"],["detectedAdblock","undefined"],["isTabActive","true"],["clicked","2"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["flashvars.mlogo",""],["vpPrerollVideo","undefined"],["PlayerConfig.config.CustomAdSetting","[]"],["PlayerConfig.trusted","true"],["PlayerConfig.config.AffiliateAdViewLevel","3"],["univresalP","noopFunc"],["hold_click","false"],["tie.ad_blocker_detector","false"],["admiral","noopFunc"],["gnt.x.uam","undefined","runAt","interactive"],["gnt.u.z","true"],["__INITIAL_DATA__.siteData.admiralScript"],["objAd.loadAdShield","noopFunc"],["window.myAd.runAd","noopFunc"],["detectAdBlock","noopFunc"],["AHE.is_member","1"],["__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["document.ontouchend","null"],["document.onclick","null"],["playID","1"],["MDCore.adblock","0"],["killads","true"],["NMAFMediaPlayerController.vastManager.vastShown","true"],["__NEXT_DATA__.runtimeConfig._qub_sdk.qubConfig.video.adBlockerDetectorEnabled","false"],["Object.prototype.advertising","{}"],["arePiratesOnBoard","false"],["googletag._loaded_","true"],["NoTenia","false"],["app._data.ads","[]"],["adsPlayer","undefined"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["__NEXT_DATA__.props.pageProps.adVideo","undefined"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["xv_ad_block","0"],["openWindow","noopFunc"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["showada","true"],["showax","true"],["p18","undefined"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["Object.prototype.adblockFound","false"],["createCanvas","noopFunc"],["document.bridCanRunAds","true"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["xv.sda.pp.init","noopFunc"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ad_link",""],["penciBlocksArray","[]"],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["D4zz","noopFunc"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["tv3Cmp.ConsentGiven","true"],["setupSkin","noopFunc"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["td_ad_background_click_link","undefined"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["__osw","undefined"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["puShown1","true"],["passthetest","true"],["pandaAdviewValidate","true"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["abpblocked","undefined"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["sssp","emptyObj"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["adSettings","[]"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["googletag","true"],["tOS2","150"],["checkAdBlocker","noopFunc"],["navigator.standalone","true"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["feedBack.showAffilaePromo","noopFunc"],["ShowAdvertising","{}"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["HTMLScriptElement.prototype.onerror","null"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["sharedController.adblockDetector","noopFunc"],["checkAdsStatus","noopFunc"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["checkAdBlockeraz","noopFunc"],["blockingAds","false"],["Yii2App.playbackTimeout","0"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["HTMLImageElement.prototype.onerror","undefined"],["HTMLImageElement.prototype.onload","undefined"],["powerAPITag","emptyObj"],["playerEnhancedConfig.run","throwFunc"],["aoAdBlockDetected","false"],["rodo.checkIsDidomiConsent","noopFunc"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["hasAdBlocker","false"],["initials.yld-pdpopunder",""],["advertisement3","true"],["Object.prototype.skipPreroll","true"],["DisableDevtool","noopFunc"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["dvsize","52"],["majorse","true"],["completed","1"],["testerli","false"],["w87.abd","noopFunc"],["w87.dsab","noopFunc"],["document.referrer",""],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["one_time","1"],["consentGiven","true"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["malisx","true"],["alim","true"],["ADS.isBannersEnabled","false"],["EASYFUN_ADS_CAN_RUN","true"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["detectedAdblock","noopFunc"],["Object.prototype.DetectByGoogleAd","noopFunc"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["NativeAd","noopFunc"],["window.navigator.brave","undefined"],["isAdblock","false"],["openPop","noopFunc"],["cns.library","true"],["BJSShowUnder","{}"],["BJSShowUnder.bindTo","noopFunc"],["BJSShowUnder.add","noopFunc"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["ABLK","false"],["_n_app.popunder","null"],["_n_app.options.ads.show_popunders","false"],["N_BetterJsPop.object","{}"],["isAdb","false"],["puOverlay","noopFunc"],["ue_adb_chk","1"],["canRunAds","1"],["countDown","0"],["runCheck","noopFunc"],["adsSlotRenderEndSeen","true"],["showModal","noopFunc"],["flashvars.mlogo_link",""],["isAdBlocked","noopFunc"],["URLlist","[]"],["aaw","{}"],["aaw.processAdsOnPage","noopFunc"],["doOpen","undefined"],["OneTrust","{}"],["OneTrust.IsAlertBoxClosed","trueFunc"],["FOXIZ_MAIN_SCRIPT.siteAccessDetector","noopFunc"],["openAdBlockPopup","noopFunc"],["advanced_ads_check_adblocker","noopFunc"],["attestHasAdBlockerActivated","true"],["extInstalled","true"],["SaveFiles.add","noopFunc"],["detectSandbox","noopFunc"],["ga","trueFunc"],["adbon","0"],["LCI.adBlockDetectorEnabled","false"],["stoCazzo","true"],["adblockDetected","false"],["importFAB","undefined"],["window.__CONFIGURATION__.adInsertion.enabled","false"],["window.__CONFIGURATION__.features.enableAdBlockerDetection","false"],["_carbonads","{}"],["_bsa","{}"],["uberad_mode"],["__aab_init","true"],["show_videoad_limited","noopFunc"],["__NATIVEADS_CANARY__","true"],["docManager.doDynamicBlurring","noopFunc"],["Object.prototype.adOnAdBlockPreventPlayback","false"],["pre_roll_url"],["post_roll_url"],["player.preroll","noopFunc"],["adblock_detect","noopFunc"],["rwt","noopFunc"],["_hjSettings","undefined"],["google_tag_manager","undefined"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["Object.prototype.updateModifiedCommerceUrl","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["process","{}"],["process.env","{}"],["Visitor","{}"],["send_gravity_event","noopFunc"],["send_recommendation_event","noopFunc"],["libAnalytics.data.get","noopFunc"],["adthrive._components.start","noopFunc"],["data","true"],["navigator.sendBeacon","noopFunc"]];
const hostnamesMap = new Map([["jilliandescribecompany.com",0],["gogoanime.*",[0,210]],["adrianmissionminute.com",0],["alejandrocenturyoil.com",0],["alleneconomicmatter.com",0],["bethshouldercan.com",0],["bigclatterhomesguideservice.com",0],["brittneystandardwestern.com",0],["brookethoughi.com",0],["brucevotewithin.com",0],["cindyeyefinal.com",0],["denisegrowthwide.com",0],["diananatureforeign.com",0],["donaldlineelse.com",0],["edwardarriveoften.com",0],["erikcoldperson.com",0],["evelynthankregion.com",0],["graceaddresscommunity.com",0],["heatherdiscussionwhen.com",0],["heatherwholeinvolve.com",0],["housecardsummerbutton.com",0],["jamessoundcost.com",0],["jamiesamewalk.com",0],["jasminetesttry.com",0],["jasonresponsemeasure.com",0],["jayservicestuff.com",0],["jennifercertaindevelopment.com",0],["jessicaglassauthor.com",0],["johnalwayssame.com",0],["johntryopen.com",0],["jonathansociallike.com",0],["josephseveralconcern.com",0],["kellywhatcould.com",0],["kennethofficialitem.com",0],["kristiesoundsimply.com",0],["lisatrialidea.com",0],["lorimuchbenefit.com",0],["loriwithinfamily.com",0],["lukecomparetwo.com",0],["lukesitturn.com",0],["mariatheserepublican.com",0],["markstyleall.com",0],["michaelapplysome.com",0],["morganoperationface.com",0],["nathanfromsubject.com",0],["paulkitchendark.com",0],["rebeccaneverbase.com",0],["richardsignfish.com",0],["roberteachfinal.com",0],["robertordercharacter.com",0],["robertplacespace.com",0],["ryanagoinvolve.com",0],["sandratableother.com",0],["sandrataxeight.com",0],["sethniceletter.com",0],["shannonpersonalcost.com",0],["susanhavekeep.com",0],["tinycat-voe-fashion.com",0],["toddpartneranimal.com",0],["troyyourlead.com",0],["uptodatefinishconference.com",0],["uptodatefinishconferenceroom.com",0],["voe.sx",0],["maxfinishseveral.com",0],["mikaylaarealike.com",0],["voe.sx>>",0],["javboys.tv>>",0],["freeplayervideo.com",0],["nazarickol.com",0],["player-cdn.com",0],["playhydrax.com",[0,417,418]],["rabbitstream.net",0],["fmovies.*",0],["japscan.*",[1,2,3]],["u26bekrb.fun",4],["tvtropes.org",5],["jakondo.ru",5],["trueachievements.com",5],["truesteamachievements.com",5],["truetrophies.com",5],["av1encodes.com",5],["myhentaicomics.com",5],["br.de",6],["indeed.com",7],["zillow.com",[7,111]],["pasteboard.co",8],["bbc.com",9],["clickhole.com",10],["deadspin.com",10],["gizmodo.com",10],["jalopnik.com",10],["jezebel.com",10],["kotaku.com",10],["lifehacker.com",10],["splinternews.com",10],["theinventory.com",10],["theonion.com",10],["theroot.com",10],["thetakeout.com",10],["pewresearch.org",10],["los40.com",[11,12]],["as.com",12],["caracol.com.co",12],["telegraph.co.uk",[13,14]],["poweredbycovermore.com",[13,66]],["lumens.com",[13,66]],["verizon.com",15],["humanbenchmark.com",16],["politico.com",17],["officedepot.co.cr",[18,19]],["officedepot.*",[20,21]],["usnews.com",22],["coolmathgames.com",[23,297,298,299]],["video.gazzetta.it",[24,25]],["oggi.it",[24,25]],["manoramamax.com",24],["factable.com",26],["thedailybeast.com",27],["zee5.com",28],["gala.fr",29],["geo.fr",29],["voici.fr",29],["gloucestershirelive.co.uk",30],["arsiv.mackolik.com",31],["jacksonguitars.com",32],["scandichotels.com",33],["stylist.co.uk",34],["nettiauto.com",35],["thaiairways.com",[36,37]],["cerbahealthcare.it",[38,39]],["futura-sciences.com",[38,56]],["toureiffel.paris",38],["campusfrance.org",[38,148]],["tiendaenlinea.claro.com.ni",[40,41]],["tieba.baidu.com",42],["fandom.com",[43,44,354]],["grasshopper.com",[45,46]],["epson.com.cn",[47,48,49,50]],["oe24.at",[51,52]],["szbz.de",51],["platform.autods.com",[53,54]],["kcra.com",55],["wcvb.com",55],["sporteurope.tv",55],["citibank.com.sg",57],["uol.com.br",[58,59,60,61,62]],["gazzetta.gr",63],["digicol.dpm.org.cn",[64,65]],["virginmediatelevision.ie",67],["larazon.es",[68,69]],["waitrosecellar.com",[70,71,72]],["kicker.de",[73,395]],["sharpen-free-design-generator.netlify.app",[74,75]],["help.cashctrl.com",[76,77]],["gry-online.pl",78],["vidaextra.com",79],["commande.rhinov.pro",[80,81]],["ecom.wixapps.net",[80,81]],["prod.hydra.sophos.com",[80,168]],["tipranks.com",[82,83]],["iceland.co.uk",[84,85,86]],["socket.pearsoned.com",87],["tntdrama.com",[88,89]],["trutv.com",[88,89]],["mobile.de",[90,91]],["ioe.vn",[92,93]],["geiriadur.ac.uk",[92,96]],["welsh-dictionary.ac.uk",[92,96]],["bikeportland.org",[94,95]],["biologianet.com",[59,60,61]],["10.com.au",[97,98]],["10play.com.au",[97,98]],["sunshine-live.de",[99,100]],["whatismyip.com",[101,102]],["myfitnesspal.com",103],["netoff.co.jp",[104,105]],["bluerabbitrx.com",[104,105]],["foundit.*",[106,107]],["clickjogos.com.br",108],["bristan.com",[109,110]],["share.hntv.tv",[112,113,114,115]],["forum.dji.com",[112,115]],["unionpayintl.com",[112,114]],["camel3.live",[112,113,115,169]],["streamelements.com",112],["optimum.net",[116,117]],["hdfcfund.com",118],["user.guancha.cn",[119,120]],["sosovalue.com",121],["bandyforbundet.no",[122,123]],["tatacommunications.com",124],["kb.arlo.com",[124,154]],["suamusica.com.br",[125,126,127]],["macrotrends.net",[128,129]],["code.world",130],["smartcharts.net",130],["topgear.com",131],["eservice.directauto.com",[132,133]],["nbcsports.com",134],["standard.co.uk",135],["pruefernavi.de",[136,137]],["17track.net",138],["visible.com",139],["hagerty.com",[140,141]],["marketplace.nvidia.com",142],["kino.de",[143,144]],["9now.nine.com.au",145],["worldstar.com",146],["prisjakt.no",147],["developer.arm.com",[149,150]],["sterkinekor.com",151],["iogames.space",152],["id.condenast.com",153],["tires.costco.com",155],["tires.costco.ca",155],["livemint.com",[156,157]],["login.asda.com",[158,159]],["mandai.com",[160,161]],["damndelicious.net",162],["laurelberninteriors.com",[162,761]],["brother-usa.com",[163,164]],["choose.kaiserpermanente.org",165],["tekniikanmaailma.fi",[166,167]],["m.youtube.com",[170,171,172,173]],["music.youtube.com",[170,171,172,173]],["tv.youtube.com",[170,171,172,173]],["www.youtube.com",[170,171,172,173]],["youtubekids.com",[170,171,172,173]],["youtube-nocookie.com",[170,171,172,173]],["eu-proxy.startpage.com",[170,171,173]],["timesofindia.indiatimes.com",174],["economictimes.indiatimes.com",175],["motherless.com",176],["sueddeutsche.de",177],["wiwo.de",178],["primewire.*",179],["alphaporno.com",[179,555]],["porngem.com",179],["shortit.pw",[179,254]],["familyporn.tv",179],["sbplay.*",179],["85po.com",[179,239]],["milfnut.*",179],["k1nk.co",179],["watchasians.cc",179],["sankakucomplex.com",180],["player.glomex.com",181],["merkur.de",181],["tz.de",181],["sxyprn.*",182],["hqq.*",[183,184]],["waaw.*",[184,185]],["hotpornfile.org",184],["younetu.*",184],["multiup.us",184],["peliculas8k.com",[184,185]],["czxxx.org",184],["vtplayer.online",184],["vvtplayer.*",184],["netu.ac",184],["netu.frembed.lol",184],["123link.*",186],["adshort.*",186],["mitly.us",186],["linkrex.net",186],["linx.cc",186],["oke.io",186],["linkshorts.*",186],["dz4link.com",186],["adsrt.*",186],["linclik.com",186],["shrt10.com",186],["vinaurl.*",186],["loptelink.com",186],["adfloz.*",186],["cut-fly.com",186],["linkfinal.com",186],["payskip.org",186],["cutpaid.com",186],["linkjust.com",186],["leechpremium.link",186],["icutlink.com",[186,273]],["oncehelp.com",186],["rgl.vn",186],["reqlinks.net",186],["bitlk.com",186],["qlinks.eu",186],["link.3dmili.com",186],["short-fly.com",186],["foxseotools.com",186],["dutchycorp.*",186],["shortearn.*",186],["pingit.*",186],["link.turkdown.com",186],["7r6.com",186],["oko.sh",186],["ckk.ai",186],["fc.lc",186],["fstore.biz",186],["shrink.*",186],["cuts-url.com",186],["eio.io",186],["exe.app",186],["exee.io",186],["exey.io",186],["skincarie.com",186],["exeo.app",186],["tmearn.*",186],["coinlyhub.com",[186,335]],["adsafelink.com",186],["aii.sh",186],["megalink.*",186],["cybertechng.com",[186,348]],["cutdl.xyz",186],["iir.ai",186],["shorteet.com",[186,366]],["miniurl.*",186],["smoner.com",186],["gplinks.*",186],["odisha-remix.com",[186,348]],["xpshort.com",[186,348]],["upshrink.com",186],["clk.*",186],["easysky.in",186],["veganab.co",186],["golink.bloggerishyt.in",186],["birdurls.com",186],["vipurl.in",186],["jameeltips.us",186],["promo-visits.site",186],["satoshi-win.xyz",[186,382]],["shorterall.com",186],["encurtandourl.com",186],["forextrader.site",186],["postazap.com",186],["cety.app",186],["exego.app",[186,380]],["cutlink.net",186],["cutyurls.com",186],["cutty.app",186],["cutnet.net",186],["jixo.online",186],["tinys.click",[186,348]],["cpm.icu",186],["panyshort.link",186],["enagato.com",186],["pandaznetwork.com",186],["tpi.li",186],["oii.la",186],["recipestutorials.com",186],["shrinkme.*",186],["shrinke.*",186],["mrproblogger.com",186],["themezon.net",186],["shrinkforearn.in",186],["oii.io",186],["du-link.in",186],["atglinks.com",186],["thotpacks.xyz",186],["megaurl.in",186],["megafly.in",186],["simana.online",186],["fooak.com",186],["joktop.com",186],["evernia.site",186],["falpus.com",186],["link.paid4link.com",186],["exalink.fun",186],["shortxlinks.com",186],["upfion.com",186],["upfiles.app",186],["upfiles-urls.com",186],["flycutlink.com",[186,348]],["linksly.co",186],["link1s.*",186],["pkr.pw",186],["imagenesderopaparaperros.com",186],["shortenbuddy.com",186],["apksvip.com",186],["4cash.me",186],["namaidani.com",186],["shortzzy.*",186],["teknomuda.com",186],["shorttey.*",[186,334]],["miuiku.com",186],["savelink.site",186],["lite-link.*",186],["adcorto.*",186],["samaa-pro.com",186],["miklpro.com",186],["modapk.link",186],["ccurl.net",186],["linkpoi.me",186],["pewgame.com",186],["haonguyen.top",186],["zshort.*",186],["crazyblog.in",186],["cutearn.net",186],["rshrt.com",186],["filezipa.com",186],["dz-linkk.com",186],["upfiles.*",186],["theblissempire.com",186],["finanzas-vida.com",186],["adurly.cc",186],["paid4.link",186],["link.asiaon.top",186],["go.gets4link.com",186],["linkfly.*",186],["beingtek.com",186],["shorturl.unityassets4free.com",186],["disheye.com",186],["techymedies.com",186],["za.gl",[186,287]],["bblink.com",186],["myad.biz",186],["swzz.xyz",186],["vevioz.com",186],["charexempire.com",186],["clk.asia",186],["sturls.com",186],["myshrinker.com",186],["wplink.*",186],["rocklink.in",186],["techgeek.digital",186],["download3s.net",186],["shortx.net",186],["tlin.me",186],["bestcash2020.com",186],["adslink.pw",[186,636]],["novelssites.com",186],["faucetcrypto.net",186],["trxking.xyz",186],["weadown.com",186],["m.bloggingguidance.com",186],["link.codevn.net",186],["link4rev.site",186],["c2g.at",186],["bitcosite.com",[186,569]],["cryptosh.pro",186],["windowslite.net",[186,348]],["viewfr.com",186],["cl1ca.com",186],["4br.me",186],["fir3.net",186],["seulink.*",186],["encurtalink.*",186],["kiddyshort.com",186],["watchmygf.me",[187,212]],["camwhores.*",[187,197,238,239,240]],["camwhorez.tv",[187,197,238,239]],["cambay.tv",[187,219,238,265,267,268,269,270]],["fpo.xxx",[187,219]],["sexemix.com",187],["heavyfetish.com",[187,753]],["thotcity.su",187],["viralxxxporn.com",[187,399]],["tube8.*",[188,189]],["you-porn.com",189],["youporn.*",189],["youporngay.com",189],["youpornru.com",189],["redtube.*",189],["9908ww.com",189],["adelaidepawnbroker.com",189],["bztube.com",189],["hotovs.com",189],["insuredhome.org",189],["nudegista.com",189],["pornluck.com",189],["vidd.se",189],["pornhub.*",[189,324]],["pornhub.com",189],["pornerbros.com",190],["freep.com",190],["porn.com",191],["tune.pk",192],["noticias.gospelmais.com.br",193],["techperiod.com",193],["viki.com",[194,195]],["watch-series.*",196],["watchseries.*",196],["vev.*",196],["vidop.*",196],["vidup.*",196],["sleazyneasy.com",[197,198,199]],["smutr.com",[197,331]],["tktube.com",197],["yourporngod.com",[197,198]],["javbangers.com",[197,465]],["camfox.com",197],["camthots.tv",[197,265]],["shegotass.info",197],["amateur8.com",197],["bigtitslust.com",197],["ebony8.com",197],["freeporn8.com",197],["lesbian8.com",197],["maturetubehere.com",197],["sortporn.com",197],["motherporno.com",[197,198,219,267]],["theporngod.com",[197,198]],["watchdirty.to",[197,239,240,268]],["pornsocket.com",200],["luxuretv.com",201],["porndig.com",[202,203]],["webcheats.com.br",204],["ceesty.com",[205,206]],["gestyy.com",[205,206]],["corneey.com",206],["destyy.com",206],["festyy.com",206],["sh.st",206],["mitaku.net",206],["angrybirdsnest.com",207],["zrozz.com",207],["clix4btc.com",207],["4tests.com",207],["goltelevision.com",207],["news-und-nachrichten.de",207],["laradiobbs.net",207],["urlaubspartner.net",207],["produktion.de",207],["cinemaxxl.de",207],["bladesalvador.com",207],["tempr.email",207],["friendproject.net",207],["covrhub.com",207],["trust.zone",207],["business-standard.com",207],["planetsuzy.org",208],["empflix.com",209],["xmovies8.*",210],["masteranime.tv",210],["0123movies.*",210],["gostream.*",210],["gomovies.*",210],["freeviewmovies.com",211],["filehorse.com",211],["guidetnt.com",211],["starmusiq.*",211],["sp-today.com",211],["linkvertise.com",211],["eropaste.net",211],["getpaste.link",211],["sharetext.me",211],["wcofun.*",211],["note.sieuthuthuat.com",211],["gadgets.es",[211,474]],["amateurporn.co",[211,268]],["watchanimesub.net",211],["wcoanimesub.tv",211],["wcoforever.net",211],["transparentcalifornia.com",212],["deepbrid.com",213],["webnovel.com",214],["streamwish.*",[215,216]],["oneupload.to",216],["wishfast.top",216],["rubystm.com",216],["rubyvid.com",216],["rubyvidhub.com",216],["stmruby.com",216],["streamruby.com",216],["schwaebische.de",217],["8tracks.com",218],["3movs.com",219],["bravoerotica.net",[219,267]],["youx.xxx",219],["camclips.tv",[219,331]],["xtits.*",[219,267]],["camflow.tv",[219,267,268,305,399]],["camhoes.tv",[219,265,267,268,305,399]],["xmegadrive.com",219],["xxxymovies.com",219],["xxxshake.com",219],["gayck.com",219],["xhand.com",[219,267]],["analdin.com",[219,267]],["revealname.com",220],["golfchannel.com",221],["stream.nbcsports.com",221],["mathdf.com",221],["gamcore.com",222],["porcore.com",222],["porngames.tv",222],["69games.xxx",222],["asianpornjav.com",222],["javmix.app",222],["haaretz.co.il",223],["haaretz.com",223],["hungama.com",223],["a-o.ninja",223],["anime-odcinki.pl",223],["shortgoo.blogspot.com",223],["tonanmedia.my.id",[223,588]],["isekaipalace.com",223],["plyjam.*",[224,225]],["foxsports.com.au",226],["canberratimes.com.au",226],["thesimsresource.com",227],["fxporn69.*",228],["vipbox.*",229],["viprow.*",229],["nba.com",230],["ctrl.blog",231],["sportlife.es",232],["finofilipino.org",233],["desbloqueador.*",234],["xberuang.*",235],["teknorizen.*",235],["mysflink.blogspot.com",235],["ashemaletube.*",236],["paktech2.com",236],["assia.tv",237],["assia4.com",237],["cwtvembeds.com",[239,266]],["camlovers.tv",239],["porntn.com",239],["pornissimo.org",239],["sexcams-24.com",[239,268]],["watchporn.to",[239,268]],["camwhorez.video",239],["footstockings.com",[239,240,268]],["xmateur.com",[239,240,268]],["multi.xxx",240],["weatherx.co.in",[241,242]],["sunbtc.space",241],["subtorrents.*",243],["subtorrents1.*",243],["newpelis.*",243],["pelix.*",243],["allcalidad.*",243],["infomaniakos.*",243],["ojogos.com.br",244],["powforums.com",245],["supforums.com",245],["studybullet.com",245],["usgamer.net",246],["recordonline.com",246],["freebitcoin.win",247],["e-monsite.com",247],["coindice.win",247],["freiepresse.de",248],["investing.com",249],["tornadomovies.*",250],["mp3fiber.com",251],["chicoer.com",252],["dailybreeze.com",252],["dailybulletin.com",252],["dailynews.com",252],["delcotimes.com",252],["eastbaytimes.com",252],["macombdaily.com",252],["ocregister.com",252],["pasadenastarnews.com",252],["pe.com",252],["presstelegram.com",252],["redlandsdailyfacts.com",252],["reviewjournal.com",252],["santacruzsentinel.com",252],["saratogian.com",252],["sentinelandenterprise.com",252],["sgvtribune.com",252],["tampabay.com",252],["times-standard.com",252],["theoaklandpress.com",252],["trentonian.com",252],["twincities.com",252],["whittierdailynews.com",252],["bostonherald.com",252],["dailycamera.com",252],["sbsun.com",252],["dailydemocrat.com",252],["montereyherald.com",252],["orovillemr.com",252],["record-bee.com",252],["redbluffdailynews.com",252],["reporterherald.com",252],["thereporter.com",252],["timescall.com",252],["timesheraldonline.com",252],["ukiahdailyjournal.com",252],["dailylocal.com",252],["mercurynews.com",252],["suedkurier.de",253],["anysex.com",255],["icdrama.*",256],["mangasail.*",256],["pornve.com",257],["file4go.*",258],["coolrom.com.au",258],["marie-claire.es",259],["gamezhero.com",259],["flashgirlgames.com",259],["onlinesudoku.games",259],["mpg.football",259],["sssam.com",259],["globalnews.ca",260],["drinksmixer.com",261],["leitesculinaria.com",261],["fupa.net",262],["browardpalmbeach.com",263],["dallasobserver.com",263],["houstonpress.com",263],["miaminewtimes.com",263],["phoenixnewtimes.com",263],["westword.com",263],["nowtv.com.tr",264],["caminspector.net",265],["camwhoreshd.com",265],["camgoddess.tv",265],["gay4porn.com",267],["mypornhere.com",267],["mangovideo.*",268],["love4porn.com",268],["thotvids.com",268],["watchmdh.to",268],["celebwhore.com",268],["cluset.com",268],["sexlist.tv",268],["4kporn.xxx",268],["xhomealone.com",268],["lusttaboo.com",[268,534]],["hentai-moon.com",268],["camhub.cc",[268,692]],["mediapason.it",271],["linkspaid.com",271],["tuotromedico.com",271],["neoteo.com",271],["phoneswiki.com",271],["celebmix.com",271],["myneobuxportal.com",271],["oyungibi.com",271],["25yearslatersite.com",271],["jeshoots.com",272],["techhx.com",272],["karanapk.com",272],["flashplayer.fullstacks.net",274],["cloudapps.herokuapp.com",274],["youfiles.herokuapp.com",274],["texteditor.nsspot.net",274],["temp-mail.org",275],["asianclub.*",276],["javhdporn.net",276],["vidmoly.*",277],["comnuan.com",278],["veedi.com",279],["battleboats.io",279],["anitube.*",280],["fruitlab.com",280],["haddoz.net",280],["streamingcommunity.*",280],["garoetpos.com",280],["stiletv.it",281],["hqtv.biz",282],["liveuamap.com",283],["audycje.tokfm.pl",284],["shush.se",285],["allkpop.com",286],["empire-anime.*",[287,583,584,585,586,587]],["empire-streaming.*",[287,583,584,585]],["empire-anime.com",[287,583,584,585]],["empire-streamz.fr",[287,583,584,585]],["empire-stream.*",[287,583,584,585]],["pickcrackpasswords.blogspot.com",288],["kfrfansub.com",289],["thuglink.com",289],["voipreview.org",289],["illicoporno.com",290],["lavoixdux.com",290],["tonpornodujour.com",290],["jacquieetmichel.net",290],["swame.com",290],["vosfemmes.com",290],["voyeurfrance.net",290],["jacquieetmicheltv.net",[290,642,643]],["pogo.com",291],["cloudvideo.tv",292],["legionjuegos.org",293],["legionpeliculas.org",293],["legionprogramas.org",293],["16honeys.com",294],["elespanol.com",295],["remodelista.com",296],["audiofanzine.com",300],["uploadev.*",301],["developerinsider.co",302],["thehindu.com",303],["cambro.tv",[304,305]],["boobsradar.com",[305,399,712]],["nibelungen-kurier.de",306],["adfoc.us",307],["tackledsoul.com",307],["adrino1.bonloan.xyz",307],["vi-music.app",307],["instanders.app",307],["rokni.xyz",307],["keedabankingnews.com",307],["tea-coffee.net",307],["spatsify.com",307],["newedutopics.com",307],["getviralreach.in",307],["edukaroo.com",307],["funkeypagali.com",307],["careersides.com",307],["nayisahara.com",307],["wikifilmia.com",307],["infinityskull.com",307],["viewmyknowledge.com",307],["iisfvirtual.in",307],["starxinvestor.com",307],["jkssbalerts.com",307],["sahlmarketing.net",307],["filmypoints.in",307],["fitnessholic.net",307],["moderngyan.com",307],["sattakingcharts.in",307],["bankshiksha.in",307],["earn.mpscstudyhub.com",307],["earn.quotesopia.com",307],["money.quotesopia.com",307],["best-mobilegames.com",307],["learn.moderngyan.com",307],["bharatsarkarijobalert.com",307],["quotesopia.com",307],["creditsgoal.com",307],["bgmi32bitapk.in",307],["techacode.com",307],["trickms.com",307],["ielts-isa.edu.vn",307],["loan.punjabworks.com",307],["sptfy.be",307],["mcafee-com.com",[307,380]],["pianetamountainbike.it",308],["barchart.com",309],["modelisme.com",310],["parasportontario.ca",310],["prescottenews.com",310],["nrj-play.fr",311],["hackingwithreact.com",312],["gutekueche.at",313],["peekvids.com",314],["playvids.com",314],["pornflip.com",314],["redensarten-index.de",315],["vw-page.com",316],["viz.com",[317,318]],["0rechner.de",319],["configspc.com",320],["xopenload.me",320],["uptobox.com",320],["uptostream.com",320],["japgay.com",321],["mega-debrid.eu",322],["dreamdth.com",323],["diaridegirona.cat",325],["diariodeibiza.es",325],["diariodemallorca.es",325],["diarioinformacion.com",325],["eldia.es",325],["emporda.info",325],["farodevigo.es",325],["laopinioncoruna.es",325],["laopiniondemalaga.es",325],["laopiniondemurcia.es",325],["laopiniondezamora.es",325],["laprovincia.es",325],["levante-emv.com",325],["mallorcazeitung.es",325],["regio7.cat",325],["superdeporte.es",325],["playpaste.com",326],["cnbc.com",327],["firefaucet.win",328],["74k.io",[329,330]],["cloudwish.xyz",330],["gradehgplus.com",330],["javindo.site",330],["javindosub.site",330],["kamehaus.net",330],["movearnpre.com",330],["arabshentai.com>>",330],["javdo.cc>>",330],["javenglish.cc>>",330],["javhd.*>>",330],["javhdz.*>>",330],["roshy.tv>>",330],["sextb.*>>",330],["fullhdxxx.com",332],["pornclassic.tube",333],["tubepornclassic.com",333],["etonline.com",334],["creatur.io",334],["lookcam.*",334],["drphil.com",334],["urbanmilwaukee.com",334],["hideandseek.world",334],["myabandonware.com",334],["kendam.com",334],["wttw.com",334],["synonyms.com",334],["definitions.net",334],["hostmath.com",334],["camvideoshub.com",334],["minhaconexao.com.br",334],["home-made-videos.com",336],["amateur-couples.com",336],["slutdump.com",336],["artificialnudes.com",336],["asianal.xyz",336],["asianmassage.xyz",336],["bdsmkingdom.xyz",336],["brunettedeepthroat.com",336],["compilationtube.xyz",336],["cosplaynsfw.xyz",336],["crazytoys.xyz",336],["fikfak.net",336],["flexxporn.com",336],["handypornos.net",336],["hardcorelesbian.xyz",336],["heimporno.com",336],["instaporno.net",336],["latinabbw.xyz",336],["nsfwhowto.xyz",336],["platinporno.com",336],["pornahegao.xyz",336],["pornfeet.xyz",336],["pornobait.com",336],["pornretro.xyz",336],["redheaddeepthroat.com",336],["romanticlesbian.com",336],["sexfilmkiste.com",336],["sexontheboat.xyz",336],["sexroute.net",336],["towheaddeepthroat.com",336],["traumporno.com",336],["dpstream.*",337],["produsat.com",338],["bluemediafiles.*",339],["12thman.com",340],["acusports.com",340],["atlantic10.com",340],["auburntigers.com",340],["baylorbears.com",340],["bceagles.com",340],["bgsufalcons.com",340],["big12sports.com",340],["bigten.org",340],["bradleybraves.com",340],["butlersports.com",340],["cmumavericks.com",340],["conferenceusa.com",340],["cyclones.com",340],["dartmouthsports.com",340],["daytonflyers.com",340],["dbupatriots.com",340],["dbusports.com",340],["denverpioneers.com",340],["fduknights.com",340],["fgcuathletics.com",340],["fightinghawks.com",340],["fightingillini.com",340],["floridagators.com",340],["friars.com",340],["friscofighters.com",340],["gamecocksonline.com",340],["goarmywestpoint.com",340],["gobison.com",340],["goblueraiders.com",340],["gobobcats.com",340],["gocards.com",340],["gocreighton.com",340],["godeacs.com",340],["goexplorers.com",340],["goetbutigers.com",340],["gofrogs.com",340],["gogriffs.com",340],["gogriz.com",340],["golobos.com",340],["gomarquette.com",340],["gopack.com",340],["gophersports.com",340],["goprincetontigers.com",340],["gopsusports.com",340],["goracers.com",340],["goshockers.com",340],["goterriers.com",340],["gotigersgo.com",340],["gousfbulls.com",340],["govandals.com",340],["gowyo.com",340],["goxavier.com",340],["gozags.com",340],["gozips.com",340],["griffinathletics.com",340],["guhoyas.com",340],["gwusports.com",340],["hailstate.com",340],["hamptonpirates.com",340],["hawaiiathletics.com",340],["hokiesports.com",340],["huskers.com",340],["icgaels.com",340],["iuhoosiers.com",340],["jsugamecocksports.com",340],["longbeachstate.com",340],["loyolaramblers.com",340],["lrtrojans.com",340],["lsusports.net",340],["morrisvillemustangs.com",340],["msuspartans.com",340],["muleriderathletics.com",340],["mutigers.com",340],["navysports.com",340],["nevadawolfpack.com",340],["niuhuskies.com",340],["nkunorse.com",340],["nuhuskies.com",340],["nusports.com",340],["okstate.com",340],["olemisssports.com",340],["omavs.com",340],["ovcsports.com",340],["owlsports.com",340],["purduesports.com",340],["redstormsports.com",340],["richmondspiders.com",340],["sfajacks.com",340],["shupirates.com",340],["siusalukis.com",340],["smcgaels.com",340],["smumustangs.com",340],["soconsports.com",340],["soonersports.com",340],["themw.com",340],["tulsahurricane.com",340],["txst.com",340],["txstatebobcats.com",340],["ubbulls.com",340],["ucfknights.com",340],["ucirvinesports.com",340],["uconnhuskies.com",340],["uhcougars.com",340],["uicflames.com",340],["umterps.com",340],["uncwsports.com",340],["unipanthers.com",340],["unlvrebels.com",340],["uoflsports.com",340],["usdtoreros.com",340],["utahstateaggies.com",340],["utepathletics.com",340],["utrockets.com",340],["uvmathletics.com",340],["uwbadgers.com",340],["villanova.com",340],["wkusports.com",340],["wmubroncos.com",340],["woffordterriers.com",340],["1pack1goal.com",340],["bcuathletics.com",340],["bubraves.com",340],["goblackbears.com",340],["golightsgo.com",340],["gomcpanthers.com",340],["goutsa.com",340],["mercerbears.com",340],["pirateblue.com",340],["pirateblue.net",340],["pirateblue.org",340],["quinnipiacbobcats.com",340],["towsontigers.com",340],["tribeathletics.com",340],["tribeclub.com",340],["utepminermaniacs.com",340],["utepminers.com",340],["wkutickets.com",340],["aopathletics.org",340],["atlantichockeyonline.com",340],["bigsouthnetwork.com",340],["bigsouthsports.com",340],["chawomenshockey.com",340],["dbupatriots.org",340],["drakerelays.org",340],["ecac.org",340],["ecacsports.com",340],["emueagles.com",340],["emugameday.com",340],["gculopes.com",340],["godrakebulldog.com",340],["godrakebulldogs.com",340],["godrakebulldogs.net",340],["goeags.com",340],["goislander.com",340],["goislanders.com",340],["gojacks.com",340],["gomacsports.com",340],["gseagles.com",340],["hubison.com",340],["iowaconference.com",340],["ksuowls.com",340],["lonestarconference.org",340],["mascac.org",340],["midwestconference.org",340],["mountaineast.org",340],["niu-pack.com",340],["nulakers.ca",340],["oswegolakers.com",340],["ovcdigitalnetwork.com",340],["pacersports.com",340],["rmacsports.org",340],["rollrivers.com",340],["samfordsports.com",340],["uncpbraves.com",340],["usfdons.com",340],["wiacsports.com",340],["alaskananooks.com",340],["broncathleticfund.com",340],["cameronaggies.com",340],["columbiacougars.com",340],["etownbluejays.com",340],["gobadgers.ca",340],["golancers.ca",340],["gometrostate.com",340],["gothunderbirds.ca",340],["kentstatesports.com",340],["lehighsports.com",340],["lopers.com",340],["lycoathletics.com",340],["lycomingathletics.com",340],["maraudersports.com",340],["mauiinvitational.com",340],["msumavericks.com",340],["nauathletics.com",340],["nueagles.com",340],["nwusports.com",340],["oceanbreezenyc.org",340],["patriotathleticfund.com",340],["pittband.com",340],["principiaathletics.com",340],["roadrunnersathletics.com",340],["sidearmsocial.com",340],["snhupenmen.com",340],["stablerarena.com",340],["stoutbluedevils.com",340],["uwlathletics.com",340],["yumacs.com",340],["collegefootballplayoff.com",340],["csurams.com",340],["cubuffs.com",340],["gobearcats.com",340],["gohuskies.com",340],["mgoblue.com",340],["osubeavers.com",340],["pittsburghpanthers.com",340],["rolltide.com",340],["texassports.com",340],["thesundevils.com",340],["uclabruins.com",340],["wvuathletics.com",340],["wvusports.com",340],["arizonawildcats.com",340],["calbears.com",340],["cuse.com",340],["georgiadogs.com",340],["goducks.com",340],["goheels.com",340],["gostanford.com",340],["insidekstatesports.com",340],["insidekstatesports.info",340],["insidekstatesports.net",340],["insidekstatesports.org",340],["k-stateathletics.com",340],["k-statefootball.net",340],["k-statefootball.org",340],["k-statesports.com",340],["k-statesports.net",340],["k-statesports.org",340],["k-statewomenshoops.com",340],["k-statewomenshoops.net",340],["k-statewomenshoops.org",340],["kstateathletics.com",340],["kstatefootball.net",340],["kstatefootball.org",340],["kstatesports.com",340],["kstatewomenshoops.com",340],["kstatewomenshoops.net",340],["kstatewomenshoops.org",340],["ksuathletics.com",340],["ksusports.com",340],["scarletknights.com",340],["showdownforrelief.com",340],["syracusecrunch.com",340],["texastech.com",340],["theacc.com",340],["ukathletics.com",340],["usctrojans.com",340],["utahutes.com",340],["utsports.com",340],["wsucougars.com",340],["vidlii.com",[340,363]],["tricksplit.io",340],["fangraphs.com",341],["stern.de",342],["geo.de",342],["brigitte.de",342],["schoener-wohnen.de",342],["welt.de",343],["tvspielfilm.de",344],["tvtoday.de",344],["chip.de",344],["focus.de",344],["fitforfun.de",344],["n-tv.de",345],["rtl.de",345],["player.rtl2.de",346],["planetaminecraft.com",347],["cravesandflames.com",348],["codesnse.com",348],["flyad.vip",348],["lapresse.ca",349],["kolyoom.com",350],["ilovephd.com",350],["negumo.com",351],["games.wkb.jp",[352,353]],["kenshi.fandom.com",355],["hausbau-forum.de",356],["homeairquality.org",356],["call4cloud.nl",356],["fake-it.ws",357],["laksa19.github.io",358],["1shortlink.com",359],["u-s-news.com",360],["luscious.net",361],["makemoneywithurl.com",362],["junkyponk.com",362],["healthfirstweb.com",362],["vocalley.com",362],["yogablogfit.com",362],["howifx.com",362],["en.financerites.com",362],["mythvista.com",362],["livenewsflix.com",362],["cureclues.com",362],["apekite.com",362],["enit.in",362],["iammagnus.com",363],["dailyvideoreports.net",363],["unityassets4free.com",363],["docer.*",364],["resetoff.pl",364],["sexodi.com",364],["cdn77.org",365],["momxxxsex.com",366],["penisbuyutucum.net",366],["ujszo.com",367],["newsmax.com",368],["nadidetarifler.com",369],["siz.tv",369],["suzylu.co.uk",[370,371]],["onworks.net",372],["yabiladi.com",372],["downloadsoft.net",373],["newsobserver.com",374],["arkadiumhosted.com",374],["testlanguages.com",375],["newsinlevels.com",375],["videosinlevels.com",375],["procinehub.com",376],["bookmystrip.com",376],["imagereviser.com",377],["pubgaimassist.com",378],["gyanitheme.com",378],["tech.trendingword.com",378],["blog.potterworld.co",378],["hipsonyc.com",378],["tech.pubghighdamage.com",378],["blog.itijobalert.in",378],["techkhulasha.com",378],["jiocinema.com",378],["rapid-cloud.co",378],["uploadmall.com",378],["4funbox.com",379],["nephobox.com",379],["1024tera.com",379],["terabox.*",379],["starkroboticsfrc.com",380],["sinonimos.de",380],["antonimos.de",380],["quesignifi.ca",380],["tiktokrealtime.com",380],["tiktokcounter.net",380],["tpayr.xyz",380],["poqzn.xyz",380],["ashrfd.xyz",380],["rezsx.xyz",380],["tryzt.xyz",380],["ashrff.xyz",380],["rezst.xyz",380],["dawenet.com",380],["erzar.xyz",380],["waezm.xyz",380],["waezg.xyz",380],["blackwoodacademy.org",380],["cryptednews.space",380],["vivuq.com",380],["swgop.com",380],["vbnmll.com",380],["telcoinfo.online",380],["dshytb.com",380],["btcbitco.in",[380,381]],["btcsatoshi.net",380],["cempakajaya.com",380],["crypto4yu.com",380],["readbitcoin.org",380],["wiour.com",380],["finish.addurl.biz",380],["aiimgvlog.fun",[380,384]],["laweducationinfo.com",380],["savemoneyinfo.com",380],["worldaffairinfo.com",380],["godstoryinfo.com",380],["successstoryinfo.com",380],["cxissuegk.com",380],["learnmarketinfo.com",380],["bhugolinfo.com",380],["armypowerinfo.com",380],["rsgamer.app",380],["phonereviewinfo.com",380],["makeincomeinfo.com",380],["gknutshell.com",380],["vichitrainfo.com",380],["workproductivityinfo.com",380],["dopomininfo.com",380],["hostingdetailer.com",380],["fitnesssguide.com",380],["tradingfact4u.com",380],["cryptofactss.com",380],["softwaredetail.com",380],["artoffocas.com",380],["insurancesfact.com",380],["travellingdetail.com",380],["advertisingexcel.com",380],["allcryptoz.net",380],["batmanfactor.com",380],["beautifulfashionnailart.com",380],["crewbase.net",380],["documentaryplanet.xyz",380],["crewus.net",380],["gametechreviewer.com",380],["midebalonu.net",380],["misterio.ro",380],["phineypet.com",380],["seory.xyz",380],["shinbhu.net",380],["shinchu.net",380],["substitutefor.com",380],["talkforfitness.com",380],["thefitbrit.co.uk",380],["thumb8.net",380],["thumb9.net",380],["topcryptoz.net",380],["uniqueten.net",380],["ultraten.net",380],["exactpay.online",380],["quins.us",380],["kiddyearner.com",380],["bildirim.*",383],["arahdrive.com",384],["appsbull.com",385],["diudemy.com",385],["maqal360.com",[385,386,387]],["lifesurance.info",388],["akcartoons.in",389],["cybercityhelp.in",389],["dl.apkmoddone.com",390],["phongroblox.com",390],["fuckingfast.net",391],["buzzheavier.com",391],["tickhosting.com",392],["in91vip.win",393],["datavaults.co",394],["t-online.de",396],["upornia.*",[397,398]],["bobs-tube.com",399],["pornohirsch.net",400],["bembed.net",401],["embedv.net",401],["javguard.club",401],["listeamed.net",401],["v6embed.xyz",401],["vembed.*",401],["vid-guard.com",401],["vinomo.xyz",401],["nekolink.site",[402,403]],["141jav.com",404],["141tube.com",404],["aagmaal.com",404],["camcam.cc",404],["evojav.pro",404],["javneon.tv",404],["javsaga.ninja",404],["nyahentai.re",404],["torrentkitty.one",404],["webmaal.cfd",404],["pixsera.net",405],["jnews5.com",406],["pc-builds.com",407],["today.com",407],["videogamer.com",407],["wrestlinginc.com",407],["azcentral.com",408],["coloradoan.com",408],["greenbaypressgazette.com",408],["palmbeachpost.com",408],["usatoday.com",[408,409]],["ydr.com",408],["247sports.com",410],["indiatimes.com",411],["netzwelt.de",412],["filmibeat.com",413],["goodreturns.in",413],["mykhel.com",413],["daemonanime.net",413],["luckydice.net",413],["weatherwx.com",413],["sattaguess.com",413],["winshell.de",413],["rosasidan.ws",413],["upiapi.in",413],["networkhint.com",413],["thichcode.net",413],["texturecan.com",413],["tikmate.app",[413,624]],["arcaxbydz.id",413],["quotesshine.com",413],["worldhistory.org",414],["arcade.buzzrtv.com",415],["arcade.dailygazette.com",415],["arcade.lemonde.fr",415],["arena.gamesforthebrain.com",415],["bestpuzzlesandgames.com",415],["cointiply.arkadiumarena.com",415],["gamelab.com",415],["gameplayneo.com",415],["games.abqjournal.com",415],["games.arkadium.com",415],["games.amny.com",415],["games.bellinghamherald.com",415],["games.besthealthmag.ca",415],["games.bnd.com",415],["games.boston.com",415],["games.bostonglobe.com",415],["games.bradenton.com",415],["games.centredaily.com",415],["games.charlottegames.cnhinews.com",415],["games.crosswordgiant.com",415],["games.dailymail.co.uk",415],["games.dallasnews.com",415],["games.daytondailynews.com",415],["games.denverpost.com",415],["games.everythingzoomer.com",415],["games.fresnobee.com",415],["games.gameshownetwork.com",415],["games.get.tv",415],["games.greatergood.com",415],["games.heraldonline.com",415],["games.heraldsun.com",415],["games.idahostatesman.com",415],["games.insp.com",415],["games.islandpacket.com",415],["games.journal-news.com",415],["games.kansas.com",415],["games.kansascity.com",415],["games.kentucky.com",415],["games.lancasteronline.com",415],["games.ledger-enquirer.com",415],["games.macon.com",415],["games.mashable.com",415],["games.mercedsunstar.com",415],["games.metro.us",415],["games.metv.com",415],["games.miamiherald.com",415],["games.modbee.com",415],["games.moviestvnetwork.com",415],["games.myrtlebeachonline.com",415],["games.games.newsgames.parade.com",415],["games.pressdemocrat.com",415],["games.puzzlebaron.com",415],["games.puzzler.com",415],["games.puzzles.ca",415],["games.qns.com",415],["games.readersdigest.ca",415],["games.sacbee.com",415],["games.sanluisobispo.com",415],["games.sixtyandme.com",415],["games.sltrib.com",415],["games.springfieldnewssun.com",415],["games.star-telegram.com",415],["games.startribune.com",415],["games.sunherald.com",415],["games.theadvocate.com",415],["games.thenewstribune.com",415],["games.theolympian.com",415],["games.theportugalnews.com",415],["games.thestar.com",415],["games.thestate.com",415],["games.tri-cityherald.com",415],["games.triviatoday.com",415],["games.usnews.com",415],["games.word.tips",415],["games.wordgenius.com",415],["games.wtop.com",415],["jeux.meteocity.com",415],["juegos.as.com",415],["juegos.elnuevoherald.com",415],["juegos.elpais.com",415],["philly.arkadiumarena.com",415],["play.dictionary.com",415],["puzzles.bestforpuzzles.com",415],["puzzles.centralmaine.com",415],["puzzles.crosswordsolver.org",415],["puzzles.independent.co.uk",415],["puzzles.nola.com",415],["puzzles.pressherald.com",415],["puzzles.standard.co.uk",415],["puzzles.sunjournal.com",415],["arkadium.com",416],["abysscdn.com",[417,418]],["turtleviplay.xyz",419],["mixdrop.*",420],["ai.hubtoday.app",421],["news.now.com",422],["qub.ca",423],["matele.be",424],["gostyn24.pl",425],["lared.cl",426],["atozmath.com",[426,450,451,452,453,454,455]],["pcbolsa.com",427],["hdfilmizlesen.com",428],["watch.rkplayer.xyz",429],["arcai.com",430],["my-code4you.blogspot.com",431],["flickr.com",432],["firefile.cc",433],["pestleanalysis.com",433],["kochamjp.pl",433],["tutorialforlinux.com",433],["whatsaero.com",433],["animeblkom.net",[433,447]],["blkom.com",433],["globes.co.il",[434,435]],["jardiner-malin.fr",436],["tw-calc.net",437],["ohmybrush.com",438],["talkceltic.net",439],["mentalfloss.com",440],["uprafa.com",441],["cube365.net",442],["wwwfotografgotlin.blogspot.com",443],["freelistenonline.com",443],["badassdownloader.com",444],["quickporn.net",445],["yellowbridge.com",446],["aosmark.com",448],["ctrlv.*",449],["newyorker.com",456],["brighteon.com",[457,458]],["more.tv",459],["video1tube.com",460],["alohatube.xyz",460],["4players.de",461],["onlinesoccermanager.com",461],["fshost.me",462],["link.cgtips.org",463],["hentaicloud.com",464],["paperzonevn.com",466],["9jarock.org",467],["fzmovies.info",467],["fztvseries.ng",467],["netnaijas.com",467],["hentaienglish.com",468],["hentaiporno.xxx",468],["venge.io",[469,470]],["its.porn",[471,472]],["atv.at",473],["2ndrun.tv",474],["rackusreads.com",474],["teachmemicro.com",474],["willcycle.com",474],["kusonime.com",[475,476]],["123movieshd.*",477],["imgur.com",[478,479,754]],["hentai-party.com",480],["hentaicomics.pro",480],["uproxy.*",481],["animesa.*",482],["subtitleone.cc",483],["mysexgames.com",484],["ancient-origins.*",485],["cinecalidad.*",[486,487]],["xnxx.*",488],["xvideos.*",488],["gdr-online.com",489],["mmm.dk",490],["iqiyi.com",[491,492,614]],["m.iqiyi.com",493],["nbcolympics.com",494],["apkhex.com",495],["indiansexstories2.net",496],["issstories.xyz",496],["1340kbbr.com",497],["gorgeradio.com",497],["kduk.com",497],["kedoam.com",497],["kejoam.com",497],["kelaam.com",497],["khsn1230.com",497],["kjmx.rocks",497],["kloo.com",497],["klooam.com",497],["klykradio.com",497],["kmed.com",497],["kmnt.com",497],["kpnw.com",497],["kppk983.com",497],["krktcountry.com",497],["ktee.com",497],["kwro.com",497],["kxbxfm.com",497],["thevalley.fm",497],["quizlet.com",498],["dsocker1234.blogspot.com",499],["schoolcheats.net",[500,501]],["mgnet.xyz",502],["designtagebuch.de",503],["pixroute.com",504],["uploady.io",505],["calculator-online.net",506],["porngames.club",507],["sexgames.xxx",507],["111.90.159.132",508],["mobile-tracker-free.com",509],["social-unlock.com",510],["superpsx.com",511],["ninja.io",512],["sourceforge.net",513],["samfirms.com",514],["rapelust.com",515],["vtube.to",515],["desitelugusex.com",515],["dvdplay.*",515],["xvideos-downloader.net",515],["xxxvideotube.net",515],["sdefx.cloud",515],["nozomi.la",515],["banned.video",516],["madmaxworld.tv",516],["androidpolice.com",516],["babygaga.com",516],["backyardboss.net",516],["carbuzz.com",516],["cbr.com",516],["collider.com",516],["dualshockers.com",516],["footballfancast.com",516],["footballleagueworld.co.uk",516],["gamerant.com",516],["givemesport.com",516],["hardcoregamer.com",516],["hotcars.com",516],["howtogeek.com",516],["makeuseof.com",516],["moms.com",516],["movieweb.com",516],["pocket-lint.com",516],["pocketnow.com",516],["screenrant.com",516],["simpleflying.com",516],["thegamer.com",516],["therichest.com",516],["thesportster.com",516],["thethings.com",516],["thetravel.com",516],["topspeed.com",516],["xda-developers.com",516],["huffpost.com",517],["ingles.com",518],["spanishdict.com",518],["surfline.com",[519,520]],["play.tv3.ee",521],["play.tv3.lt",521],["play.tv3.lv",[521,522]],["tv3play.skaties.lv",521],["bulbagarden.net",523],["hollywoodlife.com",524],["mat6tube.com",525],["hotabis.com",526],["root-nation.com",526],["italpress.com",526],["airsoftmilsimnews.com",526],["artribune.com",526],["newtumbl.com",527],["apkmaven.*",528],["photopea.com",529],["aruble.net",530],["nevcoins.club",531],["mail.com",532],["gmx.*",533],["mangakita.id",535],["avpgalaxy.net",536],["panda-novel.com",537],["lightsnovel.com",537],["eaglesnovel.com",537],["pandasnovel.com",537],["ewrc-results.com",538],["kizi.com",539],["cyberscoop.com",540],["fedscoop.com",540],["jeep-cj.com",541],["sponsorhunter.com",542],["cloudcomputingtopics.net",543],["likecs.com",544],["tiscali.it",545],["linkspy.cc",546],["adshnk.com",547],["chattanoogan.com",548],["adsy.pw",549],["playstore.pw",549],["windowspro.de",550],["tvtv.ca",551],["tvtv.us",551],["mydaddy.cc",552],["roadtrippin.fr",553],["vavada5com.com",554],["anyporn.com",[555,572]],["bravoporn.com",555],["bravoteens.com",555],["crocotube.com",555],["hellmoms.com",555],["hellporno.com",555],["sex3.com",555],["tubewolf.com",555],["xbabe.com",555],["xcum.com",555],["zedporn.com",555],["imagetotext.info",556],["infokik.com",557],["freepik.com",558],["ddwloclawek.pl",[559,560]],["www.seznam.cz",561],["deezer.com",562],["my-subs.co",563],["plaion.com",564],["slideshare.net",[565,566]],["ustreasuryyieldcurve.com",567],["businesssoftwarehere.com",568],["goo.st",568],["freevpshere.com",568],["softwaresolutionshere.com",568],["gamereactor.*",570],["madoohd.com",571],["doomovie-hd.*",571],["staige.tv",573],["androidadult.com",574],["streamvid.net",575],["watchtv24.com",576],["cellmapper.net",577],["medscape.com",578],["newscon.org",[579,580]],["wheelofgold.com",581],["drakecomic.*",581],["app.blubank.com",582],["mobileweb.bankmellat.ir",582],["ccthesims.com",589],["chromeready.com",589],["dtbps3games.com",589],["illustratemagazine.com",589],["uknip.co.uk",589],["vod.pl",590],["megadrive-emulator.com",591],["tvhay.*",[592,593]],["moviesapi.club",594],["watchx.top",594],["digimanie.cz",595],["svethardware.cz",595],["srvy.ninja",596],["chat.tchatche.com",[597,598]],["cnn.com",[599,600,601]],["news.bg",602],["edmdls.com",603],["freshremix.net",603],["scenedl.org",603],["trakt.tv",604],["shroomers.app",605],["classicalradio.com",606],["di.fm",606],["jazzradio.com",606],["radiotunes.com",606],["rockradio.com",606],["zenradio.com",606],["getthit.com",607],["techedubyte.com",608],["iwanttfc.com",609],["nutraingredients-asia.com",610],["nutraingredients-latam.com",610],["nutraingredients-usa.com",610],["nutraingredients.com",610],["ozulscansen.com",611],["nexusmods.com",612],["lookmovie.*",613],["lookmovie2.to",613],["biletomat.pl",615],["hextank.io",[616,617]],["filmizlehdfilm.com",[618,619,620,621]],["filmizletv.*",[618,619,620,621]],["fullfilmizle.cc",[618,619,620,621]],["gofilmizle.net",[618,619,620,621]],["cimanow.cc",622],["bgmiupdate.com.in",622],["freex2line.online",623],["btvplus.bg",625],["sagewater.com",626],["redlion.net",626],["filmweb.pl",627],["satdl.com",628],["vidstreaming.xyz",629],["everand.com",630],["myradioonline.pl",631],["cbs.com",632],["paramountplus.com",632],["colourxh.site",633],["fullxh.com",633],["galleryxh.site",633],["megaxh.com",633],["movingxh.world",633],["seexh.com",633],["unlockxh4.com",633],["valuexh.life",633],["xhaccess.com",633],["xhadult2.com",633],["xhadult3.com",633],["xhadult4.com",633],["xhadult5.com",633],["xhamster.*",633],["xhamster1.*",633],["xhamster10.*",633],["xhamster11.*",633],["xhamster12.*",633],["xhamster13.*",633],["xhamster14.*",633],["xhamster15.*",633],["xhamster16.*",633],["xhamster17.*",633],["xhamster18.*",633],["xhamster19.*",633],["xhamster20.*",633],["xhamster2.*",633],["xhamster3.*",633],["xhamster4.*",633],["xhamster42.*",633],["xhamster46.com",633],["xhamster5.*",633],["xhamster7.*",633],["xhamster8.*",633],["xhamsterporno.mx",633],["xhbig.com",633],["xhbranch5.com",633],["xhchannel.com",633],["xhdate.world",633],["xhlease.world",633],["xhmoon5.com",633],["xhofficial.com",633],["xhopen.com",633],["xhplanet1.com",633],["xhplanet2.com",633],["xhreal2.com",633],["xhreal3.com",633],["xhspot.com",633],["xhtotal.com",633],["xhtree.com",633],["xhvictory.com",633],["xhwebsite.com",633],["xhwebsite2.com",633],["xhwebsite5.com",633],["xhwide1.com",633],["xhwide2.com",633],["xhwide5.com",633],["file-upload.net",634],["tunein.com",635],["acortalo.*",[637,638,639,640]],["acortar.*",[637,638,639,640]],["hentaihaven.xxx",641],["jacquieetmicheltv2.net",643],["a2zapk.*",644],["fcportables.com",[645,646]],["emurom.net",647],["freethesaurus.com",[648,649]],["thefreedictionary.com",[648,649]],["oeffentlicher-dienst.info",650],["im9.eu",[651,652]],["dcdlplayer8a06f4.xyz",653],["ultimate-guitar.com",654],["claimbits.net",655],["sexyscope.net",656],["kickassanime.*",657],["recherche-ebook.fr",658],["virtualdinerbot.com",658],["zonebourse.com",659],["pink-sluts.net",660],["andhrafriends.com",661],["benzinpreis.de",662],["defenseone.com",663],["govexec.com",663],["nextgov.com",663],["route-fifty.com",663],["sharing.wtf",664],["wetter3.de",665],["esportivos.fun",666],["cosmonova-broadcast.tv",667],["538.nl",668],["hartvannederland.nl",668],["kijk.nl",668],["shownieuws.nl",668],["vandaaginside.nl",668],["rock.porn",[669,670]],["videzz.net",[671,672]],["ezaudiobookforsoul.com",673],["club386.com",674],["decompiler.com",[675,676]],["littlebigsnake.com",677],["easyfun.gg",678],["smailpro.com",679],["ilgazzettino.it",680],["ilmessaggero.it",680],["3bmeteo.com",[681,682]],["mconverter.eu",683],["lover937.net",684],["10gb.vn",685],["pes6.es",686],["tactics.tools",[687,688]],["boundhub.com",689],["reliabletv.me",690],["filecrypt.*",691],["wired.com",693],["spankbang.*",[694,695,696,758,759]],["hulu.com",[697,698,699]],["hanime.tv",700],["nhentai.net",[701,702,703]],["pouvideo.*",704],["povvideo.*",704],["povw1deo.*",704],["povwideo.*",704],["powv1deo.*",704],["powvibeo.*",704],["powvideo.*",704],["powvldeo.*",704],["powcloud.org",705],["primevideo.com",706],["read.amazon.*",[706,707]],["anonymfile.com",708],["gofile.to",708],["dotycat.com",709],["rateyourmusic.com",710],["reporterpb.com.br",711],["blog-dnz.com",713],["18adultgames.com",714],["colnect.com",[715,716]],["adultgamesworld.com",717],["servustv.com",[718,719]],["reviewdiv.com",720],["parametric-architecture.com",721],["voiceofdenton.com",722],["concealednation.org",722],["askattest.com",723],["opensubtitles.com",724],["savefiles.com",725],["streamup.ws",726],["pfps.gg",727],["goodstream.one",728],["lecrabeinfo.net",729],["cerberusapp.com",730],["smashkarts.io",731],["beamng.wesupply.cx",732],["wowtv.de",[733,734]],["jsfiddle.net",[735,736]],["musicbusinessworldwide.com",737],["mahfda.com",738],["agar.live",739],["dailymotion.com",740],["scribd.com",741],["live.arynews.tv",742],["pornlore.com",[743,744]],["91porn.com",745],["spedostream2.shop",746],["play.watch20.space",746],["www.google.*",747],["dataunlocker.com",[748,749]],["tacobell.com",750],["zefoy.com",751],["cnet.com",752],["trendyol.com",[755,756]],["trendyol-milla.com",[755,756]],["natgeotv.com",757],["globo.com",760],["linklog.tiagorangel.com",762],["wayfair.com",763]]);
const exceptionsMap = new Map([["cloudflare.com",[0]],["pingit.com",[186]],["loan.bgmi32bitapk.in",[307]],["lookmovie.studio",[613]]]);
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
