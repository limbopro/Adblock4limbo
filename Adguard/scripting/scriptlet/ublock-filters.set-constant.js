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
const argsList = [["console.clear","undefined"],["aclib.runInPagePush","{}","as","callback"],["adBlockDetected","undefined"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["googletag.cmd","{}"],["_aps","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["google.ima.settings.setDisableFlashAds","noopFunc"],["pa.privacy","{}"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505","{}"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["Object.prototype.que","noopFunc"],["Object.prototype.que.push","noopFunc"],["ga.sendGaEvent","noopFunc"],["adobe","{}"],["MT","{}"],["MT.track","noopFunc"],["ClickOmniPartner","noopFunc"],["adex","{}"],["adex.getAdexUser","noopFunc"],["Adkit","noopFunc"],["Object.prototype.shouldExpectGoogleCMP","false"],["apntag.refresh","noopFunc"],["pa.sendEvent","noopFunc"],["Munchkin","{}"],["Munchkin.init","noopFunc"],["ttd_dom_ready","noopFunc"],["ramp","undefined"],["appInfo.snowplow.trackSelfDescribingEvent","noopFunc"],["_vwo_code.init","noopFunc"],["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["console.clear","noopFunc"],["console.log","noopFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["console.clear","trueFunc"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["check_adblock","true"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["openPopunder","noopFunc"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["CaptchmeState.adb","undefined"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["HTMLAnchorElement.prototype.click","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["check","true"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["runAdBlocker","false"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["cnbc.canShowAds","true"],["ue_adb_chk","1"],["firefaucet","true"],["cRAds","true"],["uas","[]"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["foundation.adPlayer.bitmovin","{}"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["Object.prototype.adReinsertion","noopFunc"],["getHomadConfig","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["ulp_noadb","true"],["Object.prototype.adblock_detected","false"],["timeSec","0"],["adsbygoogle.loaded","true"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["Adv_ab","false"],["sgpbCanRunAds","true"],["document.hidden","false"],["document.hasFocus","trueFunc"],["hasFocus","trueFunc"],["navigator.brave","undefined"],["Object.prototype.isAllAdClose","true"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["navigator.webkitTemporaryStorage.queryUsageAndQuota","noopFunc"],["document.onkeydown","noopFunc"],["showadas","true"],["alert","throwFunc"],["aSl.gcd","0"],["window.adLink","null"],["detectedAdblock","undefined"],["isTabActive","true"],["clicked","2"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["flashvars.mlogo",""],["vpPrerollVideo","undefined"],["PlayerConfig.config.CustomAdSetting","[]"],["PlayerConfig.trusted","true"],["PlayerConfig.config.AffiliateAdViewLevel","3"],["univresalP","noopFunc"],["hold_click","false"],["tie.ad_blocker_detector","false"],["admiral","noopFunc"],["gnt.u.adfree","true"],["__INITIAL_DATA__.siteData.admiralScript"],["objAd.loadAdShield","noopFunc"],["window.myAd.runAd","noopFunc"],["detectAdBlock","noopFunc"],["__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["document.ontouchend","null"],["document.onclick","null"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["xv_ad_block","0"],["openWindow","noopFunc"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["showada","true"],["showax","true"],["p18","undefined"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["Object.prototype.adblockFound","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["document.bridCanRunAds","true"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["xv.sda.pp.init","noopFunc"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["ad_link",""],["penciBlocksArray","[]"],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["D4zz","noopFunc"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["tv3Cmp.ConsentGiven","true"],["setupSkin","noopFunc"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["td_ad_background_click_link","undefined"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["puShown1","true"],["passthetest","true"],["pandaAdviewValidate","true"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["abpblocked","undefined"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["sssp","emptyObj"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["adSettings","[]"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["isadb","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["googletag","true"],["tOS2","150"],["checkAdBlocker","noopFunc"],["navigator.standalone","true"],["ShowAdvertising","{}"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["feedBack.showAffilaePromo","noopFunc"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["HTMLScriptElement.prototype.onerror","null"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["window.adngin","{}"],["amzn_aps_csm","{}"],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["sharedController.adblockDetector","noopFunc"],["checkAdsStatus","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["checkAdBlockeraz","noopFunc"],["blockingAds","false"],["Yii2App.playbackTimeout","0"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["powerAPITag","emptyObj"],["playerEnhancedConfig.run","throwFunc"],["aoAdBlockDetected","false"],["rodo.checkIsDidomiConsent","noopFunc"],["rodo.waitForConsent","noopPromiseResolve"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["hasAdBlocker","false"],["initials.yld-pdpopunder",""],["download_click","true"],["advertisement3","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["dvsize","52"],["majorse","true"],["completed","1"],["testerli","false"],["w87.abd","noopFunc"],["document.referrer",""],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["one_time","1"],["consentGiven","true"],["playID","1"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["malisx","true"],["alim","true"],["ADS.isBannersEnabled","false"],["EASYFUN_ADS_CAN_RUN","true"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["detectedAdblock","noopFunc"],["Object.prototype.DetectByGoogleAd","noopFunc"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["NativeAd","noopFunc"],["Blob","noopFunc"],["window.navigator.brave","undefined"],["HTMLScriptElement.prototype.onerror","undefined"],["isAdblock","false"],["openPop","noopFunc"],["cns.library","true"],["BJSShowUnder","{}"],["BJSShowUnder.bindTo","noopFunc"],["BJSShowUnder.add","noopFunc"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["ABLK","false"],["_n_app.popunder","null"],["_n_app.options.ads.show_popunders","false"],["N_BetterJsPop.object","{}"],["countDown","0"],["runCheck","noopFunc"],["adsSlotRenderEndSeen","true"],["showModal","noopFunc"],["flashvars.mlogo_link",""],["isAdBlocked","noopFunc"],["URLlist","[]"],["aaw","{}"],["aaw.processAdsOnPage","noopFunc"],["doOpen","undefined"],["HTMLImageElement.prototype.onerror","undefined"],["FOXIZ_MAIN_SCRIPT.siteAccessDetector","noopFunc"],["openAdBlockPopup","noopFunc"],["Object.prototype._adsDisabled","true"],["advanced_ads_check_adblocker","noopFunc"],["canRunAds","1"],["attestHasAdBlockerActivated","true"],["extInstalled","true"],["SaveFiles.add","noopFunc"],["detectSandbox","noopFunc"],["adbon","0"],["LCI.adBlockDetectorEnabled","false"],["stoCazzo","true"],["adblockDetected","false"],["importFAB","undefined"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["Object.prototype.updateModifiedCommerceUrl","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["Visitor","{}"],["send_gravity_event","noopFunc"],["send_recommendation_event","noopFunc"],["libAnalytics.data.get","noopFunc"],["adthrive._components.start","noopFunc"],["navigator.sendBeacon","noopFunc"]];
const hostnamesMap = new Map([["jilliandescribecompany.com",0],["gogoanime.*",[0,195]],["adrianmissionminute.com",0],["alejandrocenturyoil.com",0],["alleneconomicmatter.com",0],["apinchcaseation.com",0],["bethshouldercan.com",0],["bigclatterhomesguideservice.com",0],["bradleyviewdoctor.com",0],["brittneystandardwestern.com",0],["brookethoughi.com",0],["brucevotewithin.com",0],["cindyeyefinal.com",0],["denisegrowthwide.com",0],["diananatureforeign.com",0],["donaldlineelse.com",0],["edwardarriveoften.com",0],["erikcoldperson.com",0],["evelynthankregion.com",0],["graceaddresscommunity.com",0],["heatherdiscussionwhen.com",0],["heatherwholeinvolve.com",0],["housecardsummerbutton.com",0],["jamessoundcost.com",0],["jamesstartstudent.com",0],["jamiesamewalk.com",0],["jasminetesttry.com",0],["jasonresponsemeasure.com",0],["jayservicestuff.com",0],["jennifercertaindevelopment.com",0],["jessicaglassauthor.com",0],["johnalwayssame.com",0],["johntryopen.com",0],["jonathansociallike.com",0],["josephseveralconcern.com",0],["kellywhatcould.com",0],["kennethofficialitem.com",0],["kristiesoundsimply.com",0],["lisatrialidea.com",0],["lorimuchbenefit.com",0],["loriwithinfamily.com",0],["lukecomparetwo.com",0],["mariatheserepublican.com",0],["markstyleall.com",0],["michaelapplysome.com",0],["morganoperationface.com",0],["nathanfromsubject.com",0],["nectareousoverelate.com",0],["paulkitchendark.com",0],["rebeccaneverbase.com",0],["richardsignfish.com",0],["roberteachfinal.com",0],["robertordercharacter.com",0],["robertplacespace.com",0],["ryanagoinvolve.com",0],["sandratableother.com",0],["sandrataxeight.com",0],["seanshowcould.com",0],["sethniceletter.com",0],["shannonpersonalcost.com",0],["sharonwhiledemocratic.com",0],["stevenimaginelittle.com",0],["strawberriesporail.com",0],["susanhavekeep.com",0],["timberwoodanotia.com",0],["tinycat-voe-fashion.com",0],["toddpartneranimal.com",0],["troyyourlead.com",0],["uptodatefinishconference.com",0],["uptodatefinishconferenceroom.com",0],["vincentincludesuccessful.com",0],["voe.sx",0],["maxfinishseveral.com",0],["voe.sx>>",0],["javboys.tv>>",0],["freeplayervideo.com",0],["nazarickol.com",0],["player-cdn.com",0],["playhydrax.com",[0,403,404]],["rabbitstream.net",0],["fmovies.*",0],["japscan.lol",1],["u26bekrb.fun",2],["br.de",3],["indeed.com",4],["zillow.com",[4,107]],["pasteboard.co",5],["clickhole.com",6],["deadspin.com",6],["gizmodo.com",6],["jalopnik.com",6],["jezebel.com",6],["kotaku.com",6],["lifehacker.com",6],["splinternews.com",6],["theinventory.com",6],["theonion.com",6],["theroot.com",6],["thetakeout.com",6],["pewresearch.org",6],["los40.com",[7,8]],["as.com",8],["telegraph.co.uk",[9,10]],["poweredbycovermore.com",[9,62]],["lumens.com",[9,62]],["verizon.com",11],["humanbenchmark.com",12],["politico.com",13],["officedepot.co.cr",[14,15]],["officedepot.*",[16,17]],["usnews.com",18],["coolmathgames.com",[19,282,283,284]],["video.gazzetta.it",[20,21]],["oggi.it",[20,21]],["manoramamax.com",20],["factable.com",22],["thedailybeast.com",23],["zee5.com",24],["gala.fr",25],["geo.fr",25],["voici.fr",25],["gloucestershirelive.co.uk",26],["arsiv.mackolik.com",27],["jacksonguitars.com",28],["scandichotels.com",29],["stylist.co.uk",30],["nettiauto.com",31],["thaiairways.com",[32,33]],["cerbahealthcare.it",[34,35]],["futura-sciences.com",[34,52]],["toureiffel.paris",34],["campusfrance.org",[34,146]],["tiendaenlinea.claro.com.ni",[36,37]],["tieba.baidu.com",38],["fandom.com",[39,40,342]],["grasshopper.com",[41,42]],["epson.com.cn",[43,44,45,46]],["oe24.at",[47,48]],["szbz.de",47],["platform.autods.com",[49,50]],["kcra.com",51],["wcvb.com",51],["sportdeutschland.tv",51],["citibank.com.sg",53],["uol.com.br",[54,55,56,57,58]],["gazzetta.gr",59],["digicol.dpm.org.cn",[60,61]],["virginmediatelevision.ie",63],["larazon.es",[64,65]],["waitrosecellar.com",[66,67,68]],["kicker.de",[69,383]],["sharpen-free-design-generator.netlify.app",[70,71]],["help.cashctrl.com",[72,73]],["gry-online.pl",74],["vidaextra.com",75],["commande.rhinov.pro",[76,77]],["ecom.wixapps.net",[76,77]],["tipranks.com",[78,79]],["iceland.co.uk",[80,81,82]],["socket.pearsoned.com",83],["tntdrama.com",[84,85]],["trutv.com",[84,85]],["mobile.de",[86,87]],["ioe.vn",[88,89]],["geiriadur.ac.uk",[88,92]],["welsh-dictionary.ac.uk",[88,92]],["bikeportland.org",[90,91]],["biologianet.com",[55,56,57]],["10.com.au",[93,94]],["10play.com.au",[93,94]],["sunshine-live.de",[95,96]],["whatismyip.com",[97,98]],["myfitnesspal.com",99],["netoff.co.jp",[100,101]],["bluerabbitrx.com",[100,101]],["foundit.*",[102,103]],["clickjogos.com.br",104],["bristan.com",[105,106]],["share.hntv.tv",[108,109,110,111]],["forum.dji.com",[108,111]],["unionpayintl.com",[108,110]],["streamelements.com",108],["optimum.net",[112,113]],["hdfcfund.com",114],["user.guancha.cn",[115,116]],["sosovalue.com",117],["bandyforbundet.no",[118,119]],["tatacommunications.com",120],["kb.arlo.com",[120,152]],["suamusica.com.br",[121,122,123]],["macrotrends.net",[124,125]],["code.world",126],["smartcharts.net",126],["topgear.com",127],["eservice.directauto.com",[128,129]],["nbcsports.com",130],["standard.co.uk",131],["pruefernavi.de",[132,133]],["speedtest.net",[134,135]],["17track.net",136],["visible.com",137],["hagerty.com",[138,139]],["marketplace.nvidia.com",140],["kino.de",[141,142]],["9now.nine.com.au",143],["worldstar.com",144],["prisjakt.no",145],["developer.arm.com",[147,148]],["sterkinekor.com",149],["iogames.space",150],["id.condenast.com",151],["m.youtube.com",[153,154,155,156]],["music.youtube.com",[153,154,155,156]],["tv.youtube.com",[153,154,155,156]],["www.youtube.com",[153,154,155,156]],["youtubekids.com",[153,154,155,156]],["youtube-nocookie.com",[153,154,155,156]],["eu-proxy.startpage.com",[153,154,156]],["timesofindia.indiatimes.com",157],["economictimes.indiatimes.com",158],["motherless.com",159],["sueddeutsche.de",160],["watchanimesub.net",161],["wcoanimesub.tv",161],["wcoforever.net",161],["freeviewmovies.com",161],["filehorse.com",161],["guidetnt.com",161],["starmusiq.*",161],["sp-today.com",161],["linkvertise.com",161],["eropaste.net",161],["getpaste.link",161],["sharetext.me",161],["wcofun.*",161],["note.sieuthuthuat.com",161],["gadgets.es",[161,450]],["amateurporn.co",[161,252]],["wiwo.de",162],["primewire.*",163],["streanplay.*",[163,164]],["alphaporno.com",[163,533]],["porngem.com",163],["shortit.pw",[163,238]],["familyporn.tv",163],["sbplay.*",163],["id45.cyou",163],["85tube.com",[163,223]],["milfnut.*",163],["k1nk.co",163],["watchasians.cc",163],["soltoshindo.com",163],["sankakucomplex.com",165],["player.glomex.com",166],["merkur.de",166],["tz.de",166],["sxyprn.*",167],["hqq.*",[168,169]],["waaw.*",[169,170]],["hotpornfile.org",169],["x69.ovh",169],["younetu.*",169],["multiup.us",169],["peliculas8k.com",[169,170]],["video.q34r.org",169],["czxxx.org",169],["vtplayer.online",169],["vvtplayer.*",169],["netu.ac",169],["netu.frembed.lol",169],["123link.*",171],["adshort.*",171],["mitly.us",171],["linkrex.net",171],["linx.cc",171],["oke.io",171],["linkshorts.*",171],["dz4link.com",171],["adsrt.*",171],["linclik.com",171],["shrt10.com",171],["vinaurl.*",171],["loptelink.com",171],["adfloz.*",171],["cut-fly.com",171],["linkfinal.com",171],["payskip.org",171],["cutpaid.com",171],["linkjust.com",171],["leechpremium.link",171],["icutlink.com",[171,257]],["oncehelp.com",171],["rgl.vn",171],["reqlinks.net",171],["bitlk.com",171],["qlinks.eu",171],["link.3dmili.com",171],["short-fly.com",171],["foxseotools.com",171],["dutchycorp.*",171],["shortearn.*",171],["pingit.*",171],["link.turkdown.com",171],["7r6.com",171],["oko.sh",171],["ckk.ai",171],["fc.lc",171],["fstore.biz",171],["shrink.*",171],["cuts-url.com",171],["eio.io",171],["exe.app",171],["exee.io",171],["exey.io",171],["skincarie.com",171],["exeo.app",171],["tmearn.*",171],["coinlyhub.com",[171,321]],["adsafelink.com",171],["aii.sh",171],["megalink.*",171],["cybertechng.com",[171,336]],["cutdl.xyz",171],["iir.ai",171],["shorteet.com",[171,354]],["miniurl.*",171],["smoner.com",171],["gplinks.*",171],["odisha-remix.com",[171,336]],["xpshort.com",[171,336]],["upshrink.com",171],["clk.*",171],["easysky.in",171],["veganab.co",171],["golink.bloggerishyt.in",171],["birdurls.com",171],["vipurl.in",171],["try2link.com",171],["jameeltips.us",171],["promo-visits.site",171],["satoshi-win.xyz",[171,370]],["shorterall.com",171],["encurtandourl.com",171],["forextrader.site",171],["postazap.com",171],["cety.app",171],["exego.app",[171,365]],["cutlink.net",171],["cutyurls.com",171],["cutty.app",171],["cutnet.net",171],["jixo.online",171],["tinys.click",[171,336]],["cpm.icu",171],["panyshort.link",171],["enagato.com",171],["pandaznetwork.com",171],["tpi.li",171],["oii.la",171],["recipestutorials.com",171],["shrinke.*",171],["shrinkme.*",171],["shrinkforearn.in",171],["oii.io",171],["du-link.in",171],["atglinks.com",171],["thotpacks.xyz",171],["megaurl.in",171],["megafly.in",171],["simana.online",171],["fooak.com",171],["joktop.com",171],["evernia.site",171],["falpus.com",171],["link.paid4link.com",171],["exalink.fun",171],["shortxlinks.com",171],["upfion.com",171],["upfiles.app",171],["upfiles-urls.com",171],["flycutlink.com",[171,336]],["linksly.co",171],["link1s.*",171],["pkr.pw",171],["imagenesderopaparaperros.com",171],["shortenbuddy.com",171],["apksvip.com",171],["4cash.me",171],["namaidani.com",171],["shortzzy.*",171],["teknomuda.com",171],["shorttey.*",[171,320]],["miuiku.com",171],["savelink.site",171],["lite-link.*",171],["adcorto.*",171],["samaa-pro.com",171],["miklpro.com",171],["modapk.link",171],["ccurl.net",171],["linkpoi.me",171],["menjelajahi.com",171],["pewgame.com",171],["haonguyen.top",171],["zshort.*",171],["crazyblog.in",171],["cutearn.net",171],["rshrt.com",171],["filezipa.com",171],["dz-linkk.com",171],["upfiles.*",171],["theblissempire.com",171],["finanzas-vida.com",171],["adurly.cc",171],["paid4.link",171],["link.asiaon.top",171],["go.gets4link.com",171],["linkfly.*",171],["beingtek.com",171],["shorturl.unityassets4free.com",171],["disheye.com",171],["techymedies.com",171],["techysuccess.com",171],["za.gl",[171,272]],["bblink.com",171],["myad.biz",171],["swzz.xyz",171],["vevioz.com",171],["charexempire.com",171],["clk.asia",171],["sturls.com",171],["myshrinker.com",171],["snowurl.com",[171,336]],["wplink.*",171],["rocklink.in",171],["techgeek.digital",171],["download3s.net",171],["shortx.net",171],["tlin.me",171],["up-load.one",171],["bestcash2020.com",171],["adslink.pw",171],["novelssites.com",171],["faucetcrypto.net",171],["trxking.xyz",171],["weadown.com",171],["m.bloggingguidance.com",171],["blog.onroid.com",171],["link.codevn.net",171],["upfilesurls.com",171],["link4rev.site",171],["c2g.at",171],["bitcosite.com",[171,547]],["cryptosh.pro",171],["windowslite.net",[171,336]],["viewfr.com",171],["cl1ca.com",171],["4br.me",171],["fir3.net",171],["seulink.*",171],["encurtalink.*",171],["kiddyshort.com",171],["watchmygf.me",[172,196]],["camwhores.*",[172,182,222,223,224]],["camwhorez.tv",[172,182,222,223]],["cambay.tv",[172,203,222,249,251,252,253,254]],["fpo.xxx",[172,203]],["sexemix.com",172],["heavyfetish.com",[172,715]],["thotcity.su",172],["viralxxxporn.com",[172,387]],["tube8.*",[173,174]],["you-porn.com",174],["youporn.*",174],["youporngay.com",174],["youpornru.com",174],["redtube.*",174],["9908ww.com",174],["adelaidepawnbroker.com",174],["bztube.com",174],["hotovs.com",174],["insuredhome.org",174],["nudegista.com",174],["pornluck.com",174],["vidd.se",174],["pornhub.*",[174,309]],["pornhub.com",174],["pornerbros.com",175],["freep.com",175],["porn.com",176],["tune.pk",177],["noticias.gospelmais.com.br",178],["techperiod.com",178],["viki.com",[179,180]],["watch-series.*",181],["watchseries.*",181],["vev.*",181],["vidop.*",181],["vidup.*",181],["sleazyneasy.com",[182,183,184]],["smutr.com",[182,317]],["tktube.com",182],["yourporngod.com",[182,183]],["javbangers.com",[182,440]],["camfox.com",182],["camthots.tv",[182,249]],["shegotass.info",182],["amateur8.com",182],["bigtitslust.com",182],["ebony8.com",182],["freeporn8.com",182],["lesbian8.com",182],["maturetubehere.com",182],["sortporn.com",182],["motherporno.com",[182,183,203,251]],["theporngod.com",[182,183]],["watchdirty.to",[182,223,224,252]],["pornsocket.com",185],["luxuretv.com",186],["porndig.com",[187,188]],["webcheats.com.br",189],["ceesty.com",[190,191]],["gestyy.com",[190,191]],["corneey.com",191],["destyy.com",191],["festyy.com",191],["sh.st",191],["mitaku.net",191],["angrybirdsnest.com",192],["zrozz.com",192],["clix4btc.com",192],["4tests.com",192],["goltelevision.com",192],["news-und-nachrichten.de",192],["laradiobbs.net",192],["urlaubspartner.net",192],["produktion.de",192],["cinemaxxl.de",192],["bladesalvador.com",192],["tempr.email",192],["cshort.org",192],["friendproject.net",192],["covrhub.com",192],["katfile.com",[192,615]],["trust.zone",192],["business-standard.com",192],["planetsuzy.org",193],["empflix.com",194],["xmovies8.*",195],["masteranime.tv",195],["0123movies.*",195],["gostream.*",195],["gomovies.*",195],["transparentcalifornia.com",196],["deepbrid.com",197],["webnovel.com",198],["streamwish.*",[199,200]],["oneupload.to",200],["wishfast.top",200],["rubystm.com",200],["rubyvid.com",200],["rubyvidhub.com",200],["stmruby.com",200],["streamruby.com",200],["schwaebische.de",201],["8tracks.com",202],["3movs.com",203],["bravoerotica.net",[203,251]],["youx.xxx",203],["camclips.tv",[203,317]],["xtits.*",[203,251]],["camflow.tv",[203,251,252,290,387]],["camhoes.tv",[203,249,251,252,290,387]],["xmegadrive.com",203],["xxxymovies.com",203],["xxxshake.com",203],["gayck.com",203],["xhand.com",[203,251]],["analdin.com",[203,251]],["revealname.com",204],["pouvideo.*",205],["povvideo.*",205],["povw1deo.*",205],["povwideo.*",205],["powv1deo.*",205],["powvibeo.*",205],["powvideo.*",205],["powvldeo.*",205],["golfchannel.com",206],["stream.nbcsports.com",206],["mathdf.com",206],["gamcore.com",207],["porcore.com",207],["porngames.tv",207],["69games.xxx",207],["javmix.app",207],["haaretz.co.il",208],["haaretz.com",208],["hungama.com",208],["a-o.ninja",208],["anime-odcinki.pl",208],["shortgoo.blogspot.com",208],["tonanmedia.my.id",[208,568]],["yurasu.xyz",208],["isekaipalace.com",208],["plyjam.*",[209,210]],["ennovelas.com",[210,214]],["foxsports.com.au",211],["canberratimes.com.au",211],["thesimsresource.com",212],["fxporn69.*",213],["vipbox.*",214],["viprow.*",214],["ctrl.blog",215],["sportlife.es",216],["finofilipino.org",217],["desbloqueador.*",218],["xberuang.*",219],["teknorizen.*",219],["mysflink.blogspot.com",219],["ashemaletube.*",220],["paktech2.com",220],["assia.tv",221],["assia4.com",221],["cwtvembeds.com",[223,250]],["camlovers.tv",223],["porntn.com",223],["pornissimo.org",223],["sexcams-24.com",[223,252]],["watchporn.to",[223,252]],["camwhorez.video",223],["footstockings.com",[223,224,252]],["xmateur.com",[223,224,252]],["multi.xxx",224],["weatherx.co.in",[225,226]],["sunbtc.space",225],["subtorrents.*",227],["subtorrents1.*",227],["newpelis.*",227],["pelix.*",227],["allcalidad.*",227],["infomaniakos.*",227],["ojogos.com.br",228],["powforums.com",229],["supforums.com",229],["studybullet.com",229],["usgamer.net",230],["recordonline.com",230],["freebitcoin.win",231],["e-monsite.com",231],["coindice.win",231],["freiepresse.de",232],["investing.com",233],["tornadomovies.*",234],["mp3fiber.com",235],["chicoer.com",236],["dailybreeze.com",236],["dailybulletin.com",236],["dailynews.com",236],["delcotimes.com",236],["eastbaytimes.com",236],["macombdaily.com",236],["ocregister.com",236],["pasadenastarnews.com",236],["pe.com",236],["presstelegram.com",236],["redlandsdailyfacts.com",236],["reviewjournal.com",236],["santacruzsentinel.com",236],["saratogian.com",236],["sentinelandenterprise.com",236],["sgvtribune.com",236],["tampabay.com",236],["times-standard.com",236],["theoaklandpress.com",236],["trentonian.com",236],["twincities.com",236],["whittierdailynews.com",236],["bostonherald.com",236],["dailycamera.com",236],["sbsun.com",236],["dailydemocrat.com",236],["montereyherald.com",236],["orovillemr.com",236],["record-bee.com",236],["redbluffdailynews.com",236],["reporterherald.com",236],["thereporter.com",236],["timescall.com",236],["timesheraldonline.com",236],["ukiahdailyjournal.com",236],["dailylocal.com",236],["mercurynews.com",236],["suedkurier.de",237],["anysex.com",239],["icdrama.*",240],["mangasail.*",240],["pornve.com",241],["file4go.*",242],["coolrom.com.au",242],["marie-claire.es",243],["gamezhero.com",243],["flashgirlgames.com",243],["onlinesudoku.games",243],["mpg.football",243],["sssam.com",243],["globalnews.ca",244],["drinksmixer.com",245],["leitesculinaria.com",245],["fupa.net",246],["browardpalmbeach.com",247],["dallasobserver.com",247],["houstonpress.com",247],["miaminewtimes.com",247],["phoenixnewtimes.com",247],["westword.com",247],["nowtv.com.tr",248],["caminspector.net",249],["camwhoreshd.com",249],["camgoddess.tv",249],["gay4porn.com",251],["mypornhere.com",251],["mangovideo.*",252],["love4porn.com",252],["thotvids.com",252],["watchmdh.to",252],["celebwhore.com",252],["cluset.com",252],["sexlist.tv",252],["4kporn.xxx",252],["xhomealone.com",252],["lusttaboo.com",[252,511]],["hentai-moon.com",252],["camhub.cc",[252,674]],["mediapason.it",255],["linkspaid.com",255],["tuotromedico.com",255],["neoteo.com",255],["phoneswiki.com",255],["celebmix.com",255],["myneobuxportal.com",255],["oyungibi.com",255],["25yearslatersite.com",255],["jeshoots.com",256],["techhx.com",256],["karanapk.com",256],["flashplayer.fullstacks.net",258],["cloudapps.herokuapp.com",258],["youfiles.herokuapp.com",258],["texteditor.nsspot.net",258],["temp-mail.org",259],["asianclub.*",260],["javhdporn.net",260],["vidmoly.to",261],["comnuan.com",262],["veedi.com",263],["battleboats.io",263],["anitube.*",264],["fruitlab.com",264],["haddoz.net",264],["streamingcommunity.*",264],["garoetpos.com",264],["stiletv.it",265],["mixdrop.*",266],["hqtv.biz",267],["liveuamap.com",268],["muvibg.com",268],["audycje.tokfm.pl",269],["shush.se",270],["allkpop.com",271],["empire-anime.*",[272,563,564,565,566,567]],["empire-streaming.*",[272,563,564,565]],["empire-anime.com",[272,563,564,565]],["empire-streamz.fr",[272,563,564,565]],["empire-stream.*",[272,563,564,565]],["pickcrackpasswords.blogspot.com",273],["kfrfansub.com",274],["thuglink.com",274],["voipreview.org",274],["illicoporno.com",275],["lavoixdux.com",275],["tonpornodujour.com",275],["jacquieetmichel.net",275],["swame.com",275],["vosfemmes.com",275],["voyeurfrance.net",275],["jacquieetmicheltv.net",[275,622,623]],["pogo.com",276],["cloudvideo.tv",277],["legionjuegos.org",278],["legionpeliculas.org",278],["legionprogramas.org",278],["16honeys.com",279],["elespanol.com",280],["remodelista.com",281],["audiofanzine.com",285],["uploadev.*",286],["developerinsider.co",287],["thehindu.com",288],["cambro.tv",[289,290]],["boobsradar.com",[290,387,690]],["nibelungen-kurier.de",291],["adfoc.us",292],["tea-coffee.net",292],["spatsify.com",292],["newedutopics.com",292],["getviralreach.in",292],["edukaroo.com",292],["funkeypagali.com",292],["careersides.com",292],["nayisahara.com",292],["wikifilmia.com",292],["infinityskull.com",292],["viewmyknowledge.com",292],["iisfvirtual.in",292],["starxinvestor.com",292],["jkssbalerts.com",292],["sahlmarketing.net",292],["filmypoints.in",292],["fitnessholic.net",292],["moderngyan.com",292],["sattakingcharts.in",292],["bankshiksha.in",292],["earn.mpscstudyhub.com",292],["earn.quotesopia.com",292],["money.quotesopia.com",292],["best-mobilegames.com",292],["learn.moderngyan.com",292],["bharatsarkarijobalert.com",292],["quotesopia.com",292],["creditsgoal.com",292],["bgmi32bitapk.in",292],["techacode.com",292],["trickms.com",292],["ielts-isa.edu.vn",292],["loan.punjabworks.com",292],["rokni.xyz",292],["keedabankingnews.com",292],["sptfy.be",292],["mcafee-com.com",[292,365]],["pianetamountainbike.it",293],["barchart.com",294],["modelisme.com",295],["parasportontario.ca",295],["prescottenews.com",295],["nrj-play.fr",296],["hackingwithreact.com",297],["gutekueche.at",298],["peekvids.com",299],["playvids.com",299],["pornflip.com",299],["redensarten-index.de",300],["vw-page.com",301],["viz.com",[302,303]],["0rechner.de",304],["configspc.com",305],["xopenload.me",305],["uptobox.com",305],["uptostream.com",305],["japgay.com",306],["mega-debrid.eu",307],["dreamdth.com",308],["diaridegirona.cat",310],["diariodeibiza.es",310],["diariodemallorca.es",310],["diarioinformacion.com",310],["eldia.es",310],["emporda.info",310],["farodevigo.es",310],["laopinioncoruna.es",310],["laopiniondemalaga.es",310],["laopiniondemurcia.es",310],["laopiniondezamora.es",310],["laprovincia.es",310],["levante-emv.com",310],["mallorcazeitung.es",310],["regio7.cat",310],["superdeporte.es",310],["playpaste.com",311],["cnbc.com",312],["primevideo.com",313],["read.amazon.*",[313,701]],["firefaucet.win",314],["74k.io",[315,316]],["cloudwish.xyz",316],["javindo.site",316],["javindosub.site",316],["kamehaus.net",316],["movearnpre.com",316],["javdo.cc>>",316],["javenglish.cc>>",316],["javhd.*>>",316],["javhdz.*>>",316],["roshy.tv>>",316],["fullhdxxx.com",318],["pornclassic.tube",319],["tubepornclassic.com",319],["etonline.com",320],["creatur.io",320],["lookcam.*",320],["drphil.com",320],["urbanmilwaukee.com",320],["ontiva.com",320],["hideandseek.world",320],["myabandonware.com",320],["kendam.com",320],["wttw.com",320],["synonyms.com",320],["definitions.net",320],["hostmath.com",320],["camvideoshub.com",320],["minhaconexao.com.br",320],["home-made-videos.com",322],["amateur-couples.com",322],["slutdump.com",322],["dpstream.*",323],["produsat.com",324],["bluemediafiles.*",325],["12thman.com",326],["acusports.com",326],["atlantic10.com",326],["auburntigers.com",326],["baylorbears.com",326],["bceagles.com",326],["bgsufalcons.com",326],["big12sports.com",326],["bigten.org",326],["bradleybraves.com",326],["butlersports.com",326],["cmumavericks.com",326],["conferenceusa.com",326],["cyclones.com",326],["dartmouthsports.com",326],["daytonflyers.com",326],["dbupatriots.com",326],["dbusports.com",326],["denverpioneers.com",326],["fduknights.com",326],["fgcuathletics.com",326],["fightinghawks.com",326],["fightingillini.com",326],["floridagators.com",326],["friars.com",326],["friscofighters.com",326],["gamecocksonline.com",326],["goarmywestpoint.com",326],["gobison.com",326],["goblueraiders.com",326],["gobobcats.com",326],["gocards.com",326],["gocreighton.com",326],["godeacs.com",326],["goexplorers.com",326],["goetbutigers.com",326],["gofrogs.com",326],["gogriffs.com",326],["gogriz.com",326],["golobos.com",326],["gomarquette.com",326],["gopack.com",326],["gophersports.com",326],["goprincetontigers.com",326],["gopsusports.com",326],["goracers.com",326],["goshockers.com",326],["goterriers.com",326],["gotigersgo.com",326],["gousfbulls.com",326],["govandals.com",326],["gowyo.com",326],["goxavier.com",326],["gozags.com",326],["gozips.com",326],["griffinathletics.com",326],["guhoyas.com",326],["gwusports.com",326],["hailstate.com",326],["hamptonpirates.com",326],["hawaiiathletics.com",326],["hokiesports.com",326],["huskers.com",326],["icgaels.com",326],["iuhoosiers.com",326],["jsugamecocksports.com",326],["longbeachstate.com",326],["loyolaramblers.com",326],["lrtrojans.com",326],["lsusports.net",326],["morrisvillemustangs.com",326],["msuspartans.com",326],["muleriderathletics.com",326],["mutigers.com",326],["navysports.com",326],["nevadawolfpack.com",326],["niuhuskies.com",326],["nkunorse.com",326],["nuhuskies.com",326],["nusports.com",326],["okstate.com",326],["olemisssports.com",326],["omavs.com",326],["ovcsports.com",326],["owlsports.com",326],["purduesports.com",326],["redstormsports.com",326],["richmondspiders.com",326],["sfajacks.com",326],["shupirates.com",326],["siusalukis.com",326],["smcgaels.com",326],["smumustangs.com",326],["soconsports.com",326],["soonersports.com",326],["themw.com",326],["tulsahurricane.com",326],["txst.com",326],["txstatebobcats.com",326],["ubbulls.com",326],["ucfknights.com",326],["ucirvinesports.com",326],["uconnhuskies.com",326],["uhcougars.com",326],["uicflames.com",326],["umterps.com",326],["uncwsports.com",326],["unipanthers.com",326],["unlvrebels.com",326],["uoflsports.com",326],["usdtoreros.com",326],["utahstateaggies.com",326],["utepathletics.com",326],["utrockets.com",326],["uvmathletics.com",326],["uwbadgers.com",326],["villanova.com",326],["wkusports.com",326],["wmubroncos.com",326],["woffordterriers.com",326],["1pack1goal.com",326],["bcuathletics.com",326],["bubraves.com",326],["goblackbears.com",326],["golightsgo.com",326],["gomcpanthers.com",326],["goutsa.com",326],["mercerbears.com",326],["pirateblue.com",326],["pirateblue.net",326],["pirateblue.org",326],["quinnipiacbobcats.com",326],["towsontigers.com",326],["tribeathletics.com",326],["tribeclub.com",326],["utepminermaniacs.com",326],["utepminers.com",326],["wkutickets.com",326],["aopathletics.org",326],["atlantichockeyonline.com",326],["bigsouthnetwork.com",326],["bigsouthsports.com",326],["chawomenshockey.com",326],["dbupatriots.org",326],["drakerelays.org",326],["ecac.org",326],["ecacsports.com",326],["emueagles.com",326],["emugameday.com",326],["gculopes.com",326],["godrakebulldog.com",326],["godrakebulldogs.com",326],["godrakebulldogs.net",326],["goeags.com",326],["goislander.com",326],["goislanders.com",326],["gojacks.com",326],["gomacsports.com",326],["gseagles.com",326],["hubison.com",326],["iowaconference.com",326],["ksuowls.com",326],["lonestarconference.org",326],["mascac.org",326],["midwestconference.org",326],["mountaineast.org",326],["niu-pack.com",326],["nulakers.ca",326],["oswegolakers.com",326],["ovcdigitalnetwork.com",326],["pacersports.com",326],["rmacsports.org",326],["rollrivers.com",326],["samfordsports.com",326],["uncpbraves.com",326],["usfdons.com",326],["wiacsports.com",326],["alaskananooks.com",326],["broncathleticfund.com",326],["cameronaggies.com",326],["columbiacougars.com",326],["etownbluejays.com",326],["gobadgers.ca",326],["golancers.ca",326],["gometrostate.com",326],["gothunderbirds.ca",326],["kentstatesports.com",326],["lehighsports.com",326],["lopers.com",326],["lycoathletics.com",326],["lycomingathletics.com",326],["maraudersports.com",326],["mauiinvitational.com",326],["msumavericks.com",326],["nauathletics.com",326],["nueagles.com",326],["nwusports.com",326],["oceanbreezenyc.org",326],["patriotathleticfund.com",326],["pittband.com",326],["principiaathletics.com",326],["roadrunnersathletics.com",326],["sidearmsocial.com",326],["snhupenmen.com",326],["stablerarena.com",326],["stoutbluedevils.com",326],["uwlathletics.com",326],["yumacs.com",326],["collegefootballplayoff.com",326],["csurams.com",326],["cubuffs.com",326],["gobearcats.com",326],["gohuskies.com",326],["mgoblue.com",326],["osubeavers.com",326],["pittsburghpanthers.com",326],["rolltide.com",326],["texassports.com",326],["thesundevils.com",326],["uclabruins.com",326],["wvuathletics.com",326],["wvusports.com",326],["arizonawildcats.com",326],["calbears.com",326],["cuse.com",326],["georgiadogs.com",326],["goducks.com",326],["goheels.com",326],["gostanford.com",326],["insidekstatesports.com",326],["insidekstatesports.info",326],["insidekstatesports.net",326],["insidekstatesports.org",326],["k-stateathletics.com",326],["k-statefootball.net",326],["k-statefootball.org",326],["k-statesports.com",326],["k-statesports.net",326],["k-statesports.org",326],["k-statewomenshoops.com",326],["k-statewomenshoops.net",326],["k-statewomenshoops.org",326],["kstateathletics.com",326],["kstatefootball.net",326],["kstatefootball.org",326],["kstatesports.com",326],["kstatewomenshoops.com",326],["kstatewomenshoops.net",326],["kstatewomenshoops.org",326],["ksuathletics.com",326],["ksusports.com",326],["scarletknights.com",326],["showdownforrelief.com",326],["syracusecrunch.com",326],["texastech.com",326],["theacc.com",326],["ukathletics.com",326],["usctrojans.com",326],["utahutes.com",326],["utsports.com",326],["wsucougars.com",326],["vidlii.com",[326,351]],["tricksplit.io",326],["fangraphs.com",327],["stern.de",328],["geo.de",328],["brigitte.de",328],["tvspielfilm.de",[329,330,331,332]],["tvtoday.de",[329,330,331,332]],["chip.de",[329,330,331,332]],["focus.de",[329,330,331,332]],["fitforfun.de",[329,330,331,332]],["n-tv.de",333],["player.rtl2.de",334],["planetaminecraft.com",335],["cravesandflames.com",336],["codesnse.com",336],["flyad.vip",336],["lapresse.ca",337],["kolyoom.com",338],["ilovephd.com",338],["negumo.com",339],["games.wkb.jp",[340,341]],["kenshi.fandom.com",343],["hausbau-forum.de",344],["homeairquality.org",344],["faucettronn.click",344],["fake-it.ws",345],["laksa19.github.io",346],["1shortlink.com",347],["u-s-news.com",348],["luscious.net",349],["makemoneywithurl.com",350],["junkyponk.com",350],["healthfirstweb.com",350],["vocalley.com",350],["yogablogfit.com",350],["howifx.com",[350,532]],["en.financerites.com",350],["mythvista.com",350],["livenewsflix.com",350],["cureclues.com",350],["apekite.com",350],["enit.in",350],["iammagnus.com",351],["dailyvideoreports.net",351],["unityassets4free.com",351],["docer.*",352],["resetoff.pl",352],["sexodi.com",352],["cdn77.org",353],["3sexporn.com",354],["momxxxsex.com",354],["penisbuyutucum.net",354],["ujszo.com",355],["newsmax.com",356],["nadidetarifler.com",357],["siz.tv",357],["suzylu.co.uk",[358,359]],["onworks.net",360],["yabiladi.com",360],["downloadsoft.net",361],["newsobserver.com",362],["arkadiumhosted.com",362],["testlanguages.com",363],["newsinlevels.com",363],["videosinlevels.com",363],["catcare.store",364],["starkroboticsfrc.com",365],["sinonimos.de",365],["antonimos.de",365],["quesignifi.ca",365],["tiktokrealtime.com",365],["tiktokcounter.net",365],["tpayr.xyz",365],["poqzn.xyz",365],["ashrfd.xyz",365],["rezsx.xyz",365],["tryzt.xyz",365],["ashrff.xyz",365],["rezst.xyz",365],["dawenet.com",365],["erzar.xyz",365],["waezm.xyz",365],["waezg.xyz",365],["blackwoodacademy.org",365],["cryptednews.space",365],["vivuq.com",365],["swgop.com",365],["vbnmll.com",365],["telcoinfo.online",365],["dshytb.com",365],["btcbitco.in",[365,369]],["btcsatoshi.net",365],["cempakajaya.com",365],["crypto4yu.com",365],["readbitcoin.org",365],["wiour.com",365],["finish.addurl.biz",365],["aiimgvlog.fun",[365,372]],["laweducationinfo.com",365],["savemoneyinfo.com",365],["worldaffairinfo.com",365],["godstoryinfo.com",365],["successstoryinfo.com",365],["cxissuegk.com",365],["learnmarketinfo.com",365],["bhugolinfo.com",365],["armypowerinfo.com",365],["rsgamer.app",365],["phonereviewinfo.com",365],["makeincomeinfo.com",365],["gknutshell.com",365],["vichitrainfo.com",365],["workproductivityinfo.com",365],["dopomininfo.com",365],["hostingdetailer.com",365],["fitnesssguide.com",365],["tradingfact4u.com",365],["cryptofactss.com",365],["softwaredetail.com",365],["artoffocas.com",365],["insurancesfact.com",365],["travellingdetail.com",365],["advertisingexcel.com",365],["allcryptoz.net",365],["batmanfactor.com",365],["beautifulfashionnailart.com",365],["crewbase.net",365],["documentaryplanet.xyz",365],["crewus.net",365],["gametechreviewer.com",365],["midebalonu.net",365],["misterio.ro",365],["phineypet.com",365],["seory.xyz",365],["shinbhu.net",365],["shinchu.net",365],["substitutefor.com",365],["talkforfitness.com",365],["thefitbrit.co.uk",365],["thumb8.net",365],["thumb9.net",365],["topcryptoz.net",365],["uniqueten.net",365],["ultraten.net",365],["exactpay.online",365],["quins.us",365],["kiddyearner.com",365],["imagereviser.com",366],["tech.pubghighdamage.com",367],["jiocinema.com",367],["rapid-cloud.co",367],["uploadmall.com",367],["4funbox.com",368],["nephobox.com",368],["1024tera.com",368],["terabox.*",368],["blog24.me",369],["bildirim.*",371],["arahdrive.com",372],["appsbull.com",373],["diudemy.com",373],["maqal360.com",[373,374,375]],["lifesurance.info",376],["akcartoons.in",377],["cybercityhelp.in",377],["dl.apkmoddone.com",378],["phongroblox.com",378],["fuckingfast.net",379],["buzzheavier.com",379],["tickhosting.com",380],["in91vip.win",381],["datavaults.co",382],["t-online.de",384],["upornia.*",[385,386]],["bobs-tube.com",387],["pornohirsch.net",388],["bembed.net",389],["embedv.net",389],["fslinks.org",389],["javguard.club",389],["listeamed.net",389],["v6embed.xyz",389],["vembed.*",389],["vgplayer.xyz",389],["vid-guard.com",389],["vinomo.xyz",389],["nekolink.site",[390,391]],["aagmaal.com",392],["camcam.cc",392],["netfapx.com",392],["javdragon.org",392],["javneon.tv",392],["javsaga.ninja",392],["pixsera.net",393],["jnews5.com",394],["pc-builds.com",395],["reuters.com",395],["today.com",395],["videogamer.com",395],["wrestlinginc.com",395],["usatoday.com",396],["ydr.com",396],["247sports.com",397],["indiatimes.com",398],["netzwelt.de",399],["filmibeat.com",400],["goodreturns.in",400],["mykhel.com",400],["luckydice.net",400],["adarima.org",400],["weatherwx.com",400],["sattaguess.com",400],["winshell.de",400],["rosasidan.ws",400],["upiapi.in",400],["daemonanime.net",400],["networkhint.com",400],["thichcode.net",400],["texturecan.com",400],["tikmate.app",[400,604]],["arcaxbydz.id",400],["quotesshine.com",400],["arcade.buzzrtv.com",401],["arcade.dailygazette.com",401],["arcade.lemonde.fr",401],["arena.gamesforthebrain.com",401],["bestpuzzlesandgames.com",401],["cointiply.arkadiumarena.com",401],["gamelab.com",401],["games.abqjournal.com",401],["games.amny.com",401],["games.bellinghamherald.com",401],["games.besthealthmag.ca",401],["games.bnd.com",401],["games.boston.com",401],["games.bostonglobe.com",401],["games.bradenton.com",401],["games.centredaily.com",401],["games.charlottegames.cnhinews.com",401],["games.crosswordgiant.com",401],["games.dailymail.co.uk",401],["games.dallasnews.com",401],["games.daytondailynews.com",401],["games.denverpost.com",401],["games.everythingzoomer.com",401],["games.fresnobee.com",401],["games.gameshownetwork.com",401],["games.get.tv",401],["games.greatergood.com",401],["games.heraldonline.com",401],["games.heraldsun.com",401],["games.idahostatesman.com",401],["games.insp.com",401],["games.islandpacket.com",401],["games.journal-news.com",401],["games.kansas.com",401],["games.kansascity.com",401],["games.kentucky.com",401],["games.lancasteronline.com",401],["games.ledger-enquirer.com",401],["games.macon.com",401],["games.mashable.com",401],["games.mercedsunstar.com",401],["games.metro.us",401],["games.metv.com",401],["games.miamiherald.com",401],["games.modbee.com",401],["games.moviestvnetwork.com",401],["games.myrtlebeachonline.com",401],["games.games.newsgames.parade.com",401],["games.pressdemocrat.com",401],["games.puzzlebaron.com",401],["games.puzzler.com",401],["games.puzzles.ca",401],["games.qns.com",401],["games.readersdigest.ca",401],["games.sacbee.com",401],["games.sanluisobispo.com",401],["games.sixtyandme.com",401],["games.sltrib.com",401],["games.springfieldnewssun.com",401],["games.star-telegram.com",401],["games.startribune.com",401],["games.sunherald.com",401],["games.theadvocate.com",401],["games.thenewstribune.com",401],["games.theolympian.com",401],["games.theportugalnews.com",401],["games.thestar.com",401],["games.thestate.com",401],["games.tri-cityherald.com",401],["games.triviatoday.com",401],["games.usnews.com",401],["games.word.tips",401],["games.wordgenius.com",401],["games.wtop.com",401],["jeux.meteocity.com",401],["juegos.as.com",401],["juegos.elnuevoherald.com",401],["juegos.elpais.com",401],["philly.arkadiumarena.com",401],["play.dictionary.com",401],["puzzles.bestforpuzzles.com",401],["puzzles.centralmaine.com",401],["puzzles.crosswordsolver.org",401],["puzzles.independent.co.uk",401],["puzzles.nola.com",401],["puzzles.pressherald.com",401],["puzzles.standard.co.uk",401],["puzzles.sunjournal.com",401],["arkadium.com",402],["abysscdn.com",[403,404]],["arcai.com",405],["my-code4you.blogspot.com",406],["flickr.com",407],["firefile.cc",408],["pestleanalysis.com",408],["kochamjp.pl",408],["tutorialforlinux.com",408],["whatsaero.com",408],["animeblkom.net",[408,422]],["blkom.com",408],["globes.co.il",[409,410]],["jardiner-malin.fr",411],["tw-calc.net",412],["ohmybrush.com",413],["talkceltic.net",414],["mentalfloss.com",415],["uprafa.com",416],["cube365.net",417],["wwwfotografgotlin.blogspot.com",418],["freelistenonline.com",418],["badassdownloader.com",419],["quickporn.net",420],["yellowbridge.com",421],["aosmark.com",423],["ctrlv.*",424],["atozmath.com",[425,426,427,428,429,430,431]],["newyorker.com",432],["brighteon.com",433],["more.tv",434],["video1tube.com",435],["alohatube.xyz",435],["4players.de",436],["onlinesoccermanager.com",436],["fshost.me",437],["link.cgtips.org",438],["hentaicloud.com",439],["paperzonevn.com",441],["9jarock.org",442],["fzmovies.info",442],["fztvseries.ng",442],["netnaijas.com",442],["hentaienglish.com",443],["hentaiporno.xxx",443],["venge.io",[444,445]],["btcbux.io",446],["its.porn",[447,448]],["atv.at",449],["2ndrun.tv",450],["rackusreads.com",450],["teachmemicro.com",450],["willcycle.com",450],["kusonime.com",[451,452]],["123movieshd.*",453],["imgur.com",[454,455,716]],["hentai-party.com",456],["hentaicomics.pro",456],["uproxy.*",457],["animesa.*",458],["subtitle.one",459],["subtitleone.cc",459],["genshinimpactcalculator.com",460],["mysexgames.com",461],["ancient-origins.*",462],["cinecalidad.*",[463,464]],["xnxx.com",465],["xvideos.*",465],["gdr-online.com",466],["mmm.dk",467],["iqiyi.com",[468,469,596]],["m.iqiyi.com",470],["nbcolympics.com",471],["apkhex.com",472],["indiansexstories2.net",473],["issstories.xyz",473],["1340kbbr.com",474],["gorgeradio.com",474],["kduk.com",474],["kedoam.com",474],["kejoam.com",474],["kelaam.com",474],["khsn1230.com",474],["kjmx.rocks",474],["kloo.com",474],["klooam.com",474],["klykradio.com",474],["kmed.com",474],["kmnt.com",474],["kool991.com",474],["kpnw.com",474],["kppk983.com",474],["krktcountry.com",474],["ktee.com",474],["kwro.com",474],["kxbxfm.com",474],["thevalley.fm",474],["quizlet.com",475],["dsocker1234.blogspot.com",476],["schoolcheats.net",[477,478]],["mgnet.xyz",479],["designtagebuch.de",480],["pixroute.com",481],["uploady.io",482],["calculator-online.net",483],["porngames.club",484],["sexgames.xxx",484],["111.90.159.132",485],["mobile-tracker-free.com",486],["pfps.gg",487],["social-unlock.com",488],["superpsx.com",489],["ninja.io",490],["sourceforge.net",491],["samfirms.com",492],["rapelust.com",493],["vtube.to",493],["desitelugusex.com",493],["dvdplay.*",493],["xvideos-downloader.net",493],["xxxvideotube.net",493],["sdefx.cloud",493],["nozomi.la",493],["banned.video",494],["madmaxworld.tv",494],["androidpolice.com",494],["babygaga.com",494],["backyardboss.net",494],["carbuzz.com",494],["cbr.com",494],["collider.com",494],["dualshockers.com",494],["footballfancast.com",494],["footballleagueworld.co.uk",494],["gamerant.com",494],["givemesport.com",494],["hardcoregamer.com",494],["hotcars.com",494],["howtogeek.com",494],["makeuseof.com",494],["moms.com",494],["movieweb.com",494],["pocket-lint.com",494],["pocketnow.com",494],["screenrant.com",494],["simpleflying.com",494],["thegamer.com",494],["therichest.com",494],["thesportster.com",494],["thethings.com",494],["thetravel.com",494],["topspeed.com",494],["xda-developers.com",494],["huffpost.com",495],["ingles.com",496],["spanishdict.com",496],["surfline.com",[497,498]],["play.tv3.ee",499],["play.tv3.lt",499],["play.tv3.lv",[499,500]],["tv3play.skaties.lv",499],["bulbagarden.net",501],["hollywoodlife.com",502],["mat6tube.com",503],["hotabis.com",504],["root-nation.com",504],["italpress.com",504],["airsoftmilsimnews.com",504],["artribune.com",504],["newtumbl.com",505],["apkmaven.*",506],["aruble.net",507],["nevcoins.club",508],["mail.com",509],["gmx.*",510],["mangakita.id",512],["avpgalaxy.net",513],["panda-novel.com",514],["lightsnovel.com",514],["eaglesnovel.com",514],["pandasnovel.com",514],["ewrc-results.com",515],["kizi.com",516],["cyberscoop.com",517],["fedscoop.com",517],["canale.live",518],["jeep-cj.com",519],["sponsorhunter.com",520],["cloudcomputingtopics.net",521],["likecs.com",522],["tiscali.it",523],["linkspy.cc",524],["adshnk.com",525],["chattanoogan.com",526],["adsy.pw",527],["playstore.pw",527],["windowspro.de",528],["tvtv.ca",529],["tvtv.us",529],["mydaddy.cc",530],["roadtrippin.fr",531],["vavada5com.com",532],["anyporn.com",[533,550]],["bravoporn.com",533],["bravoteens.com",533],["crocotube.com",533],["hellmoms.com",533],["hellporno.com",533],["sex3.com",533],["tubewolf.com",533],["xbabe.com",533],["xcum.com",533],["zedporn.com",533],["imagetotext.info",534],["infokik.com",535],["freepik.com",536],["ddwloclawek.pl",[537,538]],["www.seznam.cz",539],["deezer.com",540],["my-subs.co",541],["plaion.com",542],["slideshare.net",[543,544]],["ustreasuryyieldcurve.com",545],["businesssoftwarehere.com",546],["goo.st",546],["freevpshere.com",546],["softwaresolutionshere.com",546],["gamereactor.*",548],["madoohd.com",549],["doomovie-hd.*",549],["staige.tv",551],["lvturbo.com",552],["androidadult.com",553],["streamvid.net",554],["watchtv24.com",555],["cellmapper.net",556],["medscape.com",557],["newscon.org",[558,559]],["wheelofgold.com",560],["drakecomic.*",560],["app.blubank.com",561],["mobileweb.bankmellat.ir",561],["chat.nrj.fr",562],["chat.tchatche.com",[562,577]],["ccthesims.com",569],["chromeready.com",569],["coursedrive.org",569],["dtbps3games.com",569],["illustratemagazine.com",569],["uknip.co.uk",569],["vod.pl",570],["megadrive-emulator.com",571],["tvhay.*",[572,573]],["animesaga.in",574],["moviesapi.club",574],["bestx.stream",574],["watchx.top",574],["digimanie.cz",575],["svethardware.cz",575],["srvy.ninja",576],["cnn.com",[578,579,580]],["news.bg",581],["edmdls.com",582],["freshremix.net",582],["scenedl.org",582],["trakt.tv",583],["client.falixnodes.net",[584,585]],["shroomers.app",586],["classicalradio.com",587],["di.fm",587],["jazzradio.com",587],["radiotunes.com",587],["rockradio.com",587],["zenradio.com",587],["getthit.com",588],["techedubyte.com",589],["soccerinhd.com",589],["movie-th.tv",590],["iwanttfc.com",591],["nutraingredients-asia.com",592],["nutraingredients-latam.com",592],["nutraingredients-usa.com",592],["nutraingredients.com",592],["ozulscansen.com",593],["nexusmods.com",594],["lookmovie.*",595],["lookmovie2.to",595],["biletomat.pl",597],["hextank.io",[598,599]],["filmizlehdfilm.com",[600,601,602,603]],["filmizletv.*",[600,601,602,603]],["fullfilmizle.cc",[600,601,602,603]],["gofilmizle.net",[600,601,602,603]],["btvplus.bg",605],["sagewater.com",606],["redlion.net",606],["filmweb.pl",[607,608]],["satdl.com",609],["vidstreaming.xyz",610],["everand.com",611],["myradioonline.pl",612],["cbs.com",613],["paramountplus.com",613],["fullxh.com",614],["galleryxh.site",614],["megaxh.com",614],["movingxh.world",614],["seexh.com",614],["unlockxh4.com",614],["valuexh.life",614],["xhaccess.com",614],["xhadult2.com",614],["xhadult3.com",614],["xhadult4.com",614],["xhadult5.com",614],["xhamster.*",614],["xhamster1.*",614],["xhamster10.*",614],["xhamster11.*",614],["xhamster12.*",614],["xhamster13.*",614],["xhamster14.*",614],["xhamster15.*",614],["xhamster16.*",614],["xhamster17.*",614],["xhamster18.*",614],["xhamster19.*",614],["xhamster20.*",614],["xhamster2.*",614],["xhamster3.*",614],["xhamster4.*",614],["xhamster42.*",614],["xhamster46.com",614],["xhamster5.*",614],["xhamster7.*",614],["xhamster8.*",614],["xhamsterporno.mx",614],["xhbig.com",614],["xhbranch5.com",614],["xhchannel.com",614],["xhdate.world",614],["xhday.com",614],["xhday1.com",614],["xhlease.world",614],["xhmoon5.com",614],["xhofficial.com",614],["xhopen.com",614],["xhplanet1.com",614],["xhplanet2.com",614],["xhreal2.com",614],["xhreal3.com",614],["xhspot.com",614],["xhtotal.com",614],["xhtree.com",614],["xhvictory.com",614],["xhwebsite.com",614],["xhwebsite2.com",614],["xhwebsite5.com",614],["xhwide1.com",614],["xhwide2.com",614],["xhwide5.com",614],["file-upload.net",616],["acortalo.*",[617,618,619,620]],["acortar.*",[617,618,619,620]],["megadescarga.net",[617,618,619,620]],["megadescargas.net",[617,618,619,620]],["hentaihaven.xxx",621],["jacquieetmicheltv2.net",623],["a2zapk.*",624],["fcportables.com",[625,626]],["emurom.net",627],["freethesaurus.com",[628,629]],["thefreedictionary.com",[628,629]],["oeffentlicher-dienst.info",630],["im9.eu",631],["dcdlplayer8a06f4.xyz",632],["ultimate-guitar.com",633],["claimbits.net",634],["sexyscope.net",635],["kickassanime.*",636],["recherche-ebook.fr",637],["virtualdinerbot.com",637],["zonebourse.com",638],["pink-sluts.net",639],["andhrafriends.com",640],["benzinpreis.de",641],["turtleviplay.xyz",642],["defenseone.com",643],["govexec.com",643],["nextgov.com",643],["route-fifty.com",643],["sharing.wtf",644],["wetter3.de",645],["esportivos.fun",646],["cosmonova-broadcast.tv",647],["hartvannederland.nl",648],["shownieuws.nl",648],["vandaaginside.nl",648],["rock.porn",[649,650]],["videzz.net",[651,652]],["ezaudiobookforsoul.com",653],["club386.com",654],["decompiler.com",[655,656]],["littlebigsnake.com",657],["easyfun.gg",658],["smailpro.com",659],["ilgazzettino.it",660],["ilmessaggero.it",660],["3bmeteo.com",[661,662]],["mconverter.eu",663],["lover937.net",664],["10gb.vn",665],["pes6.es",666],["tactics.tools",[667,668]],["boundhub.com",669],["alocdnnetu.xyz",670],["reliabletv.me",671],["jakondo.ru",672],["filecrypt.*",673],["wired.com",675],["spankbang.*",[676,677,678,718,719]],["hulu.com",[679,680,681]],["hanime.tv",682],["nhentai.net",[683,684,685]],["anonymfile.com",686],["gofile.to",686],["dotycat.com",687],["rateyourmusic.com",688],["reporterpb.com.br",689],["blog-dnz.com",691],["18adultgames.com",692],["colnect.com",[693,694]],["adultgamesworld.com",695],["bgmiupdate.com.in",696],["reviewdiv.com",697],["parametric-architecture.com",698],["laurelberninteriors.com",[699,721]],["voiceofdenton.com",700],["concealednation.org",700],["askattest.com",702],["opensubtitles.com",703],["savefiles.com",704],["streamup.ws",705],["goodstream.one",706],["lecrabeinfo.net",707],["cerberusapp.com",708],["smashkarts.io",709],["beamng.wesupply.cx",710],["www.google.*",711],["tacobell.com",712],["zefoy.com",713],["cnet.com",714],["natgeotv.com",717],["globo.com",720],["wayfair.com",722]]);
const exceptionsMap = new Map([["cloudflare.com",[0]],["pingit.com",[171]],["loan.bgmi32bitapk.in",[292]],["lookmovie.studio",[595]]]);
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
