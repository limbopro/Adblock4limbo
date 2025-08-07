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
(function uBOL_setLocalStorageItem() {

/******************************************************************************/

function setLocalStorageItem(key = '', value = '') {
    setLocalStorageItemFn('local', false, key, value);
}

function setLocalStorageItemFn(
    which = 'local',
    trusted = false,
    key = '',
    value = '',
) {
    if ( key === '' ) { return; }

    // For increased compatibility with AdGuard
    if ( value === 'emptyArr' ) {
        value = '[]';
    } else if ( value === 'emptyObj' ) {
        value = '{}';
    }

    const trustedValues = [
        '',
        'undefined', 'null',
        '{}', '[]', '""',
        '$remove$',
        ...getSafeCookieValuesFn(),
    ];

    if ( trusted ) {
        if ( value.includes('$now$') ) {
            value = value.replaceAll('$now$', Date.now());
        }
        if ( value.includes('$currentDate$') ) {
            value = value.replaceAll('$currentDate$', `${Date()}`);
        }
        if ( value.includes('$currentISODate$') ) {
            value = value.replaceAll('$currentISODate$', (new Date()).toISOString());
        }
    } else {
        const normalized = value.toLowerCase();
        const match = /^("?)(.+)\1$/.exec(normalized);
        const unquoted = match && match[2] || normalized;
        if ( trustedValues.includes(unquoted) === false ) {
            if ( /^-?\d+$/.test(unquoted) === false ) { return; }
            const n = parseInt(unquoted, 10) || 0;
            if ( n < -32767 || n > 32767 ) { return; }
        }
    }

    try {
        const storage = self[`${which}Storage`];
        if ( value === '$remove$' ) {
            const safe = safeSelf();
            const pattern = safe.patternToRegex(key, undefined, true );
            const toRemove = [];
            for ( let i = 0, n = storage.length; i < n; i++ ) {
                const key = storage.key(i);
                if ( pattern.test(key) ) { toRemove.push(key); }
            }
            for ( const key of toRemove ) {
                storage.removeItem(key);
            }
        } else {
            storage.setItem(key, `${value}`);
        }
    } catch {
    }
}

function getSafeCookieValuesFn() {
    return [
        'accept', 'reject',
        'accepted', 'rejected', 'notaccepted',
        'allow', 'disallow', 'deny',
        'allowed', 'denied',
        'approved', 'disapproved',
        'checked', 'unchecked',
        'dismiss', 'dismissed',
        'enable', 'disable',
        'enabled', 'disabled',
        'essential', 'nonessential',
        'forbidden', 'forever',
        'hide', 'hidden',
        'necessary', 'required',
        'ok',
        'on', 'off',
        'true', 't', 'false', 'f',
        'yes', 'y', 'no', 'n',
        'all', 'none', 'functional',
        'granted', 'done',
        'decline', 'declined',
        'closed', 'next', 'mandatory',
        'disagree', 'agree',
    ];
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
const argsList = [["didomi_token","$remove$"],["lastRedirect","true"],["PageCount","$remove$"],["a_render","true"],["adf_plays","2"],["email","true"],["adDisplayed","$remove$"],["forcefeaturetoggle.enable_ad_block_detect","false"],["adWatched","true"],["adblock_warning_pages_count","$remove$"],["superberb_disable","1"],["adshield-analytics-uuid","$remove$"],["/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["/_fa_dXVpZA==$/","$remove$"],["/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"],["segmentDeviceId","$remove$"],["/^rt_/","$remove$"],["/optimizely_data|tealium_timing/","$remove$"],["/amplitude|lastUtms|gaAccount|cX|_ls_ttl/","$remove$"],["/^(pe-|sndp-laneitem-impressions)/","$remove$"],["/fmscw_resp|intercom/","$remove$"],["uuid","$remove$"],["/^uw-/","$remove$"],["remark_lead","$remove$"],["youbora.youboraDeviceUUID","$remove$"],["bp-analytics","$remove$"],["/^ph_phc_/","$remove$"],["/^fosp_|orig_aid/","$remove$"],["/^recommendation_uuid/","$remove$"],["optimizely-vuid","$remove$"],["/^fw_/","$remove$"],["marketingCloudVisitorID","$remove$"],["PERSONAL_FLIGHT_emperiaResponse","$remove$"],["IIElevenLabsDubbingResult","$remove$"],["/_analytics|ppid/","$remove$"],["/^_vid_(lr|t)$/","$remove$"],["/adthrive|ccuid|at_sticky_data|geo-location|OPTABLE_/","$remove$"],["/cnc_alien_invasion_code|pixelsLastFired/","$remove$"],["/^avoinspector/","$remove$"]];
const hostnamesMap = new Map([["tv5mondeplus.com",0],["exambd.net",1],["jetpunk.com",2],["bravedown.com",3],["adultdeepfakes.com",4],["freewsad.com",5],["hdfilmcehennemi2.cx",6],["tradingview.com",7],["gputrends.net",8],["colnect.com",9],["fapeza.com",10],["373news.com",[11,12,13,14,15,16]],["aikatu.jp",[11,12,13,14,15,16]],["aniroleplay.com",[11,12,13,14,15,16]],["ap7am.com",[11,12,13,14,15,16]],["areaconnect.com",[11,12,13,14,15,16]],["as-web.jp",[11,12,13,14,15,16]],["aucfree.com",[11,12,13,14,15,16]],["autoby.jp",[11,12,13,14,15,16]],["autoc-one.jp",[11,12,13,14,15,16]],["autofrage.net",[11,12,13,14,15,16]],["automobile-catalog.com",[11,12,13,14,15,16]],["bab.la",[11,12,13,14,15,16]],["babla.*",[11,12,13,14,15,16]],["badmouth1.com",[11,12,13,14,15,16]],["bamgosu.site",[11,12,13,14,15,16]],["bg-mania.jp",[11,12,13,14,15,16]],["bien.hu",[11,12,13,14,15,16]],["bleepingcomputer.com",[11,12,13,14,15,16]],["blogmura.com",[11,12,13,14,15,16]],["buzzfeed.com",[11,12,13,14,15,16]],["buzzfeednews.com",[11,12,13,14,15,16]],["cesoirtv.com",[11,12,13,14,15,16]],["chanto.jp.net",[11,12,13,14,15,16]],["cinema.com.my",[11,12,13,14,15,16]],["cinetrafic.fr",[11,12,13,14,15,16]],["cocokara-next.com",[11,12,13,14,15,16]],["collinsdictionary.com",[11,12,13,14,15,16]],["computerfrage.net",[11,12,13,14,15,16]],["convertcase.net",[11,12,13,14,15,16]],["cool-style.com.tw",[11,12,13,14,15,16]],["crosswordsolver.com",[11,12,13,14,15,16]],["cruciverba.it",[11,12,13,14,15,16]],["cults3d.com",[11,12,13,14,15,16]],["daily.co.jp",[11,12,13,14,15,16]],["dailynewshungary.com",[11,12,13,14,15,16]],["dayspedia.com",[11,12,13,14,15,16]],["dictionary.cambridge.org",[11,12,13,14,15,16]],["dnevno.hr",[11,12,13,14,15,16]],["dogdrip.net",[11,12,13,14,15,16]],["dolldivine.com",[11,12,13,14,15,16]],["donbalon.com",[11,12,13,14,15,16]],["dramabeans.com",[11,12,13,14,15,16]],["dropgame.jp",[11,12,13,14,15,16]],["dziennik.pl",[11,12,13,14,15,16]],["economictimes.com",[11,12,13,14,15,16]],["economist.co.kr",[11,12,13,14,15,16]],["edaily.co.kr",[11,12,13,14,15,16]],["etoday.co.kr",[11,12,13,14,15,16]],["etoland.co.kr",[11,12,13,14,15,16]],["eurointegration.com.ua",[11,12,13,14,15,16]],["ev-times.com",[11,12,13,14,15,16]],["filmibeat.com",[11,12,13,14,15,16]],["flatpanelshd.com",[11,12,13,14,15,16]],["fntimes.com",[11,12,13,14,15,16]],["footballtransfer.com.ua",[11,12,13,14,15,16]],["footballtransfer.ru",[11,12,13,14,15,16]],["forsal.pl",[11,12,13,14,15,16]],["freemcserver.net",[11,12,13,14,15,16]],["fxstreet-id.com",[11,12,13,14,15,16]],["fxstreet-vn.com",[11,12,13,14,15,16]],["fxstreet.*",[11,12,13,14,15,16]],["gazetaprawna.pl",[11,12,13,14,15,16]],["genialetricks.de",[11,12,13,14,15,16]],["giornalone.it",[11,12,13,14,15,16]],["globalrph.com",[11,12,13,14,15,16]],["gloria.hr",[11,12,13,14,15,16]],["golf-live.at",[11,12,13,14,15,16]],["goodreturns.in",[11,12,13,14,15,16]],["hb-nippon.com",[11,12,13,14,15,16]],["heureka.cz",[11,12,13,14,15,16]],["hometownstation.com",[11,12,13,14,15,16]],["honkailab.com",[11,12,13,14,15,16]],["horairesdouverture24.fr",[11,12,13,14,15,16]],["hotcopper.com.au",[11,12,13,14,15,16]],["idokep.hu",[11,12,13,14,15,16]],["infinityfree.com",[11,12,13,14,15,16]],["iplocation.net",[11,12,13,14,15,16]],["islamicfinder.org",[11,12,13,14,15,16]],["isplus.com",[11,12,13,14,15,16]],["issuya.com",[11,12,13,14,15,16]],["iusm.co.kr",[11,12,13,14,15,16]],["j-cast.com",[11,12,13,14,15,16]],["j-town.net",[11,12,13,14,15,16]],["j7p.jp",[11,12,13,14,15,16]],["jablickar.cz",[11,12,13,14,15,16]],["jamaicaobserver.com",[11,12,13,14,15,16]],["javatpoint.com",[11,12,13,14,15,16]],["jawapos.com",[11,12,13,14,15,16]],["jmty.jp",[11,12,13,14,15,16]],["joemonster.org",[11,12,13,14,15,16]],["judgehype.com",[11,12,13,14,15,16]],["jutarnji.hr",[11,12,13,14,15,16]],["kinmaweb.jp",[11,12,13,14,15,16]],["km77.com",[11,12,13,14,15,16]],["knowt.com",[11,12,13,14,15,16]],["kobe-journal.com",[11,12,13,14,15,16]],["kompasiana.com",[11,12,13,14,15,16]],["kreuzwortraetsel.de",[11,12,13,14,15,16]],["kurashinista.jp",[11,12,13,14,15,16]],["kurashiru.com",[11,12,13,14,15,16]],["kyoteibiyori.com",[11,12,13,14,15,16]],["lacuarta.com",[11,12,13,14,15,16]],["lakeshowlife.com",[11,12,13,14,15,16]],["laleggepertutti.it",[11,12,13,14,15,16]],["lamire.jp",[11,12,13,14,15,16]],["ldoceonline.com",[11,12,13,14,15,16]],["leckerschmecker.me",[11,12,13,14,15,16]],["lifehacker.jp",[11,12,13,14,15,16]],["listentotaxman.com",[11,12,13,14,15,16]],["livenewschat.eu",[11,12,13,14,15,16]],["loawa.com",[11,12,13,14,15,16]],["logicieleducatif.fr",[11,12,13,14,15,16]],["mahjongchest.com",[11,12,13,14,15,16]],["maketecheasier.com",[11,12,13,14,15,16]],["malaymail.com",[11,12,13,14,15,16]],["mamastar.jp",[11,12,13,14,15,16]],["manta.com",[11,12,13,14,15,16]],["mathplayzone.com",[11,12,13,14,15,16]],["mediaindonesia.com",[11,12,13,14,15,16]],["mentalfloss.com",[11,12,13,14,15,16]],["meteo60.fr",[11,12,13,14,15,16]],["midhudsonnews.com",[11,12,13,14,15,16]],["minesweeperquest.com",[11,12,13,14,15,16]],["minkou.jp",[11,12,13,14,15,16]],["missyusa.com",[11,12,13,14,15,16]],["mlbpark.donga.com",[11,12,13,14,15,16]],["moin.de",[11,12,13,14,15,16]],["motor-talk.de",[11,12,13,14,15,16]],["motscroises.fr",[11,12,13,14,15,16]],["muragon.com",[11,12,13,14,15,16]],["mykhel.com",[11,12,13,14,15,16]],["mynet.com",[11,12,13,14,15,16]],["nana-press.com",[11,12,13,14,15,16]],["nationaltoday.com",[11,12,13,14,15,16]],["nbadraft.net",[11,12,13,14,15,16]],["netzwelt.de",[11,12,13,14,15,16]],["newsinlevels.com",[11,12,13,14,15,16]],["newsweekjapan.jp",[11,12,13,14,15,16]],["niice-woker.com",[11,12,13,14,15,16]],["niketalk.com",[11,12,13,14,15,16]],["nouvelobs.com",[11,12,13,14,15,16]],["oeffnungszeitenbuch.de",[11,12,13,14,15,16]],["ondemandkorea.com",[11,12,13,14,15,16]],["onlineradiobox.com",[11,12,13,14,15,16]],["optionsprofitcalculator.com",[11,12,13,14,15,16]],["oraridiapertura24.it",[11,12,13,14,15,16]],["oxfordlearnersdictionaries.com",[11,12,13,14,15,16]],["palabr.as",[11,12,13,14,15,16]],["pashplus.jp",[11,12,13,14,15,16]],["persoenlich.com",[11,12,13,14,15,16]],["petitfute.com",[11,12,13,14,15,16]],["picksandparlays.net",[11,12,13,14,15,16]],["picrew.me",[11,12,13,14,15,16]],["powerpyx.com",[11,12,13,14,15,16]],["pptvhd36.com",[11,12,13,14,15,16]],["pravda.com.ua",[11,12,13,14,15,16]],["pressian.com",[11,12,13,14,15,16]],["profitline.hu",[11,12,13,14,15,16]],["puzzlegarage.com",[11,12,13,14,15,16]],["quefaire.be",[11,12,13,14,15,16]],["radio-australia.org",[11,12,13,14,15,16]],["radio-osterreich.at",[11,12,13,14,15,16]],["raenonx.cc",[11,12,13,14,15,16]],["raetsel-hilfe.de",[11,12,13,14,15,16]],["references.be",[11,12,13,14,15,16]],["relevantmagazine.com",[11,12,13,14,15,16]],["reportera.co.kr",[11,12,13,14,15,16]],["roleplayer.me",[11,12,13,14,15,16]],["rostercon.com",[11,12,13,14,15,16]],["samsungmagazine.eu",[11,12,13,14,15,16]],["scribens.com",[11,12,13,14,15,16]],["scribens.fr",[11,12,13,14,15,16]],["slashdot.org",[11,12,13,14,15,16]],["slobodnadalmacija.hr",[11,12,13,14,15,16]],["smsonline.cloud",[11,12,13,14,15,16]],["soccerdigestweb.com",[11,12,13,14,15,16]],["solitairehut.com",[11,12,13,14,15,16]],["sourceforge.net",[11,12,13,14,15,16]],["southhemitv.com",[11,12,13,14,15,16]],["sportalkorea.com",[11,12,13,14,15,16]],["sportanalytic.com",[11,12,13,14,15,16]],["sportsrec.com",[11,12,13,14,15,16]],["sportsseoul.com",[11,12,13,14,15,16]],["szamoldki.hu",[11,12,13,14,15,16]],["talkwithstranger.com",[11,12,13,14,15,16]],["tasty.co",[11,12,13,14,15,16]],["tbsradio.jp",[11,12,13,14,15,16]],["text-compare.com",[11,12,13,14,15,16]],["thatgossip.com",[11,12,13,14,15,16]],["the-crossword-solver.com",[11,12,13,14,15,16]],["thedigestweb.com",[11,12,13,14,15,16]],["thefreebieguy.com",[11,12,13,14,15,16]],["tportal.hr",[11,12,13,14,15,16]],["traicy.com",[11,12,13,14,15,16]],["transparentcalifornia.com",[11,12,13,14,15,16]],["transparentnevada.com",[11,12,13,14,15,16]],["tunebat.com",[11,12,13,14,15,16]],["tvtv.ca",[11,12,13,14,15,16]],["tvtv.us",[11,12,13,14,15,16]],["tweaktown.com",[11,12,13,14,15,16]],["twn.hu",[11,12,13,14,15,16]],["tyda.se",[11,12,13,14,15,16]],["tz.de",[11,12,13,14,15,16]],["ufret.jp",[11,12,13,14,15,16]],["upmedia.mg",[11,12,13,14,15,16]],["verkaufsoffener-sonntag.com",[11,12,13,14,15,16]],["w.grapps.me",[11,12,13,14,15,16]],["watchdocumentaries.com",[11,12,13,14,15,16]],["webdesignledger.com",[11,12,13,14,15,16]],["wfmz.com",[11,12,13,14,15,16]],["winfuture.de",[11,12,13,14,15,16]],["word-grabber.com",[11,12,13,14,15,16]],["worldhistory.org",[11,12,13,14,15,16]],["worldjournal.com",[11,12,13,14,15,16]],["wort-suchen.de",[11,12,13,14,15,16]],["woxikon.*",[11,12,13,14,15,16]],["yakkun.com",[11,12,13,14,15,16]],["ygosu.com",[11,12,13,14,15,16]],["yutura.net",[11,12,13,14,15,16]],["zagreb.info",[11,12,13,14,15,16]],["zakzak.co.jp",[11,12,13,14,15,16]],["2chblog.jp",[11,12,13,14,15,16]],["2monkeys.jp",[11,12,13,14,15,16]],["46matome.net",[11,12,13,14,15,16]],["akb48glabo.com",[11,12,13,14,15,16]],["akb48matomemory.com",[11,12,13,14,15,16]],["alfalfalfa.com",[11,12,13,14,15,16]],["all-nationz.com",[11,12,13,14,15,16]],["anihatsu.com",[11,12,13,14,15,16]],["aqua2ch.net",[11,12,13,14,15,16]],["blog.esuteru.com",[11,12,13,14,15,16]],["blog.livedoor.jp",[11,12,13,14,15,16]],["blog.jp",[11,12,13,14,15,16]],["blogo.jp",[11,12,13,14,15,16]],["chaos2ch.com",[11,12,13,14,15,16]],["choco0202.work",[11,12,13,14,15,16]],["crx7601.com",[11,12,13,14,15,16]],["danseisama.com",[11,12,13,14,15,16]],["dareda.net",[11,12,13,14,15,16]],["digital-thread.com",[11,12,13,14,15,16]],["doorblog.jp",[11,12,13,14,15,16]],["exawarosu.net",[11,12,13,14,15,16]],["fgochaldeas.com",[11,12,13,14,15,16]],["football-2ch.com",[11,12,13,14,15,16]],["gekiyaku.com",[11,12,13,14,15,16]],["golog.jp",[11,12,13,14,15,16]],["hacchaka.net",[11,12,13,14,15,16]],["heartlife-matome.com",[11,12,13,14,15,16]],["liblo.jp",[11,12,13,14,15,16]],["fesoku.net",[11,12,13,14,15,16]],["fiveslot777.com",[11,12,13,14,15,16]],["gamejksokuhou.com",[11,12,13,14,15,16]],["girlsreport.net",[11,12,13,14,15,16]],["girlsvip-matome.com",[11,12,13,14,15,16]],["grasoku.com",[11,12,13,14,15,16]],["gundamlog.com",[11,12,13,14,15,16]],["honyaku-channel.net",[11,12,13,14,15,16]],["ikarishintou.com",[11,12,13,14,15,16]],["imas-cg.net",[11,12,13,14,15,16]],["imihu.net",[11,12,13,14,15,16]],["inutomo11.com",[11,12,13,14,15,16]],["itainews.com",[11,12,13,14,15,16]],["itaishinja.com",[11,12,13,14,15,16]],["jin115.com",[11,12,13,14,15,16]],["jisaka.com",[11,12,13,14,15,16]],["jnews1.com",[11,12,13,14,15,16]],["jumpsokuhou.com",[11,12,13,14,15,16]],["jyoseisama.com",[11,12,13,14,15,16]],["keyakizaka46matomemory.net",[11,12,13,14,15,16]],["kidan-m.com",[11,12,13,14,15,16]],["kijoden.com",[11,12,13,14,15,16]],["kijolariat.net",[11,12,13,14,15,16]],["kijolifehack.com",[11,12,13,14,15,16]],["kijomatomelog.com",[11,12,13,14,15,16]],["kijyokatu.com",[11,12,13,14,15,16]],["kijyomatome.com",[11,12,13,14,15,16]],["kijyomatome-ch.com",[11,12,13,14,15,16]],["kijyomita.com",[11,12,13,14,15,16]],["kirarafan.com",[11,12,13,14,15,16]],["kitimama-matome.net",[11,12,13,14,15,16]],["kitizawa.com",[11,12,13,14,15,16]],["konoyubitomare.jp",[11,12,13,14,15,16]],["kotaro269.com",[11,12,13,14,15,16]],["kyousoku.net",[11,12,13,14,15,16]],["ldblog.jp",[11,12,13,14,15,16]],["livedoor.biz",[11,12,13,14,15,16]],["livedoor.blog",[11,12,13,14,15,16]],["majikichi.com",[11,12,13,14,15,16]],["matacoco.com",[11,12,13,14,15,16]],["matomeblade.com",[11,12,13,14,15,16]],["matomelotte.com",[11,12,13,14,15,16]],["matometemitatta.com",[11,12,13,14,15,16]],["mojomojo-licarca.com",[11,12,13,14,15,16]],["morikinoko.com",[11,12,13,14,15,16]],["nandemo-uketori.com",[11,12,13,14,15,16]],["netatama.net",[11,12,13,14,15,16]],["news-buzz1.com",[11,12,13,14,15,16]],["news30over.com",[11,12,13,14,15,16]],["nmb48-mtm.com",[11,12,13,14,15,16]],["norisoku.com",[11,12,13,14,15,16]],["npb-news.com",[11,12,13,14,15,16]],["ocsoku.com",[11,12,13,14,15,16]],["okusama-kijyo.com",[11,12,13,14,15,16]],["onihimechan.com",[11,12,13,14,15,16]],["orusoku.com",[11,12,13,14,15,16]],["otakomu.jp",[11,12,13,14,15,16]],["otoko-honne.com",[11,12,13,14,15,16]],["oumaga-times.com",[11,12,13,14,15,16]],["outdoormatome.com",[11,12,13,14,15,16]],["pachinkopachisro.com",[11,12,13,14,15,16]],["paranormal-ch.com",[11,12,13,14,15,16]],["recosoku.com",[11,12,13,14,15,16]],["s2-log.com",[11,12,13,14,15,16]],["saikyo-jump.com",[11,12,13,14,15,16]],["shuraba-matome.com",[11,12,13,14,15,16]],["ske48matome.net",[11,12,13,14,15,16]],["squallchannel.com",[11,12,13,14,15,16]],["sukattojapan.com",[11,12,13,14,15,16]],["sumaburayasan.com",[11,12,13,14,15,16]],["sutekinakijo.com",[11,12,13,14,15,16]],["usi32.com",[11,12,13,14,15,16]],["uwakich.com",[11,12,13,14,15,16]],["uwakitaiken.com",[11,12,13,14,15,16]],["vault76.info",[11,12,13,14,15,16]],["vipnews.jp",[11,12,13,14,15,16]],["vippers.jp",[11,12,13,14,15,16]],["vipsister23.com",[11,12,13,14,15,16]],["vtubernews.jp",[11,12,13,14,15,16]],["watarukiti.com",[11,12,13,14,15,16]],["world-fusigi.net",[11,12,13,14,15,16]],["zakuzaku911.com",[11,12,13,14,15,16]],["zch-vip.com",[11,12,13,14,15,16]],["mindbodygreen.com",17],["musescore.com",18],["1und1.de",19],["elconfidencial.com",20],["journaldemontreal.com",20],["aamulehti.fi",21],["cbsnews.com",22],["680thefan.com",23],["katu.com",24],["darntough.com",25],["mais.sbt.com.br",26],["boredpanda.com",27],["healf.com",28],["vnexpress.net",29],["briefly.co.za",30],["carparts.com",31],["hpplus.jp",32],["makemytrip.com",[33,34]],["elevenlabs.io",35],["mirror.co.uk",36],["farmersjournal.ie",37],["laurelberninteriors.com",38],["evropa2.cz",39],["vogue.com",40]]);
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
    try { setLocalStorageItem(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
