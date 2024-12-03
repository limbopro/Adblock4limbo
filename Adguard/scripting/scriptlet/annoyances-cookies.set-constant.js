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

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_setConstant = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["cicc.cookie_cat_statistic","true"],["config.requireCookieConsent","false"],["window.consentManagementEnabled","false"],["Object.prototype.hasConsent","trueFunc"],["BrockmanAllowedCookies.targeting","true"],["BrockmanAllowedCookies.functional","true"],["settings.consent","true"],["HB.CookieSettings.init","noopFunc"],["WHT.ShowConsentForm","trueFunc"],["useGDPR","false"],["xv.disclaimer.displayCookiePopup","noopFunc"],["Didomi","noopFunc"],["realCookieBanner","undefined"],["amw.isCookieConsentAccepted","true"],["amw.isMarketingCookiesAccepted","false"],["amw.isAnalyticsCookiesAccepted","false"],["window.cmpmngr.setConsentViaBtn","noopFunc"],["tcfAllowUseCookies","true"],["cicc.cookie_cat_functional","true"],["cicc.cookie_cat_marketing","true"],["tweakersConfig.userConfiguredConsent.youtube.approved","true"],["tweakersConfig.userConfiguredConsent.omny.approved","true"],["tweakersConfig.userConfiguredConsent.pcnltelecom.approved","true"],["tweakersConfig.userConfiguredConsent.googlemaps.approved","true"],["tweakersConfig.userConfiguredConsent.streamable.approved","true"],["tweakersConfig.userConfiguredConsent.soundcloud.approved","true"],["tweakersConfig.userConfiguredConsent.knightlab.approved","true"],["yleConsentSdk._consentSdk._embedded_social_media","true"],["yleConsentSdk.show","noopFunc"],["cockieConsentManagement","noopFunc"],["window.scrollTo","noopFunc"],["flagTcfLoaded","true"],["_iub.cs.options.callback.onConsentRejected","noopFunc"],["_iub.cs.options.callback.onConsentFirstRejected","noopFunc"],["__tcfapi_user_acctepted","true"],["_gtm.consent.cm.strategy.options.cmpay.enabled","false"],["cmp_autoreject","true"]];

const hostnamesMap = new Map([["elgiganten.dk",0],["elgiganten.se",0],["elkjop.no",0],["gigantti.fi",0],["historianet.fi",[0,18,19]],["tieku.fi",[0,18,19]],["fimfiction.net",1],["fruugo.at",2],["fruugo.be",2],["fruugo.cz",2],["fruugo.de",2],["fruugo.dk",2],["fruugo.es",2],["fruugo.fi",2],["fruugo.gr",2],["fruugo.hu",2],["fruugo.ie",2],["fruugo.it",2],["fruugo.lu",2],["fruugo.nl",2],["fruugo.pl",2],["fruugo.pt",2],["fruugo.ro",2],["fruugo.sk",2],["dw.com",[3,36]],["winfuture.de",[3,36]],["eurogamer.nl",[4,5]],["eurogamer.es",[4,5]],["eurogamer.cz",[4,5]],["eurogamer.net",[4,5]],["eurogamer.pl",[4,5]],["eurogamer.pt",[4,5]],["rockpapershotgun.com",[4,5]],["vg247.com",[4,5]],["vadhander.hogakusten.com",6],["vadhander.kramfors.se",6],["stewes.de",7],["gadgethacks.com",8],["qastack.fr",9],["xvideos.com",10],["xv-ru.com",10],["elconfidencial.com",11],["euromaster.de",11],["lavanguardia.com",11],["strefabiznesu.pl",11],["jofogas.hu",11],["gamepro.de",11],["melty.fr",11],["ausfraukesfeder.de",12],["upreply.de",12],["restaurantsbrighton.co.uk",12],["phpconference.com",12],["mixingmonster.com",12],["elektrotechnik-schabus.de",12],["online.ch",12],["media-consulting.ch",12],["grafische-visualisierung.de",12],["asfour.ch",12],["achtsamerleben.de",12],["foto-shooting.ch",12],["savvista.com",12],["marketing-strategen.com",12],["aeotec.com",12],["itv4.de",12],["imprimare3d.com",12],["juwelier-dringo.de",12],["pulpe.eu",12],["ilonpolku.fi",12],["oculyze.net",12],["mikanews.de",12],["bitreporter.de",12],["zertificon.com",12],["kieruneknorwegia.pl",12],["mannschaft.com",12],["windowspower.de",12],["bbfun.de",12],["schreiners-it.de",12],["infobroker.de",12],["1000-haushaltstipps.de",12],["theoblog.de",12],["notebook-doktor.de",12],["base-chat.de",12],["campingbuddies.de",12],["saunahuus.de",12],["krefindo.de",12],["tuhlteim.de",12],["getaawp.com",12],["wrestling-point.de",12],["englishradar.com",12],["wt-onlineakademie.de",12],["readyforboarding.pl",12],["thegeekfreaks.de",12],["picockpit.com",12],["der-windows-papst.de",12],["kjr-pi.de",12],["splendid-internet.de",12],["do.de",12],["compact-online.de",12],["fuckyeah.shop",12],["kiyoua-news.de",12],["tourismus-uckermark.de",12],["angelmagazin.de",12],["technik-hauptstadt.de",12],["tuhlteim-pedia.de",12],["fobizz.com",12],["fabian-heinz-webdesign.de",12],["jpgames.de",12],["kulturpass-kino.de",12],["aspies.de",12],["frixtender.de",12],["brauerei-strate.de",12],["hookahx.de",12],["frickeldave.de",12],["leben-mit-ohne.de",12],["ilyabiz.com",12],["neuneinhalb.org",12],["baycix.de",12],["basta.berlin",12],["herrlichergarten.de",12],["spieltraum-berlin.de",12],["patria.net",12],["blog.ipc-computer.de",12],["gaming-grounds.de",12],["ekiwi-blog.de",12],["erp-up.de",12],["philosophia-perennis.com",12],["tecsafe.de",12],["devm.io",12],["schnittmuster-datenbank.de",12],["rosgovas.com",12],["blu-ray-rezensionen.net",12],["bricksforge.io",12],["lenovocampus.de",12],["rotlichtaus.de",12],["louisreynier.com",12],["stricken-online.com",12],["haarausfall-stopp.com",12],["cargoe.at",12],["pandore-gendarmerie.org",12],["pureselfmade.com",12],["fild.de",12],["m-m-m.de",12],["yogainspires.co.uk",12],["youngimages.de",12],["katzenbaumdesign.de",12],["goerlach-gmbh.com",12],["lichtempfindlich.org",12],["gasthaus-schmidmayer.de",12],["narrwalla.de",12],["efg-passau.de",12],["gefahrgutjaeger.de",12],["locafrique-sf.com",12],["financeads.com",12],["tutonaut.de",12],["freegossip.gr",12],["ltmemory.de",12],["randombrick.de",12],["playcentral.de",12],["nachbelichtet.com",12],["philosophenlexikon.de",12],["schulebruetten.ch",12],["almacenessanagustin.com",12],["autoverwertung-berk.de",12],["gosch.de",12],["ousuca.com",12],["stw-langenfeld.de",12],["yurishop.it",12],["europace.de",12],["autobrinkmann.de",12],["move-ment.at",12],["techniknews.net",12],["epages.com",12],["thinkingwithyou.com",12],["mfu-pilotenclub.at",12],["artkon.de",12],["running-green.de",12],["danielederosa.de",12],["ivfp.de",12],["bs-achern.de",12],["swiss-commerce.ch",12],["asga.ch",12],["ellasblog.de",12],["gamenite.de",12],["mmo-sankar.de",12],["istaf-indoor.de",12],["iqskitchen.de",12],["ekiwi.de",12],["nordlicht-ev.de",12],["zimmerwetter.de",12],["pinel-netzwerk.de",12],["bierspot.de",12],["lightcon.com",12],["roschmann.de",12],["egon-w-kreutzer.de",12],["terra-natur.com",12],["devowl.io",12],["cleverpush.com",12],["subitec.com",12],["kwerfeldein.de",12],["tecalliance.net",12],["viel-unterwegs.de",12],["madame-lenormand.de",12],["4kfilme.de",12],["gymnasium-hochdahl.de",12],["popp.eu",12],["maniac.de",12],["supertipp-online.de",12],["winlocal.de",12],["schiffe-und-kreuzfahrten.de",12],["guiademayores.com",12],["jankarres.de",12],["nahrungsmittel-intoleranz.com",12],["branson-germany.de",12],["miriamkreativ.de",12],["zaunbau-koch.de",12],["bsk-consulting.de",12],["windata.de",12],["prodopa.de",12],["zahnarzt-kuboth.de",12],["audiovision.de",12],["brachmannofficial.com",12],["compari.net",12],["computer-und-technik-im-wohnmobil.de",12],["seifriz-preis.de",12],["suitapp.de",12],["rossoft.co.uk",12],["wind-craft.eu",12],["manyanet.org",12],["mack-design.com",12],["pocket-pirates-prt.de",12],["tanzschulebogner.de",12],["toplink.de",12],["vg-veitsbronn-seukendorf.de",12],["skiweltcup.tv",12],["desser.co.uk",12],["symposium.org",12],["manneskraft-gesteigert.com",12],["barracred.com.br",12],["tv-sport.de",12],["boheme-schwabing.de",12],["spherity.com",12],["tc-equipment.de",12],["webfactory-i4.de",12],["webtimiser.de",12],["wp-ninjas.de",12],["profiel.de",12],["goeltzschtal-reisen.de",12],["everbloom.eu",12],["myclim8.com",12],["smiley.blue",12],["tulipize.com",12],["burzaucebnic.sk",12],["komm-mit.com",12],["istdasvegan.eu",12],["openforests.com",12],["industriemedien.at",12],["torinostoria.com",12],["igvm.de",12],["pinel.de",12],["music-service-geiger.de",12],["insidetrading.de",12],["ls-service.at",12],["blogyourthing.com",12],["bildung-ab-50.de",12],["teilzeitreisender.de",12],["vivoil.com",12],["borderline-plattform.de",12],["accace.ro",12],["lang-ag.com",12],["reise-zikaden.de",12],["nmmn.com",12],["exitroom.berlin",12],["weiterbildungsfinder.de",12],["erfurt-touristinformation.de",12],["elisazunder.de",12],["visconti.partners",12],["plr-paket.de",12],["spytunes.com",12],["schneelaeuferzunft.de",12],["flaviamelissa.com.br",12],["flughafen.tips",12],["webtapete.de",12],["erbsenprinzessin.com",12],["cranimax.com",12],["ac-grimmen.de",12],["floristasgarcia.es",12],["monikabirknerfreedombusiness.de",12],["lattinepersonalizzate.it",12],["olmatic.de",12],["die-werbeschmiede.de",12],["supereight.net",12],["visitmedia.de",12],["egro-direktwerbung.de",12],["alleingeborener-zwilling.com",12],["actrento.com",12],["antik-shop.de",12],["accace.cz",12],["happiness-bundles.com",12],["classic-emaille.de",12],["fakturia.de",12],["beeze.de",12],["brunozimmer.de",12],["derhoerbuchblog.de",12],["udo-lermann.de",12],["ciss.de",12],["volksfest-nuernberg.de",12],["ubisys.de",12],["wildbits.de",12],["softedu.pl",12],["maxkoch.de",12],["mario-kaps.de",12],["salzstreuner.de",12],["goessential.com",12],["tiesse.com",12],["compagniefruitiere.fr",12],["motivationstipp.de",12],["holzkisten-fabrik.de",12],["dasmagazin.de",12],["akademie-management.de",12],["salzerkfz.de",12],["m38a1.de",12],["thomasschlechter.de",12],["smorfianapoletanaweb.it",12],["vzm.de",12],["proofing.de",12],["kbmv-matting.de",12],["vitalplus.com",12],["karver-systems.com",12],["boeser-chinese.de",12],["reinhardstrempel.de",12],["bewusstes-zentrum.de",12],["wildpark-ortenburg.de",12],["24hessen.de",12],["janamaenz.photography",12],["prodottidellapiazza.it",12],["continentale-hannover.de",12],["accace.sk",12],["wzl-zwickau.de",12],["tkm-systemtechnik.de",12],["drive4brands.de",12],["brancaia.com",12],["trirhena-consulting.de",12],["pferde-hunde-therapie.de",12],["ffzblossin.de",12],["coyagaming.de",12],["cocktailsworld.net",12],["forum-koepenick.de",12],["immobilien-skiba.de",12],["penzkofer-bau.de",12],["fitnesscenter-schardt.de",12],["abcteile24.de",12],["wohnmobilcenter-drechsler.de",12],["crossculture-academy.com",12],["blhv.de",12],["blindbild.com",12],["zouboulis.com",12],["esderaiz.com",12],["ichbindochnichthierumbeliebtzusein.com",12],["von-zinsen-leben.de",12],["c-parts.de",12],["accademiainformatica.com",12],["lobetalarbeit.de",12],["hannover-living.de",12],["tsg6209weinheim.de",12],["stefaniegoldmarie.com",12],["dictum-shop.de",12],["oakbeardcare.com",12],["patchbox.com",12],["lazyinvestors.de",12],["frohreich.de",12],["transport-versicherungen.info",12],["mummelito.de",12],["reisekontakte.at",12],["ojas.de",12],["stadt-schoeneck.de",12],["piazzadeimestieri.it",12],["fasteninfos.de",12],["brodbeck-dd.de",12],["hundewelpe.de",12],["jadent.de",12],["duft-werk.de",12],["wunderpen.com",12],["crazeuk.com",12],["drhorvath.de",12],["weingut-knipser.de",12],["donostiroller.com",12],["roemermann.com",12],["bestwig.de",12],["tango-flores.de",12],["china-central-consultants.com",12],["lacasadavantialsole.org",12],["naturseifen-moosmed.de",12],["akzent-magazin.com",12],["wp-loft.de",12],["welte-glasuren.com",12],["balsamico.shop",12],["sl-landschaftsgestaltung.de",12],["betec.de",12],["alquilerordenadores.com",12],["bayern-kreativ.de",12],["tim-ehling.com",12],["signisalc.org",12],["coworkingrepublic.com",12],["dacsa.com",12],["plzenoviny.cz",12],["odw-journal.de",12],["kasteninblau.de",12],["lichttraeumer.de",12],["missinfogeek.net",12],["automatiksysteme.com",12],["adzurro.de",12],["vectorsoft.de",12],["suedafrika-wein.de",12],["noaf.de",12],["hundgemacht.net",12],["testefiorite.it",12],["klsys.com",12],["feuerhexen.de",12],["lemarit.com",12],["lameerooftop.com",12],["ideentitaet.com",12],["kaiser-mania.de",12],["accace.com",12],["naku.at",12],["goldpreis24.de",12],["ejwleo.de",12],["josefbergs.com",12],["caucasus-naturefund.org",12],["energiemetropole-leipzig.de",12],["von-neindorff-stiftung.de",12],["locandazita.com",12],["samadhi-vegetarian.de",12],["host.pl",12],["pentadoc-radar.com",12],["kd-slovenija.de",12],["accace.hu",12],["stilweb.it",12],["wolfgangallgaeuer.com",12],["kohlkg.de",12],["rechtsanwalt-nierfeld.de",12],["karlhoeffkes.de",12],["verstehepferde.de",12],["socceressen.de",12],["dcore.de",12],["edr-software.com",12],["denk-doch-mal.de",12],["meinstream.net",12],["stefan-froescher.eu",12],["zabel-group.de",12],["photofloh.de",12],["annabeauty-stuttgart.de",12],["swg-chemnitz.de",12],["klicks-kaufen.de",12],["levne-sauny.cz",12],["versicherungsmakler-leistenschneider.de",12],["arsdigita.de",12],["flugschule-hochries.de",12],["osmc.de",12],["zumkutscher.de",12],["evkirche-eilsen.de",12],["thingybob.de",12],["inicionet.com",12],["feucht-obsttechnik.de",12],["weimar-touristinformation.de",12],["yplay.de",12],["vcfrankfurt.de",12],["derklassiker.de",12],["lepetitmarchedauvergne.fr",12],["gooloo.de",12],["pizzeria-algusto.de",12],["presto-personaldienste.de",12],["wallygusto.de",12],["frigge-dinstak.de",12],["klangmassage-moser.de",12],["grupo-loma.com",12],["samenbank-berlin.de",12],["flow-in-yoga.de",12],["lb-consultores.com",12],["b757.info",12],["luegeten.ch",12],["hof-droste.de",12],["aachen50plus.de",12],["arabesque-essen.de",12],["grid.de",12],["canvascga.com",12],["mallorca-unternehmen.com",12],["hauspanorama.de",12],["vienna-interiors.at",12],["music-on-net.de",12],["baumarkt-vogl.at",12],["knoblauch.de",12],["rissland-kunststoffe.de",12],["fahrstil.cc",12],["hallesches-fotoatelier.de",12],["dollenberg-isolierung.de",12],["timo-bernhard.de",12],["feuerwehr-oberau.de",12],["kuechenboerse.de",12],["erlebnispark-ziegenhagen.de",12],["frauzuckerbroetchen.com",12],["hopfner.info",12],["tiermasseur-mannsberger.at",12],["gcol.de",12],["blueoceangaming.com",12],["pinel-medizin.de",12],["knauer-galabau.de",12],["zahnarzt-dr-henkel.de",12],["tonispizza-rastatt.de",12],["wichmann.biz",12],["schuetzendepot.de",12],["horizonte.com",12],["dayspamainz.de",12],["gerdes-reisen.de",12],["dg-pw.de",12],["brill-art.de",12],["carbon.ag",12],["199-euro-computer.de",12],["pndracingteam.net",12],["sv-langenfeld.de",12],["steinway-park-seesen.de",12],["sonderversum.com",12],["forwardis.com",12],["verein-fairbund.de",12],["hs-soft.com",12],["hans-engelke.de",12],["vapecoco.com",12],["imprints.de",12],["rolandgermany.com",12],["fschemie-goettingen.de",12],["hypnose.ac",12],["estudio-nous.com",12],["kunstmuseum-heidenheim.de",12],["htvb.org",12],["ridee.bike",12],["zur-glocke.com",12],["hotelkristall.it",12],["babiceurican.cz",12],["farbenherz.com",12],["it-koehler.com",12],["bklm-ahaus.de",12],["gesundheitsladen-online.de",12],["createchange.me",12],["amway-estonia.com",[13,14,15]],["amway-latvia.com",[13,14,15]],["amway-lithuania.com",[13,14,15]],["amway.es",[13,14,15]],["amway.no",[13,14,15]],["amway.nl",[13,14,15]],["amway.co.uk",[13,14,15]],["amway.com.tr",[13,14,15]],["amway.pt",[13,14,15]],["amway.be",[13,14,15]],["amway.sk",[13,14,15]],["amway.de",[13,14,15]],["amway.ch",[13,14,15]],["amway.gr",[13,14,15]],["amway.ie",[13,14,15]],["amway.se",[13,14,15]],["amway.pl",[13,14,15]],["amway.bg",[13,14,15]],["amway.hr",[13,14,15]],["amway.dk",[13,14,15]],["amway.cz",[13,14,15]],["amway.si",[13,14,15]],["amway.ro",[13,14,15]],["amway.fr",[13,14,15]],["amway.fi",[13,14,15]],["amway.it",[13,14,15]],["sourceforge.net",16],["anna.fi",17],["tweakers.net",[20,21,22,23,24,25,26]],["yle.fi",[27,28]],["philips-hue.com",29],["podimo.com",30],["express.co.uk",31],["ilgazzettino.it",[32,33]],["ilmessaggero.it",[32,33]],["ilsecoloxix.it",[32,33]],["tvn24.pl",34],["linternaute.com",35]]);

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
            try { value = safe.JSON_parse(raw.slice(5)); } catch(ex) { return; }
        } else if ( raw.startsWith('{') && raw.endsWith('}') ) {
            try { value = safe.JSON_parse(raw).value; } catch(ex) { return; }
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
    try { setConstant(...argsList[i]); }
    catch(ex) {}
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
