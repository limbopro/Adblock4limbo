// 定义请求体
// const modifiedHeaders = $request.headers;
// modifiedHeaders['User-Agent'] = 'Mozilla/6.0 (iPhone 15; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/116.0.5845.118 Mobile/15E148 Safari/604.1';

// 定义 CSS/JS
const regex = '<head>';
const replace_str = '<script>window.close()</script> \
'

// 定义响应体
if ($response.body) {
    var body = $response.body.replace('location', 'fuck').replace("<head>", replace_str)
};

// 定义响应头
const headers = $response.headers;
headers['Content-Security-Policy'] = '*';

$done({ headers: headers, body: body });
