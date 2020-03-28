const controllers = require('../controllers/tasks.controller');
const express = require('express');

const tasksRoutes = express.Router();



tasksRoutes.get('/', controllers.getAllTasks).post('/', controllers.createTask);


tasksRoutes
    .get('/:taskId', controllers.getAllTasks)
    .put('/:taskId', controllers.updateTask)
    .delete('/:taskId', controllers.deleteTask);

moduel.exports = tasksRoutes;

