let regex_1 = '<title>'
let body_1 = '<link rel=\"stylesheet\" href=\"https://limbopro.com/CSS/javmost.css" type=\"text/css\"><script type="text/javascript" async="async" src="//limbopro.com/Adguard/javmost.js"></script><title>'
let body = $response.body
    .replace(regex_1, body_1)
$done({ body });