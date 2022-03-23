let Oldone = '<title>'
let Newone = '<link rel="stylesheet" href="https://limbopro.com/CSS/avple.css" type="text/css"><script type="text/javascript"  src="//limbopro.com/Adguard/avple.js"></script><title>';
let body = $response.body
.replace(Oldone, Newone);
$done({body});