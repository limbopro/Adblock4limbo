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

const argsList = [["cookie-consent-active","body","stay"],["cookie-overlay-active","body","stay"],["cookiebanner-body","body","stay"],["idgcp__layer--active","html","stay"],["modal-open","body","stay"],["hasPopup","body","stay"],["scommerce-gdpr-disabled","div","stay"],["no-scroll","html","stay"],["compensate-for-scrollbar","body","stay"],["gdpr-shown","body","stay"],["cookie-consent__wrapper","div","stay"],["cookies-request","body","stay"],["cx-modal-open","html","stay"],["cx-no-scroll","html","stay"],["e-cookie-bar-open","body","stay"],["cookies-not-set","body","stay"],["no-consent","html","stay"],["is-blurred-cookiebox","html","stay"],["ccpaCookieBanner-acceptedAll","body","stay"],["cookies-show",".cookies-show","stay"],["disable-background","body","stay"],["cookie--not-set","body","stay"],["_cookiebanner","body","stay"],["async-hide","html","stay"],["ntd-gdpr-no-scroll","body","stay"],["modal-background","div","stay"],["pef-no-cookie","body","stay"],["cookie-not-accepted","body","stay"],["c-body--locked-always","body","stay"],["global-cookie","div","stay"],["disable-scroll","","stay"],["cookie--not-set","","stay"],["bg-gray","div","stay"],["cookie-active","body","stay"],["ccm-blocked","html","stay"],["ccm-blocked","body","stay"],["is-modal-cookies-visible","body","stay"],["layerActive","","stay"],["cookiebar-open","body","stay"],["blur","body","stay"],["cookie","","stay"],["cookieconsent-active","body","stay"],["cookieMsg","","stay"],["cookie_consent__alert","","stay"],["gdpr-cookie-notice-center-loaded","","stay"],["has-open-cookie","","stay"],["om_cookie_active","","stay"],["tvp-cookie-scroll-lock","","stay"],["cookie-overlay","","stay"],["disable","div","stay"],["prevent-scroll","","stay"],["fog","","stay"],["cookie-hint","","stay"],["dp--cookie-consent","body","stay"],["body-overlay-scrollable","","stay"],["modal-open","","stay"],["no-scroll","body","stay"],["show-cookie-consent","","stay"],["is-active-cookiebar","","stay"],["-locked","","stay"],["has-banner","body.has-banner","stay"],["pointerevents","","stay"],["cookie-accept-required","","stay"],["cookie-open","","stay"],["cookiePopupVisible","","stay"],["unreadable-display","","stay"],["mandatory_cookie_modal","","stay"],["wwzoverlay--open","","stay"],["cookie_popup_exists","div.page-wrapper","stay"],["gdpr-infobar-visible","","stay"],["cookie-enabled","","stay"],["cookie-overlay--open","","stay"],["cookie-banner-open","","stay"],["overlay-content","body","stay"],["is-active-cookiebar","body","stay"],["didomi-popup-open","body"],["idxrcookies-block-user-nav","body","stay"],["ccpa-banner","","stay"],["modal-cacsp-open","","stay"],["modal-cacsp-box","","stay"],["js-modalUnclosable","","stay"],["js-cookiesModal|is-open",".js-cookiesModal,.is-open"],["remodal-bg","","stay"],["cookie-warning-open","","stay"],["with-featherlight","","stay"],["cookies-shown","body","stay"],["filter-blur","","stay"],["no-cookie","","stay"],["dimmeractive","body","stay"],["snoop-modal-open","body","stay"],["blurred","","stay"],["is-blurred-cookiebox","","stay"],["consent-manager--popup","body","stay"],["consent-manager-open","body","stay"],["zp-gtm-scripts--blur","","stay"],["dots","","stay"],["cookies-modal-open","","stay"],["overlay","body","stay"],["messages-active","","stay"],["xh-thumb-disabled","","stay"],["body--cookies-panel-opened","","stay"],["chefcookie--blur","html","stay"],["chefcookie--fade","html","stay"],["chefcookie--noscroll","html","stay"],["cdk-overlay-container","","stay"],["b-dialog","","stay"],["disabled","body","stay"],["lock-scroll","","stay"],["disabled","header","stay"],["cookie-not-accepted-overlay","","stay"],["blurred-page","","stay"],["consent-dialog-open","body"],["cookie-consent--present","","stay"],["header-gdrp-cookies-visible","","stay"],["fixed","","stay"],["noScroll","","stay"],["cookie_notification","","stay"],["blocked-body","","stay"],["transfer__cookie-wall-active",".transfer__cookie-wall-active","stay"],["has-no-scroll","","stay"],["blured","","stay"],["noscroll","body","stay"],["has-overlay","","stay"],["cookie-consent-is-active","body","stay"],["cookiesgdpr__scroll","","stay"],["modal-show","","stay"],["gdpr","","stay"],["cookieopened","body","stay"],["cookiewall-active","body","stay"],["is-cookie-notice","body","stay"],["cookie-consent-banner-open","html","stay"],["modal-overlay","","stay"],["blur","","stay"],["cookielaw-blur-background","","stay"],["sp-message-open","html","stay"],["modalOpen___gZykv","body"],["cookie-bar","","stay"],["hasCookieBanner","body","stay"]];

const hostnamesMap = new Map([["winparts.be",0],["winparts.eu",0],["winparts.fr",0],["winparts.ie",0],["winparts.nl",0],["winparts.se",0],["sportano.sk",1],["sportano.de",1],["sportano.bg",1],["sportano.hu",1],["sportano.ro",1],["sportano.cz",1],["klinik-am-ring.de",2],["idg.se",3],["buildex.cz",4],["gruenderservice.at",5],["pdc-big.nl",6],["pdc-big.it",6],["pdc-big.ie",6],["pdc-big.fr",6],["pdc-big.es",6],["pdc-big.be",6],["pdc-big.at",6],["pdc-big.co.uk",6],["pdc-big.de",6],["pdc-big.com",6],["elio-systems.io",[7,14]],["sanha.com",[7,14]],["recettesetcabas.com",8],["flinders.edu.au",9],["opera.com",10],["groningenairport.nl",11],["crocs.co.uk",[12,13]],["crocs.eu",[12,13]],["crocs.nl",[12,13]],["crocs.fi",[12,13]],["crocs.fr",[12,13]],["crocs.de",[12,13]],["rappjmed.ch",15],["stilord.fr",16],["stilord.it",16],["stilord.de",16],["stilord.es",16],["dasfutterhaus.at",17],["developer.paypal.com",18],["cpc2r.ch",19],["zen.com",20],["tecsafe.de",21],["stromnetz.berlin",22],["websummit.com",23],["thehustle.co",23],["epochtimes.fr",24],["ajbell.co.uk",25],["economiapertutti.bancaditalia.it",26],["quantamagazine.org",27],["tradersunion.com",27],["phsgreenleaf.co.uk",28],["phswashrooms.ie",28],["mccolls.co.uk",[29,30]],["foxracingshox.de",31],["crt.hr",32],["yourstorebox.com",33],["clickskeks.at",[34,35]],["housell.com",36],["lactostop.de",37],["dermapharm.de",37],["mibe.de",37],["spilger.de",38],["dbs.si",39],["abcya.com",40],["jongcdenv.be",41],["umicore.jp",41],["umicore.cn",41],["umicore.pl",41],["umicore.kr",41],["umicore.co.th",41],["umicore.fr",41],["umicore.de",41],["donneurdecellulessouches.be",41],["stammzellenspender.be",41],["stemcelldonor.be",41],["umicore.com",41],["umicore.com.br",41],["koenvandenheuvel.be",41],["stamceldonor.be",41],["nahima.be",41],["catused.com",42],["eujuicers.cz",43],["graziellawicki.com",44],["funnelcockpit.com",44],["dnk.nl",45],["eam.de",46],["eam-netz.de",46],["tvp.pl",47],["cellardoor.co",48],["ampire.de",49],["verpackungsstadl.ch",49],["imkershoperzgebirge.de",49],["modellbahndealer.de",49],["tillit-bikes.shop",49],["bike-onlineshop.de",49],["futspo.de",49],["compravo.de",49],["perpedale.de",49],["modellbau-jung.de",49],["verpackungsstadl.at",49],["modellbau-vordermaier.de",49],["bike-supply.de",49],["wroc.pl",50],["basenio.de",51],["fm-systeme.de",52],["gartenhotel-crystal.at",53],["swffm.de",53],["studentenwerkfrankfurt.de",53],["dmsg.de",53],["bgk.pl",53],["pflegezeit-berlin.de",53],["gpd-nordost-onlineberatung.de",53],["proabschluss-beratung.de",53],["hilfe-telefon-missbrauch.online",53],["dww-suchtberatung.de",53],["cyberforum.de",53],["gutscheine.eurothermen.at",53],["wolff-mueller.de",53],["ras.bz.it",53],["wifiwien.at",[54,55]],["wifikaernten.at",[54,55]],["wifi.at",[54,55]],["pdf-archive.com",55],["swrng.de",55],["5asec.pt",56],["tui.dk",56],["tui.fi",56],["tui.no",56],["tui.se",56],["leslipfrancais.fr",56],["bremischevb.de",[56,123]],["meinebank.de",[56,123]],["vb-rb.de",[56,123]],["gladbacher-bank.de",[56,123]],["nordthueringer-volksbank.de",[56,123]],["bodenseebank.de",[56,123]],["rb-oberaudorf.de",[56,123]],["volksbank-trossingen.de",[56,123]],["owl-immobilien.de",[56,123]],["volksbank-backnang.de",[56,123]],["volksbank-international.de",[56,123]],["raiba-westhausen.de",[56,123]],["vr-nopf.cz",[56,123]],["vrbankimmobilien.de",[56,123]],["cvw-privatbank-ag.de",[56,123]],["rb-denzlingen-sexau.de",[56,123]],["rv-banken.de",[56,123]],["volksbank-remseck.de",[56,123]],["raiba-gr.de",[56,123]],["vrb-spangenberg.de",[56,123]],["rb-berghuelen.de",[56,123]],["vb-lauterecken.de",[56,123]],["rb-sondelfingen.de",[56,123]],["voba-deisslingen.de",[56,123]],["saechsischer-gewinnsparverein.de",[56,123]],["rb-hardt-bruhrain.de",[56,123]],["volksbank-daaden.de",[56,123]],["dervolksbanker.de",[56,123]],["volksbank-kirnau.de",[56,123]],["skbwitten.de",[56,123]],["raiba-ndwa.de",[56,123]],["volksbank-mittleres-erzgebirge.de",[56,123]],["rb-eching.de",[56,123]],["volksbank-aktiv.de",[56,123]],["vbsuedemsland.de",[56,123]],["voba-moeckmuehl.de",[56,123]],["volksbank-freiburg.de",[56,123]],["vbleos.de",[56,123]],["meine-rvb.de",[56,123]],["aachener-bank.de",[56,123]],["muenchner-bank.de",[56,123]],["volksbank-dh.de",[56,123]],["volksbankeg.de",[56,123]],["sparda-bank-hamburg.de",[56,123]],["sparda-sw.de",[56,123]],["volksbank-thueringen-mitte.de",[56,123]],["vrbankeg.de",[56,123]],["bernhauser-bank.de",[56,123]],["vvrbank-krp.de",[56,123]],["vvr-bank.de",[56,123]],["vb-mittelhessen.de",[56,123]],["vr-bayernmitte.de",[56,123]],["pollfish.com",57],["werkenbijtrekpleister.nl",58],["werkenbijkruidvat.be",58],["rassenlijst.info",58],["werkenbijiciparisxl.nl",58],["tesa-labtec.com",59],["tesatape.ru",59],["tesa.com",59],["flightradar24.com",60],["apk-vk.at",61],["vietnamairlines.com",62],["incotec.com",63],["croda.com",63],["exaktafoto.se",64],["campingdusoleil.com",65],["hotel-la-chaumiere.com",65],["les-anges-gardiens.fr",65],["croco-kid.com",65],["cambridge-centre.fr",65],["equisud.com",65],["allokebab-pau.fr",65],["etre-visible.local.fr",65],["mas-montebello66.com",65],["camping-residentiel-les-marronniers-jura.fr",65],["dj4events.fr",65],["saintjoursexpertmaritime.com",65],["az-renovation.fr",65],["presquilemultiservices.com",65],["hotel-aigoual.com",65],["hotel-restaurant-pau.com",65],["desrayaud-paysagistes.com",65],["hotelsaintcharles.fr",65],["agvillagecamarguais.com",65],["joyella.com",65],["gabriel-godard.com",65],["artech-sellerie.com",65],["motoclubernee.com",65],["ledauphinhotel.com",65],["cuisin-studio.com",65],["biomeo-environnement.com",65],["leman-instruments.com",65],["esthetique-meyerbeer.com",65],["institut-bio-naturel-nice.fr",65],["nature-et-bois.fr",65],["transmissions-bordeaux.com",65],["kinechartreuse.com",65],["corsegourmande.com",65],["cotedecor.com",65],["restaurant-la-badiane.fr",65],["systelia.fr",65],["lesjardinsinterieurs.com",65],["helenevue.com",65],["saubusse-thermes.com",65],["dehn.es",66],["dehn.fr",66],["dehn.it",66],["dehn.hu",66],["desitek.dk",66],["dehn.at",66],["dehn.de",66],["wwz.ch",67],["taloon.com",68],["inyova.at",69],["inyova.ch",69],["inyova.de",69],["ccalbacenter.com",69],["wamu.org",69],["momentive.com",70],["kennedyslaw.com",71],["elekta.com",72],["stratasysdirect.com",73],["stratasys.com",73],["werkenbijkruidvat.nl",74],["ghacks.net",75],["cutoff.es",76],["mbanc.com",77],["dentalgalindo.com",[78,79]],["brutalvisual.com",[78,79]],["archeologia.com.pl",[78,79]],["letrayframe.com",[78,79]],["osteofisintegral.es",[78,79]],["uco.cat",[78,79]],["buecheler-kollegen.de",[78,79]],["seminariodeosma-soria.org",[78,79]],["kamensenica.sk",[78,79]],["movimentoofficinedelsud.it",[78,79]],["trident.se",[78,79]],["semanasantademalagaayeryhoy.com",[78,79]],["diazfloristasestrella.com",[78,79]],["cosechavida.com",[78,79]],["centre-hypnose-moselle.com",[78,79]],["broncoillustration.com",[78,79]],["sumoingenio.com",[78,79]],["aligepro.es",[78,79]],["muevo.es",[78,79]],["azulejosacedo.com",[78,79]],["sana.cz",[78,79]],["aliapinto.com",[78,79]],["tsconline.es",[78,79]],["polifast.it",[78,79]],["napos.cz",[78,79]],["gutshaus-neuendorf-usedom.de",[78,79]],["kunterbunte-kinder.de",[78,79]],["desatando.org",[78,79]],["ledocom.cz",[78,79]],["aliciasuarez.net",[78,79]],["diabramar.com",[78,79]],["lamagnalonga.org",[78,79]],["benejamrefrigeracion.com",[78,79]],["micropigmentacioncapilarbcn.com",[78,79]],["revistaauge.com.ar",[78,79]],["arcusnet.se",[78,79]],["videogenic.es",[78,79]],["grundschule-remagen.de",[78,79]],["aceitessatunion.com",[78,79]],["servigraphic.com.ar",[78,79]],["textsteine.de",[78,79]],["campergarage.es",[78,79]],["administradorfincasblog.com",[78,79]],["balgal.es",[78,79]],["grafika-dtp-produkcia.sk",[78,79]],["unmardeconstelaciones.com",[78,79]],["salobella.com",[78,79]],["careon.se",[78,79]],["gymnosport.com",[78,79]],["easyhomes.com.es",[78,79]],["casavaledalama.pt",[78,79]],["dosc.es",[78,79]],["fcfoz.pt",[78,79]],["berevolk.com",[78,79]],["hvpropertyclearance.co.uk",[78,79]],["calamo.se",[78,79]],["elserratplanoles.com",[78,79]],["bubblessea.es",[78,79]],["disperator.se",[78,79]],["ecoparquets.com",[78,79]],["zlotaraczkalublin.pl",[78,79]],["congresoscostadelsol.com",[78,79]],["pneumaticiroma.it",[78,79]],["asprona.es",[78,79]],["virgendefatima.es",[78,79]],["patronatpremia.cat",[78,79]],["2points13.fr",[78,79]],["3d3.es",[78,79]],["abantos.es",[78,79]],["abastanimacio.org",[78,79]],["academiafrancesadebelleza.co",[78,79]],["acaluca.org",[78,79]],["acce.es",[78,79]],["ad-particles.com",[78,79]],["adea.sk",[78,79]],["afplr.fr",[78,79]],["agiletalon.fr",[78,79]],["agiratou.com",[78,79]],["aidaromero.com",[78,79]],["alkoholochnarkotika.se",[78,79]],["alligatorbioscience.se",[78,79]],["anea.es",[78,79]],["animala.es",[78,79]],["antequerabelleza.com",[78,79]],["apimadrid.net",[78,79]],["aquatrend.sk",[78,79]],["arabesque-formation.org",[78,79]],["arrivamallorca.es",[78,79]],["arteydeco.es",[78,79]],["asapservicios.net",[78,79]],["aspock.com",[78,79]],["atout-voyages.com",[78,79]],["autocareslazara.es",[78,79]],["autocaresmariano.com",[78,79]],["autoform.pl",[78,79]],["ayudatranspersonal.com",[78,79]],["bacabeton.cz",[78,79]],["begalvi.com",[78,79]],["bent-com.com",[78,79]],["berliner-haeuser.de",[78,79]],["bespokespain.com",[78,79]],["bevent-rasch.se",[78,79]],["bio-cord.es",[78,79]],["biotropica.fr",[78,79]],["bornes-eurorelais.fr",[78,79]],["braeu-stueble.de",[78,79]],["brendanoharamp.scot",[78,79]],["briau.com",[78,79]],["caleulalia.com",[78,79]],["cande-sur-beuvron.com",[78,79]],["carlhag.se",[78,79]],["carrier.se",[78,79]],["casadelaveiga.com",[78,79]],["caytas.com.tr",[78,79]],["cecjecuador.org.ec",[78,79]],["cegef.com",[78,79]],["centrediagonal.com",[78,79]],["centropolisportivomassari.it",[78,79]],["cerai.org",[78,79]],["cervosgrup.com",[78,79]],["chimeneasalicante.com",[78,79]],["circodelshow.com",[78,79]],["cliatec.com",[78,79]],["clinicabadal.es",[78,79]],["cometh-consulting.com",[78,79]],["copysud.fr",[78,79]],["cortilar.com",[78,79]],["crystal-finance.com",[78,79]],["ctangana.com",[78,79]],["cugatresidencial.com",[78,79]],["dake.es",[78,79]],["datatal.se",[78,79]],["degom.com",[78,79]],["delfis.es",[78,79]],["delogica.com",[78,79]],["dentalcompany.es",[78,79]],["descarpack.com.br",[78,79]],["desfiladeroediciones.com",[78,79]],["desomer.be",[78,79]],["diarioandalucia.es",[78,79]],["dibujos-animados.net",[78,79]],["direkt-immobilie.de",[78,79]],["dovozautznemecka.cz",[78,79]],["drpuigdollers.com",[78,79]],["dunamys.inf.br",[78,79]],["easyimplantology.com",[78,79]],["eb2b.com.pl",[78,79]],["echo-mieszkania.pl",[78,79]],["eclinic.com.sg",[78,79]],["edgeict.com",[78,79]],["eiglaw.com",[78,79]],["elandexpediciones.es",[78,79]],["emalec.com",[78,79]],["enlighten.net",[78,79]],["equifab.es",[78,79]],["escuelanauticamarenostrum.com",[78,79]],["esgrima.cat",[78,79]],["espaisperconviure.es",[78,79]],["etbygg.com",[78,79]],["eurepieces.fr",[78,79]],["euroenvio.com",[78,79]],["eurotex.es",[78,79]],["expertetfinance.fr",[78,79]],["farmarsketrhyfuturum.cz",[78,79]],["fastvisa.fr",[78,79]],["fauxdiplomes.org",[78,79]],["fisiolistic.com",[78,79]],["fondazionealbertosordi.it",[78,79]],["foyersekcjapolska.eu",[78,79]],["fundacjaeds.pl",[78,79]],["galeriaxanadu.pl",[78,79]],["garcia-ibanez.com",[78,79]],["gestenaval.com",[78,79]],["glaskogen.se",[78,79]],["globalteam.es",[78,79]],["goia.org.pl",[78,79]],["granibier.com",[78,79]],["grundia.se",[78,79]],["grupoisn.com",[78,79]],["gruporhzaragoza.com",[78,79]],["hagagruppen.se",[78,79]],["halima-magazin.com",[78,79]],["handelskammaren.com",[78,79]],["helitecnics.com",[78,79]],["helux.se",[78,79]],["hermanosalcaraz.com",[78,79]],["hjarnkoll.se",[78,79]],["hmfoundation.com",[78,79]],["hormimpres.com",[78,79]],["hoteldeprony.fr",[78,79]],["hotelroyalcatania.it",[78,79]],["houjethai.nl",[78,79]],["hummer.cz",[78,79]],["icld.se",[78,79]],["ict-project.it",[78,79]],["imagelova.id",[78,79]],["imprentalaspalmas.com",[78,79]],["informamiele.it",[78,79]],["inission.com",[78,79]],["inmobiliariavolga.com",[78,79]],["international-terra-institute.com",[78,79]],["inwaspain.com",[78,79]],["izkigolf.eus",[78,79]],["jdmusic.se",[78,79]],["juveycamps.com",[78,79]],["karel1.nl",[78,79]],["kaunokapiniuprieziura.lt",[78,79]],["kcmkompresor.com",[78,79]],["kewaccountants.co.uk",[78,79]],["konkretplus.pl",[78,79]],["krajci.cz",[78,79]],["krisvagenut.se",[78,79]],["kyoceracapetown.co.za",[78,79]],["labaguette.pl",[78,79]],["labintegrados.com",[78,79]],["ladderupinc.com",[78,79]],["landskronafoto.org",[78,79]],["langarri.es",[78,79]],["lawa.es",[78,79]],["laxo.se",[78,79]],["layher.se",[78,79]],["lifetraveler.net",[78,79]],["lindrooshalsa.se",[78,79]],["lobolab.es",[78,79]],["maisqueromanicorutas.com",[78,79]],["mallandonoandroid.com",[78,79]],["masconcas.com",[78,79]],["mediabest.cz",[78,79]],["megustaelvino.es",[78,79]],["mensa.se",[78,79]],["mestiteslilis.com",[78,79]],["minutoprint.com",[78,79]],["mirano.cz",[78,79]],["mogador.cz",[78,79]],["morphestudio.es",[78,79]],["motoaxial.com",[78,79]],["multiversidad.es",[78,79]],["mundollaves.com",[78,79]],["musicotherapie-federationfrancaise.com",[78,79]],["nauticaravaning.com",[78,79]],["nestville.sk",[78,79]],["nestvillepark.sk",[78,79]],["netromsoftware.ro",[78,79]],["nojesfabriken.se",[78,79]],["oddoneout.se",[78,79]],["opako.pl",[78,79]],["oserlafrique.com",[78,79]],["paintballalcorcon.com",[78,79]],["pallejabcn.com",[78,79]],["penicilinafruits.com",[78,79]],["peregrinoslh.com",[78,79]],["permis-lausanne.ch",[78,79]],["pernillaandersson.se",[78,79]],["piazzadelgusto.it",[78,79]],["pipi-antik.dk",[78,79]],["plasticosgeca.com",[78,79]],["plastimyr.com",[78,79]],["portal.unimes.br",[78,79]],["pro-beruf.de",[78,79]],["prophecyinternational.com",[78,79]],["psicoterapeuta.org",[78,79]],["puertasprieto.com",[78,79]],["puntosdefantasia.es",[78,79]],["pzmk.org.pl",[78,79]],["rastromaquinas.com",[78,79]],["rectoraldecastillon.com",[78,79]],["reinomineral.com",[78,79]],["reklamefreunde.de",[78,79]],["restauraciontalavera.es",[78,79]],["restauranthispania.com",[78,79]],["ristoranteeziogritti.it",[78,79]],["rubinmedical.dk",[78,79]],["rubinmedical.no",[78,79]],["rubinmedical.se",[78,79]],["sak.se",[78,79]],["sammetais.com.br",[78,79]],["sebastiancurylo.pl",[78,79]],["serigrafiaiorgi.com",[78,79]],["seyart.com",[78,79]],["sgaim.com",[78,79]],["sicamemt.org",[78,79]],["siguealconejoblanco.es",[78,79]],["sinfimasa.com",[78,79]],["skp.se",[78,79]],["skrobczynski.pl",[78,79]],["slush.de",[78,79]],["solebike.it",[78,79]],["solu-watt.fr",[78,79]],["soluzionainmobiliaria.es",[78,79]],["somoparque.com",[78,79]],["sorgingaztemoda.com",[78,79]],["sroportal.sk",[78,79]],["ssmf.se",[78,79]],["stobrasil.com.br",[78,79]],["stoparmut2015.ch",[78,79]],["studiodimuro.com",[78,79]],["subkultur-hannover.de",[78,79]],["sustanciagris.com",[78,79]],["szkt.sk",[78,79]],["tagibergslagen.se",[78,79]],["tallergastronomico.es",[78,79]],["tarna.fhsk.se",[78,79]],["tassenyalitzacio.com",[78,79]],["tctech.se",[78,79]],["teknoduegroup.it",[78,79]],["teloliquido.com",[78,79]],["temasa.es",[78,79]],["textilprint.sk",[78,79]],["thehouseofautomata.com",[78,79]],["tmgernika.com",[78,79]],["toastetmoi.fr",[78,79]],["tollare.org",[78,79]],["trattoriabolognesi.it",[78,79]],["triperavigatana.com",[78,79]],["tuckerfranklininsgrp.com",[78,79]],["tuftuf.net",[78,79]],["turuletras.com",[78,79]],["umfmb.fr",[78,79]],["upapsa.com",[78,79]],["valenciatoday.es",[78,79]],["vanghel-und-morawski.de",[78,79]],["vickycan.com",[78,79]],["ville-de-salles.com",[78,79]],["webbigt.se",[78,79]],["westlede.be",[78,79]],["wiemker.org",[78,79]],["woolink.co",[78,79]],["wp.fratgsa.org",[78,79]],["xatobaxestion.com",[78,79]],["xfactor-gmbh.de",[78,79]],["yougoenglish.com",[78,79]],["zigmoon.com",[78,79]],["canyon.com",[80,81]],["drimsim.com",82],["eteam-winkler.de",83],["kdn-elektro.de",83],["elektro-kotz.de",83],["elektro-service-rauh.de",83],["elektroanlagenbuettner.de",83],["be-connect.online",83],["bayergruppe.com",83],["bayer-wkt.de",83],["bayer-wind.de",83],["bayer-wd.de",83],["elektro-joa.de",83],["htechnik.de",83],["ehk-service.de",83],["bittner-tv.de",83],["elektro-suelzner.de",83],["elektro-leps.de",83],["elektromax-hausgeraete.de",83],["elektrotechnik-schedel.de",83],["elkugmbh.de",83],["ln-elektro-gmbh.de",83],["weiss-blau-gmbh.de",83],["sunbeam-energy.de",83],["prokauf.com",83],["lichtstudio-kerl.de",83],["liebing-beese.de",83],["hoeschel-baumann.de",83],["hausgeraete-kraemer.de",83],["gehlhaar-elektrotechnik.de",83],["ehs-elektrotechnik.de",83],["elektrojarschke.de",83],["elektrotechnik-fleischmann.de",83],["elektroseemueller.de",83],["schoerling-blitz.de",83],["ast-apolda.com",83],["elektro-klippel.de",83],["arntz-haustechnik.de",83],["elektro-bindel.de",83],["elektrotechnik-weiss.com",83],["brandschutz-hamburg.de",83],["wagnerelektrotechnik.de",83],["el-kramer.de",83],["mks-hof.de",83],["wernz-elektro.de",83],["e3-energy.de",83],["sg-solar.de",83],["elektrokrebs.de",83],["elektro-roehrl.de",83],["elektro-kreher.de",83],["giegling-vonsaal.de",83],["elektro-lehmann.com",83],["ems-wurzen.de",83],["scholpp.es",84],["scholpp.pl",84],["scholpp.it",84],["ptc.eu",84],["scholpp.com",84],["abo24.de",84],["overdrive.com",84],["wetu.com",84],["superwatchman.com",85],["wedding.pl",86],["bitburger-braugruppe.de",87],["proteincompany.fi",88],["proteinbolaget.se",88],["snoopmedia.com",89],["myguide.de",89],["study-in-germany.de",89],["daad.de",89],["biegnaszczyt.pl",90],["futterhaus.de",91],["scottsofstow.co.uk",[92,93]],["zawszepomorze.pl",94],["wasserkunst-hamburg.de",95],["lta.org.uk",96],["brico-travo.com",97],["theateramrand.de",98],["jugend-praesentiert.de",98],["xhamster.com",99],["xhamster2.com",99],["xhamster3.com",99],["xhamster18.desi",99],["athletic-club.eus",100],["close2.de",[101,102,103]],["medicalti.it",[101,102,103]],["grottisrl.it",[101,102,103]],["vilmie-pet.com",[101,102,103]],["private-krankenversicherungen-vergleich.de",[101,102,103]],["ipanema-shop.com",[101,102,103]],["buero-rothenfusser.com",[101,102,103]],["versi24.de",[101,102,103]],["rs-vertriebsservice.com",[101,102,103]],["matina-gmbh.de",[101,102,103]],["erding-solar.de",[101,102,103]],["greenwoods-small-pet.com",[101,102,103]],["kfz-schwabing.de",[101,102,103]],["comune.randazzo.ct.it",[101,102,103]],["comune.catania.it",[101,102,103]],["ordineavvocaticatania.it",[101,102,103]],["agentur-alberts.de",[101,102,103]],["waveaudio.de",[101,102,103]],["alexide.com",[101,102,103]],["piske-innovationen.de",[101,102,103]],["sbit.ag",[101,102,103]],["smilla-katzenfutter.de",[101,102,103]],["evium.de",104],["epayments.com",105],["riceundspice.de",106],["happysocks.com",[107,108]],["win2day.at",109],["porp.pl",110],["computerbase.de",111],["gesundheitsamt-2025.de",112],["coastfashion.com",113],["oasisfashion.com",113],["warehousefashion.com",113],["misspap.com",113],["karenmillen.com",113],["boohooman.com",113],["nebo.app",114],["groupeonepoint.com",115],["edpsciences.org",116],["bemmaisseguro.com",117],["wetransfer.com",118],["scheidegger.nl",119],["phoenix.de",120],["strato.se",121],["strato.de",121],["mishcon.com",122],["bbva.es",124],["bbvauk.com",124],["bbva.be",124],["bbva.fr",124],["bbva.it",124],["bbva.pt",124],["suntech.cz",125],["digikey.co.za",126],["digikey.cn",126],["digikey.ee",126],["digikey.at",126],["digikey.be",126],["digikey.bg",126],["digikey.cz",126],["digikey.dk",126],["digikey.fi",126],["digikey.fr",126],["digikey.de",126],["digikey.gr",126],["digikey.hu",126],["digikey.ie",126],["digikey.it",126],["digikey.lv",126],["digikey.lt",126],["digikey.lu",126],["digikey.nl",126],["digikey.no",126],["digikey.pl",126],["digikey.pt",126],["digikey.ro",126],["digikey.sk",126],["digikey.si",126],["digikey.es",126],["digikey.se",126],["digikey.ch",126],["digikey.co.uk",126],["digikey.co.il",126],["digikey.com.mx",126],["digikey.ca",126],["digikey.com.br",126],["digikey.co.nz",126],["digikey.com.au",126],["digikey.co.th",126],["digikey.tw",126],["digikey.kr",126],["digikey.sg",126],["digikey.ph",126],["digikey.my",126],["digikey.jp",126],["digikey.in",126],["digikey.hk",126],["digikey.com",126],["eurosupps.nl",127],["pathe.nl",128],["makelaarsland.nl",129],["nordania.dk",130],["365direkte.no",130],["danskebank.lv",130],["danskebank.lt",130],["danskebank.no",130],["danskebank.fi",130],["danskebank.dk",130],["danskebank.com",130],["danskebank.se",130],["danskebank.co.uk",130],["danskeci.com",130],["danicapension.dk",130],["gewerbegebiete.de",131],["visti.it",132],["balay.es",133],["constructa.com",133],["gaggenau.com",133],["loudersound.com",134],["impulse.de",134],["pcgamer.com",134],["infoworld.com",134],["kiplinger.com",134],["omni.se",134],["it-times.de",134],["bitcoinmagazine.com",134],["deliciousmagazine.co.uk",134],["upday.com",134],["theguardian.com",134],["deutschlandcard.de",134],["szbz.de",134],["free-fonts.com",134],["lieferzeiten.info",134],["vice.com",134],["newsnow.co.uk",134],["out.com",134],["streampicker.de",134],["radiotimes.com",134],["nowtv.com",134],["kochbar.de",134],["toggo.de",134],["am-online.com",134],["n-tv.de",134],["newsandstar.co.uk",134],["tag24.de",134],["weltkunst.de",134],["noveauta.sk",134],["pnn.de",134],["economist.com",134],["crash.net",134],["norwaytoday.info",134],["insider.com",134],["preis.de",134],["ibroxnoise.co.uk",134],["celtsarehere.com",134],["nufcblog.co.uk",134],["sport1.de",134],["techconnect.com",134],["followfollow.com",134],["thespun.com",134],["mazdas247.com",134],["fastcar.co.uk",134],["vitalfootball.co.uk",134],["audi-sport.net",134],["bumble.com",134],["arcamax.com",134],["dilbert.com",134],["sportbible.com",134],["givemesport.com",134],["dartsnews.com",134],["gpfans.com",134],["justjared.com",134],["justjaredjr.com",134],["finanzen.at",134],["idealo.at",134],["ladenzeile.at",134],["berliner-zeitung.de",134],["urbia.de",134],["essen-und-trinken.de",134],["wetter.de",134],["rtl-living.de",134],["vox.de",134],["ladenzeile.de",134],["advocate.com",134],["idealo.de",134],["wigantoday.net",134],["economistgroup.com",134],["transfermarkt.nl",134],["transfermarkt.es",134],["transfermarkt.pl",134],["transfermarkt.pt",134],["transfermarkt.at",134],["transfermarkt.it",134],["transfermarkt.fr",134],["transfermarkt.de",134],["transfermarkt.be",134],["transfermarkt.co.uk",134],["transfermarkt.us",134],["footballfancast.com",134],["cio.com",134],["jezebel.com",134],["splinternews.com",134],["denofgeek.com",134],["kinja.com",134],["theinventory.com",134],["rollingstone.de",134],["sueddeutsche.de",134],["csoonline.com",134],["tvmovie.de",134],["testberichte.de",134],["pcgameshardware.de",134],["4players.de",134],["guj.de",134],["bild.de",134],["wieistmeineip.de",134],["testbild.de",134],["stylebook.de",134],["skygroup.sky",134],["speisekarte.de",134],["haeuser.de",134],["cmo.com.au",134],["pcworld.co.nz",134],["idealo.it",134],["transfermarkt.jp",134],["transfermarkt.co.id",134],["autoexpress.co.uk",134],["transfermarkt.com",134],["esportsclub.nl",134],["webwinkel.tubantia.nl",134],["shopalike.nl",134],["autoweek.nl",134],["pcworld.es",134],["macworld.es",134],["idealo.es",134],["businessinsider.es",134],["motor.es",134],["autobild.es",134],["driving.co.uk",134],["stern.de",134],["pcgames.de",134],["sport.de",134],["idealo.fr",134],["barrons.com",134],["tori.fi",134],["snow-forecast.com",134],["tidende.dk",134],["kraloyun.com",134],["arnnet.com.au",134],["bunte.de",134],["handelsblatt.com",134],["techbook.de",134],["metal-hammer.de",134],["macworld.co.uk",134],["maxisciences.com",134],["ohmymag.com",134],["voici.fr",134],["geo.de",134],["businessinsider.de",134],["heise.de",134],["meinestadt.de",134],["politico.eu",134],["spieletipps.de",134],["finanznachrichten.de",134],["vtwonen.nl",134],["stol.it",134],["waitrose.com",135],["storyhouseegmont.dk",136],["storyhouseegmont.no",136],["storyhouseegmont.se",136],["egmont.com",136],["nordiskfilm.com",136],["faq.whatsapp.com",137],["blog.whatsapp.com",137],["www.whatsapp.com",137]]);

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
        'Object_defineProperty': Object.defineProperty.bind(Object),
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
            return Object.fromEntries(entries);
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
