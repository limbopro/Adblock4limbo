let css = '<head>'
let css_X = '<head><link rel=\"stylesheet\" href=\"https://limbopro.com/CSS/Adblock4limbo.user.css\" type=\"text/css\">'
var js = '</body>'
var js_X = '<script type=\"text/javascript\"  async="async" src=\"https://limbopro.com/Adguard/Adblock4limbo.user.js\"></script></body>'
let body = $response.body
.replace(css, css_X)
.replace(js, js_X);
$done({body});