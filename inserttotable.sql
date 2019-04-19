--halls  


INSERT INTO halls (hall_id,name,address,reservation,capacity)
    VALUES 
    (1, 'Multimedijski centar', 'Tomislavova 4', 'reserved', 150),
    (2, 'KPC', 'Gajeva 3', 'reserved', 200),
    (3, 'Hrvatski dom', 'A.G.Matosa 7', 'not reserved', 400),
    (4, 'Galerija K1', 'V.Nazora 23', 'not reserved', 200);


--users


INSERT INTO users (userid, username, email, users_password, status)
VALUES (100, 'marin', 'marin.k@gmail.com', 'mrt778', 'admin');

INSERT INTO users (userid, username, email, users_password, status)
VALUES (101, 'luka', 'lukahor@gmail.com', 'bur558', 'admin');

INSERT INTO users (userid, username, email, users_password, status)
VALUES (102, 'tomislav', 'tomob@gmail.com', 'tomy552', 'admin');

INSERT INTO users (userid, username, email, users_password, status)
VALUES (103, 'neven', 'nevenk@gmail.com', 'ner988', 'admin');


--reservations


INSERT INTO reservations (reservation_id, is_reserved, reservation_start, reservation_end, hall_id)
VALUES (111, 1, '2019-07-12 09:20:41', '2019-07-15 13:50:33', 1);

INSERT INTO reservations (reservation_id, is_reserved, reservation_start, reservation_end)
VALUES (111, 0, '2019-08-02 10:10:35', '2019-08-15 12:30:11');

INSERT INTO reservations (reservation_id, is_reserved, reservation_start, reservation_end, hall_id)
VALUES (111, 1, '2019-08-15 013:20:55', '2019-08-23 13:50:33', 2);


--sessions

INSERT INTO sessions (session_id, user_id)
    VALUES 
    (2345, 100),
    (1455, 102),
    (3466, 103);