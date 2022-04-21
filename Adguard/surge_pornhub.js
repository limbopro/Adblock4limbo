let ele = '<head>';
let replacex = '<head><link rel="stylesheet" href="https://limbopro.com/CSS/pornhub.css" type="text/css" /><script type="text/javascript" async="async" src="https://limbopro.com/Adguard/Adblock4limbo.user.js"></script>'
let ele_1 = '<script>';
let replacey = '<script type="text/javascript" src="//limbopro.com/Adguard/Adblock4limbo.user.js"></script><script>'
let body = $response.body
    .replace(ele, replacex)
$done({ body });