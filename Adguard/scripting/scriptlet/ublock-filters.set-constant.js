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
const argsList = [["console.clear","undefined"],["aclib.runInPagePush","{}","as","callback"],["adBlockDetected","undefined"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["googletag.cmd","{}"],["_aps","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["google.ima.settings.setDisableFlashAds","noopFunc"],["pa.privacy","{}"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505","{}"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["Object.prototype.que","noopFunc"],["Object.prototype.que.push","noopFunc"],["ga.sendGaEvent","noopFunc"],["adobe","{}"],["MT","{}"],["MT.track","noopFunc"],["ClickOmniPartner","noopFunc"],["adex","{}"],["adex.getAdexUser","noopFunc"],["Adkit","noopFunc"],["Object.prototype.shouldExpectGoogleCMP","false"],["apntag.refresh","noopFunc"],["pa.sendEvent","noopFunc"],["Munchkin","{}"],["Munchkin.init","noopFunc"],["ttd_dom_ready","noopFunc"],["ramp","undefined"],["appInfo.snowplow.trackSelfDescribingEvent","noopFunc"],["_vwo_code.init","noopFunc"],["adobePageView","noopFunc"],["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["console.clear","noopFunc"],["console.log","noopFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["console.clear","trueFunc"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["check_adblock","true"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["openPopunder","noopFunc"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["CaptchmeState.adb","undefined"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["HTMLAnchorElement.prototype.click","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["check","true"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["runAdBlocker","false"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["cnbc.canShowAds","true"],["ue_adb_chk","1"],["firefaucet","true"],["cRAds","true"],["uas","[]"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["foundation.adPlayer.bitmovin","{}"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["Object.prototype.adReinsertion","noopFunc"],["getHomadConfig","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["ulp_noadb","true"],["Object.prototype.adblock_detected","false"],["timeSec","0"],["adsbygoogle.loaded","true"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["Adv_ab","false"],["sgpbCanRunAds","true"],["document.hidden","false"],["document.hasFocus","trueFunc"],["hasFocus","trueFunc"],["navigator.brave","undefined"],["Object.prototype.isAllAdClose","true"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["navigator.webkitTemporaryStorage.queryUsageAndQuota","noopFunc"],["document.onkeydown","noopFunc"],["showadas","true"],["alert","throwFunc"],["aSl.gcd","0"],["window.adLink","null"],["detectedAdblock","undefined"],["isTabActive","true"],["clicked","2"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["flashvars.mlogo",""],["vpPrerollVideo","undefined"],["PlayerConfig.config.CustomAdSetting","[]"],["PlayerConfig.trusted","true"],["PlayerConfig.config.AffiliateAdViewLevel","3"],["univresalP","noopFunc"],["hold_click","false"],["tie.ad_blocker_detector","false"],["admiral","noopFunc"],["gnt.u.adfree","true"],["__INITIAL_DATA__.siteData.admiralScript"],["objAd.loadAdShield","noopFunc"],["window.myAd.runAd","noopFunc"],["detectAdBlock","noopFunc"],["__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["document.ontouchend","null"],["document.onclick","null"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["xv_ad_block","0"],["openWindow","noopFunc"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["showada","true"],["showax","true"],["p18","undefined"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["Object.prototype.adblockFound","false"],["createCanvas","noopFunc"],["document.bridCanRunAds","true"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["xv.sda.pp.init","noopFunc"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["ad_link",""],["penciBlocksArray","[]"],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["D4zz","noopFunc"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["tv3Cmp.ConsentGiven","true"],["setupSkin","noopFunc"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["td_ad_background_click_link","undefined"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["puShown1","true"],["passthetest","true"],["pandaAdviewValidate","true"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["abpblocked","undefined"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["sssp","emptyObj"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["adSettings","[]"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["googletag","true"],["tOS2","150"],["checkAdBlocker","noopFunc"],["navigator.standalone","true"],["ShowAdvertising","{}"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["feedBack.showAffilaePromo","noopFunc"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["HTMLScriptElement.prototype.onerror","null"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["window.adngin","{}"],["amzn_aps_csm","{}"],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["sharedController.adblockDetector","noopFunc"],["checkAdsStatus","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["checkAdBlockeraz","noopFunc"],["blockingAds","false"],["Yii2App.playbackTimeout","0"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["powerAPITag","emptyObj"],["playerEnhancedConfig.run","throwFunc"],["aoAdBlockDetected","false"],["rodo.checkIsDidomiConsent","noopFunc"],["rodo.waitForConsent","noopPromiseResolve"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["hasAdBlocker","false"],["initials.yld-pdpopunder",""],["download_click","true"],["advertisement3","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["dvsize","52"],["majorse","true"],["completed","1"],["testerli","false"],["w87.abd","noopFunc"],["document.referrer",""],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["one_time","1"],["consentGiven","true"],["playID","1"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["malisx","true"],["alim","true"],["ADS.isBannersEnabled","false"],["EASYFUN_ADS_CAN_RUN","true"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["detectedAdblock","noopFunc"],["Object.prototype.DetectByGoogleAd","noopFunc"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["NativeAd","noopFunc"],["Blob","noopFunc"],["window.navigator.brave","undefined"],["HTMLScriptElement.prototype.onerror","undefined"],["isAdblock","false"],["openPop","noopFunc"],["cns.library","true"],["BJSShowUnder","{}"],["BJSShowUnder.bindTo","noopFunc"],["BJSShowUnder.add","noopFunc"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["ABLK","false"],["_n_app.popunder","null"],["_n_app.options.ads.show_popunders","false"],["N_BetterJsPop.object","{}"],["countDown","0"],["runCheck","noopFunc"],["adsSlotRenderEndSeen","true"],["showModal","noopFunc"],["flashvars.mlogo_link",""],["isAdBlocked","noopFunc"],["URLlist","[]"],["aaw","{}"],["aaw.processAdsOnPage","noopFunc"],["doOpen","undefined"],["HTMLImageElement.prototype.onerror","undefined"],["FOXIZ_MAIN_SCRIPT.siteAccessDetector","noopFunc"],["openAdBlockPopup","noopFunc"],["Object.prototype._adsDisabled","true"],["advanced_ads_check_adblocker","noopFunc"],["canRunAds","1"],["attestHasAdBlockerActivated","true"],["extInstalled","true"],["SaveFiles.add","noopFunc"],["detectSandbox","noopFunc"],["adbon","0"],["LCI.adBlockDetectorEnabled","false"],["stoCazzo","true"],["adblockDetected","false"],["importFAB","undefined"],["window.__CONFIGURATION__.adInsertion.enabled","false"],["window.__CONFIGURATION__.features.enableAdBlockerDetection","false"],["_carbonads","{}"],["_bsa","{}"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["Object.prototype.updateModifiedCommerceUrl","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["Visitor","{}"],["send_gravity_event","noopFunc"],["send_recommendation_event","noopFunc"],["libAnalytics.data.get","noopFunc"],["adthrive._components.start","noopFunc"],["navigator.sendBeacon","noopFunc"]];
const hostnamesMap = new Map([["jilliandescribecompany.com",0],["gogoanime.*",[0,196]],["adrianmissionminute.com",0],["alejandrocenturyoil.com",0],["alleneconomicmatter.com",0],["bethshouldercan.com",0],["bigclatterhomesguideservice.com",0],["brittneystandardwestern.com",0],["brookethoughi.com",0],["brucevotewithin.com",0],["cindyeyefinal.com",0],["denisegrowthwide.com",0],["diananatureforeign.com",0],["donaldlineelse.com",0],["edwardarriveoften.com",0],["erikcoldperson.com",0],["evelynthankregion.com",0],["graceaddresscommunity.com",0],["heatherdiscussionwhen.com",0],["heatherwholeinvolve.com",0],["housecardsummerbutton.com",0],["jamessoundcost.com",0],["jamiesamewalk.com",0],["jasminetesttry.com",0],["jasonresponsemeasure.com",0],["jayservicestuff.com",0],["jennifercertaindevelopment.com",0],["jessicaglassauthor.com",0],["johnalwayssame.com",0],["johntryopen.com",0],["jonathansociallike.com",0],["josephseveralconcern.com",0],["kellywhatcould.com",0],["kennethofficialitem.com",0],["kristiesoundsimply.com",0],["lisatrialidea.com",0],["lorimuchbenefit.com",0],["loriwithinfamily.com",0],["lukecomparetwo.com",0],["mariatheserepublican.com",0],["markstyleall.com",0],["michaelapplysome.com",0],["morganoperationface.com",0],["nathanfromsubject.com",0],["paulkitchendark.com",0],["rebeccaneverbase.com",0],["richardsignfish.com",0],["roberteachfinal.com",0],["robertordercharacter.com",0],["robertplacespace.com",0],["ryanagoinvolve.com",0],["sandratableother.com",0],["sandrataxeight.com",0],["sethniceletter.com",0],["shannonpersonalcost.com",0],["susanhavekeep.com",0],["tinycat-voe-fashion.com",0],["toddpartneranimal.com",0],["troyyourlead.com",0],["uptodatefinishconference.com",0],["uptodatefinishconferenceroom.com",0],["voe.sx",0],["maxfinishseveral.com",0],["voe.sx>>",0],["javboys.tv>>",0],["freeplayervideo.com",0],["nazarickol.com",0],["player-cdn.com",0],["playhydrax.com",[0,404,405]],["rabbitstream.net",0],["fmovies.*",0],["japscan.lol",1],["u26bekrb.fun",2],["br.de",3],["indeed.com",4],["zillow.com",[4,107]],["pasteboard.co",5],["clickhole.com",6],["deadspin.com",6],["gizmodo.com",6],["jalopnik.com",6],["jezebel.com",6],["kotaku.com",6],["lifehacker.com",6],["splinternews.com",6],["theinventory.com",6],["theonion.com",6],["theroot.com",6],["thetakeout.com",6],["pewresearch.org",6],["los40.com",[7,8]],["as.com",8],["telegraph.co.uk",[9,10]],["poweredbycovermore.com",[9,62]],["lumens.com",[9,62]],["verizon.com",11],["humanbenchmark.com",12],["politico.com",13],["officedepot.co.cr",[14,15]],["officedepot.*",[16,17]],["usnews.com",18],["coolmathgames.com",[19,283,284,285]],["video.gazzetta.it",[20,21]],["oggi.it",[20,21]],["manoramamax.com",20],["factable.com",22],["thedailybeast.com",23],["zee5.com",24],["gala.fr",25],["geo.fr",25],["voici.fr",25],["gloucestershirelive.co.uk",26],["arsiv.mackolik.com",27],["jacksonguitars.com",28],["scandichotels.com",29],["stylist.co.uk",30],["nettiauto.com",31],["thaiairways.com",[32,33]],["cerbahealthcare.it",[34,35]],["futura-sciences.com",[34,52]],["toureiffel.paris",34],["campusfrance.org",[34,146]],["tiendaenlinea.claro.com.ni",[36,37]],["tieba.baidu.com",38],["fandom.com",[39,40,343]],["grasshopper.com",[41,42]],["epson.com.cn",[43,44,45,46]],["oe24.at",[47,48]],["szbz.de",47],["platform.autods.com",[49,50]],["kcra.com",51],["wcvb.com",51],["sportdeutschland.tv",51],["citibank.com.sg",53],["uol.com.br",[54,55,56,57,58]],["gazzetta.gr",59],["digicol.dpm.org.cn",[60,61]],["virginmediatelevision.ie",63],["larazon.es",[64,65]],["waitrosecellar.com",[66,67,68]],["kicker.de",[69,384]],["sharpen-free-design-generator.netlify.app",[70,71]],["help.cashctrl.com",[72,73]],["gry-online.pl",74],["vidaextra.com",75],["commande.rhinov.pro",[76,77]],["ecom.wixapps.net",[76,77]],["tipranks.com",[78,79]],["iceland.co.uk",[80,81,82]],["socket.pearsoned.com",83],["tntdrama.com",[84,85]],["trutv.com",[84,85]],["mobile.de",[86,87]],["ioe.vn",[88,89]],["geiriadur.ac.uk",[88,92]],["welsh-dictionary.ac.uk",[88,92]],["bikeportland.org",[90,91]],["biologianet.com",[55,56,57]],["10.com.au",[93,94]],["10play.com.au",[93,94]],["sunshine-live.de",[95,96]],["whatismyip.com",[97,98]],["myfitnesspal.com",99],["netoff.co.jp",[100,101]],["bluerabbitrx.com",[100,101]],["foundit.*",[102,103]],["clickjogos.com.br",104],["bristan.com",[105,106]],["share.hntv.tv",[108,109,110,111]],["forum.dji.com",[108,111]],["unionpayintl.com",[108,110]],["streamelements.com",108],["optimum.net",[112,113]],["hdfcfund.com",114],["user.guancha.cn",[115,116]],["sosovalue.com",117],["bandyforbundet.no",[118,119]],["tatacommunications.com",120],["kb.arlo.com",[120,152]],["suamusica.com.br",[121,122,123]],["macrotrends.net",[124,125]],["code.world",126],["smartcharts.net",126],["topgear.com",127],["eservice.directauto.com",[128,129]],["nbcsports.com",130],["standard.co.uk",131],["pruefernavi.de",[132,133]],["speedtest.net",[134,135]],["17track.net",136],["visible.com",137],["hagerty.com",[138,139]],["marketplace.nvidia.com",140],["kino.de",[141,142]],["9now.nine.com.au",143],["worldstar.com",144],["prisjakt.no",145],["developer.arm.com",[147,148]],["sterkinekor.com",149],["iogames.space",150],["id.condenast.com",151],["tires.costco.com",153],["m.youtube.com",[154,155,156,157]],["music.youtube.com",[154,155,156,157]],["tv.youtube.com",[154,155,156,157]],["www.youtube.com",[154,155,156,157]],["youtubekids.com",[154,155,156,157]],["youtube-nocookie.com",[154,155,156,157]],["eu-proxy.startpage.com",[154,155,157]],["timesofindia.indiatimes.com",158],["economictimes.indiatimes.com",159],["motherless.com",160],["sueddeutsche.de",161],["watchanimesub.net",162],["wcoanimesub.tv",162],["wcoforever.net",162],["freeviewmovies.com",162],["filehorse.com",162],["guidetnt.com",162],["starmusiq.*",162],["sp-today.com",162],["linkvertise.com",162],["eropaste.net",162],["getpaste.link",162],["sharetext.me",162],["wcofun.*",162],["note.sieuthuthuat.com",162],["gadgets.es",[162,451]],["amateurporn.co",[162,253]],["wiwo.de",163],["primewire.*",164],["streanplay.*",[164,165]],["alphaporno.com",[164,533]],["porngem.com",164],["shortit.pw",[164,239]],["familyporn.tv",164],["sbplay.*",164],["id45.cyou",164],["85tube.com",[164,224]],["milfnut.*",164],["k1nk.co",164],["watchasians.cc",164],["sankakucomplex.com",166],["player.glomex.com",167],["merkur.de",167],["tz.de",167],["sxyprn.*",168],["hqq.*",[169,170]],["waaw.*",[170,171]],["hotpornfile.org",170],["x69.ovh",170],["younetu.*",170],["multiup.us",170],["peliculas8k.com",[170,171]],["czxxx.org",170],["vtplayer.online",170],["vvtplayer.*",170],["netu.ac",170],["netu.frembed.lol",170],["123link.*",172],["adshort.*",172],["mitly.us",172],["linkrex.net",172],["linx.cc",172],["oke.io",172],["linkshorts.*",172],["dz4link.com",172],["adsrt.*",172],["linclik.com",172],["shrt10.com",172],["vinaurl.*",172],["loptelink.com",172],["adfloz.*",172],["cut-fly.com",172],["linkfinal.com",172],["payskip.org",172],["cutpaid.com",172],["linkjust.com",172],["leechpremium.link",172],["icutlink.com",[172,258]],["oncehelp.com",172],["rgl.vn",172],["reqlinks.net",172],["bitlk.com",172],["qlinks.eu",172],["link.3dmili.com",172],["short-fly.com",172],["foxseotools.com",172],["dutchycorp.*",172],["shortearn.*",172],["pingit.*",172],["link.turkdown.com",172],["7r6.com",172],["oko.sh",172],["ckk.ai",172],["fc.lc",172],["fstore.biz",172],["shrink.*",172],["cuts-url.com",172],["eio.io",172],["exe.app",172],["exee.io",172],["exey.io",172],["skincarie.com",172],["exeo.app",172],["tmearn.*",172],["coinlyhub.com",[172,322]],["adsafelink.com",172],["aii.sh",172],["megalink.*",172],["cybertechng.com",[172,337]],["cutdl.xyz",172],["iir.ai",172],["shorteet.com",[172,355]],["miniurl.*",172],["smoner.com",172],["gplinks.*",172],["odisha-remix.com",[172,337]],["xpshort.com",[172,337]],["upshrink.com",172],["clk.*",172],["easysky.in",172],["veganab.co",172],["golink.bloggerishyt.in",172],["birdurls.com",172],["vipurl.in",172],["jameeltips.us",172],["promo-visits.site",172],["satoshi-win.xyz",[172,371]],["shorterall.com",172],["encurtandourl.com",172],["forextrader.site",172],["postazap.com",172],["cety.app",172],["exego.app",[172,366]],["cutlink.net",172],["cutyurls.com",172],["cutty.app",172],["cutnet.net",172],["jixo.online",172],["tinys.click",[172,337]],["cpm.icu",172],["panyshort.link",172],["enagato.com",172],["pandaznetwork.com",172],["tpi.li",172],["oii.la",172],["recipestutorials.com",172],["shrinke.*",172],["shrinkme.*",172],["shrinkforearn.in",172],["oii.io",172],["du-link.in",172],["atglinks.com",172],["thotpacks.xyz",172],["megaurl.in",172],["megafly.in",172],["simana.online",172],["fooak.com",172],["joktop.com",172],["evernia.site",172],["falpus.com",172],["link.paid4link.com",172],["exalink.fun",172],["shortxlinks.com",172],["upfion.com",172],["upfiles.app",172],["upfiles-urls.com",172],["flycutlink.com",[172,337]],["linksly.co",172],["link1s.*",172],["pkr.pw",172],["imagenesderopaparaperros.com",172],["shortenbuddy.com",172],["apksvip.com",172],["4cash.me",172],["namaidani.com",172],["shortzzy.*",172],["teknomuda.com",172],["shorttey.*",[172,321]],["miuiku.com",172],["savelink.site",172],["lite-link.*",172],["adcorto.*",172],["samaa-pro.com",172],["miklpro.com",172],["modapk.link",172],["ccurl.net",172],["linkpoi.me",172],["pewgame.com",172],["haonguyen.top",172],["zshort.*",172],["crazyblog.in",172],["cutearn.net",172],["rshrt.com",172],["filezipa.com",172],["dz-linkk.com",172],["upfiles.*",172],["theblissempire.com",172],["finanzas-vida.com",172],["adurly.cc",172],["paid4.link",172],["link.asiaon.top",172],["go.gets4link.com",172],["linkfly.*",172],["beingtek.com",172],["shorturl.unityassets4free.com",172],["disheye.com",172],["techymedies.com",172],["techysuccess.com",172],["za.gl",[172,273]],["bblink.com",172],["myad.biz",172],["swzz.xyz",172],["vevioz.com",172],["charexempire.com",172],["clk.asia",172],["sturls.com",172],["myshrinker.com",172],["snowurl.com",[172,337]],["wplink.*",172],["rocklink.in",172],["techgeek.digital",172],["download3s.net",172],["shortx.net",172],["tlin.me",172],["bestcash2020.com",172],["adslink.pw",172],["novelssites.com",172],["faucetcrypto.net",172],["trxking.xyz",172],["weadown.com",172],["m.bloggingguidance.com",172],["link.codevn.net",172],["link4rev.site",172],["c2g.at",172],["bitcosite.com",[172,547]],["cryptosh.pro",172],["windowslite.net",[172,337]],["viewfr.com",172],["cl1ca.com",172],["4br.me",172],["fir3.net",172],["seulink.*",172],["encurtalink.*",172],["kiddyshort.com",172],["watchmygf.me",[173,197]],["camwhores.*",[173,183,223,224,225]],["camwhorez.tv",[173,183,223,224]],["cambay.tv",[173,204,223,250,252,253,254,255]],["fpo.xxx",[173,204]],["sexemix.com",173],["heavyfetish.com",[173,718]],["thotcity.su",173],["viralxxxporn.com",[173,388]],["tube8.*",[174,175]],["you-porn.com",175],["youporn.*",175],["youporngay.com",175],["youpornru.com",175],["redtube.*",175],["9908ww.com",175],["adelaidepawnbroker.com",175],["bztube.com",175],["hotovs.com",175],["insuredhome.org",175],["nudegista.com",175],["pornluck.com",175],["vidd.se",175],["pornhub.*",[175,310]],["pornhub.com",175],["pornerbros.com",176],["freep.com",176],["porn.com",177],["tune.pk",178],["noticias.gospelmais.com.br",179],["techperiod.com",179],["viki.com",[180,181]],["watch-series.*",182],["watchseries.*",182],["vev.*",182],["vidop.*",182],["vidup.*",182],["sleazyneasy.com",[183,184,185]],["smutr.com",[183,318]],["tktube.com",183],["yourporngod.com",[183,184]],["javbangers.com",[183,441]],["camfox.com",183],["camthots.tv",[183,250]],["shegotass.info",183],["amateur8.com",183],["bigtitslust.com",183],["ebony8.com",183],["freeporn8.com",183],["lesbian8.com",183],["maturetubehere.com",183],["sortporn.com",183],["motherporno.com",[183,184,204,252]],["theporngod.com",[183,184]],["watchdirty.to",[183,224,225,253]],["pornsocket.com",186],["luxuretv.com",187],["porndig.com",[188,189]],["webcheats.com.br",190],["ceesty.com",[191,192]],["gestyy.com",[191,192]],["corneey.com",192],["destyy.com",192],["festyy.com",192],["sh.st",192],["mitaku.net",192],["angrybirdsnest.com",193],["zrozz.com",193],["clix4btc.com",193],["4tests.com",193],["goltelevision.com",193],["news-und-nachrichten.de",193],["laradiobbs.net",193],["urlaubspartner.net",193],["produktion.de",193],["cinemaxxl.de",193],["bladesalvador.com",193],["tempr.email",193],["cshort.org",193],["friendproject.net",193],["covrhub.com",193],["katfile.com",[193,614]],["trust.zone",193],["business-standard.com",193],["planetsuzy.org",194],["empflix.com",195],["xmovies8.*",196],["masteranime.tv",196],["0123movies.*",196],["gostream.*",196],["gomovies.*",196],["transparentcalifornia.com",197],["deepbrid.com",198],["webnovel.com",199],["streamwish.*",[200,201]],["oneupload.to",201],["wishfast.top",201],["rubystm.com",201],["rubyvid.com",201],["rubyvidhub.com",201],["stmruby.com",201],["streamruby.com",201],["schwaebische.de",202],["8tracks.com",203],["3movs.com",204],["bravoerotica.net",[204,252]],["youx.xxx",204],["camclips.tv",[204,318]],["xtits.*",[204,252]],["camflow.tv",[204,252,253,291,388]],["camhoes.tv",[204,250,252,253,291,388]],["xmegadrive.com",204],["xxxymovies.com",204],["xxxshake.com",204],["gayck.com",204],["xhand.com",[204,252]],["analdin.com",[204,252]],["revealname.com",205],["pouvideo.*",206],["povvideo.*",206],["povw1deo.*",206],["povwideo.*",206],["powv1deo.*",206],["powvibeo.*",206],["powvideo.*",206],["powvldeo.*",206],["golfchannel.com",207],["stream.nbcsports.com",207],["mathdf.com",207],["gamcore.com",208],["porcore.com",208],["porngames.tv",208],["69games.xxx",208],["javmix.app",208],["haaretz.co.il",209],["haaretz.com",209],["hungama.com",209],["a-o.ninja",209],["anime-odcinki.pl",209],["shortgoo.blogspot.com",209],["tonanmedia.my.id",[209,567]],["yurasu.xyz",209],["isekaipalace.com",209],["plyjam.*",[210,211]],["ennovelas.com",[211,215]],["foxsports.com.au",212],["canberratimes.com.au",212],["thesimsresource.com",213],["fxporn69.*",214],["vipbox.*",215],["viprow.*",215],["ctrl.blog",216],["sportlife.es",217],["finofilipino.org",218],["desbloqueador.*",219],["xberuang.*",220],["teknorizen.*",220],["mysflink.blogspot.com",220],["ashemaletube.*",221],["paktech2.com",221],["assia.tv",222],["assia4.com",222],["cwtvembeds.com",[224,251]],["camlovers.tv",224],["porntn.com",224],["pornissimo.org",224],["sexcams-24.com",[224,253]],["watchporn.to",[224,253]],["camwhorez.video",224],["footstockings.com",[224,225,253]],["xmateur.com",[224,225,253]],["multi.xxx",225],["weatherx.co.in",[226,227]],["sunbtc.space",226],["subtorrents.*",228],["subtorrents1.*",228],["newpelis.*",228],["pelix.*",228],["allcalidad.*",228],["infomaniakos.*",228],["ojogos.com.br",229],["powforums.com",230],["supforums.com",230],["studybullet.com",230],["usgamer.net",231],["recordonline.com",231],["freebitcoin.win",232],["e-monsite.com",232],["coindice.win",232],["freiepresse.de",233],["investing.com",234],["tornadomovies.*",235],["mp3fiber.com",236],["chicoer.com",237],["dailybreeze.com",237],["dailybulletin.com",237],["dailynews.com",237],["delcotimes.com",237],["eastbaytimes.com",237],["macombdaily.com",237],["ocregister.com",237],["pasadenastarnews.com",237],["pe.com",237],["presstelegram.com",237],["redlandsdailyfacts.com",237],["reviewjournal.com",237],["santacruzsentinel.com",237],["saratogian.com",237],["sentinelandenterprise.com",237],["sgvtribune.com",237],["tampabay.com",237],["times-standard.com",237],["theoaklandpress.com",237],["trentonian.com",237],["twincities.com",237],["whittierdailynews.com",237],["bostonherald.com",237],["dailycamera.com",237],["sbsun.com",237],["dailydemocrat.com",237],["montereyherald.com",237],["orovillemr.com",237],["record-bee.com",237],["redbluffdailynews.com",237],["reporterherald.com",237],["thereporter.com",237],["timescall.com",237],["timesheraldonline.com",237],["ukiahdailyjournal.com",237],["dailylocal.com",237],["mercurynews.com",237],["suedkurier.de",238],["anysex.com",240],["icdrama.*",241],["mangasail.*",241],["pornve.com",242],["file4go.*",243],["coolrom.com.au",243],["marie-claire.es",244],["gamezhero.com",244],["flashgirlgames.com",244],["onlinesudoku.games",244],["mpg.football",244],["sssam.com",244],["globalnews.ca",245],["drinksmixer.com",246],["leitesculinaria.com",246],["fupa.net",247],["browardpalmbeach.com",248],["dallasobserver.com",248],["houstonpress.com",248],["miaminewtimes.com",248],["phoenixnewtimes.com",248],["westword.com",248],["nowtv.com.tr",249],["caminspector.net",250],["camwhoreshd.com",250],["camgoddess.tv",250],["gay4porn.com",252],["mypornhere.com",252],["mangovideo.*",253],["love4porn.com",253],["thotvids.com",253],["watchmdh.to",253],["celebwhore.com",253],["cluset.com",253],["sexlist.tv",253],["4kporn.xxx",253],["xhomealone.com",253],["lusttaboo.com",[253,511]],["hentai-moon.com",253],["camhub.cc",[253,673]],["mediapason.it",256],["linkspaid.com",256],["tuotromedico.com",256],["neoteo.com",256],["phoneswiki.com",256],["celebmix.com",256],["myneobuxportal.com",256],["oyungibi.com",256],["25yearslatersite.com",256],["jeshoots.com",257],["techhx.com",257],["karanapk.com",257],["flashplayer.fullstacks.net",259],["cloudapps.herokuapp.com",259],["youfiles.herokuapp.com",259],["texteditor.nsspot.net",259],["temp-mail.org",260],["asianclub.*",261],["javhdporn.net",261],["vidmoly.to",262],["comnuan.com",263],["veedi.com",264],["battleboats.io",264],["anitube.*",265],["fruitlab.com",265],["haddoz.net",265],["streamingcommunity.*",265],["garoetpos.com",265],["stiletv.it",266],["mixdrop.*",267],["hqtv.biz",268],["liveuamap.com",269],["audycje.tokfm.pl",270],["shush.se",271],["allkpop.com",272],["empire-anime.*",[273,562,563,564,565,566]],["empire-streaming.*",[273,562,563,564]],["empire-anime.com",[273,562,563,564]],["empire-streamz.fr",[273,562,563,564]],["empire-stream.*",[273,562,563,564]],["pickcrackpasswords.blogspot.com",274],["kfrfansub.com",275],["thuglink.com",275],["voipreview.org",275],["illicoporno.com",276],["lavoixdux.com",276],["tonpornodujour.com",276],["jacquieetmichel.net",276],["swame.com",276],["vosfemmes.com",276],["voyeurfrance.net",276],["jacquieetmicheltv.net",[276,621,622]],["pogo.com",277],["cloudvideo.tv",278],["legionjuegos.org",279],["legionpeliculas.org",279],["legionprogramas.org",279],["16honeys.com",280],["elespanol.com",281],["remodelista.com",282],["audiofanzine.com",286],["uploadev.*",287],["developerinsider.co",288],["thehindu.com",289],["cambro.tv",[290,291]],["boobsradar.com",[291,388,689]],["nibelungen-kurier.de",292],["adfoc.us",293],["tea-coffee.net",293],["spatsify.com",293],["newedutopics.com",293],["getviralreach.in",293],["edukaroo.com",293],["funkeypagali.com",293],["careersides.com",293],["nayisahara.com",293],["wikifilmia.com",293],["infinityskull.com",293],["viewmyknowledge.com",293],["iisfvirtual.in",293],["starxinvestor.com",293],["jkssbalerts.com",293],["sahlmarketing.net",293],["filmypoints.in",293],["fitnessholic.net",293],["moderngyan.com",293],["sattakingcharts.in",293],["bankshiksha.in",293],["earn.mpscstudyhub.com",293],["earn.quotesopia.com",293],["money.quotesopia.com",293],["best-mobilegames.com",293],["learn.moderngyan.com",293],["bharatsarkarijobalert.com",293],["quotesopia.com",293],["creditsgoal.com",293],["bgmi32bitapk.in",293],["techacode.com",293],["trickms.com",293],["ielts-isa.edu.vn",293],["loan.punjabworks.com",293],["rokni.xyz",293],["keedabankingnews.com",293],["sptfy.be",293],["mcafee-com.com",[293,366]],["pianetamountainbike.it",294],["barchart.com",295],["modelisme.com",296],["parasportontario.ca",296],["prescottenews.com",296],["nrj-play.fr",297],["hackingwithreact.com",298],["gutekueche.at",299],["peekvids.com",300],["playvids.com",300],["pornflip.com",300],["redensarten-index.de",301],["vw-page.com",302],["viz.com",[303,304]],["0rechner.de",305],["configspc.com",306],["xopenload.me",306],["uptobox.com",306],["uptostream.com",306],["japgay.com",307],["mega-debrid.eu",308],["dreamdth.com",309],["diaridegirona.cat",311],["diariodeibiza.es",311],["diariodemallorca.es",311],["diarioinformacion.com",311],["eldia.es",311],["emporda.info",311],["farodevigo.es",311],["laopinioncoruna.es",311],["laopiniondemalaga.es",311],["laopiniondemurcia.es",311],["laopiniondezamora.es",311],["laprovincia.es",311],["levante-emv.com",311],["mallorcazeitung.es",311],["regio7.cat",311],["superdeporte.es",311],["playpaste.com",312],["cnbc.com",313],["primevideo.com",314],["read.amazon.*",[314,700]],["firefaucet.win",315],["74k.io",[316,317]],["cloudwish.xyz",317],["gradehgplus.com",317],["javindo.site",317],["javindosub.site",317],["kamehaus.net",317],["movearnpre.com",317],["arabshentai.com>>",317],["javdo.cc>>",317],["javenglish.cc>>",317],["javhd.*>>",317],["javhdz.*>>",317],["roshy.tv>>",317],["fullhdxxx.com",319],["pornclassic.tube",320],["tubepornclassic.com",320],["etonline.com",321],["creatur.io",321],["lookcam.*",321],["drphil.com",321],["urbanmilwaukee.com",321],["ontiva.com",321],["hideandseek.world",321],["myabandonware.com",321],["kendam.com",321],["wttw.com",321],["synonyms.com",321],["definitions.net",321],["hostmath.com",321],["camvideoshub.com",321],["minhaconexao.com.br",321],["home-made-videos.com",323],["amateur-couples.com",323],["slutdump.com",323],["dpstream.*",324],["produsat.com",325],["bluemediafiles.*",326],["12thman.com",327],["acusports.com",327],["atlantic10.com",327],["auburntigers.com",327],["baylorbears.com",327],["bceagles.com",327],["bgsufalcons.com",327],["big12sports.com",327],["bigten.org",327],["bradleybraves.com",327],["butlersports.com",327],["cmumavericks.com",327],["conferenceusa.com",327],["cyclones.com",327],["dartmouthsports.com",327],["daytonflyers.com",327],["dbupatriots.com",327],["dbusports.com",327],["denverpioneers.com",327],["fduknights.com",327],["fgcuathletics.com",327],["fightinghawks.com",327],["fightingillini.com",327],["floridagators.com",327],["friars.com",327],["friscofighters.com",327],["gamecocksonline.com",327],["goarmywestpoint.com",327],["gobison.com",327],["goblueraiders.com",327],["gobobcats.com",327],["gocards.com",327],["gocreighton.com",327],["godeacs.com",327],["goexplorers.com",327],["goetbutigers.com",327],["gofrogs.com",327],["gogriffs.com",327],["gogriz.com",327],["golobos.com",327],["gomarquette.com",327],["gopack.com",327],["gophersports.com",327],["goprincetontigers.com",327],["gopsusports.com",327],["goracers.com",327],["goshockers.com",327],["goterriers.com",327],["gotigersgo.com",327],["gousfbulls.com",327],["govandals.com",327],["gowyo.com",327],["goxavier.com",327],["gozags.com",327],["gozips.com",327],["griffinathletics.com",327],["guhoyas.com",327],["gwusports.com",327],["hailstate.com",327],["hamptonpirates.com",327],["hawaiiathletics.com",327],["hokiesports.com",327],["huskers.com",327],["icgaels.com",327],["iuhoosiers.com",327],["jsugamecocksports.com",327],["longbeachstate.com",327],["loyolaramblers.com",327],["lrtrojans.com",327],["lsusports.net",327],["morrisvillemustangs.com",327],["msuspartans.com",327],["muleriderathletics.com",327],["mutigers.com",327],["navysports.com",327],["nevadawolfpack.com",327],["niuhuskies.com",327],["nkunorse.com",327],["nuhuskies.com",327],["nusports.com",327],["okstate.com",327],["olemisssports.com",327],["omavs.com",327],["ovcsports.com",327],["owlsports.com",327],["purduesports.com",327],["redstormsports.com",327],["richmondspiders.com",327],["sfajacks.com",327],["shupirates.com",327],["siusalukis.com",327],["smcgaels.com",327],["smumustangs.com",327],["soconsports.com",327],["soonersports.com",327],["themw.com",327],["tulsahurricane.com",327],["txst.com",327],["txstatebobcats.com",327],["ubbulls.com",327],["ucfknights.com",327],["ucirvinesports.com",327],["uconnhuskies.com",327],["uhcougars.com",327],["uicflames.com",327],["umterps.com",327],["uncwsports.com",327],["unipanthers.com",327],["unlvrebels.com",327],["uoflsports.com",327],["usdtoreros.com",327],["utahstateaggies.com",327],["utepathletics.com",327],["utrockets.com",327],["uvmathletics.com",327],["uwbadgers.com",327],["villanova.com",327],["wkusports.com",327],["wmubroncos.com",327],["woffordterriers.com",327],["1pack1goal.com",327],["bcuathletics.com",327],["bubraves.com",327],["goblackbears.com",327],["golightsgo.com",327],["gomcpanthers.com",327],["goutsa.com",327],["mercerbears.com",327],["pirateblue.com",327],["pirateblue.net",327],["pirateblue.org",327],["quinnipiacbobcats.com",327],["towsontigers.com",327],["tribeathletics.com",327],["tribeclub.com",327],["utepminermaniacs.com",327],["utepminers.com",327],["wkutickets.com",327],["aopathletics.org",327],["atlantichockeyonline.com",327],["bigsouthnetwork.com",327],["bigsouthsports.com",327],["chawomenshockey.com",327],["dbupatriots.org",327],["drakerelays.org",327],["ecac.org",327],["ecacsports.com",327],["emueagles.com",327],["emugameday.com",327],["gculopes.com",327],["godrakebulldog.com",327],["godrakebulldogs.com",327],["godrakebulldogs.net",327],["goeags.com",327],["goislander.com",327],["goislanders.com",327],["gojacks.com",327],["gomacsports.com",327],["gseagles.com",327],["hubison.com",327],["iowaconference.com",327],["ksuowls.com",327],["lonestarconference.org",327],["mascac.org",327],["midwestconference.org",327],["mountaineast.org",327],["niu-pack.com",327],["nulakers.ca",327],["oswegolakers.com",327],["ovcdigitalnetwork.com",327],["pacersports.com",327],["rmacsports.org",327],["rollrivers.com",327],["samfordsports.com",327],["uncpbraves.com",327],["usfdons.com",327],["wiacsports.com",327],["alaskananooks.com",327],["broncathleticfund.com",327],["cameronaggies.com",327],["columbiacougars.com",327],["etownbluejays.com",327],["gobadgers.ca",327],["golancers.ca",327],["gometrostate.com",327],["gothunderbirds.ca",327],["kentstatesports.com",327],["lehighsports.com",327],["lopers.com",327],["lycoathletics.com",327],["lycomingathletics.com",327],["maraudersports.com",327],["mauiinvitational.com",327],["msumavericks.com",327],["nauathletics.com",327],["nueagles.com",327],["nwusports.com",327],["oceanbreezenyc.org",327],["patriotathleticfund.com",327],["pittband.com",327],["principiaathletics.com",327],["roadrunnersathletics.com",327],["sidearmsocial.com",327],["snhupenmen.com",327],["stablerarena.com",327],["stoutbluedevils.com",327],["uwlathletics.com",327],["yumacs.com",327],["collegefootballplayoff.com",327],["csurams.com",327],["cubuffs.com",327],["gobearcats.com",327],["gohuskies.com",327],["mgoblue.com",327],["osubeavers.com",327],["pittsburghpanthers.com",327],["rolltide.com",327],["texassports.com",327],["thesundevils.com",327],["uclabruins.com",327],["wvuathletics.com",327],["wvusports.com",327],["arizonawildcats.com",327],["calbears.com",327],["cuse.com",327],["georgiadogs.com",327],["goducks.com",327],["goheels.com",327],["gostanford.com",327],["insidekstatesports.com",327],["insidekstatesports.info",327],["insidekstatesports.net",327],["insidekstatesports.org",327],["k-stateathletics.com",327],["k-statefootball.net",327],["k-statefootball.org",327],["k-statesports.com",327],["k-statesports.net",327],["k-statesports.org",327],["k-statewomenshoops.com",327],["k-statewomenshoops.net",327],["k-statewomenshoops.org",327],["kstateathletics.com",327],["kstatefootball.net",327],["kstatefootball.org",327],["kstatesports.com",327],["kstatewomenshoops.com",327],["kstatewomenshoops.net",327],["kstatewomenshoops.org",327],["ksuathletics.com",327],["ksusports.com",327],["scarletknights.com",327],["showdownforrelief.com",327],["syracusecrunch.com",327],["texastech.com",327],["theacc.com",327],["ukathletics.com",327],["usctrojans.com",327],["utahutes.com",327],["utsports.com",327],["wsucougars.com",327],["vidlii.com",[327,352]],["tricksplit.io",327],["fangraphs.com",328],["stern.de",329],["geo.de",329],["brigitte.de",329],["tvspielfilm.de",[330,331,332,333]],["tvtoday.de",[330,331,332,333]],["chip.de",[330,331,332,333]],["focus.de",[330,331,332,333]],["fitforfun.de",[330,331,332,333]],["n-tv.de",334],["player.rtl2.de",335],["planetaminecraft.com",336],["cravesandflames.com",337],["codesnse.com",337],["flyad.vip",337],["lapresse.ca",338],["kolyoom.com",339],["ilovephd.com",339],["negumo.com",340],["games.wkb.jp",[341,342]],["kenshi.fandom.com",344],["hausbau-forum.de",345],["homeairquality.org",345],["faucettronn.click",345],["fake-it.ws",346],["laksa19.github.io",347],["1shortlink.com",348],["u-s-news.com",349],["luscious.net",350],["makemoneywithurl.com",351],["junkyponk.com",351],["healthfirstweb.com",351],["vocalley.com",351],["yogablogfit.com",351],["howifx.com",[351,532]],["en.financerites.com",351],["mythvista.com",351],["livenewsflix.com",351],["cureclues.com",351],["apekite.com",351],["enit.in",351],["iammagnus.com",352],["dailyvideoreports.net",352],["unityassets4free.com",352],["docer.*",353],["resetoff.pl",353],["sexodi.com",353],["cdn77.org",354],["3sexporn.com",355],["momxxxsex.com",355],["penisbuyutucum.net",355],["ujszo.com",356],["newsmax.com",357],["nadidetarifler.com",358],["siz.tv",358],["suzylu.co.uk",[359,360]],["onworks.net",361],["yabiladi.com",361],["downloadsoft.net",362],["newsobserver.com",363],["arkadiumhosted.com",363],["testlanguages.com",364],["newsinlevels.com",364],["videosinlevels.com",364],["catcare.store",365],["starkroboticsfrc.com",366],["sinonimos.de",366],["antonimos.de",366],["quesignifi.ca",366],["tiktokrealtime.com",366],["tiktokcounter.net",366],["tpayr.xyz",366],["poqzn.xyz",366],["ashrfd.xyz",366],["rezsx.xyz",366],["tryzt.xyz",366],["ashrff.xyz",366],["rezst.xyz",366],["dawenet.com",366],["erzar.xyz",366],["waezm.xyz",366],["waezg.xyz",366],["blackwoodacademy.org",366],["cryptednews.space",366],["vivuq.com",366],["swgop.com",366],["vbnmll.com",366],["telcoinfo.online",366],["dshytb.com",366],["btcbitco.in",[366,370]],["btcsatoshi.net",366],["cempakajaya.com",366],["crypto4yu.com",366],["readbitcoin.org",366],["wiour.com",366],["finish.addurl.biz",366],["aiimgvlog.fun",[366,373]],["laweducationinfo.com",366],["savemoneyinfo.com",366],["worldaffairinfo.com",366],["godstoryinfo.com",366],["successstoryinfo.com",366],["cxissuegk.com",366],["learnmarketinfo.com",366],["bhugolinfo.com",366],["armypowerinfo.com",366],["rsgamer.app",366],["phonereviewinfo.com",366],["makeincomeinfo.com",366],["gknutshell.com",366],["vichitrainfo.com",366],["workproductivityinfo.com",366],["dopomininfo.com",366],["hostingdetailer.com",366],["fitnesssguide.com",366],["tradingfact4u.com",366],["cryptofactss.com",366],["softwaredetail.com",366],["artoffocas.com",366],["insurancesfact.com",366],["travellingdetail.com",366],["advertisingexcel.com",366],["allcryptoz.net",366],["batmanfactor.com",366],["beautifulfashionnailart.com",366],["crewbase.net",366],["documentaryplanet.xyz",366],["crewus.net",366],["gametechreviewer.com",366],["midebalonu.net",366],["misterio.ro",366],["phineypet.com",366],["seory.xyz",366],["shinbhu.net",366],["shinchu.net",366],["substitutefor.com",366],["talkforfitness.com",366],["thefitbrit.co.uk",366],["thumb8.net",366],["thumb9.net",366],["topcryptoz.net",366],["uniqueten.net",366],["ultraten.net",366],["exactpay.online",366],["quins.us",366],["kiddyearner.com",366],["imagereviser.com",367],["tech.pubghighdamage.com",368],["jiocinema.com",368],["rapid-cloud.co",368],["uploadmall.com",368],["4funbox.com",369],["nephobox.com",369],["1024tera.com",369],["terabox.*",369],["blog24.me",370],["bildirim.*",372],["arahdrive.com",373],["appsbull.com",374],["diudemy.com",374],["maqal360.com",[374,375,376]],["lifesurance.info",377],["akcartoons.in",378],["cybercityhelp.in",378],["dl.apkmoddone.com",379],["phongroblox.com",379],["fuckingfast.net",380],["buzzheavier.com",380],["tickhosting.com",381],["in91vip.win",382],["datavaults.co",383],["t-online.de",385],["upornia.*",[386,387]],["bobs-tube.com",388],["pornohirsch.net",389],["bembed.net",390],["embedv.net",390],["javguard.club",390],["listeamed.net",390],["v6embed.xyz",390],["vembed.*",390],["vid-guard.com",390],["vinomo.xyz",390],["nekolink.site",[391,392]],["aagmaal.com",393],["camcam.cc",393],["netfapx.com",393],["javdragon.org",393],["javneon.tv",393],["javsaga.ninja",393],["pixsera.net",394],["jnews5.com",395],["pc-builds.com",396],["reuters.com",396],["today.com",396],["videogamer.com",396],["wrestlinginc.com",396],["usatoday.com",397],["ydr.com",397],["247sports.com",398],["indiatimes.com",399],["netzwelt.de",400],["filmibeat.com",401],["goodreturns.in",401],["mykhel.com",401],["luckydice.net",401],["adarima.org",401],["weatherwx.com",401],["sattaguess.com",401],["winshell.de",401],["rosasidan.ws",401],["upiapi.in",401],["daemonanime.net",401],["networkhint.com",401],["thichcode.net",401],["texturecan.com",401],["tikmate.app",[401,603]],["arcaxbydz.id",401],["quotesshine.com",401],["arcade.buzzrtv.com",402],["arcade.dailygazette.com",402],["arcade.lemonde.fr",402],["arena.gamesforthebrain.com",402],["bestpuzzlesandgames.com",402],["cointiply.arkadiumarena.com",402],["gamelab.com",402],["games.abqjournal.com",402],["games.amny.com",402],["games.bellinghamherald.com",402],["games.besthealthmag.ca",402],["games.bnd.com",402],["games.boston.com",402],["games.bostonglobe.com",402],["games.bradenton.com",402],["games.centredaily.com",402],["games.charlottegames.cnhinews.com",402],["games.crosswordgiant.com",402],["games.dailymail.co.uk",402],["games.dallasnews.com",402],["games.daytondailynews.com",402],["games.denverpost.com",402],["games.everythingzoomer.com",402],["games.fresnobee.com",402],["games.gameshownetwork.com",402],["games.get.tv",402],["games.greatergood.com",402],["games.heraldonline.com",402],["games.heraldsun.com",402],["games.idahostatesman.com",402],["games.insp.com",402],["games.islandpacket.com",402],["games.journal-news.com",402],["games.kansas.com",402],["games.kansascity.com",402],["games.kentucky.com",402],["games.lancasteronline.com",402],["games.ledger-enquirer.com",402],["games.macon.com",402],["games.mashable.com",402],["games.mercedsunstar.com",402],["games.metro.us",402],["games.metv.com",402],["games.miamiherald.com",402],["games.modbee.com",402],["games.moviestvnetwork.com",402],["games.myrtlebeachonline.com",402],["games.games.newsgames.parade.com",402],["games.pressdemocrat.com",402],["games.puzzlebaron.com",402],["games.puzzler.com",402],["games.puzzles.ca",402],["games.qns.com",402],["games.readersdigest.ca",402],["games.sacbee.com",402],["games.sanluisobispo.com",402],["games.sixtyandme.com",402],["games.sltrib.com",402],["games.springfieldnewssun.com",402],["games.star-telegram.com",402],["games.startribune.com",402],["games.sunherald.com",402],["games.theadvocate.com",402],["games.thenewstribune.com",402],["games.theolympian.com",402],["games.theportugalnews.com",402],["games.thestar.com",402],["games.thestate.com",402],["games.tri-cityherald.com",402],["games.triviatoday.com",402],["games.usnews.com",402],["games.word.tips",402],["games.wordgenius.com",402],["games.wtop.com",402],["jeux.meteocity.com",402],["juegos.as.com",402],["juegos.elnuevoherald.com",402],["juegos.elpais.com",402],["philly.arkadiumarena.com",402],["play.dictionary.com",402],["puzzles.bestforpuzzles.com",402],["puzzles.centralmaine.com",402],["puzzles.crosswordsolver.org",402],["puzzles.independent.co.uk",402],["puzzles.nola.com",402],["puzzles.pressherald.com",402],["puzzles.standard.co.uk",402],["puzzles.sunjournal.com",402],["arkadium.com",403],["abysscdn.com",[404,405]],["arcai.com",406],["my-code4you.blogspot.com",407],["flickr.com",408],["firefile.cc",409],["pestleanalysis.com",409],["kochamjp.pl",409],["tutorialforlinux.com",409],["whatsaero.com",409],["animeblkom.net",[409,423]],["blkom.com",409],["globes.co.il",[410,411]],["jardiner-malin.fr",412],["tw-calc.net",413],["ohmybrush.com",414],["talkceltic.net",415],["mentalfloss.com",416],["uprafa.com",417],["cube365.net",418],["wwwfotografgotlin.blogspot.com",419],["freelistenonline.com",419],["badassdownloader.com",420],["quickporn.net",421],["yellowbridge.com",422],["aosmark.com",424],["ctrlv.*",425],["atozmath.com",[426,427,428,429,430,431,432]],["newyorker.com",433],["brighteon.com",434],["more.tv",435],["video1tube.com",436],["alohatube.xyz",436],["4players.de",437],["onlinesoccermanager.com",437],["fshost.me",438],["link.cgtips.org",439],["hentaicloud.com",440],["paperzonevn.com",442],["9jarock.org",443],["fzmovies.info",443],["fztvseries.ng",443],["netnaijas.com",443],["hentaienglish.com",444],["hentaiporno.xxx",444],["venge.io",[445,446]],["btcbux.io",447],["its.porn",[448,449]],["atv.at",450],["2ndrun.tv",451],["rackusreads.com",451],["teachmemicro.com",451],["willcycle.com",451],["kusonime.com",[452,453]],["123movieshd.*",454],["imgur.com",[455,456,719]],["hentai-party.com",457],["hentaicomics.pro",457],["uproxy.*",458],["animesa.*",459],["subtitle.one",460],["subtitleone.cc",460],["mysexgames.com",461],["ancient-origins.*",462],["cinecalidad.*",[463,464]],["xnxx.com",465],["xvideos.*",465],["gdr-online.com",466],["mmm.dk",467],["iqiyi.com",[468,469,595]],["m.iqiyi.com",470],["nbcolympics.com",471],["apkhex.com",472],["indiansexstories2.net",473],["issstories.xyz",473],["1340kbbr.com",474],["gorgeradio.com",474],["kduk.com",474],["kedoam.com",474],["kejoam.com",474],["kelaam.com",474],["khsn1230.com",474],["kjmx.rocks",474],["kloo.com",474],["klooam.com",474],["klykradio.com",474],["kmed.com",474],["kmnt.com",474],["kool991.com",474],["kpnw.com",474],["kppk983.com",474],["krktcountry.com",474],["ktee.com",474],["kwro.com",474],["kxbxfm.com",474],["thevalley.fm",474],["quizlet.com",475],["dsocker1234.blogspot.com",476],["schoolcheats.net",[477,478]],["mgnet.xyz",479],["designtagebuch.de",480],["pixroute.com",481],["uploady.io",482],["calculator-online.net",483],["porngames.club",484],["sexgames.xxx",484],["111.90.159.132",485],["mobile-tracker-free.com",486],["pfps.gg",487],["social-unlock.com",488],["superpsx.com",489],["ninja.io",490],["sourceforge.net",491],["samfirms.com",492],["rapelust.com",493],["vtube.to",493],["desitelugusex.com",493],["dvdplay.*",493],["xvideos-downloader.net",493],["xxxvideotube.net",493],["sdefx.cloud",493],["nozomi.la",493],["banned.video",494],["madmaxworld.tv",494],["androidpolice.com",494],["babygaga.com",494],["backyardboss.net",494],["carbuzz.com",494],["cbr.com",494],["collider.com",494],["dualshockers.com",494],["footballfancast.com",494],["footballleagueworld.co.uk",494],["gamerant.com",494],["givemesport.com",494],["hardcoregamer.com",494],["hotcars.com",494],["howtogeek.com",494],["makeuseof.com",494],["moms.com",494],["movieweb.com",494],["pocket-lint.com",494],["pocketnow.com",494],["screenrant.com",494],["simpleflying.com",494],["thegamer.com",494],["therichest.com",494],["thesportster.com",494],["thethings.com",494],["thetravel.com",494],["topspeed.com",494],["xda-developers.com",494],["huffpost.com",495],["ingles.com",496],["spanishdict.com",496],["surfline.com",[497,498]],["play.tv3.ee",499],["play.tv3.lt",499],["play.tv3.lv",[499,500]],["tv3play.skaties.lv",499],["bulbagarden.net",501],["hollywoodlife.com",502],["mat6tube.com",503],["hotabis.com",504],["root-nation.com",504],["italpress.com",504],["airsoftmilsimnews.com",504],["artribune.com",504],["newtumbl.com",505],["apkmaven.*",506],["aruble.net",507],["nevcoins.club",508],["mail.com",509],["gmx.*",510],["mangakita.id",512],["avpgalaxy.net",513],["panda-novel.com",514],["lightsnovel.com",514],["eaglesnovel.com",514],["pandasnovel.com",514],["ewrc-results.com",515],["kizi.com",516],["cyberscoop.com",517],["fedscoop.com",517],["canale.live",518],["jeep-cj.com",519],["sponsorhunter.com",520],["cloudcomputingtopics.net",521],["likecs.com",522],["tiscali.it",523],["linkspy.cc",524],["adshnk.com",525],["chattanoogan.com",526],["adsy.pw",527],["playstore.pw",527],["windowspro.de",528],["tvtv.ca",529],["tvtv.us",529],["mydaddy.cc",530],["roadtrippin.fr",531],["vavada5com.com",532],["anyporn.com",[533,550]],["bravoporn.com",533],["bravoteens.com",533],["crocotube.com",533],["hellmoms.com",533],["hellporno.com",533],["sex3.com",533],["tubewolf.com",533],["xbabe.com",533],["xcum.com",533],["zedporn.com",533],["imagetotext.info",534],["infokik.com",535],["freepik.com",536],["ddwloclawek.pl",[537,538]],["www.seznam.cz",539],["deezer.com",540],["my-subs.co",541],["plaion.com",542],["slideshare.net",[543,544]],["ustreasuryyieldcurve.com",545],["businesssoftwarehere.com",546],["goo.st",546],["freevpshere.com",546],["softwaresolutionshere.com",546],["gamereactor.*",548],["madoohd.com",549],["doomovie-hd.*",549],["staige.tv",551],["androidadult.com",552],["streamvid.net",553],["watchtv24.com",554],["cellmapper.net",555],["medscape.com",556],["newscon.org",[557,558]],["wheelofgold.com",559],["drakecomic.*",559],["app.blubank.com",560],["mobileweb.bankmellat.ir",560],["chat.nrj.fr",561],["chat.tchatche.com",[561,576]],["ccthesims.com",568],["chromeready.com",568],["dtbps3games.com",568],["illustratemagazine.com",568],["uknip.co.uk",568],["vod.pl",569],["megadrive-emulator.com",570],["tvhay.*",[571,572]],["moviesapi.club",573],["bestx.stream",573],["watchx.top",573],["digimanie.cz",574],["svethardware.cz",574],["srvy.ninja",575],["cnn.com",[577,578,579]],["news.bg",580],["edmdls.com",581],["freshremix.net",581],["scenedl.org",581],["trakt.tv",582],["client.falixnodes.net",[583,584]],["shroomers.app",585],["classicalradio.com",586],["di.fm",586],["jazzradio.com",586],["radiotunes.com",586],["rockradio.com",586],["zenradio.com",586],["getthit.com",587],["techedubyte.com",588],["soccerinhd.com",588],["movie-th.tv",589],["iwanttfc.com",590],["nutraingredients-asia.com",591],["nutraingredients-latam.com",591],["nutraingredients-usa.com",591],["nutraingredients.com",591],["ozulscansen.com",592],["nexusmods.com",593],["lookmovie.*",594],["lookmovie2.to",594],["biletomat.pl",596],["hextank.io",[597,598]],["filmizlehdfilm.com",[599,600,601,602]],["filmizletv.*",[599,600,601,602]],["fullfilmizle.cc",[599,600,601,602]],["gofilmizle.net",[599,600,601,602]],["btvplus.bg",604],["sagewater.com",605],["redlion.net",605],["filmweb.pl",[606,607]],["satdl.com",608],["vidstreaming.xyz",609],["everand.com",610],["myradioonline.pl",611],["cbs.com",612],["paramountplus.com",612],["fullxh.com",613],["galleryxh.site",613],["megaxh.com",613],["movingxh.world",613],["seexh.com",613],["unlockxh4.com",613],["valuexh.life",613],["xhaccess.com",613],["xhadult2.com",613],["xhadult3.com",613],["xhadult4.com",613],["xhadult5.com",613],["xhamster.*",613],["xhamster1.*",613],["xhamster10.*",613],["xhamster11.*",613],["xhamster12.*",613],["xhamster13.*",613],["xhamster14.*",613],["xhamster15.*",613],["xhamster16.*",613],["xhamster17.*",613],["xhamster18.*",613],["xhamster19.*",613],["xhamster20.*",613],["xhamster2.*",613],["xhamster3.*",613],["xhamster4.*",613],["xhamster42.*",613],["xhamster46.com",613],["xhamster5.*",613],["xhamster7.*",613],["xhamster8.*",613],["xhamsterporno.mx",613],["xhbig.com",613],["xhbranch5.com",613],["xhchannel.com",613],["xhdate.world",613],["xhlease.world",613],["xhmoon5.com",613],["xhofficial.com",613],["xhopen.com",613],["xhplanet1.com",613],["xhplanet2.com",613],["xhreal2.com",613],["xhreal3.com",613],["xhspot.com",613],["xhtotal.com",613],["xhtree.com",613],["xhvictory.com",613],["xhwebsite.com",613],["xhwebsite2.com",613],["xhwebsite5.com",613],["xhwide1.com",613],["xhwide2.com",613],["xhwide5.com",613],["file-upload.net",615],["acortalo.*",[616,617,618,619]],["acortar.*",[616,617,618,619]],["megadescarga.net",[616,617,618,619]],["megadescargas.net",[616,617,618,619]],["hentaihaven.xxx",620],["jacquieetmicheltv2.net",622],["a2zapk.*",623],["fcportables.com",[624,625]],["emurom.net",626],["freethesaurus.com",[627,628]],["thefreedictionary.com",[627,628]],["oeffentlicher-dienst.info",629],["im9.eu",630],["dcdlplayer8a06f4.xyz",631],["ultimate-guitar.com",632],["claimbits.net",633],["sexyscope.net",634],["kickassanime.*",635],["recherche-ebook.fr",636],["virtualdinerbot.com",636],["zonebourse.com",637],["pink-sluts.net",638],["andhrafriends.com",639],["benzinpreis.de",640],["turtleviplay.xyz",641],["defenseone.com",642],["govexec.com",642],["nextgov.com",642],["route-fifty.com",642],["sharing.wtf",643],["wetter3.de",644],["esportivos.fun",645],["cosmonova-broadcast.tv",646],["hartvannederland.nl",647],["shownieuws.nl",647],["vandaaginside.nl",647],["rock.porn",[648,649]],["videzz.net",[650,651]],["ezaudiobookforsoul.com",652],["club386.com",653],["decompiler.com",[654,655]],["littlebigsnake.com",656],["easyfun.gg",657],["smailpro.com",658],["ilgazzettino.it",659],["ilmessaggero.it",659],["3bmeteo.com",[660,661]],["mconverter.eu",662],["lover937.net",663],["10gb.vn",664],["pes6.es",665],["tactics.tools",[666,667]],["boundhub.com",668],["alocdnnetu.xyz",669],["reliabletv.me",670],["jakondo.ru",671],["appnee.com",671],["filecrypt.*",672],["wired.com",674],["spankbang.*",[675,676,677,721,722]],["hulu.com",[678,679,680]],["hanime.tv",681],["nhentai.net",[682,683,684]],["anonymfile.com",685],["gofile.to",685],["dotycat.com",686],["rateyourmusic.com",687],["reporterpb.com.br",688],["blog-dnz.com",690],["18adultgames.com",691],["colnect.com",[692,693]],["adultgamesworld.com",694],["bgmiupdate.com.in",695],["reviewdiv.com",696],["parametric-architecture.com",697],["laurelberninteriors.com",[698,724]],["voiceofdenton.com",699],["concealednation.org",699],["askattest.com",701],["opensubtitles.com",702],["savefiles.com",703],["streamup.ws",704],["goodstream.one",705],["lecrabeinfo.net",706],["cerberusapp.com",707],["smashkarts.io",708],["beamng.wesupply.cx",709],["wowtv.de",[710,711]],["jsfiddle.net",[712,713]],["www.google.*",714],["tacobell.com",715],["zefoy.com",716],["cnet.com",717],["natgeotv.com",720],["globo.com",723],["wayfair.com",725]]);
const exceptionsMap = new Map([["cloudflare.com",[0]],["pingit.com",[172]],["loan.bgmi32bitapk.in",[293]],["lookmovie.studio",[594]]]);
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
