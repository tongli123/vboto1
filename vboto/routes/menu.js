var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var menu = require('../model/t_menu');

//删除
router.post('/', function(req, res, next) {
    const{id} = req.body;
    menu.remove({_id: req.body.id}, function(err, docs){
        if(err){
            console.log(err);
        }else {
            menu.find({}, function (err, comment) {
                var  mineData = comment;
                res.send(mineData);
            });
        }
    })

});


//获得数据
router.get('/', function(req, res, next) {
    const mineData = [];
    menu.find({}, function (err, comment) {
        const mineData = comment;
        res.send(mineData);
    });
});

//增加
router.post('/addmenu', function(req, res, next) {
    const {name, parentid} = req.body;
    var myDate = new Date();
    menu.create({
        name: req.body.name,
        parentid: req.body.parentid,
        adduser:'admin',
        addtime: myDate.toLocaleDateString(),
        updateuser:'admin',
        updatetime:myDate.toLocaleDateString(),
        statue: 0,
        isdel: 0,
    }, function (error, doc) {
        if (error) {
            console.error(error);
            res.send("失败");
        } else {
            console.error(doc);
            menu.find({}, function (err, comment) {
                const mineData = comment;
                res.send(mineData);
            });
        }

    });
});


//更新
router.post('/update', function(req, res, next) {
    var myDate = new Date();
    const {id,name,parentid} = req.body;

    menu.findById(req.body.id, function (err, tank) {
        if (err) return handleError(err);
        tank.set({ name: req.body.name });
        tank.set({parentid:req.body.parentid });
        tank.set({updatetime:myDate.toLocaleDateString()})
        tank.save(function (err, updatedTank) {
            if (err) {
                return handleError(err);
            }else{
                menu.find({}, function (err, comment) {
                    const mineData = comment;
                    res.send(mineData);
                });
            }
        });
    });

});

module.exports = router;