let OldStyle = '<head>'
let NewStyle = '<head><link rel="stylesheet" href="https://limbopro.com/CSS/contentFarm.css">'
let OldJavaScript = '</body>'
let NewJavaScript = '<script src="https://limbopro.com/Adguard/contentFarm/contentFarm.js"></script></body>';
let body = $response.body
.replace(OldStyle, NewStyle)
.replace(OldJavaScript, NewJavaScript);
$done({body});