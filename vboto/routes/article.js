var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ari = require('../model/t_ari');
var image1 = require('../model/t_image');

//获取数据
router.get('/', function(req, res, next) {
    const mineData = [];
    ari.find({}, function (err, comment) {
        const mineData = comment;
        res.send(mineData);
    });
});

//删除
router.post('/', function(req, res, next) {
    const{id} = req.body;
    ari.remove({_id: req.body.id}, function(err, docs){
        if(err){
            console.log(err);
        }else {
            ari.find({}, function (err, comment) {
                var  mineData = comment;
                res.send(mineData);
            });
        }
    })

});

//增加
router.post('/add', function(req, res, next) {
     var myDate = new Date();
    const {title,type,content,image} = req.body;
    console.log(req.body.image);
    image1.findOne({ name:req.body.image },function (err, doc) {
        ari.create({
            title:req.body.title,
            imageid:doc._id,
            content:req.body.content,
            publishtime:myDate.toLocaleDateString(),
            type:req.body.type,
            adduser:"admin",
            addtime: myDate.toLocaleDateString(),
            updateuser:"admin",
            updatetime: myDate.toLocaleDateString(),
            statue: 0,
            isdel: 0,
        }, function (error, doc1) {
            if (error) {
                console.error(error);
                res.send("失败");
            } else {
               // console.error(doc);
                ari.find({}, function (err, comment) {
                    const mineData = comment;
                    res.send(mineData);
                });
            }

        });

     });
});


//更新
router.post('/update', function(req, res, next) {
     var myDate = new Date();
     const {id,title,type,content,image} = req.body;
     console.log(req.body.id);
     image1.findOne({ name:req.body.image },function (err, doc) {
         ari.findById(req.body.id, function (err, tank) {
             if (err) return handleError(err);
             tank.set({ title: req.body.title });
             tank.set({type:req.body.type });
             tank.set({content:req.body.content });
             tank.set({imageid:doc._id});
             tank.set({updatetime:myDate.toLocaleDateString()})
             tank.save(function (err, updatedTank) {
                 if (err) {
                     return handleError(err);
                 }else{
                     ari.find({}, function (err, comment) {
                         const mineData = comment;
                         res.send(mineData);
                     });
                 }
             });
         });
    });
});
module.exports = router;
