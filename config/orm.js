var connection = require("./connection.js");


var orm = {
    //selectAll()
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result)
            console.log(result)
        });
    },
    //insertOne()
    insertOne: function(cb) {
        var queryString = "INSERT INTO burger_name";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
            console.log(result)
        });
    },
    //updateOne()
    updateOne: function(newData, cb) {
        var queryString = "UPDATE burgers SET burger_name = ? WHERE ??";
        connection.query(queryString, [newData], function(err, result){
            if (err) throw err;
            cb(result);
            console.log(result);
        })
    }
};

module.exports = orm