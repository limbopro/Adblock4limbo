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

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_removeNodeText = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["script","/getAdUnitPath|\\.then\\(eval\\)|DisplayAcceptableAdIfAdblocked|,eval\\)\\)\\)\\;|\\.join\\(\\'\\'\\)\\}\\;/"],["script","/==undefined.*body/"],["script","style"],["script","Number.isSafeInteger"],["script","/style:last-of-type|:empty|APKM\\..+?\\.innerHTML/"],["script","Reflect"],["script","document.write"],["script","self == top"],["script","exdynsrv"],["script","/onerror|adsbygoogle|notice|while/i"],["script","/adb/i"],["script","FingerprintJS"],["script","/check_if_blocking|XMLHttpRequest|adkiller/"],["script","mdp"],["script","/document\\.createElement|\\.banner-in/"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|adblock/"],["script","/myreadCookie|my_inter/"],["script","ExoLoader"],["script","adblock"],["script","homad"],["script","fakeAd"],["script","alert"],["script","window.open"],["script","break;case $"],["script","Adblock"],["script","onerror"],["script","break;case $."],["style","text-decoration"],["script","/replace|adsbygoogle/"],["script","htmls"],["script","/\\[\\'push\\'\\]/"],["script","googlesyndication"],["script","numberPages"],["script","adBlockDetected"],["script","/window\\.location|Adblock/"],["script","/ConsoleBan|alert|AdBlocker/"],["script","AdBlocker"],["script","adb_detected"],["script","adb"],["script","await fetch"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/^Advertisement$/"],["script","navigator.brave"],["script","zfgloaded"],["script","ai_adb"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","/window\\.open|window\\.location\\.href|document\\.addEventListener|\\$\\(document\\)\\.ready.*show/"],["script","/typeof [a-z]\\.cmd\\.unshift/","condition","cmd.unshift"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/modal|popupads/"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","popunder"],["script","ad_block"],["script","app_checkext"],["script","shown_at"],["script","clientHeight"],["script","/url_key|adHtml/"],["script","pop.target"],["script","axios"],["script","ad block"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/adblock/i"],["script","hasAdblock"],["script","/adshow/ad"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","admiral"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","AaDetector"],["script","AdBlock"],["script","antiAdBlockerHandler"],["script","Symbol.iterator"],["script","catch"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","AdBlock Detected"],["script","detectAdBlock"],["script","deblocker"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","/,\\'gger\\',/"]];

const hostnamesMap = new Map([["teltarif.de",0],["100percentfedup.com",1],["thegatewaypundit.com",1],["apkmirror.com",4],["yts.mx",6],["next-episode.net",9],["eporner.com",10],["sinvida.me",11],["exeo.app",11],["streamnoads.com",11],["searchenginereports.net",12],["trangchu.news",13],["thecustomrom.com",13],["techacode.com",13],["plc247.com",13],["freepasses.org",13],["oko.sh",14],["washingtonpost.com",15],["bigbtc.win",16],["cryptofun.space",16],["gosexpod.com",17],["sexo5k.com",18],["truyen-hentai.com",18],["theshedend.com",19],["zeroupload.com",19],["securenetsystems.net",19],["miniwebtool.com",19],["bchtechnologies.com",19],["spiegel.de",20],["mynewsmedia.co",21],["revadvert.com",21],["appnee.com",22],["smutty.com",23],["down.dataaps.com",23],["123enjoy.net",24],["kiemlua.com",25],["makefreecallsonline.com",26],["androjungle.com",26],["bookszone.in",26],["shortix.co",26],["msonglyrics.com",26],["mphealth.online",26],["app-sorteos.com",26],["appsbull.com",26],["diudemy.com",26],["maqal360.com",26],["bokugents.com",26],["ak.sv",27],["atglinks.com",27],["filebox.click",27],["isaidub3.co",27],["playertv.net",27],["reset-scans.com",29],["kienthucrangmieng.com",30],["coin-free.com",30],["btc25.org",30],["btcbitco.in",30],["btcsatoshi.net",30],["cempakajaya.com",30],["crypto4yu.com",30],["gainl.ink",30],["manofadan.com",30],["readbitcoin.org",30],["wiour.com",30],["bitsmagic.fun",30],["ourcoincash.xyz",30],["hynews.biz",30],["everia.club",31],["backfirstwo.site",31],["jewelavid.com",31],["nizarstream.com",31],["beatsnoop.com",32],["fetchpik.com",32],["teachoo.com",33],["cryptowidgets.net",34],["carsmania.net",35],["carstopia.net",35],["coinsvalue.net",35],["cookinguide.net",35],["freeoseocheck.com",35],["makeupguide.net",35],["topsporter.net",36],["sportshub.to",36],["7xm.xyz",37],["fastupload.io",37],["tii.la",38],["easymc.io",39],["yunjiema.top",39],["hacoos.com",40],["zefoy.com",41],["vidello.net",42],["resizer.myct.jp",43],["gametohkenranbu.sakuraweb.com",44],["jisakuhibi.jp",45],["rank1-media.com",45],["lifematome.blog",46],["fm.sekkaku.net",47],["free-avx.jp",48],["dvdrev.com",49],["betweenjpandkr.blog",50],["nft-media.net",51],["ghacks.net",52],["leak.sx",53],["pornleaks.in",53],["songspk2.info",54],["truyentranhfull.net",55],["iwatchfriendsonline.net",57],["nectareousoverelate.com",58],["suaurl.com",59],["allmusic.com",60],["androidpolice.com",60],["calculator-online.net",60],["cattime.com",60],["collider.com",60],["comingsoon.net",60],["dogtime.com",60],["dualshockers.com",60],["freeconvert.com",60],["givemesport.com",60],["howtogeek.com",60],["liveandletsfly.com",60],["makeuseof.com",60],["milestomemories.com",60],["momtastic.com",60],["nordot.app",60],["qtoptens.com",60],["screenrant.com",60],["sherdog.com",60],["superherohype.com",60],["thefashionspot.com",60],["timesnews.net",60],["xda-developers.com",60],["khoaiphim.com",61],["haafedk2.com",62],["fordownloader.com",62],["jovemnerd.com.br",63],["nicomanga.com",64],["totalcsgo.com",65],["vivamax.asia",66],["manysex.com",67],["gaminginfos.com",68],["tinxahoivn.com",69],["freeroms.com",70],["forums-fastunlock.com",71],["automoto.it",72],["sekaikomik.bio",73],["codelivly.com",74],["ophim.vip",75],["touguatize.monster",76],["novelhall.com",77],["hes-goal.net",78],["biblestudytools.com",79],["kuponigo.com",80],["kimcilonly.site",81],["kimcilonly.link",81],["cryptoearns.com",82],["inxxx.com",83],["ipaspot.app",84],["embedwish.com",85],["filelions.live",85],["leakslove.net",85],["jenismac.com",86],["vxetable.cn",87],["snapwordz.com",88],["toolxox.com",88],["rl6mans.com",88],["idol69.net",88],["sabornutritivo.com",89],["usandoapp.com",90],["fazercurriculo.online",90],["plumbersforums.net",91],["123movies800.online",92],["cbr.com",93],["gamerant.com",93],["gulio.site",94],["mediaset.es",95],["izlekolik.net",96],["donghuaworld.com",97],["letsdopuzzles.com",98],["nopay2.info",99],["tainio-mania.online",99],["hes-goals.io",100],["sigmalinks.in",101],["rediff.com",102],["iconicblogger.com",103],["dzapk.com",104],["darknessporn.com",105],["familyporner.com",105],["freepublicporn.com",105],["pisshamster.com",105],["punishworld.com",105],["xanimu.com",105],["tekkenmods.com",106],["pig69.com",107],["guys01gaming.com",107],["guys01gaming.workers.dev",107],["porninblack.com",108],["botcomics.com",109],["cefirates.com",109],["chandlerorchards.com",109],["comicleaks.com",109],["marketdata.app",109],["monumentmetals.com",109],["tapmyback.com",109],["ping.gg",109],["revistaferramental.com.br",109],["hawpar.com",109],["alpacafinance.org",[109,110]],["nookgaming.com",109],["enkeleksamen.no",109],["kvest.ee",109],["creatordrop.com",109],["panpots.com",109],["cybernetman.com",109],["bitdomain.biz",109],["gerardbosch.xyz",109],["fort-shop.kiev.ua",109],["accuretawealth.com",109],["resourceya.com",109],["tracktheta.com",109],["tt.live",110],["future-fortune.com",110],["abhijith.page",110],["madrigalmaps.com",110],["adventuretix.com",110],["panprices.com",111],["intercity.technology",111],["freelancer.taxmachine.be",111],["adria.gg",111],["fjlaboratories.com",111],["tapewithadblock.org",112],["djxmaza.in",113],["miuiflash.com",113],["thecubexguide.com",113]]);

const entitiesMap = new Map([["1337x",2],["kimcartoon",3],["pahe",5],["soap2day",5],["hqq",7],["waaw",7],["pixhost",8],["viprow",11],["eplayvid",24],["poplinks",26],["cricstream",27],["dropgalaxy",27],["o2tvseries",27],["o2tvseriesz",27],["kickass",28],["actvid",56]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function removeNodeText(
    nodeName,
    condition,
    ...extraArgs
) {
    replaceNodeTextFn(nodeName, '', '', 'condition', condition || '', ...extraArgs);
}

function replaceNodeTextFn(
    nodeName = '',
    pattern = '',
    replacement = ''
) {
    const safe = safeSelf();
    const reNodeName = safe.patternToRegex(nodeName, 'i', true);
    const rePattern = safe.patternToRegex(pattern, 'gms');
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    const shouldLog = scriptletGlobals.has('canDebug') && extraArgs.log || 0;
    const reCondition = safe.patternToRegex(extraArgs.condition || '', 'gms');
    const stop = (takeRecord = true) => {
        if ( takeRecord ) {
            handleMutations(observer.takeRecords());
        }
        observer.disconnect();
        if ( shouldLog !== 0 ) {
            safe.uboLog(`replace-node-text-core.fn: quitting "${pattern}" => "${replacement}"`);
        }
    };
    let sedCount = extraArgs.sedCount || 0;
    const handleNode = node => {
        const before = node.textContent;
        if ( safe.RegExp_test.call(rePattern, before) === false ) { return true; }
        if ( safe.RegExp_test.call(reCondition, before) === false ) { return true; }
        const after = pattern !== ''
            ? before.replace(rePattern, replacement)
            : replacement;
        node.textContent = after;
        if ( shouldLog !== 0 ) {
            safe.uboLog('replace-node-text.fn before:\n', before);
            safe.uboLog('replace-node-text.fn after:\n', after);
        }
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
            if ( handleNode(node) ) { continue; }
            stop(); break;
        }
        if ( shouldLog !== 0 ) {
            safe.uboLog(`replace-node-text-core.fn ${count} nodes present before installing mutation observer`);
        }
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
        'JSON_parse': self.JSON.parse.bind(self.JSON),
        'JSON_stringify': self.JSON.stringify.bind(self.JSON),
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
    try { removeNodeText(...argsList[i]); }
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

const targetWorld = 'ISOLATED';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_removeNodeText();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_removeNodeText = cloneInto([
            [ '(', uBOL_removeNodeText.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_removeNodeText);
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
    delete page.uBOL_removeNodeText;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
