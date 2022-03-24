let rHead = '<head>'
let newStyle = '<head><link rel="stylesheet" href="https://limbopro.com/CSS/avple.css" type="text/css">'
let rBody = '</body>'
let newJavaScript = '<script type="text/javascript" src="//limbopro.com/Adguard/avple.js"></script></body>';
let body = $response.body
.replace(rHead, newStyle)
.replace(rBody, newJavaScript);
$done({body});