var Oldone = '<head>'
var Newone = '<head><link rel="stylesheet" href="https://limbopro.com/CSS/javbus.css" type="text/css"><script type="text/javascript"  src="//limbopro.com/Adguard/javbus.js"></script>';
let body = $response.body
.replace(Oldone, Newone);
$done({body});