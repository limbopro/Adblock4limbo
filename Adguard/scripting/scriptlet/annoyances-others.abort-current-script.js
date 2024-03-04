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

// ruleset: annoyances-others

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_abortCurrentScript = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["stopPrntScr"],["document.createElement","player.gliacloud.com"],["jQuery","eventParams.responseVariables.enablepaywall"],["jQuery","#sidebar-ad"],["document.createElement","counter.toString"],["document.getElementById","lock_content"],["document.oncontextmenu"],["document.ondragstart"],["tjQuery","body"],["document.onselectstart"],["$","contextmenu"],["document.getElementsByTagName","oncontextmenu"],["validateKey"],["addEventListener","blockEvent"],["disable_keystrokes"],["document.addEventListener","copyWithSource"],["jQuery","onselectstart"],["add_message_to_copied_text"],["document.onkeypress"],["window.oncontextmenu"],["window.addEventListener","copy"],["_HWIO.readyjs","stopPrntScr"],["nocontextmenu"],["document.addEventListener","contextmenu"],["document.onkeydown"],["document.oncopy"],["disableEnterKey","Content is protected"],["document.onmousedown"],["jQuery","contextmenu"],["document.keypress"],["EventTarget.prototype.addEventListener","keydown"],["jQuery","document.oncontextmenu"],["document.onkeyup"],["disableSelection"],["addEvent","document.body.oncopy"],["document.addEventListener","addLink"],["jQuery","fp_mouse_right_click_restriction"],["jQuery","oncopy"]];

const hostnamesMap = new Map([["sudya-dredd.ru",0],["charbelnemnom.com",0],["moneysave.info",1],["thestar.com",2],["thespec.com",2],["therecord.com",2],["thepeterboroughexaminer.com",2],["stcatharinesstandard.ca",2],["niagarafallsreview.ca",2],["wellandtribune.ca",2],["bramptonguardian.com",2],["caledonenterprise.com",2],["cambridgetimes.ca",2],["durhamregion.com",2],["flamboroughreview.com",2],["guelphmercury.com",2],["hamiltonnews.com",2],["insidehalton.com",2],["insideottawavalley.com",2],["mississauga.com",2],["muskokaregion.com",2],["mykawartha.com",2],["newhamburgindependent.ca",2],["niagarathisweek.com",2],["northbaynipissing.com",2],["northumberlandnews.com",2],["orangeville.com",2],["ourwindsor.ca",2],["parrysound.com",2],["sachem.ca",2],["simcoe.com",2],["theifp.ca",2],["toronto.com",2],["waterloochronicle.ca",2],["yorkregion.com",2],["legacy.com",2],["edition.pagesuite-professional.co.uk",2],["hub.metroland.com",2],["rkb.jp",3],["fmmods.com",4],["blogchiasekienthuc.com",5],["mostrodifirenze.com",6],["rightrasta.com",[6,7]],["daotranslate.com",6],["habuteru.com",6],["ufchgu.ru",[6,14,33]],["mangahentai.me",6],["themodellingnews.com",6],["senpaiediciones.com",6],["descopera.ro",6],["amantecod.it",6],["volt-index.ru",[6,37]],["universaladbdriver.com",6],["firmwarefile.com",6],["bg-gledai.co",6],["victorytale.com",6],["clujust.ro",[6,7]],["mysports.to",6],["mi-faq.ru",[6,14,33]],["mathbang.net",[6,8]],["seriesgratis.biz",6],["mangacrab.com",6],["metalnaveia66.com",6],["bollywoodhindi.in",6],["legionscans.com",6],["footy.to",6],["osomatsusan.hatenablog.com",6],["flinsetyadi.com",6],["bingotingo.com",6],["carfixer.co.kr",6],["urbanbrush.net",6],["now.rememberapp.co.kr",[6,9]],["untitle.org",[6,8]],["tecnoprogramas.com",6],["animeactua.com",[6,26]],["creativestudio.kr",6],["onna.kr",[6,15]],["info-beihilfe.de",6],["audiobookcup.com",6],["funfunhan.com",[6,8]],["blofinder.com",6],["bookpost.kr",[6,8]],["ex-nihil0.com",6],["donghun.kr",[6,8]],["zoommastory.com",[6,8]],["deutschaj.com",6],["kokone.co.kr",[6,8]],["stevenh.net",[6,8]],["ideas0419.com",[6,8]],["raycat.net",[6,8]],["hosii.info",[6,8]],["blahblah.pe.kr",[6,8]],["geniusjw.com",[6,8]],["blog.esherloon.com",[6,8]],["centrair.kr",[6,8]],["softwarebits.net",6],["tunovelaligera.com",6],["krtopic.com",6],["healthfeed.co.kr",6],["my-expert.ru",[6,7,24]],["bimiacg.net",6],["solidfile.net",6],["promocode99.in",6],["downloadtutorials.net",6],["nawalakarsa.id",6],["tecnomusic-evolution.com",6],["jpopsingles.eu",6],["wartaterkini.news",6],["pcprogramasymas.net",6],["tistory.com",[6,8,15]],["ghostspectre.the-ninja.jp",6],["eduardo-monica.com",6],["foxaholic.com",6],["koreanaddict.net",6],["omgkpop.top",6],["gamegame.kr",[6,8]],["eoreuni.com",6],["jstranslations1.com",6],["animeuniverse.it",6],["baltasar5010purohentai.com",6],["aihristdreamtranslations.com",[6,33]],["tipslab.info",6],["indcit.com",6],["audio-sound-premium.com",6],["filmboxoffice.web.id",6],["kakpishem.ru",[6,25,33]],["teepr.com",[6,31]],["texte.work",6],["sysnettechsolutions.com",6],["reinodekovel.com",6],["elektrikmen.com",6],["world4.eu",6],["activationkeys.co",6],["secondlifetranslations.com",6],["samuraiscan.com",6],["globaledu.jp",6],["lazytranslations.com",6],["vernamagazine.com",7],["kaystls.site",7],["filmzone.com",7],["immigrantinvest.com",7],["pabrikarang.com",[7,9]],["allaboutshaving.kr",7],["javsubtitle.co",7],["neo-blood.co.jp",7],["machow2.com",7],["rawneix.in",7],["theturtleislandnews.com",7],["audiotools.in",7],["lapandilladelarejilla.es",7],["7misr4day.com",7],["michaelemad.com",7],["toonvideos.net.in",[7,24]],["onepiece-online-manga.com",7],["clockks.com",7],["iptv4best.com",7],["teus.me",8],["archwin.net",8],["onpc.kr",8],["blog.hangyeong.com",8],["tokyodomin.com",8],["modoobrisbane.com",8],["genuineactivator.com",9],["melodelaa.link",9],["asus-zenfone.com",9],["techieway.blogspot.com",9],["chronologia.pl",9],["kpopjjang.com",10],["hinfomax.co.kr",10],["britg.kr",10],["japanxxxmovie.com",10],["sexpox.com",10],["47news.jp",10],["learn-from-homey.blogspot.com",10],["belajarbro.id",10],["mangaku.cc",10],["transtv.co.id",11],["tezgoal.com",12],["comeinsidebox.com",13],["ezms.link",13],["ladyblog.me",16],["denizlihaber.com",[17,18]],["acritica.com",18],["toptoon.com",19],["pressian.com",20],["bestxiaomiproducts.com",21],["appofmirror.com",22],["knightnoscanlation.com",23],["hunterfansub.com",24],["bloombergquint.com",25],["procrackerz.org",26],["hataphim.com",27],["japan-fans.com",27],["nubng.com",28],["ifdreamscametrue.com",28],["kkpmh.vip",28],["jucagototranslations.fukou-da.net",28],["kusonime.com",[29,30]],["utorrentgamesps2.blogspot.com",32],["portalwrc.pl",34],["ktk.kz",35],["linkerpt.com",36]]);

const entitiesMap = new Map([]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function abortCurrentScript(...args) {
    runAtHtmlElementFn(( ) => {
        abortCurrentScriptCore(...args);
    });
}

function abortCurrentScriptCore(
    target = '',
    needle = '',
    context = ''
) {
    if ( typeof target !== 'string' ) { return; }
    if ( target === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('abort-current-script', target, needle, context);
    const reNeedle = safe.patternToRegex(needle);
    const reContext = safe.patternToRegex(context);
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    const thisScript = document.currentScript;
    const chain = target.split('.');
    let owner = window;
    let prop;
    for (;;) {
        prop = chain.shift();
        if ( chain.length === 0 ) { break; }
        if ( prop in owner === false ) { break; }
        owner = owner[prop];
        if ( owner instanceof Object === false ) { return; }
    }
    let value;
    let desc = Object.getOwnPropertyDescriptor(owner, prop);
    if (
        desc instanceof Object === false ||
        desc.get instanceof Function === false
    ) {
        value = owner[prop];
        desc = undefined;
    }
    const debug = shouldDebug(extraArgs);
    const exceptionToken = getExceptionToken();
    const scriptTexts = new WeakMap();
    const getScriptText = elem => {
        let text = elem.textContent;
        if ( text.trim() !== '' ) { return text; }
        if ( scriptTexts.has(elem) ) { return scriptTexts.get(elem); }
        const [ , mime, content ] =
            /^data:([^,]*),(.+)$/.exec(elem.src.trim()) ||
            [ '', '', '' ];
        try {
            switch ( true ) {
            case mime.endsWith(';base64'):
                text = self.atob(content);
                break;
            default:
                text = self.decodeURIComponent(content);
                break;
            }
        } catch(ex) {
        }
        scriptTexts.set(elem, text);
        return text;
    };
    const validate = ( ) => {
        const e = document.currentScript;
        if ( e instanceof HTMLScriptElement === false ) { return; }
        if ( e === thisScript ) { return; }
        if ( context !== '' && reContext.test(e.src) === false ) {
            if ( debug === 'nomatch' || debug === 'all' ) { debugger; }  // jshint ignore: line
            return;
        }
        if ( safe.logLevel > 1 && context !== '' ) {
            safe.uboLog(logPrefix, `Matched src\n${e.src}`);
        }
        const scriptText = getScriptText(e);
        if ( reNeedle.test(scriptText) === false ) {
            if ( debug === 'nomatch' || debug === 'all' ) { debugger; }  // jshint ignore: line
            return;
        }
        if ( safe.logLevel > 1 ) {
            safe.uboLog(logPrefix, `Matched text\n${scriptText}`);
        }
        if ( debug === 'match' || debug === 'all' ) { debugger; }  // jshint ignore: line
        safe.uboLog(logPrefix, 'Aborted');
        throw new ReferenceError(exceptionToken);
    };
    if ( debug === 'install' ) { debugger; }  // jshint ignore: line
    try {
        Object.defineProperty(owner, prop, {
            get: function() {
                validate();
                return desc instanceof Object
                    ? desc.get.call(owner)
                    : value;
            },
            set: function(a) {
                validate();
                if ( desc instanceof Object ) {
                    desc.set.call(owner, a);
                } else {
                    value = a;
                }
            }
        });
    } catch(ex) {
        safe.uboErr(logPrefix, `Error: ${ex}`);
    }
}

function runAtHtmlElementFn(fn) {
    if ( document.documentElement ) {
        fn();
        return;
    }
    const observer = new MutationObserver(( ) => {
        observer.disconnect();
        fn();
    });
    observer.observe(document, { childList: true });
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

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.canDebug && details.debug;
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
    try { abortCurrentScript(...argsList[i]); }
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
    return uBOL_abortCurrentScript();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_abortCurrentScript = cloneInto([
            [ '(', uBOL_abortCurrentScript.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_abortCurrentScript);
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
    delete page.uBOL_abortCurrentScript;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
