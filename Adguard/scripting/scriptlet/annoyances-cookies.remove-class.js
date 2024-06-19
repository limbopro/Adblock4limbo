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

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["cookie-consent-active","body","stay"],["cookie-overlay-active","body","stay"],["cookiebanner-body","body","stay"],["cookie-notice-active","body","stay"],["cookie-overlay","body","stay"],["ivass-no-cookie","body","stay"],["cookie-popup-visible","body","stay"],["idgcp__layer--active","html","stay"],["cc-scrolling-disabled","body","stay"],["modal-open","body","stay"],["hasPopup","body","stay"],["darker","body","stay"],["scommerce-gdpr-disabled","div","stay"],["no-scroll","html","stay"],["compensate-for-scrollbar","body","stay"],["gdpr-shown","body","stay"],["cookie-consent__wrapper","div","stay"],["cookies-request","body","stay"],["cx-modal-open","html","stay"],["cx-no-scroll","html","stay"],["e-cookie-bar-open","body","stay"],["cookies-not-set","body","stay"],["no-consent","html","stay"],["is-blurred-cookiebox","html","stay"],["ccpaCookieBanner-acceptedAll","body","stay"],["cookies-show",".cookies-show","stay"],["disable-background","body","stay"],["cookie--not-set","body","stay"],["_cookiebanner","body","stay"],["async-hide","html","stay"],["ntd-gdpr-no-scroll","body","stay"],["modal-background","div","stay"],["pef-no-cookie","body","stay"],["cookie-not-accepted","body","stay"],["c-body--locked-always","body","stay"],["global-cookie","div","stay"],["disable-scroll","","stay"],["bg-gray","div","stay"],["cookie-active","body","stay"],["ccm-blocked","html","stay"],["ccm-blocked","body","stay"],["is-modal-cookies-visible","body","stay"],["layerActive","","stay"],["cookiebar-open","body","stay"],["blur","body","stay"],["cookie","","stay"],["cookieconsent-active","body","stay"],["cookieMsg","","stay"],["cookie_consent__alert","","stay"],["gdpr-cookie-notice-center-loaded","","stay"],["has-open-cookie","","stay"],["om_cookie_active","","stay"],["tvp-cookie-scroll-lock","","stay"],["cookie-overlay","","stay"],["disable","div","stay"],["prevent-scroll","","stay"],["fog","","stay"],["cookie-hint","","stay"],["dp--cookie-consent","body","stay"],["body-overlay-scrollable","","stay"],["modal-open","","stay"],["no-scroll","body","stay"],["show-cookie-consent","","stay"],["is-active-cookiebar","","stay"],["-locked","","stay"],["has-banner","body.has-banner","stay"],["pointerevents","","stay"],["cookie-accept-required","","stay"],["cookie-open","","stay"],["cookiePopupVisible","","stay"],["unreadable-display","","stay"],["mandatory_cookie_modal","","stay"],["wwzoverlay--open","","stay"],["gdpr-infobar-visible","","stay"],["cookie-enabled","","stay"],["cookie-overlay--open","","stay"],["cookie-banner-open","","stay"],["cookie-banner-active","body","stay"],["overlay-content","body","stay"],["is-active-cookiebar","body","stay"],["didomi-popup-open","body"],["idxrcookies-block-user-nav","body","stay"],["ccpa-banner","","stay"],["modal-cacsp-open","","stay"],["modal-cacsp-box","","stay"],["js-modalUnclosable","","stay"],["js-cookiesModal|is-open",".js-cookiesModal,.is-open"],["remodal-bg","","stay"],["cookie-warning-open","","stay"],["with-featherlight","","stay"],["cookies-shown","body","stay"],["no-cookie","","stay"],["dimmeractive","body","stay"],["snoop-modal-open","body","stay"],["is-blurred-cookiebox","","stay"],["consent-manager--popup","body","stay"],["consent-manager-open","body","stay"],["zp-gtm-scripts--blur","","stay"],["dots","","stay"],["cookies-modal-open","","stay"],["overlay","body","stay"],["messages-active","","stay"],["xh-thumb-disabled","html","stay"],["cdk-overlay-container","","stay"],["b-dialog","","stay"],["disabled","body","stay"],["lock-scroll","","stay"],["disabled","header","stay"],["cookie-not-accepted-overlay","","stay"],["blurred-page","","stay"],["modalOpen","body","stay"],["cookie-consent--present","","stay"],["header-gdrp-cookies-visible","","stay"],["fixed","","stay"],["noScroll","","stay"],["cookie_notification","","stay"],["blocked-body","body","stay"],["has-no-scroll","","stay"],["_31e","div","stay"],["hasCookieBanner","body","stay"],["blured","","stay"],["noscroll","body","stay"],["has-overlay","","stay"],["cookie-consent-is-active","body","stay"],["cookiesgdpr__scroll","","stay"],["modal-show","","stay"],["gdpr","","stay"],["cookieopened","body","stay"],["cookiewall-active","body","stay"],["is-cookie-notice","body","stay"],["cookie-consent-banner-open","html","stay"],["modal-overlay","","stay"],["blur","","stay"],["cookielaw-blur-background","","stay"],["sp-message-open","html","stay"],["modalOpen___gZykv","body"],["cookie-bar","","stay"]];

const hostnamesMap = new Map([["winparts.be",0],["winparts.eu",0],["winparts.fr",0],["winparts.ie",0],["winparts.nl",0],["winparts.se",0],["sportano.sk",1],["sportano.de",1],["sportano.bg",1],["sportano.hu",1],["sportano.ro",1],["sportano.cz",1],["klinik-am-ring.de",2],["ooekultur.at",3],["igmetall.de",4],["ivass.it",5],["onelottery.co.uk",6],["yourschoollottery.co.uk",6],["rainbowlottery.co.uk",6],["idg.se",7],["gearaid.com",8],["buildex.cz",9],["gruenderservice.at",10],["caiacosmetics.com",11],["pdc-big.nl",12],["pdc-big.it",12],["pdc-big.ie",12],["pdc-big.fr",12],["pdc-big.es",12],["pdc-big.be",12],["pdc-big.at",12],["pdc-big.co.uk",12],["pdc-big.de",12],["pdc-big.com",12],["elio-systems.io",[13,20]],["sanha.com",[13,20]],["recettesetcabas.com",14],["flinders.edu.au",15],["opera.com",16],["groningenairport.nl",17],["crocs.co.uk",[18,19]],["crocs.eu",[18,19]],["crocs.nl",[18,19]],["crocs.fi",[18,19]],["crocs.fr",[18,19]],["crocs.de",[18,19]],["rappjmed.ch",21],["stilord.fr",22],["stilord.it",22],["stilord.de",22],["stilord.es",22],["dasfutterhaus.at",23],["developer.paypal.com",24],["cpc2r.ch",25],["zen.com",26],["tecsafe.de",27],["foxracingshox.de",27],["stromnetz.berlin",28],["websummit.com",29],["thehustle.co",29],["epochtimes.fr",30],["ajbell.co.uk",31],["economiapertutti.bancaditalia.it",32],["quantamagazine.org",33],["tradersunion.com",33],["phsgreenleaf.co.uk",34],["phswashrooms.ie",34],["mccolls.co.uk",[35,36]],["crt.hr",37],["yourstorebox.com",38],["clickskeks.at",[39,40]],["housell.com",41],["lactostop.de",42],["mibe.de",42],["spilger.de",43],["dbs.si",44],["abcya.com",45],["umicore.be",46],["umicore.fi",46],["umicore.ca",46],["jongcdenv.be",46],["umicore.jp",46],["umicore.cn",46],["umicore.pl",46],["umicore.kr",46],["umicore.co.th",46],["umicore.fr",46],["umicore.de",46],["donneurdecellulessouches.be",46],["stammzellenspender.be",46],["stemcelldonor.be",46],["umicore.com",46],["umicore.com.br",46],["koenvandenheuvel.be",46],["stamceldonor.be",46],["nahima.be",46],["catused.com",47],["eujuicers.cz",48],["graziellawicki.com",49],["funnelcockpit.com",49],["dnk.nl",50],["eam.de",51],["eam-netz.de",51],["tvp.pl",52],["cellardoor.co",53],["ampire.de",54],["verpackungsstadl.ch",54],["imkershoperzgebirge.de",54],["modellbahndealer.de",54],["tillit-bikes.shop",54],["bike-onlineshop.de",54],["futspo.de",54],["compravo.de",54],["perpedale.de",54],["modellbau-jung.de",54],["verpackungsstadl.at",54],["modellbau-vordermaier.de",54],["bike-supply.de",54],["wroc.pl",55],["basenio.de",56],["fm-systeme.de",57],["gartenhotel-crystal.at",58],["swffm.de",58],["studentenwerkfrankfurt.de",58],["dmsg.de",58],["bgk.pl",58],["pflegezeit-berlin.de",58],["gpd-nordost-onlineberatung.de",58],["proabschluss-beratung.de",58],["hilfe-telefon-missbrauch.online",58],["dww-suchtberatung.de",58],["cyberforum.de",58],["gutscheine.eurothermen.at",58],["wolff-mueller.de",58],["ras.bz.it",58],["wifiwien.at",[59,60]],["wifikaernten.at",[59,60]],["wifi.at",[59,60]],["pdf-archive.com",60],["5asec.pt",61],["tui.dk",61],["tui.fi",61],["tui.no",61],["tui.se",61],["salvagny.org",61],["leslipfrancais.fr",61],["volksbank-mittweida.de",[61,123]],["wvb.de",[61,123]],["bremischevb.de",[61,123]],["meinebank.de",[61,123]],["vb-rb.de",[61,123]],["gladbacher-bank.de",[61,123]],["nordthueringer-volksbank.de",[61,123]],["bodenseebank.de",[61,123]],["rb-oberaudorf.de",[61,123]],["volksbank-trossingen.de",[61,123]],["owl-immobilien.de",[61,123]],["volksbank-backnang.de",[61,123]],["volksbank-international.de",[61,123]],["raiba-westhausen.de",[61,123]],["vr-nopf.cz",[61,123]],["vrbankimmobilien.de",[61,123]],["cvw-privatbank-ag.de",[61,123]],["rb-denzlingen-sexau.de",[61,123]],["rv-banken.de",[61,123]],["volksbank-remseck.de",[61,123]],["raiba-gr.de",[61,123]],["vrb-spangenberg.de",[61,123]],["rb-berghuelen.de",[61,123]],["vb-lauterecken.de",[61,123]],["rb-sondelfingen.de",[61,123]],["voba-deisslingen.de",[61,123]],["saechsischer-gewinnsparverein.de",[61,123]],["rb-hardt-bruhrain.de",[61,123]],["volksbank-daaden.de",[61,123]],["dervolksbanker.de",[61,123]],["volksbank-kirnau.de",[61,123]],["skbwitten.de",[61,123]],["raiba-ndwa.de",[61,123]],["volksbank-mittleres-erzgebirge.de",[61,123]],["rb-eching.de",[61,123]],["volksbank-aktiv.de",[61,123]],["vbsuedemsland.de",[61,123]],["voba-moeckmuehl.de",[61,123]],["volksbank-freiburg.de",[61,123]],["vbleos.de",[61,123]],["meine-rvb.de",[61,123]],["aachener-bank.de",[61,123]],["muenchner-bank.de",[61,123]],["volksbank-dh.de",[61,123]],["volksbankeg.de",[61,123]],["sparda-bank-hamburg.de",[61,123]],["sparda-sw.de",[61,123]],["volksbank-thueringen-mitte.de",[61,123]],["vrbankeg.de",[61,123]],["bernhauser-bank.de",[61,123]],["vvrbank-krp.de",[61,123]],["vvr-bank.de",[61,123]],["vb-mittelhessen.de",[61,123]],["vr-bayernmitte.de",[61,123]],["vobadhk.de",[61,123]],["rheingauer-volksbank.de",[61,123]],["dovoba.de",[61,123]],["vr-dachau.de",[61,123]],["pollfish.com",62],["werkenbijtrekpleister.nl",63],["werkenbijkruidvat.be",63],["rassenlijst.info",63],["werkenbijiciparisxl.nl",63],["tesa-labtec.com",64],["tesatape.ru",64],["tesa.com",64],["flightradar24.com",65],["apk-vk.at",66],["vietnamairlines.com",67],["incotec.com",68],["croda.com",68],["exaktafoto.se",69],["campingdusoleil.com",70],["hotel-la-chaumiere.com",70],["les-anges-gardiens.fr",70],["croco-kid.com",70],["cambridge-centre.fr",70],["equisud.com",70],["allokebab-pau.fr",70],["etre-visible.local.fr",70],["mas-montebello66.com",70],["camping-residentiel-les-marronniers-jura.fr",70],["dj4events.fr",70],["saintjoursexpertmaritime.com",70],["az-renovation.fr",70],["presquilemultiservices.com",70],["hotel-aigoual.com",70],["hotel-restaurant-pau.com",70],["desrayaud-paysagistes.com",70],["hotelsaintcharles.fr",70],["agvillagecamarguais.com",70],["joyella.com",70],["gabriel-godard.com",70],["artech-sellerie.com",70],["motoclubernee.com",70],["ledauphinhotel.com",70],["cuisin-studio.com",70],["biomeo-environnement.com",70],["leman-instruments.com",70],["esthetique-meyerbeer.com",70],["institut-bio-naturel-nice.fr",70],["nature-et-bois.fr",70],["transmissions-bordeaux.com",70],["kinechartreuse.com",70],["corsegourmande.com",70],["cotedecor.com",70],["restaurant-la-badiane.fr",70],["systelia.fr",70],["lesjardinsinterieurs.com",70],["helenevue.com",70],["saubusse-thermes.com",70],["dehn.es",71],["dehn.fr",71],["dehn.it",71],["dehn.hu",71],["desitek.dk",71],["dehn.at",71],["dehn.de",71],["wwz.ch",72],["inyova.at",73],["inyova.ch",73],["inyova.de",73],["ccalbacenter.com",73],["wamu.org",73],["momentive.com",74],["kennedyslaw.com",75],["elekta.com",76],["ige.ch",77],["stratasysdirect.com",78],["stratasys.com",78],["werkenbijkruidvat.nl",79],["ghacks.net",80],["cutoff.es",81],["whyopencomputing.com",81],["mbanc.com",82],["dentalgalindo.com",[83,84]],["brutalvisual.com",[83,84]],["archeologia.com.pl",[83,84]],["letrayframe.com",[83,84]],["osteofisintegral.es",[83,84]],["uco.cat",[83,84]],["buecheler-kollegen.de",[83,84]],["seminariodeosma-soria.org",[83,84]],["kamensenica.sk",[83,84]],["movimentoofficinedelsud.it",[83,84]],["trident.se",[83,84]],["semanasantademalagaayeryhoy.com",[83,84]],["diazfloristasestrella.com",[83,84]],["cosechavida.com",[83,84]],["centre-hypnose-moselle.com",[83,84]],["broncoillustration.com",[83,84]],["sumoingenio.com",[83,84]],["aligepro.es",[83,84]],["muevo.es",[83,84]],["azulejosacedo.com",[83,84]],["sana.cz",[83,84]],["aliapinto.com",[83,84]],["tsconline.es",[83,84]],["polifast.it",[83,84]],["napos.cz",[83,84]],["gutshaus-neuendorf-usedom.de",[83,84]],["kunterbunte-kinder.de",[83,84]],["desatando.org",[83,84]],["ledocom.cz",[83,84]],["aliciasuarez.net",[83,84]],["diabramar.com",[83,84]],["lamagnalonga.org",[83,84]],["benejamrefrigeracion.com",[83,84]],["micropigmentacioncapilarbcn.com",[83,84]],["revistaauge.com.ar",[83,84]],["arcusnet.se",[83,84]],["videogenic.es",[83,84]],["grundschule-remagen.de",[83,84]],["aceitessatunion.com",[83,84]],["servigraphic.com.ar",[83,84]],["textsteine.de",[83,84]],["campergarage.es",[83,84]],["administradorfincasblog.com",[83,84]],["balgal.es",[83,84]],["grafika-dtp-produkcia.sk",[83,84]],["unmardeconstelaciones.com",[83,84]],["salobella.com",[83,84]],["careon.se",[83,84]],["gymnosport.com",[83,84]],["easyhomes.com.es",[83,84]],["casavaledalama.pt",[83,84]],["dosc.es",[83,84]],["fcfoz.pt",[83,84]],["berevolk.com",[83,84]],["hvpropertyclearance.co.uk",[83,84]],["calamo.se",[83,84]],["elserratplanoles.com",[83,84]],["bubblessea.es",[83,84]],["disperator.se",[83,84]],["ecoparquets.com",[83,84]],["zlotaraczkalublin.pl",[83,84]],["congresoscostadelsol.com",[83,84]],["pneumaticiroma.it",[83,84]],["asprona.es",[83,84]],["virgendefatima.es",[83,84]],["patronatpremia.cat",[83,84]],["2points13.fr",[83,84]],["3d3.es",[83,84]],["abantos.es",[83,84]],["abastanimacio.org",[83,84]],["academiafrancesadebelleza.co",[83,84]],["acaluca.org",[83,84]],["acce.es",[83,84]],["ad-particles.com",[83,84]],["adea.sk",[83,84]],["afplr.fr",[83,84]],["agiletalon.fr",[83,84]],["agiratou.com",[83,84]],["aidaromero.com",[83,84]],["alkoholochnarkotika.se",[83,84]],["alligatorbioscience.se",[83,84]],["anea.es",[83,84]],["animala.es",[83,84]],["antequerabelleza.com",[83,84]],["apimadrid.net",[83,84]],["aquatrend.sk",[83,84]],["arabesque-formation.org",[83,84]],["arrivamallorca.es",[83,84]],["arteydeco.es",[83,84]],["asapservicios.net",[83,84]],["aspock.com",[83,84]],["atout-voyages.com",[83,84]],["autocareslazara.es",[83,84]],["autocaresmariano.com",[83,84]],["autoform.pl",[83,84]],["ayudatranspersonal.com",[83,84]],["bacabeton.cz",[83,84]],["begalvi.com",[83,84]],["bent-com.com",[83,84]],["berliner-haeuser.de",[83,84]],["bespokespain.com",[83,84]],["bevent-rasch.se",[83,84]],["bio-cord.es",[83,84]],["biotropica.fr",[83,84]],["bornes-eurorelais.fr",[83,84]],["braeu-stueble.de",[83,84]],["brendanoharamp.scot",[83,84]],["briau.com",[83,84]],["caleulalia.com",[83,84]],["cande-sur-beuvron.com",[83,84]],["carlhag.se",[83,84]],["carrier.se",[83,84]],["casadelaveiga.com",[83,84]],["caytas.com.tr",[83,84]],["cecjecuador.org.ec",[83,84]],["cegef.com",[83,84]],["centrediagonal.com",[83,84]],["centropolisportivomassari.it",[83,84]],["cerai.org",[83,84]],["cervosgrup.com",[83,84]],["chimeneasalicante.com",[83,84]],["circodelshow.com",[83,84]],["cliatec.com",[83,84]],["clinicabadal.es",[83,84]],["cometh-consulting.com",[83,84]],["copysud.fr",[83,84]],["cortilar.com",[83,84]],["crystal-finance.com",[83,84]],["ctangana.com",[83,84]],["cugatresidencial.com",[83,84]],["dake.es",[83,84]],["datatal.se",[83,84]],["degom.com",[83,84]],["delfis.es",[83,84]],["delogica.com",[83,84]],["dentalcompany.es",[83,84]],["descarpack.com.br",[83,84]],["desfiladeroediciones.com",[83,84]],["desomer.be",[83,84]],["diarioandalucia.es",[83,84]],["dibujos-animados.net",[83,84]],["direkt-immobilie.de",[83,84]],["dovozautznemecka.cz",[83,84]],["drpuigdollers.com",[83,84]],["dunamys.inf.br",[83,84]],["easyimplantology.com",[83,84]],["eb2b.com.pl",[83,84]],["echo-mieszkania.pl",[83,84]],["eclinic.com.sg",[83,84]],["edgeict.com",[83,84]],["eiglaw.com",[83,84]],["elandexpediciones.es",[83,84]],["emalec.com",[83,84]],["enlighten.net",[83,84]],["equifab.es",[83,84]],["escuelanauticamarenostrum.com",[83,84]],["esgrima.cat",[83,84]],["espaisperconviure.es",[83,84]],["etbygg.com",[83,84]],["eurepieces.fr",[83,84]],["euroenvio.com",[83,84]],["eurotex.es",[83,84]],["expertetfinance.fr",[83,84]],["farmarsketrhyfuturum.cz",[83,84]],["fastvisa.fr",[83,84]],["fauxdiplomes.org",[83,84]],["fisiolistic.com",[83,84]],["fondazionealbertosordi.it",[83,84]],["foyersekcjapolska.eu",[83,84]],["fundacjaeds.pl",[83,84]],["galeriaxanadu.pl",[83,84]],["garcia-ibanez.com",[83,84]],["gestenaval.com",[83,84]],["glaskogen.se",[83,84]],["globalteam.es",[83,84]],["goia.org.pl",[83,84]],["granibier.com",[83,84]],["grundia.se",[83,84]],["grupoisn.com",[83,84]],["gruporhzaragoza.com",[83,84]],["hagagruppen.se",[83,84]],["halima-magazin.com",[83,84]],["handelskammaren.com",[83,84]],["helitecnics.com",[83,84]],["helux.se",[83,84]],["hermanosalcaraz.com",[83,84]],["hjarnkoll.se",[83,84]],["hmfoundation.com",[83,84]],["hormimpres.com",[83,84]],["hoteldeprony.fr",[83,84]],["hotelroyalcatania.it",[83,84]],["houjethai.nl",[83,84]],["hummer.cz",[83,84]],["icld.se",[83,84]],["ict-project.it",[83,84]],["imagelova.id",[83,84]],["imprentalaspalmas.com",[83,84]],["informamiele.it",[83,84]],["inission.com",[83,84]],["inmobiliariavolga.com",[83,84]],["international-terra-institute.com",[83,84]],["inwaspain.com",[83,84]],["izkigolf.eus",[83,84]],["jdmusic.se",[83,84]],["juveycamps.com",[83,84]],["karel1.nl",[83,84]],["kaunokapiniuprieziura.lt",[83,84]],["kcmkompresor.com",[83,84]],["kewaccountants.co.uk",[83,84]],["konkretplus.pl",[83,84]],["krajci.cz",[83,84]],["krisvagenut.se",[83,84]],["kyoceracapetown.co.za",[83,84]],["labaguette.pl",[83,84]],["labintegrados.com",[83,84]],["ladderupinc.com",[83,84]],["landskronafoto.org",[83,84]],["langarri.es",[83,84]],["lawa.es",[83,84]],["laxo.se",[83,84]],["layher.se",[83,84]],["lifetraveler.net",[83,84]],["lindrooshalsa.se",[83,84]],["lobolab.es",[83,84]],["maisqueromanicorutas.com",[83,84]],["mallandonoandroid.com",[83,84]],["masconcas.com",[83,84]],["mediabest.cz",[83,84]],["megustaelvino.es",[83,84]],["mensa.se",[83,84]],["mestiteslilis.com",[83,84]],["minutoprint.com",[83,84]],["mirano.cz",[83,84]],["mogador.cz",[83,84]],["morphestudio.es",[83,84]],["motoaxial.com",[83,84]],["multiversidad.es",[83,84]],["mundollaves.com",[83,84]],["musicotherapie-federationfrancaise.com",[83,84]],["nauticaravaning.com",[83,84]],["nestville.sk",[83,84]],["nestvillepark.sk",[83,84]],["netromsoftware.ro",[83,84]],["nojesfabriken.se",[83,84]],["oddoneout.se",[83,84]],["opako.pl",[83,84]],["oserlafrique.com",[83,84]],["paintballalcorcon.com",[83,84]],["pallejabcn.com",[83,84]],["penicilinafruits.com",[83,84]],["peregrinoslh.com",[83,84]],["permis-lausanne.ch",[83,84]],["pernillaandersson.se",[83,84]],["piazzadelgusto.it",[83,84]],["pipi-antik.dk",[83,84]],["plasticosgeca.com",[83,84]],["plastimyr.com",[83,84]],["portal.unimes.br",[83,84]],["pro-beruf.de",[83,84]],["prophecyinternational.com",[83,84]],["psicoterapeuta.org",[83,84]],["puertasprieto.com",[83,84]],["puntosdefantasia.es",[83,84]],["pzmk.org.pl",[83,84]],["rastromaquinas.com",[83,84]],["rectoraldecastillon.com",[83,84]],["reinomineral.com",[83,84]],["reklamefreunde.de",[83,84]],["restauraciontalavera.es",[83,84]],["restauranthispania.com",[83,84]],["ristoranteeziogritti.it",[83,84]],["rubinmedical.dk",[83,84]],["rubinmedical.no",[83,84]],["rubinmedical.se",[83,84]],["sak.se",[83,84]],["sammetais.com.br",[83,84]],["sebastiancurylo.pl",[83,84]],["serigrafiaiorgi.com",[83,84]],["seyart.com",[83,84]],["sgaim.com",[83,84]],["sicamemt.org",[83,84]],["siguealconejoblanco.es",[83,84]],["sinfimasa.com",[83,84]],["skp.se",[83,84]],["skrobczynski.pl",[83,84]],["slush.de",[83,84]],["solebike.it",[83,84]],["solu-watt.fr",[83,84]],["soluzionainmobiliaria.es",[83,84]],["somoparque.com",[83,84]],["sorgingaztemoda.com",[83,84]],["sroportal.sk",[83,84]],["ssmf.se",[83,84]],["stobrasil.com.br",[83,84]],["stoparmut2015.ch",[83,84]],["studiodimuro.com",[83,84]],["subkultur-hannover.de",[83,84]],["sustanciagris.com",[83,84]],["szkt.sk",[83,84]],["tagibergslagen.se",[83,84]],["tallergastronomico.es",[83,84]],["tarna.fhsk.se",[83,84]],["tassenyalitzacio.com",[83,84]],["tctech.se",[83,84]],["teknoduegroup.it",[83,84]],["teloliquido.com",[83,84]],["temasa.es",[83,84]],["textilprint.sk",[83,84]],["thehouseofautomata.com",[83,84]],["tmgernika.com",[83,84]],["toastetmoi.fr",[83,84]],["tollare.org",[83,84]],["trattoriabolognesi.it",[83,84]],["triperavigatana.com",[83,84]],["tuckerfranklininsgrp.com",[83,84]],["tuftuf.net",[83,84]],["turuletras.com",[83,84]],["umfmb.fr",[83,84]],["upapsa.com",[83,84]],["valenciatoday.es",[83,84]],["vanghel-und-morawski.de",[83,84]],["vickycan.com",[83,84]],["ville-de-salles.com",[83,84]],["webbigt.se",[83,84]],["westlede.be",[83,84]],["wiemker.org",[83,84]],["woolink.co",[83,84]],["wp.fratgsa.org",[83,84]],["xatobaxestion.com",[83,84]],["xfactor-gmbh.de",[83,84]],["yougoenglish.com",[83,84]],["zigmoon.com",[83,84]],["canyon.com",[85,86]],["drimsim.com",87],["eteam-winkler.de",88],["kdn-elektro.de",88],["elektro-kotz.de",88],["elektro-service-rauh.de",88],["elektroanlagenbuettner.de",88],["be-connect.online",88],["bayergruppe.com",88],["bayer-wkt.de",88],["bayer-wind.de",88],["bayer-wd.de",88],["elektro-joa.de",88],["htechnik.de",88],["ehk-service.de",88],["bittner-tv.de",88],["elektro-suelzner.de",88],["elektro-leps.de",88],["elektromax-hausgeraete.de",88],["elektrotechnik-schedel.de",88],["elkugmbh.de",88],["ln-elektro-gmbh.de",88],["weiss-blau-gmbh.de",88],["sunbeam-energy.de",88],["prokauf.com",88],["lichtstudio-kerl.de",88],["liebing-beese.de",88],["hoeschel-baumann.de",88],["hausgeraete-kraemer.de",88],["gehlhaar-elektrotechnik.de",88],["ehs-elektrotechnik.de",88],["elektrojarschke.de",88],["elektrotechnik-fleischmann.de",88],["elektroseemueller.de",88],["schoerling-blitz.de",88],["ast-apolda.com",88],["elektro-klippel.de",88],["arntz-haustechnik.de",88],["elektro-bindel.de",88],["elektrotechnik-weiss.com",88],["brandschutz-hamburg.de",88],["wagnerelektrotechnik.de",88],["el-kramer.de",88],["mks-hof.de",88],["wernz-elektro.de",88],["e3-energy.de",88],["sg-solar.de",88],["elektrokrebs.de",88],["elektro-roehrl.de",88],["elektro-kreher.de",88],["giegling-vonsaal.de",88],["elektro-lehmann.com",88],["ems-wurzen.de",88],["scholpp.de",89],["scholpp.es",89],["scholpp.pl",89],["scholpp.it",89],["ptc.eu",89],["scholpp.com",89],["abo24.de",89],["overdrive.com",89],["wetu.com",89],["superwatchman.com",90],["bitburger-braugruppe.de",91],["proteincompany.fi",92],["proteinbolaget.se",92],["snoopmedia.com",93],["myguide.de",93],["study-in-germany.de",93],["daad.de",93],["futterhaus.de",94],["scottsofstow.co.uk",[95,96]],["zawszepomorze.pl",97],["wasserkunst-hamburg.de",98],["lta.org.uk",99],["brico-travo.com",100],["theateramrand.de",101],["jugend-praesentiert.de",101],["buktube.com",102],["xhaccess.com",102],["xhamster.com",102],["xhamster2.com",102],["xhamster3.com",102],["xhamster.desi",102],["evium.de",103],["epayments.com",104],["riceundspice.de",105],["happysocks.com",[106,107]],["win2day.at",108],["porp.pl",109],["weather.com",110],["gesundheitsamt-2025.de",111],["coastfashion.com",112],["oasisfashion.com",112],["warehousefashion.com",112],["misspap.com",112],["karenmillen.com",112],["boohooman.com",112],["nebo.app",113],["groupeonepoint.com",114],["edpsciences.org",115],["bemmaisseguro.com",116],["scheidegger.nl",117],["transparency.fb.com",[118,119]],["faq.whatsapp.com",119],["blog.whatsapp.com",119],["www.whatsapp.com",119],["phoenix.de",120],["strato.se",121],["strato.de",121],["mishcon.com",122],["bbva.es",124],["bbvauk.com",124],["bbva.be",124],["bbva.fr",124],["bbva.it",124],["bbva.pt",124],["suntech.cz",125],["digikey.co.za",126],["digikey.cn",126],["digikey.ee",126],["digikey.at",126],["digikey.be",126],["digikey.bg",126],["digikey.cz",126],["digikey.dk",126],["digikey.fi",126],["digikey.fr",126],["digikey.de",126],["digikey.gr",126],["digikey.hu",126],["digikey.ie",126],["digikey.it",126],["digikey.lv",126],["digikey.lt",126],["digikey.lu",126],["digikey.nl",126],["digikey.no",126],["digikey.pl",126],["digikey.pt",126],["digikey.ro",126],["digikey.sk",126],["digikey.si",126],["digikey.es",126],["digikey.se",126],["digikey.ch",126],["digikey.co.uk",126],["digikey.co.il",126],["digikey.com.mx",126],["digikey.ca",126],["digikey.com.br",126],["digikey.co.nz",126],["digikey.com.au",126],["digikey.co.th",126],["digikey.tw",126],["digikey.kr",126],["digikey.sg",126],["digikey.ph",126],["digikey.my",126],["digikey.jp",126],["digikey.in",126],["digikey.hk",126],["digikey.com",126],["eurosupps.nl",127],["pathe.nl",128],["makelaarsland.nl",129],["nordania.dk",130],["365direkte.no",130],["danskebank.lv",130],["danskebank.lt",130],["danskebank.no",130],["danskebank.fi",130],["danskebank.dk",130],["danskebank.com",130],["danskebank.se",130],["danskebank.co.uk",130],["danskeci.com",130],["danicapension.dk",130],["gewerbegebiete.de",131],["visti.it",132],["balay.es",133],["constructa.com",133],["gaggenau.com",133],["talksport.com",134],["loudersound.com",134],["impulse.de",134],["pcgamer.com",134],["infoworld.com",134],["kiplinger.com",134],["omni.se",134],["it-times.de",134],["bitcoinmagazine.com",134],["deliciousmagazine.co.uk",134],["upday.com",134],["theguardian.com",134],["deutschlandcard.de",134],["szbz.de",134],["free-fonts.com",134],["lieferzeiten.info",134],["vice.com",134],["newsnow.co.uk",134],["out.com",134],["streampicker.de",134],["radiotimes.com",134],["nowtv.com",134],["kochbar.de",134],["toggo.de",134],["am-online.com",134],["n-tv.de",134],["newsandstar.co.uk",134],["tag24.de",134],["weltkunst.de",134],["noveauta.sk",134],["pnn.de",134],["economist.com",134],["crash.net",134],["norwaytoday.info",134],["insider.com",134],["preis.de",134],["ibroxnoise.co.uk",134],["celtsarehere.com",134],["nufcblog.co.uk",134],["sport1.de",134],["techconnect.com",134],["followfollow.com",134],["thespun.com",134],["mazdas247.com",134],["fastcar.co.uk",134],["vitalfootball.co.uk",134],["audi-sport.net",134],["bumble.com",134],["arcamax.com",134],["dilbert.com",134],["sportbible.com",134],["givemesport.com",134],["dartsnews.com",134],["gpfans.com",134],["justjared.com",134],["justjaredjr.com",134],["finanzen.at",134],["flights-idealo.co.uk",134],["idealo.com",134],["idealo.se",134],["idealo.nl",134],["idealo.pl",134],["idealo.pt",134],["idealo.fi",134],["idealo.dk",134],["idealo.no",134],["idealo.in",134],["idealo.at",134],["ladenzeile.at",134],["berliner-zeitung.de",134],["urbia.de",134],["essen-und-trinken.de",134],["wetter.de",134],["rtl-living.de",134],["vox.de",134],["ladenzeile.de",134],["advocate.com",134],["idealo.de",134],["wigantoday.net",134],["economistgroup.com",134],["transfermarkt.nl",134],["transfermarkt.es",134],["transfermarkt.pl",134],["transfermarkt.pt",134],["transfermarkt.at",134],["transfermarkt.it",134],["transfermarkt.fr",134],["transfermarkt.de",134],["transfermarkt.be",134],["transfermarkt.co.uk",134],["transfermarkt.us",134],["footballfancast.com",134],["cio.com",134],["jezebel.com",134],["splinternews.com",134],["denofgeek.com",134],["kinja.com",134],["theinventory.com",134],["rollingstone.de",134],["sueddeutsche.de",134],["csoonline.com",134],["tvmovie.de",134],["testberichte.de",134],["pcgameshardware.de",134],["4players.de",134],["guj.de",134],["bild.de",134],["wieistmeineip.de",134],["testbild.de",134],["stylebook.de",134],["skygroup.sky",134],["speisekarte.de",134],["haeuser.de",134],["cmo.com.au",134],["pcworld.co.nz",134],["idealo.it",134],["transfermarkt.jp",134],["transfermarkt.co.id",134],["autoexpress.co.uk",134],["transfermarkt.com",134],["esportsclub.nl",134],["webwinkel.tubantia.nl",134],["shopalike.nl",134],["autoweek.nl",134],["pcworld.es",134],["macworld.es",134],["idealo.es",134],["businessinsider.es",134],["motor.es",134],["autobild.es",134],["driving.co.uk",134],["stern.de",134],["pcgames.de",134],["sport.de",134],["idealo.fr",134],["tori.fi",134],["snow-forecast.com",134],["tidende.dk",134],["kraloyun.com",134],["arnnet.com.au",134],["bunte.de",134],["handelsblatt.com",134],["techbook.de",134],["metal-hammer.de",134],["macworld.co.uk",134],["maxisciences.com",134],["ohmymag.com",134],["voici.fr",134],["geo.de",134],["businessinsider.de",134],["meinestadt.de",134],["politico.eu",134],["spieletipps.de",134],["finanznachrichten.de",134],["vtwonen.nl",134],["stol.it",134],["waitrose.com",135],["storyhouseegmont.dk",136],["storyhouseegmont.no",136],["storyhouseegmont.se",136],["egmont.com",136],["nordiskfilm.com",136]]);

const entitiesMap = new Map([]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function removeClass(
    rawToken = '',
    rawSelector = '',
    behavior = ''
) {
    if ( typeof rawToken !== 'string' ) { return; }
    if ( rawToken === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('remove-class', rawToken, rawSelector, behavior);
    const tokens = rawToken.split(/\s*\|\s*/);
    const selector = tokens
        .map(a => `${rawSelector}.${CSS.escape(a)}`)
        .join(',');
    if ( safe.logLevel > 1 ) {
        safe.uboLog(logPrefix, `Target selector:\n\t${selector}`);
    }
    const mustStay = /\bstay\b/.test(behavior);
    let timer;
    const rmclass = ( ) => {
        timer = undefined;
        try {
            const nodes = document.querySelectorAll(selector);
            for ( const node of nodes ) {
                node.classList.remove(...tokens);
                safe.uboLog(logPrefix, 'Removed class(es)');
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
        timer = safe.onIdle(rmclass, { timeout: 67 });
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
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
        },
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
    let bcBuffer = [];
    safe.logLevel = scriptletGlobals.logLevel || 1;
    safe.sendToLogger = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
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
