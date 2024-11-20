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
const uBOL_removeClass = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["cookie-consent-active","body","stay"],["cookie-overlay-active","body","stay"],["cookiebanner-body","body","stay"],["cookie-notice-active","body","stay"],["cookie-overlay","body","stay"],["eu-cookie-compliance-popup-open","body","stay"],["bf-fixed","body","stay"],["cookies-not-set","body","stay"],["js-cookie-consent-popup","","stay"],["ivass-no-cookie","body","stay"],["cookie-popup-visible","body","stay"],["idgcp__layer--active","html","stay"],["cc-scrolling-disabled","body","stay"],["modal-open","body","stay"],["hasPopup","body","stay"],["darker","body","stay"],["scommerce-gdpr-disabled","div","stay"],["no-scroll","html","stay"],["compensate-for-scrollbar","body","stay"],["gdpr-shown","body","stay"],["cookie-consent__wrapper","div","stay"],["cookies-request","body","stay"],["cx-modal-open","html","stay"],["cx-no-scroll","html","stay"],["e-cookie-bar-open","body","stay"],["no-consent","html","stay"],["is-blurred-cookiebox","html","stay"],["ccpaCookieBanner-acceptedAll","body","stay"],["cookies-show",".cookies-show","stay"],["disable-background","body","stay"],["cookie--not-set","body","stay"],["_cookiebanner","body","stay"],["async-hide","html","stay"],["ntd-gdpr-no-scroll","body","stay"],["modal-background","div","stay"],["pef-no-cookie","body","stay"],["cookie-not-accepted","body","stay"],["c-body--locked-always","body","stay"],["global-cookie","div","stay"],["disable-scroll","","stay"],["bg-gray","div","stay"],["cookie-active","body","stay"],["ccm-blocked","html","stay"],["ccm-blocked","body","stay"],["is-modal-cookies-visible","body","stay"],["layerActive","","stay"],["cookiebar-open","body","stay"],["blur","body","stay"],["cookie","","stay"],["cookieconsent-active","body","stay"],["cookieMsg","","stay"],["cookie_consent__alert","","stay"],["gdpr-cookie-notice-center-loaded","","stay"],["has-open-cookie","","stay"],["om_cookie_active","","stay"],["tvp-cookie-scroll-lock","","stay"],["cookie-overlay","","stay"],["disable","div","stay"],["prevent-scroll","","stay"],["fog","","stay"],["cookie-hint","","stay"],["dp--cookie-consent","body","stay"],["body-overlay-scrollable","","stay"],["modal-open","","stay"],["no-scroll","body","stay"],["show-cookie-consent","","stay"],["is-active-cookiebar","","stay"],["has-banner","body.has-banner","stay"],["pointerevents","","stay"],["cookie-accept-required","","stay"],["cookie-open","","stay"],["cookiePopupVisible","","stay"],["unreadable-display","","stay"],["mandatory_cookie_modal","","stay"],["wwzoverlay--open","","stay"],["gdpr-infobar-visible","","stay"],["cookie-enabled","","stay"],["cookie-overlay--open","","stay"],["cookie-banner-open","","stay"],["cookie-banner-active","body","stay"],["overlay-content","body","stay"],["is-active-cookiebar","body","stay"],["didomi-popup-open","body"],["idxrcookies-block-user-nav","body","stay"],["ccpa-banner","","stay"],["modal-cacsp-open","","stay"],["modal-cacsp-box","","stay"],["brd_cookies_bar_popup_shown","html","stay"],["js-modalUnclosable","","stay"],["js-cookiesModal|is-open",".js-cookiesModal,.is-open"],["remodal-bg","","stay"],["cookie-warning-open","","stay"],["with-featherlight","","stay"],["cookies-shown","body","stay"],["no-cookie","","stay"],["dimmeractive","body","stay"],["snoop-modal-open","body","stay"],["is-blurred-cookiebox","","stay"],["consent-manager--popup","body","stay"],["consent-manager-open","body","stay"],["zp-gtm-scripts--blur","","stay"],["dots","","stay"],["cookies-modal-open","","stay"],["overlay","body","stay"],["with-dark","","stay"],["show--consent","body","stay"],["messages-active","","stay"],["cdk-overlay-container","","stay"],["b-dialog","","stay"],["disabled","body","stay"],["lock-scroll","","stay"],["disabled","header","stay"],["cookie-not-accepted-overlay","","stay"],["blurred-page","","stay"],["cookie-consent--present","","stay"],["header-gdrp-cookies-visible","","stay"],["fixed","","stay"],["noScroll","","stay"],["cookie_notification","","stay"],["blocked-body","body","stay"],["popup","div","stay"],["has-no-scroll","","stay"],["_31e","div","stay"],["hasCookieBanner","body","stay"],["blured","","stay"],["noscroll","body","stay"],["has-overlay","","stay"],["cookie-consent-is-active","body","stay"],["cookiesgdpr__scroll","","stay"],["modal-show","","stay"],["gdpr","","stay"],["cookieopened","body","stay"],["cookiewall-active","body","stay"],["is-cookie-notice","body","stay"],["cookie-consent-banner-open","html","stay"],["modal-overlay","","stay"],["blur","","stay"],["cookielaw-blur-background","","stay"],["sp-message-open","html","stay"],["modalOpen___gZykv","body"],["cookie-bar","","stay"]];

const hostnamesMap = new Map([["winparts.be",0],["winparts.eu",0],["winparts.fr",0],["winparts.ie",0],["winparts.nl",0],["winparts.se",0],["sportano.sk",1],["sportano.de",1],["sportano.bg",1],["sportano.hu",1],["sportano.ro",1],["sportano.cz",1],["klinik-am-ring.de",2],["ooekultur.at",3],["igmetall.de",4],["universalgeneve.com",5],["hostfly.by",6],["quantamagazine.org",[7,36]],["rappjmed.ch",7],["osprey.com",8],["ivass.it",9],["onelottery.co.uk",10],["yourschoollottery.co.uk",10],["rainbowlottery.co.uk",10],["idg.se",11],["gearaid.com",12],["buildex.cz",13],["gruenderservice.at",14],["caiacosmetics.com",15],["pdc-big.nl",16],["pdc-big.it",16],["pdc-big.ie",16],["pdc-big.fr",16],["pdc-big.es",16],["pdc-big.be",16],["pdc-big.at",16],["pdc-big.co.uk",16],["pdc-big.de",16],["pdc-big.com",16],["elio-systems.io",[17,24]],["sanha.com",[17,24]],["recettesetcabas.com",18],["flinders.edu.au",19],["opera.com",20],["groningenairport.nl",21],["crocs.co.uk",[22,23]],["crocs.eu",[22,23]],["crocs.nl",[22,23]],["crocs.fi",[22,23]],["crocs.fr",[22,23]],["crocs.de",[22,23]],["stilord.fr",25],["stilord.it",25],["stilord.de",25],["stilord.es",25],["dasfutterhaus.at",26],["developer.paypal.com",27],["cpc2r.ch",28],["zen.com",29],["tecsafe.de",30],["foxracingshox.de",30],["stromnetz.berlin",31],["websummit.com",32],["thehustle.co",32],["epochtimes.fr",33],["ajbell.co.uk",34],["economiapertutti.bancaditalia.it",35],["tradersunion.com",36],["phsgreenleaf.co.uk",37],["phswashrooms.ie",37],["mccolls.co.uk",[38,39]],["crt.hr",40],["yourstorebox.com",41],["clickskeks.at",[42,43]],["housell.com",44],["lactostop.de",45],["mibe.de",45],["spilger.de",46],["dbs.si",47],["abcya.com",48],["umicore.be",49],["umicore.fi",49],["umicore.ca",49],["jongcdenv.be",49],["umicore.jp",49],["umicore.cn",49],["umicore.pl",49],["umicore.kr",49],["umicore.co.th",49],["umicore.fr",49],["umicore.de",49],["donneurdecellulessouches.be",49],["stammzellenspender.be",49],["stemcelldonor.be",49],["umicore.com",49],["umicore.com.br",49],["koenvandenheuvel.be",49],["stamceldonor.be",49],["nahima.be",49],["catused.com",50],["eujuicers.cz",51],["graziellawicki.com",52],["funnelcockpit.com",52],["dnk.nl",53],["eam.de",54],["eam-netz.de",54],["tvp.pl",55],["cellardoor.co",56],["ampire.de",57],["verpackungsstadl.ch",57],["imkershoperzgebirge.de",57],["modellbahndealer.de",57],["tillit-bikes.shop",57],["bike-onlineshop.de",57],["futspo.de",57],["compravo.de",57],["perpedale.de",57],["modellbau-jung.de",57],["verpackungsstadl.at",57],["modellbau-vordermaier.de",57],["bike-supply.de",57],["wroc.pl",58],["basenio.de",59],["fm-systeme.de",60],["gartenhotel-crystal.at",61],["swffm.de",61],["studentenwerkfrankfurt.de",61],["dmsg.de",61],["bgk.pl",61],["pflegezeit-berlin.de",61],["gpd-nordost-onlineberatung.de",61],["proabschluss-beratung.de",61],["hilfe-telefon-missbrauch.online",61],["dww-suchtberatung.de",61],["cyberforum.de",61],["gutscheine.eurothermen.at",61],["wolff-mueller.de",61],["ras.bz.it",61],["technoalpin.com",61],["wifiwien.at",[62,63]],["wifikaernten.at",[62,63]],["wifi.at",[62,63]],["pdf-archive.com",63],["5asec.pt",64],["tui.dk",64],["tui.fi",64],["tui.no",64],["tui.se",64],["salvagny.org",64],["leslipfrancais.fr",64],["rb-os.de",[64,127]],["volksbank-mittweida.de",[64,127]],["wvb.de",[64,127]],["bremischevb.de",[64,127]],["meinebank.de",[64,127]],["vb-rb.de",[64,127]],["gladbacher-bank.de",[64,127]],["nordthueringer-volksbank.de",[64,127]],["bodenseebank.de",[64,127]],["rb-oberaudorf.de",[64,127]],["volksbank-trossingen.de",[64,127]],["owl-immobilien.de",[64,127]],["volksbank-backnang.de",[64,127]],["volksbank-international.de",[64,127]],["raiba-westhausen.de",[64,127]],["vr-nopf.cz",[64,127]],["vrbankimmobilien.de",[64,127]],["cvw-privatbank-ag.de",[64,127]],["rb-denzlingen-sexau.de",[64,127]],["rv-banken.de",[64,127]],["volksbank-remseck.de",[64,127]],["raiba-gr.de",[64,127]],["vrb-spangenberg.de",[64,127]],["rb-berghuelen.de",[64,127]],["vb-lauterecken.de",[64,127]],["rb-sondelfingen.de",[64,127]],["voba-deisslingen.de",[64,127]],["saechsischer-gewinnsparverein.de",[64,127]],["rb-hardt-bruhrain.de",[64,127]],["volksbank-daaden.de",[64,127]],["dervolksbanker.de",[64,127]],["volksbank-kirnau.de",[64,127]],["skbwitten.de",[64,127]],["raiba-ndwa.de",[64,127]],["volksbank-mittleres-erzgebirge.de",[64,127]],["rb-eching.de",[64,127]],["volksbank-aktiv.de",[64,127]],["vbsuedemsland.de",[64,127]],["voba-moeckmuehl.de",[64,127]],["volksbank-freiburg.de",[64,127]],["vbleos.de",[64,127]],["meine-rvb.de",[64,127]],["aachener-bank.de",[64,127]],["muenchner-bank.de",[64,127]],["volksbank-dh.de",[64,127]],["volksbankeg.de",[64,127]],["sparda-bank-hamburg.de",[64,127]],["sparda-sw.de",[64,127]],["volksbank-thueringen-mitte.de",[64,127]],["vrbankeg.de",[64,127]],["bernhauser-bank.de",[64,127]],["vvrbank-krp.de",[64,127]],["vvr-bank.de",[64,127]],["vb-mittelhessen.de",[64,127]],["vr-bayernmitte.de",[64,127]],["vobadhk.de",[64,127]],["rheingauer-volksbank.de",[64,127]],["dovoba.de",[64,127]],["vr-dachau.de",[64,127]],["kd-bank.de",[64,127]],["pollfish.com",65],["werkenbijtrekpleister.nl",66],["werkenbijkruidvat.be",66],["rassenlijst.info",66],["werkenbijiciparisxl.nl",66],["flightradar24.com",67],["apk-vk.at",68],["vietnamairlines.com",69],["incotec.com",70],["croda.com",70],["exaktafoto.se",71],["campingdusoleil.com",72],["hotel-la-chaumiere.com",72],["les-anges-gardiens.fr",72],["croco-kid.com",72],["cambridge-centre.fr",72],["equisud.com",72],["allokebab-pau.fr",72],["etre-visible.local.fr",72],["mas-montebello66.com",72],["camping-residentiel-les-marronniers-jura.fr",72],["dj4events.fr",72],["saintjoursexpertmaritime.com",72],["az-renovation.fr",72],["presquilemultiservices.com",72],["hotel-aigoual.com",72],["hotel-restaurant-pau.com",72],["desrayaud-paysagistes.com",72],["hotelsaintcharles.fr",72],["agvillagecamarguais.com",72],["joyella.com",72],["gabriel-godard.com",72],["artech-sellerie.com",72],["motoclubernee.com",72],["ledauphinhotel.com",72],["cuisin-studio.com",72],["biomeo-environnement.com",72],["leman-instruments.com",72],["esthetique-meyerbeer.com",72],["institut-bio-naturel-nice.fr",72],["nature-et-bois.fr",72],["transmissions-bordeaux.com",72],["kinechartreuse.com",72],["corsegourmande.com",72],["cotedecor.com",72],["restaurant-la-badiane.fr",72],["systelia.fr",72],["lesjardinsinterieurs.com",72],["helenevue.com",72],["saubusse-thermes.com",72],["dehn.es",73],["dehn.fr",73],["dehn.it",73],["dehn.hu",73],["desitek.dk",73],["dehn.at",73],["dehn.de",73],["wwz.ch",74],["inyova.at",75],["inyova.ch",75],["inyova.de",75],["ccalbacenter.com",75],["wamu.org",75],["momentive.com",76],["kennedyslaw.com",77],["elekta.com",78],["ige.ch",79],["stratasysdirect.com",80],["stratasys.com",80],["werkenbijkruidvat.nl",81],["ghacks.net",82],["cutoff.es",83],["whyopencomputing.com",83],["mbanc.com",84],["dentalgalindo.com",[85,86]],["archeologia.com.pl",[85,86]],["letrayframe.com",[85,86]],["osteofisintegral.es",[85,86]],["uco.cat",[85,86]],["buecheler-kollegen.de",[85,86]],["seminariodeosma-soria.org",[85,86]],["kamensenica.sk",[85,86]],["movimentoofficinedelsud.it",[85,86]],["trident.se",[85,86]],["semanasantademalagaayeryhoy.com",[85,86]],["diazfloristasestrella.com",[85,86]],["cosechavida.com",[85,86]],["broncoillustration.com",[85,86]],["sumoingenio.com",[85,86]],["aligepro.es",[85,86]],["muevo.es",[85,86]],["azulejosacedo.com",[85,86]],["sana.cz",[85,86]],["aliapinto.com",[85,86]],["tsconline.es",[85,86]],["polifast.it",[85,86]],["napos.cz",[85,86]],["gutshaus-neuendorf-usedom.de",[85,86]],["kunterbunte-kinder.de",[85,86]],["desatando.org",[85,86]],["ledocom.cz",[85,86]],["aliciasuarez.net",[85,86]],["diabramar.com",[85,86]],["lamagnalonga.org",[85,86]],["benejamrefrigeracion.com",[85,86]],["micropigmentacioncapilarbcn.com",[85,86]],["arcusnet.se",[85,86]],["videogenic.es",[85,86]],["grundschule-remagen.de",[85,86]],["aceitessatunion.com",[85,86]],["servigraphic.com.ar",[85,86]],["textsteine.de",[85,86]],["campergarage.es",[85,86]],["administradorfincasblog.com",[85,86]],["balgal.es",[85,86]],["grafika-dtp-produkcia.sk",[85,86]],["unmardeconstelaciones.com",[85,86]],["salobella.com",[85,86]],["careon.se",[85,86]],["gymnosport.com",[85,86]],["easyhomes.com.es",[85,86]],["casavaledalama.pt",[85,86]],["dosc.es",[85,86]],["fcfoz.pt",[85,86]],["berevolk.com",[85,86]],["hvpropertyclearance.co.uk",[85,86]],["calamo.se",[85,86]],["elserratplanoles.com",[85,86]],["bubblessea.es",[85,86]],["disperator.se",[85,86]],["ecoparquets.com",[85,86]],["zlotaraczkalublin.pl",[85,86]],["congresoscostadelsol.com",[85,86]],["pneumaticiroma.it",[85,86]],["asprona.es",[85,86]],["virgendefatima.es",[85,86]],["patronatpremia.cat",[85,86]],["2points13.fr",[85,86]],["3d3.es",[85,86]],["abantos.es",[85,86]],["abastanimacio.org",[85,86]],["academiafrancesadebelleza.co",[85,86]],["acaluca.org",[85,86]],["acce.es",[85,86]],["ad-particles.com",[85,86]],["adea.sk",[85,86]],["afplr.fr",[85,86]],["agiletalon.fr",[85,86]],["agiratou.com",[85,86]],["aidaromero.com",[85,86]],["alkoholochnarkotika.se",[85,86]],["alligatorbioscience.se",[85,86]],["anea.es",[85,86]],["animala.es",[85,86]],["apimadrid.net",[85,86]],["aquatrend.sk",[85,86]],["arabesque-formation.org",[85,86]],["arrivamallorca.es",[85,86]],["asapservicios.net",[85,86]],["aspock.com",[85,86]],["atout-voyages.com",[85,86]],["autocareslazara.es",[85,86]],["autocaresmariano.com",[85,86]],["autoform.pl",[85,86]],["ayudatranspersonal.com",[85,86]],["bacabeton.cz",[85,86]],["begalvi.com",[85,86]],["bent-com.com",[85,86]],["berliner-haeuser.de",[85,86]],["bespokespain.com",[85,86]],["bevent-rasch.se",[85,86]],["bio-cord.es",[85,86]],["biotropica.fr",[85,86]],["bornes-eurorelais.fr",[85,86]],["braeu-stueble.de",[85,86]],["brendanoharamp.scot",[85,86]],["briau.com",[85,86]],["caleulalia.com",[85,86]],["cande-sur-beuvron.com",[85,86]],["carlhag.se",[85,86]],["carrier.se",[85,86]],["casadelaveiga.com",[85,86]],["caytas.com.tr",[85,86]],["cecjecuador.org.ec",[85,86]],["cegef.com",[85,86]],["centrediagonal.com",[85,86]],["centropolisportivomassari.it",[85,86]],["cerai.org",[85,86]],["cervosgrup.com",[85,86]],["chimeneasalicante.com",[85,86]],["cliatec.com",[85,86]],["clinicabadal.es",[85,86]],["cometh-consulting.com",[85,86]],["copysud.fr",[85,86]],["cortilar.com",[85,86]],["crystal-finance.com",[85,86]],["ctangana.com",[85,86]],["cugatresidencial.com",[85,86]],["dake.es",[85,86]],["datatal.se",[85,86]],["degom.com",[85,86]],["delfis.es",[85,86]],["delogica.com",[85,86]],["dentalcompany.es",[85,86]],["descarpack.com.br",[85,86]],["desfiladeroediciones.com",[85,86]],["desomer.be",[85,86]],["diarioandalucia.es",[85,86]],["dibujos-animados.net",[85,86]],["direkt-immobilie.de",[85,86]],["dovozautznemecka.cz",[85,86]],["drpuigdollers.com",[85,86]],["dunamys.inf.br",[85,86]],["easyimplantology.com",[85,86]],["eb2b.com.pl",[85,86]],["echo-mieszkania.pl",[85,86]],["eclinic.com.sg",[85,86]],["edgeict.com",[85,86]],["eiglaw.com",[85,86]],["elandexpediciones.es",[85,86]],["emalec.com",[85,86]],["enlighten.net",[85,86]],["equifab.es",[85,86]],["escuelanauticamarenostrum.com",[85,86]],["esgrima.cat",[85,86]],["espaisperconviure.es",[85,86]],["etbygg.com",[85,86]],["eurepieces.fr",[85,86]],["euroenvio.com",[85,86]],["eurotex.es",[85,86]],["expertetfinance.fr",[85,86]],["farmarsketrhyfuturum.cz",[85,86]],["fastvisa.fr",[85,86]],["fauxdiplomes.org",[85,86]],["fisiolistic.com",[85,86]],["fondazionealbertosordi.it",[85,86]],["foyersekcjapolska.eu",[85,86]],["fundacjaeds.pl",[85,86]],["galeriaxanadu.pl",[85,86]],["garcia-ibanez.com",[85,86]],["gestenaval.com",[85,86]],["glaskogen.se",[85,86]],["globalteam.es",[85,86]],["goia.org.pl",[85,86]],["granibier.com",[85,86]],["grundia.se",[85,86]],["grupoisn.com",[85,86]],["gruporhzaragoza.com",[85,86]],["hagagruppen.se",[85,86]],["halima-magazin.com",[85,86]],["handelskammaren.com",[85,86]],["helitecnics.com",[85,86]],["helux.se",[85,86]],["hermanosalcaraz.com",[85,86]],["hjarnkoll.se",[85,86]],["hmfoundation.com",[85,86]],["hormimpres.com",[85,86]],["hoteldeprony.fr",[85,86]],["hotelroyalcatania.it",[85,86]],["houjethai.nl",[85,86]],["hummer.cz",[85,86]],["icld.se",[85,86]],["ict-project.it",[85,86]],["imprentalaspalmas.com",[85,86]],["informamiele.it",[85,86]],["inission.com",[85,86]],["inmobiliariavolga.com",[85,86]],["international-terra-institute.com",[85,86]],["inwaspain.com",[85,86]],["izkigolf.eus",[85,86]],["jdmusic.se",[85,86]],["juveycamps.com",[85,86]],["kaunokapiniuprieziura.lt",[85,86]],["kcmkompresor.com",[85,86]],["kewaccountants.co.uk",[85,86]],["konkretplus.pl",[85,86]],["krajci.cz",[85,86]],["krisvagenut.se",[85,86]],["kyoceracapetown.co.za",[85,86]],["labaguette.pl",[85,86]],["labintegrados.com",[85,86]],["ladderupinc.com",[85,86]],["landskronafoto.org",[85,86]],["langarri.es",[85,86]],["lawa.es",[85,86]],["laxo.se",[85,86]],["layher.se",[85,86]],["lifetraveler.net",[85,86]],["lindrooshalsa.se",[85,86]],["lobolab.es",[85,86]],["maisqueromanicorutas.com",[85,86]],["mallandonoandroid.com",[85,86]],["masconcas.com",[85,86]],["mediabest.cz",[85,86]],["megustaelvino.es",[85,86]],["mensa.se",[85,86]],["mestiteslilis.com",[85,86]],["minutoprint.com",[85,86]],["mirano.cz",[85,86]],["mogador.cz",[85,86]],["morphestudio.es",[85,86]],["motoaxial.com",[85,86]],["multiversidad.es",[85,86]],["mundollaves.com",[85,86]],["musicotherapie-federationfrancaise.com",[85,86]],["nauticaravaning.com",[85,86]],["nestville.sk",[85,86]],["nestvillepark.sk",[85,86]],["netromsoftware.ro",[85,86]],["nojesfabriken.se",[85,86]],["oddoneout.se",[85,86]],["opako.pl",[85,86]],["oserlafrique.com",[85,86]],["paintballalcorcon.com",[85,86]],["pallejabcn.com",[85,86]],["penicilinafruits.com",[85,86]],["peregrinoslh.com",[85,86]],["permis-lausanne.ch",[85,86]],["pernillaandersson.se",[85,86]],["piazzadelgusto.it",[85,86]],["pipi-antik.dk",[85,86]],["plasticosgeca.com",[85,86]],["plastimyr.com",[85,86]],["portal.unimes.br",[85,86]],["pro-beruf.de",[85,86]],["prophecyinternational.com",[85,86]],["psicoterapeuta.org",[85,86]],["puertasprieto.com",[85,86]],["puntosdefantasia.es",[85,86]],["pzmk.org.pl",[85,86]],["rastromaquinas.com",[85,86]],["rectoraldecastillon.com",[85,86]],["reinomineral.com",[85,86]],["reklamefreunde.de",[85,86]],["restauranthispania.com",[85,86]],["rubinmedical.dk",[85,86]],["rubinmedical.no",[85,86]],["rubinmedical.se",[85,86]],["sak.se",[85,86]],["sammetais.com.br",[85,86]],["sebastiancurylo.pl",[85,86]],["serigrafiaiorgi.com",[85,86]],["seyart.com",[85,86]],["sgaim.com",[85,86]],["sicamemt.org",[85,86]],["siguealconejoblanco.es",[85,86]],["sinfimasa.com",[85,86]],["skp.se",[85,86]],["skrobczynski.pl",[85,86]],["slush.de",[85,86]],["solebike.it",[85,86]],["solu-watt.fr",[85,86]],["soluzionainmobiliaria.es",[85,86]],["somoparque.com",[85,86]],["sorgingaztemoda.com",[85,86]],["sroportal.sk",[85,86]],["ssmf.se",[85,86]],["stobrasil.com.br",[85,86]],["stoparmut2015.ch",[85,86]],["studiodimuro.com",[85,86]],["subkultur-hannover.de",[85,86]],["sustanciagris.com",[85,86]],["szkt.sk",[85,86]],["tagibergslagen.se",[85,86]],["tallergastronomico.es",[85,86]],["tarna.fhsk.se",[85,86]],["tassenyalitzacio.com",[85,86]],["tctech.se",[85,86]],["teknoduegroup.it",[85,86]],["teloliquido.com",[85,86]],["temasa.es",[85,86]],["textilprint.sk",[85,86]],["thehouseofautomata.com",[85,86]],["tmgernika.com",[85,86]],["toastetmoi.fr",[85,86]],["tollare.org",[85,86]],["triperavigatana.com",[85,86]],["tuckerfranklininsgrp.com",[85,86]],["tuftuf.net",[85,86]],["turuletras.com",[85,86]],["umfmb.fr",[85,86]],["upapsa.com",[85,86]],["valenciatoday.es",[85,86]],["vanghel-und-morawski.de",[85,86]],["vickycan.com",[85,86]],["ville-de-salles.com",[85,86]],["webbigt.se",[85,86]],["westlede.be",[85,86]],["wiemker.org",[85,86]],["woolink.co",[85,86]],["wp.fratgsa.org",[85,86]],["xatobaxestion.com",[85,86]],["xfactor-gmbh.de",[85,86]],["zigmoon.com",[85,86]],["brightdata.com",87],["canyon.com",[88,89]],["drimsim.com",90],["eteam-winkler.de",91],["kdn-elektro.de",91],["elektro-kotz.de",91],["elektro-service-rauh.de",91],["elektroanlagenbuettner.de",91],["be-connect.online",91],["bayergruppe.com",91],["bayer-wkt.de",91],["bayer-wind.de",91],["bayer-wd.de",91],["elektro-joa.de",91],["htechnik.de",91],["ehk-service.de",91],["bittner-tv.de",91],["elektro-suelzner.de",91],["elektro-leps.de",91],["elektromax-hausgeraete.de",91],["elektrotechnik-schedel.de",91],["elkugmbh.de",91],["ln-elektro-gmbh.de",91],["weiss-blau-gmbh.de",91],["sunbeam-energy.de",91],["prokauf.com",91],["lichtstudio-kerl.de",91],["liebing-beese.de",91],["hoeschel-baumann.de",91],["hausgeraete-kraemer.de",91],["gehlhaar-elektrotechnik.de",91],["ehs-elektrotechnik.de",91],["elektrojarschke.de",91],["elektrotechnik-fleischmann.de",91],["elektroseemueller.de",91],["schoerling-blitz.de",91],["ast-apolda.com",91],["elektro-klippel.de",91],["arntz-haustechnik.de",91],["elektro-bindel.de",91],["elektrotechnik-weiss.com",91],["brandschutz-hamburg.de",91],["wagnerelektrotechnik.de",91],["el-kramer.de",91],["mks-hof.de",91],["wernz-elektro.de",91],["e3-energy.de",91],["sg-solar.de",91],["elektrokrebs.de",91],["elektro-roehrl.de",91],["elektro-kreher.de",91],["giegling-vonsaal.de",91],["elektro-lehmann.com",91],["ems-wurzen.de",91],["scholpp.de",92],["scholpp.es",92],["scholpp.pl",92],["scholpp.it",92],["ptc.eu",92],["scholpp.com",92],["abo24.de",92],["overdrive.com",92],["wetu.com",92],["superwatchman.com",93],["bitburger-braugruppe.de",94],["proteincompany.fi",95],["proteinbolaget.se",95],["snoopmedia.com",96],["myguide.de",96],["study-in-germany.de",96],["daad.de",96],["futterhaus.de",97],["scottsofstow.co.uk",[98,99]],["zawszepomorze.pl",100],["wasserkunst-hamburg.de",101],["lta.org.uk",102],["brico-travo.com",103],["panzerfux.de",104],["tvprato.it",105],["liftshare.com",105],["vesely-drak.cz",105],["consordini.com",105],["fitzmuseum.cam.ac.uk",105],["hotdk2023.kre.hu",105],["panwybierak.pl",105],["bomagasinet.dk",105],["miplantaweb.com",105],["electronics.semaf.at",105],["sfd.pl",105],["flota.es",105],["jobs.cz",105],["prace.cz",105],["eninternetgratis.com",105],["unavidadeviaje.com",105],["theateramrand.de",106],["jugend-praesentiert.de",106],["evium.de",107],["epayments.com",108],["riceundspice.de",109],["happysocks.com",[110,111]],["win2day.at",112],["porp.pl",113],["gesundheitsamt-2025.de",114],["coastfashion.com",115],["oasisfashion.com",115],["warehousefashion.com",115],["misspap.com",115],["karenmillen.com",115],["boohooman.com",115],["nebo.app",116],["groupeonepoint.com",117],["edpsciences.org",118],["bemmaisseguro.com",119],["johnmuirhealth.com",120],["scheidegger.nl",121],["transparency.fb.com",[122,123]],["faq.whatsapp.com",123],["blog.whatsapp.com",123],["www.whatsapp.com",123],["phoenix.de",124],["strato.se",125],["strato.de",125],["mishcon.com",126],["bbva.es",128],["bbvauk.com",128],["bbva.be",128],["bbva.fr",128],["bbva.it",128],["bbva.pt",128],["suntech.cz",129],["digikey.co.za",130],["digikey.cn",130],["digikey.ee",130],["digikey.at",130],["digikey.be",130],["digikey.bg",130],["digikey.cz",130],["digikey.dk",130],["digikey.fi",130],["digikey.fr",130],["digikey.de",130],["digikey.gr",130],["digikey.hu",130],["digikey.ie",130],["digikey.it",130],["digikey.lv",130],["digikey.lt",130],["digikey.lu",130],["digikey.nl",130],["digikey.no",130],["digikey.pl",130],["digikey.pt",130],["digikey.ro",130],["digikey.sk",130],["digikey.si",130],["digikey.es",130],["digikey.se",130],["digikey.ch",130],["digikey.co.uk",130],["digikey.co.il",130],["digikey.com.mx",130],["digikey.ca",130],["digikey.com.br",130],["digikey.co.nz",130],["digikey.com.au",130],["digikey.co.th",130],["digikey.tw",130],["digikey.kr",130],["digikey.sg",130],["digikey.ph",130],["digikey.my",130],["digikey.jp",130],["digikey.in",130],["digikey.hk",130],["digikey.com",130],["eurosupps.nl",131],["pathe.nl",132],["makelaarsland.nl",133],["nordania.dk",134],["365direkte.no",134],["danskebank.lv",134],["danskebank.lt",134],["danskebank.no",134],["danskebank.fi",134],["danskebank.dk",134],["danskebank.com",134],["danskebank.se",134],["danskebank.co.uk",134],["danskeci.com",134],["danicapension.dk",134],["gewerbegebiete.de",135],["visti.it",136],["balay.es",137],["constructa.com",137],["gaggenau.com",137],["talksport.com",138],["loudersound.com",138],["impulse.de",138],["pcgamer.com",138],["infoworld.com",138],["kiplinger.com",138],["omni.se",138],["it-times.de",138],["bitcoinmagazine.com",138],["deliciousmagazine.co.uk",138],["upday.com",138],["deutschlandcard.de",138],["szbz.de",138],["free-fonts.com",138],["lieferzeiten.info",138],["vice.com",138],["newsnow.co.uk",138],["out.com",138],["streampicker.de",138],["radiotimes.com",138],["nowtv.com",138],["kochbar.de",138],["toggo.de",138],["am-online.com",138],["n-tv.de",138],["newsandstar.co.uk",138],["tag24.de",138],["weltkunst.de",138],["noveauta.sk",138],["pnn.de",138],["economist.com",138],["crash.net",138],["norwaytoday.info",138],["insider.com",138],["preis.de",138],["ibroxnoise.co.uk",138],["celtsarehere.com",138],["nufcblog.co.uk",138],["sport1.de",138],["techconnect.com",138],["followfollow.com",138],["thespun.com",138],["mazdas247.com",138],["fastcar.co.uk",138],["vitalfootball.co.uk",138],["audi-sport.net",138],["bumble.com",138],["arcamax.com",138],["dilbert.com",138],["givemesport.com",138],["dartsnews.com",138],["gpfans.com",138],["justjared.com",138],["justjaredjr.com",138],["finanzen.at",138],["flights-idealo.co.uk",138],["idealo.com",138],["idealo.se",138],["idealo.nl",138],["idealo.pl",138],["idealo.pt",138],["idealo.fi",138],["idealo.dk",138],["idealo.no",138],["idealo.in",138],["idealo.at",138],["ladenzeile.at",138],["berliner-zeitung.de",138],["urbia.de",138],["essen-und-trinken.de",138],["wetter.de",138],["rtl-living.de",138],["vox.de",138],["ladenzeile.de",138],["advocate.com",138],["idealo.de",138],["wigantoday.net",138],["economistgroup.com",138],["transfermarkt.nl",138],["transfermarkt.es",138],["transfermarkt.pl",138],["transfermarkt.pt",138],["transfermarkt.at",138],["transfermarkt.it",138],["transfermarkt.fr",138],["transfermarkt.de",138],["transfermarkt.be",138],["transfermarkt.co.uk",138],["transfermarkt.us",138],["footballfancast.com",138],["cio.com",138],["jezebel.com",138],["splinternews.com",138],["denofgeek.com",138],["kinja.com",138],["theinventory.com",138],["rollingstone.de",138],["sueddeutsche.de",138],["csoonline.com",138],["tvmovie.de",138],["testberichte.de",138],["pcgameshardware.de",138],["4players.de",138],["guj.de",138],["bild.de",138],["wieistmeineip.de",138],["testbild.de",138],["stylebook.de",138],["skygroup.sky",138],["speisekarte.de",138],["haeuser.de",138],["cmo.com.au",138],["pcworld.co.nz",138],["idealo.it",138],["transfermarkt.jp",138],["transfermarkt.co.id",138],["autoexpress.co.uk",138],["transfermarkt.com",138],["webwinkel.tubantia.nl",138],["shopalike.nl",138],["autoweek.nl",138],["pcworld.es",138],["macworld.es",138],["idealo.es",138],["businessinsider.es",138],["motor.es",138],["autobild.es",138],["driving.co.uk",138],["stern.de",138],["pcgames.de",138],["sport.de",138],["idealo.fr",138],["tori.fi",138],["snow-forecast.com",138],["tidende.dk",138],["kraloyun.com",138],["arnnet.com.au",138],["bunte.de",138],["handelsblatt.com",138],["techbook.de",138],["metal-hammer.de",138],["macworld.co.uk",138],["maxisciences.com",138],["ohmymag.com",138],["voici.fr",138],["geo.de",138],["businessinsider.de",138],["meinestadt.de",138],["politico.eu",138],["spieletipps.de",138],["finanznachrichten.de",138],["vtwonen.nl",138],["stol.it",138],["waitrose.com",139],["storyhouseegmont.dk",140],["storyhouseegmont.no",140],["storyhouseegmont.se",140],["egmont.com",140],["nordiskfilm.com",140]]);

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

uBOL_removeClass();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
