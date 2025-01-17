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

const argsList = [["cookie-consent-active","body","stay"],["cookie-overlay-active","body","stay"],["cookiebanner-body","body","stay"],["cookie-open","body","stay"],["noscroll","body","stay"],["tc-modal-open","body","stay"],["cookie-notice-active","body","stay"],["cookie-overlay","body","stay"],["eu-cookie-compliance-popup-open","body","stay"],["bf-fixed","body","stay"],["cookies-not-set","body","stay"],["js-cookie-consent-popup","","stay"],["ivass-no-cookie","body","stay"],["cookie-popup-visible","body","stay"],["idgcp__layer--active","html","stay"],["cc-scrolling-disabled","body","stay"],["modal-open","body","stay"],["hasPopup","body","stay"],["darker","body","stay"],["scommerce-gdpr-disabled","div","stay"],["no-scroll","html","stay"],["compensate-for-scrollbar","body","stay"],["gdpr-shown","body","stay"],["cookie-consent__wrapper","div","stay"],["cookies-request","body","stay"],["cx-modal-open","html","stay"],["cx-no-scroll","html","stay"],["e-cookie-bar-open","body","stay"],["no-consent","html","stay"],["is-blurred-cookiebox","html","stay"],["ccpaCookieBanner-acceptedAll","body","stay"],["cookies-show",".cookies-show","stay"],["disable-background","body","stay"],["cookie--not-set","body","stay"],["_cookiebanner","body","stay"],["async-hide","html","stay"],["ntd-gdpr-no-scroll","body","stay"],["modal-background","div","stay"],["pef-no-cookie","body","stay"],["cookie-not-accepted","body","stay"],["c-body--locked-always","body","stay"],["global-cookie","div","stay"],["disable-scroll","","stay"],["bg-gray","div","stay"],["cookie-active","body","stay"],["ccm-blocked","html","stay"],["ccm-blocked","body","stay"],["is-modal-cookies-visible","body","stay"],["layerActive","","stay"],["cookiebar-open","body","stay"],["blur","body","stay"],["cookie","","stay"],["cookieconsent-active","body","stay"],["cookieMsg","","stay"],["cookie_consent__alert","","stay"],["gdpr-cookie-notice-center-loaded","","stay"],["has-open-cookie","","stay"],["om_cookie_active","","stay"],["tvp-cookie-scroll-lock","","stay"],["cookie-overlay","","stay"],["disable","div","stay"],["prevent-scroll","","stay"],["fog","","stay"],["cookie-hint","","stay"],["dp--cookie-consent","body","stay"],["body-overlay-scrollable","","stay"],["modal-open","","stay"],["no-scroll","body","stay"],["show-cookie-consent","","stay"],["is-active-cookiebar","","stay"],["has-banner","body.has-banner","stay"],["pointerevents","","stay"],["cookie-accept-required","","stay"],["cookie-open","","stay"],["cookiePopupVisible","","stay"],["unreadable-display","","stay"],["mandatory_cookie_modal","","stay"],["wwzoverlay--open","","stay"],["gdpr-infobar-visible","","stay"],["cookie-enabled","","stay"],["cookie-overlay--open","","stay"],["cookie-banner-open","","stay"],["cookie-banner-active","body","stay"],["overlay-content","body","stay"],["is-active-cookiebar","body","stay"],["didomi-popup-open","body"],["idxrcookies-block-user-nav","body","stay"],["ccpa-banner","","stay"],["modal-cacsp-open","","stay"],["modal-cacsp-box","","stay"],["cookiebanner","body","stay"],["brd_cookies_bar_popup_shown","html","stay"],["js-modalUnclosable","","stay"],["js-cookiesModal|is-open",".js-cookiesModal,.is-open"],["remodal-bg","","stay"],["cookie-warning-open","","stay"],["with-featherlight","","stay"],["cookies-shown","body","stay"],["no-cookie","","stay"],["wcc-popup-overflow","body","stay"],["dimmeractive","body","stay"],["snoop-modal-open","body","stay"],["is-blurred-cookiebox","","stay"],["consent-manager--popup","body","stay"],["consent-manager-open","body","stay"],["zp-gtm-scripts--blur","","stay"],["dots","","stay"],["cookies-modal-open","","stay"],["overlay","body","stay"],["with-dark","","stay"],["show--consent","body","stay"],["messages-active","","stay"],["cdk-overlay-container","","stay"],["b-dialog","","stay"],["disabled","body","stay"],["lock-scroll","","stay"],["disabled","header","stay"],["cookie-not-accepted-overlay","","stay"],["blurred-page","","stay"],["cookie-consent--present","","stay"],["header-gdrp-cookies-visible","","stay"],["fixed","","stay"],["noScroll","","stay"],["cookie_notification","","stay"],["blocked-body","body","stay"],["popup","div","stay"],["has-no-scroll","","stay"],["_31e","div","stay"],["hasCookieBanner","body","stay"],["blured","","stay"],["has-overlay","","stay"],["cookie-consent-is-active","body","stay"],["cookiesgdpr__scroll","","stay"],["modal-show","","stay"],["gdpr","","stay"],["cookieopened","body","stay"],["cookiewall-active","body","stay"],["is-cookie-notice","body","stay"],["cookie-consent-banner-open","html","stay"],["modal-overlay","","stay"],["blur","","stay"],["cookielaw-blur-background","","stay"],["sp-message-open","html","stay"],["modalOpen___gZykv","body"],["cookie-bar","","stay"]];

const hostnamesMap = new Map([["winparts.be",0],["winparts.eu",0],["winparts.fr",0],["winparts.ie",0],["winparts.nl",0],["winparts.se",0],["sportano.sk",1],["sportano.de",1],["sportano.bg",1],["sportano.hu",1],["sportano.ro",1],["sportano.cz",1],["klinik-am-ring.de",2],["seswater.co.uk",3],["strato.se",4],["strato.de",4],["galerieslafayette.com",5],["ooekultur.at",6],["igmetall.de",7],["universalgeneve.com",8],["hostfly.by",9],["quantamagazine.org",[10,39]],["rappjmed.ch",10],["osprey.com",11],["ivass.it",12],["onelottery.co.uk",13],["yourschoollottery.co.uk",13],["rainbowlottery.co.uk",13],["idg.se",14],["gearaid.com",15],["buildex.cz",16],["norskfamilie.no",16],["gruenderservice.at",17],["caiacosmetics.com",18],["pdc-big.nl",19],["pdc-big.it",19],["pdc-big.ie",19],["pdc-big.fr",19],["pdc-big.es",19],["pdc-big.be",19],["pdc-big.at",19],["pdc-big.co.uk",19],["pdc-big.de",19],["pdc-big.com",19],["elio-systems.io",[20,27]],["sanha.com",[20,27]],["recettesetcabas.com",21],["flinders.edu.au",22],["opera.com",23],["groningenairport.nl",24],["crocs.co.uk",[25,26]],["crocs.eu",[25,26]],["crocs.nl",[25,26]],["crocs.fi",[25,26]],["crocs.fr",[25,26]],["crocs.de",[25,26]],["stilord.fr",28],["stilord.it",28],["stilord.de",28],["stilord.es",28],["dasfutterhaus.at",29],["developer.paypal.com",30],["cpc2r.ch",31],["zen.com",32],["tecsafe.de",33],["foxracingshox.de",33],["stromnetz.berlin",34],["websummit.com",35],["thehustle.co",35],["epochtimes.fr",36],["ajbell.co.uk",37],["economiapertutti.bancaditalia.it",38],["tradersunion.com",39],["phsgreenleaf.co.uk",40],["phswashrooms.ie",40],["mccolls.co.uk",[41,42]],["crt.hr",43],["yourstorebox.com",44],["clickskeks.at",[45,46]],["housell.com",47],["lactostop.de",48],["mibe.de",48],["spilger.de",49],["dbs.si",50],["abcya.com",51],["umicore.be",52],["umicore.fi",52],["umicore.ca",52],["jongcdenv.be",52],["umicore.jp",52],["umicore.cn",52],["umicore.pl",52],["umicore.kr",52],["umicore.co.th",52],["umicore.fr",52],["umicore.de",52],["donneurdecellulessouches.be",52],["stammzellenspender.be",52],["stemcelldonor.be",52],["umicore.com",52],["umicore.com.br",52],["koenvandenheuvel.be",52],["stamceldonor.be",52],["nahima.be",52],["catused.com",53],["eujuicers.cz",54],["graziellawicki.com",55],["funnelcockpit.com",55],["dnk.nl",56],["eam.de",57],["eam-netz.de",57],["tvp.pl",58],["cellardoor.co",59],["ampire.de",60],["verpackungsstadl.ch",60],["imkershoperzgebirge.de",60],["modellbahndealer.de",60],["tillit-bikes.shop",60],["bike-onlineshop.de",60],["futspo.de",60],["compravo.de",60],["perpedale.de",60],["modellbau-jung.de",60],["verpackungsstadl.at",60],["modellbau-vordermaier.de",60],["bike-supply.de",60],["wroc.pl",61],["basenio.de",62],["fm-systeme.de",63],["gartenhotel-crystal.at",64],["swffm.de",64],["studentenwerkfrankfurt.de",64],["dmsg.de",64],["bgk.pl",64],["pflegezeit-berlin.de",64],["gpd-nordost-onlineberatung.de",64],["proabschluss-beratung.de",64],["hilfe-telefon-missbrauch.online",64],["dww-suchtberatung.de",64],["cyberforum.de",64],["gutscheine.eurothermen.at",64],["wolff-mueller.de",64],["ras.bz.it",64],["technoalpin.com",64],["wifiwien.at",[65,66]],["wifikaernten.at",[65,66]],["wifi.at",[65,66]],["pdf-archive.com",66],["5asec.pt",67],["tui.dk",67],["tui.fi",67],["tui.no",67],["tui.se",67],["istore.co.za",67],["salvagny.org",67],["leslipfrancais.fr",67],["rb-os.de",[67,131]],["volksbank-mittweida.de",[67,131]],["wvb.de",[67,131]],["bremischevb.de",[67,131]],["meinebank.de",[67,131]],["vb-rb.de",[67,131]],["gladbacher-bank.de",[67,131]],["vrbank-in-thueringen.de",[67,131]],["bodenseebank.de",[67,131]],["rb-oberaudorf.de",[67,131]],["volksbank-trossingen.de",[67,131]],["owl-immobilien.de",[67,131]],["volksbank-backnang.de",[67,131]],["volksbank-international.de",[67,131]],["raiba-westhausen.de",[67,131]],["vr-nopf.cz",[67,131]],["vrbankimmobilien.de",[67,131]],["cvw-privatbank-ag.de",[67,131]],["rb-denzlingen-sexau.de",[67,131]],["rv-banken.de",[67,131]],["volksbank-remseck.de",[67,131]],["raiba-gr.de",[67,131]],["vrb-spangenberg.de",[67,131]],["rb-berghuelen.de",[67,131]],["vb-lauterecken.de",[67,131]],["rb-sondelfingen.de",[67,131]],["voba-deisslingen.de",[67,131]],["rb-hardt-bruhrain.de",[67,131]],["volksbank-daaden.de",[67,131]],["dervolksbanker.de",[67,131]],["vb-kirnau-krautheim.de",[67,131]],["skbwitten.de",[67,131]],["raiba-ndwa.de",[67,131]],["volksbank-mittleres-erzgebirge.de",[67,131]],["rb-eching.de",[67,131]],["volksbank-aktiv.de",[67,131]],["vbsuedemsland.de",[67,131]],["voba-moeckmuehl.de",[67,131]],["volksbank-freiburg.de",[67,131]],["vbleos.de",[67,131]],["meine-rvb.de",[67,131]],["aachener-bank.de",[67,131]],["muenchner-bank.de",[67,131]],["volksbank-dh.de",[67,131]],["volksbankeg.de",[67,131]],["sparda-bank-hamburg.de",[67,131]],["sparda-sw.de",[67,131]],["volksbank-thueringen-mitte.de",[67,131]],["vrbankeg.de",[67,131]],["bernhauser-bank.de",[67,131]],["vvrbank-krp.de",[67,131]],["vvr-bank.de",[67,131]],["vb-mittelhessen.de",[67,131]],["vr-bayernmitte.de",[67,131]],["vobadhk.de",[67,131]],["rheingauer-volksbank.de",[67,131]],["dovoba.de",[67,131]],["vr-dachau.de",[67,131]],["kd-bank.de",[67,131]],["volksbank-hochrhein.de",[67,131]],["pollfish.com",68],["werkenbijtrekpleister.nl",69],["werkenbijkruidvat.be",69],["rassenlijst.info",69],["werkenbijiciparisxl.nl",69],["flightradar24.com",70],["apk-vk.at",71],["vietnamairlines.com",72],["incotec.com",73],["croda.com",73],["exaktafoto.se",74],["campingdusoleil.com",75],["hotel-la-chaumiere.com",75],["les-anges-gardiens.fr",75],["croco-kid.com",75],["cambridge-centre.fr",75],["equisud.com",75],["allokebab-pau.fr",75],["etre-visible.local.fr",75],["mas-montebello66.com",75],["camping-residentiel-les-marronniers-jura.fr",75],["dj4events.fr",75],["saintjoursexpertmaritime.com",75],["az-renovation.fr",75],["presquilemultiservices.com",75],["hotel-aigoual.com",75],["hotel-restaurant-pau.com",75],["desrayaud-paysagistes.com",75],["hotelsaintcharles.fr",75],["agvillagecamarguais.com",75],["joyella.com",75],["gabriel-godard.com",75],["artech-sellerie.com",75],["motoclubernee.com",75],["ledauphinhotel.com",75],["cuisin-studio.com",75],["biomeo-environnement.com",75],["leman-instruments.com",75],["esthetique-meyerbeer.com",75],["institut-bio-naturel-nice.fr",75],["nature-et-bois.fr",75],["transmissions-bordeaux.com",75],["kinechartreuse.com",75],["corsegourmande.com",75],["cotedecor.com",75],["restaurant-la-badiane.fr",75],["systelia.fr",75],["lesjardinsinterieurs.com",75],["helenevue.com",75],["saubusse-thermes.com",75],["dehn.es",76],["dehn.fr",76],["dehn.it",76],["dehn.hu",76],["desitek.dk",76],["dehn.at",76],["dehn.de",76],["wwz.ch",77],["inyova.at",78],["inyova.ch",78],["inyova.de",78],["ccalbacenter.com",78],["wamu.org",78],["momentive.com",79],["kennedyslaw.com",80],["elekta.com",81],["ige.ch",82],["stratasysdirect.com",83],["stratasys.com",83],["werkenbijkruidvat.nl",84],["ghacks.net",85],["cutoff.es",86],["whyopencomputing.com",86],["mbanc.com",87],["dentalgalindo.com",[88,89]],["archeologia.com.pl",[88,89]],["letrayframe.com",[88,89]],["osteofisintegral.es",[88,89]],["uco.cat",[88,89]],["buecheler-kollegen.de",[88,89]],["seminariodeosma-soria.org",[88,89]],["kamensenica.sk",[88,89]],["movimentoofficinedelsud.it",[88,89]],["trident.se",[88,89]],["semanasantademalagaayeryhoy.com",[88,89]],["diazfloristasestrella.com",[88,89]],["cosechavida.com",[88,89]],["broncoillustration.com",[88,89]],["sumoingenio.com",[88,89]],["aligepro.es",[88,89]],["muevo.es",[88,89]],["azulejosacedo.com",[88,89]],["sana.cz",[88,89]],["aliapinto.com",[88,89]],["tsconline.es",[88,89]],["polifast.it",[88,89]],["napos.cz",[88,89]],["gutshaus-neuendorf-usedom.de",[88,89]],["kunterbunte-kinder.de",[88,89]],["desatando.org",[88,89]],["ledocom.cz",[88,89]],["aliciasuarez.net",[88,89]],["diabramar.com",[88,89]],["lamagnalonga.org",[88,89]],["benejamrefrigeracion.com",[88,89]],["micropigmentacioncapilarbcn.com",[88,89]],["arcusnet.se",[88,89]],["videogenic.es",[88,89]],["grundschule-remagen.de",[88,89]],["aceitessatunion.com",[88,89]],["servigraphic.com.ar",[88,89]],["textsteine.de",[88,89]],["campergarage.es",[88,89]],["administradorfincasblog.com",[88,89]],["balgal.es",[88,89]],["grafika-dtp-produkcia.sk",[88,89]],["unmardeconstelaciones.com",[88,89]],["salobella.com",[88,89]],["careon.se",[88,89]],["gymnosport.com",[88,89]],["easyhomes.com.es",[88,89]],["casavaledalama.pt",[88,89]],["dosc.es",[88,89]],["fcfoz.pt",[88,89]],["berevolk.com",[88,89]],["hvpropertyclearance.co.uk",[88,89]],["calamo.se",[88,89]],["elserratplanoles.com",[88,89]],["bubblessea.es",[88,89]],["disperator.se",[88,89]],["ecoparquets.com",[88,89]],["zlotaraczkalublin.pl",[88,89]],["congresoscostadelsol.com",[88,89]],["pneumaticiroma.it",[88,89]],["asprona.es",[88,89]],["virgendefatima.es",[88,89]],["patronatpremia.cat",[88,89]],["2points13.fr",[88,89]],["3d3.es",[88,89]],["abantos.es",[88,89]],["abastanimacio.org",[88,89]],["academiafrancesadebelleza.co",[88,89]],["acaluca.org",[88,89]],["acce.es",[88,89]],["ad-particles.com",[88,89]],["adea.sk",[88,89]],["afplr.fr",[88,89]],["agiletalon.fr",[88,89]],["agiratou.com",[88,89]],["aidaromero.com",[88,89]],["alkoholochnarkotika.se",[88,89]],["alligatorbioscience.se",[88,89]],["anea.es",[88,89]],["animala.es",[88,89]],["apimadrid.net",[88,89]],["aquatrend.sk",[88,89]],["arabesque-formation.org",[88,89]],["arrivamallorca.es",[88,89]],["asapservicios.net",[88,89]],["aspock.com",[88,89]],["atout-voyages.com",[88,89]],["autocareslazara.es",[88,89]],["autocaresmariano.com",[88,89]],["autoform.pl",[88,89]],["ayudatranspersonal.com",[88,89]],["bacabeton.cz",[88,89]],["begalvi.com",[88,89]],["bent-com.com",[88,89]],["berliner-haeuser.de",[88,89]],["bespokespain.com",[88,89]],["bevent-rasch.se",[88,89]],["bio-cord.es",[88,89]],["biotropica.fr",[88,89]],["bornes-eurorelais.fr",[88,89]],["braeu-stueble.de",[88,89]],["brendanoharamp.scot",[88,89]],["briau.com",[88,89]],["caleulalia.com",[88,89]],["cande-sur-beuvron.com",[88,89]],["carlhag.se",[88,89]],["carrier.se",[88,89]],["casadelaveiga.com",[88,89]],["caytas.com.tr",[88,89]],["cecjecuador.org.ec",[88,89]],["cegef.com",[88,89]],["centrediagonal.com",[88,89]],["centropolisportivomassari.it",[88,89]],["cerai.org",[88,89]],["cervosgrup.com",[88,89]],["chimeneasalicante.com",[88,89]],["cliatec.com",[88,89]],["clinicabadal.es",[88,89]],["cometh-consulting.com",[88,89]],["copysud.fr",[88,89]],["cortilar.com",[88,89]],["crystal-finance.com",[88,89]],["ctangana.com",[88,89]],["cugatresidencial.com",[88,89]],["dake.es",[88,89]],["datatal.se",[88,89]],["degom.com",[88,89]],["delfis.es",[88,89]],["delogica.com",[88,89]],["dentalcompany.es",[88,89]],["descarpack.com.br",[88,89]],["desfiladeroediciones.com",[88,89]],["desomer.be",[88,89]],["diarioandalucia.es",[88,89]],["dibujos-animados.net",[88,89]],["direkt-immobilie.de",[88,89]],["dovozautznemecka.cz",[88,89]],["drpuigdollers.com",[88,89]],["dunamys.inf.br",[88,89]],["easyimplantology.com",[88,89]],["eb2b.com.pl",[88,89]],["echo-mieszkania.pl",[88,89]],["eclinic.com.sg",[88,89]],["edgeict.com",[88,89]],["eiglaw.com",[88,89]],["elandexpediciones.es",[88,89]],["emalec.com",[88,89]],["enlighten.net",[88,89]],["equifab.es",[88,89]],["escuelanauticamarenostrum.com",[88,89]],["esgrima.cat",[88,89]],["espaisperconviure.es",[88,89]],["etbygg.com",[88,89]],["eurepieces.fr",[88,89]],["euroenvio.com",[88,89]],["eurotex.es",[88,89]],["expertetfinance.fr",[88,89]],["farmarsketrhyfuturum.cz",[88,89]],["fastvisa.fr",[88,89]],["fauxdiplomes.org",[88,89]],["fisiolistic.com",[88,89]],["fondazionealbertosordi.it",[88,89]],["foyersekcjapolska.eu",[88,89]],["fundacjaeds.pl",[88,89]],["galeriaxanadu.pl",[88,89]],["garcia-ibanez.com",[88,89]],["gestenaval.com",[88,89]],["glaskogen.se",[88,89]],["globalteam.es",[88,89]],["goia.org.pl",[88,89]],["granibier.com",[88,89]],["grundia.se",[88,89]],["grupoisn.com",[88,89]],["gruporhzaragoza.com",[88,89]],["hagagruppen.se",[88,89]],["halima-magazin.com",[88,89]],["handelskammaren.com",[88,89]],["helitecnics.com",[88,89]],["helux.se",[88,89]],["hermanosalcaraz.com",[88,89]],["hjarnkoll.se",[88,89]],["hmfoundation.com",[88,89]],["hormimpres.com",[88,89]],["hoteldeprony.fr",[88,89]],["hotelroyalcatania.it",[88,89]],["houjethai.nl",[88,89]],["hummer.cz",[88,89]],["icld.se",[88,89]],["ict-project.it",[88,89]],["imprentalaspalmas.com",[88,89]],["informamiele.it",[88,89]],["inission.com",[88,89]],["inmobiliariavolga.com",[88,89]],["international-terra-institute.com",[88,89]],["inwaspain.com",[88,89]],["izkigolf.eus",[88,89]],["jdmusic.se",[88,89]],["juveycamps.com",[88,89]],["kaunokapiniuprieziura.lt",[88,89]],["kcmkompresor.com",[88,89]],["kewaccountants.co.uk",[88,89]],["konkretplus.pl",[88,89]],["krajci.cz",[88,89]],["krisvagenut.se",[88,89]],["kyoceracapetown.co.za",[88,89]],["labaguette.pl",[88,89]],["labintegrados.com",[88,89]],["ladderupinc.com",[88,89]],["landskronafoto.org",[88,89]],["langarri.es",[88,89]],["lawa.es",[88,89]],["laxo.se",[88,89]],["layher.se",[88,89]],["lifetraveler.net",[88,89]],["lindrooshalsa.se",[88,89]],["lobolab.es",[88,89]],["maisqueromanicorutas.com",[88,89]],["mallandonoandroid.com",[88,89]],["masconcas.com",[88,89]],["mediabest.cz",[88,89]],["megustaelvino.es",[88,89]],["mensa.se",[88,89]],["mestiteslilis.com",[88,89]],["minutoprint.com",[88,89]],["mirano.cz",[88,89]],["mogador.cz",[88,89]],["morphestudio.es",[88,89]],["motoaxial.com",[88,89]],["multiversidad.es",[88,89]],["mundollaves.com",[88,89]],["musicotherapie-federationfrancaise.com",[88,89]],["nauticaravaning.com",[88,89]],["nestville.sk",[88,89]],["nestvillepark.sk",[88,89]],["netromsoftware.ro",[88,89]],["nojesfabriken.se",[88,89]],["oddoneout.se",[88,89]],["opako.pl",[88,89]],["oserlafrique.com",[88,89]],["paintballalcorcon.com",[88,89]],["pallejabcn.com",[88,89]],["penicilinafruits.com",[88,89]],["peregrinoslh.com",[88,89]],["permis-lausanne.ch",[88,89]],["pernillaandersson.se",[88,89]],["piazzadelgusto.it",[88,89]],["pipi-antik.dk",[88,89]],["plasticosgeca.com",[88,89]],["plastimyr.com",[88,89]],["portal.unimes.br",[88,89]],["pro-beruf.de",[88,89]],["prophecyinternational.com",[88,89]],["psicoterapeuta.org",[88,89]],["puertasprieto.com",[88,89]],["puntosdefantasia.es",[88,89]],["pzmk.org.pl",[88,89]],["rastromaquinas.com",[88,89]],["rectoraldecastillon.com",[88,89]],["reinomineral.com",[88,89]],["reklamefreunde.de",[88,89]],["restauranthispania.com",[88,89]],["rubinmedical.dk",[88,89]],["rubinmedical.no",[88,89]],["rubinmedical.se",[88,89]],["sak.se",[88,89]],["sammetais.com.br",[88,89]],["sebastiancurylo.pl",[88,89]],["serigrafiaiorgi.com",[88,89]],["seyart.com",[88,89]],["sgaim.com",[88,89]],["sicamemt.org",[88,89]],["siguealconejoblanco.es",[88,89]],["sinfimasa.com",[88,89]],["skp.se",[88,89]],["skrobczynski.pl",[88,89]],["slush.de",[88,89]],["solebike.it",[88,89]],["solu-watt.fr",[88,89]],["soluzionainmobiliaria.es",[88,89]],["somoparque.com",[88,89]],["sorgingaztemoda.com",[88,89]],["sroportal.sk",[88,89]],["ssmf.se",[88,89]],["stobrasil.com.br",[88,89]],["stoparmut2015.ch",[88,89]],["studiodimuro.com",[88,89]],["subkultur-hannover.de",[88,89]],["sustanciagris.com",[88,89]],["szkt.sk",[88,89]],["tagibergslagen.se",[88,89]],["tallergastronomico.es",[88,89]],["tarna.fhsk.se",[88,89]],["tassenyalitzacio.com",[88,89]],["tctech.se",[88,89]],["teknoduegroup.it",[88,89]],["teloliquido.com",[88,89]],["temasa.es",[88,89]],["textilprint.sk",[88,89]],["thehouseofautomata.com",[88,89]],["tmgernika.com",[88,89]],["toastetmoi.fr",[88,89]],["tollare.org",[88,89]],["triperavigatana.com",[88,89]],["tuckerfranklininsgrp.com",[88,89]],["tuftuf.net",[88,89]],["turuletras.com",[88,89]],["umfmb.fr",[88,89]],["upapsa.com",[88,89]],["valenciatoday.es",[88,89]],["vanghel-und-morawski.de",[88,89]],["vickycan.com",[88,89]],["ville-de-salles.com",[88,89]],["webbigt.se",[88,89]],["westlede.be",[88,89]],["wiemker.org",[88,89]],["woolink.co",[88,89]],["wp.fratgsa.org",[88,89]],["xatobaxestion.com",[88,89]],["xfactor-gmbh.de",[88,89]],["zigmoon.com",[88,89]],["birenbach.de",90],["brightdata.com",91],["canyon.com",[92,93]],["drimsim.com",94],["eteam-winkler.de",95],["kdn-elektro.de",95],["elektro-kotz.de",95],["elektro-service-rauh.de",95],["elektroanlagenbuettner.de",95],["be-connect.online",95],["bayergruppe.com",95],["bayer-wkt.de",95],["bayer-wind.de",95],["bayer-wd.de",95],["elektro-joa.de",95],["htechnik.de",95],["ehk-service.de",95],["bittner-tv.de",95],["elektro-suelzner.de",95],["elektro-leps.de",95],["elektromax-hausgeraete.de",95],["elektrotechnik-schedel.de",95],["elkugmbh.de",95],["ln-elektro-gmbh.de",95],["weiss-blau-gmbh.de",95],["sunbeam-energy.de",95],["prokauf.com",95],["lichtstudio-kerl.de",95],["liebing-beese.de",95],["hoeschel-baumann.de",95],["hausgeraete-kraemer.de",95],["gehlhaar-elektrotechnik.de",95],["ehs-elektrotechnik.de",95],["elektrojarschke.de",95],["elektrotechnik-fleischmann.de",95],["elektroseemueller.de",95],["schoerling-blitz.de",95],["ast-apolda.com",95],["elektro-klippel.de",95],["arntz-haustechnik.de",95],["elektro-bindel.de",95],["elektrotechnik-weiss.com",95],["brandschutz-hamburg.de",95],["wagnerelektrotechnik.de",95],["el-kramer.de",95],["mks-hof.de",95],["wernz-elektro.de",95],["e3-energy.de",95],["sg-solar.de",95],["elektrokrebs.de",95],["elektro-roehrl.de",95],["elektro-kreher.de",95],["giegling-vonsaal.de",95],["elektro-lehmann.com",95],["ems-wurzen.de",95],["scholpp.de",96],["scholpp.es",96],["scholpp.pl",96],["scholpp.it",96],["ptc.eu",96],["scholpp.com",96],["abo24.de",96],["overdrive.com",96],["wetu.com",96],["superwatchman.com",97],["bitburger-braugruppe.de",98],["alpen.co.uk",99],["alsina.com",99],["assosia.com",99],["bassicostruzioni.it",99],["bettenconcept.com",99],["blackpoolairport.com",99],["cateringvandenberg.nl",99],["ceratrends.com",99],["chestnut-tree-house.org.uk",99],["cirrusassessment.com",99],["clinicalondon.co.uk",99],["cmos.ie",99],["deniswilliams.ie",99],["efmdglobal.org",99],["emri.nl",99],["endlesspools.fr",99],["foleys.ie",99],["fryerndental.co.uk",99],["globalfocusmagazine.com",99],["guildhalldental.com",99],["hampshireimplantcentre.co.uk",99],["heikkala.com",99],["hermesit.net",99],["hotspring.be",99],["xn--inkomstfrskring-9kb71a.se",99],["innohome.com",99],["jakobwirt.at",99],["klinger.fi",99],["londonwomenscentre.co.uk",99],["memoreclame.nl",99],["mitarbeiter-app.de",99],["mobiltbredband.se",99],["newsbook.com.mt",99],["northeastspace.ie",99],["portea.fr",99],["precisiondentalstudio.co.uk",99],["ramotavla.se",99],["simkort.se",99],["stbarnabas-hospice.org.uk",99],["tundra.fi",99],["upitrek.com",99],["weetabix-arabia.com",99],["weetabix.co.uk",99],["weetabix.com",99],["weetabix.es",99],["weetabix.fr",99],["weetabix.it",99],["weetabix.nl",99],["weetabix.no",99],["weetabix.pt",99],["weetabixea.com",99],["weetabixfoodcompany.co.uk",99],["weetabixonthego.co.uk",99],["proteincompany.fi",100],["proteinbolaget.se",100],["snoopmedia.com",101],["myguide.de",101],["study-in-germany.de",101],["daad.de",101],["futterhaus.de",102],["scottsofstow.co.uk",[103,104]],["zawszepomorze.pl",105],["wasserkunst-hamburg.de",106],["lta.org.uk",107],["brico-travo.com",108],["panzerfux.de",109],["tvprato.it",110],["liftshare.com",110],["vesely-drak.cz",110],["consordini.com",110],["fitzmuseum.cam.ac.uk",110],["hotdk2023.kre.hu",110],["panwybierak.pl",110],["bomagasinet.dk",110],["miplantaweb.com",110],["electronics.semaf.at",110],["sfd.pl",110],["flota.es",110],["jobs.cz",110],["prace.cz",110],["eninternetgratis.com",110],["unavidadeviaje.com",110],["theateramrand.de",111],["jugend-praesentiert.de",111],["evium.de",112],["epayments.com",113],["riceundspice.de",114],["happysocks.com",[115,116]],["win2day.at",117],["porp.pl",118],["gesundheitsamt-2025.de",119],["coastfashion.com",120],["oasisfashion.com",120],["warehousefashion.com",120],["misspap.com",120],["karenmillen.com",120],["boohooman.com",120],["nebo.app",121],["groupeonepoint.com",122],["edpsciences.org",123],["bemmaisseguro.com",124],["johnmuirhealth.com",125],["scheidegger.nl",126],["transparency.fb.com",[127,128]],["faq.whatsapp.com",128],["blog.whatsapp.com",128],["www.whatsapp.com",128],["phoenix.de",129],["mishcon.com",130],["bbva.es",132],["bbvauk.com",132],["bbva.be",132],["bbva.fr",132],["bbva.it",132],["bbva.pt",132],["suntech.cz",133],["digikey.co.za",134],["digikey.cn",134],["digikey.ee",134],["digikey.at",134],["digikey.be",134],["digikey.bg",134],["digikey.cz",134],["digikey.dk",134],["digikey.fi",134],["digikey.fr",134],["digikey.de",134],["digikey.gr",134],["digikey.hu",134],["digikey.ie",134],["digikey.it",134],["digikey.lv",134],["digikey.lt",134],["digikey.lu",134],["digikey.nl",134],["digikey.no",134],["digikey.pl",134],["digikey.pt",134],["digikey.ro",134],["digikey.sk",134],["digikey.si",134],["digikey.es",134],["digikey.se",134],["digikey.ch",134],["digikey.co.uk",134],["digikey.co.il",134],["digikey.com.mx",134],["digikey.ca",134],["digikey.com.br",134],["digikey.co.nz",134],["digikey.com.au",134],["digikey.co.th",134],["digikey.tw",134],["digikey.kr",134],["digikey.sg",134],["digikey.ph",134],["digikey.my",134],["digikey.jp",134],["digikey.in",134],["digikey.hk",134],["digikey.com",134],["eurosupps.nl",135],["pathe.nl",136],["makelaarsland.nl",137],["nordania.dk",138],["365direkte.no",138],["danskebank.lv",138],["danskebank.lt",138],["danskebank.no",138],["danskebank.fi",138],["danskebank.dk",138],["danskebank.com",138],["danskebank.se",138],["danskebank.co.uk",138],["danskeci.com",138],["danicapension.dk",138],["gewerbegebiete.de",139],["visti.it",140],["balay.es",141],["constructa.com",141],["gaggenau.com",141],["talksport.com",142],["loudersound.com",142],["impulse.de",142],["pcgamer.com",142],["infoworld.com",142],["kiplinger.com",142],["omni.se",142],["it-times.de",142],["bitcoinmagazine.com",142],["deliciousmagazine.co.uk",142],["upday.com",142],["deutschlandcard.de",142],["szbz.de",142],["free-fonts.com",142],["lieferzeiten.info",142],["vice.com",142],["newsnow.co.uk",142],["out.com",142],["streampicker.de",142],["radiotimes.com",142],["nowtv.com",142],["kochbar.de",142],["toggo.de",142],["am-online.com",142],["n-tv.de",142],["newsandstar.co.uk",142],["tag24.de",142],["weltkunst.de",142],["noveauta.sk",142],["pnn.de",142],["economist.com",142],["crash.net",142],["norwaytoday.info",142],["insider.com",142],["preis.de",142],["ibroxnoise.co.uk",142],["celtsarehere.com",142],["nufcblog.co.uk",142],["sport1.de",142],["techconnect.com",142],["followfollow.com",142],["thespun.com",142],["mazdas247.com",142],["fastcar.co.uk",142],["vitalfootball.co.uk",142],["audi-sport.net",142],["bumble.com",142],["arcamax.com",142],["dilbert.com",142],["givemesport.com",142],["dartsnews.com",142],["gpfans.com",142],["justjared.com",142],["justjaredjr.com",142],["finanzen.at",142],["flights-idealo.co.uk",142],["idealo.com",142],["idealo.se",142],["idealo.nl",142],["idealo.pl",142],["idealo.pt",142],["idealo.fi",142],["idealo.dk",142],["idealo.no",142],["idealo.in",142],["idealo.at",142],["ladenzeile.at",142],["berliner-zeitung.de",142],["urbia.de",142],["essen-und-trinken.de",142],["wetter.de",142],["rtl-living.de",142],["vox.de",142],["ladenzeile.de",142],["advocate.com",142],["idealo.de",142],["wigantoday.net",142],["economistgroup.com",142],["transfermarkt.nl",142],["transfermarkt.es",142],["transfermarkt.pl",142],["transfermarkt.pt",142],["transfermarkt.at",142],["transfermarkt.it",142],["transfermarkt.fr",142],["transfermarkt.de",142],["transfermarkt.be",142],["transfermarkt.co.uk",142],["transfermarkt.us",142],["footballfancast.com",142],["cio.com",142],["jezebel.com",142],["splinternews.com",142],["denofgeek.com",142],["kinja.com",142],["theinventory.com",142],["rollingstone.de",142],["sueddeutsche.de",142],["csoonline.com",142],["tvmovie.de",142],["testberichte.de",142],["pcgameshardware.de",142],["4players.de",142],["guj.de",142],["bild.de",142],["wieistmeineip.de",142],["testbild.de",142],["stylebook.de",142],["skygroup.sky",142],["speisekarte.de",142],["haeuser.de",142],["cmo.com.au",142],["pcworld.co.nz",142],["idealo.it",142],["transfermarkt.jp",142],["transfermarkt.co.id",142],["autoexpress.co.uk",142],["transfermarkt.com",142],["webwinkel.tubantia.nl",142],["shopalike.nl",142],["autoweek.nl",142],["pcworld.es",142],["macworld.es",142],["idealo.es",142],["businessinsider.es",142],["motor.es",142],["autobild.es",142],["driving.co.uk",142],["stern.de",142],["pcgames.de",142],["sport.de",142],["idealo.fr",142],["tori.fi",142],["snow-forecast.com",142],["tidende.dk",142],["kraloyun.com",142],["arnnet.com.au",142],["bunte.de",142],["techbook.de",142],["metal-hammer.de",142],["macworld.co.uk",142],["maxisciences.com",142],["ohmymag.com",142],["voici.fr",142],["geo.de",142],["businessinsider.de",142],["meinestadt.de",142],["politico.eu",142],["spieletipps.de",142],["finanznachrichten.de",142],["vtwonen.nl",142],["stol.it",142],["waitrose.com",143],["storyhouseegmont.dk",144],["storyhouseegmont.no",144],["storyhouseegmont.se",144],["egmont.com",144],["nordiskfilm.com",144]]);

const entitiesMap = new Map([["chronext",4]]);

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
    const tokens = safe.String_split.call(rawToken, /\s*\|\s*/);
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
        } catch {
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
