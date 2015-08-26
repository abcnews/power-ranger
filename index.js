module.exports = function(n, fn) {
	var i = -1, r = new Array(n);
	while (++i < n) r[i] = fn(i);
	return r;
};