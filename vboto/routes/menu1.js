var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var menu = require('../model/t_menu');



//获得一级导航栏
router.get('/', function(req, res, next) {
    const mineData = [];
    menu.find({parentid:0,statue:0}, function (err, comment) {
        const mineData = comment;
        res.send(mineData);
    });
});
//获得二级导航栏
router.get('/parentid', function(req, res, next) {
    const mineData = [];
    menu.find({parentid:1,statue:0}, function (err, comment) {
        const mineData = comment;
        res.send(mineData);
    });
});







module.exports = router;