// 各种 function 的集合
// 获取M3U8文件资源链接

const regexpx = [
    "https:?\/\/.*?hls.*?\.m3u8",
    "https:?\/\/.*?phncdn.*?hls.*?\.m3u8"
]

function m3u8_tempt(regexp){
    var i,url_result;
    var url_regex = new RegExp(regexp,"gi")
    const ele = [
        "script",
        "a"    
    ]
    const ele_catch = document.querySelectorAll(ele)
    for (i=0; i<ele_catch.length;i++){
        while ((url_result = url_regex.exec(ele_catch[i].innerHTML)) != null) {
            console.log("Catch it")
            alert(url_result)
        }
    }
}