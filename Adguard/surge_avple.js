let OldStyle = '<head>'
let NewStyle = '<head><link rel="stylesheet" href="https://limbopro.com/CSS/avple.css" type="text/css">'
let OldJavaScript = '</body>'
let NewJavaScript = '<script type="text/javascript" src="//limbopro.com/Adguard/avple.js"></script></body>';
let body = $response.body
.replace(OldStyle, NewStyle)
.replace(OldJavaScript, NewJavaScript);
$done({body});