var express = require('express'),
	exec = require('child_process').exec,
	app = express(),
	open = require("open"),
	port = 64242;


app.use(express.static(__dirname + '/public'));

// Get the bower libs, install them and start preview
exec('clean-bower-install -i', function () {
	open('http://localhost:' + port);
});


app.listen(port);
