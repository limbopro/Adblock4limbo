/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
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

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["load","Object"],["mousedown","clientX"],["load","hard_block"],["/contextmenu|keydown/"],["","adb"],["load","adBlock"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["error"],["load","onload"],["","pop"],["","BACK"],["load","getComputedStyle"],["load","adsense"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["load","nextFunction"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["","popMagic"],["getexoloader"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["",";}"],["load","BetterPop"],["click","popMagic"],["mousedown","preventDefault"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","shortener"],["DOMContentLoaded","adlinkfly"],["mousedown","trigger"],["","0x"],["DOMContentLoaded","ads"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["","adsense"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["","click"],["canplay"],["click","trigger"],["mouseout","clientWidth"],["click"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["message","data.slice"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["DOMContentLoaded","compupaste"],["keydown","keyCode"],["mousedown","!!{});"],["keydown"],["DOMContentLoaded","isMobile"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["","window.open"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["load","ads"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["blur","focusOut"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["","loadScripts"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["load","head"],["/error|load/","/onerror|showModal/"],["load","doTest"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["click","open"],["beforeunload"],["click","0x"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["click","openSite"],["","removeChild"],["click","pu_count"],["","/pop|_blank/"],["click","allclick_Public"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["click","_blank"],["contextmenu"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["load","block"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["DOMContentLoaded","disableDeveloperTools"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["","about:blank"],["DOMContentLoaded","iframe"],["load","popMagic"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["","$"],["","exoJsPop101"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["","[native code]"],["DOMContentLoaded","clientHeight"],["click","window.focus"],["load","htmls"],["click","[native code]"],["click","event.dispatch"],["load","adblock"],["","Math"],["","tabUnder"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["load","length"],["gtmloaderror"],["DOMContentLoaded","canRunAds"],["click","adobeModalTestABenabled"],["blur","console.log"],["blur","counter"],["","AdB"],["load","adSession"],["load","Ads"],["load","/abb|htmls|nextFunction/"],["","adsBlocked"],["load","goog"],["DOMContentLoaded","googlesyndication"],["DOMContentLoaded","redURL"],["np.evtdetect"],["load","AdBlock"],["load","popunder"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["mousedown"],["load","document.getElementById"],["mousedown","tabUnder"],["DOMContentLoaded","adsbygoogle"],["click","popactive"],["load","adsbygoogle"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["click","alink"],["/adblock/i"],["","daadb"],["click","handleClick"],["load","google-analytics"],["","sessionStorage"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",2],["userscloud.com",3],["timesofindia.indiatimes.com",4],["drrtyr.mx",4],["pinoyalbums.com",4],["multiplayer.it",4],["bild.de",5],["mediafire.com",[6,7]],["pinsystem.co.uk",8],["fembed.com",8],["ancensored.com",8],["o2tvseries.com",8],["mp3fiber.com",[8,19]],["xrivonet.info",8],["afreesms.com",9],["tio.ch",9],["lavanguardia.com",9],["eplayer.click",9],["kingofdown.com",10],["radiotormentamx.com",10],["quelleestladifference.fr",10],["otakuworldsite.blogspot.com",10],["ad-itech.blogspot.com",10],["sna3talaflam.com",10],["agar.pro",10],["unlockapk.com",10],["mobdi3ips.com",10],["socks24.org",10],["drivebox.club",10],["interviewgig.com",10],["jobhunterplg.xyz",10],["javaguides.net",10],["almohtarif-tech.net",10],["hl-live.de",10],["forum.release-apk.com",10],["devoloperxda.blogspot.com",10],["zwergenstadt.com",10],["primedeportes.es",10],["doujindesu.cc",10],["upxin.net",10],["ciudadblogger.com",10],["ke-1.com",10],["greatanimation.it",10],["secretsdeepweb.blogspot.com",10],["bit-shares.com",10],["itdmusics.com",10],["aspdotnet-suresh.com",10],["tudo-para-android.com",10],["urdulibrarypk.blogspot.com",10],["zerotopay.com",10],["akw.to",10],["mawsueaa.com",10],["hesgoal-live.io",10],["pornhd.com",11],["cnnamador.com",[11,38]],["cle0desktop.blogspot.com",11],["turkanime.co",11],["camclips.tv",[11,51]],["blackpornhq.com",11],["xsexpics.com",11],["ulsex.net",11],["wannafreeporn.com",11],["ytube2dl.com",11],["multiup.us",11],["protege-torrent.com",11],["bibme.org",15],["citationmachine.net",15],["easybib.com",16],["userupload.net",17],["vermangasporno.com",17],["imgtorrnt.in",17],["picbaron.com",[17,25]],["worldcupfootball.me",17],["letmejerk.com",17],["letmejerk3.com",17],["letmejerk4.com",17],["letmejerk5.com",17],["letmejerk6.com",17],["letmejerk7.com",17],["dlapk4all.com",17],["kropic.com",17],["kvador.com",17],["pdfindir.net",17],["brstej.com",17],["topwwnews.com",17],["xsanime.com",17],["vidlo.us",17],["put-locker.com",17],["youx.xxx",17],["animeindo.asia",17],["masahub.net",17],["adclickersbot.com",17],["badtaste.it",18],["mage.si",19],["totaldebrid.org",19],["hesgoal.com",19],["neko-miku.com",19],["elsfile.org",19],["venstrike.jimdofree.com",19],["schrauben-normen.de",19],["avengerinator.blogspot.com",19],["link-to.net",19],["hanimesubth.com",19],["gsmturkey.net",19],["adshrink.it",19],["presentation-ppt.com",19],["mangacanblog.com",19],["pekalongan-cits.blogspot.com",19],["4tymode.win",19],["reifenrechner.at",19],["tire-size-calculator.info",19],["kord-jadul.com",19],["linuxsecurity.com",19],["encodinghub.com",19],["readyssh.net",19],["itsguider.com",19],["cotravinh.blogspot.com",19],["itudong.com",19],["shortx.net",19],["comandotorrenthd.org",19],["turkdebrid.net",19],["linkvertise.com",19],["lecturel.com",19],["comboforum.com",19],["bakai.org",19],["nar.k-ba.net",19],["tiroalpalo.org",19],["gotporn.com",21],["freepornrocks.com",21],["tvhai.org",21],["simpcity.su",21],["realgfporn.com",[22,23]],["titsbox.com",22],["thisvid.com",23],["xvideos-downloader.net",23],["imgspice.com",24],["luscious.net",[25,91]],["6indianporn.com",25],["amateurebonypics.com",25],["amateuryoungpics.com",25],["cinemabg.net",25],["desimmshd.com",25],["givemeaporn.com",25],["jav-asia.top",25],["javf.net",25],["javideo.net",25],["kr18plus.com",25],["pilibook.com",25],["pornborne.com",25],["porngrey.com",25],["submilf.com",25],["subtaboo.com",25],["tktube.com",25],["xfrenchies.com",25],["frauporno.com",25],["qqxnxx.com",25],["sexvideos.host",25],["aiimgvlog.fun",25],["vikiporn.com",26],["tnaflix.com",26],["hentai2w.com",[26,33]],["yourlust.com",26],["hotpornfile.org",26],["jav789.com",26],["javbuz.com",26],["letfap.com",26],["watchfreexxx.net",26],["vintageporntubes.com",26],["angelgals.com",26],["babesexy.com",26],["porndaa.com",26],["ganstamovies.com",26],["youngleak.com",26],["porndollz.com",26],["xnxxvideo.pro",26],["xvideosxporn.com",26],["onlyhgames.com",26],["filmpornofrancais.fr",26],["pictoa.com",[26,49]],["javout.co",26],["adultasianporn.com",26],["nsfwmonster.com",26],["girlsofdesire.org",26],["gaytail.com",26],["fetish-bb.com",26],["rumporn.com",26],["soyoungteens.com",26],["zubby.com",26],["lesbian8.com",26],["gayforfans.com",26],["reifporn.de",26],["javtsunami.com",26],["18tube.sex",26],["xxxextreme.org",26],["amateurs-fuck.com",26],["sex-amateur-clips.com",26],["hentaiworld.tv",26],["dads-banging-teens.com",26],["home-xxx-videos.com",26],["mature-chicks.com",26],["teens-fucking-matures.com",26],["hqbang.com",26],["darknessporn.com",26],["familyporner.com",26],["freepublicporn.com",26],["pisshamster.com",26],["punishworld.com",26],["xanimu.com",26],["pussyspace.com",[27,28]],["pussyspace.net",[27,28]],["empflix.com",29],["cpmlink.net",30],["bdsmstreak.com",30],["cutpaid.com",30],["pornforrelax.com",30],["fatwhitebutt.com",30],["mavplay.xyz",30],["sunporno.com",[31,32,33]],["hentai2read.com",33],["pornblade.com",33],["pornfelix.com",33],["xanimeporn.com",33],["javtiful.com",33],["camarchive.tv",33],["ver-comics-porno.com",33],["ver-mangas-porno.com",33],["illink.net",33],["tubxporn.xxx",33],["m-hentai.net",33],["icyporno.com",33],["redwap.me",33],["redwap2.com",33],["redwap3.com",33],["freejav.guru",33],["pornxxxxtube.net",33],["zetporn.com",33],["crownimg.com",33],["xxxvideohd.net",33],["short.pe",34],["bs.to",36],["efukt.com",36],["kpopsea.com",36],["generacionretro.net",37],["nuevos-mu.ucoz.com",37],["micloudfiles.com",37],["mimaletamusical.blogspot.com",37],["visionias.net",37],["sslproxies24.top",37],["b3infoarena.in",37],["lurdchinexgist.blogspot.com",37],["thefreedommatrix.blogspot.com",37],["hentai-vl.blogspot.com",37],["projetomotog.blogspot.com",37],["ktmx.pro",37],["lirik3satu.blogspot.com",37],["marketmovers.it",37],["pharmaguideline.com",37],["safemaru.blogspot.com",37],["mixloads.com",37],["mangaromance.eu",37],["interssh.com",37],["freesoftpdfdownload.blogspot.com",37],["cirokun.blogspot.com",37],["myadslink.com",37],["blackavelic.com",37],["server.satunivers.tv",37],["eg-akw.com",37],["xn--mgba7fjn.cc",37],["flashingjungle.com",38],["ma-x.org",39],["lavozdegalicia.es",39],["xmovies08.org",41],["globaldjmix.com",42],["zazzybabes.com",43],["haaretz.co.il",44],["haaretz.com",44],["slate.com",45],["peliculas1mega.com",46],["mega-mkv.com",[46,47]],["zona-leros.net",46],["megalinks.info",47],["megapastes.com",47],["mkv-pastes.com",47],["zpaste.net",47],["zlpaste.net",47],["9xlinks.site",47],["acortarm.xyz",48],["acortame.xyz",48],["cine.to",[49,181]],["hdstreamss.club",49],["kissasia.cc",49],["nzbstars.com",50],["digjav.com",51],["videoszoofiliahd.com",52],["xxxtubezoo.com",53],["zooredtube.com",53],["uii.io",54],["megacams.me",56],["rlslog.net",56],["porndoe.com",57],["acienciasgalilei.com",59],["playrust.io",60],["payskip.org",61],["short-url.link",62],["tubedupe.com",63],["fatgirlskinny.net",65],["polska-ie.com",65],["windowsmatters.com",65],["canaltdt.es",66],["masbrooo.com",66],["2ndrun.tv",66],["camclips.cc",[67,68]],["stfly.me",69],["oncehelp.com",69],["queenfaucet.website",69],["lewat.club",69],["curto.win",69],["smallseotools.com",70],["porndex.com",71],["macwelt.de",73],["pcwelt.de",73],["capital.de",73],["geo.de",73],["allmomsex.com",74],["allnewindianporn.com",74],["analxxxvideo.com",74],["animalextremesex.com",74],["anime3d.xyz",74],["animefuckmovies.com",74],["animepornfilm.com",74],["animesexbar.com",74],["animesexclip.com",74],["animexxxsex.com",74],["animexxxfilms.com",74],["anysex.club",74],["apetube.asia",74],["asianfuckmovies.com",74],["asianfucktube.com",74],["asianporn.sexy",74],["asiansexcilps.com",74],["beeg.fund",74],["beegvideoz.com",74],["bestasiansex.pro",74],["bigsexhub.com",74],["bravotube.asia",74],["brutalanimalsfuck.com",74],["candyteenporn.com",74],["daddyfuckmovies.com",74],["desifuckonline.com",74],["exclusiveasianporn.com",74],["exteenporn.com",74],["fantasticporn.net",74],["fantasticyoungporn.com",74],["fineasiansex.com",74],["firstasianpussy.com",74],["freeindiansextube.com",74],["freepornasians.com",74],["freerealvideo.com",74],["fuck-beeg.com",74],["fuck-xnxx.com",74],["fuckasian.pro",74],["fuckfuq.com",74],["fuckundies.com",74],["fullasiantube.com",74],["gojapaneseporn.com",74],["golderotica.com",74],["goodyoungsex.com",74],["goyoungporn.com",74],["hardxxxmoms.com",74],["hdvintagetube.com",74],["hentaiporn.me",74],["hentaisexfilms.com",74],["hentaisexuality.com",74],["hot-teens-movies.mobi",74],["hotanimepornvideos.com",74],["hotanimevideos.com",74],["hotasianpussysex.com",74],["hotjapaneseshows.com",74],["hotmaturetube.com",74],["hotmilfs.pro",74],["hotorientalporn.com",74],["hotpornsexvideos.com",74],["hotpornyoung.com",74],["hotxxxjapanese.com",74],["hotxxxpussy.com",74],["indiafree.net",74],["indianpornvideo.online",74],["japanpornclip.com",74],["japanesetube.video",74],["japansex.me",74],["japanesexxxporn.com",74],["japansporno.com",74],["japanxxx.asia",74],["japanxxxworld.com",74],["keezmovies.surf",74],["lingeriefuckvideo.com",74],["liveanimalporn.zooo.club",74],["madhentaitube.com",74],["megahentaitube.com",74],["megajapanesesex.com",74],["megajapantube.com",74],["milfxxxpussy.com",74],["momsextube.pro",74],["momxxxass.com",74],["monkeyanimalporn.com",74],["moviexxx.mobi",74],["newanimeporn.com",74],["newjapanesexxx.com",74],["nicematureporn.com",74],["nudeplayboygirls.com",74],["openxxxporn.com",74],["originalindianporn.com",74],["originalteentube.com",74],["pig-fuck.com",74],["plainasianporn.com",74],["popularasianxxx.com",74],["pornanimetube.com",74],["pornasians.pro",74],["pornhat.asia",74],["pornheed.online",74],["pornjapanesesex.com",74],["pornomovies.asia",74],["pornvintage.tv",74],["primeanimesex.com",74],["realjapansex.com",74],["realmomsex.com",74],["redsexhub.com",74],["retroporn.world",74],["retrosexfilms.com",74],["sex-free-movies.com",74],["sexanimesex.com",74],["sexanimetube.com",74],["sexjapantube.com",74],["sexmomvideos.com",74],["sexteenxxxtube.com",74],["sexxxanimal.com",74],["sexyoungtube.com",74],["sexyvintageporn.com",74],["sopornmovies.com",74],["spicyvintageporn.com",74],["sunporno.club",74],["tabooanime.club",74],["teenextrem.com",74],["teenfucksex.com",74],["teenhost.net",74],["teensexass.com",74],["tnaflix.asia",74],["totalfuckmovies.com",74],["totalmaturefuck.com",74],["txxx.asia",74],["voyeurpornsex.com",74],["warmteensex.com",74],["wetasiancreampie.com",74],["wildhentaitube.com",74],["wowyoungsex.com",74],["xhamster-art.com",74],["xmovie.pro",74],["xnudevideos.com",74],["xnxxjapon.com",74],["xpics.me",74],["xvide.me",74],["xxxanimefuck.com",74],["xxxanimevideos.com",74],["xxxanimemovies.com",74],["xxxhentai.xyz",74],["xxxhentaimovies.com",74],["xxxhothub.com",74],["xxxjapaneseporntube.com",74],["xxxlargeporn.com",74],["xxxmomz.com",74],["xxxpornmilf.com",74],["xxxpussyclips.com",74],["xxxpussysextube.com",74],["xxxretrofuck.com",74],["xxxsex.pro",74],["xxxsexyjapanese.com",74],["xxxteenyporn.com",74],["xxxvideo.asia",74],["xxxvideos.ink",74],["xxxyoungtv.com",74],["youjizzz.club",74],["youngpussyfuck.com",74],["bayimg.com",75],["celeb.gate.cc",76],["eodev.com",77],["masterplayer.xyz",79],["pussy-hub.com",79],["compucalitv.com",80],["duden.de",84],["pennlive.com",86],["beautypageants.indiatimes.com",87],["01fmovies.com",88],["lnk2.cc",90],["fullhdxxx.com",91],["classicpornbest.com",91],["1youngteenporn.com",91],["www-daftarharga.blogspot.com",[91,164]],["miraculous.to",[91,172]],["vtube.to",91],["gosexpod.com",92],["tubepornclassic.com",93],["shemalez.com",93],["otakukan.com",94],["xcafe.com",95],["pornfd.com",95],["venusarchives.com",95],["imagehaha.com",96],["imagenpic.com",96],["imageshimage.com",96],["imagetwist.com",96],["deusasporno.com.br",97],["sambaporno2.com",97],["sexoamador.blog.br",97],["videospornozinhos.com",97],["videosexoquente.com",97],["xvideosf.com",97],["k1nk.co",97],["watchasians.cc",97],["alexsports.xyz",97],["lulustream.com",97],["luluvdo.com",97],["web.de",98],["news18.com",99],["thelanb.com",100],["dropmms.com",100],["softdescargas.com",101],["softwaredescargas.com",101],["cracking-dz.com",102],["gazzetta.it",104],["alliptvlinks.com",105],["waterfall.money",105],["port.hu",107],["dziennikbaltycki.pl",108],["dzienniklodzki.pl",108],["dziennikpolski24.pl",108],["dziennikzachodni.pl",108],["echodnia.eu",108],["expressbydgoski.pl",108],["expressilustrowany.pl",108],["gazetakrakowska.pl",108],["gazetalubuska.pl",108],["gazetawroclawska.pl",108],["gk24.pl",108],["gloswielkopolski.pl",108],["gol24.pl",108],["gp24.pl",108],["gra.pl",108],["gs24.pl",108],["kurierlubelski.pl",108],["motofakty.pl",108],["naszemiasto.pl",108],["nowiny24.pl",108],["nowosci.com.pl",108],["nto.pl",108],["polskatimes.pl",108],["pomorska.pl",108],["poranny.pl",108],["sportowy24.pl",108],["strefaagro.pl",108],["strefabiznesu.pl",108],["stronakobiet.pl",108],["telemagazyn.pl",108],["to.com.pl",108],["wspolczesna.pl",108],["course9x.com",108],["courseclub.me",108],["azrom.net",108],["alttyab.net",108],["esopress.com",108],["nesiaku.my.id",108],["onemanhua.com",109],["freeindianporn.mobi",109],["dr-farfar.com",110],["boyfriendtv.com",111],["brandstofprijzen.info",112],["netfuck.net",113],["kisahdunia.com",113],["javsex.to",113],["nulljungle.com",113],["oyuncusoruyor.com",113],["pbarecap.ph",113],["sourds.net",113],["teknobalta.com",113],["tinyppt.com",113],["tvinternetowa.info",113],["sqlserveregitimleri.com",113],["tutcourse.com",113],["readytechflip.com",113],["novinhastop.com",113],["warddogs.com",113],["dvdgayporn.com",113],["iimanga.com",113],["tinhocdongthap.com",113],["tremamnon.com",113],["freedownloadvideo.net",113],["423down.com",113],["brizzynovel.com",113],["jugomobile.com",113],["freecodezilla.net",113],["movieslegacy.com",113],["animekhor.xyz",113],["iconmonstr.com",113],["gay-tubes.cc",113],["rbxscripts.net",113],["comentariodetexto.com",113],["wordpredia.com",113],["livsavr.co",113],["allfaucet.xyz",[113,193]],["replica-watch.info",113],["alludemycourses.com",113],["kayifamilytv.com",113],["blog24.me",[113,193]],["iir.ai",114],["gameofporn.com",116],["homeairquality.org",117],["qpython.club",118],["antifake-funko.fr",118],["e9china.net",119],["ac.ontools.net",119],["marketbeat.com",120],["hentaipornpics.net",121],["apps2app.com",122],["vulture.com",124],["megaplayer.bokracdn.run",125],["hentaistream.com",126],["siteunblocked.info",127],["moviesyug.net",128],["w4files.ws",128],["parispi.net",129],["simkl.com",130],["sayrodigital.com",131],["mrproblogger.com",132],["themezon.net",132],["paperzonevn.com",133],["dailyvideoreports.net",134],["lewd.ninja",135],["systemnews24.com",136],["incestvidz.com",137],["niusdiario.es",138],["playporngames.com",139],["movi.pk",[140,145]],["justin.mp3quack.lol",142],["cutesexyteengirls.com",143],["asianembed.io",144],["0dramacool.net",145],["185.53.88.104",145],["185.53.88.204",145],["185.53.88.15",145],["123movies4k.net",145],["123moviesg.com",145],["1movieshd.com",145],["1rowsports.com",145],["4share-mp3.net",145],["6movies.net",145],["9animetv.to",145],["720pstream.me",145],["abysscdn.com",145],["adblockplustape.com",145],["ajkalerbarta.com",145],["akstream.xyz",145],["androidapks.biz",145],["androidsite.net",145],["animefenix.com",145],["animeonlinefree.org",145],["animesite.net",145],["animespank.com",145],["aniworld.to",145],["apkmody.io",145],["appsfree4u.com",145],["audioz.download",145],["bdnewszh.com",145],["beastlyprints.com",145],["bengalisite.com",145],["bestfullmoviesinhd.org",145],["betteranime.net",145],["blacktiesports.live",145],["buffsports.stream",145],["ch-play.com",145],["clickforhire.com",145],["cloudy.pk",145],["computercrack.com",145],["coolcast2.com",145],["crackedsoftware.biz",145],["crackfree.org",145],["cracksite.info",145],["cryptoblog24.info",145],["cuatrolatastv.blogspot.com",145],["cydiasources.net",145],["dirproxy.com",145],["dopebox.to",145],["downloadapk.info",145],["downloadapps.info",145],["downloadgames.info",145],["downloadmusic.info",145],["downloadsite.org",145],["downloadwella.com",145],["ebooksite.org",145],["educationtips213.blogspot.com",145],["egyup.live",145],["embed.meomeo.pw",145],["embed.scdn.to",145],["emulatorsite.com",145],["essaysharkwriting.club",145],["extrafreetv.com",145],["fakedetail.com",145],["fclecteur.com",145],["files.im",145],["flexyhit.com",145],["fmoviefree.net",145],["fmovies24.com",145],["footyhunter3.xyz",145],["freeflix.info",145],["freemoviesu4.com",145],["freeplayervideo.com",145],["freesoccer.net",145],["fseries.org",145],["gamefast.org",145],["gamesite.info",145],["gmanga.me",145],["gocast123.me",145],["gogohd.net",145],["gogoplay5.com",145],["gooplay.net",145],["gostreamon.net",145],["happy2hub.org",145],["harimanga.com",145],["healthnewsreel.com",145],["hexupload.net",145],["hinatasoul.com",145],["hindisite.net",145],["holymanga.net",145],["hxfile.co",145],["isosite.org",145],["iv-soft.com",145],["januflix.expert",145],["jewelry.com.my",145],["johnwardflighttraining.com",145],["kabarportal.com",145],["kstorymedia.com",145],["la123movies.org",145],["lespassionsdechinouk.com",145],["lilymanga.net",145],["linksdegrupos.com.br",145],["livestreamtv.pk",145],["macsite.info",145],["mangapt.com",145],["mangareader.to",145],["mangasite.org",145],["manhuascan.com",145],["megafilmeshdseries.com",145],["megamovies.org",145],["membed.net",145],["mgnetu.com",145],["moddroid.com",145],["moviefree2.com",145],["movies-watch.com.pk",145],["moviesite.app",145],["moviesonline.fm",145],["moviesx.org",145],["moviewatchonline.com.pk",145],["msmoviesbd.com",145],["musicsite.biz",145],["myfernweh.com",145],["myviid.com",145],["nazarickol.com",145],["newsrade.com",145],["noob4cast.com",145],["nsw2u.com",[145,242]],["oko.sh",145],["olympicstreams.me",145],["orangeink.pk",145],["owllink.net",145],["pahaplayers.click",145],["patchsite.net",145],["pdfsite.net",145],["play1002.com",145],["player-cdn.com",145],["productkeysite.com",145],["projectfreetv.one",145],["romsite.org",145],["rufiguta.com",145],["rytmp3.io",145],["send.cm",145],["seriesite.net",145],["seriezloaded.com.ng",145],["serijehaha.com",145],["shrugemojis.com",145],["siteapk.net",145],["siteflix.org",145],["sitegames.net",145],["sitekeys.net",145],["sitepdf.com",145],["sitetorrent.com",145],["softwaresite.net",145],["sportbar.live",145],["sportkart1.xyz",145],["ssyoutube.com",145],["stardima.com",145],["stream4free.live",145],["superapk.org",145],["supermovies.org",145],["tainio-mania.online",145],["talaba.su",145],["tamilguns.org",145],["tatabrada.tv",145],["theflixer.tv",145],["thememypc.net",145],["thetechzone.online",145],["thripy.com",145],["tonnestreamz.xyz",145],["travelplanspro.com",145],["turcasmania.com",145],["tusfiles.com",145],["tvonlinesports.com",145],["ultramovies.org",145],["uploadbank.com",145],["urdubolo.pk",145],["vidspeeds.com",145],["vumoo.to",145],["warezsite.net",145],["watchmovies2.com",145],["watchmoviesforfree.org",145],["watchofree.com",145],["watchsite.net",145],["watchsouthpark.tv",145],["watchtvch.club",145],["web.livecricket.is",145],["webseries.club",145],["worldcupstream.pm",145],["y2mate.com",145],["youapk.net",145],["youtube4kdownloader.com",145],["yts-subs.com",145],["haho.moe",146],["nicy-spicy.pw",147],["fap-guru.cam",148],["novelmultiverse.com",149],["mylegalporno.com",150],["thecut.com",153],["novelism.jp",154],["alphapolis.co.jp",155],["okrzone.com",156],["momo-net.com",157],["maxgaming.fi",157],["guiasaude.info",157],["felizemforma.com",157],["financasdeouro.com",157],["game3rb.com",158],["javhub.net",158],["thotvids.com",159],["berklee.edu",160],["rawkuma.com",161],["imeteo.sk",162],["youtubemp3donusturucu.net",163],["surfsees.com",165],["feyorra.top",166],["claimtrx.com",166],["vivo.st",[167,168]],["alueviesti.fi",170],["kiuruvesilehti.fi",170],["lempaala.ideapark.fi",170],["olutposti.fi",170],["urjalansanomat.fi",170],["joyhints.com",171],["tainhanhvn.com",173],["titantv.com",174],["3cinfo.net",175],["transportationlies.org",176],["upshrink.com",177],["cocomanga.com",178],["mcleaks.net",179],["explorecams.com",179],["minecraft.buzz",179],["chillx.top",180],["playerx.stream",180],["m.liputan6.com",182],["stardewids.com",[182,205]],["ingles.com",183],["spanishdict.com",183],["rureka.com",184],["bunkr.is",185],["amateur8.com",186],["freeporn8.com",186],["maturetubehere.com",186],["embedo.co",187],["corriere.it",188],["oggi.it",188],["2the.space",189],["apkcombo.com",191],["sponsorhunter.com",192],["coinscap.info",193],["cryptowidgets.net",193],["greenenez.com",193],["insurancegold.in",193],["webfreetools.net",193],["wiki-topia.com",193],["bitcotasks.com",193],["videolyrics.in",193],["manofadan.com",193],["cempakajaya.com",193],["carsmania.net",193],["carstopia.net",193],["coinsvalue.net",193],["cookinguide.net",193],["freeoseocheck.com",193],["makeupguide.net",193],["tagecoin.com",193],["doge25.in",193],["king-ptcs.com",193],["naijafav.top",193],["ourcoincash.xyz",193],["sh.techsamir.com",193],["claimcoins.site",193],["cryptosh.pro",193],["cryptoearnfaucet.com",193],["coinsrev.com",193],["ohionowcast.info",193],["wiour.com",193],["go.freetrx.fun",193],["bitzite.com",193],["eftacrypto.com",193],["fescrypto.com",193],["appsbull.com",193],["diudemy.com",193],["maqal360.com",193],["earnhub.net",193],["kiddyshort.com",193],["tronxminer.com",193],["soft98.ir",194],["novelssites.com",195],["haxina.com",196],["cryptofenz.xyz",196],["torrentmac.net",197],["moviezaddiction.icu",198],["dlpanda.com",199],["socialmediagirls.com",200],["einrichtungsbeispiele.de",201],["weadown.com",202],["molotov.tv",203],["freecoursesonline.me",204],["dropnudes.com",204],["ftuapps.dev",204],["onehack.us",204],["paste.bin.sx",204],["privatenudes.com",204],["mathcrave.com",204],["commands.gg",205],["smgplaza.com",206],["autosport.com",[207,208]],["motorsport.com",[207,208]],["bravedown.com",209],["freepik.com",210],["pinloker.com",212],["sekilastekno.com",212],["diyphotography.net",213],["bitchesgirls.com",214],["shopforex.online",215],["ltc25.in",[216,217]],["yesmangas1.com",218],["programmingeeksclub.com",219],["hlspanel.xyz",220],["easymc.io",221],["shoot-yalla.tv",222],["diendancauduong.com",223],["parentcircle.com",224],["h-game18.xyz",225],["nopay.info",226],["wheelofgold.com",227],["shortlinks.tech",228],["recipahi.com",229],["skill4ltu.eu",231],["freepikdownloader.com",232],["freepasses.org",233],["iusedtobeaboss.com",234],["blogtruyenmoi.com",235],["repretel.com",236],["igay69.com",237],["cutlink.net",238],["cutsy.net",238],["cutyurls.com",238],["cutty.app",238],["graphicget.com",239],["qiwi.gg",240],["cbc.ca",241]]);

const entitiesMap = new Map([["kisscartoon",1],["kissasian",8],["ganool",8],["pirate",8],["piratebay",8],["pirateproxy",8],["proxytpb",8],["thepiratebay",8],["limetorrents",[10,17]],["king-pes",10],["depedlps",10],["komikcast",10],["idedroidsafelink",10],["links-url",10],["eikaiwamastery",10],["ak4eg",10],["xhamster",11],["xhamster1",11],["xhamster5",11],["xhamster7",11],["rexporn",11],["movies07",11],["pornocomics",11],["streanplay",12],["steanplay",12],["liferayiseasy",[13,14]],["pahe",17],["yts",17],["tube8",17],["topeuropix",17],["moviescounter",17],["torrent9",17],["desiremovies",17],["movs4u",17],["uwatchfree",17],["hydrax",17],["4movierulz",17],["projectfreetv",17],["arabseed",17],["btdb",[17,60]],["skymovieshd",17],["world4ufree",17],["streamsport",17],["rojadirectatvhd",17],["userload",17],["freecoursesonline",19],["lordpremium",19],["todovieneok",19],["novablogitalia",19],["anisubindo",19],["btvsports",19],["adyou",20],["fxporn69",22],["watchseries",25],["pornktube",25],["sexwebvideo",30],["pornomoll",30],["mejortorrent",33],["mejortorrento",33],["mejortorrents",33],["mejortorrents1",33],["mejortorrentt",33],["grantorrent",33],["gntai",33],["allcalidad",[33,49]],["gsurl",34],["mimaletadepeliculas",35],["burningseries",36],["dz4soft",37],["yoututosjeff",37],["ebookmed",37],["lanjutkeun",37],["novelasesp",37],["singingdalong",37],["doujindesu",37],["xmovies8",40],["mega-dvdrip",46],["peliculas-dvdrip",46],["desbloqueador",48],["newpelis",[49,58]],["pelix",[49,58]],["khatrimaza",49],["camwhores",51],["camwhorestv",51],["uproxy",51],["nekopoi",55],["mirrorace",64],["dbupload",71],["mixdrp",72],["asiansex",74],["japanfuck",74],["japanporn",74],["teensex",74],["vintagetube",74],["xxxmovies",74],["zooqle",78],["7starhd",[81,128]],["hdfull",82],["mangamanga",83],["streameast",85],["thestreameast",85],["vev",89],["vidop",89],["zone-telechargement",91],["megalink",97],["gmx",98],["mega1080p",103],["9hentai",106],["gaypornhdfree",113],["cinemakottaga",113],["privatemoviez",113],["apkmaven",113],["popcornstream",115],["dropgalaxy",123],["pagalmovies",128],["jalshamoviez",128],["9xupload",128],["bdupload",128],["desiupload",128],["rdxhd1",128],["moviessources",141],["nuvid",142],["goload",[144,145]],["0gomovie",145],["0gomovies",145],["123moviefree",145],["1kmovies",145],["1madrasdub",145],["1primewire",145],["2embed",145],["2madrasdub",145],["2umovies",145],["4anime",145],["9xmovies",145],["altadefinizione01",145],["anitube",145],["atomixhq",145],["beinmatch",145],["brmovies",145],["cima4u",145],["clicknupload",145],["cmovies",145],["couchtuner",145],["cricfree",145],["crichd",145],["databasegdriveplayer",145],["dood",145],["f1stream",145],["faselhd",145],["fbstream",145],["file4go",145],["filemoon",145],["filepress",[145,211]],["filmlinks4u",145],["filmpertutti",145],["filmyzilla",145],["fmovies",145],["french-stream",145],["fsapi",145],["fzlink",145],["gdriveplayer",145],["gofilms4u",145],["gogoanime",145],["gomoviefree",145],["gomoviz",145],["gowatchseries",145],["hdmoviefair",145],["hdmovies4u",145],["hdmovies50",145],["hdmoviesfair",145],["hh3dhay",145],["hindilinks4u",145],["hotmasti",145],["hurawatch",145],["klmanga",145],["klubsports",145],["libertestreamvf",145],["livetvon",145],["manga1000",145],["manga1001",145],["mangaraw",145],["mangarawjp",145],["mlbstream",145],["motogpstream",145],["movierulz",145],["movies123",145],["movies2watch",145],["moviesden",145],["moviezaddiction",145],["myflixer",145],["nbastream",145],["netcine",145],["nflstream",145],["nhlstream",145],["onlinewatchmoviespk",145],["pctfenix",145],["pctnew",145],["pksmovies",145],["plyjam",145],["plylive",145],["pogolinks",145],["popcorntime",145],["poscitech",145],["prmovies",145],["rugbystreams",145],["shahed4u",145],["sflix",145],["sitesunblocked",145],["socceronline",145],["solarmovies",145],["sportcast",145],["sportskart",145],["sports-stream",145],["streaming-french",145],["streamers",145],["streamingcommunity",145],["strikeout",145],["t20cup",145],["tennisstreams",145],["torrentdosfilmes",145],["toonanime",145],["tvply",145],["ufcstream",145],["uptomega",145],["uqload",145],["vudeo",145],["vidoo",145],["vipbox",145],["vipboxtv",145],["vipleague",145],["viprow",145],["yesmovies",145],["yomovies",145],["yomovies1",145],["yt2mp3s",145],["kat",145],["katbay",145],["kickass",145],["kickasshydra",145],["kickasskat",145],["kickass2",145],["kickasstorrents",145],["kat2",145],["kattracker",145],["thekat",145],["thekickass",145],["kickassz",145],["kickasstorrents2",145],["topkickass",145],["kickassgo",145],["kkickass",145],["kkat",145],["kickasst",145],["kick4ss",145],["guardaserie",151],["cine-calidad",152],["milfnut",157],["videovard",169],["softonic",190],["bg-gledai",204],["gledaitv",204],["motchill",230]]);

const exceptionsMap = new Map([["mentor.duden.de",[84]],["forum.soft98.ir",[194]]]);

/******************************************************************************/

function addEventListenerDefuser(
    type = '',
    pattern = ''
) {
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 2);
    const reType = safe.patternToRegex(type, undefined, true);
    const rePattern = safe.patternToRegex(pattern);
    const log = shouldLog(extraArgs);
    const debug = shouldDebug(extraArgs);
    const trapEddEventListeners = ( ) => {
        const eventListenerHandler = {
            apply: function(target, thisArg, args) {
                let type, handler;
                try {
                    type = String(args[0]);
                    handler = args[1] instanceof Function
                        ? String(safe.Function_toString(args[1]))
                        : String(args[1]);
                } catch(ex) {
                }
                const matchesType = safe.RegExp_test.call(reType, type);
                const matchesHandler = safe.RegExp_test.call(rePattern, handler);
                const matchesEither = matchesType || matchesHandler;
                const matchesBoth = matchesType && matchesHandler;
                if ( log === 1 && matchesBoth || log === 2 && matchesEither || log === 3 ) {
                    safe.uboLog(`addEventListener('${type}', ${handler})`);
                }
                if ( debug === 1 && matchesBoth || debug === 2 && matchesEither ) {
                    debugger; // jshint ignore:line
                }
                if ( matchesBoth ) { return; }
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
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
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
        'Object_defineProperty': Object.defineProperty.bind(Object),
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
        uboLog(...args) {
            if ( scriptletGlobals.has('canDebug') === false ) { return; }
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
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
                    pattern,
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            return {
                pattern,
                re: new this.RegExp(pattern.replace(
                    /[.*+?^${}()|[\]\\]/g, '\\$&'),
                    options.flags
                ),
                expect,
            };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            return this.RegExp_test.call(details.re, haystack) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
            return Object.fromEntries(entries);
        },
    };
    scriptletGlobals.set('safeSelf', safe);
    return safe;
}

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.debug;
}

function shouldLog(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.log;
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
