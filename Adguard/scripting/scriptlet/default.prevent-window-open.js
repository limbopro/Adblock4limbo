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

// ruleset: default

// Important!
// Isolate from global scope

// Start of local scope
(function uBOL_noWindowOpenIf() {

/******************************************************************************/

function noWindowOpenIf(
    pattern = '',
    delay = '',
    decoy = ''
) {
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('no-window-open-if', pattern, delay, decoy);
    const targetMatchResult = pattern.startsWith('!') === false;
    if ( targetMatchResult === false ) {
        pattern = pattern.slice(1);
    }
    const rePattern = safe.patternToRegex(pattern);
    const autoRemoveAfter = (parseFloat(delay) || 0) * 1000;
    const setTimeout = self.setTimeout;
    const createDecoy = function(tag, urlProp, url) {
        const decoyElem = document.createElement(tag);
        decoyElem[urlProp] = url;
        decoyElem.style.setProperty('height','1px', 'important');
        decoyElem.style.setProperty('position','fixed', 'important');
        decoyElem.style.setProperty('top','-1px', 'important');
        decoyElem.style.setProperty('width','1px', 'important');
        document.body.appendChild(decoyElem);
        setTimeout(( ) => { decoyElem.remove(); }, autoRemoveAfter);
        return decoyElem;
    };
    const noopFunc = function(){};
    proxyApplyFn('open', function open(context) {
        if ( pattern === 'debug' && safe.logLevel !== 0 ) {
            debugger; // eslint-disable-line no-debugger
            return context.reflect();
        }
        const { callArgs } = context;
        const haystack = callArgs.join(' ');
        if ( rePattern.test(haystack) !== targetMatchResult ) {
            if ( safe.logLevel > 1 ) {
                safe.uboLog(logPrefix, `Allowed (${callArgs.join(', ')})`);
            }
            return context.reflect();
        }
        safe.uboLog(logPrefix, `Prevented (${callArgs.join(', ')})`);
        if ( delay === '' ) { return null; }
        if ( decoy === 'blank' ) {
            callArgs[0] = 'about:blank';
            const r = context.reflect();
            setTimeout(( ) => { r.close(); }, autoRemoveAfter);
            return r;
        }
        const decoyElem = decoy === 'obj'
            ? createDecoy('object', 'data', ...callArgs)
            : createDecoy('iframe', 'src', ...callArgs);
        let popup = decoyElem.contentWindow;
        if ( typeof popup === 'object' && popup !== null ) {
            Object.defineProperty(popup, 'closed', { value: false });
        } else {
            popup = new Proxy(self, {
                get: function(target, prop, ...args) {
                    if ( prop === 'closed' ) { return false; }
                    const r = Reflect.get(target, prop, ...args);
                    if ( typeof r === 'function' ) { return noopFunc; }
                    return r;
                },
                set: function(...args) {
                    return Reflect.set(...args);
                },
            });
        }
        if ( safe.logLevel !== 0 ) {
            popup = new Proxy(popup, {
                get: function(target, prop, ...args) {
                    const r = Reflect.get(target, prop, ...args);
                    safe.uboLog(logPrefix, `popup / get ${prop} === ${r}`);
                    if ( typeof r === 'function' ) {
                        return (...args) => { return r.call(target, ...args); };
                    }
                    return r;
                },
                set: function(target, prop, value, ...args) {
                    safe.uboLog(logPrefix, `popup / set ${prop} = ${value}`);
                    return Reflect.set(target, prop, value, ...args);
                },
            });
        }
        return popup;
    });
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
        'Object_hasOwn': Object.hasOwn.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String': self.String,
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

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [[],["amazon-adsystem"],["|"],["","10"],["given"],["!bergblock","10"],["//"],["!za.gl","0"],["!?safelink_redirect="],["adblock","1","obj"],["!atomtt"],["!/download\\/|link/"],["!/^https:\\/\\/sendvid\\.com\\/[0-9a-z]+$/"],["/^/","1"],["ads"],["!api?call=","10","obj"],["_blank"],["!/ytmp3|dropbox/"],["!gdrivedownload"],["!refine?search"],["!t.me"],["!/prcf.fiyar|themes|pixsense|.jpg/"],["ppcnt"],["?key="],["php"],["tempat.org"],["","5"],["!buzzheavier.com"],["/wheceelt\\.net|shopee\\./","10","obj"],["/\\/4.+ _0/"],["!devuploads.com"],["!embedy"],["!sf-converter.com"],["onclickmega"],["!dosya","1"],["!newdmn","1"],["!yt2api"],["!clickmp3"],["bitcoins-update.blogspot.com"],["!coinsearns.com"],["youtube"],["/^/","0"],["!ytcutter.net"],["!/d/"],["!download"],["/xlirdr|hotplay\\-games|hyenadata/"],["!/^\\//"],["!yt1d.com"],["/\\.(com|net)\\/4\\//"],["!shrdsk"],["!/^\\/download\\//"],["!abyss.to","1"],["!zuperdrive"],["","1"],["!direct"],["/^/","15"],["!koyso.com"],["!self"],["!blogspot"],["!hidan.sh"],["!vidhidepre.com"],["shutterstock.com"],["/aff|jump/"],["zigi_tag_id","10","obj"],["!vidsrc."],["zigi_tag_id"],["!/(flashbang\\.sh|dl\\.buzzheavier\\.com)/"],["!dl.buzzheavier.com"],["uzivo"],["!nikaplayer.com"],["_blank","20"],["/^ [-\\d]/"]];
const hostnamesMap = new Map([["wcostream.*",0],["hltv.org",0],["slreamplay.*",0],["steamplay.*",0],["steanplay.*",0],["stemplay.*",0],["streamp1ay.*",0],["streanplay.*",0],["streampiay.*",0],["stre4mplay.*",0],["youtubedownloader.*",0],["dailyuploads.net",0],["putlockerc.*",0],["putlocker-website.com",0],["putlockertv.*",0],["mylink.*",0],["my1ink.*",0],["myl1nk.*",0],["myli3k.*",0],["pahe.*",0],["yts.*",0],["hqq.*",0],["waaw.*",0],["filescdn.com",0],["deportealdia.live",0],["watchmyexgf.net",0],["adshort.*",0],["adsrt.*",0],["upload-4ever.com",0],["tube8.*",0],["vortez.net",0],["porn.com",0],["katestube.com",0],["europixhd.*",0],["topeuropix.*",0],["mangoporn.net",0],["nwanime.tv",0],["chooyomi.com",0],["shooshtime.com",0],["picturelol.com",0],["imgspice.com",0],["watch-series.*",0],["watchseries.*",0],["pornhd.com",0],["bigtitsxxxsex.com",0],["vivud.com",0],["empflix.com",0],["anyporn.com",0],["gogoanime.*",0],["gogoanimes.*",0],["gogoanimetv.*",0],["magnetdl.com",0],["magnetdl.org",0],["short.pe",0],["donkparty.com",0],["dz4link.com",0],["imgdew.*",0],["imgmaze.*",0],["imgoutlet.*",0],["imgtown.*",0],["imgview.*",0],["dewimg.*",0],["imgrock.*",0],["imgviu.*",0],["mazpic.*",0],["outletpic.*",0],["picrok.*",0],["capshd.*",0],["rojadirectatvlive.*",0],["tubemania.org",0],["1movies.*",0],["webdesigndev.com",0],["imageweb.ws",0],["vidoza.net",0],["jkanime.*",0],["xmovies8.*",0],["pelisplus.*",0],["pelisplushd.*",0],["pouvideo.*",0],["povvideo.*",0],["povvldeo.*",0],["povw1deo.*",0],["povwideo.*",0],["powv1deo.*",0],["powvibeo.*",0],["powvideo.*",0],["powvldeo.*",0],["powstreen.*",0],["gamcore.com",0],["porcore.com",0],["porngames.tv",0],["69games.xxx",0],["arenavision.*",0],["vintage-erotica-forum.com",0],["momondo.com",0],["hentai2read.com",0],["lolhentai.net",0],["mangafreak.me",0],["ciberdvd.*",0],["reliabletv.me",0],["pornfay.*",0],["hotscope.tv",0],["micloudfiles.com",0],["assia.tv",0],["assia4.com",0],["assia24.com",0],["seatguru.com",0],["camwhores.*",0],["camwhorestv.*",0],["asiananimaltube.org",0],["zoosex.pink",0],["pornrabbit.com",0],["cartoonporno.xxx",0],["youpornru.com",0],["redtube.*",0],["hubfiles.ws",0],["uii.io",0],["powforums.com",0],["ettv.*",0],["ver-pelis.*",0],["newpelis.*",0],["pelix.*",0],["onlinevideoconverter.*",0],["adfloz.*",0],["zmovs.com",0],["spycock.com",0],["movies123.*",0],["cut-fly.com",0],["voirfilms.*",0],["cine24.online",0],["xrivonet.info",0],["shortit.pw",0],["vidcloud.*",0],["iframejav.*",0],["pornve.com",0],["savemedia.*",0],["limetorrents.*",0],["telerium.*",0],["veekyforums.com",0],["cutpaid.com",0],["televisionlibre.net",0],["9xbuddy.*",0],["durtypass.com",0],["opjav.com",0],["nhentai.net",0],["forexlap.com",0],["cambay.tv",0],["camwhoreshd.com",0],["camwhorespy.com",0],["cwtvembeds.com",0],["x08.ovh",0],["zegtrends.com",0],["asianclub.*",0],["vidmoly.*",0],["savelinks.*",0],["fileone.tv",0],["mdbekjwqa.pw",0],["mdfx9dc8n.net",0],["mdzsmutpcvykb.net",0],["mixdroop.*",0],["mixdrop.*",0],["mixdrop21.net",0],["mixdropjmk.pw",0],["mixdrp.*",0],["xpics.me",0],["123moviesfree.*",0],["yesmovies.*",0],["solarmovie.*",0],["zeefiles.*",0],["mega4up.*",0],["bdiptv.*",0],["milfzr.com",0],["pandamovies.pw",0],["cinemalibero.*",0],["simsdom.com",0],["gomovies.*",0],["gomoviesc.*",0],["cloudvideotv.*",0],["cloudvideo.tv",0],["kinoger.*",0],["xxxbunker.com",0],["clasicotas.org",0],["123movierulz.*",0],["7movierulz1.*",0],["7moviesrulz.*",0],["5movierulz2.*",0],["movieruls.*",0],["movierulz.*",0],["movierulzfree.*",0],["movierulz2free.*",0],["movierulzs.*",0],["movierulzwatch.*",0],["movierulzz.*",0],["moviesrulz.*",0],["moviesrulzfree.*",0],["ncdnx3.xyz",0],["watchmoviesrulz.com",0],["sexgalaxy.net",0],["topflix.*",0],["allfeeds.*",0],["daddylive.*",0],["sporting77.*",0],["teleriumtv.*",0],["7starhd.*",0],["uploadev.*",0],["noticiasesports.live",0],["googlvideo.com",0],["thefmovies.*",0],["keepvid.*",0],["streamporn.pw",0],["ustream.*",0],["faucethero.com",0],["upvid.*",0],["720pxmovies.blogspot.com",0],["software-on.com",0],["cdna.tv",0],["cam4.com",0],["filerio.in",0],["ckk.ai",0],["shemalepower.xyz",0],["ssrmovies.*",0],["bitcoinminingforex.blogspot.com",0],["bgwp.cc",0],["moviflex.*",0],["vladan.fr",0],["losporn.org",0],["fembed.*",0],["mavplay.*",0],["ujav.me",0],["videobb.*",0],["123mkv.*",0],["dreamfancy.org",0],["pornult.com",0],["nonktube.com",0],["megavideo.*",0],["tusfiles.com",0],["adultdvdparadise.com",0],["freeomovie.info",0],["fullxxxmovies.me",0],["mangoporn.co",0],["netflixporno.net",0],["pandamovie.*",0],["pandamovies.me",0],["pornkino.cc",0],["pornwatch.ws",0],["speedporn.*",0],["watchfreexxx.pw",0],["watchpornfree.*",0],["watchxxxfree.pw",0],["xopenload.pw",0],["xtapes.me",0],["xxxparodyhd.net",0],["xxxscenes.net",0],["xxxstream.me",0],["youwatchporn.com",0],["okanime.*",0],["skeimg.com",0],["4share.vn",0],["0xxx.ws",0],["ucptt.com",0],["exe.io",0],["exe.app",0],["skincarie.com",0],["fullhdxxx.com",0],["viptube.com",0],["homemature.net",0],["kingsofteens.com",0],["linkshub.*",0],["hentaihere.com",0],["tmearn.*",0],["filedown.*",0],["mexa.*",0],["yandexcdn.com",0],["adsafelink.com",0],["aii.sh",0],["czechvideo.org",0],["gfsvideos.com",0],["ffmovies.*",0],["imagehaha.com",0],["beinmatch.*",0],["mrpiracy.*",0],["shorten.*",0],["123anime.*",0],["ytmp3.*",0],["naughtymachinima.com",0],["porn00.org",0],["savevideo.tube",0],["xanimeporn.com",0],["bacakomik.co",0],["gnula.*",0],["porngo.com",0],["sobatkeren.*",0],["movieon21.*",0],["pelispedia24.*",0],["pelis28.*",0],["dr-farfar.com",0],["yeswegays.com",0],["youramateurtube.com",0],["webtor.io",0],["luscious.net",0],["makemoneywithurl.com",0],["dflix.top",0],["gomo.to",0],["remaxhd.*",0],["naniplay.com",0],["savesubs.com",0],["interracial.com",0],["lkc21.net",0],["freegogpcgames.com",0],["smiechawatv.pl",0],["shurt.pw",0],["nemenlake.*",0],["funzen.net",0],["animeblix.*",0],["get-to.link",0],["clk.*",0],["birdurls.com",0],["gainl.ink",0],["promo-visits.site",0],["shorterall.com",0],["finish.addurl.biz",0],["financebolo.com",0],["rphost.in",0],["vedamdigi.tech",0],["cancelguider.online",0],["adsfly.in",0],["tvi.la",0],["iir.la",0],["tii.la",0],["oko.sh",0],["oei.la",0],["blogtechh.com",0],["lnbz.la",0],["techbixby.com",0],["blogmyst.com",0],["wp2host.com",0],["insmyst.com",0],["host-buzz.com",0],["blogmystt.com",0],["oii.la",0],["tpi.li",0],["wp2hostt.com",0],["hosttbuzz.com",0],["oii.io",0],["hubdrive.*",0],["sfile.mobi",0],["tutwuri.id",0],["link.paid4link.com",0],["dropgalaxy.*",0],["financemonk.net",0],["ikingfile.mooo.com",0],["flycutlink.com",0],["filespayout.com",0],["techzed.info",0],["krakenfiles.com",0],["dayuploads.com",0],["go.shortnest.com",0],["mdy48tn97.com",0],["fitnakedgirls.com",0],["fatwhitebutt.com",0],["smplace.com",0],["slaughtergays.com",0],["sexiestpicture.com",0],["sassytube.com",0],["vipergirls.to",0],["xh.video",0],["l2db.info",0],["gosemut.*",0],["fastpeoplesearch.com",0],["zone-annuaire.*",0],["notube.*",0],["leolist.cc",0],["uploadhub.*",0],["smutty.com",0],["kropic.com",0],["beeg.party",0],["mm9842.com",0],["mm9844.*",0],["adblockeronstape.*",0],["adblockplustape.*",0],["adblockstreamtape.*",0],["adblockstrtape.*",0],["adblockstrtech.*",0],["advertisertape.com",0],["antiadtape.*",0],["gettapeads.com",0],["noblocktape.*",0],["shavetape.*",0],["stapadblockuser.*",0],["stape.*",0],["strcloud.*",0],["streamadblocker.*",0],["streamadblockplus.*",0],["streamnoads.com",0],["streamta.*",0],["streamtape.*",0],["streamtapeadblock.*",0],["streamtapeadblockuser.*",0],["strtape.*",0],["strtapeadblock.*",0],["strtapeadblocker.*",0],["strtapewithadblock.*",0],["strtpe.*",0],["tapeadsenjoyer.com",0],["tapeadvertisement.com",0],["tapeantiads.com",0],["tapeblocker.com",0],["tapelovesads.org",0],["tapenoads.com",0],["tapewithadblock.org",0],["watchadsontape.com",0],["twistedporn.com",0],["ymp4.download",0],["xxxonlinegames.com",0],["watchpornx.com",0],["vidop.*",0],["wiztube.xyz",0],["seriemega.*",0],["digjav.com",0],["isohunt.*",0],["megaflix.*",0],["2conv.com",0],["flvto.biz",0],["flv2mp3.by",0],["linksly.co",0],["ddownr.com",0],["keepv.id",0],["savethevideo.com",0],["iseekgirls.com",0],["milapercia.com",0],["windows-1.com",0],["drtuber.*",0],["ilgeniodellostreaming.*",0],["siteunblocked.info",0],["theproxy.app",0],["vid4up.*",0],["gototub.*",0],["deseneledublate.com",0],["sportbar.*",0],["youtubetomp3.*",0],["wordcounter.icu",0],["9xmovies.*",0],["shortenbuddy.com",0],["alejandrocenturyoil.com",0],["alleneconomicmatter.com",0],["bethshouldercan.com",0],["bradleyviewdoctor.com",0],["brittneystandardwestern.com",0],["brookethoughi.com",0],["brucevotewithin.com",0],["cindyeyefinal.com",0],["donaldlineelse.com",0],["edwardarriveoften.com",0],["erikcoldperson.com",0],["evelynthankregion.com",0],["graceaddresscommunity.com",0],["heatherdiscussionwhen.com",0],["heatherwholeinvolve.com",0],["housecardsummerbutton.com",0],["jamessoundcost.com",0],["jamesstartstudent.com",0],["jamiesamewalk.com",0],["jasminetesttry.com",0],["jasonresponsemeasure.com",0],["jayservicestuff.com",0],["jessicaglassauthor.com",0],["johntryopen.com",0],["josephseveralconcern.com",0],["kathleenmemberhistory.com",0],["kennethofficialitem.com",0],["kristiesoundsimply.com",0],["lisatrialidea.com",0],["lorimuchbenefit.com",0],["loriwithinfamily.com",0],["lukecomparetwo.com",0],["markstyleall.com",0],["michaelapplysome.com",0],["morganoperationface.com",0],["nonesnanking.com",0],["paulkitchendark.com",0],["phenomenalityuniform.com",0],["prefulfilloverdoor.com",0],["rebeccaneverbase.com",0],["roberteachfinal.com",0],["robertordercharacter.com",0],["robertplacespace.com",0],["ryanagoinvolve.com",0],["sandratableother.com",0],["sandrataxeight.com",0],["seanshowcould.com",0],["sethniceletter.com",0],["shannonpersonalcost.com",0],["sharonwhiledemocratic.com",0],["susanhavekeep.com",0],["toddpartneranimal.com",0],["vincentincludesuccessful.com",0],["voe.sx",0],["maxfinishseveral.com",0],["ohentai.org",0],["shortzzy.*",0],["rojadirecta.*",0],["movidy.*",0],["sinfoniarossini.com",0],["vpn-anbieter-vergleich-test.de",0],["gayvidsclub.com",0],["tits-guru.com",0],["miuiku.com",0],["savelink.site",0],["downloadhub.*",0],["hubstream.*",0],["proxybit.*",0],["opvid.net",0],["openloadmov.*",0],["wawacity.*",0],["kaplog.com",0],["downloadtwittervideo.com",0],["kiwiexploits.com",0],["thejournal.ie",0],["dl-protect.*",0],["cdnqq.net",0],["cdn1.fastvid.co",0],["movi.pk",0],["netu.ac",0],["player.msmini.*",0],["player.sbnmp.*",0],["netuplayer.*",0],["vapley.*",0],["moviehdf.*",0],["adultfun.net",0],["7misr4day.com",0],["hd21.*",0],["iceporn.*",0],["nuvid.*",0],["pornlib.*",0],["tubeon.*",0],["vivatube.*",0],["winporn.*",0],["yeptube.*",0],["streamsport.*",0],["aquiyahorajuegos.net",0],["hotflix.cc",0],["ontiva.com",0],["gaysearch.com",0],["aniwatch.pro",0],["ytc.*",0],["hianime.to",0],["shahid4u.*",0],["watchonlinemoviespk.*",0],["moviekids.tv",0],["www-y2mate.com",0],["streamhub.*",0],["moviezwap.*",0],["cararegistrasi.com",0],["booru.eu",0],["borwap.xxx",0],["centralboyssp.com.br",0],["czxxx.org",0],["filmdelisi.co",0],["filmovitica.com",0],["foxtube.com",0],["hd-xxx.me",0],["ipornxxx.net",0],["itsfuck.com",0],["javembed.*",0],["javideo.pw",0],["kissanime.*",0],["lametrofitness.net",0],["longporn.xyz",0],["matureworld.ws",0],["mp3-convert.org",0],["sexy-games.*",0],["stilltube.com",0],["streamm4u.club",0],["teenage-nudists.net",0],["xvideos.name",0],["xxx-videos.org",0],["xxxputas.net",0],["youpornfm.com",0],["maxtubeporn.net",0],["vidsvidsvids.com",0],["hotscopes.*",0],["hentaicomics.pro",0],["y2mate.guru",0],["todaypk.*",0],["todaypktv.*",0],["1todaypk.*",0],["watchtodaypk.com",0],["usagoals.*",0],["msubplix.com",0],["myyouporn.com",0],["uproxy.*",0],["convert2mp3.club",0],["embedstream.me",0],["nolive.me",0],["vrporngalaxy.com",0],["stem-cells-news.com",0],["javynow.com",0],["oyohd.*",0],["720pstream.*",0],["youtubemp3.us",0],["afilmyhouse.blogspot.com",0],["pagalworld.us",0],["spicyandventures.com",0],["inextmovies.*",0],["hd44.com",0],["mp4moviez.*",0],["kaotic.com",0],["wolfstream.*",0],["highstream.tv",0],["freeadultcomix.com",0],["crazyblog.in",0],["desitab69.sextgem.com",0],["javquick.com",0],["4movierulz1.*",0],["filmygod6.*",0],["shemalestube.com",0],["hxfile.co",0],["watchmovierulz.*",0],["streamsb.*",0],["pussy.org",0],["analsexstars.com",0],["cloudrls.com",0],["filmywap.*",0],["ofilmywap.*",0],["kannadamasti.*",0],["buyjiocoin.*",0],["filmygod13.*",0],["ucanwatch.*",0],["ybm.pw",0],["lordhd.com",0],["paid4.link",0],["pajalusta.club",0],["maxstream.video",0],["samax63.lol",0],["videoseyred.in",0],["www-daftarharga.blogspot.com",0],["xbox360torrent.com",0],["go.gets4link.com",0],["lightnovelpdf.com",0],["keepvid.pw",0],["userload.*",0],["ask4movie.*",0],["convert2mp3.cx",0],["mp3dl.cc",0],["videovard.*",0],["coinsparty.com",0],["fifaultimateteam.it",0],["bowfile.com",0],["1cloudfile.com",0],["covrhub.com",0],["mp3juices.*",0],["fapcat.com",0],["milfnut.*",0],["pixroute.com",0],["uploady.io",0],["thienhatruyen.com",0],["witanime.com",0],["clk.asia",0],["linka.click",0],["miraculous.to",0],["mlsbd.*",0],["bfclive.com",0],["cinebaz.site",0],["mlsbd.news",0],["av01.tv",0],["bigyshare.com",0],["moviemad.*",0],["glotorrents.fr-proxy.com",0],["glotorrents.theproxy.ws",0],["wapsing.com",0],["apiyt.com",0],["masstamilans.com",0],["mymp3song.*",0],["okmusi.com",0],["ytmp3x.com",0],["snowurl.com",0],["webpornblog.com",0],["cam-video.xxx",0],["svetserialu.to",0],["scjhg5oh.fun",0],["a-b-f-dd-aa-bb-cctwd3a.fun",0],["mjukb26l.fun",0],["ghajini-4urg44yg.lol",0],["akoam.*",0],["blu-ray.com",0],["9xmovie.*",0],["mrgay.com",0],["best-cpm.com",0],["webhostingpost.com",0],["himovies.*",0],["tutorialspots.com",0],["phica.net",0],["4stream.*",0],["streambee.to",0],["streamers.watch",0],["emb.x179759.apl123.me",0],["emb.x187106.apl152.me",0],["techgeek.digital",0],["supersextube.pro",0],["h-flash.com",0],["ponselharian.com",0],["vtube.to",0],["tubeload.co",0],["whcp4.com",0],["teluguonlinemovies.*",0],["cricfree.*",0],["cricplay2.*",0],["primetubsub.*",0],["yourtehzeeb.com",0],["hindimovies.to",0],["eztv.*",0],["loadx.ws",0],["piraproxy.app",0],["theproxy.*",0],["driveplayer.net",0],["filmeserialegratis.*",0],["fsplayer.*",0],["younetu.*",0],["repelishd.*",0],["hdhub4u.*",0],["k1nk.co",0],["watchonlinehd123.sbs",0],["acrackstreams.com",0],["hdmoviesmaza.*",0],["moviesjoy.*",0],["3hentai.net",0],["valeronevijao.com",0],["cigarlessarefy.com",0],["figeterpiazine.com",0],["yodelswartlike.com",0],["generatesnitrosate.com",0],["crownmakermacaronicism.com",0],["chromotypic.com",0],["gamoneinterrupted.com",0],["metagnathtuggers.com",0],["wolfdyslectic.com",0],["rationalityaloelike.com",0],["sizyreelingly.com",0],["simpulumlamerop.com",0],["urochsunloath.com",0],["monorhinouscassaba.com",0],["counterclockwisejacky.com",0],["35volitantplimsoles5.com",0],["scatch176duplicities.com",0],["antecoxalbobbing1010.com",0],["boonlessbestselling244.com",0],["cyamidpulverulence530.com",0],["guidon40hyporadius9.com",0],["449unceremoniousnasoseptal.com",0],["19turanosephantasia.com",0],["30sensualizeexpression.com",0],["321naturelikefurfuroid.com",0],["745mingiestblissfully.com",0],["availedsmallest.com",0],["greaseball6eventual20.com",0],["toxitabellaeatrebates306.com",0],["20demidistance9elongations.com",0],["audaciousdefaulthouse.com",0],["fittingcentermondaysunday.com",0],["fraudclatterflyingcar.com",0],["launchreliantcleaverriver.com",0],["matriculant401merited.com",0],["realfinanceblogcenter.com",0],["reputationsheriffkennethsand.com",0],["telyn610zoanthropy.com",0],["tubelessceliolymph.com",0],["tummulerviolableness.com",0],["un-block-voe.net",0],["v-o-e-unblock.com",0],["voe-un-block.com",0],["voe-unblock.*",0],["voeun-block.net",0],["voe.*",0],["voeunbl0ck.com",0],["voeunblck.com",0],["voeunblk.com",0],["voeunblock.com",0],["voeunblock1.com",0],["voeunblock2.com",0],["voeunblock3.com",0],["webloadedmovie.com",0],["embedo.co",0],["embed-player.space",0],["erofound.com",0],["apkmody.*",0],["extratorrent.*",0],["torrentstatus.*",0],["yts2.*",0],["y2mate.*",0],["bestcash2020.com",0],["missav.*",0],["missav123.com",0],["missav888.com",0],["poscitech.*",0],["komikav.com",0],["bc.vc",0],["larsenik.com",0],["yout.pw",0],["veryfreeporn.com",0],["embedmoon.*",0],["filemoon.*",0],["kerapoxy.*",0],["moonmov.pro",0],["nosteam.ro",0],["nosteamgames.ro",0],["nosteam.com.ro",0],["adblockeronstreamtape.*",0],["ddl-francais.com",0],["ier.ai",0],["komiklokal.me",0],["moddroid.com",0],["divxfilmeonline.net",0],["vidscdns.com",0],["crichd.*",0],["novelssites.com",0],["techydino.net",0],["movies2watch.*",0],["manhwadesu.me",0],["watchanime.video",0],["repelishd.com.ar",0],["infinitehentai.com",0],["domainwheel.com",0],["adshnk.com",0],["tirexo.*",0],["fembed9hd.com",0],["ssyoutube.com",0],["apimate.net",0],["mov18plus.cloud",0],["shareus.in",0],["videos.remilf.com",0],["weloma.art",0],["uploadgig.com",0],["protege-liens.com",0],["mega4upload.net",0],["peliculas8k.com",0],["woffxxx.com",0],["sitefilme.com",0],["uberhumor.com",0],["audiotruyenfull.com",0],["emturbovid.com",0],["findjav.com",0],["javggvideo.xyz",0],["mmtv01.xyz",0],["stbturbo.xyz",0],["streamsilk.com",0],["zone-telechargement.*",0],["xxxshake.com",0],["cdnm4m.nl",0],["guccihide.com",0],["thisisrussia.io",0],["streamtb.me",0],["filmeonline2018.net",0],["pobre.*",0],["8xmovies.*",0],["nhl66.ir",0],["watchcalifornicationonline.com",0],["watchmalcolminthemiddle.com",0],["watchonlyfoolsandhorses.com",0],["watchrulesofengagementonline.com",0],["watchsuitsonline.net",0],["watchlostonline.net",0],["sexypornpictures.org",0],["adblocktape.*",0],["173.249.8.3",0],["188.166.182.72",0],["hentaikai.com",0],["freevpshere.com",0],["softwaresolutionshere.com",0],["cryptosh.pro",0],["cyberleaks.*",0],["opvid.*",0],["besargaji.com",0],["hanime.xxx",0],["streamvid.net",0],["reshare.pm",0],["sexvideos.host",0],["stagatvfiles.com",0],["vtbe.net",0],["player.gayfor.us",0],["embedgram.com",0],["dlupload.com",0],["bembed.net",0],["embedv.net",0],["fslinks.org",0],["v6embed.xyz",0],["vembed.*",0],["vgplayer.xyz",0],["vid-guard.com",0],["telenovelas-turcas.com.es",0],["crack-status.com",0],["up-4ever.net",0],["steamcrackedgames.com",0],["jeniusplay.com",0],["furher.in",0],["vidpro.net",0],["embedaio.cc",0],["cuevana8.com",0],["nicomanga.com",0],["bestx.stream",0],["boosterx.stream",0],["moviesapi.club",0],["designparty.sx",0],["kukaj.io",0],["dinnerexa.com",0],["dinneroga.com",0],["gameophobias.com",0],["hindimearticles.net",0],["solution-hub.com",0],["thenextplanet1.*",0],["tnp98.xyz",0],["2embed.*",0],["yt2conv.com",0],["linkz.*",0],["movies4u.*",0],["movies4u3.*",0],["anichin.top",0],["hlsplayer.top",0],["superembeds.com",0],["embedrise.com",0],["lulustream.com",0],["luluvdo.com",0],["playfmovies.*",0],["viralvideotube.*",0],["vtlinks.*",0],["vtplayer.online",0],["vvtlinks.*",0],["vvtplayer.*",0],["powstream.*",0],["powlideo.*",0],["povvvideo.*",0],["powvdeo.*",0],["fullassia.com",0],["newassia.com",0],["pesktop.com",0],["truyen-hentai.com",0],["y2down.cc",0],["tainio-mania.online",0],["uploadsea.com",0],["sport7s01.com",0],["av-cdn.xyz",0],["javguard.xyz",0],["javturbo.xyz",0],["westmanga.org",0],["dirtyvideo.fun",0],["fast-dl.*",0],["filmydown.*",0],["vidstreaming.xyz",0],["movie4night.com",0],["player.bestrapeporn.com",0],["tinyzonetv.se",0],["metrolagu.cam",0],["poop.*",0],["player.euroxxx.net",0],["a-b-c-d-e-f9jeats0w5hf22jbbxcrpnq37qq6nbxjwypsy.fun",0],["vidsrc.*",0],["kokostream.net",0],["player.smashy.stream",0],["player.smashystream.com",0],["binged.*",0],["xvideos.com",0],["xvideos2.com",0],["fmovies.*",0],["torrentdownload.*",0],["katfile.com",0],["file-upload.*",0],["hentaihaven.xxx",0],["itv.com",0],["mkvcinemas.*",0],["all3do.com",0],["do7go.com",0],["d0000d.com",0],["d000d.com",0],["d0o0d.com",0],["do0od.com",0],["dood.*",0],["doods.pro",0],["dooodster.com",0],["dooood.*",0],["ds2play.com",0],["ds2video.com",0],["vidply.com",0],["elamigosedition.com",0],["3ixcf45.cfd",0],["76078rb.sbs",0],["1azayf9w.xyz",0],["c4qhk0je.xyz",0],["defienietlynotme.com",0],["embedme.*",0],["filemooon.top",0],["finfang.*",0],["fmembed.cc",0],["fmhd.bar",0],["fmoonembed.pro",0],["hellnaw.*",0],["moonembed.*",0],["rgeyyddl.skin",0],["sbnmp.bar",0],["sulleiman.com",0],["vpcxz19p.xyz",0],["z12z0vla.*",0],["0x7jwsog5coxn1e0mk2phcaurtrmbxfpouuz.fun",0],["1nmnozg1.fun",0],["222i8x.lol",0],["279kzq8a4lqa0ddt7sfp825b0epdl922oqu6.fun",0],["2btmc2r0.fun",0],["2fb9tsgn.fun",0],["2g8rktp1fn9feqlhxexsw8o4snafapdh9dn1.fun",0],["3a38xmiv.fun",0],["56m605zk.fun",0],["5rr03ujky5me3sjzvfosr6p89hk6wd34qamf.fun",0],["723qrh1p.fun",0],["8mhlloqo.fun",0],["8rm3l0i9.fun",0],["a-b-c-d-e-f7011d0w3j3aor0dczs5ctoo2zpz1t6bm5f49.fun",0],["a-b-c-d-e-fla3m19lerkfex1z9kdr5pd4hx0338uwsvbjx.fun",0],["a-b-f-dd-aa-bb-cc61uyj.fun",0],["a-b-f-dd-aa-bb-ccn1nff.fun",0],["a-b-f-dd-aa-bb-ccyh5my.fun",0],["a-b-f2muvhnjw63ruyhoxhhrd61eszezz6jdj4jy1-b-d-t-s.fun",0],["a-b-f7mh86v4lirbwg7m4qiwwlk2e4za9uyngqy1u-b-d-t-s.fun",0],["a-b-fjkt8v1pxgzrc3lqoaz8fh7pjgygf4zh3eqhl-b-d-t-s.fun",0],["a-b-fnv7h0323ap2wfqj1ruyo8id2bcuoq4kufzon-b-d-t-s.fun",0],["a-b-fqmze5gr05g3y4azx9adr9bd2eow7xoqwbuxg-b-d-t-s.fun",0],["anqkdhcm.nl",0],["bf0skv.org",0],["bk9nmsxs.com",0],["brr-69xwmut5-moo.com",0],["ccyig2ub.nl",0],["eljgocmn.fun",0],["eximeuet.fun",0],["fdvzg.world",0],["file-1bl9ruic-moon.com",0],["file-kg88oaak-embed.com",0],["filemoon-ep11lgxt.xyz",0],["filemoon-oe4w6g0u.xyz",0],["fle-2ggdmu8q-moo.com",0],["fle-5r8dchma-moo.com",0],["fle-rvd0i9o8-moo.com",0],["fu-12qjdjqh.lol",0],["fu-1abozhcd.nl",0],["fu-1fbolpvq.nl",0],["fu-c66heipu.lol",0],["fu-e4nzgj78.nl",0],["fu-hbr4fzp4.lol",0],["fu-hjyo3jqu.lol",0],["fu-l6d0ptc6.lol",0],["fu-m03aenr9.nl",0],["fu-mqsng72r.nl",0],["fu-p6pwkgig.nl",0],["fu-pl1lqloj.nl",0],["fu-v79xn6ct.nl",0],["fu-ys0tjjs1.nl",0],["g8rnyq84.fun",0],["ghajini-04bl9y7x.lol",0],["ghajini-1fef5bqn.lol",0],["ghajini-1flc3i96.lol",0],["ghajini-8nz2lav9.lol",0],["ghajini-9b3wxqbu.lol",0],["ghajini-emtftw1o.lol",0],["ghajini-jadxelkw.lol",0],["ghajini-vf70yty6.lol",0],["ghajini-y9yq0v8t.lol",0],["go-for-it-wgt1a.fun",0],["gorro-9mqnb7j2.fun",0],["gorro-chfzoaas.fun",0],["gorro-ry0ziftc.fun",0],["h8jizwea.fun",0],["huzi6or1.fun",0],["jmtv4zqntu5oyprw4seqtn0dmjulf9nebif0.fun",0],["l1afav.net",0],["mee-6zeqsgv2.com",0],["mee-dp6h8dp2.com",0],["mee-s9o6p31p.com",0],["moo-teau4c9h-mkay.com",0],["moon-3uykdl2w-embed.com",0],["moon-fm43w1qv.com",0],["moon-kg83docx.com",0],["moonfile-62es3l9z.com",0],["morgan0928-5386paz2.fun",0],["morgan0928-6v7c14vs.fun",0],["morgan0928-8ufkpqp8.fun",0],["morgan0928-oqdmw7bl.fun",0],["morgan0928-t9xc5eet.fun",0],["semprefi-1h3u8pkc.fun",0],["semprefi-2tazedzl.fun",0],["semprefi-5ut0d23g.fun",0],["semprefi-7oliaqnr.fun",0],["semprefi-8xp7vfr9.fun",0],["semprefi-hdm6l8jq.fun",0],["semprefi-uat4a3jd.fun",0],["semprefi-wdh7eog3.fun",0],["stephenking-00qvxikv.fun",0],["stephenking-3u491ihg.fun",0],["stephenking-7tm3toav.fun",0],["stephenking-c8bxyhnp.fun",0],["stephenking-vy5hgkgu.fun",0],["streamio.to",0],["u26bekrb.fun",0],["u9206kzt.fun",0],["ulike-filter-sowe-canplay-rightlets-generate-themrandomlyl89u8.fun",0],["ur70sq6j.fun",0],["uthr5j7t.com",0],["vdiflcsl.fun",0],["vqjhqcfk.fun",0],["ww9g.com",0],["y5vx1atg.fun",0],["z1ekv717.fun",0],["z9sayu0m.nl",0],["an1.com",0],["forexwikitrading.com",0],["westmanga.fun",0],["livecamrips.su>>",0],["filemoon.*>>",0],["96ar.com>>",0],["iqksisgw.xyz>>",0],["u6lyxl0w.skin>>",0],["ww9g.com>>",0],["xcoic.com>>",0],["5j386s9.sbs",0],["getmodsapk.com",0],["nyaa.land",0],["pornx.to",0],["linkos.*",0],["phois.pro",0],["trrs.pro",0],["sharedrive.*",0],["pastetot.com",0],["movies7.to",0],["mmsmaza.com",0],["dodz.*",0],["doodss.*",0],["doood.*",0],["doooood.*",0],["kakitengah.*",0],["y2tube.pro",0],["zoro.*",0],["player.javboys.cam",0],["ebaticalfel.com",0],["fansmega.com",0],["iedprivatedqu.com",0],["stownrusis.com",0],["filmcdn.top",0],["sex-empire.org",0],["sexempire.xyz",0],["94.103.83.138",0],["cuervotv.me",0],["apl341.me",0],["apl323.me",0],["apl332.me",0],["apl340.me",0],["apl374.me",0],["m4u.*",0],["xprime4u.*",0],["1stream.eu",0],["roystream.com",0],["kimdesene.org",0],["dmovies.top",0],["erothots.co",0],["turtleviplay.xyz",0],["flvto.com.co",0],["7mm003.cc",0],["7mmtv.sx",0],["javporn.tv",0],["mm9845.com",0],["mp3y.info",0],["netu.frembed.lol",0],["pay4fans.com",0],["uhdmovies.*",0],["direct-dl.*",0],["filmy4web.*",0],["filegram.to",0],["freemp3.tube",0],["ytmp3s.nu",0],["weirdwolf.net",0],["linksshub.lol",0],["desiflix.*",0],["girlmms.com",0],["ottxmaza.com",0],["sexmazahd.com",0],["webxmaza.com",0],["chasingthedonkey.com",0],["usgate.xyz",0],["autoembed.cc",0],["oaaxpgp3.xyz",0],["cineb.rs",0],["g-porno.com",0],["g-streaming.com",0],["giga-uqload.xyz",0],["mlbstreaming.live",0],["lovetofu.cyou",0],["alldeepfake.ink",0],["swiftuploads.com",0],["javplayer.me",0],["scoreland.biz",0],["scoreland.name",0],["4edtcixl.xyz",0],["javfc2.xyz",0],["embed.hideiframe.com",0],["nexdrive.*",0],["vegamovies3.org",0],["luxmovies.*",0],["nohost.one",0],["southfreak.*",0],["send.cm",0],["vinovo.to",0],["uupbom.com",0],["a1movies.*",0],["xxxbfvideo.net",0],["filmy4wap.co.in",0],["filmy4wap.uno",0],["filmy4waps.org",0],["kimcilonlyofc.com",0],["moviesmod.*",0],["topmovies.*",0],["flyplayer.xyz",0],["brbeast.com",0],["live-sport.duktek.pro",0],["1movielinkbd.com",0],["filecloud.*",0],["gdfile.org",0],["movieliinkbd.com",0],["sssinstagram.com",0],["playeriframe.lol>>",0],["0ochi8hp.com",0],["videocdnal24.xyz",0],["worldfree4u.*",0],["fapomania.com",0],["basseqwevewcewcewecwcw.xyz",0],["ebook-hell.to",0],["nunflix.org",0],["wooflix.tv",0],["wvt.free.nf",0],["fmovies0.cc",0],["plylive.*",0],["plyvdo.*",0],["vid2faf.*",0],["bflix.*>>",0],["spankbang.*",0],["kissasian.*",0],["kissasian.*>>",0],["video.genyt.net",0],["unlimitedfiles.xyz",0],["thotchicks.com",0],["animeflix.ltd",0],["gorro-4go5b3nj.fun",0],["premiumporn.org",0],["bigwarp.*",0],["animez.org",0],["abstream.to",0],["kitraskimisi.com",0],["bestwish.lol",0],["uns.bio",0],["mainlinks.xyz",0],["cataz.to",0],["hi0ti780.fun",0],["oimsmosy.fun",0],["dropzy.io",0],["netmovies.to",0],["pornproxy.art",0],["pornproxy.app",0],["watchserieshd.stream>>",0],["bigconv.com",0],["zilla-xr.xyz",0],["besthdmovies.com",0],["uxjvp.pro",0],["anime-world.co>>",0],["worthcrete.com",0],["poophq.com",0],["veev.to",0],["doods.to",0],["0cbcq8mu.com",0],["2cf0xzdu.com",0],["4k2h4w04.xyz",0],["a6iqb4m8.xyz",0],["afl3ua5u.xyz",0],["jmzkzesy.xyz",0],["spankbang.com",0],["spankbang.mov",0],["141jav.com",0],["twitch.tv",1],["strikeout.*",2],["vipbox.*",3],["player.cuevana.ac",3],["player.tabooporns.com",3],["x69.ovh",3],["gaydam.net",3],["hdgay.net",3],["igay69.com",3],["tickzoo.tv",3],["qiwi.gg",3],["playerwatch.xyz",3],["desbloqueador.*",4],["hotpornfile.org",5],["viprow.*",6],["vipstand.*",6],["vipboxtv.*",6],["za.gl",7],["foxseotools.com",8],["uflash.tv",9],["atomohd.*",10],["atomixhq.*",11],["pctfenix.*",11],["pctnew.*",11],["sendvid.com",12],["fc.lc",13],["vev.*",13],["vidup.*",13],["hihihaha1.xyz",13],["rufiguta.com",13],["adclickersbot.com",13],["fullfreeimage.com",13],["freeplayervideo.com",13],["imagelovers.com",13],["nazarickol.com",13],["player-cdn.com",13],["playhydrax.com",13],["rufiiguta.com",13],["pornhub.*",14],["vidstream.*",15],["multiup.io",16],["mtraffics.com",16],["indobo.com",16],["khaddavi.net",16],["lokerwfh.net",16],["ytjar.info",16],["emb.apl305.me",16],["streamingcommunity.*",16],["mmnm.store",16],["shrdsk.me",[16,49]],["totalcsgo.com",16],["donghuaworld.com",16],["paste-drop.com",16],["aniwave.*",16],["mangafire.to",16],["tv.bdix.app",16],["woxmax.net",16],["terashare.co",16],["tokuzilla.net",16],["usersdrive.com",16],["rajtamil.org",16],["vik1ngfile.uk.to",16],["vikingf1le.us.to",[16,65]],["moviedokan.*",16],["toonstream.*",16],["akirabox.com",16],["movielinkbd.*",16],["atlasstudiousa.com",16],["ranoz.gg",16],["netplayz.ru",16],["youtubetowav.net",16],["javx.cc",16],["gofirmware.com",16],["otomoto.pl",16],["tiroalpaloweb.xyz",16],["film-adult.com",16],["themoviesflix.*",16],["netembed.xyz",16],["edgedeliverynetwork.com",16],["fastt.gg",16],["apl373.me",16],["livestreams.*",16],["maxicast.*",16],["ytmp3.cc",17],["gdriveplayer.*",18],["rentbyowner.com",19],["underhentai.net",20],["pixsera.net",21],["imgair.net",21],["imgblaze.net",21],["imgfrost.net",21],["vestimage.site",21],["pixlev.*",21],["imgyer.store",21],["pixqbngg.shop",21],["pixqwet.shop",21],["pixmos.shop",21],["imgtgd.shop",21],["imgcsxx.shop",21],["imgqklw.shop",21],["pixqkhgrt.shop",21],["imgcssd.shop",21],["imguwjsd.sbs",21],["pictbbf.shop",21],["pixbryexa.sbs",21],["picbqqa.sbs",21],["pixbkghxa.sbs",21],["imgmgf.sbs",21],["picbcxvxa.sbs",21],["imguee.sbs",21],["imgmffmv.sbs",21],["imgbqb.sbs",21],["imgbyrev.sbs",21],["imgbncvnv.sbs",21],["pixtryab.shop",21],["imggune.shop",21],["pictryhab.shop",21],["pixbnab.shop",21],["imgbnwe.shop",21],["imgbbnhi.shop",21],["imgnbii.shop",21],["imghqqbg.shop",21],["imgyhq.shop",21],["pixnbrqwg.sbs",21],["pixnbrqw.sbs",21],["picmsh.sbs",21],["imgpke.sbs",21],["picuenr.sbs",21],["imgolemn.sbs",21],["imgoebn.sbs",21],["picnwqez.sbs",21],["imgjajhe.sbs",21],["pixjnwe.sbs",21],["pixkfjtrkf.shop",21],["pixkfkf.shop",21],["pixdfdjkkr.shop",21],["pixdfdj.shop",21],["picnft.shop",21],["pixrqqz.shop",21],["picngt.shop",21],["picjgfjet.shop",21],["picjbet.shop",21],["imgkkabm.shop",21],["imgxabm.shop",21],["imgthbm.shop",21],["imgmyqbm.shop",21],["imgwwqbm.shop",21],["imgjvmbbm.shop",21],["imgjbxzjv.shop",21],["imgjmgfgm.shop",21],["picxnkjkhdf.sbs",21],["imgxxbdf.sbs",21],["imgnngr.sbs",21],["imgjjtr.sbs",21],["imgqbbds.sbs",21],["imgbvdf.sbs",21],["imgqnnnebrf.sbs",21],["imgnnnvbrf.sbs",21],["tr.link",22],["btcbitco.in",23],["btcsatoshi.net",23],["crypto4yu.com",23],["readbitcoin.org",23],["wiour.com",23],["fikper.com",23],["fullboys.com",23],["cpmlink.pro",24],["crm.cekresi.me",25],["ai.tempatwisata.pro",25],["lootdest.com",26],["buzzheavier.com",27],["apkmoddone.com",28],["phongroblox.com",29],["rfiql.com",30],["gujjukhabar.in",30],["smartfeecalculator.com",30],["djxmaza.in",30],["thecubexguide.com",30],["jytechs.in",30],["embedy.me",31],["savefrom.net",32],["cshort.org",33],["dosya.tc",34],["newdmn.*",35],["sbot.cf",0],["camcaps.*",0],["vidello.net",0],["mitedrive.com",0],["miteblog.com",0],["easymp3converter.com",36],["go-mp3.com",37],["lineageos18.com",38],["luckydice.net",39],["ytsubme.com",40],["driveup.in",41],["mp3juices.yt",42],["chillx.top",43],["beastx.top",43],["playerx.stream",43],["listeamed.net",43],["1ytmp3.com",44],["bestmp3converter.com",44],["hentaiworld.tv",45],["video-to-mp3-converter.com",46],["y2meta-uk.com",47],["pinloker.com",48],["sekilastekno.com",48],["netfilm.app",48],["sharedisk.me",50],["kmo.to",51],["zuperdrive.my.id",52],["1337x.*",53],["x1337x.*",53],["workink.click",54],["mwpaste.com",55],["koyso.com",56],["buffsports.me",57],["kimetsujbn.blogspot.com",58],["hidan.co",59],["hidan.sh",59],["vidhidepre.com",60],["seeklogo.com",61],["jokerscores.com",62],["jokersportshd.org",62],["tennis.stream",62],["uploadmall.com",63],["ate60vs7zcjhsjo5qgv8.com",64],["flashbang.sh",66],["trashbytes.net",67],["utakmice.net",68],["nikaplayer.com",69],["netfree.cc",70],["mee-cccdoz45.com",71],["my4w.com",71],["fu-4u3omzw0.nl",71],["0deh.com",71],["5mgz1.com",71],["6jlvu.com",71],["xo7c.com",71],["v1kkm.com",71],["hmt6u.com",71],["guum5.com",71],["l8e8.com",71],["l99j.com",71],["58n1.com",71],["z4h4.com",71],["qa2h.com",71]]);
const exceptionsMap = new Map([["notube.com",[0]],["cloudflare.com",[0,0]],["disqus.com",[0,0]],["google.com",[0,0,0]],["youtube.com",[0]],["youtube-nocookie.com",[0]]]);
const hasEntities = true;
const hasAncestors = true;

const collectArgIndices = (hn, map, out) => {
    let argsIndices = map.get(hn);
    if ( argsIndices === undefined ) { return; }
    if ( typeof argsIndices !== 'number' ) {
        for ( const argsIndex of argsIndices ) {
            out.add(argsIndex);
        }
    } else {
        out.add(argsIndices);
    }
};

const indicesFromHostname = (hostname, suffix = '') => {
    const hnParts = hostname.split('.');
    const hnpartslen = hnParts.length;
    if ( hnpartslen === 0 ) { return; }
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = `${hnParts.slice(i).join('.')}${suffix}`;
        collectArgIndices(hn, hostnamesMap, todoIndices);
        collectArgIndices(hn, exceptionsMap, tonotdoIndices);
    }
    if ( hasEntities ) {
        const n = hnpartslen - 1;
        for ( let i = 0; i < n; i++ ) {
            for ( let j = n; j > i; j-- ) {
                const en = `${hnParts.slice(i,j).join('.')}.*${suffix}`;
                collectArgIndices(en, hostnamesMap, todoIndices);
                collectArgIndices(en, exceptionsMap, tonotdoIndices);
            }
        }
    }
};

const entries = (( ) => {
    const docloc = document.location;
    const origins = [ docloc.origin ];
    if ( docloc.ancestorOrigins ) {
        origins.push(...docloc.ancestorOrigins);
    }
    return origins.map((origin, i) => {
        const beg = origin.lastIndexOf('://');
        if ( beg === -1 ) { return; }
        const hn = origin.slice(beg+3)
        const end = hn.indexOf(':');
        return { hn: end === -1 ? hn : hn.slice(0, end), i };
    }).filter(a => a !== undefined);
})();
if ( entries.length === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = new Set();

indicesFromHostname(entries[0].hn);
if ( hasAncestors ) {
    for ( const entry of entries ) {
        if ( entry.i === 0 ) { continue; }
        indicesFromHostname(entry.hn, '>>');
    }
}

// Apply scriplets
for ( const i of todoIndices ) {
    if ( tonotdoIndices.has(i) ) { continue; }
    try { noWindowOpenIf(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
