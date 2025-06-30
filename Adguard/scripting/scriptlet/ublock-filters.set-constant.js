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
const argsList = [["console.clear","undefined"],["aclib.runInPagePush","noopFunc"],["adBlockDetected","undefined"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["googletag.cmd","{}"],["_aps","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["google.ima.settings.setDisableFlashAds","noopFunc"],["pa.privacy","{}"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505","{}"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["Object.prototype.que","noopFunc"],["Object.prototype.que.push","noopFunc"],["ga.sendGaEvent","noopFunc"],["adobe","{}"],["MT","{}"],["MT.track","noopFunc"],["ClickOmniPartner","noopFunc"],["adex","{}"],["adex.getAdexUser","noopFunc"],["Adkit","noopFunc"],["Object.prototype.shouldExpectGoogleCMP","false"],["apntag.refresh","noopFunc"],["pa.sendEvent","noopFunc"],["Munchkin","{}"],["Munchkin.init","noopFunc"],["ttd_dom_ready","noopFunc"],["ramp","undefined"],["appInfo.snowplow.trackSelfDescribingEvent","noopFunc"],["_vwo_code.init","noopFunc"],["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["console.clear","noopFunc"],["console.log","noopFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["console.clear","trueFunc"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["check_adblock","true"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["String.prototype.charCodeAt","trueFunc"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["openPopunder","noopFunc"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["CaptchmeState.adb","undefined"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["N_BetterJsPop.object","{}"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["HTMLAnchorElement.prototype.click","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["check","true"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["runAdBlocker","false"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["cnbc.canShowAds","true"],["ue_adb_chk","1"],["firefaucet","true"],["cRAds","true"],["uas","[]"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["foundation.adPlayer.bitmovin","{}"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["Object.prototype.adReinsertion","noopFunc"],["getHomadConfig","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["ulp_noadb","true"],["Object.prototype.adblock_detected","false"],["timeSec","0"],["adsbygoogle.loaded","true"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["Adv_ab","false"],["sgpbCanRunAds","true"],["document.hidden","false"],["document.hasFocus","trueFunc"],["hasFocus","trueFunc"],["navigator.brave","undefined"],["Object.prototype.isAllAdClose","true"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["navigator.webkitTemporaryStorage.queryUsageAndQuota","noopFunc"],["document.onkeydown","noopFunc"],["showadas","true"],["alert","throwFunc"],["iktimer","0"],["aSl.gcd","0"],["window.adLink","null"],["detectedAdblock","undefined"],["isTabActive","true"],["clicked","2"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["flashvars.mlogo",""],["vpPrerollVideo","undefined"],["PlayerConfig.config.CustomAdSetting","[]"],["PlayerConfig.trusted","true"],["PlayerConfig.config.AffiliateAdViewLevel","3"],["hold_click","false"],["tie.ad_blocker_detector","false"],["admiral","noopFunc"],["gnt.u.adfree","true"],["__INITIAL_DATA__.siteData.admiralScript"],["objAd.loadAdShield","noopFunc"],["window.myAd.runAd","noopFunc"],["detectAdBlock","noopFunc"],["__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["document.ontouchend","null"],["document.onclick","null"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["xv_ad_block","0"],["openWindow","noopFunc"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["showada","true"],["showax","true"],["p18","undefined"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["Object.prototype.adblockFound","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["xv.sda.pp.init","noopFunc"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["ad_link",""],["penciBlocksArray","[]"],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["D4zz","noopFunc"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["tv3Cmp.ConsentGiven","true"],["countDownDate","0"],["setupSkin","noopFunc"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["td_ad_background_click_link","undefined"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["puShown1","true"],["passthetest","true"],["pandaAdviewValidate","true"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["sssp","emptyObj"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["adSettings","[]"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["isadb","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["googletag","true"],["tOS2","150"],["checkAdBlocker","noopFunc"],["navigator.standalone","true"],["ShowAdvertising","{}"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["feedBack.showAffilaePromo","noopFunc"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["HTMLScriptElement.prototype.onerror","null"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["window.adngin","{}"],["amzn_aps_csm","{}"],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["sharedController.adblockDetector","noopFunc"],["checkAdsStatus","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["checkAdBlockeraz","noopFunc"],["blockingAds","false"],["Yii2App.playbackTimeout","0"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["powerAPITag","emptyObj"],["playerEnhancedConfig.run","throwFunc"],["aoAdBlockDetected","false"],["rodo.checkIsDidomiConsent","noopFunc"],["rodo.waitForConsent","noopPromiseResolve"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["hasAdBlocker","false"],["initials.yld-pdpopunder",""],["download_click","true"],["advertisement3","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["dvsize","52"],["majorse","true"],["completed","1"],["testerli","false"],["w87.abd","noopFunc"],["document.referrer",""],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["one_time","1"],["consentGiven","true"],["playID","1"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["malisx","true"],["alim","true"],["ADS.isBannersEnabled","false"],["EASYFUN_ADS_CAN_RUN","true"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["detectedAdblock","noopFunc"],["Object.prototype.DetectByGoogleAd","noopFunc"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["NativeAd","noopFunc"],["Blob","noopFunc"],["window.navigator.brave","undefined"],["HTMLScriptElement.prototype.onerror","undefined"],["isAdblock","false"],["openPop","noopFunc"],["attachEvent","trueFunc"],["cns.library","true"],["BJSShowUnder","{}"],["BJSShowUnder.bindTo","noopFunc"],["BJSShowUnder.add","noopFunc"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["ABLK","false"],["countDown","0"],["runCheck","noopFunc"],["adsSlotRenderEndSeen","true"],["showModal","noopFunc"],["flashvars.mlogo_link",""],["isAdBlocked","noopFunc"],["URLlist","[]"],["aaw","{}"],["aaw.processAdsOnPage","noopFunc"],["doOpen","undefined"],["HTMLImageElement.prototype.onerror","undefined"],["FOXIZ_MAIN_SCRIPT.siteAccessDetector","noopFunc"],["openAdBlockPopup","noopFunc"],["Object.prototype._adsDisabled","true"],["advanced_ads_check_adblocker","noopFunc"],["canRunAds","1"],["attestHasAdBlockerActivated","true"],["extInstalled","true"],["SaveFiles.add","noopFunc"],["detectSandbox","noopFunc"],["adbon","0"],["LCI.adBlockDetectorEnabled","false"],["stoCazzo","true"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["Object.prototype.updateModifiedCommerceUrl","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["Visitor","{}"],["send_gravity_event","noopFunc"],["send_recommendation_event","noopFunc"],["libAnalytics.data.get","noopFunc"],["adthrive._components.start","noopFunc"],["navigator.sendBeacon","noopFunc"]];
const hostnamesMap = new Map([["jilliandescribecompany.com",0],["gogoanime.*",[0,195]],["adrianmissionminute.com",0],["alejandrocenturyoil.com",0],["alleneconomicmatter.com",0],["apinchcaseation.com",0],["bethshouldercan.com",0],["bigclatterhomesguideservice.com",0],["bradleyviewdoctor.com",0],["brittneystandardwestern.com",0],["brookethoughi.com",0],["brucevotewithin.com",0],["cindyeyefinal.com",0],["denisegrowthwide.com",0],["diananatureforeign.com",0],["donaldlineelse.com",0],["edwardarriveoften.com",0],["erikcoldperson.com",0],["evelynthankregion.com",0],["graceaddresscommunity.com",0],["heatherdiscussionwhen.com",0],["heatherwholeinvolve.com",0],["housecardsummerbutton.com",0],["jamessoundcost.com",0],["jamesstartstudent.com",0],["jamiesamewalk.com",0],["jasminetesttry.com",0],["jasonresponsemeasure.com",0],["jayservicestuff.com",0],["jennifercertaindevelopment.com",0],["jessicaglassauthor.com",0],["johnalwayssame.com",0],["johntryopen.com",0],["jonathansociallike.com",0],["josephseveralconcern.com",0],["kellywhatcould.com",0],["kennethofficialitem.com",0],["kristiesoundsimply.com",0],["lisatrialidea.com",0],["lorimuchbenefit.com",0],["loriwithinfamily.com",0],["lukecomparetwo.com",0],["mariatheserepublican.com",0],["markstyleall.com",0],["michaelapplysome.com",0],["morganoperationface.com",0],["nathanfromsubject.com",0],["nectareousoverelate.com",0],["paulkitchendark.com",0],["rebeccaneverbase.com",0],["richardsignfish.com",0],["roberteachfinal.com",0],["robertordercharacter.com",0],["robertplacespace.com",0],["ryanagoinvolve.com",0],["sandratableother.com",0],["sandrataxeight.com",0],["seanshowcould.com",0],["sethniceletter.com",0],["shannonpersonalcost.com",0],["sharonwhiledemocratic.com",0],["stevenimaginelittle.com",0],["strawberriesporail.com",0],["susanhavekeep.com",0],["timberwoodanotia.com",0],["tinycat-voe-fashion.com",0],["toddpartneranimal.com",0],["troyyourlead.com",0],["uptodatefinishconference.com",0],["uptodatefinishconferenceroom.com",0],["vincentincludesuccessful.com",0],["voe.sx",0],["maxfinishseveral.com",0],["voe.sx>>",0],["javboys.tv>>",0],["freeplayervideo.com",0],["nazarickol.com",0],["player-cdn.com",0],["playhydrax.com",[0,409,410]],["rabbitstream.net",0],["fmovies.*",0],["japscan.lol",1],["u26bekrb.fun",2],["br.de",3],["indeed.com",4],["pasteboard.co",5],["clickhole.com",6],["deadspin.com",6],["gizmodo.com",6],["jalopnik.com",6],["jezebel.com",6],["kotaku.com",6],["lifehacker.com",6],["splinternews.com",6],["theinventory.com",6],["theonion.com",6],["theroot.com",6],["thetakeout.com",6],["pewresearch.org",6],["los40.com",[7,8]],["as.com",8],["telegraph.co.uk",[9,10]],["poweredbycovermore.com",[9,62]],["lumens.com",[9,62]],["verizon.com",11],["humanbenchmark.com",12],["politico.com",13],["officedepot.co.cr",[14,15]],["officedepot.*",[16,17]],["usnews.com",18],["coolmathgames.com",[19,287,288,289]],["video.gazzetta.it",[20,21]],["oggi.it",[20,21]],["manoramamax.com",20],["factable.com",22],["thedailybeast.com",23],["zee5.com",24],["gala.fr",25],["geo.fr",25],["voici.fr",25],["gloucestershirelive.co.uk",26],["arsiv.mackolik.com",27],["jacksonguitars.com",28],["scandichotels.com",29],["stylist.co.uk",30],["nettiauto.com",31],["thaiairways.com",[32,33]],["cerbahealthcare.it",[34,35]],["futura-sciences.com",[34,52]],["toureiffel.paris",34],["campusfrance.org",[34,146]],["tiendaenlinea.claro.com.ni",[36,37]],["tieba.baidu.com",38],["fandom.com",[39,40,348]],["grasshopper.com",[41,42]],["epson.com.cn",[43,44,45,46]],["oe24.at",[47,48]],["szbz.de",47],["platform.autods.com",[49,50]],["kcra.com",51],["wcvb.com",51],["sportdeutschland.tv",51],["citibank.com.sg",53],["uol.com.br",[54,55,56,57,58]],["gazzetta.gr",59],["digicol.dpm.org.cn",[60,61]],["virginmediatelevision.ie",63],["larazon.es",[64,65]],["waitrosecellar.com",[66,67,68]],["kicker.de",[69,390]],["sharpen-free-design-generator.netlify.app",[70,71]],["help.cashctrl.com",[72,73]],["gry-online.pl",74],["vidaextra.com",75],["commande.rhinov.pro",[76,77]],["ecom.wixapps.net",[76,77]],["tipranks.com",[78,79]],["iceland.co.uk",[80,81,82]],["socket.pearsoned.com",83],["tntdrama.com",[84,85]],["trutv.com",[84,85]],["mobile.de",[86,87]],["ioe.vn",[88,89]],["geiriadur.ac.uk",[88,92]],["welsh-dictionary.ac.uk",[88,92]],["bikeportland.org",[90,91]],["biologianet.com",[55,56,57]],["10play.com.au",[93,94]],["sunshine-live.de",[95,96]],["whatismyip.com",[97,98]],["myfitnesspal.com",99],["netoff.co.jp",[100,101]],["bluerabbitrx.com",[100,101]],["foundit.*",[102,103]],["clickjogos.com.br",104],["bristan.com",[105,106]],["zillow.com",107],["share.hntv.tv",[108,109,110,111]],["forum.dji.com",[108,111]],["unionpayintl.com",[108,110]],["streamelements.com",108],["optimum.net",[112,113]],["hdfcfund.com",114],["user.guancha.cn",[115,116]],["sosovalue.com",117],["bandyforbundet.no",[118,119]],["tatacommunications.com",120],["kb.arlo.com",[120,152]],["suamusica.com.br",[121,122,123]],["macrotrends.net",[124,125]],["code.world",126],["smartcharts.net",126],["topgear.com",127],["eservice.directauto.com",[128,129]],["nbcsports.com",130],["standard.co.uk",131],["pruefernavi.de",[132,133]],["speedtest.net",[134,135]],["17track.net",136],["visible.com",137],["hagerty.com",[138,139]],["marketplace.nvidia.com",140],["kino.de",[141,142]],["9now.nine.com.au",143],["worldstar.com",144],["prisjakt.no",145],["developer.arm.com",[147,148]],["sterkinekor.com",149],["iogames.space",150],["id.condenast.com",151],["m.youtube.com",[153,154,155,156]],["music.youtube.com",[153,154,155,156]],["tv.youtube.com",[153,154,155,156]],["www.youtube.com",[153,154,155,156]],["youtubekids.com",[153,154,155,156]],["youtube-nocookie.com",[153,154,155,156]],["eu-proxy.startpage.com",[153,154,156]],["timesofindia.indiatimes.com",157],["economictimes.indiatimes.com",158],["motherless.com",159],["sueddeutsche.de",160],["watchanimesub.net",161],["wcoanimesub.tv",161],["wcoforever.net",161],["freeviewmovies.com",161],["filehorse.com",161],["guidetnt.com",161],["starmusiq.*",161],["sp-today.com",161],["linkvertise.com",161],["eropaste.net",161],["getpaste.link",161],["sharetext.me",161],["wcofun.*",161],["note.sieuthuthuat.com",161],["gadgets.es",[161,457]],["amateurporn.co",[161,257]],["wiwo.de",162],["primewire.*",163],["streanplay.*",[163,164]],["alphaporno.com",[163,541]],["porngem.com",163],["shortit.pw",[163,241]],["familyporn.tv",163],["sbplay.*",163],["id45.cyou",163],["85tube.com",[163,225]],["milfnut.*",163],["k1nk.co",163],["watchasians.cc",163],["soltoshindo.com",163],["sankakucomplex.com",165],["player.glomex.com",166],["merkur.de",166],["tz.de",166],["sxyprn.*",167],["hqq.*",[168,169]],["waaw.*",[169,170]],["hotpornfile.org",169],["player.tabooporns.com",169],["x69.ovh",169],["wiztube.xyz",169],["younetu.*",169],["multiup.us",169],["peliculas8k.com",[169,170]],["video.q34r.org",169],["czxxx.org",169],["vtplayer.online",169],["vvtplayer.*",169],["netu.ac",169],["netu.frembed.lol",169],["adbull.org",171],["123link.*",171],["adshort.*",171],["mitly.us",171],["linkrex.net",171],["linx.cc",171],["oke.io",171],["linkshorts.*",171],["dz4link.com",171],["adsrt.*",171],["linclik.com",171],["shrt10.com",171],["vinaurl.*",171],["loptelink.com",171],["adfloz.*",171],["cut-fly.com",171],["linkfinal.com",171],["payskip.org",171],["cutpaid.com",171],["linkjust.com",171],["leechpremium.link",171],["icutlink.com",[171,262]],["oncehelp.com",171],["rgl.vn",171],["reqlinks.net",171],["bitlk.com",171],["qlinks.eu",171],["link.3dmili.com",171],["short-fly.com",171],["foxseotools.com",171],["dutchycorp.*",171],["shortearn.*",171],["pingit.*",171],["link.turkdown.com",171],["7r6.com",171],["oko.sh",171],["ckk.ai",171],["fc.lc",171],["fstore.biz",171],["shrink.*",171],["cuts-url.com",171],["eio.io",171],["exe.app",171],["exee.io",171],["exey.io",171],["skincarie.com",171],["exeo.app",171],["tmearn.*",171],["coinlyhub.com",[171,327]],["adsafelink.com",171],["aii.sh",171],["megalink.*",171],["cybertechng.com",[171,342]],["cutdl.xyz",171],["iir.ai",171],["shorteet.com",[171,360]],["miniurl.*",171],["smoner.com",171],["gplinks.*",171],["odisha-remix.com",[171,342]],["xpshort.com",[171,342]],["upshrink.com",171],["clk.*",171],["easysky.in",171],["veganab.co",171],["golink.bloggerishyt.in",171],["birdurls.com",171],["vipurl.in",171],["try2link.com",171],["jameeltips.us",171],["gainl.ink",171],["promo-visits.site",171],["satoshi-win.xyz",[171,376]],["shorterall.com",171],["encurtandourl.com",171],["forextrader.site",171],["postazap.com",171],["cety.app",171],["exego.app",[171,371]],["cutlink.net",171],["cutsy.net",171],["cutyurls.com",171],["cutty.app",171],["cutnet.net",171],["jixo.online",171],["tinys.click",[171,342]],["cpm.icu",171],["panyshort.link",171],["enagato.com",171],["pandaznetwork.com",171],["tpi.li",171],["oii.la",171],["recipestutorials.com",171],["pureshort.*",171],["shrinke.*",171],["shrinkme.*",171],["shrinkforearn.in",171],["oii.io",171],["du-link.in",171],["atglinks.com",171],["thotpacks.xyz",171],["megaurl.in",171],["megafly.in",171],["simana.online",171],["fooak.com",171],["joktop.com",171],["evernia.site",171],["falpus.com",171],["link.paid4link.com",171],["exalink.fun",171],["shortxlinks.com",171],["upfion.com",171],["upfiles.app",171],["upfiles-urls.com",171],["flycutlink.com",[171,342]],["linksly.co",171],["link1s.*",171],["pkr.pw",171],["imagenesderopaparaperros.com",171],["shortenbuddy.com",171],["apksvip.com",171],["4cash.me",171],["namaidani.com",171],["shortzzy.*",171],["teknomuda.com",171],["shorttey.*",[171,326]],["miuiku.com",171],["savelink.site",171],["lite-link.*",171],["adcorto.*",171],["samaa-pro.com",171],["miklpro.com",171],["modapk.link",171],["ccurl.net",171],["linkpoi.me",171],["menjelajahi.com",171],["pewgame.com",171],["haonguyen.top",171],["zshort.*",171],["crazyblog.in",171],["cutearn.net",171],["rshrt.com",171],["filezipa.com",171],["dz-linkk.com",171],["upfiles.*",171],["theblissempire.com",171],["finanzas-vida.com",171],["adurly.cc",171],["paid4.link",171],["link.asiaon.top",171],["go.gets4link.com",171],["linkfly.*",171],["beingtek.com",171],["shorturl.unityassets4free.com",171],["disheye.com",171],["techymedies.com",171],["techysuccess.com",171],["za.gl",[171,277]],["bblink.com",171],["myad.biz",171],["swzz.xyz",171],["vevioz.com",171],["charexempire.com",171],["clk.asia",171],["sturls.com",171],["myshrinker.com",171],["snowurl.com",[171,342]],["netfile.cc",171],["wplink.*",171],["rocklink.in",171],["techgeek.digital",171],["download3s.net",171],["shortx.net",171],["shortawy.com",171],["tlin.me",171],["apprepack.com",171],["up-load.one",171],["bestcash2020.com",171],["adslink.pw",171],["novelssites.com",171],["links.medipost.org",171],["faucetcrypto.net",171],["short.freeltc.top",171],["trxking.xyz",171],["weadown.com",171],["m.bloggingguidance.com",171],["blog.onroid.com",171],["link.codevn.net",171],["upfilesurls.com",171],["link4rev.site",171],["c2g.at",171],["bitcosite.com",[171,555]],["cryptosh.pro",171],["windowslite.net",[171,342]],["viewfr.com",171],["cl1ca.com",171],["4br.me",171],["fir3.net",171],["seulink.*",171],["encurtalink.*",171],["kiddyshort.com",171],["watchmygf.me",[172,196]],["camwhores.*",[172,182,224,225,226]],["camwhorez.tv",[172,182,224,225]],["cambay.tv",[172,204,224,254,256,257,258,259]],["fpo.xxx",[172,204]],["sexemix.com",172],["heavyfetish.com",[172,719]],["thotcity.su",172],["viralxxxporn.com",[172,394]],["tube8.*",[173,174]],["you-porn.com",174],["youporn.*",174],["youporngay.com",174],["youpornru.com",174],["redtube.*",174],["9908ww.com",174],["adelaidepawnbroker.com",174],["bztube.com",174],["hotovs.com",174],["insuredhome.org",174],["nudegista.com",174],["pornluck.com",174],["vidd.se",174],["pornhub.*",[174,315]],["pornhub.com",174],["pornerbros.com",175],["freep.com",175],["porn.com",176],["tune.pk",177],["noticias.gospelmais.com.br",178],["techperiod.com",178],["viki.com",[179,180]],["watch-series.*",181],["watchseries.*",181],["vev.*",181],["vidop.*",181],["vidup.*",181],["sleazyneasy.com",[182,183,184]],["smutr.com",[182,323]],["tktube.com",182],["yourporngod.com",[182,183]],["javbangers.com",[182,446]],["camfox.com",182],["camthots.tv",[182,254]],["shegotass.info",182],["amateur8.com",182],["bigtitslust.com",182],["ebony8.com",182],["freeporn8.com",182],["lesbian8.com",182],["maturetubehere.com",182],["sortporn.com",182],["motherporno.com",[182,183,204,256]],["theporngod.com",[182,183]],["watchdirty.to",[182,225,226,257]],["pornsocket.com",185],["luxuretv.com",186],["porndig.com",[187,188]],["webcheats.com.br",189],["ceesty.com",[190,191]],["gestyy.com",[190,191]],["corneey.com",191],["destyy.com",191],["festyy.com",191],["sh.st",191],["mitaku.net",191],["angrybirdsnest.com",192],["zrozz.com",192],["clix4btc.com",192],["4tests.com",192],["goltelevision.com",192],["news-und-nachrichten.de",192],["laradiobbs.net",192],["urlaubspartner.net",192],["produktion.de",192],["cinemaxxl.de",192],["bladesalvador.com",192],["tempr.email",192],["cshort.org",192],["friendproject.net",192],["covrhub.com",192],["katfile.com",[192,623]],["trust.zone",192],["business-standard.com",192],["planetsuzy.org",193],["empflix.com",194],["1movies.*",[195,201]],["xmovies8.*",195],["masteranime.tv",195],["0123movies.*",195],["gostream.*",195],["gomovies.*",195],["transparentcalifornia.com",196],["deepbrid.com",197],["webnovel.com",198],["streamwish.*",[199,200]],["oneupload.to",200],["wishfast.top",200],["rubystm.com",200],["rubyvid.com",200],["rubyvidhub.com",200],["stmruby.com",200],["streamruby.com",200],["schwaebische.de",202],["8tracks.com",203],["3movs.com",204],["bravoerotica.net",[204,256]],["youx.xxx",204],["camclips.tv",[204,323]],["xtits.*",[204,256]],["camflow.tv",[204,256,257,295,394]],["camhoes.tv",[204,254,256,257,295,394]],["xmegadrive.com",204],["xxxymovies.com",204],["xxxshake.com",204],["gayck.com",204],["xhand.com",[204,256]],["analdin.com",[204,256]],["revealname.com",205],["pouvideo.*",206],["povvideo.*",206],["povw1deo.*",206],["povwideo.*",206],["powv1deo.*",206],["powvibeo.*",206],["powvideo.*",206],["powvldeo.*",206],["golfchannel.com",207],["stream.nbcsports.com",207],["mathdf.com",207],["gamcore.com",208],["porcore.com",208],["porngames.tv",208],["69games.xxx",208],["javmix.app",208],["tecknity.com",209],["haaretz.co.il",210],["haaretz.com",210],["hungama.com",210],["a-o.ninja",210],["anime-odcinki.pl",210],["shortgoo.blogspot.com",210],["tonanmedia.my.id",[210,576]],["yurasu.xyz",210],["isekaipalace.com",210],["plyjam.*",[211,212]],["ennovelas.com",[212,216]],["foxsports.com.au",213],["canberratimes.com.au",213],["thesimsresource.com",214],["fxporn69.*",215],["vipbox.*",216],["viprow.*",216],["ctrl.blog",217],["sportlife.es",218],["finofilipino.org",219],["desbloqueador.*",220],["xberuang.*",221],["teknorizen.*",221],["mysflink.blogspot.com",221],["ashemaletube.*",222],["paktech2.com",222],["assia.tv",223],["assia4.com",223],["assia24.com",223],["cwtvembeds.com",[225,255]],["camlovers.tv",225],["porntn.com",225],["pornissimo.org",225],["sexcams-24.com",[225,257]],["watchporn.to",[225,257]],["camwhorez.video",225],["footstockings.com",[225,226,257]],["xmateur.com",[225,226,257]],["multi.xxx",226],["worldofbitco.in",[227,228]],["weatherx.co.in",[227,228]],["sunbtc.space",227],["subtorrents.*",229],["subtorrents1.*",229],["newpelis.*",229],["pelix.*",229],["allcalidad.*",229],["infomaniakos.*",229],["ojogos.com.br",230],["powforums.com",231],["supforums.com",231],["studybullet.com",231],["usgamer.net",232],["recordonline.com",232],["freebitcoin.win",233],["e-monsite.com",233],["coindice.win",233],["temp-mails.com",234],["freiepresse.de",235],["investing.com",236],["tornadomovies.*",237],["mp3fiber.com",238],["chicoer.com",239],["dailybreeze.com",239],["dailybulletin.com",239],["dailynews.com",239],["delcotimes.com",239],["eastbaytimes.com",239],["macombdaily.com",239],["ocregister.com",239],["pasadenastarnews.com",239],["pe.com",239],["presstelegram.com",239],["redlandsdailyfacts.com",239],["reviewjournal.com",239],["santacruzsentinel.com",239],["saratogian.com",239],["sentinelandenterprise.com",239],["sgvtribune.com",239],["tampabay.com",239],["times-standard.com",239],["theoaklandpress.com",239],["trentonian.com",239],["twincities.com",239],["whittierdailynews.com",239],["bostonherald.com",239],["dailycamera.com",239],["sbsun.com",239],["dailydemocrat.com",239],["montereyherald.com",239],["orovillemr.com",239],["record-bee.com",239],["redbluffdailynews.com",239],["reporterherald.com",239],["thereporter.com",239],["timescall.com",239],["timesheraldonline.com",239],["ukiahdailyjournal.com",239],["dailylocal.com",239],["mercurynews.com",239],["suedkurier.de",240],["anysex.com",242],["icdrama.*",243],["mangasail.*",243],["pornve.com",244],["file4go.*",245],["coolrom.com.au",245],["marie-claire.es",246],["gamezhero.com",246],["flashgirlgames.com",246],["onlinesudoku.games",246],["mpg.football",246],["sssam.com",246],["globalnews.ca",247],["drinksmixer.com",248],["leitesculinaria.com",248],["fupa.net",249],["browardpalmbeach.com",250],["dallasobserver.com",250],["houstonpress.com",250],["miaminewtimes.com",250],["phoenixnewtimes.com",250],["westword.com",250],["nhentai.net",[251,252]],["nowtv.com.tr",253],["caminspector.net",254],["camwhoreshd.com",254],["camgoddess.tv",254],["gay4porn.com",256],["mypornhere.com",256],["mangovideo.*",257],["love4porn.com",257],["thotvids.com",257],["watchmdh.to",257],["celebwhore.com",257],["cluset.com",257],["sexlist.tv",257],["4kporn.xxx",257],["xhomealone.com",257],["lusttaboo.com",[257,518]],["hentai-moon.com",257],["camhub.cc",[257,682]],["mediapason.it",260],["linkspaid.com",260],["tuotromedico.com",260],["neoteo.com",260],["phoneswiki.com",260],["celebmix.com",260],["myneobuxportal.com",260],["oyungibi.com",260],["25yearslatersite.com",260],["jeshoots.com",261],["techhx.com",261],["karanapk.com",261],["flashplayer.fullstacks.net",263],["cloudapps.herokuapp.com",263],["youfiles.herokuapp.com",263],["texteditor.nsspot.net",263],["temp-mail.org",264],["asianclub.*",265],["javhdporn.net",265],["vidmoly.to",266],["comnuan.com",267],["veedi.com",268],["battleboats.io",268],["anitube.*",269],["fruitlab.com",269],["haddoz.net",269],["streamingcommunity.*",269],["garoetpos.com",269],["stiletv.it",270],["mixdrop.*",271],["hqtv.biz",272],["liveuamap.com",273],["muvibg.com",273],["audycje.tokfm.pl",274],["shush.se",275],["allkpop.com",276],["empire-anime.*",[277,571,572,573,574,575]],["empire-streaming.*",[277,571,572,573]],["empire-anime.com",[277,571,572,573]],["empire-streamz.fr",[277,571,572,573]],["empire-stream.*",[277,571,572,573]],["pickcrackpasswords.blogspot.com",278],["kfrfansub.com",279],["thuglink.com",279],["voipreview.org",279],["illicoporno.com",280],["lavoixdux.com",280],["tonpornodujour.com",280],["jacquieetmichel.net",280],["swame.com",280],["vosfemmes.com",280],["voyeurfrance.net",280],["jacquieetmicheltv.net",[280,630,631]],["pogo.com",281],["cloudvideo.tv",282],["legionjuegos.org",283],["legionpeliculas.org",283],["legionprogramas.org",283],["16honeys.com",284],["elespanol.com",285],["remodelista.com",286],["audiofanzine.com",290],["uploadev.*",291],["developerinsider.co",292],["thehindu.com",293],["cambro.tv",[294,295]],["boobsradar.com",[295,394,696]],["nibelungen-kurier.de",296],["adfoc.us",297],["tea-coffee.net",297],["spatsify.com",297],["newedutopics.com",297],["getviralreach.in",297],["edukaroo.com",297],["funkeypagali.com",297],["careersides.com",297],["nayisahara.com",297],["wikifilmia.com",297],["infinityskull.com",297],["viewmyknowledge.com",297],["iisfvirtual.in",297],["starxinvestor.com",297],["jkssbalerts.com",297],["sahlmarketing.net",297],["filmypoints.in",297],["fitnessholic.net",297],["moderngyan.com",297],["sattakingcharts.in",297],["freshbhojpuri.com",297],["bankshiksha.in",297],["earn.mpscstudyhub.com",297],["earn.quotesopia.com",297],["money.quotesopia.com",297],["best-mobilegames.com",297],["learn.moderngyan.com",297],["bharatsarkarijobalert.com",297],["quotesopia.com",297],["creditsgoal.com",297],["bgmi32bitapk.in",297],["techacode.com",297],["trickms.com",297],["ielts-isa.edu.vn",297],["loan.punjabworks.com",297],["rokni.xyz",297],["keedabankingnews.com",297],["sptfy.be",297],["mcafee-com.com",[297,371]],["pianetamountainbike.it",298],["barchart.com",299],["modelisme.com",300],["parasportontario.ca",300],["prescottenews.com",300],["nrj-play.fr",301],["hackingwithreact.com",302],["gutekueche.at",303],["eplfootballmatch.com",304],["ancient-origins.*",304],["peekvids.com",305],["playvids.com",305],["pornflip.com",305],["redensarten-index.de",306],["vw-page.com",307],["viz.com",[308,309]],["0rechner.de",310],["configspc.com",311],["xopenload.me",311],["uptobox.com",311],["uptostream.com",311],["japgay.com",312],["mega-debrid.eu",313],["dreamdth.com",314],["diaridegirona.cat",316],["diariodeibiza.es",316],["diariodemallorca.es",316],["diarioinformacion.com",316],["eldia.es",316],["emporda.info",316],["farodevigo.es",316],["laopinioncoruna.es",316],["laopiniondemalaga.es",316],["laopiniondemurcia.es",316],["laopiniondezamora.es",316],["laprovincia.es",316],["levante-emv.com",316],["mallorcazeitung.es",316],["regio7.cat",316],["superdeporte.es",316],["playpaste.com",317],["cnbc.com",318],["primevideo.com",319],["read.amazon.*",[319,707]],["firefaucet.win",320],["74k.io",[321,322]],["fullhdxxx.com",324],["pornclassic.tube",325],["tubepornclassic.com",325],["etonline.com",326],["creatur.io",326],["lookcam.*",326],["drphil.com",326],["urbanmilwaukee.com",326],["lootlinks.*",326],["ontiva.com",326],["hideandseek.world",326],["myabandonware.com",326],["kendam.com",326],["wttw.com",326],["synonyms.com",326],["definitions.net",326],["hostmath.com",326],["camvideoshub.com",326],["minhaconexao.com.br",326],["home-made-videos.com",328],["amateur-couples.com",328],["slutdump.com",328],["dpstream.*",329],["produsat.com",330],["bluemediafiles.*",331],["12thman.com",332],["acusports.com",332],["atlantic10.com",332],["auburntigers.com",332],["baylorbears.com",332],["bceagles.com",332],["bgsufalcons.com",332],["big12sports.com",332],["bigten.org",332],["bradleybraves.com",332],["butlersports.com",332],["cmumavericks.com",332],["conferenceusa.com",332],["cyclones.com",332],["dartmouthsports.com",332],["daytonflyers.com",332],["dbupatriots.com",332],["dbusports.com",332],["denverpioneers.com",332],["fduknights.com",332],["fgcuathletics.com",332],["fightinghawks.com",332],["fightingillini.com",332],["floridagators.com",332],["friars.com",332],["friscofighters.com",332],["gamecocksonline.com",332],["goarmywestpoint.com",332],["gobison.com",332],["goblueraiders.com",332],["gobobcats.com",332],["gocards.com",332],["gocreighton.com",332],["godeacs.com",332],["goexplorers.com",332],["goetbutigers.com",332],["gofrogs.com",332],["gogriffs.com",332],["gogriz.com",332],["golobos.com",332],["gomarquette.com",332],["gopack.com",332],["gophersports.com",332],["goprincetontigers.com",332],["gopsusports.com",332],["goracers.com",332],["goshockers.com",332],["goterriers.com",332],["gotigersgo.com",332],["gousfbulls.com",332],["govandals.com",332],["gowyo.com",332],["goxavier.com",332],["gozags.com",332],["gozips.com",332],["griffinathletics.com",332],["guhoyas.com",332],["gwusports.com",332],["hailstate.com",332],["hamptonpirates.com",332],["hawaiiathletics.com",332],["hokiesports.com",332],["huskers.com",332],["icgaels.com",332],["iuhoosiers.com",332],["jsugamecocksports.com",332],["longbeachstate.com",332],["loyolaramblers.com",332],["lrtrojans.com",332],["lsusports.net",332],["morrisvillemustangs.com",332],["msuspartans.com",332],["muleriderathletics.com",332],["mutigers.com",332],["navysports.com",332],["nevadawolfpack.com",332],["niuhuskies.com",332],["nkunorse.com",332],["nuhuskies.com",332],["nusports.com",332],["okstate.com",332],["olemisssports.com",332],["omavs.com",332],["ovcsports.com",332],["owlsports.com",332],["purduesports.com",332],["redstormsports.com",332],["richmondspiders.com",332],["sfajacks.com",332],["shupirates.com",332],["siusalukis.com",332],["smcgaels.com",332],["smumustangs.com",332],["soconsports.com",332],["soonersports.com",332],["themw.com",332],["tulsahurricane.com",332],["txst.com",332],["txstatebobcats.com",332],["ubbulls.com",332],["ucfknights.com",332],["ucirvinesports.com",332],["uconnhuskies.com",332],["uhcougars.com",332],["uicflames.com",332],["umterps.com",332],["uncwsports.com",332],["unipanthers.com",332],["unlvrebels.com",332],["uoflsports.com",332],["usdtoreros.com",332],["utahstateaggies.com",332],["utepathletics.com",332],["utrockets.com",332],["uvmathletics.com",332],["uwbadgers.com",332],["villanova.com",332],["wkusports.com",332],["wmubroncos.com",332],["woffordterriers.com",332],["1pack1goal.com",332],["bcuathletics.com",332],["bubraves.com",332],["goblackbears.com",332],["golightsgo.com",332],["gomcpanthers.com",332],["goutsa.com",332],["mercerbears.com",332],["pirateblue.com",332],["pirateblue.net",332],["pirateblue.org",332],["quinnipiacbobcats.com",332],["towsontigers.com",332],["tribeathletics.com",332],["tribeclub.com",332],["utepminermaniacs.com",332],["utepminers.com",332],["wkutickets.com",332],["aopathletics.org",332],["atlantichockeyonline.com",332],["bigsouthnetwork.com",332],["bigsouthsports.com",332],["chawomenshockey.com",332],["dbupatriots.org",332],["drakerelays.org",332],["ecac.org",332],["ecacsports.com",332],["emueagles.com",332],["emugameday.com",332],["gculopes.com",332],["godrakebulldog.com",332],["godrakebulldogs.com",332],["godrakebulldogs.net",332],["goeags.com",332],["goislander.com",332],["goislanders.com",332],["gojacks.com",332],["gomacsports.com",332],["gseagles.com",332],["hubison.com",332],["iowaconference.com",332],["ksuowls.com",332],["lonestarconference.org",332],["mascac.org",332],["midwestconference.org",332],["mountaineast.org",332],["niu-pack.com",332],["nulakers.ca",332],["oswegolakers.com",332],["ovcdigitalnetwork.com",332],["pacersports.com",332],["rmacsports.org",332],["rollrivers.com",332],["samfordsports.com",332],["uncpbraves.com",332],["usfdons.com",332],["wiacsports.com",332],["alaskananooks.com",332],["broncathleticfund.com",332],["cameronaggies.com",332],["columbiacougars.com",332],["etownbluejays.com",332],["gobadgers.ca",332],["golancers.ca",332],["gometrostate.com",332],["gothunderbirds.ca",332],["kentstatesports.com",332],["lehighsports.com",332],["lopers.com",332],["lycoathletics.com",332],["lycomingathletics.com",332],["maraudersports.com",332],["mauiinvitational.com",332],["msumavericks.com",332],["nauathletics.com",332],["nueagles.com",332],["nwusports.com",332],["oceanbreezenyc.org",332],["patriotathleticfund.com",332],["pittband.com",332],["principiaathletics.com",332],["roadrunnersathletics.com",332],["sidearmsocial.com",332],["snhupenmen.com",332],["stablerarena.com",332],["stoutbluedevils.com",332],["uwlathletics.com",332],["yumacs.com",332],["collegefootballplayoff.com",332],["csurams.com",332],["cubuffs.com",332],["gobearcats.com",332],["gohuskies.com",332],["mgoblue.com",332],["osubeavers.com",332],["pittsburghpanthers.com",332],["rolltide.com",332],["texassports.com",332],["thesundevils.com",332],["uclabruins.com",332],["wvuathletics.com",332],["wvusports.com",332],["arizonawildcats.com",332],["calbears.com",332],["cuse.com",332],["georgiadogs.com",332],["goducks.com",332],["goheels.com",332],["gostanford.com",332],["insidekstatesports.com",332],["insidekstatesports.info",332],["insidekstatesports.net",332],["insidekstatesports.org",332],["k-stateathletics.com",332],["k-statefootball.net",332],["k-statefootball.org",332],["k-statesports.com",332],["k-statesports.net",332],["k-statesports.org",332],["k-statewomenshoops.com",332],["k-statewomenshoops.net",332],["k-statewomenshoops.org",332],["kstateathletics.com",332],["kstatefootball.net",332],["kstatefootball.org",332],["kstatesports.com",332],["kstatewomenshoops.com",332],["kstatewomenshoops.net",332],["kstatewomenshoops.org",332],["ksuathletics.com",332],["ksusports.com",332],["scarletknights.com",332],["showdownforrelief.com",332],["syracusecrunch.com",332],["texastech.com",332],["theacc.com",332],["ukathletics.com",332],["usctrojans.com",332],["utahutes.com",332],["utsports.com",332],["wsucougars.com",332],["vidlii.com",[332,357]],["tricksplit.io",332],["fangraphs.com",333],["stern.de",334],["geo.de",334],["brigitte.de",334],["tvspielfilm.de",[335,336,337,338]],["tvtoday.de",[335,336,337,338]],["chip.de",[335,336,337,338]],["focus.de",[335,336,337,338]],["fitforfun.de",[335,336,337,338]],["n-tv.de",339],["player.rtl2.de",340],["planetaminecraft.com",341],["cravesandflames.com",342],["codesnse.com",342],["flyad.vip",342],["lapresse.ca",343],["kolyoom.com",344],["ilovephd.com",344],["negumo.com",345],["games.wkb.jp",[346,347]],["kenshi.fandom.com",349],["hausbau-forum.de",350],["homeairquality.org",350],["faucettronn.click",350],["fake-it.ws",351],["laksa19.github.io",352],["1shortlink.com",353],["u-s-news.com",354],["luscious.net",355],["makemoneywithurl.com",356],["junkyponk.com",356],["healthfirstweb.com",356],["vocalley.com",356],["yogablogfit.com",356],["howifx.com",[356,540]],["en.financerites.com",356],["mythvista.com",356],["livenewsflix.com",356],["cureclues.com",356],["apekite.com",356],["enit.in",356],["iammagnus.com",357],["dailyvideoreports.net",357],["unityassets4free.com",357],["docer.*",358],["resetoff.pl",358],["sexodi.com",358],["cdn77.org",359],["3sexporn.com",360],["momxxxsex.com",360],["myfreevintageporn.com",360],["penisbuyutucum.net",360],["ujszo.com",361],["newsmax.com",362],["nadidetarifler.com",363],["siz.tv",363],["suzylu.co.uk",[364,365]],["onworks.net",366],["yabiladi.com",366],["downloadsoft.net",367],["newsobserver.com",368],["arkadiumhosted.com",368],["testlanguages.com",369],["newsinlevels.com",369],["videosinlevels.com",369],["catcare.store",370],["starkroboticsfrc.com",371],["sinonimos.de",371],["antonimos.de",371],["quesignifi.ca",371],["tiktokrealtime.com",371],["tiktokcounter.net",371],["tpayr.xyz",371],["poqzn.xyz",371],["ashrfd.xyz",371],["rezsx.xyz",371],["tryzt.xyz",371],["ashrff.xyz",371],["rezst.xyz",371],["dawenet.com",371],["erzar.xyz",371],["waezm.xyz",371],["waezg.xyz",371],["blackwoodacademy.org",371],["cryptednews.space",371],["vivuq.com",371],["swgop.com",371],["vbnmll.com",371],["telcoinfo.online",371],["dshytb.com",371],["btcbitco.in",[371,375]],["btcsatoshi.net",371],["cempakajaya.com",371],["crypto4yu.com",371],["readbitcoin.org",371],["wiour.com",371],["finish.addurl.biz",371],["aiimgvlog.fun",[371,378]],["laweducationinfo.com",371],["savemoneyinfo.com",371],["worldaffairinfo.com",371],["godstoryinfo.com",371],["successstoryinfo.com",371],["cxissuegk.com",371],["learnmarketinfo.com",371],["bhugolinfo.com",371],["armypowerinfo.com",371],["rsadnetworkinfo.com",371],["rsinsuranceinfo.com",371],["rsfinanceinfo.com",371],["rsgamer.app",371],["rssoftwareinfo.com",371],["rshostinginfo.com",371],["rseducationinfo.com",371],["phonereviewinfo.com",371],["makeincomeinfo.com",371],["gknutshell.com",371],["vichitrainfo.com",371],["workproductivityinfo.com",371],["dopomininfo.com",371],["hostingdetailer.com",371],["fitnesssguide.com",371],["tradingfact4u.com",371],["cryptofactss.com",371],["softwaredetail.com",371],["artoffocas.com",371],["insurancesfact.com",371],["travellingdetail.com",371],["advertisingexcel.com",371],["allcryptoz.net",371],["batmanfactor.com",371],["beautifulfashionnailart.com",371],["crewbase.net",371],["documentaryplanet.xyz",371],["crewus.net",371],["gametechreviewer.com",371],["midebalonu.net",371],["misterio.ro",371],["phineypet.com",371],["seory.xyz",371],["shinbhu.net",371],["shinchu.net",371],["substitutefor.com",371],["talkforfitness.com",371],["thefitbrit.co.uk",371],["thumb8.net",371],["thumb9.net",371],["topcryptoz.net",371],["uniqueten.net",371],["ultraten.net",371],["exactpay.online",371],["quins.us",371],["kiddyearner.com",371],["imagereviser.com",372],["tech.pubghighdamage.com",373],["jiocinema.com",373],["rapid-cloud.co",373],["uploadmall.com",373],["4funbox.com",374],["nephobox.com",374],["1024tera.com",374],["terabox.*",374],["blog.cryptowidgets.net",375],["blog.insurancegold.in",375],["blog.wiki-topia.com",375],["blog.coinsvalue.net",375],["blog.cookinguide.net",375],["blog.freeoseocheck.com",375],["blog24.me",375],["bildirim.*",377],["arahdrive.com",378],["appsbull.com",379],["diudemy.com",379],["maqal360.com",[379,380,381]],["lifesurance.info",382],["akcartoons.in",383],["cybercityhelp.in",383],["infokeeda.xyz",384],["webzeni.com",384],["dl.apkmoddone.com",385],["phongroblox.com",385],["fuckingfast.net",386],["buzzheavier.com",386],["tickhosting.com",387],["in91vip.win",388],["datavaults.co",389],["t-online.de",391],["upornia.*",[392,393]],["bobs-tube.com",394],["pornohirsch.net",395],["bembed.net",396],["embedv.net",396],["fslinks.org",396],["javguard.club",396],["listeamed.net",396],["v6embed.xyz",396],["vembed.*",396],["vgplayer.xyz",396],["vid-guard.com",396],["vinomo.xyz",396],["nekolink.site",[397,398]],["pixsera.net",399],["jnews5.com",400],["pc-builds.com",401],["qtoptens.com",401],["reuters.com",401],["today.com",401],["videogamer.com",401],["wrestlinginc.com",401],["usatoday.com",402],["ydr.com",402],["247sports.com",403],["indiatimes.com",404],["netzwelt.de",405],["filmibeat.com",406],["goodreturns.in",406],["mykhel.com",406],["luckydice.net",406],["adarima.org",406],["weatherwx.com",406],["sattaguess.com",406],["winshell.de",406],["rosasidan.ws",406],["modmakers.xyz",406],["gamepure.in",406],["upiapi.in",406],["daemonanime.net",406],["networkhint.com",406],["thichcode.net",406],["texturecan.com",406],["tikmate.app",[406,612]],["arcaxbydz.id",406],["quotesshine.com",406],["arcade.buzzrtv.com",407],["arcade.dailygazette.com",407],["arcade.lemonde.fr",407],["arena.gamesforthebrain.com",407],["bestpuzzlesandgames.com",407],["cointiply.arkadiumarena.com",407],["gamelab.com",407],["games.abqjournal.com",407],["games.amny.com",407],["games.bellinghamherald.com",407],["games.besthealthmag.ca",407],["games.bnd.com",407],["games.boston.com",407],["games.bostonglobe.com",407],["games.bradenton.com",407],["games.centredaily.com",407],["games.charlotteobserver.com",407],["games.cnhinews.com",407],["games.crosswordgiant.com",407],["games.dailymail.co.uk",407],["games.dallasnews.com",407],["games.daytondailynews.com",407],["games.denverpost.com",407],["games.everythingzoomer.com",407],["games.fresnobee.com",407],["games.gameshownetwork.com",407],["games.get.tv",407],["games.greatergood.com",407],["games.heraldonline.com",407],["games.heraldsun.com",407],["games.idahostatesman.com",407],["games.insp.com",407],["games.islandpacket.com",407],["games.journal-news.com",407],["games.kansas.com",407],["games.kansascity.com",407],["games.kentucky.com",407],["games.lancasteronline.com",407],["games.ledger-enquirer.com",407],["games.macon.com",407],["games.mashable.com",407],["games.mercedsunstar.com",407],["games.metro.us",407],["games.metv.com",407],["games.miamiherald.com",407],["games.modbee.com",407],["games.moviestvnetwork.com",407],["games.myrtlebeachonline.com",407],["games.games.newsobserver.com",407],["games.parade.com",407],["games.pressdemocrat.com",407],["games.puzzlebaron.com",407],["games.puzzler.com",407],["games.puzzles.ca",407],["games.qns.com",407],["games.readersdigest.ca",407],["games.sacbee.com",407],["games.sanluisobispo.com",407],["games.sixtyandme.com",407],["games.sltrib.com",407],["games.springfieldnewssun.com",407],["games.star-telegram.com",407],["games.startribune.com",407],["games.sunherald.com",407],["games.theadvocate.com",407],["games.thenewstribune.com",407],["games.theolympian.com",407],["games.theportugalnews.com",407],["games.thestar.com",407],["games.thestate.com",407],["games.tri-cityherald.com",407],["games.triviatoday.com",407],["games.usnews.com",407],["games.word.tips",407],["games.wordgenius.com",407],["games.wtop.com",407],["jeux.meteocity.com",407],["juegos.as.com",407],["juegos.elnuevoherald.com",407],["juegos.elpais.com",407],["philly.arkadiumarena.com",407],["play.dictionary.com",407],["puzzles.bestforpuzzles.com",407],["puzzles.centralmaine.com",407],["puzzles.crosswordsolver.org",407],["puzzles.independent.co.uk",407],["puzzles.nola.com",407],["puzzles.pressherald.com",407],["puzzles.standard.co.uk",407],["puzzles.sunjournal.com",407],["arkadium.com",408],["abysscdn.com",[409,410]],["arcai.com",411],["my-code4you.blogspot.com",412],["flickr.com",413],["firefile.cc",414],["pestleanalysis.com",414],["kochamjp.pl",414],["tutorialforlinux.com",414],["whatsaero.com",414],["animeblkom.net",[414,428]],["blkom.com",414],["globes.co.il",[415,416]],["jardiner-malin.fr",417],["tw-calc.net",418],["ohmybrush.com",419],["talkceltic.net",420],["mentalfloss.com",421],["uprafa.com",422],["cube365.net",423],["wwwfotografgotlin.blogspot.com",424],["freelistenonline.com",424],["badassdownloader.com",425],["quickporn.net",426],["yellowbridge.com",427],["aosmark.com",429],["ctrlv.*",430],["atozmath.com",[431,432,433,434,435,436,437]],["newyorker.com",438],["brighteon.com",439],["more.tv",440],["video1tube.com",441],["alohatube.xyz",441],["4players.de",442],["onlinesoccermanager.com",442],["fshost.me",443],["link.cgtips.org",444],["hentaicloud.com",445],["netfapx.com",447],["javdragon.org",447],["javneon.tv",447],["javsaga.ninja",447],["paperzonevn.com",448],["9jarock.org",449],["fzmovies.info",449],["fztvseries.ng",449],["netnaijas.com",449],["hentaienglish.com",450],["hentaiporno.xxx",450],["venge.io",[451,452]],["btcbux.io",453],["its.porn",[454,455]],["atv.at",456],["2ndrun.tv",457],["rackusreads.com",457],["teachmemicro.com",457],["willcycle.com",457],["kusonime.com",[458,459]],["123movieshd.*",460],["imgur.com",[461,462,720]],["hentai-party.com",463],["hentaicomics.pro",463],["uproxy.*",464],["animesa.*",465],["subtitle.one",466],["subtitleone.cc",466],["genshinimpactcalculator.com",467],["mysexgames.com",468],["cinecalidad.*",[469,470]],["xnxx.com",471],["xvideos.*",471],["gdr-online.com",472],["mmm.dk",473],["iqiyi.com",[474,475,604]],["m.iqiyi.com",476],["nbcolympics.com",477],["apkhex.com",478],["indiansexstories2.net",479],["issstories.xyz",479],["1340kbbr.com",480],["gorgeradio.com",480],["kduk.com",480],["kedoam.com",480],["kejoam.com",480],["kelaam.com",480],["khsn1230.com",480],["kjmx.rocks",480],["kloo.com",480],["klooam.com",480],["klykradio.com",480],["kmed.com",480],["kmnt.com",480],["kool991.com",480],["kpnw.com",480],["kppk983.com",480],["krktcountry.com",480],["ktee.com",480],["kwro.com",480],["kxbxfm.com",480],["thevalley.fm",480],["quizlet.com",481],["dsocker1234.blogspot.com",482],["schoolcheats.net",[483,484]],["mgnet.xyz",485],["designtagebuch.de",486],["pixroute.com",487],["uploady.io",488],["calculator-online.net",489],["porngames.club",490],["sexgames.xxx",490],["111.90.159.132",491],["mobile-tracker-free.com",492],["pfps.gg",493],["social-unlock.com",494],["superpsx.com",495],["ninja.io",496],["sourceforge.net",497],["samfirms.com",498],["rapelust.com",499],["vtube.to",499],["desitelugusex.com",499],["dvdplay.*",499],["xvideos-downloader.net",499],["xxxvideotube.net",499],["sdefx.cloud",499],["nozomi.la",499],["banned.video",500],["madmaxworld.tv",500],["androidpolice.com",500],["babygaga.com",500],["backyardboss.net",500],["carbuzz.com",500],["cbr.com",500],["collider.com",500],["dualshockers.com",500],["footballfancast.com",500],["footballleagueworld.co.uk",500],["gamerant.com",500],["givemesport.com",500],["hardcoregamer.com",500],["hotcars.com",500],["howtogeek.com",500],["makeuseof.com",500],["moms.com",500],["movieweb.com",500],["pocket-lint.com",500],["pocketnow.com",500],["screenrant.com",500],["simpleflying.com",500],["thegamer.com",500],["therichest.com",500],["thesportster.com",500],["thethings.com",500],["thetravel.com",500],["topspeed.com",500],["xda-developers.com",500],["huffpost.com",501],["ingles.com",502],["spanishdict.com",502],["surfline.com",[503,504]],["play.tv3.ee",505],["play.tv3.lt",505],["play.tv3.lv",[505,506]],["tv3play.skaties.lv",505],["trendyoum.com",507],["bulbagarden.net",508],["hollywoodlife.com",509],["mat6tube.com",510],["hotabis.com",511],["root-nation.com",511],["italpress.com",511],["airsoftmilsimnews.com",511],["artribune.com",511],["newtumbl.com",512],["apkmaven.*",513],["aruble.net",514],["nevcoins.club",515],["mail.com",516],["gmx.*",517],["mangakita.id",519],["avpgalaxy.net",520],["panda-novel.com",521],["lightsnovel.com",521],["eaglesnovel.com",521],["pandasnovel.com",521],["ewrc-results.com",522],["kizi.com",523],["cyberscoop.com",524],["fedscoop.com",524],["canale.live",525],["jeep-cj.com",526],["sponsorhunter.com",527],["cloudcomputingtopics.net",528],["likecs.com",529],["tiscali.it",530],["linkspy.cc",531],["adshnk.com",532],["chattanoogan.com",533],["adsy.pw",534],["playstore.pw",534],["windowspro.de",535],["snapinst.app",536],["tvtv.ca",537],["tvtv.us",537],["mydaddy.cc",538],["roadtrippin.fr",539],["vavada5com.com",540],["anyporn.com",[541,558]],["bravoporn.com",541],["bravoteens.com",541],["crocotube.com",541],["hellmoms.com",541],["hellporno.com",541],["sex3.com",541],["tubewolf.com",541],["xbabe.com",541],["xcum.com",541],["zedporn.com",541],["imagetotext.info",542],["infokik.com",543],["freepik.com",544],["ddwloclawek.pl",[545,546]],["www.seznam.cz",547],["deezer.com",548],["my-subs.co",549],["plaion.com",550],["slideshare.net",[551,552]],["ustreasuryyieldcurve.com",553],["businesssoftwarehere.com",554],["goo.st",554],["freevpshere.com",554],["softwaresolutionshere.com",554],["gamereactor.*",556],["madoohd.com",557],["doomovie-hd.*",557],["staige.tv",559],["lvturbo.com",560],["androidadult.com",561],["streamvid.net",562],["watchtv24.com",563],["cellmapper.net",564],["medscape.com",565],["newscon.org",[566,567]],["wheelofgold.com",568],["drakecomic.*",568],["app.blubank.com",569],["mobileweb.bankmellat.ir",569],["chat.nrj.fr",570],["chat.tchatche.com",[570,585]],["ccthesims.com",577],["chromeready.com",577],["coursedrive.org",577],["dtbps3games.com",577],["illustratemagazine.com",577],["uknip.co.uk",577],["vod.pl",578],["megadrive-emulator.com",579],["tvhay.*",[580,581]],["animesaga.in",582],["moviesapi.club",582],["bestx.stream",582],["watchx.top",582],["digimanie.cz",583],["svethardware.cz",583],["srvy.ninja",584],["cnn.com",[586,587,588]],["news.bg",589],["edmdls.com",590],["freshremix.net",590],["scenedl.org",590],["trakt.tv",591],["client.falixnodes.net",[592,593]],["shroomers.app",594],["classicalradio.com",595],["di.fm",595],["jazzradio.com",595],["radiotunes.com",595],["rockradio.com",595],["zenradio.com",595],["getthit.com",596],["techedubyte.com",597],["soccerinhd.com",597],["movie-th.tv",598],["iwanttfc.com",599],["nutraingredients-asia.com",600],["nutraingredients-latam.com",600],["nutraingredients-usa.com",600],["nutraingredients.com",600],["ozulscansen.com",601],["nexusmods.com",602],["lookmovie.*",603],["lookmovie2.to",603],["biletomat.pl",605],["hextank.io",[606,607]],["filmizlehdfilm.com",[608,609,610,611]],["filmizletv.*",[608,609,610,611]],["fullfilmizle.cc",[608,609,610,611]],["gofilmizle.net",[608,609,610,611]],["btvplus.bg",613],["sagewater.com",614],["redlion.net",614],["filmweb.pl",[615,616]],["satdl.com",617],["vidstreaming.xyz",618],["everand.com",619],["myradioonline.pl",620],["cbs.com",621],["paramountplus.com",621],["fullxh.com",622],["galleryxh.site",622],["megaxh.com",622],["movingxh.world",622],["seexh.com",622],["unlockxh4.com",622],["valuexh.life",622],["xhaccess.com",622],["xhadult2.com",622],["xhadult3.com",622],["xhadult4.com",622],["xhadult5.com",622],["xhamster.*",622],["xhamster1.*",622],["xhamster10.*",622],["xhamster11.*",622],["xhamster12.*",622],["xhamster13.*",622],["xhamster14.*",622],["xhamster15.*",622],["xhamster16.*",622],["xhamster17.*",622],["xhamster18.*",622],["xhamster19.*",622],["xhamster20.*",622],["xhamster2.*",622],["xhamster3.*",622],["xhamster4.*",622],["xhamster42.*",622],["xhamster46.com",622],["xhamster5.*",622],["xhamster7.*",622],["xhamster8.*",622],["xhamsterporno.mx",622],["xhbig.com",622],["xhbranch5.com",622],["xhchannel.com",622],["xhdate.world",622],["xhday.com",622],["xhday1.com",622],["xhlease.world",622],["xhmoon5.com",622],["xhofficial.com",622],["xhopen.com",622],["xhplanet1.com",622],["xhplanet2.com",622],["xhreal2.com",622],["xhreal3.com",622],["xhspot.com",622],["xhtotal.com",622],["xhtree.com",622],["xhvictory.com",622],["xhwebsite.com",622],["xhwebsite2.com",622],["xhwebsite5.com",622],["xhwide1.com",622],["xhwide2.com",622],["xhwide5.com",622],["file-upload.net",624],["acortalo.*",[625,626,627,628]],["acortar.*",[625,626,627,628]],["megadescarga.net",[625,626,627,628]],["megadescargas.net",[625,626,627,628]],["hentaihaven.xxx",629],["jacquieetmicheltv2.net",631],["a2zapk.*",632],["fcportables.com",[633,634]],["emurom.net",635],["freethesaurus.com",[636,637]],["thefreedictionary.com",[636,637]],["oeffentlicher-dienst.info",638],["im9.eu",639],["dcdlplayer8a06f4.xyz",640],["ultimate-guitar.com",641],["claimbits.net",642],["sexyscope.net",643],["kickassanime.*",644],["recherche-ebook.fr",645],["virtualdinerbot.com",645],["zonebourse.com",646],["pink-sluts.net",647],["andhrafriends.com",648],["benzinpreis.de",649],["turtleviplay.xyz",650],["defenseone.com",651],["govexec.com",651],["nextgov.com",651],["route-fifty.com",651],["sharing.wtf",652],["wetter3.de",653],["esportivos.fun",654],["cosmonova-broadcast.tv",655],["hartvannederland.nl",656],["shownieuws.nl",656],["vandaaginside.nl",656],["rock.porn",[657,658]],["videzz.net",[659,660]],["ezaudiobookforsoul.com",661],["club386.com",662],["decompiler.com",[663,664]],["littlebigsnake.com",665],["easyfun.gg",666],["smailpro.com",667],["ilgazzettino.it",668],["ilmessaggero.it",668],["3bmeteo.com",[669,670]],["mconverter.eu",671],["lover937.net",672],["10gb.vn",673],["pes6.es",674],["tactics.tools",[675,676]],["boundhub.com",677],["alocdnnetu.xyz",678],["reliabletv.me",679],["jakondo.ru",680],["filecrypt.*",681],["nolive.me",683],["wired.com",684],["spankbang.*",[685,686,687,722,723]],["hulu.com",[688,689,690]],["hanime.tv",691],["anonymfile.com",692],["gofile.to",692],["dotycat.com",693],["rateyourmusic.com",694],["reporterpb.com.br",695],["blog-dnz.com",697],["18adultgames.com",698],["colnect.com",[699,700]],["adultgamesworld.com",701],["bgmiupdate.com.in",702],["reviewdiv.com",703],["parametric-architecture.com",704],["laurelberninteriors.com",[705,725]],["voiceofdenton.com",706],["concealednation.org",706],["askattest.com",708],["opensubtitles.com",709],["savefiles.com",710],["streamup.ws",711],["goodstream.one",712],["lecrabeinfo.net",713],["cerberusapp.com",714],["www.google.*",715],["tacobell.com",716],["zefoy.com",717],["cnet.com",718],["natgeotv.com",721],["globo.com",724],["wayfair.com",726]]);
const exceptionsMap = new Map([["cloudflare.com",[0]],["pingit.com",[171]],["loan.bgmi32bitapk.in",[297]],["lookmovie.studio",[603]]]);
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
