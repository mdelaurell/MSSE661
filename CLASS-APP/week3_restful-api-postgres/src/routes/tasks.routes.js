const controllers = require('../controllers/tasks.controller');
const express = require('express');

const tasksRoutes = express.Router();

//**************************************** 
// Express routes for Tasks
//
//  Routes for all Tasks
//***************************************

tasksRoutes.get('/', controllers.getAllTasks).post('/', controllers.createTask);

// Routes for a task by id Evaluates to '/tasks/:tasksID/

tasksRoutes
    .get('/:taskId', controllers.getAllTasks)
    .put('/:taskId', controllers.updateTask)
    .delete('/:taskId', controllers.deleteTask);

moduel.exports = tasksRoutes;

