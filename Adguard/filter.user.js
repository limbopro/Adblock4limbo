// ==UserScript==
// @name         🔞成人保护模式
// @namespace    http://tampermonkey.net/
// @version      2024-11-30
// @description  try to take over the world!
// @author       You
// @match        https://www.runoob.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=runoob.com
// @grant        none
// ==/UserScript==

// 动态引入CSS样式


// localStorage.setItem('click2show', 'true')
// localStorage.setItem('click2show', '')

function css_add(css_content, delay, id) {
    setTimeout(() => {
        var newCSS = document.createElement("style");
        newCSS.id = id;
        newCSS.innerHTML = css_content;
        document.getElementsByTagName('head')[0].appendChild(newCSS)
    }, delay);
}

// 动态增加元素
function ele_add(tagwhat2Create, id, textContent, parentwhat2Append, className, src, style, insertBefore) {

    let _add = document.createElement(tagwhat2Create)

    if (id !== '') {
        _add.id = id
    }

    if (textContent !== '') {
        _add.innerHTML = textContent
    }

    if (className !== '') {
        _add.className = className
    }

    if (src !== '') {
        _add.src = src;
    }

    if (style !== null) {
        _add.style = style;
    }

    if (insertBefore == 'true') {
        let body = document.body;
        document.querySelector('html').insertBefore(_add, body)
    } else {
        parentwhat2Append.appendChild(_add)
    }
}

function znsh_ele_create() { // 生成内容元素并设置钩子

    if (document.getElementById('parent_filter') == null) {
        ele_add('div', 'parent_filter', '', document.querySelector('html'), 'parent_show', '', '', 'true') // 显示主体
        ele_add('div', 'imgfilterx', '<a href="https://t.me/Adblock4limbo" target="_blank"><img class="fifthx" src="https://limbopro.com/Adguard/joinTGChatGroup.png" height=50px></a>', document.getElementById('parent_filter'), 'center', '')
        ele_add('div', 'warnx', '<div class="center"><h3>🔞敏感内容警告⚠️</h2></div><div class="center paddingx"><b>成人保护模式已开启(ON)</b><br>🌟可进入 <b>导航 -> 设置</b> 点击相应按钮进行开启或关闭 <b>(ON/OFF)</b><br><br><div class="monkey"><span style="display:block;width:134px;">i:当你离开当前页面并再次返回时，你可看到该警告⚠️</span></div></div>', document.getElementById('parent_filter'), 'center')
        ele_add('button', 'click2show', '显示内容', document.getElementById('parent_filter'), 'center blackx')
        ele_add('button', 'setting', '设置', document.getElementById('parent_filter'), 'center blackx')
        addEventListener_add();
        znsh_css_create();
    } else {
        document.getElementById('parent_filter').setAttribute('class', 'parent_show')
        znsh_css_create();
    }

}

function znsh_css_create() { // 为主体设置样式
    var filter = "div:not(.monkey,.div_global,.echo,#daohang4limbo,#imgfilterx,#parent_filter,#warnx,.center) {filter:blur(10px); pointer-events:none; user-select: none;}"
    var global = ".monkey{display: flex; justify-content: center; font-weight: 100; font-size: 12px;} .paddingx {padding:0px 10px 0px 10px;} .fifthx {width:100px;height:auto;} #imgfilterx {display:flex; flex-direction:column; align-items:center; /*background:#00000000;*/ color:white; position:fixed; top:20%; width:100%; z-index:114; border:aquamarine; font-size:larger; text-align:center;} .width150 {width:150px} .blackx {height:45px;margin-top:0.5px;background:black;} #warnx {z-index:115; display:flex;align-items:center;justify-content:center; flex-direction:column; background:#b01e1e;color:white; height:175px; border-radius:11px 11px 0px 0px;} .blank {display:block; background:#ff000000; border:antiquewhite;} .center {width:245px; font-size:small;color:white;} .parent_hidden {opacity:0; pointer-events:none; user-select:none; visibility:hidden; display:flex; flex-direction:column; align-items:center; background:#00000000; color:white; position:fixed; top:35%; width:100%; z-index:-114; border:aquamarine; font-size:larger; text-align:center;} .parent_show {opacity:1; transition-property:opacity; transition-duration:2s; display:flex; flex-direction:column; align-items:center; background:#00000000; color:white; position:fixed; top:35%; width:100%; z-index:114; border:aquamarine; font-size:larger; text-align:center;}"
    if (document.getElementById('global') == null) {
        css_add(global, 100, 'global')
        css_add(filter, 100, 'filter')
    } else {
        document.querySelector('style#filter').innerHTML = filter
    }
}


// 去除成人安全模式（去除模糊）
function notfilter() {
    var notfilter = "div:not(.monkey,.div_global,.echo,#daohang4limbo,#imgfilterx,#parent_filter,#warnx,.center) {filter:blur(0px); pointer-events:auto; user-select: auto;}"
    document.querySelector('style#filter').innerHTML = notfilter
    document.getElementById('parent_filter').setAttribute('class', 'parent_hidden')
    sessionStorage.setItem('click2show', 'true')
    x4Home_button('1')
}

// 添加监听事件 设置
function addEventListener_add() {
    setTimeout(() => {
        if (document.getElementById('click2show') !== null) { // 点了
            document.getElementById('click2show').addEventListener('click', function () {
                notfilter();
            })
        }

        if (document.getElementById('setting') !== null) {
            document.getElementById('setting').addEventListener('click', function () {
                body_build('true')
                notfilter();
            })
        }

    }, 1000)
}

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        if (localStorage.getItem('click2show') !== 'true' && getCookie('nsfwmode') == 'true' && (nsfw_regex.test(window.location.href.toLowerCase()))) {
            znsh_ele_create()
        }
    } else {
    }
}
);


if (getCookie('nsfwmode') == 'true' && (sessionStorage.getItem('click2show') == null || sessionStorage.getItem('click2show') == '') && (nsfw_regex.test(window.location.href.toLowerCase()))) {
    znsh_ele_create()
}