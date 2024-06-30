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

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_noEvalIf = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["blocker"],["replace"],["ExoLoader"],["adsBlocked"],["/chp_?ad/"],["setInterval"],["tmohentai"],["ads"],["debugger"],["ppu"],["/popunder/i"],["shift"],["/fairAdblock|chp_adblock|adsbygoogle\\.js/"],["ppuQnty"],["adb"],["chp_ad"],["show"],["AdBlock"],["popUnderStage"],["adsbygoogle"],["_0x"],["deblocker"],["adblock"],["popunder"],["/07c225f3\\.online|content-loader\\.com|css-load\\.com|html-load\\.com/"],["interactionCount"],["Popunder"],["String.fromCharCode"],["fairAdblock"],["isFairAdBlocker"],["UserCustomPop"]];

const hostnamesMap = new Map([["audiotools.pro",0],["magesy.blog",0],["magesypro.pro",0],["claimlite.club",0],["orgyxxxhub.com",1],["junkyponk.com",1],["healthfirstweb.com",1],["vocalley.com",1],["yogablogfit.com",1],["howifx.com",1],["en.financerites.com",1],["mythvista.com",1],["livenewsflix.com",1],["cureclues.com",1],["apekite.com",1],["flash-firmware.blogspot.com",1],["uploady.io",1],["taodung.com",1],["mangaesp.co",1],["3movs.com",2],["jpopsingles.eu",3],["tinys.click",3],["getintoway.com",3],["afronudes.com",3],["allcelebspics.com",3],["alttyab.net",3],["androjungle.com",3],["anonym-ads.xyz",3],["arkadmin.fr",3],["azoranov.com",3],["bacasitus.com",3],["barranquillaestereo.com",3],["bazaarwedding.com",3],["blogbhaiya.com",3],["brasilsimulatormods.com",3],["cambrevenements.com",3],["cartoonstvonline.com",3],["codecap.org",3],["comparili.net",3],["deephub.cyou",3],["descargasalinstante.com",3],["diaobe.net",3],["filegajah.com",3],["filmestorrent.tv",3],["flicksnchill.com",3],["franceprefecture.fr",3],["freecricket.net",3],["gcpainters.com",3],["germanvibes.org",3],["getmaths.co.uk",3],["gewinnspiele-markt.com",3],["hamzag.com",3],["hannibalfm.net",3],["hornyconfessions.com",3],["ilcamminodiluce.it",3],["joguinhosgratis.com",3],["joziporn.com",3],["justpaste.top",3],["katoikos.world",3],["kozyrom.com",3],["kumiste.com",3],["mbc2.live",3],["mctechsolutions.in",3],["measam.com",3],["medibok.se",3],["megafire.net",3],["mirrorpoi.com",3],["mirrorpoi.my.id",3],["mockuphunts.com",3],["moroccantea.uk",3],["mortaltech.com",3],["multivideodownloader.com",3],["nauci-engleski.com",3],["nauci-njemacki.com",3],["nekopoi.my.id",3],["nuketree.com",3],["nullpro.tech",3],["pa1n.xyz",3],["playertv.net",3],["pornhubtrending.net",3],["premiumthemes.shop",3],["programsolve.com",3],["radio-deejay.com",3],["ranaaclanhungary.com",3],["rasoi.me",3],["riprendiamocicatania.com",3],["rsrlink.in",3],["seriesperu.com",3],["shmapp.ca",3],["shorthttp.online",3],["sub2unlocker.com",3],["romviet.com",[3,4]],["saygrupmekanik.com",3],["skillmineopportunities.com",3],["teczpert.com",3],["totalsportek.app",3],["tromcap.com",3],["tv0800.com",3],["tv3monde.com",3],["uiiumovies.net",3],["ustrendynews.com",3],["vidoza.xyz",3],["watchnow.fun",3],["weashare.com",3],["webdexscans.com",3],["xvideostrending.org",3],["yelitzonpc.com",3],["ymknow.xyz",3],["zimabadko.com",3],["zegtrends.com",4],["copypastescan.xyz",4],["tainguyenmienphi.com",4],["funkeypagali.com",4],["careersides.com",4],["nayisahara.com",4],["wikifilmia.com",4],["infinityskull.com",4],["viewmyknowledge.com",4],["iisfvirtual.in",4],["starxinvestor.com",4],["acetack.com",4],["blog.carstopia.net",4],["blog.carsmania.net",4],["ikramlar.online",4],["msic.site",4],["fx-22.com",4],["gold-24.net",4],["forexrw7.com",4],["kiemlua.com",4],["link1s.com",4],["bloggingguidance.com",4],["onroid.com",4],["coinsrev.com",4],["10-train.com",4],["110tutorials.com",4],["103.70.114.35",4],["103.74.5.104",4],["185.193.17.214",4],["207hd.com",4],["247beatz.ng",4],["247footballnow.com",4],["27-sidefire-blog.com",4],["2best.club",4],["2the.space",4],["30kaiteki.com",4],["3dyasan.com",4],["3fnews.com",4],["3rabsports.com",4],["4drumkits.com",4],["4fans.gay",4],["4fingermusic.com",4],["4gousya.net",4],["4horlover.com",4],["4spaces.org",4],["519.best",4],["51sec.org",4],["60fps.xyz",4],["80-talet.se",4],["9alami.info",4],["9ketsuki.info",4],["a2zbookmark.com",4],["aboedman.com",4],["addtobucketlist.com",4],["adisann.com",4],["adminreboot.com",4],["adsurfle.com",4],["adsy.pw",4],["advertafrica.net",4],["adnan-tech.com",4],["africue.com",4],["aghasolution.com",4],["aitoolsfree.org",4],["aitohuman.org",4],["aiyumangascanlation.com",4],["alanyapower.com",4],["albania.co.il",4],["albinofamily.com",4],["algodaodocescan.com.br",4],["allcalidad.app",4],["allcelebritywiki.com",4],["allcivilstandard.com",4],["alliptvlinks.com",4],["alliptvs.com",4],["almofed.com",4],["altcryp.com",4],["altselection.com",4],["altyazitube22.lat",4],["amnaymag.com",4],["amritadrino.com",[4,12]],["amtil.com.au",4],["andani.net",4],["androidadult.com",4],["androidfacil.org",4],["angolopsicologia.com",4],["anime4mega.net",4],["anime4mega-descargas.net",4],["anime7.download",4],["anime-torrent.com",4],["animecenterbr.com",4],["animesonlineshd.com",4],["animetwixtor.com",4],["animexin.vip",4],["anmup.com.np",4],["anodee.com",4],["anonyviet.com",4],["anothergraphic.org",4],["aoseugosto.com",4],["aozoraapps.net",4],["apenasmaisumyaoi.com",4],["apkdink.com",4],["apostoliclive.com",4],["appdoze.com",4],["applediagram.com",4],["aprenderquechua.com",4],["arabstd.com",4],["articlebase.pk",4],["articlemela.xyz",4],["articlesmania.me",4],["articlespost.xyz",4],["ascalonscans.com",4],["asiansexdiarys.com",4],["askcerebrum.com",4],["askushowto.com",4],["aspirapolveremigliori.it",4],["astroages.com",4],["astrumscans.xyz",4],["atgstudy.com",4],["atlantisscan.com",4],["atleticalive.it",4],["atozmovies.xyz",4],["audiobookexchangeplace.com",4],["audiotrip.org",4],["auroraconeyisland.xyz",4],["autodime.com",4],["autoindustry.ro",4],["automat.systems",4],["automothink.com",4],["avitter.net",4],["awpd24.com",4],["ayatoon.com",4],["ayuka.link",4],["azamericasat.net",4],["azdly.com",4],["azlyrics.online",4],["azores.co.il",4],["azrom.net",4],["babehubonlyfansly.com",4],["backyardpapa.com",4],["baixedetudo.com.br",4],["balkanteka.net",4],["bandstand.ph",4],["batman.city",4],["bcanepaltu.com",4],["bcanotesnepal.com",4],["bcsnoticias.mx",4],["bdix.app",4],["bdokan.com",4],["bdsomadhan.com",4],["bdstarshop.com",4],["beaddiagrams.com",4],["bearchasingart.com",4],["beatree.cn",4],["bedavahesap.org",4],["beisbolinvernal.com",4],["bengalxpress.in",4],["bestcrack.xyz",4],["bettingexchange.it",4],["bi-girl.net",4],["bibliotecadecorte.com",4],["bibliotecahermetica.com.br",4],["bidersnotu.com",4],["bif24.pl",4],["biftutech.com",4],["bigdata-social.com",4],["bimshares.com",4],["bishalghale.com.np",4],["bitcotasks.com",4],["bitlikutu.com",4],["bittukitech.in",4],["bitview.cloud",4],["bitzite.com",4],["blog.motionisland.com",4],["blog24.me",4],["blogk.com",4],["bloooog.it",4],["bloxyscripts.com",4],["bluebuddies.com",4],["bluecoreinside.com",4],["bogowieslowianscy.pl",4],["bonesmanhwa.online",4],["bookpraiser.com",4],["boxaoffrir.com",4],["boredgiant.com",4],["botinnifit.com",4],["boundlessnecromancer.com",4],["boxingvideo.org",4],["boxofficebusiness.in",4],["boystube.link",4],["braziliannr.com",4],["brevi.eu",4],["brian70.tw",4],["bright-b.com",4],["brightpets.org",4],["broadbottomvillage.co.uk",4],["brokensilenze.net",4],["brulosophy.com",4],["brushednickel.biz",4],["bsmaurya.com",4],["bugswave.com",4],["businesstrend.jp",4],["byswiizen.fr",4],["cafenau.com",4],["calculascendant.com",4],["calmarkcovers.com",4],["calvyn.com",4],["camcam.cc",4],["camnang24h.net",4],["canadanouvelles.com",4],["canaltdt.es",4],["captionpost.com",4],["carryflix.icu",4],["cashkar.in",4],["casperhd.com",4],["catatanonline.com",4],["cavalierstream.fr",4],["celebritablog.com",4],["celestialtributesonline.com",4],["cembarut.com.tr",4],["certificateland.com",4],["cg-method.com",4],["chachocool.com",4],["chakrirkhabar247.in",4],["championpeoples.com",4],["change-ta-vie-coaching.com",4],["charlottepilgrimagetour.com",4],["charpatra.com",4],["chart.services",4],["chatgbt.one",4],["chatgptfree.ai",4],["cheatermad.com",4],["check-imei.info",4],["cheese-cake.net",4],["chieflyoffer.com",4],["chihouban.com",4],["chineseanime.org",4],["christiantrendy.com",4],["cienagamagdalena.com",4],["cimbusinessevents.com.au",4],["cinema-sketch.com",4],["cinepiroca.com",4],["cizzyscripts.com",4],["claimclicks.com",4],["claydscap.com",4],["clockskin.us",4],["cloud9obits.com",4],["cocorip.net",4],["code-source.net",4],["codeandkey.com",4],["codeastro.com",4],["codeitworld.com",4],["codewebit.top",4],["coin-profits.xyz",4],["coinadpro.club",4],["coinbaby8.com",4],["coingraph.us",4],["cola16.app",4],["coleccionmovie.com",4],["colliersnews.com",4],["comeletspray.com",4],["cometogliere.com",4],["comoinstalar.me",4],["compota-soft.work",4],["conoscereilrischioclinico.it",4],["consigliatodanoi.it",4],["constructionplacement.org",4],["correction-livre-scolaire.fr",4],["coursesdaddy.com",4],["cpscan.xyz",4],["crackcodes.in",4],["crackthemes.com",4],["crackwatch.eu",4],["craigretailers.co.uk",4],["crazyashwin.com",4],["crazydeals.live",4],["creebhills.com",4],["creepyscans.com",4],["crn.pl",4],["cronachesalerno.it",4],["cryptomanga.online",4],["cryptonor.xyz",4],["cryptonworld.space",4],["cryptowidgets.net",4],["cta-fansite.com",4],["culture-informatique.net",4],["cyprus.co.il",4],["daemon-hentai.com",4],["daij1n.info",4],["dailytechupdates.in",4],["dailyweb.pl",4],["davidsonbuilders.com",4],["dabangbastar.com",4],["day4news.com",4],["daybuy.tw",4],["deathonnews.com",4],["dejongeturken.com",4],["delvein.tech",4],["demonictl.com",4],["demonyslowianskie.pl",4],["depressionhurts.us",4],["derusblog.com",4],["descargaranimes.com",4],["descargaseriestv.com",4],["design4months.com",4],["desirenovel.com",4],["desktopsolution.org",4],["destakenewsgospel.com",4],["destinationsjourney.com",4],["detikbangka.com",4],["dev-dark-blog.pantheonsite.io",4],["devilreturnstoschooldays.online",4],["devopslanka.com",4],["dewfuneralhomenews.com",4],["dhankasamaj.com",4],["diamondfansub.com",4],["diencobacninh.com",4],["digitalseoninja.com",4],["dignityobituary.com",4],["diplomaexamcorner.com",4],["dipprofit.com",4],["dir-tech.com",4],["diskizone.com",4],["diversanews.com",4],["diyprojectslab.com",4],["djqunjab.in",4],["djsofchhattisgarh.in",4],["dma-upd.org",4],["dominican-republic.co.il",4],["donghuaworld.com",4],["donlego.com",4],["doublemindtech.com",4],["doumura.com",4],["downloadbatch.me",4],["downloader.is",4],["downloads.sayrodigital.net",4],["downloadtanku.org",4],["dpscomputing.com",4],["drake-scans.com",4],["dubaitime.net",4],["dvd-flix.com",4],["dvdgayonline.com",4],["e-food.jp",4],["e-kakoh.com",4],["earlymemorials.com",4],["earninginwork.com",4],["easyjapanesee.com",4],["easytodoit.com",4],["ecommercewebsite.store",4],["eczpastpapers.net",4],["editions-actu.org",4],["editorsadda.com",4],["edivaldobrito.com.br",4],["edjerba.com",4],["edukamer.info",4],["egram.com.ng",4],["einewelteinezukunft.de",4],["elcriticodelatele.com",4],["elcultura.pl",4],["elearning-cpge.com",4],["eleceedmanhwa.me",4],["embraceinnerchaos.com",4],["emperorscan.com",4],["empleo.com.uy",4],["encuentratutarea.com",4],["encurtareidog.top",4],["eng-news.com",4],["english-dubbed.com",4],["english-topics.com",4],["english101.co.za",4],["enryumanga.com",4],["ensenchat.com",4],["entenpost.com",4],["epicpdf.com",4],["epsilonakdemy.com",4],["eramuslim.com",4],["erreguete.gal",4],["ervik.as",4],["esportsmonk.com",4],["esportsnext.com",4],["et-invest.de",4],["eternalhonoring.com",4],["ethiopia.co.il",4],["everydayhomeandgarden.com",4],["evlenmekisteyenbayanlar.net",4],["ewybory.eu",4],["exam-results.in",4],["exeking.top",4],["expertskeys.com",4],["eymockup.com",4],["ezmanga.net",4],["f1gplive.xyz",4],["faaduindia.com",4],["fapfapgames.com",4],["fapkingsxxx.com",4],["faqwiki.us",4],["farolilloteam.es",4],["fattelodasolo.it",4],["fchopin.net",4],["felicetommasino.com",4],["femisoku.net",4],["ferdroid.net",4],["fessesdenfer.com",4],["feyorra.top",4],["fhedits.in",4],["fhmemorial.com",4],["filmypoints.in",4],["finalnews24.com",4],["financeandinsurance.xyz",4],["financeyogi.net",4],["financid.com",4],["finclub.in",4],["findheman.com",4],["findnewjobz.com",4],["fine-wings.com",4],["firescans.xyz",4],["fitnessscenz.com",4],["fitnesshealtharticles.com",4],["flashssh.net",4],["flexamens.com",4],["flowsnet.com",4],["fmhublog.xyz",4],["folkmord.se",4],["foodgustoso.it",4],["foodiesjoy.com",4],["footoks.online",4],["footymercato.com",4],["forex-yours.com",4],["forexcracked.com",4],["foxaholic.com",4],["francaisfacile.net",4],["free.7hd.club",4],["freebiesmockup.com",4],["freecoursesonline.me",4],["freedom3d.art",4],["freefiremaxofficial.com",4],["freefireupdate.com",4],["freegetcoins.com",4],["freelancerartistry.com",4],["freemedicalbooks.org",4],["freemovies-download.com",4],["freeoseocheck.com",4],["freepasses.org",4],["freetarotonline.com",4],["freetubetv.net",4],["freescorespiano.com",4],["freewoodworking.ca",4],["fresherbaba.com",4],["freshersgold.com",4],["frpgods.com",4],["ftuapps.dev",4],["fumettologica.it",4],["funeral-memorial.com",4],["funeralmemorialnews.com",4],["funeralobitsmemorial.com",4],["gabrielcoding.com",4],["gadgetxplore.com",4],["gadgetspidy.com",4],["gahag.net",4],["galaxytranslations97.com",4],["gameblog.jp",4],["gamenv.net",4],["gamefi-mag.com",4],["gamers-haven.org",4],["games-manuals.com",4],["gamerxyt.com",4],["gamevcore.com",4],["gaminglariat.com",4],["gamingsearchjournal.com",4],["gatagata.net",4],["ganzoscan.com",4],["gazetazachodnia.eu",4],["gdrivemovies.xyz",4],["geekering.com",4],["gemiadamlari.org",4],["gentiluomodigitale.it",4],["gesund-vital.online",4],["getsuicidegirlsfree.com",4],["ghostsfreaks.com",4],["gisvacancy.com",4],["giuseppegravante.com",4],["gkbooks.in",4],["gkgsca.com",4],["gksansar.com",4],["globelempire.com",4],["gnusocial.jp",4],["goegoe.net",4],["gogetapast.com.br",4],["gogifox.com",4],["gogueducation.com",4],["gokerja.net",4],["gokushiteki.com",4],["golf.rapidmice.com",4],["gomov.bio",4],["goodriviu.com",4],["googlearth.selva.name",4],["gorating.in",4],["gotocam.net",4],["grafikos.cz",4],["grasta.net",4],["grazymag.com",4],["greasygaming.com",4],["greattopten.com",4],["grootnovels.com",4],["groovyfreestuff.com",4],["gsdn.live",4],["gsmfreezone.com",4],["gsmmessages.com",4],["gtavi.pl",4],["gwiazdatalkie.com",4],["habuteru.com",4],["hackingwala.com",4],["hackmodsapk.com",4],["hadakanonude.com",4],["hairjob.wpx.jp",4],["happy-otalife.com",4],["harbigol.com",4],["harley.top",4],["haveyaseenjapan.com",4],["hdhub4one.pics",4],["healthbeautybee.com",4],["healthfatal.com",4],["heartrainbowblog.com",4],["hechos.net",4],["hellenism.net",4],["heutewelt.com",4],["hhesse.de",4],["highdefdiscnews.com",4],["hilaw.vn",4],["hindimatrashabd.com",4],["hindishri.com",4],["hiphopa.net",4],["historichorizons.com",4],["hobbykafe.com",4],["hockeyfantasytools.com",4],["hojii.net",4],["hookupnovel.com",4],["hopsion-consulting.com",4],["hostingreviews24.com",4],["hotspringsofbc.ca",4],["howtoblogformoney.net",4],["hub2tv.com",4],["hungarianhardstyle.hu",4],["hyderone.com",4],["hyogo.ie-t.net",4],["hypelifemagazine.com",4],["hypesol.com",4],["ideatechy.com",4],["idesign.wiki",4],["idevfast.com",4],["idevice.me",4],["idpvn.com",4],["iggtech.com",4],["ignoustudhelp.in",4],["ikarianews.gr",4],["ilbassoadige.it",4],["ilbolerodiravel.org",4],["indiasmagazine.com",4],["individualogist.com",4],["inertz.org",4],["infamous-scans.com",4],["infocycles.com",4],["infodani.net",4],["infojabarloker.com",4],["infrafandub.com",4],["infulo.com",4],["inlovingmemoriesnews.com",4],["inprogrammer.com",4],["inra.bg",4],["insideeducation.co.za",4],["insidememorial.com",4],["insider-gaming.com",4],["insurancepost.xyz",4],["intelligence-console.com",4],["interculturalita.it",4],["inventionsdaily.com",4],["iptvxtreamcodes.com",4],["isabihowto.com.ng",4],["italiadascoprire.net",4],["itmaniatv.com",4],["itopmusic.com",4],["itopmusics.com",4],["itopmusicx.com",4],["itz-fast.com",4],["iumkit.net",4],["iwb.jp",4],["jackofalltradesmasterofsome.com",4],["jaktsidan.se",4],["japannihon.com",4],["javcock.com",4],["jcutrer.com",4],["jk-market.com",4],["jkhentai.co",4],["jobsbd.xyz",4],["jobslampung.net",4],["josemo.com",4],["jra.jpn.org",4],["jrlinks.in",4],["jungyun.net",4],["juninhoscripts.com.br",4],["juventusfc.hu",4],["kacikcelebrytow.com",4],["kagohara.net",4],["kakiagune.com",4],["kali.wiki",4],["kana-mari-shokudo.com",4],["kanaeblog.net",4],["kandisvarlden.com",4],["karaoke4download.com",4],["kawaguchimaeda.com",4],["kaystls.site",4],["kenkou-maintenance.com",4],["kenta2222.com",4],["kgs-invest.com",4],["kh-pokemon-mc.com",4],["khabarbyte.com",4],["khabardinbhar.net",4],["khohieu.com",4],["kickcharm.com",4],["kinisuru.com",4],["kits4beats.com",4],["kllproject.lv",4],["know-how-tree.com",4],["kobitacocktail.com",4],["kodaika.com",4],["kodewebsite.com",4],["kokosovoulje.com",4],["koreanbeauty.club",4],["korogashi-san.org",4],["korsrt.eu.org",4],["kotanopan.com",4],["koume-in-huistenbosch.net",4],["krx18.com",4],["kukni.to",4],["kupiiline.com",4],["kurosuen.live",4],["labstory.in",4],["ladypopularblog.com",4],["lamorgues.com",4],["lampungkerja.com",4],["lapaginadealberto.com",4],["lascelebrite.com",4],["latinlucha.es",4],["law101.org.za",4],["lawweekcolorado.com",4],["learnedclub.com",4],["learnmany.in",4],["learnchannel-tv.com",4],["learnodo-newtonic.com",4],["learnospot.com",4],["learnslovak.online",4],["lebois-racing.com",4],["lectormh.com",4],["leechyscripts.net",4],["leeapk.com",4],["legendaryrttextures.com",4],["lendrive.web.id",4],["letrasgratis.com.ar",4],["levismodding.co.uk",4],["lgcnews.com",4],["lglbmm.com",4],["lheritierblog.com",4],["ligaset.com",4],["limcasports.xyz",4],["limontorrent.com",4],["limontorrents.com",4],["linkskibe.com",4],["linkvoom.com",4],["linux-talks.com",4],["linuxexplain.com",4],["lionsfan.net",4],["literarysomnia.com",4],["littlepandatranslations.com",4],["livefootballempire.com",4],["lk21org.com",4],["loanpapa.in",4],["locurainformaticadigital.com",4],["logofootball.net",4],["lookism.me",4],["lordfix.xyz",4],["lotus-tours.com.hk",4],["ltpcalculator.in",4],["luchaonline.com",4],["luciferdonghua.in",4],["luckymood777.com",4],["lucrebem.com.br",4],["lustesthd.cloud",4],["lustesthd.lat",4],["lycee-maroc.com",4],["macrocreator.com",4],["madevarquitectos.com",4],["maisondeas.com",4],["maketoss.com",4],["makeupguide.net",4],["makotoichikawa.net",4],["mamtamusic.in",4],["mangcapquangvnpt.com",4],["mantrazscan.com",4],["marketedgeofficial.com",4],["marketing-business-revenus-internet.fr",4],["marketrevolution.eu",4],["masashi-blog418.com",4],["mastakongo.info",4],["masterpctutoriales.com",4],["maths101.co.za",4],["matomeiru.com",4],["matshortener.xyz",4],["mdn.lol",4],["medeberiya1.com",4],["mediascelebres.com",4],["medytour.com",4],["meilblog.com",4],["memorialnotice.com",4],["mentalhealthcoaching.org",4],["meteoregioneabruzzo.it",4],["mhscans.com",4],["michiganrugcleaning.cleaning",4],["midis.com.ar",4],["minddesignclub.org",4],["minecraftwild.com",4],["minhasdelicias.com",4],["mitaku.net",4],["mitsmits.com",4],["mixmods.com.br",4],["mm-scans.org",4],["mmorpgplay.com.br",4],["mockupcity.com",4],["mockupgratis.com",4],["modele-facture.com",4],["modyster.com",4],["monaco.co.il",4],["morinaga-office.net",4],["mosttechs.com",4],["motofan-r.com",4],["moviemod.online",4],["movierr.site",4],["movieping.com",4],["moviesnipipay.me",4],["mrfreemium.blogspot.com",4],["mscdroidlabs.es",4],["msonglyrics.com",4],["mtech4you.com",4],["multimovies.tech",4],["mundovideoshd.com",4],["murtonroofing.com",4],["musicforchoir.com",4],["musictip.net",4],["mxcity.mx",4],["mxpacgroup.com",4],["my-ford-focus.de",4],["myglamwish.com",4],["myicloud.info",4],["mylinkat.com",4],["mylivewallpapers.com",4],["mypace.sasapurin.com",4],["myqqjd.com",4],["mytectutor.com",4],["myunity.dev",4],["myviptuto.com",4],["nagpurupdates.com",4],["naijagists.com",4],["naijdate.com",4],["najboljicajevi.com",4],["nakiny.com",4],["nameart.in",4],["nartag.com",4],["naturalmentesalute.org",4],["naturomicsworld.com",4],["naveedplace.com",4],["navinsamachar.com",4],["neet.wasa6.com",4],["neifredomar.com",4],["nekoscans.com",4],["nemumemo.com",4],["nepaljobvacancy.com",4],["neservicee.com",4],["netsentertainment.net",4],["neuna.net",4],["newbookmarkingsite.com",4],["newfreelancespot.com",4],["newlifefuneralhomes.com",4],["news-geinou100.com",4],["newscard24.com",4],["newstechone.com",4],["nghetruyenma.net",4],["nichetechy.com",4],["nin10news.com",4],["nicetube.one",4],["ninjanovel.com",4],["niteshyadav.in",4],["nknews.jp",4],["nkreport.jp",4],["noanyi.com",4],["nobodycancool.com",4],["noblessetranslations.com",4],["nocfsb.com",4],["nocsummer.com.br",4],["nodenspace.com",4],["nopay.info",4],["notandor.cn",4],["note1s.com",4],["notesformsc.org",4],["noteshacker.com",4],["novel-gate.com",4],["novelbob.com",4],["novelread.co",4],["nsfwr34.com",4],["nswdownload.com",4],["nswrom.com",4],["ntucgm.com",4],["nudeslegion.com",4],["nukedfans.com",4],["nukedpacks.site",4],["nulledmug.com",4],["nyangames.altervista.org",4],["nylonstockingsex.net",4],["oberschwaben-tipps.de",4],["obituary-deathnews.com",4],["obituaryupdates.com",4],["odekake-spots.com",4],["officialpanda.com",4],["ofppt.net",4],["ofwork.net",4],["omeuemprego.online",4],["omusubi-56rin.com",4],["onehack.us",4],["onestringlab.com",4],["onlinetechsamadhan.com",4],["onneddy.com",4],["onyxfeed.com",4],["oatuu.org",4],["openstartup.tm",4],["opiniones-empresas.com",4],["oracleerpappsguide.com",4],["orenoraresne.com",4],["oromedicine.com",4],["orunk.com",4],["otakuliah.com",4],["oteknologi.com",4],["otokukensaku.jp",4],["ottrelease247.com",4],["ovnihoje.com",4],["pabryyt.one",4],["palofw-lab.com",4],["paminy.com",4],["pandaatlanta.com",4],["pantube.top",4],["paolo9785.com",4],["papafoot.click",4],["papahd.club",4],["paris-tabi.com",4],["parisporn.org",4],["parking-map.info",4],["pasokau.com",4],["passionatecarbloggers.com",4],["passportaction.com",4],["pc-guru.it",4],["pc-spiele-wiese.de",4],["pcgamedownload.net",4],["pcgameszone.com",4],["pdfstandards.net",4],["pedalpower.online",4],["pepar.net",4],["personefamose.it",4],["petitestef.com",4],["pflege-info.net",4],["phonefirmware.com",4],["phoenix-manga.com",4],["physics101.co.za",4],["picgiraffe.com",4],["pilsner.nu",4],["piratemods.com",4],["piximfix.com",4],["plantatreenow.com",4],["plc4free.com",4],["pliroforiki-edu.gr",4],["plutoscripts.xyz",4],["poapan.xyz",4],["pogga.org",4],["ponsel4g.com",4],["porlalibreportal.com",4],["porninblack.com",4],["pornfeel.com",4],["portaldoaz.org",4],["portaldosreceptores.org",4],["postazap.com",4],["postblog.xyz",4],["posturecorrectorshop-online.com",4],["prague-blog.co.il",4],["praveeneditz.com",4],["premierftp.com",4],["prensa.click",4],["pressemedie.dk",4],["pressurewasherpumpdiagram.com",4],["pricemint.in",4],["primemovies.pl",4],["prismmarketingco.com",4],["proapkdown.com",4],["projuktirkotha.com",4],["promiblogs.de",4],["promimedien.com",4],["promisingapps.com",4],["protestia.com",4],["psicotestuned.info",4],["psychology-spot.com",4],["publicdomainq.net",4],["publicdomainr.net",4],["publicidadtulua.com",4],["pupuweb.com",4],["putlog.net",4],["pynck.com",4],["quatvn.club",4],["questionprimordiale.fr",4],["quicktelecast.com",4],["radiantsong.com",4],["rabo.no",4],["rahim-soft.com",4],["rail-log.net",4],["ralli.ee",4],["ranjeet.best",4],["ranourano.xyz",4],["raulmalea.ro",4],["rbs.ta36.com",4],["rbscripts.net",4],["rctechsworld.in",4],["readfast.in",4],["realfreelancer.com",4],["recipenp.com",4],["redbubbletools.com",4],["redfaucet.site",4],["reeell.com",4],["renierassociatigroup.com",4],["reportbangla.com",4],["reprezentacija.rs",4],["retire49.com",4],["retrotv.org",4],["revistaapolice.com.br",4],["ribbelmonster.de",4],["rightdark-scan.com",4],["rinconpsicologia.com",4],["ritacandida.com",4],["rlshort.com",4],["rocdacier.com",4],["rollingwheel.xyz",4],["romaierioggi.it",4],["romaniasoft.ro",4],["roshy.tv",4],["roznamasiasat.com",4],["rtxkeeda.com",4],["rubyskitchenrecipes.uk",4],["rumanicandle.online",4],["ruyamanga.com",4],["rv-ecommerce.com",4],["ryanmoore.marketing",4],["ryansharich.com",4],["s1os.icu",4],["s4msecurity.com",4],["s920221683.online.de",4],["sabishiidesu.com",4],["saekita.com",4],["samanarthishabd.in",4],["samovies.net",4],["samrudhiglobal.com",4],["sanmiguellive.com",4],["sararun.net",4],["sarkariresult.social",4],["satcesc.com",4],["savegame.pro",4],["sawwiz.com",4],["scansatlanticos.com",4],["schadeck.eu",4],["sezia.com",4],["schildempire.com",4],["scholarshiplist.org",4],["sciencebe21.in",4],["scontianastro.com",4],["scrap-blog.com",4],["scripcheck.great-site.net",4],["scriptsomg.com",4],["searchmovie.wp.xdomain.jp",4],["seasons-dlove.net",4],["seirsanduk.com",4],["seogroup.bookmarking.info",4],["seoworld.in",4],["setsuyakutoushi.com",4],["serieshdpormega.com",4],["server-tutorials.net",4],["serverxfans.com",4],["shadagetech.com",4],["shanurdu.com",4],["shimauma-log.com",4],["shittokuadult.net",4],["shlly.com",4],["shogaisha-shuro.com",4],["shogaisha-techo.com",4],["shopkensaku.com",4],["shorttrick.in",4],["showrovblog.com",4],["shrinklinker.com",4],["shrinkus.tk",4],["shrivardhantech.in",4],["sieradmu.com",4],["siimanga.cyou",4],["siirtolayhaber.com",4],["sim-kichi.monster",4],["sivackidrum.net",4],["sk8therapy.fr",4],["skardu.pk",4],["slawoslaw.pl",4],["slowianietworza.pl",4],["smallseotools.ai",4],["smartinhome.pl",4],["snowman-information.com",4],["soccermlbstream.xyz",4],["socebd.com",4],["sociallyindian.com",4],["softcobra.com",4],["softrop.com",4],["sohohindi.com",4],["sosuroda.pl",4],["south-park-tv.biz",4],["soziologie-politik.de",4],["sp500-up.com",4],["space-faucet.com",4],["spacestation-online.com",4],["spardhanews.com",4],["speak-english.net",4],["speculationis.com",4],["spidergame.online",4],["spinoff.link",4],["spiritparting.com",4],["sport-97.com",4],["sportsblend.net",4],["stablediffusionxl.com",4],["stadelahly.net",4],["stahnivideo.cz",4],["stakes100.xyz",4],["starsgtech.in",4],["startupjobsportal.com",4],["ster-blog.xyz",4],["stireazilei.eu",4],["stock-rom.com",4],["streamseeds24.com",4],["strefa.biz",4],["studybullet.com",4],["sufanblog.com",4],["sukuyou.com",4],["sundberg.ws",4],["suneelkevat.com",4],["super-ethanol.com",4],["superpackpormega.com",4],["surgicaltechie.com",4],["swietaslowianskie.pl",4],["sysguides.com",4],["system32.ink",4],["ta3arof.net",4],["taariikh.net",4],["tabonitobrasil.tv",4],["taisha-diet.com",4],["talentstareducation.com",4],["tamilanzone.com",4],["tamilhit.tech",4],["tamilnaadi.com",4],["tatsublog.com",4],["tbazzar.com",4],["teachersupdates.net",4],["team-octavi.com",4],["team-rcv.xyz",4],["teamkong.tk",4],["teamupinternational.com",4],["techacrobat.com",4],["techastuces.com",4],["techbytesblog.com",4],["techdriod.com",4],["techedubyte.com",[4,21]],["techiepirates.com",4],["techiestalk.in",4],["techkeshri.com",4],["technewslive.org",4],["technewsrooms.com",4],["technicalviral.com",4],["technorj.com",4],["technorozen.com",4],["techoreview.com",4],["techprakash.com",4],["techsbucket.com",4],["techstwo.com",4],["techyhigher.com",4],["techyrick.com",4],["tecnomd.com",4],["tecnoscann.com",4],["tedenglish.site",4],["tehnotone.com",4],["telephone-soudan.com",4],["teluguhitsandflops.com",4],["temporeale.info",4],["tenbaiquest.com",4],["tespedia.com",4],["testious.com",4],["thangdangblog.com",4],["thaript.com",4],["the-loop.xyz",4],["theapothecarydiariesmanga.com",4],["thebigblogs.com",4],["thedilyblog.com",4],["thermoprzepisy.pl",4],["theworldobits.com",4],["thebreakermanga.online",4],["thecannalysts.blog",4],["theconomy.me",4],["thegamearcade.com",4],["theinternettaughtme.com",4],["thejoblives.com",4],["thelastgamestandingexp.com",4],["theliveupdate.com",4],["thenewsglobe.net",4],["theprofoundreport.com",4],["thesleak.com",4],["thesportsupa.com",4],["thewambugu.com",4],["thiagorossi.com.br",4],["throwsmallstone.com",4],["titfuckvideos.com",4],["tirumalatirupatiyatra.in",4],["tnewsnetwork.com",4],["today-obits.com",4],["todays-obits.com",4],["toeflgratis.com",4],["tokoasrimotedanpayet.my.id",4],["toorco.com",4],["top10trends.net",4],["topfaucet.us",4],["topsworldnews.com",4],["toptenknowledge.com",4],["torrentdofilmeshd.net",4],["torrentgame.org",4],["totally.top",4],["towerofgod.top",4],["tr3fit.xyz",4],["trendflatt.com",4],["trendohunts.com",4],["trgtkls.org",4],["tukangsapu.net",4],["tunabagel.net",4],["turkeymenus.com",4],["turkishseriestv.net",4],["tutorialesdecalidad.com",4],["tutorialsduniya.com",4],["twodots.com.br",4],["tw.xn--h9jepie9n6a5394exeq51z.com",4],["ubugedeco.com",4],["uciteljica.net",4],["udemyking.com",4],["uiuxsource.com",4],["ukigmoch.com",4],["umabomber.com",4],["unityassets4free.com",4],["uozzart.com",4],["uploadbank.com",4],["uprwssp.org",4],["usahealthandlifestyle.com",4],["ustimz.com",4],["ustvgo.live",4],["utaitebu.com",4],["uur-tech.net",4],["vamsivfx.com",4],["vanderheide.online",4],["vedetta.org",4],["veganab.co",4],["venus-and-mars.com",4],["vibezhub.com.ng",4],["viciante.com.br",4],["villettt.kitchen",4],["violablu.net",4],["virabux.com",4],["virtual-youtuber.jp",4],["visorsmr.com",4],["visortecno.com",4],["vitadacelebrita.com",4],["vivrebordeaux.fr",4],["vmorecloud.com",4],["voiceloves.com",4],["voidtruth.com",4],["voiranime1.fr",4],["vstplugin.net",4],["warungkomik.com",4],["webacademix.com",4],["webcamfuengirola.com",4],["webcras.com",4],["webhostingoffer.org",4],["websiteglowgh.com",4],["welcometojapan.jp",4],["whats-new.cyou",4],["wheelofgold.com",4],["wholenotism.com",4],["windbreaker.me",4],["windowsaplicaciones.com",4],["wirtualnelegionowo.pl",4],["wirtualnynowydwor.pl",4],["workxvacation.jp",4],["worldgyan18.com",4],["worldtop2.com",4],["worldwidestandard.net",4],["worthitorwoke.com",4],["wp.solar",4],["wpteq.org",4],["writeprofit.org",4],["xiaomitools.com",4],["xmoviepro.xyz",4],["xn--kckzb2722b.com",4],["xn--n8jwbyc5ezgnfpeyd3i0a3ow693bw65a.com",4],["xn--nbkw38mlu2a.com",4],["yakisurume.com",4],["yakyufan-asobiba.com",4],["yaspage.com",4],["yawm.online",4],["yazilidayim.net",4],["ycongnghe.com",4],["yestech.xyz",4],["ynk-blog.com",4],["youlife24.com",4],["youpit.xyz",4],["your-local-pest-control.com",4],["yourdesignmagazine.com",4],["yuatools.com",4],["yuki0918kw.com",4],["yumekomik.com",4],["yuramanga.my.id",4],["yurudori.com",4],["zerogptai.org",4],["zien.pl",4],["ziminvestors.com",4],["zippyshare.cloud",4],["zippysharecue.com",4],["znanemediablog.com",4],["/altyazitube[0-9a-z]+\\.[a-z]{2,}/",4],["intro-hd.net",4],["mdbekjwqa.pw",5],["tmohentai.com",6],["bonsaiprolink.shop",7],["exactlyhowlong.com",7],["maos4alaw.online",7],["kumapoi.info",7],["blogcreativos.com",7],["flixlatam.com",7],["tech5s.co",7],["phpscripttr.com",7],["descargaspcpro.net",7],["dotadostube.com",7],["taradinhos.com",7],["game-2u.com",7],["toramemoblog.com",7],["gplastra.com",7],["okleak.com",7],["afly.pro",7],["ithinkilikeyou.net",7],["milanreports.com",7],["towerofgod.me",7],["crotpedia.net",7],["158.220.106.212",7],["papahd.co",7],["drakescans.com",7],["watchfacebook.com",7],["web1s.asia",7],["bokugents.com",7],["newzjunky.com",7],["yourlifeupdated.net",7],["lscomic.com",7],["tv.durbinlive.com",7],["freeltc.online",7],["pornleaks.in",7],["dudestream.com",7],["areascans.net",7],["hentaihaven.xxx",8],["aeonax.com",8],["telemporio4.blogspot.com",8],["embed.streamx.me",8],["techoreels.com",8],["defienietlynotme.com",10],["filemooon.top",[10,23]],["fmembed.cc",10],["fmhd.bar",10],["fmoonembed.pro",10],["rgeyyddl.skin",10],["sbnmp.bar",10],["sulleiman.com",10],["vpcxz19p.xyz",10],["kickassanime.ch",11],["moonplusnews.com",12],["loanoffering.in",12],["myprivatejobs.com",12],["wikitraveltips.com",12],["drinkspartner.com",12],["uploadsoon.com",12],["wp.uploadfiles.in",12],["viralxns.com",12],["tmail.io",13],["techacode.com",14],["sideplusleaks.com",14],["azmath.info",15],["downfile.site",15],["downphanmem.com",15],["expertvn.com",15],["memangbau.com",15],["trangchu.news",15],["aztravels.net",15],["adultcomixxx.com",15],["maccanismi.it",16],["gamesrepacks.com",16],["techhelpbd.com",16],["broflix.club",16],["pokemundo.com",16],["lewebde.com",16],["cazztv.xyz",16],["app.covemarkets.com",16],["kimcilonly.top",16],["tabele-kalorii.pl",17],["hentaistream.com",18],["nudeselfiespics.com",18],["hentaivideos.net",18],["booksrack.net",19],["cubehosting.me",20],["ergasiakanea.eu",21],["surfsees.com",21],["conghuongtu.net",21],["downloadlyir.com",21],["ipamod.com",21],["apkdrill.com",21],["gsmware.com",22],["a-ha.io",24],["cboard.net",24],["jjang0u.com",24],["joongdo.co.kr",24],["viva100.com",24],["thephoblographer.com",24],["gamingdeputy.com",24],["thesaurus.net",24],["alle-tests.nl",24],["maketecheasier.com",24],["automobile-catalog.com",24],["motorbikecatalog.com",24],["meconomynews.com",24],["brandbrief.co.kr",24],["motorgraph.com",24],["topstarnews.net",24],["autosport.com",25],["motorsport.com",25],["javmoon.me",26],["cdn.gledaitv.live",27],["mgnetu.com",28],["pepperlive.info",28],["iptv-list.live",29],["kurakura21.space",30]]);

const entitiesMap = new Map([["shrink",1],["an1me",3],["papafoot",3],["24pdd",4],["audiotools",4],["autosport",4],["eventiavversinews",4],["flixhub",4],["freevstplugins",4],["gogetadoslinks",4],["haryanaalert",4],["itdmusic",4],["javboys",4],["keroseed",4],["m4u",4],["magesypro",4],["mcrypto",4],["movies4u",4],["nishankhatri",4],["poplinks",4],["rgmovies",4],["sheikhmovies",4],["userupload",4],["xprime4u",4],["mlwbd",7],["katmoviefix",7],["layardrama21",7],["sdmoviespoint",7],["file-upload",9],["embedme",10],["finfang",10],["hellnaw",10],["moonembed",10],["z12z0vla",10],["fc-lc",13],["azsoft",15],["pasteit",17]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function noEvalIf(
    needle = ''
) {
    if ( typeof needle !== 'string' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('noeval-if', needle);
    const reNeedle = safe.patternToRegex(needle);
    window.eval = new Proxy(window.eval, {  // jshint ignore: line
        apply: function(target, thisArg, args) {
            const a = String(args[0]);
            if ( needle !== '' && reNeedle.test(a) ) {
                safe.uboLog(logPrefix, 'Prevented:\n', a);
                return;
            }
            if ( needle === '' || safe.logLevel > 1 ) {
                safe.uboLog(logPrefix, 'Not prevented:\n', a);
            }
            return Reflect.apply(target, thisArg, args);
        }
    });
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
    try { noEvalIf(...argsList[i]); }
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

const targetWorld = 'MAIN';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_noEvalIf();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_noEvalIf = cloneInto([
            [ '(', uBOL_noEvalIf.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_noEvalIf);
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
    delete page.uBOL_noEvalIf;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
