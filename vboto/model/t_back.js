var mongoose = require('mongoose');

var BackSchema = new mongoose.Schema({
    name: String,
    tel: String,
    content: String,
    ip:String,
    addtime: Date,
    staue: Boolean
});
module.exports = mongoose.model('back', BackSchema,'t_back');