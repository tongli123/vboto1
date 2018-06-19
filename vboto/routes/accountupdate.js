var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var admin = require('../model/t_admin');



router.post('/', function(req, res, next) {
    const {username, password} = req.body;
    admin.update({account:req.body.username}, {passwd:req.body.password}, function(err, docs){
        if(err){
            console.log(err);
            res.send("失败");
        }else{
            admin.find({}, function (err, comment) {
                const mineData = comment;
                res.send(mineData);
            });
        }
    })
});

module.exports = router;