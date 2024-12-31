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

const argsList = [["adsbygoogle"],["/^/"],["player-feedback"],["openx"],["method:HEAD"],["ads"],["googlesyndication"],["googlesyndication","method:HEAD"],["damoh.ani-stream.com"],["ujsmediatags method:HEAD"],["/googlesyndication|inklinkor|ads\\/load/"],["googlesyndication","length:2001"],["zomap.de"],["adsafeprotected"],["google"],["url:!luscious.net"],["doubleclick","","{\"type\": \"opaque\"}"],["bmcdn6"],["/adoto|\\/ads\\/js/"],["googletagmanager"],["syndication"],["/googlesyndication|inklinkor/"],["surfe.pro"],["adsbygoogle.js"],["popunder"],["doubleclick"],["doubleclick.net/instream/ad_status.js","war:doubleclick_instream_ad_status.js"],["manager"],["moonicorn.network"],["ad"],["/ads"],["method:HEAD url:doubleclick.net"],["tvid.in/log"],["cloudfront.net/?"],["/nerveheels/"],["analytics"],["/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["wtg-ads"],["/ad-provider"],["/ads|doubleclick/"],["dqst.pl"],["uniconsent.com","length:2300"],["googlesyndication.com"],["vlitag"],["/ads|track/"],["adsbygoogle","length:11000"],["/ad\\.doubleclick\\.net|static\\.dable\\.io/"],["imasdk"],["tpc.googlesyndication.com"],["thaudray.com"],["adskeeper"],["/freychang|passback|popunder|tag|banquetunarmedgrater/"],["google-analytics"],["ima"],["/adoto|googlesyndication/"],["ad-delivery"],["ima3_dai"],["imasdk.googleapis.com"],["method:GET"],["/ads|googletagmanager/"],["/doubleclick|googlesyndication/","length:10","{\"type\":\"cors\"}"],["/doubleclick|googlesyndication|vlitag/","length:10","{\"type\": \"cors\"}"],["/api/v1/events"],["cloudfront"],["/outbrain|criteo|thisiswaldo|media\\.net|ohbayersbur|adligature|quantserve|srvtrck|\\.css|\\.js/"],["fwmrm.net"],["ads","length:10","{\"type\": \"cors\"}"],["ads-twitter.com"],["secure.adnxs.com/ptv","war:noop-vast4.xml"],["googlesyndication","length:10000"],["googlesyndication","","{\"type\":\"cors\"}"],["pogo"],["doubleclick.net"],["/doubleclick|googlesyndication/"],["jssdks.mparticle.com"],["/adinplay|googlesyndication/"],["/outbrain|adligature|quantserve|adligature|srvtrck/"],["youradexchange"],["adligature"],["/clarity|googlesyndication/"],["thanksgivingdelights"],["snigelweb.com"],["cdnpk.net/Rest/Media/","war:noop.json"],["/gampad/ads?"],["googletagmanager","length:10"],["fundingchoicesmessages"],["/googlesyndication|googletagservices/"],["body:browser"],["eventing"],["api.theathletic.com/graphql body:/PostEvent|PostImpressions/"],["method:POST body:zaraz"],["splunkcloud.com/services/collector"],["event-router.olympics.com"],["hostingcloud.racing"],["tvid.in/log/"],["loom.com/insights-api/graphql"],["segment.io"],["mparticle.com"],["pluto.smallpdf.com"],["method:/post/i url:/^https?:\\/\\/chatgpt\\.com\\/ces\\/v1\\/[a-z]$/"],["method:/post/i url:ab.chatgpt.com/v1/rgstr"],["marmalade"],["url:ipapi.co"],["api"],["cloudflare.com/cdn-cgi/trace"],["/piwik-"],["stella"]];

const hostnamesMap = new Map([["allmusic.com",0],["wowescape.com",0],["leechpremium.link",0],["camcam.cc",0],["png.is",0],["nohat.cc",0],["tmail.io",0],["isi7.net",0],["hyipstats.net",0],["palixi.net",0],["freecoursesonline.me",0],["pinloker.com",0],["client.falixnodes.net",0],["sshkit.com",0],["fastssh.com",0],["howdy.id",0],["okiemrolnika.pl",0],["pandadevelopment.net",0],["decrypt.day",0],["anakteknik.co.id",0],["javball.com",0],["visalist.io",0],["skidrowreloaded.com",1],["pinoyfaucet.com",1],["topsporter.net",1],["player.glomex.com",2],["htmlgames.com",3],["mac2sell.net",4],["gamebrew.org",4],["game3rb.com",4],["sixsave.com",4],["bowfile.com",[4,33]],["dealsfinders.blog",4],["iphonechecker.herokuapp.com",4],["coloringpage.eu",4],["conocimientoshackers.com",4],["juegosdetiempolibre.org",4],["karaokegratis.com.ar",4],["mammaebambini.it",4],["riazor.org",4],["rinconpsicologia.com",4],["sempredirebanzai.it",4],["vectogravic.com",4],["androidacy.com",4],["freetohell.com",4],["lifestyle.bg",[4,58]],["news.bg",[4,58]],["topsport.bg",[4,58]],["webcafe.bg",[4,58]],["investing.com",5],["mylivewallpapers.com",5],["softfully.com",5],["naukrilelo.in",5],["reminimod.co",5],["highkeyfinance.com",5],["amanguides.com",5],["adcrypto.net",5],["admediaflex.com",5],["aduzz.com",5],["bitcrypto.info",5],["cdrab.com",5],["datacheap.io",5],["hbz.us",5],["savego.org",5],["owsafe.com",5],["sportweb.info",5],["apkupload.in",5],["ezeviral.com",5],["pngreal.com",5],["ytpng.net",5],["travel.vebma.com",5],["cloud.majalahhewan.com",5],["crm.cekresi.me",5],["ai.tempatwisata.pro",5],["cinedesi.in",5],["thevouz.in",5],["tejtime24.com",5],["techishant.in",5],["mtcremix.com",5],["advicefunda.com",5],["bestloanoffer.net",5],["computerpedia.in",[5,20]],["techconnection.in",5],["key-hub.eu",5],["discoveryplus.in",5],["calculator-online.net",5],["tutorial.siberuang.com",5],["desiflixindia.com",5],["dotabuff.com",5],["forum.cstalking.tv",5],["mcqmall.com",5],["apksafe.in",5],["witcherhour.com",5],["clamor.pl",5],["one-tech.xyz",5],["ozulscans.com",5],["i-polls.com",5],["insurancevela.com",5],["noor-book.com",5],["wrzesnia.info.pl",5],["elahmad.com",5],["compromath.com",5],["sumoweb.to",5],["haloursynow.pl",5],["satkurier.pl",5],["mtg-print.com",5],["gktech.uk",5],["heavy.com",5],["creators.nafezly.com",5],["downloadfilm.website",5],["uploadsea.com",5],["pornovka.cz",5],["fplstatistics.com",5],["cheater.ninja",5],["govtportal.org",5],["faucetcrypto.com",6],["toolss.net",6],["odisha-remix.com",6],["themoviesradar.in",6],["forexsalary.com",6],["dailywebsite.in",6],["mamatamusicbanaras.com",6],["missionupsc.com",6],["tea-coffee.net",6],["spatsify.com",6],["newedutopics.com",6],["getviralreach.in",6],["edukaroo.com",6],["funkeypagali.com",6],["careersides.com",6],["nayisahara.com",6],["wikifilmia.com",6],["infinityskull.com",6],["viewmyknowledge.com",6],["iisfvirtual.in",6],["starxinvestor.com",6],["jkssbalerts.com",6],["acetack.com",6],["androidquest.com",6],["apklox.com",6],["chhaprawap.in",6],["gujarativyakaran.com",6],["kashmirstudentsinformation.in",6],["kisantime.com",6],["shetkaritoday.in",6],["pastescript.com",6],["trimorspacks.com",6],["updrop.link",6],["mynewsmedia.co",6],["overgal.com",6],["howtoconcepts.com",6],["ikramlar.online",6],["choiceappstore.xyz",6],["djpunjab2.in",6],["djqunjab.in",6],["foodxor.com",6],["geniussolutions.co",6],["mealcold.com",6],["mixrootmods.com",6],["fartechy.com",6],["investcrust.com",6],["bantenexis.com",6],["litonmods.com",6],["universitiesonline.xyz",6],["worldmak.com",6],["wenxuecity.com",6],["kiwiexploits.com",6],["disheye.com",6],["homeairquality.org",[6,19]],["techtrim.tech",6],["arhplyrics.in",6],["raky.in",6],["askpaccosi.com",6],["quizack.com",6],["apkandroidhub.in",6],["babymodz.com",6],["deezloaded.com",6],["mad.gplpalace.one",6],["studyis.xyz",6],["chillx.top",6],["prepostseo.com",6],["dulichkhanhhoa.net",6],["noithatmyphu.vn",6],["iptvjournal.com",6],["dramaworldhd.co",6],["tudaydeals.com",6],["inbbotlist.com",6],["getintoway.com",6],["crdroid.net",6],["zerion.cc",6],["beelink.pro",6],["hax.co.id",6],["woiden.id",6],["theusaposts.com",6],["hackr.io",6],["rendimentibtp.it",6],["sportfacts.net",6],["sportshub.to",6],["sportnews.to",6],["esopress.com",6],["welovecrypto.xyz",6],["paketmu.com",6],["watchx.top",6],["bitcosite.com",6],["bitzite.com",6],["coinsrev.com",6],["globlenews.in",6],["programmingeeksclub.com",6],["archivebate.com",6],["now.gg",6],["now.us",6],["nowgg.lol",6],["skibiditoilet.yourmom.eu.org",6],["xn--31byd1i.net",6],["unitystr.com",6],["moto.it",6],["wellness4live.com",6],["forplayx.ink",6],["ghscanner.com",6],["sat.technology",6],["moviesapi.club",6],["bestx.stream",6],["boosterx.stream",6],["automoto.it",6],["olarila.com",6],["techedubyte.com",6],["snapwordz.com",6],["toolxox.com",6],["go2share.net",6],["flixscans.com",6],["animesync.org",6],["freewsad.com",6],["yt-downloaderz.com",6],["hostmath.com",6],["urlcut.ninja",6],["fplstatistics.co.uk",6],["marinetraffic.live",6],["99corporates.com",6],["fivemdev.org",6],["winlator.com",6],["freetvsports.xyz",6],["sabornutritivo.com",6],["metrolagu.cam",6],["loot-link.com",6],["loot-links.com",6],["lootdest.com",6],["megane.com.pl",6],["flixscans.org",6],["civitai.com",6],["streamer4u.site",6],["imagetranslator.io",6],["visnalize.com",6],["tekken8combo.kagewebsite.com",6],["custommapposter.com",6],["scenexe2.io",6],["bgmateriali.com",6],["ncaa.com",6],["gurusiana.id",6],["dichvureviewmap.com",6],["technofino.in",6],["vinstartheme.com",6],["downev.com",6],["movierr.online",6],["vectorx.top",6],["bong.ink",6],["zippyshare.day",6],["x265rips.xyz",6],["modescanlator.net",6],["livexscores.com",6],["101soundboards.com",6],["freedrivemovie.com",6],["1tamilprint.art",6],["leakshaven.com",6],["dfbplay.tv",6],["sheepesports.com",6],["los40.com",6],["muyinteresante.es",7],["ani-stream.com",8],["uflash.tv",9],["oko.sh",[10,21]],["duden.de",11],["joyn.de",12],["joyn.at",12],["tf1.fr",13],["exe.app",14],["eio.io",14],["ufacw.com",14],["figurehunter.net",14],["luscious.net",15],["starkroboticsfrc.com",16],["sinonimos.de",16],["antonimos.de",16],["quesignifi.ca",16],["tiktokrealtime.com",16],["tiktokcounter.net",16],["tpayr.xyz",16],["poqzn.xyz",16],["ashrfd.xyz",16],["rezsx.xyz",16],["tryzt.xyz",16],["ashrff.xyz",16],["rezst.xyz",16],["dawenet.com",16],["erzar.xyz",16],["waezm.xyz",16],["waezg.xyz",16],["blackwoodacademy.org",16],["cryptednews.space",16],["vivuq.com",16],["swgop.com",16],["vbnmll.com",16],["telcoinfo.online",16],["dshytb.com",16],["quins.us",16],["mdn.lol",17],["bitcotasks.com",17],["btcbitco.in",18],["btcsatoshi.net",18],["cempakajaya.com",18],["crypto4yu.com",18],["gainl.ink",18],["readbitcoin.org",18],["wiour.com",18],["senda.pl",19],["tvi.la",21],["iir.la",21],["tii.la",21],["ckk.ai",21],["oei.la",21],["lnbz.la",21],["oii.la",21],["tpi.li",21],["exactpay.online",22],["filesupload.in",23],["hindustantimes.com",23],["camarchive.tv",24],["scrolller.com",25],["journaldemontreal.com",25],["tvanouvelles.ca",25],["boxingstreams100.com",25],["mlbstreams100.com",25],["mmastreams-100.tv",25],["nbastreams-100.tv",25],["soccerstreams-100.tv",25],["vods.tv",25],["atresplayer.com",25],["assettoworld.com",25],["vtmgo.be",25],["zerioncc.pl",25],["tradingview.com",25],["estudyme.com",25],["jobfound.org",25],["independent.co.uk",25],["wunderground.com",25],["cybermania.ws",26],["fapdrop.com",26],["idlixofficialx.com",26],["idlixplus.co",26],["linkpoi.me",27],["platform.adex.network",28],["mcrypto.club",29],["coinsparty.com",29],["weszlo.com",29],["simplebits.io",30],["tvnz.co.nz",31],["timesnowhindi.com",32],["timesnowmarathi.com",32],["timesofindia.com",32],["1cloudfile.com",34],["wyze.com",35],["superpsx.com",36],["mmorpg.org.pl",37],["rule34porn.net",38],["dongknows.com",39],["forsal.pl",40],["photopea.com",41],["2the.space",42],["freeshib.biz",43],["doge25.in",44],["theappstore.org",45],["dogdrip.net",46],["deutschekanale.com",47],["soranews24.com",48],["ipacrack.com",49],["bravedown.com",50],["smartkhabrinews.com",51],["freepik-downloader.com",52],["freepic-downloader.com",52],["envato-downloader.com",52],["ortograf.pl",53],["mixrootmod.com",54],["explorecams.com",55],["southpark.de",56],["riuria.beauty",57],["money.bg",58],["realmadryt.pl",58],["ruidrive.com",58],["getthit.com",59],["intro-hd.net",60],["sonixgvn.net",61],["everand.com",62],["workink.click",63],["work.ink",64],["u.co.uk",65],["uktvplay.co.uk",65],["uktvplay.uktv.co.uk",65],["jpopsingles.eu",66],["hentaihaven.xxx",67],["imasdk.googleapis.com",68],["botrix.live",69],["gunauc.net",70],["buffsports.me",71],["lemino.docomo.ne.jp",72],["soccerinhd.com",73],["kfc.com",74],["crazygames.com",75],["freeshot.live",76],["plustream.com",77],["online-filmek.ac",78],["hancinema.net",79],["javfc2.xyz",80],["textreverse.com",81],["flaticon.com",82],["shahid.mbc.net",[83,97]],["tab-maker.com",84],["faceittracker.net",85],["fmovies0.cc",86],["search.brave.com",87],["coursera.org",88],["nytimes.com",89],["blog.cloudflare.com",90],["www.cloudflare.com",90],["notion.so",91],["olympics.com",92],["ceramic.or.kr",93],["timesofindia.indiatimes.com",94],["loom.com",95],["pandadoc.com",96],["smallpdf.com",98],["chatgpt.com",[99,100]],["pimylifeup.com",101],["seazon.fr",102],["html5.gamedistribution.com",103],["premio.io",104],["flygbussarna.se",105],["nicovideo.jp",106]]);

const entitiesMap = new Map([["fc-lc",0],["zone-telechargement",1],["pobre",5],["bombuj",5],["bg-gledai",6],["tamilprint29",6],["tamilprint30",6],["tamilprint31",6],["ctrlv",25]]);

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
    for ( const condition of safe.String_split.call(propsToMatch, /\s+/) ) {
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
                this.callFn = this.callArgs = this.private = undefined;
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
                this.callFn = this.thisArg = this.callArgs = this.private = undefined;
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
        'String_split': String.prototype.split,
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
    safe.logLevel = scriptletGlobals.logLevel || 1;
    let lastLogType = '';
    let lastLogText = '';
    let lastLogTime = 0;
    safe.toLogText = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( text === lastLogText && type === lastLogType ) {
            if ( (Date.now() - lastLogTime) < 5000 ) { return; }
        }
        lastLogType = type;
        lastLogText = text;
        lastLogTime = Date.now();
        return text;
    };
    try {
        const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
        let bcBuffer = [];
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
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
    } catch(_) {
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            safe.log(`uBO ${text}`);
        };
    }
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

uBOL_noFetchIf();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
