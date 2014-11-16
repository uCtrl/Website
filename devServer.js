var express = require('express'),
	app = express(),
	open = require("open"),
	port = 64242,
	mode = process.argv[2] || "dev";

if (mode == 'prod') {
	app.use(express.static(__dirname + '/build/prod'));

	app.listen(port, function() {
		open('http://localhost:' + port);
	});
} else {
	app.use(express.static(__dirname + '/public'));

	app.listen(port, function() {
		open('http://localhost:' + port);
	});
}
