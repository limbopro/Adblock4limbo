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
const uBOL_noFetchIf = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["ads"],["/^/"],["player-feedback"],["adsbygoogle"],["openx"],["method:HEAD"],["googlesyndication"],["googlesyndication","method:HEAD"],["damoh.ani-stream.com"],["/googlesyndication|inklinkor|ads\\/load/"],["zomap.de"],["fwmrm.net"],["adsafeprotected"],["google"],["cloudfront"],["/outbrain|criteo|thisiswaldo|media\\.net|ohbayersbur|adligature|quantserve|\\.js/"],["google-analytics"],["googlesyndication","length:150000-150200"],["bidgear","length:8132"],["bmcdn6"],["/adoto|\\/ads\\/js/"],["googletagmanager"],["syndication"],["/googlesyndication|inklinkor/"],["popunder"],["adsbygoogle.js"],["manager"],["moonicorn.network"],["ad"],["/ads"],["tvid.in/log"],["cloudfront.net/?"],["analytics"],["wtg-ads"],["doubleclick"],["/ads|doubleclick/"],["dqst.pl"],["googlesyndication.com"],["vlitag"],["/ads|track/"],["/static\\.criteo\\.net|adsbygoogle/","length:150000-150200"],["imasdk"],["tpc.googlesyndication.com"],["adskeeper"],["/freychang|passback|popunder|tag|banquetunarmedgrater/"],["ima"],["/adoto|googlesyndication/"],["ad-delivery"],["ima3_dai"],["imasdk.googleapis.com"],["method:GET"],["/ads|googletagmanager/"],["/api/v1/events"],["body:browser"],["eventing"],["splunkcloud.com/services/collector"],["marmalade"],["url:ipapi.co"],["api"]];

const hostnamesMap = new Map([["allmusic.com",0],["investing.com",0],["mylivewallpapers.com",0],["softfully.com",0],["sportea.online",0],["sekilastekno.com",0],["pornovka.cz",0],["naukrilelo.in",0],["androidquest.com",0],["reminimod.co",0],["highkeyfinance.com",0],["amanguides.com",0],["aduzz.com",0],["bitcrypto.info",0],["apkupload.in",0],["ezeviral.com",0],["pngreal.com",0],["ytpng.net",0],["travel.vebma.com",0],["cloud.majalahhewan.com",0],["key-hub.eu",0],["discoveryplus.in",0],["calculator-online.net",0],["tutorial.siberuang.com",0],["desiflixindia.com",0],["insurance.iptvsetupguide.com",0],["dotabuff.com",0],["forum.cstalking.tv",0],["mcqmall.com",0],["apksafe.in",0],["witcherhour.com",0],["clamor.pl",0],["one-tech.xyz",0],["ozulscans.com",0],["i-polls.com",0],["insurancevela.com",0],["noor-book.com",0],["wrzesnia.info.pl",0],["elahmad.com",0],["compromath.com",0],["sumoweb.to",0],["haloursynow.pl",0],["satkurier.pl",0],["mtg-print.com",0],["gktech.uk",0],["heavy.com",0],["creators.nafezly.com",0],["downloadfilm.website",0],["uploadsea.com",0],["skidrowreloaded.com",1],["mdn.lol",[1,19]],["pinoyfaucet.com",1],["player.glomex.com",2],["audioztools.com",3],["wowescape.com",3],["leechpremium.link",3],["camcam.cc",3],["png.is",3],["nohat.cc",3],["fc-lc.xyz",3],["kpopsea.com",3],["isi7.net",3],["hyipstats.net",3],["palixi.net",3],["freecoursesonline.me",3],["pinloker.com",3],["sshkit.com",3],["fastssh.com",3],["howdy.id",3],["htmlgames.com",4],["mac2sell.net",5],["1001tracklists.com",5],["gamebrew.org",5],["game3rb.com",5],["sixsave.com",5],["bowfile.com",[5,31]],["dealsfinders.blog",5],["iphonechecker.herokuapp.com",5],["coloringpage.eu",5],["conocimientoshackers.com",5],["juegosdetiempolibre.org",5],["karaokegratis.com.ar",5],["mammaebambini.it",5],["riazor.org",5],["rinconpsicologia.com",5],["sempredirebanzai.it",5],["vectogravic.com",5],["androidacy.com",5],["freetohell.com",5],["faucetcrypto.com",6],["toolss.net",6],["flixscans.org",6],["civitai.com",6],["streamer4u.site",6],["imagetranslator.io",6],["tophostingapp.com",6],["digitalmarktrend.com",6],["webhostingpost.com",6],["mynewsmedia.co",6],["overgal.com",6],["howtoconcepts.com",6],["arcai.com",6],["romadd.com",6],["disheye.com",6],["homeairquality.org",[6,21]],["techtrim.tech",6],["arhplyrics.in",6],["raky.in",6],["askpaccosi.com",6],["crypto4tun.com",6],["jpoplist.us",6],["quizack.com",6],["moddingzone.in",6],["rajsayt.xyz",6],["jaunpurmusic.info",6],["apkandroidhub.in",6],["babymodz.com",6],["deezloaded.com",6],["mad.gplpalace.one",6],["studyis.xyz",6],["chillx.top",6],["worldappsstore.xyz",6],["prepostseo.com",6],["dulichkhanhhoa.net",6],["noithatmyphu.vn",6],["iptvjournal.com",6],["dramaworldhd.co",6],["tudaydeals.com",6],["choiceappstore.xyz",6],["inbbotlist.com",6],["freepreset.net",6],["getintoway.com",6],["crdroid.net",6],["zerion.cc",6],["beelink.pro",6],["hax.co.id",6],["woiden.id",6],["pviewer.site",6],["theusaposts.com",6],["hackr.io",6],["rendimentibtp.it",6],["esopress.com",6],["welovecrypto.xyz",6],["paketmu.com",6],["coins-town.com",6],["watchx.top",6],["bitcosite.com",6],["bitzite.com",6],["globlenews.in",6],["programmingeeksclub.com",6],["archivebate.com",6],["now.gg",6],["now.us",6],["unitystr.com",6],["moto.it",6],["wellness4live.com",6],["forplayx.ink",6],["ghscanner.com",6],["sat.technology",6],["moviesapi.club",6],["bestx.stream",6],["automoto.it",6],["olarila.com",6],["snapwordz.com",6],["toolxox.com",6],["go2share.net",6],["flixscans.com",6],["animesync.org",6],["freewsad.com",6],["yt-downloaderz.com",6],["hostmath.com",6],["urlcut.ninja",6],["fplstatistics.co.uk",6],["99corporates.com",6],["fivemdev.org",6],["winlator.com",6],["freetvsports.xyz",6],["sabornutritivo.com",6],["metrolagu.cam",6],["loot-link.com",6],["loot-links.com",6],["lootdest.com",6],["los40.com",6],["muyinteresante.es",7],["ani-stream.com",8],["oko.sh",9],["joyn.de",10],["uktvplay.co.uk",11],["tf1.fr",12],["exe.app",13],["eio.io",13],["ufacw.com",13],["figurehunter.net",13],["workink.click",14],["work.ink",15],["envato-downloader.com",16],["freepik-downloader.com",16],["freepic-downloader.com",16],["infinityscans.xyz",[17,18]],["infinityscans.net",[17,18]],["bitcotasks.com",19],["btcbitco.in",20],["btcsatoshi.net",20],["cempakajaya.com",20],["crypto4yu.com",20],["gainl.ink",20],["readbitcoin.org",20],["wiour.com",20],["senda.pl",21],["computerpedia.in",22],["foodxor.com",22],["geniussolutions.co",22],["mealcold.com",22],["mixrootmods.com",22],["fartechy.com",22],["tii.la",23],["camarchive.tv",24],["hindustantimes.com",25],["linkpoi.me",26],["platform.adex.network",27],["mcrypto.club",28],["coinsparty.com",28],["weszlo.com",28],["simplebits.io",29],["timesnowhindi.com",30],["timesnowmarathi.com",30],["timesofindia.com",30],["wyze.com",32],["mmorpg.org.pl",33],["journaldemontreal.com",34],["tvanouvelles.ca",34],["boxingstreams100.com",34],["mlbstreams100.com",34],["mmastreams-100.tv",34],["nbastreams-100.tv",34],["soccerstreams-100.tv",34],["vods.tv",34],["atresplayer.com",34],["independent.co.uk",34],["dongknows.com",35],["forsal.pl",36],["2the.space",37],["freeshib.biz",38],["doge25.in",39],["loawa.com",40],["ygosu.com",40],["sportalkorea.com",40],["algumon.com",40],["hancinema.net",40],["enetnews.co.kr",40],["edaily.co.kr",40],["economist.co.kr",40],["etoday.co.kr",40],["hankyung.com",40],["isplus.com",40],["hometownstation.com",40],["kagit.kr",40],["inven.co.kr",40],["honkailab.com",40],["warcraftrumbledeck.com",40],["genshinlab.com",40],["thestockmarketwatch.com",40],["thephoblographer.com",40],["issuya.com",40],["deutschekanale.com",41],["soranews24.com",42],["bravedown.com",43],["smartkhabrinews.com",44],["ortograf.pl",45],["mixrootmod.com",46],["explorecams.com",47],["southpark.de",48],["riuria.beauty",49],["lifestyle.bg",50],["money.bg",50],["news.bg",50],["topsport.bg",50],["webcafe.bg",50],["realmadryt.pl",50],["getthit.com",51],["everand.com",52],["search.brave.com",53],["coursera.org",54],["notion.so",55],["pimylifeup.com",56],["seazon.fr",57],["html5.gamedistribution.com",58]]);

const entitiesMap = new Map([["pobre",0],["zone-telechargement",1],["magesy",3],["bg-gledai",6]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function noFetchIf(
    propsToMatch = '',
    responseBody = ''
) {
    if ( typeof propsToMatch !== 'string' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('prevent-fetch', propsToMatch, responseBody);
    const needles = [];
    for ( const condition of propsToMatch.split(/\s+/) ) {
        if ( condition === '' ) { continue; }
        const pos = condition.indexOf(':');
        let key, value;
        if ( pos !== -1 ) {
            key = condition.slice(0, pos);
            value = condition.slice(pos + 1);
        } else {
            key = 'url';
            value = condition;
        }
        needles.push({ key, re: safe.patternToRegex(value) });
    }
    self.fetch = new Proxy(self.fetch, {
        apply: function(target, thisArg, args) {
            const details = args[0] instanceof self.Request
                ? args[0]
                : Object.assign({ url: args[0] }, args[1]);
            let proceed = true;
            try {
                const props = new Map();
                for ( const prop in details ) {
                    let v = details[prop];
                    if ( typeof v !== 'string' ) {
                        try { v = safe.JSON_stringify(v); }
                        catch(ex) { }
                    }
                    if ( typeof v !== 'string' ) { continue; }
                    props.set(prop, v);
                }
                if ( propsToMatch === '' && responseBody === '' ) {
                    const out = Array.from(props).map(a => `${a[0]}:${a[1]}`);
                    safe.uboLog(logPrefix, `Called: ${out.join('\n')}`);
                    return Reflect.apply(target, thisArg, args);
                }
                proceed = needles.length === 0;
                for ( const { key, re } of needles ) {
                    if (
                        props.has(key) === false ||
                        re.test(props.get(key)) === false
                    ) {
                        proceed = true;
                        break;
                    }
                }
            } catch(ex) {
            }
            if ( proceed ) {
                return Reflect.apply(target, thisArg, args);
            }
            let responseType = '';
            if ( details.mode === undefined || details.mode === 'cors' ) {
                try {
                    const desURL = new URL(details.url);
                    responseType = desURL.origin !== document.location.origin
                        ? 'cors'
                        : 'basic';
                } catch(ex) {
                    safe.uboErr(logPrefix, `Error: ${ex}`);
                }
            }
            return generateContentFn(responseBody).then(text => {
                safe.uboLog(logPrefix, `Prevented with response "${text}"`);
                const response = new Response(text, {
                    statusText: 'OK',
                    headers: {
                        'Content-Length': text.length,
                    }
                });
                safe.Object_defineProperty(response, 'url', {
                    value: details.url
                });
                if ( responseType !== '' ) {
                    safe.Object_defineProperty(response, 'type', {
                        value: responseType
                    });
                }
                return response;
            });
        }
    });
}

function generateContentFn(directive) {
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
        return Promise.resolve(randomize(10));
    }
    if ( directive === 'emptyObj' ) {
        return Promise.resolve('{}');
    }
    if ( directive === 'emptyArr' ) {
        return Promise.resolve('[]');
    }
    if ( directive === 'emptyStr' ) {
        return Promise.resolve('');
    }
    if ( directive.startsWith('length:') ) {
        const match = /^length:(\d+)(?:-(\d+))?$/.exec(directive);
        if ( match ) {
            const min = parseInt(match[1], 10);
            const extent = safe.Math_max(parseInt(match[2], 10) || 0, min) - min;
            const len = safe.Math_min(min + extent * safe.Math_random(), 500000);
            return Promise.resolve(randomize(len | 0));
        }
    }
    if ( directive.startsWith('war:') && scriptletGlobals.warOrigin ) {
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
        });
    }
    return Promise.resolve('');
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
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
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
                return { matchAll: true };
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
            return this.Object_fromEntries(entries);
        },
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
    let bcBuffer = [];
    safe.logLevel = scriptletGlobals.logLevel || 1;
    safe.sendToLogger = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
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
    try { noFetchIf(...argsList[i]); }
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
    return uBOL_noFetchIf();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_noFetchIf = cloneInto([
            [ '(', uBOL_noFetchIf.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_noFetchIf);
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
    delete page.uBOL_noFetchIf;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
