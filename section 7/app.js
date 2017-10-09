var http = require('http');
var fs = require('fs');

http.createServer(function(req,res) {
    res.writeHead(200,{'content-type': 'text/html'});
    var html = fs.readFileSync(__dirname + '/index.html','utf8');
    var message = 'Hello World!';

    res.end(html.replace('{message}',message));

}).listen(1337,'127.0.0.1');