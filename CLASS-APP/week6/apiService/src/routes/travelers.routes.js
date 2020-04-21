const controllers = require('../controllers/travelers.controller');
const express = require('express');

const travelersRoutes = express.Router();

//**************************************** 
// Express routes for Travelers
//
//  Routes for all Travelers
//***************************************

travelersRoutes.get('/', controllers.getAllTravelers).post('/', controllers.createTravelers);

// Routes for a traveler by id Evaluates to '/travelers/:travelersID/

travelersRoutes
    .get('/:travelerId', controllers.getAllTravelers)
    .put('/:travelerId', controllers.updateTravelers)
    .delete('/:travelerId', controllers.deleteTravelers);

module.exports = travelersRoutes;

