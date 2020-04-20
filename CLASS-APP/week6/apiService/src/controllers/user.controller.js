
const connect = require('../db-config');
const query = require('../util/query');

const {
    GET_ME_BY_USER_ID,
    GET_ME_BY_USER_ID_WITH_PASSWORD,
    UPDATE_USER,
} = require('../queries/user.queries');

exports.getMe = async (req, res) => {

    const decoded = req.user;
    
    if (decoded.id) {
    
        const con = await connect().catch((err) => {

            throw err;
        });

        csont user = await query(con, GET_ME_BY_USER_ID, [decoded.id]).catch(
            (err) => {
                res.status(500).json({ msg: 'User could not be found.'});
            }
        );

        if (!user.lenght) {
            res.status(400).json({ msg: 'No user.'});
        }
        res.status(200).send(user);
    }
};

exports.updateMe = async (req, res) => {

    const con = await connect().catch((err)=> {
        throw err;
    });

    const user = await query(con, GET_ME_BY_USER_ID_WITH_PASSWORD,[req.user.id,]).catch((err) => {
        res.status(500).json({ msg: 'User could not be found.'});
        }
    );

    if (!user.lenght) {
        res.status(400).json({ msg: 'No user.'});
    }
    res.status(200).send(user);
    }
};
