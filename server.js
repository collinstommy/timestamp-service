
var http = require('http');
var url = require('url');
var time2json = require('./time2json');
var express = require('express');
var app = express();

app.get('/:datestr', function(req, res){
    var json = time2json(req.params.datestr);
    res.send(JSON.stringify(json));
});

app.get('/', function(req, res){
    res.sendfile("usage.html", {root: './'});
});

app.listen(process.env.PORT || 8080);