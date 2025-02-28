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

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_preventXhr = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["request=adb"],["doubleclick"],["googlesyndication"],["/adsbygoogle|doubleclick/"],["/enthusiastgaming|googleoptimize|googletagmanager/"],["/doubleclick|googlesyndication/"],["/^(?!.*(einthusan\\.io|yahoo|rtnotif|ajax|quantcast|bugsnag))/"],["/adnxs.com|onetag-sys.com|teads.tv|google-analytics.com|rubiconproject.com|casalemedia.com/"],["ad_"],["method:HEAD"],["ads"],["svonm"],["/\\/VisitorAPI\\.js|\\/AppMeasurement\\.js/"],["inklinkor.com"],["damoh"],["homad-global-configs"],["/youboranqs01|spotx|springserve/"],["adsbygoogle"],["popunder"],["/pagead2\\.googlesyndication\\.com|inklinkor\\.com/"],["czilladx"],["/ad"],["wp-json/rsm-adutil","true"],["outbrain"],["prebid"],["wpadmngr"],["/ads"],["pub.network"],["googlesyndication","length:10"],["pagead2.googlesyndication.com"],["url:googlesyndication"],["/^/"],["/analytics|livestats/"],["mahimeta"],["ad"],["notifier"],["/ad-"],["/coinzillatag|czilladx/"],["/thaudray\\.com|putchumt\\.com/"],["php"],["/googlesyndication|doubleclick/"],["bmcdn6"],["adx"],["cls_report?"],["adswizz.com"],["googletagmanager"],["/googlesyndication|ads/"],["time-events"],["/googlesyndication|nitropay/"],["method:GET url:!/idlix|jwpcdn/"],["/doubleclick|googlesyndication/","length:10"],["/googima.js"],["/adskeeper|bidgear|googlesyndication|mgid/"],["fwmrm.net"],["/\\/ad\\/g\\/1/"],["adsbygoogle","length:10"],["adinplay.com"],["springserve.com"],["/redirector\\.googlevideo\\.com\\/videoplayback[\\s\\S]*?dclk_video_ads/"],["ad.plus"],["pubfuture","length:10"],["method:POST url:/logImpressions"],["method:POST"],["utreon.com/pl/api/event method:POST"],["log-sdk.ksapisrv.com/rest/wd/common/log/collect method:POST"],["/VisitorAPI|AppMeasurement/"],["analytics/bulk-pixel"],["cmp.inmobi.com/geoip"],["method:POST url:pfanalytics.bentasker.co.uk"],["discord.com/api/v9/science"],["/(trace|beacon)\\.qq\\.com/"],["excess.duolingo.com/batch"],["/eventLog.ajax"],["t.wayfair.com/b.php?"],["ceros.com/a?data"],["mobileanalytics"],["cloudflare.com/cdn-cgi/trace"],["/recommendations."],["/api/analytics"],["api"],["lr-ingest.io"],["/gtm.js"],["ip-api"],["/froloa.js"],["1.1.1.1/cdn-cgi/trace"],["live.streamtheworld.com/partnerIds"],["/vast.php?"],["adsbygoogle","length:35000-55000"],["/click\\.com|preroll|native_render\\.js|acscdn/","length:10001"],["162.252.214.4","true"],["stella"]];

const hostnamesMap = new Map([["handelsblatt.com",0],["moviepilot.de",1],["asiaontop.com",[1,28]],["journaldemontreal.com",1],["minhaconexao.com.br",1],["videolyrics.in",1],["sportshub.to",[1,2]],["topsporter.net",1],["meteoetradar.com",1],["gala.fr",1],["geo.fr",1],["voici.fr",1],["sankaku.app",2],["zigforums.com",2],["ge-map-overlays.appspot.com",2],["freegogpcgames.com",2],["postazap.com",2],["laweducationinfo.com",2],["savemoneyinfo.com",2],["worldaffairinfo.com",2],["godstoryinfo.com",2],["successstoryinfo.com",2],["cxissuegk.com",2],["learnmarketinfo.com",2],["bhugolinfo.com",2],["armypowerinfo.com",2],["rsadnetworkinfo.com",2],["rsinsuranceinfo.com",2],["rsfinanceinfo.com",2],["rsgamer.app",2],["rssoftwareinfo.com",2],["rshostinginfo.com",2],["rseducationinfo.com",2],["phonereviewinfo.com",2],["makeincomeinfo.com",2],["gknutshell.com",2],["vichitrainfo.com",2],["workproductivityinfo.com",2],["dopomininfo.com",2],["hostingdetailer.com",2],["fitnesssguide.com",2],["tradingfact4u.com",2],["cryptofactss.com",2],["softwaredetail.com",2],["artoffocas.com",2],["insurancesfact.com",2],["travellingdetail.com",2],["rangerboard.com",2],["informaxonline.com",[2,21]],["cambb.xxx",2],["nudecams.xxx",2],["routech.ro",2],["rontechtips.com",2],["edealinfo.com",2],["homeairquality.org",2],["techtrim.tech",2],["pigeonburger.xyz",2],["askpaccosi.com",[2,34]],["fusedgt.com",2],["apkowner.org",2],["appsmodz.com",2],["bingotingo.com",2],["superpsx.com",2],["stringreveals.com",2],["fox.com",2],["obutecodanet.ig.com.br",2],["firmwarex.net",2],["softwaretotal.net",2],["freecodezilla.net",2],["iconmonstr.com",2],["rbxscripts.net",2],["rimworldbase.com",2],["ewrc-results.com",2],["adslink.pw",2],["comentariodetexto.com",2],["wordpredia.com",2],["hilites.today",2],["sportnews.to",2],["gsmhamza.com",2],["38.242.194.12",2],["bi-girl.net",2],["idealfollow.in",2],["medeberiyaa.com",2],["samuraiscan.org",2],["shinobijawi.id",2],["snbc13.com",2],["webmatrices.com",2],["adelsfun.com",2],["advantien.com",2],["bailbondsfinder.com",2],["bigpiecreative.com",2],["childrenslibrarylady.com",2],["classifarms.com",2],["comtasq.ca",2],["crone.es",2],["ctrmarketingsolutions.com",2],["dropnudes.com",2],["ftuapps.dev",2],["genzsport.com",2],["grsprotection.com",2],["gruporafa.com.br",2],["inmatefindcalifornia.com",2],["inmatesearchidaho.com",2],["itsonsitetv.com",2],["mfmfinancials.com",2],["myproplugins.com",2],["nurulislam.org",2],["onehack.us",2],["ovester.com",2],["paste.bin.sx",2],["privatenudes.com",2],["renoconcrete.ca",2],["richieashbeck.com",2],["short1ink.com",2],["stpm.co.uk",2],["wegotcookies.co",2],["fordownloader.com",2],["intro-hd.net",2],["animehub.ac",2],["yottachess.com",2],["infidrive.net",2],["animefreak.to",2],["9animes.ru",2],["couponscorpion.com",2],["hollaforums.com",2],["powforums.com",2],["supforums.com",2],["play.nova.bg",[2,51]],["fxmag.pl",2],["toolkitspro.com",2],["meteopool.org",2],["ssstik.io",2],["animefever.cc",2],["digipuzzle.net",2],["crn.com",2],["animedao.com.ru",2],["pinsystem.co.uk",3],["thesimsresource.com",4],["gnomio.com",5],["techacode.com",5],["trangchu.news",5],["cybermania.ws",5],["techhelpbd.com",5],["youmath.it",7],["frkn64modding.com",8],["gearingcommander.com",10],["airevue.net",10],["novelmultiverse.com",10],["taming.io",10],["cekip.site",10],["snlookup.com",10],["globfone.com",10],["chimicamo.org",10],["webforefront.com",10],["apkmagic.com.ar",10],["reaperscans.id",10],["freecoursesonline.me",10],["filmisub.cc",10],["filmesdostorrenthd.net",10],["play-games.com",10],["gameszap.com",10],["differenceprimitive85p.shop",10],["vox.de",11],["vip.de",11],["rtl.de",11],["cinema.de",11],["nationalgeographic.fr",12],["oko.sh",[13,19]],["golem.de",14],["wetter.de",15],["rakuten.tv",16],["hausbau-forum.de",17],["hipsonyc.com",17],["theforyou.in",17],["gyanitheme.com",17],["hostadviser.net",17],["bloggingaro.com",17],["khaddavi.net",17],["lokerwfh.net",17],["emoji.gg",17],["texture-packs.com",17],["manyakan.com",17],["persianhive.com",17],["boainformacao.com.br",17],["gcertificationcourse.com",17],["portaliz.site",17],["tech-story.net",17],["visalist.io",17],["litecoin.host",17],["blackhatworld.com",17],["ainonline.com",17],["dailyrevs.com",17],["uptime4.com",17],["swdw.net",17],["cmtracker.net",17],["icegame.ro",17],["cookni.net",17],["aiimgvlog.fun",18],["bestclaimtrx.xyz",18],["freebinance.top",18],["tvi.la",19],["iir.la",19],["tii.la",19],["ckk.ai",19],["oei.la",19],["lnbz.la",19],["oii.la",19],["tpi.li",19],["exactpay.online",20],["claim.fun",20],["faucetcrypto.net",20],["cashbux.work",20],["citytv.com",22],["file4go.net",23],["jetpunk.com",24],["mcrypto.club",25],["coinsparty.com",25],["simplebits.io",26],["flightsim.to",27],["1cloudfile.com",29],["koramaup.com",29],["stardeos.com",30],["freewp.io",31],["goduke.com",32],["1apple.xyz",33],["semprefi-7oliaqnr.fun",34],["uh0keqp.cfd",34],["pj8ltpy.sbs",34],["bxxlnch2.fun",34],["o3vuf42.cfd",34],["put1xpp.cfd",34],["e7o8t6oh.fun",34],["l21io75f.fun",34],["wymec6al.fun",34],["d49mwlqz.fun",34],["99lg2cla.fun",34],["a-b-fnv7h0323ap2wfqj1ruyo8id2bcuoq4kufzon-b-d-t-s.fun",34],["a-b-f-dd-aa-bb-ccn1nff.fun",34],["e1hst.fun",34],["zgdpo8nr.fun",34],["morgan0928-6v7c14vs.fun",34],["a-b-fjkt8v1pxgzrc3lqoaz8fh7pjgygf4zh3eqhl-b-d-t-s.fun",34],["fs5mgyzt.fun",34],["93gyqqqr.fun",34],["a-b-f7mh86v4lirbwg7m4qiwwlk2e4za9uyngqy1u-b-d-t-s.fun",34],["nbub3so6.fun",34],["kjx4015m.fun",34],["7us7m00f.fun",34],["2g8rktp1fn9feqlhxexsw8o4snafapdh9dn1.fun",34],["semprefi-uat4a3jd.fun",34],["b5hqh.fun",34],["semprefi-1h3u8pkc.fun",34],["be43473e.fun",34],["semprefi-hdm6l8jq.fun",34],["ipzmbq01.fun",34],["fk3e64wk.fun",34],["filemoon-oe4w6g0u.xyz",34],["o8ijdspf.fun",34],["file-kg88oaak-embed.com",34],["uw3hosfq.fun",34],["tzodmjqs.fun",34],["ipq9967n.fun",34],["do3jhxk8.fun",34],["s09di1hl.fun",34],["a0rkwq5w.fun",34],["mee-dp6h8dp2.com",34],["xoywkiny.fun",34],["filemoon-ep11lgxt.xyz",34],["5zs4rox7.fun",34],["ft41yaem.fun",34],["iq9jhehu.fun",34],["71pwq6sf.fun",34],["vvoge3du.fun",34],["fle-5r8dchma-moo.com",34],["a-b-f-dd-aa-bb-ccyh5my.fun",34],["lavanguardia.com",35],["foodsdictionary.co.il",36],["freesolana.top",37],["farescd.com",39],["getintoway.com",40],["tuktukcinma.com",40],["bitcotasks.com",41],["freetron.top",42],["earncrypto.co.in",42],["citi.com",43],["hotfm.audio",44],["maxt.church",45],["srvy.ninja",46],["history.com",47],["osuskinner.com",48],["osuskins.net",48],["idlix.asia",49],["alliptvlinks.com",50],["u.co.uk",53],["uktvplay.co.uk",53],["uktvplay.uktv.co.uk",53],["channel4.com",54],["pomofocus.io",55],["royaledudes.io",56],["tptvencore.co.uk",57],["sbs.com.au",58],["opentunnel.net",59],["hunterscomics.com",60],["docs.google.com",61],["endbasic.dev",62],["jmmv.dev",62],["fingerprint.com",62],["utreon.com",63],["zhihu.com",64],["natgeotv.com",65],["airtel.in",66],["dailystar.co.uk",67],["mirror.co.uk",67],["bentasker.co.uk",68],["discord.com",69],["meeting.tencent.com",70],["duolingo.com",71],["study.com",72],["wayfair.com",73],["view.ceros.com",74],["viu.com",75],["myair2.resmed.com",76],["travelerdoor.com",76],["azby.fmworld.net",77],["unrealengine.com",78],["wco.tv",79],["dark-gaming.com",80],["securegames.iwin.com",81],["neilpatel.com",82],["virginmediatelevision.ie",83],["myair.resmed.com",84],["player.amperwave.net",85],["poophq.com",[86,87,88,89]],["veev.to",[86,87,88,89]],["nicovideo.jp",90]]);

const entitiesMap = new Map([["asiaon",[1,28]],["nsw2u",2],["cinemakottaga",2],["apkmaven",2],["blurayufr",2],["teluguflix",2],["bg-gledai",2],["gledaitv",2],["kissanime",2],["animepahe",2],["einthusan",6],["animeheaven",9],["khatrimaza",10],["moviegan",10],["writedroid",10],["empire-anime",29],["empire-stream",29],["empire-streaming",29],["empire-streamz",29],["streamingcommunity",38],["readcomiconline",52]]);

const exceptionsMap = new Map([["dev.fingerprint.com",[62]]]);

/******************************************************************************/

function preventXhr(...args) {
    return preventXhrFn(false, ...args);
}

function preventXhrFn(
    trusted = false,
    propsToMatch = '',
    directive = ''
) {
    if ( typeof propsToMatch !== 'string' ) { return; }
    const safe = safeSelf();
    const scriptletName = trusted ? 'trusted-prevent-xhr' : 'prevent-xhr';
    const logPrefix = safe.makeLogPrefix(scriptletName, propsToMatch, directive);
    const xhrInstances = new WeakMap();
    const propNeedles = parsePropertiesToMatch(propsToMatch, 'url');
    const warOrigin = scriptletGlobals.warOrigin;
    const safeDispatchEvent = (xhr, type) => {
        try {
            xhr.dispatchEvent(new Event(type));
        } catch {
        }
    };
    const XHRBefore = XMLHttpRequest.prototype;
    self.XMLHttpRequest = class extends self.XMLHttpRequest {
        open(method, url, ...args) {
            xhrInstances.delete(this);
            if ( warOrigin !== undefined && url.startsWith(warOrigin) ) {
                return super.open(method, url, ...args);
            }
            const haystack = { method, url };
            if ( propsToMatch === '' && directive === '' ) {
                safe.uboLog(logPrefix, `Called: ${safe.JSON_stringify(haystack, null, 2)}`);
                return super.open(method, url, ...args);
            }
            if ( matchObjectProperties(propNeedles, haystack) ) {
                const xhrDetails = Object.assign(haystack, {
                    xhr: this,
                    defer: args.length === 0 || !!args[0],
                    directive,
                    headers: {
                        'date': '',
                        'content-type': '',
                        'content-length': '',
                    },
                    url: haystack.url,
                    props: {
                        response: { value: '' },
                        responseText: { value: '' },
                        responseXML: { value: null },
                    },
                });
                xhrInstances.set(this, xhrDetails);
            }
            return super.open(method, url, ...args);
        }
        send(...args) {
            const xhrDetails = xhrInstances.get(this);
            if ( xhrDetails === undefined ) {
                return super.send(...args);
            }
            xhrDetails.headers['date'] = (new Date()).toUTCString();
            let xhrText = '';
            switch ( this.responseType ) {
            case 'arraybuffer':
                xhrDetails.props.response.value = new ArrayBuffer(0);
                xhrDetails.headers['content-type'] = 'application/octet-stream';
                break;
            case 'blob':
                xhrDetails.props.response.value = new Blob([]);
                xhrDetails.headers['content-type'] = 'application/octet-stream';
                break;
            case 'document': {
                const parser = new DOMParser();
                const doc = parser.parseFromString('', 'text/html');
                xhrDetails.props.response.value = doc;
                xhrDetails.props.responseXML.value = doc;
                xhrDetails.headers['content-type'] = 'text/html';
                break;
            }
            case 'json':
                xhrDetails.props.response.value = {};
                xhrDetails.props.responseText.value = '{}';
                xhrDetails.headers['content-type'] = 'application/json';
                break;
            default: {
                if ( directive === '' ) { break; }
                xhrText = generateContentFn(trusted, xhrDetails.directive);
                if ( xhrText instanceof Promise ) {
                    xhrText = xhrText.then(text => {
                        xhrDetails.props.response.value = text;
                        xhrDetails.props.responseText.value = text;
                    });
                } else {
                    xhrDetails.props.response.value = xhrText;
                    xhrDetails.props.responseText.value = xhrText;
                }
                xhrDetails.headers['content-type'] = 'text/plain';
                break;
            }
            }
            if ( xhrDetails.defer === false ) {
                xhrDetails.headers['content-length'] = `${xhrDetails.props.response.value}`.length;
                Object.defineProperties(xhrDetails.xhr, {
                    readyState: { value: 4 },
                    responseURL: { value: xhrDetails.url },
                    status: { value: 200 },
                    statusText: { value: 'OK' },
                });
                Object.defineProperties(xhrDetails.xhr, xhrDetails.props);
                return;
            }
            Promise.resolve(xhrText).then(( ) => xhrDetails).then(details => {
                Object.defineProperties(details.xhr, {
                    readyState: { value: 1, configurable: true },
                    responseURL: { value: xhrDetails.url },
                });
                safeDispatchEvent(details.xhr, 'readystatechange');
                return details;
            }).then(details => {
                xhrDetails.headers['content-length'] = `${details.props.response.value}`.length;
                Object.defineProperties(details.xhr, {
                    readyState: { value: 2, configurable: true },
                    status: { value: 200 },
                    statusText: { value: 'OK' },
                });
                safeDispatchEvent(details.xhr, 'readystatechange');
                return details;
            }).then(details => {
                Object.defineProperties(details.xhr, {
                    readyState: { value: 3, configurable: true },
                });
                Object.defineProperties(details.xhr, details.props);
                safeDispatchEvent(details.xhr, 'readystatechange');
                return details;
            }).then(details => {
                Object.defineProperties(details.xhr, {
                    readyState: { value: 4 },
                });
                safeDispatchEvent(details.xhr, 'readystatechange');
                safeDispatchEvent(details.xhr, 'load');
                safeDispatchEvent(details.xhr, 'loadend');
                safe.uboLog(logPrefix, `Prevented with response:\n${details.xhr.response}`);
            });
        }
        getResponseHeader(headerName) {
            const xhrDetails = xhrInstances.get(this);
            if ( xhrDetails === undefined || this.readyState < this.HEADERS_RECEIVED ) {
                return super.getResponseHeader(headerName);
            }
            const value = xhrDetails.headers[headerName.toLowerCase()];
            if ( value !== undefined && value !== '' ) { return value; }
            return null;
        }
        getAllResponseHeaders() {
            const xhrDetails = xhrInstances.get(this);
            if ( xhrDetails === undefined || this.readyState < this.HEADERS_RECEIVED ) {
                return super.getAllResponseHeaders();
            }
            const out = [];
            for ( const [ name, value ] of Object.entries(xhrDetails.headers) ) {
                if ( !value ) { continue; }
                out.push(`${name}: ${value}`);
            }
            if ( out.length !== 0 ) { out.push(''); }
            return out.join('\r\n');
        }
    };
    self.XMLHttpRequest.prototype.open.toString = function() {
        return XHRBefore.open.toString();
    };
    self.XMLHttpRequest.prototype.send.toString = function() {
        return XHRBefore.send.toString();
    };
    self.XMLHttpRequest.prototype.getResponseHeader.toString = function() {
        return XHRBefore.getResponseHeader.toString();
    };
    self.XMLHttpRequest.prototype.getAllResponseHeaders.toString = function() {
        return XHRBefore.getAllResponseHeaders.toString();
    };
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

function matchObjectProperties(propNeedles, ...objs) {
    if ( matchObjectProperties.extractProperties === undefined ) {
        matchObjectProperties.extractProperties = (src, des, props) => {
            for ( const p of props ) {
                const v = src[p];
                if ( v === undefined ) { continue; }
                des[p] = src[p];
            }
        };
    }
    const safe = safeSelf();
    const haystack = {};
    const props = safe.Array_from(propNeedles.keys());
    for ( const obj of objs ) {
        if ( obj instanceof Object === false ) { continue; }
        matchObjectProperties.extractProperties(obj, haystack, props);
    }
    for ( const [ prop, details ] of propNeedles ) {
        let value = haystack[prop];
        if ( value === undefined ) { continue; }
        if ( typeof value !== 'string' ) {
            try { value = safe.JSON_stringify(value); }
            catch { }
            if ( typeof value !== 'string' ) { continue; }
        }
        if ( safe.testPattern(details, value) ) { continue; }
        return false;
    }
    return true;
}

function parsePropertiesToMatch(propsToMatch, implicit = '') {
    const safe = safeSelf();
    const needles = new Map();
    if ( propsToMatch === undefined || propsToMatch === '' ) { return needles; }
    const options = { canNegate: true };
    for ( const needle of safe.String_split.call(propsToMatch, /\s+/) ) {
        let [ prop, pattern ] = safe.String_split.call(needle, ':');
        if ( prop === '' ) { continue; }
        if ( pattern !== undefined && /[^$\w -]/.test(prop) ) {
            prop = `${prop}:${pattern}`;
            pattern = undefined;
        }
        if ( pattern !== undefined ) {
            needles.set(prop, safe.initPattern(pattern, options));
        } else if ( implicit !== '' ) {
            needles.set(implicit, safe.initPattern(prop, options));
        }
    }
    return needles;
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
            catch {
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
    } catch {
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
} catch {
}
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
    try { preventXhr(...argsList[i]); }
    catch { }
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_preventXhr();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
