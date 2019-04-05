let halls = [];
let hallId = 0;

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

function remove(hallId) {
  for (let i = 0; i < halls.length; i++) {
    if (halls[i].id === hallId) {
      halls.splice(i, 1);
    }
  }
}

function reservation(hallId, reservedFrom, reservedUntil) {
  for (let i = 0; i < halls.length; i++) {
    if (halls[i].id === hallId) {
      halls[i].reservation.isReserved = true;
      halls[i].reservation.reservedFrom = reservedFrom;
      halls[i].reservation.reservedUntil = reservedUntil;
    }
  }
}

function checkReservation(hallId) {
  let currentTimestamp = Date.now();
  
  for (let i = 0; i < halls.length; i++) {
    if (halls[i].id === hallId) {
      if(halls[i].reservation.reservedUntil < currentTimestamp) {
        halls[i].reservation.isReserved = false;
        halls[i].reservation.reservedFrom = null;
        halls[i].reservation.reservedUntil = null;
      }
    }
  }
  
}


// empty halls array
console.log('Halls: ', halls);

add('Klub Kulture');
add('Hrvatski Dom');
add('Vladimir Nazor');
add('Galerija K1');
add('Ljudevit Modec');

// halls array after adding 5 objects
console.log('Halls: ', halls);


remove(3);

// halls array after removing object with id 3
console.log('Halls: ', halls);


remove(4);

// halls array after removing object with id 4
console.log('Halls: ', halls);


// reserve hall with id 2 from 04/01/2018 until 04/02/2018
reservation(2, 10142019, 10152019);
console.log('Halls: ', halls);


// check reservation for hall with id 2
checkReservation(2);
console.log('Halls: ', halls);
