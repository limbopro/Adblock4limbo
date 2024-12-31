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
const uBOL_addEventListenerDefuser = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["load","Object"],["load","hard_block"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["load","onload"],["","BACK"],["load","getComputedStyle"],["load","adsense"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","window.open"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["mousedown","preventDefault"],["load","nextFunction"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["click","_blank"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["DOMContentLoaded","iframe"],["","/_blank/i"],["blur","stopCountdown"],["load","htmls"],["blur","focusOut"],["click","/handleClick|popup/"],["DOMContentLoaded","history.go"],["load","bypass"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","location.href"],["","popMagic"],["contextmenu","preventDefault"],["visibilitychange","remainingSeconds"],["click","Popunder"],["contextmenu"],["submit","validateForm"],["blur","counter"],["load","doTest"],["","history.go"],["DOMContentLoaded","document.documentElement.lang.toLowerCase"],["click","maxclick"],["click","shouldOpenPopUp"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["click","open"],["error"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["beforeunload"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["message"],["","/pop|_blank/"],["click","allclick_Public"],["DOMContentLoaded","/dyn\\.ads|loadAdsDelayed/"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["mousedown","shown_at"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["","about:blank"],["click","popMagic"],["","shouldShow"],["load","popMagic"],["DOMContentLoaded","adsSrc"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["","exoJsPop101"],["DOMContentLoaded","atob"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["click","popName"],["blur"],["DOMContentLoaded","clientHeight"],["load","error-report.com"],["click","window.focus"],["click","event.dispatch"],["load","adblock"],["","Math"],["DOMContentLoaded","popupurls"],["click","window.open"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["load","Ads"],["DOMContentLoaded","document.documentElement.lang"],["DOMContentLoaded","googlesyndication"],["load","popunder"],["DOMContentLoaded",".clientHeight"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["load","document.getElementById"],["DOMContentLoaded","daadb_get_data_fetch"],["click","popactive"],["load","adsbygoogle"],["DOMContentLoaded","location.replace"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["error","blocker"],["click","alink"],["load","[native code]"],["/adblock/i"],["","daadb"],["load","google-analytics"],["","sessionStorage"],["click","/form\\.submit|urlToOpen/"],["DOMContentLoaded","overlays"],["load","fetch"],["load","ads"],["click","document.createElement"],["click","ShouldShow"],["click","clickCount"],["mousedown","localStorage"],["","adsense"],["click","splashPage"],["load","detect-modal"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["load",".call(this"],["/touchmove|wheel/","preventDefault()"],["load","showcfkModal"],["click","attached","elements","div[class=\"share-embed-container\"]"],["click","fp-screen"],["DOMContentLoaded","leaderboardAd"],["DOMContentLoaded","fetch"],["click","openPopupForChapter"],["click","doThePop"],["DOMContentLoaded","blockAdBlock"],["click","openDirectLinkAd"],["load","detect"],["DOMContentLoaded","history.pushState"],["DOMContentLoaded","showPopup"],["click","PopUnder"],["load","puHref"],["click","Ads"],["click","pingUrl"],["mousedown","scoreUrl"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["DOMContentLoaded","/Niger|Charger|GoodDay|funct'|t'\\+'y/"],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",1],["timesofindia.indiatimes.com",2],["drrtyr.mx",2],["pinoyalbums.com",2],["multiplayer.it",2],["mediafire.com",[3,4]],["pinsystem.co.uk",5],["ancensored.com",5],["mp3fiber.com",[5,27]],["xrivonet.info",5],["kingofdown.com",6],["radiotormentamx.com",6],["quelleestladifference.fr",6],["otakuworldsite.blogspot.com",6],["ad-itech.blogspot.com",6],["agar.pro",6],["unlockapk.com",6],["mobdi3ips.com",6],["socks24.org",6],["interviewgig.com",6],["javaguides.net",6],["almohtarif-tech.net",6],["forum.release-apk.com",6],["devoloperxda.blogspot.com",6],["zwergenstadt.com",6],["primedeportes.es",6],["upxin.net",6],["ciudadblogger.com",6],["ke-1.com",6],["secretsdeepweb.blogspot.com",6],["bit-shares.com",6],["itdmusics.com",6],["aspdotnet-suresh.com",6],["tudo-para-android.com",6],["urdulibrarypk.blogspot.com",6],["zerotopay.com",6],["akw.to",6],["mawsueaa.com",6],["hesgoal-live.io",6],["king-shoot.io",6],["9goals.live",6],["bibme.org",10],["citationmachine.net",10],["easybib.com",11],["vermangasporno.com",12],["imgtorrnt.in",12],["picbaron.com",[12,118]],["letmejerk.com",12],["letmejerk2.com",12],["letmejerk3.com",12],["letmejerk4.com",12],["letmejerk5.com",12],["letmejerk6.com",12],["letmejerk7.com",12],["dlapk4all.com",12],["kropic.com",12],["kvador.com",12],["pdfindir.net",12],["brstej.com",12],["topwwnews.com",12],["xsanime.com",12],["vidlo.us",12],["put-locker.com",12],["youx.xxx",12],["animeindo.asia",12],["masahub.net",12],["adclickersbot.com",12],["badtaste.it",13],["shemalez.com",15],["tubepornclassic.com",15],["gotporn.com",16],["freepornrocks.com",16],["tvhai.org",16],["realgfporn.com",[17,18]],["thisvid.com",18],["xvideos-downloader.net",18],["imgspice.com",19],["vikiporn.com",20],["tnaflix.com",20],["hentai2w.com",[20,179]],["yourlust.com",20],["hotpornfile.org",20],["watchfreexxx.net",20],["vintageporntubes.com",20],["angelgals.com",20],["babesexy.com",20],["porndaa.com",20],["ganstamovies.com",20],["youngleak.com",20],["porndollz.com",20],["xnxxvideo.pro",20],["xvideosxporn.com",20],["filmpornofrancais.fr",20],["pictoa.com",[20,42]],["adultasianporn.com",20],["nsfwmonster.com",20],["girlsofdesire.org",20],["gaytail.com",20],["fetish-bb.com",20],["rumporn.com",20],["soyoungteens.com",20],["zubby.com",20],["lesbian8.com",20],["gayforfans.com",20],["reifporn.de",20],["javtsunami.com",20],["18tube.sex",20],["xxxextreme.org",20],["amateurs-fuck.com",20],["sex-amateur-clips.com",20],["hentaiworld.tv",20],["dads-banging-teens.com",20],["home-xxx-videos.com",20],["mature-chicks.com",20],["teens-fucking-matures.com",20],["hqbang.com",20],["darknessporn.com",20],["familyporner.com",20],["freepublicporn.com",20],["pisshamster.com",20],["punishworld.com",20],["xanimu.com",20],["tubator.com",20],["pornhd.com",21],["cnnamador.com",[21,31]],["cle0desktop.blogspot.com",21],["turkanime.co",21],["camclips.tv",[21,43]],["blackpornhq.com",21],["xsexpics.com",21],["ulsex.net",21],["wannafreeporn.com",21],["ytube2dl.com",21],["multiup.us",21],["protege-torrent.com",21],["pussyspace.com",[22,23]],["pussyspace.net",[22,23]],["empflix.com",24],["cpmlink.net",25],["bdsmstreak.com",25],["cutpaid.com",25],["pornforrelax.com",25],["fatwhitebutt.com",25],["short.pe",26],["totaldebrid.org",27],["neko-miku.com",27],["elsfile.org",27],["venstrike.jimdofree.com",27],["schrauben-normen.de",27],["avengerinator.blogspot.com",27],["link-to.net",27],["hanimesubth.com",27],["gsmturkey.net",27],["adshrink.it",27],["presentation-ppt.com",27],["mangacanblog.com",27],["pekalongan-cits.blogspot.com",27],["4tymode.win",27],["linkvertise.com",27],["reifenrechner.at",27],["tire-size-calculator.info",27],["linuxsecurity.com",27],["itsguider.com",27],["cotravinh.blogspot.com",27],["itudong.com",27],["shortx.net",27],["lecturel.com",27],["bakai.org",27],["nar.k-ba.net",27],["tiroalpalo.org",27],["eurotruck2.com.br",27],["tiroalpaloes.com",27],["tiroalpaloes.net",27],["bs.to",29],["efukt.com",29],["generacionretro.net",30],["nuevos-mu.ucoz.com",30],["micloudfiles.com",30],["mimaletamusical.blogspot.com",30],["visionias.net",30],["b3infoarena.in",30],["lurdchinexgist.blogspot.com",30],["thefreedommatrix.blogspot.com",30],["hentai-vl.blogspot.com",30],["projetomotog.blogspot.com",30],["ktmx.pro",30],["lirik3satu.blogspot.com",30],["marketmovers.it",30],["pharmaguideline.com",30],["safemaru.blogspot.com",30],["mixloads.com",30],["mangaromance.eu",30],["interssh.com",30],["freesoftpdfdownload.blogspot.com",30],["cirokun.blogspot.com",30],["myadslink.com",30],["blackavelic.com",30],["server.satunivers.tv",30],["eg-akw.com",30],["xn--mgba7fjn.cc",30],["flashingjungle.com",31],["ma-x.org",32],["lavozdegalicia.es",32],["ddwloclawek.pl",32],["ki24.info",32],["xmovies08.org",34],["globaldjmix.com",35],["zazzybabes.com",36],["haaretz.co.il",37],["haaretz.com",37],["slate.com",38],["megalinks.info",39],["megapastes.com",39],["mega-mkv.com",[39,40]],["mkv-pastes.com",39],["zpaste.net",39],["zlpaste.net",39],["9xlinks.site",39],["zona-leros.net",40],["acortarm.xyz",41],["cine.to",[42,185]],["kissasia.cc",42],["digjav.com",43],["videoszoofiliahd.com",44],["xxxtubezoo.com",45],["zooredtube.com",45],["uii.io",46],["megacams.me",47],["rlslog.net",47],["porndoe.com",48],["acienciasgalilei.com",50],["playrust.io",51],["payskip.org",52],["short-url.link",53],["tubedupe.com",54],["mcrypto.club",55],["fatgirlskinny.net",56],["polska-ie.com",56],["windowsmatters.com",56],["canaltdt.es",57],["masbrooo.com",57],["2ndrun.tv",57],["oncehelp.com",58],["curto.win",58],["smallseotools.com",59],["macwelt.de",61],["pcwelt.de",61],["capital.de",61],["geo.de",61],["allmomsex.com",62],["allnewindianporn.com",62],["analxxxvideo.com",62],["animalextremesex.com",62],["anime3d.xyz",62],["animefuckmovies.com",62],["animepornfilm.com",62],["animesexbar.com",62],["animesexclip.com",62],["animexxxsex.com",62],["animexxxfilms.com",62],["anysex.club",62],["apetube.asia",62],["asianfuckmovies.com",62],["asianfucktube.com",62],["asianporn.sexy",62],["asiansexcilps.com",62],["beeg.fund",62],["beegvideoz.com",62],["bestasiansex.pro",62],["bravotube.asia",62],["brutalanimalsfuck.com",62],["candyteenporn.com",62],["daddyfuckmovies.com",62],["desifuckonline.com",62],["exclusiveasianporn.com",62],["exteenporn.com",62],["fantasticporn.net",62],["fantasticyoungporn.com",62],["fineasiansex.com",62],["firstasianpussy.com",62],["freeindiansextube.com",62],["freepornasians.com",62],["freerealvideo.com",62],["fuck-beeg.com",62],["fuck-xnxx.com",62],["fuckasian.pro",62],["fuckfuq.com",62],["fuckundies.com",62],["gojapaneseporn.com",62],["golderotica.com",62],["goodyoungsex.com",62],["goyoungporn.com",62],["hardxxxmoms.com",62],["hdvintagetube.com",62],["hentaiporn.me",62],["hentaisexfilms.com",62],["hentaisexuality.com",62],["hot-teens-movies.mobi",62],["hotanimepornvideos.com",62],["hotanimevideos.com",62],["hotasianpussysex.com",62],["hotjapaneseshows.com",62],["hotmaturetube.com",62],["hotmilfs.pro",62],["hotorientalporn.com",62],["hotpornyoung.com",62],["hotxxxjapanese.com",62],["hotxxxpussy.com",62],["indiafree.net",62],["indianpornvideo.online",62],["japanpornclip.com",62],["japanesetube.video",62],["japansex.me",62],["japanesexxxporn.com",62],["japansporno.com",62],["japanxxx.asia",62],["japanxxxworld.com",62],["keezmovies.surf",62],["lingeriefuckvideo.com",62],["liveanimalporn.zooo.club",62],["madhentaitube.com",62],["megahentaitube.com",62],["megajapanesesex.com",62],["megajapantube.com",62],["milfxxxpussy.com",62],["momsextube.pro",62],["momxxxass.com",62],["monkeyanimalporn.com",62],["moviexxx.mobi",62],["newanimeporn.com",62],["newjapanesexxx.com",62],["nicematureporn.com",62],["nudeplayboygirls.com",62],["openxxxporn.com",62],["originalindianporn.com",62],["originalteentube.com",62],["pig-fuck.com",62],["plainasianporn.com",62],["popularasianxxx.com",62],["pornanimetube.com",62],["pornasians.pro",62],["pornhat.asia",62],["pornheed.online",62],["pornjapanesesex.com",62],["pornomovies.asia",62],["pornvintage.tv",62],["primeanimesex.com",62],["realjapansex.com",62],["realmomsex.com",62],["redsexhub.com",62],["retroporn.world",62],["retrosexfilms.com",62],["sex-free-movies.com",62],["sexanimesex.com",62],["sexanimetube.com",62],["sexjapantube.com",62],["sexmomvideos.com",62],["sexteenxxxtube.com",62],["sexxxanimal.com",62],["sexyoungtube.com",62],["sexyvintageporn.com",62],["sopornmovies.com",62],["spicyvintageporn.com",62],["sunporno.club",62],["tabooanime.club",62],["teenextrem.com",62],["teenfucksex.com",62],["teenhost.net",62],["teensexass.com",62],["tnaflix.asia",62],["totalfuckmovies.com",62],["totalmaturefuck.com",62],["txxx.asia",62],["voyeurpornsex.com",62],["warmteensex.com",62],["wetasiancreampie.com",62],["wildhentaitube.com",62],["wowyoungsex.com",62],["xhamster-art.com",62],["xmovie.pro",62],["xnudevideos.com",62],["xnxxjapon.com",62],["xpics.me",62],["xvide.me",62],["xxxanimefuck.com",62],["xxxanimevideos.com",62],["xxxanimemovies.com",62],["xxxhentaimovies.com",62],["xxxhothub.com",62],["xxxjapaneseporntube.com",62],["xxxlargeporn.com",62],["xxxmomz.com",62],["xxxpornmilf.com",62],["xxxpussyclips.com",62],["xxxpussysextube.com",62],["xxxretrofuck.com",62],["xxxsex.pro",62],["xxxsexyjapanese.com",62],["xxxteenyporn.com",62],["xxxvideo.asia",62],["xxxvideos.ink",62],["xxxyoungtv.com",62],["youjizzz.club",62],["youngpussyfuck.com",62],["bayimg.com",63],["celeb.gate.cc",64],["kinoger.re",65],["desi.upn.bio",65],["masterplayer.xyz",67],["pussy-hub.com",67],["porndex.com",68],["compucalitv.com",69],["diariodenavarra.es",71],["pennlive.com",74],["beautypageants.indiatimes.com",75],["01fmovies.com",76],["lnk2.cc",78],["fullhdxxx.com",79],["luscious.net",[79,118]],["classicpornbest.com",79],["1youngteenporn.com",79],["www-daftarharga.blogspot.com",[79,168]],["miraculous.to",[79,174]],["vtube.to",79],["xstory-fr.com",79],["gosexpod.com",80],["otakukan.com",81],["xcafe.com",82],["pornfd.com",82],["venusarchives.com",82],["imagehaha.com",83],["imagenpic.com",83],["imageshimage.com",83],["imagetwist.com",83],["k1nk.co",84],["watchasians.cc",84],["alexsports.xyz",84],["lulustream.com",84],["luluvdo.com",84],["web.de",85],["news18.com",86],["thelanb.com",87],["dropmms.com",87],["softwaredescargas.com",88],["cracking-dz.com",89],["anitube.ninja",90],["gazzetta.it",91],["port.hu",93],["dziennikbaltycki.pl",94],["dzienniklodzki.pl",94],["dziennikpolski24.pl",94],["dziennikzachodni.pl",94],["echodnia.eu",94],["expressbydgoski.pl",94],["expressilustrowany.pl",94],["gazetakrakowska.pl",94],["gazetalubuska.pl",94],["gazetawroclawska.pl",94],["gk24.pl",94],["gloswielkopolski.pl",94],["gol24.pl",94],["gp24.pl",94],["gra.pl",94],["gs24.pl",94],["kurierlubelski.pl",94],["motofakty.pl",94],["naszemiasto.pl",94],["nowiny24.pl",94],["nowosci.com.pl",94],["nto.pl",94],["polskatimes.pl",94],["pomorska.pl",94],["poranny.pl",94],["sportowy24.pl",94],["strefaagro.pl",94],["strefabiznesu.pl",94],["stronakobiet.pl",94],["telemagazyn.pl",94],["to.com.pl",94],["wspolczesna.pl",94],["course9x.com",94],["courseclub.me",94],["azrom.net",94],["alttyab.net",94],["esopress.com",94],["nesiaku.my.id",94],["onemanhua.com",95],["freeindianporn.mobi",95],["dr-farfar.com",96],["boyfriendtv.com",97],["brandstofprijzen.info",98],["netfuck.net",99],["blog24.me",[99,111]],["kisahdunia.com",99],["javsex.to",99],["nulljungle.com",99],["oyuncusoruyor.com",99],["pbarecap.ph",99],["sourds.net",99],["teknobalta.com",99],["tvinternetowa.info",99],["sqlserveregitimleri.com",99],["tutcourse.com",99],["readytechflip.com",99],["novinhastop.com",99],["warddogs.com",99],["dvdgayporn.com",99],["iimanga.com",99],["tinhocdongthap.com",99],["tremamnon.com",99],["423down.com",99],["brizzynovel.com",99],["jugomobile.com",99],["freecodezilla.net",99],["animekhor.xyz",99],["iconmonstr.com",99],["gay-tubes.cc",99],["rbxscripts.net",99],["comentariodetexto.com",99],["wordpredia.com",99],["livsavr.co",99],["allfaucet.xyz",[99,111]],["titbytz.tk",99],["replica-watch.info",99],["alludemycourses.com",99],["kayifamilytv.com",99],["iir.ai",100],["gameofporn.com",102],["qpython.club",103],["antifake-funko.fr",103],["dktechnicalmate.com",103],["recipahi.com",103],["e9china.net",104],["ontools.net",104],["marketbeat.com",105],["hentaipornpics.net",106],["apps2app.com",107],["upshrink.com",108],["fitdynamos.com",110],["ohionowcast.info",111],["wiour.com",111],["bitzite.com",[111,116,117]],["appsbull.com",111],["diudemy.com",111],["maqal360.com",[111,119,120]],["bitcotasks.com",111],["videolyrics.in",111],["manofadan.com",111],["cempakajaya.com",111],["tagecoin.com",111],["doge25.in",111],["king-ptcs.com",111],["naijafav.top",111],["ourcoincash.xyz",111],["sh.techsamir.com",111],["claimcoins.site",111],["cryptosh.pro",111],["eftacrypto.com",111],["fescrypto.com",111],["earnhub.net",111],["kiddyshort.com",111],["tronxminer.com",111],["homeairquality.org",112],["cety.app",[113,114]],["exego.app",113],["cutlink.net",113],["cutsy.net",113],["cutyurls.com",113],["cutty.app",113],["cutnet.net",113],["cuty.me",114],["upfiles-urls.com",[114,129]],["gamerxyt.com",114],["adcrypto.net",115],["admediaflex.com",115],["aduzz.com",115],["bitcrypto.info",115],["cdrab.com",115],["datacheap.io",115],["hbz.us",115],["savego.org",115],["owsafe.com",115],["sportweb.info",115],["gfx-station.com",116],["buzzheavier.com",117],["flashbang.sh",117],["trashbytes.net",117],["aiimgvlog.fun",118],["6indianporn.com",118],["amateurebonypics.com",118],["amateuryoungpics.com",118],["cinemabg.net",118],["coomer.su",118],["desimmshd.com",118],["frauporno.com",118],["givemeaporn.com",118],["hitomi.la",118],["jav-asia.top",118],["javf.net",118],["javfull.net",118],["javideo.net",118],["kemono.su",118],["kr18plus.com",118],["pilibook.com",118],["pornborne.com",118],["porngrey.com",118],["qqxnxx.com",118],["sexvideos.host",118],["submilf.com",118],["subtaboo.com",118],["tktube.com",118],["xfrenchies.com",118],["soft98.ir",[119,137]],["moderngyan.com",121],["sattakingcharts.in",121],["freshbhojpuri.com",121],["bgmi32bitapk.in",121],["bankshiksha.in",121],["earn.mpscstudyhub.com",121],["earn.quotesopia.com",121],["money.quotesopia.com",121],["best-mobilegames.com",121],["learn.moderngyan.com",121],["bharatsarkarijobalert.com",121],["quotesopia.com",121],["creditsgoal.com",121],["coingraph.us",122],["momo-net.com",122],["maxgaming.fi",122],["cybercityhelp.in",123],["travel.vebma.com",124],["cloud.majalahhewan.com",124],["crm.cekresi.me",124],["ai.tempatwisata.pro",124],["pinloker.com",124],["sekilastekno.com",124],["mrproblogger.com",125],["themezon.net",125],["dagensnytt.com",125],["hblinks.pro",126],["hubcdn.vip",126],["90fpsconfig.in",126],["katdrive.link",126],["kmhd.net",126],["bollydrive.rest",126],["azmath.info",127],["downfile.site",127],["downphanmem.com",127],["expertvn.com",127],["memangbau.com",127],["trangchu.news",127],["aztravels.net",127],["ielts-isa.edu.vn",127],["techedubyte.com",[127,236]],["jpopsingles.eu",127],["aipebel.com",127],["link.paid4link.com",128],["vulture.com",130],["megaplayer.bokracdn.run",131],["hentaistream.com",132],["siteunblocked.info",133],["larvelfaucet.com",134],["feyorra.top",134],["claimtrx.com",134],["moviesyug.net",135],["w4files.ws",135],["parispi.net",136],["flatai.org",136],["hentaicloud.com",137],["justin.mp3quack.lol",137],["tio.ch",138],["lavanguardia.com",138],["eplayer.click",138],["tu.no",138],["paperzonevn.com",139],["dailyvideoreports.net",140],["lewd.ninja",141],["systemnews24.com",142],["incestvidz.com",143],["niusdiario.es",144],["playporngames.com",145],["javx.cc",145],["movi.pk",[146,149]],["cutesexyteengirls.com",148],["0dramacool.net",149],["185.53.88.104",149],["185.53.88.204",149],["185.53.88.15",149],["123movies4k.net",149],["1rowsports.com",149],["4share-mp3.net",149],["9animetv.to",149],["720pstream.me",149],["aagmaal.com",149],["abysscdn.com",149],["ajkalerbarta.com",149],["akstream.xyz",149],["androidapks.biz",149],["androidsite.net",149],["animeonlinefree.org",149],["animesite.net",149],["animespank.com",149],["aniworld.to",149],["apkmody.io",149],["appsfree4u.com",149],["audioz.download",149],["awafim.tv",149],["bdnewszh.com",149],["beastlyprints.com",149],["bengalisite.com",149],["bestfullmoviesinhd.org",149],["betteranime.net",149],["blacktiesports.live",149],["buffsports.stream",149],["ch-play.com",149],["clickforhire.com",149],["cloudy.pk",149],["computercrack.com",149],["coolcast2.com",149],["crackedsoftware.biz",149],["crackfree.org",149],["cracksite.info",149],["cryptoblog24.info",149],["cuatrolatastv.blogspot.com",149],["cydiasources.net",149],["decmelfot.xyz",149],["dirproxy.com",149],["dopebox.to",149],["downloadapk.info",149],["downloadapps.info",149],["downloadgames.info",149],["downloadmusic.info",149],["downloadsite.org",149],["downloadwella.com",149],["ebooksite.org",149],["educationtips213.blogspot.com",149],["egyup.live",149],["elgoles.pro",149],["embed.meomeo.pw",149],["embed.scdn.to",149],["emulatorsite.com",149],["essaysharkwriting.club",149],["exploreera.net",149],["extrafreetv.com",149],["fakedetail.com",149],["fclecteur.com",149],["files.im",149],["flexyhit.com",149],["fmoviefree.net",149],["fmovies24.com",149],["footyhunter3.xyz",149],["freeflix.info",149],["freemoviesu4.com",149],["freeplayervideo.com",149],["freesoccer.net",149],["fseries.org",149],["gamefast.org",149],["gamesite.info",149],["gettapeads.com",149],["gmanga.me",149],["gocast123.me",149],["gogohd.net",149],["gogoplay5.com",149],["gooplay.net",149],["gostreamon.net",149],["happy2hub.org",149],["harimanga.com",149],["healthnewsreel.com",149],["hexupload.net",149],["hinatasoul.com",149],["hindisite.net",149],["holymanga.net",149],["hxfile.co",149],["isosite.org",149],["iv-soft.com",149],["januflix.expert",149],["jewelry.com.my",149],["johnwardflighttraining.com",149],["kabarportal.com",149],["kstorymedia.com",149],["la123movies.org",149],["lespassionsdechinouk.com",149],["lilymanga.net",149],["linksdegrupos.com.br",149],["linkz.wiki",149],["livestreamtv.pk",149],["macsite.info",149],["mangasite.org",149],["manhuascan.com",149],["megamovies.org",149],["membed.net",149],["moddroid.com",149],["moviefree2.com",149],["movies-watch.com.pk",149],["moviesite.app",149],["moviesonline.fm",149],["moviesx.org",149],["msmoviesbd.com",149],["musicsite.biz",149],["myfernweh.com",149],["myviid.com",149],["nazarickol.com",149],["noob4cast.com",149],["nsw2u.com",[149,276]],["oko.sh",149],["olympicstreams.me",149],["orangeink.pk",149],["pahaplayers.click",149],["patchsite.net",149],["pdfsite.net",149],["play1002.com",149],["player-cdn.com",149],["productkeysite.com",149],["projectfreetv.one",149],["romsite.org",149],["rufiguta.com",149],["rytmp3.io",149],["send.cm",149],["seriesite.net",149],["seriezloaded.com.ng",149],["serijehaha.com",149],["shrugemojis.com",149],["siteapk.net",149],["siteflix.org",149],["sitegames.net",149],["sitekeys.net",149],["sitepdf.com",149],["sitetorrent.com",149],["softwaresite.net",149],["sportbar.live",149],["sportkart1.xyz",149],["ssyoutube.com",149],["stardima.com",149],["stream4free.live",149],["superapk.org",149],["supermovies.org",149],["tainio-mania.online",149],["talaba.su",149],["tamilguns.org",149],["tatabrada.tv",149],["techtrendmakers.com",149],["thememypc.net",149],["thetechzone.online",149],["thripy.com",149],["tonnestreamz.xyz",149],["travelplanspro.com",149],["turcasmania.com",149],["tusfiles.com",149],["tvonlinesports.com",149],["ultramovies.org",149],["uploadbank.com",149],["urdubolo.pk",149],["vidspeeds.com",149],["warezsite.net",149],["watchmovies2.com",149],["watchmoviesforfree.org",149],["watchofree.com",149],["watchsite.net",149],["watchsouthpark.tv",149],["watchtvch.club",149],["web.livecricket.is",149],["webseries.club",149],["worldcupstream.pm",149],["y2mate.com",149],["youapk.net",149],["youtube4kdownloader.com",149],["yts-subs.com",149],["haho.moe",150],["nicy-spicy.pw",151],["novelmultiverse.com",152],["mylegalporno.com",153],["embedsports.me",154],["embedstream.me",154],["jumbtv.com",154],["reliabletv.me",154],["xnxx.com",157],["thecut.com",158],["novelism.jp",159],["alphapolis.co.jp",160],["game3rb.com",161],["javhub.net",161],["thotvids.com",162],["berklee.edu",163],["rawkuma.com",[164,165]],["moviesjoyhd.to",165],["cineb.rs",165],["imeteo.sk",166],["youtubemp3donusturucu.net",167],["surfsees.com",169],["vivo.st",[170,171]],["alueviesti.fi",173],["kiuruvesilehti.fi",173],["lempaala.ideapark.fi",173],["olutposti.fi",173],["urjalansanomat.fi",173],["tainhanhvn.com",175],["titantv.com",176],["3cinfo.net",177],["transportationlies.org",178],["camarchive.tv",179],["crownimg.com",179],["freejav.guru",179],["hentai2read.com",179],["icyporno.com",179],["illink.net",179],["javtiful.com",179],["m-hentai.net",179],["pornblade.com",179],["pornfelix.com",179],["pornxxxxtube.net",179],["redwap.me",179],["redwap2.com",179],["redwap3.com",179],["sunporno.com",179],["tubxporn.xxx",179],["ver-comics-porno.com",179],["ver-mangas-porno.com",179],["xanimeporn.com",179],["xxxvideohd.net",179],["zetporn.com",179],["simpcity.su",180],["cocomanga.com",181],["animelatinohd.com",181],["sampledrive.in",182],["sportnews.to",182],["soccershoes.blog",182],["mcleaks.net",183],["explorecams.com",183],["minecraft.buzz",183],["chillx.top",184],["playerx.stream",184],["m.liputan6.com",186],["stardewids.com",[186,212]],["ingles.com",187],["spanishdict.com",187],["surfline.com",188],["rureka.com",189],["bunkr.is",190],["freepreset.net",191],["amateur8.com",192],["freeporn8.com",192],["maturetubehere.com",192],["embedo.co",193],["corriere.it",194],["oggi.it",194],["2the.space",195],["file.gocmod.com",197],["apkcombo.com",198],["winfuture.de",199],["sponsorhunter.com",200],["novelssites.com",201],["haxina.com",202],["scimagojr.com",202],["torrentmac.net",203],["udvl.com",204],["apimate.net",205],["dynamicminister.net",205],["gofirmware.com",205],["dlpanda.com",206],["socialmediagirls.com",207],["einrichtungsbeispiele.de",208],["weadown.com",209],["molotov.tv",210],["freecoursesonline.me",211],["adelsfun.com",211],["advantien.com",211],["bailbondsfinder.com",211],["bigpiecreative.com",211],["childrenslibrarylady.com",211],["classifarms.com",211],["comtasq.ca",211],["crone.es",211],["ctrmarketingsolutions.com",211],["dropnudes.com",211],["ftuapps.dev",211],["genzsport.com",211],["ghscanner.com",211],["grsprotection.com",211],["gruporafa.com.br",211],["inmatefindcalifornia.com",211],["inmatesearchidaho.com",211],["itsonsitetv.com",211],["mfmfinancials.com",211],["myproplugins.com",211],["onehack.us",211],["ovester.com",211],["paste.bin.sx",211],["privatenudes.com",211],["renoconcrete.ca",211],["richieashbeck.com",211],["sat.technology",211],["short1ink.com",211],["stpm.co.uk",211],["wegotcookies.co",211],["mathcrave.com",211],["marinetraffic.live",211],["commands.gg",212],["smgplaza.com",213],["emturbovid.com",214],["findjav.com",214],["javggvideo.xyz",214],["mmtv01.xyz",214],["stbturbo.xyz",214],["streamsilk.com",214],["freepik.com",215],["diyphotography.net",217],["bitchesgirls.com",218],["shopforex.online",219],["hiraethtranslation.com",220],["programmingeeksclub.com",221],["diendancauduong.com",222],["androidadult.com",223],["parentcircle.com",224],["h-game18.xyz",225],["wheelofgold.com",226],["davescomputertips.com",227],["historyofroyalwomen.com",227],["skill4ltu.eu",229],["lifestyle.bg",230],["news.bg",230],["topsport.bg",230],["webcafe.bg",230],["freepikdownloader.com",231],["freepasses.org",232],["iusedtobeaboss.com",233],["androidpolice.com",234],["cbr.com",234],["gamerant.com",234],["howtogeek.com",234],["thegamer.com",234],["blogtruyenmoi.com",235],["repretel.com",237],["tubereader.me",237],["igay69.com",238],["graphicget.com",239],["qiwi.gg",[240,241]],["sonixgvn.net",242],["netcine2.la",243],["alliptvlinks.com",244],["smashyplayer.top",245],["xvideos.com",246],["xvideos2.com",246],["homemoviestube.com",247],["sexseeimage.com",247],["ukchat.co.uk",250],["hivelr.com",251],["skidrowcodex.net",252],["takimag.com",253],["digi.no",254],["th.gl",255],["twi-fans.com",256],["learn-cpp.org",257],["terashare.co",258],["pornwex.tv",259],["smithsonianmag.com",260],["homesports.net",261],["realmoasis.com",262],["javfc2.xyz",263],["gobankingrates.com",264],["hiddenleaf.to",265],["ronorp.net",266],["videovak.com",269],["a-lohas.jp",270],["akirabox.com",271],["idnes.cz",[272,273]],["cbc.ca",274],["japscan.lol",275]]);

const entitiesMap = new Map([["kissasian",5],["ganool",5],["pirate",5],["piratebay",5],["pirateproxy",5],["proxytpb",5],["thepiratebay",5],["limetorrents",[6,12]],["king-pes",6],["depedlps",6],["komikcast",6],["idedroidsafelink",6],["links-url",6],["ak4eg",6],["streanplay",7],["steanplay",7],["liferayiseasy",[8,9]],["pahe",12],["yts",12],["tube8",12],["topeuropix",12],["moviescounter",12],["torrent9",12],["desiremovies",12],["movs4u",12],["uwatchfree",12],["hydrax",12],["4movierulz",12],["projectfreetv",12],["arabseed",12],["btdb",[12,51]],["world4ufree",12],["streamsport",12],["rojadirectatvhd",12],["userload",12],["adyou",14],["fxporn69",17],["rexporn",21],["movies07",21],["pornocomics",21],["pornomoll",25],["gsurl",26],["freecoursesonline",27],["lordpremium",27],["todovieneok",27],["novablogitalia",27],["anisubindo",27],["btvsports",27],["stream4free",27],["mimaletadepeliculas",28],["burningseries",29],["dz4soft",30],["yoututosjeff",30],["ebookmed",30],["lanjutkeun",30],["novelasesp",30],["singingdalong",30],["doujindesu",30],["xmovies8",33],["mega-dvdrip",40],["peliculas-dvdrip",40],["desbloqueador",41],["newpelis",[42,49]],["pelix",[42,49]],["allcalidad",[42,179]],["khatrimaza",42],["camwhores",43],["camwhorestv",43],["uproxy",43],["mirrorace",55],["mixdrp",60],["asiansex",62],["japanfuck",62],["japanporn",62],["teensex",62],["vintagetube",62],["xxxmovies",62],["zooqle",66],["hdfull",70],["mangamanga",72],["streameast",73],["thestreameast",73],["vev",77],["vidop",77],["zone-telechargement",79],["1337x",79],["x1337x",79],["megalink",84],["gmx",85],["mega1080p",90],["9hentai",92],["gaypornhdfree",99],["cinemakottaga",99],["privatemoviez",99],["apkmaven",99],["popcornstream",101],["fc-lc",109],["pornktube",118],["watchseries",118],["milfnut",122],["hubdrive",126],["azsoft",127],["pagalmovies",135],["7starhd",135],["jalshamoviez",135],["9xupload",135],["bdupload",135],["desiupload",135],["rdxhd1",135],["nuvid",137],["moviessources",147],["0gomovie",149],["0gomovies",149],["123moviefree",149],["1kmovies",149],["1madrasdub",149],["1primewire",149],["2embed",149],["2madrasdub",149],["2umovies",149],["4anime",149],["adblockplustape",149],["altadefinizione01",149],["atomixhq",149],["beinmatch",149],["brmovies",149],["cima4u",149],["clicknupload",149],["cmovies",149],["cricfree",149],["crichd",149],["dood",149],["f1stream",149],["faselhd",149],["fbstream",149],["filemoon",149],["filepress",[149,216]],["filmlinks4u",149],["filmpertutti",149],["filmyzilla",149],["fmovies",149],["french-stream",149],["fzlink",149],["gofilms4u",149],["gogoanime",149],["gomoviz",149],["hdmoviefair",149],["hdmovies4u",149],["hdmovies50",149],["hdmoviesfair",149],["hh3dhay",149],["hindilinks4u",149],["hotmasti",149],["hurawatch",149],["klmanga",149],["klubsports",149],["libertestreamvf",149],["livetvon",149],["manga1000",149],["manga1001",149],["mangaraw",149],["mangarawjp",149],["mlbstream",149],["motogpstream",149],["movierulz",149],["movies123",149],["movies2watch",149],["moviesden",149],["moviezaddiction",149],["myflixer",149],["nbastream",149],["netcine",149],["nflstream",149],["nhlstream",149],["onlinewatchmoviespk",149],["pctfenix",149],["pctnew",149],["pksmovies",149],["plyjam",149],["plylive",149],["pogolinks",149],["popcorntime",149],["poscitech",149],["rugbystreams",149],["shahed4u",149],["sflix",149],["sitesunblocked",149],["solarmovies",149],["sportcast",149],["sportskart",149],["sports-stream",149],["streaming-french",149],["streamers",149],["streamingcommunity",[149,196]],["strikeout",149],["t20cup",149],["tennisstreams",149],["torrentdosfilmes",149],["toonanime",149],["tvply",149],["ufcstream",149],["uptomega",149],["uqload",149],["vudeo",149],["vidoo",149],["vipbox",149],["vipboxtv",149],["vipleague",149],["viprow",149],["yesmovies",149],["yomovies",149],["yomovies1",149],["yt2mp3s",149],["kat",149],["katbay",149],["kickass",149],["kickasshydra",149],["kickasskat",149],["kickass2",149],["kickasstorrents",149],["kat2",149],["kattracker",149],["thekat",149],["thekickass",149],["kickassz",149],["kickasstorrents2",149],["topkickass",149],["kickassgo",149],["kkickass",149],["kkat",149],["kickasst",149],["kick4ss",149],["guardaserie",155],["cine-calidad",156],["xvideos",157],["videovard",172],["gntai",179],["grantorrent",179],["mejortorrent",179],["mejortorrento",179],["mejortorrents",179],["mejortorrents1",179],["mejortorrentt",179],["shineads",182],["bg-gledai",211],["gledaitv",211],["motchill",228],["upns",245],["readcomiconline",248],["nekopoi",249],["gdflix",267],["a1movies",268]]);

const exceptionsMap = new Map([["forum.soft98.ir",[119,137]]]);

/******************************************************************************/

function addEventListenerDefuser(
    type = '',
    pattern = ''
) {
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 2);
    const logPrefix = safe.makeLogPrefix('prevent-addEventListener', type, pattern);
    const reType = safe.patternToRegex(type, undefined, true);
    const rePattern = safe.patternToRegex(pattern);
    const debug = shouldDebug(extraArgs);
    const targetSelector = extraArgs.elements || undefined;
    const elementMatches = elem => {
        if ( targetSelector === 'window' ) { return elem === window; }
        if ( targetSelector === 'document' ) { return elem === document; }
        if ( elem && elem.matches && elem.matches(targetSelector) ) { return true; }
        const elems = Array.from(document.querySelectorAll(targetSelector));
        return elems.includes(elem);
    };
    const elementDetails = elem => {
        if ( elem instanceof Window ) { return 'window'; }
        if ( elem instanceof Document ) { return 'document'; }
        if ( elem instanceof Element === false ) { return '?'; }
        const parts = [];
        // https://github.com/uBlockOrigin/uAssets/discussions/17907#discussioncomment-9871079
        const id = String(elem.id);
        if ( id !== '' ) { parts.push(`#${CSS.escape(id)}`); }
        for ( let i = 0; i < elem.classList.length; i++ ) {
            parts.push(`.${CSS.escape(elem.classList.item(i))}`);
        }
        for ( let i = 0; i < elem.attributes.length; i++ ) {
            const attr = elem.attributes.item(i);
            if ( attr.name === 'id' ) { continue; }
            if ( attr.name === 'class' ) { continue; }
            parts.push(`[${CSS.escape(attr.name)}="${attr.value}"]`);
        }
        return parts.join('');
    };
    const shouldPrevent = (thisArg, type, handler) => {
        const matchesType = safe.RegExp_test.call(reType, type);
        const matchesHandler = safe.RegExp_test.call(rePattern, handler);
        const matchesEither = matchesType || matchesHandler;
        const matchesBoth = matchesType && matchesHandler;
        if ( debug === 1 && matchesBoth || debug === 2 && matchesEither ) {
            debugger; // eslint-disable-line no-debugger
        }
        if ( matchesBoth && targetSelector !== undefined ) {
            if ( elementMatches(thisArg) === false ) { return false; }
        }
        return matchesBoth;
    };
    runAt(( ) => {
        proxyApplyFn('EventTarget.prototype.addEventListener', function(context) {
            const { callArgs, thisArg } = context;
            let t, h;
            try {
                t = String(callArgs[0]);
                if ( typeof callArgs[1] === 'function' ) {
                    h = String(safe.Function_toString(callArgs[1]));
                } else if ( typeof callArgs[1] === 'object' && callArgs[1] !== null ) {
                    if ( typeof callArgs[1].handleEvent === 'function' ) {
                        h = String(safe.Function_toString(callArgs[1].handleEvent));
                    }
                } else {
                    h = String(callArgs[1]);
                }
            } catch(ex) {
            }
            if ( type === '' && pattern === '' ) {
                safe.uboLog(logPrefix, `Called: ${t}\n${h}\n${elementDetails(thisArg)}`);
            } else if ( shouldPrevent(thisArg, t, h) ) {
                return safe.uboLog(logPrefix, `Prevented: ${t}\n${h}\n${elementDetails(thisArg)}`);
            }
            return context.reflect();
        });
    }, extraArgs.runAt);
}

function proxyApplyFn(
    target = '',
    handler = ''
) {
    let context = globalThis;
    let prop = target;
    for (;;) {
        const pos = prop.indexOf('.');
        if ( pos === -1 ) { break; }
        context = context[prop.slice(0, pos)];
        if ( context instanceof Object === false ) { return; }
        prop = prop.slice(pos+1);
    }
    const fn = context[prop];
    if ( typeof fn !== 'function' ) { return; }
    if ( proxyApplyFn.CtorContext === undefined ) {
        proxyApplyFn.ctorContexts = [];
        proxyApplyFn.CtorContext = class {
            constructor(...args) {
                this.init(...args);
            }
            init(callFn, callArgs) {
                this.callFn = callFn;
                this.callArgs = callArgs;
                return this;
            }
            reflect() {
                const r = Reflect.construct(this.callFn, this.callArgs);
                this.callFn = this.callArgs = this.private = undefined;
                proxyApplyFn.ctorContexts.push(this);
                return r;
            }
            static factory(...args) {
                return proxyApplyFn.ctorContexts.length !== 0
                    ? proxyApplyFn.ctorContexts.pop().init(...args)
                    : new proxyApplyFn.CtorContext(...args);
            }
        };
        proxyApplyFn.applyContexts = [];
        proxyApplyFn.ApplyContext = class {
            constructor(...args) {
                this.init(...args);
            }
            init(callFn, thisArg, callArgs) {
                this.callFn = callFn;
                this.thisArg = thisArg;
                this.callArgs = callArgs;
                return this;
            }
            reflect() {
                const r = Reflect.apply(this.callFn, this.thisArg, this.callArgs);
                this.callFn = this.thisArg = this.callArgs = this.private = undefined;
                proxyApplyFn.applyContexts.push(this);
                return r;
            }
            static factory(...args) {
                return proxyApplyFn.applyContexts.length !== 0
                    ? proxyApplyFn.applyContexts.pop().init(...args)
                    : new proxyApplyFn.ApplyContext(...args);
            }
        };
    }
    const fnStr = fn.toString();
    const toString = (function toString() { return fnStr; }).bind(null);
    const proxyDetails = {
        apply(target, thisArg, args) {
            return handler(proxyApplyFn.ApplyContext.factory(target, thisArg, args));
        },
        get(target, prop) {
            if ( prop === 'toString' ) { return toString; }
            return Reflect.get(target, prop);
        },
    };
    if ( fn.prototype?.constructor === fn ) {
        proxyDetails.construct = function(target, args) {
            return handler(proxyApplyFn.CtorContext.factory(target, args));
        };
    }
    context[prop] = new Proxy(fn, proxyDetails);
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

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.canDebug && details.debug;
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
    try { addEventListenerDefuser(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_addEventListenerDefuser();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
