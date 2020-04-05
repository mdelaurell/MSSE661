exports.CREATE_USERS_TABLE = 'CREATE TABLE IF NOT EXISTS users( \
    user_id int NOT NULL AUTO_INCREMENT, \
    username varchar(50) NOT NULL UNIQUE \
    emailAddress varchar(75) NOT NULL, \
    password varchar(255) NOT NULL, \
    active_user boolean NOT NULL, \
    PRIMARY KEY (user_id) \
    )';

    exports.INSERT_NEW_USER = 'INSERT INTO USERS(username, email, password) VALUES (?, ?, ?)';

    exports.UPDATE_USER = 'UPDATE users SET username = ?, email = ?, password = ?, active_user = "true" WHERE user_id = ?';

    exports.DELETE_USER = 'UPDATE users SET active_user = "false" where user_id = ?';