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

/* eslint-disable indent */
/* global cloneInto */

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_noFetchIf = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["adsbygoogle"],["/^/"],["player-feedback"],["openx"],["method:HEAD"],["ads"],["googlesyndication"],["googlesyndication","method:HEAD"],["damoh.ani-stream.com"],["ujsmediatags method:HEAD"],["/googlesyndication|inklinkor|ads\\/load/"],["zomap.de"],["adsafeprotected"],["google"],["cloudfront"],["/outbrain|criteo|thisiswaldo|media\\.net|ohbayersbur|adligature|quantserve|srvtrck|\\.css|\\.js/"],["fwmrm.net"],["ads","length:10","{\"type\": \"cors\"}"],["ads-twitter.com"],["secure.adnxs.com/ptv","war:noop-vast4.xml"],["google-analytics"],["outbrain.com"],["googlesyndication","length:10000"],["doubleclick"],["googlesyndication","","{\"type\":\"cors\"}"],["pogo"],["doubleclick.net"],["/doubleclick|googlesyndication/"],["jssdks.mparticle.com"],["/adinplay|googlesyndication/"],["/outbrain|adligature|quantserve|adligature|srvtrck/"],["youradexchange"],["adligature"],["/clarity|googlesyndication/"],["thanksgivingdelights"],["method:GET"],["snigelweb.com"],["doubleclick","","{\"type\": \"opaque\"}"],["googlesyndication","length:10"],["bmcdn6"],["/adoto|\\/ads\\/js/"],["googletagmanager"],["syndication"],["/googlesyndication|inklinkor/"],["surfe.pro"],["adsbygoogle.js"],["popunder"],["doubleclick.net/instream/ad_status.js","war:doubleclick_instream_ad_status.js"],["manager"],["moonicorn.network"],["ad"],["/ads"],["tvid.in/log"],["cloudfront.net/?"],["/nerveheels/"],["analytics"],["wtg-ads"],["/ad-provider"],["/ads|doubleclick/"],["dqst.pl"],["googlesyndication.com"],["vlitag"],["/ads|track/"],["adsbygoogle","length:11000"],["/ad\\.doubleclick\\.net|static\\.dable\\.io/"],["imasdk"],["tpc.googlesyndication.com"],["adskeeper"],["/freychang|passback|popunder|tag|banquetunarmedgrater/"],["ima"],["/adoto|googlesyndication/"],["ad-delivery"],["ima3_dai"],["imasdk.googleapis.com"],["/ads|googletagmanager/"],["/doubleclick|googlesyndication|vlitag/","length:10","{\"type\": \"cors\"}"],["/api/v1/events"],["body:browser"],["eventing"],["api.theathletic.com/graphql body:/PostEvent|PostImpressions/"],["method:POST body:zaraz"],["splunkcloud.com/services/collector"],["event-router.olympics.com"],["hostingcloud.racing"],["tvid.in/log/"],["loom.com/insights-api/graphql"],["marmalade"],["url:ipapi.co"],["api"],["cloudflare.com/cdn-cgi/trace"],["/piwik-"],["api/collect"],["stella"]];

const hostnamesMap = new Map([["allmusic.com",0],["wowescape.com",0],["leechpremium.link",0],["camcam.cc",0],["png.is",0],["nohat.cc",0],["okiemrolnika.pl",0],["pandadevelopment.net",0],["decrypt.day",0],["anakteknik.co.id",0],["javball.com",0],["visalist.io",0],["tmail.io",0],["isi7.net",0],["hyipstats.net",0],["palixi.net",0],["freecoursesonline.me",0],["pinloker.com",0],["sshkit.com",0],["fastssh.com",0],["howdy.id",0],["skidrowreloaded.com",1],["pinoyfaucet.com",1],["topsporter.net",1],["player.glomex.com",2],["htmlgames.com",3],["mac2sell.net",4],["1001tracklists.com",4],["gamebrew.org",4],["game3rb.com",4],["sixsave.com",4],["bowfile.com",[4,53]],["dealsfinders.blog",4],["iphonechecker.herokuapp.com",4],["coloringpage.eu",4],["conocimientoshackers.com",4],["juegosdetiempolibre.org",4],["karaokegratis.com.ar",4],["mammaebambini.it",4],["riazor.org",4],["rinconpsicologia.com",4],["sempredirebanzai.it",4],["vectogravic.com",4],["androidacy.com",4],["freetohell.com",4],["lifestyle.bg",[4,35]],["news.bg",[4,35]],["topsport.bg",[4,35]],["webcafe.bg",[4,35]],["investing.com",5],["mylivewallpapers.com",5],["softfully.com",5],["pornovka.cz",5],["fplstatistics.com",5],["cheater.ninja",5],["naukrilelo.in",5],["reminimod.co",5],["highkeyfinance.com",5],["amanguides.com",5],["adcrypto.net",5],["admediaflex.com",5],["aduzz.com",5],["bitcrypto.info",5],["cdrab.com",5],["datacheap.io",5],["hbz.us",5],["savego.org",5],["owsafe.com",5],["sportweb.info",5],["apkupload.in",5],["ezeviral.com",5],["pngreal.com",5],["ytpng.net",5],["travel.vebma.com",5],["cloud.majalahhewan.com",5],["crm.cekresi.me",5],["ai.tempatwisata.pro",5],["cinedesi.in",5],["thevouz.in",5],["tejtime24.com",5],["techishant.in",5],["mtcremix.com",5],["advicefunda.com",5],["bestloanoffer.net",5],["computerpedia.in",[5,42]],["techconnection.in",5],["key-hub.eu",5],["discoveryplus.in",5],["calculator-online.net",5],["tutorial.siberuang.com",5],["desiflixindia.com",5],["insurance.iptvsetupguide.com",5],["dotabuff.com",5],["forum.cstalking.tv",5],["mcqmall.com",5],["apksafe.in",5],["witcherhour.com",5],["clamor.pl",5],["one-tech.xyz",5],["ozulscans.com",5],["i-polls.com",5],["insurancevela.com",5],["noor-book.com",5],["wrzesnia.info.pl",5],["elahmad.com",5],["compromath.com",5],["sumoweb.to",5],["haloursynow.pl",5],["satkurier.pl",5],["mtg-print.com",5],["gktech.uk",5],["heavy.com",5],["creators.nafezly.com",5],["downloadfilm.website",5],["uploadsea.com",5],["faucetcrypto.com",6],["toolss.net",6],["megane.com.pl",6],["flixscans.org",6],["civitai.com",6],["streamer4u.site",6],["imagetranslator.io",6],["visnalize.com",6],["tekken8combo.kagewebsite.com",6],["custommapposter.com",6],["scenexe2.io",6],["bgmateriali.com",6],["ncaa.com",6],["gurusiana.id",6],["dichvureviewmap.com",6],["technofino.in",6],["vinstartheme.com",6],["downev.com",6],["movierr.online",6],["vectorx.top",6],["bong.ink",6],["zippyshare.day",6],["x265rips.xyz",6],["modescanlator.net",6],["livexscores.com",6],["101soundboards.com",6],["freedrivemovie.com",6],["odisha-remix.com",6],["themoviesradar.in",6],["forexsalary.com",6],["dailywebsite.in",6],["mamatamusicbanaras.com",6],["missionupsc.com",6],["tea-coffee.net",6],["spatsify.com",6],["newedutopics.com",6],["getviralreach.in",6],["edukaroo.com",6],["funkeypagali.com",6],["careersides.com",6],["nayisahara.com",6],["wikifilmia.com",6],["infinityskull.com",6],["viewmyknowledge.com",6],["iisfvirtual.in",6],["starxinvestor.com",6],["jkssbalerts.com",6],["acetack.com",6],["androidquest.com",6],["apklox.com",6],["chhaprawap.in",6],["gujarativyakaran.com",6],["kashmirstudentsinformation.in",6],["kisantime.com",6],["shetkaritoday.in",6],["pastescript.com",6],["trimorspacks.com",6],["updrop.link",6],["mynewsmedia.co",6],["overgal.com",6],["howtoconcepts.com",6],["ikramlar.online",6],["choiceappstore.xyz",6],["djpunjab2.in",6],["djqunjab.in",6],["foodxor.com",6],["geniussolutions.co",6],["mealcold.com",6],["mixrootmods.com",6],["fartechy.com",6],["investcrust.com",6],["bantenexis.com",6],["litonmods.com",6],["universitiesonline.xyz",6],["worldmak.com",6],["wenxuecity.com",6],["kiwiexploits.com",6],["romadd.com",6],["disheye.com",6],["homeairquality.org",[6,41]],["techtrim.tech",6],["arhplyrics.in",6],["raky.in",6],["askpaccosi.com",6],["crypto4tun.com",6],["quizack.com",6],["moddingzone.in",6],["apkandroidhub.in",6],["babymodz.com",6],["deezloaded.com",6],["mad.gplpalace.one",6],["studyis.xyz",6],["chillx.top",6],["worldappsstore.xyz",6],["prepostseo.com",6],["dulichkhanhhoa.net",6],["noithatmyphu.vn",6],["iptvjournal.com",6],["dramaworldhd.co",6],["tudaydeals.com",6],["inbbotlist.com",6],["freepreset.net",6],["getintoway.com",6],["crdroid.net",6],["zerion.cc",6],["beelink.pro",6],["hax.co.id",6],["woiden.id",6],["pviewer.site",6],["theusaposts.com",6],["hackr.io",6],["rendimentibtp.it",6],["sportfacts.net",6],["sportshub.to",6],["sportnews.to",6],["esopress.com",6],["welovecrypto.xyz",6],["paketmu.com",6],["coins-town.com",6],["watchx.top",6],["bitcosite.com",6],["bitzite.com",6],["globlenews.in",6],["programmingeeksclub.com",6],["archivebate.com",6],["now.gg",6],["now.us",6],["xn--31byd1i.net",6],["unitystr.com",6],["moto.it",6],["wellness4live.com",6],["forplayx.ink",6],["ghscanner.com",6],["sat.technology",6],["moviesapi.club",6],["bestx.stream",6],["boosterx.stream",6],["automoto.it",6],["olarila.com",6],["techedubyte.com",6],["snapwordz.com",6],["toolxox.com",6],["go2share.net",6],["flixscans.com",6],["animesync.org",6],["freewsad.com",6],["yt-downloaderz.com",6],["hostmath.com",6],["urlcut.ninja",6],["fplstatistics.co.uk",6],["marinetraffic.live",6],["99corporates.com",6],["fivemdev.org",6],["winlator.com",6],["freetvsports.xyz",6],["sabornutritivo.com",6],["metrolagu.cam",6],["loot-link.com",6],["loot-links.com",6],["lootdest.com",6],["los40.com",6],["muyinteresante.es",7],["ani-stream.com",8],["uflash.tv",9],["oko.sh",[10,43]],["joyn.de",11],["joyn.at",11],["tf1.fr",12],["exe.app",13],["eio.io",13],["ufacw.com",13],["figurehunter.net",13],["workink.click",14],["work.ink",15],["u.co.uk",16],["uktvplay.co.uk",16],["uktvplay.uktv.co.uk",16],["jpopsingles.eu",17],["hentaihaven.xxx",18],["imasdk.googleapis.com",19],["envato-downloader.com",20],["freepik-downloader.com",20],["freepic-downloader.com",20],["tv.bdix.live",21],["botrix.live",22],["vtmgo.be",23],["zerioncc.pl",23],["tradingview.com",23],["estudyme.com",23],["scrolller.com",23],["journaldemontreal.com",23],["tvanouvelles.ca",23],["boxingstreams100.com",23],["mlbstreams100.com",23],["mmastreams-100.tv",23],["nbastreams-100.tv",23],["soccerstreams-100.tv",23],["vods.tv",23],["atresplayer.com",23],["assettoworld.com",23],["independent.co.uk",23],["wunderground.com",23],["gunauc.net",24],["buffsports.me",25],["lemino.docomo.ne.jp",26],["soccerinhd.com",27],["kfc.com",28],["crazygames.com",29],["freeshot.live",30],["plustream.com",31],["online-filmek.ac",32],["hancinema.net",33],["javfc2.xyz",34],["ruidrive.com",35],["money.bg",35],["realmadryt.pl",35],["textreverse.com",36],["starkroboticsfrc.com",37],["sinonimos.de",37],["antonimos.de",37],["quesignifi.ca",37],["tiktokrealtime.com",37],["tiktokcounter.net",37],["tpayr.xyz",37],["poqzn.xyz",37],["ashrfd.xyz",37],["rezsx.xyz",37],["tryzt.xyz",37],["ashrff.xyz",37],["rezst.xyz",37],["dawenet.com",37],["erzar.xyz",37],["waezm.xyz",37],["waezg.xyz",37],["blackwoodacademy.org",37],["cryptednews.space",37],["vivuq.com",37],["swgop.com",37],["vbnmll.com",37],["telcoinfo.online",37],["dshytb.com",37],["top10cafe.se",38],["mdn.lol",39],["bitcotasks.com",39],["btcbitco.in",40],["btcsatoshi.net",40],["cempakajaya.com",40],["crypto4yu.com",40],["gainl.ink",40],["readbitcoin.org",40],["wiour.com",40],["senda.pl",41],["tvi.la",43],["iir.la",43],["tii.la",43],["ckk.ai",43],["oei.la",43],["lnbz.la",43],["oii.la",43],["tpi.li",43],["exactpay.online",44],["filesupload.in",45],["hindustantimes.com",45],["camarchive.tv",46],["cybermania.ws",47],["fapdrop.com",47],["idlixofficialx.com",47],["idlixplus.co",47],["linkpoi.me",48],["platform.adex.network",49],["mcrypto.club",50],["coinsparty.com",50],["weszlo.com",50],["simplebits.io",51],["timesnowhindi.com",52],["timesnowmarathi.com",52],["timesofindia.com",52],["1cloudfile.com",54],["wyze.com",55],["mmorpg.org.pl",56],["rule34porn.net",57],["dongknows.com",58],["forsal.pl",59],["2the.space",60],["freeshib.biz",61],["doge25.in",62],["theappstore.org",63],["dogdrip.net",64],["deutschekanale.com",65],["soranews24.com",66],["bravedown.com",67],["smartkhabrinews.com",68],["ortograf.pl",69],["mixrootmod.com",70],["explorecams.com",71],["southpark.de",72],["riuria.beauty",73],["getthit.com",74],["sonixgvn.net",75],["everand.com",76],["search.brave.com",77],["coursera.org",78],["nytimes.com",79],["blog.cloudflare.com",80],["www.cloudflare.com",80],["notion.so",81],["olympics.com",82],["ceramic.or.kr",83],["timesofindia.indiatimes.com",84],["loom.com",85],["pimylifeup.com",86],["seazon.fr",87],["html5.gamedistribution.com",88],["premio.io",89],["flygbussarna.se",90],["infinityscans.xyz",91],["infinityscans.net",91],["nicovideo.jp",92]]);

const entitiesMap = new Map([["fc-lc",0],["zone-telechargement",1],["bombuj",5],["pobre",5],["bg-gledai",6]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function noFetchIf(
    propsToMatch = '',
    responseBody = '',
    responseType = ''
) {
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('prevent-fetch', propsToMatch, responseBody, responseType);
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
        needles.push({ key, pattern: safe.initPattern(value, { canNegate: true }) });
    }
    const validResponseProps = {
        ok: [ false, true ],
        statusText: [ '', 'Not Found' ],
        type: [ 'basic', 'cors', 'default', 'error', 'opaque' ],
    };
    const responseProps = {
        statusText: { value: 'OK' },
    };
    if ( /^\{.*\}$/.test(responseType) ) {
        try {
            Object.entries(JSON.parse(responseType)).forEach(([ p, v ]) => {
                if ( validResponseProps[p] === undefined ) { return; }
                if ( validResponseProps[p].includes(v) === false ) { return; }
                responseProps[p] = { value: v };
            });
        }
        catch(ex) {}
    } else if ( responseType !== '' ) {
        if ( validResponseProps.type.includes(responseType) ) {
            responseProps.type = { value: responseType };
        }
    }
    proxyApplyFn('fetch', function fetch(context) {
        const { callArgs } = context;
        const details = callArgs[0] instanceof self.Request
            ? callArgs[0]
            : Object.assign({ url: callArgs[0] }, callArgs[1]);
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
            if ( safe.logLevel > 1 || propsToMatch === '' && responseBody === '' ) {
                const out = Array.from(props).map(a => `${a[0]}:${a[1]}`);
                safe.uboLog(logPrefix, `Called: ${out.join('\n')}`);
            }
            if ( propsToMatch === '' && responseBody === '' ) {
                return context.reflect();
            }
            proceed = needles.length === 0;
            for ( const { key, pattern } of needles ) {
                if (
                    pattern.expect && props.has(key) === false ||
                    safe.testPattern(pattern, props.get(key)) === false
                ) {
                    proceed = true;
                    break;
                }
            }
        } catch(ex) {
        }
        if ( proceed ) {
            return context.reflect();
        }
        return Promise.resolve(generateContentFn(false, responseBody)).then(text => {
            safe.uboLog(logPrefix, `Prevented with response "${text}"`);
            const response = new Response(text, {
                headers: {
                    'Content-Length': text.length,
                }
            });
            const props = Object.assign(
                { url: { value: details.url } },
                responseProps
            );
            safe.Object_defineProperties(response, props);
            return response;
        });
    });
}

function generateContentFn(trusted, directive) {
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
        return randomize(10);
    }
    if ( directive === 'emptyObj' ) {
        return '{}';
    }
    if ( directive === 'emptyArr' ) {
        return '[]';
    }
    if ( directive === 'emptyStr' ) {
        return '';
    }
    if ( directive.startsWith('length:') ) {
        const match = /^length:(\d+)(?:-(\d+))?$/.exec(directive);
        if ( match === null ) { return ''; }
        const min = parseInt(match[1], 10);
        const extent = safe.Math_max(parseInt(match[2], 10) || 0, min) - min;
        const len = safe.Math_min(min + extent * safe.Math_random(), 500000);
        return randomize(len | 0);
    }
    if ( directive.startsWith('war:') ) {
        if ( scriptletGlobals.warOrigin === undefined ) { return ''; }
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
        }).catch(( ) => '');
    }
    if ( trusted ) {
        return directive;
    }
    return '';
}

function proxyApplyFn(
    target = '',
    handler = ''
) {
    let context = globalThis;
    let prop = target;
    for (;;) {
        const pos = prop.indexOf('.');
        if ( pos === -1 ) { break; }
        context = context[prop.slice(0, pos)];
        if ( context instanceof Object === false ) { return; }
        prop = prop.slice(pos+1);
    }
    const fn = context[prop];
    if ( typeof fn !== 'function' ) { return; }
    if ( proxyApplyFn.CtorContext === undefined ) {
        proxyApplyFn.ctorContexts = [];
        proxyApplyFn.CtorContext = class {
            constructor(...args) {
                this.init(...args);
            }
            init(callFn, callArgs) {
                this.callFn = callFn;
                this.callArgs = callArgs;
                return this;
            }
            reflect() {
                const r = Reflect.construct(this.callFn, this.callArgs);
                this.callFn = this.callArgs = undefined;
                proxyApplyFn.ctorContexts.push(this);
                return r;
            }
            static factory(...args) {
                return proxyApplyFn.ctorContexts.length !== 0
                    ? proxyApplyFn.ctorContexts.pop().init(...args)
                    : new proxyApplyFn.CtorContext(...args);
            }
        };
        proxyApplyFn.applyContexts = [];
        proxyApplyFn.ApplyContext = class {
            constructor(...args) {
                this.init(...args);
            }
            init(callFn, thisArg, callArgs) {
                this.callFn = callFn;
                this.thisArg = thisArg;
                this.callArgs = callArgs;
                return this;
            }
            reflect() {
                const r = Reflect.apply(this.callFn, this.thisArg, this.callArgs);
                this.callFn = this.thisArg = this.callArgs = undefined;
                proxyApplyFn.applyContexts.push(this);
                return r;
            }
            static factory(...args) {
                return proxyApplyFn.applyContexts.length !== 0
                    ? proxyApplyFn.applyContexts.pop().init(...args)
                    : new proxyApplyFn.ApplyContext(...args);
            }
        };
    }
    const fnStr = fn.toString();
    const toString = (function toString() { return fnStr; }).bind(null);
    const proxyDetails = {
        apply(target, thisArg, args) {
            return handler(proxyApplyFn.ApplyContext.factory(target, thisArg, args));
        },
        get(target, prop) {
            if ( prop === 'toString' ) { return toString; }
            return Reflect.get(target, prop);
        },
    };
    if ( fn.prototype?.constructor === fn ) {
        proxyDetails.construct = function(target, args) {
            return handler(proxyApplyFn.CtorContext.factory(target, args));
        };
    }
    context[prop] = new Proxy(fn, proxyDetails);
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
        'Object_defineProperties': Object.defineProperties.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String_fromCharCode': String.fromCharCode,
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
                return { matchAll: true, expect: true };
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
        offIdle(id) {
            if ( self.requestIdleCallback ) {
                return self.cancelIdleCallback(id);
            }
            return self.cancelAnimationFrame(id);
        }
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
    let bcBuffer = [];
    safe.logLevel = scriptletGlobals.logLevel || 1;
    let lastLogType = '';
    let lastLogText = '';
    let lastLogTime = 0;
    safe.sendToLogger = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( text === lastLogText && type === lastLogType ) {
            if ( (Date.now() - lastLogTime) < 5000 ) { return; }
        }
        lastLogType = type;
        lastLogText = text;
        lastLogTime = Date.now();
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
try {
    let origin = document.location.origin;
    if ( origin === 'null' ) {
        const origins = document.location.ancestorOrigins;
        for ( let i = 0; i < origins.length; i++ ) {
            origin = origins[i];
            if ( origin !== 'null' ) { break; }
        }
    }
    const pos = origin.lastIndexOf('://');
    if ( pos === -1 ) { return; }
    hnParts.push(...origin.slice(pos+3).split('.'));
}
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
