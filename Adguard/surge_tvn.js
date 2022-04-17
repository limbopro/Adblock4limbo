let ele = '<head>'
let elere = '<head><link rel="stylesheet" href="https://limbopro.com/CSS/tvn.css" type="text/css">';
let ele2 = '</body>';
let ele2re = '<script type="text/javascript"  src="//limbopro.com/Adguard/tvn.js"></script>';
let body = $response.body
    .replace(ele2, ele2re)
    .replace(ele, elere);
$done({ body });