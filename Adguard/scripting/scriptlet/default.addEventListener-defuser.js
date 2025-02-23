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

const argsList = [["load","Object"],["load","hard_block"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["load","onload"],["","BACK"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","window.open"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["mousedown","preventDefault"],["load","nextFunction"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["","history.go"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["click","_blank"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["DOMContentLoaded","iframe"],["","/_blank/i"],["blur","stopCountdown"],["load","htmls"],["blur","focusOut"],["click","/handleClick|popup/"],["DOMContentLoaded","history.go"],["load","bypass"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","location.href"],["","popMagic"],["contextmenu","preventDefault"],["visibilitychange","remainingSeconds"],["click","Popunder"],["contextmenu"],["submit","validateForm"],["blur","counter"],["load","doTest"],["DOMContentLoaded","document.documentElement.lang.toLowerCase"],["click","maxclick"],["click","window.open"],["click","shouldOpenPopUp"],["load","/AdBlock/i"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["click","open"],["error"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["beforeunload"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["message"],["","/pop|_blank/"],["click","allclick_Public"],["DOMContentLoaded","/dyn\\.ads|loadAdsDelayed/"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["mousedown","shown_at"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["click","popMagic"],["","shouldShow"],["load","popMagic"],["DOMContentLoaded","adsSrc"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["","exoJsPop101"],["DOMContentLoaded","atob"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["click","popName"],["blur"],["DOMContentLoaded","clientHeight"],["load","error-report.com"],["click","window.focus"],["click","event.dispatch"],["load","adblock"],["","Math"],["DOMContentLoaded","popupurls"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["DOMContentLoaded","document.documentElement.lang"],["DOMContentLoaded","googlesyndication"],["load","popunder"],["DOMContentLoaded",".clientHeight"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["load","document.getElementById"],["DOMContentLoaded","daadb_get_data_fetch"],["click","popactive"],["load","adsbygoogle"],["DOMContentLoaded","location.replace"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["error","blocker"],["click","alink"],["load","[native code]"],["/adblock/i"],["load","google-analytics"],["","sessionStorage"],["click","/form\\.submit|urlToOpen/"],["DOMContentLoaded","overlays"],["load","ads"],["click","document.createElement"],["click","ShouldShow"],["click","clickCount"],["mousedown","localStorage"],["","adsense"],["click","splashPage"],["load","detect-modal"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["load",".call(this"],["/touchmove|wheel/","preventDefault()"],["load","showcfkModal"],["click","attached","elements","div[class=\"share-embed-container\"]"],["click","fp-screen"],["DOMContentLoaded","leaderboardAd"],["DOMContentLoaded","fetch"],["click","openPopupForChapter"],["click","doThePop"],["DOMContentLoaded","blockAdBlock"],["click","openDirectLinkAd"],["load","detect"],["DOMContentLoaded","history.pushState"],["DOMContentLoaded","showPopup"],["click","PopUnder"],["load","puHref"],["click","Ads"],["mouseup","open"],["DOMContentLoaded","adBlockNotice"],["click","pingUrl"],["mousedown","scoreUrl"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["",")](this,..."],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",1],["timesofindia.indiatimes.com",2],["drrtyr.mx",2],["pinoyalbums.com",2],["multiplayer.it",2],["mediafire.com",[3,4]],["pinsystem.co.uk",5],["ancensored.com",5],["mp3fiber.com",[5,25]],["xrivonet.info",5],["kingofdown.com",6],["radiotormentamx.com",6],["quelleestladifference.fr",6],["otakuworldsite.blogspot.com",6],["ad-itech.blogspot.com",6],["unlockapk.com",6],["mobdi3ips.com",6],["socks24.org",6],["interviewgig.com",6],["javaguides.net",6],["almohtarif-tech.net",6],["forum.release-apk.com",6],["devoloperxda.blogspot.com",6],["zwergenstadt.com",6],["primedeportes.es",6],["upxin.net",6],["ciudadblogger.com",6],["ke-1.com",6],["secretsdeepweb.blogspot.com",6],["bit-shares.com",6],["itdmusics.com",6],["aspdotnet-suresh.com",6],["tudo-para-android.com",6],["urdulibrarypk.blogspot.com",6],["zerotopay.com",6],["akw.to",6],["mawsueaa.com",6],["hesgoal-live.io",6],["king-shoot.io",6],["9goals.live",6],["bibme.org",8],["citationmachine.net",8],["easybib.com",9],["vermangasporno.com",10],["imgtorrnt.in",10],["picbaron.com",[10,117]],["letmejerk.com",10],["letmejerk2.com",10],["letmejerk3.com",10],["letmejerk4.com",10],["letmejerk5.com",10],["letmejerk6.com",10],["letmejerk7.com",10],["dlapk4all.com",10],["kropic.com",10],["kvador.com",10],["pdfindir.net",10],["brstej.com",10],["topwwnews.com",10],["xsanime.com",10],["vidlo.us",10],["put-locker.com",10],["youx.xxx",10],["animeindo.asia",10],["masahub.net",10],["adclickersbot.com",10],["badtaste.it",11],["shemalez.com",13],["tubepornclassic.com",13],["gotporn.com",14],["freepornrocks.com",14],["tvhai.org",14],["realgfporn.com",[15,16]],["thisvid.com",16],["xvideos-downloader.net",16],["imgspice.com",17],["vikiporn.com",18],["tnaflix.com",18],["hentai2w.com",[18,178]],["yourlust.com",18],["hotpornfile.org",18],["watchfreexxx.net",18],["vintageporntubes.com",18],["angelgals.com",18],["babesexy.com",18],["porndaa.com",18],["ganstamovies.com",18],["youngleak.com",18],["porndollz.com",18],["xnxxvideo.pro",18],["xvideosxporn.com",18],["filmpornofrancais.fr",18],["pictoa.com",[18,41]],["adultasianporn.com",18],["nsfwmonster.com",18],["girlsofdesire.org",18],["gaytail.com",18],["fetish-bb.com",18],["rumporn.com",18],["soyoungteens.com",18],["zubby.com",18],["lesbian8.com",18],["gayforfans.com",18],["reifporn.de",18],["javtsunami.com",18],["18tube.sex",18],["xxxextreme.org",18],["amateurs-fuck.com",18],["sex-amateur-clips.com",18],["hentaiworld.tv",18],["dads-banging-teens.com",18],["home-xxx-videos.com",18],["mature-chicks.com",18],["teens-fucking-matures.com",18],["hqbang.com",18],["darknessporn.com",18],["familyporner.com",18],["freepublicporn.com",18],["pisshamster.com",18],["punishworld.com",18],["xanimu.com",18],["tubator.com",18],["pornhd.com",19],["cnnamador.com",[19,29]],["cle0desktop.blogspot.com",19],["turkanime.co",19],["camclips.tv",[19,42]],["blackpornhq.com",19],["xsexpics.com",19],["ulsex.net",19],["wannafreeporn.com",19],["ytube2dl.com",19],["multiup.us",19],["protege-torrent.com",19],["pussyspace.com",[20,21]],["pussyspace.net",[20,21]],["empflix.com",22],["cpmlink.net",23],["bdsmstreak.com",23],["cutpaid.com",23],["pornforrelax.com",23],["fatwhitebutt.com",23],["short.pe",24],["totaldebrid.org",25],["neko-miku.com",25],["elsfile.org",25],["venstrike.jimdofree.com",25],["schrauben-normen.de",25],["avengerinator.blogspot.com",25],["link-to.net",25],["hanimesubth.com",25],["gsmturkey.net",25],["adshrink.it",25],["presentation-ppt.com",25],["mangacanblog.com",25],["pekalongan-cits.blogspot.com",25],["4tymode.win",25],["linkvertise.com",25],["reifenrechner.at",25],["tire-size-calculator.info",25],["linuxsecurity.com",25],["itsguider.com",25],["cotravinh.blogspot.com",25],["itudong.com",25],["shortx.net",25],["lecturel.com",25],["bakai.org",25],["nar.k-ba.net",25],["tiroalpalo.org",25],["eurotruck2.com.br",25],["tiroalpaloes.com",25],["tiroalpaloes.net",25],["flixsix.com",25],["bs.to",27],["efukt.com",27],["generacionretro.net",28],["nuevos-mu.ucoz.com",28],["micloudfiles.com",28],["mimaletamusical.blogspot.com",28],["visionias.net",28],["b3infoarena.in",28],["lurdchinexgist.blogspot.com",28],["thefreedommatrix.blogspot.com",28],["hentai-vl.blogspot.com",28],["projetomotog.blogspot.com",28],["ktmx.pro",28],["lirik3satu.blogspot.com",28],["marketmovers.it",28],["pharmaguideline.com",28],["safemaru.blogspot.com",28],["mixloads.com",28],["mangaromance.eu",28],["interssh.com",28],["freesoftpdfdownload.blogspot.com",28],["cirokun.blogspot.com",28],["myadslink.com",28],["blackavelic.com",28],["server.satunivers.tv",28],["eg-akw.com",28],["xn--mgba7fjn.cc",28],["flashingjungle.com",29],["ma-x.org",30],["lavozdegalicia.es",30],["ddwloclawek.pl",30],["ki24.info",30],["xmovies08.org",32],["globaldjmix.com",33],["hblinks.pro",34],["hubcdn.vip",34],["90fpsconfig.in",34],["katdrive.link",34],["kmhd.net",34],["bollydrive.rest",34],["360news4u.net",34],["zazzybabes.com",35],["haaretz.co.il",36],["haaretz.com",36],["slate.com",37],["megalinks.info",38],["megapastes.com",38],["mega-mkv.com",[38,39]],["mkv-pastes.com",38],["zpaste.net",38],["zlpaste.net",38],["9xlinks.site",38],["zona-leros.net",39],["cine.to",[41,184]],["kissasia.cc",41],["digjav.com",42],["videoszoofiliahd.com",43],["xxxtubezoo.com",44],["zooredtube.com",44],["uii.io",45],["megacams.me",46],["rlslog.net",46],["porndoe.com",47],["acienciasgalilei.com",49],["playrust.io",50],["payskip.org",51],["short-url.link",52],["tubedupe.com",53],["mcrypto.club",54],["fatgirlskinny.net",55],["polska-ie.com",55],["windowsmatters.com",55],["canaltdt.es",56],["masbrooo.com",56],["2ndrun.tv",56],["oncehelp.com",57],["curto.win",57],["smallseotools.com",58],["macwelt.de",60],["pcwelt.de",60],["capital.de",60],["geo.de",60],["allmomsex.com",61],["allnewindianporn.com",61],["analxxxvideo.com",61],["animalextremesex.com",61],["anime3d.xyz",61],["animefuckmovies.com",61],["animepornfilm.com",61],["animesexbar.com",61],["animesexclip.com",61],["animexxxsex.com",61],["animexxxfilms.com",61],["anysex.club",61],["apetube.asia",61],["asianfuckmovies.com",61],["asianfucktube.com",61],["asianporn.sexy",61],["asiansexcilps.com",61],["beeg.fund",61],["beegvideoz.com",61],["bestasiansex.pro",61],["bravotube.asia",61],["brutalanimalsfuck.com",61],["candyteenporn.com",61],["daddyfuckmovies.com",61],["desifuckonline.com",61],["exclusiveasianporn.com",61],["exteenporn.com",61],["fantasticporn.net",61],["fantasticyoungporn.com",61],["fineasiansex.com",61],["firstasianpussy.com",61],["freeindiansextube.com",61],["freepornasians.com",61],["freerealvideo.com",61],["fuck-beeg.com",61],["fuck-xnxx.com",61],["fuckasian.pro",61],["fuckfuq.com",61],["fuckundies.com",61],["gojapaneseporn.com",61],["golderotica.com",61],["goodyoungsex.com",61],["goyoungporn.com",61],["hardxxxmoms.com",61],["hdvintagetube.com",61],["hentaiporn.me",61],["hentaisexfilms.com",61],["hentaisexuality.com",61],["hot-teens-movies.mobi",61],["hotanimepornvideos.com",61],["hotanimevideos.com",61],["hotasianpussysex.com",61],["hotjapaneseshows.com",61],["hotmaturetube.com",61],["hotmilfs.pro",61],["hotorientalporn.com",61],["hotpornyoung.com",61],["hotxxxjapanese.com",61],["hotxxxpussy.com",61],["indiafree.net",61],["indianpornvideo.online",61],["japanpornclip.com",61],["japanesetube.video",61],["japansex.me",61],["japanesexxxporn.com",61],["japansporno.com",61],["japanxxx.asia",61],["japanxxxworld.com",61],["keezmovies.surf",61],["lingeriefuckvideo.com",61],["liveanimalporn.zooo.club",61],["madhentaitube.com",61],["megahentaitube.com",61],["megajapanesesex.com",61],["megajapantube.com",61],["milfxxxpussy.com",61],["momsextube.pro",61],["momxxxass.com",61],["monkeyanimalporn.com",61],["moviexxx.mobi",61],["newanimeporn.com",61],["newjapanesexxx.com",61],["nicematureporn.com",61],["nudeplayboygirls.com",61],["openxxxporn.com",61],["originalindianporn.com",61],["originalteentube.com",61],["pig-fuck.com",61],["plainasianporn.com",61],["popularasianxxx.com",61],["pornanimetube.com",61],["pornasians.pro",61],["pornhat.asia",61],["pornjapanesesex.com",61],["pornomovies.asia",61],["pornvintage.tv",61],["primeanimesex.com",61],["realjapansex.com",61],["realmomsex.com",61],["redsexhub.com",61],["retroporn.world",61],["retrosexfilms.com",61],["sex-free-movies.com",61],["sexanimesex.com",61],["sexanimetube.com",61],["sexjapantube.com",61],["sexmomvideos.com",61],["sexteenxxxtube.com",61],["sexxxanimal.com",61],["sexyoungtube.com",61],["sexyvintageporn.com",61],["sopornmovies.com",61],["spicyvintageporn.com",61],["sunporno.club",61],["tabooanime.club",61],["teenextrem.com",61],["teenfucksex.com",61],["teenhost.net",61],["teensexass.com",61],["tnaflix.asia",61],["totalfuckmovies.com",61],["totalmaturefuck.com",61],["txxx.asia",61],["voyeurpornsex.com",61],["warmteensex.com",61],["wetasiancreampie.com",61],["wildhentaitube.com",61],["wowyoungsex.com",61],["xhamster-art.com",61],["xmovie.pro",61],["xnudevideos.com",61],["xnxxjapon.com",61],["xpics.me",61],["xvide.me",61],["xxxanimefuck.com",61],["xxxanimevideos.com",61],["xxxanimemovies.com",61],["xxxhentaimovies.com",61],["xxxhothub.com",61],["xxxjapaneseporntube.com",61],["xxxlargeporn.com",61],["xxxmomz.com",61],["xxxpornmilf.com",61],["xxxpussyclips.com",61],["xxxpussysextube.com",61],["xxxretrofuck.com",61],["xxxsex.pro",61],["xxxsexyjapanese.com",61],["xxxteenyporn.com",61],["xxxvideo.asia",61],["xxxvideos.ink",61],["xxxyoungtv.com",61],["youjizzz.club",61],["youngpussyfuck.com",61],["bayimg.com",62],["celeb.gate.cc",63],["kinoger.re",64],["desi.upn.bio",64],["masterplayer.xyz",66],["pussy-hub.com",66],["porndex.com",67],["compucalitv.com",68],["diariodenavarra.es",70],["pennlive.com",73],["beautypageants.indiatimes.com",74],["01fmovies.com",75],["lnk2.cc",77],["fullhdxxx.com",78],["luscious.net",[78,117]],["classicpornbest.com",78],["1youngteenporn.com",78],["www-daftarharga.blogspot.com",[78,168]],["miraculous.to",[78,174]],["vtube.to",78],["xstory-fr.com",78],["gosexpod.com",79],["otakukan.com",80],["xcafe.com",81],["pornfd.com",81],["venusarchives.com",81],["imagehaha.com",82],["imagenpic.com",82],["imageshimage.com",82],["imagetwist.com",82],["k1nk.co",83],["watchasians.cc",83],["lulustream.com",83],["luluvdo.com",83],["web.de",84],["news18.com",85],["thelanb.com",86],["dropmms.com",86],["softwaredescargas.com",87],["cracking-dz.com",88],["gazzetta.it",90],["port.hu",92],["dziennikbaltycki.pl",93],["dzienniklodzki.pl",93],["dziennikpolski24.pl",93],["dziennikzachodni.pl",93],["echodnia.eu",93],["expressbydgoski.pl",93],["expressilustrowany.pl",93],["gazetakrakowska.pl",93],["gazetalubuska.pl",93],["gazetawroclawska.pl",93],["gk24.pl",93],["gloswielkopolski.pl",93],["gol24.pl",93],["gp24.pl",93],["gra.pl",93],["gs24.pl",93],["kurierlubelski.pl",93],["motofakty.pl",93],["naszemiasto.pl",93],["nowiny24.pl",93],["nowosci.com.pl",93],["nto.pl",93],["polskatimes.pl",93],["pomorska.pl",93],["poranny.pl",93],["sportowy24.pl",93],["strefaagro.pl",93],["strefabiznesu.pl",93],["stronakobiet.pl",93],["telemagazyn.pl",93],["to.com.pl",93],["wspolczesna.pl",93],["course9x.com",93],["courseclub.me",93],["azrom.net",93],["alttyab.net",93],["esopress.com",93],["nesiaku.my.id",93],["onemanhua.com",94],["freeindianporn.mobi",94],["dr-farfar.com",95],["boyfriendtv.com",96],["brandstofprijzen.info",97],["netfuck.net",98],["blog24.me",[98,110]],["kisahdunia.com",98],["javsex.to",98],["nulljungle.com",98],["oyuncusoruyor.com",98],["pbarecap.ph",98],["sourds.net",98],["teknobalta.com",98],["tvinternetowa.info",98],["sqlserveregitimleri.com",98],["tutcourse.com",98],["readytechflip.com",98],["warddogs.com",98],["dvdgayporn.com",98],["iimanga.com",98],["tinhocdongthap.com",98],["tremamnon.com",98],["423down.com",98],["brizzynovel.com",98],["jugomobile.com",98],["freecodezilla.net",98],["iconmonstr.com",98],["gay-tubes.cc",98],["rbxscripts.net",98],["comentariodetexto.com",98],["wordpredia.com",98],["allfaucet.xyz",[98,110]],["titbytz.tk",98],["replica-watch.info",98],["alludemycourses.com",98],["kayifamilytv.com",98],["interfans.org",98],["iir.ai",99],["gameofporn.com",101],["qpython.club",102],["antifake-funko.fr",102],["dktechnicalmate.com",102],["recipahi.com",102],["e9china.net",103],["ontools.net",103],["marketbeat.com",104],["hentaipornpics.net",105],["apps2app.com",106],["upshrink.com",107],["fitdynamos.com",109],["ohionowcast.info",110],["wiour.com",110],["bitzite.com",[110,115,116]],["appsbull.com",110],["diudemy.com",110],["maqal360.com",[110,118,119]],["bitcotasks.com",110],["videolyrics.in",110],["manofadan.com",110],["cempakajaya.com",110],["tagecoin.com",110],["naijafav.top",110],["ourcoincash.xyz",110],["claimcoins.site",110],["cryptosh.pro",110],["eftacrypto.com",110],["fescrypto.com",110],["earnhub.net",110],["kiddyshort.com",110],["tronxminer.com",110],["neverdims.com",110],["homeairquality.org",111],["cety.app",[112,113]],["exego.app",112],["cutlink.net",112],["cutsy.net",112],["cutyurls.com",112],["cutty.app",112],["cutnet.net",112],["jixo.online",112],["cuty.me",113],["upfiles.app",[113,128]],["upfiles-urls.com",[113,128]],["gamerxyt.com",113],["adcrypto.net",114],["admediaflex.com",114],["aduzz.com",114],["bitcrypto.info",114],["cdrab.com",114],["datacheap.io",114],["hbz.us",114],["savego.org",114],["owsafe.com",114],["sportweb.info",114],["gfx-station.com",115],["buzzheavier.com",116],["flashbang.sh",116],["trashbytes.net",116],["aiimgvlog.fun",117],["6indianporn.com",117],["amateurebonypics.com",117],["amateuryoungpics.com",117],["cinemabg.net",117],["coomer.su",117],["desimmshd.com",117],["frauporno.com",117],["givemeaporn.com",117],["hitomi.la",117],["jav-asia.top",117],["javf.net",117],["javfull.net",117],["javideo.net",117],["kemono.su",117],["kr18plus.com",117],["pilibook.com",117],["pornborne.com",117],["porngrey.com",117],["qqxnxx.com",117],["sexvideos.host",117],["submilf.com",117],["subtaboo.com",117],["tktube.com",117],["xfrenchies.com",117],["soft98.ir",[118,137]],["moderngyan.com",120],["sattakingcharts.in",120],["freshbhojpuri.com",120],["bgmi32bitapk.in",120],["bankshiksha.in",120],["earn.mpscstudyhub.com",120],["earn.quotesopia.com",120],["money.quotesopia.com",120],["best-mobilegames.com",120],["learn.moderngyan.com",120],["bharatsarkarijobalert.com",120],["quotesopia.com",120],["creditsgoal.com",120],["coingraph.us",121],["momo-net.com",121],["maxgaming.fi",121],["cybercityhelp.in",122],["travel.vebma.com",123],["cloud.majalahhewan.com",123],["crm.cekresi.me",123],["ai.tempatwisata.pro",123],["pinloker.com",123],["sekilastekno.com",123],["mrproblogger.com",124],["themezon.net",124],["dagensnytt.com",124],["azmath.info",125],["downfile.site",125],["downphanmem.com",125],["expertvn.com",125],["memangbau.com",125],["trangchu.news",125],["aztravels.net",125],["ielts-isa.edu.vn",125],["techedubyte.com",[125,233]],["jpopsingles.eu",125],["aipebel.com",125],["link.paid4link.com",126],["driveup.sbs",127],["apimate.net",127],["dynamicminister.net",127],["gofirmware.com",127],["flight-report.com",129],["vulture.com",130],["megaplayer.bokracdn.run",131],["hentaistream.com",132],["siteunblocked.info",133],["larvelfaucet.com",134],["feyorra.top",134],["claimtrx.com",134],["moviesyug.net",135],["w4files.ws",135],["parispi.net",136],["hentaicloud.com",137],["justin.mp3quack.lol",137],["tio.ch",138],["lavanguardia.com",138],["tu.no",138],["paperzonevn.com",139],["dailyvideoreports.net",140],["lewd.ninja",141],["systemnews24.com",142],["incestvidz.com",143],["niusdiario.es",144],["playporngames.com",145],["javx.cc",145],["movi.pk",[146,149]],["cutesexyteengirls.com",148],["0dramacool.net",149],["185.53.88.104",149],["185.53.88.204",149],["185.53.88.15",149],["123movies4k.net",149],["1rowsports.com",149],["4share-mp3.net",149],["9animetv.to",149],["720pstream.me",149],["aagmaal.com",149],["abysscdn.com",149],["ajkalerbarta.com",149],["androidapks.biz",149],["androidsite.net",149],["animeonlinefree.org",149],["animesite.net",149],["animespank.com",149],["aniworld.to",149],["apkmody.io",149],["appsfree4u.com",149],["audioz.download",149],["awafim.tv",149],["bdnewszh.com",149],["beastlyprints.com",149],["bengalisite.com",149],["bestfullmoviesinhd.org",149],["betteranime.net",149],["blacktiesports.live",149],["buffsports.stream",149],["ch-play.com",149],["clickforhire.com",149],["cloudy.pk",149],["computercrack.com",149],["coolcast2.com",149],["crackedsoftware.biz",149],["crackfree.org",149],["cracksite.info",149],["cryptoblog24.info",149],["cuatrolatastv.blogspot.com",149],["cydiasources.net",149],["decmelfot.xyz",149],["dirproxy.com",149],["dopebox.to",149],["downloadapk.info",149],["downloadapps.info",149],["downloadgames.info",149],["downloadmusic.info",149],["downloadsite.org",149],["downloadwella.com",149],["ebooksite.org",149],["educationtips213.blogspot.com",149],["egyup.live",149],["elgoles.pro",149],["embed.meomeo.pw",149],["embed.scdn.to",149],["emulatorsite.com",149],["essaysharkwriting.club",149],["exploreera.net",149],["extrafreetv.com",149],["fakedetail.com",149],["fclecteur.com",149],["files.im",149],["flexyhit.com",149],["fmoviefree.net",149],["fmovies24.com",149],["freeflix.info",149],["freemoviesu4.com",149],["freeplayervideo.com",149],["freesoccer.net",149],["fseries.org",149],["gamefast.org",149],["gamesite.info",149],["gettapeads.com",149],["gmanga.me",149],["gocast123.me",149],["gogohd.net",149],["gogoplay5.com",149],["gooplay.net",149],["gostreamon.net",149],["happy2hub.org",149],["harimanga.com",149],["healthnewsreel.com",149],["hexupload.net",149],["hinatasoul.com",149],["hindisite.net",149],["holymanga.net",149],["hxfile.co",149],["isosite.org",149],["iv-soft.com",149],["januflix.expert",149],["jewelry.com.my",149],["johnwardflighttraining.com",149],["kabarportal.com",149],["kstorymedia.com",149],["la123movies.org",149],["lespassionsdechinouk.com",149],["lilymanga.net",149],["linksdegrupos.com.br",149],["linkz.wiki",149],["livestreamtv.pk",149],["macsite.info",149],["mangasite.org",149],["manhuascan.com",149],["megamovies.org",149],["membed.net",149],["moddroid.com",149],["moviefree2.com",149],["movies-watch.com.pk",149],["moviesite.app",149],["moviesonline.fm",149],["moviesx.org",149],["msmoviesbd.com",149],["musicsite.biz",149],["myfernweh.com",149],["myviid.com",149],["nazarickol.com",149],["noob4cast.com",149],["nsw2u.com",[149,273]],["oko.sh",149],["orangeink.pk",149],["pahaplayers.click",149],["patchsite.net",149],["pdfsite.net",149],["play1002.com",149],["player-cdn.com",149],["productkeysite.com",149],["projectfreetv.one",149],["romsite.org",149],["rufiguta.com",149],["rytmp3.io",149],["send.cm",149],["seriesite.net",149],["seriezloaded.com.ng",149],["serijehaha.com",149],["shrugemojis.com",149],["siteapk.net",149],["siteflix.org",149],["sitegames.net",149],["sitekeys.net",149],["sitepdf.com",149],["sitetorrent.com",149],["softwaresite.net",149],["sportbar.live",149],["ssyoutube.com",149],["stardima.com",149],["stream4free.live",149],["superapk.org",149],["supermovies.org",149],["tainio-mania.online",149],["talaba.su",149],["tamilguns.org",149],["tatabrada.tv",149],["techtrendmakers.com",149],["thememypc.net",149],["thripy.com",149],["travelplanspro.com",149],["turcasmania.com",149],["tusfiles.com",149],["tvonlinesports.com",149],["ultramovies.org",149],["uploadbank.com",149],["urdubolo.pk",149],["vidspeeds.com",149],["warezsite.net",149],["watchmovies2.com",149],["watchmoviesforfree.org",149],["watchofree.com",149],["watchsite.net",149],["watchsouthpark.tv",149],["watchtvch.club",149],["web.livecricket.is",149],["webseries.club",149],["worldcupstream.pm",149],["y2mate.com",149],["youapk.net",149],["youtube4kdownloader.com",149],["yts-subs.com",149],["haho.moe",150],["nicy-spicy.pw",151],["novelmultiverse.com",152],["mylegalporno.com",153],["embedsports.me",154],["embedstream.me",154],["jumbtv.com",154],["reliabletv.me",154],["xnxx.com",157],["thecut.com",158],["novelism.jp",159],["alphapolis.co.jp",160],["game3rb.com",161],["javhub.net",161],["thotvids.com",162],["berklee.edu",163],["rawkuma.com",[164,165]],["moviesjoyhd.to",165],["cineb.rs",165],["imeteo.sk",166],["youtubemp3donusturucu.net",167],["surfsees.com",169],["vivo.st",[170,171]],["alueviesti.fi",173],["kiuruvesilehti.fi",173],["lempaala.ideapark.fi",173],["olutposti.fi",173],["urjalansanomat.fi",173],["tainhanhvn.com",175],["titantv.com",176],["3cinfo.net",177],["camarchive.tv",178],["crownimg.com",178],["freejav.guru",178],["hentai2read.com",178],["icyporno.com",178],["illink.net",178],["javtiful.com",178],["m-hentai.net",178],["pornblade.com",178],["pornfelix.com",178],["pornxxxxtube.net",178],["redwap.me",178],["redwap2.com",178],["redwap3.com",178],["sunporno.com",178],["tubxporn.xxx",178],["ver-comics-porno.com",178],["ver-mangas-porno.com",178],["xanimeporn.com",178],["xxxvideohd.net",178],["zetporn.com",178],["simpcity.su",179],["cocomanga.com",180],["animelatinohd.com",180],["sampledrive.in",181],["sportnews.to",181],["soccershoes.blog",181],["mcleaks.net",182],["explorecams.com",182],["minecraft.buzz",182],["chillx.top",183],["playerx.stream",183],["m.liputan6.com",185],["stardewids.com",[185,210]],["ingles.com",186],["spanishdict.com",186],["surfline.com",187],["rureka.com",188],["bunkr.is",189],["freepreset.net",190],["amateur8.com",191],["freeporn8.com",191],["maturetubehere.com",191],["embedo.co",192],["corriere.it",193],["oggi.it",193],["2the.space",194],["file.gocmod.com",196],["apkcombo.com",197],["winfuture.de",198],["sponsorhunter.com",199],["novelssites.com",200],["haxina.com",201],["scimagojr.com",201],["torrentmac.net",202],["udvl.com",203],["dlpanda.com",204],["socialmediagirls.com",205],["einrichtungsbeispiele.de",206],["weadown.com",207],["molotov.tv",208],["freecoursesonline.me",209],["adelsfun.com",209],["advantien.com",209],["bailbondsfinder.com",209],["bigpiecreative.com",209],["childrenslibrarylady.com",209],["classifarms.com",209],["comtasq.ca",209],["crone.es",209],["ctrmarketingsolutions.com",209],["dropnudes.com",209],["ftuapps.dev",209],["genzsport.com",209],["ghscanner.com",209],["grsprotection.com",209],["gruporafa.com.br",209],["inmatefindcalifornia.com",209],["inmatesearchidaho.com",209],["itsonsitetv.com",209],["mfmfinancials.com",209],["myproplugins.com",209],["nurulislam.org",209],["onehack.us",209],["ovester.com",209],["paste.bin.sx",209],["privatenudes.com",209],["renoconcrete.ca",209],["richieashbeck.com",209],["sat.technology",209],["short1ink.com",209],["stpm.co.uk",209],["wegotcookies.co",209],["mathcrave.com",209],["marinetraffic.live",209],["commands.gg",210],["smgplaza.com",211],["emturbovid.com",212],["findjav.com",212],["javggvideo.xyz",212],["mmtv01.xyz",212],["stbturbo.xyz",212],["streamsilk.com",212],["freepik.com",213],["diyphotography.net",215],["bitchesgirls.com",216],["hiraethtranslation.com",217],["programmingeeksclub.com",218],["diendancauduong.com",219],["androidadult.com",220],["parentcircle.com",221],["h-game18.xyz",222],["wheelofgold.com",223],["davescomputertips.com",224],["historyofroyalwomen.com",224],["skill4ltu.eu",226],["lifestyle.bg",227],["news.bg",227],["topsport.bg",227],["webcafe.bg",227],["freepikdownloader.com",228],["freepasses.org",229],["iusedtobeaboss.com",230],["androidpolice.com",231],["cbr.com",231],["gamerant.com",231],["howtogeek.com",231],["thegamer.com",231],["blogtruyenmoi.com",232],["repretel.com",234],["tubereader.me",234],["graphicget.com",235],["qiwi.gg",[236,237]],["sonixgvn.net",238],["alliptvlinks.com",239],["smashyplayer.top",240],["xvideos.com",241],["xvideos2.com",241],["homemoviestube.com",242],["sexseeimage.com",242],["ukchat.co.uk",245],["hivelr.com",246],["skidrowcodex.net",247],["takimag.com",248],["digi.no",249],["th.gl",250],["twi-fans.com",251],["learn-cpp.org",252],["terashare.co",253],["pornwex.tv",254],["smithsonianmag.com",255],["homesports.net",256],["realmoasis.com",257],["javfc2.xyz",258],["gobankingrates.com",259],["hiddenleaf.to",260],["ronorp.net",261],["videovak.com",264],["a-lohas.jp",265],["akirabox.com",266],["purplex.app",267],["maggotdrowning.com",268],["idnes.cz",[269,270]],["cbc.ca",271],["slashdot.org",272]]);

const entitiesMap = new Map([["kissasian",5],["ganool",5],["pirate",5],["piratebay",5],["pirateproxy",5],["proxytpb",5],["thepiratebay",5],["limetorrents",[6,10]],["king-pes",6],["depedlps",6],["komikcast",6],["idedroidsafelink",6],["links-url",6],["ak4eg",6],["streanplay",7],["steanplay",7],["pahe",10],["yts",10],["tube8",10],["topeuropix",10],["moviescounter",10],["torrent9",10],["desiremovies",10],["movs4u",10],["uwatchfree",10],["hydrax",10],["4movierulz",10],["projectfreetv",10],["arabseed",10],["btdb",[10,50]],["world4ufree",10],["streamsport",10],["rojadirectatvhd",10],["userload",10],["adyou",12],["fxporn69",15],["rexporn",19],["movies07",19],["pornocomics",19],["pornomoll",23],["gsurl",24],["freecoursesonline",25],["lordpremium",25],["todovieneok",25],["novablogitalia",25],["anisubindo",25],["btvsports",25],["stream4free",25],["mimaletadepeliculas",26],["burningseries",27],["dz4soft",28],["yoututosjeff",28],["ebookmed",28],["lanjutkeun",28],["novelasesp",28],["singingdalong",28],["doujindesu",28],["xmovies8",31],["desiupload",[34,135]],["hubdrive",34],["mega-dvdrip",39],["peliculas-dvdrip",39],["desbloqueador",40],["newpelis",[41,48]],["pelix",[41,48]],["allcalidad",[41,178]],["khatrimaza",41],["camwhores",42],["camwhorestv",42],["uproxy",42],["mirrorace",54],["mixdrp",59],["asiansex",61],["japanfuck",61],["japanporn",61],["teensex",61],["vintagetube",61],["xxxmovies",61],["zooqle",65],["hdfull",69],["mangamanga",71],["streameast",72],["thestreameast",72],["vev",76],["vidop",76],["zone-telechargement",78],["1337x",78],["x1337x",78],["megalink",83],["gmx",84],["mega1080p",89],["anitube",89],["9hentai",91],["gaypornhdfree",98],["cinemakottaga",98],["privatemoviez",98],["apkmaven",98],["popcornstream",100],["fc-lc",108],["pornktube",117],["watchseries",117],["milfnut",121],["azsoft",125],["pagalmovies",135],["7starhd",135],["jalshamoviez",135],["9xupload",135],["bdupload",135],["rdxhd1",135],["nuvid",137],["moviessources",147],["0gomovie",149],["0gomovies",149],["123moviefree",149],["1kmovies",149],["1madrasdub",149],["1primewire",149],["2embed",149],["2madrasdub",149],["2umovies",149],["4anime",149],["adblockplustape",149],["altadefinizione01",149],["atomixhq",149],["beinmatch",149],["brmovies",149],["cima4u",149],["clicknupload",149],["cmovies",149],["cricfree",149],["crichd",149],["dood",149],["f1stream",149],["faselhd",149],["fbstream",149],["filemoon",149],["filepress",[149,214]],["filmlinks4u",149],["filmpertutti",149],["filmyzilla",149],["fmovies",149],["french-stream",149],["fzlink",149],["gofilms4u",149],["gogoanime",149],["gomoviz",149],["hdmoviefair",149],["hdmovies4u",149],["hdmovies50",149],["hdmoviesfair",149],["hh3dhay",149],["hindilinks4u",149],["hotmasti",149],["hurawatch",149],["klmanga",149],["klubsports",149],["libertestreamvf",149],["livetvon",149],["manga1000",149],["manga1001",149],["mangaraw",149],["mangarawjp",149],["mlbstream",149],["motogpstream",149],["movierulz",149],["movies123",149],["movies2watch",149],["moviesden",149],["moviezaddiction",149],["nbastream",149],["netcine",149],["nflstream",149],["nhlstream",149],["onlinewatchmoviespk",149],["pctfenix",149],["pctnew",149],["pksmovies",149],["plyjam",149],["plylive",149],["pogolinks",149],["popcorntime",149],["poscitech",149],["rugbystreams",149],["shahed4u",149],["sflix",149],["sitesunblocked",149],["solarmovies",149],["sportcast",149],["sportskart",149],["sports-stream",149],["streaming-french",149],["streamers",149],["streamingcommunity",[149,195]],["t20cup",149],["tennisstreams",149],["torrentdosfilmes",149],["toonanime",149],["tvply",149],["ufcstream",149],["uptomega",149],["uqload",149],["vudeo",149],["vidoo",149],["vipbox",149],["vipboxtv",149],["vipleague",149],["viprow",149],["yesmovies",149],["yomovies",149],["yomovies1",149],["yt2mp3s",149],["kat",149],["katbay",149],["kickass",149],["kickasshydra",149],["kickasskat",149],["kickass2",149],["kickasstorrents",149],["kat2",149],["kattracker",149],["thekat",149],["thekickass",149],["kickassz",149],["kickasstorrents2",149],["topkickass",149],["kickassgo",149],["kkickass",149],["kkat",149],["kickasst",149],["kick4ss",149],["guardaserie",155],["cine-calidad",156],["xvideos",157],["videovard",172],["gntai",178],["grantorrent",178],["mejortorrent",178],["mejortorrento",178],["mejortorrents",178],["mejortorrents1",178],["mejortorrentt",178],["shineads",181],["bg-gledai",209],["gledaitv",209],["motchill",225],["upns",240],["readcomiconline",243],["nekopoi",244],["gdflix",262],["a1movies",263]]);

const exceptionsMap = new Map([["forum.soft98.ir",[118,137]]]);

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
