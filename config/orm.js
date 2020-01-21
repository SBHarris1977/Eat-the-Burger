//import mysql
var connection = require("../config/connection.js");

//Select all burgers
var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    //add or insert a new burger
insertOne: function(table, cols, vals, cb) {
    var query = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += " (";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
    }); 
},
//update a burger update burgers set column_name = value where id =
updateOne: function(condition, cb) {
    var queryString = "UPDATE burgers SET devoured = 1 WHERE ";
       queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
    });
}
};

//export orm object to the model burger.js
module.exports = orm;
