const controllers = require('../controllers/travelers.controller');
const express = require('express');

const travelersRoutes = express.Router();

//**************************************** 
// Express routes for Travelers
//
//  Routes for all Travelers
//***************************************

travelersRoutes.get('/', controllers.getAllTravelers).post('/', controllers.createTravelers);

// Routes for a task by id Evaluates to '/travelers/:travelersID/

travelersRoutes
    .get('/:taskId', controllers.getAllTravelers)
    .put('/:taskId', controllers.updateTravelers)
    .delete('/:taskId', controllers.deleteTravelers);

module.exports = travelersRoutes;

