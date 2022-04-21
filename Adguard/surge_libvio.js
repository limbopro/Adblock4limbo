let rHead = '<head>'
let newStyle = '<head><link rel="stylesheet" href="https://limbopro.com/CSS/libvio.css" type="text/css">'
let rBody = '</body>'
let newJavaScript = '<script type="text/javascript" async="async" src="//limbopro.com/Adguard/libvio.js"></script></body>';
let body = $response.body
    .replace(rHead, newStyle)
    .replace(rBody, newJavaScript);
$done({ body });