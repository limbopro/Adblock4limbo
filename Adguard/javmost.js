(function () {
	var magic = String.fromCharCode(Date.now() % 26 + 97) +
		Math.floor(Math.random() * 982451653 + 982451653).toString(36);
	var prop = '{{1}}',
		owner = window,
		pos;
	for (; ;) {
		pos = prop.indexOf('.');
		if (pos === -1) { break; }
		owner = owner[prop.slice(0, pos)];
		if (owner instanceof Object === false) { return; }
		prop = prop.slice(pos + 1);
	}
	delete owner[prop];
	Object.defineProperty(owner, prop, {
		set: function () {
			throw new ReferenceError(magic);
		}
	});
	var oe = window.onerror;
	window.onerror = function (msg, src, line, col, error) {
		if (typeof msg === 'string' && msg.indexOf(magic) !== -1) {
			return true;
		}
		if (oe instanceof Function) {
			return oe(msg, src, line, col, error);
		}
	}.bind();
})();