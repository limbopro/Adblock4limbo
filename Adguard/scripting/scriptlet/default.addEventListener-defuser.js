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

const argsList = [["load","Object"],["load","hard_block"],["/contextmenu|keydown/"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["error"],["load","onload"],["","BACK"],["load","getComputedStyle"],["load","adsense"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","window.open"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["mousedown","preventDefault"],["load","nextFunction"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["click","_blank"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["DOMContentLoaded","isMobile"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["load","ads"],["click","document.createElement"],["click","ShouldShow"],["click","clickCount"],["mousedown","localStorage"],["DOMContentLoaded","document.documentElement.lang.toLowerCase"],["","adsense"],["/adblock/i"],["load","doTest"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","daadb_get_data_fetch"],["click","splashPage"],["load","detect-modal"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["load",".call(this"],["load","adblock"],["/touchmove|wheel/","preventDefault()"],["load","showcfkModal"],["click","attached","elements","div[class=\"share-embed-container\"]"],["click","fp-screen"],["DOMContentLoaded","leaderboardAd"],["DOMContentLoaded","fetch"],["mousedown","shown_at"],["click","openPopupForChapter"],["click","doThePop"],["DOMContentLoaded","blockAdBlock"],["DOMContentLoaded","location.href"],["click","openDirectLinkAd"],["load","detect"],["DOMContentLoaded","history.pushState"],["DOMContentLoaded","showPopup"],["click","PopUnder"],["DOMContentLoaded","history.go"],["load","puHref"],["click","Ads"],["DOMContentLoaded","iframe"],["","/_blank/i"],["blur","stopCountdown"],["load","htmls"],["blur","focusOut"],["click","/handleClick|popup/"],["click","open"],["load","bypass"],["","popMagic"],["click","Popunder"],["contextmenu"],["submit","validateForm"],["blur","counter"],["click","maxclick"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["beforeunload"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["message"],["","/pop|_blank/"],["click","allclick_Public"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["","about:blank"],["click","popMagic"],["","shouldShow"],["load","popMagic"],["DOMContentLoaded","adsSrc"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["","exoJsPop101"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["click","popName"],["blur"],["DOMContentLoaded","clientHeight"],["load","error-report.com"],["click","window.focus"],["contextmenu","preventDefault"],["click","event.dispatch"],["","Math"],["DOMContentLoaded","popupurls"],["","tabUnder"],["click","window.open"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["load","Ads"],["DOMContentLoaded","document.documentElement.lang"],["DOMContentLoaded","googlesyndication"],["np.evtdetect"],["load","popunder"],["DOMContentLoaded",".clientHeight"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["load","document.getElementById"],["mousedown","tabUnder"],["click","popactive"],["load","adsbygoogle"],["DOMContentLoaded","location.replace"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["error","blocker"],["click","alink"],["load","[native code]"],["","daadb"],["load","google-analytics"],["","sessionStorage"],["click","form.submit"],["DOMContentLoaded","overlays"],["load","fetch"],["click","pingUrl"],["mousedown","scoreUrl"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["/=>\\s*\\{\\s*function|^.{600,700}$|PrimeVideo|Macbook|\\+'ined'|t'\\+'y|setTimeout\\(function/"],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",1],["userscloud.com",2],["timesofindia.indiatimes.com",3],["drrtyr.mx",3],["pinoyalbums.com",3],["multiplayer.it",3],["mediafire.com",[4,5]],["pinsystem.co.uk",6],["ancensored.com",6],["mp3fiber.com",[6,29]],["xrivonet.info",6],["afreesms.com",7],["tu.no",7],["tio.ch",7],["lavanguardia.com",7],["eplayer.click",7],["kingofdown.com",8],["radiotormentamx.com",8],["quelleestladifference.fr",8],["otakuworldsite.blogspot.com",8],["ad-itech.blogspot.com",8],["sna3talaflam.com",8],["agar.pro",8],["unlockapk.com",8],["mobdi3ips.com",8],["socks24.org",8],["interviewgig.com",8],["javaguides.net",8],["almohtarif-tech.net",8],["forum.release-apk.com",8],["devoloperxda.blogspot.com",8],["zwergenstadt.com",8],["primedeportes.es",8],["9goals.live",8],["upxin.net",8],["ciudadblogger.com",8],["ke-1.com",8],["secretsdeepweb.blogspot.com",8],["bit-shares.com",8],["itdmusics.com",8],["aspdotnet-suresh.com",8],["tudo-para-android.com",8],["urdulibrarypk.blogspot.com",8],["zerotopay.com",8],["akw.to",8],["mawsueaa.com",8],["hesgoal-live.io",8],["king-shoot.io",8],["bibme.org",12],["citationmachine.net",12],["easybib.com",13],["vermangasporno.com",14],["imgtorrnt.in",14],["picbaron.com",[14,156]],["letmejerk.com",14],["letmejerk2.com",14],["letmejerk3.com",14],["letmejerk4.com",14],["letmejerk5.com",14],["letmejerk6.com",14],["letmejerk7.com",14],["dlapk4all.com",14],["kropic.com",14],["kvador.com",14],["pdfindir.net",14],["brstej.com",14],["topwwnews.com",14],["xsanime.com",14],["vidlo.us",14],["put-locker.com",14],["youx.xxx",14],["animeindo.asia",14],["masahub.net",14],["adclickersbot.com",14],["badtaste.it",15],["shemalez.com",17],["tubepornclassic.com",17],["gotporn.com",18],["freepornrocks.com",18],["tvhai.org",18],["realgfporn.com",[19,20]],["thisvid.com",20],["xvideos-downloader.net",20],["imgspice.com",21],["vikiporn.com",22],["tnaflix.com",22],["hentai2w.com",[22,207]],["yourlust.com",22],["hotpornfile.org",22],["watchfreexxx.net",22],["vintageporntubes.com",22],["angelgals.com",22],["babesexy.com",22],["porndaa.com",22],["ganstamovies.com",22],["youngleak.com",22],["porndollz.com",22],["xnxxvideo.pro",22],["xvideosxporn.com",22],["filmpornofrancais.fr",22],["pictoa.com",[22,44]],["tubator.com",22],["adultasianporn.com",22],["nsfwmonster.com",22],["girlsofdesire.org",22],["gaytail.com",22],["fetish-bb.com",22],["rumporn.com",22],["soyoungteens.com",22],["zubby.com",22],["lesbian8.com",22],["gayforfans.com",22],["reifporn.de",22],["javtsunami.com",22],["18tube.sex",22],["xxxextreme.org",22],["amateurs-fuck.com",22],["sex-amateur-clips.com",22],["hentaiworld.tv",22],["dads-banging-teens.com",22],["home-xxx-videos.com",22],["mature-chicks.com",22],["teens-fucking-matures.com",22],["hqbang.com",22],["darknessporn.com",22],["familyporner.com",22],["freepublicporn.com",22],["pisshamster.com",22],["punishworld.com",22],["xanimu.com",22],["pornhd.com",23],["cnnamador.com",[23,33]],["cle0desktop.blogspot.com",23],["turkanime.co",23],["camclips.tv",[23,45]],["blackpornhq.com",23],["xsexpics.com",23],["ulsex.net",23],["wannafreeporn.com",23],["ytube2dl.com",23],["multiup.us",23],["protege-torrent.com",23],["pussyspace.com",[24,25]],["pussyspace.net",[24,25]],["empflix.com",26],["cpmlink.net",27],["bdsmstreak.com",27],["cutpaid.com",27],["pornforrelax.com",27],["fatwhitebutt.com",27],["short.pe",28],["totaldebrid.org",29],["neko-miku.com",29],["elsfile.org",29],["venstrike.jimdofree.com",29],["schrauben-normen.de",29],["avengerinator.blogspot.com",29],["link-to.net",29],["hanimesubth.com",29],["gsmturkey.net",29],["adshrink.it",29],["presentation-ppt.com",29],["mangacanblog.com",29],["pekalongan-cits.blogspot.com",29],["4tymode.win",29],["eurotruck2.com.br",29],["tiroalpaloes.com",29],["tiroalpaloes.net",29],["linkvertise.com",29],["reifenrechner.at",29],["tire-size-calculator.info",29],["linuxsecurity.com",29],["itsguider.com",29],["cotravinh.blogspot.com",29],["itudong.com",29],["shortx.net",29],["lecturel.com",29],["bakai.org",29],["nar.k-ba.net",29],["tiroalpalo.org",29],["bs.to",31],["efukt.com",31],["generacionretro.net",32],["nuevos-mu.ucoz.com",32],["micloudfiles.com",32],["mimaletamusical.blogspot.com",32],["visionias.net",32],["b3infoarena.in",32],["lurdchinexgist.blogspot.com",32],["thefreedommatrix.blogspot.com",32],["hentai-vl.blogspot.com",32],["projetomotog.blogspot.com",32],["ktmx.pro",32],["lirik3satu.blogspot.com",32],["marketmovers.it",32],["pharmaguideline.com",32],["safemaru.blogspot.com",32],["mixloads.com",32],["mangaromance.eu",32],["interssh.com",32],["freesoftpdfdownload.blogspot.com",32],["cirokun.blogspot.com",32],["myadslink.com",32],["blackavelic.com",32],["server.satunivers.tv",32],["eg-akw.com",32],["xn--mgba7fjn.cc",32],["flashingjungle.com",33],["ma-x.org",34],["lavozdegalicia.es",34],["ddwloclawek.pl",34],["ki24.info",34],["xmovies08.org",36],["globaldjmix.com",37],["zazzybabes.com",38],["haaretz.co.il",39],["haaretz.com",39],["slate.com",40],["megalinks.info",41],["megapastes.com",41],["mega-mkv.com",[41,42]],["mkv-pastes.com",41],["zpaste.net",41],["zlpaste.net",41],["9xlinks.site",41],["zona-leros.net",42],["acortarm.xyz",43],["cine.to",[44,213]],["kissasia.cc",44],["digjav.com",45],["videoszoofiliahd.com",46],["xxxtubezoo.com",47],["zooredtube.com",47],["uii.io",48],["megacams.me",49],["rlslog.net",49],["porndoe.com",50],["acienciasgalilei.com",52],["playrust.io",53],["payskip.org",54],["short-url.link",55],["tubedupe.com",56],["mcrypto.club",57],["fatgirlskinny.net",58],["polska-ie.com",58],["windowsmatters.com",58],["canaltdt.es",59],["masbrooo.com",59],["2ndrun.tv",59],["oncehelp.com",60],["curto.win",60],["smallseotools.com",61],["macwelt.de",63],["pcwelt.de",63],["capital.de",63],["geo.de",63],["allmomsex.com",64],["allnewindianporn.com",64],["analxxxvideo.com",64],["animalextremesex.com",64],["anime3d.xyz",64],["animefuckmovies.com",64],["animepornfilm.com",64],["animesexbar.com",64],["animesexclip.com",64],["animexxxsex.com",64],["animexxxfilms.com",64],["anysex.club",64],["apetube.asia",64],["asianfuckmovies.com",64],["asianfucktube.com",64],["asianporn.sexy",64],["asiansexcilps.com",64],["beeg.fund",64],["beegvideoz.com",64],["bestasiansex.pro",64],["bravotube.asia",64],["brutalanimalsfuck.com",64],["candyteenporn.com",64],["daddyfuckmovies.com",64],["desifuckonline.com",64],["exclusiveasianporn.com",64],["exteenporn.com",64],["fantasticporn.net",64],["fantasticyoungporn.com",64],["fineasiansex.com",64],["firstasianpussy.com",64],["freeindiansextube.com",64],["freepornasians.com",64],["freerealvideo.com",64],["fuck-beeg.com",64],["fuck-xnxx.com",64],["fuckasian.pro",64],["fuckfuq.com",64],["fuckundies.com",64],["gojapaneseporn.com",64],["golderotica.com",64],["goodyoungsex.com",64],["goyoungporn.com",64],["hardxxxmoms.com",64],["hdvintagetube.com",64],["hentaiporn.me",64],["hentaisexfilms.com",64],["hentaisexuality.com",64],["hot-teens-movies.mobi",64],["hotanimepornvideos.com",64],["hotanimevideos.com",64],["hotasianpussysex.com",64],["hotjapaneseshows.com",64],["hotmaturetube.com",64],["hotmilfs.pro",64],["hotorientalporn.com",64],["hotpornyoung.com",64],["hotxxxjapanese.com",64],["hotxxxpussy.com",64],["indiafree.net",64],["indianpornvideo.online",64],["japanpornclip.com",64],["japanesetube.video",64],["japansex.me",64],["japanesexxxporn.com",64],["japansporno.com",64],["japanxxx.asia",64],["japanxxxworld.com",64],["keezmovies.surf",64],["lingeriefuckvideo.com",64],["liveanimalporn.zooo.club",64],["madhentaitube.com",64],["megahentaitube.com",64],["megajapanesesex.com",64],["megajapantube.com",64],["milfxxxpussy.com",64],["momsextube.pro",64],["momxxxass.com",64],["monkeyanimalporn.com",64],["moviexxx.mobi",64],["newanimeporn.com",64],["newjapanesexxx.com",64],["nicematureporn.com",64],["nudeplayboygirls.com",64],["openxxxporn.com",64],["originalindianporn.com",64],["originalteentube.com",64],["pig-fuck.com",64],["plainasianporn.com",64],["popularasianxxx.com",64],["pornanimetube.com",64],["pornasians.pro",64],["pornhat.asia",64],["pornheed.online",64],["pornjapanesesex.com",64],["pornomovies.asia",64],["pornvintage.tv",64],["primeanimesex.com",64],["realjapansex.com",64],["realmomsex.com",64],["redsexhub.com",64],["retroporn.world",64],["retrosexfilms.com",64],["sex-free-movies.com",64],["sexanimesex.com",64],["sexanimetube.com",64],["sexjapantube.com",64],["sexmomvideos.com",64],["sexteenxxxtube.com",64],["sexxxanimal.com",64],["sexyoungtube.com",64],["sexyvintageporn.com",64],["sopornmovies.com",64],["spicyvintageporn.com",64],["sunporno.club",64],["tabooanime.club",64],["teenextrem.com",64],["teenfucksex.com",64],["teenhost.net",64],["teensexass.com",64],["tnaflix.asia",64],["totalfuckmovies.com",64],["totalmaturefuck.com",64],["txxx.asia",64],["voyeurpornsex.com",64],["warmteensex.com",64],["wetasiancreampie.com",64],["wildhentaitube.com",64],["wowyoungsex.com",64],["xhamster-art.com",64],["xmovie.pro",64],["xnudevideos.com",64],["xnxxjapon.com",64],["xpics.me",64],["xvide.me",64],["xxxanimefuck.com",64],["xxxanimevideos.com",64],["xxxanimemovies.com",64],["xxxhentaimovies.com",64],["xxxhothub.com",64],["xxxjapaneseporntube.com",64],["xxxlargeporn.com",64],["xxxmomz.com",64],["xxxpornmilf.com",64],["xxxpussyclips.com",64],["xxxpussysextube.com",64],["xxxretrofuck.com",64],["xxxsex.pro",64],["xxxsexyjapanese.com",64],["xxxteenyporn.com",64],["xxxvideo.asia",64],["xxxvideos.ink",64],["xxxyoungtv.com",64],["youjizzz.club",64],["youngpussyfuck.com",64],["bayimg.com",65],["celeb.gate.cc",66],["kinoger.re",67],["desi.upn.bio",67],["masterplayer.xyz",69],["pussy-hub.com",69],["porndex.com",70],["compucalitv.com",71],["diariodenavarra.es",73],["duden.de",75],["pennlive.com",77],["beautypageants.indiatimes.com",78],["01fmovies.com",79],["lnk2.cc",81],["fullhdxxx.com",82],["luscious.net",[82,156]],["classicpornbest.com",82],["xstory-fr.com",82],["1youngteenporn.com",82],["www-daftarharga.blogspot.com",[82,196]],["miraculous.to",[82,202]],["vtube.to",82],["gosexpod.com",83],["otakukan.com",84],["xcafe.com",85],["pornfd.com",85],["venusarchives.com",85],["imagehaha.com",86],["imagenpic.com",86],["imageshimage.com",86],["imagetwist.com",86],["k1nk.co",87],["watchasians.cc",87],["alexsports.xyz",87],["lulustream.com",87],["luluvdo.com",87],["web.de",88],["news18.com",89],["thelanb.com",90],["dropmms.com",90],["softwaredescargas.com",91],["cracking-dz.com",92],["anitube.ninja",93],["gazzetta.it",94],["port.hu",96],["dziennikbaltycki.pl",97],["dzienniklodzki.pl",97],["dziennikpolski24.pl",97],["dziennikzachodni.pl",97],["echodnia.eu",97],["expressbydgoski.pl",97],["expressilustrowany.pl",97],["gazetakrakowska.pl",97],["gazetalubuska.pl",97],["gazetawroclawska.pl",97],["gk24.pl",97],["gloswielkopolski.pl",97],["gol24.pl",97],["gp24.pl",97],["gra.pl",97],["gs24.pl",97],["kurierlubelski.pl",97],["motofakty.pl",97],["naszemiasto.pl",97],["nowiny24.pl",97],["nowosci.com.pl",97],["nto.pl",97],["polskatimes.pl",97],["pomorska.pl",97],["poranny.pl",97],["sportowy24.pl",97],["strefaagro.pl",97],["strefabiznesu.pl",97],["stronakobiet.pl",97],["telemagazyn.pl",97],["to.com.pl",97],["wspolczesna.pl",97],["course9x.com",97],["courseclub.me",97],["azrom.net",97],["alttyab.net",97],["esopress.com",97],["nesiaku.my.id",97],["onemanhua.com",98],["freeindianporn.mobi",98],["dr-farfar.com",99],["boyfriendtv.com",100],["brandstofprijzen.info",101],["netfuck.net",102],["blog24.me",[102,151]],["kisahdunia.com",102],["javsex.to",102],["nulljungle.com",102],["oyuncusoruyor.com",102],["pbarecap.ph",102],["sourds.net",102],["teknobalta.com",102],["tvinternetowa.info",102],["sqlserveregitimleri.com",102],["tutcourse.com",102],["readytechflip.com",102],["novinhastop.com",102],["warddogs.com",102],["dvdgayporn.com",102],["iimanga.com",102],["tinhocdongthap.com",102],["tremamnon.com",102],["423down.com",102],["brizzynovel.com",102],["jugomobile.com",102],["freecodezilla.net",102],["animekhor.xyz",102],["iconmonstr.com",102],["gay-tubes.cc",102],["rbxscripts.net",102],["comentariodetexto.com",102],["wordpredia.com",102],["livsavr.co",102],["allfaucet.xyz",[102,151]],["titbytz.tk",102],["replica-watch.info",102],["alludemycourses.com",102],["kayifamilytv.com",102],["iir.ai",103],["gameofporn.com",105],["qpython.club",106],["antifake-funko.fr",106],["dktechnicalmate.com",106],["recipahi.com",106],["e9china.net",107],["ontools.net",107],["marketbeat.com",108],["hentaipornpics.net",109],["apps2app.com",110],["alliptvlinks.com",111],["smashyplayer.top",112],["xvideos.com",113],["xvideos2.com",113],["homemoviestube.com",114],["sexseeimage.com",114],["jpopsingles.eu",116],["aipebel.com",116],["azmath.info",116],["downfile.site",116],["downphanmem.com",116],["expertvn.com",116],["memangbau.com",116],["trangchu.news",116],["aztravels.net",116],["ielts-isa.edu.vn",116],["techedubyte.com",[116,265]],["tubereader.me",118],["repretel.com",118],["dagensnytt.com",119],["mrproblogger.com",119],["themezon.net",119],["gfx-station.com",120],["bitzite.com",[120,139,151]],["historyofroyalwomen.com",121],["davescomputertips.com",121],["ukchat.co.uk",122],["hivelr.com",123],["skidrowcodex.net",124],["takimag.com",125],["digi.no",126],["th.gl",127],["scimagojr.com",128],["haxina.com",128],["cryptofenz.xyz",128],["twi-fans.com",129],["learn-cpp.org",130],["terashare.co",131],["pornwex.tv",132],["smithsonianmag.com",133],["homesports.net",134],["cineb.rs",135],["rawkuma.com",[135,193]],["moviesjoyhd.to",135],["realmoasis.com",136],["javfc2.xyz",137],["gobankingrates.com",138],["buzzheavier.com",139],["flashbang.sh",139],["trashbytes.net",139],["hiddenleaf.to",140],["ronorp.net",141],["videovak.com",144],["gamerxyt.com",145],["a-lohas.jp",146],["akirabox.com",147],["upshrink.com",148],["fitdynamos.com",150],["ohionowcast.info",151],["wiour.com",151],["appsbull.com",151],["diudemy.com",151],["maqal360.com",151],["bitcotasks.com",151],["videolyrics.in",151],["manofadan.com",151],["cempakajaya.com",151],["tagecoin.com",151],["doge25.in",151],["king-ptcs.com",151],["naijafav.top",151],["ourcoincash.xyz",151],["sh.techsamir.com",151],["claimcoins.site",151],["cryptosh.pro",151],["coinsrev.com",151],["go.freetrx.fun",151],["eftacrypto.com",151],["fescrypto.com",151],["earnhub.net",151],["kiddyshort.com",151],["tronxminer.com",151],["homeairquality.org",152],["cety.app",[153,154]],["exego.app",153],["cutlink.net",153],["cutsy.net",153],["cutyurls.com",153],["cutty.app",153],["cutnet.net",153],["hentaicloud.com",154],["justin.mp3quack.lol",154],["soft98.ir",[154,228]],["adcrypto.net",155],["admediaflex.com",155],["aduzz.com",155],["bitcrypto.info",155],["cdrab.com",155],["datacheap.io",155],["hbz.us",155],["savego.org",155],["owsafe.com",155],["sportweb.info",155],["aiimgvlog.fun",156],["6indianporn.com",156],["amateurebonypics.com",156],["amateuryoungpics.com",156],["cinemabg.net",156],["coomer.su",156],["desimmshd.com",156],["frauporno.com",156],["givemeaporn.com",156],["hitomi.la",156],["jav-asia.top",156],["javf.net",156],["javfull.net",156],["javideo.net",156],["kemono.su",156],["kr18plus.com",156],["pilibook.com",156],["pornborne.com",156],["porngrey.com",156],["qqxnxx.com",156],["sexvideos.host",156],["submilf.com",156],["subtaboo.com",156],["tktube.com",156],["xfrenchies.com",156],["moderngyan.com",157],["sattakingcharts.in",157],["freshbhojpuri.com",157],["bgmi32bitapk.in",157],["bankshiksha.in",157],["earn.mpscstudyhub.com",157],["earn.quotesopia.com",157],["money.quotesopia.com",157],["best-mobilegames.com",157],["learn.moderngyan.com",157],["bharatsarkarijobalert.com",157],["quotesopia.com",157],["creditsgoal.com",157],["coingraph.us",158],["momo-net.com",158],["maxgaming.fi",158],["cybercityhelp.in",159],["travel.vebma.com",160],["cloud.majalahhewan.com",160],["crm.cekresi.me",160],["ai.tempatwisata.pro",160],["pinloker.com",160],["sekilastekno.com",160],["link.paid4link.com",161],["vulture.com",162],["megaplayer.bokracdn.run",163],["hentaistream.com",164],["siteunblocked.info",165],["larvelfaucet.com",166],["feyorra.top",166],["claimtrx.com",166],["moviesyug.net",167],["w4files.ws",167],["parispi.net",168],["paperzonevn.com",169],["dailyvideoreports.net",170],["lewd.ninja",171],["systemnews24.com",172],["incestvidz.com",173],["niusdiario.es",174],["playporngames.com",175],["movi.pk",[176,179]],["cutesexyteengirls.com",178],["0dramacool.net",179],["185.53.88.104",179],["185.53.88.204",179],["185.53.88.15",179],["123movies4k.net",179],["1rowsports.com",179],["4share-mp3.net",179],["9animetv.to",179],["720pstream.me",179],["aagmaal.com",179],["abysscdn.com",179],["ajkalerbarta.com",179],["akstream.xyz",179],["androidapks.biz",179],["androidsite.net",179],["animeonlinefree.org",179],["animesite.net",179],["animespank.com",179],["aniworld.to",179],["apkmody.io",179],["appsfree4u.com",179],["audioz.download",179],["awafim.tv",179],["bdnewszh.com",179],["beastlyprints.com",179],["bengalisite.com",179],["bestfullmoviesinhd.org",179],["betteranime.net",179],["blacktiesports.live",179],["buffsports.stream",179],["ch-play.com",179],["clickforhire.com",179],["cloudy.pk",179],["computercrack.com",179],["coolcast2.com",179],["crackedsoftware.biz",179],["crackfree.org",179],["cracksite.info",179],["cryptoblog24.info",179],["cuatrolatastv.blogspot.com",179],["cydiasources.net",179],["decmelfot.xyz",179],["dirproxy.com",179],["dopebox.to",179],["downloadapk.info",179],["downloadapps.info",179],["downloadgames.info",179],["downloadmusic.info",179],["downloadsite.org",179],["downloadwella.com",179],["ebooksite.org",179],["educationtips213.blogspot.com",179],["egyup.live",179],["elgoles.pro",179],["embed.meomeo.pw",179],["embed.scdn.to",179],["emulatorsite.com",179],["essaysharkwriting.club",179],["exploreera.net",179],["extrafreetv.com",179],["fakedetail.com",179],["fclecteur.com",179],["files.im",179],["flexyhit.com",179],["fmoviefree.net",179],["fmovies24.com",179],["footyhunter3.xyz",179],["freeflix.info",179],["freemoviesu4.com",179],["freeplayervideo.com",179],["freesoccer.net",179],["fseries.org",179],["gamefast.org",179],["gamesite.info",179],["gettapeads.com",179],["gmanga.me",179],["gocast123.me",179],["gogohd.net",179],["gogoplay5.com",179],["gooplay.net",179],["gostreamon.net",179],["happy2hub.org",179],["harimanga.com",179],["healthnewsreel.com",179],["hexupload.net",179],["hinatasoul.com",179],["hindisite.net",179],["holymanga.net",179],["hxfile.co",179],["isosite.org",179],["iv-soft.com",179],["januflix.expert",179],["jewelry.com.my",179],["johnwardflighttraining.com",179],["kabarportal.com",179],["kstorymedia.com",179],["la123movies.org",179],["lespassionsdechinouk.com",179],["lilymanga.net",179],["linksdegrupos.com.br",179],["linkz.wiki",179],["livestreamtv.pk",179],["macsite.info",179],["mangapt.com",179],["mangasite.org",179],["manhuascan.com",179],["megafilmeshdseries.com",179],["megamovies.org",179],["membed.net",179],["moddroid.com",179],["moviefree2.com",179],["movies-watch.com.pk",179],["moviesite.app",179],["moviesonline.fm",179],["moviesx.org",179],["msmoviesbd.com",179],["musicsite.biz",179],["myfernweh.com",179],["myviid.com",179],["nazarickol.com",179],["noob4cast.com",179],["nsw2u.com",[179,276]],["oko.sh",179],["olympicstreams.me",179],["orangeink.pk",179],["owllink.net",179],["pahaplayers.click",179],["patchsite.net",179],["pdfsite.net",179],["play1002.com",179],["player-cdn.com",179],["productkeysite.com",179],["projectfreetv.one",179],["romsite.org",179],["rufiguta.com",179],["rytmp3.io",179],["send.cm",179],["seriesite.net",179],["seriezloaded.com.ng",179],["serijehaha.com",179],["shrugemojis.com",179],["siteapk.net",179],["siteflix.org",179],["sitegames.net",179],["sitekeys.net",179],["sitepdf.com",179],["sitetorrent.com",179],["softwaresite.net",179],["sportbar.live",179],["sportkart1.xyz",179],["ssyoutube.com",179],["stardima.com",179],["stream4free.live",179],["superapk.org",179],["supermovies.org",179],["tainio-mania.online",179],["talaba.su",179],["tamilguns.org",179],["tatabrada.tv",179],["techtrendmakers.com",179],["theflixer.tv",179],["thememypc.net",179],["thetechzone.online",179],["thripy.com",179],["tonnestreamz.xyz",179],["travelplanspro.com",179],["turcasmania.com",179],["tusfiles.com",179],["tvonlinesports.com",179],["ultramovies.org",179],["uploadbank.com",179],["urdubolo.pk",179],["vidspeeds.com",179],["warezsite.net",179],["watchmovies2.com",179],["watchmoviesforfree.org",179],["watchofree.com",179],["watchsite.net",179],["watchsouthpark.tv",179],["watchtvch.club",179],["web.livecricket.is",179],["webseries.club",179],["worldcupstream.pm",179],["y2mate.com",179],["youapk.net",179],["youtube4kdownloader.com",179],["yts-subs.com",179],["haho.moe",180],["nicy-spicy.pw",181],["novelmultiverse.com",182],["mylegalporno.com",183],["embedsports.me",184],["embedstream.me",184],["jumbtv.com",184],["reliabletv.me",184],["thecut.com",187],["novelism.jp",188],["alphapolis.co.jp",189],["game3rb.com",190],["javhub.net",190],["thotvids.com",191],["berklee.edu",192],["imeteo.sk",194],["youtubemp3donusturucu.net",195],["surfsees.com",197],["vivo.st",[198,199]],["alueviesti.fi",201],["kiuruvesilehti.fi",201],["lempaala.ideapark.fi",201],["olutposti.fi",201],["urjalansanomat.fi",201],["tainhanhvn.com",203],["titantv.com",204],["3cinfo.net",205],["transportationlies.org",206],["camarchive.tv",207],["crownimg.com",207],["freejav.guru",207],["hentai2read.com",207],["icyporno.com",207],["illink.net",207],["javtiful.com",207],["m-hentai.net",207],["pornblade.com",207],["pornfelix.com",207],["pornxxxxtube.net",207],["redwap.me",207],["redwap2.com",207],["redwap3.com",207],["sunporno.com",207],["tubxporn.xxx",207],["ver-comics-porno.com",207],["ver-mangas-porno.com",207],["xanimeporn.com",207],["xxxvideohd.net",207],["zetporn.com",207],["simpcity.su",208],["cocomanga.com",209],["sampledrive.in",210],["sportnews.to",210],["soccershoes.blog",210],["mcleaks.net",211],["explorecams.com",211],["minecraft.buzz",211],["chillx.top",212],["playerx.stream",212],["m.liputan6.com",214],["stardewids.com",[214,240]],["ingles.com",215],["spanishdict.com",215],["surfline.com",216],["rureka.com",217],["bunkr.is",218],["amateur8.com",219],["freeporn8.com",219],["maturetubehere.com",219],["embedo.co",220],["corriere.it",221],["oggi.it",221],["2the.space",222],["file.gocmod.com",224],["apkcombo.com",225],["winfuture.de",226],["sponsorhunter.com",227],["novelssites.com",229],["torrentmac.net",230],["udvl.com",231],["moviezaddiction.icu",232],["apimate.net",233],["dlpanda.com",234],["socialmediagirls.com",235],["einrichtungsbeispiele.de",236],["weadown.com",237],["molotov.tv",238],["freecoursesonline.me",239],["adelsfun.com",239],["advantien.com",239],["bailbondsfinder.com",239],["bigpiecreative.com",239],["childrenslibrarylady.com",239],["classifarms.com",239],["comtasq.ca",239],["crone.es",239],["ctrmarketingsolutions.com",239],["dropnudes.com",239],["ftuapps.dev",239],["genzsport.com",239],["ghscanner.com",239],["grsprotection.com",239],["gruporafa.com.br",239],["inmatefindcalifornia.com",239],["inmatesearchidaho.com",239],["itsonsitetv.com",239],["mfmfinancials.com",239],["myproplugins.com",239],["onehack.us",239],["ovester.com",239],["paste.bin.sx",239],["privatenudes.com",239],["renoconcrete.ca",239],["richieashbeck.com",239],["sat.technology",239],["short1ink.com",239],["stpm.co.uk",239],["wegotcookies.co",239],["mathcrave.com",239],["marinetraffic.live",239],["commands.gg",240],["smgplaza.com",241],["emturbovid.com",242],["findjav.com",242],["javggvideo.xyz",242],["mmtv01.xyz",242],["stbturbo.xyz",242],["streamsilk.com",242],["freepik.com",243],["diyphotography.net",245],["bitchesgirls.com",246],["shopforex.online",247],["hiraethtranslation.com",248],["programmingeeksclub.com",249],["easymc.io",250],["diendancauduong.com",251],["androidadult.com",252],["parentcircle.com",253],["h-game18.xyz",254],["wheelofgold.com",255],["shortlinks.tech",256],["skill4ltu.eu",258],["lifestyle.bg",259],["news.bg",259],["topsport.bg",259],["webcafe.bg",259],["freepikdownloader.com",260],["freepasses.org",261],["iusedtobeaboss.com",262],["androidpolice.com",263],["cbr.com",263],["gamerant.com",263],["howtogeek.com",263],["thegamer.com",263],["blogtruyenmoi.com",264],["igay69.com",266],["graphicget.com",267],["qiwi.gg",[268,269]],["sonixgvn.net",270],["netcine2.la",271],["idnes.cz",[272,273]],["cbc.ca",274],["japscan.lol",275]]);

const entitiesMap = new Map([["kissasian",6],["ganool",6],["pirate",6],["piratebay",6],["pirateproxy",6],["proxytpb",6],["thepiratebay",6],["limetorrents",[8,14]],["king-pes",8],["depedlps",8],["komikcast",8],["idedroidsafelink",8],["links-url",8],["ak4eg",8],["streanplay",9],["steanplay",9],["liferayiseasy",[10,11]],["pahe",14],["yts",14],["tube8",14],["topeuropix",14],["moviescounter",14],["torrent9",14],["desiremovies",14],["movs4u",14],["uwatchfree",14],["hydrax",14],["4movierulz",14],["projectfreetv",14],["arabseed",14],["btdb",[14,53]],["world4ufree",14],["streamsport",14],["rojadirectatvhd",14],["userload",14],["adyou",16],["fxporn69",19],["rexporn",23],["movies07",23],["pornocomics",23],["pornomoll",27],["gsurl",28],["freecoursesonline",29],["lordpremium",29],["todovieneok",29],["novablogitalia",29],["anisubindo",29],["stream4free",29],["btvsports",29],["mimaletadepeliculas",30],["burningseries",31],["dz4soft",32],["yoututosjeff",32],["ebookmed",32],["lanjutkeun",32],["novelasesp",32],["singingdalong",32],["doujindesu",32],["xmovies8",35],["mega-dvdrip",42],["peliculas-dvdrip",42],["desbloqueador",43],["newpelis",[44,51]],["pelix",[44,51]],["allcalidad",[44,207]],["khatrimaza",44],["camwhores",45],["camwhorestv",45],["uproxy",45],["mirrorace",57],["mixdrp",62],["asiansex",64],["japanfuck",64],["japanporn",64],["teensex",64],["vintagetube",64],["xxxmovies",64],["zooqle",68],["hdfull",72],["mangamanga",74],["streameast",76],["thestreameast",76],["vev",80],["vidop",80],["1337x",82],["x1337x",82],["zone-telechargement",82],["megalink",87],["gmx",88],["mega1080p",93],["9hentai",95],["gaypornhdfree",102],["cinemakottaga",102],["privatemoviez",102],["apkmaven",102],["popcornstream",104],["upns",112],["readcomiconline",115],["azsoft",116],["nekopoi",117],["gdflix",142],["a1movies",143],["fc-lc",149],["nuvid",154],["pornktube",156],["watchseries",156],["milfnut",158],["pagalmovies",167],["7starhd",167],["jalshamoviez",167],["9xupload",167],["bdupload",167],["desiupload",167],["rdxhd1",167],["moviessources",177],["0gomovie",179],["0gomovies",179],["123moviefree",179],["1kmovies",179],["1madrasdub",179],["1primewire",179],["2embed",179],["2madrasdub",179],["2umovies",179],["4anime",179],["adblockplustape",179],["altadefinizione01",179],["atomixhq",179],["beinmatch",179],["brmovies",179],["cima4u",179],["clicknupload",179],["cmovies",179],["cricfree",179],["crichd",179],["databasegdriveplayer",179],["dood",179],["f1stream",179],["faselhd",179],["fbstream",179],["filemoon",179],["filepress",[179,244]],["filmlinks4u",179],["filmpertutti",179],["filmyzilla",179],["fmovies",179],["french-stream",179],["fzlink",179],["gofilms4u",179],["gogoanime",179],["gomoviz",179],["hdmoviefair",179],["hdmovies4u",179],["hdmovies50",179],["hdmoviesfair",179],["hh3dhay",179],["hindilinks4u",179],["hotmasti",179],["hurawatch",179],["klmanga",179],["klubsports",179],["libertestreamvf",179],["livetvon",179],["manga1000",179],["manga1001",179],["mangaraw",179],["mangarawjp",179],["mlbstream",179],["motogpstream",179],["movierulz",179],["movies123",179],["movies2watch",179],["moviesden",179],["moviezaddiction",179],["myflixer",179],["nbastream",179],["netcine",179],["nflstream",179],["nhlstream",179],["onlinewatchmoviespk",179],["pctfenix",179],["pctnew",179],["pksmovies",179],["plyjam",179],["plylive",179],["pogolinks",179],["popcorntime",179],["poscitech",179],["prmovies",179],["rugbystreams",179],["shahed4u",179],["sflix",179],["sitesunblocked",179],["solarmovies",179],["sportcast",179],["sportskart",179],["sports-stream",179],["streaming-french",179],["streamers",179],["streamingcommunity",[179,223]],["strikeout",179],["t20cup",179],["tennisstreams",179],["torrentdosfilmes",179],["toonanime",179],["tvply",179],["ufcstream",179],["uptomega",179],["uqload",179],["vudeo",179],["vidoo",179],["vipbox",179],["vipboxtv",179],["vipleague",179],["viprow",179],["yesmovies",179],["yomovies",179],["yomovies1",179],["yt2mp3s",179],["kat",179],["katbay",179],["kickass",179],["kickasshydra",179],["kickasskat",179],["kickass2",179],["kickasstorrents",179],["kat2",179],["kattracker",179],["thekat",179],["thekickass",179],["kickassz",179],["kickasstorrents2",179],["topkickass",179],["kickassgo",179],["kkickass",179],["kkat",179],["kickasst",179],["kick4ss",179],["guardaserie",185],["cine-calidad",186],["videovard",200],["gntai",207],["grantorrent",207],["mejortorrent",207],["mejortorrento",207],["mejortorrents",207],["mejortorrents1",207],["mejortorrentt",207],["shineads",210],["bg-gledai",239],["gledaitv",239],["motchill",257]]);

const exceptionsMap = new Map([["mentor.duden.de",[75]],["forum.soft98.ir",[154,228]]]);

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
                this.callFn = this.callArgs = undefined;
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
                this.callFn = this.thisArg = this.callArgs = undefined;
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
