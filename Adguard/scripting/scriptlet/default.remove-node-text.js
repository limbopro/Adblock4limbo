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

const argsList = [["script","/getAdUnitPath|\\.then\\(eval\\)|DisplayAcceptableAdIfAdblocked|,eval\\)\\)\\)\\;|\\.join\\(\\'\\'\\)\\}\\;/"],["script","/==undefined.*body/"],["script","style"],["script","Number.isSafeInteger"],["script","/style:last-of-type|:empty|APKM\\..+?\\.innerHTML/"],["script","Reflect"],["script","document.write"],["script","self == top"],["script","mdp"],["script","exdynsrv"],["script","/onerror|adsbygoogle|notice|while/i"],["script","/adb/i"],["script","FingerprintJS"],["script","/check_if_blocking|XMLHttpRequest|adkiller/"],["script","/document\\.createElement|\\.banner-in/"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|adblock/"],["script","myreadCookie"],["script","ExoLoader"],["script","adblock"],["script","homad"],["script","alert"],["script","/\\.onerror|document\\.write|Error|sbmt|isMobileBrowser|navigator\\.userAgent|InstallTrigger|userTimezoneOffset=userDate|div-gpt-ad-dropgalaxycom/"],["script","window.open"],["script","break;case $"],["script","Adblock"],["script","onerror"],["script","toast"],["script","break;case $."],["style","text-decoration"],["script","/replace|adsbygoogle/"],["script","htmls"],["script","checkifscript"],["script","/\\[\\'push\\'\\]/"],["script","popunder"],["script","googlesyndication"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","KCgpPT57bGV0IGU"],["script","adBlockDetected"],["script","/window\\.location|Adblock/"],["script","queue.addFile"],["script","/ConsoleBan|alert|AdBlocker/"],["script","AdBlocker"],["script","fetch"],["script","adb_detected"],["script","adb"],["script","await fetch"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/^Advertisement$/"],["script","navigator.brave"],["script","zfgloaded"],["script","ai_adb"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","/window\\.open|window\\.location\\.href|document\\.addEventListener|\\$\\(document\\)\\.ready.*show/"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/modal|popupads/"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","ad_block"],["script","app_checkext"],["script","shown_at"],["script","clientHeight"],["script","/url_key|adHtml/"],["script","pop.target"],["script","axios"],["script","ad block"],["script","/typeof [a-z]\\.cmd\\.unshift/","condition","cmd.unshift"],["script","admiral"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/adblock/i"],["script","/adshow/ad"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","AaDetector"],["script","AdBlock"],["script","antiAdBlockerHandler"],["script","Symbol.iterator"],["script","catch"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","AdBlock Detected"],["script","detectAdBlock"],["script","deblocker"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","AdbModel"],["script","document.head.appendChild"],["script","Number"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","/await\\fetch|navigator\\.userAgent/"],["script","/charAt|_0x/"]];

const hostnamesMap = new Map([["teltarif.de",0],["100percentfedup.com",1],["thegatewaypundit.com",1],["apkmirror.com",[4,39]],["yts.mx",6],["pinsystem.co.uk",8],["downfile.site",8],["expertvn.com",8],["trangchu.news",8],["3dmodelshare.org",8],["nulleb.com",8],["thecustomrom.com",8],["bingotingo.com",8],["techacode.com",8],["plc247.com",8],["loaninsurehub.com",8],["freepasses.org",8],["tomarnarede.pt",8],["next-episode.net",10],["eporner.com",11],["sinvida.me",12],["exeo.app",12],["streamnoads.com",12],["megaup.net",12],["searchenginereports.net",13],["oko.sh",14],["washingtonpost.com",15],["bigbtc.win",16],["cryptofun.space",16],["gosexpod.com",17],["sexo5k.com",18],["truyen-hentai.com",18],["theshedend.com",19],["doods.pro",19],["ds2play.com",19],["zeroupload.com",19],["streamvid.net",19],["securenetsystems.net",19],["miniwebtool.com",19],["bchtechnologies.com",19],["spiegel.de",20],["appnee.com",21],["smutty.com",23],["down.dataaps.com",23],["123enjoy.net",24],["kiemlua.com",25],["makefreecallsonline.com",26],["androjungle.com",26],["bookszone.in",26],["drakescans.com",26],["shortix.co",26],["msonglyrics.com",26],["mphealth.online",26],["app-sorteos.com",26],["appsbull.com",26],["diudemy.com",26],["maqal360.com",26],["bokugents.com",26],["aylink.co",27],["ak.sv",28],["atglinks.com",28],["filebox.click",28],["filmesonlinexhd.biz",28],["isaidub3.co",28],["playertv.net",28],["reset-scans.com",30],["kienthucrangmieng.com",31],["coin-free.com",31],["tremamnon.com",31],["btc25.org",31],["tron-free.com",31],["btcbitco.in",31],["btcsatoshi.net",31],["cempakajaya.com",31],["crypto4yu.com",31],["gainl.ink",31],["manofadan.com",31],["readbitcoin.org",31],["wiour.com",31],["bitsmagic.fun",31],["ourcoincash.xyz",31],["hynews.biz",31],["djxmaza.in",32],["miuiflash.com",32],["thecubexguide.com",32],["everia.club",33],["backfirstwo.site",33],["jewelavid.com",33],["nizarstream.com",33],["freeroms.com",34],["soap2day-online.com",34],["beatsnoop.com",35],["fetchpik.com",35],["hackerranksolution.in",35],["austiblox.net",36],["btcbunch.com",37],["teachoo.com",38],["genshinlab.com",39],["fourfourtwo.co.kr",39],["interfootball.co.kr",39],["a-ha.io",39],["cboard.net",39],["mobilitytv.co.kr",39],["mememedia.co.kr",39],["newautopost.co.kr",39],["tvreport.co.kr",39],["tenbizt.com",39],["jjang0u.com",39],["joongdo.co.kr",39],["viva100.com",39],["thephoblographer.com",39],["newdaily.co.kr",39],["dogdrip.net",39],["dotkeypress.kr",39],["viewcash.co.kr",39],["tripplus.co.kr",39],["enterdiary.com",39],["mtodayauto.com",39],["hotplacehunter.co.kr",39],["mystylezip.com",39],["majorgeeks.com",39],["poro.gg",39],["maple.gg",39],["lolchess.gg",39],["dak.gg",39],["meconomynews.com",39],["brandbrief.co.kr",39],["dfast.kr",39],["youtu.co",39],["cryptowidgets.net",40],["carsmania.net",41],["carstopia.net",41],["coinsvalue.net",41],["cookinguide.net",41],["freeoseocheck.com",41],["makeupguide.net",41],["webhostingpost.com",42],["tophostingapp.com",42],["digitalmarktrend.com",42],["topsporter.net",43],["sportshub.to",43],["7xm.xyz",44],["fastupload.io",44],["azmath.info",44],["claimclicks.com",45],["tii.la",46],["easymc.io",47],["yunjiema.top",47],["hacoos.com",48],["bondagevalley.cc",49],["zefoy.com",50],["vidello.net",51],["resizer.myct.jp",52],["gametohkenranbu.sakuraweb.com",53],["jisakuhibi.jp",54],["rank1-media.com",54],["lifematome.blog",55],["fm.sekkaku.net",56],["free-avx.jp",57],["dvdrev.com",58],["betweenjpandkr.blog",59],["nft-media.net",60],["ghacks.net",61],["leak.sx",62],["pornleaks.in",62],["songspk2.info",63],["truyentranhfull.net",64],["iwatchfriendsonline.net",66],["nectareousoverelate.com",67],["suaurl.com",68],["khoaiphim.com",69],["haafedk2.com",70],["fordownloader.com",70],["jovemnerd.com.br",71],["nicomanga.com",72],["totalcsgo.com",73],["vivamax.asia",74],["manysex.com",75],["gaminginfos.com",76],["tinxahoivn.com",77],["forums-fastunlock.com",78],["automoto.it",79],["sekaikomik.bio",80],["codelivly.com",81],["ophim.vip",82],["touguatize.monster",83],["novelhall.com",84],["hes-goal.net",85],["allmusic.com",86],["androidpolice.com",86],["calculator-online.net",86],["cattime.com",86],["cbssports.com",86],["collider.com",86],["comingsoon.net",86],["dogtime.com",86],["dualshockers.com",86],["freeconvert.com",86],["gfinityesports.com",86],["givemesport.com",86],["howtogeek.com",86],["insider-gaming.com",86],["liveandletsfly.com",86],["makeuseof.com",86],["milestomemories.com",86],["momtastic.com",86],["nordot.app",86],["nypost.com",86],["qtoptens.com",86],["screenrant.com",86],["sherdog.com",86],["superherohype.com",86],["thefashionspot.com",86],["timesnews.net",86],["xda-developers.com",86],["chaptercheats.com",86],["cheatsheet.com",87],["gamerant.com",87],["cbr.com",87],["biblestudytools.com",88],["christianheadlines.com",88],["ibelieve.com",88],["kuponigo.com",89],["kimcilonly.site",90],["kimcilonly.link",90],["cryptoearns.com",91],["inxxx.com",92],["ipaspot.app",93],["embedwish.com",94],["filelions.live",94],["leakslove.net",94],["jenismac.com",95],["vxetable.cn",96],["snapwordz.com",97],["toolxox.com",97],["rl6mans.com",97],["idol69.net",97],["usandoapp.com",98],["fazercurriculo.online",98],["plumbersforums.net",99],["123movies800.online",100],["gulio.site",101],["mediaset.es",102],["izlekolik.net",103],["donghuaworld.com",104],["letsdopuzzles.com",105],["nopay2.info",106],["tainio-mania.online",106],["hes-goals.io",107],["sigmalinks.in",108],["rediff.com",109],["iconicblogger.com",110],["dzapk.com",111],["darknessporn.com",112],["familyporner.com",112],["freepublicporn.com",112],["pisshamster.com",112],["punishworld.com",112],["xanimu.com",112],["tekkenmods.com",113],["pig69.com",114],["porninblack.com",115],["javhdo.net",116],["eroticmoviesonline.me",117],["teleclub.xyz",118],["sugarona.com",119],["nishankhatri.xyz",119],["highkeyfinance.com",119],["ecamrips.com",120],["showcamrips.com",120],["9animetv.to",121],["jornadaperfecta.com",122],["loseart.com",123],["sousou-no-frieren.com",124],["botcomics.com",125],["cefirates.com",125],["chandlerorchards.com",125],["comicleaks.com",125],["marketdata.app",125],["monumentmetals.com",125],["tapmyback.com",125],["ping.gg",125],["revistaferramental.com.br",125],["hawpar.com",125],["alpacafinance.org",[125,126]],["nookgaming.com",125],["enkeleksamen.no",125],["kvest.ee",125],["creatordrop.com",125],["panpots.com",125],["cybernetman.com",125],["bitdomain.biz",125],["gerardbosch.xyz",125],["fort-shop.kiev.ua",125],["accuretawealth.com",125],["resourceya.com",125],["tracktheta.com",125],["tt.live",126],["future-fortune.com",126],["abhijith.page",126],["madrigalmaps.com",126],["adventuretix.com",126],["panprices.com",127],["intercity.technology",127],["freelancer.taxmachine.be",127],["adria.gg",127],["fjlaboratories.com",127],["tapewithadblock.org",128],["infinityscans.xyz",[129,130]]]);

const entitiesMap = new Map([["1337x",2],["kimcartoon",3],["pahe",5],["soap2day",5],["hqq",7],["waaw",7],["pixhost",9],["viprow",12],["dood",19],["doodstream",19],["dooood",19],["dropgalaxy",[22,28]],["shrinke",23],["shrinkme",23],["eplayvid",24],["poplinks",26],["cricstream",28],["o2tvseries",28],["o2tvseriesz",28],["kickass",29],["watchomovies",34],["actvid",65]]);

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
        'Math_max': Math.max,
        'Math_min': Math.min,
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
