let OldJavaScript = '<title>'
let NewJavaScript = '<link rel="stylesheet" href="https://limbopro.com/CSS/ddrk.css" type="text/css"><script type="text/javascript" src="//limbopro.com/Adguard/ddrk.js"></script><title>';
let body = $response.body
.replace(OldJavaScript, NewJavaScript);
$done({body});