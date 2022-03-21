let Old = '<head>'
let New = '<head><link rel="stylesheet" href="https://limbopro.com/CSS/pornhub.css" type="text/css"><script type="text/javascript" src="//limbopro.com/Adguard/pornhubx.js"></script>';
let body = $response.body
.replace(Old, New);
$done({body});