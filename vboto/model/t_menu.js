var mongoose = require('mongoose');

var MenuSchema = new mongoose.Schema({
    name: String,
    parentid: Number,
    adduser:String,
    addtime: Date,
    updateuser: String,
    updatetime: Date,
    statue:Number,
    isdel:Number
},{versionKey: false});
module.exports = mongoose.model('menu', MenuSchema,'t_menu');