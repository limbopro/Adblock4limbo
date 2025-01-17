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

const argsList = [["load","Object"],["load","hard_block"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["load","onload"],["","BACK"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","window.open"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["mousedown","preventDefault"],["load","nextFunction"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["click","_blank"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["DOMContentLoaded","iframe"],["","/_blank/i"],["blur","stopCountdown"],["load","htmls"],["blur","focusOut"],["click","/handleClick|popup/"],["DOMContentLoaded","history.go"],["load","bypass"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","location.href"],["","popMagic"],["contextmenu","preventDefault"],["visibilitychange","remainingSeconds"],["click","Popunder"],["contextmenu"],["submit","validateForm"],["blur","counter"],["load","doTest"],["","history.go"],["DOMContentLoaded","document.documentElement.lang.toLowerCase"],["click","maxclick"],["click","shouldOpenPopUp"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["click","open"],["error"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["beforeunload"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["message"],["","/pop|_blank/"],["click","allclick_Public"],["DOMContentLoaded","/dyn\\.ads|loadAdsDelayed/"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["mousedown","shown_at"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["click","popMagic"],["","shouldShow"],["load","popMagic"],["DOMContentLoaded","adsSrc"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["","exoJsPop101"],["DOMContentLoaded","atob"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["click","popName"],["blur"],["DOMContentLoaded","clientHeight"],["load","error-report.com"],["click","window.focus"],["click","event.dispatch"],["load","adblock"],["","Math"],["DOMContentLoaded","popupurls"],["click","window.open"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["load","Ads"],["DOMContentLoaded","document.documentElement.lang"],["DOMContentLoaded","googlesyndication"],["load","popunder"],["DOMContentLoaded",".clientHeight"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["load","document.getElementById"],["DOMContentLoaded","daadb_get_data_fetch"],["click","popactive"],["load","adsbygoogle"],["DOMContentLoaded","location.replace"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["error","blocker"],["click","alink"],["load","[native code]"],["/adblock/i"],["","daadb"],["load","google-analytics"],["","sessionStorage"],["click","/form\\.submit|urlToOpen/"],["DOMContentLoaded","overlays"],["load","fetch"],["load","ads"],["click","document.createElement"],["click","ShouldShow"],["click","clickCount"],["mousedown","localStorage"],["","adsense"],["click","splashPage"],["load","detect-modal"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["load",".call(this"],["/touchmove|wheel/","preventDefault()"],["load","showcfkModal"],["click","attached","elements","div[class=\"share-embed-container\"]"],["click","fp-screen"],["DOMContentLoaded","leaderboardAd"],["DOMContentLoaded","fetch"],["click","openPopupForChapter"],["click","doThePop"],["DOMContentLoaded","blockAdBlock"],["click","openDirectLinkAd"],["load","detect"],["DOMContentLoaded","history.pushState"],["DOMContentLoaded","showPopup"],["click","PopUnder"],["load","puHref"],["click","Ads"],["click","pingUrl"],["mousedown","scoreUrl"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["load","/Boh|Happy|='\\/'|11'\\+|'height|left'|^.{4700,10000}$/"],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",1],["timesofindia.indiatimes.com",2],["drrtyr.mx",2],["pinoyalbums.com",2],["multiplayer.it",2],["mediafire.com",[3,4]],["pinsystem.co.uk",5],["ancensored.com",5],["mp3fiber.com",[5,25]],["xrivonet.info",5],["kingofdown.com",6],["radiotormentamx.com",6],["quelleestladifference.fr",6],["otakuworldsite.blogspot.com",6],["ad-itech.blogspot.com",6],["agar.pro",6],["unlockapk.com",6],["mobdi3ips.com",6],["socks24.org",6],["interviewgig.com",6],["javaguides.net",6],["almohtarif-tech.net",6],["forum.release-apk.com",6],["devoloperxda.blogspot.com",6],["zwergenstadt.com",6],["primedeportes.es",6],["upxin.net",6],["ciudadblogger.com",6],["ke-1.com",6],["secretsdeepweb.blogspot.com",6],["bit-shares.com",6],["itdmusics.com",6],["aspdotnet-suresh.com",6],["tudo-para-android.com",6],["urdulibrarypk.blogspot.com",6],["zerotopay.com",6],["akw.to",6],["mawsueaa.com",6],["hesgoal-live.io",6],["king-shoot.io",6],["9goals.live",6],["bibme.org",8],["citationmachine.net",8],["easybib.com",9],["vermangasporno.com",10],["imgtorrnt.in",10],["picbaron.com",[10,116]],["letmejerk.com",10],["letmejerk2.com",10],["letmejerk3.com",10],["letmejerk4.com",10],["letmejerk5.com",10],["letmejerk6.com",10],["letmejerk7.com",10],["dlapk4all.com",10],["kropic.com",10],["kvador.com",10],["pdfindir.net",10],["brstej.com",10],["topwwnews.com",10],["xsanime.com",10],["vidlo.us",10],["put-locker.com",10],["youx.xxx",10],["animeindo.asia",10],["masahub.net",10],["adclickersbot.com",10],["badtaste.it",11],["shemalez.com",13],["tubepornclassic.com",13],["gotporn.com",14],["freepornrocks.com",14],["tvhai.org",14],["realgfporn.com",[15,16]],["thisvid.com",16],["xvideos-downloader.net",16],["imgspice.com",17],["vikiporn.com",18],["tnaflix.com",18],["hentai2w.com",[18,176]],["yourlust.com",18],["hotpornfile.org",18],["watchfreexxx.net",18],["vintageporntubes.com",18],["angelgals.com",18],["babesexy.com",18],["porndaa.com",18],["ganstamovies.com",18],["youngleak.com",18],["porndollz.com",18],["xnxxvideo.pro",18],["xvideosxporn.com",18],["filmpornofrancais.fr",18],["pictoa.com",[18,40]],["adultasianporn.com",18],["nsfwmonster.com",18],["girlsofdesire.org",18],["gaytail.com",18],["fetish-bb.com",18],["rumporn.com",18],["soyoungteens.com",18],["zubby.com",18],["lesbian8.com",18],["gayforfans.com",18],["reifporn.de",18],["javtsunami.com",18],["18tube.sex",18],["xxxextreme.org",18],["amateurs-fuck.com",18],["sex-amateur-clips.com",18],["hentaiworld.tv",18],["dads-banging-teens.com",18],["home-xxx-videos.com",18],["mature-chicks.com",18],["teens-fucking-matures.com",18],["hqbang.com",18],["darknessporn.com",18],["familyporner.com",18],["freepublicporn.com",18],["pisshamster.com",18],["punishworld.com",18],["xanimu.com",18],["tubator.com",18],["pornhd.com",19],["cnnamador.com",[19,29]],["cle0desktop.blogspot.com",19],["turkanime.co",19],["camclips.tv",[19,41]],["blackpornhq.com",19],["xsexpics.com",19],["ulsex.net",19],["wannafreeporn.com",19],["ytube2dl.com",19],["multiup.us",19],["protege-torrent.com",19],["pussyspace.com",[20,21]],["pussyspace.net",[20,21]],["empflix.com",22],["cpmlink.net",23],["bdsmstreak.com",23],["cutpaid.com",23],["pornforrelax.com",23],["fatwhitebutt.com",23],["short.pe",24],["totaldebrid.org",25],["neko-miku.com",25],["elsfile.org",25],["venstrike.jimdofree.com",25],["schrauben-normen.de",25],["avengerinator.blogspot.com",25],["link-to.net",25],["hanimesubth.com",25],["gsmturkey.net",25],["adshrink.it",25],["presentation-ppt.com",25],["mangacanblog.com",25],["pekalongan-cits.blogspot.com",25],["4tymode.win",25],["linkvertise.com",25],["reifenrechner.at",25],["tire-size-calculator.info",25],["linuxsecurity.com",25],["itsguider.com",25],["cotravinh.blogspot.com",25],["itudong.com",25],["shortx.net",25],["lecturel.com",25],["bakai.org",25],["nar.k-ba.net",25],["tiroalpalo.org",25],["eurotruck2.com.br",25],["tiroalpaloes.com",25],["tiroalpaloes.net",25],["bs.to",27],["efukt.com",27],["generacionretro.net",28],["nuevos-mu.ucoz.com",28],["micloudfiles.com",28],["mimaletamusical.blogspot.com",28],["visionias.net",28],["b3infoarena.in",28],["lurdchinexgist.blogspot.com",28],["thefreedommatrix.blogspot.com",28],["hentai-vl.blogspot.com",28],["projetomotog.blogspot.com",28],["ktmx.pro",28],["lirik3satu.blogspot.com",28],["marketmovers.it",28],["pharmaguideline.com",28],["safemaru.blogspot.com",28],["mixloads.com",28],["mangaromance.eu",28],["interssh.com",28],["freesoftpdfdownload.blogspot.com",28],["cirokun.blogspot.com",28],["myadslink.com",28],["blackavelic.com",28],["server.satunivers.tv",28],["eg-akw.com",28],["xn--mgba7fjn.cc",28],["flashingjungle.com",29],["ma-x.org",30],["lavozdegalicia.es",30],["ddwloclawek.pl",30],["ki24.info",30],["xmovies08.org",32],["globaldjmix.com",33],["zazzybabes.com",34],["haaretz.co.il",35],["haaretz.com",35],["slate.com",36],["megalinks.info",37],["megapastes.com",37],["mega-mkv.com",[37,38]],["mkv-pastes.com",37],["zpaste.net",37],["zlpaste.net",37],["9xlinks.site",37],["zona-leros.net",38],["cine.to",[40,182]],["kissasia.cc",40],["digjav.com",41],["videoszoofiliahd.com",42],["xxxtubezoo.com",43],["zooredtube.com",43],["uii.io",44],["megacams.me",45],["rlslog.net",45],["porndoe.com",46],["acienciasgalilei.com",48],["playrust.io",49],["payskip.org",50],["short-url.link",51],["tubedupe.com",52],["mcrypto.club",53],["fatgirlskinny.net",54],["polska-ie.com",54],["windowsmatters.com",54],["canaltdt.es",55],["masbrooo.com",55],["2ndrun.tv",55],["oncehelp.com",56],["curto.win",56],["smallseotools.com",57],["macwelt.de",59],["pcwelt.de",59],["capital.de",59],["geo.de",59],["allmomsex.com",60],["allnewindianporn.com",60],["analxxxvideo.com",60],["animalextremesex.com",60],["anime3d.xyz",60],["animefuckmovies.com",60],["animepornfilm.com",60],["animesexbar.com",60],["animesexclip.com",60],["animexxxsex.com",60],["animexxxfilms.com",60],["anysex.club",60],["apetube.asia",60],["asianfuckmovies.com",60],["asianfucktube.com",60],["asianporn.sexy",60],["asiansexcilps.com",60],["beeg.fund",60],["beegvideoz.com",60],["bestasiansex.pro",60],["bravotube.asia",60],["brutalanimalsfuck.com",60],["candyteenporn.com",60],["daddyfuckmovies.com",60],["desifuckonline.com",60],["exclusiveasianporn.com",60],["exteenporn.com",60],["fantasticporn.net",60],["fantasticyoungporn.com",60],["fineasiansex.com",60],["firstasianpussy.com",60],["freeindiansextube.com",60],["freepornasians.com",60],["freerealvideo.com",60],["fuck-beeg.com",60],["fuck-xnxx.com",60],["fuckasian.pro",60],["fuckfuq.com",60],["fuckundies.com",60],["gojapaneseporn.com",60],["golderotica.com",60],["goodyoungsex.com",60],["goyoungporn.com",60],["hardxxxmoms.com",60],["hdvintagetube.com",60],["hentaiporn.me",60],["hentaisexfilms.com",60],["hentaisexuality.com",60],["hot-teens-movies.mobi",60],["hotanimepornvideos.com",60],["hotanimevideos.com",60],["hotasianpussysex.com",60],["hotjapaneseshows.com",60],["hotmaturetube.com",60],["hotmilfs.pro",60],["hotorientalporn.com",60],["hotpornyoung.com",60],["hotxxxjapanese.com",60],["hotxxxpussy.com",60],["indiafree.net",60],["indianpornvideo.online",60],["japanpornclip.com",60],["japanesetube.video",60],["japansex.me",60],["japanesexxxporn.com",60],["japansporno.com",60],["japanxxx.asia",60],["japanxxxworld.com",60],["keezmovies.surf",60],["lingeriefuckvideo.com",60],["liveanimalporn.zooo.club",60],["madhentaitube.com",60],["megahentaitube.com",60],["megajapanesesex.com",60],["megajapantube.com",60],["milfxxxpussy.com",60],["momsextube.pro",60],["momxxxass.com",60],["monkeyanimalporn.com",60],["moviexxx.mobi",60],["newanimeporn.com",60],["newjapanesexxx.com",60],["nicematureporn.com",60],["nudeplayboygirls.com",60],["openxxxporn.com",60],["originalindianporn.com",60],["originalteentube.com",60],["pig-fuck.com",60],["plainasianporn.com",60],["popularasianxxx.com",60],["pornanimetube.com",60],["pornasians.pro",60],["pornhat.asia",60],["pornjapanesesex.com",60],["pornomovies.asia",60],["pornvintage.tv",60],["primeanimesex.com",60],["realjapansex.com",60],["realmomsex.com",60],["redsexhub.com",60],["retroporn.world",60],["retrosexfilms.com",60],["sex-free-movies.com",60],["sexanimesex.com",60],["sexanimetube.com",60],["sexjapantube.com",60],["sexmomvideos.com",60],["sexteenxxxtube.com",60],["sexxxanimal.com",60],["sexyoungtube.com",60],["sexyvintageporn.com",60],["sopornmovies.com",60],["spicyvintageporn.com",60],["sunporno.club",60],["tabooanime.club",60],["teenextrem.com",60],["teenfucksex.com",60],["teenhost.net",60],["teensexass.com",60],["tnaflix.asia",60],["totalfuckmovies.com",60],["totalmaturefuck.com",60],["txxx.asia",60],["voyeurpornsex.com",60],["warmteensex.com",60],["wetasiancreampie.com",60],["wildhentaitube.com",60],["wowyoungsex.com",60],["xhamster-art.com",60],["xmovie.pro",60],["xnudevideos.com",60],["xnxxjapon.com",60],["xpics.me",60],["xvide.me",60],["xxxanimefuck.com",60],["xxxanimevideos.com",60],["xxxanimemovies.com",60],["xxxhentaimovies.com",60],["xxxhothub.com",60],["xxxjapaneseporntube.com",60],["xxxlargeporn.com",60],["xxxmomz.com",60],["xxxpornmilf.com",60],["xxxpussyclips.com",60],["xxxpussysextube.com",60],["xxxretrofuck.com",60],["xxxsex.pro",60],["xxxsexyjapanese.com",60],["xxxteenyporn.com",60],["xxxvideo.asia",60],["xxxvideos.ink",60],["xxxyoungtv.com",60],["youjizzz.club",60],["youngpussyfuck.com",60],["bayimg.com",61],["celeb.gate.cc",62],["kinoger.re",63],["desi.upn.bio",63],["masterplayer.xyz",65],["pussy-hub.com",65],["porndex.com",66],["compucalitv.com",67],["diariodenavarra.es",69],["pennlive.com",72],["beautypageants.indiatimes.com",73],["01fmovies.com",74],["lnk2.cc",76],["fullhdxxx.com",77],["luscious.net",[77,116]],["classicpornbest.com",77],["1youngteenporn.com",77],["www-daftarharga.blogspot.com",[77,166]],["miraculous.to",[77,172]],["vtube.to",77],["xstory-fr.com",77],["gosexpod.com",78],["otakukan.com",79],["xcafe.com",80],["pornfd.com",80],["venusarchives.com",80],["imagehaha.com",81],["imagenpic.com",81],["imageshimage.com",81],["imagetwist.com",81],["k1nk.co",82],["watchasians.cc",82],["lulustream.com",82],["luluvdo.com",82],["web.de",83],["news18.com",84],["thelanb.com",85],["dropmms.com",85],["softwaredescargas.com",86],["cracking-dz.com",87],["anitube.ninja",88],["gazzetta.it",89],["port.hu",91],["dziennikbaltycki.pl",92],["dzienniklodzki.pl",92],["dziennikpolski24.pl",92],["dziennikzachodni.pl",92],["echodnia.eu",92],["expressbydgoski.pl",92],["expressilustrowany.pl",92],["gazetakrakowska.pl",92],["gazetalubuska.pl",92],["gazetawroclawska.pl",92],["gk24.pl",92],["gloswielkopolski.pl",92],["gol24.pl",92],["gp24.pl",92],["gra.pl",92],["gs24.pl",92],["kurierlubelski.pl",92],["motofakty.pl",92],["naszemiasto.pl",92],["nowiny24.pl",92],["nowosci.com.pl",92],["nto.pl",92],["polskatimes.pl",92],["pomorska.pl",92],["poranny.pl",92],["sportowy24.pl",92],["strefaagro.pl",92],["strefabiznesu.pl",92],["stronakobiet.pl",92],["telemagazyn.pl",92],["to.com.pl",92],["wspolczesna.pl",92],["course9x.com",92],["courseclub.me",92],["azrom.net",92],["alttyab.net",92],["esopress.com",92],["nesiaku.my.id",92],["onemanhua.com",93],["freeindianporn.mobi",93],["dr-farfar.com",94],["boyfriendtv.com",95],["brandstofprijzen.info",96],["netfuck.net",97],["blog24.me",[97,109]],["kisahdunia.com",97],["javsex.to",97],["nulljungle.com",97],["oyuncusoruyor.com",97],["pbarecap.ph",97],["sourds.net",97],["teknobalta.com",97],["tvinternetowa.info",97],["sqlserveregitimleri.com",97],["tutcourse.com",97],["readytechflip.com",97],["novinhastop.com",97],["warddogs.com",97],["dvdgayporn.com",97],["iimanga.com",97],["tinhocdongthap.com",97],["tremamnon.com",97],["423down.com",97],["brizzynovel.com",97],["jugomobile.com",97],["freecodezilla.net",97],["iconmonstr.com",97],["gay-tubes.cc",97],["rbxscripts.net",97],["comentariodetexto.com",97],["wordpredia.com",97],["livsavr.co",97],["allfaucet.xyz",[97,109]],["titbytz.tk",97],["replica-watch.info",97],["alludemycourses.com",97],["kayifamilytv.com",97],["iir.ai",98],["gameofporn.com",100],["qpython.club",101],["antifake-funko.fr",101],["dktechnicalmate.com",101],["recipahi.com",101],["e9china.net",102],["ontools.net",102],["marketbeat.com",103],["hentaipornpics.net",104],["apps2app.com",105],["upshrink.com",106],["fitdynamos.com",108],["ohionowcast.info",109],["wiour.com",109],["bitzite.com",[109,114,115]],["appsbull.com",109],["diudemy.com",109],["maqal360.com",[109,117,118]],["bitcotasks.com",109],["videolyrics.in",109],["manofadan.com",109],["cempakajaya.com",109],["tagecoin.com",109],["doge25.in",109],["king-ptcs.com",109],["naijafav.top",109],["ourcoincash.xyz",109],["sh.techsamir.com",109],["claimcoins.site",109],["cryptosh.pro",109],["eftacrypto.com",109],["fescrypto.com",109],["earnhub.net",109],["kiddyshort.com",109],["tronxminer.com",109],["homeairquality.org",110],["cety.app",[111,112]],["exego.app",111],["cutlink.net",111],["cutsy.net",111],["cutyurls.com",111],["cutty.app",111],["cutnet.net",111],["cuty.me",112],["upfiles.app",[112,127]],["upfiles-urls.com",[112,127]],["gamerxyt.com",112],["adcrypto.net",113],["admediaflex.com",113],["aduzz.com",113],["bitcrypto.info",113],["cdrab.com",113],["datacheap.io",113],["hbz.us",113],["savego.org",113],["owsafe.com",113],["sportweb.info",113],["gfx-station.com",114],["buzzheavier.com",115],["flashbang.sh",115],["trashbytes.net",115],["aiimgvlog.fun",116],["6indianporn.com",116],["amateurebonypics.com",116],["amateuryoungpics.com",116],["cinemabg.net",116],["coomer.su",116],["desimmshd.com",116],["frauporno.com",116],["givemeaporn.com",116],["hitomi.la",116],["jav-asia.top",116],["javf.net",116],["javfull.net",116],["javideo.net",116],["kemono.su",116],["kr18plus.com",116],["pilibook.com",116],["pornborne.com",116],["porngrey.com",116],["qqxnxx.com",116],["sexvideos.host",116],["submilf.com",116],["subtaboo.com",116],["tktube.com",116],["xfrenchies.com",116],["soft98.ir",[117,135]],["moderngyan.com",119],["sattakingcharts.in",119],["freshbhojpuri.com",119],["bgmi32bitapk.in",119],["bankshiksha.in",119],["earn.mpscstudyhub.com",119],["earn.quotesopia.com",119],["money.quotesopia.com",119],["best-mobilegames.com",119],["learn.moderngyan.com",119],["bharatsarkarijobalert.com",119],["quotesopia.com",119],["creditsgoal.com",119],["coingraph.us",120],["momo-net.com",120],["maxgaming.fi",120],["cybercityhelp.in",121],["travel.vebma.com",122],["cloud.majalahhewan.com",122],["crm.cekresi.me",122],["ai.tempatwisata.pro",122],["pinloker.com",122],["sekilastekno.com",122],["mrproblogger.com",123],["themezon.net",123],["dagensnytt.com",123],["hblinks.pro",124],["hubcdn.vip",124],["90fpsconfig.in",124],["katdrive.link",124],["kmhd.net",124],["bollydrive.rest",124],["azmath.info",125],["downfile.site",125],["downphanmem.com",125],["expertvn.com",125],["memangbau.com",125],["trangchu.news",125],["aztravels.net",125],["ielts-isa.edu.vn",125],["techedubyte.com",[125,233]],["jpopsingles.eu",125],["aipebel.com",125],["link.paid4link.com",126],["vulture.com",128],["megaplayer.bokracdn.run",129],["hentaistream.com",130],["siteunblocked.info",131],["larvelfaucet.com",132],["feyorra.top",132],["claimtrx.com",132],["moviesyug.net",133],["w4files.ws",133],["parispi.net",134],["flatai.org",134],["hentaicloud.com",135],["justin.mp3quack.lol",135],["tio.ch",136],["lavanguardia.com",136],["tu.no",136],["paperzonevn.com",137],["dailyvideoreports.net",138],["lewd.ninja",139],["systemnews24.com",140],["incestvidz.com",141],["niusdiario.es",142],["playporngames.com",143],["javx.cc",143],["movi.pk",[144,147]],["cutesexyteengirls.com",146],["0dramacool.net",147],["185.53.88.104",147],["185.53.88.204",147],["185.53.88.15",147],["123movies4k.net",147],["1rowsports.com",147],["4share-mp3.net",147],["9animetv.to",147],["720pstream.me",147],["aagmaal.com",147],["abysscdn.com",147],["ajkalerbarta.com",147],["androidapks.biz",147],["androidsite.net",147],["animeonlinefree.org",147],["animesite.net",147],["animespank.com",147],["aniworld.to",147],["apkmody.io",147],["appsfree4u.com",147],["audioz.download",147],["awafim.tv",147],["bdnewszh.com",147],["beastlyprints.com",147],["bengalisite.com",147],["bestfullmoviesinhd.org",147],["betteranime.net",147],["blacktiesports.live",147],["buffsports.stream",147],["ch-play.com",147],["clickforhire.com",147],["cloudy.pk",147],["computercrack.com",147],["coolcast2.com",147],["crackedsoftware.biz",147],["crackfree.org",147],["cracksite.info",147],["cryptoblog24.info",147],["cuatrolatastv.blogspot.com",147],["cydiasources.net",147],["decmelfot.xyz",147],["dirproxy.com",147],["dopebox.to",147],["downloadapk.info",147],["downloadapps.info",147],["downloadgames.info",147],["downloadmusic.info",147],["downloadsite.org",147],["downloadwella.com",147],["ebooksite.org",147],["educationtips213.blogspot.com",147],["egyup.live",147],["elgoles.pro",147],["embed.meomeo.pw",147],["embed.scdn.to",147],["emulatorsite.com",147],["essaysharkwriting.club",147],["exploreera.net",147],["extrafreetv.com",147],["fakedetail.com",147],["fclecteur.com",147],["files.im",147],["flexyhit.com",147],["fmoviefree.net",147],["fmovies24.com",147],["freeflix.info",147],["freemoviesu4.com",147],["freeplayervideo.com",147],["freesoccer.net",147],["fseries.org",147],["gamefast.org",147],["gamesite.info",147],["gettapeads.com",147],["gmanga.me",147],["gocast123.me",147],["gogohd.net",147],["gogoplay5.com",147],["gooplay.net",147],["gostreamon.net",147],["happy2hub.org",147],["harimanga.com",147],["healthnewsreel.com",147],["hexupload.net",147],["hinatasoul.com",147],["hindisite.net",147],["holymanga.net",147],["hxfile.co",147],["isosite.org",147],["iv-soft.com",147],["januflix.expert",147],["jewelry.com.my",147],["johnwardflighttraining.com",147],["kabarportal.com",147],["kstorymedia.com",147],["la123movies.org",147],["lespassionsdechinouk.com",147],["lilymanga.net",147],["linksdegrupos.com.br",147],["linkz.wiki",147],["livestreamtv.pk",147],["macsite.info",147],["mangasite.org",147],["manhuascan.com",147],["megamovies.org",147],["membed.net",147],["moddroid.com",147],["moviefree2.com",147],["movies-watch.com.pk",147],["moviesite.app",147],["moviesonline.fm",147],["moviesx.org",147],["msmoviesbd.com",147],["musicsite.biz",147],["myfernweh.com",147],["myviid.com",147],["nazarickol.com",147],["noob4cast.com",147],["nsw2u.com",[147,273]],["oko.sh",147],["olympicstreams.me",147],["orangeink.pk",147],["pahaplayers.click",147],["patchsite.net",147],["pdfsite.net",147],["play1002.com",147],["player-cdn.com",147],["productkeysite.com",147],["projectfreetv.one",147],["romsite.org",147],["rufiguta.com",147],["rytmp3.io",147],["send.cm",147],["seriesite.net",147],["seriezloaded.com.ng",147],["serijehaha.com",147],["shrugemojis.com",147],["siteapk.net",147],["siteflix.org",147],["sitegames.net",147],["sitekeys.net",147],["sitepdf.com",147],["sitetorrent.com",147],["softwaresite.net",147],["sportbar.live",147],["ssyoutube.com",147],["stardima.com",147],["stream4free.live",147],["superapk.org",147],["supermovies.org",147],["tainio-mania.online",147],["talaba.su",147],["tamilguns.org",147],["tatabrada.tv",147],["techtrendmakers.com",147],["thememypc.net",147],["thripy.com",147],["travelplanspro.com",147],["turcasmania.com",147],["tusfiles.com",147],["tvonlinesports.com",147],["ultramovies.org",147],["uploadbank.com",147],["urdubolo.pk",147],["vidspeeds.com",147],["warezsite.net",147],["watchmovies2.com",147],["watchmoviesforfree.org",147],["watchofree.com",147],["watchsite.net",147],["watchsouthpark.tv",147],["watchtvch.club",147],["web.livecricket.is",147],["webseries.club",147],["worldcupstream.pm",147],["y2mate.com",147],["youapk.net",147],["youtube4kdownloader.com",147],["yts-subs.com",147],["haho.moe",148],["nicy-spicy.pw",149],["novelmultiverse.com",150],["mylegalporno.com",151],["embedsports.me",152],["embedstream.me",152],["jumbtv.com",152],["reliabletv.me",152],["xnxx.com",155],["thecut.com",156],["novelism.jp",157],["alphapolis.co.jp",158],["game3rb.com",159],["javhub.net",159],["thotvids.com",160],["berklee.edu",161],["rawkuma.com",[162,163]],["moviesjoyhd.to",163],["cineb.rs",163],["imeteo.sk",164],["youtubemp3donusturucu.net",165],["surfsees.com",167],["vivo.st",[168,169]],["alueviesti.fi",171],["kiuruvesilehti.fi",171],["lempaala.ideapark.fi",171],["olutposti.fi",171],["urjalansanomat.fi",171],["tainhanhvn.com",173],["titantv.com",174],["3cinfo.net",175],["camarchive.tv",176],["crownimg.com",176],["freejav.guru",176],["hentai2read.com",176],["icyporno.com",176],["illink.net",176],["javtiful.com",176],["m-hentai.net",176],["pornblade.com",176],["pornfelix.com",176],["pornxxxxtube.net",176],["redwap.me",176],["redwap2.com",176],["redwap3.com",176],["sunporno.com",176],["tubxporn.xxx",176],["ver-comics-porno.com",176],["ver-mangas-porno.com",176],["xanimeporn.com",176],["xxxvideohd.net",176],["zetporn.com",176],["simpcity.su",177],["cocomanga.com",178],["animelatinohd.com",178],["sampledrive.in",179],["sportnews.to",179],["soccershoes.blog",179],["mcleaks.net",180],["explorecams.com",180],["minecraft.buzz",180],["chillx.top",181],["playerx.stream",181],["m.liputan6.com",183],["stardewids.com",[183,209]],["ingles.com",184],["spanishdict.com",184],["surfline.com",185],["rureka.com",186],["bunkr.is",187],["freepreset.net",188],["amateur8.com",189],["freeporn8.com",189],["maturetubehere.com",189],["embedo.co",190],["corriere.it",191],["oggi.it",191],["2the.space",192],["file.gocmod.com",194],["apkcombo.com",195],["winfuture.de",196],["sponsorhunter.com",197],["novelssites.com",198],["haxina.com",199],["scimagojr.com",199],["torrentmac.net",200],["udvl.com",201],["apimate.net",202],["dynamicminister.net",202],["gofirmware.com",202],["dlpanda.com",203],["socialmediagirls.com",204],["einrichtungsbeispiele.de",205],["weadown.com",206],["molotov.tv",207],["freecoursesonline.me",208],["adelsfun.com",208],["advantien.com",208],["bailbondsfinder.com",208],["bigpiecreative.com",208],["childrenslibrarylady.com",208],["classifarms.com",208],["comtasq.ca",208],["crone.es",208],["ctrmarketingsolutions.com",208],["dropnudes.com",208],["ftuapps.dev",208],["genzsport.com",208],["ghscanner.com",208],["grsprotection.com",208],["gruporafa.com.br",208],["inmatefindcalifornia.com",208],["inmatesearchidaho.com",208],["itsonsitetv.com",208],["mfmfinancials.com",208],["myproplugins.com",208],["onehack.us",208],["ovester.com",208],["paste.bin.sx",208],["privatenudes.com",208],["renoconcrete.ca",208],["richieashbeck.com",208],["sat.technology",208],["short1ink.com",208],["stpm.co.uk",208],["wegotcookies.co",208],["mathcrave.com",208],["marinetraffic.live",208],["commands.gg",209],["smgplaza.com",210],["emturbovid.com",211],["findjav.com",211],["javggvideo.xyz",211],["mmtv01.xyz",211],["stbturbo.xyz",211],["streamsilk.com",211],["freepik.com",212],["diyphotography.net",214],["bitchesgirls.com",215],["shopforex.online",216],["hiraethtranslation.com",217],["programmingeeksclub.com",218],["diendancauduong.com",219],["androidadult.com",220],["parentcircle.com",221],["h-game18.xyz",222],["wheelofgold.com",223],["davescomputertips.com",224],["historyofroyalwomen.com",224],["skill4ltu.eu",226],["lifestyle.bg",227],["news.bg",227],["topsport.bg",227],["webcafe.bg",227],["freepikdownloader.com",228],["freepasses.org",229],["iusedtobeaboss.com",230],["androidpolice.com",231],["cbr.com",231],["gamerant.com",231],["howtogeek.com",231],["thegamer.com",231],["blogtruyenmoi.com",232],["repretel.com",234],["tubereader.me",234],["igay69.com",235],["graphicget.com",236],["qiwi.gg",[237,238]],["sonixgvn.net",239],["netcine2.la",240],["alliptvlinks.com",241],["smashyplayer.top",242],["xvideos.com",243],["xvideos2.com",243],["homemoviestube.com",244],["sexseeimage.com",244],["ukchat.co.uk",247],["hivelr.com",248],["skidrowcodex.net",249],["takimag.com",250],["digi.no",251],["th.gl",252],["twi-fans.com",253],["learn-cpp.org",254],["terashare.co",255],["pornwex.tv",256],["smithsonianmag.com",257],["homesports.net",258],["realmoasis.com",259],["javfc2.xyz",260],["gobankingrates.com",261],["hiddenleaf.to",262],["ronorp.net",263],["videovak.com",266],["a-lohas.jp",267],["akirabox.com",268],["idnes.cz",[269,270]],["cbc.ca",271],["japscan.lol",272]]);

const entitiesMap = new Map([["kissasian",5],["ganool",5],["pirate",5],["piratebay",5],["pirateproxy",5],["proxytpb",5],["thepiratebay",5],["limetorrents",[6,10]],["king-pes",6],["depedlps",6],["komikcast",6],["idedroidsafelink",6],["links-url",6],["ak4eg",6],["streanplay",7],["steanplay",7],["pahe",10],["yts",10],["tube8",10],["topeuropix",10],["moviescounter",10],["torrent9",10],["desiremovies",10],["movs4u",10],["uwatchfree",10],["hydrax",10],["4movierulz",10],["projectfreetv",10],["arabseed",10],["btdb",[10,49]],["world4ufree",10],["streamsport",10],["rojadirectatvhd",10],["userload",10],["adyou",12],["fxporn69",15],["rexporn",19],["movies07",19],["pornocomics",19],["pornomoll",23],["gsurl",24],["freecoursesonline",25],["lordpremium",25],["todovieneok",25],["novablogitalia",25],["anisubindo",25],["btvsports",25],["stream4free",25],["mimaletadepeliculas",26],["burningseries",27],["dz4soft",28],["yoututosjeff",28],["ebookmed",28],["lanjutkeun",28],["novelasesp",28],["singingdalong",28],["doujindesu",28],["xmovies8",31],["mega-dvdrip",38],["peliculas-dvdrip",38],["desbloqueador",39],["newpelis",[40,47]],["pelix",[40,47]],["allcalidad",[40,176]],["khatrimaza",40],["camwhores",41],["camwhorestv",41],["uproxy",41],["mirrorace",53],["mixdrp",58],["asiansex",60],["japanfuck",60],["japanporn",60],["teensex",60],["vintagetube",60],["xxxmovies",60],["zooqle",64],["hdfull",68],["mangamanga",70],["streameast",71],["thestreameast",71],["vev",75],["vidop",75],["zone-telechargement",77],["1337x",77],["x1337x",77],["megalink",82],["gmx",83],["mega1080p",88],["9hentai",90],["gaypornhdfree",97],["cinemakottaga",97],["privatemoviez",97],["apkmaven",97],["popcornstream",99],["fc-lc",107],["pornktube",116],["watchseries",116],["milfnut",120],["hubdrive",124],["azsoft",125],["pagalmovies",133],["7starhd",133],["jalshamoviez",133],["9xupload",133],["bdupload",133],["desiupload",133],["rdxhd1",133],["nuvid",135],["moviessources",145],["0gomovie",147],["0gomovies",147],["123moviefree",147],["1kmovies",147],["1madrasdub",147],["1primewire",147],["2embed",147],["2madrasdub",147],["2umovies",147],["4anime",147],["adblockplustape",147],["altadefinizione01",147],["atomixhq",147],["beinmatch",147],["brmovies",147],["cima4u",147],["clicknupload",147],["cmovies",147],["cricfree",147],["crichd",147],["dood",147],["f1stream",147],["faselhd",147],["fbstream",147],["filemoon",147],["filepress",[147,213]],["filmlinks4u",147],["filmpertutti",147],["filmyzilla",147],["fmovies",147],["french-stream",147],["fzlink",147],["gofilms4u",147],["gogoanime",147],["gomoviz",147],["hdmoviefair",147],["hdmovies4u",147],["hdmovies50",147],["hdmoviesfair",147],["hh3dhay",147],["hindilinks4u",147],["hotmasti",147],["hurawatch",147],["klmanga",147],["klubsports",147],["libertestreamvf",147],["livetvon",147],["manga1000",147],["manga1001",147],["mangaraw",147],["mangarawjp",147],["mlbstream",147],["motogpstream",147],["movierulz",147],["movies123",147],["movies2watch",147],["moviesden",147],["moviezaddiction",147],["nbastream",147],["netcine",147],["nflstream",147],["nhlstream",147],["onlinewatchmoviespk",147],["pctfenix",147],["pctnew",147],["pksmovies",147],["plyjam",147],["plylive",147],["pogolinks",147],["popcorntime",147],["poscitech",147],["rugbystreams",147],["shahed4u",147],["sflix",147],["sitesunblocked",147],["solarmovies",147],["sportcast",147],["sportskart",147],["sports-stream",147],["streaming-french",147],["streamers",147],["streamingcommunity",[147,193]],["strikeout",147],["t20cup",147],["tennisstreams",147],["torrentdosfilmes",147],["toonanime",147],["tvply",147],["ufcstream",147],["uptomega",147],["uqload",147],["vudeo",147],["vidoo",147],["vipbox",147],["vipboxtv",147],["vipleague",147],["viprow",147],["yesmovies",147],["yomovies",147],["yomovies1",147],["yt2mp3s",147],["kat",147],["katbay",147],["kickass",147],["kickasshydra",147],["kickasskat",147],["kickass2",147],["kickasstorrents",147],["kat2",147],["kattracker",147],["thekat",147],["thekickass",147],["kickassz",147],["kickasstorrents2",147],["topkickass",147],["kickassgo",147],["kkickass",147],["kkat",147],["kickasst",147],["kick4ss",147],["guardaserie",153],["cine-calidad",154],["xvideos",155],["videovard",170],["gntai",176],["grantorrent",176],["mejortorrent",176],["mejortorrento",176],["mejortorrents",176],["mejortorrents1",176],["mejortorrentt",176],["shineads",179],["bg-gledai",208],["gledaitv",208],["motchill",225],["upns",242],["readcomiconline",245],["nekopoi",246],["gdflix",264],["a1movies",265]]);

const exceptionsMap = new Map([["forum.soft98.ir",[117,135]]]);

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
