let url = $request.url;
if (url.indexOf("missav") != -1) {

    let window_open_reg = 'window.open';
    let window_open_str = '';
    let reg = '<head>';
    let str = '<head>\
    <link rel="stylesheet" href="https://limbopro.com/CSS/Adblock4limbo.user.css" type="text/css" />\
    <script type="text/javascript" async="async" src="https://limbopro.com/Adguard/nbys.user.js"></script>'
    let body = $response.body.replace(reg, str).replace(window_open_reg, window_open_str);
    let headers = $response.headers;
    headers['Content-Security-Policy'] = "child-src	'self'";
    $done({ headers, body, url })

} else {

    let reg = '<head>';
    let str = '<head>\
    <link rel="stylesheet" href="https://limbopro.com/CSS/Adblock4limbo.user.css" type="text/css" />\
    <script type="text/javascript" async="async" src="https://limbopro.com/Adguard/nbys.user.js"></script>'
    let body = $response.body.replace(reg, str);
    let headers = $response.headers;
    headers['Content-Security-Policy'] = '';
    $done({ headers, body, url })

}
