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
const argsList = [["Document.prototype.querySelectorAll","\"/^#/\"","prevent","/stackDepth:4.+nawNA/"],["Document.prototype.querySelector","\"/^#/\"","prevent","/stackDepth:4.+ inlineScript:2/"],["Element.prototype.insertAdjacentHTML","\"afterbegin\"","prevent","/\\/[A-Za-z]+\\.min\\.js\\?/"],["eval","\"/chp_?ad/\""],["eval","\"/chp_?ad/\"","prevent"],["HTMLScriptElement.prototype.setAttribute","\"data-sdk\"","abort"],["eval","\"adsBlocked\""],["Storage.prototype.setItem","searchCount"],["fetch","\"flashtalking\""],["DOMTokenList.prototype.add","\"-\""],["HTMLScriptElement.prototype.setAttribute","\"data-cfasync\"","abort"],["DOMTokenList.prototype.add","\"-\"","prevent","stack","/wp-content\\/uploads\\/[a-z]+\\/[a-z]+\\.js/"],["navigator.sendBeacon","\"data.bilibili.com/log/\"","prevent"]];
const hostnamesMap = new Map([["japscan.lol",[0,1]],["pvpoke-re.com",2],["zegtrends.com",3],["tea-coffee.net",3],["spatsify.com",3],["newedutopics.com",3],["getviralreach.in",3],["edukaroo.com",3],["funkeypagali.com",3],["careersides.com",3],["nayisahara.com",3],["wikifilmia.com",3],["infinityskull.com",3],["viewmyknowledge.com",3],["iisfvirtual.in",3],["starxinvestor.com",3],["jkssbalerts.com",3],["blog.carstopia.net",3],["blog.carsmania.net",3],["redfea.com",3],["pranarevitalize.com",3],["techyinfo.in",3],["fitnessholic.net",3],["moderngyan.com",3],["sattakingcharts.in",3],["freshbhojpuri.com",3],["bgmi32bitapk.in",3],["bankshiksha.in",3],["earn.mpscstudyhub.com",3],["earn.quotesopia.com",3],["money.quotesopia.com",3],["best-mobilegames.com",3],["learn.moderngyan.com",3],["bharatsarkarijobalert.com",3],["quotesopia.com",3],["creditsgoal.com",3],["ikramlar.online",3],["headlinerpost.com",3],["posterify.net",3],["whatgame.xyz",3],["mooonten.com",3],["msic.site",3],["fx-22.com",3],["gold-24.net",3],["forexrw7.com",3],["mtcremix.com",3],["advicefunda.com",3],["bestloanoffer.net",3],["computerpedia.in",3],["techconnection.in",3],["bollywoodchamp.in",3],["texw.online",3],["m4u.*",3],["macrocreator.com",3],["madevarquitectos.com",3],["magesypro.*",3],["maisondeas.com",3],["maketoss.com",3],["makeupguide.net",3],["makotoichikawa.net",3],["malluporno.com",3],["mamtamusic.in",3],["mangcapquangvnpt.com",3],["manhastro.com",3],["mantrazscan.com",3],["maps4study.com.br",3],["marimo-info.net",3],["marketedgeofficial.com",3],["marketing-business-revenus-internet.fr",3],["marketrevolution.eu",3],["masashi-blog418.com",3],["mastakongo.info",3],["masterpctutoriales.com",3],["maths101.co.za",3],["matomeiru.com",3],["matshortener.xyz",3],["mcrypto.*",3],["mdn.lol",3],["medeberiya1.com",3],["mediascelebres.com",3],["medytour.com",3],["meilblog.com",3],["memorialnotice.com",3],["mentalhealthcoaching.org",3],["meteoregioneabruzzo.it",3],["mewingzone.com",3],["mhscans.com",3],["michiganrugcleaning.cleaning",3],["midis.com.ar",3],["midlandstraveller.com",3],["minddesignclub.org",3],["minecraftwild.com",3],["minhasdelicias.com",3],["mitaku.net",3],["mitsmits.com",3],["mixmods.com.br",3],["mm-scans.org",3],["mmfenix.com",3],["mmoovvfr.cloudfree.jp",3],["mmorpgplay.com.br",3],["mockupcity.com",3],["mockupgratis.com",3],["modele-facture.com",3],["modyster.com",3],["monaco.co.il",3],["morinaga-office.net",3],["mosttechs.com",3],["moto-station.com",3],["motofan-r.com",3],["movieping.com",3],["movies4u.*",3],["moviesnipipay.me",3],["mrfreemium.blogspot.com",3],["mscdroidlabs.es",3],["msonglyrics.com",3],["mtech4you.com",3],["multimovies.tech",3],["mummumtime.com",3],["mundovideoshd.com",3],["murtonroofing.com",3],["musicforchoir.com",3],["musictip.net",3],["mxcity.mx",3],["mxpacgroup.com",3],["my-ford-focus.de",3],["myglamwish.com",3],["myicloud.info",3],["mylinkat.com",3],["mylivewallpapers.com",3],["mypace.sasapurin.com",3],["myqqjd.com",3],["mytectutor.com",3],["myunity.dev",3],["myviptuto.com",3],["nagpurupdates.com",3],["naijagists.com",3],["naijdate.com",3],["najboljicajevi.com",3],["nakiny.com",3],["nameart.in",3],["nartag.com",3],["naturalmentesalute.org",3],["naturomicsworld.com",3],["naveedplace.com",3],["navinsamachar.com",3],["neet.wasa6.com",3],["negative.tboys.ro",3],["neifredomar.com",3],["nekoscans.com",3],["nemumemo.com",3],["nepaljobvacancy.com",3],["neservicee.com",3],["netsentertainment.net",3],["neuna.net",3],["newbookmarkingsite.com",3],["newfreelancespot.com",3],["newlifefuneralhomes.com",3],["news-geinou100.com",3],["newscard24.com",3],["newstechone.com",3],["nghetruyenma.net",3],["nhvnovels.com",3],["nichetechy.com",3],["nin10news.com",3],["nicetube.one",3],["ninjanovel.com",3],["nishankhatri.*",3],["niteshyadav.in",3],["nknews.jp",3],["nkreport.jp",3],["noanyi.com",3],["nobodycancool.com",3],["noblessetranslations.com",3],["nocfsb.com",3],["nocsummer.com.br",3],["nodenspace.com",3],["noikiiki.info",3],["notandor.cn",3],["note1s.com",3],["notesformsc.org",3],["noteshacker.com",3],["novel-gate.com",3],["novelbob.com",3],["novelread.co",3],["nsfwr34.com",3],["nswdownload.com",3],["nswrom.com",3],["ntucgm.com",3],["nudeslegion.com",3],["nukedfans.com",3],["nukedpacks.site",3],["nulledmug.com",3],["nvimfreak.com",3],["nyangames.altervista.org",3],["nylonstockingsex.net",3],["oatuu.org",3],["oberschwaben-tipps.de",3],["obituary-deathnews.com",3],["obituaryupdates.com",3],["odekake-spots.com",3],["officialpanda.com",3],["ofppt.net",3],["ofwork.net",3],["okblaz.me",3],["olamovies.store",3],["onehack.us",3],["onestringlab.com",3],["onlinetechsamadhan.com",3],["onlinetntextbooks.com",3],["onneddy.com",3],["onyxfeed.com",3],["openstartup.tm",3],["opiniones-empresas.com",3],["oracleerpappsguide.com",3],["orenoraresne.com",3],["oromedicine.com",3],["orunk.com",3],["osteusfilmestuga.online",3],["otakuliah.com",3],["oteknologi.com",3],["otokukensaku.jp",3],["ottrelease247.com",3],["ovnihoje.com",3],["pabryyt.one",3],["palofw-lab.com",3],["paminy.com",3],["pandaatlanta.com",3],["pandanote.info",3],["pantube.top",3],["paolo9785.com",3],["papafoot.click",3],["papahd.club",3],["paris-tabi.com",3],["parisporn.org",3],["parking-map.info",3],["pasatiemposparaimprimir.com",3],["pasokau.com",3],["passionatecarbloggers.com",3],["passportaction.com",3],["pc-guru.it",3],["pc-hobby.com",3],["pc-spiele-wiese.de",3],["pcgamedownload.net",3],["pcgameszone.com",3],["pdfstandards.net",3],["pepar.net",3],["personefamose.it",3],["petitestef.com",3],["pflege-info.net",3],["phoenix-manga.com",3],["phonefirmware.com",3],["physics101.co.za",3],["picgiraffe.com",3],["pilsner.nu",3],["piratemods.com",3],["pitiurl.com",3],["piximfix.com",3],["plantatreenow.com",3],["plc4free.com",3],["pliroforiki-edu.gr",3],["poapan.xyz",3],["poco.rcccn.in",3],["pogga.org",3],["pokeca-chart.com",3],["pondit.xyz",3],["ponsel4g.com",3],["poplinks.*",3],["porlalibreportal.com",3],["pornfeel.com",3],["porninblack.com",3],["portaldoaz.org",3],["portaldosreceptores.org",3],["portalyaoi.com",3],["postazap.com",3],["posturecorrectorshop-online.com",3],["practicalkida.com",3],["prague-blog.co.il",3],["praveeneditz.com",3],["premierftp.com",3],["prensa.click",3],["prensaesports.com",3],["pressemedie.dk",3],["pressurewasherpumpdiagram.com",3],["pricemint.in",3],["primemovies.pl",3],["prismmarketingco.com",3],["proapkdown.com",3],["projuktirkotha.com",3],["promiblogs.de",3],["promimedien.com",3],["promisingapps.com",3],["protestia.com",3],["psicotestuned.info",3],["psychology-spot.com",3],["publicdomainq.net",3],["publicdomainr.net",3],["publicidadtulua.com",3],["pupuweb.com",3],["putlog.net",3],["pynck.com",3],["quatvn.club",3],["questionprimordiale.fr",3],["quicktelecast.com",3],["radiantsong.com",3],["rabo.no",3],["ragnarokscanlation.*",3],["rahim-soft.com",3],["rail-log.net",3],["railwebcams.net",3],["raishin.xyz",3],["ralli.ee",3],["ranjeet.best",3],["ranourano.xyz",3],["raulmalea.ro",3],["rbs.ta36.com",3],["rbscripts.net",3],["rctechsworld.in",3],["readfast.in",3],["readhunters.xyz",3],["realfreelancer.com",3],["realtormontreal.ca",3],["receptyonline.cz",3],["recipenp.com",3],["redbubbletools.com",3],["redfaucet.site",3],["reeell.com",3],["renierassociatigroup.com",3],["reportbangla.com",3],["reprezentacija.rs",3],["retire49.com",3],["retrotv.org",3],["reviewmedium.com",3],["revistaapolice.com.br",3],["rgmovies.*",3],["ribbelmonster.de",3],["rightdark-scan.com",3],["rinconpsicologia.com",3],["ritacandida.com",3],["riwayat-word.com",3],["rlshort.com",3],["rocdacier.com",3],["rollingglobe.online",3],["romaierioggi.it",3],["romaniasoft.ro",3],["roms4ever.com",3],["romviet.com",[3,6]],["roshy.tv",3],["roznamasiasat.com",3],["rubyskitchenrecipes.uk",3],["ruyamanga.com",3],["rv-ecommerce.com",3],["ryanmoore.marketing",3],["ryansharich.com",3],["s1os.icu",3],["s4msecurity.com",3],["s920221683.online.de",3],["sabishiidesu.com",3],["saekita.com",3],["samanarthishabd.in",3],["samovies.net",3],["samrudhiglobal.com",3],["samurai.wordoco.com",3],["sanmiguellive.com",3],["santhoshrcf.com",3],["sararun.net",3],["sarkariresult.social",3],["satcesc.com",3],["savegame.pro",3],["sawwiz.com",3],["scansatlanticos.com",3],["schadeck.eu",3],["sezia.com",3],["schildempire.com",3],["scholarshiplist.org",3],["sciencebe21.in",3],["scontianastro.com",3],["scrap-blog.com",3],["scripcheck.great-site.net",3],["scriptsomg.com",3],["searchmovie.wp.xdomain.jp",3],["searchnsucceed.in",3],["seasons-dlove.net",3],["seirsanduk.com",3],["seogroup.bookmarking.info",3],["seoworld.in",3],["seriu.jp",3],["setsuyakutoushi.com",3],["serieshdpormega.com",3],["server-tutorials.net",3],["serverbd247.com",3],["serverxfans.com",3],["shadagetech.com",3],["shanurdu.com",3],["sharphindi.in",3],["sheikhmovies.*",3],["shimauma-log.com",3],["shittokuadult.net",3],["shlly.com",3],["shogaisha-shuro.com",3],["shogaisha-techo.com",3],["shopkensaku.com",3],["shorttrick.in",3],["showflix.*",3],["showrovblog.com",3],["shrinklinker.com",3],["shrinkus.tk",3],["shrivardhantech.in",3],["sieradmu.com",3],["siimanga.cyou",3],["siirtolayhaber.com",3],["sim-kichi.monster",3],["sivackidrum.net",3],["sk8therapy.fr",3],["skardu.pk",3],["skidrowreloaded.com",3],["slawoslaw.pl",3],["slowianietworza.pl",3],["smallseotools.ai",3],["smartinhome.pl",3],["snowman-information.com",3],["socebd.com",3],["sociallyindian.com",3],["softcobra.com",3],["softrop.com",3],["sohohindi.com",3],["sosuroda.pl",3],["south-park-tv.biz",3],["soziologie-politik.de",3],["sp500-up.com",3],["space-faucet.com",3],["spacestation-online.com",3],["spardhanews.com",3],["speak-english.net",3],["speculationis.com",3],["spinoff.link",3],["spiritparting.com",3],["sport-97.com",3],["sportsblend.net",3],["ssdownloader.online",3],["stablediffusionxl.com",3],["stadelahly.net",3],["stahnivideo.cz",3],["starsgtech.in",3],["start-to-run.be",3],["startupjobsportal.com",3],["stbemuiptvn.com",3],["ster-blog.xyz",3],["stimotion.pl",3],["stireazilei.eu",3],["stock-rom.com",3],["streamseeds24.com",3],["strefa.biz",3],["studybullet.com",3],["sufanblog.com",3],["sukuyou.com",3],["sullacollina.it",3],["sumirekeiba.com",3],["sundberg.ws",3],["suneelkevat.com",3],["super-ethanol.com",3],["superpackpormega.com",3],["surgicaltechie.com",3],["suvvehicle.com",3],["swietaslowianskie.pl",3],["symboleslowianskie.pl",3],["sysguides.com",3],["swordalada.org",3],["system32.ink",3],["ta3arof.net",3],["taariikh.net",3],["tabonitobrasil.tv",3],["taisha-diet.com",3],["talentstareducation.com",3],["tamil-lyrics.com",3],["tamilanzone.com",3],["tamilhit.tech",3],["tamilnaadi.com",3],["tamilultra.team",3],["tamilultratv.co.in",3],["tatsublog.com",3],["tbazzar.com",3],["teachersupdates.net",3],["team-octavi.com",3],["team-rcv.xyz",3],["teamkong.tk",3],["teamupinternational.com",3],["techacrobat.com",3],["techastuces.com",3],["techbytesblog.com",3],["techdriod.com",3],["techedubyte.com",3],["techforu.in",3],["techiepirates.com",3],["techiestalk.in",3],["techkeshri.com",3],["techlog.ta-yan.ai",3],["technewslive.org",3],["technewsrooms.com",3],["technicalviral.com",3],["technorj.com",3],["technorozen.com",3],["techoreview.com",3],["techprakash.com",3],["techsbucket.com",3],["techstwo.com",3],["techyhigher.com",3],["techyrick.com",3],["tecnomd.com",3],["tecnoscann.com",3],["tedenglish.site",3],["tehnotone.com",3],["telephone-soudan.com",3],["teluguhitsandflops.com",3],["temporeale.info",3],["tenbaiquest.com",3],["tespedia.com",3],["testious.com",3],["thangdangblog.com",3],["thaript.com",3],["the-mystery.org",3],["theberserkmanga.com",3],["thebigblogs.com",3],["thedilyblog.com",3],["thegnomishgazette.com",3],["theconomy.me",3],["thegamearcade.com",3],["theinternettaughtme.com",3],["thejoblives.com",3],["thelastgamestandingexp.com",3],["theliveupdate.com",3],["thenewsglobe.net",3],["theprofoundreport.com",3],["thermoprzepisy.pl",3],["thesarkariresult.net",3],["thesextube.net",3],["thesleak.com",3],["thesportsupa.com",3],["thewambugu.com",3],["theworldobits.com",3],["thiagorossi.com.br",3],["throwsmallstone.com",3],["tiny-sparklies.com",3],["titfuckvideos.com",3],["tirumalatirupatiyatra.in",3],["tnstudycorner.in",3],["today-obits.com",3],["todays-obits.com",3],["toeflgratis.com",3],["tokoasrimotedanpayet.my.id",3],["toorco.com",3],["top10trends.net",3],["topbiography.co.in",3],["topfaucet.us",3],["topsworldnews.com",3],["toptenknowledge.com",3],["torrentdofilmeshd.net",3],["torrentgame.org",3],["totally.top",3],["towerofgod.top",3],["tr3fit.xyz",3],["transgirlslive.com",3],["trendflatt.com",3],["trendohunts.com",3],["trgtkls.org",3],["trilog3.net",3],["trovapromozioni.it",3],["trucosonline.com",3],["tsubasatr.org",3],["tukangsapu.net",3],["tuktukcinma.com",3],["tunabagel.net",3],["turkeymenus.com",3],["turkishseriestv.net",3],["tutorialesdecalidad.com",3],["tutorialsduniya.com",3],["tuxnews.it",3],["twobluescans.com",3],["tw.xn--h9jepie9n6a5394exeq51z.com",3],["u-idol.com",3],["uciteljica.net",3],["udemyking.com",3],["uiuxsource.com",3],["ukigmoch.com",3],["ultimate-catch.eu",3],["umabomber.com",3],["underground.tboys.ro",3],["unityassets4free.com",3],["uozzart.com",3],["uploadbank.com",3],["uprwssp.org",3],["uqozy.com",3],["usahealthandlifestyle.com",3],["userupload.*",3],["ustimz.com",3],["ustvgo.live",3],["utaitebu.com",3],["utilidades.ecuadjsradiocorp.com",3],["uur-tech.net",3],["vamsivfx.com",3],["varnascan.com",3],["vedetta.org",3],["veganab.co",3],["vegas411.com",3],["venus-and-mars.com",3],["veryfuntime.com",3],["vibezhub.com.ng",3],["viciante.com.br",3],["videodidixx.com",3],["videosgays.net",3],["villettt.kitchen",3],["violablu.net",3],["virabux.com",3],["viralxns.com",3],["virtual-youtuber.jp",3],["visorsmr.com",3],["visortecno.com",3],["vitadacelebrita.com",3],["vivrebordeaux.fr",3],["vmorecloud.com",3],["vnuki.net",3],["voiceloves.com",3],["voidtruth.com",3],["voiranime1.fr",3],["vstplugin.net",3],["warungkomik.com",3],["webacademix.com",3],["webcamfuengirola.com",3],["webcras.com",3],["webhostingoffer.org",3],["websiteglowgh.com",3],["weebee.me",3],["welcometojapan.jp",3],["whats-new.cyou",3],["wheelofgold.com",3],["wholenotism.com",3],["wikijankari.com",3],["wikisharing.com",3],["wikipooster.com",3],["wikitechy.com",3],["windbreaker.me",3],["windowsaplicaciones.com",3],["wirtualnelegionowo.pl",3],["wirtualnynowydwor.pl",3],["workxvacation.jp",3],["worldgyan18.com",3],["worldtop2.com",3],["worldwidestandard.net",3],["worthitorwoke.com",3],["wp.solar",3],["wpteq.org",3],["writeprofit.org",3],["wvt24.top",3],["xiaomitools.com",3],["xn--algododoce-j5a.com",3],["xn--kckzb2722b.com",3],["xn--n8jwbyc5ezgnfpeyd3i0a3ow693bw65a.com",3],["xn--nbkw38mlu2a.com",3],["xprime4u.*",3],["xpressarticles.com",3],["xvipp.com",3],["yakisurume.com",3],["yakyufan-asobiba.com",3],["yamsoti.com",3],["yaspage.com",3],["yawm.online",3],["yazilidayim.net",3],["ycongnghe.com",3],["yestech.xyz",3],["ynk-blog.com",3],["yoshare.net",3],["youlife24.com",3],["youmedemblik.nl",3],["youpit.xyz",3],["your-local-pest-control.com",3],["yourdesignmagazine.com",3],["yuatools.com",3],["yuki0918kw.com",3],["yumekomik.com",3],["yunakhaber.com",3],["yuramanga.my.id",3],["yurudori.com",3],["zecchino-doro.it",3],["zerogptai.org",3],["zien.pl",3],["ziminvestors.com",3],["ziontutorial.com",3],["zippyshare.cloud",3],["zippysharecue.com",3],["znanemediablog.com",3],["zyromod.com",3],["kiemlua.com",3],["link1s.com",3],["bloggingguidance.com",3],["onroid.com",3],["mathcrave.com",3],["intro-hd.net",3],["richtoscan.com",3],["tainguyenmienphi.com",3],["questloops.com",3],["wvt.free.nf",3],["appnee.com",3],["nxbrew.net",4],["tresdaos.com",4],["cinema.com.my",5],["allcelebspics.com",6],["alttyab.net",6],["an1me.*",6],["androjungle.com",6],["arkadmin.fr",6],["azoranov.com",6],["barranquillaestereo.com",6],["brasilsimulatormods.com",6],["cambrevenements.com",6],["cartoonstvonline.com",6],["comparili.net",6],["diaobe.net",6],["filegajah.com",6],["filmestorrent.tv",6],["franceprefecture.fr",6],["freecricket.net",6],["gcpainters.com",6],["germanvibes.org",6],["getmaths.co.uk",6],["gewinnspiele-markt.com",6],["hamzag.com",6],["hannibalfm.net",6],["hornyconfessions.com",6],["ilcamminodiluce.it",6],["joguinhosgratis.com",6],["joziporn.com",6],["justpaste.top",6],["mctechsolutions.in",6],["medibok.se",6],["megafire.net",6],["mirrorpoi.my.id",6],["mockuphunts.com",6],["mortaltech.com",6],["multivideodownloader.com",6],["nauci-engleski.com",6],["nauci-njemacki.com",6],["nekopoi.my.id",6],["nuketree.com",6],["pa1n.xyz",6],["papafoot.*",6],["playertv.net",6],["programsolve.com",6],["radio-deejay.com",6],["ranaaclanhungary.com",6],["rasoi.me",6],["riprendiamocicatania.com",6],["rsrlink.in",6],["seriesperu.com",6],["shmapp.ca",6],["sub2unlocker.com",6],["skillmineopportunities.com",6],["teczpert.com",6],["totalsportek.app",6],["tromcap.com",6],["tv0800.com",6],["tv3monde.com",6],["ustrendynews.com",6],["watchnow.fun",6],["weashare.com",6],["yelitzonpc.com",6],["ymknow.xyz",6],["shomareh-yab.ir",7],["cimanow.cc",8],["freex2line.online",8],["evaki.fun",9],["sportshub.to",9],["sportnews.to",9],["bebasbokep.online",10],["asianboy.fans",11],["bilibili.com",12]]);
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
