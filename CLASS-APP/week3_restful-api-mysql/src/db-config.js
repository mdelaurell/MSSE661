const mysql = require('mysql');
const queries = require('./queries/travelers.queries');

// Get the Host from Environment
//const host = process.env.DB_HOST || 'localhost';
//const user = process.env.DB_USER || 'root';
//const password = process.env.DB_PASSWORD || 'password';
//const database = process.env.DB_DATABASE || 'mikeDB';
const host = 'localhost';
const user = 'root';
const password = 'password';
const database = 'mikeDB';

const con = mysql.createConnection({
    host,
    user,
    password,
    database
});

// Connect to the database
con.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');

    con.query(queries.CREATE_TRAVELERS_TABLE, function(err, result) {
        if (err) throw err;
        console.log('Table Traveler created or exists already!');
    });
    con.query(queries.CREATE_ADDRESS_TABLE, function(err, result) {
        if (err) throw err;
        console.log('Table Address created or exists already!');
    });
    
});

module.exports = con;