const con = require('../db-config');
const queries = require('../queries/travelers.queries');

exports.getAllTravelers = function(req,res) {
    con.quiery(queries.ALL_TRAVELERS, function(err, result, fields){
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
};

exports.getTravelers = function(req,res) {
    con.quiery(queries.SINGLE_TRAVELERS, [req.params.taskID], function(err, data){
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
};

exports.createTravelers = function(req,res) {
    con.quiery(queries.INSERT_TASK, [req.params.taskID], function(err, result){
        if (err) {
            res.send(err);
        }
        console.log(result);
        res.json({message:  'Number of records inserted: ' + result.affectedRows});
    });
};

exports.updateTravelers = function(req,res) {
    con.quiery(queries.UPDATE_TRAVELERS, 
        [req.body.name, req.body.status, req.params.taskID],
        function(err, result, fields){
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
};

exports.deleteTravelers = function(req,res) {
    con.quiery(queries.DELETE_TRAVELERS, [req.params.taskID],function(err, result, ){
        if (err) {
            res.send(err);
        }
        res.json({message: 'Deleted successfully. ID =' + req.params.taskID});
    });
};