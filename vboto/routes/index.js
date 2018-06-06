var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var admin = require('../model/t_admin');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.use('/login/account',function(req, res, next) {
    const { password, userName, type } = req.body;
    admin.findOne({ account:req.body.userName,passwd:req.body.password },function (err, doc) {
        if(doc){
            res.send({
                status: 'ok',
                type,
                currentAuthority: 'admin',
                 aaa:'勒布朗'
            });
            return;
        }else{
            res.send({
                status: 'error',
                type,
                currentAuthority: 'guest',
                aaa:'詹姆士'
            });
        }

    });
});


// router.use('/currentUser',function (req, res, next) {
//     $desc: '获取当前用户接口',
//         $params: {
//         pageSize: {
//             desc: '分页',
//                 exp: 2,
//         },
//     },
//     $body: {
//         name: 'Serati Ma',
//             avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
//             userid: '00000001',
//             notifyCount: 12,
//     }
//
// });


module.exports = router;
