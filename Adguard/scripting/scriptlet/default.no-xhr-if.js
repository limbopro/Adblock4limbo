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

const argsList = [["request=adb"],["doubleclick"],["/adsbygoogle|doubleclick/"],["homad-global-configs"],["/enthusiastgaming|googleoptimize|googletagmanager/"],["/doubleclick|googlesyndication/"],["/^(?!.*(einthusan\\.io|yahoo|rtnotif|ajax|quantcast|bugsnag))/"],["/adnxs.com|onetag-sys.com|teads.tv|google-analytics.com/"],["ad_"],["/\\/ad\\/g\\/1/"],["ads"],["/googlesyndication|adpushup|adrecover/"],["svonm"],["/\\/VisitorAPI\\.js|\\/AppMeasurement\\.js/"],["inklinkor.com"],["googlesyndication"],["fwmrm.net"],["damoh"],["/youboranqs01|spotx|springserve/"],["/a-mo\\.net|adnxs\\.com|prebid|creativecdn\\.com|e-planning\\.net|quantumdex\\.io/"],["pop"],["/^/"],["/ad"],["/ads|doubleclick/"],["adsbygoogle"],["prebid"],["wpadmngr"],["/ads"],["pub.network"],["url:googlesyndication"],["/analytics|livestats/"],["mahimeta"],["notifier"],["/ad-"],["/coinzillatag|czilladx/"],["czilladx"],["php"],["/googlesyndication|doubleclick/"],["/static\\.criteo\\.net|adsbygoogle/"],["popunder"],["adx"],["cls_report?"],["method:HEAD"],["adswizz.com"],["tag"],["/pagead2\\.googlesyndication\\.com|inklinkor\\.com/"],["googletagmanager"],["pagead2.googlesyndication.com"],["time-events"],["ezoic"],["/_Ad_|_ad/"],["method:POST url:/logImpressions"],["method:POST"],["utreon.com/pl/api/event method:POST"],["log-sdk.ksapisrv.com/rest/wd/common/log/collect method:POST"],["/VisitorAPI|AppMeasurement/"],["mobileanalytics"],["cloudflare.com/cdn-cgi/trace"],["/recommendations."],["/api/analytics"],["api"],["lr-ingest.io"],["/gtm.js"],["ip-api"]];

const hostnamesMap = new Map([["handelsblatt.com",0],["moviepilot.de",1],["sbs.com.au",1],["journaldemontreal.com",1],["minhaconexao.com.br",1],["videolyrics.in",1],["sportshub.to",1],["topsporter.net",1],["meteoetradar.com",1],["gala.fr",1],["geo.fr",1],["voici.fr",1],["pinsystem.co.uk",2],["wetter.de",3],["thesimsresource.com",4],["gnomio.com",5],["trangchu.news",5],["cybermania.ws",5],["techhelpbd.com",5],["techacode.com",5],["tuxnews.it",5],["youmath.it",7],["frkn64modding.com",8],["channel4.com",9],["duplichecker.com",10],["gearingcommander.com",10],["novelmultiverse.com",10],["taming.io",10],["snlookup.com",10],["globfone.com",10],["chimicamo.org",10],["webforefront.com",10],["apkmagic.com.ar",10],["reaperscans.id",10],["freecoursesonline.me",10],["short1.site",10],["telewizja-streamer.xyz",10],["filmisub.cc",10],["bagi.co.in",10],["keran.co",10],["filmesdostorrenthd.net",10],["searchenginereports.net",11],["plagiarismdetector.net",11],["vox.de",12],["vip.de",12],["rtl.de",12],["fitforfun.de",12],["desired.de",12],["kino.de",12],["cinema.de",12],["nationalgeographic.fr",13],["oko.sh",14],["freegogpcgames.com",15],["informaxonline.com",[15,22]],["cambb.xxx",15],["gaminplay.com",15],["blisseyhusband.in",15],["routech.ro",15],["rontechtips.com",15],["homeairquality.org",15],["techtrim.tech",15],["pigeonburger.xyz",15],["freedownloadvideo.net",15],["askpaccosi.com",15],["crypto4tun.com",15],["fusedgt.com",15],["apkowner.org",15],["appsmodz.com",15],["bingotingo.com",15],["superpsx.com",15],["financeflix.in",15],["technoflip.in",15],["stringreveals.com",15],["fox.com",15],["obutecodanet.ig.com.br",15],["firmwarex.net",15],["softwaretotal.net",15],["freecodezilla.net",15],["movieslegacy.com",15],["iconmonstr.com",15],["rbxscripts.net",15],["adslink.pw",15],["comentariodetexto.com",15],["wordpredia.com",15],["karanpc.com",15],["livsavr.co",15],["gsmhamza.com",15],["38.242.194.12",15],["bi-girl.net",15],["blurayufr.xyz",15],["medeberiyaa.com",15],["samuraiscan.org",15],["shinobijawi.id",15],["snbc13.com",15],["teluguflix.lol",15],["hlspanel.xyz",15],["webmatrices.com",15],["dropnudes.com",15],["ftuapps.dev",15],["onehack.us",15],["paste.bin.sx",15],["privatenudes.com",15],["fordownloader.com",15],["di.fm",15],["rbtv77.com",15],["sankaku.app",15],["uktvplay.co.uk",16],["golem.de",17],["player.pcgameshardware.de",17],["rakuten.tv",18],["dev.miuiflash.com",19],["djxmaza.in",19],["thecubexguide.com",19],["zdam.xyz",20],["pasend.link",21],["freewp.io",21],["hiraethtranslation.com",22],["nulleb.com",23],["texture-packs.com",24],["manyakan.com",24],["persianhive.com",24],["boainformacao.com.br",24],["privatenewz.com",24],["gcertificationcourse.com",24],["portaliz.site",24],["ghior.com",24],["tech-story.net",24],["visalist.io",24],["gyanitheme.com",24],["hipsonyc.com",24],["litecoin.host",24],["jetpunk.com",25],["mcrypto.club",26],["coinsparty.com",26],["simplebits.io",27],["flightsim.to",28],["stardeos.com",29],["goduke.com",30],["1apple.xyz",31],["lavanguardia.com",32],["foodsdictionary.co.il",33],["freesolana.top",34],["faucetclub.net",35],["claim.fun",35],["faucetcrypto.net",35],["btc25.org",35],["doge25.in",35],["cashbux.work",35],["farescd.com",36],["getintoway.com",37],["loawa.com",38],["ygosu.com",38],["sportalkorea.com",38],["algumon.com",38],["hancinema.net",38],["enetnews.co.kr",38],["edaily.co.kr",38],["economist.co.kr",38],["etoday.co.kr",38],["hankyung.com",38],["isplus.com",38],["hometownstation.com",38],["kagit.kr",38],["inven.co.kr",38],["viva100.com",38],["joongdo.co.kr",38],["jjang0u.com",38],["tenbizt.com",38],["tvreport.co.kr",38],["newautopost.co.kr",38],["mememedia.co.kr",38],["mobilitytv.co.kr",38],["cboard.net",38],["a-ha.io",38],["interfootball.co.kr",38],["fourfourtwo.co.kr",38],["freebinance.top",39],["aiimgvlog.fun",39],["freelitecoin.top",40],["freetron.top",40],["earncrypto.co.in",40],["citi.com",41],["filmi7.com",42],["hotfm.audio",43],["luffytra.xyz",44],["tii.la",45],["maxt.church",46],["history.com",48],["webhostingpost.com",49],["tophostingapp.com",49],["digitalmarktrend.com",49],["pluto.tv",50],["docs.google.com",51],["endbasic.dev",52],["jmmv.dev",52],["fingerprint.com",52],["utreon.com",53],["zhihu.com",54],["natgeotv.com",55],["viu.com",56],["myair2.resmed.com",57],["travelerdoor.com",57],["azby.fmworld.net",58],["unrealengine.com",59],["wco.tv",60],["dark-gaming.com",61],["securegames.iwin.com",62],["neilpatel.com",63]]);

const entitiesMap = new Map([["einthusan",6],["khatrimaza",10],["moviegan",10],["writedroid",10],["shineads",10],["nsw2u",15],["cinemakottaga",15],["asiaon",15],["apkmaven",15],["bg-gledai",15],["gledaitv",15],["live-streamfootball",15],["superabbit77",15],["dropgalaxy",19],["zone-telechargement",21],["mhdtvworld",23],["empire-stream",47]]);

const exceptionsMap = new Map([["dev.fingerprint.com",[52]]]);

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
        'JSON_parse': self.JSON.parse.bind(self.JSON),
        'JSON_stringify': self.JSON.stringify.bind(self.JSON),
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
