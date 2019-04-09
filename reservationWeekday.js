const { DateTime } = require("luxon");
let halls = require("./halls");
let http = require('http');
let reservedHalls = [];

for (let i = 0; i < halls.length; i++) {
    if (halls[i].reservation.isReserved === true) {
        reservedHalls.push(halls[i]);
    }
}

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.write(JSON.stringify(reservedHalls));
    res.end();
}).listen(8000);

console.log("server running at http://127.0.0.1:8000");
