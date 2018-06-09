var mongoose = require('mongoose');

var AdminSchema = new mongoose.Schema({
    account: String,
    passwd: String,
    addtime: Date,
    staue: Number,
    isdel: Number,
    code: Number
});
module.exports = mongoose.model('admin', AdminSchema,'t_admin');