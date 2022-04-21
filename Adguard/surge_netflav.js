
let style_ele = '<head>'
let style_ele_new = '<head><link rel=\"stylesheet\" href=\"https://limbopro.com/CSS/netflav.css\" type=\"text/css\">'
var body_ele = '</body>'
var body_ele_new = '<script type=\"text/javascript\" async="async" src=\"//limbopro.com/Adguard/netflav.js\"></script></body>'
let body = $response.body
    .replace(style_ele, style_ele_new)
    .replace(body_ele, body_ele_new);
$done({ body });