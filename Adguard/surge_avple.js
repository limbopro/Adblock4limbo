let Old = '<head>'
let New = '<head><link rel="stylesheet" href="https://limbopro.com/CSS/avple.css" type="text/css"><script type="text/javascript"  src="//limbopro.com/Adguard/avple.js"></script>';
let body = $response.body
.replace(Old, New);
$done({body});