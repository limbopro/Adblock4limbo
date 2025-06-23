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
(function uBOL_noEvalIf() {

/******************************************************************************/

function noEvalIf(
    needle = ''
) {
    if ( typeof needle !== 'string' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('noeval-if', needle);
    const reNeedle = safe.patternToRegex(needle);
    proxyApplyFn('eval', function(context) {
        const { callArgs } = context;
        const a = String(callArgs[0]);
        if ( needle !== '' && reNeedle.test(a) ) {
            safe.uboLog(logPrefix, 'Prevented:\n', a);
            return;
        }
        if ( needle === '' || safe.logLevel > 1 ) {
            safe.uboLog(logPrefix, 'Not prevented:\n', a);
        }
        return context.reflect();
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
const argsList = [["replace"],["ExoLoader"],["ads"],["setInterval"],["tmohentai"],["debugger"],["detectAdBlock"],["adsBlocked"],["adb"],["ppu"],["chp_ad"],["adsbygoogle"],["/chp_?ad/"],["/07c225f3\\.online|content-loader\\.com|css-load\\.com|html-load\\.com/"],["show"],["AdBlock"],["popUnderStage"],["/adbl/i"],["window.open"],["deblocker"],["adblock"],["popunder"],["interactionCount"],["String.fromCharCode"],["blocker"],["UserCustomPop"],["AdBlocker"],["/popunder/i"],["shift"],["/ads|chp_?ad/"],["style.display"],["/adb/i"],["adbl"]];
const hostnamesMap = new Map([["orgyxxxhub.com",0],["shrink.*",0],["junkyponk.com",0],["healthfirstweb.com",0],["vocalley.com",0],["yogablogfit.com",0],["howifx.com",0],["en.financerites.com",0],["mythvista.com",0],["livenewsflix.com",0],["cureclues.com",0],["apekite.com",0],["flash-firmware.blogspot.com",0],["uploady.io",0],["taodung.com",0],["3movs.com",1],["forexlap.com",2],["mlwbd.*",2],["top10cafe.se",2],["dailytech-news.eu",2],["phpscripttr.com",2],["7misr4day.com",2],["descargaspcpro.net",2],["dotadostube.com",2],["taradinhos.com",2],["katmoviefix.*",2],["game-2u.com",2],["layardrama21.*",2],["toramemoblog.com",2],["cashbux.work",2],["sdmoviespoint.*",2],["gplastra.com",2],["okleak.com",2],["afly.pro",2],["ithinkilikeyou.net",2],["milanreports.com",2],["towerofgod.me",2],["crotpedia.net",2],["papahd.co",2],["drakescans.com",2],["watchfacebook.com",2],["web1s.asia",2],["bokugents.com",2],["newzjunky.com",2],["yourlifeupdated.net",2],["lscomic.com",2],["tv.durbinlive.com",2],["freeltc.online",2],["pornleaks.in",2],["dudestream.com",2],["areascans.net",2],["bonsaiprolink.shop",2],["exactlyhowlong.com",2],["kumapoi.info",2],["blogcreativos.com",2],["flixlatam.com",2],["samurai.ragnarokscanlation.org",2],["myhindigk.com",2],["l2crypt.com",2],["mdbekjwqa.pw",3],["tmohentai.com",4],["aeonax.com",5],["hentaihaven.xxx",5],["embed.streamx.me",5],["shayarias.in",6],["jksb.in",6],["mazakisan.com",6],["grtjobs.in",6],["call-bomber.info",6],["kajernews.com",6],["vyaapaarguru.in",6],["tinys.click",7],["getintoway.com",7],["jpopsingles.eu",7],["techacode.com",8],["sideplusleaks.com",8],["gamezizo.com",9],["oii.io",9],["azmath.info",10],["azsoft.*",10],["downfile.site",10],["downphanmem.com",10],["expertvn.com",10],["memangbau.com",10],["trangchu.news",10],["aztravels.net",10],["litonmods.com",11],["booksrack.net",11],["helicomicro.com",11],["klyker.com",11],["kontenterabox.com",11],["naruldonghua.com",11],["pienovels.com",11],["enryucomics.com",11],["manhuaga.com",11],["samurai.yoketo.xyz",12],["10-train.com",12],["103.74.5.104",12],["185.193.17.214",12],["247footballnow.com",12],["24pdd.*",12],["27-sidefire-blog.com",12],["2best.club",12],["2the.space",12],["2ix2.com",12],["30kaiteki.com",12],["3dassetcollection.com",12],["3gpterbaru.com",12],["3dyasan.com",12],["3fnews.com",12],["3rabsports.com",12],["4drumkits.com",12],["4fans.gay",12],["4fingermusic.com",12],["4gousya.net",12],["4horlover.com",12],["4spaces.org",12],["519.best",12],["51sec.org",12],["80-talet.se",12],["9ketsuki.info",12],["aboedman.com",12],["adisann.com",12],["adminreboot.com",12],["adsurfle.com",12],["adsy.pw",12],["advertafrica.net",12],["adnan-tech.com",12],["africue.com",12],["aghasolution.com",12],["airportwebcams.net",12],["aitoolsfree.org",12],["aitohuman.org",12],["akihabarahitorigurasiseikatu.com",12],["akuebresources.com",12],["alanyapower.com",12],["albania.co.il",12],["albinofamily.com",12],["alexbacher.fr",12],["algodaodocescan.com.br",12],["allcalidad.app",12],["allcelebritywiki.com",12],["allcivilstandard.com",12],["alliptvlinks.com",12],["alliptvs.com",12],["almofed.com",12],["alphasource.site",12],["altcryp.com",12],["altselection.com",12],["altyazitube22.lat",12],["amaturehomeporn.com",12],["amnaymag.com",12],["amritadrino.com",12],["amtil.com.au",12],["analysis-chess.io.vn",12],["andani.net",12],["androidadult.com",12],["androidfacil.org",12],["angolopsicologia.com",12],["animalwebcams.net",12],["anime4mega.net",12],["anime4mega-descargas.net",12],["anime7.download",12],["anime-torrent.com",12],["animecenterbr.com",12],["animesonlineshd.com",12],["animetwixtor.com",12],["animexin.vip",12],["anmup.com.np",12],["anodee.com",12],["anonyviet.com",12],["anothergraphic.org",12],["aoseugosto.com",12],["aozoraapps.net",12],["apenasmaisumyaoi.com",12],["apkdink.com",12],["apostoliclive.com",12],["appdoze.*",12],["applediagram.com",12],["aprenderquechua.com",12],["arabstd.com",12],["arti-flora.nl",12],["articlebase.pk",12],["articlesmania.me",12],["ascalonscans.com",12],["asiansexdiarys.com",12],["askcerebrum.com",12],["askushowto.com",12],["aspirapolveremigliori.it",12],["assignmentdon.com",12],["astroages.com",12],["astrumscans.xyz",12],["atemporal.cloud",12],["atgstudy.com",12],["atlantisscan.com",12],["atleticalive.it",12],["audiobookexchangeplace.com",12],["audiotools.*",12],["audiotrip.org",12],["autocadcommand.com",12],["autodime.com",12],["autoindustry.ro",12],["automat.systems",12],["automothink.com",12],["autosport.*",12],["avitter.net",12],["awpd24.com",12],["ayatoon.com",12],["ayuka.link",12],["azamericasat.net",12],["azdly.com",12],["azores.co.il",12],["azrom.net",12],["backyardpapa.com",12],["baithak.news",12],["balkanteka.net",12],["bandstand.ph",12],["batman.city",12],["bcanepaltu.com",12],["bcanotesnepal.com",12],["bcsnoticias.mx",12],["bdix.app",12],["bdokan.com",12],["bdsomadhan.com",12],["bdstarshop.com",12],["beaddiagrams.com",12],["bearchasingart.com",12],["beatree.cn",12],["bedavahesap.org",12],["beisbolinvernal.com",12],["bellezashot.com",12],["bengalxpress.in",12],["beasttips.com",12],["berlin-teltow.de",12],["beruhmtemedien.com",12],["bestofarea.com",12],["bettingexchange.it",12],["bi-girl.net",12],["bibliotecadecorte.com",12],["bibliotecahermetica.com.br",12],["bidersnotu.com",12],["bif24.pl",12],["biftutech.com",12],["bigdata-social.com",12],["bimshares.com",12],["bishalghale.com.np",12],["bitcotasks.com",12],["bitlikutu.com",12],["bittukitech.in",12],["bitview.cloud",12],["bitzite.com",12],["blog.motionisland.com",12],["blog24.me",12],["blogk.com",12],["blogue.tech",12],["bloooog.it",12],["bloxyscripts.com",12],["bluebuddies.com",12],["bluecoreinside.com",12],["blurayufr.cam",12],["bogowieslowianscy.pl",12],["bookpraiser.com",12],["booksbybunny.com",12],["boredgiant.com",12],["botinnifit.com",12],["boundlessnecromancer.com",12],["boxaoffrir.com",12],["boxingvideo.org",12],["boxofficebusiness.in",12],["boyfuck.me",12],["boystube.link",12],["braziliannr.com",12],["brevi.eu",12],["brian70.tw",12],["bright-b.com",12],["brightpets.org",12],["broadbottomvillage.co.uk",12],["brokensilenze.net",12],["brulosophy.com",12],["brushednickel.biz",12],["bshifast.live",12],["bsmaurya.com",12],["bugswave.com",12],["businesstrend.jp",12],["buzzpit.net",12],["byswiizen.fr",12],["cafenau.com",12],["calculascendant.com",12],["calvyn.com",12],["camnang24h.net",12],["canadanouvelles.com",12],["canaltdt.es",12],["canzoni-per-bambini.it",12],["captionpost.com",12],["carryflix.icu",12],["cashkar.in",12],["casperhd.com",12],["catatanonline.com",12],["catmovie.website",12],["cavalierstream.fr",12],["celebritablog.com",12],["celemusic.com",12],["celestialtributesonline.com",12],["certificateland.com",12],["cg-method.com",12],["chachocool.com",12],["chakrirkhabar247.in",12],["championpeoples.com",12],["chanjaeblog.jp",12],["change-ta-vie-coaching.com",12],["charlottepilgrimagetour.com",12],["charpatra.com",12],["chart.services",12],["chatgbt.one",12],["chatgptfree.ai",12],["cheatermad.com",12],["check-imei.info",12],["cheese-cake.net",12],["chelsea24news.pl",12],["chevalmag.com",12],["chieflyoffer.com",12],["chihouban.com",12],["chikonori.com",12],["chineseanime.org",12],["christiantrendy.com",12],["cienagamagdalena.com",12],["cimbusinessevents.com.au",12],["cinema-sketch.com",12],["cinepiroca.com",12],["cizzyscripts.com",12],["claimclicks.com",12],["claydscap.com",12],["clockskin.us",12],["cloud9obits.com",12],["cocorip.net",12],["code-source.net",12],["codeandkey.com",12],["codeastro.com",12],["codeitworld.com",12],["codemystery.com",12],["coderblog.in",12],["codewebit.top",12],["coin-profits.xyz",12],["coinadpro.club",12],["coinbaby8.com",12],["coingraph.us",12],["cola16.app",12],["coleccionmovie.com",12],["colliersnews.com",12],["comeletspray.com",12],["cometogliere.com",12],["comoinstalar.me",12],["compota-soft.work",12],["conoscereilrischioclinico.it",12],["consigliatodanoi.it",12],["constructionmethodology.com",12],["constructionplacement.org",12],["cookni.net",12],["correction-livre-scolaire.fr",12],["coursesdaddy.com",12],["cpscan.xyz",12],["crackcodes.in",12],["crackthemes.com",12],["crackwatch.eu",12],["craigretailers.co.uk",12],["crazyashwin.com",12],["crazydeals.live",12],["creebhills.com",12],["creepyscans.com",12],["cricket12.com",12],["crn.pl",12],["cronachesalerno.it",12],["crunchytech.net",12],["cryptonor.xyz",12],["cryptonworld.space",12],["cryptotech.fun",12],["cryptowidgets.net",12],["crystalcomics.com",12],["cta-fansite.com",12],["cuckoldsex.net",12],["culture-informatique.net",12],["cykf.net",12],["cyprus.co.il",12],["daij1n.info",12],["dailykpop.net",12],["dailytechupdates.in",12],["dailytips247.com",12],["dailyweb.pl",12],["davewigstone.com",12],["davidsonbuilders.com",12],["day4news.com",12],["daybuy.tw",12],["deathonnews.com",12],["dejongeturken.com",12],["delvein.tech",12],["demonictl.com",12],["demonyslowianskie.pl",12],["demooh.com",12],["depressionhurts.us",12],["derusblog.com",12],["descargaranimes.com",12],["descargaseriestv.com",12],["design4months.com",12],["desirenovel.com",12],["desktopsolution.org",12],["destakenewsgospel.com",12],["destinationsjourney.com",12],["detikbangka.com",12],["deutschpersischtv.com",12],["dev-dark-blog.pantheonsite.io",12],["devopslanka.com",12],["dewfuneralhomenews.com",12],["dhankasamaj.com",12],["diamondfansub.com",12],["diarioeducacion.com",12],["diencobacninh.com",12],["digitalseoninja.com",12],["dignityobituary.com",12],["dinheirocursosdownload.com",12],["diplomaexamcorner.com",12],["dipprofit.com",12],["dir-tech.com",12],["diskizone.com",12],["diversanews.com",12],["diyprojectslab.com",12],["djqunjab.in",12],["djsofchhattisgarh.in",12],["djstar.in",12],["dma-upd.org",12],["dobleaccion.xyz",12],["dobletecno.com",12],["domainregistrationtips.info",12],["dominican-republic.co.il",12],["donghuaworld.com",12],["donlego.com",12],["doublemindtech.com",12],["doumura.com",12],["downloadbatch.me",12],["downloader.is",12],["downloads.sayrodigital.net",12],["downloads.wegomovies.com",12],["downloadtanku.org",12],["dpscomputing.com",12],["drake-scans.com",12],["drakecomic.com",12],["dramafren.com",12],["dramaviki.com",12],["drublood.com",12],["drzna.com",12],["dubaitime.net",12],["dumovies.com",12],["dvd-flix.com",12],["dvdgayonline.com",12],["e-kakoh.com",12],["earlymemorials.com",12],["earninginwork.com",12],["easyjapanesee.com",12],["easytodoit.com",12],["ecommercewebsite.store",12],["eczpastpapers.net",12],["editions-actu.org",12],["editorsadda.com",12],["edivaldobrito.com.br",12],["edjerba.com",12],["edukamer.info",12],["egram.com.ng",12],["einewelteinezukunft.de",12],["elcriticodelatele.com",12],["elcultura.pl",12],["elearning-cpge.com",12],["eleceedmanhwa.me",12],["electricalstudent.com",12],["embraceinnerchaos.com",12],["emperorscan.com",12],["empleo.com.uy",12],["encuentratutarea.com",12],["encurtareidog.top",12],["eng-news.com",12],["english-dubbed.com",12],["english-topics.com",12],["english101.co.za",12],["enryumanga.com",12],["ensenchat.com",12],["entenpost.com",12],["epsilonakdemy.com",12],["eramuslim.com",12],["erreguete.gal",12],["ervik.as",12],["esportsmonk.com",12],["esportsnext.com",12],["et-invest.de",12],["eternalhonoring.com",12],["ethiopia.co.il",12],["evdeingilizcem.com",12],["eventiavversinews.*",12],["everydayhomeandgarden.com",12],["evlenmekisteyenbayanlar.net",12],["ewybory.eu",12],["exam-results.in",12],["exeking.top",12],["expertskeys.com",12],["eymockup.com",12],["ezmanga.net",12],["faaduindia.com",12],["faqwiki.us",12],["farolilloteam.es",12],["fattelodasolo.it",12],["fchopin.net",12],["felicetommasino.com",12],["femisoku.net",12],["ferdroid.net",12],["fessesdenfer.com",12],["feyorra.top",12],["ffcv.es",12],["fhedits.in",12],["fhmemorial.com",12],["fibwatch.store",12],["filmypoints.in",12],["finalnews24.com",12],["financeandinsurance.xyz",12],["financeyogi.net",12],["financid.com",12],["finclub.in",12],["findheman.com",12],["findnewjobz.com",12],["fine-wings.com",12],["firescans.xyz",12],["fitnesshealtharticles.com",12],["fitnessscenz.com",12],["flashssh.net",12],["fleamerica.com",12],["flexamens.com",12],["flixhub.*",12],["flordeloto.site",12],["flowsnet.com",12],["folkmord.se",12],["foodgustoso.it",12],["foodiesjoy.com",12],["footeuses.com",12],["footyload.com",12],["footymercato.com",12],["forex-yours.com",12],["forexcracked.com",12],["forexrw7.com",12],["former-railroad-worker.com",12],["foxaholic.com",12],["francaisfacile.net",12],["free.7hd.club",12],["freebiesmockup.com",12],["freecoursesonline.me",12],["freedom3d.art",12],["freefiremaxofficial.com",12],["freefireupdate.com",12],["freegetcoins.com",12],["freelancerartistry.com",12],["freemedicalbooks.org",12],["freemockups.org",12],["freemovies-download.com",12],["freeoseocheck.com",12],["freepasses.org",12],["freescorespiano.com",12],["freetarotonline.com",12],["freetubetv.net",12],["freevstplugins.*",12],["freewoodworking.ca",12],["fresherbaba.com",12],["freshersgold.com",12],["friedrichshainblog.de",12],["frpgods.com",12],["ftuapps.*",12],["fumettologica.it",12],["funeral-memorial.com",12],["funeralmemorialnews.com",12],["funeralobitsmemorial.com",12],["funztv.com",12],["futbolenlatelevision.com",12],["fx-22.com",12],["gadgetspidy.com",12],["gadgetxplore.com",12],["gahag.net",12],["galaxytranslations10.com",12],["galaxytranslations97.com",12],["galinhasamurai.com",12],["game5s.com",12],["gameblog.jp",12],["gamefi-mag.com",12],["gamenv.net",12],["gamers-haven.org",12],["gamerxyt.com",12],["games-manuals.com",12],["gamevcore.com",12],["gaminglariat.com",12],["gamingsearchjournal.com",12],["ganzoscan.com",12],["gatagata.net",12],["gaypornhdfree.com",12],["gazetazachodnia.eu",12],["gdrivemovies.xyz",12],["geekering.com",12],["gemiadamlari.org",12],["gentiluomodigitale.it",12],["gesund-vital.online",12],["getsuicidegirlsfree.com",12],["getworkation.com",12],["ghostsfreaks.com",12],["girlydrop.com",12],["gisvacancy.com",12],["giuseppegravante.com",12],["gkbooks.in",12],["gkgsca.com",12],["gksansar.com",12],["glo-n.online",12],["globelempire.com",12],["gnusocial.jp",12],["goegoe.net",12],["gogetadoslinks.*",12],["gogetapast.com.br",12],["gogifox.com",12],["gogueducation.com",12],["gokerja.net",12],["gokushiteki.com",12],["gold-24.net",12],["golf.rapidmice.com",12],["gomov.bio",12],["goodriviu.com",12],["googlearth.selva.name",12],["gorating.in",12],["gotocam.net",12],["grafikos.cz",12],["grasta.net",12],["grazymag.com",12],["greasygaming.com",12],["greattopten.com",12],["grootnovels.com",12],["gsdn.live",12],["gsmfreezone.com",12],["gsmmessages.com",12],["gtavi.pl",12],["gurbetseli.net",12],["gvnvh.net",12],["gwiazdatalkie.com",12],["habuteru.com",12],["hackmodsapk.com",12],["hadakanonude.com",12],["hairjob.wpx.jp",12],["happy-otalife.com",12],["haqem.com",12],["harbigol.com",12],["harley.top",12],["haryanaalert.*",12],["haveyaseenjapan.com",12],["haxnode.net",12],["hdhub4one.pics",12],["hbnews24.com",12],["healthbeautybee.com",12],["healthcheckup.com",12],["healthfatal.com",12],["heartofvicksburg.com",12],["heartrainbowblog.com",12],["hechos.net",12],["hellenism.net",12],["heutewelt.com",12],["hhesse.de",12],["highdefdiscnews.com",12],["hilaw.vn",12],["hindi.trade",12],["hindimatrashabd.com",12],["hindinest.com",12],["hindishri.com",12],["hiphopa.net",12],["hipsteralcolico.altervista.org",12],["historichorizons.com",12],["hivetoon.com",12],["hobbykafe.com",12],["hockeyfantasytools.com",12],["hoegel-textildruck.de",12],["hojii.net",12],["hoofoot.net",12],["hookupnovel.com",12],["hopsion-consulting.com",12],["hostingreviews24.com",12],["hotspringsofbc.ca",12],["howtoblogformoney.net",12],["hub2tv.com",12],["hungarianhardstyle.hu",12],["hyderone.com",12],["hyogo.ie-t.net",12],["hypelifemagazine.com",12],["hypesol.com",12],["idesign.wiki",12],["idevfast.com",12],["idevice.me",12],["idpvn.com",12],["iggtech.com",12],["ignoustudhelp.in",12],["ikarianews.gr",12],["ilbassoadige.it",12],["ilbolerodiravel.org",12],["imperiofilmes.co",12],["indiasmagazine.com",12],["individualogist.com",12],["inertz.org",12],["infamous-scans.com",12],["infocycles.com",12],["infodani.net",12],["infojabarloker.com",12],["infokita17.com",12],["informatudo.com.br",12],["infrafandub.com",12],["infulo.com",12],["inlovingmemoriesnews.com",12],["inprogrammer.com",12],["inra.bg",12],["insideeducation.co.za",12],["insidememorial.com",12],["insider-gaming.com",12],["insurancepost.xyz",12],["intelligence-console.com",12],["interculturalita.it",12],["inventionsdaily.com",12],["iptvxtreamcodes.com",12],["isabihowto.com.ng",12],["italiadascoprire.net",12],["itdmusic.*",12],["itmaniatv.com",12],["itopmusic.com",12],["itopmusics.com",12],["itopmusicx.com",12],["itz-fast.com",12],["iumkit.net",12],["iwb.jp",12],["jaktsidan.se",12],["japannihon.com",12],["javboys.*",12],["javcock.com",12],["javgay.com",12],["jcutrer.com",12],["jk-market.com",12],["jobsbd.xyz",12],["jobsibe.com",12],["jobslampung.net",12],["josemo.com",12],["jra.jpn.org",12],["jrlinks.in",12],["jungyun.net",12],["juninhoscripts.com.br",12],["juventusfc.hu",12],["kacengeng.com",12],["kagohara.net",12],["kakashiyt.com",12],["kakiagune.com",12],["kali.wiki",12],["kana-mari-shokudo.com",12],["kanaeblog.net",12],["kandisvarlden.com",12],["karaoke4download.com",12],["kattannonser.se",12],["kawaguchimaeda.com",12],["kaystls.site",12],["kenkou-maintenance.com",12],["kenta2222.com",12],["keroseed.*",12],["kgs-invest.com",12],["kh-pokemon-mc.com",12],["khabarbyte.com",12],["khabardinbhar.net",12],["khohieu.com",12],["kickcharm.com",12],["kinisuru.com",12],["kireicosplay.com",12],["kits4beats.com",12],["kllproject.lv",12],["know-how-tree.com",12],["knowstuff.in",12],["kobitacocktail.com",12],["kodaika.com",12],["kodewebsite.com",12],["kodibeginner.com",12],["kokosovoulje.com",12],["kolcars.shop",12],["kompiko.pl",12],["koreanbeauty.club",12],["korogashi-san.org",12],["korsrt.eu.org",12],["kotanopan.com",12],["koume-in-huistenbosch.net",12],["krx18.com",12],["kukni.to",12],["kupiiline.com",12],["kurosuen.live",12],["labstory.in",12],["lacrima.jp",12],["ladkibahin.com",12],["ladypopularblog.com",12],["lamorgues.com",12],["lampungkerja.com",12],["lapaginadealberto.com",12],["lascelebrite.com",12],["latinlucha.es",12],["law101.org.za",12],["lawweekcolorado.com",12],["lawyercontact.us",12],["learnedclub.com",12],["learnmany.in",12],["learnchannel-tv.com",12],["learnodo-newtonic.com",12],["learnospot.com",12],["lebois-racing.com",12],["lectormh.com",12],["leechyscripts.net",12],["legendaryrttextures.com",12],["lendrive.web.id",12],["lespartisanes.com",12],["letrasgratis.com.ar",12],["levismodding.co.uk",12],["lgcnews.com",12],["lglbmm.com",12],["lheritierblog.com",12],["librasol.com.br",12],["ligaset.com",12],["limontorrent.com",12],["limontorrents.com",12],["linkskibe.com",12],["linkvoom.com",12],["linkz.*",12],["linux-talks.com",12],["linuxexplain.com",12],["lionsfan.net",12],["literarysomnia.com",12],["littlepandatranslations.com",12],["livefootballempire.com",12],["lk21org.com",12],["lmtos.com",12],["loanpapa.in",12],["locurainformaticadigital.com",12],["logofootball.net",12],["lookism.me",12],["lotus-tours.com.hk",12],["lovingsiren.com",12],["ltpcalculator.in",12],["luchaonline.com",12],["luciferdonghua.in",12],["lucrebem.com.br",12],["lustesthd.cloud",12],["lustesthd.lat",12],["lycee-maroc.com",12],["a-ha.io",13],["cboard.net",13],["joongdo.co.kr",13],["viva100.com",13],["gamingdeputy.com",13],["alle-tests.nl",13],["meconomynews.com",13],["brandbrief.co.kr",13],["motorgraph.com",13],["topstarnews.net",13],["maccanismi.it",14],["gamesrepacks.com",14],["techhelpbd.com",14],["pokemundo.com",14],["lewebde.com",14],["app.covemarkets.com",14],["pasteit.*",15],["tabele-kalorii.pl",15],["hentaistream.com",16],["nudeselfiespics.com",16],["hentaivideos.net",16],["hyundaitucson.info",17],["xcloud.*",18],["xdld.pages.dev",18],["xdld.lat",18],["ergasiakanea.eu",19],["conghuongtu.net",19],["downloadlyir.com",19],["ipamod.com",19],["techedubyte.com",19],["apkdrill.com",19],["gsmware.com",20],["arldeemix.com",20],["filemooon.top",[21,27]],["autosport.com",22],["motorsport.com",22],["cdn.gledaitv.live",23],["claimlite.club",24],["kurakura21.space",25],["blackhatworld.com",26],["3ixcf45.cfd",27],["76078rb.sbs",27],["defienietlynotme.com",27],["embedme.*",27],["finfang.*",27],["fmembed.cc",27],["fmhd.bar",27],["fmoonembed.pro",27],["hellnaw.*",27],["moonembed.*",27],["rgeyyddl.skin",27],["sbnmp.bar",27],["sulleiman.com",27],["vpcxz19p.xyz",27],["z12z0vla.*",27],["kickassanime.ch",28],["cgcosplay.org",29],["bilinovel.com",30],["linovelib.com",31],["freevpn.us",32]]);
const exceptionsMap = new Map([["xcloud.eu",[18]],["xcloud.host",[18]]]);
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
    try { noEvalIf(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
