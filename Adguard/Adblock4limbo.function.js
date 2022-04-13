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

// 
// 内容农场清除
//
function contentFarm_AdsRemove(time){
    setTimeout(()=>{
    var javaScript = document.createElement("script");
javaScript.src = 'https://limbopro.com/Adguard/contentFarm/contentFarm.js';
document.body.appendChild(javaScript);

var ads_host_custom = [
"csdn" // 自定义要清除的域名
];

var search_results_css_custom = [
    "li.b_algo", // bing 搜索结果样式
    "div[data-sokoban-grid]", // 通用
    "div[class='g'][data-hveid]", // 这是谷歌PC端搜索结果页的 style
    "div[class='mnr-c g'][data-hveid]", // 这是谷歌手机端搜索结果页的 style
    "div[class][data-sokoban-container]"// 最后一个选择器也不需要逗号结尾
]

var i,x;
    for (i = 0; i < ads_host_custom.length; i++){
    var ads_host_custom_css = "[href*='" + ads_host_custom[i] + "']";
    var huge_custom = document.querySelectorAll( search_results_css_custom );
        for (x = 0; x < huge_custom.length; x++){
            if (huge_custom[x].querySelectorAll( ads_host_custom_css ).length > 0){
                huge_custom[x].style.display = "none";
            }
        }
    }
},time);
}