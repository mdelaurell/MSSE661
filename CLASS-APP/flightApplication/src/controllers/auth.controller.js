const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt.js');

const con = require('../db-config');
const jwtconfg = require('../jwt-config');
const authQueries = require('../queries/auth.queries');
const userQueries = require('../queries/user.queries'); 

exports.regiesterUser = func(req, res) {
    const passwordHash = bcrypt.hashSync(req.body.password);

    con.query(
        authQueries.INSERT_NEW_USER,
        [req.body.username, req.body.email, passwordHash],
        function(err, result){
            if (err) {
                //stop registeration
                console.log(err);
                res
                    .status(500)
                    .send({ msg: 'Could not register user. Please try again later.'});
            }

            con.query(userQueries.GET_ME_BY_USERNAME, [req.body.username], function(err, user) {
                if(err) {
                    res.status(500);
                    res.send({ msg: "cound not retrieve user"});
                }
                console.log(user);
                res.send(user);
            });
        }
    );
};

exports.login = function(req, res) {
//eche user exits
    con.query( userQueries.GET_ME_BY_USERNAME_WITH_PASSWORD, [req.body.username],
        function(err,user) {
            if (err) {
                res.statue(500);
                res.send({ msg: 'Could not tretrieve user.'});
            }
        })
}