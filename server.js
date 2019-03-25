let http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Hello world!");
    res.end();
}).listen(8000);

console.log("server running at http://127.0.0.1:8000");

