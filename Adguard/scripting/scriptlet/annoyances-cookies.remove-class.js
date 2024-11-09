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
const uBOL_removeClass = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["cookie-consent-active","body","stay"],["cookie-overlay-active","body","stay"],["cookiebanner-body","body","stay"],["cookie-notice-active","body","stay"],["cookie-overlay","body","stay"],["eu-cookie-compliance-popup-open","body","stay"],["bf-fixed","body","stay"],["cookies-not-set","body","stay"],["js-cookie-consent-popup","","stay"],["ivass-no-cookie","body","stay"],["cookie-popup-visible","body","stay"],["idgcp__layer--active","html","stay"],["cc-scrolling-disabled","body","stay"],["modal-open","body","stay"],["hasPopup","body","stay"],["darker","body","stay"],["scommerce-gdpr-disabled","div","stay"],["no-scroll","html","stay"],["compensate-for-scrollbar","body","stay"],["gdpr-shown","body","stay"],["cookie-consent__wrapper","div","stay"],["cookies-request","body","stay"],["cx-modal-open","html","stay"],["cx-no-scroll","html","stay"],["e-cookie-bar-open","body","stay"],["no-consent","html","stay"],["is-blurred-cookiebox","html","stay"],["ccpaCookieBanner-acceptedAll","body","stay"],["cookies-show",".cookies-show","stay"],["disable-background","body","stay"],["cookie--not-set","body","stay"],["_cookiebanner","body","stay"],["async-hide","html","stay"],["ntd-gdpr-no-scroll","body","stay"],["modal-background","div","stay"],["pef-no-cookie","body","stay"],["cookie-not-accepted","body","stay"],["c-body--locked-always","body","stay"],["global-cookie","div","stay"],["disable-scroll","","stay"],["bg-gray","div","stay"],["cookie-active","body","stay"],["ccm-blocked","html","stay"],["ccm-blocked","body","stay"],["is-modal-cookies-visible","body","stay"],["layerActive","","stay"],["cookiebar-open","body","stay"],["blur","body","stay"],["cookie","","stay"],["cookieconsent-active","body","stay"],["cookieMsg","","stay"],["cookie_consent__alert","","stay"],["gdpr-cookie-notice-center-loaded","","stay"],["has-open-cookie","","stay"],["om_cookie_active","","stay"],["tvp-cookie-scroll-lock","","stay"],["cookie-overlay","","stay"],["disable","div","stay"],["prevent-scroll","","stay"],["fog","","stay"],["cookie-hint","","stay"],["dp--cookie-consent","body","stay"],["body-overlay-scrollable","","stay"],["modal-open","","stay"],["no-scroll","body","stay"],["show-cookie-consent","","stay"],["is-active-cookiebar","","stay"],["has-banner","body.has-banner","stay"],["pointerevents","","stay"],["cookie-accept-required","","stay"],["cookie-open","","stay"],["cookiePopupVisible","","stay"],["unreadable-display","","stay"],["mandatory_cookie_modal","","stay"],["wwzoverlay--open","","stay"],["gdpr-infobar-visible","","stay"],["cookie-enabled","","stay"],["cookie-overlay--open","","stay"],["cookie-banner-open","","stay"],["cookie-banner-active","body","stay"],["overlay-content","body","stay"],["is-active-cookiebar","body","stay"],["didomi-popup-open","body"],["idxrcookies-block-user-nav","body","stay"],["ccpa-banner","","stay"],["modal-cacsp-open","","stay"],["modal-cacsp-box","","stay"],["brd_cookies_bar_popup_shown","html","stay"],["js-modalUnclosable","","stay"],["js-cookiesModal|is-open",".js-cookiesModal,.is-open"],["remodal-bg","","stay"],["cookie-warning-open","","stay"],["with-featherlight","","stay"],["cookies-shown","body","stay"],["no-cookie","","stay"],["dimmeractive","body","stay"],["snoop-modal-open","body","stay"],["is-blurred-cookiebox","","stay"],["consent-manager--popup","body","stay"],["consent-manager-open","body","stay"],["zp-gtm-scripts--blur","","stay"],["dots","","stay"],["cookies-modal-open","","stay"],["overlay","body","stay"],["with-dark","","stay"],["show--consent","body","stay"],["messages-active","","stay"],["cdk-overlay-container","","stay"],["b-dialog","","stay"],["disabled","body","stay"],["lock-scroll","","stay"],["disabled","header","stay"],["cookie-not-accepted-overlay","","stay"],["blurred-page","","stay"],["cookie-consent--present","","stay"],["header-gdrp-cookies-visible","","stay"],["fixed","","stay"],["noScroll","","stay"],["cookie_notification","","stay"],["blocked-body","body","stay"],["has-no-scroll","","stay"],["_31e","div","stay"],["hasCookieBanner","body","stay"],["blured","","stay"],["noscroll","body","stay"],["has-overlay","","stay"],["cookie-consent-is-active","body","stay"],["cookiesgdpr__scroll","","stay"],["modal-show","","stay"],["gdpr","","stay"],["cookieopened","body","stay"],["cookiewall-active","body","stay"],["is-cookie-notice","body","stay"],["cookie-consent-banner-open","html","stay"],["modal-overlay","","stay"],["blur","","stay"],["cookielaw-blur-background","","stay"],["sp-message-open","html","stay"],["modalOpen___gZykv","body"],["cookie-bar","","stay"]];

const hostnamesMap = new Map([["winparts.be",0],["winparts.eu",0],["winparts.fr",0],["winparts.ie",0],["winparts.nl",0],["winparts.se",0],["sportano.sk",1],["sportano.de",1],["sportano.bg",1],["sportano.hu",1],["sportano.ro",1],["sportano.cz",1],["klinik-am-ring.de",2],["ooekultur.at",3],["igmetall.de",4],["universalgeneve.com",5],["hostfly.by",6],["quantamagazine.org",[7,36]],["rappjmed.ch",7],["osprey.com",8],["ivass.it",9],["onelottery.co.uk",10],["yourschoollottery.co.uk",10],["rainbowlottery.co.uk",10],["idg.se",11],["gearaid.com",12],["buildex.cz",13],["gruenderservice.at",14],["caiacosmetics.com",15],["pdc-big.nl",16],["pdc-big.it",16],["pdc-big.ie",16],["pdc-big.fr",16],["pdc-big.es",16],["pdc-big.be",16],["pdc-big.at",16],["pdc-big.co.uk",16],["pdc-big.de",16],["pdc-big.com",16],["elio-systems.io",[17,24]],["sanha.com",[17,24]],["recettesetcabas.com",18],["flinders.edu.au",19],["opera.com",20],["groningenairport.nl",21],["crocs.co.uk",[22,23]],["crocs.eu",[22,23]],["crocs.nl",[22,23]],["crocs.fi",[22,23]],["crocs.fr",[22,23]],["crocs.de",[22,23]],["stilord.fr",25],["stilord.it",25],["stilord.de",25],["stilord.es",25],["dasfutterhaus.at",26],["developer.paypal.com",27],["cpc2r.ch",28],["zen.com",29],["tecsafe.de",30],["foxracingshox.de",30],["stromnetz.berlin",31],["websummit.com",32],["thehustle.co",32],["epochtimes.fr",33],["ajbell.co.uk",34],["economiapertutti.bancaditalia.it",35],["tradersunion.com",36],["phsgreenleaf.co.uk",37],["phswashrooms.ie",37],["mccolls.co.uk",[38,39]],["crt.hr",40],["yourstorebox.com",41],["clickskeks.at",[42,43]],["housell.com",44],["lactostop.de",45],["mibe.de",45],["spilger.de",46],["dbs.si",47],["abcya.com",48],["umicore.be",49],["umicore.fi",49],["umicore.ca",49],["jongcdenv.be",49],["umicore.jp",49],["umicore.cn",49],["umicore.pl",49],["umicore.kr",49],["umicore.co.th",49],["umicore.fr",49],["umicore.de",49],["donneurdecellulessouches.be",49],["stammzellenspender.be",49],["stemcelldonor.be",49],["umicore.com",49],["umicore.com.br",49],["koenvandenheuvel.be",49],["stamceldonor.be",49],["nahima.be",49],["catused.com",50],["eujuicers.cz",51],["graziellawicki.com",52],["funnelcockpit.com",52],["dnk.nl",53],["eam.de",54],["eam-netz.de",54],["tvp.pl",55],["cellardoor.co",56],["ampire.de",57],["verpackungsstadl.ch",57],["imkershoperzgebirge.de",57],["modellbahndealer.de",57],["tillit-bikes.shop",57],["bike-onlineshop.de",57],["futspo.de",57],["compravo.de",57],["perpedale.de",57],["modellbau-jung.de",57],["verpackungsstadl.at",57],["modellbau-vordermaier.de",57],["bike-supply.de",57],["wroc.pl",58],["basenio.de",59],["fm-systeme.de",60],["gartenhotel-crystal.at",61],["swffm.de",61],["studentenwerkfrankfurt.de",61],["dmsg.de",61],["bgk.pl",61],["pflegezeit-berlin.de",61],["gpd-nordost-onlineberatung.de",61],["proabschluss-beratung.de",61],["hilfe-telefon-missbrauch.online",61],["dww-suchtberatung.de",61],["cyberforum.de",61],["gutscheine.eurothermen.at",61],["wolff-mueller.de",61],["ras.bz.it",61],["technoalpin.com",61],["wifiwien.at",[62,63]],["wifikaernten.at",[62,63]],["wifi.at",[62,63]],["pdf-archive.com",63],["5asec.pt",64],["tui.dk",64],["tui.fi",64],["tui.no",64],["tui.se",64],["salvagny.org",64],["leslipfrancais.fr",64],["rb-os.de",[64,126]],["volksbank-mittweida.de",[64,126]],["wvb.de",[64,126]],["bremischevb.de",[64,126]],["meinebank.de",[64,126]],["vb-rb.de",[64,126]],["gladbacher-bank.de",[64,126]],["nordthueringer-volksbank.de",[64,126]],["bodenseebank.de",[64,126]],["rb-oberaudorf.de",[64,126]],["volksbank-trossingen.de",[64,126]],["owl-immobilien.de",[64,126]],["volksbank-backnang.de",[64,126]],["volksbank-international.de",[64,126]],["raiba-westhausen.de",[64,126]],["vr-nopf.cz",[64,126]],["vrbankimmobilien.de",[64,126]],["cvw-privatbank-ag.de",[64,126]],["rb-denzlingen-sexau.de",[64,126]],["rv-banken.de",[64,126]],["volksbank-remseck.de",[64,126]],["raiba-gr.de",[64,126]],["vrb-spangenberg.de",[64,126]],["rb-berghuelen.de",[64,126]],["vb-lauterecken.de",[64,126]],["rb-sondelfingen.de",[64,126]],["voba-deisslingen.de",[64,126]],["saechsischer-gewinnsparverein.de",[64,126]],["rb-hardt-bruhrain.de",[64,126]],["volksbank-daaden.de",[64,126]],["dervolksbanker.de",[64,126]],["volksbank-kirnau.de",[64,126]],["skbwitten.de",[64,126]],["raiba-ndwa.de",[64,126]],["volksbank-mittleres-erzgebirge.de",[64,126]],["rb-eching.de",[64,126]],["volksbank-aktiv.de",[64,126]],["vbsuedemsland.de",[64,126]],["voba-moeckmuehl.de",[64,126]],["volksbank-freiburg.de",[64,126]],["vbleos.de",[64,126]],["meine-rvb.de",[64,126]],["aachener-bank.de",[64,126]],["muenchner-bank.de",[64,126]],["volksbank-dh.de",[64,126]],["volksbankeg.de",[64,126]],["sparda-bank-hamburg.de",[64,126]],["sparda-sw.de",[64,126]],["volksbank-thueringen-mitte.de",[64,126]],["vrbankeg.de",[64,126]],["bernhauser-bank.de",[64,126]],["vvrbank-krp.de",[64,126]],["vvr-bank.de",[64,126]],["vb-mittelhessen.de",[64,126]],["vr-bayernmitte.de",[64,126]],["vobadhk.de",[64,126]],["rheingauer-volksbank.de",[64,126]],["dovoba.de",[64,126]],["vr-dachau.de",[64,126]],["kd-bank.de",[64,126]],["pollfish.com",65],["werkenbijtrekpleister.nl",66],["werkenbijkruidvat.be",66],["rassenlijst.info",66],["werkenbijiciparisxl.nl",66],["flightradar24.com",67],["apk-vk.at",68],["vietnamairlines.com",69],["incotec.com",70],["croda.com",70],["exaktafoto.se",71],["campingdusoleil.com",72],["hotel-la-chaumiere.com",72],["les-anges-gardiens.fr",72],["croco-kid.com",72],["cambridge-centre.fr",72],["equisud.com",72],["allokebab-pau.fr",72],["etre-visible.local.fr",72],["mas-montebello66.com",72],["camping-residentiel-les-marronniers-jura.fr",72],["dj4events.fr",72],["saintjoursexpertmaritime.com",72],["az-renovation.fr",72],["presquilemultiservices.com",72],["hotel-aigoual.com",72],["hotel-restaurant-pau.com",72],["desrayaud-paysagistes.com",72],["hotelsaintcharles.fr",72],["agvillagecamarguais.com",72],["joyella.com",72],["gabriel-godard.com",72],["artech-sellerie.com",72],["motoclubernee.com",72],["ledauphinhotel.com",72],["cuisin-studio.com",72],["biomeo-environnement.com",72],["leman-instruments.com",72],["esthetique-meyerbeer.com",72],["institut-bio-naturel-nice.fr",72],["nature-et-bois.fr",72],["transmissions-bordeaux.com",72],["kinechartreuse.com",72],["corsegourmande.com",72],["cotedecor.com",72],["restaurant-la-badiane.fr",72],["systelia.fr",72],["lesjardinsinterieurs.com",72],["helenevue.com",72],["saubusse-thermes.com",72],["dehn.es",73],["dehn.fr",73],["dehn.it",73],["dehn.hu",73],["desitek.dk",73],["dehn.at",73],["dehn.de",73],["wwz.ch",74],["inyova.at",75],["inyova.ch",75],["inyova.de",75],["ccalbacenter.com",75],["wamu.org",75],["momentive.com",76],["kennedyslaw.com",77],["elekta.com",78],["ige.ch",79],["stratasysdirect.com",80],["stratasys.com",80],["werkenbijkruidvat.nl",81],["ghacks.net",82],["cutoff.es",83],["whyopencomputing.com",83],["mbanc.com",84],["dentalgalindo.com",[85,86]],["archeologia.com.pl",[85,86]],["letrayframe.com",[85,86]],["osteofisintegral.es",[85,86]],["uco.cat",[85,86]],["buecheler-kollegen.de",[85,86]],["seminariodeosma-soria.org",[85,86]],["kamensenica.sk",[85,86]],["movimentoofficinedelsud.it",[85,86]],["trident.se",[85,86]],["semanasantademalagaayeryhoy.com",[85,86]],["diazfloristasestrella.com",[85,86]],["cosechavida.com",[85,86]],["broncoillustration.com",[85,86]],["sumoingenio.com",[85,86]],["aligepro.es",[85,86]],["muevo.es",[85,86]],["azulejosacedo.com",[85,86]],["sana.cz",[85,86]],["aliapinto.com",[85,86]],["tsconline.es",[85,86]],["polifast.it",[85,86]],["napos.cz",[85,86]],["gutshaus-neuendorf-usedom.de",[85,86]],["kunterbunte-kinder.de",[85,86]],["desatando.org",[85,86]],["ledocom.cz",[85,86]],["aliciasuarez.net",[85,86]],["diabramar.com",[85,86]],["lamagnalonga.org",[85,86]],["benejamrefrigeracion.com",[85,86]],["micropigmentacioncapilarbcn.com",[85,86]],["arcusnet.se",[85,86]],["videogenic.es",[85,86]],["grundschule-remagen.de",[85,86]],["aceitessatunion.com",[85,86]],["servigraphic.com.ar",[85,86]],["textsteine.de",[85,86]],["campergarage.es",[85,86]],["administradorfincasblog.com",[85,86]],["balgal.es",[85,86]],["grafika-dtp-produkcia.sk",[85,86]],["unmardeconstelaciones.com",[85,86]],["salobella.com",[85,86]],["careon.se",[85,86]],["gymnosport.com",[85,86]],["easyhomes.com.es",[85,86]],["casavaledalama.pt",[85,86]],["dosc.es",[85,86]],["fcfoz.pt",[85,86]],["berevolk.com",[85,86]],["hvpropertyclearance.co.uk",[85,86]],["calamo.se",[85,86]],["elserratplanoles.com",[85,86]],["bubblessea.es",[85,86]],["disperator.se",[85,86]],["ecoparquets.com",[85,86]],["zlotaraczkalublin.pl",[85,86]],["congresoscostadelsol.com",[85,86]],["pneumaticiroma.it",[85,86]],["asprona.es",[85,86]],["virgendefatima.es",[85,86]],["patronatpremia.cat",[85,86]],["2points13.fr",[85,86]],["3d3.es",[85,86]],["abantos.es",[85,86]],["abastanimacio.org",[85,86]],["academiafrancesadebelleza.co",[85,86]],["acaluca.org",[85,86]],["acce.es",[85,86]],["ad-particles.com",[85,86]],["adea.sk",[85,86]],["afplr.fr",[85,86]],["agiletalon.fr",[85,86]],["agiratou.com",[85,86]],["aidaromero.com",[85,86]],["alkoholochnarkotika.se",[85,86]],["alligatorbioscience.se",[85,86]],["anea.es",[85,86]],["animala.es",[85,86]],["apimadrid.net",[85,86]],["aquatrend.sk",[85,86]],["arabesque-formation.org",[85,86]],["arrivamallorca.es",[85,86]],["asapservicios.net",[85,86]],["aspock.com",[85,86]],["atout-voyages.com",[85,86]],["autocareslazara.es",[85,86]],["autocaresmariano.com",[85,86]],["autoform.pl",[85,86]],["ayudatranspersonal.com",[85,86]],["bacabeton.cz",[85,86]],["begalvi.com",[85,86]],["bent-com.com",[85,86]],["berliner-haeuser.de",[85,86]],["bespokespain.com",[85,86]],["bevent-rasch.se",[85,86]],["bio-cord.es",[85,86]],["biotropica.fr",[85,86]],["bornes-eurorelais.fr",[85,86]],["braeu-stueble.de",[85,86]],["brendanoharamp.scot",[85,86]],["briau.com",[85,86]],["caleulalia.com",[85,86]],["cande-sur-beuvron.com",[85,86]],["carlhag.se",[85,86]],["carrier.se",[85,86]],["casadelaveiga.com",[85,86]],["caytas.com.tr",[85,86]],["cecjecuador.org.ec",[85,86]],["cegef.com",[85,86]],["centrediagonal.com",[85,86]],["centropolisportivomassari.it",[85,86]],["cerai.org",[85,86]],["cervosgrup.com",[85,86]],["chimeneasalicante.com",[85,86]],["cliatec.com",[85,86]],["clinicabadal.es",[85,86]],["cometh-consulting.com",[85,86]],["copysud.fr",[85,86]],["cortilar.com",[85,86]],["crystal-finance.com",[85,86]],["ctangana.com",[85,86]],["cugatresidencial.com",[85,86]],["dake.es",[85,86]],["datatal.se",[85,86]],["degom.com",[85,86]],["delfis.es",[85,86]],["delogica.com",[85,86]],["dentalcompany.es",[85,86]],["descarpack.com.br",[85,86]],["desfiladeroediciones.com",[85,86]],["desomer.be",[85,86]],["diarioandalucia.es",[85,86]],["dibujos-animados.net",[85,86]],["direkt-immobilie.de",[85,86]],["dovozautznemecka.cz",[85,86]],["drpuigdollers.com",[85,86]],["dunamys.inf.br",[85,86]],["easyimplantology.com",[85,86]],["eb2b.com.pl",[85,86]],["echo-mieszkania.pl",[85,86]],["eclinic.com.sg",[85,86]],["edgeict.com",[85,86]],["eiglaw.com",[85,86]],["elandexpediciones.es",[85,86]],["emalec.com",[85,86]],["enlighten.net",[85,86]],["equifab.es",[85,86]],["escuelanauticamarenostrum.com",[85,86]],["esgrima.cat",[85,86]],["espaisperconviure.es",[85,86]],["etbygg.com",[85,86]],["eurepieces.fr",[85,86]],["euroenvio.com",[85,86]],["eurotex.es",[85,86]],["expertetfinance.fr",[85,86]],["farmarsketrhyfuturum.cz",[85,86]],["fastvisa.fr",[85,86]],["fauxdiplomes.org",[85,86]],["fisiolistic.com",[85,86]],["fondazionealbertosordi.it",[85,86]],["foyersekcjapolska.eu",[85,86]],["fundacjaeds.pl",[85,86]],["galeriaxanadu.pl",[85,86]],["garcia-ibanez.com",[85,86]],["gestenaval.com",[85,86]],["glaskogen.se",[85,86]],["globalteam.es",[85,86]],["goia.org.pl",[85,86]],["granibier.com",[85,86]],["grundia.se",[85,86]],["grupoisn.com",[85,86]],["gruporhzaragoza.com",[85,86]],["hagagruppen.se",[85,86]],["halima-magazin.com",[85,86]],["handelskammaren.com",[85,86]],["helitecnics.com",[85,86]],["helux.se",[85,86]],["hermanosalcaraz.com",[85,86]],["hjarnkoll.se",[85,86]],["hmfoundation.com",[85,86]],["hormimpres.com",[85,86]],["hoteldeprony.fr",[85,86]],["hotelroyalcatania.it",[85,86]],["houjethai.nl",[85,86]],["hummer.cz",[85,86]],["icld.se",[85,86]],["ict-project.it",[85,86]],["imprentalaspalmas.com",[85,86]],["informamiele.it",[85,86]],["inission.com",[85,86]],["inmobiliariavolga.com",[85,86]],["international-terra-institute.com",[85,86]],["inwaspain.com",[85,86]],["izkigolf.eus",[85,86]],["jdmusic.se",[85,86]],["juveycamps.com",[85,86]],["kaunokapiniuprieziura.lt",[85,86]],["kcmkompresor.com",[85,86]],["kewaccountants.co.uk",[85,86]],["konkretplus.pl",[85,86]],["krajci.cz",[85,86]],["krisvagenut.se",[85,86]],["kyoceracapetown.co.za",[85,86]],["labaguette.pl",[85,86]],["labintegrados.com",[85,86]],["ladderupinc.com",[85,86]],["landskronafoto.org",[85,86]],["langarri.es",[85,86]],["lawa.es",[85,86]],["laxo.se",[85,86]],["layher.se",[85,86]],["lifetraveler.net",[85,86]],["lindrooshalsa.se",[85,86]],["lobolab.es",[85,86]],["maisqueromanicorutas.com",[85,86]],["mallandonoandroid.com",[85,86]],["masconcas.com",[85,86]],["mediabest.cz",[85,86]],["megustaelvino.es",[85,86]],["mensa.se",[85,86]],["mestiteslilis.com",[85,86]],["minutoprint.com",[85,86]],["mirano.cz",[85,86]],["mogador.cz",[85,86]],["morphestudio.es",[85,86]],["motoaxial.com",[85,86]],["multiversidad.es",[85,86]],["mundollaves.com",[85,86]],["musicotherapie-federationfrancaise.com",[85,86]],["nauticaravaning.com",[85,86]],["nestville.sk",[85,86]],["nestvillepark.sk",[85,86]],["netromsoftware.ro",[85,86]],["nojesfabriken.se",[85,86]],["oddoneout.se",[85,86]],["opako.pl",[85,86]],["oserlafrique.com",[85,86]],["paintballalcorcon.com",[85,86]],["pallejabcn.com",[85,86]],["penicilinafruits.com",[85,86]],["peregrinoslh.com",[85,86]],["permis-lausanne.ch",[85,86]],["pernillaandersson.se",[85,86]],["piazzadelgusto.it",[85,86]],["pipi-antik.dk",[85,86]],["plasticosgeca.com",[85,86]],["plastimyr.com",[85,86]],["portal.unimes.br",[85,86]],["pro-beruf.de",[85,86]],["prophecyinternational.com",[85,86]],["psicoterapeuta.org",[85,86]],["puertasprieto.com",[85,86]],["puntosdefantasia.es",[85,86]],["pzmk.org.pl",[85,86]],["rastromaquinas.com",[85,86]],["rectoraldecastillon.com",[85,86]],["reinomineral.com",[85,86]],["reklamefreunde.de",[85,86]],["restauranthispania.com",[85,86]],["rubinmedical.dk",[85,86]],["rubinmedical.no",[85,86]],["rubinmedical.se",[85,86]],["sak.se",[85,86]],["sammetais.com.br",[85,86]],["sebastiancurylo.pl",[85,86]],["serigrafiaiorgi.com",[85,86]],["seyart.com",[85,86]],["sgaim.com",[85,86]],["sicamemt.org",[85,86]],["siguealconejoblanco.es",[85,86]],["sinfimasa.com",[85,86]],["skp.se",[85,86]],["skrobczynski.pl",[85,86]],["slush.de",[85,86]],["solebike.it",[85,86]],["solu-watt.fr",[85,86]],["soluzionainmobiliaria.es",[85,86]],["somoparque.com",[85,86]],["sorgingaztemoda.com",[85,86]],["sroportal.sk",[85,86]],["ssmf.se",[85,86]],["stobrasil.com.br",[85,86]],["stoparmut2015.ch",[85,86]],["studiodimuro.com",[85,86]],["subkultur-hannover.de",[85,86]],["sustanciagris.com",[85,86]],["szkt.sk",[85,86]],["tagibergslagen.se",[85,86]],["tallergastronomico.es",[85,86]],["tarna.fhsk.se",[85,86]],["tassenyalitzacio.com",[85,86]],["tctech.se",[85,86]],["teknoduegroup.it",[85,86]],["teloliquido.com",[85,86]],["temasa.es",[85,86]],["textilprint.sk",[85,86]],["thehouseofautomata.com",[85,86]],["tmgernika.com",[85,86]],["toastetmoi.fr",[85,86]],["tollare.org",[85,86]],["triperavigatana.com",[85,86]],["tuckerfranklininsgrp.com",[85,86]],["tuftuf.net",[85,86]],["turuletras.com",[85,86]],["umfmb.fr",[85,86]],["upapsa.com",[85,86]],["valenciatoday.es",[85,86]],["vanghel-und-morawski.de",[85,86]],["vickycan.com",[85,86]],["ville-de-salles.com",[85,86]],["webbigt.se",[85,86]],["westlede.be",[85,86]],["wiemker.org",[85,86]],["woolink.co",[85,86]],["wp.fratgsa.org",[85,86]],["xatobaxestion.com",[85,86]],["xfactor-gmbh.de",[85,86]],["zigmoon.com",[85,86]],["brightdata.com",87],["canyon.com",[88,89]],["drimsim.com",90],["eteam-winkler.de",91],["kdn-elektro.de",91],["elektro-kotz.de",91],["elektro-service-rauh.de",91],["elektroanlagenbuettner.de",91],["be-connect.online",91],["bayergruppe.com",91],["bayer-wkt.de",91],["bayer-wind.de",91],["bayer-wd.de",91],["elektro-joa.de",91],["htechnik.de",91],["ehk-service.de",91],["bittner-tv.de",91],["elektro-suelzner.de",91],["elektro-leps.de",91],["elektromax-hausgeraete.de",91],["elektrotechnik-schedel.de",91],["elkugmbh.de",91],["ln-elektro-gmbh.de",91],["weiss-blau-gmbh.de",91],["sunbeam-energy.de",91],["prokauf.com",91],["lichtstudio-kerl.de",91],["liebing-beese.de",91],["hoeschel-baumann.de",91],["hausgeraete-kraemer.de",91],["gehlhaar-elektrotechnik.de",91],["ehs-elektrotechnik.de",91],["elektrojarschke.de",91],["elektrotechnik-fleischmann.de",91],["elektroseemueller.de",91],["schoerling-blitz.de",91],["ast-apolda.com",91],["elektro-klippel.de",91],["arntz-haustechnik.de",91],["elektro-bindel.de",91],["elektrotechnik-weiss.com",91],["brandschutz-hamburg.de",91],["wagnerelektrotechnik.de",91],["el-kramer.de",91],["mks-hof.de",91],["wernz-elektro.de",91],["e3-energy.de",91],["sg-solar.de",91],["elektrokrebs.de",91],["elektro-roehrl.de",91],["elektro-kreher.de",91],["giegling-vonsaal.de",91],["elektro-lehmann.com",91],["ems-wurzen.de",91],["scholpp.de",92],["scholpp.es",92],["scholpp.pl",92],["scholpp.it",92],["ptc.eu",92],["scholpp.com",92],["abo24.de",92],["overdrive.com",92],["wetu.com",92],["superwatchman.com",93],["bitburger-braugruppe.de",94],["proteincompany.fi",95],["proteinbolaget.se",95],["snoopmedia.com",96],["myguide.de",96],["study-in-germany.de",96],["daad.de",96],["futterhaus.de",97],["scottsofstow.co.uk",[98,99]],["zawszepomorze.pl",100],["wasserkunst-hamburg.de",101],["lta.org.uk",102],["brico-travo.com",103],["panzerfux.de",104],["tvprato.it",105],["liftshare.com",105],["vesely-drak.cz",105],["consordini.com",105],["fitzmuseum.cam.ac.uk",105],["hotdk2023.kre.hu",105],["panwybierak.pl",105],["bomagasinet.dk",105],["miplantaweb.com",105],["electronics.semaf.at",105],["sfd.pl",105],["flota.es",105],["jobs.cz",105],["prace.cz",105],["eninternetgratis.com",105],["unavidadeviaje.com",105],["theateramrand.de",106],["jugend-praesentiert.de",106],["evium.de",107],["epayments.com",108],["riceundspice.de",109],["happysocks.com",[110,111]],["win2day.at",112],["porp.pl",113],["gesundheitsamt-2025.de",114],["coastfashion.com",115],["oasisfashion.com",115],["warehousefashion.com",115],["misspap.com",115],["karenmillen.com",115],["boohooman.com",115],["nebo.app",116],["groupeonepoint.com",117],["edpsciences.org",118],["bemmaisseguro.com",119],["scheidegger.nl",120],["transparency.fb.com",[121,122]],["faq.whatsapp.com",122],["blog.whatsapp.com",122],["www.whatsapp.com",122],["phoenix.de",123],["strato.se",124],["strato.de",124],["mishcon.com",125],["bbva.es",127],["bbvauk.com",127],["bbva.be",127],["bbva.fr",127],["bbva.it",127],["bbva.pt",127],["suntech.cz",128],["digikey.co.za",129],["digikey.cn",129],["digikey.ee",129],["digikey.at",129],["digikey.be",129],["digikey.bg",129],["digikey.cz",129],["digikey.dk",129],["digikey.fi",129],["digikey.fr",129],["digikey.de",129],["digikey.gr",129],["digikey.hu",129],["digikey.ie",129],["digikey.it",129],["digikey.lv",129],["digikey.lt",129],["digikey.lu",129],["digikey.nl",129],["digikey.no",129],["digikey.pl",129],["digikey.pt",129],["digikey.ro",129],["digikey.sk",129],["digikey.si",129],["digikey.es",129],["digikey.se",129],["digikey.ch",129],["digikey.co.uk",129],["digikey.co.il",129],["digikey.com.mx",129],["digikey.ca",129],["digikey.com.br",129],["digikey.co.nz",129],["digikey.com.au",129],["digikey.co.th",129],["digikey.tw",129],["digikey.kr",129],["digikey.sg",129],["digikey.ph",129],["digikey.my",129],["digikey.jp",129],["digikey.in",129],["digikey.hk",129],["digikey.com",129],["eurosupps.nl",130],["pathe.nl",131],["makelaarsland.nl",132],["nordania.dk",133],["365direkte.no",133],["danskebank.lv",133],["danskebank.lt",133],["danskebank.no",133],["danskebank.fi",133],["danskebank.dk",133],["danskebank.com",133],["danskebank.se",133],["danskebank.co.uk",133],["danskeci.com",133],["danicapension.dk",133],["gewerbegebiete.de",134],["visti.it",135],["balay.es",136],["constructa.com",136],["gaggenau.com",136],["talksport.com",137],["loudersound.com",137],["impulse.de",137],["pcgamer.com",137],["infoworld.com",137],["kiplinger.com",137],["omni.se",137],["it-times.de",137],["bitcoinmagazine.com",137],["deliciousmagazine.co.uk",137],["upday.com",137],["deutschlandcard.de",137],["szbz.de",137],["free-fonts.com",137],["lieferzeiten.info",137],["vice.com",137],["newsnow.co.uk",137],["out.com",137],["streampicker.de",137],["radiotimes.com",137],["nowtv.com",137],["kochbar.de",137],["toggo.de",137],["am-online.com",137],["n-tv.de",137],["newsandstar.co.uk",137],["tag24.de",137],["weltkunst.de",137],["noveauta.sk",137],["pnn.de",137],["economist.com",137],["crash.net",137],["norwaytoday.info",137],["insider.com",137],["preis.de",137],["ibroxnoise.co.uk",137],["celtsarehere.com",137],["nufcblog.co.uk",137],["sport1.de",137],["techconnect.com",137],["followfollow.com",137],["thespun.com",137],["mazdas247.com",137],["fastcar.co.uk",137],["vitalfootball.co.uk",137],["audi-sport.net",137],["bumble.com",137],["arcamax.com",137],["dilbert.com",137],["givemesport.com",137],["dartsnews.com",137],["gpfans.com",137],["justjared.com",137],["justjaredjr.com",137],["finanzen.at",137],["flights-idealo.co.uk",137],["idealo.com",137],["idealo.se",137],["idealo.nl",137],["idealo.pl",137],["idealo.pt",137],["idealo.fi",137],["idealo.dk",137],["idealo.no",137],["idealo.in",137],["idealo.at",137],["ladenzeile.at",137],["berliner-zeitung.de",137],["urbia.de",137],["essen-und-trinken.de",137],["wetter.de",137],["rtl-living.de",137],["vox.de",137],["ladenzeile.de",137],["advocate.com",137],["idealo.de",137],["wigantoday.net",137],["economistgroup.com",137],["transfermarkt.nl",137],["transfermarkt.es",137],["transfermarkt.pl",137],["transfermarkt.pt",137],["transfermarkt.at",137],["transfermarkt.it",137],["transfermarkt.fr",137],["transfermarkt.de",137],["transfermarkt.be",137],["transfermarkt.co.uk",137],["transfermarkt.us",137],["footballfancast.com",137],["cio.com",137],["jezebel.com",137],["splinternews.com",137],["denofgeek.com",137],["kinja.com",137],["theinventory.com",137],["rollingstone.de",137],["sueddeutsche.de",137],["csoonline.com",137],["tvmovie.de",137],["testberichte.de",137],["pcgameshardware.de",137],["4players.de",137],["guj.de",137],["bild.de",137],["wieistmeineip.de",137],["testbild.de",137],["stylebook.de",137],["skygroup.sky",137],["speisekarte.de",137],["haeuser.de",137],["cmo.com.au",137],["pcworld.co.nz",137],["idealo.it",137],["transfermarkt.jp",137],["transfermarkt.co.id",137],["autoexpress.co.uk",137],["transfermarkt.com",137],["webwinkel.tubantia.nl",137],["shopalike.nl",137],["autoweek.nl",137],["pcworld.es",137],["macworld.es",137],["idealo.es",137],["businessinsider.es",137],["motor.es",137],["autobild.es",137],["driving.co.uk",137],["stern.de",137],["pcgames.de",137],["sport.de",137],["idealo.fr",137],["tori.fi",137],["snow-forecast.com",137],["tidende.dk",137],["kraloyun.com",137],["arnnet.com.au",137],["bunte.de",137],["handelsblatt.com",137],["techbook.de",137],["metal-hammer.de",137],["macworld.co.uk",137],["maxisciences.com",137],["ohmymag.com",137],["voici.fr",137],["geo.de",137],["businessinsider.de",137],["meinestadt.de",137],["politico.eu",137],["spieletipps.de",137],["finanznachrichten.de",137],["vtwonen.nl",137],["stol.it",137],["waitrose.com",138],["storyhouseegmont.dk",139],["storyhouseegmont.no",139],["storyhouseegmont.se",139],["egmont.com",139],["nordiskfilm.com",139]]);

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
