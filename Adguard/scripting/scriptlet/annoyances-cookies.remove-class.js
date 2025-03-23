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
            if ( targets.hasOwnProperty(prop) === false ) { continue; }
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
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
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
const argsList = [["cookie-consent-active","body","stay"],["cookie-overlay-active","body","stay"],["cookiebanner-body","body","stay"],["cookie-open","body","stay"],["noscroll","body","stay"],["tc-modal-open","body","stay"],["cookie-notice-active","body","stay"],["cookie-overlay","body","stay"],["eu-cookie-compliance-popup-open","body","stay"],["bf-fixed","body","stay"],["cookies-not-set","body","stay"],["js-cookie-consent-popup","","stay"],["ivass-no-cookie","body","stay"],["cookie-popup-visible","body","stay"],["idgcp__layer--active","html","stay"],["cc-scrolling-disabled","body","stay"],["modal-open","body","stay"],["hasPopup","body","stay"],["darker","body","stay"],["scommerce-gdpr-disabled","div","stay"],["no-scroll","html","stay"],["compensate-for-scrollbar","body","stay"],["gdpr-shown","body","stay"],["cookie-consent__wrapper","div","stay"],["cookies-request","body","stay"],["cx-modal-open","html","stay"],["cx-no-scroll","html","stay"],["e-cookie-bar-open","body","stay"],["no-consent","html","stay"],["is-blurred-cookiebox","html","stay"],["ccpaCookieBanner-acceptedAll","body","stay"],["cookies-show",".cookies-show","stay"],["disable-background","body","stay"],["cookie--not-set","body","stay"],["_cookiebanner","body","stay"],["async-hide","html","stay"],["ntd-gdpr-no-scroll","body","stay"],["modal-background","div","stay"],["pef-no-cookie","body","stay"],["cookie-not-accepted","body","stay"],["c-body--locked-always","body","stay"],["global-cookie","div","stay"],["disable-scroll","","stay"],["bg-gray","div","stay"],["cookie-active","body","stay"],["ccm-blocked","html","stay"],["ccm-blocked","body","stay"],["is-modal-cookies-visible","body","stay"],["layerActive","","stay"],["cookiebar-open","body","stay"],["blur","body","stay"],["cookie","","stay"],["cookieconsent-active","body","stay"],["cookieMsg","","stay"],["cookie_consent__alert","","stay"],["gdpr-cookie-notice-center-loaded","","stay"],["has-open-cookie","","stay"],["om_cookie_active","","stay"],["tvp-cookie-scroll-lock","","stay"],["cookie-overlay","","stay"],["disable","div","stay"],["prevent-scroll","","stay"],["fog","","stay"],["cookie-hint","","stay"],["dp--cookie-consent","body","stay"],["no-scroll","body","stay"],["show-cookie-consent","","stay"],["is-active-cookiebar","","stay"],["has-banner","body.has-banner","stay"],["cookie-accept-required","","stay"],["cookie-open","","stay"],["cookiePopupVisible","","stay"],["unreadable-display","","stay"],["mandatory_cookie_modal","","stay"],["wwzoverlay--open","","stay"],["gdpr-infobar-visible","","stay"],["cookie-enabled","","stay"],["cookie-overlay--open","","stay"],["cookie-banner-open","","stay"],["cookie-banner-active","body","stay"],["overlay-content","body","stay"],["is-active-cookiebar","body","stay"],["didomi-popup-open","body"],["idxrcookies-block-user-nav","body","stay"],["ccpa-banner","","stay"],["with-featherlight","","stay"],["wcc-popup-overflow","body","stay"],["show--consent","body","stay"],["hasCookieBanner","body","stay"]];
const hostnamesMap = new Map([["winparts.be",0],["winparts.eu",0],["winparts.fr",0],["winparts.ie",0],["winparts.nl",0],["winparts.se",0],["sportano.sk",1],["sportano.de",1],["sportano.bg",1],["sportano.hu",1],["sportano.ro",1],["sportano.cz",1],["klinik-am-ring.de",2],["seswater.co.uk",3],["chronext.*",4],["galerieslafayette.com",5],["ooekultur.at",6],["igmetall.de",7],["universalgeneve.com",8],["hostfly.by",9],["quantamagazine.org",[10,39]],["rappjmed.ch",10],["osprey.com",11],["ivass.it",12],["onelottery.co.uk",13],["yourschoollottery.co.uk",13],["rainbowlottery.co.uk",13],["idg.se",14],["gearaid.com",15],["buildex.cz",16],["gruenderservice.at",17],["caiacosmetics.com",18],["pdc-big.nl",19],["pdc-big.it",19],["pdc-big.ie",19],["pdc-big.fr",19],["pdc-big.es",19],["pdc-big.be",19],["pdc-big.at",19],["pdc-big.co.uk",19],["pdc-big.de",19],["pdc-big.com",19],["elio-systems.io",[20,27]],["sanha.com",[20,27]],["recettesetcabas.com",21],["flinders.edu.au",22],["opera.com",23],["groningenairport.nl",24],["crocs.co.uk",[25,26]],["crocs.eu",[25,26]],["crocs.nl",[25,26]],["crocs.fi",[25,26]],["crocs.fr",[25,26]],["crocs.de",[25,26]],["stilord.fr",28],["stilord.it",28],["stilord.de",28],["stilord.es",28],["dasfutterhaus.at",29],["developer.paypal.com",30],["cpc2r.ch",31],["zen.com",32],["tecsafe.de",33],["foxracingshox.de",33],["stromnetz.berlin",34],["websummit.com",35],["thehustle.co",35],["epochtimes.fr",36],["ajbell.co.uk",37],["economiapertutti.bancaditalia.it",38],["tradersunion.com",39],["phsgreenleaf.co.uk",40],["phswashrooms.ie",40],["mccolls.co.uk",[41,42]],["crt.hr",43],["yourstorebox.com",44],["clickskeks.at",[45,46]],["housell.com",47],["lactostop.de",48],["spilger.de",49],["dbs.si",50],["abcya.com",51],["umicore.be",52],["umicore.fi",52],["umicore.ca",52],["jongcdenv.be",52],["umicore.jp",52],["umicore.cn",52],["umicore.pl",52],["umicore.kr",52],["umicore.co.th",52],["umicore.fr",52],["umicore.de",52],["donneurdecellulessouches.be",52],["stammzellenspender.be",52],["stemcelldonor.be",52],["umicore.com",52],["umicore.com.br",52],["koenvandenheuvel.be",52],["stamceldonor.be",52],["nahima.be",52],["catused.com",53],["eujuicers.cz",54],["graziellawicki.com",55],["funnelcockpit.com",55],["dnk.nl",56],["eam.de",57],["eam-netz.de",57],["tvp.pl",58],["cellardoor.co",59],["ampire.de",60],["verpackungsstadl.ch",60],["imkershoperzgebirge.de",60],["modellbahndealer.de",60],["tillit-bikes.shop",60],["bike-onlineshop.de",60],["futspo.de",60],["compravo.de",60],["perpedale.de",60],["modellbau-jung.de",60],["verpackungsstadl.at",60],["modellbau-vordermaier.de",60],["bike-supply.de",60],["wroc.pl",61],["basenio.de",62],["fm-systeme.de",63],["gartenhotel-crystal.at",64],["swffm.de",64],["studentenwerkfrankfurt.de",64],["dmsg.de",64],["bgk.pl",64],["pflegezeit-berlin.de",64],["gpd-nordost-onlineberatung.de",64],["proabschluss-beratung.de",64],["hilfe-telefon-missbrauch.online",64],["dww-suchtberatung.de",64],["cyberforum.de",64],["gutscheine.eurothermen.at",64],["wolff-mueller.de",64],["ras.bz.it",64],["technoalpin.com",64],["5asec.pt",65],["tui.dk",65],["tui.fi",65],["tui.no",65],["tui.se",65],["pollfish.com",66],["werkenbijtrekpleister.nl",67],["werkenbijkruidvat.be",67],["rassenlijst.info",67],["werkenbijiciparisxl.nl",67],["flightradar24.com",68],["vietnamairlines.com",69],["incotec.com",70],["croda.com",70],["exaktafoto.se",71],["campingdusoleil.com",72],["hotel-la-chaumiere.com",72],["les-anges-gardiens.fr",72],["croco-kid.com",72],["cambridge-centre.fr",72],["equisud.com",72],["allokebab-pau.fr",72],["etre-visible.local.fr",72],["mas-montebello66.com",72],["camping-residentiel-les-marronniers-jura.fr",72],["dj4events.fr",72],["saintjoursexpertmaritime.com",72],["az-renovation.fr",72],["presquilemultiservices.com",72],["hotel-aigoual.com",72],["hotel-restaurant-pau.com",72],["desrayaud-paysagistes.com",72],["hotelsaintcharles.fr",72],["agvillagecamarguais.com",72],["joyella.com",72],["gabriel-godard.com",72],["artech-sellerie.com",72],["motoclubernee.com",72],["ledauphinhotel.com",72],["cuisin-studio.com",72],["biomeo-environnement.com",72],["leman-instruments.com",72],["esthetique-meyerbeer.com",72],["institut-bio-naturel-nice.fr",72],["nature-et-bois.fr",72],["transmissions-bordeaux.com",72],["kinechartreuse.com",72],["corsegourmande.com",72],["cotedecor.com",72],["restaurant-la-badiane.fr",72],["systelia.fr",72],["lesjardinsinterieurs.com",72],["helenevue.com",72],["saubusse-thermes.com",72],["dehn.es",73],["dehn.fr",73],["dehn.it",73],["dehn.hu",73],["desitek.dk",73],["dehn.at",73],["dehn.de",73],["wwz.ch",74],["inyova.at",75],["inyova.ch",75],["inyova.de",75],["ccalbacenter.com",75],["wamu.org",75],["momentive.com",76],["kennedyslaw.com",77],["elekta.com",78],["ige.ch",79],["stratasysdirect.com",80],["stratasys.com",80],["werkenbijkruidvat.nl",81],["ghacks.net",82],["cutoff.es",83],["whyopencomputing.com",83],["mbanc.com",84],["scholpp.de",85],["scholpp.es",85],["scholpp.pl",85],["scholpp.it",85],["scholpp.com",85],["wetu.com",85],["alpen.co.uk",86],["alsina.com",86],["assosia.com",86],["bassicostruzioni.it",86],["bettenconcept.com",86],["blackpoolairport.com",86],["cateringvandenberg.nl",86],["ceratrends.com",86],["chestnut-tree-house.org.uk",86],["cirrusassessment.com",86],["clinicalondon.co.uk",86],["cmos.ie",86],["deniswilliams.ie",86],["efmdglobal.org",86],["emri.nl",86],["endlesspools.fr",86],["foleys.ie",86],["fryerndental.co.uk",86],["globalfocusmagazine.com",86],["guildhalldental.com",86],["hampshireimplantcentre.co.uk",86],["heikkala.com",86],["hermesit.net",86],["hotspring.be",86],["xn--inkomstfrskring-9kb71a.se",86],["innohome.com",86],["jakobwirt.at",86],["klinger.fi",86],["londonwomenscentre.co.uk",86],["memoreclame.nl",86],["mitarbeiter-app.de",86],["mobiltbredband.se",86],["newsbook.com.mt",86],["northeastspace.ie",86],["portea.fr",86],["precisiondentalstudio.co.uk",86],["ramotavla.se",86],["simkort.se",86],["stbarnabas-hospice.org.uk",86],["tundra.fi",86],["upitrek.com",86],["weetabix-arabia.com",86],["weetabix.co.uk",86],["weetabix.com",86],["weetabix.es",86],["weetabix.fr",86],["weetabix.it",86],["weetabix.nl",86],["weetabix.no",86],["weetabix.pt",86],["weetabixea.com",86],["weetabixfoodcompany.co.uk",86],["weetabixonthego.co.uk",86],["tvprato.it",87],["liftshare.com",87],["vesely-drak.cz",87],["consordini.com",87],["fitzmuseum.cam.ac.uk",87],["hotdk2023.kre.hu",87],["panwybierak.pl",87],["bomagasinet.dk",87],["miplantaweb.com",87],["electronics.semaf.at",87],["sfd.pl",87],["flota.es",87],["jobs.cz",87],["prace.cz",87],["eninternetgratis.com",87],["unavidadeviaje.com",87],["faq.whatsapp.com",88],["blog.whatsapp.com",88],["www.whatsapp.com",88]]);
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
    try { removeClass(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
