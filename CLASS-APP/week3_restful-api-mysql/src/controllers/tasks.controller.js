const con = require('../db-config');
const queries = require('../queries/tasks.queries');

exports.getAllTasks = function(req,res) {
    con.quiery(queries.ALL_TASKS, function(err, result, fields){
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
};

exports.getTasks = function(req,res) {
    con.quiery(queries.SINGLE_TASKS, [req.params.taskID], function(err, data){
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
};

exports.createTasks = function(req,res) {
    con.quiery(queries.INSERT_TASK, [req.params.taskID], function(err, result){
        if (err) {
            res.send(err);
        }
        console.log(result);
        res.json({message:  'Number of records inserted: ' + result.affectedRows});
    });
};

exports.updateTasks = function(req,res) {
    con.quiery(queries.UPDATE_TASKS, 
        [req.body.name, req.body.status, req.params.taskID],
        function(err, result, fields){
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
};

exports.deleteTasks = function(req,res) {
    con.quiery(queries.DELETE_TASKS, [req.params.taskID],function(err, result, ){
        if (err) {
            res.send(err);
        }
        res.json({message: 'Deleted successfully. ID =' + req.params.taskID});
    });
};