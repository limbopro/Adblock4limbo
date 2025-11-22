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
const argsList = [["/vast.php?"],["/click\\.com|preroll|native_render\\.js|acscdn/","length:10001"],["162.252.214.4","true"],["c.adsco.re"],["adsco.re:2087"],["/fd/ls/lsp.aspx"],["/^https:\\/\\/pagead2\\.googlesyndication\\.com\\/pagead\\/js\\/adsbygoogle\\.js\\?client=ca-pub-3497863494706299$/"],["v.fwmrm.net/ad/g/","war:noop-vmap1.xml"],["mobileanalytics"],["cloudflare.com/cdn-cgi/trace"],["doubleclick"],["/recommendations."],["/api/analytics"],["api"],["lr-ingest.io"],["/gtm.js"],["/froloa.js"],["1.1.1.1/cdn-cgi/trace"],["live.streamtheworld.com/partnerIds"],["ads.viralize.tv"],["request=adb"],["googlesyndication"],["/enthusiastgaming|googleoptimize|googletagmanager/"],["/doubleclick|googlesyndication/"],["/^(?!.*(einthusan\\.io|yahoo|rtnotif|ajax|quantcast|bugsnag))/"],["/adnxs.com|onetag-sys.com|teads.tv|google-analytics.com|rubiconproject.com|casalemedia.com/"],["ad_"],["/googlesyndication|outbrain/"],["method:HEAD"],["ads"],["svonm"],["/\\/VisitorAPI\\.js|\\/AppMeasurement\\.js/"],["inklinkor.com"],["doubleclick","length:10"],["damoh"],["homad-global-configs"],["/youboranqs01|spotx|springserve/"],["adsbygoogle"],["popunder"],["/pagead2\\.googlesyndication\\.com|inklinkor\\.com/"],["czilladx"],["outbrain"],["/googlesyndication|doubleclick/","length:10"],["/ad"],["wp-json/rsm-adutil","true"],["prebid"],["/ads"],["pub.network"],["googlesyndication","length:10"],["url:googlesyndication"],["/^/"],["/analytics|livestats/"],["mahimeta"],["ad"],["notifier"],["/ad-"],["/coinzillatag|czilladx/"],["/thaudray\\.com|putchumt\\.com/"],["php"],["/googlesyndication|doubleclick/"],["bmcdn6"],["adx"],["cls_report?"],["adswizz.com"],["pagead2.googlesyndication.com"],["/googlesyndication|ads/"],["time-events"],["criteo"],["tpc.googlesyndication.com","war:32x32.png"],["/googlesyndication|nitropay/"],["method:GET url:!/idlix|jwpcdn/"],["/doubleclick|googlesyndication/","length:10"],["/googlesyndication|googima\\.js/"],["/adskeeper|bidgear|googlesyndication|mgid/"],["fwmrm.net"],["/\\/ad\\/g\\/1/"],["adsbygoogle","length:10"],["adinplay.com"],["springserve.com"],["taboola"],["/redirector\\.googlevideo\\.com\\/videoplayback[\\s\\S]*?dclk_video_ads/"],["pubfuture","length:10"],["url:ad/banner.gif"],["/googletagmanager|ip-api/"],["imasdk.googleapis.com"],["method:POST url:/logImpressions"],["method:POST"],["utreon.com/pl/api/event method:POST"],["log-sdk.ksapisrv.com/rest/wd/common/log/collect method:POST"],["/VisitorAPI|AppMeasurement/"],["analytics/bulk-pixel"],["cmp.inmobi.com/geoip"],["method:POST url:pfanalytics.bentasker.co.uk"],["discord.com/api/v9/science"],["/(trace|beacon)\\.qq\\.com/"],["excess.duolingo.com/batch"],["/eventLog.ajax"],["t.wayfair.com/b.php?"],["ceros.com/a?data"],["/eventhub\\.\\w+\\.miro\\.com\\/api\\/stream/"],["s73cloud.com/metrics/"]];
const hostnamesMap = new Map([["poophq.com",[0,1,2,3,4]],["veev.to",[0,1,2,3,4]],["doods.to",[0,1,2,3,4]],["bing.com",5],["pvpoke-re.com",6],["cbsnews.com>>",7],["viu.com",8],["myair2.resmed.com",9],["travelerdoor.com",9],["meteoetradar.com",10],["gala.fr",10],["geo.fr",10],["voici.fr",10],["moviepilot.de",10],["3dzip.org",10],["asiaon.*",[10,48]],["asiaontop.com",[10,48]],["journaldemontreal.com",10],["minhaconexao.com.br",10],["videolyrics.in",10],["sportshub.to",[10,21]],["topsporter.net",10],["la7.it",10],["azby.fmworld.net",11],["unrealengine.com",12],["wco.tv",13],["dark-gaming.com",14],["securegames.iwin.com",15],["virginmediatelevision.ie",16],["myair.resmed.com",17],["player.amperwave.net",18],["abs-cbn.com",19],["handelsblatt.com",20],["sankaku.app",21],["ge-map-overlays.appspot.com",21],["freegogpcgames.com",21],["postazap.com",21],["laweducationinfo.com",21],["savemoneyinfo.com",21],["worldaffairinfo.com",21],["godstoryinfo.com",21],["successstoryinfo.com",21],["cxissuegk.com",21],["learnmarketinfo.com",21],["bhugolinfo.com",21],["armypowerinfo.com",21],["rsgamer.app",21],["phonereviewinfo.com",21],["makeincomeinfo.com",21],["gknutshell.com",21],["vichitrainfo.com",21],["workproductivityinfo.com",21],["dopomininfo.com",21],["hostingdetailer.com",21],["fitnesssguide.com",21],["tradingfact4u.com",21],["cryptofactss.com",21],["softwaredetail.com",21],["artoffocas.com",21],["insurancesfact.com",21],["travellingdetail.com",21],["mitaku.net",21],["38.242.194.12",21],["bi-girl.net",21],["blurayufr.*",21],["idealfollow.in",21],["medeberiyaa.com",21],["samuraiscan.org",21],["shinobijawi.id",21],["snbc13.com",21],["teluguflix.*",21],["advantien.com",21],["bailbondsfinder.com",21],["bg-gledai.*",21],["bigpiecreative.com",21],["childrenslibrarylady.com",21],["classifarms.com",21],["comtasq.ca",21],["crone.es",21],["ctrmarketingsolutions.com",21],["dropnudes.com",21],["ftuapps.dev",21],["gendatabase.com",21],["gledaitv.*",21],["grsprotection.com",21],["gruporafa.com.br",21],["inmatefindcalifornia.com",21],["inmatesearchidaho.com",21],["itsonsitetv.com",21],["mfmfinancials.com",21],["myproplugins.com",21],["nurulislam.org",21],["onehack.us",21],["ovester.com",21],["paste.bin.sx",21],["privatenudes.com",21],["renoconcrete.ca",21],["richieashbeck.com",21],["short1ink.com",21],["stpm.co.uk",21],["wegotcookies.co",21],["rangerboard.com",21],["informaxonline.com",[21,43]],["cambb.xxx",21],["nudecams.xxx",21],["cinemakottaga.*",21],["routech.ro",21],["edealinfo.com",21],["homeairquality.org",21],["techtrim.tech",21],["pigeonburger.xyz",21],["askpaccosi.com",[21,53]],["appsmodz.com",21],["bingotingo.com",21],["superpsx.com",21],["stringreveals.com",21],["fox.com",21],["obutecodanet.ig.com.br",21],["firmwarex.net",21],["softwaretotal.net",21],["freecodezilla.net",21],["apkmaven.*",21],["iconmonstr.com",21],["rbxscripts.net",21],["rimworldbase.com",21],["ewrc-results.com",21],["adslink.pw",21],["comentariodetexto.com",21],["wordpredia.com",21],["hilites.today",21],["sportnews.to",21],["gsmhamza.com",21],["h-game18.xyz",21],["webmatrices.com",21],["fordownloader.com",21],["intro-hd.net",21],["animehub.ac",21],["kissanime.*",21],["yottachess.com",21],["infidrive.net",21],["animefreak.to",21],["9animes.ru",21],["couponscorpion.com",21],["hollaforums.com",21],["powforums.com",21],["supforums.com",21],["jpopsingles.eu",21],["fxmag.pl",21],["meteopool.org",21],["ssstik.io",21],["animefever.cc",21],["digipuzzle.net",21],["crn.com",21],["btv.bg",21],["btvsport.bg",21],["btvnovinite.bg",21],["animedao.com.ru",21],["bitchute.com",21],["hunterscomics.com",[21,81]],["animepahe.*",21],["cupra.forum",21],["latinluchas.com",21],["smartworld.it",21],["condorsoft.co",21],["buickforums.com",21],["mrscript.net",21],["olamovies.*",21],["scriptsrbx.com",21],["thesimsresource.com",22],["gnomio.com",23],["techacode.com",23],["trangchu.news",23],["freemagazines.top",23],["techhelpbd.com",23],["dogsexporn.net",23],["yomucomics.com",23],["souq-design.com",23],["gaypornhot.com",23],["einthusan.*",24],["youmath.it",25],["frkn64modding.com",26],["zigforums.com",27],["animeheaven.*",28],["opentunnel.net",28],["gearingcommander.com",29],["stfly.biz",29],["airevue.net",29],["atravan.net",29],["khatrimaza.*",29],["novelmultiverse.com",29],["taming.io",29],["cekip.site",29],["snlookup.com",29],["globfone.com",29],["chimicamo.org",29],["webforefront.com",29],["apkmagic.com.ar",29],["moviegan.*",29],["writedroid.*",29],["filmisub.cc",29],["play-games.com",29],["gameszap.com",29],["vox.de",30],["cinema.de",30],["nationalgeographic.fr",31],["oko.sh",32],["s0ft4pc.com",33],["golem.de",34],["tek.no",34],["wetter.de",35],["rakuten.tv",36],["hausbau-forum.de",37],["khaddavi.net",37],["lokerwfh.net",37],["bedavahesap.org",37],["texture-packs.com",37],["manyakan.com",37],["persianhive.com",37],["boainformacao.com.br",37],["gcertificationcourse.com",37],["tech-story.net",37],["visalist.io",37],["hacksnation.com",37],["litecoin.host",37],["blackhatworld.com",37],["ainonline.com",37],["dailyrevs.com",37],["uptime4.com",37],["swdw.net",37],["cmtracker.net",37],["icegame.ro",37],["cookni.net",37],["emoji.gg",37],["pngs.gg",37],["stickers.gg",37],["soundboards.gg",37],["kalileaks.com",37],["1movierulzhd.pro",37],["meteolive.it",37],["1movierulzhd.hair",37],["aiimgvlog.fun",38],["bestclaimtrx.xyz",38],["tpi.li",39],["oii.la",39],["exactpay.online",40],["faucetcrypto.net",40],["file4go.net",41],["arabshentai.com",42],["ariversegl.com",42],["asia2tv.com",42],["boyfuck.me",42],["cehennemstream.xyz",42],["cgtips.org",42],["cybermania.ws",42],["dvdgayporn.com",42],["downloadcursos.gratis",42],["dx-tv.com",42],["filmyzones.com",42],["freereadnovel.online",42],["idlixvip.*",42],["javboys.tv",42],["magicgameworld.com",42],["mangacrab.org",42],["medicalstudyzone.com",42],["netfuck.net",42],["onezoo.net",42],["readingpage.fun",42],["shemalegape.net",42],["tojimangas.com",42],["tuktukcinma.com",42],["vercanalesdominicanos.com",42],["citytv.com",44],["jetpunk.com",45],["simplebits.io",46],["flightsim.to",47],["stardeos.com",49],["freewp.io",50],["goduke.com",51],["1apple.xyz",52],["lavanguardia.com",54],["foodsdictionary.co.il",55],["freesolana.top",56],["streamingcommunity.*",57],["farescd.com",58],["getintoway.com",59],["bitcotasks.com",60],["freetron.top",61],["earncrypto.co.in",61],["citi.com",62],["hotfm.audio",63],["empire-anime.*",64],["empire-streaming.*",64],["empire-anime.com",64],["empire-streamz.fr",64],["empire-stream.*",64],["srvy.ninja",65],["history.com",66],["cimanow.cc",67],["freex2line.online",68],["osuskinner.com",69],["osuskins.net",69],["idlix.asia",70],["alliptvlinks.com",71],["play.nova.bg",72],["readcomiconline.*",73],["u.co.uk",74],["uktvplay.co.uk",74],["uktvplay.uktv.co.uk",74],["channel4.com",75],["pomofocus.io",76],["royaledudes.io",77],["tptvencore.co.uk",78],["anitube.vip",79],["sbs.com.au",80],["kijk.nl",82],["neilpatel.com",83],["www.cc.com",84],["docs.google.com",85],["endbasic.dev",86],["jmmv.dev",86],["fingerprint.com",86],["utreon.com",87],["zhihu.com",88],["natgeotv.com",89],["airtel.in",90],["dailystar.co.uk",91],["mirror.co.uk",91],["bentasker.co.uk",92],["discord.com",93],["meeting.tencent.com",94],["duolingo.com",95],["study.com",96],["wayfair.com",97],["view.ceros.com",98],["miro.com",99],["lared.cl",100]]);
const exceptionsMap = new Map([["dev.fingerprint.com",[86]]]);
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
    try { preventXhr(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
