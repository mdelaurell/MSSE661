exports.CREATE_TASKS_TABLE = 'CREATE TABLE IF NOT EXISTS \
    tbl_traveler(id int NOT NULL AUTO_INCREMENT, \
    username VARCHAR(20) NOT NULL, \
    password VARCHAR(32) NOT NULL, \
    firstName VARCHAR(25) NOT NULL, \
    lastName VARCHAR(30) NOT NULL, \
    emailAddress VARCHAR(50) NOT NULL, \
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP(), \
    status varchar(10) DEFAULT \'pending\', \
    PRIMARY KEY (id)); \
    \
    CREATE TABLE IF NOT EXIST \
    tbl_address( \
        id int NOT NULL AUTO_INCREMENT, \
        address1 VARCHAR(59) NOT NULL, \
        adress2 VARCHAR(50), \
        city VARCHAR(100) NOT NULL, \
        state VARCHAR(2) NOT NULL, \
        zipcode VARCHAR(9) NOT NULL, \
        created_date DATETIME DEFAULT CURRENT_TIMESTAMP(), \
        last_updated_date DATETIME DEFAULT CURRENT_TIMESTAMP(), \
        PRIMARY KEY (ID));'; 

exports.ALL_TASKS = 'SELECT * FROM traveler';

exports.SINGLE_TASKS = 'SELECT * FROM traveler where id = ?';

exports.CREATE_TASKS = 'INSERT INTO traveler (name) VALUES (?)';

exports.UPDATE_TASKS = 'UPDATE traveler set name = ?, status = ? WHERE id = ?';

exports.DELETE_TASKS = 'DELETE FROM traveler where id = ?';