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

/* jshint esversion:11 */
/* global cloneInto */

'use strict';

// ruleset: annoyances-cookies

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_setConstant = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["cicc.cookie_cat_statistic","true"],["window.consentManagementEnabled","false"],["BrockmanAllowedCookies.targeting","true"],["BrockmanAllowedCookies.functional","true"],["settings.consent","true"],["HB.CookieSettings.init","noopFunc"],["WHT.ShowConsentForm","trueFunc"],["useGDPR","false"],["xv.disclaimer.displayCookiePopup","noopFunc"],["realCookieBanner","undefined"],["amw.isCookieConsentAccepted","true"],["amw.isMarketingCookiesAccepted","false"],["amw.isAnalyticsCookiesAccepted","false"],["window.cmpmngr.setConsentViaBtn","noopFunc"],["tcfAllowUseCookies","true"],["cicc.cookie_cat_functional","true"],["cicc.cookie_cat_marketing","true"],["tweakersConfig.userConfiguredConsent.youtube.approved","true"],["tweakersConfig.userConfiguredConsent.omny.approved","true"],["tweakersConfig.userConfiguredConsent.pcnltelecom.approved","true"],["tweakersConfig.userConfiguredConsent.googlemaps.approved","true"],["tweakersConfig.userConfiguredConsent.streamable.approved","true"],["tweakersConfig.userConfiguredConsent.soundcloud.approved","true"],["tweakersConfig.userConfiguredConsent.knightlab.approved","true"],["yleConsentSdk._consentSdk._embedded_social_media","true"],["yleConsentSdk.show","noopFunc"],["cockieConsentManagement","noopFunc"],["window.scrollTo","noopFunc"],["flagTcfLoaded","true"]];

const hostnamesMap = new Map([["elgiganten.dk",0],["elgiganten.se",0],["elkjop.no",0],["gigantti.fi",0],["historianet.fi",[0,15,16]],["tieku.fi",[0,15,16]],["fruugo.at",1],["fruugo.be",1],["fruugo.cz",1],["fruugo.de",1],["fruugo.dk",1],["fruugo.es",1],["fruugo.fi",1],["fruugo.gr",1],["fruugo.hu",1],["fruugo.ie",1],["fruugo.it",1],["fruugo.lu",1],["fruugo.nl",1],["fruugo.pl",1],["fruugo.pt",1],["fruugo.ro",1],["fruugo.sk",1],["eurogamer.nl",[2,3]],["eurogamer.es",[2,3]],["eurogamer.cz",[2,3]],["eurogamer.net",[2,3]],["eurogamer.pl",[2,3]],["eurogamer.pt",[2,3]],["rockpapershotgun.com",[2,3]],["vg247.com",[2,3]],["vadhander.hogakusten.com",4],["vadhander.kramfors.se",4],["stewes.de",5],["gadgethacks.com",6],["qastack.fr",7],["xvideos.com",8],["pulpe.eu",9],["ilonpolku.fi",9],["oculyze.net",9],["mikanews.de",9],["bitreporter.de",9],["zertificon.com",9],["kieruneknorwegia.pl",9],["mannschaft.com",9],["windowspower.de",9],["bbfun.de",9],["schreiners-it.de",9],["infobroker.de",9],["1000-haushaltstipps.de",9],["theoblog.de",9],["notebook-doktor.de",9],["base-chat.de",9],["campingbuddies.de",9],["saunahuus.de",9],["krefindo.de",9],["tuhlteim.de",9],["getaawp.com",9],["wrestling-point.de",9],["englishradar.com",9],["wt-onlineakademie.de",9],["readyforboarding.pl",9],["thegeekfreaks.de",9],["picockpit.com",9],["der-windows-papst.de",9],["kjr-pi.de",9],["splendid-internet.de",9],["do.de",9],["compact-online.de",9],["fuckyeah.shop",9],["kiyoua-news.de",9],["tourismus-uckermark.de",9],["angelmagazin.de",9],["technik-hauptstadt.de",9],["tuhlteim-pedia.de",9],["fobizz.com",9],["fabian-heinz-webdesign.de",9],["jpgames.de",9],["kulturpass-kino.de",9],["aspies.de",9],["frixtender.de",9],["brauerei-strate.de",9],["hookahx.de",9],["frickeldave.de",9],["leben-mit-ohne.de",9],["ilyabiz.com",9],["neuneinhalb.org",9],["baycix.de",9],["basta.berlin",9],["herrlichergarten.de",9],["spieltraum-berlin.de",9],["patria.net",9],["blog.ipc-computer.de",9],["gaming-grounds.de",9],["ekiwi-blog.de",9],["erp-up.de",9],["philosophia-perennis.com",9],["tecsafe.de",9],["devm.io",9],["schnittmuster-datenbank.de",9],["rosgovas.com",9],["blu-ray-rezensionen.net",9],["bricksforge.io",9],["lenovocampus.de",9],["rotlichtaus.de",9],["louisreynier.com",9],["stricken-online.com",9],["haarausfall-stopp.com",9],["cargoe.at",9],["pandore-gendarmerie.org",9],["pureselfmade.com",9],["fild.de",9],["m-m-m.de",9],["yogainspires.co.uk",9],["youngimages.de",9],["katzenbaumdesign.de",9],["goerlach-gmbh.com",9],["lichtempfindlich.org",9],["gasthaus-schmidmayer.de",9],["narrwalla.de",9],["efg-passau.de",9],["gefahrgutjaeger.de",9],["locafrique-sf.com",9],["financeads.com",9],["tutonaut.de",9],["freegossip.gr",9],["ltmemory.de",9],["randombrick.de",9],["playcentral.de",9],["nachbelichtet.com",9],["philosophenlexikon.de",9],["schulebruetten.ch",9],["almacenessanagustin.com",9],["autoverwertung-berk.de",9],["gosch.de",9],["ousuca.com",9],["stw-langenfeld.de",9],["yurishop.it",9],["europace.de",9],["autobrinkmann.de",9],["move-ment.at",9],["techniknews.net",9],["epages.com",9],["thinkingwithyou.com",9],["mfu-pilotenclub.at",9],["artkon.de",9],["running-green.de",9],["danielederosa.de",9],["ivfp.de",9],["bs-achern.de",9],["swiss-commerce.ch",9],["asga.ch",9],["ellasblog.de",9],["gamenite.de",9],["mmo-sankar.de",9],["istaf-indoor.de",9],["iqskitchen.de",9],["ekiwi.de",9],["nordlicht-ev.de",9],["zimmerwetter.de",9],["pinel-netzwerk.de",9],["bierspot.de",9],["lightcon.com",9],["roschmann.de",9],["simtarife.de",9],["egon-w-kreutzer.de",9],["terra-natur.com",9],["devowl.io",9],["cleverpush.com",9],["subitec.com",9],["kwerfeldein.de",9],["tecalliance.net",9],["viel-unterwegs.de",9],["madame-lenormand.de",9],["4kfilme.de",9],["gymnasium-hochdahl.de",9],["popp.eu",9],["maniac.de",9],["supertipp-online.de",9],["winlocal.de",9],["schiffe-und-kreuzfahrten.de",9],["guiademayores.com",9],["jankarres.de",9],["nahrungsmittel-intoleranz.com",9],["branson-germany.de",9],["miriamkreativ.de",9],["zaunbau-koch.de",9],["bsk-consulting.de",9],["windata.de",9],["prodopa.de",9],["zahnarzt-kuboth.de",9],["audiovision.de",9],["brachmannofficial.com",9],["compari.net",9],["computer-und-technik-im-wohnmobil.de",9],["seifriz-preis.de",9],["suitapp.de",9],["rossoft.co.uk",9],["wind-craft.eu",9],["manyanet.org",9],["mack-design.com",9],["pocket-pirates-prt.de",9],["tanzschulebogner.de",9],["toplink.de",9],["vg-veitsbronn-seukendorf.de",9],["skiweltcup.tv",9],["desser.co.uk",9],["symposium.org",9],["manneskraft-gesteigert.com",9],["barracred.com.br",9],["tv-sport.de",9],["boheme-schwabing.de",9],["spherity.com",9],["tc-equipment.de",9],["webfactory-i4.de",9],["webtimiser.de",9],["wp-ninjas.de",9],["profiel.de",9],["goeltzschtal-reisen.de",9],["everbloom.eu",9],["myclim8.com",9],["smiley.blue",9],["tulipize.com",9],["burzaucebnic.sk",9],["komm-mit.com",9],["istdasvegan.eu",9],["openforests.com",9],["industriemedien.at",9],["torinostoria.com",9],["igvm.de",9],["pinel.de",9],["music-service-geiger.de",9],["insidetrading.de",9],["ls-service.at",9],["blogyourthing.com",9],["bildung-ab-50.de",9],["teilzeitreisender.de",9],["vivoil.com",9],["borderline-plattform.de",9],["accace.ro",9],["lang-ag.com",9],["reise-zikaden.de",9],["restaurant-lindenhof.at",9],["nmmn.com",9],["exitroom.berlin",9],["weiterbildungsfinder.de",9],["erfurt-touristinformation.de",9],["elisazunder.de",9],["visconti.partners",9],["plr-paket.de",9],["spytunes.com",9],["schneelaeuferzunft.de",9],["flaviamelissa.com.br",9],["flughafen.tips",9],["webtapete.de",9],["erbsenprinzessin.com",9],["cranimax.com",9],["ac-grimmen.de",9],["floristasgarcia.es",9],["monikabirknerfreedombusiness.de",9],["lattinepersonalizzate.it",9],["olmatic.de",9],["die-werbeschmiede.de",9],["supereight.net",9],["visitmedia.de",9],["egro-direktwerbung.de",9],["alleingeborener-zwilling.com",9],["actrento.com",9],["antik-shop.de",9],["accace.cz",9],["happiness-bundles.com",9],["classic-emaille.de",9],["fakturia.de",9],["beeze.de",9],["brunozimmer.de",9],["derhoerbuchblog.de",9],["udo-lermann.de",9],["ciss.de",9],["volksfest-nuernberg.de",9],["ubisys.de",9],["wildbits.de",9],["softedu.pl",9],["maxkoch.de",9],["mario-kaps.de",9],["salzstreuner.de",9],["goessential.com",9],["tiesse.com",9],["compagniefruitiere.fr",9],["motivationstipp.de",9],["holzkisten-fabrik.de",9],["dasmagazin.de",9],["akademie-management.de",9],["salzerkfz.de",9],["aglini.com",9],["m38a1.de",9],["thomasschlechter.de",9],["smorfianapoletanaweb.it",9],["vzm.de",9],["proofing.de",9],["kbmv-matting.de",9],["vitalplus.com",9],["karver-systems.com",9],["boeser-chinese.de",9],["reinhardstrempel.de",9],["bewusstes-zentrum.de",9],["wildpark-ortenburg.de",9],["24hessen.de",9],["janamaenz.photography",9],["prodottidellapiazza.it",9],["continentale-hannover.de",9],["accace.sk",9],["wzl-zwickau.de",9],["picipix.com",9],["tkm-systemtechnik.de",9],["drive4brands.de",9],["brancaia.com",9],["trirhena-consulting.de",9],["pferde-hunde-therapie.de",9],["ffzblossin.de",9],["coyagaming.de",9],["cocktailsworld.net",9],["forum-koepenick.de",9],["immobilien-skiba.de",9],["penzkofer-bau.de",9],["fitnesscenter-schardt.de",9],["abcteile24.de",9],["wohnmobilcenter-drechsler.de",9],["crossculture-academy.com",9],["blhv.de",9],["blindbild.com",9],["zouboulis.com",9],["esderaiz.com",9],["ichbindochnichthierumbeliebtzusein.com",9],["von-zinsen-leben.de",9],["c-parts.de",9],["accademiainformatica.com",9],["lobetalarbeit.de",9],["hannover-living.de",9],["tsg6209weinheim.de",9],["stefaniegoldmarie.com",9],["dictum-shop.de",9],["oakbeardcare.com",9],["patchbox.com",9],["lazyinvestors.de",9],["frohreich.de",9],["transport-versicherungen.info",9],["mummelito.de",9],["reisekontakte.at",9],["ojas.de",9],["stadt-schoeneck.de",9],["piazzadeimestieri.it",9],["fasteninfos.de",9],["brodbeck-dd.de",9],["hundewelpe.de",9],["jadent.de",9],["duft-werk.de",9],["wunderpen.com",9],["crazeuk.com",9],["drhorvath.de",9],["weingut-knipser.de",9],["donostiroller.com",9],["roemermann.com",9],["bestwig.de",9],["tango-flores.de",9],["china-central-consultants.com",9],["lacasadavantialsole.org",9],["naturseifen-moosmed.de",9],["akzent-magazin.com",9],["wp-loft.de",9],["welte-glasuren.com",9],["balsamico.shop",9],["sl-landschaftsgestaltung.de",9],["betec.de",9],["alquilerordenadores.com",9],["bayern-kreativ.de",9],["tim-ehling.com",9],["signisalc.org",9],["coworkingrepublic.com",9],["dacsa.com",9],["plzenoviny.cz",9],["odw-journal.de",9],["kasteninblau.de",9],["lichttraeumer.de",9],["missinfogeek.net",9],["automatiksysteme.com",9],["adzurro.de",9],["vectorsoft.de",9],["suedafrika-wein.de",9],["noaf.de",9],["hundgemacht.net",9],["testefiorite.it",9],["klsys.com",9],["feuerhexen.de",9],["lemarit.com",9],["lameerooftop.com",9],["ideentitaet.com",9],["kaiser-mania.de",9],["accace.com",9],["naku.at",9],["goldpreis24.de",9],["ejwleo.de",9],["josefbergs.com",9],["caucasus-naturefund.org",9],["energiemetropole-leipzig.de",9],["von-neindorff-stiftung.de",9],["locandazita.com",9],["samadhi-vegetarian.de",9],["host.pl",9],["pentadoc-radar.com",9],["kd-slovenija.de",9],["accace.hu",9],["stilweb.it",9],["wolfgangallgaeuer.com",9],["kohlkg.de",9],["rechtsanwalt-nierfeld.de",9],["karlhoeffkes.de",9],["verstehepferde.de",9],["socceressen.de",9],["dcore.de",9],["edr-software.com",9],["denk-doch-mal.de",9],["meinstream.net",9],["stefan-froescher.eu",9],["zabel-group.de",9],["photofloh.de",9],["annabeauty-stuttgart.de",9],["swg-chemnitz.de",9],["klicks-kaufen.de",9],["levne-sauny.cz",9],["versicherungsmakler-leistenschneider.de",9],["arsdigita.de",9],["flugschule-hochries.de",9],["osmc.de",9],["zumkutscher.de",9],["evkirche-eilsen.de",9],["thingybob.de",9],["inicionet.com",9],["feucht-obsttechnik.de",9],["weimar-touristinformation.de",9],["yplay.de",9],["vcfrankfurt.de",9],["derklassiker.de",9],["lepetitmarchedauvergne.fr",9],["gooloo.de",9],["pizzeria-algusto.de",9],["presto-personaldienste.de",9],["wallygusto.de",9],["frigge-dinstak.de",9],["klangmassage-moser.de",9],["grupo-loma.com",9],["samenbank-berlin.de",9],["flow-in-yoga.de",9],["lb-consultores.com",9],["b757.info",9],["luegeten.ch",9],["hof-droste.de",9],["aachen50plus.de",9],["arabesque-essen.de",9],["grid.de",9],["canvascga.com",9],["mallorca-unternehmen.com",9],["hauspanorama.de",9],["vienna-interiors.at",9],["music-on-net.de",9],["baumarkt-vogl.at",9],["knoblauch.de",9],["rissland-kunststoffe.de",9],["fahrstil.cc",9],["hallesches-fotoatelier.de",9],["dollenberg-isolierung.de",9],["timo-bernhard.de",9],["feuerwehr-oberau.de",9],["kuechenboerse.de",9],["erlebnispark-ziegenhagen.de",9],["frauzuckerbroetchen.com",9],["hopfner.info",9],["tiermasseur-mannsberger.at",9],["gcol.de",9],["blueoceangaming.com",9],["pinel-medizin.de",9],["knauer-galabau.de",9],["zahnarzt-dr-henkel.de",9],["tonispizza-rastatt.de",9],["wichmann.biz",9],["schuetzendepot.de",9],["horizonte.com",9],["dayspamainz.de",9],["gerdes-reisen.de",9],["dg-pw.de",9],["brill-art.de",9],["carbon.ag",9],["199-euro-computer.de",9],["pndracingteam.net",9],["sv-langenfeld.de",9],["steinway-park-seesen.de",9],["sonderversum.com",9],["forwardis.com",9],["verein-fairbund.de",9],["hs-soft.com",9],["backstagefrankfurt.de",9],["hans-engelke.de",9],["vapecoco.com",9],["imprints.de",9],["rolandgermany.com",9],["fschemie-goettingen.de",9],["hypnose.ac",9],["estudio-nous.com",9],["kunstmuseum-heidenheim.de",9],["htvb.org",9],["ridee.bike",9],["zur-glocke.com",9],["hotelkristall.it",9],["babiceurican.cz",9],["farbenherz.com",9],["it-koehler.com",9],["bklm-ahaus.de",9],["gesundheitsladen-online.de",9],["createchange.me",9],["amway-estonia.com",[10,11,12]],["amway-latvia.com",[10,11,12]],["amway-lithuania.com",[10,11,12]],["amway.es",[10,11,12]],["amway.no",[10,11,12]],["amway.nl",[10,11,12]],["amway.co.uk",[10,11,12]],["amway.com.tr",[10,11,12]],["amway.pt",[10,11,12]],["amway.be",[10,11,12]],["amway.sk",[10,11,12]],["amway.de",[10,11,12]],["amway.ch",[10,11,12]],["amway.gr",[10,11,12]],["amway.ie",[10,11,12]],["amway.se",[10,11,12]],["amway.pl",[10,11,12]],["amway.bg",[10,11,12]],["amway.hr",[10,11,12]],["amway.dk",[10,11,12]],["amway.cz",[10,11,12]],["amway.si",[10,11,12]],["amway.ro",[10,11,12]],["amway.fr",[10,11,12]],["amway.fi",[10,11,12]],["amway.it",[10,11,12]],["sourceforge.net",13],["anna.fi",14],["tweakers.net",[17,18,19,20,21,22,23]],["yle.fi",[24,25]],["philips-hue.com",26],["podimo.com",27],["express.co.uk",28]]);

const entitiesMap = new Map([]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function setConstant(
    ...args
) {
    setConstantCore(false, ...args);
}

function setConstantCore(
    trusted = false,
    chain = '',
    cValue = ''
) {
    if ( chain === '' ) { return; }
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    function setConstant(chain, cValue) {
        const trappedProp = (( ) => {
            const pos = chain.lastIndexOf('.');
            if ( pos === -1 ) { return chain; }
            return chain.slice(pos+1);
        })();
        if ( trappedProp === '' ) { return; }
        const thisScript = document.currentScript;
        const cloakFunc = fn => {
            safe.Object_defineProperty(fn, 'name', { value: trappedProp });
            const proxy = new Proxy(fn, {
                defineProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.defineProperty(...arguments);
                    }
                    return true;
                },
                deleteProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.deleteProperty(...arguments);
                    }
                    return true;
                },
                get(target, prop) {
                    if ( prop === 'toString' ) {
                        return function() {
                            return `function ${trappedProp}() { [native code] }`;
                        }.bind(null);
                    }
                    return Reflect.get(...arguments);
                },
            });
            return proxy;
        };
        if ( cValue === 'undefined' ) {
            cValue = undefined;
        } else if ( cValue === 'false' ) {
            cValue = false;
        } else if ( cValue === 'true' ) {
            cValue = true;
        } else if ( cValue === 'null' ) {
            cValue = null;
        } else if ( cValue === "''" || cValue === '' ) {
            cValue = '';
        } else if ( cValue === '[]' || cValue === 'emptyArr' ) {
            cValue = [];
        } else if ( cValue === '{}' || cValue === 'emptyObj' ) {
            cValue = {};
        } else if ( cValue === 'noopFunc' ) {
            cValue = cloakFunc(function(){});
        } else if ( cValue === 'trueFunc' ) {
            cValue = cloakFunc(function(){ return true; });
        } else if ( cValue === 'falseFunc' ) {
            cValue = cloakFunc(function(){ return false; });
        } else if ( /^-?\d+$/.test(cValue) ) {
            cValue = parseInt(cValue);
            if ( isNaN(cValue) ) { return; }
            if ( Math.abs(cValue) > 0x7FFF ) { return; }
        } else if ( trusted ) {
            if ( cValue.startsWith('{') && cValue.endsWith('}') ) {
                try { cValue = safe.JSON_parse(cValue).value; } catch(ex) { return; }
            }
        } else {
            return;
        }
        if ( extraArgs.as !== undefined ) {
            const value = cValue;
            if ( extraArgs.as === 'function' ) {
                cValue = ( ) => value;
            } else if ( extraArgs.as === 'callback' ) {
                cValue = ( ) => (( ) => value);
            } else if ( extraArgs.as === 'resolved' ) {
                cValue = Promise.resolve(value);
            } else if ( extraArgs.as === 'rejected' ) {
                cValue = Promise.reject(value);
            }
        }
        let aborted = false;
        const mustAbort = function(v) {
            if ( trusted ) { return false; }
            if ( aborted ) { return true; }
            aborted =
                (v !== undefined && v !== null) &&
                (cValue !== undefined && cValue !== null) &&
                (typeof v !== typeof cValue);
            return aborted;
        };
        // https://github.com/uBlockOrigin/uBlock-issues/issues/156
        //   Support multiple trappers for the same property.
        const trapProp = function(owner, prop, configurable, handler) {
            if ( handler.init(configurable ? owner[prop] : cValue) === false ) { return; }
            const odesc = safe.Object_getOwnPropertyDescriptor(owner, prop);
            let prevGetter, prevSetter;
            if ( odesc instanceof safe.Object ) {
                owner[prop] = cValue;
                if ( odesc.get instanceof Function ) {
                    prevGetter = odesc.get;
                }
                if ( odesc.set instanceof Function ) {
                    prevSetter = odesc.set;
                }
            }
            try {
                safe.Object_defineProperty(owner, prop, {
                    configurable,
                    get() {
                        if ( prevGetter !== undefined ) {
                            prevGetter();
                        }
                        return handler.getter(); // cValue
                    },
                    set(a) {
                        if ( prevSetter !== undefined ) {
                            prevSetter(a);
                        }
                        handler.setter(a);
                    }
                });
            } catch(ex) {
            }
        };
        const trapChain = function(owner, chain) {
            const pos = chain.indexOf('.');
            if ( pos === -1 ) {
                trapProp(owner, chain, false, {
                    v: undefined,
                    init: function(v) {
                        if ( mustAbort(v) ) { return false; }
                        this.v = v;
                        return true;
                    },
                    getter: function() {
                        return document.currentScript === thisScript
                            ? this.v
                            : cValue;
                    },
                    setter: function(a) {
                        if ( mustAbort(a) === false ) { return; }
                        cValue = a;
                    }
                });
                return;
            }
            const prop = chain.slice(0, pos);
            const v = owner[prop];
            chain = chain.slice(pos + 1);
            if ( v instanceof safe.Object || typeof v === 'object' && v !== null ) {
                trapChain(v, chain);
                return;
            }
            trapProp(owner, prop, true, {
                v: undefined,
                init: function(v) {
                    this.v = v;
                    return true;
                },
                getter: function() {
                    return this.v;
                },
                setter: function(a) {
                    this.v = a;
                    if ( a instanceof safe.Object ) {
                        trapChain(a, chain);
                    }
                }
            });
        };
        trapChain(window, chain);
    }
    runAt(( ) => {
        setConstant(chain, cValue);
    }, extraArgs.runAt);
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1,
            'interactive': 2, 'end': 2, '2': 2,
            'complete': 3, 'idle': 3, '3': 3,
        };
        const tokens = Array.isArray(state) ? state : [ state ];
        for ( const token of tokens ) {
            const prop = `${token}`;
            if ( targets.hasOwnProperty(prop) === false ) { continue; }
            return targets[prop];
        }
        return 0;
    };
    const runAt = intFromReadyState(when);
    if ( intFromReadyState(document.readyState) >= runAt ) {
        fn(); return;
    }
    const onStateChange = ( ) => {
        if ( intFromReadyState(document.readyState) < runAt ) { return; }
        fn();
        safe.removeEventListener.apply(document, args);
    };
    const safe = safeSelf();
    const args = [ 'readystatechange', onStateChange, { capture: true } ];
    safe.addEventListener.apply(document, args);
}

function safeSelf() {
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
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
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
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
        uboLog(...args) {
            if ( scriptletGlobals.has('canDebug') === false ) { return; }
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
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
                    re: new this.RegExp(pattern.replace(
                        /[.*+?^${}()|[\]\\]/g, '\\$&'),
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
                const reStr = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
    };
    scriptletGlobals.set('safeSelf', safe);
    return safe;
}

/******************************************************************************/

const hnParts = [];
try { hnParts.push(...document.location.hostname.split('.')); }
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
    try { setConstant(...argsList[i]); }
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

const targetWorld = 'MAIN';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_setConstant();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_setConstant = cloneInto([
            [ '(', uBOL_setConstant.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_setConstant);
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
    delete page.uBOL_setConstant;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
