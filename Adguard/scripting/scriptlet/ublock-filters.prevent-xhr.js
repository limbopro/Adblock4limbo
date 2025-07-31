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
const argsList = [["/vast.php?"],["/click\\.com|preroll|native_render\\.js|acscdn/","length:10001"],["162.252.214.4","true"],["c.adsco.re"],["adsco.re:2087"],["/fd/ls/lsp.aspx"],["mobileanalytics"],["cloudflare.com/cdn-cgi/trace"],["doubleclick"],["/recommendations."],["/api/analytics"],["api"],["lr-ingest.io"],["/gtm.js"],["/froloa.js"],["1.1.1.1/cdn-cgi/trace"],["live.streamtheworld.com/partnerIds"],["ads.viralize.tv"],["request=adb"],["googlesyndication"],["/enthusiastgaming|googleoptimize|googletagmanager/"],["/doubleclick|googlesyndication/"],["/^(?!.*(einthusan\\.io|yahoo|rtnotif|ajax|quantcast|bugsnag))/"],["/adnxs.com|onetag-sys.com|teads.tv|google-analytics.com|rubiconproject.com|casalemedia.com/"],["ad_"],["/googlesyndication|outbrain/"],["method:HEAD"],["ads"],["svonm"],["/\\/VisitorAPI\\.js|\\/AppMeasurement\\.js/"],["inklinkor.com"],["doubleclick","length:10"],["damoh"],["homad-global-configs"],["/youboranqs01|spotx|springserve/"],["adsbygoogle"],["popunder"],["/pagead2\\.googlesyndication\\.com|inklinkor\\.com/"],["czilladx"],["outbrain"],["/googlesyndication|doubleclick/","length:10"],["/ad"],["wp-json/rsm-adutil","true"],["prebid"],["/ads"],["pub.network"],["googlesyndication","length:10"],["pagead2.googlesyndication.com"],["url:googlesyndication"],["/^/"],["/analytics|livestats/"],["mahimeta"],["ad"],["notifier"],["/ad-"],["/coinzillatag|czilladx/"],["/thaudray\\.com|putchumt\\.com/"],["php"],["/googlesyndication|doubleclick/"],["bmcdn6"],["adx"],["cls_report?"],["adswizz.com"],["googletagmanager"],["/googlesyndication|ads/"],["time-events"],["criteo"],["tpc.googlesyndication.com","war:32x32.png"],["/googlesyndication|nitropay/"],["method:GET url:!/idlix|jwpcdn/"],["/doubleclick|googlesyndication/","length:10"],["/googlesyndication|googima\\.js/"],["/adskeeper|bidgear|googlesyndication|mgid/"],["fwmrm.net"],["/\\/ad\\/g\\/1/"],["adsbygoogle","length:10"],["adinplay.com"],["springserve.com"],["taboola"],["/redirector\\.googlevideo\\.com\\/videoplayback[\\s\\S]*?dclk_video_ads/"],["ad.plus"],["pubfuture","length:10"],["secure.adnxs.com/ptv?cb=","war:noop-vast2.xml"],["googlesyndication","war:googlesyndication_adsbygoogle.js"],["url:ad/banner.gif"],["/googletagmanager|ip-api/"],["method:POST url:/logImpressions"],["method:POST"],["utreon.com/pl/api/event method:POST"],["log-sdk.ksapisrv.com/rest/wd/common/log/collect method:POST"],["/VisitorAPI|AppMeasurement/"],["analytics/bulk-pixel"],["cmp.inmobi.com/geoip"],["method:POST url:pfanalytics.bentasker.co.uk"],["discord.com/api/v9/science"],["/(trace|beacon)\\.qq\\.com/"],["excess.duolingo.com/batch"],["/eventLog.ajax"],["t.wayfair.com/b.php?"],["ceros.com/a?data"],["/eventhub\\.\\w+\\.miro\\.com\\/api\\/stream/"]];
const hostnamesMap = new Map([["poophq.com",[0,1,2,3,4]],["veev.to",[0,1,2,3,4]],["doods.to",[0,1,2,3,4]],["bing.com",5],["viu.com",6],["myair2.resmed.com",7],["travelerdoor.com",7],["meteoetradar.com",8],["gala.fr",8],["geo.fr",8],["voici.fr",8],["moviepilot.de",8],["3dzip.org",8],["asiaon.*",[8,46]],["asiaontop.com",[8,46]],["journaldemontreal.com",8],["minhaconexao.com.br",8],["videolyrics.in",8],["sportshub.to",[8,19]],["topsporter.net",8],["la7.it",8],["azby.fmworld.net",9],["unrealengine.com",10],["wco.tv",11],["dark-gaming.com",12],["securegames.iwin.com",13],["virginmediatelevision.ie",14],["myair.resmed.com",15],["player.amperwave.net",16],["abs-cbn.com",17],["handelsblatt.com",18],["sankaku.app",19],["ge-map-overlays.appspot.com",19],["freegogpcgames.com",19],["postazap.com",19],["laweducationinfo.com",19],["savemoneyinfo.com",19],["worldaffairinfo.com",19],["godstoryinfo.com",19],["successstoryinfo.com",19],["cxissuegk.com",19],["learnmarketinfo.com",19],["bhugolinfo.com",19],["armypowerinfo.com",19],["rsgamer.app",19],["phonereviewinfo.com",19],["makeincomeinfo.com",19],["gknutshell.com",19],["vichitrainfo.com",19],["workproductivityinfo.com",19],["dopomininfo.com",19],["hostingdetailer.com",19],["fitnesssguide.com",19],["tradingfact4u.com",19],["cryptofactss.com",19],["softwaredetail.com",19],["artoffocas.com",19],["insurancesfact.com",19],["travellingdetail.com",19],["mitaku.net",19],["38.242.194.12",19],["bi-girl.net",19],["blurayufr.*",19],["idealfollow.in",19],["medeberiyaa.com",19],["samuraiscan.org",19],["shinobijawi.id",19],["snbc13.com",19],["teluguflix.*",19],["advantien.com",19],["bailbondsfinder.com",19],["bg-gledai.*",19],["bigpiecreative.com",19],["childrenslibrarylady.com",19],["classifarms.com",19],["comtasq.ca",19],["crone.es",19],["ctrmarketingsolutions.com",19],["dropnudes.com",19],["ftuapps.dev",19],["gendatabase.com",19],["gledaitv.*",19],["grsprotection.com",19],["gruporafa.com.br",19],["inmatefindcalifornia.com",19],["inmatesearchidaho.com",19],["itsonsitetv.com",19],["mfmfinancials.com",19],["myproplugins.com",19],["nurulislam.org",19],["onehack.us",19],["ovester.com",19],["paste.bin.sx",19],["privatenudes.com",19],["renoconcrete.ca",19],["richieashbeck.com",19],["short1ink.com",19],["stpm.co.uk",19],["wegotcookies.co",19],["rangerboard.com",19],["informaxonline.com",[19,41]],["cambb.xxx",19],["nudecams.xxx",19],["cinemakottaga.*",19],["routech.ro",19],["edealinfo.com",19],["homeairquality.org",19],["techtrim.tech",19],["pigeonburger.xyz",19],["askpaccosi.com",[19,52]],["fusedgt.com",19],["appsmodz.com",19],["bingotingo.com",19],["superpsx.com",19],["stringreveals.com",19],["fox.com",19],["obutecodanet.ig.com.br",19],["firmwarex.net",19],["softwaretotal.net",19],["freecodezilla.net",19],["apkmaven.*",19],["iconmonstr.com",19],["rbxscripts.net",19],["rimworldbase.com",19],["ewrc-results.com",19],["adslink.pw",19],["comentariodetexto.com",19],["wordpredia.com",19],["hilites.today",19],["sportnews.to",19],["gsmhamza.com",19],["h-game18.xyz",19],["webmatrices.com",19],["fordownloader.com",19],["intro-hd.net",19],["animehub.ac",19],["kissanime.*",19],["yottachess.com",19],["infidrive.net",19],["animefreak.to",19],["9animes.ru",19],["couponscorpion.com",19],["hollaforums.com",19],["powforums.com",19],["supforums.com",19],["fxmag.pl",19],["meteopool.org",19],["ssstik.io",19],["animefever.cc",19],["digipuzzle.net",19],["crn.com",19],["btv.bg",19],["btvsport.bg",19],["btvnovinite.bg",19],["animedao.com.ru",19],["bitchute.com",19],["hunterscomics.com",[19,81]],["animepahe.*",19],["cupra.forum",19],["latinluchas.com",19],["smartworld.it",19],["condorsoft.co",19],["buickforums.com",19],["mrscript.net",19],["thesimsresource.com",20],["gnomio.com",21],["techacode.com",21],["trangchu.news",21],["freemagazines.top",21],["cybermania.ws",21],["techhelpbd.com",21],["dogsexporn.net",21],["yomucomics.com",21],["souq-design.com",21],["gaypornhot.com",21],["einthusan.*",22],["youmath.it",23],["frkn64modding.com",24],["zigforums.com",25],["animeheaven.*",26],["gearingcommander.com",27],["stfly.biz",27],["airevue.net",27],["atravan.net",27],["khatrimaza.*",27],["novelmultiverse.com",27],["taming.io",27],["cekip.site",27],["snlookup.com",27],["globfone.com",27],["chimicamo.org",27],["webforefront.com",27],["apkmagic.com.ar",27],["moviegan.*",27],["writedroid.*",27],["filmisub.cc",27],["play-games.com",27],["gameszap.com",27],["differenceprimitive85p.shop",27],["vox.de",28],["vip.de",28],["rtl.de",28],["cinema.de",28],["nationalgeographic.fr",29],["oko.sh",30],["s0ft4pc.com",31],["golem.de",32],["tek.no",32],["wetter.de",33],["rakuten.tv",34],["hausbau-forum.de",35],["khaddavi.net",35],["lokerwfh.net",35],["emoji.gg",35],["texture-packs.com",35],["manyakan.com",35],["persianhive.com",35],["boainformacao.com.br",35],["gcertificationcourse.com",35],["tech-story.net",35],["visalist.io",35],["hacksnation.com",35],["litecoin.host",35],["blackhatworld.com",35],["ainonline.com",35],["dailyrevs.com",35],["uptime4.com",35],["swdw.net",35],["cmtracker.net",35],["icegame.ro",35],["cookni.net",35],["stickers.gg",35],["aiimgvlog.fun",36],["bestclaimtrx.xyz",36],["tpi.li",37],["oii.la",37],["exactpay.online",38],["faucetcrypto.net",38],["file4go.net",39],["arabshentai.com",40],["ariversegl.com",40],["boyfuck.me",40],["cgtips.org",40],["dvdgayporn.com",40],["dx-tv.com",40],["filmyzones.com",40],["freereadnovel.online",40],["idlixvip.*",40],["javboys.tv",40],["medicalstudyzone.com",40],["netfuck.net",40],["readingpage.fun",40],["shemalegape.net",40],["tojimangas.com",40],["tuktukcinma.com",40],["vercanalesdominicanos.com",40],["citytv.com",42],["jetpunk.com",43],["simplebits.io",44],["flightsim.to",45],["1cloudfile.com",47],["empire-anime.*",47],["empire-streaming.*",47],["empire-anime.com",47],["empire-streamz.fr",47],["empire-stream.*",47],["koramaup.com",47],["stardeos.com",48],["freewp.io",49],["goduke.com",50],["1apple.xyz",51],["lavanguardia.com",53],["foodsdictionary.co.il",54],["freesolana.top",55],["streamingcommunity.*",56],["farescd.com",57],["getintoway.com",58],["bitcotasks.com",59],["freetron.top",60],["earncrypto.co.in",60],["citi.com",61],["hotfm.audio",62],["maxt.church",63],["srvy.ninja",64],["history.com",65],["cimanow.cc",66],["freex2line.online",[66,67]],["osuskinner.com",68],["osuskins.net",68],["idlix.asia",69],["alliptvlinks.com",70],["play.nova.bg",71],["readcomiconline.*",72],["u.co.uk",73],["uktvplay.co.uk",73],["uktvplay.uktv.co.uk",73],["channel4.com",74],["pomofocus.io",75],["royaledudes.io",76],["tptvencore.co.uk",77],["anitube.vip",78],["sbs.com.au",79],["opentunnel.net",80],["teleboy.ch",[82,83]],["kijk.nl",84],["neilpatel.com",85],["docs.google.com",86],["endbasic.dev",87],["jmmv.dev",87],["fingerprint.com",87],["utreon.com",88],["zhihu.com",89],["natgeotv.com",90],["airtel.in",91],["dailystar.co.uk",92],["mirror.co.uk",92],["bentasker.co.uk",93],["discord.com",94],["meeting.tencent.com",95],["duolingo.com",96],["study.com",97],["wayfair.com",98],["view.ceros.com",99],["miro.com",100]]);
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
