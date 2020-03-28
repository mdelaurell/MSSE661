const pgp = require('pg-promise');
const queries = require('./queries/tasks.queries');

// Get the Host from Environment
const hostDB = process.env.DB_HOST || 'localhost';
const userDB = process.env.DB_USER || 'postgres';
const portDB = process.env.DB_PORT || '5432';
const passwordDB = process.env.DB_PASSWORD || 'password';
const databaseDB = process.env.DB_DATABASE || 'mikeDB';

var dbconn = ('postgres://postgres:password@localhost:5432/mikeDB');

const con = pgp(dbconn);

// Connect to the database
con(function(err) {
    if (err) throw err;
    console.log('Connected!');

    con.query(queries.CREATE_TASKS_TABLE, function(err, result) {
        if (err) throw err;
        console.log('Table created or exists already!');
    });
});

moduel.exports = con;