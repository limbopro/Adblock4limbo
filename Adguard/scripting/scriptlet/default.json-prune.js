/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
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

/* jshint esversion:11 */
/* global cloneInto */

'use strict';

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_jsonPrune = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["playerResponse.adPlacements playerResponse.playerAds playerResponse.adSlots adPlacements playerAds adSlots important"],["enabled","force_disabled"],["adBlockWallEnabled"],["0"],["adtagparameter","enabled"],["adEnabled"],["Playlist.ContentBreaks"],["adRenderers"],["urls","urls.0"],["breaks pause_ads video_metadata.end_credits_time","pause_ads"],["breaks pause_ads video_metadata.end_credits_time","breaks"],["cuepointPlaylist"],["value.media.ad_breaks"],["data.device.adSponsorshipTemplate data.device.adsParams"],["data.[].vast_url"],["data.meta.require_addon data.meta.require_captcha data.meta.require_notifications data.meta.require_og_ads data.meta.require_video data.meta.require_web data.meta.require_related_topics data.meta.require_custom_ad_step data.meta.og_ads_offers data.meta.addon_url data.displayAds data.linkCustomAdOffers"],["vastUrl"],["adReinsertion"],["enabled","testhide"],["adParam"],["adProvider"],["playlist.movie.advertising.ad_server"],["ad_pods.0.ads.0.segments.0.media ad_pods.1.ads.1.segments.1.media ad_pods.2.ads.2.segments.2.media ad_pods.3.ads.3.segments.3.media ad_pods.4.ads.4.segments.4.media ad_pods.5.ads.5.segments.5.media ad_pods.6.ads.6.segments.6.media ad_pods.7.ads.7.segments.7.media ad_pods.8.ads.8.segments.8.media"],["ads.servers.[].apiAddress"],["breaks interstitials info","interstitials"],["*","ad_unit_path"],["clickAnywhere urls"],["meta.advertise"],["data.attributes.config.freewheel data.attributes.config.featureFlags.dPlayer"],["data.attributes.ssaiInfo.forecastTimeline data.attributes.ssaiInfo.vendorAttributes.nonLinearAds data.attributes.ssaiInfo.vendorAttributes.videoView data.attributes.ssaiInfo.vendorAttributes.breaks.[].ads.[].adMetadata data.attributes.ssaiInfo.vendorAttributes.breaks.[].ads.[].adParameters data.attributes.ssaiInfo.vendorAttributes.breaks.[].timeOffset"],["movie.advertising.ad_server playlist.movie.advertising.ad_server"],["cuepoints","cuepoints.[].start cuepoints.[].end cuepoints.[].start_float cuepoints.[].end_float"],["testadtags ad"],["ads"],["ssaiInfo fallback.ssaiInfo"],["result.ads"],["stream.insertion.adSession"],["stream.insertion.points"],["stream.insertion"],["stream.sources.*.insertion"],["pods.0.ads"],["*.tanya_video_ads"],["web_share_ads_adsterra_config wap_short_link_middle_page_ad wap_short_link_middle_page_show_time data.ads_cpm_info"],["success.page.spaces.player.widget_wrappers.[].widget.data.intervention_data"],["avails"],["data.reg"],["playerResponse.adPlacements playerResponse.playerAds adPlacements playerAds"],["response.ads"],["data.*.elements.edges.[].node.outboundLink"],["data.children.[].data.outbound_link"],["dataLayer.trackingId user.trackingId"],["config.globalInteractions.[].bsData"]];

const hostnamesMap = new Map([["music.youtube.com",0],["chip.de",1],["focus.de",1],["bild.de",2],["video.gjirafa.com",3],["winfuture.de",4],["popcornflix.com",5],["itv.com",6],["funimation.com",7],["hulu.com",[9,10]],["www.amazon.co.jp",11],["www.amazon.com",11],["crunchyroll.com",12],["crackle.com",13],["vvvvid.it",14],["linkvertise.com",15],["welt.de",16],["plus.rtl.de",17],["tv2.no",18],["doomovie-hd.com",19],["sonyliv.com",20],["tvn24.pl",21],["art19.com",22],["domoplus.pl",23],["kuchniaplus.pl",23],["miniminiplus.pl",23],["teletoonplus.pl",23],["vix.com",24],["citytv.com",25],["vlive.tv",27],["go.discovery.com",29],["tvn.pl",30],["10play.com.au",31],["player.stv.tv",32],["fox.com",33],["foxsports.com",33],["play.max.com",34],["sportstiger.com",35],["disneyplus.com",[36,37,38,39,40]],["colearn.id",41],["hotmediahub.com",42],["terabox.fun",42],["hotstar.com",43],["nbc.com",44],["play.history.com",45],["eu-proxy.startpage.com",46],["player.popfun.co.uk",47],["reddit.com",[48,49]],["nypost.com",50],["pagesix.com",50],["stories.los40.com",51]]);

const entitiesMap = new Map([["elixx",8],["shorttey",26],["discoveryplus",[28,29]]]);

const exceptionsMap = new Map([["dutyfarm.welt.de",[16]],["old.reddit.com",[48,49]]]);

/******************************************************************************/

function jsonPrune(
    rawPrunePaths = '',
    rawNeedlePaths = '',
    stackNeedle = ''
) {
    const safe = safeSelf();
    const stackNeedleDetails = safe.initPattern(stackNeedle, { canNegate: true });
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    JSON.parse = new Proxy(JSON.parse, {
        apply: function(target, thisArg, args) {
            const objBefore = Reflect.apply(target, thisArg, args);
            const objAfter = objectPrune(
                objBefore,
                rawPrunePaths,
                rawNeedlePaths,
                stackNeedleDetails,
                extraArgs
           );
           return objAfter || objBefore;
        },
    });
}

function matchObjectProperties(propNeedles, ...objs) {
    if ( matchObjectProperties.extractProperties === undefined ) {
        matchObjectProperties.extractProperties = (src, des, props) => {
            for ( const p of props ) {
                const v = src[p];
                if ( v === undefined ) { continue; }
                des[p] = src[p];
            }
        };
    }
    const safe = safeSelf();
    const haystack = {};
    const props = Array.from(propNeedles.keys());
    for ( const obj of objs ) {
        if ( obj instanceof Object === false ) { continue; }
        matchObjectProperties.extractProperties(obj, haystack, props);
    }
    for ( const [ prop, details ] of propNeedles ) {
        let value = haystack[prop];
        if ( value === undefined ) { continue; }
        if ( typeof value !== 'string' ) {
            try { value = JSON.stringify(value); }
            catch(ex) { }
            if ( typeof value !== 'string' ) { continue; }
        }
        if ( safe.testPattern(details, value) ) { continue; }
        return false;
    }
    return true;
}

function objectPrune(
    obj,
    rawPrunePaths,
    rawNeedlePaths,
    stackNeedleDetails = { matchAll: true },
    extraArgs = {}
) {
    if ( typeof rawPrunePaths !== 'string' ) { return; }
    const safe = safeSelf();
    const prunePaths = rawPrunePaths !== ''
        ? rawPrunePaths.split(/ +/)
        : [];
    const needlePaths = prunePaths.length !== 0 && rawNeedlePaths !== ''
        ? rawNeedlePaths.split(/ +/)
        : [];
    const logLevel = shouldLog({ log: rawPrunePaths === '' || extraArgs.log });
    const reLogNeedle = safe.patternToRegex(logLevel === true ? rawNeedlePaths : '');
    if ( stackNeedleDetails.matchAll !== true ) {
        if ( matchesStackTrace(stackNeedleDetails, extraArgs.logstack) === false ) {
            return;
        }
    }
    if ( objectPrune.findOwner === undefined ) {
        objectPrune.findOwner = (root, path, prune = false) => {
            let owner = root;
            let chain = path;
            for (;;) {
                if ( typeof owner !== 'object' || owner === null  ) { return false; }
                const pos = chain.indexOf('.');
                if ( pos === -1 ) {
                    if ( prune === false ) {
                        return owner.hasOwnProperty(chain);
                    }
                    let modified = false;
                    if ( chain === '*' ) {
                        for ( const key in owner ) {
                            if ( owner.hasOwnProperty(key) === false ) { continue; }
                            delete owner[key];
                            modified = true;
                        }
                    } else if ( owner.hasOwnProperty(chain) ) {
                        delete owner[chain];
                        modified = true;
                    }
                    return modified;
                }
                const prop = chain.slice(0, pos);
                if (
                    prop === '[]' && Array.isArray(owner) ||
                    prop === '*' && owner instanceof Object
                ) {
                    const next = chain.slice(pos + 1);
                    let found = false;
                    for ( const key of Object.keys(owner) ) {
                        found = objectPrune.findOwner(owner[key], next, prune) || found;
                    }
                    return found;
                }
                if ( owner.hasOwnProperty(prop) === false ) { return false; }
                owner = owner[prop];
                chain = chain.slice(pos + 1);
            }
        };
        objectPrune.mustProcess = (root, needlePaths) => {
            for ( const needlePath of needlePaths ) {
                if ( objectPrune.findOwner(root, needlePath) === false ) {
                    return false;
                }
            }
            return true;
        };
        objectPrune.logJson = (json, msg, reNeedle) => {
            if ( reNeedle.test(json) === false ) { return; }
            safeSelf().uboLog(`objectPrune()`, msg, location.hostname, json);
        };
    }
    const jsonBefore = logLevel ? JSON.stringify(obj, null, 2) : '';
    if ( logLevel === true || logLevel === 'all' ) {
        objectPrune.logJson(jsonBefore, `prune:"${rawPrunePaths}" log:"${logLevel}"`, reLogNeedle);
    }
    if ( prunePaths.length === 0 ) { return; }
    let outcome = 'nomatch';
    if ( objectPrune.mustProcess(obj, needlePaths) ) {
        for ( const path of prunePaths ) {
            if ( objectPrune.findOwner(obj, path, true) ) {
                outcome = 'match';
            }
        }
    }
    if ( logLevel === outcome ) {
        objectPrune.logJson(jsonBefore, `prune:"${rawPrunePaths}" log:"${logLevel}"`, reLogNeedle);
    }
    if ( outcome === 'match' ) { return obj; }
}

function parsePropertiesToMatch(propsToMatch, implicit = '') {
    const safe = safeSelf();
    const needles = new Map();
    if ( propsToMatch === undefined || propsToMatch === '' ) { return needles; }
    const options = { canNegate: true };
    for ( const needle of propsToMatch.split(/\s+/) ) {
        const [ prop, pattern ] = needle.split(':');
        if ( prop === '' ) { continue; }
        if ( pattern !== undefined ) {
            needles.set(prop, safe.initPattern(pattern, options));
        } else if ( implicit !== '' ) {
            needles.set(implicit, safe.initPattern(prop, options));
        }
    }
    return needles;
}

function safeSelf() {
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
    }
    const self = globalThis;
    const safe = {
        'Error': self.Error,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'jsonParse': self.JSON.parse.bind(self.JSON),
        'jsonStringify': self.JSON.stringify.bind(self.JSON),
        'log': console.log.bind(console),
        uboLog(...args) {
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
            }
            const expect = (options.canNegate === true && pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    pattern,
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            return {
                pattern,
                re: new this.RegExp(pattern.replace(
                    /[.*+?^${}()|[\]\\]/g, '\\$&'),
                    options.flags
                ),
                expect,
            };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            return this.RegExp_test.call(details.re, haystack) === details.expect;
        },
        patternToRegex(pattern, flags = undefined) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
            }
            try {
                return new RegExp(match[1], match[2] || flags);
            }
            catch(ex) {
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
            return Object.fromEntries(entries);
        },
    };
    scriptletGlobals.set('safeSelf', safe);
    return safe;
}

function shouldLog(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.log;
}

function matchesStackTrace(
    needleDetails,
    logLevel = 0
) {
    const safe = safeSelf();
    const exceptionToken = getExceptionToken();
    const error = new safe.Error(exceptionToken);
    const docURL = new URL(self.location.href);
    docURL.hash = '';
    // Normalize stack trace
    const reLine = /(.*?@)?(\S+)(:\d+):\d+\)?$/;
    const lines = [];
    for ( let line of error.stack.split(/[\n\r]+/) ) {
        if ( line.includes(exceptionToken) ) { continue; }
        line = line.trim();
        const match = safe.RegExp_exec.call(reLine, line);
        if ( match === null ) { continue; }
        let url = match[2];
        if ( url.startsWith('(') ) { url = url.slice(1); }
        if ( url === docURL.href ) {
            url = 'inlineScript';
        } else if ( url.startsWith('<anonymous>') ) {
            url = 'injectedScript';
        }
        let fn = match[1] !== undefined
            ? match[1].slice(0, -1)
            : line.slice(0, match.index).trim();
        if ( fn.startsWith('at') ) { fn = fn.slice(2).trim(); }
        let rowcol = match[3];
        lines.push(' ' + `${fn} ${url}${rowcol}:1`.trim());
    }
    lines[0] = `stackDepth:${lines.length-1}`;
    const stack = lines.join('\t');
    const r = safe.testPattern(needleDetails, stack);
    if (
        logLevel === 1 ||
        logLevel === 2 && r ||
        logLevel === 3 && !r
    ) {
        safe.uboLog(stack.replace(/\t/g, '\n'));
    }
    return r;
}

function getExceptionToken() {
    const token =
        String.fromCharCode(Date.now() % 26 + 97) +
        Math.floor(Math.random() * 982451653 + 982451653).toString(36);
    const oe = self.onerror;
    self.onerror = function(msg, ...args) {
        if ( typeof msg === 'string' && msg.includes(token) ) { return true; }
        if ( oe instanceof Function ) {
            return oe.call(this, msg, ...args);
        }
    }.bind();
    return token;
}

/******************************************************************************/

const hnParts = [];
try { hnParts.push(...document.location.hostname.split('.')); }
catch(ex) { }
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { jsonPrune(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

// Inject code

// https://bugzilla.mozilla.org/show_bug.cgi?id=1736575
//   'MAIN' world not yet supported in Firefox, so we inject the code into
//   'MAIN' ourself when environment in Firefox.

// Not Firefox
if ( typeof wrappedJSObject !== 'object' ) {
    return uBOL_jsonPrune();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_jsonPrune = cloneInto([
            [ '(', uBOL_jsonPrune.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_jsonPrune);
        url = page.URL.createObjectURL(blob);
        const doc = page.document;
        script = doc.createElement('script');
        script.async = false;
        script.src = url;
        (doc.head || doc.documentElement || doc).append(script);
    } catch (ex) {
        console.error(ex);
    }
    if ( url ) {
        if ( script ) { script.remove(); }
        page.URL.revokeObjectURL(url);
    }
    delete page.uBOL_jsonPrune;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
