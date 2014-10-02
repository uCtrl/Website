var express = require('express'),
	app = express(),
	open = require("open"),
	port = 64242;

app.use(express.static(__dirname + '/public'));

open('http://localhost:' + port);

app.listen(port);
