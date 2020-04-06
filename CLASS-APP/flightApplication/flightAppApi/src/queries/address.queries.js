exports.CREATE_ADDRESS_TABLE = 'CREATE TABLE IF NOT EXISTS \
address(id int NOT NULL AUTO_INCREMENT, \
address1 VARCHAR(59) NOT NULL, \
address2 VARCHAR(50), \
city VARCHAR(100) NOT NULL, \
state VARCHAR(2) NOT NULL, \
zipcode VARCHAR(9) NOT NULL, \
ref_id integer NOT NULL, \
ref_type char(1) NOT NULL, \
active_status BOOLEAN 1, \
created_date DATETIME DEFAULT CURRENT_TIMESTAMP(),  \
last_updated_date DATETIME DEFAULT CURRENT_TIMESTAMP(), \
PRIMARY KEY (ID));'; 

exports.ALL_TRAVELERS = 'SELECT * FROM traveler';

exports.TRAVELERS_ADDRESS = 'SELECT * FROM address WHERE id = ? AND ref_id = ?';

exports.CREATE_ADDRESS = 'INSERT INTO address (name) VALUES (?)';

exports.UPDATE_ADDRESS = 'UPDATE address set address1 = ?, address2 = ?, city = ? , state = ?, zipcode = ? WHERE id = ? and ref_id = ?';

exports.DELETE_ADDRESS = 'UPDATE address set active_status = 0 WHERE id = ? and ref_id = ?';