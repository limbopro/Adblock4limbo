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
const uBOL_noXhrIf = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["request=adb"],["doubleclick"],["googlesyndication"],["/adsbygoogle|doubleclick/"],["homad-global-configs"],["/enthusiastgaming|googleoptimize|googletagmanager/"],["/doubleclick|googlesyndication/"],["/^(?!.*(einthusan\\.io|yahoo|rtnotif|ajax|quantcast|bugsnag))/"],["/adnxs.com|onetag-sys.com|teads.tv|google-analytics.com/"],["ad_"],["/redirector\\.googlevideo\\.com\\/videoplayback[\\s\\S]*?dclk_video_ads/"],["/\\/ad\\/g\\/1/"],["ads"],["/googlesyndication|adpushup|adrecover/"],["svonm"],["/\\/VisitorAPI\\.js|\\/AppMeasurement\\.js/"],["inklinkor.com"],["fwmrm.net"],["damoh"],["/youboranqs01|spotx|springserve/"],["/a-mo\\.net|adnxs\\.com|prebid|creativecdn\\.com|e-planning\\.net|quantumdex\\.io/"],["pop"],["/^/"],["/ad"],["adsbygoogle"],["prebid"],["wpadmngr"],["/ads"],["pub.network"],["/ads|doubleclick/"],["url:googlesyndication"],["/analytics|livestats/"],["mahimeta"],["notifier"],["/ad-"],["/coinzillatag|czilladx/"],["czilladx"],["popunder"],["php"],["/googlesyndication|doubleclick/"],["/static\\.criteo\\.net|adsbygoogle/"],["adx"],["cls_report?"],["method:HEAD"],["adswizz.com"],["tag"],["/pagead2\\.googlesyndication\\.com|inklinkor\\.com/"],["googletagmanager"],["pagead2.googlesyndication.com"],["time-events"],["ezoic"],["/_Ad_|_ad/"],["method:POST url:/logImpressions"],["method:POST"],["utreon.com/pl/api/event method:POST"],["log-sdk.ksapisrv.com/rest/wd/common/log/collect method:POST"],["/VisitorAPI|AppMeasurement/"],["analytics/bulk-pixel"],["mobileanalytics"],["cloudflare.com/cdn-cgi/trace"],["/recommendations."],["/api/analytics"],["api"],["lr-ingest.io"],["/gtm.js"],["ip-api"]];

const hostnamesMap = new Map([["handelsblatt.com",0],["moviepilot.de",1],["journaldemontreal.com",1],["minhaconexao.com.br",1],["videolyrics.in",1],["sportshub.to",1],["topsporter.net",1],["meteoetradar.com",1],["gala.fr",1],["geo.fr",1],["voici.fr",1],["sankaku.app",2],["freegogpcgames.com",2],["informaxonline.com",[2,23]],["cambb.xxx",2],["gaminplay.com",2],["blisseyhusband.in",2],["routech.ro",2],["rontechtips.com",2],["homeairquality.org",2],["techtrim.tech",2],["pigeonburger.xyz",2],["freedownloadvideo.net",2],["askpaccosi.com",2],["crypto4tun.com",2],["fusedgt.com",2],["apkowner.org",2],["appsmodz.com",2],["bingotingo.com",2],["superpsx.com",2],["financeflix.in",2],["technoflip.in",2],["stringreveals.com",2],["fox.com",2],["obutecodanet.ig.com.br",2],["firmwarex.net",2],["softwaretotal.net",2],["freecodezilla.net",2],["movieslegacy.com",2],["iconmonstr.com",2],["rbxscripts.net",2],["adslink.pw",2],["comentariodetexto.com",2],["wordpredia.com",2],["karanpc.com",2],["livsavr.co",2],["gsmhamza.com",2],["38.242.194.12",2],["bi-girl.net",2],["blurayufr.xyz",2],["medeberiyaa.com",2],["samuraiscan.org",2],["shinobijawi.id",2],["snbc13.com",2],["teluguflix.lol",2],["hlspanel.xyz",2],["webmatrices.com",2],["dropnudes.com",2],["ftuapps.dev",2],["onehack.us",2],["paste.bin.sx",2],["privatenudes.com",2],["fordownloader.com",2],["di.fm",2],["pinsystem.co.uk",3],["wetter.de",4],["thesimsresource.com",5],["gnomio.com",6],["trangchu.news",6],["cybermania.ws",6],["techhelpbd.com",6],["techacode.com",6],["tuxnews.it",6],["youmath.it",8],["frkn64modding.com",9],["sbs.com.au",10],["channel4.com",11],["duplichecker.com",12],["gearingcommander.com",12],["novelmultiverse.com",12],["taming.io",12],["snlookup.com",12],["globfone.com",12],["chimicamo.org",12],["webforefront.com",12],["apkmagic.com.ar",12],["reaperscans.id",12],["freecoursesonline.me",12],["short1.site",12],["telewizja-streamer.xyz",12],["filmisub.cc",12],["bagi.co.in",12],["keran.co",12],["filmesdostorrenthd.net",12],["searchenginereports.net",13],["plagiarismdetector.net",13],["vox.de",14],["vip.de",14],["rtl.de",14],["fitforfun.de",14],["desired.de",14],["kino.de",14],["cinema.de",14],["nationalgeographic.fr",15],["oko.sh",16],["uktvplay.co.uk",17],["golem.de",18],["player.pcgameshardware.de",18],["rakuten.tv",19],["dev.miuiflash.com",20],["djxmaza.in",20],["thecubexguide.com",20],["zdam.xyz",21],["pasend.link",22],["freewp.io",22],["hiraethtranslation.com",23],["texture-packs.com",24],["manyakan.com",24],["persianhive.com",24],["boainformacao.com.br",24],["privatenewz.com",24],["gcertificationcourse.com",24],["portaliz.site",24],["ghior.com",24],["tech-story.net",24],["visalist.io",24],["gyanitheme.com",24],["hipsonyc.com",24],["litecoin.host",24],["jetpunk.com",25],["mcrypto.club",26],["coinsparty.com",26],["simplebits.io",27],["flightsim.to",28],["stardeos.com",30],["goduke.com",31],["1apple.xyz",32],["lavanguardia.com",33],["foodsdictionary.co.il",34],["freesolana.top",35],["faucetclub.net",36],["claim.fun",36],["faucetcrypto.net",36],["btc25.org",36],["doge25.in",36],["cashbux.work",36],["bestclaimtrx.xyz",37],["freebinance.top",37],["aiimgvlog.fun",37],["farescd.com",38],["getintoway.com",39],["loawa.com",40],["ygosu.com",40],["sportalkorea.com",40],["algumon.com",40],["hancinema.net",40],["enetnews.co.kr",40],["edaily.co.kr",40],["economist.co.kr",40],["etoday.co.kr",40],["hankyung.com",40],["isplus.com",40],["hometownstation.com",40],["kagit.kr",40],["inven.co.kr",40],["freelitecoin.top",41],["freetron.top",41],["earncrypto.co.in",41],["citi.com",42],["filmi7.com",43],["hotfm.audio",44],["luffytra.xyz",45],["tii.la",46],["maxt.church",47],["history.com",49],["webhostingpost.com",50],["tophostingapp.com",50],["digitalmarktrend.com",50],["pluto.tv",51],["docs.google.com",52],["endbasic.dev",53],["jmmv.dev",53],["fingerprint.com",53],["utreon.com",54],["zhihu.com",55],["natgeotv.com",56],["airtel.in",57],["viu.com",58],["myair2.resmed.com",59],["travelerdoor.com",59],["azby.fmworld.net",60],["unrealengine.com",61],["wco.tv",62],["dark-gaming.com",63],["securegames.iwin.com",64],["neilpatel.com",65]]);

const entitiesMap = new Map([["nsw2u",2],["cinemakottaga",2],["asiaon",2],["apkmaven",2],["bg-gledai",2],["gledaitv",2],["live-streamfootball",2],["rbtv77",2],["superabbit77",2],["einthusan",7],["khatrimaza",12],["moviegan",12],["writedroid",12],["shineads",12],["dropgalaxy",20],["zone-telechargement",22],["mhdtvworld",29],["empire-stream",48]]);

const exceptionsMap = new Map([["dev.fingerprint.com",[53]]]);

/******************************************************************************/

function noXhrIf(
    propsToMatch = '',
    directive = ''
) {
    if ( typeof propsToMatch !== 'string' ) { return; }
    const safe = safeSelf();
    const xhrInstances = new WeakMap();
    const propNeedles = parsePropertiesToMatch(propsToMatch, 'url');
    const log = propNeedles.size === 0 ? console.log.bind(console) : undefined;
    const warOrigin = scriptletGlobals.get('warOrigin');
    const generateRandomString = len => {
            let s = '';
            do { s += safe.Math_random().toString(36).slice(2); }
            while ( s.length < 10 );
            return s.slice(0, len);
    };
    const generateContent = async directive => {
        if ( directive === 'true' ) {
            return generateRandomString(10);
        }
        if ( directive.startsWith('war:') ) {
            if ( warOrigin === undefined ) { return ''; }
            return new Promise(resolve => {
                const warName = directive.slice(4);
                const fullpath = [ warOrigin, '/', warName ];
                const warSecret = scriptletGlobals.get('warSecret');
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
            });
        }
        return '';
    };
    self.XMLHttpRequest = class extends self.XMLHttpRequest {
        open(method, url, ...args) {
            if ( log !== undefined ) {
                log(`uBO: xhr.open(${method}, ${url}, ${args.join(', ')})`);
                return super.open(method, url, ...args);
            }
            if ( warOrigin !== undefined && url.startsWith(warOrigin) ) {
                return super.open(method, url, ...args);
            }
            const haystack = { method, url };
            if ( matchObjectProperties(propNeedles, haystack) ) {
                xhrInstances.set(this, haystack);
            }
            return super.open(method, url, ...args);
        }
        send(...args) {
            const haystack = xhrInstances.get(this);
            if ( haystack === undefined ) {
                return super.send(...args);
            }
            let promise = Promise.resolve({
                xhr: this,
                directive,
                props: {
                    readyState: { value: 4 },
                    response: { value: '' },
                    responseText: { value: '' },
                    responseXML: { value: null },
                    responseURL: { value: haystack.url },
                    status: { value: 200 },
                    statusText: { value: 'OK' },
                },
            });
            switch ( this.responseType ) {
                case 'arraybuffer':
                    promise = promise.then(details => {
                        details.props.response.value = new ArrayBuffer(0);
                        return details;
                    });
                    break;
                case 'blob':
                    promise = promise.then(details => {
                        details.props.response.value = new Blob([]);
                        return details;
                    });
                    break;
                case 'document': {
                    promise = promise.then(details => {
                        const parser = new DOMParser();
                        const doc = parser.parseFromString('', 'text/html');
                        details.props.response.value = doc;
                        details.props.responseXML.value = doc;
                        return details;
                    });
                    break;
                }
                case 'json':
                    promise = promise.then(details => {
                        details.props.response.value = {};
                        details.props.responseText.value = '{}';
                        return details;
                    });
                    break;
                default:
                    if ( directive === '' ) { break; }
                    promise = promise.then(details => {
                        return generateContent(details.directive).then(text => {
                            details.props.response.value = text;
                            details.props.responseText.value = text;
                            return details;
                        });
                    });
                    break;
            }
            promise.then(details => {
                Object.defineProperties(details.xhr, details.props);
                details.xhr.dispatchEvent(new Event('readystatechange'));
                details.xhr.dispatchEvent(new Event('load'));
                details.xhr.dispatchEvent(new Event('loadend'));
            });
        }
    };
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
    const props = safe.Array_from(propNeedles.keys());
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
        'Array_from': Array.from,
        'Error': self.Error,
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
        'Math_floor': Math.floor,
        'Math_random': Math.random,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
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
        uboLog(...args) {
            if ( scriptletGlobals.has('canDebug') === false ) { return; }
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
            }
            const expect = (options.canNegate !== true || pattern.startsWith('!') === false);
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
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                return new RegExp(verbatim ? `^${reStr}$` : reStr, flags);
            }
            try {
                return new RegExp(match[1], match[2] || undefined);
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
    try { noXhrIf(...argsList[i]); }
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

const targetWorld = 'MAIN';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_noXhrIf();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_noXhrIf = cloneInto([
            [ '(', uBOL_noXhrIf.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_noXhrIf);
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
    delete page.uBOL_noXhrIf;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
