let http = require("http");
let halls = [];
let hallId = 0;
let hallNames = [];

function add(hallName) {
  let hallObject = {
    id: hallId,
    name: hallName,
    reservation: {
      isReserved: false,
      reservedFrom: null,
      reservedUntil: null
    }
  }

  halls.push(hallObject);
  hallId++;
}

add('Klub Kulture');
add('Hrvatski Dom');
add('Vladimir Nazor');
add('Galerija K1');
add('Ljudevit Modec');

hallNames = halls.map(function (hall) {
    return hall.name;
})

let stringResponse = hallNames.join(', ');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(stringResponse);
    res.end();
}).listen(8001);

console.log("server running at http://127.0.0.1:8001");

