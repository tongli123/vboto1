var mongoose = require('mongoose');

var AdminSchema = new mongoose.Schema({
    account: String,
    passwd: String,
    addtime: Date,
    statue: Number,
    isdel: Number,
    code: Number
},{versionKey: false}
);
module.exports = mongoose.model('admin', AdminSchema,'t_admin');