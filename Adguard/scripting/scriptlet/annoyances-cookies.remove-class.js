/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
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

const argsList = [["cookie-consent-active","body","stay"],["cookie-overlay-active","body","stay"],["cookiebanner-body","body","stay"],["modal-open","body","stay"],["hasPopup","body","stay"],["scommerce-gdpr-disabled","div","stay"],["no-scroll","html","stay"],["compensate-for-scrollbar","body","stay"],["gdpr-shown","body","stay"],["cookie-consent__wrapper","div","stay"],["cookies-request","body","stay"],["cx-modal-open","html","stay"],["cx-no-scroll","html","stay"],["e-cookie-bar-open","body","stay"],["cookies-not-set","body","stay"],["no-consent","html","stay"],["is-blurred-cookiebox","html","stay"],["ccpaCookieBanner-acceptedAll","body","stay"],["cookies-show",".cookies-show","stay"],["disable-background","body","stay"],["cookie--not-set","body","stay"],["_cookiebanner","body","stay"],["async-hide","html","stay"],["ntd-gdpr-no-scroll","body","stay"],["modal-background","div","stay"],["pef-no-cookie","body","stay"],["cookie-not-accepted","body","stay"],["c-body--locked-always","body","stay"],["global-cookie","div","stay"],["disable-scroll","","stay"],["cookie--not-set","","stay"],["bg-gray","div","stay"],["cookie-active","body","stay"],["ccm-blocked","html","stay"],["ccm-blocked","body","stay"],["is-modal-cookies-visible","body","stay"],["layerActive","","stay"],["cookiebar-open","body","stay"],["blur","body","stay"],["cookie","","stay"],["cookieconsent-active","body","stay"],["cookieMsg","","stay"],["cookie_consent__alert","","stay"],["gdpr-cookie-notice-center-loaded","","stay"],["has-open-cookie","","stay"],["om_cookie_active","","stay"],["tvp-cookie-scroll-lock","","stay"],["cookie-overlay","","stay"],["disable","div","stay"],["prevent-scroll","","stay"],["fog","","stay"],["cookie-hint","","stay"],["dp--cookie-consent","body","stay"],["body-overlay-scrollable","","stay"],["modal-open","","stay"],["no-scroll","body","stay"],["show-cookie-consent","","stay"],["is-active-cookiebar","","stay"],["-locked","","stay"],["has-banner","body.has-banner","stay"],["pointerevents","","stay"],["cookie-accept-required","","stay"],["cookie-open","","stay"],["cookiePopupVisible","","stay"],["unreadable-display","","stay"],["mandatory_cookie_modal","","stay"],["wwzoverlay--open","","stay"],["cookie_popup_exists","div.page-wrapper","stay"],["gdpr-infobar-visible","","stay"],["cookie-enabled","","stay"],["cookie-overlay--open","","stay"],["cookie-banner-open","","stay"],["overlay-content","body","stay"],["is-active-cookiebar","body","stay"],["didomi-popup-open","body"],["idxrcookies-block-user-nav","body","stay"],["ccpa-banner","","stay"],["modal-cacsp-open","","stay"],["modal-cacsp-box","","stay"],["js-modalUnclosable","","stay"],["js-cookiesModal|is-open",".js-cookiesModal,.is-open"],["remodal-bg","","stay"],["cookie-warning-open","","stay"],["with-featherlight","","stay"],["cookies-shown","body","stay"],["filter-blur","","stay"],["no-cookie","","stay"],["dimmeractive","body","stay"],["snoop-modal-open","body","stay"],["blurred","","stay"],["is-blurred-cookiebox","","stay"],["consent-manager--popup","body","stay"],["consent-manager-open","body","stay"],["zp-gtm-scripts--blur","","stay"],["dots","","stay"],["cookies-modal-open","","stay"],["overlay","body","stay"],["modal-has-active","body","stay"],["messages-active","","stay"],["xh-thumb-disabled","","stay"],["body--cookies-panel-opened","","stay"],["chefcookie--blur","html","stay"],["chefcookie--fade","html","stay"],["chefcookie--noscroll","html","stay"],["cdk-overlay-container","","stay"],["b-dialog","","stay"],["disabled","body","stay"],["lock-scroll","","stay"],["disabled","header","stay"],["cookie-not-accepted-overlay","","stay"],["overlayopen","","stay"],["blurred-page","","stay"],["consent-dialog-open","body"],["cookie-consent--present","","stay"],["header-gdrp-cookies-visible","","stay"],["fixed","","stay"],["noScroll","","stay"],["cookie_notification","","stay"],["blocked-body","","stay"],["transfer__cookie-wall-active",".transfer__cookie-wall-active","stay"],["has-no-scroll","","stay"],["blured","","stay"],["noscroll","body","stay"],["has-overlay","","stay"],["cookie-consent-is-active","body","stay"],["cookiesgdpr__scroll","","stay"],["modal-show","","stay"],["gdpr","","stay"],["cookieopened","body","stay"],["cookiewall-active","body","stay"],["is-cookie-notice","body","stay"],["cookie-consent-banner-open","html","stay"],["modal-overlay","","stay"],["blur","","stay"],["cookielaw-blur-background","","stay"],["sp-message-open","html","stay"],["modalOpen___gZykv","body"],["cookie-bar","","stay"],["hasCookieBanner","body","stay"]];

const hostnamesMap = new Map([["winparts.be",0],["winparts.eu",0],["winparts.fr",0],["winparts.ie",0],["winparts.nl",0],["winparts.se",0],["sportano.sk",1],["sportano.de",1],["sportano.bg",1],["sportano.hu",1],["sportano.ro",1],["sportano.cz",1],["klinik-am-ring.de",2],["buildex.cz",3],["gruenderservice.at",4],["pdc-big.nl",5],["pdc-big.it",5],["pdc-big.ie",5],["pdc-big.fr",5],["pdc-big.es",5],["pdc-big.be",5],["pdc-big.at",5],["pdc-big.co.uk",5],["pdc-big.de",5],["pdc-big.com",5],["elio-systems.io",[6,13]],["sanha.com",[6,13]],["recettesetcabas.com",7],["flinders.edu.au",8],["opera.com",9],["groningenairport.nl",10],["crocs.co.uk",[11,12]],["crocs.eu",[11,12]],["crocs.nl",[11,12]],["crocs.fi",[11,12]],["crocs.fr",[11,12]],["crocs.de",[11,12]],["rappjmed.ch",14],["stilord.fr",15],["stilord.it",15],["stilord.de",15],["stilord.es",15],["dasfutterhaus.at",16],["developer.paypal.com",17],["cpc2r.ch",18],["zen.com",19],["tecsafe.de",20],["stromnetz.berlin",21],["websummit.com",22],["thehustle.co",22],["epochtimes.fr",23],["ajbell.co.uk",24],["economiapertutti.bancaditalia.it",25],["quantamagazine.org",26],["tradersunion.com",26],["phsgreenleaf.co.uk",27],["phswashrooms.ie",27],["mccolls.co.uk",[28,29]],["foxracingshox.de",30],["crt.hr",31],["yourstorebox.com",32],["clickskeks.at",[33,34]],["housell.com",35],["lactostop.de",36],["dermapharm.de",36],["mibe.de",36],["spilger.de",37],["dbs.si",38],["abcya.com",39],["jongcdenv.be",40],["umicore.jp",40],["umicore.cn",40],["umicore.pl",40],["umicore.kr",40],["umicore.co.th",40],["umicore.fr",40],["umicore.de",40],["donneurdecellulessouches.be",40],["stammzellenspender.be",40],["stemcelldonor.be",40],["umicore.com",40],["umicore.com.br",40],["koenvandenheuvel.be",40],["stamceldonor.be",40],["nahima.be",40],["catused.com",41],["eujuicers.cz",42],["graziellawicki.com",43],["funnelcockpit.com",43],["dnk.nl",44],["eam.de",45],["eam-netz.de",45],["tvp.pl",46],["cellardoor.co",47],["ampire.de",48],["verpackungsstadl.ch",48],["imkershoperzgebirge.de",48],["modellbahndealer.de",48],["tillit-bikes.shop",48],["bike-onlineshop.de",48],["futspo.de",48],["compravo.de",48],["perpedale.de",48],["modellbau-jung.de",48],["verpackungsstadl.at",48],["modellbau-vordermaier.de",48],["bike-supply.de",48],["wroc.pl",49],["basenio.de",50],["fm-systeme.de",51],["gartenhotel-crystal.at",52],["swffm.de",52],["studentenwerkfrankfurt.de",52],["dmsg.de",52],["bgk.pl",52],["pflegezeit-berlin.de",52],["gpd-nordost-onlineberatung.de",52],["proabschluss-beratung.de",52],["hilfe-telefon-missbrauch.online",52],["dww-suchtberatung.de",52],["cyberforum.de",52],["gutscheine.eurothermen.at",52],["wolff-mueller.de",52],["ras.bz.it",52],["wifiwien.at",[53,54]],["wifikaernten.at",[53,54]],["wifi.at",[53,54]],["pdf-archive.com",54],["swrng.de",54],["5asec.pt",55],["tui.dk",55],["tui.fi",55],["tui.no",55],["tui.se",55],["leslipfrancais.fr",55],["bremischevb.de",[55,124]],["meinebank.de",[55,124]],["vb-rb.de",[55,124]],["gladbacher-bank.de",[55,124]],["nordthueringer-volksbank.de",[55,124]],["bodenseebank.de",[55,124]],["rb-oberaudorf.de",[55,124]],["volksbank-trossingen.de",[55,124]],["owl-immobilien.de",[55,124]],["volksbank-backnang.de",[55,124]],["volksbank-international.de",[55,124]],["raiba-westhausen.de",[55,124]],["vr-nopf.cz",[55,124]],["vrbankimmobilien.de",[55,124]],["cvw-privatbank-ag.de",[55,124]],["rb-denzlingen-sexau.de",[55,124]],["rv-banken.de",[55,124]],["volksbank-remseck.de",[55,124]],["raiba-gr.de",[55,124]],["vrb-spangenberg.de",[55,124]],["rb-berghuelen.de",[55,124]],["vb-lauterecken.de",[55,124]],["rb-sondelfingen.de",[55,124]],["voba-deisslingen.de",[55,124]],["saechsischer-gewinnsparverein.de",[55,124]],["rb-hardt-bruhrain.de",[55,124]],["volksbank-daaden.de",[55,124]],["dervolksbanker.de",[55,124]],["volksbank-kirnau.de",[55,124]],["skbwitten.de",[55,124]],["raiba-ndwa.de",[55,124]],["volksbank-mittleres-erzgebirge.de",[55,124]],["rb-eching.de",[55,124]],["volksbank-aktiv.de",[55,124]],["vbsuedemsland.de",[55,124]],["voba-moeckmuehl.de",[55,124]],["volksbank-freiburg.de",[55,124]],["vbleos.de",[55,124]],["meine-rvb.de",[55,124]],["aachener-bank.de",[55,124]],["muenchner-bank.de",[55,124]],["volksbank-dh.de",[55,124]],["volksbankeg.de",[55,124]],["sparda-bank-hamburg.de",[55,124]],["sparda-sw.de",[55,124]],["volksbank-thueringen-mitte.de",[55,124]],["vrbankeg.de",[55,124]],["bernhauser-bank.de",[55,124]],["vvrbank-krp.de",[55,124]],["vvr-bank.de",[55,124]],["vb-mittelhessen.de",[55,124]],["vr-bayernmitte.de",[55,124]],["pollfish.com",56],["werkenbijtrekpleister.nl",57],["werkenbijkruidvat.be",57],["rassenlijst.info",57],["werkenbijiciparisxl.nl",57],["tesa-labtec.com",58],["tesatape.ru",58],["tesa.com",58],["flightradar24.com",59],["apk-vk.at",60],["vietnamairlines.com",61],["incotec.com",62],["croda.com",62],["exaktafoto.se",63],["campingdusoleil.com",64],["hotel-la-chaumiere.com",64],["les-anges-gardiens.fr",64],["croco-kid.com",64],["cambridge-centre.fr",64],["equisud.com",64],["allokebab-pau.fr",64],["etre-visible.local.fr",64],["mas-montebello66.com",64],["camping-residentiel-les-marronniers-jura.fr",64],["dj4events.fr",64],["saintjoursexpertmaritime.com",64],["az-renovation.fr",64],["presquilemultiservices.com",64],["hotel-aigoual.com",64],["hotel-restaurant-pau.com",64],["desrayaud-paysagistes.com",64],["hotelsaintcharles.fr",64],["agvillagecamarguais.com",64],["joyella.com",64],["gabriel-godard.com",64],["artech-sellerie.com",64],["motoclubernee.com",64],["ledauphinhotel.com",64],["cuisin-studio.com",64],["biomeo-environnement.com",64],["leman-instruments.com",64],["esthetique-meyerbeer.com",64],["institut-bio-naturel-nice.fr",64],["nature-et-bois.fr",64],["transmissions-bordeaux.com",64],["kinechartreuse.com",64],["corsegourmande.com",64],["cotedecor.com",64],["restaurant-la-badiane.fr",64],["systelia.fr",64],["lesjardinsinterieurs.com",64],["helenevue.com",64],["saubusse-thermes.com",64],["dehn.es",65],["dehn.fr",65],["dehn.it",65],["dehn.hu",65],["desitek.dk",65],["dehn.at",65],["dehn.de",65],["wwz.ch",66],["taloon.com",67],["inyova.at",68],["inyova.ch",68],["inyova.de",68],["ccalbacenter.com",68],["wamu.org",68],["momentive.com",69],["kennedyslaw.com",70],["elekta.com",71],["stratasysdirect.com",72],["stratasys.com",72],["werkenbijkruidvat.nl",73],["ghacks.net",74],["cutoff.es",75],["mbanc.com",76],["dentalgalindo.com",[77,78]],["brutalvisual.com",[77,78]],["archeologia.com.pl",[77,78]],["letrayframe.com",[77,78]],["osteofisintegral.es",[77,78]],["uco.cat",[77,78]],["buecheler-kollegen.de",[77,78]],["seminariodeosma-soria.org",[77,78]],["kamensenica.sk",[77,78]],["movimentoofficinedelsud.it",[77,78]],["trident.se",[77,78]],["semanasantademalagaayeryhoy.com",[77,78]],["diazfloristasestrella.com",[77,78]],["cosechavida.com",[77,78]],["centre-hypnose-moselle.com",[77,78]],["broncoillustration.com",[77,78]],["sumoingenio.com",[77,78]],["aligepro.es",[77,78]],["muevo.es",[77,78]],["azulejosacedo.com",[77,78]],["sana.cz",[77,78]],["aliapinto.com",[77,78]],["tsconline.es",[77,78]],["polifast.it",[77,78]],["napos.cz",[77,78]],["gutshaus-neuendorf-usedom.de",[77,78]],["kunterbunte-kinder.de",[77,78]],["desatando.org",[77,78]],["ledocom.cz",[77,78]],["aliciasuarez.net",[77,78]],["diabramar.com",[77,78]],["lamagnalonga.org",[77,78]],["benejamrefrigeracion.com",[77,78]],["micropigmentacioncapilarbcn.com",[77,78]],["revistaauge.com.ar",[77,78]],["arcusnet.se",[77,78]],["videogenic.es",[77,78]],["grundschule-remagen.de",[77,78]],["aceitessatunion.com",[77,78]],["servigraphic.com.ar",[77,78]],["textsteine.de",[77,78]],["campergarage.es",[77,78]],["administradorfincasblog.com",[77,78]],["balgal.es",[77,78]],["grafika-dtp-produkcia.sk",[77,78]],["unmardeconstelaciones.com",[77,78]],["salobella.com",[77,78]],["careon.se",[77,78]],["gymnosport.com",[77,78]],["easyhomes.com.es",[77,78]],["casavaledalama.pt",[77,78]],["dosc.es",[77,78]],["fcfoz.pt",[77,78]],["berevolk.com",[77,78]],["hvpropertyclearance.co.uk",[77,78]],["calamo.se",[77,78]],["elserratplanoles.com",[77,78]],["bubblessea.es",[77,78]],["disperator.se",[77,78]],["ecoparquets.com",[77,78]],["zlotaraczkalublin.pl",[77,78]],["congresoscostadelsol.com",[77,78]],["pneumaticiroma.it",[77,78]],["asprona.es",[77,78]],["virgendefatima.es",[77,78]],["patronatpremia.cat",[77,78]],["2points13.fr",[77,78]],["3d3.es",[77,78]],["abantos.es",[77,78]],["abastanimacio.org",[77,78]],["academiafrancesadebelleza.co",[77,78]],["acaluca.org",[77,78]],["acce.es",[77,78]],["ad-particles.com",[77,78]],["adea.sk",[77,78]],["afplr.fr",[77,78]],["agiletalon.fr",[77,78]],["agiratou.com",[77,78]],["aidaromero.com",[77,78]],["alkoholochnarkotika.se",[77,78]],["alligatorbioscience.se",[77,78]],["anea.es",[77,78]],["animala.es",[77,78]],["antequerabelleza.com",[77,78]],["apimadrid.net",[77,78]],["aquatrend.sk",[77,78]],["arabesque-formation.org",[77,78]],["arrivamallorca.es",[77,78]],["arteydeco.es",[77,78]],["asapservicios.net",[77,78]],["aspock.com",[77,78]],["atout-voyages.com",[77,78]],["autocareslazara.es",[77,78]],["autocaresmariano.com",[77,78]],["autoform.pl",[77,78]],["ayudatranspersonal.com",[77,78]],["bacabeton.cz",[77,78]],["begalvi.com",[77,78]],["bent-com.com",[77,78]],["berliner-haeuser.de",[77,78]],["bespokespain.com",[77,78]],["bevent-rasch.se",[77,78]],["bio-cord.es",[77,78]],["biotropica.fr",[77,78]],["bornes-eurorelais.fr",[77,78]],["braeu-stueble.de",[77,78]],["brendanoharamp.scot",[77,78]],["briau.com",[77,78]],["caleulalia.com",[77,78]],["cande-sur-beuvron.com",[77,78]],["carlhag.se",[77,78]],["carrier.se",[77,78]],["casadelaveiga.com",[77,78]],["caytas.com.tr",[77,78]],["cecjecuador.org.ec",[77,78]],["cegef.com",[77,78]],["centrediagonal.com",[77,78]],["centropolisportivomassari.it",[77,78]],["cerai.org",[77,78]],["cervosgrup.com",[77,78]],["chimeneasalicante.com",[77,78]],["circodelshow.com",[77,78]],["cliatec.com",[77,78]],["clinicabadal.es",[77,78]],["cometh-consulting.com",[77,78]],["copysud.fr",[77,78]],["cortilar.com",[77,78]],["crystal-finance.com",[77,78]],["ctangana.com",[77,78]],["cugatresidencial.com",[77,78]],["dake.es",[77,78]],["datatal.se",[77,78]],["degom.com",[77,78]],["delfis.es",[77,78]],["delogica.com",[77,78]],["dentalcompany.es",[77,78]],["descarpack.com.br",[77,78]],["desfiladeroediciones.com",[77,78]],["desomer.be",[77,78]],["diarioandalucia.es",[77,78]],["dibujos-animados.net",[77,78]],["direkt-immobilie.de",[77,78]],["dovozautznemecka.cz",[77,78]],["drpuigdollers.com",[77,78]],["dunamys.inf.br",[77,78]],["easyimplantology.com",[77,78]],["eb2b.com.pl",[77,78]],["echo-mieszkania.pl",[77,78]],["eclinic.com.sg",[77,78]],["edgeict.com",[77,78]],["eiglaw.com",[77,78]],["elandexpediciones.es",[77,78]],["emalec.com",[77,78]],["enlighten.net",[77,78]],["equifab.es",[77,78]],["escuelanauticamarenostrum.com",[77,78]],["esgrima.cat",[77,78]],["espaisperconviure.es",[77,78]],["etbygg.com",[77,78]],["eurepieces.fr",[77,78]],["euroenvio.com",[77,78]],["eurotex.es",[77,78]],["expertetfinance.fr",[77,78]],["farmarsketrhyfuturum.cz",[77,78]],["fastvisa.fr",[77,78]],["fauxdiplomes.org",[77,78]],["fisiolistic.com",[77,78]],["fondazionealbertosordi.it",[77,78]],["foyersekcjapolska.eu",[77,78]],["fundacjaeds.pl",[77,78]],["galeriaxanadu.pl",[77,78]],["garcia-ibanez.com",[77,78]],["gestenaval.com",[77,78]],["glaskogen.se",[77,78]],["globalteam.es",[77,78]],["goia.org.pl",[77,78]],["granibier.com",[77,78]],["grundia.se",[77,78]],["grupoisn.com",[77,78]],["gruporhzaragoza.com",[77,78]],["hagagruppen.se",[77,78]],["halima-magazin.com",[77,78]],["handelskammaren.com",[77,78]],["helitecnics.com",[77,78]],["helux.se",[77,78]],["hermanosalcaraz.com",[77,78]],["hjarnkoll.se",[77,78]],["hmfoundation.com",[77,78]],["hormimpres.com",[77,78]],["hoteldeprony.fr",[77,78]],["hotelroyalcatania.it",[77,78]],["houjethai.nl",[77,78]],["hummer.cz",[77,78]],["icld.se",[77,78]],["ict-project.it",[77,78]],["imagelova.id",[77,78]],["imprentalaspalmas.com",[77,78]],["informamiele.it",[77,78]],["inission.com",[77,78]],["inmobiliariavolga.com",[77,78]],["international-terra-institute.com",[77,78]],["inwaspain.com",[77,78]],["izkigolf.eus",[77,78]],["jdmusic.se",[77,78]],["juveycamps.com",[77,78]],["karel1.nl",[77,78]],["kaunokapiniuprieziura.lt",[77,78]],["kcmkompresor.com",[77,78]],["kewaccountants.co.uk",[77,78]],["konkretplus.pl",[77,78]],["krajci.cz",[77,78]],["krisvagenut.se",[77,78]],["kyoceracapetown.co.za",[77,78]],["labaguette.pl",[77,78]],["labintegrados.com",[77,78]],["ladderupinc.com",[77,78]],["landskronafoto.org",[77,78]],["langarri.es",[77,78]],["lawa.es",[77,78]],["laxo.se",[77,78]],["layher.se",[77,78]],["lifetraveler.net",[77,78]],["lindrooshalsa.se",[77,78]],["lobolab.es",[77,78]],["maisqueromanicorutas.com",[77,78]],["mallandonoandroid.com",[77,78]],["masconcas.com",[77,78]],["mediabest.cz",[77,78]],["megustaelvino.es",[77,78]],["mensa.se",[77,78]],["mestiteslilis.com",[77,78]],["minutoprint.com",[77,78]],["mirano.cz",[77,78]],["mogador.cz",[77,78]],["morphestudio.es",[77,78]],["motoaxial.com",[77,78]],["multiversidad.es",[77,78]],["mundollaves.com",[77,78]],["musicotherapie-federationfrancaise.com",[77,78]],["nauticaravaning.com",[77,78]],["nestville.sk",[77,78]],["nestvillepark.sk",[77,78]],["netromsoftware.ro",[77,78]],["nojesfabriken.se",[77,78]],["oddoneout.se",[77,78]],["opako.pl",[77,78]],["oserlafrique.com",[77,78]],["paintballalcorcon.com",[77,78]],["pallejabcn.com",[77,78]],["penicilinafruits.com",[77,78]],["peregrinoslh.com",[77,78]],["permis-lausanne.ch",[77,78]],["pernillaandersson.se",[77,78]],["piazzadelgusto.it",[77,78]],["pipi-antik.dk",[77,78]],["plasticosgeca.com",[77,78]],["plastimyr.com",[77,78]],["portal.unimes.br",[77,78]],["pro-beruf.de",[77,78]],["prophecyinternational.com",[77,78]],["psicoterapeuta.org",[77,78]],["puertasprieto.com",[77,78]],["puntosdefantasia.es",[77,78]],["pzmk.org.pl",[77,78]],["rastromaquinas.com",[77,78]],["rectoraldecastillon.com",[77,78]],["reinomineral.com",[77,78]],["reklamefreunde.de",[77,78]],["restauraciontalavera.es",[77,78]],["restauranthispania.com",[77,78]],["ristoranteeziogritti.it",[77,78]],["rubinmedical.dk",[77,78]],["rubinmedical.no",[77,78]],["rubinmedical.se",[77,78]],["sak.se",[77,78]],["sammetais.com.br",[77,78]],["sebastiancurylo.pl",[77,78]],["serigrafiaiorgi.com",[77,78]],["seyart.com",[77,78]],["sgaim.com",[77,78]],["sicamemt.org",[77,78]],["siguealconejoblanco.es",[77,78]],["sinfimasa.com",[77,78]],["skp.se",[77,78]],["skrobczynski.pl",[77,78]],["slush.de",[77,78]],["solebike.it",[77,78]],["solu-watt.fr",[77,78]],["soluzionainmobiliaria.es",[77,78]],["somoparque.com",[77,78]],["sorgingaztemoda.com",[77,78]],["sroportal.sk",[77,78]],["ssmf.se",[77,78]],["stobrasil.com.br",[77,78]],["stoparmut2015.ch",[77,78]],["studiodimuro.com",[77,78]],["subkultur-hannover.de",[77,78]],["sustanciagris.com",[77,78]],["szkt.sk",[77,78]],["tagibergslagen.se",[77,78]],["tallergastronomico.es",[77,78]],["tarna.fhsk.se",[77,78]],["tassenyalitzacio.com",[77,78]],["tctech.se",[77,78]],["teknoduegroup.it",[77,78]],["teloliquido.com",[77,78]],["temasa.es",[77,78]],["textilprint.sk",[77,78]],["thehouseofautomata.com",[77,78]],["tmgernika.com",[77,78]],["toastetmoi.fr",[77,78]],["tollare.org",[77,78]],["trattoriabolognesi.it",[77,78]],["triperavigatana.com",[77,78]],["tuckerfranklininsgrp.com",[77,78]],["tuftuf.net",[77,78]],["turuletras.com",[77,78]],["umfmb.fr",[77,78]],["upapsa.com",[77,78]],["valenciatoday.es",[77,78]],["vanghel-und-morawski.de",[77,78]],["vickycan.com",[77,78]],["ville-de-salles.com",[77,78]],["webbigt.se",[77,78]],["westlede.be",[77,78]],["wiemker.org",[77,78]],["woolink.co",[77,78]],["wp.fratgsa.org",[77,78]],["xatobaxestion.com",[77,78]],["xfactor-gmbh.de",[77,78]],["yougoenglish.com",[77,78]],["zigmoon.com",[77,78]],["canyon.com",[79,80]],["drimsim.com",81],["eteam-winkler.de",82],["kdn-elektro.de",82],["elektro-kotz.de",82],["elektro-service-rauh.de",82],["elektroanlagenbuettner.de",82],["be-connect.online",82],["bayergruppe.com",82],["bayer-wkt.de",82],["bayer-wind.de",82],["bayer-wd.de",82],["elektro-joa.de",82],["htechnik.de",82],["ehk-service.de",82],["bittner-tv.de",82],["elektro-suelzner.de",82],["elektro-leps.de",82],["elektromax-hausgeraete.de",82],["elektrotechnik-schedel.de",82],["elkugmbh.de",82],["ln-elektro-gmbh.de",82],["weiss-blau-gmbh.de",82],["sunbeam-energy.de",82],["prokauf.com",82],["lichtstudio-kerl.de",82],["liebing-beese.de",82],["hoeschel-baumann.de",82],["hausgeraete-kraemer.de",82],["gehlhaar-elektrotechnik.de",82],["ehs-elektrotechnik.de",82],["elektrojarschke.de",82],["elektrotechnik-fleischmann.de",82],["elektroseemueller.de",82],["schoerling-blitz.de",82],["ast-apolda.com",82],["elektro-klippel.de",82],["arntz-haustechnik.de",82],["elektro-bindel.de",82],["elektrotechnik-weiss.com",82],["brandschutz-hamburg.de",82],["wagnerelektrotechnik.de",82],["el-kramer.de",82],["mks-hof.de",82],["wernz-elektro.de",82],["e3-energy.de",82],["sg-solar.de",82],["elektrokrebs.de",82],["elektro-roehrl.de",82],["elektro-kreher.de",82],["giegling-vonsaal.de",82],["elektro-lehmann.com",82],["ems-wurzen.de",82],["scholpp.es",83],["scholpp.pl",83],["scholpp.it",83],["ptc.eu",83],["scholpp.com",83],["abo24.de",83],["overdrive.com",83],["wetu.com",83],["superwatchman.com",84],["wedding.pl",85],["bitburger-braugruppe.de",86],["proteincompany.fi",87],["proteinbolaget.se",87],["snoopmedia.com",88],["myguide.de",88],["study-in-germany.de",88],["daad.de",88],["biegnaszczyt.pl",89],["futterhaus.de",90],["scottsofstow.co.uk",[91,92]],["zawszepomorze.pl",93],["wasserkunst-hamburg.de",94],["lta.org.uk",95],["brico-travo.com",96],["conversion-rate-experts.com",97],["theateramrand.de",98],["jugend-praesentiert.de",98],["xhamster.com",99],["xhamster2.com",99],["xhamster3.com",99],["xhamster18.desi",99],["athletic-club.eus",100],["close2.de",[101,102,103]],["medicalti.it",[101,102,103]],["grottisrl.it",[101,102,103]],["vilmie-pet.com",[101,102,103]],["private-krankenversicherungen-vergleich.de",[101,102,103]],["ipanema-shop.com",[101,102,103]],["buero-rothenfusser.com",[101,102,103]],["versi24.de",[101,102,103]],["rs-vertriebsservice.com",[101,102,103]],["matina-gmbh.de",[101,102,103]],["erding-solar.de",[101,102,103]],["greenwoods-small-pet.com",[101,102,103]],["kfz-schwabing.de",[101,102,103]],["comune.randazzo.ct.it",[101,102,103]],["comune.catania.it",[101,102,103]],["ordineavvocaticatania.it",[101,102,103]],["agentur-alberts.de",[101,102,103]],["waveaudio.de",[101,102,103]],["alexide.com",[101,102,103]],["piske-innovationen.de",[101,102,103]],["sbit.ag",[101,102,103]],["smilla-katzenfutter.de",[101,102,103]],["evium.de",104],["epayments.com",105],["riceundspice.de",106],["happysocks.com",[107,108]],["win2day.at",109],["petcity.lt",110],["porp.pl",111],["computerbase.de",112],["gesundheitsamt-2025.de",113],["coastfashion.com",114],["oasisfashion.com",114],["warehousefashion.com",114],["misspap.com",114],["karenmillen.com",114],["boohooman.com",114],["nebo.app",115],["groupeonepoint.com",116],["edpsciences.org",117],["bemmaisseguro.com",118],["wetransfer.com",119],["scheidegger.nl",120],["phoenix.de",121],["strato.se",122],["strato.de",122],["mishcon.com",123],["bbva.es",125],["bbvauk.com",125],["bbva.be",125],["bbva.fr",125],["bbva.it",125],["bbva.pt",125],["suntech.cz",126],["digikey.co.za",127],["digikey.cn",127],["digikey.ee",127],["digikey.at",127],["digikey.be",127],["digikey.bg",127],["digikey.cz",127],["digikey.dk",127],["digikey.fi",127],["digikey.fr",127],["digikey.de",127],["digikey.gr",127],["digikey.hu",127],["digikey.ie",127],["digikey.it",127],["digikey.lv",127],["digikey.lt",127],["digikey.lu",127],["digikey.nl",127],["digikey.no",127],["digikey.pl",127],["digikey.pt",127],["digikey.ro",127],["digikey.sk",127],["digikey.si",127],["digikey.es",127],["digikey.se",127],["digikey.ch",127],["digikey.co.uk",127],["digikey.co.il",127],["digikey.com.mx",127],["digikey.ca",127],["digikey.com.br",127],["digikey.co.nz",127],["digikey.com.au",127],["digikey.co.th",127],["digikey.tw",127],["digikey.kr",127],["digikey.sg",127],["digikey.ph",127],["digikey.my",127],["digikey.jp",127],["digikey.in",127],["digikey.hk",127],["digikey.com",127],["eurosupps.nl",128],["pathe.nl",129],["makelaarsland.nl",130],["nordania.dk",131],["365direkte.no",131],["danskebank.lv",131],["danskebank.lt",131],["danskebank.no",131],["danskebank.fi",131],["danskebank.dk",131],["danskebank.com",131],["danskebank.se",131],["danskebank.co.uk",131],["danskeci.com",131],["danicapension.dk",131],["gewerbegebiete.de",132],["visti.it",133],["balay.es",134],["constructa.com",134],["gaggenau.com",134],["loudersound.com",135],["impulse.de",135],["pcgamer.com",135],["infoworld.com",135],["kiplinger.com",135],["omni.se",135],["it-times.de",135],["bitcoinmagazine.com",135],["deliciousmagazine.co.uk",135],["upday.com",135],["theguardian.com",135],["deutschlandcard.de",135],["szbz.de",135],["free-fonts.com",135],["lieferzeiten.info",135],["vice.com",135],["newsnow.co.uk",135],["out.com",135],["streampicker.de",135],["radiotimes.com",135],["nowtv.com",135],["kochbar.de",135],["toggo.de",135],["am-online.com",135],["n-tv.de",135],["newsandstar.co.uk",135],["tag24.de",135],["weltkunst.de",135],["noveauta.sk",135],["pnn.de",135],["economist.com",135],["crash.net",135],["norwaytoday.info",135],["insider.com",135],["preis.de",135],["ibroxnoise.co.uk",135],["celtsarehere.com",135],["nufcblog.co.uk",135],["sport1.de",135],["techconnect.com",135],["followfollow.com",135],["thespun.com",135],["mazdas247.com",135],["fastcar.co.uk",135],["vitalfootball.co.uk",135],["audi-sport.net",135],["bumble.com",135],["arcamax.com",135],["dilbert.com",135],["sportbible.com",135],["givemesport.com",135],["dartsnews.com",135],["gpfans.com",135],["justjared.com",135],["justjaredjr.com",135],["finanzen.at",135],["idealo.at",135],["ladenzeile.at",135],["berliner-zeitung.de",135],["urbia.de",135],["essen-und-trinken.de",135],["wetter.de",135],["rtl-living.de",135],["vox.de",135],["ladenzeile.de",135],["advocate.com",135],["idealo.de",135],["wigantoday.net",135],["economistgroup.com",135],["transfermarkt.nl",135],["transfermarkt.es",135],["transfermarkt.pl",135],["transfermarkt.pt",135],["transfermarkt.at",135],["transfermarkt.it",135],["transfermarkt.fr",135],["transfermarkt.de",135],["transfermarkt.be",135],["transfermarkt.co.uk",135],["transfermarkt.us",135],["footballfancast.com",135],["cio.com",135],["jezebel.com",135],["splinternews.com",135],["denofgeek.com",135],["kinja.com",135],["theinventory.com",135],["rollingstone.de",135],["sueddeutsche.de",135],["csoonline.com",135],["tvmovie.de",135],["testberichte.de",135],["pcgameshardware.de",135],["4players.de",135],["guj.de",135],["bild.de",135],["wieistmeineip.de",135],["testbild.de",135],["stylebook.de",135],["skygroup.sky",135],["speisekarte.de",135],["haeuser.de",135],["cmo.com.au",135],["pcworld.co.nz",135],["idealo.it",135],["transfermarkt.jp",135],["transfermarkt.co.id",135],["autoexpress.co.uk",135],["transfermarkt.com",135],["esportsclub.nl",135],["webwinkel.tubantia.nl",135],["shopalike.nl",135],["autoweek.nl",135],["pcworld.es",135],["macworld.es",135],["idealo.es",135],["businessinsider.es",135],["motor.es",135],["autobild.es",135],["driving.co.uk",135],["stern.de",135],["pcgames.de",135],["sport.de",135],["idealo.fr",135],["barrons.com",135],["tori.fi",135],["snow-forecast.com",135],["tidende.dk",135],["kraloyun.com",135],["arnnet.com.au",135],["bunte.de",135],["handelsblatt.com",135],["techbook.de",135],["metal-hammer.de",135],["macworld.co.uk",135],["maxisciences.com",135],["ohmymag.com",135],["voici.fr",135],["geo.de",135],["businessinsider.de",135],["heise.de",135],["meinestadt.de",135],["politico.eu",135],["spieletipps.de",135],["finanznachrichten.de",135],["vtwonen.nl",135],["stol.it",135],["waitrose.com",136],["storyhouseegmont.dk",137],["storyhouseegmont.no",137],["storyhouseegmont.se",137],["egmont.com",137],["nordiskfilm.com",137],["faq.whatsapp.com",138],["blog.whatsapp.com",138],["www.whatsapp.com",138]]);

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
                    pattern,
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            return {
                pattern,
                re: new this.RegExp(pattern.replace(
                    /[.*+?^${}()|[\]\\]/g, '\\$&'),
                    options.flags
                ),
                expect,
            };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            return this.RegExp_test.call(details.re, haystack) === details.expect;
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
