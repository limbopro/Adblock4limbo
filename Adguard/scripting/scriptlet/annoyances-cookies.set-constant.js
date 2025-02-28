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

// ruleset: annoyances-cookies

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_setConstant = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["cicc.cookie_cat_statistic","true"],["config.requireCookieConsent","false"],["BrockmanAllowedCookies.targeting","true"],["BrockmanAllowedCookies.functional","true"],["settings.consent","true"],["HB.CookieSettings.init","noopFunc"],["WHT.ShowConsentForm","trueFunc"],["useGDPR","false"],["xv.disclaimer.displayCookiePopup","noopFunc"],["Didomi","noopFunc"],["realCookieBanner","undefined"],["window.cmpmngr.setConsentViaBtn","noopFunc"],["tcfAllowUseCookies","true"],["cicc.cookie_cat_functional","true"],["cicc.cookie_cat_marketing","true"],["tweakersConfig.userConfiguredConsent.youtube.approved","true"],["tweakersConfig.userConfiguredConsent.omny.approved","true"],["tweakersConfig.userConfiguredConsent.pcnltelecom.approved","true"],["tweakersConfig.userConfiguredConsent.googlemaps.approved","true"],["tweakersConfig.userConfiguredConsent.streamable.approved","true"],["tweakersConfig.userConfiguredConsent.soundcloud.approved","true"],["tweakersConfig.userConfiguredConsent.knightlab.approved","true"],["yleConsentSdk._consentSdk._embedded_social_media","true"],["yleConsentSdk.show","noopFunc"],["cockieConsentManagement","noopFunc"],["window.scrollTo","noopFunc"],["flagTcfLoaded","true"],["_iub.cs.options.callback.onConsentRejected","noopFunc"],["_iub.cs.options.callback.onConsentFirstRejected","noopFunc"],["__tcfapi_user_acctepted","true"],["_gtm.consent.cm.strategy.options.cmpay.enabled","false"],["Object.prototype.hasConsent","trueFunc"],["cmp_autoreject","true"]];

const hostnamesMap = new Map([["elgiganten.dk",0],["elgiganten.se",0],["gigantti.fi",0],["historianet.fi",[0,13,14]],["tieku.fi",[0,13,14]],["fimfiction.net",1],["eurogamer.nl",[2,3]],["eurogamer.es",[2,3]],["eurogamer.cz",[2,3]],["eurogamer.net",[2,3]],["eurogamer.pl",[2,3]],["eurogamer.pt",[2,3]],["rockpapershotgun.com",[2,3]],["vg247.com",[2,3]],["vadhander.hogakusten.com",4],["vadhander.kramfors.se",4],["stewes.de",5],["gadgethacks.com",6],["qastack.fr",7],["xvideos.com",8],["xv-ru.com",8],["elconfidencial.com",9],["euromaster.de",9],["lavanguardia.com",9],["strefabiznesu.pl",9],["jofogas.hu",9],["gamepro.de",9],["melty.fr",9],["cloudiway.com",10],["iway.ch",10],["medit.com",10],["ausfraukesfeder.de",10],["upreply.de",10],["restaurantsbrighton.co.uk",10],["phpconference.com",10],["mixingmonster.com",10],["elektrotechnik-schabus.de",10],["online.ch",10],["media-consulting.ch",10],["grafische-visualisierung.de",10],["asfour.ch",10],["achtsamerleben.de",10],["foto-shooting.ch",10],["savvista.com",10],["marketing-strategen.com",10],["aeotec.com",10],["itv4.de",10],["imprimare3d.com",10],["juwelier-dringo.de",10],["pulpe.eu",10],["ilonpolku.fi",10],["oculyze.net",10],["mikanews.de",10],["bitreporter.de",10],["zertificon.com",10],["kieruneknorwegia.pl",10],["mannschaft.com",10],["windowspower.de",10],["bbfun.de",10],["schreiners-it.de",10],["infobroker.de",10],["1000-haushaltstipps.de",10],["theoblog.de",10],["notebook-doktor.de",10],["base-chat.de",10],["campingbuddies.de",10],["saunahuus.de",10],["krefindo.de",10],["tuhlteim.de",10],["getaawp.com",10],["wrestling-point.de",10],["englishradar.com",10],["wt-onlineakademie.de",10],["readyforboarding.pl",10],["thegeekfreaks.de",10],["picockpit.com",10],["der-windows-papst.de",10],["kjr-pi.de",10],["splendid-internet.de",10],["do.de",10],["compact-online.de",10],["fuckyeah.shop",10],["kiyoua-news.de",10],["tourismus-uckermark.de",10],["angelmagazin.de",10],["technik-hauptstadt.de",10],["tuhlteim-pedia.de",10],["fobizz.com",10],["fabian-heinz-webdesign.de",10],["jpgames.de",10],["kulturpass-kino.de",10],["aspies.de",10],["frixtender.de",10],["brauerei-strate.de",10],["hookahx.de",10],["frickeldave.de",10],["leben-mit-ohne.de",10],["ilyabiz.com",10],["neuneinhalb.org",10],["baycix.de",10],["basta.berlin",10],["herrlichergarten.de",10],["spieltraum-berlin.de",10],["patria.net",10],["blog.ipc-computer.de",10],["gaming-grounds.de",10],["ekiwi-blog.de",10],["erp-up.de",10],["philosophia-perennis.com",10],["tecsafe.de",10],["devm.io",10],["schnittmuster-datenbank.de",10],["rosgovas.com",10],["blu-ray-rezensionen.net",10],["bricksforge.io",10],["lenovocampus.de",10],["rotlichtaus.de",10],["louisreynier.com",10],["stricken-online.com",10],["haarausfall-stopp.com",10],["cargoe.at",10],["pandore-gendarmerie.org",10],["pureselfmade.com",10],["fild.de",10],["m-m-m.de",10],["yogainspires.co.uk",10],["youngimages.de",10],["katzenbaumdesign.de",10],["goerlach-gmbh.com",10],["lichtempfindlich.org",10],["gasthaus-schmidmayer.de",10],["narrwalla.de",10],["efg-passau.de",10],["gefahrgutjaeger.de",10],["locafrique-sf.com",10],["financeads.com",10],["tutonaut.de",10],["freegossip.gr",10],["ltmemory.de",10],["randombrick.de",10],["playcentral.de",10],["nachbelichtet.com",10],["philosophenlexikon.de",10],["schulebruetten.ch",10],["almacenessanagustin.com",10],["autoverwertung-berk.de",10],["gosch.de",10],["ousuca.com",10],["stw-langenfeld.de",10],["yurishop.it",10],["europace.de",10],["autobrinkmann.de",10],["move-ment.at",10],["techniknews.net",10],["epages.com",10],["thinkingwithyou.com",10],["mfu-pilotenclub.at",10],["artkon.de",10],["running-green.de",10],["danielederosa.de",10],["ivfp.de",10],["bs-achern.de",10],["swiss-commerce.ch",10],["asga.ch",10],["ellasblog.de",10],["gamenite.de",10],["mmo-sankar.de",10],["istaf-indoor.de",10],["iqskitchen.de",10],["ekiwi.de",10],["nordlicht-ev.de",10],["zimmerwetter.de",10],["pinel-netzwerk.de",10],["bierspot.de",10],["lightcon.com",10],["roschmann.de",10],["egon-w-kreutzer.de",10],["terra-natur.com",10],["devowl.io",10],["cleverpush.com",10],["subitec.com",10],["kwerfeldein.de",10],["tecalliance.net",10],["viel-unterwegs.de",10],["madame-lenormand.de",10],["4kfilme.de",10],["gymnasium-hochdahl.de",10],["popp.eu",10],["maniac.de",10],["supertipp-online.de",10],["winlocal.de",10],["schiffe-und-kreuzfahrten.de",10],["guiademayores.com",10],["jankarres.de",10],["nahrungsmittel-intoleranz.com",10],["branson-germany.de",10],["miriamkreativ.de",10],["zaunbau-koch.de",10],["bsk-consulting.de",10],["windata.de",10],["prodopa.de",10],["zahnarzt-kuboth.de",10],["audiovision.de",10],["brachmannofficial.com",10],["compari.net",10],["computer-und-technik-im-wohnmobil.de",10],["seifriz-preis.de",10],["suitapp.de",10],["rossoft.co.uk",10],["wind-craft.eu",10],["manyanet.org",10],["mack-design.com",10],["pocket-pirates-prt.de",10],["tanzschulebogner.de",10],["toplink.de",10],["vg-veitsbronn-seukendorf.de",10],["skiweltcup.tv",10],["desser.co.uk",10],["symposium.org",10],["manneskraft-gesteigert.com",10],["barracred.com.br",10],["tv-sport.de",10],["boheme-schwabing.de",10],["spherity.com",10],["tc-equipment.de",10],["webfactory-i4.de",10],["webtimiser.de",10],["wp-ninjas.de",10],["profiel.de",10],["goeltzschtal-reisen.de",10],["everbloom.eu",10],["myclim8.com",10],["smiley.blue",10],["tulipize.com",10],["burzaucebnic.sk",10],["komm-mit.com",10],["istdasvegan.eu",10],["openforests.com",10],["industriemedien.at",10],["torinostoria.com",10],["igvm.de",10],["pinel.de",10],["music-service-geiger.de",10],["insidetrading.de",10],["ls-service.at",10],["blogyourthing.com",10],["bildung-ab-50.de",10],["teilzeitreisender.de",10],["vivoil.com",10],["borderline-plattform.de",10],["accace.ro",10],["lang-ag.com",10],["reise-zikaden.de",10],["nmmn.com",10],["exitroom.berlin",10],["weiterbildungsfinder.de",10],["erfurt-touristinformation.de",10],["elisazunder.de",10],["visconti.partners",10],["plr-paket.de",10],["spytunes.com",10],["schneelaeuferzunft.de",10],["flaviamelissa.com.br",10],["flughafen.tips",10],["webtapete.de",10],["erbsenprinzessin.com",10],["cranimax.com",10],["ac-grimmen.de",10],["floristasgarcia.es",10],["monikabirknerfreedombusiness.de",10],["lattinepersonalizzate.it",10],["olmatic.de",10],["die-werbeschmiede.de",10],["supereight.net",10],["visitmedia.de",10],["egro-direktwerbung.de",10],["alleingeborener-zwilling.com",10],["actrento.com",10],["antik-shop.de",10],["accace.cz",10],["happiness-bundles.com",10],["classic-emaille.de",10],["fakturia.de",10],["beeze.de",10],["brunozimmer.de",10],["derhoerbuchblog.de",10],["udo-lermann.de",10],["ciss.de",10],["volksfest-nuernberg.de",10],["ubisys.de",10],["wildbits.de",10],["softedu.pl",10],["maxkoch.de",10],["mario-kaps.de",10],["salzstreuner.de",10],["goessential.com",10],["tiesse.com",10],["compagniefruitiere.fr",10],["motivationstipp.de",10],["holzkisten-fabrik.de",10],["dasmagazin.de",10],["akademie-management.de",10],["salzerkfz.de",10],["m38a1.de",10],["thomasschlechter.de",10],["smorfianapoletanaweb.it",10],["vzm.de",10],["proofing.de",10],["kbmv-matting.de",10],["vitalplus.com",10],["karver-systems.com",10],["boeser-chinese.de",10],["reinhardstrempel.de",10],["bewusstes-zentrum.de",10],["wildpark-ortenburg.de",10],["24hessen.de",10],["janamaenz.photography",10],["prodottidellapiazza.it",10],["continentale-hannover.de",10],["accace.sk",10],["wzl-zwickau.de",10],["tkm-systemtechnik.de",10],["drive4brands.de",10],["brancaia.com",10],["trirhena-consulting.de",10],["pferde-hunde-therapie.de",10],["ffzblossin.de",10],["coyagaming.de",10],["cocktailsworld.net",10],["forum-koepenick.de",10],["immobilien-skiba.de",10],["penzkofer-bau.de",10],["fitnesscenter-schardt.de",10],["abcteile24.de",10],["wohnmobilcenter-drechsler.de",10],["crossculture-academy.com",10],["blhv.de",10],["blindbild.com",10],["zouboulis.com",10],["esderaiz.com",10],["ichbindochnichthierumbeliebtzusein.com",10],["von-zinsen-leben.de",10],["c-parts.de",10],["accademiainformatica.com",10],["lobetalarbeit.de",10],["hannover-living.de",10],["tsg6209weinheim.de",10],["stefaniegoldmarie.com",10],["dictum-shop.de",10],["oakbeardcare.com",10],["patchbox.com",10],["lazyinvestors.de",10],["frohreich.de",10],["transport-versicherungen.info",10],["mummelito.de",10],["reisekontakte.at",10],["ojas.de",10],["stadt-schoeneck.de",10],["piazzadeimestieri.it",10],["fasteninfos.de",10],["brodbeck-dd.de",10],["hundewelpe.de",10],["jadent.de",10],["duft-werk.de",10],["wunderpen.com",10],["crazeuk.com",10],["drhorvath.de",10],["weingut-knipser.de",10],["donostiroller.com",10],["roemermann.com",10],["bestwig.de",10],["tango-flores.de",10],["china-central-consultants.com",10],["lacasadavantialsole.org",10],["naturseifen-moosmed.de",10],["akzent-magazin.com",10],["wp-loft.de",10],["welte-glasuren.com",10],["balsamico.shop",10],["sl-landschaftsgestaltung.de",10],["betec.de",10],["alquilerordenadores.com",10],["bayern-kreativ.de",10],["tim-ehling.com",10],["signisalc.org",10],["coworkingrepublic.com",10],["dacsa.com",10],["plzenoviny.cz",10],["odw-journal.de",10],["kasteninblau.de",10],["lichttraeumer.de",10],["missinfogeek.net",10],["automatiksysteme.com",10],["adzurro.de",10],["vectorsoft.de",10],["suedafrika-wein.de",10],["noaf.de",10],["hundgemacht.net",10],["testefiorite.it",10],["klsys.com",10],["feuerhexen.de",10],["lemarit.com",10],["lameerooftop.com",10],["ideentitaet.com",10],["kaiser-mania.de",10],["accace.com",10],["naku.at",10],["goldpreis24.de",10],["ejwleo.de",10],["josefbergs.com",10],["caucasus-naturefund.org",10],["energiemetropole-leipzig.de",10],["von-neindorff-stiftung.de",10],["locandazita.com",10],["samadhi-vegetarian.de",10],["host.pl",10],["pentadoc-radar.com",10],["kd-slovenija.de",10],["accace.hu",10],["stilweb.it",10],["wolfgangallgaeuer.com",10],["kohlkg.de",10],["rechtsanwalt-nierfeld.de",10],["karlhoeffkes.de",10],["verstehepferde.de",10],["socceressen.de",10],["dcore.de",10],["edr-software.com",10],["denk-doch-mal.de",10],["meinstream.net",10],["stefan-froescher.eu",10],["zabel-group.de",10],["photofloh.de",10],["annabeauty-stuttgart.de",10],["swg-chemnitz.de",10],["klicks-kaufen.de",10],["levne-sauny.cz",10],["versicherungsmakler-leistenschneider.de",10],["arsdigita.de",10],["flugschule-hochries.de",10],["osmc.de",10],["zumkutscher.de",10],["evkirche-eilsen.de",10],["thingybob.de",10],["inicionet.com",10],["feucht-obsttechnik.de",10],["weimar-touristinformation.de",10],["yplay.de",10],["vcfrankfurt.de",10],["derklassiker.de",10],["lepetitmarchedauvergne.fr",10],["gooloo.de",10],["pizzeria-algusto.de",10],["presto-personaldienste.de",10],["wallygusto.de",10],["frigge-dinstak.de",10],["klangmassage-moser.de",10],["grupo-loma.com",10],["samenbank-berlin.de",10],["flow-in-yoga.de",10],["lb-consultores.com",10],["b757.info",10],["luegeten.ch",10],["hof-droste.de",10],["aachen50plus.de",10],["arabesque-essen.de",10],["grid.de",10],["canvascga.com",10],["mallorca-unternehmen.com",10],["hauspanorama.de",10],["vienna-interiors.at",10],["music-on-net.de",10],["baumarkt-vogl.at",10],["knoblauch.de",10],["rissland-kunststoffe.de",10],["fahrstil.cc",10],["hallesches-fotoatelier.de",10],["dollenberg-isolierung.de",10],["timo-bernhard.de",10],["feuerwehr-oberau.de",10],["kuechenboerse.de",10],["erlebnispark-ziegenhagen.de",10],["frauzuckerbroetchen.com",10],["hopfner.info",10],["tiermasseur-mannsberger.at",10],["gcol.de",10],["blueoceangaming.com",10],["pinel-medizin.de",10],["knauer-galabau.de",10],["zahnarzt-dr-henkel.de",10],["tonispizza-rastatt.de",10],["wichmann.biz",10],["schuetzendepot.de",10],["horizonte.com",10],["dayspamainz.de",10],["gerdes-reisen.de",10],["dg-pw.de",10],["brill-art.de",10],["carbon.ag",10],["199-euro-computer.de",10],["pndracingteam.net",10],["sv-langenfeld.de",10],["steinway-park-seesen.de",10],["sonderversum.com",10],["forwardis.com",10],["verein-fairbund.de",10],["hs-soft.com",10],["hans-engelke.de",10],["vapecoco.com",10],["imprints.de",10],["rolandgermany.com",10],["fschemie-goettingen.de",10],["hypnose.ac",10],["estudio-nous.com",10],["kunstmuseum-heidenheim.de",10],["htvb.org",10],["ridee.bike",10],["zur-glocke.com",10],["hotelkristall.it",10],["babiceurican.cz",10],["farbenherz.com",10],["it-koehler.com",10],["bklm-ahaus.de",10],["gesundheitsladen-online.de",10],["createchange.me",10],["sourceforge.net",11],["anna.fi",12],["tweakers.net",[15,16,17,18,19,20,21]],["yle.fi",[22,23]],["philips-hue.com",24],["podimo.com",25],["express.co.uk",26],["ilgazzettino.it",[27,28]],["ilmessaggero.it",[27,28]],["ilsecoloxix.it",[27,28]],["tvn24.pl",29],["linternaute.com",30],["dw.com",[31,32]],["winfuture.de",[31,32]]]);

const entitiesMap = new Map([]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function setConstant(
    ...args
) {
    setConstantFn(false, ...args);
}

function setConstantFn(
    trusted = false,
    chain = '',
    rawValue = ''
) {
    if ( chain === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('set-constant', chain, rawValue);
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    function setConstant(chain, rawValue) {
        const trappedProp = (( ) => {
            const pos = chain.lastIndexOf('.');
            if ( pos === -1 ) { return chain; }
            return chain.slice(pos+1);
        })();
        const cloakFunc = fn => {
            safe.Object_defineProperty(fn, 'name', { value: trappedProp });
            return new Proxy(fn, {
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
        };
        if ( trappedProp === '' ) { return; }
        const thisScript = document.currentScript;
        let normalValue = validateConstantFn(trusted, rawValue, extraArgs);
        if ( rawValue === 'noopFunc' || rawValue === 'trueFunc' || rawValue === 'falseFunc' ) {
            normalValue = cloakFunc(normalValue);
        }
        let aborted = false;
        const mustAbort = function(v) {
            if ( trusted ) { return false; }
            if ( aborted ) { return true; }
            aborted =
                (v !== undefined && v !== null) &&
                (normalValue !== undefined && normalValue !== null) &&
                (typeof v !== typeof normalValue);
            if ( aborted ) {
                safe.uboLog(logPrefix, `Aborted because value set to ${v}`);
            }
            return aborted;
        };
        // https://github.com/uBlockOrigin/uBlock-issues/issues/156
        //   Support multiple trappers for the same property.
        const trapProp = function(owner, prop, configurable, handler) {
            if ( handler.init(configurable ? owner[prop] : normalValue) === false ) { return; }
            const odesc = safe.Object_getOwnPropertyDescriptor(owner, prop);
            let prevGetter, prevSetter;
            if ( odesc instanceof safe.Object ) {
                owner[prop] = normalValue;
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
                        return handler.getter();
                    },
                    set(a) {
                        if ( prevSetter !== undefined ) {
                            prevSetter(a);
                        }
                        handler.setter(a);
                    }
                });
                safe.uboLog(logPrefix, 'Trap installed');
            } catch(ex) {
                safe.uboErr(logPrefix, ex);
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
                        if ( document.currentScript === thisScript ) {
                            return this.v;
                        }
                        safe.uboLog(logPrefix, 'Property read');
                        return normalValue;
                    },
                    setter: function(a) {
                        if ( mustAbort(a) === false ) { return; }
                        normalValue = a;
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
        setConstant(chain, rawValue);
    }, extraArgs.runAt);
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1, 'asap': 1,
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

function validateConstantFn(trusted, raw, extraArgs = {}) {
    const safe = safeSelf();
    let value;
    if ( raw === 'undefined' ) {
        value = undefined;
    } else if ( raw === 'false' ) {
        value = false;
    } else if ( raw === 'true' ) {
        value = true;
    } else if ( raw === 'null' ) {
        value = null;
    } else if ( raw === "''" || raw === '' ) {
        value = '';
    } else if ( raw === '[]' || raw === 'emptyArr' ) {
        value = [];
    } else if ( raw === '{}' || raw === 'emptyObj' ) {
        value = {};
    } else if ( raw === 'noopFunc' ) {
        value = function(){};
    } else if ( raw === 'trueFunc' ) {
        value = function(){ return true; };
    } else if ( raw === 'falseFunc' ) {
        value = function(){ return false; };
    } else if ( raw === 'throwFunc' ) {
        value = function(){ throw ''; };
    } else if ( /^-?\d+$/.test(raw) ) {
        value = parseInt(raw);
        if ( isNaN(raw) ) { return; }
        if ( Math.abs(raw) > 0x7FFF ) { return; }
    } else if ( trusted ) {
        if ( raw.startsWith('json:') ) {
            try { value = safe.JSON_parse(raw.slice(5)); } catch { return; }
        } else if ( raw.startsWith('{') && raw.endsWith('}') ) {
            try { value = safe.JSON_parse(raw).value; } catch { return; }
        }
    } else {
        return;
    }
    if ( extraArgs.as !== undefined ) {
        if ( extraArgs.as === 'function' ) {
            return ( ) => value;
        } else if ( extraArgs.as === 'callback' ) {
            return ( ) => (( ) => value);
        } else if ( extraArgs.as === 'resolved' ) {
            return Promise.resolve(value);
        } else if ( extraArgs.as === 'rejected' ) {
            return Promise.reject(value);
        }
    }
    return value;
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
    try { setConstant(...argsList[i]); }
    catch { }
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_setConstant();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
