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

const argsList = [["load","Object"],["load","hard_block"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["error"],["load","onload"],["","BACK"],["load","getComputedStyle"],["load","adsense"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","window.open"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["mousedown","preventDefault"],["load","nextFunction"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["click","_blank"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["DOMContentLoaded","isMobile"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["load","ads"],["click","document.createElement"],["click","ShouldShow"],["click","clickCount"],["mousedown","localStorage"],["DOMContentLoaded","document.documentElement.lang.toLowerCase"],["","adsense"],["/adblock/i"],["load","doTest"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","daadb_get_data_fetch"],["click","splashPage"],["load","detect-modal"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["load",".call(this"],["load","adblock"],["/touchmove|wheel/","preventDefault()"],["load","showcfkModal"],["click","attached","elements","div[class=\"share-embed-container\"]"],["click","fp-screen"],["DOMContentLoaded","leaderboardAd"],["DOMContentLoaded","fetch"],["mousedown","shown_at"],["click","openPopupForChapter"],["click","doThePop"],["DOMContentLoaded","blockAdBlock"],["DOMContentLoaded","location.href"],["click","openDirectLinkAd"],["load","detect"],["DOMContentLoaded","history.pushState"],["DOMContentLoaded","showPopup"],["click","PopUnder"],["DOMContentLoaded","history.go"],["load","puHref"],["click","Ads"],["load","popMagic"],["DOMContentLoaded","iframe"],["","/_blank/i"],["blur","stopCountdown"],["load","htmls"],["blur","focusOut"],["click","/handleClick|popup/"],["click","open"],["load","bypass"],["","popMagic"],["contextmenu","preventDefault"],["visibilitychange","remainingSeconds"],["click","Popunder"],["contextmenu"],["submit","validateForm"],["blur","counter"],["click","maxclick"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["beforeunload"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["message"],["","/pop|_blank/"],["click","allclick_Public"],["DOMContentLoaded","/dyn\\.ads|loadAdsDelayed/"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["","about:blank"],["click","popMagic"],["","shouldShow"],["DOMContentLoaded","adsSrc"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["","exoJsPop101"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["click","popName"],["blur"],["DOMContentLoaded","clientHeight"],["load","error-report.com"],["click","window.focus"],["click","event.dispatch"],["","Math"],["DOMContentLoaded","popupurls"],["","tabUnder"],["click","window.open"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["load","Ads"],["DOMContentLoaded","document.documentElement.lang"],["DOMContentLoaded","googlesyndication"],["np.evtdetect"],["load","popunder"],["DOMContentLoaded",".clientHeight"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["load","document.getElementById"],["mousedown","tabUnder"],["click","popactive"],["load","adsbygoogle"],["DOMContentLoaded","location.replace"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["error","blocker"],["click","alink"],["load","[native code]"],["","daadb"],["load","google-analytics"],["","sessionStorage"],["click","/form\\.submit|urlToOpen/"],["DOMContentLoaded","overlays"],["load","fetch"],["click","pingUrl"],["mousedown","scoreUrl"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["load","/navpromo|clipPath|0p'\\+/"],["DOMContentLoaded","/\\({2}=>\\{|TcUAm|\\+'vp|text-indent|\\/1'|NeSi|Niger|Charger|GoodDay|funct'|t'\\+'y/"],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",1],["timesofindia.indiatimes.com",2],["drrtyr.mx",2],["pinoyalbums.com",2],["multiplayer.it",2],["mediafire.com",[3,4]],["pinsystem.co.uk",5],["ancensored.com",5],["mp3fiber.com",[5,28]],["xrivonet.info",5],["afreesms.com",6],["tu.no",6],["tio.ch",6],["lavanguardia.com",6],["eplayer.click",6],["kingofdown.com",7],["radiotormentamx.com",7],["quelleestladifference.fr",7],["otakuworldsite.blogspot.com",7],["ad-itech.blogspot.com",7],["agar.pro",7],["unlockapk.com",7],["mobdi3ips.com",7],["socks24.org",7],["interviewgig.com",7],["javaguides.net",7],["almohtarif-tech.net",7],["forum.release-apk.com",7],["devoloperxda.blogspot.com",7],["zwergenstadt.com",7],["primedeportes.es",7],["9goals.live",7],["upxin.net",7],["ciudadblogger.com",7],["ke-1.com",7],["secretsdeepweb.blogspot.com",7],["bit-shares.com",7],["itdmusics.com",7],["aspdotnet-suresh.com",7],["tudo-para-android.com",7],["urdulibrarypk.blogspot.com",7],["zerotopay.com",7],["akw.to",7],["mawsueaa.com",7],["hesgoal-live.io",7],["king-shoot.io",7],["bibme.org",11],["citationmachine.net",11],["easybib.com",12],["vermangasporno.com",13],["imgtorrnt.in",13],["picbaron.com",[13,156]],["letmejerk.com",13],["letmejerk2.com",13],["letmejerk3.com",13],["letmejerk4.com",13],["letmejerk5.com",13],["letmejerk6.com",13],["letmejerk7.com",13],["dlapk4all.com",13],["kropic.com",13],["kvador.com",13],["pdfindir.net",13],["brstej.com",13],["topwwnews.com",13],["xsanime.com",13],["vidlo.us",13],["put-locker.com",13],["youx.xxx",13],["animeindo.asia",13],["masahub.net",13],["adclickersbot.com",13],["badtaste.it",14],["shemalez.com",16],["tubepornclassic.com",16],["gotporn.com",17],["freepornrocks.com",17],["tvhai.org",17],["realgfporn.com",[18,19]],["thisvid.com",19],["xvideos-downloader.net",19],["imgspice.com",20],["vikiporn.com",21],["tnaflix.com",21],["hentai2w.com",[21,210]],["yourlust.com",21],["hotpornfile.org",21],["watchfreexxx.net",21],["vintageporntubes.com",21],["angelgals.com",21],["babesexy.com",21],["porndaa.com",21],["ganstamovies.com",21],["youngleak.com",21],["porndollz.com",21],["xnxxvideo.pro",21],["xvideosxporn.com",21],["filmpornofrancais.fr",21],["pictoa.com",[21,43]],["tubator.com",21],["adultasianporn.com",21],["nsfwmonster.com",21],["girlsofdesire.org",21],["gaytail.com",21],["fetish-bb.com",21],["rumporn.com",21],["soyoungteens.com",21],["zubby.com",21],["lesbian8.com",21],["gayforfans.com",21],["reifporn.de",21],["javtsunami.com",21],["18tube.sex",21],["xxxextreme.org",21],["amateurs-fuck.com",21],["sex-amateur-clips.com",21],["hentaiworld.tv",21],["dads-banging-teens.com",21],["home-xxx-videos.com",21],["mature-chicks.com",21],["teens-fucking-matures.com",21],["hqbang.com",21],["darknessporn.com",21],["familyporner.com",21],["freepublicporn.com",21],["pisshamster.com",21],["punishworld.com",21],["xanimu.com",21],["pornhd.com",22],["cnnamador.com",[22,32]],["cle0desktop.blogspot.com",22],["turkanime.co",22],["camclips.tv",[22,44]],["blackpornhq.com",22],["xsexpics.com",22],["ulsex.net",22],["wannafreeporn.com",22],["ytube2dl.com",22],["multiup.us",22],["protege-torrent.com",22],["pussyspace.com",[23,24]],["pussyspace.net",[23,24]],["empflix.com",25],["cpmlink.net",26],["bdsmstreak.com",26],["cutpaid.com",26],["pornforrelax.com",26],["fatwhitebutt.com",26],["short.pe",27],["totaldebrid.org",28],["neko-miku.com",28],["elsfile.org",28],["venstrike.jimdofree.com",28],["schrauben-normen.de",28],["avengerinator.blogspot.com",28],["link-to.net",28],["hanimesubth.com",28],["gsmturkey.net",28],["adshrink.it",28],["presentation-ppt.com",28],["mangacanblog.com",28],["pekalongan-cits.blogspot.com",28],["4tymode.win",28],["eurotruck2.com.br",28],["tiroalpaloes.com",28],["tiroalpaloes.net",28],["linkvertise.com",28],["reifenrechner.at",28],["tire-size-calculator.info",28],["linuxsecurity.com",28],["itsguider.com",28],["cotravinh.blogspot.com",28],["itudong.com",28],["shortx.net",28],["lecturel.com",28],["bakai.org",28],["nar.k-ba.net",28],["tiroalpalo.org",28],["bs.to",30],["efukt.com",30],["generacionretro.net",31],["nuevos-mu.ucoz.com",31],["micloudfiles.com",31],["mimaletamusical.blogspot.com",31],["visionias.net",31],["b3infoarena.in",31],["lurdchinexgist.blogspot.com",31],["thefreedommatrix.blogspot.com",31],["hentai-vl.blogspot.com",31],["projetomotog.blogspot.com",31],["ktmx.pro",31],["lirik3satu.blogspot.com",31],["marketmovers.it",31],["pharmaguideline.com",31],["safemaru.blogspot.com",31],["mixloads.com",31],["mangaromance.eu",31],["interssh.com",31],["freesoftpdfdownload.blogspot.com",31],["cirokun.blogspot.com",31],["myadslink.com",31],["blackavelic.com",31],["server.satunivers.tv",31],["eg-akw.com",31],["xn--mgba7fjn.cc",31],["flashingjungle.com",32],["ma-x.org",33],["lavozdegalicia.es",33],["ddwloclawek.pl",33],["ki24.info",33],["xmovies08.org",35],["globaldjmix.com",36],["zazzybabes.com",37],["haaretz.co.il",38],["haaretz.com",38],["slate.com",39],["megalinks.info",40],["megapastes.com",40],["mega-mkv.com",[40,41]],["mkv-pastes.com",40],["zpaste.net",40],["zlpaste.net",40],["9xlinks.site",40],["zona-leros.net",41],["acortarm.xyz",42],["cine.to",[43,215]],["kissasia.cc",43],["digjav.com",44],["videoszoofiliahd.com",45],["xxxtubezoo.com",46],["zooredtube.com",46],["uii.io",47],["megacams.me",48],["rlslog.net",48],["porndoe.com",49],["acienciasgalilei.com",51],["playrust.io",52],["payskip.org",53],["short-url.link",54],["tubedupe.com",55],["mcrypto.club",56],["fatgirlskinny.net",57],["polska-ie.com",57],["windowsmatters.com",57],["canaltdt.es",58],["masbrooo.com",58],["2ndrun.tv",58],["oncehelp.com",59],["curto.win",59],["smallseotools.com",60],["macwelt.de",62],["pcwelt.de",62],["capital.de",62],["geo.de",62],["allmomsex.com",63],["allnewindianporn.com",63],["analxxxvideo.com",63],["animalextremesex.com",63],["anime3d.xyz",63],["animefuckmovies.com",63],["animepornfilm.com",63],["animesexbar.com",63],["animesexclip.com",63],["animexxxsex.com",63],["animexxxfilms.com",63],["anysex.club",63],["apetube.asia",63],["asianfuckmovies.com",63],["asianfucktube.com",63],["asianporn.sexy",63],["asiansexcilps.com",63],["beeg.fund",63],["beegvideoz.com",63],["bestasiansex.pro",63],["bravotube.asia",63],["brutalanimalsfuck.com",63],["candyteenporn.com",63],["daddyfuckmovies.com",63],["desifuckonline.com",63],["exclusiveasianporn.com",63],["exteenporn.com",63],["fantasticporn.net",63],["fantasticyoungporn.com",63],["fineasiansex.com",63],["firstasianpussy.com",63],["freeindiansextube.com",63],["freepornasians.com",63],["freerealvideo.com",63],["fuck-beeg.com",63],["fuck-xnxx.com",63],["fuckasian.pro",63],["fuckfuq.com",63],["fuckundies.com",63],["gojapaneseporn.com",63],["golderotica.com",63],["goodyoungsex.com",63],["goyoungporn.com",63],["hardxxxmoms.com",63],["hdvintagetube.com",63],["hentaiporn.me",63],["hentaisexfilms.com",63],["hentaisexuality.com",63],["hot-teens-movies.mobi",63],["hotanimepornvideos.com",63],["hotanimevideos.com",63],["hotasianpussysex.com",63],["hotjapaneseshows.com",63],["hotmaturetube.com",63],["hotmilfs.pro",63],["hotorientalporn.com",63],["hotpornyoung.com",63],["hotxxxjapanese.com",63],["hotxxxpussy.com",63],["indiafree.net",63],["indianpornvideo.online",63],["japanpornclip.com",63],["japanesetube.video",63],["japansex.me",63],["japanesexxxporn.com",63],["japansporno.com",63],["japanxxx.asia",63],["japanxxxworld.com",63],["keezmovies.surf",63],["lingeriefuckvideo.com",63],["liveanimalporn.zooo.club",63],["madhentaitube.com",63],["megahentaitube.com",63],["megajapanesesex.com",63],["megajapantube.com",63],["milfxxxpussy.com",63],["momsextube.pro",63],["momxxxass.com",63],["monkeyanimalporn.com",63],["moviexxx.mobi",63],["newanimeporn.com",63],["newjapanesexxx.com",63],["nicematureporn.com",63],["nudeplayboygirls.com",63],["openxxxporn.com",63],["originalindianporn.com",63],["originalteentube.com",63],["pig-fuck.com",63],["plainasianporn.com",63],["popularasianxxx.com",63],["pornanimetube.com",63],["pornasians.pro",63],["pornhat.asia",63],["pornheed.online",63],["pornjapanesesex.com",63],["pornomovies.asia",63],["pornvintage.tv",63],["primeanimesex.com",63],["realjapansex.com",63],["realmomsex.com",63],["redsexhub.com",63],["retroporn.world",63],["retrosexfilms.com",63],["sex-free-movies.com",63],["sexanimesex.com",63],["sexanimetube.com",63],["sexjapantube.com",63],["sexmomvideos.com",63],["sexteenxxxtube.com",63],["sexxxanimal.com",63],["sexyoungtube.com",63],["sexyvintageporn.com",63],["sopornmovies.com",63],["spicyvintageporn.com",63],["sunporno.club",63],["tabooanime.club",63],["teenextrem.com",63],["teenfucksex.com",63],["teenhost.net",63],["teensexass.com",63],["tnaflix.asia",63],["totalfuckmovies.com",63],["totalmaturefuck.com",63],["txxx.asia",63],["voyeurpornsex.com",63],["warmteensex.com",63],["wetasiancreampie.com",63],["wildhentaitube.com",63],["wowyoungsex.com",63],["xhamster-art.com",63],["xmovie.pro",63],["xnudevideos.com",63],["xnxxjapon.com",63],["xpics.me",63],["xvide.me",63],["xxxanimefuck.com",63],["xxxanimevideos.com",63],["xxxanimemovies.com",63],["xxxhentaimovies.com",63],["xxxhothub.com",63],["xxxjapaneseporntube.com",63],["xxxlargeporn.com",63],["xxxmomz.com",63],["xxxpornmilf.com",63],["xxxpussyclips.com",63],["xxxpussysextube.com",63],["xxxretrofuck.com",63],["xxxsex.pro",63],["xxxsexyjapanese.com",63],["xxxteenyporn.com",63],["xxxvideo.asia",63],["xxxvideos.ink",63],["xxxyoungtv.com",63],["youjizzz.club",63],["youngpussyfuck.com",63],["bayimg.com",64],["celeb.gate.cc",65],["kinoger.re",66],["desi.upn.bio",66],["masterplayer.xyz",68],["pussy-hub.com",68],["porndex.com",69],["compucalitv.com",70],["diariodenavarra.es",72],["duden.de",74],["pennlive.com",76],["beautypageants.indiatimes.com",77],["01fmovies.com",78],["lnk2.cc",80],["fullhdxxx.com",81],["luscious.net",[81,156]],["classicpornbest.com",81],["xstory-fr.com",81],["1youngteenporn.com",81],["www-daftarharga.blogspot.com",[81,199]],["miraculous.to",[81,205]],["vtube.to",81],["gosexpod.com",82],["otakukan.com",83],["xcafe.com",84],["pornfd.com",84],["venusarchives.com",84],["imagehaha.com",85],["imagenpic.com",85],["imageshimage.com",85],["imagetwist.com",85],["k1nk.co",86],["watchasians.cc",86],["alexsports.xyz",86],["lulustream.com",86],["luluvdo.com",86],["web.de",87],["news18.com",88],["thelanb.com",89],["dropmms.com",89],["softwaredescargas.com",90],["cracking-dz.com",91],["anitube.ninja",92],["gazzetta.it",93],["port.hu",95],["dziennikbaltycki.pl",96],["dzienniklodzki.pl",96],["dziennikpolski24.pl",96],["dziennikzachodni.pl",96],["echodnia.eu",96],["expressbydgoski.pl",96],["expressilustrowany.pl",96],["gazetakrakowska.pl",96],["gazetalubuska.pl",96],["gazetawroclawska.pl",96],["gk24.pl",96],["gloswielkopolski.pl",96],["gol24.pl",96],["gp24.pl",96],["gra.pl",96],["gs24.pl",96],["kurierlubelski.pl",96],["motofakty.pl",96],["naszemiasto.pl",96],["nowiny24.pl",96],["nowosci.com.pl",96],["nto.pl",96],["polskatimes.pl",96],["pomorska.pl",96],["poranny.pl",96],["sportowy24.pl",96],["strefaagro.pl",96],["strefabiznesu.pl",96],["stronakobiet.pl",96],["telemagazyn.pl",96],["to.com.pl",96],["wspolczesna.pl",96],["course9x.com",96],["courseclub.me",96],["azrom.net",96],["alttyab.net",96],["esopress.com",96],["nesiaku.my.id",96],["onemanhua.com",97],["freeindianporn.mobi",97],["dr-farfar.com",98],["boyfriendtv.com",99],["brandstofprijzen.info",100],["netfuck.net",101],["blog24.me",[101,151]],["kisahdunia.com",101],["javsex.to",101],["nulljungle.com",101],["oyuncusoruyor.com",101],["pbarecap.ph",101],["sourds.net",101],["teknobalta.com",101],["tvinternetowa.info",101],["sqlserveregitimleri.com",101],["tutcourse.com",101],["readytechflip.com",101],["novinhastop.com",101],["warddogs.com",101],["dvdgayporn.com",101],["iimanga.com",101],["tinhocdongthap.com",101],["tremamnon.com",101],["423down.com",101],["brizzynovel.com",101],["jugomobile.com",101],["freecodezilla.net",101],["animekhor.xyz",101],["iconmonstr.com",101],["gay-tubes.cc",101],["rbxscripts.net",101],["comentariodetexto.com",101],["wordpredia.com",101],["livsavr.co",101],["allfaucet.xyz",[101,151]],["titbytz.tk",101],["replica-watch.info",101],["alludemycourses.com",101],["kayifamilytv.com",101],["iir.ai",102],["gameofporn.com",104],["qpython.club",105],["antifake-funko.fr",105],["dktechnicalmate.com",105],["recipahi.com",105],["e9china.net",106],["ontools.net",106],["marketbeat.com",107],["hentaipornpics.net",108],["apps2app.com",109],["alliptvlinks.com",110],["smashyplayer.top",111],["xvideos.com",112],["xvideos2.com",112],["homemoviestube.com",113],["sexseeimage.com",113],["jpopsingles.eu",115],["aipebel.com",115],["azmath.info",115],["downfile.site",115],["downphanmem.com",115],["expertvn.com",115],["memangbau.com",115],["trangchu.news",115],["aztravels.net",115],["ielts-isa.edu.vn",115],["techedubyte.com",[115,266]],["tubereader.me",117],["repretel.com",117],["dagensnytt.com",118],["mrproblogger.com",118],["themezon.net",118],["gfx-station.com",119],["bitzite.com",[119,138,151]],["historyofroyalwomen.com",120],["davescomputertips.com",120],["ukchat.co.uk",121],["hivelr.com",122],["skidrowcodex.net",123],["takimag.com",124],["digi.no",125],["th.gl",126],["scimagojr.com",127],["haxina.com",127],["cryptofenz.xyz",127],["twi-fans.com",128],["learn-cpp.org",129],["terashare.co",130],["pornwex.tv",131],["smithsonianmag.com",132],["homesports.net",133],["cineb.rs",134],["rawkuma.com",[134,196]],["moviesjoyhd.to",134],["realmoasis.com",135],["javfc2.xyz",136],["gobankingrates.com",137],["buzzheavier.com",138],["flashbang.sh",138],["trashbytes.net",138],["hiddenleaf.to",139],["ronorp.net",140],["videovak.com",143],["gamerxyt.com",144],["a-lohas.jp",145],["akirabox.com",146],["animelatinohd.com",147],["cocomanga.com",147],["upshrink.com",148],["fitdynamos.com",150],["ohionowcast.info",151],["wiour.com",151],["appsbull.com",151],["diudemy.com",151],["maqal360.com",[151,157,158]],["bitcotasks.com",151],["videolyrics.in",151],["manofadan.com",151],["cempakajaya.com",151],["tagecoin.com",151],["doge25.in",151],["king-ptcs.com",151],["naijafav.top",151],["ourcoincash.xyz",151],["sh.techsamir.com",151],["claimcoins.site",151],["cryptosh.pro",151],["coinsrev.com",151],["go.freetrx.fun",151],["eftacrypto.com",151],["fescrypto.com",151],["earnhub.net",151],["kiddyshort.com",151],["tronxminer.com",151],["homeairquality.org",152],["cety.app",[153,154]],["exego.app",153],["cutlink.net",153],["cutsy.net",153],["cutyurls.com",153],["cutty.app",153],["cutnet.net",153],["hentaicloud.com",154],["justin.mp3quack.lol",154],["soft98.ir",[154,157]],["adcrypto.net",155],["admediaflex.com",155],["aduzz.com",155],["bitcrypto.info",155],["cdrab.com",155],["datacheap.io",155],["hbz.us",155],["savego.org",155],["owsafe.com",155],["sportweb.info",155],["aiimgvlog.fun",156],["6indianporn.com",156],["amateurebonypics.com",156],["amateuryoungpics.com",156],["cinemabg.net",156],["coomer.su",156],["desimmshd.com",156],["frauporno.com",156],["givemeaporn.com",156],["hitomi.la",156],["jav-asia.top",156],["javf.net",156],["javfull.net",156],["javideo.net",156],["kemono.su",156],["kr18plus.com",156],["pilibook.com",156],["pornborne.com",156],["porngrey.com",156],["qqxnxx.com",156],["sexvideos.host",156],["submilf.com",156],["subtaboo.com",156],["tktube.com",156],["xfrenchies.com",156],["moderngyan.com",159],["sattakingcharts.in",159],["freshbhojpuri.com",159],["bgmi32bitapk.in",159],["bankshiksha.in",159],["earn.mpscstudyhub.com",159],["earn.quotesopia.com",159],["money.quotesopia.com",159],["best-mobilegames.com",159],["learn.moderngyan.com",159],["bharatsarkarijobalert.com",159],["quotesopia.com",159],["creditsgoal.com",159],["coingraph.us",160],["momo-net.com",160],["maxgaming.fi",160],["cybercityhelp.in",161],["travel.vebma.com",162],["cloud.majalahhewan.com",162],["crm.cekresi.me",162],["ai.tempatwisata.pro",162],["pinloker.com",162],["sekilastekno.com",162],["link.paid4link.com",163],["vulture.com",164],["megaplayer.bokracdn.run",165],["hentaistream.com",166],["siteunblocked.info",167],["larvelfaucet.com",168],["feyorra.top",168],["claimtrx.com",168],["moviesyug.net",169],["w4files.ws",169],["parispi.net",170],["paperzonevn.com",171],["dailyvideoreports.net",172],["lewd.ninja",173],["systemnews24.com",174],["incestvidz.com",175],["niusdiario.es",176],["playporngames.com",177],["movi.pk",[178,181]],["cutesexyteengirls.com",180],["0dramacool.net",181],["185.53.88.104",181],["185.53.88.204",181],["185.53.88.15",181],["123movies4k.net",181],["1rowsports.com",181],["4share-mp3.net",181],["9animetv.to",181],["720pstream.me",181],["aagmaal.com",181],["abysscdn.com",181],["ajkalerbarta.com",181],["akstream.xyz",181],["androidapks.biz",181],["androidsite.net",181],["animeonlinefree.org",181],["animesite.net",181],["animespank.com",181],["aniworld.to",181],["apkmody.io",181],["appsfree4u.com",181],["audioz.download",181],["awafim.tv",181],["bdnewszh.com",181],["beastlyprints.com",181],["bengalisite.com",181],["bestfullmoviesinhd.org",181],["betteranime.net",181],["blacktiesports.live",181],["buffsports.stream",181],["ch-play.com",181],["clickforhire.com",181],["cloudy.pk",181],["computercrack.com",181],["coolcast2.com",181],["crackedsoftware.biz",181],["crackfree.org",181],["cracksite.info",181],["cryptoblog24.info",181],["cuatrolatastv.blogspot.com",181],["cydiasources.net",181],["decmelfot.xyz",181],["dirproxy.com",181],["dopebox.to",181],["downloadapk.info",181],["downloadapps.info",181],["downloadgames.info",181],["downloadmusic.info",181],["downloadsite.org",181],["downloadwella.com",181],["ebooksite.org",181],["educationtips213.blogspot.com",181],["egyup.live",181],["elgoles.pro",181],["embed.meomeo.pw",181],["embed.scdn.to",181],["emulatorsite.com",181],["essaysharkwriting.club",181],["exploreera.net",181],["extrafreetv.com",181],["fakedetail.com",181],["fclecteur.com",181],["files.im",181],["flexyhit.com",181],["fmoviefree.net",181],["fmovies24.com",181],["footyhunter3.xyz",181],["freeflix.info",181],["freemoviesu4.com",181],["freeplayervideo.com",181],["freesoccer.net",181],["fseries.org",181],["gamefast.org",181],["gamesite.info",181],["gettapeads.com",181],["gmanga.me",181],["gocast123.me",181],["gogohd.net",181],["gogoplay5.com",181],["gooplay.net",181],["gostreamon.net",181],["happy2hub.org",181],["harimanga.com",181],["healthnewsreel.com",181],["hexupload.net",181],["hinatasoul.com",181],["hindisite.net",181],["holymanga.net",181],["hxfile.co",181],["isosite.org",181],["iv-soft.com",181],["januflix.expert",181],["jewelry.com.my",181],["johnwardflighttraining.com",181],["kabarportal.com",181],["kstorymedia.com",181],["la123movies.org",181],["lespassionsdechinouk.com",181],["lilymanga.net",181],["linksdegrupos.com.br",181],["linkz.wiki",181],["livestreamtv.pk",181],["macsite.info",181],["mangapt.com",181],["mangasite.org",181],["manhuascan.com",181],["megafilmeshdseries.com",181],["megamovies.org",181],["membed.net",181],["moddroid.com",181],["moviefree2.com",181],["movies-watch.com.pk",181],["moviesite.app",181],["moviesonline.fm",181],["moviesx.org",181],["msmoviesbd.com",181],["musicsite.biz",181],["myfernweh.com",181],["myviid.com",181],["nazarickol.com",181],["noob4cast.com",181],["nsw2u.com",[181,278]],["oko.sh",181],["olympicstreams.me",181],["orangeink.pk",181],["owllink.net",181],["pahaplayers.click",181],["patchsite.net",181],["pdfsite.net",181],["play1002.com",181],["player-cdn.com",181],["productkeysite.com",181],["projectfreetv.one",181],["romsite.org",181],["rufiguta.com",181],["rytmp3.io",181],["send.cm",181],["seriesite.net",181],["seriezloaded.com.ng",181],["serijehaha.com",181],["shrugemojis.com",181],["siteapk.net",181],["siteflix.org",181],["sitegames.net",181],["sitekeys.net",181],["sitepdf.com",181],["sitetorrent.com",181],["softwaresite.net",181],["sportbar.live",181],["sportkart1.xyz",181],["ssyoutube.com",181],["stardima.com",181],["stream4free.live",181],["superapk.org",181],["supermovies.org",181],["tainio-mania.online",181],["talaba.su",181],["tamilguns.org",181],["tatabrada.tv",181],["techtrendmakers.com",181],["theflixer.tv",181],["thememypc.net",181],["thetechzone.online",181],["thripy.com",181],["tonnestreamz.xyz",181],["travelplanspro.com",181],["turcasmania.com",181],["tusfiles.com",181],["tvonlinesports.com",181],["ultramovies.org",181],["uploadbank.com",181],["urdubolo.pk",181],["vidspeeds.com",181],["warezsite.net",181],["watchmovies2.com",181],["watchmoviesforfree.org",181],["watchofree.com",181],["watchsite.net",181],["watchsouthpark.tv",181],["watchtvch.club",181],["web.livecricket.is",181],["webseries.club",181],["worldcupstream.pm",181],["y2mate.com",181],["youapk.net",181],["youtube4kdownloader.com",181],["yts-subs.com",181],["haho.moe",182],["nicy-spicy.pw",183],["novelmultiverse.com",184],["mylegalporno.com",185],["embedsports.me",186],["embedstream.me",186],["jumbtv.com",186],["reliabletv.me",186],["xnxx.com",189],["thecut.com",190],["novelism.jp",191],["alphapolis.co.jp",192],["game3rb.com",193],["javhub.net",193],["thotvids.com",194],["berklee.edu",195],["imeteo.sk",197],["youtubemp3donusturucu.net",198],["surfsees.com",200],["vivo.st",[201,202]],["alueviesti.fi",204],["kiuruvesilehti.fi",204],["lempaala.ideapark.fi",204],["olutposti.fi",204],["urjalansanomat.fi",204],["tainhanhvn.com",206],["titantv.com",207],["3cinfo.net",208],["transportationlies.org",209],["camarchive.tv",210],["crownimg.com",210],["freejav.guru",210],["hentai2read.com",210],["icyporno.com",210],["illink.net",210],["javtiful.com",210],["m-hentai.net",210],["pornblade.com",210],["pornfelix.com",210],["pornxxxxtube.net",210],["redwap.me",210],["redwap2.com",210],["redwap3.com",210],["sunporno.com",210],["tubxporn.xxx",210],["ver-comics-porno.com",210],["ver-mangas-porno.com",210],["xanimeporn.com",210],["xxxvideohd.net",210],["zetporn.com",210],["simpcity.su",211],["sampledrive.in",212],["sportnews.to",212],["soccershoes.blog",212],["mcleaks.net",213],["explorecams.com",213],["minecraft.buzz",213],["chillx.top",214],["playerx.stream",214],["m.liputan6.com",216],["stardewids.com",[216,241]],["ingles.com",217],["spanishdict.com",217],["surfline.com",218],["rureka.com",219],["bunkr.is",220],["amateur8.com",221],["freeporn8.com",221],["maturetubehere.com",221],["embedo.co",222],["corriere.it",223],["oggi.it",223],["2the.space",224],["file.gocmod.com",226],["apkcombo.com",227],["winfuture.de",228],["sponsorhunter.com",229],["novelssites.com",230],["torrentmac.net",231],["udvl.com",232],["moviezaddiction.icu",233],["apimate.net",234],["dlpanda.com",235],["socialmediagirls.com",236],["einrichtungsbeispiele.de",237],["weadown.com",238],["molotov.tv",239],["freecoursesonline.me",240],["adelsfun.com",240],["advantien.com",240],["bailbondsfinder.com",240],["bigpiecreative.com",240],["childrenslibrarylady.com",240],["classifarms.com",240],["comtasq.ca",240],["crone.es",240],["ctrmarketingsolutions.com",240],["dropnudes.com",240],["ftuapps.dev",240],["genzsport.com",240],["ghscanner.com",240],["grsprotection.com",240],["gruporafa.com.br",240],["inmatefindcalifornia.com",240],["inmatesearchidaho.com",240],["itsonsitetv.com",240],["mfmfinancials.com",240],["myproplugins.com",240],["onehack.us",240],["ovester.com",240],["paste.bin.sx",240],["privatenudes.com",240],["renoconcrete.ca",240],["richieashbeck.com",240],["sat.technology",240],["short1ink.com",240],["stpm.co.uk",240],["wegotcookies.co",240],["mathcrave.com",240],["marinetraffic.live",240],["commands.gg",241],["smgplaza.com",242],["emturbovid.com",243],["findjav.com",243],["javggvideo.xyz",243],["mmtv01.xyz",243],["stbturbo.xyz",243],["streamsilk.com",243],["freepik.com",244],["diyphotography.net",246],["bitchesgirls.com",247],["shopforex.online",248],["hiraethtranslation.com",249],["programmingeeksclub.com",250],["easymc.io",251],["diendancauduong.com",252],["androidadult.com",253],["parentcircle.com",254],["h-game18.xyz",255],["wheelofgold.com",256],["shortlinks.tech",257],["skill4ltu.eu",259],["lifestyle.bg",260],["news.bg",260],["topsport.bg",260],["webcafe.bg",260],["freepikdownloader.com",261],["freepasses.org",262],["iusedtobeaboss.com",263],["androidpolice.com",264],["cbr.com",264],["gamerant.com",264],["howtogeek.com",264],["thegamer.com",264],["blogtruyenmoi.com",265],["igay69.com",267],["graphicget.com",268],["qiwi.gg",[269,270]],["sonixgvn.net",271],["netcine2.la",272],["idnes.cz",[273,274]],["cbc.ca",275],["japscan.lol",[276,277]]]);

const entitiesMap = new Map([["kissasian",5],["ganool",5],["pirate",5],["piratebay",5],["pirateproxy",5],["proxytpb",5],["thepiratebay",5],["limetorrents",[7,13]],["king-pes",7],["depedlps",7],["komikcast",7],["idedroidsafelink",7],["links-url",7],["ak4eg",7],["streanplay",8],["steanplay",8],["liferayiseasy",[9,10]],["pahe",13],["yts",13],["tube8",13],["topeuropix",13],["moviescounter",13],["torrent9",13],["desiremovies",13],["movs4u",13],["uwatchfree",13],["hydrax",13],["4movierulz",13],["projectfreetv",13],["arabseed",13],["btdb",[13,52]],["world4ufree",13],["streamsport",13],["rojadirectatvhd",13],["userload",13],["adyou",15],["fxporn69",18],["rexporn",22],["movies07",22],["pornocomics",22],["pornomoll",26],["gsurl",27],["freecoursesonline",28],["lordpremium",28],["todovieneok",28],["novablogitalia",28],["anisubindo",28],["stream4free",28],["btvsports",28],["mimaletadepeliculas",29],["burningseries",30],["dz4soft",31],["yoututosjeff",31],["ebookmed",31],["lanjutkeun",31],["novelasesp",31],["singingdalong",31],["doujindesu",31],["xmovies8",34],["mega-dvdrip",41],["peliculas-dvdrip",41],["desbloqueador",42],["newpelis",[43,50]],["pelix",[43,50]],["allcalidad",[43,210]],["khatrimaza",43],["camwhores",44],["camwhorestv",44],["uproxy",44],["mirrorace",56],["mixdrp",61],["asiansex",63],["japanfuck",63],["japanporn",63],["teensex",63],["vintagetube",63],["xxxmovies",63],["zooqle",67],["hdfull",71],["mangamanga",73],["streameast",75],["thestreameast",75],["vev",79],["vidop",79],["1337x",81],["x1337x",81],["zone-telechargement",81],["megalink",86],["gmx",87],["mega1080p",92],["9hentai",94],["gaypornhdfree",101],["cinemakottaga",101],["privatemoviez",101],["apkmaven",101],["popcornstream",103],["upns",111],["readcomiconline",114],["azsoft",115],["nekopoi",116],["gdflix",141],["a1movies",142],["fc-lc",149],["nuvid",154],["pornktube",156],["watchseries",156],["milfnut",160],["pagalmovies",169],["7starhd",169],["jalshamoviez",169],["9xupload",169],["bdupload",169],["desiupload",169],["rdxhd1",169],["moviessources",179],["0gomovie",181],["0gomovies",181],["123moviefree",181],["1kmovies",181],["1madrasdub",181],["1primewire",181],["2embed",181],["2madrasdub",181],["2umovies",181],["4anime",181],["adblockplustape",181],["altadefinizione01",181],["atomixhq",181],["beinmatch",181],["brmovies",181],["cima4u",181],["clicknupload",181],["cmovies",181],["cricfree",181],["crichd",181],["databasegdriveplayer",181],["dood",181],["f1stream",181],["faselhd",181],["fbstream",181],["filemoon",181],["filepress",[181,245]],["filmlinks4u",181],["filmpertutti",181],["filmyzilla",181],["fmovies",181],["french-stream",181],["fzlink",181],["gofilms4u",181],["gogoanime",181],["gomoviz",181],["hdmoviefair",181],["hdmovies4u",181],["hdmovies50",181],["hdmoviesfair",181],["hh3dhay",181],["hindilinks4u",181],["hotmasti",181],["hurawatch",181],["klmanga",181],["klubsports",181],["libertestreamvf",181],["livetvon",181],["manga1000",181],["manga1001",181],["mangaraw",181],["mangarawjp",181],["mlbstream",181],["motogpstream",181],["movierulz",181],["movies123",181],["movies2watch",181],["moviesden",181],["moviezaddiction",181],["myflixer",181],["nbastream",181],["netcine",181],["nflstream",181],["nhlstream",181],["onlinewatchmoviespk",181],["pctfenix",181],["pctnew",181],["pksmovies",181],["plyjam",181],["plylive",181],["pogolinks",181],["popcorntime",181],["poscitech",181],["rugbystreams",181],["shahed4u",181],["sflix",181],["sitesunblocked",181],["solarmovies",181],["sportcast",181],["sportskart",181],["sports-stream",181],["streaming-french",181],["streamers",181],["streamingcommunity",[181,225]],["strikeout",181],["t20cup",181],["tennisstreams",181],["torrentdosfilmes",181],["toonanime",181],["tvply",181],["ufcstream",181],["uptomega",181],["uqload",181],["vudeo",181],["vidoo",181],["vipbox",181],["vipboxtv",181],["vipleague",181],["viprow",181],["yesmovies",181],["yomovies",181],["yomovies1",181],["yt2mp3s",181],["kat",181],["katbay",181],["kickass",181],["kickasshydra",181],["kickasskat",181],["kickass2",181],["kickasstorrents",181],["kat2",181],["kattracker",181],["thekat",181],["thekickass",181],["kickassz",181],["kickasstorrents2",181],["topkickass",181],["kickassgo",181],["kkickass",181],["kkat",181],["kickasst",181],["kick4ss",181],["guardaserie",187],["cine-calidad",188],["videovard",203],["gntai",210],["grantorrent",210],["mejortorrent",210],["mejortorrento",210],["mejortorrents",210],["mejortorrents1",210],["mejortorrentt",210],["shineads",212],["bg-gledai",240],["gledaitv",240],["motchill",258]]);

const exceptionsMap = new Map([["mentor.duden.de",[74]],["forum.soft98.ir",[154,157]]]);

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
