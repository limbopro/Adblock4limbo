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

const argsList = [["document.oncontextmenu"],["nocontext"],["hasAdblock"],["clickIE4"],["disableSelection"],["CheckAdLoad"],["addLink"],["_sp_"],["document.onselectstart"],["adBlockDetected"],["document.ondragstart"],["disableEnterKey"],["adMessage"],["adBlockEnabled"],["$adframe"],["hidekeep"],["ABDSettings"],["clickIE"],["disable_copy"],["disable_hot_keys"],["loadOutbrain"],["killCopy"],["intializemarquee"],["document.oncopy"],["document.onkeydown"],["addLinkToCopy"],["stopPrntScr"],["disable_keystrokes"],["stopSelect"],["reEnable"],["ABD"],["ondragstart"],["initimg"],["gdpr_popin_path"],["generatePopup"],["FuckAdBlock"],["disableselect"],["onload"],["disable_ext_code"],["ai_front"],["journeyCompilerGateway"],["document.onkeypress"],["admrlWpJsonP"],["document.onmousedown"],["document.body.oncopy"],["check"],["mensagem"],["ABB_config"]];

const hostnamesMap = new Map([["m4ufree.com",0],["cristoiublog.ro",[0,8]],["cittadinanza.biz",0],["glistranieri.it",0],["sabishiidesu.com",0],["xiaomi4mi.com",0],["cmg24.pl",0],["jobsbotswana.info",0],["djelfa.info",0],["gordiando.com.br",0],["wader.toys",0],["tecnotutoshd.net",0],["l2gamers.cl",[0,24]],["luoghidavedere.it",0],["eoreuni.com",0],["tistory.com",0],["gamegame.kr",0],["jootc.com",0],["wikibious.com",0],["mbs.jp",0],["texte.work",0],["koreanaddict.net",0],["englishlands.net",0],["fruit01.xyz",0],["clipartmax.com",0],["planetagibi.com.br",[0,8]],["planetagibiblog.com.br",[0,8]],["alltechnerd.com",0],["generationamiga.com",0],["world4.eu",[0,38]],["ggulpass.com",0],["chessimprover.com",[0,8]],["baixedetudo.net.br",0],["epitesti.ro",[0,3]],["csid.ro",0],["onna.kr",[0,8,10]],["savoriurbane.com",0],["ilife97.com",[0,10]],["romprovider.com",0],["habuteru.com",0],["hdrez.com",0],["esaral.com",0],["classnotes.org.in",0],["volokit2.com",[0,10]],["gay69.stream",1],["timponline.ro",[1,4,18]],["republicadecuritiba.net",1],["dialectsarchive.com",1],["agar.io",2],["resourcepack.net",[3,4]],["kurazone.net",[3,4]],["peliculas24.me",4],["techtrickseo.com",[4,18]],["randomstory.org",4],["booksmedicos.org",4],["kirannewsagency.com",4],["starsunfolded.com",4],["satcesc.com",[4,24]],["amlesson.ru",[4,27]],["manianomikata.com",4],["karsaz-law.com",[4,11]],["iosgods.com",5],["uol.com.br",6],["elheraldo.hn",6],["tekstowo.pl",6],["warringtonguardian.co.uk",7],["legionprogramas.org",8],["selfstudyhistory.com",[8,11]],["youmath.it",[8,43]],["7fyd.com",8],["arti-definisi-pengertian.info",[8,10]],["mkv-pastes.com",8],["esercizinglese.com",9],["pelisfull.tv",9],["halotracker.com",9],["102bank.com",9],["80beyond.spacestation-online.com",9],["b4usa.com",9],["badgerandblade.com",9],["mzk.starachowice.eu",9],["tinyppt.com",[10,11]],["droidtekno.com",[10,11]],["businessemailetiquette.com",[10,11]],["newsbook.pl",[10,11]],["relet365.com",10],["empregoestagios.com",10],["elektrikmen.com",10],["hitproversion.com",10],["lazytranslations.com",[10,11]],["jobskaro.com",10],["appd.at",10],["apk1s.com",10],["audiobookcup.com",10],["atlas-geografic.net",[10,11]],["sdewery.me",[10,11]],["projektowanie-wnetrz-online.pl",10],["cabinetexpert.ro",[10,11]],["hindi-gk.com",[11,18,19]],["qualityfilehosting.com",11],["openfinanza.it",11],["naaree.com",11],["gourmetscans.net",11],["bingotingo.com",11],["7misr4day.com",11],["guidingliterature.com",11],["kollyinsider.com",12],["ewrc-results.com",13],["raven-mythic.com",14],["alisbach.com",15],["linuxslaves.com",15],["nakblogz.top",15],["juancarlosmolinos.net",16],["xhardhempus.com",17],["calorielijst.nl",17],["truyenbanquyen.com",[18,19]],["tunovelaligera.com",19],["zdravenportal.eu",19],["clujust.ro",19],["polygon.com",20],["apornstories.com",21],["cmjornal.pt",23],["aicesu.cn",23],["racevpn.com",24],["media.framu.world",24],["gaz.com.br",24],["pancreas.ro",24],["bloombergquint.com",25],["kpopjjang.com",26],["bigulnews.tv",26],["skidrowcodex.net",26],["darktranslation.com",26],["hulnews.top",26],["boke112.com",26],["janvissersweer.nl",26],["adpres.ro",26],["the-masters-voice.com",26],["postcourier.com.pg",[26,31]],["jpopsingles.eu",26],["privivkainfo.ru",27],["targetstudy.com",28],["mtbtutoriales.com",29],["nakedcapitalism.com",30],["hedgeaccordingly.com",30],["nfltraderumors.co",31],["ryuryuko.blog90.fc2.com",32],["airfrance.co.jp",33],["fxstreet.com",34],["jeu2048.fr",35],["tutoganga.blogspot.com",36],["hentaialtadefinizione.it",37],["solotrend.net",39],["wired.com",40],["citroen.pl",41],["peugeot.pl",41],["theblaze.com",42],["nbcsports.com",42],["nbcsportsedge.com",42],["ciweimao.com",44],["360doc.com",44],["encurtandourl.com",46],["mineskin.org",47]]);

const entitiesMap = new Map([["pelispedia",0],["mimaletamusical",0],["tabonitobrasil",0],["daotranslate",[0,8]],["putlocker",0],["anisubindo",4],["hukmatpro",15],["theartofnakedwoman",22],["oploverz",45]]);

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
