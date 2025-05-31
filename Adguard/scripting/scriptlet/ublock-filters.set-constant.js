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
const argsList = [["console.clear","undefined"],["adBlockDetected","undefined"],["PrePl","true"],["amzn_aps_csm.init","noopFunc"],["amzn_aps_csm.log","noopFunc"],["ncbi.sg","{}"],["ncbi.sg.ping","noopFunc"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["google.ima.settings.setDisableFlashAds","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505","{}"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["Object.prototype.que","noopFunc"],["Object.prototype.que.push","noopFunc"],["ga.sendGaEvent","noopFunc"],["adobe","{}"],["MT","{}"],["MT.track","noopFunc"],["ClickOmniPartner","noopFunc"],["adex","{}"],["adex.getAdexUser","noopFunc"],["Adkit","noopFunc"],["Object.prototype.shouldExpectGoogleCMP","false"],["apntag.refresh","noopFunc"],["pa.sendEvent","noopFunc"],["Munchkin","{}"],["Munchkin.init","noopFunc"],["ttd_dom_ready","noopFunc"],["ramp","undefined"],["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["console.clear","noopFunc"],["console.log","noopFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["console.clear","trueFunc"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["check_adblock","true"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["String.prototype.charCodeAt","trueFunc"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["openPopunder","noopFunc"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["CaptchmeState.adb","undefined"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["N_BetterJsPop.object","{}"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["HTMLAnchorElement.prototype.click","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["check","true"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["runAdBlocker","false"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["cnbc.canShowAds","true"],["ue_adb_chk","1"],["firefaucet","true"],["cRAds","true"],["uas","[]"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["foundation.adPlayer.bitmovin","{}"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["Object.prototype.adReinsertion","noopFunc"],["getHomadConfig","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["ulp_noadb","true"],["Object.prototype.adblock_detected","false"],["timeSec","0"],["adsbygoogle.loaded","true"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["Adv_ab","false"],["sgpbCanRunAds","true"],["document.hidden","false"],["document.hasFocus","trueFunc"],["hasFocus","trueFunc"],["navigator.brave","undefined"],["Object.prototype.isAllAdClose","true"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["navigator.webkitTemporaryStorage.queryUsageAndQuota","noopFunc"],["document.onkeydown","noopFunc"],["showadas","true"],["alert","throwFunc"],["iktimer","0"],["aSl.gcd","0"],["window.adLink","null"],["detectedAdblock","undefined"],["isTabActive","true"],["clicked","2"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["flashvars.mlogo",""],["vpPrerollVideo","undefined"],["hold_click","false"],["admiral","noopFunc"],["gnt.u.adfree","true"],["__INITIAL_DATA__.siteData.admiralScript"],["objAd.loadAdShield","noopFunc"],["window.myAd.runAd","noopFunc"],["__INITIAL_STATE__.config.theme.ads.isAdBlockerEnabled","false"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["document.ontouchend","null"],["document.onclick","null"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["xv_ad_block","0"],["openWindow","noopFunc"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["showada","true"],["showax","true"],["p18","undefined"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["Object.prototype.adblockFound","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["xv.sda.pp.init","noopFunc"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["detectAdBlock","noopFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["ad_link",""],["penciBlocksArray","[]"],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["D4zz","noopFunc"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["tv3Cmp.ConsentGiven","true"],["countDownDate","0"],["setupSkin","noopFunc"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["td_ad_background_click_link","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["puShown1","true"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["sssp","emptyObj"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["adSettings","[]"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["isadb","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["googletag","true"],["tOS2","150"],["checkAdBlocker","noopFunc"],["PlayerConfig.config.CustomAdSetting","[]"],["navigator.standalone","true"],["ShowAdvertising","{}"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["feedBack.showAffilaePromo","noopFunc"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["HTMLScriptElement.prototype.onerror","null"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["window.adngin","{}"],["amzn_aps_csm","{}"],["amzn_aps_csm.define","noopFunc"],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["sharedController.adblockDetector","noopFunc"],["checkAdsStatus","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["checkAdBlockeraz","noopFunc"],["blockingAds","false"],["Yii2App.playbackTimeout","0"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["powerAPITag","emptyObj"],["playerEnhancedConfig.run","throwFunc"],["aoAdBlockDetected","false"],["rodo.checkIsDidomiConsent","noopFunc"],["rodo.waitForConsent","noopPromiseResolve"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["hasAdBlocker","false"],["initials.yld-pdpopunder",""],["download_click","true"],["advertisement3","true"],["importFAB","undefined"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["dvsize","52"],["majorse","true"],["completed","1"],["testerli","false"],["w87.abd","noopFunc"],["document.referrer",""],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["one_time","1"],["consentGiven","true"],["playID","1"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["malisx","true"],["ADS.isBannersEnabled","false"],["EASYFUN_ADS_CAN_RUN","true"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["detectedAdblock","noopFunc"],["Object.prototype.DetectByGoogleAd","noopFunc"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["NativeAd","noopFunc"],["Blob","noopFunc"],["window.navigator.brave","undefined"],["HTMLScriptElement.prototype.onerror","undefined"],["isAdblock","false"],["openPop","noopFunc"],["attachEvent","trueFunc"],["cns.library","true"],["BJSShowUnder","{}"],["BJSShowUnder.bindTo","noopFunc"],["BJSShowUnder.add","noopFunc"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["countDown","0"],["runCheck","noopFunc"],["adsSlotRenderEndSeen","true"],["showModal","noopFunc"],["flashvars.mlogo_link",""],["isAdBlocked","noopFunc"],["URLlist","[]"],["aaw","{}"],["aaw.processAdsOnPage","noopFunc"],["doOpen","undefined"],["HTMLImageElement.prototype.onerror","undefined"],["FOXIZ_MAIN_SCRIPT.siteAccessDetector","noopFunc"],["openAdBlockPopup","noopFunc"],["Object.prototype._adsDisabled","true"],["advanced_ads_check_adblocker","noopFunc"],["canRunAds","1"],["attestHasAdBlockerActivated","true"],["extInstalled","true"],["SaveFiles.add","noopFunc"],["detectSandbox","noopFunc"],["adbon","0"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["Object.prototype.updateModifiedCommerceUrl","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["Visitor","{}"],["send_gravity_event","noopFunc"],["send_recommendation_event","noopFunc"],["libAnalytics.data.get","noopFunc"],["adthrive._components.start","noopFunc"],["navigator.sendBeacon","noopFunc"]];
const hostnamesMap = new Map([["jilliandescribecompany.com",0],["gogoanime.*",[0,197]],["adrianmissionminute.com",0],["alejandrocenturyoil.com",0],["alleneconomicmatter.com",0],["apinchcaseation.com",0],["bethshouldercan.com",0],["bigclatterhomesguideservice.com",0],["bradleyviewdoctor.com",0],["brittneystandardwestern.com",0],["brookethoughi.com",0],["brucevotewithin.com",0],["cindyeyefinal.com",0],["denisegrowthwide.com",0],["diananatureforeign.com",0],["donaldlineelse.com",0],["edwardarriveoften.com",0],["erikcoldperson.com",0],["evelynthankregion.com",0],["graceaddresscommunity.com",0],["heatherdiscussionwhen.com",0],["heatherwholeinvolve.com",0],["housecardsummerbutton.com",0],["jamessoundcost.com",0],["jamesstartstudent.com",0],["jamiesamewalk.com",0],["jasminetesttry.com",0],["jasonresponsemeasure.com",0],["jayservicestuff.com",0],["jennifercertaindevelopment.com",0],["jessicaglassauthor.com",0],["johnalwayssame.com",0],["johntryopen.com",0],["jonathansociallike.com",0],["josephseveralconcern.com",0],["kellywhatcould.com",0],["kennethofficialitem.com",0],["kristiesoundsimply.com",0],["lisatrialidea.com",0],["lorimuchbenefit.com",0],["loriwithinfamily.com",0],["lukecomparetwo.com",0],["mariatheserepublican.com",0],["markstyleall.com",0],["michaelapplysome.com",0],["morganoperationface.com",0],["nathanfromsubject.com",0],["nectareousoverelate.com",0],["paulkitchendark.com",0],["rebeccaneverbase.com",0],["richardsignfish.com",0],["roberteachfinal.com",0],["robertordercharacter.com",0],["robertplacespace.com",0],["ryanagoinvolve.com",0],["sandratableother.com",0],["sandrataxeight.com",0],["seanshowcould.com",0],["sethniceletter.com",0],["shannonpersonalcost.com",0],["sharonwhiledemocratic.com",0],["stevenimaginelittle.com",0],["strawberriesporail.com",0],["susanhavekeep.com",0],["timberwoodanotia.com",0],["tinycat-voe-fashion.com",0],["toddpartneranimal.com",0],["troyyourlead.com",0],["uptodatefinishconference.com",0],["uptodatefinishconferenceroom.com",0],["vincentincludesuccessful.com",0],["voe.sx",0],["maxfinishseveral.com",0],["voe.sx>>",0],["javboys.tv>>",0],["freeplayervideo.com",0],["nazarickol.com",0],["player-cdn.com",0],["playhydrax.com",[0,407,408]],["rabbitstream.net",0],["fmovies.*",0],["u26bekrb.fun",1],["pvpoke-re.com",2],["client.falixnodes.net",[3,4,594,595,596]],["ncbi.nlm.nih.gov",[5,6]],["br.de",7],["indeed.com",8],["pasteboard.co",9],["clickhole.com",10],["deadspin.com",10],["gizmodo.com",10],["jalopnik.com",10],["jezebel.com",10],["kotaku.com",10],["lifehacker.com",10],["splinternews.com",10],["theinventory.com",10],["theonion.com",10],["theroot.com",10],["thetakeout.com",10],["pewresearch.org",10],["los40.com",[11,12]],["as.com",12],["telegraph.co.uk",[13,14]],["poweredbycovermore.com",[13,66]],["lumens.com",[13,66]],["verizon.com",15],["humanbenchmark.com",16],["politico.com",17],["officedepot.co.cr",[18,19]],["officedepot.*",[20,21]],["usnews.com",22],["coolmathgames.com",[23,290,291,292]],["video.gazzetta.it",[24,25]],["oggi.it",[24,25]],["manoramamax.com",24],["factable.com",26],["zee5.com",27],["gala.fr",28],["geo.fr",28],["voici.fr",28],["gloucestershirelive.co.uk",29],["arsiv.mackolik.com",30],["jacksonguitars.com",31],["scandichotels.com",32],["stylist.co.uk",33],["nettiauto.com",34],["thaiairways.com",[35,36]],["cerbahealthcare.it",[37,38]],["futura-sciences.com",[37,55]],["toureiffel.paris",37],["campusfrance.org",[37,150]],["tiendaenlinea.claro.com.ni",[39,40]],["tieba.baidu.com",41],["fandom.com",[42,43,351]],["grasshopper.com",[44,45]],["epson.com.cn",[46,47,48,49]],["oe24.at",[50,51]],["szbz.de",50],["platform.autods.com",[52,53]],["kcra.com",54],["wcvb.com",54],["sportdeutschland.tv",54],["wikihow.com",56],["citibank.com.sg",57],["uol.com.br",[58,59,60,61,62]],["gazzetta.gr",63],["digicol.dpm.org.cn",[64,65]],["virginmediatelevision.ie",67],["larazon.es",[68,69]],["waitrosecellar.com",[70,71,72]],["kicker.de",[73,393]],["sharpen-free-design-generator.netlify.app",[74,75]],["help.cashctrl.com",[76,77]],["gry-online.pl",78],["vidaextra.com",79],["commande.rhinov.pro",[80,81]],["ecom.wixapps.net",[80,81]],["tipranks.com",[82,83]],["iceland.co.uk",[84,85,86]],["socket.pearsoned.com",87],["tntdrama.com",[88,89]],["trutv.com",[88,89]],["mobile.de",[90,91]],["ioe.vn",[92,93]],["geiriadur.ac.uk",[92,96]],["welsh-dictionary.ac.uk",[92,96]],["bikeportland.org",[94,95]],["biologianet.com",[59,60,61]],["10play.com.au",[97,98]],["sunshine-live.de",[99,100]],["whatismyip.com",[101,102]],["myfitnesspal.com",103],["netoff.co.jp",[104,105]],["bluerabbitrx.com",[104,105]],["foundit.*",[106,107]],["clickjogos.com.br",108],["bristan.com",[109,110]],["zillow.com",111],["share.hntv.tv",[112,113,114,115]],["forum.dji.com",[112,115]],["unionpayintl.com",[112,114]],["streamelements.com",112],["optimum.net",[116,117]],["hdfcfund.com",118],["user.guancha.cn",[119,120]],["sosovalue.com",121],["bandyforbundet.no",[122,123]],["tatacommunications.com",124],["suamusica.com.br",[125,126,127]],["macrotrends.net",[128,129]],["code.world",130],["smartcharts.net",130],["topgear.com",131],["eservice.directauto.com",[132,133]],["nbcsports.com",134],["standard.co.uk",135],["pruefernavi.de",[136,137]],["speedtest.net",[138,139]],["17track.net",140],["visible.com",141],["hagerty.com",[142,143]],["marketplace.nvidia.com",144],["kino.de",[145,146]],["9now.nine.com.au",147],["worldstar.com",148],["prisjakt.no",149],["developer.arm.com",[151,152]],["sterkinekor.com",153],["iogames.space",154],["m.youtube.com",[155,156,157,158]],["music.youtube.com",[155,156,157,158]],["tv.youtube.com",[155,156,157,158]],["www.youtube.com",[155,156,157,158]],["youtubekids.com",[155,156,157,158]],["youtube-nocookie.com",[155,156,157,158]],["eu-proxy.startpage.com",[155,156,158]],["timesofindia.indiatimes.com",159],["economictimes.indiatimes.com",160],["motherless.com",161],["sueddeutsche.de",162],["watchanimesub.net",163],["wcoanimesub.tv",163],["wcoforever.net",163],["freeviewmovies.com",163],["filehorse.com",163],["guidetnt.com",163],["starmusiq.*",163],["sp-today.com",163],["linkvertise.com",163],["eropaste.net",163],["getpaste.link",163],["sharetext.me",163],["wcofun.*",163],["note.sieuthuthuat.com",163],["elcriticodelatele.com",[163,455]],["gadgets.es",[163,455]],["amateurporn.co",[163,259]],["wiwo.de",164],["primewire.*",165],["streanplay.*",[165,166]],["alphaporno.com",[165,542]],["porngem.com",165],["shortit.pw",[165,243]],["familyporn.tv",165],["sbplay.*",165],["id45.cyou",165],["85tube.com",[165,227]],["milfnut.*",165],["k1nk.co",165],["watchasians.cc",165],["soltoshindo.com",165],["sankakucomplex.com",167],["player.glomex.com",168],["merkur.de",168],["tz.de",168],["sxyprn.*",169],["hqq.*",[170,171]],["waaw.*",[171,172]],["hotpornfile.org",171],["player.tabooporns.com",171],["x69.ovh",171],["wiztube.xyz",171],["younetu.*",171],["multiup.us",171],["peliculas8k.com",[171,172]],["video.q34r.org",171],["czxxx.org",171],["vtplayer.online",171],["vvtplayer.*",171],["netu.ac",171],["netu.frembed.lol",171],["adbull.org",173],["123link.*",173],["adshort.*",173],["mitly.us",173],["linkrex.net",173],["linx.cc",173],["oke.io",173],["linkshorts.*",173],["dz4link.com",173],["adsrt.*",173],["linclik.com",173],["shrt10.com",173],["vinaurl.*",173],["loptelink.com",173],["adfloz.*",173],["cut-fly.com",173],["linkfinal.com",173],["payskip.org",173],["cutpaid.com",173],["linkjust.com",173],["leechpremium.link",173],["icutlink.com",[173,264]],["oncehelp.com",173],["rgl.vn",173],["reqlinks.net",173],["bitlk.com",173],["qlinks.eu",173],["link.3dmili.com",173],["short-fly.com",173],["foxseotools.com",173],["dutchycorp.*",173],["shortearn.*",173],["pingit.*",173],["link.turkdown.com",173],["7r6.com",173],["oko.sh",173],["ckk.ai",173],["fc.lc",173],["fstore.biz",173],["shrink.*",173],["cuts-url.com",173],["eio.io",173],["exe.app",173],["exee.io",173],["exey.io",173],["skincarie.com",173],["exeo.app",173],["tmearn.*",173],["coinlyhub.com",[173,330]],["adsafelink.com",173],["aii.sh",173],["megalink.*",173],["cybertechng.com",[173,345]],["cutdl.xyz",173],["iir.ai",173],["shorteet.com",[173,363]],["miniurl.*",173],["smoner.com",173],["gplinks.*",173],["odisha-remix.com",[173,345]],["xpshort.com",[173,345]],["upshrink.com",173],["clk.*",173],["easysky.in",173],["veganab.co",173],["go.bloggingaro.com",173],["go.gyanitheme.com",173],["go.theforyou.in",173],["go.hipsonyc.com",173],["birdurls.com",173],["vipurl.in",173],["try2link.com",173],["jameeltips.us",173],["gainl.ink",173],["promo-visits.site",173],["satoshi-win.xyz",[173,379]],["shorterall.com",173],["encurtandourl.com",173],["forextrader.site",173],["postazap.com",173],["cety.app",173],["exego.app",[173,374]],["cutlink.net",173],["cutsy.net",173],["cutyurls.com",173],["cutty.app",173],["cutnet.net",173],["jixo.online",173],["tinys.click",[173,345]],["cpm.icu",173],["panyshort.link",173],["enagato.com",173],["pandaznetwork.com",173],["tpi.li",173],["oii.la",173],["recipestutorials.com",173],["pureshort.*",173],["shrinke.*",173],["shrinkme.*",173],["shrinkforearn.in",173],["oii.io",173],["du-link.in",173],["atglinks.com",173],["thotpacks.xyz",173],["megaurl.in",173],["megafly.in",173],["simana.online",173],["fooak.com",173],["joktop.com",173],["evernia.site",173],["falpus.com",173],["link.paid4link.com",173],["exalink.fun",173],["shortxlinks.com",173],["upfion.com",173],["upfiles.app",173],["upfiles-urls.com",173],["flycutlink.com",[173,345]],["linksly.co",173],["link1s.*",173],["pkr.pw",173],["imagenesderopaparaperros.com",173],["shortenbuddy.com",173],["apksvip.com",173],["4cash.me",173],["namaidani.com",173],["shortzzy.*",173],["teknomuda.com",173],["shorttey.*",[173,329]],["miuiku.com",173],["savelink.site",173],["lite-link.*",173],["adcorto.*",173],["samaa-pro.com",173],["miklpro.com",173],["modapk.link",173],["ccurl.net",173],["linkpoi.me",173],["menjelajahi.com",173],["pewgame.com",173],["haonguyen.top",173],["zshort.*",173],["crazyblog.in",173],["cutearn.net",173],["rshrt.com",173],["filezipa.com",173],["dz-linkk.com",173],["upfiles.*",173],["theblissempire.com",173],["finanzas-vida.com",173],["adurly.cc",173],["paid4.link",173],["link.asiaon.top",173],["go.gets4link.com",173],["linkfly.*",173],["beingtek.com",173],["shorturl.unityassets4free.com",173],["disheye.com",173],["techymedies.com",173],["techysuccess.com",173],["za.gl",[173,279]],["bblink.com",173],["myad.biz",173],["swzz.xyz",173],["vevioz.com",173],["charexempire.com",173],["clk.asia",173],["linka.click",173],["sturls.com",173],["myshrinker.com",173],["snowurl.com",[173,345]],["netfile.cc",173],["wplink.*",173],["rocklink.in",173],["techgeek.digital",173],["download3s.net",173],["shortx.net",173],["shortawy.com",173],["tlin.me",173],["apprepack.com",173],["up-load.one",173],["zuba.link",173],["bestcash2020.com",173],["hoxiin.com",173],["paylinnk.com",173],["thizissam.in",173],["ier.ai",173],["adslink.pw",173],["novelssites.com",173],["links.medipost.org",173],["faucetcrypto.net",173],["short.freeltc.top",173],["trxking.xyz",173],["weadown.com",173],["m.bloggingguidance.com",173],["blog.onroid.com",173],["link.codevn.net",173],["upfilesurls.com",173],["link4rev.site",173],["c2g.at",173],["bitcosite.com",[173,556]],["cryptosh.pro",173],["link68.net",173],["traffic123.net",173],["windowslite.net",[173,345]],["viewfr.com",173],["cl1ca.com",173],["4br.me",173],["fir3.net",173],["seulink.*",173],["encurtalink.*",173],["kiddyshort.com",173],["watchmygf.me",[174,198]],["camwhores.*",[174,184,226,227,228]],["camwhorez.tv",[174,184,226,227]],["cambay.tv",[174,206,226,256,258,259,260,261]],["fpo.xxx",[174,206]],["sexemix.com",174],["heavyfetish.com",[174,719]],["thotcity.su",174],["viralxxxporn.com",[174,397]],["tube8.*",[175,176]],["you-porn.com",176],["youporn.*",176],["youporngay.com",176],["youpornru.com",176],["redtube.*",176],["9908ww.com",176],["adelaidepawnbroker.com",176],["bztube.com",176],["hotovs.com",176],["insuredhome.org",176],["nudegista.com",176],["pornluck.com",176],["vidd.se",176],["pornhub.*",[176,318]],["pornhub.com",176],["pornerbros.com",177],["freep.com",177],["porn.com",178],["tune.pk",179],["noticias.gospelmais.com.br",180],["techperiod.com",180],["viki.com",[181,182]],["watch-series.*",183],["watchseries.*",183],["vev.*",183],["vidop.*",183],["vidup.*",183],["sleazyneasy.com",[184,185,186]],["smutr.com",[184,326]],["tktube.com",184],["yourporngod.com",[184,185]],["javbangers.com",[184,444]],["camfox.com",184],["camthots.tv",[184,256]],["shegotass.info",184],["amateur8.com",184],["bigtitslust.com",184],["ebony8.com",184],["freeporn8.com",184],["lesbian8.com",184],["maturetubehere.com",184],["sortporn.com",184],["motherporno.com",[184,185,206,258]],["theporngod.com",[184,185]],["watchdirty.to",[184,227,228,259]],["pornsocket.com",187],["luxuretv.com",188],["porndig.com",[189,190]],["webcheats.com.br",191],["ceesty.com",[192,193]],["gestyy.com",[192,193]],["corneey.com",193],["destyy.com",193],["festyy.com",193],["sh.st",193],["mitaku.net",193],["angrybirdsnest.com",194],["zrozz.com",194],["clix4btc.com",194],["4tests.com",194],["goltelevision.com",194],["news-und-nachrichten.de",194],["laradiobbs.net",194],["urlaubspartner.net",194],["produktion.de",194],["cinemaxxl.de",194],["bladesalvador.com",194],["tempr.email",194],["cshort.org",194],["friendproject.net",194],["covrhub.com",194],["katfile.com",[194,626]],["trust.zone",194],["business-standard.com",194],["planetsuzy.org",195],["empflix.com",196],["1movies.*",[197,203]],["xmovies8.*",197],["masteranime.tv",197],["0123movies.*",197],["gostream.*",197],["gomovies.*",197],["transparentcalifornia.com",198],["deepbrid.com",199],["webnovel.com",200],["streamwish.*",[201,202]],["oneupload.to",202],["wishfast.top",202],["rubystm.com",202],["rubyvid.com",202],["rubyvidhub.com",202],["stmruby.com",202],["streamruby.com",202],["schwaebische.de",204],["8tracks.com",205],["3movs.com",206],["bravoerotica.net",[206,258]],["youx.xxx",206],["camclips.tv",[206,326]],["xtits.*",[206,258]],["camflow.tv",[206,258,259,298,397]],["camhoes.tv",[206,256,258,259,298,397]],["xmegadrive.com",206],["xxxymovies.com",206],["xxxshake.com",206],["gayck.com",206],["xhand.com",[206,258]],["analdin.com",[206,258]],["revealname.com",207],["pouvideo.*",208],["povvideo.*",208],["povw1deo.*",208],["povwideo.*",208],["powv1deo.*",208],["powvibeo.*",208],["powvideo.*",208],["powvldeo.*",208],["golfchannel.com",209],["stream.nbcsports.com",209],["mathdf.com",209],["gamcore.com",210],["porcore.com",210],["porngames.tv",210],["69games.xxx",210],["javmix.app",210],["tecknity.com",211],["haaretz.co.il",212],["haaretz.com",212],["hungama.com",212],["a-o.ninja",212],["anime-odcinki.pl",212],["shortgoo.blogspot.com",212],["tonanmedia.my.id",[212,578]],["yurasu.xyz",212],["isekaipalace.com",212],["plyjam.*",[213,214]],["ennovelas.com",[214,218]],["foxsports.com.au",215],["canberratimes.com.au",215],["thesimsresource.com",216],["fxporn69.*",217],["vipbox.*",218],["viprow.*",218],["ctrl.blog",219],["sportlife.es",220],["finofilipino.org",221],["desbloqueador.*",222],["xberuang.*",223],["teknorizen.*",223],["mysflink.blogspot.com",223],["ashemaletube.*",224],["paktech2.com",224],["assia.tv",225],["assia4.com",225],["assia24.com",225],["cwtvembeds.com",[227,257]],["camlovers.tv",227],["porntn.com",227],["pornissimo.org",227],["sexcams-24.com",[227,259]],["watchporn.to",[227,259]],["camwhorez.video",227],["footstockings.com",[227,228,259]],["xmateur.com",[227,228,259]],["multi.xxx",228],["worldofbitco.in",[229,230]],["weatherx.co.in",[229,230]],["sunbtc.space",229],["subtorrents.*",231],["subtorrents1.*",231],["newpelis.*",231],["pelix.*",231],["allcalidad.*",231],["infomaniakos.*",231],["ojogos.com.br",232],["powforums.com",233],["supforums.com",233],["studybullet.com",233],["usgamer.net",234],["recordonline.com",234],["freebitcoin.win",235],["e-monsite.com",235],["coindice.win",235],["temp-mails.com",236],["freiepresse.de",237],["investing.com",238],["tornadomovies.*",239],["mp3fiber.com",240],["chicoer.com",241],["dailybreeze.com",241],["dailybulletin.com",241],["dailynews.com",241],["delcotimes.com",241],["eastbaytimes.com",241],["macombdaily.com",241],["ocregister.com",241],["pasadenastarnews.com",241],["pe.com",241],["presstelegram.com",241],["redlandsdailyfacts.com",241],["reviewjournal.com",241],["santacruzsentinel.com",241],["saratogian.com",241],["sentinelandenterprise.com",241],["sgvtribune.com",241],["tampabay.com",241],["times-standard.com",241],["theoaklandpress.com",241],["trentonian.com",241],["twincities.com",241],["whittierdailynews.com",241],["bostonherald.com",241],["dailycamera.com",241],["sbsun.com",241],["dailydemocrat.com",241],["montereyherald.com",241],["orovillemr.com",241],["record-bee.com",241],["redbluffdailynews.com",241],["reporterherald.com",241],["thereporter.com",241],["timescall.com",241],["timesheraldonline.com",241],["ukiahdailyjournal.com",241],["dailylocal.com",241],["mercurynews.com",241],["suedkurier.de",242],["anysex.com",244],["icdrama.*",245],["mangasail.*",245],["pornve.com",246],["file4go.*",247],["coolrom.com.au",247],["marie-claire.es",248],["gamezhero.com",248],["flashgirlgames.com",248],["onlinesudoku.games",248],["mpg.football",248],["sssam.com",248],["globalnews.ca",249],["drinksmixer.com",250],["leitesculinaria.com",250],["fupa.net",251],["browardpalmbeach.com",252],["dallasobserver.com",252],["houstonpress.com",252],["miaminewtimes.com",252],["phoenixnewtimes.com",252],["westword.com",252],["nhentai.net",[253,254]],["nowtv.com.tr",255],["caminspector.net",256],["camwhoreshd.com",256],["camgoddess.tv",256],["gay4porn.com",258],["mypornhere.com",258],["mangovideo.*",259],["love4porn.com",259],["thotvids.com",259],["watchmdh.to",259],["celebwhore.com",259],["cluset.com",259],["sexlist.tv",259],["4kporn.xxx",259],["xhomealone.com",259],["lusttaboo.com",[259,518]],["hentai-moon.com",259],["camhub.cc",[259,685]],["mediapason.it",262],["linkspaid.com",262],["tuotromedico.com",262],["neoteo.com",262],["phoneswiki.com",262],["celebmix.com",262],["myneobuxportal.com",262],["oyungibi.com",262],["25yearslatersite.com",262],["jeshoots.com",263],["techhx.com",263],["karanapk.com",263],["flashplayer.fullstacks.net",265],["cloudapps.herokuapp.com",265],["youfiles.herokuapp.com",265],["texteditor.nsspot.net",265],["temp-mail.org",266],["asianclub.*",267],["javhdporn.net",267],["vidmoly.to",268],["comnuan.com",269],["veedi.com",270],["battleboats.io",270],["anitube.*",271],["fruitlab.com",271],["acetack.com",271],["androidquest.com",271],["apklox.com",271],["chhaprawap.in",271],["gujarativyakaran.com",271],["kashmirstudentsinformation.in",271],["kisantime.com",271],["shetkaritoday.in",271],["pastescript.com",271],["trimorspacks.com",271],["updrop.link",271],["haddoz.net",271],["streamingcommunity.*",271],["garoetpos.com",271],["stiletv.it",272],["mixdrop.*",273],["hqtv.biz",274],["liveuamap.com",275],["muvibg.com",275],["audycje.tokfm.pl",276],["shush.se",277],["allkpop.com",278],["empire-anime.*",[279,573,574,575,576,577]],["empire-streaming.*",[279,573,574,575]],["empire-anime.com",[279,573,574,575]],["empire-streamz.fr",[279,573,574,575]],["empire-stream.*",[279,573,574,575]],["pickcrackpasswords.blogspot.com",280],["kfrfansub.com",281],["thuglink.com",281],["voipreview.org",281],["illicoporno.com",282],["lavoixdux.com",282],["tonpornodujour.com",282],["jacquieetmichel.net",282],["swame.com",282],["vosfemmes.com",282],["voyeurfrance.net",282],["jacquieetmicheltv.net",[282,634,635]],["hanime.tv",283],["pogo.com",284],["cloudvideo.tv",285],["legionjuegos.org",286],["legionpeliculas.org",286],["legionprogramas.org",286],["16honeys.com",287],["elespanol.com",288],["remodelista.com",289],["audiofanzine.com",293],["uploadev.*",294],["developerinsider.co",295],["thehindu.com",296],["cambro.tv",[297,298]],["boobsradar.com",[298,397,698]],["nibelungen-kurier.de",299],["adfoc.us",300],["tea-coffee.net",300],["spatsify.com",300],["newedutopics.com",300],["getviralreach.in",300],["edukaroo.com",300],["funkeypagali.com",300],["careersides.com",300],["nayisahara.com",300],["wikifilmia.com",300],["infinityskull.com",300],["viewmyknowledge.com",300],["iisfvirtual.in",300],["starxinvestor.com",300],["jkssbalerts.com",300],["sahlmarketing.net",300],["filmypoints.in",300],["fitnessholic.net",300],["moderngyan.com",300],["sattakingcharts.in",300],["freshbhojpuri.com",300],["bankshiksha.in",300],["earn.mpscstudyhub.com",300],["earn.quotesopia.com",300],["money.quotesopia.com",300],["best-mobilegames.com",300],["learn.moderngyan.com",300],["bharatsarkarijobalert.com",300],["quotesopia.com",300],["creditsgoal.com",300],["bgmi32bitapk.in",300],["techacode.com",300],["trickms.com",300],["ielts-isa.edu.vn",300],["loan.punjabworks.com",300],["rokni.xyz",300],["keedabankingnews.com",300],["sptfy.be",300],["mcafee-com.com",[300,374]],["pianetamountainbike.it",301],["barchart.com",302],["modelisme.com",303],["parasportontario.ca",303],["prescottenews.com",303],["nrj-play.fr",304],["hackingwithreact.com",305],["gutekueche.at",306],["eplfootballmatch.com",307],["ancient-origins.*",307],["peekvids.com",308],["playvids.com",308],["pornflip.com",308],["redensarten-index.de",309],["vw-page.com",310],["viz.com",[311,312]],["0rechner.de",313],["configspc.com",314],["xopenload.me",314],["uptobox.com",314],["uptostream.com",314],["japgay.com",315],["mega-debrid.eu",316],["dreamdth.com",317],["diaridegirona.cat",319],["diariodeibiza.es",319],["diariodemallorca.es",319],["diarioinformacion.com",319],["eldia.es",319],["emporda.info",319],["farodevigo.es",319],["laopinioncoruna.es",319],["laopiniondemalaga.es",319],["laopiniondemurcia.es",319],["laopiniondezamora.es",319],["laprovincia.es",319],["levante-emv.com",319],["mallorcazeitung.es",319],["regio7.cat",319],["superdeporte.es",319],["playpaste.com",320],["cnbc.com",321],["primevideo.com",322],["read.amazon.*",[322,709]],["firefaucet.win",323],["74k.io",[324,325]],["fullhdxxx.com",327],["pornclassic.tube",328],["tubepornclassic.com",328],["etonline.com",329],["creatur.io",329],["lookcam.*",329],["drphil.com",329],["urbanmilwaukee.com",329],["lootlinks.*",329],["ontiva.com",329],["hideandseek.world",329],["myabandonware.com",329],["kendam.com",329],["wttw.com",329],["synonyms.com",329],["definitions.net",329],["hostmath.com",329],["camvideoshub.com",329],["minhaconexao.com.br",329],["home-made-videos.com",331],["amateur-couples.com",331],["slutdump.com",331],["dpstream.*",332],["produsat.com",333],["bluemediafiles.*",334],["12thman.com",335],["acusports.com",335],["atlantic10.com",335],["auburntigers.com",335],["baylorbears.com",335],["bceagles.com",335],["bgsufalcons.com",335],["big12sports.com",335],["bigten.org",335],["bradleybraves.com",335],["butlersports.com",335],["cmumavericks.com",335],["conferenceusa.com",335],["cyclones.com",335],["dartmouthsports.com",335],["daytonflyers.com",335],["dbupatriots.com",335],["dbusports.com",335],["denverpioneers.com",335],["fduknights.com",335],["fgcuathletics.com",335],["fightinghawks.com",335],["fightingillini.com",335],["floridagators.com",335],["friars.com",335],["friscofighters.com",335],["gamecocksonline.com",335],["goarmywestpoint.com",335],["gobison.com",335],["goblueraiders.com",335],["gobobcats.com",335],["gocards.com",335],["gocreighton.com",335],["godeacs.com",335],["goexplorers.com",335],["goetbutigers.com",335],["gofrogs.com",335],["gogriffs.com",335],["gogriz.com",335],["golobos.com",335],["gomarquette.com",335],["gopack.com",335],["gophersports.com",335],["goprincetontigers.com",335],["gopsusports.com",335],["goracers.com",335],["goshockers.com",335],["goterriers.com",335],["gotigersgo.com",335],["gousfbulls.com",335],["govandals.com",335],["gowyo.com",335],["goxavier.com",335],["gozags.com",335],["gozips.com",335],["griffinathletics.com",335],["guhoyas.com",335],["gwusports.com",335],["hailstate.com",335],["hamptonpirates.com",335],["hawaiiathletics.com",335],["hokiesports.com",335],["huskers.com",335],["icgaels.com",335],["iuhoosiers.com",335],["jsugamecocksports.com",335],["longbeachstate.com",335],["loyolaramblers.com",335],["lrtrojans.com",335],["lsusports.net",335],["morrisvillemustangs.com",335],["msuspartans.com",335],["muleriderathletics.com",335],["mutigers.com",335],["navysports.com",335],["nevadawolfpack.com",335],["niuhuskies.com",335],["nkunorse.com",335],["nuhuskies.com",335],["nusports.com",335],["okstate.com",335],["olemisssports.com",335],["omavs.com",335],["ovcsports.com",335],["owlsports.com",335],["purduesports.com",335],["redstormsports.com",335],["richmondspiders.com",335],["sfajacks.com",335],["shupirates.com",335],["siusalukis.com",335],["smcgaels.com",335],["smumustangs.com",335],["soconsports.com",335],["soonersports.com",335],["themw.com",335],["tulsahurricane.com",335],["txst.com",335],["txstatebobcats.com",335],["ubbulls.com",335],["ucfknights.com",335],["ucirvinesports.com",335],["uconnhuskies.com",335],["uhcougars.com",335],["uicflames.com",335],["umterps.com",335],["uncwsports.com",335],["unipanthers.com",335],["unlvrebels.com",335],["uoflsports.com",335],["usdtoreros.com",335],["utahstateaggies.com",335],["utepathletics.com",335],["utrockets.com",335],["uvmathletics.com",335],["uwbadgers.com",335],["villanova.com",335],["wkusports.com",335],["wmubroncos.com",335],["woffordterriers.com",335],["1pack1goal.com",335],["bcuathletics.com",335],["bubraves.com",335],["goblackbears.com",335],["golightsgo.com",335],["gomcpanthers.com",335],["goutsa.com",335],["mercerbears.com",335],["pirateblue.com",335],["pirateblue.net",335],["pirateblue.org",335],["quinnipiacbobcats.com",335],["towsontigers.com",335],["tribeathletics.com",335],["tribeclub.com",335],["utepminermaniacs.com",335],["utepminers.com",335],["wkutickets.com",335],["aopathletics.org",335],["atlantichockeyonline.com",335],["bigsouthnetwork.com",335],["bigsouthsports.com",335],["chawomenshockey.com",335],["dbupatriots.org",335],["drakerelays.org",335],["ecac.org",335],["ecacsports.com",335],["emueagles.com",335],["emugameday.com",335],["gculopes.com",335],["godrakebulldog.com",335],["godrakebulldogs.com",335],["godrakebulldogs.net",335],["goeags.com",335],["goislander.com",335],["goislanders.com",335],["gojacks.com",335],["gomacsports.com",335],["gseagles.com",335],["hubison.com",335],["iowaconference.com",335],["ksuowls.com",335],["lonestarconference.org",335],["mascac.org",335],["midwestconference.org",335],["mountaineast.org",335],["niu-pack.com",335],["nulakers.ca",335],["oswegolakers.com",335],["ovcdigitalnetwork.com",335],["pacersports.com",335],["rmacsports.org",335],["rollrivers.com",335],["samfordsports.com",335],["uncpbraves.com",335],["usfdons.com",335],["wiacsports.com",335],["alaskananooks.com",335],["broncathleticfund.com",335],["cameronaggies.com",335],["columbiacougars.com",335],["etownbluejays.com",335],["gobadgers.ca",335],["golancers.ca",335],["gometrostate.com",335],["gothunderbirds.ca",335],["kentstatesports.com",335],["lehighsports.com",335],["lopers.com",335],["lycoathletics.com",335],["lycomingathletics.com",335],["maraudersports.com",335],["mauiinvitational.com",335],["msumavericks.com",335],["nauathletics.com",335],["nueagles.com",335],["nwusports.com",335],["oceanbreezenyc.org",335],["patriotathleticfund.com",335],["pittband.com",335],["principiaathletics.com",335],["roadrunnersathletics.com",335],["sidearmsocial.com",335],["snhupenmen.com",335],["stablerarena.com",335],["stoutbluedevils.com",335],["uwlathletics.com",335],["yumacs.com",335],["collegefootballplayoff.com",335],["csurams.com",335],["cubuffs.com",335],["gobearcats.com",335],["gohuskies.com",335],["mgoblue.com",335],["osubeavers.com",335],["pittsburghpanthers.com",335],["rolltide.com",335],["texassports.com",335],["thesundevils.com",335],["uclabruins.com",335],["wvuathletics.com",335],["wvusports.com",335],["arizonawildcats.com",335],["calbears.com",335],["cuse.com",335],["georgiadogs.com",335],["goducks.com",335],["goheels.com",335],["gostanford.com",335],["insidekstatesports.com",335],["insidekstatesports.info",335],["insidekstatesports.net",335],["insidekstatesports.org",335],["k-stateathletics.com",335],["k-statefootball.net",335],["k-statefootball.org",335],["k-statesports.com",335],["k-statesports.net",335],["k-statesports.org",335],["k-statewomenshoops.com",335],["k-statewomenshoops.net",335],["k-statewomenshoops.org",335],["kstateathletics.com",335],["kstatefootball.net",335],["kstatefootball.org",335],["kstatesports.com",335],["kstatewomenshoops.com",335],["kstatewomenshoops.net",335],["kstatewomenshoops.org",335],["ksuathletics.com",335],["ksusports.com",335],["scarletknights.com",335],["showdownforrelief.com",335],["syracusecrunch.com",335],["texastech.com",335],["theacc.com",335],["ukathletics.com",335],["usctrojans.com",335],["utahutes.com",335],["utsports.com",335],["wsucougars.com",335],["vidlii.com",[335,360]],["tricksplit.io",335],["fangraphs.com",336],["stern.de",337],["geo.de",337],["brigitte.de",337],["tvspielfilm.de",[338,339,340,341]],["tvtoday.de",[338,339,340,341]],["chip.de",[338,339,340,341]],["focus.de",[338,339,340,341]],["fitforfun.de",[338,339,340,341]],["n-tv.de",342],["player.rtl2.de",343],["planetaminecraft.com",344],["cravesandflames.com",345],["codesnse.com",345],["flyad.vip",345],["lapresse.ca",346],["kolyoom.com",347],["ilovephd.com",347],["negumo.com",348],["games.wkb.jp",[349,350]],["kenshi.fandom.com",352],["hausbau-forum.de",353],["homeairquality.org",353],["faucettronn.click",353],["fake-it.ws",354],["laksa19.github.io",355],["1shortlink.com",356],["u-s-news.com",357],["luscious.net",358],["makemoneywithurl.com",359],["junkyponk.com",359],["healthfirstweb.com",359],["vocalley.com",359],["yogablogfit.com",359],["howifx.com",[359,541]],["en.financerites.com",359],["mythvista.com",359],["livenewsflix.com",359],["cureclues.com",359],["apekite.com",359],["enit.in",359],["iammagnus.com",360],["dailyvideoreports.net",360],["unityassets4free.com",360],["docer.*",361],["resetoff.pl",361],["sexodi.com",361],["cdn77.org",362],["3sexporn.com",363],["momxxxsex.com",363],["myfreevintageporn.com",363],["penisbuyutucum.net",363],["ujszo.com",364],["newsmax.com",365],["nadidetarifler.com",366],["siz.tv",366],["suzylu.co.uk",[367,368]],["onworks.net",369],["yabiladi.com",369],["downloadsoft.net",370],["newsobserver.com",371],["arkadiumhosted.com",371],["testlanguages.com",372],["newsinlevels.com",372],["videosinlevels.com",372],["bookmystrip.com",373],["sabkiyojana.com",373],["starkroboticsfrc.com",374],["sinonimos.de",374],["antonimos.de",374],["quesignifi.ca",374],["tiktokrealtime.com",374],["tiktokcounter.net",374],["tpayr.xyz",374],["poqzn.xyz",374],["ashrfd.xyz",374],["rezsx.xyz",374],["tryzt.xyz",374],["ashrff.xyz",374],["rezst.xyz",374],["dawenet.com",374],["erzar.xyz",374],["waezm.xyz",374],["waezg.xyz",374],["blackwoodacademy.org",374],["cryptednews.space",374],["vivuq.com",374],["swgop.com",374],["vbnmll.com",374],["telcoinfo.online",374],["dshytb.com",374],["btcbitco.in",[374,378]],["btcsatoshi.net",374],["cempakajaya.com",374],["crypto4yu.com",374],["readbitcoin.org",374],["wiour.com",374],["finish.addurl.biz",374],["aiimgvlog.fun",[374,381]],["laweducationinfo.com",374],["savemoneyinfo.com",374],["worldaffairinfo.com",374],["godstoryinfo.com",374],["successstoryinfo.com",374],["cxissuegk.com",374],["learnmarketinfo.com",374],["bhugolinfo.com",374],["armypowerinfo.com",374],["rsadnetworkinfo.com",374],["rsinsuranceinfo.com",374],["rsfinanceinfo.com",374],["rsgamer.app",374],["rssoftwareinfo.com",374],["rshostinginfo.com",374],["rseducationinfo.com",374],["phonereviewinfo.com",374],["makeincomeinfo.com",374],["gknutshell.com",374],["vichitrainfo.com",374],["workproductivityinfo.com",374],["dopomininfo.com",374],["hostingdetailer.com",374],["fitnesssguide.com",374],["tradingfact4u.com",374],["cryptofactss.com",374],["softwaredetail.com",374],["artoffocas.com",374],["insurancesfact.com",374],["travellingdetail.com",374],["advertisingexcel.com",374],["allcryptoz.net",374],["batmanfactor.com",374],["beautifulfashionnailart.com",374],["crewbase.net",374],["documentaryplanet.xyz",374],["crewus.net",374],["gametechreviewer.com",374],["midebalonu.net",374],["misterio.ro",374],["phineypet.com",374],["seory.xyz",374],["shinbhu.net",374],["shinchu.net",374],["substitutefor.com",374],["talkforfitness.com",374],["thefitbrit.co.uk",374],["thumb8.net",374],["thumb9.net",374],["topcryptoz.net",374],["uniqueten.net",374],["ultraten.net",374],["exactpay.online",374],["quins.us",374],["kiddyearner.com",374],["imagereviser.com",375],["tech.pubghighdamage.com",376],["tech.techkhulasha.com",376],["hipsonyc.com",376],["jiocinema.com",376],["rapid-cloud.co",376],["uploadmall.com",376],["rkd3.dev",376],["4funbox.com",377],["nephobox.com",377],["1024tera.com",377],["terabox.*",377],["blog.cryptowidgets.net",378],["blog.insurancegold.in",378],["blog.wiki-topia.com",378],["blog.coinsvalue.net",378],["blog.cookinguide.net",378],["blog.freeoseocheck.com",378],["blog24.me",378],["bildirim.*",380],["arahdrive.com",381],["appsbull.com",382],["diudemy.com",382],["maqal360.com",[382,383,384]],["lifesurance.info",385],["akcartoons.in",386],["cybercityhelp.in",386],["infokeeda.xyz",387],["webzeni.com",387],["dl.apkmoddone.com",388],["phongroblox.com",388],["fuckingfast.net",389],["tickhosting.com",390],["in91vip.win",391],["datavaults.co",392],["t-online.de",394],["upornia.*",[395,396]],["bobs-tube.com",397],["pornohirsch.net",398],["pixsera.net",399],["pc-builds.com",400],["qtoptens.com",400],["reuters.com",400],["today.com",400],["videogamer.com",400],["wrestlinginc.com",400],["usatoday.com",401],["ydr.com",401],["247sports.com",402],["indiatimes.com",403],["netzwelt.de",404],["arcade.buzzrtv.com",405],["arcade.dailygazette.com",405],["arcade.lemonde.fr",405],["arena.gamesforthebrain.com",405],["bestpuzzlesandgames.com",405],["cointiply.arkadiumarena.com",405],["gamelab.com",405],["games.abqjournal.com",405],["games.amny.com",405],["games.bellinghamherald.com",405],["games.besthealthmag.ca",405],["games.bnd.com",405],["games.boston.com",405],["games.bostonglobe.com",405],["games.bradenton.com",405],["games.centredaily.com",405],["games.charlotteobserver.com",405],["games.cnhinews.com",405],["games.crosswordgiant.com",405],["games.dailymail.co.uk",405],["games.dallasnews.com",405],["games.daytondailynews.com",405],["games.denverpost.com",405],["games.everythingzoomer.com",405],["games.fresnobee.com",405],["games.gameshownetwork.com",405],["games.get.tv",405],["games.greatergood.com",405],["games.heraldonline.com",405],["games.heraldsun.com",405],["games.idahostatesman.com",405],["games.insp.com",405],["games.islandpacket.com",405],["games.journal-news.com",405],["games.kansas.com",405],["games.kansascity.com",405],["games.kentucky.com",405],["games.lancasteronline.com",405],["games.ledger-enquirer.com",405],["games.macon.com",405],["games.mashable.com",405],["games.mercedsunstar.com",405],["games.metro.us",405],["games.metv.com",405],["games.miamiherald.com",405],["games.modbee.com",405],["games.moviestvnetwork.com",405],["games.myrtlebeachonline.com",405],["games.nationalreview.com",405],["games.newsobserver.com",405],["games.parade.com",405],["games.pressdemocrat.com",405],["games.puzzlebaron.com",405],["games.puzzler.com",405],["games.puzzles.ca",405],["games.qns.com",405],["games.readersdigest.ca",405],["games.sacbee.com",405],["games.sanluisobispo.com",405],["games.sixtyandme.com",405],["games.sltrib.com",405],["games.springfieldnewssun.com",405],["games.star-telegram.com",405],["games.startribune.com",405],["games.sunherald.com",405],["games.theadvocate.com",405],["games.thenewstribune.com",405],["games.theolympian.com",405],["games.theportugalnews.com",405],["games.thestar.com",405],["games.thestate.com",405],["games.tri-cityherald.com",405],["games.triviatoday.com",405],["games.usnews.com",405],["games.word.tips",405],["games.wordgenius.com",405],["games.wtop.com",405],["jeux.meteocity.com",405],["juegos.as.com",405],["juegos.elnuevoherald.com",405],["juegos.elpais.com",405],["philly.arkadiumarena.com",405],["play.dictionary.com",405],["puzzles.bestforpuzzles.com",405],["puzzles.centralmaine.com",405],["puzzles.crosswordsolver.org",405],["puzzles.independent.co.uk",405],["puzzles.nola.com",405],["puzzles.pressherald.com",405],["puzzles.standard.co.uk",405],["puzzles.sunjournal.com",405],["arkadium.com",406],["abysscdn.com",[407,408]],["arcai.com",409],["my-code4you.blogspot.com",410],["flickr.com",411],["firefile.cc",412],["pestleanalysis.com",412],["kochamjp.pl",412],["tutorialforlinux.com",412],["whatsaero.com",412],["animeblkom.net",[412,426]],["blkom.com",412],["globes.co.il",[413,414]],["jardiner-malin.fr",415],["tw-calc.net",416],["ohmybrush.com",417],["talkceltic.net",418],["mentalfloss.com",419],["uprafa.com",420],["cube365.net",421],["wwwfotografgotlin.blogspot.com",422],["freelistenonline.com",422],["badassdownloader.com",423],["quickporn.net",424],["yellowbridge.com",425],["aosmark.com",427],["ctrlv.*",428],["atozmath.com",[429,430,431,432,433,434,435]],["newyorker.com",436],["brighteon.com",437],["more.tv",438],["video1tube.com",439],["alohatube.xyz",439],["4players.de",440],["onlinesoccermanager.com",440],["fshost.me",441],["link.cgtips.org",442],["hentaicloud.com",443],["netfapx.com",445],["javdragon.org",445],["javneon.tv",445],["paperzonevn.com",446],["9jarock.org",447],["fzmovies.info",447],["fztvseries.ng",447],["netnaijas.com",447],["hentaienglish.com",448],["hentaiporno.xxx",448],["venge.io",[449,450]],["btcbux.io",451],["its.porn",[452,453]],["atv.at",454],["2ndrun.tv",455],["rackusreads.com",455],["teachmemicro.com",455],["willcycle.com",455],["kusonime.com",[456,457]],["123movieshd.*",458],["imgur.com",[459,460,720]],["hentai-party.com",461],["hentaicomics.pro",461],["uproxy.*",462],["animesa.*",463],["subtitle.one",464],["subtitleone.cc",464],["genshinimpactcalculator.com",465],["mysexgames.com",466],["cinecalidad.*",[467,468]],["xnxx.com",469],["xvideos.*",469],["gdr-online.com",470],["mmm.dk",471],["iqiyi.com",[472,473,607]],["m.iqiyi.com",474],["nbcolympics.com",475],["apkhex.com",476],["indiansexstories2.net",477],["issstories.xyz",477],["1340kbbr.com",478],["gorgeradio.com",478],["kduk.com",478],["kedoam.com",478],["kejoam.com",478],["kelaam.com",478],["khsn1230.com",478],["kjmx.rocks",478],["kloo.com",478],["klooam.com",478],["klykradio.com",478],["kmed.com",478],["kmnt.com",478],["kool991.com",478],["kpnw.com",478],["kppk983.com",478],["krktcountry.com",478],["ktee.com",478],["kwro.com",478],["kxbxfm.com",478],["thevalley.fm",478],["quizlet.com",479],["dsocker1234.blogspot.com",480],["schoolcheats.net",[481,482]],["mgnet.xyz",483],["designtagebuch.de",484],["pixroute.com",485],["uploady.io",486],["calculator-online.net",487],["luckydice.net",488],["adarima.org",488],["weatherwx.com",488],["sattaguess.com",488],["winshell.de",488],["rosasidan.ws",488],["modmakers.xyz",488],["gamepure.in",488],["warrenrahul.in",488],["austiblox.net",488],["upiapi.in",488],["daemonanime.net",488],["networkhint.com",488],["thichcode.net",488],["texturecan.com",488],["tikmate.app",[488,615]],["arcaxbydz.id",488],["quotesshine.com",488],["porngames.club",489],["sexgames.xxx",489],["111.90.159.132",490],["mobile-tracker-free.com",491],["pfps.gg",492],["social-unlock.com",493],["superpsx.com",494],["ninja.io",495],["sourceforge.net",496],["samfirms.com",497],["rapelust.com",498],["vtube.to",498],["desitelugusex.com",498],["dvdplay.*",498],["xvideos-downloader.net",498],["xxxvideotube.net",498],["sdefx.cloud",498],["nozomi.la",498],["moviesonlinefree.net",498],["banned.video",499],["madmaxworld.tv",499],["androidpolice.com",499],["babygaga.com",499],["backyardboss.net",499],["carbuzz.com",499],["cbr.com",499],["collider.com",499],["dualshockers.com",499],["footballfancast.com",499],["footballleagueworld.co.uk",499],["gamerant.com",499],["givemesport.com",499],["hardcoregamer.com",499],["hotcars.com",499],["howtogeek.com",499],["makeuseof.com",499],["moms.com",499],["movieweb.com",499],["pocket-lint.com",499],["pocketnow.com",499],["screenrant.com",499],["simpleflying.com",499],["thegamer.com",499],["therichest.com",499],["thesportster.com",499],["thethings.com",499],["thetravel.com",499],["topspeed.com",499],["xda-developers.com",499],["huffpost.com",500],["ingles.com",501],["spanishdict.com",501],["surfline.com",[502,503]],["play.tv3.ee",504],["play.tv3.lt",504],["play.tv3.lv",[504,505]],["tv3play.skaties.lv",504],["trendyoum.com",506],["bulbagarden.net",507],["hollywoodlife.com",508],["mat6tube.com",509],["hotabis.com",510],["root-nation.com",510],["italpress.com",510],["airsoftmilsimnews.com",510],["artribune.com",510],["textstudio.co",511],["newtumbl.com",512],["apkmaven.*",513],["aruble.net",514],["nevcoins.club",515],["mail.com",516],["gmx.*",517],["mangakita.id",519],["avpgalaxy.net",520],["mhma12.tech",521],["panda-novel.com",522],["zebranovel.com",522],["lightsnovel.com",522],["eaglesnovel.com",522],["pandasnovel.com",522],["ewrc-results.com",523],["kizi.com",524],["cyberscoop.com",525],["fedscoop.com",525],["canale.live",526],["jeep-cj.com",527],["sponsorhunter.com",528],["cloudcomputingtopics.net",529],["likecs.com",530],["tiscali.it",531],["linkspy.cc",532],["adshnk.com",533],["chattanoogan.com",534],["adsy.pw",535],["playstore.pw",535],["windowspro.de",536],["snapinst.app",537],["tvtv.ca",538],["tvtv.us",538],["mydaddy.cc",539],["roadtrippin.fr",540],["vavada5com.com",541],["anyporn.com",[542,559]],["bravoporn.com",542],["bravoteens.com",542],["crocotube.com",542],["hellmoms.com",542],["hellporno.com",542],["sex3.com",542],["tubewolf.com",542],["xbabe.com",542],["xcum.com",542],["zedporn.com",542],["imagetotext.info",543],["infokik.com",544],["freepik.com",545],["ddwloclawek.pl",[546,547]],["www.seznam.cz",548],["deezer.com",549],["my-subs.co",550],["plaion.com",551],["slideshare.net",[552,553]],["ustreasuryyieldcurve.com",554],["businesssoftwarehere.com",555],["goo.st",555],["freevpshere.com",555],["softwaresolutionshere.com",555],["gamereactor.*",557],["madoohd.com",558],["doomovie-hd.*",558],["staige.tv",560],["lvturbo.com",561],["androidadult.com",562],["streamvid.net",563],["watchtv24.com",564],["cellmapper.net",565],["medscape.com",566],["newscon.org",[567,568]],["wheelofgold.com",569],["drakecomic.*",569],["bembed.net",570],["embedv.net",570],["fslinks.org",570],["listeamed.net",570],["v6embed.xyz",570],["vembed.*",570],["vgplayer.xyz",570],["vid-guard.com",570],["vinomo.xyz",570],["app.blubank.com",571],["mobileweb.bankmellat.ir",571],["chat.nrj.fr",572],["chat.tchatche.com",[572,587]],["ccthesims.com",579],["chromeready.com",579],["coursedrive.org",579],["dtbps3games.com",579],["illustratemagazine.com",579],["uknip.co.uk",579],["vod.pl",580],["megadrive-emulator.com",581],["tvhay.*",[582,583]],["animesaga.in",584],["moviesapi.club",584],["bestx.stream",584],["watchx.top",584],["digimanie.cz",585],["svethardware.cz",585],["srvy.ninja",586],["cnn.com",[588,589,590]],["news.bg",591],["edmdls.com",592],["freshremix.net",592],["scenedl.org",592],["trakt.tv",593],["shroomers.app",597],["classicalradio.com",598],["di.fm",598],["jazzradio.com",598],["radiotunes.com",598],["rockradio.com",598],["zenradio.com",598],["getthit.com",599],["techedubyte.com",600],["soccerinhd.com",600],["movie-th.tv",601],["iwanttfc.com",602],["nutraingredients-asia.com",603],["nutraingredients-latam.com",603],["nutraingredients-usa.com",603],["nutraingredients.com",603],["ozulscansen.com",604],["nexusmods.com",605],["lookmovie.*",606],["lookmovie2.to",606],["biletomat.pl",608],["hextank.io",[609,610]],["filmizlehdfilm.com",[611,612,613,614]],["filmizletv.*",[611,612,613,614]],["fullfilmizle.cc",[611,612,613,614]],["gofilmizle.net",[611,612,613,614]],["btvplus.bg",616],["sagewater.com",617],["redlion.net",617],["filmweb.pl",[618,619]],["satdl.com",620],["vidstreaming.xyz",621],["everand.com",622],["myradioonline.pl",623],["cbs.com",624],["paramountplus.com",624],["fullxh.com",625],["galleryxh.site",625],["megaxh.com",625],["movingxh.world",625],["seexh.com",625],["unlockxh4.com",625],["valuexh.life",625],["xhaccess.com",625],["xhadult2.com",625],["xhadult3.com",625],["xhadult4.com",625],["xhadult5.com",625],["xhamster.*",625],["xhamster1.*",625],["xhamster10.*",625],["xhamster11.*",625],["xhamster12.*",625],["xhamster13.*",625],["xhamster14.*",625],["xhamster15.*",625],["xhamster16.*",625],["xhamster17.*",625],["xhamster18.*",625],["xhamster19.*",625],["xhamster20.*",625],["xhamster2.*",625],["xhamster3.*",625],["xhamster4.*",625],["xhamster42.*",625],["xhamster46.com",625],["xhamster5.*",625],["xhamster7.*",625],["xhamster8.*",625],["xhamsterporno.mx",625],["xhbig.com",625],["xhbranch5.com",625],["xhchannel.com",625],["xhdate.world",625],["xhday.com",625],["xhday1.com",625],["xhlease.world",625],["xhmoon5.com",625],["xhofficial.com",625],["xhopen.com",625],["xhplanet1.com",625],["xhplanet2.com",625],["xhreal2.com",625],["xhreal3.com",625],["xhspot.com",625],["xhtotal.com",625],["xhtree.com",625],["xhvictory.com",625],["xhwebsite.com",625],["xhwebsite2.com",625],["xhwebsite5.com",625],["xhwide1.com",625],["xhwide2.com",625],["xhwide5.com",625],["file-upload.net",627],["lightnovelworld.*",628],["acortalo.*",[629,630,631,632]],["acortar.*",[629,630,631,632]],["megadescarga.net",[629,630,631,632]],["megadescargas.net",[629,630,631,632]],["hentaihaven.xxx",633],["jacquieetmicheltv2.net",635],["a2zapk.*",636],["fcportables.com",[637,638]],["emurom.net",639],["freethesaurus.com",[640,641]],["thefreedictionary.com",[640,641]],["oeffentlicher-dienst.info",642],["im9.eu",643],["dcdlplayer8a06f4.xyz",644],["ultimate-guitar.com",645],["claimbits.net",646],["sexyscope.net",647],["kickassanime.*",648],["recherche-ebook.fr",649],["virtualdinerbot.com",649],["zonebourse.com",650],["pink-sluts.net",651],["andhrafriends.com",652],["benzinpreis.de",653],["turtleviplay.xyz",654],["defenseone.com",655],["govexec.com",655],["nextgov.com",655],["route-fifty.com",655],["sharing.wtf",656],["wetter3.de",657],["esportivos.fun",658],["cosmonova-broadcast.tv",659],["hartvannederland.nl",660],["shownieuws.nl",660],["vandaaginside.nl",660],["rock.porn",[661,662]],["videzz.net",[663,664]],["ezaudiobookforsoul.com",665],["club386.com",666],["decompiler.com",667],["littlebigsnake.com",668],["easyfun.gg",669],["smailpro.com",670],["ilgazzettino.it",671],["ilmessaggero.it",671],["3bmeteo.com",[672,673]],["mconverter.eu",674],["lover937.net",675],["10gb.vn",676],["pes6.es",677],["tactics.tools",[678,679]],["boundhub.com",680],["alocdnnetu.xyz",681],["reliabletv.me",682],["jakondo.ru",683],["filecrypt.*",684],["nolive.me",686],["wired.com",687],["spankbang.*",[688,689,690,722,723]],["hulu.com",[691,692,693]],["anonymfile.com",694],["gofile.to",694],["dotycat.com",695],["rateyourmusic.com",696],["reporterpb.com.br",697],["blog-dnz.com",699],["18adultgames.com",700],["colnect.com",[701,702]],["adultgamesworld.com",703],["bgmiupdate.com.in",704],["reviewdiv.com",705],["parametric-architecture.com",706],["laurelberninteriors.com",[707,725]],["voiceofdenton.com",708],["concealednation.org",708],["askattest.com",710],["opensubtitles.com",711],["savefiles.com",712],["streamup.ws",713],["goodstream.one",714],["www.google.*",715],["tacobell.com",716],["zefoy.com",717],["cnet.com",718],["natgeotv.com",721],["globo.com",724],["wayfair.com",726]]);
const exceptionsMap = new Map([["cloudflare.com",[0]],["pingit.com",[173]],["loan.bgmi32bitapk.in",[300]],["lookmovie.studio",[606]]]);
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
