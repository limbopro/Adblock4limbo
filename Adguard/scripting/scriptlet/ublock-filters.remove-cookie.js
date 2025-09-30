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
(function uBOL_removeCookie() {

/******************************************************************************/

function removeCookie(
    needle = ''
) {
    if ( typeof needle !== 'string' ) { return; }
    const safe = safeSelf();
    const reName = safe.patternToRegex(needle);
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 1);
    const throttle = (fn, ms = 500) => {
        if ( throttle.timer !== undefined ) { return; }
        throttle.timer = setTimeout(( ) => {
            throttle.timer = undefined;
            fn();
        }, ms);
    };
    const baseURL = new URL(document.baseURI);
    let targetDomain = extraArgs.domain;
    if ( targetDomain && /^\/.+\//.test(targetDomain) ) {
        const reDomain = new RegExp(targetDomain.slice(1, -1));
        const match = reDomain.exec(baseURL.hostname);
        targetDomain = match ? match[0] : undefined;
    }
    const remove = ( ) => {
        safe.String_split.call(document.cookie, ';').forEach(cookieStr => {
            const pos = cookieStr.indexOf('=');
            if ( pos === -1 ) { return; }
            const cookieName = cookieStr.slice(0, pos).trim();
            if ( reName.test(cookieName) === false ) { return; }
            const part1 = cookieName + '=';
            const part2a = `; domain=${baseURL.hostname}`;
            const part2b = `; domain=.${baseURL.hostname}`;
            let part2c, part2d;
            if ( targetDomain ) {
                part2c = `; domain=${targetDomain}`;
                part2d = `; domain=.${targetDomain}`;
            } else if ( document.domain ) {
                const domain = document.domain;
                if ( domain !== baseURL.hostname ) {
                    part2c = `; domain=.${domain}`;
                }
                if ( domain.startsWith('www.') ) {
                    part2d = `; domain=${domain.replace('www', '')}`;
                }
            }
            const part3 = '; path=/';
            const part4 = '; Max-Age=-1000; expires=Thu, 01 Jan 1970 00:00:00 GMT';
            document.cookie = part1 + part4;
            document.cookie = part1 + part2a + part4;
            document.cookie = part1 + part2b + part4;
            document.cookie = part1 + part3 + part4;
            document.cookie = part1 + part2a + part3 + part4;
            document.cookie = part1 + part2b + part3 + part4;
            if ( part2c !== undefined ) {
                document.cookie = part1 + part2c + part3 + part4;
            }
            if ( part2d !== undefined ) {
                document.cookie = part1 + part2d + part3 + part4;
            }
        });
    };
    remove();
    window.addEventListener('beforeunload', remove);
    if ( typeof extraArgs.when !== 'string' ) { return; }
    const supportedEventTypes = [ 'scroll', 'keydown' ];
    const eventTypes = safe.String_split.call(extraArgs.when, /\s/);
    for ( const type of eventTypes ) {
        if ( supportedEventTypes.includes(type) === false ) { continue; }
        document.addEventListener(type, ( ) => {
            throttle(remove);
        }, { passive: true });
    }
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

/******************************************************************************/

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [["didomi_token"],["PHPSESSID"],["da325"],["ref_cookie"],["/^/"],["PageCount"],["__adblocker"],[],["qusnyQusny"],["/vs|to|vs_spon|tgpOut|current_click/"],["ab"],["video_view_count"],["/__adblocker|ccuid/"],["videoPlayedNumber"],["_ALGOLIA","when","scroll keydown"],["realm.cookiesAndJavascript"],["kt_qparams"],["kt_referer"],["/^blaize_/","when","scroll keydown"],["akaclientip"],["hive_geoloc"],["MicrosoftApplicationsTelemetryDeviceId","when","scroll keydown"],["MicrosoftApplicationsTelemetryFirstLaunchTime"],["_boundless_tracking_id"],["/LithiumVisitor|ValueSurveyVisitorCount|VISITOR_BEACON/"],["kt_ips"],["/^(_pc|cX_)/","when","scroll keydown"],["/_pcid|_pctx|amp_|cX|incap/","when","scroll keydown"],["/^AMCVS?_/"],["disqus_unique","when","scroll keydown"],["/_shopify_(y|sa_)/","when","scroll keydown"],["/ana_client_session_id|wshh_uid/"],["fly_vid","when","scroll keydown"],["/^(ev|vocuser)_/","when","scroll keydown"],["gtagSessionId"],["/^_pubcid|sbgtvNonce|SUID/"],["ajs_anonymous_id","when","scroll keydown"],["/_HFID|mosb/"],["/ppid$/"],["/ph_phc|remark_lead/","when","scroll keydown"],["/incap_|s_fid/","when","scroll keydown"],["/^_pubcid/","when","scroll keydown"],["anonymous_user_id"],["rdsTracking","when","scroll keydown"],["/^\\.(b|s|xp|ub\\.)id/","when","scroll keydown"],["/^ig-|ph_phc_/","when","scroll keydown"],["X-XAct-ID"],["/^fosp_|orig_aid/"],["dvid","when","scroll keydown"],["device_id"],["kim-tracker-uid"],["/swym-|yotpo_/","when","scroll keydown"],["/bitmovin_analytics_uuid|sbgtvNonce|SUID/","when","scroll keydown"],["/_pk_id|hk01_annonymous_id/","when","scroll keydown"],["ga_store_user_id"],["/^_pk_id./","when","scroll keydown"],["/_sharedid|_lc2_fpi/"],["/anonUserId|pid|sid/"],["/__ta_|_shopify_y/","when","scroll keydown"],["_pkc","when","scroll keydown"],["/sstk_|stck_|htjs_anonymous_id/","when","scroll keydown"],["vmidv1"],["/sc_anonymous_id|sc_tracking_anonymous_id/","when","scroll keydown"],["_shopify_y","when","scroll keydown"],["/^_sp_id/","when","scroll keydown"],["bunsar_visitor_id","when","scroll keydown"],["/articlesRead|previousPage/"],["ahoy_visitor"],["ahoy_visit"],["/_alooma/"],["/_vf|mantisid|pbjs_/"],["/^DEVICEFP/"],["/^_pk_/"],["_pc_private"],["_vid_t"],["/^(_tccl_|_scc_session|fpfid)/"],["/^AMP_/"],["/_shopify_y|yotpo_pixel/","when","scroll keydown"]];
const hostnamesMap = new Map([["tv5mondeplus.com",0],["embed.wcostream.com",1],["zootube1.com",2],["subdivx.com",3],["adultasianporn.com",4],["jetpunk.com",5],["blick.ch",6],["kleinezeitung.at",6],["xxxxsx.com",7],["seznam.cz",8],["sexvideos.host",9],["nexusmods.com",10],["colourxh.site",11],["fullxh.com",11],["galleryxh.site",11],["megaxh.com",11],["movingxh.world",11],["seexh.com",11],["unlockxh4.com",11],["valuexh.life",11],["xhaccess.com",11],["xhadult2.com",11],["xhadult3.com",11],["xhadult4.com",11],["xhadult5.com",11],["xhamster.*",11],["xhamster1.*",11],["xhamster10.*",11],["xhamster11.*",11],["xhamster12.*",11],["xhamster13.*",11],["xhamster14.*",11],["xhamster15.*",11],["xhamster16.*",11],["xhamster17.*",11],["xhamster18.*",11],["xhamster19.*",11],["xhamster20.*",11],["xhamster2.*",11],["xhamster3.*",11],["xhamster4.*",11],["xhamster42.*",11],["xhamster46.com",11],["xhamster5.*",11],["xhamster7.*",11],["xhamster8.*",11],["xhamsterporno.mx",11],["xhbig.com",11],["xhbranch5.com",11],["xhchannel.com",11],["xhdate.world",11],["xhlease.world",11],["xhmoon5.com",11],["xhofficial.com",11],["xhopen.com",11],["xhplanet1.com",11],["xhplanet2.com",11],["xhreal2.com",11],["xhreal3.com",11],["xhspot.com",11],["xhtotal.com",11],["xhtree.com",11],["xhvictory.com",11],["xhwebsite.com",11],["xhwebsite2.com",11],["xhwebsite5.com",11],["xhwide1.com",11],["xhwide2.com",11],["xhwide5.com",11],["laurelberninteriors.com",12],["azmen.com",13],["androidauthority.com",14],["beaumontenterprise.com",15],["chron.com",15],["ctinsider.com",15],["ctpost.com",15],["expressnews.com",15],["houstonchronicle.com",15],["lmtonline.com",15],["middletownpress.com",15],["mrt.com",15],["newstimes.com",15],["nhregister.com",15],["registercitizen.com",15],["sfchronicle.com",15],["stamfordadvocate.com",15],["thehour.com",15],["timesunion.com",15],["heavyfetish.com",[16,17,25]],["columbian.com",18],["pagesix.com",18],["theverge.com",[18,61]],["factable.com",[19,20]],["bing.com",21],["microsoft.com",21],["msn.com",21],["web.skype.com",[21,22]],["boundless.com",23],["community.fortinet.com",24],["camhub.cc",25],["kissjav.*",25],["severeporn.com",25],["shemale6.com",25],["watchporn.to",25],["bizjournals.com",[26,28]],["businessinsider.de",26],["computerbild.de",26],["elconfidencial.com",27],["journaldemontreal.com",27],["disqus.com",29],["ozlosleep.com",30],["worldstar.com",31],["cbsnews.com",32],["diariovasco.com",33],["lifehacker.com",34],["katu.com",35],["miro.com",36],["popularmechanics.com",37],["businessinsider.jp",38],["darntough.com",39],["swissotel.com",40],["danslescoulisses.com",41],["pixabay.com",42],["redis.io",43],["galaxus.de",44],["healf.com",45],["terra.com.br",46],["vnexpress.net",47],["makemytrip.com",48],["lared.cl",49],["kimbino.bg",50],["kimbino.ro",50],["shoebacca.com",51],["wpde.com",52],["hk01.com",53],["oilprice.com",54],["buildtheearth.net",55],["allrecipes.com",56],["trendyol.com",57],["bostonscally.com",58],["4gamers.com.tw",59],["shutterstock.com",60],["soundcloud.com",62],["mykitsch.com",63],["huntress.com",64],["flo.com.tr",65],["androidpolice.com",66],["makeuseof.com",66],["movieweb.com",66],["xda-developers.com",66],["dev.to",[67,68]],["vpnmentor.com",69],["mirror.co.uk",70],["www.hoyolab.com",71],["www.hoyoverse.com",71],["liquipedia.net",72],["thehindu.com",73],["farmersjournal.ie",74],["souq-design.com",75],["abs-cbn.com",76],["edikted.com",77]]);
const exceptionsMap = new Map([]);
const hasEntities = true;
const hasAncestors = false;

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
    try { removeCookie(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
