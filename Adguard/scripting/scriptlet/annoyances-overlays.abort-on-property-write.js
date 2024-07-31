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

const argsList = [["document.oncontextmenu"],["hasAdblock"],["adBlockDetected"],["nocontext"],["clickIE4"],["disableSelection"],["CheckAdLoad"],["addLink"],["_sp_"],["document.onselectstart"],["document.ondragstart"],["disableEnterKey"],["adMessage"],["adBlockEnabled"],["$adframe"],["XF"],["hidekeep"],["ABDSettings"],["clickIE"],["disable_copy"],["disable_hot_keys"],["loadOutbrain"],["killCopy"],["intializemarquee"],["document.oncopy"],["document.onkeydown"],["addLinkToCopy"],["stopPrntScr"],["disable_keystrokes"],["stopSelect"],["reEnable"],["ABD"],["ondragstart"],["ai_adb_overlay"],["ai_adb"],["initimg"],["gdpr_popin_path"],["generatePopup"],["FuckAdBlock"],["ai_front"],["disableselect"],["onload"],["disable_ext_code"],["journeyCompilerGateway"],["document.onkeypress"],["admrlWpJsonP"],["document.onmousedown"],["document.body.oncopy"],["check"],["mensagem"],["ABB_config"]];

const hostnamesMap = new Map([["m4ufree.com",0],["cristoiublog.ro",[0,9]],["cittadinanza.biz",0],["glistranieri.it",0],["sabishiidesu.com",0],["xiaomi4mi.com",0],["cmg24.pl",0],["jobsbotswana.info",0],["djelfa.info",0],["gordiando.com.br",0],["wader.toys",0],["tecnotutoshd.net",0],["l2gamers.cl",[0,25]],["luoghidavedere.it",0],["voxc.org",0],["ac-mo.com",0],["eoreuni.com",0],["tistory.com",0],["gamegame.kr",0],["jootc.com",0],["wikibious.com",0],["mbs.jp",0],["texte.work",0],["koreanaddict.net",0],["englishlands.net",0],["fruit01.xyz",0],["clipartmax.com",0],["planetagibi.com.br",[0,9]],["planetagibiblog.com.br",[0,9]],["alltechnerd.com",0],["generationamiga.com",0],["watchmdh.to",0],["world4.eu",[0,42]],["ggulpass.com",0],["chessimprover.com",[0,9]],["baixedetudo.net.br",0],["epitesti.ro",[0,4]],["csid.ro",0],["onna.kr",[0,9,10]],["savoriurbane.com",0],["ilife97.com",[0,10]],["romprovider.com",0],["habuteru.com",0],["hdrez.com",0],["esaral.com",0],["classnotes.org.in",0],["agar.io",1],["surviv.io",2],["esercizinglese.com",2],["pelisfull.tv",2],["halotracker.com",2],["102bank.com",2],["80beyond.spacestation-online.com",2],["b4usa.com",2],["badgerandblade.com",2],["mzk.starachowice.eu",2],["gay69.stream",3],["timponline.ro",[3,5,19]],["republicadecuritiba.net",3],["dialectsarchive.com",3],["resourcepack.net",[4,5]],["kurazone.net",[4,5]],["peliculas24.me",5],["techtrickseo.com",[5,19]],["randomstory.org",5],["booksmedicos.org",5],["kirannewsagency.com",5],["starsunfolded.com",5],["satcesc.com",[5,25]],["amlesson.ru",[5,28]],["hebrew4christians.com",5],["manianomikata.com",5],["karsaz-law.com",[5,11]],["iosgods.com",6],["uol.com.br",7],["elheraldo.hn",7],["tekstowo.pl",7],["warringtonguardian.co.uk",8],["legionprogramas.org",9],["selfstudyhistory.com",[9,11]],["youmath.it",[9,46]],["7fyd.com",9],["arti-definisi-pengertian.info",[9,10]],["mkv-pastes.com",9],["tinyppt.com",[10,11]],["droidtekno.com",[10,11]],["businessemailetiquette.com",[10,11]],["newsbook.pl",[10,11]],["relet365.com",10],["empregoestagios.com",10],["elektrikmen.com",10],["hitproversion.com",10],["lazytranslations.com",[10,11]],["jobskaro.com",10],["appd.at",10],["apk1s.com",10],["audiobookcup.com",10],["atlas-geografic.net",[10,11]],["sdewery.me",[10,11]],["projektowanie-wnetrz-online.pl",10],["cabinetexpert.ro",[10,11]],["hindi-gk.com",[11,19,20]],["qualityfilehosting.com",11],["openfinanza.it",11],["naaree.com",11],["gourmetscans.net",11],["bingotingo.com",11],["7misr4day.com",11],["guidingliterature.com",11],["kollyinsider.com",12],["ewrc-results.com",13],["raven-mythic.com",14],["cafesaxophone.com",15],["alisbach.com",16],["linuxslaves.com",16],["nakblogz.top",16],["juancarlosmolinos.net",17],["xhardhempus.com",18],["calorielijst.nl",18],["truyenbanquyen.com",[19,20]],["tunovelaligera.com",20],["zdravenportal.eu",20],["clujust.ro",20],["polygon.com",21],["apornstories.com",22],["cmjornal.pt",24],["aicesu.cn",24],["racevpn.com",25],["media.framu.world",25],["gaz.com.br",25],["pancreas.ro",25],["bloombergquint.com",26],["kpopjjang.com",27],["bigulnews.tv",27],["skidrowcodex.net",27],["darktranslation.com",27],["hulnews.top",27],["boke112.com",27],["janvissersweer.nl",27],["adpres.ro",27],["the-masters-voice.com",27],["postcourier.com.pg",[27,32]],["jpopsingles.eu",27],["privivkainfo.ru",28],["targetstudy.com",29],["mtbtutoriales.com",30],["nakedcapitalism.com",31],["hedgeaccordingly.com",31],["nfltraderumors.co",32],["fanprojseries.com",33],["sfweekly.com",33],["magyarhang.org",34],["ryuryuko.blog90.fc2.com",35],["airfrance.co.jp",36],["fxstreet.com",37],["jeu2048.fr",38],["androidpolice.com",39],["solotrend.net",39],["tutoganga.blogspot.com",40],["hentaialtadefinizione.it",41],["wired.com",43],["citroen.pl",44],["peugeot.pl",44],["theblaze.com",45],["nbcsports.com",45],["nbcsportsedge.com",45],["ciweimao.com",47],["360doc.com",47],["encurtandourl.com",49],["mineskin.org",50]]);

const entitiesMap = new Map([["pelispedia",0],["mimaletamusical",0],["tabonitobrasil",0],["daotranslate",[0,9]],["putlocker",0],["anisubindo",5],["hukmatpro",16],["theartofnakedwoman",23],["oploverz",48]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function abortOnPropertyWrite(
    prop = ''
) {
    if ( typeof prop !== 'string' ) { return; }
    if ( prop === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('abort-on-property-write', prop);
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
        safe.String_fromCharCode(Date.now() % 26 + 97) +
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
        'Object_defineProperties': Object.defineProperties.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String_fromCharCode': String.fromCharCode,
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
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
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
