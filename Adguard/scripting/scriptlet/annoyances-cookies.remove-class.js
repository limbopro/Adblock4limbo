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

const argsList = [["cookie-consent-active","body","stay"],["cookie-overlay-active","body","stay"],["modal-open","body","stay"],["hasPopup","body","stay"],["scommerce-gdpr-disabled","div","stay"],["no-scroll","html","stay"],["compensate-for-scrollbar","body","stay"],["cookie-consent__wrapper","div","stay"],["cookies-request","body","stay"],["cx-modal-open","html","stay"],["cx-no-scroll","html","stay"],["e-cookie-bar-open","body","stay"],["cookies-not-set","body","stay"],["bottom-0","div","stay"],["no-consent","html","stay"],["is-blurred-cookiebox","html","stay"],["ccpaCookieBanner-acceptedAll","body","stay"],["cookies-show",".cookies-show","stay"],["disable-background","body","stay"],["cookie--not-set","body","stay"],["_cookiebanner","body","stay"],["async-hide","html","stay"],["ntd-gdpr-no-scroll","body","stay"],["modal-background","div","stay"],["pef-no-cookie","body","stay"],["cookie-not-accepted","body","stay"],["c-body--locked-always","body","stay"],["global-cookie","div","stay"],["disable-scroll","","stay"],["cookie--not-set","","stay"],["bg-gray","div","stay"],["cookie-active","body","stay"],["is-modal-cookies-visible","body","stay"],["layerActive","","stay"],["cookiebar-open","body","stay"],["blur","body","stay"],["cookie","","stay"],["cookieconsent-active","body","stay"],["cookieMsg","","stay"],["cookie_consent__alert","","stay"],["gdpr-cookie-notice-center-loaded","","stay"],["has-open-cookie","","stay"],["om_cookie_active","","stay"],["tvp-cookie-scroll-lock","","stay"],["cookie-overlay","","stay"],["disable","","stay"],["prevent-scroll","","stay"],["fog","","stay"],["cookie-hint","","stay"],["dp--cookie-consent","body","stay"],["body-overlay-scrollable","","stay"],["modal-open","","stay"],["no-scroll","body","stay"],["show-cookie-consent","","stay"],["is-active-cookiebar","","stay"],["-locked","","stay"],["has-banner","body.has-banner","stay"],["pointerevents","","stay"],["cookie-accept-required","","stay"],["cookie-open","","stay"],["cookiePopupVisible","","stay"],["unreadable-display","","stay"],["mandatory_cookie_modal","","stay"],["wwzoverlay--open","","stay"],["cookie_popup_exists","div.page-wrapper","stay"],["gdpr-infobar-visible","","stay"],["cookie-enabled","","stay"],["cookie-overlay--open","","stay"],["cookie-banner-open","","stay"],["overlay-content","body","stay"],["is-active-cookiebar","body","stay"],["didomi-popup-open","body"],["idxrcookies-block-user-nav","body","stay"],["ccpa-banner","","stay"],["modal-cacsp-open","","stay"],["modal-cacsp-box","","stay"],["js-modalUnclosable","","stay"],["js-cookiesModal|is-open",".js-cookiesModal,.is-open"],["remodal-bg","","stay"],["cookie-warning-open","","stay"],["with-featherlight","","stay"],["cookies-shown","body","stay"],["filter-blur","","stay"],["no-cookie","","stay"],["snoop-modal-open","body","stay"],["blurred","","stay"],["is-blurred-cookiebox","","stay"],["consent-manager--popup","body","stay"],["consent-manager-open","body","stay"],["zp-gtm-scripts--blur","","stay"],["dots","","stay"],["cookies-modal-open","","stay"],["overlay","body","stay"],["modal-has-active","body","stay"],["messages-active","","stay"],["xh-thumb-disabled","","stay"],["body--cookies-panel-opened","","stay"],["chefcookie--blur","html","stay"],["chefcookie--fade","html","stay"],["chefcookie--noscroll","html","stay"],["cdk-overlay-container","","stay"],["b-dialog","","stay"],["disabled","body","stay"],["lock-scroll","","stay"],["disabled","header","stay"],["cookie-not-accepted-overlay","","stay"],["overlayopen","","stay"],["blurred-page","","stay"],["consent-dialog-open","body"],["cookie-consent--present","","stay"],["header-gdrp-cookies-visible","","stay"],["fixed","","stay"],["noScroll","","stay"],["cookie_notification","","stay"],["blocked-body","","stay"],["transfer__cookie-wall-active",".transfer__cookie-wall-active","stay"],["has-no-scroll","","stay"],["blured","","stay"],["noscroll","body","stay"],["has-overlay","","stay"],["cookie-consent-is-active","body","stay"],["cookiesgdpr__scroll","","stay"],["modal-show","","stay"],["gdpr","","stay"],["cookieopened","body","stay"],["cookiewall-active","body","stay"],["is-cookie-notice","body","stay"],["cookie-consent-banner-open","html","stay"],["modal-overlay","","stay"],["blur","","stay"],["cookielaw-blur-background","","stay"],["sp-message-open","html","stay"],["modalOpen___gZykv","body"],["cookie-bar","","stay"],["hasCookieBanner","body","stay"]];

const hostnamesMap = new Map([["winparts.be",0],["winparts.eu",0],["winparts.fr",0],["winparts.ie",0],["winparts.nl",0],["winparts.se",0],["sportano.sk",1],["sportano.de",1],["sportano.bg",1],["sportano.hu",1],["sportano.ro",1],["sportano.cz",1],["buildex.cz",2],["gruenderservice.at",3],["pdc-big.nl",4],["pdc-big.it",4],["pdc-big.ie",4],["pdc-big.fr",4],["pdc-big.es",4],["pdc-big.be",4],["pdc-big.at",4],["pdc-big.co.uk",4],["pdc-big.de",4],["pdc-big.com",4],["elio-systems.io",[5,11]],["sanha.com",[5,11]],["recettesetcabas.com",6],["opera.com",7],["groningenairport.nl",8],["crocs.co.uk",[9,10]],["crocs.eu",[9,10]],["crocs.nl",[9,10]],["crocs.fi",[9,10]],["crocs.fr",[9,10]],["crocs.de",[9,10]],["rappjmed.ch",12],["theverge.com",13],["stilord.fr",14],["stilord.it",14],["stilord.de",14],["stilord.es",14],["dasfutterhaus.at",15],["developer.paypal.com",16],["cpc2r.ch",17],["zen.com",18],["tecsafe.de",19],["stromnetz.berlin",20],["websummit.com",21],["thehustle.co",21],["epochtimes.fr",22],["ajbell.co.uk",23],["economiapertutti.bancaditalia.it",24],["quantamagazine.org",25],["tradersunion.com",25],["phsgreenleaf.co.uk",26],["phswashrooms.ie",26],["mccolls.co.uk",[27,28]],["foxracingshox.de",29],["crt.hr",30],["yourstorebox.com",31],["housell.com",32],["lactostop.de",33],["dermapharm.de",33],["mibe.de",33],["spilger.de",34],["dbs.si",35],["abcya.com",36],["jongcdenv.be",37],["umicore.jp",37],["umicore.cn",37],["umicore.pl",37],["umicore.kr",37],["umicore.co.th",37],["umicore.fr",37],["umicore.de",37],["donneurdecellulessouches.be",37],["stammzellenspender.be",37],["stemcelldonor.be",37],["umicore.com",37],["umicore.com.br",37],["koenvandenheuvel.be",37],["stamceldonor.be",37],["nahima.be",37],["catused.com",38],["eujuicers.cz",39],["graziellawicki.com",40],["funnelcockpit.com",40],["dnk.nl",41],["eam.de",42],["eam-netz.de",42],["tvp.pl",43],["cellardoor.co",44],["verpackungsstadl.ch",45],["imkershoperzgebirge.de",45],["modellbahndealer.de",45],["tillit-bikes.shop",45],["bike-onlineshop.de",45],["futspo.de",45],["compravo.de",45],["perpedale.de",45],["modellbau-jung.de",45],["verpackungsstadl.at",45],["modellbau-vordermaier.de",45],["wroc.pl",46],["basenio.de",47],["fm-systeme.de",48],["swffm.de",49],["studentenwerkfrankfurt.de",49],["dmsg.de",49],["bgk.pl",49],["pflegezeit-berlin.de",49],["gpd-nordost-onlineberatung.de",49],["proabschluss-beratung.de",49],["hilfe-telefon-missbrauch.online",49],["dww-suchtberatung.de",49],["cyberforum.de",49],["gutscheine.eurothermen.at",49],["wolff-mueller.de",49],["ras.bz.it",49],["wifiwien.at",[50,51]],["wifikaernten.at",[50,51]],["wifi.at",[50,51]],["pdf-archive.com",51],["swrng.de",51],["5asec.pt",52],["tui.dk",52],["tui.fi",52],["tui.no",52],["tui.se",52],["leslipfrancais.fr",52],["bremischevb.de",[52,120]],["meinebank.de",[52,120]],["vb-rb.de",[52,120]],["gladbacher-bank.de",[52,120]],["nordthueringer-volksbank.de",[52,120]],["bodenseebank.de",[52,120]],["rb-oberaudorf.de",[52,120]],["volksbank-trossingen.de",[52,120]],["owl-immobilien.de",[52,120]],["volksbank-backnang.de",[52,120]],["volksbank-international.de",[52,120]],["raiba-westhausen.de",[52,120]],["vr-nopf.cz",[52,120]],["vrbankimmobilien.de",[52,120]],["cvw-privatbank-ag.de",[52,120]],["rb-denzlingen-sexau.de",[52,120]],["rv-banken.de",[52,120]],["volksbank-remseck.de",[52,120]],["raiba-gr.de",[52,120]],["vrb-spangenberg.de",[52,120]],["rb-berghuelen.de",[52,120]],["vb-lauterecken.de",[52,120]],["rb-sondelfingen.de",[52,120]],["voba-deisslingen.de",[52,120]],["saechsischer-gewinnsparverein.de",[52,120]],["rb-hardt-bruhrain.de",[52,120]],["volksbank-daaden.de",[52,120]],["dervolksbanker.de",[52,120]],["volksbank-kirnau.de",[52,120]],["skbwitten.de",[52,120]],["raiba-ndwa.de",[52,120]],["volksbank-mittleres-erzgebirge.de",[52,120]],["rb-eching.de",[52,120]],["volksbank-aktiv.de",[52,120]],["vbsuedemsland.de",[52,120]],["voba-moeckmuehl.de",[52,120]],["volksbank-freiburg.de",[52,120]],["vbleos.de",[52,120]],["meine-rvb.de",[52,120]],["aachener-bank.de",[52,120]],["muenchner-bank.de",[52,120]],["volksbank-dh.de",[52,120]],["volksbankeg.de",[52,120]],["sparda-bank-hamburg.de",[52,120]],["sparda-sw.de",[52,120]],["volksbank-thueringen-mitte.de",[52,120]],["vrbankeg.de",[52,120]],["bernhauser-bank.de",[52,120]],["vvrbank-krp.de",[52,120]],["vvr-bank.de",[52,120]],["vb-mittelhessen.de",[52,120]],["vr-bayernmitte.de",[52,120]],["pollfish.com",53],["werkenbijtrekpleister.nl",54],["werkenbijkruidvat.be",54],["rassenlijst.info",54],["werkenbijiciparisxl.nl",54],["tesa-labtec.com",55],["tesatape.ru",55],["tesa.com",55],["flightradar24.com",56],["apk-vk.at",57],["vietnamairlines.com",58],["incotec.com",59],["croda.com",59],["exaktafoto.se",60],["campingdusoleil.com",61],["hotel-la-chaumiere.com",61],["les-anges-gardiens.fr",61],["croco-kid.com",61],["cambridge-centre.fr",61],["equisud.com",61],["allokebab-pau.fr",61],["etre-visible.local.fr",61],["mas-montebello66.com",61],["camping-residentiel-les-marronniers-jura.fr",61],["dj4events.fr",61],["saintjoursexpertmaritime.com",61],["az-renovation.fr",61],["presquilemultiservices.com",61],["hotel-aigoual.com",61],["hotel-restaurant-pau.com",61],["desrayaud-paysagistes.com",61],["hotelsaintcharles.fr",61],["agvillagecamarguais.com",61],["joyella.com",61],["gabriel-godard.com",61],["artech-sellerie.com",61],["motoclubernee.com",61],["ledauphinhotel.com",61],["cuisin-studio.com",61],["biomeo-environnement.com",61],["leman-instruments.com",61],["esthetique-meyerbeer.com",61],["institut-bio-naturel-nice.fr",61],["nature-et-bois.fr",61],["transmissions-bordeaux.com",61],["kinechartreuse.com",61],["corsegourmande.com",61],["cotedecor.com",61],["restaurant-la-badiane.fr",61],["systelia.fr",61],["lesjardinsinterieurs.com",61],["helenevue.com",61],["saubusse-thermes.com",61],["dehn.es",62],["dehn.fr",62],["dehn.it",62],["dehn.hu",62],["desitek.dk",62],["dehn.at",62],["dehn.de",62],["wwz.ch",63],["taloon.com",64],["inyova.at",65],["inyova.ch",65],["inyova.de",65],["ccalbacenter.com",65],["wamu.org",65],["momentive.com",66],["kennedyslaw.com",67],["elekta.com",68],["stratasysdirect.com",69],["stratasys.com",69],["werkenbijkruidvat.nl",70],["ghacks.net",71],["cutoff.es",72],["mbanc.com",73],["dentalgalindo.com",[74,75]],["brutalvisual.com",[74,75]],["archeologia.com.pl",[74,75]],["letrayframe.com",[74,75]],["osteofisintegral.es",[74,75]],["uco.cat",[74,75]],["buecheler-kollegen.de",[74,75]],["seminariodeosma-soria.org",[74,75]],["kamensenica.sk",[74,75]],["movimentoofficinedelsud.it",[74,75]],["trident.se",[74,75]],["semanasantademalagaayeryhoy.com",[74,75]],["diazfloristasestrella.com",[74,75]],["cosechavida.com",[74,75]],["centre-hypnose-moselle.com",[74,75]],["broncoillustration.com",[74,75]],["sumoingenio.com",[74,75]],["aligepro.es",[74,75]],["muevo.es",[74,75]],["azulejosacedo.com",[74,75]],["sana.cz",[74,75]],["aliapinto.com",[74,75]],["tsconline.es",[74,75]],["polifast.it",[74,75]],["napos.cz",[74,75]],["gutshaus-neuendorf-usedom.de",[74,75]],["kunterbunte-kinder.de",[74,75]],["desatando.org",[74,75]],["ledocom.cz",[74,75]],["aliciasuarez.net",[74,75]],["diabramar.com",[74,75]],["lamagnalonga.org",[74,75]],["benejamrefrigeracion.com",[74,75]],["micropigmentacioncapilarbcn.com",[74,75]],["revistaauge.com.ar",[74,75]],["arcusnet.se",[74,75]],["videogenic.es",[74,75]],["grundschule-remagen.de",[74,75]],["aceitessatunion.com",[74,75]],["servigraphic.com.ar",[74,75]],["textsteine.de",[74,75]],["campergarage.es",[74,75]],["administradorfincasblog.com",[74,75]],["balgal.es",[74,75]],["grafika-dtp-produkcia.sk",[74,75]],["unmardeconstelaciones.com",[74,75]],["salobella.com",[74,75]],["careon.se",[74,75]],["gymnosport.com",[74,75]],["easyhomes.com.es",[74,75]],["casavaledalama.pt",[74,75]],["dosc.es",[74,75]],["fcfoz.pt",[74,75]],["berevolk.com",[74,75]],["hvpropertyclearance.co.uk",[74,75]],["calamo.se",[74,75]],["elserratplanoles.com",[74,75]],["bubblessea.es",[74,75]],["disperator.se",[74,75]],["ecoparquets.com",[74,75]],["zlotaraczkalublin.pl",[74,75]],["congresoscostadelsol.com",[74,75]],["pneumaticiroma.it",[74,75]],["asprona.es",[74,75]],["virgendefatima.es",[74,75]],["patronatpremia.cat",[74,75]],["2points13.fr",[74,75]],["3d3.es",[74,75]],["abantos.es",[74,75]],["abastanimacio.org",[74,75]],["academiafrancesadebelleza.co",[74,75]],["acaluca.org",[74,75]],["acce.es",[74,75]],["ad-particles.com",[74,75]],["adea.sk",[74,75]],["afplr.fr",[74,75]],["agiletalon.fr",[74,75]],["agiratou.com",[74,75]],["aidaromero.com",[74,75]],["alkoholochnarkotika.se",[74,75]],["alligatorbioscience.se",[74,75]],["anea.es",[74,75]],["animala.es",[74,75]],["antequerabelleza.com",[74,75]],["apimadrid.net",[74,75]],["aquatrend.sk",[74,75]],["arabesque-formation.org",[74,75]],["arrivamallorca.es",[74,75]],["arteydeco.es",[74,75]],["asapservicios.net",[74,75]],["aspock.com",[74,75]],["atout-voyages.com",[74,75]],["autocareslazara.es",[74,75]],["autocaresmariano.com",[74,75]],["autoform.pl",[74,75]],["ayudatranspersonal.com",[74,75]],["bacabeton.cz",[74,75]],["begalvi.com",[74,75]],["bent-com.com",[74,75]],["berliner-haeuser.de",[74,75]],["bespokespain.com",[74,75]],["bevent-rasch.se",[74,75]],["bio-cord.es",[74,75]],["biotropica.fr",[74,75]],["bornes-eurorelais.fr",[74,75]],["braeu-stueble.de",[74,75]],["brendanoharamp.scot",[74,75]],["briau.com",[74,75]],["caleulalia.com",[74,75]],["cande-sur-beuvron.com",[74,75]],["carlhag.se",[74,75]],["carrier.se",[74,75]],["casadelaveiga.com",[74,75]],["caytas.com.tr",[74,75]],["cecjecuador.org.ec",[74,75]],["cegef.com",[74,75]],["centrediagonal.com",[74,75]],["centropolisportivomassari.it",[74,75]],["cerai.org",[74,75]],["cervosgrup.com",[74,75]],["chimeneasalicante.com",[74,75]],["circodelshow.com",[74,75]],["cliatec.com",[74,75]],["clinicabadal.es",[74,75]],["cometh-consulting.com",[74,75]],["copysud.fr",[74,75]],["cortilar.com",[74,75]],["crystal-finance.com",[74,75]],["ctangana.com",[74,75]],["cugatresidencial.com",[74,75]],["dake.es",[74,75]],["datatal.se",[74,75]],["degom.com",[74,75]],["delfis.es",[74,75]],["delogica.com",[74,75]],["dentalcompany.es",[74,75]],["descarpack.com.br",[74,75]],["desfiladeroediciones.com",[74,75]],["desomer.be",[74,75]],["diarioandalucia.es",[74,75]],["dibujos-animados.net",[74,75]],["direkt-immobilie.de",[74,75]],["dovozautznemecka.cz",[74,75]],["drpuigdollers.com",[74,75]],["dunamys.inf.br",[74,75]],["easyimplantology.com",[74,75]],["eb2b.com.pl",[74,75]],["echo-mieszkania.pl",[74,75]],["eclinic.com.sg",[74,75]],["edgeict.com",[74,75]],["eiglaw.com",[74,75]],["elandexpediciones.es",[74,75]],["emalec.com",[74,75]],["enlighten.net",[74,75]],["equifab.es",[74,75]],["escuelanauticamarenostrum.com",[74,75]],["esgrima.cat",[74,75]],["espaisperconviure.es",[74,75]],["etbygg.com",[74,75]],["eurepieces.fr",[74,75]],["euroenvio.com",[74,75]],["eurotex.es",[74,75]],["expertetfinance.fr",[74,75]],["farmarsketrhyfuturum.cz",[74,75]],["fastvisa.fr",[74,75]],["fauxdiplomes.org",[74,75]],["fisiolistic.com",[74,75]],["fondazionealbertosordi.it",[74,75]],["foyersekcjapolska.eu",[74,75]],["fundacjaeds.pl",[74,75]],["galeriaxanadu.pl",[74,75]],["garcia-ibanez.com",[74,75]],["gestenaval.com",[74,75]],["glaskogen.se",[74,75]],["globalteam.es",[74,75]],["goia.org.pl",[74,75]],["granibier.com",[74,75]],["grundia.se",[74,75]],["grupoisn.com",[74,75]],["gruporhzaragoza.com",[74,75]],["hagagruppen.se",[74,75]],["halima-magazin.com",[74,75]],["handelskammaren.com",[74,75]],["helitecnics.com",[74,75]],["helux.se",[74,75]],["hermanosalcaraz.com",[74,75]],["hjarnkoll.se",[74,75]],["hmfoundation.com",[74,75]],["hormimpres.com",[74,75]],["hoteldeprony.fr",[74,75]],["hotelroyalcatania.it",[74,75]],["houjethai.nl",[74,75]],["hummer.cz",[74,75]],["icld.se",[74,75]],["ict-project.it",[74,75]],["imagelova.id",[74,75]],["imprentalaspalmas.com",[74,75]],["informamiele.it",[74,75]],["inission.com",[74,75]],["inmobiliariavolga.com",[74,75]],["international-terra-institute.com",[74,75]],["inwaspain.com",[74,75]],["izkigolf.eus",[74,75]],["jdmusic.se",[74,75]],["juveycamps.com",[74,75]],["karel1.nl",[74,75]],["kaunokapiniuprieziura.lt",[74,75]],["kcmkompresor.com",[74,75]],["kewaccountants.co.uk",[74,75]],["konkretplus.pl",[74,75]],["krajci.cz",[74,75]],["krisvagenut.se",[74,75]],["kyoceracapetown.co.za",[74,75]],["labaguette.pl",[74,75]],["labintegrados.com",[74,75]],["ladderupinc.com",[74,75]],["landskronafoto.org",[74,75]],["langarri.es",[74,75]],["lawa.es",[74,75]],["laxo.se",[74,75]],["layher.se",[74,75]],["lifetraveler.net",[74,75]],["lindrooshalsa.se",[74,75]],["lobolab.es",[74,75]],["maisqueromanicorutas.com",[74,75]],["mallandonoandroid.com",[74,75]],["masconcas.com",[74,75]],["mediabest.cz",[74,75]],["megustaelvino.es",[74,75]],["mensa.se",[74,75]],["mestiteslilis.com",[74,75]],["minutoprint.com",[74,75]],["mirano.cz",[74,75]],["mogador.cz",[74,75]],["morphestudio.es",[74,75]],["motoaxial.com",[74,75]],["multiversidad.es",[74,75]],["mundollaves.com",[74,75]],["musicotherapie-federationfrancaise.com",[74,75]],["nauticaravaning.com",[74,75]],["nestville.sk",[74,75]],["nestvillepark.sk",[74,75]],["netromsoftware.ro",[74,75]],["nojesfabriken.se",[74,75]],["oddoneout.se",[74,75]],["opako.pl",[74,75]],["oserlafrique.com",[74,75]],["paintballalcorcon.com",[74,75]],["pallejabcn.com",[74,75]],["penicilinafruits.com",[74,75]],["peregrinoslh.com",[74,75]],["permis-lausanne.ch",[74,75]],["pernillaandersson.se",[74,75]],["piazzadelgusto.it",[74,75]],["pipi-antik.dk",[74,75]],["plasticosgeca.com",[74,75]],["plastimyr.com",[74,75]],["portal.unimes.br",[74,75]],["pro-beruf.de",[74,75]],["prophecyinternational.com",[74,75]],["psicoterapeuta.org",[74,75]],["puertasprieto.com",[74,75]],["puntosdefantasia.es",[74,75]],["pzmk.org.pl",[74,75]],["rastromaquinas.com",[74,75]],["rectoraldecastillon.com",[74,75]],["reinomineral.com",[74,75]],["reklamefreunde.de",[74,75]],["restauraciontalavera.es",[74,75]],["restauranthispania.com",[74,75]],["ristoranteeziogritti.it",[74,75]],["rubinmedical.dk",[74,75]],["rubinmedical.no",[74,75]],["rubinmedical.se",[74,75]],["sak.se",[74,75]],["sammetais.com.br",[74,75]],["sebastiancurylo.pl",[74,75]],["serigrafiaiorgi.com",[74,75]],["seyart.com",[74,75]],["sgaim.com",[74,75]],["sicamemt.org",[74,75]],["siguealconejoblanco.es",[74,75]],["sinfimasa.com",[74,75]],["skp.se",[74,75]],["skrobczynski.pl",[74,75]],["slush.de",[74,75]],["solebike.it",[74,75]],["solu-watt.fr",[74,75]],["soluzionainmobiliaria.es",[74,75]],["somoparque.com",[74,75]],["sorgingaztemoda.com",[74,75]],["sroportal.sk",[74,75]],["ssmf.se",[74,75]],["stobrasil.com.br",[74,75]],["stoparmut2015.ch",[74,75]],["studiodimuro.com",[74,75]],["subkultur-hannover.de",[74,75]],["sustanciagris.com",[74,75]],["szkt.sk",[74,75]],["tagibergslagen.se",[74,75]],["tallergastronomico.es",[74,75]],["tarna.fhsk.se",[74,75]],["tassenyalitzacio.com",[74,75]],["tctech.se",[74,75]],["teknoduegroup.it",[74,75]],["teloliquido.com",[74,75]],["temasa.es",[74,75]],["textilprint.sk",[74,75]],["thehouseofautomata.com",[74,75]],["tmgernika.com",[74,75]],["toastetmoi.fr",[74,75]],["tollare.org",[74,75]],["trattoriabolognesi.it",[74,75]],["triperavigatana.com",[74,75]],["tuckerfranklininsgrp.com",[74,75]],["tuftuf.net",[74,75]],["turuletras.com",[74,75]],["umfmb.fr",[74,75]],["upapsa.com",[74,75]],["valenciatoday.es",[74,75]],["vanghel-und-morawski.de",[74,75]],["vickycan.com",[74,75]],["ville-de-salles.com",[74,75]],["webbigt.se",[74,75]],["westlede.be",[74,75]],["wiemker.org",[74,75]],["woolink.co",[74,75]],["wp.fratgsa.org",[74,75]],["xatobaxestion.com",[74,75]],["xfactor-gmbh.de",[74,75]],["yougoenglish.com",[74,75]],["zigmoon.com",[74,75]],["canyon.com",[76,77]],["drimsim.com",78],["eteam-winkler.de",79],["kdn-elektro.de",79],["elektro-kotz.de",79],["elektro-service-rauh.de",79],["elektroanlagenbuettner.de",79],["be-connect.online",79],["bayergruppe.com",79],["bayer-wkt.de",79],["bayer-wind.de",79],["bayer-wd.de",79],["elektro-joa.de",79],["htechnik.de",79],["ehk-service.de",79],["bittner-tv.de",79],["elektro-suelzner.de",79],["elektro-leps.de",79],["elektromax-hausgeraete.de",79],["elektrotechnik-schedel.de",79],["elkugmbh.de",79],["ln-elektro-gmbh.de",79],["weiss-blau-gmbh.de",79],["sunbeam-energy.de",79],["prokauf.com",79],["lichtstudio-kerl.de",79],["liebing-beese.de",79],["hoeschel-baumann.de",79],["hausgeraete-kraemer.de",79],["gehlhaar-elektrotechnik.de",79],["ehs-elektrotechnik.de",79],["elektrojarschke.de",79],["elektrotechnik-fleischmann.de",79],["elektroseemueller.de",79],["schoerling-blitz.de",79],["ast-apolda.com",79],["elektro-klippel.de",79],["arntz-haustechnik.de",79],["elektro-bindel.de",79],["elektrotechnik-weiss.com",79],["brandschutz-hamburg.de",79],["wagnerelektrotechnik.de",79],["el-kramer.de",79],["mks-hof.de",79],["wernz-elektro.de",79],["e3-energy.de",79],["sg-solar.de",79],["elektrokrebs.de",79],["elektro-roehrl.de",79],["elektro-kreher.de",79],["giegling-vonsaal.de",79],["elektro-lehmann.com",79],["ems-wurzen.de",79],["scholpp.es",80],["scholpp.pl",80],["scholpp.it",80],["ptc.eu",80],["scholpp.com",80],["abo24.de",80],["overdrive.com",80],["wetu.com",80],["superwatchman.com",81],["wedding.pl",82],["bitburger-braugruppe.de",83],["snoopmedia.com",84],["myguide.de",84],["study-in-germany.de",84],["daad.de",84],["biegnaszczyt.pl",85],["call-a-pizza.de",85],["futterhaus.de",86],["scottsofstow.co.uk",[87,88]],["zawszepomorze.pl",89],["wasserkunst-hamburg.de",90],["lta.org.uk",91],["brico-travo.com",92],["conversion-rate-experts.com",93],["theateramrand.de",94],["jugend-praesentiert.de",94],["xhamster.com",95],["xhamster2.com",95],["xhamster3.com",95],["xhamster18.desi",95],["athletic-club.eus",96],["close2.de",[97,98,99]],["medicalti.it",[97,98,99]],["grottisrl.it",[97,98,99]],["vilmie-pet.com",[97,98,99]],["private-krankenversicherungen-vergleich.de",[97,98,99]],["ipanema-shop.com",[97,98,99]],["buero-rothenfusser.com",[97,98,99]],["versi24.de",[97,98,99]],["rs-vertriebsservice.com",[97,98,99]],["matina-gmbh.de",[97,98,99]],["erding-solar.de",[97,98,99]],["greenwoods-small-pet.com",[97,98,99]],["kfz-schwabing.de",[97,98,99]],["comune.randazzo.ct.it",[97,98,99]],["comune.catania.it",[97,98,99]],["ordineavvocaticatania.it",[97,98,99]],["agentur-alberts.de",[97,98,99]],["waveaudio.de",[97,98,99]],["alexide.com",[97,98,99]],["piske-innovationen.de",[97,98,99]],["sbit.ag",[97,98,99]],["smilla-katzenfutter.de",[97,98,99]],["evium.de",100],["epayments.com",101],["riceundspice.de",102],["happysocks.com",[103,104]],["win2day.at",105],["petcity.lt",106],["porp.pl",107],["computerbase.de",108],["gesundheitsamt-2025.de",109],["coastfashion.com",110],["oasisfashion.com",110],["warehousefashion.com",110],["misspap.com",110],["karenmillen.com",110],["boohooman.com",110],["nebo.app",111],["groupeonepoint.com",112],["edpsciences.org",113],["bemmaisseguro.com",114],["wetransfer.com",115],["scheidegger.nl",116],["phoenix.de",117],["strato.se",118],["strato.de",118],["mishcon.com",119],["bbva.es",121],["bbvauk.com",121],["bbva.be",121],["bbva.fr",121],["bbva.it",121],["bbva.pt",121],["suntech.cz",122],["digikey.co.za",123],["digikey.cn",123],["digikey.ee",123],["digikey.at",123],["digikey.be",123],["digikey.bg",123],["digikey.cz",123],["digikey.dk",123],["digikey.fi",123],["digikey.fr",123],["digikey.de",123],["digikey.gr",123],["digikey.hu",123],["digikey.ie",123],["digikey.it",123],["digikey.lv",123],["digikey.lt",123],["digikey.lu",123],["digikey.nl",123],["digikey.no",123],["digikey.pl",123],["digikey.pt",123],["digikey.ro",123],["digikey.sk",123],["digikey.si",123],["digikey.es",123],["digikey.se",123],["digikey.ch",123],["digikey.co.uk",123],["digikey.co.il",123],["digikey.com.mx",123],["digikey.ca",123],["digikey.com.br",123],["digikey.co.nz",123],["digikey.com.au",123],["digikey.co.th",123],["digikey.tw",123],["digikey.kr",123],["digikey.sg",123],["digikey.ph",123],["digikey.my",123],["digikey.jp",123],["digikey.in",123],["digikey.hk",123],["digikey.com",123],["eurosupps.nl",124],["pathe.nl",125],["makelaarsland.nl",126],["nordania.dk",127],["365direkte.no",127],["danskebank.lv",127],["danskebank.lt",127],["danskebank.no",127],["danskebank.fi",127],["danskebank.dk",127],["danskebank.com",127],["danskebank.se",127],["danskebank.co.uk",127],["danskeci.com",127],["danicapension.dk",127],["gewerbegebiete.de",128],["visti.it",129],["balay.es",130],["constructa.com",130],["gaggenau.com",130],["impulse.de",131],["pcgamer.com",131],["infoworld.com",131],["kiplinger.com",131],["omni.se",131],["it-times.de",131],["bitcoinmagazine.com",131],["deliciousmagazine.co.uk",131],["upday.com",131],["theguardian.com",131],["deutschlandcard.de",131],["szbz.de",131],["free-fonts.com",131],["lieferzeiten.info",131],["vice.com",131],["newsnow.co.uk",131],["out.com",131],["streampicker.de",131],["radiotimes.com",131],["nowtv.com",131],["kochbar.de",131],["toggo.de",131],["am-online.com",131],["n-tv.de",131],["newsandstar.co.uk",131],["tag24.de",131],["weltkunst.de",131],["noveauta.sk",131],["pnn.de",131],["economist.com",131],["crash.net",131],["norwaytoday.info",131],["insider.com",131],["preis.de",131],["ibroxnoise.co.uk",131],["celtsarehere.com",131],["nufcblog.co.uk",131],["sport1.de",131],["techconnect.com",131],["followfollow.com",131],["thespun.com",131],["mazdas247.com",131],["fastcar.co.uk",131],["vitalfootball.co.uk",131],["audi-sport.net",131],["bumble.com",131],["arcamax.com",131],["dilbert.com",131],["sportbible.com",131],["givemesport.com",131],["dartsnews.com",131],["gpfans.com",131],["justjared.com",131],["justjaredjr.com",131],["finanzen.at",131],["idealo.at",131],["ladenzeile.at",131],["berliner-zeitung.de",131],["urbia.de",131],["essen-und-trinken.de",131],["wetter.de",131],["rtl-living.de",131],["vox.de",131],["ladenzeile.de",131],["advocate.com",131],["idealo.de",131],["wigantoday.net",131],["economistgroup.com",131],["transfermarkt.nl",131],["transfermarkt.es",131],["transfermarkt.pl",131],["transfermarkt.pt",131],["transfermarkt.at",131],["transfermarkt.it",131],["transfermarkt.fr",131],["transfermarkt.de",131],["transfermarkt.be",131],["transfermarkt.co.uk",131],["transfermarkt.us",131],["footballfancast.com",131],["cio.com",131],["jezebel.com",131],["splinternews.com",131],["denofgeek.com",131],["kinja.com",131],["theinventory.com",131],["rollingstone.de",131],["sueddeutsche.de",131],["csoonline.com",131],["tvmovie.de",131],["testberichte.de",131],["pcgameshardware.de",131],["4players.de",131],["guj.de",131],["bild.de",131],["wieistmeineip.de",131],["testbild.de",131],["stylebook.de",131],["skygroup.sky",131],["speisekarte.de",131],["haeuser.de",131],["cmo.com.au",131],["pcworld.co.nz",131],["idealo.it",131],["transfermarkt.jp",131],["transfermarkt.co.id",131],["autoexpress.co.uk",131],["transfermarkt.com",131],["esportsclub.nl",131],["webwinkel.tubantia.nl",131],["shopalike.nl",131],["autoweek.nl",131],["pcworld.es",131],["macworld.es",131],["idealo.es",131],["businessinsider.es",131],["motor.es",131],["autobild.es",131],["driving.co.uk",131],["stern.de",131],["pcgames.de",131],["sport.de",131],["idealo.fr",131],["barrons.com",131],["tori.fi",131],["snow-forecast.com",131],["tidende.dk",131],["kraloyun.com",131],["arnnet.com.au",131],["bunte.de",131],["handelsblatt.com",131],["techbook.de",131],["metal-hammer.de",131],["macworld.co.uk",131],["maxisciences.com",131],["ohmymag.com",131],["voici.fr",131],["geo.de",131],["businessinsider.de",131],["heise.de",131],["meinestadt.de",131],["politico.eu",131],["spieletipps.de",131],["finanznachrichten.de",131],["vtwonen.nl",131],["stol.it",131],["waitrose.com",132],["storyhouseegmont.dk",133],["storyhouseegmont.no",133],["storyhouseegmont.se",133],["egmont.com",133],["nordiskfilm.com",133],["faq.whatsapp.com",134],["blog.whatsapp.com",134],["www.whatsapp.com",134]]);

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
        'Error': self.Error,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'jsonParse': self.JSON.parse.bind(self.JSON),
        'jsonStringify': self.JSON.stringify.bind(self.JSON),
        'log': console.log.bind(console),
        uboLog(...args) {
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
            }
            const expect = (options.canNegate === true && pattern.startsWith('!') === false);
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
        patternToRegex(pattern, flags = undefined) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
            }
            try {
                return new RegExp(match[1], match[2] || flags);
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

// Not Firefox
if ( typeof wrappedJSObject !== 'object' ) {
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
