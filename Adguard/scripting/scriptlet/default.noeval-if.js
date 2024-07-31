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

const argsList = [["blocker"],["replace"],["ExoLoader"],["/chp_?ad/"],["setInterval"],["tmohentai"],["ads"],["debugger"],["ppu"],["adsBlocked"],["/popunder/i"],["shift"],["adblock"],["/fairAdblock|chp_adblock|adsbygoogle\\.js/"],["ppuQnty"],["adb"],["chp_ad"],["show"],["AdBlock"],["popUnderStage"],["adsbygoogle"],["_0x"],["deblocker"],["popunder"],["/07c225f3\\.online|content-loader\\.com|css-load\\.com|html-load\\.com/"],["interactionCount"],["Popunder"],["String.fromCharCode"],["fairAdblock"],["isFairAdBlocker"],["UserCustomPop"]];

const hostnamesMap = new Map([["audiotools.pro",0],["magesy.blog",0],["magesypro.pro",0],["claimlite.club",0],["orgyxxxhub.com",1],["junkyponk.com",1],["healthfirstweb.com",1],["vocalley.com",1],["yogablogfit.com",1],["howifx.com",1],["en.financerites.com",1],["mythvista.com",1],["livenewsflix.com",1],["cureclues.com",1],["apekite.com",1],["flash-firmware.blogspot.com",1],["uploady.io",1],["taodung.com",1],["mangaesp.co",1],["3movs.com",2],["zegtrends.com",3],["copypastescan.xyz",3],["tainguyenmienphi.com",3],["questloops.com",3],["yoshare.net",3],["funkeypagali.com",3],["careersides.com",3],["nayisahara.com",3],["wikifilmia.com",3],["infinityskull.com",3],["viewmyknowledge.com",3],["iisfvirtual.in",3],["starxinvestor.com",3],["acetack.com",3],["blog.carstopia.net",3],["blog.carsmania.net",3],["moderngyan.com",3],["sattakingcharts.in",3],["freshbhojpuri.com",3],["bgmi32bitapk.in",3],["bankshiksha.in",3],["earn.mpscstudyhub.com",3],["earn.quotesopia.com",3],["money.quotesopia.com",3],["best-mobilegames.com",3],["learn.moderngyan.com",3],["bharatsarkarijobalert.com",3],["ikramlar.online",3],["msic.site",3],["fx-22.com",3],["gold-24.net",3],["forexrw7.com",3],["kiemlua.com",3],["link1s.com",3],["bloggingguidance.com",3],["onroid.com",3],["coinsrev.com",3],["10-train.com",3],["110tutorials.com",3],["103.70.114.35",3],["103.74.5.104",3],["185.193.17.214",3],["207hd.com",3],["247beatz.ng",3],["247footballnow.com",3],["27-sidefire-blog.com",3],["2best.club",3],["2the.space",3],["30kaiteki.com",3],["3dyasan.com",3],["3fnews.com",3],["3rabsports.com",3],["4drumkits.com",3],["4fans.gay",3],["4fingermusic.com",3],["4gousya.net",3],["4horlover.com",3],["4spaces.org",3],["519.best",3],["51sec.org",3],["60fps.xyz",3],["80-talet.se",3],["9alami.info",3],["9ketsuki.info",3],["a2zbookmark.com",3],["aboedman.com",3],["addtobucketlist.com",3],["adisann.com",3],["adminreboot.com",3],["adsurfle.com",3],["adsy.pw",3],["advertafrica.net",3],["adnan-tech.com",3],["africue.com",3],["aghasolution.com",3],["aitoolsfree.org",3],["aitohuman.org",3],["aiyumangascanlation.com",3],["alanyapower.com",3],["albania.co.il",3],["albinofamily.com",3],["algodaodocescan.com.br",3],["allcalidad.app",3],["allcelebritywiki.com",3],["allcivilstandard.com",3],["alliptvlinks.com",3],["alliptvs.com",3],["almofed.com",3],["altcryp.com",3],["altselection.com",3],["altyazitube22.lat",3],["amnaymag.com",3],["amritadrino.com",[3,13]],["amtil.com.au",3],["andani.net",3],["androidadult.com",3],["androidfacil.org",3],["angolopsicologia.com",3],["anime4mega.net",3],["anime4mega-descargas.net",3],["anime7.download",3],["anime-torrent.com",3],["animecenterbr.com",3],["animesonlineshd.com",3],["animetwixtor.com",3],["animexin.vip",3],["anmup.com.np",3],["anodee.com",3],["anonyviet.com",3],["anothergraphic.org",3],["aoseugosto.com",3],["aozoraapps.net",3],["apenasmaisumyaoi.com",3],["apkdink.com",3],["apostoliclive.com",3],["appdoze.com",3],["applediagram.com",3],["aprenderquechua.com",3],["arabstd.com",3],["articlebase.pk",3],["articlemela.xyz",3],["articlesmania.me",3],["articlespost.xyz",3],["ascalonscans.com",3],["asiansexdiarys.com",3],["askcerebrum.com",3],["askushowto.com",3],["aspirapolveremigliori.it",3],["astroages.com",3],["astrumscans.xyz",3],["atgstudy.com",3],["atlantisscan.com",3],["atleticalive.it",3],["atozmovies.xyz",3],["audiobookexchangeplace.com",3],["audiotrip.org",3],["auroraconeyisland.xyz",3],["autodime.com",3],["autoindustry.ro",3],["automat.systems",3],["automothink.com",3],["avitter.net",3],["awpd24.com",3],["ayatoon.com",3],["ayuka.link",3],["azamericasat.net",3],["azdly.com",3],["azlyrics.online",3],["azores.co.il",3],["azrom.net",3],["babehubonlyfansly.com",3],["backyardpapa.com",3],["baixedetudo.com.br",3],["balkanteka.net",3],["bandstand.ph",3],["batman.city",3],["bcanepaltu.com",3],["bcanotesnepal.com",3],["bcsnoticias.mx",3],["bdix.app",3],["bdokan.com",3],["bdsomadhan.com",3],["bdstarshop.com",3],["beaddiagrams.com",3],["bearchasingart.com",3],["beatree.cn",3],["bedavahesap.org",3],["beisbolinvernal.com",3],["bengalxpress.in",3],["bestcrack.xyz",3],["bettingexchange.it",3],["bi-girl.net",3],["bibliotecadecorte.com",3],["bibliotecahermetica.com.br",3],["bidersnotu.com",3],["bif24.pl",3],["biftutech.com",3],["bigdata-social.com",3],["bimshares.com",3],["bishalghale.com.np",3],["bitcotasks.com",3],["bitlikutu.com",3],["bittukitech.in",3],["bitview.cloud",3],["bitzite.com",3],["blog.motionisland.com",3],["blog24.me",3],["blogk.com",3],["bloooog.it",3],["bloxyscripts.com",3],["bluebuddies.com",3],["bluecoreinside.com",3],["bogowieslowianscy.pl",3],["bonesmanhwa.online",3],["bookpraiser.com",3],["booksbybunny.com",3],["boxaoffrir.com",3],["boredgiant.com",3],["botinnifit.com",3],["boundlessnecromancer.com",3],["boxingvideo.org",3],["boxofficebusiness.in",3],["boystube.link",3],["braziliannr.com",3],["brevi.eu",3],["brian70.tw",3],["bright-b.com",3],["brightpets.org",3],["broadbottomvillage.co.uk",3],["brokensilenze.net",3],["brulosophy.com",3],["brushednickel.biz",3],["bsmaurya.com",3],["bugswave.com",3],["businesstrend.jp",3],["byswiizen.fr",3],["cafenau.com",3],["calculascendant.com",3],["calmarkcovers.com",3],["calvyn.com",3],["camcam.cc",3],["camnang24h.net",3],["canadanouvelles.com",3],["canaltdt.es",3],["captionpost.com",3],["carryflix.icu",3],["cashkar.in",3],["casperhd.com",3],["catatanonline.com",3],["cavalierstream.fr",3],["celebritablog.com",3],["celestialtributesonline.com",3],["cembarut.com.tr",3],["certificateland.com",3],["cg-method.com",3],["chachocool.com",3],["chakrirkhabar247.in",3],["championpeoples.com",3],["change-ta-vie-coaching.com",3],["charlottepilgrimagetour.com",3],["charpatra.com",3],["chart.services",3],["chatgbt.one",3],["chatgptfree.ai",3],["cheatermad.com",3],["check-imei.info",3],["cheese-cake.net",3],["chieflyoffer.com",3],["chihouban.com",3],["chineseanime.org",3],["christiantrendy.com",3],["cienagamagdalena.com",3],["cimbusinessevents.com.au",3],["cinema-sketch.com",3],["cinepiroca.com",3],["cizzyscripts.com",3],["claimclicks.com",3],["claydscap.com",3],["clockskin.us",3],["cloud9obits.com",3],["cocorip.net",3],["code-source.net",3],["codeandkey.com",3],["codeastro.com",3],["codeitworld.com",3],["codewebit.top",3],["coin-profits.xyz",3],["coinadpro.club",3],["coinbaby8.com",3],["coingraph.us",3],["cola16.app",3],["coleccionmovie.com",3],["colliersnews.com",3],["comeletspray.com",3],["cometogliere.com",3],["comoinstalar.me",3],["compota-soft.work",3],["conoscereilrischioclinico.it",3],["consigliatodanoi.it",3],["constructionplacement.org",3],["correction-livre-scolaire.fr",3],["coursesdaddy.com",3],["cpscan.xyz",3],["crackcodes.in",3],["crackthemes.com",3],["crackwatch.eu",3],["craigretailers.co.uk",3],["crazyashwin.com",3],["crazydeals.live",3],["creebhills.com",3],["creepyscans.com",3],["crn.pl",3],["cronachesalerno.it",3],["cryptomanga.online",3],["cryptonor.xyz",3],["cryptonworld.space",3],["cryptowidgets.net",3],["cta-fansite.com",3],["culture-informatique.net",3],["cyprus.co.il",3],["daemon-hentai.com",3],["daij1n.info",3],["dailytechupdates.in",3],["dailyweb.pl",3],["davidsonbuilders.com",3],["dabangbastar.com",3],["day4news.com",3],["daybuy.tw",3],["deathonnews.com",3],["dejongeturken.com",3],["delvein.tech",3],["demonictl.com",3],["demonyslowianskie.pl",3],["depressionhurts.us",3],["derusblog.com",3],["descargaranimes.com",3],["descargaseriestv.com",3],["design4months.com",3],["desirenovel.com",3],["desktopsolution.org",3],["destakenewsgospel.com",3],["destinationsjourney.com",3],["detikbangka.com",3],["dev-dark-blog.pantheonsite.io",3],["devilreturnstoschooldays.online",3],["devopslanka.com",3],["dewfuneralhomenews.com",3],["dhankasamaj.com",3],["diamondfansub.com",3],["diencobacninh.com",3],["digitalseoninja.com",3],["dignityobituary.com",3],["diplomaexamcorner.com",3],["dipprofit.com",3],["dir-tech.com",3],["diskizone.com",3],["diversanews.com",3],["diyprojectslab.com",3],["djqunjab.in",3],["djsofchhattisgarh.in",3],["dma-upd.org",3],["dominican-republic.co.il",3],["donghuaworld.com",3],["donlego.com",3],["doublemindtech.com",3],["doumura.com",3],["downloadbatch.me",3],["downloader.is",3],["downloads.sayrodigital.net",3],["downloadtanku.org",3],["dpscomputing.com",3],["drake-scans.com",3],["drakecomic.com",3],["dubaitime.net",3],["dvd-flix.com",3],["dvdgayonline.com",3],["e-food.jp",3],["e-kakoh.com",3],["earlymemorials.com",3],["earninginwork.com",3],["easyjapanesee.com",3],["easytodoit.com",3],["ecommercewebsite.store",3],["eczpastpapers.net",3],["editions-actu.org",3],["editorsadda.com",3],["edivaldobrito.com.br",3],["edjerba.com",3],["edukamer.info",3],["egram.com.ng",3],["einewelteinezukunft.de",3],["elcriticodelatele.com",3],["elcultura.pl",3],["elearning-cpge.com",3],["eleceedmanhwa.me",3],["embraceinnerchaos.com",3],["emperorscan.com",3],["empleo.com.uy",3],["encuentratutarea.com",3],["encurtareidog.top",3],["eng-news.com",3],["english-dubbed.com",3],["english-topics.com",3],["english101.co.za",3],["enryumanga.com",3],["ensenchat.com",3],["entenpost.com",3],["epicpdf.com",3],["epsilonakdemy.com",3],["eramuslim.com",3],["erreguete.gal",3],["ervik.as",3],["esportsmonk.com",3],["esportsnext.com",3],["et-invest.de",3],["eternalhonoring.com",3],["ethiopia.co.il",3],["everydayhomeandgarden.com",3],["evlenmekisteyenbayanlar.net",3],["ewybory.eu",3],["exam-results.in",3],["exeking.top",3],["expertskeys.com",3],["eymockup.com",3],["ezmanga.net",3],["faaduindia.com",3],["fapfapgames.com",3],["fapkingsxxx.com",3],["faqwiki.us",3],["farolilloteam.es",3],["fattelodasolo.it",3],["fchopin.net",3],["felicetommasino.com",3],["femisoku.net",3],["ferdroid.net",3],["fessesdenfer.com",3],["feyorra.top",3],["fhedits.in",3],["fhmemorial.com",3],["fibwatch.store",3],["filmypoints.in",3],["finalnews24.com",3],["financeandinsurance.xyz",3],["financeyogi.net",3],["financid.com",3],["finclub.in",3],["findheman.com",3],["findnewjobz.com",3],["fine-wings.com",3],["firescans.xyz",3],["fitnesshealtharticles.com",3],["fitnessscenz.com",3],["flashssh.net",3],["flexamens.com",3],["flowsnet.com",3],["fmhublog.xyz",3],["folkmord.se",3],["foodgustoso.it",3],["foodiesjoy.com",3],["footoks.online",3],["footymercato.com",3],["forex-yours.com",3],["forexcracked.com",3],["foxaholic.com",3],["francaisfacile.net",3],["free.7hd.club",3],["freebiesmockup.com",3],["freecoursesonline.me",3],["freedom3d.art",3],["freefiremaxofficial.com",3],["freefireupdate.com",3],["freegetcoins.com",3],["freelancerartistry.com",3],["freemedicalbooks.org",3],["freemovies-download.com",3],["freeoseocheck.com",3],["freepasses.org",3],["freescorespiano.com",3],["freetarotonline.com",3],["freetubetv.net",3],["freewoodworking.ca",3],["fresherbaba.com",3],["freshersgold.com",3],["frpgods.com",3],["ftuapps.dev",3],["fumettologica.it",3],["funeral-memorial.com",3],["funeralmemorialnews.com",3],["funeralobitsmemorial.com",3],["gabrielcoding.com",3],["gadgetxplore.com",3],["gadgetspidy.com",3],["gahag.net",3],["galaxytranslations10.com",3],["galaxytranslations97.com",3],["gameblog.jp",3],["gamenv.net",3],["gamefi-mag.com",3],["gamers-haven.org",3],["games-manuals.com",3],["gamerxyt.com",3],["gamevcore.com",3],["gaminglariat.com",3],["gamingsearchjournal.com",3],["gatagata.net",3],["ganzoscan.com",3],["gazetazachodnia.eu",3],["gdrivemovies.xyz",3],["geekering.com",3],["gemiadamlari.org",3],["gentiluomodigitale.it",3],["gesund-vital.online",3],["getsuicidegirlsfree.com",3],["ghostsfreaks.com",3],["gisvacancy.com",3],["giuseppegravante.com",3],["gkbooks.in",3],["gkgsca.com",3],["gksansar.com",3],["globelempire.com",3],["gnusocial.jp",3],["goegoe.net",3],["gogetapast.com.br",3],["gogifox.com",3],["gogueducation.com",3],["gokerja.net",3],["gokushiteki.com",3],["golf.rapidmice.com",3],["gomov.bio",3],["goodriviu.com",3],["googlearth.selva.name",3],["gorating.in",3],["gotocam.net",3],["grafikos.cz",3],["grasta.net",3],["grazymag.com",3],["greasygaming.com",3],["greattopten.com",3],["grootnovels.com",3],["groovyfreestuff.com",3],["gsdn.live",3],["gsmfreezone.com",3],["gsmmessages.com",3],["gtavi.pl",3],["gwiazdatalkie.com",3],["habuteru.com",3],["hackingwala.com",3],["hackmodsapk.com",3],["hadakanonude.com",3],["hairjob.wpx.jp",3],["happy-otalife.com",3],["harbigol.com",3],["harley.top",3],["haveyaseenjapan.com",3],["hdhub4one.pics",3],["healthbeautybee.com",3],["healthfatal.com",3],["heartrainbowblog.com",3],["hechos.net",3],["hellenism.net",3],["heutewelt.com",3],["hhesse.de",3],["highdefdiscnews.com",3],["hilaw.vn",3],["hindimatrashabd.com",3],["hindishri.com",3],["hiphopa.net",3],["historichorizons.com",3],["hivetoon.com",3],["hobbykafe.com",3],["hockeyfantasytools.com",3],["hojii.net",3],["hookupnovel.com",3],["hopsion-consulting.com",3],["hostingreviews24.com",3],["hotspringsofbc.ca",3],["howtoblogformoney.net",3],["hub2tv.com",3],["hungarianhardstyle.hu",3],["hyderone.com",3],["hyogo.ie-t.net",3],["hypelifemagazine.com",3],["hypesol.com",3],["ideatechy.com",3],["idesign.wiki",3],["idevfast.com",3],["idevice.me",3],["idpvn.com",3],["iggtech.com",3],["ignoustudhelp.in",3],["ikarianews.gr",3],["ilbassoadige.it",3],["ilbolerodiravel.org",3],["indiasmagazine.com",3],["individualogist.com",3],["inertz.org",3],["infamous-scans.com",3],["infocycles.com",3],["infodani.net",3],["infojabarloker.com",3],["infrafandub.com",3],["infulo.com",3],["inlovingmemoriesnews.com",3],["inprogrammer.com",3],["inra.bg",3],["insideeducation.co.za",3],["insidememorial.com",3],["insider-gaming.com",3],["insurancepost.xyz",3],["intelligence-console.com",3],["interculturalita.it",3],["inventionsdaily.com",3],["iptvxtreamcodes.com",3],["isabihowto.com.ng",3],["italiadascoprire.net",3],["itmaniatv.com",3],["itopmusic.com",3],["itopmusics.com",3],["itopmusicx.com",3],["itz-fast.com",3],["iumkit.net",3],["iwb.jp",3],["jackofalltradesmasterofsome.com",3],["jaktsidan.se",3],["japannihon.com",3],["javcock.com",3],["jcutrer.com",3],["jk-market.com",3],["jkhentai.co",3],["jobsbd.xyz",3],["jobslampung.net",3],["josemo.com",3],["jra.jpn.org",3],["jrlinks.in",3],["jungyun.net",3],["juninhoscripts.com.br",3],["juventusfc.hu",3],["kacikcelebrytow.com",3],["kagohara.net",3],["kakiagune.com",3],["kali.wiki",3],["kana-mari-shokudo.com",3],["kanaeblog.net",3],["kandisvarlden.com",3],["karaoke4download.com",3],["kawaguchimaeda.com",3],["kaystls.site",3],["kenkou-maintenance.com",3],["kenta2222.com",3],["kgs-invest.com",3],["kh-pokemon-mc.com",3],["khabarbyte.com",3],["khabardinbhar.net",3],["khohieu.com",3],["kickcharm.com",3],["kinisuru.com",3],["kits4beats.com",3],["kllproject.lv",3],["know-how-tree.com",3],["kobitacocktail.com",3],["kodaika.com",3],["kodewebsite.com",3],["kokosovoulje.com",3],["koreanbeauty.club",3],["korogashi-san.org",3],["korsrt.eu.org",3],["kotanopan.com",3],["koume-in-huistenbosch.net",3],["krx18.com",3],["kukni.to",3],["kupiiline.com",3],["kurosuen.live",3],["labstory.in",3],["ladypopularblog.com",3],["lamorgues.com",3],["lampungkerja.com",3],["lapaginadealberto.com",3],["lascelebrite.com",3],["latinlucha.es",3],["law101.org.za",3],["lawweekcolorado.com",3],["learnedclub.com",3],["learnmany.in",3],["learnchannel-tv.com",3],["learnodo-newtonic.com",3],["learnospot.com",3],["learnslovak.online",3],["lebois-racing.com",3],["lectormh.com",3],["leechyscripts.net",3],["leeapk.com",3],["legendaryrttextures.com",3],["lendrive.web.id",3],["letrasgratis.com.ar",3],["levismodding.co.uk",3],["lgcnews.com",3],["lglbmm.com",3],["lheritierblog.com",3],["ligaset.com",3],["limcasports.xyz",3],["limontorrent.com",3],["limontorrents.com",3],["linkskibe.com",3],["linkvoom.com",3],["linkz.wiki",3],["linux-talks.com",3],["linuxexplain.com",3],["lionsfan.net",3],["literarysomnia.com",3],["littlepandatranslations.com",3],["livefootballempire.com",3],["lk21org.com",3],["loanpapa.in",3],["locurainformaticadigital.com",3],["logofootball.net",3],["lookism.me",3],["lordfix.xyz",3],["lotus-tours.com.hk",3],["ltpcalculator.in",3],["luchaonline.com",3],["luciferdonghua.in",3],["luckymood777.com",3],["lucrebem.com.br",3],["lustesthd.cloud",3],["lustesthd.lat",3],["lycee-maroc.com",3],["macrocreator.com",3],["madevarquitectos.com",3],["maisondeas.com",3],["maketoss.com",3],["makeupguide.net",3],["makotoichikawa.net",3],["malluporno.com",3],["mamtamusic.in",3],["mangcapquangvnpt.com",3],["mantrazscan.com",3],["marketedgeofficial.com",3],["marketing-business-revenus-internet.fr",3],["marketrevolution.eu",3],["masashi-blog418.com",3],["mastakongo.info",3],["masterpctutoriales.com",3],["maths101.co.za",3],["matomeiru.com",3],["matshortener.xyz",3],["mdn.lol",3],["medeberiya1.com",3],["mediascelebres.com",3],["medytour.com",3],["meilblog.com",3],["memorialnotice.com",3],["mentalhealthcoaching.org",3],["meteoregioneabruzzo.it",3],["mhscans.com",3],["michiganrugcleaning.cleaning",3],["midis.com.ar",3],["minddesignclub.org",3],["minecraftwild.com",3],["minhasdelicias.com",3],["mitaku.net",3],["mitsmits.com",3],["mixmods.com.br",3],["mm-scans.org",3],["mmorpgplay.com.br",3],["mockupcity.com",3],["mockupgratis.com",3],["modele-facture.com",3],["modyster.com",3],["monaco.co.il",3],["morinaga-office.net",3],["mosttechs.com",3],["motofan-r.com",3],["moviemod.online",3],["movierr.site",3],["movieping.com",3],["moviesnipipay.me",3],["mrfreemium.blogspot.com",3],["mscdroidlabs.es",3],["msonglyrics.com",3],["mtech4you.com",3],["multimovies.tech",3],["mundovideoshd.com",3],["murtonroofing.com",3],["musicforchoir.com",3],["musictip.net",3],["mxcity.mx",3],["mxpacgroup.com",3],["my-ford-focus.de",3],["myglamwish.com",3],["myicloud.info",3],["mylinkat.com",3],["mylivewallpapers.com",3],["mypace.sasapurin.com",3],["myqqjd.com",3],["mytectutor.com",3],["myunity.dev",3],["myviptuto.com",3],["nagpurupdates.com",3],["naijagists.com",3],["naijdate.com",3],["najboljicajevi.com",3],["nakiny.com",3],["nameart.in",3],["nartag.com",3],["naturalmentesalute.org",3],["naturomicsworld.com",3],["naveedplace.com",3],["navinsamachar.com",3],["neet.wasa6.com",3],["neifredomar.com",3],["nekoscans.com",3],["nemumemo.com",3],["nepaljobvacancy.com",3],["neservicee.com",3],["netsentertainment.net",3],["neuna.net",3],["newbookmarkingsite.com",3],["newfreelancespot.com",3],["newlifefuneralhomes.com",3],["news-geinou100.com",3],["newscard24.com",3],["newstechone.com",3],["nghetruyenma.net",3],["nichetechy.com",3],["nin10news.com",3],["nicetube.one",3],["ninjanovel.com",3],["niteshyadav.in",3],["nknews.jp",3],["nkreport.jp",3],["noanyi.com",3],["nobodycancool.com",3],["noblessetranslations.com",3],["nocfsb.com",3],["nocsummer.com.br",3],["nodenspace.com",3],["nopay.info",3],["notandor.cn",3],["note1s.com",3],["notesformsc.org",3],["noteshacker.com",3],["novel-gate.com",3],["novelbob.com",3],["novelread.co",3],["nsfwr34.com",3],["nswdownload.com",3],["nswrom.com",3],["ntucgm.com",3],["nudeslegion.com",3],["nukedfans.com",3],["nukedpacks.site",3],["nulledmug.com",3],["nyangames.altervista.org",3],["nylonstockingsex.net",3],["oberschwaben-tipps.de",3],["obituary-deathnews.com",3],["obituaryupdates.com",3],["odekake-spots.com",3],["officialpanda.com",3],["ofppt.net",3],["ofwork.net",3],["omeuemprego.online",3],["omusubi-56rin.com",3],["onehack.us",3],["onestringlab.com",3],["onlinetechsamadhan.com",3],["onneddy.com",3],["onyxfeed.com",3],["oatuu.org",3],["openstartup.tm",3],["opiniones-empresas.com",3],["oracleerpappsguide.com",3],["orenoraresne.com",3],["oromedicine.com",3],["orunk.com",3],["otakuliah.com",3],["oteknologi.com",3],["otokukensaku.jp",3],["ottrelease247.com",3],["ovnihoje.com",3],["pabryyt.one",3],["palofw-lab.com",3],["paminy.com",3],["pandaatlanta.com",3],["pantube.top",3],["paolo9785.com",3],["papafoot.click",3],["papahd.club",3],["paris-tabi.com",3],["parisporn.org",3],["parking-map.info",3],["pasokau.com",3],["passionatecarbloggers.com",3],["passportaction.com",3],["pc-guru.it",3],["pc-spiele-wiese.de",3],["pcgamedownload.net",3],["pcgameszone.com",3],["pdfstandards.net",3],["pedalpower.online",3],["pepar.net",3],["personefamose.it",3],["petitestef.com",3],["pflege-info.net",3],["phoenix-manga.com",3],["phonefirmware.com",3],["physics101.co.za",3],["picgiraffe.com",3],["pilsner.nu",3],["piratemods.com",3],["piximfix.com",3],["plantatreenow.com",3],["plc4free.com",3],["pliroforiki-edu.gr",3],["plutoscripts.xyz",3],["poapan.xyz",3],["pogga.org",3],["pondit.xyz",3],["ponsel4g.com",3],["porlalibreportal.com",3],["pornfeel.com",3],["porninblack.com",3],["portaldoaz.org",3],["portaldosreceptores.org",3],["postazap.com",3],["postblog.xyz",3],["posturecorrectorshop-online.com",3],["prague-blog.co.il",3],["praveeneditz.com",3],["premierftp.com",3],["prensa.click",3],["pressemedie.dk",3],["pressurewasherpumpdiagram.com",3],["pricemint.in",3],["primemovies.pl",3],["prismmarketingco.com",3],["proapkdown.com",3],["projuktirkotha.com",3],["promiblogs.de",3],["promimedien.com",3],["promisingapps.com",3],["protestia.com",3],["psicotestuned.info",3],["psychology-spot.com",3],["publicdomainq.net",3],["publicdomainr.net",3],["publicidadtulua.com",3],["pupuweb.com",3],["putlog.net",3],["pynck.com",3],["quatvn.club",3],["questionprimordiale.fr",3],["quicktelecast.com",3],["radiantsong.com",3],["rabo.no",3],["rahim-soft.com",3],["rail-log.net",3],["ralli.ee",3],["ranjeet.best",3],["ranourano.xyz",3],["raulmalea.ro",3],["rbs.ta36.com",3],["rbscripts.net",3],["rctechsworld.in",3],["readfast.in",3],["realfreelancer.com",3],["recipenp.com",3],["redbubbletools.com",3],["redfaucet.site",3],["reeell.com",3],["renierassociatigroup.com",3],["reportbangla.com",3],["reprezentacija.rs",3],["retire49.com",3],["retrotv.org",3],["revistaapolice.com.br",3],["ribbelmonster.de",3],["rightdark-scan.com",3],["rinconpsicologia.com",3],["ritacandida.com",3],["rlshort.com",3],["rocdacier.com",3],["rollingwheel.xyz",3],["romaierioggi.it",3],["romaniasoft.ro",3],["romviet.com",[3,9]],["roshy.tv",3],["roznamasiasat.com",3],["rtxkeeda.com",3],["rubyskitchenrecipes.uk",3],["rumanicandle.online",3],["ruyamanga.com",3],["rv-ecommerce.com",3],["ryanmoore.marketing",3],["ryansharich.com",3],["s1os.icu",3],["s4msecurity.com",3],["s920221683.online.de",3],["sabishiidesu.com",3],["saekita.com",3],["samanarthishabd.in",3],["samovies.net",3],["samrudhiglobal.com",3],["sanmiguellive.com",3],["sararun.net",3],["sarkariresult.social",3],["satcesc.com",3],["savegame.pro",3],["sawwiz.com",3],["scansatlanticos.com",3],["schadeck.eu",3],["sezia.com",3],["schildempire.com",3],["scholarshiplist.org",3],["sciencebe21.in",3],["scontianastro.com",3],["scrap-blog.com",3],["scripcheck.great-site.net",3],["scriptsomg.com",3],["searchmovie.wp.xdomain.jp",3],["seasons-dlove.net",3],["seirsanduk.com",3],["seogroup.bookmarking.info",3],["seoworld.in",3],["setsuyakutoushi.com",3],["serieshdpormega.com",3],["server-tutorials.net",3],["serverbd247.com",3],["serverxfans.com",3],["shadagetech.com",3],["shanurdu.com",3],["shimauma-log.com",3],["shittokuadult.net",3],["shlly.com",3],["shogaisha-shuro.com",3],["shogaisha-techo.com",3],["shopkensaku.com",3],["shorttrick.in",3],["showrovblog.com",3],["shrinklinker.com",3],["shrinkus.tk",3],["shrivardhantech.in",3],["sieradmu.com",3],["siimanga.cyou",3],["siirtolayhaber.com",3],["sim-kichi.monster",3],["sivackidrum.net",3],["sk8therapy.fr",3],["skardu.pk",3],["slawoslaw.pl",3],["slowianietworza.pl",3],["smallseotools.ai",3],["smartinhome.pl",3],["snowman-information.com",3],["soccermlbstream.xyz",3],["socebd.com",3],["sociallyindian.com",3],["softcobra.com",3],["softrop.com",3],["sohohindi.com",3],["sosuroda.pl",3],["south-park-tv.biz",3],["soziologie-politik.de",3],["sp500-up.com",3],["space-faucet.com",3],["spacestation-online.com",3],["spardhanews.com",3],["speak-english.net",3],["speculationis.com",3],["spidergame.online",3],["spinoff.link",3],["spiritparting.com",3],["sport-97.com",3],["sportsblend.net",3],["stablediffusionxl.com",3],["stadelahly.net",3],["stahnivideo.cz",3],["stakes100.xyz",3],["starsgtech.in",3],["startupjobsportal.com",3],["ster-blog.xyz",3],["stireazilei.eu",3],["stock-rom.com",3],["streamseeds24.com",3],["strefa.biz",3],["studybullet.com",3],["sufanblog.com",3],["sukuyou.com",3],["sundberg.ws",3],["suneelkevat.com",3],["super-ethanol.com",3],["superpackpormega.com",3],["surgicaltechie.com",3],["swietaslowianskie.pl",3],["sysguides.com",3],["system32.ink",3],["ta3arof.net",3],["taariikh.net",3],["tabonitobrasil.tv",3],["taisha-diet.com",3],["talentstareducation.com",3],["tamilanzone.com",3],["tamilhit.tech",3],["tamilnaadi.com",3],["tamilultra.team",3],["tatsublog.com",3],["tbazzar.com",3],["teachersupdates.net",3],["team-octavi.com",3],["team-rcv.xyz",3],["teamkong.tk",3],["teamupinternational.com",3],["techacrobat.com",3],["techastuces.com",3],["techbytesblog.com",3],["techdriod.com",3],["techedubyte.com",[3,22]],["techiepirates.com",3],["techiestalk.in",3],["techkeshri.com",3],["technewslive.org",3],["technewsrooms.com",3],["technicalviral.com",3],["technorj.com",3],["technorozen.com",3],["techoreview.com",3],["techprakash.com",3],["techsbucket.com",3],["techstwo.com",3],["techyhigher.com",3],["techyrick.com",3],["tecnomd.com",3],["tecnoscann.com",3],["tedenglish.site",3],["tehnotone.com",3],["telephone-soudan.com",3],["teluguhitsandflops.com",3],["temporeale.info",3],["tenbaiquest.com",3],["tespedia.com",3],["testious.com",3],["thangdangblog.com",3],["thaript.com",3],["the-loop.xyz",3],["theapothecarydiariesmanga.com",3],["thebigblogs.com",3],["thedilyblog.com",3],["thermoprzepisy.pl",3],["theworldobits.com",3],["thebreakermanga.online",3],["thecannalysts.blog",3],["theconomy.me",3],["thegamearcade.com",3],["theinternettaughtme.com",3],["thejoblives.com",3],["thelastgamestandingexp.com",3],["theliveupdate.com",3],["thenewsglobe.net",3],["theprofoundreport.com",3],["thesleak.com",3],["thesportsupa.com",3],["thewambugu.com",3],["thiagorossi.com.br",3],["throwsmallstone.com",3],["titfuckvideos.com",3],["tirumalatirupatiyatra.in",3],["tnewsnetwork.com",3],["today-obits.com",3],["todays-obits.com",3],["toeflgratis.com",3],["tokoasrimotedanpayet.my.id",3],["toorco.com",3],["top10trends.net",3],["topfaucet.us",3],["topsworldnews.com",3],["toptenknowledge.com",3],["torrentdofilmeshd.net",3],["torrentgame.org",3],["totally.top",3],["towerofgod.top",3],["tr3fit.xyz",3],["trendflatt.com",3],["trendohunts.com",3],["trgtkls.org",3],["tukangsapu.net",3],["tunabagel.net",3],["turkeymenus.com",3],["turkishseriestv.net",3],["tutorialesdecalidad.com",3],["tutorialsduniya.com",3],["twodots.com.br",3],["tw.xn--h9jepie9n6a5394exeq51z.com",3],["uciteljica.net",3],["udemyking.com",3],["uiuxsource.com",3],["ukigmoch.com",3],["umabomber.com",3],["unityassets4free.com",3],["uozzart.com",3],["uploadbank.com",3],["uprwssp.org",3],["usahealthandlifestyle.com",3],["ustimz.com",3],["ustvgo.live",3],["utaitebu.com",3],["uur-tech.net",3],["vamsivfx.com",3],["vanderheide.online",3],["vedetta.org",3],["veganab.co",3],["venus-and-mars.com",3],["vibezhub.com.ng",3],["viciante.com.br",3],["villettt.kitchen",3],["violablu.net",3],["virabux.com",3],["virtual-youtuber.jp",3],["visorsmr.com",3],["visortecno.com",3],["vitadacelebrita.com",3],["vivrebordeaux.fr",3],["vmorecloud.com",3],["vnuki.net",3],["voiceloves.com",3],["voidtruth.com",3],["voiranime1.fr",3],["vstplugin.net",3],["warungkomik.com",3],["webacademix.com",3],["webcamfuengirola.com",3],["webcras.com",3],["webhostingoffer.org",3],["websiteglowgh.com",3],["welcometojapan.jp",3],["whats-new.cyou",3],["wheelofgold.com",3],["wholenotism.com",3],["windbreaker.me",3],["windowsaplicaciones.com",3],["wirtualnelegionowo.pl",3],["wirtualnynowydwor.pl",3],["workxvacation.jp",3],["worldgyan18.com",3],["worldtop2.com",3],["worldwidestandard.net",3],["worthitorwoke.com",3],["wp.solar",3],["wpteq.org",3],["writeprofit.org",3],["xiaomitools.com",3],["xmoviepro.xyz",3],["xn--kckzb2722b.com",3],["xn--n8jwbyc5ezgnfpeyd3i0a3ow693bw65a.com",3],["xn--nbkw38mlu2a.com",3],["yakisurume.com",3],["yakyufan-asobiba.com",3],["yaspage.com",3],["yawm.online",3],["yazilidayim.net",3],["ycongnghe.com",3],["yestech.xyz",3],["ynk-blog.com",3],["youlife24.com",3],["youpit.xyz",3],["your-local-pest-control.com",3],["yourdesignmagazine.com",3],["yuatools.com",3],["yuki0918kw.com",3],["yumekomik.com",3],["yuramanga.my.id",3],["yurudori.com",3],["zerogptai.org",3],["zien.pl",3],["ziminvestors.com",3],["zippyshare.cloud",3],["zippysharecue.com",3],["znanemediablog.com",3],["/altyazitube[0-9a-z]+\\.[a-z]{2,}/",3],["intro-hd.net",3],["mdbekjwqa.pw",4],["tmohentai.com",5],["bonsaiprolink.shop",6],["exactlyhowlong.com",6],["maos4alaw.online",6],["kumapoi.info",6],["blogcreativos.com",6],["flixlatam.com",6],["samurai.ragnarokscanlation.org",6],["tech5s.co",6],["phpscripttr.com",6],["descargaspcpro.net",6],["dotadostube.com",6],["taradinhos.com",6],["game-2u.com",6],["toramemoblog.com",6],["gplastra.com",6],["okleak.com",6],["afly.pro",6],["ithinkilikeyou.net",6],["milanreports.com",6],["towerofgod.me",6],["crotpedia.net",6],["158.220.106.212",6],["papahd.co",6],["drakescans.com",6],["watchfacebook.com",6],["web1s.asia",6],["bokugents.com",6],["newzjunky.com",6],["yourlifeupdated.net",6],["lscomic.com",6],["tv.durbinlive.com",6],["freeltc.online",6],["pornleaks.in",6],["dudestream.com",6],["areascans.net",6],["aeonax.com",7],["hentaihaven.xxx",7],["telemporio4.blogspot.com",7],["embed.streamx.me",7],["techoreels.com",7],["jpopsingles.eu",9],["tinys.click",9],["getintoway.com",9],["afronudes.com",9],["allcelebspics.com",9],["alttyab.net",9],["androjungle.com",9],["anonym-ads.xyz",9],["arkadmin.fr",9],["azoranov.com",9],["bacasitus.com",9],["barranquillaestereo.com",9],["bazaarwedding.com",9],["blogbhaiya.com",9],["brasilsimulatormods.com",9],["cambrevenements.com",9],["cartoonstvonline.com",9],["codecap.org",9],["comparili.net",9],["deephub.cyou",9],["descargasalinstante.com",9],["diaobe.net",9],["filegajah.com",9],["filmestorrent.tv",9],["flicksnchill.com",9],["franceprefecture.fr",9],["freecricket.net",9],["gcpainters.com",9],["germanvibes.org",9],["getmaths.co.uk",9],["gewinnspiele-markt.com",9],["hamzag.com",9],["hannibalfm.net",9],["hornyconfessions.com",9],["ilcamminodiluce.it",9],["joguinhosgratis.com",9],["joziporn.com",9],["justpaste.top",9],["katoikos.world",9],["kozyrom.com",9],["kumiste.com",9],["mbc2.live",9],["mctechsolutions.in",9],["measam.com",9],["medibok.se",9],["megafire.net",9],["mirrorpoi.com",9],["mirrorpoi.my.id",9],["mockuphunts.com",9],["moroccantea.uk",9],["mortaltech.com",9],["multivideodownloader.com",9],["nauci-engleski.com",9],["nauci-njemacki.com",9],["nekopoi.my.id",9],["nuketree.com",9],["nullpro.tech",9],["pa1n.xyz",9],["playertv.net",9],["pornhubtrending.net",9],["premiumthemes.shop",9],["programsolve.com",9],["radio-deejay.com",9],["ranaaclanhungary.com",9],["rasoi.me",9],["riprendiamocicatania.com",9],["rsrlink.in",9],["seriesperu.com",9],["shmapp.ca",9],["shorthttp.online",9],["sub2unlocker.com",9],["saygrupmekanik.com",9],["skillmineopportunities.com",9],["teczpert.com",9],["totalsportek.app",9],["tromcap.com",9],["tv0800.com",9],["tv3monde.com",9],["uiiumovies.net",9],["ustrendynews.com",9],["vidoza.xyz",9],["watchnow.fun",9],["weashare.com",9],["webdexscans.com",9],["xvideostrending.org",9],["yelitzonpc.com",9],["ymknow.xyz",9],["zimabadko.com",9],["defienietlynotme.com",10],["filemooon.top",[10,23]],["fmembed.cc",10],["fmhd.bar",10],["fmoonembed.pro",10],["rgeyyddl.skin",10],["sbnmp.bar",10],["sulleiman.com",10],["vpcxz19p.xyz",10],["kickassanime.ch",11],["arldeemix.com",12],["gsmware.com",12],["moonplusnews.com",13],["loanoffering.in",13],["myprivatejobs.com",13],["wikitraveltips.com",13],["cmphost.com",13],["drinkspartner.com",13],["uploadsoon.com",13],["wp.uploadfiles.in",13],["viralxns.com",13],["tmail.io",14],["techacode.com",15],["sideplusleaks.com",15],["azmath.info",16],["downfile.site",16],["downphanmem.com",16],["expertvn.com",16],["memangbau.com",16],["trangchu.news",16],["aztravels.net",16],["adultcomixxx.com",16],["maccanismi.it",17],["gamesrepacks.com",17],["techhelpbd.com",17],["broflix.club",17],["pokemundo.com",17],["lewebde.com",17],["cazztv.xyz",17],["app.covemarkets.com",17],["kimcilonly.top",17],["tabele-kalorii.pl",18],["hentaistream.com",19],["nudeselfiespics.com",19],["hentaivideos.net",19],["booksrack.net",20],["cubehosting.me",21],["ergasiakanea.eu",22],["surfsees.com",22],["conghuongtu.net",22],["downloadlyir.com",22],["ipamod.com",22],["apkdrill.com",22],["a-ha.io",24],["cboard.net",24],["jjang0u.com",24],["joongdo.co.kr",24],["viva100.com",24],["thephoblographer.com",24],["gamingdeputy.com",24],["thesaurus.net",24],["alle-tests.nl",24],["maketecheasier.com",24],["automobile-catalog.com",24],["motorbikecatalog.com",24],["meconomynews.com",24],["brandbrief.co.kr",24],["motorgraph.com",24],["topstarnews.net",24],["autosport.com",25],["motorsport.com",25],["javmoon.me",26],["cdn.gledaitv.live",27],["mgnetu.com",28],["pepperlive.info",28],["iptv-list.live",29],["kurakura21.space",30]]);

const entitiesMap = new Map([["shrink",1],["24pdd",3],["audiotools",3],["autosport",3],["eventiavversinews",3],["flixhub",3],["freevstplugins",3],["gogetadoslinks",3],["haryanaalert",3],["itdmusic",3],["javboys",3],["keroseed",3],["m4u",3],["magesypro",3],["mcrypto",3],["movies4u",3],["nishankhatri",3],["poplinks",3],["ragnarokscanlation",3],["rgmovies",3],["sheikhmovies",3],["userupload",3],["xprime4u",3],["mlwbd",6],["katmoviefix",6],["layardrama21",6],["sdmoviespoint",6],["file-upload",8],["an1me",9],["papafoot",9],["embedme",10],["finfang",10],["hellnaw",10],["moonembed",10],["z12z0vla",10],["fc-lc",14],["azsoft",16],["pasteit",18]]);

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
