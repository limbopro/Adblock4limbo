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
const uBOL_addEventListenerDefuser = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["load","Object"],["mousedown","clientX"],["load","hard_block"],["/contextmenu|keydown/"],["","adb"],["load","adBlock"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["error"],["load","onload"],["","BACK"],["load","getComputedStyle"],["load","adsense"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["load","nextFunction"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","window.open"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["",";}"],["load","BetterPop"],["mousedown","preventDefault"],["load","advertising"],["mousedown","localStorage"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["DOMContentLoaded","ads"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["","adsense"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["message","data.slice"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["DOMContentLoaded","isMobile"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["load","ads"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["/adblock/i"],["load","doTest"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","daadb_get_data_fetch"],["click","splashPage"],["DOMContentLoaded","iframe"],["","/_blank/i"],["load","htmls"],["blur","focusOut"],["click","handleClick"],["DOMContentLoaded","location.href"],["","popMagic"],["contextmenu"],["blur","counter"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["load","head"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["click","open"],["beforeunload"],["click","0x"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["","/pop|_blank/"],["click","allclick_Public"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["click","_blank"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["mousedown","shown_at"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["","about:blank"],["click","popMagic"],["load","popMagic"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["","$"],["","exoJsPop101"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["DOMContentLoaded","clientHeight"],["click","window.focus"],["click","[native code]"],["click","event.dispatch"],["load","adblock"],["","Math"],["DOMContentLoaded","popupurls"],["","tabUnder"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["load","Ads"],["DOMContentLoaded","adsSrc"],["DOMContentLoaded","googlesyndication"],["np.evtdetect"],["load","popunder"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["mousedown"],["load","document.getElementById"],["mousedown","tabUnder"],["click","popactive"],["load","adsbygoogle"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["error","blocker"],["click","alink"],["","daadb"],["load","google-analytics"],["","sessionStorage"],["load","fetch"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",2],["userscloud.com",3],["timesofindia.indiatimes.com",4],["drrtyr.mx",4],["pinoyalbums.com",4],["multiplayer.it",4],["bild.de",5],["mediafire.com",[6,7]],["pinsystem.co.uk",8],["fembed.com",8],["ancensored.com",8],["o2tvseries.com",8],["mp3fiber.com",[8,18]],["xrivonet.info",8],["afreesms.com",9],["tio.ch",9],["lavanguardia.com",9],["eplayer.click",9],["free-mp3-download.net",9],["kingofdown.com",10],["radiotormentamx.com",10],["quelleestladifference.fr",10],["otakuworldsite.blogspot.com",10],["ad-itech.blogspot.com",10],["sna3talaflam.com",10],["agar.pro",10],["unlockapk.com",10],["mobdi3ips.com",10],["socks24.org",10],["interviewgig.com",10],["javaguides.net",10],["almohtarif-tech.net",10],["forum.release-apk.com",10],["devoloperxda.blogspot.com",10],["zwergenstadt.com",10],["primedeportes.es",10],["upxin.net",10],["ciudadblogger.com",10],["ke-1.com",10],["secretsdeepweb.blogspot.com",10],["bit-shares.com",10],["itdmusics.com",10],["aspdotnet-suresh.com",10],["tudo-para-android.com",10],["urdulibrarypk.blogspot.com",10],["zerotopay.com",10],["akw.to",10],["mawsueaa.com",10],["hesgoal-live.io",10],["king-shoot.io",10],["bibme.org",14],["citationmachine.net",14],["easybib.com",15],["vermangasporno.com",16],["imgtorrnt.in",16],["picbaron.com",[16,130]],["worldcupfootball.me",16],["letmejerk.com",16],["letmejerk2.com",16],["letmejerk3.com",16],["letmejerk4.com",16],["letmejerk5.com",16],["letmejerk6.com",16],["letmejerk7.com",16],["dlapk4all.com",16],["kropic.com",16],["kvador.com",16],["pdfindir.net",16],["brstej.com",16],["topwwnews.com",16],["xsanime.com",16],["vidlo.us",16],["put-locker.com",16],["youx.xxx",16],["animeindo.asia",16],["masahub.net",16],["adclickersbot.com",16],["badtaste.it",17],["mage.si",18],["totaldebrid.org",18],["neko-miku.com",18],["elsfile.org",18],["venstrike.jimdofree.com",18],["schrauben-normen.de",18],["avengerinator.blogspot.com",18],["link-to.net",18],["hanimesubth.com",18],["gsmturkey.net",18],["adshrink.it",18],["presentation-ppt.com",18],["mangacanblog.com",18],["pekalongan-cits.blogspot.com",18],["4tymode.win",18],["linkvertise.com",18],["reifenrechner.at",18],["tire-size-calculator.info",18],["linuxsecurity.com",18],["encodinghub.com",18],["itsguider.com",18],["cotravinh.blogspot.com",18],["itudong.com",18],["shortx.net",18],["comandotorrenthd.org",18],["turkdebrid.net",18],["lecturel.com",18],["bakai.org",18],["nar.k-ba.net",18],["tiroalpalo.org",18],["shemalez.com",20],["tubepornclassic.com",20],["gotporn.com",21],["freepornrocks.com",21],["tvhai.org",21],["simpcity.su",21],["realgfporn.com",[22,23]],["titsbox.com",22],["thisvid.com",23],["xvideos-downloader.net",23],["imgspice.com",24],["vikiporn.com",25],["tnaflix.com",25],["hentai2w.com",[25,182]],["yourlust.com",25],["hotpornfile.org",25],["jav789.com",25],["javbuz.com",25],["letfap.com",25],["watchfreexxx.net",25],["vintageporntubes.com",25],["angelgals.com",25],["babesexy.com",25],["porndaa.com",25],["ganstamovies.com",25],["youngleak.com",25],["porndollz.com",25],["xnxxvideo.pro",25],["xvideosxporn.com",25],["onlyhgames.com",25],["filmpornofrancais.fr",25],["pictoa.com",[25,49]],["adultasianporn.com",25],["nsfwmonster.com",25],["girlsofdesire.org",25],["gaytail.com",25],["fetish-bb.com",25],["rumporn.com",25],["soyoungteens.com",25],["zubby.com",25],["lesbian8.com",25],["gayforfans.com",25],["reifporn.de",25],["javtsunami.com",25],["18tube.sex",25],["xxxextreme.org",25],["amateurs-fuck.com",25],["sex-amateur-clips.com",25],["hentaiworld.tv",25],["dads-banging-teens.com",25],["home-xxx-videos.com",25],["mature-chicks.com",25],["teens-fucking-matures.com",25],["hqbang.com",25],["darknessporn.com",25],["familyporner.com",25],["freepublicporn.com",25],["pisshamster.com",25],["punishworld.com",25],["xanimu.com",25],["pornhd.com",26],["cnnamador.com",[26,38]],["cle0desktop.blogspot.com",26],["turkanime.co",26],["camclips.tv",[26,51]],["blackpornhq.com",26],["xsexpics.com",26],["ulsex.net",26],["wannafreeporn.com",26],["ytube2dl.com",26],["multiup.us",26],["protege-torrent.com",26],["pussyspace.com",[27,28]],["pussyspace.net",[27,28]],["empflix.com",29],["cpmlink.net",30],["bdsmstreak.com",30],["cutpaid.com",30],["pornforrelax.com",30],["fatwhitebutt.com",30],["mavplay.xyz",30],["sunporno.com",[31,32,182]],["short.pe",33],["bs.to",36],["efukt.com",36],["kpopsea.com",36],["generacionretro.net",37],["nuevos-mu.ucoz.com",37],["micloudfiles.com",37],["mimaletamusical.blogspot.com",37],["visionias.net",37],["b3infoarena.in",37],["lurdchinexgist.blogspot.com",37],["thefreedommatrix.blogspot.com",37],["hentai-vl.blogspot.com",37],["projetomotog.blogspot.com",37],["ktmx.pro",37],["lirik3satu.blogspot.com",37],["marketmovers.it",37],["pharmaguideline.com",37],["safemaru.blogspot.com",37],["mixloads.com",37],["mangaromance.eu",37],["interssh.com",37],["freesoftpdfdownload.blogspot.com",37],["cirokun.blogspot.com",37],["myadslink.com",37],["blackavelic.com",37],["server.satunivers.tv",37],["eg-akw.com",37],["xn--mgba7fjn.cc",37],["flashingjungle.com",38],["ma-x.org",39],["lavozdegalicia.es",39],["xmovies08.org",41],["globaldjmix.com",42],["zazzybabes.com",43],["haaretz.co.il",44],["haaretz.com",44],["slate.com",45],["megalinks.info",46],["megapastes.com",46],["mega-mkv.com",[46,47]],["mkv-pastes.com",46],["zpaste.net",46],["zlpaste.net",46],["9xlinks.site",46],["zona-leros.net",47],["acortarm.xyz",48],["acortame.xyz",48],["cine.to",[49,186]],["kissasia.cc",49],["nzbstars.com",50],["digjav.com",51],["videoszoofiliahd.com",52],["xxxtubezoo.com",53],["zooredtube.com",53],["uii.io",54],["loaninsurehub.com",54],["megacams.me",56],["rlslog.net",56],["porndoe.com",57],["acienciasgalilei.com",59],["playrust.io",60],["payskip.org",61],["short-url.link",62],["tubedupe.com",63],["mcrypto.club",64],["fatgirlskinny.net",65],["polska-ie.com",65],["windowsmatters.com",65],["canaltdt.es",66],["masbrooo.com",66],["2ndrun.tv",66],["stfly.me",67],["oncehelp.com",67],["queenfaucet.website",67],["curto.win",67],["smallseotools.com",68],["macwelt.de",70],["pcwelt.de",70],["capital.de",70],["geo.de",70],["allmomsex.com",71],["allnewindianporn.com",71],["analxxxvideo.com",71],["animalextremesex.com",71],["anime3d.xyz",71],["animefuckmovies.com",71],["animepornfilm.com",71],["animesexbar.com",71],["animesexclip.com",71],["animexxxsex.com",71],["animexxxfilms.com",71],["anysex.club",71],["apetube.asia",71],["asianfuckmovies.com",71],["asianfucktube.com",71],["asianporn.sexy",71],["asiansexcilps.com",71],["beeg.fund",71],["beegvideoz.com",71],["bestasiansex.pro",71],["bigsexhub.com",71],["bravotube.asia",71],["brutalanimalsfuck.com",71],["candyteenporn.com",71],["daddyfuckmovies.com",71],["desifuckonline.com",71],["exclusiveasianporn.com",71],["exteenporn.com",71],["fantasticporn.net",71],["fantasticyoungporn.com",71],["fineasiansex.com",71],["firstasianpussy.com",71],["freeindiansextube.com",71],["freepornasians.com",71],["freerealvideo.com",71],["fuck-beeg.com",71],["fuck-xnxx.com",71],["fuckasian.pro",71],["fuckfuq.com",71],["fuckundies.com",71],["fullasiantube.com",71],["gojapaneseporn.com",71],["golderotica.com",71],["goodyoungsex.com",71],["goyoungporn.com",71],["hardxxxmoms.com",71],["hdvintagetube.com",71],["hentaiporn.me",71],["hentaisexfilms.com",71],["hentaisexuality.com",71],["hot-teens-movies.mobi",71],["hotanimepornvideos.com",71],["hotanimevideos.com",71],["hotasianpussysex.com",71],["hotjapaneseshows.com",71],["hotmaturetube.com",71],["hotmilfs.pro",71],["hotorientalporn.com",71],["hotpornsexvideos.com",71],["hotpornyoung.com",71],["hotxxxjapanese.com",71],["hotxxxpussy.com",71],["indiafree.net",71],["indianpornvideo.online",71],["japanpornclip.com",71],["japanesetube.video",71],["japansex.me",71],["japanesexxxporn.com",71],["japansporno.com",71],["japanxxx.asia",71],["japanxxxworld.com",71],["keezmovies.surf",71],["lingeriefuckvideo.com",71],["liveanimalporn.zooo.club",71],["madhentaitube.com",71],["megahentaitube.com",71],["megajapanesesex.com",71],["megajapantube.com",71],["milfxxxpussy.com",71],["momsextube.pro",71],["momxxxass.com",71],["monkeyanimalporn.com",71],["moviexxx.mobi",71],["newanimeporn.com",71],["newjapanesexxx.com",71],["nicematureporn.com",71],["nudeplayboygirls.com",71],["openxxxporn.com",71],["originalindianporn.com",71],["originalteentube.com",71],["pig-fuck.com",71],["plainasianporn.com",71],["popularasianxxx.com",71],["pornanimetube.com",71],["pornasians.pro",71],["pornhat.asia",71],["pornheed.online",71],["pornjapanesesex.com",71],["pornomovies.asia",71],["pornvintage.tv",71],["primeanimesex.com",71],["realjapansex.com",71],["realmomsex.com",71],["redsexhub.com",71],["retroporn.world",71],["retrosexfilms.com",71],["sex-free-movies.com",71],["sexanimesex.com",71],["sexanimetube.com",71],["sexjapantube.com",71],["sexmomvideos.com",71],["sexteenxxxtube.com",71],["sexxxanimal.com",71],["sexyoungtube.com",71],["sexyvintageporn.com",71],["sopornmovies.com",71],["spicyvintageporn.com",71],["sunporno.club",71],["tabooanime.club",71],["teenextrem.com",71],["teenfucksex.com",71],["teenhost.net",71],["teensexass.com",71],["tnaflix.asia",71],["totalfuckmovies.com",71],["totalmaturefuck.com",71],["txxx.asia",71],["voyeurpornsex.com",71],["warmteensex.com",71],["wetasiancreampie.com",71],["wildhentaitube.com",71],["wowyoungsex.com",71],["xhamster-art.com",71],["xmovie.pro",71],["xnudevideos.com",71],["xnxxjapon.com",71],["xpics.me",71],["xvide.me",71],["xxxanimefuck.com",71],["xxxanimevideos.com",71],["xxxanimemovies.com",71],["xxxhentaimovies.com",71],["xxxhothub.com",71],["xxxjapaneseporntube.com",71],["xxxlargeporn.com",71],["xxxmomz.com",71],["xxxpornmilf.com",71],["xxxpussyclips.com",71],["xxxpussysextube.com",71],["xxxretrofuck.com",71],["xxxsex.pro",71],["xxxsexyjapanese.com",71],["xxxteenyporn.com",71],["xxxvideo.asia",71],["xxxvideos.ink",71],["xxxyoungtv.com",71],["youjizzz.club",71],["youngpussyfuck.com",71],["bayimg.com",72],["celeb.gate.cc",73],["eodev.com",74],["masterplayer.xyz",76],["pussy-hub.com",76],["porndex.com",77],["compucalitv.com",78],["diariodenavarra.es",80],["duden.de",82],["pennlive.com",84],["beautypageants.indiatimes.com",85],["01fmovies.com",86],["lnk2.cc",88],["fullhdxxx.com",89],["luscious.net",[89,130]],["classicpornbest.com",89],["1youngteenporn.com",89],["www-daftarharga.blogspot.com",[89,171]],["miraculous.to",[89,177]],["vtube.to",89],["gosexpod.com",90],["otakukan.com",91],["xcafe.com",92],["pornfd.com",92],["venusarchives.com",92],["imagehaha.com",93],["imagenpic.com",93],["imageshimage.com",93],["imagetwist.com",93],["k1nk.co",94],["watchasians.cc",94],["alexsports.xyz",94],["lulustream.com",94],["luluvdo.com",94],["web.de",95],["news18.com",96],["thelanb.com",97],["dropmms.com",97],["softwaredescargas.com",98],["cracking-dz.com",99],["anitube.ninja",100],["gazzetta.it",101],["alliptvlinks.com",102],["waterfall.money",102],["port.hu",104],["dziennikbaltycki.pl",105],["dzienniklodzki.pl",105],["dziennikpolski24.pl",105],["dziennikzachodni.pl",105],["echodnia.eu",105],["expressbydgoski.pl",105],["expressilustrowany.pl",105],["gazetakrakowska.pl",105],["gazetalubuska.pl",105],["gazetawroclawska.pl",105],["gk24.pl",105],["gloswielkopolski.pl",105],["gol24.pl",105],["gp24.pl",105],["gra.pl",105],["gs24.pl",105],["kurierlubelski.pl",105],["motofakty.pl",105],["naszemiasto.pl",105],["nowiny24.pl",105],["nowosci.com.pl",105],["nto.pl",105],["polskatimes.pl",105],["pomorska.pl",105],["poranny.pl",105],["sportowy24.pl",105],["strefaagro.pl",105],["strefabiznesu.pl",105],["stronakobiet.pl",105],["telemagazyn.pl",105],["to.com.pl",105],["wspolczesna.pl",105],["course9x.com",105],["courseclub.me",105],["azrom.net",105],["alttyab.net",105],["esopress.com",105],["nesiaku.my.id",105],["onemanhua.com",106],["freeindianporn.mobi",106],["dr-farfar.com",107],["boyfriendtv.com",108],["brandstofprijzen.info",109],["netfuck.net",110],["blog24.me",[110,126]],["kisahdunia.com",110],["javsex.to",110],["nulljungle.com",110],["oyuncusoruyor.com",110],["pbarecap.ph",110],["sourds.net",110],["teknobalta.com",110],["tvinternetowa.info",110],["sqlserveregitimleri.com",110],["tutcourse.com",110],["readytechflip.com",110],["novinhastop.com",110],["warddogs.com",110],["dvdgayporn.com",110],["iimanga.com",110],["tinhocdongthap.com",110],["tremamnon.com",110],["423down.com",110],["brizzynovel.com",110],["jugomobile.com",110],["freecodezilla.net",110],["movieslegacy.com",110],["animekhor.xyz",110],["iconmonstr.com",110],["gay-tubes.cc",110],["rbxscripts.net",110],["comentariodetexto.com",110],["wordpredia.com",110],["livsavr.co",110],["allfaucet.xyz",[110,126]],["titbytz.tk",110],["replica-watch.info",110],["alludemycourses.com",110],["kayifamilytv.com",110],["iir.ai",111],["gameofporn.com",113],["qpython.club",114],["antifake-funko.fr",114],["e9china.net",115],["ac.ontools.net",115],["marketbeat.com",116],["hentaipornpics.net",117],["apps2app.com",118],["tubereader.me",119],["repretel.com",119],["dagensnytt.com",120],["mrproblogger.com",120],["themezon.net",120],["gfx-station.com",121],["bitzite.com",[121,126,129]],["historyofroyalwomen.com",122],["davescomputertips.com",122],["ukchat.co.uk",123],["upshrink.com",124],["fc-lc.xyz",125],["ohionowcast.info",126],["wiour.com",126],["appsbull.com",126],["diudemy.com",126],["maqal360.com",126],["bitcotasks.com",126],["videolyrics.in",126],["manofadan.com",126],["cempakajaya.com",126],["tagecoin.com",126],["doge25.in",126],["king-ptcs.com",126],["naijafav.top",126],["ourcoincash.xyz",126],["sh.techsamir.com",126],["claimcoins.site",126],["cryptosh.pro",126],["coinsrev.com",126],["go.freetrx.fun",126],["eftacrypto.com",126],["fescrypto.com",126],["earnhub.net",126],["kiddyshort.com",126],["tronxminer.com",126],["homeairquality.org",127],["exego.app",128],["cutlink.net",128],["cutsy.net",128],["cutyurls.com",128],["cutty.app",128],["cutnet.net",128],["aiimgvlog.fun",130],["6indianporn.com",130],["amateurebonypics.com",130],["amateuryoungpics.com",130],["cinemabg.net",130],["desimmshd.com",130],["frauporno.com",130],["givemeaporn.com",130],["jav-asia.top",130],["javf.net",130],["javideo.net",130],["kr18plus.com",130],["pilibook.com",130],["pornborne.com",130],["porngrey.com",130],["qqxnxx.com",130],["sexvideos.host",130],["submilf.com",130],["subtaboo.com",130],["tktube.com",130],["xfrenchies.com",130],["coingraph.us",131],["momo-net.com",131],["maxgaming.fi",131],["travel.vebma.com",132],["cloud.majalahhewan.com",132],["pinloker.com",132],["sekilastekno.com",132],["vulture.com",133],["megaplayer.bokracdn.run",134],["hentaistream.com",135],["siteunblocked.info",136],["larvelfaucet.com",137],["feyorra.top",137],["claimtrx.com",137],["moviesyug.net",138],["w4files.ws",138],["parispi.net",139],["simkl.com",140],["paperzonevn.com",141],["dailyvideoreports.net",142],["lewd.ninja",143],["systemnews24.com",144],["incestvidz.com",145],["niusdiario.es",146],["playporngames.com",147],["movi.pk",[148,153]],["justin.mp3quack.lol",150],["cutesexyteengirls.com",151],["asianembed.io",152],["0dramacool.net",153],["185.53.88.104",153],["185.53.88.204",153],["185.53.88.15",153],["123movies4k.net",153],["1movieshd.com",153],["1rowsports.com",153],["4share-mp3.net",153],["6movies.net",153],["9animetv.to",153],["720pstream.me",153],["aagmaal.com",153],["abysscdn.com",153],["adblockplustape.com",153],["ajkalerbarta.com",153],["akstream.xyz",153],["androidapks.biz",153],["androidsite.net",153],["animefenix.com",153],["animeonlinefree.org",153],["animesite.net",153],["animespank.com",153],["aniworld.to",153],["apkmody.io",153],["appsfree4u.com",153],["audioz.download",153],["bdnewszh.com",153],["beastlyprints.com",153],["bengalisite.com",153],["bestfullmoviesinhd.org",153],["betteranime.net",153],["blacktiesports.live",153],["buffsports.stream",153],["ch-play.com",153],["clickforhire.com",153],["cloudy.pk",153],["computercrack.com",153],["coolcast2.com",153],["crackedsoftware.biz",153],["crackfree.org",153],["cracksite.info",153],["cryptoblog24.info",153],["cuatrolatastv.blogspot.com",153],["cydiasources.net",153],["dirproxy.com",153],["dopebox.to",153],["downloadapk.info",153],["downloadapps.info",153],["downloadgames.info",153],["downloadmusic.info",153],["downloadsite.org",153],["downloadwella.com",153],["ebooksite.org",153],["educationtips213.blogspot.com",153],["egyup.live",153],["embed.meomeo.pw",153],["embed.scdn.to",153],["emulatorsite.com",153],["essaysharkwriting.club",153],["exploreera.net",153],["extrafreetv.com",153],["fakedetail.com",153],["fclecteur.com",153],["files.im",153],["flexyhit.com",153],["fmoviefree.net",153],["fmovies24.com",153],["footyhunter3.xyz",153],["freeflix.info",153],["freemoviesu4.com",153],["freeplayervideo.com",153],["freesoccer.net",153],["fseries.org",153],["gamefast.org",153],["gamesite.info",153],["gmanga.me",153],["gocast123.me",153],["gogohd.net",153],["gogoplay5.com",153],["gooplay.net",153],["gostreamon.net",153],["happy2hub.org",153],["harimanga.com",153],["healthnewsreel.com",153],["hexupload.net",153],["hinatasoul.com",153],["hindisite.net",153],["holymanga.net",153],["hxfile.co",153],["isosite.org",153],["iv-soft.com",153],["januflix.expert",153],["jewelry.com.my",153],["johnwardflighttraining.com",153],["kabarportal.com",153],["kstorymedia.com",153],["la123movies.org",153],["lespassionsdechinouk.com",153],["lilymanga.net",153],["linksdegrupos.com.br",153],["livestreamtv.pk",153],["macsite.info",153],["mangapt.com",153],["mangareader.to",153],["mangasite.org",153],["manhuascan.com",153],["megafilmeshdseries.com",153],["megamovies.org",153],["membed.net",153],["mgnetu.com",153],["moddroid.com",153],["moviefree2.com",153],["movies-watch.com.pk",153],["moviesite.app",153],["moviesonline.fm",153],["moviesx.org",153],["moviewatchonline.com.pk",153],["msmoviesbd.com",153],["musicsite.biz",153],["myfernweh.com",153],["myviid.com",153],["nazarickol.com",153],["newsrade.com",153],["noob4cast.com",153],["nsw2u.com",[153,237]],["oko.sh",153],["olympicstreams.me",153],["orangeink.pk",153],["owllink.net",153],["pahaplayers.click",153],["patchsite.net",153],["pdfsite.net",153],["play1002.com",153],["player-cdn.com",153],["productkeysite.com",153],["projectfreetv.one",153],["romsite.org",153],["rufiguta.com",153],["rytmp3.io",153],["send.cm",153],["seriesite.net",153],["seriezloaded.com.ng",153],["serijehaha.com",153],["shrugemojis.com",153],["siteapk.net",153],["siteflix.org",153],["sitegames.net",153],["sitekeys.net",153],["sitepdf.com",153],["sitetorrent.com",153],["softwaresite.net",153],["sportbar.live",153],["sportkart1.xyz",153],["ssyoutube.com",153],["stardima.com",153],["stream4free.live",153],["superapk.org",153],["supermovies.org",153],["tainio-mania.online",153],["talaba.su",153],["tamilguns.org",153],["tatabrada.tv",153],["techtrendmakers.com",153],["theflixer.tv",153],["thememypc.net",153],["thetechzone.online",153],["thripy.com",153],["tonnestreamz.xyz",153],["travelplanspro.com",153],["turcasmania.com",153],["tusfiles.com",153],["tvonlinesports.com",153],["ultramovies.org",153],["uploadbank.com",153],["urdubolo.pk",153],["vidspeeds.com",153],["vumoo.to",153],["warezsite.net",153],["watchmovies2.com",153],["watchmoviesforfree.org",153],["watchofree.com",153],["watchsite.net",153],["watchsouthpark.tv",153],["watchtvch.club",153],["web.livecricket.is",153],["webseries.club",153],["worldcupstream.pm",153],["y2mate.com",153],["youapk.net",153],["youtube4kdownloader.com",153],["yts-subs.com",153],["haho.moe",154],["nicy-spicy.pw",155],["novelmultiverse.com",156],["mylegalporno.com",157],["thecut.com",160],["novelism.jp",161],["alphapolis.co.jp",162],["okrzone.com",163],["game3rb.com",164],["javhub.net",164],["thotvids.com",165],["berklee.edu",166],["rawkuma.com",[167,168]],["moviesjoyhd.to",168],["imeteo.sk",169],["youtubemp3donusturucu.net",170],["surfsees.com",172],["vivo.st",[173,174]],["alueviesti.fi",176],["kiuruvesilehti.fi",176],["lempaala.ideapark.fi",176],["olutposti.fi",176],["urjalansanomat.fi",176],["tainhanhvn.com",178],["titantv.com",179],["3cinfo.net",180],["transportationlies.org",181],["camarchive.tv",182],["crownimg.com",182],["freejav.guru",182],["hentai2read.com",182],["icyporno.com",182],["illink.net",182],["javtiful.com",182],["m-hentai.net",182],["pornblade.com",182],["pornfelix.com",182],["pornxxxxtube.net",182],["redwap.me",182],["redwap2.com",182],["redwap3.com",182],["tubxporn.xxx",182],["ver-comics-porno.com",182],["ver-mangas-porno.com",182],["xanimeporn.com",182],["xxxvideohd.net",182],["zetporn.com",182],["cocomanga.com",183],["mcleaks.net",184],["explorecams.com",184],["minecraft.buzz",184],["chillx.top",185],["playerx.stream",185],["m.liputan6.com",187],["stardewids.com",[187,209]],["ingles.com",188],["spanishdict.com",188],["rureka.com",189],["bunkr.is",190],["amateur8.com",191],["freeporn8.com",191],["maturetubehere.com",191],["embedo.co",192],["corriere.it",193],["oggi.it",193],["2the.space",194],["apkcombo.com",195],["sponsorhunter.com",196],["soft98.ir",197],["novelssites.com",198],["haxina.com",199],["cryptofenz.xyz",199],["torrentmac.net",200],["udvl.com",201],["moviezaddiction.icu",202],["dlpanda.com",203],["socialmediagirls.com",204],["einrichtungsbeispiele.de",205],["weadown.com",206],["molotov.tv",207],["freecoursesonline.me",208],["adelsfun.com",208],["advantien.com",208],["bailbondsfinder.com",208],["bigpiecreative.com",208],["childrenslibrarylady.com",208],["classifarms.com",208],["comtasq.ca",208],["crone.es",208],["ctrmarketingsolutions.com",208],["dropnudes.com",208],["ftuapps.dev",208],["genzsport.com",208],["ghscanner.com",208],["grsprotection.com",208],["gruporafa.com.br",208],["inmatefindcalifornia.com",208],["inmatesearchidaho.com",208],["itsonsitetv.com",208],["mfmfinancials.com",208],["myproplugins.com",208],["onehack.us",208],["ovester.com",208],["paste.bin.sx",208],["privatenudes.com",208],["renoconcrete.ca",208],["richieashbeck.com",208],["sat.technology",208],["short1ink.com",208],["stpm.co.uk",208],["wegotcookies.co",208],["mathcrave.com",208],["commands.gg",209],["smgplaza.com",210],["freepik.com",211],["diyphotography.net",213],["bitchesgirls.com",214],["shopforex.online",215],["programmingeeksclub.com",217],["easymc.io",218],["diendancauduong.com",219],["parentcircle.com",220],["h-game18.xyz",221],["nopay.info",222],["wheelofgold.com",223],["shortlinks.tech",224],["skill4ltu.eu",226],["freepikdownloader.com",227],["freepasses.org",228],["iusedtobeaboss.com",229],["androidpolice.com",230],["cbr.com",230],["dualshockers.com",230],["gamerant.com",230],["howtogeek.com",230],["thegamer.com",230],["blogtruyenmoi.com",231],["igay69.com",232],["graphicget.com",233],["qiwi.gg",234],["netcine2.la",235],["cbc.ca",236]]);

const entitiesMap = new Map([["kisscartoon",1],["kissasian",8],["ganool",8],["pirate",8],["piratebay",8],["pirateproxy",8],["proxytpb",8],["thepiratebay",8],["limetorrents",[10,16]],["king-pes",10],["depedlps",10],["komikcast",10],["idedroidsafelink",10],["links-url",10],["eikaiwamastery",10],["ak4eg",10],["streanplay",11],["steanplay",11],["liferayiseasy",[12,13]],["userupload",16],["pahe",16],["yts",16],["tube8",16],["topeuropix",16],["moviescounter",16],["torrent9",16],["desiremovies",16],["movs4u",16],["uwatchfree",16],["hydrax",16],["4movierulz",16],["projectfreetv",16],["arabseed",16],["btdb",[16,60]],["skymovieshd",16],["world4ufree",16],["streamsport",16],["rojadirectatvhd",16],["userload",16],["freecoursesonline",18],["lordpremium",18],["todovieneok",18],["novablogitalia",18],["anisubindo",18],["btvsports",18],["adyou",19],["fxporn69",22],["rexporn",26],["movies07",26],["pornocomics",26],["sexwebvideo",30],["pornomoll",30],["gsurl",33],["mimaletadepeliculas",34],["readcomiconline",35],["burningseries",36],["dz4soft",37],["yoututosjeff",37],["ebookmed",37],["lanjutkeun",37],["novelasesp",37],["singingdalong",37],["doujindesu",37],["xmovies8",40],["mega-dvdrip",47],["peliculas-dvdrip",47],["desbloqueador",48],["newpelis",[49,58]],["pelix",[49,58]],["allcalidad",[49,182]],["khatrimaza",49],["camwhores",51],["camwhorestv",51],["uproxy",51],["nekopoi",55],["mirrorace",64],["mixdrp",69],["asiansex",71],["japanfuck",71],["japanporn",71],["teensex",71],["vintagetube",71],["xxxmovies",71],["zooqle",75],["hdfull",79],["mangamanga",81],["streameast",83],["thestreameast",83],["vev",87],["vidop",87],["zone-telechargement",89],["megalink",94],["gmx",95],["mega1080p",100],["9hentai",103],["gaypornhdfree",110],["cinemakottaga",110],["privatemoviez",110],["apkmaven",110],["popcornstream",112],["pornktube",130],["watchseries",130],["milfnut",131],["pagalmovies",138],["7starhd",138],["jalshamoviez",138],["9xupload",138],["bdupload",138],["desiupload",138],["rdxhd1",138],["moviessources",149],["nuvid",150],["goload",[152,153]],["0gomovie",153],["0gomovies",153],["123moviefree",153],["1kmovies",153],["1madrasdub",153],["1primewire",153],["2embed",153],["2madrasdub",153],["2umovies",153],["4anime",153],["9xmovies",153],["altadefinizione01",153],["anitube",153],["atomixhq",153],["beinmatch",153],["brmovies",153],["cima4u",153],["clicknupload",153],["cmovies",153],["couchtuner",153],["cricfree",153],["crichd",153],["databasegdriveplayer",153],["dood",153],["f1stream",153],["faselhd",153],["fbstream",153],["file4go",153],["filemoon",153],["filepress",[153,212]],["filmlinks4u",153],["filmpertutti",153],["filmyzilla",153],["fmovies",153],["french-stream",153],["fsapi",153],["fzlink",153],["gdriveplayer",153],["gofilms4u",153],["gogoanime",153],["gomoviefree",153],["gomoviz",153],["gowatchseries",153],["hdmoviefair",153],["hdmovies4u",153],["hdmovies50",153],["hdmoviesfair",153],["hh3dhay",153],["hindilinks4u",153],["hotmasti",153],["hurawatch",153],["klmanga",153],["klubsports",153],["libertestreamvf",153],["livetvon",153],["manga1000",153],["manga1001",153],["mangaraw",153],["mangarawjp",153],["mlbstream",153],["motogpstream",153],["movierulz",153],["movies123",153],["movies2watch",153],["moviesden",153],["moviezaddiction",153],["myflixer",153],["nbastream",153],["netcine",153],["nflstream",153],["nhlstream",153],["onlinewatchmoviespk",153],["pctfenix",153],["pctnew",153],["pksmovies",153],["plyjam",153],["plylive",153],["pogolinks",153],["popcorntime",153],["poscitech",153],["prmovies",153],["rugbystreams",153],["shahed4u",153],["sflix",153],["sitesunblocked",153],["socceronline",153],["solarmovies",153],["sportcast",153],["sportskart",153],["sports-stream",153],["streaming-french",153],["streamers",153],["streamingcommunity",153],["strikeout",153],["t20cup",153],["tennisstreams",153],["torrentdosfilmes",153],["toonanime",153],["tvply",153],["ufcstream",153],["uptomega",153],["uqload",153],["vudeo",153],["vidoo",153],["vipbox",153],["vipboxtv",153],["vipleague",153],["viprow",153],["yesmovies",153],["yomovies",153],["yomovies1",153],["yt2mp3s",153],["kat",153],["katbay",153],["kickass",153],["kickasshydra",153],["kickasskat",153],["kickass2",153],["kickasstorrents",153],["kat2",153],["kattracker",153],["thekat",153],["thekickass",153],["kickassz",153],["kickasstorrents2",153],["topkickass",153],["kickassgo",153],["kkickass",153],["kkat",153],["kickasst",153],["kick4ss",153],["guardaserie",158],["cine-calidad",159],["videovard",175],["gntai",182],["grantorrent",182],["mejortorrent",182],["mejortorrento",182],["mejortorrents",182],["mejortorrents1",182],["mejortorrentt",182],["bg-gledai",208],["gledaitv",208],["shineads",216],["motchill",225]]);

const exceptionsMap = new Map([["mentor.duden.de",[82]],["forum.soft98.ir",[197]]]);

/******************************************************************************/

function addEventListenerDefuser(
    type = '',
    pattern = ''
) {
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('prevent-addEventListener', type, pattern);
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 2);
    const reType = safe.patternToRegex(type, undefined, true);
    const rePattern = safe.patternToRegex(pattern);
    const debug = shouldDebug(extraArgs);
    const targetSelector = extraArgs.elements || undefined;
    const shouldPrevent = (thisArg, type, handler) => {
        if ( targetSelector !== undefined ) {
            const elems = Array.from(document.querySelectorAll(targetSelector));
            if ( elems.includes(thisArg) === false ) { return false; }
        }
        const matchesType = safe.RegExp_test.call(reType, type);
        const matchesHandler = safe.RegExp_test.call(rePattern, handler);
        const matchesEither = matchesType || matchesHandler;
        const matchesBoth = matchesType && matchesHandler;
        if ( debug === 1 && matchesBoth || debug === 2 && matchesEither ) {
            debugger; // jshint ignore:line
        }
        return matchesBoth;
    };
    const trapEddEventListeners = ( ) => {
        const eventListenerHandler = {
            apply: function(target, thisArg, args) {
                let t, h;
                try {
                    t = String(args[0]);
                    h = args[1] instanceof Function
                        ? String(safe.Function_toString(args[1]))
                        : String(args[1]);
                } catch(ex) {
                }
                if ( type === '' && pattern === '' ) {
                    safe.uboLog(logPrefix, `Called: ${t}\n${h}`);
                } else if ( shouldPrevent(thisArg, t, h) ) {
                    return safe.uboLog(logPrefix, `Prevented: ${t}\n${h}`);
                }
                return Reflect.apply(target, thisArg, args);
            },
            get(target, prop, receiver) {
                if ( prop === 'toString' ) {
                    return target.toString.bind(target);
                }
                return Reflect.get(target, prop, receiver);
            },
        };
        self.EventTarget.prototype.addEventListener = new Proxy(
            self.EventTarget.prototype.addEventListener,
            eventListenerHandler
        );
    };
    runAt(( ) => {
        trapEddEventListeners();
    }, extraArgs.runAt);
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1,
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

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.canDebug && details.debug;
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
    try { addEventListenerDefuser(...argsList[i]); }
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
    return uBOL_addEventListenerDefuser();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_addEventListenerDefuser = cloneInto([
            [ '(', uBOL_addEventListenerDefuser.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_addEventListenerDefuser);
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
    delete page.uBOL_addEventListenerDefuser;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
