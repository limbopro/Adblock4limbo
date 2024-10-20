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

// ruleset: annoyances-cookies

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_trustedClickElement = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [[".didomi-continue-without-agreeing","","1000"],["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]","","500"],["button[title=\"REJECT ALL\"]","","1000"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["a.cc-dismiss","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000"],["button[title^=\"Continuer sans accepter\"]"],["button[data-tracking-name=\"cookie-preferences-mloi-initial-opt-out\"]"],["button[data-baseweb=\"button\"][data-tracking-name=\"cookie-preferences-sloo-opt-out\"]","","1000"],["button[kind=\"secondary\"][data-test=\"cookie-necessary-button\"]","","1000"],["button[data-cookiebanner=\"accept_only_essential_button\"]","","1000"],[":is(.didomi-continue-without-agreeing, #didomi-notice-disagree-button)","","2000"],["button.cassie-reject-all","","1000"],[".almacmp-button--settings, #purposeConsents1, #purposeConsents2, #purposeConsents3, #purposeConsents4, #purposeConsents5, #purposeConsents6, #purposeConsents7, #purposeConsents8, #purposeConsents9, #purposeConsents10, #purposeConsents11, #specialFeatureConsents1, #specialFeatureConsents2, #almacmp-save-layer2"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["#onetrust-accept-btn-handler"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],["[data-paywall-notifier=\"consent-agreetoall\"]","","1000"],["ytd-button-renderer.ytd-consent-bump-v2-lightbox + ytd-button-renderer.ytd-consent-bump-v2-lightbox button[style][aria-label][title]","","1000"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],["#cmp-btn-accept","!cookie:/^gpt_ppid[^=]+=/","5000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],[".iubenda-cs-customize-btn, #iubFooterBtn"],[".privacy-popup > div > button","","2000"],[".pg-configure-button[title=\"Instellen\"]","","500"],["button.message-button[title=\"Mijn instellingen beheren\"]","","500"],["button[aria-checked=\"false\"][aria-label^=\"Social\"], button.sp_choice_type_SAVE_AND_EXIT","","500"],["#pg-shadow-host >>> #pg-configure-btn, #pg-shadow-host >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-shadow-host >>> button#pg-save-preferences-btn"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],[".btns-container > button[title=\"Tilpass\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button[data-gdpr-expression=\"acceptAll\"]"],["button[title=\"Accept all\"i]"],[".gdpr-btn.small-right, .thirdlayer .gdpr-btn-lbl"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[title^=\"Alle akzeptieren\"]"],["button[aria-label=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".szn-cmp-dialog-container >>> button[data-testid=\"cw-button-non-targeted-ad\"]","","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","1000"],["button.iubenda-cs-close-btn"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["button[mode=\"primary\"][data-tmdatatrack=\"privacy-cookie\"]","","1000"],["button[class*=\"cipa-accept-btn\"]","","1000"],["button[onclick=\"Didomi.setUserAgreeToAll();\"]","","1000"],["a[href=\"javascript:Didomi.setUserAgreeToAll();\"]","","1000"],["#didomi-notice-agree-button","","1000"],["span.didomi-continue-without-agreeing","","1000"],["#onetrust-pc-btn-handler"],[".save-preference-btn-handler","","1000"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[title*=\"Zustimmen\"]","","1000"],["#acceptAllMain","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["button[title*=\"AGREE\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline"],["button#consent_wall_optin"],["span#cmpbntyestxt","","1000"],["button[title=\"Alle Akzeptieren\"]","","1000"],["button[title=\"Alle akzeptieren\"]","","1000"],["button#btn-gdpr-accept"],["a[href][onclick=\"ov.cmp.acceptAllConsents()\"]","","1000"],["button.fc-primary-button","","1000"],["button[data-id=\"save-all-pur\"]","","1000"],["button.button__acceptAll"],["button.button__skip"],["button.accept-button"]];

const hostnamesMap = new Map([["auto.it",0],["consent.youtube.com",[1,2]],["sourcepointcmp.bloomberg.com",[3,4,5]],["sourcepointcmp.bloomberg.co.jp",[3,4,5]],["giga.de",5],["cmpv2.standard.co.uk",[6,7]],["cmpv2.independent.co.uk",[8,9,10]],["wetransfer.com",[11,12]],["spiegel.de",13],["www.nytimes.com",14],["consent.yahoo.com",15],["tumblr.com",16],["fplstatistics.co.uk",17],["e-shop.leonidas.com",18],["cdn.privacy-mgmt.com",[19,20,38,39,40,77,83,85,91,96,114,116,117,118]],["festoolcanada.com",21],["dr-beckmann.com",21],["consent.ladbible.com",[22,23]],["consent.unilad.com",[22,23]],["consent.gamingbible.com",[22,23]],["consent.sportbible.com",[22,23]],["consent.tyla.com",[22,23]],["consent.ladbiblegroup.com",[22,23]],["m2o.it",24],["deejay.it",24],["capital.it",24],["ilmattino.it",[24,25]],["leggo.it",[24,25]],["libero.it",24],["tiscali.it",24],["consent-manager.ft.com",[26,27]],["tf1info.fr",30],["ubereats.com",31],["uber.com",32],["lego.com",33],["ai.meta.com",34],["publicsenat.fr",35],["lilly.com",36],["ampparit.com",37],["arvopaperi.fi",37],["iltalehti.fi",37],["kauppalehti.fi",37],["mediuutiset.fi",37],["mikrobitti.fi",37],["talouselama.fi",37],["tekniikkatalous.fi",37],["tivi.fi",37],["uusisuomi.fi",37],["digi24.ro",41],["digisport.ro",41],["digitalfoundry.net",41],["egx.net",41],["eurogamer.it",41],["mail.com",41],["mcmcomiccon.com",41],["nintendolife.com",41],["oe24.at",41],["paxsite.com",41],["player.pl",41],["purexbox.com",41],["pushsquare.com",41],["starwarscelebration.com",41],["thehaul.com",41],["timeextension.com",41],["dicebreaker.com",[42,43]],["eurogamer.cz",[42,43]],["eurogamer.es",[42,43]],["eurogamer.net",[42,43]],["eurogamer.nl",[42,43]],["eurogamer.pl",[42,43]],["eurogamer.pt",[42,43]],["gamesindustry.biz",[42,43]],["jelly.deals",[42,43]],["reedpop.com",[42,43]],["rockpapershotgun.com",[42,43]],["thepopverse.com",[42,43]],["vg247.com",[42,43]],["videogameschronicle.com",[42,43]],["eurogamer.de",44],["roadtovr.com",45],["mundodeportivo.com",46],["m.youtube.com",47],["www.youtube.com",47],["corriere.it",48],["gazzetta.it",48],["oggi.it",48],["cmp.sky.it",49],["tennisassa.fi",50],["formula1.com",51],["f1racing.pl",52],["consent-pref.trustarc.com",54],["highlights.legaseriea.it",55],["calciomercato.com",55],["sosfanta.com",56],["wetter.com",59],["youmath.it",60],["pip.gov.pl",61],["forbes.com",62],["mediaset.it",63],["fortune.com",64],["cmp.dpgmedia.nl",[65,67]],["cmp.dpgmedia.be",[65,67]],["cmp.ad.nl",[65,67]],["cmp.autotrack.nl",[65,67]],["cmp.autoweek.nl",[65,67]],["cmp.bd.nl",[65,67]],["cmp.bndestem.nl",[65,67]],["cmp.demorgen.be",[65,67]],["cmp.deondernemer.nl",[65,67]],["cmp.destentor.nl",[65,67]],["cmp.ed.nl",[65,67]],["cmp.gaspedaal.nl",[65,67]],["cmp.gelderlander.nl",[65,67]],["cmp.hln.be",[65,67]],["cmp.humo.be",[65,67]],["cmp.margriet.nl",[65,67]],["cmp.nu.nl",[65,67]],["cmp.qmusic.nl",[65,67]],["cmp.stijlvol-wonen.com",[65,67]],["cmp.trouw.nl",[65,67]],["cmp.tubantia.nl",[65,67]],["cmp.vtwonen.be",[65,67]],["cmp.vtwonen.nl",[65,67]],["cmp.pzc.nl",[65,67]],["cmp.zozitdat.nl",[65,67]],["cmp-sp.vrt.be",[66,67]],["myprivacy.dpgmedia.nl",68],["dpgmediagroup.com",68],["story.nl",68],["veronicasuperguide.nl",68],["ilrestodelcarlino.it",69],["quotidiano.net",69],["lanazione.it",69],["ilgiorno.it",69],["iltelegrafolivorno.it",69],["frandroid.com",70],["nutri-plus.de",71],["aa.com",72],["consent.capital.fr",73],["programme-tv.net",73],["cmp.e24.no",[74,75]],["cmp.vg.no",[74,75]],["huffingtonpost.fr",76],["geopop.it",78],["fanpage.it",78],["rainews.it",79],["remarkable.com",80],["netzwelt.de",81],["money.it",82],["cmp.computerbild.de",84],["cmp-sp.siegener-zeitung.de",84],["cmp-sp.sportbuzzer.de",84],["eneco.nl",86],["deichmann.com",87],["blackpoolgazette.co.uk",88],["lep.co.uk",88],["northamptonchron.co.uk",88],["scotsman.com",88],["shieldsgazette.com",88],["thestar.co.uk",88],["portsmouth.co.uk",88],["sunderlandecho.com",88],["northernirelandworld.com",88],["3addedminutes.com",88],["anguscountyworld.co.uk",88],["banburyguardian.co.uk",88],["bedfordtoday.co.uk",88],["biggleswadetoday.co.uk",88],["bucksherald.co.uk",88],["burnleyexpress.net",88],["buxtonadvertiser.co.uk",88],["chad.co.uk",88],["daventryexpress.co.uk",88],["derbyshiretimes.co.uk",88],["derbyworld.co.uk",88],["derryjournal.com",88],["dewsburyreporter.co.uk",88],["doncasterfreepress.co.uk",88],["falkirkherald.co.uk",88],["fifetoday.co.uk",88],["glasgowworld.com",88],["halifaxcourier.co.uk",88],["harboroughmail.co.uk",88],["harrogateadvertiser.co.uk",88],["hartlepoolmail.co.uk",88],["hemeltoday.co.uk",88],["hucknalldispatch.co.uk",88],["lancasterguardian.co.uk",88],["leightonbuzzardonline.co.uk",88],["lincolnshireworld.com",88],["liverpoolworld.uk",88],["londonworld.com",88],["lutontoday.co.uk",88],["manchesterworld.uk",88],["meltontimes.co.uk",88],["miltonkeynes.co.uk",88],["newcastleworld.com",88],["newryreporter.com",88],["newsletter.co.uk",88],["northantstelegraph.co.uk",88],["northumberlandgazette.co.uk",88],["nottinghamworld.com",88],["peterboroughtoday.co.uk",88],["rotherhamadvertiser.co.uk",88],["stornowaygazette.co.uk",88],["surreyworld.co.uk",88],["thescarboroughnews.co.uk",88],["thesouthernreporter.co.uk",88],["totallysnookered.com",88],["wakefieldexpress.co.uk",88],["walesworld.com",88],["warwickshireworld.com",88],["wigantoday.net",88],["worksopguardian.co.uk",88],["yorkshireeveningpost.co.uk",88],["yorkshirepost.co.uk",88],["eurocard.com",89],["saseurobonusmastercard.se",90],["tver.jp",92],["linkedin.com",93],["elmundo.es",94],["mapillary.com",95],["cmp.seznam.cz",97],["raiplay.it",98],["derstandard.at",99],["derstandard.de",99],["ansa.it",100],["delladio.it",100],["huffingtonpost.it",100],["lastampa.it",100],["movieplayer.it",100],["multiplayer.it",100],["repubblica.it",100],["tomshw.it",100],["tuttoandroid.net",100],["tuttotech.net",100],["ilgazzettino.it",101],["ilmessaggero.it",101],["ilsecoloxix.it",101],["privacy.motorradonline.de",102],["dailystar.co.uk",[103,104,105,106]],["mirror.co.uk",[103,104,105,106]],["jeuxvideo.com",107],["idnes.cz",108],["20minutos.es",109],["20minutes.fr",109],["24sata.hr",109],["abc.es",109],["actu.fr",109],["autopista.es",109],["belfasttelegraph.co.uk",109],["bonduelle.it",109],["bonniernews.se",109],["cadenaser.com",109],["ciclismoafondo.es",109],["cnews.fr",109],["cope.es",109],["decathlon.nl",109],["decathlon.pl",109],["diepresse.com",109],["dnevnik.hr",109],["dumpert.nl",109],["ebuyclub.com",109],["edreams.de",109],["edreams.net",109],["elcomercio.es",109],["elconfidencial.com",109],["eldesmarque.com",109],["elespanol.com",109],["elpais.com",109],["elpais.es",109],["engadget.com",109],["euronews.com",109],["expressen.se",109],["france24.com",109],["ghacks.net",109],["gva.be",109],["hbvl.be",109],["krone.at",109],["kurier.at",109],["lalibre.be",109],["ledauphine.com",109],["lejdd.fr",109],["libremercado.com",109],["marmiton.org",109],["metronieuws.nl",109],["nicematin.com",109],["nieuwsblad.be",109],["numerama.com",109],["radiofrance.fr",109],["rankia.com",109],["rfi.fr",109],["rossmann.pl",109],["rtbf.be",109],["rtl.lu",109],["science-et-vie.com",109],["sensacine.com",109],["shure.com",109],["silicon.es",109],["sncf-connect.com",109],["sport.es",109],["telegraaf.nl",109],["trailrun.es",109],["meteofrance.com",110],["ryobitools.eu",[111,112]],["americanexpress.com",113],["golem.de",114],["antena3.com",115],["antena3internacional.com",115],["atresmedia.com",115],["atresmediapublicidad.com",115],["atresmediastudios.com",115],["atresplayer.com",115],["correryfitness.com",115],["europafm.com",115],["flooxernow.com",115],["lasexta.com",115],["melodia-fm.com",115],["ondacero.es",115],["1und1.de",120],["infranken.de",121],["cmp.chip.de",122],["cmp.petbook.de",123],["estadiodeportivo.com",124],["kicker.de",125],["formulatv.com",126],["web.de",127],["lefigaro.fr",128],["linternaute.com",129],["consent.caminteresse.fr",130]]);

const entitiesMap = new Map([["consent.google",1],["festool",21],["hertz",28],["mediamarkt",29],["gmx",41],["music.amazon",53],["chrono24",[57,58]],["americanairlines",72],["degiro",119]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function trustedClickElement(
    selectors = '',
    extraMatch = '',
    delay = ''
) {
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('trusted-click-element', selectors, extraMatch, delay);

    if ( extraMatch !== '' ) {
        const assertions = extraMatch.split(',').map(s => {
            const pos1 = s.indexOf(':');
            const s1 = pos1 !== -1 ? s.slice(0, pos1) : s;
            const not = s1.startsWith('!');
            const type = not ? s1.slice(1) : s1;
            const s2 = pos1 !== -1 ? s.slice(pos1+1).trim() : '';
            if ( s2 === '' ) { return; }
            const out = { not, type };
            const match = /^\/(.+)\/(i?)$/.exec(s2);
            if ( match !== null ) {
                out.re = new RegExp(match[1], match[2] || undefined);
                return out;
            }
            const pos2 = s2.indexOf('=');
            const key = pos2 !== -1 ? s2.slice(0, pos2).trim() : s2;
            const value = pos2 !== -1 ? s2.slice(pos2+1).trim() : '';
            out.re = new RegExp(`^${this.escapeRegexChars(key)}=${this.escapeRegexChars(value)}`);
            return out;
        }).filter(details => details !== undefined);
        const allCookies = assertions.some(o => o.type === 'cookie')
            ? getAllCookiesFn()
            : [];
        const allStorageItems = assertions.some(o => o.type === 'localStorage')
            ? getAllLocalStorageFn()
            : [];
        const hasNeedle = (haystack, needle) => {
            for ( const { key, value } of haystack ) {
                if ( needle.test(`${key}=${value}`) ) { return true; }
            }
            return false;
        };
        for ( const { not, type, re } of assertions ) {
            switch ( type ) {
            case 'cookie':
                if ( hasNeedle(allCookies, re) === not ) { return; }
                break;
            case 'localStorage':
                if ( hasNeedle(allStorageItems, re) === not ) { return; }
                break;
            }
        }
    }

    const getShadowRoot = elem => {
        // Firefox
        if ( elem.openOrClosedShadowRoot ) {
            return elem.openOrClosedShadowRoot;
        }
        // Chromium
        if ( typeof chrome === 'object' ) {
            if ( chrome.dom && chrome.dom.openOrClosedShadowRoot ) {
                return chrome.dom.openOrClosedShadowRoot(elem);
            }
        }
        return null;
    };

    const querySelectorEx = (selector, context = document) => {
        const pos = selector.indexOf(' >>> ');
        if ( pos === -1 ) { return context.querySelector(selector); }
        const outside = selector.slice(0, pos).trim();
        const inside = selector.slice(pos + 5).trim();
        const elem = context.querySelector(outside);
        if ( elem === null ) { return null; }
        const shadowRoot = getShadowRoot(elem);
        return shadowRoot && querySelectorEx(inside, shadowRoot);
    };

    const selectorList = selectors.split(/\s*,\s*/)
        .filter(s => {
            try {
                void querySelectorEx(s);
            } catch(_) {
                return false;
            }
            return true;
        });
    if ( selectorList.length === 0 ) { return; }

    const clickDelay = parseInt(delay, 10) || 1;
    const t0 = Date.now();
    const tbye = t0 + 10000;
    let tnext = selectorList.length !== 1 ? t0 : t0 + clickDelay;

    const terminate = ( ) => {
        selectorList.length = 0;
        next.stop();
        observe.stop();
    };

    const next = notFound => {
        if ( selectorList.length === 0 ) {
            safe.uboLog(logPrefix, 'Completed');
            return terminate();
        }
        const tnow = Date.now();
        if ( tnow >= tbye ) {
            safe.uboLog(logPrefix, 'Timed out');
            return terminate();
        }
        if ( notFound ) { observe(); }
        const delay = Math.max(notFound ? tbye - tnow : tnext - tnow, 1);
        next.timer = setTimeout(( ) => {
            next.timer = undefined;
            process();
        }, delay);
        safe.uboLog(logPrefix, `Waiting for ${selectorList[0]}...`);
    };
    next.stop = ( ) => {
        if ( next.timer === undefined ) { return; }
        clearTimeout(next.timer);
        next.timer = undefined;
    };

    const observe = ( ) => {
        if ( observe.observer !== undefined ) { return; }
        observe.observer = new MutationObserver(( ) => {
            if ( observe.timer !== undefined ) { return; }
            observe.timer = setTimeout(( ) => {
                observe.timer = undefined;
                process();
            }, 20);
        });
        observe.observer.observe(document, {
            attributes: true,
            childList: true,
            subtree: true,
        });
    };
    observe.stop = ( ) => {
        if ( observe.timer !== undefined ) {
            clearTimeout(observe.timer);
            observe.timer = undefined;
        }
        if ( observe.observer ) {
            observe.observer.disconnect();
            observe.observer = undefined;
        }
    };

    const process = ( ) => {
        next.stop();
        if ( Date.now() < tnext ) { return next(); }
        const selector = selectorList.shift();
        if ( selector === undefined ) { return terminate(); }
        const elem = querySelectorEx(selector);
        if ( elem === null ) {
            selectorList.unshift(selector);
            return next(true);
        }
        safe.uboLog(logPrefix, `Clicked ${selector}`);
        elem.click();
        tnext += clickDelay;
        next();
    };

    runAtHtmlElementFn(process);
}

function getAllCookiesFn() {
    return document.cookie.split(/\s*;\s*/).map(s => {
        const pos = s.indexOf('=');
        if ( pos === 0 ) { return; }
        if ( pos === -1 ) { return `${s.trim()}=`; }
        const key = s.slice(0, pos).trim();
        const value = s.slice(pos+1).trim();
        return { key, value };
    }).filter(s => s !== undefined);
}

function getAllLocalStorageFn(which = 'localStorage') {
    const storage = self[which];
    const out = [];
    for ( let i = 0; i < storage.length; i++ ) {
        const key = storage.key(i);
        const value = storage.getItem(key);
        return { key, value };
    }
    return out;
}

function runAtHtmlElementFn(fn) {
    if ( document.documentElement ) {
        fn();
        return;
    }
    const observer = new MutationObserver(( ) => {
        observer.disconnect();
        fn();
    });
    observer.observe(document, { childList: true });
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
    try { trustedClickElement(...argsList[i]); }
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

const targetWorld = 'ISOLATED';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_trustedClickElement();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_trustedClickElement = cloneInto([
            [ '(', uBOL_trustedClickElement.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_trustedClickElement);
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
    delete page.uBOL_trustedClickElement;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
