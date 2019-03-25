let http = require("http");
let halls = [];
let hallId = 0;
let hallNames = [];

function add(hallName, reservation) {
  let hallObject = {
    id: hallId,
    name: hallName,
    reservation: {
      isReserved: reservation,
      reservedFrom: null,
      reservedUntil: null
    }
  }

  halls.push(hallObject);
  hallId++;
}

add('Klub Kulture', true);
add('Hrvatski Dom', true);
add('Vladimir Nazor', false);
add('Galerija K1', true);
add('Ljudevit Modec', false);

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

