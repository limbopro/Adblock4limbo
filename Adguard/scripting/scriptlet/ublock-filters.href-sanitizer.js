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

// ruleset: ublock-filters

// Important!
// Isolate from global scope

// Start of local scope
(function uBOL_hrefSanitizer() {

/******************************************************************************/

function hrefSanitizer(
    selector = '',
    source = ''
) {
    if ( typeof selector !== 'string' ) { return; }
    if ( selector === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('href-sanitizer', selector, source);
    if ( source === '' ) { source = 'text'; }
    const sanitizeCopycats = (href, text) => {
        let elems = [];
        try {
            elems = document.querySelectorAll(`a[href="${href}"`);
        }
        catch {
        }
        for ( const elem of elems ) {
            elem.setAttribute('href', text);
        }
        return elems.length;
    };
    const validateURL = text => {
        if ( typeof text !== 'string' ) { return ''; }
        if ( text === '' ) { return ''; }
        if ( /[\x00-\x20\x7f]/.test(text) ) { return ''; }
        try {
            const url = new URL(text, document.location);
            return url.href;
        } catch {
        }
        return '';
    };
    const extractURL = (elem, source) => {
        if ( /^\[.*\]$/.test(source) ) {
            return elem.getAttribute(source.slice(1,-1).trim()) || '';
        }
        if ( source === 'text' ) {
            return elem.textContent
                .replace(/^[^\x21-\x7e]+/, '')  // remove leading invalid characters
                .replace(/[^\x21-\x7e]+$/, ''); // remove trailing invalid characters
        }
        const steps = source.replace(/(\S)\?/g, '\\1 ?').split(/\s+/);
        const url = urlSkip(elem.href, false, steps);
        if ( url === undefined ) { return; }
        return url.replace(/ /g, '%20');
    };
    const sanitize = ( ) => {
        let elems = [];
        try {
            elems = document.querySelectorAll(selector);
        }
        catch {
            return false;
        }
        for ( const elem of elems ) {
            if ( elem.localName !== 'a' ) { continue; }
            if ( elem.hasAttribute('href') === false ) { continue; }
            const href = elem.getAttribute('href');
            const text = extractURL(elem, source);
            const hrefAfter = validateURL(text);
            if ( hrefAfter === '' ) { continue; }
            if ( hrefAfter === href ) { continue; }
            elem.setAttribute('href', hrefAfter);
            const count = sanitizeCopycats(href, hrefAfter);
            safe.uboLog(logPrefix, `Sanitized ${count+1} links to\n${hrefAfter}`);
        }
        return true;
    };
    let observer, timer;
    const onDomChanged = mutations => {
        if ( timer !== undefined ) { return; }
        let shouldSanitize = false;
        for ( const mutation of mutations ) {
            if ( mutation.addedNodes.length === 0 ) { continue; }
            for ( const node of mutation.addedNodes ) {
                if ( node.nodeType !== 1 ) { continue; }
                shouldSanitize = true;
                break;
            }
            if ( shouldSanitize ) { break; }
        }
        if ( shouldSanitize === false ) { return; }
        timer = safe.onIdle(( ) => {
            timer = undefined;
            sanitize();
        });
    };
    const start = ( ) => {
        if ( sanitize() === false ) { return; }
        observer = new MutationObserver(onDomChanged);
        observer.observe(document.body, {
            subtree: true,
            childList: true,
        });
    };
    runAt(( ) => { start(); }, 'interactive');
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

function urlSkip(url, blocked, steps, directive = {}) {
    try {
        let redirectBlocked = false;
        let urlout = url;
        for ( const step of steps ) {
            const urlin = urlout;
            const c0 = step.charCodeAt(0);
            // Extract from hash
            if ( c0 === 0x23 && step === '#' ) { // #
                const pos = urlin.indexOf('#');
                urlout = pos !== -1 ? urlin.slice(pos+1) : '';
                continue;
            }
            // Extract from URL parameter name at position i
            if ( c0 === 0x26 ) { // &
                const i = (parseInt(step.slice(1)) || 0) - 1;
                if ( i < 0 ) { return; }
                const url = new URL(urlin);
                if ( i >= url.searchParams.size ) { return; }
                const params = Array.from(url.searchParams.keys());
                urlout = decodeURIComponent(params[i]);
                continue;
            }
            // Enforce https
            if ( c0 === 0x2B && step === '+https' ) { // +
                const s = urlin.replace(/^https?:\/\//, '');
                if ( /^[\w-]:\/\//.test(s) ) { return; }
                urlout = `https://${s}`;
                continue;
            }
            // Decode
            if ( c0 === 0x2D ) { // -
                // Base64
                if ( step === '-base64' ) {
                    urlout = self.atob(urlin);
                    continue;
                }
                // Safe Base64
                if ( step === '-safebase64' ) {
                    if ( urlSkip.safeBase64Replacer === undefined ) {
                        urlSkip.safeBase64Map = { '-': '+', '_': '/' };
                        urlSkip.safeBase64Replacer = s => urlSkip.safeBase64Map[s];
                    }
                    urlout = urlin.replace(/[-_]/g, urlSkip.safeBase64Replacer);
                    urlout = self.atob(urlout);
                    continue;
                }
                // URI component
                if ( step === '-uricomponent' ) {
                    urlout = decodeURIComponent(urlin);
                    continue;
                }
                // Enable skip of blocked requests
                if ( step === '-blocked' ) {
                    redirectBlocked = true;
                    continue;
                }
            }
            // Regex extraction from first capture group
            if ( c0 === 0x2F ) { // /
                const re = directive.cache ?? new RegExp(step.slice(1, -1));
                if ( directive.cache === null ) {
                    directive.cache = re;
                }
                const match = re.exec(urlin);
                if ( match === null ) { return; }
                if ( match.length <= 1 ) { return; }
                urlout = match[1];
                continue;
            }
            // Extract from URL parameter
            if ( c0 === 0x3F ) { // ?
                urlout = (new URL(urlin)).searchParams.get(step.slice(1));
                if ( urlout === null ) { return; }
                if ( urlout.includes(' ') ) {
                    urlout = urlout.replace(/ /g, '%20');
                }
                continue;
            }
            // Unknown directive
            return;
        }
        const urlfinal = new URL(urlout);
        if ( urlfinal.protocol !== 'https:' ) {
            if ( urlfinal.protocol !== 'http:' ) { return; }
        }
        if ( blocked && redirectBlocked !== true ) { return; }
        return urlout;
    } catch {
    }
}

/******************************************************************************/

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [["a[href^=\"https://cdns.6hiidude.gold/file.php?link=http\"]","?link"],["a[href^=\"https://link.asiaon.top/full?api=\"][href*=\"&url=aHR0c\"]","?url -base64"],["a[href^=\"https://azrom.net/\"][href*=\"?url=\"]","?url"],["a[href^=\"/p/download.html?ntlruby=\"]","?ntlruby"],["a[href^=\"https://www.adtival.network/\"][href*=\"&url=\"]","?url"],["a[href^=\"https://linkshortify.com/\"][href*=\"url=http\"]","?url"],["a[href^=\"https://toonhub4u.com/redirect/\"]","?url -base64"],["a[href^=\"https://www.linkedin.com/redir/redirect?url=http\"]","?url"],["body a[href^=\"/rebates/welcome?url=http\"]","?url"],["a[href^=\"https://deeplink.musescore.com/redirect?to=http\"]","?to"],["a[href^=\"/redirects/link-ad?redirectUrl=aHR0c\"]","?redirectUrl -base64"],["a[href^=\"//duckduckgo.com/l/?uddg=\"]","?uddg"],["a[href^=\"https://go.skimresources.com/\"][href*=\"&url=http\"]","?url"],["a[href^=\"https://click.linksynergy.com/\"][href*=\"link?id=\"][href*=\"&murl=http\"]","?murl"],["a[href^=\"/vp/player/to/?u=http\"], a[href^=\"/vp/download/goto/?u=http\"]","?u"],["a[href^=\"https://drivevideo.xyz/link?link=http\"]","?link"],["a[href^=\"https://click.linksynergy.com/deeplink?id=\"][href*=\"&murl=\"]","?murl"],["a[href*=\"?\"][href*=\"&url=http\"]","?url"],["a[href*=\"?\"][href*=\"&u=http\"]","?u"],["a[href^=\"https://app.adjust.com/\"][href*=\"?fallback=http\"]","?fallback"],["a[href^=\"https://go.redirectingat.com?url=http\"]","?url"],["a[href^=\"/check.php?\"][href*=\"&url=http\"]","?url"],["a[href^=\"https://click.linksynergy.com/deeplink?id=\"][href*=\"&murl=http\"]","?murl"],["a[href^=\"https://disq.us/url?url=\"][title^=\"http\"]","[title]"],["a[href^=\"https://disq.us/?url=http\"]","?url"],["a[href^=\"https://steamcommunity.com/linkfilter/?url=http\"]","?url"],["a[href^=\"https://steamcommunity.com/linkfilter/?u=http\"]","?u"],["a[href^=\"https://colab.research.google.com/corgiredirector?site=http\"]","?site"],["a[href^=\"https://shop-links.co/link/?\"][href*=\"&url=http\"]","?url"],["a[href^=\"https://redirect.viglink.com/?\"][href*=\"ourl=http\"]","?ourl"],["a[href^=\"http://www.jdoqocy.com/click-\"][href*=\"?URL=http\"]","?URL"],["a[href^=\"https://track.adtraction.com/t/t?\"][href*=\"&url=http\"]","?url"],["a[href^=\"https://metager.org/partner/r?link=http\"]","?link"],["a[href*=\"go.redirectingat.com\"][href*=\"url=http\"]","?url"],["a[href^=\"https://slickdeals.net/?\"][href*=\"u2=http\"]","?u2"],["a[href^=\"https://online.adservicemedia.dk/\"][href*=\"deeplink=http\"]","?deeplink"],["a[href*=\".justwatch.com/a?\"][href*=\"&r=http\"]","?r"],["a[href^=\"https://clicks.trx-hub.com/\"][href*=\"bn5x.net\"]","?q?u"],["a[href^=\"https://shopping.yahoo.com/rdlw?\"][href*=\"gcReferrer=http\"]","?gcReferrer"],["body a[href*=\"?\"][href*=\"u=http\"]:is([href*=\".com/c/\"],[href*=\".io/c/\"],[href*=\".net/c/\"],[href*=\"?subId1=\"],[href^=\"https://affportal.bhphoto.com/dl/redventures/?\"])","?u"],["body a[href*=\"?\"][href*=\"url=http\"]:is([href^=\"https://cc.\"][href*=\".com/v1/otc/\"],[href^=\"https://go.skimresources.com\"],[href^=\"https://go.redirectingat.com\"],[href^=\"https://invol.co/aff_m?\"],[href^=\"https://shop-links.co/link\"],[href^=\"https://track.effiliation.com/servlet/effi.redir?\"],[href^=\"https://atmedia.link/product?url=http\"],[href*=\".com/a.ashx?\"],[href^=\"https://www.\"][href*=\".com/t/\"],[href*=\".prsm1.com/r?\"],[href*=\".com/click-\"],[href*=\".net/click-\"],a[href*=\".com/t/t?a=\"],a[href*=\".dk/t/t?a=\"])","?url"],["body a[href*=\"/Proxy.ashx?\"][href*=\"GR_URL=http\"]","?GR_URL"],["body a[href^=\"https://go.redirectingat.com/\"][href*=\"&url=http\"]","?url"],["body a[href*=\"awin1.com/\"][href*=\".php?\"][href*=\"ued=http\"]","?ued"],["body a[href*=\"awin1.com/\"][href*=\".php?\"][href*=\"p=http\"]","?p"],["a.autolinker_link[href*=\".com/t/\"][href*=\"url=http\"]","?url"],["body a[rel=\"sponsored nofollow\"][href^=\"https://fsx.i-run.fr/?\"][href*=\"redir=http\"]","?redir"],["body a[rel=\"sponsored nofollow\"][href*=\".tradeinn.com/ts/\"][href*=\"trg=http\"]","?trg"],["body a[href*=\".com/r.cfm?\"][href*=\"urllink=http\"]","?urllink"],["body a[href^=\"https://gate.sc\"][href*=\"?url=http\"]","?url"],["body a[href^=\"https://spreaker.onelink.me/\"][href*=\"&af_web_dp=http\"]","?af_web_dp"],["body a[href^=\"/link.php?url=http\"]","?url"],["body a[href^=\"/ExternalLinkRedirect?\"][href*=\"url=http\"]","?url"],["a[href*=\"https://www.chollometro.com/visit/\"][title^=\"https://\"]","[title]"],["a[href*=\"https://www.dealabs.com/visit/\"][title^=\"https://\"]","[title]"],["a[href*=\"https://www.hotukdeals.com/visit/\"][title^=\"https://\"]","[title]"],["a[href*=\"https://www.mydealz.de/visit/\"][title^=\"https://\"]","[title]"],["a[href*=\"https://nl.pepper.com/visit/\"][title^=\"https://\"]","[title]"],["a[href*=\"https://www.pepper.it/visit/\"][title^=\"https://\"]","[title]"],["a[href*=\"https://www.pepper.pl/visit/\"][title^=\"https://\"]","[title]"],["a[href*=\"https://www.pepper.ru/visit/\"][title^=\"https://\"]","[title]"],["a[href*=\"https://www.preisjaeger.at/visit/\"][title^=\"https://\"]","[title]"],["a[href*=\"https://www.promodescuentos.com/visit/\"][title^=\"https://\"]","[title]"],["a[href*=\"https://www.pelando.com.br/api/redirect?url=\"]","?url"],["a[href^=\"https://cna.st/\"][data-offer-url^=\"https://\"]","[data-offer-url]"],["a.btn[href^=\"https://zxro.com/u/?url=http\"]","?url"]];
const hostnamesMap = new Map([["6hiidude.gold",0],["asiaon.top",1],["asiaontop.com",1],["azrom.net",2],["taisachonthi.com",3],["kazefuri.net",4],["movies4u.*",5],["toonhub4u.me",6],["linkedin.com",7],["bing.com",8],["musescore.com",9],["lit.link",10],["html.duckduckgo.com",11],["lite.duckduckgo.com",11],["starstyle.com",12],["insidehook.com",[13,39,40,43,44,48]],["nbcnews.com",[13,39,40,43,44]],["pcpartpicker.com",[13,39,40]],["space.com",[13,39,40,41,43,44]],["tomshardware.com",[13,22,39,40,41]],["fap18.net",14],["xxxmom.net",14],["fuck55.net",14],["gofucker.com",14],["sexu.tv",14],["vid123.net",14],["babe8.net",14],["beeg.porn",14],["losporn.org",15],["streamporn.li",15],["pandamovies.org",15],["bananamovies.org",15],["xopenload.net",15],["adultdvdparadise.com",15],["speedporn.net",15],["mangoporn.net",15],["pandamovie.info",15],["mangoporn.co",15],["mangoparody.com",15],["xxxscenes.net",15],["pornkino.cc",15],["watchxxxfree.pw",15],["pandamovie.in",15],["speedporn.pw",15],["watchfreexxx.net",15],["youwatchporn.com",15],["watchpornfree.info",15],["pandamovies.me",15],["xtapes.me",15],["netflixporno.net",15],["pornwish.org",15],["freeomovie.info",15],["fullxxxmovies.me",15],["watchpornx.com",15],["xxxparodyhd.net",15],["xxxstream.me",15],["pornwatch.ws",15],["xopenload.pw",15],["pandamovies.pw",15],["streamporn.pw",15],["xopenload.me",15],["nowinstock.net",[16,17,18]],["paypal.com",19],["elotrolado.net",20],["tube188.com",21],["disqus.com",[23,24]],["steamcommunity.com",[25,26]],["colab.research.google.com",27],["xda-developers.com",[28,29,43,44]],["isthereanydeal.com",[30,31]],["metager.org",32],["slickdeals.net",[33,34]],["dk.pcpartpicker.com",35],["letterboxd.com",36],["justwatch.com",36],["variety.com",37],["engadget.com",38],["cnet.com",[39,40]],["dogfoodadvisor.com",39],["hunker.com",[39,40]],["notebookcheck.net",39],["pcgamingwiki.com",[39,40]],["popularmechanics.com",[39,40]],["purewow.com",[39,40]],["sheknows.com",39],["streetinsider.com",39],["zdnet.com",[39,40,41]],["androidauthority.com",40],["jljbacktoclassic.com",[40,48]],["mobygames.com",40],["otherweb.com",40],["sport-passion.fr",[40,46,47]],["thekitchn.com",40],["techradar.com",41],["windowscentral.com",42],["shutupandtakemyyen.com",[43,44]],["thisiswhyimbroke.com",[43,44]],["forums.redflagdeals.com",45],["soundcloud.com",49],["spreaker.com",50],["dogdrip.net",51],["donanimhaber.com",52],["chollometro.com",53],["dealabs.com",54],["hotukdeals.com",55],["mydealz.de",56],["nl.pepper.com",57],["pepper.it",58],["pepper.pl",59],["pepper.ru",60],["preisjaeger.at",61],["promodescuentos.com",62],["pelando.com.br",63],["pitchfork.com",64],["onual.com",65]]);
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
    try { hrefSanitizer(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
