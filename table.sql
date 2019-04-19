--halls

CREATE TABLE halls(
   hall_id SERIAL PRIMARY KEY,
   name TEXT NOT NULL,
   address VARCHAR(50),
   reservation TEXT NOT NULL,        
   capacity INTEGER
);



--users

CREATE TABLE users(
   user_id SERIAL PRIMARY KEY,
   username TEXT NOT NULL,
   email VARCHAR(50),
   users_password VARCHAR(50) NOT NULL,
   status TEXT NOT NULL
);



--reservations

CREATE TABLE reservations(
   reservation_id SERIAL PRIMARY KEY,
   is_reserved INTEGER,
   reservation_start TIMESTAMP,
   reservation_end TIMESTAMP,
   hall_id INTEGER REFERENCES halls (hall_id)  
);


--sessions

CREATE TABLE sessions(
   session_id SERIAL PRIMARY KEY,
   user_id INTEGER REFERENCES users (user_id)  
);
