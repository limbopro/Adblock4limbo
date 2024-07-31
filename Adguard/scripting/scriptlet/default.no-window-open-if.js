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
const uBOL_noWindowOpenIf = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [[],["amazon-adsystem"],["|"],["","10"],["given"],["!bergblock","10"],["//"],["!za.gl","0"],["!?safelink_redirect="],["adblock","1","obj"],["!atomtt"],["!/download\\/|link/"],["!/^https:\\/\\/sendvid\\.com\\/[0-9a-z]+$/"],["/^/","1"],["!api?call=","10","obj"],["!/ytmp3|dropbox/"],["!gdrivedownload"],["!refine?search"],["!embedy"],["wapka"],["!t.me"],["!/prcf.fiyar|themes|pixsense|.jpg/"],["ppcnt"],["","1"],["!direct"],["/^/","15"],["_blank"],["?key="],["!koyso.com"],["!self"],["!blogspot"],["!vidhidepre.com"],["php"],["tempat.org"],["","5"],["!buzzheavier.com"],["onclickmega"],["!dosya","1"],["!newdmn","1"],["!/^\\/d\\//"],["!yt2api"],["!clickmp3"],["bitcoins-update.blogspot.com"],["!coinsearns.com"],["youtube"],["/^/","0"],["!ytcutter.net"],["!/d/"],["!download"],["/xlirdr|hotplay\\-games|hyenadata/"],["!/^\\//"],["/\\.(com|net)\\/4\\//"],["!shrdsk"],["!/^\\/download\\//"],["!abyss.to","1"],["!zuperdrive"]];

const hostnamesMap = new Map([["afreesms.com",0],["hltv.org",0],["mcloud.bz",0],["vidstream.pro",0],["dailyuploads.net",0],["putlocker-website.com",0],["filescdn.com",0],["deportealdia.live",0],["watchmyexgf.net",0],["upload-4ever.com",0],["vortez.net",0],["porn.com",0],["katestube.com",0],["mangoporn.net",0],["nwanime.tv",0],["chooyomi.com",0],["shooshtime.com",0],["picturelol.com",0],["imgspice.com",0],["pornhd.com",0],["bigtitsxxxsex.com",0],["vivud.com",0],["empflix.com",0],["anyporn.com",0],["magnetdl.com",0],["magnetdl.org",0],["short.pe",0],["donkparty.com",0],["dz4link.com",0],["tubemania.org",0],["webdesigndev.com",0],["imageweb.ws",0],["vidoza.net",0],["pelispop.net",0],["streampelis.club",0],["gamcore.com",0],["porcore.com",0],["69games.xxx",0],["vintage-erotica-forum.com",0],["momondo.com",0],["hentai2read.com",0],["lolhentai.net",0],["mangafreak.net",0],["hotscope.tv",0],["micloudfiles.com",0],["assia.tv",0],["assia4.com",0],["assia24.com",0],["seatguru.com",0],["asiananimaltube.org",0],["zoosex.pink",0],["pornrabbit.com",0],["cartoonporno.xxx",0],["youpornru.com",0],["hubfiles.ws",0],["uii.io",0],["powforums.com",0],["titsbox.com",0],["zmovs.com",0],["spycock.com",0],["cut-fly.com",0],["cine24.online",0],["xrivonet.info",0],["gounlimited.to",0],["shortit.pw",0],["pornve.com",0],["sawlive.tv",0],["veekyforums.com",0],["cutpaid.com",0],["televisionlibre.net",0],["durtypass.com",0],["opjav.com",0],["nhentai.net",0],["forexlap.com",0],["cambay.tv",0],["camwhoreshd.com",0],["camwhorespy.com",0],["cwtvembeds.com",0],["x08.ovh",0],["zegtrends.com",0],["fileone.tv",0],["mdbekjwqa.pw",0],["mdfx9dc8n.net",0],["mdzsmutpcvykb.net",0],["mixdrop21.net",0],["mixdropjmk.pw",0],["xpics.me",0],["milfzr.com",0],["pandamovies.pw",0],["simsdom.com",0],["cloudvideo.tv",0],["kinoger.ru",0],["xxxbunker.com",0],["clasicotas.org",0],["watchmoviesrulz.com",0],["sexgalaxy.net",0],["noticiasesports.live",0],["noweconomy.live",0],["googlvideo.com",0],["streamporn.pw",0],["zplayer.live",0],["faucethero.com",0],["720pxmovies.blogspot.com",0],["software-on.com",0],["cdna.tv",0],["cam4.com",0],["filerio.in",0],["ckk.ai",0],["shemalepower.xyz",0],["dlkoo.com",0],["bitcoinminingforex.blogspot.com",0],["vladan.fr",0],["losporn.org",0],["embedsito.com",0],["films5k.com",0],["javcl.me",0],["mavlecteur.com",0],["playfinder.xyz",0],["ujav.me",0],["tpxanime.in",0],["welovestream.xyz",0],["dreamfancy.org",0],["pornult.com",0],["nonktube.com",0],["tusfiles.com",0],["adultdvdparadise.com",0],["freeomovie.info",0],["fullxxxmovies.me",0],["mangoparody.com",0],["mangoporn.co",0],["netflixporno.net",0],["pandamovies.me",0],["playpornfree.xyz",0],["pornkino.cc",0],["pornwatch.ws",0],["watchfreexxx.pw",0],["watchxxxfree.pw",0],["xopenload.pw",0],["xtapes.me",0],["xxxmoviestream.xyz",0],["xxxparodyhd.net",0],["xxxscenes.net",0],["xxxstream.me",0],["youwatchporn.com",0],["skeimg.com",0],["4share.vn",0],["0xxx.ws",0],["ucptt.com",0],["exe.io",0],["exe.app",0],["skincarie.com",0],["fullhdxxx.com",0],["viptube.com",0],["homemature.net",0],["kingsofteens.com",0],["hentaihere.com",0],["yandexcdn.com",0],["iguarras.com",0],["peliculaspornomega.net",0],["adsafelink.com",0],["aii.sh",0],["czechvideo.org",0],["gfsvideos.com",0],["imagehaha.com",0],["vupload.com",0],["series-d.com",0],["naughtymachinima.com",0],["porn00.org",0],["savevideo.tube",0],["tr.savefrom.net",0],["xanimeporn.com",0],["bacakomik.co",0],["porngo.com",0],["streamplusvip.xyz",0],["playembed.xyz",0],["playtemporal.xyz",0],["dr-farfar.com",0],["yeswegays.com",0],["youramateurtube.com",0],["webtor.io",0],["luscious.net",0],["makemoneywithurl.com",0],["dflix.top",0],["gomo.to",0],["cryptofuns.ru",0],["animetemaefiore.club",0],["naniplay.com",0],["savesubs.com",0],["seriesynovelas.online",0],["interracial.com",0],["fatwhitebutt.com",0],["smplace.com",0],["slaughtergays.com",0],["sexiestpicture.com",0],["sassytube.com",0],["vipergirls.to",0],["xh.video",0],["lkc21.net",0],["freegogpcgames.com",0],["smiechawatv.pl",0],["tudogamesbr.com",0],["dogemate.com",0],["pstream.net",0],["shurt.pw",0],["d0000d.com",0],["d000d.com",0],["d0o0d.com",0],["do0od.com",0],["doods.pro",0],["ds2play.com",0],["ds2video.com",0],["fakyutube.com",0],["kokostream.net",0],["xvideos.com",0],["xvideos2.com",0],["katfile.com",0],["hentaihaven.xxx",0],["itv.com",0],["1azayf9w.xyz",0],["c4qhk0je.xyz",0],["defienietlynotme.com",0],["filemooon.top",0],["fmembed.cc",0],["fmhd.bar",0],["fmoonembed.pro",0],["rgeyyddl.skin",0],["sbnmp.bar",0],["sulleiman.com",0],["vpcxz19p.xyz",0],["an1.com",0],["forexwikitrading.com",0],["westmanga.fun",0],["getmodsapk.com",0],["nyaa.land",0],["pornx.to",0],["linkos.info",0],["photogen.hair",0],["pastetot.com",0],["movies7.to",0],["musichq.pe",0],["mmsmaza.com",0],["y2tube.pro",0],["player.javboys.cam",0],["ebaticalfel.com",0],["fansmega.com",0],["iedprivatedqu.com",0],["stownrusis.com",0],["sex-empire.org",0],["sexempire.xyz",0],["94.103.83.138",0],["cuervotv.me",0],["apl341.me",0],["apl323.me",0],["apl332.me",0],["apl340.me",0],["1stream.eu",0],["roystream.com",0],["kimdesene.org",0],["factorp.xyz",0],["erothots.co",0],["flvto.com.co",0],["7mm003.cc",0],["7mmtv.sx",0],["javporn.tv",0],["mm9845.com",0],["ncdnx3.xyz",0],["mp3y.info",0],["netu.frembed.fun",0],["pay4fans.com",0],["filegram.to",0],["freemp3.tube",0],["ytmp3s.nu",0],["clifnewz.online",0],["weirdwolf.net",0],["linksshub.lol",0],["girlmms.com",0],["ottxmaza.com",0],["sexmazahd.com",0],["webxmaza.com",0],["get-to.link",0],["enit.in",0],["birdurls.com",0],["tmail.io",0],["gainl.ink",0],["promo-visits.site",0],["shorterall.com",0],["finish.addurl.biz",0],["financebolo.com",0],["rphost.in",0],["vedamdigi.tech",0],["cancelguider.online",0],["adsfly.in",0],["tvi.la",0],["iir.la",0],["tii.la",0],["oko.sh",0],["oei.la",0],["blogtechh.com",0],["lnbz.la",0],["techbixby.com",0],["blogmyst.com",0],["wp2host.com",0],["insmyst.com",0],["oii.io",0],["sfile.mobi",0],["tutwuri.id",0],["link.paid4link.com",0],["l2db.info",0],["fastpeoplesearch.com",0],["onbox.me",0],["leolist.cc",0],["smutty.com",0],["kropic.com",0],["beeg.party",0],["mm9842.com",0],["gettapeads.com",0],["streamnoads.com",0],["tapeadsenjoyer.com",0],["tapeadvertisement.com",0],["tapeantiads.com",0],["tapeblocker.com",0],["tapelovesads.org",0],["tapenoads.com",0],["tapewithadblock.org",0],["gaystream.online",0],["twistedporn.com",0],["ymp4.download",0],["xxxonlinegames.com",0],["watchpornx.com",0],["wiztube.xyz",0],["digjav.com",0],["sonline.pro",0],["2conv.com",0],["flvto.biz",0],["flv2mp3.by",0],["down-paradise.com",0],["linksly.co",0],["ddownr.com",0],["keepv.id",0],["savethevideo.com",0],["savefrom.net",0],["iseekgirls.com",0],["milapercia.com",0],["windows-1.com",0],["siteunblocked.info",0],["theproxy.app",0],["watch-jav-english.live",0],["planet-streaming1.com",0],["deseneledublate.com",0],["wordcounter.icu",0],["shortenbuddy.com",0],["bradleyviewdoctor.com",0],["brookethoughi.com",0],["brucevotewithin.com",0],["cindyeyefinal.com",0],["edwardarriveoften.com",0],["erikcoldperson.com",0],["graceaddresscommunity.com",0],["heatherdiscussionwhen.com",0],["housecardsummerbutton.com",0],["jamesstartstudent.com",0],["jamiesamewalk.com",0],["jasminetesttry.com",0],["jasonresponsemeasure.com",0],["jayservicestuff.com",0],["johntryopen.com",0],["kathleenmemberhistory.com",0],["kennethofficialitem.com",0],["loriwithinfamily.com",0],["lukecomparetwo.com",0],["markstyleall.com",0],["michaelapplysome.com",0],["morganoperationface.com",0],["nonesnanking.com",0],["paulkitchendark.com",0],["phenomenalityuniform.com",0],["prefulfilloverdoor.com",0],["rebeccaneverbase.com",0],["roberteachfinal.com",0],["robertplacespace.com",0],["ryanagoinvolve.com",0],["sandrataxeight.com",0],["seanshowcould.com",0],["sethniceletter.com",0],["shannonpersonalcost.com",0],["sharonwhiledemocratic.com",0],["vincentincludesuccessful.com",0],["ohentai.org",0],["nuuuppp.online",0],["sinfoniarossini.com",0],["liveonscore.tv",0],["vpn-anbieter-vergleich-test.de",0],["gayvidsclub.com",0],["tits-guru.com",0],["miuiku.com",0],["savelink.site",0],["hentaidude.com",0],["opvid.net",0],["kaplog.com",0],["downloadtwittervideo.com",0],["kiwiexploits.com",0],["thejournal.ie",0],["cdnqq.net",0],["cdn1.fastvid.co",0],["movi.pk",0],["ncdn22.xyz",0],["netu.ac",0],["adultfun.net",0],["sanoybonito.club",0],["7misr4day.com",0],["aquiyahorajuegos.net",0],["hotflix.cc",0],["ontiva.com",0],["gaysearch.com",0],["aniwatch.pro",0],["hianime.to",0],["moviekids.tv",0],["www-y2mate.com",0],["cararegistrasi.com",0],["booru.eu",0],["borwap.xxx",0],["centralboyssp.com.br",0],["czxxx.org",0],["filmdelisi.co",0],["filmovitica.com",0],["foxtube.com",0],["hd-xxx.me",0],["ipornxxx.net",0],["itsfuck.com",0],["javideo.pw",0],["lametrofitness.net",0],["longporn.xyz",0],["matureworld.ws",0],["mp3-convert.org",0],["stilltube.com",0],["streamm4u.club",0],["teenage-nudists.net",0],["xvideos.name",0],["xxx-videos.org",0],["xxxputas.net",0],["youpornfm.com",0],["maxtubeporn.net",0],["vidsvidsvids.com",0],["hentaicomics.pro",0],["y2mate.guru",0],["javstream.top",0],["watchtodaypk.com",0],["assia1.tv",0],["msubplix.com",0],["myyouporn.com",0],["convert2mp3.club",0],["embedstream.me",0],["nolive.me",0],["vrporngalaxy.com",0],["stem-cells-news.com",0],["javynow.com",0],["yifytorrentme.com",0],["blog.aming.info",0],["toopl.xyz",0],["youtubemp3.us",0],["yt-api.com",0],["afilmyhouse.blogspot.com",0],["pagalworld.us",0],["coinurl.net",0],["videowood.tv",0],["spicyandventures.com",0],["haes.tech",0],["hd44.com",0],["kaotic.com",0],["highstream.tv",0],["freeadultcomix.com",0],["crazyblog.in",0],["desitab69.sextgem.com",0],["javquick.com",0],["frebieesforyou.net",0],["shemalestube.com",0],["hxfile.co",0],["pussy.org",0],["analsexstars.com",0],["theicongenerator.com",0],["zentum.club",0],["cloudrls.com",0],["ybm.pw",0],["lordhd.com",0],["paid4.link",0],["serialeonline.biz",0],["alocdn.co",0],["pajalusta.club",0],["maxstream.video",0],["maxlinks.online",0],["videoseyred.in",0],["www-daftarharga.blogspot.com",0],["xbox360torrent.com",0],["arenaboard.xyz",0],["go.gets4link.com",0],["lightnovelpdf.com",0],["keepvid.pw",0],["toolsolutions.top",0],["wowstream.top",0],["convert2mp3.cx",0],["mp3dl.cc",0],["coinsparty.com",0],["fifaultimateteam.it",0],["bowfile.com",0],["1cloudfile.com",0],["gayvl.net",0],["covrhub.com",0],["fapcat.com",0],["pixroute.com",0],["uploady.io",0],["kinas.tv",0],["thienhatruyen.com",0],["witanime.com",0],["clk.asia",0],["linka.click",0],["miraculous.to",0],["av01.tv",0],["bigyshare.com",0],["glotorrents.fr-proxy.com",0],["glotorrents.theproxy.ws",0],["wapsing.com",0],["apiyt.com",0],["masstamilans.com",0],["okmusi.com",0],["ytmp3x.com",0],["snowurl.com",0],["webpornblog.com",0],["cam-video.xxx",0],["svetserialu.to",0],["blu-ray.com",0],["mdy48tn97.com",0],["fitnakedgirls.com",0],["mrgay.com",0],["best-cpm.com",0],["webhostingpost.com",0],["xvideos.wptri.com",0],["tutorialspots.com",0],["phica.net",0],["streambee.to",0],["streamers.watch",0],["emb.x179759.apl123.me",0],["emb.x187106.apl152.me",0],["techgeek.digital",0],["supersextube.pro",0],["h-flash.com",0],["ponselharian.com",0],["hakie.net",0],["vtube.to",0],["vidplaystream.top",0],["tubeload.co",0],["whcp4.com",0],["flixtor.stream",0],["yourtehzeeb.com",0],["onlymp3.to",0],["hindimovies.to",0],["movieswatch24.pk",0],["watchonlinemovies15.pk",0],["loadx.ws",0],["piraproxy.app",0],["driveplayer.net",0],["hindimoviestv.com",0],["watchpk.live",0],["k1nk.co",0],["watchonlinehd123.sbs",0],["acrackstreams.com",0],["3hentai.net",0],["layarkacaxxi.icu",0],["valeronevijao.com",0],["cigarlessarefy.com",0],["figeterpiazine.com",0],["yodelswartlike.com",0],["generatesnitrosate.com",0],["crownmakermacaronicism.com",0],["chromotypic.com",0],["gamoneinterrupted.com",0],["metagnathtuggers.com",0],["wolfdyslectic.com",0],["rationalityaloelike.com",0],["sizyreelingly.com",0],["simpulumlamerop.com",0],["urochsunloath.com",0],["monorhinouscassaba.com",0],["counterclockwisejacky.com",0],["35volitantplimsoles5.com",0],["scatch176duplicities.com",0],["antecoxalbobbing1010.com",0],["boonlessbestselling244.com",0],["cyamidpulverulence530.com",0],["guidon40hyporadius9.com",0],["449unceremoniousnasoseptal.com",0],["19turanosephantasia.com",0],["30sensualizeexpression.com",0],["321naturelikefurfuroid.com",0],["745mingiestblissfully.com",0],["availedsmallest.com",0],["greaseball6eventual20.com",0],["toxitabellaeatrebates306.com",0],["20demidistance9elongations.com",0],["audaciousdefaulthouse.com",0],["fittingcentermondaysunday.com",0],["fraudclatterflyingcar.com",0],["launchreliantcleaverriver.com",0],["matriculant401merited.com",0],["realfinanceblogcenter.com",0],["reputationsheriffkennethsand.com",0],["telyn610zoanthropy.com",0],["tubelessceliolymph.com",0],["tummulerviolableness.com",0],["un-block-voe.net",0],["v-o-e-unblock.com",0],["voe-un-block.com",0],["voeun-block.net",0],["voeunbl0ck.com",0],["voeunblck.com",0],["voeunblk.com",0],["voeunblock.com",0],["voeunblock1.com",0],["voeunblock2.com",0],["voeunblock3.com",0],["webloadedmovie.com",0],["embedo.co",0],["embed-player.space",0],["imdbembed.xyz",0],["gratflix.org",0],["bestcash2020.com",0],["missav123.com",0],["missav789.com",0],["myav.com",0],["komikav.com",0],["bc.vc",0],["larsenik.com",0],["yout.pw",0],["veryfreeporn.com",0],["korall.xyz",0],["moonmov.pro",0],["nosteam.ro",0],["nosteamgames.ro",0],["link.paid4file.com",0],["mlb66.ir",0],["ddl-francais.com",0],["ier.ai",0],["komiklokal.me",0],["moddroid.com",0],["streamservicehd.click",0],["alexsports.xyz",0],["bestlinkz.xyz",0],["divxfilmeonline.net",0],["vidscdns.com",0],["novelssites.com",0],["techydino.net",0],["redload.co",0],["manhwadesu.me",0],["watchanime.video",0],["repelishd.com.ar",0],["infinitehentai.com",0],["domainwheel.com",0],["adshnk.com",0],["fembed9hd.com",0],["ssyoutube.com",0],["mov18plus.cloud",0],["shareus.in",0],["videos.remilf.com",0],["uploadgig.com",0],["protege-liens.com",0],["mega4upload.com",0],["peliculas8k.com",0],["woffxxx.com",0],["sitefilme.com",0],["uberhumor.com",0],["audiotruyenfull.com",0],["emturbovid.com",0],["findjav.com",0],["mmtv01.xyz",0],["stbturbo.xyz",0],["xxxshake.com",0],["cdnm4m.nl",0],["guccihide.com",0],["thisisrussia.io",0],["streamtb.me",0],["stbpnetu.xyz",0],["tuborstb.co",0],["filmeonline2018.net",0],["doplay.store",0],["nhl66.ir",0],["watchaccordingtojimonline.com",0],["watchcalifornicationonline.com",0],["watchdowntonabbeyonline.com",0],["watcheronline.net",0],["watchhouseonline.net",0],["watchmalcolminthemiddle.com",0],["watchonlyfoolsandhorses.com",0],["watchprettylittleliarsonline.com",0],["watchrulesofengagementonline.com",0],["watchsuitsonline.net",0],["watchlostonline.net",0],["sexypornpictures.org",0],["shopforex.online",0],["173.249.8.3",0],["188.166.182.72",0],["hentaihd.cyou",0],["javsubindo.one",0],["hentaikai.com",0],["freevpshere.com",0],["softwaresolutionshere.com",0],["cryptosh.pro",0],["mycloud4.online",0],["besargaji.com",0],["hanime.xxx",0],["cazztv.xyz",0],["streamvid.net",0],["reshare.pm",0],["sexvideos.host",0],["stagatvfiles.com",0],["vtbe.net",0],["player.gayfor.us",0],["embedgram.com",0],["dlupload.com",0],["bembed.net",0],["elbailedeltroleo.site",0],["embedv.net",0],["fslinks.org",0],["listeamed.net",0],["v6embed.xyz",0],["vgplayer.xyz",0],["vid-guard.com",0],["telenovelas-turcas.com.es",0],["crack-status.com",0],["up-4ever.net",0],["steamcrackedgames.com",0],["jeniusplay.com",0],["furher.in",0],["vidpro.net",0],["embedaio.cc",0],["cuevana8.com",0],["kimcilonly.top",0],["bestx.stream",0],["moviesapi.club",0],["sekaikomik.bio",0],["designparty.sx",0],["kukaj.io",0],["dinnerexa.com",0],["dinneroga.com",0],["gameophobias.com",0],["hindimearticles.net",0],["solution-hub.com",0],["tnp98.xyz",0],["ophim.vip",0],["yt2conv.com",0],["linkz.wiki",0],["anichin.top",0],["hlsplayer.top",0],["69x.online",0],["superembeds.com",0],["embedrise.com",0],["lulustream.com",0],["luluvdo.com",0],["newassia.com",0],["pesktop.com",0],["y2down.cc",0],["tainio-mania.online",0],["uploadsea.com",0],["sport7s01.com",0],["av-cdn.xyz",0],["niaomea.me",0],["javguard.xyz",0],["javturbo.xyz",0],["westmanga.org",0],["reality-quest.online",0],["dirtyvideo.fun",0],["veev.to",0],["fast-dl.co",0],["movie4night.com",0],["javggvideo.xyz",0],["player.bestrapeporn.com",0],["tinyzonetv.se",0],["metrolagu.cam",0],["player.euroxxx.net",0],["spankbang.com",0],["spankbang.mov",0],["twitch.tv",1],["player.cuevana.ac",3],["player.tabooporns.com",3],["x69.ovh",3],["playerwatch.xyz",3],["rpdrlatino.live",3],["gaydam.net",3],["hdgay.net",3],["igay69.com",3],["tickzoo.tv",3],["qiwi.gg",3],["richhioon.eu",3],["hotpornfile.org",5],["olympicstreams.me",6],["za.gl",7],["foxseotools.com",8],["uflash.tv",9],["sendvid.com",12],["fc.lc",13],["freeplayervideo.com",13],["nazarickol.com",13],["player-cdn.com",13],["playhydrax.com",13],["hihihaha1.xyz",13],["rufiguta.com",13],["adclickersbot.com",13],["ytmp3.cc",15],["rentbyowner.com",17],["embedy.me",18],["sekilastekno.com",[19,51]],["underhentai.net",20],["pixsera.net",21],["imgair.net",21],["imgblaze.net",21],["imgfrost.net",21],["vestimage.site",21],["imgwia.buzz",21],["imgbaex.store",21],["imgbah.online",21],["imgbaie.online",21],["imgbango.store",21],["imgbier.store",21],["imgbimn.store",21],["imgbqw.store",21],["imgbuba.online",21],["imgbwe.store",21],["imgbxs.online",21],["imgcao.store",21],["imgnwe.online",21],["imgqge.store",21],["imgqxb.online",21],["imgteq.online",21],["imgtex.online",21],["imgtuta.online",21],["imgwqr.online",21],["imgwww.store",21],["imgxza.store",21],["imgezx.sbs",21],["imgbcxsb.store",21],["imgbcxs.store",21],["imgbake.cfd",21],["imgmffg.sbs",21],["imgmffgtr.sbs",21],["imgnbg.sbs",21],["imgngc.sbs",21],["imgnmh.cfd",21],["imgqte.sbs",21],["imguthes.sbs",21],["imgwag.cfd",21],["imgwang.cfd",21],["imgwety.sbs",21],["imgxuh.cfd",21],["imgxytw.cfd",21],["imgycgey.sbs",21],["imgyruy.cfd",21],["imgyusa.cfd",21],["imgyyqey.sbs",21],["imgyer.store",21],["imgxhs.store",21],["imgwekr.online",21],["imgwbfh.online",21],["imgwak.online",21],["imgutry.online",21],["imgutiyu.online",21],["imgutbbn.online",21],["imgubfd.online",21],["imgrei.online",21],["imgqec.online",21],["imgpaiou.online",21],["imgpaiki.online",21],["imgmjj.store",21],["imgfa.store",21],["imgbutrt.store",21],["imgbty.store",21],["imgbdl.store",21],["imgngh.sbs",21],["imgbbfg.pics",21],["imgjhrjjr.pics",21],["imgleko.pics",21],["imgluki.pics",21],["imgnffe.pics",21],["imgnnnf.pics",21],["imgrwqz.pics",21],["imgtweqz.pics",21],["imgxzgf.pics",21],["imgyyeryt.pics",21],["picbbc.one",21],["picbbdr.one",21],["picbest.one",21],["picbhrt.one",21],["picnrrt.one",21],["picqqw.one",21],["picqr.one",21],["picqtwe.one",21],["picsjre.one",21],["piczzaq.one",21],["imgqazx.sbs",21],["imgiruyw.online",21],["picnerr.cfd",21],["pichfer.cfd",21],["picbbeq.cfd",21],["picqaxs.cfd",21],["picxxdd.cfd",21],["picqweff.cfd",21],["pickjsn.cfd",21],["piczzxsw.cfd",21],["picbbbde.cfd",21],["picbdd.cfd",21],["imgbahxg.sbs",21],["imgxune.sbs",21],["imgqklw.shop",21],["pixqkhgrt.shop",21],["pixqbngg.shop",21],["pixqwet.shop",21],["pixmos.shop",21],["imgtgd.shop",21],["imgcsxx.shop",21],["imgcssd.shop",21],["imguwjsd.sbs",21],["pictbbf.shop",21],["pixbryexa.sbs",21],["picbqqa.sbs",21],["pixbkghxa.sbs",21],["imgmgf.sbs",21],["picbcxvxa.sbs",21],["imguee.sbs",21],["imgmffmv.sbs",21],["imgbqb.sbs",21],["imgbyrev.sbs",21],["imgbncvnv.sbs",21],["pixtryab.shop",21],["imggune.shop",21],["pictryhab.shop",21],["pixbnab.shop",21],["imgbnwe.shop",21],["imgbbnhi.shop",21],["imgnbii.shop",21],["imghqqbg.shop",21],["imgyhq.shop",21],["pixnbrqwg.sbs",21],["pixnbrqw.sbs",21],["picmsh.sbs",21],["imgpke.sbs",21],["picuenr.sbs",21],["imgolemn.sbs",21],["imgoebn.sbs",21],["picnwqez.sbs",21],["imgjajhe.sbs",21],["pixjnwe.sbs",21],["pixkfjtrkf.shop",21],["pixkfkf.shop",21],["pixdfdjkkr.shop",21],["pixdfdj.shop",21],["picnft.shop",21],["pixrqqz.shop",21],["picngt.shop",21],["picjgfjet.shop",21],["picjbet.shop",21],["imgkkabm.shop",21],["imgxabm.shop",21],["imgthbm.shop",21],["imgmyqbm.shop",21],["imgwwqbm.shop",21],["imgjvmbbm.shop",21],["imgjbxzjv.shop",21],["imgjmgfgm.shop",21],["picxnkjkhdf.sbs",21],["imgxxbdf.sbs",21],["imgnngr.sbs",21],["imgjjtr.sbs",21],["imgqbbds.sbs",21],["imgbvdf.sbs",21],["imgqnnnebrf.sbs",21],["imgnnnvbrf.sbs",21],["tr.link",22],["workink.click",24],["mwpaste.com",25],["animesuge.to",26],["anix.to",26],["bflix.to",26],["bflixhd.to",26],["flixflare.to",26],["flixhive.to",26],["flixhq.bz",26],["flixtorz.to",26],["fmoviesz.to",26],["fmovies24.to",26],["hurawatch.bz",26],["hurawatch2.to",26],["losmoviesz.to",26],["mangafire.to",26],["moviestowatch.id",26],["soap2dayx.to",26],["watchseriesx.to",26],["woxmax.net",26],["terashare.co",26],["mtraffics.com",26],["emb.apl305.me",26],["shrdsk.me",[26,52]],["totalcsgo.com",26],["donghuaworld.com",26],["paste-drop.com",26],["jytechs.in",26],["dev.miuiflash.com",26],["djxmaza.in",26],["thecubexguide.com",26],["fullboys.com",27],["btcbitco.in",27],["btcsatoshi.net",27],["crypto4yu.com",27],["readbitcoin.org",27],["wiour.com",27],["fikper.com",27],["koyso.com",28],["buffsports.me",29],["kimetsujbn.blogspot.com",30],["vidhidepre.com",31],["cpmlink.pro",32],["crm.cekresi.me",33],["ai.tempatwisata.pro",33],["lootdest.com",34],["buzzheavier.com",35],["cshort.org",36],["dosya.tc",37],["cloudemb.com",39],["sbot.cf",0],["vidello.net",0],["mitedrive.com",0],["miteblog.com",0],["easymp3converter.com",40],["go-mp3.com",41],["lineageos18.com",42],["luckydice.net",43],["ytsubme.com",44],["driveup.in",45],["mp3juices.yt",46],["chillx.top",47],["beastx.top",47],["playerx.stream",47],["1ytmp3.com",48],["bestmp3converter.com",48],["hentaiworld.tv",49],["video-to-mp3-converter.com",50],["pinloker.com",51],["netfilm.app",51],["sharedisk.me",53],["kmo.to",54],["zuperdrive.my.id",55]]);

const entitiesMap = new Map([["wcostream",0],["kissasian",0],["slreamplay",0],["steamplay",0],["steanplay",0],["stemplay",0],["streamp1ay",0],["streanplay",0],["streampiay",0],["stre4mplay",0],["vid2faf",0],["youtubedownloader",0],["plylive",0],["plyvdo",0],["putlockerc",0],["putlockertv",0],["mylink",0],["my1ink",0],["myl1nk",0],["myli3k",0],["pahe",0],["yts",0],["hqq",0],["waaw",0],["adshort",0],["adsrt",0],["tube8",0],["europixhd",0],["topeuropix",0],["watch-series",0],["watchseries",0],["gogoanime",0],["gogoanimes",0],["gogoanimetv",0],["imgdew",0],["imgmaze",0],["imgoutlet",0],["imgtown",0],["imgview",0],["dewimg",0],["imgrock",0],["imgviu",0],["mazpic",0],["outletpic",0],["picrok",0],["capshd",0],["rojadirectatvlive",0],["1movies",0],["jkanime",0],["xmovies8",0],["pelisplus",0],["pelisplushd",0],["pouvideo",0],["povvideo",0],["povvldeo",0],["povw1deo",0],["povwideo",0],["powv1deo",0],["powvibeo",0],["powvideo",0],["powvldeo",0],["arenavision",0],["ciberdvd",0],["pornfay",0],["camwhores",0],["camwhorestv",0],["redtube",0],["ettv",0],["ver-pelis",0],["newpelis",0],["pelix",0],["onlinevideoconverter",0],["adfloz",0],["movies123",0],["voirfilms",0],["vidcloud",0],["iframejav",0],["savemedia",0],["limetorrents",0],["telerium",0],["9xbuddy",0],["asianclub",0],["vidmoly",0],["savelinks",0],["mixdroop",0],["mixdrop",0],["mixdrp",0],["123moviesfree",0],["yesmovies",0],["solarmovie",0],["zeefiles",0],["mega4up",0],["bdiptv",0],["cinemalibero",0],["gomovies",0],["gomoviesc",0],["cloudvideotv",0],["123movierulz",0],["7movierulz1",0],["7moviesrulz",0],["5movierulz2",0],["movieruls",0],["movierulz",0],["movierulzfree",0],["movierulz2free",0],["movierulzs",0],["movierulzwatch",0],["movierulzz",0],["moviesrulz",0],["moviesrulzfree",0],["topflix",0],["allfeeds",0],["daddylive",0],["sporting77",0],["teleriumtv",0],["7starhd",0],["uploadev",0],["thefmovies",0],["keepvid",0],["ustream",0],["upvid",0],["ssrmovies",0],["moviflex",0],["fembed",0],["mavplay",0],["videobb",0],["123mkv",0],["pornhub",0],["megavideo",0],["pandamovie",0],["speedporn",0],["watchpornfree",0],["okanime",0],["spankbang",0],["linkshub",0],["tmearn",0],["filedown",0],["ffmovies",0],["beinmatch",0],["mrpiracy",0],["shorten",0],["123anime",0],["ytmp3",0],["gnula",0],["sobatkeren",0],["movieon21",0],["mkvcinemas",0],["pelispedia24",0],["pelis28",0],["remaxhd",0],["dood",0],["dooood",0],["nemenlake",0],["animeblix",0],["vidsrc",0],["binged",0],["fmovies",0],["kimcartoon",0],["torrentdownload",0],["file-upload",0],["embedme",0],["finfang",0],["hellnaw",0],["moonembed",0],["z12z0vla",0],["sharedrive",0],["dodz",0],["doodss",0],["doood",0],["doooood",0],["kakitengah",0],["zoro",0],["m4u",0],["xprime4u",0],["uhdmovies",0],["direct-dl",0],["filmy4web",0],["desiflix",0],["clk",0],["fc-lc",0],["hubdrive",0],["gosemut",0],["zone-annuaire",0],["notube",0],["uploadhub",0],["mm9844",0],["adblockeronstape",0],["adblockplustape",0],["adblockstreamtape",0],["adblockstrtape",0],["adblockstrtech",0],["antiadtape",0],["noblocktape",0],["shavetape",0],["stapadblockuser",0],["stape",0],["strcloud",0],["streamadblocker",0],["streamadblockplus",0],["streamta",0],["streamtape",0],["streamtapeadblock",0],["streamtapeadblockuser",0],["strtape",0],["strtapeadblock",0],["strtapeadblocker",0],["strtapewithadblock",0],["strtpe",0],["vidop",0],["seriemega",0],["isohunt",0],["megaflix",0],["drtuber",0],["ilgeniodellostreaming",0],["vid4up",0],["gototub",0],["sportbar",0],["youtubetomp3",0],["9xmovies",0],["shortzzy",0],["rojadirecta",0],["movidy",0],["downloadhub",0],["hubstream",0],["proxybit",0],["openloadmov",0],["wawacity",0],["dl-protect",0],["0gomovies",0],["player.msmini",0],["player.sbnmp",0],["netuplayer",0],["vapley",0],["moviehdf",0],["hd21",0],["iceporn",0],["nuvid",0],["pornlib",0],["tubeon",0],["vivatube",0],["winporn",0],["yeptube",0],["streamsport",0],["ytc",0],["shahid4u",0],["watchonlinemoviespk",0],["streamhub",0],["moviezwap",0],["javembed",0],["kissanime",0],["sexy-games",0],["todaypk",0],["todaypktv",0],["1todaypk",0],["usagoals",0],["uproxy",0],["oyohd",0],["720pstream",0],["inextmovies",0],["mp4moviez",0],["buffstreams",0],["wolfstream",0],["4movierulz1",0],["filmygod6",0],["watchmovierulz",0],["streamsb",0],["filmywap",0],["ofilmywap",0],["kannadamasti",0],["buyjiocoin",0],["filmygod13",0],["ucanwatch",0],["userload",0],["videovard",0],["mp3juices",0],["milfnut",0],["mlsbd",0],["moviemad",0],["mymp3song",0],["akoam",0],["9xmovie",0],["himovies",0],["4stream",0],["teluguonlinemovies",0],["cricfree",0],["cricplay2",0],["primetubsub",0],["eztv",0],["theproxy",0],["filmeserialegratis",0],["fsplayer",0],["onlinewatchmoviespk",0],["younetu",0],["repelishd",0],["hdhub4u",0],["hdmoviesmaza",0],["moviesjoy",0],["voe-unblock",0],["voe",0],["apkmody",0],["extratorrent",0],["torrentstatus",0],["yts2",0],["y2mate",0],["missav",0],["poscitech",0],["embedmoon",0],["filemoon",0],["kerapoxy",0],["adblockeronstreamtape",0],["crichd",0],["movies2watch",0],["tirexo",0],["weloma",0],["zone-telechargement",0],["pobre",0],["8xmovies",0],["adblocktape",0],["cyberleaks",0],["opvid",0],["vembed",0],["empire-stream",0],["empire-streaming",0],["empire-streamz",0],["thenextplanet1",0],["2embed",0],["movies4u",0],["movies4u3",0],["playfmovies",0],["viralvideotube",0],["vvtlinks",0],["vvtplayer",0],["powstream",0],["powlideo",0],["povvvideo",0],["powvdeo",0],["filmydown",0],["poop",0],["strikeout",2],["vipbox",3],["desbloqueador",4],["viprow",6],["vipstand",6],["vipboxtv",6],["atomohd",10],["atomixhq",11],["pctfenix",11],["pctnew",11],["vev",13],["vidup",13],["vidstream",14],["gdriveplayer",16],["pixlev",21],["1337x",23],["x1337x",23],["aniwave",26],["newdmn",38],["camcaps",0]]);

const exceptionsMap = new Map([["notube.com",[0]]]);

/******************************************************************************/

function noWindowOpenIf(
    pattern = '',
    delay = '',
    decoy = ''
) {
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('no-window-open-if', pattern, delay, decoy);
    const targetMatchResult = pattern.startsWith('!') === false;
    if ( targetMatchResult === false ) {
        pattern = pattern.slice(1);
    }
    const rePattern = safe.patternToRegex(pattern);
    let autoRemoveAfter = parseInt(delay);
    if ( isNaN(autoRemoveAfter) ) {
        autoRemoveAfter = -1;
    }
    const createDecoy = function(tag, urlProp, url) {
        const decoyElem = document.createElement(tag);
        decoyElem[urlProp] = url;
        decoyElem.style.setProperty('height','1px', 'important');
        decoyElem.style.setProperty('position','fixed', 'important');
        decoyElem.style.setProperty('top','-1px', 'important');
        decoyElem.style.setProperty('width','1px', 'important');
        document.body.appendChild(decoyElem);
        setTimeout(( ) => { decoyElem.remove(); }, autoRemoveAfter * 1000);
        return decoyElem;
    };
    window.open = new Proxy(window.open, {
        apply: function(target, thisArg, args) {
            const haystack = args.join(' ');
            if ( rePattern.test(haystack) !== targetMatchResult ) {
                if ( safe.logLevel > 1 ) {
                    safe.uboLog(logPrefix, `Allowed (${args.join(', ')})`);
                }
                return Reflect.apply(target, thisArg, args);
            }
            safe.uboLog(logPrefix, `Prevented (${args.join(', ')})`);
            if ( autoRemoveAfter < 0 ) { return null; }
            const decoyElem = decoy === 'obj'
                ? createDecoy('object', 'data', ...args)
                : createDecoy('iframe', 'src', ...args);
            let popup = decoyElem.contentWindow;
            if ( typeof popup === 'object' && popup !== null ) {
                Object.defineProperty(popup, 'closed', { value: false });
            } else {
                const noopFunc = (function(){}).bind(self);
                popup = new Proxy(self, {
                    get: function(target, prop) {
                        if ( prop === 'closed' ) { return false; }
                        const r = Reflect.get(...arguments);
                        if ( typeof r === 'function' ) { return noopFunc; }
                        return target[prop];
                    },
                    set: function() {
                        return Reflect.set(...arguments);
                    },
                });
            }
            if ( safe.logLevel !== 0 ) {
                popup = new Proxy(popup, {
                    get: function(target, prop) {
                        safe.uboLog(logPrefix, 'window.open / get', prop, '===', target[prop]);
                        return Reflect.get(...arguments);
                    },
                    set: function(target, prop, value) {
                        safe.uboLog(logPrefix, 'window.open / set', prop, '=', value);
                        return Reflect.set(...arguments);
                    },
                });
            }
            return popup;
        }
    });
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
    try { noWindowOpenIf(...argsList[i]); }
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
    return uBOL_noWindowOpenIf();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_noWindowOpenIf = cloneInto([
            [ '(', uBOL_noWindowOpenIf.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_noWindowOpenIf);
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
    delete page.uBOL_noWindowOpenIf;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
