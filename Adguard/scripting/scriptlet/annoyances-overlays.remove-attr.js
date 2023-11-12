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
const uBOL_removeAttr = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["style","html"],["style","body[style^=\"overflow:\"],html[style^=\"overflow:\"]"],["style","body.modal-open"],["style","body[style^=\"overflow:\"]"],["oncontextmenu"],["oncopy"],["onselectstart"],["oncontextmenu|ondragstart|onselectstart"],["oncontextmenu|ondragstart|onselectstart|onkeydown"],["oncontextmenu|onselectstart"],["oncontextmenu|onselectstart|ondragstart"],["oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart"],["oncontextmenu|onselectstart|onselect|oncopy"],["oncontextmenu|onkeydown|onmousedown"],["oncontextmenu|onselectstart|ondragstart|oncopy|oncut|onpaste|onbeforecopy"],["onselectstart|ondragstart"],["oncontextmenu","body","complete"],["oncontextmenu|onCopy"],["oncontextmenu|onmousedown|onselectstart"],["oncontextmenu|ondragstart|onselectstart|onkeydown|onmousedown"],["oncontextmenu|onkeydown"],["onkeydown"],["ondragstart|onselectstart"],["ondrop|ondragstart"],["onselectstart|ondragstart|oncontextmenu"],["oncontextmenu|ondragstart"],["onmousemove|ondragstart|onselectstart|oncontextmenu","body"],["oncontextmenu","body"],["onselectstart|ondragstart|onmousedown|onkeydown|oncontextmenu","body"],["oncontextmenu|onselectstart|ondragstart|onclick"],["style","div#novelBoby","stay"],["oncontextmenu|onMouseDown|style"],["ondragstart|oncontextmenu"],["onContextMenu","body"],["onkeydown|oncontextmenu","body"],["oncontextmenu|oncopy"],["oncontextmenu|onselectstart|ondragstart|oncut|oncopy","div.contentContainer, div.content","stay"],["oncontextmenu|onselectstart|style","#body_game"],["oncontextmenu|oncopy|ontouchstart","body"],["oncontextmenu|onselectstart|onselect|ondragstart|ondrag","body"],["oncontextmenu|ondragstart|onselectstart","body"],["oncontextmenu|onselectstart|onmousedown","body"],["oncopy|oncontextmenu|onselectstart|onselect|ondragstart|ondrag|onbeforeprint|onafterprint","body"],["oncontextmenu|ondragstart|ondrop|onselectstart"],["oncontextmenu|onselectstart","body"],["oncontextmenu|onDragStart|onSelectStart"],["oncontextmenu|ondragstart|onselectstart|onkeydown|oncopy|oncut"],["oncopy|oncontextmenu","body"],["oncontextmenu|ondragstart|oncopy|oncut",".select-none","stay"],["oncontextmenu|ondragstart|onselectstart|onselect|oncopy|onbeforecopy|onkeydown|onunload"],["oncontextmenu|onDragStart|onselectstart"],["onselectstart|oncontextmenu","body"],["oncontextmenu|onkeydown|onselectstart","body"],["oncopy|oncontextmenu|oncut|onpaste","input"],["oncontextmenu|oncopy|onselectstart"],["onbeforecopy|oncontextmenu|oncopy|ondragstart|onmouseup|onselect|onselectstart"],["oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart|style","body"],["style","body[style=\"user-select: none;\"]","stay"],["oncopy|oncut|onselectstart|style|unselectable","body","stay"],["oncontextmenu|onselectstart|oncut|oncopy"],["oncontextmenu|ondragstart|onselect"],["onpaste","#tr_mesaj > td > .text-input.validate\\[required\\]"],["oncontextmenu|onkeydown|onselectstart"],["oncontextmenu","#VdoPlayerDiv"],["oncontextmenu","a#download_link","stay"],["oncontextmenu","html"],["oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart|onselect|oncopy|onbeforecopy|onmouseup"],["onContextmenu|onMouseDown|onSelectStart"],["oncontextmenu|onmousedown|onselectstart",".all-lyrics"],["oncontextmenu|ondragstart|onselectstart","body","complete"],["oncontextmenu","img[oncontextmenu=\"return false;\"]","stay"],["onselectstart","body"],["onclick","[onclick=\"myFunction()\"]"]];

const hostnamesMap = new Map([["neilpatel.com",0],["press.princeton.edu",1],["hesapkurdu.com",2],["hoy.es",3],["nulled.life",4],["liveonsat.com",4],["ligowiec.net",4],["radio5.com.pl",4],["romet.pl",4],["sat-charts.eu",4],["skionline.pl",4],["trentino.pl",4],["pcpobierz.pl",4],["animeunity.it",4],["megawypas.com",4],["meteo.org.pl",4],["banglainsider.com",4],["listatv.pl",4],["megatube.xxx",4],["elektro-plast.com.pl",4],["pluspremieres.nz",4],["sp.uta-net.com",4],["adnan-tech.com",4],["nzbstars.com",4],["nogizaka46.com",4],["suedkurier.de",4],["utamap.com",4],["hienzo.com",4],["debeste.de",4],["courseware.cemc.uwaterloo.ca",4],["sekai-kabuka.com",4],["daum.net",4],["fraudnavi.com",4],["zdravenportal.eu",4],["wasza-farma.pl",4],["wouterplanet.com",4],["goalup.live",4],["promotor-poz.kylos.pl",4],["img999.com",4],["wattpad.com",4],["articlesmania.me",4],["aksensei.com",4],["aepos.ap.gov.in",4],["mocah.org",4],["matzoo.pl",4],["dropgalaxy.com",4],["warning.or.kr",4],["terramirabilis.ro",4],["ebc.com.br",5],["pandurul.ro",5],["livetennis.it",6],["djelfa.info",6],["virpe.com",6],["seoul.cs.land.to",6],["utorrentgamesps2.blogspot.com",6],["book.zongheng.com",6],["shumilou.com",6],["virpe.cc",6],["singingdalong.blogspot.com",7],["neobux.com",7],["dba-oracle.com",7],["giromarilia.com.br",7],["northumberland-walks.co.uk",7],["foodviva.com",7],["shushan.zhangyue.net",7],["elahmad.com",7],["novelpia.com",7],["epitesti.ro",7],["uwayapply.com",7],["apornstories.com",8],["filmesonlinex.co",8],["j-lyric.net",9],["utaten.com",9],["as-selection.net",9],["tohkaishimpo.com",9],["iwanichi.co.jp",9],["runningnews.gr",10],["zerodot1.gitlab.io",10],["mainframegurukul.com",10],["clasicotas.org",10],["nostracasa.com.br",10],["enjoytaiwan.co.kr",10],["tercihiniyap.net",10],["gukjenews.com",10],["insurance-corporate.blogspot.com",11],["gezimanya.com",12],["quadrinhoseroticos.net",12],["cepuluh.com",13],["ke-1.com",13],["tekloggers.com",13],["theitaliantimes.it",14],["hebrew4christians.com",15],["musixmatch.com",16],["ryuryuko.blog90.fc2.com",17],["mdpr.jp",18],["japan-academy-prize.jp",18],["citpekalongan.com",19],["gembel9.xyz",19],["atribuna.com.br",20],["newsforbolly.org",21],["coinurl.net",21],["diariodoiguacu.com.br",22],["metropoliaztm.pl",23],["quotev.com",24],["nekopoi.web.id",25],["sopot.net",26],["tv-asahi.co.jp",27],["erovideoseek.com",27],["kyonyuquest.com",27],["katosatoshi.jp",27],["techoreels.com",27],["kuroko-analyze.com",27],["gats.io",27],["promotor.pl",27],["bikesell.co.kr",27],["news.dwango.jp",27],["urbharat.xyz",27],["animatedshows.to",27],["miraculous.to",27],["cdn.gamemonetize.com",27],["aztravels.net",27],["downfile.site",27],["memangbau.com",27],["trangchu.news",27],["umk.co.jp",27],["streamservicehd.click",27],["eplayer.click",27],["olacast.live",27],["kamerabudaya.com",28],["visaonoticias.com",29],["alphapolis.co.jp",30],["money-sense.club",31],["kanjukulive.com",32],["radichubu.jp",33],["texte.work",34],["railf.jp",35],["spectank.jp",35],["magnet-novels.com",36],["mhwg.org",37],["j-island.net",38],["anauk.net",39],["bonobono.com",40],["rdsong.com",40],["poplinks.idolmaster-official.jp",41],["bdb.com.pl",42],["cablegratis.online",43],["kijyomatome-ch.com",44],["globaledu.jp",44],["loveplay123.com",45],["th-world.com",46],["korona.co.jp",47],["novelism.jp",48],["myhtebooks.com",49],["pixnet.net",50],["apk1s.com",51],["foxaholic.com",52],["auth.alipay.com",53],["30edu.com.cn",54],["doc.mbalib.com",55],["perangkatguruku.com",56],["naaree.com",57],["gardenia.net",58],["c315.cn",59],["uemeds.cn",60],["pttws.ptt.gov.tr",61],["leeyiding.com",62],["veblr.com",63],["thememypc.net",64],["gakki.me",66],["tunegate.me",67],["oricon.co.jp",68],["lover93.net",69],["fantasytagtree.com",70],["selfstudys.com",71],["myfreemp3juices.cc",72]]);

const entitiesMap = new Map([["pelispedia",4],["vinaurl",21],["ask4movie",65]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function removeAttr(
    token = '',
    selector = '',
    behavior = ''
) {
    if ( typeof token !== 'string' ) { return; }
    if ( token === '' ) { return; }
    const tokens = token.split(/\s*\|\s*/);
    if ( selector === '' ) {
        selector = `[${tokens.join('],[')}]`;
    }
    let timer;
    const rmattr = ( ) => {
        timer = undefined;
        try {
            const nodes = document.querySelectorAll(selector);
            for ( const node of nodes ) {
                for ( const attr of tokens ) {
                    node.removeAttribute(attr);
                }
            }
        } catch(ex) {
        }
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
        timer = self.requestIdleCallback(rmattr, { timeout: 17 });
    };
    const start = ( ) => {
        rmattr();
        if ( /\bstay\b/.test(behavior) === false ) { return; }
        const observer = new MutationObserver(mutationHandler);
        observer.observe(document, {
            attributes: true,
            attributeFilter: tokens,
            childList: true,
            subtree: true,
        });
    };
    runAt(( ) => {
        start();
    }, /\bcomplete\b/.test(behavior) ? 'idle' : 'interactive');
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1,
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
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
    }
    const self = globalThis;
    const safe = {
        'Array_from': Array.from,
        'Error': self.Error,
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
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
        'JSON': self.JSON,
        'JSON_parseFn': self.JSON.parse,
        'JSON_stringifyFn': self.JSON.stringify,
        'JSON_parse': (...args) => safe.JSON_parseFn.call(safe.JSON, ...args),
        'JSON_stringify': (...args) => safe.JSON_stringifyFn.call(safe.JSON, ...args),
        'log': console.log.bind(console),
        uboLog(...args) {
            if ( scriptletGlobals.has('canDebug') === false ) { return; }
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
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
    try { removeAttr(...argsList[i]); }
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
    return uBOL_removeAttr();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_removeAttr = cloneInto([
            [ '(', uBOL_removeAttr.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_removeAttr);
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
    delete page.uBOL_removeAttr;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
