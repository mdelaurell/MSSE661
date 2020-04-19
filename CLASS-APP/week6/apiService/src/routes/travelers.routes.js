const express = require('express');

const {
    getAllTravelers,
    createTraveler,
    getTraveler,
    updateTraveler,
    deleteTraveler,
} = require('../controllers/travelers.controller');

const canAccess = require('../middleware/auth.middleware');

const travelersRoutes = express.Router();

//**************************************** 
// Express routes for Travelers
//
//  Routes for all Travelers
//***************************************

travelersRoutes.get('/', canAcess, getAllTravelers).post('/', canAccess, createTraveler);

// Routes for a task by id Evaluates to '/travelers/:travelersID/

travelersRoutes
    .get('/:taskId', canAccess, getTravelers)
    .put('/:taskId', canAccess, updateTravelers)
    .delete('/:taskId', canAccess, deleteTravelers);

module.exports = travelersRoutes;

