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

// ruleset: ublock-filters

// Important!
// Isolate from global scope

// Start of local scope
(function uBOL_trustedSuppressNativeMethod() {

/******************************************************************************/

function trustedSuppressNativeMethod(
    methodPath = '',
    signature = '',
    how = '',
    stack = ''
) {
    if ( methodPath === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('trusted-suppress-native-method', methodPath, signature, how, stack);
    const signatureArgs = safe.String_split.call(signature, /\s*\|\s*/).map(v => {
        if ( /^".*"$/.test(v) ) {
            return { type: 'pattern', re: safe.patternToRegex(v.slice(1, -1)) };
        }
        if ( /^\/.+\/$/.test(v) ) {
            return { type: 'pattern', re: safe.patternToRegex(v) };
        }
        if ( v === 'false' ) {
            return { type: 'exact', value: false };
        }
        if ( v === 'true' ) {
            return { type: 'exact', value: true };
        }
        if ( v === 'null' ) {
            return { type: 'exact', value: null };
        }
        if ( v === 'undefined' ) {
            return { type: 'exact', value: undefined };
        }
    });
    const stackNeedle = safe.initPattern(stack, { canNegate: true });
    proxyApplyFn(methodPath, function(context) {
        const { callArgs } = context;
        if ( signature === '' ) {
            safe.uboLog(logPrefix, `Arguments:\n${callArgs.join('\n')}`);
            return context.reflect();
        }
        for ( let i = 0; i < signatureArgs.length; i++ ) {
            const signatureArg = signatureArgs[i];
            if ( signatureArg === undefined ) { continue; }
            const targetArg = i < callArgs.length ? callArgs[i] : undefined;
            if ( signatureArg.type === 'exact' ) {
                if ( targetArg !== signatureArg.value ) {
                    return context.reflect();
                }
            }
            if ( signatureArg.type === 'pattern' ) {
                if ( safe.RegExp_test.call(signatureArg.re, targetArg) === false ) {
                    return context.reflect();
                }
            }
        }
        if ( stackNeedle.matchAll !== true ) {
            const logLevel = safe.logLevel > 1 ? 'all' : '';
            if ( matchesStackTraceFn(stackNeedle, logLevel) === false ) {
                return context.reflect();
            }
        }
        if ( how === 'debug' ) {
            debugger; // eslint-disable-line no-debugger
            return context.reflect();
        }
        safe.uboLog(logPrefix, `Suppressed:\n${callArgs.join('\n')}`);
        if ( how === 'abort' ) {
            throw new ReferenceError();
        }
    });
}

function matchesStackTraceFn(
    needleDetails,
    logLevel = ''
) {
    const safe = safeSelf();
    const exceptionToken = getExceptionTokenFn();
    const error = new safe.Error(exceptionToken);
    const docURL = new URL(self.location.href);
    docURL.hash = '';
    // Normalize stack trace
    const reLine = /(.*?@)?(\S+)(:\d+):\d+\)?$/;
    const lines = [];
    for ( let line of safe.String_split.call(error.stack, /[\n\r]+/) ) {
        if ( line.includes(exceptionToken) ) { continue; }
        line = line.trim();
        const match = safe.RegExp_exec.call(reLine, line);
        if ( match === null ) { continue; }
        let url = match[2];
        if ( url.startsWith('(') ) { url = url.slice(1); }
        if ( url === docURL.href ) {
            url = 'inlineScript';
        } else if ( url.startsWith('<anonymous>') ) {
            url = 'injectedScript';
        }
        let fn = match[1] !== undefined
            ? match[1].slice(0, -1)
            : line.slice(0, match.index).trim();
        if ( fn.startsWith('at') ) { fn = fn.slice(2).trim(); }
        let rowcol = match[3];
        lines.push(' ' + `${fn} ${url}${rowcol}:1`.trim());
    }
    lines[0] = `stackDepth:${lines.length-1}`;
    const stack = lines.join('\t');
    const r = needleDetails.matchAll !== true &&
        safe.testPattern(needleDetails, stack);
    if (
        logLevel === 'all' ||
        logLevel === 'match' && r ||
        logLevel === 'nomatch' && !r
    ) {
        safe.uboLog(stack.replace(/\t/g, '\n'));
    }
    return r;
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

function getExceptionTokenFn() {
    const token = getRandomTokenFn();
    const oe = self.onerror;
    self.onerror = function(msg, ...args) {
        if ( typeof msg === 'string' && msg.includes(token) ) { return true; }
        if ( oe instanceof Function ) {
            return oe.call(this, msg, ...args);
        }
    }.bind();
    return token;
}

function getRandomTokenFn() {
    const safe = safeSelf();
    return safe.String_fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
}

/******************************************************************************/

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [["Element.prototype.insertAdjacentHTML","\"afterbegin\"","prevent","/\\/[A-Za-z]+\\.min\\.js\\?/"],["Document.prototype.getElementsByTagName","\"h1\"","prevent","/_tick|[0-9A-Za-z]{8,}\\/< https:\\/\\/pvpoke-re\\.com\\/[0-9A-Za-z]{8,}\\.js\\?v=/"],["Document.prototype.getElementsByTagName","\"h2\"","prevent","/_tick|[0-9A-Za-z]{8,}\\/< https:\\/\\/pvpoke-re\\.com\\/[0-9A-Za-z]{8,}\\.js\\?v=/"],["Document.prototype.getElementsByTagName","\"p\"","prevent","/_tick|[0-9A-Za-z]{8,}\\/< https:\\/\\/pvpoke-re\\.com\\/[0-9A-Za-z]{8,}\\.js\\?v=/"],["eval","\"/chp_?ad/\""],["eval","\"/chp_?ad/\"","prevent"],["HTMLScriptElement.prototype.setAttribute","\"data-sdk\"","abort"],["eval","\"adsBlocked\""],["Storage.prototype.setItem","searchCount"],["fetch","\"flashtalking\""],["DOMTokenList.prototype.add","\"-\""],["HTMLScriptElement.prototype.setAttribute","\"data-cfasync\"","abort"]];
const hostnamesMap = new Map([["pvpoke-re.com",[0,1,2,3]],["zegtrends.com",4],["tea-coffee.net",4],["spatsify.com",4],["newedutopics.com",4],["getviralreach.in",4],["edukaroo.com",4],["funkeypagali.com",4],["careersides.com",4],["nayisahara.com",4],["wikifilmia.com",4],["infinityskull.com",4],["viewmyknowledge.com",4],["iisfvirtual.in",4],["starxinvestor.com",4],["jkssbalerts.com",4],["acetack.com",4],["blog.carstopia.net",4],["blog.carsmania.net",4],["redfea.com",4],["pranarevitalize.com",4],["techyinfo.in",4],["fitnessholic.net",4],["moderngyan.com",4],["sattakingcharts.in",4],["freshbhojpuri.com",4],["bgmi32bitapk.in",4],["bankshiksha.in",4],["earn.mpscstudyhub.com",4],["earn.quotesopia.com",4],["money.quotesopia.com",4],["best-mobilegames.com",4],["learn.moderngyan.com",4],["bharatsarkarijobalert.com",4],["quotesopia.com",4],["creditsgoal.com",4],["ikramlar.online",4],["headlinerpost.com",4],["posterify.net",4],["whatgame.xyz",4],["mooonten.com",4],["msic.site",4],["fx-22.com",4],["gold-24.net",4],["forexrw7.com",4],["mtcremix.com",4],["advicefunda.com",4],["bestloanoffer.net",4],["computerpedia.in",4],["techconnection.in",4],["bollywoodchamp.in",4],["texw.online",4],["10-train.com",4],["110tutorials.com",4],["103.74.5.104",4],["185.193.17.214",4],["207hd.com",4],["247beatz.ng",4],["247footballnow.com",4],["24pdd.*",4],["27-sidefire-blog.com",4],["2best.club",4],["2the.space",4],["2ix2.com",4],["30kaiteki.com",4],["3dassetcollection.com",4],["3gpterbaru.com",4],["3dyasan.com",4],["3fnews.com",4],["3rabsports.com",4],["4drumkits.com",4],["4fans.gay",4],["4fingermusic.com",4],["4gousya.net",4],["4horlover.com",4],["4spaces.org",4],["519.best",4],["51sec.org",4],["80-talet.se",4],["9ketsuki.info",4],["a2zbookmark.com",4],["aboedman.com",4],["addtobucketlist.com",4],["adisann.com",4],["adminreboot.com",4],["adsurfle.com",4],["adsy.pw",4],["advertafrica.net",4],["adnan-tech.com",4],["africue.com",4],["aghasolution.com",4],["airportwebcams.net",4],["aitoolsfree.org",4],["aitohuman.org",4],["akihabarahitorigurasiseikatu.com",4],["alanyapower.com",4],["albania.co.il",4],["albinofamily.com",4],["alexbacher.fr",4],["algodaodocescan.com.br",4],["allcalidad.app",4],["allcelebritywiki.com",4],["allcivilstandard.com",4],["alliptvlinks.com",4],["alliptvs.com",4],["almofed.com",4],["alphasource.site",4],["altcryp.com",4],["altselection.com",4],["altyazitube22.lat",4],["amaturehomeporn.com",4],["amnaymag.com",4],["amritadrino.com",4],["amtil.com.au",4],["analysis-chess.io.vn",4],["andani.net",4],["androidadult.com",4],["androidfacil.org",4],["angolopsicologia.com",4],["animalwebcams.net",4],["anime4mega.net",4],["anime4mega-descargas.net",4],["anime7.download",4],["anime-torrent.com",4],["animecenterbr.com",4],["animesonlineshd.com",4],["animetwixtor.com",4],["animexin.vip",4],["anmup.com.np",4],["anodee.com",4],["anonyviet.com",4],["anothergraphic.org",4],["aoseugosto.com",4],["aozoraapps.net",4],["apenasmaisumyaoi.com",4],["apkdink.com",4],["apostoliclive.com",4],["appdoze.com",4],["applediagram.com",4],["aprenderquechua.com",4],["arabstd.com",4],["arti-flora.nl",4],["articlebase.pk",4],["articlesmania.me",4],["ascalonscans.com",4],["asiansexdiarys.com",4],["askcerebrum.com",4],["askushowto.com",4],["aspirapolveremigliori.it",4],["assignmentdon.com",4],["astroages.com",4],["astrumscans.xyz",4],["atemporal.cloud",4],["atgstudy.com",4],["atlantisscan.com",4],["atleticalive.it",4],["audiobookexchangeplace.com",4],["audiotools.*",4],["audiotrip.org",4],["autocadcommand.com",4],["autodime.com",4],["autoindustry.ro",4],["automat.systems",4],["automothink.com",4],["autosport.*",4],["avitter.net",4],["awpd24.com",4],["ayatoon.com",4],["ayuka.link",4],["azamericasat.net",4],["azdly.com",4],["azores.co.il",4],["azrom.net",4],["babehubonlyfansly.com",4],["backyardpapa.com",4],["baithak.news",4],["baixedetudo.com.br",4],["balkanteka.net",4],["bandstand.ph",4],["batman.city",4],["bcanepaltu.com",4],["bcanotesnepal.com",4],["bcsnoticias.mx",4],["bdix.app",4],["bdokan.com",4],["bdsomadhan.com",4],["bdstarshop.com",4],["beaddiagrams.com",4],["bearchasingart.com",4],["beatree.cn",4],["bedavahesap.org",4],["beisbolinvernal.com",4],["bengalxpress.in",4],["beasttips.com",4],["berlin-teltow.de",4],["beruhmtemedien.com",4],["bestofarea.com",4],["bettingexchange.it",4],["bi-girl.net",4],["bibliotecadecorte.com",4],["bibliotecahermetica.com.br",4],["bidersnotu.com",4],["bif24.pl",4],["biftutech.com",4],["bigdata-social.com",4],["bimshares.com",4],["bishalghale.com.np",4],["bitcotasks.com",4],["bitlikutu.com",4],["bittukitech.in",4],["bitview.cloud",4],["bitzite.com",4],["blog.motionisland.com",4],["blog24.me",4],["blogk.com",4],["blogue.tech",4],["bloooog.it",4],["bloxyscripts.com",4],["bluebuddies.com",4],["bluecoreinside.com",4],["blurayufr.cam",4],["bogowieslowianscy.pl",4],["bookpraiser.com",4],["booksbybunny.com",4],["boredgiant.com",4],["botinnifit.com",4],["boundlessnecromancer.com",4],["boxaoffrir.com",4],["boxingvideo.org",4],["boxofficebusiness.in",4],["boystube.link",4],["braziliannr.com",4],["brevi.eu",4],["brian70.tw",4],["bright-b.com",4],["brightpets.org",4],["broadbottomvillage.co.uk",4],["brokensilenze.net",4],["brulosophy.com",4],["brushednickel.biz",4],["bshifast.live",4],["bsmaurya.com",4],["bugswave.com",4],["businesstrend.jp",4],["byswiizen.fr",4],["cafenau.com",4],["calculascendant.com",4],["calmarkcovers.com",4],["calvyn.com",4],["camcam.cc",4],["camnang24h.net",4],["canadanouvelles.com",4],["canaltdt.es",4],["canzoni-per-bambini.it",4],["captionpost.com",4],["carryflix.icu",4],["cashkar.in",4],["casperhd.com",4],["catatanonline.com",4],["catmovie.website",4],["cavalierstream.fr",4],["celebritablog.com",4],["celemusic.com",4],["celestialtributesonline.com",4],["cembarut.com.tr",4],["certificateland.com",4],["cg-method.com",4],["chachocool.com",4],["chakrirkhabar247.in",4],["championpeoples.com",4],["chanjaeblog.jp",4],["change-ta-vie-coaching.com",4],["charlottepilgrimagetour.com",4],["charpatra.com",4],["chart.services",4],["chatgbt.one",4],["chatgptfree.ai",4],["cheatermad.com",4],["check-imei.info",4],["cheese-cake.net",4],["chelsea24news.pl",4],["chevalmag.com",4],["chieflyoffer.com",4],["chihouban.com",4],["chikonori.com",4],["chineseanime.org",4],["christiantrendy.com",4],["cienagamagdalena.com",4],["cimbusinessevents.com.au",4],["cinema-sketch.com",4],["cinepiroca.com",4],["cizzyscripts.com",4],["claimclicks.com",4],["claydscap.com",4],["clockskin.us",4],["cloud9obits.com",4],["cocorip.net",4],["code-source.net",4],["codeandkey.com",4],["codeastro.com",4],["codeitworld.com",4],["codemystery.com",4],["coderblog.in",4],["codewebit.top",4],["coin-profits.xyz",4],["coinadpro.club",4],["coinbaby8.com",4],["coingraph.us",4],["cola16.app",4],["coleccionmovie.com",4],["colliersnews.com",4],["comeletspray.com",4],["cometogliere.com",4],["comoinstalar.me",4],["compota-soft.work",4],["conoscereilrischioclinico.it",4],["consigliatodanoi.it",4],["constructionmethodology.com",4],["constructionplacement.org",4],["cookni.net",4],["correction-livre-scolaire.fr",4],["coursesdaddy.com",4],["cpscan.xyz",4],["crackcodes.in",4],["crackthemes.com",4],["crackwatch.eu",4],["craigretailers.co.uk",4],["crazyashwin.com",4],["crazydeals.live",4],["creebhills.com",4],["creepyscans.com",4],["cricket12.com",4],["crn.pl",4],["cronachesalerno.it",4],["crunchytech.net",4],["cryptonor.xyz",4],["cryptonworld.space",4],["cryptotech.fun",4],["cryptowidgets.net",4],["crystalcomics.com",4],["cta-fansite.com",4],["cuckoldsex.net",4],["culture-informatique.net",4],["cykf.net",4],["cyprus.co.il",4],["daemon-hentai.com",4],["daij1n.info",4],["dailykpop.net",4],["dailytechupdates.in",4],["dailytips247.com",4],["dailyweb.pl",4],["davewigstone.com",4],["davidsonbuilders.com",4],["dabangbastar.com",4],["day4news.com",4],["daybuy.tw",4],["deathonnews.com",4],["dejongeturken.com",4],["delvein.tech",4],["demonictl.com",4],["demonyslowianskie.pl",4],["demooh.com",4],["depressionhurts.us",4],["derusblog.com",4],["descargaranimes.com",4],["descargaseriestv.com",4],["design4months.com",4],["desirenovel.com",4],["desktopsolution.org",4],["destakenewsgospel.com",4],["destinationsjourney.com",4],["detikbangka.com",4],["deutschpersischtv.com",4],["dev-dark-blog.pantheonsite.io",4],["devopslanka.com",4],["dewfuneralhomenews.com",4],["dhankasamaj.com",4],["diamondfansub.com",4],["diarioeducacion.com",4],["diencobacninh.com",4],["digitalseoninja.com",4],["dignityobituary.com",4],["dinheirocursosdownload.com",4],["diplomaexamcorner.com",4],["dipprofit.com",4],["dir-tech.com",4],["diskizone.com",4],["diversanews.com",4],["diyprojectslab.com",4],["djqunjab.in",4],["djsofchhattisgarh.in",4],["djstar.in",4],["dma-upd.org",4],["dobleaccion.xyz",4],["dobletecno.com",4],["domainregistrationtips.info",4],["dominican-republic.co.il",4],["donghuaworld.com",4],["donlego.com",4],["doublemindtech.com",4],["doumura.com",4],["downloadbatch.me",4],["downloader.is",4],["downloads.sayrodigital.net",4],["downloads.wegomovies.com",4],["downloadtanku.org",4],["dpscomputing.com",4],["drake-scans.com",4],["drakecomic.com",4],["dramafren.com",4],["dramaviki.com",4],["drzna.com",4],["dubaitime.net",4],["dumovies.com",4],["dvd-flix.com",4],["dvdgayonline.com",4],["e-food.jp",4],["e-kakoh.com",4],["earlymemorials.com",4],["earninginwork.com",4],["easyjapanesee.com",4],["easytodoit.com",4],["ecommercewebsite.store",4],["eczpastpapers.net",4],["editions-actu.org",4],["editorsadda.com",4],["edivaldobrito.com.br",4],["edjerba.com",4],["edukamer.info",4],["egram.com.ng",4],["einewelteinezukunft.de",4],["elcriticodelatele.com",4],["elcultura.pl",4],["elearning-cpge.com",4],["eleceedmanhwa.me",4],["electricalstudent.com",4],["embraceinnerchaos.com",4],["emperorscan.com",4],["empleo.com.uy",4],["encuentratutarea.com",4],["encurtareidog.top",4],["eng-news.com",4],["english-dubbed.com",4],["english-topics.com",4],["english101.co.za",4],["enryumanga.com",4],["ensenchat.com",4],["entenpost.com",4],["epsilonakdemy.com",4],["eramuslim.com",4],["erreguete.gal",4],["ervik.as",4],["esportsmonk.com",4],["esportsnext.com",4],["et-invest.de",4],["eternalhonoring.com",4],["ethiopia.co.il",4],["evdeingilizcem.com",4],["eventiavversinews.*",4],["everydayhomeandgarden.com",4],["evlenmekisteyenbayanlar.net",4],["ewybory.eu",4],["exam-results.in",4],["exeking.top",4],["expertskeys.com",4],["eymockup.com",4],["ezmanga.net",4],["faaduindia.com",4],["fapfapgames.com",4],["fapkingsxxx.com",4],["faqwiki.us",4],["farolilloteam.es",4],["fattelodasolo.it",4],["fchopin.net",4],["felicetommasino.com",4],["femisoku.net",4],["ferdroid.net",4],["fessesdenfer.com",4],["feyorra.top",4],["fhedits.in",4],["fhmemorial.com",4],["fibwatch.store",4],["filmypoints.in",4],["finalnews24.com",4],["financeandinsurance.xyz",4],["financeyogi.net",4],["financid.com",4],["finclub.in",4],["findheman.com",4],["findnewjobz.com",4],["fine-wings.com",4],["firescans.xyz",4],["fitnesshealtharticles.com",4],["fitnessscenz.com",4],["flashssh.net",4],["fleamerica.com",4],["flexamens.com",4],["flixhub.*",4],["flordeloto.site",4],["flowsnet.com",4],["folkmord.se",4],["foodgustoso.it",4],["foodiesjoy.com",4],["footeuses.com",4],["footyload.com",4],["footymercato.com",4],["forex-yours.com",4],["forexcracked.com",4],["former-railroad-worker.com",4],["foxaholic.com",4],["francaisfacile.net",4],["free.7hd.club",4],["freebiesmockup.com",4],["freecoursesonline.me",4],["freedom3d.art",4],["freefiremaxofficial.com",4],["freefireupdate.com",4],["freegetcoins.com",4],["freelancerartistry.com",4],["freemedicalbooks.org",4],["freemockups.org",4],["freemovies-download.com",4],["freeoseocheck.com",4],["freepasses.org",4],["freescorespiano.com",4],["freetarotonline.com",4],["freetubetv.net",4],["freevstplugins.*",4],["freewoodworking.ca",4],["fresherbaba.com",4],["freshersgold.com",4],["friedrichshainblog.de",4],["frpgods.com",4],["ftuapps.*",4],["fumettologica.it",4],["funeral-memorial.com",4],["funeralmemorialnews.com",4],["funeralobitsmemorial.com",4],["funztv.com",4],["futbolenlatelevision.com",4],["gabrielcoding.com",4],["gadgetspidy.com",4],["gadgetxplore.com",4],["gahag.net",4],["galaxytranslations10.com",4],["galaxytranslations97.com",4],["galinhasamurai.com",4],["game5s.com",4],["gameblog.jp",4],["gamefi-mag.com",4],["gamenv.net",4],["gamers-haven.org",4],["gamerxyt.com",4],["games-manuals.com",4],["gamevcore.com",4],["gaminglariat.com",4],["gamingsearchjournal.com",4],["ganzoscan.com",4],["gatagata.net",4],["gazetazachodnia.eu",4],["gdrivemovies.xyz",4],["geekering.com",4],["gemiadamlari.org",4],["gentiluomodigitale.it",4],["gesund-vital.online",4],["getsuicidegirlsfree.com",4],["getworkation.com",4],["ghostsfreaks.com",4],["girlydrop.com",4],["gisvacancy.com",4],["giuseppegravante.com",4],["gkbooks.in",4],["gkgsca.com",4],["gksansar.com",4],["glo-n.online",4],["globelempire.com",4],["gnusocial.jp",4],["goegoe.net",4],["gogetadoslinks.*",4],["gogetapast.com.br",4],["gogifox.com",4],["gogueducation.com",4],["gokerja.net",4],["gokushiteki.com",4],["golf.rapidmice.com",4],["gomov.bio",4],["goodriviu.com",4],["googlearth.selva.name",4],["gorating.in",4],["gotocam.net",4],["grafikos.cz",4],["grasta.net",4],["grazymag.com",4],["greasygaming.com",4],["greattopten.com",4],["grootnovels.com",4],["gsdn.live",4],["gsmfreezone.com",4],["gsmmessages.com",4],["gtavi.pl",4],["gurbetseli.net",4],["gvnvh.net",4],["gwiazdatalkie.com",4],["habuteru.com",4],["hackingwala.com",4],["hackmodsapk.com",4],["hadakanonude.com",4],["hairjob.wpx.jp",4],["happy-otalife.com",4],["haqem.com",4],["harbigol.com",4],["harley.top",4],["haryanaalert.*",4],["haveyaseenjapan.com",4],["haxnode.net",4],["hdhub4one.pics",4],["hbnews24.com",4],["healthbeautybee.com",4],["healthcheckup.com",4],["healthfatal.com",4],["heartofvicksburg.com",4],["heartrainbowblog.com",4],["hechos.net",4],["hellenism.net",4],["heutewelt.com",4],["hhesse.de",4],["highdefdiscnews.com",4],["hilaw.vn",4],["hindi.trade",4],["hindimatrashabd.com",4],["hindinest.com",4],["hindishri.com",4],["hiphopa.net",4],["hipsteralcolico.altervista.org",4],["historichorizons.com",4],["hivetoon.com",4],["hobbykafe.com",4],["hockeyfantasytools.com",4],["hoegel-textildruck.de",4],["hojii.net",4],["hoofoot.net",4],["hookupnovel.com",4],["hopsion-consulting.com",4],["hostingreviews24.com",4],["hotspringsofbc.ca",4],["howtoblogformoney.net",4],["hub2tv.com",4],["hungarianhardstyle.hu",4],["hyderone.com",4],["hyogo.ie-t.net",4],["hypelifemagazine.com",4],["hypesol.com",4],["ideatechy.com",4],["idesign.wiki",4],["idevfast.com",4],["idevice.me",4],["idpvn.com",4],["iggtech.com",4],["ignoustudhelp.in",4],["ikarianews.gr",4],["ilbassoadige.it",4],["ilbolerodiravel.org",4],["imperiofilmes.co",4],["indiasmagazine.com",4],["individualogist.com",4],["inertz.org",4],["infamous-scans.com",4],["infocycles.com",4],["infodani.net",4],["infojabarloker.com",4],["infokita17.com",4],["informatudo.com.br",4],["infrafandub.com",4],["infulo.com",4],["inlovingmemoriesnews.com",4],["inprogrammer.com",4],["inra.bg",4],["insideeducation.co.za",4],["insidememorial.com",4],["insider-gaming.com",4],["insurancepost.xyz",4],["intelligence-console.com",4],["interculturalita.it",4],["inventionsdaily.com",4],["iptvxtreamcodes.com",4],["isabihowto.com.ng",4],["italiadascoprire.net",4],["itdmusic.*",4],["itmaniatv.com",4],["itopmusic.com",4],["itopmusics.com",4],["itopmusicx.com",4],["itz-fast.com",4],["iumkit.net",4],["iwb.jp",4],["jackofalltradesmasterofsome.com",4],["jaktsidan.se",4],["japannihon.com",4],["javboys.*",4],["javcock.com",4],["jcutrer.com",4],["jk-market.com",4],["jobsbd.xyz",4],["jobsibe.com",4],["jobslampung.net",4],["josemo.com",4],["jra.jpn.org",4],["jrlinks.in",4],["jungyun.net",4],["juninhoscripts.com.br",4],["juventusfc.hu",4],["kacengeng.com",4],["kacikcelebrytow.com",4],["kagohara.net",4],["kakashiyt.com",4],["kakiagune.com",4],["kali.wiki",4],["kana-mari-shokudo.com",4],["kanaeblog.net",4],["kandisvarlden.com",4],["karaoke4download.com",4],["kattannonser.se",4],["kawaguchimaeda.com",4],["kaystls.site",4],["kenkou-maintenance.com",4],["kenta2222.com",4],["keroseed.*",4],["kgs-invest.com",4],["kh-pokemon-mc.com",4],["khabarbyte.com",4],["khabardinbhar.net",4],["khohieu.com",4],["kickcharm.com",4],["kinisuru.com",4],["kits4beats.com",4],["kllproject.lv",4],["know-how-tree.com",4],["knowstuff.in",4],["kobitacocktail.com",4],["kodaika.com",4],["kodewebsite.com",4],["kodibeginner.com",4],["kokosovoulje.com",4],["kolcars.shop",4],["kompiko.pl",4],["koreanbeauty.club",4],["korogashi-san.org",4],["korsrt.eu.org",4],["kotanopan.com",4],["koume-in-huistenbosch.net",4],["krx18.com",4],["kukni.to",4],["kupiiline.com",4],["kurosuen.live",4],["labstory.in",4],["ladkibahin.com",4],["ladypopularblog.com",4],["lamorgues.com",4],["lampungkerja.com",4],["lapaginadealberto.com",4],["lascelebrite.com",4],["latinlucha.es",4],["law101.org.za",4],["lawweekcolorado.com",4],["lawyercontact.us",4],["learnedclub.com",4],["learnmany.in",4],["learnchannel-tv.com",4],["learnodo-newtonic.com",4],["learnospot.com",4],["lebois-racing.com",4],["lectormh.com",4],["leechyscripts.net",4],["leeapk.com",4],["legendaryrttextures.com",4],["lendrive.web.id",4],["lespartisanes.com",4],["letrasgratis.com.ar",4],["levismodding.co.uk",4],["lgcnews.com",4],["lglbmm.com",4],["lheritierblog.com",4],["librasol.com.br",4],["ligaset.com",4],["limontorrent.com",4],["limontorrents.com",4],["linkskibe.com",4],["linkvoom.com",4],["linkz.*",4],["linux-talks.com",4],["linuxexplain.com",4],["lionsfan.net",4],["literarysomnia.com",4],["littlepandatranslations.com",4],["livefootballempire.com",4],["lk21org.com",4],["lmtos.com",4],["loanpapa.in",4],["locurainformaticadigital.com",4],["logofootball.net",4],["lookism.me",4],["lotus-tours.com.hk",4],["lovingsiren.com",4],["ltpcalculator.in",4],["luchaonline.com",4],["luciferdonghua.in",4],["lucrebem.com.br",4],["lustesthd.cloud",4],["lustesthd.lat",4],["lycee-maroc.com",4],["m4u.*",4],["macrocreator.com",4],["madevarquitectos.com",4],["magesypro.*",4],["maisondeas.com",4],["maketoss.com",4],["makeupguide.net",4],["makotoichikawa.net",4],["malluporno.com",4],["mamtamusic.in",4],["mangcapquangvnpt.com",4],["manhastro.com",4],["mantrazscan.com",4],["maps4study.com.br",4],["marimo-info.net",4],["marketedgeofficial.com",4],["marketing-business-revenus-internet.fr",4],["marketrevolution.eu",4],["masashi-blog418.com",4],["mastakongo.info",4],["masterpctutoriales.com",4],["maths101.co.za",4],["matomeiru.com",4],["matshortener.xyz",4],["mcrypto.*",4],["mdn.lol",4],["medeberiya1.com",4],["mediascelebres.com",4],["medytour.com",4],["meilblog.com",4],["memorialnotice.com",4],["mentalhealthcoaching.org",4],["meteoregioneabruzzo.it",4],["mhscans.com",4],["michiganrugcleaning.cleaning",4],["midis.com.ar",4],["midlandstraveller.com",4],["minddesignclub.org",4],["minecraftwild.com",4],["minhasdelicias.com",4],["mitaku.net",4],["mitsmits.com",4],["mixmods.com.br",4],["mm-scans.org",4],["mmfenix.com",4],["mmorpgplay.com.br",4],["mmoovvfr.cloudfree.jp",4],["mockupcity.com",4],["mockupgratis.com",4],["modele-facture.com",4],["modyster.com",4],["monaco.co.il",4],["morinaga-office.net",4],["mosttechs.com",4],["moto-station.com",4],["motofan-r.com",4],["movieping.com",4],["movies4u.*",4],["moviesnipipay.me",4],["mrfreemium.blogspot.com",4],["mscdroidlabs.es",4],["msonglyrics.com",4],["mtech4you.com",4],["multimovies.tech",4],["mummumtime.com",4],["mundovideoshd.com",4],["murtonroofing.com",4],["musicforchoir.com",4],["musictip.net",4],["mxcity.mx",4],["mxpacgroup.com",4],["my-ford-focus.de",4],["myglamwish.com",4],["myicloud.info",4],["mylinkat.com",4],["mylivewallpapers.com",4],["mypace.sasapurin.com",4],["myqqjd.com",4],["mytectutor.com",4],["myunity.dev",4],["myviptuto.com",4],["nagpurupdates.com",4],["naijagists.com",4],["naijdate.com",4],["najboljicajevi.com",4],["nakiny.com",4],["nameart.in",4],["nartag.com",4],["naturalmentesalute.org",4],["naturomicsworld.com",4],["naveedplace.com",4],["navinsamachar.com",4],["neet.wasa6.com",4],["negative.tboys.ro",4],["neifredomar.com",4],["nekoscans.com",4],["nemumemo.com",4],["nepaljobvacancy.com",4],["neservicee.com",4],["netsentertainment.net",4],["neuna.net",4],["newbookmarkingsite.com",4],["newfreelancespot.com",4],["newlifefuneralhomes.com",4],["news-geinou100.com",4],["newscard24.com",4],["newstechone.com",4],["nghetruyenma.net",4],["nhvnovels.com",4],["nichetechy.com",4],["nin10news.com",4],["nicetube.one",4],["ninjanovel.com",4],["nishankhatri.*",4],["niteshyadav.in",4],["nknews.jp",4],["nkreport.jp",4],["noanyi.com",4],["nobodycancool.com",4],["noblessetranslations.com",4],["nocfsb.com",4],["nocsummer.com.br",4],["nodenspace.com",4],["noikiiki.info",4],["notandor.cn",4],["note1s.com",4],["notesformsc.org",4],["noteshacker.com",4],["novel-gate.com",4],["novelbob.com",4],["novelread.co",4],["nsfwr34.com",4],["nswdownload.com",4],["nswrom.com",4],["ntucgm.com",4],["nudeslegion.com",4],["nukedfans.com",4],["nukedpacks.site",4],["nulledmug.com",4],["nvimfreak.com",4],["nyangames.altervista.org",4],["nylonstockingsex.net",4],["oatuu.org",4],["oberschwaben-tipps.de",4],["obituary-deathnews.com",4],["obituaryupdates.com",4],["odekake-spots.com",4],["officialpanda.com",4],["ofppt.net",4],["ofwork.net",4],["okblaz.me",4],["olamovies.store",4],["onehack.us",4],["onestringlab.com",4],["onlinetechsamadhan.com",4],["onlinetntextbooks.com",4],["onneddy.com",4],["onyxfeed.com",4],["openstartup.tm",4],["opiniones-empresas.com",4],["oracleerpappsguide.com",4],["orenoraresne.com",4],["oromedicine.com",4],["orunk.com",4],["osteusfilmestuga.online",4],["otakuliah.com",4],["oteknologi.com",4],["otokukensaku.jp",4],["ottrelease247.com",4],["ovnihoje.com",4],["pabryyt.one",4],["palofw-lab.com",4],["paminy.com",4],["pandaatlanta.com",4],["pandanote.info",4],["pantube.top",4],["paolo9785.com",4],["papafoot.click",4],["papahd.club",4],["paris-tabi.com",4],["parisporn.org",4],["parking-map.info",4],["pasokau.com",4],["passionatecarbloggers.com",4],["passportaction.com",4],["pc-guru.it",4],["pc-hobby.com",4],["pc-spiele-wiese.de",4],["pcgamedownload.net",4],["pcgameszone.com",4],["pdfstandards.net",4],["pepar.net",4],["personefamose.it",4],["petitestef.com",4],["pflege-info.net",4],["phoenix-manga.com",4],["phonefirmware.com",4],["physics101.co.za",4],["picgiraffe.com",4],["pilsner.nu",4],["piratemods.com",4],["piximfix.com",4],["plantatreenow.com",4],["plc4free.com",4],["pliroforiki-edu.gr",4],["poapan.xyz",4],["poco.rcccn.in",4],["pogga.org",4],["pokeca-chart.com",4],["pondit.xyz",4],["ponsel4g.com",4],["poplinks.*",4],["porlalibreportal.com",4],["pornfeel.com",4],["porninblack.com",4],["portaldoaz.org",4],["portaldosreceptores.org",4],["portalyaoi.com",4],["postazap.com",4],["posturecorrectorshop-online.com",4],["practicalkida.com",4],["prague-blog.co.il",4],["praveeneditz.com",4],["premierftp.com",4],["prensa.click",4],["prensaesports.com",4],["pressemedie.dk",4],["pressurewasherpumpdiagram.com",4],["pricemint.in",4],["primemovies.pl",4],["prismmarketingco.com",4],["proapkdown.com",4],["projuktirkotha.com",4],["promiblogs.de",4],["promimedien.com",4],["promisingapps.com",4],["protestia.com",4],["psicotestuned.info",4],["psychology-spot.com",4],["publicdomainq.net",4],["publicdomainr.net",4],["publicidadtulua.com",4],["pupuweb.com",4],["putlog.net",4],["pynck.com",4],["quatvn.club",4],["questionprimordiale.fr",4],["quicktelecast.com",4],["radiantsong.com",4],["rabo.no",4],["ragnarokscanlation.*",4],["rahim-soft.com",4],["rail-log.net",4],["railwebcams.net",4],["raishin.xyz",4],["ralli.ee",4],["ranjeet.best",4],["ranourano.xyz",4],["raulmalea.ro",4],["rbs.ta36.com",4],["rbscripts.net",4],["rctechsworld.in",4],["readfast.in",4],["readhunters.xyz",4],["realfreelancer.com",4],["realtormontreal.ca",4],["receptyonline.cz",4],["recipenp.com",4],["redbubbletools.com",4],["redfaucet.site",4],["reeell.com",4],["renierassociatigroup.com",4],["reportbangla.com",4],["reprezentacija.rs",4],["retire49.com",4],["retrotv.org",4],["reviewmedium.com",4],["revistaapolice.com.br",4],["rgmovies.*",4],["ribbelmonster.de",4],["rightdark-scan.com",4],["rinconpsicologia.com",4],["ritacandida.com",4],["riwayat-word.com",4],["rlshort.com",4],["rocdacier.com",4],["rollingglobe.online",4],["romaierioggi.it",4],["romaniasoft.ro",4],["roms4ever.com",4],["romviet.com",[4,7]],["roshy.tv",4],["roznamasiasat.com",4],["rubyskitchenrecipes.uk",4],["ruyamanga.com",4],["rv-ecommerce.com",4],["ryanmoore.marketing",4],["ryansharich.com",4],["s1os.icu",4],["s4msecurity.com",4],["s920221683.online.de",4],["sabishiidesu.com",4],["saekita.com",4],["samanarthishabd.in",4],["samovies.net",4],["samrudhiglobal.com",4],["samurai.wordoco.com",4],["sanmiguellive.com",4],["santhoshrcf.com",4],["sararun.net",4],["sarkariresult.social",4],["satcesc.com",4],["savegame.pro",4],["sawwiz.com",4],["scansatlanticos.com",4],["schadeck.eu",4],["sezia.com",4],["schildempire.com",4],["scholarshiplist.org",4],["sciencebe21.in",4],["scontianastro.com",4],["scrap-blog.com",4],["scripcheck.great-site.net",4],["scriptsomg.com",4],["searchmovie.wp.xdomain.jp",4],["searchnsucceed.in",4],["seasons-dlove.net",4],["seirsanduk.com",4],["seogroup.bookmarking.info",4],["seoworld.in",4],["seriu.jp",4],["setsuyakutoushi.com",4],["serieshdpormega.com",4],["server-tutorials.net",4],["serverbd247.com",4],["serverxfans.com",4],["shadagetech.com",4],["shanurdu.com",4],["sharphindi.in",4],["sheikhmovies.*",4],["shimauma-log.com",4],["shittokuadult.net",4],["shlly.com",4],["shogaisha-shuro.com",4],["shogaisha-techo.com",4],["shopkensaku.com",4],["shorttrick.in",4],["showflix.*",4],["showrovblog.com",4],["shrinklinker.com",4],["shrinkus.tk",4],["shrivardhantech.in",4],["sieradmu.com",4],["siimanga.cyou",4],["siirtolayhaber.com",4],["sim-kichi.monster",4],["sivackidrum.net",4],["sk8therapy.fr",4],["skardu.pk",4],["skidrowreloaded.com",4],["slawoslaw.pl",4],["slowianietworza.pl",4],["smallseotools.ai",4],["smartinhome.pl",4],["snowman-information.com",4],["socebd.com",4],["sociallyindian.com",4],["softcobra.com",4],["softrop.com",4],["sohohindi.com",4],["sosuroda.pl",4],["south-park-tv.biz",4],["soziologie-politik.de",4],["sp500-up.com",4],["space-faucet.com",4],["spacestation-online.com",4],["spardhanews.com",4],["speak-english.net",4],["speculationis.com",4],["spinoff.link",4],["spiritparting.com",4],["sport-97.com",4],["sportsblend.net",4],["ssdownloader.online",4],["stablediffusionxl.com",4],["stadelahly.net",4],["stahnivideo.cz",4],["starsgtech.in",4],["start-to-run.be",4],["startupjobsportal.com",4],["stbemuiptvn.com",4],["ster-blog.xyz",4],["stimotion.pl",4],["stireazilei.eu",4],["stock-rom.com",4],["streamseeds24.com",4],["strefa.biz",4],["studybullet.com",4],["sufanblog.com",4],["sukuyou.com",4],["sullacollina.it",4],["sumirekeiba.com",4],["sundberg.ws",4],["suneelkevat.com",4],["super-ethanol.com",4],["superpackpormega.com",4],["surgicaltechie.com",4],["swietaslowianskie.pl",4],["symboleslowianskie.pl",4],["sysguides.com",4],["swordalada.org",4],["system32.ink",4],["ta3arof.net",4],["taariikh.net",4],["tabonitobrasil.tv",4],["taisha-diet.com",4],["talentstareducation.com",4],["tamil-lyrics.com",4],["tamilanzone.com",4],["tamilhit.tech",4],["tamilnaadi.com",4],["tamilultra.team",4],["tamilultratv.co.in",4],["tatsublog.com",4],["tbazzar.com",4],["teachersupdates.net",4],["team-octavi.com",4],["team-rcv.xyz",4],["teamkong.tk",4],["teamupinternational.com",4],["techacrobat.com",4],["techastuces.com",4],["techbytesblog.com",4],["techdriod.com",4],["techedubyte.com",4],["techforu.in",4],["techiepirates.com",4],["techiestalk.in",4],["techkeshri.com",4],["techlog.ta-yan.ai",4],["technewslive.org",4],["technewsrooms.com",4],["technicalviral.com",4],["technorj.com",4],["technorozen.com",4],["techoreview.com",4],["techprakash.com",4],["techsbucket.com",4],["techstwo.com",4],["techyhigher.com",4],["techyrick.com",4],["tecnomd.com",4],["tecnoscann.com",4],["tedenglish.site",4],["tehnotone.com",4],["telephone-soudan.com",4],["teluguhitsandflops.com",4],["temporeale.info",4],["tenbaiquest.com",4],["tespedia.com",4],["testious.com",4],["thangdangblog.com",4],["thaript.com",4],["theberserkmanga.com",4],["thebigblogs.com",4],["thedilyblog.com",4],["thegnomishgazette.com",4],["theconomy.me",4],["thegamearcade.com",4],["theinternettaughtme.com",4],["thejoblives.com",4],["thelastgamestandingexp.com",4],["theliveupdate.com",4],["thenewsglobe.net",4],["theprofoundreport.com",4],["thermoprzepisy.pl",4],["thesarkariresult.net",4],["thesextube.net",4],["thesleak.com",4],["thesportsupa.com",4],["thewambugu.com",4],["theworldobits.com",4],["thiagorossi.com.br",4],["throwsmallstone.com",4],["tiny-sparklies.com",4],["titfuckvideos.com",4],["tirumalatirupatiyatra.in",4],["tnstudycorner.in",4],["today-obits.com",4],["todays-obits.com",4],["toeflgratis.com",4],["tokoasrimotedanpayet.my.id",4],["toorco.com",4],["top10trends.net",4],["topbiography.co.in",4],["topfaucet.us",4],["topsworldnews.com",4],["toptenknowledge.com",4],["torrentdofilmeshd.net",4],["torrentgame.org",4],["totally.top",4],["towerofgod.top",4],["tr3fit.xyz",4],["transgirlslive.com",4],["trendflatt.com",4],["trendohunts.com",4],["trgtkls.org",4],["trilog3.net",4],["trovapromozioni.it",4],["trucosonline.com",4],["tsubasatr.org",4],["tukangsapu.net",4],["tuktukcinma.com",4],["tunabagel.net",4],["turkeymenus.com",4],["turkishseriestv.net",4],["tutorialesdecalidad.com",4],["tutorialsduniya.com",4],["tuxnews.it",4],["twobluescans.com",4],["tw.xn--h9jepie9n6a5394exeq51z.com",4],["u-idol.com",4],["uciteljica.net",4],["udemyking.com",4],["uiuxsource.com",4],["ukigmoch.com",4],["ultimate-catch.eu",4],["umabomber.com",4],["underground.tboys.ro",4],["unityassets4free.com",4],["uozzart.com",4],["uploadbank.com",4],["uprwssp.org",4],["uqozy.com",4],["usahealthandlifestyle.com",4],["userupload.*",4],["ustimz.com",4],["ustvgo.live",4],["utaitebu.com",4],["utilidades.ecuadjsradiocorp.com",4],["uur-tech.net",4],["vamsivfx.com",4],["varnascan.com",4],["vedetta.org",4],["veganab.co",4],["vegas411.com",4],["venus-and-mars.com",4],["veryfuntime.com",4],["vibezhub.com.ng",4],["viciante.com.br",4],["videodidixx.com",4],["videosgays.net",4],["villettt.kitchen",4],["violablu.net",4],["virabux.com",4],["viralxns.com",4],["virtual-youtuber.jp",4],["visorsmr.com",4],["visortecno.com",4],["vitadacelebrita.com",4],["vivrebordeaux.fr",4],["vmorecloud.com",4],["vnuki.net",4],["voiceloves.com",4],["voidtruth.com",4],["voiranime1.fr",4],["vstplugin.net",4],["warungkomik.com",4],["webacademix.com",4],["webcamfuengirola.com",4],["webcras.com",4],["webhostingoffer.org",4],["websiteglowgh.com",4],["weebee.me",4],["welcometojapan.jp",4],["whats-new.cyou",4],["wheelofgold.com",4],["wholenotism.com",4],["wikijankari.com",4],["wikipooster.com",4],["wikitechy.com",4],["windbreaker.me",4],["windowsaplicaciones.com",4],["wirtualnelegionowo.pl",4],["wirtualnynowydwor.pl",4],["workxvacation.jp",4],["worldgyan18.com",4],["worldtop2.com",4],["worldwidestandard.net",4],["worthitorwoke.com",4],["wp.solar",4],["wpteq.org",4],["writeprofit.org",4],["wvt24.top",4],["xiaomitools.com",4],["xn--algododoce-j5a.com",4],["xn--kckzb2722b.com",4],["xn--n8jwbyc5ezgnfpeyd3i0a3ow693bw65a.com",4],["xn--nbkw38mlu2a.com",4],["xprime4u.*",4],["xpressarticles.com",4],["yakisurume.com",4],["yakyufan-asobiba.com",4],["yamsoti.com",4],["yaspage.com",4],["yawm.online",4],["yazilidayim.net",4],["ycongnghe.com",4],["yestech.xyz",4],["ynk-blog.com",4],["yoshare.net",4],["youlife24.com",4],["youmedemblik.nl",4],["youpit.xyz",4],["your-local-pest-control.com",4],["yourdesignmagazine.com",4],["yuatools.com",4],["yuki0918kw.com",4],["yumekomik.com",4],["yunakhaber.com",4],["yuramanga.my.id",4],["yurudori.com",4],["zecchino-doro.it",4],["zerogptai.org",4],["zien.pl",4],["ziminvestors.com",4],["ziontutorial.com",4],["zippyshare.cloud",4],["zippysharecue.com",4],["znanemediablog.com",4],["zyromod.com",4],["kiemlua.com",4],["link1s.com",4],["bloggingguidance.com",4],["onroid.com",4],["mathcrave.com",4],["intro-hd.net",4],["richtoscan.com",4],["tainguyenmienphi.com",4],["questloops.com",4],["wvt.free.nf",4],["appnee.com",4],["nxbrew.net",5],["tresdaos.com",5],["cinema.com.my",6],["crosswordsolver.com",6],["allcelebspics.com",7],["alttyab.net",7],["an1me.*",7],["androjungle.com",7],["arkadmin.fr",7],["azoranov.com",7],["barranquillaestereo.com",7],["brasilsimulatormods.com",7],["cambrevenements.com",7],["cartoonstvonline.com",7],["comparili.net",7],["diaobe.net",7],["filegajah.com",7],["filmestorrent.tv",7],["franceprefecture.fr",7],["freecricket.net",7],["gcpainters.com",7],["germanvibes.org",7],["getmaths.co.uk",7],["gewinnspiele-markt.com",7],["hamzag.com",7],["hannibalfm.net",7],["hornyconfessions.com",7],["ilcamminodiluce.it",7],["joguinhosgratis.com",7],["joziporn.com",7],["justpaste.top",7],["mctechsolutions.in",7],["medibok.se",7],["megafire.net",7],["mirrorpoi.my.id",7],["mockuphunts.com",7],["mortaltech.com",7],["multivideodownloader.com",7],["nauci-engleski.com",7],["nauci-njemacki.com",7],["nekopoi.my.id",7],["nuketree.com",7],["pa1n.xyz",7],["papafoot.*",7],["playertv.net",7],["programsolve.com",7],["radio-deejay.com",7],["ranaaclanhungary.com",7],["rasoi.me",7],["riprendiamocicatania.com",7],["rsrlink.in",7],["seriesperu.com",7],["shmapp.ca",7],["sub2unlocker.com",7],["skillmineopportunities.com",7],["teczpert.com",7],["totalsportek.app",7],["tromcap.com",7],["tv0800.com",7],["tv3monde.com",7],["ustrendynews.com",7],["watchnow.fun",7],["weashare.com",7],["yelitzonpc.com",7],["ymknow.xyz",7],["shomareh-yab.ir",8],["cimanow.cc",9],["freex2line.online",9],["evaki.fun",10],["sportshub.to",10],["sportnews.to",10],["bebasbokep.online",11]]);
const exceptionsMap = new Map([]);
const hasEntities = true;
const hasAncestors = false;

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
    try { trustedSuppressNativeMethod(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
