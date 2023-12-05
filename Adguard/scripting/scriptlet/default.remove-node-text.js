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

const argsList = [["script","/getAdUnitPath|\\.then\\(eval\\)|DisplayAcceptableAdIfAdblocked|,eval\\)\\)\\)\\;|\\.join\\(\\'\\'\\)\\}\\;/"],["script","/==undefined.*body/"],["script","style"],["script","Promise"],["script","Number.isSafeInteger"],["script","/style:last-of-type|:empty|APKM\\..+?\\.innerHTML/"],["script","Reflect"],["script","document.write"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","mdp"],["script","exdynsrv"],["script","/onerror|adsbygoogle|notice|while/i"],["script","/adb/i"],["script","FingerprintJS"],["script","/check_if_blocking|XMLHttpRequest|adkiller/"],["script","/document\\.createElement|\\.banner-in/"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|adblock/"],["script","myreadCookie"],["script","ExoLoader"],["script","adblock"],["script","homad"],["script","alert"],["script","window.open"],["script","break;case $"],["script","Adblock"],["script","onerror"],["script","toast"],["script","break;case $."],["style","text-decoration"],["script","/replace|adsbygoogle/"],["script","htmls"],["#text","AD:"],["script","checkifscript"],["script","/\\[\\'push\\'\\]/"],["script","/popMagic|pop1stp/"],["script","popunder"],["script","googlesyndication"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","KCgpPT57bGV0IGU"],["script","adBlockDetected"],["script","/window\\.location|Adblock/"],["script","googleAdUrl"],["script","queue.addFile"],["script","/ConsoleBan|alert|AdBlocker/"],["script","AdBlocker"],["script","fetch"],["script","adb_detected"],["script","adb"],["script","await fetch"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/^Advertisement$/"],["script","navigator.brave"],["script","zfgloaded"],["script","ai_adb"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","/window\\.open|window\\.location\\.href|document\\.addEventListener|\\$\\(document\\)\\.ready.*show/"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/modal|popupads/"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","ad_block"],["script","app_checkext"],["script","shown_at"],["script","clientHeight"],["script","/url_key|adHtml/"],["script","pop.target"],["script","showadblock"],["script","axios"],["script","ad block"],["script","/typeof [a-z]\\.cmd\\.unshift/","condition","cmd.unshift"],["script","admiral"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/adblock/i"],["script","/adshow/ad"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","AaDetector"],["script","AdBlock"],["script","antiAdBlockerHandler"],["script","Symbol.iterator"],["script","catch"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","detectAdBlock"],["script","deblocker"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","AdbModel"],["script","document.head.appendChild"],["script","Number"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","constructor"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/RegExp\\(\\'/","condition","RegExp"]];

const hostnamesMap = new Map([["teltarif.de",0],["100percentfedup.com",1],["thegatewaypundit.com",1],["moviepilot.de",3],["apkmirror.com",[5,42]],["yts.mx",7],["upornia.com",9],["pinsystem.co.uk",10],["tinyppt.com",10],["downfile.site",10],["expertvn.com",10],["trangchu.news",10],["3dmodelshare.org",10],["nulleb.com",10],["thecustomrom.com",10],["bingotingo.com",10],["3dmili.com",10],["techacode.com",10],["plc247.com",10],["loaninsurehub.com",10],["freepasses.org",10],["tomarnarede.pt",10],["next-episode.net",12],["eporner.com",13],["sinvida.me",14],["exeo.app",14],["streamnoads.com",14],["megaup.net",14],["searchenginereports.net",15],["oko.sh",16],["washingtonpost.com",17],["bigbtc.win",18],["cryptofun.space",18],["gosexpod.com",19],["sexo5k.com",20],["truyen-hentai.com",20],["theshedend.com",21],["doods.pro",21],["ds2play.com",21],["zeroupload.com",21],["streamvid.net",21],["securenetsystems.net",21],["miniwebtool.com",21],["bchtechnologies.com",21],["spiegel.de",22],["appnee.com",23],["smutty.com",24],["down.dataaps.com",24],["filmweb.pl",24],["123enjoy.net",25],["kiemlua.com",26],["makefreecallsonline.com",27],["androjungle.com",27],["bookszone.in",27],["drakescans.com",27],["shortix.co",27],["msonglyrics.com",27],["mphealth.online",27],["app-sorteos.com",27],["appsbull.com",27],["diudemy.com",27],["maqal360.com",27],["bokugents.com",27],["btvplus.bg",27],["aylink.co",28],["ak.sv",29],["atglinks.com",29],["filebox.click",29],["filmesonlinexhd.biz",29],["isaidub3.co",29],["playertv.net",29],["reset-scans.com",31],["kienthucrangmieng.com",32],["coin-free.com",32],["tremamnon.com",32],["btc25.org",32],["tron-free.com",32],["btcbitco.in",32],["btcsatoshi.net",32],["cempakajaya.com",32],["crypto4yu.com",32],["gainl.ink",32],["manofadan.com",32],["readbitcoin.org",32],["wiour.com",32],["bitsmagic.fun",32],["ourcoincash.xyz",32],["hynews.biz",32],["tech24us.com",33],["freethemesy.com",33],["djxmaza.in",34],["miuiflash.com",34],["thecubexguide.com",34],["everia.club",35],["backfirstwo.site",35],["jewelavid.com",35],["nizarstream.com",35],["besthdgayporn.com",36],["freeroms.com",37],["soap2day-online.com",37],["beatsnoop.com",38],["fetchpik.com",38],["hackerranksolution.in",38],["austiblox.net",39],["btcbunch.com",40],["teachoo.com",41],["genshinlab.com",42],["fourfourtwo.co.kr",42],["interfootball.co.kr",42],["a-ha.io",42],["cboard.net",42],["mobilitytv.co.kr",42],["mememedia.co.kr",42],["newautopost.co.kr",42],["tvreport.co.kr",42],["tenbizt.com",42],["jjang0u.com",42],["joongdo.co.kr",42],["viva100.com",42],["thephoblographer.com",42],["newdaily.co.kr",42],["dogdrip.net",42],["golf-live.at",42],["gamingdeputy.com",42],["dotkeypress.kr",42],["viewcash.co.kr",42],["tripplus.co.kr",42],["enterdiary.com",42],["mtodayauto.com",42],["hotplacehunter.co.kr",42],["mystylezip.com",42],["majorgeeks.com",42],["poro.gg",42],["maple.gg",42],["lolchess.gg",42],["dak.gg",42],["meconomynews.com",42],["brandbrief.co.kr",42],["dfast.kr",42],["youtu.co",42],["mlbpark.donga.com",42],["capress.kr",42],["carandmore.co.kr",42],["maxmovie.kr",42],["motorgraph.com",42],["newsbell.co.kr",42],["tminews.co.kr",42],["thehousemagazine.kr",42],["hardreset.info",42],["metabattle.com",42],["golf-meconomynews.com",42],["cryptowidgets.net",43],["carsmania.net",44],["carstopia.net",44],["coinsvalue.net",44],["cookinguide.net",44],["freeoseocheck.com",44],["makeupguide.net",44],["iisfvirtual.in",45],["starxinvestor.com",45],["webhostingpost.com",46],["tophostingapp.com",46],["digitalmarktrend.com",46],["topsporter.net",47],["sportshub.to",47],["7xm.xyz",48],["fastupload.io",48],["azmath.info",48],["claimclicks.com",49],["tii.la",50],["easymc.io",51],["yunjiema.top",51],["hacoos.com",52],["bondagevalley.cc",53],["zefoy.com",54],["vidello.net",55],["resizer.myct.jp",56],["gametohkenranbu.sakuraweb.com",57],["jisakuhibi.jp",58],["rank1-media.com",58],["lifematome.blog",59],["fm.sekkaku.net",60],["free-avx.jp",61],["dvdrev.com",62],["betweenjpandkr.blog",63],["nft-media.net",64],["ghacks.net",65],["leak.sx",66],["pornleaks.in",66],["songspk2.info",67],["truyentranhfull.net",68],["iwatchfriendsonline.net",70],["nectareousoverelate.com",71],["suaurl.com",72],["khoaiphim.com",73],["haafedk2.com",74],["fordownloader.com",74],["jovemnerd.com.br",75],["nicomanga.com",76],["totalcsgo.com",77],["vivamax.asia",78],["manysex.com",79],["gaminginfos.com",80],["tinxahoivn.com",81],["forums-fastunlock.com",82],["automoto.it",83],["sekaikomik.bio",84],["codelivly.com",85],["ophim.vip",86],["touguatize.monster",87],["client.falixnodes.net",88],["novelhall.com",89],["hes-goal.net",90],["allmusic.com",91],["androidpolice.com",91],["calculator-online.net",91],["cattime.com",91],["cbssports.com",91],["collider.com",91],["comingsoon.net",91],["dogtime.com",91],["dualshockers.com",91],["freeconvert.com",91],["gfinityesports.com",91],["givemesport.com",91],["howtogeek.com",91],["insider-gaming.com",91],["liveandletsfly.com",91],["makeuseof.com",91],["milestomemories.com",91],["momtastic.com",91],["nordot.app",91],["nypost.com",91],["qtoptens.com",91],["screenrant.com",91],["sherdog.com",91],["superherohype.com",91],["thefashionspot.com",91],["timesnews.net",91],["xda-developers.com",91],["chaptercheats.com",91],["cheatsheet.com",92],["gamerant.com",92],["cbr.com",92],["pwinsider.com",92],["biblestudytools.com",93],["christianheadlines.com",93],["ibelieve.com",93],["kuponigo.com",94],["kimcilonly.site",95],["kimcilonly.link",95],["cryptoearns.com",96],["inxxx.com",97],["ipaspot.app",98],["embedwish.com",99],["filelions.live",99],["leakslove.net",99],["jenismac.com",100],["vxetable.cn",101],["snapwordz.com",102],["toolxox.com",102],["rl6mans.com",102],["idol69.net",102],["usandoapp.com",103],["fazercurriculo.online",103],["plumbersforums.net",104],["123movies800.online",105],["gulio.site",106],["mediaset.es",107],["izlekolik.net",108],["donghuaworld.com",109],["letsdopuzzles.com",110],["nopay2.info",111],["tainio-mania.online",111],["hes-goals.io",112],["sigmalinks.in",113],["rediff.com",114],["iconicblogger.com",115],["dzapk.com",116],["darknessporn.com",117],["familyporner.com",117],["freepublicporn.com",117],["pisshamster.com",117],["punishworld.com",117],["xanimu.com",117],["pig69.com",118],["porninblack.com",119],["javhdo.net",120],["eroticmoviesonline.me",121],["teleclub.xyz",122],["sugarona.com",123],["nishankhatri.xyz",123],["highkeyfinance.com",123],["ecamrips.com",124],["showcamrips.com",124],["9animetv.to",125],["jornadaperfecta.com",126],["loseart.com",127],["sousou-no-frieren.com",128],["veev.to",129],["botcomics.com",130],["cefirates.com",130],["chandlerorchards.com",130],["comicleaks.com",130],["marketdata.app",130],["monumentmetals.com",130],["tapmyback.com",130],["ping.gg",130],["revistaferramental.com.br",130],["hawpar.com",130],["alpacafinance.org",[130,131]],["nookgaming.com",130],["enkeleksamen.no",130],["kvest.ee",130],["creatordrop.com",130],["panpots.com",130],["cybernetman.com",130],["bitdomain.biz",130],["gerardbosch.xyz",130],["fort-shop.kiev.ua",130],["accuretawealth.com",130],["resourceya.com",130],["tracktheta.com",130],["tt.live",131],["future-fortune.com",131],["abhijith.page",131],["madrigalmaps.com",131],["adventuretix.com",131],["panprices.com",132],["intercity.technology",132],["freelancer.taxmachine.be",132],["adria.gg",132],["fjlaboratories.com",132],["tapewithadblock.org",133]]);

const entitiesMap = new Map([["1337x",2],["kimcartoon",4],["pahe",6],["soap2day",6],["hqq",8],["waaw",8],["teluguflix",10],["pixhost",11],["viprow",14],["dood",21],["doodstream",21],["dooood",21],["shrinke",24],["shrinkme",24],["eplayvid",25],["poplinks",27],["cricstream",29],["dropgalaxy",29],["o2tvseries",29],["o2tvseriesz",29],["kickass",30],["watchomovies",37],["actvid",69]]);

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
