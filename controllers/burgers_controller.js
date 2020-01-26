var express = require("express");
var router = express.Router();

//Import the burger.js model to use the database functions
var burger = require("../models/burger.js");

//Create route to retrieve data
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//create route to add a burger
router.post("/api/burgers", function(req, res) {
    console.log("BURGER DATA", req.body.name)
    burger.insertOne(req.body.name, function(result){
        //send back the id of the new burger
        res.json({ id: result.insertId });
    });
});

//update route to update a burger
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.updateOne(condition, function(result) {
      //  {
      //      devoured: req.body.devoured
       // },
      //  condition,
      //  function(result) {
          if (result.changeRows === 0) {
                //if no rows were changed, then the ID must not exist, so 404
               return res.status(404).end();
            } else {
            res.status(200).end();
        }
    });
});

//export routes to server.js
module.exports = router;