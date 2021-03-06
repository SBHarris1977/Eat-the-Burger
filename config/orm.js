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
insertOne: function(newBurger, cb) {
    console.log("BURGER", newBurger)
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?)"
        connection.query(queryString, newBurger, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
    }); 
},
//update a burger update burgers set column_name = value where id =
updateOne: function(condition, cb) {
    var queryString = "UPDATE burgers SET devoured=1 WHERE ";
       queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
    });
},
burgerfunct: function() {}
};

//export orm object to the model burger.js
module.exports = orm;
