// ==UserScript==
// @name         Adblock4limbo——导航及各类功能函数合集.[github]
// @namespace    https://limbopro.com/Adguard/Adblock4limbo.function.js
// @version      0.2026.08.26
// @license      CC BY-NC-SA 4.0
// @description  实用网站导航 —— 沉浸式翻译纯JS版本；M3U8/MP4资源链接提取；广告元素屏蔽器；费在线影视/前端学习/开发者社区/新闻/建站/下载工具/格式转换工具/电子书/新闻/写作/免费漫画等；
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


(function () {
    const css = `
/* 给到悬浮窗用 Adblock4limbo 4 function */
/* 遮罩层 */
.confirm-mask {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, .5) !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center;
    z-index: 114154 !important;
    opacity: 0;
    visibility: hidden;
    transition: opacity .2s, visibility .2s;
}

.confirm-mask.show {
    opacity: 1;
    visibility: visible;
}

/* 弹窗本体 */
.confirm-dialog {
    background: #fff !important;
    border-radius: 8px;
    width: 320px;
    max-width: 90vw;
    box-shadow: 0 4px 20px rgba(0, 0, 0, .2);
    animation: pop .2s ease-out;
}

@keyframes pop {
    from {
        transform: scale(.8);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

.confirm-header {
    padding: 16px 20px 8px;
    font-weight: 600;
    font-size: 18px;
    color: #333 !important;
}

.confirm-body {
    padding: 0 20px 16px;
    color: #555 !important;
}

.confirm-footer {
    padding: 0 20px 16px;
    display: flex;
    gap: 12px;
    justify-content: flex-end;
}

.confirm-footer button {
    min-width: 72px;
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
}

.confirm-footer .cancel {
    background: #f0f0f0 !important;
    color: #333 !important;
}

.confirm-footer .ok {
    background: #007bff !important;
    color: #fff !important;
}

.confirm-footer .ok:hover {
    background: #0056b3 !important;
}

.confirm-footer .cancel:hover {
    background: #e0e0e0 !important;
}
`;

    const style = document.createElement('style');
    style.textContent = css;
    (document.head || document.documentElement).appendChild(style);
})();



// 设置 cookie 饼
window.fcsetCookie = function fcsetCookie(cname, cvalue, exdays) { var d = new Date(); d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); var expires = "expires=" + d.toGMTString(); document.cookie = cname + "=" + cvalue + "; path=/;" + expires; }

fcsetCookie('daohangMode_global', 'true', 400);


// 您的防御性检查逻辑现在是安全的
/*
if (document.getElementById('dh_pageContainer') !== null) {
    return; // ✅ 合法的 return 语句，退出这个匿名函数
}
*/

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



/* 连续点击4次空白处起导航🧭页面 */
function tripleClick() {
    var startTime = '';
    var number = 0;
    const htmlbody = document.querySelectorAll('body')[0]

    htmlbody.addEventListener('click', function (e) {
        // 如果点击目标是 button 或 button 的后代元素，直接 return
        if (e.target.closest('button, a, [role="button"], .btn, label, input, select')) {
            return;
        } else {
            startTime = +new Date()
            number += 1;
            console.log(number)
            tripleClick_check(number)
        }
    });

    function tripleClick_check(x) {
        setTimeout(() => {
            if (x >= 4 && /android|iphone|ipad|ipod|webos|iemobile/i.test(navigator.userAgent)) {
                // 逻辑成立时的代码
                console.log("条件成立：x >= 4 且为移动设备");
                console.log('连续点击超过' + x + "次")
                body_build('true')  // 如果按钮出现，且其他如搜索不存在则可唤出导航页面
            } else {
                number = 0;
                console.log("number被重设为0");
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
// 定义一个正则表达式，用于匹配 URL 中是否包含特定的成人/视频/图片网站关键词
var weblist_regex = new RegExp(/\b(xiaobaotv|iyf|gimy|ddrk|ddys|olevod|hitomi|hltv|javlibrary|thisav|njav|missav|javlib|javbus|attackers|18comic|javday|hamnime|takara|tameikegoro|deeps|moodyz|s1s1s1|nagae|ideapocket|dasdas|oppai|kawaii|satsu|mgstage|manji-group|rocket|muku|dmm|beauty|gloryquest|javbus|supjav|jable|xvideos|pornhub|porn|wnacg|av)\b/i);

// **逻辑块 1: 针对特定域名 (limbopro.com) 的设置**
if (window.location.href.match('limbopro.com')) {
    // 如果当前网址是 limbopro.com，强制设置导航模式为“显示/启用”
    fcsetCookie('daohangMode_global', 'true', '400');
    // 强制设置成人模式为“关闭/禁用”
    fcsetCookie('adultMode', 'false', '400');

    // **逻辑块 2: 匹配成人网站列表 且 全局导航设置为空**
} else if (weblist_regex.test(window.location.href.toLowerCase()) && getCookie('daohangMode_global') == '') {
    // 如果当前网址匹配到成人/视频列表，并且“全局导航模式”Cookie尚未设置
    // 则将全局导航模式默认设置为“隐藏/禁用”
    fcsetCookie('daohangMode_global', 'true', '400');

    // **逻辑块 3: 匹配成人网站列表 (非首次加载，或 Cookie 已设置)**
} else if (weblist_regex.test(window.location.href.toLowerCase())) {
    // 如果当前网址匹配到成人/视频列表，但“全局导航模式”Cookie已经存在
    // 此时不改变 Cookie 设置，而是按现有全局设置执行操作
    console.log('该网址被匹配，将按全局设置执行相关操作...！')
}






/**
* function wtf()
* 这是一个定时执行的函数，主要职责是：
* 1. 每 2.5 秒将 dh_buttonMain 元素的高度存储到浏览器的 localStorage 中，实现状态持久化。
* 2. 根据本地存储的导航器类型（移动端/PC端），管理 dh_button 元素的垂直位置 (top) 的存储。
*/
function wtf() {
    // 设置一个定时器，每 2500 毫秒（2.5 秒）执行一次内部的逻辑
    setInterval(() => {

        // --- 逻辑 1: dh_buttonMain 高度持久化 ---
        // 检查 'dh_buttonMain' 元素是否存在，并且其 style.height 属性值不为空
        if (document.getElementById('dh_buttonMain') !== null &&
            document.getElementById('dh_buttonMain').style !== null &&
            document.getElementById('dh_buttonMain').style.height !== null) {
            // 将当前 dh_buttonMain 的高度值存储到 localStorage，键名为 'dh_buttonMain'
            localStorage.setItem('dh_buttonMain', document.getElementById('dh_buttonMain').style.height);
            // console.log("当前导航按钮高度[dh_buttonMain]" + localStorage.getItem('dh_buttonMain'))
        }

        // --- 逻辑 2: dh_button 位置 (top) 管理 ---

        // 检查是否为移动端环境，且非 PC 端 (localStorage.getItem('navigator_pc') == '')
        if (localStorage.getItem('navigator_mobile') == 'mobile' && localStorage.getItem('navigator_pc') == '') {
            // 移动端top (记录垂直位置)

            // 将当前 dh_button 的 top 样式值存储到 localStorage，键名为 'dh_button'
            localStorage.setItem('dh_button', document.getElementById('dh_button').style.top);

            // 原代码中有一个被注释掉的判断条件：
            // //if (localStorage.getItem('dh_button') !== 'px') {

            // 检查是否为移动端环境 (但上一条件未满足)
        } else if (localStorage.getItem('navigator_mobile') == 'mobile') {
            // 这可能是从 PC 切换到移动端时的清理/重置逻辑

            // 清除 PC 标识
            localStorage.setItem('navigator_pc', '');
            // 重置 dh_button 的 top 位置为 'px' (一个无效值，可能是作为清除标识)
            localStorage.setItem('dh_button', 'px');

            // 递归调用 wtf()，但由于 wtf() 内部已经设置了 setInterval，
            // 再次调用 wtf() 会创建一个新的定时器，可能导致重复执行和资源浪费。
            // ⚠️ 建议：这个递归调用通常是不需要的，除非开发者有意让它在重置后立即启动一个新的定时器。
            wtf();
        }

    }, 2500);
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
function initializeFloatingNavigationButton(x, csp) {

    if (typeof getResponsiveButtonSize == 'function') {
        x = getResponsiveButtonSize();
    }

    if (document.getElementById('dh_buttonContainer')) return;

    // 新建 dh_buttonContainer
    let dh_buttonContainer = document.createElement('div');
    dh_buttonContainer.id = 'dh_buttonContainer';
    let body = document.body;

    document.querySelector('html').appendChild(dh_buttonContainer)

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
        const BUTTON_CSS = `
  border-radius: 5px 0 0 5px;
  padding: 0;
  transition: height 666ms;
  z-index: 114154;
  position: fixed;
  right: 0;
  border: transparent;
  background: transparent url("https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/Adblock4limbo.png") no-repeat;
  background-size: 100%;
`.replace(/\s+/g, ' ').trim() + ';';
        _button.style.cssText = BUTTON_CSS;
        _button.setAttribute("onclick", "body_build('true')");
        document.getElementById('dh_buttonMain').appendChild(_button); // 在 dh_buttonMain 下添加按钮

    } else if (csp == 'csp') {
        console.log('创建带CSP属性按钮...')
        var csp = 'box-shadow:inset 0px 0px 15px 3px #23395e;background:linear-gradient(to bottom,#2e466e 5%,#415989 100%);background-color:#2e466e;border-radius:17px;border:1px solid #1f2f47;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:15px;padding:6px 13px;text-decoration:none;text-shadow:0px 1px 0px #263666;padding:0px;transition-duration:666ms;transition-property:height;z-index:114154;bottom:15%;right:0.5%;/*position:fixed;*/border:transparent;border-radius:50%;';
        _button.style = csp;
        _button.textContent = '导航';
        document.getElementById('dh_buttonMain').appendChild(_button); // 在 dh_buttonMain 下添加按钮
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
            document.getElementById('dh_buttonContainer')?.classList.add('pointer-events-none')
        }, 4000)
    });

}





// 定义按钮尺寸
/**
* getResponsiveButtonSize
* 根据浏览器窗口宽度返回按钮的尺寸（CSS值）。
* * @returns {string} - 按钮的尺寸（例如 '45px'）。
*/
function getResponsiveButtonSize() {
    const window_innerWidth = window.innerWidth;
    let size; // 使用 let 声明变量，避免在 if/else 块中重复声明 var

    if (window_innerWidth <= 920) {
        // 窗口宽度小于等于 920px (通常视为移动端/平板或小窗口)
        size = '45px';
        // 原始注释: 40px
    } else {
        // 窗口宽度大于 920px (通常视为 PC 端或大窗口)
        size = '45px';
        // 原始注释: 55px
    }

    // 注意：尽管在 if 和 else 分支中返回的值都是 '45px'，
    // 但保留 if/else 结构有助于未来根据注释 (40px 和 55px) 轻松调整响应式逻辑。
    return size;
}






/**
 * updateNavigationButtonDisplay
 * 根据传入的参数控制导航按钮的尺寸和 z-index。
 * @param {number} x - 控制显示逻辑的参数 (1 表示执行显示/尺寸调整)。
 */
function updateNavigationButtonDisplay(x) {
    // 检查导航按钮主容器是否存在
    const buttonContainer = document.getElementById('dh_button');
    if (buttonContainer !== null) {
        const buttonMain = document.getElementById('dh_buttonMain');

        // 当 x 等于 1 并且导航按钮主容器存在时，执行尺寸和 z-index 的设置
        if (x == 1) {
            // 注意: 原代码中的 ! (document.getElementById('dh_button') === null) 已经通过外层的 if (buttonContainer !== null) 保证，因此可以简化。

            buttonContainer.style.height = getResponsiveButtonSize();
            buttonContainer.style.width = getResponsiveButtonSize();
            // 确保按钮层级最高，处于“显示”状态
            if (buttonMain) {
                buttonMain.style.zIndex = '114154';
            }
            console.log('显示导航按钮🔘');
        }
        // else 分支为空，可以移除以简化代码
    }
}


// 为按钮添加监听事件 防止被破坏
function _onclick_button() {
    setTimeout(() => {


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

                fcsetCookie("daohangMode_yourChoice", 'show', 400) // 显示按钮

                cookiesRemove()

                setTimeout(() => {
                    location.reload();
                }, 1000);

            })
        }


    }, 1000)
}


var nsfw_regex = new RegExp(/\b(javlibrary|thisav|njav|missav|javlib|javbus|attackers|18comic|javday|hamnime|takara|tameikegoro|deeps|moodyz|s1s1s1|nagae|ideapocket|dasdas|oppai|kawaii|satsu|mgstage|manji-group|rocket|muku|dmm|beauty|gloryquest|javbus|supjav|jable|xvideos|pornhub|porn|wnacg|av)\b/i);
var csp_regex = new RegExp(/\b(twitter|xvideos|google)\b/i);

// 判断是否需要在当前页面插入导航按钮
window.fc_str_ua = navigator.userAgent.toLowerCase();
window.regexp = /(.*)(iphone\sos\s)(\d{2})(.*)/;
window.ios_version = fc_str_ua.replace(regexp, '$3');
var csp = ['twitter', 'xvideos'];

function create_dh_button() {
    const height = getResponsiveButtonSize()
    if (/\b(google|bing)\b/i.test(window.location.href.toLowerCase())) { // 谷歌和必应均不插入导航按钮
    } else if (csp_regex.test(window.location.href.toLowerCase()) && !(/\b(mobile)\b/i.test(navigator.userAgent.toLowerCase()))) { // 如果是带有CSP的网站则带上参数 csp // 2333
        initializeFloatingNavigationButton(height, 'csp');
        _onclick_button();
    }
    else {
        initializeFloatingNavigationButton(height, 'nocsp'); // 反之则不带
        _onclick_button();
    }
}


create_dh_button()


// 初始化导航容器

/**
 * 初始化导航容器（一次性创建、填充内容、插入 DOM）
 * 采用文档片段 + 模板字符串 + 事件委托的方式，减少回流/重绘
 */


function initNavigationContainer() { // 初始化导航容器
    // 1. 创建容器（只创建一次）
    const container = Object.assign(document.createElement('div'), {
        id: 'dh_pageContainer',
        className: 'dh_pageContainer_css notranslate'
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
  <div class="div_title tips" style="width:100%">
    <div class="closeX_W">
      <div class="ellCloseX">
        <button style="border-radius:50%;opacity:.5" id="xX" onclick="body_build('false')"></button>
      </div>
    </div>
    <div class="_header4tips">
      🚫本导航为<a href="https://limbopro.com/archives/12904.html" target="_blank">毒奶去网页广告计划</a>的一部分！持续维护更新中...<br>
      <b>✨导航使用小Tips</b> -&gt; 1秒内，<b>电脑用户</b>(连续敲击<b>2次ESC键</b>)，<b>iOS用户</b>(<b>在页面空白处连续点击4次及以上</b>) 可<b>快速唤起本导航页面；<br>点击右上角关闭按钮或双击导航页的空白处可关闭导航页面！</b>!<br>
      <b>🖐可拖拽&🤖智能分类排序：点击越多，排序越靠前！</b>（排序数据存储基于<a target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage">localStorage</a>；默认置顶分类不加入点击统计排序；）<br>
      <b>🙋‍♂️反馈/建议/功能设置</b>中的<b>ON代表该功能已开启</b>，可<b>点击切换至OFF</b>进行关闭!<br>
      👍P.S.有好的网站/建议或意见欢迎<a href="https://limbopro.com/6.html" target="_blank" style="background:black;color:aliceblue">联系博主!</a>（将为ta移除广告，并添加至本导航页面==...
    </div>
  </div>

  <!-- 反馈/建议/功能设置 -->
  <div class="div_global feedback">
    <div class="title_global">反馈/建议/功能设置//</div>
    <ul class="ul_global">
      <!-- <li class="li_global"><a class="a_global" id="admin" href="https://limbopro.com/6.html" target="_blank">联系博主</a></li> -->
      <li class="li_global">
    <button class="a_global special yellow" id="admin" onclick="alFeedback_showPanel()">联系博主/反馈</button>
</li>
            <li class="li_global"><a class="a_global" id="ifeedback" href="https://limbopro.com/feedback/" target="_blank">匿名留言</a></li>
      <li class="li_global"><button class="crbhms" onclick='daohangMode_switch()' id="hidedaohang">导航按钮(OFF)</button></li>
      <li class="li_global"><button class="crbhms" id="cjsfy" onclick='window.initImmersiveTranslationManager()' data-state="off" style="background-color:red">沉浸式翻译(OFF)</button></li>
            <li class="li_global"><button class="crbhms" id="huacisousuo" onclick='window.toggleSearchState()' data-state="off" style="background-color:red">划词搜索(OFF)</button></li>
      <li class="li_global">
    <button style="background: black;"class="crbhms" id="resetSort">重置排序</button></li>
      <li class="li_global"><button class="crbhms" id="nsfwmode_switch" onclick="toggleNSFWProtection()" style="background: green;">
    🔒页面保护模式(OFF)
</button></li>
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
            <li class="li_global"><a class="a_global special" id="limboprossr" href="https://t.me/limboprossr" target="_blank">毒奶博客</a></li>
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
      <li class="li_global"><a class="a_global" id="Adblock4limbo" href="https://limbopro.com/archives/12904.html" target="_blank" style="background:#5a4771;box-shadow:inset 0 0 15px 3px #16191f00">🚫广告拦截大全</a></li>
      <li class="li_global"><a class="a_global" id="software_skills" href="https://limbopro.com/category/software-skills/" target="_blank">⚒️软件百科</a></li>
      <li class="li_global"><a class="a_global special yellow" id="websiteStatus" href="https://limbopro.com/status/" target="_blank" style="background:#5a4771">✅网站实时状态</a></li>
      <li class="li_global"><a class="a_global special yellow" id="毒奶搜索" href="https://limbopro.com/search.html" target="_blank" style="border-radius:4px;background:#c53f3f">🎬毒奶搜索</a></li>
      <li class="li_global"><a class="a_global special yellow" id="番号搜索" href="https://limbopro.com/btsearch.html" target="_blank" style="border-radius:4px;background:#c53f3f">🔞番号搜索</a></li>
      <li class="li_global"><button class="a_global special yellow" id="mtzyczq"  style="border-radius:4px;background:#c53f3f" onclick="mtzyczq()">🎦媒体资源查找器</button></li>
      <li class="li_global"><button class="a_global special yellow" onclick="window.geminiElementBlockerOpenPanel()" id="gemini-element-blocker"  style="border-radius:4px;background:#c53f3f">🔍 元素屏蔽/追踪器</button></li>
      <li class="li_global">
    <button 
        class="a_global special yellow" 
        id="carolPanel"  
        style="border-radius:4px;background:#c53f3f"
        onclick="window.initWebDebugger()"> ⚙️ Web 存储调试器
    </button>
</li>

<li class="li_global">
    <button 
        class="a_global special yellow" 
        id="jscodeView"  
        style="border-radius:4px;background:#c53f3f"
        onclick="window.showPageScriptsFloatWindow()"> 📟 页面脚本查看器
    </button>
</li>

      <li class="li_global"><button class="a_global special yellow" id="zhixingjs" onclick='window.showJsManager()' style="border-radius:4px;background:#c53f3f">🧑‍💻执行JS代码</button></li>
    <li class="li_global"><button class="a_global special yellow" id="loadjsStatus" onclick='window.geminiScriptCheck()' style="border-radius:4px;background:#c53f3f">🟢JS加载状态</button></li>
      <li class="li_global">
      <button id="adsSkip" class="a_global special yellow ads_skip_on" title="自动跳过广告已开启 (点击关闭)" style="
    width: 106px !important;
    height: 50px !important;
    padding: 5px !important;
    align-items: center !important;
    display: grid!important;
"><p style="
    padding: 2px 5px 2px 5px;
"><span>视频广告自动跳过</span><span id="toggle_status_text">开启</span>
</p></button></li>


<li class="li_global">
<button id="loadCSS" 
    class="a_global special" 
    title="🌈 加载 AdGuard 过滤器(CSS)" 
    onclick="toggleAdGuardFilter()"
    style="
        width: 106px !important;
        height: 50px !important;
        padding: 5px !important;
        align-items: center !important;
        display: grid !important;
        cursor: pointer !important;
        border-radius: 4px !important;
        border: none !important;
        color: white !important;
        line-height: 1.2 !important;
        background: #c53f3f !important; /* 默认红色 */
    ">
    <p style="padding: 2px 5px !important; margin: 0 !important; pointer-events: none !important;">
        <span style="font-size: 11px !important; display: block !important;">AdGuard 过滤器</span>
        <span id="loadCSS_status_text" style="font-weight: bold !important; font-size: 12px !important;">默认关闭</span>
    </p>
</button>
</li>


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
    // javlibrary 专用的窄屏优化（已美化但内容完全一致）
    javlibrary: [
        "td.advsearch {display:none}",
        "#rightcolumn {right:90px; width:auto;}",
        ".videothumblist .videos {min-width:auto}",
        "table.about td {width:auto!important}",
        "table.about td.desc {width:auto!important; min-width:0px!important}",
        ".titlebox {width:auto!important}",
        ".videothumblist.videos {width:auto!important}",
        "#leftmenu {max-width:90px;}",
        "div.videothumblist {overflow:scroll!important; overflow-x:hidden!important}",
        "iframe {display:none}",
        "table.about td {min-width:0px;}",
        "body.main {min-width:0px!important}"
    ].join(" "),

    // global_css：全部原样保留 + 按功能分组 + 每条独立一行 + 关键注释
    global_css: [
        // ─────────────────── _header4tips 完整样式（已拆行） ───────────────────
        "._header4tips {margin-top:50px; padding:10px 0 5px 0 !important; color:black !important; /*background:rgba(255,255,255,0.96);*/ text-align:center !important; width:100% !important; bottom:-6px; left:7px; font-size:xx-small !important; line-height:1.5 !important; z-index:114153; backdrop-filter:blur(4px);}",
        "._header4tips a {background:black !important; color:white !important; padding:1px 6px !important; border-radius:4px !important; text-decoration:none !important; margin:0 2px; font-weight:bold;}",
        "._header4tips a[href*='limbopro.com/6.html'] {color:aliceblue !important;}",
        "._header4tips b {/*color:#d00 !important;*/ font-weight:bold !important;}",

        // ─────────────────── 你原来的其他所有样式（保持不变，只展示部分示例） ───────────────────
        ".pointer-events-none {pointer-events:none !important;}",
        ".pointer-events-auto {pointer-events:auto;}",
        ".bottom-mobile {bottom:30%}",
        ".positiondh_buttonMain {position:static !important;}",
        "#dh_buttonContainer {top:20px; position:fixed; right:0px; z-index:114154;}",
        ".a_global {text-align:center; white-space:break-spaces; color:white !important; box-shadow:inset 0px 0px 15px 3px #23395e; background:linear-gradient(to bottom,#2e466e 5%,#415989 100%); background-color:#2e466e !important; border-radius:0px; margin:1px; border:1px solid #1f2f47 !important; display:inline-block; cursor:pointer; color:#ffffff; font-family:Arial; padding-bottom:6px; padding-top:6px; text-decoration:none; text-shadow:0px 1px 0px #263666;}",
        ".a_global:hover {background:linear-gradient(to bottom,#415989 5%,#2e466e 100%); background-color:#415989;}",
        ".a_global:active {position:relative; top:1px;}",

        /* 指针事件控制 */
        ".pointer-events-none {pointer-events:none !important;}",
        ".pointer-events-auto {pointer-events:auto;}",
        ".bottom-mobile {bottom:30%}",
        ".positiondh_buttonMain {position:static !important;}",
        "/*::-webkit-scrollbar {display: none;}*/",

        /* 主按钮容器 & 布局 */
        "#dh_buttonContainer {top:20px; position:fixed; right:0px; z-index:114154;}",
        ".pc {bottom:0px;}",
        ".mobile {bottom:30%;}",
        "#dh_button {border-radius:0px; position:absolute!important;}",
        "#dh_buttonMain {height:520px; width:60px; position:relative; resize:vertical; overflow:scroll; opacity:1;}",
        "button #dh_button {bottom:32%; height:100px; background:red; opacity:1 !important;}",

        /* 标题/页脚文字 */
        "div._header4tips > b {color:black;}",
        "._header4tips {color:black;}",
        "._header {position:absolute; text-align:left; margin-bottom:-30px; background:transparent; z-index:-1 !important; bottom:-41px; padding-bottom:20px; font-size:small; font-weight:lighter;}",
        "div._footer {position:absolute; text-align:left; margin-bottom:-30px; background:transparent; z-index:-1 !important; bottom:-41px; padding-bottom:20px; font-size:small; font-weight:lighter;}",
        "div._footer a {color:#ffffff; font-weight:bolder;}",

        /* 完全隐藏元素 */
        ".cmsnone {z-index:-111; display:none !important; z-index:-114154; opacity:0 !important; pointer-events:none !important;}",
        ".cms_opacity {pointer-events:none !important; opacity:0}",
        ".cms {pointer-events:auto}",

        /* 高优先级显示 */
        ".active {z-index:114154 !important; pointer-events:auto !important; opacity:1 !important;}",

        /* 通用按钮基础样式（.crbhms） */
        ".crbhms {padding:0px;text-align:center; white-space:break-spaces; color:white !important; border-radius:0px; margin:1px; border:1px solid #1f2f47 !important; display:inline-block; cursor:pointer; color:#ffffff; font-family:Arial; padding-bottom:6px; padding-top:6px; text-decoration:none; text-shadow:0px 1px 0px #263666;}",

        /* 主按钮样式 .a_global（核心样式） */
        ".a_global {text-align:center; white-space:break-spaces; color:white !important; box-shadow:inset 0px 0px 15px 3px #23395e; background:linear-gradient(to bottom,#2e466e 5%,#415989 100%); background-color:#2e466e !important; border-radius:0px; margin:1px; border:1px solid #1f2f47 !important; display:inline-block; cursor:pointer; color:#ffffff; font-family:Arial; padding-bottom:6px; padding-top:6px; text-decoration:none; text-shadow:0px 1px 0px #263666;}",
        ".a_global:hover {background:linear-gradient(to bottom,#415989 5%,#2e466e 100%); background-color:#415989;}",
        ".a_global:active {position:relative; top:1px;}",

        /* 颜色变体 */
        ".a_global.moviesColor {font-weight:300; background:black; color:#01ff5f!important; box-shadow:inset 0px 0px 15px 3px black}",
        "a.a_global.red {background:#df0f0f !important; transition-property:opacity; transition-duration:2s; box-shadow:inset 0px 0px 15px 3px #E55B5B;}",
        "a.a_global.green {background:#688e4e !important; transition-property:opacity; transition-duration:2s; box-shadow:inset 0px 0px 15px 3px #688e4e;}",
        "a.a_global.special {background:#141d2f !important; transition-property:opacity; transition-duration:2s;}",
        "a.a_global#jichangtuijian {background:#3d3843; opacity:0.8; box-shadow:inset 0px 0px 15px 3px #000000}",
        "a.a_global#common {background:#3764ac}",
        ".a_global.comics, .a_global.porn {background:#2a2146; box-shadow:inset 0px 0px 15px 3px #2a2146}",
        ".a_global.yellow {background:black; color:#f09636!important; box-shadow:inset 0px 0px 15px 3px black}",
        ".yellow {color:#f09636!important}",
        ".del {text-decoration:line-through !important;}",

        /* 特殊调试/占位样式 */
        ".a_global.title_ {background:blue !important; font-size:8px!important}",
        "a.a_global.better {/*background:#2e64bb !important; box-shadow:inset 0px 0px 15px 3px #10336d;*/}",
        ".boom {opacity:0.5;}",
        ".carousel-inner {z-index:0!important}",
        ".onlinemovies a {color:#f09636!important;}",

        /* NSFW 锁屏 */
        "img.nsfw, img.lockscreen {position:fixed; width:100%;}",
        "#nsfw_echo span.nsfw {position:fixed; top:60%;}",
        "#nsfw_echo {color:white; width:100%; height:100%}",
        "#nsfw {opacity:0.7; filter:blur(0.5px); filter:grayscale(1); z-index:114154; background:black; position:fixed; width:100%; height:100%;}",

        /* 搜索关闭按钮 */
        ".new_div_search {padding:20px; position:fixed; bottom:0%;}",
        ".close_search_button, .close_search_button_csp {transition-property:opacity; transition-duration:666ms; right:2%; bottom:13%; position:fixed; width:108px; height:108px; background-size:100%; background-repeat:no-repeat; border-radius:50%; opacity:0.5;}",
        ".close_search_button {background-image:url('https://limbopro.com/Adblock4limbo_google_close.png');}",
        ".close_search_button:hover, .close_search_button_csp:hover {background-color:red; opacity:1 !important;}",
        ".close_search_button_csp {font-size:xxx-large;}",

        /* 关闭按钮 X（右上角） */
        "div > button#xX {background-image:url('https://limbopro.com/Adblock4limbo_close.svg'); transition-property:opacity; transition-duration:666ms; background-color:#542c3e; color:#ffffff; opacity:0.5 !important; border:0px; margin:0px; width:108px; height:108px; border-radius:0%;}",
        "div > button#xX:hover {background-color:red; opacity:1 !important;}",
        "div > button:active {background-color:red;}",
        "div.closeX_Z {position:relative; text-align:right; z-index:1}",
        "div.closeX_W {position:fixed; text-align:right; right:0px; top:0px; z-index:1}",
        "div .ellCloseX {display:contents; z-index:-1; margin:0px; position:initial;}",
        "span#nspan {margin:0px; font-weight:bolder !important; color:black !important;}",
        "div > div .fbt {color:#6064a2 !important; margin:0px; font-size:small; width:112px; padding:5px 4px;}",

        /* 拖拽块核心样式 */
        ".div_global {cursor:grab; transition:transform 0.2s; text-align:center; float:left; padding-top:31px; margin-bottom:29px; padding-left:0px;}",
        ".div_global.dragging {opacity:0.5; box-shadow:0 4px 8px rgba(0,0,0,0.2); transform:scale(1.01);}",
        ".div_global.drag-over {border-top:2px solid #3498db;}",
        ".div_global.feedback {background:transparent;}",
        ".div_title {text-align:center; float:left; /*padding-top:31px;*/ /*margin-bottom:29px;*/ padding-left:0px;}",
        ".ellClose {text-align:center; float:left; padding-top:15px; margin-bottom:15px; padding-left:0px;}",

        /* 列表 & 文字排版 */
        ".echo {padding:0 15px; display:flex; flex-wrap:wrap; justify-content:center; align-items:center; width:auto; font-size:15px; text-align:inherit; position:absolute;}",
        ".scroll {position:absolute; width:110px; font-size:smaller; font-weight:lighter; padding-top:6px; color:#00000070;}",
        "ul > li > button {overflow:visible; width:106px !important; line-height:15px !important;}",
        "ul.ul_global > li > a {box-shadow:0 4px 12px rgba(0,0,0,0.06); word-wrap:break-word; font-weight:lighter; overflow:visible; width:106px !important; font-size:15px !important; line-height:15px !important;}",
        ".li_global {display:flex; min-height:31px; font-size:medium; list-style:none; width:112px;}",
        ".ul_global {padding:0px; font-size:15px !important; height:312px; margin:0px; overflow:auto; width:auto;}",
        ".title_global {font-weight:bolder !important; padding-left:2px; display:table-cell; vertical-align:bottom; width:106px; height:50px; text-align:center; font-size:initial; margin-bottom:5px; font-weight:lighter; color:black !important; padding-bottom:4px;}",

        /* 隐藏谷歌翻译框 */
        ".translate-hidden { height:0px; opacity: 0 !important; pointer-events: none !important;transition: opacity 0.3s ease !important;}",

        /* 按钮强制样式 */

        "li.li_global > button {margin-top: 2px; white-space: nowrap; line-height: 1; font-size: 10px; font-weight: 600; border-radius: 3px; padding: 1px 4px; /* ... 颜色样式 ... */} ",

        /* 主容器背景与动画 */
        "#dh_pageContainer {overflow-y:overlay; overflow-x:hidden; background-image:url('https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/Adblock4limbo_bgp.jpg'); background-size:100% !important; background-repeat:round; margin:auto; width:200px; height:200px; z-index:-114154; opacity:0; background-color:transparent; position:fixed; top:50%;}",
        "div#dh_pageContainer.dh_pageContainer_css {height:100% !important; width:100% !important; overscroll-behavior:none; top:0px; transition-property:opacity; transition-duration:999ms; margin:0px !important;}",
        "div#dh_pageContainer.dh_pageContainer_css_0 {transition-duration:0ms !important; margin:0px !important;}"
    ].join("\n")
};



var filebak = {
    javlibrary: "td.advsearch {display:none}#rightcolumn{right:90px;width:auto;} .videothumblist .videos {min-width:auto}  table.about td {width:auto!important} table.about td.desc {width:auto !important;min-width:0px!important} .titlebox {width:auto !important}.videothumblist.videos {width:auto !important} #leftmenu{max-width:90px;} div.videothumblist{overflow:scroll !important; overflow-x:hidden !important}iframe{display:none} table.about td {min-width:0px;} body.main{min-width:0px !important}\
    \
    ",
    global_css: '\
    .pointer-events-none {pointer-events:none !important;} .pointer-events-auto {pointer-events:auto;} .bottom-mobile {bottom:30%} .positiondh_buttonMain {position:static !important;} /*::-webkit-scrollbar {display: none;}*/ #dh_buttonContainer{top:20px; position:fixed;right:0px;z-index:114154;} .pc {bottom:0px;} .mobile {bottom:30%;} #dh_button {border-radius:0px; position:absolute!important;} div._header4tips > b {color:black;} ._header4tips{color:black;} #dh_buttonMain {height:520px;width:60px;position:relative; resize:vertical; overflow:scroll; opacity:1;} ._header {position:absolute;text-align:left;margin-bottom:-30px;background:transparent;z-index:-1 !important;bottom:-41px;padding-bottom:20px;font-size:small;font-weight:lighter;} .cmsnone { zIndex:-111; display:none !important; z-index:-114154; opacity:0 !important; pointer-events:none !important;} .crbhms {text-align:center;white-space:break-spaces;color:white !important; border-radius:0px;margin:1px;border:1px solid #1f2f47 !important;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;/*font-size:100% !important;*/padding-bottom:6px;padding-top:6px;text-decoration:none;text-shadow:0px 1px 0px #263666;} .a_global.moviesColor {font-weight:300;background:black;color:#01ff5f!important;box-shadow:inset 0px 0px 15px 3px black} .active { z-index:114154 !important; pointer-events:auto !important; opacity:1 !important; } img.nsfw {position:fixed;width:100%;} img.lockscreen {position:fixed;width:100%;} #nsfw_echo span.nsfw {position:fixed;top:60%;} #nsfw_echo { color:white;width:100%;height:100%} #nsfw { opacity:0.7; filter:blur(0.5px);filter: grayscale(1);z-index:114154;background:black;position:fixed;width:100%;height:100%;} .new_div_search{padding:20px;position:fixed;bottom:0%;} .close_search_button:hover {background-color:red;opacity:1 !important;} .close_search_button_csp{font-size:xxx-large;transition-property:opacity;transition-duration:666ms;right:2%;bottom:13%;position:fixed;width:108px;height:108px;background-size:100%;background-repeat:no-repeat;border-radius:50%;opacity:0.5;} .close_search_button_csp:hover {background-color:red;opacity:1 !important;}  .close_search_button {transition-property:opacity;transition-duration:666ms;right:2%;bottom:13%;position:fixed;width:108px;height:108px;background-image:ur[](https://limbopro.com/Adblock4limbo_google_close.png);background-size:100%;background-repeat:no-repeat;border-radius:50%;opacity:0.5;} .div_global.feedback{background:transparent;} .a_global.title_{background:blue !important;font-size:8px!important} a.a_global.better{/*background:#2e64bb !important;box-shadow:inset 0px 0px 15px 3px #10336d;*/} .boom {opacity:0.5;} a.a_global.red{background:#df0f0f !important;transition-property:opacity;transition-duration:2s;box-shadow:inset 0px 0px 15px 3px #E55B5B;} a.a_global.green{background:#688e4e !important; transition-property:opacity;transition-duration:2s;box-shadow:inset 0px 0px 15px 3px #688e4e;} a.a_global.special{background:#141d2f !important;transition-property:opacity;transition-duration:2s;},a .a_global#CloudflareSpeedtest{} a.a_global#jichangtuijian{background:#3d3843; opacity:0.8;box-shadow:inset 0px 0px 15px 3px #000000}.carousel-inner{z-index:0!important} a.a_global#common {background:#3764ac} .onlinemovies a {color:#f09636!important;} .del {text-decoration:line-through !important;} .yellow{color:#f09636!important} .a_global.yellow {background:black;color:#f09636!important;box-shadow:inset 0px 0px 15px 3px black}  .cms_opacity {pointer-events:none !important;opacity:0} .cms {pointer-events:auto} div.closeX_Z{position:relative;text-align:right;z-index:1} div.closeX_W{position:relative;text-align: right;right:0px;top:0px;z-index:1} .scroll{position:absolute;width:110px;font-size:smaller;font-weight:lighter;padding-top:6px;color:#00000070;}button #dh_button{ bottom:32%; height:100px;background:red;opacity:1 !important;}.a_global.comics{background:#2a2146;box-shadow:inset 0px 0px 15px 3px #2a2146}.a_global.porn{background:#2a2146;box-shadow:inset 0px 0px 15px 3px #2a2146} div._footer a{color:#ffffff;font-weight:bolder;} div ._footer{position:absolute;text-align:left;margin-bottom:-30px;background:transparent;z-index:-1 !important;bottom:-41px;padding-bottom:20px;font-size:small;font-weight:lighter;} div#dh_pageContainer.dh_pageContainer_css{height:100% !important; width:100% !important;overscroll-behavior:none;top:0px;transition-property:opacity;transition-duration:999ms;margin:0px !important} div#dh_pageContainer.dh_pageContainer_css_0{transition-duration:0ms !important;margin:0px !important} div > button#xX{background-image:url("https://limbopro.com/Adblock4limbo_close.svg");transition-property:opacity;transition-duration:666ms;background-color:#542c3e;color:#ffffff;opacity:0.5 !important;border:0px;margin:0px;width:108px;height:108px;border-radius:0%;}div > button#xX:hover{background-color:red;opacity:1 !important;}div > button:active{background-color:red;}div .ellCloseX{display:contents; z-index:-1;margin:0px;position:initial;};span#nspan{margin:0px;font-weight:bolder !important;color:black !important;}div > div .fbt{color:#6064a2 !important;margin:0px;font-size:small;width:112px;padding-top:5px;padding-left:4px;padding-right:4px;} .echo{padding:0px 15px 0px 15px; display:flex;flex-wrap:wrap;justify-content:center;align-items:center;width:auto;font-size:15px;text-align:inherit;position:absolute;} ul > li > button{overflow:visible;width:106px !important;line-height:15px !important;} ul.ul_global > li > a{box-shadow:0 4px 12px rgba(0, 0, 0, 0.06); word-wrap:break-word;font-weight:lighter;overflow:visible;width:106px !important;font-size:15px !important;line-height:15px !important;}.li_global{display:flex; min-height:31px;font-size:medium;list-style:none;width:112px;}.ul_global{padding:0px;font-size:15px !important;height:258px;margin:0px;overflow:auto;width:auto;} .title_global{font-weight:bolder !important; padding-left:2px;display:table-cell;vertical-align:bottom;width:106px;height:50px;text-align:center;font-size:initial;margin-bottom:5px;font-weight:lighter;color:black !important;padding-bottom:4px;} .div_title { text-align: center; float: left; padding-top: 31px; margin-bottom: 29px; padding-left: 0px; } .div_global{cursor: grab; /* 鼠标样式指示可拖拽 */ transition: transform 0.2s; /* 添加平滑过渡 */ text-align:center;float:left;padding-top:31px;margin-bottom:29px;padding-left:0px;} /* 正在拖拽的元素 */ .div_global.dragging {opacity: 0.5; /* 半透明效果 */ box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);transform: scale(1.01);} /* 拖拽到的目标区域 */ .div_global.drag-over { /* 增加一个边框来提示放置位置 */ border-top: 2px solid #3498db; /* 蓝色指示线 */ }.ellClose{text-align:center;float:left;padding-top:15px;margin-bottom:15px;padding-left:0px;}#dh_pageContainer{overflow-y:overlay;overflow-x:hidden;background-image:url("https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/Adblock4limbo_bgp.jpg");background-size:100% !important;background-repeat:round;margin:auto;width:200px;height:200px;z-index:-114154;opacity:0;background-color:transparent;position:fixed;top:50%;}.a_global{text-align:center;white-space:break-spaces;color:white !important;box-shadow:inset 0px 0px 15px 3px #23395e;background:linear-gradient(to bottom,#2e466e 5%,#415989 100% );background-color:#2e466e !important;border-radius:0px;margin:1px;border:1px solid #1f2f47 !important;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;/*font-size:100% !important;*/padding-bottom:6px;padding-top:6px;text-decoration:none;text-shadow:0px 1px 0px #263666;}.a_global:hover{background:linear-gradient(to bottom,#415989 5%,#2e466e 100%);background-color:#415989;}.a_global:active{position:relative;top:1px;}\
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
        //boom();
    } else {
        //boom();
        let parentElement = document.getElementById('dh_pageContainer');
        parentElement.style.zIndex = zIndex + 1;
        parentElement.style.opacity = opacity;
        parentElement.style.pointerEvents = pointevents;
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
window.body_build = function body_build(x) { // 判断导航显示与否


    //navCheck()

    if (typeof initFloatingNav == 'function') {
        setTimeout(() => {
            if (x == "true") {
                initFloatingNav(1, 114118, 1, 'auto')
            } else if (x == "false") {
                initFloatingNav(0, -114154, 1, 'none')
                setTimeout(() => {
                }, 350)
            }
        }, 250)
    }

}



function navCheck() {
    /**
         * 2. 导航项丢失检测与自动修复
         * 逻辑：通过检查特定类名 '.li_global' 的数量来判断导航菜单是否完整。
         * 场景：防止某些动态加载的网页在渲染过程中将已生成的导航条覆盖或删除。
         */
    if (document.querySelectorAll('.li_global').length < 150) {
        // 如果页面中现存的导航项少于 150 个，判定为“导航条受损”或“未加载完成”
        if (typeof parentElement_add == 'function') {
            // 调用父级添加函数，重新执行导航条的初始化或 DOM 注入
            parentElement_add();
            console.log('Gemini: 检测到导航项缺失，正在执行导航复位...');
        }

    }


    if (typeof initImmersiveTranslationManager == 'function') {
        // 沉浸式翻译按钮显示
        if (localStorage.getItem('gemini_immersive_translation_state') == 'on') {
            if (document.getElementById('cjsfy')?.textContent.indexOf('ON') == '-1') {
                window.initImmersiveTranslationManager()
                console.log('Gemini: 检测到沉浸式翻译按钮显示不正确，正在执行按钮复位...');
            }
        }
    }


    // 创建导航按钮
    if (typeof initializeFloatingNavigationButton == 'function') {
        if (document.getElementById('dh_button') == null) {
            initializeFloatingNavigationButton('', 'nocsp')
            setTimeout(() => {
                if (document.getElementById('dh_button')) {
                    document.getElementById('dh_button').style.height = '45px';
                    document.getElementById('dh_button').style.width = '45px';
                }
            }, 500)

        }
    }

    // 导航页导航按钮OFF/ON显示BUG


    setTimeout(() => {
        (function syncDaohangUI() {
            const btnToggle = document.getElementById('hidedaohang');
            // 检查依赖：如果找不到按钮或 getCookie 函数，直接跳出
            if (typeof getCookie !== 'function' || !btnToggle) return;

            const mode = getCookie("daohangMode_yourChoice");

            // 逻辑更改：只有明确为 'hidden' 时才显示 OFF，其余情况（包括空）均显示 ON
            if (mode === 'hidden') {
                btnToggle.textContent = '导航按钮(OFF)';
                btnToggle.style.setProperty('background', 'red', 'important');
            } else {
                btnToggle.textContent = '导航按钮(ON)';
                btnToggle.style.setProperty('background', 'green', 'important');
            }
        })();
    }, 250)



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

var click_count = 0;

// 监听键盘事件 ESC
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
        } /*else if ((document.querySelector("#dh_button").style.height == "0%") && click_count == 1) {
                setTimeout(() => {
                }, 1000)
            } */ else if (typeof body_build == 'function' && document.querySelector("#dh_pageContainer").style.zIndex < 0 && click_count == 2 && (document.querySelector('div#nsfw') == null || document.querySelector('div#nsfw').style.zIndex < 0)) {
            body_build('true')  // 如果按钮出现，且其他如搜索不存在则可唤出导航页面
        } else if (typeof body_build == 'function' && document.querySelector("#dh_pageContainer").style.zIndex > 0 && click_count == 3) {
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

window.parentElement_add = function parentElement_add() {

    // 1. 初始化状态 (保持不变)
    initFloatingNav(0, -114154, 1, 'none');
    // body_build('false');

    // 2. 缓存核心 DOM 节点 (保持不变)
    const echoDiv = document.querySelector('div.echo');
    const pageContainer = document.getElementById('dh_pageContainer');
    if (!echoDiv || !pageContainer) return;

    // 3. 新增状态变量和计时器-- -
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

    // 4. 菜单生成函数 追加元素
    setTimeout(() => {

        // 定义一个数组来存储各个菜单的配置信息
        const menuConfigs = [
            { category: 'SpeedTest', title: '测速工具//' },
            { category: 'ipcheck', title: '网络连通及被墙检测//' },
            { category: 'movies', title: '在线影视//' },
            { category: 'xyellow', title: '成人影视//', optionalParam: 'onlinemovies' }, // 包含第三个参数
            { category: 'front-end', title: '前端入门//' },
            { category: 'knowledge', title: '男孩子读物//' },
            { category: 'learnlingenglish', title: '我要学英语//' },
            { category: 'currentnews', title: '实时新闻//' },
            { category: 'technews', title: '科技新闻//' },
            { category: 'search', title: '综合搜索//' },
            { category: 'AICHAT', title: 'AI聊天工具//' },
            { category: 'bookreadanddownload', title: '电子书阅读及下载//' },
            { category: 'Developer', title: '开发者工具//' },
            { category: 'cheeseispower', title: '技术成长平台//' },
            { category: 'Tools', title: '实用工具//' },
            { category: 'imusic', title: '在线音乐//' },
            { category: 'PornMedia', title: '著名片商//' },
            { category: 'comic18', title: '18禁漫画//' },
            { category: 'downloading', title: '资源下载//' },
            { category: 'SocialMedia', title: '社交媒体//' },
            { category: 'Media', title: '媒体平台//' },
            { category: 'aigc', title: 'AIGC生成工具//' },
            { category: 'writer', title: '写作工具//' },
            { category: 'seoandmore', title: 'SEO及更多//' },
            { category: 'domain-buy', title: '域名购买//' }, // 使用方括号访问属性
            { category: 'images', title: '图片处理//' }
        ];

        menuConfigs.forEach(config => {
            // 关键更改：使用 config.category 访问 dataListbak 的属性
            const data = dataListbak[config.category];
            const title = config.title;
            const optionalParam = config.optionalParam;

            if (optionalParam) {
                // 如果有可选参数，则以三个参数调用
                // createAndAppendMenus(data, title, optionalParam);
                createAndAppendMenus(data, title, optionalParam, config.category);
            } else {
                // 否则以两个参数调用
                // createAndAppendMenus(data, title);
                createAndAppendMenus(data, title, optionalParam, config.category);
            }
        });

        // 定义一个数组来存储各个链接列表的配置信息
        const linkConfigs = [ // 2333 
            //{ category: 'front-end', selector: '.div_global.front > ul', comment: '前端入门' }, // 注意属性名包含连字符
            // { category: 'knowledge', selector: '.div_global.boysshouldread > ul', comment: '男孩子读物' },
            //{ category: 'ipcheck', selector: '.div_global.ipcheck > ul', comment: '网络连通及被墙检测' },
            //{ category: 'movies', selector: '.div_global.onlinemovies > ul', comment: '在线影视' },
            // { category: 'cheeseispower', selector: '.div_global.leetcode > ul', comment: '技术成长平台' }
        ];

        linkConfigs.forEach(config => {
            // 获取数据源，使用方括号处理如 "Front-build" 这样的属性名
            const data = dataListbak[config.category];
            const selector = config.selector;

            // 调用函数
            createAndAppendLinks(data, selector);
        });

        scroll_switch();

    }, 1500);

    // 执行后续初始化函数
    scroll_switch();
    _footer_move();
    csp_remove();
    ;
}




// 动态创建并插入元素的函数

function createAndAppendMenus(websiteList, title, zidingyiClassName = '', categoryKey = '') {
    const divGlobal = document.createElement('div');
    divGlobal.className = 'div_global' + (zidingyiClassName ? ' ' + zidingyiClassName : '');

    // 关键步骤 1: 添加 data-category 属性
    if (categoryKey) {
        divGlobal.dataset.category = categoryKey;
    }

    // 关键步骤 2: 设置 draggable="true" 启用拖拽功能
    divGlobal.setAttribute('draggable', 'true'); // <--- 确保添加了这行代码!

    const divTitle = document.createElement('div');
    divTitle.className = 'title_global';
    divTitle.textContent = title;
    divGlobal.appendChild(divTitle);

    const ulGlobal = document.createElement('ul');
    ulGlobal.className = 'ul_global';

    websiteList.forEach(link => {
        const liGlobal = document.createElement('li');
        liGlobal.className = 'li_global';

        const aGlobal = document.createElement('a');
        aGlobal.className = `a_global ${link.level || ''}`;
        aGlobal.href = link.url;
        aGlobal.target = link.target || '_blank';
        aGlobal.textContent = link.name;

        // 关键：给每个 a 标签加上 data-category，点击时统计
        if (categoryKey) {
            aGlobal.dataset.category = categoryKey;
        }

        liGlobal.appendChild(aGlobal);
        ulGlobal.appendChild(liGlobal);
    });

    divGlobal.appendChild(ulGlobal);

    const targetElement = document.querySelector('div.echo');
    if (targetElement) {
        targetElement.appendChild(divGlobal);
    } else {
        console.error('未找到目标元素 div.echo');
    }
}

// 创建并追加链接元素的函数
function createAndAppendLinks(items, targetSelector) {
    // 使用 forEach 遍历数组中的每一个对象
    items.forEach(item => {
        // 1. 创建 <li> 元素
        const li = document.createElement('li');
        li.className = 'li_global';

        // 2. 创建 <a> 元素
        const a = document.createElement('a');

        // 3. 设置 <a> 的属性
        // 确保 a_global 是基础 class，并追加 level 作为额外 class
        a.className = `a_global ${item.level}`;
        a.href = item.url;
        a.target = item.target; // 使用数据中的 target 属性
        a.textContent = item.name; // 使用数据中的 name 作为链接文本

        // 4. 将 <a> 追加到 <li> 中
        li.appendChild(a);

        // 7. 获取目标元素
        const targetElement = document.querySelector(targetSelector);

        // 8. 插入元素
        if (targetElement) {
            targetElement.appendChild(li);
            console.log('元素已成功插入。');
        } else {
            console.error('未找到目标元素 div.echo。');
        }

    });

    // console.log(`成功创建并追加了 ${items.length} 个链接元素到 ${targetSelector}。`);
}

// 移动 echo div._footer 位置
function _footer_move() {
    let target = document.querySelector('.echo')
    let child = document.querySelector('div._footer')
    target.appendChild(child)
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

        if (div_global[i].querySelectorAll('li').length * 31 + fbt > 10 * 31 || sum + fbt > 10 * 31) {
            // if (sum_scroll() + fbt > 8 * 31) {
            let scroll_innerHTML = document.createElement('div');
            scroll_innerHTML.textContent = '*可向上滑动查看更多';
            scroll_innerHTML.className = "scroll";
            document.querySelectorAll("div.div_global")[i].appendChild(scroll_innerHTML);
            ////console.log("// scroll_switch() 正在执行插入 // 子元素较多");
            ////clearInterval(scroll_check);
        }
    }

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

            document.getElementById('dh_pageContainer').style.background = 'aliceblue'; // 设置背景颜色
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

            document.getElementById('dh_pageContainer').style.background = 'aliceblue'; // 设置背景颜色
            console.log('CSP-设置背景颜色！')

        }
    }
}


async function fetchCodes() { // 获取 JSON 文件内容
    try {
        const response = await fetch('https://limbopro.com/Adguard/Adblock4limbo.function.json');
        if (!response.ok) throw new Error('无法加载 JSON 文件');
        var dataList = await response.json();
        // window.websiteList = dataList;
        window.websiteList = dataListbak; // 使用备份数据
        // console.log(dataList);
    } catch (error) {
        // console.error('错误:', error);
        window.websiteList = dataListbak; // 使用备份数据
        console.log('使用备份数据:', dataListbak);
    }
}

//fetchCodes();

// 执行父容器初始化
parentElement_add();

// ==================== 智能排序系统开始 ====================

// 记录点击
function incrementClickCount(category) {
    if (!category) return;
    let stats = JSON.parse(localStorage.getItem('navClickStats') || '{}');
    stats[category] = (stats[category] || 0) + 1;
    localStorage.setItem('navClickStats', JSON.stringify(stats));

    // 实时更新排序（推荐）
    sortMenusByPopularity();
}

// 主排序函数
// 主排序函数 (已更新以支持自定义拖拽顺序)
function sortMenusByPopularity() {
    const container = document.querySelector('.echo');
    if (!container) return;

    // 1. 获取所有可排序的菜单元素
    const menuDivs = Array.from(container.querySelectorAll('.div_global'))
        .filter(div => div.dataset && div.dataset.category);

    // 2. 尝试读取自定义排序
    const customOrderJson = localStorage.getItem('customMenuOrder');

    if (customOrderJson) {
        // --- 优先使用自定义排序 ---
        const customOrder = JSON.parse(customOrderJson);

        // 使用自定义顺序来排序 menuDivs
        menuDivs.sort((a, b) => {
            const indexA = customOrder.indexOf(a.dataset.category);
            const indexB = customOrder.indexOf(b.dataset.category);

            // 确保未在 customOrder 中的元素排在后面 (使用一个大数字)
            const orderA = indexA === -1 ? menuDivs.length : indexA;
            const orderB = indexB === -1 ? menuDivs.length : indexB;

            return orderA - orderB;
        });

    } else {
        // --- 退回到智能排序 (点击次数) ---
        const stats = JSON.parse(localStorage.getItem('navClickStats') || '{}');

        menuDivs.sort((a, b) => {
            const ca = a.dataset.category;
            const cb = b.dataset.category;
            const diff = (stats[cb] || 0) - (stats[ca] || 0);
            if (diff !== 0) return diff;
            // 次数相同就按原始顺序（通过 DOM 顺序近似实现）
            return 0;
        });
    }

    // 3. 重新插入元素以应用新顺序
    menuDivs.forEach(div => container.appendChild(div));
}

// 页面加载完自动排序
setTimeout(sortMenusByPopularity, 1500);

// 全局点击监听（只需执行一次）
document.addEventListener('click', function (e) {
    const link = e.target.closest('a[data-category]');
    if (link) {
        const category = link.dataset.category;
        incrementClickCount(category);
    }
});

// 重置排序
document.getElementById('resetSort')?.addEventListener('click', () => {
    if (!confirm('确定要重置所有排序设置吗？包括智能排序数据和自定义拖拽顺序。')) return;

    // 1. 清空智能排序统计数据
    localStorage.removeItem('navClickStats');
    // 2. 清空自定义拖拽顺序数据 (新增)
    localStorage.removeItem('customMenuOrder');

    confirmndExecuteFC('所有排序数据已重置，即将重新载入...');
    location.reload();
});





// ==================== 拖拽排序系统开始 ====================

// 用于存储被拖拽的元素
window.draggedItem = null;
// 用于存储拖拽目标上方的元素
window.dragOverItem = null;

window.rankContainer = document.querySelector('.echo');

if (rankContainer) {
    // 监听拖拽开始事件 (在拖拽的元素上触发)
    rankContainer.addEventListener('dragstart', function (e) {
        // 确保只有 .div_global 可以被拖拽
        if (e.target.classList.contains('div_global')) {
            draggedItem = e.target;
            // 设置拖拽数据，虽然在这里不是必需的，但标准做法是设置 'text/plain'
            e.dataTransfer.setData('text/plain', draggedItem.dataset.category);
            e.target.classList.add('dragging'); // 可选：添加样式
        }
    });

    // 监听拖拽结束事件 (在拖拽的元素上触发)
    rankContainer.addEventListener('dragend', function (e) {
        e.target.classList.remove('dragging');
        draggedItem = null;
        dragOverItem = null;
        // 拖拽结束后，保存新的顺序
        saveCustomOrder();
    });

    // 监听拖拽进入目标区域的事件 (在目标元素上触发)
    rankContainer.addEventListener('dragover', function (e) {
        e.preventDefault(); // 必须调用，以允许放置 (drop)
        if (!draggedItem || !e.target.closest('.div_global') || e.target.closest('.div_global') === draggedItem) return;

        const target = e.target.closest('.div_global');
        if (target !== dragOverItem) {
            if (dragOverItem) dragOverItem.classList.remove('drag-over');
            dragOverItem = target;

            // 可选：根据鼠标位置决定是在目标上方还是下方插入
            const rect = target.getBoundingClientRect();
            const isAfter = e.clientY > rect.top + rect.height / 2;

            target.classList.add('drag-over');
            rankContainer.insertBefore(draggedItem, isAfter ? target.nextElementSibling : target);
        }
    });

    // 监听拖拽离开目标区域的事件 (在目标元素上触发)
    rankContainer.addEventListener('dragleave', function (e) {
        const target = e.target.closest('.div_global');
        if (target && target === dragOverItem) {
            target.classList.remove('drag-over');
            dragOverItem = null;
        }
    });
}


// 保存当前 DOM 顺序的函数
function saveCustomOrder() {
    const order = Array.from(rankContainer.querySelectorAll('.div_global'))
        .map(div => div.dataset.category)
        .filter(category => category); // 过滤掉没有 category 的元素

    localStorage.setItem('customMenuOrder', JSON.stringify(order));
    console.log('自定义排序已保存:', order);
}

// ==================== 拖拽排序系统结束 ====================
// ==================== 智能排序系统结束 ====================





function nsfwmode(x) { // 是否开启
    if (x == 'false') {
        fcsetCookie('nsfwmode', 'false', '400');
        setTimeout(() => { nsfwmode_check() }, 100)
    } else if (x == 'true') {
        fcsetCookie('nsfwmode', 'true', '400');
        setTimeout(() => { nsfwmode_check() }, 100)
    } else if (getCookie('nsfwmode') == 'false') {
        fcsetCookie('nsfwmode', 'true', '400');
        setTimeout(() => { nsfwmode_check() }, 100)
    } else if (getCookie('nsfwmode') == 'true') {
        fcsetCookie('nsfwmode', 'false', '400');
        setTimeout(() => { nsfwmode_check() }, 100)
    } else if (getCookie('nsfwmode') == '') {
        fcsetCookie('nsfwmode', 'false', '400');
        setTimeout(() => { nsfwmode_check() }, 100)
    }
}


function getCookie(cname) {
    var name = cname + "="; var ca = document.cookie.split(';'); for (var i = 0; i < ca.length; i++) { var c = ca[i].trim(); if (c.indexOf(name) == 0) return c.substring(name.length, c.length); }
    return "";
}

var click_sum = 0;



function daohangMode_switch(x) {
    // 1. 获取 DOM 引用 (减少重复查询)
    const btnDh = document.querySelector('button#dh_button');
    const containerDh = document.querySelector('#dh_buttonContainer');
    const btnToggle = document.querySelector('button#hidedaohang');

    // 2. 处理自动切换逻辑 (将无参数或 Cookie 检查逻辑前置)
    if (!x) {
        const currentChoice = getCookie("daohangMode_yourChoice");
        x = (currentChoice === '' || currentChoice === 'hidden') ? 'show' : 'hidden';
    }

    // 3. 执行具体分支
    if (x === 'hidden') {
        fcsetCookie("daohangMode_yourChoice", 'hidden', 400);

        btnDh?.setAttribute("class", "cmsnone " + bottom());
        containerDh?.setAttribute("class", "cmsnone");

        updateNavigationButtonDisplay('hidden');

        if (btnToggle) {
            btnToggle.textContent = "导航按钮(OFF)";
            // 使用 !important 防止被原网页样式覆盖
            btnToggle.style.setProperty('background', 'red', 'important');
        }

        // 引导逻辑
        if (typeof click_sum !== 'undefined' && click_sum++ === -1) {
            confirmndExecuteFC('已隐藏页面右下角的导航按钮；(快捷唤起导航🧭页面)的方法? -> 1秒内，电脑用户(连续敲击2次ESC键)，iOS用户(在页面空白处连续点击4次及以上)');
        }

    } else if (x === 'show') {
        fcsetCookie("daohangMode_yourChoice", 'show', 400);

        // 如果按钮不存在，则初始化
        if (!btnDh) {
            body_build('true');
            return;
        }

        btnDh.setAttribute("class", "cms " + bottom());
        containerDh?.setAttribute("class", "cms pointer-events-none notranslate");

        if (btnToggle) {
            btnToggle.textContent = "导航按钮(ON)";
            btnToggle.style.setProperty('background', 'green', 'important');
        }

        updateNavigationButtonDisplay('1');

        setTimeout(() => {
            body_build('false');
        }, 1000);
    }
}

// 隐藏按钮选项

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

window.ads_css = '.ad_img {display:none! important; pointer-events: none !important;}\
'
function ads_remove(selector) {
    document.querySelectorAll(selector).forEach((x) => { x.remove() })
    css_add(ads_css, "fuckads")
}



/**
* 动态创建并注入外部资源 (CSS 或 JavaScript) 到 HTML 文档中。
* 此版本用于最简调用，不依赖 Promise 或 Callback 返回结果，资源状态由浏览器在后台处理。
*
* @param {string} type - 资源类型，必须是 'script' 或 'style' (或 'link')。
* @param {string} url - 外部资源的 URL (src 或 href)。
* @param {string} targetParent - 资源要注入的目标父元素，必须是 'head' 或 'body'。
* @param {string} [id] - 可选，为创建的元素设置 ID。
* @returns {void} 函数立即返回，不等待加载结果。
*/
window.loadExternalResourceFireAndForget = function loadExternalResourceFireAndForget(type, url, targetParent, id) {
    // --- 1. 参数校验和规范化 ---
    const normalizedType = type ? type.toLowerCase() : '';
    const normalizedTargetParent = targetParent ? targetParent.toLowerCase() : '';

    if (!url || (normalizedType !== "script" && normalizedType !== "link" && normalizedType !== "style")) {
        console.error("loadExternalResourceFireAndForget 错误: 缺少有效的 URL 或资源类型 ('script', 'link', 'style')。");
        return; // 直接退出
    }

    // --- 2. 确定目标父元素和环境检查 ---
    let parentElement;
    if (normalizedTargetParent === "body") {
        parentElement = document.body;
    } else if (normalizedTargetParent === "head") {
        parentElement = document.head;
    }

    if (!parentElement) {
        console.error(`loadExternalResourceFireAndForget 错误: targetParent '${targetParent}' 无效或文档环境不支持。`);
        return; // 直接退出
    }

    // --- 3. 创建元素和属性设置 ---
    let resourceElement = null;

    if (normalizedType === "script") {
        resourceElement = document.createElement('script');
        resourceElement.type = "text/javascript";
        resourceElement.src = url;
        resourceElement.setAttribute('defer', '');

        // 虽然不使用 callback 或 promise，但保留 onerror 机制以清理 DOM 并记录错误
        resourceElement.onerror = () => {
            console.error(`[后台错误] 脚本加载失败: ${url}。已从 DOM 移除。`);
            resourceElement.remove();
        };
        // 注意：不设置 onload，加载成功后默默完成。

    } else if (normalizedType === "link" || normalizedType === "style") {
        resourceElement = document.createElement('link');
        resourceElement.rel = "stylesheet";
        resourceElement.type = "text/css";
        resourceElement.href = url;

        resourceElement.onerror = () => {
            console.error(`[后台错误] 样式表加载失败: ${url}。已从 DOM 移除。`);
            resourceElement.remove();
        };
    }

    // --- 4. 设置可选 ID 并注入 DOM ---
    if (id && resourceElement) {
        resourceElement.id = id;
    }

    if (resourceElement) {
        parentElement.appendChild(resourceElement);
    }
    // 函数在资源注入后立即返回。
}




// Start 运行js代码 zhixingjs


// =========================================================
// 核心函数定义
// =========================================================

/**
 * [新增] 将返回值格式化为可读的文本。
 * 特别是对于 Object 类型，使用 JSON.stringify 进行美化。
 * @param {*} result 待格式化的返回值。
 * @returns {string} 格式化后的 HTML 字符串。
 */
function formatResult(result) {
    if (typeof result === 'object' && result !== null) {
        try {
            // 使用 JSON.stringify 进行美化
            const jsonString = JSON.stringify(result, null, 2);
            // 必须使用 <pre> 标签包裹
            return `<pre style="white-space: pre-wrap; word-break: break-all; margin: 0; padding: 5px; background: #eee;">${jsonString}</pre>`;
        } catch (e) {
            return `[对象 - 无法序列化: ${e.message}]`;
        }
    }
    // 处理 undefined 和其他类型
    if (result === undefined) {
        return '无返回值 (undefined)';
    }
    if (result === null) {
        return 'null';
    }
    return result;
}

/**
 * 动态创建并注入 CSS 样式，用于悬浮窗。
 * 包含了结果输出窗和代码输入窗的样式。
 */
function injectFloatingWindowStyles() {
    const style = document.createElement('style');
    style.textContent = `
                /* 按钮和基础样式 */
                #body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                #runButton { padding: 12px 25px; font-size: 18px; cursor: pointer; background-color: #007bff; color: white; border: none; border-radius: 5px; }

                /* --- 结果输出窗 (Output Window) 样式 --- */
                #floating-output-container {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 450px;
                    max-width: 90vw;
                    max-height: 80vh;
                    background-color: white;
                    border: 3px solid #007bff;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
                    z-index: 9999999;
                    display: none; /* 默认隐藏，需要时再显示 */
                    flex-direction: column;
                    border-radius: 8px;
                    overflow: hidden;
                }

                #floating-output-header {
                    padding: 10px 15px;
                    background-color: #007bff;
                    color: white;
                    font-size: 1.1em;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                #floating-output-content {
                    padding: 15px;
                    overflow-y: auto;
                    flex-grow: 1;
                    text-align: left;
                }

                .close-btn {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 24px;
                    cursor: pointer;
                    line-height: 1;
                    padding: 0 5px;
                }

                /* 输出内容样式 */
                .success { color: green; font-weight: bold; }
                .error { color: red; font-weight: bold; }
                .result-item { margin-bottom: 10px; padding-bottom: 5px; border-bottom: 1px dotted #ccc; }
                
                /* --- 代码输入模态框 (Input Prompt Window) 样式 --- */
                #input-prompt-container {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 500px;
                    max-width: 90vw;
                    padding: 20px;
                    background-color: #f9f9f9;
                    border: 5px solid #0056b3;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
                    z-index: 10000000; /* 比输出窗高 */
                    border-radius: 10px;
                    display: none; /* 默认隐藏 */
                }
                /* 输入框工具栏样式 */
                #input-controls {
                    display: flex; /* 使用 Flexbox 布局 */
                    justify-content: flex-end; /* 按钮靠右对齐 */
                    margin-bottom: 10px;
                    gap: 10px; /* 按钮间距 */
                }
                .tool-btn {
                    padding: 6px 12px;
                    cursor: pointer;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    font-size: 13px;
                    background-color: #e9e9e9;
                }
                .tool-btn:hover {
                    background-color: #ddd;
                }
                #input-code-textarea {
                    width: 100%;
                    min-height: 150px;
                    padding: 10px;
                    margin-bottom: 15px; /* 恢复为 15px，因为工具栏在输入框上方 */
                    box-sizing: border-box;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    font-family: monospace;
                    font-size: 14px;
                    resize: vertical;
                }
                #input-prompt-buttons {
                    text-align: right;
                }
                .input-prompt-btn {
                    padding: 10px 20px;
                    margin-left: 10px;
                    cursor: pointer;
                    border: none;
                    border-radius: 5px;
                    font-weight: bold;
                }
                #execute-code-btn {
                    background-color: #28a745; 
                    color: white;
                }
                #cancel-code-btn {
                    background-color: #dc3545; 
                    color: white;
                }
            `;
    document.head.appendChild(style);
}

/**
 * 动态创建悬浮窗的 DOM 结构，并将其添加到 body。
 * @returns {HTMLElement} 悬浮窗的内容 DIV (用于输出)
 */
function createFloatingOutputDiv() {
    const containerId = 'floating-output-container';
    const contentId = 'floating-output-content';

    let container = document.getElementById(containerId);
    let contentDiv;

    if (container) {
        contentDiv = document.getElementById(contentId);
        contentDiv.innerHTML = '';
        container.style.display = 'flex';
        return contentDiv;
    }

    // --- 1. 创建容器 DIV ---
    container = document.createElement('div');
    container.id = containerId;
    container.className = 'notranslate'


    // --- 2. 创建头部和关闭按钮 ---
    const header = document.createElement('div');
    header.id = 'floating-output-header';
    header.innerHTML = '执行结果与状态';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = () => {
        container.style.display = 'none';
    };

    header.appendChild(closeBtn);
    container.appendChild(header);

    // --- 3. 创建内容 DIV (实际的输出区域) ---
    contentDiv = document.createElement('div');
    contentDiv.id = contentId;
    container.appendChild(contentDiv);

    // --- 4. 将容器添加到 body ---
    document.body.appendChild(container);
    container.style.display = 'flex';

    return contentDiv;
}

/**
 * 核心执行函数：如果参数是函数或可执行代码字符串，则执行。
 * @param {string|Function} param 待执行的参数。
 * @param {HTMLElement} outputDiv 用于显示输出结果的 DOM 元素。
 */
function attemptExecution(param, outputDiv) {
    outputDiv.innerHTML += '<div class="result-item">--- **执行开始** ---</div>';

    if (typeof param === 'function') {
        try {
            const result = param();
            outputDiv.innerHTML += `<p class="success">执行类型: [函数] 成功。</p>`;
            outputDiv.innerHTML += `<p><strong>函数返回值:</strong> ${formatResult(result)}</p>`;
        } catch (error) {
            outputDiv.innerHTML += `<p class="error">执行类型: [函数] 失败！</p>`;
            outputDiv.innerHTML += `<p><strong>错误信息:</strong> ${error.message}</p>`;
            console.error("函数执行错误:", error);
        }
    }
    else if (typeof param === 'string' && param.trim().length > 0) {
        const code = param.trim();

        try {
            // *** 使用 eval() 执行用户代码，可访问全局变量 ***
            const result = eval(code);

            outputDiv.innerHTML += `<p class="success">执行类型: [代码字符串] 成功。</p>`;
            outputDiv.innerHTML += `<p><strong>代码返回值:</strong> ${formatResult(result)}</p>`;
        } catch (error) {
            outputDiv.innerHTML += `<p class="error">执行类型: [代码字符串] 失败！</p>`;
            outputDiv.innerHTML += `<p><strong>错误信息:</strong> ${error.message}</p>`;
            outputDiv.innerHTML += `<p style="color:red;">💡 提示：此错误可能是因为代码无法访问全局变量或语法错误。注意：代码通过 eval() 执行，具有全局访问权限。</p>`;
            console.error(`代码执行失败。错误信息: ${error.message}`);
        }
    } else {
        outputDiv.innerHTML += `<p class="error">参数类型不可执行 (${typeof param}) 或为空。</p>`;
    }

    outputDiv.innerHTML += '<div class="result-item">--- **执行结束** ---</div>';
}


/**
 * [新增] 集中处理代码执行流程
 * @param {string} codeInput 待执行的代码字符串
 */
function executeCodeFromInput(codeInput) {
    const outputDiv = createFloatingOutputDiv();
    outputDiv.innerHTML = `<h3>准备执行</h3><p><strong>输入代码:</strong> <pre style="white-space: pre-wrap; word-break: break-all;">${codeInput}</pre></p>`;

    attemptExecution(codeInput, outputDiv);

    const container = document.getElementById('floating-output-container');
    if (container) {
        setTimeout(() => {
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }, 50);
    }
}


/**
 * [修改] 创建并显示代码输入模态框，新增清空和粘贴按钮。
 */
function createInputPrompt() {
    const containerId = 'input-prompt-container';
    const textareaId = 'input-code-textarea';
    const executeBtnId = 'execute-code-btn';
    const cancelBtnId = 'cancel-code-btn';

    // 新增按钮 ID
    const clearBtnId = 'clear-code-btn';
    const pasteBtnId = 'paste-code-btn';

    let container = document.getElementById(containerId);

    if (!container) {
        // --- 1. 创建容器 ---
        container = document.createElement('div');
        container.id = containerId;
        container.className = 'notranslate'
        container.innerHTML = `
                <h3 style="margin-top: 0; color: #0056b3;">请输入要执行的 JavaScript 代码</h3>
                
                <div id="input-controls">
                    <button id="${pasteBtnId}" class="tool-btn" style="
        color: white;
        background: green;
    ">粘贴</button>
                    <button id="${clearBtnId}" class="tool-btn" style="
    color: white;
    background: red;
">清空</button>
                </div>
                
                <textarea id="${textareaId}" placeholder="例如: document.title = 'Executed!'" value="console.log('Hello'); return 1 + 1;"></textarea>
                
                <div id="input-prompt-buttons">
                    <button id="${cancelBtnId}" class="input-prompt-btn">取消</button>
                    <button id="${executeBtnId}" class="input-prompt-btn">执行</button>
                </div>
            `;
        document.body.appendChild(container);

        // --- 2. 绑定事件 ---
        const codeTextarea = document.getElementById(textareaId);
        const executeBtn = document.getElementById(executeBtnId);
        const cancelBtn = document.getElementById(cancelBtnId);

        // 新增：获取工具按钮
        const clearBtn = document.getElementById(clearBtnId);
        const pasteBtn = document.getElementById(pasteBtnId);

        // 清空按钮逻辑
        clearBtn.onclick = () => {
            codeTextarea.value = '';
            codeTextarea.focus();
        };

        // 粘贴按钮逻辑
        pasteBtn.onclick = async () => {
            // 使用 Clipboard API 读取剪贴板内容 (需要浏览器权限)
            try {
                const clipboardText = await navigator.clipboard.readText();
                codeTextarea.value = clipboardText;
            } catch (err) {
                // 如果权限被拒绝或不支持
                confirmndExecuteFC('无法访问剪贴板，请检查浏览器权限设置或手动粘贴。错误: ' + err.message);
            }
            codeTextarea.focus();
        };

        // 执行逻辑
        executeBtn.onclick = () => {
            const codeInput = codeTextarea.value;
            container.style.display = 'none';
            if (codeInput.trim()) {
                executeCodeFromInput(codeInput);
            } else {
                const outputDiv = createFloatingOutputDiv();
                outputDiv.innerHTML = '<p>输入内容为空，执行中止。</p>';
            }
        };

        // 取消逻辑
        cancelBtn.onclick = () => {
            container.style.display = 'none';
            const outputDiv = createFloatingOutputDiv();
            outputDiv.innerHTML = '<p>用户已取消输入，执行中止。</p>';
        };

        codeTextarea.value = codeTextarea.value.trim();
    }

    return container;
}


/**
 * 引导用户输入并执行的主函数
 */
window.promptAndExecute = function promptAndExecute() {

    if (typeof body_build == 'function') {
        body_build('false')
    }

    const inputContainer = createInputPrompt();
    inputContainer.style.display = 'block';

    const codeTextarea = document.getElementById('input-code-textarea');
    if (codeTextarea) {
        codeTextarea.focus();
    }

    // 隐藏结果输出框（如果它当前是打开的）
    const outputContainer = document.getElementById('floating-output-container');
    if (outputContainer) {
        outputContainer.style.display = 'none';
    }
}



// =========================================================
// 初始化和事件绑定
// =========================================================

/*
// 1. 注入 CSS 样式
injectFloatingWindowStyles();

// 2. 获取按钮并绑定事件监听器

window.runButton = document.getElementById('zhixingjs');
if (runButton) {
    runButton.addEventListener('click', promptAndExecute);
}
*/




// End 运行js代码 zhixingjs


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


// 在番号详情页追加在线预览链接
window.tmd = function tmd(parentSelector, code, titleText) {
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
        //addLinkToContainer('Supjav[ultraHD]', 'https://supjav.com/?s=', code);
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



//window.addEventListener('load', function () {


loadExternalResourceFireAndForget('script', 'https://limbopro.com/Adguard/huacisousuo.user.js', 'head', 'huacisearch') // 加载过滤脚本
// 划词搜索结束 END


// 沉浸式翻译开始 Start

window.initImmersiveTranslationManager = function () {
    const SCRIPT_URL = 'https://limbopro.com/Adguard/Adblock4limbo.immersiveTranslation.user.js';
    const STORAGE_KEY = 'gemini_immersive_translation_state';

    // 1. 【核心：刷新即读取】先读 localstorage 判断是否要默认加载脚本
    const savedState = localStorage.getItem(STORAGE_KEY) || 'off';

    if (savedState === 'on') {
        console.log('[Gemini] 存储值为 ON，立即加载脚本');
        if (typeof loadExternalResourceFireAndForget === 'function') {
            loadExternalResourceFireAndForget('script', SCRIPT_URL, 'head', 'immersiveTranslation');
        } else {
            const script = document.createElement('script');
            script.src = SCRIPT_URL;
            document.head.appendChild(script);
        }
    }

    // 2. 【核心：UI 同步】判断要不要更新按钮文本和背景色
    const btn = document.getElementById('cjsfy');
    if (btn) {
        // 修改 button 显示的文本和背景色
        btn.dataset.state = savedState;
        btn.style.background = (savedState === 'on') ? 'green' : 'red';
        btn.innerText = `沉浸式翻译(${savedState.toUpperCase()})`;

        // 绑定点击事件，切换状态并存储
        btn.onclick = function () {
            const currentState = btn.dataset.state;
            const newState = currentState === 'off' ? 'on' : 'off';

            // 存储到 localstorage
            localStorage.setItem(STORAGE_KEY, newState);

            // 修改显示
            btn.dataset.state = newState;
            btn.style.background = (newState === 'on') ? 'green' : 'red';
            btn.innerText = `沉浸式翻译(${newState.toUpperCase()})`;

            if (newState === 'on') {
                if (typeof loadExternalResourceFireAndForget === 'function') {
                    loadExternalResourceFireAndForget('script', SCRIPT_URL, 'head', 'immersiveTranslation');
                    if (document.getElementById('translation-button')) {
                        document.getElementById('translation-button').classList.remove('scroll-hidden')
                    }
                    if (typeof confirmndExecuteFC === 'function') {
                        confirmndExecuteFC('脚本已加载，使用过程中1秒内连续点击页面空白处3次可切换显示或隐藏翻译按钮🔘');
                    } else {
                        confirm('脚本已加载，使用过程中1秒内连续点击页面空白处3次可切换显示或隐藏翻译按钮🔘')
                    }
                }
            } else {
                if (typeof confirmndExecuteFC === 'function') {
                    confirmndExecuteFC('脚本已关闭，但已注入的逻辑可能需要刷新页面才能完全清除。');
                } else {
                    if (document.getElementById('translation-button')) {
                        document.getElementById('translation-button').classList.add('scroll-hidden')
                    }
                    confirm('脚本已关闭，但已注入的逻辑可能需要刷新页面才能完全清除。')
                }
            }
        };
    }
};


// 执行初始化
window.initImmersiveTranslationManager();
// 沉浸式翻译结束 End

// 其他函数 媒体资源查找器 mtzyczq 开始 START
loadExternalResourceFireAndForget('script', 'https://limbopro.com/Adguard/m3u8Andmp4Finder.user.js', 'head', 'm3u8Andmp4Finder')
// 媒体资源M3U8&MP4资源链接查找器结束 END


/*debug*/

/* 用户反馈信息展示脚本 (重命名版) */
// Feedback 开始 START
/* 反馈信息展示脚本 (重命名版 - 已增强) */
loadExternalResourceFireAndForget('script', 'https://limbopro.com/Adguard/feedBackLinkMake.user.js', 'head', 'feedBackLinkMake')
// updateFeedbackLink()
// Feedback 结束 END


// 元素屏蔽器开始  START
loadExternalResourceFireAndForget('script', 'https://limbopro.com/Adguard/elementBlocker.user.js', 'head', 'elementBlocker')
// 元素屏蔽器 END


// 视频广告加速跳过 Start
loadExternalResourceFireAndForget('script', 'https://limbopro.com/Adguard/skipVideoAds.user.js', 'head', 'skipVideoAds')
// 视频广告加速跳过 END



// 测试小脚本 Start
loadExternalResourceFireAndForget('script', 'https://limbopro.com/Adguard/little.code.user.js', 'head', 'littleCode')
// 测试小脚本 END


/**
 * WebDebugger.js 开始 START
 * * 独立函数：Web 存储调试器 (Cookies/Local/Session/Config)
 * * 描述: 创建一个悬浮可拖拽的面板，用于实时查看和编辑 Cookie, LocalStorage, SessionStorage，
 * 并提取内嵌的 JSON 配置数据。
 * * 调用方法: 
 * 1. 引入文件: <script src="path/to/WebDebugger.js"></script>
 * 2. 执行: window.initWebDebugger();
 */

loadExternalResourceFireAndForget('script', 'https://limbopro.com/Adguard/WebDebugger.user.js', 'head', 'WebDebugger')
/* WebDebugger.js 结束 END
*/


// 查看页面上的脚本
loadExternalResourceFireAndForget('script', 'https://limbopro.com/Adguard/ScriptFind.user.js', 'head', 'ScriptFind')
//  查看页面上的脚本


//  更友好的确认框
loadExternalResourceFireAndForget('script', 'https://limbopro.com/Adguard/confirmndExecute.user.js', 'head', 'confirmndExecute')


loadExternalResourceFireAndForget('script', 'https://limbopro.com/Adguard/findAndDisplayExternalLinks.user.js', 'head', 'findAndDisplayExternalLinks')
// 示例调用：
// findAndDisplayExternalLinks();

// 循环清理透明元素
loadExternalResourceFireAndForget('script', 'https://limbopro.com/Adguard/clearLoop.user.js', 'head', 'clearLoop')

// 如何利用目标信息
loadExternalResourceFireAndForget('script', 'https://limbopro.com/Adguard/showLinkTipsModalOnce.user.js', 'head', 'showLinkTipsModalOnce')


// 加载 Adgurad 基础过滤器（CSS版） START
loadExternalResourceFireAndForget('script', 'https://limbopro.com/Adguard/Adguard.filter.user.js', 'head', 'AdguardFilter')
// 加载 Adgurad 基础过滤器（CSS版） END


// 脚本管理器 START
loadExternalResourceFireAndForget('script', 'https://limbopro.com/Adguard/showJsManager.user.js', 'head', 'showJsManager') // 加载过滤脚本
// 脚本管理器 END



// 成人保护模式 START
loadExternalResourceFireAndForget('script', 'https://limbopro.com/Adguard/pageProtect.user.js', 'head', 'pageProtect') // 加载过滤脚本
// 成人保护模式 END

// 检查脚本是否已正常挂载 START
loadExternalResourceFireAndForget('script', 'https://limbopro.com/Adguard/geminiScriptCheck.user.js', 'head', 'geminiScriptCheck') // 加载过滤脚本
// 检查脚本是否已正常挂载 END



// 狂野模式 START 会加载大量 ublock orgin 默认脚本
loadExternalResourceFireAndForget('script', 'https://limbopro.com/Adguard/crazyMode.user.js', 'head', '1crazyMode') // 加载过滤脚本
// 狂野模式 END

//});




/**
 * 基于 uBlock Origin 机制的通用属性读取中断函数
 * @param {string} chain - 属性路径，例如 'Object.prototype.ShouldLoadAds' 或 'a.b.c'
 * @param {Object} [owner=window] - 起始挂载对象，默认为 window
 */
function abortOnPropertyRead(chain, owner = window) {
    // 1. 生成唯一魔术标记
    const magic = String.fromCharCode(Date.now() % 26 + 97) +
        Math.floor(Math.random() * 982451653 + 982451653).toString(36);

    // 2. 中断函数
    const abort = function () {
        throw new ReferenceError(magic);
    };

    // 3. 递归构建拦截与延迟绑定
    const makeProxy = function (currentOwner, pathChain) {
        const pos = pathChain.indexOf('.');

        // 到达路径终点
        if (pos === -1) {
            const desc = Object.getOwnPropertyDescriptor(currentOwner, pathChain);
            if (!desc || desc.get !== abort) {
                Object.defineProperty(currentOwner, pathChain, {
                    get: abort,
                    set: function () { },
                    configurable: true
                });
            }
            return;
        }

        // 处理嵌套路径（如 a.b.c）
        const prop = pathChain.slice(0, pos);
        let v = currentOwner[prop];
        const nextChain = pathChain.slice(pos + 1);

        if (v) {
            makeProxy(v, nextChain);
            return;
        }

        // 若中间节点未建立，监听其 setter，等待赋值时再挂载后续拦截
        const desc = Object.getOwnPropertyDescriptor(currentOwner, prop);
        if (desc && desc.set !== undefined) { return; }

        Object.defineProperty(currentOwner, prop, {
            get: function () { return v; },
            set: function (a) {
                v = a;
                if (a instanceof Object) {
                    makeProxy(a, nextChain);
                }
            },
            configurable: true
        });
    };

    makeProxy(owner, chain);

    // 4. 拦截全局全局 onerror，静默被中断的异常
    const oe = window.onerror;
    window.onerror = function (msg, src, line, col, error) {
        if (typeof msg === 'string' && msg.indexOf(magic) !== -1) {
            return true; // 吞掉匹配 magic 的错误
        }
        if (oe instanceof Function) {
            return oe(msg, src, line, col, error);
        }
    };
}

// ================= 调用示例 =================

// 示例 1：拦截原型链上的属性
//// abortOnPropertyRead('Object.prototype.ShouldLoadAds');

// 示例 2：拦截 window 下的嵌套深层属性（支持延迟加载）
// abortOnPropertyRead('someAdsSDK.config.enabled');


/**
 * 通用调用栈匹配拦截函数 (AOST)
 * @param {string} path - 监控的属性路径（例如：'Object.prototype.pgmp'）
 * @param {string|RegExp} stackNeedle - 调用栈需要包含的关键字或正则对象
 */
function abortOnStackTrace(path, stackNeedle) {
    const magic = String.fromCharCode(Date.now() % 26 + 97) +
        Math.floor(Math.random() * 982451653 + 982451653).toString(36);

    const abort = function () {
        throw new ReferenceError(magic);
    };

    const stackRegexp = stackNeedle instanceof RegExp
        ? stackNeedle
        : new RegExp(stackNeedle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

    const checkStackAndAbort = function () {
        const stack = (new Error()).stack;
        if (typeof stack === 'string' && stackRegexp.test(stack)) {
            console.warn(`[AOST] 匹配到调用栈特征 '${stackNeedle}'，拦截属性 '${path}' 的访问！`);
            abort();
        }
    };

    const makeProxy = function (owner, chain) {
        const pos = chain.indexOf('.');
        if (pos === -1) {
            let currentValue;
            const desc = Object.getOwnPropertyDescriptor(owner, chain);

            Object.defineProperty(owner, chain, {
                get: function () {
                    checkStackAndAbort();
                    return desc && desc.get ? desc.get.call(owner) : currentValue;
                },
                set: function (val) {
                    checkStackAndAbort();
                    if (desc && desc.set) {
                        desc.set.call(owner, val);
                    } else {
                        currentValue = val;
                    }
                },
                configurable: true
            });
            return;
        }

        const prop = chain.slice(0, pos);
        let v = owner[prop];
        chain = chain.slice(pos + 1);
        if (v) {
            makeProxy(v, chain);
            return;
        }

        Object.defineProperty(owner, prop, {
            get: function () { return v; },
            set: function (a) {
                v = a;
                if (a instanceof Object) {
                    makeProxy(a, chain);
                }
            },
            configurable: true
        });
    };

    makeProxy(window, path);

    const oe = window.onerror;
    window.onerror = function (msg, src, line, col, error) {
        if (typeof msg === 'string' && msg.indexOf(magic) !== -1) {
            return true;
        }
        if (oe instanceof Function) {
            return oe(msg, src, line, col, error);
        }
    };
}

// ================= 使用示例 =================
// 还原你日志里的 AdGuard 规则：
//// abortOnStackTrace('Object.prototype.pgmp', 'invokeInterstitial');


// 这里存放导航页各类网站

// 备份数据列表
var dataListbak = {
    "SpeedTest": [
        {
            "name": "Cloudflare",
            "url": "https://speed.cloudflare.com/",
            "target": "_blank",
            "level": "better yellow"
        },
        {
            "name": "SpeedTest",
            "url": "https://www.speedtest.net/",
            "target": "_blank",
            "level": "common"
        }, {
            "name": "StairSpeedTest(机场测速)",
            "url": "https://limbopro.com/archives/ssrspeed.html",
            "target": "_blank",
            "level": "special"
        }
    ],
    "PornMedia": [
        {
            "name": "FANZA|R18成人站",
            "url": "https://www.dmm.co.jp/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "溜池ゴロー",
            "url": "https://tameikegoro.jp/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "s1s1s1 S1/エスワンー",
            "url": "https://s1s1s1.com/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "VENUSーＳ級熟女メーカ|Ｓ級熟女メーカー",
            "url": "https://venus-av.com/",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "SOD（ソフトオンデマンド）",
            "url": "https://www.sod.co.jp/",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "Glory Questー「禁断介護」や逆ショタ元祖",
            "url": "https://www.gloryquest.tv/",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "ながえSTYLE(NTR)",
            "url": "https://www.nagae-style.com/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "Madonna（マドンナ）",
            "url": "https://www.madonna-av.com/top/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "ATTACKERS（アタッカーズ）",
            "url": "https://www.attackers.net/top/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "PRESTIGE(プレステージ)",
            "url": "https://www.prestige-av.com/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "PREMIUM（プレミアム",
            "url": "https://www.premium-beauty.com/top/",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "MOODYZー",
            "url": "https://www.moodyz.com/top/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "IDEAPOCKET (アイデアポケット）",
            "url": "https://www.ideapocket.com/top/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "OPPAI（おっぱい）",
            "url": "https://www.oppai-av.com/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "【kawaii*】公式サイト",
            "url": "https://www.kawaiikawaii.jp/top/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "肉感あふれる女優",
            "url": "https://www.fitch-av.com/top/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "タカラ映像 TAKARA",
            "url": "https://www.takara-tv.jp/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "トップページ - AVメーカー【ダスッ！】公式サイト",
            "url": "https://www.dasdas.jp/top/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "レズ・素人ナンパを中心",
            "url": "https://deeps.net/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "変態紳士倶楽部】公式サイト",
            "url": "https://www.to-satsu.com/top/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "wanzfactory（ワンズファクトリー）",
            "url": "https://www.wanz-factory.com/top/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "【E-BODY（イーボディ）】公式サイト",
            "url": "https://www.av-e-body.com/top/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "MGS動画は",
            "url": "https://www.mgstage.com/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "ABC/妄想族(1302本)",
            "url": "https://www.mousouzoku-av.com/top/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "JET「卍GROUP」のトップページです",
            "url": "https://manji-group.com/top/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "!! ROCKET",
            "url": "https://www.rocket-inc.net/top.php",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "FANZA通販-アダルト通販ショッピング",
            "url": "https://www.dmm.co.jp/mono/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "【無垢】公式サイトトーップページ | AVメーカ",
            "url": "https://www.muku.tv/top/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "HHH(トリプルエイチ)| AVメーカ",
            "url": "https://hhh-av.com/top/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "痴女ヘブンのトップページ| AVメーカ",
            "url": "https://bi-av.com/top",
            "target": "_blank",
            "level": "common"
        }
    ],
    "poxrn": [
        {
            "name": "SOD（ソフトオンデマンド）",
            "url": "https://www.sod.co.jp/",
            "target": "_blank",
            "level": "common"
        }
    ],
    "Tech": [
        {
            "name": "Github",
            "url": "https://github.com/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "Wikipedia",
            "url": "https://zh.wikipedia.org/wiki/Wikipedia:%E9%A6%96%E9%A1%B5",
            "target": "_blank",
            "level": "common"
        }
    ],
    "SocialMedia": [
        {
            "name": "Reddit",
            "url": "https://www.reddit.com/",
            "target": "_blank",
            "level": "special yellow"
        },
        {
            "name": "Quora",
            "url": "https://www.quora.com/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "Twitter",
            "url": "https://twitter.com/",
            "target": "_blank",
            "level": "special yellow"
        },
        {
            "name": "Instagram",
            "url": "https://www.instagram.com/",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "Tiktok",
            "url": "https://www.tiktok.com/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "Youtube",
            "url": "https://m.youtube.com/",
            "target": "_blank",
            "level": "special"
        }
    ],
    "Media": [
        {
            "name": "Netflix",
            "url": "https://www.netflix.com/browse",
            "target": "_blank",
            "level": "special yellow"
        },
        {
            "name": "HBO",
            "url": "https://www.hbo.com/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "Disney+",
            "url": "https://www.disneyplus.com/en-hk",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "Amazon Prime Video",
            "url": "https://www.primevideo.com/",
            "target": "_blank",
            "level": "common"
        }
    ],
    "images": [
        {
            "name": "Pexels",
            "url": "https://www.pexels.com/",
            "target": "_blank",
            "level": "common yellow"
        },
        {
            "name": "Pixbay",
            "url": "https://pixabay.com/",
            "target": "_blank",
            "level": "common"
        }
    ],
    "Developer": [
        {
            "name": "Github",
            "url": "https://github.com/",
            "target": "_blank",
            "level": "special yellow"
        },
        {
            "name": "v2ex",
            "url": "https://www.v2ex.com/",
            "target": "_blank",
            "level": "yellow"
        },
        {
            "name": "思否",
            "url": "https://segmentfault.com/",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "infoq",
            "url": "https://www.infoq.cn/",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "掘金",
            "url": "https://juejin.cn/",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "MDN",
            "url": "https://developer.mozilla.org/zh-CN/",
            "target": "_blank",
            "level": "common yellow"
        },
        {
            "name": "w3schools",
            "url": "https://w3schools.cn/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "Stack Overflow",
            "url": "https://stackoverflow.com/",
            "target": "_blank",
            "level": "common"
        }
    ],
    "Front-build": [
        {
            "name": "Typecho",
            "url": "https://typecho.org/",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "Vercel",
            "url": "https://vercel.com/new",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "Cloudflare Pages",
            "url": "https://pages.cloudflare.com/",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "Gitpages",
            "url": "https://pages.github.com/",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "Fly.io",
            "url": "https://fly.io/",
            "target": "_blank",
            "level": "common"
        }
    ],
    "domain-buy": [
        {
            "name": "NameSilo",
            "url": "https://www.namesilo.com/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "Cloudflare Domain",
            "url": "https://www.cloudflare.com/products/registrar/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "NameCheap",
            "url": "https://www.namecheap.com/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "freenom",
            "url": "https://www.freenom.com/zh/freeandpaiddomains.html",
            "target": "_blank",
            "level": "common"
        }
    ],
    "xyellow": [
        {
            "name": "今晚看什么？",
            "url": "https://limbopro.com/tools/jwksm/",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "Jable",
            "url": "https://jable.tv/",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "Missav",
            "url": "https://missav.ws/cn/",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "Javtiful",
            "url": "https://javtiful.com/zh/main",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "Javbus",
            "url": "https://www.javbus.com/",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "JavLibrary",
            "url": "https://www.javlibrary.com/cn/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "Pornhub",
            "url": "https://cn.pornhub.com/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "Xvideos",
            "url": "https://www.xvideos.com/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "Javday",
            "url": "https://javday.tv/",
            "target": "_blank",
            "level": "better"
        }, {
            "name": "小黄书",
            "url": "https://xchina.co/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "Njav",
            "url": "https://24av.net/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "hanime1",
            "url": "https://hanime1.me/comics",
            "target": "_blank",
            "level": "common"
        }
        ,
        {
            "name": "Porn Dude",
            "url": "https://theporndude.com/zh",
            "target": "_blank",
            "level": "common"
        }
    ],
    "knowledge": [
        {
            "name": "正则表达式",
            "url": "https://limbopro.com/archives/Regular_Expressions.html",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "快乐的命令行",
            "url": "https://t.me/limboprossr/3197",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "认知偏差手册",
            "url": "https://s75w5y7vut.feishu.cn/docs/doccn3BatnScBJe7wD7K3S5poFf#RirzLG",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "Bash 教程",
            "url": "https://wangdoc.com/bash/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "SSH 教程",
            "url": "https://wangdoc.com/ssh/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "Vim从入门到精通",
            "url": "https://limbopro.com/archives/31058.html",
            "target": "_blank",
            "level": "common"
        }
    ],
    "ipcheck": [
        {
            "name": "ip地址查询（当前代理节点/本地IP信息）",
            "url": "https://ip.skk.moe/",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "域名被墙检测",
            "url": "https://www.checkgfw.com/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "网站状态检测",
            "url": "https://check-host.net/check-http?host=https://limbopro.com",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "IP.SB",
            "url": "https://ip.sb/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "BGP Toolkit ",
            "url": "https://bgp.he.net/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "Baidu",
            "url": "https://www.baidu.com/",
            "target": "_blank",
            "level": "common"
        }
    ],
    "search": [
        {
            "name": "Google",
            "url": "https://www.google.com/",
            "target": "_blank",
            "level": "special yellow"
        },
        {
            "name": "Bing",
            "url": "https://www.bing.com/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "DuckDuckGo",
            "url": "https://duckduckgo.com/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "Yahoo!）",
            "url": "https://hk.yahoo.com/?p=us",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "搜狗搜索",
            "url": "https://www.sogou.com/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "Baidu",
            "url": "https://www.baidu.com/",
            "target": "_blank",
            "level": "common"
        }
    ],
    "AICHAT": [
        {
            "name": "Grok",
            "url": "https://grok.com/",
            "target": "_blank",
            "level": "special yellow"
        },
        {
            "name": "Google Bard",
            "url": "https://bard.google.com/?hl=en",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "Github Copilot",
            "url": "https://github.com/copilot",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "ChatGPT",
            "url": "https://chat.openai.com/auth/login",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "Bing AI",
            "url": "https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "Claude.ai",
            "url": "https://claude.ai/",
            "target": "_blank",
            "level": "better"
        }
    ],
    "Tools": [
        {
            "name": "在线正则表达式测试",
            "url": "https://tool.oschina.net/regex/",
            "target": "_blanl",
            "level": "special yellow"
        },
        {
            "name": "在线文件格式转换器",
            "url": "https://convertio.co/zh/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "PDF在线转换",
            "url": "https://www.ilovepdf.com/zh-cn",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "iconfont",
            "url": "https://www.iconfont.cn/",
            "target": "_blank",
            "level": "common"
        }
    ],
    "comic18": [
        {
            "name": "hitomi",
            "url": "https://hitomi.la/index-chinese.html",
            "target": "_blank",
            "level": "special yellow"
        },
        {
            "name": "jcomic",
            "url": "https://jcomic.net/",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "绅士漫画",
            "url": "https://www.wnacg.com/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "嗶咔picacg免費網頁版",
            "url": "https://manhuapica.com/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "E-Hentai",
            "url": "https://e-hentai.org/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "禁漫天堂",
            "url": "https://18comic.vip/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "肉漫",
            "url": "https://www.rouman5.com/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "dlsite",
            "url": "https://www.dlsite.com/books/",
            "target": "_blank",
            "level": "better"
        }
    ],
    "seoandmore": [
        {
            "name": "博客优化",
            "url": "https://limbopro.com/category/builder/",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "博客防御",
            "url": "https://limbopro.com/tag/Cloudflare/",
            "target": "_blank",
            "level": "common"
        }
    ],
    "bookreadanddownload": [
        {
            "name": "苦瓜书盘",
            "url": "https://kgbook.com/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "Library Genesis",
            "url": "https://www.libgen.is/",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "Z-library",
            "url": "https://limbopro.com/archives/30553.html",
            "target": "_blank",
            "level": "special yellow"
        }
    ],
    "front-end": [
        {
            "name": "网道",
            "url": "https://wangdoc.com/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "Web 开发技术",
            "url": "https://developer.mozilla.org/zh-CN/docs/Web",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "现代 JavaScript 教程",
            "url": "https://zh.javascript.info/",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "JavaScript高级程序设计",
            "url": "https://t.me/limboprossr/2812",
            "target": "_blank",
            "level": "common yellow"
        },
        {
            "name": "CSS教程",
            "url": "https://www.runoob.com/css/css-tutorial.html",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "w3school 在线教程",
            "url": "https://www.w3school.com.cn/index.html",
            "target": "_blank",
            "level": "common"
        }
    ],
    "downloading": [
        {
            "name": "M3U8下载?(Porn/Jable..)",
            "url": "https://limbopro.com/archives/M3U8-Downloader.html",
            "target": "_blank",
            "level": "common yellow"
        },
        {
            "name": "Twitter 视频下载(油猴脚本)",
            "url": "https://limbopro.com/archives/27446.html#%E8%84%9A%E6%9C%AC%E7%9A%84%E5%AE%89%E8%A3%85%E4%B8%8E%E4%BD%BF%E7%94%A8",
            "target": "_blank",
            "level": "common yellow"
        },
        {
            "name": "Instagram 视频下载(电报🤖)",
            "url": "https://t.me/instasavegrambot",
            "target": "_blank",
            "level": "del"
        },
        {
            "name": "YouTube 视频下载(电报🤖)",
            "url": "https://t.me/yt_dbot",
            "target": "_blank",
            "level": "del"
        },
        {
            "name": "Instagram 视频下载(iOS捷径)",
            "url": "https://limbopro.com/archives/1053.html",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "Instagram 视频下载(PC网页版)",
            "url": "https://sssinstagram.com/",
            "target": "_blank",
            'level': 'del'
        },
        {
            "name": "Youtube 视频下载(PC网页版)",
            "url": "https://ssyoutube.com/",
            "target": "_blank"
        },
        {
            "name": "Pornhub 视频下载(PC网页版)",
            "url": "https://www.saveporn.net/",
            "target": "_blank"
        },
        {
            "name": "More...",
            "url": "https://limbopro.com/category/downloader/",
            "target": "_blank"
        }
    ],
    "aigc": [
        {
            "name": "Stable Diffusion入门",
            "url": "https://limbopro.com/archives/install_and_quickstart_Stable_Diffusion.html",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "Civitai",
            "url": "https://civitai.com/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "Midjourney",
            "url": "https://midjourney.com/",
            "target": "_blank",
            "level": "better yellow"
        },
        {
            "name": "Notion AI",
            "url": "https://www.notion.so/product/ai",
            "target": "_blank",
            "level": "better"
        }
    ],
    "currentnews": [
        {
            "name": "网易新闻",
            "url": "https://news.163.com/",
            "target": "_blank",
            "level": "better yellow"
        },
        {
            "name": "谷歌新闻",
            "url": "https://news.google.com/home?hl=zh-CN&gl=CN&ceid=CN:zh-Hans",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "纽约时报",
            "url": "https://cn.nytimes.com/zh-hant/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "华尔街日报",
            "url": "https://cn.wsj.com/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "BBC News",
            "url": "https://www.bbc.com/zhongwen/simp",
            "target": "_blank",
            "level": "common"
        }
    ],
    "writer": [
        {
            "name": "顶尖文案TOPYS",
            "url": "https://www.topys.cn/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "广告门",
            "url": "https://www.adquan.com/",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "梅花网",
            "url": "https://www.meihua.info/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "数英网",
            "url": "https://www.digitaling.com/",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "运营派",
            "url": "https://www.yunyingpai.com/",
            "target": "_blank",
            "level": "common"
        }
    ],
    "technews": [
        {
            "name": "少数派",
            "url": "https://sspai.com/",
            "target": "_blank",
            "level": "common yellow"
        },
        {
            "name": "虎嗅",
            "url": "https://huxiu.com/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "36Kr",
            "url": "https://36kr.com/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "爱范儿",
            "url": "https://www.ifanr.com/",
            "target": "_blank",
            "level": "common"
        },
        {
            "name": "pingwest",
            "url": "https://www.pingwest.com/",
            "target": "_blank",
            "level": "common"
        }
    ],
    "movies": [
        {
            "name": "低端影视",
            "url": "https://ddys.pro/",
            "target": "_blank",
            "level": "special del"
        },
        {
            "name": "小宝影视",
            "url": "https://xiaobaotv.com/",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "iyf爱壹帆",
            "url": "https://www.iyf.tv/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "华人直播",
            "url": "https://huaren.live/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "🆕努努影院",
            "url": "https://nnyy.la/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "欧乐影视",
            "url": "https://www.olevod.tv/",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "剧迷网",
            "url": "https://gimy.com.tw/",
            "target": "_blank",
            "level": "better"
        }
    ],
    "imusic": [
        {
            "name": "Raining FM",
            "url": "https://raining.fm/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "SoundCloud",
            "url": "https://soundcloud.com/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "Spotify",
            "url": "https://open.spotify.com/",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "YT Music",
            "url": "https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ",
            "target": "_blank",
            "level": "special"
        },
        {
            "name": "网易云音乐",
            "url": "https://music.163.com/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "QQ音乐",
            "url": "https://y.qq.com/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "酷狗音乐",
            "url": "https://www.kugou.com/",
            "target": "_blank",
            "level": "better"
        }
    ],
    "cheeseispower": [
        {
            "name": "leetcode",
            "url": "ttps://leetcode.cn/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "炼码",
            "url": "https://www.lintcode.com/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "菜鸟教程",
            "url": "https://www.runoob.com/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "w3cschool",
            "url": "https://www.w3school.com.cn/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "Stackoverflow",
            "url": "https://stackoverflow.com/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "Github",
            "url": "https://github.com/",
            "target": "_blank",
            "level": "better"
        }
    ],
    "learnlingenglish": [
        {
            "name": "BBC News",
            "url": "https://www.bbc.com/",
            "target": "_blank",
            "level": "better yellow"
        },
        {
            "name": "台北时报",
            "url": "https://www.taipeitimes.com/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "NPR",
            "url": "https://www.npr.org/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "Voice of America",
            "url": "https://learningenglish.voanews.com/",
            "target": "_blank",
            "level": "better"
        }, {
            "name": "United Nations (UN) Official Website",
            "url": "https://www.un.org/en",
            "target": "_blank",
            "level": "best"
        },
        {
            "name": "TED",
            "url": "https://www.ted.com/",
            "target": "_blank",
            "level": "better yellow"
        }, {
            "name": "TED Ideas",
            "url": "https://ideas.ted.com/",
            "target": "_blank",
            "level": "better"
        }, {
            "name": "Good News",
            "url": "https://www.goodnewsnetwork.org/",
            "target": "_blank",
            "level": "better yellow"
        },
        {
            "name": "Breaking News English",
            "url": "https://breakingnewsenglish.com/",
            "target": "_blank",
            "level": "best"
        },
        {
            "name": "Elllo.org",
            "url": "https://www.elllo.org/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "BBC Learning English",
            "url": "https://www.bbc.co.uk/learningenglish/",
            "target": "_blank",
            "level": "best"
        },
        {
            "name": "British Council LearnEnglish",
            "url": "https://learnenglish.britishcouncil.org/",
            "target": "_blank",
            "level": "best"
        },
        {
            "name": "Cambridge English",
            "url": "https://www.cambridgeenglish.org/learning-english/",
            "target": "_blank",
            "level": "best yellow"
        },
        {
            "name": "TalkEnglish.com",
            "url": "https://www.talkenglish.com/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "Activities for ESL Students",
            "url": "https://a4esl.org/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "ESL Bits",
            "url": "http://www.esl-bits.net/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "Dave's ESL Cafe",
            "url": "https://www.eslcafe.com/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "Quill.org",
            "url": "https://www.quill.org/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "Howjsay",
            "url": "https://www.howjsay.com/",
            "target": "_blank",
            "level": "better"
        },
        {
            "name": "Sam Altman",
            "url": "https://blog.samaltman.com/",
            "target": "_blank",
            "level": "better"
        }
    ],
    "test": [

        {
            "name": "Github",
            "url": "https://github.com/",
            "target": "_blank",
            "level": "better"
        }
    ]
}

// 这里存放导航页各类网站






function showLimboAdNotice() {
    // 已经关闭过，不再显示
    if (localStorage.getItem('limbo_ad_notice_closed') === '1') {
        return;
    }

    // 防止重复创建
    if (document.getElementById('limbo-ad-notice')) {
        return;
    }

    // 创建全屏遮罩
    const notice = document.createElement('div');
    notice.id = 'limbo-ad-notice';

    notice.innerHTML = `
        <div class="limbo-ad-notice-box">

            <button class="limbo-ad-notice-close" aria-label="关闭">
                ×
            </button>

            <div class="limbo-ad-notice-icon">
                🛡️
            </div>

            <div class="limbo-ad-notice-title">
                毒奶去广告计划
            </div>

            <div class="limbo-ad-notice-text">
                <strong>该网站已加入毒奶去广告计划</strong>
                <br>
                本站广告、弹窗等干扰内容已被移除，<br>
                即刻享受更清爽的浏览体验。
            </div>

            <a class="limbo-ad-notice-link"
               href="https://limbopro.com/archives/12904.html"
               target="_blank"
               rel="noopener noreferrer">
                查看计划详情 →
            </a>

        </div>
    `;

    // CSS
    const style = document.createElement('style');
    style.id = 'limbo-ad-notice-style';

    style.textContent = `
        /* ================================
           全屏遮罩
        ================================= */


        /* ================================
   右下角导航指引箭头与提示框
================================= */
.limbo-dh-pointer-box {
    position: fixed;
    z-index: 2147483647;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    background: #576bff;
    color: #ffffff;
    font-size: 13px;
    font-weight: 600;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(87, 107, 255, 0.4);
    pointer-events: none;
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.limbo-dh-pointer-box.show {
    opacity: 1;
    transform: scale(1);
}

/* 动态浮动动画（指示右下角） */
@keyframes limboPointerBounce {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(6px, 6px); }
}

.limbo-dh-arrow-svg {
    width: 20px;
    height: 20px;
    fill: none;
    stroke: #ffffff;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
    animation: limboPointerBounce 1.2s infinite ease-in-out;
}


        #limbo-ad-notice {
            position: fixed;
            inset: 0;
            z-index: 2147483647;

            display: flex;
            align-items: center;
            justify-content: center;

            padding: 20px;
            box-sizing: border-box;

            background: rgba(0, 0, 0, 0.45);

            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);

            animation: limboNoticeFadeIn .25s ease;
        }


        /* ================================
           中间卡片
        ================================= */

        .limbo-ad-notice-box {
            position: relative;

            width: min(420px, 100%);
            box-sizing: border-box;

            padding: 42px 35px 36px;

            text-align: center;

            background: rgba(255, 255, 255, 0.92);

            border: 1px solid rgba(255, 255, 255, 0.5);

            border-radius: 20px;

            box-shadow:
                0 25px 80px rgba(0, 0, 0, 0.30),
                0 8px 30px rgba(0, 0, 0, 0.15);

            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);

            animation: limboNoticeScaleIn .25s ease;
        }


        /* ================================
           图标
        ================================= */

        .limbo-ad-notice-icon {
            margin-bottom: 15px;

            font-size: 42px;
            line-height: 1;
        }


        /* ================================
           标题
        ================================= */

        .limbo-ad-notice-title {
            margin-bottom: 12px;

            font-size: 24px;
            font-weight: 700;
            line-height: 1.4;

            color: #222;
        }


        /* ================================
           正文
        ================================= */

        .limbo-ad-notice-text {
            margin-bottom: 22px;

            font-size: 16px;
            line-height: 1.8;

            color: #555;
        }

        .limbo-ad-notice-text strong {
            color: #222;
            font-weight: 600;
        }


        /* ================================
           查看详情
        ================================= */

        .limbo-ad-notice-link {
            display: inline-block;

            padding: 10px 18px;

            border-radius: 10px;

            background: #576bff;
            color: #fff !important;

            font-size: 14px;
            font-weight: 500;

            text-decoration: none !important;

            transition:
                transform .2s ease,
                opacity .2s ease;
        }

        .limbo-ad-notice-link:hover {
            transform: translateY(-1px);
            opacity: .9;
        }


        /* ================================
           关闭按钮
        ================================= */

        .limbo-ad-notice-close {
            position: absolute;

            top: 12px;
            right: 14px;

            width: 36px;
            height: 36px;

            padding: 0;

            border: 0;
            border-radius: 50%;

            background: rgba(0, 0, 0, 0.05);

            color: #777;

            font-size: 26px;
            line-height: 36px;

            cursor: pointer;

            transition:
                background .2s ease,
                color .2s ease;
        }

        .limbo-ad-notice-close:hover {
            background: rgba(0, 0, 0, 0.1);
            color: #222;
        }


        /* ================================
           关闭后的中央提示
        ================================= */

        #limbo-ad-notice-toast {
            position: fixed;

            z-index: 2147483647;

            top: 50%;
            left: 50%;

            transform: translate(-50%, -50%);

            width: min(380px, calc(100vw - 40px));

            box-sizing: border-box;

            padding: 25px 25px 20px;

            text-align: center;

            border-radius: 16px;

            background: rgba(30, 30, 30, 0.94);

            color: #fff;

            box-shadow:
                0 20px 60px rgba(0, 0, 0, 0.35);

            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);

            animation: limboToastIn .3s ease;
        }

        .limbo-ad-notice-toast-title {
            margin-bottom: 8px;

            font-size: 18px;
            font-weight: 600;
        }

        .limbo-ad-notice-toast-text {
            color: rgba(255, 255, 255, 0.78);

            font-size: 14px;
            line-height: 1.7;
        }

        .limbo-ad-notice-toast-highlight {
            color: #fff;
            font-weight: 600;
        }

        .limbo-ad-notice-toast-timer {
            margin-top: 12px;

            font-size: 12px;

            color: rgba(255, 255, 255, 0.5);
        }

        .limbo-ad-notice-toast-timer b {
            color: #576bff;
        }


        /* ================================
           动画定义
        ================================= */

        @keyframes limboToastIn {
            from {
                opacity: 0;
                transform: translate(-50%, -50%) scale(.92);
            }

            to {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }

        @keyframes limboNoticeFadeIn {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }

        @keyframes limboNoticeFadeOut {
            from {
                opacity: 1;
            }

            to {
                opacity: 0;
            }
        }

        @keyframes limboNoticeScaleIn {
            from {
                opacity: 0;
                transform: scale(.92);
            }

            to {
                opacity: 1;
                transform: scale(1);
            }
        }


        /* ================================
           深色模式
        ================================= */

        @media (prefers-color-scheme: dark) {

            #limbo-ad-notice {
                background: rgba(0, 0, 0, 0.60);
            }

            .limbo-ad-notice-box {
                background: rgba(30, 30, 30, 0.92);

                border-color: rgba(255, 255, 255, 0.12);
            }

            .limbo-ad-notice-title {
                color: #fff;
            }

            .limbo-ad-notice-text {
                color: #bbb;
            }

            .limbo-ad-notice-text strong {
                color: #fff;
            }

            .limbo-ad-notice-close {
                background: rgba(255, 255, 255, 0.08);
                color: #aaa;
            }

            .limbo-ad-notice-close:hover {
                background: rgba(255, 255, 255, 0.15);
                color: #fff;
            }
        }


        /* ================================
           手机端
        ================================= */

        @media (max-width: 480px) {

            .limbo-ad-notice-box {
                padding: 35px 25px 30px;
                border-radius: 16px;
            }

            .limbo-ad-notice-title {
                font-size: 21px;
            }

            .limbo-ad-notice-text {
                font-size: 15px;
            }

            #limbo-ad-notice-toast {
                width: calc(100vw - 40px);

                padding: 23px 20px 18px;
            }

            .limbo-ad-notice-toast-title {
                font-size: 17px;
            }
        }
    `;

    // 插入页面
    document.head.appendChild(style);
    document.body.appendChild(notice);


    // ================================
    // 关闭按钮及倒计时逻辑
    // ================================

    // ================================
    // 关闭按钮及倒计时逻辑
    // ================================

    notice
        .querySelector('.limbo-ad-notice-close')
        .addEventListener('click', function () {

            // 1. 记录已经关闭
            localStorage.setItem(
                'limbo_ad_notice_closed',
                '1'
            );

            // 2. 移除主卡片
            const box = notice.querySelector(
                '.limbo-ad-notice-box'
            );
            if (box) box.remove();

            // 3. 解除遮罩层对网页点击的拦截
            notice.style.pointerEvents = 'none';

            // 4. 初始化倒计时变量（30秒）
            let countdown = 30;
            let timer = null; // 提升 timer 作用域

            // 定义直接销毁节点的函数
            function destroyNotice() {
                if (timer) clearInterval(timer);
                notice.style.animation = 'limboNoticeFadeOut .3s ease forwards';

                setTimeout(function () {
                    notice.remove();

                    // 核心修改：定位 #dh_button 并显示指向箭头
                    const dhBtn = document.getElementById('dh_button');
                    if (dhBtn) {
                        dhBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

                        // 获取目标按钮的位置尺寸信息
                        const rect = dhBtn.getBoundingClientRect();

                        // 创建指引 Tooltip 容器
                        const pointer = document.createElement('div');
                        pointer.className = 'limbo-dh-pointer-box';

                        // 内部 HTML：提示文字 + 指向右下方的 SVG 动态箭头
                        pointer.innerHTML = `
                <span>反馈/导航在右下角</span>
                <svg class="limbo-dh-arrow-svg" viewBox="0 0 24 24">
                    <line x1="5" y1="5" x2="19" y2="19"></line>
                    <polyline points="10 19 19 19 19 10"></polyline>
                </svg>
            `;

                        document.body.appendChild(pointer);

                        // 计算相对位置：贴在按钮左侧偏上
                        const pointerRect = pointer.getBoundingClientRect();
                        const topPos = rect.top - (pointerRect.height / 2);
                        const leftPos = rect.left - pointerRect.width - 12;

                        pointer.style.top = `${Math.max(10, topPos)}px`;
                        pointer.style.left = `${Math.max(10, leftPos)}px`;

                        // 渐显显示
                        requestAnimationFrame(() => {
                            pointer.classList.add('show');
                        });

                        // 停留 3.5 秒后平滑淡出并销毁
                        setTimeout(() => {
                            pointer.classList.remove('show');
                            setTimeout(() => {
                                pointer.remove();
                                if (style) style.remove(); // 最终移除全部临时注入的样式
                            }, 300);
                        }, 3500);

                    } else {
                        if (style) style.remove();
                    }
                }, 300);
            }

            // 5. 创建中央提示 Toast
            const toast = document.createElement('div');
            toast.id = 'limbo-ad-notice-toast';

            // 渲染函数（新增直接关闭按钮，并给按钮加上 pointer-events: auto 以保证可点击）
            function renderToast(sec) {
                toast.innerHTML = `
                    <div class="limbo-ad-notice-toast-title">
                        ✓
                    </div>

                    <div class="limbo-ad-notice-toast-text">
    本次提醒仅在<span class="limbo-ad-notice-toast-highlight"> “首次移除该网站广告”时 </span>提示，<br>
    请确保<span class="limbo-ad-notice-toast-highlight"> 页面右下角 </span>的 <span class="limbo-ad-notice-toast-highlight"> 「反馈/导航」按钮 </span>
    存在。
</div>

                    <div class="limbo-ad-notice-toast-timer">
                        <b id="limbo-ad-notice-sec">${sec}</b> 秒后自动关闭
                    </div>

                    <button id="limbo-ad-notice-skip" style="
                        margin-top: 12px;
                        padding: 4px 12px;
                        background: rgba(255, 255, 255, 0.15);
                        border: 0;
                        border-radius: 6px;
                        color: rgba(255, 255, 255, 0.8);
                        font-size: 12px;
                        cursor: pointer;
                        pointer-events: auto;
                    ">知道了</button>
                `;
            }

            renderToast(countdown);
            notice.appendChild(toast);

            // 绑定直接关闭按钮事件
            document.getElementById('limbo-ad-notice-skip').addEventListener('click', destroyNotice);

            // 6. 每秒递减逻辑
            timer = setInterval(function () {
                countdown--;
                const secSpan = document.getElementById('limbo-ad-notice-sec');

                if (secSpan && countdown > 0) {
                    secSpan.textContent = countdown;
                }

                if (countdown <= 0) {
                    destroyNotice();
                }
            }, 1000);
        });
}


// 调用函数
const hostname = window.location.hostname;
const isIframe = window.self !== window.top;

if (!hostname.includes('limbopro.com') && !hostname.includes('supjav') && !isIframe) {
    showLimboAdNotice();
}

