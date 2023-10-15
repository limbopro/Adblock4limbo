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


/* Start 导航页面 可不删 */

function xNav(father, son) {
    let x4Daohang = document.createElement('div')
    x4Daohang.id = 'x4Daohang';
    let body = document.body;
    document.querySelector('html').insertBefore(x4Daohang, body);

    let ele_innerHTML = '\
        <div class="ellFeedback">\
        <div class="bigger">反馈/建议//</div>\
        <button class="xButton" onclick="crisp_active()" id="webChat">在线反馈</button>\
        <a class="xButton" id="issue" href="https://github.com/limbopro/Adblock4limbo/issues"\
        target="_blank">Github提交issue</a>\
        <a class="xButton" id="issue" href="https://github.com/limbopro/Adblock4limbo/blob/main/Adguard/Adblock4limbo.user.js"\
        target="_blank">查看源码</a>\
        <a class="xButton" id="tgGroup" href="https://t.me/Adblock4limbo/21"\
        target="_blank">电报群组</a>\
        <a class="xButton" id="daohang" href="https://limbopro.com/daohang/"\
        target="_blank">毒奶导航</a>\
        </div>\
        \
        <div class="ellMovie">\
        <div class="bigger">在线影视//</div>\
        <a class="xButton" id="nbys" href="https://www.nivod4.tv/"\
        target="_blank">泥巴影视</a>\
        <a class="xButton" id="ddrk" href="https://ddys.pro/"\
        target="_blank">低端影视</a>\
        <a class="xButton" id="xbys" href="https://xiaobaotv.net/"\
        target="_blank">小宝影视</a>\
        <a class="xButton" id="xbys" href="https://gimy.ai/"\
        target="_blank">剧迷网</a>\
        <a class="xButton" id="duboku" href="https://www.duboku.tv/"\
        target="_blank">独播库</a>\
        <a class="xButton" id="ttsp" href="https://www.ttsp.tv/"\
        target="_blank">天天视频</a>\
        <a class="xButton" id="555dy" href="https://555dyx3.com/"\
        target="_blank">555电影网</a>\
        <a class="xButton" id="libvio" href="https://libvio.top/"\
        target="_blank">libvio梨</a>\
        </div>\
        \
        <div class="ellPorn">\
        <div class="bigger">午夜惊魂//</div>\
        <a class="xButton" id="Pornhub" href="https://cn.pornhub.com/"\
        target="_blank">Pornhub</a>\
        <a class="xButton" id="Xvideos" href="https://www.xvideos.com/"\
        target="_blank">Xvideos</a>\
        <a class="xButton" id="Missav" href="https://missav.com/"\
        target="_blank">Missav</a>\
        <a class="xButton" id="Jable" href="https://jable.tv/"\
        target="_blank">Jable</a>\
        <a class="xButton" id="Javday" href="https://javday.tv/"\
        target="_blank">Javday</a>\
        <a class="xButton" id="hanime1" href="https://hanime1.me/comics"\
        target="_blank">hanime1</a>\
        <a class="xButton" id="18comic" href="https://18comic.vip/"\
        target="_blank">禁漫天堂</a>\
        </div>\
        \
        <div class="ellClose">\
        <button class="xButton_close" id="button_close" onclick="x4Daohang_create_show(\'0\')" >关闭页面</button>\
        </div>\
        \
'

    let x4Daohang_parents = document.getElementById('x4Daohang');
    x4Daohang_parents.innerHTML = ele_innerHTML;

    let css_innerHTML = '\
    xButton_close {margin:0px} .bigger{font-size: initial; margin-bottom: 5px; font-weight:lighter; color: black; padding-left: 4px; padding-bottom: 2px;} .ellFeedback{ padding-top: 47px; margin:0; margin-bottom:15px; padding-left:15px;}  .ellMovie{ margin:0; margin-bottom:15px; padding-left:15px;} .ellPorn{ margin:0;margin-bottom:15px;padding-left:15px;} .ellClose{ margin:0;margin-bottom:15px;padding-left:15px;} #x4Daohang{background-image:url("https://limbopro.com/Adblock4limbo_bgp.jpg"); background-size:100% !important;background-repeat:no-repeat; margin:auto;overflow-y:scroll;width:200px;height:200px;z-index:-114154;opacity:0;background-color:transparent;position:fixed;top:50%;}.xButton{color:white !important;box-shadow:inset 0px 0px 15px 3px #23395e;background:linear-gradient(to bottom,#2e466e 5%,#415989 100%);background-color:#2e466e;border-radius:0px;margin:1px;border:1px solid #1f2f47;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:15px;padding:6px 13px;text-decoration:none;text-shadow:0px 1px 0px #263666;} .xButton_close{color:white !important;box-shadow:black;background:red;background-color:red;border-radius:17px;margin:1px;border:0px solid #1f2f47;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:15px;padding:6px 13px;text-decoration:none;text-shadow:0px 1px 0px #263666;}.xButton:hover{background:linear-gradient(to bottom,#415989 5%,#2e466e 100%);background-color:#415989;}.xButton:active{position:relative;top:1px;}\
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
    let xButton = document.querySelectorAll('.xButton');
}


/* End 导航页面 可不删 */

/* Start 判断是否显示导航 可不删 */
function x4Daohang_create_show(x) { // 判断导航显示与否
    if (x == 1) {
        if (!document.querySelector('div#x4Daohang[style]')) { // 如果导航不存在则生成
            xNav("x4Daohang", "webChat"); // 生成导航
            bgp_switch(); // 设置背景图片
            if (document.querySelector('button#button_close')) {
                document.querySelector('button#button_close').style.background = "red"
                //document.querySelector('button#button_close').style.width = window.innerWidth * 0.5 + "px";
            }
            let _father = document.getElementById('x4Daohang');
            _father.style.zIndex = "114154";
            _father.style.opacity = "1";
        }
    } else {
        document.getElementById('x4Daohang').remove();
        let css_x4Daohang = document.querySelectorAll('#css_x4Daohang');
        for (i = 0; i < css_x4Daohang.length; i++) {
            css_x4Daohang[i].remove();
        }
        console.log("移除 x4Daohang");
    }
}



// 替换背景图片
function bgp_switch() {
    let url_w = "https://limbopro.com/Adblock4limbo_bgp_w.jpg";
    let url_h = "https://limbopro.com/Adblock4limbo_bgp.jpg";
    let div = document.getElementById("x4Daohang");
    let x4Daohang = document.getElementById('x4Daohang');
    if (window.innerWidth * 0.65 > window.innerHeight) {
        x4Daohang.style.textAlign = "right"; x4Daohang.style.paddingRight = "15px";
        div.style.backgroundImage = `url(${url_w})`;
    } else {
        div.style.backgroundImage = `url(${url_h})`;
    }
}

setInterval(() => { // 自动调整导航宽度及高度
    let width = window.innerWidth;
    let height = window.innerHeight;
    setTimeout(() => {
        if (document.querySelector("#x4Daohang[style]")) {
            if (width != window.innerWidth | height != window.innerHeight) {
                x4Daohang_create_show('0');
                x4Daohang_create_show('1');
                bgp_switch();
            }
        } else {
            console.log("未捕捉到导航...")
        }
    }, 500)
}, 100)

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

function crisp_active() {
    tagName_appendChild_fx("script", "https://limbopro.com/Adguard/crisp.js", "head")
    let crisp_check = setInterval(() => {
        if (document.querySelector("span[data-has-unread]")) {
            document.querySelector("span[data-has-unread]").click();
            clearTimeout(crisp_check);
        }
    }, 1000)
}



