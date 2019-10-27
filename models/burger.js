var orm = require("../config/orm");


var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(cb) {
        orm.create(function(res){
            cb(res);
        });
    },
    update: function(newData, cb) {
        orm.update(newData, cb, function(res){
            cb(res);
        })
    }
};
module.exports = burger