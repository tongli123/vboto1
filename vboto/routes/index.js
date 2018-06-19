var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var admin = require('../model/t_admin');
var back = require('../model/t_back');
var logs = require('../model/t_logs');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});




//登录
router.post('/login/account',function(req, res, next) {
    // const { username,password } = req.body;
    // console.log(req.body.username);
    // console.log(req.body.password);
    const { password, userName, type } = req.body;
    admin.findOne({ account:req.body.userName,passwd:req.body.password },function (err, doc) {
        if(doc){
            // req.session.sign=true;
            // req.session.name = req.body.username;
           // res.send("成功");
            res.send({
                status: 'ok',
                type,
                currentAuthority: 'admin',
            });
            return;
        }else{
            //res.send("失败");
            res.send({
                status: 'error',
                type,
                currentAuthority: 'guest',
            });
        }
    });
});


// router.use('/forms',function(req, res, next) {
//      const { password, userName} = req.body;
//     var ip = req.headers['x-forwarded-for'] ||
//         req.connection.remoteAddress ||
//         req.socket.remoteAddress ||
//         req.connection.socket.remoteAddress;
//
//     res.send({ message: 'Ok' });
// });



//日志
router.use('/log',function(req, res, next) {
    logs.find({}, function (err, comment) {
        const mineData = comment;
        res.send(mineData);
    });
});

//获取账号
router.use('/accountmanage/show',function(req, res, next) {
    const mineData = [];
    admin.find({}, function (err, comment) {
        const mineData = comment;
        res.send(mineData);
    });
});


module.exports = router;
