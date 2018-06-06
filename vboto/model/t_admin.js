var mongoose = require('mongoose');

var AdminSchema = new mongoose.Schema({
    account: String,
    passwd: String,
    addtime: Date,
    staue: Boolean,
    isdel: Boolean
});
module.exports = mongoose.model('admin', AdminSchema,'t_admin');