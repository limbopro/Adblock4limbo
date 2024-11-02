/**
 * 
 * ---------------------------
 * 毒奶去网页广告计划
 * Author: limbopro
 * 完全使用手册：https://limbopro.com/archives/12904.html
 * 联系博主：https://t.me/limboprobot
 * 电报群组：https://t.me/Adblock4limbo
 * FAQ：https://t.me/Adblock4limbo/21 常见问题与回答
 * Github：https://github.com/limbopro/Adblock4limbo
 * ---------------------------
 * 
 */

/*
********
QuantumultX:

[rewrite_local]
^https?:\/\/www\.example\.com(?!(.*(cdn-cgi|(\.(js|css|jpg|jpeg|png|webp|gif|zip|woff|woff2|m3u8|mp4|mov|m4v|avi|mkv|flv|rmvb|wmv|rm|asf|asx|mp3|json|ico|otf|ttf))))).* url script-response-body https://limbopro.com/Adguard/Adblock4limbo.js

[mitm]
hostname = www.example.com
********

*/

/*
定义请求体
var modifiedHeaders = $request.headers;
modifiedHeaders['User-Agent'] = 'Mozilla/6.0 (iPhone 15; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/116.0.5845.118 Mobile/15E148 Safari/604.1';
*/


// 定义 全局CSS/JS 用于移除网页上的广告元素、禁止点击弹窗广告等


var regex = '</title>';
var replace_str = '</title>\
<script type="text/javascript" async="async" src="https://limbopro.com/Adguard/Adblock4limbo.user.js"></script>\
'

/*
var replace_str = '</title>\
<link rel="stylesheet" href="https://limbopro.com/CSS/Adblock4limbo.user.css" type="text/css" />\
<script type="text/javascript" async="async" src="https://limbopro.com/Adguard/Adblock4limbo.user.js"></script>\
'
*/

let url = $request.url;
var url_target_regex = /(missav|netflav|supjav|njav|javday)/g;

var url_target = url.match(url_target_regex);
if ($response.body !== null) {  // 判断响应体是否存在
    if (url_target) {  // 判断该URL是否匹配目标
        let window_open_reg = 'window.open'; // 匹配
        let window_open_str = ''; // 替换为空
        var body = $response.body.replaceAll('</TITLE>', '</title>').replaceAll(regex, replace_str).replace(window_open_reg, window_open_str);
    } else {
        var body = $response.body.replaceAll('</TITLE>', '</title>').replaceAll(regex, replace_str)
        // 定义响应头
    }
    let headers = $response.headers;
    headers['Content-Security-Policy'] = '*';
    $done({ headers: headers, body: body, url: url })
}

