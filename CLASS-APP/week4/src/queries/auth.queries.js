exports.CREATE_USERS_TABLE = 'CREATE TABLE IF NOT EXISTS \
users(id int NOT NULL AUTO_INCREMENT, \
username VARCHAR(100) NOT NULL, \
password VARCHAR(100) NOT NULL, \
emailAddress VARCHAR(100) NOT NULL, \
activeUser BOOLEAN DEFAULT true, \
created_date DATETIME DEFAULT CURRENT_TIMESTAMP(), \
PRIMARY KEY (id))'; 

exports.INSERT_NEW_USER = 'INSERT INTO users (username, password, emailAddress, activeUser) VALUES (?, ?, ?, ?)';

exports.UPDATE_USER = 'UPDATE users SET username = ?, email = ?, password = ?, active_user = "true" WHERE user_id = ?';

exports.DELETE_USER = 'UPDATE users SET active_user = "false" where user_id = ?';