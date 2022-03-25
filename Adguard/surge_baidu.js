
let Oldone = '</style>'
let Newone = '.ec_ad_results{display:none!important}</style>';
let body = $response.body
.replace(Oldone, Newone);
$done({body});


/*
let Oldone = '</head>'
let Newone = '<link rel=\"stylesheet\" href=\"https://limbopro.com/CSS/baidu.css\" type=\"text/css\"></head>';
let body = $response.body
.replace(Oldone, Newone);
$done({body});
*/
