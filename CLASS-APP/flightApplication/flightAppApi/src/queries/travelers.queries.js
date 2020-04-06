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



exports.ALL_TRAVELERS = 'SELECT * FROM traveler';

exports.SINGLE_TRAVELERS = 'SELECT * FROM traveler where id = ?';

exports.CREATE_TRAVELERS = 'INSERT INTO traveler (name) VALUES (?)';

exports.UPDATE_TRAVELERS = 'UPDATE traveler set name = ?, status = ? WHERE id = ?';

exports.DELETE_TRAVELERS = 'DELETE FROM traveler where id = ?';