var express = require("express");
var router = express.Router();

//Import the burger.js model to use the database functions
var burger = require("../models/burger");

//Create route to retrieve data
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            cats: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//create route to add a burger
router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result){
        //send back the id of the new burger
        res.json({id: result.insertId });
    });
});

//update route to update a burger
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            if (result.changeRows === 0) {
                //if no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

//export routes to server.js
module.exports = router;