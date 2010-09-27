#!/usr/local/bin/node

var http = require('http');
var sys = require('sys');
var url = require('url');

var db = require('./lib/db');

sys.debug("starting...");
sys.debug(db.version);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello\n');
  setTimeout(function() {
	  res.end('Hello World\n');
  }, 2000)
  sys.debug(JSON.stringify(url.parse(req.url)));
}).listen(8124, "0.0.0.0");
