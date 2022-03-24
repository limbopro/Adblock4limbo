let rBody = '<title>'
let newJavaScript = '<link rel="stylesheet" href="https://limbopro.com/CSS/ddrk.css" type="text/css"><script type="text/javascript" src="//limbopro.com/Adguard/ddrk.js"></script><title>';
let body = $response.body
.replace(rBody, newJavaScript);
$done({body});