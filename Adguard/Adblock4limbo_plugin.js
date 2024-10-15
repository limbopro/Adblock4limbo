// 定义请求体
// var modifiedHeaders = $request.headers;
// modifiedHeaders['User-Agent'] = 'Mozilla/6.0 (iPhone 15; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/116.0.5845.118 Mobile/15E148 Safari/604.1';

// 定义 全局CSS/JS 用于移除网页上的广告元素、禁止点击弹窗广告等
var regex = '</title>';
var replace_str = '</title>\
<link rel="stylesheet" href="https://limbopro.com/CSS/Adblock4limbo.user.css" type="text/css" />\
<script type="text/javascript" async="async" src="https://limbopro.com/Adguard/Adblock4limbo.user.js"></script>\
'

let url = $request.url;
var url_target_regex = /(missav|netflav)/g;

var url_target = url.match(url_target_regex);
if ($response.body) {  // 判断响应体是否存在
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
