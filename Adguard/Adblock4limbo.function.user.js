// ==UserScript==
// @name         Adblock4limbo——导航及各类功能函数合集.[github]
// @namespace    https://limbopro.com/Adguard/Adblock4limbo.function.js
// @version      0.2025.12.14
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


(function () {

    // 您的防御性检查逻辑现在是安全的
    if (document.getElementById('dh_pageContainer') !== null) {
        return; // ✅ 合法的 return 语句，退出这个匿名函数
    }

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
                if (x >= 4) {
                    console.log('连续点击超过' + x + "次")
                    body_build('true')  // 如果按钮出现，且其他如搜索不存在则可唤出导航页面
                } else {
                    number = 0;
                    console.log("number被重设为0");
                    //hiddencjsfy()
                    showcjsfy()
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
    var csp_regex = new RegExp(/\b(twitter|xvideos|google)\b/i);

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
        <button style="border-radius:50%;opacity:.5" id="xX"></button>
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
      <li class="li_global"><button class="crbhms" id="hidedaohang">导航按钮(OFF)</button></li>
      <li class="li_global"><button class="crbhms" id="cjsfy" data-state="off" style="background-color:red">沉浸式翻译(OFF)</button></li>
            <li class="li_global"><button class="crbhms" id="huacisousuo" data-state="off" style="background-color:red">划词搜索(OFF)</button></li>
      <li class="li_global">
    <button style="background: black;"class="crbhms" id="resetSort">重置排序</button></li>
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
      <li class="li_global"><button class="a_global special yellow" id="tmyszzq"  style="border-radius:4px;background:#c53f3f">🔍 元素屏蔽/追踪器</button></li>
      <li class="li_global">
    <button 
        class="a_global special yellow" 
        id="carolPanel"  
        style="border-radius:4px;background:#c53f3f"
        onclick="window.initWebDebugger()"> ⚙️ Web 存储调试器
    </button>
</li>
      <li class="li_global"><button class="a_global special yellow" id="zhixingjs"  style="border-radius:4px;background:#c53f3f">🧑‍💻执行JS代码</button></li>
     <li class="li_global"><button id="adsSkip" class="a_global special yellow ads_skip_on" title="自动跳过广告已开启 (点击关闭)" style="
    width: 106px !important;
    height: 50px !important;
    padding: 5px !important;
    align-items: center !important;
    display: grid!important;
"><p style="
    padding: 2px 5px 2px 5px;
"><span>视频广告自动跳过</span><span id="toggle_status_text">开启</span>
</p></button></li>
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
        if (x == "true") {
            ////console.log("// body_build() 输入为 true，开始创建导航...")
            initFloatingNav(1, 114154, 1, 'auto')

        } else if (x == "false") {
            initFloatingNav(0, -114154, 1, 'none')
            setTimeout(() => {
            }, 750)
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

    function parentElement_add() {

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
                { category: 'xyellow', title: '成人影视//', optionalParam: 'onlinemovies' }, // 包含第三个参数
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

    fetchCodes();

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

        alert('所有排序数据已重置，即将重新载入...');
        location.reload();
    });


    // ==================== 拖拽排序系统开始 ====================

    // 用于存储被拖拽的元素
    let draggedItem = null;
    // 用于存储拖拽目标上方的元素
    let dragOverItem = null;

    const container = document.querySelector('.echo');

    if (container) {
        // 监听拖拽开始事件 (在拖拽的元素上触发)
        container.addEventListener('dragstart', function (e) {
            // 确保只有 .div_global 可以被拖拽
            if (e.target.classList.contains('div_global')) {
                draggedItem = e.target;
                // 设置拖拽数据，虽然在这里不是必需的，但标准做法是设置 'text/plain'
                e.dataTransfer.setData('text/plain', draggedItem.dataset.category);
                e.target.classList.add('dragging'); // 可选：添加样式
            }
        });

        // 监听拖拽结束事件 (在拖拽的元素上触发)
        container.addEventListener('dragend', function (e) {
            e.target.classList.remove('dragging');
            draggedItem = null;
            dragOverItem = null;
            // 拖拽结束后，保存新的顺序
            saveCustomOrder();
        });

        // 监听拖拽进入目标区域的事件 (在目标元素上触发)
        container.addEventListener('dragover', function (e) {
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
                container.insertBefore(draggedItem, isAfter ? target.nextElementSibling : target);
            }
        });

        // 监听拖拽离开目标区域的事件 (在目标元素上触发)
        container.addEventListener('dragleave', function (e) {
            const target = e.target.closest('.div_global');
            if (target && target === dragOverItem) {
                target.classList.remove('drag-over');
                dragOverItem = null;
            }
        });
    }


    // 保存当前 DOM 顺序的函数
    function saveCustomOrder() {
        const order = Array.from(container.querySelectorAll('.div_global'))
            .map(div => div.dataset.category)
            .filter(category => category); // 过滤掉没有 category 的元素

        localStorage.setItem('customMenuOrder', JSON.stringify(order));
        console.log('自定义排序已保存:', order);
    }

    // ==================== 拖拽排序系统结束 ====================


    // ==================== 智能排序系统结束 ====================


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
            setTimeout(() => { nsfwmode_check() }, 100)
        } else if (getCookie('nsfwmode') == '') {
            setCookie('nsfwmode', 'false', '400');
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
                //// body_build('false')
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
            }, 1000)


        } else if (getCookie("daohangMode_yourChoice") == '' || getCookie("daohangMode_yourChoice") == 'hidden') {
            daohangMode_switch('show')
        } else if (getCookie("daohangMode_yourChoice") == 'show') {
            daohangMode_switch('hidden')
        }
    }

    // 划词搜索状态切换
    // 获取按钮
    // Start of huacisousuo toggle code
    const btn = document.getElementById('huacisousuo'); // 划词切换按钮

    // 状态切换函数
    function toggleSearchState(x) {
        const searchPro = document.getElementById('limbopro-search-pro'); // 搜索框容器
        if (!searchPro) {
            initLimoProSearch()// 如果不存在，则立即创建
            document.getElementById('limbopro-search-pro').className = 'cmsnone'
        }
        const isOn = btn.dataset.state === 'on';
        if (x !== 'false') {
            if (isOn) {
                // 关闭：OFF + 红色 + false
                btn.textContent = '划词搜索(OFF)';
                btn.style.backgroundColor = 'red';
                btn.dataset.state = 'off';
                localStorage.setItem('huacisousuo', 'false');
                searchPro.setAttribute("class", "cmsnone"); // 隐藏
                setTimeout(() => {
                    //// body_build('false')
                }, 1500)
            } else {
                // 开启：ON + 绿色 + true
                btn.textContent = '划词搜索(ON)';
                btn.style.backgroundColor = 'green';
                btn.dataset.state = 'on';
                localStorage.setItem('huacisousuo', 'true');
                searchPro.setAttribute("class", "cms"); // 显示
                setTimeout(() => {
                    //// body_build('false')
                }, 1500)
            }
        } else if (x === 'false') {
            // 关闭：OFF + 红色 + false
            btn.textContent = '划词搜索(OFF)';
            btn.style.backgroundColor = 'red';
            btn.dataset.state = 'off';
            // localStorage.setItem('huacisousuo', 'false');
            searchPro.setAttribute("class", "cmsnone"); // 隐藏
            setTimeout(() => {
                //// body_build('false')
            }, 1500)
        }
    }

    // 点击事件

    if (btn) {
        btn.addEventListener('click', toggleSearchState);
    }

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
                    alert('无法访问剪贴板，请检查浏览器权限设置或手动粘贴。错误: ' + err.message);
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
    function promptAndExecute() {

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

    // 1. 注入 CSS 样式
    injectFloatingWindowStyles();

    // 2. 获取按钮并绑定事件监听器
    const runButton = document.getElementById('zhixingjs');
    if (runButton) {
        runButton.addEventListener('click', promptAndExecute);
    }




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
            pointerEvents: 'none !inportant',
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
            // 沉浸式翻译隐藏起来 cjsfy
            console.log('页面滚动中...')
        });

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && !window.getSelection().toString().trim()) hide();
        });

        hide();
        console.log('划词搜索（终极优化版 + 设置按钮）已加载');
    }

    // 划词搜索函数部分结束 End

    // 沉浸式翻译开始 Start


    function hiddencjsfy() {
        const iframeEl = document.querySelector('div.skiptranslate')
        const translateEl = document.getElementById('google_translate_element');
        if (iframeEl && translateEl) {
            translateEl.classList.add('translate-hidden');
            iframeEl.classList.add('translate-hidden');
        }
    }


    function showcjsfy() {
        const iframeEl = document.querySelector('div.skiptranslate')
        const translateEl = document.getElementById('google_translate_element');
        if (iframeEl && translateEl) {
            translateEl.classList.remove('translate-hidden');
            iframeEl.classList.remove('translate-hidden');
        }

        setTimeout(() => { hiddencjsfy() }, 5000)

    }

    // 沉浸式翻译
    // 切换按钮
    const cjsfybtn = document.getElementById('cjsfy');
    const isLimbopro_STORAGE_KEY = 'cjsfy_translation_state'; // 用于 localStorage 的键名

    // 这是一个统一的函数，用于根据目标状态更新 UI、执行功能并保存状态
    function applyState(targetState) {
        if (!cjsfybtn) return;

        // 1. 执行功能和 UI 逻辑
        if (targetState === 'on') {
            // --- 激活 (ON) 逻辑 ---

            // A. 运行您的翻译启动代码
            // 动态加载谷歌翻译脚本

            const wait = setInterval(() => [...document.scripts].some(s => s.src?.includes('limbopro.com/Adguard/Adblock4limbo.immersiveTranslation.user.js') || s.textContent?.includes('Adblock4limbo')) && (clearInterval(wait), startMyCode()), 200);
            function startMyCode() { console.log('Adblock4limbo.immersiveTranslation.user.js已加载...'); /* ← 你的全部代码写这 */ }

            if (document.getElementById('translation-button') == null) {
                const scriptUrl = '//limbopro.com/Adguard/Adblock4limbo.immersiveTranslation.user.js';
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = scriptUrl;
                document.head.appendChild(script);
            } else {
                document.getElementById('translation-button').classList.remove('translate-hidden')
            }

            body_build('false');

            // B. 更新 UI
            cjsfybtn.textContent = '沉浸式翻译(ON)';
            cjsfybtn.style.background = 'green';

            cjsfybtn.setAttribute('data-state', 'on');

            let lastScroll = 0;
            window.addEventListener('scroll', () => {
                const now = Date.now();
                if (now - lastScroll > 300 && !window.getSelection().toString().trim());
                lastScroll = now;
                // 沉浸式翻译隐藏起来 cjsfy
                console.log('页面滚动中...')
                hiddencjsfy();
            });
        } else {
            // --- 去激活 (OFF) 逻辑 ---

            // A. 在这里添加关闭/去激活翻译功能的代码
            console.log("执行去激活功能 (Placeholder)...");

            // B. 更新 UI
            cjsfybtn.textContent = '沉浸式翻译(OFF)';
            cjsfybtn.style.background = 'red';
            cjsfybtn.setAttribute('data-state', 'off');

            setTimeout(() => {
                body_build('false')
                const translationButton = document.getElementById('translation-button');
                if (translationButton) {
                    document.getElementById('translation-button').classList.add('translate-hidden')
                }
            }, 500)

        }

        // 2. 保存状态到本地存储
        localStorage.setItem(isLimbopro_STORAGE_KEY, targetState);
    }


    if (cjsfybtn) {

        if (localStorage.getItem('cjsfy_translation_state') == null && document.getElementById('translation-button') !== null) {
            // 如果 translation-button 已经存在
            // B.更新 UI
            applyState('on');
        } else if (localStorage.getItem('cjsfy_translation_state') == 'off') {
            applyState('off');
        }

        // ===========================================
        // 步骤 1: 页面加载时，从 localStorage 恢复状态
        // ===========================================
        const savedState = localStorage.getItem(isLimbopro_STORAGE_KEY);

        // 如果本地存储中有保存的状态，并且状态是 'on'，则恢复它。
        if (savedState === 'on') {
            // 恢复 ON 状态 (会设置 UI 和运行功能代码)
            applyState('on');
        } else if (savedState === 'off') {
        }

        // 如果 savedState 是 'off' 或不存在 (null)，则保持按钮的默认 HTML 状态，不执行任何操作。

        // ===========================================
        // 步骤 2: 添加点击事件监听器 (用于切换)
        // ===========================================
        cjsfybtn.addEventListener('click', () => {
            const currentState = cjsfybtn.getAttribute('data-state');
            // 根据当前状态，确定下一个目标状态
            const nextState = currentState === 'off' ? 'on' : 'off';

            // 切换到下一个状态
            applyState(nextState);
        });
    }



    // 沉浸式翻译结束 End



    // 其他函数 媒体资源查找器 mtzyczq 开始 START

    // --------------------------------------------------------
    // 高级 M3U8 地址获取函数
    // --------------------------------------------------------
    /**
     * @function findAdvancedM3u8
     * @description 尝试通过非标准策略（如全局变量、特定元素属性）获取 M3U8 地址。
     * @returns {Array<{url: string, type: string, format: 'M3U8'}>} 找到的 M3U8 资源列表。
     */


    window.mtzyczq = function mtzyczq() {

        // --------------------------------------------------------
        // 【A】高级 M3U8 地址获取函数
        // --------------------------------------------------------
        /**
         * @function findAdvancedM3u8
         * @description 尝试通过非标准策略（如全局变量、特定元素属性）获取 M3U8 地址。
         * @returns {Array<{url: string, type: string, format: 'M3U8'}>} 找到的 M3U8 资源列表。
         */
        function findAdvancedM3u8() {
            let m3u8Address = null;
            const foundResources = []; // 存储找到的 M3U8 地址对象列表

            // 🎯 策略 1: 检查全局 Hls.js 实例（如 typeof hls !== 'undefined'）
            if (typeof hls !== 'undefined' && hls && hls.url) {
                m3u8Address = hls.url;
                console.log("✅ 策略 1 成功: 从全局 Hls.js 实例获取地址。");
                foundResources.push({ url: m3u8Address, type: 'HlsJsGlobalInstance', format: 'M3U8' });
                return foundResources; // 成功则提前返回
            }

            // 🎯 策略 2: 检查特定 ID 的 <video> 标签属性（如 data-src 或 src）
            const specificVideoId = 'video-play_html5_api';
            const specificVideoElement = document.getElementById(specificVideoId);

            if (specificVideoElement) {
                m3u8Address = specificVideoElement.getAttribute('data-src') || specificVideoElement.getAttribute('src');

                if (m3u8Address && m3u8Address.toLowerCase().includes('.m3u8')) {
                    console.log("✅ 策略 2 成功: 从特定 <video> 属性获取地址。");
                    foundResources.push({ url: m3u8Address, type: 'SpecificVideoTagAttributes', format: 'M3U8' });
                    return foundResources; // 成功则提前返回
                }
            }

            // 🎯 策略 3: 解析所有 <script> 标签内容查找特定变量（如 var hlsUrl = '...'）
            const allScripts = document.querySelectorAll('script');

            for (const script of allScripts) {
                const scriptContent = script.textContent;

                if (scriptContent.includes('var hlsUrl')) {
                    const match = scriptContent.match(/var\s+hlsUrl\s*=\s*['"](.*?)['"];/);

                    if (match && match[1]) {
                        m3u8Address = match[1];
                        console.log("✅ 策略 3 成功: 从 <script> 变量 'hlsUrl' 获取地址。");
                        foundResources.push({ url: m3u8Address, type: 'ScriptVariableHlsUrl', format: 'M3U8' });
                        return foundResources; // 成功则提前返回
                    }
                }
            }

            // 未找到则返回空数组
            return foundResources;
        }

        // --------------------------------------------------------
        // 【B】标准 DOM 媒体资源查找函数
        // --------------------------------------------------------
        /**
         * @function findDomMediaResources
         * @description 遍历标准媒体标签（<video>, <iframe>, <embed>, <source>）的 src 属性查找 MP4 或 M3U8。
         * @returns {Array<{url: string, type: string, format: 'MP4'|'M3U8'}>} 找到的 DOM 资源列表。
         */
        function findDomMediaResources() {
            console.log("%c--- 标准 DOM 媒体资源扫描开始 ---", "color: #0077b6; font-weight: bold;");

            const mediaResourcesSet = new Set();
            const targetExtensions = ['.mp4', '.m3u8'];

            /**
             * @description 检查 URL 是否包含目标扩展名，并将其添加到 Set 中进行去重。
             */
            function checkAndAddResource(url, type) {
                if (!url) return;

                const lowerUrl = url.toLowerCase();

                for (const ext of targetExtensions) {
                    if (lowerUrl.includes(ext)) {
                        const format = ext.toUpperCase().replace('.', '');
                        const resourceObject = { url: url, type: type, format: format };
                        mediaResourcesSet.add(JSON.stringify(resourceObject)); // 存为 JSON 字符串以实现对象去重
                        return;
                    }
                }
            }

            // 1. 遍历 <video>, <embed>, <iframe> 标签的 src 属性
            document.querySelectorAll('video, embed, iframe').forEach(element => {
                if (element.src) {
                    const elementType = element.tagName;
                    const elementId = element.id || 'N/A';
                    checkAndAddResource(element.src, `${elementType}Tag(ID:${elementId})`);
                }
            });

            // 2. 遍历所有 <source> 标签的 src 属性（通常位于 <video> 或 <picture> 内部）
            document.querySelectorAll('source').forEach(source => {
                if (source.src) {
                    const parentTag = source.parentElement ? source.parentElement.tagName : 'N/A';
                    checkAndAddResource(source.src, `SourceTag(Parent:${parentTag})`);
                }
            });

            const results = Array.from(mediaResourcesSet).map(json => JSON.parse(json));

            if (results.length === 0) {
                console.log("❌ 未在 DOM 结构中找到明显的 MP4/M3U8 资源 URL。");
            } else {
                console.log(`🎉 找到 ${results.length} 个 DOM 媒体资源 URL.`);
            }

            console.log("%c--- 标准 DOM 媒体资源扫描结束 ---", "color: #0077b6; font-weight: bold;");
            return results;
        }


        // --------------------------------------------------------
        // 【C】JSON-LD 媒体资源查找函数 (新策略 4)
        // --------------------------------------------------------
        /**
         * @function findJsonLdMediaResources
         * @description 查找并解析 <script type="application/ld+json">，尝试提取 MP4 或 M3U8 链接。
         * @returns {Array<{url: string, type: string, format: 'MP4'|'M3U8'}>} 找到的 JSON-LD 资源列表。
         */
        function findJsonLdMediaResources() {
            console.log("%c--- JSON-LD 结构化数据扫描开始 ---", "color: #8c73e1; font-weight: bold;");

            const scriptTag = document.querySelector('script[type="application/ld+json"]');
            const resources = [];

            if (!scriptTag) {
                console.log("❌ 未找到 JSON-LD <script> 标签。");
                return resources;
            }

            try {
                const jsonString = scriptTag.textContent;
                const data = JSON.parse(jsonString);

                // 提取 contentUrl 属性 (根据常见的 VideoObject 或 MediaObject 结构)
                // 示例路径: data?.subjectOf?.contentUrl
                const contentUrl = data?.subjectOf?.contentUrl;

                if (contentUrl) {
                    const urlLower = contentUrl.toLowerCase();
                    let format = null;

                    if (urlLower.includes('.mp4')) {
                        format = 'MP4';
                    } else if (urlLower.includes('.m3u8')) {
                        format = 'M3U8';
                    }

                    if (format) {
                        console.log(`✅ 策略 4 成功: 从 JSON-LD 结构化数据中找到 ${format} 地址。`);
                        resources.push({ url: contentUrl, type: 'JsonLdContentUrl', format: format });
                    } else {
                        console.log("JSON-LD 中找到 contentUrl，但格式不是 MP4/M3U8。");
                    }
                } else {
                    console.log("JSON-LD 中未找到视频 contentUrl。");
                }

            } catch (error) {
                console.error("解析 JSON-LD 或访问属性时出错:", error);
            }

            console.log("%c--- JSON-LD 结构化数据扫描结束 ---", "color: #8c73e1; font-weight: bold;");
            return resources;
        }

        // --------------------------------------------------------
        // 【D】悬浮窗创建与事件绑定函数 (已优化：支持单条复制和播放)
        // --------------------------------------------------------
        const FINDER_CONFIG = {
            WINDOW_ID: 'media-resource-finder-window',
            STYLE_ID: 'media-resource-finder-style',
            OVERLAY_ID: 'media-resource-finder-overlay'
        };

        /**
         * @function createFinderFloatingWindow
         * @description 创建并显示悬浮窗，展示找到的媒体资源列表，并为每个资源提供单独的复制和播放功能。
         * @param {Array<{url: string, type: string, format: string}>} resources - 最终去重后的媒体资源列表。
         */

        function createFinderFloatingWindow(resources) {
            const { WINDOW_ID, STYLE_ID, OVERLAY_ID } = FINDER_CONFIG;
            const isFound = resources && resources.length > 0;

            if (document.getElementById(WINDOW_ID)) {
                console.log("悬浮窗已存在，不重复创建。");
                return;
            }

            // --- 1. 资源列表格式化：为每个资源创建独立的 HTML 结构 ---
            let resourcesHtml = '';
            if (isFound) {
                resources.forEach((res, index) => {
                    // 使用 data-url 存储链接，用于复制和播放
                    resourcesHtml += `
                    <div class="resource-item">
                        <p class="resource-info">
                            **[${res.format}]** 来源: ${res.type}
                        </p>
                        <textarea class="resource-url" readonly title="媒体资源 URL">${res.url}</textarea>
                        <div class="button-group">
                            <button class="copy-single-button" data-url="${res.url}">
                                📋 复制
                            </button>
                           <!--<button class="play-single-button" data-url="${res.url}" data-format="${res.format}">
                                ▶️ 播放
                            </button>-->
                            <a class="play-single-button" href="${res.url}" target="_blank" title="在新窗口打开播放">
                            ▶️ 播放
                        </a>
                        </div>
                    </div>
                `;
                });
            } else {
                resourcesHtml = `
                <div class="no-resource-message">
                    未在 DOM 和高级策略中检测到 MP4/M3U8 播放地址。🌟：可尝试点击播放后再试。
                </div>
            `;
            }

            // --- 2. DOM 结构 HTML 模板 ---
            const windowHtml = `
        <div id="${WINDOW_ID}">
            <div id="${WINDOW_ID}-header">
                媒体资源查找器 (Gemini)
                <span id="${WINDOW_ID}-close" title="关闭">×</span>
            </div>
            <div id="${WINDOW_ID}-body">
                <p>地址状态: <strong>${isFound ? `✅ 已找到 ${resources.length} 条` : '❌ 未找到'}</strong></p>
                
                <div id="${WINDOW_ID}-resource-list">
                    ${resourcesHtml}
                </div>

               
                <p style="font-size: 10px; margin-top: 15px;">
                    如何下载 M3U8 视频？点击跳转
                    <a href="https://limbopro.com/archives/M3U8-Downloader.html" target="_blank" style="color: #61dafb; text-decoration: none;">
                        M3U8 视频下载教程
                    </a>
                </p>
                <p style="font-size: 10px; margin-top: 5px;">
                    如何下载 MP4 视频？
                    <a href="javascript:void(0);" onclick="showMp4DownloadTip(event)" style="color: #61dafb; text-decoration: none;">
                        点击了解
                    </a>
                </p>
            </div>
        </div>
    `;

            window.showMp4DownloadTip = function showMp4DownloadTip(event) {
                event.preventDefault();

                const downloadMessage =
                    "1. 复制视频下载地址；\n" +
                    "2. iOS用户推荐使用名叫 \"Documents\" 的 app 下载视频，打开 Documents app -> 浏览器 -> 粘贴视频下载地址；\n" +
                    "3. Android 暂无建议；\n" +
                    "4. 桌面浏览器用户在新的标签页打开下载地址，然后右键另存为即可；";

                confirm(downloadMessage);
            }

            // --- 3. 注入 CSS 样式（更新了按钮组和播放按钮样式）---
            const styleElement = document.createElement('style');
            styleElement.id = STYLE_ID;
            styleElement.textContent = `
            #${OVERLAY_ID} {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.4); 
                z-index: 1199998; 
                display: flex;
                justify-content: center;
                align-items: center; 
            }
            #${WINDOW_ID} {
                width: 380px; 
                max-height: 80vh; 
                z-index: 99999;
                background: #282c34;
                color: #ffffff;
                border: 2px solid #61dafb;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                overflow: hidden; 
            }
            #${WINDOW_ID}-header {
                padding: 8px 12px;
                background: #61dafb;
                color: #282c34;
                font-weight: bold;
                border-top-left-radius: 6px;
                border-top-right-radius: 6px;
                cursor: move;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            #${WINDOW_ID}-close {
                cursor: pointer;
                font-size: 1.5em;
                line-height: 0.8;
            }
            #${WINDOW_ID}-body {
                text-align:center;
                padding: 15px;
                overflow-y: auto; 
                max-height: calc(80vh - 50px); 
            }
            
            #${WINDOW_ID}-resource-list {
                margin-top: 10px;
                text-align: left;
            }
            .resource-item {
                border: 1px solid #444;
                border-radius: 4px;
                padding: 8px;
                margin-bottom: 12px;
                background: #1e2127;
            }
            .resource-info {
                font-size: 13px;
                margin: 0 0 5px 0;
                line-height: 1.4;
                color: #ccc;
            }
            .resource-url {
                width: 100%;
                height: 50px; 
                padding: 5px;
                margin: 5px 0;
                border: 1px solid #555;
                background: #1e2127;
                color: #ccc;
                resize: none;
                box-sizing: border-box;
                font-size: 11px;
                border-radius: 4px;
                line-height: 1.2;
                overflow: auto;
            }
            
            /* 按钮组样式 */
            .button-group {
                display: flex;
                gap: 8px; /* 按钮之间的间距 */
                margin-top: 5px;
            }

            /* 复制按钮样式 (左侧) */
            .copy-single-button {
                flex-grow: 1; /* 占据可用空间 */
                padding: 8px;
                background: #4CAF50; /* 绿色 */
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 14px;
                transition: background 0.2s;
            }
            .copy-single-button:hover:not([disabled]) {
                background: #45a049;
            }

            /* 播放按钮样式 (右侧) */
            .play-single-button {
                text-align: center;
                flex-grow: 1; /* 占据可用空间 */
                padding: 8px;
                background: #008CBA; /* 蓝色 */
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 14px;
                transition: background 0.2s;
            }
            .play-single-button:hover:not([disabled]) {
                background: #007bb5;
            }
        `;
            document.head.appendChild(styleElement);


            // --- 4. 注入 DOM 结构 ---
            const overlayElement = document.createElement('div');
            overlayElement.id = OVERLAY_ID;
            overlayElement.innerHTML = windowHtml;
            document.body.appendChild(overlayElement);


            // --- 5. 辅助函数：销毁悬浮窗 ---
            const destroyWindow = () => {
                const existingOverlay = document.getElementById(OVERLAY_ID);
                const existingStyle = document.getElementById(STYLE_ID);
                if (existingOverlay) existingOverlay.remove();
                if (existingStyle) existingStyle.remove();
                document.removeEventListener('click', handleOutsideClick, true);
            };

            // --- 6. 外部点击关闭的处理器 ---
            const handleOutsideClick = (e) => {
                if (document.getElementById(WINDOW_ID) && !document.getElementById(WINDOW_ID).contains(e.target)) {
                    destroyWindow();
                }
            };


            // --- 7. 绑定事件监听器：关闭、复制和播放 ---
            const closeButton = document.getElementById(`${WINDOW_ID}-close`);
            closeButton.onclick = destroyWindow;

            setTimeout(() => {
                document.addEventListener('click', handleOutsideClick, true);
            }, 100);

            // 绑定所有单独的复制按钮事件
            document.querySelectorAll('.copy-single-button').forEach(button => {
                button.onclick = async () => {
                    const urlToCopy = button.getAttribute('data-url');
                    if (!urlToCopy) return;

                    try {
                        await navigator.clipboard.writeText(urlToCopy);

                        // 复制成功反馈
                        const originalText = button.textContent;
                        button.textContent = '✅ 已复制!'; // 简化反馈文本
                        button.style.backgroundColor = '#2196F3';
                        setTimeout(() => {
                            button.textContent = originalText;
                            button.style.backgroundColor = '#4CAF50';
                        }, 1500);
                    } catch (err) {
                        console.error('复制失败:', err);
                        const originalText = button.textContent;
                        button.textContent = '❌ 复制失败';
                        button.style.backgroundColor = '#F44336';
                        setTimeout(() => {
                            button.textContent = originalText;
                            button.style.backgroundColor = '#4CAF50';
                        }, 1500);
                    }
                };
            });

            // 绑定所有单独的播放按钮事件
            document.querySelectorAll('.play-single-button').forEach(button => {
                button.onclick = () => {
                    const urlToPlay = button.getAttribute('data-url');
                    const format = button.getAttribute('data-format');

                    if (urlToPlay) {
                        // 直接在新标签页打开 URL，浏览器会自动尝试播放支持的媒体格式（如 MP4）
                        // 对于 M3U8，如果浏览器/环境支持原生 HLS，也会尝试播放
                        window.open(urlToPlay, '_blank');
                        console.log(`正在尝试播放 ${format} 链接: ${urlToPlay}`);
                    }
                };
            });
        }


        // --------------------------------------------------------
        // 【E】脚本主执行区 (整合、调用与去重逻辑)
        // --------------------------------------------------------
        (function () {
            console.log("🎬 媒体资源查找脚本开始执行：整合查找 MP4/M3U8 资源...");

            // 1. 执行所有查找策略
            const advancedM3u8Resources = findAdvancedM3u8(); // 策略 1-3
            const domMediaResources = findDomMediaResources();     // 标准 DOM 标签
            const jsonLdResources = findJsonLdMediaResources();     // 策略 4：JSON-LD

            // 2. 整合所有资源
            const allFoundResources = [
                ...advancedM3u8Resources,
                ...domMediaResources,
                ...jsonLdResources
            ];

            // 3. 去重逻辑：基于 URL 字符串实现去重，去除协议和末尾斜杠以提高准确性
            const uniqueUrlSet = new Set();
            const finalUniqueResources = [];

            allFoundResources.forEach(resource => {
                // 规范化 URL
                const normalizedUrl = resource.url
                    .trim()
                    .toLowerCase()
                    .replace(/^http(s)?:\/\//, '') // 移除协议
                    .replace(/\/$/, ''); // 移除末尾斜杠

                if (!uniqueUrlSet.has(normalizedUrl)) {
                    uniqueUrlSet.add(normalizedUrl);
                    finalUniqueResources.push(resource);
                } else {
                    console.log(`⚠️ 资源去重: URL 已被收录 - ${resource.url}`);
                }
            });

            console.log(`\n✨ 最终找到 ${finalUniqueResources.length} 个去重后的有效媒体资源 URL。`);

            // 4. 展示悬浮窗
            createFinderFloatingWindow(finalUniqueResources);

            console.log("✅ 脚本执行完毕。");
        })();

    }

    // 媒体资源M3U8&MP4资源链接查找器结束 END

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

    if (localStorage.getItem('huacisousuo') == 'true') {
        // toggleSearchState('true');
        initLimoProSearch();
    }

    // 划词搜索结束 END

    /*debug*/

    /* 用户反馈信息展示脚本 (重命名版) */
    // Feedback 开始 START
    /* 反馈信息展示脚本 (重命名版 - 已增强) */

    /**
     * 目的：在页面加载时自动显示一个悬浮窗口，用于收集用户环境信息和脚本状态，以便反馈调试。
     * 1. 自动注入 CSS 样式并创建 DOM 结构。
     * 2. 自动收集 URL, UA/OS 信息，以及关键脚本、元素、全局变量和 AJAX 库状态。
     * 3. 提供“复制调试信息”功能。
     * 4. 2 分钟后自动移除。
     */

    // 悬浮窗的自动移除时间
    const AL_FEEDBACK_TIMEOUT_MS = 120000; // 重命名变量
    // 要检查的脚本文件名列表
    const AL_TARGET_SCRIPTS = [ // 重命名变量
        'Adblock4limbo.user.js',
        'Adblock4limbo.function.js',
        'Adblock4limbo.immersiveTranslation.user.js',
        'isAgent.js'
    ];


    // --- 悬浮窗函数 ---

    /**
     * 检查并注入悬浮窗的基本 CSS 样式
     */
    window.alFeedback_injectStyles = function alFeedback_injectStyles() { // 重命名函数
        const STYLE_ID = 'al-feedback-style'; // 重命名 ID
        if (document.getElementById(STYLE_ID)) return;

        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = `
        #al-feedback-box { /* 重命名 ID */
            position: fixed;
            top: 15%; 
            left: 50%;
            transform: translateX(-50%);
            z-index: 9999999999;
            background-color: rgba(220, 50, 50, 0.95); 
            color: white;
            padding: 20px 25px;
            border-radius: 8px;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
            font-size: 16px;
            max-width: 90%;
            text-align: left;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
            line-height: 1.5;
        }
        #al-feedback-box.show { /* 重命名 ID */
            opacity: 1;
        }
        .al-close-btn { /* 重命名类名 */
            float: right;
            font-weight: bold;
            font-size: 20px;
            cursor: pointer;
            line-height: 1;
            padding-left: 10px;
        }
        .al-info-block { /* 重命名类名 */
            margin-top: 15px;
            padding-top: 10px;
            border-top: 1px solid rgba(255, 255, 255, 0.3);
            font-size: 14px;
            height: 200px;
            overflow: scroll; 
            word-break: break-all;
        }
        .al-copy-btn { /* 重命名类名 */
            display: block;
            width: 100%;
            margin-top: 15px;
            padding: 8px;
            background-color: #ffdd57;
            color: #333;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            transition: background-color 0.2s;
        }
        .al-copy-btn:hover { /* 重命名类名 */
            background-color: #ffe88c;
        }
        .al-script-status-list { /* 重命名类名 */
            list-style: none;
            padding-left: 0;
            margin: 5px 0 0 0;
        }
        .al-script-status-list li { /* 重命名类名 */
            margin-bottom: 3px;
        }
        .al-script-loaded { /* 重命名类名 */
            color: lightgreen;
        }
        .al-script-missing { /* 重命名类名 */
            color: #ffdd57; 
        }
        .al-contact-link { /* 重命名类名 */
            color: #ffdd57; 
            text-decoration: underline;
        }
    `;
        document.head.appendChild(style);
    }

    /**
     * 检查目标脚本、关键 DOM 元素、全局变量和 AJAX 库/API 的存在状态 (已增强)
     * @returns {string} 返回包含所有检查状态的 HTML 列表
     */
    function alFeedback_checkScriptExistence() { // 重命名函数
        const scripts = document.getElementsByTagName('script');
        let statusHtml = '<ul class="al-script-status-list">';

        // --- 脚本文件状态 ---
        statusHtml += '<li><strong>--- 脚本文件状态 ---</strong></li>';
        AL_TARGET_SCRIPTS.forEach(targetName => {
            let found = false;
            for (let i = 0; i < scripts.length; i++) {
                const src = scripts[i].src;
                if (src && src.includes(targetName)) {
                    found = true;
                    break;
                }
            }
            const statusClass = found ? 'al-script-loaded' : 'al-script-missing';
            const statusIcon = found ? '已挂载✅' : '未挂载❌';
            statusHtml += `<li><span class="${statusClass}">${statusIcon} ${targetName}</span></li>`;
        });

        // --- 关键元素状态 ---
        statusHtml += '<li><strong>--- 关键元素状态 ---</strong></li>';
        const TARGET_ELEMENTS = [
            { id: 'dh_button', name: '导航按钮' },
            { id: 'translation-button', name: '沉浸式翻译按钮' }
        ];

        TARGET_ELEMENTS.forEach(item => {
            const found = !!document.getElementById(item.id);
            const statusClass = found ? 'al-script-loaded' : 'al-script-missing';
            const statusIcon = found ? '存在✅' : '缺失❌';
            statusHtml += `<li><span class="${statusClass}">${statusIcon} 元素: ${item.name} (ID: ${item.id})</span></li>`;
        });

        // --- 全局变量状态 (window.isAgent) ---
        statusHtml += '<li><strong>--- 全局变量状态 ---</strong></li>';
        const isAgentExists = typeof window.isAgent !== 'undefined';
        const isAgentStatusClass = isAgentExists ? 'al-script-loaded' : 'al-script-missing';
        const isAgentStatusIcon = isAgentExists ? '存在✅' : '缺失❌';
        statusHtml += `<li><span class="${isAgentStatusClass}">${isAgentStatusIcon} 全局变量: window.isAgent</span></li>`;

        // --- 异步请求/库状态 (AJAX Heuristic Check) ---
        statusHtml += '<li><strong>--- 异步请求/库状态 (推测AJAX) ---</strong></li>';

        const AJAX_CHECKS = [
            { name: 'window.XMLHttpRequest', exists: typeof window.XMLHttpRequest !== 'undefined' },
            { name: 'window.fetch', exists: typeof window.fetch === 'function' },
            { name: 'window.jQuery (或 $)', exists: typeof window.jQuery !== 'undefined' || typeof window.$ !== 'undefined' },
            { name: 'window.axios', exists: typeof window.axios !== 'undefined' }
        ];

        AJAX_CHECKS.forEach(check => {
            const statusClass = check.exists ? 'al-script-loaded' : 'al-script-missing';
            const statusIcon = check.exists ? '存在✅' : '缺失❌';
            statusHtml += `<li><span class="${statusClass}">${statusIcon} ${check.name}</span></li>`;
        });


        statusHtml += '</ul>';
        return statusHtml;
    }


    /**
     * 核心复制函数：将调试信息复制到剪贴板
     */
    function alFeedback_copyDebugInfo(infoBlockId) { // 重命名函数
        const infoBlock = document.getElementById(infoBlockId);
        if (!infoBlock) return;

        // 提取纯文本信息，去除 HTML 标签，并格式化
        const debugInfoText =
            infoBlock.innerText.replace('系统信息 (用于调试):\n', '') // 移除标题
                .trim()
                .split('\n')
                .map(line => line.trim()) // 清理每行两端的空格
                .filter(line => line.length > 0) // 移除空行
                .join('\n');

        // 使用 Clipboard API 复制文本
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(debugInfoText).then(() => {
                // 复制成功后，临时改变按钮文本
                const btn = document.querySelector('.al-copy-btn'); // 使用新的类名
                if (btn) {
                    btn.textContent = '已复制!';
                    setTimeout(() => {
                        btn.textContent = '复制调试信息';
                    }, 1500);
                }
            }).catch(err => {
                console.error('复制失败:', err);
                alert('复制失败，请手动选择复制。');
            });
        } else {
            // 降级处理
            console.warn('Clipboard API 不可用，使用旧方法复制。');
            const tempTextArea = document.createElement('textarea');
            tempTextArea.value = debugInfoText;
            document.body.appendChild(tempTextArea);
            tempTextArea.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextArea);

            const btn = document.querySelector('.al-copy-btn'); // 使用新的类名
            if (btn) {
                btn.textContent = '已复制!';
                setTimeout(() => {
                    btn.textContent = '复制调试信息';
                }, 1500);
            }
        }
    }


    /**
     * 显示悬浮警告框
     */
    window.alFeedback_showPanel = function alFeedback_showPanel() { // 重命名函数
        const BOX_ID = 'al-feedback-box'; // 重命名 ID
        const INFO_BLOCK_ID = 'al-debug-info-content'; // 重命名 ID

        let existingBox = document.getElementById(BOX_ID);
        if (existingBox) {
            existingBox.remove();
        }

        alFeedback_injectStyles(); // 调用已修改名称的函数

        // --- 动态获取信息 ---
        const currentURL = window.location.href;
        const userAgent = navigator.userAgent;
        const platform = navigator.platform || navigator.oscpu || '未知操作系统';
        const scriptStatusHtml = alFeedback_checkScriptExistence(); // 调用已修改名称的函数


        // 构建包含所有信息的 HTML 内容 
        const messageHTML = `
        <span class="al-close-btn" onclick="this.parentElement.remove();">&times;</span> <p style="margin-bottom: 10px;">
            <strong>Adblock4limbo:</strong> 调试信息面板。请复制以下信息，以便向开发者反馈问题。
        </p>
        
        <p style="margin-bottom: 0;">
            联系博主：<a href="https://limbopro.com/6.html" target="_blank" class="al-contact-link">点此联系？反馈</a> 或<a href="https://limbopro.com/feedback/" target="_blank" class="al-contact-link">匿名留言</a> </p>

        <div class="al-info-block" id="${INFO_BLOCK_ID}"> <strong>系统信息 (用于调试):</strong>
            <br>
            <strong>当前页面URL:</strong> ${currentURL}
            <br>
            <strong>OS/平台:</strong> ${platform}
            <br>
            <strong>UA:</strong> ${userAgent}
            <br>
            <strong>关键组件加载状态:</strong> 
            ${scriptStatusHtml} 
        </div>
        
        <button class="al-copy-btn" onclick="alFeedback_copyDebugInfo('${INFO_BLOCK_ID}')">复制调试信息</button> `;

        const box = document.createElement('div');
        box.id = BOX_ID;
        box.innerHTML = messageHTML;

        document.body.appendChild(box);

        // 渐入效果
        setTimeout(() => {
            box.classList.add('show');
        }, 10);

        // 2 分钟后自动移除
        setTimeout(() => {
            if (box) {
                box.classList.remove('show');
                setTimeout(() => {
                    if (box && box.parentElement) {
                        box.remove();
                    }
                }, 500);
            }
        }, AL_FEEDBACK_TIMEOUT_MS); // 使用新的变量名
    }

    // ⚠️ 将 alFeedback_copyDebugInfo 函数暴露到全局
    window.alFeedback_copyDebugInfo = alFeedback_copyDebugInfo;

    // --- 脚本主流程：自动显示弹窗 ---

    // 自动显示弹窗的调用 (如果您希望它在脚本加载时自动运行，请取消注释下一行)
    // alFeedback_showPanel(); 

    console.log(`脚本已运行，自动显示反馈信息面板。`);
    console.log(`⚠️ 悬浮窗自动关闭时间设置为 ${AL_FEEDBACK_TIMEOUT_MS / 1000} 秒 (2 分钟)。`); // 使用新的变量名



    /**
     * 获取当前页面的 URL 和标题，并将其附加到指定的 URL 作为 UTM 参数。
     * 基础 URL: https://limbopro.com/feedback/
     */
    function generateFeedbackUrlWithContext() {
        // 1. 获取当前页面的完整 URL 和标题
        const currentPageUrl = window.location.href;
        const currentPageTitle = document.title;

        // 2. 定义目标基础 URL
        const baseUrl = 'https://limbopro.com/feedback/';

        // 3. 创建 URL 对象并添加参数 (使用现代 API 确保自动编码)
        const url = new URL(baseUrl);

        // 将当前 URL 作为 utm_source (来源)
        url.searchParams.set('utm_source', currentPageUrl);

        // 将当前标题作为 utm_medium (媒介/内容)
        url.searchParams.set('utm_medium', currentPageTitle);

        return url.toString(); // 返回最终生成的 URL 字符串
    }

    /**
     * 查找 ID 为 'ifeedback' 的链接元素，并用动态生成的 URL 替换其 href 属性。
     */
    function updateFeedbackLink() {
        const linkElementId = 'ifeedback';

        // 1. 生成带有上下文的 URL
        const newHref = generateFeedbackUrlWithContext();

        // 2. 获取目标链接元素
        const feedbackLink = document.getElementById(linkElementId);

        if (feedbackLink && feedbackLink.tagName === 'A') {
            // 3. 替换 href 属性
            feedbackLink.href = newHref;

            console.log(`✅ 成功更新链接 #${linkElementId} 的 href 属性为:`);
            console.log(newHref);
        } else {
            console.error(`❌ 无法找到 ID 为 '${linkElementId}' 的 <a> 链接元素。`);
        }
    }

    // 确保在 DOM 元素加载完毕后执行更新操作
    document.addEventListener('DOMContentLoaded', updateFeedbackLink);

    // 或者如果您的脚本放在页面底部，可以直接调用：
    // updateFeedbackLink();

    // =================================================================
    // 核心模块 V15.0：美化样式
    // =================================================================

    // ----------------------------------------------------------------
    // 样式注入函数：美化后的样式
    // ----------------------------------------------------------------
    function injectStyles(containerId, windowId) {
        const style = document.createElement('style');
        style.textContent = `
        /* 1. 最外层容器：负责定位、美化、阴影和拖拽热区 */
        #${containerId} {
            position: fixed; 
            top: 20px; /* 稍微往下移 */
            right: 20px; 
            z-index: 1141544;
            transition: transform 0.2s ease-out; /* 仅对拖拽使用 transform 过渡 */
            
            /* ✨ 美化：圆角和更深/柔和的阴影 */
            border-radius: 12px; 
            box-shadow: 0 10px 30px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05); 
            
            width: 400px; /* 调整宽度 */
            
            /* 背景和 Padding */
            background: #f7f7f7; /* 柔和的浅灰色背景作为外层 padding */
            padding: 15px; 
            
            cursor: default; 
            user-select: none;
            font-family: 'Helvetica Neue', Arial, sans-serif;
        }
        
        /* 2. 内部浮窗：内容容器 */
        #${windowId} {
            background: #fff; /* 确保内容区纯白 */
            border: 1px solid #e0e0e0; /* 柔和的边框 */
            border-radius: 8px; /* 内部圆角 */
            font-size: 13px; /* 稍微增大字体 */
            max-height: 80vh; 
            overflow: hidden; /* 隐藏内部滚动条，让列表控制滚动 */
        }

        /* 3. 内部拖拽区域和光标设置 */
        #${windowId} #gemini-header,
        #${windowId} #gemini-status-bar,
        #${windowId} .gemini-tip-text,
        #${containerId} { 
            cursor: move; 
            touch-action: none; 
        }
        
        /* 阻止内部可点击元素继承 move 光标 */
        #${windowId} * {
            cursor: default;
        }
        #${windowId} button, #${windowId} span[id$="close-btn"], #${windowId} .element-info, #${windowId} .tab-btn {
             cursor: pointer !important;
        }

        /* 头部样式 */
        #${windowId} #gemini-header {
            padding: 10px 15px;
            background: #f8f8f8; /* 浅色背景 */
            border-bottom: 1px solid #ececec;
        }

        /* 状态栏样式 (美化) */
        #${windowId} #gemini-status-bar {
            padding: 8px 15px;
            background: #e6f7ff; /* 浅蓝色背景，强调反馈区域 */
            color: #0050b3; /* 深蓝色文字 */
            border-top: 1px solid #cceeff;
            font-weight: 500;
            text-align: left;
            border-radius: 0 0 8px 8px; /* 底部圆角 */
        }

        /* 提示信息样式 (美化) */
        #${windowId} .gemini-tip-text {
            padding: 5px 15px;
            background: #fafafa; /* 淡灰色背景 */
            color: #888;
            font-size: 11px;
            border-top: 1px dashed #eee;
            text-align: center;
        }
        
        /* Tab 按钮样式 */
        #${windowId} .tab-btn {
            padding: 10px 8px;
            border: none;
            background: #fff;
            font-size: 13px;
            font-weight: 600;
            color: #555;
            transition: color 0.2s, background 0.2s;
        }
        #${windowId} .tab-btn:hover {
            background: #f0f0f0;
        }

        /* 列表滚动容器样式 */
        #${windowId} .gemini-list-scroll-area {
            max-height: 250px; 
            overflow-y: auto; 
            padding: 0;
            margin: 0;
            border-top: 1px solid #eee; 
        }
        
        /* 列表项美化 */
        #${windowId} ul li {
            font-size: 12px;
            padding: 8px 15px;
            
        }


        /* 移动端媒体查询：屏幕宽度小于 768px */
        @media (max-width: 768px) {
            #${containerId} {
                width: 90vw; 
                right: 5vw; 
                left: 5vw; 
                top: 5px;
                padding: 10px; /* 移动端减小 padding */
            }
        }
    `;
        document.head.appendChild(style);
    }


    // Feedback 结束 END


    // 元素屏蔽器开始  START

    // ==UserScript==
    // @name         元素屏蔽/追踪器 (V26.39.10 - 拦截程序化点击和 PostMessage)
    // @namespace    http://tampermonkey.net/
    // @version      26.39.10
    // @description  V26.39.10：在 V26.39.9 同步中断的基础上，新增拦截 Element.prototype.click（用于程序化重定向）和 window.postMessage（用于跨框架侧信道重定向）。这是对高级绕过机制的最后防线。
    // @author       Gemini
    // @match        *://*/*
    // @grant        none
    // @run-at       document-start
    // ==/UserScript==

    (function () {
        'use strict';

        // =================================================================
        // ⚠️ 全局常量与状态 
        // =================================================================
        // 元素永久移除记录（透明元素、选择模式屏蔽的普通元素）
        const ELEMENT_REMOVAL_KEY = 'gemini_zero_opacity_removals';
        // Iframe 永久移除记录
        const IFRAME_REMOVAL_KEY = 'gemini_iframe_permanent_removals';

        const PAGE_BLACKLIST_KEY = 'gemini_page_blacklist';

        const containerId = 'gemini-main-container';
        const windowId = 'gemini-float-window';

        const DEBUG_CLICK_KEY = 'gemini_debug_element_click_mode';
        const DEBUG_LOCATION_KEY = 'gemini_debug_location_hook_mode';
        // V26.39.3 NEW: 调试域名覆盖键 - 存储用户手动关闭调试的域名，以阻止自动开启
        const DEBUG_WEBLIST_OVERRIDE_KEY = 'gemini_debug_weblist_override';

        let isDebuggingElementClick = false;
        let isDebuggingLocationHooks = false;
        let isWindowOpenHooked = false;

        // V26.39.2: 调试域名列表 - 如果当前页面域名在列表中，自动开启调试模式 (除非被用户覆盖)
        const DEBUG_WEBLIST = [];

        const AD_URL_PARTIAL_PERMANENT = 'twinrdengine.com';

        // =================================================================
        // 调试覆盖管理函数 (V26.39.3 NEW)
        // =================================================================
        function getCurrentHost() {
            try {
                return window.location.host;
            } catch (e) {
                return '';
            }
        }

        function getDebugOverrideList() {
            try {
                const list = JSON.parse(localStorage.getItem(DEBUG_WEBLIST_OVERRIDE_KEY) || '[]');
                return list.filter(item => item && typeof item === 'string');
            } catch (e) {
                console.error('[覆盖列表] 读取失败:', e);
                return [];
            }
        }

        function isCurrentHostOverridden() {
            const currentHost = getCurrentHost();
            return getDebugOverrideList().includes(currentHost);
        }

        function toggleDebugOverride(shouldAdd, host = getCurrentHost()) {
            if (!host) return false;
            let list = getDebugOverrideList();
            const index = list.indexOf(host);

            if (shouldAdd) {
                if (index === -1) {
                    list.push(host);
                    localStorage.setItem(DEBUG_WEBLIST_OVERRIDE_KEY, JSON.stringify(list));
                    console.log(`[V26.39.10] 🎯 ${host} 已添加到调试覆盖列表。`);
                    return true;
                }
            } else {
                if (index > -1) {
                    list.splice(index, 1);
                    localStorage.setItem(DEBUG_WEBLIST_OVERRIDE_KEY, JSON.stringify(list));
                    console.log(`[V26.39.10] 🎯 ${host} 已从调试覆盖列表移除。`);
                    return true;
                }
            }
            return false;
        }


        // =================================================================
        // 黑名单管理函数 (保持不变)
        // =================================================================
        function getCurrentPageKey() {
            try {
                const url = new URL(window.location.href);
                return url.host + url.pathname;
            } catch (e) {
                return window.location.host;
            }
        }

        function getPageBlacklist() {
            try {
                const list = JSON.parse(localStorage.getItem(PAGE_BLACKLIST_KEY) || '[]');
                return list.filter(item => item && typeof item === 'string');
            } catch (e) {
                console.error('[黑名单] 读取失败:', e);
                return [];
            }
        }

        function isCurrentPageBlacklisted() {
            const currentPageKey = getCurrentPageKey();
            return getPageBlacklist().includes(currentPageKey);
        }

        function togglePageBlacklist(shouldAdd, pageKey = getCurrentPageKey()) {
            let list = getPageBlacklist();
            const index = list.indexOf(pageKey);

            if (shouldAdd) {
                if (index === -1) {
                    list.push(pageKey);
                    localStorage.setItem(PAGE_BLACKLIST_KEY, JSON.stringify(list));
                    return true;
                }
            } else {
                if (index > -1) {
                    list.splice(index, 1);
                    localStorage.setItem(PAGE_BLACKLIST_KEY, JSON.stringify(list));
                    return true;
                }
            }
            return false;
        }


        // =================================================================
        // Iframe 沙箱处理函数 (保持不变)
        // =================================================================
        function hookIframeSandboxSetter(iframe) {
            if (iframe.__sandbox_hooked) return;

            const sandboxDescriptor = Object.getOwnPropertyDescriptor(Element.prototype, 'sandbox') ||
                Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, 'sandbox');

            if (sandboxDescriptor && sandboxDescriptor.set) {
                const originalSetter = sandboxDescriptor.set;
                const strictSandboxAttributes = 'allow-scripts allow-forms allow-same-origin allow-popups allow-pointer-lock';

                Object.defineProperty(iframe, 'sandbox', {
                    set: function (value) {
                        const newValue = value || strictSandboxAttributes;
                        originalSetter.call(this, newValue);

                        console.warn(`[Gemini屏蔽 V26.34] 🛡️ 黑名单页面：Iframe sandbox 被 Setter Hook 强制设置为严格沙箱。`);
                    },
                    get: function () {
                        return iframe.getAttribute('sandbox');
                    },
                    configurable: true,
                    enumerable: true
                });
                iframe.__sandbox_hooked = true;
                console.log(`[Gemini屏蔽 V26.34] 🌟 Iframe sandbox 属性 Setter Hook 成功启用 (仅对黑名单页面有效)。`);
            }
        }

        function applyIframeSandbox(iframe) {

            if (!isCurrentPageBlacklisted()) {
                console.log('[Gemini屏蔽 V26.34] 🚀 非黑名单页面：对 Iframe 不做任何操作，保持默认状态 (默认不沙箱)。');
                return;
            }

            const sandboxAttributes = 'allow-scripts allow-forms allow-same-origin allow-popups allow-pointer-lock';

            hookIframeSandboxSetter(iframe);

            try {
                const currentSandbox = iframe.getAttribute('sandbox');
                if (currentSandbox !== sandboxAttributes) {
                    iframe.setAttribute('sandbox', sandboxAttributes);
                    console.log(`[Gemini屏蔽 V26.34] 🛡️ 黑名单页面：Iframe 强制设置严格沙箱属性: ${sandboxAttributes}`);
                }
            } catch (e) {
                console.error('[Gemini屏蔽 V26.34] Iframe 沙箱设置失败:', e);
            }
        }

        // =================================================================
        // Hook document.createElement (保持不变)
        // =================================================================
        if (document.createElement) {
            const originalCreateElement = document.createElement;
            originalCreateElement.className = 'notranslate';
            document.createElement = function (tagName, options) {
                const element = originalCreateElement.call(this, tagName, options);

                if (tagName.toLowerCase() === 'iframe') {
                    const iframe = element;

                    if (iframe.src && iframe.src.includes(AD_URL_PARTIAL_PERMANENT)) {
                        console.warn(`[Gemini屏蔽 V26.24] 阻止 Iframe 初始加载广告: ${iframe.src.substring(0, 50)}...`);
                        iframe.src = 'about:blank';
                    }

                    applyIframeSandbox(iframe);

                    iframe.addEventListener('load', () => {
                        applyIframeSandbox(iframe);
                    });

                    Object.defineProperty(iframe, 'src', {
                        set: function (url) {
                            if (url && url.includes(AD_URL_PARTIAL_PERMANENT)) {
                                console.warn(`[Gemini屏蔽 V26.24] 阻止 Iframe.src 赋值广告 URL: ${url.substring(0, 50)}...`);
                                iframe.setAttribute('src', 'about:blank');
                                return;
                            }
                            iframe.setAttribute('src', url);
                        },
                        get: function () {
                            return iframe.getAttribute('src');
                        },
                        configurable: true,
                        enumerable: true
                    });
                }
                return element;
            };
            console.log('[Gemini屏蔽] document.createElement Hook 已启用 (V26.34 强化)。');
        }

        // =================================================================
        // 基础工具函数：getElementXPath (保持不变)
        // =================================================================
        function getElementXPath(element) {
            if (!element || element.tagName === 'HTML') return '/html[1]';
            if (element.id) { return `//*[@id='${element.id}']`; }

            let currentNode = element.parentNode;
            let anchorElement = null;

            while (currentNode && currentNode.tagName !== 'BODY') {
                if (currentNode.id) {
                    anchorElement = currentNode;
                    break;
                }
                currentNode = currentNode.parentNode;
            }

            if (anchorElement) {
                let path = '';
                let current = element;

                while (current !== anchorElement) {
                    let ix = 0;
                    const siblings = current.parentNode.childNodes;

                    for (let i = 0; i < siblings.length; i++) {
                        const sibling = siblings[i];
                        if (sibling.nodeType === 1 && sibling.tagName === current.tagName) {
                            ix++;
                        }
                        if (sibling === current) {
                            break;
                        }
                    }

                    const segment = `/${current.tagName.toLowerCase()}[${ix}]`;
                    path = segment + path;

                    current = current.parentNode;
                }
                return `//*[@id='${anchorElement.id}']` + path;
            }

            let ix = 0;
            const siblings = element.parentNode.childNodes;

            for (let i = 0; i < siblings.length; i++) {
                const sibling = siblings[i];
                if (sibling === element) {
                    const parentPath = getElementXPath(element.parentNode);
                    if (element.tagName === 'BODY') { return parentPath + '/body[1]'; }
                    return parentPath + '/' + element.tagName.toLowerCase() + '[' + (ix + 1) + ']';
                }
                if (sibling.nodeType === 1 && sibling.tagName === element.tagName) {
                    ix++;
                }
            }
            return '';
        }

        // =================================================================
        // 基础工具函数：getElementCssSelector (V26.39.4 NEW)
        // =================================================================
        function getElementCssSelector(element) {
            if (!element || element.tagName === 'HTML' || element.tagName === 'BODY') return element.tagName ? element.tagName.toLowerCase() : '';

            // 1. 优先使用 ID (最精确)
            if (element.id) {
                return `#${element.id}`;
            }

            // 2. 其次使用 TagName 和第一个 Class (具有一定特异性)
            const tag = element.tagName.toLowerCase();
            const classList = element.className.split(/\s+/).filter(c => c.length > 0);

            if (classList.length > 0) {
                // 返回 Tag.Class 形式
                return `${tag}.${classList[0]}`;
            }

            // 3. 最后退化为纯 TagName
            return tag;
        }

        // =================================================================
        // 基础工具函数：safeTruncate (V26.39.5 NEW)
        // =================================================================
        function safeTruncate(str, maxLen = 100) {
            if (!str) return 'N/A';
            if (str.length <= maxLen) {
                return str;
            }
            return str.substring(0, maxLen) + '...';
        }


        // =================================================================
        // 持久化存储工具函数 (保持不变)
        // =================================================================

        // --- 元素移除记录 (Element Removal) ---
        function getSavedRemovals() {
            try {
                return JSON.parse(localStorage.getItem(ELEMENT_REMOVAL_KEY) || '[]');
            } catch (e) {
                console.error('[持久化] 元素记录读取失败:', e);
                return [];
            }
        }

        function saveRemovalChoice(xpath) {
            let removals = getSavedRemovals();
            if (!removals.includes(xpath)) {
                removals.push(xpath);
                localStorage.setItem(ELEMENT_REMOVAL_KEY, JSON.stringify(removals));
            }
        }

        function removeRemovalChoice(xpath) {
            let removals = getSavedRemovals();
            const index = removals.indexOf(xpath);
            if (index > -1) {
                removals.splice(index, 1);
                localStorage.setItem(ELEMENT_REMOVAL_KEY, JSON.stringify(removals));
                return true;
            }
            return false;
        }

        // --- Iframe 移除记录 ---
        function getIframeRemovals() {
            try {
                return JSON.parse(localStorage.getItem(IFRAME_REMOVAL_KEY) || '[]');
            } catch (e) {
                console.error('[持久化] Iframe 记录读取失败:', e);
                return [];
            }
        }

        function saveIframeRemovalChoice(xpath) {
            let removals = getIframeRemovals();
            if (!removals.includes(xpath)) {
                removals.push(xpath);
                localStorage.setItem(IFRAME_REMOVAL_KEY, JSON.stringify(removals));
            }
        }

        function removeIframeRemovalChoice(xpath) {
            let removals = getIframeRemovals();
            const index = removals.indexOf(xpath);
            if (index > -1) {
                removals.splice(index, 1);
                localStorage.setItem(IFRAME_REMOVAL_KEY, JSON.stringify(removals));
                return true;
            }
            return false;
        }

        // --- 加载并移除函数 (Load and Remove) ---
        function loadAndRemoveSavedElements(doc) {
            const elementRemovals = getSavedRemovals();
            const iframeRemovals = getIframeRemovals();
            const allRemovals = [...elementRemovals, ...iframeRemovals];

            let removedCount = 0;
            allRemovals.forEach(xpath => {
                try {
                    const result = doc.evaluate(xpath, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                    const element = result.singleNodeValue;

                    if (element && element.parentNode) {
                        element.remove();
                        removedCount++;
                    }
                } catch (e) { }
            });

            const isTopWindow = window === window.top;
            const docName = (isTopWindow && doc === document) ? '主页' :
                (!isTopWindow && doc === document) ? 'Iframe (自身)' :
                    'Iframe (同源)';
            console.log(`[Gemini屏蔽] 已在 ${docName} 自动移除 ${removedCount} 个元素/Iframe。`);
            return removedCount;
        }


        // =================================================================
        // 模态框函数 (V26.39.6 更新 - 保持不变)
        // =================================================================
        function injectStyles(containerId, windowId) {
            const style = document.createElement('style');
            style.textContent = `
            /* 1. 最外层容器：z-index 提高确保覆盖 Iframe */
            #${containerId} {
                position: fixed; 
                top: 20px; 
                right: 20px; 
                z-index: 2147483647; 
                transition: transform 0.2s ease-out; 
                border-radius: 12px; 
                box-shadow: 0 10px 30px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05); 
                width: 400px; 
                background: #f7f7f7; 
                padding: 15px; 
                cursor: default; 
                user-select: none;
                font-family: 'Helvetica Neue', Arial, sans-serif;
            }
            
            /* 2. 内部浮窗：内容容器 */
            #${windowId} {
                background: #fff; 
                border: 1px solid #e0e0e0; 
                border-radius: 8px; 
                font-size: 13px; 
                max-height: 80vh; 
                overflow: hidden; 
            }

            /* 3. 内部拖拽区域和光标设置 */
            #${windowId} #gemini-header,
            #${windowId} #gemini-status-bar,
            #${windowId} .gemini-tip-text,
            #${containerId} { 
                cursor: move; 
                touch-action: none; 
            }
            
            /* 阻止内部可点击元素继承 move 光标 */
            #${windowId} * {
                cursor: default;
            }
            #${windowId} button, #${windowId} span[id$="close-btn"], #${windowId} .element-info, #${windowId} .iframe-info, #${windowId} .tab-btn, 
            #gemini-custom-modal-overlay button {
                 cursor: pointer !important;
            }

            /* 头部样式 */
            #${windowId} #gemini-header {
                padding: 10px 15px;
                background: #f8f8f8; 
                border-bottom: 1px solid #ececec;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            /* 增大关闭按钮点击区域 */
            #${windowId} #gemini-close-btn {
                font-size: 24px; 
                padding: 5px 10px; 
                margin-left: 10px;
                color: #555;
                background: none;
                border-radius: 4px;
                transition: background 0.2s, color 0.2s;
                cursor: pointer !important;
                line-height: 1;
            }
            #${windowId} #gemini-close-btn:hover {
                background: #ffe6e6; 
                color: #dc3545; 
            }

            /* 状态栏样式 (美化) */
            #${windowId} #gemini-status-bar {
                padding: 8px 15px;
                background: #e6f7ff; 
                color: #0050b3; 
                border-top: 1px solid #cceeff;
                font-weight: 500;
                text-align: left;
                border-radius: 0 0 8px 8px; 
            }

            /* 提示信息样式 (美化) */
            #${windowId} .gemini-tip-text {
                padding: 5px 15px;
                background: #fafafa; 
                color: #888;
                font-size: 11px;
                border-top: 1px dashed #eee;
                text-align: center;
            }
            
            /* Tab 按钮样式 */
            #${windowId} .tab-btn {
                padding: 10px 8px;
                border: none;
                background: #fff;
                font-size: 13px;
                font-weight: 600;
                color: #555;
                transition: color 0.2s, background 0.2s;
            }
            #${windowId} .tab-btn:hover {
                background: #f0f0f0;
            }

            /* 列表滚动容器样式 */
            #${windowId} .gemini-list-scroll-area {
                max-height: 250px; 
                overflow-y: auto; 
                padding: 0;
                margin: 0;
                border-top: 1px solid #eee; 
            }
            
            /* 列表项美化 */
            #${windowId} ul li {
                font-size: 12px;
                padding: 8px 15px;
                
            }

            /* 模态框样式 */
            #gemini-custom-modal-overlay {
                overflow:auto;
                position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                background: rgba(0, 0, 0, 0.7); z-index: 2147483648; 
                display: flex; justify-content: center; align-items: center;
                backdrop-filter: blur(2px);
                font-family: 'Helvetica Neue', Arial, sans-serif;
            }
            #gemini-custom-modal-overlay > div {
                background: white; border-radius: 10px; padding: 20px; 
                box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3); max-width: 450px;
                width: 90%; /* 增加宽度适应性 */
                font-size: 14px;
            }
            /* 通用按钮样式 */
            #gemini-custom-modal-overlay button {
                padding: 10px 15px; 
                border-radius: 6px; 
                cursor: pointer !important; 
                font-weight: bold; 
                margin: 5px;
                transition: background 0.2s, box-shadow 0.2s;
            }
            
            /* V26.20 新增：操作提示文本容器样式 */
            #gemini-custom-modal-overlay .operation-notes p {
                margin: 5px 0; /* 减少段落间的默认间距 */
                line-height: 1.4;
                color: #555;
            }
            #gemini-custom-modal-overlay .operation-notes strong {
                font-weight: bold;
                color: #333;
            }

            /* 移动端媒体查询 */
            @media (max-width: 768px) {
                #${containerId} {
                    width: 90vw; 
                    right: 5vw; 
                    left: 5vw; 
                    top: 5px;
                    padding: 10px; 
                }
            }
        `;
            document.head.appendChild(style);
        }

        function showCustomConfirm(message, elementInfo, xpath) {

            // ⚠️ 新增/确保有这个判断：
            if (localStorage.getItem('gemini_debug_element_click_mode') !== 'true') {
                // 如果模式不是 'true'，则直接退出函数，不执行任何捕获逻辑
                return;
            }

            return new Promise((resolve) => {
                const modalOverlay = document.createElement('div');
                modalOverlay.id = 'gemini-custom-modal-overlay';
                modalOverlay.className = 'notranslate';

                const modalBox = document.createElement('div');
                modalBox.className = 'notranslate'
                modalBox.style.cssText = `
                background: white; border-radius: 10px; padding: 20px; 
                box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3); max-width: 450px;
                width: 90%; 
                font-family: 'Helvetica Neue', Arial, sans-serif;
            `;

                let headerMessage = `此链接已被元素点击调试模式捕获。请选择操作：`;
                if (!xpath) {
                    headerMessage += `\n\n⚠️ 警告: 无法获取元素的唯一路径 (XPath)。如果您选择 "确定屏蔽"，此次屏蔽将可能无效。`;
                }

                // V26.39.5: 使用 safeTruncate 优化信息展示
                const truncatedCssSelector = safeTruncate(elementInfo.cssSelector, 100);
                const truncatedHref = safeTruncate(elementInfo.href, 100);
                const truncatedXpath = safeTruncate(xpath, 70);

                // V26.39.6 增强信息
                const truncatedParent = safeTruncate(elementInfo.parent, 70);
                const truncatedInlineClick = safeTruncate(elementInfo.inlineClick || '[无内联事件]', 70);


                modalBox.innerHTML = `
                <h3 style="margin-top: 0; color: #dc3545; border-bottom: 2px solid #eee; padding-bottom: 10px;">
                    🎯 链接点击捕获 (元素调试)
                </h3>
                
                <div style="
                    font-size: 14px; color: #333; 
                    padding: 10px; background: #fff3cd; border: 1px solid #ffeeba; border-radius: 6px; 
                    margin-bottom: 15px;
                ">
                    ${headerMessage.replace(/\n\n/g, '<br><br>')} 
                </div>

                <div class="operation-notes" style="margin-bottom: 20px;">
                    <p style="
                        font-size: 13px; padding: 5px 10px; 
                        background: #f1f8ff; border-left: 3px solid #007bff;
                    ">
                        <strong>🛡️ [永久屏蔽]</strong> 将此元素永久添加到屏蔽列表并移除。
                    </p>
                    <p style="
                        font-size: 13px; padding: 5px 10px; 
                        background: #fffbe6; border-left: 3px solid #ffc107;
                    ">
                        <strong>➡️ [临时放行]</strong> 临时放行此元素，但您需要**再次点击**此按钮来触发原始跳转行为。
                    </p>
                </div>
                
                <div style="font-size: 12px; background: #f8f9fa; padding: 12px; border-radius: 6px; margin-bottom: 20px; border-left: 4px solid #007bff;">
                    <strong style="color: #007bff; display: block; margin-bottom: 5px;">🚀 目标信息 (V26.39.6 - 增强):</strong>
                    
                    <div style="word-break: break-all; margin-bottom: 5px;">
                        <span style="font-weight: bold;">目标类型 (Tag):</span> ${elementInfo.tagName} 
                        <span style="font-weight: bold; margin-left: 10px;">尺寸:</span> ${elementInfo.width}x${elementInfo.height}px 
                    </div>
                    
                    <div style="word-break: break-all; margin-bottom: 5px;">
                        <span style="font-weight: bold;">CSS 选择器:</span> ${truncatedCssSelector}
                    </div>
                    
                    <div style="word-break: break-all; margin-bottom: 5px;">
                        <span style="font-weight: bold;">链接 (Href):</span> ${truncatedHref}
                    </div>

                    <div style="word-break: break-all; margin-bottom: 5px;">
                        <span style="font-weight: bold;">Z/Opacity/Pos:</span> ${elementInfo.zIndex} / ${elementInfo.opacity} / ${elementInfo.position}
                    </div>
                    
                    <div style="word-break: break-all; margin-bottom: 5px;">
                        <span style="font-weight: bold;">父级简述:</span> ${truncatedParent}
                    </div>
                    
                    <div style="word-break: break-all; margin-bottom: 5px;">
                        <span style="font-weight: bold;">内联 Click:</span> ${truncatedInlineClick}
                    </div>

                    <div style="word-break: break-all;">
                        <span style="font-weight: bold;">XPath:</span> ${truncatedXpath}
                    </div>
                </div>
                
                <div style="display: flex; justify-content: space-around; margin-top: 10px; gap: 10px;">
                    <button id="gemini-modal-confirm" style="
                        background: #dc3545; color: white; border: none; flex: 1;
                    ">
                        🛡️ 永久屏蔽并移除
                    </button>
                    <button id="gemini-modal-cancel" style="
                        background: #ffc107; color: #333; border: none; flex: 1;
                    ">
                        ➡️ 临时放行 (需二次点击)
                    </button>
                </div>
            `;

                const closeAndResolve = (result) => {
                    modalOverlay.remove();
                    resolve(result);
                };

                modalBox.querySelector('#gemini-modal-confirm').onclick = () => closeAndResolve(true);
                modalBox.querySelector('#gemini-modal-cancel').onclick = () => closeAndResolve(false);

                if (document.body) {
                    modalOverlay.appendChild(modalBox);
                    document.body.appendChild(modalOverlay);
                } else {
                    console.error('[Gemini屏蔽] 模态框插入失败：document.body 不可用。');
                    resolve(false);
                }
            });
        }

        // V26.39.9: 移除 showCustomConfirmLocation


        // =================================================================
        // Hook 函数
        // =================================================================
        function interceptWindowOpen(targetWindow) {
            let originalOpen;
            try {
                originalOpen = targetWindow.open;
                if (originalOpen.__is_gemini_hooked) { return; }
            } catch (e) { return; }

            Object.defineProperty(targetWindow, 'open', {
                value: function (url, windowName, features) {
                    if (isDebuggingLocationHooks || document.getElementById(containerId) || (url && url.includes(AD_URL_PARTIAL_PERMANENT))) {
                        console.warn(`[Gemini屏蔽] 成功拦截 ${targetWindow === window ? '当前窗口' : 'Iframe'} 的 window.open 调用:`, url);
                        // V26.39.10: 即使是 window.open，在调试模式下也同步中断，以防止其被 try/catch 绕过。
                        if (isDebuggingLocationHooks) {
                            throw new Error('GeminiAdBlocker: Synchronous Window.open Intercepted');
                        }
                        return null;
                    }
                    return originalOpen.apply(targetWindow, arguments);
                },
                configurable: true, writable: true
            });
            targetWindow.open.__is_gemini_hooked = true;
        }

        function enableWindowOpenHook() {
            if (isWindowOpenHooked) return;
            interceptWindowOpen(window);
            getTargetDocuments().forEach(doc => {
                try { interceptWindowOpen(doc.defaultView); } catch (e) { }
            });
            isWindowOpenHooked = true;
            console.log('[Gemini屏蔽] window.open 强化 Hook 已启动。');
        }

        function interceptWindowLocation() {

            function applyLocationHooks(targetWindow, scopeName) {
                try {
                    const locationObj = targetWindow.location;
                    const locationDescriptor = Object.getOwnPropertyDescriptor(Window.prototype, 'location') ||
                        Object.getOwnPropertyDescriptor(Document.prototype, 'location');

                    if (locationDescriptor && locationDescriptor.set) {
                        const originalSetLocation = locationDescriptor.set;

                        Object.defineProperty(locationObj, 'href', {
                            set: function (url) {

                                if (url && url.includes(AD_URL_PARTIAL_PERMANENT)) {
                                    console.error(`[Gemini屏蔽 V26.39.10] 🎯 强制拦截已知广告域名重定向: ${url}`);
                                    // 即使不调试，遇到永久黑名单域名也直接中断
                                    throw new Error('GeminiAdBlocker: Known Ad Domain Location Intercepted');
                                }

                                if (isDebuggingLocationHooks) {
                                    // ⭐️ V26.39.10 核心：同步中断执行，阻止代码继续
                                    console.error(`[Gemini屏蔽 V26.39.10] 🚨 同步中断：${scopeName}.href 尝试重定向。URL: ${safeTruncate(url, 50)}`);
                                    throw new Error('GeminiAdBlocker: Synchronous Location Href Intercepted');
                                }

                                originalSetLocation.call(this, url);
                            },
                            get: locationDescriptor.get,
                            configurable: true, enumerable: true
                        });
                    }

                    const originalAssign = locationObj.assign;
                    const originalReplace = locationObj.replace;

                    function hookLocationMethod(originalMethod, methodName) {
                        locationObj[methodName] = function (url) {

                            if (url && url.includes(AD_URL_PARTIAL_PERMANENT)) {
                                console.error(`[Gemini屏蔽 V26.39.10] 🎯 强制拦截已知广告域名重定向 (Method ${methodName}): ${url}`);
                                throw new Error('GeminiAdBlocker: Known Ad Domain Location Intercepted');
                            }

                            if (isDebuggingLocationHooks) {
                                // ⭐️ V26.39.10 核心：同步中断执行，阻止代码继续
                                console.error(`[Gemini屏蔽 V26.39.10] 🚨 同步中断：${scopeName}.${methodName} 尝试重定向。URL: ${safeTruncate(url, 50)}`);
                                throw new Error('GeminiAdBlocker: Synchronous Location Method Intercepted');
                            }
                            originalMethod.call(this, url);
                        };
                    }

                    hookLocationMethod(originalAssign, 'assign');
                    hookLocationMethod(originalReplace, 'replace');

                    console.log(`[Gemini屏蔽] ${scopeName}.location 完整 Hook 已启用。`);
                    return true;

                } catch (e) {
                    console.log(`[Gemini屏蔽] 无法 Hook ${scopeName}.location (跨域或权限限制)。`);
                    return false;
                }
            }

            // Hook Window.prototype.location setter (V26.39.10 Sync Update)
            try {
                const protoLocationDescriptor = Object.getOwnPropertyDescriptor(Window.prototype, 'location') ||
                    Object.getOwnPropertyDescriptor(Document.prototype, 'location');

                if (protoLocationDescriptor && protoLocationDescriptor.set) {
                    const originalProtoSetter = protoLocationDescriptor.set;

                    Object.defineProperty(Window.prototype, 'location', {
                        get: protoLocationDescriptor.get,
                        set: function (url) {
                            if (url && url.includes(AD_URL_PARTIAL_PERMANENT)) {
                                console.error(`[Gemini屏蔽 V26.39.10] 🎯 强制拦截 Window.prototype.location 重定向: ${url}`);
                                throw new Error('GeminiAdBlocker: Known Ad Domain Location Intercepted');
                            }

                            if (isDebuggingLocationHooks) {
                                // ⭐️ V26.39.10 核心：同步中断执行，阻止代码继续
                                console.error(`[Gemini屏蔽 V26.39.10] 🚨 同步中断：Window.location 赋值尝试重定向。URL: ${safeTruncate(url, 50)}`);
                                throw new Error('GeminiAdBlocker: Synchronous Window.location Intercepted');
                            }
                            originalProtoSetter.call(this, url);
                        },
                        configurable: true,
                        enumerable: true
                    });
                    console.log('[Gemini屏蔽] 🌟 Window.prototype.location Setter Hook 已启用。');
                }
            } catch (e) {
                console.error('[Gemini屏蔽] 顶级 Hook Window.prototype.location 失败:', e);
            }

            applyLocationHooks(window, 'window');

            if (window.parent !== window) {
                applyLocationHooks(window.parent, 'parent');
            }

            if (window.top !== window) {
                applyLocationHooks(window.top, 'top');
            }
        }

        // =================================================================
        // ⭐️ V26.39.10 Hook: 拦截程序化 Element.click() (A)
        // =================================================================
        function interceptElementClick() {
            try {
                const originalClick = Element.prototype.click;

                Element.prototype.click = function () {
                    const element = this;
                    let url = null;
                    let isTargetLink = false;

                    // 检查是否是链接元素，并且有可重定向的 URL
                    if (element.tagName === 'A' || element.tagName === 'AREA') {
                        url = element.href || element.getAttribute('href');
                        isTargetLink = true;
                    }

                    // 如果不是链接元素，但有内联的重定向事件 (例如 onclick="location.href='...'")
                    if (!isTargetLink) {
                        const inlineClick = element.getAttribute('onclick') ||
                            element.getAttribute('onmousedown') ||
                            element.getAttribute('onmouseup');
                        if (inlineClick && /(location|href|window)\./i.test(inlineClick)) {
                            // 无法获取确切 URL，但行为可疑，先标记为可疑链接
                            url = `[内联事件可疑] ${inlineClick}`;
                            isTargetLink = true;
                        }
                    }

                    if (isTargetLink && url && url !== '#' && isDebuggingLocationHooks) {
                        // 强制拦截已知广告域名
                        if (url.includes(AD_URL_PARTIAL_PERMANENT)) {
                            console.error(`[Gemini屏蔽 V26.39.10] 🎯 强制拦截 Element.click() 已知广告域名重定向: ${url}`);
                            throw new Error('GeminiAdBlocker: Known Ad Domain Element Click Intercepted');
                        }

                        // ⭐️ V26.39.10 核心：同步中断执行，阻止代码继续
                        console.error(`[Gemini屏蔽 V26.39.10] 🚨 同步中断：Element.click() 尝试重定向。Tag: ${element.tagName} | URL: ${safeTruncate(url, 50)}`);
                        throw new Error('GeminiAdBlocker: Synchronous Element Click Intercepted');
                    }

                    originalClick.apply(this, arguments);
                };
                console.log(`[Gemini屏蔽] 🌟 Element.prototype.click Hook 已启用 (拦截程序化点击)。`);
            } catch (e) {
                console.error('[Gemini屏蔽] Element.prototype.click Hook 失败:', e);
            }
        }

        // =================================================================
        // ⭐️ V26.39.10 Hook: 拦截 PostMessage (B)
        // =================================================================
        function interceptPostMessage() {
            try {
                const originalPostMessage = window.postMessage;

                window.postMessage = function (message, targetOrigin, transfer) {

                    if (isDebuggingLocationHooks) {
                        // 尝试将消息内容转为字符串进行检查
                        let messageString = '';
                        if (typeof message === 'string') {
                            messageString = message;
                        } else if (typeof message === 'object' && message !== null) {
                            try {
                                messageString = JSON.stringify(message);
                            } catch (e) {
                                messageString = '[无法序列化对象]';
                            }
                        }

                        // 检查消息是否包含明显的重定向指令
                        const suspiciousPatterns = /(location|href|navigate|redirect)\s*[=:]\s*['"]?http/i;
                        if (suspiciousPatterns.test(messageString)) {

                            // 强制拦截已知广告域名
                            if (messageString.includes(AD_URL_PARTIAL_PERMANENT)) {
                                console.error(`[Gemini屏蔽 V26.39.10] 🎯 强制拦截 postMessage 已知广告域名重定向: ${safeTruncate(messageString, 50)}`);
                                throw new Error('GeminiAdBlocker: Known Ad Domain PostMessage Intercepted');
                            }

                            // ⭐️ V26.39.10 核心：同步中断执行，阻止代码继续
                            console.error(`[Gemini屏蔽 V26.39.10] 🚨 同步中断：postMessage 尝试跨框架重定向。Message: ${safeTruncate(messageString, 50)}`);
                            throw new Error('GeminiAdBlocker: Synchronous PostMessage Intercepted');
                        }
                    }

                    originalPostMessage.apply(this, arguments);
                };
                console.log(`[Gemini屏蔽] 🌟 window.postMessage Hook 已启用 (拦截跨框架重定向)。`);
            } catch (e) {
                console.error('[Gemini屏蔽] window.postMessage Hook 失败:', e);
            }
        }


        // =================================================================
        // ⭐️ V26.39.7 Hook: History API (pushState/replaceState) (V26.39.10 Sync Update)
        // =================================================================
        function interceptHistoryAPI(targetWindow, scopeName) {
            try {
                const historyObj = targetWindow.history;
                if (!historyObj) return;

                const originalPushState = historyObj.pushState;
                const originalReplaceState = historyObj.replaceState;

                function hookHistoryMethod(originalMethod, methodName) {
                    historyObj[methodName] = function (state, title, url) {

                        if (isDebuggingLocationHooks && url) {
                            // ⭐️ V26.39.10 核心：同步中断执行，阻止代码继续
                            console.error(`[Gemini屏蔽 V26.39.10] 🚨 同步中断：${scopeName}.history.${methodName} 尝试重定向。URL: ${safeTruncate(url, 50)}`);
                            throw new Error('GeminiAdBlocker: Synchronous History API Intercepted'); // Synchronous halt
                        }

                        originalMethod.apply(this, arguments);
                    };
                }

                hookHistoryMethod(originalPushState, 'pushState');
                hookHistoryMethod(originalReplaceState, 'replaceState');

                console.log(`[Gemini屏蔽] ${scopeName}.history 完整 Hook 已启用 (V26.39.7)。`);
            } catch (e) {
                console.log(`[Gemini屏蔽] 无法 Hook ${scopeName}.history (权限限制)。`);
            }
        }

        // =================================================================
        // ⭐️ V26.39.7 Hook: Form 表单提交 (V26.39.10 Sync Update)
        // =================================================================
        function interceptFormSubmission() {
            try {
                // 确保 HTMLFormElement 存在
                if (typeof HTMLFormElement === 'undefined' || !HTMLFormElement.prototype.submit) {
                    console.log('[Gemini屏蔽] HTMLFormElement.prototype.submit 不可用。');
                    return;
                }

                const originalSubmit = HTMLFormElement.prototype.submit;

                HTMLFormElement.prototype.submit = function () {
                    const url = this.action || '[无 Action]';

                    // 只有在调试开启、有明确 Action 且目标不是当前页自身时才拦截
                    if (isDebuggingLocationHooks && url && url !== '[无 Action]' && url !== window.location.href && url !== '#') {

                        // ⭐️ V26.39.10 核心：同步中断执行，阻止代码继续
                        console.error(`[Gemini屏蔽 V26.39.10] 🚨 同步中断：Form Submission 尝试重定向。URL: ${safeTruncate(url, 50)}`);
                        throw new Error('GeminiAdBlocker: Synchronous Form Submit Intercepted'); // Synchronous halt
                    }

                    originalSubmit.call(this);
                };
                console.log('[Gemini屏蔽] 🌟 Form Submission Hook 已启用 (V26.39.7)。');
            } catch (e) {
                console.error('[Gemini屏蔽] Form Submission Hook 失败:', e);
            }
        }

        // =================================================================
        // ⭐️ V26.39.8 Hook: document.write/writeln 终极拦截 (V26.39.10 Sync Update)
        // =================================================================
        function interceptDocumentWrite() {
            try {
                if (typeof Document === 'undefined' || !Document.prototype.write) {
                    console.log('[Gemini屏蔽] Document.prototype.write 不可用。');
                    return;
                }

                const originalWrite = Document.prototype.write;
                const originalWriteln = Document.prototype.writeln;

                // 用于检测重定向代码的正则模式
                const redirectPatterns = [
                    /location\.(href|replace|assign)\s*=\s*['"](.+?)['"]/i, // JS location 赋值
                    /<meta\s+[^>]*http-equiv\s*=\s*['"]refresh['"][^>]*content\s*=\s*['"]\s*\d+\s*;\s*url\s*=\s*(.+?)['"]/i // Meta Refresh
                ];

                function hookedWrite(content) {
                    // 确保只处理字符串内容
                    if (typeof content === 'string') {
                        let isRedirectAttempt = false;
                        let redirectUrl = 'Unknown';

                        for (const pattern of redirectPatterns) {
                            const match = content.match(pattern);
                            if (match) {
                                isRedirectAttempt = true;
                                redirectUrl = match[match.length - 1]; // 捕获到的 URL
                                break;
                            }
                        }

                        if (isRedirectAttempt) {

                            // 强制拦截已知广告域名
                            if (redirectUrl.includes(AD_URL_PARTIAL_PERMANENT)) {
                                console.error(`[Gemini屏蔽 V26.39.10] 🚨 终极拦截：document.write 尝试注入已知广告域名。`);
                                throw new Error('GeminiAdBlocker: Known Ad Domain Document Write Intercepted');
                            }

                            if (isDebuggingLocationHooks) {
                                // ⭐️ V26.39.10 核心：同步中断执行，阻止代码继续
                                console.error(`[Gemini屏蔽 V26.39.10] 🚨 终极同步中断：document.write 尝试注入重定向代码。URL: ${safeTruncate(redirectUrl, 50)}`);
                                throw new Error('GeminiAdBlocker: Synchronous Document Write Intercepted');
                            }

                            // 即使不调试，如果检测到重定向代码，也阻止写入，以防万一
                            return;
                        }

                        // 如果不是重定向或调试关闭，则执行原始方法
                        originalWrite.call(this, content);
                    } else {
                        originalWrite.apply(this, arguments);
                    }
                }

                // 覆盖 write/writeln
                Document.prototype.write = function () {
                    hookedWrite.apply(this, arguments);
                };

                // 确保 writeln 也被 Hook
                Document.prototype.writeln = function () {
                    if (arguments.length > 0 && typeof arguments[0] === 'string') {
                        arguments[0] += '\n'; // 模拟 writeln 的换行行为
                    }
                    hookedWrite.apply(this, arguments);
                };

                console.log('[Gemini屏蔽 V26.39.10] 🌟 document.write/writeln Hook 已启用。');
            } catch (e) {
                console.error('[Gemini屏蔽 V26.39.10] document.write Hook 失败:', e);
            }
        }


        // =================================================================
        // DOM 遍历/观察/拦截函数 (其余保持不变)
        // =================================================================

        function blockMetaRefresh(doc) {
            const head = doc.head || doc.getElementsByTagName('head')[0];
            if (!head) return;

            const checkAndRemoveMeta = (node) => {
                if (node.tagName === 'META' && node.hasAttribute('http-equiv')) {
                    const httpEquiv = node.getAttribute('http-equiv').toLowerCase();
                    const content = node.getAttribute('content');

                    if (httpEquiv === 'refresh' && content) {
                        const urlMatch = content.match(/url=(.*)/i);
                        const redirectUrl = urlMatch ? urlMatch[1] : '';

                        if (redirectUrl.includes(AD_URL_PARTIAL_PERMANENT)) {
                            console.warn(`[Gemini屏蔽 V26.24] 🚨 终极拦截：发现并移除了 Meta Refresh 广告重定向标签: ${redirectUrl.substring(0, 50)}...`);
                            node.remove();
                            return true;
                        }
                    }
                }
                return false;
            };

            const metaTags = head.querySelectorAll('meta');
            metaTags.forEach(checkAndRemoveMeta);

            const observer = new MutationObserver(mutationsList => {
                for (const mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        mutation.addedNodes.forEach(node => {
                            if (node.nodeType === 1) {
                                checkAndRemoveMeta(node);
                            }
                        });
                    }
                }
            });

            observer.observe(head, { childList: true, subtree: true });
            // V26.37 修复日志
            const docName = (window === window.top && doc === document) ? '主页' : 'Iframe/同源';
            console.log(`[Gemini屏蔽] Meta Refresh 监控已对 ${docName} 启用。`);
        }

        function interceptIframeWindowTop(iframe) {
            try {
                const targetWindow = iframe.contentWindow;
                if (!targetWindow || targetWindow.top !== window) return;

                interceptWindowLocation(targetWindow, 'Iframe');
                interceptWindowOpen(targetWindow);
                // V26.39.7: Iframe 内部也 Hook History 和 Form
                interceptHistoryAPI(targetWindow, 'Iframe');
                interceptFormSubmission();
                // V26.39.8: Iframe 内部也 Hook Document Write
                interceptDocumentWrite();
                // V26.39.10: Iframe 内部也 Hook Element Click 和 PostMessage
                interceptElementClick();
                interceptPostMessage();

            } catch (e) {
                // 跨域 Iframe 无法访问其 contentWindow/contentDocument
            }
        }

        function getTargetDocuments() {
            const documents = [document];

            // 只有在顶级窗口运行时才尝试检测同源 Iframe
            if (window === window.top) {
                const iframes = document.querySelectorAll('iframe');

                iframes.forEach(iframe => {
                    applyIframeSandbox(iframe);
                    interceptIframeWindowTop(iframe);

                    if (iframe.contentDocument) {
                        try {
                            const iframeDocument = iframe.contentDocument;
                            // 确保 Iframe 内容已加载且 DOM 可用
                            if (iframeDocument && iframeDocument.body) {
                                documents.push(iframeDocument);
                            }
                        } catch (e) {
                            console.warn('[Gemini屏蔽] 无法访问跨域 Iframe:', iframe.src);
                        }
                    }
                });
            }

            return documents;
        }

        function observeDynamicIframes() {
            // 仅在顶级窗口监控动态 Iframe
            if (window !== window.top) return;

            const observer = new MutationObserver(mutationsList => {
                for (const mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        mutation.addedNodes.forEach(node => {
                            if (node.tagName === 'IFRAME') {
                                const newIframe = node;

                                applyIframeSandbox(newIframe);
                                interceptIframeWindowTop(newIframe);

                                const handleIframeLoad = () => {
                                    try {
                                        const iframeDoc = newIframe.contentDocument;
                                        if (iframeDoc && iframeDoc.body) {
                                            loadAndRemoveSavedElements(iframeDoc);
                                            interceptWindowOpen(iframeDoc.defaultView);
                                            // V26.39.7/8/10: 动态 Iframe 也要 Hook 所有 API
                                            interceptHistoryAPI(iframeDoc.defaultView, 'Dynamic Iframe');
                                            interceptFormSubmission();
                                            interceptDocumentWrite();
                                            interceptElementClick();
                                            interceptPostMessage();

                                            blockMetaRefresh(iframeDoc);

                                            applyClickDebugFilter(iframeDoc);
                                            console.log(`[MutationObserver] 动态同源 Iframe 初始化成功: ${newIframe.src}`);
                                        }
                                    } catch (e) {
                                        console.warn('[MutationObserver] 无法访问跨域或加载失败的 Iframe。');
                                    }
                                    newIframe.removeEventListener('load', handleIframeLoad);
                                };

                                newIframe.addEventListener('load', handleIframeLoad);

                                if (newIframe.contentDocument) {
                                    handleIframeLoad();
                                }
                            }
                        });
                    }
                }
            });

            if (document.body) {
                observer.observe(document.body, { childList: true, subtree: true });
                console.log('[MutationObserver] 已启动，开始监听动态 Iframe。');
            }
        }


        // =================================================================
        // 核心函数：渲染和事件绑定 (V26.39.6 更新 - 保持不变)
        // =================================================================

        function getIframeData() {
            // V26.38 新增：获取 Iframe 列表数据
            if (window !== window.top) return [];

            return Array.from(document.querySelectorAll('iframe')).map(iframe => {
                let src = iframe.src || iframe.getAttribute('src') || '[未设置 src]';
                let isCrossDomain = false;

                try {
                    // 尝试获取 URL 对象判断是否跨域
                    const iframeUrl = new URL(src, window.location.href);
                    if (iframeUrl.origin !== window.location.origin) {
                        isCrossDomain = true;
                    }
                    // 此外，尝试访问 contentDocument 会在跨域时抛出错误
                    if (iframe.contentDocument === null) {
                        isCrossDomain = true;
                    }
                } catch (e) {
                    // URL 解析或 contentDocument 访问失败，几乎肯定是跨域
                    isCrossDomain = true;
                }

                const xpath = getElementXPath(iframe);

                return {
                    src: src,
                    xpath: xpath,
                    isCrossDomain: isCrossDomain,
                    element: iframe
                };
            }).filter(item => item.xpath); // 确保只有能获取 XPath 的才被列出
        }

        function renderIframeList(iframes) {
            if (iframes.length === 0) {
                return '<li style="padding: 10px; text-align: center; color: #888;">当前页面未检测到 Iframe 元素。</li>';
            }
            return iframes.map((item) => {
                const status = item.isCrossDomain ? '跨域' : '同源';
                const color = item.isCrossDomain ? '#dc3545' : '#17a2b8'; // Red for cross, blue for same
                return `
                <li style="display: flex; justify-content: space-between; align-items: center; padding: 6px 8px; border-bottom: 1px solid #eee; transition: background 0.2s;" 
                    data-xpath="${item.xpath}"
                >
                    <div class="iframe-info" style="cursor: pointer; flex-grow: 1;" title="点击高亮">
                        <span style="color: ${color}; margin-right: 5px; font-weight: bold;">[${status} Iframe]</span>
                        <span style="color: #666; font-size: 12px; word-break: break-all;">
                            Src: ${safeTruncate(item.src, 50)}
                        </span>
                        <div style="font-size: 10px; color: #aaa; word-break: break-all;" title="${item.xpath}">
                            XPath: ${safeTruncate(item.xpath, 70)}
                        </div>
                    </div>
                    
                    <button class="remove-iframe-btn" style="
                        background: #dc3545; color: white; border: none; padding: 2px 6px; 
                        margin-left: 10px; cursor: pointer; border-radius: 3px; font-size: 11px;
                    " data-xpath="${item.xpath}">移除并保存</button>
                </li>
            `;
            }).join('');
        }

        function renderFloatWindow(targetDocs) {
            if (!document.body) {
                console.error('[Gemini屏蔽] 无法渲染浮窗：document.body 不可用。');
                return;
            }

            const zeroOpacityElements = [];
            targetDocs.forEach(doc => {
                const allElements = doc.querySelectorAll('*');
                allElements.forEach((element, index) => {
                    if (element.tagName === 'SCRIPT' || element.tagName === 'STYLE' || element.tagName === 'NOSCRIPT' || element.tagName === 'TITLE' || !element.parentNode || element.tagName === 'IFRAME') {
                        return; // 忽略 Iframe 自身，它有单独的列表
                    }

                    try {
                        const computedStyle = element.ownerDocument.defaultView.getComputedStyle(element);
                        const opacityValue = parseFloat(computedStyle.opacity);

                        if (opacityValue === 0) {
                            const rect = element.getBoundingClientRect();
                            const xpath = getElementXPath(element);

                            if (xpath) {
                                zeroOpacityElements.push({
                                    index: index,
                                    tagName: element.tagName,
                                    className: element.className,
                                    id: element.id,
                                    width: rect.width.toFixed(0),
                                    height: rect.height.toFixed(0),
                                    element: element,
                                    xpath: xpath,
                                    document: doc,
                                });
                            }
                        }
                    } catch (e) { /* 忽略跨域错误 */ }
                });
            });

            const allIframes = getIframeData();

            const existingContainer = document.getElementById(containerId);
            if (existingContainer) existingContainer.remove();

            const mainContainer = document.createElement('div');
            mainContainer.className = 'notranslate';
            mainContainer.id = containerId;

            const windowDiv = document.createElement('div');
            windowDiv.className = 'notranslate'
            windowDiv.id = windowId;

            function renderBlacklist(blacklist) {
                if (blacklist.length === 0) {
                    return '<li style="padding: 10px; text-align: center; color: #888; background: #fff;">暂无黑名单记录。</li>';
                }
                return blacklist.map((pageKey) => `
                <li style="display: flex; justify-content: space-between; align-items: center; padding: 6px 8px; border-bottom: 1px dashed #ddd; background: #fff;">
                    <span style="flex-grow: 1; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; color: #dc3545; font-weight: bold;" title="${pageKey}">
                        ${safeTruncate(pageKey, 50)}
                    </span>
                    <button class="remove-blacklist-btn" style="
                        background: #007bff; color: white; border: none; padding: 2px 6px; 
                        margin-left: 10px; cursor: pointer; border-radius: 3px; font-size: 11px;
                    " data-page-key="${pageKey}">取消黑名单</button>
                </li>
            `).join('');
            }

            function renderSavedRemovalsList(removals) {
                if (removals.length === 0) {
                    return '<li style="padding: 10px; text-align: center; color: #888; background: #fff;">暂无元素移除记录。</li>';
                }
                return removals.map((xpath) => `
                <li style="display: flex; justify-content: space-between; align-items: center; padding: 6px 8px; border-bottom: 1px dashed #ddd; background: #fff;">
                    <span title="${xpath}" style="flex-grow: 1; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; color: #666;">
                        ${safeTruncate(xpath, 40)}
                    </span>
                    <button class="undo-btn" style="
                        background: #ffc107; color: #333; border: none; padding: 2px 6px; 
                        margin-left: 10px; cursor: pointer; border-radius: 3px; font-size: 11px;
                    " data-xpath="${xpath}">取消移除</button>
                </li>
            `).join('');
            }

            // V26.39 NEW: Iframe 移除记录渲染
            function renderSavedIframeRemovalsList(removals) {
                if (removals.length === 0) {
                    return '<li style="padding: 10px; text-align: center; color: #888; background: #fff;">暂无 Iframe 移除记录。</li>';
                }
                return removals.map((xpath) => `
                <li style="display: flex; justify-content: space-between; align-items: center; padding: 6px 8px; border-bottom: 1px dashed #ddd; background: #fff;">
                    <span title="${xpath}" style="flex-grow: 1; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; color: #007bff; font-weight: bold;">
                        [IFRAME] ${safeTruncate(xpath, 30)}
                    </span>
                    <button class="undo-iframe-btn" style="
                        background: #ffc107; color: #333; border: none; padding: 2px 6px; 
                        margin-left: 10px; cursor: pointer; border-radius: 3px; font-size: 11px;
                    " data-xpath="${xpath}">取消移除</button>
                </li>
            `).join('');
            }

            // V26.37 修复 Iframe 识别
            const isCurrentInTopWindow = window === window.top;
            function renderZeroOpacityList(elements) {
                if (elements.length === 0) {
                    return '<li style="padding: 10px; text-align: center; color: #888;">当前页面没有透明元素。</li>';
                }
                return elements.map(item => {
                    let docLabel = '';
                    if (isCurrentInTopWindow) {
                        docLabel = item.document === document ? '主页' : 'Iframe';
                    } else {
                        docLabel = 'Iframe (自身)';
                    }

                    return `
                <li style="display: flex; justify-content: space-between; align-items: center; padding: 6px 8px; border-bottom: 1px solid #eee; transition: background 0.2s;" 
                    data-xpath="${item.xpath}"
                    data-doc-url="${item.document.URL.split('/').pop()}"
                >
                    <div class="element-info" style="cursor: pointer; flex-grow: 1;" title="点击高亮">
                        <span style="color: #555; margin-right: 5px; font-weight: bold;">[${docLabel}]</span>
                        <span style="color: #6a0dad;">${item.tagName}</span>
                        <span style="color: #007bff;">#${item.id || item.className.split(' ')[0] || 'N/A'}</span>
                        <span style="color: #333; margin-left: 10px;">${item.width}x${item.height}px</span>
                    </div>
                    
                    <button class="remove-btn" style="
                        background: #dc3545; color: white; border: none; padding: 2px 6px; 
                        margin-left: 10px; cursor: pointer; border-radius: 3px; font-size: 11px;
                    " data-xpath="${item.xpath}">移除并保存</button>
                </li>
            `;
                }).join('');
            }

            let isBlacklisted = isCurrentPageBlacklisted();
            const totalSavedCount = getSavedRemovals().length + getIframeRemovals().length + getPageBlacklist().length;


            windowDiv.innerHTML = `
            <div id="gemini-header">
                <strong>🔍 元素屏蔽/追踪器 (V26.39.10)</strong>
                <span id="gemini-close-btn">&times;</span>
            </div>
            
            <div style="padding: 8px 15px; border-bottom: 1px solid #ccc; text-align: center;">
                
                <button id="blacklist-toggle" style="
                    background: ${isBlacklisted ? '#dc3545' : '#007bff'}; 
                    color: white; border: none; padding: 8px 15px; 
                    cursor: pointer; border-radius: 4px; font-weight: bold; width: 100%; margin-bottom: 5px;
                ">
                    ${isBlacklisted ? '🛡️ 当前为黑名单页 (启用严格沙箱)' : '➕ 标记为黑名单页 (启用严格沙箱)'}
                </button>
                
                <button id="selector-toggle" style="background: #007bff; color: white; border: none; padding: 8px 15px; cursor: pointer; border-radius: 4px; font-weight: bold; width: 100%; margin-bottom: 5px;">
                    🖱️ 启用选择并屏蔽模式
                </button>
                <div style="display: flex; gap: 5px;">
                    <button id="debug-click-toggle" style="background: ${isDebuggingElementClick ? '#00c853' : '#ffc107'}; color: ${isDebuggingElementClick ? 'white' : '#333'}; border: none; padding: 8px 5px; cursor: pointer; border-radius: 4px; font-weight: bold; flex: 1; font-size: 12px;">
                        🛠️ 元素点击调试 (${isDebuggingElementClick ? '开' : '关'})
                    </button>
                    <button id="debug-location-toggle" style="background: ${isDebuggingLocationHooks ? '#00c853' : '#ffc107'}; color: ${isDebuggingLocationHooks ? 'white' : '#333'}; border: none; padding: 8px 5px; cursor: pointer; border-radius: 4px; font-weight: bold; flex: 1; font-size: 12px;">
                        ⚙️ JS 重定向调试 (${isDebuggingLocationHooks ? '开' : '关'})
                    </button>
                </div>
            </div>

            <div style="display: flex; border-bottom: 1px solid #ccc;">
                <button id="tab-current" class="tab-btn" style="flex: 1; background: #fff; border-right: 1px solid #ccc;">
                    当前透明元素 (${zeroOpacityElements.length})
                </button>
                <button id="tab-iframe" class="tab-btn" style="flex: 1; background: #f0f0f0;">
                    当前 Iframe 记录 (${allIframes.length})
                </button>
                <button id="tab-saved" class="tab-btn" style="flex: 1; background: #f0f0f0; border-left: 1px solid #ccc;">
                    记录管理 (${totalSavedCount})
                </button>
            </div>

            <div id="content-current">
                <div class="gemini-list-scroll-area">
                    <ul id="gemini-element-list" style="list-style: none; padding: 0; margin: 0;">
                        ${renderZeroOpacityList(zeroOpacityElements)}
                    </ul>
                </div>
            </div>

            <div id="content-iframe" style="display: none;">
                <div class="gemini-list-scroll-area">
                    <ul id="gemini-iframe-list" style="list-style: none; padding: 0; margin: 0;">
                        ${renderIframeList(allIframes)}
                    </ul>
                </div>
            </div>

            <div id="content-saved" style="display: none;">
                <div class="gemini-list-scroll-area">
                    <ul id="gemini-saved-list" style="list-style: none; padding: 0; margin: 0;">
                         <li style="padding: 10px; background: #ffe6e6; font-weight: bold; color: #dc3545; border-bottom: 1px solid #ffcccc;">🚫 黑名单页面记录 (${getPageBlacklist().length})</li>
                         ${renderBlacklist(getPageBlacklist())}
                         
                         <li style="padding: 10px; background: #fafafa; font-weight: bold; color: #666; border-top: 1px solid #eee; border-bottom: 1px solid #eee;">🛡️ 元素永久移除记录 (${getSavedRemovals().length})</li>
                         ${renderSavedRemovalsList(getSavedRemovals())}

                         <li style="padding: 10px; background: #e6f7ff; font-weight: bold; color: #007bff; border-top: 1px solid #cceeff; border-bottom: 1px solid #cceeff;">🖼️ Iframe 永久移除记录 (${getIframeRemovals().length})</li>
                         ${renderSavedIframeRemovalsList(getIframeRemovals())}

                    </ul>
                </div>
            </div>

            <div id="gemini-status-bar">
                请点击列表项高亮，或点击“移除并保存”按钮。
            </div>

            <div class="gemini-tip-text">
                **提示:** “选择模式”可屏蔽任何元素。取消移除后请**手动刷新**。
                🛠️ 元素点击调试/选择并屏蔽模式禁止🙅同时开启。
            </div>
        `;

            document.body.appendChild(mainContainer);
            mainContainer.appendChild(windowDiv);


            // --- 4. 交互逻辑初始化 (保持不变) ---
            const list = document.getElementById('gemini-element-list');
            const iframeList = document.getElementById('gemini-iframe-list');
            const savedList = document.getElementById('gemini-saved-list');
            const statusBar = document.getElementById('gemini-status-bar');
            const selectorToggle = document.getElementById('selector-toggle');
            const blacklistToggle = document.getElementById('blacklist-toggle');

            const debugClickToggle = document.getElementById('debug-click-toggle');
            const debugLocationToggle = document.getElementById('debug-location-toggle');

            document.getElementById('gemini-close-btn').onclick = () => {
                mainContainer.remove();
                toggleSelectionMode(false);
                if (typeof body_build === 'function') { /* try { body_build('true'); } catch (e) {} */ }
            };

            const tabCurrent = document.getElementById('tab-current');
            const tabIframe = document.getElementById('tab-iframe');
            const tabSaved = document.getElementById('tab-saved');

            const contentCurrent = document.getElementById('content-current');
            const contentIframe = document.getElementById('content-iframe');
            const contentSaved = document.getElementById('content-saved');

            function updateSavedListContent() {
                const savedRemovalsHtml = renderSavedRemovalsList(getSavedRemovals());
                const iframeRemovalsHtml = renderSavedIframeRemovalsList(getIframeRemovals()); // V26.39 New
                const blacklistHtml = renderBlacklist(getPageBlacklist());

                const totalRemovals = getSavedRemovals().length + getIframeRemovals().length;
                const totalSaved = totalRemovals + getPageBlacklist().length;

                savedList.innerHTML = `
                 <li style="padding: 10px; background: #ffe6e6; font-weight: bold; color: #dc3545; border-bottom: 1px solid #ffcccc;">🚫 黑名单页面记录 (${getPageBlacklist().length})</li>
                 ${blacklistHtml}
                 <li style="padding: 10px; background: #fafafa; font-weight: bold; color: #666; border-top: 1px solid #eee; border-bottom: 1px solid #eee;">🛡️ 元素永久移除记录 (${getSavedRemovals().length})</li>
                 ${savedRemovalsHtml}
                 <li style="padding: 10px; background: #e6f7ff; font-weight: bold; color: #007bff; border-top: 1px solid #cceeff; border-bottom: 1px solid #cceeff;">🖼️ Iframe 永久移除记录 (${getIframeRemovals().length})</li>
                 ${iframeRemovalsHtml}
             `;
                tabSaved.innerHTML = `记录管理 (${totalSaved})`;
            }

            function switchTab(currentTab) {
                // Reset all tabs/content
                [tabCurrent, tabIframe, tabSaved].forEach(btn => btn.style.background = '#f0f0f0');
                [contentCurrent, contentIframe, contentSaved].forEach(cont => cont.style.display = 'none');

                if (currentTab === 'current') {
                    tabCurrent.style.background = '#fff';
                    contentCurrent.style.display = 'block';
                } else if (currentTab === 'iframe') {
                    tabIframe.style.background = '#fff';
                    contentIframe.style.display = 'block';
                } else { // saved
                    tabSaved.style.background = '#fff';
                    contentSaved.style.display = 'block';
                    updateSavedListContent();
                }
            }
            tabCurrent.onclick = () => switchTab('current');
            tabIframe.onclick = () => switchTab('iframe');
            tabSaved.onclick = () => switchTab('saved');
            // Initial tab state:
            switchTab('current');


            blacklistToggle.onclick = () => {
                const shouldAdd = !isBlacklisted;
                if (togglePageBlacklist(shouldAdd)) {
                    statusBar.textContent = shouldAdd
                        ? '🛡️ 已标记当前页面为黑名单。请刷新页面使**严格沙箱**策略生效。'
                        : '✅ 已取消标记。请刷新页面以恢复**默认不沙箱**策略。';
                } else {
                    statusBar.textContent = shouldAdd
                        ? '⚠️ 标记失败：当前页面已在黑名单中。'
                        : '⚠️ 取消标记失败：当前页面不在黑名单中。';
                }

                isBlacklisted = isCurrentPageBlacklisted();
                blacklistToggle.style.background = isBlacklisted ? '#dc3545' : '#007bff';
                blacklistToggle.textContent = isBlacklisted ? '🛡️ 当前为黑名单页 (启用严格沙箱)' : '➕ 标记为黑名单页 (启用严格沙箱)';
            };

            let isSelectionMode = false;
            let currentHoverElement = null;
            let lastHighlightedElement = null;

            const handleSelectionClick = (e) => {
                const target = e.target;
                if (isSelectionMode && target === selectorToggle) {
                    e.stopPropagation();
                    e.preventDefault();
                    toggleSelectionMode(false);
                    return;
                }

                if (target.closest(`#${containerId}`)) {
                    e.stopPropagation();
                    return;
                }

                e.preventDefault();
                e.stopPropagation();

                if (target.tagName === 'HTML' || target.tagName === 'BODY') {
                    statusBar.textContent = "不能屏蔽整个页面，请选择具体元素。";
                    toggleSelectionMode(false);
                    return;
                }

                const xpath = getElementXPath(target);
                if (xpath) {
                    // 使用普通元素移除记录
                    saveRemovalChoice(xpath);
                } else {
                    statusBar.textContent = "无法获取该元素的唯一路径，屏蔽失败。";
                    toggleSelectionMode(false);
                    return;
                }

                target.remove();

                statusBar.textContent = `🎉 已永久屏蔽元素: ${target.tagName}。请刷新页面查看效果。`;
                updateSavedListContent();

                toggleSelectionMode(false);
            };

            const handleSelectionMouseMove = (e) => {
                const target = e.target;
                if (target.closest(`#${containerId}`) || target.tagName === 'HTML' || target.tagName === 'BODY') {
                    if (currentHoverElement) {
                        currentHoverElement.style.outline = '';
                        currentHoverElement = null;
                    }
                    return;
                }

                if (currentHoverElement && currentHoverElement !== target) {
                    currentHoverElement.style.outline = '';
                }

                if (currentHoverElement !== target) {
                    currentHoverElement = target;
                    currentHoverElement.style.outline = '2px dashed orange';
                }
            };

            function toggleSelectionMode(forceState) {
                isSelectionMode = (forceState !== undefined) ? forceState : !isSelectionMode;

                targetDocs.forEach(doc => {
                    if (isSelectionMode) {
                        doc.addEventListener('click', handleSelectionClick, true);
                        doc.addEventListener('mousemove', handleSelectionMouseMove);
                    } else {
                        doc.removeEventListener('click', handleSelectionClick, true);
                        doc.removeEventListener('mousemove', handleSelectionMouseMove);
                    }
                });

                if (isSelectionMode) {
                    selectorToggle.textContent = '❌ 退出屏蔽模式';
                    selectorToggle.style.background = '#dc3545';
                    statusBar.textContent = '🖱️ 选择模式已启用：请点击需要屏蔽的元素。';
                    mainContainer.style.cursor = 'default';

                    if (localStorage.getItem('gemini_debug_element_click_mode') == 'true') { // 如果元素点击调试模式开启，必须关掉
                        document.getElementById('debug-click-toggle').click()
                    }

                } else {
                    if (currentHoverElement) {
                        currentHoverElement.style.outline = '';
                        currentHoverElement = null;
                    }
                    selectorToggle.textContent = '🖱️ 启用选择并屏蔽模式';
                    selectorToggle.style.background = '#007bff';
                    statusBar.textContent = '选择模式已禁用。';
                }
            }

            selectorToggle.onclick = () => toggleSelectionMode();


            debugClickToggle.onclick = () => {
                isDebuggingElementClick = !isDebuggingElementClick;

                localStorage.setItem(DEBUG_CLICK_KEY, isDebuggingElementClick ? 'true' : 'false');

                // V26.39.3 NEW: 处理用户覆盖逻辑
                const isHostInDebugList = DEBUG_WEBLIST.some(domain => getCurrentHost().includes(domain));
                if (isHostInDebugList) {
                    if (isDebuggingElementClick) {
                        // 如果在调试域名列表内，且用户手动开启，则移除覆盖记录
                        toggleDebugOverride(false);
                    } else {
                        // 如果在调试域名列表内，且用户手动关闭，则添加覆盖记录
                        toggleDebugOverride(true);
                    }
                }

                // 更新 UI 和状态栏
                if (isDebuggingElementClick) {
                    debugClickToggle.style.background = '#00c853';
                    debugClickToggle.style.color = 'white';
                    debugClickToggle.textContent = '🛠️ 元素点击调试 (开)';
                    statusBar.textContent = '✅ 元素点击拦截已开启，**立即生效**。请点击可疑按钮。';
                } else {
                    debugClickToggle.style.background = '#ffc107';
                    debugClickToggle.style.color = '#333';
                    debugClickToggle.textContent = '🛠️ 元素点击调试 (关)';
                    statusBar.textContent = '❌ 元素点击拦截已关闭，**立即生效**。';
                }
                statusBar.textContent += "（💡 建议：切换模式后刷新页面，以确保 Iframe 和 Hook 状态完全同步）";
            };

            debugLocationToggle.onclick = () => {
                isDebuggingLocationHooks = !isDebuggingLocationHooks;

                localStorage.setItem(DEBUG_LOCATION_KEY, isDebuggingLocationHooks ? 'true' : 'false');

                // V26.39.3 NEW: 处理用户覆盖逻辑
                const isHostInDebugList = DEBUG_WEBLIST.some(domain => getCurrentHost().includes(domain));
                if (isHostInDebugList) {
                    if (isDebuggingLocationHooks) {
                        // 如果在调试域名列表内，且用户手动开启，则移除覆盖记录
                        toggleDebugOverride(false);
                    } else {
                        // 如果在调试域名列表内，且用户手动关闭，则添加覆盖记录
                        toggleDebugOverride(true);
                    }
                }


                if (isDebuggingLocationHooks) {
                    debugLocationToggle.style.background = '#00c853';
                    debugLocationToggle.style.color = 'white';
                    debugLocationToggle.textContent = '⚙️ JS 重定向调试 (开)';
                    statusBar.textContent = '⚠️ JS Hook 模式已开启。**必须刷新页面**才能启用**同步中断**捕获。';
                } else {
                    debugLocationToggle.style.background = '#ffc107';
                    debugLocationToggle.style.color = '#333';
                    debugLocationToggle.textContent = '⚙️ JS 重定向调试 (关)';
                    statusBar.textContent = 'JS 重定向调试已关闭。**必须刷新页面**才能解除 Hook。';
                }
            };


            list.addEventListener('click', (e) => {
                let listItem = e.target.closest('li');
                if (!listItem) return;

                const xpath = listItem.getAttribute('data-xpath');
                const elementEntry = zeroOpacityElements.find(i => i.xpath === xpath);
                if (!elementEntry) return;
                const element = elementEntry.element;

                if (e.target.classList.contains('remove-btn')) {
                    if (element && element.parentNode) {
                        // 使用普通元素移除记录
                        saveRemovalChoice(xpath);

                        if (lastHighlightedElement) {
                            lastHighlightedElement.style.border = '';
                        }

                        element.remove();
                        listItem.remove();
                        statusBar.textContent = `✅ 元素 ${elementEntry.tagName} 已永久移除并保存。`;
                        updateSavedListContent();
                    }
                    return;
                }

                if (e.target.closest('.element-info')) {
                    if (lastHighlightedElement) {
                        lastHighlightedElement.style.border = '';
                    }

                    element.style.border = '2px solid red';
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });

                    lastHighlightedElement = element;
                    statusBar.textContent = `选中元素: [${elementEntry.document === document ? '主页' : 'Iframe'}] ${elementEntry.tagName} (${elementEntry.width}x${elementEntry.height}px)`;
                }
            });

            // V26.38: Iframe list listener
            iframeList.addEventListener('click', (e) => {
                let listItem = e.target.closest('li');
                if (!listItem) return;

                const xpath = listItem.getAttribute('data-xpath');
                const elementEntry = allIframes.find(i => i.xpath === xpath);
                if (!elementEntry) return;
                const element = elementEntry.element;

                if (e.target.classList.contains('remove-iframe-btn')) {
                    if (element && element.parentNode) {
                        // V26.39 NEW: 使用 Iframe 专用移除记录
                        saveIframeRemovalChoice(xpath);

                        if (lastHighlightedElement) {
                            lastHighlightedElement.style.border = '';
                        }

                        element.remove();
                        listItem.remove();
                        // Update tab counter
                        tabIframe.textContent = `当前 Iframe 记录 (${document.querySelectorAll('iframe').length})`;
                        statusBar.textContent = `✅ Iframe 元素已永久移除并保存。请刷新页面查看效果。`;
                        updateSavedListContent();
                    }
                    return;
                }

                if (e.target.closest('.iframe-info')) {
                    if (lastHighlightedElement) {
                        lastHighlightedElement.style.border = '';
                    }
                    // Use a noticeable border color for iframes
                    element.style.border = '3px solid #dc3545';
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });

                    lastHighlightedElement = element;
                    statusBar.textContent = `选中 Iframe: ${elementEntry.isCrossDomain ? '跨域' : '同源'} | Src: ${safeTruncate(elementEntry.src, 50)}`;
                }
            });


            savedList.addEventListener('click', (e) => {
                // 取消普通元素移除记录
                if (e.target.classList.contains('undo-btn')) {
                    const xpath = e.target.getAttribute('data-xpath');
                    if (removeRemovalChoice(xpath)) {
                        statusBar.textContent = `🚫 元素移除记录已取消。请刷新页面以恢复元素。`;
                        updateSavedListContent();
                    }
                }

                // V26.39 NEW: 取消 Iframe 移除记录
                if (e.target.classList.contains('undo-iframe-btn')) {
                    const xpath = e.target.getAttribute('data-xpath');
                    if (removeIframeRemovalChoice(xpath)) {
                        statusBar.textContent = `🚫 Iframe 移除记录已取消。请刷新页面以恢复 Iframe。`;
                        updateSavedListContent();
                    }
                }


                if (e.target.classList.contains('remove-blacklist-btn')) {
                    const pageKey = e.target.getAttribute('data-page-key');
                    if (togglePageBlacklist(false, pageKey)) {
                        if (pageKey === getCurrentPageKey()) {
                            isBlacklisted = false;
                            blacklistToggle.style.background = '#007bff';
                            blacklistToggle.textContent = '➕ 标记为黑名单页 (启用严格沙箱)';
                        }
                        statusBar.textContent = `✅ 已移除黑名单 ${safeTruncate(pageKey, 15)}。请刷新页面。`;
                        updateSavedListContent();
                    }
                }
            });

            // --- 拖拽逻辑 (保持不变) ---
            let isDragging = false;
            let dragStartX = 0;
            let dragStartY = 0;
            let containerOffsetX = 0;
            let containerOffsetY = 0;

            function getEventXY(e) {
                if (e.touches && e.touches.length > 0) {
                    return { x: e.touches[0].clientX, y: e.touches[0].clientY };
                }
                return { x: e.clientX, y: e.clientY };
            }

            function getTranslateXY(element) {
                const style = window.getComputedStyle(element);
                const transform = style.transform || style.webkitTransform || style.mozTransform;

                let mat = transform.match(/^matrix3d\((.+)\)$/);
                if (mat) {
                    const values = mat[1].split(', ');
                    return { x: parseFloat(values[12]) || 0, y: parseFloat(values[13]) || 0 };
                }

                mat = transform.match(/^matrix\((.+)\)$/);
                if (mat) {
                    const values = mat[1].split(', ');
                    return { x: parseFloat(values[4]) || 0, y: parseFloat(values[5]) || 0 };
                }
                return { x: 0, y: 0 };
            }

            function isDragTarget(target) {
                if (isSelectionMode) return false;

                if (target === mainContainer) return true;

                if (target.closest(`#${windowId}`)) {
                    const dragTargets = target.closest('#gemini-header, #gemini-status-bar, .gemini-tip-text');

                    if (dragTargets && !target.closest('button, span[id$="close-btn"], a')) {
                        return true;
                    }
                }

                return false;
            }

            const dragStart = (e) => {
                if (!isDragTarget(e.target)) { return; }

                isDragging = true;
                e.preventDefault();

                const { x, y } = getEventXY(e);

                const currentTranslate = getTranslateXY(mainContainer);
                containerOffsetX = currentTranslate.x;
                containerOffsetY = currentTranslate.y;

                dragStartX = x;
                dragStartY = y;
            };

            const dragMove = (e) => {
                if (!isDragging) return;
                e.preventDefault();

                const { x, y } = getEventXY(e);

                const dx = x - dragStartX;
                const dy = y - dragStartY;

                const newX = containerOffsetX + dx;
                const newY = containerOffsetY + dy;

                mainContainer.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
            };

            const dragEnd = () => {
                isDragging = false;
            };

            mainContainer.addEventListener('mousedown', dragStart);
            document.addEventListener('mousemove', dragMove);
            document.addEventListener('mouseup', dragEnd);

            mainContainer.addEventListener('touchstart', dragStart);
            document.addEventListener('touchmove', dragMove);
            document.addEventListener('touchend', dragEnd);

        }


        // =================================================================
        // 元素点击过滤/调试函数 (V26.39.7 更新 - 拦截 mousedown/touchstart)
        // =================================================================

        const AD_DOMAINS = [
            'ad.twinrdengine.com',
            'adtrack.',
            'popads.',
            'clickdealer.',
            'a-ads.',
            'adcash.',
            'popunder.',
            'exoclick.',
            'adnetwork.',
        ];
        const ALLOW_ONCE_ATTRIBUTE = 'data-gemini-allow';

        function applyClickDebugFilter(doc) {
            if (!doc || doc.gemini_click_debug_listener_attached) {
                return;
            }

            const eventListenerFunction = async (e) => {
                const targetElement = e.target;

                // V26.39.7 新增：只拦截 click, mousedown, touchstart
                if (e.type !== 'click' && e.type !== 'mousedown' && e.type !== 'touchstart') {
                    return;
                }

                // 注意：closest() 方法只会查找祖先元素，所以最好使用 id 匹配。
                if (doc.defaultView === window && targetElement.closest('[id*="gemini"], #ellCloseX, #dh_buttonContainer, #dh_pageContainer')) {
                    return; // 排除逻辑
                }

                const isLink = targetElement.closest('a');
                const href = isLink ? isLink.href : '';
                const opensNewTab = isLink ? isLink.target === '_blank' : false;
                const isAdLink = AD_DOMAINS.some(domain => href.includes(domain));

                const currentIsDebuggingElementClick = localStorage.getItem(DEBUG_CLICK_KEY) === 'true';
                let shouldIntercept = isAdLink || (opensNewTab && href && href !== '#') || currentIsDebuggingElementClick;

                if (shouldIntercept && targetElement.tagName !== 'HTML' && targetElement.tagName !== 'BODY') {

                    if (targetElement.hasAttribute(ALLOW_ONCE_ATTRIBUTE)) {
                        targetElement.removeAttribute(ALLOW_ONCE_ATTRIBUTE);
                        console.log(`[Gemini屏蔽 V26.39.7] ➡️ 临时放行标记生效，允许原始事件继续。`);
                        return;
                    }

                    // ⚠️ 核心修复：在 mousedown/touchstart 阶段就阻止传播，防止异步重定向
                    e.preventDefault();
                    e.stopImmediatePropagation();

                    // 只有在 Click 事件时才弹窗，避免 mousedown/touchstart 频繁弹窗
                    if (e.type !== 'click') {
                        console.log(`[Gemini屏蔽 V26.39.7] 🛡️ ${e.type} 已被阻止，等待 Click 事件触发调试模态框...`);
                        return;
                    }

                    const xpath = getElementXPath(targetElement);
                    // 🚀 V26.39.4 新增：获取 TagName 和 CSS Selector
                    const tagName = targetElement.tagName;
                    const cssSelector = getElementCssSelector(targetElement);

                    let message = `此元素点击已被调试模式捕获。请选择操作：`;

                    // ⬇️ V26.39.6 增强信息
                    const rect = targetElement.getBoundingClientRect();
                    const computedStyle = targetElement.ownerDocument.defaultView.getComputedStyle(targetElement);
                    const parentElement = targetElement.parentElement;
                    const parentInfo = parentElement
                        ? `${parentElement.tagName}#${parentElement.id || ''}.${parentElement.className.split(' ')[0] || ''}`
                        : '[无父级]';
                    // 检查主要的内联事件处理器
                    const inlineClick = targetElement.getAttribute('onclick') ||
                        targetElement.getAttribute('onmousedown') ||
                        targetElement.getAttribute('onmouseup') ||
                        targetElement.getAttribute('onpointerdown');


                    const elementInfo = {
                        href: href || '[非链接元素]',
                        tagName: tagName,
                        cssSelector: cssSelector,
                        // V26.39.6 增强信息
                        width: rect.width.toFixed(0),
                        height: rect.height.toFixed(0),
                        zIndex: computedStyle.zIndex,
                        opacity: computedStyle.opacity,
                        position: computedStyle.position,
                        parent: parentInfo,
                        inlineClick: inlineClick,
                    };


                    const confirmBlock = await showCustomConfirm(
                        message,
                        elementInfo, // <-- Pass the elementInfo object (V26.39.6)
                        xpath || "XPath 获取失败"
                    );

                    if (confirmBlock) {
                        if (xpath && targetElement.parentNode) {
                            // Element Click Debugging is for general elements (not Iframes)
                            if (targetElement.tagName === 'IFRAME') {
                                saveIframeRemovalChoice(xpath);
                                console.log("✅ Iframe 已永久屏蔽，请刷新页面。");
                            } else {
                                saveRemovalChoice(xpath);
                                console.log("✅ 元素已永久屏蔽，请刷新页面。");
                            }
                            targetElement.remove();
                        } else {
                            console.error('❌ 屏蔽失败：XPath 获取失败，无法进行永久屏蔽。');
                        }
                    } else {
                        targetElement.setAttribute(ALLOW_ONCE_ATTRIBUTE, 'true');
                        console.log("🚫 已取消永久屏蔽。请**再次点击**此元素，点击将在第二次被放行。");
                    }
                    return;
                }
            };

            // ⭐️ V26.39.7 核心修复：Hook 早期事件以阻止异步调度
            doc.addEventListener('click', eventListenerFunction, true);
            //doc.addEventListener('mousedown', eventListenerFunction, true); 
            //doc.addEventListener('touchstart', eventListenerFunction, true); 

            doc.gemini_click_debug_listener_attached = true;

            let logMessage = `[Gemini屏蔽 V26.39.7] 元素点击调试监听器已附加到 `;

            const isTopWindow = window === window.top;

            if (doc === document) {

                if (isTopWindow) {
                    logMessage += `主页 (Top Document)。`;
                } else {
                    let iframeSrc = doc.URL || '[无法获取 URL]';
                    const displaySrc = safeTruncate(iframeSrc, 77);
                    logMessage += `Iframe 文档 (自身上下文)。Src: ${displaySrc}`;
                }
            } else {
                let iframeSrc = '[无法获取 src]';
                let iframeElement = null;

                try {
                    iframeElement = doc.defaultView ? doc.defaultView.frameElement : null;
                } catch (e) {
                }

                if (iframeElement && iframeElement.tagName === 'IFRAME') {
                    iframeSrc = iframeElement.src || '[无 src 属性]';
                } else if (doc.URL) {
                    iframeSrc = doc.URL;
                }

                const displaySrc = safeTruncate(iframeSrc, 77);
                logMessage += `Iframe 文档 (主页检测)。Src: ${displaySrc}`;
            }

            console.log(logMessage);
        }

        function setupAdLinkFilter() {
            const targetDocuments = getTargetDocuments();
            targetDocuments.forEach(doc => {
                applyClickDebugFilter(doc);
            });
            console.log('[Gemini屏蔽] 元素点击过滤/调试功能已协调完成 (V26.39.7 Modified)。');
        }


        // =================================================================
        // 核心启动函数 
        // =================================================================
        function initScript() {

            const currentHost = getCurrentHost();
            const isHostInDebugList = DEBUG_WEBLIST.some(domain => currentHost.includes(domain));

            // 1. 读取用户自定义的调试状态
            let clickDebugState = localStorage.getItem(DEBUG_CLICK_KEY) === 'true';
            let locationDebugState = localStorage.getItem(DEBUG_LOCATION_KEY) === 'true';

            // 2. V26.39.3 核心逻辑：判断是否在调试列表中 且 没有被用户覆盖
            if (isHostInDebugList) {
                const isOverridden = isCurrentHostOverridden();

                if (!isOverridden) {
                    // 如果在调试列表中，且用户从未手动关闭过（即没有覆盖记录）
                    clickDebugState = true;
                    locationDebugState = true;
                    localStorage.setItem(DEBUG_CLICK_KEY, 'true');
                    localStorage.setItem(DEBUG_LOCATION_KEY, 'true');
                    console.log(`[Gemini屏蔽 V26.39.10] 🎯 域名 ${currentHost} 匹配调试列表，强制开启调试模式。`);
                } else {
                    // 存在覆盖记录，保留用户上次设置的状态（即 clickDebugState/locationDebugState 保持为从 localStorage 读取的值，可能是 false）
                    console.log(`[Gemini屏蔽 V26.39.10] ⚠️ 域名 ${currentHost} 匹配调试列表，但因存在用户覆盖记录，本次不自动开启。`);
                }
            }

            // 3. 将最终确定的状态赋值给全局变量
            isDebuggingElementClick = clickDebugState;
            isDebuggingLocationHooks = locationDebugState;


            injectStyles(containerId, windowId);

            blockMetaRefresh(document);

            const targetDocuments = getTargetDocuments();

            enableWindowOpenHook();
            interceptWindowLocation();

            // ⬇️⬇️⬇️ Hook 所有重定向相关 API (V26.39.10 核心：同步中断) ⬇️⬇️⬇️

            // 1. Hook History API
            interceptHistoryAPI(window, 'window');
            if (window.parent !== window) { interceptHistoryAPI(window.parent, 'parent'); }
            if (window.top !== window) { interceptHistoryAPI(window.top, 'top'); }

            // 2. Hook Form 表单提交
            interceptFormSubmission();

            // 3. Hook document.write
            interceptDocumentWrite();

            // ⭐️ 4. Hook Element.prototype.click (程序化点击拦截 - V26.39.10 NEW)
            interceptElementClick();

            // ⭐️ 5. Hook window.postMessage (跨框架侧信道拦截 - V26.39.10 NEW)
            interceptPostMessage();

            // ⬆️⬆️⬆️ Hook 所有重定向相关 API ⬆️⬆️⬆️

            setupAdLinkFilter(); // 元素点击调试监听器放在这里

            targetDocuments.forEach(doc => {
                loadAndRemoveSavedElements(doc);
            });

            if (window === window.top) {
                observeDynamicIframes();
            }

            // 4. 根据最终状态决定是否自动打开浮窗
            if (isDebuggingElementClick || isDebuggingLocationHooks) {
                if (!document.getElementById(containerId)) {

                    const activationSource = isHostInDebugList && !isCurrentHostOverridden() ? '域名匹配（自动）' : '本地存储（手动开启）';
                    console.log(`[Gemini屏蔽 V26.39.10] 🎯 调试模式已开启 (${activationSource})，自动打开浮窗。`);

                    // 由于 targetDocuments 已经在前面获取，这里直接使用
                    renderFloatWindow(targetDocuments);

                    // 仅当 body_build 存在时调用（兼容其他环境）
                    if (typeof body_build === 'function') {
                        try { body_build('false'); } catch (e) { }
                    }
                }
            }


            document.addEventListener('click', (e) => {
                const target = e.target;
                if (target.id === 'tmyszzq') {
                    e.preventDefault();
                    e.stopPropagation();

                    if (!document.getElementById(containerId)) {
                        const updatedTargetDocuments = getTargetDocuments();
                        renderFloatWindow(updatedTargetDocuments);
                        if (typeof body_build === 'function') {
                            try { body_build('false'); } catch (e) { }
                        }
                    }
                }
            }, true);

            console.log(`[Gemini屏蔽] 脚本已初始化 (V26.39.10)。当前页面在黑名单中: ${isCurrentPageBlacklisted() ? '是' : '否'}。`);
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initScript);
        } else {
            initScript();
        }
    })();

    // 元素屏蔽器 END


    // 视频广告加速跳过 Start

    (function () {
        // ----------------------------------------------------
        // 局部配置变量
        // ----------------------------------------------------
        const CFG_BUTTON_ID = 'adsSkip';
        const CFG_STATUS_SPAN_ID = 'toggle_status_text';
        const CFG_STORAGE_KEY = 'AutoSkip_Enabled_State';

        // CSS 状态 Class
        const CLASS_ENABLED = 'ads_skip_on';
        const CLASS_DISABLED = 'ads_skip_off';

        // 样式配置
        const COLOR_BG_ON = '#4CAF50';        // 开启：绿色
        const COLOR_BG_OFF = '#F44336';       // 关闭：红色
        const COLOR_TEXT_ON = '#ffffff';
        const COLOR_TEXT_OFF = '#333333';
        const COLOR_BG_STATUS_ON = 'rgba(255, 255, 255, 0.2)';
        const COLOR_BG_STATUS_OFF = 'rgba(0, 0, 0, 0.1)';

        // --- CSS 注入函数 (覆盖所有原有样式) ---
        function injectStyles() {
            const css = `
            /* 全局重置和基础样式：控制按钮的尺寸、布局、字体 */
            #${CFG_BUTTON_ID} {
                /* 核心尺寸和布局 */
                all: initial !important; 
                box-sizing: border-box !important;
                display: flex !important;
                /*flex-direction: column !important;*/
                align-items: center !important;
                justify-content: center !important; 
                width: 100px !important;
                height: 40px !important; 
                padding: 6px 0px !important;

                /* 字体和外观 */
                font-family: inherit !important; 
                font-size: 13px !important;
                font-weight: bold !important;
                color: ${COLOR_TEXT_ON} !important; 
                border: none !important;
                border-radius: 6px !important;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px !important;
                cursor: pointer !important;
                transition: background-color 0.3s, box-shadow 0.3s !important;
            }

            /* 状态 Span 基础样式 */
            #${CFG_BUTTON_ID} #${CFG_STATUS_SPAN_ID} {
                all: unset !important;
                box-sizing: border-box !important;
                margin-top: 2px !important; 
                line-height: 1 !important;
                font-size: 10px !important; 
                font-weight: 600 !important;
                border-radius: 3px !important;
                padding: 1px 4px !important;
            }

            /* --- 状态：开启 (绿色) --- */
            #${CFG_BUTTON_ID}.${CLASS_ENABLED} {
                background: ${COLOR_BG_ON} !important;
            }
            #${CFG_BUTTON_ID}.${CLASS_ENABLED} #${CFG_STATUS_SPAN_ID} {
                background-color: ${COLOR_BG_STATUS_ON} !important;
                color: ${COLOR_TEXT_ON} !important;
            }
            
            /* --- 状态：关闭 (红色) --- */
            #${CFG_BUTTON_ID}.${CLASS_DISABLED} {
                background: ${COLOR_BG_OFF} !important;
            }
            #${CFG_BUTTON_ID}.${CLASS_DISABLED} #${CFG_STATUS_SPAN_ID} {
                background-color: ${COLOR_BG_STATUS_OFF} !important;
                color: ${COLOR_TEXT_OFF} !important;
            }
        `;

            const style = document.createElement('style');
            style.type = 'text/css';
            style.textContent = css;
            document.head.appendChild(style);
            console.log('✅ [Init] 状态切换和基础 CSS 已通过 <style> 标签注入。');
        }

        // --- 状态和功能函数 (保持不变) ---
        function isAutoSkipEnabled() {
            return localStorage.getItem(CFG_STORAGE_KEY) === 'true';
        }

        function setAutoSkipState(enabled) {
            localStorage.setItem(CFG_STORAGE_KEY, enabled ? 'true' : 'false');
        }

        window.executeSkipFunction = function executeSkipFunction() {
            // 这是唯一与全局环境交互的地方
            if (typeof window.videoAds_accelerateSkip === 'function') {
                window.videoAds_accelerateSkip('0.01');

                console.log('✅ [Skip] videoAds_accelerateSkip("0.2") 已执行。');
            } else {
                console.warn('⚠️ [Skip] videoAds_accelerateSkip 函数未在全局找到。');
            }
        }

        // --- 样式更新函数 (通过 Class 切换样式) ---
        function updateToggleButton(button, statusSpan, isEnabled) {
            if (!button || !statusSpan) return;

            if (isEnabled) {
                button.classList.add(CLASS_ENABLED);
                button.classList.remove(CLASS_DISABLED);
            } else {
                button.classList.add(CLASS_DISABLED);
                button.classList.remove(CLASS_ENABLED);
            }

            statusSpan.textContent = isEnabled ? '开启' : '关闭';
            button.title = isEnabled ? '自动跳过广告已开启 (点击关闭)' : '自动跳过广告已关闭 (点击开启)';

            console.log(`[UI] 按钮状态已切换 Class 为：${isEnabled ? CLASS_ENABLED : CLASS_DISABLED}`);
        }

        // --- 初始化和绑定逻辑 ---
        function initialize() {
            // 1. 注入 CSS 样式表 (必须先执行)
            injectStyles();

            let button = document.getElementById(CFG_BUTTON_ID);
            let statusSpan = document.getElementById(CFG_STATUS_SPAN_ID);

            if (!button || !statusSpan) {
                console.error('❌ [Init] 致命错误：未找到按钮或状态 Span 元素。');
                return;
            }

            // 2. 事件清除修复：克隆按钮以清除所有旧事件监听器
            const oldButton = button;
            button = oldButton.cloneNode(true);
            if (oldButton.parentNode) {
                oldButton.parentNode.replaceChild(button, oldButton);
            }
            statusSpan = button.querySelector(`#${CFG_STATUS_SPAN_ID}`);

            const isEnabled = isAutoSkipEnabled();

            // 3. 同步初始状态和外观 (通过 Class)
            updateToggleButton(button, statusSpan, isEnabled);
            console.log(`[Init] 按钮 #${CFG_BUTTON_ID} 初始化完成。状态: ${isEnabled ? '开启' : '关闭'}。`);

            // 4. 自动执行 (仅在持久化状态为开启时)
            if (isEnabled) {
                executeSkipFunction();
            }

            // 5. 绑定新的点击事件
            button.addEventListener('click', function () {
                const currentState = isAutoSkipEnabled();
                const newState = !currentState;

                setAutoSkipState(newState);
                updateToggleButton(button, statusSpan, newState);

                // 核心逻辑：如果切换到开启状态，则立即执行函数
                if (newState) {
                    executeSkipFunction();
                }
            });

            console.log(`✅ [Init] 按钮点击监听器已绑定。`);
        }

        // 确保 DOM 加载后再执行
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initialize);
        } else {
            initialize();
        }
    })();

    // 视频广告加速跳过 END

})(); // 立即执行这个函数








/**
 * WebDebugger.js 开始 START
 * * 独立函数：Web 存储调试器 (Cookies/Local/Session/Config)
 * * 描述: 创建一个悬浮可拖拽的面板，用于实时查看和编辑 Cookie, LocalStorage, SessionStorage，
 * 并提取内嵌的 JSON 配置数据。
 * * 调用方法: 
 * 1. 引入文件: <script src="path/to/WebDebugger.js"></script>
 * 2. 执行: window.initWebDebugger();
 */


/**
 * WebDebugger.js
 * * 独立函数：Web 存储调试器 (Cookies/Local/Session/Config)
 * * 描述: 创建一个悬浮可拖拽的面板，用于实时查看和编辑 Cookie, LocalStorage, SessionStorage，
 * 并提取内嵌的 JSON 配置数据。
 * * 调用方法: 
 * 1. 引入文件: <script src="path/to/WebDebugger.js"></script>
 * 2. 执行: window.initWebDebugger(); (手动显示)
 * * 修复: 自动检查 localStorage 中的固定状态，如果已固定则自动显示面板。
 */

(function () {
    'use strict';

    // --- 固定功能常量和状态管理 ---
    const PIN_KEY = 'webDebuggerPinned';

    /**
     * 获取固定状态 (默认为 true，即显示)
     */
    function getPinState() {
        // 在浏览器环境中，直接使用 localStorage
        const state = localStorage.getItem(PIN_KEY);
        // 默认首次加载为 true，即显示
        return state === null ? true : state === 'true';
    }

    /**
     * 核心渲染和面板创建函数
     */
    function showDebuggerPanel() {
        if (typeof body_build == 'function') {
            body_build('false')
        }
        // 如果面板已存在，则刷新内容并退出
        if (document.getElementById('storage-control-panel')) {
            if (window.__debugRender) {
                window.__debugRender();
            }
            return;
        }

        // --- 样式定义 ---
        const panelStyle = `
            #storage-control-panel {
                position: fixed !important; 
                top: 10px;    
                right: 10px;  
                width: 400px !important; 
                max-width: 95vw !important;
                height: 500px !important;
                max-height: 95vh !important;
                overflow: hidden !important; 
                background-color: #ffffff !important;
                border: 1px solid #e0e0e0 !important; 
                border-radius: 12px !important;
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1) !important;
                z-index: 99999 !important;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
                font-size: 13px !important;
                color: #333 !important;
                resize: both !important;
                min-width: 300px !important;
                display: flex !important;
                flex-direction: column !important; 
            }
            /* H3 - 主标题样式固定 */
            #storage-control-panel h3 {
                flex-shrink: 0 !important;
                margin: 0 !important;
                padding: 12px 15px !important;
                background-color: #f7f7f7 !important;
                border-bottom: 1px solid #e0e0e0 !important;
                cursor: grab !important;
                user-select: none !important;
                display: flex !important;
                justify-content: space-between !important;
                align-items: center !important;
                font-size: 15px !important;
                font-weight: 600 !important;
                color: #333 !important; /* 固定颜色 */
                border-radius: 12px 12px 0 0 !important;
                z-index: 2 !important; 
            }
            #storage-control-panel .header-controls {
                display: flex !important;
                align-items: center !important;
                gap: 10px !important; 
            }
            #storage-control-panel button.close-btn,
            #storage-control-panel button.pin-btn {
                background: none !important;
                border: none !important;
                font-size: 20px !important; 
                line-height: 1 !important;
                cursor: pointer !important;
                color: #888 !important; /* 固定颜色 */
                padding: 0 !important;
                transition: color 0.2s !important;
            }
            #storage-control-panel button.pin-btn.pinned {
                color: #007bff !important; 
            }
            #storage-control-panel .content {
                flex-grow: 1 !important; 
                padding: 10px !important;
                display: flex !important; 
                flex-direction: column !important; 
                gap: 0 !important;
                overflow-y: auto !important; 
            }
            #storage-control-panel .section {
                flex-shrink: 0 !important; 
                margin-bottom: 15px !important;
                padding: 0 5px !important;
                border-bottom: 1px solid #f0f0f0 !important; 
                display: flex !important;
                flex-direction: column !important;
                overflow: visible !important; 
            }
            #storage-control-panel .section:last-child {
                border-bottom: none !important;
                margin-bottom: 0 !important;
            }
            /* H4 - 分区标题样式固定 */
            #storage-control-panel h4 {
                position: sticky !important;
                top: -12px !important; 
                z-index: 1 !important; 
                margin: 0 !important; 
                padding: 10px 0 5px 0 !important; 
                background-color: #ffffff !important;
                border-bottom: 2px solid #007bff !important;
                font-size: 14px !important;
                font-weight: bold !important;
                color: #007bff !important; /* 固定颜色 */
            }
            #storage-control-panel .data-list-wrapper {
                flex-grow: 1 !important; 
                overflow-y: visible !important; 
                padding-right: 0 !important; 
            }
            #storage-control-panel .storage-item {
                display: grid !important;
                grid-template-areas: 
                    "key key"
                    "value actions" !important;
                grid-template-columns: 1fr 64px !important; 
                gap: 5px !important;
                padding: 8px 0 !important;
                border-bottom: 1px dotted #e0e0e0 !important;
                align-items: center !important;
            }
            #storage-control-panel .json-display {
                padding: 10px !important;
                background-color: #f8f8f8 !important;
                border: 1px solid #eee !important;
                border-radius: 6px !important;
                font-family: Consolas, Monaco, 'Courier New', monospace !important;
                font-size: 12px !important;
                white-space: pre-wrap !important; 
                word-wrap: break-word !important; 
                max-height: 300px !important;
                overflow-y: auto !important;
            }
            #storage-control-panel .json-item {
                margin-bottom: 15px !important;
                padding-bottom: 5px !important;
                border-bottom: 1px dashed #ccc !important;
            }
            #storage-control-panel .json-item:last-child {
                border-bottom: none !important;
                margin-bottom: 0 !important;
            }
            #storage-control-panel .json-title {
                font-weight: bold !important;
                color: #a00 !important;
                margin-bottom: 5px !important;
                display: block !important;
            }
            #storage-control-panel .storage-item:last-child {
                border-bottom: none !important;
            }
            #storage-control-panel .key-label {
                grid-area: key !important; 
                font-weight: 500 !important;
                overflow: hidden !important;
                text-overflow: ellipsis !important;
                white-space: nowrap !important;
                color: #555 !important;
                cursor: pointer !important; 
                text-decoration: underline !important; 
                text-decoration-color: #ccc !important;
            }
            #storage-control-panel input[type="text"] {
                grid-area: value !important; 
                width: 100% !important;
                padding: 6px 8px !important;
                border: 1px solid #ccc !important;
                border-radius: 4px !important;
                box-sizing: border-box !important;
                font-size: 13px !important;
            }
            #storage-control-panel .action-buttons {
                grid-area: actions !important; 
                display: flex !important;
                gap: 4px !important;
                justify-content: flex-end !important;
                flex-shrink: 0 !important; 
            }
            #storage-control-panel button.action-btn {
                width: 30px !important; 
                height: 30px !important;
                padding: 0 !important;
                cursor: pointer !important;
                border: none !important;
                border-radius: 4px !important;
                color: white !important;
                font-size: 14px !important;
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
                transition: background-color 0.2s, transform 0.1s !important;
            }
            #storage-control-panel button.save-btn {
                background-color: #007bff !important;
            }
            #storage-control-panel button.delete-btn {
                background-color: #dc3545 !important; 
            }
            .key-tooltip {
                position: fixed !important; 
                max-width: 400px !important;
                padding: 10px !important;
                background-color: #333 !important;
                color: #fff !important;
                border-radius: 4px !important;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2) !important;
                z-index: 100000 !important;
                font-size: 13px !important;
                line-height: 1.4 !important;
                pointer-events: none !important; 
                opacity: 0 !important;
                transition: opacity 0.2s !important;
            }
            .key-tooltip.visible {
                opacity: 1 !important;
                pointer-events: auto !important;
            }
            @media (max-width: 450px) { 
                #storage-control-panel {
                    width: 100vw !important; 
                    min-width: 100vw !important;
                    height: 100vh !important; 
                    top: 0vh !important;
                    right: 0vw !important;
                    left: 0vw !important;
                    border-radius: 0px !important;
                }
                #storage-control-panel .storage-item {
                    grid-template-columns: 1fr !important;
                    grid-template-areas: 
                        "key"
                        "value"
                        "actions" !important;
                }
                #storage-control-panel .action-buttons {
                    justify-content: flex-start !important;
                    gap: 8px !important; 
                    margin-top: 5px !important;
                }
                #storage-control-panel button.action-btn {
                    width: auto !important; 
                    padding: 5px 10px !important;
                }
            }
        `;

        // --- DOM 结构创建 和 拖拽功能 ---
        const panel = document.createElement('div');
        panel.id = 'storage-control-panel';

        const header = document.createElement('h3');
        header.innerHTML = '⚙️ Web 存储调试器 (Cookies/Local/Session/Config)';

        const controlsContainer = document.createElement('div');
        controlsContainer.className = 'header-controls';

        // 固定按钮逻辑
        let isCurrentlyPinned = getPinState();
        const pinBtn = document.createElement('button');
        pinBtn.className = 'pin-btn';

        const updatePinButtonVisual = () => {
            pinBtn.textContent = isCurrentlyPinned ? '📌' : '📍';
            pinBtn.title = isCurrentlyPinned ? '点击取消固定 (关闭后隐藏)' : '点击固定 (下次刷新页面显示)';
            if (isCurrentlyPinned) {
                pinBtn.classList.add('pinned');
            } else {
                pinBtn.classList.remove('pinned');
            }
        };

        updatePinButtonVisual();

        pinBtn.onclick = () => {
            isCurrentlyPinned = !isCurrentlyPinned;
            localStorage.setItem(PIN_KEY, isCurrentlyPinned.toString());
            updatePinButtonVisual();
        };

        // 关闭按钮逻辑
        const closeBtn = document.createElement('button');
        closeBtn.className = 'close-btn';
        closeBtn.innerHTML = '×';
        closeBtn.title = '关闭调试器';
        closeBtn.onclick = () => {
            if (!isCurrentlyPinned) {
                // 只有在非固定状态下，关闭才意味着下次刷新时不显示
                localStorage.setItem(PIN_KEY, 'false');
            }
            panel.remove();
            document.getElementById('storage-control-style')?.remove();
            document.getElementById('key-tooltip')?.remove();
            document.removeEventListener('click', hideTooltipOutside);
        };

        controlsContainer.appendChild(pinBtn);
        controlsContainer.appendChild(closeBtn);

        header.appendChild(controlsContainer);
        panel.appendChild(header);

        const content = document.createElement('div');
        content.className = 'content';
        panel.appendChild(content);

        // 样式注入
        let style = document.getElementById('storage-control-style');
        if (!style) {
            style = document.createElement('style');
            style.id = 'storage-control-style';
            document.head.appendChild(style);
        }
        style.innerHTML = panelStyle;

        // 确保 body 存在
        if (document.body) {
            document.body.appendChild(panel);
        } else {
            console.error("无法找到 body 元素来插入调试器面板。请确保在 body 加载后调用 initWebDebugger()。");
            return;
        }

        // --- 拖拽功能实现 ---
        let isDragging = false;
        let offsetX, offsetY;

        header.addEventListener('mousedown', (e) => {
            if (window.innerWidth <= 450) return;
            isDragging = true;

            const rect = panel.getBoundingClientRect();

            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;

            panel.style.right = 'auto';
            panel.style.bottom = 'auto';
            panel.style.left = rect.left + 'px';
            panel.style.top = rect.top + 'px';

            panel.style.cursor = 'grabbing';
            e.preventDefault();
            e.stopPropagation();
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;

            let newX = e.clientX - offsetX;
            let newY = e.clientY - offsetY;

            panel.style.left = Math.max(0, Math.min(window.innerWidth - panel.offsetWidth, newX)) + 'px';
            panel.style.top = Math.max(0, Math.min(window.innerHeight - panel.offsetHeight, newY)) + 'px';
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            if (window.innerWidth > 450) {
                panel.style.cursor = 'grab';
            }
        });

        // --- 浮窗逻辑 (保持不变) ---
        let tooltip = document.getElementById('key-tooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.id = 'key-tooltip';
            tooltip.className = 'key-tooltip';
            document.body.appendChild(tooltip);
        }

        const hideTooltipOutside = (e) => {
            if (tooltip.classList.contains('visible') &&
                !tooltip.contains(e.target) &&
                e.target.className !== 'key-label') {
                tooltip.classList.remove('visible');
            }
        };

        document.removeEventListener('click', hideTooltipOutside);
        document.addEventListener('click', hideTooltipOutside);

        function showTooltip(fullText, targetEl) {
            tooltip.textContent = fullText;
            const rect = targetEl.getBoundingClientRect();
            let top = rect.top + rect.height / 2 - 10;
            let left = rect.right + 10;

            if (left + tooltip.offsetWidth > window.innerWidth - 10) {
                left = rect.left;
                top = rect.bottom + 5;
            }

            tooltip.style.top = `${top}px`;
            tooltip.style.left = `${left}px`;
            tooltip.classList.add('visible');
        }

        // --- 核心存储操作函数 (保持不变) ---
        function getCookies() {
            const cookies = document.cookie.split('; ').filter(c => c);
            return cookies.map(cookie => {
                const [key, ...rest] = cookie.split('=');
                return { key: decodeURIComponent(key), value: decodeURIComponent(rest.join('=')) };
            });
        }

        function setCookie(key, value) {
            document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; path=/`;
        }

        function deleteCookie(key) {
            document.cookie = `${encodeURIComponent(key)}=; Max-Age=0; path=/`;
        }

        function getLocalStorage() {
            const items = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                items.push({ key: key, value: localStorage.getItem(key) });
            }
            return items;
        }

        function setLocalStorage(key, value) {
            localStorage.setItem(key, value);
        }

        function deleteLocalStorage(key) {
            localStorage.removeItem(key);
        }

        function getSessionStorage() {
            const items = [];
            for (let i = 0; i < sessionStorage.length; i++) {
                const key = sessionStorage.key(i);
                items.push({ key: key, value: sessionStorage.getItem(key) });
            }
            return items;
        }

        function setSessionStorage(key, value) {
            sessionStorage.setItem(key, value);
        }

        function deleteSessionStorage(key) {
            sessionStorage.removeItem(key);
        }

        function getEmbeddedData() {
            const scripts = document.querySelectorAll('script[type="application/json"]');
            const data = [];

            scripts.forEach((script, index) => {
                const content = script.textContent.trim();
                if (content) {
                    let parsedData;
                    let error = null;

                    try {
                        parsedData = JSON.parse(content);
                    } catch (e) {
                        error = '解析失败：不是有效的 JSON 格式';
                    }

                    const formattedJson = parsedData
                        ? JSON.stringify(parsedData, null, 2)
                        : content;

                    data.push({
                        id: script.id || `(script-${index + 1})`,
                        content: formattedJson,
                        error: error
                    });
                }
            });
            return data;
        }

        // --- 渲染存储项目列表 (保持不变) ---
        function renderStorage(container, data, setter, deleter, renderer) {
            container.innerHTML = '';

            if (data.length === 0) {
                container.innerHTML = '<p style="text-align:center; color:#999; padding: 10px 0;">(当前没有存储数据)</p>';
                return;
            }

            data.forEach(item => {
                const row = document.createElement('div');
                row.className = 'storage-item';

                const keyLabel = document.createElement('div');
                keyLabel.className = 'key-label';
                keyLabel.title = item.key;
                keyLabel.textContent = item.key;

                keyLabel.addEventListener('click', (e) => {
                    e.stopPropagation();
                    showTooltip(item.key, keyLabel);
                });

                const valueInput = document.createElement('input');
                valueInput.type = 'text';
                valueInput.value = item.value;
                valueInput.title = item.value;

                const buttonGroup = document.createElement('div');
                buttonGroup.className = 'action-buttons';

                const saveBtn = document.createElement('button');
                saveBtn.className = 'action-btn save-btn';
                saveBtn.innerHTML = '✔';
                saveBtn.title = '修改/保存';
                saveBtn.onclick = () => { setter(item.key, valueInput.value); renderer(); };

                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'action-btn delete-btn';
                deleteBtn.innerHTML = '🗑️';
                deleteBtn.title = '删除';
                deleteBtn.onclick = () => {
                    if (confirm(`确定要删除键名为 "${item.key}" 的项目吗?`)) {
                        deleter(item.key);
                        renderer();
                    }
                };

                buttonGroup.appendChild(saveBtn);
                buttonGroup.appendChild(deleteBtn);

                row.appendChild(keyLabel);
                row.appendChild(valueInput);
                row.appendChild(buttonGroup);
                container.appendChild(row);
            });
        }

        function renderEmbeddedData() {
            const configData = getEmbeddedData();
            const container = embeddedListWrapper;
            container.innerHTML = '';

            if (configData.length === 0) {
                container.innerHTML = '<p style="text-align:center; color:#999; padding: 10px 0;">(未找到内嵌的 JSON 配置数据)</p>';
                return;
            }

            configData.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'json-item';

                const title = document.createElement('span');
                title.className = 'json-title';
                title.textContent = `标签 ID: ${item.id}`;
                itemDiv.appendChild(title);

                const pre = document.createElement('pre');
                pre.className = 'json-display';

                if (item.error) {
                    pre.style.color = 'red';
                    pre.textContent = item.error + ':\n' + item.content;
                } else {
                    pre.textContent = item.content;
                }

                itemDiv.appendChild(pre);
                container.appendChild(itemDiv);
            });
        }

        // --- DOM 渲染和初始化 ---

        // 1. Cookies Section
        const cookieSection = document.createElement('div');
        cookieSection.className = 'section';
        cookieSection.innerHTML = '<h4>🍪 站点 Cookies</h4>';
        content.appendChild(cookieSection);

        const cookieListWrapper = document.createElement('div');
        cookieListWrapper.id = 'cookie-list';
        cookieListWrapper.className = 'data-list-wrapper';
        cookieSection.appendChild(cookieListWrapper);

        function renderCookies() {
            try {
                const cookies = getCookies();
                renderStorage(cookieListWrapper, cookies, setCookie, deleteCookie, renderCookies);
            } catch (error) {
                cookieListWrapper.innerHTML = '<p style="color:red;">读取 Cookie 失败。</p>';
            }
        }

        // 2. LocalStorage Section
        const localSection = document.createElement('div');
        localSection.className = 'section';
        localSection.innerHTML = '<h4>💾 LocalStorage</h4>';
        content.appendChild(localSection);

        const localListWrapper = document.createElement('div');
        localListWrapper.id = 'local-list';
        localListWrapper.className = 'data-list-wrapper';
        localSection.appendChild(localListWrapper);

        function renderLocalStorage() {
            try {
                const localStorageData = getLocalStorage();
                renderStorage(localListWrapper, localStorageData, setLocalStorage, deleteLocalStorage, renderLocalStorage);
            } catch (error) {
                localListWrapper.innerHTML = '<p style="color:red;">读取 LocalStorage 失败。</p>';
            }
        }

        // 3. SessionStorage Section
        const sessionSection = document.createElement('div');
        sessionSection.className = 'section';
        sessionSection.innerHTML = '<h4>⏱️ Session Storage</h4>';
        content.appendChild(sessionSection);

        const sessionListWrapper = document.createElement('div');
        sessionListWrapper.id = 'session-list';
        sessionListWrapper.className = 'data-list-wrapper';
        sessionSection.appendChild(sessionListWrapper);

        function renderSessionStorage() {
            try {
                const sessionStorageData = getSessionStorage();
                renderStorage(sessionListWrapper, sessionStorageData, setSessionStorage, deleteSessionStorage, renderSessionStorage);
            } catch (error) {
                sessionListWrapper.innerHTML = '<p style="color:red;">读取 Session Storage 失败。</p>';
            }
        }

        // 4. Embedded Config Data Section
        const embeddedSection = document.createElement('div');
        embeddedSection.className = 'section';
        embeddedSection.innerHTML = '<h4>⚙️ 内嵌配置数据 (JSON-Scripts)</h4>';
        content.appendChild(embeddedSection);

        const embeddedListWrapper = document.createElement('div');
        embeddedListWrapper.id = 'embedded-list';
        embeddedListWrapper.className = 'data-list-wrapper';
        embeddedSection.appendChild(embeddedListWrapper);


        // --- 核心渲染函数 ---
        function globalRenderAll() {
            renderCookies();
            renderLocalStorage();
            renderSessionStorage();
            renderEmbeddedData();
            console.log("Web Debugger 已刷新所有存储数据。");
        }

        // 首次初始化渲染
        globalRenderAll();

        // **将渲染函数暴露给宿主页面**
        const script = document.createElement('script');
        script.textContent = `
            // 确保 window.__debugRender 存在，用于外部调用刷新
            window.__debugRender = () => {
                document.dispatchEvent(new CustomEvent('GM_DEBUG_RENDER_ALL'));
            };
        `;
        document.head.appendChild(script);

        // **监听宿主页面事件，并在沙盒中执行渲染**
        document.removeEventListener('GM_DEBUG_RENDER_ALL', globalRenderAll);
        document.addEventListener('GM_DEBUG_RENDER_ALL', globalRenderAll);
    }

    // 暴露初始化函数到全局
    window.initWebDebugger = showDebuggerPanel;

    // --- 恢复固定功能的自执行逻辑 ---

    // 等待 DOMContentLoaded 确保 body 存在，并检查固定状态
    document.addEventListener('DOMContentLoaded', () => {
        const isCurrentlyPinned = getPinState();

        // 如果面板被固定，且当前没有显示，则自动显示面板
        if (isCurrentlyPinned && !document.getElementById('storage-control-panel')) {
            showDebuggerPanel();
            console.log("Web Debugger: 检测到固定状态，自动显示面板。");
        }
    });

})();


setTimeout(() => {
    if (localStorage.getItem('webDebuggerPinned') == 'true') {
        window.initWebDebugger()
    }

}, 1000)

/* WebDebugger.js 结束 END
*/