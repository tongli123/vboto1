var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var image = require('../model/t_image');
var  fs = require('fs');
var multer  = require('multer');
var upload = multer({dest: 'upload/'});

//删除
router.post('/', function(req, res, next) {
    const{id} = req.body;
    image.remove({_id: req.body.id}, function(err, docs){
        if(err){
            console.log(err);
        }else {
            image.find({}, function (err, comment) {
                var  mineData = comment;
                res.send(mineData);
            });
        }
    })

});


//读取数据
router.get('/', function(req, res, next) {
    image.find({}, function (err, comment) {
        var mineData = comment;
        res.send(mineData);
    });
});

//上传
router.post('/upload', upload.single('imageFile'), function(req, res, next) {
    // req.file 是 前端表单name=="imageFile" 的文件信息（不是数组）

    fs.rename(req.file.path, "upload/" + req.file.originalname, function(err) {
        if (err) {
            throw err;
        }
        console.log('上传成功!');
    })
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*"
    });
    var myDate = new Date();
    image.create({
        name: req.file.originalname,
        path: "upload/" + req.file.originalname,
        addtime: myDate.toLocaleDateString(),
        type:1,
        sort:0,
        adduser:"admin",
        updateuser:"admin",
        updatetime: myDate.toLocaleDateString(),
        statue: 0,
        isdel: 0,
    }, function (error, doc) {
        if (error) {
            console.error(error);
            res.send("失败");
        } else {
            console.error(doc);
            // admin.find({}, function (err, comment) {
            //     const mineData = comment;
            //     res.send(mineData);
            //});
        }

    });
    res.end(JSON.stringify(req.file)+JSON.stringify(req.body));
})


//更新
router.post('/update', function(req, res, next) {
    var myDate = new Date();
    const {id, updateuser,type} = req.body;

    image.findById(req.body.id, function (err, tank) {
        if (err) return handleError(err);
        tank.set({ type: req.body.type });
        tank.set({updateuser :req.body.updateuser });
        tank.save(function (err, updatedTank) {
            if (err) {
                return handleError(err);
            }else{
                image.find({}, function (err, comment) {
                    const mineData = comment;
                    res.send(mineData);
                });
            }
            // // res.send(updatedTank);
            // res.send("ok");
        });
    });

});

//上传
// router.post('/upload1', upload.single('imageFile'), function(req, res, next) {
//     // req.file 是 前端表单name=="imageFile" 的文件信息（不是数组）
//
//     fs.rename(req.file.path, "upload/" + req.file.originalname, function(err) {
//         if (err) {
//             throw err;
//         }
//         console.log('上传成功!');
//     })
//     res.writeHead(200, {
//         "Access-Control-Allow-Origin": "*"
//     });
//     var myDate = new Date();
//     image.create({
//         name: req.file.originalname,
//         path: "upload/" + req.file.originalname,
//         addtime: myDate.toLocaleDateString(),
//         type:1,
//         sort:0,
//         adduser:"admin",
//         updateuser:"admin",
//         updatetime: myDate.toLocaleDateString(),
//         statue: 0,
//         isdel: 0,
//     }, function (error, doc) {
//         if (error) {
//             console.error(error);
//             res.send("失败");
//         } else {
//             console.error(doc);
//         }
//     });
//     // image.findOne({ name:req.file.originalname },function (err, doc) {
//     //     // if(doc){
//     //     //         console.log(doc._id);
//     //     // }
//     //     res.send(doc._id);
//     // });
//     res.end(JSON.stringify(req.file)+JSON.stringify(req.body));
// })



module.exports = router;