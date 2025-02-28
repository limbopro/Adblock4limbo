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

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_addEventListenerDefuser = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["load","Object"],["load","hard_block"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["load","onload"],["","BACK"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","window.open"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["mousedown","preventDefault"],["load","nextFunction"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["","history.go"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["click","_blank"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["DOMContentLoaded","iframe"],["","/_blank/i"],["blur","stopCountdown"],["load","htmls"],["blur","focusOut"],["click","/handleClick|popup/"],["DOMContentLoaded","history.go"],["load","bypass"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","location.href"],["","popMagic"],["contextmenu","preventDefault"],["visibilitychange","remainingSeconds"],["click","Popunder"],["contextmenu"],["submit","validateForm"],["blur","counter"],["load","doTest"],["DOMContentLoaded","document.documentElement.lang.toLowerCase"],["click","maxclick"],["click","window.open"],["click","shouldOpenPopUp"],["click","adForm"],["load","/AdBlock/i"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["click","open"],["error"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["beforeunload"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["message"],["","/pop|_blank/"],["click","allclick_Public"],["DOMContentLoaded","/dyn\\.ads|loadAdsDelayed/"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["mousedown","shown_at"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["click","popMagic"],["","shouldShow"],["load","popMagic"],["DOMContentLoaded","adsSrc"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["","exoJsPop101"],["DOMContentLoaded","atob"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["click","popName"],["blur"],["DOMContentLoaded","clientHeight"],["load","error-report.com"],["click","window.focus"],["click","event.dispatch"],["load","adblock"],["","Math"],["DOMContentLoaded","popupurls"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["DOMContentLoaded","document.documentElement.lang"],["DOMContentLoaded","googlesyndication"],["load","popunder"],["DOMContentLoaded",".clientHeight"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["load","document.getElementById"],["DOMContentLoaded","daadb_get_data_fetch"],["click","popactive"],["load","adsbygoogle"],["DOMContentLoaded","location.replace"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["error","blocker"],["click","alink"],["load","[native code]"],["/adblock/i"],["load","google-analytics"],["","sessionStorage"],["click","/form\\.submit|urlToOpen/"],["DOMContentLoaded","overlays"],["load","ads"],["click","document.createElement"],["click","ShouldShow"],["click","clickCount"],["mousedown","localStorage"],["","adsense"],["click","splashPage"],["load","detect-modal"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["load",".call(this"],["/touchmove|wheel/","preventDefault()"],["load","showcfkModal"],["click","attached","elements","div[class=\"share-embed-container\"]"],["click","fp-screen"],["DOMContentLoaded","leaderboardAd"],["DOMContentLoaded","fetch"],["click","openPopupForChapter"],["click","doThePop"],["DOMContentLoaded","blockAdBlock"],["click","openDirectLinkAd"],["load","detect"],["DOMContentLoaded","history.pushState"],["DOMContentLoaded","showPopup"],["click","PopUnder"],["load","puHref"],["click","Ads"],["mouseup","open"],["DOMContentLoaded","adBlockNotice"],["DOMContentLoaded","_0x"],["click","pingUrl"],["mousedown","scoreUrl"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["load","img'"],["",")](this,..."],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",1],["timesofindia.indiatimes.com",2],["drrtyr.mx",2],["pinoyalbums.com",2],["multiplayer.it",2],["mediafire.com",[3,4]],["pinsystem.co.uk",5],["ancensored.com",5],["mp3fiber.com",[5,25]],["xrivonet.info",5],["kingofdown.com",6],["radiotormentamx.com",6],["quelleestladifference.fr",6],["otakuworldsite.blogspot.com",6],["ad-itech.blogspot.com",6],["unlockapk.com",6],["mobdi3ips.com",6],["socks24.org",6],["interviewgig.com",6],["javaguides.net",6],["almohtarif-tech.net",6],["forum.release-apk.com",6],["devoloperxda.blogspot.com",6],["zwergenstadt.com",6],["primedeportes.es",6],["upxin.net",6],["ciudadblogger.com",6],["ke-1.com",6],["secretsdeepweb.blogspot.com",6],["bit-shares.com",6],["itdmusics.com",6],["aspdotnet-suresh.com",6],["tudo-para-android.com",6],["urdulibrarypk.blogspot.com",6],["zerotopay.com",6],["akw.to",6],["mawsueaa.com",6],["hesgoal-live.io",6],["king-shoot.io",6],["9goals.live",6],["bibme.org",8],["citationmachine.net",8],["easybib.com",9],["vermangasporno.com",10],["imgtorrnt.in",10],["picbaron.com",[10,117]],["letmejerk.com",10],["letmejerk2.com",10],["letmejerk3.com",10],["letmejerk4.com",10],["letmejerk5.com",10],["letmejerk6.com",10],["letmejerk7.com",10],["dlapk4all.com",10],["kropic.com",10],["kvador.com",10],["pdfindir.net",10],["brstej.com",10],["topwwnews.com",10],["xsanime.com",10],["vidlo.us",10],["put-locker.com",10],["youx.xxx",10],["animeindo.asia",10],["masahub.net",10],["adclickersbot.com",10],["badtaste.it",11],["shemalez.com",13],["tubepornclassic.com",13],["gotporn.com",14],["freepornrocks.com",14],["tvhai.org",14],["realgfporn.com",[15,16]],["thisvid.com",16],["xvideos-downloader.net",16],["imgspice.com",17],["vikiporn.com",18],["tnaflix.com",18],["hentai2w.com",[18,179]],["yourlust.com",18],["hotpornfile.org",18],["watchfreexxx.net",18],["vintageporntubes.com",18],["angelgals.com",18],["babesexy.com",18],["porndaa.com",18],["ganstamovies.com",18],["youngleak.com",18],["porndollz.com",18],["xnxxvideo.pro",18],["xvideosxporn.com",18],["filmpornofrancais.fr",18],["pictoa.com",[18,41]],["adultasianporn.com",18],["nsfwmonster.com",18],["girlsofdesire.org",18],["gaytail.com",18],["fetish-bb.com",18],["rumporn.com",18],["soyoungteens.com",18],["zubby.com",18],["lesbian8.com",18],["gayforfans.com",18],["reifporn.de",18],["javtsunami.com",18],["18tube.sex",18],["xxxextreme.org",18],["amateurs-fuck.com",18],["sex-amateur-clips.com",18],["hentaiworld.tv",18],["dads-banging-teens.com",18],["home-xxx-videos.com",18],["mature-chicks.com",18],["teens-fucking-matures.com",18],["hqbang.com",18],["darknessporn.com",18],["familyporner.com",18],["freepublicporn.com",18],["pisshamster.com",18],["punishworld.com",18],["xanimu.com",18],["tubator.com",18],["pornhd.com",19],["cnnamador.com",[19,29]],["cle0desktop.blogspot.com",19],["turkanime.co",19],["camclips.tv",[19,42]],["blackpornhq.com",19],["xsexpics.com",19],["ulsex.net",19],["wannafreeporn.com",19],["ytube2dl.com",19],["multiup.us",19],["protege-torrent.com",19],["pussyspace.com",[20,21]],["pussyspace.net",[20,21]],["empflix.com",22],["cpmlink.net",23],["bdsmstreak.com",23],["cutpaid.com",23],["pornforrelax.com",23],["fatwhitebutt.com",23],["short.pe",24],["totaldebrid.org",25],["neko-miku.com",25],["elsfile.org",25],["venstrike.jimdofree.com",25],["schrauben-normen.de",25],["avengerinator.blogspot.com",25],["link-to.net",25],["hanimesubth.com",25],["gsmturkey.net",25],["adshrink.it",25],["presentation-ppt.com",25],["mangacanblog.com",25],["pekalongan-cits.blogspot.com",25],["4tymode.win",25],["linkvertise.com",25],["reifenrechner.at",25],["tire-size-calculator.info",25],["linuxsecurity.com",25],["itsguider.com",25],["cotravinh.blogspot.com",25],["itudong.com",25],["shortx.net",25],["lecturel.com",25],["bakai.org",25],["nar.k-ba.net",25],["tiroalpalo.org",25],["eurotruck2.com.br",25],["tiroalpaloes.com",25],["tiroalpaloes.net",25],["flixsix.com",25],["bs.to",27],["efukt.com",27],["generacionretro.net",28],["nuevos-mu.ucoz.com",28],["micloudfiles.com",28],["mimaletamusical.blogspot.com",28],["visionias.net",28],["b3infoarena.in",28],["lurdchinexgist.blogspot.com",28],["thefreedommatrix.blogspot.com",28],["hentai-vl.blogspot.com",28],["projetomotog.blogspot.com",28],["ktmx.pro",28],["lirik3satu.blogspot.com",28],["marketmovers.it",28],["pharmaguideline.com",28],["safemaru.blogspot.com",28],["mixloads.com",28],["mangaromance.eu",28],["interssh.com",28],["freesoftpdfdownload.blogspot.com",28],["cirokun.blogspot.com",28],["myadslink.com",28],["blackavelic.com",28],["server.satunivers.tv",28],["eg-akw.com",28],["xn--mgba7fjn.cc",28],["flashingjungle.com",29],["ma-x.org",30],["lavozdegalicia.es",30],["ddwloclawek.pl",30],["ki24.info",30],["xmovies08.org",32],["globaldjmix.com",33],["hblinks.pro",34],["hubcdn.vip",34],["90fpsconfig.in",34],["katdrive.link",34],["kmhd.net",34],["bollydrive.rest",34],["360news4u.net",34],["hypershort.com",[34,129]],["zazzybabes.com",35],["haaretz.co.il",36],["haaretz.com",36],["slate.com",37],["megalinks.info",38],["megapastes.com",38],["mega-mkv.com",[38,39]],["mkv-pastes.com",38],["zpaste.net",38],["zlpaste.net",38],["9xlinks.site",38],["zona-leros.net",39],["cine.to",[41,185]],["kissasia.cc",41],["digjav.com",42],["videoszoofiliahd.com",43],["xxxtubezoo.com",44],["zooredtube.com",44],["uii.io",45],["megacams.me",46],["rlslog.net",46],["porndoe.com",47],["acienciasgalilei.com",49],["playrust.io",50],["payskip.org",51],["short-url.link",52],["tubedupe.com",53],["mcrypto.club",54],["fatgirlskinny.net",55],["polska-ie.com",55],["windowsmatters.com",55],["canaltdt.es",56],["masbrooo.com",56],["2ndrun.tv",56],["oncehelp.com",57],["curto.win",57],["smallseotools.com",58],["macwelt.de",60],["pcwelt.de",60],["capital.de",60],["geo.de",60],["allmomsex.com",61],["allnewindianporn.com",61],["analxxxvideo.com",61],["animalextremesex.com",61],["anime3d.xyz",61],["animefuckmovies.com",61],["animepornfilm.com",61],["animesexbar.com",61],["animesexclip.com",61],["animexxxsex.com",61],["animexxxfilms.com",61],["anysex.club",61],["apetube.asia",61],["asianfuckmovies.com",61],["asianfucktube.com",61],["asianporn.sexy",61],["asiansexcilps.com",61],["beeg.fund",61],["beegvideoz.com",61],["bestasiansex.pro",61],["bravotube.asia",61],["brutalanimalsfuck.com",61],["candyteenporn.com",61],["daddyfuckmovies.com",61],["desifuckonline.com",61],["exclusiveasianporn.com",61],["exteenporn.com",61],["fantasticporn.net",61],["fantasticyoungporn.com",61],["fineasiansex.com",61],["firstasianpussy.com",61],["freeindiansextube.com",61],["freepornasians.com",61],["freerealvideo.com",61],["fuck-beeg.com",61],["fuck-xnxx.com",61],["fuckasian.pro",61],["fuckfuq.com",61],["fuckundies.com",61],["gojapaneseporn.com",61],["golderotica.com",61],["goodyoungsex.com",61],["goyoungporn.com",61],["hardxxxmoms.com",61],["hdvintagetube.com",61],["hentaiporn.me",61],["hentaisexfilms.com",61],["hentaisexuality.com",61],["hot-teens-movies.mobi",61],["hotanimepornvideos.com",61],["hotanimevideos.com",61],["hotasianpussysex.com",61],["hotjapaneseshows.com",61],["hotmaturetube.com",61],["hotmilfs.pro",61],["hotorientalporn.com",61],["hotpornyoung.com",61],["hotxxxjapanese.com",61],["hotxxxpussy.com",61],["indiafree.net",61],["indianpornvideo.online",61],["japanpornclip.com",61],["japanesetube.video",61],["japansex.me",61],["japanesexxxporn.com",61],["japansporno.com",61],["japanxxx.asia",61],["japanxxxworld.com",61],["keezmovies.surf",61],["lingeriefuckvideo.com",61],["liveanimalporn.zooo.club",61],["madhentaitube.com",61],["megahentaitube.com",61],["megajapanesesex.com",61],["megajapantube.com",61],["milfxxxpussy.com",61],["momsextube.pro",61],["momxxxass.com",61],["monkeyanimalporn.com",61],["moviexxx.mobi",61],["newanimeporn.com",61],["newjapanesexxx.com",61],["nicematureporn.com",61],["nudeplayboygirls.com",61],["openxxxporn.com",61],["originalindianporn.com",61],["originalteentube.com",61],["pig-fuck.com",61],["plainasianporn.com",61],["popularasianxxx.com",61],["pornanimetube.com",61],["pornasians.pro",61],["pornhat.asia",61],["pornjapanesesex.com",61],["pornomovies.asia",61],["pornvintage.tv",61],["primeanimesex.com",61],["realjapansex.com",61],["realmomsex.com",61],["redsexhub.com",61],["retroporn.world",61],["retrosexfilms.com",61],["sex-free-movies.com",61],["sexanimesex.com",61],["sexanimetube.com",61],["sexjapantube.com",61],["sexmomvideos.com",61],["sexteenxxxtube.com",61],["sexxxanimal.com",61],["sexyoungtube.com",61],["sexyvintageporn.com",61],["sopornmovies.com",61],["spicyvintageporn.com",61],["sunporno.club",61],["tabooanime.club",61],["teenextrem.com",61],["teenfucksex.com",61],["teenhost.net",61],["teensexass.com",61],["tnaflix.asia",61],["totalfuckmovies.com",61],["totalmaturefuck.com",61],["txxx.asia",61],["voyeurpornsex.com",61],["warmteensex.com",61],["wetasiancreampie.com",61],["wildhentaitube.com",61],["wowyoungsex.com",61],["xhamster-art.com",61],["xmovie.pro",61],["xnudevideos.com",61],["xnxxjapon.com",61],["xpics.me",61],["xvide.me",61],["xxxanimefuck.com",61],["xxxanimevideos.com",61],["xxxanimemovies.com",61],["xxxhentaimovies.com",61],["xxxhothub.com",61],["xxxjapaneseporntube.com",61],["xxxlargeporn.com",61],["xxxmomz.com",61],["xxxpornmilf.com",61],["xxxpussyclips.com",61],["xxxpussysextube.com",61],["xxxretrofuck.com",61],["xxxsex.pro",61],["xxxsexyjapanese.com",61],["xxxteenyporn.com",61],["xxxvideo.asia",61],["xxxvideos.ink",61],["xxxyoungtv.com",61],["youjizzz.club",61],["youngpussyfuck.com",61],["bayimg.com",62],["celeb.gate.cc",63],["kinoger.re",64],["desi.upn.bio",64],["masterplayer.xyz",66],["pussy-hub.com",66],["porndex.com",67],["compucalitv.com",68],["diariodenavarra.es",70],["pennlive.com",73],["beautypageants.indiatimes.com",74],["01fmovies.com",75],["lnk2.cc",77],["fullhdxxx.com",78],["luscious.net",[78,117]],["classicpornbest.com",78],["1youngteenporn.com",78],["www-daftarharga.blogspot.com",[78,169]],["miraculous.to",[78,175]],["vtube.to",78],["xstory-fr.com",78],["gosexpod.com",79],["otakukan.com",80],["xcafe.com",81],["pornfd.com",81],["venusarchives.com",81],["imagehaha.com",82],["imagenpic.com",82],["imageshimage.com",82],["imagetwist.com",82],["k1nk.co",83],["watchasians.cc",83],["lulustream.com",83],["luluvdo.com",83],["web.de",84],["news18.com",85],["thelanb.com",86],["dropmms.com",86],["softwaredescargas.com",87],["cracking-dz.com",88],["gazzetta.it",90],["port.hu",92],["dziennikbaltycki.pl",93],["dzienniklodzki.pl",93],["dziennikpolski24.pl",93],["dziennikzachodni.pl",93],["echodnia.eu",93],["expressbydgoski.pl",93],["expressilustrowany.pl",93],["gazetakrakowska.pl",93],["gazetalubuska.pl",93],["gazetawroclawska.pl",93],["gk24.pl",93],["gloswielkopolski.pl",93],["gol24.pl",93],["gp24.pl",93],["gra.pl",93],["gs24.pl",93],["kurierlubelski.pl",93],["motofakty.pl",93],["naszemiasto.pl",93],["nowiny24.pl",93],["nowosci.com.pl",93],["nto.pl",93],["polskatimes.pl",93],["pomorska.pl",93],["poranny.pl",93],["sportowy24.pl",93],["strefaagro.pl",93],["strefabiznesu.pl",93],["stronakobiet.pl",93],["telemagazyn.pl",93],["to.com.pl",93],["wspolczesna.pl",93],["course9x.com",93],["courseclub.me",93],["azrom.net",93],["alttyab.net",93],["esopress.com",93],["nesiaku.my.id",93],["onemanhua.com",94],["freeindianporn.mobi",94],["dr-farfar.com",95],["boyfriendtv.com",96],["brandstofprijzen.info",97],["netfuck.net",98],["blog24.me",[98,110]],["kisahdunia.com",98],["javsex.to",98],["nulljungle.com",98],["oyuncusoruyor.com",98],["pbarecap.ph",98],["sourds.net",98],["teknobalta.com",98],["tvinternetowa.info",98],["sqlserveregitimleri.com",98],["tutcourse.com",98],["readytechflip.com",98],["warddogs.com",98],["dvdgayporn.com",98],["iimanga.com",98],["tinhocdongthap.com",98],["tremamnon.com",98],["423down.com",98],["brizzynovel.com",98],["jugomobile.com",98],["freecodezilla.net",98],["iconmonstr.com",98],["gay-tubes.cc",98],["rbxscripts.net",98],["comentariodetexto.com",98],["wordpredia.com",98],["allfaucet.xyz",[98,110]],["titbytz.tk",98],["replica-watch.info",98],["alludemycourses.com",98],["kayifamilytv.com",98],["interfans.org",98],["iir.ai",99],["gameofporn.com",101],["qpython.club",102],["antifake-funko.fr",102],["dktechnicalmate.com",102],["recipahi.com",102],["e9china.net",103],["ontools.net",103],["marketbeat.com",104],["hentaipornpics.net",105],["apps2app.com",106],["upshrink.com",107],["fitdynamos.com",109],["ohionowcast.info",110],["wiour.com",110],["bitzite.com",[110,115,116]],["appsbull.com",110],["diudemy.com",110],["maqal360.com",[110,118,119]],["bitcotasks.com",110],["videolyrics.in",110],["manofadan.com",110],["cempakajaya.com",110],["tagecoin.com",110],["naijafav.top",110],["ourcoincash.xyz",110],["claimcoins.site",110],["cryptosh.pro",110],["eftacrypto.com",110],["fescrypto.com",110],["earnhub.net",110],["kiddyshort.com",110],["tronxminer.com",110],["neverdims.com",110],["homeairquality.org",111],["cety.app",[112,113]],["exego.app",112],["cutlink.net",112],["cutsy.net",112],["cutyurls.com",112],["cutty.app",112],["cutnet.net",112],["jixo.online",112],["cuty.me",113],["upfiles.app",[113,128]],["upfiles-urls.com",[113,128]],["gamerxyt.com",113],["adcrypto.net",114],["admediaflex.com",114],["aduzz.com",114],["bitcrypto.info",114],["cdrab.com",114],["datacheap.io",114],["hbz.us",114],["savego.org",114],["owsafe.com",114],["sportweb.info",114],["gfx-station.com",115],["buzzheavier.com",116],["flashbang.sh",116],["trashbytes.net",116],["aiimgvlog.fun",117],["6indianporn.com",117],["amateurebonypics.com",117],["amateuryoungpics.com",117],["amigosporn.top",117],["cinemabg.net",117],["coomer.su",117],["desimmshd.com",117],["frauporno.com",117],["givemeaporn.com",117],["hitomi.la",117],["jav-asia.top",117],["javf.net",117],["javfull.net",117],["javideo.net",117],["kemono.su",117],["kr18plus.com",117],["pilibook.com",117],["pornborne.com",117],["porngrey.com",117],["qqxnxx.com",117],["sexvideos.host",117],["submilf.com",117],["subtaboo.com",117],["tktube.com",117],["xfrenchies.com",117],["soft98.ir",[118,138]],["moderngyan.com",120],["sattakingcharts.in",120],["freshbhojpuri.com",120],["bgmi32bitapk.in",120],["bankshiksha.in",120],["earn.mpscstudyhub.com",120],["earn.quotesopia.com",120],["money.quotesopia.com",120],["best-mobilegames.com",120],["learn.moderngyan.com",120],["bharatsarkarijobalert.com",120],["quotesopia.com",120],["creditsgoal.com",120],["coingraph.us",121],["momo-net.com",121],["maxgaming.fi",121],["cybercityhelp.in",122],["travel.vebma.com",123],["cloud.majalahhewan.com",123],["crm.cekresi.me",123],["ai.tempatwisata.pro",123],["pinloker.com",123],["sekilastekno.com",123],["mrproblogger.com",124],["themezon.net",124],["dagensnytt.com",124],["azmath.info",125],["downfile.site",125],["downphanmem.com",125],["expertvn.com",125],["memangbau.com",125],["trangchu.news",125],["aztravels.net",125],["ielts-isa.edu.vn",125],["techedubyte.com",[125,234]],["jpopsingles.eu",125],["aipebel.com",125],["link.paid4link.com",126],["driveup.sbs",127],["apimate.net",127],["dynamicminister.net",127],["gofirmware.com",127],["flight-report.com",130],["vulture.com",131],["megaplayer.bokracdn.run",132],["hentaistream.com",133],["siteunblocked.info",134],["larvelfaucet.com",135],["feyorra.top",135],["claimtrx.com",135],["moviesyug.net",136],["w4files.ws",136],["parispi.net",137],["hentaicloud.com",138],["justin.mp3quack.lol",138],["tio.ch",139],["lavanguardia.com",139],["tu.no",139],["paperzonevn.com",140],["dailyvideoreports.net",141],["lewd.ninja",142],["systemnews24.com",143],["incestvidz.com",144],["niusdiario.es",145],["playporngames.com",146],["javx.cc",146],["movi.pk",[147,150]],["cutesexyteengirls.com",149],["0dramacool.net",150],["185.53.88.104",150],["185.53.88.204",150],["185.53.88.15",150],["123movies4k.net",150],["1rowsports.com",150],["4share-mp3.net",150],["9animetv.to",150],["720pstream.me",150],["aagmaal.com",150],["abysscdn.com",150],["ajkalerbarta.com",150],["androidapks.biz",150],["androidsite.net",150],["animeonlinefree.org",150],["animesite.net",150],["animespank.com",150],["aniworld.to",150],["apkmody.io",150],["appsfree4u.com",150],["audioz.download",150],["awafim.tv",150],["bdnewszh.com",150],["beastlyprints.com",150],["bengalisite.com",150],["bestfullmoviesinhd.org",150],["betteranime.net",150],["blacktiesports.live",150],["buffsports.stream",150],["ch-play.com",150],["clickforhire.com",150],["cloudy.pk",150],["computercrack.com",150],["coolcast2.com",150],["crackedsoftware.biz",150],["crackfree.org",150],["cracksite.info",150],["cryptoblog24.info",150],["cuatrolatastv.blogspot.com",150],["cydiasources.net",150],["decmelfot.xyz",150],["dirproxy.com",150],["dopebox.to",150],["downloadapk.info",150],["downloadapps.info",150],["downloadgames.info",150],["downloadmusic.info",150],["downloadsite.org",150],["downloadwella.com",150],["ebooksite.org",150],["educationtips213.blogspot.com",150],["egyup.live",150],["elgoles.pro",150],["embed.meomeo.pw",150],["embed.scdn.to",150],["emulatorsite.com",150],["essaysharkwriting.club",150],["exploreera.net",150],["extrafreetv.com",150],["fakedetail.com",150],["fclecteur.com",150],["files.im",150],["flexyhit.com",150],["fmoviefree.net",150],["fmovies24.com",150],["freeflix.info",150],["freemoviesu4.com",150],["freeplayervideo.com",150],["freesoccer.net",150],["fseries.org",150],["gamefast.org",150],["gamesite.info",150],["gettapeads.com",150],["gmanga.me",150],["gocast123.me",150],["gogohd.net",150],["gogoplay5.com",150],["gooplay.net",150],["gostreamon.net",150],["happy2hub.org",150],["harimanga.com",150],["healthnewsreel.com",150],["hexupload.net",150],["hinatasoul.com",150],["hindisite.net",150],["holymanga.net",150],["hxfile.co",150],["isosite.org",150],["iv-soft.com",150],["januflix.expert",150],["jewelry.com.my",150],["johnwardflighttraining.com",150],["kabarportal.com",150],["kstorymedia.com",150],["la123movies.org",150],["lespassionsdechinouk.com",150],["lilymanga.net",150],["linksdegrupos.com.br",150],["linkz.wiki",150],["livestreamtv.pk",150],["macsite.info",150],["mangasite.org",150],["manhuascan.com",150],["megamovies.org",150],["membed.net",150],["moddroid.com",150],["moviefree2.com",150],["movies-watch.com.pk",150],["moviesite.app",150],["moviesonline.fm",150],["moviesx.org",150],["msmoviesbd.com",150],["musicsite.biz",150],["myfernweh.com",150],["myviid.com",150],["nazarickol.com",150],["noob4cast.com",150],["nsw2u.com",[150,276]],["oko.sh",150],["orangeink.pk",150],["pahaplayers.click",150],["patchsite.net",150],["pdfsite.net",150],["play1002.com",150],["player-cdn.com",150],["productkeysite.com",150],["projectfreetv.one",150],["romsite.org",150],["rufiguta.com",150],["rytmp3.io",150],["send.cm",150],["seriesite.net",150],["seriezloaded.com.ng",150],["serijehaha.com",150],["shrugemojis.com",150],["siteapk.net",150],["siteflix.org",150],["sitegames.net",150],["sitekeys.net",150],["sitepdf.com",150],["sitetorrent.com",150],["softwaresite.net",150],["sportbar.live",150],["ssyoutube.com",150],["stardima.com",150],["stream4free.live",150],["superapk.org",150],["supermovies.org",150],["tainio-mania.online",150],["talaba.su",150],["tamilguns.org",150],["tatabrada.tv",150],["techtrendmakers.com",150],["thememypc.net",150],["thripy.com",150],["travelplanspro.com",150],["turcasmania.com",150],["tusfiles.com",150],["tvonlinesports.com",150],["ultramovies.org",150],["uploadbank.com",150],["urdubolo.pk",150],["vidspeeds.com",150],["warezsite.net",150],["watchmovies2.com",150],["watchmoviesforfree.org",150],["watchofree.com",150],["watchsite.net",150],["watchsouthpark.tv",150],["watchtvch.club",150],["web.livecricket.is",150],["webseries.club",150],["worldcupstream.pm",150],["y2mate.com",150],["youapk.net",150],["youtube4kdownloader.com",150],["yts-subs.com",150],["haho.moe",151],["nicy-spicy.pw",152],["novelmultiverse.com",153],["mylegalporno.com",154],["embedsports.me",155],["embedstream.me",155],["jumbtv.com",155],["reliabletv.me",155],["xnxx.com",158],["thecut.com",159],["novelism.jp",160],["alphapolis.co.jp",161],["game3rb.com",162],["javhub.net",162],["thotvids.com",163],["berklee.edu",164],["rawkuma.com",[165,166]],["moviesjoyhd.to",166],["cineb.rs",166],["imeteo.sk",167],["youtubemp3donusturucu.net",168],["surfsees.com",170],["vivo.st",[171,172]],["alueviesti.fi",174],["kiuruvesilehti.fi",174],["lempaala.ideapark.fi",174],["olutposti.fi",174],["urjalansanomat.fi",174],["tainhanhvn.com",176],["titantv.com",177],["3cinfo.net",178],["camarchive.tv",179],["crownimg.com",179],["freejav.guru",179],["hentai2read.com",179],["icyporno.com",179],["illink.net",179],["javtiful.com",179],["m-hentai.net",179],["pornblade.com",179],["pornfelix.com",179],["pornxxxxtube.net",179],["redwap.me",179],["redwap2.com",179],["redwap3.com",179],["sunporno.com",179],["tubxporn.xxx",179],["ver-comics-porno.com",179],["ver-mangas-porno.com",179],["xanimeporn.com",179],["xxxvideohd.net",179],["zetporn.com",179],["simpcity.su",180],["cocomanga.com",181],["animelatinohd.com",181],["sampledrive.in",182],["sportnews.to",182],["soccershoes.blog",182],["mcleaks.net",183],["explorecams.com",183],["minecraft.buzz",183],["chillx.top",184],["playerx.stream",184],["m.liputan6.com",186],["stardewids.com",[186,211]],["ingles.com",187],["spanishdict.com",187],["surfline.com",188],["rureka.com",189],["bunkr.is",190],["freepreset.net",191],["amateur8.com",192],["freeporn8.com",192],["maturetubehere.com",192],["embedo.co",193],["corriere.it",194],["oggi.it",194],["2the.space",195],["file.gocmod.com",197],["apkcombo.com",198],["winfuture.de",199],["sponsorhunter.com",200],["novelssites.com",201],["haxina.com",202],["scimagojr.com",202],["torrentmac.net",203],["udvl.com",204],["dlpanda.com",205],["socialmediagirls.com",206],["einrichtungsbeispiele.de",207],["weadown.com",208],["molotov.tv",209],["freecoursesonline.me",210],["adelsfun.com",210],["advantien.com",210],["bailbondsfinder.com",210],["bigpiecreative.com",210],["childrenslibrarylady.com",210],["classifarms.com",210],["comtasq.ca",210],["crone.es",210],["ctrmarketingsolutions.com",210],["dropnudes.com",210],["ftuapps.dev",210],["genzsport.com",210],["ghscanner.com",210],["grsprotection.com",210],["gruporafa.com.br",210],["inmatefindcalifornia.com",210],["inmatesearchidaho.com",210],["itsonsitetv.com",210],["mfmfinancials.com",210],["myproplugins.com",210],["nurulislam.org",210],["onehack.us",210],["ovester.com",210],["paste.bin.sx",210],["privatenudes.com",210],["renoconcrete.ca",210],["richieashbeck.com",210],["sat.technology",210],["short1ink.com",210],["stpm.co.uk",210],["wegotcookies.co",210],["mathcrave.com",210],["marinetraffic.live",210],["commands.gg",211],["smgplaza.com",212],["emturbovid.com",213],["findjav.com",213],["javggvideo.xyz",213],["mmtv01.xyz",213],["stbturbo.xyz",213],["streamsilk.com",213],["freepik.com",214],["diyphotography.net",216],["bitchesgirls.com",217],["hiraethtranslation.com",218],["programmingeeksclub.com",219],["diendancauduong.com",220],["androidadult.com",221],["parentcircle.com",222],["h-game18.xyz",223],["wheelofgold.com",224],["davescomputertips.com",225],["historyofroyalwomen.com",225],["skill4ltu.eu",227],["lifestyle.bg",228],["news.bg",228],["topsport.bg",228],["webcafe.bg",228],["freepikdownloader.com",229],["freepasses.org",230],["iusedtobeaboss.com",231],["androidpolice.com",232],["cbr.com",232],["gamerant.com",232],["howtogeek.com",232],["thegamer.com",232],["blogtruyenmoi.com",233],["repretel.com",235],["tubereader.me",235],["graphicget.com",236],["qiwi.gg",[237,238]],["sonixgvn.net",239],["alliptvlinks.com",240],["smashyplayer.top",241],["xvideos.com",242],["xvideos2.com",242],["homemoviestube.com",243],["sexseeimage.com",243],["ukchat.co.uk",246],["hivelr.com",247],["skidrowcodex.net",248],["takimag.com",249],["digi.no",250],["th.gl",251],["twi-fans.com",252],["learn-cpp.org",253],["terashare.co",254],["pornwex.tv",255],["smithsonianmag.com",256],["homesports.net",257],["realmoasis.com",258],["javfc2.xyz",259],["gobankingrates.com",260],["hiddenleaf.to",261],["ronorp.net",262],["videovak.com",265],["a-lohas.jp",266],["akirabox.com",267],["purplex.app",268],["maggotdrowning.com",269],["bilinovel.com",270],["idnes.cz",[271,272]],["cbc.ca",273],["japscan.lol",274],["slashdot.org",275]]);

const entitiesMap = new Map([["kissasian",5],["ganool",5],["pirate",5],["piratebay",5],["pirateproxy",5],["proxytpb",5],["thepiratebay",5],["limetorrents",[6,10]],["king-pes",6],["depedlps",6],["komikcast",6],["idedroidsafelink",6],["links-url",6],["ak4eg",6],["streanplay",7],["steanplay",7],["pahe",10],["yts",10],["tube8",10],["topeuropix",10],["moviescounter",10],["torrent9",10],["desiremovies",10],["movs4u",10],["uwatchfree",10],["hydrax",10],["4movierulz",10],["projectfreetv",10],["arabseed",10],["btdb",[10,50]],["world4ufree",10],["streamsport",10],["rojadirectatvhd",10],["userload",10],["adyou",12],["fxporn69",15],["rexporn",19],["movies07",19],["pornocomics",19],["pornomoll",23],["gsurl",24],["freecoursesonline",25],["lordpremium",25],["todovieneok",25],["novablogitalia",25],["anisubindo",25],["btvsports",25],["stream4free",25],["mimaletadepeliculas",26],["burningseries",27],["dz4soft",28],["yoututosjeff",28],["ebookmed",28],["lanjutkeun",28],["novelasesp",28],["singingdalong",28],["doujindesu",28],["xmovies8",31],["desiupload",[34,136]],["hubdrive",34],["mega-dvdrip",39],["peliculas-dvdrip",39],["desbloqueador",40],["newpelis",[41,48]],["pelix",[41,48]],["allcalidad",[41,179]],["khatrimaza",41],["camwhores",42],["camwhorestv",42],["uproxy",42],["mirrorace",54],["mixdrp",59],["asiansex",61],["japanfuck",61],["japanporn",61],["teensex",61],["vintagetube",61],["xxxmovies",61],["zooqle",65],["hdfull",69],["mangamanga",71],["streameast",72],["thestreameast",72],["vev",76],["vidop",76],["zone-telechargement",78],["1337x",78],["x1337x",78],["megalink",83],["gmx",84],["mega1080p",89],["anitube",89],["9hentai",91],["gaypornhdfree",98],["cinemakottaga",98],["privatemoviez",98],["apkmaven",98],["popcornstream",100],["fc-lc",108],["pornktube",117],["watchseries",117],["milfnut",121],["azsoft",125],["pagalmovies",136],["7starhd",136],["jalshamoviez",136],["9xupload",136],["bdupload",136],["rdxhd1",136],["nuvid",138],["bollydrive",138],["moviessources",148],["0gomovie",150],["0gomovies",150],["123moviefree",150],["1kmovies",150],["1madrasdub",150],["1primewire",150],["2embed",150],["2madrasdub",150],["2umovies",150],["4anime",150],["adblockplustape",150],["altadefinizione01",150],["atomixhq",150],["beinmatch",150],["brmovies",150],["cima4u",150],["clicknupload",150],["cmovies",150],["cricfree",150],["crichd",150],["dood",150],["f1stream",150],["faselhd",150],["fbstream",150],["filemoon",150],["filepress",[150,215]],["filmlinks4u",150],["filmpertutti",150],["filmyzilla",150],["fmovies",150],["french-stream",150],["fzlink",150],["gofilms4u",150],["gogoanime",150],["gomoviz",150],["hdmoviefair",150],["hdmovies4u",150],["hdmovies50",150],["hdmoviesfair",150],["hh3dhay",150],["hindilinks4u",150],["hotmasti",150],["hurawatch",150],["klmanga",150],["klubsports",150],["libertestreamvf",150],["livetvon",150],["manga1000",150],["manga1001",150],["mangaraw",150],["mangarawjp",150],["mlbstream",150],["motogpstream",150],["movierulz",150],["movies123",150],["movies2watch",150],["moviesden",150],["moviezaddiction",150],["nbastream",150],["netcine",150],["nflstream",150],["nhlstream",150],["onlinewatchmoviespk",150],["pctfenix",150],["pctnew",150],["pksmovies",150],["plyjam",150],["plylive",150],["pogolinks",150],["popcorntime",150],["poscitech",150],["rugbystreams",150],["shahed4u",150],["sflix",150],["sitesunblocked",150],["solarmovies",150],["sportcast",150],["sportskart",150],["sports-stream",150],["streaming-french",150],["streamers",150],["streamingcommunity",[150,196]],["t20cup",150],["tennisstreams",150],["torrentdosfilmes",150],["toonanime",150],["tvply",150],["ufcstream",150],["uptomega",150],["uqload",150],["vudeo",150],["vidoo",150],["vipbox",150],["vipboxtv",150],["vipleague",150],["viprow",150],["yesmovies",150],["yomovies",150],["yomovies1",150],["yt2mp3s",150],["kat",150],["katbay",150],["kickass",150],["kickasshydra",150],["kickasskat",150],["kickass2",150],["kickasstorrents",150],["kat2",150],["kattracker",150],["thekat",150],["thekickass",150],["kickassz",150],["kickasstorrents2",150],["topkickass",150],["kickassgo",150],["kkickass",150],["kkat",150],["kickasst",150],["kick4ss",150],["guardaserie",156],["cine-calidad",157],["xvideos",158],["videovard",173],["gntai",179],["grantorrent",179],["mejortorrent",179],["mejortorrento",179],["mejortorrents",179],["mejortorrents1",179],["mejortorrentt",179],["shineads",182],["bg-gledai",210],["gledaitv",210],["motchill",226],["upns",241],["readcomiconline",244],["nekopoi",245],["gdflix",263],["a1movies",264]]);

const exceptionsMap = new Map([["forum.soft98.ir",[118,138]]]);

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
            } catch {
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
} catch {
}
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
    catch { }
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
