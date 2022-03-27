let rHead = '<head>'
let newStyle = '<head><link rel="stylesheet" href="https://limbopro.com/CSS/ddrk.css" type="text/css">'
var rBody = '</body>'
var newJavaScript = '<script type="text/javascript" src="//limbopro.com/Adguard/ddrk.js"></script><title></body>'
let body = $response.body
.replace(rHead, newStyle)
.replace(rBody, newJavaScript);
$done({body});