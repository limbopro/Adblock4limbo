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

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_noEvalIf = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["replace"],["ExoLoader"],["/chp_?ad/"],["setInterval"],["tmohentai"],["ads"],["debugger"],["ppu"],["adsBlocked"],["/popunder/i"],["shift"],["adblock"],["adsbygoogle"],["/fairAdblock|chp_adblock|adsbygoogle\\.js/"],["ppuQnty"],["adb"],["chp_ad"],["show"],["AdBlock"],["popUnderStage"],["deblocker"],["popunder"],["/07c225f3\\.online|content-loader\\.com|css-load\\.com|html-load\\.com/"],["interactionCount"],["Popunder"],["String.fromCharCode"],["blocker"],["fairAdblock"],["isFairAdBlocker"],["UserCustomPop"],["AdBlocker"],["typeof"]];

const hostnamesMap = new Map([["orgyxxxhub.com",0],["junkyponk.com",0],["healthfirstweb.com",0],["vocalley.com",0],["yogablogfit.com",0],["howifx.com",0],["en.financerites.com",0],["mythvista.com",0],["livenewsflix.com",0],["cureclues.com",0],["apekite.com",0],["flash-firmware.blogspot.com",0],["uploady.io",0],["taodung.com",0],["mangaesp.co",0],["3movs.com",1],["zegtrends.com",2],["copypastescan.xyz",2],["tainguyenmienphi.com",2],["questloops.com",2],["yoshare.net",2],["tea-coffee.net",2],["spatsify.com",2],["newedutopics.com",2],["getviralreach.in",2],["edukaroo.com",2],["funkeypagali.com",2],["careersides.com",2],["nayisahara.com",2],["wikifilmia.com",2],["infinityskull.com",2],["viewmyknowledge.com",2],["iisfvirtual.in",2],["starxinvestor.com",2],["jkssbalerts.com",2],["acetack.com",2],["blog.carstopia.net",2],["blog.carsmania.net",2],["redfea.com",2],["pranarevitalize.com",2],["techyinfo.in",2],["fitnessholic.net",2],["moderngyan.com",2],["sattakingcharts.in",2],["freshbhojpuri.com",2],["bgmi32bitapk.in",2],["bankshiksha.in",2],["earn.mpscstudyhub.com",2],["earn.quotesopia.com",2],["money.quotesopia.com",2],["best-mobilegames.com",2],["learn.moderngyan.com",2],["bharatsarkarijobalert.com",2],["quotesopia.com",2],["creditsgoal.com",2],["ikramlar.online",2],["mooonten.com",2],["msic.site",2],["fx-22.com",2],["gold-24.net",2],["forexrw7.com",2],["mtcremix.com",2],["advicefunda.com",2],["bestloanoffer.net",2],["computerpedia.in",2],["techconnection.in",2],["bollywoodchamp.in",2],["texw.online",2],["kiemlua.com",2],["link1s.com",2],["bloggingguidance.com",2],["onroid.com",2],["coinsrev.com",2],["10-train.com",2],["110tutorials.com",2],["103.74.5.104",2],["185.193.17.214",2],["207hd.com",2],["247beatz.ng",2],["247footballnow.com",2],["27-sidefire-blog.com",2],["2best.club",2],["2the.space",2],["30kaiteki.com",2],["3dyasan.com",2],["3fnews.com",2],["3rabsports.com",2],["4drumkits.com",2],["4fans.gay",2],["4fingermusic.com",2],["4gousya.net",2],["4horlover.com",2],["4spaces.org",2],["519.best",2],["51sec.org",2],["60fps.xyz",2],["80-talet.se",2],["9alami.info",2],["9ketsuki.info",2],["a2zbookmark.com",2],["aboedman.com",2],["addtobucketlist.com",2],["adisann.com",2],["adminreboot.com",2],["adsurfle.com",2],["adsy.pw",2],["advertafrica.net",2],["adnan-tech.com",2],["africue.com",2],["aghasolution.com",2],["aitoolsfree.org",2],["aitohuman.org",2],["aiyumangascanlation.com",2],["akihabarahitorigurasiseikatu.com",2],["alanyapower.com",2],["albania.co.il",2],["albinofamily.com",2],["algodaodocescan.com.br",2],["allcalidad.app",2],["allcelebritywiki.com",2],["allcivilstandard.com",2],["alliptvlinks.com",2],["alliptvs.com",2],["almofed.com",2],["altcryp.com",2],["altselection.com",2],["altyazitube22.lat",2],["amaturehomeporn.com",2],["amnaymag.com",2],["amritadrino.com",[2,13]],["amtil.com.au",2],["andani.net",2],["androidadult.com",2],["androidfacil.org",2],["angolopsicologia.com",2],["anime4mega.net",2],["anime4mega-descargas.net",2],["anime7.download",2],["anime-torrent.com",2],["animecenterbr.com",2],["animesonlineshd.com",2],["animetwixtor.com",2],["animexin.vip",2],["anmup.com.np",2],["anodee.com",2],["anonyviet.com",2],["anothergraphic.org",2],["aoseugosto.com",2],["aozoraapps.net",2],["apenasmaisumyaoi.com",2],["apkdink.com",2],["apostoliclive.com",2],["appdoze.com",2],["applediagram.com",2],["aprenderquechua.com",2],["arabstd.com",2],["articlebase.pk",2],["articlemela.xyz",2],["articlesmania.me",2],["articlespost.xyz",2],["ascalonscans.com",2],["asiansexdiarys.com",2],["askcerebrum.com",2],["askushowto.com",2],["aspirapolveremigliori.it",2],["astroages.com",2],["astrumscans.xyz",2],["atgstudy.com",2],["atlantisscan.com",2],["atleticalive.it",2],["atozmovies.xyz",2],["audiobookexchangeplace.com",2],["audiotrip.org",2],["auroraconeyisland.xyz",2],["autodime.com",2],["autoindustry.ro",2],["automat.systems",2],["automothink.com",2],["avitter.net",2],["awpd24.com",2],["ayatoon.com",2],["ayuka.link",2],["azamericasat.net",2],["azdly.com",2],["azlyrics.online",2],["azores.co.il",2],["azrom.net",2],["babehubonlyfansly.com",2],["backyardpapa.com",2],["baixedetudo.com.br",2],["balkanteka.net",2],["bandstand.ph",2],["batman.city",2],["bcanepaltu.com",2],["bcanotesnepal.com",2],["bcsnoticias.mx",2],["bdix.app",2],["bdokan.com",2],["bdsomadhan.com",2],["bdstarshop.com",2],["beaddiagrams.com",2],["bearchasingart.com",2],["beatree.cn",2],["bedavahesap.org",2],["beisbolinvernal.com",2],["bengalxpress.in",2],["bestcrack.xyz",2],["bettingexchange.it",2],["bi-girl.net",2],["bibliotecadecorte.com",2],["bibliotecahermetica.com.br",2],["bidersnotu.com",2],["bif24.pl",2],["biftutech.com",2],["bigdata-social.com",2],["bimshares.com",2],["bishalghale.com.np",2],["bitcotasks.com",2],["bitlikutu.com",2],["bittukitech.in",2],["bitview.cloud",2],["bitzite.com",2],["blog.motionisland.com",2],["blog24.me",2],["blogk.com",2],["bloooog.it",2],["bloxyscripts.com",2],["bluebuddies.com",2],["bluecoreinside.com",2],["blurayufr.cam",2],["bogowieslowianscy.pl",2],["bonesmanhwa.online",2],["bookpraiser.com",2],["booksbybunny.com",2],["boredgiant.com",2],["botinnifit.com",2],["boundlessnecromancer.com",2],["boxaoffrir.com",2],["boxingvideo.org",2],["boxofficebusiness.in",2],["boystube.link",2],["braziliannr.com",2],["brevi.eu",2],["brian70.tw",2],["bright-b.com",2],["brightpets.org",2],["broadbottomvillage.co.uk",2],["brokensilenze.net",2],["brulosophy.com",2],["brushednickel.biz",2],["bshifast.live",2],["bsmaurya.com",2],["bugswave.com",2],["businesstrend.jp",2],["byswiizen.fr",2],["cafenau.com",2],["calculascendant.com",2],["calmarkcovers.com",2],["calvyn.com",2],["camcam.cc",2],["camnang24h.net",2],["canadanouvelles.com",2],["canaltdt.es",2],["captionpost.com",2],["carryflix.icu",2],["cashkar.in",2],["casperhd.com",2],["catatanonline.com",2],["cavalierstream.fr",2],["celebritablog.com",2],["celestialtributesonline.com",2],["cembarut.com.tr",2],["certificateland.com",2],["cg-method.com",2],["chachocool.com",2],["chakrirkhabar247.in",2],["championpeoples.com",2],["change-ta-vie-coaching.com",2],["charlottepilgrimagetour.com",2],["charpatra.com",2],["chart.services",2],["chatgbt.one",2],["chatgptfree.ai",2],["cheatermad.com",2],["check-imei.info",2],["cheese-cake.net",2],["chevalmag.com",2],["chieflyoffer.com",2],["chihouban.com",2],["chineseanime.org",2],["christiantrendy.com",2],["cienagamagdalena.com",2],["cimbusinessevents.com.au",2],["cinema-sketch.com",2],["cinepiroca.com",2],["cizzyscripts.com",2],["claimclicks.com",2],["claydscap.com",2],["clockskin.us",2],["cloud9obits.com",2],["cocorip.net",2],["code-source.net",2],["codeandkey.com",2],["codeastro.com",2],["codeitworld.com",2],["codewebit.top",2],["coin-profits.xyz",2],["coinadpro.club",2],["coinbaby8.com",2],["coingraph.us",2],["cola16.app",2],["coleccionmovie.com",2],["colliersnews.com",2],["comeletspray.com",2],["cometogliere.com",2],["comoinstalar.me",2],["compota-soft.work",2],["conoscereilrischioclinico.it",2],["consigliatodanoi.it",2],["constructionplacement.org",2],["correction-livre-scolaire.fr",2],["coursesdaddy.com",2],["cpscan.xyz",2],["crackcodes.in",2],["crackthemes.com",2],["crackwatch.eu",2],["craigretailers.co.uk",2],["crazyashwin.com",2],["crazydeals.live",2],["creebhills.com",2],["creepyscans.com",2],["crn.pl",2],["cronachesalerno.it",2],["crunchytech.net",2],["cryptomanga.online",2],["cryptonor.xyz",2],["cryptonworld.space",2],["cryptowidgets.net",2],["cta-fansite.com",2],["culture-informatique.net",2],["cyprus.co.il",2],["daemon-hentai.com",2],["daij1n.info",2],["dailykpop.net",2],["dailytechupdates.in",2],["dailyweb.pl",2],["davidsonbuilders.com",2],["dabangbastar.com",2],["day4news.com",2],["daybuy.tw",2],["deathonnews.com",2],["dejongeturken.com",2],["delvein.tech",2],["demonictl.com",2],["demonyslowianskie.pl",2],["depressionhurts.us",2],["derusblog.com",2],["descargaranimes.com",2],["descargaseriestv.com",2],["design4months.com",2],["desirenovel.com",2],["desktopsolution.org",2],["destakenewsgospel.com",2],["destinationsjourney.com",2],["detikbangka.com",2],["dev-dark-blog.pantheonsite.io",2],["devilreturnstoschooldays.online",2],["devopslanka.com",2],["dewfuneralhomenews.com",2],["dhankasamaj.com",2],["diamondfansub.com",2],["diencobacninh.com",2],["digitalseoninja.com",2],["dignityobituary.com",2],["diplomaexamcorner.com",2],["dipprofit.com",2],["dir-tech.com",2],["diskizone.com",2],["diversanews.com",2],["diyprojectslab.com",2],["djqunjab.in",2],["djsofchhattisgarh.in",2],["dma-upd.org",2],["dominican-republic.co.il",2],["donghuaworld.com",2],["donlego.com",2],["doublemindtech.com",2],["doumura.com",2],["downloadbatch.me",2],["downloader.is",2],["downloads.sayrodigital.net",2],["downloadtanku.org",2],["dpscomputing.com",2],["drake-scans.com",2],["drakecomic.com",2],["drzna.com",2],["dubaitime.net",2],["dumovies.com",2],["downloads.wegomovies.com",2],["dvd-flix.com",2],["dvdgayonline.com",2],["e-food.jp",2],["e-kakoh.com",2],["earlymemorials.com",2],["earninginwork.com",2],["easyjapanesee.com",2],["easytodoit.com",2],["ecommercewebsite.store",2],["eczpastpapers.net",2],["editions-actu.org",2],["editorsadda.com",2],["edivaldobrito.com.br",2],["edjerba.com",2],["edukamer.info",2],["egram.com.ng",2],["einewelteinezukunft.de",2],["elcriticodelatele.com",2],["elcultura.pl",2],["elearning-cpge.com",2],["eleceedmanhwa.me",2],["embraceinnerchaos.com",2],["emperorscan.com",2],["empleo.com.uy",2],["encuentratutarea.com",2],["encurtareidog.top",2],["eng-news.com",2],["english-dubbed.com",2],["english-topics.com",2],["english101.co.za",2],["enryumanga.com",2],["ensenchat.com",2],["entenpost.com",2],["epicpdf.com",2],["epsilonakdemy.com",2],["eramuslim.com",2],["erreguete.gal",2],["ervik.as",2],["esportsmonk.com",2],["esportsnext.com",2],["et-invest.de",2],["eternalhonoring.com",2],["ethiopia.co.il",2],["everydayhomeandgarden.com",2],["evlenmekisteyenbayanlar.net",2],["ewybory.eu",2],["exam-results.in",2],["exeking.top",2],["expertskeys.com",2],["eymockup.com",2],["ezmanga.net",2],["faaduindia.com",2],["fapfapgames.com",2],["fapkingsxxx.com",2],["faqwiki.us",2],["farolilloteam.es",2],["fattelodasolo.it",2],["fchopin.net",2],["felicetommasino.com",2],["femisoku.net",2],["ferdroid.net",2],["fessesdenfer.com",2],["feyorra.top",2],["fhedits.in",2],["fhmemorial.com",2],["fibwatch.store",2],["filmypoints.in",2],["finalnews24.com",2],["financeandinsurance.xyz",2],["financeyogi.net",2],["financid.com",2],["finclub.in",2],["findheman.com",2],["findnewjobz.com",2],["fine-wings.com",2],["firescans.xyz",2],["fitnesshealtharticles.com",2],["fitnessscenz.com",2],["flashssh.net",2],["flexamens.com",2],["flowsnet.com",2],["fmhublog.xyz",2],["folkmord.se",2],["foodgustoso.it",2],["foodiesjoy.com",2],["footoks.online",2],["footyload.com",2],["footymercato.com",2],["forex-yours.com",2],["forexcracked.com",2],["former-railroad-worker.com",2],["foxaholic.com",2],["francaisfacile.net",2],["free.7hd.club",2],["freebiesmockup.com",2],["freecoursesonline.me",2],["freedom3d.art",2],["freefiremaxofficial.com",2],["freefireupdate.com",2],["freegetcoins.com",2],["freelancerartistry.com",2],["freemedicalbooks.org",2],["freemovies-download.com",2],["freeoseocheck.com",2],["freepasses.org",2],["freescorespiano.com",2],["freetarotonline.com",2],["freetubetv.net",2],["freewoodworking.ca",2],["fresherbaba.com",2],["freshersgold.com",2],["frpgods.com",2],["fumettologica.it",2],["funeral-memorial.com",2],["funeralmemorialnews.com",2],["funeralobitsmemorial.com",2],["gabrielcoding.com",2],["gadgetspidy.com",2],["gadgetxplore.com",2],["gahag.net",2],["galaxytranslations10.com",2],["galaxytranslations97.com",2],["gameblog.jp",2],["gamefi-mag.com",2],["gamenv.net",2],["gamers-haven.org",2],["gamerxyt.com",2],["games-manuals.com",2],["gamevcore.com",2],["gaminglariat.com",2],["gamingsearchjournal.com",2],["ganzoscan.com",2],["gatagata.net",2],["gazetazachodnia.eu",2],["gdrivemovies.xyz",2],["geekering.com",2],["gemiadamlari.org",2],["gentiluomodigitale.it",2],["gesund-vital.online",2],["getsuicidegirlsfree.com",2],["ghostsfreaks.com",2],["girlydrop.com",2],["gisvacancy.com",2],["giuseppegravante.com",2],["gkbooks.in",2],["gkgsca.com",2],["gksansar.com",2],["glo-n.online",2],["globelempire.com",2],["gnusocial.jp",2],["goegoe.net",2],["gogetapast.com.br",2],["gogifox.com",2],["gogueducation.com",2],["gokerja.net",2],["gokushiteki.com",2],["golf.rapidmice.com",2],["gomov.bio",2],["goodriviu.com",2],["googlearth.selva.name",2],["gorating.in",2],["gotocam.net",2],["grafikos.cz",2],["grasta.net",2],["grazymag.com",2],["greasygaming.com",2],["greattopten.com",2],["grootnovels.com",2],["groovyfreestuff.com",2],["gsdn.live",2],["gsmfreezone.com",2],["gsmmessages.com",2],["gtavi.pl",2],["gvnvh.net",2],["gwiazdatalkie.com",2],["habuteru.com",2],["hackingwala.com",2],["hackmodsapk.com",2],["hadakanonude.com",2],["hairjob.wpx.jp",2],["happy-otalife.com",2],["harbigol.com",2],["harley.top",2],["haveyaseenjapan.com",2],["haqem.com",2],["hdhub4one.pics",2],["healthbeautybee.com",2],["healthfatal.com",2],["heartrainbowblog.com",2],["hechos.net",2],["helicomicro.com",[2,12]],["hellenism.net",2],["heutewelt.com",2],["hhesse.de",2],["highdefdiscnews.com",2],["hilaw.vn",2],["hindi.trade",2],["hindimatrashabd.com",2],["hindishri.com",2],["hiphopa.net",2],["historichorizons.com",2],["hivetoon.com",2],["hobbykafe.com",2],["hockeyfantasytools.com",2],["hojii.net",2],["hoofoot.net",2],["hookupnovel.com",2],["hopsion-consulting.com",2],["hostingreviews24.com",2],["hotspringsofbc.ca",2],["howtoblogformoney.net",2],["hub2tv.com",2],["hungarianhardstyle.hu",2],["hyderone.com",2],["hyogo.ie-t.net",2],["hypelifemagazine.com",2],["hypesol.com",2],["ideatechy.com",2],["idesign.wiki",2],["idevfast.com",2],["idevice.me",2],["idpvn.com",2],["iggtech.com",2],["ignoustudhelp.in",2],["ikarianews.gr",2],["ilbassoadige.it",2],["ilbolerodiravel.org",2],["imperiofilmes.co",2],["indiasmagazine.com",2],["individualogist.com",2],["inertz.org",2],["infamous-scans.com",2],["infocycles.com",2],["infodani.net",2],["infojabarloker.com",2],["infrafandub.com",2],["infulo.com",2],["inlovingmemoriesnews.com",2],["inprogrammer.com",2],["inra.bg",2],["insideeducation.co.za",2],["insidememorial.com",2],["insider-gaming.com",2],["insurancepost.xyz",2],["intelligence-console.com",2],["interculturalita.it",2],["inventionsdaily.com",2],["iptvxtreamcodes.com",2],["isabihowto.com.ng",2],["italiadascoprire.net",2],["itmaniatv.com",2],["itopmusic.com",2],["itopmusics.com",2],["itopmusicx.com",2],["itz-fast.com",2],["iumkit.net",2],["iwb.jp",2],["jackofalltradesmasterofsome.com",2],["jaktsidan.se",2],["japannihon.com",2],["javcock.com",2],["jcutrer.com",2],["jk-market.com",2],["jkhentai.co",2],["jobsbd.xyz",2],["jobsibe.com",2],["jobslampung.net",2],["jolk.online",2],["josemo.com",2],["jra.jpn.org",2],["jrlinks.in",2],["jungyun.net",2],["juninhoscripts.com.br",2],["juventusfc.hu",2],["kacikcelebrytow.com",2],["kagohara.net",2],["kakiagune.com",2],["kali.wiki",2],["kana-mari-shokudo.com",2],["kanaeblog.net",2],["kandisvarlden.com",2],["karaoke4download.com",2],["kawaguchimaeda.com",2],["kaystls.site",2],["kenkou-maintenance.com",2],["kenta2222.com",2],["kgs-invest.com",2],["kh-pokemon-mc.com",2],["khabarbyte.com",2],["khabardinbhar.net",2],["khohieu.com",2],["kickcharm.com",2],["kinisuru.com",2],["kits4beats.com",2],["kllproject.lv",2],["knowstuff.in",2],["know-how-tree.com",2],["kobitacocktail.com",2],["kodaika.com",2],["kodewebsite.com",2],["kokosovoulje.com",2],["kolcars.shop",2],["kolnovel.online",2],["kompiko.pl",2],["koreanbeauty.club",2],["korogashi-san.org",2],["korsrt.eu.org",2],["kotanopan.com",2],["koume-in-huistenbosch.net",2],["krx18.com",2],["kukni.to",2],["kupiiline.com",2],["kurosuen.live",2],["labstory.in",2],["ladkibahin.com",2],["ladypopularblog.com",2],["lamorgues.com",2],["lampungkerja.com",2],["lapaginadealberto.com",2],["lascelebrite.com",2],["latinlucha.es",2],["law101.org.za",2],["lawweekcolorado.com",2],["learnedclub.com",2],["learnmany.in",2],["learnchannel-tv.com",2],["learnodo-newtonic.com",2],["learnospot.com",2],["learnslovak.online",2],["lebois-racing.com",2],["lectormh.com",2],["leechyscripts.net",2],["leeapk.com",2],["legendaryrttextures.com",2],["lendrive.web.id",2],["letrasgratis.com.ar",2],["levismodding.co.uk",2],["lgcnews.com",2],["lglbmm.com",2],["lheritierblog.com",2],["ligaset.com",2],["limcasports.xyz",2],["limontorrent.com",2],["limontorrents.com",2],["linkskibe.com",2],["linkvoom.com",2],["linkz.wiki",2],["linux-talks.com",2],["linuxexplain.com",2],["lionsfan.net",2],["literarysomnia.com",2],["littlepandatranslations.com",2],["livefootballempire.com",2],["lk21org.com",2],["lmtos.com",2],["loanpapa.in",2],["locurainformaticadigital.com",2],["logofootball.net",2],["lookism.me",2],["lordfix.xyz",2],["lotus-tours.com.hk",2],["ltpcalculator.in",2],["luchaonline.com",2],["luciferdonghua.in",2],["luckymood777.com",2],["lucrebem.com.br",2],["lustesthd.cloud",2],["lustesthd.lat",2],["lycee-maroc.com",2],["macrocreator.com",2],["madevarquitectos.com",2],["maisondeas.com",2],["maketoss.com",2],["makeupguide.net",2],["makotoichikawa.net",2],["malluporno.com",2],["mamtamusic.in",2],["mangcapquangvnpt.com",2],["manhastro.com",2],["mantrazscan.com",2],["marketedgeofficial.com",2],["marketing-business-revenus-internet.fr",2],["marketrevolution.eu",2],["masashi-blog418.com",2],["mastakongo.info",2],["masterpctutoriales.com",2],["maths101.co.za",2],["matomeiru.com",2],["matshortener.xyz",2],["mdn.lol",2],["medeberiya1.com",2],["mediascelebres.com",2],["medytour.com",2],["meilblog.com",2],["memorialnotice.com",2],["mentalhealthcoaching.org",2],["meteoregioneabruzzo.it",2],["mhscans.com",2],["michiganrugcleaning.cleaning",2],["midis.com.ar",2],["minddesignclub.org",2],["minecraftwild.com",2],["minhasdelicias.com",2],["mitaku.net",2],["mitsmits.com",2],["mixmods.com.br",2],["mm-scans.org",2],["mmfenix.com",2],["mmorpgplay.com.br",2],["mockupcity.com",2],["mockupgratis.com",2],["modele-facture.com",2],["modyster.com",2],["monaco.co.il",2],["morinaga-office.net",2],["mosttechs.com",2],["moto-station.com",2],["motofan-r.com",2],["moviemod.online",2],["movierr.site",2],["movieping.com",2],["moviesnipipay.me",2],["mrfreemium.blogspot.com",2],["mscdroidlabs.es",2],["msonglyrics.com",2],["mtech4you.com",2],["multimovies.tech",2],["mundovideoshd.com",2],["murtonroofing.com",2],["musicforchoir.com",2],["musictip.net",2],["mxcity.mx",2],["mxpacgroup.com",2],["my-ford-focus.de",2],["myglamwish.com",2],["myicloud.info",2],["mylinkat.com",2],["mylivewallpapers.com",2],["mypace.sasapurin.com",2],["myqqjd.com",2],["mytectutor.com",2],["myunity.dev",2],["myviptuto.com",2],["nagpurupdates.com",2],["naijagists.com",2],["naijdate.com",2],["najboljicajevi.com",2],["nakiny.com",2],["nameart.in",2],["nartag.com",2],["naturalmentesalute.org",2],["naturomicsworld.com",2],["naveedplace.com",2],["navinsamachar.com",2],["neet.wasa6.com",2],["neifredomar.com",2],["nekoscans.com",2],["nemumemo.com",2],["nepaljobvacancy.com",2],["neservicee.com",2],["netsentertainment.net",2],["neuna.net",2],["newbookmarkingsite.com",2],["newfreelancespot.com",2],["newlifefuneralhomes.com",2],["news-geinou100.com",2],["newscard24.com",2],["newstechone.com",2],["nghetruyenma.net",2],["nhvnovels.com",2],["nichetechy.com",2],["nin10news.com",2],["nicetube.one",2],["ninjanovel.com",2],["niteshyadav.in",2],["nknews.jp",2],["nkreport.jp",2],["noanyi.com",2],["nobodycancool.com",2],["noblessetranslations.com",2],["nocfsb.com",2],["nocsummer.com.br",2],["nodenspace.com",2],["noikiiki.info",2],["notandor.cn",2],["note1s.com",2],["notesformsc.org",2],["noteshacker.com",2],["novel-gate.com",2],["novelbob.com",2],["novelread.co",2],["nsfwr34.com",2],["nswdownload.com",2],["nswrom.com",2],["ntucgm.com",2],["nudeslegion.com",2],["nukedfans.com",2],["nukedpacks.site",2],["nulledmug.com",2],["nxbrew.net",2],["nyangames.altervista.org",2],["nylonstockingsex.net",2],["oatuu.org",2],["oberschwaben-tipps.de",2],["obituary-deathnews.com",2],["obituaryupdates.com",2],["odekake-spots.com",2],["officialpanda.com",2],["ofppt.net",2],["ofwork.net",2],["okblaz.me",2],["olamovies.store",2],["omeuemprego.online",2],["omusubi-56rin.com",2],["onehack.us",2],["onestringlab.com",2],["onlinetechsamadhan.com",2],["onneddy.com",2],["onyxfeed.com",2],["openstartup.tm",2],["opiniones-empresas.com",2],["oracleerpappsguide.com",2],["orenoraresne.com",2],["oromedicine.com",2],["orunk.com",2],["osteusfilmestuga.online",2],["otakuliah.com",2],["oteknologi.com",2],["otokukensaku.jp",2],["ottrelease247.com",2],["ovnihoje.com",2],["pabryyt.one",2],["palofw-lab.com",2],["paminy.com",2],["pandaatlanta.com",2],["pantube.top",2],["paolo9785.com",2],["papafoot.click",2],["papahd.club",2],["paris-tabi.com",2],["parisporn.org",2],["parking-map.info",2],["pasokau.com",2],["passionatecarbloggers.com",2],["passportaction.com",2],["pc-guru.it",2],["pc-hobby.com",2],["pc-spiele-wiese.de",2],["pcgamedownload.net",2],["pcgameszone.com",2],["pdfstandards.net",2],["pedalpower.online",2],["pepar.net",2],["personefamose.it",2],["petitestef.com",2],["pflege-info.net",2],["phoenix-manga.com",2],["phonefirmware.com",2],["physics101.co.za",2],["picgiraffe.com",2],["pilsner.nu",2],["piratemods.com",2],["piximfix.com",2],["plantatreenow.com",2],["plc4free.com",2],["pliroforiki-edu.gr",2],["plutoscripts.xyz",2],["poapan.xyz",2],["pogga.org",2],["pondit.xyz",2],["ponsel4g.com",2],["porlalibreportal.com",2],["pornfeel.com",2],["porninblack.com",2],["portaldoaz.org",2],["portaldosreceptores.org",2],["postazap.com",2],["postblog.xyz",2],["posturecorrectorshop-online.com",2],["prague-blog.co.il",2],["praveeneditz.com",2],["premierftp.com",2],["prensa.click",2],["pressemedie.dk",2],["pressurewasherpumpdiagram.com",2],["pricemint.in",2],["primemovies.pl",2],["prismmarketingco.com",2],["proapkdown.com",2],["projuktirkotha.com",2],["promiblogs.de",2],["promimedien.com",2],["promisingapps.com",2],["protestia.com",2],["psicotestuned.info",2],["psychology-spot.com",2],["publicdomainq.net",2],["publicdomainr.net",2],["publicidadtulua.com",2],["pupuweb.com",2],["putlog.net",2],["pynck.com",2],["quatvn.club",2],["questionprimordiale.fr",2],["quicktelecast.com",2],["radiantsong.com",2],["rabo.no",2],["rahim-soft.com",2],["rail-log.net",2],["raishin.xyz",2],["ralli.ee",2],["ranjeet.best",2],["ranourano.xyz",2],["raulmalea.ro",2],["rbs.ta36.com",2],["rbscripts.net",2],["rctechsworld.in",2],["readfast.in",2],["realfreelancer.com",2],["receptyonline.cz",2],["recipenp.com",2],["redbubbletools.com",2],["redfaucet.site",2],["reeell.com",2],["renierassociatigroup.com",2],["reportbangla.com",2],["reprezentacija.rs",2],["retire49.com",2],["retrotv.org",2],["revistaapolice.com.br",2],["ribbelmonster.de",2],["rightdark-scan.com",2],["rinconpsicologia.com",2],["ritacandida.com",2],["rlshort.com",2],["rocdacier.com",2],["rollingwheel.xyz",2],["romaierioggi.it",2],["romaniasoft.ro",2],["roms4ever.com",2],["romviet.com",[2,8]],["roshy.tv",2],["roznamasiasat.com",2],["rubyskitchenrecipes.uk",2],["rumanicandle.online",2],["ruyamanga.com",2],["rv-ecommerce.com",2],["ryanmoore.marketing",2],["ryansharich.com",2],["s1os.icu",2],["s4msecurity.com",2],["s920221683.online.de",2],["sabishiidesu.com",2],["saekita.com",2],["samanarthishabd.in",2],["samovies.net",2],["samrudhiglobal.com",2],["sanmiguellive.com",2],["sararun.net",2],["sarkariresult.social",2],["satcesc.com",2],["savegame.pro",2],["sawwiz.com",2],["scansatlanticos.com",2],["schadeck.eu",2],["sezia.com",2],["schildempire.com",2],["scholarshiplist.org",2],["sciencebe21.in",2],["scontianastro.com",2],["scrap-blog.com",2],["scripcheck.great-site.net",2],["scriptsomg.com",2],["searchmovie.wp.xdomain.jp",2],["seasons-dlove.net",2],["seirsanduk.com",2],["seogroup.bookmarking.info",2],["seoworld.in",2],["seriu.jp",2],["setsuyakutoushi.com",2],["serieshdpormega.com",2],["server-tutorials.net",2],["serverbd247.com",2],["serverxfans.com",2],["shadagetech.com",2],["shanurdu.com",2],["shimauma-log.com",2],["shittokuadult.net",2],["shlly.com",2],["shogaisha-shuro.com",2],["shogaisha-techo.com",2],["shopkensaku.com",2],["shorttrick.in",2],["showrovblog.com",2],["shrinklinker.com",2],["shrinkus.tk",2],["shrivardhantech.in",2],["sieradmu.com",2],["siimanga.cyou",2],["siirtolayhaber.com",2],["sim-kichi.monster",2],["sivackidrum.net",2],["sk8therapy.fr",2],["skardu.pk",2],["skidrowreloaded.com",2],["slawoslaw.pl",2],["slowianietworza.pl",2],["smallseotools.ai",2],["smartinhome.pl",2],["snowman-information.com",2],["soccermlbstream.xyz",2],["socebd.com",2],["sociallyindian.com",2],["softcobra.com",2],["softrop.com",2],["sohohindi.com",2],["sosuroda.pl",2],["south-park-tv.biz",2],["soziologie-politik.de",2],["sp500-up.com",2],["space-faucet.com",2],["spacestation-online.com",2],["spardhanews.com",2],["speak-english.net",2],["speculationis.com",2],["spidergame.online",2],["spinoff.link",2],["spiritparting.com",2],["sport-97.com",2],["sportsblend.net",2],["stablediffusionxl.com",2],["stadelahly.net",2],["stahnivideo.cz",2],["stakes100.xyz",2],["starsgtech.in",2],["startupjobsportal.com",2],["ster-blog.xyz",2],["stireazilei.eu",2],["stock-rom.com",2],["streamseeds24.com",2],["strefa.biz",2],["studybullet.com",2],["sufanblog.com",2],["sukuyou.com",2],["sundberg.ws",2],["suneelkevat.com",2],["super-ethanol.com",2],["superpackpormega.com",2],["surgicaltechie.com",2],["swietaslowianskie.pl",2],["sysguides.com",2],["system32.ink",2],["ta3arof.net",2],["taariikh.net",2],["tabonitobrasil.tv",2],["taisha-diet.com",2],["talentstareducation.com",2],["tamilanzone.com",2],["tamilhit.tech",2],["tamilnaadi.com",2],["tamilultra.team",2],["tatsublog.com",2],["tbazzar.com",2],["teachersupdates.net",2],["team-octavi.com",2],["team-rcv.xyz",2],["teamkong.tk",2],["teamupinternational.com",2],["techacrobat.com",2],["techastuces.com",2],["techbytesblog.com",2],["techdriod.com",2],["techedubyte.com",[2,20]],["techiepirates.com",2],["techiestalk.in",2],["techkeshri.com",2],["techlog.ta-yan.ai",2],["technewslive.org",2],["technewsrooms.com",2],["technicalviral.com",2],["technorj.com",2],["technorozen.com",2],["techoreview.com",2],["techprakash.com",2],["techsbucket.com",2],["techstwo.com",2],["techyhigher.com",2],["techyrick.com",2],["tecnomd.com",2],["tecnoscann.com",2],["tedenglish.site",2],["tehnotone.com",2],["telephone-soudan.com",2],["teluguhitsandflops.com",2],["temporeale.info",2],["tenbaiquest.com",2],["tespedia.com",2],["testious.com",2],["thangdangblog.com",2],["thaript.com",2],["the-loop.xyz",2],["theapothecarydiariesmanga.com",2],["thebigblogs.com",2],["thedilyblog.com",2],["thermoprzepisy.pl",2],["theworldobits.com",2],["thebreakermanga.online",2],["thecannalysts.blog",2],["theconomy.me",2],["thegamearcade.com",2],["theinternettaughtme.com",2],["thejoblives.com",2],["thelastgamestandingexp.com",2],["theliveupdate.com",2],["thenewsglobe.net",2],["theprofoundreport.com",2],["thesextube.net",2],["thesleak.com",2],["thesportsupa.com",2],["thewambugu.com",2],["thiagorossi.com.br",2],["throwsmallstone.com",2],["tiny-sparklies.com",2],["titfuckvideos.com",2],["tirumalatirupatiyatra.in",2],["tnewsnetwork.com",2],["today-obits.com",2],["todays-obits.com",2],["toeflgratis.com",2],["tokoasrimotedanpayet.my.id",2],["toorco.com",2],["top10trends.net",2],["topfaucet.us",2],["topsworldnews.com",2],["toptenknowledge.com",2],["torrentdofilmeshd.net",2],["torrentgame.org",2],["totally.top",2],["towerofgod.top",2],["tr3fit.xyz",2],["trendflatt.com",2],["trendohunts.com",2],["trgtkls.org",2],["trilog3.net",2],["tukangsapu.net",2],["tunabagel.net",2],["turkeymenus.com",2],["turkishseriestv.net",2],["tutorialesdecalidad.com",2],["tutorialsduniya.com",2],["twobluescans.com",2],["twodots.com.br",2],["tw.xn--h9jepie9n6a5394exeq51z.com",2],["uciteljica.net",2],["udemyking.com",2],["uiuxsource.com",2],["ukigmoch.com",2],["umabomber.com",2],["unityassets4free.com",2],["uozzart.com",2],["uploadbank.com",2],["uprwssp.org",2],["uqozy.com",2],["usahealthandlifestyle.com",2],["ustimz.com",2],["ustvgo.live",2],["utaitebu.com",2],["uur-tech.net",2],["vamsivfx.com",2],["vanderheide.online",2],["varnascan.com",2],["vedetta.org",2],["veganab.co",2],["venus-and-mars.com",2],["veryfuntime.com",2],["vibezhub.com.ng",2],["viciante.com.br",2],["villettt.kitchen",2],["violablu.net",2],["virabux.com",2],["virtual-youtuber.jp",2],["visorsmr.com",2],["visortecno.com",2],["vitadacelebrita.com",2],["vivrebordeaux.fr",2],["vmorecloud.com",2],["vnuki.net",2],["voiceloves.com",2],["voidtruth.com",2],["voiranime1.fr",2],["vstplugin.net",2],["warungkomik.com",2],["webacademix.com",2],["webcamfuengirola.com",2],["webcras.com",2],["webhostingoffer.org",2],["websiteglowgh.com",2],["welcometojapan.jp",2],["whats-new.cyou",2],["wheelofgold.com",2],["wholenotism.com",2],["windbreaker.me",2],["windowsaplicaciones.com",2],["wirtualnelegionowo.pl",2],["wirtualnynowydwor.pl",2],["workxvacation.jp",2],["worldgyan18.com",2],["worldtop2.com",2],["worldwidestandard.net",2],["worthitorwoke.com",2],["wp.solar",2],["wpteq.org",2],["writeprofit.org",2],["xiaomitools.com",2],["xmoviepro.xyz",2],["xn--algododoce-j5a.com",2],["xn--kckzb2722b.com",2],["xn--n8jwbyc5ezgnfpeyd3i0a3ow693bw65a.com",2],["xn--nbkw38mlu2a.com",2],["yakisurume.com",2],["yakyufan-asobiba.com",2],["yaspage.com",2],["yawm.online",2],["yazilidayim.net",2],["ycongnghe.com",2],["yestech.xyz",2],["ynk-blog.com",2],["youlife24.com",2],["youpit.xyz",2],["your-local-pest-control.com",2],["yourdesignmagazine.com",2],["yuatools.com",2],["yuki0918kw.com",2],["yumekomik.com",2],["yuramanga.my.id",2],["yurudori.com",2],["zerogptai.org",2],["zien.pl",2],["ziminvestors.com",2],["zippyshare.cloud",2],["zippysharecue.com",2],["znanemediablog.com",2],["intro-hd.net",2],["mdbekjwqa.pw",3],["tmohentai.com",4],["bonsaiprolink.shop",5],["exactlyhowlong.com",5],["maos4alaw.online",5],["kumapoi.info",5],["blogcreativos.com",5],["flixlatam.com",5],["samurai.ragnarokscanlation.org",5],["cgcosplay.org",5],["myhindigk.com",5],["tech5s.co",5],["top10cafe.se",5],["phpscripttr.com",5],["7misr4day.com",5],["descargaspcpro.net",5],["dotadostube.com",5],["taradinhos.com",5],["game-2u.com",5],["toramemoblog.com",5],["gplastra.com",5],["okleak.com",5],["afly.pro",5],["ithinkilikeyou.net",5],["milanreports.com",5],["towerofgod.me",5],["crotpedia.net",5],["158.220.106.212",5],["papahd.co",5],["drakescans.com",5],["watchfacebook.com",5],["web1s.asia",5],["bokugents.com",5],["newzjunky.com",5],["yourlifeupdated.net",5],["lscomic.com",5],["tv.durbinlive.com",5],["freeltc.online",5],["pornleaks.in",5],["dudestream.com",5],["areascans.net",5],["aeonax.com",6],["hentaihaven.xxx",6],["telemporio4.blogspot.com",6],["embed.streamx.me",6],["techoreels.com",6],["jpopsingles.eu",8],["tinys.click",8],["getintoway.com",8],["afronudes.com",8],["allcelebspics.com",8],["alttyab.net",8],["androjungle.com",8],["anonym-ads.xyz",8],["arkadmin.fr",8],["azoranov.com",8],["bacasitus.com",8],["barranquillaestereo.com",8],["bazaarwedding.com",8],["blogbhaiya.com",8],["brasilsimulatormods.com",8],["cambrevenements.com",8],["cartoonstvonline.com",8],["codecap.org",8],["comparili.net",8],["deephub.cyou",8],["descargasalinstante.com",8],["diaobe.net",8],["filegajah.com",8],["filmestorrent.tv",8],["flicksnchill.com",8],["franceprefecture.fr",8],["freecricket.net",8],["gcpainters.com",8],["germanvibes.org",8],["getmaths.co.uk",8],["gewinnspiele-markt.com",8],["hamzag.com",8],["hannibalfm.net",8],["hornyconfessions.com",8],["ilcamminodiluce.it",8],["joguinhosgratis.com",8],["joziporn.com",8],["justpaste.top",8],["katoikos.world",8],["kozyrom.com",8],["kumiste.com",8],["mbc2.live",8],["mctechsolutions.in",8],["measam.com",8],["medibok.se",8],["megafire.net",8],["mirrorpoi.com",8],["mirrorpoi.my.id",8],["mockuphunts.com",8],["moroccantea.uk",8],["mortaltech.com",8],["multivideodownloader.com",8],["nauci-engleski.com",8],["nauci-njemacki.com",8],["nekopoi.my.id",8],["nuketree.com",8],["nullpro.tech",8],["pa1n.xyz",8],["playertv.net",8],["pornhubtrending.net",8],["premiumthemes.shop",8],["programsolve.com",8],["radio-deejay.com",8],["ranaaclanhungary.com",8],["rasoi.me",8],["riprendiamocicatania.com",8],["rsrlink.in",8],["seriesperu.com",8],["shmapp.ca",8],["shorthttp.online",8],["sub2unlocker.com",8],["saygrupmekanik.com",8],["skillmineopportunities.com",8],["teczpert.com",8],["totalsportek.app",8],["tromcap.com",8],["tv0800.com",8],["tv3monde.com",8],["uiiumovies.net",8],["ustrendynews.com",8],["vidoza.xyz",8],["watchnow.fun",8],["weashare.com",8],["webdexscans.com",8],["xvideostrending.org",8],["yelitzonpc.com",8],["ymknow.xyz",8],["zimabadko.com",8],["defienietlynotme.com",9],["filemooon.top",[9,21]],["fmembed.cc",9],["fmhd.bar",9],["fmoonembed.pro",9],["rgeyyddl.skin",9],["sbnmp.bar",9],["sulleiman.com",9],["vpcxz19p.xyz",9],["kickassanime.ch",10],["arldeemix.com",11],["gsmware.com",11],["klyker.com",12],["kontenterabox.com",12],["booksrack.net",12],["myprivatejobs.com",13],["wikitraveltips.com",13],["cmphost.com",13],["drinkspartner.com",13],["uploadsoon.com",13],["wp.uploadfiles.in",13],["viralxns.com",13],["posterify.net",13],["headlinerpost.com",13],["tmail.io",14],["techacode.com",15],["sideplusleaks.com",15],["azmath.info",16],["downfile.site",16],["downphanmem.com",16],["expertvn.com",16],["memangbau.com",16],["trangchu.news",16],["aztravels.net",16],["adultcomixxx.com",16],["maccanismi.it",17],["gamesrepacks.com",17],["techhelpbd.com",17],["broflix.club",17],["pokemundo.com",17],["lewebde.com",17],["cazztv.xyz",17],["app.covemarkets.com",17],["kimcilonly.top",17],["tabele-kalorii.pl",18],["hentaistream.com",19],["nudeselfiespics.com",19],["hentaivideos.net",19],["ergasiakanea.eu",20],["surfsees.com",20],["conghuongtu.net",20],["downloadlyir.com",20],["ipamod.com",20],["apkdrill.com",20],["a-ha.io",22],["cboard.net",22],["joongdo.co.kr",22],["viva100.com",22],["gamingdeputy.com",22],["alle-tests.nl",22],["meconomynews.com",22],["brandbrief.co.kr",22],["motorgraph.com",22],["topstarnews.net",22],["autosport.com",23],["motorsport.com",23],["javmoon.me",24],["cdn.gledaitv.live",25],["claimlite.club",26],["mgnetu.com",27],["pepperlive.info",27],["iptv-list.live",28],["kurakura21.space",29],["blackhatworld.com",30],["japscan.lol",31]]);

const entitiesMap = new Map([["shrink",0],["24pdd",2],["audiotools",2],["autosport",2],["eventiavversinews",2],["flixhub",2],["freevstplugins",2],["ftuapps",2],["gogetadoslinks",2],["haryanaalert",2],["itdmusic",2],["javboys",2],["keroseed",2],["m4u",2],["magesypro",2],["mcrypto",2],["movies4u",2],["nishankhatri",2],["nsw2u",2],["poplinks",2],["ragnarokscanlation",2],["rgmovies",2],["sheikhmovies",2],["showflix",2],["userupload",2],["xprime4u",2],["mlwbd",5],["katmoviefix",5],["layardrama21",5],["sdmoviespoint",5],["file-upload",7],["an1me",8],["papafoot",8],["embedme",9],["finfang",9],["hellnaw",9],["moonembed",9],["z12z0vla",9],["fc-lc",14],["azsoft",16],["pasteit",18]]);

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
    try { noEvalIf(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_noEvalIf();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
