
let OldStyle = '<head>'
let NewStyle = '<head><link rel=\"stylesheet\" href=\"https://limbopro.com/CSS/jableX.css\" type=\"text/css\">'
var OldJavaScript = '</body>'
var NewJavaScript = '<script type=\"text/javascript\" src=\"//limbopro.com/Adguard/jableX.js\"></script></body>'
let body = $response.body
.replace(OldStyle, NewStyle)
.replace(OldJavaScript, NewJavaScript);
$done({body});