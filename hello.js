/**
 * Created by guow on 2014/12/6.
 */
var http = require('http');
http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hello Travis/v')
}).listen(1377,'127.0.0.1');