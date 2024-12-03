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

/* eslint-disable indent */

// ruleset: annoyances-overlays

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_abortOnPropertyWrite = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["document.oncontextmenu"],["nocontext"],["clickIE4"],["disableSelection"],["addLink"],["_sp_"],["document.onselectstart"],["adBlockDetected"],["document.ondragstart"],["disableEnterKey"],["adMessage"],["adBlockEnabled"],["$adframe"],["hidekeep"],["ABDSettings"],["clickIE"],["disable_copy"],["disable_hot_keys"],["loadOutbrain"],["killCopy"],["intializemarquee"],["document.oncopy"],["document.onkeydown"],["addLinkToCopy"],["stopPrntScr"],["disable_keystrokes"],["stopSelect"],["reEnable"],["ABD"],["ondragstart"],["initimg"],["gdpr_popin_path"],["generatePopup"],["FuckAdBlock"],["disableselect"],["onload"],["disable_ext_code"],["ai_front"],["journeyCompilerGateway"],["document.onkeypress"],["admrlWpJsonP"],["document.onmousedown"],["document.body.oncopy"],["check"],["mensagem"],["ABB_config"]];

const hostnamesMap = new Map([["m4ufree.com",0],["mimaletamusical.blogspot.com",0],["cristoiublog.ro",[0,6]],["cittadinanza.biz",0],["glistranieri.it",0],["sabishiidesu.com",0],["xiaomi4mi.com",0],["cmg24.pl",0],["jobsbotswana.info",0],["djelfa.info",0],["gordiando.com.br",0],["wader.toys",0],["tecnotutoshd.net",0],["l2gamers.cl",[0,22]],["luoghidavedere.it",0],["eoreuni.com",0],["tistory.com",0],["gamegame.kr",0],["jootc.com",0],["wikibious.com",0],["mbs.jp",0],["texte.work",0],["englishlands.net",0],["fruit01.xyz",0],["clipartmax.com",0],["planetagibi.com.br",[0,6]],["planetagibiblog.com.br",[0,6]],["alltechnerd.com",0],["generationamiga.com",0],["world4.eu",[0,36]],["ggulpass.com",0],["chessimprover.com",[0,6]],["baixedetudo.net.br",0],["epitesti.ro",[0,2]],["csid.ro",0],["onna.kr",[0,6,8]],["savoriurbane.com",0],["ilife97.com",[0,8]],["romprovider.com",0],["habuteru.com",0],["hdrez.com",0],["esaral.com",0],["classnotes.org.in",0],["volokit2.com",[0,8]],["gay69.stream",1],["timponline.ro",[1,3,16]],["republicadecuritiba.net",1],["dialectsarchive.com",1],["resourcepack.net",[2,3]],["kurazone.net",[2,3]],["peliculas24.me",3],["techtrickseo.com",[3,16]],["randomstory.org",3],["booksmedicos.org",3],["kirannewsagency.com",3],["starsunfolded.com",3],["satcesc.com",[3,22]],["amlesson.ru",[3,25]],["manianomikata.com",3],["karsaz-law.com",[3,9]],["uol.com.br",4],["elheraldo.hn",4],["tekstowo.pl",4],["warringtonguardian.co.uk",5],["legionprogramas.org",6],["selfstudyhistory.com",[6,9]],["youmath.it",[6,41]],["7fyd.com",6],["arti-definisi-pengertian.info",[6,8]],["mkv-pastes.com",6],["esercizinglese.com",7],["pelisfull.tv",7],["halotracker.com",7],["102bank.com",7],["80beyond.spacestation-online.com",7],["b4usa.com",7],["badgerandblade.com",7],["mzk.starachowice.eu",7],["tinyppt.com",[8,9]],["droidtekno.com",[8,9]],["businessemailetiquette.com",[8,9]],["newsbook.pl",[8,9]],["relet365.com",8],["empregoestagios.com",8],["elektrikmen.com",8],["hitproversion.com",8],["lazytranslations.com",[8,9]],["jobskaro.com",8],["appd.at",8],["apk1s.com",8],["audiobookcup.com",8],["atlas-geografic.net",[8,9]],["sdewery.me",[8,9]],["projektowanie-wnetrz-online.pl",8],["cabinetexpert.ro",[8,9]],["hindi-gk.com",[9,16,17]],["qualityfilehosting.com",9],["openfinanza.it",9],["naaree.com",9],["gourmetscans.net",9],["bingotingo.com",9],["7misr4day.com",9],["guidingliterature.com",9],["kollyinsider.com",10],["ewrc-results.com",11],["raven-mythic.com",12],["alisbach.com",13],["linuxslaves.com",13],["nakblogz.top",13],["juancarlosmolinos.net",14],["xhardhempus.com",15],["calorielijst.nl",15],["truyenbanquyen.com",[16,17]],["zdravenportal.eu",17],["clujust.ro",17],["polygon.com",18],["apornstories.com",19],["cmjornal.pt",21],["aicesu.cn",21],["racevpn.com",22],["media.framu.world",22],["gaz.com.br",22],["pancreas.ro",22],["bloombergquint.com",23],["kpopjjang.com",24],["bigulnews.tv",24],["skidrowcodex.net",24],["darktranslation.com",24],["hulnews.top",24],["boke112.com",24],["janvissersweer.nl",24],["adpres.ro",24],["the-masters-voice.com",24],["postcourier.com.pg",[24,29]],["jpopsingles.eu",24],["privivkainfo.ru",25],["targetstudy.com",26],["mtbtutoriales.com",27],["nakedcapitalism.com",28],["hedgeaccordingly.com",28],["nfltraderumors.co",29],["ryuryuko.blog90.fc2.com",30],["airfrance.co.jp",31],["fxstreet.com",32],["jeu2048.fr",33],["tutoganga.blogspot.com",34],["hentaialtadefinizione.it",35],["solotrend.net",37],["wired.com",38],["citroen.pl",39],["peugeot.pl",39],["theblaze.com",40],["nbcsports.com",40],["nbcsportsedge.com",40],["ciweimao.com",42],["360doc.com",42],["encurtandourl.com",44],["mineskin.org",45]]);

const entitiesMap = new Map([["pelispedia",0],["tabonitobrasil",0],["daotranslate",[0,6]],["putlocker",0],["anisubindo",3],["hukmatpro",13],["theartofnakedwoman",20],["oploverz",43]]);

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
    const token = getRandomToken();
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
    } catch(_) {
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            safe.log(`uBO ${text}`);
        };
    }
    return safe;
}

function getRandomToken() {
    const safe = safeSelf();
    return safe.String_fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
}

/******************************************************************************/

const hnParts = [];
try {
    let origin = document.location.origin;
    if ( origin === 'null' ) {
        const origins = document.location.ancestorOrigins;
        for ( let i = 0; i < origins.length; i++ ) {
            origin = origins[i];
            if ( origin !== 'null' ) { break; }
        }
    }
    const pos = origin.lastIndexOf('://');
    if ( pos === -1 ) { return; }
    hnParts.push(...origin.slice(pos+3).split('.'));
}
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

uBOL_abortOnPropertyWrite();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
