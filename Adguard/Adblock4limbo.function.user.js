// ==UserScript==
// @name         Function4limbo.X
// @namespace    https://limbopro.com/Adguard/Adblock4limbo.function.js
// @version      0.2.04.10
// @license      CC BY-NC-SA 4.0
// @description  专为 Adblock4limbo 设计；https://greasyfork.org/zh-CN/scripts/443290-adblock4limbo；
// @author       limbopro
// @match        https://twitter.com/*
// @match        https://www.xvideos.com/*
// @match        https://www.youtube.com/*
// @match        https://developer.mozilla.org/*
// @match        https://venus-av.com/*
// @exclude      https://limbopro.com/*
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

var repeat_regex = ["https:?\/\/.*?hls.*?\.m3u8", "https:?\/\/.*?phncdn.*?hls.*?\.m3u8", "https:?\/\/.*?mushroomtrack.*?\.m3u8"]

function m3u8_tempt(x) {
    var i, url_result; var url_regex = new RegExp(x, "gi")
    var ele = ["script", "a"];
    var ele_catch = document.querySelectorAll(ele);
    for (i = 0; i < ele_catch.length; i++) {
        if ((url_result = url_regex.exec(ele_catch[i].innerHTML)) != null) {
            document.getElementById("copy").value = url_result;
            console.log("Catch it")
        }
    }
}


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

function selector_one_by_one(x) { // 按选择器一个一个移除
    if (document.querySelector(x)) {
        document.querySelectorAll(x).forEach((x) => { x.remove() })
    }
}

// 先新建一个按钮
function adblock4limbo(x, csp) {
    // 新建 x4Div
    let new_body = document.createElement('div'); // body 换为 div
    new_body.id = 'x4Div'; // 高等悬挂
    let body = document.body;
    //document.querySelector('html').appendChild(new_body); // 插入到现有 body 后
    document.querySelector('html').insertBefore(new_body, body); // 插入到现有 body 前

    // 定义按钮
    let x4Home = document.createElement('button')
    x4Home.id = "x4Home";

    if (csp == 'nocsp') {
        console.log('创建不带CSP属性按钮...')
        x4Home.setAttribute("class", "cms");
        //x4Home.setAttribute('onclick', "body_build('true');")
        var nocsp = 'padding:0px;transition-duration:666ms;transition-property:height;z-index:114154;bottom:15%;right:0.5%;position:fixed;border:transparent;background-color:transparent;background-image:url("https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/uploads/imgs/Adblock4limbo.svg") !important;background-size:100% !important;background-repeat:no-repeat;';
        x4Home.style = nocsp;
        document.getElementById('x4Div').appendChild(x4Home); // 在 x4Div 下添加按钮
        document.getElementById('x4Home').style.height = x;
        document.getElementById('x4Home').style.width = x;

        if (window.innerHeight < 600) {
            document.querySelector('#x4Home').style.bottom = '30%';
        }

    } else if (csp == 'csp') {
        console.log('创建带CSP属性按钮...')
        var csp = 'box-shadow:inset 0px 0px 15px 3px #23395e;background:linear-gradient(to bottom,#2e466e 5%,#415989 100%);background-color:#2e466e;border-radius:17px;border:1px solid #1f2f47;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:15px;padding:6px 13px;text-decoration:none;text-shadow:0px 1px 0px #263666;padding:0px;transition-duration:666ms;transition-property:height;z-index:114154;bottom:15%;right:0.5%;position:fixed;border:transparent;border-radius:50%;';
        x4Home.style = csp;
        x4Home.textContent = '导航';
        document.getElementById('x4Div').appendChild(x4Home); // 在 x4Div 下添加按钮
        //x4Home.setAttribute("class", "cspButton");
        document.getElementById('x4Home').style.height = x;
        document.getElementById('x4Home').style.width = x;
        if (window.innerHeight < 600) {
            document.querySelector('#x4Home').style.bottom = '30%';
        }
    }
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
var click_dont_move_and_click = 600;
function hidden_adblock4limbo() {
    if (document.getElementById('x4Home')) {
        ////console.log("// hidden_adblock4limbo() 按钮存在") // 存在
        var last_known_scroll_position = window.scrollY;
        const x4Home = document.getElementById('x4Home'); const new_div = document.getElementById('x4Div');
        setTimeout(() => {
            //// console.log("本次移动距离" + Math.abs(last_known_scroll_position - window.scrollY))
            //if (Math.abs(last_known_scroll_position - window.scrollY) > 1000) {
            if (last_known_scroll_position !== window.scrollY && document.querySelector('img.lockscreen') == null) {
                ////console.log("// hidden_adblock4limbo() 按钮存在，且页面还在滑动...");
                if (document.querySelector("#navigation4limbo").style.zIndex > 0) {
                    document.querySelector("#navigation4limbo").style.zIndex = ++document.querySelector("#navigation4limbo").style.zIndex;
                }
                znsh_unlock();
                x4Home_button('1');
                if (click_dont_move_and_click < 400) { // 定时400秒
                    click_dont_move_and_click = click_dont_move_and_click + 600;
                } else {
                    click_dont_move_and_click = click_dont_move_and_click + 120;
                }
                document.querySelector('#x4Home').style.zIndex = document.querySelector('#x4Home').style.zIndex + 1;
            } else {
                x4Home_button('0');
                click_dont_move_and_click = --click_dont_move_and_click;
                if (click_dont_move_and_click < 300) {
                    ////znsh();
                }
                ////console.log("// hidden_adblock4limbo() 按钮存在，页面已停止滑动，即将隐藏按钮...");
            }
            //console.log("现在导航按钮显示次数比隐藏次数多了" + click_dont_move_and_click + "次");
        }, 1000)
    } else {
        ////console.log("// hidden_adblock4limbo() 按钮存在，但已隐藏...");
    }
}


document.body.addEventListener('click', () => { // 点击计数器
    if (click_dont_move_and_click < 400) { // 定时400秒
        click_dont_move_and_click = click_dont_move_and_click + 600;
    } else {
        click_dont_move_and_click = click_dont_move_and_click + 120;
    }
})


setInterval(() => {
    hidden_adblock4limbo(); // 长期不动隐藏左下角按钮
}, 3000)

let crisp_auto_hiddenX = setInterval(() => {
    crisp_auto_hidden(); // 默认隐藏 crisp 聊天窗口
}, 5000)



// 长时间不动则隐藏按钮
function x4Home_button(x) { // 显示导航按钮
    const x4Home = document.getElementById('x4Home'); const new_div = document.getElementById('x4Div');
    if (x == 1 && !(document.getElementById('x4Home') === null)) {
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
        if (e.offsetX >= 0.85 * window.innerWidth) {
            x4Home_button('1');
        }
    }
});
//}



// 为按钮添加监听事件 防止被破坏
function _onclick_button() {
    if (document.querySelector('button#x4Home')) {
        document.querySelector('button#x4Home').addEventListener("click", function () {
            body_build('true'); // 添加监听事件
        })
    }
    setTimeout(() => {
        if (document.querySelector("button#xX")) {
            document.querySelector('button#xX').addEventListener("click", function () {
                body_build('false'); // 添加监听事件
            })
        }

        if (document.querySelector('button#webChat')) {
            document.querySelector('button#webChat').addEventListener("click", function () {
                crisp_active('1'); // 添加监听事件
            })
        }

        if (document.querySelector('button#hidedaohang')) {
            document.querySelector('button#hidedaohang').addEventListener("click", function () {
                hide_button_switch('1'); // 添加监听事件
            })
        }

        if (document.querySelector('a#lsj')) {
            document.querySelector('a#lsj').addEventListener("click", function () {
                open_googlesearch_iframe(); // 添加监听事件
            })
        }

        if (document.getElementById('nsfwmode_switch')) {
            document.getElementById('nsfwmode_switch').addEventListener('click', function () {
                nsfwmode(); // 开始或关闭成人模式
            })
        }

        if (document.getElementById('lock_screen')) {
            document.getElementById('lock_screen').addEventListener('click', function () {
                lock_screen_switch(); // 开始或关闭锁屏
            })
        }

    }, 1000)
}


// 监听导航页的按钮是否被点击
/*
function if_a_click_then_close_daohang() {
    if (document.querySelector('div.echo')) {
        document.querySelector('div.echo').querySelectorAll('a').forEach((x) => {
            x.addEventListener('click', () => {
                body_build('false');
            })
        })
    }
}
*/


var nsfw_regex = new RegExp(/\b(thisav|njav|missav|javlib|attackers|18comic|javday|hamnime|takara|tameikegoro|deeps|moodyz|s1s1s1|nagae|ideapocket|dasdas|oppai|kawaii|satsu|mgstage|manji-group|rocket|muku|dmm|beauty|gloryquest|supjav|jable|xvideos|pornhub|porn|wnacg|av)\b/i);
var csp_regex = new RegExp(/\b(twitter|xvideos)\b/i);
var echo_ell_length = 21; // 总共导航类目数量
var echo_ell_overlay_length = 1; // 带有滚动条的的导航类目数量

// 判断是否需要在当前页面插入导航按钮
let str_ua = navigator.userAgent.toLowerCase();
let regexp = /(.*)(iphone\sos\s)(\d{2})(.*)/;
let ios_version = str_ua.replace(regexp, '$3');

var csp = ['twitter', 'xvideos'];
var number_x = 0;
if (/\b(google|bing)\b/i.test(window.location.href.toLowerCase())) { // 谷歌和必应均不插入导航按钮
} else if (csp_regex.test(window.location.href.toLowerCase()) && !(/\b(mobile)\b/i.test(navigator.userAgent.toLowerCase()))) { // 如果是带有CSP的网站则带上参数 csp // 2333
    adblock4limbo(x4Home_button_width(), 'csp');
    _onclick_button();
}
else {
    adblock4limbo(x4Home_button_width(), 'nocsp'); // 反之则不带
    _onclick_button();
}

function csp_remove() {
    // 删除CSP模式下不可点击的按钮
    var csp_regex = new RegExp(/\b(twitter|xvideos)\b/i);
    if (csp_regex.test(window.location.href.toLowerCase())) {
        if (document.querySelector("button#x4Home") !== null && document.querySelector("script[src*='Adblock4limbo.function.js']") !== null) {
            // 如果引用了 Adblock4limbo.function.js 则什么也不做
        } else {
            let button = ['#webChat', '#TESTX', '#TESTY', '#lsj'];
            button.forEach((x) => {
                if (document.querySelector(x)) { document.querySelector(x).remove() }
            });
            let li = document.querySelectorAll('li.li_global');
            for (x = 0; x < li.length; x++) {
                if ((li[x].querySelector('a') === null)) {
                    li[x].remove()
                }
            }
        }
    } else {
        if (document.querySelector("button#x4Home") !== null && document.querySelector("script[src*='Adblock4limbo.function.js']") !== null) {
            // 如果引用了 Adblock4limbo.function.js 则什么也不做
        } else {
            let button = ['#webChat', '#TESTX', '#TESTY', '#lsj'];
            button.forEach((x) => {
                if (document.querySelector(x)) { document.querySelector(x).remove() }
            });
            let li = document.querySelectorAll('li.li_global');
            for (x = 0; x < li.length; x++) {
                if ((li[x].querySelector('a') === null)) {
                    li[x].remove()
                }
            }
        }
    }
}

/*
如不想显示 chat 聊天按钮
可使用双斜杠 // 注释上述函数调用代码；
举例如下：

// adblock4limbo();
// hidden_adblock4limbo();

*/

/* Chat and navigation4limbo End */

// 初始化导航内容
function navigation4limbo_body_pre() {
    let navigation4limbo = document.createElement('div')
    navigation4limbo.id = 'navigation4limbo';
    navigation4limbo.setAttribute("class", "navigation4limbo_css");
    let body = document.body;
    document.querySelector('html').insertBefore(navigation4limbo, body);

    let ele_innerHTML = '\
        <div class="echo">\
        \
        <div class="closeX_W">\
        <div class="ellCloseX"><button style="border-radius: 50%;opacity: 0.5;" id="xX" ></button></div>\
        </div>\
        \
        \
        <div class="div_global feedback">\
        <div class="title_global" >反馈/建议/功能设置//</div>\
        <ul class="ul_global">\
        <li class="li_global"><button style="border-radius:4px; background:#688e4e !important; box-shadow:inset 0px 0px 15px 3px #16191f00;" class="a_global red"  id="webChat">在线联系</button></li>\
        <li class="li_global"><button style="border-radius:4px; background:#171212 !important; box-shadow:inset 0px 0px 15px 3px #16191f00;" class="a_global red"  id="hidedaohang">隐藏导航</button></li>\
        <li class="li_global"><button style="border-radius:4px; background:#5165e4 !important; box-shadow:inset 0px 0px 15px 3px #16191f00;" class="a_global red"  id="nsfwmode_switch">成人保护模式(ON)</button></li>\
        <li class="li_global"><button style="border-radius:4px; background:#5165e4 !important; box-shadow:inset 0px 0px 15px 3px #16191f00;" class="a_global red"  id="lock_screen">锁屏! 🔐</button></li>\
        <li class="li_global"><a href="https://t.me/Adblock4limbo/21" target="_blank" class="a_global red" id="FAQ">常见FAQ</a></li>\
        <li class="li_global"><a class="a_global" id="issue" href="https://github.com/limbopro/Adblock4limbo/issues?q=is%3Aissue+is%3Aclosed" \
        target="_blank">提交issue</a></li>\
        <li class="li_global"><a class="a_global" id="issue" href="https://github.com/limbopro/Adblock4limbo/blob/main/Adguard/Adblock4limbo.function.js" \
        target="_blank">查看源码</a></li>\
        <li class="li_global"><a class="a_global" id="admin" href="https://t.me/limboprobot" \
        target="_blank">电报联系</a></li>\
        <li class="li_global"><a class="a_global" id="tgGroup" href="https://t.me/Adblock4limbo/21" \
        target="_blank">电报群组</a></li>\
        <div class="fbt">新网站收录、当前网页广告问题反馈，其他建议或意见，请通过<span style="color:black;font-weight:bolder;">以上方式</span>告知我们（告知前可先看一下<a class="a_global title_" href="https://t.me/Adblock4limbo/21"> 常见FAQ </a>）...P.S. 该 Feature 持续增加/完善中，欢迎大家为之添砖加瓦！</div>\
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
        <li class="li_global"><a class="a_global special" id="limboprossr" href="https://t.me/limboprossr" \
        target="_blank">博客频道</a></li>\
        <li class="li_global"><a class="a_global special" id="SecretGarden" href="https://t.me/+dQ-tZYqhSDEwNTk1" \
        target="_blank">春潮频道</a></li>\
        <li class="li_global"><a class="a_global better" id="limboprossr" href="https://twitter.com/limboprossr" \
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
        <li class="li_global"><a style="background:#5a4771;box-shadow:inset 0px 0px 15px 3px #16191f00;" class="a_global" id="Adblock4limbo" href="https://limbopro.com/archives/12904.html" \
        target="_blank">广告拦截大全</a></li>\
        <li class="li_global"><a class="a_global" id="software_skills" href="https://limbopro.com/category/software-skills/" \
        target="_blank">软件百科</a></li>\
        <li class="li_global"><a style="background:#5a4771;box-shadow:inset 0px 0px 15px 3px #16191f00;" class="a_global" id="index" href="https://limbopro.com/" \
        target="_blank">毒奶博客</a></li>\
        <li class="li_global"><a class="a_global red " style="border-radius:4px; background:#c53f3f; box-shadow:inset 0px 0px 15px 3px #16191f00;"  id="lsj">毒奶搜索</a></li>\
        </ul>\
        </div>\
        \
        \
        <div class="div_global speedtest">\
        <div class="title_global">测速工具//</div>\
        <ul class="ul_global">\
        <li class="li_global"><a class="a_global better" id="CloudflareSpeedtest" href="https://speed.cloudflare.com/"\
        target="_blank">Cloudflare</a></li>\
        <li class="li_global"><a class="a_global special" id="StairSpeedTest" href="https://limbopro.com/archives/ssrspeed.html"\
        target="_blank">StairSpeedTest(机场测速)</a></li>\
        <li class="li_global"><a class="a_global" id="Speedtest" href="https://www.speedtest.net/zh-Hans"\
        target="_blank">Speedtest</a></li>\
        \
        </ul>\
        </div>\
        \
        \
        <div class="div_global ipcheck">\
        <div class="title_global">网络连通及被墙检测//</div>\
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
        <li class="li_global"><a class="a_global better" id="regex" href="https://limbopro.com/archives/Regular_Expressions.html" \
        target="_blank">正则表达式</a></li>\
        <li class="li_global"><a class="a_global special" id="Linux-Shell" href="https://t.me/limboprossr/3197" \
        target="__blank">快乐的命令行</a></li>\
        \
        </ul>\
        </div>\
        \
        \
        <div class="div_global onlinemovies">\
        <div class="title_global">在线影视//</div>\
        <ul class="ul_global">\
        <li class="li_global"><a class="a_global better" id="common" href="https://ddys.pro/"\
        target="_blank">低端影视</a></li>\
        <li class="li_global"><a class="a_global special" id="common" href="https://xiaobaotv.net/"\
        target="_blank">小宝影视</a></li>\
        </ul>\
        </div>\
        \
        <div class="_footer" style="color:black!important;">当前网页已在<a href="https://github.com/limbopro/Adblock4limbo/blob/main/Adblock4limbo.weblist" target="_blank" >去广告计划</a>范围，如在此页面发现广告请及时反馈。<div>\
        \
        </div>\
        \
'
    let navigation4limbo_parents = document.getElementById('navigation4limbo');
    navigation4limbo_parents.innerHTML = ele_innerHTML;
}



var file = {
    javlibrary: "td.advsearch {display:none}#rightcolumn{right:90px;width:auto;} .videothumblist .videos {min-width:auto}  table.about td {width:auto!important} table.about td.desc {width:auto !important;min-width:0px!important} .titlebox {width:auto !important}.videothumblist.videos {width:auto !important} #leftmenu{max-width:90px;} div.videothumblist{overflow:scroll !important; overflow-x:hidden !important}iframe{display:none} table.about td {min-width:0px;} body.main{min-width:0px !important}\
    \
    ",
    global_css: '\
    img.nsfw {position:fixed;width:100%;} img.lockscreen {position:fixed;width:100%;} #nsfw_echo span.nsfw {position:fixed;top:60%;} #nsfw_echo { color:white;width:100%;height:100%} #nsfw { opacity:0.7; filter:blur(0.5px);filter: grayscale(1);z-index:114154;background:black;position:fixed;width:100%;height:100%;} .new_div_search{padding:20px;position:fixed;bottom:0%;} .close_search_button:hover {background-color:red;opacity:1 !important;} .close_search_button_csp{font-size:xxx-large;transition-property:opacity;transition-duration:666ms;right:2%;bottom:13%;position:fixed;width:108px;height:108px;background-size:100%;background-repeat:no-repeat;border-radius:50%;opacity:0.5;} .close_search_button_csp:hover {background-color:red;opacity:1 !important;}  .close_search_button {transition-property:opacity;transition-duration:666ms;right:2%;bottom:13%;position:fixed;width:108px;height:108px;background-image:url(https://limbopro.com/Adblock4limbo_google_close.png);background-size:100%;background-repeat:no-repeat;border-radius:50%;opacity:0.5;} .div_global.feedback{background:transparent;} .a_global.title_{background:blue !important;font-size:8px!important} a.a_global.better{background:#2e64bb !important;box-shadow:inset 0px 0px 15px 3px #10336d;} .boom {opacity:0.5;} a.a_global.red{background:#df0f0f !important;transition-property:opacity;transition-duration:2s;box-shadow:inset 0px 0px 15px 3px #E55B5B;} a.a_global.special{background:#3764ac !important;transition-property:opacity;transition-duration:2s;},a .a_global#CloudflareSpeedtest{} a.a_global#jichangtuijian{background:#3d3843; opacity:0.8;box-shadow:inset 0px 0px 15px 3px #000000}.carousel-inner{z-index:0!important} a.a_global#common {background:#3764ac}.a_global.xOnline {background:black;color:#f09636!important;box-shadow:inset 0px 0px 15px 3px black}  .cms_opacity {pointer-events:none !important;opacity:0} .cms {pointer-events:auto} div.crisp-client {pointer-events:none; z-index:-114154; opacity:0;} .active { z-index:114154 !important; pointer-events:auto !important; opacity:1 !important; } div.closeX_Z{position:relative;text-align:right;z-index:1} div.closeX_W{position:relative;text-align: right;right:0px;top:0px;z-index:1} .scroll{position:absolute;width:110px;font-size:smaller;font-weight:lighter;padding-top:6px;color:#00000070;}button #x4Home{height:100px;background:red;opacity:1 !important;}.a_global.comics{background:#2a2146;box-shadow:inset 0px 0px 15px 3px #2a2146}.a_global.porn{background:#2a2146;box-shadow:inset 0px 0px 15px 3px #2a2146} div._footer a{color:#2c447e;font-weight:bolder;} div ._footer{position:absolute;text-align:left;margin-bottom:-30px;background:transparent;z-index:-1 !important;bottom:-41px;padding-bottom:20px;font-size:small;font-weight:lighter;} div#navigation4limbo.navigation4limbo_css{overscroll-behavior:none;top:0px;transition-property:opacity;transition-duration:999ms;margin:0px !important} div#navigation4limbo.navigation4limbo_css_0{transition-duration:0ms !important;margin:0px !important} div > button#xX{background-image:url("https://limbopro.com/Adblock4limbo_close.svg");transition-property:opacity;transition-duration:666ms;background-color:#542c3e;color:#ffffff;opacity:0.5 !important;border:0px;margin:0px;width:108px;height:108px;border-radius:0%;}div > button#xX:hover{background-color:red;opacity:1 !important;}div > button:active{background-color:red;}div .ellCloseX{z-index:-1;margin:0px;position:initial;};span#nspan{margin:0px;font-weight:bolder !important;color:black !important;}div > div .fbt{color:#6064a2 !important;margin:0px;font-size:small;width:112px;padding-top:5px;padding-left:4px;padding-right:4px;}.echo{width:auto;font-size:15px;text-align:inherit;position:absolute;}ul > li > button{overflow:visible;width:106px !important;line-height:15px !important;} ul.ul_global > li > a{word-wrap:break-word;font-weight:lighter;overflow:visible;width:106px !important;font-size:15px !important;line-height:15px !important;}.li_global{min-height:31px;font-size:medium;list-style:none;width:112px;}.ul_global{padding:0px;font-size:15px !important;height:248px;margin:0px;overflow:auto;width:auto;} .title_global{padding-left:2px;display:table-cell;vertical-align:bottom;width:106px;height:50px;text-align:center;font-size:initial;margin-bottom:5px;font-weight:lighter;color:black !important;padding-bottom:4px;} .div_global{text-align:center;float:left;padding-top:31px;margin-bottom:29px;padding-left:0px;}.ellClose{text-align:center;float:left;padding-top:15px;margin-bottom:15px;padding-left:0px;}#navigation4limbo{overflow-y:overlay;overflow-x:hidden;background-image:url("https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/Adblock4limbo_bgp.jpg");background-size:100% !important;background-repeat:round;margin:auto;width:200px;height:200px;z-index:-114154;opacity:0;background-color:transparent;position:fixed;top:50%;}.a_global{text-align:center;white-space:break-spaces;color:white !important;box-shadow:inset 0px 0px 15px 3px #23395e;background:linear-gradient(to bottom,#2e466e 5%,#415989 100% );background-color:#2e466e !important;border-radius:0px;margin:1px;border:1px solid #1f2f47 !important;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:100% !important;padding-bottom:6px;padding-top:6px;text-decoration:none;text-shadow:0px 1px 0px #263666;}.a_global:hover{background:linear-gradient(to bottom,#415989 5%,#2e466e 100%);background-color:#415989;}.a_global:active{position:relative;top:1px;}\
    '
}

// ::-webkit-scrollbar{width:8px;}::-webkit-scrollbar:horizontal{height:8px}::-webkit-scrollbar-track{display:none}::-webkit-scrollbar-thumb{border-radius:2px;background-color:white;} img.nsfw {position:fixed;width:100%;top:0%;} #nsfw_echo span.nsfw {position:fixed;top:60%;} #nsfw_echo {text-align:center;color:white;width:100%;height:100%} #nsfw { opacity:0.4; filter:blur(0.5px);filter: grayscale(1);z-index:114154;background:black;position:fixed;width:100%;height:100%;} .new_div_search{padding:20px;position:fixed;bottom:0%;} .close_search_button:hover {background-color:red;opacity:1 !important;} .close_search_button_csp{font-size:xxx-large;transition-property:opacity;transition-duration:666ms;right:2%;bottom:13%;position:fixed;width:108px;height:108px;background-size:100%;background-repeat:no-repeat;border-radius:50%;opacity:0.5;} .close_search_button_csp:hover {background-color:red;opacity:1 !important;}  .close_search_button {transition-property:opacity;transition-duration:666ms;right:2%;bottom:13%;position:fixed;width:108px;height:108px;background-image:url(https://limbopro.com/Adblock4limbo_google_close.png);background-size:100%;background-repeat:no-repeat;border-radius:50%;opacity:0.5;} .div_global.feedback{background:transparent;} .a_global.title_{background:blue !important;font-size:8px!important} a.a_global.better{background:#2e64bb !important;box-shadow:inset 0px 0px 15px 3px #10336d;} .boom {opacity:0.5;} a.a_global.red{background:#df0f0f !important;transition-property:opacity;transition-duration:2s;box-shadow:inset 0px 0px 15px 3px #E55B5B;} a.a_global.special{background:#3764ac !important;transition-property:opacity;transition-duration:2s;},a .a_global#CloudflareSpeedtest{} a.a_global#jichangtuijian{background:#3d3843; opacity:0.8;box-shadow:inset 0px 0px 15px 3px #000000}.carousel-inner{z-index:0!important} a.a_global#common {background:#3764ac}.a_global.xOnline {background:black;color:#f09636!important;box-shadow:inset 0px 0px 15px 3px black}  .cms_opacity {pointer-events:none !important;opacity:0} .cms {pointer-events:auto} div.crisp-client {pointer-events:none; z-index:-114154; opacity:0;} .active { z-index:114154 !important; pointer-events:auto !important; opacity:1 !important; } div.closeX_Z{position:relative;text-align:right;z-index:1} div.closeX_W{position:relative;text-align: right;right:0px;top:0px;z-index:1} .scroll{position:absolute;width:110px;font-size:smaller;font-weight:lighter;padding-top:6px;color:#00000070;}button #x4Home{height:100px;background:red;opacity:1 !important;}.a_global.comics{background:#2a2146;box-shadow:inset 0px 0px 15px 3px #2a2146}.a_global.porn{background:#2a2146;box-shadow:inset 0px 0px 15px 3px #2a2146} div._footer a{color:#2c447e;font-weight:bolder;} div ._footer{position:absolute;text-align:left;margin-bottom:-30px;background:transparent;z-index:-1 !important;bottom:-41px;padding-bottom:20px;font-size:small;font-weight:lighter;} div#navigation4limbo.navigation4limbo_css{overscroll-behavior:none;top:0px;transition-property:opacity;transition-duration:999ms;margin:0px !important} div#navigation4limbo.navigation4limbo_css_0{transition-duration:0ms !important;margin:0px !important} div > button#xX{background-image:url("https://limbopro.com/Adblock4limbo_close.svg");transition-property:opacity;transition-duration:666ms;background-color:#542c3e;color:#ffffff;opacity:0.5 !important;border:0px;margin:0px;width:108px;height:108px;border-radius:0%;}div > button#xX:hover{background-color:red;opacity:1 !important;}div > button:active{background-color:red;}div .ellCloseX{z-index:-1;margin:0px;position:initial;};span#nspan{margin:0px;font-weight:bolder !important;color:black !important;}div > div .fbt{color:#6064a2 !important;margin:0px;font-size:small;width:112px;padding-top:5px;padding-left:4px;padding-right:4px;}.echo{width:auto;font-size:15px;text-align:inherit;position:absolute;}ul > li > button{overflow:visible;width:106px !important;line-height:15px !important;} ul.ul_global > li > a{word-wrap:break-word;font-weight:lighter;overflow:visible;width:106px !important;font-size:15px !important;line-height:15px !important;}.li_global{min-height:31px;font-size:medium;list-style:none;width:112px;}.ul_global{padding:0px;font-size:15px !important;height:248px;margin:0px;overflow:auto;width:auto;} .title_global{padding-left:2px;display:table-cell;vertical-align:bottom;width:106px;height:50px;text-align:center;font-size:initial;margin-bottom:5px;font-weight:lighter;color:black !important;padding-bottom:4px;} .div_global{text-align:center;float:left;padding-top:31px;margin-bottom:29px;padding-left:0px;}.ellClose{text-align:center;float:left;padding-top:15px;margin-bottom:15px;padding-left:0px;}#navigation4limbo{overflow-y:overlay;overflow-x:hidden;background-image:url("https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/Adblock4limbo_bgp.jpg");background-size:100% !important;background-repeat:round;margin:auto;width:200px;height:200px;z-index:-114154;opacity:0;background-color:transparent;position:fixed;top:50%;}.a_global{text-align:center;white-space:break-spaces;color:white !important;box-shadow:inset 0px 0px 15px 3px #23395e;background:linear-gradient(to bottom,#2e466e 5%,#415989 100% );background-color:#2e466e !important;border-radius:0px;margin:1px;border:1px solid #1f2f47 !important;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:100% !important;padding-bottom:6px;padding-top:6px;text-decoration:none;text-shadow:0px 1px 0px #263666;}.a_global:hover{background:linear-gradient(to bottom,#415989 5%,#2e466e 100%);background-color:#415989;}.a_global:active{position:relative;top:1px;}\
// 优先追加style元素 以内联样式的方式
function css_add(css, here_write_css_name_you_want) {
    // css style 创建
    let body = document.body;
    var css_name_x = document.createElement('style');
    css_name_x.id = here_write_css_name_you_want;
    css_name_x.innerText = css;
    document.querySelector('html').insertBefore(css_name_x, body);
}

// 优先追加style元素 以 link 的方式
function css_url_add(css_url, here_write_css_name_you_want) {
    // css file 创建
    let head = document.querySelectorAll('head')[0];
    var css_name_y = document.createElement('link');
    css_name_y.id = here_write_css_name_you_want;
    css_name_y.href = css_url;
    css_name_y.type = 'text/css';
    css_name_y.rel = 'stylesheet';
    head.appendChild(css_name_y);
}

css_add(file.global_css, 'navigation4limbo_style'); // 在body后面插入 css
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


        var sum = 0;
        let li = div_global[i].querySelectorAll('li')
        //let li = document.querySelectorAll('.div_global')[20].querySelectorAll('li')
        for (x = 0; x < li.length; x++) {
            sum += li[x].clientHeight;
        }

        //console.log(sum)

        if (div_global[i].querySelectorAll('li').length * 31 + fbt > 8 * 31 || sum + fbt > 8 * 31) {
            // if (sum_scroll() + fbt > 8 * 31) {
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
    body_css_real: ["div.navigation4limbo_css", 'common'],
    body_css: ["div#navigation4limbo.navigation4limbo_css", 'common'],
    footer: ["div._footer", 'common'],
}

function all(opacity, zIndex, switchX, pointevents = '') {
    //console.log("// body_build() 输入为 true，开始创建导航..." + " 透明度为 " + opacity + " 层级数目为 " + zIndex)
    if (!document.querySelector('div#navigation4limbo[style]')) { // 如果导航不存在则生成
        navigation4limbo_body_pre(); // 生成导航
        let parentElement = document.getElementById('navigation4limbo');
        parentElement.style.zIndex = zIndex;
        parentElement.style.opacity = opacity;
        parentElement.style.pointerEvents = pointevents;
        body_align("navigation4limbo");// 初始化导航大小
        body_bgp_switch(); // 设置背景图片
        echo_align(); // 导航居中
        //new_align();
        echo_check_switch(switchX); // 监控导航大小变化
        //boom();
    } else {
        //boom();
        let parentElement = document.getElementById('navigation4limbo');
        parentElement.style.zIndex = zIndex + 1;
        parentElement.style.opacity = opacity;
        parentElement.style.pointerEvents = pointevents;
        body_align("navigation4limbo");// 初始化导航大小
        body_bgp_switch(); // 设置背景图片
        echo_align(); // 导航居中
        //new_align();
        echo_check_switch(switchX); // 监控导航大小变化
    }

    if (opacity == 0) {
        crisp_window_remove('0');
    }
}

// 按钮闪烁提示
function opacity_switch() {
    if (document.querySelector('#windowClose')) {
        document.querySelector('#windowClose').style.opacity = '0.5'
        setTimeout(() => {
            document.querySelector('#windowClose').style.opacity = '1.5'
        }, 1500)
    }
}

function boom() {
    var true_ = 10;
    let xman = setInterval(() => {
        true_--;
        opacity_switch();
        console.log(true_)
        if (true_ < 1) {
            clearInterval(xman)
        }
    }, 3000)
} //boom();


/* Start 判断是否显示导航 可不删 */
function body_build(x) { // 判断导航显示与否
    if (x == "true") {
        ////console.log("// body_build() 输入为 true，开始创建导航...")
        all(1, 114154, 1, 'auto')
    } else if (x == "false") {
        all(0, -114154, 1, 'none')
        setTimeout(() => {
            x4Home_button("1"); // 显示导航按钮
        }, 1000)
        //console.log("// body_build() 导航已隐藏，右下角按钮浮现...");
    }
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
    if (!(csp_regex.test(window.location.href.toLowerCase()))) {
        let url_w = "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/Adblock4limbo_bgp_w.jpg";
        let url_h = "https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/Adblock4limbo_bgp.jpg";
        if (window.innerWidth * 0.65 >= window.innerHeight) {
            document.querySelector("div#navigation4limbo").style.backgroundImage = `url(${url_w})`;
        } else {
            document.querySelector("div#navigation4limbo").style.backgroundImage = `url(${url_h})`;
        }
    } else {
        document.querySelector("div#navigation4limbo").style.backgroundColor = '#dfdfdf';
        document.querySelector("div > button#xX").textContent = 'X';
        document.querySelector("div > button#xX").style = 'font-size:-webkit-xxx-large;border-radius:50%;';
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
        body_align("navigation4limbo");
        document.querySelector(selector.body_css_real).style.paddingLeft = (window.innerWidth - (112 * echo_ell_length + 8 * echo_ell_overlay_length)) / 2 + "px";
        document.querySelector('div._footer').style.width = Math.floor((window.innerWidth / 112)) * 112 + "px"; // footer 宽度
        document.querySelector('div.ellCloseX').style.zIndex = "-1"; // 确保关闭按钮可见可点击
        if (document.querySelector('div.closeX_Z')) {
            document.querySelector('div.closeX_Z').className = "closeX_W";
        }
        //document.querySelector('div.ellCloseX').style.position = "initial"; // 确保关闭按钮可见可点击
    } else {
        new_align();
        document.querySelector('div._footer').style.width = Math.floor((window.innerWidth / 112)) * 112 + "px"; // footer 宽度
        /*
        console.log("// echo_align() 正在检查是否属于小尺寸...");
        document.querySelector(selector.footer).style.width = Math.floor((window.innerWidth / 112)) * 112 + "px"; // footer 宽度
        body_align("navigation4limbo");
        document.querySelector(selector.body_css_real).style.paddingLeft = ((window.innerWidth % 112 - 8 * echo_ell_overlay_length) / 2) + "px"; // 当 ellCloseX position 为 initial 时
        if (document.querySelector('div.closeX_W')) {
            document.querySelector('div.closeX_W').className = ("closeX_Z");
        }*/
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

var parentNodeX = [['Cloudflare', 'https://speed.cloudflare.com/', '_blank', '0', 'better'],
['SpeedTest', 'https://www.speedtest.net/', '_blank', '0', 'common'],
['溜池ゴロー', 'https://tameikegoro.jp/', '_blank', 'porn', 'better'],
['s1s1s1 S1/エスワンー', 'https://s1s1s1.com/', '_blank', 'porn', 'better'],
['VENUSーＳ級熟女メーカ|Ｓ級熟女メーカー', 'https://venus-av.com/', '_blank', 'porn', 'special'],
['Glory Questー「禁断介護」や逆ショタ元祖', 'https://www.gloryquest.tv/', '_blank', 'porn', 'special'],
['Madonna（マドンナ）', 'https://www.madonna-av.com/top/', '_blank', 'porn', 'common'],
['SOD（ソフトオンデマンド）', 'https://www.sod.co.jp/', '_blank', 'poxrn', 'common'],
['ATTACKERS（アタッカーズ）', 'https://www.attackers.net/top/', '_blank', 'porn', 'common'],
['PRESTIGE(プレステージ)', 'https://www.prestige-av.com/', '_blank', 'porn', 'common'],
['PREMIUM（プレミアム', 'https://www.premium-beauty.com/top/', '_blank', 'porn', 'special'],
['MOODYZー', 'https://www.moodyz.com/top/', '_blank', 'porn', 'common'],
['IDEAPOCKET (アイデアポケット）', 'https://www.ideapocket.com/top/', '_blank', 'porn', 'porn', 'common'],
['OPPAI（おっぱい）', 'https://www.oppai-av.com/', '_blank', 'porn', 'common'],
['【kawaii*】公式サイト', 'https://www.kawaiikawaii.jp/top/', '_blank', 'porn', 'common'],
['肉感あふれる女優', 'https://www.fitch-av.com/top/', '_blank', 'porn', 'common'],
['タカラ映像 TAKARA', 'https://www.takara-tv.jp/', '_blank', 'porn', 'common'],
['ながえSTYLE(NTR)', 'https://www.nagae-style.com/', '_blank', 'porn', 'common'],
['トップページ - AVメーカー【ダスッ！】公式サイト', 'https://www.dasdas.jp/top/', '_blank', 'porn', 'common'],
['レズ・素人ナンパを中心', 'https://deeps.net/', '_blank', 'porn', 'common'],
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
["Instagram", "https://www.instagram.com/", "_blank", "Social", 'special'],
["Tiktok", "https://www.tiktok.com/", "_blank", "Social", 'common'],
["Youtube", "https://m.youtube.com/", "_blank", "Social", 'special'],
["Netflix", "https://www.netflix.com/browse", "_blank", "Media", 'special'],
["HBO", "https://www.hbo.com/", "_blank", "Media", 'common'],
["Disney+", "https://www.disneyplus.com/en-hk", "_blank", "Media", 'common'],
["Amazon Prime Video", "https://www.primevideo.com/", "_blank", "Media", 'common'],
["Pexels", "https://www.pexels.com/", "_blank", "IMages", 'common'],
["Pixbay", "https://pixabay.com/", "_blank", "IMages", 'common'],
['Github', 'https://github.com/', '_blank', 'Developer', 'special'],
['v2ex', 'https://www.v2ex.com/', '_blank', 'Developer'],
['思否', 'https://segmentfault.com/', '_blank', 'Developer', 'special'],
['掘金', 'https://juejin.cn/', '_blank', 'Developer', 'special'],
['MDN', 'https://developer.mozilla.org/zh-CN/', '_blank', 'Developer', 'common'],
['w3schools', 'https://w3schools.cn/', '_blank', 'Developer', 'common'],
['Stack Overflow', 'https://stackoverflow.com/', '_blank', 'Developer', 'common'],
['Typecho', 'https://typecho.org/', '_blank', 'front-build', 'special'],
['Vercel', 'https://vercel.com/new', '_blank', 'front-build', 'special'],
['Cloudflare Pages', 'https://pages.cloudflare.com/', '_blank', 'front-build', 'special'],
['Gitpages', 'https://pages.github.com/', '_blank', 'front-build', 'special'],
['Fly.io', 'https://fly.io/', '_blank', 'front-build', 'common'],
['NameSilo', 'https://www.namesilo.com/', '_blank', 'domain-buy', 'better'],
['Cloudflare Domain', 'https://www.cloudflare.com/products/registrar/', '_blank', 'domain-buy', 'better'],
['NameCheap', 'https://www.namecheap.com/', '_blank', 'domain-buy', 'common'],
['freenom', 'https://www.freenom.com/zh/freeandpaiddomains.html', '_blank', 'domain-buy', 'common'],
['Jable', 'https://jable.tv/', '_blank', 'xOnline', 'special'],
['Missav', 'https://missav.com/cn/', '_blank', 'xOnline', 'special'],
['Supjav', 'https://supjav.com/zh/', '_blank', 'xOnline', 'special'],
['JavLibrary', 'https://www.javlibrary.com/cn/', '_blank', 'xOnline', 'better'],
['Pornhub', 'https://cn.pornhub.com/', '_blank', 'xOnline', 'common'],
['Xvideos', 'https://www.xvideos.com/', '_blank', 'xOnline', 'common'],
['Javday', 'https://javday.tv/', '_blank', 'xOnline', 'common'],
['Njav', 'https://njav.tv/zh/', '_blank', 'xOnline', 'common'],
['Thisav', 'https://thisav.com/', '_blank', 'xOnline', 'common'],
['hanime1', 'https://hanime1.me/comics', '_blank', 'xOnline', 'common'],
['认知偏差手册', 'https://s75w5y7vut.feishu.cn/docs/doccn3BatnScBJe7wD7K3S5poFf#RirzLG', '_blank', 'knowledge', 'common'],
['IP.SB', 'https://ip.sb/', '_blank', 'ipcheck', 'common'],
['BGP Toolkit ', 'https://bgp.he.net/', '_blank', 'ipcheck', 'common'],
['Baidu', 'https://www.baidu.com/', '_blank', 'ipcheck', 'common'],
['Google', 'https://www.google.com/', '_blank', 'search', 'special'],
['Bing', 'https://www.bing.com/', '_blank', 'search', 'common'],
['DuckDuckGo', 'https://duckduckgo.com/', '_blank', 'search', 'common'],
['Yahoo!）', 'https://hk.yahoo.com/?p=us', '_blank', 'search', 'common'],
['搜狗搜索', 'https://www.sogou.com/', '_blank', 'search', 'common'],
['Baidu', 'https://www.baidu.com/', '_blank', 'search', 'common'],
['ChatGPT', 'https://chat.openai.com/auth/login', '_blank', 'AICHAT', 'better'],
['Google Bard', 'https://bard.google.com/?hl=en', '_blank', 'AICHAT', 'special'],
['Claude.ai', 'https://claude.ai/', '_blank', 'AICHAT', 'special'],
['Google AI', 'https://labs.google.com/search/experiments', '_blank', 'AICHAT', 'common'],
['Bing AI', 'https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx', '_blank', 'AICHAT', 'better'],
["在线正则表达式测试", 'https://tool.oschina.net/regex/', '_blanl', 'Tools', 'special'],
['在线文件格式转换器', 'https://convertio.co/zh/', '_blank', 'Tools', 'common'],
['PDF在线转换', 'https://www.ilovepdf.com/zh-cn', '_blank', 'Tools', 'common'],
['iconfont', 'https://www.iconfont.cn/', '_blank', 'Tools', 'common'],
['禁漫天堂', 'https://18comic.vip/', '_blank', 'comic18', 'special'],
['绅士漫画', 'https://www.wnacg.com/', '_blank', 'comic18', 'special'],
['肉漫', 'https://www.rouman5.com/', '_blank', 'comic18', 'special'],
['hitomi', 'https://hitomi.la/index-chinese.html', '_blank', 'comic18', 'special'],
['博客优化', 'https://limbopro.com/category/builder/', '_blank', 'seoandmore', 'special'],
['博客防御', 'https://limbopro.com/tag/Cloudflare/', '_blank', 'seoandmore', 'common'],
['苦瓜书盘', 'https://kgbook.com/', '_blank', 'bookreadanddownload', 'common'],
['Library Genesis', 'https://www.libgen.is/', '_blank', 'bookreadanddownload', 'special'],
['JavaScript高级程序设计', 'https://t.me/limboprossr/2812', '_blank', 'front-end', 'common'],
['CSS教程', 'https://www.runoob.com/css/css-tutorial.html', '_blank', 'front-end', 'common'],
['w3school 在线教程', 'https://www.w3school.com.cn/index.html', '_blank', 'front-end', 'common'],
['M3U8下载?(Porn/Jable..)', 'https://limbopro.com/archives/M3U8-Downloader.html', '_blank', 'dload', 'common'],
['Twitter 视频下载(PC网页版)', 'https://twittervid.com/', '_blank', 'dload', 'common'],
['Instagram 视频下载(电报🤖)', 'https://t.me/instasavegrambot', '_blank', 'dload', 'special'],
['YouTube 视频下载(电报🤖)', 'https://t.me/yt_dbot', '_blank', 'dload', 'special'],
['Instagram 视频下载(iOS捷径)', 'https://limbopro.com/archives/1053.html', '_blank', 'dload', 'special'],
['Instagram 视频下载(PC网页版)', 'https://sssinstagram.com/', '_blank', 'dload'],
['Youtube 视频下载(PC网页版)', 'https://ssyoutube.com/', '_blank', 'dload'],
['Pornhub 视频下载(PC网页版)', 'https://www.saveporn.net/', '_blank', 'dload'],
['More...', 'https://limbopro.com/category/downloader/', '_blank', 'dload'],
['Stable Diffusion入门', 'https://limbopro.com/archives/install_and_quickstart_Stable_Diffusion.html', '_blank', 'aigc', 'special'],
['Civitai', 'https://civitai.com/', '_blank', 'aigc', 'better'],
['Midjourney', 'https://midjourney.com/', '_blank', 'aigc', 'better'],
['Notion AI', 'https://www.notion.so/product/ai', '_blank', 'aigc', 'better'],
['网易新闻', 'https://news.163.com/', '_blank', 'currentnews', 'better'],
['谷歌新闻', 'https://news.google.com/home?hl=zh-CN&gl=CN&ceid=CN:zh-Hans', '_blank', 'currentnews', 'common'],
['纽约时报', 'https://cn.nytimes.com/zh-hant/', '_blank', 'currentnews', 'common'],
['华尔街日报', 'https://cn.wsj.com/', '_blank', 'currentnews', 'common'],
['BBC News', 'https://www.bbc.com/zhongwen/simp', '_blank', 'currentnews', 'common'],
['顶尖文案TOPYS', 'https://www.topys.cn/', '_blank', 'writer', 'better'],
['广告门', 'https://www.adquan.com/', '_blank', 'writer', 'special'],
['梅花网', 'https://www.meihua.info/', '_blank', 'writer', 'common'],
['数英网', 'https://www.digitaling.com/', '_blank', 'writer', 'special'],
['运营派', 'https://www.yunyingpai.com/', '_blank', 'writer', 'common'],
['少数派', 'https://sspai.com/', '_blank', 'technews', 'common'],
['虎嗅', 'https://huxiu.com/', '_blank', 'technews', 'common'],
['36Kr', 'https://36kr.com/', '_blank', 'technews', 'common'],
['爱范儿', 'https://www.ifanr.com/', '_blank', 'technews', 'common'],
['pingwest', 'https://www.pingwest.com/', '_blank', 'technews', 'common'],
['CN影视', 'https://cnys.tv/', '_blank', 'movies', 'special'],
['剧迷网', 'https://gimy.ai/', '_blank', 'movies', 'better'],
['泥巴影视', 'https://www.nivod8.tv/', '_blank', 'movies', 'common'],
];



/**
 * <li class="li_global"><a class="a_global" id="nbys" href="https://www.nivod8.tv/"\
        target="_blank">泥巴影视</a></li>\
        <li class="li_global"><a class="a_global" id="xbys" href="https://gimy.ai/"\
        target="_blank">剧迷网</a></li>\
        <li class="li_global"><a class="a_global" id="duboku" href="https://www.duboku.tv/"\
        target="_blank">独播库</a></li>\
        <li class="li_global"><a class="a_global" id="ttsp" href="https://www.ttsp.tv/"\
        target="_blank">天天视频</a></li>\
        <li class="li_global"><a class="a_global" id="libvio" href="https://libvio.top/"\
        target="_blank">libvio梨</a></li>\
 */

var click_count = 0;
document.addEventListener("keydown", function (event) {
    if (event.code === "Escape") {
        click_count = ++click_count;
        console.log(click_count + "次ESC点击次数");
        // 执行你想要的操作
        // 监听键盘事件 ESC



        if (!(document.querySelector('div#nsfw') === null) && !(document.querySelector('div#nsfw').style === null) && !(document.querySelector('div#nsfw').getAttribute('style') === null) && (document.querySelector('div#nsfw').getAttribute('style').search('-114') == -1) && document.querySelector('img.lockscreen') == null && click_count == 1) {
            znsh_unlock();
        } else if ((document.querySelector('div[data-chat-status="ongoing"]') && (document.querySelector('div[data-chat-status="ongoing"]').getAttribute('data-visible') == 'true')) || document.querySelector('div[data-chat-status="initial"]') && (document.querySelector('div[data-chat-status="initial"]').getAttribute('data-visible') == 'true') && click_count == 1) {
            crisp_active('1');
        } else if (typeof body_build == 'function' && document.querySelector("#navigation4limbo").style.zIndex > 0 && click_count == 1) {
            body_build('false');
        } else if (typeof close_googlesearch_iframe == 'function' && document.querySelector("#searchbyGoogle") && (document.querySelector("#searchbyGoogle")).style.zIndex > 0 && click_count == 1) {
            close_googlesearch_iframe();
        } else if ((document.querySelector("#x4Home").style.height == "0%") && click_count == 1) {
            setTimeout(() => {
                x4Home_button('1') // 按钮出现
            }, 1000)
        } else if (typeof body_build == 'function' && document.querySelector("#navigation4limbo").style.zIndex < 0 && click_count == 2 && (document.querySelector('div#nsfw') == null || document.querySelector('div#nsfw').style.zIndex < 0)) {
            body_build('true')  // 如果按钮出现，且其他如搜索不存在则可唤出导航页面
        } else if (typeof body_build == 'function' && document.querySelector("#navigation4limbo").style.zIndex > 0 && click_count == 3) {
            lock_screen_switch();
        }
    }

    if (event.code === 'KeyG') {
        if (document.getElementById('navigation4limbo').style.zIndex > 0 && (document.querySelector('.crisp-client.active') === null)) {
            open_googlesearch_iframe(); // 如果当前页面为导航详情页 则可按 G 键快速唤出搜索框
        }
    }

    if (event.code === 'KeyC') {
        if (document.getElementById('navigation4limbo').style.zIndex > 0 && (document.querySelector('.crisp-client.active') === null)) {
            crisp_active('1') // 如果当前页面为导航详情页 则可按 C 键快速唤出聊天框
        }
    }

    if (event.code === 'KeyL') { // 锁屏
        if (document.getElementById('navigation4limbo').style.zIndex > 0 && (document.querySelector('.crisp-client.active') === null)) {
            lock_screen_switch(); // 锁屏
        }
    }

    if (event.code === "Space") { // 空格键
        if (!(document.querySelector('div#navigation4limbo').style.opacity == 0) && (document.querySelector('.crisp-client.active') === null)) {
            open_googlesearch_iframe();  // 如果当前页面为导航详情页 则可按 G 键快速唤出搜索框
        }
        // 处理空格键按下后要执行的代码
        // body_build('true');
    }

    if (event.code === 'Enter' && document.querySelector('input.lockscreen') !== null) {
        screen_unlock(); // 验证密码
    }


    setTimeout(() => {
        click_count = 0;
    }, 500);

});


// 监听 visibility change 事件 用户离开当前页面事件
function visibility_() {
    if (getCookie('nsfwmode') !== 'false') {
        document.addEventListener('visibilitychange', function () {
            var visible = document.visibilityState;
            if (visible !== 'visible') {
                console.log(visible)
                document.body.style.filter = 'blur(50px)'
            } else {
                setTimeout(() => {
                    console.log(visible)

                    document.body.style.filter = 'blur(0px)'

                    if (document.body.getAttribute('style') !== null) {
                        document.body.removeAttribute('style');
                    }
                }, 500)
            }
        })
    } else if (x == 'false') {
        document.removeEventListener('visibilitychange', (() => { }), true) // 移除模糊监听
    }
};


// 移动 echo div._footer 位置
function _footer_move() {
    let target = document.querySelector('.echo')
    let child = document.querySelector('div._footer')
    target.appendChild(child)
}


function new_align() {
    if (document.querySelectorAll('div.div_global').length > 15) {
        var category = Math.floor((window.innerWidth / 112));
        function sum(x) {
            ////console.log("每排共计" + category + "个类目...")
            let sum = 0;
            for (i = 0; i < x; i++) {
                sum += document.querySelectorAll('div.div_global')[i].clientWidth;
            }
            return sum;
        }

        sum(category)

        if (sum(category) > window.innerWidth) {
            var category = Math.floor((window.innerWidth / 112)) - 1;
            sum(category);
            ////console.log("占据" + sum(category) + "px...")
            document.querySelector(selector.body_css_real).style.paddingLeft = (window.innerWidth - sum(category)) / 2 + "px"
            ////console.log("判断失误...")
            ////console.log("本次偏移量为" + (window.innerWidth - sum(category)) / 2 + "px")
        } else {
            ////console.log("判断正常...")
        }
        ////console.log("占据" + sum(category) + "px...")
        document.querySelector(selector.body_css_real).style.paddingLeft = (window.innerWidth - sum(category)) / 2 + "px"
        ////console.log("本次偏移量为" + (window.innerWidth - sum(category)) / 2 + "px")
    }
}


function parentElement_add() {
    all(0, -114154, 1, 'none');
    body_build('false');

    /*
    添加点击监听事件开始 点击空白处执行隐藏导航
    */

    document.querySelector('div.echo').addEventListener('click', function (event) {

        if (document.querySelector("#navigation4limbo") !== null && document.querySelector("#navigation4limbo").style.zIndex > 0) {

            var target = event.target;
            var li_button = document.querySelectorAll('li.li_global');
            var number = 0;

            for (i = 0; i < li_button.length; i++) {
                if (target !== li_button[i] && !li_button[i].contains(target)) {
                    number += 1;
                    console.log("+" + number)
                } else {
                    number -= 1;
                    console.log("-" + number)
                }
            }

            if (number !== 0 && number < li_button.length) {
                console.log('点到了')
            } else {

                if (document.querySelector("#navigation4limbo") !== null && document.querySelector("#navigation4limbo").style.zIndex > 0) {
                    body_build('false');
                }

            }
        }
    });

    /*
   添加点击监听事件结束
   */


    var parentElementX = setInterval(() => { //
        //console.log("\\ parentElement_add() 类目自动化生成检测... ")
        if (document.querySelector('div#navigation4limbo[style]')) {
            const url_now = window.location.href.toLowerCase();
            //if (/\b\b/i.test(window.location.href.toLowerCase())) {
            if (nsfw_regex.test(window.location.href.toLowerCase())) {
                parent_push('.echo', 'xOnline', 4, '午夜惊魂//', 'xOnline')
                parent_push('.echo', 'PornMaker', 4, '著名片商//', 'porn')
                parent_push('.echo', 'comic18', 4, '漫画//', 'comic18')
                parent_push('.echo', 'Tools', 4, "多宝盒//", "Tools")
                parent_push('.echo', 'dload', 4, '下载工具//', 'dload')
                parent_push(".echo", 'Search', 4, '搜索引擎//', 'search')
                parent_push('.echo', 'Social', 4, '社交媒体//', 'Social')
                parent_push('.echo', 'Media', 4, '流媒体//', 'Media')
                parent_push(".echo", 'AICHAT', 4, '智能AI//', 'AICHAT')
                parent_push(".echo", 'aigc', 4, 'AIGC//', 'aigc')
                parent_push('.echo', 'news', '10', '时事新闻//', 'currentnews')
                parent_push('.echo', 'technews', '10', '科技新闻//', 'technews')
                parent_push('.echo', 'writer', '10', '广告与写作//', 'writer')
                parent_push('.echo', 'bookreadanddownload', '4', '电子书//', 'bookreadanddownload')
                parent_push('.echo', 'seoandmore', 4, "建站指北//", "seoandmore")
                parent_push('.echo', 'front-build', 4, "建站工具//", "front-build")
                parent_push('.echo', 'domain-buy', 4, "域名注册商//", "domain-buy")
                parent_push(".echo", 'DeverloperX', 4, '开发者社区//', 'Developer')
                parent_push(".echo", 'Images', 4, '免费商用图片', 'IMages')
                child_push('.div_global.front > ul', '', "", 'front-end', 0)
                child_push('.div_global.boysshouldread > ul', '', '', 'knowledge', 0)
                child_push('.div_global.ipcheck > ul', '', '', 'ipcheck', 1)
                child_push('.div_global.onlinemovies > ul', '', '', 'movies', '#xbys')
                scroll_switch();
                //if_a_click_then_close_daohang();
                _footer_move(); // 最后再移动 div._footer
                csp_remove(); // 删除CSP模式下不可点击的按钮
                //new_align(); // 居中
                clearInterval(parentElementX);
            } else {
                parent_push('.echo', 'Tools', 4, "多宝盒//", "Tools")
                parent_push('.echo', 'dload', 4, '下载工具//', 'dload')
                parent_push(".echo", 'Search', 4, '搜索引擎//', 'search')
                parent_push('.echo', 'Social', 4, '社交媒体//', 'Social')
                parent_push('.echo', 'Media', 4, '流媒体//', 'Media')
                parent_push(".echo", 'AICHAT', 4, '智能AI//', 'AICHAT')
                parent_push(".echo", 'aigc', 4, 'AIGC//', 'aigc')
                parent_push('.echo', 'news', '10', '时事新闻//', 'currentnews')
                parent_push('.echo', 'technews', '10', '科技新闻//', 'technews')
                parent_push('.echo', 'writer', '10', '广告与写作//', 'writer')
                parent_push('.echo', 'bookreadanddownload', '4', '电子书//', 'bookreadanddownload')
                parent_push('.echo', 'seoandmore', 4, "建站指北//", "seoandmore")
                parent_push('.echo', 'front-build', 4, "建站工具//", "front-build")
                parent_push('.echo', 'domain-buy', 4, "域名注册商//", "domain-buy")
                parent_push(".echo", 'DeverloperX', 4, '开发者社区//', 'Developer')
                parent_push(".echo", 'Images', 4, '免费商用图片', 'IMages')
                parent_push('.echo', 'PornMaker', 4, '著名片商//', 'porn')
                parent_push('.echo', 'xOnline', 4, '午夜惊魂//', 'xOnline')
                parent_push('.echo', 'comic18', 4, '漫画//', 'comic18')
                child_push('.div_global.front > ul', '', "", 'front-end', 0)
                child_push('.div_global.boysshouldread > ul', '', '', 'knowledge', 0)
                child_push('.div_global.ipcheck > ul', '', '', 'ipcheck', 1)
                child_push('.div_global.onlinemovies > ul', '', '', 'movies', '#xbys', 0)
                //console.log("// parentElement_add() 生成检测...");
                scroll_switch();
                //if_a_click_then_close_daohang();
                _footer_move(); // 最后再移动 div._footer
                csp_remove(); // 删除CSP模式下不可点击的按钮
                //new_align(); // 居中
                clearInterval(parentElementX);
            }
        }
    }, 500)
}

parentElement_add();


// 宅男守护
function nsfw_content_hidden(x) { // nsfw 网站模糊
    // 

    /* 插入 2333 */
    if (x == 'true') { // 新建背景模糊 nsfw
        if (!document.querySelector("#nsfw_echo")) {
            let nsfw_frame_blur = document.createElement('div');
            nsfw_frame_blur.id = 'nsfw';
            nsfw_frame_blur.style.zIndex = '114154';
            nsfw_frame_blur.style.opacity = '0.7';
            let parentElement = document.querySelector('#x4Div') ? document.querySelector('#x4Div') : '';
            parentElement.appendChild(nsfw_frame_blur)

            if (window.innerWidth < window.innerHeight) {
                var innerHTML_echo = '<div id="nsfw_echo"><img class="nsfw" src="https://limbopro.com/Ad_swipe_mobile_1.png"></div>'
            } else {
                var innerHTML_echo = '<div id="nsfw_echo"><img class="nsfw" src="https://limbopro.com/Ad_swipe_pc_1.png"></div>'
            }

            nsfw_frame_blur.innerHTML = innerHTML_echo;

        } else {
            if (document.querySelector("#nsfw")) {
                document.querySelector("#nsfw").style.zIndex = '114154';
                document.querySelector("#nsfw").style.opacity = 0.7;
            }
        }
    }
}

// 监听 visibility change 事件 用户离开当前页面事件
function visibility() {
    if (getCookie('nsfwmode') !== 'false') {
        document.addEventListener('visibilitychange', function () {
            var visible = document.visibilityState;
            //(visible !== 'visible' && getCookie('nsfwmode') !== 'false')
            if (visible !== 'visible' && getCookie('nsfwmode') !== 'false') {
                document.body.style.filter = 'blur(50px)';
                nsfw_content_hidden('true'); // 开启模糊
                setTimeout(() => { sessionX('true') }, 1000);
            }
        })
    }
};


// ## 清理成人守护模式遗留的 localstorage 问题

window.onload = function () {
    if (localStorage.getItem("finalmode") !== null) {
        localStorage.removeItem("finalmode", "Masaka");
        console.log('localStorage.setItem("finalmode", "Masaka");');
        location.reload();
    }
}

////sessionX_check();

function sessionX_check() {
    if (localStorage.getItem("finalmode") !== null) {
        document.body.style.filter = 'blur(50px)';
        nsfw_content_hidden('true'); // 开启模糊
    }
}

function sessionX(x) {
    if (x == 'true') {
        if (document.getElementById('nsfw') && document.getElementById('nsfw') !== null && document.getElementById('nsfw').style.zIndex > 0) {
            localStorage.setItem("finalmode", "Masaka");
            console.log('localStorage.setItem("finalmode", "Masaka");');
        }
    } else if (x == 'false') {
        if (document.getElementById('nsfw') && document.getElementById('nsfw') !== null && document.getElementById('nsfw').style.zIndex < 0) {
            localStorage.removeItem("finalmode", "Masaka");
            if (document.body.getAttribute('style') !== null) {
                document.body.removeAttribute('style');
            }
            console.log('localStorage.removeItem("finalmode", "Masaka");');
        }
    }
}


// 取消模糊 监听
function visibility_switch() {
    var znsh_setInterval = window.setInterval(() => {
        if (document.querySelector("div#nsfw")) {
            document.querySelector("div#nsfw").addEventListener("click", znsh_unlock);
            clearInterval(znsh_setInterval);
        }
    }, 1500);
}

function znsh_unlock(x) {
    if (x == 'lockscreen') {
        if (document.querySelector("#nsfw")) {
            if (document.body.style.filter.replace(/[^0-9]/ig, "") > 10) {
                var filter_now = document.body.style.filter.replace(/[^0-9]/ig, "");
                document.body.style.filter = 'blur(' + (filter_now - 20) + 'px)';
            } else {
                if (document.body.style.filter !== '') {
                    document.body.style.filter = 'blur(0px)';
                }
                document.querySelector("#nsfw").style.zIndex = '-114154';
                document.querySelector("#nsfw").style.opacity = 0;
                setTimeout(() => {
                    x4Home_button('1'); // 显示导航按钮
                }, 1000)
            }
        }
    } else if (document.querySelector('img.lockscreen') == null) {
        if (document.querySelector("#nsfw")) {
            if (document.body.style.filter.replace(/[^0-9]/ig, "") > 10) {
                var filter_now = document.body.style.filter.replace(/[^0-9]/ig, "");
                document.body.style.filter = 'blur(' + (filter_now - 20) + 'px)';
            } else {
                if (document.body.style.filter !== '') {
                    document.body.style.filter = 'blur(0px)';
                }
                document.querySelector("#nsfw").style.zIndex = '-114154';
                document.querySelector("#nsfw").style.opacity = 0;
                setTimeout(() => {
                    x4Home_button('1'); // 显示导航按钮
                }, 1000)
            }
        }
    }
    setTimeout(() => { sessionX('false'); }, 1000);
}

function znsh() {
    //var url = document.location.href;
    //console.log(url)
    if (nsfw_regex.test(document.location.href)) {
        visibility();
        //console.log(url + " 网站匹配 znsh() ，开启成人守护模式...")
        visibility_switch(); //
    }
}

function nsfwmode(x) { // 是否开启
    if (x == 'false') {
        setCookie('nsfwmode', 'false');
        setTimeout(() => { nsfwmode_check() }, 100)
    } else if (x == 'true') {
        setCookie('nsfwmode', 'true', '114154');
        setTimeout(() => { nsfwmode_check() }, 100)
    } else if (getCookie('nsfwmode') == 'false') {
        setCookie('nsfwmode', 'true', '114154');
        setTimeout(() => { nsfwmode_check() }, 100)
    } else if (getCookie('nsfwmode') == 'true') {
        setCookie('nsfwmode', 'false');
        visibility('false');
        setTimeout(() => { nsfwmode_check() }, 100)
    } else if (getCookie('nsfwmode') == '') {
        setCookie('nsfwmode', 'false');
        visibility('false');
        setTimeout(() => { nsfwmode_check() }, 100)
    }
}

nsfwmode_check();

function nsfwmode_check() {
    if (getCookie('nsfwmode') !== 'false' && nsfw_regex.test(document.location.href)) {
        ////znsh();
        if (document.getElementById('nsfwmode_switch')) {
            ////znsh();
            document.getElementById('nsfwmode_switch').textContent = '成人保护模式(ON)';
            setTimeout(() => {
                body_build('false');
            }, 1200)
        }
    } else if (getCookie('nsfwmode') !== 'true' && nsfw_regex.test(document.location.href)) {
        if (document.getElementById('nsfwmode_switch')) {
            znsh_unlock();
            document.getElementById('nsfwmode_switch').textContent = '成人保护模式(OFF)';
            setTimeout(() => {
                body_build('false');
            }, 1200)
        }
    } else {
        if (document.getElementById('nsfwmode_switch')) {
            document.getElementById('nsfwmode_switch').textContent = '非成人网站';
        }
    }
}

// 设置 cookie 饼
function setCookie(cname, cvalue, exdays) { var d = new Date(); d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); var expires = "expires=" + d.toGMTString(); document.cookie = cname + "=" + cvalue + "; path=/;" + expires; }
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

function lock_screen_setPWD(x) { // 锁屏设置
    if (x == 'check') {
        lock_screen_mode_check();
    } else if (getCookie('lock_screen_pwd') == '' || getCookie('lock_screen_pwd') == 'null') {
        var password = window.prompt("请设置锁屏密码（任意你记得住的字母/数字等符号的简单组合)；如忘记密码，你可通过清理浏览器 cookie 的方式重置密码；本次设置仅针对当前网站域名生效。");
        if (typeof password == "object") {
            lock_screen_switch();
            // 密码设置已取消
        } else {
            setCookie('lock_screen_pwd', password, 114154);
            setTimeout(() => {
                lock_screen_setPWD();
            }, 1000)
        }
    } else {
        lock_screen_mode_check_after();
    }
}

lock_screen_mode_check();

function screen_unlock() {
    // var pwd = window.prompt("请输入密码以解锁...");
    // if (pwd == getCookie('lock_screen_pwd')) {
    if (document.querySelector('input.lockscreen').value == getCookie('lock_screen_pwd')) {

        znsh_unlock('lockscreen');
        znsh_unlock('lockscreen');

        setTimeout(() => {
            x4Home_button('1'); // 显示导航按钮
        }, 1000)

        nsfwmode('true');
        document.querySelector("button.unlock").removeEventListener("click", screen_unlock);
        document.querySelector('img.lockscreen').className = 'nsfw';
        document.querySelector('img.nsfw').style = 'filter:blur(0px)';
        setTimeout(() => {
            document.querySelector("img.nsfw").addEventListener("click", znsh_unlock());
        }, 0)
        setCookie('lock_screen_mode', 'false', '114154');

        // 移除解锁按钮 UNLOCK 🔓
        if (document.querySelector('button.unlock')) {
            document.querySelector('button.unlock').remove();
        }
        if (document.querySelector('input.lockscreen')) {
            document.querySelector('input.lockscreen').remove();
        }
        if (document.getElementById('nsfw')) {
            document.getElementById('nsfw').style = '/*text-align:center;*/'
        }
        // 结束

        //location.reload();
    } else {
        alert('密码错误❌！请重新输入...')
    }
}

function lock_screen_mode_check() {
    if (getCookie('lock_screen_mode') == 'true') {
        nsfwmode('false');
        lock_screen_setPWD();
    }
}

function lock_screen_mode_check_after() {
    if (getCookie('lock_screen_mode') == 'true') {
        document.body.style.filter = 'blur(50px)';
        nsfw_content_hidden('true'); // 开启模糊
        document.querySelector('img.nsfw').className = 'lockscreen';
        document.querySelector('img.lockscreen').style = 'filter:blur(50px)'

        // 增加解锁按钮 UNLOCK 🔓

        var button_echo = document.createElement('button'); // 隐藏输入框 避免浏览器提示记住密码
        button_echo.id = 'unlock';
        button_echo.className = 'unlock';
        button_echo.style = 'border-radius:4px; font-size:medium; border-radius:26px; box-shadow:inset 0px 0px 15px 3px #16191f00; position: relative;z-index: 114155;top: 50%;width: 180px;height: 40px; font-weight:inherit; background:blue; color:white;';
        button_echo.textContent = 'UNLOCK!';

        var input_echo = document.createElement('input'); // 密码输入框
        input_echo.className = 'lockscreen';
        input_echo.style = '-webkit-text-security:disc;z-index:114155; position:fixed;width:180px;height:27px;top:45%;outline-style:none;border:0px;color:black;background:aliceblue;auto-complete:new-password;';
        //input_echo.type = 'password';
        input_echo.type = 'text';
        input_echo.autocomplete = 'off';
        input_echo.placeholder = ' 在这里输入密码...';

        var target_echo = document.getElementById('nsfw_echo');
        var before = document.querySelector('img.lockscreen')
        target_echo.insertBefore(button_echo, before);
        document.getElementById('nsfw').style = 'text-align:center;'

        var before2 = document.querySelector('button.unlock');
        var target_echo1 = document.getElementById('nsfw_echo');
        target_echo1.insertBefore(input_echo, before2);

        // 结束

        document.querySelector("button.unlock").addEventListener("click", screen_unlock);
        body_build('false');
    }
}

function lock_screen_switch() {
    if (getCookie('lock_screen_mode') == 'false') {
        setCookie('lock_screen_mode', 'true', '114154');
        setTimeout(() => { lock_screen_mode_check() }, 100)
        body_build('false');
    } else if (getCookie('lock_screen_mode') == 'true') {
        setCookie('lock_screen_mode', 'false', '114154');
        //visibility('false');
        setTimeout(() => { lock_screen_mode_check() }, 100)
    } else if (getCookie('lock_screen_mode') == '') {
        setCookie('lock_screen_mode', 'true', '114154');
        //visibility('false');
        setTimeout(() => { lock_screen_mode_check() }, 100)
        body_build('false');
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
                if (document.querySelector("#navigation4limbo[style]")) {
                    if (document.querySelector("#navigation4limbo[style]").style.opacity == 1) {
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
        if (document.querySelector("[data-for-id=new_messages]") !== null && document.querySelector('[aria-live=polite].crisp-client').classList !== null) { // 如果有未读消息则强制显示
            document.querySelector('[aria-live=polite].crisp-client').classList.add('active');
            document.querySelector('[aria-live=polite].crisp-client').style = 'z-index:115155!important'; // 避免被网站样式强制覆盖
            console.log("// crisp_window_remove() 有未读消息，执行显示Crisp成功...")
        } else {
            if (document.querySelector('[aria-live=polite].crisp-client') !== null && document.querySelector('[aria-live=polite].crisp-client').classList !== null) {
                document.querySelector('[aria-live=polite].crisp-client').classList.remove('active');
                document.querySelector('[aria-live=polite].crisp-client').style = 'z-index:-115155!important'; // 避免被网站样式强制覆盖
                //console.log("// crisp_window_remove() 执行隐藏Crisp成功...")
            }
        }
    } else if (x == 1) {
        if (document.querySelector('[aria-live=polite].crisp-client') !== null && document.querySelector('[aria-live=polite].crisp-client').classList !== null) {
            document.querySelector('[aria-live=polite].crisp-client').classList.add('active');
            document.querySelector('[aria-live=polite].crisp-client').style = 'z-index:115155!important';
            console.log("// crisp_window_remove() 手动打开，执行显示Crisp成功...")
        }
    }
}

function crisp_active(x) {
    if (x == 1) {
        let crisp_check_2 = setInterval(() => {
            if (!document.querySelector("script[src*='crisp']")) {
                //console.log("// crisp_active() 插入 crisp 系统脚本...")
                thrd_party_file("script", "https://limbopro.com/Adguard/crisp.js", "head");
                crisp_window_remove('1');
                crisp_window_switch();
                clearInterval(crisp_check_2);
            } else {
                crisp_window_remove('1');
                crisp_window_switch();
                clearInterval(crisp_check_2);
            }
        }, 1000);
    }
}

thrd_party_file("script", "https://limbopro.com/Adguard/crisp.js", "head");

function crisp_auto_hidden() {
    val = null
    ////console.log(val === document.querySelector(selector.body_css));
    if (!document.querySelector("[data-for-id=new_messages]") && val == document.querySelector('.cc-1hqb[data-visible=true]')) {
        crisp_window_remove('0'); // 隐藏crisp按钮
        //console.log("// crisp_auto_hidden()执行隐藏Crisp...")
    } else {
        if (document.querySelector("[data-for-id=new_messages]")) { // 如果有未读消息则强制显示
            crisp_window_remove('0');
            console.log("/ crisp_auto_hidden() 执行显示Crisp...")
        }
        console.log("/ crisp_auto_hidden() 没有对应结果...")
    }
}


function testx() {
    var selector = window.prompt("请输入你想要移除的元素对应的标签 e.g. div a li ul 或更具体的元素选择器 e.g. .ad #ad ");
    if (document.querySelectorAll(selector)[0]) {
        document.querySelectorAll(selector).forEach((x) => { x.remove() })
    } else {
        alert("元素不存在!")
    }
}


function close_googlesearch_iframe_eventlistener() {
    let mikey = setInterval(() => {
        if (document.querySelector('button#close_search_button') !== null) {
            document.querySelector('button#close_search_button').addEventListener('click', function () {
                close_googlesearch_iframe(); // 添加监听事件
            });
            clearInterval(mikey);
            console.log("为谷歌搜索添加监听器成功...")
        }
    }, 1000)
}

if (getCookie('googlesearch') == 'True') {
    open_googlesearch_iframe();
} else {
    close_googlesearch_iframe();
}

function open_googlesearch_iframe() {
    setCookie('googlesearch', 'True', 7);
    if (document.cookie.indexOf("alert") == -1) {
        //alert('cookie 不存在')
        setCookie('alert', '7', '7')
        alert('功能呈现页尚处于优化中...，欢迎反馈使用体验及建议...(搜索结果基于谷歌，如需更好的体验可多刷新/重新加载几次搜索页面以便谷歌自动化完善样式...)')
    }

    if (document.querySelector('#searchbyGoogle')) {
        document.querySelector('#searchbyGoogle').style.zIndex = '1141541';
        document.querySelector('#searchbyGoogle').style.opacity = '1';
        body_build('false');
        document.querySelector('#x4Home').style.bottom = '30%';
        setTimeout(() => {
            if (!document.querySelectorAll("script[src*='=a897efc85e']").length >= 1) {
                let parentElement = document.querySelector('#searchbyGoogle');
                let new_s = document.createElement('script');
                new_s.src = 'https://cse.google.com/cse.js?cx=77ba49c819b1d40d7';
                parentElement.appendChild(new_s);
                body_build('false');
            }
        }, 500);
        close_googlesearch_iframe_eventlistener();
        googlesearch_blank();
    } else {
        // 创建一个搜索框
        document.querySelector('#x4Home').style.bottom = '30%'; // 先把导航按钮提高一个度
        let new_b = document.createElement('body')
        let new_div_search = document.createElement('div')
        new_div_search.className = "new_div_search"
        new_b.id = 'searchbyGoogle'
        new_b.style.zIndex = 1141541;
        new_b.style.bottom = '0%';
        new_b.style.position = 'absolute';
        let old_b = document.body;
        new_b.appendChild(new_div_search)
        old_b.appendChild(new_b);
        let googlesearch = document.createElement('div');
        googlesearch.className = 'gcse-search';
        new_div_search.appendChild(googlesearch);

        setTimeout(() => {
            if (!document.querySelectorAll("script[src*='=a897efc85e']").length >= 1) {
                let parentElement = document.querySelector('#searchbyGoogle');
                let new_s = document.createElement('script');
                new_s.src = 'https://cse.google.com/cse.js?cx=77ba49c819b1d40d7';
                parentElement.appendChild(new_s);
                body_build('false');
            }
        }, 500)

        // 创建一个关闭搜索的按钮

        if (!csp_regex.test(window.location.href.toLowerCase())) {
            let close_search_button = document.createElement('button')
            close_search_button.id = 'close_search_button';
            close_search_button.className = 'close_search_button';
            //// close_search_button.setAttribute('onclick', 'close_googlesearch_iframe()');
            document.querySelector('#searchbyGoogle').appendChild(close_search_button);
            close_googlesearch_iframe_eventlistener(); // 监听
            googlesearch_blank();
        } else {
            let close_search_button = document.createElement('button')
            close_search_button.id = 'close_search_button';
            close_search_button.className = 'close_search_button_csp';
            close_search_button.textContent = 'X';
            //// close_search_button.setAttribute('onclick', 'close_googlesearch_iframe()');
            document.querySelector('#searchbyGoogle').appendChild(close_search_button);
            close_googlesearch_iframe_eventlistener(); // 监听
            googlesearch_blank();
        }
    }
}

function googlesearch_blank() {
    var googlesearch_blank_check = setInterval(() => { // 重新设置 谷歌搜索结果页面 target 为 _blank 的链接
        console.log("定时器正在执行...")
        if (document.querySelector("body#searchbyGoogle").style.zIndex == -11415411) {
            clearInterval(googlesearch_blank_check);
            console.log("搜索按钮关闭，清除计时器...");
            /*for (i = 1; i <= googlesearch_blank_check; i++) {
                clearInterval(i);
            }*/
        }

        if (document.querySelectorAll("div[class*='gs']")[0]) {
            //setTimeout(() => {
            if (document.querySelectorAll(".gsc-results-wrapper-overlay.gsc-results-wrapper-visible")[0]) {
                let a = document.querySelectorAll(".gsc-results-wrapper-overlay.gsc-results-wrapper-visible")[0].querySelectorAll("a")
                var aa = 0;
                for (i = 0; i < a.length; i++) {
                    a[i].target = '_blank'
                    var aa = ++aa;
                    //console.log(aa)
                    if (aa + 1 >= a.length) {
                        //clearInterval(googlesearch_blank_check)
                        console.log("共计" + aa + "个搜索结果，链接的 target值 重置设置结束...")
                    }
                }
            }
            //}, 1000)
        }
    }, 2500)
}

function close_googlesearch_iframe() {
    if (document.querySelectorAll(".gsc-modal-background-image.gsc-modal-background-image-visible")[0]) { // 先关闭搜索结果页
        if (document.querySelectorAll("div[class*='gsc-results-close-btn']")[0]) {
            document.querySelectorAll("div[class*='gsc-results-close-btn']")[0].click();
        }
    } else if (!(/\b(gsc.q)\b/i.test(document.location.href))) { // 在关闭搜索框
        console.log('谷歌搜索已关闭...')
        setCookie('googlesearch', 'False', 7);
        x4Home_button("1"); // 显示导航按钮;
        if (document.querySelector('#searchbyGoogle')) {
            document.querySelector('#searchbyGoogle').style.zIndex = '-11415411'
            document.querySelector('#searchbyGoogle').style.opacity = '0'
            document.querySelector('#x4Home').style.bottom = '15%';  // 搜索隐藏后把导航按钮降低一个度
        }
    } else {
        open_googlesearch_iframe()
    }
}



// 复制 input 内容
function copyText(id1, id2, Text) { // 复制文本按钮
    let corlor = { // 定义常量
        css: {
            borderRight_copied: "6px solid white",
            borderRight_recover: "6px solid #38a3fd",
            backgroundColor_copied: "#00AC6A",
            backgroundColor_recover: "#2563eb"
        }
    }

    function border_color(ele, value) { // 制作一个循环
        for (let i = 0; i < ele.length; i++) {
            ele[i].style.borderRight = value
        }
    }

    const ele_1 = document.getElementById(id1);
    const ele_2 = document.getElementById(id2);
    const ele_array = [ele_1, ele_2];

    // 复制工作开始
    const input = document.querySelectorAll("input#copy");
    const range = document.createRange(); range.selectNode(input[0]); const selection = window.getSelection();
    if (selection.rangeCount > 0) selection.removeAllRanges(); // 判断光标是否复制其他内容 如有则清除
    selection.addRange(range); document.execCommand('copy');
    // 复制工作结束

    ele_2.innerText = "复制成功！";
    ele_2.style.backgroundColor = corlor.css.backgroundColor_copied;

    border_color(ele_array, corlor.css.borderRight_copied)
    setTimeout(() => {
        ele_2.innerText = Text;
        ele_2.style.backgroundColor = corlor.css.backgroundColor_recover;
        border_color(ele_array, corlor.css.borderRight_recover)
    }, 3000);
}


// 在页面动态插入元素并赋予相应元素
function ele_dynamicAppend(selector, attribute, txt, style, func, id, array, tag) {
    let new_ele = document.createElement(tag);
    new_ele.innerHTML = txt;
    new_ele.setAttribute(attribute, func);
    new_ele.setAttribute("id", id);
    new_ele.setAttribute("style", style);
    var here = document.querySelectorAll(selector);
    if (here.length > 0) {
        here[0].insertBefore(new_ele, here[0].childNodes[array])
        //here[0].appendChild(new_ele);
        console.log("按钮已添加；")
    }
}

function testy() {

    //alert('在做了(0%)')
    var js_url = window.prompt("请输入第三方脚本（应以 .js 为后缀）");
    var head_or_body = window.prompt("请输入脚本插入位置（e.g. body head）");
    thrd_party_file('script', js_url, head_or_body)
    if (!js_url == '') {
        body_build('false');
    }
}

function closeP() {
    alert("部分页面可能无法正常关闭...!届时请手动关闭！请点击确定！");
    window.close()
}