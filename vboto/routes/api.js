var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var admin = require('../model/t_admin');

router.post('/', function(req, res, next) {
    const{username} = req.body;
    admin.remove({account: req.body.username}, function(err, docs){
        if(err){
            console.log(err);
        }else {
            admin.find({}, function (err, comment) {
                const mineData = comment;
                res.send(mineData);
            });
        }
    })

});



router.get('/', function(req, res, next) {
    const mineData = [];
    admin.find({}, function (err, comment) {
        const mineData = comment;
        res.send(mineData);
    });
});

module.exports = router;