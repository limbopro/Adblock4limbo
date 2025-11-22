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
const argsList = [["didomi_token","$remove$"],["ADB_ACTIVE_STATUS","$remove$"],["lastRedirect","true"],["PageCount","$remove$"],["zonck","$remove$"],["a_render","true"],["adf_plays","2"],["email","true"],["adDisplayed","$remove$"],["forcefeaturetoggle.enable_ad_block_detect","false"],["adWatched","true"],["adblock_warning_pages_count","$remove$"],["superberb_disable","1"],["student_id","$remove$"],["adshield-analytics-uuid","$remove$"],["/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["/_fa_dXVpZA==$/","$remove$"],["/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"],["segmentDeviceId","$remove$"],["/^rt_/","$remove$"],["/amplitude|lastUtms|gaAccount|cX|_ls_ttl/","$remove$"],["/^(pe-|sndp-laneitem-impressions)/","$remove$"],["/fmscw_resp|intercom/","$remove$"],["uuid","$remove$"],["/^uw-/","$remove$"],["remark_lead","$remove$"],["youbora.youboraDeviceUUID","$remove$"],["bp-analytics","$remove$"],["/^ph_phc_/","$remove$"],["/^fosp_|orig_aid/","$remove$"],["/^recommendation_uuid/","$remove$"],["optimizely-vuid","$remove$"],["/^fw_/","$remove$"],["marketingCloudVisitorID","$remove$"],["PERSONAL_FLIGHT_emperiaResponse","$remove$"],["/^boostSD/","$remove$"],["/sales-ninja|snj/","$remove$"],["etx-settings","$remove$"],["/__anon_id|browserId/","$remove$"],["/_li_duid|_lc2_fpi/","$remove$"],["/fingerprint|trackingEvents/","$remove$"],["/htjs_|stck_|statsig/","$remove$"],["/mixpanel/","$remove$"],["ld:$anonUserId","$remove$"],["/_user_id$/","$remove$"],["csg_uid","$remove$"],["uw-uid","$remove$"],["RC_PLAYER_USER_ID","$remove$"],["/sc_tracking_anonymous_id|statsig/","$remove$"],["/lc_anon_user_id|_constructorio_search_client_id/","$remove$"],["/builderVisitorId|snowplowOutQueue_cf/","$remove$"],["/__anon_id|efl-uuid/","$remove$"],["_gal1","$remove$"],["IIElevenLabsDubbingResult","$remove$"],["/_analytics|ppid/","$remove$"],["/^_vid_(lr|t)$/","$remove$"],["/adthrive|ccuid|at_sticky_data|geo-location|OPTABLE_/","$remove$"],["/cnc_alien_invasion_code|pixelsLastFired/","$remove$"],["/^avoinspector/","$remove$"]];
const hostnamesMap = new Map([["tv5mondeplus.com",0],["t3n.de",1],["exambd.net",2],["jetpunk.com",3],["derstandard.at",4],["derstandard.de",4],["bravedown.com",5],["adultdeepfakes.com",6],["freewsad.com",7],["hdfilmcehennemi2.cx",8],["tradingview.com",9],["gputrends.net",10],["colnect.com",11],["fapeza.com",12],["doubtnut.com",13],["373news.com",[14,15,16,17,18,19]],["aikatu.jp",[14,15,16,17,18,19]],["aniroleplay.com",[14,15,16,17,18,19]],["ap7am.com",[14,15,16,17,18,19]],["areaconnect.com",[14,15,16,17,18,19]],["as-web.jp",[14,15,16,17,18,19]],["aucfree.com",[14,15,16,17,18,19]],["autoby.jp",[14,15,16,17,18,19]],["autoc-one.jp",[14,15,16,17,18,19]],["autofrage.net",[14,15,16,17,18,19]],["automobile-catalog.com",[14,15,16,17,18,19]],["bab.la",[14,15,16,17,18,19]],["babla.*",[14,15,16,17,18,19]],["badmouth1.com",[14,15,16,17,18,19]],["bamgosu.site",[14,15,16,17,18,19]],["bg-mania.jp",[14,15,16,17,18,19]],["bien.hu",[14,15,16,17,18,19]],["bleepingcomputer.com",[14,15,16,17,18,19]],["blogmura.com",[14,15,16,17,18,19]],["buzzfeed.com",[14,15,16,17,18,19]],["buzzfeednews.com",[14,15,16,17,18,19]],["cesoirtv.com",[14,15,16,17,18,19]],["chanto.jp.net",[14,15,16,17,18,19]],["cinema.com.my",[14,15,16,17,18,19]],["cinetrafic.fr",[14,15,16,17,18,19]],["cocokara-next.com",[14,15,16,17,18,19]],["collinsdictionary.com",[14,15,16,17,18,19]],["computerfrage.net",[14,15,16,17,18,19]],["convertcase.net",[14,15,16,17,18,19]],["cool-style.com.tw",[14,15,16,17,18,19]],["crosswordsolver.com",[14,15,16,17,18,19]],["cruciverba.it",[14,15,16,17,18,19]],["cults3d.com",[14,15,16,17,18,19]],["daily.co.jp",[14,15,16,17,18,19]],["dailynewshungary.com",[14,15,16,17,18,19]],["dayspedia.com",[14,15,16,17,18,19]],["dictionary.cambridge.org",[14,15,16,17,18,19]],["dnevno.hr",[14,15,16,17,18,19]],["dogdrip.net",[14,15,16,17,18,19]],["dolldivine.com",[14,15,16,17,18,19]],["donbalon.com",[14,15,16,17,18,19]],["dramabeans.com",[14,15,16,17,18,19]],["dropgame.jp",[14,15,16,17,18,19]],["dziennik.pl",[14,15,16,17,18,19]],["economictimes.com",[14,15,16,17,18,19]],["economist.co.kr",[14,15,16,17,18,19]],["edaily.co.kr",[14,15,16,17,18,19]],["etoday.co.kr",[14,15,16,17,18,19]],["etoland.co.kr",[14,15,16,17,18,19]],["eurointegration.com.ua",[14,15,16,17,18,19]],["ev-times.com",[14,15,16,17,18,19]],["filmibeat.com",[14,15,16,17,18,19]],["flatpanelshd.com",[14,15,16,17,18,19]],["fntimes.com",[14,15,16,17,18,19]],["footballtransfer.com.ua",[14,15,16,17,18,19]],["footballtransfer.ru",[14,15,16,17,18,19]],["forsal.pl",[14,15,16,17,18,19]],["freemcserver.net",[14,15,16,17,18,19]],["fxstreet-id.com",[14,15,16,17,18,19]],["fxstreet-vn.com",[14,15,16,17,18,19]],["fxstreet.*",[14,15,16,17,18,19]],["gazetaprawna.pl",[14,15,16,17,18,19]],["genialetricks.de",[14,15,16,17,18,19]],["giornalone.it",[14,15,16,17,18,19]],["globalrph.com",[14,15,16,17,18,19]],["gloria.hr",[14,15,16,17,18,19]],["golf-live.at",[14,15,16,17,18,19]],["goodreturns.in",[14,15,16,17,18,19]],["hb-nippon.com",[14,15,16,17,18,19]],["heureka.cz",[14,15,16,17,18,19]],["hometownstation.com",[14,15,16,17,18,19]],["honkailab.com",[14,15,16,17,18,19]],["horairesdouverture24.fr",[14,15,16,17,18,19]],["hotcopper.com.au",[14,15,16,17,18,19]],["idokep.hu",[14,15,16,17,18,19]],["infinityfree.com",[14,15,16,17,18,19]],["iplocation.net",[14,15,16,17,18,19]],["islamicfinder.org",[14,15,16,17,18,19]],["isplus.com",[14,15,16,17,18,19]],["issuya.com",[14,15,16,17,18,19]],["iusm.co.kr",[14,15,16,17,18,19]],["j-cast.com",[14,15,16,17,18,19]],["j-town.net",[14,15,16,17,18,19]],["j7p.jp",[14,15,16,17,18,19]],["jablickar.cz",[14,15,16,17,18,19]],["jamaicaobserver.com",[14,15,16,17,18,19]],["javatpoint.com",[14,15,16,17,18,19]],["jawapos.com",[14,15,16,17,18,19]],["jmty.jp",[14,15,16,17,18,19]],["joemonster.org",[14,15,16,17,18,19]],["judgehype.com",[14,15,16,17,18,19]],["jutarnji.hr",[14,15,16,17,18,19]],["kinmaweb.jp",[14,15,16,17,18,19]],["km77.com",[14,15,16,17,18,19]],["knowt.com",[14,15,16,17,18,19]],["kobe-journal.com",[14,15,16,17,18,19]],["kompasiana.com",[14,15,16,17,18,19]],["kreuzwortraetsel.de",[14,15,16,17,18,19]],["kurashinista.jp",[14,15,16,17,18,19]],["kurashiru.com",[14,15,16,17,18,19]],["kyoteibiyori.com",[14,15,16,17,18,19]],["lacuarta.com",[14,15,16,17,18,19]],["lakeshowlife.com",[14,15,16,17,18,19]],["laleggepertutti.it",[14,15,16,17,18,19]],["lamire.jp",[14,15,16,17,18,19]],["ldoceonline.com",[14,15,16,17,18,19]],["leckerschmecker.me",[14,15,16,17,18,19]],["lifehacker.jp",[14,15,16,17,18,19]],["listentotaxman.com",[14,15,16,17,18,19]],["livenewschat.eu",[14,15,16,17,18,19]],["loawa.com",[14,15,16,17,18,19]],["logicieleducatif.fr",[14,15,16,17,18,19]],["mahjongchest.com",[14,15,16,17,18,19]],["maketecheasier.com",[14,15,16,17,18,19]],["malaymail.com",[14,15,16,17,18,19]],["mamastar.jp",[14,15,16,17,18,19]],["manta.com",[14,15,16,17,18,19]],["mathplayzone.com",[14,15,16,17,18,19]],["mediaindonesia.com",[14,15,16,17,18,19]],["mentalfloss.com",[14,15,16,17,18,19]],["meteo60.fr",[14,15,16,17,18,19]],["midhudsonnews.com",[14,15,16,17,18,19]],["minesweeperquest.com",[14,15,16,17,18,19]],["minkou.jp",[14,15,16,17,18,19]],["missyusa.com",[14,15,16,17,18,19]],["mlbpark.donga.com",[14,15,16,17,18,19]],["moin.de",[14,15,16,17,18,19]],["motor-talk.de",[14,15,16,17,18,19]],["motscroises.fr",[14,15,16,17,18,19]],["muragon.com",[14,15,16,17,18,19]],["mykhel.com",[14,15,16,17,18,19]],["mynet.com",[14,15,16,17,18,19]],["nana-press.com",[14,15,16,17,18,19]],["nationaltoday.com",[14,15,16,17,18,19]],["nbadraft.net",[14,15,16,17,18,19]],["netzwelt.de",[14,15,16,17,18,19]],["newsinlevels.com",[14,15,16,17,18,19]],["newsweekjapan.jp",[14,15,16,17,18,19]],["niice-woker.com",[14,15,16,17,18,19]],["niketalk.com",[14,15,16,17,18,19]],["nouvelobs.com",[14,15,16,17,18,19]],["oeffnungszeitenbuch.de",[14,15,16,17,18,19]],["ondemandkorea.com",[14,15,16,17,18,19]],["onlineradiobox.com",[14,15,16,17,18,19]],["optionsprofitcalculator.com",[14,15,16,17,18,19]],["oraridiapertura24.it",[14,15,16,17,18,19]],["oxfordlearnersdictionaries.com",[14,15,16,17,18,19]],["palabr.as",[14,15,16,17,18,19]],["pashplus.jp",[14,15,16,17,18,19]],["persoenlich.com",[14,15,16,17,18,19]],["petitfute.com",[14,15,16,17,18,19]],["picksandparlays.net",[14,15,16,17,18,19]],["picrew.me",[14,15,16,17,18,19]],["powerpyx.com",[14,15,16,17,18,19]],["pptvhd36.com",[14,15,16,17,18,19]],["pravda.com.ua",[14,15,16,17,18,19]],["pressian.com",[14,15,16,17,18,19]],["profitline.hu",[14,15,16,17,18,19]],["puzzlegarage.com",[14,15,16,17,18,19]],["quefaire.be",[14,15,16,17,18,19]],["radio-australia.org",[14,15,16,17,18,19]],["radio-osterreich.at",[14,15,16,17,18,19]],["raenonx.cc",[14,15,16,17,18,19]],["raetsel-hilfe.de",[14,15,16,17,18,19]],["references.be",[14,15,16,17,18,19]],["relevantmagazine.com",[14,15,16,17,18,19]],["reportera.co.kr",[14,15,16,17,18,19]],["roleplayer.me",[14,15,16,17,18,19]],["rostercon.com",[14,15,16,17,18,19]],["samsungmagazine.eu",[14,15,16,17,18,19]],["scribens.com",[14,15,16,17,18,19]],["scribens.fr",[14,15,16,17,18,19]],["slashdot.org",[14,15,16,17,18,19]],["slobodnadalmacija.hr",[14,15,16,17,18,19]],["smsonline.cloud",[14,15,16,17,18,19]],["soccerdigestweb.com",[14,15,16,17,18,19]],["solitairehut.com",[14,15,16,17,18,19]],["sourceforge.net",[14,15,16,17,18,19]],["southhemitv.com",[14,15,16,17,18,19]],["sportalkorea.com",[14,15,16,17,18,19]],["sportanalytic.com",[14,15,16,17,18,19]],["sportsrec.com",[14,15,16,17,18,19]],["sportsseoul.com",[14,15,16,17,18,19]],["szamoldki.hu",[14,15,16,17,18,19]],["talkwithstranger.com",[14,15,16,17,18,19]],["tasty.co",[14,15,16,17,18,19]],["tbsradio.jp",[14,15,16,17,18,19]],["text-compare.com",[14,15,16,17,18,19]],["thatgossip.com",[14,15,16,17,18,19]],["the-crossword-solver.com",[14,15,16,17,18,19]],["thedigestweb.com",[14,15,16,17,18,19]],["thefreebieguy.com",[14,15,16,17,18,19]],["tportal.hr",[14,15,16,17,18,19]],["traicy.com",[14,15,16,17,18,19]],["transparentcalifornia.com",[14,15,16,17,18,19]],["transparentnevada.com",[14,15,16,17,18,19]],["tunebat.com",[14,15,16,17,18,19]],["tvtv.ca",[14,15,16,17,18,19]],["tvtv.us",[14,15,16,17,18,19]],["tweaktown.com",[14,15,16,17,18,19]],["twn.hu",[14,15,16,17,18,19]],["tyda.se",[14,15,16,17,18,19]],["tz.de",[14,15,16,17,18,19]],["ufret.jp",[14,15,16,17,18,19]],["upmedia.mg",[14,15,16,17,18,19]],["verkaufsoffener-sonntag.com",[14,15,16,17,18,19]],["w.grapps.me",[14,15,16,17,18,19]],["watchdocumentaries.com",[14,15,16,17,18,19]],["webdesignledger.com",[14,15,16,17,18,19]],["welt.de",[14,15,16,17,18,19]],["wfmz.com",[14,15,16,17,18,19]],["winfuture.de",[14,15,16,17,18,19]],["word-grabber.com",[14,15,16,17,18,19]],["worldhistory.org",[14,15,16,17,18,19]],["worldjournal.com",[14,15,16,17,18,19]],["wort-suchen.de",[14,15,16,17,18,19]],["woxikon.*",[14,15,16,17,18,19]],["yakkun.com",[14,15,16,17,18,19]],["ygosu.com",[14,15,16,17,18,19]],["yutura.net",[14,15,16,17,18,19]],["zagreb.info",[14,15,16,17,18,19]],["zakzak.co.jp",[14,15,16,17,18,19]],["2chblog.jp",[14,15,16,17,18,19]],["2monkeys.jp",[14,15,16,17,18,19]],["46matome.net",[14,15,16,17,18,19]],["akb48glabo.com",[14,15,16,17,18,19]],["akb48matomemory.com",[14,15,16,17,18,19]],["alfalfalfa.com",[14,15,16,17,18,19]],["all-nationz.com",[14,15,16,17,18,19]],["anihatsu.com",[14,15,16,17,18,19]],["aqua2ch.net",[14,15,16,17,18,19]],["blog.esuteru.com",[14,15,16,17,18,19]],["blog.livedoor.jp",[14,15,16,17,18,19]],["blog.jp",[14,15,16,17,18,19]],["blogo.jp",[14,15,16,17,18,19]],["chaos2ch.com",[14,15,16,17,18,19]],["choco0202.work",[14,15,16,17,18,19]],["crx7601.com",[14,15,16,17,18,19]],["danseisama.com",[14,15,16,17,18,19]],["dareda.net",[14,15,16,17,18,19]],["digital-thread.com",[14,15,16,17,18,19]],["doorblog.jp",[14,15,16,17,18,19]],["exawarosu.net",[14,15,16,17,18,19]],["fgochaldeas.com",[14,15,16,17,18,19]],["football-2ch.com",[14,15,16,17,18,19]],["gekiyaku.com",[14,15,16,17,18,19]],["golog.jp",[14,15,16,17,18,19]],["hacchaka.net",[14,15,16,17,18,19]],["heartlife-matome.com",[14,15,16,17,18,19]],["liblo.jp",[14,15,16,17,18,19]],["fesoku.net",[14,15,16,17,18,19]],["fiveslot777.com",[14,15,16,17,18,19]],["gamejksokuhou.com",[14,15,16,17,18,19]],["girlsreport.net",[14,15,16,17,18,19]],["girlsvip-matome.com",[14,15,16,17,18,19]],["grasoku.com",[14,15,16,17,18,19]],["gundamlog.com",[14,15,16,17,18,19]],["honyaku-channel.net",[14,15,16,17,18,19]],["ikarishintou.com",[14,15,16,17,18,19]],["imas-cg.net",[14,15,16,17,18,19]],["imihu.net",[14,15,16,17,18,19]],["inutomo11.com",[14,15,16,17,18,19]],["itainews.com",[14,15,16,17,18,19]],["itaishinja.com",[14,15,16,17,18,19]],["jin115.com",[14,15,16,17,18,19]],["jisaka.com",[14,15,16,17,18,19]],["jnews1.com",[14,15,16,17,18,19]],["jumpsokuhou.com",[14,15,16,17,18,19]],["jyoseisama.com",[14,15,16,17,18,19]],["keyakizaka46matomemory.net",[14,15,16,17,18,19]],["kidan-m.com",[14,15,16,17,18,19]],["kijoden.com",[14,15,16,17,18,19]],["kijolariat.net",[14,15,16,17,18,19]],["kijolifehack.com",[14,15,16,17,18,19]],["kijomatomelog.com",[14,15,16,17,18,19]],["kijyokatu.com",[14,15,16,17,18,19]],["kijyomatome.com",[14,15,16,17,18,19]],["kijyomatome-ch.com",[14,15,16,17,18,19]],["kijyomita.com",[14,15,16,17,18,19]],["kirarafan.com",[14,15,16,17,18,19]],["kitimama-matome.net",[14,15,16,17,18,19]],["kitizawa.com",[14,15,16,17,18,19]],["konoyubitomare.jp",[14,15,16,17,18,19]],["kotaro269.com",[14,15,16,17,18,19]],["kyousoku.net",[14,15,16,17,18,19]],["ldblog.jp",[14,15,16,17,18,19]],["livedoor.biz",[14,15,16,17,18,19]],["livedoor.blog",[14,15,16,17,18,19]],["majikichi.com",[14,15,16,17,18,19]],["matacoco.com",[14,15,16,17,18,19]],["matomeblade.com",[14,15,16,17,18,19]],["matomelotte.com",[14,15,16,17,18,19]],["matometemitatta.com",[14,15,16,17,18,19]],["mojomojo-licarca.com",[14,15,16,17,18,19]],["morikinoko.com",[14,15,16,17,18,19]],["nandemo-uketori.com",[14,15,16,17,18,19]],["netatama.net",[14,15,16,17,18,19]],["news-buzz1.com",[14,15,16,17,18,19]],["news30over.com",[14,15,16,17,18,19]],["nmb48-mtm.com",[14,15,16,17,18,19]],["norisoku.com",[14,15,16,17,18,19]],["npb-news.com",[14,15,16,17,18,19]],["ocsoku.com",[14,15,16,17,18,19]],["okusama-kijyo.com",[14,15,16,17,18,19]],["onihimechan.com",[14,15,16,17,18,19]],["orusoku.com",[14,15,16,17,18,19]],["otakomu.jp",[14,15,16,17,18,19]],["otoko-honne.com",[14,15,16,17,18,19]],["oumaga-times.com",[14,15,16,17,18,19]],["outdoormatome.com",[14,15,16,17,18,19]],["pachinkopachisro.com",[14,15,16,17,18,19]],["paranormal-ch.com",[14,15,16,17,18,19]],["recosoku.com",[14,15,16,17,18,19]],["s2-log.com",[14,15,16,17,18,19]],["saikyo-jump.com",[14,15,16,17,18,19]],["shuraba-matome.com",[14,15,16,17,18,19]],["ske48matome.net",[14,15,16,17,18,19]],["squallchannel.com",[14,15,16,17,18,19]],["sukattojapan.com",[14,15,16,17,18,19]],["sumaburayasan.com",[14,15,16,17,18,19]],["sutekinakijo.com",[14,15,16,17,18,19]],["usi32.com",[14,15,16,17,18,19]],["uwakich.com",[14,15,16,17,18,19]],["uwakitaiken.com",[14,15,16,17,18,19]],["vault76.info",[14,15,16,17,18,19]],["vipnews.jp",[14,15,16,17,18,19]],["vippers.jp",[14,15,16,17,18,19]],["vipsister23.com",[14,15,16,17,18,19]],["vtubernews.jp",[14,15,16,17,18,19]],["watarukiti.com",[14,15,16,17,18,19]],["world-fusigi.net",[14,15,16,17,18,19]],["zakuzaku911.com",[14,15,16,17,18,19]],["zch-vip.com",[14,15,16,17,18,19]],["mindbodygreen.com",20],["musescore.com",21],["elconfidencial.com",22],["journaldemontreal.com",22],["aamulehti.fi",23],["cbsnews.com",24],["680thefan.com",25],["katu.com",26],["darntough.com",27],["mais.sbt.com.br",28],["boredpanda.com",29],["healf.com",30],["vnexpress.net",31],["briefly.co.za",32],["carparts.com",33],["hpplus.jp",34],["makemytrip.com",[35,36]],["shoebacca.com",37],["sky.pro",38],["lexpress.fr",39],["aihumanizer.ai",40],["humbot.ai",40],["allrecipes.com",41],["4game.com",42],["4game.ru",42],["shutterstock.com",43],["mobalytics.gg",44],["hopper.com",45],["mumuplayer.com",46],["theverge.com",47],["goodcar.com",48],["ici.radio-canada.ca",49],["soundcloud.com",50],["mykitsch.com",51],["huntress.com",52],["flo.com.tr",53],["gala.com",54],["elevenlabs.io",55],["mirror.co.uk",56],["farmersjournal.ie",57],["laurelberninteriors.com",58],["evropa2.cz",59],["vogue.com",60]]);
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
