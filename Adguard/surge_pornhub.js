let Old = '<head>'
let New = '<head><link rel="stylesheet" href="https://limbopro.com/CSS/pornhub.css" type="text/css"><script type="text/javascript" src="//limbopro.com/Adguard/pornhub_v.js"></script>';
let body = $response.body
.replace(Old, New);
$done({body});