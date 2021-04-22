(function() {
	// Based on uAssets
	// License: https://github.com/uBlockOrigin/uAssets/blob/master/LICENSE
	var z = window.setTimeout,
		needle = '{{1}}',
		delay = parseInt('{{2}}', 10),
		boost = parseFloat('{{3}}');
	if ( needle === '' || needle === '{{1}}' ) {
		needle = '.?';
	} else if ( needle.charAt(0) === '/' && needle.slice(-1) === '/' ) {
		needle = needle.slice(1, -1);
	} else {
		needle = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}
	needle = new RegExp(needle);
	if ( isNaN(delay) || !isFinite(delay) ) {
		delay = 1000;
	}
	if ( isNaN(boost) || !isFinite(boost) ) {
		boost = 0.05;
	}
	if ( boost < 0.02 ) {
		boost = 0.02;
	}
	if ( boost > 50 ) {
		boost = 50;
	}
	window.setTimeout = function(a, b) {
		if ( b === delay && needle.test(a.toString()) ) {
			b *= boost;
		}
		return z.apply(this, arguments);
	}.bind(window);
})();

//A much higher accuracy timer object that makes use of the node.js hrtime function call.
//The nanotimer recreates the internal javascript timing functions with higher resolution.

