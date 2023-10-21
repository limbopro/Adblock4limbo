// ==UserScript==
// @name         functionx4limbo.X
// @namespace    https://limbopro.com/Adguard/Adblock4limbo.function.js
// @version      0.1.10.21
// @license      CC BY-NC-SA 4.0
// @description  专为 Adblock4limbo 设计；https://greasyfork.org/zh-CN/scripts/443290-adblock4limbo；
// @author       limbopro
// @match        https://ddrk.me/*
// @match        https://ddys.tv/*
// @match        https://ddys.pro/*
// @match        https://ddys.art/*
// @match        https://ddys2.me/*
// @match        https://ddys.mov/*
// @match        https://jable.tv/*
// @match        https://www.btbdys.com/*
// @match        https://www.bdys01.com/*
// @match        https://www.bdys02.com/*
// @match        https://www.bdys03.com/*
// @match        https://www.bdys10.com/*
// @match        https://cn.pornhub.com/*
// @match        https://www.pornhub.com/*
// @match        https://missav.com/*
// @match        https://91porn.com/*
// @match        https://www.91porn.com/*
// @match        https://avple.tv/*
// @match        https://18comic.org/*
// @match        https://18comic.vip/*
// @match        https://www.5dy5.cc/*
// @match        https://www.5dy6.cc/*
// @match        https://www.5dy7.cc/*
// @match        https://www.5dy8.cc/*
// @match        https://www.o8tv.com/*
// @match        https://www.555dd5.com/*
// @match        https://www.555dd6.com/*
// @match        https://www.555dd7.com/*
// @match        https://www.555dd8.com/*
// @match        https://555dyx1.com/*
// @match        https://555dyx3.com/*
// @match        https://555dyx4.com/*
// @match        https://555dyx5.com/*
// @match        https://o8tv.com/*
// @match        https://www.wnacg.com/*
// @match        https://www.wnacg.org/*
// @match        https://w.duboku.io/*
// @match        https://www.duboku.tv/*
// @match        https://www.libvio.com/*
// @match        https://www.libvio.top/*
// @match        https://www.libvio.me/*
// @match        https://www.tvn.cc/*
// @match        https://m.tvn.cc/*
// @match        https://www.google.com/search*
// @match        https://www.google.com.hk/search*
// @match        https://www.bing.com/search?q=*
// @match        https://cn.bing.com/search?q=*
// @match        https://zhuanlan.zhihu.com/*
// @match        https://www.zhihu.com/*
// @match        https://www.instagram.com/*
// @match        https://www.nbys.tv/*
// @match        https://www.ttsp.tv/*
// @match        http://www.tz659.com/*
// @match        https://anime1.me/*
// @match        https://m.yhdmp.cc/*
// @match        https://m.yhdmp.com/*
// @match        https://m.yhpdm.com/*
// @match        https://www.nivod4.tv/*
// @match        https://m.nivod4.tv/*
// @match        https://www.javbus.com/*
// @match        https://cn1.91short.com/*
// @match        https://xiaobaotv.net/*
// @match        https://javday.tv/*
// @match        https://www.xvideos.com/*
// @match        https://4hu.tv/*
// @match        https://netflav.com/*
// @match        https://filemoon.sx/*
// @match        https://embedrise.com/*
// @match        https://mmfl02.com/*
// @match        https://supjav.com/*
// @match        https://hanime1.me/*
// @match        https://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=limbopro.com
// @run-at       document-end
// @grant        none
// ==/UserScript==

/**
 * ---------------------------
 * Author: limbopro
 * View: https://limbopro.com/archives/12904.html
 * ---------------------------
 */

// 各种 function 的集合

// 获取M3U8文件资源链接

/*
var repeat_regex = [
    "https:?\/\/.*?hls.*?\.m3u8",
    "https:?\/\/.*?phncdn.*?hls.*?\.m3u8"
]

function m3u8_tempt(x) {
    var i, url_result;
    var url_regex = new RegExp(x, "gi")
    var ele = [
        "script",
        "a"
    ]
    var ele_catch = document.querySelectorAll(ele)
    for (i = 0; i < ele_catch.length; i++) {
        while ((url_result = url_regex.exec(ele_catch[i].innerHTML)) != null) {
            //console.log("Catch it")
            alert(url_result)
        }
    }
}
*/


/* 循环播放 */
function video_loopPlay() {
    setInterval(function () {
        var ele = ["video[preload='none', 'common'],video#player"];
        var ele_catch = document.querySelector(ele);
        if (ele_catch) {
            ele_catch.play()
            //console.log("视频已开启循环播放；")
        }
    }, 1000)
}

/* 延后播放 */
function video_delayPlay(time) {
    setTimeout(function () {
        var ele = ["video[preload='none', 'common'],video#player"];
        var ele_catch = document.querySelector(ele);
        if (ele_catch) {
            ele_catch.play()
            //console.log("视频已延后播放；")
        }
    }, time)
}

// 先新建一个按钮
function adblock4limbo(x) {
    // 新建 x4Div
    let new_body = document.createElement('div'); // body 换为 div
    new_body.id = 'x4Div'; // 高等悬挂
    let body = document.body;
    //document.querySelector('html').appendChild(new_body); // 插入到现有 body 后
    document.querySelector('html').insertBefore(new_body, body); // 插入到现有 body 前

    // 定义按钮
    let x4Home = document.createElement('button')
    x4Home.id = "x4Home";
    x4Home.setAttribute("class", "cms");
    x4Home.setAttribute('onclick', "body_build('true');")

    var origin = '\
    padding:0px;\
    transition-duration: 666ms;\
    transition-property: height;\
    z-index: 114154;\
    bottom: 15%;\
    right: 0.5%;\
    position: fixed;\
    border: transparent;\
    background-color: transparent;\
    background-image: url("https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/uploads/imgs/Adblock4limbo.svg") !important;\
    background-size: 100% !important;\
    background-repeat: no-repeat;\
'
    x4Home.style = origin;
    document.getElementById('x4Div').appendChild(x4Home); // 在 x4Div 下添加按钮
    document.getElementById('x4Home').style.height = x;
    document.getElementById('x4Home').style.width = x;

}

// 定义按钮尺寸
function x4Home_button_width() {
    //const userAgent = navigator.userAgent.toLowerCase();
    const window_innerWidth = window.innerWidth;
    if (window_innerWidth <= 920) {
        //if (/\b(android|iphone|ipad|ipod)\b/i.test(userAgent)) {
        var size = '54px';
        return size;
    } else {
        var size = '75px';
        return size;
    }
}


// 自动隐藏按钮
function hidden_adblock4limbo() {
    if (document.getElementById('x4Home')) {
        ////console.log("// hidden_adblock4limbo() 按钮存在") // 存在
        let last_known_scroll_position = window.scrollY;
        const x4Home = document.getElementById('x4Home'); const new_div = document.getElementById('x4Div');
        setTimeout(() => {
            if (last_known_scroll_position !== window.scrollY) {
                ////console.log("// hidden_adblock4limbo() 按钮存在，且页面还在滑动...");
                x4Home_button('1');
            } else {
                x4Home_button('0');
                ////console.log("// hidden_adblock4limbo() 按钮存在，页面已停止滑动，即将隐藏按钮...");
            }
        }, 1000)
    } else {
        ////console.log("// hidden_adblock4limbo() 按钮存在，但已隐藏...");
    }
}


setInterval(() => {
    hidden_adblock4limbo(); // 长期不动隐藏左下角按钮
}, 3000)

let crisp_auto_hiddenX = setInterval(() => {
    crisp_auto_hidden(); // 默认隐藏 crisp 聊天窗口
}, 3000)


// 长时间不动则隐藏按钮
function x4Home_button(x) { // 显示按钮
    const x4Home = document.getElementById('x4Home'); const new_div = document.getElementById('x4Div');
    if (x == 1) {
        x4Home.style.height = x4Home_button_width();
        x4Home.style.width = x4Home_button_width();
        new_div.style.zIndex = '114154';
    } else {
        if ((x4Home.style.height == "0%")) {
        } else {
            setTimeout(() => {
                x4Home.style.height = '0%';
            }, 500)
        }
    }
}



// 当鼠标🖱靠近时显示按钮
//onload = () => {
const mousemove_element = document.querySelectorAll('body')[0];
// 绑定鼠标移动事件
mousemove_element.addEventListener('mousemove', e => {
    ////console.log("// mousemove_element 鼠标所在位置：" + e.offsetX);
    ////console.log("// mousemove_element 要触发位置为：" + Math.floor(0.55 * window.innerWidth));
    if (document.body.clientWidth) {
        if (e.offsetX >= 0.55 * window.innerWidth) {
            x4Home_button('1'); // 2333
        }
    }
});
//}


// 为按钮添加监听事件 防止被破坏

function _onclick_button() {
    document.getElementById('x4Div').addEventListener("click", function () {
        body_build('true'); // 添加监听事件
    }) //

    setTimeout(() => {
        if (document.querySelector('div.ellCloseX')) {
            document.querySelector('div.ellCloseX').addEventListener("click", function () {
                body_build('false'); // 添加监听事件
            })
        }
    }, 3000)
}

// 初始判断
let str_ua = navigator.userAgent.toLowerCase();
let regexp = /(.*)(iphone\sos\s)(\d{2})(.*)/;
let ios_version = str_ua.replace(regexp, '$3');

const url_now = window.location.href.toLowerCase();
if (/\b(google|bing)\b/i.test(url_now)) {
    //adblock4limbo(x4Home_button_width()); // 插入右下角按钮
    //_onclick_button();
    // 如果当前 url 带有 google/bing 且iOS版本小于 17的用户 则不执行按钮插入
} else {
    adblock4limbo(x4Home_button_width()); // 插入右下角按钮
    //_onclick_button();
}


/* 
如不想显示 chat 聊天按钮 
可使用双斜杠 // 注释上述函数调用代码；
举例如下：
 
// adblock4limbo();
// hidden_adblock4limbo();
 
*/

/* Chat and navigation End */

// 初始化导航内容
function navigation_body_pre() {
    let navigation = document.createElement('div')
    navigation.id = 'navigation';
    navigation.setAttribute("class", "navigation_css");
    let body = document.body;
    document.querySelector('html').insertBefore(navigation, body);

    let ele_innerHTML = '\
        <div class="echo">\
        \
        <div class="closeX_W">\
        <div class="ellCloseX"><button style="border-radius: 50%;opacity: 0.5;" id="xX" onclick="body_build(\'false\')"></button></div>\
        </div>\
        \
        \
        <div class="div_global feedback">\
        <div class="title_global">反馈/建议//</div>\
        <ul class="ul_global">\
        <li class="li_global"><button style="background:#70997b; box-shadow:inset 0px 0px 15px 3px #16191f00;" class="a_global" onclick="crisp_active(\'1\')" id="webChat">现在聊聊</button></li>\
        <li class="li_global"><button style="background:#c53f3f; box-shadow:inset 0px 0px 15px 3px #16191f00;" class="a_global" onclick="hide_button_switch(\'1\')" id="webChat">隐藏导航</button></li>\
        <li class="li_global"><button style="background:#c53f3f; box-shadow:inset 0px 0px 15px 3px #16191f00;" class="a_global" onclick="document.querySelector(\'div#vserver.play-button\').paly()" id="TESTX">TESTX</button></li>\
        <li class="li_global"><a class="a_global" id="issue" href="https://github.com/limbopro/Adblock4limbo/issues/new/choose" \
        target="_blank">提交issue</a></li>\
        <li class="li_global"><a class="a_global" id="issue" href="https://github.com/limbopro/Adblock4limbo/blob/main/Adguard/Adblock4limbo.function.js" \
        target="_blank">查看源码</a></li>\
        <li class="li_global"><a class="a_global" id="admin" href="https://t.me/limboprobot" \
        target="_blank">电报联系</a></li>\
        <li class="li_global"><a class="a_global" id="tgGroup" href="https://t.me/Adblock4limbo/21" \
        target="_blank">电报群组</a></li>\
        <div class="fbt">新网站收录、当前网页广告问题反馈，其他建议或意见，请通过<span style="color:black;font-weight:bolder;">以上方式</span>告知我们...P.S. 该 Feature 持续增加/完善中，欢迎大家为之添砖加瓦！</div>\
        </ul>\
        </div>\
        \
        \
        <div class="div_global gkd">\
        <div class="title_global">关注博主//</div>\
        <ul class="ul_global">\
        <li class="li_global"><a class="a_global" id="Github" href="https://github.com/limbopro" \
        target="_blank">Github</a></li>\
        <li class="li_global"><a class="a_global" id="GreasyFork" href="https://sleazyfork.org/zh-CN/users/893587-limbopro" \
        target="_blank">GreasyFork</a></li>\
        <li class="li_global"><a class="a_global" id="limboprossr" href="https://t.me/limboprossr" \
        target="_blank">博客频道</a></li>\
        <li class="li_global"><a class="a_global special" id="SecretGarden" href="https://t.me/+dQ-tZYqhSDEwNTk1" \
        target="_blank">春潮频道</a></li>\
        <li class="li_global"><a class="a_global" id="limboprossr" href="https://twitter.com/limboprossr" \
        target="_blank">Twitter</a></li>\
        <li class="li_global"><a class="a_global" id="YouTube" href="https://m.youtube.com/@limboprossr/featured" \
        target="_blank">YouTube</a></li>\
        </ul>\
        </div>\
        \
        \
        <div class="div_global magicbox">\
        <div class="title_global">工具箱//</div>\
        <ul class="ul_global">\
        <li class="li_global"><a class="a_global" id="yhlxj" href="https://limbopro.com/archives/25524.html" \
        target="_blank">流媒体合租</a></li>\
        <li class="li_global"><a style="background:#5a4771;box-shadow:inset 0px 0px 15px 3px #16191f00;" class="a_global" id="Adblock4limbo" href="https://limbopro.com/archives/12904.html" \
        target="_blank">广告拦截大全</a></li>\
        <li class="li_global"><a class="a_global" id="software_skills" href="https://limbopro.com/category/software-skills/" \
        target="_blank">软件百科</a></li>\
        <li class="li_global"><a class="a_global" id="website_builder" href="https://limbopro.com/category/builder/" \
        target="_blank">博客优化</a></li>\
        <li class="li_global"><a class="a_global" id="search" href="https://limbopro.com/search.html" \
        target="_blank">毒奶搜索</a></li>\
        <li class="li_global"><a style="background:#5a4771;box-shadow:inset 0px 0px 15px 3px #16191f00;" class="a_global" id="index" href="https://limbopro.com/" \
        target="_blank">毒奶博客</a></li>\
        <li class="li_global"><a class="a_global" id="jichangtuijian" href="https://limbopro.com/865.html" \
        target="_blank">机场推荐</a></li>\
        <li class="li_global"><a class="a_global" id="hezu" href="https://limbopro.com/archives/25524.html" \
        target="_blank">流媒体合租</a></li>\
        </ul>\
        </div>\
        \
        \
        <div class="div_global speedtest">\
        <div class="title_global">测速工具//</div>\
        <ul class="ul_global">\
        <li class="li_global"><a class="a_global" id="common" id="CloudflareSpeedtest" href="https://speed.cloudflare.com/"\
        target="_blank">Cloudflare</a></li>\
        <li class="li_global"><a class="a_global" id="Speedtest" href="https://www.speedtest.net/zh-Hans"\
        target="_blank">Speedtest</a></li>\
        \
        </ul>\
        </div>\
        \
        \
        <div class="div_global ipcheck">\
        <div class="title_global">网络连通检测//</div>\
        <ul class="ul_global">\
        <li class="li_global"><a class="a_global special" id="Sukka" href="https://ip.skk.moe/"\
        target="_blank">ip地址查询</a></li>\
        <li class="li_global"><a class="a_global" id="checkgfw" href="https://www.checkgfw.com/"\
        target="_blank">域名被墙检测</a></li>\
        \
        </ul>\
        </div>\
        \
        \
        <div class="div_global front">\
        <div class="title_global">前端入门//</div>\
        <ul class="ul_global">\
        <li class="li_global"><a class="a_global" id="wangdoc" href="https://wangdoc.com/" \
        target="_blank">网道</a></li>\
        <li class="li_global"><a class="a_global" id="Web_mdn" href="https://developer.mozilla.org/zh-CN/docs/Web" \
        target="_blank">Web 开发技术</a></li>\
        <li class="li_global"><a class="a_global special" id="JavaScript" href="https://zh.javascript.info/" \
        target="_blank">现代 JavaScript 教程</a></li>\
        \
        </ul>\
        </div>\
        \
        \
        <div class="div_global boysshouldread">\
        <div class="title_global">男孩子读物//</div>\
        <ul class="ul_global">\
        <li class="li_global"><a class="a_global" id="regex" href="https://deerchao.cn/tutorials/regex/regex.htm" \
        target="_blank">正则表达式</a></li>\
        <li class="li_global"><a class="a_global" id="Linux-Shell" href="https://t.me/limboprossr/3197" \
        target="__blank">快乐的命令行</a></li>\
        \
        </ul>\
        </div>\
        \
        \
        <div class="div_global onlinemovies">\
        <div class="title_global">在线影视//</div>\
        <ul class="ul_global">\
        <li class="li_global"><a class="a_global" id="nbys" href="https://www.nivod4.tv/"\
        target="_blank">泥巴影视</a></li>\
        <li class="li_global"><a class="a_global better" id="common" href="https://ddys.pro/"\
        target="_blank">低端影视</a></li>\
        <li class="li_global"><a class="a_global" id="common" href="https://xiaobaotv.net/"\
        target="_blank">小宝影视</a></li>\
        <li class="li_global"><a class="a_global" id="xbys" href="https://gimy.ai/"\
        target="_blank">剧迷网</a></li>\
        <li class="li_global"><a class="a_global" id="duboku" href="https://www.duboku.tv/"\
        target="_blank">独播库</a></li>\
        <li class="li_global"><a class="a_global" id="ttsp" href="https://www.ttsp.tv/"\
        target="_blank">天天视频</a></li>\
        <li class="li_global"><a class="a_global" id="555dy" href="https://555dyx3.com/"\
        target="_blank">555电影网</a></li>\
        <li class="li_global"><a class="a_global" id="libvio" href="https://libvio.top/"\
        target="_blank">libvio梨</a></li>\
        </ul>\
        </div>\
        \
        <div class="_footer" style="color:black!important;">当前网页已在<a href="https://github.com/limbopro/Adblock4limbo/blob/main/Adblock4limbo.weblist" target="_blank" >去广告计划</a>范围，如在此页面发现广告请及时反馈。<div>\
        \
        </div>\
        \
'
    let navigation_parents = document.getElementById('navigation');
    navigation_parents.innerHTML = ele_innerHTML;
}



var file = {
    javlibrary: "td.advsearch {display:none}#rightcolumn{right:90px;width:auto;} .videothumblist .videos {min-width:auto}  table.about td {width:auto!important} table.about td.desc {width:auto !important;min-width:0px!important} .titlebox {width:auto !important}.videothumblist.videos {width:auto !important} #leftmenu{max-width:90px;} div.videothumblist{overflow:scroll !important; overflow-x:hidden !important}iframe{display:none} table.about td {min-width:0px;} body.main{min-width:0px !important}\
    \
    ",
    global_css: '\
    .div_global.feedback{background:transparent;} a.a_global.better{background:#2e64bb!important;box-shadow:inset 0px 0px 15px 3px #10336d;} a.a_global.special{background:#3764ac;},a.a_global#CloudflareSpeedtest{} a.a_global#jichangtuijian{background:#3d3843; opacity:0.8;box-shadow:inset 0px 0px 15px 3px #000000}.carousel-inner{z-index:0!important} a.a_global#common {background:#3764ac}.a_global.xOnline {background:black;color:#f09636!important;box-shadow:inset 0px 0px 15px 3px black}  .cms_opacity {pointer-events:none !important;opacity:0} .cms {pointer-events:auto} div.crisp-client {pointer-events:none; z-index:-114154; opacity:0;} .active { z-index:114154; pointer-events:auto !important; opacity:1 !important;} div.closeX_Z{position:relative;text-align:right;z-index:1} div.closeX_W{position:relative;text-align: right;right:0px;top:0px;z-index:1} .scroll{position:absolute;width:110px;font-size:smaller;font-weight:lighter;padding-top:6px;color:#00000070;}button #x4Home{height:100px;background:red;opacity:1 !important;}.a_global.comics{background:#2a2146;box-shadow:inset 0px 0px 15px 3px #2a2146}.a_global.porn{background:#2a2146;box-shadow:inset 0px 0px 15px 3px #2a2146} div._footer a{color:#2c447e;font-weight:bolder;} div ._footer{position:absolute;margin-bottom:-62px;left:0px;background:transparent;z-index:-1 !important;bottom:-41px;padding-bottom:20px;font-size:small;font-weight:lighter;} div#navigation.navigation_css{overscroll-behavior:none;top:0px;transition-property:opacity;transition-duration:999ms;margin:0px !important} div#navigation.navigation_css_0{transition-duration:0ms !important;margin:0px !important}div > button#xX{background-image:url("https://limbopro.com/Adblock4limbo_close.svg");transition-property:opacity;transition-duration:666ms;background-color:#542c3e;color:#ffffff;opacity:0.5 !important;border:0px;margin:0px;width:108px;height:108px;border-radius:0%;}div > button#xX:hover{background-color:red;opacity:1 !important;}div > button:active{background-color:red;}div .ellCloseX{z-index:-1;margin:0px;position:initial;};span#nspan{margin:0px;font-weight:bolder !important;color:black !important;}div > div .fbt{color:#6064a2 !important;margin:0px;font-size:small;width:112px;padding-top:5px;padding-left:4px;padding-right:4px;}.echo{width:auto;font-size:15px;text-align:inherit;position:absolute;}ul > li > button{overflow:visible;width:106px !important;line-height:15px !important;} ul.ul_global > li > a{overflow:visible;width:106px !important;font-size:15px !important;line-height:15px !important;}.li_global{min-height:31px;font-size:medium;list-style:none;width:112px;}.ul_global{padding:0px;font-size:15px !important;height:248px;margin:0px;overflow:auto;width:auto;} .title_global{font-size:initial;margin-bottom:5px;font-weight:lighter;color:black !important;padding-left:4px;padding-bottom:2px;} .div_global{text-align:center;float:left;padding-top:31px;margin-bottom:29px;padding-left:0px;}.ellClose{text-align:center;float:left;padding-top:15px;margin-bottom:15px;padding-left:0px;}#navigation{overflow-y:overlay;overflow-x:hidden;background-image:url("https://limbopro.com/Adblock4limbo_bgp.jpg");background-size:100% !important;background-repeat:round;margin:auto;width:200px;height:200px;z-index:-114154;opacity:0;background-color:transparent;position:fixed;top:50%;}.a_global{text-align:center;white-space:break-spaces;color:white !important;box-shadow:inset 0px 0px 15px 3px #23395e;background:linear-gradient(to bottom,#2e466e 5%,#415989 100%);background-color:#2e466e;border-radius:0px;margin:1px;border:1px solid #1f2f47;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:100% !important;padding-bottom:6px;padding-top:6px;text-decoration:none;text-shadow:0px 1px 0px #263666;}.a_global:hover{background:linear-gradient(to bottom,#415989 5%,#2e466e 100%);background-color:#415989;}.a_global:active{position:relative;top:1px;}\
    '
}

function css_add(css, here_write_css_name_you_want) { // 优先追加style元素
    // css style 创建
    let body = document.body;
    var css_name_x = document.createElement('style');
    css_name_x.id = here_write_css_name_you_want;
    css_name_x.innerText = css;
    document.querySelector('html').insertBefore(css_name_x, body);
}

function css_url_add(css_url, here_write_css_name_you_want) { // 优先追加style元素
    // css file 创建
    let head = document.querySelectorAll('head')[0];
    var css_name_y = document.createElement('link');
    css_name_y.id = here_write_css_name_you_want;
    css_name_y.href = css_url;
    css_name_y.type = 'text/css';
    css_name_y.rel = 'stylesheet';
    head.appendChild(css_name_y);
}

css_add(file.global_css, 'navigation_style'); // 在body后面插入 css 
//css_add(file.javlibrary, 'mayi'); // 在body后面插入 css 

function insertBefore_that_element_xx(x) {
    let parentElement = document.querySelector('div#rightcolumn')
    let insertBefore_that_element_X = document.querySelector('div#video_favorite_edit');
    let son = document.querySelectorAll("[style*='vertical-align: top']")[1]
    parentElement.insertBefore(son, insertBefore_that_element_X);
    document.querySelectorAll(x).forEach((x) => { x.style.width = '140px' })
    if (window.innerWidth < 430) {

    }
}

// 新建一个独立的 div 元素 用作sample
function div_sample(echo_selector, insertBefore_that_element, switchX, child_css_change) {
    let target = document.querySelector(echo_selector);
    let div_global_x = document.createElement('div');
    div_global_x.className = "div_global " + child_css_change;
    let div_title = document.createElement('div');
    div_title.textContent = 'sample';
    div_title.className = 'title_global'; // 全局
    let ul_ul_global = document.createElement('ul');
    ul_ul_global.className = 'ul_global';
    let li_li_global = document.createElement('li');
    li_li_global.className = 'li_global';
    let a = document.createElement('a');
    a.className = 'a_global';
    a.href = 'https://limbopro.com/';
    a.target = '_blank';
    a.textContent = 'Sample';
    a.id = 'sample';
    li_li_global.appendChild(a);
    ul_ul_global.appendChild(li_li_global);
    div_global_x.appendChild(div_title);
    div_global_x.appendChild(ul_ul_global);
    if (switchX == 1) {
        let insertBefore_that_elementx = document.querySelector(insertBefore_that_element);
        target.insertBefore(div_global_x, insertBefore_that_elementx); // 插入到现有 body 前
    } else {
        target.appendChild(div_global_x);
    }
}

// 新建一个独立的 li 元素 用作sample
function li_sample(div_global_selector, insertBefore_that_element, switchX) {
    let target = document.querySelector(div_global_selector);
    let li_global_x = document.createElement('li');
    li_global_x.className = "li_global";
    let a = document.createElement('a')
    a.className = 'a_global';
    a.id = 'sample';
    a.href = 'https://limbopro.com/';
    a.target = '_blank';
    a.textContent = 'Sample';
    li_global_x.appendChild(a);

    if (switchX == 1) {
        let thatli = target.querySelectorAll('li');
        // document.querySelector('.div_global.speedtest').querySelectorAll('li')
        for (i = 0; i < thatli.length; i++) {
            if (thatli[i].querySelector(insertBefore_that_element)) {
                // document.querySelector('.div_global.speedtest').querySelectorAll('li').querySelector('#Speedtest')
                target.insertBefore(li_global_x, thatli[i])
            }
        }
    } else {
        target.appendChild(li_global_x);
    }
}

// .div_global.DeverloperX


// 可向上滑动判断
function scroll_switch() {
    //let scroll_check = setInterval(() => {
    var div_global = document.querySelectorAll('.div_global');
    ////console.log("// scroll_switch() 查看子元素数量是否超出设定");
    for (i = 0; i < div_global.length; i++) {

        if (div_global[i].querySelector('div.fbt')) {
            var fbt = div_global[i].querySelector('div.fbt').clientHeight
        } else { var fbt = 0 }

        if (div_global[i].querySelectorAll('li').length * 31 + fbt > 8 * 31) {
            let scroll_innerHTML = document.createElement('div');
            scroll_innerHTML.textContent = '*可向上滑动查看更多';
            scroll_innerHTML.className = "scroll";
            document.querySelectorAll("div.div_global")[i].appendChild(scroll_innerHTML);
            ////console.log("// scroll_switch() 正在执行插入 // 子元素较多");
            ////clearInterval(scroll_check);
        }
    }

    //}, 1000)
}

//document.querySelectorAll('.div_global')[3].querySelectorAll("li").length * 31

function xXX() {
    let div_global = document.querySelectorAll('.div_global');
    for (i = 0; i < div_global.length; i++) {
        let a_length = div_global[i].querySelectorAll("a").length;
        for (i = 0; i < a_length; i++) {
            div_global[i].querySelectorAll('a')
        }
    }
    var a_length = document.querySelectorAll('.div_global')[3].querySelectorAll("li").length;
    for (i = 0; i < a_length; i++) {
        //console.log(document.querySelectorAll('.div_global')[3].querySelectorAll("a")[i].clientHeight);
        if (document.querySelectorAll('.div_global')[3].querySelectorAll("a")[i].clientHeight > 27) {
            let scroll_innerHTML = document.createElement('div');
            scroll_innerHTML.textContent = '*可向上滑动查看更多';
            scroll_innerHTML.className = "scroll";
        }
    }
}

var selector = { // css 定义选择器
    body_css_real: ["div.navigation_css", 'common'],
    body_css: ["div#navigation.navigation_css", 'common'],
    footer: ["div._footer", 'common'],
}

function all(opacity, zIndex, switchX) {
    //console.log("// body_build() 输入为 true，开始创建导航..." + " 透明度为 " + opacity + " 层级数目为 " + zIndex)
    if (!document.querySelector('div#navigation[style]')) { // 如果导航不存在则生成
        navigation_body_pre(); // 生成导航
        let parentElement = document.getElementById('navigation');
        parentElement.style.zIndex = zIndex;
        parentElement.style.opacity = opacity;
        body_align("navigation");// 初始化导航大小
        body_bgp_switch(); // 设置背景图片
        echo_align(); // 导航居中
        //child_push(".div_global.pornMaker > ul", "100", "", "porn", "0");// 自动化生成内容
        //scroll_switch();
        //scroll_check(); // 如果每个类别子项目超过一定数目则提示可上滑动查看更多
        echo_check_switch(switchX); // 监控导航大小变化
        //setTimeout(() => {
        //  document.querySelector('div#navigation[style]').style.zIndex = document.querySelector('div#navigation[style]').style.zIndex + 1
        //}, 3000);
    }
}



/* Start 判断是否显示导航 可不删 */
function body_build(x) { // 判断导航显示与否
    if (x == "true") {
        //all(0, 114154, 1)
        //scroll_switch();
        ////console.log("// body_build() 输入为 true，开始创建导航...")
        all(1, 114154, 1)
        if (!document.querySelector('div#navigation[style]')) { // 如果导航不存在则生成
            navigation_body_pre(); // 生成导航
            let parentElement = document.getElementById('navigation');
            parentElement.style.zIndex = "114154";
            parentElement.style.opacity = "1";
            body_align("navigation");// 初始化导航大小
            body_bgp_switch(); // 设置背景图片
            echo_align(); // 导航居中
            //child_push(".div_global.pornMaker > ul", "100", "", "porn", "0");// 自动化生成内容
            echo_check_switch('1'); // 监控导航大小变化
            //scroll_switch(); // 类目下子元素超过长度检测
        } else {
            //console.log("// body_build() 输入为 true，导航显示...")
            if (document.querySelector(selector.body_css)) {
                document.querySelector(selector.body_css).style.opacity = "1";
                document.querySelector(selector.body_css).style.zIndex = "114154";
                echo_align(); // 导航居中
                body_bgp_switch(); // 设置背景图片
                echo_check_switch('1'); // 监控导航大小变化
            }
        }
    } else if (x == "false") {
        //console.log("// body_build() 输入为 false，导航隐藏...")
        if (document.querySelector(selector.body_css)) {
            document.querySelector(selector.body_css).style.opacity = "0";
            document.querySelector(selector.body_css).style.zIndex = "-114154";
            crisp_window_remove("0"); // 关闭 crisp 聊天
            echo_check_switch('0'); // 监控导航大小变化
        }
        x4Home_button("1"); // 显示按钮
        //console.log("// body_build() 导航已隐藏，右下角按钮浮现...");
    }
    //setTimeout(() => {
    //  _blank(); // 如果导航于博客页面生成 则将其 target 设置为 _blank
    //}, 3000)
}

// 设置导航初始大小 初始DaoHang 大小
function body_align(parentElement) {
    // 先居中 parentElement 全屏
    var parentElement = document.getElementById(parentElement);
    parentElement.style.height = window.innerHeight * 1 + "px";
    parentElement.style.width = window.innerWidth * 1 + "px"
    //}
}

// 替换背景图片
function body_bgp_switch() {
    let url_w = "https://limbopro.com/Adblock4limbo_bgp_w.jpg";
    let url_h = "https://limbopro.com/Adblock4limbo_bgp.jpg";
    if (window.innerWidth * 0.65 >= window.innerHeight) {
        document.querySelector("div#navigation").style.backgroundImage = `url(${url_w})`;
    } else {
        document.querySelector("div#navigation").style.backgroundImage = `url(${url_h})`;
    }
}

// echo 居中
function echo_align() {
    if (window.innerHeight > document.querySelector("div.echo").scrollHeight) {
        document.querySelector(selector.body_css_real).style.paddingTop = (window.innerHeight - document.querySelector("div.echo").scrollHeight) / 2 - 108 + "px";
        // 108 为 closeX 的尺寸
    }

    //var echo_ell_length = document.querySelectorAll('div.div_global').length; // 总共导航类目数量
    if (window.innerWidth > (112 * echo_ell_length)) { // 当屏幕宽度大于 452px
        //console.log("正在检查是否属于大尺寸...")
        body_align("navigation");
        document.querySelector(selector.body_css_real).style.paddingLeft = (window.innerWidth - (112 * echo_ell_length + 8 * echo_ell_overlay_length)) / 2 + "px";
        document.querySelector(selector.footer).style.width = Math.floor((window.innerWidth / 112)) * 112 + "px"; // footer 宽度
        document.querySelector('div.ellCloseX').style.zIndex = "-1"; // 确保关闭按钮可见可点击
        if (document.querySelector('div.closeX_Z')) {
            document.querySelector('div.closeX_Z').className = "closeX_W";
        }
        //document.querySelector('div.ellCloseX').style.position = "initial"; // 确保关闭按钮可见可点击
    } else {
        //console.log("// echo_align() 正在检查是否属于小尺寸...");
        document.querySelector(selector.footer).style.width = Math.floor((window.innerWidth / 112)) * 112 + "px"; // footer 宽度
        body_align("navigation");
        document.querySelector(selector.body_css_real).style.paddingLeft = ((window.innerWidth % 112 - 8 * echo_ell_overlay_length) / 2) + "px"; // 当 ellCloseX position 为 initial 时 
        if (document.querySelector('div.closeX_W')) {
            document.querySelector('div.closeX_W').className = ("closeX_Z");
        }
    }
}

function _blank() {
    const url_now = window.location.href.toLowerCase();
    if (/\b(limbopro)\b/i.test(url_now)) {
        document.querySelectorAll('div.echo a').forEach((x) => {
            x.target = "_blank";
            // 将当前页面链接 target 设置为 _blank
            //console.log("// _blank() 将当前页面链接 target 设置为 _blank...");
        })
    } else {
        //console.log("// _blank() 判断当前非博客页面，它是" + url_now);
    }
}

// 超棒自动化
// 在尾部追加子元素

var parentNodeX = [['Cloudflare', 'https://speed.cloudflare.com/', '_blank', '0', 'common'],
['SpeedTest', 'https://www.speedtest.net/', '_blank', '0', 'common'],
['溜池ゴロー', 'https://www.tameikegoro.jp/top/', '_blank', 'porn', 'common'],
['Madonna（マドンナ）', 'https://www.madonna-av.com/top/', '_blank', 'porn', 'common'],
['レズ・素人ナンパを中心', 'https://deeps.net/', '_blank', 'porn', 'common'],
['肉感あふれる女優', 'https://www.fitch-av.com/top/', '_blank', 'porn', 'common'],
['タカラ映像 TAKARA', 'https://www.takara-tv.jp/', '_blank', 'porn', 'common'],
['MOODYZー', 'https://www.moodyz.com/top/', '_blank', 'porn', 'common'],
['s1s1s1 S1/エスワンー', 'https://www.s1s1s1.com/top/', '_blank', 'porn', 'common'],
['PRESTIGE(プレステージ)', 'https://www.prestige-av.com/', '_blank', 'porn', 'common'],
['SOD（ソフトオンデマンド）', 'https://www.sod.co.jp/', '_blank', 'poxrn', 'common'],
['VENUSーＳ級熟女メーカ|Ｓ級熟女メーカー', 'https://venus-av.com/', '_blank', 'porn', 'common'],
['Glory Questー「禁断介護」や逆ショタ元祖', 'https://www.gloryquest.tv/', '_blank', 'porn', 'common'],
['PREMIUM（プレミアム', 'https://www.premium-beauty.com/top/', '_blank', 'porn', 'common'],
['ながえSTYLE(NTR)', 'https://www.nagae-style.com/', '_blank', 'porn', 'common'],
['IDEAPOCKET (アイデアポケット）', 'https://www.ideapocket.com/top/', '_blank', 'porn', 'porn', 'common'],
['ATTACKERS（アタッカーズ）', 'https://www.attackers.net/top/', '_blank', 'porn', 'common'],
['トップページ - AVメーカー【ダスッ！】公式サイト', 'https://www.dasdas.jp/top/', '_blank', 'porn', 'common'],
['OPPAI（おっぱい）', 'https://www.oppai-av.com/', '_blank', 'porn', 'common'],
['【kawaii*】公式サイト', 'https://www.kawaiikawaii.jp/top/', '_blank', 'porn', 'common'],
['変態紳士倶楽部】公式サイト', 'https://www.to-satsu.com/top/', '_blank', 'porn', 'common'],
['wanzfactory（ワンズファクトリー）', 'https://www.wanz-factory.com/top/', '_blank', 'porn', 'common'],
['【E-BODY（イーボディ）】公式サイト', 'https://www.av-e-body.com/top/', '_blank', 'porn', 'common'],
['MGS動画は', 'https://www.mgstage.com/', '_blank', 'porn', 'common'],
['ABC/妄想族(1302本)', 'https://www.mousouzoku-av.com/top/', '_blank', 'porn', 'common'],
['JET「卍GROUP」のトップページです', 'https://manji-group.com/top/', '_blank', 'porn', 'common'],
['!! ROCKET', 'https://www.rocket-inc.net/top.php', '_blank', 'porn', 'common'],
['FANZA通販-アダルト通販ショッピング', 'https://www.dmm.co.jp/mono/', '_blank', 'porn', 'common'],
['【無垢】公式サイトトーップページ | AVメーカ', 'https://www.muku.tv/top/', '_blank', 'porn', 'common'],
['Github', "https://github.com/", "_blank", "Tech", 'common'],
['Wikipedia', "https://zh.wikipedia.org/wiki/Wikipedia:%E9%A6%96%E9%A1%B5", "_blank", "Tech", 'common'],
["Reddit", "https://www.reddit.com/", "_blank", "Social", 'special'],
["Quora", "https://www.quora.com/", "_blank", "Social", 'common'],
["Twitter", "https://twitter.com/", "_blank", "Social", 'special'],
["Instagram", "https://www.instagram.com/", "_blank", "Social", 'common'],
["Tiktok", "https://www.tiktok.com/", "_blank", "Social", 'common'],
["Youtube", "https://m.youtube.com/", "_blank", "Media", 'special'],
["Netflix", "https://www.netflix.com/browse", "_blank", "Media", 'special'],
["HBO", "https://www.hbo.com/", "_blank", "Media", 'common'],
["Disney+", "https://www.disneyplus.com/en-hk", "_blank", "Media", 'common'],
["Amazon Prime Video", "https://www.primevideo.com/", "_blank", "Media", 'common'],
["Pexels", "https://www.pexels.com/", "_blank", "IMages", 'common'],
["Pixbay", "https://pixabay.com/", "_blank", "IMages", 'common'],
['Stack Overflow', 'https://stackoverflow.com/', '_blank', 'Developer', 'common'],
['Github', 'https://github.com/', '_blank', 'Developer', 'special'],
['掘金', 'https://juejin.cn/', '_blank', 'Developer', 'special'],
['v2ex', 'https://www.v2ex.com/', '_blank', 'Developer'],
['MDN', 'https://developer.mozilla.org/zh-CN/', '_blank', 'Developer', 'common'],
['w3schools', 'https://w3schools.cn/', '_blank', 'Developer', 'common'],
['Jable', 'https://jable.tv/', '_blank', 'xOnline', 'special'],
['Missav', 'https://missav.com/cn/', '_blank', 'xOnline', 'special'],
['Njav', 'https://njav.tv/zh/', '_blank', 'xOnline', 'common'],
['Javday', 'https://javday.tv/', '_blank', 'xOnline', 'common'],
['hanime1', 'https://hanime1.me/comics', '_blank', 'xOnline', 'common'],
['Pornhub', 'https://cn.pornhub.com/', '_blank', 'xOnline', 'common'],
['Xvideos', 'https://www.xvideos.com/', '_blank', 'xOnline', 'common'],
['Supjav', 'https://supjav.com/zh/', '_blank', 'xOnline', 'common'],
['JavLibrary', 'https://www.javlibrary.com/cn/', '_blank', 'xOnline', 'common'],
['认知偏差手册', 'https://s75w5y7vut.feishu.cn/docs/doccn3BatnScBJe7wD7K3S5poFf#RirzLG', '_blank', 'knowledge', 'common'],
['JavaScript高级程序设计', 'https://t.me/limboprossr/2812', '_blank', 'front-end', 'common'],
['IP.SB', 'https://ip.sb/', '_blank', 'ipcheck', 'common'],
['BGP Toolkit ', 'https://bgp.he.net/', '_blank', 'ipcheck', 'common'],
['Baidu', 'https://www.baidu.com/', '_blank', 'ipcheck', 'common'],
['Google', 'https://www.google.com/', '_blank', 'search', 'special'],
['Bing', 'https://www.bing.com/', '_blank', 'search', 'common'],
['DuckDuckGo', 'https://duckduckgo.com/', '_blank', 'search', 'common'],
['Yahoo!）', 'https://hk.yahoo.com/?p=us', '_blank', 'search', 'common'],
['搜狗搜索', 'https://www.sogou.com/', '_blank', 'search', 'common'],
['Baidu', 'https://www.baidu.com/', '_blank', 'search', 'common'],
['ChatGPT', 'https://chat.openai.com/auth/login', '_blank', 'AI', 'common'],
['Google Bard', 'https://bard.google.com/?hl=en', '_blank', 'AI', 'common'],
['Claude.ai', 'https://claude.ai/', '_blank', 'AI', 'common'],
['Google AI', 'https://labs.google.com/search/experiments', '_blank', 'AI', 'common'],
['Bing AI', 'https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx', '_blank', 'AI', 'common'],
["在线正则表达式测试", 'https://tool.oschina.net/regex/', '_blanl', 'Tools', 'special'],
['禁漫天堂', 'https://18comic.vip/', '_blank', 'comic18', 'special'],
['绅士漫画', 'https://www.wnacg.com/', '_blank', 'comic18', 'special'],
];


var adblock4limbo_list = ['ddys', 'ddrk', '91porn', '18comic', 'avple', 'wnacg', 'libvio', 'anime1', 'javbu', 'xiaobaotv', 'xvideos', 'netflav']

var echo_ell_length = 17; // 总共导航类目数量
var echo_ell_overlay_length = 1; // 带有滚动条的的导航类目数量

function parentElement_add() {
    all(0, -114154, 1);
    body_build('false');
    var parentElementX = setInterval(() => { //
        /**
         *  child_push(".div_global.pornMaker > ul", "100", "", "porn", "0");// 自动化生成内容
         */
        body_build('')
        //console.log("\\ parentElement_add() 类目自动化生成检测... ")
        if (document.querySelector('div#navigation[style]')) {
            parent_push('.echo', 'Tools', 4, "多宝盒//", "Tools")
            parent_push(".echo", 'AI', 4, '智能AI//', 'AI')
            parent_push(".echo", 'Search', 4, '搜索引擎//', 'search')
            parent_push(".echo", 'DeverloperX', 4, '开发者社区//', 'Developer')
            parent_push(".echo", 'Images', 4, '免费商用图片', 'IMages')
            parent_push('.echo', 'Social', 4, '社交媒体//', 'Social')
            parent_push('.echo', 'Media', 4, '娱乐媒体//', 'Media')
            parent_push('.echo', 'PornMaker', 4, '著名片商//', 'porn')
            parent_push('.echo', 'xOnline', 4, '午夜惊魂//', 'xOnline')
            parent_push('.echo', 'comic18', 4, '漫画//', 'comic18')
            child_push('.div_global.front > ul', '', "", 'front-end', 0)
            child_push('.div_global.boysshouldread > ul', '', '', 'knowledge', 0)
            child_push('.div_global.ipcheck > ul', '', '', 'ipcheck', 1)
            //console.log("// parentElement_add() 生成检测...");
            scroll_switch();
            clearInterval(parentElementX);
        }
    }, 5000)
}

parentElement_add();

// 设置 cookie 饼
function setCookie(cname, cvalue, exdays) { var d = new Date(); d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); var expires = "expires=" + d.toGMTString(); document.cookie = cname + "=" + cvalue + "; " + expires; }
function getCookie(cname) {
    var name = cname + "="; var ca = document.cookie.split(';'); for (var i = 0; i < ca.length; i++) { var c = ca[i].trim(); if (c.indexOf(name) == 0) return c.substring(name.length, c.length); }
    return "";
}

function hide_button_switch(x) {
    if (x == 1) {
        document.querySelector('button#x4Home').classList.add('cms_opacity');
        var days = window.prompt("请输入你想要隐藏该按钮的天数？（请直接输入数字），该按钮将在你指定的时间后再次显示。你可通过清理浏览器 cookie 或 无痕模式打开的方式提前停止计时。本次设置仅针对当前网站域名生效。");
        setCookie("button_switch", 'True', days);
        body_build('false');
        x4Home_button('hidden');
    }
}

// 隐藏按钮选项 1 一天
let button_switch = getCookie("button_switch");
if (button_switch == 'True') {
    document.querySelector('button#x4Home').classList.add('cms_opacity');
} else {
    document.querySelector('button#x4Home').classList.remove('cms_opacity');
}


// 复制父元素下指定位置子元素 
function parentElement_build(parentNode, i) {
    //console.log("// parentElement_build(() 正在复制" + parentNode + "下的父元素，并追加到" + parentNode + "后");
    if (document.querySelectorAll(parentNode)[0]) {
        let parentElement = document.querySelectorAll(parentNode)[0]; // 抓住老番茄
        let node = document.querySelectorAll(parentNode)[0].children[i]; // 取出
        let clone = node.cloneNode(true); // 复制
        parentElement.appendChild(clone);
    }
}

// 替换父元素的内容
function parentElement_inner(parentNode, Headline_css, Headreplace_str, child_css_change) {
    //console.log("// parentElement_inner() 正在替换" + parentNode + "下的最后一个元素的标题及相关属性");
    document.querySelector(".div_global." + child_css_change).querySelector(Headline_css).textContent = Headreplace_str;
} // parentElement_inner('.echo','.title','社交媒体//','Social')

// 在父元素下追加元素
function parentElement_push(parentNode, category, child_css_change, insertBefore_that_element, switchX) {

    // part1
    var arrayXP = parentNodeX;
    arrayXP.length
    var valid = 0;
    for (i = 0; i < arrayXP.length; i++) {
        if (arrayXP[i][3] == category) {
            var number = ++valid;
            ////console.log("// parentElement_push() 匹配到的内容为" + arrayXP[i][0]);
        }
    }



    //console.log("// parentElement_push() 匹配到符合" + category + "的数量为" + number);
    //console.log("// parentElement_push() .div_global." + child_css_change + " > ul");

    // part 2
    var real_length = document.querySelector(".div_global." + child_css_change + " > ul").querySelectorAll('li').length
    //console.log("// 被复制子元素个数为" + real_length + category + "类目下符合要求的元素个数为" + number)
    if (number > real_length) {
        var lenth_now = number - real_length;
        //console.log("// parentElement_push() 开始新建元素...")
        for (i = 0; i < lenth_now; i++) {
            li_sample(".div_global." + child_css_change + " > ul", insertBefore_that_element, switchX);
            //child_build(".div_global." + child_css_change + " > ul")
        }

        // Part 3 
        var bb = 0;
        for (i = 0; i < arrayXP.length; i++) {
            if (arrayXP[i][3] == category) {
                document.querySelector(".div_global." + child_css_change).querySelectorAll('a')[bb].textContent = arrayXP[i][0];
                document.querySelector(".div_global." + child_css_change).querySelectorAll('a')[bb].href = arrayXP[i][1];
                document.querySelector(".div_global." + child_css_change).querySelectorAll('a')[bb].target = arrayXP[i][2];
                document.querySelector(".div_global." + child_css_change).querySelectorAll('a')[bb].id = arrayXP[i][3];
                document.querySelector(".div_global." + child_css_change).querySelectorAll('a')[bb].classList.add(arrayXP[i][3]);
                document.querySelector(".div_global." + child_css_change).querySelectorAll('a')[bb].classList.add(arrayXP[i][4]);
                var bb = ++bb;
                // 元素新建成功，开始执行元素重写
                ////console.log('// 元素新建成功，开始执行元素重写');
            }
        }
    }
    else {
        // Part 4
        var bb = 0;
        for (i = 0; i < arrayXP.length; i++) {
            //console.log("// 无需新建元素，开始执行元素重写...")
            if (arrayXP[i][3] == category) {
                document.querySelector(".div_global." + child_css_change).querySelectorAll('a')[bb].textContent = arrayXP[i][0];
                document.querySelector(".div_global." + child_css_change).querySelectorAll('a')[bb].href = arrayXP[i][1];
                document.querySelector(".div_global." + child_css_change).querySelectorAll('a')[bb].target = arrayXP[i][2];
                document.querySelector(".div_global." + child_css_change).querySelectorAll('a')[bb].id = arrayXP[i][3];
                document.querySelector(".div_global." + child_css_change).querySelectorAll('a')[bb].classList.add(arrayXP[i][3]);
                document.querySelector(".div_global." + child_css_change).querySelectorAll('a')[bb].classList.add(arrayXP[i][4]);
                var bb = ++bb;
            }
        }
    }
}


function parent_push(parentNode, child_css_change, childPosition, title, category, insertBefore_that_element, switchX) {
    //parentElement_build(parentNode, childPosition)
    div_sample(parentNode, insertBefore_that_element, switchX, child_css_change);
    parentElement_inner(parentNode, '.title_global', title, child_css_change); // 该标题改属性
    parentElement_push(parentNode, category, child_css_change, insertBefore_that_element, switchX)
}

/** 
 * 举例//
 * parentElement_build('.echo',3)
 * parentElement_inner('.echo','.title','社交媒体//','SocialX');
 * parentElement_push('.echo','Social','SocialX')
 * parentElement('.echo','Social',4,'社交媒体//','Social')
 */


function child_build(div_global_selector) { // 复制父元素下最后一个子元素
    //console.log("// child_build() 正在复制 " + div_global_selector + " 下的元素并追加到自身身后...");
    if (document.querySelector(div_global_selector)) {
        let parentElement = document.querySelector(div_global_selector); // 抓住老番茄
        let node = document.querySelector(div_global_selector).lastElementChild; // 取出
        let clone = node.cloneNode(true); // 复制
        parentElement.appendChild(clone);
    }
}

// 替换子元素的内容
function child_inner(div_global_selector, length, array, category, insertBefore_that_element, switchX) {
    //let arrayX = parentNodeX;
    if (parentNodeX[length][3] == category) { // 如果类目匹配则执行
        //child_build(div_global_selector); // 開始复制子元素
        li_sample(div_global_selector, insertBefore_that_element, switchX);
        document.querySelector(div_global_selector).lastElementChild.querySelector('a').textContent = parentNodeX[length][0] // 開始修改其內容
        document.querySelector(div_global_selector).lastElementChild.querySelector('a').href = parentNodeX[length][1] // 開始需改其鏈接
        document.querySelector(div_global_selector).lastElementChild.querySelector('a').target = parentNodeX[length][2] // 開始修改其目標
    }
}

function child_push(div_global_selector, length, array, category, insertBefore_that_element, switchX) {
    for (i = 0; i < parentNodeX.length; i++) {
        child_inner(div_global_selector, i, array, category, insertBefore_that_element, switchX); // 替换子元素内容
    }
}

// document.querySelectorAll("div.echo")[0].children
// child_push(".div_global.pornMaker > ul","10","")
// child_push(".div_global.pornMaker > ul","10","","porn")

let ads_css = '.ad_img {display:none! important; pointer-events: none !important;}\
'
function ads_remove(selector) {
    document.querySelectorAll(selector).forEach((x) => { x.remove() })
    css_add(ads_css, "fuckads")
}

// 自动调整导航宽度及高度

function echo_check_switch(x) {
    if (x == 1) {
        var echo_check = setInterval(() => {
            let widthX = window.innerWidth;
            let heightX = window.innerHeight;
            setTimeout(() => {
                if (document.querySelector("#navigation[style]")) {
                    if (document.querySelector("#navigation[style]").style.opacity == 1) {
                        if (widthX != window.innerWidth | heightX != window.innerHeight) {
                            body_build('true');
                            //console.log("// echo_check_switch() 捕捉到导航变动...，且导航处于显示状态...")
                        }
                    }
                } else {
                    //console.log("未捕捉到导航...，且导航处于未显示状态...")
                }
            }, 1000)
        }, 500)
    } else if (x == 0) {
        //console.log("// echo_check_switch() 导航已关闭，清理导航大小变化监控循环...")
        clearInterval(echo_check) // 清理循环
    }
}


const js_common_fx = {
    crisp: 'https://limbopro.com/Adguard/crisp.js' // crisp 聊天系统 chat
}

// 动态创建并引用外部资源 外部样式表 外部脚本
function thrd_party_file(tagname, url, where) {
    const ele_New = document.createElement(tagname);
    // script
    if (tagname == "script") {
        ele_New.type = "text/javascript";
        ele_New.src = url;
        ele_New.setAttribute('async', '')
        // link
    } else if (tagname == "link") {
        ele_New.rel = "stylesheet";
        ele_New.type = "text/css";
        ele_New.href = url;
    }
    if (where == "body") {
        document.body.appendChild(ele_New);
    } else if (where == "head") {
        document.head.appendChild(ele_New);
    }
}

function crisp_window_switch() {
    //console.log("// crisp_window_switch() 于导航页面手动开启Crisp聊天窗口...")
    let crisp_check = setInterval(() => {
        if (document.querySelector("span[data-id]")) {
            document.querySelector("span[data-id]").click();
            clearInterval(crisp_check);
        }
    }, 1000);

    let crisp_visible = setInterval(() => {
        if (document.querySelectorAll("[data-visible='true']").length > 1) {
            crisp_window_remove("1");
            clearInterval(crisp_visible);
        } else {
            if (document.querySelectorAll("[data-visible='true']").length == 1) {
                crisp_window_remove("0");
                clearInterval(crisp_visible);
            }
        }
    }, 1000);
}

function crisp_window_remove(x) {
    if (x == 0) {
        if (document.querySelector("[data-for-id=new_messages]")) { // 如果有未读消息则强制显示
            document.querySelector('[aria-live=polite].crisp-client').classList.add('active');
            //console.log("// crisp_window_remove() 有未读消息，执行显示Crisp成功...")
        } else {
            if (document.querySelector('[aria-live=polite].crisp-client')) {
                document.querySelector('[aria-live=polite].crisp-client').classList.remove('active');
                ////console.log("// crisp_window_remove() 执行隐藏Crisp成功...")
            }
        }
    } else if (x == 1) {
        document.querySelector('[aria-live=polite].crisp-client').classList.add('active');
        //console.log("// crisp_window_remove() 手动打开，执行显示Crisp成功...")
    }
}

function crisp_active(x) {
    if (x == 1) {
        if (!document.querySelector("script[src*='crisp']")) {
            //console.log("// crisp_active() 插入 crisp 系统脚本...")
            thrd_party_file("script", "https://limbopro.com/Adguard/crisp.js", "head");
            crisp_window_remove('1');
            crisp_window_switch();
        } else {
            crisp_window_remove('1');
            crisp_window_switch();
        }
    }
}


function crisp_auto_hidden() {
    val = null
    ////console.log(val === document.querySelector(selector.body_css));
    if (val === document.querySelector(selector.body_css) && val === document.querySelector("[data-for-id=new_messages]") && val === document.querySelector('.cc-1hqb[data-visible=true]')) {
        crisp_window_remove('0'); // 隐藏crisp按钮
        ////console.log("// crisp_auto_hidden()执行隐藏Crisp...")
    } else {
        if (document.querySelector("[data-for-id=new_messages]")) { // 如果有未读消息则强制显示
            crisp_window_remove('1');
            ////console.log("/ crisp_auto_hidden() 执行显示Crisp...")
        }
    }
}

thrd_party_file("script", "https://limbopro.com/Adguard/crisp.js", "head"); // 默认加载 Crisp 脚本 但不显示对话框

function testx() {
    css_url_add('https://limbopro.com/CSS/Adblock4limbo.user.css', 'Global adCSS');
    body_build('false');
}