/**
 * Cookie support.
 *
 * @type {{set: set, get: get, test: test}}
 */
var cookie = {
	/**
	 * Set cookie value.
	 *
	 * @param name {string}
	 * @param value {string}
	 * @param expDays {number}
	 */
	set: function (name, value, expDays) {
		var d = new Date();
		d.setTime(d.getTime() + (expDays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toUTCString();
		document.cookie = name + "=" + value + "; " + expires;
	},
	/**
	 * Get cookie value.
	 *
	 * @param name {string}
	 * @returns {string}
	 */
	get: function (name) {
		name += "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1);
			if (c.indexOf(name) != -1) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	},
	/**
	 * Test if cookie exist.
	 *
	 * @param name {string}
	 * @returns {boolean}
	 */
	test: function (name) {
		var val = cookie.get(name);
		return val == "";
	}
};

/**
 * Allow to search in a array of object
 *
 * @param myArray {Array}
 * @param searchTerm {string}
 * @param property {string}
 * @returns {number}
 */
function arrayObjectIndexOf(myArray, searchTerm, property) {
	for(var i = 0, len = myArray.length; i < len; i++) {
		if (myArray[i][property] === searchTerm) return i;
	}
	return -1;
}

var langSelect = $('.selectpicker');
