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
const uBOL_noFetchIf = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["adsbygoogle"],["/^/"],["player-feedback"],["openx"],["method:HEAD"],["ads"],["googlesyndication"],["googlesyndication","method:HEAD"],["damoh.ani-stream.com"],["ujsmediatags method:HEAD"],["/googlesyndication|inklinkor|ads\\/load/"],["zomap.de"],["fwmrm.net"],["adsafeprotected"],["google"],["cloudfront"],["/outbrain|criteo|thisiswaldo|media\\.net|ohbayersbur|adligature|quantserve|srvtrck|\\.css|\\.js/"],["google-analytics"],["googlesyndication","length:10000"],["doubleclick"],["pogo"],["doubleclick.net"],["jssdks.mparticle.com"],["/adinplay|googlesyndication/"],["bmcdn6"],["/adoto|\\/ads\\/js/"],["googletagmanager"],["syndication"],["/googlesyndication|inklinkor/"],["popunder"],["adsbygoogle.js"],["manager"],["moonicorn.network"],["ad"],["/ads"],["tvid.in/log"],["cloudfront.net/?"],["/googlesyndication|nerveheels/"],["analytics"],["wtg-ads"],["/ads|doubleclick/"],["dqst.pl"],["googlesyndication.com"],["vlitag"],["/ads|track/"],["/static\\.criteo\\.net|adsbygoogle/","length:150000-150200"],["imasdk"],["tpc.googlesyndication.com"],["adskeeper"],["/freychang|passback|popunder|tag|banquetunarmedgrater/"],["ima"],["/adoto|googlesyndication/"],["ad-delivery"],["googlesyndication","length:10"],["doubleclick.net/instream/ad_status.js","war:doubleclick_instream_ad_status.js"],["ima3_dai"],["imasdk.googleapis.com"],["method:GET"],["/ads|googletagmanager/"],["/api/v1/events"],["body:browser"],["eventing"],["splunkcloud.com/services/collector"],["event-router.olympics.com"],["marmalade"],["url:ipapi.co"],["api"],["cloudflare.com/cdn-cgi/trace"],["www.japscan.lol/imgs/japo/reader"],["stella"]];

const hostnamesMap = new Map([["allmusic.com",0],["wowescape.com",0],["leechpremium.link",0],["camcam.cc",0],["png.is",0],["nohat.cc",0],["gunauc.net",0],["pandadevelopment.net",0],["decrypt.day",0],["anakteknik.co.id",0],["tmail.io",0],["isi7.net",0],["hyipstats.net",0],["palixi.net",0],["freecoursesonline.me",0],["pinloker.com",0],["sshkit.com",0],["fastssh.com",0],["howdy.id",0],["skidrowreloaded.com",1],["pinoyfaucet.com",1],["player.glomex.com",2],["htmlgames.com",3],["mac2sell.net",4],["1001tracklists.com",4],["sinonimos.de",[4,5]],["antonimos.de",[4,5]],["quesignifi.ca",[4,5]],["tiktokrealtime.com",[4,5]],["tiktokcounter.net",[4,5]],["tpayr.xyz",[4,5]],["poqzn.xyz",[4,5]],["ashrfd.xyz",[4,5]],["rezsx.xyz",[4,5]],["tryzt.xyz",[4,5]],["ashrff.xyz",[4,5]],["rezst.xyz",[4,5]],["dawenet.com",[4,5]],["erzar.xyz",[4,5]],["waezm.xyz",[4,5]],["waezg.xyz",[4,5]],["cryptednews.space",[4,5]],["vivuq.com",[4,5]],["swgop.com",[4,5]],["vbnmll.com",[4,5]],["telcoinfo.online",[4,5]],["dshytb.com",[4,5]],["gamebrew.org",4],["game3rb.com",4],["sixsave.com",4],["bowfile.com",[4,36]],["dealsfinders.blog",4],["iphonechecker.herokuapp.com",4],["coloringpage.eu",4],["conocimientoshackers.com",4],["juegosdetiempolibre.org",4],["karaokegratis.com.ar",4],["mammaebambini.it",4],["riazor.org",4],["rinconpsicologia.com",4],["sempredirebanzai.it",4],["vectogravic.com",4],["androidacy.com",4],["freetohell.com",4],["lifestyle.bg",[4,57]],["news.bg",[4,57]],["topsport.bg",[4,57]],["webcafe.bg",[4,57]],["investing.com",5],["mylivewallpapers.com",5],["softfully.com",5],["sekilastekno.com",5],["pornovka.cz",5],["fplstatistics.com",5],["cheater.ninja",5],["naukrilelo.in",5],["reminimod.co",5],["highkeyfinance.com",5],["amanguides.com",5],["adcrypto.net",5],["admediaflex.com",5],["aduzz.com",5],["bitcrypto.info",5],["cdrab.com",5],["datacheap.io",5],["hbz.us",5],["savego.org",5],["owsafe.com",5],["sportweb.info",5],["apkupload.in",5],["ezeviral.com",5],["pngreal.com",5],["ytpng.net",5],["travel.vebma.com",5],["cloud.majalahhewan.com",5],["crm.cekresi.me",5],["ai.tempatwisata.pro",5],["cinedesi.in",5],["thevouz.in",5],["tejtime24.com",5],["techishant.in",5],["key-hub.eu",5],["discoveryplus.in",5],["calculator-online.net",5],["tutorial.siberuang.com",5],["desiflixindia.com",5],["insurance.iptvsetupguide.com",5],["dotabuff.com",5],["forum.cstalking.tv",5],["mcqmall.com",5],["apksafe.in",5],["witcherhour.com",5],["clamor.pl",5],["one-tech.xyz",5],["ozulscans.com",5],["i-polls.com",5],["insurancevela.com",5],["noor-book.com",5],["wrzesnia.info.pl",5],["elahmad.com",5],["compromath.com",5],["sumoweb.to",5],["haloursynow.pl",5],["satkurier.pl",5],["mtg-print.com",5],["gktech.uk",5],["heavy.com",5],["creators.nafezly.com",5],["downloadfilm.website",5],["uploadsea.com",5],["faucetcrypto.com",6],["toolss.net",6],["flixscans.org",6],["civitai.com",6],["streamer4u.site",6],["imagetranslator.io",6],["visnalize.com",6],["tekken8combo.kagewebsite.com",6],["custommapposter.com",6],["scenexe2.io",6],["bgmateriali.com",6],["ncaa.com",6],["gurusiana.id",6],["dichvureviewmap.com",6],["technofino.in",6],["vinstartheme.com",6],["downev.com",6],["soccerinhd.com",6],["movierr.online",6],["vectorx.top",6],["funkeypagali.com",6],["careersides.com",6],["nayisahara.com",6],["wikifilmia.com",6],["infinityskull.com",6],["viewmyknowledge.com",6],["iisfvirtual.in",6],["starxinvestor.com",6],["acetack.com",6],["androidquest.com",6],["apklox.com",6],["chhaprawap.in",6],["gujarativyakaran.com",6],["kashmirstudentsinformation.in",6],["kisantime.com",6],["pastescript.com",6],["trimorspacks.com",6],["updrop.link",6],["mynewsmedia.co",6],["overgal.com",6],["howtoconcepts.com",6],["ikramlar.online",6],["choiceappstore.xyz",6],["djpunjab2.in",6],["djqunjab.in",6],["foodxor.com",6],["geniussolutions.co",6],["mealcold.com",6],["mixrootmods.com",6],["fartechy.com",6],["investcrust.com",6],["wenxuecity.com",6],["kiwiexploits.com",6],["romadd.com",6],["disheye.com",6],["homeairquality.org",[6,26]],["techtrim.tech",6],["arhplyrics.in",6],["raky.in",6],["askpaccosi.com",6],["crypto4tun.com",6],["quizack.com",6],["moddingzone.in",6],["apkandroidhub.in",6],["babymodz.com",6],["deezloaded.com",6],["mad.gplpalace.one",6],["studyis.xyz",6],["chillx.top",6],["worldappsstore.xyz",6],["prepostseo.com",6],["dulichkhanhhoa.net",6],["noithatmyphu.vn",6],["iptvjournal.com",6],["dramaworldhd.co",6],["tudaydeals.com",6],["inbbotlist.com",6],["freepreset.net",6],["getintoway.com",6],["crdroid.net",6],["zerion.cc",6],["beelink.pro",6],["hax.co.id",6],["woiden.id",6],["pviewer.site",6],["theusaposts.com",6],["hackr.io",6],["rendimentibtp.it",6],["sportshub.to",6],["sportnews.to",6],["esopress.com",6],["welovecrypto.xyz",6],["paketmu.com",6],["coins-town.com",6],["watchx.top",6],["bitcosite.com",6],["bitzite.com",6],["globlenews.in",6],["programmingeeksclub.com",6],["archivebate.com",6],["now.gg",6],["now.us",6],["xn--31byd1i.net",6],["unitystr.com",6],["moto.it",6],["wellness4live.com",6],["forplayx.ink",6],["ghscanner.com",6],["sat.technology",6],["moviesapi.club",6],["bestx.stream",6],["automoto.it",6],["olarila.com",6],["techedubyte.com",6],["snapwordz.com",6],["toolxox.com",6],["go2share.net",6],["flixscans.com",6],["animesync.org",6],["freewsad.com",6],["yt-downloaderz.com",6],["hostmath.com",6],["urlcut.ninja",6],["fplstatistics.co.uk",6],["99corporates.com",6],["fivemdev.org",6],["winlator.com",6],["freetvsports.xyz",6],["sabornutritivo.com",6],["metrolagu.cam",6],["loot-link.com",6],["loot-links.com",6],["lootdest.com",6],["los40.com",6],["muyinteresante.es",7],["ani-stream.com",8],["uflash.tv",9],["oko.sh",[10,28]],["joyn.de",11],["joyn.at",11],["uktvplay.co.uk",12],["tf1.fr",13],["exe.app",14],["eio.io",14],["ufacw.com",14],["figurehunter.net",14],["workink.click",15],["work.ink",16],["envato-downloader.com",17],["freepik-downloader.com",17],["freepic-downloader.com",17],["botrix.live",18],["vtmgo.be",19],["scrolller.com",19],["journaldemontreal.com",19],["tvanouvelles.ca",19],["boxingstreams100.com",19],["mlbstreams100.com",19],["mmastreams-100.tv",19],["nbastreams-100.tv",19],["soccerstreams-100.tv",19],["vods.tv",19],["atresplayer.com",19],["assettoworld.com",19],["independent.co.uk",19],["buffsports.me",20],["lemino.docomo.ne.jp",21],["kfc.com",22],["crazygames.com",23],["mdn.lol",24],["bitcotasks.com",24],["btcbitco.in",25],["btcsatoshi.net",25],["cempakajaya.com",25],["crypto4yu.com",25],["gainl.ink",25],["readbitcoin.org",25],["wiour.com",25],["senda.pl",26],["computerpedia.in",27],["tii.la",28],["ckk.ai",28],["oei.la",28],["lnbz.la",28],["camarchive.tv",29],["hindustantimes.com",30],["linkpoi.me",31],["platform.adex.network",32],["mcrypto.club",33],["coinsparty.com",33],["weszlo.com",33],["simplebits.io",34],["timesnowhindi.com",35],["timesnowmarathi.com",35],["timesofindia.com",35],["1cloudfile.com",37],["wyze.com",38],["mmorpg.org.pl",39],["dongknows.com",40],["forsal.pl",41],["2the.space",42],["freeshib.biz",43],["doge25.in",44],["loawa.com",45],["ygosu.com",45],["sportalkorea.com",45],["edaily.co.kr",45],["economist.co.kr",45],["etoday.co.kr",45],["isplus.com",45],["hometownstation.com",45],["inven.co.kr",45],["honkailab.com",45],["genshinlab.com",45],["thestockmarketwatch.com",45],["thephoblographer.com",45],["issuya.com",45],["etnews.com",45],["iusm.co.kr",45],["dogdrip.net",45],["worldhistory.org",45],["text-compare.com",45],["bamgosu.site",45],["etnewskorea.com",45],["automobile-catalog.com",45],["maketecheasier.com",45],["thesaurus.net",45],["gadgets360.com",45],["thestar.co.uk",45],["yorkshirepost.co.uk",45],["logicieleducatif.fr",45],["motorbikecatalog.com",45],["jjang0u.com",45],["raenonx.cc",45],["deutschekanale.com",46],["soranews24.com",47],["bravedown.com",48],["smartkhabrinews.com",49],["ortograf.pl",50],["mixrootmod.com",51],["explorecams.com",52],["hiraethtranslation.com",53],["fapdrop.com",54],["idlixofficialx.com",54],["idlixplus.co",54],["southpark.de",55],["riuria.beauty",56],["money.bg",57],["realmadryt.pl",57],["getthit.com",58],["everand.com",59],["search.brave.com",60],["coursera.org",61],["notion.so",62],["olympics.com",63],["pimylifeup.com",64],["seazon.fr",65],["html5.gamedistribution.com",66],["premio.io",67],["japscan.lol",68],["nicovideo.jp",69]]);

const entitiesMap = new Map([["magesy",0],["fc-lc",0],["zone-telechargement",1],["bombuj",5],["pobre",5],["bg-gledai",6]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function noFetchIf(
    propsToMatch = '',
    responseBody = ''
) {
    if ( typeof propsToMatch !== 'string' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('prevent-fetch', propsToMatch, responseBody);
    const needles = [];
    for ( const condition of propsToMatch.split(/\s+/) ) {
        if ( condition === '' ) { continue; }
        const pos = condition.indexOf(':');
        let key, value;
        if ( pos !== -1 ) {
            key = condition.slice(0, pos);
            value = condition.slice(pos + 1);
        } else {
            key = 'url';
            value = condition;
        }
        needles.push({ key, re: safe.patternToRegex(value) });
    }
    self.fetch = new Proxy(self.fetch, {
        apply: function(target, thisArg, args) {
            const details = args[0] instanceof self.Request
                ? args[0]
                : Object.assign({ url: args[0] }, args[1]);
            let proceed = true;
            try {
                const props = new Map();
                for ( const prop in details ) {
                    let v = details[prop];
                    if ( typeof v !== 'string' ) {
                        try { v = safe.JSON_stringify(v); }
                        catch(ex) { }
                    }
                    if ( typeof v !== 'string' ) { continue; }
                    props.set(prop, v);
                }
                if ( propsToMatch === '' && responseBody === '' ) {
                    const out = Array.from(props).map(a => `${a[0]}:${a[1]}`);
                    safe.uboLog(logPrefix, `Called: ${out.join('\n')}`);
                    return Reflect.apply(target, thisArg, args);
                }
                proceed = needles.length === 0;
                for ( const { key, re } of needles ) {
                    if (
                        props.has(key) === false ||
                        re.test(props.get(key)) === false
                    ) {
                        proceed = true;
                        break;
                    }
                }
            } catch(ex) {
            }
            if ( proceed ) {
                return Reflect.apply(target, thisArg, args);
            }
            let responseType = '';
            if ( details.mode === undefined || details.mode === 'cors' ) {
                try {
                    const desURL = new URL(details.url);
                    responseType = desURL.origin !== document.location.origin
                        ? 'cors'
                        : 'basic';
                } catch(ex) {
                    safe.uboErr(logPrefix, `Error: ${ex}`);
                }
            }
            return generateContentFn(responseBody).then(text => {
                safe.uboLog(logPrefix, `Prevented with response "${text}"`);
                const response = new Response(text, {
                    statusText: 'OK',
                    headers: {
                        'Content-Length': text.length,
                    }
                });
                safe.Object_defineProperty(response, 'url', {
                    value: details.url
                });
                if ( responseType !== '' ) {
                    safe.Object_defineProperty(response, 'type', {
                        value: responseType
                    });
                }
                return response;
            });
        }
    });
}

function generateContentFn(directive) {
    const safe = safeSelf();
    const randomize = len => {
        const chunks = [];
        let textSize = 0;
        do {
            const s = safe.Math_random().toString(36).slice(2);
            chunks.push(s);
            textSize += s.length;
        }
        while ( textSize < len );
        return chunks.join(' ').slice(0, len);
    };
    if ( directive === 'true' ) {
        return Promise.resolve(randomize(10));
    }
    if ( directive === 'emptyObj' ) {
        return Promise.resolve('{}');
    }
    if ( directive === 'emptyArr' ) {
        return Promise.resolve('[]');
    }
    if ( directive === 'emptyStr' ) {
        return Promise.resolve('');
    }
    if ( directive.startsWith('length:') ) {
        const match = /^length:(\d+)(?:-(\d+))?$/.exec(directive);
        if ( match ) {
            const min = parseInt(match[1], 10);
            const extent = safe.Math_max(parseInt(match[2], 10) || 0, min) - min;
            const len = safe.Math_min(min + extent * safe.Math_random(), 500000);
            return Promise.resolve(randomize(len | 0));
        }
    }
    if ( directive.startsWith('war:') && scriptletGlobals.warOrigin ) {
        return new Promise(resolve => {
            const warOrigin = scriptletGlobals.warOrigin;
            const warName = directive.slice(4);
            const fullpath = [ warOrigin, '/', warName ];
            const warSecret = scriptletGlobals.warSecret;
            if ( warSecret !== undefined ) {
                fullpath.push('?secret=', warSecret);
            }
            const warXHR = new safe.XMLHttpRequest();
            warXHR.responseType = 'text';
            warXHR.onloadend = ev => {
                resolve(ev.target.responseText || '');
            };
            warXHR.open('GET', fullpath.join(''));
            warXHR.send();
        });
    }
    return Promise.resolve('');
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
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
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
    try { noFetchIf(...argsList[i]); }
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
    return uBOL_noFetchIf();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_noFetchIf = cloneInto([
            [ '(', uBOL_noFetchIf.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_noFetchIf);
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
    delete page.uBOL_noFetchIf;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
