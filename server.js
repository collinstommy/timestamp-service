
var http = require('http');
var url = require('url');
var time2json = require('./time2json');
var express = require('express');
var app = express();
var port = process.argv[2];

app.get('/:datestr', function(req, res){
    var json = time2json(req.params.datestr);
    res.send(JSON.stringify(json));
});

app.get('/', function(req, res){
    res.sendfile("usage.html", {root: './'});
});

app.listen(port);

/*
var server = http.createServer(function (req, res) {
var param = url.parse(req.url, true).path;
var parsedString = param.substring(1, param.length);

var json = time2json(decodeURI(parsedString));
  sendResponse(JSON.stringify(json),res);
});
server.listen(port);


function sendResponse(data, res){
    res.writeHead(200, { 'content-type': 'application/json' });
    res.write(data);
    res.end();
}*/
