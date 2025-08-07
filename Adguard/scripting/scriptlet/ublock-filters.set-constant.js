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
const argsList = [["console.clear","undefined"],["aclib.runInPagePush","{}","as","callback"],["aclib.runBanner","{}","as","function"],["adBlockDetected","undefined"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["dvtag.getTargeting","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["googletag.cmd","{}"],["_aps","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["google.ima.settings.setDisableFlashAds","noopFunc"],["pa.privacy","{}"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505","{}"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["Object.prototype.que","noopFunc"],["Object.prototype.que.push","noopFunc"],["ga.sendGaEvent","noopFunc"],["adobe","{}"],["MT","{}"],["MT.track","noopFunc"],["ClickOmniPartner","noopFunc"],["adex","{}"],["adex.getAdexUser","noopFunc"],["Adkit","noopFunc"],["Object.prototype.shouldExpectGoogleCMP","false"],["apntag.refresh","noopFunc"],["pa.sendEvent","noopFunc"],["Munchkin","{}"],["Munchkin.init","noopFunc"],["ttd_dom_ready","noopFunc"],["ramp","undefined"],["appInfo.snowplow.trackSelfDescribingEvent","noopFunc"],["_vwo_code.init","noopFunc"],["adobePageView","noopFunc"],["dapTracker","{}"],["dapTracker.track","noopFunc"],["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["console.clear","noopFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["console.clear","trueFunc"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["check_adblock","true"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["adBlockEnabled","false"],["puShown","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["openPopunder","noopFunc"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["CaptchmeState.adb","undefined"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["HTMLAnchorElement.prototype.click","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["check","true"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["runAdBlocker","false"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["cnbc.canShowAds","true"],["ue_adb_chk","1"],["firefaucet","true"],["cRAds","true"],["uas","[]"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["foundation.adPlayer.bitmovin","{}"],["weltConfig.switches.videoAdBlockBlocker","false"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["Object.prototype.adReinsertion","noopFunc"],["getHomadConfig","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["ulp_noadb","true"],["Object.prototype.adblock_detected","false"],["timeSec","0"],["adsbygoogle.loaded","true"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["Adv_ab","false"],["sgpbCanRunAds","true"],["document.hidden","false"],["hasFocus","trueFunc"],["navigator.brave","undefined"],["Object.prototype.isAllAdClose","true"],["document.hasFocus","trueFunc"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["navigator.webkitTemporaryStorage.queryUsageAndQuota","noopFunc"],["document.onkeydown","noopFunc"],["showadas","true"],["alert","throwFunc"],["aSl.gcd","0"],["window.adLink","null"],["detectedAdblock","undefined"],["isTabActive","true"],["document.cookie","adcadg=insurance","adcadg=insurance"],["clicked","2"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["flashvars.mlogo",""],["vpPrerollVideo","undefined"],["PlayerConfig.config.CustomAdSetting","[]"],["PlayerConfig.trusted","true"],["PlayerConfig.config.AffiliateAdViewLevel","3"],["univresalP","noopFunc"],["hold_click","false"],["tie.ad_blocker_detector","false"],["admiral","noopFunc"],["gnt.u.adfree","true"],["gnt.x.uam"],["__INITIAL_DATA__.siteData.admiralScript"],["objAd.loadAdShield","noopFunc"],["window.myAd.runAd","noopFunc"],["detectAdBlock","noopFunc"],["__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["document.ontouchend","null"],["document.onclick","null"],["playID","1"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["xv_ad_block","0"],["openWindow","noopFunc"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["showada","true"],["showax","true"],["p18","undefined"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["Object.prototype.adblockFound","false"],["createCanvas","noopFunc"],["document.bridCanRunAds","true"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["xv.sda.pp.init","noopFunc"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["ad_link",""],["penciBlocksArray","[]"],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["D4zz","noopFunc"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["tv3Cmp.ConsentGiven","true"],["setupSkin","noopFunc"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["td_ad_background_click_link","undefined"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["puShown1","true"],["passthetest","true"],["pandaAdviewValidate","true"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["abpblocked","undefined"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["sssp","emptyObj"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["adSettings","[]"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["googletag","true"],["tOS2","150"],["checkAdBlocker","noopFunc"],["navigator.standalone","true"],["ShowAdvertising","{}"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["feedBack.showAffilaePromo","noopFunc"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["HTMLScriptElement.prototype.onerror","null"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["window.adngin","{}"],["amzn_aps_csm","{}"],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["sharedController.adblockDetector","noopFunc"],["checkAdsStatus","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["checkAdBlockeraz","noopFunc"],["blockingAds","false"],["Yii2App.playbackTimeout","0"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["powerAPITag","emptyObj"],["playerEnhancedConfig.run","throwFunc"],["aoAdBlockDetected","false"],["rodo.checkIsDidomiConsent","noopFunc"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["hasAdBlocker","false"],["initials.yld-pdpopunder",""],["download_click","true"],["advertisement3","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["dvsize","52"],["majorse","true"],["completed","1"],["testerli","false"],["w87.abd","noopFunc"],["w87.dsab","noopFunc"],["document.referrer",""],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["one_time","1"],["consentGiven","true"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["malisx","true"],["alim","true"],["ADS.isBannersEnabled","false"],["EASYFUN_ADS_CAN_RUN","true"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["detectedAdblock","noopFunc"],["Object.prototype.DetectByGoogleAd","noopFunc"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["NativeAd","noopFunc"],["Blob","noopFunc"],["window.navigator.brave","undefined"],["HTMLScriptElement.prototype.onerror","undefined"],["isAdblock","false"],["openPop","noopFunc"],["cns.library","true"],["BJSShowUnder","{}"],["BJSShowUnder.bindTo","noopFunc"],["BJSShowUnder.add","noopFunc"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["ABLK","false"],["_n_app.popunder","null"],["_n_app.options.ads.show_popunders","false"],["N_BetterJsPop.object","{}"],["isAdb","false"],["countDown","0"],["runCheck","noopFunc"],["adsSlotRenderEndSeen","true"],["showModal","noopFunc"],["flashvars.mlogo_link",""],["isAdBlocked","noopFunc"],["URLlist","[]"],["aaw","{}"],["aaw.processAdsOnPage","noopFunc"],["doOpen","undefined"],["HTMLImageElement.prototype.onerror","undefined"],["OneTrust","{}"],["OneTrust.IsAlertBoxClosed","trueFunc"],["FOXIZ_MAIN_SCRIPT.siteAccessDetector","noopFunc"],["openAdBlockPopup","noopFunc"],["Object.prototype._adsDisabled","true"],["advanced_ads_check_adblocker","noopFunc"],["canRunAds","1"],["attestHasAdBlockerActivated","true"],["extInstalled","true"],["SaveFiles.add","noopFunc"],["detectSandbox","noopFunc"],["adbon","0"],["LCI.adBlockDetectorEnabled","false"],["stoCazzo","true"],["adblockDetected","false"],["importFAB","undefined"],["window.__CONFIGURATION__.adInsertion.enabled","false"],["window.__CONFIGURATION__.features.enableAdBlockerDetection","false"],["_carbonads","{}"],["_bsa","{}"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["Object.prototype.updateModifiedCommerceUrl","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["Visitor","{}"],["send_gravity_event","noopFunc"],["send_recommendation_event","noopFunc"],["libAnalytics.data.get","noopFunc"],["adthrive._components.start","noopFunc"],["navigator.sendBeacon","noopFunc"]];
const hostnamesMap = new Map([["jilliandescribecompany.com",0],["gogoanime.*",[0,199]],["adrianmissionminute.com",0],["alejandrocenturyoil.com",0],["alleneconomicmatter.com",0],["bethshouldercan.com",0],["bigclatterhomesguideservice.com",0],["brittneystandardwestern.com",0],["brookethoughi.com",0],["brucevotewithin.com",0],["cindyeyefinal.com",0],["denisegrowthwide.com",0],["diananatureforeign.com",0],["donaldlineelse.com",0],["edwardarriveoften.com",0],["erikcoldperson.com",0],["evelynthankregion.com",0],["graceaddresscommunity.com",0],["heatherdiscussionwhen.com",0],["heatherwholeinvolve.com",0],["housecardsummerbutton.com",0],["jamessoundcost.com",0],["jamiesamewalk.com",0],["jasminetesttry.com",0],["jasonresponsemeasure.com",0],["jayservicestuff.com",0],["jennifercertaindevelopment.com",0],["jessicaglassauthor.com",0],["johnalwayssame.com",0],["johntryopen.com",0],["jonathansociallike.com",0],["josephseveralconcern.com",0],["kellywhatcould.com",0],["kennethofficialitem.com",0],["kristiesoundsimply.com",0],["lisatrialidea.com",0],["lorimuchbenefit.com",0],["loriwithinfamily.com",0],["lukecomparetwo.com",0],["mariatheserepublican.com",0],["markstyleall.com",0],["michaelapplysome.com",0],["morganoperationface.com",0],["nathanfromsubject.com",0],["paulkitchendark.com",0],["rebeccaneverbase.com",0],["richardsignfish.com",0],["roberteachfinal.com",0],["robertordercharacter.com",0],["robertplacespace.com",0],["ryanagoinvolve.com",0],["sandratableother.com",0],["sandrataxeight.com",0],["sethniceletter.com",0],["shannonpersonalcost.com",0],["susanhavekeep.com",0],["tinycat-voe-fashion.com",0],["toddpartneranimal.com",0],["troyyourlead.com",0],["uptodatefinishconference.com",0],["uptodatefinishconferenceroom.com",0],["voe.sx",0],["maxfinishseveral.com",0],["voe.sx>>",0],["javboys.tv>>",0],["freeplayervideo.com",0],["nazarickol.com",0],["player-cdn.com",0],["playhydrax.com",[0,409,410]],["rabbitstream.net",0],["fmovies.*",0],["japscan.*",[1,2]],["u26bekrb.fun",3],["br.de",4],["indeed.com",5],["zillow.com",[5,109]],["pasteboard.co",6],["bbc.com",7],["clickhole.com",8],["deadspin.com",8],["gizmodo.com",8],["jalopnik.com",8],["jezebel.com",8],["kotaku.com",8],["lifehacker.com",8],["splinternews.com",8],["theinventory.com",8],["theonion.com",8],["theroot.com",8],["thetakeout.com",8],["pewresearch.org",8],["los40.com",[9,10]],["as.com",10],["caracol.com.co",10],["telegraph.co.uk",[11,12]],["poweredbycovermore.com",[11,64]],["lumens.com",[11,64]],["verizon.com",13],["humanbenchmark.com",14],["politico.com",15],["officedepot.co.cr",[16,17]],["officedepot.*",[18,19]],["usnews.com",20],["coolmathgames.com",[21,285,286,287]],["video.gazzetta.it",[22,23]],["oggi.it",[22,23]],["manoramamax.com",22],["factable.com",24],["thedailybeast.com",25],["zee5.com",26],["gala.fr",27],["geo.fr",27],["voici.fr",27],["gloucestershirelive.co.uk",28],["arsiv.mackolik.com",29],["jacksonguitars.com",30],["scandichotels.com",31],["stylist.co.uk",32],["nettiauto.com",33],["thaiairways.com",[34,35]],["cerbahealthcare.it",[36,37]],["futura-sciences.com",[36,54]],["toureiffel.paris",36],["campusfrance.org",[36,148]],["tiendaenlinea.claro.com.ni",[38,39]],["tieba.baidu.com",40],["fandom.com",[41,42,346]],["grasshopper.com",[43,44]],["epson.com.cn",[45,46,47,48]],["oe24.at",[49,50]],["szbz.de",49],["platform.autods.com",[51,52]],["kcra.com",53],["wcvb.com",53],["sportdeutschland.tv",53],["citibank.com.sg",55],["uol.com.br",[56,57,58,59,60]],["gazzetta.gr",61],["digicol.dpm.org.cn",[62,63]],["virginmediatelevision.ie",65],["larazon.es",[66,67]],["waitrosecellar.com",[68,69,70]],["kicker.de",[71,388]],["sharpen-free-design-generator.netlify.app",[72,73]],["help.cashctrl.com",[74,75]],["gry-online.pl",76],["vidaextra.com",77],["commande.rhinov.pro",[78,79]],["ecom.wixapps.net",[78,79]],["tipranks.com",[80,81]],["iceland.co.uk",[82,83,84]],["socket.pearsoned.com",85],["tntdrama.com",[86,87]],["trutv.com",[86,87]],["mobile.de",[88,89]],["ioe.vn",[90,91]],["geiriadur.ac.uk",[90,94]],["welsh-dictionary.ac.uk",[90,94]],["bikeportland.org",[92,93]],["biologianet.com",[57,58,59]],["10.com.au",[95,96]],["10play.com.au",[95,96]],["sunshine-live.de",[97,98]],["whatismyip.com",[99,100]],["myfitnesspal.com",101],["netoff.co.jp",[102,103]],["bluerabbitrx.com",[102,103]],["foundit.*",[104,105]],["clickjogos.com.br",106],["bristan.com",[107,108]],["share.hntv.tv",[110,111,112,113]],["forum.dji.com",[110,113]],["unionpayintl.com",[110,112]],["streamelements.com",110],["optimum.net",[114,115]],["hdfcfund.com",116],["user.guancha.cn",[117,118]],["sosovalue.com",119],["bandyforbundet.no",[120,121]],["tatacommunications.com",122],["kb.arlo.com",[122,154]],["suamusica.com.br",[123,124,125]],["macrotrends.net",[126,127]],["code.world",128],["smartcharts.net",128],["topgear.com",129],["eservice.directauto.com",[130,131]],["nbcsports.com",132],["standard.co.uk",133],["pruefernavi.de",[134,135]],["speedtest.net",[136,137]],["17track.net",138],["visible.com",139],["hagerty.com",[140,141]],["marketplace.nvidia.com",142],["kino.de",[143,144]],["9now.nine.com.au",145],["worldstar.com",146],["prisjakt.no",147],["developer.arm.com",[149,150]],["sterkinekor.com",151],["iogames.space",152],["id.condenast.com",153],["tires.costco.com",155],["livemint.com",[156,157]],["m.youtube.com",[158,159,160,161]],["music.youtube.com",[158,159,160,161]],["tv.youtube.com",[158,159,160,161]],["www.youtube.com",[158,159,160,161]],["youtubekids.com",[158,159,160,161]],["youtube-nocookie.com",[158,159,160,161]],["eu-proxy.startpage.com",[158,159,161]],["timesofindia.indiatimes.com",162],["economictimes.indiatimes.com",163],["motherless.com",164],["sueddeutsche.de",165],["watchanimesub.net",166],["wcoanimesub.tv",166],["wcoforever.net",166],["freeviewmovies.com",166],["filehorse.com",166],["guidetnt.com",166],["starmusiq.*",166],["sp-today.com",166],["linkvertise.com",166],["eropaste.net",166],["getpaste.link",166],["sharetext.me",166],["wcofun.*",166],["note.sieuthuthuat.com",166],["gadgets.es",[166,457]],["amateurporn.co",[166,255]],["wiwo.de",167],["primewire.*",168],["alphaporno.com",[168,539]],["porngem.com",168],["shortit.pw",[168,241]],["familyporn.tv",168],["sbplay.*",168],["id45.cyou",168],["85po.com",[168,226]],["milfnut.*",168],["k1nk.co",168],["watchasians.cc",168],["sankakucomplex.com",169],["player.glomex.com",170],["merkur.de",170],["tz.de",170],["sxyprn.*",171],["hqq.*",[172,173]],["waaw.*",[173,174]],["hotpornfile.org",173],["x69.ovh",173],["younetu.*",173],["multiup.us",173],["peliculas8k.com",[173,174]],["czxxx.org",173],["vtplayer.online",173],["vvtplayer.*",173],["netu.ac",173],["netu.frembed.lol",173],["123link.*",175],["adshort.*",175],["mitly.us",175],["linkrex.net",175],["linx.cc",175],["oke.io",175],["linkshorts.*",175],["dz4link.com",175],["adsrt.*",175],["linclik.com",175],["shrt10.com",175],["vinaurl.*",175],["loptelink.com",175],["adfloz.*",175],["cut-fly.com",175],["linkfinal.com",175],["payskip.org",175],["cutpaid.com",175],["linkjust.com",175],["leechpremium.link",175],["icutlink.com",[175,260]],["oncehelp.com",175],["rgl.vn",175],["reqlinks.net",175],["bitlk.com",175],["qlinks.eu",175],["link.3dmili.com",175],["short-fly.com",175],["foxseotools.com",175],["dutchycorp.*",175],["shortearn.*",175],["pingit.*",175],["link.turkdown.com",175],["7r6.com",175],["oko.sh",175],["ckk.ai",175],["fc.lc",175],["fstore.biz",175],["shrink.*",175],["cuts-url.com",175],["eio.io",175],["exe.app",175],["exee.io",175],["exey.io",175],["skincarie.com",175],["exeo.app",175],["tmearn.*",175],["coinlyhub.com",[175,324]],["adsafelink.com",175],["aii.sh",175],["megalink.*",175],["cybertechng.com",[175,340]],["cutdl.xyz",175],["iir.ai",175],["shorteet.com",[175,358]],["miniurl.*",175],["smoner.com",175],["gplinks.*",175],["odisha-remix.com",[175,340]],["xpshort.com",[175,340]],["upshrink.com",175],["clk.*",175],["easysky.in",175],["veganab.co",175],["golink.bloggerishyt.in",175],["birdurls.com",175],["vipurl.in",175],["jameeltips.us",175],["promo-visits.site",175],["satoshi-win.xyz",[175,374]],["shorterall.com",175],["encurtandourl.com",175],["forextrader.site",175],["postazap.com",175],["cety.app",175],["exego.app",[175,372]],["cutlink.net",175],["cutyurls.com",175],["cutty.app",175],["cutnet.net",175],["jixo.online",175],["tinys.click",[175,340]],["cpm.icu",175],["panyshort.link",175],["enagato.com",175],["pandaznetwork.com",175],["tpi.li",175],["oii.la",175],["recipestutorials.com",175],["shrinke.*",175],["shrinkme.*",175],["shrinkforearn.in",175],["oii.io",175],["du-link.in",175],["atglinks.com",175],["thotpacks.xyz",175],["megaurl.in",175],["megafly.in",175],["simana.online",175],["fooak.com",175],["joktop.com",175],["evernia.site",175],["falpus.com",175],["link.paid4link.com",175],["exalink.fun",175],["shortxlinks.com",175],["upfion.com",175],["upfiles.app",175],["upfiles-urls.com",175],["flycutlink.com",[175,340]],["linksly.co",175],["link1s.*",175],["pkr.pw",175],["imagenesderopaparaperros.com",175],["shortenbuddy.com",175],["apksvip.com",175],["4cash.me",175],["namaidani.com",175],["shortzzy.*",175],["teknomuda.com",175],["shorttey.*",[175,323]],["miuiku.com",175],["savelink.site",175],["lite-link.*",175],["adcorto.*",175],["samaa-pro.com",175],["miklpro.com",175],["modapk.link",175],["ccurl.net",175],["linkpoi.me",175],["pewgame.com",175],["haonguyen.top",175],["zshort.*",175],["crazyblog.in",175],["cutearn.net",175],["rshrt.com",175],["filezipa.com",175],["dz-linkk.com",175],["upfiles.*",175],["theblissempire.com",175],["finanzas-vida.com",175],["adurly.cc",175],["paid4.link",175],["link.asiaon.top",175],["go.gets4link.com",175],["linkfly.*",175],["beingtek.com",175],["shorturl.unityassets4free.com",175],["disheye.com",175],["techymedies.com",175],["techysuccess.com",175],["za.gl",[175,275]],["bblink.com",175],["myad.biz",175],["swzz.xyz",175],["vevioz.com",175],["charexempire.com",175],["clk.asia",175],["sturls.com",175],["myshrinker.com",175],["snowurl.com",[175,340]],["wplink.*",175],["rocklink.in",175],["techgeek.digital",175],["download3s.net",175],["shortx.net",175],["tlin.me",175],["bestcash2020.com",175],["adslink.pw",175],["novelssites.com",175],["faucetcrypto.net",175],["trxking.xyz",175],["weadown.com",175],["m.bloggingguidance.com",175],["link.codevn.net",175],["link4rev.site",175],["c2g.at",175],["bitcosite.com",[175,553]],["cryptosh.pro",175],["windowslite.net",[175,340]],["viewfr.com",175],["cl1ca.com",175],["4br.me",175],["fir3.net",175],["seulink.*",175],["encurtalink.*",175],["kiddyshort.com",175],["watchmygf.me",[176,200]],["camwhores.*",[176,186,225,226,227]],["camwhorez.tv",[176,186,225,226]],["cambay.tv",[176,207,225,252,254,255,256,257]],["fpo.xxx",[176,207]],["sexemix.com",176],["heavyfetish.com",[176,726]],["thotcity.su",176],["viralxxxporn.com",[176,392]],["tube8.*",[177,178]],["you-porn.com",178],["youporn.*",178],["youporngay.com",178],["youpornru.com",178],["redtube.*",178],["9908ww.com",178],["adelaidepawnbroker.com",178],["bztube.com",178],["hotovs.com",178],["insuredhome.org",178],["nudegista.com",178],["pornluck.com",178],["vidd.se",178],["pornhub.*",[178,312]],["pornhub.com",178],["pornerbros.com",179],["freep.com",179],["porn.com",180],["tune.pk",181],["noticias.gospelmais.com.br",182],["techperiod.com",182],["viki.com",[183,184]],["watch-series.*",185],["watchseries.*",185],["vev.*",185],["vidop.*",185],["vidup.*",185],["sleazyneasy.com",[186,187,188]],["smutr.com",[186,320]],["tktube.com",186],["yourporngod.com",[186,187]],["javbangers.com",[186,447]],["camfox.com",186],["camthots.tv",[186,252]],["shegotass.info",186],["amateur8.com",186],["bigtitslust.com",186],["ebony8.com",186],["freeporn8.com",186],["lesbian8.com",186],["maturetubehere.com",186],["sortporn.com",186],["motherporno.com",[186,187,207,254]],["theporngod.com",[186,187]],["watchdirty.to",[186,226,227,255]],["pornsocket.com",189],["luxuretv.com",190],["porndig.com",[191,192]],["webcheats.com.br",193],["ceesty.com",[194,195]],["gestyy.com",[194,195]],["corneey.com",195],["destyy.com",195],["festyy.com",195],["sh.st",195],["mitaku.net",195],["angrybirdsnest.com",196],["zrozz.com",196],["clix4btc.com",196],["4tests.com",196],["goltelevision.com",196],["news-und-nachrichten.de",196],["laradiobbs.net",196],["urlaubspartner.net",196],["produktion.de",196],["cinemaxxl.de",196],["bladesalvador.com",196],["tempr.email",196],["cshort.org",196],["friendproject.net",196],["covrhub.com",196],["katfile.com",[196,619]],["trust.zone",196],["business-standard.com",196],["planetsuzy.org",197],["empflix.com",198],["xmovies8.*",199],["masteranime.tv",199],["0123movies.*",199],["gostream.*",199],["gomovies.*",199],["transparentcalifornia.com",200],["deepbrid.com",201],["webnovel.com",202],["streamwish.*",[203,204]],["oneupload.to",204],["wishfast.top",204],["rubystm.com",204],["rubyvid.com",204],["rubyvidhub.com",204],["stmruby.com",204],["streamruby.com",204],["schwaebische.de",205],["8tracks.com",206],["3movs.com",207],["bravoerotica.net",[207,254]],["youx.xxx",207],["camclips.tv",[207,320]],["xtits.*",[207,254]],["camflow.tv",[207,254,255,293,392]],["camhoes.tv",[207,252,254,255,293,392]],["xmegadrive.com",207],["xxxymovies.com",207],["xxxshake.com",207],["gayck.com",207],["xhand.com",[207,254]],["analdin.com",[207,254]],["revealname.com",208],["golfchannel.com",209],["stream.nbcsports.com",209],["mathdf.com",209],["gamcore.com",210],["porcore.com",210],["porngames.tv",210],["69games.xxx",210],["javmix.app",210],["haaretz.co.il",211],["haaretz.com",211],["hungama.com",211],["a-o.ninja",211],["anime-odcinki.pl",211],["shortgoo.blogspot.com",211],["tonanmedia.my.id",[211,573]],["yurasu.xyz",211],["isekaipalace.com",211],["plyjam.*",[212,213]],["ennovelas.com",[213,217]],["foxsports.com.au",214],["canberratimes.com.au",214],["thesimsresource.com",215],["fxporn69.*",216],["vipbox.*",217],["viprow.*",217],["ctrl.blog",218],["sportlife.es",219],["finofilipino.org",220],["desbloqueador.*",221],["xberuang.*",222],["teknorizen.*",222],["mysflink.blogspot.com",222],["ashemaletube.*",223],["paktech2.com",223],["assia.tv",224],["assia4.com",224],["cwtvembeds.com",[226,253]],["camlovers.tv",226],["porntn.com",226],["pornissimo.org",226],["sexcams-24.com",[226,255]],["watchporn.to",[226,255]],["camwhorez.video",226],["footstockings.com",[226,227,255]],["xmateur.com",[226,227,255]],["multi.xxx",227],["weatherx.co.in",[228,229]],["sunbtc.space",228],["subtorrents.*",230],["subtorrents1.*",230],["newpelis.*",230],["pelix.*",230],["allcalidad.*",230],["infomaniakos.*",230],["ojogos.com.br",231],["powforums.com",232],["supforums.com",232],["studybullet.com",232],["usgamer.net",233],["recordonline.com",233],["freebitcoin.win",234],["e-monsite.com",234],["coindice.win",234],["freiepresse.de",235],["investing.com",236],["tornadomovies.*",237],["mp3fiber.com",238],["chicoer.com",239],["dailybreeze.com",239],["dailybulletin.com",239],["dailynews.com",239],["delcotimes.com",239],["eastbaytimes.com",239],["macombdaily.com",239],["ocregister.com",239],["pasadenastarnews.com",239],["pe.com",239],["presstelegram.com",239],["redlandsdailyfacts.com",239],["reviewjournal.com",239],["santacruzsentinel.com",239],["saratogian.com",239],["sentinelandenterprise.com",239],["sgvtribune.com",239],["tampabay.com",239],["times-standard.com",239],["theoaklandpress.com",239],["trentonian.com",239],["twincities.com",239],["whittierdailynews.com",239],["bostonherald.com",239],["dailycamera.com",239],["sbsun.com",239],["dailydemocrat.com",239],["montereyherald.com",239],["orovillemr.com",239],["record-bee.com",239],["redbluffdailynews.com",239],["reporterherald.com",239],["thereporter.com",239],["timescall.com",239],["timesheraldonline.com",239],["ukiahdailyjournal.com",239],["dailylocal.com",239],["mercurynews.com",239],["suedkurier.de",240],["anysex.com",242],["icdrama.*",243],["mangasail.*",243],["pornve.com",244],["file4go.*",245],["coolrom.com.au",245],["marie-claire.es",246],["gamezhero.com",246],["flashgirlgames.com",246],["onlinesudoku.games",246],["mpg.football",246],["sssam.com",246],["globalnews.ca",247],["drinksmixer.com",248],["leitesculinaria.com",248],["fupa.net",249],["browardpalmbeach.com",250],["dallasobserver.com",250],["houstonpress.com",250],["miaminewtimes.com",250],["phoenixnewtimes.com",250],["westword.com",250],["nowtv.com.tr",251],["caminspector.net",252],["camwhoreshd.com",252],["camgoddess.tv",252],["gay4porn.com",254],["mypornhere.com",254],["mangovideo.*",255],["love4porn.com",255],["thotvids.com",255],["watchmdh.to",255],["celebwhore.com",255],["cluset.com",255],["sexlist.tv",255],["4kporn.xxx",255],["xhomealone.com",255],["lusttaboo.com",[255,517]],["hentai-moon.com",255],["camhub.cc",[255,678]],["mediapason.it",258],["linkspaid.com",258],["tuotromedico.com",258],["neoteo.com",258],["phoneswiki.com",258],["celebmix.com",258],["myneobuxportal.com",258],["oyungibi.com",258],["25yearslatersite.com",258],["jeshoots.com",259],["techhx.com",259],["karanapk.com",259],["flashplayer.fullstacks.net",261],["cloudapps.herokuapp.com",261],["youfiles.herokuapp.com",261],["texteditor.nsspot.net",261],["temp-mail.org",262],["asianclub.*",263],["javhdporn.net",263],["vidmoly.to",264],["comnuan.com",265],["veedi.com",266],["battleboats.io",266],["anitube.*",267],["fruitlab.com",267],["haddoz.net",267],["streamingcommunity.*",267],["garoetpos.com",267],["stiletv.it",268],["mixdrop.*",269],["hqtv.biz",270],["liveuamap.com",271],["audycje.tokfm.pl",272],["shush.se",273],["allkpop.com",274],["empire-anime.*",[275,568,569,570,571,572]],["empire-streaming.*",[275,568,569,570]],["empire-anime.com",[275,568,569,570]],["empire-streamz.fr",[275,568,569,570]],["empire-stream.*",[275,568,569,570]],["pickcrackpasswords.blogspot.com",276],["kfrfansub.com",277],["thuglink.com",277],["voipreview.org",277],["illicoporno.com",278],["lavoixdux.com",278],["tonpornodujour.com",278],["jacquieetmichel.net",278],["swame.com",278],["vosfemmes.com",278],["voyeurfrance.net",278],["jacquieetmicheltv.net",[278,626,627]],["pogo.com",279],["cloudvideo.tv",280],["legionjuegos.org",281],["legionpeliculas.org",281],["legionprogramas.org",281],["16honeys.com",282],["elespanol.com",283],["remodelista.com",284],["audiofanzine.com",288],["uploadev.*",289],["developerinsider.co",290],["thehindu.com",291],["cambro.tv",[292,293]],["boobsradar.com",[293,392,695]],["nibelungen-kurier.de",294],["adfoc.us",295],["adrino1.bonloan.xyz",295],["vi-music.app",295],["instanders.app",295],["rokni.xyz",295],["keedabankingnews.com",295],["tea-coffee.net",295],["spatsify.com",295],["newedutopics.com",295],["getviralreach.in",295],["edukaroo.com",295],["funkeypagali.com",295],["careersides.com",295],["nayisahara.com",295],["wikifilmia.com",295],["infinityskull.com",295],["viewmyknowledge.com",295],["iisfvirtual.in",295],["starxinvestor.com",295],["jkssbalerts.com",295],["sahlmarketing.net",295],["filmypoints.in",295],["fitnessholic.net",295],["moderngyan.com",295],["sattakingcharts.in",295],["bankshiksha.in",295],["earn.mpscstudyhub.com",295],["earn.quotesopia.com",295],["money.quotesopia.com",295],["best-mobilegames.com",295],["learn.moderngyan.com",295],["bharatsarkarijobalert.com",295],["quotesopia.com",295],["creditsgoal.com",295],["bgmi32bitapk.in",295],["techacode.com",295],["trickms.com",295],["ielts-isa.edu.vn",295],["winezones.in",[295,386]],["loan.punjabworks.com",295],["sptfy.be",295],["mcafee-com.com",[295,372]],["pianetamountainbike.it",296],["barchart.com",297],["modelisme.com",298],["parasportontario.ca",298],["prescottenews.com",298],["nrj-play.fr",299],["hackingwithreact.com",300],["gutekueche.at",301],["peekvids.com",302],["playvids.com",302],["pornflip.com",302],["redensarten-index.de",303],["vw-page.com",304],["viz.com",[305,306]],["0rechner.de",307],["configspc.com",308],["xopenload.me",308],["uptobox.com",308],["uptostream.com",308],["japgay.com",309],["mega-debrid.eu",310],["dreamdth.com",311],["diaridegirona.cat",313],["diariodeibiza.es",313],["diariodemallorca.es",313],["diarioinformacion.com",313],["eldia.es",313],["emporda.info",313],["farodevigo.es",313],["laopinioncoruna.es",313],["laopiniondemalaga.es",313],["laopiniondemurcia.es",313],["laopiniondezamora.es",313],["laprovincia.es",313],["levante-emv.com",313],["mallorcazeitung.es",313],["regio7.cat",313],["superdeporte.es",313],["playpaste.com",314],["cnbc.com",315],["primevideo.com",316],["read.amazon.*",[316,708]],["firefaucet.win",317],["74k.io",[318,319]],["cloudwish.xyz",319],["gradehgplus.com",319],["javindo.site",319],["javindosub.site",319],["kamehaus.net",319],["movearnpre.com",319],["arabshentai.com>>",319],["javdo.cc>>",319],["javenglish.cc>>",319],["javhd.*>>",319],["javhdz.*>>",319],["roshy.tv>>",319],["sextb.*>>",319],["fullhdxxx.com",321],["pornclassic.tube",322],["tubepornclassic.com",322],["etonline.com",323],["creatur.io",323],["lookcam.*",323],["drphil.com",323],["urbanmilwaukee.com",323],["ontiva.com",323],["hideandseek.world",323],["myabandonware.com",323],["kendam.com",323],["wttw.com",323],["synonyms.com",323],["definitions.net",323],["hostmath.com",323],["camvideoshub.com",323],["minhaconexao.com.br",323],["home-made-videos.com",325],["amateur-couples.com",325],["slutdump.com",325],["artificialnudes.com",325],["bdsmkingdom.xyz",325],["cosplaynsfw.xyz",325],["crazytoys.xyz",325],["hardcorelesbian.xyz",325],["pornfeet.xyz",325],["pornahegao.xyz",325],["sexontheboat.xyz",325],["dpstream.*",326],["produsat.com",327],["bluemediafiles.*",328],["12thman.com",329],["acusports.com",329],["atlantic10.com",329],["auburntigers.com",329],["baylorbears.com",329],["bceagles.com",329],["bgsufalcons.com",329],["big12sports.com",329],["bigten.org",329],["bradleybraves.com",329],["butlersports.com",329],["cmumavericks.com",329],["conferenceusa.com",329],["cyclones.com",329],["dartmouthsports.com",329],["daytonflyers.com",329],["dbupatriots.com",329],["dbusports.com",329],["denverpioneers.com",329],["fduknights.com",329],["fgcuathletics.com",329],["fightinghawks.com",329],["fightingillini.com",329],["floridagators.com",329],["friars.com",329],["friscofighters.com",329],["gamecocksonline.com",329],["goarmywestpoint.com",329],["gobison.com",329],["goblueraiders.com",329],["gobobcats.com",329],["gocards.com",329],["gocreighton.com",329],["godeacs.com",329],["goexplorers.com",329],["goetbutigers.com",329],["gofrogs.com",329],["gogriffs.com",329],["gogriz.com",329],["golobos.com",329],["gomarquette.com",329],["gopack.com",329],["gophersports.com",329],["goprincetontigers.com",329],["gopsusports.com",329],["goracers.com",329],["goshockers.com",329],["goterriers.com",329],["gotigersgo.com",329],["gousfbulls.com",329],["govandals.com",329],["gowyo.com",329],["goxavier.com",329],["gozags.com",329],["gozips.com",329],["griffinathletics.com",329],["guhoyas.com",329],["gwusports.com",329],["hailstate.com",329],["hamptonpirates.com",329],["hawaiiathletics.com",329],["hokiesports.com",329],["huskers.com",329],["icgaels.com",329],["iuhoosiers.com",329],["jsugamecocksports.com",329],["longbeachstate.com",329],["loyolaramblers.com",329],["lrtrojans.com",329],["lsusports.net",329],["morrisvillemustangs.com",329],["msuspartans.com",329],["muleriderathletics.com",329],["mutigers.com",329],["navysports.com",329],["nevadawolfpack.com",329],["niuhuskies.com",329],["nkunorse.com",329],["nuhuskies.com",329],["nusports.com",329],["okstate.com",329],["olemisssports.com",329],["omavs.com",329],["ovcsports.com",329],["owlsports.com",329],["purduesports.com",329],["redstormsports.com",329],["richmondspiders.com",329],["sfajacks.com",329],["shupirates.com",329],["siusalukis.com",329],["smcgaels.com",329],["smumustangs.com",329],["soconsports.com",329],["soonersports.com",329],["themw.com",329],["tulsahurricane.com",329],["txst.com",329],["txstatebobcats.com",329],["ubbulls.com",329],["ucfknights.com",329],["ucirvinesports.com",329],["uconnhuskies.com",329],["uhcougars.com",329],["uicflames.com",329],["umterps.com",329],["uncwsports.com",329],["unipanthers.com",329],["unlvrebels.com",329],["uoflsports.com",329],["usdtoreros.com",329],["utahstateaggies.com",329],["utepathletics.com",329],["utrockets.com",329],["uvmathletics.com",329],["uwbadgers.com",329],["villanova.com",329],["wkusports.com",329],["wmubroncos.com",329],["woffordterriers.com",329],["1pack1goal.com",329],["bcuathletics.com",329],["bubraves.com",329],["goblackbears.com",329],["golightsgo.com",329],["gomcpanthers.com",329],["goutsa.com",329],["mercerbears.com",329],["pirateblue.com",329],["pirateblue.net",329],["pirateblue.org",329],["quinnipiacbobcats.com",329],["towsontigers.com",329],["tribeathletics.com",329],["tribeclub.com",329],["utepminermaniacs.com",329],["utepminers.com",329],["wkutickets.com",329],["aopathletics.org",329],["atlantichockeyonline.com",329],["bigsouthnetwork.com",329],["bigsouthsports.com",329],["chawomenshockey.com",329],["dbupatriots.org",329],["drakerelays.org",329],["ecac.org",329],["ecacsports.com",329],["emueagles.com",329],["emugameday.com",329],["gculopes.com",329],["godrakebulldog.com",329],["godrakebulldogs.com",329],["godrakebulldogs.net",329],["goeags.com",329],["goislander.com",329],["goislanders.com",329],["gojacks.com",329],["gomacsports.com",329],["gseagles.com",329],["hubison.com",329],["iowaconference.com",329],["ksuowls.com",329],["lonestarconference.org",329],["mascac.org",329],["midwestconference.org",329],["mountaineast.org",329],["niu-pack.com",329],["nulakers.ca",329],["oswegolakers.com",329],["ovcdigitalnetwork.com",329],["pacersports.com",329],["rmacsports.org",329],["rollrivers.com",329],["samfordsports.com",329],["uncpbraves.com",329],["usfdons.com",329],["wiacsports.com",329],["alaskananooks.com",329],["broncathleticfund.com",329],["cameronaggies.com",329],["columbiacougars.com",329],["etownbluejays.com",329],["gobadgers.ca",329],["golancers.ca",329],["gometrostate.com",329],["gothunderbirds.ca",329],["kentstatesports.com",329],["lehighsports.com",329],["lopers.com",329],["lycoathletics.com",329],["lycomingathletics.com",329],["maraudersports.com",329],["mauiinvitational.com",329],["msumavericks.com",329],["nauathletics.com",329],["nueagles.com",329],["nwusports.com",329],["oceanbreezenyc.org",329],["patriotathleticfund.com",329],["pittband.com",329],["principiaathletics.com",329],["roadrunnersathletics.com",329],["sidearmsocial.com",329],["snhupenmen.com",329],["stablerarena.com",329],["stoutbluedevils.com",329],["uwlathletics.com",329],["yumacs.com",329],["collegefootballplayoff.com",329],["csurams.com",329],["cubuffs.com",329],["gobearcats.com",329],["gohuskies.com",329],["mgoblue.com",329],["osubeavers.com",329],["pittsburghpanthers.com",329],["rolltide.com",329],["texassports.com",329],["thesundevils.com",329],["uclabruins.com",329],["wvuathletics.com",329],["wvusports.com",329],["arizonawildcats.com",329],["calbears.com",329],["cuse.com",329],["georgiadogs.com",329],["goducks.com",329],["goheels.com",329],["gostanford.com",329],["insidekstatesports.com",329],["insidekstatesports.info",329],["insidekstatesports.net",329],["insidekstatesports.org",329],["k-stateathletics.com",329],["k-statefootball.net",329],["k-statefootball.org",329],["k-statesports.com",329],["k-statesports.net",329],["k-statesports.org",329],["k-statewomenshoops.com",329],["k-statewomenshoops.net",329],["k-statewomenshoops.org",329],["kstateathletics.com",329],["kstatefootball.net",329],["kstatefootball.org",329],["kstatesports.com",329],["kstatewomenshoops.com",329],["kstatewomenshoops.net",329],["kstatewomenshoops.org",329],["ksuathletics.com",329],["ksusports.com",329],["scarletknights.com",329],["showdownforrelief.com",329],["syracusecrunch.com",329],["texastech.com",329],["theacc.com",329],["ukathletics.com",329],["usctrojans.com",329],["utahutes.com",329],["utsports.com",329],["wsucougars.com",329],["vidlii.com",[329,355]],["tricksplit.io",329],["fangraphs.com",330],["stern.de",331],["geo.de",331],["brigitte.de",331],["welt.de",332],["tvspielfilm.de",[333,334,335,336]],["tvtoday.de",[333,334,335,336]],["chip.de",[333,334,335,336]],["focus.de",[333,334,335,336]],["fitforfun.de",[333,334,335,336]],["n-tv.de",337],["player.rtl2.de",338],["planetaminecraft.com",339],["cravesandflames.com",340],["codesnse.com",340],["flyad.vip",340],["lapresse.ca",341],["kolyoom.com",342],["ilovephd.com",342],["negumo.com",343],["games.wkb.jp",[344,345]],["kenshi.fandom.com",347],["hausbau-forum.de",348],["homeairquality.org",348],["faucettronn.click",348],["fake-it.ws",349],["laksa19.github.io",350],["1shortlink.com",351],["u-s-news.com",352],["luscious.net",353],["makemoneywithurl.com",354],["junkyponk.com",354],["healthfirstweb.com",354],["vocalley.com",354],["yogablogfit.com",354],["howifx.com",[354,538]],["en.financerites.com",354],["mythvista.com",354],["livenewsflix.com",354],["cureclues.com",354],["apekite.com",354],["enit.in",354],["iammagnus.com",355],["dailyvideoreports.net",355],["unityassets4free.com",355],["docer.*",356],["resetoff.pl",356],["sexodi.com",356],["cdn77.org",357],["momxxxsex.com",358],["penisbuyutucum.net",358],["ujszo.com",359],["newsmax.com",360],["nadidetarifler.com",361],["siz.tv",361],["suzylu.co.uk",[362,363]],["onworks.net",364],["yabiladi.com",364],["downloadsoft.net",365],["newsobserver.com",366],["arkadiumhosted.com",366],["testlanguages.com",367],["newsinlevels.com",367],["videosinlevels.com",367],["catcare.store",368],["imagereviser.com",369],["blog.potterworld.co",370],["hipsonyc.com",370],["tech.pubghighdamage.com",370],["blog.itijobalert.in",370],["techkhulasha.com",370],["jiocinema.com",370],["rapid-cloud.co",370],["uploadmall.com",370],["4funbox.com",371],["nephobox.com",371],["1024tera.com",371],["terabox.*",371],["starkroboticsfrc.com",372],["sinonimos.de",372],["antonimos.de",372],["quesignifi.ca",372],["tiktokrealtime.com",372],["tiktokcounter.net",372],["tpayr.xyz",372],["poqzn.xyz",372],["ashrfd.xyz",372],["rezsx.xyz",372],["tryzt.xyz",372],["ashrff.xyz",372],["rezst.xyz",372],["dawenet.com",372],["erzar.xyz",372],["waezm.xyz",372],["waezg.xyz",372],["blackwoodacademy.org",372],["cryptednews.space",372],["vivuq.com",372],["swgop.com",372],["vbnmll.com",372],["telcoinfo.online",372],["dshytb.com",372],["btcbitco.in",[372,373]],["btcsatoshi.net",372],["cempakajaya.com",372],["crypto4yu.com",372],["readbitcoin.org",372],["wiour.com",372],["finish.addurl.biz",372],["aiimgvlog.fun",[372,376]],["laweducationinfo.com",372],["savemoneyinfo.com",372],["worldaffairinfo.com",372],["godstoryinfo.com",372],["successstoryinfo.com",372],["cxissuegk.com",372],["learnmarketinfo.com",372],["bhugolinfo.com",372],["armypowerinfo.com",372],["rsgamer.app",372],["phonereviewinfo.com",372],["makeincomeinfo.com",372],["gknutshell.com",372],["vichitrainfo.com",372],["workproductivityinfo.com",372],["dopomininfo.com",372],["hostingdetailer.com",372],["fitnesssguide.com",372],["tradingfact4u.com",372],["cryptofactss.com",372],["softwaredetail.com",372],["artoffocas.com",372],["insurancesfact.com",372],["travellingdetail.com",372],["advertisingexcel.com",372],["allcryptoz.net",372],["batmanfactor.com",372],["beautifulfashionnailart.com",372],["crewbase.net",372],["documentaryplanet.xyz",372],["crewus.net",372],["gametechreviewer.com",372],["midebalonu.net",372],["misterio.ro",372],["phineypet.com",372],["seory.xyz",372],["shinbhu.net",372],["shinchu.net",372],["substitutefor.com",372],["talkforfitness.com",372],["thefitbrit.co.uk",372],["thumb8.net",372],["thumb9.net",372],["topcryptoz.net",372],["uniqueten.net",372],["ultraten.net",372],["exactpay.online",372],["quins.us",372],["kiddyearner.com",372],["blog24.me",373],["bildirim.*",375],["arahdrive.com",376],["appsbull.com",377],["diudemy.com",377],["maqal360.com",[377,378,379]],["lifesurance.info",380],["akcartoons.in",381],["cybercityhelp.in",381],["dl.apkmoddone.com",382],["phongroblox.com",382],["fuckingfast.net",383],["buzzheavier.com",383],["tickhosting.com",384],["in91vip.win",385],["marketrook.com",386],["datavaults.co",387],["t-online.de",389],["upornia.*",[390,391]],["bobs-tube.com",392],["pornohirsch.net",393],["bembed.net",394],["embedv.net",394],["javguard.club",394],["listeamed.net",394],["v6embed.xyz",394],["vembed.*",394],["vid-guard.com",394],["vinomo.xyz",394],["nekolink.site",[395,396]],["aagmaal.com",397],["camcam.cc",397],["netfapx.com",397],["javdragon.org",397],["javneon.tv",397],["javsaga.ninja",397],["pixsera.net",398],["jnews5.com",399],["pc-builds.com",400],["reuters.com",400],["today.com",400],["videogamer.com",400],["wrestlinginc.com",400],["usatoday.com",[401,402]],["ydr.com",[401,402]],["247sports.com",403],["indiatimes.com",404],["netzwelt.de",405],["filmibeat.com",406],["goodreturns.in",406],["mykhel.com",406],["daemon-hentai.com",406],["luckydice.net",406],["adarima.org",406],["weatherwx.com",406],["sattaguess.com",406],["winshell.de",406],["rosasidan.ws",406],["upiapi.in",406],["daemonanime.net",406],["networkhint.com",406],["thichcode.net",406],["texturecan.com",406],["tikmate.app",[406,609]],["arcaxbydz.id",406],["quotesshine.com",406],["arcade.buzzrtv.com",407],["arcade.dailygazette.com",407],["arcade.lemonde.fr",407],["arena.gamesforthebrain.com",407],["bestpuzzlesandgames.com",407],["cointiply.arkadiumarena.com",407],["gamelab.com",407],["games.abqjournal.com",407],["games.amny.com",407],["games.bellinghamherald.com",407],["games.besthealthmag.ca",407],["games.bnd.com",407],["games.boston.com",407],["games.bostonglobe.com",407],["games.bradenton.com",407],["games.centredaily.com",407],["games.charlottegames.cnhinews.com",407],["games.crosswordgiant.com",407],["games.dailymail.co.uk",407],["games.dallasnews.com",407],["games.daytondailynews.com",407],["games.denverpost.com",407],["games.everythingzoomer.com",407],["games.fresnobee.com",407],["games.gameshownetwork.com",407],["games.get.tv",407],["games.greatergood.com",407],["games.heraldonline.com",407],["games.heraldsun.com",407],["games.idahostatesman.com",407],["games.insp.com",407],["games.islandpacket.com",407],["games.journal-news.com",407],["games.kansas.com",407],["games.kansascity.com",407],["games.kentucky.com",407],["games.lancasteronline.com",407],["games.ledger-enquirer.com",407],["games.macon.com",407],["games.mashable.com",407],["games.mercedsunstar.com",407],["games.metro.us",407],["games.metv.com",407],["games.miamiherald.com",407],["games.modbee.com",407],["games.moviestvnetwork.com",407],["games.myrtlebeachonline.com",407],["games.games.newsgames.parade.com",407],["games.pressdemocrat.com",407],["games.puzzlebaron.com",407],["games.puzzler.com",407],["games.puzzles.ca",407],["games.qns.com",407],["games.readersdigest.ca",407],["games.sacbee.com",407],["games.sanluisobispo.com",407],["games.sixtyandme.com",407],["games.sltrib.com",407],["games.springfieldnewssun.com",407],["games.star-telegram.com",407],["games.startribune.com",407],["games.sunherald.com",407],["games.theadvocate.com",407],["games.thenewstribune.com",407],["games.theolympian.com",407],["games.theportugalnews.com",407],["games.thestar.com",407],["games.thestate.com",407],["games.tri-cityherald.com",407],["games.triviatoday.com",407],["games.usnews.com",407],["games.word.tips",407],["games.wordgenius.com",407],["games.wtop.com",407],["jeux.meteocity.com",407],["juegos.as.com",407],["juegos.elnuevoherald.com",407],["juegos.elpais.com",407],["philly.arkadiumarena.com",407],["play.dictionary.com",407],["puzzles.bestforpuzzles.com",407],["puzzles.centralmaine.com",407],["puzzles.crosswordsolver.org",407],["puzzles.independent.co.uk",407],["puzzles.nola.com",407],["puzzles.pressherald.com",407],["puzzles.standard.co.uk",407],["puzzles.sunjournal.com",407],["arkadium.com",408],["abysscdn.com",[409,410]],["turtleviplay.xyz",411],["arcai.com",412],["my-code4you.blogspot.com",413],["flickr.com",414],["firefile.cc",415],["pestleanalysis.com",415],["kochamjp.pl",415],["tutorialforlinux.com",415],["whatsaero.com",415],["animeblkom.net",[415,429]],["blkom.com",415],["globes.co.il",[416,417]],["jardiner-malin.fr",418],["tw-calc.net",419],["ohmybrush.com",420],["talkceltic.net",421],["mentalfloss.com",422],["uprafa.com",423],["cube365.net",424],["wwwfotografgotlin.blogspot.com",425],["freelistenonline.com",425],["badassdownloader.com",426],["quickporn.net",427],["yellowbridge.com",428],["aosmark.com",430],["ctrlv.*",431],["atozmath.com",[432,433,434,435,436,437,438]],["newyorker.com",439],["brighteon.com",440],["more.tv",441],["video1tube.com",442],["alohatube.xyz",442],["4players.de",443],["onlinesoccermanager.com",443],["fshost.me",444],["link.cgtips.org",445],["hentaicloud.com",446],["paperzonevn.com",448],["9jarock.org",449],["fzmovies.info",449],["fztvseries.ng",449],["netnaijas.com",449],["hentaienglish.com",450],["hentaiporno.xxx",450],["venge.io",[451,452]],["btcbux.io",453],["its.porn",[454,455]],["atv.at",456],["2ndrun.tv",457],["rackusreads.com",457],["teachmemicro.com",457],["willcycle.com",457],["kusonime.com",[458,459]],["123movieshd.*",460],["imgur.com",[461,462,727]],["hentai-party.com",463],["hentaicomics.pro",463],["uproxy.*",464],["animesa.*",465],["subtitle.one",466],["subtitleone.cc",466],["mysexgames.com",467],["ancient-origins.*",468],["cinecalidad.*",[469,470]],["xnxx.com",471],["xvideos.*",471],["gdr-online.com",472],["mmm.dk",473],["iqiyi.com",[474,475,601]],["m.iqiyi.com",476],["nbcolympics.com",477],["apkhex.com",478],["indiansexstories2.net",479],["issstories.xyz",479],["1340kbbr.com",480],["gorgeradio.com",480],["kduk.com",480],["kedoam.com",480],["kejoam.com",480],["kelaam.com",480],["khsn1230.com",480],["kjmx.rocks",480],["kloo.com",480],["klooam.com",480],["klykradio.com",480],["kmed.com",480],["kmnt.com",480],["kool991.com",480],["kpnw.com",480],["kppk983.com",480],["krktcountry.com",480],["ktee.com",480],["kwro.com",480],["kxbxfm.com",480],["thevalley.fm",480],["quizlet.com",481],["dsocker1234.blogspot.com",482],["schoolcheats.net",[483,484]],["mgnet.xyz",485],["designtagebuch.de",486],["pixroute.com",487],["uploady.io",488],["calculator-online.net",489],["porngames.club",490],["sexgames.xxx",490],["111.90.159.132",491],["mobile-tracker-free.com",492],["pfps.gg",493],["social-unlock.com",494],["superpsx.com",495],["ninja.io",496],["sourceforge.net",497],["samfirms.com",498],["rapelust.com",499],["vtube.to",499],["desitelugusex.com",499],["dvdplay.*",499],["xvideos-downloader.net",499],["xxxvideotube.net",499],["sdefx.cloud",499],["nozomi.la",499],["banned.video",500],["madmaxworld.tv",500],["androidpolice.com",500],["babygaga.com",500],["backyardboss.net",500],["carbuzz.com",500],["cbr.com",500],["collider.com",500],["dualshockers.com",500],["footballfancast.com",500],["footballleagueworld.co.uk",500],["gamerant.com",500],["givemesport.com",500],["hardcoregamer.com",500],["hotcars.com",500],["howtogeek.com",500],["makeuseof.com",500],["moms.com",500],["movieweb.com",500],["pocket-lint.com",500],["pocketnow.com",500],["screenrant.com",500],["simpleflying.com",500],["thegamer.com",500],["therichest.com",500],["thesportster.com",500],["thethings.com",500],["thetravel.com",500],["topspeed.com",500],["xda-developers.com",500],["huffpost.com",501],["ingles.com",502],["spanishdict.com",502],["surfline.com",[503,504]],["play.tv3.ee",505],["play.tv3.lt",505],["play.tv3.lv",[505,506]],["tv3play.skaties.lv",505],["bulbagarden.net",507],["hollywoodlife.com",508],["mat6tube.com",509],["hotabis.com",510],["root-nation.com",510],["italpress.com",510],["airsoftmilsimnews.com",510],["artribune.com",510],["newtumbl.com",511],["apkmaven.*",512],["aruble.net",513],["nevcoins.club",514],["mail.com",515],["gmx.*",516],["mangakita.id",518],["avpgalaxy.net",519],["panda-novel.com",520],["lightsnovel.com",520],["eaglesnovel.com",520],["pandasnovel.com",520],["ewrc-results.com",521],["kizi.com",522],["cyberscoop.com",523],["fedscoop.com",523],["canale.live",524],["jeep-cj.com",525],["sponsorhunter.com",526],["cloudcomputingtopics.net",527],["likecs.com",528],["tiscali.it",529],["linkspy.cc",530],["adshnk.com",531],["chattanoogan.com",532],["adsy.pw",533],["playstore.pw",533],["windowspro.de",534],["tvtv.ca",535],["tvtv.us",535],["mydaddy.cc",536],["roadtrippin.fr",537],["vavada5com.com",538],["anyporn.com",[539,556]],["bravoporn.com",539],["bravoteens.com",539],["crocotube.com",539],["hellmoms.com",539],["hellporno.com",539],["sex3.com",539],["tubewolf.com",539],["xbabe.com",539],["xcum.com",539],["zedporn.com",539],["imagetotext.info",540],["infokik.com",541],["freepik.com",542],["ddwloclawek.pl",[543,544]],["www.seznam.cz",545],["deezer.com",546],["my-subs.co",547],["plaion.com",548],["slideshare.net",[549,550]],["ustreasuryyieldcurve.com",551],["businesssoftwarehere.com",552],["goo.st",552],["freevpshere.com",552],["softwaresolutionshere.com",552],["gamereactor.*",554],["madoohd.com",555],["doomovie-hd.*",555],["staige.tv",557],["androidadult.com",558],["streamvid.net",559],["watchtv24.com",560],["cellmapper.net",561],["medscape.com",562],["newscon.org",[563,564]],["wheelofgold.com",565],["drakecomic.*",565],["app.blubank.com",566],["mobileweb.bankmellat.ir",566],["chat.nrj.fr",567],["chat.tchatche.com",[567,582]],["ccthesims.com",574],["chromeready.com",574],["dtbps3games.com",574],["illustratemagazine.com",574],["uknip.co.uk",574],["vod.pl",575],["megadrive-emulator.com",576],["tvhay.*",[577,578]],["moviesapi.club",579],["bestx.stream",579],["watchx.top",579],["digimanie.cz",580],["svethardware.cz",580],["srvy.ninja",581],["cnn.com",[583,584,585]],["news.bg",586],["edmdls.com",587],["freshremix.net",587],["scenedl.org",587],["trakt.tv",588],["client.falixnodes.net",[589,590]],["shroomers.app",591],["classicalradio.com",592],["di.fm",592],["jazzradio.com",592],["radiotunes.com",592],["rockradio.com",592],["zenradio.com",592],["getthit.com",593],["techedubyte.com",594],["soccerinhd.com",594],["movie-th.tv",595],["iwanttfc.com",596],["nutraingredients-asia.com",597],["nutraingredients-latam.com",597],["nutraingredients-usa.com",597],["nutraingredients.com",597],["ozulscansen.com",598],["nexusmods.com",599],["lookmovie.*",600],["lookmovie2.to",600],["biletomat.pl",602],["hextank.io",[603,604]],["filmizlehdfilm.com",[605,606,607,608]],["filmizletv.*",[605,606,607,608]],["fullfilmizle.cc",[605,606,607,608]],["gofilmizle.net",[605,606,607,608]],["btvplus.bg",610],["sagewater.com",611],["redlion.net",611],["filmweb.pl",612],["satdl.com",613],["vidstreaming.xyz",614],["everand.com",615],["myradioonline.pl",616],["cbs.com",617],["paramountplus.com",617],["fullxh.com",618],["galleryxh.site",618],["megaxh.com",618],["movingxh.world",618],["seexh.com",618],["unlockxh4.com",618],["valuexh.life",618],["xhaccess.com",618],["xhadult2.com",618],["xhadult3.com",618],["xhadult4.com",618],["xhadult5.com",618],["xhamster.*",618],["xhamster1.*",618],["xhamster10.*",618],["xhamster11.*",618],["xhamster12.*",618],["xhamster13.*",618],["xhamster14.*",618],["xhamster15.*",618],["xhamster16.*",618],["xhamster17.*",618],["xhamster18.*",618],["xhamster19.*",618],["xhamster20.*",618],["xhamster2.*",618],["xhamster3.*",618],["xhamster4.*",618],["xhamster42.*",618],["xhamster46.com",618],["xhamster5.*",618],["xhamster7.*",618],["xhamster8.*",618],["xhamsterporno.mx",618],["xhbig.com",618],["xhbranch5.com",618],["xhchannel.com",618],["xhdate.world",618],["xhlease.world",618],["xhmoon5.com",618],["xhofficial.com",618],["xhopen.com",618],["xhplanet1.com",618],["xhplanet2.com",618],["xhreal2.com",618],["xhreal3.com",618],["xhspot.com",618],["xhtotal.com",618],["xhtree.com",618],["xhvictory.com",618],["xhwebsite.com",618],["xhwebsite2.com",618],["xhwebsite5.com",618],["xhwide1.com",618],["xhwide2.com",618],["xhwide5.com",618],["file-upload.net",620],["acortalo.*",[621,622,623,624]],["acortar.*",[621,622,623,624]],["megadescarga.net",[621,622,623,624]],["megadescargas.net",[621,622,623,624]],["hentaihaven.xxx",625],["jacquieetmicheltv2.net",627],["a2zapk.*",628],["fcportables.com",[629,630]],["emurom.net",631],["freethesaurus.com",[632,633]],["thefreedictionary.com",[632,633]],["oeffentlicher-dienst.info",634],["im9.eu",[635,636]],["dcdlplayer8a06f4.xyz",637],["ultimate-guitar.com",638],["claimbits.net",639],["sexyscope.net",640],["kickassanime.*",641],["recherche-ebook.fr",642],["virtualdinerbot.com",642],["zonebourse.com",643],["pink-sluts.net",644],["andhrafriends.com",645],["benzinpreis.de",646],["defenseone.com",647],["govexec.com",647],["nextgov.com",647],["route-fifty.com",647],["sharing.wtf",648],["wetter3.de",649],["esportivos.fun",650],["cosmonova-broadcast.tv",651],["538.nl",652],["hartvannederland.nl",652],["kijk.nl",652],["shownieuws.nl",652],["vandaaginside.nl",652],["rock.porn",[653,654]],["videzz.net",[655,656]],["ezaudiobookforsoul.com",657],["club386.com",658],["decompiler.com",[659,660]],["littlebigsnake.com",661],["easyfun.gg",662],["smailpro.com",663],["ilgazzettino.it",664],["ilmessaggero.it",664],["3bmeteo.com",[665,666]],["mconverter.eu",667],["lover937.net",668],["10gb.vn",669],["pes6.es",670],["tactics.tools",[671,672]],["boundhub.com",673],["alocdnnetu.xyz",674],["reliabletv.me",675],["jakondo.ru",676],["appnee.com",676],["trueachievements.com",676],["truesteamachievements.com",676],["truetrophies.com",676],["filecrypt.*",677],["wired.com",679],["spankbang.*",[680,681,682,729,730]],["hulu.com",[683,684,685]],["hanime.tv",686],["nhentai.net",[687,688,689]],["pouvideo.*",690],["povvideo.*",690],["povw1deo.*",690],["povwideo.*",690],["powv1deo.*",690],["powvibeo.*",690],["powvideo.*",690],["powvldeo.*",690],["anonymfile.com",691],["gofile.to",691],["dotycat.com",692],["rateyourmusic.com",693],["reporterpb.com.br",694],["blog-dnz.com",696],["18adultgames.com",697],["colnect.com",[698,699]],["adultgamesworld.com",700],["bgmiupdate.com.in",701],["servustv.com",[702,703]],["reviewdiv.com",704],["parametric-architecture.com",705],["laurelberninteriors.com",[706,732]],["voiceofdenton.com",707],["concealednation.org",707],["askattest.com",709],["opensubtitles.com",710],["savefiles.com",711],["streamup.ws",712],["goodstream.one",713],["lecrabeinfo.net",714],["cerberusapp.com",715],["smashkarts.io",716],["beamng.wesupply.cx",717],["wowtv.de",[718,719]],["jsfiddle.net",[720,721]],["www.google.*",722],["tacobell.com",723],["zefoy.com",724],["cnet.com",725],["natgeotv.com",728],["globo.com",731],["wayfair.com",733]]);
const exceptionsMap = new Map([["cloudflare.com",[0]],["pingit.com",[175]],["loan.bgmi32bitapk.in",[295]],["lookmovie.studio",[600]]]);
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
