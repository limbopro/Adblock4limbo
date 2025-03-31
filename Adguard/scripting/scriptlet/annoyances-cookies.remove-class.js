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

// ruleset: annoyances-cookies

// Important!
// Isolate from global scope

// Start of local scope
(function uBOL_removeClass() {

/******************************************************************************/

function removeClass(
    rawToken = '',
    rawSelector = '',
    behavior = ''
) {
    if ( typeof rawToken !== 'string' ) { return; }
    if ( rawToken === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('remove-class', rawToken, rawSelector, behavior);
    const tokens = safe.String_split.call(rawToken, /\s*\|\s*/);
    const selector = tokens
        .map(a => `${rawSelector}.${CSS.escape(a)}`)
        .join(',');
    if ( safe.logLevel > 1 ) {
        safe.uboLog(logPrefix, `Target selector:\n\t${selector}`);
    }
    const mustStay = /\bstay\b/.test(behavior);
    let timer;
    const rmclass = ( ) => {
        timer = undefined;
        try {
            const nodes = document.querySelectorAll(selector);
            for ( const node of nodes ) {
                node.classList.remove(...tokens);
                safe.uboLog(logPrefix, 'Removed class(es)');
            }
        } catch {
        }
        if ( mustStay ) { return; }
        if ( document.readyState !== 'complete' ) { return; }
        observer.disconnect();
    };
    const mutationHandler = mutations => {
        if ( timer !== undefined ) { return; }
        let skip = true;
        for ( let i = 0; i < mutations.length && skip; i++ ) {
            const { type, addedNodes, removedNodes } = mutations[i];
            if ( type === 'attributes' ) { skip = false; }
            for ( let j = 0; j < addedNodes.length && skip; j++ ) {
                if ( addedNodes[j].nodeType === 1 ) { skip = false; break; }
            }
            for ( let j = 0; j < removedNodes.length && skip; j++ ) {
                if ( removedNodes[j].nodeType === 1 ) { skip = false; break; }
            }
        }
        if ( skip ) { return; }
        timer = safe.onIdle(rmclass, { timeout: 67 });
    };
    const observer = new MutationObserver(mutationHandler);
    const start = ( ) => {
        rmclass();
        observer.observe(document, {
            attributes: true,
            attributeFilter: [ 'class' ],
            childList: true,
            subtree: true,
        });
    };
    runAt(( ) => {
        start();
    }, /\bcomplete\b/.test(behavior) ? 'idle' : 'loading');
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1, 'asap': 1,
            'interactive': 2, 'end': 2, '2': 2,
            'complete': 3, 'idle': 3, '3': 3,
        };
        const tokens = Array.isArray(state) ? state : [ state ];
        for ( const token of tokens ) {
            const prop = `${token}`;
            if ( Object.hasOwn(targets, prop) === false ) { continue; }
            return targets[prop];
        }
        return 0;
    };
    const runAt = intFromReadyState(when);
    if ( intFromReadyState(document.readyState) >= runAt ) {
        fn(); return;
    }
    const onStateChange = ( ) => {
        if ( intFromReadyState(document.readyState) < runAt ) { return; }
        fn();
        safe.removeEventListener.apply(document, args);
    };
    const safe = safeSelf();
    const args = [ 'readystatechange', onStateChange, { capture: true } ];
    safe.addEventListener.apply(document, args);
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
const argsList = [["cookieconsent-active","body","stay"],["gdpr-cookie-notice-center-loaded","","stay"],["disable","div","stay"],["dp--cookie-consent","body","stay"],["no-scroll","body","stay"],["is-active-cookiebar","","stay"],["unreadable-display","","stay"],["with-featherlight","","stay"],["wcc-popup-overflow","body","stay"],["show--consent","body","stay"],["hasCookieBanner","body","stay"]];
const hostnamesMap = new Map([["jongcdenv.be",0],["donneurdecellulessouches.be",0],["stammzellenspender.be",0],["stemcelldonor.be",0],["koenvandenheuvel.be",0],["stamceldonor.be",0],["nahima.be",0],["graziellawicki.com",1],["funnelcockpit.com",1],["ampire.de",2],["verpackungsstadl.ch",2],["imkershoperzgebirge.de",2],["modellbahndealer.de",2],["tillit-bikes.shop",2],["bike-onlineshop.de",2],["futspo.de",2],["compravo.de",2],["perpedale.de",2],["modellbau-jung.de",2],["verpackungsstadl.at",2],["modellbau-vordermaier.de",2],["bike-supply.de",2],["dmsg.de",3],["bgk.pl",3],["pflegezeit-berlin.de",3],["gpd-nordost-onlineberatung.de",3],["proabschluss-beratung.de",3],["hilfe-telefon-missbrauch.online",3],["dww-suchtberatung.de",3],["cyberforum.de",3],["gutscheine.eurothermen.at",3],["wolff-mueller.de",3],["ras.bz.it",3],["technoalpin.com",3],["5asec.pt",4],["tui.dk",4],["tui.fi",4],["tui.no",4],["tui.se",4],["werkenbijtrekpleister.nl",5],["werkenbijkruidvat.be",5],["rassenlijst.info",5],["werkenbijiciparisxl.nl",5],["campingdusoleil.com",6],["hotel-la-chaumiere.com",6],["les-anges-gardiens.fr",6],["croco-kid.com",6],["cambridge-centre.fr",6],["equisud.com",6],["allokebab-pau.fr",6],["etre-visible.local.fr",6],["mas-montebello66.com",6],["camping-residentiel-les-marronniers-jura.fr",6],["dj4events.fr",6],["saintjoursexpertmaritime.com",6],["az-renovation.fr",6],["presquilemultiservices.com",6],["hotel-aigoual.com",6],["hotel-restaurant-pau.com",6],["desrayaud-paysagistes.com",6],["hotelsaintcharles.fr",6],["agvillagecamarguais.com",6],["joyella.com",6],["gabriel-godard.com",6],["artech-sellerie.com",6],["motoclubernee.com",6],["ledauphinhotel.com",6],["cuisin-studio.com",6],["biomeo-environnement.com",6],["leman-instruments.com",6],["esthetique-meyerbeer.com",6],["institut-bio-naturel-nice.fr",6],["nature-et-bois.fr",6],["transmissions-bordeaux.com",6],["kinechartreuse.com",6],["corsegourmande.com",6],["cotedecor.com",6],["restaurant-la-badiane.fr",6],["systelia.fr",6],["lesjardinsinterieurs.com",6],["helenevue.com",6],["saubusse-thermes.com",6],["scholpp.de",7],["scholpp.es",7],["scholpp.pl",7],["scholpp.it",7],["scholpp.com",7],["wetu.com",7],["alpen.co.uk",8],["alsina.com",8],["assosia.com",8],["bassicostruzioni.it",8],["bettenconcept.com",8],["blackpoolairport.com",8],["cateringvandenberg.nl",8],["ceratrends.com",8],["chestnut-tree-house.org.uk",8],["cirrusassessment.com",8],["clinicalondon.co.uk",8],["cmos.ie",8],["deniswilliams.ie",8],["efmdglobal.org",8],["emri.nl",8],["endlesspools.fr",8],["foleys.ie",8],["fryerndental.co.uk",8],["globalfocusmagazine.com",8],["guildhalldental.com",8],["hampshireimplantcentre.co.uk",8],["heikkala.com",8],["hermesit.net",8],["hotspring.be",8],["xn--inkomstfrskring-9kb71a.se",8],["innohome.com",8],["jakobwirt.at",8],["klinger.fi",8],["londonwomenscentre.co.uk",8],["memoreclame.nl",8],["mitarbeiter-app.de",8],["mobiltbredband.se",8],["newsbook.com.mt",8],["northeastspace.ie",8],["portea.fr",8],["precisiondentalstudio.co.uk",8],["ramotavla.se",8],["simkort.se",8],["stbarnabas-hospice.org.uk",8],["tundra.fi",8],["upitrek.com",8],["weetabix-arabia.com",8],["weetabix.co.uk",8],["weetabix.com",8],["weetabix.es",8],["weetabix.fr",8],["weetabix.it",8],["weetabix.nl",8],["weetabix.no",8],["weetabix.pt",8],["weetabixea.com",8],["weetabixfoodcompany.co.uk",8],["weetabixonthego.co.uk",8],["tvprato.it",9],["liftshare.com",9],["vesely-drak.cz",9],["consordini.com",9],["fitzmuseum.cam.ac.uk",9],["hotdk2023.kre.hu",9],["panwybierak.pl",9],["bomagasinet.dk",9],["miplantaweb.com",9],["electronics.semaf.at",9],["sfd.pl",9],["flota.es",9],["jobs.cz",9],["prace.cz",9],["eninternetgratis.com",9],["unavidadeviaje.com",9],["faq.whatsapp.com",10],["blog.whatsapp.com",10],["www.whatsapp.com",10]]);
const exceptionsMap = new Map([]);
const hasEntities = false;
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
    try { removeClass(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
