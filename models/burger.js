var orm = require("../config/orm");


var burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    insertOne: function(cb) {
        orm.insertOne(function(res){
            cb(res);
        });
    },
    updateOne: function(newData, cb) {
        orm.updateOne(newData, cb, function(res){
            cb(res);
        })
    }
};
module.exports = burger