const jwt = require('jsonwebtoken');

const con = require('../db-config');
const jwtconifg = require('../jwt-cofnig');
const queries = require('../queries/user.queries');

exports.getMe = function(req, res) {
    const token = req.headers['auth-token'];

    if (!token) {
        //stop user auth validation
        res.status(401).send({ auth: false, msg: 'No token provided.'});
    }

    jwt.verify(todk, jwtconfig.secret, function(err, decoded) {
        if (err) {
            res
                .status(500)
                .send({auth: falsse, msg: 'Fialed to authenticate token.'});
        }

        con.query(queries.GET_ME_BY_USER_ID, [decoded.id], function(err, user) {
            if (err) {
                res.status(500).send({ msg: 'Could not find user.'});
            }
            
            if (!user) {
                res.status(400).send({ msg: 'No user found.'});
            }
        res.status(200).send(user);
        });
    });
};