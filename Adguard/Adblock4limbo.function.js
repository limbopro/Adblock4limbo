// ==UserScript==
// @name         functionx4limbo.X
// @namespace    https://limbopro.com/Adguard/Adblock4limbo.function.js
// @version      0.1.10.16
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
            console.log("Catch it")
            alert(url_result)
        }
    }
}
*/

/* 循环播放 */
function video_loopPlay() {
    setInterval(function () {
        var ele = ["video[preload='none'],video#player"];
        var ele_catch = document.querySelector(ele);
        if (ele_catch) {
            ele_catch.play()
            console.log("视频已开启循环播放；")
        }
    }, 1000)
}

/* 延后播放 */
function video_delayPlay(time) {
    setTimeout(function () {
        var ele = ["video[preload='none'],video#player"];
        var ele_catch = document.querySelector(ele);
        if (ele_catch) {
            ele_catch.play()
            console.log("视频已延后播放；")
        }
    }, time)
}


/* Chat and navigation Start */

function adblock4limbo(x) { // tgChat
    // 新建 x4Div
    let new_body = document.createElement('div'); // body 换为 div
    new_body.id = 'x4Div';

    let body = document.body;
    //document.querySelector('html').appendChild(new_body); // 插入到现有 body 后
    document.querySelector('html').insertBefore(new_body, body); // 插入到现有 body 前

    // 定义按钮
    let x4Home = document.createElement('button')
    x4Home.id = "x4Home";
    x4Home.setAttribute('onclick', "x4Daohang_create_show('1')")

    var origin = '\
    padding:0px;\
    transition-duration: 666ms;\
    transition-property: height;\
    z-index: 114154;\
    opacity: 1;\
    bottom: 15%;\
    right: 0.5%;\
    position: fixed;\
    border: transparent;\
    background-color: transparent;\
    background-image: url("https://limbopro.com/Adblock4limbo.svg") !important;\
    background-size: 100% !important;\
    background-repeat: no-repeat;\
'
    x4Home.style = origin;
    document.getElementById('x4Div').appendChild(x4Home); // 在 x4Div 下添加按钮
    document.getElementById('x4Home').style.height = x;
    document.getElementById('x4Home').style.width = x;

}



// 定义按钮尺寸
function adblock4limbo_svg_switch_by_width() {
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

// 自动隐藏 chat 按钮
function hidden_adblock4limbo() {
    if (document.getElementById('x4Home')) {
        console.log("x4Home 存在") // 存在
        let last_known_scroll_position = window.scrollY;
        const x4Home = document.getElementById('x4Home'); const new_div = document.getElementById('x4Div');
        setTimeout(() => {
            if (last_known_scroll_position !== window.scrollY) {
                console.log("页面还在滑动...");
                x4Div_show('1');
            } else {
                x4Div_show('0');
            }
        }, 1000)
    } else {
        console.log("x4Home 不存在") // 不存在 啥也不做
    }
}

setInterval(() => {
    hidden_adblock4limbo();
}, 3000)

// 判断是否切换显示
function x4Div_show(x) { // 显示按钮
    const x4Home = document.getElementById('x4Home'); const new_div = document.getElementById('x4Div');
    if (x == 1) {
        x4Home.style.height = adblock4limbo_svg_switch_by_width();
        x4Home.style.width = adblock4limbo_svg_switch_by_width();
        new_div.style.zIndex = '114154';
    } else {
        setTimeout(() => {
            x4Home.style.height = '0%';
        }, 500)
        //x4Home.style.zIndex = '-114154';
    }
}

// 当鼠标🖱靠近时显示 chat 按钮
//onload = () => {
const mousemove_element = document.querySelectorAll('body')[0];
// 绑定鼠标移动事件
mousemove_element.addEventListener('mousemove', e => {
    if (document.body.clientWidth) {
        if (e.offsetX >= 0.65 * document.body.clientWidth) {
            x4Div_show('1');
        }
    }
});
//}

const url_now = window.location.href.toLowerCase();
if (/\b(google|bing)\b/i.test(url_now)) {
    console.log("当前地址不执行 chat 聊天按钮插入")  // 如果当前 url 带有 google/bing 则不执行按钮插入
} else {
    adblock4limbo(adblock4limbo_svg_switch_by_width()); // 插入 chat 聊天按钮
}

/* 
如不想显示 chat 聊天按钮 
可使用双斜杠 // 注释上述函数调用代码；
举例如下：
 
// adblock4limbo();
// hidden_adblock4limbo();
 
*/

/* Chat and navigation End */


/* Start 导航页面 可不删 */

function x4Daohang_create(father, son) {
    let x4Daohang = document.createElement('div')
    x4Daohang.id = 'x4Daohang';
    let body = document.body;
    document.querySelector('html').insertBefore(x4Daohang, body);

    let ele_innerHTML = '\
        \
        <div class="echo">\
        \
        <div class="xClose"><button id="xX" onclick="x4Daohang_create_show(\'0\')"></button></div>\
        \
        <div class="ellFeedback">\
        <div class="bigger">反馈/建议//</div>\
        <ul class="xul">\
        <li class="xli"><button style="background:#70997b; box-shadow:inset 0px 0px 15px 3px #16191f00;" class="xButton" onclick="crisp_active(\'1\')" id="webChat">在线反馈</button></li>\
        <li class="xli"><a class="xButton" id="issue" href="https://github.com/limbopro/Adblock4limbo/issues" \
        target="_blank">提交issue</a></li>\
        <li class="xli"><a class="xButton" id="issue" href="https://github.com/limbopro/Adblock4limbo/blob/main/Adguard/Adblock4limbo.user." \
        target="_blank">查看源码</a></li>\
        <li class="xli"><a class="xButton" id="admin" href="https://t.me/limboprobot" \
        target="_blank">电报联系</a></li>\
        <li class="xli"><a class="xButton" id="tgGroup" href="https://t.me/Adblock4limbo/21" \
        target="_blank">电报群组</a></li>\
        \
        <div class="fbt">新网站收录、当前网页广告问题反馈，其他建议或意见，请通过<span style="color:black;font-weight:bolder;">以上方式</span>告知我们...</div>\
        </ul>\
        </div>\
        \
        <div class="ellGlobal">\
        <div class="bigger">关注博主//</div>\
        <ul class="xul">\
        <li class="xli"><a class="xButton" id="Github" href="https://github.com/limbopro" \
        target="_blank">Github</a></li>\
        <li class="xli"><a class="xButton" id="GreasyFork" href="https://sleazyfork.org/zh-CN/users/893587-limbopro" \
        target="_blank">GreasyFork</a></li>\
        <li class="xli"><a class="xButton" id="GreasyFork" href="https://t.me/limboprossr" \
        target="_blank">电报频道</a></li>\
        <li class="xli"><a class="xButton" id="limboprossr" href="https://twitter.com/limboprossr" \
        target="_blank">Twitter</a></li>\
        <li class="xli"><a class="xButton" id="YouTube" href="https://m.youtube.com/@limboprossr/featured" \
        target="_blank">YouTube</a></li>\
        \
        </ul>\
        </div>\
        \
        <div class="ellGlobal">\
        <div class="bigger">工具箱//</div>\
        <ul class="xul">\
        <li class="xli"><a class="xButton" id="yhlxj" href="https://limbopro.com/archives/25524.html" \
        target="_blank">流媒体合租</a></li>\
        <li class="xli"><a style="background:#5a4771;box-shadow:inset 0px 0px 15px 3px #16191f00;" class="xButton" id="Adblock4limbo" href="https://limbopro.com/archives/12904.html" \
        target="_blank">去网页广告</a></li>\
        <li class="xli"><a class="xButton" id="software_skills" href="https://limbopro.com/category/software-skills/" \
        target="_blank">软件百科</a></li>\
        <li class="xli"><a class="xButton" id="website_builder" href="https://limbopro.com/category/builder/" \
        target="_blank">博客优化</a></li>\
        <li class="xli"><a class="xButton" id="search" href="https://limbopro.com/search.html" \
        target="_blank">毒奶搜索</a></li>\
        <li class="xli"><a class="xButton" id="daohang" href="https://limbopro.com/daohang/" \
        target="_blank">毒奶导航</a></li>\
        <li class="xli"><a style="background:#5a4771;box-shadow:inset 0px 0px 15px 3px #16191f00;" class="xButton" id="index" href="https://limbopro.com/" \
        target="_blank">毒奶博客</a></li>\
        \
        </ul>\
        </div>\
        \
        <div class="ellMovie">\
        <div class="bigger">在线影视//</div>\
        <ul class="xul">\
        <li class="xli"><a class="xButton" id="nbys" href="https://www.nivod4.tv/"\
        target="_blank">泥巴影视</a></li>\
        <li class="xli"><a class="xButton" id="ddrk" href="https://ddys.pro/"\
        target="_blank">低端影视</a></li>\
        <li class="xli"><a class="xButton" id="xbys" href="https://xiaobaotv.net/"\
        target="_blank">小宝影视</a></li>\
        <li class="xli"><a class="xButton" id="xbys" href="https://gimy.ai/"\
        target="_blank">剧迷网</a></li>\
        <li class="xli"><a class="xButton" id="duboku" href="https://www.duboku.tv/"\
        target="_blank">独播库</a></li>\
        <li class="xli"><a class="xButton" id="ttsp" href="https://www.ttsp.tv/"\
        target="_blank">天天视频</a></li>\
        <li class="xli"><a class="xButton" id="555dy" href="https://555dyx3.com/"\
        target="_blank">555电影网</a></li>\
        <li class="xli"><a class="xButton" id="libvio" href="https://libvio.top/"\
        target="_blank">libvio梨</a></li>\
        </ul>\
        </div>\
        \
        <div class="ellPorn">\
        <div class="bigger">午夜惊魂//</div>\
        <ul class="xul">\
        <li class="xli"><a class="xButton" id="Pornhub" href="https://cn.pornhub.com/"\
        target="_blank">Pornhub</a></li>\
        <li class="xli"><a class="xButton" id="Xvideos" href="https://www.xvideos.com/"\
        target="_blank">Xvideos</a></li>\
        <li class="xli"><a class="xButton" id="Missav" href="https://missav.com/"\
        target="_blank">Missav</a></li>\
        <li class="xli"><a class="xButton" id="Jable" href="https://jable.tv/"\
        target="_blank">Jable</a></li>\
        <li class="xli"><a class="xButton" id="Javday" href="https://javday.tv/"\
        target="_blank">Javday</a></li>\
        <li class="xli"><a class="xButton" id="hanime1" href="https://hanime1.me/comics"\
        target="_blank">hanime1</a></li>\
        </ul>\
        </div>\
        \
        <div class="ellGlobal">\
        <div class="bigger">漫画//</div>\
        <ul class="xul">\
        <li class="xli"><a class="xButton" id="18comic" href="https://18comic.vip/"\
        target="_blank">禁漫天堂</a></li>\
        <li class="xli"><a class="xButton" id="wnacg" href="https://www.wnacg.com/"\
        target="_blank">绅士漫画</a></li>\
        </ul>\
        </div>\
        \
        </div>\
'

    let x4Daohang_parents = document.getElementById('x4Daohang');
    x4Daohang_parents.innerHTML = ele_innerHTML;

    let css_innerHTML = '\
    div > button {background-image:url("https://limbopro.com/Adblock4limbo_close.svg"); transition-property:opacity;transition-duration: 666ms;background-color:#542c3e;color:#ffffff;opacity:0.5;border:0px;margin:0px;width:108px;height:108px;border-radius:50%;} div > button:hover {background-color:red;opacity:1} div > button:active {background-color:red;}div .xClose{z-index:-1;margin:0px;position:absolute;right:-72px;top:3px;}; span#nspan {margin:0px;font-weight:bolder !important;color:black !important;} div > div .fbt{color:#6064a2 !important;margin:0px;font-size:small;width:112px;padding-top:5px;padding-left:4px;padding-right:4px;} .echo{font-size:15px;padding-top:27px;padding-bottom:47px;margin:0px;text-align:right;width:auto;text-align:inherit;position:absolute;margin-left:25px;margin-right:25px;}ul > li > button{overflow:visible;width:106px !important;line-height:15px !important;}ul > li > a{overflow:visible;width:106px !important;font-size:15px !important;line-height:15px !important;}.xli{list-style:none;width:112px;height:31px;}.xul{padding:0px;fontsize:15px !important;height:275px;margin:0px;overflow:auto;width:auto;}.bigger{font-size:initial;margin-bottom:5px;font-weight:lighter;color:black !important;padding-left:4px;padding-bottom:2px;}.ellFeedback{text-align:center;float:left;padding-top:15px;margin-bottom:15px;padding-left:0px;}.ellMovie{text-align:center;float:left;padding-top:15px;margin-bottom:15px;padding-left:0px;}.ellPorn{text-align:center;float:left;padding-top:15px;margin-bottom:15px;padding-left:0px;}.ellGlobal{text-align:center;float:left;padding-top:15px;margin-bottom:15px;padding-left:0px;}.ellClose{text-align:center;float:left;padding-top:15px;margin-bottom:15px;padding-left:0px;}#x4Daohang{overflow-y:overlay;overflow-x:hidden;background-image:url("https://limbopro.com/Adblock4limbo_bgp.jpg");background-size:100% !important;background-repeat:round;margin:auto;width:200px;height:200px;z-index:-114154;opacity:0;background-color:transparent;position:fixed;top:50%;}.xButton{color:white !important;box-shadow:inset 0px 0px 15px 3px #23395e;background:linear-gradient(to bottom,#2e466e 5%,#415989 100%);background-color:#2e466e;border-radius:0px;margin:1px;border:1px solid #1f2f47;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:15px !important;padding-bottom:6px;padding-top:6px;text-decoration:none;text-shadow:0px 1px 0px #263666;}.xButton_close{color:white !important;box-shadow:black;background:red;background-color:red;border-radius:17px;margin:1px;border:0px solid #1f2f47;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:15px !important;padding-bottom:6px;padding-top:6px;text-decoration:none;text-shadow:0px 1px 0px #263666;}.xButton:hover{background:linear-gradient(to bottom,#415989 5%,#2e466e 100%);background-color:#415989;}.xButton:active{position:relative;top:1px;}\
    '

    let css_x4Daohang = document.createElement('style');
    css_x4Daohang.id = 'css_x4Daohang';
    css_x4Daohang.innerText = css_innerHTML;
    document.querySelector('html').insertBefore(css_x4Daohang, body);

    // 先居中 _father 全屏
    var _father = document.getElementById(father);
    _father.style.height = window.innerHeight * 1 + "px";
    _father.style.width = window.innerWidth * 1 + "px"
    //}

    _father.style.top = (window.innerHeight - _father.clientHeight) / 2 + "px";
    //_father.style.right = (window.innerWidth - _father.clientWidth) / 2 + "px";

    var _son = document.getElementById(son);
    _father.style.paddingTop = (_father.clientHeight - (_son.clientHeight + 4) * (document.querySelectorAll('a.xButton').length + 2)) / 2 + "px";
    //let xButton = document.querySelectorAll('.xButton');
}

/* End 导航页面 可不删 */

/* Start 判断是否显示导航 可不删 */
function x4Daohang_create_show(x) { // 判断导航显示与否
    if (x == 1) {
        if (!document.querySelector('div#x4Daohang[style]')) { // 如果导航不存在则生成
            x4Daohang_create("x4Daohang", "webChat"); // 生成导航
            let _father = document.getElementById('x4Daohang');
            _father.style.zIndex = "114154";
            _father.style.opacity = "1";
            bgp_switch(); // 设置背景图片
            echo_position_switch();
        }
    } else {
        crisp_active('0');
        document.getElementById('x4Daohang').remove();
        let css_x4Daohang = document.querySelectorAll('#css_x4Daohang');
        for (i = 0; i < css_x4Daohang.length; i++) {
            css_x4Daohang[i].remove();
        }
        console.log("移除 x4Daohang");
        x4Div_show('1'); // 显示按钮
    }
}

// 替换背景图片
function bgp_switch() {
    let url_w = "https://limbopro.com/Adblock4limbo_bgp_w.jpg";
    let url_h = "https://limbopro.com/Adblock4limbo_bgp.jpg";
    if (window.innerWidth * 0.65 >= window.innerHeight) {
        document.querySelector("div#x4Daohang").style.backgroundImage = `url(${url_w})`;
    } else {
        document.querySelector("div#x4Daohang").style.backgroundImage = `url(${url_h})`;
    }
}



// 导航居中
function echo_position_switch() {
    document.querySelector('div.xClose').style.paddingLeft = (document.querySelector("div.echo").clientHeight - 64) / 2 + "px";
    let echo_height = document.querySelector("div.echo").clientHeight;
    let echo_width = document.querySelector("div.echo").clientWidth;
    if (window.innerWidth >= 500) { // 当屏幕宽度大于 452px 
        console.log("大尺寸，调整 marginTop..."); document.querySelector("div.echo").style.marginTop = (window.innerHeight - echo_height) * 0.5 + "px";
        console.log("大尺寸，调整 marginLeft..."); document.querySelector("div.echo").style.marginLeft = (window.innerWidth - echo_width) * 0.5 + "px";
        //}
    } else {
        //alert("正在检查是否属于小尺寸...")
        console.log("正在检查是否属于小尺寸...")
        document.querySelector("div.echo").style.paddingLeft = ((window.innerWidth - 50) % 112 / 2) + "px";
        if (3 - Math.floor((window.innerWidth - 50) / 112) == 1) {
            document.querySelector('div.ellClose').style.paddingLeft = (112 * 3 - document.querySelector('div.ellClose').clientWidth) + "px";
            console.log("小尺寸，调整 paddingLeft...")
            //let close = document.querySelector('div.ellClose').clientWidth;
            //document.querySelector('div.ellClose').style.paddingLeft = (document.querySelector('div.echo').clientWidth - parseFloat(document.querySelector('div.echo').style.paddingLeft) - close) + "px";
        }
    }
}

let nax_chage = setInterval(() => { // 自动调整导航宽度及高度
    let widthX = window.innerWidth;
    let heightX = window.innerHeight;
    setTimeout(() => {
        if (document.querySelector("#x4Daohang[style]")) {
            if (widthX != window.innerWidth | heightX != window.innerHeight) {
                console.log("捕捉到导航变动...")
                x4Daohang_create_show('0');
                x4Daohang_create_show('1');
            }
        } else {
            console.log("未捕捉到导航...")
        }
    }, 1000)
}, 500)

const js_common_fx = {
    crisp: 'https://limbopro.com/Adguard/crisp.js' // crisp 聊天系统 chat
}
// 动态创建并引用外部资源 外部样式表 外部脚本
function tagName_appendChild_fx(tagname, url, where) {
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

function crisp_active(x) {
    if (x == 1) {
        tagName_appendChild_fx("script", "https://limbopro.com/Adguard/crisp.js", "head")
        let crisp_check = setInterval(() => {
            if (document.querySelector("span[data-id=\"chat_closed\"]")) {
                document.querySelector("span[data-id=\"chat_closed\"]").click();
                clearTimeout(crisp_check);
            } else if (document.querySelector("span[data-id=\"chat_opened\"]")) {
                document.querySelector("span[data-id=\"chat_opened\"]").click();
                clearTimeout(crisp_check);
            }
            if (document.querySelector("span[data-id=\"chat_closed\"]")) {
                document.querySelector("span[data-id=\"chat_closed\"]").style = "height:60px !important"
            } if (document.querySelector("span[data-id=\"chat_opened\"]")) {
                document.querySelector("span[data-id=\"chat_opened\"]").style = "height:60px !important"
            } if (document.querySelector("span[data-has-unread='false']")) {
                document.querySelector("span[data-has-unread='false']").style = "height:60px !important"
            }
        }, 1000)
    } else {
        if (document.querySelector("span[data-id=\"chat_closed\"]")) {
            document.querySelector("span[data-id=\"chat_closed\"]").style = "height:0 !important"
        } if (document.querySelector("span[data-id=\"chat_opened\"]")) {
            document.querySelector("span[data-id=\"chat_opened\"]").style = "height:0 !important"
        } if (document.querySelector("span[data-has-unread='false']")) {
            document.querySelector("span[data-has-unread='false']").style = "height:0 !important"
        }
    }
}