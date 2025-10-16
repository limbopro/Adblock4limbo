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
(function uBOL_removeNodeText() {

/******************************************************************************/

function removeNodeText(
    nodeName,
    includes,
    ...extraArgs
) {
    replaceNodeTextFn(nodeName, '', '', 'includes', includes || '', ...extraArgs);
}

function replaceNodeTextFn(
    nodeName = '',
    pattern = '',
    replacement = ''
) {
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('replace-node-text.fn', ...Array.from(arguments));
    const reNodeName = safe.patternToRegex(nodeName, 'i', true);
    const rePattern = safe.patternToRegex(pattern, 'gms');
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    const reIncludes = extraArgs.includes || extraArgs.condition
        ? safe.patternToRegex(extraArgs.includes || extraArgs.condition, 'ms')
        : null;
    const reExcludes = extraArgs.excludes
        ? safe.patternToRegex(extraArgs.excludes, 'ms')
        : null;
    const stop = (takeRecord = true) => {
        if ( takeRecord ) {
            handleMutations(observer.takeRecords());
        }
        observer.disconnect();
        if ( safe.logLevel > 1 ) {
            safe.uboLog(logPrefix, 'Quitting');
        }
    };
    const textContentFactory = (( ) => {
        const out = { createScript: s => s };
        const { trustedTypes: tt } = self;
        if ( tt instanceof Object ) {
            if ( typeof tt.getPropertyType === 'function' ) {
                if ( tt.getPropertyType('script', 'textContent') === 'TrustedScript' ) {
                    return tt.createPolicy(getRandomTokenFn(), out);
                }
            }
        }
        return out;
    })();
    let sedCount = extraArgs.sedCount || 0;
    const handleNode = node => {
        const before = node.textContent;
        if ( reIncludes ) {
            reIncludes.lastIndex = 0;
            if ( safe.RegExp_test.call(reIncludes, before) === false ) { return true; }
        }
        if ( reExcludes ) {
            reExcludes.lastIndex = 0;
            if ( safe.RegExp_test.call(reExcludes, before) ) { return true; }
        }
        rePattern.lastIndex = 0;
        if ( safe.RegExp_test.call(rePattern, before) === false ) { return true; }
        rePattern.lastIndex = 0;
        const after = pattern !== ''
            ? before.replace(rePattern, replacement)
            : replacement;
        node.textContent = node.nodeName === 'SCRIPT'
            ? textContentFactory.createScript(after)
            : after;
        if ( safe.logLevel > 1 ) {
            safe.uboLog(logPrefix, `Text before:\n${before.trim()}`);
        }
        safe.uboLog(logPrefix, `Text after:\n${after.trim()}`);
        return sedCount === 0 || (sedCount -= 1) !== 0;
    };
    const handleMutations = mutations => {
        for ( const mutation of mutations ) {
            for ( const node of mutation.addedNodes ) {
                if ( reNodeName.test(node.nodeName) === false ) { continue; }
                if ( handleNode(node) ) { continue; }
                stop(false); return;
            }
        }
    };
    const observer = new MutationObserver(handleMutations);
    observer.observe(document, { childList: true, subtree: true });
    if ( document.documentElement ) {
        const treeWalker = document.createTreeWalker(
            document.documentElement,
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT
        );
        let count = 0;
        for (;;) {
            const node = treeWalker.nextNode();
            count += 1;
            if ( node === null ) { break; }
            if ( reNodeName.test(node.nodeName) === false ) { continue; }
            if ( node === document.currentScript ) { continue; }
            if ( handleNode(node) ) { continue; }
            stop(); break;
        }
        safe.uboLog(logPrefix, `${count} nodes present before installing mutation observer`);
    }
    if ( extraArgs.stay ) { return; }
    runAt(( ) => {
        const quitAfter = extraArgs.quitAfter || 0;
        if ( quitAfter !== 0 ) {
            setTimeout(( ) => { stop(); }, quitAfter);
        } else {
            stop();
        }
    }, 'interactive');
}

function getRandomTokenFn() {
    const safe = safeSelf();
    return safe.String_fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
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
const argsList = [["script","debugger"],["script","oncontextmenu"],["script","ADBLOCK"],["script","/wccp|contextmenu/"],["style","/wccp|user-select/"],["script","disableSelection"],["script","copyprotect"],["script","/parseInt.*push.*setTimeout.*try.*catch/"],["script","/contextmenu|wpcp/"],["script","/disableclick|devtool/"],["script","/setTimeout.*style/"],["script","reEnable"],["script","stopPrntScr"],["script","/adblock/i"],["script","stopRefreshSite"],["script","nocontextmenu"],["script","devtoolsDetector"],["script","contextmenu"],["script","console.clear"],["script","wccp_pro"],["script","initPopup"],["style","user-select"],["script","/contextmenu|devtool/"],["script","preventDefault"],["script","wccp"],["script","isadb"],["script","e.preventDefault();"],["script","document.oncontextmenu"],["script","btnHtml"],["script","document.onselectstart"],["script","/$.*ready.*setInterval/"],["script","disable_show_error"],["script","disable_copy"],["script","nocontext"],["script","XF"],["script","/document.onkeydown|document.ondragstart/"],["script","ctrlKey"],["script","fetch"],["script","devtools"],["script","while(!![]){try{var"],["script","/closeWindow\\(\\)|clickIE\\(\\)|reEnable\\(\\)/"],["script","ab927c49cf1b"],["script","detectDevTool"],["script","/Clipboard|oncontextmenu|wpcp|keyCode/"],["style","/-webkit-user-select|webkit-appearance/"],["script","loc.hostname"],["script","adblock"],["script","disableselect"],["style","selection"],["script","checkAdsBlocked"],["style","::selection"],["script","keyCode"],["script","window.location.href"],["script","/devtool|debugger/"],["script","/devtoolsDetector|keyCode|preventDefault/"],["script","contentprotector"],["script","/contextmenu|reEnable/"],["script","/adbl/i"],["script","/oncontextmenu|disableselect/"],["script","/contextmenu|oncopy/"],["script","getComputedStyle"],["script","onerror"]];
const hostnamesMap = new Map([["up4stream.com",0],["ups2up.fun",0],["ilovetoplay.xyz",0],["camcaps.io",0],["nicekkk.com",0],["streamvid.net",0],["tips97tech.blogspot.com",0],["stream.hownetwork.xyz",0],["e-panigiria.gr",1],["streambuddy.net",1],["hiphopa.net",1],["cyanlabs.net",2],["tunovelaligera.com",[3,4]],["hebrew4christians.com",5],["skidrowreloaded.com",6],["strtape.*",7],["streamtape.*",7],["android1pro.com",8],["novelpia.com",9],["valid.x86.fr",10],["bolugundem.com",11],["medeberiya.site",12],["monitoruldevrancea.ro",[12,48]],["blog.tangwudi.com",12],["freefilesync.org",13],["jpost.com",14],["teamkong.tk",15],["vidmoly.*",16],["moviesapi.club",16],["watchx.top",16],["asumanaksoy.com",16],["freshlifecircle.com",16],["seriesperu.com",17],["oploverz.*",[17,21]],["klartext-ne.de",17],["iptvromania.ro",17],["cespun.eu",17],["nullforums.net",17],["rds.live",17],["espressocafe.ro",17],["sbot.cf",18],["tvhay.*",19],["fjordd.com",20],["playertv.net",22],["warungkomik.com",23],["themeslide.com",23],["terramirabilis.ro",24],["161.97.70.5",25],["gdrivedescarga.com",26],["bg-gledai.*",27],["audiologyresearch.org",27],["aventurainromania.ro",27],["appimagehub.com",28],["gnome-look.org",28],["store.kde.org",28],["linux-apps.com",28],["opendesktop.org",28],["pling.com",28],["xfce-look.org",28],["zipcode.com.ng",29],["thejakartapost.com",30],["mathcrave.com",31],["brokensilenze.net",[32,33]],["broncoshq.com",34],["anascrie.ro",35],["smartkhabrinews.com",36],["cheersandgears.com",37],["vembed.*",38],["stblion.xyz",39],["redecanais.*",40],["redecanaistv.*",40],["redisex.*",40],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",40],["xn--90afacv0clj6ac0dxa.xn--p1ai",40],["xn--90afacv0cu2a3cr.xn--p1ai",40],["puzzle-loop.com",41],["puzzle-words.com",41],["puzzle-chess.com",41],["puzzle-thermometers.com",41],["puzzle-norinori.com",41],["puzzle-minesweeper.com",41],["puzzle-slant.com",41],["puzzle-lits.com",41],["puzzle-galaxies.com",41],["puzzle-tents.com",41],["puzzle-battleships.com",41],["puzzle-pipes.com",41],["puzzle-hitori.com",41],["puzzle-heyawake.com",41],["puzzle-shingoki.com",41],["puzzle-masyu.com",41],["puzzle-stitches.com",41],["puzzle-aquarium.com",41],["puzzle-tapa.com",41],["puzzle-star-battle.com",41],["puzzle-kakurasu.com",41],["puzzle-skyscrapers.com",41],["puzzle-futoshiki.com",41],["puzzle-shakashaka.com",41],["puzzle-kakuro.com",41],["puzzle-jigsaw-sudoku.com",41],["puzzle-killer-sudoku.com",41],["puzzle-binairo.com",41],["puzzle-nonograms.com",41],["puzzle-sudoku.com",41],["puzzle-light-up.com",41],["puzzle-bridges.com",41],["puzzle-shikaku.com",41],["puzzle-nurikabe.com",41],["puzzle-dominosa.com",41],["puzzle-yin-yang.com",41],["inattvcom117.xyz",42],["mrbenne.com",[43,44]],["www-liverpoolecho-co-uk.translate.goog",45],["www-themirror-com.translate.goog",45],["www-football-london.translate.goog",45],["www-devonlive-com.translate.goog",45],["www-cornwalllive-com.translate.goog",45],["www-glasgowlive-co-uk.translate.goog",45],["www-kentlive-news.translate.goog",45],["www-essexlive-news.translate.goog",45],["www-lincolnshirelive-co-uk.translate.goog",45],["www-leeds--live-co-uk.translate.goog",45],["www-insider-co-uk.translate.goog",45],["xanimu.com",46],["cosxplay.com",46],["klsescreener.com",46],["noicetranslations.blogspot.com",47],["readcomiconline.li",49],["japonhentai.com",50],["cyberdom.blog",51],["vyvymanga.net",52],["streamruby.com",53],["mostream.us",54],["nihongoaz.com",55],["astoryofmasasstruggles.com",56],["cowcotland.com",57],["zabawkahurtownia.pl",58],["ofertecatalog.ro",59],["bangkokpost.com",60],["toweroffantasy.info",61]]);
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
    try { removeNodeText(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
