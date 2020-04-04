exports.CREATE_TASKS_TABLE = 'CREATE TABLE IF NOT EXISTS \
traveler(id int NOT NULL AUTO_INCREMENT, \
    username VARCHAR(20), \
    password VARCHAR(32), \
    firstName VARCHAR(25), \
    lastName VARCHAR(30), \
    emailAddress VARCHAR(50), \
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP(), \
    status varchar(10) DEFAULT \'pending\', \
    PRIMARY KEY (id))';

exports.ALL_TASKS = 'SELECT * FROM traveler';

exports.SINGLE_TASKS = 'SELECT * FROM traveler where id = ?';

exports.CREATE_TASKS = 'INSERT INTO traveler (name) VALUES (?)';

exports.UPDATE_TASKS = 'UPDATE traveler set name = ?, status = ? WHERE id = ?';

exports.DELETE_TASKS = 'DELETE FROM traveler where id = ?';