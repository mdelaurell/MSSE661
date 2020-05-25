const mysql = require('mysql');
const connect = require('../db-config');
const {
    ALL_TRAVELERS,
    SINGLE_TRAVELER,
    CREATE_TRAVELER,
    UPDATE_TRAVELER,
    DELETE_TRAVELER,
} = require('../queries/travelers.queries');
const query = require('../utils/query');
const { serverError } = require('../utils/handlers');

exports.getAllTravelers = async (req,res) => {
    const con = await connect().catch((err) => {
        throw err;
    });

    const traveler = await query(con, ALL_TRAVELERS(req.user.id), []).catch(
        serverError(res)
     );

    if (!traveler.length) {
        res.status(200).json({ msg: 'No travelers available for this user'});
    }
    res.json(travelers);
};

exports.getTravelers = async(req,res) => {
    const con = await connect().catch((err) => {
        throw err;
    });

    const traveler = await query(con, SINGLE_TRAVELER( req.params.travelerID), []).catch(
        serverError(res)
     );

     if (!traveler.length) {
        res.status(400).json({ msg: 'No traveler available.' });
      }
      res.json(traveler);
    };

exports.createTravelers = async (req,res) => {
    const con = await connect().catch((err) => {
        throw err;
    });

    // query create traveler
    const firstName = mysql.escape(req.body.travelerFirstName);
    const lastName = mysql.escape(req.body.travelerLastName);
    const emailAddress = mysql.escape(req.body.travelerEmailAddress);
    const result = await query(con, CREATE_TRAVELER(firstName, lastName,emailAddress,"active")).catch(
      serverError(res)
    );

    if (result.affectedRows !== 1) {
        res.status(200).json({ msg: 'No travelers available for this user'});
    }
    res.json(traveler);
};

exports.updateTravelers = async(req,res) => {
    const con = await connect().catch((err) => {
        throw err;
    });
    const firstName = mysql.escape(req.body.travelerFirstName);
    const lastName = mysql.escape(req.body.travelerLastName);
    const emailAddress = mysql.escape(req.body.travelerEmailAddress);
    const result = await query(con, UPDATE_TRAVELER(firstName, lastName,emailAddress,"active")).catch(
      serverError(res)
    );



    const traveler = await query(con, UPDATE_TRAVELER(req.params.travelerID), []).catch(
        serverError(res)
     );

    if (!traveler.length) {
        res.status(200).json({ msg: 'No travelers available for this user'});
    }
    res.json(traveler);
};

exports.deleteTravelers = async(req,res) => {
    const con = await connect().catch((err) => {
        throw err;
    });

    const traveler = await query(con, DELETE_TRAVELER(req.user.id, req.params.travelerID), []).catch(
        serverError(res)
     );

    if (!traveler.length) {
        res.status(200).json({ msg: 'No travelers available for this user'});
    }
    res.json(traveler);
};