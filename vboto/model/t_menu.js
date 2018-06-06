var mongoose = require('mongoose');

var MenuSchema = new mongoose.Schema({
    name: String,
    parentedid: Number,
    adduser:String,
    addtime: Date,
    updateuser: String,
    updatetime: Date,
    staue: Boolean,
    isdel:Boolean
});
module.exports = mongoose.model('menu', MenuSchema,'t_menu');