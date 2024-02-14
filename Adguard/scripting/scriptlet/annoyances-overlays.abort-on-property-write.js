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

// ruleset: annoyances-overlays

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_abortOnPropertyWrite = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["Object.prototype.encodeJsonpScriptSrc"],["ai_front"],["noAdsCont"],["adregain_wall"],["rightnow"],["document.oncontextmenu"],["hasAdblock"],["adBlockDetected"],["nocontext"],["clickIE4"],["disableSelection"],["CheckAdLoad"],["addLink"],["_sp_"],["document.onselectstart"],["document.ondragstart"],["disableEnterKey"],["adMessage"],["adBlockEnabled"],["$adframe"],["XF"],["hidekeep"],["ABDSettings"],["clickIE"],["disable_copy"],["disable_hot_keys"],["loadOutbrain"],["killCopy"],["intializemarquee"],["document.oncopy"],["document.onkeydown"],["addLinkToCopy"],["stopPrntScr"],["disable_keystrokes"],["stopSelect"],["reEnable"],["ABD"],["ondragstart"],["ai_adb_overlay"],["ai_adb"],["initimg"],["gdpr_popin_path"],["generatePopup"],["FuckAdBlock"],["disableselect"],["onload"],["disable_ext_code"],["journeyCompilerGateway"],["document.onkeypress"],["admrlWpJsonP"],["document.onmousedown"],["document.body.oncopy"],["check"],["mensagem"],["ABB_config"]];

const hostnamesMap = new Map([["spletnik.ru",0],["ptisidiastima.com",1],["medebooks.xyz",1],["re-library.com",1],["mobilereset99.com",1],["fotoo.org",2],["unixhow.com",3],["vsthouse.ru",3],["primpogoda.ru",3],["gitjournal.tech",3],["e360.yale.edu",4],["m4ufree.com",5],["cristoiublog.ro",[5,14]],["cittadinanza.biz",5],["glistranieri.it",5],["sabishiidesu.com",5],["xiaomi4mi.com",5],["cmg24.pl",5],["jobsbotswana.info",5],["olhonaviagem.com",5],["djelfa.info",5],["gordiando.com.br",5],["wader.toys",5],["tecnotutoshd.net",5],["l2gamers.cl",[5,30]],["luoghidavedere.it",5],["voxc.org",5],["ac-mo.com",5],["eoreuni.com",5],["tistory.com",5],["gamegame.kr",5],["jootc.com",5],["wikibious.com",5],["mbs.jp",5],["texte.work",5],["koreanaddict.net",5],["englishlands.net",5],["fruit01.xyz",5],["clipartmax.com",5],["planetagibi.com.br",[5,14]],["planetagibiblog.com.br",[5,14]],["alltechnerd.com",5],["generationamiga.com",5],["watchmdh.to",5],["world4.eu",[5,46]],["ggulpass.com",5],["chessimprover.com",[5,14]],["baixedetudo.net.br",5],["epitesti.ro",[5,9]],["csid.ro",5],["onna.kr",[5,14,15]],["savoriurbane.com",5],["ilife97.com",[5,15]],["romprovider.com",5],["habuteru.com",5],["daotranslate.com",[5,14]],["hdrez.com",5],["esaral.com",5],["classnotes.org.in",5],["agar.io",6],["surviv.io",7],["esercizinglese.com",7],["pelisfull.tv",7],["halotracker.com",7],["102bank.com",7],["80beyond.spacestation-online.com",7],["b4usa.com",7],["badgerandblade.com",7],["mzk.starachowice.eu",7],["gay69.stream",8],["timponline.ro",[8,10,24]],["republicadecuritiba.net",8],["dialectsarchive.com",8],["resourcepack.net",[9,10]],["kurazone.net",[9,10]],["peliculas24.me",10],["techtrickseo.com",[10,24]],["randomstory.org",10],["booksmedicos.org",10],["kirannewsagency.com",10],["starsunfolded.com",10],["satcesc.com",[10,30]],["amlesson.ru",[10,33]],["hebrew4christians.com",10],["manianomikata.com",10],["iosgods.com",11],["uol.com.br",12],["elheraldo.hn",12],["tekstowo.pl",12],["warringtonguardian.co.uk",13],["legionprogramas.org",14],["selfstudyhistory.com",[14,16]],["youmath.it",[14,50]],["7fyd.com",14],["arti-definisi-pengertian.info",[14,15]],["mkv-pastes.com",14],["tinyppt.com",[15,16]],["droidtekno.com",[15,16]],["businessemailetiquette.com",[15,16]],["newsbook.pl",[15,16]],["relet365.com",15],["empregoestagios.com",15],["elektrikmen.com",15],["hitproversion.com",15],["lazytranslations.com",[15,16]],["jobskaro.com",15],["appd.at",15],["apk1s.com",15],["audiobookcup.com",15],["atlas-geografic.net",[15,16]],["sdewery.me",[15,16]],["projektowanie-wnetrz-online.pl",15],["hindi-gk.com",[16,24,25]],["qualityfilehosting.com",16],["openfinanza.it",16],["naaree.com",16],["gourmetscans.net",16],["bingotingo.com",16],["7misr4day.com",16],["guidingliterature.com",16],["kollyinsider.com",17],["ewrc-results.com",18],["raven-mythic.com",19],["cafesaxophone.com",20],["alisbach.com",21],["linuxslaves.com",21],["nakblogz.top",21],["juancarlosmolinos.net",22],["xhardhempus.com",23],["calorielijst.nl",23],["truyenbanquyen.com",[24,25]],["tunovelaligera.com",25],["zdravenportal.eu",25],["clujust.ro",25],["polygon.com",26],["apornstories.com",27],["cmjornal.pt",29],["aicesu.cn",29],["racevpn.com",30],["media.framu.world",30],["gaz.com.br",30],["pancreas.ro",30],["bloombergquint.com",31],["kpopjjang.com",32],["bigulnews.tv",32],["jpopsingles.eu",32],["skidrowcodex.net",32],["darktranslation.com",32],["hulnews.top",32],["boke112.com",32],["janvissersweer.nl",32],["adpres.ro",32],["the-masters-voice.com",32],["postcourier.com.pg",[32,37]],["privivkainfo.ru",33],["targetstudy.com",34],["mtbtutoriales.com",35],["nakedcapitalism.com",36],["hedgeaccordingly.com",36],["nfltraderumors.co",37],["fanprojseries.com",38],["sfweekly.com",38],["magyarhang.org",39],["ryuryuko.blog90.fc2.com",40],["airfrance.co.jp",41],["fxstreet.com",42],["jeu2048.fr",43],["androidpolice.com",1],["solotrend.net",1],["tutoganga.blogspot.com",44],["hentaialtadefinizione.it",45],["wired.com",47],["citroen.pl",48],["peugeot.pl",48],["theblaze.com",49],["nbcsports.com",49],["nbcsportsedge.com",49],["ciweimao.com",51],["360doc.com",51],["encurtandourl.com",53],["mineskin.org",54]]);

const entitiesMap = new Map([["pelispedia",5],["mimaletamusical",5],["tabonitobrasil",5],["anisubindo",10],["hukmatpro",21],["theartofnakedwoman",28],["oploverz",52]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function abortOnPropertyWrite(
    prop = ''
) {
    if ( typeof prop !== 'string' ) { return; }
    if ( prop === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('abort-on-property-read', prop);
    const exceptionToken = getExceptionToken();
    let owner = window;
    for (;;) {
        const pos = prop.indexOf('.');
        if ( pos === -1 ) { break; }
        owner = owner[prop.slice(0, pos)];
        if ( owner instanceof Object === false ) { return; }
        prop = prop.slice(pos + 1);
    }
    delete owner[prop];
    Object.defineProperty(owner, prop, {
        set: function() {
            safe.uboLog(logPrefix, 'Aborted');
            throw new ReferenceError(exceptionToken);
        }
    });
}

function getExceptionToken() {
    const safe = safeSelf();
    const token =
        String.fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
    const oe = self.onerror;
    self.onerror = function(msg, ...args) {
        if ( typeof msg === 'string' && msg.includes(token) ) { return true; }
        if ( oe instanceof Function ) {
            return oe.call(this, msg, ...args);
        }
    }.bind();
    return token;
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
    try { abortOnPropertyWrite(...argsList[i]); }
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
    return uBOL_abortOnPropertyWrite();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_abortOnPropertyWrite = cloneInto([
            [ '(', uBOL_abortOnPropertyWrite.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_abortOnPropertyWrite);
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
    delete page.uBOL_abortOnPropertyWrite;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
