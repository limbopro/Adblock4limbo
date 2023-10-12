/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
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

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["shortcut"],["DADrcv3s1"],["stopPrntScr"],["document.createElement","player.gliacloud.com"],["jQuery","eventParams.responseVariables.enablepaywall"],["jQuery","#sidebar-ad"],["document.createElement","counter.toString"],["document.getElementById","lock_content"],["document.oncontextmenu"],["document.ondragstart"],["tjQuery","body"],["document.onselectstart"],["$","contextmenu"],["validateKey"],["addEventListener","blockEvent"],["disable_keystrokes"],["document.addEventListener","copyWithSource"],["jQuery","onselectstart"],["add_message_to_copied_text"],["document.onkeypress"],["window.oncontextmenu"],["window.addEventListener","copy"],["_HWIO.readyjs","stopPrntScr"],["nocontextmenu"],["document.addEventListener","contextmenu"],["document.onkeydown"],["document.oncopy"],["disableEnterKey","Content is protected"],["document.onmousedown"],["jQuery","contextmenu"],["document.keypress"],["EventTarget.prototype.addEventListener","keydown"],["jQuery","document.oncontextmenu"],["document.onkeyup"],["disableSelection"],["addEvent","document.body.oncopy"],["document.addEventListener","addLink"],["jQuery","fp_mouse_right_click_restriction"],["jQuery","oncopy"]];

const hostnamesMap = new Map([["darkcrew.org",[0,1]],["sudya-dredd.ru",2],["moviesrush.in",[2,9,25]],["charbelnemnom.com",2],["moneysave.info",3],["thestar.com",4],["thespec.com",4],["therecord.com",4],["thepeterboroughexaminer.com",4],["stcatharinesstandard.ca",4],["niagarafallsreview.ca",4],["wellandtribune.ca",4],["bramptonguardian.com",4],["caledonenterprise.com",4],["cambridgetimes.ca",4],["durhamregion.com",4],["flamboroughreview.com",4],["guelphmercury.com",4],["hamiltonnews.com",4],["insidehalton.com",4],["insideottawavalley.com",4],["mississauga.com",4],["muskokaregion.com",4],["mykawartha.com",4],["newhamburgindependent.ca",4],["niagarathisweek.com",4],["northbaynipissing.com",4],["northumberlandnews.com",4],["orangeville.com",4],["ourwindsor.ca",4],["parrysound.com",4],["sachem.ca",4],["simcoe.com",4],["theifp.ca",4],["toronto.com",4],["waterloochronicle.ca",4],["yorkregion.com",4],["legacy.com",4],["edition.pagesuite-professional.co.uk",4],["hub.metroland.com",4],["rkb.jp",5],["fmmods.com",6],["blogchiasekienthuc.com",7],["ufchgu.ru",[8,15,34]],["mangahentai.me",8],["themodellingnews.com",8],["senpaiediciones.com",8],["descopera.ro",8],["amantecod.it",8],["truelovejapan.com",8],["volt-index.ru",[8,38]],["universaladbdriver.com",8],["firmwarefile.com",8],["bg-gledai.co",8],["victorytale.com",8],["clujust.ro",[8,9]],["mysports.to",8],["mi-faq.ru",[8,15,34]],["mathbang.net",[8,10]],["seriesgratis.biz",8],["mangacrab.com",8],["metalnaveia66.com",8],["bollywoodhindi.in",8],["legionscans.com",8],["footy.to",8],["kdramasurdu.net",8],["osomatsusan.hatenablog.com",8],["flinsetyadi.com",8],["bingotingo.com",8],["carfixer.co.kr",8],["urbanbrush.net",8],["now.rememberapp.co.kr",[8,11]],["untitle.org",[8,10]],["tecnoprogramas.com",8],["animeactua.com",[8,27]],["creativestudio.kr",8],["onna.kr",[8,16]],["info-beihilfe.de",8],["audiobookcup.com",8],["funfunhan.com",[8,10]],["blofinder.com",8],["bookpost.kr",[8,10]],["ex-nihil0.com",8],["donghun.kr",[8,10]],["zoommastory.com",[8,10]],["deutschaj.com",8],["kokone.co.kr",[8,10]],["stevenh.net",[8,10]],["ideas0419.com",[8,10]],["raycat.net",[8,10]],["hosii.info",[8,10]],["blahblah.pe.kr",[8,10]],["geniusjw.com",[8,10]],["blog.esherloon.com",[8,10]],["centrair.kr",[8,10]],["softwarebits.net",8],["tunovelaligera.com",8],["krtopic.com",8],["healthfeed.co.kr",8],["my-expert.ru",[8,9,25]],["bimiacg.net",8],["solidfile.net",8],["promocode99.in",8],["downloadtutorials.net",8],["nawalakarsa.id",8],["tecnomusic-evolution.com",8],["jpopsingles.eu",8],["wartaterkini.news",8],["pcprogramasymas.net",8],["tistory.com",[8,10,16]],["ghostspectre.the-ninja.jp",8],["slothjuns.net",8],["eduardo-monica.com",8],["apkspurefile.com",8],["foxaholic.com",8],["koreanaddict.net",8],["omgkpop.top",8],["gamegame.kr",[8,10]],["eoreuni.com",8],["jstranslations1.com",8],["animeuniverse.it",8],["baltasar5010purohentai.com",8],["aihristdreamtranslations.com",[8,34]],["tipslab.info",8],["indcit.com",8],["semi168.net",8],["semi168.club",8],["audio-sound-premium.com",8],["filmboxoffice.web.id",8],["kakpishem.ru",[8,26,34]],["teepr.com",[8,32]],["texte.work",8],["sysnettechsolutions.com",8],["reinodekovel.com",8],["elektrikmen.com",8],["world4.eu",8],["activationkeys.co",8],["secondlifetranslations.com",8],["samuraiscan.com",8],["globaledu.jp",8],["lazytranslations.com",8],["immigrantinvest.com",9],["pabrikarang.com",[9,11]],["allaboutshaving.kr",9],["javsubtitle.co",9],["neo-blood.co.jp",9],["machow2.com",9],["rawneix.in",9],["theturtleislandnews.com",9],["audiotools.in",9],["moviesrush.one",[9,25]],["lapandilladelarejilla.es",9],["7misr4day.com",9],["michaelemad.com",9],["toonvideos.net.in",[9,25]],["onepiece-online-manga.com",9],["clockks.com",9],["iptv4best.com",9],["teus.me",10],["archwin.net",10],["onpc.kr",10],["blog.hangyeong.com",10],["tokyodomin.com",10],["modoobrisbane.com",10],["genuineactivator.com",11],["melodelaa.link",11],["asus-zenfone.com",11],["techieway.blogspot.com",11],["chronologia.pl",11],["kpopjjang.com",12],["hinfomax.co.kr",12],["britg.kr",12],["japanxxxmovie.com",12],["sexpox.com",12],["47news.jp",12],["learn-from-homey.blogspot.com",12],["belajarbro.id",12],["mangaku.cc",12],["tezgoal.com",13],["comeinsidebox.com",14],["ezms.link",14],["ladyblog.me",17],["denizlihaber.com",[18,19]],["acritica.com",19],["toptoon.com",20],["pressian.com",21],["bestxiaomiproducts.com",22],["appofmirror.com",23],["knightnoscanlation.com",24],["hunterfansub.com",25],["bloombergquint.com",26],["procrackerz.org",27],["hataphim.com",28],["japan-fans.com",28],["nubng.com",29],["ifdreamscametrue.com",29],["kkpmh.vip",29],["jucagototranslations.fukou-da.net",29],["kusonime.com",[30,31]],["utorrentgamesps2.blogspot.com",33],["portalwrc.pl",35],["ktk.kz",36],["linkerpt.com",37]]);

const entitiesMap = new Map([]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function abortCurrentScript(...args) {
    runAtHtmlElement(( ) => {
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
    const log = shouldLog(extraArgs);
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
        if ( log && e.src !== '' ) { safe.uboLog(`matched src: ${e.src}`); }
        const scriptText = getScriptText(e);
        if ( reNeedle.test(scriptText) === false ) {
            if ( debug === 'nomatch' || debug === 'all' ) { debugger; }  // jshint ignore: line
            return;
        }
        if ( log ) { safe.uboLog(`matched script text: ${scriptText}`); }
        if ( debug === 'match' || debug === 'all' ) { debugger; }  // jshint ignore: line
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
        if ( log ) { safe.uboLog(ex); }
    }
}

function runAtHtmlElement(fn) {
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
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
    }
    const self = globalThis;
    const safe = {
        'Error': self.Error,
        'Math_floor': Math.floor,
        'Math_random': Math.random,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'jsonParse': self.JSON.parse.bind(self.JSON),
        'jsonStringify': self.JSON.stringify.bind(self.JSON),
        'log': console.log.bind(console),
        uboLog(...args) {
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
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
                    pattern,
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            return {
                pattern,
                re: new this.RegExp(pattern.replace(
                    /[.*+?^${}()|[\]\\]/g, '\\$&'),
                    options.flags
                ),
                expect,
            };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            return this.RegExp_test.call(details.re, haystack) === details.expect;
        },
        patternToRegex(pattern, flags = undefined) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
            }
            try {
                return new RegExp(match[1], match[2] || flags);
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
            return Object.fromEntries(entries);
        },
    };
    scriptletGlobals.set('safeSelf', safe);
    return safe;
}

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.debug;
}

function shouldLog(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.log;
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

// Not Firefox
if ( typeof wrappedJSObject !== 'object' ) {
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
