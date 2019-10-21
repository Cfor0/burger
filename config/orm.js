var connection = require("./connection.js");


var orm = {
    //selectAll()
    selectAll: function(tableName) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, result){
            if (err) throw err;
            console.log(result)
        });
    },
    //insertOne()
    insertOne: function(colName) {
        var queryString = "INSERT INTO ??";
        connection.query(queryString, [colName], function(err, result){
            if (err) throw err;
            console.log(result)
        });
    },
    //updateOne()
    updateOne: function(tableName, newData, colName ) {
        var queryString = "UPDATE ?? SET ?? WHERE ??";
        connection.query(queryString, [tableName, newData, colName], function(err, result){
            if (err) throw err;
            console.log(result);
        })
    }
}