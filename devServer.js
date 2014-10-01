var express = require('express');
var app = express();
var open = require("open");
var port = 64242;

app.use(express.static(__dirname + '/public'));

open('http://localhost:' + port);

app.listen(port);


