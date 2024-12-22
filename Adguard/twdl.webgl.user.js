// ==UserScript==
// @name        Twitter/X(网页版)视频/原始图片/gif一键下载.[limbopro]
// @name:ja     Twitter/X (Web 版) のビデオ/写真/GIF をワンクリックでダウンロード。[limbopro]
// @name:zh-cn  Twitter/X(网页版)视频/原始图片/gif一键下载.[limbopro]
// @name:zh-tw  Twitter/X(網頁版)影片/原始圖片/gif一鍵下載.[limbopro]
// @name:en     Twitter/X(web version)videos/4kPhotos/gif download.[limbopro]
// @name:ko     Twitter/X(웹버전) 동영상/사진/gif 원클릭 다운로드.[limbopro]
// @name:ru     Twitter/X (веб-версия) — загрузка видео/изображений/гифок в один клик.[limbopro]
// @namespace    https://limbopro.com/
// @version      0.1.3.21.110
// @description Twitter/X(网页版)视频/图片/gif一键下载.[limbopro] / 一键下载推文4k/原始图片并按用户名进行保存
// @description:zh-cn  Twitter/X(网页版)视频/图片/gif一键下载.[limbopro] / 一键下载推文4k/原始图片并按用户名进行保存
// @description:ja Twitter/X (Web 版) のビデオ/写真/GIF をワンクリックでダウンロード。[limbopro] / ワンクリックでツイート画像をダウンロードし、ユーザー名で保存します
// @description:zh-tw Twitter/X(網頁版)影片/圖片/gif一鍵下載.[limbopro] / 一鍵下載推文4k/原始圖片並按使用者名稱儲存
// @description:en Twitter/X(web version)videos/4kPhotos/gif download.[limbopro] / Download tweet original images(4k) with one click and save by username
// @description:ru Twitter/X (веб-версия) — загрузка видео/изображений/гифок в один клик.[limbopro] / Загрузите изображения твитов одним щелчком мыши и сохраните их по имени пользователя.
// @description:ko Twitter/X(웹버전) 동영상/사진/gif 원클릭 다운로드.[limbopro] / 한 번의 클릭으로 트윗 이미지를 다운로드하고 사용자 이름으로 저장
// @author       limbopro
// @license MIT
// @match        https://twitter.com/*
// @match        https://x.com/*
// @match        https://twittervideodownloader.com/*
// @match        https://twittervid.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// originalURL   https://limbopro.com/Adguard/twdl.user.js
// @grant        none
// @downloadURL https://update.greasyfork.org/scripts/478651/TwitterX%28%E7%BD%91%E9%A1%B5%E7%89%88%29%E8%A7%86%E9%A2%91%E5%9B%BE%E7%89%87gif%E4%B8%80%E9%94%AE%E4%B8%8B%E8%BD%BD%5Blimbopro%5D.user.js
// @updateURL https://update.greasyfork.org/scripts/478651/TwitterX%28%E7%BD%91%E9%A1%B5%E7%89%88%29%E8%A7%86%E9%A2%91%E5%9B%BE%E7%89%87gif%E4%B8%80%E9%94%AE%E4%B8%8B%E8%BD%BD%5Blimbopro%5D.meta.js
// ==/UserScript==

/*
@ author: limbopro
@ website: http://limbopro.com/
@ Gmail: service.limbopro.com@gmail.com
@ Github: https://github.com/limbopro
@ X: https://x.com/limboprossr
*/

/* (function () {
'use strict';
*/

// 引入全局 CSS
var twdlcss = "span[id^=\"ezoic-pub-ad-placeholder-\"], .ez-sidebar-wall, span[data-ez-ph-id], .ez-sidebar-wall-ad,.ez-sidebar-wall {display:none !important} button.twdl.download_pics:active {background-image: linear-gradient(153deg, #F33FEA 40%, #fc894d); transition: 0.7s;} button.twdl.download_pics:hover {background-image: linear-gradient(135deg, #f34079 40%, #fc894d); transition: 0.7s;} .atx {display:none;} .house {z-index:114154 !important; max-width:340px; display:flex; flex-direction:row; flex-wrap:wrap; margin-top:5px;}.help{top:80px !important;/*background:teal;*/} .twdl { z-index:114154 !important; line-height:normal; /*font-size:xx-small;*/ font-size:inherit; text-decoration:none; position:sticky; top:5px; /*text-transform:uppercase;*/ padding:6px 12px; color:white; z-index:114154;} .twittervideodownloader { background:linear-gradient(to bottom, #42a5f5 0%, #1e88e5 100%); box-shadow:inset 0 2px 2px #1976d2;} .twittervid {background:linear-gradient(to bottom, #66BB6A 0%, #43A047 100%); box-shadow:inset 0 2px 2px #388E3C;} .download_pics { /*border-radius:5px 0px 0px 5px; */ border:0px;} .greasyfork {cursor:help; right:295px;background:linear-gradient(rgb(62 53 53) 0%, rgb(31 29 29) 100%);box-shadow:rgb(0 0 0) 0px 2px 2px inset;}"
var newstyle = document.createElement('style')
newstyle.id = 'twdlcss'
newstyle.innerHTML = twdlcss
document.querySelector('head').parentNode.insertBefore(newstyle, document.querySelector('head')) // 载入


var twURL_regex = new RegExp(/^https:\/\/x\.com\/.*?\/status\/\d{10,100}$/gi) // 正则匹配对的 Tweet url
function twdl_div(article, downloaderURL, className, textContent) { // article = article[i]
    let a = document.createElement('a')
    article.querySelectorAll('a').forEach((x) => { // 获取 twitter url
        if (x.href.match(twURL_regex)) {
            //// console.log(x.href);
            a.href = downloaderURL + "#" + x.href;
            //// console.log(a.href)
        }
    })

    a.className = className;
    a.target = '_blank';
    a.zIndex = '114154';
    a.textContent = textContent;
    return a;
}

function twdl_url(article) {
    var twdl_Kurl = '';
    var twURL_regex = new RegExp(/^https:\/\/x\.com\/.*?\/status\/\d{10,100}$/gi) // 正则匹配对的 Tweet url
    article.querySelectorAll('a').forEach((x) => { // 获取 twitter url
        if (x.href.match(twURL_regex)) {
            twdl_Kurl = x.href
        }
    })
    //// console.log('当前推文链接🔗...' + ' ' + twdl_Kurl)
    return twdl_Kurl;
}

function iftwnopics_innerText() {
    var language = document.querySelector('html').lang; // en/ja/zh/ru/zh-Hant
    var textContent = '';
    switch (language) { //
        case 'zh':
            textContent = "该推文内容不存在图片!";
            return textContent;
            break;
        case 'zh-Hant':
            textContent = "該推文內容不存在圖片!";
            return textContent;
            break;
        /*
    case 'ja':
        textContent = "このツイートには画像がありません！";
        return textContent;
        break;
        */
        case 'en':
            textContent = "There is no image in this tweet!";
            return textContent;
            break;
        /*
    case 'ru':
        textContent = "В этом твите нет изображения!";
        return textContent;
        break;
        */
        default:
            textContent = "There is no image in this tweet!";
            return textContent;
            break;
    }
}


function downloader_innerText(x) { // [LOADER]/[VID]
    // 判断当前网页语言
    var language = document.querySelector('html').lang; // en/ja/zh/ru/zh-Hant
    var textContent = '';

    if (x == '[VID]') {

        switch (language) { //
            case 'zh':
                textContent = "通过" + x + "下载视频/动图";
                return textContent;
                break;
            case 'zh-Hant':
                textContent = "透過" + x + "下載影片/動圖";
                return textContent;
                break;
            /*
        case 'ja':
            textContent = "これらのビデオ/写真/アニメーションを" + x + "経由でダウンロードしてください";
            return textContent;
            break;
            */
            case 'en':
                textContent = "Download video/img/gif via " + x;
                return textContent;
                break;
            /*
        case 'ru':
            textContent = "Загрузите эти видео/изображения/анимацию через " + x;
            return textContent;
            break;
            */
            default:
                textContent = "Download video/img/gif via " + x;
                return textContent;
                break;
        }

    } else if (x == '[LOADER]') {

        switch (language) { //
            case 'zh':
                textContent = "通过" + x + "下载视频";
                return textContent;
                break;
            case 'zh-Hant':
                textContent = "透過" + x + "下載影片";
                return textContent;
                break;
            /*
        case 'ja':
            textContent = x + "経由でビデオをダウンロード";
            return textContent;
            break;
            */
            case 'en':
                textContent = "Download video via " + x;
                return textContent;
                break;
            /*
        case 'ru':
            textContent = "Скачать видео через " + x;
            return textContent;
            break;
            */
            default:
                textContent = "Download video via " + x;
                return textContent;
                break;
        }
    }

}

function dlpics_innerText() { // [LOADER]/[VID]
    // 判断当前网页语言
    var language = document.querySelector('html').lang; // en/ja/zh/ru/zh-Hant
    var textContent = '';
    switch (language) { //
        case 'zh':
            textContent = "下载图片";
            return textContent;
            break;
        case 'zh-Hant':
            textContent = "下載圖片";
            return textContent;
            break;
        /*
    case 'ja':
        textContent = "写真をダウンロードする";
        return textContent;
        break;
        */
        case 'en':
            textContent = 'Download img';
            return textContent;
            break;
        /*
    case 'ru':
        textContent = "Скачать картинки";
        return textContent;
        break;
        */
        default:
            textContent = 'Download img';
            return textContent;
            break;
    }
}


function promp_innerText() { // [LOADER]/[VID]
    // 判断当前网页语言
    var language = document.querySelector('html').lang; // en/ja/zh/ru/zh-Hant
    var textContent = '';
    switch (language) { //
        case 'zh':
            textContent = "手机端用户：当浏览器提示保存/下载图片时，请尽可能快的点击确认按钮!（在本次会话中，本信息只会出现两次，累计会出现五次，以便你可以很好的了解如何操作下载图片）";
            return textContent;
            break;
        case 'zh-Hant':
            textContent = "手機端用戶：當瀏覽器提示儲存/下載圖片時，請盡可能快的點擊確認按鈕!（在本次會話中，本資訊只會出現兩次，累計會出現五次，以便你可以很好的了解如何操作下載圖片）";
            return textContent;
            break;
        case 'en':
            textContent = 'Mobile users: When the browser prompts you to save/download the image, please click the confirmation button as quickly as possible! (In this session, this message will only appear twice, and it will appear five times in total, so that you can Learn how to download images)';
            return textContent;
            break;
        default:
            textContent = 'Mobile users: When the browser prompts you to save/download the image, please click the confirmation button as quickly as possible! (In this session, this message will only appear twice, and it will appear five times in total, so that you can Learn how to download images)';
            return textContent;
            break;
    }
}


function jsCreate(src, id, textContent, type) {
    var newJS = document.createElement('script')
    if (src) {
        newJS.src = src;
    }
    if (id) {
        newJS.id = id;
    }
    if (textContent) {
        newJS.innerHTML = textContent
    }
    if (type) {
        newJS.type = type
    }
    document.body.appendChild(newJS)
}

function webgl_initial() {
    var m1 = `
attribute vec2 a_position;
uniform vec2 u_resolution;
uniform mat3 u_matrix;
varying vec2 v_texCoord;

void main() {
   gl_Position = vec4(u_matrix * vec3(a_position, 1), 1);
   v_texCoord = a_position;
}`

    var m2 = `
precision mediump float;

// our texture
uniform sampler2D u_image;

// the texCoords passed in from the vertex shader.
varying vec2 v_texCoord;

void main() {
   gl_FragColor = texture2D(u_image, v_texCoord);
}
`
    // webgl_fetchText();
    jsCreate('', '2d-vertex-shader', m1, 'x-shader/x-vertex')
    jsCreate('', '2d-fragment-shader', m2, 'x-shader/x-fragment')

}


async function webgl_fetchText() {
    const response = await fetch('https://webglfundamentals.org/webgl/resources/webgl-utils.js');
    if (response.status == 200) {
        const body = await response.text();
        console.log(response.status);
        jsCreate('', 'wtfwebgl', body, '')
        // alert('webgl-utils.js 成功加载！')
    } else {
        // alert('webgl-utils.js 未能成功加载！')
    }
}

webgl_initial();

function webgl_render(image, width, height) {
    // Get A WebGL context
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    var gl = canvas.getContext("webgl");
    if (!gl) {
        return;
    }

    // setup GLSL program
    var program = webglUtils.createProgramFromScripts(gl, ["2d-vertex-shader", "2d-fragment-shader"]);
    gl.useProgram(program);

    // look up where the vertex data needs to go.
    var positionLocation = gl.getAttribLocation(program, "a_position");

    // look up uniform locations
    var u_imageLoc = gl.getUniformLocation(program, "u_image");
    var u_matrixLoc = gl.getUniformLocation(program, "u_matrix");

    // provide texture coordinates for the rectangle.
    var positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        0.0, 0.0,
        1.0, 0.0,
        0.0, 1.0,
        0.0, 1.0,
        1.0, 0.0,
        1.0, 1.0]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);

    // Set the parameters so we can render any size image.
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

    // Upload the image into the texture.
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

    var dstX = 0;
    var dstY = 0;
    var dstWidth = width;
    var dstHeight = height;

    // convert dst pixel coords to clipspace coords      
    var clipX = dstX / gl.canvas.width * 2 - 1;
    var clipY = dstY / gl.canvas.height * -2 + 1;
    var clipWidth = dstWidth / gl.canvas.width * 2;
    var clipHeight = dstHeight / gl.canvas.height * -2;

    // build a matrix that will stretch our
    // unit quad to our desired size and location
    gl.uniformMatrix3fv(u_matrixLoc, false, [
        clipWidth, 0, 0,
        0, clipHeight, 0,
        clipX, clipY, 1,
    ]);

    // Draw the rectangle.
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    var url = canvas.toDataURL("image/png");
    var a = document.createElement("a");
    a.download = "photo";
    a.href = url;
    if (document.all) {
        a.click();
        console.log('image 下载（click）🏅...')
        // console.log('Firefox')
    } else {
        var event = new MouseEvent("click");
        event.initEvent('click', true, true);
        a.dispatchEvent(event);
        console.log('image 下载（event）🏅...')
        // console.log('Other browser')
    }
}

if (localStorage.getItem('clickcount') == '' || localStorage.getItem('clickcount') == null) {
    var twdl_clickCount = 0;
    console.log("twdl_clickCount 设置 为 " + '0')
} else {
    var twdl_clickCount = localStorage.getItem('clickcount');
    console.log("twdl_clickCount 设置 为 " + localStorage.getItem('clickcount'))
}

function dlpicsfromURL(imgsrcURL, userName) {
    if (imgsrcURL.length == 0) {
        alert(iftwnopics_innerText())
    } else {

        if (navigator.userAgent.toString().toLowerCase().search(/android|iphone|mobile/) !== -1) {
            sessionStorage.setItem('clickcount', twdl_clickCount += 1) // 点击下载图片按钮次数统计
            localStorage.setItem('clickcount', twdl_clickCount) // 点击下载图片按钮次数统计
            if (sessionStorage.getItem('clickcount') < 3 && localStorage.getItem('clickcount') < 5) { // 如果已经提示了两次则之后不会在在本次session提示
                alert(promp_innerText())
            }
        }

        // Part of the code is modified from CodeingShare
        // https://ww4k.com/CodeingShare/donwload_image_difference_domain.html
        // 解决跨域 Canvas 污染问题

        var timeloop = 0;

        imgsrcURL.forEach((x, index) => {

            if (navigator.userAgent.toString().toLowerCase().search(/android|iphone|mobile/) !== -1) { //  如果当前浏览器代理为手机代理
                timeloop = index * 2500; // 则 循环得慢一些
                console.log('Mobile')
            } else {
                timeloop = index * 500
                console.log('Not Mobile')
            }

            setTimeout(() => {

                var image = new Image();
                // using a dataURL because stackoverflow
                image.setAttribute("crossOrigin", "anonymous");
                // image.src = 'https://pbs.twimg.com/media/GfDKECrWkAAfvOf?format=jpg&name=large'
                image.src = x;
                image.onload = function () {
                    // alert("宽: " + image.width + "; 高: " + image.height)
                    webgl_render(image, image.width, image.height);
                    console.log("宽: " + image.width + "; 高: " + image.height)
                }

                /*
                var image = new Image();
                image.setAttribute("crossOrigin", "anonymous");
                image.src = x;
                image.onload = function () {
                    var canvas = document.createElement("canvas");
                    canvas.id = 'twdl_canvas'
                    canvas.width = image.width;
                    canvas.height = image.height;
                    var context = canvas.getContext("2d");
                    context.drawImage(image, 0, 0, image.width, image.height);
                    var url = canvas.toDataURL("image/png");

                    var a = document.createElement("a");
                    a.download = userName || "photo";
                    a.href = url;
                    if (document.all) {
                        a.click();
                        console.log('image 下载（click）🏅...')
                        // console.log('Firefox')
                    } else {
                        var event = new MouseEvent("click");
                        event.initEvent('click', true, true);
                        a.dispatchEvent(event);
                        console.log('image 下载（event）🏅...')
                        // console.log('Other browser')
                    }
                }
                    */

            }, timeloop)
        })

    }
}


function get_imgsURL(article, userName) {
    var url = [];

    article.querySelectorAll('a[class=' + userName + ']').forEach((x) => {
        var large_regex = new RegExp(/name=.*/ig)
        console.log('get_imgsURL -> ' + x)
        console.log('get_imgsURL -> ' + (x.toString().replace('name=medium', 'name=4096x4096').replace('name=small', 'name=4096x4096').replace(large_regex, 'name=4096x4096')))
        // url.push((x.toString().replace('name=medium', 'name=4096x4096').replace('name=small', 'name=4096x4096').replace(large_regex, 'name=4096x4096'))) // 默认下载最大化图片
        url.push((x.toString().replace(large_regex, 'name=4096x4096'))) // 默认下载最大化图片
    })

    return url;
}

function userName(article) {
    var fileName = '';
    var regex_name = new RegExp(/\/status\/\d{10,100}$/gi) // 正则匹配对的 Tweet url
    var twURL_regex = new RegExp(/^https:\/\/x\.com\/.*?\/status\/\d{10,100}$/gi) // 正则匹配对的 Tweet url

    article.querySelectorAll('a').forEach((x) => { // 获取 twitter url
        if (x.href.match(twURL_regex)) {
            fileName = x.href.replaceAll('https://x.com/', '').replaceAll(regex_name, '')
        }
    })

    return fileName;
}

function twdl() {
    if (document.querySelectorAll('[data-testid="cellInnerDiv"]')) {
        var article = document.querySelectorAll('[data-testid="cellInnerDiv"]')
        for (let i = 0; i < article.length; i++) { // twittervid

            if (article[i].querySelector('.house') == null && (article[i].querySelector('[data-testid="videoPlayer"]') || article[i].querySelectorAll("img[src*='name=']").length >= 1)) { // 如果 article[i] 不包含 .house ，但 article[i] 包含图片或视频，那么创建 .house
                var house = document.createElement('div')
                house.className = 'house'

                var vid = twdl_div(article[i], 'https://twittervid.com/', 'twdl twittervid', downloader_innerText('[VID]'))
                var loader_ = twdl_div(article[i], 'https://twittervideodownloader.com/', 'twdl twittervideodownloader', downloader_innerText('[LOADER]'))
                var help = twdl_div(article[i], 'https://greasyfork.org/zh-CN/scripts/478651-twitter-%E7%BD%91%E9%A1%B5%E7%89%88%E5%A4%9A%E8%A7%86%E9%A2%91-gif%E4%B8%8B%E8%BD%BD-limbopro', 'twdl help', 'Need Help?')

                var downloader = document.createElement('button')
                downloader.className = 'twdl download_pics'
                downloader.innerText = dlpics_innerText()

                article[i].querySelectorAll("img[src*='name=']").forEach((x) => {
                    var a = document.createElement('a')
                    a.href = x.src
                    a.className = "twdl_" + userName(article[i])
                    house.appendChild(a)
                })

                var array = [downloader, vid, loader_, help]

                array.forEach((x) => {
                    house.appendChild(x)
                })


                if (article[i].querySelectorAll("div.css-175oi2r.r-12kyg2d")[0] && article[i].querySelector('[data-testid="videoPlayer"]')) { // 推文存在文字图片且有视频的情况下
                    article[i].querySelectorAll("div.css-175oi2r.r-12kyg2d")[0].appendChild(house);

                } else if (article[i].querySelectorAll('[dir=auto][lang]')[0] && article[i].querySelector('[data-testid="videoPlayer"]')) {
                    article[i].querySelectorAll('[dir=auto][lang]')[0].appendChild(house);

                } else if (article[i].querySelector('[data-testid="videoPlayer"]')) { // 推文没有文字图片仅有视频的情况下
                    article[i].querySelector("[data-testid='videoComponent']").appendChild(house)

                } else if (article[i].querySelectorAll('[dir=auto][lang]')[0] && article[i].querySelectorAll("img[src*='name=']").length >= 1) {
                    article[i].querySelectorAll('[dir=auto][lang]')[0].appendChild(house);

                } else if (article[i].querySelectorAll("img[src*='name=']").length >= 1 && article[i].querySelectorAll("img")[1] !== null) {
                    article[i].querySelectorAll("div[aria-labelledby]")[0].parentNode.insertBefore(house, article[i].querySelectorAll("div[aria-labelledby]")[0])
                }


                downloader.addEventListener('click', () => {
                    dlpicsfromURL(get_imgsURL(article[i], "twdl_" + userName(article[i])), userName(article[i]))
                })

            } else {
                // console.log(userName(article[i]) + " " + twdl_url(article[i]) + " 啥也没有...")
            }
        }

    }
}

setInterval(() => {
    twdl()
}, 4000)

/* })(); */


function inDownloaderPage() { // 获取当前网页 url -> 给 input 赋值 -> 点击下载按钮

    if (window.location.href.match(/(twittervid\.com)/gi)) {

        if (document.querySelector('#tweetUrl') !== null && document.querySelector('#loadVideos') !== null) {
            document.querySelector('#tweetUrl').value = window.location.href.replace('https://twittervid.com/#', '')
            if (document.querySelector('#tweetUrl').value == 'https://twittervid.com/') {
            } else if (document.querySelector('#tweetUrl').value.match(twURL_regex)) {
                document.querySelector('#loadVideos').click()
            }
        }
    }

    if (window.location.href.match(/(twittervideodownloader\.com)/gi)) {
        if (document.querySelector('#tweetURL') !== null && document.querySelector('#submitBtn') !== null) {
            document.querySelector('#tweetURL').value = window.location.href.replace('https://twittervideodownloader.com/#', '')
            if (document.querySelector('#tweetURL').value == 'https://twittervideodownloader.com/') {
            } else if (document.querySelector('#tweetUrl').value.match(twURL_regex)) {
                document.querySelector('#submitBtn').click()
            }
        }
    }

}

if (window.location.href.match(/(twittervid\.com|twittervideodownloader)/gi) !== null) {
    inDownloaderPage()
}


// webgl js 加载 start

/*
 * Copyright 2021 GFXFundamentals.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of GFXFundamentals. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

(function(root, factory) {  // eslint-disable-line
    if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define([], function() {
        return factory.call(root);
      });
    } else {
      // Browser globals
      root.webglUtils = factory.call(root);
    }
  }(this, function() {
    'use strict';
  
    const topWindow = this;
  
    /** @module webgl-utils */
  
    function isInIFrame(w) {
      w = w || topWindow;
      return w !== w.top;
    }
  
    if (!isInIFrame()) {
      console.log("%c%s", 'color:blue;font-weight:bold;', 'for more about webgl-utils.js see:');  // eslint-disable-line
      console.log("%c%s", 'color:blue;font-weight:bold;', 'https://webglfundamentals.org/webgl/lessons/webgl-boilerplate.html');  // eslint-disable-line
    }
  
    /**
     * Wrapped logging function.
     * @param {string} msg The message to log.
     */
    function error(msg) {
      if (topWindow.console) {
        if (topWindow.console.error) {
          topWindow.console.error(msg);
        } else if (topWindow.console.log) {
          topWindow.console.log(msg);
        }
      }
    }
  
  
    /**
     * Error Callback
     * @callback ErrorCallback
     * @param {string} msg error message.
     * @memberOf module:webgl-utils
     */
  
  
    /**
     * Loads a shader.
     * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
     * @param {string} shaderSource The shader source.
     * @param {number} shaderType The type of shader.
     * @param {module:webgl-utils.ErrorCallback} opt_errorCallback callback for errors.
     * @return {WebGLShader} The created shader.
     */
    function loadShader(gl, shaderSource, shaderType, opt_errorCallback) {
      const errFn = opt_errorCallback || error;
      // Create the shader object
      const shader = gl.createShader(shaderType);
  
      // Load the shader source
      gl.shaderSource(shader, shaderSource);
  
      // Compile the shader
      gl.compileShader(shader);
  
      // Check the compile status
      const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
      if (!compiled) {
        // Something went wrong during compilation; get the error
        const lastError = gl.getShaderInfoLog(shader);
        errFn('*** Error compiling shader \'' + shader + '\':' + lastError + `\n` + shaderSource.split('\n').map((l,i) => `${i + 1}: ${l}`).join('\n'));
        gl.deleteShader(shader);
        return null;
      }
  
      return shader;
    }
  
    /**
     * Creates a program, attaches shaders, binds attrib locations, links the
     * program and calls useProgram.
     * @param {WebGLShader[]} shaders The shaders to attach
     * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
     * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
     * @param {module:webgl-utils.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
     *        on error. If you want something else pass an callback. It's passed an error message.
     * @memberOf module:webgl-utils
     */
    function createProgram(
        gl, shaders, opt_attribs, opt_locations, opt_errorCallback) {
      const errFn = opt_errorCallback || error;
      const program = gl.createProgram();
      shaders.forEach(function(shader) {
        gl.attachShader(program, shader);
      });
      if (opt_attribs) {
        opt_attribs.forEach(function(attrib, ndx) {
          gl.bindAttribLocation(
              program,
              opt_locations ? opt_locations[ndx] : ndx,
              attrib);
        });
      }
      gl.linkProgram(program);
  
      // Check the link status
      const linked = gl.getProgramParameter(program, gl.LINK_STATUS);
      if (!linked) {
          // something went wrong with the link
          const lastError = gl.getProgramInfoLog(program);
          errFn('Error in program linking:' + lastError);
  
          gl.deleteProgram(program);
          return null;
      }
      return program;
    }
  
    /**
     * Loads a shader from a script tag.
     * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
     * @param {string} scriptId The id of the script tag.
     * @param {number} opt_shaderType The type of shader. If not passed in it will
     *     be derived from the type of the script tag.
     * @param {module:webgl-utils.ErrorCallback} opt_errorCallback callback for errors.
     * @return {WebGLShader} The created shader.
     */
    function createShaderFromScript(
        gl, scriptId, opt_shaderType, opt_errorCallback) {
      let shaderSource = '';
      let shaderType;
      const shaderScript = document.getElementById(scriptId);
      if (!shaderScript) {
        throw ('*** Error: unknown script element' + scriptId);
      }
      shaderSource = shaderScript.text;
  
      if (!opt_shaderType) {
        if (shaderScript.type === 'x-shader/x-vertex') {
          shaderType = gl.VERTEX_SHADER;
        } else if (shaderScript.type === 'x-shader/x-fragment') {
          shaderType = gl.FRAGMENT_SHADER;
        } else if (shaderType !== gl.VERTEX_SHADER && shaderType !== gl.FRAGMENT_SHADER) {
          throw ('*** Error: unknown shader type');
        }
      }
  
      return loadShader(
          gl, shaderSource, opt_shaderType ? opt_shaderType : shaderType,
          opt_errorCallback);
    }
  
    const defaultShaderType = [
      'VERTEX_SHADER',
      'FRAGMENT_SHADER',
    ];
  
    /**
     * Creates a program from 2 script tags.
     *
     * @param {WebGLRenderingContext} gl The WebGLRenderingContext
     *        to use.
     * @param {string[]} shaderScriptIds Array of ids of the script
     *        tags for the shaders. The first is assumed to be the
     *        vertex shader, the second the fragment shader.
     * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
     * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
     * @param {module:webgl-utils.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
     *        on error. If you want something else pass an callback. It's passed an error message.
     * @return {WebGLProgram} The created program.
     * @memberOf module:webgl-utils
     */
    function createProgramFromScripts(
        gl, shaderScriptIds, opt_attribs, opt_locations, opt_errorCallback) {
      const shaders = [];
      for (let ii = 0; ii < shaderScriptIds.length; ++ii) {
        shaders.push(createShaderFromScript(
            gl, shaderScriptIds[ii], gl[defaultShaderType[ii]], opt_errorCallback));
      }
      return createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback);
    }
  
    /**
     * Creates a program from 2 sources.
     *
     * @param {WebGLRenderingContext} gl The WebGLRenderingContext
     *        to use.
     * @param {string[]} shaderSourcess Array of sources for the
     *        shaders. The first is assumed to be the vertex shader,
     *        the second the fragment shader.
     * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
     * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
     * @param {module:webgl-utils.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
     *        on error. If you want something else pass an callback. It's passed an error message.
     * @return {WebGLProgram} The created program.
     * @memberOf module:webgl-utils
     */
    function createProgramFromSources(
        gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
      const shaders = [];
      for (let ii = 0; ii < shaderSources.length; ++ii) {
        shaders.push(loadShader(
            gl, shaderSources[ii], gl[defaultShaderType[ii]], opt_errorCallback));
      }
      return createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback);
    }
  
    /**
     * Returns the corresponding bind point for a given sampler type
     */
    function getBindPointForSamplerType(gl, type) {
      if (type === gl.SAMPLER_2D)   return gl.TEXTURE_2D;        // eslint-disable-line
      if (type === gl.SAMPLER_CUBE) return gl.TEXTURE_CUBE_MAP;  // eslint-disable-line
      return undefined;
    }
  
    /**
     * @typedef {Object.<string, function>} Setters
     */
  
    /**
     * Creates setter functions for all uniforms of a shader
     * program.
     *
     * @see {@link module:webgl-utils.setUniforms}
     *
     * @param {WebGLProgram} program the program to create setters for.
     * @returns {Object.<string, function>} an object with a setter by name for each uniform
     * @memberOf module:webgl-utils
     */
    function createUniformSetters(gl, program) {
      let textureUnit = 0;
  
      /**
       * Creates a setter for a uniform of the given program with it's
       * location embedded in the setter.
       * @param {WebGLProgram} program
       * @param {WebGLUniformInfo} uniformInfo
       * @returns {function} the created setter.
       */
      function createUniformSetter(program, uniformInfo) {
        const location = gl.getUniformLocation(program, uniformInfo.name);
        const type = uniformInfo.type;
        // Check if this uniform is an array
        const isArray = (uniformInfo.size > 1 && uniformInfo.name.substr(-3) === '[0]');
        if (type === gl.FLOAT && isArray) {
          return function(v) {
            gl.uniform1fv(location, v);
          };
        }
        if (type === gl.FLOAT) {
          return function(v) {
            gl.uniform1f(location, v);
          };
        }
        if (type === gl.FLOAT_VEC2) {
          return function(v) {
            gl.uniform2fv(location, v);
          };
        }
        if (type === gl.FLOAT_VEC3) {
          return function(v) {
            gl.uniform3fv(location, v);
          };
        }
        if (type === gl.FLOAT_VEC4) {
          return function(v) {
            gl.uniform4fv(location, v);
          };
        }
        if (type === gl.INT && isArray) {
          return function(v) {
            gl.uniform1iv(location, v);
          };
        }
        if (type === gl.INT) {
          return function(v) {
            gl.uniform1i(location, v);
          };
        }
        if (type === gl.INT_VEC2) {
          return function(v) {
            gl.uniform2iv(location, v);
          };
        }
        if (type === gl.INT_VEC3) {
          return function(v) {
            gl.uniform3iv(location, v);
          };
        }
        if (type === gl.INT_VEC4) {
          return function(v) {
            gl.uniform4iv(location, v);
          };
        }
        if (type === gl.BOOL) {
          return function(v) {
            gl.uniform1iv(location, v);
          };
        }
        if (type === gl.BOOL_VEC2) {
          return function(v) {
            gl.uniform2iv(location, v);
          };
        }
        if (type === gl.BOOL_VEC3) {
          return function(v) {
            gl.uniform3iv(location, v);
          };
        }
        if (type === gl.BOOL_VEC4) {
          return function(v) {
            gl.uniform4iv(location, v);
          };
        }
        if (type === gl.FLOAT_MAT2) {
          return function(v) {
            gl.uniformMatrix2fv(location, false, v);
          };
        }
        if (type === gl.FLOAT_MAT3) {
          return function(v) {
            gl.uniformMatrix3fv(location, false, v);
          };
        }
        if (type === gl.FLOAT_MAT4) {
          return function(v) {
            gl.uniformMatrix4fv(location, false, v);
          };
        }
        if ((type === gl.SAMPLER_2D || type === gl.SAMPLER_CUBE) && isArray) {
          const units = [];
          for (let ii = 0; ii < info.size; ++ii) {
            units.push(textureUnit++);
          }
          return function(bindPoint, units) {
            return function(textures) {
              gl.uniform1iv(location, units);
              textures.forEach(function(texture, index) {
                gl.activeTexture(gl.TEXTURE0 + units[index]);
                gl.bindTexture(bindPoint, texture);
              });
            };
          }(getBindPointForSamplerType(gl, type), units);
        }
        if (type === gl.SAMPLER_2D || type === gl.SAMPLER_CUBE) {
          return function(bindPoint, unit) {
            return function(texture) {
              gl.uniform1i(location, unit);
              gl.activeTexture(gl.TEXTURE0 + unit);
              gl.bindTexture(bindPoint, texture);
            };
          }(getBindPointForSamplerType(gl, type), textureUnit++);
        }
        throw ('unknown type: 0x' + type.toString(16)); // we should never get here.
      }
  
      const uniformSetters = { };
      const numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
  
      for (let ii = 0; ii < numUniforms; ++ii) {
        const uniformInfo = gl.getActiveUniform(program, ii);
        if (!uniformInfo) {
          break;
        }
        let name = uniformInfo.name;
        // remove the array suffix.
        if (name.substr(-3) === '[0]') {
          name = name.substr(0, name.length - 3);
        }
        const setter = createUniformSetter(program, uniformInfo);
        uniformSetters[name] = setter;
      }
      return uniformSetters;
    }
  
    /**
     * Set uniforms and binds related textures.
     *
     * Example:
     *
     *     let programInfo = createProgramInfo(
     *         gl, ["some-vs", "some-fs"]);
     *
     *     let tex1 = gl.createTexture();
     *     let tex2 = gl.createTexture();
     *
     *     ... assume we setup the textures with data ...
     *
     *     let uniforms = {
     *       u_someSampler: tex1,
     *       u_someOtherSampler: tex2,
     *       u_someColor: [1,0,0,1],
     *       u_somePosition: [0,1,1],
     *       u_someMatrix: [
     *         1,0,0,0,
     *         0,1,0,0,
     *         0,0,1,0,
     *         0,0,0,0,
     *       ],
     *     };
     *
     *     gl.useProgram(program);
     *
     * This will automatically bind the textures AND set the
     * uniforms.
     *
     *     setUniforms(programInfo.uniformSetters, uniforms);
     *
     * For the example above it is equivalent to
     *
     *     let texUnit = 0;
     *     gl.activeTexture(gl.TEXTURE0 + texUnit);
     *     gl.bindTexture(gl.TEXTURE_2D, tex1);
     *     gl.uniform1i(u_someSamplerLocation, texUnit++);
     *     gl.activeTexture(gl.TEXTURE0 + texUnit);
     *     gl.bindTexture(gl.TEXTURE_2D, tex2);
     *     gl.uniform1i(u_someSamplerLocation, texUnit++);
     *     gl.uniform4fv(u_someColorLocation, [1, 0, 0, 1]);
     *     gl.uniform3fv(u_somePositionLocation, [0, 1, 1]);
     *     gl.uniformMatrix4fv(u_someMatrix, false, [
     *         1,0,0,0,
     *         0,1,0,0,
     *         0,0,1,0,
     *         0,0,0,0,
     *       ]);
     *
     * Note it is perfectly reasonable to call `setUniforms` multiple times. For example
     *
     *     let uniforms = {
     *       u_someSampler: tex1,
     *       u_someOtherSampler: tex2,
     *     };
     *
     *     let moreUniforms {
     *       u_someColor: [1,0,0,1],
     *       u_somePosition: [0,1,1],
     *       u_someMatrix: [
     *         1,0,0,0,
     *         0,1,0,0,
     *         0,0,1,0,
     *         0,0,0,0,
     *       ],
     *     };
     *
     *     setUniforms(programInfo.uniformSetters, uniforms);
     *     setUniforms(programInfo.uniformSetters, moreUniforms);
     *
     * @param {Object.<string, function>|module:webgl-utils.ProgramInfo} setters the setters returned from
     *        `createUniformSetters` or a ProgramInfo from {@link module:webgl-utils.createProgramInfo}.
     * @param {Object.<string, value>} an object with values for the
     *        uniforms.
     * @memberOf module:webgl-utils
     */
    function setUniforms(setters, ...values) {
      setters = setters.uniformSetters || setters;
      for (const uniforms of values) {
        Object.keys(uniforms).forEach(function(name) {
          const setter = setters[name];
          if (setter) {
            setter(uniforms[name]);
          }
        });
      }
    }
  
    /**
     * Creates setter functions for all attributes of a shader
     * program. You can pass this to {@link module:webgl-utils.setBuffersAndAttributes} to set all your buffers and attributes.
     *
     * @see {@link module:webgl-utils.setAttributes} for example
     * @param {WebGLProgram} program the program to create setters for.
     * @return {Object.<string, function>} an object with a setter for each attribute by name.
     * @memberOf module:webgl-utils
     */
    function createAttributeSetters(gl, program) {
      const attribSetters = {
      };
  
      function createAttribSetter(index) {
        return function(b) {
            if (b.value) {
              gl.disableVertexAttribArray(index);
              switch (b.value.length) {
                case 4:
                  gl.vertexAttrib4fv(index, b.value);
                  break;
                case 3:
                  gl.vertexAttrib3fv(index, b.value);
                  break;
                case 2:
                  gl.vertexAttrib2fv(index, b.value);
                  break;
                case 1:
                  gl.vertexAttrib1fv(index, b.value);
                  break;
                default:
                  throw new Error('the length of a float constant value must be between 1 and 4!');
              }
            } else {
              gl.bindBuffer(gl.ARRAY_BUFFER, b.buffer);
              gl.enableVertexAttribArray(index);
              gl.vertexAttribPointer(
                  index, b.numComponents || b.size, b.type || gl.FLOAT, b.normalize || false, b.stride || 0, b.offset || 0);
            }
          };
      }
  
      const numAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
      for (let ii = 0; ii < numAttribs; ++ii) {
        const attribInfo = gl.getActiveAttrib(program, ii);
        if (!attribInfo) {
          break;
        }
        const index = gl.getAttribLocation(program, attribInfo.name);
        attribSetters[attribInfo.name] = createAttribSetter(index);
      }
  
      return attribSetters;
    }
  
    /**
     * Sets attributes and binds buffers (deprecated... use {@link module:webgl-utils.setBuffersAndAttributes})
     *
     * Example:
     *
     *     let program = createProgramFromScripts(
     *         gl, ["some-vs", "some-fs"]);
     *
     *     let attribSetters = createAttributeSetters(program);
     *
     *     let positionBuffer = gl.createBuffer();
     *     let texcoordBuffer = gl.createBuffer();
     *
     *     let attribs = {
     *       a_position: {buffer: positionBuffer, numComponents: 3},
     *       a_texcoord: {buffer: texcoordBuffer, numComponents: 2},
     *     };
     *
     *     gl.useProgram(program);
     *
     * This will automatically bind the buffers AND set the
     * attributes.
     *
     *     setAttributes(attribSetters, attribs);
     *
     * Properties of attribs. For each attrib you can add
     * properties:
     *
     * *   type: the type of data in the buffer. Default = gl.FLOAT
     * *   normalize: whether or not to normalize the data. Default = false
     * *   stride: the stride. Default = 0
     * *   offset: offset into the buffer. Default = 0
     *
     * For example if you had 3 value float positions, 2 value
     * float texcoord and 4 value uint8 colors you'd setup your
     * attribs like this
     *
     *     let attribs = {
     *       a_position: {buffer: positionBuffer, numComponents: 3},
     *       a_texcoord: {buffer: texcoordBuffer, numComponents: 2},
     *       a_color: {
     *         buffer: colorBuffer,
     *         numComponents: 4,
     *         type: gl.UNSIGNED_BYTE,
     *         normalize: true,
     *       },
     *     };
     *
     * @param {Object.<string, function>|model:webgl-utils.ProgramInfo} setters Attribute setters as returned from createAttributeSetters or a ProgramInfo as returned {@link module:webgl-utils.createProgramInfo}
     * @param {Object.<string, module:webgl-utils.AttribInfo>} attribs AttribInfos mapped by attribute name.
     * @memberOf module:webgl-utils
     * @deprecated use {@link module:webgl-utils.setBuffersAndAttributes}
     */
    function setAttributes(setters, attribs) {
      setters = setters.attribSetters || setters;
      Object.keys(attribs).forEach(function(name) {
        const setter = setters[name];
        if (setter) {
          setter(attribs[name]);
        }
      });
    }
  
    /**
     * Creates a vertex array object and then sets the attributes
     * on it
     *
     * @param {WebGLRenderingContext} gl The WebGLRenderingContext
     *        to use.
     * @param {Object.<string, function>} setters Attribute setters as returned from createAttributeSetters
     * @param {Object.<string, module:webgl-utils.AttribInfo>} attribs AttribInfos mapped by attribute name.
     * @param {WebGLBuffer} [indices] an optional ELEMENT_ARRAY_BUFFER of indices
     */
    function createVAOAndSetAttributes(gl, setters, attribs, indices) {
      const vao = gl.createVertexArray();
      gl.bindVertexArray(vao);
      setAttributes(setters, attribs);
      if (indices) {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indices);
      }
      // We unbind this because otherwise any change to ELEMENT_ARRAY_BUFFER
      // like when creating buffers for other stuff will mess up this VAO's binding
      gl.bindVertexArray(null);
      return vao;
    }
  
    /**
     * Creates a vertex array object and then sets the attributes
     * on it
     *
     * @param {WebGLRenderingContext} gl The WebGLRenderingContext
     *        to use.
     * @param {Object.<string, function>| module:webgl-utils.ProgramInfo} programInfo as returned from createProgramInfo or Attribute setters as returned from createAttributeSetters
     * @param {module:webgl-utils:BufferInfo} bufferInfo BufferInfo as returned from createBufferInfoFromArrays etc...
     * @param {WebGLBuffer} [indices] an optional ELEMENT_ARRAY_BUFFER of indices
     */
    function createVAOFromBufferInfo(gl, programInfo, bufferInfo) {
      return createVAOAndSetAttributes(gl, programInfo.attribSetters || programInfo, bufferInfo.attribs, bufferInfo.indices);
    }
  
    /**
     * @typedef {Object} ProgramInfo
     * @property {WebGLProgram} program A shader program
     * @property {Object<string, function>} uniformSetters: object of setters as returned from createUniformSetters,
     * @property {Object<string, function>} attribSetters: object of setters as returned from createAttribSetters,
     * @memberOf module:webgl-utils
     */
  
    /**
     * Creates a ProgramInfo from 2 sources.
     *
     * A ProgramInfo contains
     *
     *     programInfo = {
     *        program: WebGLProgram,
     *        uniformSetters: object of setters as returned from createUniformSetters,
     *        attribSetters: object of setters as returned from createAttribSetters,
     *     }
     *
     * @param {WebGLRenderingContext} gl The WebGLRenderingContext
     *        to use.
     * @param {string[]} shaderSourcess Array of sources for the
     *        shaders or ids. The first is assumed to be the vertex shader,
     *        the second the fragment shader.
     * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
     * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
     * @param {module:webgl-utils.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
     *        on error. If you want something else pass an callback. It's passed an error message.
     * @return {module:webgl-utils.ProgramInfo} The created program.
     * @memberOf module:webgl-utils
     */
    function createProgramInfo(
        gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
      shaderSources = shaderSources.map(function(source) {
        const script = document.getElementById(source);
        return script ? script.text : source;
      });
      const program = webglUtils.createProgramFromSources(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback);
      if (!program) {
        return null;
      }
      const uniformSetters = createUniformSetters(gl, program);
      const attribSetters = createAttributeSetters(gl, program);
      return {
        program: program,
        uniformSetters: uniformSetters,
        attribSetters: attribSetters,
      };
    }
  
    /**
     * Sets attributes and buffers including the `ELEMENT_ARRAY_BUFFER` if appropriate
     *
     * Example:
     *
     *     let programInfo = createProgramInfo(
     *         gl, ["some-vs", "some-fs"]);
     *
     *     let arrays = {
     *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
     *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
     *     };
     *
     *     let bufferInfo = createBufferInfoFromArrays(gl, arrays);
     *
     *     gl.useProgram(programInfo.program);
     *
     * This will automatically bind the buffers AND set the
     * attributes.
     *
     *     setBuffersAndAttributes(programInfo.attribSetters, bufferInfo);
     *
     * For the example above it is equivilent to
     *
     *     gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
     *     gl.enableVertexAttribArray(a_positionLocation);
     *     gl.vertexAttribPointer(a_positionLocation, 3, gl.FLOAT, false, 0, 0);
     *     gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
     *     gl.enableVertexAttribArray(a_texcoordLocation);
     *     gl.vertexAttribPointer(a_texcoordLocation, 4, gl.FLOAT, false, 0, 0);
     *
     * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
     * @param {Object.<string, function>} setters Attribute setters as returned from `createAttributeSetters`
     * @param {module:webgl-utils.BufferInfo} buffers a BufferInfo as returned from `createBufferInfoFromArrays`.
     * @memberOf module:webgl-utils
     */
    function setBuffersAndAttributes(gl, setters, buffers) {
      setAttributes(setters, buffers.attribs);
      if (buffers.indices) {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
      }
    }
  
    // Add your prefix here.
    const browserPrefixes = [
      '',
      'MOZ_',
      'OP_',
      'WEBKIT_',
    ];
  
    /**
     * Given an extension name like WEBGL_compressed_texture_s3tc
     * returns the supported version extension, like
     * WEBKIT_WEBGL_compressed_teture_s3tc
     * @param {string} name Name of extension to look for
     * @return {WebGLExtension} The extension or undefined if not
     *     found.
     * @memberOf module:webgl-utils
     */
    function getExtensionWithKnownPrefixes(gl, name) {
      for (let ii = 0; ii < browserPrefixes.length; ++ii) {
        const prefixedName = browserPrefixes[ii] + name;
        const ext = gl.getExtension(prefixedName);
        if (ext) {
          return ext;
        }
      }
      return undefined;
    }
  
    /**
     * Resize a canvas to match the size its displayed.
     * @param {HTMLCanvasElement} canvas The canvas to resize.
     * @param {number} [multiplier] amount to multiply by.
     *    Pass in window.devicePixelRatio for native pixels.
     * @return {boolean} true if the canvas was resized.
     * @memberOf module:webgl-utils
     */
    function resizeCanvasToDisplaySize(canvas, multiplier) {
      multiplier = multiplier || 1;
      const width  = canvas.clientWidth  * multiplier | 0;
      const height = canvas.clientHeight * multiplier | 0;
      if (canvas.width !== width ||  canvas.height !== height) {
        canvas.width  = width;
        canvas.height = height;
        return true;
      }
      return false;
    }
  
    // Add `push` to a typed array. It just keeps a 'cursor'
    // and allows use to `push` values into the array so we
    // don't have to manually compute offsets
    function augmentTypedArray(typedArray, numComponents) {
      let cursor = 0;
      typedArray.push = function() {
        for (let ii = 0; ii < arguments.length; ++ii) {
          const value = arguments[ii];
          if (value instanceof Array || (value.buffer && value.buffer instanceof ArrayBuffer)) {
            for (let jj = 0; jj < value.length; ++jj) {
              typedArray[cursor++] = value[jj];
            }
          } else {
            typedArray[cursor++] = value;
          }
        }
      };
      typedArray.reset = function(opt_index) {
        cursor = opt_index || 0;
      };
      typedArray.numComponents = numComponents;
      Object.defineProperty(typedArray, 'numElements', {
        get: function() {
          return this.length / this.numComponents | 0;
        },
      });
      return typedArray;
    }
  
    /**
     * creates a typed array with a `push` function attached
     * so that you can easily *push* values.
     *
     * `push` can take multiple arguments. If an argument is an array each element
     * of the array will be added to the typed array.
     *
     * Example:
     *
     *     let array = createAugmentedTypedArray(3, 2);  // creates a Float32Array with 6 values
     *     array.push(1, 2, 3);
     *     array.push([4, 5, 6]);
     *     // array now contains [1, 2, 3, 4, 5, 6]
     *
     * Also has `numComponents` and `numElements` properties.
     *
     * @param {number} numComponents number of components
     * @param {number} numElements number of elements. The total size of the array will be `numComponents * numElements`.
     * @param {constructor} opt_type A constructor for the type. Default = `Float32Array`.
     * @return {ArrayBuffer} A typed array.
     * @memberOf module:webgl-utils
     */
    function createAugmentedTypedArray(numComponents, numElements, opt_type) {
      const Type = opt_type || Float32Array;
      return augmentTypedArray(new Type(numComponents * numElements), numComponents);
    }
  
    function createBufferFromTypedArray(gl, array, type, drawType) {
      type = type || gl.ARRAY_BUFFER;
      const buffer = gl.createBuffer();
      gl.bindBuffer(type, buffer);
      gl.bufferData(type, array, drawType || gl.STATIC_DRAW);
      return buffer;
    }
  
    function allButIndices(name) {
      return name !== 'indices';
    }
  
    function createMapping(obj) {
      const mapping = {};
      Object.keys(obj).filter(allButIndices).forEach(function(key) {
        mapping['a_' + key] = key;
      });
      return mapping;
    }
  
    function getGLTypeForTypedArray(gl, typedArray) {
      if (typedArray instanceof Int8Array)    { return gl.BYTE; }            // eslint-disable-line
      if (typedArray instanceof Uint8Array)   { return gl.UNSIGNED_BYTE; }   // eslint-disable-line
      if (typedArray instanceof Int16Array)   { return gl.SHORT; }           // eslint-disable-line
      if (typedArray instanceof Uint16Array)  { return gl.UNSIGNED_SHORT; }  // eslint-disable-line
      if (typedArray instanceof Int32Array)   { return gl.INT; }             // eslint-disable-line
      if (typedArray instanceof Uint32Array)  { return gl.UNSIGNED_INT; }    // eslint-disable-line
      if (typedArray instanceof Float32Array) { return gl.FLOAT; }           // eslint-disable-line
      throw 'unsupported typed array type';
    }
  
    // This is really just a guess. Though I can't really imagine using
    // anything else? Maybe for some compression?
    function getNormalizationForTypedArray(typedArray) {
      if (typedArray instanceof Int8Array)    { return true; }  // eslint-disable-line
      if (typedArray instanceof Uint8Array)   { return true; }  // eslint-disable-line
      return false;
    }
  
    function isArrayBuffer(a) {
      return a.buffer && a.buffer instanceof ArrayBuffer;
    }
  
    function guessNumComponentsFromName(name, length) {
      let numComponents;
      if (name.indexOf('coord') >= 0) {
        numComponents = 2;
      } else if (name.indexOf('color') >= 0) {
        numComponents = 4;
      } else {
        numComponents = 3;  // position, normals, indices ...
      }
  
      if (length % numComponents > 0) {
        throw 'can not guess numComponents. You should specify it.';
      }
  
      return numComponents;
    }
  
    function makeTypedArray(array, name) {
      if (isArrayBuffer(array)) {
        return array;
      }
  
      if (array.data && isArrayBuffer(array.data)) {
        return array.data;
      }
  
      if (Array.isArray(array)) {
        array = {
          data: array,
        };
      }
  
      if (!array.numComponents) {
        array.numComponents = guessNumComponentsFromName(name, array.length);
      }
  
      let type = array.type;
      if (!type) {
        if (name === 'indices') {
          type = Uint16Array;
        }
      }
      const typedArray = createAugmentedTypedArray(array.numComponents, array.data.length / array.numComponents | 0, type);
      typedArray.push(array.data);
      return typedArray;
    }
  
    /**
     * @typedef {Object} AttribInfo
     * @property {number} [numComponents] the number of components for this attribute.
     * @property {number} [size] the number of components for this attribute.
     * @property {number} [type] the type of the attribute (eg. `gl.FLOAT`, `gl.UNSIGNED_BYTE`, etc...) Default = `gl.FLOAT`
     * @property {boolean} [normalized] whether or not to normalize the data. Default = false
     * @property {number} [offset] offset into buffer in bytes. Default = 0
     * @property {number} [stride] the stride in bytes per element. Default = 0
     * @property {WebGLBuffer} buffer the buffer that contains the data for this attribute
     * @memberOf module:webgl-utils
     */
  
  
    /**
     * Creates a set of attribute data and WebGLBuffers from set of arrays
     *
     * Given
     *
     *      let arrays = {
     *        position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
     *        texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
     *        normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
     *        color:    { numComponents: 4, data: [255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 255], type: Uint8Array, },
     *        indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
     *      };
     *
     * returns something like
     *
     *      let attribs = {
     *        a_position: { numComponents: 3, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
     *        a_texcoord: { numComponents: 2, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
     *        a_normal:   { numComponents: 3, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
     *        a_color:    { numComponents: 4, type: gl.UNSIGNED_BYTE, normalize: true,  buffer: WebGLBuffer, },
     *      };
     *
     * @param {WebGLRenderingContext} gl The webgl rendering context.
     * @param {Object.<string, array|typedarray>} arrays The arrays
     * @param {Object.<string, string>} [opt_mapping] mapping from attribute name to array name.
     *     if not specified defaults to "a_name" -> "name".
     * @return {Object.<string, module:webgl-utils.AttribInfo>} the attribs
     * @memberOf module:webgl-utils
     */
    function createAttribsFromArrays(gl, arrays, opt_mapping) {
      const mapping = opt_mapping || createMapping(arrays);
      const attribs = {};
      Object.keys(mapping).forEach(function(attribName) {
        const bufferName = mapping[attribName];
        const origArray = arrays[bufferName];
        if (origArray.value) {
          attribs[attribName] = {
            value: origArray.value,
          };
        } else {
          const array = makeTypedArray(origArray, bufferName);
          attribs[attribName] = {
            buffer:        createBufferFromTypedArray(gl, array),
            numComponents: origArray.numComponents || array.numComponents || guessNumComponentsFromName(bufferName),
            type:          getGLTypeForTypedArray(gl, array),
            normalize:     getNormalizationForTypedArray(array),
          };
        }
      });
      return attribs;
    }
  
    function getArray(array) {
      return array.length ? array : array.data;
    }
  
    const texcoordRE = /coord|texture/i;
    const colorRE = /color|colour/i;
  
    function guessNumComponentsFromName(name, length) {
      let numComponents;
      if (texcoordRE.test(name)) {
        numComponents = 2;
      } else if (colorRE.test(name)) {
        numComponents = 4;
      } else {
        numComponents = 3;  // position, normals, indices ...
      }
  
      if (length % numComponents > 0) {
        throw new Error(`Can not guess numComponents for attribute '${name}'. Tried ${numComponents} but ${length} values is not evenly divisible by ${numComponents}. You should specify it.`);
      }
  
      return numComponents;
    }
  
    function getNumComponents(array, arrayName) {
      return array.numComponents || array.size || guessNumComponentsFromName(arrayName, getArray(array).length);
    }
  
    /**
     * tries to get the number of elements from a set of arrays.
     */
    const positionKeys = ['position', 'positions', 'a_position'];
    function getNumElementsFromNonIndexedArrays(arrays) {
      let key;
      for (const k of positionKeys) {
        if (k in arrays) {
          key = k;
          break;
        }
      }
      key = key || Object.keys(arrays)[0];
      const array = arrays[key];
      const length = getArray(array).length;
      const numComponents = getNumComponents(array, key);
      const numElements = length / numComponents;
      if (length % numComponents > 0) {
        throw new Error(`numComponents ${numComponents} not correct for length ${length}`);
      }
      return numElements;
    }
  
    /**
     * @typedef {Object} BufferInfo
     * @property {number} numElements The number of elements to pass to `gl.drawArrays` or `gl.drawElements`.
     * @property {WebGLBuffer} [indices] The indices `ELEMENT_ARRAY_BUFFER` if any indices exist.
     * @property {Object.<string, module:webgl-utils.AttribInfo>} attribs The attribs approriate to call `setAttributes`
     * @memberOf module:webgl-utils
     */
  
  
    /**
     * Creates a BufferInfo from an object of arrays.
     *
     * This can be passed to {@link module:webgl-utils.setBuffersAndAttributes} and to
     * {@link module:webgl-utils:drawBufferInfo}.
     *
     * Given an object like
     *
     *     let arrays = {
     *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
     *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
     *       normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
     *       indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
     *     };
     *
     *  Creates an BufferInfo like this
     *
     *     bufferInfo = {
     *       numElements: 4,        // or whatever the number of elements is
     *       indices: WebGLBuffer,  // this property will not exist if there are no indices
     *       attribs: {
     *         a_position: { buffer: WebGLBuffer, numComponents: 3, },
     *         a_normal:   { buffer: WebGLBuffer, numComponents: 3, },
     *         a_texcoord: { buffer: WebGLBuffer, numComponents: 2, },
     *       },
     *     };
     *
     *  The properties of arrays can be JavaScript arrays in which case the number of components
     *  will be guessed.
     *
     *     let arrays = {
     *        position: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0],
     *        texcoord: [0, 0, 0, 1, 1, 0, 1, 1],
     *        normal:   [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
     *        indices:  [0, 1, 2, 1, 2, 3],
     *     };
     *
     *  They can also by TypedArrays
     *
     *     let arrays = {
     *        position: new Float32Array([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]),
     *        texcoord: new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]),
     *        normal:   new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
     *        indices:  new Uint16Array([0, 1, 2, 1, 2, 3]),
     *     };
     *
     *  Or augmentedTypedArrays
     *
     *     let positions = createAugmentedTypedArray(3, 4);
     *     let texcoords = createAugmentedTypedArray(2, 4);
     *     let normals   = createAugmentedTypedArray(3, 4);
     *     let indices   = createAugmentedTypedArray(3, 2, Uint16Array);
     *
     *     positions.push([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]);
     *     texcoords.push([0, 0, 0, 1, 1, 0, 1, 1]);
     *     normals.push([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
     *     indices.push([0, 1, 2, 1, 2, 3]);
     *
     *     let arrays = {
     *        position: positions,
     *        texcoord: texcoords,
     *        normal:   normals,
     *        indices:  indices,
     *     };
     *
     * For the last example it is equivalent to
     *
     *     let bufferInfo = {
     *       attribs: {
     *         a_position: { numComponents: 3, buffer: gl.createBuffer(), },
     *         a_texcoods: { numComponents: 2, buffer: gl.createBuffer(), },
     *         a_normals: { numComponents: 3, buffer: gl.createBuffer(), },
     *       },
     *       indices: gl.createBuffer(),
     *       numElements: 6,
     *     };
     *
     *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.a_position.buffer);
     *     gl.bufferData(gl.ARRAY_BUFFER, arrays.position, gl.STATIC_DRAW);
     *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.a_texcoord.buffer);
     *     gl.bufferData(gl.ARRAY_BUFFER, arrays.texcoord, gl.STATIC_DRAW);
     *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.a_normal.buffer);
     *     gl.bufferData(gl.ARRAY_BUFFER, arrays.normal, gl.STATIC_DRAW);
     *     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferInfo.indices);
     *     gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, arrays.indices, gl.STATIC_DRAW);
     *
     * @param {WebGLRenderingContext} gl A WebGLRenderingContext
     * @param {Object.<string, array|object|typedarray>} arrays Your data
     * @param {Object.<string, string>} [opt_mapping] an optional mapping of attribute to array name.
     *    If not passed in it's assumed the array names will be mapped to an attribute
     *    of the same name with "a_" prefixed to it. An other words.
     *
     *        let arrays = {
     *           position: ...,
     *           texcoord: ...,
     *           normal:   ...,
     *           indices:  ...,
     *        };
     *
     *        bufferInfo = createBufferInfoFromArrays(gl, arrays);
     *
     *    Is the same as
     *
     *        let arrays = {
     *           position: ...,
     *           texcoord: ...,
     *           normal:   ...,
     *           indices:  ...,
     *        };
     *
     *        let mapping = {
     *          a_position: "position",
     *          a_texcoord: "texcoord",
     *          a_normal:   "normal",
     *        };
     *
     *        bufferInfo = createBufferInfoFromArrays(gl, arrays, mapping);
     *
     * @return {module:webgl-utils.BufferInfo} A BufferInfo
     * @memberOf module:webgl-utils
     */
    function createBufferInfoFromArrays(gl, arrays, opt_mapping) {
      const bufferInfo = {
        attribs: createAttribsFromArrays(gl, arrays, opt_mapping),
      };
      let indices = arrays.indices;
      if (indices) {
        indices = makeTypedArray(indices, 'indices');
        bufferInfo.indices = createBufferFromTypedArray(gl, indices, gl.ELEMENT_ARRAY_BUFFER);
        bufferInfo.numElements = indices.length;
      } else {
        bufferInfo.numElements = getNumElementsFromNonIndexedArrays(arrays);
      }
  
      return bufferInfo;
    }
  
    /**
     * Creates buffers from typed arrays
     *
     * Given something like this
     *
     *     let arrays = {
     *        positions: [1, 2, 3],
     *        normals: [0, 0, 1],
     *     }
     *
     * returns something like
     *
     *     buffers = {
     *       positions: WebGLBuffer,
     *       normals: WebGLBuffer,
     *     }
     *
     * If the buffer is named 'indices' it will be made an ELEMENT_ARRAY_BUFFER.
     *
     * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
     * @param {Object<string, array|typedarray>} arrays
     * @return {Object<string, WebGLBuffer>} returns an object with one WebGLBuffer per array
     * @memberOf module:webgl-utils
     */
    function createBuffersFromArrays(gl, arrays) {
      const buffers = { };
      Object.keys(arrays).forEach(function(key) {
        const type = key === 'indices' ? gl.ELEMENT_ARRAY_BUFFER : gl.ARRAY_BUFFER;
        const array = makeTypedArray(arrays[key], name);
        buffers[key] = createBufferFromTypedArray(gl, array, type);
      });
  
      // hrm
      if (arrays.indices) {
        buffers.numElements = arrays.indices.length;
      } else if (arrays.position) {
        buffers.numElements = arrays.position.length / 3;
      }
  
      return buffers;
    }
  
    /**
     * Calls `gl.drawElements` or `gl.drawArrays`, whichever is appropriate
     *
     * normally you'd call `gl.drawElements` or `gl.drawArrays` yourself
     * but calling this means if you switch from indexed data to non-indexed
     * data you don't have to remember to update your draw call.
     *
     * @param {WebGLRenderingContext} gl A WebGLRenderingContext
     * @param {module:webgl-utils.BufferInfo} bufferInfo as returned from createBufferInfoFromArrays
     * @param {enum} [primitiveType] eg (gl.TRIANGLES, gl.LINES, gl.POINTS, gl.TRIANGLE_STRIP, ...)
     * @param {number} [count] An optional count. Defaults to bufferInfo.numElements
     * @param {number} [offset] An optional offset. Defaults to 0.
     * @memberOf module:webgl-utils
     */
    function drawBufferInfo(gl, bufferInfo, primitiveType, count, offset) {
      const indices = bufferInfo.indices;
      primitiveType = primitiveType === undefined ? gl.TRIANGLES : primitiveType;
      const numElements = count === undefined ? bufferInfo.numElements : count;
      offset = offset === undefined ? 0 : offset;
      if (indices) {
        gl.drawElements(primitiveType, numElements, gl.UNSIGNED_SHORT, offset);
      } else {
        gl.drawArrays(primitiveType, offset, numElements);
      }
    }
  
    /**
     * @typedef {Object} DrawObject
     * @property {module:webgl-utils.ProgramInfo} programInfo A ProgramInfo as returned from createProgramInfo
     * @property {module:webgl-utils.BufferInfo} bufferInfo A BufferInfo as returned from createBufferInfoFromArrays
     * @property {Object<string, ?>} uniforms The values for the uniforms
     * @memberOf module:webgl-utils
     */
  
    /**
     * Draws a list of objects
     * @param {WebGLRenderingContext} gl A WebGLRenderingContext
     * @param {DrawObject[]} objectsToDraw an array of objects to draw.
     * @memberOf module:webgl-utils
     */
    function drawObjectList(gl, objectsToDraw) {
      let lastUsedProgramInfo = null;
      let lastUsedBufferInfo = null;
  
      objectsToDraw.forEach(function(object) {
        const programInfo = object.programInfo;
        const bufferInfo = object.bufferInfo;
        let bindBuffers = false;
  
        if (programInfo !== lastUsedProgramInfo) {
          lastUsedProgramInfo = programInfo;
          gl.useProgram(programInfo.program);
          bindBuffers = true;
        }
  
        // Setup all the needed attributes.
        if (bindBuffers || bufferInfo !== lastUsedBufferInfo) {
          lastUsedBufferInfo = bufferInfo;
          setBuffersAndAttributes(gl, programInfo.attribSetters, bufferInfo);
        }
  
        // Set the uniforms.
        setUniforms(programInfo.uniformSetters, object.uniforms);
  
        // Draw
        drawBufferInfo(gl, bufferInfo);
      });
    }
  
    function glEnumToString(gl, v) {
      const results = [];
      for (const key in gl) {
        if (gl[key] === v) {
          results.push(key);
        }
      }
      return results.length
          ? results.join(' | ')
          : `0x${v.toString(16)}`;
    }
  
    const isIE = /*@cc_on!@*/false || !!document.documentMode;
    // Edge 20+
    const isEdge = !isIE && !!window.StyleMedia;
    if (isEdge) {
      // Hack for Edge. Edge's WebGL implmentation is crap still and so they
      // only respond to "experimental-webgl". I don't want to clutter the
      // examples with that so his hack works around it
      HTMLCanvasElement.prototype.getContext = function(origFn) {
        return function() {
          let args = arguments;
          const type = args[0];
          if (type === 'webgl') {
            args = [].slice.call(arguments);
            args[0] = 'experimental-webgl';
          }
          return origFn.apply(this, args);
        };
      }(HTMLCanvasElement.prototype.getContext);
    }
  
    return {
      createAugmentedTypedArray: createAugmentedTypedArray,
      createAttribsFromArrays: createAttribsFromArrays,
      createBuffersFromArrays: createBuffersFromArrays,
      createBufferInfoFromArrays: createBufferInfoFromArrays,
      createAttributeSetters: createAttributeSetters,
      createProgram: createProgram,
      createProgramFromScripts: createProgramFromScripts,
      createProgramFromSources: createProgramFromSources,
      createProgramInfo: createProgramInfo,
      createUniformSetters: createUniformSetters,
      createVAOAndSetAttributes: createVAOAndSetAttributes,
      createVAOFromBufferInfo: createVAOFromBufferInfo,
      drawBufferInfo: drawBufferInfo,
      drawObjectList: drawObjectList,
      glEnumToString: glEnumToString,
      getExtensionWithKnownPrefixes: getExtensionWithKnownPrefixes,
      resizeCanvasToDisplaySize: resizeCanvasToDisplaySize,
      setAttributes: setAttributes,
      setBuffersAndAttributes: setBuffersAndAttributes,
      setUniforms: setUniforms,
    };
  
  }));
  
  