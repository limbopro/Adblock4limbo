let Old = '</body>'
let New = '<link rel="stylesheet" href="https://limbopro.com/CSS/jableX.css" type="text/css"><script type="text/javascript"  src="//limbopro.com/Adguard/jableX.js"></script></body>';
let body = $response.body
.replace(Old, New);
$done({body});