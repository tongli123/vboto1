var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var admin = require('../model/t_admin');



router.post('/', function(req, res, next) {
    const {username, password} = req.body;
    var myDate = new Date();
    admin.create({
        account: req.body.username,
        passwd: req.body.password,
        addtime: myDate.toLocaleDateString(),
        statue: 0,
        isdel: 0,
        code: 1,
    }, function (error, doc) {
        if (error) {
            console.error(error);
            res.send("失败");
        } else {
            console.error(doc);
            admin.find({}, function (err, comment) {
                const mineData = comment;
                res.send(mineData);
            });
        }

    });
});


module.exports = router;