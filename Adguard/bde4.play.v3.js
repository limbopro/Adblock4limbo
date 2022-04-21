/* 视频页广告加速 */

(function () {
	// Based on uAssets
	// License: https://github.com/uBlockOrigin/uAssets/blob/master/LICENSE
	//  nano-setTimeout-booster.js
	var z = window.setInterval,
		needle = '{{1}}',
		delay = parseInt('{{2}}', 10),
		boost = parseFloat('{{3}}');
	if (needle === '' || needle === '{{1}}') {
		needle = '.?';
	} else if (needle.charAt(0) === '/' && needle.slice(-1) === '/') {
		needle = needle.slice(1, -1);
	} else {
		needle = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}
	needle = new RegExp(needle);
	if (isNaN(delay) || !isFinite(delay)) {
		delay = 1000;
	}
	if (isNaN(boost) || !isFinite(boost)) {
		boost = 0.05;
	}
	if (boost < 0.02) {
		boost = 0.02;
	}
	if (boost > 50) {
		boost = 50;
	}
	window.setInterval = function (a, b) {
		if (b === delay && needle.test(a.toString())) {
			b *= boost;
		}
		return z.apply(this, arguments);
	}.bind(window);
})();



/* 禁止新页面跳转 */

var _blank = document.querySelectorAll("a");
var i;
for (i = 0; i < _blank.length; i++) {
	_blank[i].target = "_self";
}

/* 延迟1秒中清除广告元素以此避免bde4反屏蔽检测 */

setTimeout(() => {
	var newstyle = "a[target*=_new] {display:none !important;}";
	var creatcss = document.createElement("style");
	creatcss.innerHTML = newstyle;
	document.getElementsByTagName('head')[0].appendChild(creatcss)
}, 500);