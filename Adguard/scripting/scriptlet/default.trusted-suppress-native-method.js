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
const argsList = [["eval","\"/chp_?ad/\""],["HTMLScriptElement.prototype.setAttribute","\"data-sdk\"","abort"],["eval","\"adsBlocked\""],["eval","\"/chp_?ad/\"","prevent"],["Storage.prototype.setItem","searchCount"],["DOMTokenList.prototype.add","\"-\""],["HTMLScriptElement.prototype.setAttribute","\"data-cfasync\"","abort"],["Document.prototype.getElementsByTagName","\"body\"","prevent","/\\/[A-Za-z]+\\.min\\.js\\?/"]];
const hostnamesMap = new Map([["zegtrends.com",0],["tea-coffee.net",0],["spatsify.com",0],["newedutopics.com",0],["getviralreach.in",0],["edukaroo.com",0],["funkeypagali.com",0],["careersides.com",0],["nayisahara.com",0],["wikifilmia.com",0],["infinityskull.com",0],["viewmyknowledge.com",0],["iisfvirtual.in",0],["starxinvestor.com",0],["jkssbalerts.com",0],["acetack.com",0],["blog.carstopia.net",0],["blog.carsmania.net",0],["redfea.com",0],["pranarevitalize.com",0],["techyinfo.in",0],["fitnessholic.net",0],["moderngyan.com",0],["sattakingcharts.in",0],["freshbhojpuri.com",0],["bgmi32bitapk.in",0],["bankshiksha.in",0],["earn.mpscstudyhub.com",0],["earn.quotesopia.com",0],["money.quotesopia.com",0],["best-mobilegames.com",0],["learn.moderngyan.com",0],["bharatsarkarijobalert.com",0],["quotesopia.com",0],["creditsgoal.com",0],["ikramlar.online",0],["posterify.net",0],["whatgame.xyz",0],["mooonten.com",0],["msic.site",0],["fx-22.com",0],["gold-24.net",0],["forexrw7.com",0],["mtcremix.com",0],["advicefunda.com",0],["bestloanoffer.net",0],["computerpedia.in",0],["techconnection.in",0],["bollywoodchamp.in",0],["texw.online",0],["kiemlua.com",0],["link1s.com",0],["bloggingguidance.com",0],["onroid.com",0],["10-train.com",0],["110tutorials.com",0],["103.74.5.104",0],["185.193.17.214",0],["207hd.com",0],["247beatz.ng",0],["247footballnow.com",0],["24pdd.*",0],["27-sidefire-blog.com",0],["2best.club",0],["2the.space",0],["2ix2.com",0],["30kaiteki.com",0],["3dyasan.com",0],["3fnews.com",0],["3rabsports.com",0],["4drumkits.com",0],["4fans.gay",0],["4fingermusic.com",0],["4gousya.net",0],["4horlover.com",0],["4spaces.org",0],["519.best",0],["51sec.org",0],["80-talet.se",0],["9alami.info",0],["9ketsuki.info",0],["a2zbookmark.com",0],["aboedman.com",0],["addtobucketlist.com",0],["adisann.com",0],["adminreboot.com",0],["adsurfle.com",0],["adsy.pw",0],["advertafrica.net",0],["adnan-tech.com",0],["africue.com",0],["aghasolution.com",0],["aitoolsfree.org",0],["aitohuman.org",0],["akihabarahitorigurasiseikatu.com",0],["alanyapower.com",0],["albania.co.il",0],["albinofamily.com",0],["algodaodocescan.com.br",0],["allcalidad.app",0],["allcelebritywiki.com",0],["allcivilstandard.com",0],["alliptvlinks.com",0],["alliptvs.com",0],["almofed.com",0],["altcryp.com",0],["altselection.com",0],["altyazitube22.lat",0],["amaturehomeporn.com",0],["amnaymag.com",0],["amritadrino.com",0],["amtil.com.au",0],["analysis-chess.io.vn",0],["andani.net",0],["androidadult.com",0],["androidfacil.org",0],["angolopsicologia.com",0],["anime4mega.net",0],["anime4mega-descargas.net",0],["anime7.download",0],["anime-torrent.com",0],["animecenterbr.com",0],["animesonlineshd.com",0],["animetwixtor.com",0],["animexin.vip",0],["anmup.com.np",0],["anodee.com",0],["anonyviet.com",0],["anothergraphic.org",0],["aoseugosto.com",0],["aozoraapps.net",0],["apenasmaisumyaoi.com",0],["apkdink.com",0],["apostoliclive.com",0],["appdoze.com",0],["applediagram.com",0],["aprenderquechua.com",0],["arabstd.com",0],["articlebase.pk",0],["articlesmania.me",0],["ascalonscans.com",0],["asiansexdiarys.com",0],["askcerebrum.com",0],["askushowto.com",0],["aspirapolveremigliori.it",0],["astroages.com",0],["astrumscans.xyz",0],["atgstudy.com",0],["atlantisscan.com",0],["atleticalive.it",0],["audiobookexchangeplace.com",0],["audiotools.*",0],["audiotrip.org",0],["autodime.com",0],["autoindustry.ro",0],["automat.systems",0],["automothink.com",0],["autosport.*",0],["avitter.net",0],["awpd24.com",0],["ayatoon.com",0],["ayuka.link",0],["azamericasat.net",0],["azdly.com",0],["azores.co.il",0],["azrom.net",0],["babehubonlyfansly.com",0],["backyardpapa.com",0],["baixedetudo.com.br",0],["balkanteka.net",0],["bandstand.ph",0],["batman.city",0],["bcanepaltu.com",0],["bcanotesnepal.com",0],["bcsnoticias.mx",0],["bdix.app",0],["bdokan.com",0],["bdsomadhan.com",0],["bdstarshop.com",0],["beaddiagrams.com",0],["bearchasingart.com",0],["beatree.cn",0],["bedavahesap.org",0],["beisbolinvernal.com",0],["bengalxpress.in",0],["bettingexchange.it",0],["bi-girl.net",0],["bibliotecadecorte.com",0],["bibliotecahermetica.com.br",0],["bidersnotu.com",0],["bif24.pl",0],["biftutech.com",0],["bigdata-social.com",0],["bimshares.com",0],["bishalghale.com.np",0],["bitcotasks.com",0],["bitlikutu.com",0],["bittukitech.in",0],["bitview.cloud",0],["bitzite.com",0],["blog.motionisland.com",0],["blog24.me",0],["blogk.com",0],["bloooog.it",0],["bloxyscripts.com",0],["bluebuddies.com",0],["bluecoreinside.com",0],["blurayufr.cam",0],["bogowieslowianscy.pl",0],["bookpraiser.com",0],["booksbybunny.com",0],["boredgiant.com",0],["botinnifit.com",0],["boundlessnecromancer.com",0],["boxaoffrir.com",0],["boxingvideo.org",0],["boxofficebusiness.in",0],["boystube.link",0],["braziliannr.com",0],["brevi.eu",0],["brian70.tw",0],["bright-b.com",0],["brightpets.org",0],["broadbottomvillage.co.uk",0],["brokensilenze.net",0],["brulosophy.com",0],["brushednickel.biz",0],["bshifast.live",0],["bsmaurya.com",0],["bugswave.com",0],["businesstrend.jp",0],["byswiizen.fr",0],["cafenau.com",0],["calculascendant.com",0],["calmarkcovers.com",0],["calvyn.com",0],["camcam.cc",0],["camnang24h.net",0],["canadanouvelles.com",0],["canaltdt.es",0],["captionpost.com",0],["carryflix.icu",0],["cashkar.in",0],["casperhd.com",0],["catatanonline.com",0],["cavalierstream.fr",0],["celebritablog.com",0],["celestialtributesonline.com",0],["cembarut.com.tr",0],["certificateland.com",0],["cg-method.com",0],["chachocool.com",0],["chakrirkhabar247.in",0],["championpeoples.com",0],["chanjaeblog.jp",0],["change-ta-vie-coaching.com",0],["charlottepilgrimagetour.com",0],["charpatra.com",0],["chart.services",0],["chatgbt.one",0],["chatgptfree.ai",0],["cheatermad.com",0],["check-imei.info",0],["cheese-cake.net",0],["chevalmag.com",0],["chieflyoffer.com",0],["chihouban.com",0],["chineseanime.org",0],["christiantrendy.com",0],["cienagamagdalena.com",0],["cimbusinessevents.com.au",0],["cinema-sketch.com",0],["cinepiroca.com",0],["cizzyscripts.com",0],["claimclicks.com",0],["claydscap.com",0],["clockskin.us",0],["cloud9obits.com",0],["cocorip.net",0],["code-source.net",0],["codeandkey.com",0],["codeastro.com",0],["codeitworld.com",0],["codewebit.top",0],["coin-profits.xyz",0],["coinadpro.club",0],["coinbaby8.com",0],["coingraph.us",0],["cola16.app",0],["coleccionmovie.com",0],["colliersnews.com",0],["comeletspray.com",0],["cometogliere.com",0],["comoinstalar.me",0],["compota-soft.work",0],["conoscereilrischioclinico.it",0],["consigliatodanoi.it",0],["constructionplacement.org",0],["cookni.net",0],["correction-livre-scolaire.fr",0],["coursesdaddy.com",0],["cpscan.xyz",0],["crackcodes.in",0],["crackthemes.com",0],["crackwatch.eu",0],["craigretailers.co.uk",0],["crazyashwin.com",0],["crazydeals.live",0],["creebhills.com",0],["creepyscans.com",0],["cricket12.com",0],["crn.pl",0],["cronachesalerno.it",0],["crunchytech.net",0],["cryptonor.xyz",0],["cryptonworld.space",0],["cryptowidgets.net",0],["crystalcomics.com",0],["cta-fansite.com",0],["culture-informatique.net",0],["cyprus.co.il",0],["daemon-hentai.com",0],["daij1n.info",0],["dailykpop.net",0],["dailytechupdates.in",0],["dailyweb.pl",0],["davidsonbuilders.com",0],["dabangbastar.com",0],["day4news.com",0],["daybuy.tw",0],["deathonnews.com",0],["dejongeturken.com",0],["delvein.tech",0],["demonictl.com",0],["demonyslowianskie.pl",0],["depressionhurts.us",0],["derusblog.com",0],["descargaranimes.com",0],["descargaseriestv.com",0],["design4months.com",0],["desirenovel.com",0],["desktopsolution.org",0],["destakenewsgospel.com",0],["destinationsjourney.com",0],["detikbangka.com",0],["dev-dark-blog.pantheonsite.io",0],["devopslanka.com",0],["dewfuneralhomenews.com",0],["dhankasamaj.com",0],["diamondfansub.com",0],["diencobacninh.com",0],["digitalseoninja.com",0],["dignityobituary.com",0],["diplomaexamcorner.com",0],["dipprofit.com",0],["dir-tech.com",0],["diskizone.com",0],["diversanews.com",0],["diyprojectslab.com",0],["djqunjab.in",0],["djsofchhattisgarh.in",0],["dma-upd.org",0],["dobletecno.com",0],["dominican-republic.co.il",0],["donghuaworld.com",0],["donlego.com",0],["doublemindtech.com",0],["doumura.com",0],["downloadbatch.me",0],["downloader.is",0],["downloads.sayrodigital.net",0],["downloads.wegomovies.com",0],["downloadtanku.org",0],["dpscomputing.com",0],["drake-scans.com",0],["drakecomic.com",0],["dramafren.com",0],["drzna.com",0],["dubaitime.net",0],["dumovies.com",0],["dvd-flix.com",0],["dvdgayonline.com",0],["e-food.jp",0],["e-kakoh.com",0],["earlymemorials.com",0],["earninginwork.com",0],["easyjapanesee.com",0],["easytodoit.com",0],["ecommercewebsite.store",0],["eczpastpapers.net",0],["editions-actu.org",0],["editorsadda.com",0],["edivaldobrito.com.br",0],["edjerba.com",0],["edukamer.info",0],["egram.com.ng",0],["einewelteinezukunft.de",0],["elcriticodelatele.com",0],["elcultura.pl",0],["elearning-cpge.com",0],["eleceedmanhwa.me",0],["embraceinnerchaos.com",0],["emperorscan.com",0],["empleo.com.uy",0],["encuentratutarea.com",0],["encurtareidog.top",0],["eng-news.com",0],["english-dubbed.com",0],["english-topics.com",0],["english101.co.za",0],["enryumanga.com",0],["ensenchat.com",0],["entenpost.com",0],["epsilonakdemy.com",0],["eramuslim.com",0],["erreguete.gal",0],["ervik.as",0],["esportsmonk.com",0],["esportsnext.com",0],["et-invest.de",0],["eternalhonoring.com",0],["ethiopia.co.il",0],["evdeingilizcem.com",0],["eventiavversinews.*",0],["everydayhomeandgarden.com",0],["evlenmekisteyenbayanlar.net",0],["ewybory.eu",0],["exam-results.in",0],["exeking.top",0],["expertskeys.com",0],["eymockup.com",0],["ezmanga.net",0],["faaduindia.com",0],["fapfapgames.com",0],["fapkingsxxx.com",0],["faqwiki.us",0],["farolilloteam.es",0],["fattelodasolo.it",0],["fchopin.net",0],["felicetommasino.com",0],["femisoku.net",0],["ferdroid.net",0],["fessesdenfer.com",0],["feyorra.top",0],["fhedits.in",0],["fhmemorial.com",0],["fibwatch.store",0],["filmypoints.in",0],["finalnews24.com",0],["financeandinsurance.xyz",0],["financeyogi.net",0],["financid.com",0],["finclub.in",0],["findheman.com",0],["findnewjobz.com",0],["fine-wings.com",0],["firescans.xyz",0],["fitnesshealtharticles.com",0],["fitnessscenz.com",0],["flashssh.net",0],["flexamens.com",0],["flixhub.*",0],["flowsnet.com",0],["folkmord.se",0],["foodgustoso.it",0],["foodiesjoy.com",0],["footyload.com",0],["footymercato.com",0],["forex-yours.com",0],["forexcracked.com",0],["former-railroad-worker.com",0],["foxaholic.com",0],["francaisfacile.net",0],["free.7hd.club",0],["freebiesmockup.com",0],["freecoursesonline.me",0],["freedom3d.art",0],["freefiremaxofficial.com",0],["freefireupdate.com",0],["freegetcoins.com",0],["freelancerartistry.com",0],["freemedicalbooks.org",0],["freemovies-download.com",0],["freeoseocheck.com",0],["freepasses.org",0],["freescorespiano.com",0],["freetarotonline.com",0],["freetubetv.net",0],["freevstplugins.*",0],["freewoodworking.ca",0],["fresherbaba.com",0],["freshersgold.com",0],["frpgods.com",0],["ftuapps.*",0],["fumettologica.it",0],["funeral-memorial.com",0],["funeralmemorialnews.com",0],["funeralobitsmemorial.com",0],["gabrielcoding.com",0],["gadgetspidy.com",0],["gadgetxplore.com",0],["gahag.net",0],["galaxytranslations10.com",0],["galaxytranslations97.com",0],["galinhasamurai.com",0],["gameblog.jp",0],["gamefi-mag.com",0],["gamenv.net",0],["gamers-haven.org",0],["gamerxyt.com",0],["games-manuals.com",0],["gamevcore.com",0],["gaminglariat.com",0],["gamingsearchjournal.com",0],["ganzoscan.com",0],["gatagata.net",0],["gazetazachodnia.eu",0],["gdrivemovies.xyz",0],["geekering.com",0],["gemiadamlari.org",0],["gentiluomodigitale.it",0],["gesund-vital.online",0],["getsuicidegirlsfree.com",0],["ghostsfreaks.com",0],["girlydrop.com",0],["gisvacancy.com",0],["giuseppegravante.com",0],["gkbooks.in",0],["gkgsca.com",0],["gksansar.com",0],["glo-n.online",0],["globelempire.com",0],["gnusocial.jp",0],["goegoe.net",0],["gogetadoslinks.*",0],["gogetapast.com.br",0],["gogifox.com",0],["gogueducation.com",0],["gokerja.net",0],["gokushiteki.com",0],["golf.rapidmice.com",0],["gomov.bio",0],["goodriviu.com",0],["googlearth.selva.name",0],["gorating.in",0],["gotocam.net",0],["grafikos.cz",0],["grasta.net",0],["grazymag.com",0],["greasygaming.com",0],["greattopten.com",0],["grootnovels.com",0],["groovyfreestuff.com",0],["gsdn.live",0],["gsmfreezone.com",0],["gsmmessages.com",0],["gtavi.pl",0],["gvnvh.net",0],["gwiazdatalkie.com",0],["habuteru.com",0],["hackingwala.com",0],["hackmodsapk.com",0],["hadakanonude.com",0],["hairjob.wpx.jp",0],["happy-otalife.com",0],["haqem.com",0],["harbigol.com",0],["harley.top",0],["haryanaalert.*",0],["haveyaseenjapan.com",0],["haxnode.net",0],["hdhub4one.pics",0],["healthbeautybee.com",0],["healthfatal.com",0],["heartofvicksburg.com",0],["heartrainbowblog.com",0],["hechos.net",0],["hellenism.net",0],["heutewelt.com",0],["hhesse.de",0],["highdefdiscnews.com",0],["hilaw.vn",0],["hindi.trade",0],["hindimatrashabd.com",0],["hindishri.com",0],["hiphopa.net",0],["hipsteralcolico.altervista.org",0],["historichorizons.com",0],["hivetoon.com",0],["hobbykafe.com",0],["hockeyfantasytools.com",0],["hojii.net",0],["hoofoot.net",0],["hookupnovel.com",0],["hopsion-consulting.com",0],["hostingreviews24.com",0],["hotspringsofbc.ca",0],["howtoblogformoney.net",0],["hub2tv.com",0],["hungarianhardstyle.hu",0],["hyderone.com",0],["hyogo.ie-t.net",0],["hypelifemagazine.com",0],["hypesol.com",0],["ideatechy.com",0],["idesign.wiki",0],["idevfast.com",0],["idevice.me",0],["idpvn.com",0],["iggtech.com",0],["ignoustudhelp.in",0],["ikarianews.gr",0],["ilbassoadige.it",0],["ilbolerodiravel.org",0],["imperiofilmes.co",0],["indiasmagazine.com",0],["individualogist.com",0],["inertz.org",0],["infamous-scans.com",0],["infocycles.com",0],["infodani.net",0],["infojabarloker.com",0],["infrafandub.com",0],["infulo.com",0],["inlovingmemoriesnews.com",0],["inprogrammer.com",0],["inra.bg",0],["insideeducation.co.za",0],["insidememorial.com",0],["insider-gaming.com",0],["insurancepost.xyz",0],["intelligence-console.com",0],["interculturalita.it",0],["inventionsdaily.com",0],["iptvxtreamcodes.com",0],["isabihowto.com.ng",0],["italiadascoprire.net",0],["itdmusic.*",0],["itmaniatv.com",0],["itopmusic.com",0],["itopmusics.com",0],["itopmusicx.com",0],["itz-fast.com",0],["iumkit.net",0],["iwb.jp",0],["jackofalltradesmasterofsome.com",0],["jaktsidan.se",0],["japannihon.com",0],["javboys.*",0],["javcock.com",0],["jcutrer.com",0],["jk-market.com",0],["jobsbd.xyz",0],["jobsibe.com",0],["jobslampung.net",0],["josemo.com",0],["jra.jpn.org",0],["jrlinks.in",0],["jungyun.net",0],["juninhoscripts.com.br",0],["juventusfc.hu",0],["kacikcelebrytow.com",0],["kagohara.net",0],["kakashiyt.com",0],["kakiagune.com",0],["kali.wiki",0],["kana-mari-shokudo.com",0],["kanaeblog.net",0],["kandisvarlden.com",0],["karaoke4download.com",0],["kawaguchimaeda.com",0],["kaystls.site",0],["kenkou-maintenance.com",0],["kenta2222.com",0],["keroseed.*",0],["kgs-invest.com",0],["kh-pokemon-mc.com",0],["khabarbyte.com",0],["khabardinbhar.net",0],["khohieu.com",0],["kickcharm.com",0],["kinisuru.com",0],["kits4beats.com",0],["kllproject.lv",0],["know-how-tree.com",0],["knowstuff.in",0],["kobitacocktail.com",0],["kodaika.com",0],["kodewebsite.com",0],["kodibeginner.com",0],["kokosovoulje.com",0],["kolcars.shop",0],["kompiko.pl",0],["koreanbeauty.club",0],["korogashi-san.org",0],["korsrt.eu.org",0],["kotanopan.com",0],["koume-in-huistenbosch.net",0],["krx18.com",0],["kukni.to",0],["kupiiline.com",0],["kurosuen.live",0],["labstory.in",0],["ladkibahin.com",0],["ladypopularblog.com",0],["lamorgues.com",0],["lampungkerja.com",0],["lapaginadealberto.com",0],["lascelebrite.com",0],["latinlucha.es",0],["law101.org.za",0],["lawweekcolorado.com",0],["learnedclub.com",0],["learnmany.in",0],["learnchannel-tv.com",0],["learnodo-newtonic.com",0],["learnospot.com",0],["lebois-racing.com",0],["lectormh.com",0],["leechyscripts.net",0],["leeapk.com",0],["legendaryrttextures.com",0],["lendrive.web.id",0],["letrasgratis.com.ar",0],["levismodding.co.uk",0],["lgcnews.com",0],["lglbmm.com",0],["lheritierblog.com",0],["ligaset.com",0],["limontorrent.com",0],["limontorrents.com",0],["linkskibe.com",0],["linkvoom.com",0],["linkz.*",0],["linux-talks.com",0],["linuxexplain.com",0],["lionsfan.net",0],["literarysomnia.com",0],["littlepandatranslations.com",0],["livefootballempire.com",0],["lk21org.com",0],["lmtos.com",0],["loanpapa.in",0],["locurainformaticadigital.com",0],["logofootball.net",0],["lookism.me",0],["lotus-tours.com.hk",0],["lovingsiren.com",0],["ltpcalculator.in",0],["luchaonline.com",0],["luciferdonghua.in",0],["luckymood777.com",0],["lucrebem.com.br",0],["lustesthd.cloud",0],["lustesthd.lat",0],["lycee-maroc.com",0],["m4u.*",0],["macrocreator.com",0],["madevarquitectos.com",0],["magesypro.*",0],["maisondeas.com",0],["maketoss.com",0],["makeupguide.net",0],["makotoichikawa.net",0],["malluporno.com",0],["mamtamusic.in",0],["mangcapquangvnpt.com",0],["manhastro.com",0],["mantrazscan.com",0],["maps4study.com.br",0],["marimo-info.net",0],["marketedgeofficial.com",0],["marketing-business-revenus-internet.fr",0],["marketrevolution.eu",0],["masashi-blog418.com",0],["mastakongo.info",0],["masterpctutoriales.com",0],["maths101.co.za",0],["matomeiru.com",0],["matshortener.xyz",0],["mcrypto.*",0],["mdn.lol",0],["medeberiya1.com",0],["mediascelebres.com",0],["medytour.com",0],["meilblog.com",0],["memorialnotice.com",0],["mentalhealthcoaching.org",0],["meteoregioneabruzzo.it",0],["mhscans.com",0],["michiganrugcleaning.cleaning",0],["midis.com.ar",0],["minddesignclub.org",0],["minecraftwild.com",0],["minhasdelicias.com",0],["mitaku.net",0],["mitsmits.com",0],["mixmods.com.br",0],["mm-scans.org",0],["mmfenix.com",0],["mmorpgplay.com.br",0],["mmoovvfr.cloudfree.jp",0],["mockupcity.com",0],["mockupgratis.com",0],["modele-facture.com",0],["modyster.com",0],["monaco.co.il",0],["morinaga-office.net",0],["mosttechs.com",0],["moto-station.com",0],["motofan-r.com",0],["movieping.com",0],["movies4u.*",0],["moviesnipipay.me",0],["mrfreemium.blogspot.com",0],["mscdroidlabs.es",0],["msonglyrics.com",0],["mtech4you.com",0],["multimovies.tech",0],["mundovideoshd.com",0],["murtonroofing.com",0],["musicforchoir.com",0],["musictip.net",0],["mxcity.mx",0],["mxpacgroup.com",0],["my-ford-focus.de",0],["myglamwish.com",0],["myicloud.info",0],["mylinkat.com",0],["mylivewallpapers.com",0],["mypace.sasapurin.com",0],["myqqjd.com",0],["mytectutor.com",0],["myunity.dev",0],["myviptuto.com",0],["nagpurupdates.com",0],["naijagists.com",0],["naijdate.com",0],["najboljicajevi.com",0],["nakiny.com",0],["nameart.in",0],["nartag.com",0],["naturalmentesalute.org",0],["naturomicsworld.com",0],["naveedplace.com",0],["navinsamachar.com",0],["neet.wasa6.com",0],["neifredomar.com",0],["nekoscans.com",0],["nemumemo.com",0],["nepaljobvacancy.com",0],["neservicee.com",0],["netsentertainment.net",0],["neuna.net",0],["newbookmarkingsite.com",0],["newfreelancespot.com",0],["newlifefuneralhomes.com",0],["news-geinou100.com",0],["newscard24.com",0],["newstechone.com",0],["nghetruyenma.net",0],["nhvnovels.com",0],["nichetechy.com",0],["nin10news.com",0],["nicetube.one",0],["ninjanovel.com",0],["nishankhatri.*",0],["niteshyadav.in",0],["nknews.jp",0],["nkreport.jp",0],["noanyi.com",0],["nobodycancool.com",0],["noblessetranslations.com",0],["nocfsb.com",0],["nocsummer.com.br",0],["nodenspace.com",0],["noikiiki.info",0],["notandor.cn",0],["note1s.com",0],["notesformsc.org",0],["noteshacker.com",0],["novel-gate.com",0],["novelbob.com",0],["novelread.co",0],["nsfwr34.com",0],["nswdownload.com",0],["nswrom.com",0],["ntucgm.com",0],["nudeslegion.com",0],["nukedfans.com",0],["nukedpacks.site",0],["nulledmug.com",0],["nvimfreak.com",0],["nyangames.altervista.org",0],["nylonstockingsex.net",0],["oatuu.org",0],["oberschwaben-tipps.de",0],["obituary-deathnews.com",0],["obituaryupdates.com",0],["odekake-spots.com",0],["officialpanda.com",0],["ofppt.net",0],["ofwork.net",0],["okblaz.me",0],["olamovies.store",0],["onehack.us",0],["onestringlab.com",0],["onlinetechsamadhan.com",0],["onlinetntextbooks.com",0],["onneddy.com",0],["onyxfeed.com",0],["openstartup.tm",0],["opiniones-empresas.com",0],["oracleerpappsguide.com",0],["orenoraresne.com",0],["oromedicine.com",0],["orunk.com",0],["osteusfilmestuga.online",0],["otakuliah.com",0],["oteknologi.com",0],["otokukensaku.jp",0],["ottrelease247.com",0],["ovnihoje.com",0],["pabryyt.one",0],["palofw-lab.com",0],["paminy.com",0],["pandaatlanta.com",0],["pantube.top",0],["paolo9785.com",0],["papafoot.click",0],["papahd.club",0],["paris-tabi.com",0],["parisporn.org",0],["parking-map.info",0],["pasokau.com",0],["passionatecarbloggers.com",0],["passportaction.com",0],["pc-guru.it",0],["pc-hobby.com",0],["pc-spiele-wiese.de",0],["pcgamedownload.net",0],["pcgameszone.com",0],["pdfstandards.net",0],["pepar.net",0],["personefamose.it",0],["petitestef.com",0],["pflege-info.net",0],["phoenix-manga.com",0],["phonefirmware.com",0],["physics101.co.za",0],["picgiraffe.com",0],["pilsner.nu",0],["piratemods.com",0],["piximfix.com",0],["plantatreenow.com",0],["plc4free.com",0],["pliroforiki-edu.gr",0],["poapan.xyz",0],["pogga.org",0],["pondit.xyz",0],["ponsel4g.com",0],["poplinks.*",0],["porlalibreportal.com",0],["pornfeel.com",0],["porninblack.com",0],["portaldoaz.org",0],["portaldosreceptores.org",0],["postazap.com",0],["posturecorrectorshop-online.com",0],["practicalkida.com",0],["prague-blog.co.il",0],["praveeneditz.com",0],["premierftp.com",0],["prensa.click",0],["pressemedie.dk",0],["pressurewasherpumpdiagram.com",0],["pricemint.in",0],["primemovies.pl",0],["prismmarketingco.com",0],["proapkdown.com",0],["projuktirkotha.com",0],["promiblogs.de",0],["promimedien.com",0],["promisingapps.com",0],["protestia.com",0],["psicotestuned.info",0],["psychology-spot.com",0],["publicdomainq.net",0],["publicdomainr.net",0],["publicidadtulua.com",0],["pupuweb.com",0],["putlog.net",0],["pynck.com",0],["quatvn.club",0],["questionprimordiale.fr",0],["quicktelecast.com",0],["radiantsong.com",0],["rabo.no",0],["ragnarokscanlation.*",0],["rahim-soft.com",0],["rail-log.net",0],["raishin.xyz",0],["ralli.ee",0],["ranjeet.best",0],["ranourano.xyz",0],["raulmalea.ro",0],["rbs.ta36.com",0],["rbscripts.net",0],["rctechsworld.in",0],["readfast.in",0],["realfreelancer.com",0],["receptyonline.cz",0],["recipenp.com",0],["redbubbletools.com",0],["redfaucet.site",0],["reeell.com",0],["renierassociatigroup.com",0],["reportbangla.com",0],["reprezentacija.rs",0],["retire49.com",0],["retrotv.org",0],["revistaapolice.com.br",0],["rgmovies.*",0],["ribbelmonster.de",0],["rightdark-scan.com",0],["rinconpsicologia.com",0],["ritacandida.com",0],["rlshort.com",0],["rocdacier.com",0],["romaierioggi.it",0],["romaniasoft.ro",0],["roms4ever.com",0],["romviet.com",[0,2]],["roshy.tv",0],["roznamasiasat.com",0],["rubyskitchenrecipes.uk",0],["ruyamanga.com",0],["rv-ecommerce.com",0],["ryanmoore.marketing",0],["ryansharich.com",0],["s1os.icu",0],["s4msecurity.com",0],["s920221683.online.de",0],["sabishiidesu.com",0],["saekita.com",0],["samanarthishabd.in",0],["samovies.net",0],["samrudhiglobal.com",0],["samurai.wordoco.com",0],["sanmiguellive.com",0],["sararun.net",0],["sarkariresult.social",0],["satcesc.com",0],["savegame.pro",0],["sawwiz.com",0],["scansatlanticos.com",0],["schadeck.eu",0],["sezia.com",0],["schildempire.com",0],["scholarshiplist.org",0],["sciencebe21.in",0],["scontianastro.com",0],["scrap-blog.com",0],["scripcheck.great-site.net",0],["scriptsomg.com",0],["searchmovie.wp.xdomain.jp",0],["seasons-dlove.net",0],["seirsanduk.com",0],["seogroup.bookmarking.info",0],["seoworld.in",0],["seriu.jp",0],["setsuyakutoushi.com",0],["serieshdpormega.com",0],["server-tutorials.net",0],["serverbd247.com",0],["serverxfans.com",0],["shadagetech.com",0],["shanurdu.com",0],["sheikhmovies.*",0],["shimauma-log.com",0],["shittokuadult.net",0],["shlly.com",0],["shogaisha-shuro.com",0],["shogaisha-techo.com",0],["shopkensaku.com",0],["shorttrick.in",0],["showflix.*",0],["showrovblog.com",0],["shrinklinker.com",0],["shrinkus.tk",0],["shrivardhantech.in",0],["sieradmu.com",0],["siimanga.cyou",0],["siirtolayhaber.com",0],["sim-kichi.monster",0],["sivackidrum.net",0],["sk8therapy.fr",0],["skardu.pk",0],["skidrowreloaded.com",0],["slawoslaw.pl",0],["slowianietworza.pl",0],["smallseotools.ai",0],["smartinhome.pl",0],["snowman-information.com",0],["socebd.com",0],["sociallyindian.com",0],["softcobra.com",0],["softrop.com",0],["sohohindi.com",0],["sosuroda.pl",0],["south-park-tv.biz",0],["soziologie-politik.de",0],["sp500-up.com",0],["space-faucet.com",0],["spacestation-online.com",0],["spardhanews.com",0],["speak-english.net",0],["speculationis.com",0],["spinoff.link",0],["spiritparting.com",0],["sport-97.com",0],["sportsblend.net",0],["stablediffusionxl.com",0],["stadelahly.net",0],["stahnivideo.cz",0],["starsgtech.in",0],["startupjobsportal.com",0],["ster-blog.xyz",0],["stireazilei.eu",0],["stock-rom.com",0],["streamseeds24.com",0],["strefa.biz",0],["studybullet.com",0],["sufanblog.com",0],["sukuyou.com",0],["sumirekeiba.com",0],["sundberg.ws",0],["suneelkevat.com",0],["super-ethanol.com",0],["superpackpormega.com",0],["surfsees.com",0],["surgicaltechie.com",0],["swietaslowianskie.pl",0],["sysguides.com",0],["swordalada.org",0],["system32.ink",0],["ta3arof.net",0],["taariikh.net",0],["tabonitobrasil.tv",0],["taisha-diet.com",0],["talentstareducation.com",0],["tamilanzone.com",0],["tamilhit.tech",0],["tamilnaadi.com",0],["tamilultra.team",0],["tamilultratv.co.in",0],["tatsublog.com",0],["tbazzar.com",0],["teachersupdates.net",0],["team-octavi.com",0],["team-rcv.xyz",0],["teamkong.tk",0],["teamupinternational.com",0],["techacrobat.com",0],["techastuces.com",0],["techbytesblog.com",0],["techdriod.com",0],["techedubyte.com",0],["techforu.in",0],["techiepirates.com",0],["techiestalk.in",0],["techkeshri.com",0],["techlog.ta-yan.ai",0],["technewslive.org",0],["technewsrooms.com",0],["technicalviral.com",0],["technorj.com",0],["technorozen.com",0],["techoreview.com",0],["techprakash.com",0],["techsbucket.com",0],["techstwo.com",0],["techyhigher.com",0],["techyrick.com",0],["tecnomd.com",0],["tecnoscann.com",0],["tedenglish.site",0],["tehnotone.com",0],["telephone-soudan.com",0],["teluguhitsandflops.com",0],["temporeale.info",0],["tenbaiquest.com",0],["tespedia.com",0],["testious.com",0],["thangdangblog.com",0],["thaript.com",0],["thebigblogs.com",0],["thedilyblog.com",0],["thermoprzepisy.pl",0],["theworldobits.com",0],["theconomy.me",0],["thegamearcade.com",0],["theinternettaughtme.com",0],["thejoblives.com",0],["thelastgamestandingexp.com",0],["theliveupdate.com",0],["thenewsglobe.net",0],["theprofoundreport.com",0],["thesextube.net",0],["thesleak.com",0],["thesportsupa.com",0],["thewambugu.com",0],["thiagorossi.com.br",0],["throwsmallstone.com",0],["tiny-sparklies.com",0],["titfuckvideos.com",0],["tirumalatirupatiyatra.in",0],["tnewsnetwork.com",0],["today-obits.com",0],["todays-obits.com",0],["toeflgratis.com",0],["tokoasrimotedanpayet.my.id",0],["toorco.com",0],["top10trends.net",0],["topbiography.co.in",0],["topfaucet.us",0],["topsworldnews.com",0],["toptenknowledge.com",0],["torrentdofilmeshd.net",0],["torrentgame.org",0],["totally.top",0],["towerofgod.top",0],["tr3fit.xyz",0],["trendflatt.com",0],["trendohunts.com",0],["trgtkls.org",0],["trilog3.net",0],["tukangsapu.net",0],["tuktukcinma.com",0],["tunabagel.net",0],["turkeymenus.com",0],["turkishseriestv.net",0],["tutorialesdecalidad.com",0],["tutorialsduniya.com",0],["twobluescans.com",0],["twodots.com.br",0],["tw.xn--h9jepie9n6a5394exeq51z.com",0],["u-idol.com",0],["uciteljica.net",0],["udemyking.com",0],["uiuxsource.com",0],["ukigmoch.com",0],["umabomber.com",0],["unityassets4free.com",0],["uozzart.com",0],["uploadbank.com",0],["uprwssp.org",0],["uqozy.com",0],["usahealthandlifestyle.com",0],["userupload.*",0],["ustimz.com",0],["ustvgo.live",0],["utaitebu.com",0],["uur-tech.net",0],["vamsivfx.com",0],["varnascan.com",0],["vedetta.org",0],["veganab.co",0],["vegas411.com",0],["venus-and-mars.com",0],["veryfuntime.com",0],["vibezhub.com.ng",0],["viciante.com.br",0],["villettt.kitchen",0],["violablu.net",0],["virabux.com",0],["virtual-youtuber.jp",0],["visorsmr.com",0],["visortecno.com",0],["vitadacelebrita.com",0],["vivrebordeaux.fr",0],["vmorecloud.com",0],["vnuki.net",0],["voiceloves.com",0],["voidtruth.com",0],["voiranime1.fr",0],["vstplugin.net",0],["warungkomik.com",0],["webacademix.com",0],["webcamfuengirola.com",0],["webcras.com",0],["webhostingoffer.org",0],["websiteglowgh.com",0],["welcometojapan.jp",0],["whats-new.cyou",0],["wheelofgold.com",0],["wholenotism.com",0],["wikijankari.com",0],["windbreaker.me",0],["windowsaplicaciones.com",0],["wirtualnelegionowo.pl",0],["wirtualnynowydwor.pl",0],["workxvacation.jp",0],["worldgyan18.com",0],["worldtop2.com",0],["worldwidestandard.net",0],["worthitorwoke.com",0],["wp.solar",0],["wpteq.org",0],["writeprofit.org",0],["wvt24.top",0],["xiaomitools.com",0],["xn--algododoce-j5a.com",0],["xn--kckzb2722b.com",0],["xn--n8jwbyc5ezgnfpeyd3i0a3ow693bw65a.com",0],["xn--nbkw38mlu2a.com",0],["xprime4u.*",0],["yakisurume.com",0],["yakyufan-asobiba.com",0],["yaspage.com",0],["yawm.online",0],["yazilidayim.net",0],["ycongnghe.com",0],["yestech.xyz",0],["ynk-blog.com",0],["youlife24.com",0],["youpit.xyz",0],["your-local-pest-control.com",0],["yourdesignmagazine.com",0],["yuatools.com",0],["yuki0918kw.com",0],["yumekomik.com",0],["yuramanga.my.id",0],["yurudori.com",0],["zerogptai.org",0],["zien.pl",0],["ziminvestors.com",0],["zippyshare.cloud",0],["zippysharecue.com",0],["znanemediablog.com",0],["mathcrave.com",0],["intro-hd.net",0],["richtoscan.com",0],["tainguyenmienphi.com",0],["questloops.com",0],["wvt.free.nf",0],["appnee.com",0],["cinema.com.my",1],["crosswordsolver.com",1],["allcelebspics.com",2],["alttyab.net",2],["an1me.*",2],["androjungle.com",2],["arkadmin.fr",2],["azoranov.com",2],["barranquillaestereo.com",2],["brasilsimulatormods.com",2],["cambrevenements.com",2],["cartoonstvonline.com",2],["comparili.net",2],["diaobe.net",2],["filegajah.com",2],["filmestorrent.tv",2],["franceprefecture.fr",2],["freecricket.net",2],["gcpainters.com",2],["germanvibes.org",2],["getmaths.co.uk",2],["gewinnspiele-markt.com",2],["hamzag.com",2],["hannibalfm.net",2],["hornyconfessions.com",2],["ilcamminodiluce.it",2],["joguinhosgratis.com",2],["joziporn.com",2],["justpaste.top",2],["mctechsolutions.in",2],["medibok.se",2],["megafire.net",2],["mirrorpoi.my.id",2],["mockuphunts.com",2],["mortaltech.com",2],["multivideodownloader.com",2],["nauci-engleski.com",2],["nauci-njemacki.com",2],["nekopoi.my.id",2],["nuketree.com",2],["pa1n.xyz",2],["papafoot.*",2],["playertv.net",2],["programsolve.com",2],["radio-deejay.com",2],["ranaaclanhungary.com",2],["rasoi.me",2],["riprendiamocicatania.com",2],["rsrlink.in",2],["seriesperu.com",2],["shmapp.ca",2],["sub2unlocker.com",2],["skillmineopportunities.com",2],["teczpert.com",2],["totalsportek.app",2],["tromcap.com",2],["tv0800.com",2],["tv3monde.com",2],["ustrendynews.com",2],["watchnow.fun",2],["weashare.com",2],["yelitzonpc.com",2],["ymknow.xyz",2],["nxbrew.net",3],["tresdaos.com",3],["shomareh-yab.ir",4],["sportshub.to",5],["sportnews.to",5],["bebasbokep.online",6],["pvpoke-re.com",7]]);
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
