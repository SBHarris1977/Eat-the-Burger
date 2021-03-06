//import orm to create functions that will interact with the database
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    //the insert statement, the variables cols ans vals are arrays.
    insertOne: function(burger_name, devoured, cb) {
        orm.insertOne(burger_name, devoured, function(res) {
            cb(res);
        });
    },
//updating the burgers table
updateOne: function(condition, cb) {
    orm.updateOne(condition, function(res) {
        cb(res);
    });
}
};
//export the database functions for the burgersController.js
module.exports = burger;