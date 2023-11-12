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

const argsList = [["cookie-consent-active","body","stay"],["cookie-overlay-active","body","stay"],["modal-open","body","stay"],["hasPopup","body","stay"],["scommerce-gdpr-disabled","div","stay"],["no-scroll","html","stay"],["compensate-for-scrollbar","body","stay"],["gdpr-shown","body","stay"],["cookie-consent__wrapper","div","stay"],["cookies-request","body","stay"],["cx-modal-open","html","stay"],["cx-no-scroll","html","stay"],["e-cookie-bar-open","body","stay"],["cookies-not-set","body","stay"],["no-consent","html","stay"],["is-blurred-cookiebox","html","stay"],["ccpaCookieBanner-acceptedAll","body","stay"],["cookies-show",".cookies-show","stay"],["disable-background","body","stay"],["cookie--not-set","body","stay"],["_cookiebanner","body","stay"],["async-hide","html","stay"],["ntd-gdpr-no-scroll","body","stay"],["modal-background","div","stay"],["pef-no-cookie","body","stay"],["cookie-not-accepted","body","stay"],["c-body--locked-always","body","stay"],["global-cookie","div","stay"],["disable-scroll","","stay"],["cookie--not-set","","stay"],["bg-gray","div","stay"],["cookie-active","body","stay"],["ccm-blocked","html","stay"],["ccm-blocked","body","stay"],["is-modal-cookies-visible","body","stay"],["layerActive","","stay"],["cookiebar-open","body","stay"],["blur","body","stay"],["cookie","","stay"],["cookieconsent-active","body","stay"],["cookieMsg","","stay"],["cookie_consent__alert","","stay"],["gdpr-cookie-notice-center-loaded","","stay"],["has-open-cookie","","stay"],["om_cookie_active","","stay"],["tvp-cookie-scroll-lock","","stay"],["cookie-overlay","","stay"],["disable","div","stay"],["prevent-scroll","","stay"],["fog","","stay"],["cookie-hint","","stay"],["dp--cookie-consent","body","stay"],["body-overlay-scrollable","","stay"],["modal-open","","stay"],["no-scroll","body","stay"],["show-cookie-consent","","stay"],["is-active-cookiebar","","stay"],["-locked","","stay"],["has-banner","body.has-banner","stay"],["pointerevents","","stay"],["cookie-accept-required","","stay"],["cookie-open","","stay"],["cookiePopupVisible","","stay"],["unreadable-display","","stay"],["mandatory_cookie_modal","","stay"],["wwzoverlay--open","","stay"],["cookie_popup_exists","div.page-wrapper","stay"],["gdpr-infobar-visible","","stay"],["cookie-enabled","","stay"],["cookie-overlay--open","","stay"],["cookie-banner-open","","stay"],["overlay-content","body","stay"],["is-active-cookiebar","body","stay"],["didomi-popup-open","body"],["idxrcookies-block-user-nav","body","stay"],["ccpa-banner","","stay"],["modal-cacsp-open","","stay"],["modal-cacsp-box","","stay"],["js-modalUnclosable","","stay"],["js-cookiesModal|is-open",".js-cookiesModal,.is-open"],["remodal-bg","","stay"],["cookie-warning-open","","stay"],["with-featherlight","","stay"],["cookies-shown","body","stay"],["filter-blur","","stay"],["no-cookie","","stay"],["dimmeractive","body","stay"],["snoop-modal-open","body","stay"],["blurred","","stay"],["is-blurred-cookiebox","","stay"],["consent-manager--popup","body","stay"],["consent-manager-open","body","stay"],["zp-gtm-scripts--blur","","stay"],["dots","","stay"],["cookies-modal-open","","stay"],["overlay","body","stay"],["modal-has-active","body","stay"],["messages-active","","stay"],["xh-thumb-disabled","","stay"],["body--cookies-panel-opened","","stay"],["chefcookie--blur","html","stay"],["chefcookie--fade","html","stay"],["chefcookie--noscroll","html","stay"],["cdk-overlay-container","","stay"],["b-dialog","","stay"],["disabled","body","stay"],["lock-scroll","","stay"],["disabled","header","stay"],["cookie-not-accepted-overlay","","stay"],["overlayopen","","stay"],["blurred-page","","stay"],["consent-dialog-open","body"],["cookie-consent--present","","stay"],["header-gdrp-cookies-visible","","stay"],["fixed","","stay"],["noScroll","","stay"],["cookie_notification","","stay"],["blocked-body","","stay"],["transfer__cookie-wall-active",".transfer__cookie-wall-active","stay"],["has-no-scroll","","stay"],["blured","","stay"],["noscroll","body","stay"],["has-overlay","","stay"],["cookie-consent-is-active","body","stay"],["cookiesgdpr__scroll","","stay"],["modal-show","","stay"],["gdpr","","stay"],["cookieopened","body","stay"],["cookiewall-active","body","stay"],["is-cookie-notice","body","stay"],["cookie-consent-banner-open","html","stay"],["modal-overlay","","stay"],["blur","","stay"],["cookielaw-blur-background","","stay"],["sp-message-open","html","stay"],["modalOpen___gZykv","body"],["cookie-bar","","stay"],["hasCookieBanner","body","stay"]];

const hostnamesMap = new Map([["winparts.be",0],["winparts.eu",0],["winparts.fr",0],["winparts.ie",0],["winparts.nl",0],["winparts.se",0],["sportano.sk",1],["sportano.de",1],["sportano.bg",1],["sportano.hu",1],["sportano.ro",1],["sportano.cz",1],["buildex.cz",2],["gruenderservice.at",3],["pdc-big.nl",4],["pdc-big.it",4],["pdc-big.ie",4],["pdc-big.fr",4],["pdc-big.es",4],["pdc-big.be",4],["pdc-big.at",4],["pdc-big.co.uk",4],["pdc-big.de",4],["pdc-big.com",4],["elio-systems.io",[5,12]],["sanha.com",[5,12]],["recettesetcabas.com",6],["flinders.edu.au",7],["opera.com",8],["groningenairport.nl",9],["crocs.co.uk",[10,11]],["crocs.eu",[10,11]],["crocs.nl",[10,11]],["crocs.fi",[10,11]],["crocs.fr",[10,11]],["crocs.de",[10,11]],["rappjmed.ch",13],["stilord.fr",14],["stilord.it",14],["stilord.de",14],["stilord.es",14],["dasfutterhaus.at",15],["developer.paypal.com",16],["cpc2r.ch",17],["zen.com",18],["tecsafe.de",19],["stromnetz.berlin",20],["websummit.com",21],["thehustle.co",21],["epochtimes.fr",22],["ajbell.co.uk",23],["economiapertutti.bancaditalia.it",24],["quantamagazine.org",25],["tradersunion.com",25],["phsgreenleaf.co.uk",26],["phswashrooms.ie",26],["mccolls.co.uk",[27,28]],["foxracingshox.de",29],["crt.hr",30],["yourstorebox.com",31],["clickskeks.at",[32,33]],["housell.com",34],["lactostop.de",35],["dermapharm.de",35],["mibe.de",35],["spilger.de",36],["dbs.si",37],["abcya.com",38],["jongcdenv.be",39],["umicore.jp",39],["umicore.cn",39],["umicore.pl",39],["umicore.kr",39],["umicore.co.th",39],["umicore.fr",39],["umicore.de",39],["donneurdecellulessouches.be",39],["stammzellenspender.be",39],["stemcelldonor.be",39],["umicore.com",39],["umicore.com.br",39],["koenvandenheuvel.be",39],["stamceldonor.be",39],["nahima.be",39],["catused.com",40],["eujuicers.cz",41],["graziellawicki.com",42],["funnelcockpit.com",42],["dnk.nl",43],["eam.de",44],["eam-netz.de",44],["tvp.pl",45],["cellardoor.co",46],["ampire.de",47],["verpackungsstadl.ch",47],["imkershoperzgebirge.de",47],["modellbahndealer.de",47],["tillit-bikes.shop",47],["bike-onlineshop.de",47],["futspo.de",47],["compravo.de",47],["perpedale.de",47],["modellbau-jung.de",47],["verpackungsstadl.at",47],["modellbau-vordermaier.de",47],["bike-supply.de",47],["wroc.pl",48],["basenio.de",49],["fm-systeme.de",50],["gartenhotel-crystal.at",51],["swffm.de",51],["studentenwerkfrankfurt.de",51],["dmsg.de",51],["bgk.pl",51],["pflegezeit-berlin.de",51],["gpd-nordost-onlineberatung.de",51],["proabschluss-beratung.de",51],["hilfe-telefon-missbrauch.online",51],["dww-suchtberatung.de",51],["cyberforum.de",51],["gutscheine.eurothermen.at",51],["wolff-mueller.de",51],["ras.bz.it",51],["wifiwien.at",[52,53]],["wifikaernten.at",[52,53]],["wifi.at",[52,53]],["pdf-archive.com",53],["swrng.de",53],["5asec.pt",54],["tui.dk",54],["tui.fi",54],["tui.no",54],["tui.se",54],["leslipfrancais.fr",54],["bremischevb.de",[54,123]],["meinebank.de",[54,123]],["vb-rb.de",[54,123]],["gladbacher-bank.de",[54,123]],["nordthueringer-volksbank.de",[54,123]],["bodenseebank.de",[54,123]],["rb-oberaudorf.de",[54,123]],["volksbank-trossingen.de",[54,123]],["owl-immobilien.de",[54,123]],["volksbank-backnang.de",[54,123]],["volksbank-international.de",[54,123]],["raiba-westhausen.de",[54,123]],["vr-nopf.cz",[54,123]],["vrbankimmobilien.de",[54,123]],["cvw-privatbank-ag.de",[54,123]],["rb-denzlingen-sexau.de",[54,123]],["rv-banken.de",[54,123]],["volksbank-remseck.de",[54,123]],["raiba-gr.de",[54,123]],["vrb-spangenberg.de",[54,123]],["rb-berghuelen.de",[54,123]],["vb-lauterecken.de",[54,123]],["rb-sondelfingen.de",[54,123]],["voba-deisslingen.de",[54,123]],["saechsischer-gewinnsparverein.de",[54,123]],["rb-hardt-bruhrain.de",[54,123]],["volksbank-daaden.de",[54,123]],["dervolksbanker.de",[54,123]],["volksbank-kirnau.de",[54,123]],["skbwitten.de",[54,123]],["raiba-ndwa.de",[54,123]],["volksbank-mittleres-erzgebirge.de",[54,123]],["rb-eching.de",[54,123]],["volksbank-aktiv.de",[54,123]],["vbsuedemsland.de",[54,123]],["voba-moeckmuehl.de",[54,123]],["volksbank-freiburg.de",[54,123]],["vbleos.de",[54,123]],["meine-rvb.de",[54,123]],["aachener-bank.de",[54,123]],["muenchner-bank.de",[54,123]],["volksbank-dh.de",[54,123]],["volksbankeg.de",[54,123]],["sparda-bank-hamburg.de",[54,123]],["sparda-sw.de",[54,123]],["volksbank-thueringen-mitte.de",[54,123]],["vrbankeg.de",[54,123]],["bernhauser-bank.de",[54,123]],["vvrbank-krp.de",[54,123]],["vvr-bank.de",[54,123]],["vb-mittelhessen.de",[54,123]],["vr-bayernmitte.de",[54,123]],["pollfish.com",55],["werkenbijtrekpleister.nl",56],["werkenbijkruidvat.be",56],["rassenlijst.info",56],["werkenbijiciparisxl.nl",56],["tesa-labtec.com",57],["tesatape.ru",57],["tesa.com",57],["flightradar24.com",58],["apk-vk.at",59],["vietnamairlines.com",60],["incotec.com",61],["croda.com",61],["exaktafoto.se",62],["campingdusoleil.com",63],["hotel-la-chaumiere.com",63],["les-anges-gardiens.fr",63],["croco-kid.com",63],["cambridge-centre.fr",63],["equisud.com",63],["allokebab-pau.fr",63],["etre-visible.local.fr",63],["mas-montebello66.com",63],["camping-residentiel-les-marronniers-jura.fr",63],["dj4events.fr",63],["saintjoursexpertmaritime.com",63],["az-renovation.fr",63],["presquilemultiservices.com",63],["hotel-aigoual.com",63],["hotel-restaurant-pau.com",63],["desrayaud-paysagistes.com",63],["hotelsaintcharles.fr",63],["agvillagecamarguais.com",63],["joyella.com",63],["gabriel-godard.com",63],["artech-sellerie.com",63],["motoclubernee.com",63],["ledauphinhotel.com",63],["cuisin-studio.com",63],["biomeo-environnement.com",63],["leman-instruments.com",63],["esthetique-meyerbeer.com",63],["institut-bio-naturel-nice.fr",63],["nature-et-bois.fr",63],["transmissions-bordeaux.com",63],["kinechartreuse.com",63],["corsegourmande.com",63],["cotedecor.com",63],["restaurant-la-badiane.fr",63],["systelia.fr",63],["lesjardinsinterieurs.com",63],["helenevue.com",63],["saubusse-thermes.com",63],["dehn.es",64],["dehn.fr",64],["dehn.it",64],["dehn.hu",64],["desitek.dk",64],["dehn.at",64],["dehn.de",64],["wwz.ch",65],["taloon.com",66],["inyova.at",67],["inyova.ch",67],["inyova.de",67],["ccalbacenter.com",67],["wamu.org",67],["momentive.com",68],["kennedyslaw.com",69],["elekta.com",70],["stratasysdirect.com",71],["stratasys.com",71],["werkenbijkruidvat.nl",72],["ghacks.net",73],["cutoff.es",74],["mbanc.com",75],["dentalgalindo.com",[76,77]],["brutalvisual.com",[76,77]],["archeologia.com.pl",[76,77]],["letrayframe.com",[76,77]],["osteofisintegral.es",[76,77]],["uco.cat",[76,77]],["buecheler-kollegen.de",[76,77]],["seminariodeosma-soria.org",[76,77]],["kamensenica.sk",[76,77]],["movimentoofficinedelsud.it",[76,77]],["trident.se",[76,77]],["semanasantademalagaayeryhoy.com",[76,77]],["diazfloristasestrella.com",[76,77]],["cosechavida.com",[76,77]],["centre-hypnose-moselle.com",[76,77]],["broncoillustration.com",[76,77]],["sumoingenio.com",[76,77]],["aligepro.es",[76,77]],["muevo.es",[76,77]],["azulejosacedo.com",[76,77]],["sana.cz",[76,77]],["aliapinto.com",[76,77]],["tsconline.es",[76,77]],["polifast.it",[76,77]],["napos.cz",[76,77]],["gutshaus-neuendorf-usedom.de",[76,77]],["kunterbunte-kinder.de",[76,77]],["desatando.org",[76,77]],["ledocom.cz",[76,77]],["aliciasuarez.net",[76,77]],["diabramar.com",[76,77]],["lamagnalonga.org",[76,77]],["benejamrefrigeracion.com",[76,77]],["micropigmentacioncapilarbcn.com",[76,77]],["revistaauge.com.ar",[76,77]],["arcusnet.se",[76,77]],["videogenic.es",[76,77]],["grundschule-remagen.de",[76,77]],["aceitessatunion.com",[76,77]],["servigraphic.com.ar",[76,77]],["textsteine.de",[76,77]],["campergarage.es",[76,77]],["administradorfincasblog.com",[76,77]],["balgal.es",[76,77]],["grafika-dtp-produkcia.sk",[76,77]],["unmardeconstelaciones.com",[76,77]],["salobella.com",[76,77]],["careon.se",[76,77]],["gymnosport.com",[76,77]],["easyhomes.com.es",[76,77]],["casavaledalama.pt",[76,77]],["dosc.es",[76,77]],["fcfoz.pt",[76,77]],["berevolk.com",[76,77]],["hvpropertyclearance.co.uk",[76,77]],["calamo.se",[76,77]],["elserratplanoles.com",[76,77]],["bubblessea.es",[76,77]],["disperator.se",[76,77]],["ecoparquets.com",[76,77]],["zlotaraczkalublin.pl",[76,77]],["congresoscostadelsol.com",[76,77]],["pneumaticiroma.it",[76,77]],["asprona.es",[76,77]],["virgendefatima.es",[76,77]],["patronatpremia.cat",[76,77]],["2points13.fr",[76,77]],["3d3.es",[76,77]],["abantos.es",[76,77]],["abastanimacio.org",[76,77]],["academiafrancesadebelleza.co",[76,77]],["acaluca.org",[76,77]],["acce.es",[76,77]],["ad-particles.com",[76,77]],["adea.sk",[76,77]],["afplr.fr",[76,77]],["agiletalon.fr",[76,77]],["agiratou.com",[76,77]],["aidaromero.com",[76,77]],["alkoholochnarkotika.se",[76,77]],["alligatorbioscience.se",[76,77]],["anea.es",[76,77]],["animala.es",[76,77]],["antequerabelleza.com",[76,77]],["apimadrid.net",[76,77]],["aquatrend.sk",[76,77]],["arabesque-formation.org",[76,77]],["arrivamallorca.es",[76,77]],["arteydeco.es",[76,77]],["asapservicios.net",[76,77]],["aspock.com",[76,77]],["atout-voyages.com",[76,77]],["autocareslazara.es",[76,77]],["autocaresmariano.com",[76,77]],["autoform.pl",[76,77]],["ayudatranspersonal.com",[76,77]],["bacabeton.cz",[76,77]],["begalvi.com",[76,77]],["bent-com.com",[76,77]],["berliner-haeuser.de",[76,77]],["bespokespain.com",[76,77]],["bevent-rasch.se",[76,77]],["bio-cord.es",[76,77]],["biotropica.fr",[76,77]],["bornes-eurorelais.fr",[76,77]],["braeu-stueble.de",[76,77]],["brendanoharamp.scot",[76,77]],["briau.com",[76,77]],["caleulalia.com",[76,77]],["cande-sur-beuvron.com",[76,77]],["carlhag.se",[76,77]],["carrier.se",[76,77]],["casadelaveiga.com",[76,77]],["caytas.com.tr",[76,77]],["cecjecuador.org.ec",[76,77]],["cegef.com",[76,77]],["centrediagonal.com",[76,77]],["centropolisportivomassari.it",[76,77]],["cerai.org",[76,77]],["cervosgrup.com",[76,77]],["chimeneasalicante.com",[76,77]],["circodelshow.com",[76,77]],["cliatec.com",[76,77]],["clinicabadal.es",[76,77]],["cometh-consulting.com",[76,77]],["copysud.fr",[76,77]],["cortilar.com",[76,77]],["crystal-finance.com",[76,77]],["ctangana.com",[76,77]],["cugatresidencial.com",[76,77]],["dake.es",[76,77]],["datatal.se",[76,77]],["degom.com",[76,77]],["delfis.es",[76,77]],["delogica.com",[76,77]],["dentalcompany.es",[76,77]],["descarpack.com.br",[76,77]],["desfiladeroediciones.com",[76,77]],["desomer.be",[76,77]],["diarioandalucia.es",[76,77]],["dibujos-animados.net",[76,77]],["direkt-immobilie.de",[76,77]],["dovozautznemecka.cz",[76,77]],["drpuigdollers.com",[76,77]],["dunamys.inf.br",[76,77]],["easyimplantology.com",[76,77]],["eb2b.com.pl",[76,77]],["echo-mieszkania.pl",[76,77]],["eclinic.com.sg",[76,77]],["edgeict.com",[76,77]],["eiglaw.com",[76,77]],["elandexpediciones.es",[76,77]],["emalec.com",[76,77]],["enlighten.net",[76,77]],["equifab.es",[76,77]],["escuelanauticamarenostrum.com",[76,77]],["esgrima.cat",[76,77]],["espaisperconviure.es",[76,77]],["etbygg.com",[76,77]],["eurepieces.fr",[76,77]],["euroenvio.com",[76,77]],["eurotex.es",[76,77]],["expertetfinance.fr",[76,77]],["farmarsketrhyfuturum.cz",[76,77]],["fastvisa.fr",[76,77]],["fauxdiplomes.org",[76,77]],["fisiolistic.com",[76,77]],["fondazionealbertosordi.it",[76,77]],["foyersekcjapolska.eu",[76,77]],["fundacjaeds.pl",[76,77]],["galeriaxanadu.pl",[76,77]],["garcia-ibanez.com",[76,77]],["gestenaval.com",[76,77]],["glaskogen.se",[76,77]],["globalteam.es",[76,77]],["goia.org.pl",[76,77]],["granibier.com",[76,77]],["grundia.se",[76,77]],["grupoisn.com",[76,77]],["gruporhzaragoza.com",[76,77]],["hagagruppen.se",[76,77]],["halima-magazin.com",[76,77]],["handelskammaren.com",[76,77]],["helitecnics.com",[76,77]],["helux.se",[76,77]],["hermanosalcaraz.com",[76,77]],["hjarnkoll.se",[76,77]],["hmfoundation.com",[76,77]],["hormimpres.com",[76,77]],["hoteldeprony.fr",[76,77]],["hotelroyalcatania.it",[76,77]],["houjethai.nl",[76,77]],["hummer.cz",[76,77]],["icld.se",[76,77]],["ict-project.it",[76,77]],["imagelova.id",[76,77]],["imprentalaspalmas.com",[76,77]],["informamiele.it",[76,77]],["inission.com",[76,77]],["inmobiliariavolga.com",[76,77]],["international-terra-institute.com",[76,77]],["inwaspain.com",[76,77]],["izkigolf.eus",[76,77]],["jdmusic.se",[76,77]],["juveycamps.com",[76,77]],["karel1.nl",[76,77]],["kaunokapiniuprieziura.lt",[76,77]],["kcmkompresor.com",[76,77]],["kewaccountants.co.uk",[76,77]],["konkretplus.pl",[76,77]],["krajci.cz",[76,77]],["krisvagenut.se",[76,77]],["kyoceracapetown.co.za",[76,77]],["labaguette.pl",[76,77]],["labintegrados.com",[76,77]],["ladderupinc.com",[76,77]],["landskronafoto.org",[76,77]],["langarri.es",[76,77]],["lawa.es",[76,77]],["laxo.se",[76,77]],["layher.se",[76,77]],["lifetraveler.net",[76,77]],["lindrooshalsa.se",[76,77]],["lobolab.es",[76,77]],["maisqueromanicorutas.com",[76,77]],["mallandonoandroid.com",[76,77]],["masconcas.com",[76,77]],["mediabest.cz",[76,77]],["megustaelvino.es",[76,77]],["mensa.se",[76,77]],["mestiteslilis.com",[76,77]],["minutoprint.com",[76,77]],["mirano.cz",[76,77]],["mogador.cz",[76,77]],["morphestudio.es",[76,77]],["motoaxial.com",[76,77]],["multiversidad.es",[76,77]],["mundollaves.com",[76,77]],["musicotherapie-federationfrancaise.com",[76,77]],["nauticaravaning.com",[76,77]],["nestville.sk",[76,77]],["nestvillepark.sk",[76,77]],["netromsoftware.ro",[76,77]],["nojesfabriken.se",[76,77]],["oddoneout.se",[76,77]],["opako.pl",[76,77]],["oserlafrique.com",[76,77]],["paintballalcorcon.com",[76,77]],["pallejabcn.com",[76,77]],["penicilinafruits.com",[76,77]],["peregrinoslh.com",[76,77]],["permis-lausanne.ch",[76,77]],["pernillaandersson.se",[76,77]],["piazzadelgusto.it",[76,77]],["pipi-antik.dk",[76,77]],["plasticosgeca.com",[76,77]],["plastimyr.com",[76,77]],["portal.unimes.br",[76,77]],["pro-beruf.de",[76,77]],["prophecyinternational.com",[76,77]],["psicoterapeuta.org",[76,77]],["puertasprieto.com",[76,77]],["puntosdefantasia.es",[76,77]],["pzmk.org.pl",[76,77]],["rastromaquinas.com",[76,77]],["rectoraldecastillon.com",[76,77]],["reinomineral.com",[76,77]],["reklamefreunde.de",[76,77]],["restauraciontalavera.es",[76,77]],["restauranthispania.com",[76,77]],["ristoranteeziogritti.it",[76,77]],["rubinmedical.dk",[76,77]],["rubinmedical.no",[76,77]],["rubinmedical.se",[76,77]],["sak.se",[76,77]],["sammetais.com.br",[76,77]],["sebastiancurylo.pl",[76,77]],["serigrafiaiorgi.com",[76,77]],["seyart.com",[76,77]],["sgaim.com",[76,77]],["sicamemt.org",[76,77]],["siguealconejoblanco.es",[76,77]],["sinfimasa.com",[76,77]],["skp.se",[76,77]],["skrobczynski.pl",[76,77]],["slush.de",[76,77]],["solebike.it",[76,77]],["solu-watt.fr",[76,77]],["soluzionainmobiliaria.es",[76,77]],["somoparque.com",[76,77]],["sorgingaztemoda.com",[76,77]],["sroportal.sk",[76,77]],["ssmf.se",[76,77]],["stobrasil.com.br",[76,77]],["stoparmut2015.ch",[76,77]],["studiodimuro.com",[76,77]],["subkultur-hannover.de",[76,77]],["sustanciagris.com",[76,77]],["szkt.sk",[76,77]],["tagibergslagen.se",[76,77]],["tallergastronomico.es",[76,77]],["tarna.fhsk.se",[76,77]],["tassenyalitzacio.com",[76,77]],["tctech.se",[76,77]],["teknoduegroup.it",[76,77]],["teloliquido.com",[76,77]],["temasa.es",[76,77]],["textilprint.sk",[76,77]],["thehouseofautomata.com",[76,77]],["tmgernika.com",[76,77]],["toastetmoi.fr",[76,77]],["tollare.org",[76,77]],["trattoriabolognesi.it",[76,77]],["triperavigatana.com",[76,77]],["tuckerfranklininsgrp.com",[76,77]],["tuftuf.net",[76,77]],["turuletras.com",[76,77]],["umfmb.fr",[76,77]],["upapsa.com",[76,77]],["valenciatoday.es",[76,77]],["vanghel-und-morawski.de",[76,77]],["vickycan.com",[76,77]],["ville-de-salles.com",[76,77]],["webbigt.se",[76,77]],["westlede.be",[76,77]],["wiemker.org",[76,77]],["woolink.co",[76,77]],["wp.fratgsa.org",[76,77]],["xatobaxestion.com",[76,77]],["xfactor-gmbh.de",[76,77]],["yougoenglish.com",[76,77]],["zigmoon.com",[76,77]],["canyon.com",[78,79]],["drimsim.com",80],["eteam-winkler.de",81],["kdn-elektro.de",81],["elektro-kotz.de",81],["elektro-service-rauh.de",81],["elektroanlagenbuettner.de",81],["be-connect.online",81],["bayergruppe.com",81],["bayer-wkt.de",81],["bayer-wind.de",81],["bayer-wd.de",81],["elektro-joa.de",81],["htechnik.de",81],["ehk-service.de",81],["bittner-tv.de",81],["elektro-suelzner.de",81],["elektro-leps.de",81],["elektromax-hausgeraete.de",81],["elektrotechnik-schedel.de",81],["elkugmbh.de",81],["ln-elektro-gmbh.de",81],["weiss-blau-gmbh.de",81],["sunbeam-energy.de",81],["prokauf.com",81],["lichtstudio-kerl.de",81],["liebing-beese.de",81],["hoeschel-baumann.de",81],["hausgeraete-kraemer.de",81],["gehlhaar-elektrotechnik.de",81],["ehs-elektrotechnik.de",81],["elektrojarschke.de",81],["elektrotechnik-fleischmann.de",81],["elektroseemueller.de",81],["schoerling-blitz.de",81],["ast-apolda.com",81],["elektro-klippel.de",81],["arntz-haustechnik.de",81],["elektro-bindel.de",81],["elektrotechnik-weiss.com",81],["brandschutz-hamburg.de",81],["wagnerelektrotechnik.de",81],["el-kramer.de",81],["mks-hof.de",81],["wernz-elektro.de",81],["e3-energy.de",81],["sg-solar.de",81],["elektrokrebs.de",81],["elektro-roehrl.de",81],["elektro-kreher.de",81],["giegling-vonsaal.de",81],["elektro-lehmann.com",81],["ems-wurzen.de",81],["scholpp.es",82],["scholpp.pl",82],["scholpp.it",82],["ptc.eu",82],["scholpp.com",82],["abo24.de",82],["overdrive.com",82],["wetu.com",82],["superwatchman.com",83],["wedding.pl",84],["bitburger-braugruppe.de",85],["proteincompany.fi",86],["proteinbolaget.se",86],["snoopmedia.com",87],["myguide.de",87],["study-in-germany.de",87],["daad.de",87],["biegnaszczyt.pl",88],["futterhaus.de",89],["scottsofstow.co.uk",[90,91]],["zawszepomorze.pl",92],["wasserkunst-hamburg.de",93],["lta.org.uk",94],["brico-travo.com",95],["conversion-rate-experts.com",96],["theateramrand.de",97],["jugend-praesentiert.de",97],["xhamster.com",98],["xhamster2.com",98],["xhamster3.com",98],["xhamster18.desi",98],["athletic-club.eus",99],["close2.de",[100,101,102]],["medicalti.it",[100,101,102]],["grottisrl.it",[100,101,102]],["vilmie-pet.com",[100,101,102]],["private-krankenversicherungen-vergleich.de",[100,101,102]],["ipanema-shop.com",[100,101,102]],["buero-rothenfusser.com",[100,101,102]],["versi24.de",[100,101,102]],["rs-vertriebsservice.com",[100,101,102]],["matina-gmbh.de",[100,101,102]],["erding-solar.de",[100,101,102]],["greenwoods-small-pet.com",[100,101,102]],["kfz-schwabing.de",[100,101,102]],["comune.randazzo.ct.it",[100,101,102]],["comune.catania.it",[100,101,102]],["ordineavvocaticatania.it",[100,101,102]],["agentur-alberts.de",[100,101,102]],["waveaudio.de",[100,101,102]],["alexide.com",[100,101,102]],["piske-innovationen.de",[100,101,102]],["sbit.ag",[100,101,102]],["smilla-katzenfutter.de",[100,101,102]],["evium.de",103],["epayments.com",104],["riceundspice.de",105],["happysocks.com",[106,107]],["win2day.at",108],["petcity.lt",109],["porp.pl",110],["computerbase.de",111],["gesundheitsamt-2025.de",112],["coastfashion.com",113],["oasisfashion.com",113],["warehousefashion.com",113],["misspap.com",113],["karenmillen.com",113],["boohooman.com",113],["nebo.app",114],["groupeonepoint.com",115],["edpsciences.org",116],["bemmaisseguro.com",117],["wetransfer.com",118],["scheidegger.nl",119],["phoenix.de",120],["strato.se",121],["strato.de",121],["mishcon.com",122],["bbva.es",124],["bbvauk.com",124],["bbva.be",124],["bbva.fr",124],["bbva.it",124],["bbva.pt",124],["suntech.cz",125],["digikey.co.za",126],["digikey.cn",126],["digikey.ee",126],["digikey.at",126],["digikey.be",126],["digikey.bg",126],["digikey.cz",126],["digikey.dk",126],["digikey.fi",126],["digikey.fr",126],["digikey.de",126],["digikey.gr",126],["digikey.hu",126],["digikey.ie",126],["digikey.it",126],["digikey.lv",126],["digikey.lt",126],["digikey.lu",126],["digikey.nl",126],["digikey.no",126],["digikey.pl",126],["digikey.pt",126],["digikey.ro",126],["digikey.sk",126],["digikey.si",126],["digikey.es",126],["digikey.se",126],["digikey.ch",126],["digikey.co.uk",126],["digikey.co.il",126],["digikey.com.mx",126],["digikey.ca",126],["digikey.com.br",126],["digikey.co.nz",126],["digikey.com.au",126],["digikey.co.th",126],["digikey.tw",126],["digikey.kr",126],["digikey.sg",126],["digikey.ph",126],["digikey.my",126],["digikey.jp",126],["digikey.in",126],["digikey.hk",126],["digikey.com",126],["eurosupps.nl",127],["pathe.nl",128],["makelaarsland.nl",129],["nordania.dk",130],["365direkte.no",130],["danskebank.lv",130],["danskebank.lt",130],["danskebank.no",130],["danskebank.fi",130],["danskebank.dk",130],["danskebank.com",130],["danskebank.se",130],["danskebank.co.uk",130],["danskeci.com",130],["danicapension.dk",130],["gewerbegebiete.de",131],["visti.it",132],["balay.es",133],["constructa.com",133],["gaggenau.com",133],["loudersound.com",134],["impulse.de",134],["pcgamer.com",134],["infoworld.com",134],["kiplinger.com",134],["omni.se",134],["it-times.de",134],["bitcoinmagazine.com",134],["deliciousmagazine.co.uk",134],["upday.com",134],["theguardian.com",134],["deutschlandcard.de",134],["szbz.de",134],["free-fonts.com",134],["lieferzeiten.info",134],["vice.com",134],["newsnow.co.uk",134],["out.com",134],["streampicker.de",134],["radiotimes.com",134],["nowtv.com",134],["kochbar.de",134],["toggo.de",134],["am-online.com",134],["n-tv.de",134],["newsandstar.co.uk",134],["tag24.de",134],["weltkunst.de",134],["noveauta.sk",134],["pnn.de",134],["economist.com",134],["crash.net",134],["norwaytoday.info",134],["insider.com",134],["preis.de",134],["ibroxnoise.co.uk",134],["celtsarehere.com",134],["nufcblog.co.uk",134],["sport1.de",134],["techconnect.com",134],["followfollow.com",134],["thespun.com",134],["mazdas247.com",134],["fastcar.co.uk",134],["vitalfootball.co.uk",134],["audi-sport.net",134],["bumble.com",134],["arcamax.com",134],["dilbert.com",134],["sportbible.com",134],["givemesport.com",134],["dartsnews.com",134],["gpfans.com",134],["justjared.com",134],["justjaredjr.com",134],["finanzen.at",134],["idealo.at",134],["ladenzeile.at",134],["berliner-zeitung.de",134],["urbia.de",134],["essen-und-trinken.de",134],["wetter.de",134],["rtl-living.de",134],["vox.de",134],["ladenzeile.de",134],["advocate.com",134],["idealo.de",134],["wigantoday.net",134],["economistgroup.com",134],["transfermarkt.nl",134],["transfermarkt.es",134],["transfermarkt.pl",134],["transfermarkt.pt",134],["transfermarkt.at",134],["transfermarkt.it",134],["transfermarkt.fr",134],["transfermarkt.de",134],["transfermarkt.be",134],["transfermarkt.co.uk",134],["transfermarkt.us",134],["footballfancast.com",134],["cio.com",134],["jezebel.com",134],["splinternews.com",134],["denofgeek.com",134],["kinja.com",134],["theinventory.com",134],["rollingstone.de",134],["sueddeutsche.de",134],["csoonline.com",134],["tvmovie.de",134],["testberichte.de",134],["pcgameshardware.de",134],["4players.de",134],["guj.de",134],["bild.de",134],["wieistmeineip.de",134],["testbild.de",134],["stylebook.de",134],["skygroup.sky",134],["speisekarte.de",134],["haeuser.de",134],["cmo.com.au",134],["pcworld.co.nz",134],["idealo.it",134],["transfermarkt.jp",134],["transfermarkt.co.id",134],["autoexpress.co.uk",134],["transfermarkt.com",134],["esportsclub.nl",134],["webwinkel.tubantia.nl",134],["shopalike.nl",134],["autoweek.nl",134],["pcworld.es",134],["macworld.es",134],["idealo.es",134],["businessinsider.es",134],["motor.es",134],["autobild.es",134],["driving.co.uk",134],["stern.de",134],["pcgames.de",134],["sport.de",134],["idealo.fr",134],["barrons.com",134],["tori.fi",134],["snow-forecast.com",134],["tidende.dk",134],["kraloyun.com",134],["arnnet.com.au",134],["bunte.de",134],["handelsblatt.com",134],["techbook.de",134],["metal-hammer.de",134],["macworld.co.uk",134],["maxisciences.com",134],["ohmymag.com",134],["voici.fr",134],["geo.de",134],["businessinsider.de",134],["heise.de",134],["meinestadt.de",134],["politico.eu",134],["spieletipps.de",134],["finanznachrichten.de",134],["vtwonen.nl",134],["stol.it",134],["waitrose.com",135],["storyhouseegmont.dk",136],["storyhouseegmont.no",136],["storyhouseegmont.se",136],["egmont.com",136],["nordiskfilm.com",136],["faq.whatsapp.com",137],["blog.whatsapp.com",137],["www.whatsapp.com",137]]);

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
