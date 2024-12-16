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

const argsList = [["load","Object"],["load","hard_block"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["error"],["load","onload"],["","BACK"],["load","getComputedStyle"],["load","adsense"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","window.open"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["mousedown","preventDefault"],["load","nextFunction"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["click","_blank"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["DOMContentLoaded","isMobile"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["load","ads"],["click","document.createElement"],["click","ShouldShow"],["click","clickCount"],["mousedown","localStorage"],["DOMContentLoaded","document.documentElement.lang.toLowerCase"],["","adsense"],["/adblock/i"],["load","doTest"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","daadb_get_data_fetch"],["click","splashPage"],["load","detect-modal"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["load",".call(this"],["load","adblock"],["/touchmove|wheel/","preventDefault()"],["load","showcfkModal"],["click","attached","elements","div[class=\"share-embed-container\"]"],["click","fp-screen"],["DOMContentLoaded","leaderboardAd"],["DOMContentLoaded","fetch"],["mousedown","shown_at"],["click","openPopupForChapter"],["click","doThePop"],["DOMContentLoaded","blockAdBlock"],["DOMContentLoaded","location.href"],["click","openDirectLinkAd"],["load","detect"],["DOMContentLoaded","history.pushState"],["DOMContentLoaded","showPopup"],["click","PopUnder"],["DOMContentLoaded","history.go"],["load","puHref"],["click","Ads"],["load","popMagic"],["click","window.open"],["DOMContentLoaded","iframe"],["","/_blank/i"],["blur","stopCountdown"],["load","htmls"],["blur","focusOut"],["click","/handleClick|popup/"],["load","bypass"],["","popMagic"],["contextmenu","preventDefault"],["visibilitychange","remainingSeconds"],["click","Popunder"],["contextmenu"],["submit","validateForm"],["blur","counter"],["","history.go"],["click","maxclick"],["click","shouldOpenPopUp"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["click","open"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["beforeunload"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["message"],["","/pop|_blank/"],["click","allclick_Public"],["DOMContentLoaded","/dyn\\.ads|loadAdsDelayed/"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["","about:blank"],["click","popMagic"],["","shouldShow"],["DOMContentLoaded","adsSrc"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["","exoJsPop101"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["click","popName"],["blur"],["DOMContentLoaded","clientHeight"],["load","error-report.com"],["click","window.focus"],["click","event.dispatch"],["","Math"],["DOMContentLoaded","popupurls"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["load","Ads"],["DOMContentLoaded","document.documentElement.lang"],["DOMContentLoaded","googlesyndication"],["load","popunder"],["DOMContentLoaded",".clientHeight"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["load","document.getElementById"],["click","popactive"],["load","adsbygoogle"],["DOMContentLoaded","location.replace"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["error","blocker"],["click","alink"],["load","[native code]"],["","daadb"],["load","google-analytics"],["","sessionStorage"],["click","/form\\.submit|urlToOpen/"],["DOMContentLoaded","overlays"],["load","fetch"],["click","pingUrl"],["mousedown","scoreUrl"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["load","/navpromo|clipPath|0p'\\+/"],["DOMContentLoaded","/\\(\\s*\\)\\s*=>\\s*\\{\\s*[$\\w]+\\s*\\(\\s*\\(\\s*\\)\\s*=>\\s*\\{\\s*[a-z]+|TikAk|\\+'[a-z]'|na'|eval|Niger|Charger|GoodDay|funct'|t'\\+'y/"],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",1],["timesofindia.indiatimes.com",2],["drrtyr.mx",2],["pinoyalbums.com",2],["multiplayer.it",2],["mediafire.com",[3,4]],["pinsystem.co.uk",5],["ancensored.com",5],["mp3fiber.com",[5,28]],["xrivonet.info",5],["afreesms.com",6],["tu.no",6],["tio.ch",6],["lavanguardia.com",6],["eplayer.click",6],["kingofdown.com",7],["radiotormentamx.com",7],["quelleestladifference.fr",7],["otakuworldsite.blogspot.com",7],["ad-itech.blogspot.com",7],["agar.pro",7],["unlockapk.com",7],["mobdi3ips.com",7],["socks24.org",7],["interviewgig.com",7],["javaguides.net",7],["almohtarif-tech.net",7],["forum.release-apk.com",7],["devoloperxda.blogspot.com",7],["zwergenstadt.com",7],["primedeportes.es",7],["9goals.live",7],["upxin.net",7],["ciudadblogger.com",7],["ke-1.com",7],["secretsdeepweb.blogspot.com",7],["bit-shares.com",7],["itdmusics.com",7],["aspdotnet-suresh.com",7],["tudo-para-android.com",7],["urdulibrarypk.blogspot.com",7],["zerotopay.com",7],["akw.to",7],["mawsueaa.com",7],["hesgoal-live.io",7],["king-shoot.io",7],["bibme.org",11],["citationmachine.net",11],["easybib.com",12],["vermangasporno.com",13],["imgtorrnt.in",13],["picbaron.com",[13,156]],["letmejerk.com",13],["letmejerk2.com",13],["letmejerk3.com",13],["letmejerk4.com",13],["letmejerk5.com",13],["letmejerk6.com",13],["letmejerk7.com",13],["dlapk4all.com",13],["kropic.com",13],["kvador.com",13],["pdfindir.net",13],["brstej.com",13],["topwwnews.com",13],["xsanime.com",13],["vidlo.us",13],["put-locker.com",13],["youx.xxx",13],["animeindo.asia",13],["masahub.net",13],["adclickersbot.com",13],["badtaste.it",14],["shemalez.com",16],["tubepornclassic.com",16],["gotporn.com",17],["freepornrocks.com",17],["tvhai.org",17],["realgfporn.com",[18,19]],["thisvid.com",19],["xvideos-downloader.net",19],["imgspice.com",20],["vikiporn.com",21],["tnaflix.com",21],["hentai2w.com",[21,213]],["yourlust.com",21],["hotpornfile.org",21],["watchfreexxx.net",21],["vintageporntubes.com",21],["angelgals.com",21],["babesexy.com",21],["porndaa.com",21],["ganstamovies.com",21],["youngleak.com",21],["porndollz.com",21],["xnxxvideo.pro",21],["xvideosxporn.com",21],["filmpornofrancais.fr",21],["pictoa.com",[21,43]],["tubator.com",21],["adultasianporn.com",21],["nsfwmonster.com",21],["girlsofdesire.org",21],["gaytail.com",21],["fetish-bb.com",21],["rumporn.com",21],["soyoungteens.com",21],["zubby.com",21],["lesbian8.com",21],["gayforfans.com",21],["reifporn.de",21],["javtsunami.com",21],["18tube.sex",21],["xxxextreme.org",21],["amateurs-fuck.com",21],["sex-amateur-clips.com",21],["hentaiworld.tv",21],["dads-banging-teens.com",21],["home-xxx-videos.com",21],["mature-chicks.com",21],["teens-fucking-matures.com",21],["hqbang.com",21],["darknessporn.com",21],["familyporner.com",21],["freepublicporn.com",21],["pisshamster.com",21],["punishworld.com",21],["xanimu.com",21],["pornhd.com",22],["cnnamador.com",[22,32]],["cle0desktop.blogspot.com",22],["turkanime.co",22],["camclips.tv",[22,44]],["blackpornhq.com",22],["xsexpics.com",22],["ulsex.net",22],["wannafreeporn.com",22],["ytube2dl.com",22],["multiup.us",22],["protege-torrent.com",22],["pussyspace.com",[23,24]],["pussyspace.net",[23,24]],["empflix.com",25],["cpmlink.net",26],["bdsmstreak.com",26],["cutpaid.com",26],["pornforrelax.com",26],["fatwhitebutt.com",26],["short.pe",27],["totaldebrid.org",28],["neko-miku.com",28],["elsfile.org",28],["venstrike.jimdofree.com",28],["schrauben-normen.de",28],["avengerinator.blogspot.com",28],["link-to.net",28],["hanimesubth.com",28],["gsmturkey.net",28],["adshrink.it",28],["presentation-ppt.com",28],["mangacanblog.com",28],["pekalongan-cits.blogspot.com",28],["4tymode.win",28],["eurotruck2.com.br",28],["tiroalpaloes.com",28],["tiroalpaloes.net",28],["linkvertise.com",28],["reifenrechner.at",28],["tire-size-calculator.info",28],["linuxsecurity.com",28],["itsguider.com",28],["cotravinh.blogspot.com",28],["itudong.com",28],["shortx.net",28],["lecturel.com",28],["bakai.org",28],["nar.k-ba.net",28],["tiroalpalo.org",28],["bs.to",30],["efukt.com",30],["generacionretro.net",31],["nuevos-mu.ucoz.com",31],["micloudfiles.com",31],["mimaletamusical.blogspot.com",31],["visionias.net",31],["b3infoarena.in",31],["lurdchinexgist.blogspot.com",31],["thefreedommatrix.blogspot.com",31],["hentai-vl.blogspot.com",31],["projetomotog.blogspot.com",31],["ktmx.pro",31],["lirik3satu.blogspot.com",31],["marketmovers.it",31],["pharmaguideline.com",31],["safemaru.blogspot.com",31],["mixloads.com",31],["mangaromance.eu",31],["interssh.com",31],["freesoftpdfdownload.blogspot.com",31],["cirokun.blogspot.com",31],["myadslink.com",31],["blackavelic.com",31],["server.satunivers.tv",31],["eg-akw.com",31],["xn--mgba7fjn.cc",31],["flashingjungle.com",32],["ma-x.org",33],["lavozdegalicia.es",33],["ddwloclawek.pl",33],["ki24.info",33],["xmovies08.org",35],["globaldjmix.com",36],["zazzybabes.com",37],["haaretz.co.il",38],["haaretz.com",38],["slate.com",39],["megalinks.info",40],["megapastes.com",40],["mega-mkv.com",[40,41]],["mkv-pastes.com",40],["zpaste.net",40],["zlpaste.net",40],["9xlinks.site",40],["zona-leros.net",41],["acortarm.xyz",42],["cine.to",[43,218]],["kissasia.cc",43],["digjav.com",44],["videoszoofiliahd.com",45],["xxxtubezoo.com",46],["zooredtube.com",46],["uii.io",47],["megacams.me",48],["rlslog.net",48],["porndoe.com",49],["acienciasgalilei.com",51],["playrust.io",52],["payskip.org",53],["short-url.link",54],["tubedupe.com",55],["mcrypto.club",56],["fatgirlskinny.net",57],["polska-ie.com",57],["windowsmatters.com",57],["canaltdt.es",58],["masbrooo.com",58],["2ndrun.tv",58],["oncehelp.com",59],["curto.win",59],["smallseotools.com",60],["macwelt.de",62],["pcwelt.de",62],["capital.de",62],["geo.de",62],["allmomsex.com",63],["allnewindianporn.com",63],["analxxxvideo.com",63],["animalextremesex.com",63],["anime3d.xyz",63],["animefuckmovies.com",63],["animepornfilm.com",63],["animesexbar.com",63],["animesexclip.com",63],["animexxxsex.com",63],["animexxxfilms.com",63],["anysex.club",63],["apetube.asia",63],["asianfuckmovies.com",63],["asianfucktube.com",63],["asianporn.sexy",63],["asiansexcilps.com",63],["beeg.fund",63],["beegvideoz.com",63],["bestasiansex.pro",63],["bravotube.asia",63],["brutalanimalsfuck.com",63],["candyteenporn.com",63],["daddyfuckmovies.com",63],["desifuckonline.com",63],["exclusiveasianporn.com",63],["exteenporn.com",63],["fantasticporn.net",63],["fantasticyoungporn.com",63],["fineasiansex.com",63],["firstasianpussy.com",63],["freeindiansextube.com",63],["freepornasians.com",63],["freerealvideo.com",63],["fuck-beeg.com",63],["fuck-xnxx.com",63],["fuckasian.pro",63],["fuckfuq.com",63],["fuckundies.com",63],["gojapaneseporn.com",63],["golderotica.com",63],["goodyoungsex.com",63],["goyoungporn.com",63],["hardxxxmoms.com",63],["hdvintagetube.com",63],["hentaiporn.me",63],["hentaisexfilms.com",63],["hentaisexuality.com",63],["hot-teens-movies.mobi",63],["hotanimepornvideos.com",63],["hotanimevideos.com",63],["hotasianpussysex.com",63],["hotjapaneseshows.com",63],["hotmaturetube.com",63],["hotmilfs.pro",63],["hotorientalporn.com",63],["hotpornyoung.com",63],["hotxxxjapanese.com",63],["hotxxxpussy.com",63],["indiafree.net",63],["indianpornvideo.online",63],["japanpornclip.com",63],["japanesetube.video",63],["japansex.me",63],["japanesexxxporn.com",63],["japansporno.com",63],["japanxxx.asia",63],["japanxxxworld.com",63],["keezmovies.surf",63],["lingeriefuckvideo.com",63],["liveanimalporn.zooo.club",63],["madhentaitube.com",63],["megahentaitube.com",63],["megajapanesesex.com",63],["megajapantube.com",63],["milfxxxpussy.com",63],["momsextube.pro",63],["momxxxass.com",63],["monkeyanimalporn.com",63],["moviexxx.mobi",63],["newanimeporn.com",63],["newjapanesexxx.com",63],["nicematureporn.com",63],["nudeplayboygirls.com",63],["openxxxporn.com",63],["originalindianporn.com",63],["originalteentube.com",63],["pig-fuck.com",63],["plainasianporn.com",63],["popularasianxxx.com",63],["pornanimetube.com",63],["pornasians.pro",63],["pornhat.asia",63],["pornheed.online",63],["pornjapanesesex.com",63],["pornomovies.asia",63],["pornvintage.tv",63],["primeanimesex.com",63],["realjapansex.com",63],["realmomsex.com",63],["redsexhub.com",63],["retroporn.world",63],["retrosexfilms.com",63],["sex-free-movies.com",63],["sexanimesex.com",63],["sexanimetube.com",63],["sexjapantube.com",63],["sexmomvideos.com",63],["sexteenxxxtube.com",63],["sexxxanimal.com",63],["sexyoungtube.com",63],["sexyvintageporn.com",63],["sopornmovies.com",63],["spicyvintageporn.com",63],["sunporno.club",63],["tabooanime.club",63],["teenextrem.com",63],["teenfucksex.com",63],["teenhost.net",63],["teensexass.com",63],["tnaflix.asia",63],["totalfuckmovies.com",63],["totalmaturefuck.com",63],["txxx.asia",63],["voyeurpornsex.com",63],["warmteensex.com",63],["wetasiancreampie.com",63],["wildhentaitube.com",63],["wowyoungsex.com",63],["xhamster-art.com",63],["xmovie.pro",63],["xnudevideos.com",63],["xnxxjapon.com",63],["xpics.me",63],["xvide.me",63],["xxxanimefuck.com",63],["xxxanimevideos.com",63],["xxxanimemovies.com",63],["xxxhentaimovies.com",63],["xxxhothub.com",63],["xxxjapaneseporntube.com",63],["xxxlargeporn.com",63],["xxxmomz.com",63],["xxxpornmilf.com",63],["xxxpussyclips.com",63],["xxxpussysextube.com",63],["xxxretrofuck.com",63],["xxxsex.pro",63],["xxxsexyjapanese.com",63],["xxxteenyporn.com",63],["xxxvideo.asia",63],["xxxvideos.ink",63],["xxxyoungtv.com",63],["youjizzz.club",63],["youngpussyfuck.com",63],["bayimg.com",64],["celeb.gate.cc",65],["kinoger.re",66],["desi.upn.bio",66],["masterplayer.xyz",68],["pussy-hub.com",68],["porndex.com",69],["compucalitv.com",70],["diariodenavarra.es",72],["duden.de",74],["pennlive.com",76],["beautypageants.indiatimes.com",77],["01fmovies.com",78],["lnk2.cc",80],["fullhdxxx.com",81],["luscious.net",[81,156]],["classicpornbest.com",81],["xstory-fr.com",81],["1youngteenporn.com",81],["www-daftarharga.blogspot.com",[81,202]],["miraculous.to",[81,208]],["vtube.to",81],["gosexpod.com",82],["otakukan.com",83],["xcafe.com",84],["pornfd.com",84],["venusarchives.com",84],["imagehaha.com",85],["imagenpic.com",85],["imageshimage.com",85],["imagetwist.com",85],["k1nk.co",86],["watchasians.cc",86],["alexsports.xyz",86],["lulustream.com",86],["luluvdo.com",86],["web.de",87],["news18.com",88],["thelanb.com",89],["dropmms.com",89],["softwaredescargas.com",90],["cracking-dz.com",91],["anitube.ninja",92],["gazzetta.it",93],["port.hu",95],["dziennikbaltycki.pl",96],["dzienniklodzki.pl",96],["dziennikpolski24.pl",96],["dziennikzachodni.pl",96],["echodnia.eu",96],["expressbydgoski.pl",96],["expressilustrowany.pl",96],["gazetakrakowska.pl",96],["gazetalubuska.pl",96],["gazetawroclawska.pl",96],["gk24.pl",96],["gloswielkopolski.pl",96],["gol24.pl",96],["gp24.pl",96],["gra.pl",96],["gs24.pl",96],["kurierlubelski.pl",96],["motofakty.pl",96],["naszemiasto.pl",96],["nowiny24.pl",96],["nowosci.com.pl",96],["nto.pl",96],["polskatimes.pl",96],["pomorska.pl",96],["poranny.pl",96],["sportowy24.pl",96],["strefaagro.pl",96],["strefabiznesu.pl",96],["stronakobiet.pl",96],["telemagazyn.pl",96],["to.com.pl",96],["wspolczesna.pl",96],["course9x.com",96],["courseclub.me",96],["azrom.net",96],["alttyab.net",96],["esopress.com",96],["nesiaku.my.id",96],["onemanhua.com",97],["freeindianporn.mobi",97],["dr-farfar.com",98],["boyfriendtv.com",99],["brandstofprijzen.info",100],["netfuck.net",101],["blog24.me",[101,152]],["kisahdunia.com",101],["javsex.to",101],["nulljungle.com",101],["oyuncusoruyor.com",101],["pbarecap.ph",101],["sourds.net",101],["teknobalta.com",101],["tvinternetowa.info",101],["sqlserveregitimleri.com",101],["tutcourse.com",101],["readytechflip.com",101],["novinhastop.com",101],["warddogs.com",101],["dvdgayporn.com",101],["iimanga.com",101],["tinhocdongthap.com",101],["tremamnon.com",101],["423down.com",101],["brizzynovel.com",101],["jugomobile.com",101],["freecodezilla.net",101],["animekhor.xyz",101],["iconmonstr.com",101],["gay-tubes.cc",101],["rbxscripts.net",101],["comentariodetexto.com",101],["wordpredia.com",101],["livsavr.co",101],["allfaucet.xyz",[101,152]],["titbytz.tk",101],["replica-watch.info",101],["alludemycourses.com",101],["kayifamilytv.com",101],["iir.ai",102],["gameofporn.com",104],["qpython.club",105],["antifake-funko.fr",105],["dktechnicalmate.com",105],["recipahi.com",105],["e9china.net",106],["ontools.net",106],["marketbeat.com",107],["hentaipornpics.net",108],["apps2app.com",109],["alliptvlinks.com",110],["smashyplayer.top",111],["xvideos.com",112],["xvideos2.com",112],["homemoviestube.com",113],["sexseeimage.com",113],["jpopsingles.eu",115],["aipebel.com",115],["azmath.info",115],["downfile.site",115],["downphanmem.com",115],["expertvn.com",115],["memangbau.com",115],["trangchu.news",115],["aztravels.net",115],["ielts-isa.edu.vn",115],["techedubyte.com",[115,265]],["tubereader.me",117],["repretel.com",117],["dagensnytt.com",118],["mrproblogger.com",118],["themezon.net",118],["gfx-station.com",119],["bitzite.com",[119,138,152]],["historyofroyalwomen.com",120],["davescomputertips.com",120],["ukchat.co.uk",121],["hivelr.com",122],["skidrowcodex.net",123],["takimag.com",124],["digi.no",125],["th.gl",126],["scimagojr.com",127],["haxina.com",127],["twi-fans.com",128],["learn-cpp.org",129],["terashare.co",130],["pornwex.tv",131],["smithsonianmag.com",132],["homesports.net",133],["cineb.rs",134],["rawkuma.com",[134,199]],["moviesjoyhd.to",134],["realmoasis.com",135],["javfc2.xyz",136],["gobankingrates.com",137],["buzzheavier.com",138],["flashbang.sh",138],["trashbytes.net",138],["hiddenleaf.to",139],["ronorp.net",140],["videovak.com",143],["gamerxyt.com",144],["cety.app",[144,154]],["cuty.me",144],["upfiles-urls.com",[144,165]],["a-lohas.jp",145],["akirabox.com",146],["animelatinohd.com",147],["cocomanga.com",147],["dynamicminister.net",148],["apimate.net",148],["upshrink.com",149],["fitdynamos.com",151],["ohionowcast.info",152],["wiour.com",152],["appsbull.com",152],["diudemy.com",152],["maqal360.com",[152,157,158]],["bitcotasks.com",152],["videolyrics.in",152],["manofadan.com",152],["cempakajaya.com",152],["tagecoin.com",152],["doge25.in",152],["king-ptcs.com",152],["naijafav.top",152],["ourcoincash.xyz",152],["sh.techsamir.com",152],["claimcoins.site",152],["cryptosh.pro",152],["eftacrypto.com",152],["fescrypto.com",152],["earnhub.net",152],["kiddyshort.com",152],["tronxminer.com",152],["homeairquality.org",153],["exego.app",154],["cutlink.net",154],["cutsy.net",154],["cutyurls.com",154],["cutty.app",154],["cutnet.net",154],["adcrypto.net",155],["admediaflex.com",155],["aduzz.com",155],["bitcrypto.info",155],["cdrab.com",155],["datacheap.io",155],["hbz.us",155],["savego.org",155],["owsafe.com",155],["sportweb.info",155],["aiimgvlog.fun",156],["6indianporn.com",156],["amateurebonypics.com",156],["amateuryoungpics.com",156],["cinemabg.net",156],["coomer.su",156],["desimmshd.com",156],["frauporno.com",156],["givemeaporn.com",156],["hitomi.la",156],["jav-asia.top",156],["javf.net",156],["javfull.net",156],["javideo.net",156],["kemono.su",156],["kr18plus.com",156],["pilibook.com",156],["pornborne.com",156],["porngrey.com",156],["qqxnxx.com",156],["sexvideos.host",156],["submilf.com",156],["subtaboo.com",156],["tktube.com",156],["xfrenchies.com",156],["soft98.ir",[157,173]],["moderngyan.com",159],["sattakingcharts.in",159],["freshbhojpuri.com",159],["bgmi32bitapk.in",159],["bankshiksha.in",159],["earn.mpscstudyhub.com",159],["earn.quotesopia.com",159],["money.quotesopia.com",159],["best-mobilegames.com",159],["learn.moderngyan.com",159],["bharatsarkarijobalert.com",159],["quotesopia.com",159],["creditsgoal.com",159],["coingraph.us",160],["momo-net.com",160],["maxgaming.fi",160],["cybercityhelp.in",161],["travel.vebma.com",162],["cloud.majalahhewan.com",162],["crm.cekresi.me",162],["ai.tempatwisata.pro",162],["pinloker.com",162],["sekilastekno.com",162],["hblinks.pro",163],["hubcdn.vip",163],["90fpsconfig.in",163],["katdrive.link",163],["kmhd.net",163],["link.paid4link.com",164],["vulture.com",166],["megaplayer.bokracdn.run",167],["hentaistream.com",168],["siteunblocked.info",169],["larvelfaucet.com",170],["feyorra.top",170],["claimtrx.com",170],["moviesyug.net",171],["w4files.ws",171],["parispi.net",172],["hentaicloud.com",173],["justin.mp3quack.lol",173],["paperzonevn.com",174],["dailyvideoreports.net",175],["lewd.ninja",176],["systemnews24.com",177],["incestvidz.com",178],["niusdiario.es",179],["playporngames.com",180],["movi.pk",[181,184]],["cutesexyteengirls.com",183],["0dramacool.net",184],["185.53.88.104",184],["185.53.88.204",184],["185.53.88.15",184],["123movies4k.net",184],["1rowsports.com",184],["4share-mp3.net",184],["9animetv.to",184],["720pstream.me",184],["aagmaal.com",184],["abysscdn.com",184],["ajkalerbarta.com",184],["akstream.xyz",184],["androidapks.biz",184],["androidsite.net",184],["animeonlinefree.org",184],["animesite.net",184],["animespank.com",184],["aniworld.to",184],["apkmody.io",184],["appsfree4u.com",184],["audioz.download",184],["awafim.tv",184],["bdnewszh.com",184],["beastlyprints.com",184],["bengalisite.com",184],["bestfullmoviesinhd.org",184],["betteranime.net",184],["blacktiesports.live",184],["buffsports.stream",184],["ch-play.com",184],["clickforhire.com",184],["cloudy.pk",184],["computercrack.com",184],["coolcast2.com",184],["crackedsoftware.biz",184],["crackfree.org",184],["cracksite.info",184],["cryptoblog24.info",184],["cuatrolatastv.blogspot.com",184],["cydiasources.net",184],["decmelfot.xyz",184],["dirproxy.com",184],["dopebox.to",184],["downloadapk.info",184],["downloadapps.info",184],["downloadgames.info",184],["downloadmusic.info",184],["downloadsite.org",184],["downloadwella.com",184],["ebooksite.org",184],["educationtips213.blogspot.com",184],["egyup.live",184],["elgoles.pro",184],["embed.meomeo.pw",184],["embed.scdn.to",184],["emulatorsite.com",184],["essaysharkwriting.club",184],["exploreera.net",184],["extrafreetv.com",184],["fakedetail.com",184],["fclecteur.com",184],["files.im",184],["flexyhit.com",184],["fmoviefree.net",184],["fmovies24.com",184],["footyhunter3.xyz",184],["freeflix.info",184],["freemoviesu4.com",184],["freeplayervideo.com",184],["freesoccer.net",184],["fseries.org",184],["gamefast.org",184],["gamesite.info",184],["gettapeads.com",184],["gmanga.me",184],["gocast123.me",184],["gogohd.net",184],["gogoplay5.com",184],["gooplay.net",184],["gostreamon.net",184],["happy2hub.org",184],["harimanga.com",184],["healthnewsreel.com",184],["hexupload.net",184],["hinatasoul.com",184],["hindisite.net",184],["holymanga.net",184],["hxfile.co",184],["isosite.org",184],["iv-soft.com",184],["januflix.expert",184],["jewelry.com.my",184],["johnwardflighttraining.com",184],["kabarportal.com",184],["kstorymedia.com",184],["la123movies.org",184],["lespassionsdechinouk.com",184],["lilymanga.net",184],["linksdegrupos.com.br",184],["linkz.wiki",184],["livestreamtv.pk",184],["macsite.info",184],["mangapt.com",184],["mangasite.org",184],["manhuascan.com",184],["megafilmeshdseries.com",184],["megamovies.org",184],["membed.net",184],["moddroid.com",184],["moviefree2.com",184],["movies-watch.com.pk",184],["moviesite.app",184],["moviesonline.fm",184],["moviesx.org",184],["msmoviesbd.com",184],["musicsite.biz",184],["myfernweh.com",184],["myviid.com",184],["nazarickol.com",184],["noob4cast.com",184],["nsw2u.com",[184,277]],["oko.sh",184],["olympicstreams.me",184],["orangeink.pk",184],["owllink.net",184],["pahaplayers.click",184],["patchsite.net",184],["pdfsite.net",184],["play1002.com",184],["player-cdn.com",184],["productkeysite.com",184],["projectfreetv.one",184],["romsite.org",184],["rufiguta.com",184],["rytmp3.io",184],["send.cm",184],["seriesite.net",184],["seriezloaded.com.ng",184],["serijehaha.com",184],["shrugemojis.com",184],["siteapk.net",184],["siteflix.org",184],["sitegames.net",184],["sitekeys.net",184],["sitepdf.com",184],["sitetorrent.com",184],["softwaresite.net",184],["sportbar.live",184],["sportkart1.xyz",184],["ssyoutube.com",184],["stardima.com",184],["stream4free.live",184],["superapk.org",184],["supermovies.org",184],["tainio-mania.online",184],["talaba.su",184],["tamilguns.org",184],["tatabrada.tv",184],["techtrendmakers.com",184],["theflixer.tv",184],["thememypc.net",184],["thetechzone.online",184],["thripy.com",184],["tonnestreamz.xyz",184],["travelplanspro.com",184],["turcasmania.com",184],["tusfiles.com",184],["tvonlinesports.com",184],["ultramovies.org",184],["uploadbank.com",184],["urdubolo.pk",184],["vidspeeds.com",184],["warezsite.net",184],["watchmovies2.com",184],["watchmoviesforfree.org",184],["watchofree.com",184],["watchsite.net",184],["watchsouthpark.tv",184],["watchtvch.club",184],["web.livecricket.is",184],["webseries.club",184],["worldcupstream.pm",184],["y2mate.com",184],["youapk.net",184],["youtube4kdownloader.com",184],["yts-subs.com",184],["haho.moe",185],["nicy-spicy.pw",186],["novelmultiverse.com",187],["mylegalporno.com",188],["embedsports.me",189],["embedstream.me",189],["jumbtv.com",189],["reliabletv.me",189],["xnxx.com",192],["thecut.com",193],["novelism.jp",194],["alphapolis.co.jp",195],["game3rb.com",196],["javhub.net",196],["thotvids.com",197],["berklee.edu",198],["imeteo.sk",200],["youtubemp3donusturucu.net",201],["surfsees.com",203],["vivo.st",[204,205]],["alueviesti.fi",207],["kiuruvesilehti.fi",207],["lempaala.ideapark.fi",207],["olutposti.fi",207],["urjalansanomat.fi",207],["tainhanhvn.com",209],["titantv.com",210],["3cinfo.net",211],["transportationlies.org",212],["camarchive.tv",213],["crownimg.com",213],["freejav.guru",213],["hentai2read.com",213],["icyporno.com",213],["illink.net",213],["javtiful.com",213],["m-hentai.net",213],["pornblade.com",213],["pornfelix.com",213],["pornxxxxtube.net",213],["redwap.me",213],["redwap2.com",213],["redwap3.com",213],["sunporno.com",213],["tubxporn.xxx",213],["ver-comics-porno.com",213],["ver-mangas-porno.com",213],["xanimeporn.com",213],["xxxvideohd.net",213],["zetporn.com",213],["simpcity.su",214],["sampledrive.in",215],["sportnews.to",215],["soccershoes.blog",215],["mcleaks.net",216],["explorecams.com",216],["minecraft.buzz",216],["chillx.top",217],["playerx.stream",217],["m.liputan6.com",219],["stardewids.com",[219,242]],["ingles.com",220],["spanishdict.com",220],["surfline.com",221],["rureka.com",222],["bunkr.is",223],["amateur8.com",224],["freeporn8.com",224],["maturetubehere.com",224],["embedo.co",225],["corriere.it",226],["oggi.it",226],["2the.space",227],["file.gocmod.com",229],["apkcombo.com",230],["winfuture.de",231],["sponsorhunter.com",232],["novelssites.com",233],["torrentmac.net",234],["udvl.com",235],["dlpanda.com",236],["socialmediagirls.com",237],["einrichtungsbeispiele.de",238],["weadown.com",239],["molotov.tv",240],["freecoursesonline.me",241],["adelsfun.com",241],["advantien.com",241],["bailbondsfinder.com",241],["bigpiecreative.com",241],["childrenslibrarylady.com",241],["classifarms.com",241],["comtasq.ca",241],["crone.es",241],["ctrmarketingsolutions.com",241],["dropnudes.com",241],["ftuapps.dev",241],["genzsport.com",241],["ghscanner.com",241],["grsprotection.com",241],["gruporafa.com.br",241],["inmatefindcalifornia.com",241],["inmatesearchidaho.com",241],["itsonsitetv.com",241],["mfmfinancials.com",241],["myproplugins.com",241],["onehack.us",241],["ovester.com",241],["paste.bin.sx",241],["privatenudes.com",241],["renoconcrete.ca",241],["richieashbeck.com",241],["sat.technology",241],["short1ink.com",241],["stpm.co.uk",241],["wegotcookies.co",241],["mathcrave.com",241],["marinetraffic.live",241],["commands.gg",242],["smgplaza.com",243],["emturbovid.com",244],["findjav.com",244],["javggvideo.xyz",244],["mmtv01.xyz",244],["stbturbo.xyz",244],["streamsilk.com",244],["freepik.com",245],["diyphotography.net",247],["bitchesgirls.com",248],["shopforex.online",249],["hiraethtranslation.com",250],["programmingeeksclub.com",251],["diendancauduong.com",252],["androidadult.com",253],["parentcircle.com",254],["h-game18.xyz",255],["wheelofgold.com",256],["skill4ltu.eu",258],["lifestyle.bg",259],["news.bg",259],["topsport.bg",259],["webcafe.bg",259],["freepikdownloader.com",260],["freepasses.org",261],["iusedtobeaboss.com",262],["androidpolice.com",263],["cbr.com",263],["gamerant.com",263],["howtogeek.com",263],["thegamer.com",263],["blogtruyenmoi.com",264],["igay69.com",266],["graphicget.com",267],["qiwi.gg",[268,269]],["sonixgvn.net",270],["netcine2.la",271],["idnes.cz",[272,273]],["cbc.ca",274],["japscan.lol",[275,276]]]);

const entitiesMap = new Map([["kissasian",5],["ganool",5],["pirate",5],["piratebay",5],["pirateproxy",5],["proxytpb",5],["thepiratebay",5],["limetorrents",[7,13]],["king-pes",7],["depedlps",7],["komikcast",7],["idedroidsafelink",7],["links-url",7],["ak4eg",7],["streanplay",8],["steanplay",8],["liferayiseasy",[9,10]],["pahe",13],["yts",13],["tube8",13],["topeuropix",13],["moviescounter",13],["torrent9",13],["desiremovies",13],["movs4u",13],["uwatchfree",13],["hydrax",13],["4movierulz",13],["projectfreetv",13],["arabseed",13],["btdb",[13,52]],["world4ufree",13],["streamsport",13],["rojadirectatvhd",13],["userload",13],["adyou",15],["fxporn69",18],["rexporn",22],["movies07",22],["pornocomics",22],["pornomoll",26],["gsurl",27],["freecoursesonline",28],["lordpremium",28],["todovieneok",28],["novablogitalia",28],["anisubindo",28],["stream4free",28],["btvsports",28],["mimaletadepeliculas",29],["burningseries",30],["dz4soft",31],["yoututosjeff",31],["ebookmed",31],["lanjutkeun",31],["novelasesp",31],["singingdalong",31],["doujindesu",31],["xmovies8",34],["mega-dvdrip",41],["peliculas-dvdrip",41],["desbloqueador",42],["newpelis",[43,50]],["pelix",[43,50]],["allcalidad",[43,213]],["khatrimaza",43],["camwhores",44],["camwhorestv",44],["uproxy",44],["mirrorace",56],["mixdrp",61],["asiansex",63],["japanfuck",63],["japanporn",63],["teensex",63],["vintagetube",63],["xxxmovies",63],["zooqle",67],["hdfull",71],["mangamanga",73],["streameast",75],["thestreameast",75],["vev",79],["vidop",79],["1337x",81],["x1337x",81],["zone-telechargement",81],["megalink",86],["gmx",87],["mega1080p",92],["9hentai",94],["gaypornhdfree",101],["cinemakottaga",101],["privatemoviez",101],["apkmaven",101],["popcornstream",103],["upns",111],["readcomiconline",114],["azsoft",115],["nekopoi",116],["gdflix",141],["a1movies",142],["fc-lc",150],["pornktube",156],["watchseries",156],["milfnut",160],["hubdrive",163],["pagalmovies",171],["7starhd",171],["jalshamoviez",171],["9xupload",171],["bdupload",171],["desiupload",171],["rdxhd1",171],["nuvid",173],["moviessources",182],["0gomovie",184],["0gomovies",184],["123moviefree",184],["1kmovies",184],["1madrasdub",184],["1primewire",184],["2embed",184],["2madrasdub",184],["2umovies",184],["4anime",184],["adblockplustape",184],["altadefinizione01",184],["atomixhq",184],["beinmatch",184],["brmovies",184],["cima4u",184],["clicknupload",184],["cmovies",184],["cricfree",184],["crichd",184],["databasegdriveplayer",184],["dood",184],["f1stream",184],["faselhd",184],["fbstream",184],["filemoon",184],["filepress",[184,246]],["filmlinks4u",184],["filmpertutti",184],["filmyzilla",184],["fmovies",184],["french-stream",184],["fzlink",184],["gofilms4u",184],["gogoanime",184],["gomoviz",184],["hdmoviefair",184],["hdmovies4u",184],["hdmovies50",184],["hdmoviesfair",184],["hh3dhay",184],["hindilinks4u",184],["hotmasti",184],["hurawatch",184],["klmanga",184],["klubsports",184],["libertestreamvf",184],["livetvon",184],["manga1000",184],["manga1001",184],["mangaraw",184],["mangarawjp",184],["mlbstream",184],["motogpstream",184],["movierulz",184],["movies123",184],["movies2watch",184],["moviesden",184],["moviezaddiction",184],["myflixer",184],["nbastream",184],["netcine",184],["nflstream",184],["nhlstream",184],["onlinewatchmoviespk",184],["pctfenix",184],["pctnew",184],["pksmovies",184],["plyjam",184],["plylive",184],["pogolinks",184],["popcorntime",184],["poscitech",184],["rugbystreams",184],["shahed4u",184],["sflix",184],["sitesunblocked",184],["solarmovies",184],["sportcast",184],["sportskart",184],["sports-stream",184],["streaming-french",184],["streamers",184],["streamingcommunity",[184,228]],["strikeout",184],["t20cup",184],["tennisstreams",184],["torrentdosfilmes",184],["toonanime",184],["tvply",184],["ufcstream",184],["uptomega",184],["uqload",184],["vudeo",184],["vidoo",184],["vipbox",184],["vipboxtv",184],["vipleague",184],["viprow",184],["yesmovies",184],["yomovies",184],["yomovies1",184],["yt2mp3s",184],["kat",184],["katbay",184],["kickass",184],["kickasshydra",184],["kickasskat",184],["kickass2",184],["kickasstorrents",184],["kat2",184],["kattracker",184],["thekat",184],["thekickass",184],["kickassz",184],["kickasstorrents2",184],["topkickass",184],["kickassgo",184],["kkickass",184],["kkat",184],["kickasst",184],["kick4ss",184],["guardaserie",190],["cine-calidad",191],["xvideos",192],["videovard",206],["gntai",213],["grantorrent",213],["mejortorrent",213],["mejortorrento",213],["mejortorrents",213],["mejortorrents1",213],["mejortorrentt",213],["shineads",215],["bg-gledai",241],["gledaitv",241],["motchill",257]]);

const exceptionsMap = new Map([["mentor.duden.de",[74]],["forum.soft98.ir",[157,173]]]);

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
