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
const argsList = [["console.clear","undefined"],["aclib.runInPagePush","{}","as","callback"],["aclib.runBanner","{}","as","function"],["adBlockDetected","undefined"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["dvtag.getTargeting","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["googletag.cmd","{}"],["_aps","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["google.ima.settings.setDisableFlashAds","noopFunc"],["pa.privacy","{}"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505","{}"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["Object.prototype.que","noopFunc"],["Object.prototype.que.push","noopFunc"],["ga.sendGaEvent","noopFunc"],["adobe","{}"],["MT","{}"],["MT.track","noopFunc"],["ClickOmniPartner","noopFunc"],["adex","{}"],["adex.getAdexUser","noopFunc"],["Adkit","noopFunc"],["Object.prototype.shouldExpectGoogleCMP","false"],["apntag.refresh","noopFunc"],["pa.sendEvent","noopFunc"],["Munchkin","{}"],["Munchkin.init","noopFunc"],["ttd_dom_ready","noopFunc"],["ramp","undefined"],["appInfo.snowplow.trackSelfDescribingEvent","noopFunc"],["_vwo_code.init","noopFunc"],["adobePageView","noopFunc"],["dapTracker","{}"],["dapTracker.track","noopFunc"],["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["console.clear","noopFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["console.clear","trueFunc"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["check_adblock","true"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["adBlockEnabled","false"],["puShown","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["openPopunder","noopFunc"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["CaptchmeState.adb","undefined"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["HTMLAnchorElement.prototype.click","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["check","true"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["runAdBlocker","false"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["cnbc.canShowAds","true"],["ue_adb_chk","1"],["firefaucet","true"],["cRAds","true"],["uas","[]"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["foundation.adPlayer.bitmovin","{}"],["weltConfig.switches.videoAdBlockBlocker","false"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["Object.prototype.adReinsertion","noopFunc"],["getHomadConfig","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["ulp_noadb","true"],["Object.prototype.adblock_detected","false"],["timeSec","0"],["adsbygoogle.loaded","true"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["Adv_ab","false"],["sgpbCanRunAds","true"],["document.hidden","false"],["document.hasFocus","trueFunc"],["hasFocus","trueFunc"],["navigator.brave","undefined"],["Object.prototype.isAllAdClose","true"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["navigator.webkitTemporaryStorage.queryUsageAndQuota","noopFunc"],["document.onkeydown","noopFunc"],["showadas","true"],["alert","throwFunc"],["aSl.gcd","0"],["window.adLink","null"],["detectedAdblock","undefined"],["isTabActive","true"],["clicked","2"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["flashvars.mlogo",""],["vpPrerollVideo","undefined"],["PlayerConfig.config.CustomAdSetting","[]"],["PlayerConfig.trusted","true"],["PlayerConfig.config.AffiliateAdViewLevel","3"],["univresalP","noopFunc"],["hold_click","false"],["tie.ad_blocker_detector","false"],["admiral","noopFunc"],["gnt.u.adfree","true"],["__INITIAL_DATA__.siteData.admiralScript"],["objAd.loadAdShield","noopFunc"],["window.myAd.runAd","noopFunc"],["detectAdBlock","noopFunc"],["__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["document.ontouchend","null"],["document.onclick","null"],["playID","1"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["xv_ad_block","0"],["openWindow","noopFunc"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["showada","true"],["showax","true"],["p18","undefined"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["Object.prototype.adblockFound","false"],["createCanvas","noopFunc"],["document.bridCanRunAds","true"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["xv.sda.pp.init","noopFunc"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["ad_link",""],["penciBlocksArray","[]"],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["D4zz","noopFunc"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["tv3Cmp.ConsentGiven","true"],["setupSkin","noopFunc"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["td_ad_background_click_link","undefined"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["puShown1","true"],["passthetest","true"],["pandaAdviewValidate","true"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["abpblocked","undefined"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["sssp","emptyObj"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["adSettings","[]"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["googletag","true"],["tOS2","150"],["checkAdBlocker","noopFunc"],["navigator.standalone","true"],["ShowAdvertising","{}"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["feedBack.showAffilaePromo","noopFunc"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["HTMLScriptElement.prototype.onerror","null"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["window.adngin","{}"],["amzn_aps_csm","{}"],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["sharedController.adblockDetector","noopFunc"],["checkAdsStatus","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["checkAdBlockeraz","noopFunc"],["blockingAds","false"],["Yii2App.playbackTimeout","0"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["powerAPITag","emptyObj"],["playerEnhancedConfig.run","throwFunc"],["aoAdBlockDetected","false"],["rodo.checkIsDidomiConsent","noopFunc"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["hasAdBlocker","false"],["initials.yld-pdpopunder",""],["download_click","true"],["advertisement3","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["dvsize","52"],["majorse","true"],["completed","1"],["testerli","false"],["w87.abd","noopFunc"],["w87.dab","noopFunc"],["document.referrer",""],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["one_time","1"],["consentGiven","true"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["malisx","true"],["alim","true"],["ADS.isBannersEnabled","false"],["EASYFUN_ADS_CAN_RUN","true"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["detectedAdblock","noopFunc"],["Object.prototype.DetectByGoogleAd","noopFunc"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["NativeAd","noopFunc"],["Blob","noopFunc"],["window.navigator.brave","undefined"],["HTMLScriptElement.prototype.onerror","undefined"],["isAdblock","false"],["openPop","noopFunc"],["cns.library","true"],["BJSShowUnder","{}"],["BJSShowUnder.bindTo","noopFunc"],["BJSShowUnder.add","noopFunc"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["ABLK","false"],["_n_app.popunder","null"],["_n_app.options.ads.show_popunders","false"],["N_BetterJsPop.object","{}"],["isAdb","false"],["countDown","0"],["runCheck","noopFunc"],["adsSlotRenderEndSeen","true"],["showModal","noopFunc"],["flashvars.mlogo_link",""],["isAdBlocked","noopFunc"],["URLlist","[]"],["aaw","{}"],["aaw.processAdsOnPage","noopFunc"],["doOpen","undefined"],["HTMLImageElement.prototype.onerror","undefined"],["FOXIZ_MAIN_SCRIPT.siteAccessDetector","noopFunc"],["openAdBlockPopup","noopFunc"],["Object.prototype._adsDisabled","true"],["advanced_ads_check_adblocker","noopFunc"],["canRunAds","1"],["attestHasAdBlockerActivated","true"],["extInstalled","true"],["SaveFiles.add","noopFunc"],["detectSandbox","noopFunc"],["adbon","0"],["LCI.adBlockDetectorEnabled","false"],["stoCazzo","true"],["adblockDetected","false"],["importFAB","undefined"],["window.__CONFIGURATION__.adInsertion.enabled","false"],["window.__CONFIGURATION__.features.enableAdBlockerDetection","false"],["_carbonads","{}"],["_bsa","{}"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["Object.prototype.updateModifiedCommerceUrl","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["Visitor","{}"],["send_gravity_event","noopFunc"],["send_recommendation_event","noopFunc"],["libAnalytics.data.get","noopFunc"],["adthrive._components.start","noopFunc"],["navigator.sendBeacon","noopFunc"]];
const hostnamesMap = new Map([["jilliandescribecompany.com",0],["gogoanime.*",[0,199]],["adrianmissionminute.com",0],["alejandrocenturyoil.com",0],["alleneconomicmatter.com",0],["bethshouldercan.com",0],["bigclatterhomesguideservice.com",0],["brittneystandardwestern.com",0],["brookethoughi.com",0],["brucevotewithin.com",0],["cindyeyefinal.com",0],["denisegrowthwide.com",0],["diananatureforeign.com",0],["donaldlineelse.com",0],["edwardarriveoften.com",0],["erikcoldperson.com",0],["evelynthankregion.com",0],["graceaddresscommunity.com",0],["heatherdiscussionwhen.com",0],["heatherwholeinvolve.com",0],["housecardsummerbutton.com",0],["jamessoundcost.com",0],["jamiesamewalk.com",0],["jasminetesttry.com",0],["jasonresponsemeasure.com",0],["jayservicestuff.com",0],["jennifercertaindevelopment.com",0],["jessicaglassauthor.com",0],["johnalwayssame.com",0],["johntryopen.com",0],["jonathansociallike.com",0],["josephseveralconcern.com",0],["kellywhatcould.com",0],["kennethofficialitem.com",0],["kristiesoundsimply.com",0],["lisatrialidea.com",0],["lorimuchbenefit.com",0],["loriwithinfamily.com",0],["lukecomparetwo.com",0],["mariatheserepublican.com",0],["markstyleall.com",0],["michaelapplysome.com",0],["morganoperationface.com",0],["nathanfromsubject.com",0],["paulkitchendark.com",0],["rebeccaneverbase.com",0],["richardsignfish.com",0],["roberteachfinal.com",0],["robertordercharacter.com",0],["robertplacespace.com",0],["ryanagoinvolve.com",0],["sandratableother.com",0],["sandrataxeight.com",0],["sethniceletter.com",0],["shannonpersonalcost.com",0],["susanhavekeep.com",0],["tinycat-voe-fashion.com",0],["toddpartneranimal.com",0],["troyyourlead.com",0],["uptodatefinishconference.com",0],["uptodatefinishconferenceroom.com",0],["voe.sx",0],["maxfinishseveral.com",0],["voe.sx>>",0],["javboys.tv>>",0],["freeplayervideo.com",0],["nazarickol.com",0],["player-cdn.com",0],["playhydrax.com",[0,407,408]],["rabbitstream.net",0],["fmovies.*",0],["japscan.*",[1,2]],["u26bekrb.fun",3],["br.de",4],["indeed.com",5],["zillow.com",[5,109]],["pasteboard.co",6],["bbc.com",7],["clickhole.com",8],["deadspin.com",8],["gizmodo.com",8],["jalopnik.com",8],["jezebel.com",8],["kotaku.com",8],["lifehacker.com",8],["splinternews.com",8],["theinventory.com",8],["theonion.com",8],["theroot.com",8],["thetakeout.com",8],["pewresearch.org",8],["los40.com",[9,10]],["as.com",10],["telegraph.co.uk",[11,12]],["poweredbycovermore.com",[11,64]],["lumens.com",[11,64]],["verizon.com",13],["humanbenchmark.com",14],["politico.com",15],["officedepot.co.cr",[16,17]],["officedepot.*",[18,19]],["usnews.com",20],["coolmathgames.com",[21,285,286,287]],["video.gazzetta.it",[22,23]],["oggi.it",[22,23]],["manoramamax.com",22],["factable.com",24],["thedailybeast.com",25],["zee5.com",26],["gala.fr",27],["geo.fr",27],["voici.fr",27],["gloucestershirelive.co.uk",28],["arsiv.mackolik.com",29],["jacksonguitars.com",30],["scandichotels.com",31],["stylist.co.uk",32],["nettiauto.com",33],["thaiairways.com",[34,35]],["cerbahealthcare.it",[36,37]],["futura-sciences.com",[36,54]],["toureiffel.paris",36],["campusfrance.org",[36,148]],["tiendaenlinea.claro.com.ni",[38,39]],["tieba.baidu.com",40],["fandom.com",[41,42,346]],["grasshopper.com",[43,44]],["epson.com.cn",[45,46,47,48]],["oe24.at",[49,50]],["szbz.de",49],["platform.autods.com",[51,52]],["kcra.com",53],["wcvb.com",53],["sportdeutschland.tv",53],["citibank.com.sg",55],["uol.com.br",[56,57,58,59,60]],["gazzetta.gr",61],["digicol.dpm.org.cn",[62,63]],["virginmediatelevision.ie",65],["larazon.es",[66,67]],["waitrosecellar.com",[68,69,70]],["kicker.de",[71,387]],["sharpen-free-design-generator.netlify.app",[72,73]],["help.cashctrl.com",[74,75]],["gry-online.pl",76],["vidaextra.com",77],["commande.rhinov.pro",[78,79]],["ecom.wixapps.net",[78,79]],["tipranks.com",[80,81]],["iceland.co.uk",[82,83,84]],["socket.pearsoned.com",85],["tntdrama.com",[86,87]],["trutv.com",[86,87]],["mobile.de",[88,89]],["ioe.vn",[90,91]],["geiriadur.ac.uk",[90,94]],["welsh-dictionary.ac.uk",[90,94]],["bikeportland.org",[92,93]],["biologianet.com",[57,58,59]],["10.com.au",[95,96]],["10play.com.au",[95,96]],["sunshine-live.de",[97,98]],["whatismyip.com",[99,100]],["myfitnesspal.com",101],["netoff.co.jp",[102,103]],["bluerabbitrx.com",[102,103]],["foundit.*",[104,105]],["clickjogos.com.br",106],["bristan.com",[107,108]],["share.hntv.tv",[110,111,112,113]],["forum.dji.com",[110,113]],["unionpayintl.com",[110,112]],["streamelements.com",110],["optimum.net",[114,115]],["hdfcfund.com",116],["user.guancha.cn",[117,118]],["sosovalue.com",119],["bandyforbundet.no",[120,121]],["tatacommunications.com",122],["kb.arlo.com",[122,154]],["suamusica.com.br",[123,124,125]],["macrotrends.net",[126,127]],["code.world",128],["smartcharts.net",128],["topgear.com",129],["eservice.directauto.com",[130,131]],["nbcsports.com",132],["standard.co.uk",133],["pruefernavi.de",[134,135]],["speedtest.net",[136,137]],["17track.net",138],["visible.com",139],["hagerty.com",[140,141]],["marketplace.nvidia.com",142],["kino.de",[143,144]],["9now.nine.com.au",145],["worldstar.com",146],["prisjakt.no",147],["developer.arm.com",[149,150]],["sterkinekor.com",151],["iogames.space",152],["id.condenast.com",153],["tires.costco.com",155],["livemint.com",[156,157]],["m.youtube.com",[158,159,160,161]],["music.youtube.com",[158,159,160,161]],["tv.youtube.com",[158,159,160,161]],["www.youtube.com",[158,159,160,161]],["youtubekids.com",[158,159,160,161]],["youtube-nocookie.com",[158,159,160,161]],["eu-proxy.startpage.com",[158,159,161]],["timesofindia.indiatimes.com",162],["economictimes.indiatimes.com",163],["motherless.com",164],["sueddeutsche.de",165],["watchanimesub.net",166],["wcoanimesub.tv",166],["wcoforever.net",166],["freeviewmovies.com",166],["filehorse.com",166],["guidetnt.com",166],["starmusiq.*",166],["sp-today.com",166],["linkvertise.com",166],["eropaste.net",166],["getpaste.link",166],["sharetext.me",166],["wcofun.*",166],["note.sieuthuthuat.com",166],["gadgets.es",[166,455]],["amateurporn.co",[166,255]],["wiwo.de",167],["primewire.*",168],["alphaporno.com",[168,537]],["porngem.com",168],["shortit.pw",[168,241]],["familyporn.tv",168],["sbplay.*",168],["id45.cyou",168],["85po.com",[168,226]],["milfnut.*",168],["k1nk.co",168],["watchasians.cc",168],["sankakucomplex.com",169],["player.glomex.com",170],["merkur.de",170],["tz.de",170],["sxyprn.*",171],["hqq.*",[172,173]],["waaw.*",[173,174]],["hotpornfile.org",173],["x69.ovh",173],["younetu.*",173],["multiup.us",173],["peliculas8k.com",[173,174]],["czxxx.org",173],["vtplayer.online",173],["vvtplayer.*",173],["netu.ac",173],["netu.frembed.lol",173],["123link.*",175],["adshort.*",175],["mitly.us",175],["linkrex.net",175],["linx.cc",175],["oke.io",175],["linkshorts.*",175],["dz4link.com",175],["adsrt.*",175],["linclik.com",175],["shrt10.com",175],["vinaurl.*",175],["loptelink.com",175],["adfloz.*",175],["cut-fly.com",175],["linkfinal.com",175],["payskip.org",175],["cutpaid.com",175],["linkjust.com",175],["leechpremium.link",175],["icutlink.com",[175,260]],["oncehelp.com",175],["rgl.vn",175],["reqlinks.net",175],["bitlk.com",175],["qlinks.eu",175],["link.3dmili.com",175],["short-fly.com",175],["foxseotools.com",175],["dutchycorp.*",175],["shortearn.*",175],["pingit.*",175],["link.turkdown.com",175],["7r6.com",175],["oko.sh",175],["ckk.ai",175],["fc.lc",175],["fstore.biz",175],["shrink.*",175],["cuts-url.com",175],["eio.io",175],["exe.app",175],["exee.io",175],["exey.io",175],["skincarie.com",175],["exeo.app",175],["tmearn.*",175],["coinlyhub.com",[175,324]],["adsafelink.com",175],["aii.sh",175],["megalink.*",175],["cybertechng.com",[175,340]],["cutdl.xyz",175],["iir.ai",175],["shorteet.com",[175,358]],["miniurl.*",175],["smoner.com",175],["gplinks.*",175],["odisha-remix.com",[175,340]],["xpshort.com",[175,340]],["upshrink.com",175],["clk.*",175],["easysky.in",175],["veganab.co",175],["golink.bloggerishyt.in",175],["birdurls.com",175],["vipurl.in",175],["jameeltips.us",175],["promo-visits.site",175],["satoshi-win.xyz",[175,374]],["shorterall.com",175],["encurtandourl.com",175],["forextrader.site",175],["postazap.com",175],["cety.app",175],["exego.app",[175,369]],["cutlink.net",175],["cutyurls.com",175],["cutty.app",175],["cutnet.net",175],["jixo.online",175],["tinys.click",[175,340]],["cpm.icu",175],["panyshort.link",175],["enagato.com",175],["pandaznetwork.com",175],["tpi.li",175],["oii.la",175],["recipestutorials.com",175],["shrinke.*",175],["shrinkme.*",175],["shrinkforearn.in",175],["oii.io",175],["du-link.in",175],["atglinks.com",175],["thotpacks.xyz",175],["megaurl.in",175],["megafly.in",175],["simana.online",175],["fooak.com",175],["joktop.com",175],["evernia.site",175],["falpus.com",175],["link.paid4link.com",175],["exalink.fun",175],["shortxlinks.com",175],["upfion.com",175],["upfiles.app",175],["upfiles-urls.com",175],["flycutlink.com",[175,340]],["linksly.co",175],["link1s.*",175],["pkr.pw",175],["imagenesderopaparaperros.com",175],["shortenbuddy.com",175],["apksvip.com",175],["4cash.me",175],["namaidani.com",175],["shortzzy.*",175],["teknomuda.com",175],["shorttey.*",[175,323]],["miuiku.com",175],["savelink.site",175],["lite-link.*",175],["adcorto.*",175],["samaa-pro.com",175],["miklpro.com",175],["modapk.link",175],["ccurl.net",175],["linkpoi.me",175],["pewgame.com",175],["haonguyen.top",175],["zshort.*",175],["crazyblog.in",175],["cutearn.net",175],["rshrt.com",175],["filezipa.com",175],["dz-linkk.com",175],["upfiles.*",175],["theblissempire.com",175],["finanzas-vida.com",175],["adurly.cc",175],["paid4.link",175],["link.asiaon.top",175],["go.gets4link.com",175],["linkfly.*",175],["beingtek.com",175],["shorturl.unityassets4free.com",175],["disheye.com",175],["techymedies.com",175],["techysuccess.com",175],["za.gl",[175,275]],["bblink.com",175],["myad.biz",175],["swzz.xyz",175],["vevioz.com",175],["charexempire.com",175],["clk.asia",175],["sturls.com",175],["myshrinker.com",175],["snowurl.com",[175,340]],["wplink.*",175],["rocklink.in",175],["techgeek.digital",175],["download3s.net",175],["shortx.net",175],["tlin.me",175],["bestcash2020.com",175],["adslink.pw",175],["novelssites.com",175],["faucetcrypto.net",175],["trxking.xyz",175],["weadown.com",175],["m.bloggingguidance.com",175],["link.codevn.net",175],["link4rev.site",175],["c2g.at",175],["bitcosite.com",[175,551]],["cryptosh.pro",175],["windowslite.net",[175,340]],["viewfr.com",175],["cl1ca.com",175],["4br.me",175],["fir3.net",175],["seulink.*",175],["encurtalink.*",175],["kiddyshort.com",175],["watchmygf.me",[176,200]],["camwhores.*",[176,186,225,226,227]],["camwhorez.tv",[176,186,225,226]],["cambay.tv",[176,207,225,252,254,255,256,257]],["fpo.xxx",[176,207]],["sexemix.com",176],["heavyfetish.com",[176,722]],["thotcity.su",176],["viralxxxporn.com",[176,391]],["tube8.*",[177,178]],["you-porn.com",178],["youporn.*",178],["youporngay.com",178],["youpornru.com",178],["redtube.*",178],["9908ww.com",178],["adelaidepawnbroker.com",178],["bztube.com",178],["hotovs.com",178],["insuredhome.org",178],["nudegista.com",178],["pornluck.com",178],["vidd.se",178],["pornhub.*",[178,312]],["pornhub.com",178],["pornerbros.com",179],["freep.com",179],["porn.com",180],["tune.pk",181],["noticias.gospelmais.com.br",182],["techperiod.com",182],["viki.com",[183,184]],["watch-series.*",185],["watchseries.*",185],["vev.*",185],["vidop.*",185],["vidup.*",185],["sleazyneasy.com",[186,187,188]],["smutr.com",[186,320]],["tktube.com",186],["yourporngod.com",[186,187]],["javbangers.com",[186,445]],["camfox.com",186],["camthots.tv",[186,252]],["shegotass.info",186],["amateur8.com",186],["bigtitslust.com",186],["ebony8.com",186],["freeporn8.com",186],["lesbian8.com",186],["maturetubehere.com",186],["sortporn.com",186],["motherporno.com",[186,187,207,254]],["theporngod.com",[186,187]],["watchdirty.to",[186,226,227,255]],["pornsocket.com",189],["luxuretv.com",190],["porndig.com",[191,192]],["webcheats.com.br",193],["ceesty.com",[194,195]],["gestyy.com",[194,195]],["corneey.com",195],["destyy.com",195],["festyy.com",195],["sh.st",195],["mitaku.net",195],["angrybirdsnest.com",196],["zrozz.com",196],["clix4btc.com",196],["4tests.com",196],["goltelevision.com",196],["news-und-nachrichten.de",196],["laradiobbs.net",196],["urlaubspartner.net",196],["produktion.de",196],["cinemaxxl.de",196],["bladesalvador.com",196],["tempr.email",196],["cshort.org",196],["friendproject.net",196],["covrhub.com",196],["katfile.com",[196,617]],["trust.zone",196],["business-standard.com",196],["planetsuzy.org",197],["empflix.com",198],["xmovies8.*",199],["masteranime.tv",199],["0123movies.*",199],["gostream.*",199],["gomovies.*",199],["transparentcalifornia.com",200],["deepbrid.com",201],["webnovel.com",202],["streamwish.*",[203,204]],["oneupload.to",204],["wishfast.top",204],["rubystm.com",204],["rubyvid.com",204],["rubyvidhub.com",204],["stmruby.com",204],["streamruby.com",204],["schwaebische.de",205],["8tracks.com",206],["3movs.com",207],["bravoerotica.net",[207,254]],["youx.xxx",207],["camclips.tv",[207,320]],["xtits.*",[207,254]],["camflow.tv",[207,254,255,293,391]],["camhoes.tv",[207,252,254,255,293,391]],["xmegadrive.com",207],["xxxymovies.com",207],["xxxshake.com",207],["gayck.com",207],["xhand.com",[207,254]],["analdin.com",[207,254]],["revealname.com",208],["golfchannel.com",209],["stream.nbcsports.com",209],["mathdf.com",209],["gamcore.com",210],["porcore.com",210],["porngames.tv",210],["69games.xxx",210],["javmix.app",210],["haaretz.co.il",211],["haaretz.com",211],["hungama.com",211],["a-o.ninja",211],["anime-odcinki.pl",211],["shortgoo.blogspot.com",211],["tonanmedia.my.id",[211,571]],["yurasu.xyz",211],["isekaipalace.com",211],["plyjam.*",[212,213]],["ennovelas.com",[213,217]],["foxsports.com.au",214],["canberratimes.com.au",214],["thesimsresource.com",215],["fxporn69.*",216],["vipbox.*",217],["viprow.*",217],["ctrl.blog",218],["sportlife.es",219],["finofilipino.org",220],["desbloqueador.*",221],["xberuang.*",222],["teknorizen.*",222],["mysflink.blogspot.com",222],["ashemaletube.*",223],["paktech2.com",223],["assia.tv",224],["assia4.com",224],["cwtvembeds.com",[226,253]],["camlovers.tv",226],["porntn.com",226],["pornissimo.org",226],["sexcams-24.com",[226,255]],["watchporn.to",[226,255]],["camwhorez.video",226],["footstockings.com",[226,227,255]],["xmateur.com",[226,227,255]],["multi.xxx",227],["weatherx.co.in",[228,229]],["sunbtc.space",228],["subtorrents.*",230],["subtorrents1.*",230],["newpelis.*",230],["pelix.*",230],["allcalidad.*",230],["infomaniakos.*",230],["ojogos.com.br",231],["powforums.com",232],["supforums.com",232],["studybullet.com",232],["usgamer.net",233],["recordonline.com",233],["freebitcoin.win",234],["e-monsite.com",234],["coindice.win",234],["freiepresse.de",235],["investing.com",236],["tornadomovies.*",237],["mp3fiber.com",238],["chicoer.com",239],["dailybreeze.com",239],["dailybulletin.com",239],["dailynews.com",239],["delcotimes.com",239],["eastbaytimes.com",239],["macombdaily.com",239],["ocregister.com",239],["pasadenastarnews.com",239],["pe.com",239],["presstelegram.com",239],["redlandsdailyfacts.com",239],["reviewjournal.com",239],["santacruzsentinel.com",239],["saratogian.com",239],["sentinelandenterprise.com",239],["sgvtribune.com",239],["tampabay.com",239],["times-standard.com",239],["theoaklandpress.com",239],["trentonian.com",239],["twincities.com",239],["whittierdailynews.com",239],["bostonherald.com",239],["dailycamera.com",239],["sbsun.com",239],["dailydemocrat.com",239],["montereyherald.com",239],["orovillemr.com",239],["record-bee.com",239],["redbluffdailynews.com",239],["reporterherald.com",239],["thereporter.com",239],["timescall.com",239],["timesheraldonline.com",239],["ukiahdailyjournal.com",239],["dailylocal.com",239],["mercurynews.com",239],["suedkurier.de",240],["anysex.com",242],["icdrama.*",243],["mangasail.*",243],["pornve.com",244],["file4go.*",245],["coolrom.com.au",245],["marie-claire.es",246],["gamezhero.com",246],["flashgirlgames.com",246],["onlinesudoku.games",246],["mpg.football",246],["sssam.com",246],["globalnews.ca",247],["drinksmixer.com",248],["leitesculinaria.com",248],["fupa.net",249],["browardpalmbeach.com",250],["dallasobserver.com",250],["houstonpress.com",250],["miaminewtimes.com",250],["phoenixnewtimes.com",250],["westword.com",250],["nowtv.com.tr",251],["caminspector.net",252],["camwhoreshd.com",252],["camgoddess.tv",252],["gay4porn.com",254],["mypornhere.com",254],["mangovideo.*",255],["love4porn.com",255],["thotvids.com",255],["watchmdh.to",255],["celebwhore.com",255],["cluset.com",255],["sexlist.tv",255],["4kporn.xxx",255],["xhomealone.com",255],["lusttaboo.com",[255,515]],["hentai-moon.com",255],["camhub.cc",[255,676]],["mediapason.it",258],["linkspaid.com",258],["tuotromedico.com",258],["neoteo.com",258],["phoneswiki.com",258],["celebmix.com",258],["myneobuxportal.com",258],["oyungibi.com",258],["25yearslatersite.com",258],["jeshoots.com",259],["techhx.com",259],["karanapk.com",259],["flashplayer.fullstacks.net",261],["cloudapps.herokuapp.com",261],["youfiles.herokuapp.com",261],["texteditor.nsspot.net",261],["temp-mail.org",262],["asianclub.*",263],["javhdporn.net",263],["vidmoly.to",264],["comnuan.com",265],["veedi.com",266],["battleboats.io",266],["anitube.*",267],["fruitlab.com",267],["haddoz.net",267],["streamingcommunity.*",267],["garoetpos.com",267],["stiletv.it",268],["mixdrop.*",269],["hqtv.biz",270],["liveuamap.com",271],["audycje.tokfm.pl",272],["shush.se",273],["allkpop.com",274],["empire-anime.*",[275,566,567,568,569,570]],["empire-streaming.*",[275,566,567,568]],["empire-anime.com",[275,566,567,568]],["empire-streamz.fr",[275,566,567,568]],["empire-stream.*",[275,566,567,568]],["pickcrackpasswords.blogspot.com",276],["kfrfansub.com",277],["thuglink.com",277],["voipreview.org",277],["illicoporno.com",278],["lavoixdux.com",278],["tonpornodujour.com",278],["jacquieetmichel.net",278],["swame.com",278],["vosfemmes.com",278],["voyeurfrance.net",278],["jacquieetmicheltv.net",[278,624,625]],["pogo.com",279],["cloudvideo.tv",280],["legionjuegos.org",281],["legionpeliculas.org",281],["legionprogramas.org",281],["16honeys.com",282],["elespanol.com",283],["remodelista.com",284],["audiofanzine.com",288],["uploadev.*",289],["developerinsider.co",290],["thehindu.com",291],["cambro.tv",[292,293]],["boobsradar.com",[293,391,693]],["nibelungen-kurier.de",294],["adfoc.us",295],["tea-coffee.net",295],["spatsify.com",295],["newedutopics.com",295],["getviralreach.in",295],["edukaroo.com",295],["funkeypagali.com",295],["careersides.com",295],["nayisahara.com",295],["wikifilmia.com",295],["infinityskull.com",295],["viewmyknowledge.com",295],["iisfvirtual.in",295],["starxinvestor.com",295],["jkssbalerts.com",295],["sahlmarketing.net",295],["filmypoints.in",295],["fitnessholic.net",295],["moderngyan.com",295],["sattakingcharts.in",295],["bankshiksha.in",295],["earn.mpscstudyhub.com",295],["earn.quotesopia.com",295],["money.quotesopia.com",295],["best-mobilegames.com",295],["learn.moderngyan.com",295],["bharatsarkarijobalert.com",295],["quotesopia.com",295],["creditsgoal.com",295],["bgmi32bitapk.in",295],["techacode.com",295],["trickms.com",295],["ielts-isa.edu.vn",295],["loan.punjabworks.com",295],["vi-music.app",295],["instanders.app",295],["rokni.xyz",295],["keedabankingnews.com",295],["sptfy.be",295],["mcafee-com.com",[295,369]],["pianetamountainbike.it",296],["barchart.com",297],["modelisme.com",298],["parasportontario.ca",298],["prescottenews.com",298],["nrj-play.fr",299],["hackingwithreact.com",300],["gutekueche.at",301],["peekvids.com",302],["playvids.com",302],["pornflip.com",302],["redensarten-index.de",303],["vw-page.com",304],["viz.com",[305,306]],["0rechner.de",307],["configspc.com",308],["xopenload.me",308],["uptobox.com",308],["uptostream.com",308],["japgay.com",309],["mega-debrid.eu",310],["dreamdth.com",311],["diaridegirona.cat",313],["diariodeibiza.es",313],["diariodemallorca.es",313],["diarioinformacion.com",313],["eldia.es",313],["emporda.info",313],["farodevigo.es",313],["laopinioncoruna.es",313],["laopiniondemalaga.es",313],["laopiniondemurcia.es",313],["laopiniondezamora.es",313],["laprovincia.es",313],["levante-emv.com",313],["mallorcazeitung.es",313],["regio7.cat",313],["superdeporte.es",313],["playpaste.com",314],["cnbc.com",315],["primevideo.com",316],["read.amazon.*",[316,704]],["firefaucet.win",317],["74k.io",[318,319]],["cloudwish.xyz",319],["gradehgplus.com",319],["javindo.site",319],["javindosub.site",319],["kamehaus.net",319],["movearnpre.com",319],["arabshentai.com>>",319],["javdo.cc>>",319],["javenglish.cc>>",319],["javhd.*>>",319],["javhdz.*>>",319],["roshy.tv>>",319],["sextb.*>>",319],["fullhdxxx.com",321],["pornclassic.tube",322],["tubepornclassic.com",322],["etonline.com",323],["creatur.io",323],["lookcam.*",323],["drphil.com",323],["urbanmilwaukee.com",323],["ontiva.com",323],["hideandseek.world",323],["myabandonware.com",323],["kendam.com",323],["wttw.com",323],["synonyms.com",323],["definitions.net",323],["hostmath.com",323],["camvideoshub.com",323],["minhaconexao.com.br",323],["home-made-videos.com",325],["amateur-couples.com",325],["slutdump.com",325],["bdsmkingdom.xyz",325],["cosplaynsfw.xyz",325],["crazytoys.xyz",325],["hardcorelesbian.xyz",325],["pornfeet.xyz",325],["pornahegao.xyz",325],["sexontheboat.xyz",325],["dpstream.*",326],["produsat.com",327],["bluemediafiles.*",328],["12thman.com",329],["acusports.com",329],["atlantic10.com",329],["auburntigers.com",329],["baylorbears.com",329],["bceagles.com",329],["bgsufalcons.com",329],["big12sports.com",329],["bigten.org",329],["bradleybraves.com",329],["butlersports.com",329],["cmumavericks.com",329],["conferenceusa.com",329],["cyclones.com",329],["dartmouthsports.com",329],["daytonflyers.com",329],["dbupatriots.com",329],["dbusports.com",329],["denverpioneers.com",329],["fduknights.com",329],["fgcuathletics.com",329],["fightinghawks.com",329],["fightingillini.com",329],["floridagators.com",329],["friars.com",329],["friscofighters.com",329],["gamecocksonline.com",329],["goarmywestpoint.com",329],["gobison.com",329],["goblueraiders.com",329],["gobobcats.com",329],["gocards.com",329],["gocreighton.com",329],["godeacs.com",329],["goexplorers.com",329],["goetbutigers.com",329],["gofrogs.com",329],["gogriffs.com",329],["gogriz.com",329],["golobos.com",329],["gomarquette.com",329],["gopack.com",329],["gophersports.com",329],["goprincetontigers.com",329],["gopsusports.com",329],["goracers.com",329],["goshockers.com",329],["goterriers.com",329],["gotigersgo.com",329],["gousfbulls.com",329],["govandals.com",329],["gowyo.com",329],["goxavier.com",329],["gozags.com",329],["gozips.com",329],["griffinathletics.com",329],["guhoyas.com",329],["gwusports.com",329],["hailstate.com",329],["hamptonpirates.com",329],["hawaiiathletics.com",329],["hokiesports.com",329],["huskers.com",329],["icgaels.com",329],["iuhoosiers.com",329],["jsugamecocksports.com",329],["longbeachstate.com",329],["loyolaramblers.com",329],["lrtrojans.com",329],["lsusports.net",329],["morrisvillemustangs.com",329],["msuspartans.com",329],["muleriderathletics.com",329],["mutigers.com",329],["navysports.com",329],["nevadawolfpack.com",329],["niuhuskies.com",329],["nkunorse.com",329],["nuhuskies.com",329],["nusports.com",329],["okstate.com",329],["olemisssports.com",329],["omavs.com",329],["ovcsports.com",329],["owlsports.com",329],["purduesports.com",329],["redstormsports.com",329],["richmondspiders.com",329],["sfajacks.com",329],["shupirates.com",329],["siusalukis.com",329],["smcgaels.com",329],["smumustangs.com",329],["soconsports.com",329],["soonersports.com",329],["themw.com",329],["tulsahurricane.com",329],["txst.com",329],["txstatebobcats.com",329],["ubbulls.com",329],["ucfknights.com",329],["ucirvinesports.com",329],["uconnhuskies.com",329],["uhcougars.com",329],["uicflames.com",329],["umterps.com",329],["uncwsports.com",329],["unipanthers.com",329],["unlvrebels.com",329],["uoflsports.com",329],["usdtoreros.com",329],["utahstateaggies.com",329],["utepathletics.com",329],["utrockets.com",329],["uvmathletics.com",329],["uwbadgers.com",329],["villanova.com",329],["wkusports.com",329],["wmubroncos.com",329],["woffordterriers.com",329],["1pack1goal.com",329],["bcuathletics.com",329],["bubraves.com",329],["goblackbears.com",329],["golightsgo.com",329],["gomcpanthers.com",329],["goutsa.com",329],["mercerbears.com",329],["pirateblue.com",329],["pirateblue.net",329],["pirateblue.org",329],["quinnipiacbobcats.com",329],["towsontigers.com",329],["tribeathletics.com",329],["tribeclub.com",329],["utepminermaniacs.com",329],["utepminers.com",329],["wkutickets.com",329],["aopathletics.org",329],["atlantichockeyonline.com",329],["bigsouthnetwork.com",329],["bigsouthsports.com",329],["chawomenshockey.com",329],["dbupatriots.org",329],["drakerelays.org",329],["ecac.org",329],["ecacsports.com",329],["emueagles.com",329],["emugameday.com",329],["gculopes.com",329],["godrakebulldog.com",329],["godrakebulldogs.com",329],["godrakebulldogs.net",329],["goeags.com",329],["goislander.com",329],["goislanders.com",329],["gojacks.com",329],["gomacsports.com",329],["gseagles.com",329],["hubison.com",329],["iowaconference.com",329],["ksuowls.com",329],["lonestarconference.org",329],["mascac.org",329],["midwestconference.org",329],["mountaineast.org",329],["niu-pack.com",329],["nulakers.ca",329],["oswegolakers.com",329],["ovcdigitalnetwork.com",329],["pacersports.com",329],["rmacsports.org",329],["rollrivers.com",329],["samfordsports.com",329],["uncpbraves.com",329],["usfdons.com",329],["wiacsports.com",329],["alaskananooks.com",329],["broncathleticfund.com",329],["cameronaggies.com",329],["columbiacougars.com",329],["etownbluejays.com",329],["gobadgers.ca",329],["golancers.ca",329],["gometrostate.com",329],["gothunderbirds.ca",329],["kentstatesports.com",329],["lehighsports.com",329],["lopers.com",329],["lycoathletics.com",329],["lycomingathletics.com",329],["maraudersports.com",329],["mauiinvitational.com",329],["msumavericks.com",329],["nauathletics.com",329],["nueagles.com",329],["nwusports.com",329],["oceanbreezenyc.org",329],["patriotathleticfund.com",329],["pittband.com",329],["principiaathletics.com",329],["roadrunnersathletics.com",329],["sidearmsocial.com",329],["snhupenmen.com",329],["stablerarena.com",329],["stoutbluedevils.com",329],["uwlathletics.com",329],["yumacs.com",329],["collegefootballplayoff.com",329],["csurams.com",329],["cubuffs.com",329],["gobearcats.com",329],["gohuskies.com",329],["mgoblue.com",329],["osubeavers.com",329],["pittsburghpanthers.com",329],["rolltide.com",329],["texassports.com",329],["thesundevils.com",329],["uclabruins.com",329],["wvuathletics.com",329],["wvusports.com",329],["arizonawildcats.com",329],["calbears.com",329],["cuse.com",329],["georgiadogs.com",329],["goducks.com",329],["goheels.com",329],["gostanford.com",329],["insidekstatesports.com",329],["insidekstatesports.info",329],["insidekstatesports.net",329],["insidekstatesports.org",329],["k-stateathletics.com",329],["k-statefootball.net",329],["k-statefootball.org",329],["k-statesports.com",329],["k-statesports.net",329],["k-statesports.org",329],["k-statewomenshoops.com",329],["k-statewomenshoops.net",329],["k-statewomenshoops.org",329],["kstateathletics.com",329],["kstatefootball.net",329],["kstatefootball.org",329],["kstatesports.com",329],["kstatewomenshoops.com",329],["kstatewomenshoops.net",329],["kstatewomenshoops.org",329],["ksuathletics.com",329],["ksusports.com",329],["scarletknights.com",329],["showdownforrelief.com",329],["syracusecrunch.com",329],["texastech.com",329],["theacc.com",329],["ukathletics.com",329],["usctrojans.com",329],["utahutes.com",329],["utsports.com",329],["wsucougars.com",329],["vidlii.com",[329,355]],["tricksplit.io",329],["fangraphs.com",330],["stern.de",331],["geo.de",331],["brigitte.de",331],["welt.de",332],["tvspielfilm.de",[333,334,335,336]],["tvtoday.de",[333,334,335,336]],["chip.de",[333,334,335,336]],["focus.de",[333,334,335,336]],["fitforfun.de",[333,334,335,336]],["n-tv.de",337],["player.rtl2.de",338],["planetaminecraft.com",339],["cravesandflames.com",340],["codesnse.com",340],["flyad.vip",340],["lapresse.ca",341],["kolyoom.com",342],["ilovephd.com",342],["negumo.com",343],["games.wkb.jp",[344,345]],["kenshi.fandom.com",347],["hausbau-forum.de",348],["homeairquality.org",348],["faucettronn.click",348],["fake-it.ws",349],["laksa19.github.io",350],["1shortlink.com",351],["u-s-news.com",352],["luscious.net",353],["makemoneywithurl.com",354],["junkyponk.com",354],["healthfirstweb.com",354],["vocalley.com",354],["yogablogfit.com",354],["howifx.com",[354,536]],["en.financerites.com",354],["mythvista.com",354],["livenewsflix.com",354],["cureclues.com",354],["apekite.com",354],["enit.in",354],["iammagnus.com",355],["dailyvideoreports.net",355],["unityassets4free.com",355],["docer.*",356],["resetoff.pl",356],["sexodi.com",356],["cdn77.org",357],["momxxxsex.com",358],["penisbuyutucum.net",358],["ujszo.com",359],["newsmax.com",360],["nadidetarifler.com",361],["siz.tv",361],["suzylu.co.uk",[362,363]],["onworks.net",364],["yabiladi.com",364],["downloadsoft.net",365],["newsobserver.com",366],["arkadiumhosted.com",366],["testlanguages.com",367],["newsinlevels.com",367],["videosinlevels.com",367],["catcare.store",368],["starkroboticsfrc.com",369],["sinonimos.de",369],["antonimos.de",369],["quesignifi.ca",369],["tiktokrealtime.com",369],["tiktokcounter.net",369],["tpayr.xyz",369],["poqzn.xyz",369],["ashrfd.xyz",369],["rezsx.xyz",369],["tryzt.xyz",369],["ashrff.xyz",369],["rezst.xyz",369],["dawenet.com",369],["erzar.xyz",369],["waezm.xyz",369],["waezg.xyz",369],["blackwoodacademy.org",369],["cryptednews.space",369],["vivuq.com",369],["swgop.com",369],["vbnmll.com",369],["telcoinfo.online",369],["dshytb.com",369],["btcbitco.in",[369,373]],["btcsatoshi.net",369],["cempakajaya.com",369],["crypto4yu.com",369],["readbitcoin.org",369],["wiour.com",369],["finish.addurl.biz",369],["aiimgvlog.fun",[369,376]],["laweducationinfo.com",369],["savemoneyinfo.com",369],["worldaffairinfo.com",369],["godstoryinfo.com",369],["successstoryinfo.com",369],["cxissuegk.com",369],["learnmarketinfo.com",369],["bhugolinfo.com",369],["armypowerinfo.com",369],["rsgamer.app",369],["phonereviewinfo.com",369],["makeincomeinfo.com",369],["gknutshell.com",369],["vichitrainfo.com",369],["workproductivityinfo.com",369],["dopomininfo.com",369],["hostingdetailer.com",369],["fitnesssguide.com",369],["tradingfact4u.com",369],["cryptofactss.com",369],["softwaredetail.com",369],["artoffocas.com",369],["insurancesfact.com",369],["travellingdetail.com",369],["advertisingexcel.com",369],["allcryptoz.net",369],["batmanfactor.com",369],["beautifulfashionnailart.com",369],["crewbase.net",369],["documentaryplanet.xyz",369],["crewus.net",369],["gametechreviewer.com",369],["midebalonu.net",369],["misterio.ro",369],["phineypet.com",369],["seory.xyz",369],["shinbhu.net",369],["shinchu.net",369],["substitutefor.com",369],["talkforfitness.com",369],["thefitbrit.co.uk",369],["thumb8.net",369],["thumb9.net",369],["topcryptoz.net",369],["uniqueten.net",369],["ultraten.net",369],["exactpay.online",369],["quins.us",369],["kiddyearner.com",369],["imagereviser.com",370],["blog.itijobalert.in",371],["tech.pubghighdamage.com",371],["techkhulasha.com",371],["jiocinema.com",371],["rapid-cloud.co",371],["uploadmall.com",371],["4funbox.com",372],["nephobox.com",372],["1024tera.com",372],["terabox.*",372],["blog24.me",373],["bildirim.*",375],["arahdrive.com",376],["appsbull.com",377],["diudemy.com",377],["maqal360.com",[377,378,379]],["lifesurance.info",380],["akcartoons.in",381],["cybercityhelp.in",381],["dl.apkmoddone.com",382],["phongroblox.com",382],["fuckingfast.net",383],["buzzheavier.com",383],["tickhosting.com",384],["in91vip.win",385],["datavaults.co",386],["t-online.de",388],["upornia.*",[389,390]],["bobs-tube.com",391],["pornohirsch.net",392],["bembed.net",393],["embedv.net",393],["javguard.club",393],["listeamed.net",393],["v6embed.xyz",393],["vembed.*",393],["vid-guard.com",393],["vinomo.xyz",393],["nekolink.site",[394,395]],["aagmaal.com",396],["camcam.cc",396],["netfapx.com",396],["javdragon.org",396],["javneon.tv",396],["javsaga.ninja",396],["pixsera.net",397],["jnews5.com",398],["pc-builds.com",399],["reuters.com",399],["today.com",399],["videogamer.com",399],["wrestlinginc.com",399],["usatoday.com",400],["ydr.com",400],["247sports.com",401],["indiatimes.com",402],["netzwelt.de",403],["filmibeat.com",404],["goodreturns.in",404],["mykhel.com",404],["daemon-hentai.com",404],["luckydice.net",404],["adarima.org",404],["weatherwx.com",404],["sattaguess.com",404],["winshell.de",404],["rosasidan.ws",404],["upiapi.in",404],["daemonanime.net",404],["networkhint.com",404],["thichcode.net",404],["texturecan.com",404],["tikmate.app",[404,607]],["arcaxbydz.id",404],["quotesshine.com",404],["arcade.buzzrtv.com",405],["arcade.dailygazette.com",405],["arcade.lemonde.fr",405],["arena.gamesforthebrain.com",405],["bestpuzzlesandgames.com",405],["cointiply.arkadiumarena.com",405],["gamelab.com",405],["games.abqjournal.com",405],["games.amny.com",405],["games.bellinghamherald.com",405],["games.besthealthmag.ca",405],["games.bnd.com",405],["games.boston.com",405],["games.bostonglobe.com",405],["games.bradenton.com",405],["games.centredaily.com",405],["games.charlottegames.cnhinews.com",405],["games.crosswordgiant.com",405],["games.dailymail.co.uk",405],["games.dallasnews.com",405],["games.daytondailynews.com",405],["games.denverpost.com",405],["games.everythingzoomer.com",405],["games.fresnobee.com",405],["games.gameshownetwork.com",405],["games.get.tv",405],["games.greatergood.com",405],["games.heraldonline.com",405],["games.heraldsun.com",405],["games.idahostatesman.com",405],["games.insp.com",405],["games.islandpacket.com",405],["games.journal-news.com",405],["games.kansas.com",405],["games.kansascity.com",405],["games.kentucky.com",405],["games.lancasteronline.com",405],["games.ledger-enquirer.com",405],["games.macon.com",405],["games.mashable.com",405],["games.mercedsunstar.com",405],["games.metro.us",405],["games.metv.com",405],["games.miamiherald.com",405],["games.modbee.com",405],["games.moviestvnetwork.com",405],["games.myrtlebeachonline.com",405],["games.games.newsgames.parade.com",405],["games.pressdemocrat.com",405],["games.puzzlebaron.com",405],["games.puzzler.com",405],["games.puzzles.ca",405],["games.qns.com",405],["games.readersdigest.ca",405],["games.sacbee.com",405],["games.sanluisobispo.com",405],["games.sixtyandme.com",405],["games.sltrib.com",405],["games.springfieldnewssun.com",405],["games.star-telegram.com",405],["games.startribune.com",405],["games.sunherald.com",405],["games.theadvocate.com",405],["games.thenewstribune.com",405],["games.theolympian.com",405],["games.theportugalnews.com",405],["games.thestar.com",405],["games.thestate.com",405],["games.tri-cityherald.com",405],["games.triviatoday.com",405],["games.usnews.com",405],["games.word.tips",405],["games.wordgenius.com",405],["games.wtop.com",405],["jeux.meteocity.com",405],["juegos.as.com",405],["juegos.elnuevoherald.com",405],["juegos.elpais.com",405],["philly.arkadiumarena.com",405],["play.dictionary.com",405],["puzzles.bestforpuzzles.com",405],["puzzles.centralmaine.com",405],["puzzles.crosswordsolver.org",405],["puzzles.independent.co.uk",405],["puzzles.nola.com",405],["puzzles.pressherald.com",405],["puzzles.standard.co.uk",405],["puzzles.sunjournal.com",405],["arkadium.com",406],["abysscdn.com",[407,408]],["turtleviplay.xyz",409],["arcai.com",410],["my-code4you.blogspot.com",411],["flickr.com",412],["firefile.cc",413],["pestleanalysis.com",413],["kochamjp.pl",413],["tutorialforlinux.com",413],["whatsaero.com",413],["animeblkom.net",[413,427]],["blkom.com",413],["globes.co.il",[414,415]],["jardiner-malin.fr",416],["tw-calc.net",417],["ohmybrush.com",418],["talkceltic.net",419],["mentalfloss.com",420],["uprafa.com",421],["cube365.net",422],["wwwfotografgotlin.blogspot.com",423],["freelistenonline.com",423],["badassdownloader.com",424],["quickporn.net",425],["yellowbridge.com",426],["aosmark.com",428],["ctrlv.*",429],["atozmath.com",[430,431,432,433,434,435,436]],["newyorker.com",437],["brighteon.com",438],["more.tv",439],["video1tube.com",440],["alohatube.xyz",440],["4players.de",441],["onlinesoccermanager.com",441],["fshost.me",442],["link.cgtips.org",443],["hentaicloud.com",444],["paperzonevn.com",446],["9jarock.org",447],["fzmovies.info",447],["fztvseries.ng",447],["netnaijas.com",447],["hentaienglish.com",448],["hentaiporno.xxx",448],["venge.io",[449,450]],["btcbux.io",451],["its.porn",[452,453]],["atv.at",454],["2ndrun.tv",455],["rackusreads.com",455],["teachmemicro.com",455],["willcycle.com",455],["kusonime.com",[456,457]],["123movieshd.*",458],["imgur.com",[459,460,723]],["hentai-party.com",461],["hentaicomics.pro",461],["uproxy.*",462],["animesa.*",463],["subtitle.one",464],["subtitleone.cc",464],["mysexgames.com",465],["ancient-origins.*",466],["cinecalidad.*",[467,468]],["xnxx.com",469],["xvideos.*",469],["gdr-online.com",470],["mmm.dk",471],["iqiyi.com",[472,473,599]],["m.iqiyi.com",474],["nbcolympics.com",475],["apkhex.com",476],["indiansexstories2.net",477],["issstories.xyz",477],["1340kbbr.com",478],["gorgeradio.com",478],["kduk.com",478],["kedoam.com",478],["kejoam.com",478],["kelaam.com",478],["khsn1230.com",478],["kjmx.rocks",478],["kloo.com",478],["klooam.com",478],["klykradio.com",478],["kmed.com",478],["kmnt.com",478],["kool991.com",478],["kpnw.com",478],["kppk983.com",478],["krktcountry.com",478],["ktee.com",478],["kwro.com",478],["kxbxfm.com",478],["thevalley.fm",478],["quizlet.com",479],["dsocker1234.blogspot.com",480],["schoolcheats.net",[481,482]],["mgnet.xyz",483],["designtagebuch.de",484],["pixroute.com",485],["uploady.io",486],["calculator-online.net",487],["porngames.club",488],["sexgames.xxx",488],["111.90.159.132",489],["mobile-tracker-free.com",490],["pfps.gg",491],["social-unlock.com",492],["superpsx.com",493],["ninja.io",494],["sourceforge.net",495],["samfirms.com",496],["rapelust.com",497],["vtube.to",497],["desitelugusex.com",497],["dvdplay.*",497],["xvideos-downloader.net",497],["xxxvideotube.net",497],["sdefx.cloud",497],["nozomi.la",497],["banned.video",498],["madmaxworld.tv",498],["androidpolice.com",498],["babygaga.com",498],["backyardboss.net",498],["carbuzz.com",498],["cbr.com",498],["collider.com",498],["dualshockers.com",498],["footballfancast.com",498],["footballleagueworld.co.uk",498],["gamerant.com",498],["givemesport.com",498],["hardcoregamer.com",498],["hotcars.com",498],["howtogeek.com",498],["makeuseof.com",498],["moms.com",498],["movieweb.com",498],["pocket-lint.com",498],["pocketnow.com",498],["screenrant.com",498],["simpleflying.com",498],["thegamer.com",498],["therichest.com",498],["thesportster.com",498],["thethings.com",498],["thetravel.com",498],["topspeed.com",498],["xda-developers.com",498],["huffpost.com",499],["ingles.com",500],["spanishdict.com",500],["surfline.com",[501,502]],["play.tv3.ee",503],["play.tv3.lt",503],["play.tv3.lv",[503,504]],["tv3play.skaties.lv",503],["bulbagarden.net",505],["hollywoodlife.com",506],["mat6tube.com",507],["hotabis.com",508],["root-nation.com",508],["italpress.com",508],["airsoftmilsimnews.com",508],["artribune.com",508],["newtumbl.com",509],["apkmaven.*",510],["aruble.net",511],["nevcoins.club",512],["mail.com",513],["gmx.*",514],["mangakita.id",516],["avpgalaxy.net",517],["panda-novel.com",518],["lightsnovel.com",518],["eaglesnovel.com",518],["pandasnovel.com",518],["ewrc-results.com",519],["kizi.com",520],["cyberscoop.com",521],["fedscoop.com",521],["canale.live",522],["jeep-cj.com",523],["sponsorhunter.com",524],["cloudcomputingtopics.net",525],["likecs.com",526],["tiscali.it",527],["linkspy.cc",528],["adshnk.com",529],["chattanoogan.com",530],["adsy.pw",531],["playstore.pw",531],["windowspro.de",532],["tvtv.ca",533],["tvtv.us",533],["mydaddy.cc",534],["roadtrippin.fr",535],["vavada5com.com",536],["anyporn.com",[537,554]],["bravoporn.com",537],["bravoteens.com",537],["crocotube.com",537],["hellmoms.com",537],["hellporno.com",537],["sex3.com",537],["tubewolf.com",537],["xbabe.com",537],["xcum.com",537],["zedporn.com",537],["imagetotext.info",538],["infokik.com",539],["freepik.com",540],["ddwloclawek.pl",[541,542]],["www.seznam.cz",543],["deezer.com",544],["my-subs.co",545],["plaion.com",546],["slideshare.net",[547,548]],["ustreasuryyieldcurve.com",549],["businesssoftwarehere.com",550],["goo.st",550],["freevpshere.com",550],["softwaresolutionshere.com",550],["gamereactor.*",552],["madoohd.com",553],["doomovie-hd.*",553],["staige.tv",555],["androidadult.com",556],["streamvid.net",557],["watchtv24.com",558],["cellmapper.net",559],["medscape.com",560],["newscon.org",[561,562]],["wheelofgold.com",563],["drakecomic.*",563],["app.blubank.com",564],["mobileweb.bankmellat.ir",564],["chat.nrj.fr",565],["chat.tchatche.com",[565,580]],["ccthesims.com",572],["chromeready.com",572],["dtbps3games.com",572],["illustratemagazine.com",572],["uknip.co.uk",572],["vod.pl",573],["megadrive-emulator.com",574],["tvhay.*",[575,576]],["moviesapi.club",577],["bestx.stream",577],["watchx.top",577],["digimanie.cz",578],["svethardware.cz",578],["srvy.ninja",579],["cnn.com",[581,582,583]],["news.bg",584],["edmdls.com",585],["freshremix.net",585],["scenedl.org",585],["trakt.tv",586],["client.falixnodes.net",[587,588]],["shroomers.app",589],["classicalradio.com",590],["di.fm",590],["jazzradio.com",590],["radiotunes.com",590],["rockradio.com",590],["zenradio.com",590],["getthit.com",591],["techedubyte.com",592],["soccerinhd.com",592],["movie-th.tv",593],["iwanttfc.com",594],["nutraingredients-asia.com",595],["nutraingredients-latam.com",595],["nutraingredients-usa.com",595],["nutraingredients.com",595],["ozulscansen.com",596],["nexusmods.com",597],["lookmovie.*",598],["lookmovie2.to",598],["biletomat.pl",600],["hextank.io",[601,602]],["filmizlehdfilm.com",[603,604,605,606]],["filmizletv.*",[603,604,605,606]],["fullfilmizle.cc",[603,604,605,606]],["gofilmizle.net",[603,604,605,606]],["btvplus.bg",608],["sagewater.com",609],["redlion.net",609],["filmweb.pl",610],["satdl.com",611],["vidstreaming.xyz",612],["everand.com",613],["myradioonline.pl",614],["cbs.com",615],["paramountplus.com",615],["fullxh.com",616],["galleryxh.site",616],["megaxh.com",616],["movingxh.world",616],["seexh.com",616],["unlockxh4.com",616],["valuexh.life",616],["xhaccess.com",616],["xhadult2.com",616],["xhadult3.com",616],["xhadult4.com",616],["xhadult5.com",616],["xhamster.*",616],["xhamster1.*",616],["xhamster10.*",616],["xhamster11.*",616],["xhamster12.*",616],["xhamster13.*",616],["xhamster14.*",616],["xhamster15.*",616],["xhamster16.*",616],["xhamster17.*",616],["xhamster18.*",616],["xhamster19.*",616],["xhamster20.*",616],["xhamster2.*",616],["xhamster3.*",616],["xhamster4.*",616],["xhamster42.*",616],["xhamster46.com",616],["xhamster5.*",616],["xhamster7.*",616],["xhamster8.*",616],["xhamsterporno.mx",616],["xhbig.com",616],["xhbranch5.com",616],["xhchannel.com",616],["xhdate.world",616],["xhlease.world",616],["xhmoon5.com",616],["xhofficial.com",616],["xhopen.com",616],["xhplanet1.com",616],["xhplanet2.com",616],["xhreal2.com",616],["xhreal3.com",616],["xhspot.com",616],["xhtotal.com",616],["xhtree.com",616],["xhvictory.com",616],["xhwebsite.com",616],["xhwebsite2.com",616],["xhwebsite5.com",616],["xhwide1.com",616],["xhwide2.com",616],["xhwide5.com",616],["file-upload.net",618],["acortalo.*",[619,620,621,622]],["acortar.*",[619,620,621,622]],["megadescarga.net",[619,620,621,622]],["megadescargas.net",[619,620,621,622]],["hentaihaven.xxx",623],["jacquieetmicheltv2.net",625],["a2zapk.*",626],["fcportables.com",[627,628]],["emurom.net",629],["freethesaurus.com",[630,631]],["thefreedictionary.com",[630,631]],["oeffentlicher-dienst.info",632],["im9.eu",[633,634]],["dcdlplayer8a06f4.xyz",635],["ultimate-guitar.com",636],["claimbits.net",637],["sexyscope.net",638],["kickassanime.*",639],["recherche-ebook.fr",640],["virtualdinerbot.com",640],["zonebourse.com",641],["pink-sluts.net",642],["andhrafriends.com",643],["benzinpreis.de",644],["defenseone.com",645],["govexec.com",645],["nextgov.com",645],["route-fifty.com",645],["sharing.wtf",646],["wetter3.de",647],["esportivos.fun",648],["cosmonova-broadcast.tv",649],["538.nl",650],["hartvannederland.nl",650],["kijk.nl",650],["shownieuws.nl",650],["vandaaginside.nl",650],["rock.porn",[651,652]],["videzz.net",[653,654]],["ezaudiobookforsoul.com",655],["club386.com",656],["decompiler.com",[657,658]],["littlebigsnake.com",659],["easyfun.gg",660],["smailpro.com",661],["ilgazzettino.it",662],["ilmessaggero.it",662],["3bmeteo.com",[663,664]],["mconverter.eu",665],["lover937.net",666],["10gb.vn",667],["pes6.es",668],["tactics.tools",[669,670]],["boundhub.com",671],["alocdnnetu.xyz",672],["reliabletv.me",673],["jakondo.ru",674],["appnee.com",674],["trueachievements.com",674],["truesteamachievements.com",674],["truetrophies.com",674],["filecrypt.*",675],["wired.com",677],["spankbang.*",[678,679,680,725,726]],["hulu.com",[681,682,683]],["hanime.tv",684],["nhentai.net",[685,686,687]],["pouvideo.*",688],["povvideo.*",688],["povw1deo.*",688],["povwideo.*",688],["powv1deo.*",688],["powvibeo.*",688],["powvideo.*",688],["powvldeo.*",688],["anonymfile.com",689],["gofile.to",689],["dotycat.com",690],["rateyourmusic.com",691],["reporterpb.com.br",692],["blog-dnz.com",694],["18adultgames.com",695],["colnect.com",[696,697]],["adultgamesworld.com",698],["bgmiupdate.com.in",699],["reviewdiv.com",700],["parametric-architecture.com",701],["laurelberninteriors.com",[702,728]],["voiceofdenton.com",703],["concealednation.org",703],["askattest.com",705],["opensubtitles.com",706],["savefiles.com",707],["streamup.ws",708],["goodstream.one",709],["lecrabeinfo.net",710],["cerberusapp.com",711],["smashkarts.io",712],["beamng.wesupply.cx",713],["wowtv.de",[714,715]],["jsfiddle.net",[716,717]],["www.google.*",718],["tacobell.com",719],["zefoy.com",720],["cnet.com",721],["natgeotv.com",724],["globo.com",727],["wayfair.com",729]]);
const exceptionsMap = new Map([["cloudflare.com",[0]],["pingit.com",[175]],["loan.bgmi32bitapk.in",[295]],["lookmovie.studio",[598]]]);
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
