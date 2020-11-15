var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
    console.log("Url: " + req.url);
    if (req.url === '/index' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
    }

});

server.listen(8000, '127.0.0.1');
console.log("Port: 8000");



