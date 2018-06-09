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
router.use('/login/account',function(req, res, next) {
    const { password, userName, type } = req.body;
    admin.findOne({ account:req.body.userName,passwd:req.body.password },function (err, doc) {
        if(doc){
            admin.findOne({ account:req.body.userName,passwd:req.body.password ,code:0},function (err1, doc1) {
                if (doc1) {
                    res.send({
                        status: 'ok',
                        type,
                        currentAuthority: 'admin',
                    });
                    return;
                }else{
                    res.send({
                        status: 'ok',
                        type,
                        currentAuthority: 'user',
                    });
                    return;
                }
            });
        }else{
            res.send({
                status: 'error',
                type,
                currentAuthority: 'guest'
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


//留言
router.use('/leavemessage',function(req, res, next) {
    const mineData = [];
    back.find({}, function (err, comment) {
        const mineData = comment;
        console.log(mineData);
         res.send(mineData);
    });
});


router.use('/log',function(req, res, next) {
    const mineData = [];
    logs.find({}, function (err, comment) {
        console.log(comment);
        const mineData = comment;
        res.send(mineData);
    });
});

module.exports = router;
