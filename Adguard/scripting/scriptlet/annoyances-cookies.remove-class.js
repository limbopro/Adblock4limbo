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
const uBOL_removeClass = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["cookie-consent-active","body","stay"],["cookie-overlay-active","body","stay"],["cookiebanner-body","body","stay"],["idgcp__layer--active","html","stay"],["modal-open","body","stay"],["hasPopup","body","stay"],["darker","body","stay"],["scommerce-gdpr-disabled","div","stay"],["no-scroll","html","stay"],["compensate-for-scrollbar","body","stay"],["gdpr-shown","body","stay"],["cookie-consent__wrapper","div","stay"],["cookies-request","body","stay"],["cx-modal-open","html","stay"],["cx-no-scroll","html","stay"],["e-cookie-bar-open","body","stay"],["cookies-not-set","body","stay"],["no-consent","html","stay"],["is-blurred-cookiebox","html","stay"],["ccpaCookieBanner-acceptedAll","body","stay"],["cookies-show",".cookies-show","stay"],["disable-background","body","stay"],["cookie--not-set","body","stay"],["_cookiebanner","body","stay"],["async-hide","html","stay"],["ntd-gdpr-no-scroll","body","stay"],["modal-background","div","stay"],["pef-no-cookie","body","stay"],["cookie-not-accepted","body","stay"],["c-body--locked-always","body","stay"],["global-cookie","div","stay"],["disable-scroll","","stay"],["bg-gray","div","stay"],["cookie-active","body","stay"],["ccm-blocked","html","stay"],["ccm-blocked","body","stay"],["is-modal-cookies-visible","body","stay"],["layerActive","","stay"],["cookiebar-open","body","stay"],["blur","body","stay"],["cookie","","stay"],["cookieconsent-active","body","stay"],["cookieMsg","","stay"],["cookie_consent__alert","","stay"],["gdpr-cookie-notice-center-loaded","","stay"],["has-open-cookie","","stay"],["om_cookie_active","","stay"],["tvp-cookie-scroll-lock","","stay"],["cookie-overlay","","stay"],["disable","div","stay"],["prevent-scroll","","stay"],["fog","","stay"],["cookie-hint","","stay"],["dp--cookie-consent","body","stay"],["body-overlay-scrollable","","stay"],["modal-open","","stay"],["no-scroll","body","stay"],["show-cookie-consent","","stay"],["is-active-cookiebar","","stay"],["-locked","","stay"],["has-banner","body.has-banner","stay"],["pointerevents","","stay"],["cookie-accept-required","","stay"],["cookie-open","","stay"],["cookiePopupVisible","","stay"],["unreadable-display","","stay"],["mandatory_cookie_modal","","stay"],["wwzoverlay--open","","stay"],["gdpr-infobar-visible","","stay"],["cookie-enabled","","stay"],["cookie-overlay--open","","stay"],["cookie-banner-open","","stay"],["overlay-content","body","stay"],["is-active-cookiebar","body","stay"],["didomi-popup-open","body"],["idxrcookies-block-user-nav","body","stay"],["ccpa-banner","","stay"],["modal-cacsp-open","","stay"],["modal-cacsp-box","","stay"],["js-modalUnclosable","","stay"],["js-cookiesModal|is-open",".js-cookiesModal,.is-open"],["remodal-bg","","stay"],["cookie-warning-open","","stay"],["with-featherlight","","stay"],["cookies-shown","body","stay"],["no-cookie","","stay"],["dimmeractive","body","stay"],["snoop-modal-open","body","stay"],["is-blurred-cookiebox","","stay"],["consent-manager--popup","body","stay"],["consent-manager-open","body","stay"],["zp-gtm-scripts--blur","","stay"],["dots","","stay"],["cookies-modal-open","","stay"],["overlay","body","stay"],["messages-active","","stay"],["xh-thumb-disabled","html","stay"],["cdk-overlay-container","","stay"],["b-dialog","","stay"],["disabled","body","stay"],["lock-scroll","","stay"],["disabled","header","stay"],["cookie-not-accepted-overlay","","stay"],["blurred-page","","stay"],["cookie-consent--present","","stay"],["header-gdrp-cookies-visible","","stay"],["fixed","","stay"],["noScroll","","stay"],["cookie_notification","","stay"],["blocked-body","","stay"],["has-no-scroll","","stay"],["blured","","stay"],["noscroll","body","stay"],["has-overlay","","stay"],["cookie-consent-is-active","body","stay"],["cookiesgdpr__scroll","","stay"],["modal-show","","stay"],["gdpr","","stay"],["cookieopened","body","stay"],["cookiewall-active","body","stay"],["is-cookie-notice","body","stay"],["cookie-consent-banner-open","html","stay"],["modal-overlay","","stay"],["blur","","stay"],["cookielaw-blur-background","","stay"],["sp-message-open","html","stay"],["modalOpen___gZykv","body"],["cookie-bar","","stay"],["hasCookieBanner","body","stay"]];

const hostnamesMap = new Map([["winparts.be",0],["winparts.eu",0],["winparts.fr",0],["winparts.ie",0],["winparts.nl",0],["winparts.se",0],["sportano.sk",1],["sportano.de",1],["sportano.bg",1],["sportano.hu",1],["sportano.ro",1],["sportano.cz",1],["klinik-am-ring.de",2],["idg.se",3],["buildex.cz",4],["gruenderservice.at",5],["caiacosmetics.com",6],["pdc-big.nl",7],["pdc-big.it",7],["pdc-big.ie",7],["pdc-big.fr",7],["pdc-big.es",7],["pdc-big.be",7],["pdc-big.at",7],["pdc-big.co.uk",7],["pdc-big.de",7],["pdc-big.com",7],["elio-systems.io",[8,15]],["sanha.com",[8,15]],["recettesetcabas.com",9],["flinders.edu.au",10],["opera.com",11],["groningenairport.nl",12],["crocs.co.uk",[13,14]],["crocs.eu",[13,14]],["crocs.nl",[13,14]],["crocs.fi",[13,14]],["crocs.fr",[13,14]],["crocs.de",[13,14]],["rappjmed.ch",16],["stilord.fr",17],["stilord.it",17],["stilord.de",17],["stilord.es",17],["dasfutterhaus.at",18],["developer.paypal.com",19],["cpc2r.ch",20],["zen.com",21],["tecsafe.de",22],["foxracingshox.de",22],["stromnetz.berlin",23],["websummit.com",24],["thehustle.co",24],["epochtimes.fr",25],["ajbell.co.uk",26],["economiapertutti.bancaditalia.it",27],["quantamagazine.org",28],["tradersunion.com",28],["phsgreenleaf.co.uk",29],["phswashrooms.ie",29],["mccolls.co.uk",[30,31]],["crt.hr",32],["yourstorebox.com",33],["clickskeks.at",[34,35]],["housell.com",36],["lactostop.de",37],["mibe.de",37],["spilger.de",38],["dbs.si",39],["abcya.com",40],["jongcdenv.be",41],["umicore.jp",41],["umicore.cn",41],["umicore.pl",41],["umicore.kr",41],["umicore.co.th",41],["umicore.fr",41],["umicore.de",41],["donneurdecellulessouches.be",41],["stammzellenspender.be",41],["stemcelldonor.be",41],["umicore.com",41],["umicore.com.br",41],["koenvandenheuvel.be",41],["stamceldonor.be",41],["nahima.be",41],["catused.com",42],["eujuicers.cz",43],["graziellawicki.com",44],["funnelcockpit.com",44],["dnk.nl",45],["eam.de",46],["eam-netz.de",46],["tvp.pl",47],["cellardoor.co",48],["ampire.de",49],["verpackungsstadl.ch",49],["imkershoperzgebirge.de",49],["modellbahndealer.de",49],["tillit-bikes.shop",49],["bike-onlineshop.de",49],["futspo.de",49],["compravo.de",49],["perpedale.de",49],["modellbau-jung.de",49],["verpackungsstadl.at",49],["modellbau-vordermaier.de",49],["bike-supply.de",49],["wroc.pl",50],["basenio.de",51],["fm-systeme.de",52],["gartenhotel-crystal.at",53],["swffm.de",53],["studentenwerkfrankfurt.de",53],["dmsg.de",53],["bgk.pl",53],["pflegezeit-berlin.de",53],["gpd-nordost-onlineberatung.de",53],["proabschluss-beratung.de",53],["hilfe-telefon-missbrauch.online",53],["dww-suchtberatung.de",53],["cyberforum.de",53],["gutscheine.eurothermen.at",53],["wolff-mueller.de",53],["ras.bz.it",53],["wifiwien.at",[54,55]],["wifikaernten.at",[54,55]],["wifi.at",[54,55]],["pdf-archive.com",55],["5asec.pt",56],["tui.dk",56],["tui.fi",56],["tui.no",56],["tui.se",56],["leslipfrancais.fr",56],["bremischevb.de",[56,114]],["meinebank.de",[56,114]],["vb-rb.de",[56,114]],["gladbacher-bank.de",[56,114]],["nordthueringer-volksbank.de",[56,114]],["bodenseebank.de",[56,114]],["rb-oberaudorf.de",[56,114]],["volksbank-trossingen.de",[56,114]],["owl-immobilien.de",[56,114]],["volksbank-backnang.de",[56,114]],["volksbank-international.de",[56,114]],["raiba-westhausen.de",[56,114]],["vr-nopf.cz",[56,114]],["vrbankimmobilien.de",[56,114]],["cvw-privatbank-ag.de",[56,114]],["rb-denzlingen-sexau.de",[56,114]],["rv-banken.de",[56,114]],["volksbank-remseck.de",[56,114]],["raiba-gr.de",[56,114]],["vrb-spangenberg.de",[56,114]],["rb-berghuelen.de",[56,114]],["vb-lauterecken.de",[56,114]],["rb-sondelfingen.de",[56,114]],["voba-deisslingen.de",[56,114]],["saechsischer-gewinnsparverein.de",[56,114]],["rb-hardt-bruhrain.de",[56,114]],["volksbank-daaden.de",[56,114]],["dervolksbanker.de",[56,114]],["volksbank-kirnau.de",[56,114]],["skbwitten.de",[56,114]],["raiba-ndwa.de",[56,114]],["volksbank-mittleres-erzgebirge.de",[56,114]],["rb-eching.de",[56,114]],["volksbank-aktiv.de",[56,114]],["vbsuedemsland.de",[56,114]],["voba-moeckmuehl.de",[56,114]],["volksbank-freiburg.de",[56,114]],["vbleos.de",[56,114]],["meine-rvb.de",[56,114]],["aachener-bank.de",[56,114]],["muenchner-bank.de",[56,114]],["volksbank-dh.de",[56,114]],["volksbankeg.de",[56,114]],["sparda-bank-hamburg.de",[56,114]],["sparda-sw.de",[56,114]],["volksbank-thueringen-mitte.de",[56,114]],["vrbankeg.de",[56,114]],["bernhauser-bank.de",[56,114]],["vvrbank-krp.de",[56,114]],["vvr-bank.de",[56,114]],["vb-mittelhessen.de",[56,114]],["vr-bayernmitte.de",[56,114]],["vobadhk.de",[56,114]],["rheingauer-volksbank.de",[56,114]],["dovoba.de",[56,114]],["vr-dachau.de",[56,114]],["pollfish.com",57],["werkenbijtrekpleister.nl",58],["werkenbijkruidvat.be",58],["rassenlijst.info",58],["werkenbijiciparisxl.nl",58],["tesa-labtec.com",59],["tesatape.ru",59],["tesa.com",59],["flightradar24.com",60],["apk-vk.at",61],["vietnamairlines.com",62],["incotec.com",63],["croda.com",63],["exaktafoto.se",64],["campingdusoleil.com",65],["hotel-la-chaumiere.com",65],["les-anges-gardiens.fr",65],["croco-kid.com",65],["cambridge-centre.fr",65],["equisud.com",65],["allokebab-pau.fr",65],["etre-visible.local.fr",65],["mas-montebello66.com",65],["camping-residentiel-les-marronniers-jura.fr",65],["dj4events.fr",65],["saintjoursexpertmaritime.com",65],["az-renovation.fr",65],["presquilemultiservices.com",65],["hotel-aigoual.com",65],["hotel-restaurant-pau.com",65],["desrayaud-paysagistes.com",65],["hotelsaintcharles.fr",65],["agvillagecamarguais.com",65],["joyella.com",65],["gabriel-godard.com",65],["artech-sellerie.com",65],["motoclubernee.com",65],["ledauphinhotel.com",65],["cuisin-studio.com",65],["biomeo-environnement.com",65],["leman-instruments.com",65],["esthetique-meyerbeer.com",65],["institut-bio-naturel-nice.fr",65],["nature-et-bois.fr",65],["transmissions-bordeaux.com",65],["kinechartreuse.com",65],["corsegourmande.com",65],["cotedecor.com",65],["restaurant-la-badiane.fr",65],["systelia.fr",65],["lesjardinsinterieurs.com",65],["helenevue.com",65],["saubusse-thermes.com",65],["dehn.es",66],["dehn.fr",66],["dehn.it",66],["dehn.hu",66],["desitek.dk",66],["dehn.at",66],["dehn.de",66],["wwz.ch",67],["inyova.at",68],["inyova.ch",68],["inyova.de",68],["ccalbacenter.com",68],["wamu.org",68],["momentive.com",69],["kennedyslaw.com",70],["elekta.com",71],["stratasysdirect.com",72],["stratasys.com",72],["werkenbijkruidvat.nl",73],["ghacks.net",74],["cutoff.es",75],["whyopencomputing.com",75],["mbanc.com",76],["dentalgalindo.com",[77,78]],["brutalvisual.com",[77,78]],["archeologia.com.pl",[77,78]],["letrayframe.com",[77,78]],["osteofisintegral.es",[77,78]],["uco.cat",[77,78]],["buecheler-kollegen.de",[77,78]],["seminariodeosma-soria.org",[77,78]],["kamensenica.sk",[77,78]],["movimentoofficinedelsud.it",[77,78]],["trident.se",[77,78]],["semanasantademalagaayeryhoy.com",[77,78]],["diazfloristasestrella.com",[77,78]],["cosechavida.com",[77,78]],["centre-hypnose-moselle.com",[77,78]],["broncoillustration.com",[77,78]],["sumoingenio.com",[77,78]],["aligepro.es",[77,78]],["muevo.es",[77,78]],["azulejosacedo.com",[77,78]],["sana.cz",[77,78]],["aliapinto.com",[77,78]],["tsconline.es",[77,78]],["polifast.it",[77,78]],["napos.cz",[77,78]],["gutshaus-neuendorf-usedom.de",[77,78]],["kunterbunte-kinder.de",[77,78]],["desatando.org",[77,78]],["ledocom.cz",[77,78]],["aliciasuarez.net",[77,78]],["diabramar.com",[77,78]],["lamagnalonga.org",[77,78]],["benejamrefrigeracion.com",[77,78]],["micropigmentacioncapilarbcn.com",[77,78]],["revistaauge.com.ar",[77,78]],["arcusnet.se",[77,78]],["videogenic.es",[77,78]],["grundschule-remagen.de",[77,78]],["aceitessatunion.com",[77,78]],["servigraphic.com.ar",[77,78]],["textsteine.de",[77,78]],["campergarage.es",[77,78]],["administradorfincasblog.com",[77,78]],["balgal.es",[77,78]],["grafika-dtp-produkcia.sk",[77,78]],["unmardeconstelaciones.com",[77,78]],["salobella.com",[77,78]],["careon.se",[77,78]],["gymnosport.com",[77,78]],["easyhomes.com.es",[77,78]],["casavaledalama.pt",[77,78]],["dosc.es",[77,78]],["fcfoz.pt",[77,78]],["berevolk.com",[77,78]],["hvpropertyclearance.co.uk",[77,78]],["calamo.se",[77,78]],["elserratplanoles.com",[77,78]],["bubblessea.es",[77,78]],["disperator.se",[77,78]],["ecoparquets.com",[77,78]],["zlotaraczkalublin.pl",[77,78]],["congresoscostadelsol.com",[77,78]],["pneumaticiroma.it",[77,78]],["asprona.es",[77,78]],["virgendefatima.es",[77,78]],["patronatpremia.cat",[77,78]],["2points13.fr",[77,78]],["3d3.es",[77,78]],["abantos.es",[77,78]],["abastanimacio.org",[77,78]],["academiafrancesadebelleza.co",[77,78]],["acaluca.org",[77,78]],["acce.es",[77,78]],["ad-particles.com",[77,78]],["adea.sk",[77,78]],["afplr.fr",[77,78]],["agiletalon.fr",[77,78]],["agiratou.com",[77,78]],["aidaromero.com",[77,78]],["alkoholochnarkotika.se",[77,78]],["alligatorbioscience.se",[77,78]],["anea.es",[77,78]],["animala.es",[77,78]],["antequerabelleza.com",[77,78]],["apimadrid.net",[77,78]],["aquatrend.sk",[77,78]],["arabesque-formation.org",[77,78]],["arrivamallorca.es",[77,78]],["arteydeco.es",[77,78]],["asapservicios.net",[77,78]],["aspock.com",[77,78]],["atout-voyages.com",[77,78]],["autocareslazara.es",[77,78]],["autocaresmariano.com",[77,78]],["autoform.pl",[77,78]],["ayudatranspersonal.com",[77,78]],["bacabeton.cz",[77,78]],["begalvi.com",[77,78]],["bent-com.com",[77,78]],["berliner-haeuser.de",[77,78]],["bespokespain.com",[77,78]],["bevent-rasch.se",[77,78]],["bio-cord.es",[77,78]],["biotropica.fr",[77,78]],["bornes-eurorelais.fr",[77,78]],["braeu-stueble.de",[77,78]],["brendanoharamp.scot",[77,78]],["briau.com",[77,78]],["caleulalia.com",[77,78]],["cande-sur-beuvron.com",[77,78]],["carlhag.se",[77,78]],["carrier.se",[77,78]],["casadelaveiga.com",[77,78]],["caytas.com.tr",[77,78]],["cecjecuador.org.ec",[77,78]],["cegef.com",[77,78]],["centrediagonal.com",[77,78]],["centropolisportivomassari.it",[77,78]],["cerai.org",[77,78]],["cervosgrup.com",[77,78]],["chimeneasalicante.com",[77,78]],["circodelshow.com",[77,78]],["cliatec.com",[77,78]],["clinicabadal.es",[77,78]],["cometh-consulting.com",[77,78]],["copysud.fr",[77,78]],["cortilar.com",[77,78]],["crystal-finance.com",[77,78]],["ctangana.com",[77,78]],["cugatresidencial.com",[77,78]],["dake.es",[77,78]],["datatal.se",[77,78]],["degom.com",[77,78]],["delfis.es",[77,78]],["delogica.com",[77,78]],["dentalcompany.es",[77,78]],["descarpack.com.br",[77,78]],["desfiladeroediciones.com",[77,78]],["desomer.be",[77,78]],["diarioandalucia.es",[77,78]],["dibujos-animados.net",[77,78]],["direkt-immobilie.de",[77,78]],["dovozautznemecka.cz",[77,78]],["drpuigdollers.com",[77,78]],["dunamys.inf.br",[77,78]],["easyimplantology.com",[77,78]],["eb2b.com.pl",[77,78]],["echo-mieszkania.pl",[77,78]],["eclinic.com.sg",[77,78]],["edgeict.com",[77,78]],["eiglaw.com",[77,78]],["elandexpediciones.es",[77,78]],["emalec.com",[77,78]],["enlighten.net",[77,78]],["equifab.es",[77,78]],["escuelanauticamarenostrum.com",[77,78]],["esgrima.cat",[77,78]],["espaisperconviure.es",[77,78]],["etbygg.com",[77,78]],["eurepieces.fr",[77,78]],["euroenvio.com",[77,78]],["eurotex.es",[77,78]],["expertetfinance.fr",[77,78]],["farmarsketrhyfuturum.cz",[77,78]],["fastvisa.fr",[77,78]],["fauxdiplomes.org",[77,78]],["fisiolistic.com",[77,78]],["fondazionealbertosordi.it",[77,78]],["foyersekcjapolska.eu",[77,78]],["fundacjaeds.pl",[77,78]],["galeriaxanadu.pl",[77,78]],["garcia-ibanez.com",[77,78]],["gestenaval.com",[77,78]],["glaskogen.se",[77,78]],["globalteam.es",[77,78]],["goia.org.pl",[77,78]],["granibier.com",[77,78]],["grundia.se",[77,78]],["grupoisn.com",[77,78]],["gruporhzaragoza.com",[77,78]],["hagagruppen.se",[77,78]],["halima-magazin.com",[77,78]],["handelskammaren.com",[77,78]],["helitecnics.com",[77,78]],["helux.se",[77,78]],["hermanosalcaraz.com",[77,78]],["hjarnkoll.se",[77,78]],["hmfoundation.com",[77,78]],["hormimpres.com",[77,78]],["hoteldeprony.fr",[77,78]],["hotelroyalcatania.it",[77,78]],["houjethai.nl",[77,78]],["hummer.cz",[77,78]],["icld.se",[77,78]],["ict-project.it",[77,78]],["imagelova.id",[77,78]],["imprentalaspalmas.com",[77,78]],["informamiele.it",[77,78]],["inission.com",[77,78]],["inmobiliariavolga.com",[77,78]],["international-terra-institute.com",[77,78]],["inwaspain.com",[77,78]],["izkigolf.eus",[77,78]],["jdmusic.se",[77,78]],["juveycamps.com",[77,78]],["karel1.nl",[77,78]],["kaunokapiniuprieziura.lt",[77,78]],["kcmkompresor.com",[77,78]],["kewaccountants.co.uk",[77,78]],["konkretplus.pl",[77,78]],["krajci.cz",[77,78]],["krisvagenut.se",[77,78]],["kyoceracapetown.co.za",[77,78]],["labaguette.pl",[77,78]],["labintegrados.com",[77,78]],["ladderupinc.com",[77,78]],["landskronafoto.org",[77,78]],["langarri.es",[77,78]],["lawa.es",[77,78]],["laxo.se",[77,78]],["layher.se",[77,78]],["lifetraveler.net",[77,78]],["lindrooshalsa.se",[77,78]],["lobolab.es",[77,78]],["maisqueromanicorutas.com",[77,78]],["mallandonoandroid.com",[77,78]],["masconcas.com",[77,78]],["mediabest.cz",[77,78]],["megustaelvino.es",[77,78]],["mensa.se",[77,78]],["mestiteslilis.com",[77,78]],["minutoprint.com",[77,78]],["mirano.cz",[77,78]],["mogador.cz",[77,78]],["morphestudio.es",[77,78]],["motoaxial.com",[77,78]],["multiversidad.es",[77,78]],["mundollaves.com",[77,78]],["musicotherapie-federationfrancaise.com",[77,78]],["nauticaravaning.com",[77,78]],["nestville.sk",[77,78]],["nestvillepark.sk",[77,78]],["netromsoftware.ro",[77,78]],["nojesfabriken.se",[77,78]],["oddoneout.se",[77,78]],["opako.pl",[77,78]],["oserlafrique.com",[77,78]],["paintballalcorcon.com",[77,78]],["pallejabcn.com",[77,78]],["penicilinafruits.com",[77,78]],["peregrinoslh.com",[77,78]],["permis-lausanne.ch",[77,78]],["pernillaandersson.se",[77,78]],["piazzadelgusto.it",[77,78]],["pipi-antik.dk",[77,78]],["plasticosgeca.com",[77,78]],["plastimyr.com",[77,78]],["portal.unimes.br",[77,78]],["pro-beruf.de",[77,78]],["prophecyinternational.com",[77,78]],["psicoterapeuta.org",[77,78]],["puertasprieto.com",[77,78]],["puntosdefantasia.es",[77,78]],["pzmk.org.pl",[77,78]],["rastromaquinas.com",[77,78]],["rectoraldecastillon.com",[77,78]],["reinomineral.com",[77,78]],["reklamefreunde.de",[77,78]],["restauraciontalavera.es",[77,78]],["restauranthispania.com",[77,78]],["ristoranteeziogritti.it",[77,78]],["rubinmedical.dk",[77,78]],["rubinmedical.no",[77,78]],["rubinmedical.se",[77,78]],["sak.se",[77,78]],["sammetais.com.br",[77,78]],["sebastiancurylo.pl",[77,78]],["serigrafiaiorgi.com",[77,78]],["seyart.com",[77,78]],["sgaim.com",[77,78]],["sicamemt.org",[77,78]],["siguealconejoblanco.es",[77,78]],["sinfimasa.com",[77,78]],["skp.se",[77,78]],["skrobczynski.pl",[77,78]],["slush.de",[77,78]],["solebike.it",[77,78]],["solu-watt.fr",[77,78]],["soluzionainmobiliaria.es",[77,78]],["somoparque.com",[77,78]],["sorgingaztemoda.com",[77,78]],["sroportal.sk",[77,78]],["ssmf.se",[77,78]],["stobrasil.com.br",[77,78]],["stoparmut2015.ch",[77,78]],["studiodimuro.com",[77,78]],["subkultur-hannover.de",[77,78]],["sustanciagris.com",[77,78]],["szkt.sk",[77,78]],["tagibergslagen.se",[77,78]],["tallergastronomico.es",[77,78]],["tarna.fhsk.se",[77,78]],["tassenyalitzacio.com",[77,78]],["tctech.se",[77,78]],["teknoduegroup.it",[77,78]],["teloliquido.com",[77,78]],["temasa.es",[77,78]],["textilprint.sk",[77,78]],["thehouseofautomata.com",[77,78]],["tmgernika.com",[77,78]],["toastetmoi.fr",[77,78]],["tollare.org",[77,78]],["trattoriabolognesi.it",[77,78]],["triperavigatana.com",[77,78]],["tuckerfranklininsgrp.com",[77,78]],["tuftuf.net",[77,78]],["turuletras.com",[77,78]],["umfmb.fr",[77,78]],["upapsa.com",[77,78]],["valenciatoday.es",[77,78]],["vanghel-und-morawski.de",[77,78]],["vickycan.com",[77,78]],["ville-de-salles.com",[77,78]],["webbigt.se",[77,78]],["westlede.be",[77,78]],["wiemker.org",[77,78]],["woolink.co",[77,78]],["wp.fratgsa.org",[77,78]],["xatobaxestion.com",[77,78]],["xfactor-gmbh.de",[77,78]],["yougoenglish.com",[77,78]],["zigmoon.com",[77,78]],["canyon.com",[79,80]],["drimsim.com",81],["eteam-winkler.de",82],["kdn-elektro.de",82],["elektro-kotz.de",82],["elektro-service-rauh.de",82],["elektroanlagenbuettner.de",82],["be-connect.online",82],["bayergruppe.com",82],["bayer-wkt.de",82],["bayer-wind.de",82],["bayer-wd.de",82],["elektro-joa.de",82],["htechnik.de",82],["ehk-service.de",82],["bittner-tv.de",82],["elektro-suelzner.de",82],["elektro-leps.de",82],["elektromax-hausgeraete.de",82],["elektrotechnik-schedel.de",82],["elkugmbh.de",82],["ln-elektro-gmbh.de",82],["weiss-blau-gmbh.de",82],["sunbeam-energy.de",82],["prokauf.com",82],["lichtstudio-kerl.de",82],["liebing-beese.de",82],["hoeschel-baumann.de",82],["hausgeraete-kraemer.de",82],["gehlhaar-elektrotechnik.de",82],["ehs-elektrotechnik.de",82],["elektrojarschke.de",82],["elektrotechnik-fleischmann.de",82],["elektroseemueller.de",82],["schoerling-blitz.de",82],["ast-apolda.com",82],["elektro-klippel.de",82],["arntz-haustechnik.de",82],["elektro-bindel.de",82],["elektrotechnik-weiss.com",82],["brandschutz-hamburg.de",82],["wagnerelektrotechnik.de",82],["el-kramer.de",82],["mks-hof.de",82],["wernz-elektro.de",82],["e3-energy.de",82],["sg-solar.de",82],["elektrokrebs.de",82],["elektro-roehrl.de",82],["elektro-kreher.de",82],["giegling-vonsaal.de",82],["elektro-lehmann.com",82],["ems-wurzen.de",82],["scholpp.es",83],["scholpp.pl",83],["scholpp.it",83],["ptc.eu",83],["scholpp.com",83],["abo24.de",83],["overdrive.com",83],["wetu.com",83],["superwatchman.com",84],["bitburger-braugruppe.de",85],["proteincompany.fi",86],["proteinbolaget.se",86],["snoopmedia.com",87],["myguide.de",87],["study-in-germany.de",87],["daad.de",87],["futterhaus.de",88],["scottsofstow.co.uk",[89,90]],["zawszepomorze.pl",91],["wasserkunst-hamburg.de",92],["lta.org.uk",93],["brico-travo.com",94],["theateramrand.de",95],["jugend-praesentiert.de",95],["buktube.com",96],["xhamster.com",96],["xhamster2.com",96],["xhamster3.com",96],["xhamster.desi",96],["evium.de",97],["epayments.com",98],["riceundspice.de",99],["happysocks.com",[100,101]],["win2day.at",102],["porp.pl",103],["gesundheitsamt-2025.de",104],["coastfashion.com",105],["oasisfashion.com",105],["warehousefashion.com",105],["misspap.com",105],["karenmillen.com",105],["boohooman.com",105],["nebo.app",106],["groupeonepoint.com",107],["edpsciences.org",108],["bemmaisseguro.com",109],["scheidegger.nl",110],["phoenix.de",111],["strato.se",112],["strato.de",112],["mishcon.com",113],["bbva.es",115],["bbvauk.com",115],["bbva.be",115],["bbva.fr",115],["bbva.it",115],["bbva.pt",115],["suntech.cz",116],["digikey.co.za",117],["digikey.cn",117],["digikey.ee",117],["digikey.at",117],["digikey.be",117],["digikey.bg",117],["digikey.cz",117],["digikey.dk",117],["digikey.fi",117],["digikey.fr",117],["digikey.de",117],["digikey.gr",117],["digikey.hu",117],["digikey.ie",117],["digikey.it",117],["digikey.lv",117],["digikey.lt",117],["digikey.lu",117],["digikey.nl",117],["digikey.no",117],["digikey.pl",117],["digikey.pt",117],["digikey.ro",117],["digikey.sk",117],["digikey.si",117],["digikey.es",117],["digikey.se",117],["digikey.ch",117],["digikey.co.uk",117],["digikey.co.il",117],["digikey.com.mx",117],["digikey.ca",117],["digikey.com.br",117],["digikey.co.nz",117],["digikey.com.au",117],["digikey.co.th",117],["digikey.tw",117],["digikey.kr",117],["digikey.sg",117],["digikey.ph",117],["digikey.my",117],["digikey.jp",117],["digikey.in",117],["digikey.hk",117],["digikey.com",117],["eurosupps.nl",118],["pathe.nl",119],["makelaarsland.nl",120],["nordania.dk",121],["365direkte.no",121],["danskebank.lv",121],["danskebank.lt",121],["danskebank.no",121],["danskebank.fi",121],["danskebank.dk",121],["danskebank.com",121],["danskebank.se",121],["danskebank.co.uk",121],["danskeci.com",121],["danicapension.dk",121],["gewerbegebiete.de",122],["visti.it",123],["balay.es",124],["constructa.com",124],["gaggenau.com",124],["loudersound.com",125],["impulse.de",125],["pcgamer.com",125],["infoworld.com",125],["kiplinger.com",125],["omni.se",125],["it-times.de",125],["bitcoinmagazine.com",125],["deliciousmagazine.co.uk",125],["upday.com",125],["theguardian.com",125],["deutschlandcard.de",125],["szbz.de",125],["free-fonts.com",125],["lieferzeiten.info",125],["vice.com",125],["newsnow.co.uk",125],["out.com",125],["streampicker.de",125],["radiotimes.com",125],["nowtv.com",125],["kochbar.de",125],["toggo.de",125],["am-online.com",125],["n-tv.de",125],["newsandstar.co.uk",125],["tag24.de",125],["weltkunst.de",125],["noveauta.sk",125],["pnn.de",125],["economist.com",125],["crash.net",125],["norwaytoday.info",125],["insider.com",125],["preis.de",125],["ibroxnoise.co.uk",125],["celtsarehere.com",125],["nufcblog.co.uk",125],["sport1.de",125],["techconnect.com",125],["followfollow.com",125],["thespun.com",125],["mazdas247.com",125],["fastcar.co.uk",125],["vitalfootball.co.uk",125],["audi-sport.net",125],["bumble.com",125],["arcamax.com",125],["dilbert.com",125],["sportbible.com",125],["givemesport.com",125],["dartsnews.com",125],["gpfans.com",125],["justjared.com",125],["justjaredjr.com",125],["finanzen.at",125],["flights-idealo.co.uk",125],["idealo.com",125],["idealo.se",125],["idealo.nl",125],["idealo.pl",125],["idealo.pt",125],["idealo.fi",125],["idealo.dk",125],["idealo.no",125],["idealo.in",125],["idealo.at",125],["ladenzeile.at",125],["berliner-zeitung.de",125],["urbia.de",125],["essen-und-trinken.de",125],["wetter.de",125],["rtl-living.de",125],["vox.de",125],["ladenzeile.de",125],["advocate.com",125],["idealo.de",125],["wigantoday.net",125],["economistgroup.com",125],["transfermarkt.nl",125],["transfermarkt.es",125],["transfermarkt.pl",125],["transfermarkt.pt",125],["transfermarkt.at",125],["transfermarkt.it",125],["transfermarkt.fr",125],["transfermarkt.de",125],["transfermarkt.be",125],["transfermarkt.co.uk",125],["transfermarkt.us",125],["footballfancast.com",125],["cio.com",125],["jezebel.com",125],["splinternews.com",125],["denofgeek.com",125],["kinja.com",125],["theinventory.com",125],["rollingstone.de",125],["sueddeutsche.de",125],["csoonline.com",125],["tvmovie.de",125],["testberichte.de",125],["pcgameshardware.de",125],["4players.de",125],["guj.de",125],["bild.de",125],["wieistmeineip.de",125],["testbild.de",125],["stylebook.de",125],["skygroup.sky",125],["speisekarte.de",125],["haeuser.de",125],["cmo.com.au",125],["pcworld.co.nz",125],["idealo.it",125],["transfermarkt.jp",125],["transfermarkt.co.id",125],["autoexpress.co.uk",125],["transfermarkt.com",125],["esportsclub.nl",125],["webwinkel.tubantia.nl",125],["shopalike.nl",125],["autoweek.nl",125],["pcworld.es",125],["macworld.es",125],["idealo.es",125],["businessinsider.es",125],["motor.es",125],["autobild.es",125],["driving.co.uk",125],["stern.de",125],["pcgames.de",125],["sport.de",125],["idealo.fr",125],["barrons.com",125],["tori.fi",125],["snow-forecast.com",125],["tidende.dk",125],["kraloyun.com",125],["arnnet.com.au",125],["bunte.de",125],["handelsblatt.com",125],["techbook.de",125],["metal-hammer.de",125],["macworld.co.uk",125],["maxisciences.com",125],["ohmymag.com",125],["voici.fr",125],["geo.de",125],["businessinsider.de",125],["heise.de",125],["meinestadt.de",125],["politico.eu",125],["spieletipps.de",125],["finanznachrichten.de",125],["vtwonen.nl",125],["stol.it",125],["waitrose.com",126],["storyhouseegmont.dk",127],["storyhouseegmont.no",127],["storyhouseegmont.se",127],["egmont.com",127],["nordiskfilm.com",127],["faq.whatsapp.com",128],["blog.whatsapp.com",128],["www.whatsapp.com",128]]);

const entitiesMap = new Map([]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function removeClass(
    token = '',
    selector = '',
    behavior = ''
) {
    if ( typeof token !== 'string' ) { return; }
    if ( token === '' ) { return; }
    const classTokens = token.split(/\s*\|\s*/);
    if ( selector === '' ) {
        selector = '.' + classTokens.map(a => CSS.escape(a)).join(',.');
    }
    const mustStay = /\bstay\b/.test(behavior);
    let timer;
    const rmclass = function() {
        timer = undefined;
        try {
            const nodes = document.querySelectorAll(selector);
            for ( const node of nodes ) {
                node.classList.remove(...classTokens);
            }
        } catch(ex) {
        }
        if ( mustStay ) { return; }
        if ( document.readyState !== 'complete' ) { return; }
        observer.disconnect();
    };
    const mutationHandler = mutations => {
        if ( timer !== undefined ) { return; }
        let skip = true;
        for ( let i = 0; i < mutations.length && skip; i++ ) {
            const { type, addedNodes, removedNodes } = mutations[i];
            if ( type === 'attributes' ) { skip = false; }
            for ( let j = 0; j < addedNodes.length && skip; j++ ) {
                if ( addedNodes[j].nodeType === 1 ) { skip = false; break; }
            }
            for ( let j = 0; j < removedNodes.length && skip; j++ ) {
                if ( removedNodes[j].nodeType === 1 ) { skip = false; break; }
            }
        }
        if ( skip ) { return; }
        timer = self.requestIdleCallback(rmclass, { timeout: 67 });
    };
    const observer = new MutationObserver(mutationHandler);
    const start = ( ) => {
        rmclass();
        observer.observe(document, {
            attributes: true,
            attributeFilter: [ 'class' ],
            childList: true,
            subtree: true,
        });
    };
    runAt(( ) => {
        start();
    }, /\bcomplete\b/.test(behavior) ? 'idle' : 'loading');
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
        escapeRegexChars(s) {
            return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
    try { removeClass(...argsList[i]); }
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
    return uBOL_removeClass();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_removeClass = cloneInto([
            [ '(', uBOL_removeClass.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_removeClass);
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
    delete page.uBOL_removeClass;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
