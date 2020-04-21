exports.CREATE_TRAVELERS_TABLE = 'CREATE TABLE IF NOT EXISTS \
travelers(travelers_id int NOT NULL AUTO_INCREMENT, \
firstName VARCHAR(25) NOT NULL, \
lastName VARCHAR(30) NOT NULL, \
emailAddress VARCHAR(50) NOT NULL, \
created_date DATETIME DEFAULT CURRENT_TIMESTAMP(), \
status varchar(10) DEFAULT \'pending\', \
PRIMARY KEY (travelers_id))'; 

exports.ALL_TRAVELERS = 'SELECT * FROM travelers';

exports.SINGLE_TRAVELERS = 'SELECT * FROM travelers where travelers_id = ?';

exports.CREATE_TRAVELERS = 'INSERT INTO travelers (name) VALUES (?)';

exports.UPDATE_TRAVELERS = 'UPDATE travelers set name = ?, status = ? WHERE travelers_id = ?';

exports.DELETE_TRAVELERS = 'DELETE FROM travelers where travelers_id = ?';