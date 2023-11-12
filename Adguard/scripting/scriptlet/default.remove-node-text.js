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

const argsList = [["script","/getAdUnitPath|\\.then\\(eval\\)|DisplayAcceptableAdIfAdblocked|,eval\\)\\)\\)\\;|\\.join\\(\\'\\'\\)\\}\\;/"],["script","/==undefined.*body/"],["script","style"],["script","Number.isSafeInteger"],["script","/style:last-of-type|:empty|APKM\\..+?\\.innerHTML/"],["script","Reflect"],["script","document.write"],["script","self == top"],["script","exdynsrv"],["script","/onerror|adsbygoogle|notice|while/i"],["script","/adb/i"],["script","FingerprintJS"],["script","/check_if_blocking|XMLHttpRequest|adkiller/"],["script","mdp"],["script","/document\\.createElement|\\.banner-in/"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|adblock/"],["script","/myreadCookie|my_inter/"],["script","ExoLoader"],["script","adblock"],["script","homad"],["script","alert"],["script","window.open"],["script","break;case $"],["script","Adblock"],["script","onerror"],["script","toast"],["script","break;case $."],["style","text-decoration"],["script","/replace|adsbygoogle/"],["script","htmls"],["script","/\\[\\'push\\'\\]/"],["script","popunder"],["script","googlesyndication"],["script","/adblock|location\\.replace/"],["script","numberPages"],["script","KCgpPT57bGV0IGU"],["script","adBlockDetected"],["script","replaceChild"],["#text","/^AD:/"],["script","documnet.write"],["script","/window\\.location|Adblock/"],["script","/ConsoleBan|alert|AdBlocker/"],["script","AdBlocker"],["script","adb_detected"],["script","adb"],["script","await fetch"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/^Advertisement$/"],["script","navigator.brave"],["script","zfgloaded"],["script","ai_adb"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","/window\\.open|window\\.location\\.href|document\\.addEventListener|\\$\\(document\\)\\.ready.*show/"],["script","/typeof [a-z]\\.cmd\\.unshift/","condition","cmd.unshift"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/modal|popupads/"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","ad_block"],["script","app_checkext"],["script","shown_at"],["script","clientHeight"],["script","/url_key|adHtml/"],["script","pop.target"],["script","axios"],["script","ad block"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","queue.addFile"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/adblock/i"],["script","/adshow/ad"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","admiral"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","AaDetector"],["script","AdBlock"],["script","antiAdBlockerHandler"],["script","Symbol.iterator"],["script","catch"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","AdBlock Detected"],["script","detectAdBlock"],["script","deblocker"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","document.head.appendChild"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","/,\\'gger\\',/"]];

const hostnamesMap = new Map([["teltarif.de",0],["100percentfedup.com",1],["thegatewaypundit.com",1],["apkmirror.com",[4,36]],["yts.mx",6],["next-episode.net",9],["eporner.com",10],["sinvida.me",11],["exeo.app",11],["streamnoads.com",11],["searchenginereports.net",12],["trangchu.news",13],["3dmodelshare.org",13],["nulleb.com",13],["thecustomrom.com",13],["bingotingo.com",13],["techacode.com",13],["plc247.com",13],["freepasses.org",13],["tomarnarede.pt",13],["oko.sh",14],["washingtonpost.com",15],["bigbtc.win",16],["cryptofun.space",16],["gosexpod.com",17],["sexo5k.com",18],["truyen-hentai.com",18],["theshedend.com",19],["doods.pro",19],["ds2play.com",19],["zeroupload.com",19],["streamvid.net",19],["securenetsystems.net",19],["miniwebtool.com",19],["bchtechnologies.com",19],["nishankhatri.xyz",19],["spiegel.de",20],["appnee.com",21],["smutty.com",22],["down.dataaps.com",22],["123enjoy.net",23],["kiemlua.com",24],["makefreecallsonline.com",25],["androjungle.com",25],["bookszone.in",25],["drakescans.com",25],["shortix.co",25],["msonglyrics.com",25],["mphealth.online",25],["app-sorteos.com",25],["appsbull.com",25],["diudemy.com",25],["maqal360.com",25],["bokugents.com",25],["aylink.co",26],["ak.sv",27],["atglinks.com",27],["filebox.click",27],["isaidub3.co",27],["playertv.net",27],["reset-scans.com",29],["kienthucrangmieng.com",30],["coin-free.com",30],["btc25.org",30],["btcbitco.in",30],["btcsatoshi.net",30],["cempakajaya.com",30],["crypto4yu.com",30],["gainl.ink",30],["manofadan.com",30],["readbitcoin.org",30],["wiour.com",30],["bitsmagic.fun",30],["ourcoincash.xyz",30],["hynews.biz",30],["everia.club",31],["backfirstwo.site",31],["jewelavid.com",31],["nizarstream.com",31],["freeroms.com",32],["beatsnoop.com",33],["fetchpik.com",33],["austiblox.net",34],["teachoo.com",35],["genshinlab.com",36],["fourfourtwo.co.kr",36],["interfootball.co.kr",36],["a-ha.io",36],["cboard.net",36],["mobilitytv.co.kr",36],["mememedia.co.kr",36],["newautopost.co.kr",36],["tvreport.co.kr",36],["tenbizt.com",36],["jjang0u.com",36],["joongdo.co.kr",36],["viva100.com",36],["dotkeypress.kr",36],["viewcash.co.kr",36],["tripplus.co.kr",36],["enterdiary.com",36],["mtodayauto.com",36],["hotplacehunter.co.kr",36],["mystylezip.com",36],["majorgeeks.com",36],["cryptowidgets.net",37],["freethemesy.com",[38,39]],["mdn.lol",40],["carsmania.net",41],["carstopia.net",41],["coinsvalue.net",41],["cookinguide.net",41],["freeoseocheck.com",41],["makeupguide.net",41],["topsporter.net",42],["sportshub.to",42],["7xm.xyz",43],["fastupload.io",43],["tii.la",44],["easymc.io",45],["yunjiema.top",45],["hacoos.com",46],["zefoy.com",47],["vidello.net",48],["resizer.myct.jp",49],["gametohkenranbu.sakuraweb.com",50],["jisakuhibi.jp",51],["rank1-media.com",51],["lifematome.blog",52],["fm.sekkaku.net",53],["free-avx.jp",54],["dvdrev.com",55],["betweenjpandkr.blog",56],["nft-media.net",57],["ghacks.net",58],["leak.sx",59],["pornleaks.in",59],["songspk2.info",60],["truyentranhfull.net",61],["iwatchfriendsonline.net",63],["nectareousoverelate.com",64],["suaurl.com",65],["allmusic.com",66],["androidpolice.com",66],["calculator-online.net",66],["cattime.com",66],["collider.com",66],["comingsoon.net",66],["dogtime.com",66],["dualshockers.com",66],["freeconvert.com",66],["givemesport.com",66],["howtogeek.com",66],["insider-gaming.com",66],["liveandletsfly.com",66],["makeuseof.com",66],["milestomemories.com",66],["momtastic.com",66],["nordot.app",66],["qiwi.gg",66],["qtoptens.com",66],["screenrant.com",66],["sherdog.com",66],["superherohype.com",66],["thefashionspot.com",66],["timesnews.net",66],["xda-developers.com",66],["khoaiphim.com",67],["haafedk2.com",68],["fordownloader.com",68],["jovemnerd.com.br",69],["nicomanga.com",70],["totalcsgo.com",71],["vivamax.asia",72],["manysex.com",73],["gaminginfos.com",74],["tinxahoivn.com",75],["forums-fastunlock.com",76],["automoto.it",77],["sekaikomik.bio",78],["codelivly.com",79],["ophim.vip",80],["touguatize.monster",81],["novelhall.com",82],["hes-goal.net",83],["biblestudytools.com",84],["kuponigo.com",85],["kimcilonly.site",86],["kimcilonly.link",86],["webhostingpost.com",87],["tophostingapp.com",87],["digitalmarktrend.com",87],["cryptoearns.com",88],["inxxx.com",89],["ipaspot.app",90],["embedwish.com",91],["filelions.live",91],["leakslove.net",91],["jenismac.com",92],["vxetable.cn",93],["snapwordz.com",94],["toolxox.com",94],["rl6mans.com",94],["idol69.net",94],["usandoapp.com",95],["fazercurriculo.online",95],["plumbersforums.net",96],["123movies800.online",97],["cbr.com",98],["gamerant.com",98],["gulio.site",99],["mediaset.es",100],["izlekolik.net",101],["donghuaworld.com",102],["letsdopuzzles.com",103],["nopay2.info",104],["tainio-mania.online",104],["hes-goals.io",105],["sigmalinks.in",106],["rediff.com",107],["iconicblogger.com",108],["dzapk.com",109],["darknessporn.com",110],["familyporner.com",110],["freepublicporn.com",110],["pisshamster.com",110],["punishworld.com",110],["xanimu.com",110],["tekkenmods.com",111],["pig69.com",112],["porninblack.com",113],["javhdo.net",114],["eroticmoviesonline.me",115],["teleclub.xyz",116],["ecamrips.com",117],["showcamrips.com",117],["botcomics.com",118],["cefirates.com",118],["chandlerorchards.com",118],["comicleaks.com",118],["marketdata.app",118],["monumentmetals.com",118],["tapmyback.com",118],["ping.gg",118],["revistaferramental.com.br",118],["hawpar.com",118],["alpacafinance.org",[118,119]],["nookgaming.com",118],["enkeleksamen.no",118],["kvest.ee",118],["creatordrop.com",118],["panpots.com",118],["cybernetman.com",118],["bitdomain.biz",118],["gerardbosch.xyz",118],["fort-shop.kiev.ua",118],["accuretawealth.com",118],["resourceya.com",118],["tracktheta.com",118],["tt.live",119],["future-fortune.com",119],["abhijith.page",119],["madrigalmaps.com",119],["adventuretix.com",119],["panprices.com",120],["intercity.technology",120],["freelancer.taxmachine.be",120],["adria.gg",120],["fjlaboratories.com",120],["tapewithadblock.org",121],["djxmaza.in",122],["miuiflash.com",122],["thecubexguide.com",122]]);

const entitiesMap = new Map([["1337x",2],["kimcartoon",3],["pahe",5],["soap2day",5],["hqq",7],["waaw",7],["pixhost",8],["viprow",11],["dood",19],["doodstream",19],["dooood",19],["shrinke",22],["shrinkme",22],["eplayvid",23],["poplinks",25],["cricstream",27],["dropgalaxy",27],["o2tvseries",27],["o2tvseriesz",27],["kickass",28],["watchomovies",32],["actvid",62]]);

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
    const reCondition = safe.patternToRegex(extraArgs.condition || '', 'ms');
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
        reCondition.lastIndex = 0;
        if ( safe.RegExp_test.call(reCondition, before) === false ) { return true; }
        rePattern.lastIndex = 0;
        if ( safe.RegExp_test.call(rePattern, before) === false ) { return true; }
        rePattern.lastIndex = 0;
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
