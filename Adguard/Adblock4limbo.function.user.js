// ==UserScript==
// @name         Adblock4limbo——导航及各类功能函数合集.[github]
// @namespace    https://limbopro.com/Adguard/Adblock4limbo.function.js
// @version      0.2025.11.07
// @license      CC BY-NC-SA 4.0
// @description  实用网站导航 —— 免费在线影视/前端学习/开发者社区/新闻/建站/下载工具/格式转换工具/电子书/新闻/写作/免费漫画等；
// @author       limbopro
// @match        https://*/*
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
 * 毒奶去网页广告计划
 * Author: limbopro
 * 使用教程：https://limbopro.com/archives/12904.html
 * 联系博主：https://t.me/limboprobot
 * 电报群组：https://t.me/Adblock4limbo
 * FAQ：https://t.me/Adblock4limbo/21 常见问题与回答
 * Github：https://github.com/limbopro/Adblock4limbo
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

/* 删除所有cookies */
function cookiesRemove() {

    let qi = confirm('导航设置已重置；🔔是否需要清空当前网站所有cookie以确保完全重置成功?（可选择不清理；清理🧹后需重新登录...）');

    if (qi == true) {

        var exp = new Date();
        var domain = "." + document.domain;
        exp.setTime(exp.getTime() + 0 * 24 * 60 * 60 * 1000);

        document.cookie.split(';').forEach(x => {
            if (x.search('=')) {
                document.cookie = x.split("=")[0] + "=''; " + "expires=" + exp.toGMTString() + ';' + "path=/;" + "domain=" + domain + ";";
                document.cookie = x.split("=")[0] + "=''; " + "expires=" + exp.toGMTString() + ';' + "path=/;";
                console.log(x.split("=")[0] + " ♻️🗑️...")
            }
        })

        console.log(exp)

    }

    location.reload()

}

/* 连续点击3次空白处起导航🧭页面 */
function tripleClick() {

    var startTime = '';
    var number = 0;
    const htmlbody = document.querySelectorAll('body')[0]

    htmlbody.addEventListener('touchstart', function () {
        startTime = +new Date()
        number += 1;
        console.log(number)
        tripleClick_check(number)
    })

    function tripleClick_check(x) {
        setTimeout(() => {
            if (x >= 4) {
                console.log('连续点击超过' + x + "次")
                body_build('true')  // 如果按钮出现，且其他如搜索不存在则可唤出导航页面
            } else {
                number = 0;
                console.log("number被重设为0")
            }
        }, 850)
    }
}

tripleClick();

/* 计算用户累计在本网站停留时间 */
(function () {
    function timerCount() {
        if (localStorage.getItem('timing') !== '' && localStorage.getItem('timing') !== 0) { // 如果 timing 不为空
            localStorage.setItem('timing', Number(localStorage.getItem('timing')) + 1)
        } else {
            localStorage.setItem('timing', 1) // 初始化1秒
        }
    }

    function itimer() {
        var time = localStorage.getItem('timing')
        parseInt(time / 60 / 60) + "小时" + parseInt(localStorage.getItem('timing') / 60) + "分" + time % 60 + "秒⌛️";
        var currentTime_innerHTML = "你已在当前网站累计停留" + parseInt(localStorage.getItem('timing') / 60) + "分" + time % 60 + "秒⌛️";
        if (document.getElementById('itimer') !== null) {
            var xr = document.getElementById('itimer');
            xr.innerHTML = currentTime_innerHTML;
        }
    }

    var timerCount_interval = setInterval(function () {

        timerCount()
        itimer()

    }, 1000)
})()


// 重设导航/成人保护模式设置
var weblist_regex = new RegExp(/\b(xiaobaotv|iyf|gimy|ddrk|ddys|olevod|hitomi|hltv|javlibrary|thisav|njav|missav|javlib|javbus|attackers|18comic|javday|hamnime|takara|tameikegoro|deeps|moodyz|s1s1s1|nagae|ideapocket|dasdas|oppai|kawaii|satsu|mgstage|manji-group|rocket|muku|dmm|beauty|gloryquest|javbus|supjav|jable|xvideos|pornhub|porn|wnacg|av)\b/i);
if (window.location.href.match('limbopro.com')) {
    setCookie('daohangMode_global', 'true', '400');
    setCookie('adultMode', 'false', '400');
} else if (weblist_regex.test(window.location.href.toLowerCase()) && getCookie('daohangMode_global') == '') {
    setCookie('daohangMode_global', 'false', '400');
} else if (weblist_regex.test(window.location.href.toLowerCase())) {
    console.log('该网址被匹配，将按全局设置执行相关操作...！')
}

function wtf() {
    setInterval(() => {

        // dh_buttonMain
        if (document.getElementById('dh_buttonMain') !== null && document.getElementById('dh_buttonMain').style !== null && document.getElementById('dh_buttonMain').style.height !== null) {
            localStorage.setItem('dh_buttonMain', document.getElementById('dh_buttonMain').style.height)
            // console.log("当前导航按钮高度[dh_buttonMain]" + localStorage.getItem('dh_buttonMain'))
        }

        // _button

        if (localStorage.getItem('navigator_mobile') == 'mobile' && localStorage.getItem('navigator_pc') == '') { // 移动端top
            //if (localStorage.getItem('dh_button') !== 'px') {
            localStorage.setItem('dh_button', document.getElementById('dh_button').style.top)
            //}
        } else if (localStorage.getItem('navigator_mobile') == 'mobile') {
            localStorage.setItem('navigator_pc', '')
            localStorage.setItem('dh_button', 'px')
            wtf()
        }

    }, 2500)
}

wtf()


function touchandmove(selector) { // 移动端导航按钮可托拽
    // https://blog.csdn.net/weixin_46513544/article/details/105674150
    var dh_buttonMain_touch = document.querySelectorAll(selector)[0]
    var startX = 0;
    var startY = 0;
    var x = 0;
    var y = 0;

    dh_buttonMain_touch.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX
        startY = e.targetTouches[0].pageY
        x = this.offsetLeft
        y = this.offsetTop
    })


    dh_buttonMain_touch.addEventListener('touchmove', function (e) {
        var moveX = e.targetTouches[0].pageX - startX
        var moveY = e.targetTouches[0].pageY - startY
        //this.style.left = moveX + x + 'px'
        this.style.top = moveY + y + 'px'
        e.preventDefault();
    })
}

function height() {

    var height = ''
    if (navigator.userAgent.match('Mobile') !== null) {
        localStorage.setItem('navigator_mobile', 'mobile')
        height = window.screen.height + 'px'

    } else if (navigator.userAgent.match('Mobile') == null) {
        localStorage.setItem('navigator_pc', 'pc')
        if (localStorage.getItem('dh_buttonMain') !== null && localStorage.getItem('navigator_mobile') !== 'mobile') {
            height = localStorage.getItem('dh_buttonMain');
        } else {
            localStorage.setItem('navigator_mobile', '')
            height = '520px'
        }
    }

    return height;
}

function bottom() {
    var bottom = ''
    if (navigator.userAgent.match('Mobile') !== null) {
        //height = window.screen.height + 'px'
        bottom = 'mobile'
    } else {
        //height = '420px'
        bottom = 'pc'
    }
    return bottom;
}

function bottom_wrapper() {
    if (navigator.userAgent.match('Mobile') !== null) {
        document.getElementById('dh_buttonContainer').classList.add('bottom-mobile') // 移动端新增类
    } else if (document.getElementById('dh_buttonContainer').className.match('bottom-mobile') !== '') {
        document.getElementById('dh_buttonContainer').classList.remove('bottom-mobile') // PC端移除该类
    }
}


function position() {
    if (navigator.userAgent.match('Mobile') !== null) {
        document.getElementById('dh_buttonMain').classList.add('positiondh_buttonMain') // 移动端新增类
    } else if (document.getElementById('dh_buttonMain').className.match('positon') !== '') {
        document.getElementById('dh_buttonMain').classList.remove('positiondh_buttonMain') // PC端移除该类
    }
}


// 先新建一个按钮
function adblock4limbo(x, csp) {

    if (document.getElementById('dh_buttonContainer')) return;

    // 新建 dh_buttonContainer
    let dh_buttonContainer = document.createElement('div');
    dh_buttonContainer.id = 'dh_buttonContainer';
    let body = document.body;

    document.querySelector('html').appendChild(dh_buttonContainer)

    // document.querySelector('html').insertBefore(dh_buttonContainer, body);

    // 新建 dh_buttonMain
    let dh_buttonMain = document.createElement('div'); // body 换为 div
    dh_buttonMain.id = 'dh_buttonMain'; // 高等悬挂
    dh_buttonMain.style.height = height()
    document.getElementById('dh_buttonContainer').appendChild(dh_buttonMain)

    // 定义按钮
    let _button = document.createElement('button')
    _button.id = 'dh_button';
    _button.draggable = "true";

    if (getCookie("daohangMode_global") == 'false' && getCookie("daohangMode_yourChoice") !== "show" || getCookie("daohangMode_global") == '') {
        _button.setAttribute("class", "cmsnone " + bottom());
    } else if (getCookie("daohangMode_global") == 'true') {
        _button.setAttribute("class", "cms " + bottom());
    } else {
        _button.setAttribute("class", "cms " + bottom());
    }

    if (csp == 'nocsp') {
        console.log('创建不带CSP属性按钮...')

        //_button.setAttribute('onclick', "body_build('true');")
        //// var nocsp = 'padding:0px;transition-duration:666ms;transition-property:height;z-index:114154;bottom:15%;right:0.5%;position:fixed;border:transparent;background-color:transparent;background-image:url("https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/uploads/imgs/Adblock4limbo.svg") !important;background-size:100% !important;background-repeat:no-repeat;';
        var nocsp = '/*border:1px solid blue !important; */ padding:0px;transition-duration:666ms;transition-property:height;z-index:114154;right:0;position:fixed;border:transparent;background-color:transparent;background-image:url("https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/Adblock4limbo.png") !important;background-size:100% !important;background-repeat:no-repeat;';
        _button.style = nocsp;
        document.getElementById('dh_buttonMain').appendChild(_button); // 在 dh_buttonMain 下添加按钮

    } else if (csp == 'csp') {
        console.log('创建带CSP属性按钮...')
        var csp = 'box-shadow:inset 0px 0px 15px 3px #23395e;background:linear-gradient(to bottom,#2e466e 5%,#415989 100%);background-color:#2e466e;border-radius:17px;border:1px solid #1f2f47;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:15px;padding:6px 13px;text-decoration:none;text-shadow:0px 1px 0px #263666;padding:0px;transition-duration:666ms;transition-property:height;z-index:114154;bottom:15%;right:0.5%;/*position:fixed;*/border:transparent;border-radius:50%;';
        _button.style = csp;
        _button.textContent = '导航';
        document.getElementById('dh_buttonMain').appendChild(_button); // 在 dh_buttonMain 下添加按钮
        //_button.setAttribute("class", "cspButton");
        document.getElementById('dh_button').style.height = x;
        document.getElementById('dh_button').style.width = x;
        if (window.innerHeight < 600) {
            document.querySelector('#dh_button').style.bottom = '30%';
        }
    }

    if ((navigator.userAgent.match('Mobile') !== null)) {
        if (localStorage.getItem('dh_button') !== null) {
            _button.style.top = localStorage.getItem('dh_button')
        };
    } else {
        _button.style.top = 'px';
    }

    position();
    bottom_wrapper();
    touchandmove('#dh_button');

    // 监控用户是否需要拖动导航按钮
    document.getElementById('dh_button').addEventListener("mouseover", (event) => {
        document.getElementById('dh_buttonContainer').classList.remove('pointer-events-none')
        setTimeout(() => {
            document.getElementById('dh_buttonContainer').classList.add('pointer-events-none')
        }, 4000)
    });

}

// 定义按钮尺寸
function _button_button_width() {
    //const userAgent = navigator.userAgent.toLowerCase();
    const window_innerWidth = window.innerWidth;
    if (window_innerWidth <= 920) {
        //if (/\b(android|iphone|ipad|ipod)\b/i.test(userAgent)) {
        var size = '45px'; // 40px
        return size;
    } else {
        var size = '45px'; // 55px
        return size;
    }
}

// 长时间不动则隐藏按钮
function _button_button(x) { // 显示导航按钮
    if (document.getElementById('dh_button') !== null) {
        const _button = document.getElementById('dh_button');
        const new_div = document.getElementById('dh_buttonMain');

        if (x == 1 && !(document.getElementById('dh_button') === null)) {
            _button.style.height = _button_button_width();
            _button.style.width = _button_button_width();
            new_div.style.zIndex = '114154';
            console.log('显示导航按钮🔘')
        } else {
        }
    }
}


// 为按钮添加监听事件 防止被破坏
function _onclick_button() {
    if (document.querySelector('button#dh_button')) {
        document.querySelector('button#dh_button').addEventListener("click", function () {
            body_build('true'); // 添加监听事件
        })
    }
    setTimeout(() => {
        if (document.querySelector("button#xX")) {
            document.querySelector('button#xX').addEventListener("click", function () {
                body_build('false'); // 添加监听事件
            })
        }

        if (document.querySelector('button#hidedaohang')) {
            document.querySelector('button#hidedaohang').addEventListener("click", function () {
                daohangMode_switch(); // 添加监听事件
            })
        }

        if (document.querySelector('button#resetting')) {
            document.querySelector('button#resetting').addEventListener("click", function () {


                // 移动端 重置导航按钮高度记忆
                localStorage.setItem('dh_buttonMain', '')
                localStorage.setItem('navigator_pc', '')
                document.getElementById('dh_button').style.top = null

                // PC端 重置导航按钮高度记忆
                if (navigator.userAgent.match('Mobile') == null) {
                    document.getElementById('dh_buttonMain').style.height = '420px'
                }

                setCookie("daohangMode_yourChoice", 'show', 400) // 显示按钮

                cookiesRemove()

                setTimeout(() => {
                    location.reload();
                }, 1000);

            })
        }


        if (document.getElementById('nsfwmode_switch')) {
            document.getElementById('nsfwmode_switch').addEventListener('click', function () {
                nsfwmode(); // 开始或关闭成人模式
            })
        }

    }, 1000)
}


var nsfw_regex = new RegExp(/\b(javlibrary|thisav|njav|missav|javlib|javbus|attackers|18comic|javday|hamnime|takara|tameikegoro|deeps|moodyz|s1s1s1|nagae|ideapocket|dasdas|oppai|kawaii|satsu|mgstage|manji-group|rocket|muku|dmm|beauty|gloryquest|javbus|supjav|jable|xvideos|pornhub|porn|wnacg|av)\b/i);
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
    adblock4limbo(_button_button_width(), 'csp');
    _onclick_button();
}
else {
    adblock4limbo(_button_button_width(), 'nocsp'); // 反之则不带
    _onclick_button();
}

function csp_remove() {
    // 删除CSP模式下不可点击的按钮
    var csp_regex = new RegExp(/\b(twitter|xvideos)\b/i);
    if (csp_regex.test(window.location.href.toLowerCase())) {
        if (document.querySelector("button#dh_button") !== null && document.querySelector("script[src*='Adblock4limbo.function.js']") !== null) {
            // 如果引用了 Adblock4limbo.function.js 则什么也不做
        } else {

            document.querySelectorAll('.li_global').forEach((x) => { // 移除网页聊天的功能按钮 webchat
                if (x.querySelector('#webChat') !== null) {
                    x.remove()
                }
            })

            document.getElementById('dh_pageContainer').style.background = 'black'; // 设置背景颜色
            console.log('CSP-设置背景颜色！')

        }
    } else {
        if (document.querySelector("button#dh_button") !== null && document.querySelector("script[src*='Adblock4limbo.function.js']") !== null) {
            // 如果引用了 Adblock4limbo.function.js 则什么也不做
        } else {

            document.querySelectorAll('.li_global').forEach((x) => { // 移除网页聊天的功能按钮 webchat
                if (x.querySelector('#webChat') !== null) {
                    x.remove()
                }
            })

            document.getElementById('dh_pageContainer').style.background = 'black'; // 设置背景颜色
            console.log('CSP-设置背景颜色！')

        }
    }
}


// 初始化导航容器

/**
 * 初始化导航容器（一次性创建、填充内容、插入 DOM）
 * 采用文档片段 + 模板字符串 + 事件委托的方式，减少回流/重绘
 */


function initNavigationContainer() { // 初始化导航容器
    // 1. 创建容器（只创建一次）
    const container = Object.assign(document.createElement('div'), {
        id: 'dh_pageContainer',
        className: 'dh_pageContainer_css'
    });

    // 2. 使用模板字符串（保持可读性） + 文档片段（避免多次 innerHTML 导致的重排）
    const fragment = document.createDocumentFragment();
    const wrapper = document.createElement('div');
    wrapper.id = 'dh_pageWrapper';
    wrapper.className = 'dh_pageWrapper_css';
    wrapper.innerHTML = getNavigationHTML();   // 纯 HTML 字符串

    fragment.appendChild(wrapper);
    container.appendChild(fragment);

    // 3. 插入到 <html> 末尾（保持页面原有结构不变）
    document.documentElement.appendChild(container);
}

/**
 * 导航所有 HTML（集中管理，便于后期修改）
 * 使用模板字面量 + 换行保持可读性
 */

function getNavigationHTML() {
    return `
<div class="echo">

  <!-- Tips 区域 -->
  <div class="div_global tips" style="width:100%">
    <div class="closeX_W">
      <div class="ellCloseX">
        <button style="border-radius:50%;opacity:.5" id="xX"></button>
      </div>
    </div>
    <div class="_header4tips" style="padding:10px 22px 5px 22px;color:black;text-align:center;width:100%;bottom:-6px;left:7px">
      本导航为<a style="background:black;color:white" href="https://limbopro.com/archives/12904.html" target="_blank">毒奶去网页广告计划</a>的一部分！持续维护更新中...<br>
      <b>✨导航使用小Tips</b> -&gt; 1秒内，<b>电脑用户</b>(连续敲击<b>2次ESC键</b>)，<b>iOS用户</b>(<b>在页面空白处连续点击4次及以上</b>) 可<b>快速唤起本导航页面</b>!<br>
      <b>反馈/建议/功能设置</b>中的<b>ON代表该功能已开启</b>，可<b>点击切换至OFF</b>进行关闭!<br>
      P.S.有好的网站/建议或意见欢迎<a href="https://limbopro.com/6.html" target="_blank" style="background:black;color:aliceblue">联系博主!</a>（将为ta移除广告，并添加至本导航页面==...
    </div>
  </div>

  <!-- 反馈/建议/功能设置 -->
  <div class="div_global feedback">
    <div class="title_global">反馈/建议/功能设置//</div>
    <ul class="ul_global">
      <li class="li_global"><a class="a_global" id="admin" href="https://limbopro.com/6.html" target="_blank">联系博主</a></li>
      <li class="li_global"><button class="crbhms" id="hidedaohang">导航按钮(OFF)</button></li>
      <li class="li_global"><button class="crbhms" id="huacisousuo" data-state="off" style="background-color:green">划词搜索(ON)</button></li>
      <li class="li_global"><button class="crbhms" id="nsfwmode_switch">WTF!</button></li>
      <li class="li_global"><button class="a_global red" id="resetting" style="background:#171212;box-shadow:inset 0 0 15px 3px #16191f00">重置导航设置</button></li>
      <li class="li_global"><a class="a_global" id="jiaocheng" href="https://github.com/limbopro/Adblock4limbo?tab=readme-ov-file#%E6%AF%92%E5%A5%B6%E5%8E%BB%E5%B9%BF%E5%91%8A%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95%E9%85%8D%E7%BD%AE%E6%AD%A5%E9%AA%A4" target="_blank">导航使用教程</a></li>
      <li class="li_global"><a class="a_global" id="issue" href="https://github.com/limbopro/Adblock4limbo?tab=readme-ov-file#%E5%A6%82%E4%BD%95%E5%8F%8D%E9%A6%88%E9%97%AE%E9%A2%98%E6%8F%90%E4%BA%A4%E6%96%B0%E7%BD%91%E7%AB%99%E9%87%8D%E8%A6%81" target="_blank">提交issue</a></li>
      <li class="li_global"><a class="a_global" id="tgGroup" href="https://t.me/Adblock4limbo/21" target="_blank">电报群组</a></li>
      <li class="li_global"><a class="a_global" id="issue" href="https://github.com/limbopro/Adblock4limbo/tree/main?tab=readme-ov-file#%E5%8E%BB%E7%BD%91%E9%A1%B5%E5%B9%BF%E5%91%8A%E8%AE%A1%E5%88%92%E6%B6%89%E5%8F%8A%E8%84%9A%E6%9C%AC%E5%90%8D%E7%A7%B0%E5%8F%8A%E5%85%B6%E6%BA%90%E7%A0%81" target="_blank">查看源码</a></li>
      <div class="fbt">新网站收录、当前网站广告问题反馈，其他建议或意见，请通过<span style="color:black;font-weight:bolder">以上方式</span>告知我们（告知前可先看一下<a class="a_global title_" href="https://t.me/Adblock4limbo/21">FAQ </a>）...P.S. 该 Feature 持续增加/完善中，欢迎大家为之添砖加瓦！</div>
    </ul>
  </div>

  <!-- 关注博主 -->
  <div class="div_global gkd">
    <div class="title_global">关注博主//</div>
    <ul class="ul_global">
      <li class="li_global"><a class="a_global" id="Github" href="https://github.com/limbopro" target="_blank">Github</a></li>
      <li class="li_global"><a class="a_global" id="GreasyFork" href="https://sleazyfork.org/zh-CN/users/893587-limbopro" target="_blank">GreasyFork</a></li>
      <li class="li_global"><a class="a_global special" id="limboprossr" href="https://t.me/limboprossr" target="_blank">资讯频道</a></li>
      <li class="li_global"><a class="a_global special" id="SecretGarden" href="https://t.me/+dQ-tZYqhSDEwNTk1" target="_blank">春潮频道</a></li>
      <li class="li_global"><a class="a_global better" id="limboprossr" href="https://twitter.com/limboprossr" target="_blank">Twitter</a></li>
      <li class="li_global"><a class="a_global" id="YouTube" href="https://m.youtube.com/@limboprossr/featured" target="_blank">YouTube</a></li>
    </ul>
  </div>

  <!-- 工具箱 -->
  <div class="div_global magicbox">
    <div class="title_global">工具箱//</div>
    <ul class="ul_global">
      <li class="li_global"><a class="a_global" id="itimer">计时器⏱️</a></li>
      <li class="li_global"><a class="a_global" id="Adblock4limbo" href="https://limbopro.com/archives/12904.html" target="_blank" style="background:#5a4771;box-shadow:inset 0 0 15px 3px #16191f00">广告拦截大全</a></li>
      <li class="li_global"><a class="a_global" id="software_skills" href="https://limbopro.com/category/software-skills/" target="_blank">软件百科</a></li>
      <li class="li_global"><a class="a_global special" id="index" href="https://limbopro.com/" target="_blank" style="background:#5a4771">毒奶博客</a></li>
      <li class="li_global"><a class="a_global special" id="毒奶搜索" href="https://limbopro.com/search.html" target="_blank" style="border-radius:4px;background:#c53f3f">毒奶搜索</a></li>
      <li class="li_global"><a class="a_global special" id="番号搜索" href="https://limbopro.com/btsearch.html" target="_blank" style="border-radius:4px;background:#c53f3f">番号搜索</a></li>
    </ul>
  </div>

  <!-- 测速工具 -->
  <div class="div_global speedtest">
    <div class="title_global">测速工具//</div>
    <ul class="ul_global">
      <li class="li_global"><a class="a_global better" id="CloudflareSpeedtest" href="https://speed.cloudflare.com/" target="_blank">Cloudflare</a></li>
      <li class="li_global"><a class="a_global special" id="StairSpeedTest" href="https://limbopro.com/archives/ssrspeed.html" target="_blank">StairSpeedTest(机场测速)</a></li>
      <li class="li_global"><a class="a_global" id="Speedtest" href="https://www.speedtest.net/zh-Hans" target="_blank">Speedtest</a></li>
    </ul>
  </div>

  <!-- 网络连通及被墙检测 -->
  <div class="div_global ipcheck">
    <div class="title_global">网络连通及被墙检测//</div>
    <ul class="ul_global">
      <li class="li_global"><a class="a_global special" id="Sukka" href="https://ip.skk.moe/" target="_blank">ip地址查询（当前代理节点/本地IP信息）</a></li>
      <li class="li_global"><a class="a_global" id="checkgfw" href="https://www.checkgfw.com/" target="_blank">域名被墙检测</a></li>
    </ul>
  </div>

  <!-- 前端入门 -->
  <div class="div_global front">
    <div class="title_global">前端入门//</div>
    <ul class="ul_global">
      <li class="li_global"><a class="a_global" id="wangdoc" href="https://wangdoc.com/" target="_blank">网道</a></li>
      <li class="li_global"><a class="a_global" id="Web_mdn" href="https://developer.mozilla.org/zh-CN/docs/Web" target="_blank">Web 开发技术</a></li>
      <li class="li_global"><a class="a_global special" id="JavaScript" href="https://zh.javascript.info/" target="_blank">现代 JavaScript 教程</a></li>
    </ul>
  </div>

  <!-- 男孩子读物 -->
  <div class="div_global boysshouldread">
    <div class="title_global">男孩子读物//</div>
    <ul class="ul_global">
      <li class="li_global"><a class="a_global better" id="regex" href="https://limbopro.com/archives/Regular_Expressions.html" target="_blank">正则表达式</a></li>
      <li class="li_global"><a class="a_global special" id="Linux-Shell" href="https://t.me/limboprossr/3197" target="_blank">快乐的命令行</a></li>
    </ul>
  </div>

  <!-- 技术成长平台 -->
  <div class="div_global leetcode">
    <div class="title_global">技术成长平台//</div>
    <ul class="ul_global">
      <li class="li_global"><a class="a_global better" id="leetcode" href="https://leetcode.cn/" target="_blank">力扣</a></li>
    </ul>
  </div>

  <!-- 在线影视 -->
  <div class="div_global onlinemovies">
    <div class="title_global">在线影视//</div>
    <ul class="ul_global">
      <li class="li_global"><a class="a_global special" href="https://ddys.pro/" target="_blank"><del>低端影视</del></a></li>
      <li class="li_global"><a class="a_global special" href="https://xiaobaotv.com/" target="_blank">小宝影视</a></li>
    </ul>
  </div>

  <!-- Footer -->
  <div class="_footer" style="color:black!important">
    当前网站已在<a href="https://github.com/limbopro/Adblock4limbo/blob/main/Adblock4limbo.weblist" target="_blank">去广告计划</a>范围，如在此页面发现广告请及时反馈。
  </div>

</div>`;
}

/* ================ 使用方式 ================ */
// 直接调用（原函数名保持兼容）
window.dh_pageContainer_body_pre = initNavigationContainer;



var file = {
    javlibrary: "td.advsearch {display:none}#rightcolumn{right:90px;width:auto;} .videothumblist .videos {min-width:auto}  table.about td {width:auto!important} table.about td.desc {width:auto !important;min-width:0px!important} .titlebox {width:auto !important}.videothumblist.videos {width:auto !important} #leftmenu{max-width:90px;} div.videothumblist{overflow:scroll !important; overflow-x:hidden !important}iframe{display:none} table.about td {min-width:0px;} body.main{min-width:0px !important}\
    \
    ",
    global_css: '\
    .pointer-events-none {pointer-events:none !important;} .pointer-events-auto {pointer-events:auto;} .bottom-mobile {bottom:30%} .positiondh_buttonMain {position:static !important;} /*::-webkit-scrollbar {display: none;}*/ #dh_buttonContainer{top:20px; position:fixed;right:0px;z-index:114154;} .pc {bottom:0px;} .mobile {bottom:30%;} #dh_button {border-radius:0px; position:absolute!important;} div._header4tips > b {color:black;} ._header4tips{color:black;} #dh_buttonMain {height:520px;width:60px;position:relative; resize:vertical; overflow:scroll; opacity:1;} ._header {position:absolute;text-align:left;margin-bottom:-30px;background:transparent;z-index:-1 !important;bottom:-41px;padding-bottom:20px;font-size:small;font-weight:lighter;} .cmsnone {display:none; z-index:-114154; opacity:0 !important; pointer-events:none !important;} .crbhms {text-align:center;white-space:break-spaces;color:white !important; border-radius:0px;margin:1px;border:1px solid #1f2f47 !important;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;/*font-size:100% !important;*/padding-bottom:6px;padding-top:6px;text-decoration:none;text-shadow:0px 1px 0px #263666;} .a_global.moviesColor {font-weight:300;background:black;color:#01ff5f!important;box-shadow:inset 0px 0px 15px 3px black} .active { z-index:114154 !important; pointer-events:auto !important; opacity:1 !important; } img.nsfw {position:fixed;width:100%;} img.lockscreen {position:fixed;width:100%;} #nsfw_echo span.nsfw {position:fixed;top:60%;} #nsfw_echo { color:white;width:100%;height:100%} #nsfw { opacity:0.7; filter:blur(0.5px);filter: grayscale(1);z-index:114154;background:black;position:fixed;width:100%;height:100%;} .new_div_search{padding:20px;position:fixed;bottom:0%;} .close_search_button:hover {background-color:red;opacity:1 !important;} .close_search_button_csp{font-size:xxx-large;transition-property:opacity;transition-duration:666ms;right:2%;bottom:13%;position:fixed;width:108px;height:108px;background-size:100%;background-repeat:no-repeat;border-radius:50%;opacity:0.5;} .close_search_button_csp:hover {background-color:red;opacity:1 !important;}  .close_search_button {transition-property:opacity;transition-duration:666ms;right:2%;bottom:13%;position:fixed;width:108px;height:108px;background-image:url(https://limbopro.com/Adblock4limbo_google_close.png);background-size:100%;background-repeat:no-repeat;border-radius:50%;opacity:0.5;} .div_global.feedback{background:transparent;} .a_global.title_{background:blue !important;font-size:8px!important} a.a_global.better{/*background:#2e64bb !important;box-shadow:inset 0px 0px 15px 3px #10336d;*/} .boom {opacity:0.5;} a.a_global.red{background:#df0f0f !important;transition-property:opacity;transition-duration:2s;box-shadow:inset 0px 0px 15px 3px #E55B5B;} a.a_global.green{background:#688e4e !important; transition-property:opacity;transition-duration:2s;box-shadow:inset 0px 0px 15px 3px #688e4e;} a.a_global.special{background:#141d2f !important;transition-property:opacity;transition-duration:2s;},a .a_global#CloudflareSpeedtest{} a.a_global#jichangtuijian{background:#3d3843; opacity:0.8;box-shadow:inset 0px 0px 15px 3px #000000}.carousel-inner{z-index:0!important} a.a_global#common {background:#3764ac} .onlinemovies a {color:#f09636!important;} .a_global.xOnline {background:black;color:#f09636!important;box-shadow:inset 0px 0px 15px 3px black}  .cms_opacity {pointer-events:none !important;opacity:0} .cms {pointer-events:auto} div.closeX_Z{position:relative;text-align:right;z-index:1} div.closeX_W{position:relative;text-align: right;right:0px;top:0px;z-index:1} .scroll{position:absolute;width:110px;font-size:smaller;font-weight:lighter;padding-top:6px;color:#00000070;}button #dh_button{ bottom:32%; height:100px;background:red;opacity:1 !important;}.a_global.comics{background:#2a2146;box-shadow:inset 0px 0px 15px 3px #2a2146}.a_global.porn{background:#2a2146;box-shadow:inset 0px 0px 15px 3px #2a2146} div._footer a{color:#ffffff;font-weight:bolder;} div ._footer{position:absolute;text-align:left;margin-bottom:-30px;background:transparent;z-index:-1 !important;bottom:-41px;padding-bottom:20px;font-size:small;font-weight:lighter;} div#dh_pageContainer.dh_pageContainer_css{height:100% !important; width:100% !important;overscroll-behavior:none;top:0px;transition-property:opacity;transition-duration:999ms;margin:0px !important} div#dh_pageContainer.dh_pageContainer_css_0{transition-duration:0ms !important;margin:0px !important} div > button#xX{background-image:url("https://limbopro.com/Adblock4limbo_close.svg");transition-property:opacity;transition-duration:666ms;background-color:#542c3e;color:#ffffff;opacity:0.5 !important;border:0px;margin:0px;width:108px;height:108px;border-radius:0%;}div > button#xX:hover{background-color:red;opacity:1 !important;}div > button:active{background-color:red;}div .ellCloseX{display:contents; z-index:-1;margin:0px;position:initial;};span#nspan{margin:0px;font-weight:bolder !important;color:black !important;}div > div .fbt{color:#6064a2 !important;margin:0px;font-size:small;width:112px;padding-top:5px;padding-left:4px;padding-right:4px;} .echo{padding:0px 15px 0px 15px; display:flex;flex-wrap:wrap;justify-content:center;align-items:center;width:auto;font-size:15px;text-align:inherit;position:absolute;} ul > li > button{overflow:visible;width:106px !important;line-height:15px !important;} ul.ul_global > li > a{box-shadow:0 4px 12px rgba(0, 0, 0, 0.06); word-wrap:break-word;font-weight:lighter;overflow:visible;width:106px !important;font-size:15px !important;line-height:15px !important;}.li_global{display:flex; min-height:31px;font-size:medium;list-style:none;width:112px;}.ul_global{padding:0px;font-size:15px !important;height:258px;margin:0px;overflow:auto;width:auto;} .title_global{font-weight:bolder !important; padding-left:2px;display:table-cell;vertical-align:bottom;width:106px;height:50px;text-align:center;font-size:initial;margin-bottom:5px;font-weight:lighter;color:black !important;padding-bottom:4px;} .div_global{text-align:center;float:left;padding-top:31px;margin-bottom:29px;padding-left:0px;}.ellClose{text-align:center;float:left;padding-top:15px;margin-bottom:15px;padding-left:0px;}#dh_pageContainer{overflow-y:overlay;overflow-x:hidden;background-image:url("https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/Adblock4limbo_bgp.jpg");background-size:100% !important;background-repeat:round;margin:auto;width:200px;height:200px;z-index:-114154;opacity:0;background-color:transparent;position:fixed;top:50%;}.a_global{text-align:center;white-space:break-spaces;color:white !important;box-shadow:inset 0px 0px 15px 3px #23395e;background:linear-gradient(to bottom,#2e466e 5%,#415989 100% );background-color:#2e466e !important;border-radius:0px;margin:1px;border:1px solid #1f2f47 !important;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;/*font-size:100% !important;*/padding-bottom:6px;padding-top:6px;text-decoration:none;text-shadow:0px 1px 0px #263666;}.a_global:hover{background:linear-gradient(to bottom,#415989 5%,#2e466e 100%);background-color:#415989;}.a_global:active{position:relative;top:1px;}\
    '
}

/**
 * 向 <head> 中添加或更新内联样式
 * @param {string} css - 要注入的 CSS 字符串
 * @param {string} [id='custom-style'] - style 元素的 ID（用于防重）
 */

function css_add(css, id = 'custom-style') {
    if (typeof css !== 'string' || !css.trim()) return;

    const head = document.head || document.getElementsByTagName('head')[0];
    if (!head) return;

    let styleEl = document.getElementById(id);

    if (styleEl) {
        // 已存在：更新内容（避免重复插入）
        styleEl.textContent = css;
    } else {
        // 不存在：创建并插入
        styleEl = document.createElement('style');
        styleEl.id = id;
        styleEl.textContent = css;
        head.appendChild(styleEl); // 推荐：追加到末尾，优先级更高
    }
}

/**
 * 动态加载外部 CSS 文件（<link rel="stylesheet">）
 * @param {string} cssUrl - 外部 CSS 文件的 URL
 * @param {string} [id='external-style'] - link 元素的 ID（用于防重）
 */


function css_url_add(cssUrl, id = 'external-style') {
    if (typeof cssUrl !== 'string' || !cssUrl.trim()) return;

    const head = document.head || document.getElementsByTagName('head')[0];
    if (!head) return;

    // 防重复：如果已存在同 ID 的 link，则直接返回（或可选择更新 href）
    let linkEl = document.getElementById(id);
    if (linkEl) {
        // 可选：更新 href（支持热替换）
        if (linkEl.href !== cssUrl) {
            linkEl.href = cssUrl + (cssUrl.includes('?') ? '&' : '?') + '_t=' + Date.now(); // 强制刷新缓存
        }
        return;
    }

    // 创建并插入 <link>
    linkEl = document.createElement('link');
    linkEl.id = id;
    linkEl.rel = 'stylesheet';
    linkEl.type = 'text/css';
    linkEl.href = cssUrl;

    // 可选：加载成功/失败回调
    linkEl.onload = () => console.log(`CSS loaded: ${cssUrl}`);
    linkEl.onerror = () => console.warn(`Failed to load CSS: ${cssUrl}`);

    head.appendChild(linkEl);
}

css_add(file.global_css, 'dh_pageContainer_style'); // 在body后面插入 css


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
    //a.id = 'sample';
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
    //a.id = 'sample';
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


var selector = { // css 定义选择器
    body_css_real: ["div.dh_pageContainer_css", 'common'],
    body_css: ["div#dh_pageContainer.dh_pageContainer_css", 'common'],
    footer: ["div._footer", 'common'],
}

function initFloatingNav(opacity, zIndex, switchX, pointevents = '') {
    //console.log("// body_build() 输入为 true，开始创建导航..." + " 透明度为 " + opacity + " 层级数目为 " + zIndex)
    if (!document.querySelector('div#dh_pageContainer[style]')) { // 如果导航不存在则生成
        dh_pageContainer_body_pre(); // 生成导航
        let parentElement = document.getElementById('dh_pageContainer');
        parentElement.style.zIndex = zIndex;
        parentElement.style.opacity = opacity;
        parentElement.style.pointerEvents = pointevents;
        //body_align("dh_pageContainer");// 初始化导航大小
        //body_bgp_switch(); // 设置背景图片
        //boom();
    } else {
        //boom();
        let parentElement = document.getElementById('dh_pageContainer');
        parentElement.style.zIndex = zIndex + 1;
        parentElement.style.opacity = opacity;
        parentElement.style.pointerEvents = pointevents;
        //body_align("dh_pageContainer");// 初始化导航大小
        //body_bgp_switch(); // 设置背景图片
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
        initFloatingNav(1, 114154, 1, 'auto')

    } else if (x == "false") {
        initFloatingNav(0, -114154, 1, 'none')
        setTimeout(() => {
        }, 750)
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
            document.querySelector("div#dh_pageContainer").style.backgroundImage = `url(${url_w})`;
        } else {
            document.querySelector("div#dh_pageContainer").style.backgroundImage = `url(${url_h})`;
        }
    } else {
        document.querySelector("div#dh_pageContainer").style.backgroundColor = '#dfdfdf';
        document.querySelector("div > button#xX").textContent = 'X';
        document.querySelector("div > button#xX").style = 'font-size:-webkit-xxx-large;border-radius:50%;';
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

var parentNodeX = [['Cloudflare', 'https://speed.cloudflare.com/', '_blank', '0', 'better'], // 测速工具
['SpeedTest', 'https://www.speedtest.net/', '_blank', '0', 'common'],
['FANZA|R18成人站', 'https://www.dmm.co.jp/', '_blank', 'porn', 'better'],
['溜池ゴロー', 'https://tameikegoro.jp/', '_blank', 'porn', 'better'],
['s1s1s1 S1/エスワンー', 'https://s1s1s1.com/', '_blank', 'porn', 'better'],
['VENUSーＳ級熟女メーカ|Ｓ級熟女メーカー', 'https://venus-av.com/', '_blank', 'porn', 'special'],
['SOD（ソフトオンデマンド）', 'https://www.sod.co.jp/', '_blank', 'porn', 'special'],
['Glory Questー「禁断介護」や逆ショタ元祖', 'https://www.gloryquest.tv/', '_blank', 'porn', 'special'],
['ながえSTYLE(NTR)', 'https://www.nagae-style.com/', '_blank', 'porn', 'common'],
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
['HHH(トリプルエイチ)| AVメーカ', 'https://hhh-av.com/top/', '_blank', 'porn', 'common'],
['痴女ヘブンのトップページ| AVメーカ', 'https://bi-av.com/top', '_blank', 'porn', 'common'],
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
['infoq', 'https://www.infoq.cn/', '_blank', 'Developer', 'special'],
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
['今晚看什么？', 'https://limbopro.com/tools/jwksm/', '_blank', 'xOnline', 'special'],
['Jable', 'https://jable.tv/', '_blank', 'xOnline', 'special'],
['Missav', 'https://missav.ws/cn/', '_blank', 'xOnline', 'special'],
['Supjav', 'https://supjav.com/zh/', '_blank', 'xOnline', 'special'],
['Javbus', 'https://www.javbus.com/', '_blank', 'xOnline', 'special'],
//['Jav.land', 'https://jav.land/', '_blank', 'xOnline', 'special'],
['JavLibrary', 'https://www.javlibrary.com/cn/', '_blank', 'xOnline', 'better'],
['Pornhub', 'https://cn.pornhub.com/', '_blank', 'xOnline', 'better'],
['Xvideos', 'https://www.xvideos.com/', '_blank', 'xOnline', 'better'],
['Javday', 'https://javday.tv/', '_blank', 'xOnline', 'better'],
['Njav', 'https://24av.net/', '_blank', 'xOnline', 'better'],
['hanime1', 'https://hanime1.me/comics', '_blank', 'xOnline', 'common'],
['认知偏差手册', 'https://s75w5y7vut.feishu.cn/docs/doccn3BatnScBJe7wD7K3S5poFf#RirzLG', '_blank', 'knowledge', 'common'],
['Bash 教程', 'https://wangdoc.com/bash/', '_blank', 'knowledge', 'common'],
['SSH 教程', 'https://wangdoc.com/ssh/', '_blank', 'knowledge', 'common'],
['Vim从入门到精通', 'https://limbopro.com/archives/31058.html', '_blank', 'knowledge', 'common'],
['网站状态检测', 'https://check-host.net/check-http?host=https://limbopro.com', '_blank', 'ipcheck', 'special'],
['IP.SB', 'https://ip.sb/', '_blank', 'ipcheck', 'common'],
['BGP Toolkit ', 'https://bgp.he.net/', '_blank', 'ipcheck', 'common'],
['Baidu', 'https://www.baidu.com/', '_blank', 'ipcheck', 'common'],
['Google', 'https://www.google.com/', '_blank', 'search', 'special'],
['Bing', 'https://www.bing.com/', '_blank', 'search', 'common'],
['DuckDuckGo', 'https://duckduckgo.com/', '_blank', 'search', 'common'],
['Yahoo!）', 'https://hk.yahoo.com/?p=us', '_blank', 'search', 'common'],
['搜狗搜索', 'https://www.sogou.com/', '_blank', 'search', 'common'],
['Baidu', 'https://www.baidu.com/', '_blank', 'search', 'common'],
['Grok', 'https://grok.com/', '_blank', 'AICHAT', 'special'],
['Google Bard', 'https://bard.google.com/?hl=en', '_blank', 'AICHAT', 'special'],
['Github Copilot', 'https://github.com/copilot', '_blank', 'AICHAT', 'special'],
['ChatGPT', 'https://chat.openai.com/auth/login', '_blank', 'AICHAT', 'better'],
['Bing AI', 'https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx', '_blank', 'AICHAT', 'better'],
['Claude.ai', 'https://claude.ai/', '_blank', 'AICHAT', 'better'],
["在线正则表达式测试", 'https://tool.oschina.net/regex/', '_blanl', 'Tools', 'special'],
['在线文件格式转换器', 'https://convertio.co/zh/', '_blank', 'Tools', 'common'],
['PDF在线转换', 'https://www.ilovepdf.com/zh-cn', '_blank', 'Tools', 'common'],
['iconfont', 'https://www.iconfont.cn/', '_blank', 'Tools', 'common'],
['hitomi', 'https://hitomi.la/index-chinese.html', '_blank', 'comic18', 'special'],
['jcomic', 'https://jcomic.net/', '_blank', 'comic18', 'special'],
['绅士漫画', 'https://www.wnacg.com/', '_blank', 'comic18', 'common'],
['嗶咔picacg免費網頁版', 'https://manhuapica.com/', '_blank', 'comic18', 'common'],
['E-Hentai', 'https://e-hentai.org/', '_blank', 'comic18', 'common'],
['禁漫天堂', 'https://18comic.vip/', '_blank', 'comic18', 'common'],
['肉漫', 'https://www.rouman5.com/', '_blank', 'comic18', 'better'],
['dlsite', 'https://www.dlsite.com/books/', '_blank', 'comic18', 'better'],
['博客优化', 'https://limbopro.com/category/builder/', '_blank', 'seoandmore', 'special'],
['博客防御', 'https://limbopro.com/tag/Cloudflare/', '_blank', 'seoandmore', 'common'],
['苦瓜书盘', 'https://kgbook.com/', '_blank', 'bookreadanddownload', 'common'],
['Library Genesis', 'https://www.libgen.is/', '_blank', 'bookreadanddownload', 'special'],
['Z-library', 'https://limbopro.com/archives/30553.html', '_blank', 'bookreadanddownload', 'special'],
['JavaScript高级程序设计', 'https://t.me/limboprossr/2812', '_blank', 'front-end', 'common'],
['CSS教程', 'https://www.runoob.com/css/css-tutorial.html', '_blank', 'front-end', 'common'],
['w3school 在线教程', 'https://www.w3school.com.cn/index.html', '_blank', 'front-end', 'common'],
['M3U8下载?(Porn/Jable..)', 'https://limbopro.com/archives/M3U8-Downloader.html', '_blank', 'dload', 'common'],
['Twitter 视频下载(油猴脚本)', 'https://limbopro.com/archives/27446.html#%E8%84%9A%E6%9C%AC%E7%9A%84%E5%AE%89%E8%A3%85%E4%B8%8E%E4%BD%BF%E7%94%A8', '_blank', 'dload', 'common'],
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
//['xb1', 'https://www.xb1.com/', '_blank', 'movies', 'better'],
['iyf爱壹帆', 'https://www.iyf.tv/', '_blank', 'movies', 'better'],
['🆕努努影院', 'https://nnyy.la/', '_blank', 'movies', 'better'],
['欧乐影视', 'https://www.olevod.tv/', '_blank', 'movies', 'special'],
//['CN影视', 'https://cnys.tv/', '_blank', 'movies', 'better'],
//['影视TV', 'https://yingshi.tv/', '_blank', 'movies', 'better'],
['剧迷网', 'https://gimy.com.tw/', '_blank', 'movies', 'better'],
['Raining FM', 'https://raining.fm/', '_blank', 'imusic', 'better'],
['SoundCloud', 'https://soundcloud.com/', '_blank', 'imusic', 'better'],
['Spotify', 'https://open.spotify.com/', '_blank', 'imusic', 'special'],
['YT Music', 'https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ', '_blank', 'imusic', 'special'],
['网易云音乐', 'https://music.163.com/', '_blank', 'imusic', 'better'],
['QQ音乐', 'https://y.qq.com/', '_blank', 'imusic', 'better'],
['酷狗音乐', 'https://www.kugou.com/', '_blank', 'imusic', 'better'],
['酷狗音乐', 'https://www.kugou.com/', '_blank', 'imusic', 'better'],
['炼码', 'https://www.lintcode.com/', '_blank', 'cheeseispower', 'better'],
['菜鸟教程', 'https://www.runoob.com/', '_blank', 'cheeseispower', 'better'],
['w3cschool', 'https://www.w3school.com.cn/', '_blank', 'cheeseispower', 'better'],
['Stackoverflow', 'https://stackoverflow.com/', '_blank', 'cheeseispower', 'better'],
['Github', 'https://github.com/', '_blank', 'cheeseispower', 'better'],
];

var click_count = 0;

document.addEventListener("keydown", function (event) {
    if (event.code === "Escape") {
        click_count = ++click_count;
        console.log(click_count + "次ESC点击次数");
        // 执行你想要的操作
        // 监听键盘事件 ESC

        if (!(document.querySelector('div#nsfw') === null) && !(document.querySelector('div#nsfw').style === null) && !(document.querySelector('div#nsfw').getAttribute('style') === null) && (document.querySelector('div#nsfw').getAttribute('style').search('-114') == -1) && document.querySelector('img.lockscreen') == null && click_count == 1) {
        } else if ((document.querySelector('div[data-chat-status="ongoing"]') && (document.querySelector('div[data-chat-status="ongoing"]').getAttribute('data-visible') == 'true')) || document.querySelector('div[data-chat-status="initial"]') && (document.querySelector('div[data-chat-status="initial"]').getAttribute('data-visible') == 'true') && click_count == 1) {
        } else if (typeof body_build == 'function' && document.querySelector("#dh_pageContainer").style.zIndex > 0 && click_count == 1) {
            body_build('false');
        } else if ((document.querySelector("#dh_button").style.height == "0%") && click_count == 1) {
            setTimeout(() => {
            }, 1000)
        } else if (typeof body_build == 'function' && document.querySelector("#dh_pageContainer").style.zIndex < 0 && click_count == 2 && (document.querySelector('div#nsfw') == null || document.querySelector('div#nsfw').style.zIndex < 0)) {
            body_build('true')  // 如果按钮出现，且其他如搜索不存在则可唤出导航页面
        } else if (typeof body_build == 'function' && document.querySelector("#dh_pageContainer").style.zIndex > 0 && click_count == 3) {
            //lock_screen_switch();
        }
    }

    if (event.code === 'Enter' && document.querySelector('input.lockscreen') !== null) {
        screen_unlock(); // 验证密码
    }


    setTimeout(() => {
        click_count = 0;
    }, 500);

});


/**
 * 初始化父容器：隐藏导航 + 空白点击关闭 + 动态生成菜单
 */

function parentElement_add() {

    // 1. 初始化状态 (保持不变)
    initFloatingNav(0, -114154, 1, 'none');
    body_build('false');

    // 2. 缓存核心 DOM 节点 (保持不变)
    const echoDiv = document.querySelector('div.echo');
    const pageContainer = document.getElementById('dh_pageContainer');
    if (!echoDiv || !pageContainer) return;

    // --- 3. 新增状态变量和计时器 ---
    let blankClickCount = 0; // 跟踪在空白区域的点击次数
    let clickTimeoutId = null; // 用于存储计时器的 ID

    // 定义时间限制为 1000 毫秒 (1 秒)
    const DOUBLE_CLICK_TIME_LIMIT = 750;

    // 4. 空白点击 (1秒内双击) → 关闭导航
    echoDiv.addEventListener('click', function (e) {

        // A. 导航未打开 或 点击了菜单按钮，重置并退出
        if (pageContainer.style.zIndex <= 0 || e.target.closest('li.li_global')) {
            // 清除并重置任何未完成的计时和计数
            clearTimeout(clickTimeoutId);
            blankClickCount = 0;
            return;
        }

        // B. 清除上次的计时器（如果有）
        // 这允许用户在计时器结束前进行第二次点击
        clearTimeout(clickTimeoutId);

        // C. 增加计数
        blankClickCount++;

        // D. 检查是否达到两次点击
        if (blankClickCount === 2) {
            // 双击成功，执行关闭操作
            body_build('false');

            // 关键：关闭后，必须重置计数器和计时器
            blankClickCount = 0;
            clickTimeoutId = null; // 确保 ID 被清除
            return;
        }

        // E. 第一次点击：设置新的计时器
        if (blankClickCount === 1) {
            clickTimeoutId = setTimeout(() => {
                // 如果 1000ms 到了，但第二次点击没有发生，则重置计数
                blankClickCount = 0;
                clickTimeoutId = null;
            }, DOUBLE_CLICK_TIME_LIMIT);
        }
    });

    // 4. 菜单数据配置（集中管理，保持原样）
    const PARENT_MENU_ITEMS = [
        ['imusic', 4, '在线音乐//', 'imusic'],
        ['xOnline', 4, '午夜惊魂//', 'xOnline'],
        ['PornMaker', 4, '著名片商//', 'porn'],
        ['comic18', 4, '漫画//', 'comic18'],
        ['Tools', 4, '多宝盒//', 'Tools'],
        ['bookreadanddownload', '4', '电子书//', 'bookreadanddownload'],
        ['dload', 4, '下载工具//', 'dload'],
        ['Search', 4, '搜索引擎//', 'search'],
        ['Social', 4, '社交媒体//', 'Social'],
        ['Media', 4, '流媒体//', 'Media'],
        ['AICHAT', 4, '智能AI//', 'AICHAT'],
        ['aigc', 4, 'AIGC//', 'aigc'],
        ['news', '10', '时事新闻//', 'currentnews'],
        ['technews', '10', '科技新闻//', 'technews'],
        ['writer', '10', '广告与写作//', 'writer'],
        ['seoandmore', 4, '建站指北//', 'seoandmore'],
        ['front-build', 4, '建站工具//', 'front-build'],
        ['domain-buy', 4, '域名注册商//', 'domain-buy'],
        ['DeverloperX', 4, '开发者社区//', 'Developer'],
        ['Images', 4, '免费商用图片', 'IMages']
    ];

    const CHILD_MENU_ITEMS = [
        ['.div_global.front > ul', '', '', 'front-end', 0, '', 'a_global'], // 前端开发
        ['.div_global.boysshouldread > ul', '', '', 'knowledge', 0, '', 'a_global'], // 男孩子必读
        ['.div_global.ipcheck > ul', '', '', 'ipcheck', 1, '', 'a_global'], // 网络检测
        ['.div_global.onlinemovies > ul', '', '', 'movies', '#xbys', '', 'a_global moviesColor'], // 在线影视
        ['.div_global.leetcode > ul', '', '', 'cheeseispower', 0, '', 'a_global']  // 保持原样
    ];

    // 5. 菜单生成逻辑（仅执行一次）
    const generateMenu = () => {
        const container = document.querySelector('div#dh_pageContainer[style]');
        if (!container) return false;

        // 生成父级菜单
        PARENT_MENU_ITEMS.forEach(([key, count, title, id]) => {
            parent_push('.echo', key, count, title, id);
        });


        // 生成子级菜单
        CHILD_MENU_ITEMS.forEach(([sel, , , id, p5, , cls]) => {
            child_push(sel, '', '', id, p5, '', cls);
        });

        // 执行后续初始化函数
        scroll_switch();
        _footer_move();
        csp_remove();

        return true;
    };

    // 6. 轮询等待容器就绪（500ms，命中即停）
    const timer = setInterval(() => {
        if (generateMenu()) {
            clearInterval(timer);
        }
    }, 500);
}


// 移动 echo div._footer 位置
function _footer_move() {
    let target = document.querySelector('.echo')
    let child = document.querySelector('div._footer')
    target.appendChild(child)
}

// 执行父容器初始化
parentElement_add();


// 监听事件

window.addEventListener('load', function () {
    // 监听指定按钮的点击事件
    document.getElementById('nsfwmode_switch').addEventListener('click', function () {
        const buttonText = this.textContent.trim();

        if (buttonText.includes('非成人')) {
            alert('似乎该网站不是成人网站！去网页广告计划的一些功能不会在该网站执行！');
        } else {
            alert('该网站似乎是成人网站！去网页广告计划的一些功能将在该网站执行！');
        }
    });

});


function nsfwmode(x) { // 是否开启
    if (x == 'false') {
        setCookie('nsfwmode', 'false', '400');
        setTimeout(() => { nsfwmode_check() }, 100)
    } else if (x == 'true') {
        setCookie('nsfwmode', 'true', '400');
        setTimeout(() => { nsfwmode_check() }, 100)
    } else if (getCookie('nsfwmode') == 'false') {
        setCookie('nsfwmode', 'true', '400');
        setTimeout(() => { nsfwmode_check() }, 100)
    } else if (getCookie('nsfwmode') == 'true') {
        setCookie('nsfwmode', 'false', '400');
        // visibility('false');
        setTimeout(() => { nsfwmode_check() }, 100)
    } else if (getCookie('nsfwmode') == '') {
        setCookie('nsfwmode', 'false', '400');
        // visibility('false');
        setTimeout(() => { nsfwmode_check() }, 100)
    }
}

nsfwmode_check();

function nsfwmode_check() {

    if (getCookie('nsfwmode') == 'true' && nsfw_regex.test(document.location.href)) {
        if (document.getElementById('nsfwmode_switch')) {
            document.getElementById('nsfwmode_switch').textContent = '成人保护模式(ON)';
            console.log('该网站为成人🔞网站！现已开启成人保护模式！')
            document.getElementById('nsfwmode_switch').style.background = 'green';
            setTimeout(() => {
                body_build('false');

                if (typeof (znsh_ele_create) !== 'undefined') {
                    if (sessionStorage.getItem('click2show') !== 'true') {
                        znsh_ele_create();
                    }

                    console.log('直接显示安全🔐模式...')
                }

            }, 1000)
        }

    } else if (getCookie('nsfwmode') == 'false' && nsfw_regex.test(document.location.href)) {
        if (document.getElementById('nsfwmode_switch') !== null) {
            document.getElementById('nsfwmode_switch').textContent = '成人保护模式(OFF)';
            console.log('该网站为成人🔞网站！现已（手动）关闭成人保护模式！')
            document.getElementById('nsfwmode_switch').style.background = 'red';
            setTimeout(() => {
                body_build('false');
            }, 1200)
        }

    } else if (getCookie('nsfwmode') == '' && nsfw_regex.test(document.location.href)) {

        function valuefromDefault(x) {
            if (document.getElementById('nsfwmode_switch') !== null) {
                if (x == 'false' || x == '') {
                    nsfwmode('false');
                } else {
                    nsfwmode('true')
                }

            }
        }

        valuefromDefault(getCookie('adultMode'));

    } else {
        if (document.getElementById('nsfwmode_switch')) {
            document.getElementById('nsfwmode_switch').textContent = '非成人网站!';
            document.getElementById('nsfwmode_switch').style.background = 'green';
            console.log('该网站非成人🔞网站！')
        }
    }

}



// 设置 cookie 饼
function setCookie(cname, cvalue, exdays) { var d = new Date(); d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); var expires = "expires=" + d.toGMTString(); document.cookie = cname + "=" + cvalue + "; path=/;" + expires; }

function getCookie(cname) {
    var name = cname + "="; var ca = document.cookie.split(';'); for (var i = 0; i < ca.length; i++) { var c = ca[i].trim(); if (c.indexOf(name) == 0) return c.substring(name.length, c.length); }
    return "";
}

var click_sum = 0;

function daohangMode_switch(x) {
    if (x == 'hidden') {
        setCookie("daohangMode_yourChoice", 'hidden', 400);
        // document.querySelector('button#dh_button').classList.add('cms_opacity');
        document.querySelector('button#dh_button').setAttribute("class", "cmsnone " + bottom());
        document.querySelector('#dh_buttonContainer').setAttribute("class", "cmsnone");
        _button_button('hidden'); // 隐藏按钮
        document.querySelector('button#hidedaohang').textContent = "导航按钮(OFF)"
        // document.querySelector('button#hidedaohang').textContent = "点击显示导航按钮"
        document.querySelector('button#hidedaohang').style.background = 'red'

        if (click_sum++ == -1) { // 引导用户使用快捷方式唤起导航🧭详情页
            alert('已隐藏页面右下角的导航按钮；(快捷唤起导航🧭页面)的方法? -> 1秒内，电脑用户(连续敲击2次ESC键)，iOS用户(在页面空白处连续点击4次及以上)')
        }

        setTimeout(() => {
            body_build('false')
        }, 1500)

    } else if (x == 'show') {
        setCookie("daohangMode_yourChoice", 'show', 400);
        // document.querySelector('button#dh_button').classList.remove('cms_opacity');
        document.querySelector('button#dh_button').setAttribute("class", "cms " + bottom());
        document.querySelector('#dh_buttonContainer').setAttribute("class", "cms pointer-events-none");
        document.querySelector('button#hidedaohang').textContent = "导航按钮(ON)"
        // document.querySelector('button#hidedaohang').textContent = "点击隐藏导航按钮"
        document.querySelector('button#hidedaohang').style.background = 'green'
        _button_button('1') // 显示按钮

        setTimeout(() => {
            body_build('false')
        }, 2000)


    } else if (getCookie("daohangMode_yourChoice") == '' || getCookie("daohangMode_yourChoice") == 'hidden') {
        daohangMode_switch('show')
    } else if (getCookie("daohangMode_yourChoice") == 'show') {
        daohangMode_switch('hidden')
    }
}


// 判断当前 URL 是否为 Google
if (!/^https?:\/\/(www\.)?(google|bing|baidu)\.(com|cn|hk|co\.[a-z]{2}|[a-z]{2})\/.*/i.test(location.href)) {
    initLimoProSearch();
}

// 划词搜索状态切换
// 获取按钮
// Start of huacisousuo toggle code
const btn = document.getElementById('huacisousuo'); // 划词切换按钮
// 状态切换函数
function toggleSearchState() {
    const searchPro = document.getElementById('limbopro-search-pro'); // 搜索框容器
    const isOn = btn.dataset.state === 'on';

    if (isOn) {
        // 关闭：OFF + 红色 + false
        btn.textContent = '划词搜索(OFF)';
        btn.style.backgroundColor = 'red';
        btn.dataset.state = 'off';
        localStorage.setItem('huacisousuo', 'false');
        searchPro.setAttribute("class", "cmsnone"); // 隐藏
        setTimeout(() => {
            body_build('false')
        }, 1500)
    } else {
        // 开启：ON + 绿色 + true
        btn.textContent = '划词搜索(ON)';
        btn.style.backgroundColor = 'green';
        btn.dataset.state = 'on';
        localStorage.setItem('huacisousuo', 'true');
        searchPro.setAttribute("class", "cms"); // 显示
        setTimeout(() => {
            body_build('false')
        }, 1500)
    }
}

// 点击事件
btn.addEventListener('click', toggleSearchState);

// 页面加载时恢复状态


function waitForElement(selector, callback) {
    function check() {
        const el = document.querySelector(selector);
        if (el) {
            callback(el);
        } else {
            requestAnimationFrame(check);
        }
    }
    check();
}

waitForElement('#limbopro-search-pro', (el) => {
    console.log('元素就绪:limbopro-search-pro', /*el*/);
    console.log('恢复划词搜索状态中...');
    const searchPro = document.getElementById('limbopro-search-pro'); // 搜索框容器
    const saved = localStorage.getItem('huacisousuo');

    if (saved === 'true' || saved === null) {
        btn.textContent = '划词搜索(ON)';
        btn.style.backgroundColor = 'green';
        btn.dataset.state = 'on';
        searchPro.setAttribute("class", "cms");
        console.log('划词搜索已开启');
    } else {
        // 默认或 saved === 'false' 或 null
        btn.textContent = '划词搜索(OFF)';
        btn.style.backgroundColor = 'red';
        btn.dataset.state = 'off';
        searchPro.setAttribute("class", "cmsnone");
        console.log('划词搜索已关闭');
    }
});


// End of huacisousuo toggle code


// 隐藏按钮选项 1 一天

if (getCookie("daohangMode_yourChoice") == 'hidden' && document.querySelector('button#dh_button') !== null) {
    daohangMode_switch('hidden')
} else if (getCookie("daohangMode_yourChoice") == 'show' && document.querySelector('button#dh_button') !== null) {
    daohangMode_switch('show')
    console.log(click_sum--)
} else if (getCookie("daohangMode_yourChoice") == '' && (getCookie("daohangMode_global") == 'false' || getCookie("daohangMode_global") == '') && document.querySelector('button#dh_button') !== null) {
    daohangMode_switch('hidden')
} else if (getCookie("daohangMode_global") == 'true' && document.querySelector('button#dh_button') !== null) {
    daohangMode_switch('show')
    console.log(click_sum--)
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
    div_sample(parentNode, insertBefore_that_element, switchX, child_css_change);
    parentElement_inner(parentNode, '.title_global', title, child_css_change); // 该标题改属性
    parentElement_push(parentNode, category, child_css_change, insertBefore_that_element, switchX)
}

/**
 * 举例//
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
function child_inner(div_global_selector, length, array, category, insertBefore_that_element, switchX, color) {
    //let arrayX = parentNodeX;
    if (parentNodeX[length][3] == category) { // 如果类目匹配则执行
        //child_build(div_global_selector); // 開始复制子元素
        li_sample(div_global_selector, insertBefore_that_element, switchX);
        document.querySelector(div_global_selector).lastElementChild.querySelector('a').textContent = parentNodeX[length][0] // 開始修改其內容
        document.querySelector(div_global_selector).lastElementChild.querySelector('a').href = parentNodeX[length][1] // 開始需改其鏈接
        document.querySelector(div_global_selector).lastElementChild.querySelector('a').target = parentNodeX[length][2] // 開始修改其目標
        document.querySelector(div_global_selector).lastElementChild.querySelector('a').classList.add("a_global") // 開始修改其类
        document.querySelector(div_global_selector).lastElementChild.querySelector('a').classList.add(parentNodeX[length][4]) // 開始修改其类
    }
}

function child_push(div_global_selector, length, array, category, insertBefore_that_element, switchX, color) {
    for (i = 0; i < parentNodeX.length; i++) {
        child_inner(div_global_selector, i, array, category, insertBefore_that_element, switchX, color); // 替换子元素内容
    }


}


let ads_css = '.ad_img {display:none! important; pointer-events: none !important;}\
'
function ads_remove(selector) {
    document.querySelectorAll(selector).forEach((x) => { x.remove() })
    css_add(ads_css, "fuckads")
}


// 动态创建并引用外部资源 外部样式表 外部脚本
function thrd_party_file(tagname, url, where, id) {
    const ele_New = document.createElement(tagname);
    // script
    if (tagname == "script") {
        ele_New.type = "text/javascript";
        ele_New.src = url;
        ele_New.id = id;
        ele_New.setAttribute('async', '')
        // link
    } else if (tagname == "link") {
        ele_New.rel = "stylesheet";
        ele_New.type = "text/css";
        ele_New.href = url;
        ele_New.id = id;
    }
    if (where == "body") {
        document.body.appendChild(ele_New);
    } else if (where == "head") {
        document.head.appendChild(ele_New);
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


// 复制 input 内容
function copyText(id1, id2, Text) { // 复制文本按钮
    let color = { // 定义常量
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

    // 现代复制方法

    const input = document.querySelectorAll("input#copy");
    input[0].select()
    document.execCommand('copy')


    // 旧版复制方法

    /*
    const range = document.createRange(); range.selectNode(input[0]); const selection = window.getSelection();
    if (selection.rangeCount > 0) selection.removeAllRanges(); // 判断光标是否复制其他内容 如有则清除
    selection.addRange(range); document.execCommand('copy');
    */
    // 复制工作结束

    ele_2.innerText = "复制成功！";
    ele_2.style.backgroundColor = color.css.backgroundColor_copied;


    border_color(ele_array, color.css.borderRight_copied)
    setTimeout(() => {
        ele_2.innerText = Text;
        ele_2.style.backgroundColor = color.css.backgroundColor_recover;
        border_color(ele_array, color.css.borderRight_recover)
    }, 3000);

    // 取消文本选中
    window.getSelection().removeAllRanges();
    // 移除焦点，防止键盘弹出
    document.activeElement.blur();
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

// 在番号详情页追加在线预览链接
function tmd(parentSelector, code, titleText) {
    const formattedCode = code.replace(/-/g, '00');

    function createSearchLinks() {
        // Creates search links for various platforms

        const parentElement = document.querySelectorAll(parentSelector)[0];

        const container = document.createElement('p'); // 创建容器
        container.id = 'previewContainer';
        container.style = 'margin:10px 0px 10px 0px; border-left:6px solid #38a3fd; font-size:14px; border-radius: 4px !important; box-shadow: rgb(151, 151, 151) 0px 0px 0px 0px inset; background:#10141f; color:chocolate; padding:0px 0px 0px 0px; word-break:break-all; border-radius:0px 0px 0px 0px';

        const content = document.createElement('p'); // 创建内容包装器
        content.style = 'gap:3px; margin-bottom: 0px;display: flex;flex-wrap: wrap;justify-content: flex-start;align-items: center;text-align: left;font-weight: inherit;padding: 6px;word-break: break-all;font-size: inherit;border-radius: 0px;';
        content.id = 'contentWrapper';

        container.appendChild(content); // 追加内容包装器到容器
        parentElement.insertAdjacentElement('afterend', container);

        const title = document.createElement('span'); // 创建标题
        title.style = 'font-weight:bolder; font-size:medium; color:bisque;';
        title.textContent = titleText;
        content.appendChild(title);

        function addLinkToContainer(siteName, baseUrl, searchCode) { // 添加链接到容器
            const link = document.createElement('a');
            const label = document.createElement('label');
            label.style = 'font-weight:inherit; display:inline-block; max-width:100%; margin-right:10px;margin-bottom:0px;';
            link.href = baseUrl + searchCode;
            link.textContent = siteName;
            link.target = '_blank';
            link.style = 'color:inherit; font-weight:inherit';
            label.appendChild(link);
            content.appendChild(label);
        }

        addLinkToContainer('MissAV[720P]', 'https://missav.ws/search', '/' + code); // 添加各个搜索链接
        addLinkToContainer('Jable[HD]', 'https://jable.tv/search', '/' + code + '/');
        addLinkToContainer('Supjav[ultraHD]', 'https://supjav.com/?s=', code);
        addLinkToContainer('番号搜索[聚合]', 'https://limbopro.com/btsearch.html#gsc.tab=0&gsc.q=', code + '&gsc.sort=');
        addLinkToContainer('谷歌搜索🔍', 'https://www.google.com/search?q=', code);
        addLinkToContainer('Javbus📖', 'https://www.javbus.com/search/', code + '&type=&parent=ce');
        addLinkToContainer('DMM🇯🇵', 'https://video.dmm.co.jp/av/list/?key=', formattedCode);
        addLinkToContainer('🔞今晚看什么呢？', 'https://limbopro.com/tools/jwksm/', '');

        console.log('Online preview links generated 🔗');
    }

    if (!document.querySelector('#previewContainer')) {
        console.log('Generating online preview links...');
        createSearchLinks(); // 调用函数创建搜索链接
    }
}


// start filter
thrd_party_file('script', 'https://limbopro.com/Adguard/filter.user.js', 'head', 'wtf') // 加载过滤脚本
// end filter


// ==UserScript==
// @name         Limbopro 网页划词搜索神器（移动端兼容版/划词番号搜索/影视搜索/谷歌搜索）
// @namespace    https://limbopro.com
// @version      1.2
// @description  【Limbopro 网页划词搜索神器】移动端 & PC 完美适配：选中文字 → 右侧悬浮面板（谷歌搜索🔍/影视搜索🎬/番号搜索🔞），不闪退、持久悬停；支持深色模式、丝滑动画、自动防重叠定位，按 Escape 或点击空白即可隐藏。
// @author       limbopro & Grok
// @match        https://*/*
// @icon         https://limbopro.com/favicon.ico
// @grant        none
// @license MIT
// @run-at       document-idle
// ==/UserScript==


// blog: https://limbopro.com/
// Tg: https://t.me/limboprossr

function initLimoProSearch() {
    if (window.limboproSearchPro) {
        console.log('划词搜索已存在');
        return;
    }
    window.limboproSearchPro = true;

    /* ---------- 配置区 ---------- */
    const buttons = [
        { text: '使用谷歌搜索', color: '#0ea5e9' },
        { text: '使用影视搜索', color: '#8b5cf6' },
        { text: '使用番号搜索', color: '#c42a4e' },
        // 新增：设置按钮（放在番号搜索后面）
        { text: '划词搜索设置', color: '#6b7280', isSettings: true }
    ];

    const urls = [
        'https://www.google.com/search?q=',
        'https://limbopro.com/search.html#gsc.tab=0&gsc.q=',
        'https://limbopro.com/btsearch.html#gsc.tab=0&gsc.q=',
        null   // settings 占位
    ];
    /* --------------------------- */

    const container = document.createElement('div');
    container.id = 'limbopro-search-pro';
    Object.assign(container.style, {
        position: 'absolute',
        zIndex: '2147483647',
        display: 'none',
        pointerEvents: 'none',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
        flexDirection: 'column',
        gap: '8px',
        padding: '10px 12px',
        background: 'rgba(255,255,255,0.95)',
        borderRadius: '18px',
        boxShadow: '0 10px 36px rgba(0,0,0,0.18)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.3)',
        transition: 'all 0.2s ease, opacity 0.15s ease',
        minWidth: '142px',
        alignItems: 'center',
        opacity: '0'
    });
    document.body.appendChild(container);

    const updateTheme = () => {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        container.style.background = isDark ? 'rgba(30,30,40,0.92)' : 'rgba(255,255,255,0.95)';
        container.style.border = isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(255,255,255,0.3)';
    };
    updateTheme();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);

    const btns = buttons.map((cfg, i) => {
        const btn = document.createElement('button');
        btn.textContent = cfg.text;

        // 只有普通搜索按钮才保存 URL
        if (!cfg.isSettings) {
            btn.dataset.url = urls[i];
        }

        Object.assign(btn.style, {
            width: '100%',
            padding: '4px 14px',
            fontSize: '13.5px',
            fontWeight: '600',
            color: '#fff',
            background: cfg.color,
            border: 'none',
            borderRadius: '14px',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(0,0,0,0.22)',
            pointerEvents: 'auto',
            transition: 'all 0.2s ease',
            transform: 'translateY(0)',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
        });

        const hoverIn = () => {
            btn.style.transform = 'translateY(-3px) scale(1.03)';
            btn.style.boxShadow = '0 10px 24px rgba(0,0,0,0.3)';
        };
        const hoverOut = () => {
            btn.style.transform = 'translateY(0) scale(1)';
            btn.style.boxShadow = '0 4px 14px rgba(0,0,0,0.22)';
        };
        btn.onmouseover = btn.ontouchstart = hoverIn;
        btn.onmouseout = btn.ontouchend = hoverOut;
        btn.onmousedown = btn.ontouchstart = e => e.stopPropagation();

        container.appendChild(btn);
        return btn;
    });

    let currentText = '';
    let showTimeout = null;

    const hide = () => {
        container.style.opacity = '0';
        setTimeout(() => {
            if (container.style.opacity === '0') {
                container.style.display = 'none';
            }
        }, 150);
        currentText = '';
        if (showTimeout) clearTimeout(showTimeout);
    };

    const showPanel = (text) => {
        const sel = window.getSelection();
        if (!sel.rangeCount) return hide();
        const range = sel.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        if (!rect.width) return hide();

        container.style.display = 'flex';
        const w = container.offsetWidth;
        const h = container.offsetHeight;
        container.style.display = 'none';

        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const isMultiLine = rect.height > 24;

        let left = isMultiLine
            ? window.scrollX + rect.left - w - 12
            : window.scrollX + rect.right + 12 + 70;

        let top = isMultiLine
            ? window.scrollY + rect.bottom - h
            : window.scrollY + rect.top;

        // 防重叠
        const panelTop = top - window.scrollY;
        const panelBottom = panelTop + h;
        const textTop = rect.top;
        const textBottom = rect.bottom;

        if (isMultiLine && panelTop < textBottom && panelBottom > textTop) {
            top = window.scrollY + rect.bottom + 8;
        }

        top = Math.max(window.scrollY + 12, Math.min(top, window.scrollY + vh - h - 12));
        left = Math.max(window.scrollX + 12, Math.min(left, window.scrollX + vw - w - 12));

        container.style.top = top + 'px';
        container.style.left = left + 'px';
        container.style.display = 'flex';
        container.style.opacity = '1';

        currentText = text;
    };

    /* ---------- 事件绑定 ---------- */
    document.addEventListener('selectionchange', () => {
        if (showTimeout) clearTimeout(showTimeout);
        showTimeout = setTimeout(() => {
            const text = window.getSelection().toString().trim();
            if (text && text === currentText) return;
            if (text) {
                showPanel(text);
            } else if (currentText) {
                hide();
            }
        }, 100);
    });

    btns.forEach(btn => {
        // 普通搜索按钮
        if (btn.dataset.url) {
            btn.onclick = () => {
                if (!currentText) return;

                const fullUrl = btn.dataset.url + encodeURIComponent(currentText);

                // 创建隐藏 <a> 标签并模拟点击
                const link = document.createElement('a');
                link.href = fullUrl;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                // hide(); // 搜索后收起面板
            };
        } else {
            // 设置按钮（保持原逻辑）
            btn.onclick = (e) => {
                e.stopPropagation();

                if (window.getSelection) {
                    window.getSelection().removeAllRanges();
                }

                if (typeof body_build === 'function') {
                    body_build('true');
                }

                const btn_hcss = document.getElementById('huacisousuo');
                if (btn_hcss) {
                    // 防止重复插入 keyframes
                    if (!document.getElementById('limp-breathe-kf')) {
                        const styleSheet = document.createElement('style');
                        styleSheet.id = 'limp-breathe-kf';
                        styleSheet.textContent = `
                        @keyframes breathe {
                            0%, 100% { transform: scale(1); }
                            50%      { transform: scale(1.15); }
                        }
                    `;
                        document.head.appendChild(styleSheet);
                    }

                    btn_hcss.style.animation = 'breathe 0.6s ease-in-out infinite';

                    // 5秒后自动停止（可配置）
                    setTimeout(() => {
                        btn_hcss.style.animation = '';
                        btn_hcss.style.transform = '';
                    }, 5000);
                }

                // 不 hide，方便用户调节
            };
        }
    });

    document.addEventListener('mousedown', e => {
        if (!container.contains(e.target) && !window.getSelection().toString().trim()) hide();
    });

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const now = Date.now();
        if (now - lastScroll > 300 && !window.getSelection().toString().trim()) hide();
        lastScroll = now;
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && !window.getSelection().toString().trim()) hide();
    });

    hide();
    console.log('划词搜索（终极优化版 + 设置按钮）已加载');
}

