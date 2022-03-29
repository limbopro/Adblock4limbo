let regex_head = '<head>';
let Style = '<head><link rel="stylesheet" href="https://limbopro.com/CSS/contentFarm.css">';
let regex_body = '</body>';
let JavaScript = '<script async="async" src="https://limbopro.com/Adguard/contentFarm/contentFarm.js"></script></body>';
let body = $response.body
.replace(regex_head, Style)
.replace(regex_body, JavaScript);
$done({body});