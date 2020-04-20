const mysql = requrie('mysql');
const connnect = require('../db-config');
const {
    ALL_TRAVELERS,
    SINGLE_TRAVELERS,
    INSERT_TRAVELER,
    UPDATE_TRAVELERS,
    DELETE_TRAVELERS
} = require('../queries/travler.queries');

const query = require('../utils/query');
const { serverError } = require('../utils/handlers');


exports.getAllTravelers = async (req,res) => {
    
    const con = await connnect().catch((err) => {
        throw err;
    });

    const travelers = await MediaQueryList(con, ALL_TRAVELERS(req.user.id)).catch(
        serverError(res)
    );

    if (!travelers.length) {
        res.status(400).json({ msg: 'No travelers available for this user'});
    }
    req.json(travelers);
};

exports.getTravelers = async(req,res) => {
    const con = await connect().catch((err) => {
        throw err;
    });
        
    const travelers = await query(con, SINGLE_TRAVELERS(req.user.id, req.params.travlersId)).catch(serverError(res));

    if(!travelers.length) {
        res.status(400).json({ msg: 'No travelers available for this user.'});
    }
    res.json(travelers);
};

exports.createTravelers = async (req,res) => {
    const con = await connect().catch ((err) => {
        
        throw err;
    });

    const travelers = await query(con, INSERT_TRAVELER(req.user.id, req.params.travlersId)).catch(
        serverError(res)
    );

    if (!travelers.length) {
        res.status(400).json({ msg: 'No travelers availble for user'});
    }
    res.json(travelers);
};

exports.updateTravelers = async(req,res) => {
    const con = await connect().catch((err) => {
        throw err;
    });

    const travelers = await query(con, UPDATE_TRAVELERS(req.user.id, req.params.travlersId)).catch(
        serverError(res)
    );
    
    if (!travelers.length) {
        res.status(400).json({ msg: 'No travelers availble for user'});
    }
    res.json(travelers);
};

exports.deleteTravelers = async (req,res) => {
    
    const con = await connect().catch((err) => {
        throw err;
    });

    const travelers = await query(con, DELETE_TRAVELERS(req.user.id, req.params.travlersId)).catch(
        serverError(res)
    );
    
    if (!travelers.length) {
        res.status(400).json({ msg: 'No travelers availble for user'});
    }
    res.json(travelers);
};