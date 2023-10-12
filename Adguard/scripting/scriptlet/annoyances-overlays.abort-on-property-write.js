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

// ruleset: annoyances-overlays

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_abortOnPropertyWrite = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["Object.prototype.encodeJsonpScriptSrc"],["ai_front"],["adregain_wall"],["rightnow"],["document.oncontextmenu"],["hasAdblock"],["adBlockDetected"],["nocontext"],["clickIE4"],["disableSelection"],["CheckAdLoad"],["addLink"],["_sp_"],["document.onselectstart"],["document.ondragstart"],["disableEnterKey"],["adMessage"],["adBlockEnabled"],["$adframe"],["XF"],["hidekeep"],["ABDSettings"],["clickIE"],["disable_copy"],["disable_hot_keys"],["loadOutbrain"],["killCopy"],["intializemarquee"],["document.oncopy"],["document.onkeydown"],["addLinkToCopy"],["stopPrntScr"],["disable_keystrokes"],["stopSelect"],["reEnable"],["adsBlocked"],["ABD"],["ondragstart"],["ai_adb_overlay"],["ai_adb"],["initimg"],["gdpr_popin_path"],["generatePopup"],["check"],["FuckAdBlock"],["disableselect"],["onload"],["disable_ext_code"],["journeyCompilerGateway"],["document.onkeypress"],["admrlWpJsonP"],["document.onmousedown"],["document.body.oncopy"]];

const hostnamesMap = new Map([["spletnik.ru",0],["ptisidiastima.com",1],["medebooks.xyz",1],["re-library.com",1],["mobilereset99.com",1],["unixhow.com",2],["vsthouse.ru",2],["primpogoda.ru",2],["gitjournal.tech",2],["e360.yale.edu",3],["m4ufree.com",4],["cristoiublog.ro",[4,13]],["cittadinanza.biz",4],["glistranieri.it",4],["sabishiidesu.com",[4,6]],["xiaomi4mi.com",4],["cmg24.pl",4],["jobsbotswana.info",4],["djelfa.info",4],["gordiando.com.br",4],["wader.toys",4],["tecnotutoshd.net",4],["l2gamers.cl",[4,29]],["luoghidavedere.it",4],["phoneinfo.com.br",4],["voxc.org",4],["ac-mo.com",4],["eoreuni.com",4],["tistory.com",4],["gamegame.kr",4],["jootc.com",4],["wikibious.com",4],["mbs.jp",4],["texte.work",4],["koreanaddict.net",4],["englishlands.net",4],["fruit01.xyz",4],["clipartmax.com",4],["planetagibi.com.br",[4,13]],["planetagibiblog.com.br",[4,13]],["alltechnerd.com",4],["generationamiga.com",4],["watchmdh.to",4],["world4.eu",[4,47]],["ggulpass.com",4],["chessimprover.com",[4,13]],["baixedetudo.net.br",4],["epitesti.ro",[4,8]],["csid.ro",4],["onna.kr",[4,13,14]],["savoriurbane.com",4],["ilife97.com",[4,14]],["saikaiscans.net",4],["agar.io",5],["surviv.io",6],["esercizinglese.com",6],["pelisfull.tv",6],["halotracker.com",6],["102bank.com",6],["80beyond.spacestation-online.com",6],["b4usa.com",6],["badgerandblade.com",6],["mzk.starachowice.eu",6],["gay69.stream",7],["timponline.ro",[7,9,23]],["republicadecuritiba.net",7],["dialectsarchive.com",7],["resourcepack.net",[8,9]],["kurazone.net",[8,9]],["peliculas24.me",9],["techtrickseo.com",[9,23]],["randomstory.org",9],["booksmedicos.org",9],["kirannewsagency.com",9],["starsunfolded.com",9],["satcesc.com",[9,29]],["amlesson.ru",[9,32]],["hebrew4christians.com",9],["manianomikata.com",9],["iosgods.com",10],["uol.com.br",11],["elheraldo.hn",11],["tekstowo.pl",11],["warringtonguardian.co.uk",12],["legionprogramas.org",13],["selfstudyhistory.com",[13,15]],["youmath.it",[13,51]],["7fyd.com",13],["arti-definisi-pengertian.info",[13,14]],["saikai.com.br",13],["tinyppt.com",[14,15]],["droidtekno.com",[14,15]],["businessemailetiquette.com",[14,15]],["newsbook.pl",[14,15]],["relet365.com",14],["empregoestagios.com",14],["elektrikmen.com",14],["hitproversion.com",14],["lazytranslations.com",[14,15]],["jobskaro.com",14],["appd.at",14],["apk1s.com",14],["audiobookcup.com",14],["atlas-geografic.net",[14,15]],["sdewery.me",[14,15]],["projektowanie-wnetrz-online.pl",14],["hindi-gk.com",[15,23,24]],["qualityfilehosting.com",15],["openfinanza.it",15],["naaree.com",15],["gourmetscans.net",15],["bingotingo.com",15],["7misr4day.com",15],["kollyinsider.com",16],["ewrc-results.com",17],["raven-mythic.com",18],["cafesaxophone.com",19],["alisbach.com",20],["linuxslaves.com",20],["nakblogz.top",20],["juancarlosmolinos.net",21],["xhardhempus.com",22],["calorielijst.nl",22],["truyenbanquyen.com",[23,24]],["tunovelaligera.com",24],["zdravenportal.eu",24],["clujust.ro",24],["polygon.com",25],["apornstories.com",26],["cmjornal.pt",28],["aicesu.cn",28],["racevpn.com",29],["media.framu.world",29],["bloombergquint.com",30],["kpopjjang.com",31],["bigulnews.tv",31],["jpopsingles.eu",31],["skidrowcodex.net",31],["darktranslation.com",31],["hulnews.top",31],["boke112.com",31],["janvissersweer.nl",31],["adpres.ro",31],["the-masters-voice.com",31],["postcourier.com.pg",[31,37]],["privivkainfo.ru",32],["targetstudy.com",33],["mtbtutoriales.com",34],["lazyadmin.nl",35],["nakedcapitalism.com",36],["hedgeaccordingly.com",36],["nfltraderumors.co",37],["fanprojseries.com",38],["sfweekly.com",38],["magyarhang.org",39],["ryuryuko.blog90.fc2.com",40],["airfrance.co.jp",41],["fxstreet.com",42],["jeu2048.fr",44],["androidpolice.com",1],["solotrend.net",1],["tutoganga.blogspot.com",45],["hentaialtadefinizione.it",46],["wired.com",48],["citroen.pl",49],["peugeot.pl",49],["theblaze.com",50],["nbcsports.com",50],["nbcsportsedge.com",50],["ciweimao.com",52],["360doc.com",52]]);

const entitiesMap = new Map([["pelispedia",4],["mimaletamusical",4],["tabonitobrasil",4],["anisubindo",9],["hukmatpro",20],["theartofnakedwoman",27],["dood",43],["oploverz",43]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function abortOnPropertyWrite(
    prop = ''
) {
    if ( typeof prop !== 'string' ) { return; }
    if ( prop === '' ) { return; }
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
            throw new ReferenceError(exceptionToken);
        }
    });
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

// Not Firefox
if ( typeof wrappedJSObject !== 'object' ) {
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
