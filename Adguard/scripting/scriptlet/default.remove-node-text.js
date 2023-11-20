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

const argsList = [["script","/getAdUnitPath|\\.then\\(eval\\)|DisplayAcceptableAdIfAdblocked|,eval\\)\\)\\)\\;|\\.join\\(\\'\\'\\)\\}\\;/"],["script","/==undefined.*body/"],["script","style"],["script","Number.isSafeInteger"],["script","/style:last-of-type|:empty|APKM\\..+?\\.innerHTML/"],["script","Reflect"],["script","document.write"],["script","self == top"],["script","mdp"],["script","exdynsrv"],["script","/onerror|adsbygoogle|notice|while/i"],["script","/adb/i"],["script","FingerprintJS"],["script","/check_if_blocking|XMLHttpRequest|adkiller/"],["script","/document\\.createElement|\\.banner-in/"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|adblock/"],["script","myreadCookie"],["script","ExoLoader"],["script","adblock"],["script","homad"],["script","alert"],["script","/\\.onerror|document\\.write|Error|sbmt|isMobileBrowser|navigator\\.userAgent|InstallTrigger|userTimezoneOffset=userDate|div-gpt-ad-dropgalaxycom/"],["script","window.open"],["script","break;case $"],["script","Adblock"],["script","onerror"],["script","toast"],["script","break;case $."],["style","text-decoration"],["script","/replace|adsbygoogle/"],["script","htmls"],["script","/\\[\\'push\\'\\]/"],["script","popunder"],["script","googlesyndication"],["script","/adblock|location\\.replace/"],["script","numberPages"],["script","KCgpPT57bGV0IGU"],["script","adBlockDetected"],["script","replaceChild"],["#text","/^AD:/"],["script","checkifscript"],["script","/window\\.location|Adblock/"],["script","/ConsoleBan|alert|AdBlocker/"],["script","AdBlocker"],["script","adb_detected"],["script","adb"],["script","await fetch"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/^Advertisement$/"],["script","navigator.brave"],["script","zfgloaded"],["script","ai_adb"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","/window\\.open|window\\.location\\.href|document\\.addEventListener|\\$\\(document\\)\\.ready.*show/"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/modal|popupads/"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","ad_block"],["script","app_checkext"],["script","shown_at"],["script","clientHeight"],["script","/url_key|adHtml/"],["script","pop.target"],["script","axios"],["script","ad block"],["script","/typeof [a-z]\\.cmd\\.unshift/","condition","cmd.unshift"],["script","admiral"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","queue.addFile"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/adblock/i"],["script","/adshow/ad"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","AaDetector"],["script","AdBlock"],["script","antiAdBlockerHandler"],["script","Symbol.iterator"],["script","catch"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","AdBlock Detected"],["script","detectAdBlock"],["script","deblocker"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","AdbModel"],["script","document.head.appendChild"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/RegExp\\(\\'/","condition","RegExp"]];

const hostnamesMap = new Map([["teltarif.de",0],["100percentfedup.com",1],["thegatewaypundit.com",1],["apkmirror.com",[4,37]],["yts.mx",6],["pinsystem.co.uk",8],["downfile.site",8],["trangchu.news",8],["3dmodelshare.org",8],["nulleb.com",8],["thecustomrom.com",8],["bingotingo.com",8],["techacode.com",8],["plc247.com",8],["freepasses.org",8],["tomarnarede.pt",8],["next-episode.net",10],["eporner.com",11],["sinvida.me",12],["exeo.app",12],["streamnoads.com",12],["searchenginereports.net",13],["oko.sh",14],["washingtonpost.com",15],["bigbtc.win",16],["cryptofun.space",16],["gosexpod.com",17],["sexo5k.com",18],["truyen-hentai.com",18],["theshedend.com",19],["doods.pro",19],["ds2play.com",19],["zeroupload.com",19],["streamvid.net",19],["securenetsystems.net",19],["miniwebtool.com",19],["bchtechnologies.com",19],["spiegel.de",20],["appnee.com",21],["smutty.com",23],["down.dataaps.com",23],["123enjoy.net",24],["kiemlua.com",25],["makefreecallsonline.com",26],["androjungle.com",26],["bookszone.in",26],["drakescans.com",26],["shortix.co",26],["msonglyrics.com",26],["mphealth.online",26],["app-sorteos.com",26],["appsbull.com",26],["diudemy.com",26],["maqal360.com",26],["bokugents.com",26],["aylink.co",27],["ak.sv",28],["atglinks.com",28],["filebox.click",28],["isaidub3.co",28],["playertv.net",28],["reset-scans.com",30],["kienthucrangmieng.com",31],["coin-free.com",31],["tremamnon.com",31],["btc25.org",31],["tron-free.com",31],["btcbitco.in",31],["btcsatoshi.net",31],["cempakajaya.com",31],["crypto4yu.com",31],["gainl.ink",31],["manofadan.com",31],["readbitcoin.org",31],["wiour.com",31],["bitsmagic.fun",31],["ourcoincash.xyz",31],["hynews.biz",31],["everia.club",32],["backfirstwo.site",32],["jewelavid.com",32],["nizarstream.com",32],["freeroms.com",33],["soap2day-online.com",33],["beatsnoop.com",34],["fetchpik.com",34],["hackerranksolution.in",34],["austiblox.net",35],["teachoo.com",36],["genshinlab.com",37],["fourfourtwo.co.kr",37],["interfootball.co.kr",37],["a-ha.io",37],["cboard.net",37],["mobilitytv.co.kr",37],["mememedia.co.kr",37],["newautopost.co.kr",37],["tvreport.co.kr",37],["tenbizt.com",37],["jjang0u.com",37],["joongdo.co.kr",37],["viva100.com",37],["dotkeypress.kr",37],["viewcash.co.kr",37],["tripplus.co.kr",37],["enterdiary.com",37],["mtodayauto.com",37],["hotplacehunter.co.kr",37],["mystylezip.com",37],["majorgeeks.com",37],["poro.gg",37],["maple.gg",37],["lolchess.gg",37],["dak.gg",37],["cryptowidgets.net",38],["freethemesy.com",[39,40]],["djxmaza.in",41],["miuiflash.com",41],["thecubexguide.com",41],["carsmania.net",42],["carstopia.net",42],["coinsvalue.net",42],["cookinguide.net",42],["freeoseocheck.com",42],["makeupguide.net",42],["topsporter.net",43],["sportshub.to",43],["7xm.xyz",44],["fastupload.io",44],["azmath.info",44],["tii.la",45],["easymc.io",46],["yunjiema.top",46],["hacoos.com",47],["zefoy.com",48],["vidello.net",49],["resizer.myct.jp",50],["gametohkenranbu.sakuraweb.com",51],["jisakuhibi.jp",52],["rank1-media.com",52],["lifematome.blog",53],["fm.sekkaku.net",54],["free-avx.jp",55],["dvdrev.com",56],["betweenjpandkr.blog",57],["nft-media.net",58],["ghacks.net",59],["leak.sx",60],["pornleaks.in",60],["songspk2.info",61],["truyentranhfull.net",62],["iwatchfriendsonline.net",64],["nectareousoverelate.com",65],["suaurl.com",66],["khoaiphim.com",67],["haafedk2.com",68],["fordownloader.com",68],["jovemnerd.com.br",69],["nicomanga.com",70],["totalcsgo.com",71],["vivamax.asia",72],["manysex.com",73],["gaminginfos.com",74],["tinxahoivn.com",75],["forums-fastunlock.com",76],["automoto.it",77],["sekaikomik.bio",78],["codelivly.com",79],["ophim.vip",80],["touguatize.monster",81],["novelhall.com",82],["hes-goal.net",83],["allmusic.com",84],["androidpolice.com",84],["calculator-online.net",84],["cattime.com",84],["collider.com",84],["comingsoon.net",84],["dogtime.com",84],["dualshockers.com",84],["freeconvert.com",84],["gfinityesports.com",84],["givemesport.com",84],["howtogeek.com",84],["insider-gaming.com",84],["liveandletsfly.com",84],["makeuseof.com",84],["milestomemories.com",84],["momtastic.com",84],["nordot.app",84],["qtoptens.com",84],["screenrant.com",84],["sherdog.com",84],["superherohype.com",84],["thefashionspot.com",84],["timesnews.net",84],["xda-developers.com",84],["chaptercheats.com",84],["cheatsheet.com",85],["gamerant.com",85],["cbr.com",85],["biblestudytools.com",86],["christianheadlines.com",86],["ibelieve.com",86],["kuponigo.com",87],["kimcilonly.site",88],["kimcilonly.link",88],["webhostingpost.com",89],["tophostingapp.com",89],["digitalmarktrend.com",89],["cryptoearns.com",90],["inxxx.com",91],["ipaspot.app",92],["embedwish.com",93],["filelions.live",93],["leakslove.net",93],["jenismac.com",94],["vxetable.cn",95],["snapwordz.com",96],["toolxox.com",96],["rl6mans.com",96],["idol69.net",96],["usandoapp.com",97],["fazercurriculo.online",97],["plumbersforums.net",98],["123movies800.online",99],["gulio.site",100],["mediaset.es",101],["izlekolik.net",102],["donghuaworld.com",103],["letsdopuzzles.com",104],["nopay2.info",105],["tainio-mania.online",105],["hes-goals.io",106],["sigmalinks.in",107],["rediff.com",108],["iconicblogger.com",109],["dzapk.com",110],["darknessporn.com",111],["familyporner.com",111],["freepublicporn.com",111],["pisshamster.com",111],["punishworld.com",111],["xanimu.com",111],["tekkenmods.com",112],["pig69.com",113],["porninblack.com",114],["javhdo.net",115],["eroticmoviesonline.me",116],["teleclub.xyz",117],["sugarona.com",118],["nishankhatri.xyz",118],["highkeyfinance.com",118],["ecamrips.com",119],["showcamrips.com",119],["botcomics.com",120],["cefirates.com",120],["chandlerorchards.com",120],["comicleaks.com",120],["marketdata.app",120],["monumentmetals.com",120],["tapmyback.com",120],["ping.gg",120],["revistaferramental.com.br",120],["hawpar.com",120],["alpacafinance.org",[120,121]],["nookgaming.com",120],["enkeleksamen.no",120],["kvest.ee",120],["creatordrop.com",120],["panpots.com",120],["cybernetman.com",120],["bitdomain.biz",120],["gerardbosch.xyz",120],["fort-shop.kiev.ua",120],["accuretawealth.com",120],["resourceya.com",120],["tracktheta.com",120],["tt.live",121],["future-fortune.com",121],["abhijith.page",121],["madrigalmaps.com",121],["adventuretix.com",121],["panprices.com",122],["intercity.technology",122],["freelancer.taxmachine.be",122],["adria.gg",122],["fjlaboratories.com",122],["tapewithadblock.org",123]]);

const entitiesMap = new Map([["1337x",2],["kimcartoon",3],["pahe",5],["soap2day",5],["hqq",7],["waaw",7],["pixhost",9],["viprow",12],["dood",19],["doodstream",19],["dooood",19],["dropgalaxy",[22,28]],["shrinke",23],["shrinkme",23],["eplayvid",24],["poplinks",26],["cricstream",28],["o2tvseries",28],["o2tvseriesz",28],["kickass",29],["watchomovies",33],["actvid",63]]);

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
