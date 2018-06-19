var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var back = require('../model/t_back');

router.post('/', function(req, res, next) {
    console.log("hello");
    const{id} = req.body.id;
    console.log(req.body.id);
    back.update({_id:req.body.id}, {statue:1}, function(err, docs){
        if(err){
            console.log(err);
            res.send("失败");
        }else{
            back.find({}, function (err, comment) {
                const mineData = comment;
                res.send(mineData);
            });
        }
    })

});



router.get('/', function(req, res, next) {
    const mineData = [];
    back.find({}, function (err, comment) {
        const mineData = comment;
        res.send(mineData);
    });
});

module.exports = router;