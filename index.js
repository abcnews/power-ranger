module.exports = function(n, fn) {
	var i = -1, r = new Array(n);
	fn = fn || function(i) {return i;};
	while (++i < n) r[i] = fn(i);
	return r;
};