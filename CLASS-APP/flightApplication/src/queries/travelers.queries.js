exports.CREATE_TRAVELERS_TABLE = 'CREATE TABLE IF NOT EXISTS \
traveler(id int NOT NULL AUTO_INCREMENT, \
username VARCHAR(20) NOT NULL, \
password VARCHAR(32) NOT NULL, \
firstName VARCHAR(25) NOT NULL, \
lastName VARCHAR(30) NOT NULL, \
emailAddress VARCHAR(50) NOT NULL, \
created_date DATETIME DEFAULT CURRENT_TIMESTAMP(), \
status varchar(10) DEFAULT \'pending\', \
PRIMARY KEY (id))'; 

exports.CREATE_ADDRESS_TABLE = 'CREATE TABLE IF NOT EXISTS \
address(id int NOT NULL AUTO_INCREMENT, \
address1 VARCHAR(59) NOT NULL, \
address2 VARCHAR(50), \
city VARCHAR(100) NOT NULL, \
state VARCHAR(2) NOT NULL, \
zipcode VARCHAR(9) NOT NULL, \
created_date DATETIME DEFAULT CURRENT_TIMESTAMP(),  \
last_updated_date DATETIME DEFAULT CURRENT_TIMESTAMP(), \
PRIMARY KEY (ID));'; 

exports.ALL_TRAVELERS = 'SELECT * FROM traveler';

exports.SINGLE_TRAVELERS = 'SELECT * FROM traveler where id = ?';

exports.CREATE_TRAVELERS = 'INSERT INTO traveler (name) VALUES (?)';

exports.UPDATE_TRAVELERS = 'UPDATE traveler set name = ?, status = ? WHERE id = ?';

exports.DELETE_TRAVELERS = 'DELETE FROM traveler where id = ?';