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

const argsList = [["load","Object"],["mousedown","clientX"],["load","hard_block"],["/contextmenu|keydown/"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["error"],["load","onload"],["","BACK"],["load","getComputedStyle"],["load","adsense"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["load","nextFunction"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","window.open"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["",";}"],["load","BetterPop"],["mousedown","preventDefault"],["load","advertising"],["mousedown","localStorage"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["","adsense"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["DOMContentLoaded","isMobile"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["load","ads"],["click","ShouldShow"],["click","clickCount"],["/adblock/i"],["load","doTest"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","daadb_get_data_fetch"],["click","splashPage"],["load","detect-modal"],["load","_0x"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["load",".call(this"],["load","adblock"],["/touchmove|wheel/","preventDefault()"],["load","showcfkModal"],["DOMContentLoaded","iframe"],["","/_blank/i"],["load","htmls"],["blur","focusOut"],["click","handleClick"],["load","bypass"],["DOMContentLoaded","location.href"],["","popMagic"],["contextmenu"],["blur","counter"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["load","head"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["click","open"],["beforeunload"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["","/pop|_blank/"],["click","allclick_Public"],["click","0x"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["click","_blank"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["mousedown","shown_at"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["","about:blank"],["click","popMagic"],["load","popMagic"],["DOMContentLoaded","adsSrc"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["","exoJsPop101"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["DOMContentLoaded","clientHeight"],["click","window.focus"],["click","[native code]"],["click","event.dispatch"],["","Math"],["DOMContentLoaded","popupurls"],["","tabUnder"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["load","Ads"],["DOMContentLoaded","googlesyndication"],["np.evtdetect"],["load","popunder"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["mousedown"],["load","document.getElementById"],["mousedown","tabUnder"],["click","popactive"],["load","adsbygoogle"],["DOMContentLoaded","location.replace"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["error","blocker"],["click","alink"],["","daadb"],["load","google-analytics"],["","sessionStorage"],["load","fetch"],["click","pingUrl"],["mousedown","scoreUrl"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",2],["userscloud.com",3],["timesofindia.indiatimes.com",4],["drrtyr.mx",4],["pinoyalbums.com",4],["multiplayer.it",4],["mediafire.com",[5,6]],["pinsystem.co.uk",7],["fembed.com",7],["ancensored.com",7],["mp3fiber.com",[7,17]],["xrivonet.info",7],["afreesms.com",8],["tu.no",8],["tio.ch",8],["lavanguardia.com",8],["eplayer.click",8],["kingofdown.com",9],["radiotormentamx.com",9],["quelleestladifference.fr",9],["otakuworldsite.blogspot.com",9],["ad-itech.blogspot.com",9],["sna3talaflam.com",9],["agar.pro",9],["unlockapk.com",9],["mobdi3ips.com",9],["socks24.org",9],["interviewgig.com",9],["javaguides.net",9],["almohtarif-tech.net",9],["forum.release-apk.com",9],["devoloperxda.blogspot.com",9],["zwergenstadt.com",9],["primedeportes.es",9],["9goals.live",9],["upxin.net",9],["ciudadblogger.com",9],["ke-1.com",9],["secretsdeepweb.blogspot.com",9],["bit-shares.com",9],["itdmusics.com",9],["aspdotnet-suresh.com",9],["tudo-para-android.com",9],["urdulibrarypk.blogspot.com",9],["zerotopay.com",9],["akw.to",9],["mawsueaa.com",9],["hesgoal-live.io",9],["king-shoot.io",9],["bibme.org",13],["citationmachine.net",13],["easybib.com",14],["vermangasporno.com",15],["imgtorrnt.in",15],["picbaron.com",[15,139]],["letmejerk.com",15],["letmejerk2.com",15],["letmejerk3.com",15],["letmejerk4.com",15],["letmejerk5.com",15],["letmejerk6.com",15],["letmejerk7.com",15],["dlapk4all.com",15],["kropic.com",15],["kvador.com",15],["pdfindir.net",15],["brstej.com",15],["topwwnews.com",15],["xsanime.com",15],["vidlo.us",15],["put-locker.com",15],["youx.xxx",15],["animeindo.asia",15],["masahub.net",15],["adclickersbot.com",15],["badtaste.it",16],["mage.si",17],["totaldebrid.org",17],["neko-miku.com",17],["elsfile.org",17],["venstrike.jimdofree.com",17],["schrauben-normen.de",17],["avengerinator.blogspot.com",17],["link-to.net",17],["hanimesubth.com",17],["gsmturkey.net",17],["adshrink.it",17],["presentation-ppt.com",17],["mangacanblog.com",17],["pekalongan-cits.blogspot.com",17],["4tymode.win",17],["eurotruck2.com.br",17],["linkvertise.com",17],["reifenrechner.at",17],["tire-size-calculator.info",17],["linuxsecurity.com",17],["encodinghub.com",17],["itsguider.com",17],["cotravinh.blogspot.com",17],["itudong.com",17],["shortx.net",17],["lecturel.com",17],["bakai.org",17],["nar.k-ba.net",17],["tiroalpalo.org",17],["shemalez.com",19],["tubepornclassic.com",19],["gotporn.com",20],["freepornrocks.com",20],["tvhai.org",20],["simpcity.su",20],["realgfporn.com",[21,22]],["titsbox.com",21],["thisvid.com",22],["xvideos-downloader.net",22],["imgspice.com",23],["vikiporn.com",24],["tnaflix.com",24],["hentai2w.com",[24,191]],["yourlust.com",24],["hotpornfile.org",24],["watchfreexxx.net",24],["vintageporntubes.com",24],["angelgals.com",24],["babesexy.com",24],["porndaa.com",24],["ganstamovies.com",24],["youngleak.com",24],["porndollz.com",24],["xnxxvideo.pro",24],["xvideosxporn.com",24],["filmpornofrancais.fr",24],["pictoa.com",[24,48]],["adultasianporn.com",24],["nsfwmonster.com",24],["girlsofdesire.org",24],["gaytail.com",24],["fetish-bb.com",24],["rumporn.com",24],["soyoungteens.com",24],["zubby.com",24],["lesbian8.com",24],["gayforfans.com",24],["reifporn.de",24],["javtsunami.com",24],["18tube.sex",24],["xxxextreme.org",24],["amateurs-fuck.com",24],["sex-amateur-clips.com",24],["hentaiworld.tv",24],["dads-banging-teens.com",24],["home-xxx-videos.com",24],["mature-chicks.com",24],["teens-fucking-matures.com",24],["hqbang.com",24],["darknessporn.com",24],["familyporner.com",24],["freepublicporn.com",24],["pisshamster.com",24],["punishworld.com",24],["xanimu.com",24],["pornhd.com",25],["cnnamador.com",[25,37]],["cle0desktop.blogspot.com",25],["turkanime.co",25],["camclips.tv",[25,49]],["blackpornhq.com",25],["xsexpics.com",25],["ulsex.net",25],["wannafreeporn.com",25],["ytube2dl.com",25],["multiup.us",25],["protege-torrent.com",25],["pussyspace.com",[26,27]],["pussyspace.net",[26,27]],["empflix.com",28],["cpmlink.net",29],["bdsmstreak.com",29],["cutpaid.com",29],["pornforrelax.com",29],["fatwhitebutt.com",29],["mavplay.xyz",29],["sunporno.com",[30,31,191]],["short.pe",32],["bs.to",35],["efukt.com",35],["generacionretro.net",36],["nuevos-mu.ucoz.com",36],["micloudfiles.com",36],["mimaletamusical.blogspot.com",36],["visionias.net",36],["b3infoarena.in",36],["lurdchinexgist.blogspot.com",36],["thefreedommatrix.blogspot.com",36],["hentai-vl.blogspot.com",36],["projetomotog.blogspot.com",36],["ktmx.pro",36],["lirik3satu.blogspot.com",36],["marketmovers.it",36],["pharmaguideline.com",36],["safemaru.blogspot.com",36],["mixloads.com",36],["mangaromance.eu",36],["interssh.com",36],["freesoftpdfdownload.blogspot.com",36],["cirokun.blogspot.com",36],["myadslink.com",36],["blackavelic.com",36],["server.satunivers.tv",36],["eg-akw.com",36],["xn--mgba7fjn.cc",36],["flashingjungle.com",37],["ma-x.org",38],["lavozdegalicia.es",38],["xmovies08.org",40],["globaldjmix.com",41],["zazzybabes.com",42],["haaretz.co.il",43],["haaretz.com",43],["slate.com",44],["megalinks.info",45],["megapastes.com",45],["mega-mkv.com",[45,46]],["mkv-pastes.com",45],["zpaste.net",45],["zlpaste.net",45],["9xlinks.site",45],["zona-leros.net",46],["acortarm.xyz",47],["acortame.xyz",47],["cine.to",[48,196]],["kissasia.cc",48],["digjav.com",49],["videoszoofiliahd.com",50],["xxxtubezoo.com",51],["zooredtube.com",51],["uii.io",52],["megacams.me",54],["rlslog.net",54],["porndoe.com",55],["acienciasgalilei.com",57],["playrust.io",58],["payskip.org",59],["short-url.link",60],["tubedupe.com",61],["mcrypto.club",62],["fatgirlskinny.net",63],["polska-ie.com",63],["windowsmatters.com",63],["canaltdt.es",64],["masbrooo.com",64],["2ndrun.tv",64],["stfly.me",65],["oncehelp.com",65],["queenfaucet.website",65],["curto.win",65],["smallseotools.com",66],["macwelt.de",68],["pcwelt.de",68],["capital.de",68],["geo.de",68],["allmomsex.com",69],["allnewindianporn.com",69],["analxxxvideo.com",69],["animalextremesex.com",69],["anime3d.xyz",69],["animefuckmovies.com",69],["animepornfilm.com",69],["animesexbar.com",69],["animesexclip.com",69],["animexxxsex.com",69],["animexxxfilms.com",69],["anysex.club",69],["apetube.asia",69],["asianfuckmovies.com",69],["asianfucktube.com",69],["asianporn.sexy",69],["asiansexcilps.com",69],["beeg.fund",69],["beegvideoz.com",69],["bestasiansex.pro",69],["bravotube.asia",69],["brutalanimalsfuck.com",69],["candyteenporn.com",69],["daddyfuckmovies.com",69],["desifuckonline.com",69],["exclusiveasianporn.com",69],["exteenporn.com",69],["fantasticporn.net",69],["fantasticyoungporn.com",69],["fineasiansex.com",69],["firstasianpussy.com",69],["freeindiansextube.com",69],["freepornasians.com",69],["freerealvideo.com",69],["fuck-beeg.com",69],["fuck-xnxx.com",69],["fuckasian.pro",69],["fuckfuq.com",69],["fuckundies.com",69],["gojapaneseporn.com",69],["golderotica.com",69],["goodyoungsex.com",69],["goyoungporn.com",69],["hardxxxmoms.com",69],["hdvintagetube.com",69],["hentaiporn.me",69],["hentaisexfilms.com",69],["hentaisexuality.com",69],["hot-teens-movies.mobi",69],["hotanimepornvideos.com",69],["hotanimevideos.com",69],["hotasianpussysex.com",69],["hotjapaneseshows.com",69],["hotmaturetube.com",69],["hotmilfs.pro",69],["hotorientalporn.com",69],["hotpornyoung.com",69],["hotxxxjapanese.com",69],["hotxxxpussy.com",69],["indiafree.net",69],["indianpornvideo.online",69],["japanpornclip.com",69],["japanesetube.video",69],["japansex.me",69],["japanesexxxporn.com",69],["japansporno.com",69],["japanxxx.asia",69],["japanxxxworld.com",69],["keezmovies.surf",69],["lingeriefuckvideo.com",69],["liveanimalporn.zooo.club",69],["madhentaitube.com",69],["megahentaitube.com",69],["megajapanesesex.com",69],["megajapantube.com",69],["milfxxxpussy.com",69],["momsextube.pro",69],["momxxxass.com",69],["monkeyanimalporn.com",69],["moviexxx.mobi",69],["newanimeporn.com",69],["newjapanesexxx.com",69],["nicematureporn.com",69],["nudeplayboygirls.com",69],["openxxxporn.com",69],["originalindianporn.com",69],["originalteentube.com",69],["pig-fuck.com",69],["plainasianporn.com",69],["popularasianxxx.com",69],["pornanimetube.com",69],["pornasians.pro",69],["pornhat.asia",69],["pornheed.online",69],["pornjapanesesex.com",69],["pornomovies.asia",69],["pornvintage.tv",69],["primeanimesex.com",69],["realjapansex.com",69],["realmomsex.com",69],["redsexhub.com",69],["retroporn.world",69],["retrosexfilms.com",69],["sex-free-movies.com",69],["sexanimesex.com",69],["sexanimetube.com",69],["sexjapantube.com",69],["sexmomvideos.com",69],["sexteenxxxtube.com",69],["sexxxanimal.com",69],["sexyoungtube.com",69],["sexyvintageporn.com",69],["sopornmovies.com",69],["spicyvintageporn.com",69],["sunporno.club",69],["tabooanime.club",69],["teenextrem.com",69],["teenfucksex.com",69],["teenhost.net",69],["teensexass.com",69],["tnaflix.asia",69],["totalfuckmovies.com",69],["totalmaturefuck.com",69],["txxx.asia",69],["voyeurpornsex.com",69],["warmteensex.com",69],["wetasiancreampie.com",69],["wildhentaitube.com",69],["wowyoungsex.com",69],["xhamster-art.com",69],["xmovie.pro",69],["xnudevideos.com",69],["xnxxjapon.com",69],["xpics.me",69],["xvide.me",69],["xxxanimefuck.com",69],["xxxanimevideos.com",69],["xxxanimemovies.com",69],["xxxhentaimovies.com",69],["xxxhothub.com",69],["xxxjapaneseporntube.com",69],["xxxlargeporn.com",69],["xxxmomz.com",69],["xxxpornmilf.com",69],["xxxpussyclips.com",69],["xxxpussysextube.com",69],["xxxretrofuck.com",69],["xxxsex.pro",69],["xxxsexyjapanese.com",69],["xxxteenyporn.com",69],["xxxvideo.asia",69],["xxxvideos.ink",69],["xxxyoungtv.com",69],["youjizzz.club",69],["youngpussyfuck.com",69],["bayimg.com",70],["celeb.gate.cc",71],["masterplayer.xyz",73],["pussy-hub.com",73],["porndex.com",74],["compucalitv.com",75],["diariodenavarra.es",77],["duden.de",79],["pennlive.com",81],["beautypageants.indiatimes.com",82],["01fmovies.com",83],["lnk2.cc",85],["fullhdxxx.com",86],["luscious.net",[86,139]],["classicpornbest.com",86],["xstory-fr.com",86],["1youngteenporn.com",86],["www-daftarharga.blogspot.com",[86,180]],["miraculous.to",[86,186]],["vtube.to",86],["gosexpod.com",87],["otakukan.com",88],["xcafe.com",89],["pornfd.com",89],["venusarchives.com",89],["imagehaha.com",90],["imagenpic.com",90],["imageshimage.com",90],["imagetwist.com",90],["k1nk.co",91],["watchasians.cc",91],["alexsports.xyz",91],["lulustream.com",91],["luluvdo.com",91],["web.de",92],["news18.com",93],["thelanb.com",94],["dropmms.com",94],["softwaredescargas.com",95],["cracking-dz.com",96],["anitube.ninja",97],["gazzetta.it",98],["port.hu",100],["dziennikbaltycki.pl",101],["dzienniklodzki.pl",101],["dziennikpolski24.pl",101],["dziennikzachodni.pl",101],["echodnia.eu",101],["expressbydgoski.pl",101],["expressilustrowany.pl",101],["gazetakrakowska.pl",101],["gazetalubuska.pl",101],["gazetawroclawska.pl",101],["gk24.pl",101],["gloswielkopolski.pl",101],["gol24.pl",101],["gp24.pl",101],["gra.pl",101],["gs24.pl",101],["kurierlubelski.pl",101],["motofakty.pl",101],["naszemiasto.pl",101],["nowiny24.pl",101],["nowosci.com.pl",101],["nto.pl",101],["polskatimes.pl",101],["pomorska.pl",101],["poranny.pl",101],["sportowy24.pl",101],["strefaagro.pl",101],["strefabiznesu.pl",101],["stronakobiet.pl",101],["telemagazyn.pl",101],["to.com.pl",101],["wspolczesna.pl",101],["course9x.com",101],["courseclub.me",101],["azrom.net",101],["alttyab.net",101],["esopress.com",101],["nesiaku.my.id",101],["onemanhua.com",102],["freeindianporn.mobi",102],["dr-farfar.com",103],["boyfriendtv.com",104],["brandstofprijzen.info",105],["netfuck.net",106],["blog24.me",[106,134]],["kisahdunia.com",106],["javsex.to",106],["nulljungle.com",106],["oyuncusoruyor.com",106],["pbarecap.ph",106],["sourds.net",106],["teknobalta.com",106],["tvinternetowa.info",106],["sqlserveregitimleri.com",106],["tutcourse.com",106],["readytechflip.com",106],["novinhastop.com",106],["warddogs.com",106],["dvdgayporn.com",106],["iimanga.com",106],["tinhocdongthap.com",106],["tremamnon.com",106],["423down.com",106],["brizzynovel.com",106],["jugomobile.com",106],["freecodezilla.net",106],["animekhor.xyz",106],["iconmonstr.com",106],["gay-tubes.cc",106],["rbxscripts.net",106],["comentariodetexto.com",106],["wordpredia.com",106],["livsavr.co",106],["allfaucet.xyz",[106,134]],["titbytz.tk",106],["replica-watch.info",106],["alludemycourses.com",106],["kayifamilytv.com",106],["iir.ai",107],["gameofporn.com",109],["qpython.club",110],["antifake-funko.fr",110],["dktechnicalmate.com",110],["recipahi.com",110],["e9china.net",111],["ontools.net",111],["marketbeat.com",112],["hentaipornpics.net",113],["apps2app.com",114],["alliptvlinks.com",115],["waterfall.money",115],["xvideos.com",116],["xvideos2.com",116],["homemoviestube.com",117],["sexseeimage.com",117],["tubereader.me",118],["repretel.com",118],["dagensnytt.com",119],["mrproblogger.com",119],["themezon.net",119],["gfx-station.com",120],["bitzite.com",[120,134,138]],["historyofroyalwomen.com",121],["davescomputertips.com",121],["ukchat.co.uk",122],["hivelr.com",123],["embedz.click",124],["skidrowcodex.net",125],["takimag.com",126],["digi.no",127],["th.gl",128],["scimagojr.com",129],["haxina.com",129],["cryptofenz.xyz",129],["twi-fans.com",130],["learn-cpp.org",131],["upshrink.com",132],["ohionowcast.info",134],["wiour.com",134],["appsbull.com",134],["diudemy.com",134],["maqal360.com",134],["bitcotasks.com",134],["videolyrics.in",134],["manofadan.com",134],["cempakajaya.com",134],["tagecoin.com",134],["doge25.in",134],["king-ptcs.com",134],["naijafav.top",134],["ourcoincash.xyz",134],["sh.techsamir.com",134],["claimcoins.site",134],["cryptosh.pro",134],["coinsrev.com",134],["go.freetrx.fun",134],["eftacrypto.com",134],["fescrypto.com",134],["earnhub.net",134],["kiddyshort.com",134],["tronxminer.com",134],["homeairquality.org",135],["exego.app",136],["cutlink.net",136],["cutsy.net",136],["cutyurls.com",136],["cutty.app",136],["cutnet.net",136],["adcrypto.net",137],["admediaflex.com",137],["aduzz.com",137],["bitcrypto.info",137],["cdrab.com",137],["datacheap.io",137],["hbz.us",137],["savego.org",137],["owsafe.com",137],["sportweb.info",137],["aiimgvlog.fun",139],["6indianporn.com",139],["amateurebonypics.com",139],["amateuryoungpics.com",139],["cinemabg.net",139],["coomer.su",139],["desimmshd.com",139],["frauporno.com",139],["givemeaporn.com",139],["jav-asia.top",139],["javf.net",139],["javideo.net",139],["kemono.su",139],["kr18plus.com",139],["pilibook.com",139],["pornborne.com",139],["porngrey.com",139],["qqxnxx.com",139],["sexvideos.host",139],["submilf.com",139],["subtaboo.com",139],["tktube.com",139],["xfrenchies.com",139],["coingraph.us",140],["momo-net.com",140],["maxgaming.fi",140],["travel.vebma.com",141],["cloud.majalahhewan.com",141],["crm.cekresi.me",141],["ai.tempatwisata.pro",141],["pinloker.com",141],["sekilastekno.com",141],["vulture.com",142],["megaplayer.bokracdn.run",143],["hentaistream.com",144],["siteunblocked.info",145],["larvelfaucet.com",146],["feyorra.top",146],["claimtrx.com",146],["moviesyug.net",147],["w4files.ws",147],["parispi.net",148],["simkl.com",149],["paperzonevn.com",150],["dailyvideoreports.net",151],["lewd.ninja",152],["systemnews24.com",153],["incestvidz.com",154],["niusdiario.es",155],["playporngames.com",156],["movi.pk",[157,161]],["justin.mp3quack.lol",159],["cutesexyteengirls.com",160],["0dramacool.net",161],["185.53.88.104",161],["185.53.88.204",161],["185.53.88.15",161],["123movies4k.net",161],["1movieshd.com",161],["1rowsports.com",161],["4share-mp3.net",161],["6movies.net",161],["9animetv.to",161],["720pstream.me",161],["aagmaal.com",161],["abysscdn.com",161],["ajkalerbarta.com",161],["akstream.xyz",161],["androidapks.biz",161],["androidsite.net",161],["animeonlinefree.org",161],["animesite.net",161],["animespank.com",161],["aniworld.to",161],["apkmody.io",161],["appsfree4u.com",161],["audioz.download",161],["awafim.tv",161],["bdnewszh.com",161],["beastlyprints.com",161],["bengalisite.com",161],["bestfullmoviesinhd.org",161],["betteranime.net",161],["blacktiesports.live",161],["buffsports.stream",161],["ch-play.com",161],["clickforhire.com",161],["cloudy.pk",161],["computercrack.com",161],["coolcast2.com",161],["crackedsoftware.biz",161],["crackfree.org",161],["cracksite.info",161],["cryptoblog24.info",161],["cuatrolatastv.blogspot.com",161],["cydiasources.net",161],["dirproxy.com",161],["dopebox.to",161],["downloadapk.info",161],["downloadapps.info",161],["downloadgames.info",161],["downloadmusic.info",161],["downloadsite.org",161],["downloadwella.com",161],["ebooksite.org",161],["educationtips213.blogspot.com",161],["egyup.live",161],["embed.meomeo.pw",161],["embed.scdn.to",161],["emulatorsite.com",161],["essaysharkwriting.club",161],["exploreera.net",161],["extrafreetv.com",161],["fakedetail.com",161],["fclecteur.com",161],["files.im",161],["flexyhit.com",161],["fmoviefree.net",161],["fmovies24.com",161],["footyhunter3.xyz",161],["freeflix.info",161],["freemoviesu4.com",161],["freeplayervideo.com",161],["freesoccer.net",161],["fseries.org",161],["gamefast.org",161],["gamesite.info",161],["gettapeads.com",161],["gmanga.me",161],["gocast123.me",161],["gogohd.net",161],["gogoplay5.com",161],["gooplay.net",161],["gostreamon.net",161],["happy2hub.org",161],["harimanga.com",161],["healthnewsreel.com",161],["hexupload.net",161],["hinatasoul.com",161],["hindisite.net",161],["holymanga.net",161],["hxfile.co",161],["isosite.org",161],["iv-soft.com",161],["januflix.expert",161],["jewelry.com.my",161],["johnwardflighttraining.com",161],["kabarportal.com",161],["kstorymedia.com",161],["la123movies.org",161],["lespassionsdechinouk.com",161],["lilymanga.net",161],["linksdegrupos.com.br",161],["linkz.wiki",161],["livestreamtv.pk",161],["macsite.info",161],["mangapt.com",161],["mangasite.org",161],["manhuascan.com",161],["megafilmeshdseries.com",161],["megamovies.org",161],["membed.net",161],["moddroid.com",161],["moviefree2.com",161],["movies-watch.com.pk",161],["moviesite.app",161],["moviesonline.fm",161],["moviesx.org",161],["msmoviesbd.com",161],["musicsite.biz",161],["myfernweh.com",161],["myviid.com",161],["nazarickol.com",161],["noob4cast.com",161],["nsw2u.com",[161,250]],["oko.sh",161],["olympicstreams.me",161],["orangeink.pk",161],["owllink.net",161],["pahaplayers.click",161],["patchsite.net",161],["pdfsite.net",161],["play1002.com",161],["player-cdn.com",161],["productkeysite.com",161],["projectfreetv.one",161],["romsite.org",161],["rufiguta.com",161],["rytmp3.io",161],["send.cm",161],["seriesite.net",161],["seriezloaded.com.ng",161],["serijehaha.com",161],["shrugemojis.com",161],["siteapk.net",161],["siteflix.org",161],["sitegames.net",161],["sitekeys.net",161],["sitepdf.com",161],["sitetorrent.com",161],["softwaresite.net",161],["sportbar.live",161],["sportkart1.xyz",161],["ssyoutube.com",161],["stardima.com",161],["stream4free.live",161],["superapk.org",161],["supermovies.org",161],["tainio-mania.online",161],["talaba.su",161],["tamilguns.org",161],["tatabrada.tv",161],["techtrendmakers.com",161],["theflixer.tv",161],["thememypc.net",161],["thetechzone.online",161],["thripy.com",161],["tonnestreamz.xyz",161],["travelplanspro.com",161],["turcasmania.com",161],["tusfiles.com",161],["tvonlinesports.com",161],["ultramovies.org",161],["uploadbank.com",161],["urdubolo.pk",161],["vidspeeds.com",161],["vumoo.to",161],["warezsite.net",161],["watchmovies2.com",161],["watchmoviesforfree.org",161],["watchofree.com",161],["watchsite.net",161],["watchsouthpark.tv",161],["watchtvch.club",161],["web.livecricket.is",161],["webseries.club",161],["worldcupstream.pm",161],["y2mate.com",161],["youapk.net",161],["youtube4kdownloader.com",161],["yts-subs.com",161],["haho.moe",162],["nicy-spicy.pw",163],["novelmultiverse.com",164],["mylegalporno.com",165],["asianembed.io",168],["thecut.com",169],["novelism.jp",170],["alphapolis.co.jp",171],["okrzone.com",172],["game3rb.com",173],["javhub.net",173],["thotvids.com",174],["berklee.edu",175],["rawkuma.com",[176,177]],["moviesjoyhd.to",177],["imeteo.sk",178],["youtubemp3donusturucu.net",179],["surfsees.com",181],["vivo.st",[182,183]],["alueviesti.fi",185],["kiuruvesilehti.fi",185],["lempaala.ideapark.fi",185],["olutposti.fi",185],["urjalansanomat.fi",185],["tainhanhvn.com",187],["titantv.com",188],["3cinfo.net",189],["transportationlies.org",190],["camarchive.tv",191],["crownimg.com",191],["freejav.guru",191],["hentai2read.com",191],["icyporno.com",191],["illink.net",191],["javtiful.com",191],["m-hentai.net",191],["pornblade.com",191],["pornfelix.com",191],["pornxxxxtube.net",191],["redwap.me",191],["redwap2.com",191],["redwap3.com",191],["tubxporn.xxx",191],["ver-comics-porno.com",191],["ver-mangas-porno.com",191],["xanimeporn.com",191],["xxxvideohd.net",191],["zetporn.com",191],["cocomanga.com",192],["sampledrive.in",193],["mcleaks.net",194],["explorecams.com",194],["minecraft.buzz",194],["chillx.top",195],["playerx.stream",195],["m.liputan6.com",197],["stardewids.com",[197,219]],["ingles.com",198],["spanishdict.com",198],["surfline.com",199],["rureka.com",200],["bunkr.is",201],["amateur8.com",202],["freeporn8.com",202],["maturetubehere.com",202],["embedo.co",203],["corriere.it",204],["oggi.it",204],["2the.space",205],["apkcombo.com",206],["sponsorhunter.com",207],["soft98.ir",208],["novelssites.com",209],["torrentmac.net",210],["udvl.com",211],["moviezaddiction.icu",212],["dlpanda.com",213],["socialmediagirls.com",214],["einrichtungsbeispiele.de",215],["weadown.com",216],["molotov.tv",217],["freecoursesonline.me",218],["adelsfun.com",218],["advantien.com",218],["bailbondsfinder.com",218],["bigpiecreative.com",218],["childrenslibrarylady.com",218],["classifarms.com",218],["comtasq.ca",218],["crone.es",218],["ctrmarketingsolutions.com",218],["dropnudes.com",218],["ftuapps.dev",218],["genzsport.com",218],["ghscanner.com",218],["grsprotection.com",218],["gruporafa.com.br",218],["inmatefindcalifornia.com",218],["inmatesearchidaho.com",218],["itsonsitetv.com",218],["mfmfinancials.com",218],["myproplugins.com",218],["onehack.us",218],["ovester.com",218],["paste.bin.sx",218],["privatenudes.com",218],["renoconcrete.ca",218],["richieashbeck.com",218],["sat.technology",218],["short1ink.com",218],["stpm.co.uk",218],["wegotcookies.co",218],["mathcrave.com",218],["commands.gg",219],["smgplaza.com",220],["emturbovid.com",221],["freepik.com",222],["diyphotography.net",224],["bitchesgirls.com",225],["shopforex.online",226],["programmingeeksclub.com",227],["easymc.io",228],["diendancauduong.com",229],["parentcircle.com",230],["h-game18.xyz",231],["nopay.info",232],["wheelofgold.com",233],["shortlinks.tech",234],["skill4ltu.eu",236],["lifestyle.bg",237],["news.bg",237],["topsport.bg",237],["webcafe.bg",237],["freepikdownloader.com",238],["freepasses.org",239],["iusedtobeaboss.com",240],["androidpolice.com",241],["cbr.com",241],["dualshockers.com",241],["gamerant.com",241],["howtogeek.com",241],["thegamer.com",241],["blogtruyenmoi.com",242],["igay69.com",243],["graphicget.com",244],["qiwi.gg",245],["netcine2.la",246],["idnes.cz",[247,248]],["cbc.ca",249]]);

const entitiesMap = new Map([["kisscartoon",1],["kissasian",7],["ganool",7],["pirate",7],["piratebay",7],["pirateproxy",7],["proxytpb",7],["thepiratebay",7],["limetorrents",[9,15]],["king-pes",9],["depedlps",9],["komikcast",9],["idedroidsafelink",9],["links-url",9],["ak4eg",9],["streanplay",10],["steanplay",10],["liferayiseasy",[11,12]],["pahe",15],["yts",15],["tube8",15],["topeuropix",15],["moviescounter",15],["torrent9",15],["desiremovies",15],["movs4u",15],["uwatchfree",15],["hydrax",15],["4movierulz",15],["projectfreetv",15],["arabseed",15],["btdb",[15,58]],["world4ufree",15],["streamsport",15],["rojadirectatvhd",15],["userload",15],["freecoursesonline",17],["lordpremium",17],["todovieneok",17],["novablogitalia",17],["anisubindo",17],["btvsports",17],["adyou",18],["fxporn69",21],["rexporn",25],["movies07",25],["pornocomics",25],["sexwebvideo",29],["pornomoll",29],["gsurl",32],["mimaletadepeliculas",33],["readcomiconline",34],["burningseries",35],["dz4soft",36],["yoututosjeff",36],["ebookmed",36],["lanjutkeun",36],["novelasesp",36],["singingdalong",36],["doujindesu",36],["xmovies8",39],["mega-dvdrip",46],["peliculas-dvdrip",46],["desbloqueador",47],["newpelis",[48,56]],["pelix",[48,56]],["allcalidad",[48,191]],["khatrimaza",48],["camwhores",49],["camwhorestv",49],["uproxy",49],["nekopoi",53],["mirrorace",62],["mixdrp",67],["asiansex",69],["japanfuck",69],["japanporn",69],["teensex",69],["vintagetube",69],["xxxmovies",69],["zooqle",72],["hdfull",76],["mangamanga",78],["streameast",80],["thestreameast",80],["vev",84],["vidop",84],["1337x",86],["x1337x",86],["zone-telechargement",86],["megalink",91],["gmx",92],["mega1080p",97],["9hentai",99],["gaypornhdfree",106],["cinemakottaga",106],["privatemoviez",106],["apkmaven",106],["popcornstream",108],["fc-lc",133],["pornktube",139],["watchseries",139],["milfnut",140],["pagalmovies",147],["7starhd",147],["jalshamoviez",147],["9xupload",147],["bdupload",147],["desiupload",147],["rdxhd1",147],["moviessources",158],["nuvid",159],["0gomovie",161],["0gomovies",161],["123moviefree",161],["1kmovies",161],["1madrasdub",161],["1primewire",161],["2embed",161],["2madrasdub",161],["2umovies",161],["4anime",161],["adblockplustape",161],["altadefinizione01",161],["anitube",161],["atomixhq",161],["beinmatch",161],["brmovies",161],["cima4u",161],["clicknupload",161],["cmovies",161],["cricfree",161],["crichd",161],["databasegdriveplayer",161],["dood",161],["f1stream",161],["faselhd",161],["fbstream",161],["file4go",161],["filemoon",161],["filepress",[161,223]],["filmlinks4u",161],["filmpertutti",161],["filmyzilla",161],["fmovies",161],["french-stream",161],["fzlink",161],["gdriveplayer",161],["gofilms4u",161],["gogoanime",161],["gomoviz",161],["hdmoviefair",161],["hdmovies4u",161],["hdmovies50",161],["hdmoviesfair",161],["hh3dhay",161],["hindilinks4u",161],["hotmasti",161],["hurawatch",161],["klmanga",161],["klubsports",161],["libertestreamvf",161],["livetvon",161],["manga1000",161],["manga1001",161],["mangaraw",161],["mangarawjp",161],["mlbstream",161],["motogpstream",161],["movierulz",161],["movies123",161],["movies2watch",161],["moviesden",161],["moviezaddiction",161],["myflixer",161],["nbastream",161],["netcine",161],["nflstream",161],["nhlstream",161],["onlinewatchmoviespk",161],["pctfenix",161],["pctnew",161],["pksmovies",161],["plyjam",161],["plylive",161],["pogolinks",161],["popcorntime",161],["poscitech",161],["prmovies",161],["rugbystreams",161],["shahed4u",161],["sflix",161],["sitesunblocked",161],["solarmovies",161],["sportcast",161],["sportskart",161],["sports-stream",161],["streaming-french",161],["streamers",161],["streamingcommunity",161],["strikeout",161],["t20cup",161],["tennisstreams",161],["torrentdosfilmes",161],["toonanime",161],["tvply",161],["ufcstream",161],["uptomega",161],["uqload",161],["vudeo",161],["vidoo",161],["vipbox",161],["vipboxtv",161],["vipleague",161],["viprow",161],["yesmovies",161],["yomovies",161],["yomovies1",161],["yt2mp3s",161],["kat",161],["katbay",161],["kickass",161],["kickasshydra",161],["kickasskat",161],["kickass2",161],["kickasstorrents",161],["kat2",161],["kattracker",161],["thekat",161],["thekickass",161],["kickassz",161],["kickasstorrents2",161],["topkickass",161],["kickassgo",161],["kkickass",161],["kkat",161],["kickasst",161],["kick4ss",161],["guardaserie",166],["cine-calidad",167],["videovard",184],["gntai",191],["grantorrent",191],["mejortorrent",191],["mejortorrento",191],["mejortorrents",191],["mejortorrents1",191],["mejortorrentt",191],["shineads",193],["bg-gledai",218],["gledaitv",218],["motchill",235]]);

const exceptionsMap = new Map([["mentor.duden.de",[79]],["forum.soft98.ir",[208]]]);

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
        if ( elem.id !== '' ) { parts.push(`#${CSS.escape(elem.id)}`); }
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
    const trapEddEventListeners = ( ) => {
        const eventListenerHandler = {
            apply: function(target, thisArg, args) {
                let t, h;
                try {
                    t = String(args[0]);
                    if ( typeof args[1] === 'function' ) {
                        h = String(safe.Function_toString(args[1]));
                    } else if ( typeof args[1] === 'object' && args[1] !== null ) {
                        if ( typeof args[1].handleEvent === 'function' ) {
                            h = String(safe.Function_toString(args[1].handleEvent));
                        }
                    } else {
                        h = String(args[1]);
                    }
                } catch(ex) {
                }
                if ( type === '' && pattern === '' ) {
                    safe.uboLog(logPrefix, `Called: ${t}\n${h}\n${elementDetails(thisArg)}`);
                } else if ( shouldPrevent(thisArg, t, h) ) {
                    return safe.uboLog(logPrefix, `Prevented: ${t}\n${h}\n${elementDetails(thisArg)}`);
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
