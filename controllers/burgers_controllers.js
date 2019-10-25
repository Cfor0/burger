var express = require("express");

var router = express.Router();


var burger = require("./models/burgers.js");


router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    })
});

router.post("api/burgers", function(req, res){
    burger.insertOne([req.body.name], function(result){
        res.json({id: result.insertId})
    })
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne(
        {
            burger_name: req.body.name
        }
    )
});

module.exports = router