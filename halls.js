const { DateTime } = require("luxon");

let halls = [];
let hallId = 0;

function add(hallName, reservation) {
  let hallObject = {
    id: hallId,
    name: hallName,
    reservation: {
      isReserved: reservation,
      reservedFrom: DateTime.local().toString(),
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

module.exports = halls;