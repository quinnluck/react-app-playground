var http = require('http')
var date = require('./modules/DateTime')
var url = require('url')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("\n the date and time is currently: " + date.myDateTime())
    res.write('\n' + req.url);
    var q = url.parse(req.url, true).query;
    var text = q.year + " " + q.month;
    res.write("\n" + text);
    res.end('\nHello World!');
}).listen(8080);