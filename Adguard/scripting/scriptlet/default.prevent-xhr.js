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

// ruleset: default

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
const argsList = [["request=adb"],["doubleclick"],["googlesyndication"],["/adsbygoogle|doubleclick/"],["/enthusiastgaming|googleoptimize|googletagmanager/"],["/doubleclick|googlesyndication/"],["/^(?!.*(einthusan\\.io|yahoo|rtnotif|ajax|quantcast|bugsnag))/"],["/adnxs.com|onetag-sys.com|teads.tv|google-analytics.com|rubiconproject.com|casalemedia.com/"],["ad_"],["/googlesyndication|outbrain/"],["method:HEAD"],["ads"],["svonm"],["/\\/VisitorAPI\\.js|\\/AppMeasurement\\.js/"],["inklinkor.com"],["damoh"],["homad-global-configs"],["/youboranqs01|spotx|springserve/"],["adsbygoogle"],["popunder"],["/pagead2\\.googlesyndication\\.com|inklinkor\\.com/"],["czilladx"],["?testing"],["outbrain"],["/ad"],["wp-json/rsm-adutil","true"],["prebid"],["/ads"],["pub.network"],["googlesyndication","length:10"],["wpadmngr"],["pagead2.googlesyndication.com"],["url:googlesyndication"],["/^/"],["/analytics|livestats/"],["mahimeta"],["ad"],["notifier"],["/ad-"],["/coinzillatag|czilladx/"],["/thaudray\\.com|putchumt\\.com/"],["php"],["/googlesyndication|doubleclick/"],["bmcdn6"],["adx"],["cls_report?"],["adswizz.com"],["googletagmanager"],["/googlesyndication|ads/"],["time-events"],["criteo"],["/googlesyndication|nitropay/"],["method:GET url:!/idlix|jwpcdn/"],["/doubleclick|googlesyndication/","length:10"],["/googima.js"],["/adskeeper|bidgear|googlesyndication|mgid/"],["fwmrm.net"],["/\\/ad\\/g\\/1/"],["adsbygoogle","length:10"],["adinplay.com"],["springserve.com"],["/redirector\\.googlevideo\\.com\\/videoplayback[\\s\\S]*?dclk_video_ads/"],["ad.plus"],["pubfuture","length:10"],["secure.adnxs.com/ptv?cb=","war:noop-vast2.xml"],["googlesyndication","war:googlesyndication_adsbygoogle.js"],["method:POST url:/logImpressions"],["method:POST"],["utreon.com/pl/api/event method:POST"],["log-sdk.ksapisrv.com/rest/wd/common/log/collect method:POST"],["/VisitorAPI|AppMeasurement/"],["analytics/bulk-pixel"],["cmp.inmobi.com/geoip"],["method:POST url:pfanalytics.bentasker.co.uk"],["discord.com/api/v9/science"],["/(trace|beacon)\\.qq\\.com/"],["excess.duolingo.com/batch"],["/eventLog.ajax"],["t.wayfair.com/b.php?"],["ceros.com/a?data"],["mobileanalytics"],["cloudflare.com/cdn-cgi/trace"],["/recommendations."],["/api/analytics"],["api"],["lr-ingest.io"],["/gtm.js"],["ip-api"],["/froloa.js"],["1.1.1.1/cdn-cgi/trace"],["live.streamtheworld.com/partnerIds"],["/vast.php?"],["/click\\.com|preroll|native_render\\.js|acscdn/","length:10001"],["162.252.214.4","true"],["c.adsco.re"],["adsco.re:2087"],["/fd/ls/lsp.aspx"],["stella"]];
const hostnamesMap = new Map([["handelsblatt.com",0],["moviepilot.de",1],["asiaon.*",[1,29]],["asiaontop.com",[1,29]],["journaldemontreal.com",1],["minhaconexao.com.br",1],["videolyrics.in",1],["sportshub.to",[1,2]],["topsporter.net",1],["meteoetradar.com",1],["gala.fr",1],["geo.fr",1],["voici.fr",1],["sankaku.app",2],["ge-map-overlays.appspot.com",2],["freegogpcgames.com",2],["postazap.com",2],["laweducationinfo.com",2],["savemoneyinfo.com",2],["worldaffairinfo.com",2],["godstoryinfo.com",2],["successstoryinfo.com",2],["cxissuegk.com",2],["learnmarketinfo.com",2],["bhugolinfo.com",2],["armypowerinfo.com",2],["rsadnetworkinfo.com",2],["rsinsuranceinfo.com",2],["rsfinanceinfo.com",2],["rsgamer.app",2],["rssoftwareinfo.com",2],["rshostinginfo.com",2],["rseducationinfo.com",2],["phonereviewinfo.com",2],["makeincomeinfo.com",2],["gknutshell.com",2],["vichitrainfo.com",2],["workproductivityinfo.com",2],["dopomininfo.com",2],["hostingdetailer.com",2],["fitnesssguide.com",2],["tradingfact4u.com",2],["cryptofactss.com",2],["softwaredetail.com",2],["artoffocas.com",2],["insurancesfact.com",2],["travellingdetail.com",2],["38.242.194.12",2],["bi-girl.net",2],["blurayufr.*",2],["idealfollow.in",2],["medeberiyaa.com",2],["samuraiscan.org",2],["shinobijawi.id",2],["snbc13.com",2],["teluguflix.*",2],["rangerboard.com",2],["informaxonline.com",[2,24]],["nsw2u.*",2],["cambb.xxx",2],["nudecams.xxx",2],["cinemakottaga.*",2],["routech.ro",2],["edealinfo.com",2],["homeairquality.org",2],["techtrim.tech",2],["pigeonburger.xyz",2],["askpaccosi.com",[2,36]],["fusedgt.com",2],["apkowner.org",2],["appsmodz.com",2],["bingotingo.com",2],["superpsx.com",2],["stringreveals.com",2],["fox.com",2],["obutecodanet.ig.com.br",2],["firmwarex.net",2],["softwaretotal.net",2],["freecodezilla.net",2],["apkmaven.*",2],["iconmonstr.com",2],["rbxscripts.net",2],["rimworldbase.com",2],["ewrc-results.com",2],["adslink.pw",2],["comentariodetexto.com",2],["wordpredia.com",2],["hilites.today",2],["sportnews.to",2],["gsmhamza.com",2],["webmatrices.com",2],["adelsfun.com",2],["advantien.com",2],["bailbondsfinder.com",2],["bg-gledai.*",2],["bigpiecreative.com",2],["childrenslibrarylady.com",2],["classifarms.com",2],["comtasq.ca",2],["crone.es",2],["ctrmarketingsolutions.com",2],["dropnudes.com",2],["ftuapps.dev",2],["genzsport.com",2],["gledaitv.*",2],["grsprotection.com",2],["gruporafa.com.br",2],["inmatefindcalifornia.com",2],["inmatesearchidaho.com",2],["itsonsitetv.com",2],["mfmfinancials.com",2],["myproplugins.com",2],["nurulislam.org",2],["onehack.us",2],["ovester.com",2],["paste.bin.sx",2],["privatenudes.com",2],["renoconcrete.ca",2],["richieashbeck.com",2],["short1ink.com",2],["stpm.co.uk",2],["wegotcookies.co",2],["fordownloader.com",2],["intro-hd.net",2],["animehub.ac",2],["kissanime.*",2],["yottachess.com",2],["infidrive.net",2],["animefreak.to",2],["9animes.ru",2],["couponscorpion.com",2],["hollaforums.com",2],["powforums.com",2],["supforums.com",2],["play.nova.bg",[2,54]],["fxmag.pl",2],["toolkitspro.com",2],["meteopool.org",2],["ssstik.io",2],["animefever.cc",2],["digipuzzle.net",2],["crn.com",2],["animedao.com.ru",2],["hunterscomics.com",[2,63]],["animepahe.*",2],["cupra.forum",2],["pinsystem.co.uk",3],["thesimsresource.com",4],["gnomio.com",5],["techacode.com",5],["trangchu.news",5],["freemagazines.top",5],["cybermania.ws",5],["techhelpbd.com",5],["dogsexporn.net",5],["yomucomics.com",5],["souq-design.com",5],["einthusan.*",6],["youmath.it",7],["frkn64modding.com",8],["zigforums.com",9],["animeheaven.*",10],["gearingcommander.com",11],["stfly.biz",11],["airevue.net",11],["atravan.net",11],["khatrimaza.*",11],["novelmultiverse.com",11],["taming.io",11],["cekip.site",11],["snlookup.com",11],["globfone.com",11],["chimicamo.org",11],["webforefront.com",11],["apkmagic.com.ar",11],["reaperscans.id",11],["moviegan.*",11],["freecoursesonline.me",11],["writedroid.*",11],["filmisub.cc",11],["play-games.com",11],["gameszap.com",11],["differenceprimitive85p.shop",11],["vox.de",12],["vip.de",12],["rtl.de",12],["cinema.de",12],["nationalgeographic.fr",13],["oko.sh",14],["golem.de",15],["wetter.de",16],["rakuten.tv",17],["hausbau-forum.de",18],["khaddavi.net",18],["lokerwfh.net",18],["emoji.gg",18],["texture-packs.com",18],["manyakan.com",18],["persianhive.com",18],["boainformacao.com.br",18],["gcertificationcourse.com",18],["portaliz.site",18],["tech-story.net",18],["visalist.io",18],["litecoin.host",18],["blackhatworld.com",18],["ainonline.com",18],["dailyrevs.com",18],["uptime4.com",18],["swdw.net",18],["cmtracker.net",18],["icegame.ro",18],["cookni.net",18],["aiimgvlog.fun",19],["bestclaimtrx.xyz",19],["tpi.li",20],["oii.la",20],["exactpay.online",21],["claim.fun",21],["faucetcrypto.net",21],["cashbux.work",21],["4khd.com",22],["file4go.net",23],["citytv.com",25],["jetpunk.com",26],["simplebits.io",27],["flightsim.to",28],["coinsparty.com",30],["1cloudfile.com",31],["empire-anime.*",31],["empire-streaming.*",31],["empire-anime.com",31],["empire-streamz.fr",31],["empire-stream.*",31],["koramaup.com",31],["stardeos.com",32],["freewp.io",33],["goduke.com",34],["1apple.xyz",35],["lavanguardia.com",37],["foodsdictionary.co.il",38],["freesolana.top",39],["streamingcommunity.*",40],["farescd.com",41],["getintoway.com",42],["tuktukcinma.com",42],["bitcotasks.com",43],["freetron.top",44],["earncrypto.co.in",44],["citi.com",45],["hotfm.audio",46],["maxt.church",47],["srvy.ninja",48],["history.com",49],["cimanow.cc",50],["freex2line.online",50],["osuskinner.com",51],["osuskins.net",51],["idlix.asia",52],["alliptvlinks.com",53],["readcomiconline.*",55],["u.co.uk",56],["uktvplay.co.uk",56],["uktvplay.uktv.co.uk",56],["channel4.com",57],["pomofocus.io",58],["royaledudes.io",59],["tptvencore.co.uk",60],["sbs.com.au",61],["opentunnel.net",62],["teleboy.ch",[64,65]],["docs.google.com",66],["endbasic.dev",67],["jmmv.dev",67],["fingerprint.com",67],["utreon.com",68],["zhihu.com",69],["natgeotv.com",70],["airtel.in",71],["dailystar.co.uk",72],["mirror.co.uk",72],["bentasker.co.uk",73],["discord.com",74],["meeting.tencent.com",75],["duolingo.com",76],["study.com",77],["wayfair.com",78],["view.ceros.com",79],["viu.com",80],["myair2.resmed.com",81],["travelerdoor.com",81],["azby.fmworld.net",82],["unrealengine.com",83],["wco.tv",84],["dark-gaming.com",85],["securegames.iwin.com",86],["neilpatel.com",87],["virginmediatelevision.ie",88],["myair.resmed.com",89],["player.amperwave.net",90],["poophq.com",[91,92,93,94,95]],["veev.to",[91,92,93,94,95]],["doods.to",[91,92,93,94,95]],["bing.com",96],["nicovideo.jp",97]]);
const exceptionsMap = new Map([["dev.fingerprint.com",[67]]]);
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
