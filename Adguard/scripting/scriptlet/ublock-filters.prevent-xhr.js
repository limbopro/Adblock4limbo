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
const argsList = [["/vast.php?"],["/click\\.com|preroll|native_render\\.js|acscdn/","length:10001"],["162.252.214.4","true"],["c.adsco.re"],["adsco.re:2087"],["/fd/ls/lsp.aspx"],["method:HEAD"],["adapex"],["/^https:\\/\\/pagead2\\.googlesyndication\\.com\\/pagead\\/js\\/adsbygoogle\\.js\\?client=ca-pub-3497863494706299$/"],["v.fwmrm.net/ad/g/","war:noop-vmap1.xml"],["mobileanalytics"],["cloudflare.com/cdn-cgi/trace"],["doubleclick"],["/recommendations."],["/api/analytics"],["api"],["lr-ingest.io"],["/gtm.js"],["/froloa.js"],["1.1.1.1/cdn-cgi/trace"],["live.streamtheworld.com/partnerIds"],["ads.viralize.tv"],["request=adb"],["googlesyndication"],["/enthusiastgaming|googleoptimize|googletagmanager/"],["/doubleclick|googlesyndication/"],["/^(?!.*(einthusan\\.io|yahoo|rtnotif|ajax|quantcast|bugsnag))/"],["/adnxs.com|onetag-sys.com|teads.tv|google-analytics.com|rubiconproject.com|casalemedia.com/"],["ad_"],["/googlesyndication|outbrain/"],["ads"],["svonm"],["/\\/VisitorAPI\\.js|\\/AppMeasurement\\.js/"],["inklinkor.com"],["doubleclick","length:10"],["damoh"],["homad-global-configs"],["/youboranqs01|spotx|springserve/"],["adsbygoogle"],["popunder"],["/pagead2\\.googlesyndication\\.com|inklinkor\\.com/"],["czilladx"],["outbrain"],["/googlesyndication|doubleclick/","length:10"],["/ad"],["wp-json/rsm-adutil","true"],["prebid"],["/ads"],["pub.network"],["googlesyndication","length:10"],["url:googlesyndication"],["/^/"],["/analytics|livestats/"],["mahimeta"],["ad"],["notifier"],["/ad-"],["/coinzillatag|czilladx/"],["/thaudray\\.com|putchumt\\.com/"],["php"],["/googlesyndication|doubleclick/"],["bmcdn6"],["adx"],["cls_report?"],["adswizz.com"],["pagead2.googlesyndication.com"],["/googlesyndication|ads/"],["time-events"],["criteo"],["tpc.googlesyndication.com","war:32x32.png"],["/googlesyndication|nitropay/"],["method:GET url:!/idlix|jwpcdn/"],["/doubleclick|googlesyndication/","length:10"],["/googlesyndication|googima\\.js/"],["/adskeeper|bidgear|googlesyndication|mgid/"],["fwmrm.net"],["/\\/ad\\/g\\/1/"],["adsbygoogle","length:10"],["adinplay.com"],["springserve.com"],["taboola"],["/redirector\\.googlevideo\\.com\\/videoplayback[\\s\\S]*?dclk_video_ads/"],["pubfuture","length:10"],["url:ad/banner.gif"],["/googletagmanager|ip-api/"],["imasdk.googleapis.com"],["method:POST url:/logImpressions"],["method:POST"],["utreon.com/pl/api/event method:POST"],["log-sdk.ksapisrv.com/rest/wd/common/log/collect method:POST"],["/VisitorAPI|AppMeasurement/"],["analytics/bulk-pixel"],["cmp.inmobi.com/geoip"],["method:POST url:pfanalytics.bentasker.co.uk"],["discord.com/api/v9/science"],["/(trace|beacon)\\.qq\\.com/"],["excess.duolingo.com/batch"],["/eventLog.ajax"],["t.wayfair.com/b.php?"],["ceros.com/a?data"],["/eventhub\\.\\w+\\.miro\\.com\\/api\\/stream/"],["s73cloud.com/metrics/"]];
const hostnamesMap = new Map([["poophq.com",[0,1,2,3,4]],["veev.to",[0,1,2,3,4]],["doods.to",[0,1,2,3,4]],["bing.com",5],["cdn.bg-gledai.*",6],["cdn.gledaitv.*",6],["animeheaven.*",6],["opentunnel.net",6],["bg-gledai.*",[7,23]],["pvpoke-re.com",8],["cbsnews.com>>",9],["viu.com",10],["myair2.resmed.com",11],["travelerdoor.com",11],["meteoetradar.com",12],["gala.fr",12],["geo.fr",12],["voici.fr",12],["moviepilot.de",12],["3dzip.org",12],["asiaon.*",[12,49]],["asiaontop.com",[12,49]],["journaldemontreal.com",12],["minhaconexao.com.br",12],["videolyrics.in",12],["sportshub.to",[12,23]],["topsporter.net",12],["la7.it",12],["azby.fmworld.net",13],["unrealengine.com",14],["wco.tv",15],["dark-gaming.com",16],["securegames.iwin.com",17],["virginmediatelevision.ie",18],["myair.resmed.com",19],["player.amperwave.net",20],["abs-cbn.com",21],["handelsblatt.com",22],["sankaku.app",23],["ge-map-overlays.appspot.com",23],["freegogpcgames.com",23],["postazap.com",23],["laweducationinfo.com",23],["savemoneyinfo.com",23],["worldaffairinfo.com",23],["godstoryinfo.com",23],["successstoryinfo.com",23],["cxissuegk.com",23],["learnmarketinfo.com",23],["bhugolinfo.com",23],["armypowerinfo.com",23],["rsgamer.app",23],["phonereviewinfo.com",23],["makeincomeinfo.com",23],["gknutshell.com",23],["vichitrainfo.com",23],["workproductivityinfo.com",23],["dopomininfo.com",23],["hostingdetailer.com",23],["fitnesssguide.com",23],["tradingfact4u.com",23],["cryptofactss.com",23],["softwaredetail.com",23],["artoffocas.com",23],["insurancesfact.com",23],["travellingdetail.com",23],["mitaku.net",23],["38.242.194.12",23],["bi-girl.net",23],["blurayufr.*",23],["idealfollow.in",23],["medeberiyaa.com",23],["samuraiscan.org",23],["shinobijawi.id",23],["snbc13.com",23],["teluguflix.*",23],["advantien.com",23],["bailbondsfinder.com",23],["bigpiecreative.com",23],["childrenslibrarylady.com",23],["classifarms.com",23],["comtasq.ca",23],["crone.es",23],["ctrmarketingsolutions.com",23],["dropnudes.com",23],["ftuapps.dev",23],["gendatabase.com",23],["gledaitv.*",23],["grsprotection.com",23],["gruporafa.com.br",23],["inmatefindcalifornia.com",23],["inmatesearchidaho.com",23],["itsonsitetv.com",23],["mfmfinancials.com",23],["myproplugins.com",23],["nurulislam.org",23],["onehack.us",23],["ovester.com",23],["paste.bin.sx",23],["privatenudes.com",23],["renoconcrete.ca",23],["richieashbeck.com",23],["short1ink.com",23],["stpm.co.uk",23],["wegotcookies.co",23],["rangerboard.com",23],["informaxonline.com",[23,44]],["cambb.xxx",23],["nudecams.xxx",23],["cinemakottaga.*",23],["routech.ro",23],["edealinfo.com",23],["homeairquality.org",23],["techtrim.tech",23],["pigeonburger.xyz",23],["askpaccosi.com",[23,54]],["appsmodz.com",23],["bingotingo.com",23],["superpsx.com",23],["stringreveals.com",23],["fox.com",23],["obutecodanet.ig.com.br",23],["firmwarex.net",23],["softwaretotal.net",23],["freecodezilla.net",23],["apkmaven.*",23],["iconmonstr.com",23],["rbxscripts.net",23],["rimworldbase.com",23],["ewrc-results.com",23],["adslink.pw",23],["comentariodetexto.com",23],["wordpredia.com",23],["hilites.today",23],["sportnews.to",23],["gsmhamza.com",23],["h-game18.xyz",23],["webmatrices.com",23],["fordownloader.com",23],["intro-hd.net",23],["animehub.ac",23],["kissanime.*",23],["yottachess.com",23],["infidrive.net",23],["animefreak.to",23],["9animes.ru",23],["couponscorpion.com",23],["hollaforums.com",23],["powforums.com",23],["supforums.com",23],["jpopsingles.eu",23],["fxmag.pl",23],["meteopool.org",23],["ssstik.io",23],["animefever.cc",23],["digipuzzle.net",23],["crn.com",23],["btv.bg",23],["btvsport.bg",23],["btvnovinite.bg",23],["animedao.com.ru",23],["bitchute.com",23],["hunterscomics.com",[23,82]],["animepahe.*",23],["cupra.forum",23],["latinluchas.com",23],["smartworld.it",23],["condorsoft.co",23],["buickforums.com",23],["mrscript.net",23],["olamovies.*",23],["scriptsrbx.com",23],["thesimsresource.com",24],["gnomio.com",25],["techacode.com",25],["trangchu.news",25],["freemagazines.top",25],["cybermania.ws",25],["techhelpbd.com",25],["dogsexporn.net",25],["yomucomics.com",25],["souq-design.com",25],["gaypornhot.com",25],["einthusan.*",26],["youmath.it",27],["frkn64modding.com",28],["zigforums.com",29],["gearingcommander.com",30],["stfly.biz",30],["airevue.net",30],["atravan.net",30],["khatrimaza.*",30],["novelmultiverse.com",30],["taming.io",30],["cekip.site",30],["snlookup.com",30],["globfone.com",30],["chimicamo.org",30],["webforefront.com",30],["apkmagic.com.ar",30],["moviegan.*",30],["writedroid.*",30],["filmisub.cc",30],["play-games.com",30],["gameszap.com",30],["vox.de",31],["vip.de",31],["rtl.de",31],["cinema.de",31],["nationalgeographic.fr",32],["oko.sh",33],["s0ft4pc.com",34],["golem.de",35],["tek.no",35],["wetter.de",36],["rakuten.tv",37],["hausbau-forum.de",38],["khaddavi.net",38],["lokerwfh.net",38],["bedavahesap.org",38],["texture-packs.com",38],["manyakan.com",38],["persianhive.com",38],["boainformacao.com.br",38],["gcertificationcourse.com",38],["tech-story.net",38],["visalist.io",38],["hacksnation.com",38],["litecoin.host",38],["blackhatworld.com",38],["ainonline.com",38],["dailyrevs.com",38],["uptime4.com",38],["swdw.net",38],["cmtracker.net",38],["icegame.ro",38],["cookni.net",38],["emoji.gg",38],["pngs.gg",38],["stickers.gg",38],["soundboards.gg",38],["kalileaks.com",38],["1movierulzhd.pro",38],["meteolive.it",38],["aiimgvlog.fun",39],["bestclaimtrx.xyz",39],["tpi.li",40],["oii.la",40],["exactpay.online",41],["faucetcrypto.net",41],["file4go.net",42],["arabshentai.com",43],["ariversegl.com",43],["asia2tv.com",43],["boyfuck.me",43],["cehennemstream.xyz",43],["cgtips.org",43],["dvdgayporn.com",43],["downloadcursos.gratis",43],["dx-tv.com",43],["filmyzones.com",43],["freereadnovel.online",43],["idlixvip.*",43],["javboys.tv",43],["magicgameworld.com",43],["medicalstudyzone.com",43],["netfuck.net",43],["onezoo.net",43],["readingpage.fun",43],["shemalegape.net",43],["tojimangas.com",43],["tuktukcinma.com",43],["vercanalesdominicanos.com",43],["citytv.com",45],["jetpunk.com",46],["simplebits.io",47],["flightsim.to",48],["stardeos.com",50],["freewp.io",51],["goduke.com",52],["1apple.xyz",53],["lavanguardia.com",55],["foodsdictionary.co.il",56],["freesolana.top",57],["streamingcommunity.*",58],["farescd.com",59],["getintoway.com",60],["bitcotasks.com",61],["freetron.top",62],["earncrypto.co.in",62],["citi.com",63],["hotfm.audio",64],["empire-anime.*",65],["empire-streaming.*",65],["empire-anime.com",65],["empire-streamz.fr",65],["empire-stream.*",65],["srvy.ninja",66],["history.com",67],["cimanow.cc",68],["freex2line.online",69],["osuskinner.com",70],["osuskins.net",70],["idlix.asia",71],["alliptvlinks.com",72],["play.nova.bg",73],["readcomiconline.*",74],["u.co.uk",75],["uktvplay.co.uk",75],["uktvplay.uktv.co.uk",75],["channel4.com",76],["pomofocus.io",77],["royaledudes.io",78],["tptvencore.co.uk",79],["anitube.vip",80],["sbs.com.au",81],["kijk.nl",83],["neilpatel.com",84],["www.cc.com",85],["docs.google.com",86],["endbasic.dev",87],["jmmv.dev",87],["fingerprint.com",87],["utreon.com",88],["zhihu.com",89],["natgeotv.com",90],["airtel.in",91],["dailystar.co.uk",92],["mirror.co.uk",92],["bentasker.co.uk",93],["discord.com",94],["meeting.tencent.com",95],["duolingo.com",96],["study.com",97],["wayfair.com",98],["view.ceros.com",99],["miro.com",100],["lared.cl",101]]);
const exceptionsMap = new Map([["dev.fingerprint.com",[87]]]);
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
