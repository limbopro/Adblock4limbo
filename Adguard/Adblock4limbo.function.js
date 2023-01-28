// 各种 function 的集合
// 获取M3U8文件资源链接

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