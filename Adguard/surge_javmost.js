let regex_1 = '<title>'
let body_1 = '<link rel=\"stylesheet\" href=\"https://limbopro.com/CSS/javmost.css" type=\"text/css\"><script type="text/javascript" async="async" src="//limbopro.com/Adguard/javmost.js"></script><title>'
let regex_2 = '<!--  <script type="text/javascript">';
let body_2 = "<script>function remove_ads () {var i;var _xcss = [\"div[style*='2147483647']\",\"div[style*='300000']\",\"a\",\"a[href*='watch']\",\"img\"];var x_catch = document.querySelectorAll( _xcss );for (i=0; i < x_catch.length; i++){var remove_css = [\"href\"];x_catch[i].removeAttribute( remove_css );}}</script><!--  <script type=\"text/javascript\">";
let body = $response.body
.replace(regex_1, body_1)
//.replace(regex_2, body_2)
$done({body});