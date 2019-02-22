var http = require('http')
var date = require('./modules/DateTime')
var url = require('url')
var fs = require('fs')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.write("\n the date and time is currently: " + date.myDateTime())
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    res.write(filename)
    fs.readFile(filename, function(err, data) {
        if(err) {
//            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 File not found");
        }
//        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data);
        return res.end();
    });
}).listen(8080);