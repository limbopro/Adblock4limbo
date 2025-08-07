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
(function uBOL_preventXhr() {

/******************************************************************************/

function preventXhr(...args) {
    return preventXhrFn(false, ...args);
}

function preventXhrFn(
    trusted = false,
    propsToMatch = '',
    directive = ''
) {
    if ( typeof propsToMatch !== 'string' ) { return; }
    const safe = safeSelf();
    const scriptletName = trusted ? 'trusted-prevent-xhr' : 'prevent-xhr';
    const logPrefix = safe.makeLogPrefix(scriptletName, propsToMatch, directive);
    const xhrInstances = new WeakMap();
    const propNeedles = parsePropertiesToMatchFn(propsToMatch, 'url');
    const warOrigin = scriptletGlobals.warOrigin;
    const safeDispatchEvent = (xhr, type) => {
        try {
            xhr.dispatchEvent(new Event(type));
        } catch {
        }
    };
    const XHRBefore = XMLHttpRequest.prototype;
    self.XMLHttpRequest = class extends self.XMLHttpRequest {
        open(method, url, ...args) {
            xhrInstances.delete(this);
            if ( warOrigin !== undefined && url.startsWith(warOrigin) ) {
                return super.open(method, url, ...args);
            }
            const haystack = { method, url };
            if ( propsToMatch === '' && directive === '' ) {
                safe.uboLog(logPrefix, `Called: ${safe.JSON_stringify(haystack, null, 2)}`);
                return super.open(method, url, ...args);
            }
            if ( matchObjectPropertiesFn(propNeedles, haystack) ) {
                const xhrDetails = Object.assign(haystack, {
                    xhr: this,
                    defer: args.length === 0 || !!args[0],
                    directive,
                    headers: {
                        'date': '',
                        'content-type': '',
                        'content-length': '',
                    },
                    url: haystack.url,
                    props: {
                        response: { value: '' },
                        responseText: { value: '' },
                        responseXML: { value: null },
                    },
                });
                xhrInstances.set(this, xhrDetails);
            }
            return super.open(method, url, ...args);
        }
        send(...args) {
            const xhrDetails = xhrInstances.get(this);
            if ( xhrDetails === undefined ) {
                return super.send(...args);
            }
            xhrDetails.headers['date'] = (new Date()).toUTCString();
            let xhrText = '';
            switch ( this.responseType ) {
            case 'arraybuffer':
                xhrDetails.props.response.value = new ArrayBuffer(0);
                xhrDetails.headers['content-type'] = 'application/octet-stream';
                break;
            case 'blob':
                xhrDetails.props.response.value = new Blob([]);
                xhrDetails.headers['content-type'] = 'application/octet-stream';
                break;
            case 'document': {
                const parser = new DOMParser();
                const doc = parser.parseFromString('', 'text/html');
                xhrDetails.props.response.value = doc;
                xhrDetails.props.responseXML.value = doc;
                xhrDetails.headers['content-type'] = 'text/html';
                break;
            }
            case 'json':
                xhrDetails.props.response.value = {};
                xhrDetails.props.responseText.value = '{}';
                xhrDetails.headers['content-type'] = 'application/json';
                break;
            default: {
                if ( directive === '' ) { break; }
                xhrText = generateContentFn(trusted, xhrDetails.directive);
                if ( xhrText instanceof Promise ) {
                    xhrText = xhrText.then(text => {
                        xhrDetails.props.response.value = text;
                        xhrDetails.props.responseText.value = text;
                    });
                } else {
                    xhrDetails.props.response.value = xhrText;
                    xhrDetails.props.responseText.value = xhrText;
                }
                xhrDetails.headers['content-type'] = 'text/plain';
                break;
            }
            }
            if ( xhrDetails.defer === false ) {
                xhrDetails.headers['content-length'] = `${xhrDetails.props.response.value}`.length;
                Object.defineProperties(xhrDetails.xhr, {
                    readyState: { value: 4 },
                    responseURL: { value: xhrDetails.url },
                    status: { value: 200 },
                    statusText: { value: 'OK' },
                });
                Object.defineProperties(xhrDetails.xhr, xhrDetails.props);
                return;
            }
            Promise.resolve(xhrText).then(( ) => xhrDetails).then(details => {
                Object.defineProperties(details.xhr, {
                    readyState: { value: 1, configurable: true },
                    responseURL: { value: xhrDetails.url },
                });
                safeDispatchEvent(details.xhr, 'readystatechange');
                return details;
            }).then(details => {
                xhrDetails.headers['content-length'] = `${details.props.response.value}`.length;
                Object.defineProperties(details.xhr, {
                    readyState: { value: 2, configurable: true },
                    status: { value: 200 },
                    statusText: { value: 'OK' },
                });
                safeDispatchEvent(details.xhr, 'readystatechange');
                return details;
            }).then(details => {
                Object.defineProperties(details.xhr, {
                    readyState: { value: 3, configurable: true },
                });
                Object.defineProperties(details.xhr, details.props);
                safeDispatchEvent(details.xhr, 'readystatechange');
                return details;
            }).then(details => {
                Object.defineProperties(details.xhr, {
                    readyState: { value: 4 },
                });
                safeDispatchEvent(details.xhr, 'readystatechange');
                safeDispatchEvent(details.xhr, 'load');
                safeDispatchEvent(details.xhr, 'loadend');
                safe.uboLog(logPrefix, `Prevented with response:\n${details.xhr.response}`);
            });
        }
        getResponseHeader(headerName) {
            const xhrDetails = xhrInstances.get(this);
            if ( xhrDetails === undefined || this.readyState < this.HEADERS_RECEIVED ) {
                return super.getResponseHeader(headerName);
            }
            const value = xhrDetails.headers[headerName.toLowerCase()];
            if ( value !== undefined && value !== '' ) { return value; }
            return null;
        }
        getAllResponseHeaders() {
            const xhrDetails = xhrInstances.get(this);
            if ( xhrDetails === undefined || this.readyState < this.HEADERS_RECEIVED ) {
                return super.getAllResponseHeaders();
            }
            const out = [];
            for ( const [ name, value ] of Object.entries(xhrDetails.headers) ) {
                if ( !value ) { continue; }
                out.push(`${name}: ${value}`);
            }
            if ( out.length !== 0 ) { out.push(''); }
            return out.join('\r\n');
        }
    };
    self.XMLHttpRequest.prototype.open.toString = function() {
        return XHRBefore.open.toString();
    };
    self.XMLHttpRequest.prototype.send.toString = function() {
        return XHRBefore.send.toString();
    };
    self.XMLHttpRequest.prototype.getResponseHeader.toString = function() {
        return XHRBefore.getResponseHeader.toString();
    };
    self.XMLHttpRequest.prototype.getAllResponseHeaders.toString = function() {
        return XHRBefore.getAllResponseHeaders.toString();
    };
}

function generateContentFn(trusted, directive) {
    const safe = safeSelf();
    const randomize = len => {
        const chunks = [];
        let textSize = 0;
        do {
            const s = safe.Math_random().toString(36).slice(2);
            chunks.push(s);
            textSize += s.length;
        }
        while ( textSize < len );
        return chunks.join(' ').slice(0, len);
    };
    if ( directive === 'true' ) {
        return randomize(10);
    }
    if ( directive === 'emptyObj' ) {
        return '{}';
    }
    if ( directive === 'emptyArr' ) {
        return '[]';
    }
    if ( directive === 'emptyStr' ) {
        return '';
    }
    if ( directive.startsWith('length:') ) {
        const match = /^length:(\d+)(?:-(\d+))?$/.exec(directive);
        if ( match === null ) { return ''; }
        const min = parseInt(match[1], 10);
        const extent = safe.Math_max(parseInt(match[2], 10) || 0, min) - min;
        const len = safe.Math_min(min + extent * safe.Math_random(), 500000);
        return randomize(len | 0);
    }
    if ( directive.startsWith('war:') ) {
        if ( scriptletGlobals.warOrigin === undefined ) { return ''; }
        return new Promise(resolve => {
            const warOrigin = scriptletGlobals.warOrigin;
            const warName = directive.slice(4);
            const fullpath = [ warOrigin, '/', warName ];
            const warSecret = scriptletGlobals.warSecret;
            if ( warSecret !== undefined ) {
                fullpath.push('?secret=', warSecret);
            }
            const warXHR = new safe.XMLHttpRequest();
            warXHR.responseType = 'text';
            warXHR.onloadend = ev => {
                resolve(ev.target.responseText || '');
            };
            warXHR.open('GET', fullpath.join(''));
            warXHR.send();
        }).catch(( ) => '');
    }
    if ( trusted ) {
        return directive;
    }
    return '';
}

function matchObjectPropertiesFn(propNeedles, ...objs) {
    const safe = safeSelf();
    const matched = [];
    for ( const obj of objs ) {
        if ( obj instanceof Object === false ) { continue; }
        for ( const [ prop, details ] of propNeedles ) {
            let value = obj[prop];
            if ( value === undefined ) { continue; }
            if ( typeof value !== 'string' ) {
                try { value = safe.JSON_stringify(value); }
                catch { }
                if ( typeof value !== 'string' ) { continue; }
            }
            if ( safe.testPattern(details, value) === false ) { return; }
            matched.push(`${prop}: ${value}`);
        }
    }
    return matched;
}

function parsePropertiesToMatchFn(propsToMatch, implicit = '') {
    const safe = safeSelf();
    const needles = new Map();
    if ( propsToMatch === undefined || propsToMatch === '' ) { return needles; }
    const options = { canNegate: true };
    for ( const needle of safe.String_split.call(propsToMatch, /\s+/) ) {
        let [ prop, pattern ] = safe.String_split.call(needle, ':');
        if ( prop === '' ) { continue; }
        if ( pattern !== undefined && /[^$\w -]/.test(prop) ) {
            prop = `${prop}:${pattern}`;
            pattern = undefined;
        }
        if ( pattern !== undefined ) {
            needles.set(prop, safe.initPattern(pattern, options));
        } else if ( implicit !== '' ) {
            needles.set(implicit, safe.initPattern(prop, options));
        }
    }
    return needles;
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
const argsList = [["/vast.php?"],["/click\\.com|preroll|native_render\\.js|acscdn/","length:10001"],["162.252.214.4","true"],["c.adsco.re"],["adsco.re:2087"],["/fd/ls/lsp.aspx"],["method:HEAD"],["mobileanalytics"],["cloudflare.com/cdn-cgi/trace"],["doubleclick"],["/recommendations."],["/api/analytics"],["api"],["lr-ingest.io"],["/gtm.js"],["/froloa.js"],["1.1.1.1/cdn-cgi/trace"],["live.streamtheworld.com/partnerIds"],["ads.viralize.tv"],["request=adb"],["googlesyndication"],["/enthusiastgaming|googleoptimize|googletagmanager/"],["/doubleclick|googlesyndication/"],["/^(?!.*(einthusan\\.io|yahoo|rtnotif|ajax|quantcast|bugsnag))/"],["/adnxs.com|onetag-sys.com|teads.tv|google-analytics.com|rubiconproject.com|casalemedia.com/"],["ad_"],["/googlesyndication|outbrain/"],["ads"],["svonm"],["/\\/VisitorAPI\\.js|\\/AppMeasurement\\.js/"],["inklinkor.com"],["doubleclick","length:10"],["damoh"],["homad-global-configs"],["/youboranqs01|spotx|springserve/"],["adsbygoogle"],["popunder"],["/pagead2\\.googlesyndication\\.com|inklinkor\\.com/"],["czilladx"],["outbrain"],["/googlesyndication|doubleclick/","length:10"],["/ad"],["wp-json/rsm-adutil","true"],["prebid"],["/ads"],["pub.network"],["googlesyndication","length:10"],["pagead2.googlesyndication.com"],["url:googlesyndication"],["/^/"],["/analytics|livestats/"],["mahimeta"],["ad"],["notifier"],["/ad-"],["/coinzillatag|czilladx/"],["/thaudray\\.com|putchumt\\.com/"],["php"],["/googlesyndication|doubleclick/"],["bmcdn6"],["adx"],["cls_report?"],["adswizz.com"],["googletagmanager"],["/googlesyndication|ads/"],["time-events"],["criteo"],["tpc.googlesyndication.com","war:32x32.png"],["/googlesyndication|nitropay/"],["method:GET url:!/idlix|jwpcdn/"],["/doubleclick|googlesyndication/","length:10"],["/googlesyndication|googima\\.js/"],["/adskeeper|bidgear|googlesyndication|mgid/"],["fwmrm.net"],["/\\/ad\\/g\\/1/"],["adsbygoogle","length:10"],["adinplay.com"],["springserve.com"],["taboola"],["/redirector\\.googlevideo\\.com\\/videoplayback[\\s\\S]*?dclk_video_ads/"],["ad.plus"],["pubfuture","length:10"],["secure.adnxs.com/ptv?cb=","war:noop-vast2.xml"],["googlesyndication","war:googlesyndication_adsbygoogle.js"],["url:ad/banner.gif"],["/googletagmanager|ip-api/"],["method:POST url:/logImpressions"],["method:POST"],["utreon.com/pl/api/event method:POST"],["log-sdk.ksapisrv.com/rest/wd/common/log/collect method:POST"],["/VisitorAPI|AppMeasurement/"],["analytics/bulk-pixel"],["cmp.inmobi.com/geoip"],["method:POST url:pfanalytics.bentasker.co.uk"],["discord.com/api/v9/science"],["/(trace|beacon)\\.qq\\.com/"],["excess.duolingo.com/batch"],["/eventLog.ajax"],["t.wayfair.com/b.php?"],["ceros.com/a?data"],["/eventhub\\.\\w+\\.miro\\.com\\/api\\/stream/"]];
const hostnamesMap = new Map([["poophq.com",[0,1,2,3,4]],["veev.to",[0,1,2,3,4]],["doods.to",[0,1,2,3,4]],["bing.com",5],["cdn.bg-gledai.*",6],["cdn.gledaitv.*",6],["animeheaven.*",6],["viu.com",7],["myair2.resmed.com",8],["travelerdoor.com",8],["meteoetradar.com",9],["gala.fr",9],["geo.fr",9],["voici.fr",9],["moviepilot.de",9],["3dzip.org",9],["asiaon.*",[9,46]],["asiaontop.com",[9,46]],["journaldemontreal.com",9],["minhaconexao.com.br",9],["videolyrics.in",9],["sportshub.to",[9,20]],["topsporter.net",9],["la7.it",9],["azby.fmworld.net",10],["unrealengine.com",11],["wco.tv",12],["dark-gaming.com",13],["securegames.iwin.com",14],["virginmediatelevision.ie",15],["myair.resmed.com",16],["player.amperwave.net",17],["abs-cbn.com",18],["handelsblatt.com",19],["sankaku.app",20],["ge-map-overlays.appspot.com",20],["freegogpcgames.com",20],["postazap.com",20],["laweducationinfo.com",20],["savemoneyinfo.com",20],["worldaffairinfo.com",20],["godstoryinfo.com",20],["successstoryinfo.com",20],["cxissuegk.com",20],["learnmarketinfo.com",20],["bhugolinfo.com",20],["armypowerinfo.com",20],["rsgamer.app",20],["phonereviewinfo.com",20],["makeincomeinfo.com",20],["gknutshell.com",20],["vichitrainfo.com",20],["workproductivityinfo.com",20],["dopomininfo.com",20],["hostingdetailer.com",20],["fitnesssguide.com",20],["tradingfact4u.com",20],["cryptofactss.com",20],["softwaredetail.com",20],["artoffocas.com",20],["insurancesfact.com",20],["travellingdetail.com",20],["mitaku.net",20],["38.242.194.12",20],["bi-girl.net",20],["blurayufr.*",20],["idealfollow.in",20],["medeberiyaa.com",20],["samuraiscan.org",20],["shinobijawi.id",20],["snbc13.com",20],["teluguflix.*",20],["advantien.com",20],["bailbondsfinder.com",20],["bg-gledai.*",20],["bigpiecreative.com",20],["childrenslibrarylady.com",20],["classifarms.com",20],["comtasq.ca",20],["crone.es",20],["ctrmarketingsolutions.com",20],["dropnudes.com",20],["ftuapps.dev",20],["gendatabase.com",20],["gledaitv.*",20],["grsprotection.com",20],["gruporafa.com.br",20],["inmatefindcalifornia.com",20],["inmatesearchidaho.com",20],["itsonsitetv.com",20],["mfmfinancials.com",20],["myproplugins.com",20],["nurulislam.org",20],["onehack.us",20],["ovester.com",20],["paste.bin.sx",20],["privatenudes.com",20],["renoconcrete.ca",20],["richieashbeck.com",20],["short1ink.com",20],["stpm.co.uk",20],["wegotcookies.co",20],["rangerboard.com",20],["informaxonline.com",[20,41]],["cambb.xxx",20],["nudecams.xxx",20],["cinemakottaga.*",20],["routech.ro",20],["edealinfo.com",20],["homeairquality.org",20],["techtrim.tech",20],["pigeonburger.xyz",20],["askpaccosi.com",[20,52]],["fusedgt.com",20],["appsmodz.com",20],["bingotingo.com",20],["superpsx.com",20],["stringreveals.com",20],["fox.com",20],["obutecodanet.ig.com.br",20],["firmwarex.net",20],["softwaretotal.net",20],["freecodezilla.net",20],["apkmaven.*",20],["iconmonstr.com",20],["rbxscripts.net",20],["rimworldbase.com",20],["ewrc-results.com",20],["adslink.pw",20],["comentariodetexto.com",20],["wordpredia.com",20],["hilites.today",20],["sportnews.to",20],["gsmhamza.com",20],["h-game18.xyz",20],["webmatrices.com",20],["fordownloader.com",20],["intro-hd.net",20],["animehub.ac",20],["kissanime.*",20],["yottachess.com",20],["infidrive.net",20],["animefreak.to",20],["9animes.ru",20],["couponscorpion.com",20],["hollaforums.com",20],["powforums.com",20],["supforums.com",20],["fxmag.pl",20],["meteopool.org",20],["ssstik.io",20],["animefever.cc",20],["digipuzzle.net",20],["crn.com",20],["btv.bg",20],["btvsport.bg",20],["btvnovinite.bg",20],["animedao.com.ru",20],["bitchute.com",20],["hunterscomics.com",[20,81]],["animepahe.*",20],["cupra.forum",20],["latinluchas.com",20],["smartworld.it",20],["condorsoft.co",20],["buickforums.com",20],["mrscript.net",20],["thesimsresource.com",21],["gnomio.com",22],["techacode.com",22],["trangchu.news",22],["freemagazines.top",22],["cybermania.ws",22],["techhelpbd.com",22],["dogsexporn.net",22],["yomucomics.com",22],["souq-design.com",22],["gaypornhot.com",22],["einthusan.*",23],["youmath.it",24],["frkn64modding.com",25],["zigforums.com",26],["gearingcommander.com",27],["stfly.biz",27],["airevue.net",27],["atravan.net",27],["khatrimaza.*",27],["novelmultiverse.com",27],["taming.io",27],["cekip.site",27],["snlookup.com",27],["globfone.com",27],["chimicamo.org",27],["webforefront.com",27],["apkmagic.com.ar",27],["moviegan.*",27],["writedroid.*",27],["filmisub.cc",27],["play-games.com",27],["gameszap.com",27],["differenceprimitive85p.shop",27],["vox.de",28],["vip.de",28],["rtl.de",28],["cinema.de",28],["nationalgeographic.fr",29],["oko.sh",30],["s0ft4pc.com",31],["golem.de",32],["tek.no",32],["wetter.de",33],["rakuten.tv",34],["hausbau-forum.de",35],["khaddavi.net",35],["lokerwfh.net",35],["emoji.gg",35],["texture-packs.com",35],["manyakan.com",35],["persianhive.com",35],["boainformacao.com.br",35],["gcertificationcourse.com",35],["tech-story.net",35],["visalist.io",35],["hacksnation.com",35],["litecoin.host",35],["blackhatworld.com",35],["ainonline.com",35],["dailyrevs.com",35],["uptime4.com",35],["swdw.net",35],["cmtracker.net",35],["icegame.ro",35],["cookni.net",35],["stickers.gg",35],["aiimgvlog.fun",36],["bestclaimtrx.xyz",36],["tpi.li",37],["oii.la",37],["exactpay.online",38],["faucetcrypto.net",38],["file4go.net",39],["arabshentai.com",40],["ariversegl.com",40],["boyfuck.me",40],["cgtips.org",40],["dvdgayporn.com",40],["dx-tv.com",40],["filmyzones.com",40],["freereadnovel.online",40],["idlixvip.*",40],["javboys.tv",40],["medicalstudyzone.com",40],["netfuck.net",40],["readingpage.fun",40],["shemalegape.net",40],["tojimangas.com",40],["tuktukcinma.com",40],["vercanalesdominicanos.com",40],["citytv.com",42],["jetpunk.com",43],["simplebits.io",44],["flightsim.to",45],["1cloudfile.com",47],["empire-anime.*",47],["empire-streaming.*",47],["empire-anime.com",47],["empire-streamz.fr",47],["empire-stream.*",47],["koramaup.com",47],["stardeos.com",48],["freewp.io",49],["goduke.com",50],["1apple.xyz",51],["lavanguardia.com",53],["foodsdictionary.co.il",54],["freesolana.top",55],["streamingcommunity.*",56],["farescd.com",57],["getintoway.com",58],["bitcotasks.com",59],["freetron.top",60],["earncrypto.co.in",60],["citi.com",61],["hotfm.audio",62],["maxt.church",63],["srvy.ninja",64],["history.com",65],["cimanow.cc",66],["freex2line.online",[66,67]],["osuskinner.com",68],["osuskins.net",68],["idlix.asia",69],["alliptvlinks.com",70],["play.nova.bg",71],["readcomiconline.*",72],["u.co.uk",73],["uktvplay.co.uk",73],["uktvplay.uktv.co.uk",73],["channel4.com",74],["pomofocus.io",75],["royaledudes.io",76],["tptvencore.co.uk",77],["anitube.vip",78],["sbs.com.au",79],["opentunnel.net",80],["teleboy.ch",[82,83]],["kijk.nl",84],["neilpatel.com",85],["docs.google.com",86],["endbasic.dev",87],["jmmv.dev",87],["fingerprint.com",87],["utreon.com",88],["zhihu.com",89],["natgeotv.com",90],["airtel.in",91],["dailystar.co.uk",92],["mirror.co.uk",92],["bentasker.co.uk",93],["discord.com",94],["meeting.tencent.com",95],["duolingo.com",96],["study.com",97],["wayfair.com",98],["view.ceros.com",99],["miro.com",100]]);
const exceptionsMap = new Map([["dev.fingerprint.com",[87]]]);
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
    try { preventXhr(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
