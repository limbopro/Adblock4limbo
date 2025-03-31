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

// ruleset: annoyances-overlays

// Important!
// Isolate from global scope

// Start of local scope
(function uBOL_abortOnPropertyWrite() {

/******************************************************************************/

function abortOnPropertyWrite(
    prop = ''
) {
    if ( typeof prop !== 'string' ) { return; }
    if ( prop === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('abort-on-property-write', prop);
    const exceptionToken = getExceptionTokenFn();
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

function getExceptionTokenFn() {
    const token = getRandomTokenFn();
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

function getRandomTokenFn() {
    const safe = safeSelf();
    return safe.String_fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
}

/******************************************************************************/

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [["document.oncontextmenu"],["nocontext"],["clickIE4"],["disableSelection"],["_sp_"],["adBlockDetected"],["adMessage"],["adBlockEnabled"],["$adframe"],["hidekeep"],["ABDSettings"],["clickIE"],["loadOutbrain"],["ABD"],["FuckAdBlock"],["onload"],["ai_front"],["admrlWpJsonP"],["ABB_config"],["addLink"],["document.onselectstart"],["document.ondragstart"],["disableEnterKey"],["disable_copy"],["disable_hot_keys"],["killCopy"],["intializemarquee"],["document.oncopy"],["document.onkeydown"],["addLinkToCopy"],["stopPrntScr"],["disable_keystrokes"],["stopSelect"],["reEnable"],["ondragstart"],["initimg"],["gdpr_popin_path"],["generatePopup"],["disableselect"],["disable_ext_code"],["journeyCompilerGateway"],["document.onkeypress"],["document.onmousedown"],["document.body.oncopy"],["check"],["mensagem"]];
const hostnamesMap = new Map([["pelispedia.*",0],["m4ufree.com",0],["xiaomi4mi.com",0],["mimaletamusical.blogspot.com",0],["cristoiublog.ro",[0,20]],["cittadinanza.biz",0],["glistranieri.it",0],["sabishiidesu.com",0],["cmg24.pl",0],["jobsbotswana.info",0],["djelfa.info",0],["gordiando.com.br",0],["wader.toys",0],["tecnotutoshd.net",0],["l2gamers.cl",[0,28]],["tabonitobrasil.*",0],["luoghidavedere.it",0],["eoreuni.com",0],["tistory.com",0],["gamegame.kr",0],["jootc.com",0],["wikibious.com",0],["mbs.jp",0],["texte.work",0],["englishlands.net",0],["fruit01.xyz",0],["clipartmax.com",0],["planetagibi.com.br",[0,20]],["planetagibiblog.com.br",[0,20]],["alltechnerd.com",0],["generationamiga.com",0],["world4.eu",[0,39]],["ggulpass.com",0],["chessimprover.com",[0,20]],["baixedetudo.net.br",0],["epitesti.ro",[0,2]],["csid.ro",0],["onna.kr",[0,20,21]],["savoriurbane.com",0],["ilife97.com",[0,21]],["romprovider.com",0],["habuteru.com",0],["daotranslate.*",[0,20]],["hdrez.com",0],["esaral.com",0],["classnotes.org.in",0],["putlocker.*",0],["volokit2.com",[0,21]],["bcs16.ro",0],["gay69.stream",1],["timponline.ro",[1,3,23]],["republicadecuritiba.net",1],["dialectsarchive.com",1],["resourcepack.net",[2,3]],["kurazone.net",[2,3]],["peliculas24.me",3],["techtrickseo.com",[3,23]],["randomstory.org",3],["booksmedicos.org",3],["kirannewsagency.com",3],["starsunfolded.com",3],["satcesc.com",[3,28]],["amlesson.ru",[3,31]],["anisubindo.*",3],["manianomikata.com",3],["karsaz-law.com",[3,22]],["warringtonguardian.co.uk",4],["esercizinglese.com",5],["pelisfull.tv",5],["halotracker.com",5],["102bank.com",5],["80beyond.spacestation-online.com",5],["b4usa.com",5],["badgerandblade.com",5],["mzk.starachowice.eu",5],["kollyinsider.com",6],["ewrc-results.com",7],["raven-mythic.com",8],["hukmatpro.*",9],["alisbach.com",9],["linuxslaves.com",9],["nakblogz.top",9],["juancarlosmolinos.net",10],["xhardhempus.com",11],["calorielijst.nl",11],["polygon.com",12],["nakedcapitalism.com",13],["hedgeaccordingly.com",13],["jeu2048.fr",14],["hentaialtadefinizione.it",15],["solotrend.net",16],["theblaze.com",17],["nbcsports.com",17],["nbcsportsedge.com",17],["mineskin.org",18],["uol.com.br",19],["elheraldo.hn",19],["tekstowo.pl",19],["legionprogramas.org",20],["selfstudyhistory.com",[20,22]],["youmath.it",[20,42]],["7fyd.com",20],["arti-definisi-pengertian.info",[20,21]],["mkv-pastes.com",20],["tinyppt.com",[21,22]],["droidtekno.com",[21,22]],["businessemailetiquette.com",[21,22]],["newsbook.pl",[21,22]],["relet365.com",21],["empregoestagios.com",21],["elektrikmen.com",21],["hitproversion.com",21],["lazytranslations.com",[21,22]],["jobskaro.com",21],["appd.at",21],["apk1s.com",21],["audiobookcup.com",21],["atlas-geografic.net",[21,22]],["sdewery.me",[21,22]],["projektowanie-wnetrz-online.pl",21],["cabinetexpert.ro",[21,22]],["hindi-gk.com",[22,23,24]],["qualityfilehosting.com",22],["openfinanza.it",22],["naaree.com",22],["gourmetscans.net",22],["bingotingo.com",22],["7misr4day.com",22],["guidingliterature.com",22],["truyenbanquyen.com",[23,24]],["zdravenportal.eu",24],["clujust.ro",24],["apornstories.com",25],["theartofnakedwoman.*",26],["cmjornal.pt",27],["aicesu.cn",27],["racevpn.com",28],["media.framu.world",28],["gaz.com.br",28],["pancreas.ro",28],["bloombergquint.com",29],["kpopjjang.com",30],["bigulnews.tv",30],["skidrowcodex.net",30],["darktranslation.com",30],["hulnews.top",30],["boke112.com",30],["janvissersweer.nl",30],["adpres.ro",30],["the-masters-voice.com",30],["postcourier.com.pg",[30,34]],["jpopsingles.eu",30],["privivkainfo.ru",31],["targetstudy.com",32],["mtbtutoriales.com",33],["nfltraderumors.co",34],["ryuryuko.blog90.fc2.com",35],["airfrance.co.jp",36],["fxstreet.com",37],["tutoganga.blogspot.com",38],["wired.com",40],["citroen.pl",41],["peugeot.pl",41],["ciweimao.com",43],["360doc.com",43],["oploverz.*",44],["encurtandourl.com",45]]);
const exceptionsMap = new Map([]);
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
    try { abortOnPropertyWrite(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
