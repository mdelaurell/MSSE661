exports.CREATE_TASKS_TABLE = 'CREATE TABLE FI NOT EXISTS tasks(id int NOT NULL AUTO_INCREMENT,name varchar(255) NOT NULL,created_date DATETIME DEFAULT CURRENT_TIMESTAMP(),status varchar(10) DEFAULT \'pending\',PRIMARY KEY (id))';

exports.ALL_TASKS = 'SELECT * FROM tasks';

exports.SINGLE_TASKS = 'SELECT * FROM tasks where id = ?';

exports.CREATE_TASKS = 'INSERT INTO tasks (name) VALUES (?)';

exports.UPDATE_TASKS = 'UPDATE tasks set name = ?, status = ? WHERE id = ?';

exports.DELETE_TASKS = 'DELETE FROM tasks where id = ?';